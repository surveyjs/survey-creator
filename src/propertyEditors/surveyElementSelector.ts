import * as ko from "knockout";
import * as Survey from "survey-knockout";
import { editorLocalization } from "../editorLocalization";
import { EditableObject } from "./editableObject";

export interface SurveyElementSelectorItem {
  name: string;
  text: string;
  element: Survey.Base;
  koDisabled: any;
}

export class SurveyElementSelector {
  private showTitle: boolean;
  private optionsCaptionValue: string;
  private disableCallback: boolean = false;
  private selectedValues: Array<string> = [];
  public koElements: any;
  public koValue: any;
  public koHasFocus: any;
  public koErrorText: any;
  public koDisplayError: any;
  public onValueChangedCallback: (val: string) => void;
  public disabledPropertyName: string;
  koAfterRender: any;
  constructor(
    public survey: Survey.SurveyModel,
    elementType: string = "question",
    showTitle: boolean = false,
    optionsCaptionName: string = ""
  ) {
    this.survey = EditableObject.getOriginalSurvey(this.survey);
    this.showTitle = showTitle;
    this.optionsCaptionValue = this.getOptionsText(
      optionsCaptionName,
      elementType
    );
    this.koValue = ko.observable("");
    var self = this;
    this.koValue.subscribe(function(newValue) {
      if (self.disableCallback || !self.onValueChangedCallback) return;
      self.onValueChangedCallback(newValue);
    });
    this.koElements = ko.observableArray(this.buildElements(elementType));
    this.koHasFocus = ko.observable(false);
    this.koHasFocus.subscribe(function(newValue) {
      if (newValue) {
        self.updateItems();
      }
    });
    this.koErrorText = ko.observable("");
    this.koDisplayError = ko.computed(function() {
      return !!self.koErrorText();
    });
    this.koAfterRender = function () {};
  }
  public get value(): string {
    return this.koValue();
  }
  public set value(val: string) {
    this.disableCallback = true;
    this.koValue(val);
    this.selectedValues.push(val);
    this.disableCallback = false;
  }
  public get element(): Survey.Base {
    var el = this.findItemByName(this.value);
    return !!el ? el.element : null;
  }
  public set element(val: Survey.Base) {
    var el = this.findItemByElement(val);
    if (!!el) {
      this.value = el.name;
    }
  }
  private findItemByName(name: string): SurveyElementSelectorItem {
    if (!name) return null;
    var items = this.koElements();
    for (var i = 0; i < items.length; i++) {
      if (items[i].name == name) return items[i];
    }
    return null;
  }
  private findItemByElement(el: Survey.Base): SurveyElementSelectorItem {
    if (!el) return null;
    var items = this.koElements();
    for (var i = 0; i < items.length; i++) {
      if (items[i].element === el) return items[i];
    }
    return null;
  }
  public get optionsCaption() {
    return this.optionsCaptionValue;
  }
  public updateItems() {
    if (!this.disabledPropertyName) return;
    var items = this.koElements();
    for (var i = 0; i < items.length; i++) {
      var item = items[i];
      var disabled =
        !!item.element[this.disabledPropertyName] &&
        this.selectedValues.indexOf(item.name) < 0;
      item.koDisabled(disabled);
    }
  }
  public hasError(): boolean {
    var text = !this.element ? this.getLocString("pe.itemSelectorEmpty") : "";
    this.koErrorText(text);
    return !!text;
  }
  public getLocString(name: string) {
    return editorLocalization.getString(name);
  }
  private buildElements(elementType: string): Array<SurveyElementSelectorItem> {
    var elements = [];
    if (elementType == "question") {
      elements = this.survey.getAllQuestions();
    }
    if (elementType == "page") {
      elements = this.survey.pages;
    }
    if (elementType == "panel") {
      elements = this.survey.getAllPanels();
    }
    var res = [];
    for (var i = 0; i < elements.length; i++) {
      var el = elements[i];
      var text = "";
      if (this.showTitle) {
        text = el.locTitle.renderedHtml;
      }
      if (!text) text = el.name;
      res.push({
        name: el.name,
        text: text,
        element: el,
        koDisabled: ko.observable(false),
      });
    }
    return res;
  }
  private getOptionsText(
    optionsCaptionName: string,
    elementType: string
  ): string {
    if (!optionsCaptionName) {
      optionsCaptionName =
        elementType == "page"
          ? "pe.conditionSelectPage"
          : elementType == "panel"
          ? "pe.conditionSelectPanel"
          : "pe.conditionSelectQuestion";
    }
    return this.getLocString(optionsCaptionName);
  }
}
