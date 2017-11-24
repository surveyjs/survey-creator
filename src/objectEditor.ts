import * as ko from 'knockout'
import * as Survey from 'survey-knockout'

import { SurveyObjectProperty } from './objectProperty'
import { ISurveyObjectEditorOptions } from './propertyEditors/propertyEditorBase'
import { editorLocalization } from './editorLocalization'
import { SurveyHelper } from './surveyHelper'

export class SurveyObjectEditor {
  private selectedObjectValue: any
  private oldActiveProperty: SurveyObjectProperty = null
  public koProperties = ko.observableArray<SurveyObjectProperty>()
  public koActiveProperty = ko.observable<SurveyObjectProperty>()
  public koHasObject = ko.observable<boolean>()
  public onPropertyValueChanged: Survey.Event<
    (sender: SurveyObjectEditor, options: any) => any,
    any
  > = new Survey.Event<(sender: SurveyObjectEditor, options: any) => any, any>()
  public onCanShowPropertyCallback: (
    object: any,
    property: Survey.JsonObjectProperty
  ) => boolean

  constructor(public propertyEditorOptions: ISurveyObjectEditorOptions = null) {
    this.koActiveProperty.subscribe(newValue => {
      if (this.oldActiveProperty === newValue) return
      if (this.oldActiveProperty) this.oldActiveProperty.isActive = false
      this.oldActiveProperty = newValue
      if (newValue) newValue.isActive = true
    })
  }

  public get selectedObject(): any {
    return this.selectedObjectValue
  }
  public set selectedObject(value: any) {
    if (this.selectedObjectValue == value) return
    this.koHasObject(value != null)
    this.selectedObjectValue = value
    this.updateProperties()
    this.updatePropertiesObject()
  }
  public getPropertyEditor(name: string) {
    var properties = this.koProperties()
    for (var i = 0; i < properties.length; i++) {
      if (properties[i].name == name) return properties[i]
    }
    return null
  }
  public changeActiveProperty(property: SurveyObjectProperty) {
    this.koActiveProperty(property)
  }
  public objectChanged() {
    this.updatePropertiesObject()
  }
  protected updateProperties() {
    if (!this.selectedObject || !this.selectedObject.getType) {
      this.koProperties([])
      this.koActiveProperty(null)
      return
    }
    var properties = Survey.JsonObject.metaData.getProperties(
      this.selectedObject.getType()
    )
    properties.sort((a, b) => {
      if (a.name == b.name) return 0
      if (a.name > b.name) return 1
      return -1
    })
    var objectProperties = []
    var self = this
    var propEvent = (property: SurveyObjectProperty, newValue: any) => {
      self.onPropertyValueChanged.fire(this, {
        property: property.property,
        object: property.object,
        newValue: newValue,
      })
    }
    for (var i = 0; i < properties.length; i++) {
      if (!this.canShowProperty(properties[i])) continue
      var objectProperty = new SurveyObjectProperty(
        properties[i],
        propEvent,
        this.propertyEditorOptions
      )
      objectProperties.push(objectProperty)
    }
    this.koProperties(objectProperties)
    this.koActiveProperty(this.getPropertyEditor('name'))
  }
  protected canShowProperty(property: Survey.JsonObjectProperty): boolean {
    return SurveyHelper.isPropertyVisible(
      this.selectedObject,
      property,
      this.onCanShowPropertyCallback
    )
  }
  protected updatePropertiesObject() {
    var properties = this.koProperties()
    for (var i = 0; i < properties.length; i++) {
      properties[i].object = this.selectedObject
    }
  }
}
