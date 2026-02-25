import { CreatorTester } from "./creator-tester";
import { UIPreset, ICreatorPresetData, registerUIPreset } from "../src/ui-presets-creator/presets";
import { defaultStrings, editorLocalization } from "../src/editorLocalization";
import { surveyLocalization } from "survey-core";
import { TabDesignerPlugin } from "../src/components/tabs/designer-plugin";
import { QuestionAdornerViewModel } from "../src/components/question";
export * from "../src/localization/german";

test("show/hidetabs", () => {
  const creator = new CreatorTester();
  expect(creator.tabs).toHaveLength(4);
  new UIPreset({}).apply(creator);
  expect(creator.tabs).toHaveLength(4);
  new UIPreset({ tabs: { items: [] } }).apply(creator);
  expect(creator.tabs).toHaveLength(4);
  expect(creator.activeTab).toBe("designer");
  const preset = new UIPreset({
    tabs: {
      items: [{ name: "preview" }, { name: "unknown" }, { name: "designer" }],
      activeTab: "preview"
    }
  });
  preset.apply(creator);
  expect(creator.tabs).toHaveLength(2);
  expect(creator.tabs[0].id).toBe("preview");
  expect(creator.tabs[1].id).toBe("designer");
  expect(creator.activeTab).toBe("preview");
});
test("tabs icons", () => {
  const creator = new CreatorTester();
  expect(creator.tabs).toHaveLength(4);
  new UIPreset({}).apply(creator);
  const preset = new UIPreset({
    tabs: {
      items: [{ name: "preview", iconName: "i-preview" }, { name: "designer", iconName: "i-designer" }, { name: "logic" }],
      activeTab: "preview"
    }
  });
  preset.apply(creator);
  expect(creator.tabs).toHaveLength(3);
  expect(creator.tabs[0].iconName).toBe("i-preview");
  expect(creator.tabs[1].iconName).toBe("i-designer");
  expect(creator.tabs[2].iconName).toBe("icon-logic-24x24");
});
test("Update top toolbars on setting tabs", () => {
  const creator = new CreatorTester();
  creator.propertyGridNavigationMode = "accordion";
  expect(creator.sidebar.getPageById("propertyGrid").visible).toBeTruthy();
  expect(creator.toolbar.getActionById("svd-settings").visible).toBeTruthy();
  const preset = new UIPreset({ tabs: { items: [{ name: "preview" }] } });
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
  const preset = new UIPreset({ tabs: { items: [{ name: "designer" }, { name: "json" }], activeTab: "json" } });
  preset.apply(creator);
  expect(creator.tabs).toHaveLength(2);
  expect(creator.activeTab).toBe("json");
  expect(creator.toolbar.getActionById("svd-settings").visible).toBeFalsy();
  expect(creator.sidebar.getPageById("propertyGrid").visible).toBeFalsy();
});
test("incorrect active tab", () => {
  const creator = new CreatorTester();
  const preset = new UIPreset({ tabs: { items: [{ name: "preview" }], activeTab: "designer" } });
  preset.apply(creator);
  expect(creator.tabs).toHaveLength(1);
  expect(creator.activeTab).toBe("preview");
});
test("set toolbox categories", () => {
  const creator = new CreatorTester();
  const preset = new UIPreset({
    toolbox: {
      categories: [
        { category: "general", items: [{ name: "text" }, { name: "dropdown" }] },
        { category: "matrix", items: [{ name: "matrix" }, { name: "matrixdropdown" }] }
      ]
    }
  });
  preset.apply(creator);
  const tb = creator.toolbox;
  creator.toolbox.flushUpdates();
  expect(creator.toolbox.categories).toHaveLength(2);
  expect(creator.toolbox.visibleActions).toHaveLength(4);
  expect(creator.toolbox.hasCategories).toBeTruthy();
});
test("set toolbox items", () => {
  const creator = new CreatorTester();
  const preset = new UIPreset({
    toolbox: {
      definition: [{ name: "text" }, { name: "dropdown" }, { name: "radiogroup" }],
    }
  });
  preset.apply(creator);
  const tb = creator.toolbox;
  tb.flushUpdates();
  expect(tb.categories).toHaveLength(2);
  expect(tb.visibleActions).toHaveLength(3);
  expect(tb.hasCategories).toBeTruthy();
});
test("set toolbox items and categories", () => {
  const creator = new CreatorTester();
  const preset = new UIPreset({
    toolbox: {
      definition: [{ name: "text", iconName: "i-text" }, { name: "dropdown" }, { name: "matrix" }],
      categories: [
        { category: "general", items: ["text", "dropdown"] },
        { category: "matrix", items: ["matrix"] }
      ]
    }
  });
  preset.apply(creator);
  const tb = creator.toolbox;
  tb.flushUpdates();
  expect(tb.categories).toHaveLength(2);
  expect(tb.visibleActions).toHaveLength(3);
  expect(tb.hasCategories).toBeTruthy();
  expect(tb.visibleActions[0].name).toBe("text");
  expect(tb.visibleActions[0].iconName).toBe("i-text");
});
test("set toolbox definition", () => {
  const creator = new CreatorTester();
  const preset = new UIPreset({
    toolbox: {
      definition: [
        { name: "text-number", title: "Number", json: { type: "text", inputType: "number" } },
        { name: "text-date", title: "Date", json: { type: "text", inputType: "date" } },
        { name: "dropdown" },
        { name: "matrix" },
      ],
      categories: [
        { category: "general", items: ["text-number", "text-date", "dropdown", "matrix"] }
      ]
    }
  });
  preset.apply(creator);
  const tb = creator.toolbox;
  tb.flushUpdates();
  const actions = tb.visibleActions;
  expect(tb.categories).toHaveLength(1);
  expect(tb.visibleActions).toHaveLength(4);
  expect(actions[0].title).toEqual("Number");
  expect(actions[0].json.inputType).toEqual("number");
  expect(actions[1].name).toEqual("text-date");
  expect(actions[1].title).toEqual("Date");
  expect(actions[1].json.inputType).toEqual("date");
});
test("set toolbox definition & question actions, Bug#7437", () => {
  const creator = new CreatorTester();
  const preset = new UIPreset({
    toolbox: {
      definition: [
        { name: "text-number", title: "Number", json: { type: "text", inputType: "number" } },
        { name: "text-date", title: "Date", json: { type: "text", inputType: "date" } },
        { name: "dropdown" }
      ],
      categories: [
        { category: "general", items: ["text-number", "text-date", "dropdown"] }
      ]
    }
  });
  preset.apply(creator);
  const tb = creator.toolbox;
  tb.flushUpdates();
  const actions = tb.visibleActions;
  expect(tb.categories).toHaveLength(1);
  expect(tb.visibleActions).toHaveLength(3);
  creator.JSON = { elements: [{ type: "text", name: "q1" }] };
  const question = creator.survey.getQuestionByName("q1");
  const questionAdorner = new QuestionAdornerViewModel(
    creator,
    question,
    <any>undefined
  );

  const convertToAction = questionAdorner.actionContainer.getActionById("convertTo");
  convertToAction.popupModel.show();
  expect(convertToAction.data.actions.length).toBe(3);
  convertToAction.popupModel.hide();
});

