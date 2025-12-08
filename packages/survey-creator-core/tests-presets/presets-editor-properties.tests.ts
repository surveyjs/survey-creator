import { ItemValue, QuestionDropdownModel, Serializer } from "survey-core";
import { CreatorPresetEditorModel } from "../src/presets/presets-editor";
import { Question } from "survey-core";
import { CreatorBase } from "../src/creator-base";
import { CreatorPreset } from "../src/presets-creator/presets";
//import "survey-creator-core/i18n/german";
//import "survey-creator-core/i18n/italian";
//import "survey-creator-core/i18n/french";
test("Preset edit model, property grid, setup", () => {
  const editor = new CreatorPresetEditorModel();
  const survey = editor.model;
  expect(survey.getPageByName("page_propertyGrid").visible).toBeTruthy();
  const selectorQuestion = <QuestionDropdownModel>survey.getQuestionByName("propertyGrid_selector");
  const checkSelectorChoice = (value: string): boolean => {
    const items = selectorQuestion.choices.filter(item => item.value === value);
    return items.length > 0;
  };
  expect(checkSelectorChoice("survey")).toBeTruthy();
  expect(checkSelectorChoice("page")).toBeTruthy();
  expect(checkSelectorChoice("panel")).toBeTruthy();
  expect(checkSelectorChoice("panelbase")).toBeFalsy();
  expect(checkSelectorChoice("question")).toBeFalsy();
  expect(checkSelectorChoice("selectbase")).toBeFalsy();
  expect(checkSelectorChoice("matrixdropdownbase")).toBeFalsy();
  expect(checkSelectorChoice("matrix")).toBeTruthy();
  expect(checkSelectorChoice("base")).toBeFalsy();
  expect(checkSelectorChoice("empty")).toBeFalsy();
  expect(checkSelectorChoice("nonvalue")).toBeFalsy();
  expect(checkSelectorChoice("textwithbutton")).toBeFalsy();

  const propGridCategories = survey.getQuestionByName("propertyGrid_categories");
  expect(propGridCategories).toBeTruthy();
  const categories = propGridCategories.value;
  expect(categories).toHaveLength(10);
  expect(categories[0].category).toEqual("general");
});
test("Preset edit model, property grid, apply", () => {
  Serializer.findProperty("survey", "title").visible = true;
  Serializer.findProperty("survey", "pages").visible = true;
  const editor = new CreatorPresetEditorModel();
  const survey = editor.model;
  survey.currentPage = survey.getPageByName("page_propertyGrid");
  survey.setValue("propertyGrid_selector", "survey");
  let propGridCategories = survey.getQuestionByName("propertyGrid_categories");
  propGridCategories.value = [
    {
      "category": "general",
      "title": "General",
      properties: [
        { title: "Locale", name: "locale" },
        { title: "Title", name: "title" },
      ]
    },
    {
      "category": "second1",
      "title": "Second1",
      properties: [
        { title: "Pages", name: "pages" },
        { title: "Triggers", name: "triggers" },
      ]
    }
  ];
  //propGridCreator.survey.getPageByName("second1").name = "second";
  expect(editor.applyFromSurveyModel()).toBeTruthy();
  let propDef = editor.preset.getJson().propertyGrid?.definition;
  const surveyProps = propDef?.classes["survey"];
  //expect(propDef?.autoGenerateProperties).toStrictEqual(false);
  expect(surveyProps?.tabs).toHaveLength(2);
  expect(surveyProps?.properties).toHaveLength(4);

  survey.setValue("propertyGrid_selector", "page");
  propGridCategories.value = [
    {
      "category": "general",
      "title": "General",
      properties: [
        { title: "Name", name: "name" },
        { title: "Title", name: "title" },
        { title: "Description", name: "description" },
      ]
    }
  ];
  propGridCategories.visibleRows[0].showDetailPanel();
  propGridCategories.visibleRows[0].detailPanel.getQuestionByName("properties").visibleRows.filter(r => r.getValue("name") == "name")[0].getQuestionByName("title").value = "Name 1";
  expect(editor.applyFromSurveyModel()).toBeTruthy();
  propDef = editor.preset.getJson().propertyGrid?.definition;
  const pageProps = propDef?.classes["page"];
  expect(pageProps?.tabs).toHaveLength(0);
  expect(pageProps?.properties).toHaveLength(0);
  const panelBaseProps = propDef?.classes["panelbase"];
  expect(panelBaseProps?.tabs).toHaveLength(1);
  expect(panelBaseProps?.properties).toHaveLength(3);
  const creator = editor.creator;
  creator.JSON = { pages: [{ name: "page1" }] };
  creator.selectElement(creator.survey.pages[0]);
  const pages2 = creator.propertyGrid.visiblePages;
  expect(pages2).toHaveLength(1);
  expect(pages2[0].elements).toHaveLength(3);
});

