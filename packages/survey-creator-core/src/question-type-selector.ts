import { Action, createDropdownActionModel, Helpers, IAction, ListModel, PageModel, QuestionFactory, SurveyElement } from "survey-core";
import { QuestionToolbox, QuestionToolboxItem } from "./toolbox";
import { ICreatorOptions } from "./creator-options";
import { SurveyHelper } from "./survey-helper";
import { QuestionConverter } from "./questionconverter";

interface ICreatorQuestionConverter {
  maxNestedPanels?: number;
  toolbox: QuestionToolbox;
  convertCurrentQuestion(string, any);
}
export class QuestionTypeSelectorBase {
  constructor(protected creatorOptions: ICreatorQuestionConverter) {

  }
  public getAvailableToolboxItems(element?: SurveyElement, isAddNew: boolean = true): Array<QuestionToolboxItem> {
    const res: Array<QuestionToolboxItem> = this.creatorOptions.toolbox.items.slice();
    const maxNestedPanels = this.creatorOptions.maxNestedPanels || -1;
    if (!element || maxNestedPanels < 0) return res;
    if (!isAddNew && element.isPanel) return res;

    if (maxNestedPanels < SurveyHelper.getElementDeepLength(element)) {
      for (let i = res.length - 1; i >= 0; i--) {
        if (res[i].isPanel) {
          res.splice(i, 1);
        }
      }
    }
    return res;
  }
  protected onSelectQuestionType(questionType: string, json: any, defaultJsons: any) {

  }
}
export class QuestionTypeSelector extends QuestionTypeSelectorBase {
  constructor(creatorOptions: ICreatorQuestionConverter, private element?: SurveyElement) {
    super(creatorOptions);
  }
  protected onSelectQuestionType(questionType: string, json: any, defaultJsons: any) {

  }
}
export class QuestionTypeConverter extends QuestionTypeSelectorBase {
  /**
   *
   */
  constructor(creatorOptions: ICreatorQuestionConverter, private element?: SurveyElement) {
    super(creatorOptions);
  }

  private getConvertToTypes(): Array<QuestionToolboxItem> {
    if (!this.element) return [];
    const availableItems = this.getAvailableToolboxItems(this.element, false);
    const itemNames: Array<string> = [];
    availableItems.forEach(item => {
      if (itemNames.indexOf(item.typeName) == -1) {
        itemNames.push(item.typeName);
      }
    });
    const convertClasses: string[] = QuestionConverter.getConvertToClasses(this.element.getType(), itemNames, true);

    const res: Array<QuestionToolboxItem> = [];
    convertClasses.forEach((className: string) => {
      const items = this.creatorOptions.toolbox.items.filter(item => item.name == className);
      if (Array.isArray(items) && items.length > 0) {
        const item = items[0];
        res.push(item);
      }
    });
    return res;
  }
  private jsonIsCorresponded(json: any) {
    let jsonIsCorresponded = true;
    const objJson = this.element?.toJSON();
    Object.keys(json).forEach(p => {
      if (p != "type" && !Helpers.isTwoValueEquals(json[p], objJson[p])) jsonIsCorresponded = false;
    });
    return jsonIsCorresponded;
  }

  private toolboxItemIsCorresponded(toolboxItem: QuestionToolboxItem) {
    const elementType = this.element.getType();
    const json = this.cleanDefaultsFromJson(elementType, toolboxItem);
    if (toolboxItem.id == elementType || toolboxItem.json.type == elementType) {
      return this.jsonIsCorresponded(json);
    }
  }

  private cleanDefaultsFromJson(type: any, toolboxItem: QuestionToolboxItem) {
    const question = QuestionFactory.Instance.createQuestion(type, "question");
    if (!question) return toolboxItem.json;
    question.fromJSON(toolboxItem.json);
    const json = question.toJSON();
    delete json.name;
    return json;
  }
  private addItemJson(toolboxItem: QuestionToolboxItem, defaultJsons: any) {
    const type = toolboxItem.json?.type || toolboxItem.id;
    if (toolboxItem.json) {
      const json = this.cleanDefaultsFromJson(type, toolboxItem);
      if (!defaultJsons[type]) defaultJsons[type] = [];
      defaultJsons[type].push(json);
    }
  }
  private buildDefaultJsonMap(availableItems: QuestionToolboxItem[]) {
    const defaultJsons = {};
    availableItems.forEach((toolboxItem: QuestionToolboxItem) => {
      this.addItemJson(toolboxItem, defaultJsons);
      (toolboxItem.items || []).forEach((toolboxSubitem: QuestionToolboxItem) => {
        this.addItemJson(toolboxSubitem, defaultJsons);
      });
    });
    return defaultJsons;
  }
  private convertQuestion(questionType: string, json: any, defaultJsons: any) {
    const type = json?.type || questionType;
    let newJson = {};
    (defaultJsons[type] || []).forEach((djson) => {
      if (this.jsonIsCorresponded(djson)) {
        newJson = { ...json };
        const objJson = this.element?.toJSON();
        Object.keys(djson).forEach(p => {
          if (p != "type" && !newJson[p]) newJson[p] = undefined;
        });
        Object.keys(json || {}).forEach(p => {
          if (p != "type" && !(!objJson[p] || djson[p])) newJson[p] = undefined;
        });
      }
    });
    this.creatorOptions.convertCurrentQuestion(type, newJson);
  }

