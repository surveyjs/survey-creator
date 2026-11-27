import {
  ItemValue, LocalizableString, MatrixDropdownColumn, PageModel, PanelModel, PanelModelBase, Question,
  QuestionCommentModel, QuestionMatrixDropdownModel, Serializer, SurveyModel, ILocalizableString, Helpers,
  settings as surveySettings
} from "survey-core";
import { editorLocalization } from "../../editorLocalization";
import { setSurveyJSONForPropertyGrid } from "../../property-grid/index";
import { translationCss } from "./translation-theme";
import { TranslationGroup, TranslationItem } from "./translation-base";

// The strings survey of the translation tab, in both modes, and of its dialogs: a one-row matrix per
// string, with the locale columns. The table builds it, fills the values, handles the cell editing
// (placeholders, the write path) and keeps the page groups collapsible. The layouts:
// - "pages" (the tab in both modes, the machine-translation dialog, the "Untranslated strings"
//   dialog): a collapsible group per page, its description is "{translated}/{total}" when the table
//   has a single target language; two html columns go before the locale columns: Question (the
//   element name, in the first row of the element only - a matrix has no rowspan, see
//   onUpdateMatrixCellCss) and String;
// - "element" (the element strings dialog): the rows of a single element, no groups and no Question
//   column. The rows of nested elements keep their place and the group path in the String column.
// The owner (TranslationBase) keeps the translation tree, the locales and the writes.

export const translationTableQuestionColumnName = "svc-translation-question";
export const translationTableStringColumnName = "svc-translation-string";
// The class of the table survey's root: the table styles in translation.scss are scoped to it.
export const translationTableRootCss = "st-translation-table";
const questionColumnWidth = "130px";
const stringColumnWidth = "200px";

// The locale columns of the table and their roles, given by the owner (TranslationBase.getTableLocales).
export interface ITranslationTableLocales {
  // The locales of the locale columns, in their order ("" is the default locale).
  columns: Array<string>;
  // The locale the targets are translated from: the Source column when it is shown, and the text an
  // empty Target cell shows, muted - also when its column is not shown.
  source: string;
  // The locales of the Target columns; every other locale column is the Source one. The side-by-side
  // models give one target or none, the multiple-languages tab every shown locale but the default one.
  targets: Array<string>;
}

export interface ITranslationTableOptions {
  // "pages" by default, see the layouts above.
  layout?: "pages" | "element";
  // Only the items it accepts get a row. The group counts are counted over the rows.
  filter?: (item: TranslationItem) => boolean;
  // The rows are taken once, when the table is built for the first time: an item that stops passing
  // the filter after an edit keeps its row. Without it, such a row is dropped right after the edit.
  freezeRows?: boolean;
  // The Source column is plain text (an html cell): it is not focusable and Tab skips it.
  sourceReadOnly?: boolean;
}

// What the table needs from the translation model it shows (TranslationBase implements it).
export interface ITranslationTableOwner {
  readonly survey: SurveyModel;
  getTableLocales(): ITranslationTableLocales;
  getLocaleColumnName(locale: string): string;
  // The text of the string in a target locale, the one the group count measures.
  getTargetText(item: TranslationItem, locale: string): string;
  getLocaleName(locale: string): string;
  createTabSurvey(json: any, reason: string, onCreating: (survey: SurveyModel) => void, area?: string): SurveyModel;
  getStringsCellPlaceholder(item: TranslationItem, columnName: string): string;
  getProcessedTranslationItemText(locale: string, locString: ILocalizableString, newText: string, context: any): string;
  setItemLocText(item: TranslationItem, locale: string, text: string): void;
}

interface ITranslationTableRow {
  item: TranslationItem;
  matrixName: string;
  // The String column: the item text prefixed with the path of the groups below its element.
  text?: string;
  elementName?: string;
  elementObj?: any;
  isElementFirst?: boolean;
  isElementLast?: boolean;
  isGroupFirst?: boolean;
  isGroupLast?: boolean;
}
interface ITranslationTableGroup {
  // The page name; "" for the single group of the element layout and of a survey without pages.
  name: string;
  title: string;
  rows: Array<ITranslationTableRow>;
  panel?: PanelModel;
}

const groupPanelNamePrefix = "svc-translation-group-";

