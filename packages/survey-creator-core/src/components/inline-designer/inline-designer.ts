import {
  Action, ActionContainer, Base, ComputedUpdater, DomDocumentHelper, DomWindowHelper, PanelModelBase, property, defaultActionBarCss,
  PopupModel, ListModel, createPopupModelWithListModel, createDropdownActionModel, menuListCss, IElement, IPanel, PageModel,
  SurveyElement, SurveyModel
} from "survey-core";
import type { SurveyCreatorModel } from "../../creator-base";
import { SurveyElementAdornerBase } from "../survey-element-adorner-base";
import { SurveyElementActionContainer } from "../action-container-view-model";
import type { TabDesignerPlugin } from "../tabs/designer-plugin";
import type { PropertyGridViewModel } from "../../property-grid/property-grid-view-model";
import { InlinePropertyGridPanelModel, IInlinePropertyGridAnchor } from "./inline-property-grid";
import "./inline-designer.scss";

// Where the toolbox popup inserts (04): after `after` in its parent, or appended to `container` (a panel or a
// page; none for a survey without pages). `page` is set when the popup was opened from a page's toolbar.
interface IInlineToolboxContext {
  after?: IElement;
  container?: IPanel;
  page?: PageModel;
}

// Inline layout mode (prompts 03-05, prototype): owns the floating parts of the inline designer: the selected
// element's toolbar (03), the "+" handle and the toolbox popup (04), and the floating property grid panel (05).
// Created by TabDesignerViewModel only in inline mode and disposed when the mode or the tab changes.
export class InlineDesignerModel extends Base {
  public static ToolbarMinWidth = 240;
  // The selection outline is 2px wide at a 4px offset (inline-surface.scss): the toolbar sits outside it.
  private static OutlineOutset = 6;

  @property() toolbarTarget: Base;
  @property() toolbarAdorner: SurveyElementAdornerBase;
  @property({ defaultValue: false }) hasAnchor: boolean;
  @property({ defaultValue: false }) isDragging: boolean;
  @property({ defaultValue: false }) isToolbarPositioned: boolean;
  @property({ defaultValue: 0 }) toolbarTop: number;
  @property({ defaultValue: 0 }) toolbarLeft: number;
  @property({ defaultValue: 0 }) toolbarMaxWidth: number;
  @property({ defaultValue: "above" }) toolbarPlacement: "above" | "below" | "inside";
  // Changes whenever the toolbar shows another adorner's action container: the renderer re-keys the bar.
  @property({ defaultValue: 0 }) toolbarVersion: number;
  // The "+" handle (04): left of the selected element's box, at its top.
  @property({ defaultValue: 0 }) addHandleTop: number;
  @property({ defaultValue: 0 }) addHandleLeft: number;
  private static AddHandleGap = 4;
  // One toolbox popup for every target (04); its list is refilled on show.
  public toolboxPopupModel: PopupModel;
  private toolboxListModel: ListModel;
  private toolboxPopupTarget: HTMLElement;
  private toolboxContext: IInlineToolboxContext;
  private addHandleElement: HTMLElement;

  public extraActions: ActionContainer;
  // The floating property grid (05). Hidden by default; it shows the designer plugin's own grid view model.
  public propertyGridPanel: InlinePropertyGridPanelModel;
  // The grid's categories (its pages) as icon buttons, and the current category's title for the panel header.
  public propertyGridCategories: ActionContainer;
  @property({ defaultValue: "" }) propertyGridCategoryTitle: string;
  private propertyGridCategoriesSurvey: SurveyModel;
  // The latest sidebar.executeOnExpand callback (PG05), kept while the panel is closed or not mounted yet.
  private pendingPropertyGridCallback: () => void;
  private propertyGridReturnFocus: HTMLElement;
  private toolbarElement: HTMLElement;
  private anchorElement: HTMLElement;
  private resizeObserver: ResizeObserver;
  private observedRoot: HTMLElement;
  private checkTimer: any;
  private positionFrame: any;

  constructor(public creator: SurveyCreatorModel, private getInlineRoot: () => HTMLElement) {
    super();
    this.extraActions = new ActionContainer();
    this.extraActions.setActionsAppearance({ style: "brand", mode: "tertiary-muted", size: "x-small" });
    this.extraActions.cssClasses = { ...defaultActionBarCss, root: "svc-survey-element-toolbar " + defaultActionBarCss.root };
    this.creator.onElementSelected.add(this.onElementSelected);
    this.creator.onDragStart.add(this.onDragStart);
    this.creator.onDragClear.add(this.onDragClear);
    if (DomWindowHelper.isAvailable()) {
      DomWindowHelper.addEventListener("scroll", this.schedulePositionUpdate, { capture: true, passive: true });
      DomWindowHelper.addEventListener("resize", this.schedulePositionUpdate);
      DomDocumentHelper.addEventListener("keydown", this.onDocumentKeyDown);
    }
    if (typeof ResizeObserver !== "undefined") {
      this.resizeObserver = new ResizeObserver(() => this.schedulePositionUpdate());
    }
    // Prototype safety net: adorners are created, re-created (a dragged question remounts in its new row) and
    // detached by the renderer without an event the toolbar could follow, and rows above the target change
    // height without resizing the target. Re-check the target and its position a few times per second.
    this.checkTimer = setInterval(() => this.resolveTarget(), 300);
    this.createToolboxPopup();
    this.initPropertyGrid();
    this.setTarget(this.creator.selectedElement);
  }

