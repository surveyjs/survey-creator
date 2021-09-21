import { Base, PageModel, property, SurveyModel, Action } from "survey-core";
import { ICreatorPlugin, CreatorBase } from "../../creator-base";
import { DragDropSurveyElements } from "survey-core";
import { PropertyGridModel } from "../../property-grid";
import "./designer.scss";
import { PropertyGridViewModel, PropertyGridViewModelBase } from "../../property-grid/property-grid-view-model";
import { settings } from "../../settings";

export class TabDesignerViewModel<T extends SurveyModel> extends Base {
  @property() newPage: PageModel;
  @property({ defaultValue: false }) showNewPage: boolean;
  @property() pageCount: number;
  public creator: CreatorBase<T>;

  private createNewPage() {
    const newPage: PageModel = this.survey.createNewPage("");
    this.creator.setNewNames(newPage);
    newPage.onFirstRendering();
    newPage.updateCustomWidgets();
    newPage.setWasShown(true);
    newPage.setSurveyImpl(this.survey);
    newPage["_addToSurvey"] = () => {
      newPage["_addToSurvey"] = undefined;
      newPage.unRegisterFunctionOnPropertiesValueChanged([
        "title",
        "description"
      ]);
      this.survey.addPage(newPage);
    };
    newPage.registerFunctionOnPropertiesValueChanged(
      ["title", "description"],
      () => {
        newPage["_addToSurvey"]();
      }
    );
    var checkNewElementHandler = (sender: SurveyModel, options: any) => {
      if (options.name === "elements" && newPage.elements.length > 0) {
        newPage.onPropertyChanged.remove(checkNewElementHandler);
        if (this.survey.pages.indexOf(newPage) > -1) return;
        this.creator.startUndoRedoTransaction("Add new page");
        this.survey.addPage(newPage);
        this.creator.stopUndoRedoTransaction();
      }
    };
    newPage.onPropertyChanged.add(checkNewElementHandler);
    this.newPage = newPage;
    DragDropSurveyElements.newGhostPage = newPage;
  }

  constructor(creator: CreatorBase<T>) {
    super();
    this.creator = creator;
    this.initSurvey();
  }
  get survey() {
    return this.creator.survey;
  }
  private checkNewPageHandler: (sender: SurveyModel, options: any) => void;
  private surveyOnPropertyChanged: (sender: SurveyModel, options: any) => void;
  public initSurvey() {
    if (!this.survey) return;
    this.showNewPage = false;
    this.newPage = undefined;
    this.checkNewPageHandler = (sender: SurveyModel, options: any) => {
      this.checkNewPage();
    };
    this.surveyOnPropertyChanged = (sender: SurveyModel, options: any) => {
      if (options.name !== "pages") return;
      this.checkNewPage();
    };
    this.survey.onPropertyChanged.add(this.surveyOnPropertyChanged);
    this.survey.onQuestionAdded.add(this.checkNewPageHandler);
    this.survey.onQuestionRemoved.add(this.checkNewPageHandler);
    this.survey.onPanelAdded.add(this.checkNewPageHandler);
    this.survey.onPanelRemoved.add(this.checkNewPageHandler);
    this.checkNewPage();
  }
  public dispose() {
    super.dispose();
    this.survey.onPropertyChanged.remove(this.surveyOnPropertyChanged);
    this.survey.onQuestionAdded.remove(this.checkNewPageHandler);
    this.survey.onQuestionRemoved.remove(this.checkNewPageHandler);
    this.survey.onPanelAdded.remove(this.checkNewPageHandler);
    this.survey.onPanelRemoved.remove(this.checkNewPageHandler);
  }
  private checkNewPage() {
    this.pageCount = this.survey.pageCount;
    if (this.canShowNewPage) {
      var pages = this.survey.pages;
      if (
        !this.newPage ||
        (pages.length > 0 && this.newPage === pages[pages.length - 1])
      ) {
        this.createNewPage();
        this.showNewPage = true;
      }
    } else {
      this.showNewPage = false;
      this.newPage = undefined;
    }
  }
  private get canShowNewPage(): boolean {
    if (!this.survey || this.creator.pageEditMode === "single") return false;
    const pages: PageModel[] = this.survey.pages;
    return pages.length === 0 || pages[pages.length - 1].elements.length > 0;
  }
}

export class TabDesignerPlugin<T extends SurveyModel> implements ICreatorPlugin {
  public model: TabDesignerViewModel<T>;
  public propertyGrid: PropertyGridViewModelBase;
  private undoAction: Action;
  private redoAction: Action;
  private surveySettingsAction: Action;
  private saveSurveyAction: Action;
  private expandAction: Action;

