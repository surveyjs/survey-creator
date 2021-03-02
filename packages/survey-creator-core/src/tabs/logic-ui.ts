import {
  SurveyModel,
  Base,
  Serializer,
  HtmlConditionItem,
  Event,
  ExpressionRunner,
  Question,
  HashTable,
  Helpers,
  property,
  propertyArray,
} from "survey-core";
import { editorLocalization } from "../editorLocalization";
import { ConditionEditor } from "../property-grid/condition-survey";
import { ISurveyCreatorOptions, EmptySurveyCreatorOptions } from "../settings";
import { SurveyLogicItem, SurveyLogicAction } from "./logic-items";
import {
  SurveyLogicTypes,
  SurveyLogicType,
  getLogicString,
} from "./logic-types";
import { SurveyLogic } from "./logic";

export class SurveyLogicUI extends SurveyLogic {
  private expressionEditorValue: ConditionEditor;
  private itemsSurveyValue: SurveyModel;
  constructor(
    public survey: SurveyModel,
    public options: ISurveyCreatorOptions = null
  ) {
    super(survey, options);
    if (!this.options) this.options = new EmptySurveyCreatorOptions();
    this.createExpressionPropertyEditor();
    //TODO
    this.itemsSurveyValue = this.options.createSurvey(
      this.getLogicItemSurveyJSON(),
      "logic-items"
    );
    this.updateItemsSurveyData();
  }
  protected onPropertyValueChanged(name: string, oldValue: any, newValue: any) {
    super.onPropertyValueChanged(name, oldValue, newValue);
    if (name === "items") {
      this.updateItemsSurveyData();
    }
  }
  public get expressionEditor(): ConditionEditor {
    return this.expressionEditorValue;
  }
  public get itemsSurvey(): SurveyModel {
    return this.itemsSurveyValue;
  }
  protected onStartEditing() {
    this.expressionEditor.text = this.editableItem.expression;
  }
  protected onEditableItemApply() {
    this.expressionEditor.apply();
    this.editableItem.apply(this.expressionEditor.text);
  }
  protected hasErrorInUI(): boolean {
    return !this.expressionEditor.isReady;
  }
  protected getExpressionText(): string {
    return this.expressionEditor.text;
  }
  protected getLogicItemSurveyJSON(): any {
    var json = {
      elements: [
        {
          type: "matrixdynamic",
          name: "items",
          columns: [
            {
              cellType: "html",
              name: "conditions",
              title: this.getLocString("ed.lg.conditions"),
            },
            {
              cellType: "html",
              name: "actions",
              title: this.getLocString("ed.lg.actions"),
            },
          ],
        },
      ],
    };
    return json;
  }
  private createExpressionPropertyEditor() {
    this.expressionEditorValue = new ConditionEditor(
      this.survey,
      null,
      this.options
    );
    /*
    this.expressionEditor.isEditorShowing = true;
    this.expressionEditor.isWideMode = true;
    this.expressionEditor.object = this.survey;
    this.expressionEditor.options = this.options;
    this.expressionEditor.koSetupText(this.expressionSetupText);
    */
  }
  private updateItemsSurveyData() {
    if (!this.itemsSurvey) return;
    var data = [];
    for (var i = 0; i < this.items.length; i++) {
      data.push({
        conditions: this.items[i].title,
        actions: this.items[i].actionsText,
      });
    }
    this.itemsSurvey.getQuestionByName("items").value = data;
  }
}
