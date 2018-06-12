import * as ko from "knockout";
import * as Survey from "survey-knockout";

import {
  SurveyPropertyEditorBase,
  ISurveyObjectEditorOptions
} from "./propertyEditors/propertyEditorBase";
import { SurveyPropertyEditorFactory } from "./propertyEditors/propertyEditorFactory";
import { editorLocalization } from "./editorLocalization";

export declare type SurveyOnPropertyChangedCallback = (
  property: SurveyObjectProperty,
  newValue: any
) => void;

export class SurveyObjectProperty {
  private objectValue: any;
  private isValueUpdating: boolean;
  private onPropertyChanged: SurveyOnPropertyChangedCallback;
  private isActiveValue: boolean;
  public name: string;
  public disabled: boolean;
  public editor: SurveyPropertyEditorBase;
  public editorType: string;
  public editorTypeTemplate: string;
  public baseEditorType: string;

  koIsShowEditor = ko.observable(false);

  constructor(
    public property: Survey.JsonObjectProperty,
    onPropertyChanged: SurveyOnPropertyChangedCallback = null,
    propertyEditorOptions: ISurveyObjectEditorOptions = null
  ) {
    this.onPropertyChanged = onPropertyChanged;
    this.name = this.property.name;
    this.disabled = property["readOnly"];
    var self = this;
    var onItemChanged = function(newValue) {
      self.onEditorValueChanged(newValue);
    };
    this.editor = SurveyPropertyEditorFactory.createEditor(
      property,
      onItemChanged
    );
    this.editor.onGetLocale = this.doOnGetLocale;
    this.editor.options = propertyEditorOptions;
    this.editorType = this.editor.editorType;
    this.editorTypeTemplate = this.editor.editorTypeTemplate;
    this.isActive = false;
  }
  public get displayName(): string {
    return this.editor.displayName;
  }
  public get title(): string {
    return this.editor.title;
  }
  public get isActive(): boolean {
    return this.isActiveValue;
  }
  public set isActive(val: boolean) {
    if (this.isActive == val) return;
    this.isActiveValue = val;
    this.koIsShowEditor(
      !this.disabled && (this.editor.alwaysShowEditor || this.isActive)
    );
    this.editor.activate();
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
  }
  protected onEditorValueChanged(newValue) {
    if (this.onPropertyChanged && this.object)
      this.onPropertyChanged(this, newValue);
  }
}
