export class SurveyPropertyEditorBase {
    public static defaultEditor: string = "string";
    private static editorRegisteredList = {};
    public static registerEditor(name: string, creator: () => SurveyPropertyEditorBase) {
        SurveyPropertyEditorBase.editorRegisteredList[name] = creator;
    }
    public static createEditor(editorType: string, func: (newValue: any) => any): SurveyPropertyEditorBase {
        var creator = SurveyPropertyEditorBase.editorRegisteredList[editorType];
        if (!creator) creator = SurveyPropertyEditorBase.editorRegisteredList[SurveyPropertyEditorBase.defaultEditor];
        var propertyEditor = creator();
        propertyEditor.onChanged = func;
        return propertyEditor;
    }

    private value_: any = null;
    public options: any = null;
    public onChanged: (newValue: any) => any;
    constructor() {
    }
    public get editorType(): string { throw "editorType is not defined"; }
    public getValueText(value: any): string { return value; }
    public get value(): any { return this.value_; }
    public set value(value: any) {
        value = this.getCorrectedValue(value);
        this.setValueCore(value);
        this.onValueChanged();
    }
    protected setValueCore(value: any) {
        this.value_ = value;
    }
    public setTitle(value: string) { }
    public setObject(value: any) { }
    protected onValueChanged() {
    }
    protected getCorrectedValue(value: any): any {  return value;  }
}
export class SurveyStringPropertyEditor extends SurveyPropertyEditorBase {
    constructor() {
        super();
    }
    public get editorType(): string { return "string"; }
}
export class SurveyDropdownPropertyEditor extends SurveyPropertyEditorBase {
    constructor() {
        super();
    }
    public get editorType(): string { return "dropdown"; }
}
export class SurveyBooleanPropertyEditor extends SurveyPropertyEditorBase {
    constructor() {
        super();
    }
    public get editorType(): string { return "boolean"; }
}
export class SurveyNumberPropertyEditor extends SurveyPropertyEditorBase {
    constructor() {
        super();
    }
    public get editorType(): string { return "number"; }
}

SurveyPropertyEditorBase.registerEditor("string", function (): SurveyPropertyEditorBase { return new SurveyStringPropertyEditor(); });
SurveyPropertyEditorBase.registerEditor("dropdown", function (): SurveyPropertyEditorBase { return new SurveyDropdownPropertyEditor(); });
SurveyPropertyEditorBase.registerEditor("boolean", function (): SurveyPropertyEditorBase { return new SurveyBooleanPropertyEditor(); });
SurveyPropertyEditorBase.registerEditor("number", function (): SurveyPropertyEditorBase { return new SurveyNumberPropertyEditor(); });