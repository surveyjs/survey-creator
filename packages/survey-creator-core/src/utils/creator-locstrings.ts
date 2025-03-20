import { LocalizableString, SurveyModel, Base, JsonObjectProperty, Serializer } from "survey-core";

export interface ICollectLocalizableStringsOptions {
  canShowProperty(obj: Base, property: JsonObjectProperty, isEmpty: boolean, isShowing: boolean): boolean;
  onAddLocalizedString(obj: Base, property: JsonObjectProperty, locStr: LocalizableString): void;
}

export function collectLocalizableStrings(survey: SurveyModel, options: ICollectLocalizableStringsOptions, translateObj?: any): void {
  collectStringsByObj(survey, options, translateObj);
}
export function getUnlocalizedStrings(survey: SurveyModel, options: any, ...locales: Array<string>): Array<LocalizableString> {
  const res = new Array<LocalizableString>();

  return res;
}

function collectStringsByObj(obj: Base, options: ICollectLocalizableStringsOptions, translateObj: any): void {
  if (isItemValueArray(obj)) {
    createItemValuesLocale(obj, options, translateObj);
    return;
  }
  if (!obj || !obj.getType) return;
  let properties = getLocalizedProperties(obj, options);
  for (let i = 0; i < properties.length; i++) {
    addLocalizationItem(obj, properties[i]);
  }
  properties = this.getArrayProperties(this.obj);
  for (var i = 0; i < properties.length; i++) {
    var property = properties[i];
    var value = this.obj[property.name];
    //If ItemValue array?
    if (isItemValueArray(value)) {
      if (this.canShowProperty(property, Array.isArray(value) && value.length > 0)) {
        this.addNewGroup(new TranslationGroup(
          property.name,
          value,
          this.translation,
          editorLocalization.getPropertyName(property.name),
          true
        ));
      }
    } else {
      createGroups(value, property);
    }
  }
  createMatrixCellsGroup();
}
function isItemValueArray(val: any): boolean {
  return (
    !!val &&
    Array.isArray(val) &&
    val.length > 0 &&
    !!val[0] &&
    !!val[0]["getType"] &&
    !!val[0]["setData"] &&
    !!val[0]["setLocText"]
  );
}
function addLocalizationItem(obj: any, property: JsonObjectProperty): void {
  const locStr = <LocalizableString>obj[property.serializationProperty];
  if (!!locStr) {

  }
  const defaultValue = this.getDefaultValue(obj, property);
  if (!this.showAllStrings && !defaultValue && locStr.isEmpty) return null;
  const editLocale = this.translation?.getEditLocale();
  if (!!editLocale && !!locStr.getLocaleText(editLocale)) return null;
  if (!this.canShowProperty(property, locStr.isEmpty)) return null;
  return new TranslationItem(
    property.name,
    locStr,
    defaultValue,
    this.translation,
    obj,
    property
  );
}

function createItemValuesLocale(obj: Base, options: ICollectLocalizableStringsOptions, translateObj: any): void {
  const editMode = this.translation?.getEditLocale();
  for (let i = 0; i < this.obj.length; i++) {
    const val = this.obj[i];

    var canAdd =
      this.showAllStrings || !val.locText.isEmpty || isNaN(val.value);
    if (!!editMode && val.locText.getLocaleText(editMode)) {
      canAdd = false;
    }
    if (!canAdd) continue;
    var item = new TranslationItem(
      val.value,
      val.locText,
      val.value,
      this.translation,
      val
    );
    this.itemValues.push(item);
    this.addCustomPropertiesForItemValue(this.obj[i], item);
  }
}
function addCustomPropertiesForItemValue(
  itemValue: any,
  textItem: TranslationItem
) {
  var locProperties = this.getLocalizedProperties(itemValue);
  for (var i = 0; i < locProperties.length; i++) {
    if (locProperties[i].name == "text") continue;
    var item = addLocalizationItem(itemValue, locProperties[i]);
    if (!!item) {
      item.customText = textItem.text + " (" + item.localizableName + ")";
      item.name = itemValue.value + "." + item.name;
      this.itemValues.push(item);
    }
  }
}
function getLocalizedProperties(obj: any, options: ICollectLocalizableStringsOptions): Array<JsonObjectProperty> {
  const res = new Array<JsonObjectProperty>();
  const properties = Serializer.getPropertiesByObj(obj);
  for (let i = 0; i < properties.length; i++) {
    const property = properties[i];
    if (property.readOnly || !property.visible || !property.isSerializable || !property.isLocalizable) continue;
    const isShowing = ["url", "file"].indexOf(property.type) < 0;
    if (this.canShowProperty(property, !!obj[property.name], isShowing)) {
      res.push(property);
    }
  }
  return res;
}
function createGroups(value: any, property: JsonObjectProperty) {
  for (let i = 0; i < value.length; i++) {
    const obj = value[i];
    if (!!obj && obj.getType) {
      let name = obj["name"];
      let text = name;
      if (!name) {
        const index = "[" + i.toString() + "]";
        name = property.name + index;
        text = editorLocalization.getPropertyName(property.name) + index;
      }
      this.addNewGroup(new TranslationGroup(name, obj, this.translation, text));
    }
  }
}
