import {SurveyPropertyEditorFactory} from "./propertyEditors/propertyEditorFactory";
import {SurveyPropertyEditorBase} from "./propertyEditors/propertyEditorBase";

export class Extentions {
    public static registerCustomPropertyEditor(name: string, widgetJSON: any) {
        SurveyPropertyEditorFactory.registerCustomEditor(name, widgetJSON);
    }
    public static registerPropertyEditor(name: string, creator: () => SurveyPropertyEditorBase) {
        SurveyPropertyEditorFactory.registerEditor(name, creator);
    }
}