test("set toolbox definition - no categories", () => {
  const creator = new CreatorTester();
  const preset = new UIPreset({
    toolbox: {
      definition: [
        { name: "text-number", title: "Number", json: { type: "text", inputType: "number" } },
        { name: "text-date", title: "Date", json: { type: "text", inputType: "date" } },
        { name: "dropdown" },
        { name: "matrix" },
      ],
      categories: []
    }
  });
  preset.apply(creator);
  const tb = creator.toolbox;
  tb.flushUpdates();
  const actions = tb.visibleActions;
  expect(tb.categories).toHaveLength(1);
  expect(tb.visibleActions).toHaveLength(4);
});

test("set toolbox definition - no subitems", () => {
  const creator = new CreatorTester();
  const preset = new UIPreset({
    toolbox: {
      definition: [
        { name: "rating", subitems: [] },
      ]
    }
  });
  preset.apply(creator);
  const tb = creator.toolbox;
  tb.flushUpdates();
  const actions = tb.visibleActions;
  expect(tb.visibleActions).toHaveLength(1);
  expect(actions[0].name).toBe("rating");
  expect(actions[0].items).toHaveLength(0);
});

test("set toolbox definition - showCategoryTitles", () => {
  const creator = new CreatorTester();
  const preset = new UIPreset({
    toolbox: {
      showCategoryTitles: true
    }
  });
  preset.apply(creator);
  const tb = creator.toolbox;
  tb.flushUpdates();
  expect(tb.showCategoryTitles).toBeTruthy();

  preset.setJson(undefined);
  preset.apply(creator);
  tb.flushUpdates();
  expect(tb.showCategoryTitles).toBeFalsy();
});

test("set toolbox definition - no categories, no definition", () => {
  const creator = new CreatorTester();
  const preset = new UIPreset({
    toolbox: {
      categories: []
    }
  });
  preset.apply(creator);
  const tb = creator.toolbox;
  tb.flushUpdates();
  expect(tb.categories).toHaveLength(1);
  expect(tb.visibleActions.length).toBeGreaterThan(0);

  preset.setJson(undefined);
  preset.apply(creator);
  tb.flushUpdates();
  expect(tb.categories.length).toBeGreaterThan(1);
});