  // --- The floating property grid (05) ---

  private get designerPlugin(): TabDesignerPlugin {
    return this.creator.getPlugin<TabDesignerPlugin>("designer", false);
  }
  // PG03: the plugin's own grid (identity): it already follows the selection through designerPropertyGrid.obj.
  public get propertyGridViewModel(): PropertyGridViewModel {
    return this.designerPlugin?.propertyGridViewModel;
  }
  public get isPropertyGridOpen(): boolean {
    return !!this.propertyGridPanel && this.propertyGridPanel.isOpen;
  }
  public get propertyGridTitle(): string {
    return this.propertyGridViewModel?.selectedElementName || "";
  }
  public get propertyGridCloseText(): string {
    return this.creator.getLocString("pe.close");
  }
  private initPropertyGrid(): void {
    this.propertyGridPanel = new InlinePropertyGridPanelModel();
    this.creator.sidebar.executeOnExpandHandler = this.onSidebarExecuteOnExpand;
    if (DomWindowHelper.isAvailable()) {
      // Capture: decided before survey-core's editors handle the key (they do not consume Escape).
      DomWindowHelper.addEventListener("keydown", this.onPropertyGridKeyDown, true);
    }
    // The grid keeps the creator's navigation mode: one category per page (V3), with the categories as an icon
    // strip in the panel instead of the sidebar's tab control.
    this.propertyGridCategories = new ActionContainer();
    const pgModel = this.propertyGridViewModel;
    if (!!pgModel) {
      pgModel.registerPropertyChangedHandlers(["survey"], this.onPropertyGridSurveyChanged, "inline-designer-categories");
    }
    this.onPropertyGridSurveyChanged();
  }
  public get isPropertyGridMultiPage(): boolean {
    return !!this.designerPlugin && this.designerPlugin.showOneCategoryInPropertyGrid;
  }
  // The grid survey is rebuilt on every selection: refill the category strip from its pages.
  private onPropertyGridSurveyChanged = (): void => {
    if (this.isDisposed) return;
    const prev = this.propertyGridCategoriesSurvey;
    if (!!prev) {
      prev.onCurrentPageChanged.remove(this.onPropertyGridCurrentPageChanged);
      prev.onPageVisibleChanged.remove(this.onPropertyGridPageVisibleChanged);
    }
    const survey = this.isPropertyGridMultiPage ? this.propertyGridViewModel?.survey : undefined;
    this.propertyGridCategoriesSurvey = survey;
    const actions: Array<Action> = [];
    if (!!survey) {
      survey.onCurrentPageChanged.add(this.onPropertyGridCurrentPageChanged);
      survey.onPageVisibleChanged.add(this.onPropertyGridPageVisibleChanged);
      // As the sidebar's tab control (TabDesignerPlugin.getPropertyGridTabActions).
      survey.pages.forEach(page => {
        if (page.elements.length === 0) return;
        actions.push(new Action({
          id: page.name,
          iconName: page["iconName"],
          iconSize: "auto",
          tooltip: page.title,
          title: page.title,
          showTitle: false,
          active: page === survey.currentPage,
          visible: page.isVisible,
          action: () => { survey.currentPage = page; }
        }));
      });
    }
    const old = this.propertyGridCategories.actions.slice();
    this.propertyGridCategories.setItems(actions);
    old.forEach(a => a.dispose());
    this.propertyGridCategoryTitle = survey?.currentPage?.title || "";
  };
  private onPropertyGridCurrentPageChanged = (survey: SurveyModel): void => {
    const page = survey.currentPage;
    this.propertyGridCategories.actions.forEach(a => a.active = !!page && a.id === page.name);
    this.propertyGridCategoryTitle = page?.title || "";
    // Each category starts at the top.
    const body = this.propertyGridPanel?.rootElement?.querySelector(".svc-inline-property-grid__body");
    if (!!body) body.scrollTop = 0;
  };
  private onPropertyGridPageVisibleChanged = (_: SurveyModel, options: { page: PageModel }): void => {
    const action = this.propertyGridCategories.getActionById(options.page.name);
    if (!!action) action.visible = options.page.isVisible;
  };
  // Opens the panel for the selected element (the settings action, Survey Settings, or host code).
  public showPropertyGrid(focusFirstEditor: boolean = true): void {
    if (this.isDisposed) return;
    this.hideToolboxPopup();
    const doc = DomDocumentHelper.getDocument();
    const active = !!doc ? doc.activeElement as HTMLElement : undefined;
    if (!!active && active !== DomDocumentHelper.getBody() && !this.isInsidePropertyGrid(active)) {
      this.propertyGridReturnFocus = active;
    }
    if (focusFirstEditor) {
      // As the standard settings action: this replaces a pending selectProperty callback.
      this.pendingPropertyGridCallback = () => {
        const pg = this.creator.propertyGrid;
        const q = !!pg ? pg.getAllQuestions()[0] : undefined;
        if (!!q) q.focus();
      };
    }
    const wasOpen = this.isPropertyGridOpen;
    this.propertyGridPanel.open(this.getPropertyGridAnchor());
    if (wasOpen && !!this.propertyGridPanel.rootElement)this.runPendingPropertyGridCallback();
  }
  public hidePropertyGrid(restoreFocus: boolean = false): void {
    if (!this.isPropertyGridOpen) return;
    this.propertyGridPanel.close();
    const el = this.propertyGridReturnFocus;
    this.propertyGridReturnFocus = undefined;
    if (restoreFocus && !!el && el.isConnected && typeof el.focus === "function") el.focus({ preventScroll: true });
  }
  public togglePropertyGrid(): void {
    if (this.isPropertyGridOpen)this.hidePropertyGrid();
    else this.showPropertyGrid();
  }
  // The renderer reports the panel root on mount / unmount: pending callbacks run once the grid is mounted.
  public setPropertyGridElement(el: HTMLElement): void {
    if (this.isDisposed || !this.propertyGridPanel) return;
    this.propertyGridPanel.setRootElement(el);
    if (!!el && this.isPropertyGridOpen)this.runPendingPropertyGridCallback();
  }
  public onPropertyGridHeaderPointerDown(event: PointerEvent): void {
    this.propertyGridPanel.onHeaderPointerDown(event);
  }
  private runPendingPropertyGridCallback(): void {
    const cb = this.pendingPropertyGridCallback;
    this.pendingPropertyGridCallback = undefined;
    if (!!cb) cb();
  }
  // PG05: in inline mode the sidebar is not rendered (its renderedIsVisible says nothing). Run the callback now when
  // the panel is open and mounted; otherwise keep the latest one until the panel opens.
  // While open, the callback usually follows a selection that has just rebuilt the grid survey (selectProperty
  // focuses an editor that is not rendered yet), so it waits for the panel's next render (setPropertyGridElement
  // from componentDidUpdate), with a timer as a fallback when nothing re-renders.
  private onSidebarExecuteOnExpand = (callback: () => void): void => {
    this.pendingPropertyGridCallback = callback;
    if (this.isPropertyGridOpen && !!this.propertyGridPanel.rootElement) {
      setTimeout(() => {
        if (!this.isDisposed && this.isPropertyGridOpen && this.pendingPropertyGridCallback === callback)this.runPendingPropertyGridCallback();
      }, 100);
    }
  };
  private getPropertyGridAnchor(): IInlinePropertyGridAnchor {
    const el = this.anchorElement || this.getInlineRoot();
    if (!el || !el.isConnected) return undefined;
    const rect = el.getBoundingClientRect();
    const outset = this.isSurveyTarget || this.isPageTarget ? 0 : InlineDesignerModel.OutlineOutset;
    const handle = this.isAddHandleVisible ? (this.addHandleElement?.offsetWidth || 24) + InlineDesignerModel.AddHandleGap : 0;
    return { left: rect.left - outset, top: rect.top - outset, right: rect.right + outset, bottom: rect.bottom + outset, leftReserve: handle };
  }
  public isInsidePropertyGrid(target: any): boolean {
    const panelEl = this.propertyGridPanel?.rootElement;
    return !!panelEl && !!target && panelEl.contains(target);
  }
  // PG04: Escape closes the panel only when focus is inside it and the key is not for a popup, an open dropdown or a
  // modal editor (survey-core closes those without preventDefault). Capture phase: the popups are still open here.
  private onPropertyGridKeyDown = (event: KeyboardEvent) => {
    if (event.key !== "Escape" || event.defaultPrevented || !this.isPropertyGridOpen) return;
    const target = event.target as HTMLElement;
    if (!this.isInsidePropertyGrid(target) || !target.closest) return;
    if (!!target.closest(".sv-popup, [aria-expanded='true']")) return;
    const popups = this.propertyGridPanel.rootElement.querySelectorAll(".sv-popup");
    for (let i = 0; i < popups.length; i++) {
      if ((popups[i] as HTMLElement).style.display !== "none") return;
    }
    event.preventDefault();
    this.hidePropertyGrid(true);
  };

