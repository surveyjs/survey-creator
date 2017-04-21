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
    constructor() {
        super();
        var self = this;
        this.koEditItem = ko.observable(null);
        this.koIsList = ko.observable(true);
        this.koEditItem.subscribe(function (newValue) { 
            self.koIsList(self.koEditItem() == null); 
        });
        this.onEditItemClick = function (item) { self.koEditItem(item); };
        this.onCancelEditItemClick = function () { 
            var editItem = self.koEditItem();
            if(editItem.itemEditor && editItem.itemEditor.hasError()) return;
            self.koEditItem(null); 
        };
    }
    public get editorType(): string { return "matrixdropdowncolumns"; }
    public hasError(): boolean {
        var result = false;
        for (var i = 0; i < this.koItems().length; i++) {
            result = result || this.koItems()[i].hasError();
        }
        return result;
    }
    protected onBeforeApply() {
        super.onBeforeApply();
    }
    protected createNewEditorItem(): any { 
        var newColumn = new Survey.MatrixDropdownColumn("", this.options);
        //newColumn.colOwner = TODO set colOwner.
        return new SurveyPropertyMatrixDropdownColumnsItem(newColumn); 
    }
    protected createEditorItem(item: any) { return new SurveyPropertyMatrixDropdownColumnsItem(item, this.options); }
    protected createItemFromEditorItem(editorItem: any) {
        var columItem = <SurveyPropertyMatrixDropdownColumnsItem>editorItem;
        columItem.apply();
        return columItem.column;
    }
}

export class SurveyPropertyMatrixDropdownColumnsItem {
    private itemEditorValue: SurveyQuestionEditor;
    koName: any; koTitle: any; koCellType: any;  koIsRequired: any;
    koEditorName: any; koHasError: any; koCanEdit: any; 
    public onShowChoicesClick: any;
    public cellTypeChoices: Array<any>;
    constructor(public column: Survey.MatrixDropdownColumn, public options = null) {
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
    public get itemEditor(): SurveyQuestionEditor {
        if(!this.itemEditorValue) this.itemEditorValue = new SurveyQuestionEditor(this.column, null, "matrixdropdowncolumn@" + this.koCellType());
        return this.itemEditorValue;
    }
    public hasError(): boolean {
        if(this.itemEditorValue && this.itemEditorValue.hasError()) return true;
        this.koHasError(!this.koName());
        return this.koHasError();
    }
    public apply() {
        this.column.name = this.koName();
        this.column.title = this.koTitle();
        this.column.cellType = this.koCellType();
        this.column.isRequired = this.koIsRequired();
        if(this.itemEditorValue) this.itemEditorValue.apply();
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