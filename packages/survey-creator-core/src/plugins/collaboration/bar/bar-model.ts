import { Action, ActionContainer, Base, IAction, ListModel, createDropdownActionModel, property } from "survey-core";
import { ComponentContainerModel, SurveyCreatorModel, applyCreatorUiLocaleToPopup, editorLocalization } from "survey-creator-core";
import { getCollabString } from "../collaboration-strings";
import { FloatingPanelModel } from "./floating-panel/floating-panel-model";
import { presenceColorSlot, presenceInitials } from "../presence/presence-state";
import { CollabBarStatus, ICollabBarOptions, ICollabChange, ICollabParticipant } from "./bar-types";
import { CollabRowAction } from "./collab-row-action";
import { VersionHistoryModel } from "./version-history-model";

import "./bar.scss";

// How long the Invite button shows "Copied" before reverting.
const INVITE_COPIED_MS = 1500;

const STATUS_ICONS: { [index: string]: string } = {
  connecting: "icon-collabstatus-16x16",
  connected: "icon-collabstatus-16x16",
  closed: "icon-collabstatus-16x16"
};

// The collaboration strip's model: the "Collaboration" menu and the connection
// plate on the left, participant avatars and "Invite" on the right, plus the
// Version History panel it opens.
//
// Everything visible is an Action in one of the three containers, and the strip
// itself is a ComponentContainerModel assembled from components the renderers
// already know - so the feature contributes no strip component of its own. The
// model never touches the DOM.
export class CollabBarModel extends Base {
  // Left group: the "Collaboration" dropdown.
  public actions: ActionContainer = new ActionContainer();
  // Right group: the participants overflow and "Invite".
  public toolActions: ActionContainer = new ActionContainer();
  // The avatar chips.
  public participantActions: ActionContainer = new ActionContainer();

  @property({ defaultValue: "connecting" }) status: CollabBarStatus;
  @property({ defaultValue: 8 }) maxVisibleParticipants: number;

  // The connection plate. A row action rather than a handful of loose
  // properties: everything inside the container has to be a model that some
  // registered component can render.
  public statusRow: CollabRowAction;
  // The Version History window and its content model. Built eagerly: the
  // container reads `elements` once (see createContainer), so a lazily created
  // panel would never be rendered. Neither costs anything until shown.
  public versionHistory: VersionHistoryModel;
  public historyPanel: FloatingPanelModel;
  // What the creator shell renders in its collaboration slot.
  public container: ComponentContainerModel;

  private participants: Array<ICollabParticipant> = [];
  // Signature of the last rendered roster: presence fires on every remote
  // cursor move, and only these four fields affect what the bar shows.
  private participantsSig: string | undefined;
  private changes: ReadonlyArray<ICollabChange> = [];
  private inviteTimer: any;

  constructor(private creator: SurveyCreatorModel, private options: ICollabBarOptions = {}) {
    super();
    this.actions.setItems([this.createMenuAction()]);
    this.actions.containerCss = "svc-collab-bar__actions";
    this.actions.setActionsAppearance({ style: "neutral", mode: "tertiary-surface", size: "small" });

    const tools: Array<Action> = [this.createParticipantsAction()];
    if (!!this.options.getInviteLink) tools.push(this.createInviteAction());
    this.toolActions.setItems(tools);
    this.toolActions.containerCss = "svc-collab-bar__tools";

    this.participantActions.containerCss = "svc-collab-bar__participants";

    this.statusRow = new CollabRowAction({ id: "collabStatus" });
    // Announce reconnects to screen readers; the plate is not clickable, which
    // is why it is a row and not an action-bar item.
    this.statusRow.rowRole = "status";
    this.updateStatus();

    this.versionHistory = new VersionHistoryModel();
    this.historyPanel = new FloatingPanelModel({
      id: "collabVersionHistory",
      title: getCollabString("collabVersionHistory"),
      contentComponentName: "sv-list",
      contentComponentData: { model: this.versionHistory.list }
    });

    this.container = this.createContainer();
  }

  // The strip's markup, assembled from models the renderers already know - the
  // same way the UI Preset Editor builds its tab (see presets-plugin.ts).
  //
  // ComponentContainerModel is NOT a Base, so `elements` is read once and
  // everything referenced here must already exist. Reactivity lives in the
  // leaves instead: each sv-action-bar / svc-collab-row / sv-list subscribes to
  // its own model.
  private createContainer(): ComponentContainerModel {
    // The row travels under both names: sv-list calls it `model` in Angular and
    // `item` in React/Vue, so the renderers disagree - see CollabRowComponent.
    const statusData = { item: this.statusRow, model: this.statusRow };
    const group = (cssClass: string, elements: Array<any>): any => ({
      componentName: "svc-component-container",
      componentData: { model: new ComponentContainerModel({ cssClass, elements }) }
    });
    return new ComponentContainerModel({
      cssClass: "svc-collab-bar",
      elements: [
        group("svc-collab-bar__left", [
          { componentName: "sv-action-bar", componentData: { model: this.actions } },
          { componentName: "svc-collab-row", componentData: statusData }
        ]),
        group("svc-collab-bar__right", [
          { componentName: "sv-action-bar", componentData: { model: this.participantActions } },
          { componentName: "sv-action-bar", componentData: { model: this.toolActions } }
        ]),
        // position: fixed, so the window costs the strip no layout while staying
        // inside the themed creator root where the --sjs2-* variables live.
        { componentName: "svc-floating-panel", componentData: { model: this.historyPanel } }
      ]
    });
  }