  // --- The "+" handle and the toolbox popup (04) ---

  // Questions and panels (an element in a row); pages and the survey use their toolbar's Add Question.
  public get isAddHandleVisible(): boolean {
    return this.isToolbarVisible && this.isToolbarPositioned && !this.isSurveyTarget && !this.isPageTarget && !this.creator.readOnly;
  }
  public get addHandleCss(): string {
    return "svc-inline-add-handle" + (this.isAddHandleVisible ? "" : " svc-inline-add-handle--hidden");
  }
  public get addHandleStyle(): { [index: string]: string } {
    return { top: this.addHandleTop + "px", left: this.addHandleLeft + "px" };
  }
  public get addHandleTitle(): string {
    return this.creator.getLocString("ed.addNewQuestion");
  }
  public setAddHandleElement(el: HTMLElement): void {
    if (this.addHandleElement === el) return;
    this.addHandleElement = el;
    this.schedulePositionUpdate();
  }
  public onAddHandleClick(): void {
    const target: any = this.toolbarTarget;
    if (!this.isAddHandleVisible || !target) return;
    this.showToolboxPopup({ after: target }, this.addHandleElement);
  }
  public showToolboxPopup(context: IInlineToolboxContext, targetElement: HTMLElement): void {
    if (this.creator.readOnly || !targetElement) return;
    this.toolboxContext = context;
    this.toolboxPopupTarget = targetElement;
    // Focus the search box on show and return focus to the handle (or the toolbar action) on close.
    this.toolboxPopupModel.isFocusedContent = true;
    this.toolboxPopupModel.displayMode = this.creator.isTouch ? "overlay" : "popup";
    if (this.toolboxPopupModel.isVisible)this.toolboxPopupModel.hide();
    this.toolboxPopupModel.show();
  }
  public hideToolboxPopup(): void {
    if (!!this.toolboxPopupModel && this.toolboxPopupModel.isVisible)this.toolboxPopupModel.hide();
  }
  private createToolboxPopup(): void {
    // Not createDropdownActionModel: the popup is shown from the "+" handle and from toolbar actions, not from one
    // dropdown action. isFocusedContent is set explicitly: createPopupModelWithListModel reads it from showFilter
    // once, while the list is still empty.
    const listOptions: any = {
      items: [],
      allowSelection: false,
      searchEnabled: true,
      forceShowFilter: true,
      cssClasses: { ...menuListCss },
      locOwner: this.creator
    };
    this.toolboxPopupModel = createPopupModelWithListModel(listOptions, {
      cssClass: "svc-creator-popup svc-inline-toolbox-popup",
      // With a side position, "bottom" aligns the popup's top with the target's top (PopupUtils.calculatePosition).
      verticalPosition: "bottom",
      horizontalPosition: "left",
      // No pointer: with a side position, survey-core moves the container with a transform (sv-popup--show-pointer
      // .sv-popup--left), which becomes the containing block of the nested subitems popup and clips it.
      showPointer: false,
      displayMode: this.creator.isTouch ? "overlay" : "popup"
    });
    this.toolboxListModel = this.toolboxPopupModel.contentComponentData.model;
    this.toolboxPopupModel.isFocusedContent = true;
    this.toolboxPopupModel.getTargetCallback = () => this.toolboxPopupTarget;
    this.toolboxPopupModel.onVisibilityChanged.add(this.onToolboxPopupVisibilityChanged);
  }
  private onToolboxPopupVisibilityChanged = (_: PopupModel, options: { isVisible: boolean }) => {
    if (!options.isVisible) return;
    const old = this.toolboxListModel.actions.slice();
    this.toolboxListModel.setItems(this.createToolboxActions());
    this.toolboxListModel.flushUpdates();
    old.forEach(a => a.dispose());
    // The list stays mounted between shows and keeps its scroll position: start every show at the top.
    setTimeout(() => {
      try {
        const scroller = this.toolboxListModel.scrollableContainer;
        if (!!scroller) scroller.scrollTop = 0;
      } catch(e) {
        // Not rendered (no DOM).
      }
    }, 0);
  };
  // The same items and filters as the "Add Question" dropdown (getAvailableToolboxItems), so toolbox
  // customization shows here too, with a separator at each category change.
  private createToolboxActions(): Array<Action> {
    const context = this.toolboxContext || {};
    const owner = this.getToolboxOwner(context);
    const items = this.creator.getAvailableToolboxItems(owner);
    const actions = this.creator.createToolboxItemActions(items, (type: string, json?: any) => this.onToolboxItemPicked(type, json), true);
    if (!!context.page) {
      actions.push(new Action({
        id: "svc-inline-add-page",
        title: this.addPageText,
        iconName: "icon-pg-pages-24x24",
        iconSize: "auto",
        needSeparator: actions.length > 0,
        action: () => this.onAddPagePicked()
      }));
    }
    return actions;
  }
  // The element whose nesting rules apply (getAvailableToolboxItems): the parent the new element goes into.
  private getToolboxOwner(context: IInlineToolboxContext): SurveyElement {
    const parent: any = !!context.after ? context.after.parent : context.container;
    if (!parent || parent.isPage) return undefined;
    return this.creator._getActualElementToAddNewElements(parent);
  }
  private get addPageText(): string {
    return this.creator.getLocString("ed.addNewTypeQuestion").replace("{0}", this.creator.getLocString("ed.pageTypeName"));
  }
  private onToolboxItemPicked(type: string, json?: any): void {
    const context = this.toolboxContext || {};
    this.closeToolboxPopupBeforeAdd();
    let elementJson = json;
    if (!elementJson) {
      const item = this.creator.toolbox.getItemByName(type);
      elementJson = !!item && !!item.json ? item.json : { type: type };
    }
    this.creator.addNewElementAfter(context.after, elementJson, context.container);
  }
  private onAddPagePicked(): void {
    const context = this.toolboxContext || {};
    this.closeToolboxPopupBeforeAdd();
    this.creator.addNewPageAfter(context.page);
  }
  private closeToolboxPopupBeforeAdd(): void {
    // The new element is selected and its title editor takes focus: do not return focus to the handle.
    if (this.creator.startEditTitleOnQuestionAdded)this.toolboxPopupModel.isFocusedContent = false;
    this.hideToolboxPopup();
  }
  private getActionElement(action: Action): HTMLElement {
    const doc = DomDocumentHelper.getDocument();
    return !!doc ? doc.getElementById(action.renderedId) as HTMLElement : undefined;
  }