test("Preset edit model, make general tab as second tab", () => {
  const editor = new CreatorPresetEditorModel();
  const survey = editor.model;
  survey.currentPage = survey.getPageByName("page_propertyGrid");
  survey.setValue("propertyGrid_selector", "text");
  let propGridCategories = survey.getQuestionByName("propertyGrid_categories");
  propGridCategories.value = [
    {
      "category": "logic",
      "title": "Logic",
      properties: [
        { title: "Visible If", name: "visibleIf" },
        { title: "Enable If", name: "enableIf" },
      ]
    },
    {
      "category": "general",
      "title": "General",
      properties: [
        { title: "Name", name: "name" },
        { title: "Input Type", name: "inputType" },
        { title: "Title", name: "title" },
        { title: "Placeholder", name: "placeholder" },
        { title: "description", name: "description" }
      ]
    }
  ];

  expect(editor.applyFromSurveyModel()).toBeTruthy();
  const creator = editor.creator;
  creator.JSON = { elements: [{ type: "text", name: "q1" }] };
  creator.selectElement(creator.survey.getQuestionByName("q1"));
  const panels = creator.propertyGrid.visiblePages;
  expect(panels).toHaveLength(2);
  expect(panels[0].name).toBe("logic");
  expect(panels[1].name).toBe("general");
});
test("Preset edit model, include columns types", () => {
  const editor = new CreatorPresetEditorModel();
  const survey = editor.model;
  survey.currentPage = survey.getPageByName("page_propertyGrid_definition");
  const question = <QuestionDropdownModel>survey.getQuestionByName("propertyGrid_selector");
  expect(ItemValue.getItemByValue(question.choices, "matrixdropdowncolumn@default")).toBeTruthy();
  expect(ItemValue.getItemByValue(question.choices, "matrixdropdowncolumn@checkbox")).toBeTruthy();
});
test("Preset edit model, edit matrixdropdowncolumn@default", () => {
  const editor = new CreatorPresetEditorModel();
  const survey = editor.model;
  survey.currentPage = survey.getPageByName("page_propertyGrid_definition");
  survey.setValue("propertyGrid_selector", "matrixdropdowncolumn@default");
  const propGridCategories = survey.getQuestionByName("propertyGrid_categories");
  const categories = propGridCategories.value;
  expect(categories).toHaveLength(5);
  expect(categories[0].properties).toHaveLength(10);
  expect(categories[1].properties).toHaveLength(7);
});
test("Preset edit model, property grid & matrixdropdowncolumn@checkbox", () => {
  const editor = new CreatorPresetEditorModel();
  const survey = editor.model;
  survey.currentPage = survey.getPageByName("page_propertyGrid");
  survey.setValue("propertyGrid_selector", "matrixdropdowncolumn@checkbox");
  let propGridCategories = survey.getQuestionByName("propertyGrid_categories");
  propGridCategories.value = [
    {
      title: "General", "category": "general",
      properties: [
        { title: "Name", name: "name" },
        { title: "Title", name: "title" }
      ]
    },
    {
      title: "Choices", "category": "choices",
      properties: [
        { title: "Choices", name: "choices" },
        { title: "Show Select All Item", name: "showSelectAllItem" }
      ]
    }
  ];
  expect(editor.applyFromSurveyModel()).toBeTruthy();
  const creator = editor.creator;
  creator.JSON = { elements: [{ type: "matrixdynamic", name: "q1", columns: [{ name: "col1", cellType: "checkbox" }] }] };
  creator.selectElement(creator.survey.getQuestionByName("q1").columns[0]);
  let panels = creator.propertyGrid.visiblePages;
  expect(panels).toHaveLength(2);
  expect(panels[0].name).toBe("general");
  expect(panels[0].elements).toHaveLength(2);
  expect(panels[0].elements[0].name).toBe("name");
  expect(panels[0].elements[1].name).toBe("title");
  expect(panels[1].elements).toHaveLength(2);
  expect(panels[1].elements[0].name).toBe("choices");
  expect(panels[1].elements[1].name).toBe("showSelectAllItem");
});

