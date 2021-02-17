import * as ko from "knockout";
import {
  Base,
  IActionBarItem,
  ImplementorBase,
  PageModel,
  property,
  propertyArray,
} from "survey-knockout";
import { SurveyCreator } from "../creator";

//import "./page.scss";
const template = require("./page.html");
// import template from "./page.html";

export class PageViewModel extends Base {
  @property({ defaultValue: false }) isGhost: boolean;
  @propertyArray() actions: Array<IActionBarItem>;
  public creator: SurveyCreator;
  private _page: PageModel;

  constructor(creator: SurveyCreator, page: PageModel) {
    super();
    this.creator = creator;

    this._page = page;
    this.isGhost = typeof this.page["_addToSurvey"] === "function";
    if (!this.isGhost) {
      this.actions = creator.getContextActions(this.page);
    }
    this.page.onFirstRendering();
    this.page.updateCustomWidgets();
    this.page.setWasShown(true);
  }

  get page(): PageModel {
    return this._page;
  }

  private addGhostPage() {
    if (this.isGhost) {
      this.isGhost = false;
      this.page["_addToSurvey"]();
    }
  }

  addNewQuestionText = "Add a New Question";
  addNewQuestion(model: PageViewModel, event: Event) {
    this.addGhostPage();
    model.creator.survey.currentPage = model.page;
    model.creator.clickToolboxItem({ type: "text" });
  }
  select(model: PageViewModel, event: Event) {
    if (!model.isGhost) {
      model.creator.selectElement(model.page);
    }
  }
  get css(): string {
    if (this.isGhost) {
      return "svc-page__content--new";
    }
    return this.creator.isElementSelected(this.page)
      ? "svc-page__content--selected"
      : "";
  }
  dragOver(model: PageViewModel, event: DragEvent) {
    if (!event["markEvent"]) {
      event["markEvent"] = true;
      model.creator.dragDropHelper.ddTarget.moveToPage(<any>model.page);
      model.creator.dragDropHelper.doDragDropOver(event, model.page, true);
      return false;
    }
  }
  drop(model: PageViewModel, event: DragEvent) {
    var helper = model.creator.dragDropHelper;
    if (!event["markEvent"]) {
      event["markEvent"] = true;
      helper.doDrop(event, true);
      this.addGhostPage();
    }
  }
}

ko.components.register("svc-page", {
  viewModel: {
    createViewModel: (params: any, componentInfo: any) => {
      const creator = params.creator;
      const scrollSubscription = ko.computed(() => {
        if (creator.isElementSelected(params.page)) {
          componentInfo.element.scrollIntoView();
        }
      });
      const model = new PageViewModel(creator, ko.unwrap(params.page));
      new ImplementorBase(model);
      ko.utils.domNodeDisposal.addDisposeCallback(componentInfo.element, () => {
        scrollSubscription.dispose();
      });
      return model;
    },
  },
  template: template,
});
