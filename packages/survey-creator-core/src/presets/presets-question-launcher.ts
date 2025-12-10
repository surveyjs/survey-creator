import { Base, CssClassBuilder, QuestionCommentModel, QuestionFactory, QuestionTextModel, Serializer, property } from "survey-core";

export class QuestionPresetsLauncherModel extends QuestionTextModel {
  constructor(name: string) {
    super(name);
  }
  getType(): string {
    return "presets-launcher";
  }
  // public getRootClass(): string {
  //   return new CssClassBuilder()
  //     .append(this.cssClasses.root)
  //     .append(this.cssClasses.onError, this.errors.length > 0)
  //     .toString();
  // }
  // public getControlClass(): string {
  //   return new CssClassBuilder()
  //     .append(this.cssClasses.control)
  //     .toString();
  // }
  // public get wrappedQuestionTemplate() {
  //   return "text";
  // }
}
Serializer.addClass("presets-launcher", [], () => new QuestionPresetsLauncherModel(""), "boolean");
QuestionFactory.Instance.registerQuestion("presets-launcher", name => {
  return new QuestionPresetsLauncherModel(name);
}, false);