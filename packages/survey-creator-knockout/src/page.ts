import * as ko from "knockout";
import { ImplementorBase, Survey } from "survey-knockout-ui";
import { SurveyCreator } from "./creator";
import { SurveyCreatorModel, PageAdorner, SurveyHelper, toggleHovered } from "survey-creator-core";
import { PageModel } from "survey-core";

const template = require("./page.html");

export class CreatorSurveyPageComponent extends PageAdorner {
  private pageUpdater;
  private isGhostUpdater;
  private currPage: PageModel;

  constructor(creator: SurveyCreatorModel, private _page: PageModel | ko.Observable<PageModel>, private _isGhost: boolean | ko.Observable<boolean>) {
    super(creator, ko.unwrap(_page));

    if (ko.isSubscribable(_page)) {
      this.pageUpdater = _page.subscribe((newPage: PageModel) => {
        this.detachElement(this.currPage);
        this.currPage = newPage;
        this.attachElement(newPage);
        this.isGhost = ko.unwrap(this._isGhost);
      });
    }
    if (ko.isSubscribable(this._isGhost)) {
      this.isGhostUpdater = this._isGhost.subscribe((newValue: boolean) => {
        this.isGhost = newValue;
      });
    }
    this.currPage = ko.unwrap(_page);
    this._page = _page;
    this.attachElement(this.page);
    this.isGhost = ko.unwrap(this._isGhost);
    new ImplementorBase(this);
  }

  protected getPage(): PageModel {
    return ko.unwrap(this._page) || super.getPage();
  }

  fixedDispose(): void {
    this.pageUpdater && this.pageUpdater.dispose();
    this.isGhostUpdater && this.isGhostUpdater.dispose();
    super.dispose();
    if (ko.isWritableObservable(this._page)) {
      (this._page as ko.Observable<PageModel>)(undefined);
    }
    this._page = undefined;
  }

  dispose(): void {
  }
}

ko.components.register("svc-page", {
  viewModel: {
    createViewModel: (params: any, componentInfo: any) => {
      const creator: SurveyCreator = params.creator;
      const pageAdornerViewModel = new CreatorSurveyPageComponent(creator, params.page, params.isGhost);
      pageAdornerViewModel.rootElement = componentInfo.element;
      ko.utils.domNodeDisposal.addDisposeCallback(componentInfo.element, () => {
        pageAdornerViewModel.fixedDispose();
      });

      return pageAdornerViewModel;
    }
  },
  template: template.default
});
