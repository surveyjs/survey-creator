import { SurveyModel, settings as surveySettings } from "survey-core";
import { TabDesignerPlugin } from "../src/components/tabs/designer-plugin";
import { settings as creatorSetting } from "../src/settings";
import { CreatorTester } from "./creator-tester";

surveySettings.supportCreatorV2 = true;
creatorSetting.defaultNewSurveyJSON = {};

const multipageJSON = {
  pages: [
    {
      name: "page1",
      title: "Page 1",
      questions: [
        { type: "text", name: "question1" },
        {
          name: "question2",
          choices: [
            "one",
            { value: "two", text: "second value" },
            { value: 3, text: "third value" }
          ],
          type: "checkbox"
        }
      ]
    },
    { name: "page2", questions: [{ name: "question3", type: "comment" }] },
    {
      name: "page3",
      questions: [
        {
          name: "question4",
          columns: ["Column 1", "Column 2", "Column 3"],
          rows: ["Row 1", "Row 2"],
          type: "matrix"
        },
        { name: "question5", type: "rating" }
      ]
    }
  ]
};

test("the creator can be empty", () => {
  const creator = new CreatorTester(undefined, undefined, false);
  creator.JSON = multipageJSON;
  creator.text = undefined;
  expect(creator.survey.pages).toHaveLength(0);

  const designerPlugin = <TabDesignerPlugin<SurveyModel>>(creator.getPlugin("designer"));
  expect(designerPlugin.model.newPage).toBeTruthy();
  expect(designerPlugin.model.showNewPage).toBeTruthy();
});

test("Create new page, set empty JSON", (): any => {
  const creator = new CreatorTester(undefined, undefined, false);
  expect(creator.viewType).toEqual("designer");
  const designerPlugin = <TabDesignerPlugin<SurveyModel>>(creator.getPlugin("designer"));
  expect(creator.survey.pages).toHaveLength(0);
  expect(designerPlugin.model.newPage).toBeTruthy();
  expect(designerPlugin.model.showNewPage).toBeTruthy();
});

test("Create new page, recreate designer survey via JSON", (): any => {
  const creator = new CreatorTester(undefined, undefined, false);
  creator.JSON = { elements: [{ type: "text", name: "question1" }] };
  creator.showTestSurvey();
  const designerPlugin = <TabDesignerPlugin<SurveyModel>>(creator.getPlugin("designer"));
  creator.JSON = {};
  creator.showDesigner();
  expect(creator.survey.pages).toHaveLength(0);
  expect(designerPlugin.model.newPage).toBeTruthy();
});

test("pageEditMode='single'", (): any => {
  let creator = new CreatorTester(undefined, undefined, false);
  let designerPlugin = <TabDesignerPlugin<SurveyModel>>(creator.getPlugin("designer"));
  expect(creator.pageEditMode).toEqual("standard");
  expect(designerPlugin.model.showNewPage).toBeTruthy();
  expect(designerPlugin.model.newPage).toBeTruthy();

  creator = new CreatorTester({ pageEditMode: "single" }, undefined, false);
  designerPlugin = <TabDesignerPlugin<SurveyModel>>(creator.getPlugin("designer"));
  expect(designerPlugin.model.showNewPage).toBeTruthy();
  expect(designerPlugin.model.newPage).toBeTruthy();
});