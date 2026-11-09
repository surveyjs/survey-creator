import { ComponentCollection, PanelModel, QuestionMatrixDynamicModel, QuestionPanelDynamicModel, QuestionTextModel, SurveyModel } from "survey-core";
import { PropertyGridModelTester } from "./property-grid.base";
import { CreatorTester } from "../creator-tester";
import { TabTranslationPlugin } from "../../src/components/tabs/translation-plugin";
import { UIPreset } from "../../src/ui-presets-creator/presets";
import { Advanced, Basic } from "../../src/ui-presets";
import { editorLocalization } from "../../src/editorLocalization";

const panelJson = (extra?: any): any => Object.assign({
  pages: [{ name: "page1", elements: [
    { type: "panel", name: "panel1", elements: [{ type: "text", name: "street" }] },
    { type: "text", name: "q1" }
  ] }]
}, extra || {});

const valueNameHelp = "The questions inside this panel or page store their values in an object under this key in survey results." +
  " If you leave it empty, their values are stored with the values of the enclosing panel or page (or at the top level), unless" +
  " the survey's \"Store panel and page values in objects\" setting nests every panel or page under its name. When that setting" +
  " is \"Never (flat data)\", the key is kept but ignored. The key is not available inside a dynamic panel, a matrix detail" +
  " section, or a composite question, whose entries keep flat data.";

const dataNestingHelp = "Specifies which panels and pages store their questions' values in an object." +
  " \"Panels and pages with a data key\" nests only the panels and pages whose data key is set. \"Every panel\"," +
  " \"Every page\", and \"Every panel and page\" also nest the panels or pages without a data key, under their names." +
  " \"Never (flat data)\" ignores every data key and stores all values at the top level. Changing this setting" +
  " does not move data you have already collected.";

describe("property grid strings: panel and page valueName, survey dataNesting (nested data, survey-library #12233)", () => {
  test("a panel's and a page's valueName is the data key, a question's is still the join identifier", () => {
    expect(editorLocalization.getPropertyNameInEditor("panel", "valueName")).toBe("Data key");
    expect(editorLocalization.getPropertyNameInEditor("page", "valueName")).toBe("Data key");
    expect(editorLocalization.getPropertyNameInEditor("text", "valueName")).toBe("Join identifier");
    expect(editorLocalization.getPropertyHelpInEditor("panel", "valueName")).toBe(valueNameHelp);
    expect(editorLocalization.getPropertyHelpInEditor("page", "valueName")).toBe(valueNameHelp);
    expect(editorLocalization.getPropertyHelpInEditor("text", "valueName").indexOf("A join identifier")).toBe(0);
  });
  test("the survey's dataNesting has a title, a help text and a text per choice", () => {
    expect(editorLocalization.getPropertyNameInEditor("survey", "dataNesting")).toBe("Store panel and page values in objects");
    expect(editorLocalization.getPropertyHelpInEditor("survey", "dataNesting")).toBe(dataNestingHelp);
    expect(["auto", "none", "panel", "page", "panelAndPage"].map(val => editorLocalization.getPropertyValueInEditor("dataNesting", val)))
      .toEqual(["Panels and pages with a data key", "Never (flat data)", "Every panel", "Every page", "Every panel and page"]);
  });
});