  public getType(): string {
    return "collabbar";
  }

  public setStatus(status: CollabBarStatus): void {
    this.status = status;
    this.updateStatus();
  }

  public setHistory(changes: ReadonlyArray<ICollabChange>): void {
    this.changes = changes || [];
    this.versionHistory.setChanges(this.changes);
  }

  public setParticipants(users: Array<ICollabParticipant>): void {
    const list = users || [];
    const sig = list.map((u) => [u.id, u.name, u.color, u.colorIndex, u.tab].join("\n")).join("|");
    if (sig === this.participantsSig) return;
    this.participantsSig = sig;
    this.participants = list;

    const shown = list.slice(0, this.maxVisibleParticipants);
    this.participantActions.setItems(shown.map((user) => this.createParticipantChip(user)));

    const overflow = this.toolActions.getActionById("collabParticipants");
    if (!!overflow) {
      overflow.visible = list.length > 0;
      // Keep an already-open roster live.
      const listModel = this.getPopupList(overflow);
      if (!!listModel && !!overflow.popupModel && overflow.popupModel.isVisible) {
        listModel.setItems(this.buildRosterItems());
      }
    }
  }

  public showVersionHistory(): void {
    this.versionHistory.setChanges(this.changes);
    this.historyPanel.show();
  }

  public dispose(): void {
    if (this.inviteTimer !== undefined) clearTimeout(this.inviteTimer);
    this.actions.dispose();
    this.toolActions.dispose();
    this.participantActions.dispose();
    this.historyPanel.dispose();
    this.historyPanel = undefined;
    this.versionHistory.dispose();
    this.versionHistory = undefined;
    super.dispose();
  }

  private updateStatus(): void {
    const status = this.status || "connecting";
    const row = this.statusRow;
    // The plate is only worth screen space while something is wrong.
    row.visible = status !== "connected";
    row.rowCss = "svc-collab-bar__status svc-collab-bar__status--" + status;
    row.markerIconName = STATUS_ICONS[status];
    row.title = getCollabString("collabStatus" + status.charAt(0).toUpperCase() + status.substring(1));
  }

  private getPopupList(action: Action): ListModel {
    const data: any = !!action.popupModel ? action.popupModel.contentComponentData : undefined;
    return !!data ? data.model : undefined;
  }

  private createMenuAction(): Action {
    const action = createDropdownActionModel({
      id: "collabMenu",
      title: getCollabString("collabMenu"),
      showTitle: true,
      iconName: "icon-chevrondown-16x16",
      iconSize: 16
    }, {
      items: [],
      allowSelection: false,
      // createDropdownActionModel syncs the trigger's title to the picked item
      // - selector semantics ("Device: iPhone"). This is a command menu, so the
      // trigger has to keep saying "Collaboration"; the sync runs first and our
      // handler restores it.
      onSelectionChanged: () => {
        action.title = getCollabString("collabMenu");
      },
      cssClass: "svc-creator-popup svc-collab-bar__menu-popup",
      horizontalPosition: "left",
      verticalPosition: "bottom"
    }, this.creator);
    // Rebuilt on every open so the info rows pick up the current room/framework.
    action.popupModel.onVisibilityChanged.add((_: any, opt: any) => {
      if (!opt.isVisible) return;
      applyCreatorUiLocaleToPopup(action.popupModel, this.creator);
      const list = this.getPopupList(action);
      if (!list) return;
      list.setItems(this.buildMenuItems());
    });
    return action;
  }

  private buildMenuItems(): Array<IAction> {
    const items: Array<IAction> = [{
      id: "collabHistory",
      title: getCollabString("collabShowVersionHistory"),
      action: () => this.showVersionHistory()
    }];
    const infoRows: Array<IAction> = [];
    if (!!this.options.roomId) {
      infoRows.push({
        id: "collabRoom",
        title: getCollabString("collabRoom", this.options.roomId),
        // Informational, not clickable. Both flags matter: isLabel picks the
        // label markup, enabled:false makes the click a no-op.
        isLabel: true,
        enabled: false
      });
    }
    if (!!this.options.framework) {
      infoRows.push({
        id: "collabFramework",
        title: getCollabString("collabFramework", this.options.framework),
        isLabel: true,
        enabled: false
      });
    }
    if (infoRows.length > 0) {
      infoRows[0].needSeparator = true;
      for (let i = 0; i < infoRows.length; i++) items.push(infoRows[i]);
    }
    const onBack = this.options.onBack;
    if (!!onBack) {
      items.push({
        id: "collabBack",
        title: getCollabString("collabBackToLobby"),
        needSeparator: true,
        action: () => onBack()
      });
    }
    return items;
  }

