import * as ko from "knockout";
import {SurveyPropertyItemsEditor} from "./propertyItemsEditor";
import {SurveyPropertyEditorBase} from "./propertyEditorBase";
import {SurveyQuestionEditor} from "../questionEditors/questionEditor";
import {SurveyPropertyItemValuesEditor} from "./propertyItemValuesEditor";
import {editorLocalization} from "../editorLocalization";
import * as Survey from "survey-knockout";

export class SurveyPropertyDropdownColumnsEditor extends SurveyPropertyItemsEditor {
    koEditItem: any; koIsList: any;
    onEditItemClick: any; onCancelEditItemClick: any;
    columnEditor: SurveyQuestionEditor;
    constructor() {
        super();
        var self = this;
        this.koEditItem = ko.observable(null);
        this.koIsList = ko.observable(true);
        this.koEditItem.subscribe(function (newValue) { 
            if(self.koEditItem() != null) {
                self.columnEditor = new SurveyQuestionEditor(self.koEditItem().editColumn, null, "matrixdropdowncolumn@" + self.koEditItem().koCellType());
            } else {
                if(self.columnEditor) self.columnEditor.apply();
                self.columnEditor = null;
            }
            self.koIsList(self.koEditItem() == null); 
        });
        this.onEditItemClick = function (item) { self.koEditItem(item); };
        this.onCancelEditItemClick = function () { 
            if(self.columnEditor && self.columnEditor.hasError()) return;
            self.koEditItem(null); 
        };
    }
    public get editorType(): string { return "matrixdropdowncolumns"; }
    public hasError(): boolean {
        var result = this.columnEditor != null ? this.columnEditor.hasError() : false;
        for (var i = 0; i < this.koItems().length; i++) {
            result = result || this.koItems()[i].hasError();
        }
        return result;
    }
    protected onBeforeApply() {
        if(this.columnEditor) this.columnEditor.apply();
        super.onBeforeApply();
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
    public editColumn: Survey.MatrixDropdownColumn;
    koName: any; koTitle: any; koCellType: any;  koIsRequired: any;
    koEditorName: any; koHasError: any; koCanEdit: any; 
    public onShowChoicesClick: any;
    public cellTypeChoices: Array<any>;
    constructor(public column: Survey.MatrixDropdownColumn, public options = null) {
        this.editColumn = new Survey.MatrixDropdownColumn(column.name, column.title);
        this.editColumn.colOwner = column.colOwner;
        this.copyColumn(this.column, this.editColumn);
        
        this.cellTypeChoices = this.getPropertyChoices("cellType");
        this.koName = ko.observable(column.name);
        this.koCellType = ko.observable(column.cellType);
        this.koTitle = ko.observable(column.name === column.title ? "" : column.title);
        this.koIsRequired = ko.observable(this.column.isRequired);
        this.koHasError = ko.observable(false);

        var self = this;
        this.koCanEdit = ko.computed(function () { return self.koCellType() != "default"; });
        this.koEditorName = ko.computed(function() { return editorLocalization.getString("pe.columnEdit")["format"](self.koName());});
    }
    public hasError(): boolean {
        this.koHasError(!this.koName());
        return this.koHasError();
    }
    public apply() {
        this.copyColumn(this.editColumn, this.column);
        this.column.name = this.koName();
        this.column.title = this.koTitle();
        this.column.cellType = this.koCellType();
        this.column.isRequired = this.koIsRequired();
    }
    private copyColumn(src: Survey.MatrixDropdownColumn, dest: Survey.MatrixDropdownColumn) {
        dest.hasOther = src.hasOther;
        dest.choices = src.choices;
        dest.colCount = src.colCount;
        dest.optionsCaption = src.optionsCaption;
        dest.choicesOrder = src.choicesOrder;
        dest.inputType = src.inputType;
        dest.placeHolder = src.placeHolder;
        dest.choicesByUrl = src.choicesByUrl;
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