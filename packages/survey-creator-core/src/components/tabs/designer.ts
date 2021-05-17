import { Base, PageModel, property, SurveyModel } from "survey-core";
import { ICreatorPlugin, CreatorBase } from "../../creator-base";
import { getLocString } from "../../editorLocalization";
import "./designer.scss";

export class TabDesignerViewModel<T extends SurveyModel> extends Base {
  @property() newPage: PageModel;
  public creator: CreatorBase<T>;

  private createNewPage() {
    if (!this.survey) return;
    const newPage: PageModel = this.survey.createNewPage("");
    newPage.setSurveyImpl(this.survey);
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
  }
  get survey() {
    return this.creator.survey;
  }
  public initSurvey() {
    this.createNewPage();
  }
  public get showNewPage(): boolean {
    const pages: PageModel[] = this.survey.pages;
    return pages.length === 0 || pages[pages.length - 1].rows.length > 0;
  }
}

export class TabDesignerPlugin<T extends SurveyModel>
  implements ICreatorPlugin
{
  public model: TabDesignerViewModel<T>;
  constructor(private creator: CreatorBase<T>) {
    this.model = new TabDesignerViewModel<T>(creator);
    creator.tabs.push({
      id: "designer",
      title: getLocString("ed.designer"),
      componentContent: "svc-tab-designer",
      data: this.model,
      action: () => this.creator.makeNewViewActive("designer"),
      active: () => this.creator.viewType === "designer"
    });
    creator.plugins["designer"] = this;
  }
  public activate(): void {}
  public deactivate(): boolean {
    return true;
  }
  public designerSurveyCreated(): void {
    this.model.initSurvey();
  }
}
