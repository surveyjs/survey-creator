import {SurveyPropertyItemsEditor} from "./propertyItemsEditor";
import {SurveyPropertyEditorBase} from "./propertyEditorBase";
import {SurveyHelper} from "../surveyHelper";
import {editorLocalization} from "../editorLocalization";
import {SurveyPropertyValidatorsEditor} from "./propertyValidatorsEditor";
import * as Survey from "../surveyjs";

export class SurveyPropertyTextItemsEditor extends SurveyPropertyItemsEditor {
    constructor() {
        super();
    }
    public get editorType(): string { return "textitems"; }
    protected createNewEditorItem(): any {
        var objs = [];
        var items = this.koItems();
        for (var i = 0; i < items.length; i++) {
            objs.push({ name: items[i].koName() });
        }
        var editItem = { koName: ko.observable(SurveyHelper.getNewName(objs, "text")), koTitle: ko.observable() };
        this.createValidatorsEditor(editItem, []);
        return editItem;
    }
    protected createEditorItem(item: any) {
        var editItem = { koName: ko.observable(item.name), koTitle: ko.observable(item.title) };
        this.createValidatorsEditor(editItem, item.validators);
        return editItem;
    }
    protected createItemFromEditorItem(editorItem: any) {
        var itemText = new Survey.MultipleTextItem(editorItem.koName(), editorItem.koTitle());
        itemText.validators = editorItem.validators;
        return itemText;
    }
    private createValidatorsEditor(item: any, validators: Array<any>) {
        item.validators = validators.slice();
        var self = this;
        var onItemChanged = function (newValue: any) { item.validators = newValue; item.koText(self.getText(newValue.length)); };
        var propertyEditor = new SurveyPropertyValidatorsEditor();
        item.editor = propertyEditor;
        propertyEditor.onChanged = (newValue: any) => { onItemChanged(newValue); };
        propertyEditor.object = item;
        propertyEditor.title(editorLocalization.getString("pe.editProperty")["format"]("Validators"));
        propertyEditor.value = item.validators;
        item.koText = ko.observable(this.getText(validators.length));
    }
    private getText(length: number): string {
        return editorLocalization.getString("pe.items")["format"](length);
    }
}

SurveyPropertyEditorBase.registerEditor("textitems", function (): SurveyPropertyEditorBase { return new SurveyPropertyTextItemsEditor(); });