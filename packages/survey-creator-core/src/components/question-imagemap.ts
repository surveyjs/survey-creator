import {
  SurveyElement,
  SurveyTemplateRendererTemplateData,
  Serializer,
  QuestionImageMapModel,
  Action,
  ComputedUpdater,
  IAction,
  ListModel,
} from "survey-core";
import { SurveyCreatorModel } from "../creator-base";
import { getNextValue, getQuestionFromObj } from "../utils/creator-utils";
import { QuestionAdornerViewModel } from "./question";

export class QuestionImagemapAdornerViewModel extends QuestionAdornerViewModel {
  constructor(
    public creator: SurveyCreatorModel,
    public surveyElement: SurveyElement,
    public templateData: SurveyTemplateRendererTemplateData
  ) {
    super(creator, surveyElement, templateData);
  }

  get element(): QuestionImageMapModel {
    return getQuestionFromObj(this.surveyElement) as QuestionImageMapModel;
  }

  protected buildActions(items: Array<Action>): void {
    super.buildActions(items);
    items.push(this.createChangeShapeAction());

    items.push(new Action({
      id: "addNewArea",
      title: "Add New Area",
      iconName: "icon-add",
      iconSize: "auto",
      visibleIndex: 0,
      visible: <any>new ComputedUpdater(() => {
        return this.element?.selectedArea === undefined;
      }),
      action: () => {
        const nextItemValue = getNextValue("item", this.element.areas.map((area) => area.value));
        const newArea = this.element.addItem(nextItemValue);
        this.element.selectedArea = newArea;
      }
    }));

    items.push(new Action({
      id: "finishEditArea",
      title: "Finish Edit Area",
      iconName: "icon-save",
      iconSize: "auto",
      visibleIndex: 0,
      visible: <any>new ComputedUpdater(() => {
        return this.element?.selectedArea !== undefined;
      }),
      action: () => {
        if (this.element.selectedArea) {
          this.element.selectedArea = undefined;
        }
      }
    }));
  }

  private createChangeShapeAction() {
    const shapes = Serializer.findProperty(this.element.getType(), "shape").getChoices(this.element);

    const actionData: IAction = {
      id: "changeShape",
      css: "sv-action--changeShape",
      visibleIndex: 0,
      title: <any>new ComputedUpdater(() => {
        return this.element?.selectedArea?.getShape();
      }),
      iconName: "icon-chevron_16x16",
      iconSize: "auto"
    };

    const items = shapes.map(shape => {
      return new Action({
        id: shape,
        title: shape,
        action: () => {
          if (this.element.selectedArea) {
            this.element.selectedArea.shape = shape;
          }
        }
      });
    });

    const newAction = this.createDropdownModel({
      actionData: actionData,
      items: items,
      updateListModel: (listModel: ListModel) => {
        listModel.actions = items;
      }
    });

    newAction.visible = <any>new ComputedUpdater(() => {
      return this.element?.selectedArea !== undefined;
    });

    newAction.iconName = <any>new ComputedUpdater(() => {
      if (newAction.mode === "small") {
        return this.creator.toolbox.getItemByName(this.element.getType())?.iconName;
      }
      return "icon-chevron_16x16";
    });

    newAction.disableHide = true;
    return newAction;
  }
}
