import { Base, SurveyModel, EventBase, PageModel, property } from "survey-core";
import { ICreatorSelectionOwner } from "./selection-owner";

export class PagesController extends Base {
  public onPagesChanged: EventBase<PagesController> = this.addEvent<PagesController>();
  public onCurrentPageChanged: EventBase<PagesController> = this.addEvent<PagesController>();
  private currentPageChangedFunc: (sender: SurveyModel, options: any) => any;
  private surveyValue: SurveyModel;
  @property() page2Display: PageModel;
  constructor(public creator: ICreatorSelectionOwner) {
    super();
    this.currentPageChangedFunc = (sender: SurveyModel, options: any) => {
      this.page2Display = this.survey.currentPage;
      this.onCurrentPageChanged.fire(this, {});
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
    this.page2Display = value;
  }
  public selectPage(value: PageModel) {
    this.currentPage = value;
    this.creator.selectElement(value);
  }
  public getDisplayName(page: PageModel): string {
    if (!page) return "";
    return this.creator.getObjectDisplayName(page, "page-selector");
  }
  public raisePagesChanged() {
    this.page2Display = (<any>this.survey).currentPage;
    this.onPagesChanged.fire(this, {});
  }
  public onSurveyChanged() {
    this.removeFunctions();
    this.surveyValue = this.creator.survey;
    if (!this.surveyValue) return;
    this.raisePagesChanged();
    this.page2Display = this.survey.currentPage;
    this.surveyValue.onCurrentPageChanged.add(this.currentPageChangedFunc);
  }
  public dispose(): void {
    super.dispose();
    this.removeFunctions();
  }
  private removeFunctions() {
    if (!!this.surveyValue && !this.surveyValue.isDisposed) {
      this.surveyValue.onCurrentPageChanged.remove(
        this.currentPageChangedFunc
      );
    }
  }
}
