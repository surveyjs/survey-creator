
import { QuestionDropdownModel, SurveyElement, SurveyTemplateRendererTemplateData, property, ItemValue, Action } from "survey-core";
import { SurveyCreatorModel } from "../creator-base";
import { QuestionAdornerViewModel } from "./question";
import { DropdownChoicesViewModel, IDropdownChoicesHost } from "./dropdown-choices";

import "./question-dropdown.scss";

export class QuestionDropdownAdornerViewModel extends QuestionAdornerViewModel implements IDropdownChoicesHost {
  @property({ defaultValue: true }) private isCollapsedValue: boolean;
  @property({ defaultValue: -1 }) private visibleCount: number;
  private choicesModel: DropdownChoicesViewModel;

  constructor(
    creator: SurveyCreatorModel,
    surveyElement: SurveyElement,
    templateData: SurveyTemplateRendererTemplateData,
  ) {
    super(creator, surveyElement, templateData);
    this.visibleCount = creator.maxVisibleChoices;
    this.choicesModel = new DropdownChoicesViewModel(this);
  }

  get question(): QuestionDropdownModel {
    return this.surveyElement as QuestionDropdownModel;
  }

  // IDropdownChoicesHost: the collapsed flag stays a property of the adorner itself, so that the
  // framework views re-render on it - they track the adorner, not the choices model.
  public get maxVisibleChoices(): number {
    return this.visibleCount;
  }
  public isCollapsed(): boolean {
    return this.isCollapsedValue;
  }
  public setCollapsed(value: boolean): void {
    this.isCollapsedValue = value;
  }

  get itemComponent(): string {
    return this.choicesModel.itemComponent;
  }

  get itemInputType(): string {
    return this.choicesModel.itemInputType;
  }

  get needToCollapse(): boolean {
    return this.choicesModel.needToCollapse;
  }

  get isCollapseView(): boolean {
    return this.choicesModel.isCollapseView;
  }

  public leftFocus(): void {
    if (!this.creator.isElementSelected(this.surveyElement) && !this.isCollapsedValue) {
      this.isCollapsedValue = this.needToCollapse;
    }
  }

  public getChoiceCss(item?: ItemValue): string {
    return this.choicesModel.getChoiceCss(item);
  }

  public getRenderedItems(): ItemValue[] {
    return this.choicesModel.getRenderedItems();
  }

  public getButtonText(): string {
    return this.choicesModel.getButtonText();
  }

  public switchCollapse = (): void => {
    this.choicesModel.switchCollapse();
  };

  public get collapseAction(): Action {
    return this.choicesModel.collapseAction;
  }

  protected syncWysiwygSurface(): void {
    this.syncDesignDropdown(this.wysiwygMode);
  }
  private syncDesignDropdown(enabled: boolean): void {
    const question = this.question;
    if (!question || question.isDisposed) return;
    if (!enabled && !(<any>question).dropdownListModelValue) return;
    if (enabled) {
      question.forceIsInputReadOnly = false;
    } else {
      question.resetPropertyValue("forceIsInputReadOnly");
    }
    const dropdown = question.dropdownListModel;
    if (!dropdown) return;
    const model = <any>dropdown;
    if (!model.__svcDesignClick) {
      model.__svcDesignClick = true;
      const original = dropdown.onClick.bind(dropdown);
      model.onClick = (event?: any) => {
        if (model.allowOpenInDesignMode && question.isDesignMode && !question.readOnly && !question.isPreviewStyle && !question.isReadOnlyAttr) {
          dropdown.popupModel.toggleVisibility();
          model.isListFocusedByKeyboard = false;
          return;
        }
        original(event);
      };
    }
    model.allowOpenInDesignMode = enabled;
    const list = model.listModel;
    if (!list) return;
    if (enabled) {
      if (!model.__svcDesignSelection) {
        model.__svcDesignSelection = list.onSelectionChanged;
      }
      list.itemComponent = "svc-wysiwyg-dropdown-item";
      list.onSelectionChanged = () => { };
    } else if (model.__svcDesignSelection) {
      list.onSelectionChanged = model.__svcDesignSelection;
      list.itemComponent = "sv-list-item-content";
      model.__svcDesignSelection = undefined;
    }
  }
  public attachElement(surveyElement: SurveyElement) {
    super.attachElement(surveyElement);
    this.syncWysiwygSurface();
    if (!!surveyElement) {
      surveyElement.registerFunctionOnPropertyValueChanged("isSelectedInDesigner",
        () => {
          this.leftFocus();
        }, "dropdownCollapseChecker");
    }
  }
  public detachElement(surveyElement: SurveyElement): void {
    this.syncDesignDropdown(false);
    if (!!surveyElement) {
      surveyElement.unRegisterFunctionOnPropertyValueChanged("isSelectedInDesigner", "dropdownCollapseChecker");
    }
    super.detachElement(surveyElement);
  }
  public dispose(): void {
    if (!!this.choicesModel) {
      this.choicesModel.dispose();
    }
    super.dispose();
  }
}