describe("property grid: panel and page valueName, survey dataNesting (nested data, survey-library #12233)", () => {
  test("a panel and a page show valueName in the Data tab, a question still shows the join identifier", () => {
    const survey = new SurveyModel(panelJson());
    [survey.getPanelByName("panel1"), survey.pages[0]].forEach(container => {
      const editor = new PropertyGridModelTester(container).survey.getQuestionByName("valueName");
      expect(editor, container.getType()).toBeTruthy();
      expect(editor.parent.name, container.getType()).toBe("data");
      expect(editor.title, container.getType()).toBe("Data key");
      expect(editor.description, container.getType()).toBe(valueNameHelp);
    });
    const editor = new PropertyGridModelTester(survey.getQuestionByName("q1")).survey.getQuestionByName("valueName");
    expect(editor.title).toBe("Join identifier");
  });
  test("the survey shows dataNesting in the Data tab with five choices, \"auto\" by default", () => {
    const creator = new CreatorTester();
    creator.JSON = panelJson();
    creator.selectElement(creator.survey);
    const editor = creator.propertyGrid.getQuestionByName("dataNesting");
    expect(editor).toBeTruthy();
    expect(editor.parent.name).toBe("data");
    const names = editor.parent.elements.map(el => el.name);
    expect(names.indexOf("dataNesting")).toBe(names.indexOf("clearInvisibleValues") + 1);
    expect(editor.title).toBe("Store panel and page values in objects");
    expect(editor.description).toBe(dataNestingHelp);
    expect(editor.value).toBe("auto");
    expect(editor.choices.map(c => c.value)).toEqual(["auto", "none", "panel", "page", "panelAndPage"]);
    expect(editor.choices.map(c => c.text)).toEqual([
      "Panels and pages with a data key", "Never (flat data)", "Every panel", "Every page", "Every panel and page"
    ]);
    editor.value = "panel";
    expect(creator.survey.dataNesting).toBe("panel");
    expect(creator.JSON.dataNesting).toBe("panel");
    editor.value = "auto";
    expect(creator.JSON.dataNesting).toBeUndefined();
  });
  test("a panel valueName set in the grid goes to the JSON and is made valid as a question's is", () => {
    const creator = new CreatorTester();
    creator.JSON = panelJson();
    const panel = creator.survey.getPanelByName("panel1");
    creator.selectElement(panel);
    const editor = creator.propertyGrid.getQuestionByName("valueName");
    editor.value = "address";
    expect(panel.valueName).toBe("address");
    expect(creator.JSON.pages[0].elements[0].valueName).toBe("address");
    const question = new QuestionTextModel("q");
    question.valueName = " {a b} ";
    editor.value = " {a b} ";
    expect(panel.valueName).toBe(question.valueName);
    expect(panel.valueName).toBe("a b");
    // D11: a dotted key is a literal key
    editor.value = "a.b";
    expect(creator.JSON.pages[0].elements[0].valueName).toBe("a.b");
  });
  // A panel inside a dynamic panel's template or a matrix detail panel nests by its valueName
  // (survey-library records nesting, RN3), so the grid shows the property there.
  test("valueName is shown for a panel inside a dynamic panel's template and a matrix detail panel", () => {
    const creator = new CreatorTester();
    creator.JSON = {
      elements: [
        { type: "paneldynamic", name: "pd", templateElements: [
          { type: "panel", name: "pin", elements: [{ type: "panel", name: "pin2", elements: [{ type: "text", name: "q1" }] }] }] },
        { type: "matrixdynamic", name: "m", rowCount: 1, detailPanelMode: "underRow", columns: [{ name: "c1" }],
          detailElements: [{ type: "panel", name: "din", elements: [{ type: "text", name: "q2" }] }] },
        { type: "panel", name: "top", elements: [{ type: "text", name: "q3" }] }
      ]
    };
    const isEditorVisible = (panel: PanelModel): boolean => {
      creator.selectElement(panel);
      expect(creator.selectedElement).toBe(panel);
      const editor = creator.propertyGrid.getQuestionByName("valueName");
      return !!editor && editor.isVisible;
    };
    expect(isEditorVisible(creator.survey.getPanelByName("top")), "top").toBe(true);
    const template = (<QuestionPanelDynamicModel>creator.survey.getQuestionByName("pd")).template;
    const pin = <PanelModel>template.getElementByName("pin");
    expect(isEditorVisible(pin), "pin").toBe(true);
    expect(isEditorVisible(<PanelModel>pin.getElementByName("pin2")), "pin2").toBe(true);
    const row = (<QuestionMatrixDynamicModel>creator.survey.getQuestionByName("m")).visibleRows[0];
    row.showDetailPanel();
    expect(isEditorVisible(<PanelModel>row.detailPanel.getElementByName("din")), "din").toBe(true);
  });
  test("valueName is hidden for a panel inside a composite's content", () => {
    ComponentCollection.Instance.add({ name: "nestedaddress", elementsJSON: [
      { type: "panel", name: "cin", elements: [{ type: "text", name: "cq" }] }
    ] });
    try {
      const creator = new CreatorTester();
      creator.JSON = { elements: [{ type: "nestedaddress", name: "comp" }] };
      const comp: any = creator.survey.getQuestionByName("comp");
      const inner = <PanelModel>comp.contentPanel.getElementByName("cin");
      expect(inner).toBeTruthy();
      creator.selectElement(inner);
      expect(creator.selectedElement).toBe(inner);
      const editor = creator.propertyGrid.getQuestionByName("valueName");
      expect(!!editor && editor.isVisible).toBe(false);
    } finally {
      ComponentCollection.Instance.clear();
    }
  });
  test("onPropertyShowing can hide valueName and dataNesting", () => {
    const creator = new CreatorTester();
    creator.onPropertyShowing.add((_, options) => {
      if (["valueName", "dataNesting"].indexOf(options.property.name) > -1 && options.element.getType() !== "text") {
        options.show = false;
      }
    });
    creator.JSON = panelJson();
    const isShown = (name: string): boolean => {
      const editor = creator.propertyGrid.getQuestionByName(name);
      return !!editor && editor.isVisible;
    };
    creator.selectElement(creator.survey.getPanelByName("panel1"));
    expect(isShown("valueName"), "panel").toBe(false);
    creator.selectElement(creator.survey.pages[0]);
    expect(isShown("valueName"), "page").toBe(false);
    creator.selectElement(creator.survey);
    expect(isShown("dataNesting"), "survey").toBe(false);
    creator.selectElement(creator.survey.getQuestionByName("q1"));
    expect(isShown("valueName"), "question").toBe(true);
  });
  test("in \"panel\" mode a panel without valueName shows its name as the placeholder and follows a rename", () => {
    const creator = new CreatorTester();
    creator.JSON = panelJson({ dataNesting: "panel" });
    const panel = creator.survey.getPanelByName("panel1");
    creator.selectElement(panel);
    const editor = <QuestionTextModel>creator.propertyGrid.getQuestionByName("valueName");
    expect(editor.renderedPlaceholder).toBe("panel1");
    creator.propertyGrid.getQuestionByName("name").value = "address";
    expect(panel.name).toBe("address");
    expect(editor.renderedPlaceholder, "renamed").toBe("address");
    creator.selectElement(creator.survey.pages[0]);
    const pageEditor = <QuestionTextModel>creator.propertyGrid.getQuestionByName("valueName");
    expect(pageEditor.renderedPlaceholder, "a page does not nest in \"panel\" mode").toBeFalsy();
  });
  test("in \"page\" mode a page without valueName shows its name as the placeholder and follows a rename", () => {
    const creator = new CreatorTester();
    creator.JSON = panelJson({ dataNesting: "page" });
    const page = creator.survey.pages[0];
    creator.selectElement(page);
    const editor = <QuestionTextModel>creator.propertyGrid.getQuestionByName("valueName");
    expect(editor.renderedPlaceholder).toBe("page1");
    page.name = "step1";
    expect(editor.renderedPlaceholder, "renamed").toBe("step1");
    creator.selectElement(creator.survey.getPanelByName("panel1"));
    const panelEditor = <QuestionTextModel>creator.propertyGrid.getQuestionByName("valueName");
    expect(panelEditor.renderedPlaceholder, "a panel does not nest in \"page\" mode").toBeFalsy();
  });
  test("in \"auto\" and \"none\" modes the placeholder is the static one; it follows a dataNesting change", () => {
    const creator = new CreatorTester();
    creator.JSON = panelJson({ dataNesting: "none" });
    const panel = creator.survey.getPanelByName("panel1");
    creator.selectElement(panel);
    const editor = <QuestionTextModel>creator.propertyGrid.getQuestionByName("valueName");
    expect(editor.renderedPlaceholder, "none").toBeFalsy();
    creator.survey.dataNesting = "panelAndPage";
    expect(editor.renderedPlaceholder, "panelAndPage").toBe("panel1");
    creator.survey.dataNesting = "auto";
    expect(editor.renderedPlaceholder, "auto").toBeFalsy();
  });
  test("after another selection, the live editor follows dataNesting and the old one lets go of its container", () => {
    const creator = new CreatorTester();
    creator.JSON = panelJson({ dataNesting: "panelAndPage" });
    const panel = creator.survey.getPanelByName("panel1");
    creator.selectElement(panel);
    const oldEditor = <QuestionTextModel>creator.propertyGrid.getQuestionByName("valueName");
    creator.selectElement(creator.survey.pages[0]);
    const editor = <QuestionTextModel>creator.propertyGrid.getQuestionByName("valueName");
    expect(editor.renderedPlaceholder).toBe("page1");
    panel.name = "address";
    expect(oldEditor.isDisposed).toBe(true);
    expect(oldEditor.placeholder, "a disposed editor is not updated").toBe("panel1");
    creator.survey.dataNesting = "panel";
    expect(editor.renderedPlaceholder, "the page does not nest in \"panel\" mode").toBeFalsy();
    creator.survey.dataNesting = "page";
    expect(editor.renderedPlaceholder).toBe("page1");
  });
  test("undo and redo of valueName and dataNesting", () => {
    const creator = new CreatorTester();
    creator.JSON = panelJson();
    const panel = creator.survey.getPanelByName("panel1");
    creator.selectElement(panel);
    creator.propertyGrid.getQuestionByName("valueName").value = "address";
    creator.selectElement(creator.survey);
    creator.propertyGrid.getQuestionByName("dataNesting").value = "none";
    expect(creator.JSON.dataNesting).toBe("none");
    creator.undo();
    expect(creator.survey.dataNesting).toBe("auto");
    creator.undo();
    expect(panel.valueName).toBeFalsy();
    creator.redo();
    expect(panel.valueName).toBe("address");
    creator.redo();
    expect(creator.survey.dataNesting).toBe("none");
  });
  test("valueName is not a localizable string: the translation tab does not show it", () => {
    const creator = new CreatorTester();
    creator.JSON = {
      pages: [{ name: "page1", valueName: "step1", elements: [
        { type: "panel", name: "panel1", valueName: "address", title: "Address", elements: [{ type: "text", name: "street" }] }
      ] }]
    };
    const tabTranslation = new TabTranslationPlugin(creator);
    tabTranslation.activate();
    const translation = tabTranslation.model;
    translation.showAllStrings = true;
    translation.reset();
    const names: Array<string> = [];
    const collect = (group: any): void => {
      group.locItems.forEach((item: any) => names.push(item.name));
      group.groups.forEach((child: any) => collect(child));
    };
    collect(translation.root);
    expect(names.indexOf("title"), "the panel title is there").toBeGreaterThan(-1);
    expect(names.indexOf("valueName")).toBe(-1);
    expect(creator.survey.pages[0].getLocalizableString("valueName")).toBeFalsy();
  });
  test("the advanced preset shows a panel's and a page's valueName in the Data tab, and no dataNesting", () => {
    const creator = new CreatorTester();
    new UIPreset(Advanced as any).apply(creator);
    creator.JSON = panelJson();
    [creator.survey.getPanelByName("panel1"), creator.survey.pages[0]].forEach(container => {
      creator.selectElement(container);
      const editor = creator.propertyGrid.getQuestionByName("valueName");
      expect(!!editor && editor.isVisible, container.getType()).toBe(true);
      expect(editor.parent.name, container.getType()).toBe("data");
    });
    // the advanced survey has no Data tab
    creator.selectElement(creator.survey);
    const editor = creator.propertyGrid.getQuestionByName("dataNesting");
    expect(!!editor && editor.isVisible).toBe(false);
  });
  test("the basic preset does not show dataNesting", () => {
    const creator = new CreatorTester();
    new UIPreset(Basic as any).apply(creator);
    creator.JSON = panelJson();
    creator.selectElement(creator.survey);
    const editor = creator.propertyGrid.getQuestionByName("dataNesting");
    expect(!!editor && editor.isVisible).toBe(false);
  });
});
