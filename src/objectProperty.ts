import * as ko from "knockout";
import * as Survey from "survey-knockout";

import {
  SurveyPropertyEditorBase,
  ISurveyObjectEditorOptions,
} from "./propertyEditors/propertyEditorBase";
import { SurveyPropertyEditorFactory } from "./propertyEditors/propertyEditorFactory";

export class SurveyObjectProperty {
  private objectValue: any;
  public onCorrectValueBeforeSet: (
    propEditor: SurveyObjectProperty,
    newValue: any
  ) => boolean;
  public onChanged: (propEditor: SurveyObjectProperty, oldValue: any) => void;
  public name: string;
  public disabled: boolean;
  public editor: SurveyPropertyEditorBase;
  public editorType: string;
  public editorTypeTemplate: string;
  public baseEditorType: string;
  public getObjectPropertyByName: (name: string) => SurveyObjectProperty = null;
  private isHiddenValue: boolean = false;

  public koVisible: any;

  constructor(
    public property: Survey.JsonObjectProperty,
    private propertyEditorOptions: ISurveyObjectEditorOptions = null,
    isCellEditor: boolean = false
  ) {
    this.name = this.property.name;
    this.disabled = property.readOnly;
    var self = this;
    var onItemChanged = function(newValue) {
      self.onEditorValueChanged(newValue);
    };
    this.editor = SurveyPropertyEditorFactory.createEditor(
      property,
      isCellEditor
    );
    this.editor.onChanged = onItemChanged;
    this.editor.onGetLocale = this.doOnGetLocale;
    this.editor.options = propertyEditorOptions;
    this.editorType = this.editor.editorType;
    this.editorTypeTemplate = this.editor.editorTypeTemplate;
    this.koVisible = ko.observable(this.isVisible());
  }
  public get displayName(): string {
    return this.editor.displayName;
  }
  public get title(): string {
    return this.editor.title;
  }
  public get koValue(): any {
    return this.editor.koValue;
  }
  public get koText(): any {
    return this.editor.koText;
  }
  public get koIsDefault(): any {
    return this.editor.koIsDefault;
  }
  private doOnGetLocale(): string {
    if (this.object && this.object["getLocale"]) return this.object.getLocale();
    return "";
  }
  public get object(): any {
    return this.objectValue;
  }
  public set object(value: any) {
    this.objectValue = value;
    this.editor.object = value;
    this.editor.setup();
    this.updateDependedProperties();
    this.updateDynamicProperties();
  }
  public beforeShow() {
    this.editor.beforeShow();
    this.updateDynamicProperties();
  }
  public hasError(): boolean {
    return this.editor.hasError();
  }
  public applyToObj(obj: Survey.Base) {
    if (
      !!this.object &&
      Survey.Helpers.isTwoValueEquals(
        obj[this.property.name],
        this.object[this.property.name]
      )
    )
      return;
    obj[this.property.name] = this.object[this.property.name];
  }
  public get isInPropertyGrid(): boolean {
    return this.editor.isInPropertyGrid;
  }
  public set isInPropertyGrid(val: boolean) {
    this.editor.isInPropertyGrid = val;
  }
  public reset() {
    if (!this.object) return;
    this.editor.koValue(this.property.getPropertyValue(this.object));
  }
  public updateDynamicProperties() {
    this.koVisible(this.isVisible());
    this.editor.updateDynamicProperties();
  }
  public get isHidden(): boolean {
    return this.isHiddenValue;
  }
  public set isHidden(val: boolean) {
    this.isHiddenValue = val;
    this.koVisible(this.isVisible());
  }
  protected isVisible(): boolean {
    if (!this.object) return true;
    if (this.isHidden) return false;
    var layout = !!this.object.getLayoutType ? this.object.getLayoutType() : "";
    if (
      !!this.property.isVisible &&
      !(<any>this.property["isVisible"])(layout, this.object)
    )
      return false;
    return true;
  }
  protected onEditorValueChanged(newValue) {
    this.propertyEditorOptions &&
      this.propertyEditorOptions.startUndoRedoTransaction();
    if (this.object) {
      var oldValue = this.object[this.property.name];
      if (!!this.onCorrectValueBeforeSet) {
        newValue = this.onCorrectValueBeforeSet(this, newValue);
      }
      this.editor.updatePropertyValue(newValue);
      if (this.onChanged) this.onChanged(this, oldValue);
    }
    this.updateDependedProperties();
    this.propertyEditorOptions &&
      this.propertyEditorOptions.stopUndoRedoTransaction();
  }

  private updateDependedProperties() {
    if (!this.object || !this.getObjectPropertyByName) return;
    var props = this.property.getDependedProperties();
    if (!props) return;
    for (var i = 0; i < props.length; i++) {
      var prop = this.getObjectPropertyByName(props[i]);
      if (!!prop) {
        prop.updateDynamicProperties();
      }
    }
  }
}
