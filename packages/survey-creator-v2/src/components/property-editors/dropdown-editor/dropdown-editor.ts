import * as ko from "knockout";
import { SurveyDropdownPropertyEditor } from "../../../propertyEditors/propertyEditorFactory";

import "./dropdown-editor.scss";
const template = require("./dropdown-editor.html");

interface IDropdownEditorItem {
  value: string;
  disabled: boolean;
}

class DropdownEditorItemViewModel {
  public selected: ko.Observable<boolean> = ko.observable(false);
  public disabled: ko.Observable<boolean>;
  public value: string;
  onItemSelected: (item: DropdownEditorItemViewModel) => void;

  constructor(model: IDropdownEditorItem) {
    this.disabled = ko.observable(model.disabled);
    this.value = model.value;
  }

  public select = () => {
    if (!this.disabled() && !this.selected()) {
      this.selected(true);
      this.onItemSelected(this);
    }
  };
}

export class DropdownEditorViewModel {
  public hasValue: ko.Computed<boolean>;
  public choices: ko.Computed<Array<DropdownEditorItemViewModel>>;
  public selectedItem: DropdownEditorItemViewModel;
  public isExpanded: ko.Observable<boolean> = ko.observable(false);
  public isOver: ko.Observable<boolean>;
  constructor(
    public koValue: ko.Observable<string>,
    public readOnly: boolean,
    public optionsCaption: string,
    public koChoices: any,
    public koHasFocus: ko.Observable<boolean>,
    public displayName: string,
    public showLabel: boolean,
    public afterRender: any
  ) {
    this.choices = ko.computed(() =>
      ko.unwrap(koChoices).map((choice) => {
        var item = new DropdownEditorItemViewModel(choice);
        item.onItemSelected = this.onItemSelected;
        if (item.value == this.koValue()) {
          item.selected(true);
          this.selectedItem = item;
        }
        return item;
      })
    );
    this.hasValue = ko.computed(() => {
      return !!this.koValue();
    });
  }

  private onItemSelected = (item: DropdownEditorItemViewModel) => {
    this.koValue(item.value);
    this.isExpanded(false);
  };

  public toggle() {
    this.isExpanded(!this.isExpanded());
  }

  public close() {
    setTimeout(() => {}, 100);
    this.isExpanded(false);
  }
}

ko.components.register("svc-dropdown-editor", {
  viewModel: {
    createViewModel: (params: any, componentInfo: any) => {
      const model: SurveyDropdownPropertyEditor = params.model;
      return new DropdownEditorViewModel(
        model.koValue,
        model.readOnly,
        model.optionsCaption,
        model.koChoices,
        model.koHasFocus,
        model.displayName,
        model.showDisplayNameOnTop,
        () => {
          typeof params.afterRender === "function" &&
            params.afterRender.call(model, componentInfo);

          typeof model.koAfterRender === "function" &&
            model.koAfterRender.call(model, componentInfo);
        }
      );
    },
  },
  template: template,
});
