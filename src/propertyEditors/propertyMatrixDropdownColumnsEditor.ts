import * as ko from "knockout";
import {SurveyPropertyItemsEditor} from "./propertyItemsEditor";
import {SurveyPropertyEditorBase} from "./propertyEditorBase";
import {SurveyQuestionEditor} from "../questionEditors/questionEditor";
import {SurveyPropertyItemValuesEditor} from "./propertyItemValuesEditor";
import {editorLocalization} from "../editorLocalization";
import {SurveyNestedPropertyEditor, SurveyNestedPropertyEditorItem} from "./propertyNestedPropertyEditor"
import * as Survey from "survey-knockout";

export class SurveyPropertyDropdownColumnsEditor extends SurveyNestedPropertyEditor {
    constructor() {
        super();
    }
    public get editorType(): string { return "matrixdropdowncolumns"; }
    protected createNewEditorItem(): any { 
        var newColumn = new Survey.MatrixDropdownColumn("", this.options);
        //newColumn.colOwner = TODO set colOwner.
        return new SurveyPropertyMatrixDropdownColumnsItem(newColumn); 
    }
    protected createEditorItem(item: any) { return new SurveyPropertyMatrixDropdownColumnsItem(item, this.options); }
    protected createItemFromEditorItem(editorItem: any) {  return editorItem.column; }
}

export class SurveyPropertyMatrixDropdownColumnsItem extends SurveyNestedPropertyEditorItem {
    koName: any; koTitle: any; koCellType: any;  koIsRequired: any;
    koEditorName: any; koHasError: any; koCanEdit: any; 
    public onShowChoicesClick: any;
    public cellTypeChoices: Array<any>;
    constructor(public column: Survey.MatrixDropdownColumn, public options = null) {
        super();
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
    protected createSurveyQuestionEditor() { return new SurveyQuestionEditor(this.column, null, "matrixdropdowncolumn@" + this.koCellType());; }
    public hasError(): boolean {
        if(super.hasError()) return true;
        this.koHasError(!this.koName());
        return this.koHasError();
    }
    public apply() {
        super.apply();
        this.column.name = this.koName();
        this.column.title = this.koTitle();
        this.column.cellType = this.koCellType();
        this.column.isRequired = this.koIsRequired();
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