  public get isSurveyTarget(): boolean {
    return !!this.toolbarTarget && this.toolbarTarget === this.creator.survey;
  }
  public get isPageTarget(): boolean {
    return !!this.toolbarTarget && !!this.toolbarTarget["isPage"];
  }
  public get isToolbarVisible(): boolean {
    return !!this.toolbarTarget && !this.isDragging && this.hasAnchor;
  }
  // The selected adorner's own container (no copy): onElementGetActions, allow-operations and the convert
  // dropdowns keep working.
  public get elementActions(): SurveyElementActionContainer {
    return this.toolbarAdorner?.actionContainer;
  }
  public get showDragHandle(): boolean {
    // A page has nowhere to go: inline mode shows one page at a time and no page navigator.
    return !!this.toolbarAdorner && !this.isPageTarget && this.toolbarAdorner.allowDragging;
  }
  public get toolbarTitle(): string {
    if (!this.isPageTarget) return "";
    const page = this.toolbarTarget as any;
    return page.title || page.name;
  }
  public get toolbarCss(): string {
    let css = "svc-inline-element-toolbar svc-inline-element-toolbar--" + this.toolbarPlacement;
    if (!this.isToolbarVisible) css += " svc-inline-element-toolbar--hidden";
    else if (!this.isToolbarPositioned) css += " svc-inline-element-toolbar--unpositioned";
    return css;
  }
  public get toolbarStyle(): { [index: string]: string } {
    const style: { [index: string]: string } = { top: this.toolbarTop + "px", left: this.toolbarLeft + "px" };
    if (this.toolbarMaxWidth > 0) style.maxWidth = this.toolbarMaxWidth + "px";
    return style;
  }
  public get toolbarAriaLabel(): string {
    if (this.isSurveyTarget) return this.creator.getLocString("ed.surveySettings");
    const el: any = this.toolbarTarget;
    return el?.name || "";
  }