  private createParticipantsAction(): Action {
    const action = createDropdownActionModel({
      id: "collabParticipants",
      showTitle: false,
      iconName: "icon-chevrondown-16x16",
      iconSize: 16,
      tooltip: getCollabString("collabParticipants"),
      // Nothing to list until somebody joins.
      visible: false
    }, {
      items: [],
      allowSelection: false,
      cssClass: "svc-creator-popup svc-collab-bar__roster-popup",
      horizontalPosition: "right",
      verticalPosition: "bottom"
    }, this.creator);
    action.popupModel.onVisibilityChanged.add((_: any, opt: any) => {
      if (!opt.isVisible) return;
      applyCreatorUiLocaleToPopup(action.popupModel, this.creator);
      const list = this.getPopupList(action);
      if (!list) return;
      list.setItems(this.buildRosterItems());
    });
    return action;
  }

  private buildRosterItems(): Array<IAction> {
    if (this.participants.length === 0) {
      return [{ id: "collabNoParticipants", title: getCollabString("collabNoParticipants"), isLabel: true, enabled: false }];
    }
    // Fresh clones every time: the list container rewrites cssClasses/owner on
    // the actions it is given, which would corrupt the strip's chips.
    return this.participants.map((user) => this.createParticipantRow(user));
  }

  // A chip in the strip: a PLAIN Action, so the action bar supplies the button,
  // key2click, the tooltip and the overflow behavior. `innerCss` lands on that
  // button (Action.getActionBarItemCss), which is what turns it into the avatar
  // circle - no avatar component per framework needed.
  private createParticipantChip(user: ICollabParticipant): Action {
    const action = new Action({
      id: user.id,
      title: presenceInitials(user.name),
      showTitle: true,
      tooltip: this.getParticipantTooltip(user),
      action: () => this.goToParticipant(user)
    });
    action.innerCss = "svc-collab-bar__participant " + avatarCss(colorIndexOf(user));
    return action;
  }

  // A row in the overflow roster: the avatar is a marker inside the row and the
  // <li> that sv-list draws around it owns the click. `component` overrides the
  // list's default item renderer for this item only, so the "no participants"
  // placeholder keeps its own label markup.
  private createParticipantRow(user: ICollabParticipant): CollabRowAction {
    const row = new CollabRowAction({
      id: user.id,
      title: user.name,
      tooltip: this.getParticipantTooltip(user),
      component: "svc-collab-row",
      action: () => this.goToParticipant(user)
    });
    row.rowCss = "svc-collab-bar__roster-item";
    row.markerText = presenceInitials(user.name);
    row.markerCss = avatarCss(colorIndexOf(user)) + " svc-collab-bar__avatar--list";
    return row;
  }

  private getParticipantTooltip(user: ICollabParticipant): string {
    if (!user.tab) return user.name;
    // The tab name is the creator's own string, so it follows the UI locale
    // while the frame around it does not - the tooltips are rebuilt on the next
    // roster change rather than on a locale switch. Resolved when the strings
    // in collaboration-strings.ts become localized.
    const tabName = editorLocalization.getString("tabs." + user.tab);
    return getCollabString("collabParticipantTooltip", user.name, tabName);
  }

  private goToParticipant(user: ICollabParticipant): void {
    if (!!this.options.onGoToParticipant) {
      this.options.onGoToParticipant(user);
      return;
    }
    if (!!user.tab)this.creator.activeTab = user.tab;
  }

  private createInviteAction(): Action {
    const action = new Action({
      id: "collabInvite",
      title: getCollabString("collabInvite"),
      showTitle: true,
      tooltip: getCollabString("collabInviteTooltip"),
      action: () => this.copyInviteLink(action)
    });
    action.appearance = { style: "brand", mode: "primary", size: "small" };
    return action;
  }

  private copyInviteLink(action: Action): void {
    const getLink = this.options.getInviteLink;
    if (!getLink) return;
    const clipboard: any = typeof navigator !== "undefined" ? navigator.clipboard : undefined;
    if (!!clipboard && typeof clipboard.writeText === "function") {
      clipboard.writeText(getLink());
    }
    action.title = getCollabString("collabInviteCopied");
    if (this.inviteTimer !== undefined) clearTimeout(this.inviteTimer);
    this.inviteTimer = setTimeout(() => {
      this.inviteTimer = undefined;
      action.title = getCollabString("collabInvite");
    }, INVITE_COPIED_MS);
  }
}

// The avatar circle: the base shape plus the theme's user-color slot. Used for
// the strip chip (on the action-bar button) and for the roster marker.
function avatarCss(colorIndex: number): string {
  return "svc-collab-bar__avatar svc-collab-bar__avatar--color-" + colorIndex;
}

// The transport may stamp the slot itself; otherwise every client derives the
// same one from the id (see presenceColorSlot).
function colorIndexOf(user: ICollabParticipant): number {
  return typeof user.colorIndex === "number" ? user.colorIndex : presenceColorSlot(user.id);
}
