import {
  ItemValue, LocalizableString, MatrixDropdownColumn, PageModel, PanelModel, PanelModelBase, Question,
  QuestionCommentModel, QuestionMatrixDropdownModel, Serializer, SurveyModel, ILocalizableString, Helpers
} from "survey-core";
import { editorLocalization } from "../../editorLocalization";
import { setSurveyJSONForPropertyGrid } from "../../property-grid/index";
import { translationCss } from "./translation-theme";
import { TranslationGroup, TranslationItem } from "./translation-base";

// The strings survey of the translation tab: a one-row matrix per string, with the locale columns.
// The table builds it, fills the values, handles the cell editing (placeholders, the write path) and
// keeps the page panels collapsible. It also builds the header survey above it: a matrix with the
// locale columns and no rows. The layouts:
// - "tree" (the standard mode): a nested panel per group of the translation tree, the page panels
//   collapse;
// - "pages" (the side-by-side grid view): a collapsible group per page, its description is
//   "{translated}/{total}"; two html columns go before the locale columns: Question (the element
//   name, in the first row of the element only - a matrix has no rowspan, see onUpdateMatrixCellCss)
//   and String;
// - "element" (the element strings dialog): the rows of a single element, no groups and no Question
//   column.
// The owner (TranslationBase) keeps the translation tree, the locales and the writes.

export const translationTableQuestionColumnName = "svc-translation-question";
export const translationTableStringColumnName = "svc-translation-string";
// The class of the table survey's root: the table styles in translation.scss are scoped to it.
export const translationTableRootCss = "st-translation-table";
// The matrix of the header survey.
export const translationHeaderMatrixName = "stringsHeader";
const questionColumnWidth = "130px";
const stringColumnWidth = "200px";

export interface ITranslationTableOptions {
  // "pages" by default, see the layouts above.
  layout?: "tree" | "pages" | "element";
  // Only the items it accepts get a row. The group counts are counted over the rows. Not used by
  // the "tree" layout.
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
  readonly sourceLocale: string;
  readonly targetLocale: string;
  readonly useSourceTargetColumns: boolean;
  createTabSurvey(json: any, reason: string, onCreating: (survey: SurveyModel) => void, area?: string): SurveyModel;
  addLocaleColumns(matrix: QuestionMatrixDropdownModel): void;
  getStringsCellPlaceholder(item: TranslationItem, columnName: string): string;
  getProcessedTranslationItemText(locale: string, locString: ILocalizableString, newText: string, context: any): string;
  setItemLocText(item: TranslationItem, locale: string, text: string): void;
}

