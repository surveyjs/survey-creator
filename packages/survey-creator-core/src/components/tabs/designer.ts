import { Base, PageModel, property, SurveyModel, Action, ComputedUpdater } from "survey-core";
import { ICreatorPlugin, CreatorBase } from "../../creator-base";
import { DragDropSurveyElements } from "survey-core";
import { PropertyGridModel } from "../../property-grid";
import { PropertyGridViewModel, PropertyGridViewModelBase } from "../../property-grid/property-grid-view-model";
import { settings } from "../../settings";
import { getLocString } from "../../editorLocalization";
import "./designer.scss";

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
    var checkNewElementHandler = (sender: SurveyModel, options: any) => {
      if (options.name === "elements" && newPage.elements.length > 0) {
        newPage.onPropertyChanged.remove(checkNewElementHandler);
        if (this.survey.pages.indexOf(newPage) > -1) return;
        this.creator.addPage(newPage);
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
    this.widthUpdater && this.widthUpdater.dispose();
    this.widthUpdater = new ComputedUpdater<string>(() => {
      return this.survey.calculateWidthMode();
    });
    this.withModifier = <any>this.widthUpdater;
  }
  private widthUpdater: ComputedUpdater;
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
  @property() withModifier: string;
  public getDesignerCss(): string {
    return this.survey.css.container + " " + this.survey.css.container + "--" + this.withModifier;
  }
}

export class TabDesignerPlugin<T extends SurveyModel> implements ICreatorPlugin {
  public model: TabDesignerViewModel<T>;
  public propertyGrid: PropertyGridViewModelBase;
  private surveySettingsAction: Action;
  private saveSurveyAction: Action;
  private expandAction: Action;
  public previewAction: Action;

  constructor(private creator: CreatorBase<T>) {
    creator.addPluginTab("designer", this);
    const propertyGridModel = new PropertyGridModel(creator.survey as any as Base, creator);
    this.propertyGrid = new PropertyGridViewModel(propertyGridModel, creator);
    this.createActions().forEach(action => creator.toolbar.actions.push(action));
    creator.registerShortcut("delete", {
      hotKey: {
        keyCode: 46,
      },
      macOsHotkey: {
        keyCode: 46,
      },
      execute: () => this.creator.deleteCurrentElement()
    });
  }
  public activate(): void {
    this.model = new TabDesignerViewModel<T>(this.creator);
  }
  public deactivate(): boolean {
    this.model = undefined;
    return true;
  }
  public update(): void {
    if (!this.model) return;
    this.model.initSurvey();
  }
  public createActions() {
    const items: Array<Action> = [];
    this.surveySettingsAction = new Action({
      id: "svd-settings",
      iconName: "icon-settings",
      needSeparator: <any>new ComputedUpdater<boolean>(() => {
        return !this.creator.isMobileView;
      }),
      action: () => {
        if (!this.creator.showPropertyGrid) {
          this.creator.showPropertyGrid = true;
        }
        this.creator.selectElement(this.creator.survey);
      },
      active: this.isSurveySelected,
      visible: <any>new ComputedUpdater<boolean>(() => this.creator.activeTab === "designer"),
      title: "Settings",
      showTitle: false
    });
    this.saveSurveyAction = new Action({
      id: "svd-save",
      iconName: "icon-save",
      action: () => this.creator.doSave(),
      active: <any>new ComputedUpdater<boolean>(() => {
        return this.creator.state === "modified";
      }),
      enabled: <any>new ComputedUpdater<boolean>(() => this.creator.state === "modified"),
      visible: <any>new ComputedUpdater<boolean>(() => {
        const isDesignerTabActive = this.creator.activeTab === "designer";
        return this.creator.showSaveButton && isDesignerTabActive;
      }),
      title: this.creator.getLocString("ed.saveSurvey"),
      tooltip: this.creator.getLocString("ed.saveSurveyTooltip"),
      showTitle: false
    });
    this.previewAction = new Action({
      id: "svd-preview",
      iconName: "icon-preview",
      needSeparator: true,
      action: () => {
        this.creator.makeNewViewActive("test");
      },
      visible: <any>new ComputedUpdater<boolean>(() => {
        const isMobileView = this.creator.isMobileView;
        return (this.creator.activeTab === "designer") && isMobileView;
      }),
      title: this.creator.getLocString("ed.testSurvey"),
      showTitle: false
    })
    items.push(this.saveSurveyAction);
    items.push(this.surveySettingsAction);
    if (settings.propertyGrid.allowCollapse) {
      this.expandAction = this.propertyGrid.createExpandAction();
      this.expandAction.visible = <any>new ComputedUpdater<boolean>(() => {
        const propertyGridVisible = this.propertyGrid.visible;
        const isMobileView = this.creator.isMobileView;
        if (this.creator.activeTab === "designer" && isMobileView) return false;
        return this.creator.activeTab === "designer" && !propertyGridVisible;
      })
      items.push(this.expandAction);
    }
    this.creator.onSelectedElementChanged.add((sender, options) => {
      this.surveySettingsAction.active = this.isSettingsActive;
    });
    this.creator.onShowPropertyGridVisiblityChanged.add((sender, options) => {
      this.surveySettingsAction.active = this.isSettingsActive;
    });
    items.push(this.previewAction);
    return items;
  }
  private get isSurveySelected(): boolean {
    return this.creator.isElementSelected(<any>this.creator.survey);
  }
  private get isSettingsActive(): boolean {
    return this.creator.showPropertyGrid && this.isSurveySelected;
  }
}
