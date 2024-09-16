import { Action, SurveyElement } from "survey-core";
import { QuestionToolbox, QuestionToolboxItem } from "./toolbox";
import { ICreatorOptions } from "./creator-options";
import { SurveyHelper } from "./survey-helper";
export class QuestionTypeSelector {
  /**
   *
   */
  constructor(private creatorOptions: ICreatorOptions, private toolbox: QuestionToolbox, private element?: SurveyElement) {

  }
  public getAvailableToolboxItems(element?: SurveyElement, isAddNew: boolean = true): Array<QuestionToolboxItem> {
    const res: Array<QuestionToolboxItem> = [].concat(this.toolbox.items);
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

  createIActionBarItemByClass(item: QuestionToolboxItem, needSeparator: boolean, onSelectQuestionType?: (questionType: string, json?: any) => void): Action {
    const action = new Action({
      title: item.title,
      id: item.name,
      iconName: item.iconName,
      visible: item.visible,
      enabled: item.enabled,
      needSeparator: needSeparator
    });
    action.action = () => {
      onSelectQuestionType(item.typeName, item.json);
    };

    if (!!item.items && item.items.length > 0 && this.toolbox.showSubitems) {
      const innerItems = item.items.map(i => new Action({
        id: i.id,
        title: i.title,
        action: () => {
          action.hidePopup();
          onSelectQuestionType(item.typeName, i.json);
        }
      }));
      action.setSubItems({ items: innerItems });
    }
    return action;
  }

}
