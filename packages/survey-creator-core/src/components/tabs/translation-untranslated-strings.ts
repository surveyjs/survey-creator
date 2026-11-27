import { Serializer, SurveyModel, QuestionHtmlModel } from "survey-core";
import { ISurveyCreatorOptions } from "../../creator-settings";
import { editorLocalization } from "../../editorLocalization";
import { TranslationBase, TranslationItem } from "./translation-base";
import { TranslationTable } from "./translation-table";

// The model of the side-by-side "Untranslated strings" dialog (the side panel's Translate manually):
// the whole survey's used strings that have no text in the target language when the dialog opens,
// grouped by page in the grid view's table. The rows stay when they get translated: they are taken
// once (freezeRows). The Source column is plain text, as in the machine-translation dialog of the
// multiple-languages mode. Its cells write into the real survey at once (there is no apply step), so
// the tab model follows every edit through its usual real-survey change notification.
export class TranslationUntranslatedStrings extends TranslationBase {
  constructor(survey: SurveyModel, options: ISurveyCreatorOptions, sourceLocale: string, targetLocale: string) {
    super(survey, options, true);
    this.useSourceTargetColumns = true;
    this.sourceLocale = sourceLocale;
    this.targetLocale = targetLocale;
  }
  protected createStringsTable(): TranslationTable {
    return new TranslationTable(this, {
      layout: "pages",
      filter: (item: TranslationItem): boolean => !item.locString.getLocaleText(this.targetLocale || ""),
      freezeRows: true,
      sourceReadOnly: true
    });
  }
  // The area of the dialog the multiple-languages mode opens: the same survey role.
  protected getSurveyStringsArea(): string { return "translation-tab:table-popup-editor"; }
  // Nothing left to translate: the dialog says so instead of rendering an empty survey.
  protected onSurveyStringsCreated(survey: SurveyModel): void {
    super.onSurveyStringsCreated(survey);
    if (this.stringsTable.rowItems.length > 0) return;
    const question = <QuestionHtmlModel>Serializer.createClass("html");
    question.name = "svc-translation-no-strings";
    question.ignoreHtmlProgressing = true;
    question.html = editorLocalization.getString("ed.translationNoStrings");
    survey.pages[0].addElement(question);
  }
}
