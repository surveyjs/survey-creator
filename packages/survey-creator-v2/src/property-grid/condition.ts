import {
  Base,
  JsonObjectProperty,
  Serializer,
  Question,
  MatrixDropdownRowModelBase,
  QuestionMatrixDynamicModel,
  PanelModel,
  SurveyModel,
  Survey,
} from "survey-knockout";
import { PropertyGridEditorCollection, PropertyGridModel } from "./index";
import { ConditionEditorBase } from "./condition-survey";
import { ISurveyCreatorOptions } from "@survey/creator/settings";

PropertyGridEditorCollection.register({
  fit(prop: JsonObjectProperty): boolean {
    return prop.type == "expression";
  },
  getJSON(
    obj: Base,
    prop: JsonObjectProperty,
    options: ISurveyCreatorOptions
  ): any {
    return {
      type: "comment",
      showOptionsCaption: false,
    };
  },
});

PropertyGridEditorCollection.register({
  fit(prop: JsonObjectProperty): boolean {
    return prop.type == "condition";
  },
  getJSON(
    obj: Base,
    prop: JsonObjectProperty,
    options: ISurveyCreatorOptions
  ): any {
    return {
      type: "comment",
      renderTitleAs: "title-actions",
      showOptionsCaption: false,
    };
  },
  onGetQuestionTitleActions(
    originalQuestion: any,
    prop: JsonObjectProperty,
    evtOptions: any,
    options: ISurveyCreatorOptions
  ) {
    var editor = new ConditionEditorBase(
      originalQuestion.survey,
      originalQuestion,
      options,
      prop.name
    );
    const conditionBuilderAction = {
      id: "fast-entry",
      css: "sv-action--first sv-action-bar-item--secondary",
      icon: "icon-change_16x16",
      component: "sv-action-bar-item-modal",
      data: {
        contentTemplateName: "survey-content",
        contentComponentData: editor.editSurvey,
        onShow: () => {
          editor.text = originalQuestion[prop.name];
        },
        onApply: () => {
          originalQuestion[prop.name] = editor.text;
        },
        onCancel: () => {},
      },
    };

    evtOptions.titleActions = [conditionBuilderAction];
  },
});
