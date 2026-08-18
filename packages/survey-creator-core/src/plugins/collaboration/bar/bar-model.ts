import { Action, ActionContainer, Base, CssClassBuilder, IAction, ListModel, createDropdownActionModel, property } from "survey-core";
import { SurveyCreatorModel, applyCreatorUiLocaleToPopup, editorLocalization } from "survey-creator-core";
import { getCollabString } from "../collaboration-strings";
import { FloatingPanelModel } from "./floating-panel/floating-panel-model";
import { presenceColorSlot, presenceInitials } from "../presence/presence-state";
import { CollabBarStatus, ICollabBarOptions, ICollabChange, ICollabParticipant } from "./bar-types";
import { CollabParticipantAction } from "./participant-action";
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
// Everything visible is either an Action in one of the three containers or a
// reactive property the strip template binds - the model never touches the DOM.
export class CollabBarModel extends Base {
  // Left group: the "Collaboration" dropdown.
  public actions: ActionContainer = new ActionContainer();
  // Right group: the participants overflow and "Invite".
  public toolActions: ActionContainer = new ActionContainer();
  // The avatar chips.
  public participantActions: ActionContainer = new ActionContainer();

  @property({ defaultValue: "connecting" }) status: CollabBarStatus;
  @property({ defaultValue: false }) statusVisible: boolean;
  @property() statusText: string;
  @property() statusIconName: string;
  @property() statusModifier: string;
  @property({ defaultValue: 8 }) maxVisibleParticipants: number;
  // Reactive: the strip's view renders the Version History window, so
  // creating it must trigger a re-render.
  @property() historyPanel: FloatingPanelModel;

  private participants: Array<ICollabParticipant> = [];
  // Signature of the last rendered roster: presence fires on every remote
  // cursor move, and only these four fields affect what the bar shows.
  private participantsSig: string | undefined;
  private changes: ReadonlyArray<ICollabChange> = [];
  private versionHistoryValue: VersionHistoryModel;
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
    this.updateStatus();
  }

  public getType(): string {
    return "collabbar";
  }

  public get versionHistory(): VersionHistoryModel {
    return this.versionHistoryValue;
  }

  public getStatusCss(): string {
    return new CssClassBuilder()
      .append("svc-collab-bar__status")
      .append("svc-collab-bar__status--" + this.statusModifier, !!this.statusModifier)
      .toString();
  }

  public setStatus(status: CollabBarStatus): void {
    this.status = status;
    this.updateStatus();
  }

  public setHistory(changes: ReadonlyArray<ICollabChange>): void {
    this.changes = changes || [];
    // Only push into the model when the panel exists; otherwise the rows are
    // built on first open.
    if (!!this.versionHistoryValue)this.versionHistoryValue.setChanges(this.changes);
  }

  public setParticipants(users: Array<ICollabParticipant>): void {
    const list = users || [];
    const sig = list.map((u) => [u.id, u.name, u.color, u.colorIndex, u.tab].join("\n")).join("|");
    if (sig === this.participantsSig) return;
    this.participantsSig = sig;
    this.participants = list;

    const shown = list.slice(0, this.maxVisibleParticipants);
    this.participantActions.setItems(shown.map((user) => this.createParticipantAction(user, false)));

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
    if (!this.versionHistoryValue) {
      this.versionHistoryValue = new VersionHistoryModel();
    }
    this.versionHistoryValue.setChanges(this.changes);
    if (!this.historyPanel) {
      // The bar owns the panel and the strip's view renders it - the creator
      // knows nothing about floating windows.
      this.historyPanel = new FloatingPanelModel({
        id: "collabVersionHistory",
        title: getCollabString("collabVersionHistory"),
        contentComponentName: "svc-version-history",
        contentComponentData: { model: this.versionHistoryValue }
      });
    }
    this.historyPanel.show();
  }

  public dispose(): void {
    if (this.inviteTimer !== undefined) clearTimeout(this.inviteTimer);
    this.actions.dispose();
    this.toolActions.dispose();
    this.participantActions.dispose();
    if (!!this.historyPanel) {
      this.historyPanel.dispose();
      this.historyPanel = undefined;
    }
    if (!!this.versionHistoryValue) {
      this.versionHistoryValue.dispose();
      this.versionHistoryValue = undefined;
    }
    super.dispose();
  }

  private updateStatus(): void {
    const status = this.status || "connecting";
    // The plate is only worth screen space while something is wrong.
    this.statusVisible = status !== "connected";
    this.statusModifier = status;
    this.statusIconName = STATUS_ICONS[status];
    this.statusText = getCollabString("collabStatus" + status.charAt(0).toUpperCase() + status.substring(1));
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
    return this.participants.map((user) => this.createParticipantAction(user, true));
  }

  private createParticipantAction(user: ICollabParticipant, isListItem: boolean): CollabParticipantAction {
    const action = new CollabParticipantAction({
      id: user.id,
      title: user.name,
      tooltip: this.getParticipantTooltip(user),
      component: "svc-collab-bar-avatar",
      showTitle: isListItem,
      action: () => this.goToParticipant(user)
    });
    action.colorIndex = typeof user.colorIndex === "number" ? user.colorIndex : presenceColorSlot(user.id);
    action.initials = presenceInitials(user.name);
    action.isListItem = isListItem;
    return action;
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
