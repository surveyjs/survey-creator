import { Base, ComputedUpdater, IAction, ISortCriterion, JsonObjectProperty, Question, QuestionRecordsModel } from "survey-core";
import { PropertyGridEditorCollection, PropertyGridEditor, PropertyJSONGenerator } from "./index";
import { ISurveyCreatorOptions } from "../creator-settings";
import { editorLocalization, getLocString } from "../editorLocalization";

const ascSign = "↑"; // eslint-disable-line surveyjs/eslint-plugin-i18n/only-english-or-code
const descSign = "↓"; // eslint-disable-line surveyjs/eslint-plugin-i18n/only-english-or-code

// The text the grid shows for a sort: the stored field names, not the column titles, so that it
// reads the same as the JSON. A missing direction is ascending, as in survey-core.
export function getSortCriteriaText(criteria: Array<ISortCriterion>): string {
  if (!Array.isArray(criteria)) return "";
  return criteria.filter(item => !!item && !!item.field)
    .map(item => item.field + " " + (item.direction === "desc" ? descSign : ascSign))
    .join(", ");
}

const sortCriteriaItemsKey = "sortCriteriaItems";

// sortCriteria is edited with survey-core's "Sort by" dialog only. The grid shows it as read-only
// text and offers the dialog and a clear action next to it.
export class PropertyGridEditorSortCriteria extends PropertyGridEditor {
  public fit(prop: JsonObjectProperty): boolean {
    return prop.type === "sortcriteria";
  }
  public getJSON(obj: Base, prop: JsonObjectProperty, options: ISurveyCreatorOptions): any {
    return {
      type: "text",
      readOnly: true
    };
  }
  // The question is bound to the property like any other grid question, so the survey brings it
  // every assignment, push and splice, undo/redo and JSON changes included. It shows the text and
  // never writes: it is read-only, and it has no valueToDataCallback.
  public onCreated(obj: Base, question: Question, prop: JsonObjectProperty, options: ISurveyCreatorOptions): void {
    question.valueFromDataCallback = (val: any): any => getSortCriteriaText(val);
    // A read-only text question hides its placeholder; this one is read-only by design.
    Object.defineProperty(question, "renderedPlaceholder", {
      configurable: true,
      get: (): string => question.placeholder
    });
    // An edit of an item's field or direction raises no change of the property: the items are
    // followed one by one, and again whenever the array changes.
    const update = (): void => { this.updateItemsSubscription(obj, question, prop); };
    obj.registerFunctionOnPropertyValueChanged(prop.name, update, this.getHandlerKey(question));
    this.updateItemsSubscription(obj, question, prop);
  }
  public onDisposing(obj: Base, question: Question, prop: JsonObjectProperty): void {
    obj.unRegisterFunctionOnPropertyValueChanged(prop.name, this.getHandlerKey(question));
    this.releaseItems(question);
  }
  // The generic clear and setup actions are enabled by !question.isReadOnly, and this question is
  // always read-only. The editor adds its own actions, shown by whether the property may be edited.
  public onGetQuestionTitleActions(obj: Base, options: any, creatorOptions: ISurveyCreatorOptions): void {
    const question: Question = options.question;
    const prop: JsonObjectProperty = (<any>question).property;
    if (!this.canEditProperty(obj, prop, creatorOptions)) return;
    options.actions.push(this.createMoreAction(obj, prop, creatorOptions));
    options.actions.push(this.createClearAction(obj, prop));
  }
  // Recomputed every time the actions are built: onPropertyGetReadOnly may change its answer.
  public canEditProperty(obj: Base, prop: JsonObjectProperty, options: ISurveyCreatorOptions): boolean {
    if (!obj || !prop || !options || options.readOnly) return false;
    return !PropertyJSONGenerator.isPropertyReadOnly(prop, options, obj, null, null);
  }
  public showSortDialog(obj: Base, prop: JsonObjectProperty, options: ISurveyCreatorOptions): void {
    // The dialog reads its texts on every update, so the Creator's locale is passed to it rather
    // than set around the call. The field titles stay the survey's.
    (<QuestionRecordsModel>obj).showSortDialog({
      onApply: (criteria: Array<ISortCriterion>): void => { this.setSortCriteria(obj, prop, criteria); },
      rootElement: options.rootElement,
      locale: editorLocalization.locale
    });
  }
  public clearSortCriteria(obj: Base, prop: JsonObjectProperty): void {
    this.setSortCriteria(obj, prop, []);
  }
  // One assignment is one undo step: survey-core writes the array with one splice (setArrayPropertyValue).
  private setSortCriteria(obj: Base, prop: JsonObjectProperty, criteria: Array<ISortCriterion>): void {
    obj[prop.name] = criteria;
  }
  private createMoreAction(obj: Base, prop: JsonObjectProperty, options: ISurveyCreatorOptions): IAction {
    return {
      id: "property-grid-sort-more",
      title: getLocString("ed.sortCriteriaMore"),
      showTitle: false,
      iconName: "icon-edit",
      iconSize: "auto",
      // The dialog has nothing to offer without a field whose values sort.
      enabled: <any>new ComputedUpdater<boolean>(() => this.hasSortFields(obj)),
      action: () => { this.showSortDialog(obj, prop, options); }
    };
  }
  private createClearAction(obj: Base, prop: JsonObjectProperty): IAction {
    return {
      id: "property-grid-clear",
      title: getLocString("pe.clear"),
      showTitle: false,
      iconName: "icon-clear",
      iconSize: "auto",
      appearance: { style: "alert", mode: "tertiary-muted" },
      visible: <any>new ComputedUpdater<boolean>(() => {
        const val = obj[prop.name];
        return Array.isArray(val) && val.length > 0;
      }),
      action: () => { this.clearSortCriteria(obj, prop); }
    };
  }
  // The fields the designer's dialog offers. survey-core keeps the list protected
  // (getDesignSortFieldCandidates) and exposes no public check.
  private hasSortFields(obj: Base): boolean {
    const func = (<any>obj).getDesignSortFieldCandidates;
    if (typeof func !== "function") return false;
    const fields: Array<{ field: string }> = func.call(obj);
    return Array.isArray(fields) && fields.some(item => !!item && !!item.field);
  }
  private updateItemsSubscription(obj: Base, question: Question, prop: JsonObjectProperty): void {
    this.releaseItems(question);
    if (question.isDisposed) return;
    const items: Array<Base> = (obj[prop.name] || []).filter((item: any) => !!item && typeof item.registerFunctionOnPropertiesValueChanged === "function");
    const key = this.getHandlerKey(question);
    items.forEach(item => {
      item.registerFunctionOnPropertiesValueChanged(["field", "direction"], () => {
        if (!question.isDisposed) {
          question.updateValueFromSurvey(obj[prop.name]);
        }
      }, key);
    });
    question[sortCriteriaItemsKey] = items;
  }
  private releaseItems(question: Question): void {
    const items: Array<Base> = question[sortCriteriaItemsKey];
    if (!Array.isArray(items)) return;
    const key = this.getHandlerKey(question);
    items.forEach(item => item.unRegisterFunctionOnPropertiesValueChanged(["field", "direction"], key));
    question[sortCriteriaItemsKey] = undefined;
  }
  // Two grids may show the same object: each question keeps its own handlers.
  private getHandlerKey(question: Question): string {
    return "sortCriteriaText_" + question.id;
  }
}

PropertyGridEditorCollection.register(new PropertyGridEditorSortCriteria());