  public setToolbarElement(el: HTMLElement): void {
    if (this.toolbarElement === el) {
      this.schedulePositionUpdate();
      return;
    }
    if (!!this.toolbarElement)this.resizeObserver?.unobserve(this.toolbarElement);
    this.toolbarElement = el;
    if (!!el)this.resizeObserver?.observe(el);
    this.schedulePositionUpdate();
  }
  public onDragHandlePointerDown(event: any): void {
    const adorner: any = this.toolbarAdorner;
    if (!!adorner && typeof adorner.onPointerDown === "function") {
      adorner.onPointerDown(event);
    }
  }
  // Toolbar clicks never reach the adorner. Duplicate / delete mark the adorner to skip its next select on a
  // mouse focus (disableActionFocusing), expecting the click to bubble into it; without this reset the next click
  // on that element selects its parent. Called in the click capture phase: Action.doAction stops propagation.
  public onToolbarClick(): void {
    if (!!this.toolbarAdorner)this.toolbarAdorner.isDisableSelecting = false;
  }

  private onElementSelected = (_: any, options: any) => {
    this.setTarget(options.newSelectedElement);
  };
  private onDragStart = () => {
    this.isDragging = true;
  };
  private onDragClear = () => {
    // The dropped element is usually re-rendered by a new adorner in its new row. Showing the toolbar at once
    // would mount (and start measuring) the old adorner's actions just before the renderer detaches it.
    setTimeout(() => {
      if (this.isDisposed) return;
      this.resolveTarget();
      this.isDragging = false;
    }, 50);
  };
  // Escape selects the parent: question -> panel -> page -> survey. Editors, inputs and popups keep their Escape.
  private onDocumentKeyDown = (event: KeyboardEvent) => {
    if (event.key !== "Escape" || event.defaultPrevented || this.isDragging) return;
    const target = event.target as HTMLElement;
    const root = this.creator.rootElement;
    if (!!target && target.closest) {
      if (target.closest("input, textarea, select, [contenteditable='true'], .sv-popup")) return;
      // Keys in the property grid panel (05) are the grid's: selecting the parent would switch the grid's object.
      if (this.isInsidePropertyGrid(target)) return;
      const isBody = target === DomDocumentHelper.getBody() || target === DomDocumentHelper.getDocumentElement();
      if (!isBody && !(!!root && root.contains(target))) return;
    }
    const parent = this.getParentForSelection(this.creator.selectedElement);
    if (!parent) return;
    this.creator.selectElement(parent, undefined, false);
  };
  private getParentForSelection(el: any): Base {
    const survey = this.creator.survey;
    if (!el || el === survey) return undefined;
    if (el.isPage) return survey;
    let parent = el.parentQuestion || el.parent || el.colOwner;
    // Template panels of a dynamic panel are not selectable; their question is.
    while(!!parent && parent instanceof PanelModelBase && !parent.isPage && !parent.isInteractiveDesignElement && !!parent["parentQuestion"]) {
      parent = parent["parentQuestion"];
    }
    if (!parent) return el.page || survey;
    return parent;
  }

