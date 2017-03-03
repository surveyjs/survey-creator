import * as Survey from "survey-knockout";

export class SurveyQuestionEditorDefinition {
    public static definition: any = {
        "questionbase" : {
            properties: ["name", "title", {name: "visible", category: "checks"}, {name: "isRequired", category: "checks"}, {name: "startWithNewLine", category: "checks"} ],
            tabs: [{name: "visibleIf", index: 100}]
        },
        "comment": {
            properties: ["rows", "placeHolder"]
        },
        "file": {
            properties: [{name: "showPreview", category: "imageChecks"}, {name: "storeDataAsText", category: "imageChecks"}, "maxSize", "imageHeight", "imageWidth"]
        },
        "html": {
            tabs: [{name: "html", index: 10}]
        },
        "matrixdropdownbase": {
            properties: ["cellType"],
            tabs: [{name: "columns", index: 10}, {name: "rows", index: 11}, {name: "choices", index: 12}]
        },
        "matrixdynamic": {
            properties: ["rowCount", "addRowText", "removeRowText"]
        },
        "matrix": {
            tabs: [{name: "columns", index: 10}, {name: "rows", index: 11}]
        },
        "multipleitems": {
            properties: ["colCount"],
            tabs: [{name: "items", index: 10}]
        },
        "rating" : {
            properties: ["minRateDescription", "maxRateDescription"],
            tabs: [{name: "rateValues", index: 10}]
        },
        "selectbase" : {
            tabs: [{name: "choices", index: 10}, {name: "choicesByUrl", index: 11}]
        },
        "text" : {
            properties: ["inputType", "placeHolder"]
        }
    }
    public static getProperties(className: string): Array<any> {
        var properties = [];
        var allDefinitions = SurveyQuestionEditorDefinition.getAllDefinitionsByClass(className);
        for(var i = allDefinitions.length - 1; i >= 0; i --) {
            var def = allDefinitions[i];
            if(def.properties) {
                for(var j = 0; j < def.properties.length; j ++) {
                    properties.push(def.properties[j]);
                }
            }
        }
        return properties;
    }
    public static getTabs(className: string): Array<any> {
        var tabs = [];
        var allDefinitions = SurveyQuestionEditorDefinition.getAllDefinitionsByClass(className);
        for(var i = allDefinitions.length - 1; i >= 0; i --) {
            var def = allDefinitions[i];
            if(def.tabs) {
                for(var j = 0; j < def.tabs.length; j ++) {
                    tabs.push(def.tabs[j]);
                }
            }
        }
        tabs.sort(function (a, b) { return a.index < b.index ? -1 : (a.index > b.index ? 1 : 0); });
        return tabs;
    }
    static getAllDefinitionsByClass(className: string) : Array<any> {
        var result = [];
        while (className) {
            var metaClass = <Survey.JsonMetadataClass>Survey.JsonObject.metaData["findClass"](className);
            if (!metaClass) break;
            if(SurveyQuestionEditorDefinition.definition[metaClass.name]) {
                result.push(SurveyQuestionEditorDefinition.definition[metaClass.name]);
            }
            className = metaClass.parentName;
        }
        return result;
    }

}
