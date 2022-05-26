import { PagesController } from "../../pages-controller";
import { PageModel, PopupModel, ListModel, Base, propertyArray, SurveyModel, property, IAction, Action, ComputedUpdater } from "survey-core";

import "./page-navigator.scss";
import "./page-navigator-item.scss";
import { getLocString } from "../../editorLocalization";

export class PageNavigatorViewModel extends Base {
  public icon: string;
  public pageListModel: ListModel;
  public popupModel: PopupModel;
  private pagesChangedFunc = (sender: PagesController, options: any) => {
    this.buildItems();
  };
  private currentPagesChangedFunc = (sender: PagesController, options: any) => {
    this.currentPage = this.pagesController.currentPage;
  };

  constructor(private pagesController: PagesController, private pageEditMode: string) {
    super();
    this.icon = "icon-select-page";
    this.pagesController.onPagesChanged.add(this.pagesChangedFunc);
    this.pagesController.onCurrentPageChanged.add(this.currentPagesChangedFunc);
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
          if (this.pagesController.creator["toolboxLocation"] == "sidebar") {
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
    this.pagesController.onCurrentPageChanged.remove(this.currentPagesChangedFunc);
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
    this.visible = items.length > 1 || this.pageEditMode === "bypage";
  }
  private buildItems() {
    this.currentPage = this.pagesController.currentPage || this.pagesController.pages[0];
    var items = [];
    var pages = this.pagesController.pages;
    for (var i = 0; i < pages.length; i++) {
      items.push(this.createActionBarItem(pages[i]));
    }
    if(this.pagesController.creator["pageEditMode"] === "bypage") {
      const newPage = (<any>this.pagesController["creator"]).getPlugin("designer").model.newPage;
      if(!!newPage) {
        items.push(this.createActionBarItem(newPage));
      }
    }
    this.setItems(items);
  }
  private patchContainerOffset(el: HTMLElement) {
    while (!!el) {
      if (el.className.indexOf("svc-tab-designer--with-page-navigator") !== -1) {
        el.offsetParent.scrollTop = 0;
        return;
      }
      el = el.parentElement;
    }
  }
  private createActionBarItem(page: PageModel): Action {
    const item: IAction = {
      id: page.id,
      title: <any>new ComputedUpdater<boolean>(() => this.pagesController
        ? this.pagesController.getDisplayName(page)
        : page.title)
    };
    item.active = <any>new ComputedUpdater<boolean>(() => page === this.currentPage);
    item.action = (item: any) => {
      if(this.pageEditMode === "bypage") {
        this.pagesController.currentPage = page;
        this.currentPage = page;
        this.pagesController.creator.selectElement(this.pagesController.currentPage);
        return;
      }
      const el: any = document.getElementById(page.id);
      if (!!el) {
        el.scrollIntoView({ block: "start" });
        this.patchContainerOffset(el);
        const isLastPage = this.pagesController.pages.indexOf(page) === (this.pagesController.pages.length - 1);
        if (isLastPage) {
          setTimeout(() => {
            el.scrollIntoView({ block: "start" });
            this.patchContainerOffset(el);
          }, 50);
        }
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
      if (!!pageElement) {
        const pageTop = pageElement.offsetTop;
        const pageBottom = pageTop + pageElement.clientHeight;
        const possiblyVisible = pageTop < viewPortBottom || pageBottom > viewPortTop;
        if (!possiblyVisible) return;
        const deltaTop = pageTop - viewPortTop;
        const deltaBottom = viewPortBottom - pageBottom;
        let visiblePart = pageElement.clientHeight;
        if (deltaTop < 0) {
          visiblePart += deltaTop;
        }
        if (deltaBottom < 0) {
          visiblePart += deltaBottom;
        }
        visiblePart = visiblePart / pageElement.clientHeight;
        if (visiblePart > 0) {
          visiblePages.push({
            page,
            visiblePart
          });
          if (visiblePart > maxVisiblePagePart) {
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
