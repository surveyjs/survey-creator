import * as ko from "knockout";
const template = require("./add-question-type-selector.html").default;
export let AddNewQuestionTypeSelectorViewModel: any;

ko.components.register("svc-add-question-type-selector", {
  template: template
});