test("Preset edit model, Set question name title&description", () => {
  const editor = new CreatorPresetEditorModel();
  const survey = editor.model;
  survey.currentPage = survey.getPageByName("page_propertyGrid");
  survey.setValue("propertyGrid_selector", "text");
  const propGridCategories = survey.getQuestionByName("propertyGrid_categories");
  const row = propGridCategories.value.filter(r => r.category == "general")[0].properties.filter(r => r.name == "name")[0];
  expect(row).toBeTruthy();
  expect(row.title).toBe("Question name");
  expect(row.description).toBe("A question ID that is not visible to respondents.");
});
test("Preset edit model, Keep description on deleting the question", () => {
  const editor = new CreatorPresetEditorModel();
  const survey = editor.model;
  survey.currentPage = survey.getPageByName("page_propertyGrid");
  survey.setValue("propertyGrid_selector", "text");
  const propGridCategories = survey.getQuestionByName("propertyGrid_categories");
  const propGridHidden = survey.getQuestionByName("propertyGrid_matrix");
  expect(propGridHidden.value || []).toEqual([]);
  propGridCategories.visibleRows[0].showDetailPanel();
  const qItems = propGridCategories.visibleRows[0].detailPanel.getQuestionByName("properties");
  const itemIndex = qItems.value.findIndex(r => r.name == "name");
  expect(itemIndex >= 0).toBeTruthy();
  qItems.removeRow(itemIndex);
  expect(propGridHidden.value).toHaveLength(1);
  const json = propGridHidden.value[0];
  expect(json.description).toEqual("A question ID that is not visible to respondents.");
  expect(json.descriptionLocation).toBeFalsy();
});
test("Preset edit model, Change localization strings title&description", () => {
  const editor = new CreatorPresetEditorModel();
  const survey = editor.model;
  survey.currentPage = survey.getPageByName("page_propertyGrid");
  survey.setValue("propertyGrid_selector", "text");
  const propGridCategories = survey.getQuestionByName("propertyGrid_categories");

  propGridCategories.value = [
    {
      title: "General", "category": "general",
      properties: [
        { title: "Name", name: "name" },
        { title: "Input Type", name: "inputType" },
        { title: "Title", name: "title" },
        { title: "Placeholder", name: "placeholder" },
        { title: "Description", name: "description" }
      ]
    }
  ];

  propGridCategories.visibleRows[0].showDetailPanel();
  const properties = propGridCategories.visibleRows[0].detailPanel.getQuestionByName("properties");
  properties.visibleRows[0].showDetailPanel();
  properties.visibleRows[0].detailPanel.getQuestionByName("title").value = "My Name";
  properties.visibleRows[1].showDetailPanel();
  properties.visibleRows[1].detailPanel.getQuestionByName("title").value = "My Input Type";
  properties.visibleRows[1].detailPanel.getQuestionByName("description").value = "My Input Type description";

  expect(editor.applyFromSurveyModel()).toBeTruthy();
  const loc = editor.json.localization;
  expect(loc).toBeTruthy();
  expect(loc.en.pe.question).toBeTruthy();
  expect(loc.en.pe.text).toBeTruthy();
  expect(loc.en.pe.panel).toBeFalsy();
  expect(loc.en.pe.question.name).toEqual("My Name");
  expect(loc.en.pe.text.inputType).toEqual("My Input Type");
  expect(loc.en.pehelp.text).toBeTruthy();
  expect(loc.en.pehelp.text.inputType).toEqual("My Input Type description");

  const creator = editor.creator;
  creator.JSON = { elements: [{ type: "text", name: "q1" }] };
  creator.selectElement(creator.survey.getQuestionByName("q1"));
  const panels = creator.propertyGrid.visiblePages;
  expect(panels).toHaveLength(1);
  expect(panels[0].name).toBe("general");
  const elements = panels[0].elements;
  expect(elements).toHaveLength(5);
  expect(elements[0].name).toBe("name");
  expect(elements[1].name).toBe("inputType");
  expect((<Question>elements[0]).title).toEqual("My Name");
  expect((<Question>elements[1]).title).toEqual("My Input Type");
  expect((<Question>elements[1]).description).toEqual("My Input Type description");
});
test("Preset edit model, Change localization strings title&description", () => {
  const editor = new CreatorPresetEditorModel();
  const survey = editor.model;
  survey.currentPage = survey.getPageByName("page_propertyGrid");
  survey.setValue("propertyGrid_selector", "text");
  const propGridCategories = survey.getQuestionByName("propertyGrid_categories");
  propGridCategories.visibleRows.filter(r => r.getQuestionByName("category").value === "general")[0].getQuestionByName("title").value = "General Edit";
  expect(editor.applyFromSurveyModel()).toBeTruthy();
  const loc = editor.json.localization;
  expect(loc).toBeTruthy();
  expect(loc.en.pe.tabs).toBeTruthy();
  expect(loc.en.pe.tabs.general).toEqual("General Edit");

  const creator = editor.creator;
  creator.JSON = { elements: [{ type: "text", name: "q1" }] };
  creator.selectElement(creator.survey.getQuestionByName("q1"));
  const propGridSurvey = creator.propertyGrid;
  expect(propGridSurvey.getPageByName("general").title).toEqual("General Edit");
});
test("Preset edit model, Property grid change the new category title and then name", () => {
  const editor = new CreatorPresetEditorModel();
  const survey = editor.model;
  survey.currentPage = survey.getPageByName("page_propertyGrid");
  survey.setValue("propertyGrid_selector", "survey");

  let propGridCategories = survey.getQuestionByName("propertyGrid_categories");
  propGridCategories.addRow();
  const newRow = propGridCategories.visibleRows[propGridCategories.rowCount - 1];
  expect(newRow.getQuestionByName("category").value).toBe("category1");
  newRow.getQuestionByName("title").value = "My Category";
  newRow.showDetailPanel();
  newRow.detailPanel.getQuestionByName("properties").value = [{ name: "widthMode", title: "widthMode" }];

  expect(editor.applyFromSurveyModel()).toBeTruthy();
  const json = editor.json;
  const creator = editor.creator;
  creator.JSON = { elements: [{ type: "text", name: "q1" }] };
  creator.selectElement(creator.survey);
  let pages = creator.propertyGrid.visiblePages;

  // let propGridSurvey = getPropGridSurvey(survey);
  let categoryPage = pages.filter(p=>p.name === "category1")[0];
  expect(categoryPage).toBeTruthy();
  //expect(categoryPage.title).toBe("My Category");

  newRow.getQuestionByName("category").value = "my_new_category";
  expect(editor.applyFromSurveyModel()).toBeTruthy();
  creator.selectElement(null);
  creator.selectElement(creator.survey);
  pages = creator.propertyGrid.visiblePages;
  expect(pages.filter(p=>p.name === "category1")[0]).toBeFalsy();
  categoryPage = pages.filter(p=>p.name === "my_new_category")[0];
  expect(categoryPage).toBeTruthy();
  // expect(categoryPage.title).toBe("My Category");
});

