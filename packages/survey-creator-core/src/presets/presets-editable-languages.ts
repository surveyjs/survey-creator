import { Serializer, ItemValue, QuestionCheckboxModel, surveyLocalization, SurveyModel } from "survey-core";
import { CreatorPresetEditableBase } from "./presets-editable-base";
import { getLocString, editorLocalization, SurveyCreatorModel } from "survey-creator-core";
function searchItem(params) {
  const questionInstance = this.survey.getQuestionByName(params[0]);
  let itemvalue = params[1];
  let text = params[2];
  if (!text) return true;
  const item = questionInstance.choices.filter(c => c.value == itemvalue)[0];
  if (!item) return true;
  return item.text.toUpperCase().indexOf(text.toUpperCase()) != -1;
}
import { FunctionFactory } from "survey-core";
FunctionFactory.Instance.register("searchItem", searchItem);
export class CreatorPresetEditableLanguages extends CreatorPresetEditableBase {
  public createMainPageCore(): any {
    return {
      title: getLocString("presets.languages.title"),
      description: getLocString("presets.languages.description"),
      navigationTitle: getLocString("presets.languages.navigationTitle"),
      elements: [
        {
          type: "dropdown",
          title: getLocString("presets.languages.creatorUI"),
          placeholder: editorLocalization.getLocaleName(""),
          name: this.creatorLocaleName,
          searchEnabled: true,
          choices: this.getCreatorLocales()
        },
        {
          type: "panel",
          title: getLocString("presets.languages.surveyLanguages"),
          elements: [
            {
              type: "text",
              name: this.searchLocalesName,
              placeholder: getLocString("presets.languages.searchPlaceholder"),
              titleLocation: "hidden",
              textUpdateMode: "onTyping"
            }, {
              type: "checkbox",
              name: this.surveyLocalesName,
              titleLocation: "hidden",
              minSelectedChoices: 1,
              colCount: 3,
              showSelectAllItem: true,
              choices: this.getSurveyLocales(),
              choicesVisibleIf: "searchItem('" + this.surveyLocalesName + "', {item}, {" + this.searchLocalesName + "}"
            }]
        },
        {
          type: "panel",
          title: " ",
          name: this.navigationPanelName,
          elements: [
            {
              type: "boolean",
              name: this.surveyUseEnglishNames,
              title: getLocString("presets.languages.translateToEnglish"),
              titleLocation: "hidden",
              renderAs: "switch"
            }] }
      ] };
  }
  public getMainElementNames() : any { return [this.surveyLocalesName]; }

  protected getJsonValueCore(model: SurveyModel, creator: SurveyCreatorModel, defaultJson: any): any {
    const creatorLocale = model.getValue(this.creatorLocaleName);
    const useEnglishNames = model.getValue(this.surveyUseEnglishNames) === true;
    const question = <QuestionCheckboxModel>model.getQuestionByName(this.surveyLocalesName);
    if (!creatorLocale && question.isAllSelected && !useEnglishNames) return undefined;
    const res: any = {};
    if (creatorLocale) {
      res.creator = creatorLocale;
    }
    if (useEnglishNames) {
      res.useEnglishNames = true;
    }
    if (!question.isAllSelected && Array.isArray(question.value)) {
      res.surveyLocales = [];
      question.value.forEach(val => res.surveyLocales.push(val));
    }
    return res;
  }
  protected setupQuestionsValueCore(model: SurveyModel, json: any, creator: SurveyCreatorModel): void {
    json = json || {};
    model.setValue(this.creatorLocaleName, json.creator);
    model.setValue(this.surveyUseEnglishNames, json.showInEnglish === true);
    this.updateLocaleNames(model);
    const question = <QuestionCheckboxModel>model.getQuestionByName(this.surveyLocalesName);
    const locales = json.surveyLocales;
    if (Array.isArray(locales) && locales.length > 0) {
      question.valule = locales; // TODO: sheck spell
    } else {
      question.selectAll();
    }
  }
  protected updateOnValueChangedCore(model: SurveyModel, name: string): void {
    if (name === this.surveyUseEnglishNames) {
      this.updateLocaleNames(model);
    }
  }
  private get creatorLocaleName() : string { return this.path + "_creator"; }
  private get surveyLocalesName(): string { return this.path + "_surveyLocales"; }
  private get searchLocalesName(): string { return this.path + "_searchLocales"; }
  private get surveyUseEnglishNames(): string { return this.path + "_surveyUseEnglishNames"; }

  public get questionNames() {
    return [this.creatorLocaleName, this.surveyLocalesName, this.surveyUseEnglishNames];
  }
  private getIsShowInEnglishSelected(model: SurveyModel): boolean { return model.getValue(this.surveyUseEnglishNames) === true; }
  private getCreatorLocales(): Array<ItemValue> {
    return this.getLocaleItemValues(editorLocalization.getLocales(), false);
  }
  private getSurveyLocales(): Array<ItemValue> {
    return this.getLocaleItemValues(surveyLocalization.getLocales(true), true);
  }
  private getLocaleItemValues(locales: Array<string>, addEnLocale: boolean): Array<ItemValue> {
    const res = [];
    locales.forEach(locale => {
      if (!locale || locale === "en") return;
      const name = editorLocalization.getLocaleName(locale);
      if (!!name && name !== locale) {
        res.push(new ItemValue(locale, name));
      }
    });
    if (addEnLocale) {
      res.unshift(new ItemValue("en", editorLocalization.getLocaleName("en")));
    }
    return res;
  }
  private updateLocaleNames(model: SurveyModel): void {
    const isShowInEnglish = this.getIsShowInEnglishSelected(model);
    const question = <QuestionCheckboxModel>model.getQuestionByName(this.surveyLocalesName);
    question.choices.forEach(item => {
      item.text = editorLocalization.getLocaleName(item.value, null, isShowInEnglish);
    });
    question.choicesOrder = "none";
    question.choicesOrder = "asc";
  }
}