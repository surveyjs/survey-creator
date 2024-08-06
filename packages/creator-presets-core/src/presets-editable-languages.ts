import { Helpers, ItemValue, QuestionCheckboxBase, QuestionCheckboxModel, surveyLocalization, SurveyModel } from "survey-core";
import { CreatorPresetEditableBase, ICreatorPresetEditorSetup } from "./presets-editable-base";
import { editorLocalization, SurveyCreatorModel } from "survey-creator-core";

export class CreatorPresetEditableLanguages extends CreatorPresetEditableBase {
  public createMainPageCore(): any {
    return {
      title: "Select Languages",
      navigationTitle: "Languages",
      elements: [
        { type: "panel", name: "languages_main_panel",
          description: "Select the language of the Survey Creator UI and target languages for the survey being configured.",
          elements: [
            {
              type: "dropdown",
              titleLocation: "left",
              title: " UI language:",
              placeholder: editorLocalization.getLocaleName(""),
              name: this.creatorLocaleName,
              choices: this.getCreatorLocales()
            },
            {
              type: "checkbox",
              name: this.surveyLocalesName,
              title: "Survey languages",
              minSelectedChoices: 1,
              colCount: 3,
              showSelectAllItem: true,
              choices: this.getSurveyLocales()
            }
          ]
        }
      ] };
  }
  protected getJsonValueCore(model: SurveyModel, creator: SurveyCreatorModel): any {
    const creatorLocale = model.getValue(this.creatorLocaleName);
    const question = <QuestionCheckboxModel>model.getQuestionByName(this.surveyLocalesName);
    if(!creatorLocale && question.isAllSelected) return undefined;
    const res: any = {};
    if(creatorLocale) {
      res.creator = creatorLocale;
    }
    if(!question.isAllSelected && Array.isArray(question.value)) {
      res.surveyLocales = [];
      question.value.forEach(val => res.surveyLocales.push(val));
    }
    return res;
  }
  protected setupQuestionsValueCore(model: SurveyModel, json: any, creator: SurveyCreatorModel): void {
    json = json || {};
    model.setValue(this.creatorLocaleName, json.creator);
    const question = <QuestionCheckboxModel>model.getQuestionByName(this.surveyLocalesName);
    const locales = json.surveyLocales;
    if(Array.isArray(locales) && locales.length > 0) {
      question.valule = locales;
    } else {
      question.selectAll();
    }
  }
  private get creatorLocaleName() : string { return this.path + "_creator"; }
  private get surveyLocalesName(): string { return this.path + "_surveyLocales"; }
  private getCreatorLocales(): Array<ItemValue> {
    return this.getLocaleItemValues(editorLocalization.getLocales(), false);
  }
  private getSurveyLocales(): Array<ItemValue> {
    return this.getLocaleItemValues(surveyLocalization.getLocales(true), true);
  }
  private getLocaleItemValues(locales: Array<string>, addEnLocale: boolean): Array<ItemValue> {
    const res = [];
    locales.forEach(locale => {
      if(!locale || locale === "en") return;
      const name = editorLocalization.getLocaleName(locale);
      if(!!name && name !== locale) {
        res.push(new ItemValue(locale, name));
      }
    });
    res.sort((a: ItemValue, b: ItemValue): number => {
      if(a.text === b.text) return 0;
      return a.text < b.text ? -1 : 1;
    });
    if(addEnLocale) {
      res.unshift(new ItemValue("en", editorLocalization.getLocaleName("en")));
    }
    return res;
  }
}