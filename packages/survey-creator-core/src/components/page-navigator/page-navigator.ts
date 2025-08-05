import { PagesController } from "../../pages-controller";
import { PageModel, PopupModel, ListModel, Base, propertyArray, SurveyModel, property, IAction, Action, ComputedUpdater } from "survey-core";

import "./page-navigator.scss";
import "./page-navigator-item.scss";
import { getLocString } from "../../editorLocalization";
import { listComponentCss } from "../list-theme";

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
  private _resizeObserver: ResizeObserver;

  private pcPropertyChangedHandler = (sender, options) => {
    if (options.name === "toolboxLocation") {
      if (this.pagesController.creator["toolboxLocation"] == "sidebar") {
        this.popupModel.horizontalPosition = "right";
      } else {
        this.popupModel.horizontalPosition = this.pagesController.creator["toolboxLocation"];
      }
    }
  };

  constructor(private pagesController: PagesController, private pageEditMode: string) {
    super();
    this.icon = "icon-select-page";
    this.pagesController.onPagesChanged.add(this.pagesChangedFunc);
    this.pagesController.onCurrentPageChanged.add(this.currentPagesChangedFunc);
    this.pageListModel = new ListModel({
      items: [],
      onSelectionChanged: (item) => {
        this.pagesController.selectPage(item.data);
        this.popupModel.hide();
      },
      cssClasses: listComponentCss,
      allowSelection: true,
      listRole: "menu",
      listItemRole: "menuitemradio",
      locOwner: pagesController.creator as any
    });
    this.popupModel = new PopupModel("sv-list", { model: this.pageListModel }, { cssClass: "svc-creator-popup" });
    this.popupModel.focusFirstInputSelector = ".svc-list__item--selected";
    !!this.pagesController && (this.popupModel.horizontalPosition = this.pagesController.creator["toolboxLocation"]);
    this.popupModel.onShow = () => {
      this.pageListModel.selectedItem = this.getActionBarByPage(this.pagesController.currentPage);
      this.isPopupOpened = true;
    };
    this.popupModel.onHide = () => { this.isPopupOpened = false; };
    if (!!this.pagesController.creator["onPropertyChanged"]) {
      this.pagesController.creator["onPropertyChanged"].add(this.pcPropertyChangedHandler);
    }
    this.buildItems();
  }
  public dispose(): void {
    super.dispose();
    this.stopItemsContainerHeightObserver();
    this.pagesController.onPagesChanged.remove(this.pagesChangedFunc);
    this.pagesController.onCurrentPageChanged.remove(this.currentPagesChangedFunc);
    if (!!this.pagesController.creator["onPropertyChanged"]) {
      this.pagesController.creator["onPropertyChanged"].remove(this.pcPropertyChangedHandler);
      this.pcPropertyChangedHandler = undefined;
    }
    if (this.pageListModel) {
      this.pageListModel.dispose();
    }
    if (this.popupModel) {
      this.popupModel.dispose();
    }
    this._scrollableContainer = undefined;
    this._itemsContainer = undefined;
  }

  @property({ defaultValue: true }) hasScrolling: boolean;
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
    this.updateVisibility();
  }
  private buildItems() {
    this.currentPage = this.pagesController.currentPage || this.pagesController.pages[0];
    var items = [];
    var pages = this.pagesController.pages;
    for (var i = 0; i < pages.length; i++) {
      items.push(this.createActionBarItem(pages[i]));
    }
    if (this.pagesController.creator["pageEditMode"] === "bypage") {
      const newPage = (<any>this.pagesController["creator"]).getPlugin("designer").model.newPage;
      if (!!newPage) {
        items.push(this.createActionBarItem(newPage));
      }
    }
    this.setItems(items);
  }
  private patchContainerOffset(el: HTMLElement) {
    while(!!el) {
      if (el.className.indexOf("svc-tab-designer--with-surface-tools") !== -1) {
        el.offsetParent.scrollTop = 0;
        return;
      }
      el = el.parentElement;
    }
  }
  private createActionBarItem(page: PageModel): Action {
    const item: IAction = {
      id: page.id,
      title: <any>new ComputedUpdater<string>(() => {
        var pageName = page.name;
        var pageTitle = page.title;
        return this.pagesController
          ? this.pagesController.getDisplayName(page)
          : (pageTitle || pageName);
      })
    };
    item.active = <any>new ComputedUpdater<boolean>(() => page === this.currentPage);
    item.action = (item: any) => {
      const survey = this.pagesController.survey;
      if (this.pageEditMode === "bypage" && survey.pages.indexOf(page) < 0) {
        survey.addPage(page);
      }
      this.scrollToPage(page);
    };
    item.data = page;
    return this.createActionBarCore(item);
  }
  public get isByPageMode() {
    return this.pagesController.creator["pageEditMode"] === "bypage";
  }
  public scrollToPage(page: PageModel) {
    if (this.pageEditMode === "bypage") {
      this.pagesController.currentPage = page;
      this.currentPage = page;
      this.pagesController.creator.selectElement(this.pagesController.currentPage);
      return;
    }
    const rootNode = this._itemsContainer?.getRootNode();
    const doc = rootNode instanceof Document || rootNode instanceof ShadowRoot ? rootNode : document;
    const el: any = doc.getElementById(page.id);
    if (!!el) {
      const isLastPage = this.pagesController.pages.indexOf(page) === (this.pagesController.pages.length - 1);
      if (!!this._scrollableContainer) {
        // const y = el.offsetTop - (this._scrollableContainer.clientHeight / 4);
        this._scrollableContainer.scrollTo(this._scrollableContainer.scrollLeft, el.offsetTop - 20);
        this.patchContainerOffset(el);
        if (isLastPage) {
          setTimeout(() => {
            this._scrollableContainer.scrollTo(this._scrollableContainer.scrollLeft, el.offsetTop - 20);
            this.patchContainerOffset(el);
          }, 50);
        }
      } else {
        el.scrollIntoView({ block: "start" });
        this.patchContainerOffset(el);
        if (isLastPage) {
          setTimeout(() => {
            el.scrollIntoView({ block: "start" });
            this.patchContainerOffset(el);
          }, 50);
        }
      }
    }
  }
  protected createActionBarCore(item: IAction): Action {
    return new Action(item);
  }
  togglePageSelector = (event?: any) => this.popupModel.toggleVisibility();
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
  @property({
    onSet: (page: PageModel, navigator: PageNavigatorViewModel) => {
      const currantPageIndex = navigator.pagesController.pages.indexOf(page);
      if (currantPageIndex >= navigator.visibleItemsStartIndex && currantPageIndex < navigator.visibleItemsStartIndex + navigator.visibleItemsCount) {
        return;
      }
      let newVisibleItemsStartIndex = navigator.visibleItemsStartIndex;
      if (currantPageIndex < navigator.visibleItemsStartIndex) {
        newVisibleItemsStartIndex = currantPageIndex;
      }
      if (currantPageIndex >= navigator.visibleItemsStartIndex + navigator.visibleItemsCount) {
        newVisibleItemsStartIndex = currantPageIndex - navigator.visibleItemsCount + 1;
      }
      if (navigator.visibleItemsStartIndex !== newVisibleItemsStartIndex) {
        if (navigator.visible && !!navigator._itemsContainer) {
          const itemsHolder = navigator._itemsContainer.querySelectorAll(".svc-page-navigator__selector + div")[0];
          if (!!itemsHolder) {
            const cssClass = "svc-page-navigator__items--" + (navigator.visibleItemsStartIndex < newVisibleItemsStartIndex ? "up" : "down");
            itemsHolder.className = cssClass;
            setTimeout(() => {
              itemsHolder.className = "";
              navigator.visibleItemsStartIndex = newVisibleItemsStartIndex;
            }, 250);
          }
        } else {
          navigator.visibleItemsStartIndex = newVisibleItemsStartIndex;
        }
      }
    }
  }) currentPage: PageModel;

  public stopItemsContainerHeightObserver() {
    this._itemsContainer = undefined;
    if (!!this._resizeObserver) {
      this._resizeObserver.disconnect();
      this._resizeObserver = undefined;
    }
    if (!this.isDisposed) {
      this.visibleItemsStartIndex = 0;
      this.visibleItemsCount = Number.MAX_VALUE;
    }
  }
  @property({ defaultValue: 0 }) visibleItemsStartIndex: number;
  @property({ defaultValue: Number.MAX_VALUE }) visibleItemsCount: number;
  private _scrollableContainer: HTMLDivElement;
  public setScrollableContainer(scrollableContainer: HTMLDivElement | any) {
    if (!!this._scrollableContainer) {
      this._scrollableContainer.onscroll = undefined;
    }
    this._scrollableContainer = scrollableContainer;
  }
  private _itemsContainer: HTMLDivElement;
  public setItemsContainer(itemsContainer: HTMLDivElement | any) {
    this.stopItemsContainerHeightObserver();
    this._itemsContainer = itemsContainer;
    this._resizeObserver = new ResizeObserver((entries: ResizeObserverEntry[], observer: ResizeObserver) => this.updateVisibleItems(entries[0].contentBoxSize[0].blockSize));
    this._resizeObserver.observe(itemsContainer);
  }
  public static PAGE_NAVIGATION_MENU_ITEM_HEIGHT = 44;
  public static PAGE_NAVIGATION_ITEM_HEIGHT = 36;
  protected updateVisibleItems(allAvailableHeight: number): void {
    this.updateVisibility();
    if (this.isByPageMode) {
      return;
    }
    const itemsAvailableHeight = allAvailableHeight - PageNavigatorViewModel.PAGE_NAVIGATION_MENU_ITEM_HEIGHT;
    this.visibleItemsCount = Math.floor(itemsAvailableHeight / PageNavigatorViewModel.PAGE_NAVIGATION_ITEM_HEIGHT);

    const currantPageIndex = this.pagesController.pages.indexOf(this.currentPage);
    let visibleStart = 0;
    if (currantPageIndex >= this.visibleItemsCount) {
      visibleStart = this.items.length - currantPageIndex - 1 < this.visibleItemsCount / 2 ? this.items.length - this.visibleItemsCount : currantPageIndex - Math.floor(this.visibleItemsCount / 2);
    }
    this.visibleItemsStartIndex = visibleStart;
  }
  private _updateVisibility() {
    this.hasScrolling = !this._scrollableContainer || (this._scrollableContainer.scrollHeight > this._scrollableContainer.clientHeight);
    this.visible = this.items.length > 1 && (this.hasScrolling || this.isByPageMode);
    if (this.isByPageMode) {
      this.visibleItemsStartIndex = 0;
      this.visibleItemsCount = this.items.length;
    }
  }
  private updateVisibility() {
    // this._updateVisibility();
    setTimeout(() => {
      this._updateVisibility();
    }, 100);
  }
  public get visibleItems() {
    if (this.items.length <= this.visibleItemsCount) {
      return this.items;
    }
    return this.items.slice(this.visibleItemsStartIndex, this.visibleItemsStartIndex + this.visibleItemsCount);
  }
  public attachToUI(el: HTMLDivElement) {
    if (!!el) {
      const scrollableContainer = el.parentElement.parentElement.parentElement.parentElement.parentElement as HTMLDivElement;
      const self = this;
      scrollableContainer.onscroll = function (this: GlobalEventHandlers, ev: Event) {
        return self.onContainerScroll(ev.currentTarget as HTMLDivElement);
      };
      this.setItemsContainer(el.parentElement as HTMLDivElement);
      this.setScrollableContainer(scrollableContainer);
    }
  }
}
