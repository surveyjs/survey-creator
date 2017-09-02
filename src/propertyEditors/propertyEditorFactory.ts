import * as Survey from "survey-knockout";
import {SurveyPropertyEditorBase} from "./propertyEditorBase";
import {SurveyPropertyCustomEditor} from "./propertyCustomEditor";
import {editorLocalization} from "../editorLocalization";

export class SurveyPropertyEditorFactory {
    public static defaultEditor: string = "string";
    private static editorRegisteredList = {};
    private static widgetRegisterList = {};
    public static registerEditor(name: string, creator: (property: Survey.JsonObjectProperty) => SurveyPropertyEditorBase) {
        SurveyPropertyEditorFactory.editorRegisteredList[name] = creator;
    }
    public static registerCustomEditor(name: string, widgetJSON: any) {
        SurveyPropertyEditorFactory.widgetRegisterList[name] = widgetJSON;
    }
    public static createEditor(property: Survey.JsonObjectProperty, func: (newValue: any) => any): SurveyPropertyEditorBase {
        var editorType = property.type;
        if (property.choices != null && (!editorType || editorType == SurveyPropertyEditorFactory.defaultEditor)) {
            editorType = "dropdown";
        }
        var propertyEditor = SurveyPropertyEditorFactory.createCustomEditor(editorType, property);
        if (!propertyEditor) {
            var creator = SurveyPropertyEditorFactory.editorRegisteredList[editorType];
            if(creator) propertyEditor = creator(property);
        }
        if (!propertyEditor) {
            creator = SurveyPropertyEditorFactory.editorRegisteredList[SurveyPropertyEditorFactory.defaultEditor];
            propertyEditor = creator(property);
        }
        propertyEditor.onChanged = func;
        return propertyEditor;
    }
    private static createCustomEditor(name: string, property: Survey.JsonObjectProperty) {
        var widgetJSON = SurveyPropertyEditorFactory.widgetRegisterList[name];
        if(!widgetJSON) return null;
        return new SurveyPropertyCustomEditor(property, widgetJSON);
    }
}

export class SurveyStringPropertyEditor extends SurveyPropertyEditorBase {
    constructor(property: Survey.JsonObjectProperty) {
        super(property);
    }
    public get editorType(): string { return "string"; }
}
export class SurveyDropdownPropertyEditor extends SurveyPropertyEditorBase {
    constructor(property: Survey.JsonObjectProperty) {
        super(property);
    }
    public get editorType(): string { return "dropdown"; }
    public getValueText(value: any): string { 
        if(!value) return value;
        var res = editorLocalization.getPropertyValue(value);
        return res ? res : value;
    }
}
export class SurveyBooleanPropertyEditor extends SurveyPropertyEditorBase {
    constructor(property: Survey.JsonObjectProperty) {
        super(property);
    }
    public get editorType(): string { return "boolean"; }
    public getValueText(value: any): string { 
        return editorLocalization.getPropertyValue(value);
    }
}
export class SurveyNumberPropertyEditor extends SurveyPropertyEditorBase {
    constructor(property: Survey.JsonObjectProperty) {
        super(property);
    }
    public get editorType(): string { return "number"; }
}

SurveyPropertyEditorFactory.registerEditor("string", function (property: Survey.JsonObjectProperty): SurveyPropertyEditorBase { return new SurveyStringPropertyEditor(property); });
SurveyPropertyEditorFactory.registerEditor("dropdown", function (property: Survey.JsonObjectProperty): SurveyPropertyEditorBase { return new SurveyDropdownPropertyEditor(property); });
SurveyPropertyEditorFactory.registerEditor("boolean", function (property: Survey.JsonObjectProperty): SurveyPropertyEditorBase { return new SurveyBooleanPropertyEditor(property); });
SurveyPropertyEditorFactory.registerEditor("number", function (property: Survey.JsonObjectProperty): SurveyPropertyEditorBase { return new SurveyNumberPropertyEditor(property); });