  protected updateQuestionTypeListModel(listModel: ListModel) {
    this.updateQuestionTypeOrSubtypeListModel(listModel, false);
  }

  public getQuestionTypeSelectorModel(options: { actionData: IAction }): Action {
    const newAction = createDropdownActionModel({
      id: options.actionData.id,
      css: "sv-action--convertTo sv-action-bar-item--secondary",
      iconName: options.actionData.iconName,
      iconSize: 16,
      title: options.actionData.title,
      enabled: options.actionData.enabled,
      visibleIndex: options.actionData.visibleIndex,
      disableShrink: options.actionData.disableShrink,
      location: "start",
      action: (newType) => {
      },
    }, {
      items: [],
      allowSelection: true,
      horizontalPosition: "center",
      cssClass: "svc-creator-popup",
      onShow: () => {
        const listModel = newAction.popupModel.contentComponentData.model;
        this.updateQuestionTypeListModel(listModel);
      },
    });
    const listModel = new ListModel([]);
    this.updateQuestionTypeListModel(listModel);
    if (!listModel.actions.length) return null;
    if (listModel.selectedItem) newAction.title = listModel.selectedItem.title;
    return newAction;
  }

  protected updateQuestionTypeOrSubtypeListModel(listModel: ListModel, subtypeOnly: boolean) {
    const availableItems = this.getConvertToTypes();
    const defaultJsons = this.buildDefaultJsonMap(availableItems);
    const newItems: Array<IAction> = [];
    let lastItem: QuestionToolboxItem;
    let selectedAction: IAction;
    let selectedSubaction: IAction = undefined;
    let selectedSubactions = undefined;
    availableItems.forEach((item: QuestionToolboxItem) => {
      const needSeparator = lastItem && item.category != lastItem.category;
      const action = this.createIActionBarItemByClass(item, needSeparator, defaultJsons);
      if (this.toolboxItemIsCorresponded(item)) selectedAction = action;
      if (item.items?.length > 0 && this.creatorOptions.toolbox.showSubitems) {
        const subactions = [];
        let selectedSubactionLocal: IAction = undefined;
        item.items.forEach(subitem => {
          const subaction = this.createIActionBarItemByClass(subitem, false, defaultJsons);
          if (this.toolboxItemIsCorresponded(subitem)) selectedSubactionLocal = subitem;
          subactions.push(subaction);
        });
        action.setSubItems({ items: subactions });
        if (selectedSubactionLocal) {
          selectedAction = action;
          selectedSubaction = selectedSubactionLocal;
          selectedSubactions = subactions;
        }
      }
      lastItem = item;
      newItems.push(action);
    });

    if (subtypeOnly) {
      if (selectedSubaction) {
        listModel.setItems(selectedSubactions);
        listModel.selectedItem = selectedSubaction;
      }
    } else {
      const _listModel = selectedAction?.popupModel?.contentComponentData.model;
      if (_listModel) _listModel.selectedItem = selectedSubaction;
      listModel.setItems(newItems);
      listModel.selectedItem = selectedAction;
    }
  }

  protected onSelectQuestionType(questionType: string, json: any, defaultJsons: any) {
    this.convertQuestion(questionType, json, defaultJsons);
  }
  private createIActionBarItemByClass(item: QuestionToolboxItem, needSeparator: boolean, defaultJsons: any): Action {
    const action = new Action({
      title: item.title,
      id: item.name,
      iconName: item.iconName,
      visible: item.visible,
      enabled: item.enabled,
      needSeparator: needSeparator
    });
    action.action = () => {
      this.onSelectQuestionType(item.typeName, item.json, defaultJsons);
    };
    return action;
  }
}
export class QuestionSubtypeConverter extends QuestionTypeConverter {
  constructor(creatorOptions: ICreatorQuestionConverter, element?: SurveyElement) {
    super(creatorOptions, element);
  }
  protected onSelectQuestionType(questionType: string, json: any, defaultJsons: any) {

  }
  public updateQuestionTypeListModel(listModel: ListModel) {
    this.updateQuestionTypeOrSubtypeListModel(listModel, true);
  }
}