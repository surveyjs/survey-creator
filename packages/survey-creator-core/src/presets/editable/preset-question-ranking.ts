import { QuestionRankingModel, ItemValue, Serializer, ElementFactory } from "survey-core";

export class PresetItemValue extends ItemValue {
  constructor(value: any, text: string = null, protected typeName = "presetitemvalue"
  ) {
    super(value, text, typeName);
  }
  public getType(): string {
    return !!this.typeName ? this.typeName : "presetitemvalue";
  }
}

export class QuestionPresetRankingModel extends QuestionRankingModel {
  public getType(): string {
    return "presetranking";
  }
  protected getItemValueType(): string {
    return "presetitemvalue";
  }
  protected getCssType(): string {
    return "ranking";
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
ElementFactory.Instance.registerElement("imagepicker", (name) => {
  return new QuestionPresetRankingModel(name);
});
