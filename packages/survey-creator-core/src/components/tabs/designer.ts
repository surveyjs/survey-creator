import { Base, PageModel, property, SurveyModel, ComputedUpdater, settings } from "survey-core";
import { CreatorBase } from "../../creator-base";
import { DragDropSurveyElements } from "survey-core";
import "./designer.scss";
import { getLocString } from "../../editorLocalization";

export const initialSettingsAllowShowEmptyTitleInDesignMode = settings.allowShowEmptyTitleInDesignMode;

export class TabDesignerViewModel<T extends SurveyModel> extends Base {
  private widthUpdater: ComputedUpdater;
  private checkNewPageHandler: (sender: SurveyModel, options: any) => void;
  private surveyOnPropertyChanged: (sender: SurveyModel, options: any) => void;

  @property() newPage: PageModel;
  @property({ defaultValue: false }) showNewPage: boolean;
  @property() pageCount: number;
  @property() withModifier: string;
  @property() showPlaceholder: boolean;
  public creator: CreatorBase<T>;

  private createNewPage() {
    const newPage: PageModel = this.survey.createNewPage("");
    this.creator.setNewNames(newPage);
    newPage.onFirstRendering();
    newPage.updateCustomWidgets();
    newPage.setWasShown(true);
    newPage.setSurveyImpl(this.survey);
    newPage.updateElementCss();
    var checkNewElementHandler = (sender: SurveyModel, options: any) => {
      if (options.name === "elements" && newPage.elements.length > 0) {
        newPage.onPropertyChanged.remove(checkNewElementHandler);
        if (this.survey.pages.indexOf(newPage) > -1) return;
        this.creator.addPage(newPage);
      }
    };
    newPage.num = this.survey.pages.length + 1;
    newPage.onPropertyChanged.add(checkNewElementHandler);
    this.newPage = newPage;
    DragDropSurveyElements.newGhostPage = newPage;
  }
  private get canShowNewPage(): boolean {
    if (!this.survey || this.creator.pageEditMode === "single") return false;
    const pages: PageModel[] = this.survey.pages;
    return pages.length === 0 || pages[pages.length - 1].elements.length > 0;
  }

  constructor(creator: CreatorBase<T>) {
    super();
    this.creator = creator;
    this.initSurvey();
  }
  get survey() {
    return this.creator.survey;
  }
  public get isToolboxVisible(): boolean {
    return this.creator.showToolboxValue;
  }
  public get placeholderText(): string {
    return getLocString("ed.surveyPlaceHolder");
  }

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
    this.creator.pagesController.onPagesChanged.add(this.onPagesChangedHandler);
    this.checkNewPage();
    this.widthUpdater && this.widthUpdater.dispose();
    this.widthUpdater = new ComputedUpdater<string>(() => {
      return this.survey.calculateWidthMode();
    });
    this.withModifier = <any>this.widthUpdater;
  }
  private onPagesChangedHandler = (sender: any, options: any) => {
    if (this.newPage) {
      this.newPage.num = this.survey.pages.length + 1;
    }
  }
  public dispose() {
    super.dispose();
    this.creator.pagesController.onPagesChanged.remove(this.onPagesChangedHandler);
    this.survey.onPropertyChanged.remove(this.surveyOnPropertyChanged);
    this.survey.onQuestionAdded.remove(this.checkNewPageHandler);
    this.survey.onQuestionRemoved.remove(this.checkNewPageHandler);
    this.survey.onPanelAdded.remove(this.checkNewPageHandler);
    this.survey.onPanelRemoved.remove(this.checkNewPageHandler);
  }

  private checkNewPage() {
    const showPlaceholder = this.survey.getAllQuestions().length === 0 && this.survey.pageCount === 0;
    settings.allowShowEmptyTitleInDesignMode = showPlaceholder ? false : initialSettingsAllowShowEmptyTitleInDesignMode;
    this.showPlaceholder = showPlaceholder;
    this.pageCount = this.survey.pageCount;
    if (this.showPlaceholder || this.canShowNewPage) {
      const pages = this.survey.pages;
      if (!this.newPage || (pages.length > 0 && this.newPage === pages[pages.length - 1])) {
        this.createNewPage();
        this.showNewPage = true;
      }
    } else {
      this.showNewPage = false;
      this.newPage = undefined;
    }
  }

  public clickDesigner() {
    this.creator.selectedElement = this.creator.survey;
  }
  public getDesignerCss(): string {
    return this.survey.css.container + " " + this.survey.css.container + "--" + this.withModifier;
  }
  public getRootCss(): string {
    let rootCss = this.survey.css.root;
    if (this.creator.showPageNavigator && this.survey.pageCount > 1) {
      rootCss += " svc-tab-designer--with-page-navigator";
    }
    return rootCss;
  }
}