import { Base, PageModel, property, SurveyModel } from "survey-core";
import { CreatorBase } from "../../creator-base";
import { DragDropHelper } from "../../dragdrophelper";
import "./designer.scss";

export class TabDesignerViewModel<T extends SurveyModel> extends Base {
  @property() newPage: PageModel;
  public creator: CreatorBase<T>;

  private createNewPage() {
    const newPage: PageModel = this.creator.survey.createNewPage("");
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
    DragDropHelper.newGhostPage = newPage;
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
    const pages: PageModel[] = this.survey.pages;
    return pages.length === 0 || pages[pages.length - 1].rows.length > 0;
  }
}
