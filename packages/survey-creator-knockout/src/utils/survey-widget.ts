import * as ko from "knockout";

export var SurveyWidgetBinding;

ko.components.register("survey-widget", {
  viewModel: function (params) {
    this.survey = params.model;
  },
  template:
        "<!-- ko if: $data.survey --><!-- ko template: { name: 'survey-content', data: survey, afterRender: $parent.koEventAfterRender } --><!-- /ko --><!-- /ko -->",
});
