import { Serializer, SurveyModel, Question, QuestionTextModel, QuestionBooleanModel, QuestionMatrixDropdownModel, MatrixDropdownColumn } from "survey-core";
import { CreatorTester } from "./creator-tester";
import { TabTestPlugin } from "../src/components/tabs/test-plugin";
import { PropertyGridEditorBoolean } from "../src/property-grid";
import { PropertyGridModelTester } from "./property-grid/property-grid.base";
import { ThemeTabPlugin } from "../src/components/tabs/theme-plugin";
import { TabTranslationPlugin } from "../src/components/tabs/translation-plugin";
import { TranslationSideBySide } from "../src/components/tabs/translation-side-by-side";

const leftTitles = { classes: { question: { titleLocation: "left" } } };
const twoQuestionsJSON = { pages: [{ name: "page1", elements: [{ type: "text", name: "q1" }, { type: "radiogroup", name: "q2", choices: [1, 2] }] }] };

function getPreviewSurvey(creator: CreatorTester): SurveyModel {
  creator.switchTab("preview");
  return (<TabTestPlugin>creator.getPlugin("preview")).model.survey;
}
function getPropertyGridSurvey(creator: CreatorTester): SurveyModel {
  return creator["designerPropertyGrid"].survey;
}
function getPropertyGridTitleLocations(creator: CreatorTester): Array<string> {
  return getPropertyGridSurvey(creator).getAllQuestions().map((q: Question) => q.getTitleLocation());
}
function getUsualPropertyGridTitleLocations(): Array<string> {
  const creator = new CreatorTester();
  creator.JSON = twoQuestionsJSON;
  creator.selectQuestionByName("q1");
  const res = getPropertyGridTitleLocations(creator);
  creator.dispose();
  return res;
}