test("Property import and defaults", () => {
  const editor = new CreatorPresetEditorModel({});
  editor.json = { "propertyGrid": {
    "definition": {
      "autoGenerateProperties": false,
      "classes": {
        "survey": {
          "properties": [
            {
              "name": "title",
              "index": 10000,
              "tab": "general"
            },
            {
              "name": "description",
              "index": 20000,
              "tab": "general"
            },
            {
              "name": "logoWidth",
              "index": 10000,
              "tab": "logo"
            },
            {
              "name": "logoHeight",
              "index": 20000,
              "tab": "logo"
            }
          ],
          "tabs": [
            {
              "name": "general",
              "index": 100,
              "iconName": "icon-pg-data-24x24"
            },
            {
              "name": "logo",
              "index": 200
            }
          ]
        } }
    }
  },
  "localization": {
    "en": {
      "pe": {
        "survey": {
          "logoWidth": "Width",
          "logoHeight": "Height"
        },
        "tabs": {
          "logo": "Logo"
        }
      }
    }
  } };

  const survey = editor.model;
  const value = survey.getQuestionByName("propertyGrid_categories").value;
  expect(value).toEqual([
    {
      "category": "general",
      "title": "General",
      "iconName": "icon-pg-data-24x24",
      "properties": [
        {
          "name": "title",
          "title": "Survey title",
          "description": "Type a user-friendly title to display."
        },
        {
          "name": "description",
          "title": "Survey description",
          "description": "Type a subtitle."
        }
      ]
    },
    {
      "category": "logo",
      "title": "Logo",
      "iconName": "icon-pg-logo-24x24",
      "properties": [
        {
          "name": "logo",
          "title": "Survey logo",
          "description": "Paste an image link (no size limits) or click the folder icon to browse a file from your computer (up to 64KB)."
        },
        {
          "name": "logoWidth",
          "title": "Width",
          "description": "Sets a logo width in CSS units (px, %, in, pt, etc.)."
        },
        {
          "name": "logoHeight",
          "title": "Height",
          "description": "Sets a logo height in CSS units (px, %, in, pt, etc.)."
        }
      ]
    }
  ]);
});

