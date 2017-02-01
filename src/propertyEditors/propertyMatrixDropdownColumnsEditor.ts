import * as ko from "knockout";
import {SurveyPropertyItemsEditor} from "./propertyItemsEditor";
import {SurveyPropertyEditorBase} from "./propertyEditorBase";
import {SurveyPropertyItemValuesEditor} from "./propertyItemValuesEditor";
import * as Survey from "survey-knockout";

export class SurveyPropertyDropdownColumnsEditor extends SurveyPropertyItemsEditor {
    constructor() {
        super();
    }
    public get editorType(): string { return "matrixdropdowncolumns"; }
    public hasError(): boolean {
        var result = false;
        for (var i = 0; i < this.koItems().length; i++) {
            result = result || this.koItems()[i].hasError();
        }
        return result;
    }
    protected createNewEditorItem(): any { return new SurveyPropertyMatrixDropdownColumnsItem(new Survey.MatrixDropdownColumn("", this.options)); }
    protected createEditorItem(item: any) { return new SurveyPropertyMatrixDropdownColumnsItem(item, this.options); }
    protected createItemFromEditorItem(editorItem: any) {
        var columItem = <SurveyPropertyMatrixDropdownColumnsItem>editorItem;
        columItem.apply();
        return columItem.column;
    }
}

export class SurveyPropertyMatrixDropdownColumnsItem {
    private koChoices: any;
    public choicesEditor: SurveyPropertyItemValuesEditor;
    koName: any; koTitle: any; koCellType: any; koShowChoices: any;
    koHasError: any; koColCount: any; koIsRequired: any; koHasOther: any;
    koHasChoices: any; koHasColCount: any;
    public onShowChoicesClick: any;
    public cellTypeChoices: Array<any>;
    public colCountChoices: Array<any>;
    constructor(public column: Survey.MatrixDropdownColumn, public options = null) {
        this.cellTypeChoices = this.getPropertyChoices("cellType");
        this.colCountChoices = this.getPropertyChoices("colCount");
        this.koName = ko.observable(column.name);
        this.koCellType = ko.observable(column.cellType);
        this.koColCount = ko.observable(column.colCount);
        this.koIsRequired = ko.observable(column.isRequired ? true : false);
        this.koHasOther = ko.observable(column.hasOther ? true : false);
        this.koTitle = ko.observable(column.name === column.title ? "" : column.title);
        this.koShowChoices = ko.observable(false);
        this.koChoices = ko.observableArray(column.choices);
        this.koHasError = ko.observable(false);

        this.choicesEditor = new SurveyPropertyItemValuesEditor();
        this.choicesEditor.object = this.column;
        this.choicesEditor.value = this.koChoices();
        this.choicesEditor.options = this.options;

        var self = this;
        this.onShowChoicesClick = function () { self.koShowChoices(!self.koShowChoices()); }
        this.koHasChoices = ko.computed(function () { return self.koCellType() == "dropdown" || self.koCellType() == "checkbox" || self.koCellType() == "radiogroup"; });
        this.koHasColCount = ko.computed(function () { return self.koCellType() == "checkbox" || self.koCellType() == "radiogroup"; });
    }
    public hasError(): boolean {
        this.koHasError(!this.koName());
        return this.koHasError() || this.choicesEditor.hasError();
    }
    public apply() {
        this.column.name = this.koName();
        this.column.title = this.koTitle();
        this.column.cellType = this.koCellType();
        this.column.colCount = this.koColCount();
        this.column.isRequired = this.koIsRequired();
        this.column.hasOther = this.koHasOther();

        this.choicesEditor.onApplyClick();
        this.column.choices = this.choicesEditor.value;
    }
    private getPropertyChoices(propetyName: string): Array<any> {
        var properties = Survey.JsonObject.metaData.getProperties("matrixdropdowncolumn");
        for (var i = 0; i < properties.length; i++) {
            if (properties[i].name == propetyName) return properties[i].choices;
        }
        return [];
    }
}

SurveyPropertyEditorBase.registerEditor("matrixdropdowncolumns", function (): SurveyPropertyEditorBase { return new SurveyPropertyDropdownColumnsEditor(); });