  private setTarget(target: Base): void {
    if (this.toolbarTarget !== target) {
      this.hideToolboxPopup();
      this.toolbarTarget = target;
      this.isToolbarPositioned = false;
      this.updateExtraActions();
    }
    this.resolveTarget();
    // The adorner of an element selected through the API may mount later (lazy rendering).
    setTimeout(() => this.resolveTarget(), 1);
  }
  private updateExtraActions(): void {
    const actions: Array<Action> = [];
    const target: any = this.toolbarTarget;
    if (this.isSurveyTarget) {
      // An empty survey has no page and no element to anchor the popup to (04, TB02).
      if (this.creator.survey.pageCount === 0) {
        actions.push(this.createAddQuestionAction(() => ({})));
      }
      actions.push(new Action({
        id: "surveySettings",
        iconName: "icon-settings_16x16",
        iconSize: "auto",
        title: this.creator.getLocString("ed.surveySettings"),
        tooltip: this.creator.getLocString("ed.surveySettingsTooltip"),
        // 05: the floating property grid for the survey (the survey is selected while its toolbar shows).
        action: () => this.showPropertyGrid()
      }));
      actions.push(this.createSelectPageAction());
    } else if (!!target && (target.isPage || target.isPanel)) {
      // Appends inside the panel or page (TB04), as the old "Add question" button did.
      actions.push(this.createAddQuestionAction(() => ({ container: target, page: target.isPage ? target : undefined })));
      if (target.isPage) {
        actions.push(new Action({
          id: "addPage",
          iconName: "icon-add_16x16",
          iconSize: "auto",
          title: this.addPageText,
          action: () => {
            this.hideToolboxPopup();
            this.creator.addNewPageAfter(target);
          }
        }));
      }
    }
    // A copy: setItems may refill the same array, and disposing it would dispose the new actions.
    const old = this.extraActions.actions.slice();
    this.extraActions.setItems(actions);
    old.forEach(a => a.dispose());
  }
  // Survey toolbar: a page list next to Survey Settings. Picking a page selects it, which scrolls it into view.
  // The list is refilled on every show (pages are added, removed and renamed while the toolbar stays).
  private createSelectPageAction(): Action {
    const action = createDropdownActionModel({
      id: "selectPage",
      iconName: "icon-select-page",
      iconSize: "auto",
      title: this.creator.getLocString("ed.selectPage"),
      tooltip: this.creator.getLocString("ed.selectPage"),
      // Only with something to choose from; follows pages added or removed while the survey toolbar shows.
      visible: <any>new ComputedUpdater<boolean>(() => this.creator.survey.pages.length > 1)
    }, {
      items: [],
      allowSelection: false,
      verticalPosition: "bottom",
      horizontalPosition: "center",
      cssClass: "svc-creator-popup",
      onSelectionChanged: (item: Action) => {
        const page = this.creator.survey.getPageByName(item.id);
        if (!!page)this.creator.selectElement(page, undefined, true);
      }
    }, this.creator);
    action.popupModel.displayMode = this.creator.isTouch ? "overlay" : "popup";
    action.popupModel.onVisibilityChanged.add((_: PopupModel, options: { isVisible: boolean }) => {
      if (!options.isVisible) return;
      const listModel: ListModel = action.popupModel.contentComponentData.model;
      const old = listModel.actions.slice();
      listModel.setItems(this.creator.survey.pages.map(page => new Action({
        id: page.name,
        title: this.creator.getObjectDisplayName(page, "designer-tab:page-selector", "page-selector")
      })));
      listModel.flushUpdates();
      old.forEach(a => a.dispose());
    });
    return action;
  }
  private createAddQuestionAction(getContext: () => IInlineToolboxContext): Action {
    const action: Action = new Action({
      id: "addQuestion",
      iconName: "icon-add_16x16",
      iconSize: "auto",
      title: this.creator.getLocString("ed.addNewQuestion"),
      action: () => {
        this.showToolboxPopup(getContext(), this.getActionElement(action));
      }
    });
    return action;
  }
  private getAdornerFor(target: Base): SurveyElementAdornerBase {
    if (!target || target.isDisposed || this.isSurveyTarget) return undefined;
    const adorner = SurveyElementAdornerBase.GetAdorner<SurveyElementAdornerBase>(target);
    if (!adorner || adorner.isDisposed || adorner.surveyElement !== target) return undefined;
    return adorner;
  }
  private getAnchorFor(target: Base, adorner: SurveyElementAdornerBase): HTMLElement {
    if (!target || target.isDisposed) return undefined;
    const root = this.getInlineRoot();
    if (this.isSurveyTarget) {
      if (!root) return undefined;
      return (root.querySelector(".svc-designer-header") as HTMLElement) || root;
    }
    const el = adorner?.rootElement;
    return !!el && el.isConnected ? el : undefined;
  }
  public resolveTarget(): void {
    if (this.isDisposed) return;
    const target = this.toolbarTarget;
    const adorner = this.getAdornerFor(target);
    if (adorner !== this.toolbarAdorner) {
      this.releaseAdorner(this.toolbarAdorner);
      this.toolbarAdorner = adorner;
      this.attachAdorner(adorner);
      this.toolbarVersion++;
    }
    const anchor = this.getAnchorFor(target, adorner);
    if (anchor !== this.anchorElement) {
      if (!!this.anchorElement)this.resizeObserver?.unobserve(this.anchorElement);
      this.anchorElement = anchor;
      if (!!anchor)this.resizeObserver?.observe(anchor);
    }
    const root = this.getInlineRoot();
    if (root !== this.observedRoot) {
      if (!!this.observedRoot)this.resizeObserver?.unobserve(this.observedRoot);
      this.observedRoot = root;
      if (!!root)this.resizeObserver?.observe(root);
    }
    this.hasAnchor = !!anchor;
    this.updatePosition();
  }
  private onAdornerRootChanged = (adorner: SurveyElementAdornerBase) => {
    if (adorner !== this.toolbarAdorner || this.isDisposed) return;
    if (!adorner.rootElement) {
      // Detached (unmounted, or re-rendered in another row after a drop): stop measuring its actions now,
      // before its element is cleared, and pick up the new adorner once the renderer has mounted it.
      this.releaseAdorner(adorner);
      this.toolbarAdorner = undefined;
      this.toolbarVersion++;
      this.hasAnchor = false;
      setTimeout(() => this.resolveTarget(), 1);
    } else {
      this.resolveTarget();
    }
  };
  private attachAdorner(adorner: SurveyElementAdornerBase): void {
    if (!adorner) return;
    adorner.rootElementChangedCallback = this.onAdornerRootChanged;
    // The adorner computed the settings visibility for the layout it had when it was selected.
    (adorner as any).updateActionsProperties();
    const container = adorner.actionContainer;
    container.getAvailableSpaceCallback = () => this.getActionsAvailableSpace();
    // 02 leaves inline action containers without responsiveness; the toolbar renders this one.
    container.allowResponsiveness();
  }
  private releaseAdorner(adorner: SurveyElementAdornerBase): void {
    if (!adorner) return;
    if (adorner.rootElementChangedCallback === this.onAdornerRootChanged) adorner.rootElementChangedCallback = undefined;
    if (adorner.isDisposed) return;
    const container: SurveyElementActionContainer = (adorner as any).actionContainerValue;
    if (!container || container.isDisposed) return;
    container.getAvailableSpaceCallback = undefined;
    container.resetResponsivityManager();
    container.dotsItem.popupModel.isVisible = false;
    container.actions.forEach((action: any) => {
      if (!!action.popupModel && action.popupModel.isVisible) action.popupModel.isVisible = false;
    });
  }
  private getActionsAvailableSpace(): number {
    const toolbar = this.toolbarElement;
    const actionsHost = toolbar?.querySelector(".svc-inline-element-toolbar__actions") as HTMLElement;
    if (!toolbar || !actionsHost || !this.toolbarMaxWidth) return actionsHost?.offsetWidth || 0;
    const otherWidth = toolbar.offsetWidth - actionsHost.offsetWidth;
    return Math.max(0, this.toolbarMaxWidth - otherWidth);
  }

