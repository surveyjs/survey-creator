import { TabDesignerPlugin } from "survey-creator-core";
import { SurveyCreator } from "../src/creator";
import { CreatorSurveyPageComponent } from "../src/page";

beforeEach(() => { });

test("getObjectDisplayName", () => {
  const obj1: any = {
    name: "name"
  };
  const obj2: any = {
    name: "name",
    title: "title"
  };
  const creator = new SurveyCreator({ showObjectTitles: true });
  expect(creator.getObjectDisplayName(obj1, "test")).toEqual("name");
  expect(creator.getObjectDisplayName(obj2, "test")).toEqual("title");
  // expect(creator.getObjectTitle(creator.survey.pages[0])).toEqual("page1");
});

// test("default", () => {
//   expect(true).toEqual(true);
// });

test("isGhost value for attached element", (): any => {
  const creator = new SurveyCreator();
  creator.JSON = {
    elements: [
      {
        type: "text",
        name: "q1"
      }
    ]
  };
  const designerPlugin = <TabDesignerPlugin>(
    creator.getPlugin("designer")
  );
  expect(creator.survey.pages).toHaveLength(1);
  expect(designerPlugin.model.newPage).toBeTruthy();
  let pageAdornerModel = new CreatorSurveyPageComponent(creator as any, designerPlugin.model.newPage as any);
  expect(pageAdornerModel.isGhost).toBeTruthy();
  expect(designerPlugin.model.newPage["onPropChangeFunctions"].filter(f => f.name === "title").length).toBe(1);

  pageAdornerModel = new CreatorSurveyPageComponent(creator as any, creator.survey.pages[0] as any);
  expect(pageAdornerModel.isGhost).toBeFalsy();
  expect(creator.survey.pages[0]["onPropChangeFunctions"].filter(f => f.name === "title").length).toBe(0);
});