test("Properties and applied presets", () => {
  const preset = new CreatorPreset({
    "propertyGrid": {
      "definition": {
        "autoGenerateProperties": false,
        "classes": {
          "question": {
            "properties": [],
            "tabs": []
          },
          "rating": {
            "properties": [],
            "tabs": []
          },
          "selectbase": {
            "properties": [
              {
                "name": "choices",
                "index": 1000,
                "tab": "choices"
              }
            ],
            "tabs": [
              {
                "name": "choices",
                "index": 100,
                "iconName": "icon-pg-specific-24x24"
              }
            ]
          },
          "radiogroup": {
            "properties": [],
            "tabs": []
          },
        }
      }
    }
  });
  const creator = new CreatorBase();
  preset.apply(creator);
  const editor = new CreatorPresetEditorModel({}, creator);

  const survey = editor.model;

  const categories = survey.getQuestionByName("propertyGrid_categories");
  const selector = survey.getQuestionByName("propertyGrid_selector");
  selector.value = "radiogroup";
  expect(categories.value.length).toBe(1);
  expect(categories.value[0].category).toBe("choices");
  expect(categories.value[0].properties.length).toBe(1);
  expect(categories.value[0].properties[0].name).toBe("choices");
  selector.value = "rating";
  expect(categories.value).toEqual([]);

  const definition = editor.json.propertyGrid.definition;
  expect(definition.classes.rating).toEqual({ "properties": [], "tabs": [] });
  expect(definition.classes.selectbase.properties[0].name).toEqual("choices");
});

test("Properties reset to defaults", () => {
  const editor = new CreatorPresetEditorModel();

  const survey = editor.model;

  const categories = survey.getQuestionByName("propertyGrid_categories");
  const hidden = survey.getQuestionByName("propertyGrid_matrix");
  const selector = survey.getQuestionByName("propertyGrid_selector");
  selector.value = "slider";

  categories.removeRow(5);
  expect(categories.value.map(c=> c.category)).toEqual(["general", "sliderSettings", "layout", "logic", "data"]);
  expect(hidden.value.map(c=> c.name)).toEqual(["validators", "requiredErrorText"]);
  editor.resetToDefaults();
  expect(categories.value.map(c=> c.category)).toEqual(["general", "sliderSettings", "layout", "logic", "data", "validation"]);
  expect(hidden.value).toEqual([]);

  categories.removeRow(5);
  expect(categories.value.map(c=> c.category)).toEqual(["general", "sliderSettings", "layout", "logic", "data"]);
  expect(hidden.value.map(c=> c.name)).toEqual(["validators", "requiredErrorText"]);

  selector.value = "survey";
  editor.resetToDefaults();

  selector.value = "slider";
  expect(categories.value.map(c=> c.category)).toEqual(["general", "sliderSettings", "layout", "logic", "data", "validation"]);
  expect(hidden.value).toEqual([]);
});