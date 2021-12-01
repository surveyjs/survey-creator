import { CreatorBase } from "../../creator-base";
import { PagesController } from "../../pages-controller";
import { PageModel, PopupModel, ListModel, Base, propertyArray, SurveyModel, property, IAction, Action, ComputedUpdater } from "survey-core";

import "./page-navigator.scss";
import "./page-navigator-item.scss";
import { getLocString } from "../../editorLocalization";

export class PageNavigatorViewModel<T extends SurveyModel> extends Base {
  public icon: string;
  public pageListModel: ListModel;
  public popupModel: PopupModel;
  private pagesChangedFunc: (sender: PagesController, options: any) => any;
  private pageNameChangedFunc: (sender: PagesController, options: any) => any;

  constructor(private pagesController: PagesController) {
    super();
    this.icon = "icon-navigation";
    this.pagesChangedFunc = (sender: PagesController, options: any) => {
      this.buildItems();
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
    this.pagesController.onPageNameChanged.add(this.pageNameChangedFunc);
    this.pageListModel = new ListModel(
      [],
      (item) => {
        this.pagesController.selectPage(item.data);
        this.popupModel.toggleVisibility();
      },
      true
    );
    this.popupModel = new PopupModel("sv-list", { model: this.pageListModel });
    !!this.pagesController && (this.popupModel.horizontalPosition = this.pagesController.creator["toolboxLocation"]);
    this.popupModel.onShow = () => {
      this.pageListModel.selectedItem = this.getActionBarByPage(this.pagesController.currentPage);
      this.isPopupOpened = true;
    };
    this.popupModel.onHide = () => { this.isPopupOpened = false; };
    if (!!this.pagesController.creator["onPropertyChanged"]) {
      this.pagesController.creator["onPropertyChanged"].add((sender, options) => {
        if (options.name === "toolboxLocation") {
          if (this.pagesController.creator["toolboxLocation"] == "insideSideBar") {
            this.popupModel.horizontalPosition = "right";
          } else {
            this.popupModel.horizontalPosition = this.pagesController.creator["toolboxLocation"];
          }
        }
      });
    }
    this.buildItems();
  }
  public dispose() {
    super.dispose();
    this.pagesController.onPagesChanged.remove(this.pagesChangedFunc);
    this.pagesController.onPageNameChanged.add(this.pageNameChangedFunc);
  }

  @propertyArray() items: Array<IAction>;
  @property({ defaultValue: false }) visible: boolean;
  @property({ defaultValue: false }) isPopupOpened: boolean;
  private getActionBarByPage(page: PageModel): IAction {
    for (var i = 0; i < this.items.length; i++) {
      if (this.items[i].data === page) return this.items[i];
    }
    return null;
  }
  private setItems(items: Array<IAction>) {
    this.items = items;
    this.pageListModel.setItems(items);
    this.visible = items.length > 1;
  }
  private buildItems() {
    this.currentPage = this.pagesController.currentPage || this.pagesController.pages[0];
    var items = [];
    var pages = this.pagesController.pages;
    for (var i = 0; i < pages.length; i++) {
      items.push(this.createActionBarItem(pages[i]));
    }
    this.setItems(items);
  }
  private createActionBarItem(page: PageModel): Action {
    const item: IAction = {
      id: page.id,
      title: this.pagesController
        ? this.pagesController.getDisplayName(page)
        : page.title
    };
    item.active = <any>new ComputedUpdater<boolean>(() => page === this.currentPage);
    item.action = () => {
      const el = document.getElementById(page.id);
      if (!!el) {
        const isLastPage = this.pagesController.pages.indexOf(page) === (this.pagesController.pages.length - 1);
        el.scrollIntoView({ block: isLastPage ? "center" : "start" });
        setTimeout(() => {
          el.scrollIntoView({ block: isLastPage ? "center" : "start" });
          this.currentPage = page;
        }, 50);
      }
    };
    item.data = page;
    return this.createActionBarCore(item);
  }
  protected createActionBarCore(item: IAction): Action {
    return new Action(item);
  }
  togglePageSelector = () => this.popupModel.toggleVisibility();
  public get pageSelectorCaption() {
    return getLocString("ed.selectPage");
  }
  public onContainerScroll(viewPort: HTMLDivElement): any {
    const viewPortTop = viewPort.scrollTop;
    const viewPortHeight = viewPort.clientHeight;
    const viewPortBottom = viewPortTop + viewPortHeight;
    const visiblePages = [];
    let maxVisiblePage = undefined;
    let maxVisiblePagePart = 0;
    this.pagesController.pages.forEach(page => {
      const pageElement = document.getElementById(page.id);
      if(!!pageElement) {
        const pageTop = pageElement.offsetTop;
        const pageBottom = pageTop + pageElement.clientHeight;
        const possiblyVisible = pageTop < viewPortBottom || pageBottom > viewPortTop;
        if(!possiblyVisible) return;
        const deltaTop = pageTop - viewPortTop;
        const deltaBottom = viewPortBottom - pageBottom;
        let visiblePart = pageElement.clientHeight;
        if(deltaTop < 0) {
          visiblePart += deltaTop;
        }
        if(deltaBottom < 0) {
          visiblePart += deltaBottom;
        }
        visiblePart = visiblePart / pageElement.clientHeight;
        if(visiblePart > 0) {
          visiblePages.push({
            page,
            visiblePart
          });
          if(visiblePart > maxVisiblePagePart) {
            maxVisiblePagePart = visiblePart;
            maxVisiblePage = page;
          }
        }
      }
    });
    this.currentPage = maxVisiblePage;
    return visiblePages;
  }
  @property() currentPage: PageModel;
}
