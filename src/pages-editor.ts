import * as ko from "knockout";

import * as Survey from "survey-knockout";

import { SurveyHelper, ObjType } from "./surveyHelper";
import { SurveyCreator } from "./editor";
import { getLocString } from "./editorLocalization";

export class PagesEditor {
  private prevPagesForSelector: any[] = [];
  private _selectedPage = ko.observable<Survey.PageModel>();
  private selectionSubscription: ko.Subscription;
  private _readOnly = ko.observable(false);
  private koSurvey: ko.Observable<Survey.Survey>;

  constructor(public creator: SurveyCreator) {
    this.hasDropdownSelector(creator.showDropdownPageSelector);
    this.koSurvey = ko.observable<Survey.Survey>(creator.survey);
    creator.onDesignerSurveyCreated.add((sender, options) => {
      this.koSurvey(options.survey);
    });
    this.pagesSelection = ko.computed<any>(() => {
      if (!this.blockPagesRebuilt()) {
        this.prevPagesForSelector = this.pages.map(p => { return { value: p, text: this.getDisplayText(p) } });
        if (!this.readOnly) {
          this.prevPagesForSelector = this.prevPagesForSelector.concat([
            <any>{ value: null, text: getLocString("ed.addNewPage") },
          ]);
        }
      }
      return this.prevPagesForSelector;
    });
    this._selectedPage(this.pages[0]);
    this.selectionSubscription = this.creator.koSelectedObject.subscribe(
      (newVal) => {
        if (!this.isActive()) {
          if (
            !!creator.survey.currentPage &&
            creator.survey.currentPage != this._selectedPage()
          ) {
            this._selectedPage(creator.survey.currentPage);
          }
          return;
        }
        this._selectedPage(newVal.value);
      }
    );
    this.addPageSelectorIntoToolbar();
  }
  public get pages() {
    return this.koSurvey().pages;
  }
  getDisplayText = (page: Survey.PageModel) => {
    return this.creator.getObjectDisplayName(page);
  };

  public blockPagesRebuilt = ko.observable(false);

  public pagesSelection: ko.Computed<any[]>;
  public pageSelection = ko.computed<Survey.PageModel>({
    read: () => this._selectedPage(),
    write: (newVal) => {
      if (!!newVal && typeof newVal.getType === "function") {
        this.selectedPage = newVal;
      } else {
        if (this.pages.length > 0) {
          this.addPage();
        }
      }
    },
  });

  addPageSelectorIntoToolbar() {
    const item = {
      id: "svd-toolbar-page-selector",
      component: "svd-dropdown",
      visible: this.creator.showPageSelectorInToolbar,
      enabled: true,
      data: this,
      title: "",
      items: this.pagesSelection,
      action: this.pageSelection
    };
    this.creator.toolbarItems.unshift(<any>item);
  }

  addPage = () => {
    this.creator.addPage();
  };

  copyPage = (page: Survey.PageModel) => {
    this.creator.copyPage(page);
  };

  deletePage = () => {
    this.creator.deletePage();
  };

  showPageSettings(page: Survey.PageModel) {
    this.creator.showQuestionEditor(page);
  }

  get selectedPage() {
    return this._selectedPage();
  }
  set selectedPage(newPage) {
    this.selectPage(newPage);
  }
  selectPage = (page) => {
    this.creator.selectPage(page);
  };
  showActions = (page) => {
    return page === this.selectedPage && this.isActive();
  };
  isLastPage() {
    return this.pages.length === 1;
  }
  isActive() {
    var selectedObject = this.creator.koSelectedObject();
    if (!selectedObject) return;
    return SurveyHelper.getObjectType(selectedObject.value) === ObjType.Page;
  }
  /**
   * A boolean property, false by default. Set it to true to deny pages editing.
   */
  public get readOnly() {
    return (
      this.creator.readOnly ||
      !this.creator.allowModifyPages ||
      this._readOnly()
    );
  }
  public set readOnly(newVal) {
    this._readOnly(newVal);
  }
  public hasDropdownSelector = ko.observable(true);

  dispose() {
    this.selectionSubscription.dispose();
    this.selectionSubscription = undefined;
    this.pagesSelection.dispose();
  }
}