  private schedulePositionUpdate = () => {
    if (this.isDisposed || !!this.positionFrame) return;
    const raf = typeof requestAnimationFrame !== "undefined" ? requestAnimationFrame : (cb: any) => setTimeout(cb, 16);
    this.positionFrame = raf(() => {
      this.positionFrame = undefined;
      this.updatePosition();
    });
  };
  public updatePosition(): void {
    if (this.isDisposed) return;
    const toolbar = this.toolbarElement;
    const anchor = this.anchorElement;
    const container = toolbar?.offsetParent as HTMLElement;
    if (!toolbar || !anchor || !container || !this.isToolbarVisible) {
      return;
    }
    const containerRect = container.getBoundingClientRect();
    const anchorRect = anchor.getBoundingClientRect();
    const root = this.getInlineRoot();
    const rootRect = !!root ? root.getBoundingClientRect() : containerRect;
    const outset = this.isSurveyTarget || this.isPageTarget ? 0 : InlineDesignerModel.OutlineOutset;
    const gap = 2;

    const maxWidth = Math.round(Math.min(Math.max(InlineDesignerModel.ToolbarMinWidth, anchorRect.width + 2 * outset), rootRect.width));
    if (maxWidth !== this.toolbarMaxWidth) {
      this.toolbarMaxWidth = maxWidth;
      this.elementActions?.updateResponsiveness();
    }
    const width = toolbar.offsetWidth;
    const height = toolbar.offsetHeight;
    const viewportHeight = DomWindowHelper.getInnerHeight() || DomDocumentHelper.getDocumentElement()?.clientHeight || 0;

    // Above the element's top-right corner; below it when there is no room above in the viewport; pinned to the
    // viewport top inside the element when neither fits (a tall element scrolled past its top).
    let placement: "above" | "below" | "inside" = "above";
    let top = anchorRect.top - outset - gap - height;
    if (top < 0) {
      const below = anchorRect.bottom + outset + gap;
      if (below + height <= viewportHeight || anchorRect.top >= 0) {
        placement = "below";
        top = below;
      } else {
        placement = "inside";
        top = Math.min(Math.max(anchorRect.top, 0) + gap, anchorRect.bottom - height);
      }
    }
    let left = anchorRect.right + outset - width;
    left = Math.max(rootRect.left, Math.min(left, rootRect.right - width));

    const newTop = Math.round(top - containerRect.top + container.clientTop);
    const newLeft = Math.round(left - containerRect.left + container.clientLeft);
    if (this.toolbarTop !== newTop)this.toolbarTop = newTop;
    if (this.toolbarLeft !== newLeft)this.toolbarLeft = newLeft;
    if (this.toolbarPlacement !== placement)this.toolbarPlacement = placement;

    // The "+" handle: outside the selection outline, left of the box, aligned with its top. Kept inside the viewport
    // (a question at the left edge of a narrow host), where it overlaps the outline rather than leaving the screen.
    const handleWidth = this.addHandleElement?.offsetWidth || 24;
    const handleLeft = Math.max(2, anchorRect.left - outset - InlineDesignerModel.AddHandleGap - handleWidth);
    const newHandleTop = Math.round(anchorRect.top - containerRect.top + container.clientTop);
    const newHandleLeft = Math.round(handleLeft - containerRect.left + container.clientLeft);
    if (this.addHandleTop !== newHandleTop)this.addHandleTop = newHandleTop;
    if (this.addHandleLeft !== newHandleLeft)this.addHandleLeft = newHandleLeft;
    if (!this.isToolbarPositioned)this.isToolbarPositioned = true;
  }

