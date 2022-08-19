import * as ko from "knockout";
import { ImplementorBase, Survey } from "survey-knockout-ui";
import { SurveyCreator } from "./creator";
import { CreatorBase, PageAdorner, SurveyHelper, toggleHovered } from "survey-creator-core";
import { PageModel } from "survey-core";

const template = require("./page.html");

export class CreatorSurveyPageComponent extends PageAdorner {
  private pageUpdater;
  private _page: PageModel;

  constructor(creator: CreatorBase, page: PageModel | ko.Observable<PageModel>) {
    super(creator, ko.unwrap(page));

    this.pageUpdater = ko.computed(() => {
      this.detachElement(this.page);
      this._page = page as any;
      this.attachElement(this.page);
    });
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

      const pageAdornerViewModel = new CreatorSurveyPageComponent(creator, params.page);
      pageAdornerViewModel.onPageSelectedCallback = () => {
        SurveyHelper.scrollIntoViewIfNeeded(componentInfo.element);
      };

      return pageAdornerViewModel;
    }
  },
  template: template
});