interface ITranslationTableRow {
  item: TranslationItem;
  matrixName: string;
  // The String column: the item text prefixed with the path of the groups below its element.
  // The fields below are not used by the "tree" layout.
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

// The header titles of the source/target locale columns ("Source: English", "Target: Deutsch"):
// [Source, Target], or a single column - the target one when the locales are equal, the source one
// when there is no target language at all (hasTarget = false). Also used by the matrices outside the
// table: the side-by-side element strings dialog and the machine-translation dialog.
export function updateSourceTargetHeaderColumns(matrix: QuestionMatrixDropdownModel, sourceLoc: string, targetLoc: string, hasTarget: boolean = true): void {
  const getTitle = (strName: string, locale: string): string =>
    editorLocalization.getString("ed." + strName) + editorLocalization.getLocaleName(locale);
  const cols = matrix.columns;
  if (cols.length > 1) {
    cols[0].title = getTitle("translationSource", sourceLoc || "");
    cols[1].title = getTitle("translationTarget", targetLoc);
  } else {
    cols[0].title = hasTarget ? getTitle("translationTarget", targetLoc) : getTitle("translationSource", sourceLoc || "");
  }
}

function escapeHtml(text: string): string {
  return (text || "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\n/g, "<br>");
}
function isElementObj(obj: any): boolean {
  return !!obj && (obj.isPage || obj.isPanel || obj.isQuestion);
}

export class TranslationTable {
  private surveyValue: SurveyModel;
  private headerSurveyValue: SurveyModel;
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
  public get headerSurvey(): SurveyModel {
    return this.headerSurveyValue;
  }
  public get layout(): "tree" | "pages" | "element" {
    return this.options.layout || "pages";
  }
  private get isTree(): boolean {
    return this.layout === "tree";
  }
  // Builds the table survey over the tree. afterFill runs once the rows are in, still inside the
  // survey creation (the instance-created event sees the filled table).
  public createSurvey(root: TranslationGroup, afterFill?: (survey: SurveyModel) => void, area?: string): SurveyModel {
    // widthMode is fixed to what "auto" resolves to here (every strings-grid matrix needs a responsive
    // width): with "auto", endLoadingFromJson computes it by reading every element of the grid under a
    // dependency collector, which takes most of the build time on a large survey.
    const json = { autoGrowComment: true, allowResizeComment: false, widthMode: "responsive" };
    setSurveyJSONForPropertyGrid(json, false);
    const survey = this.owner.createTabSurvey(json, "translation_strings", (survey: SurveyModel): void => {
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
  // Builds the header survey. afterCreate runs inside the survey creation. The "pages" layout hides
  // it: its groups carry their own header rows, but the tab components still render the survey.
  public createHeaderSurvey(afterCreate?: (survey: SurveyModel) => void, area?: string): SurveyModel {
    const json = {};
    setSurveyJSONForPropertyGrid(json, false);
    return this.owner.createTabSurvey(json, "translation_strings_header", (survey: SurveyModel): void => {
      survey.css = translationCss;
      if (this.layout === "pages") survey.css.root += " st-translation-table-header";
      const matrix = <QuestionMatrixDropdownModel>Serializer.createClass("matrixdropdown");
      matrix.name = translationHeaderMatrixName;
      matrix.titleLocation = "hidden";
      this.addHeaderColumns(matrix);
      survey.addNewPage("page").addQuestion(matrix, 0);
      survey.currentPage = survey.pages[0];
      this.headerSurveyValue = survey;
      if (!!afterCreate) afterCreate(survey);
    }, area);
  }
  // The locale columns, titled "Source: ..." / "Target: ..." when the owner shows the source/target pair.
  private addHeaderColumns(matrix: QuestionMatrixDropdownModel): void {
    this.owner.addLocaleColumns(matrix);
    if (!this.owner.useSourceTargetColumns) return;
    const target = this.owner.targetLocale || "";
    updateSourceTargetHeaderColumns(matrix, this.owner.sourceLocale, target, !!target);
  }
  private setupSurvey(survey: SurveyModel, root: TranslationGroup): void {
    this.detachSurvey();
    this.surveyValue = survey;
    if (!this.isTree) {
      survey.css.root += " " + translationTableRootCss + " " + translationTableRootCss + "--" + this.layout;
    }
    survey.onMatrixCellCreated.add(this.onMatrixCellCreated);
    survey.onMatrixCellValueChanging.add(this.onMatrixCellValueChanging);
    survey.onMatrixCellValueChanged.add(this.onMatrixCellValueChanged);
    survey.onUpdateMatrixCellCss.add(this.onUpdateMatrixCellCss);
    survey.onUpdatePanelCssClasses.add(this.onUpdatePanelCssClasses);
    survey.onAfterRenderSurvey.add(this.onAfterRenderSurvey);
    if (this.isTree) {
      if (!!root)this.addTreeGroup(survey.pages[0], root);
      return;
    }
    this.groups = this.createGroups(root);
    this.groups.forEach(group => this.addGroup(survey.pages[0], group));
    this.freezeRows();
  }
  public dispose(): void {
    this.detachSurvey();
    this.headerSurveyValue = undefined;
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
    this.owner.addLocaleColumns(matrix);
    const itemValue = new ItemValue(row.item.name, row.item.text);
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
  private getSurveyData(): any {
    const res = {};
    this.forEachMatrix(matrix => res[matrix.name] = this.getMatrixData(matrix));
    return res;
  }
  // The matrix values follow the real survey's strings (the owner calls it after they changed).
  public updateData(): void {
    const survey = this.surveyValue;
    if (!survey) return;
    survey.data = this.getSurveyData();
    if (!this.isTree)this.updateCells();
  }

  // --- the "tree" layout -----------------------------------------------------------------------

  // The strings of the group, then a nested panel per child group.
  private addTreeGroup(panel: PanelModelBase, group: TranslationGroup): void {
    group.items.forEach((child, index) => {
      if (child.isGroup) return;
      this.addStringsMatrix(panel, { item: <TranslationItem>child, matrixName: group.fullName + index });
    });
    group.groups.forEach(item => {
      const pnl = <PanelModel>Serializer.createClass("panel");
      pnl.name = item.name;
      panel.addElement(pnl);
      pnl.title = item.text;
      if (item.hasIndent) {
        pnl["__translationHasIndent"] = true;
      }
      if (!!item.obj && item.obj.isPage) {
        this.setupPagePanel(pnl, item.obj.name);
      }
      this.addTreeGroup(pnl, item);
    });
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
        } else if (isElementObj(obj)) {
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
    group.rows.forEach(row => {
      const matrix = this.addStringsMatrix(container, row);
      // The header row of the group is the header of its first row's table.
      matrix.showHeader = !!row.isGroupFirst;
      this.setupColumns(matrix);
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
  private updateGroupCount(group: ITranslationTableGroup): void {
    if (!group.panel) return;
    const target = this.owner.targetLocale || "";
    const translated = group.rows.filter(row => !!row.item.locString.getLocaleText(target)).length;
    group.panel.description = !!target ? translated + "/" + group.rows.length : "";
  }
  public updateCounts(): void {
    this.groups.forEach(group => this.updateGroupCount(group));
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

  // The page panels collapse: the groups of the "pages" layout, the page panels of the "tree" one.
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

  // The owner's locale columns (Source and Target, or one of them) get the header titles of the
  // design, then the Question and String columns go before them.
  public setupColumns(matrix: QuestionMatrixDropdownModel): void {
    const source = this.owner.sourceLocale || "";
    const target = this.owner.targetLocale || "";
    const localeColumns = matrix.columns;
    localeColumns.forEach((column, index) => {
      // [Source, Target]; a single column is the Source one without a target language, the Target
      // one when the languages are the same.
      const isSource = !target || (localeColumns.length > 1 && index === 0);
      column["translationIsSource"] = isSource;
      column["translationLocale"] = isSource ? source : target;
      if (isSource && this.options.sourceReadOnly) column.cellType = "html";
    });
    updateSourceTargetHeaderColumns(matrix, source, target, !!target);
    const textColumns: Array<MatrixDropdownColumn> = [];
    if (this.layout === "pages") {
      textColumns.push(this.createTextColumn(translationTableQuestionColumnName, "ed.translationColumnQuestion", questionColumnWidth));
    }
    textColumns.push(this.createTextColumn(translationTableStringColumnName, "ed.translationColumnString", stringColumnWidth));
    matrix.columns.splice(0, 0, ...textColumns);
  }
  private createTextColumn(name: string, titleName: string, width: string): MatrixDropdownColumn {
    const column = new MatrixDropdownColumn(name);
    column.title = editorLocalization.getString(titleName);
    column.cellType = "html";
    column.width = width;
    return column;
  }
  // The columns of both surveys follow the languages (the owner calls it when they change).
  public updateColumns(): void {
    const header = !!this.headerSurveyValue ? <QuestionMatrixDropdownModel>this.headerSurveyValue.getQuestionByName(translationHeaderMatrixName) : undefined;
    if (!!header) {
      header.columns = [];
      this.addHeaderColumns(header);
    }
    this.forEachMatrix(matrix => {
      matrix.beginUpdate();
      matrix.columns = [];
      this.owner.addLocaleColumns(matrix);
      if (!this.isTree)this.setupColumns(matrix);
      matrix.endUpdate();
    });
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
      text = row.item.getSourceText(column["translationLocale"]);
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
    if (this.isTree) return;
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
  private onUpdatePanelCssClasses = (_: SurveyModel, options: any): void => {
    if (options.panel["__translationHasIndent"]) {
      options.cssClasses.panel.content += " st-panel-indent";
    }
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
  // Focuses the last cell of the string's row: the target locale column, or the only locale column
  // without a target. Resolved by the localizable string, not by the item: an item of another tree
  // (the used-strings tree) is not the item the rows carry.
  public focusCell(locStr: ILocalizableString): void {
    let isFound = false;
    this.forEachMatrix((matrix, row) => {
      if (isFound || row.item.locString !== locStr) return;
      isFound = true;
      const cells = matrix.visibleRows[0].cells;
      cells[cells.length - 1].question.focus();
    });
  }
}
