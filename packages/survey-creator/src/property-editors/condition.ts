import * as ko from "knockout";

import "./condition.scss";
import { SurveyPropertyConditionEditor } from "../propertyEditors/propertyConditionEditor";
const templateHtml = require("./condition.html");

export class PropertyEditorConditionViewModel {
  constructor(
    public koShowExpressionHeader: any,
    public onShowHideEditor: any,
    public koConditionDisplayText: any,
    public koIsEditorShowing: any,
    public koIsEditorHidingDisabled: any,
    public koShowTabs: any,
    public koCanParseExpression: any,
    public koActiveView: any,
    public onChangeViewClick: any,
    public getLocString: any,
    public koSetupText: any,
    public koIsWideMode: any,
    public koEditorItems: any,
    public readOnly: any,
    public koCanAddItem: any,
    public onRemoveConditionClick: any,
    public removeConditionText: any,
    public addCondition: any,
    public addConditionText: string,
    public hasAceEditor: boolean,
    public koTextValue: any,
    public availableQuestions: any[],
    public editingObject: any,
    public model: SurveyPropertyConditionEditor,
    public afterRender: any
  ) {
    afterRender();
  }
}

ko.components.register("svd-property-editor-condition", {
  viewModel: {
    createViewModel: (params, componentInfo) => {
      const model: SurveyPropertyConditionEditor = params.model;
      return new PropertyEditorConditionViewModel(
        model.koShowExpressionHeader,
        model.onShowHideEditor,
        model.koConditionDisplayText,
        model.koIsEditorShowing,
        model.koIsEditorHidingDisabled,
        model.koShowTabs,
        model.koCanParseExpression,
        model.koActiveView,
        model.onChangeViewClick,
        model.getLocString,
        model.koSetupText,
        model.koIsWideMode,
        model.koEditorItems,
        model.readOnly,
        model.koCanAddItem,
        model.onRemoveConditionClick,
        model.removeConditionText,
        model.addCondition,
        model.addConditionText,
        model.hasAceEditor,
        model.koTextValue,
        model.availableQuestions,
        model.editingObject,
        model,
        () => {
          typeof params.afterRender === "function" &&
            params.afterRender.call(model, componentInfo);

          typeof model.koAfterRender === "function" &&
            model.koAfterRender.call(model, componentInfo);
        }
      );
    },
  },
  template: templateHtml,
});
