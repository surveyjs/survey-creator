import { Base, PageModel, property, SurveyModel, ComputedUpdater, settings, IPage } from "survey-core";
import { SurveyCreatorModel } from "../../creator-base";
import { getLocString } from "../../editorLocalization";
import { PagesController } from "../../pages-controller";
import { SurveyHelper } from "../../survey-helper";
import { DragDropSurveyElements } from "../../survey-elements";
require("./designer.scss");

export const initialSettingsAllowShowEmptyTitleInDesignMode = settings.allowShowEmptyTitleInDesignMode;

export class TabDesignerViewModel extends Base {
  private cssUpdater: ComputedUpdater;
  private pagesControllerValue: PagesController;

  @property() newPage: PageModel;
  @property({ defaultValue: false }) showNewPage: boolean;
  @property() pageCount: number;
  @property() designerCss: string;
  @property() showPlaceholder: boolean;
  public creator: SurveyCreatorModel;

  public get displayPageDropTarget() {
    return this.pagesController.page2Display === this.newPage ? "newGhostPage" : this.pagesController.page2Display.name;
  }

  private createNewPage() {
    if (!this.creator.canAddPage()) {
      return null;
    }
    const newPage: PageModel = this.survey.createNewPage("");
    newPage["ignoreUndoRedo"] = true;
    this.creator.setNewNames(newPage);
    newPage.onFirstRendering();
    newPage.updateCustomWidgets();
    newPage.setWasShown(true);
    newPage.setSurveyImpl(this.survey);
    newPage.updateElementCss();
    var checkNewElementHandler = (sender: SurveyModel, options: any) => {
      if (options.name === "elements" && newPage.elements.length > 0) {
        // if (this.survey.pages.indexOf(newPage) > -1) return;
        this.creator.addPage(newPage, true, () => {
          newPage.onPropertyChanged.remove(checkNewElementHandler);
          newPage.showTitle = true;
          newPage.showDescription = true;
          delete newPage["ignoreUndoRedo"];
          return !(this.survey.pages.indexOf(newPage) > -1);
        });
      }
    };
    newPage.num = this.survey.pages.length + 1;
    newPage.onPropertyChanged.add(checkNewElementHandler);
    DragDropSurveyElements.newGhostPage = newPage;
    return newPage;
  }
  private get canShowNewPage(): boolean {
    if (!this.survey || this.creator.pageEditMode === "single" || !this.creator.allowModifyPages) return false;
    return true;
    // if (this.creator.pageEditMode === "bypage") return true;
    // const pages: PageModel[] = this.survey.pages;
    // return pages.length === 0 || this.isModifiedPage(pages[pages.length - 1]);
  }
  private isModifiedPage(page: PageModel) {
    return Object.keys(page.toJSON()).filter(key => key !== "name").length > 0;
  }

  constructor(creator: SurveyCreatorModel) {
    super();
    this.creator = creator;
    this.pagesControllerValue = new PagesController(creator);
    this.initSurvey();
  }
  get survey() {
    return this.creator.survey;
  }
  public get pagesController(): PagesController {
    return this.pagesControllerValue;
  }
  public get isToolboxVisible(): boolean {
    return this.creator.showToolbox && (this.creator.toolboxLocation === "right" || this.creator.toolboxLocation === "left");
  }
  public get placeholderText(): string {
    if (this.creator.isMobileView)
      return getLocString("ed.surveyPlaceHolderMobile");
    return getLocString("ed.surveyPlaceHolder");
  }
  private isUpdatingNewPage: boolean;
  public onDesignerSurveyPropertyChanged(obj: Base, propName: string): void {
    if (!obj || this.isUpdatingNewPage) return;
    this.isUpdatingNewPage = true;
    if (propName === "elements" && obj.isDescendantOf("page")) {
      let updatePageController = false;
      if ((<PageModel>obj).elements.length === 0) {
        updatePageController = this.checkLastPageToDelete();
      }
      this.checkNewPage(updatePageController);
    }
    if (propName === "pages" && obj.isDescendantOf("survey")) {
      this.checkNewPage(true);
    }
    this.isUpdatingNewPage = false;
  }
  private calculateDesignerCss() {
    return this.survey.css.container + " " + this.survey.css.container + "--" + this.survey.calculatedWidthMode;
  }
  public initSurvey() {
    if (!this.survey) return;
    this.showNewPage = false;
    this.newPage = undefined;
    this.checkNewPage(false);
    this.cssUpdater && this.cssUpdater.dispose();
    this.cssUpdater = new ComputedUpdater<string>(() => {
      return this.calculateDesignerCss();
    });
    this.designerCss = <any>this.cssUpdater;
    this.pagesController.onSurveyChanged();
  }
  private checkNewPage(updatePageController: boolean) {
    const showPlaceholder = this.survey.getAllQuestions().length === 0 && this.survey.pageCount === 0;
    this.showPlaceholder = showPlaceholder;
    this.pageCount = this.survey.pageCount;
    if (this.showPlaceholder || this.canShowNewPage) {
      const pages = this.survey.pages;
      if (!this.newPage || (pages.length > 0 && this.newPage === pages[pages.length - 1])) {
        this.newPage = this.createNewPage();
        this.showNewPage = !!this.newPage;
      }
      if (this.newPage) {
        this.newPage.showTitle = !showPlaceholder;
        this.newPage.showDescription = !showPlaceholder;
      }
    } else {
      this.showNewPage = false;
      this.newPage = undefined;
    }
    if (updatePageController) {
      if (this.newPage) {
        this.newPage.num = this.survey.pages.length + 1;
        this.newPage.startLoadingFromJson();
        this.newPage.name = SurveyHelper.getNewPageName(this.survey.pages);
        this.newPage.endLoadingFromJson();
      }
      this.pagesController.raisePagesChanged();
    }
  }
  public dispose(): void {
    super.dispose();
    this.cssUpdater && this.cssUpdater.dispose();
  }
  private checkLastPageToDelete(): boolean {
    if (this.survey.pageCount === 0 || this.survey.isQuestionDragging) return false;
    const lastPage: PageModel = this.survey.pages[this.survey.pageCount - 1];
    if (lastPage.elements.length > 0 || (<any>lastPage).isConverting) return false;
    if (SurveyHelper.isPagePropertiesAreModified(lastPage)) return false;
    lastPage.delete();
    if (this.survey.pageCount === 0) {
      this.creator.selectElement(this.survey);
    }
    return true;
  }

  public clickDesigner() {
    this.creator.selectedElement = this.creator.survey;
  }
  public getRootCss(): string {
    let rootCss = this.survey.css.root;
    if (this.creator.showPageNavigator && this.survey.pageCount > 1 || this.creator.pageEditMode === "bypage") {
      rootCss += " svc-tab-designer--with-page-navigator";
    }
    if (this.showPlaceholder) {
      rootCss += " svc-tab-designer--with-place-holder";
    }
    rootCss += " svc-tab-designer--" + this.creator.pageEditMode + "-mode";
    return rootCss;
  }
}