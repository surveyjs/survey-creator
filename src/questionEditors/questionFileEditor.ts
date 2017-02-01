import {SurveyQuestionEditorBase, SurveyQuestionEditorTabBase, SurveyQuestionProperties} from "./questionEditorBase";
import * as Survey from "survey-knockout";

export class SurveyQuestionFileEditor extends SurveyQuestionEditorBase {
    constructor(public questionBase: Survey.QuestionBase, onCanShowPropertyCallback: (object: any, property: Survey.JsonObjectProperty) => boolean) {
        super(questionBase, onCanShowPropertyCallback);
    }
    protected addTabs(tabs: Array<SurveyQuestionEditorTabBase>) {
        super.addTabs(tabs);
        tabs.push(new SurveyQuestionEditorFileTabGeneral(this.questionBase, 10, this.properties));
    }
}

export class SurveyQuestionEditorFileTabGeneral extends SurveyQuestionEditorTabBase {
    public hasShowPreview: boolean;
    public hasStoreDataAsText: boolean;
    public hasMaxSize: boolean;
    public hasImageHeight: boolean;
    public hasImageWidth: boolean;

    koShowPreview: any; koStoreDataAsText: any; koMaxSize: any; koImageHeight: any; koImageWidth: any;
    constructor(public questionBase: Survey.QuestionBase, public visibleIndex: number, properties: SurveyQuestionProperties) {
        super(questionBase, visibleIndex, properties);
        this.setUpProperties();
        this.reset();
    }
    public get name(): string { return "fileOptions"; }
    protected setUpProperties() {
        this.hasShowPreview = this.properties.getProperty("showPreview") != null;
        this.hasStoreDataAsText = this.properties.getProperty("storeDataAsText") != null;
        this.hasMaxSize = this.properties.getProperty("maxSize") != null;
        this.hasImageHeight = this.properties.getProperty("imageHeight") != null;
        this.hasImageWidth = this.properties.getProperty("imageWidth") != null;
        this.koShowPreview = ko.observable();
        this.koStoreDataAsText = ko.observable();
        this.koMaxSize = ko.observable();
        this.koImageHeight = ko.observable();
        this.koImageWidth = ko.observable();
    }
    public reset() {
        super.reset();
        if (this.hasShowPreview) this.koShowPreview(this.questionBase["showPreview"]);
        if (this.hasStoreDataAsText) this.koStoreDataAsText(this.questionBase["storeDataAsText"]);
        if (this.hasMaxSize) this.koMaxSize(this.questionBase["maxSize"]);
        if (this.hasImageHeight) this.koImageHeight(this.questionBase["imageHeight"]);
        if (this.hasImageWidth) this.koImageWidth(this.questionBase["imageWidth"]);
    }
    public apply() {
        super.apply();
        if (this.hasShowPreview) this.questionBase["showPreview"] = this.koShowPreview();
        if (this.hasStoreDataAsText) this.questionBase["storeDataAsText"] = this.koStoreDataAsText();
        if (this.hasMaxSize) this.questionBase["maxSize"] = this.koMaxSize();
        if (this.hasImageHeight) this.questionBase["imageHeight"] = this.koImageHeight();
        if (this.hasImageWidth) this.questionBase["imageWidth"] = this.koImageWidth();
    }
}

SurveyQuestionEditorBase.registerEditor("file", function (question: Survey.QuestionBase, onCanShowPropertyCallback: (object: any, property: Survey.JsonObjectProperty) => boolean): SurveyQuestionEditorBase { return new SurveyQuestionFileEditor(question, onCanShowPropertyCallback); });