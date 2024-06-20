import { QuestionRankingModel, ItemValue, Serializer, ElementFactory } from "survey-core";
import { editorLocalization } from "../../editorLocalization";

export class PresetItemValue extends ItemValue {
  constructor(value: any, text: string = null, protected typeName = "presetitemvalue"
  ) {
    super(value, text, typeName);
  }
  public getType(): string {
    return !!this.typeName ? this.typeName : "presetitemvalue";
  }
  public updateModifiedText(locStrs: any): void {
    if(!this.locText.localizationName) return undefined;
    const text = this.locText.text;
    const presetStrs = editorLocalization.presetStrings;
    editorLocalization.presetStrings = undefined;
    if(text !== editorLocalization.getString(this.locText.localizationName)) {
      this.saveTextInLocStrs(locStrs, text);
    }
    editorLocalization.presetStrings = presetStrs;
  }
  private saveTextInLocStrs(locStrs: any, text: string): void {
    const paths = this.locText.localizationName.split(".");
    for(let i = 0; i < paths.length - 1; i ++) {
      const path = paths[i];
      if(!locStrs[path]) {
        locStrs[path] = {};
      }
      locStrs = locStrs[path];
    }
    locStrs[paths[paths.length - 1]] = text;
  }
}

export class QuestionPresetRankingModel extends QuestionRankingModel {
  constructor(name: string) {
    super(name);
    this.itemContentComponent = "sv-preset-ranking-item-content";
  }
  public getType(): string {
    return "presetranking";
  }
  protected getItemValueType(): string {
    return "presetitemvalue";
  }
  protected getCssType(): string {
    return "ranking";
  }
  public updateModifiedText(locStrs: any): void {
    if(!this.isVisible) return;
    this.choices.forEach(item => {
      (<PresetItemValue>item).updateModifiedText(locStrs);
    });
  }
}

Serializer.addClass("presetitemvalue",
  [],
  (value: any) => new PresetItemValue(value),
  "itemvalue"
);
Serializer.addClass("presetranking",
  [],
  function () { return new QuestionPresetRankingModel(""); },
  "ranking"
);
ElementFactory.Instance.registerElement("presetranking", (name) => {
  return new QuestionPresetRankingModel(name);
}, false);
