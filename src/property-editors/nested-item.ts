import * as ko from "knockout";

import "./nested-item.scss";
import {
  SurveyNestedPropertyEditor,
  SurveyNestedPropertyEditorEditorCell,
  SurveyNestedPropertyEditorColumn,
} from "../propertyEditors/propertyNestedPropertyEditor";
import { ISurveyObjectEditorOptions } from "../propertyEditors/propertyEditorBase";
import {
  SurveyElementEditorContentModel,
  SurveyQuestionProperties,
} from "../questionEditors/questionEditor";
import { ItemValue } from 'survey-knockout';

const templateHtml = require("./nested-item.html");

export class SurveyNestedPropertyEditorItem {
  public static dragIconName = "icon-drag-item";
  public static deleteIconName = "icon-delete-cross";
}

export class PropertyEditorNestedItem {
  get dragIcon() {
    return SurveyNestedPropertyEditorItem.dragIconName;
  }
  get deleteIcon() {
    return SurveyNestedPropertyEditorItem.deleteIconName;
  }
  public koHasDetails: any;
  protected options: ISurveyObjectEditorOptions;
  private koCellsValue = ko.observableArray<
    SurveyNestedPropertyEditorEditorCell
  >();
  koCanDeleteItem = ko.observable(true);
  private itemEditorValue: SurveyElementEditorContentModel;
  constructor(
    public obj: ItemValue,
    private getColumns: () => Array<SurveyNestedPropertyEditorColumn>,
    options: ISurveyObjectEditorOptions,
    private getItemClassName: (item: any) => string = null,
    private object: any = undefined,
    public editor: any
  ) {
    this.options = options;
    this.koHasDetails = ko.observable(this.hasDetailsProperties());
    ko.computed(() => {
      var columns = this.getColumns();
      this.koCellsValue([]);
      for (var i = 0; i < columns.length; i++) {
        this.koCellsValue.push(
          new SurveyNestedPropertyEditorEditorCell(
            obj,
            columns[i].property,
            this.options
          )
        );
      }
      this.koCanDeleteItem(
        !this.options ||
          this.options.onCanDeleteItemCallback(this.object, this.obj)
      );
    });
  }
  protected getClassName(): string {
    if (!this.getItemClassName) return "";
    return this.getItemClassName(this.obj);
  }
  public get columns(): Array<SurveyNestedPropertyEditorColumn> {
    return this.getColumns();
  }
  protected hasDetailsProperties(): boolean {
    var properties = new SurveyQuestionProperties(
      this.obj,
      this.options,
      this.getClassName()
    );
    return !properties.isEmpty;
  }
  public hideItemEditor() {
    this.itemEditorValue = null;
    this.updateValues();
  }
  public get itemEditor(): SurveyElementEditorContentModel {
    if (!this.itemEditorValue)
      this.itemEditorValue = this.createSurveyQuestionEditor();
    return this.itemEditorValue;
  }
  public get cells(): Array<SurveyNestedPropertyEditorEditorCell> {
    return this.koCellsValue();
  }
  public hasError(): boolean {
    if (this.itemEditorValue && this.itemEditorValue.hasError()) return true;
    var res = false;
    for (var i = 0; i < this.cells.length; i++) {
      res = this.cells[i].hasError || res;
    }
    return res;
  }
  protected updateValues() {
    for (var i = 0; i < this.cells.length; i++) {
      this.cells[i].updateValue();
    }
  }
  protected createSurveyQuestionEditor() {
    return new SurveyElementEditorContentModel(
      this.obj,
      this.getClassName(),
      this.options,
      true
    );
  }
  focus() {
    setTimeout(() => {
      var firstCell = this.cells[0];
      firstCell && firstCell.editor.focus();
    }, 10);
  }
}

ko.components.register("svd-property-editor-nested-item", {
  viewModel: {
    createViewModel: (params, componentInfo) => {
      const editor = params.editor;

      if (editor.columns.length === 0) editor.createColumns(); //TODO hot fix

      return new PropertyEditorNestedItem(
        params.item,
        () => editor.columns,
        editor.options,
        (item) => editor.getItemClassName(item),
        editor.object,
        editor
      );
    },
  },
  template: templateHtml,
});
