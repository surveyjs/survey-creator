import { JsonObjectProperty, Base, ComponentCollection, QuestionCompositeModel } from "survey-core";
import { editorLocalization } from "../editorLocalization";
import { PropertyGridEditor, PropertyGridEditorCollection } from ".";
import { ISurveyCreatorOptions } from "../creator-settings";

const json = {
  name: "propertygrid_bindings",
  showInToolbox: false,
  internal: true,
  createElements: function () {
    //tell ComponentCollection that it is composite question
  }
};

if (!ComponentCollection.Instance.getCustomQuestionByName(json.name)) {
  ComponentCollection.Instance.add(json as any);
}

export class PropertyGridEditorBindings extends PropertyGridEditor {

  public fit(prop: JsonObjectProperty): boolean {
    return prop.type == "bindings";
  }
  public getJSON(): any {
    const res = {
      type: "propertygrid_bindings",
    };
    return res;
  }
  public onCreated(obj: Base, question: QuestionCompositeModel, prop: JsonObjectProperty, options: ISurveyCreatorOptions) {
    question.contentPanel.fromJSON({ elements: this.getQuestions(obj, options) });
    question.valueFromDataCallback = (value: any): any => {
      const keys = obj.bindings.getNames();
      const result: { [index: string]: any } = {};
      if (keys.length > 0) {
        for (const key of keys) {
          result[key] = !!value ? value[key] : obj.bindings.getValueNameByPropertyName(key);
        }
      }
      return result;
    };
  }
  private getQuestions(obj: Base, options: ISurveyCreatorOptions): Array<object> {
    const res = [];
    for (const bindingName of obj.bindings.getNames()) {
      res.push(this.getBindingJSON(bindingName, obj, options));
    }
    return res;
  }
  private getBindingJSON(bindingName: string, obj: Base, options: ISurveyCreatorOptions): { [index: string]: any } {
    const prop = new JsonObjectProperty(null, "value");
    prop.type = "questionvalue";
    const json = PropertyGridEditorCollection.getJSON(obj, prop, options);
    json.titleLocation = "left";
    json.descriptionLocation = "hidden";
    json.minWidth = "0px";
    json.name = bindingName;
    json.title = editorLocalization.getPropertyName(bindingName);
    return json;
  }
}

PropertyGridEditorCollection.register(new PropertyGridEditorBindings());