describe("Creator: survey property defaults", () => {
  test("The option reaches the designer and Preview surveys only, the JSON follows the designer's defaults", () => {
    const usualTitleLocations = getUsualPropertyGridTitleLocations();
    const creator = new CreatorTester({ surveyOptions: { propertyDefaults: leftTitles } });
    expect(creator.surveyOptions).toEqual({ propertyDefaults: leftTitles });
    creator.JSON = twoQuestionsJSON;
    expect(creator.survey.getQuestionByName("q1").titleLocation).toBe("left");
    expect(creator.survey.getQuestionByName("q2").titleLocation).toBe("left");
    expect(creator.JSON).toEqual(twoQuestionsJSON);

    creator.selectQuestionByName("q1");
    const pgSurvey = getPropertyGridSurvey(creator);
    expect(pgSurvey.getOwnPropertyDefaults()).toBeUndefined();
    expect(pgSurvey.getAllQuestions()[0].titleLocation).toBe("default");
    expect(getPropertyGridTitleLocations(creator)).toEqual(usualTitleLocations);

    const previewSurvey = getPreviewSurvey(creator);
    expect(previewSurvey.getQuestionByName("q1").titleLocation).toBe("left");
    expect(previewSurvey.getQuestionByName("q2").getTitleLocation()).toBe("left");
    creator.dispose();
  });
  test("The option with an onSurveyInstanceSetupHandlers handler attached", () => {
    const usualTitleLocations = getUsualPropertyGridTitleLocations();
    const creator = new CreatorTester({ surveyOptions: { propertyDefaults: leftTitles } });
    const areas: Array<string> = [];
    creator.onSurveyInstanceSetupHandlers.add((_, options) => {
      areas.push(options.area);
    });
    creator.JSON = twoQuestionsJSON;
    expect(areas.indexOf("designer-tab") > -1).toBeTruthy();
    expect(creator.survey.getQuestionByName("q1").titleLocation).toBe("left");
    expect(creator.JSON).toEqual(twoQuestionsJSON);

    creator.selectQuestionByName("q1");
    expect(areas.indexOf("property-grid") > -1).toBeTruthy();
    expect(getPropertyGridSurvey(creator).getOwnPropertyDefaults()).toBeUndefined();
    expect(getPropertyGridTitleLocations(creator)).toEqual(usualTitleLocations);

    const previewSurvey = getPreviewSurvey(creator);
    expect(areas.indexOf("preview-tab") > -1).toBeTruthy();
    expect(previewSurvey.getQuestionByName("q1").titleLocation).toBe("left");
    creator.dispose();
  });
  test("A survey created after the property changes gets the new defaults", () => {
    const creator = new CreatorTester();
    creator.JSON = twoQuestionsJSON;
    expect(creator.survey.getQuestionByName("q1").titleLocation).toBe("default");
    creator.surveyOptions = { propertyDefaults: leftTitles };
    expect(creator.survey.getQuestionByName("q1").titleLocation).toBe("default");
    creator.JSON = twoQuestionsJSON;
    expect(creator.survey.getQuestionByName("q1").titleLocation).toBe("left");
    creator.dispose();
  });
  test("An explicit global default stays in the designer, in the JSON, after copy, conversion and from the toolbox", () => {
    const creator = new CreatorTester({ surveyOptions: { propertyDefaults: leftTitles } });
    creator.JSON = { elements: [{ type: "text", name: "q1", titleLocation: "default" }, { type: "text", name: "q2" }] };
    const q1 = creator.survey.getQuestionByName("q1");
    expect(q1.titleLocation).toBe("default");
    expect(creator.survey.getQuestionByName("q2").titleLocation).toBe("left");
    expect(creator.JSON.pages[0].elements[0].titleLocation).toBe("default");
    expect(creator.JSON.pages[0].elements[1].titleLocation).toBeUndefined();

    const copy = <Question>creator.copyQuestion(q1);
    expect(copy.survey).toBe(creator.survey);
    expect(copy.titleLocation).toBe("default");
    expect(copy.toJSON().titleLocation).toBe("default");
    const copy2 = <Question>creator.copyQuestion(creator.survey.getQuestionByName("q2"));
    expect(copy2.titleLocation).toBe("left");
    expect(copy2.toJSON().titleLocation).toBeUndefined();

    creator.selectQuestionByName("q1");
    creator.convertCurrentQuestion("comment");
    const converted = creator.survey.getQuestionByName("q1");
    expect(converted.getType()).toBe("comment");
    expect(converted.titleLocation).toBe("default");

    // A toolbox click loads the item's JSON into a new element
    creator.clickToolboxItem({ type: "text", titleLocation: "default" });
    const added = <Question>creator.selectedElement;
    expect(added.survey).toBe(creator.survey);
    expect(added.titleLocation).toBe("default");

    // Drag and drop loads the JSON it is given the same way. Known gap: getJSONForNewElement() serializes a renamed
    // element while it is in the temporary survey of updateNewElementExpressions, so it drops such a value.
    const dragged = creator.dragDropSurveyElements["createElementFromJson"]({ type: "text", name: "q10", titleLocation: "default" });
    creator.survey.pages[0].addElement(dragged);
    expect(dragged.titleLocation).toBe("default");
    expect(creator.JSON.pages[0].elements.filter(el => el.name === "q10")[0].titleLocation).toBe("default");
    creator.dispose();
  });
  test("The reset button uses the designer survey's default", () => {
    Serializer.addProperty("question", { name: "pdText", default: "global", category: "general" });
    try {
      const creator = new CreatorTester({ surveyOptions: { propertyDefaults: { classes: { question: { pdText: "own" } } } } });
      creator.JSON = { elements: [{ type: "text", name: "q1" }] };
      const q1 = creator.selectQuestionByName("q1");
      expect(q1["pdText"]).toBe("own");
      const editor = <QuestionTextModel>getPropertyGridSurvey(creator).getQuestionByName("pdText");
      const resetAction = editor.inputActionsContainer.getActionById("reset");
      expect(resetAction.enabled).toBeFalsy();
      q1["pdText"] = "global";
      expect(resetAction.enabled).toBeTruthy();
      expect(creator.JSON.pages[0].elements[0].pdText).toBe("global");
      resetAction.action();
      expect(q1["pdText"]).toBe("own");
      expect(resetAction.enabled).toBeFalsy();
      expect(creator.JSON.pages[0].elements[0].pdText).toBeUndefined();
      creator.dispose();
    } finally {
      Serializer.removeProperty("question", "pdText");
    }
  });
  test("The boolean editors' default choice is the designer survey's default", () => {
    Serializer.addProperty("question", { name: "pdBool:boolean", choices: [{ value: "first" }, { value: "second" }], default: "first", category: "general" });
    Serializer.addProperty("question", { name: "pdToggle:switchToggle", choices: [{ value: "first" }, { value: "second" }], default: "first", category: "general" });
    try {
      const creator = new CreatorTester({ surveyOptions: { propertyDefaults: { classes: { question: { pdBool: "second", pdToggle: "second" } } } } });
      creator.JSON = { elements: [{ type: "text", name: "q1" }] };
      const q1 = creator.selectQuestionByName("q1");
      expect(q1["pdBool"]).toBe("second");
      ["pdBool", "pdToggle"].forEach(name => {
        const editor = <QuestionBooleanModel>getPropertyGridSurvey(creator).getQuestionByName(name);
        expect(editor.getType()).toBe("boolean");
        expect(editor.valueTrue).toBe("second");
        expect(editor.valueFalse).toBe("first");
        expect(editor.value).toBe("second");
        expect(editor.booleanValue).toBe(true);
      });
      creator.dispose();
    } finally {
      Serializer.removeProperty("question", "pdBool");
      Serializer.removeProperty("question", "pdToggle");
    }
  });
  test("The number editor's cleared value is the designer survey's default", () => {
    Serializer.addProperty("question", { name: "pdNumber:number", default: 5, category: "general" });
    try {
      const creator = new CreatorTester({ surveyOptions: { propertyDefaults: { classes: { question: { pdNumber: 3 } } } } });
      creator.JSON = { elements: [{ type: "text", name: "q1" }] };
      const q1 = creator.selectQuestionByName("q1");
      expect(q1["pdNumber"]).toBe(3);
      const editor = getPropertyGridSurvey(creator).getQuestionByName("pdNumber");
      editor.value = 7;
      expect(q1["pdNumber"]).toBe(7);
      expect(creator.JSON.pages[0].elements[0].pdNumber).toBe(7);
      editor.value = "";
      expect(q1["pdNumber"]).toBe(3);
      expect(creator.JSON.pages[0].elements[0].pdNumber).toBeUndefined();
      creator.dispose();
    } finally {
      Serializer.removeProperty("question", "pdNumber");
    }
  });
  test("The number editor of a matrix column uses its cell question's default in the designer survey", () => {
    const creator = new CreatorTester({ surveyOptions: { propertyDefaults: { classes: { comment: { rows: 2 } } } } });
    creator.JSON = { elements: [{ type: "matrixdropdown", name: "m1", rows: ["r1"], columns: [{ name: "col1", cellType: "comment" }] }] };
    const column = (<QuestionMatrixDropdownModel>creator.survey.getQuestionByName("m1")).columns[0];
    expect(column["rows"]).toBe(2);
    const propertyGrid = new PropertyGridModelTester(column, creator);
    const editor = propertyGrid.survey.getQuestionByName("rows");
    expect(editor.value).toBe(2);
    editor.value = 7;
    expect(column["rows"]).toBe(7);
    editor.value = "";
    expect(column["rows"]).toBe(2);
    expect(creator.JSON.pages[0].elements[0].columns[0].rows).toBeUndefined();
    creator.dispose();
  });
  test("The boolean editor of a matrix column reads its cell question's default, also without propertyDefaults", () => {
    Serializer.addProperty("text", { name: "pdColBool:boolean", choices: [{ value: "first" }, { value: "second" }], default: "second" });
    try {
      const column = new MatrixDropdownColumn("col1");
      column.cellType = "text";
      const prop = Serializer.findProperty("text", "pdColBool");
      const json = new PropertyGridEditorBoolean().getJSON(column, prop, undefined);
      expect(json.valueTrue).toBe("second");
      expect(json.valueFalse).toBe("first");
    } finally {
      Serializer.removeProperty("text", "pdColBool");
    }
  });
  test("addCollectionItemsJson and the JSON tab keep an explicit global default", () => {
    const creator = new CreatorTester({ surveyOptions: { propertyDefaults: leftTitles } });
    creator.JSON = { elements: [{ type: "text", name: "q1", titleLocation: "default" }] };
    creator.addCollectionItemsJson({ pages: [{ name: "page2", elements: [{ type: "text", name: "q5", titleLocation: "default" }, { type: "text", name: "q6" }] }] });
    expect(creator.survey.getQuestionByName("q5").titleLocation).toBe("default");
    expect(creator.survey.getQuestionByName("q6").titleLocation).toBe("left");
    expect(creator.JSON.pages[1].elements[0].titleLocation).toBe("default");
    expect(creator.JSON.pages[1].elements[1].titleLocation).toBeUndefined();

    creator.switchTab("json");
    expect(creator.viewType).toBe("json");
    const json = creator.getSurveyJSON();
    expect(json.pages[0].elements[0].titleLocation).toBe("default");
    expect(json.pages[1].elements[0].titleLocation).toBe("default");
    expect(json.pages[1].elements[1].titleLocation).toBeUndefined();
    creator.dispose();
  });
  test("The Creator's own surveys get no defaults", () => {
    const creator = new CreatorTester({ surveyOptions: { propertyDefaults: leftTitles } });
    const areas: { [area: string]: boolean } = {};
    creator.onSurveyInstanceSetupHandlers.add((_, options) => {
      areas[options.area] = areas[options.area] || !!options.survey.getOwnPropertyDefaults();
    });
    creator.JSON = { elements: [{ type: "text", name: "q1", visibleIf: "{q2} = 1" }, { type: "text", name: "q2" }] };
    creator.selectQuestionByName("q1");
    creator.switchTab("preview");
    creator.switchTab("logic");
    creator.switchTab("translation");
    expect(areas["designer-tab"]).toBe(true);
    expect(areas["preview-tab"]).toBe(true);
    const ownAreas = Object.keys(areas).filter(area => area !== "designer-tab" && area !== "preview-tab");
    expect(ownAreas.indexOf("property-grid") > -1).toBeTruthy();
    expect(ownAreas.length > 3).toBeTruthy();
    ownAreas.forEach(area => expect({ area: area, hasDefaults: areas[area] }).toEqual({ area: area, hasDefaults: false }));
    creator.dispose();
  });
  test("The Themes tab survey gets the defaults, its own property grid does not", () => {
    const creator = new CreatorTester({ showThemeTab: true, surveyOptions: { propertyDefaults: leftTitles } });
    const areas: { [area: string]: boolean } = {};
    creator.onSurveyInstanceSetupHandlers.add((_, options) => {
      areas[options.area] = areas[options.area] || !!options.survey.getOwnPropertyDefaults();
    });
    creator.JSON = { elements: [{ type: "text", name: "q1", titleLocation: "default" }, { type: "text", name: "q2" }] };
    creator.switchTab("theme");
    const themeSurvey = (<ThemeTabPlugin>creator.getPlugin("theme")).model.survey;
    expect(themeSurvey).not.toBe(creator.survey);
    expect(themeSurvey.getOwnPropertyDefaults().classes).toEqual(leftTitles.classes);
    expect(themeSurvey.getQuestionByName("q1").titleLocation).toBe("default");
    expect(themeSurvey.getQuestionByName("q2").titleLocation).toBe("left");
    expect(areas["theme-tab"]).toBe(true);
    const ownAreas = Object.keys(areas).filter(area => area.indexOf("theme-tab:") === 0);
    expect(ownAreas.length > 0).toBeTruthy();
    ownAreas.forEach(area => expect({ area: area, hasDefaults: areas[area] }).toEqual({ area: area, hasDefaults: false }));
    creator.dispose();
  });
  test("The side-by-side Translation panes get the defaults, the tab's settings survey does not", () => {
    const creator = new CreatorTester({ showTranslationTab: true, translationMode: "sideBySide", surveyOptions: { propertyDefaults: leftTitles } });
    const areas: { [area: string]: boolean } = {};
    creator.onSurveyInstanceSetupHandlers.add((_, options) => {
      areas[options.area] = areas[options.area] || !!options.survey.getOwnPropertyDefaults();
    });
    creator.JSON = {
      locale: "de",
      elements: [{ type: "text", name: "q1", titleLocation: "default", title: { default: "Q1", de: "F1" } }, { type: "text", name: "q2" }]
    };
    creator.switchTab("translation");
    const model = <TranslationSideBySide>(<TabTranslationPlugin>creator.getPlugin("translation")).model;
    expect(model.targetSurvey).toBeTruthy();
    [model.sourceSurvey, model.targetSurvey].forEach(survey => {
      expect(survey).not.toBe(creator.survey);
      expect(survey.getOwnPropertyDefaults().classes).toEqual(leftTitles.classes);
      expect(survey.getQuestionByName("q1").titleLocation).toBe("default");
      expect(survey.getQuestionByName("q2").titleLocation).toBe("left");
    });
    expect(areas["translation-tab:source-survey"]).toBe(true);
    expect(areas["translation-tab:target-survey"]).toBe(true);
    expect(areas["translation-tab:language-list"]).toBe(false);
    // Translating in a pane changes the designer survey only, the JSON keeps following the designer's defaults
    model.targetSurvey.getQuestionByName("q2").locTitle.text = "F2";
    expect(creator.survey.getQuestionByName("q2").locTitle.getLocaleText("de")).toBe("F2");
    expect(creator.JSON.pages[0].elements[1].titleLocation).toBeUndefined();
    expect(creator.JSON.pages[0].elements[0].titleLocation).toBe("default");
    creator.dispose();
  });
  test("creator.dispose() releases the designer survey's defaults, creator.JSON stays readable", () => {
    const creator = new CreatorTester({ surveyOptions: { propertyDefaults: leftTitles } });
    creator.JSON = twoQuestionsJSON;
    const survey = creator.survey;
    expect(survey.getOwnPropertyDefaults()).toBeTruthy();
    creator.dispose();
    expect(survey.getOwnPropertyDefaults()).toBeUndefined();
    expect(creator.JSON).toEqual(twoQuestionsJSON);
  });
  test("surveyOptions runtimeSettings reach the surveys that show the user's survey, not the property grid", () => {
    const creator = new CreatorTester({
      showThemeTab: true, showTranslationTab: true, translationMode: "sideBySide",
      surveyOptions: { runtimeSettings: { comparator: { caseSensitive: true } } }
    });
    creator.JSON = { locale: "de", elements: [{ type: "text", name: "q1", title: { default: "Q1", de: "F1" } }] };
    const isCaseSensitive = (survey: SurveyModel): boolean => survey.runtimeSettings.comparator.caseSensitive;
    expect(isCaseSensitive(creator.survey)).toBe(true);
    creator.selectQuestionByName("q1");
    expect(isCaseSensitive(getPropertyGridSurvey(creator))).toBe(false);
    expect(isCaseSensitive(getPreviewSurvey(creator))).toBe(true);
    creator.switchTab("theme");
    expect(isCaseSensitive((<ThemeTabPlugin>creator.getPlugin("theme")).model.survey)).toBe(true);
    creator.switchTab("translation");
    const model = <TranslationSideBySide>(<TabTranslationPlugin>creator.getPlugin("translation")).model;
    expect(model.targetSurvey).toBeTruthy();
    expect(isCaseSensitive(model.sourceSurvey)).toBe(true);
    expect(isCaseSensitive(model.targetSurvey)).toBe(true);
    creator.dispose();
  });
  test("surveyOptions runtimeSettings: an expression in Preview compares case-sensitively", () => {
    const json = { elements: [{ type: "text", name: "q1" }, { type: "text", name: "q2", visibleIf: "{q1} = 'abc'" }] };
    const usualCreator = new CreatorTester();
    usualCreator.JSON = json;
    const usualPreview = getPreviewSurvey(usualCreator);
    usualPreview.setValue("q1", "ABC");
    expect(usualPreview.getQuestionByName("q2").isVisible).toBe(true);
    usualCreator.dispose();

    const creator = new CreatorTester({ surveyOptions: { runtimeSettings: { comparator: { caseSensitive: true } } } });
    creator.JSON = json;
    const preview = getPreviewSurvey(creator);
    preview.setValue("q1", "ABC");
    expect(preview.getQuestionByName("q2").isVisible).toBe(false);
    preview.setValue("q1", "abc");
    expect(preview.getQuestionByName("q2").isVisible).toBe(true);
    creator.dispose();
  });
  test("surveyOptions events fire on the Preview survey, not on the property grid's survey", () => {
    const senders: Array<SurveyModel> = [];
    const creator = new CreatorTester({ surveyOptions: { events: { onValueChanged: (sender: SurveyModel) => { senders.push(sender); } } } });
    creator.JSON = twoQuestionsJSON;
    const q1 = creator.selectQuestionByName("q1");
    const pgSurvey = getPropertyGridSurvey(creator);
    pgSurvey.getQuestionByName("title").value = "New title";
    expect(q1.title).toBe("New title");
    expect(senders).toHaveLength(0);

    const previewSurvey = getPreviewSurvey(creator);
    previewSurvey.setValue("q1", "a");
    expect(senders).toHaveLength(1);
    expect(senders[0]).toBe(previewSurvey);
    creator.dispose();
  });
  test("addCollectionItemsJson and the JSON tab do not run surveyOptions events, they keep the defaults", () => {
    // onQuestionCreated fires while a survey loads its JSON (onPageAdded does not fire while loading), so a temporary
    // survey that got the events would call the handler with itself as the sender
    const senders: Array<SurveyModel> = [];
    const events = { onQuestionCreated: (sender: SurveyModel) => { senders.push(sender); } };
    const creator = new CreatorTester({ surveyOptions: { propertyDefaults: leftTitles, events: events } });
    creator.JSON = { elements: [{ type: "text", name: "q1", titleLocation: "default" }] };
    expect(senders.length > 0).toBe(true);
    expect(senders.filter(sender => sender !== creator.survey)).toHaveLength(0);

    creator.addCollectionItemsJson({ pages: [{ name: "page2", elements: [{ type: "text", name: "q5", titleLocation: "default" }, { type: "text", name: "q6" }] }] });
    expect(senders.filter(sender => sender !== creator.survey)).toHaveLength(0);
    expect(creator.JSON.pages[1].elements[0].titleLocation).toBe("default");
    expect(creator.JSON.pages[1].elements[1].titleLocation).toBeUndefined();

    creator.switchTab("json");
    expect(creator.viewType).toBe("json");
    const json = creator.getSurveyJSON();
    expect(senders.filter(sender => sender !== creator.survey)).toHaveLength(0);
    expect(json.pages[0].elements[0].titleLocation).toBe("default");
    expect(json.pages[1].elements[0].titleLocation).toBe("default");
    expect(json.pages[1].elements[1].titleLocation).toBeUndefined();
    // The Creator's object is not changed: the next designer survey still gets the events
    expect(Object.keys(creator.surveyOptions)).toEqual(["propertyDefaults", "events"]);
    expect(creator.surveyOptions.events).toBe(events);
    senders.length = 0;
    // On the JSON tab creator.JSON only sets the text, the designer survey is rebuilt from the designer tab
    creator.switchTab("designer");
    creator.JSON = { elements: [{ type: "text", name: "q1" }] };
    expect(senders.length > 0).toBe(true);
    expect(senders.filter(sender => sender !== creator.survey)).toHaveLength(0);
    creator.dispose();
  });
  test("Without surveyOptions every survey is created without options", () => {
    const hasOwnState = (survey: SurveyModel): boolean => !!survey.getOwnRuntimeSettings() || !!survey.getOwnPropertyDefaults();
    [false, true].forEach(withHandler => {
      const creator = new CreatorTester({ showThemeTab: true, showTranslationTab: true, translationMode: "sideBySide" });
      const passedOptions: Array<any> = [];
      const getOptions = creator["getSurveyOptionsByArea"].bind(creator);
      creator["getSurveyOptionsByArea"] = (area: string): any => {
        const res = getOptions(area);
        passedOptions.push(res);
        return res;
      };
      const areas: { [area: string]: boolean } = {};
      if (withHandler) {
        creator.onSurveyInstanceSetupHandlers.add((_, options) => {
          areas[options.area] = areas[options.area] || hasOwnState(options.survey);
        });
      }
      creator.JSON = { locale: "de", elements: [{ type: "text", name: "q1", title: { default: "Q1", de: "F1" } }] };
      creator.selectQuestionByName("q1");
      const previewSurvey = getPreviewSurvey(creator);
      creator.switchTab("theme");
      creator.switchTab("translation");
      creator.addCollectionItemsJson({ pages: [{ name: "page2", elements: [{ type: "text", name: "q5" }] }] });
      creator.switchTab("json");
      creator.getSurveyJSON();
      expect(passedOptions.length > 5).toBe(true);
      passedOptions.forEach(options => expect(options).toBeUndefined());
      expect(hasOwnState(creator.survey)).toBe(false);
      expect(hasOwnState(previewSurvey)).toBe(false);
      expect(hasOwnState(getPropertyGridSurvey(creator))).toBe(false);
      if (withHandler) {
        expect(Object.keys(areas).length > 5).toBe(true);
        Object.keys(areas).forEach(area => expect({ area: area, hasOwnState: areas[area] }).toEqual({ area: area, hasOwnState: false }));
      }
      creator.dispose();
    });
  });
});