test("Override toolbox JSON", () => {
  const creator = new CreatorTester();
  const preset = new UIPreset({
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
  const preset = new UIPreset({
    propertyGrid: {
      definition: {
        generateOtherTab: false,
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

  const presetDefault = new UIPreset({
    propertyGrid: {
      definition: null as any
    }
  });
  presetDefault.apply(creator);
  const surveyDefault = creator.propertyGrid;
  const panelsDefault = surveyDefault.getAllPanels();
  expect(panelsDefault).toHaveLength(6);
});
test("set property grid defintion: make general tab not the first one", () => {
  const creator = new CreatorTester();
  creator.propertyGridNavigationMode = "accordion";
  creator.JSON = { elements: [{ type: "text", name: "q1" }] };
  creator.selectQuestionByName("q1");
  const preset = new UIPreset({
    propertyGrid: {
      definition: {
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
test("set property grid defintion: just one tab for page", () => {
  const creator = new CreatorTester();
  creator.JSON = { elements: [{ type: "text", name: "q1" }] };
  const preset = new UIPreset({
    propertyGrid: {
      definition: {
        classes: {
          panelbase: {
            properties: [
              "name",
              "title",
              "description"
            ]
          },
        }
      }
    }
  });
  preset.apply(creator);
  creator.selectElement(creator.survey.pages[0]);
  const survey = creator.propertyGrid;
  const pages = survey.pages;
  expect(pages).toHaveLength(1);
  expect(pages[0].name).toBe("general");
  expect(pages[0].elements).toHaveLength(3);
});
test("set property grid defintion & icons", () => {
  const creator = new CreatorTester();
  creator.JSON = { elements: [{ type: "text", name: "q1" }] };
  creator.selectQuestionByName("q1");
  const preset = new UIPreset({
    propertyGrid: {
      definition: {
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
              { name: "general", iconName: "general!" },
              { name: "logic", index: 15, iconName: "logic!" }
            ]
          },
        }
      }
    }
  });
  preset.apply(creator);
  const survey = creator.propertyGrid;
  const pages = survey.pages;
  expect(pages).toHaveLength(2);
  expect(pages[0].name).toBe("general");
  expect(pages[0]["iconName"]).toEqual("general!");
  expect(pages[1].name).toBe("logic");
  expect(pages[1]["iconName"]).toEqual("logic!");
  expect(pages[0].elements).toHaveLength(3);
  expect(pages[1].elements).toHaveLength(2);
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
  const preset = new UIPreset(json);
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
  const preset = new UIPreset(json);
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
  const preset = new UIPreset(json);
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
  const preset = new UIPreset(json);
  const creator = new CreatorTester();

  preset.apply(creator);
  expect(surveyLocalization.supportedLocales).toStrictEqual(["de", "fr", "it"]);
  expect(surveyLocalization.showNamesInEnglish).toBeTruthy();

  preset.setJson({});
  preset.apply(creator);
  expect(surveyLocalization.supportedLocales).toStrictEqual([]);
  expect(surveyLocalization.showNamesInEnglish).toBeFalsy();
});
test("set creator options", () => {
  const creator = new CreatorTester();
  const preset = new UIPreset({
    options: {
      allowZoom: false,
    }
  });
  expect(creator.allowZoom).toBeTruthy();
  preset.apply(creator);
  expect(creator.allowZoom).toBeFalsy();
});
test("ui preset registration", () => {
  const creator0 = new CreatorTester();
  const sideBarPageModel0 = creator0.sidebar.pages.filter(page => page.id === "creatorTheme")[0].componentData;
  expect(sideBarPageModel0.elements).toHaveLength(1);
  registerUIPreset(
    {
      presetName: "basic",
      json: {
        options: {
          allowZoom: false,
        }
      }
    }
  );
  registerUIPreset(
    {
      presetName: "advanced",
      json: {
        options: {
          allowZoom: true,
        }
      }
    }
  );
  const creator = new CreatorTester();
  const sideBarPageModel = creator.sidebar.pages.filter(page => page.id === "creatorTheme")[0].componentData;
  expect(sideBarPageModel.elements).toHaveLength(2);
  const survey = sideBarPageModel.elements[0].componentData.model.survey;
  expect(survey.getQuestionByName("presetName").choices.map(c => [c.value, c.text])).toEqual([["basic", "Basic"], ["advanced", "Advanced"]]);

  expect(creator.allowZoom).toBeTruthy();
  survey.setValue("presetName", "basic");
  expect(creator.allowZoom).toBeFalsy();

  survey.setValue("presetName", "advanced");
  expect(creator.allowZoom).toBeTruthy();
});