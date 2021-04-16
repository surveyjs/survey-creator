import { CreatorBase } from "../../creator-base";
import { PagesController } from "../../controllers/pages-controller";
import {
  IActionBarItem,
  PageModel,
  PopupModel,
  ListModel,
  Base,
  propertyArray,
  ActionBarItem,
  SurveyModel,
  property,
} from "survey-core";

import "./page-navigator.scss";
import "./page-navigator-item.scss";

export class PageNavigatorViewModel<T extends SurveyModel> extends Base {
  public icon: string;
  public pageListModel: ListModel;
  public popupModel: PopupModel;
  private pagesChangedFunc: (sender: PagesController, options: any) => any;
  private currentPageChangedFunc: (
    sender: PagesController,
    options: any
  ) => any;
  private pageNameChangedFunc: (sender: PagesController, options: any) => any;

  constructor(private pagesController: PagesController) {
    super();
    this.icon = "icon-navigation";
    this.pagesChangedFunc = (sender: PagesController, options: any) => {
      this.buildItems();
    };
    this.currentPageChangedFunc = (sender: PagesController, options: any) => {
      this.updateItemsActivity();
    };
    this.pageNameChangedFunc = (sender: PagesController, options: any) => {
      var page = options.page;
      if (!page) return;
      var item = this.getActionBarByPage(page);
      if (!!item) {
        item.title = this.pagesController.getDisplayName(page);
      }
    };
    this.pagesController.onPagesChanged.add(this.pagesChangedFunc);
    this.pagesController.onCurrentPagesChanged.add(this.currentPageChangedFunc);
    this.pagesController.onPageNameChanged.add(this.pageNameChangedFunc);
    this.pageListModel = new ListModel(
      [],
      (item) => {
        this.pagesController.selectPage(item.data);
        this.popupModel.toggleVisibility();
      },
      true
    );
    this.popupModel = new PopupModel("sv-list", this.pageListModel);
    this.popupModel.onShow = () => {
      this.pageListModel.selectedItem = this.getActionBarByPage(
        this.pagesController.currentPage
      );
    };
    this.buildItems();
  }
  public dispose() {
    super.dispose();
    this.pagesController.onPagesChanged.remove(this.pagesChangedFunc);
    this.pagesController.onCurrentPagesChanged.remove(
      this.currentPageChangedFunc
    );
    this.pagesController.onPageNameChanged.add(this.pageNameChangedFunc);
  }

  @propertyArray() items: Array<IActionBarItem>;
  @property({ defaultValue: false }) visible: boolean;
  private getActionBarByPage(page: PageModel): IActionBarItem {
    for (var i = 0; i < this.items.length; i++) {
      if (this.items[i].data === page) return this.items[i];
    }
    return null;
  }
  private setItems(items: Array<IActionBarItem>) {
    this.items = items;
    this.pageListModel.items = items;
    this.visible = items.length > 1;
  }
  private buildItems() {
    var items = [];
    var pages = this.pagesController.pages;
    for (var i = 0; i < pages.length; i++) {
      items.push(this.createActionBarItem(pages[i]));
    }
    this.setItems(items);
  }
  private updateItemsActivity() {
    var page = this.pagesController.currentPage;
    for (var i = 0; i < this.items.length; i++) {
      var item = this.items[i];
      item.active = item.data === page;
    }
  }
  private createActionBarItem(page: PageModel): ActionBarItem {
    const item: IActionBarItem = {
      id: page.id,
      title: this.pagesController
        ? this.pagesController.getDisplayName(page)
        : page.title,
    };
    item.active = page === this.pagesController.currentPage;
    item.action = () => {
      this.pagesController.selectPage(page);
    };
    item.data = page;
    return this.createActionBarCore(item);
  }
  protected createActionBarCore(item: IActionBarItem): ActionBarItem {
    return new ActionBarItem(item);
  }
  togglePageSelector = () => this.popupModel.toggleVisibility();
}
