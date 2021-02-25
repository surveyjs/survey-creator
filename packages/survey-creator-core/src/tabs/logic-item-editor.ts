import {
  SurveyModel,
  Serializer,
  ConditionsParser,
  QuestionPanelDynamicModel,
  Operand,
  UnaryOperand,
  BinaryOperand,
  Variable,
  Const,
  ArrayOperand,
  ItemValue,
  PanelModel,
  Helpers,
  Base,
  JsonObject,
  Question,
} from "survey-knockout";
import { ISurveyCreatorOptions, settings } from "../settings";
import { editorLocalization } from "../editorLocalization";
import { SurveyHelper } from "../surveyHelper";
import { PropertyEditorSetupValue } from "../property-grid/index";
import {
  ISurveyLogicItemOwner,
  SurveyLogicType,
  SurveyLogicItem,
  SurveyLogicAction,
} from "./logic-items";

export class LogicItemEditor extends PropertyEditorSetupValue {
  constructor(
    public editableItem: SurveyLogicItem,
    protected options: ISurveyCreatorOptions = null
  ) {
    super(options);
  }
  protected getSurveyJSON(): any {
    return {};
  }
  protected getSurveyCreationReason(): string {
    return "logic-item-editor";
  }
  public apply() {}
}
