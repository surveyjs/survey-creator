import * as ko from "knockout";
import { ImplementorBase, Survey } from "survey-knockout-ui";
import { SurveyCreator } from "./creator";
import { CreatorBase, PageViewModel, SurveyHelper, toggleHovered } from "survey-creator-core";
import { PageModel } from "survey-core";

const template = require("./page.html");

export class DesignerPageViewModel extends PageViewModel {
  private pageUpdater;

  constructor(creator: CreatorBase, page: PageModel | ko.Observable<PageModel>) {
    super(creator, ko.unwrap(page));
    this._page = page as any;
    this.pageUpdater = ko.computed(() => super.updateSurveyElement(this.page));
    new ImplementorBase(this);
  }

  protected getPage(): PageModel {
    return ko.unwrap(this._page);
  }

  dispose(): void {
    this.pageUpdater.dispose();
    super.dispose();
  }
}

ko.components.register("svc-page", {
  viewModel: {
    createViewModel: (params: any, componentInfo: any) => {
      const creator: SurveyCreator = params.creator;

      const pageViewModel = new DesignerPageViewModel(creator, params.page);
      pageViewModel.onPageSelectedCallback = () => {
        SurveyHelper.scrollIntoViewIfNeeded(componentInfo.element);
      };

      return pageViewModel;
    }
  },
  template: template
});
