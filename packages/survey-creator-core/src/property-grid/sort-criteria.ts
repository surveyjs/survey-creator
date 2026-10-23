import { Base, IAction, ISortCriterion, JsonObjectProperty, Question, QuestionRecordsModel } from "survey-core";
import { PropertyGridEditorCollection, PropertyGridEditor } from "./index";
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

// sortCriteria is edited with survey-core's "Sort by" dialog only. The grid shows it as an expression
// question (text nobody types into) and offers the dialog and a clear action next to it. The question
// is read-only only when the property may not be edited (a read-only Creator, prop.readOnly,
// onPropertyGetReadOnly), and both actions follow it.
export class PropertyGridEditorSortCriteria extends PropertyGridEditor {
  public fit(prop: JsonObjectProperty): boolean {
    return prop.type === "sortcriteria";
  }
  public getJSON(obj: Base, prop: JsonObjectProperty, options: ISurveyCreatorOptions): any {
    return {
      type: "expression"
    };
  }
  // The question is bound to the property like any other grid question, so the survey brings it
  // every assignment, push and splice, undo/redo and JSON changes included. It shows the text and
  // never writes: an expression question has no input, and there is no valueToDataCallback.
  public onCreated(obj: Base, question: Question, prop: JsonObjectProperty, options: ISurveyCreatorOptions): void {
    question.valueFromDataCallback = (val: any): any => getSortCriteriaText(val);
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
  // Called by the grid's generic clear action.
  public clearPropertyValue(obj: Base, prop: JsonObjectProperty, question: Question, options: ISurveyCreatorOptions): void {
    this.setSortCriteria(obj, prop, []);
  }
  // "More..." goes before the generic clear action.
  public onGetQuestionTitleActions(obj: Base, options: any, creatorOptions: ISurveyCreatorOptions): void {
    const question: Question = options.question;
    const actions: Array<IAction> = options.actions;
    const clearIndex = actions.map(action => action.id).indexOf("property-grid-clear");
    actions.splice(clearIndex > -1 ? clearIndex : actions.length, 0, this.createMoreAction(obj, question, creatorOptions));
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
  // One assignment is one undo step: survey-core writes the array with one splice (setArrayPropertyValue).
  private setSortCriteria(obj: Base, prop: JsonObjectProperty, criteria: Array<ISortCriterion>): void {
    obj[prop.name] = criteria;
  }
  // Enabled whenever the property may be edited, even with no field to sort by: the dialog then
  // shows it has nothing to offer.
  private createMoreAction(obj: Base, question: Question, options: ISurveyCreatorOptions): IAction {
    const prop: JsonObjectProperty = (<any>question).property;
    return {
      id: "property-grid-sort-more",
      title: getLocString("ed.sortCriteriaMore"),
      showTitle: false,
      iconName: "icon-edit",
      iconSize: "auto",
      enabled: !question.isReadOnly,
      action: () => { this.showSortDialog(obj, prop, options); }
    };
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
