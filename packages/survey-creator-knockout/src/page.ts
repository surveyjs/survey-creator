import * as ko from "knockout";
import { ImplementorBase, Survey } from "survey-knockout-ui";
import { SurveyCreator } from "./creator";
import { PageViewModel, SurveyHelper, toggleHovered } from "survey-creator-core";

const template = require("./page.html");

ko.components.register("svc-page", {
  viewModel: {
    createViewModel: (params: any, componentInfo: any) => {
      const creator: SurveyCreator = params.creator;
      const model = ko.computed(() => {
        const page = ko.unwrap(params.page);
        if(!page) return null;
        const pageViewModel = new PageViewModel(creator, page);
        pageViewModel.onPageSelectedCallback = () => {
          SurveyHelper.scrollIntoViewIfNeeded(componentInfo.element);
        };
        new ImplementorBase(pageViewModel);
        return pageViewModel;
      });
      ko.utils.domNodeDisposal.addDisposeCallback(componentInfo.element, () => {
        model() && model().dispose();
      });
      return { model };
    }
  },
  template: template
});
