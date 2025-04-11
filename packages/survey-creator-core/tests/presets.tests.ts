import { CreatorTester } from "./creator-tester";
import { CreatorPreset, ICreatorPresetData } from "../src/presets/presets";
import { editorLocalization } from "../src/editorLocalization";
import { surveyLocalization } from "survey-core";
export * from "../src/localization/german";

test("show/hidetabs", () => {
  const creator = new CreatorTester();
  expect(creator.tabs).toHaveLength(4);
  new CreatorPreset({}).apply(creator);
  expect(creator.tabs).toHaveLength(4);
  new CreatorPreset({ tabs: { items: [] } }).apply(creator);
  expect(creator.tabs).toHaveLength(4);
  expect(creator.activeTab).toBe("designer");
  const preset = new CreatorPreset({
    tabs: {
      items: ["preview", "unknown", "designer"],
      activeTab: "preview"
    }
  });
  preset.apply(creator);
  expect(creator.tabs).toHaveLength(2);
  expect(creator.tabs[0].id).toBe("preview");
  expect(creator.tabs[1].id).toBe("designer");
  expect(creator.activeTab).toBe("preview");
});
test("Update top toolbars on setting tabs", () => {
  const creator = new CreatorTester();
  creator.propertyGridNavigationMode = "accordion";
  expect(creator.sidebar.getPageById("propertyGrid").visible).toBeTruthy();
  expect(creator.toolbar.getActionById("svd-settings").visible).toBeTruthy();
  const preset = new CreatorPreset({ tabs: { items: ["preview"] } });
  preset.apply(creator);
  expect(creator.tabs).toHaveLength(1);
  expect(creator.tabs[0].id).toBe("preview");
  expect(creator.activeTab).toBe("preview");
  expect(creator.toolbar.getActionById("svd-settings").visible).toBeFalsy();
  expect(creator.sidebar.getPageById("propertyGrid").visible).toBeFalsy();
});
test("active tab", () => {
  const creator = new CreatorTester();
  creator.propertyGridNavigationMode = "accordion";
  expect(creator.toolbar.getActionById("svd-settings").visible).toBeTruthy();
  expect(creator.sidebar.getPageById("propertyGrid").visible).toBeTruthy();
  const preset = new CreatorPreset({ tabs: { items: ["designer", "json"], activeTab: "json" } });
  preset.apply(creator);
  expect(creator.tabs).toHaveLength(2);
  expect(creator.activeTab).toBe("json");
  expect(creator.toolbar.getActionById("svd-settings").visible).toBeFalsy();
  expect(creator.sidebar.getPageById("propertyGrid").visible).toBeFalsy();
});
test("incorrect active tab", () => {
  const creator = new CreatorTester();
  const preset = new CreatorPreset({ tabs: { items: ["preview"], activeTab: "designer" } });
  preset.apply(creator);
  expect(creator.tabs).toHaveLength(1);
  expect(creator.activeTab).toBe("preview");
});
test("set toolbox categories", () => {
  const creator = new CreatorTester();
  const preset = new CreatorPreset({
    toolbox: {
      categories: [
        { category: "general", items: ["text", "dropdown"] },
        { category: "matrix", items: ["matrix", "matrixdropdown"] }
      ]
    }
  });
  preset.apply(creator);
  const tb = creator.toolbox;
  expect(creator.toolbox.categories).toHaveLength(2);
  expect(creator.toolbox.visibleActions).toHaveLength(4);
  expect(creator.toolbox.hasCategories).toBeTruthy();
});
test("set toolbox items", () => {
  const creator = new CreatorTester();
  const preset = new CreatorPreset({
    toolbox: {
      items: ["text", "dropdown", "matrix"],
    }
  });
  preset.apply(creator);
  const tb = creator.toolbox;
  expect(tb.categories).toHaveLength(1);
  expect(tb.visibleActions).toHaveLength(3);
  expect(tb.hasCategories).toBeFalsy();
});
test("set toolbox definition", () => {
  const creator = new CreatorTester();
  const preset = new CreatorPreset({
    toolbox: {
      definition: [
        { name: "text-number", title: "Number", json: { type: "text", inputType: "number" } },
        { name: "text-date", title: "Date", json: { type: "text", inputType: "date" } }
      ],
      items: ["text-number", "text-date", "dropdown", "matrix"],
    }
  });
  preset.apply(creator);
  const tb = creator.toolbox;
  const actions = tb.visibleActions;
  expect(tb.categories).toHaveLength(1);
  expect(tb.visibleActions).toHaveLength(4);
  expect(actions[0].title).toEqual("Number");
  expect(actions[0].json.inputType).toEqual("number");
  expect(actions[1].name).toEqual("text-date");
  expect(actions[1].title).toEqual("Date");
  expect(actions[1].json.inputType).toEqual("date");
});
test("Override toolbox JSON", () => {
  const creator = new CreatorTester();
  const preset = new CreatorPreset({
    toolbox: {
      definition: [
        { name: "radiogroup", json: { type: "radiogroup", choices: [1, 2, 3, 4, 5, 6, 7] } }
      ]
    }
  });
  preset.apply(creator);
  const item = creator.toolbox.getActionById("radiogroup");
  expect(item).toBeTruthy();
  creator.clickToolboxItem(item.json);
  const question = creator.survey.getQuestionByName("question1");
  expect(question.getType()).toBe("radiogroup");
  expect(question.choices).toHaveLength(7);
  expect(question.choices[6].value).toBe(7);
});
test("set property grid defintion", () => {
  const creator = new CreatorTester();
  creator.propertyGridNavigationMode = "accordion";
  creator.JSON = { elements: [{ type: "text", name: "q1" }] };
  creator.selectQuestionByName("q1");
  const preset = new CreatorPreset({
    propertyGrid: {
      definition: {
        autoGenerateProperties: false,
        classes: {
          question: {
            properties: [
              "name",
              "title",
              "indent",
              { name: "visibleIf", tab: "logic" },
              { name: "enableIf", tab: "logic" },
            ],
            tabs: [
              { name: "logic", index: 15 }
            ]
          },
        }
      }
    }
  });
  preset.apply(creator);
  const survey = creator.propertyGrid;
  const panels = survey.getAllPanels();
  expect(panels).toHaveLength(2);
  expect(panels[0].name).toBe("general");
  expect(panels[1].name).toBe("logic");
  expect(panels[0].elements).toHaveLength(3);
  expect(panels[1].elements).toHaveLength(2);
});
test("set property grid defintion: make general tab not the first one", () => {
  const creator = new CreatorTester();
  creator.propertyGridNavigationMode = "accordion";
  creator.JSON = { elements: [{ type: "text", name: "q1" }] };
  creator.selectQuestionByName("q1");
  const preset = new CreatorPreset({
    propertyGrid: {
      definition: {
        autoGenerateProperties: false,
        classes: {
          question: {
            properties: [
              "name",
              "title",
              "indent",
              { name: "visibleIf", tab: "logic" },
              { name: "enableIf", tab: "logic" },
            ],
            tabs: [
              { name: "logic", index: 10 },
              { name: "general", index: 30 }
            ]
          },
        }
      }
    }
  });
  preset.apply(creator);
  const survey = creator.propertyGrid;
  const panels = survey.getAllPanels();
  expect(panels).toHaveLength(2);
  expect(panels[0].name).toBe("logic");
  expect(panels[1].name).toBe("general");
  expect(panels[0].elements).toHaveLength(2);
  expect(panels[1].elements).toHaveLength(3);
});
test("apply localization for tabs", () => {
  expect(editorLocalization.presetStrings).toBeFalsy();
  expect(editorLocalization.getString("tabs.logic")).toEqual("Logic");
  expect(editorLocalization.getString("tabs.logic", "de")).toEqual("Logik");
  const json: ICreatorPresetData = {
    localization: {
      en: { tabs: { logic: "Logic edit" } },
      de: { tabs: { logic: "Logik edit" } }
    }
  };
  const preset = new CreatorPreset(json);
  const creator = new CreatorTester();

  preset.apply(creator);
  expect(editorLocalization.presetStrings).toBeTruthy();
  expect(editorLocalization.getString("tabs.logic")).toEqual("Logic edit");
  expect(editorLocalization.getString("tabs.logic", "de")).toEqual("Logik edit");
  json.localization.en.tabs.designer = "Designer edit";

  preset.apply();
  expect(editorLocalization.presetStrings).toBeTruthy();
  expect(editorLocalization.getString("tabs.designer")).toEqual("Designer edit");
  editorLocalization.presetStrings = undefined;
});
test("apply localization for toolbox", () => {
  expect(editorLocalization.presetStrings).toBeFalsy();
  expect(editorLocalization.getString("qt.checkbox")).toEqual("Checkboxes");
  expect(editorLocalization.getString("qt.checkbox", "de")).toEqual("Auswahl");
  const json: ICreatorPresetData = {
    localization: {
      en: { qt: { checkbox: "Checkboxes edit" } },
      de: { qt: { checkbox: "Auswahl edit" } }
    }
  };
  const preset = new CreatorPreset(json);
  const creator = new CreatorTester();

  preset.apply(creator);
  expect(editorLocalization.presetStrings).toBeTruthy();
  expect(editorLocalization.getString("qt.checkbox")).toEqual("Checkboxes edit");
  expect(editorLocalization.getString("qt.checkbox", "de")).toEqual("Auswahl edit");
  expect(creator.toolbox.getActionById("checkbox").title).toEqual("Checkboxes edit");
  json.localization.en.qt.text = "Text edit";

  preset.apply(creator);
  expect(editorLocalization.presetStrings).toBeTruthy();
  expect(editorLocalization.getString("qt.text")).toEqual("Text edit");
  expect(creator.toolbox.getActionById("text").title).toEqual("Text edit");
  editorLocalization.presetStrings = undefined;
});
test("apply creator locale", () => {
  const json: ICreatorPresetData = {
    languages: { creator: "de" }
  };
  const preset = new CreatorPreset(json);
  const creator = new CreatorTester();

  preset.apply(creator);
  expect(creator.locale).toBe("de");

  preset.setJson({});
  preset.apply(creator);
  expect(creator.locale).toBeFalsy();
});
test("apply supported locales", () => {
  expect(surveyLocalization.supportedLocales).toStrictEqual([]);
  const json: ICreatorPresetData = {
    languages: { surveyLocales: ["de", "fr", "it"], useEnglishNames: true }
  };
  const preset = new CreatorPreset(json);
  const creator = new CreatorTester();

  preset.apply(creator);
  expect(surveyLocalization.supportedLocales).toStrictEqual(["de", "fr", "it"]);
  expect(surveyLocalization.showNamesInEnglish).toBeTruthy();

  preset.setJson({});
  preset.apply(creator);
  expect(surveyLocalization.supportedLocales).toStrictEqual([]);
  expect(surveyLocalization.showNamesInEnglish).toBeFalsy();
});