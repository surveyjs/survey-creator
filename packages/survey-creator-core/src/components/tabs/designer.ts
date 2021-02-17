import { Base, PageModel, property } from "survey-knockout";
import { CreatorBase } from "../../creator-base";
import "./designer.scss";

export class TabDesignerViewModel<
  T extends { [index: string]: any }
> extends Base {
  @property() newPage: PageModel;
  public creator: CreatorBase<T>;

  private createNewPage() {
    const newPage = this.creator.survey.createNewPage("");
    newPage.setSurveyImpl(this.creator.survey);
    this.creator.setNewNames(newPage);
    newPage.onFirstRendering();
    newPage.updateCustomWidgets();
    newPage.setWasShown(true);
    newPage["_addToSurvey"] = () => {
      newPage["_addToSurvey"] = undefined;
      this.survey.addPage(newPage);
      this.createNewPage();
    };
    this.newPage = newPage;
  }

  constructor(creator: CreatorBase<T>) {
    super();
    this.creator = creator;
    this.createNewPage();
  }
  get survey() {
    return this.creator.survey;
  }
  public get showNewPage(): boolean {
    const pages = this.survey.pages;
    return pages.length === 0 || pages[pages.length - 1].rows.length > 0;
  }
}
