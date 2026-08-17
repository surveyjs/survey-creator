import { Component, Input } from "@angular/core";
import { AngularComponentFactory, BaseAngular } from "survey-angular-ui";
import { ItemValue } from "survey-core";
import { getTranslationLocaleProgress, translationLocaleItemComponentName } from "survey-creator-core";

// An item of the target language dropdown: the language name and, at the right edge, how much of
// the survey is already translated into it. The counts are precomputed on the choices themselves
// (see updateTargetLocaleChoices) - a language with no translations carries none. The angular list
// item passes the item itself as "model" (react and vue pass it as "item").
@Component({
  selector: "svc-translation-locale-item",
  templateUrl: "./translation-locale-item.component.html",
  styles: [":host { display: none }"]
})
export class TranslationLocaleItemComponent extends BaseAngular<ItemValue> {
  @Input() model!: ItemValue;
  protected override getModel(): ItemValue {
    return this.model;
  }
  public get progress(): string {
    return getTranslationLocaleProgress(this.model);
  }
}

AngularComponentFactory.Instance.registerComponent(translationLocaleItemComponentName, TranslationLocaleItemComponent);