  constructor(private creator: CreatorBase<T>) {
    creator.addPluginTab("designer", this);
    const propertyGridModel = new PropertyGridModel(creator.survey as any as Base, creator);
    this.propertyGrid = new PropertyGridViewModel(propertyGridModel, creator);
  }
  public activate(): void {
    this.model = new TabDesignerViewModel<T>(this.creator);
    this.undoAction && (this.undoAction.visible = true);
    this.redoAction && (this.redoAction.visible = true);
    this.surveySettingsAction && (this.surveySettingsAction.visible = true);
    this.expandAction && (this.expandAction.visible = !this.propertyGrid.visible)
  }
  public deactivate(): boolean {
    this.model = undefined;

    this.undoAction && (this.undoAction.visible = false);
    this.redoAction && (this.redoAction.visible = false);
    this.surveySettingsAction.visible = false;
    this.expandAction && (this.expandAction.visible = false);
    return true;
  }
  public designerSurveyCreated(): void {
    if (!this.model) return;
    this.model.initSurvey();
    if (!!this.creator.undoRedoManager) {
      this.creator.undoRedoManager.canUndoRedoCallback = () => {
        this.updateUndeRedoActions();
      };
    }
  }
  public createActions(items: Array<Action>) {
    this.undoAction = new Action({
      id: "icon-undo",
      iconName: "icon-undo",
      title: "Undo",
      showTitle: false,
      visible: this.creator.viewType === "designer",
      action: () => this.creator.undo()
    });
    this.redoAction = new Action({
      id: "icon-redo",
      iconName: "icon-redo",
      title: "Redo",
      showTitle: false,
      visible: this.creator.viewType === "designer",
      action: () => this.creator.redo()
    });
    this.surveySettingsAction = new Action({
      id: "icon-settings",
      iconName: "icon-settings",
      needSeparator: true,
      action: () => {
        if (!this.creator.showPropertyGrid) {
          this.creator.showPropertyGrid = true;
        } else {
          this.creator.selectElement(this.creator.survey);
        }
      },
      active: this.isSurveySelected,
      visible: this.creator.viewType === "designer",
      title: "Settings",
      showTitle: false
    });
    this.saveSurveyAction = new Action({
      id: "icon-save",
      iconName: "icon-import",
      action: () => this.creator.doSave(),
      active: this.creator.state === "modified",
      enabled: this.creator.state === "modified",
      visible: this.creator.showSaveButton && this.creator.activeTab === "designer",
      title: this.creator.getLocString("ed.saveSurvey"),
      tooltip: this.creator.getLocString("ed.saveSurveyTooltip")
    });
    items.push(this.undoAction);
    items.push(this.redoAction);
    items.push(this.saveSurveyAction);
    items.push(this.surveySettingsAction);
    if (settings.propertyGrid.allowCollapse) {
      this.expandAction = this.propertyGrid.createExpandAction(!this.creator.showPropertyGrid);
      items.push(this.expandAction)
    }
    this.updateUndeRedoActions();
    this.creator.onActiveTabChanged.add((sender, options) => {
      this.saveSurveyAction.visible =
        this.creator.showSaveButton && this.creator.activeTab === "designer";
    });
    this.creator.onShowSaveButtonVisiblityChanged.add((sender, options) => {
      this.saveSurveyAction.visible =
        this.creator.showSaveButton && this.creator.activeTab === "designer";
    });
    this.creator.onStateChanged.add((sender, options) => {
      this.saveSurveyAction.active = this.creator.state === "modified";
      this.saveSurveyAction.enabled = this.creator.state === "modified";
    });
    this.creator.onSelectedElementChanged.add((sender, options) => {
      this.surveySettingsAction.active = this.isSettingsActive;
    });
    this.creator.onShowPropertyGridVisiblityChanged.add((sender, options) => {
      this.surveySettingsAction.active = this.isSettingsActive;
    });
  }
  private updateUndeRedoActions() {
    if (!this.creator.undoRedoManager) return;
    this.undoAction.active = this.creator.undoRedoManager.canUndo();
    this.redoAction.active = this.creator.undoRedoManager.canRedo();
  }
  private get isSurveySelected(): boolean {
    return this.creator.isElementSelected(<any>this.creator.survey);
  }
  private get isSettingsActive(): boolean {
    return this.creator.showPropertyGrid && this.isSurveySelected;
  }
}
