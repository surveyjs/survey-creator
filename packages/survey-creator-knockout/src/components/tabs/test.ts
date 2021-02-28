import * as ko from "knockout";
import { ImplementorBase } from "survey-knockout-ui";
import { TestSurveyTabViewModel } from "@survey/creator";

const template = require("./test.html");
// import template from "./test.html";

ko.components.register("svc-tab-test", {
  viewModel: {
    createViewModel: (params: any, componentInfo: any) => {
      const creator = params.creator;
      const model = new TestSurveyTabViewModel(creator);
      new ImplementorBase(model);
      new ImplementorBase(model.simulator);

      model.onSurveyCreatedCallback = (survey) => {
        creator.onTestSurveyCreated &&
          creator.onTestSurveyCreated.fire(self, { survey: survey });
      };

      const subscr = (s, o) => {
        if (o.name === "viewType" && o.newValue == "test") {
          var options = {
            showPagesInTestSurveyTab: creator.showPagesInTestSurveyTab,
            showDefaultLanguageInTestSurveyTab:
              creator.showDefaultLanguageInTestSurveyTab,
            showInvisibleElementsInTestSurveyTab:
              creator.showInvisibleElementsInTestSurveyTab,
            showSimulatorInTestSurveyTab: creator.showSimulatorInTestSurveyTab,
          };
          model.setJSON(creator.JSON);
          model.show(options);
        }
      };
      creator.onPropertyChanged.add(subscr);

      ko.utils.domNodeDisposal.addDisposeCallback(componentInfo.element, () => {
        creator.onPropertyChanged.remove(subscr);
      });
      return model;
    },
  },
  template: template,
});
