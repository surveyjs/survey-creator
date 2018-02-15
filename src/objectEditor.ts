import * as ko from "knockout";
import * as Survey from "survey-knockout";

import { SurveyObjectProperty } from "./objectProperty";
import { ISurveyObjectEditorOptions } from "./propertyEditors/propertyEditorBase";
import { editorLocalization } from "./editorLocalization";
import { SurveyHelper } from "./surveyHelper";

export class SurveyObjectEditor {
  private selectedObjectValue: any;
  private oldActiveProperty: SurveyObjectProperty = null;
  koAfterRender: any;
  public koProperties = ko.observableArray<SurveyObjectProperty>();
  public koActiveProperty = ko.observable<SurveyObjectProperty>();
  public koHasObject = ko.observable<boolean>();
  public onPropertyValueChanged: Survey.Event<
    (sender: SurveyObjectEditor, options: any) => any,
    any
  > = new Survey.Event<
    (sender: SurveyObjectEditor, options: any) => any,
    any
  >();
  public onCanShowPropertyCallback: (
    object: any,
    property: Survey.JsonObjectProperty
  ) => boolean;
  public onSortPropertyCallback: (
    object: any,
    property1: Survey.JsonObjectProperty,
    property2: Survey.JsonObjectProperty
  ) => number;
  public onAfterRenderCallback: (
    object: any,
    htmlElement: HTMLElement,
    property: SurveyObjectProperty
  ) => any;

  constructor(public propertyEditorOptions: ISurveyObjectEditorOptions = null) {
    this.koActiveProperty.subscribe(newValue => {
      if (this.oldActiveProperty === newValue) return;
      if (this.oldActiveProperty) this.oldActiveProperty.isActive = false;
      this.oldActiveProperty = newValue;
      if (newValue) newValue.isActive = true;
    });
    var self = this;
    this.koAfterRender = function(el, con) {
      self.afterRender(el, con);
    };
  }

  public get selectedObject(): any {
    return this.selectedObjectValue;
  }
  public set selectedObject(value: any) {
    if (this.selectedObjectValue == value) return;
    this.koHasObject(value != null);
    this.selectedObjectValue = value;
    this.updateProperties();
    this.updatePropertiesObject();
  }
  public getPropertyEditor(name: string) {
    var properties = this.koProperties();
    for (var i = 0; i < properties.length; i++) {
      if (properties[i].name == name) return properties[i];
    }
    return null;
  }
  public changeActiveProperty(property: SurveyObjectProperty) {
    this.koActiveProperty(property);
  }
  public objectChanged() {
    this.updatePropertiesObject();
  }
  protected afterRender(elements, prop) {
    if (
      !Survey.SurveyElement ||
      !Survey.SurveyElement.GetFirstNonTextElement ||
      !this.onAfterRenderCallback
    )
      return;
    var el = Survey.SurveyElement.GetFirstNonTextElement(elements);
    var tEl = elements[0];
    if (tEl.nodeName === "#text") tEl.data = "";
    tEl = elements[elements.length - 1];
    if (tEl.nodeName === "#text") tEl.data = "";
    this.onAfterRenderCallback(this.selectedObject, el, prop);
  }
  protected updateProperties() {
    if (!this.selectedObject || !this.selectedObject.getType) {
      this.koProperties([]);
      this.koActiveProperty(null);
      return;
    }
    var properties = Survey.JsonObject.metaData["getPropertiesByObj"]
      ? Survey.JsonObject.metaData["getPropertiesByObj"](this.selectedObject)
      : Survey.JsonObject.metaData.getProperties(this.selectedObject.getType());
    var objectProperties = [];
    var self = this;
    var propEvent = (property: SurveyObjectProperty, newValue: any) => {
      self.onPropertyValueChanged.fire(this, {
        property: property.property,
        object: property.object,
        newValue: newValue
      });
    };
    var visibleProperties = [];
    for (var i = 0; i < properties.length; i++) {
      if (!this.canShowProperty(properties[i])) continue;
      visibleProperties.push(properties[i]);
    }
    var sortEvent = function(
      a: Survey.JsonObjectProperty,
      b: Survey.JsonObjectProperty
    ): number {
      var res = 0;
      if (self.onSortPropertyCallback) {
        res = self.onSortPropertyCallback(self.selectedObject, a, b);
      }
      if (res) return res;
      if (a.name == b.name) return 0;
      if (a.name > b.name) return 1;
      return -1;
    };
    visibleProperties = visibleProperties.sort(sortEvent);
    for (var i = 0; i < visibleProperties.length; i++) {
      var objectProperty = new SurveyObjectProperty(
        visibleProperties[i],
        propEvent,
        this.propertyEditorOptions
      );
      objectProperty.editor.isInplaceProperty = true;
      objectProperties.push(objectProperty);
    }
    this.koProperties(objectProperties);
    var propEditor = this.getPropertyEditor("name");
    if (!propEditor && objectProperties.length > 0) {
      propEditor = this.getPropertyEditor(objectProperties[0].name);
    }
    if (propEditor) {
      this.koActiveProperty(propEditor);
    }
  }
  protected canShowProperty(property: Survey.JsonObjectProperty): boolean {
    return SurveyHelper.isPropertyVisible(
      this.selectedObject,
      property,
      this.onCanShowPropertyCallback
    );
  }
  protected updatePropertiesObject() {
    var properties = this.koProperties();
    for (var i = 0; i < properties.length; i++) {
      properties[i].object = this.selectedObject;
    }
  }
}