  public dispose(): void {
    this.creator.onElementSelected.remove(this.onElementSelected);
    this.creator.onDragStart.remove(this.onDragStart);
    this.creator.onDragClear.remove(this.onDragClear);
    if (DomWindowHelper.isAvailable()) {
      DomWindowHelper.removeEventListener("scroll", this.schedulePositionUpdate, { capture: true });
      DomWindowHelper.removeEventListener("resize", this.schedulePositionUpdate);
      DomDocumentHelper.removeEventListener("keydown", this.onDocumentKeyDown);
    }
    clearInterval(this.checkTimer);
    // 05: leaving inline mode closes the panel; the sidebar shows the grid again.
    if (DomWindowHelper.isAvailable()) {
      DomWindowHelper.removeEventListener("keydown", this.onPropertyGridKeyDown, true);
    }
    if (this.creator.sidebar.executeOnExpandHandler === this.onSidebarExecuteOnExpand) {
      this.creator.sidebar.executeOnExpandHandler = undefined;
    }
    this.pendingPropertyGridCallback = undefined;
    this.propertyGridReturnFocus = undefined;
    this.propertyGridPanel.dispose();
    this.propertyGridViewModel?.unregisterPropertyChangedHandlers(["survey"], "inline-designer-categories");
    if (!!this.propertyGridCategoriesSurvey) {
      this.propertyGridCategoriesSurvey.onCurrentPageChanged.remove(this.onPropertyGridCurrentPageChanged);
      this.propertyGridCategoriesSurvey.onPageVisibleChanged.remove(this.onPropertyGridPageVisibleChanged);
      this.propertyGridCategoriesSurvey = undefined;
    }
    this.propertyGridCategories.dispose();
    this.resizeObserver?.disconnect();
    this.resizeObserver = undefined;
    const adorner: any = this.toolbarAdorner;
    this.releaseAdorner(adorner);
    // Leaving inline mode: the settings action falls back to the sidebar rules (standard mode).
    if (!!adorner && !adorner.isDisposed) adorner.updateActionsProperties();
    this.toolbarAdorner = undefined;
    this.toolbarElement = undefined;
    this.anchorElement = undefined;
    this.observedRoot = undefined;
    this.extraActions.dispose();
    if (!!this.toolboxPopupModel) {
      this.toolboxPopupModel.onVisibilityChanged.remove(this.onToolboxPopupVisibilityChanged);
      this.toolboxPopupModel.isVisible = false;
      this.toolboxPopupModel.dispose();
    }
    this.toolboxPopupTarget = undefined;
    this.addHandleElement = undefined;
    super.dispose();
  }
}
