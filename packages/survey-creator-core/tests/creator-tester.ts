import { SurveyModel, IAction, Base, Question } from "survey-core";
import { CreatorBase, isStringEditable } from "../src/creator-base";
import { settings as creatorSetting } from "../src/creator-settings";
import { ICreatorOptions } from "../src/creator-options";
import { SurveyLogic } from "../src/components/tabs/logic";
import { QuestionLinkValueModel } from "../src/components/link-value";

const dummyQuestion = new QuestionLinkValueModel("q1");

export class CreatorTester extends CreatorBase {
  constructor(options: ICreatorOptions = {}, options2?: ICreatorOptions, setOldDefaultNewSurveyJSON = true) {
    super(options, options2);
    if (setOldDefaultNewSurveyJSON) {
      creatorSetting.defaultNewSurveyJSON = { pages: [{ name: "page1" }] };
    }
    this.onSurveyInstanceCreated.add((creator, options) => {
      options.survey.getRendererForString = (element: Base, name: string): any => {
        if (!this.readOnly && isStringEditable(element, name)) {
          return "editableStringRendererName";
        }
        return undefined;
      };
    });
  }
  public get selectedElementName(): string {
    if (!this.selectedElement) return "";
    const name = this.selectedElement["name"];
    if (!!name) return name;
    return this.selectedElement.getType();
  }
  public selectQuestionByName(name: string): Question {
    const q = this.survey.getQuestionByName(name);
    if(!!q) this.selectElement(q);
    return q;
  }
  public getActionBarItem(id: string): IAction {
    return this.getActionBarItemByActions(this.toolbarItems, id);
  }
  public getActionBarItemByActions(
    actions: Array<IAction>,
    id: string
  ): IAction {
    for (var i = 0; i < actions.length; i++) {
      if (actions[i].id == id) return actions[i];
    }
    return null;
  }
  public doSaveFunc(): void {
    this.doSave();
  }
  public logicCreatedId = 0;
  protected createSurveyLogicForUpdate(): SurveyLogic {
    const res = super.createSurveyLogicForUpdate();
    res["createdId"] = ++this.logicCreatedId;
    return res;
  }
}