// A locale column of the string matrices, worked out from the owner's locales once for a group's rows
// (and once for a column update), not for each matrix.
interface ITranslationTableLocaleColumn {
  name: string;
  locale: string;
  isSource: boolean;
  // The header title of the design: "Source: English", "Target: Deutsch".
  title: string;
}

function escapeHtml(text: string): string {
  return (text || "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\n/g, "<br>");
}
function isElementObj(obj: any): boolean {
  return !!obj && (obj.isPage || obj.isPanel || obj.isQuestion);
}

export class TranslationTable {
  private surveyValue: SurveyModel;
  private groups: Array<ITranslationTableGroup> = [];
  private rowsByMatrixName: { [name: string]: ITranslationTableRow } = {};
  // The matrices whose cells exist: survey-core creates them when a matrix is rendered, so the
  // matrices of a collapsed page have none until it is expanded (see updateCells).
  private matricesWithCells: Set<string> = new Set<string>();
  // The strings the frozen rows were taken for, by the real localizable string: a reset rebuilds
  // the translation tree, so the items are new objects then.
  private frozenLocStrings: Set<any>;
  private pendingScrollPageName: string;

  constructor(private owner: ITranslationTableOwner, private options: ITranslationTableOptions = {}) { }

  public get survey(): SurveyModel {
    return this.surveyValue;
  }
  public get layout(): "pages" | "element" {
    return this.options.layout || "pages";
  }
  // Builds the table survey over the tree. afterFill runs once the rows are in, still inside the
  // survey creation (the instance-created event sees the filled table).
  public createSurvey(root: TranslationGroup, afterFill?: (survey: SurveyModel) => void, area?: string,
    reason: string = "translation_strings"): SurveyModel {
    // widthMode is fixed to what "auto" resolves to here (every strings-grid matrix needs a responsive
    // width): with "auto", endLoadingFromJson computes it by reading every element of the grid under a
    // dependency collector, which takes most of the build time on a large survey.
    const json = { autoGrowComment: true, allowResizeComment: false, widthMode: "responsive" };
    setSurveyJSONForPropertyGrid(json, false);
    const survey = this.owner.createTabSurvey(json, reason, (survey: SurveyModel): void => {
      survey.lazyRenderEnabled = true;
      survey.skeletonComponentName = "sd-translation-line-skeleton";
      survey.startLoadingFromJson();
      survey.css = translationCss;
      survey.addNewPage("page");
      this.builtPagePanels = [];
      this.setupSurvey(survey, root);
      if (!!afterFill) afterFill(survey);
      this.expandFirstPageIfNone();
      this.builtPagePanels = undefined;
      survey.data = this.getSurveyData();
      survey.endLoadingFromJson();
    }, area);
    survey.currentPage = survey.pages[0];
    return survey;
  }
  private setupSurvey(survey: SurveyModel, root: TranslationGroup): void {
    this.detachSurvey();
    this.surveyValue = survey;
    survey.css.root += " " + translationTableRootCss + " " + translationTableRootCss + "--" + this.layout;
    survey.onMatrixCellCreated.add(this.onMatrixCellCreated);
    survey.onMatrixCellValueChanging.add(this.onMatrixCellValueChanging);
    survey.onMatrixCellValueChanged.add(this.onMatrixCellValueChanged);
    survey.onUpdateMatrixCellCss.add(this.onUpdateMatrixCellCss);
    survey.onUpdatePanelCssClasses.add(this.onUpdatePanelCssClasses);
    survey.onUpdateQuestionCssClasses.add(this.onUpdateQuestionCssClasses);
    survey.onAfterRenderSurvey.add(this.onAfterRenderSurvey);
    this.groups = this.createGroups(root);
    this.groups.forEach(group => this.addGroup(survey.pages[0], group));
    this.freezeRows();
  }
  public dispose(): void {
    this.detachSurvey();
  }
  private detachSurvey(): void {
    const survey = this.surveyValue;
    if (!survey) return;
    this.matricesWithCells.clear();
    survey.onMatrixCellCreated.remove(this.onMatrixCellCreated);
    survey.onMatrixCellValueChanging.remove(this.onMatrixCellValueChanging);
    survey.onMatrixCellValueChanged.remove(this.onMatrixCellValueChanged);
    survey.onUpdateMatrixCellCss.remove(this.onUpdateMatrixCellCss);
    survey.onUpdatePanelCssClasses.remove(this.onUpdatePanelCssClasses);
    survey.onUpdateQuestionCssClasses.remove(this.onUpdateQuestionCssClasses);
    survey.onAfterRenderSurvey.remove(this.onAfterRenderSurvey);
    this.pendingScrollPageName = undefined;
    this.surveyValue = undefined;
    this.groups = [];
    this.rowsByMatrixName = {};
  }

  // --- the matrices ----------------------------------------------------------------------------

  // The one-row matrix of a string, with the locale columns.
  private addStringsMatrix(container: PanelModelBase, row: ITranslationTableRow): QuestionMatrixDropdownModel {
    this.rowsByMatrixName[row.matrixName] = row;
    const matrix = <QuestionMatrixDropdownModel>Serializer.createClass("matrixdropdown");
    matrix.cellType = "comment";
    matrix.titleLocation = "hidden";
    matrix.name = row.matrixName;
    matrix.showHeader = false;
    container.addQuestion(matrix);
    // The row title is hidden, but it is the cells' accessible name: the String column's text, with the
    // group path ("col1: Choices: A"), in the layouts that have one.
    const itemValue = new ItemValue(row.item.name, row.text || row.item.text);
    itemValue["translationData"] = row.item;
    matrix.rows.push(itemValue);
    return matrix;
  }
  private getMatrixData(matrix: QuestionMatrixDropdownModel): any {
    const res = {};
    matrix.rows.forEach(itemValue => {
      const item: TranslationItem = itemValue["translationData"];
      const value = item.toJSON();
      if (!Helpers.isValueEmpty(value)) {
        res[itemValue.value] = value;
      }
    });
    return res;
  }
  // The values of the string matrices. The values of the other questions an owner adds to the survey
  // (the filter of the element strings dialog) are kept: the result replaces the whole survey data.
  private getSurveyData(): any {
    const res = {};
    this.surveyValue.getAllQuestions().forEach((question: Question) => {
      if (!!this.rowsByMatrixName[question.name]) {
        res[question.name] = this.getMatrixData(<QuestionMatrixDropdownModel>question);
      } else if (!question.isEmpty()) {
        res[question.getValueName()] = question.value;
      }
    });
    return res;
  }
  // The matrix values follow the real survey's strings (the owner calls it after they changed).
  public updateData(): void {
    const survey = this.surveyValue;
    if (!survey) return;
    survey.data = this.getSurveyData();
    this.updateCells();
  }

  // --- the rows of the "pages" and "element" layouts -------------------------------------------

  private createGroups(root: TranslationGroup): Array<ITranslationTableGroup> {
    if (!root) return [];
    if (this.layout === "element") {
      const rows: Array<ITranslationTableRow> = [];
      this.addElementRows(root, "", rows);
      return [{ name: "", title: "", rows: this.filterRows(rows) }];
    }
    const res: Array<ITranslationTableGroup> = [];
    const rootObj = root.obj;
    if (!!rootObj && rootObj.isPage) {
      const rows: Array<ITranslationTableRow> = [];
      this.addElementRows(root, rootObj.name, rows);
      this.pushGroup(res, rootObj.name, rootObj.title || rootObj.name, rows);
      return res;
    }
    // Rooted on the survey: the survey's own strings (and its non-page groups - completedHtmlOnCondition,
    // triggers, ...) open the first page group, under "survey" in the Question column.
    const surveyRows: Array<ITranslationTableRow> = [];
    const pageGroups: Array<TranslationGroup> = [];
    this.addElementRows(root, root.name, surveyRows, pageGroups);
    const pages: Array<PageModel> = !!rootObj && Array.isArray(rootObj.pages) ? rootObj.pages : [];
    pages.forEach((page, index) => {
      const rows: Array<ITranslationTableRow> = index === 0 ? surveyRows.slice() : [];
      const pageGroup = pageGroups.filter(group => group.obj === page)[0];
      if (!!pageGroup)this.addElementRows(pageGroup, page.name, rows);
      this.pushGroup(res, page.name, page.title || page.name, rows);
    });
    // A survey without pages yet (a title only) still lists its own strings.
    if (pages.length === 0) {
      this.pushGroup(res, "", (!!rootObj && rootObj.title) || editorLocalization.getString("ed.surveyTypeName"), surveyRows);
    }
    return res;
  }
  private pushGroup(groups: Array<ITranslationTableGroup>, name: string, title: string, rows: Array<ITranslationTableRow>): void {
    rows = this.filterRows(rows);
    if (rows.length === 0) return;
    groups.push({ name: name, title: title, rows: rows });
  }
  // The rows of an element: its own strings and those of its non-element groups (choices, columns,
  // validators, ...), then the nested elements, each a section of its own. Pages are collected
  // instead when pageGroups is passed (the survey root).
  private addElementRows(group: TranslationGroup, elementName: string, rows: Array<ITranslationTableRow>,
    pageGroups?: Array<TranslationGroup>): void {
    const nested: Array<TranslationGroup> = [];
    // The "element" layout has no Question column: a nested element is walked in place, its name
    // becomes a part of the path, as for any other group.
    const isElementLayout = this.layout === "element";
    const walk = (current: TranslationGroup, path: string): void => {
      current.items.forEach((child, index) => {
        if (child.isGroup) return;
        const item = <TranslationItem>child;
        rows.push({
          item: item, matrixName: current.fullName + index, text: (!!path ? path + ": " : "") + item.text,
          elementName: elementName, elementObj: group.obj
        });
      });
      current.groups.forEach(child => {
        const obj = child.obj;
        if (!!pageGroups && !!obj && obj.isPage) {
          pageGroups.push(child);
        } else if (isElementObj(obj) && !isElementLayout) {
          nested.push(child);
        } else {
          walk(child, (!!path ? path + ": " : "") + child.text);
        }
      });
    };
    walk(group, "");
    nested.forEach(child => this.addElementRows(child, child.obj.name, rows));
  }
  private filterRows(rows: Array<ITranslationTableRow>): Array<ITranslationTableRow> {
    const filter = this.options.filter;
    let res = rows;
    if (!!this.frozenLocStrings) {
      res = rows.filter(row => this.frozenLocStrings.has(row.item.locString));
    } else if (!!filter) {
      res = rows.filter(row => filter(row.item));
    }
    this.markRows(res);
    return res;
  }
  // Freezes the rows of the first build (see the freezeRows option).
  private freezeRows(): void {
    if (!this.options.freezeRows || !!this.frozenLocStrings) return;
    const set = new Set<any>();
    this.groups.forEach(group => group.rows.forEach(row => set.add(row.item.locString)));
    this.frozenLocStrings = set;
  }
  private markRows(rows: Array<ITranslationTableRow>): void {
    rows.forEach((row, index) => {
      const prev = rows[index - 1];
      const next = rows[index + 1];
      row.isElementFirst = !prev || prev.elementObj !== row.elementObj;
      row.isElementLast = !next || next.elementObj !== row.elementObj;
      row.isGroupFirst = !prev;
      row.isGroupLast = !next;
    });
  }

  // --- the groups of the "pages" and "element" layouts -----------------------------------------

  // Builds the rows over another tree in the same survey: a shown dialog keeps rendering the survey it
  // was opened with (the used/all strings switch of the element strings dialog). The "element" layout
  // only: its rows are the only elements it adds, so the questions of the owner stay.
  public refill(root: TranslationGroup): void {
    const survey = this.surveyValue;
    if (!survey || this.layout !== "element") return;
    this.groups.forEach(group => this.clearGroupRows(group));
    this.groups = this.createGroups(root);
    this.groups.forEach(group => this.addGroup(survey.pages[0], group));
  }
  private addGroup(page: PageModel, group: ITranslationTableGroup): void {
    if (this.layout === "element") {
      this.addRowMatrices(page, group);
      return;
    }
    const panel = <PanelModel>Serializer.createClass("panel");
    panel.name = groupPanelNamePrefix + group.name;
    page.addElement(panel);
    // A text of its own, not processed by the table survey (a page title can hold placeholders).
    panel.locTitle.onGetTextCallback = (): string => group.title;
    panel.title = group.title;
    group.panel = panel;
    this.setupPagePanel(panel, group.name);
    this.addRowMatrices(panel, group);
    this.updateGroupCount(group);
  }
  private clearGroupRows(group: ITranslationTableGroup): void {
    const container: PanelModelBase = group.panel || (!!this.surveyValue ? this.surveyValue.pages[0] : undefined);
    if (!container) return;
    [].concat(container.elements).forEach((el: any) => {
      if (!!group.panel || !!this.rowsByMatrixName[el.name]) {
        container.removeElement(el);
        delete this.rowsByMatrixName[el.name];
        this.matricesWithCells.delete(el.name);
        el.dispose();
      }
    });
  }
  private addRowMatrices(container: PanelModelBase, group: ITranslationTableGroup): void {
    const localeColumns = this.getLocaleColumns();
    group.rows.forEach(row => {
      const matrix = this.addStringsMatrix(container, row);
      // The header row of the group is the header of its first row's table.
      matrix.showHeader = !!row.isGroupFirst;
      this.addColumns(matrix, localeColumns);
      // Rows added after the survey was built (a live filter took a row away) get their values here.
      if (!this.surveyValue.isLoadingFromJson) matrix.value = this.getMatrixData(matrix);
    });
  }
  public get pageNames(): Array<string> {
    return this.groups.map(group => group.name);
  }
  private getGroup(pageName: string): ITranslationTableGroup {
    return this.groups.filter(group => group.name === pageName)[0];
  }
  public getGroupPanel(pageName: string): PanelModel {
    const group = this.getGroup(pageName);
    return !!group ? group.panel : undefined;
  }
  public isGroupExpanded(pageName: string): boolean {
    const panel = this.getGroupPanel(pageName);
    return !!panel && panel.state !== "collapsed";
  }
  public expandGroup(pageName: string): void {
    const panel = this.getGroupPanel(pageName);
    if (!!panel) panel.expand();
  }
  public collapseGroup(pageName: string): void {
    const panel = this.getGroupPanel(pageName);
    if (!!panel) panel.collapse();
  }
  // The "{translated}/{total}" of a group's rows, rendered as the panel description next to the title.
  public getGroupCountText(pageName: string): string {
    const group = this.getGroup(pageName);
    return !!group && !!group.panel ? group.panel.description : "";
  }
  // The locale the counts measure: the single target when the table shows exactly two languages, the
  // source and one target (or the target alone, when it is the source language too). Undefined when
  // there is no target, more than one, or no Source column (the default locale hidden in the
  // multiple-languages tab).
  private getCountLocale(): string {
    const locales = this.owner.getTableLocales();
    if (locales.targets.length !== 1 || locales.columns.indexOf(locales.source) < 0) return undefined;
    return locales.targets[0];
  }
  private updateGroupCount(group: ITranslationTableGroup, countLocale: string = this.getCountLocale()): void {
    if (!group.panel) return;
    if (countLocale === undefined) {
      group.panel.description = "";
      return;
    }
    const translated = group.rows.filter(row => !!this.owner.getTargetText(row.item, countLocale)).length;
    group.panel.description = translated + "/" + group.rows.length;
  }
  public updateCounts(): void {
    const countLocale = this.getCountLocale();
    this.groups.forEach(group => this.updateGroupCount(group, countLocale));
  }
  // Scrolls the group into the view, at once or once the table survey is rendered (it is rebuilt on
  // a reset, so the request usually comes first). survey-core's scrollElementToTop renders the lazy
  // elements on its way.
  public scrollGroupIntoView(pageName: string): void {
    const panel = this.getGroupPanel(pageName);
    if (!panel) return;
    const survey = this.surveyValue;
    if (!!survey && !!survey.rootElement) {
      this.pendingScrollPageName = undefined;
      survey.scrollElementToTop(panel, undefined, undefined, panel.id);
      return;
    }
    this.pendingScrollPageName = pageName;
  }
  public get pendingScrollGroupName(): string {
    return this.pendingScrollPageName;
  }
  // The survey's root element is assigned after this event, so it is passed to the scroll.
  private onAfterRenderSurvey = (_: SurveyModel, options: any): void => {
    const pageName = this.pendingScrollPageName;
    const panel = !!pageName ? this.getGroupPanel(pageName) : undefined;
    this.pendingScrollPageName = undefined;
    const survey = this.surveyValue;
    if (!!panel && !!survey) survey.scrollElementToTop(panel, undefined, undefined, panel.id, false, undefined, options.htmlElement);
  };

  // --- page collapse ---------------------------------------------------------------------------

  // The page groups of the "pages" layout collapse.
  // survey-core does not render the content of a collapsed panel, but its string matrices are built
  // (see TranslationBase.canShowAllPages). The expanded state is kept by page name, so it outlives the
  // table survey (rebuilt on every reset); a new survey drops it (resetPageState). A fresh state
  // expands the first page only.
  private expandedPages: { [pageName: string]: boolean };
  // Whether a page panel was expanded or collapsed since the state was created.
  private isExpandedPagesTouched: boolean = false;
  // The page the owner was scoped to at the last reset: choosing a page in the dropdown expands it.
  private lastFilteredPage: PageModel;
  // The page panels of the survey being built (see expandFirstPageIfNone).
  private builtPagePanels: Array<{ pageName: string, panel: PanelModel }>;
  private getExpandedPages(): { [pageName: string]: boolean } {
    if (!this.expandedPages) {
      this.expandedPages = {};
      const pages = !!this.owner.survey ? this.owner.survey.pages : [];
      if (pages.length > 0)this.expandedPages[pages[0].name] = true;
    }
    return this.expandedPages;
  }
  public isPageExpanded(pageName: string): boolean {
    return !!this.getExpandedPages()[pageName];
  }
  // Expands the page on the next build; with no state yet, it is the only expanded page.
  public markPageExpanded(pageName: string): void {
    if (!this.expandedPages)this.expandedPages = {};
    this.expandedPages[pageName] = true;
  }
  // The owner calls it on every reset, with the page it is scoped to.
  public updateFilteredPage(filteredPage: PageModel): void {
    if (!!filteredPage && filteredPage !== this.lastFilteredPage) {
      this.getExpandedPages()[filteredPage.name] = true;
    }
    this.lastFilteredPage = filteredPage;
  }
  public resetPageState(): void {
    this.expandedPages = undefined;
    this.isExpandedPagesTouched = false;
    this.lastFilteredPage = undefined;
  }
  private setupPagePanel(panel: PanelModel, pageName: string): void {
    // survey-core draws a plus/minus here; the design has the creator's chevron, down when collapsed.
    Object.defineProperty(panel, "titleExpandableSvgIconName", {
      get: (): string => panel.isExpanded ? "icon-chevronup-24x24" : "icon-chevrondown-24x24",
      configurable: true
    });
    panel.state = this.isPageExpanded(pageName) ? "expanded" : "collapsed";
    panel.registerFunctionOnPropertyValueChanged("state", () => {
      this.getExpandedPages()[pageName] = !panel.isCollapsed;
      this.isExpandedPagesTouched = true;
    });
    if (!!this.builtPagePanels)this.builtPagePanels.push({ pageName: pageName, panel: panel });
  }
  // The state names no page with a panel (a page without strings): the first panel is expanded,
  // until a panel has been expanded or collapsed by hand. survey-core runs no property callbacks
  // while the survey is being built, so the state is written here.
  private expandFirstPageIfNone(): void {
    const panels = this.builtPagePanels;
    if (this.isExpandedPagesTouched || !panels || panels.length === 0 || panels.some(info => !info.panel.isCollapsed)) return;
    panels[0].panel.expand();
    this.getExpandedPages()[panels[0].pageName] = true;
  }

  // --- columns and cells -----------------------------------------------------------------------

  // The owner's locale columns with their roles (see ITranslationTableLocales) and titles.
  private getLocaleColumns(): Array<ITranslationTableLocaleColumn> {
    const locales = this.owner.getTableLocales();
    const sourceTitle = editorLocalization.getString("ed.translationSource");
    const targetTitle = editorLocalization.getString("ed.translationTarget");
    return locales.columns.map(locale => {
      const isSource = locales.targets.indexOf(locale) < 0;
      const title = (isSource ? sourceTitle : targetTitle) + this.owner.getLocaleName(locale);
      return { name: this.owner.getLocaleColumnName(locale), locale: locale, isSource: isSource, title: title };
    });
  }
  // The Question and String columns, then the locale columns.
  private addColumns(matrix: QuestionMatrixDropdownModel, localeColumns: Array<ITranslationTableLocaleColumn>): void {
    if (this.layout === "pages") {
      matrix.columns.push(this.createTextColumn(translationTableQuestionColumnName, "ed.translationColumnQuestion", questionColumnWidth));
    }
    matrix.columns.push(this.createTextColumn(translationTableStringColumnName, "ed.translationColumnString", stringColumnWidth));
    localeColumns.forEach(info => {
      const column = matrix.addColumn(info.name, info.title);
      column["translationIsSource"] = info.isSource;
      column["translationLocale"] = info.locale;
      if (info.isSource && this.options.sourceReadOnly) column.cellType = "html";
    });
  }
  private createTextColumn(name: string, titleName: string, width: string): MatrixDropdownColumn {
    // A column without a matrix builds its template question for settings.matrix.defaultCellType
    // ("dropdown", with all of its properties), then a second one for "html". Every string matrix gets
    // two such columns, so the default is "html" while the column is created: one template only.
    const defaultCellType = surveySettings.matrix.defaultCellType;
    surveySettings.matrix.defaultCellType = "html";
    let column: MatrixDropdownColumn;
    try {
      column = new MatrixDropdownColumn(name);
    } finally {
      surveySettings.matrix.defaultCellType = defaultCellType;
    }
    column.title = editorLocalization.getString(titleName);
    column.cellType = "html";
    column.width = width;
    return column;
  }
  // The columns and the counts follow the languages (the owner calls it when they change).
  public updateColumns(): void {
    const localeColumns = this.getLocaleColumns();
    this.forEachMatrix(matrix => {
      matrix.beginUpdate();
      matrix.columns = [];
      this.addColumns(matrix, localeColumns);
      matrix.endUpdate();
    });
    this.updateCounts();
  }
  // The texts the cells show besides the matrix values (the html cells and the placeholders), and
  // the counts: updateData calls it after the values are updated. Cells created later get their
  // texts in onMatrixCellCreated, so the matrices without cells are left alone: reading their rows
  // would create the cells of every collapsed group.
  public updateCells(): void {
    this.forEachMatrix((matrix, row) => {
      if (!this.matricesWithCells.has(matrix.name)) return;
      matrix.visibleRows[0].cells.forEach(cell => {
        const cellQuestion = cell.question;
        if (cellQuestion instanceof QuestionCommentModel) {
          cellQuestion.placeholder = this.owner.getStringsCellPlaceholder(row.item, cell.column.name);
        } else {
          this.updateHtmlCell(cellQuestion, <MatrixDropdownColumn>cell.column, row);
        }
      });
    });
    this.updateCounts();
  }
  private forEachMatrix(fn: (matrix: QuestionMatrixDropdownModel, row: ITranslationTableRow) => void): void {
    const survey = this.surveyValue;
    if (!survey) return;
    survey.getAllQuestions().forEach((question: Question) => {
      const row = this.rowsByMatrixName[question.name];
      if (!!row) fn(<QuestionMatrixDropdownModel>question, row);
    });
  }
  private getRowByMatrix(matrix: any): ITranslationTableRow {
    return !!matrix ? this.rowsByMatrixName[matrix.name] : undefined;
  }
  private updateHtmlCell(cellQuestion: Question, column: MatrixDropdownColumn, row: ITranslationTableRow): void {
    let text: string;
    if (column.name === translationTableQuestionColumnName) {
      text = row.isElementFirst ? row.elementName : "";
    } else if (column.name === translationTableStringColumnName) {
      text = row.text;
    } else {
      // A read-only Source cell has no placeholder: a string that stores no text of its own (a choice
      // shown by its value, a question by its name) shows the text it is displayed by instead.
      const locale = column["translationLocale"];
      text = row.item.getSourceText(locale) || row.item.getTextToTranslateFrom(locale);
    }
    (<any>cellQuestion).html = escapeHtml(text);
  }
  private setupCommentCell(cellQuestion: QuestionCommentModel, item: TranslationItem, columnName: string): void {
    cellQuestion.placeholder = this.owner.getStringsCellPlaceholder(item, columnName);
    cellQuestion.maxLength = item.maxLength;
    const loc = item.locString;
    const isMultiLine = loc.getIsMultiple();
    cellQuestion.acceptCarriageReturn = isMultiLine || (<LocalizableString>loc).allowLineBreaks;
    if (!isMultiLine) {
      cellQuestion.rows = 1;
    }
  }
  private onMatrixCellCreated = (_: SurveyModel, options: any): void => {
    const row = this.getRowByMatrix(options.question);
    if (!row) return;
    this.matricesWithCells.add(options.question.name);
    const cellQuestion = <Question>options.cellQuestion;
    if (cellQuestion instanceof QuestionCommentModel) {
      this.setupCommentCell(cellQuestion, row.item, options.columnName);
      return;
    }
    if (cellQuestion.getType() !== "html") return;
    // The texts are shown as they are: the table survey must not process the "{...}" they can hold.
    (<any>cellQuestion).ignoreHtmlProgressing = true;
    this.updateHtmlCell(cellQuestion, options.column, row);
  };
  private onMatrixCellValueChanging = (_: SurveyModel, options: any): void => {
    const row = this.getRowByMatrix(options.question);
    if (!row) return;
    options.value = this.owner.getProcessedTranslationItemText(options.columnName, row.item.locString, options.value, row.item.context);
  };
  private onMatrixCellValueChanged = (_: SurveyModel, options: any): void => {
    const row = this.getRowByMatrix(options.question);
    if (!row) return;
    this.owner.setItemLocText(row.item, options.columnName, options.value);
    // An edit can change what the other cells of the row show as their placeholder.
    options.row.cells.forEach(cell => {
      if (cell.question instanceof QuestionCommentModel) {
        cell.question.placeholder = this.owner.getStringsCellPlaceholder(row.item, cell.column.name);
      }
    });
    this.onCellValueChanged(row);
  };
  // A cell edit moves the count of its group and, with a live filter, can take the row away.
  private onCellValueChanged(row: ITranslationTableRow): void {
    const group = this.groups.filter(gr => gr.rows.indexOf(row) > -1)[0];
    if (!group) return;
    if (!!this.options.filter && !this.frozenLocStrings && !this.options.filter(row.item)) {
      group.rows = group.rows.filter(r => r !== row);
      this.markRows(group.rows);
      this.clearGroupRows(group);
      this.addRowMatrices(group.panel || this.surveyValue.pages[0], group);
    }
    this.updateGroupCount(group);
  }
  // Classes of the data cells: the column, the emulated Question span (no bottom border inside an
  // element's rows) and the last row of a group (the group's own border closes the table).
  private onUpdateMatrixCellCss = (_: SurveyModel, options: any): void => {
    const row = this.getRowByMatrix(options.question);
    if (!row || !options.column) return;
    const name = options.column.name;
    let css = "st-translation-table__cell";
    if (name === translationTableQuestionColumnName) {
      css += " st-translation-table__cell--question";
      if (!row.isElementLast) css += " st-translation-table__cell--span";
    } else if (name === translationTableStringColumnName) {
      css += " st-translation-table__cell--string";
    } else {
      css += options.column["translationIsSource"] ? " st-translation-table__cell--source" : " st-translation-table__cell--target";
    }
    if (row.isGroupLast) css += " st-translation-table__cell--last";
    options.css = (options.css || "") + " " + css;
  };
  // The "element" layout has no group panel to draw the table border: the first and the last string
  // matrix close it (see translation.scss).
  private onUpdateQuestionCssClasses = (_: SurveyModel, options: any): void => {
    if (this.layout !== "element") return;
    const row = this.getRowByMatrix(options.question);
    if (!row) return;
    let css = " st-translation-table__row";
    if (row.isGroupFirst) css += " st-translation-table__row--first";
    if (row.isGroupLast) css += " st-translation-table__row--last";
    options.cssClasses.mainRoot += css;
  };
  private onUpdatePanelCssClasses = (_: SurveyModel, options: any): void => {
    if ((options.panel.name || "").indexOf(groupPanelNamePrefix) !== 0) return;
    options.cssClasses.panel.container += " st-translation-group";
  };
  public get rowItems(): Array<TranslationItem> {
    const res: Array<TranslationItem> = [];
    this.groups.forEach(group => group.rows.forEach(row => res.push(row.item)));
    return res;
  }
  public getGroupItems(pageName: string): Array<TranslationItem> {
    const group = this.getGroup(pageName);
    return !!group ? group.rows.map(row => row.item) : [];
  }
  // The string a cell of the table survey edits (the question is the cell's).
  public getCellItem(cellQuestion: Question): TranslationItem {
    const row = !!cellQuestion ? this.getRowByMatrix(cellQuestion.parentQuestion) : undefined;
    return !!row ? row.item : undefined;
  }
  // The question of the string's first Target cell, or of its last cell when the table has no target
  // (the Source column alone). Resolved by the localizable string, not by the item: an item of another
  // tree (the used-strings tree) is not the item the rows carry. Reading it creates the row's cells.
  public getTargetCellQuestion(locStr: ILocalizableString): Question {
    let res: Question;
    this.forEachMatrix((matrix, row) => {
      if (!!res || row.item.locString !== locStr) return;
      const cells = matrix.visibleRows[0].cells;
      const target = cells.filter(cell => cell.column["translationIsSource"] === false)[0];
      res = (target || cells[cells.length - 1]).question;
    });
    return res;
  }
  public focusCell(locStr: ILocalizableString): void {
    const question = this.getTargetCellQuestion(locStr);
    if (!!question) question.focus();
  }
}
