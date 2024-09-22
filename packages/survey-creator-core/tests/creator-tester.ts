import { SurveyModel, IAction, Base, Question, SurveyElement, SurveyTemplateRendererTemplateData } from "survey-core";
import { CreatorBase, SurveyCreatorModel, isStringEditable } from "../src/creator-base";
import { settings as creatorSetting } from "../src/creator-settings";
import { ICreatorOptions } from "../src/creator-options";
import { SurveyLogic } from "../src/components/tabs/logic";
import { QuestionLinkValueModel } from "../src/components/link-value";
import { QuestionAdornerViewModel } from "../src/components/question";
import { QuestionTypeSelector } from "../src/question-type-selector";

const dummyQuestion = new QuestionLinkValueModel("q1");

export class CreatorTester extends SurveyCreatorModel {
  constructor(options: ICreatorOptions = {}, options2?: ICreatorOptions, setOldDefaultNewSurveyJSON = true) {
    if (setOldDefaultNewSurveyJSON) {
      creatorSetting.defaultNewSurveyJSON = { pages: [{ name: "page1" }] };
    }
    super(options, options2);
    this.autoSaveDelay = 0;
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

  getAvailableToolboxItems(question?: SurveyElement) {
    return new QuestionTypeSelector(this, question as any).getAvailableToolboxItems(question);
  }
}

export class QuestionAdornerViewModelTester extends QuestionAdornerViewModel {
  /**
   *
   */
  constructor(creator: SurveyCreatorModel,
    surveyElement: SurveyElement,
    public templateData: SurveyTemplateRendererTemplateData) {
    super(creator, surveyElement, templateData);
  }
  public getConvertToTypesActions() {
    return this.getActionById("convertTo").popupModel.contentComponentData.model.actions;
  }
}