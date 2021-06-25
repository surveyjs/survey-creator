import { Base, SurveyModel, EventBase, PageModel } from "survey-core";
import { ICreatorSelectionOwner } from "./selection-owner";

export class PagesController extends Base {
  public onPagesChanged: EventBase<PagesController> = this.addEvent<PagesController>();
  public onCurrentPagesChanged: EventBase<PagesController> = this.addEvent<PagesController>();
  public onPageNameChanged: EventBase<PagesController> = this.addEvent<PagesController>();
  private pagesChangedFunc: (sender: SurveyModel, options: any) => any;
  private currentpagedChangedFunc: (sender: SurveyModel, options: any) => any;
  private surveyValue: SurveyModel;
  constructor(public creator: ICreatorSelectionOwner) {
    super();
    this.pagesChangedFunc = (sender: SurveyModel, options: any) => {
      if (options.name !== "pages") return;
      this.onPagesChanged.fire(this, {});
    };
    this.currentpagedChangedFunc = (sender: SurveyModel, options: any) => {
      this.onCurrentPagesChanged.fire(this, {});
    };
    this.onSurveyChanged();
  }
  public get survey(): SurveyModel {
    return this.creator.survey;
  }
  public get pages(): Array<PageModel> {
    return this.survey.pages;
  }
  public get currentPage(): PageModel {
    return this.survey.currentPage;
  }
  public set currentPage(value: PageModel) {
    (<any>this.survey).currentPage = value;
  }
  public selectPage(value: PageModel) {
    this.currentPage = value;
    this.creator.selectElement(value);
  }
  public getDisplayName(page: PageModel): string {
    if (!page) return "";
    return this.creator.getObjectDisplayName(page);
  }
  public onSurveyChanged() {
    this.removeFunctions();
    this.surveyValue = this.creator.survey;
    if (!this.surveyValue) return;
    this.onPagesChanged.fire(this, {});
    this.surveyValue.onPropertyChanged.add(this.pagesChangedFunc);
    this.surveyValue.onCurrentPageChanged.add(this.currentpagedChangedFunc);
  }
  public pageNameChanged(page: PageModel) {
    this.onPageNameChanged.fire(this, { page: page });
  }
  public dispose() {
    super.dispose();
    this.removeFunctions();
  }
  private removeFunctions() {
    if (!!this.surveyValue && !this.surveyValue.isDisposed) {
      this.surveyValue.onPropertyChanged.remove(this.pagesChangedFunc);
      this.surveyValue.onCurrentPageChanged.remove(
        this.currentpagedChangedFunc
      );
    }
  }
}
