import { CreatorBase, PagesController } from "../../creator-base";
import {
  IActionBarItem,
  PageModel,
  PopupModel,
  ListModel,
  Base,
  propertyArray,
  ActionBarItem,
} from "survey-core";

import "./page-navigator.scss";
import "./page-navigator-item.scss";

export class PageNavigatorViewModel<
  T extends { [index: string]: any }
> extends Base {
  public icon: string;
  public pageListModel: ListModel;
  public popupModel: PopupModel;

  constructor(private pagesController: PagesController<CreatorBase<T>>) {
    super();
    this.icon = "icon-navigation";

    this.pageListModel = new ListModel(
      [],
      (item) => {
        this.pagesController.currentPage = item.data;
        this.popupModel.toggleVisibility();
      },
      true
    );
    this.popupModel = new PopupModel("sv-list", this.pageListModel);
    this.popupModel.onShow = () => {
      this.pageListModel.selectedItem = this.items.filter(
        (item) => item.data === this.pagesController.currentPage
      )[0];
    };
  }

  @propertyArray() items: Array<IActionBarItem>;

  public setItems(items: Array<IActionBarItem>) {
    this.items = items;
    this.pageListModel.items = items;
  }

  createActionBarItem(page: PageModel): ActionBarItem {
    const item: IActionBarItem = {
      id: page.id,
      title:
        this.pagesController && this.pagesController.creator
          ? this.pagesController.creator.getObjectDisplayName(page)
          : page.title,
    };
    item.active = () => page === this.pagesController.currentPage;
    item.action = () => {
      this.pagesController.currentPage = page;
    };
    item.data = page;
    return new ActionBarItem(item);
  }

  get visible(): boolean {
    return this.items.length > 1;
  }

  togglePageSelector = () => this.popupModel.toggleVisibility();
}
