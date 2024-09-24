import { settings as creatorSetting } from "../src/creator-settings";
import { SidebarModel } from "../src/components/side-bar/side-bar-model";
import { TabDesignerPlugin } from "../src/components/tabs/designer-plugin";
import { CreatorTester } from "./creator-tester";

test("Sidebar tabs initial", () => {
  const creator = new CreatorTester();
  expect(creator.sidebar.pages.length).toEqual(3);
});
test("Sidebar tabs with showTranslationTab: true", () => {
  const creator = new CreatorTester({ showTranslationTab: true });
  expect(creator.sidebar.pages.length).toEqual(4);
});

test("Sidebar: activate tab change", () => {
  const creator = new CreatorTester({ showTranslationTab: true });
  expect(creator.sidebar.header.title).toEqual(undefined);
  expect(creator.sidebar.activePage).toEqual("propertyGrid");
  expect(creator.sidebar.pages[0].visible).toEqual(true); // propertyGrid
  expect(creator.sidebar.pages[1].visible).toEqual(false); // toolbox
  expect(creator.sidebar.pages[2].visible).toEqual(false); // propertyGridPlaceholder
  expect(creator.sidebar.pages[3].visible).toEqual(false); // translation

  creator.sidebar.activePage = "translation";
  expect(creator.sidebar.header.title).toEqual("Language Settings");
  expect(creator.sidebar.activePage).toEqual("translation");
  expect(creator.sidebar.pages[0].visible).toEqual(false); // propertyGrid
  expect(creator.sidebar.pages[1].visible).toEqual(false); // toolbox
  expect(creator.sidebar.pages[2].visible).toEqual(false); // propertyGridPlaceholder
  expect(creator.sidebar.pages[3].visible).toEqual(true); // translation

  creator.sidebar.activePage = "toolbox";
  expect(creator.sidebar.header.title).toEqual(undefined);
  expect(creator.sidebar.activePage).toEqual("toolbox");
  expect(creator.sidebar.pages[0].visible).toEqual(false); // propertyGrid
  expect(creator.sidebar.pages[1].visible).toEqual(true); // toolbox
  expect(creator.sidebar.pages[2].visible).toEqual(false); // propertyGridPlaceholder
  expect(creator.sidebar.pages[3].visible).toEqual(false); // translation
});

test("Sidebar: hasVisiblePages test", () => {
  const creator = new CreatorTester({ showTranslationTab: true });
  expect(creator.sidebar.hasVisiblePages).toEqual(true);

  creator.makeNewViewActive("test");
  expect(creator.sidebar.hasVisiblePages).toEqual(false);

  creator.makeNewViewActive("translation");
  expect(creator.sidebar.hasVisiblePages).toEqual(true);
});

test("showOneCategoryInPropertyGrid: showPlaceholder into property grid if survey is empty", () => {
  const savedNewJSON = creatorSetting.defaultNewSurveyJSON;
  creatorSetting.defaultNewSurveyJSON = {};
  const creator = new CreatorTester(undefined, undefined, false);
  const designerPlugin = creator.getPlugin("designer") as TabDesignerPlugin;
  designerPlugin.showOneCategoryInPropertyGrid = true;

  expect(creator.sidebar.activePage).toEqual("propertyGridPlaceholder");
  expect(creator.sidebar.header.componentName).toEqual("svc-side-bar-header");
  expect(creator.sidebar.header.componentData).toEqual(creator.sidebar.header);

  let tabs = designerPlugin["tabControlModel"].topToolbar.actions;
  expect(tabs.length).toBe(10);
  expect(tabs.map(t => t.id).join(",")).toBe("general,logo,navigation,question,pages,logic,data,validation,showOnCompleted,timer");
  expect(designerPlugin.propertyGridViewModel.survey.currentPage.name).toBe("general");

  creator.clickToolboxItem({ type: "text" });
  expect(creator.sidebar.activePage).toEqual("propertyGrid");
  expect(creator.sidebar.header.componentName).toEqual("svc-side-bar-property-grid-header");
  expect(creator.sidebar.header.componentData).toEqual(designerPlugin.propertyGridViewModel.objectSelectionAction);
  expect(designerPlugin.propertyGridViewModel.objectSelectionAction.title).toEqual("question1");
  expect(designerPlugin.propertyGridViewModel.objectSelectionAction.tooltip).toEqual("General");
  tabs = designerPlugin["tabControlModel"].topToolbar.actions;
  expect(tabs.length).toBe(6);
  expect(tabs.map(t => t.id).join(",")).toBe("general,layout,logic,mask,data,validation");
  expect(designerPlugin.propertyGridViewModel.survey.currentPage.name).toBe("general");

  creatorSetting.defaultNewSurveyJSON = savedNewJSON;
});

test("showOneCategoryInPropertyGrid: tab control", () => {
  const creator = new CreatorTester();
  const designerPlugin = creator.getPlugin("designer") as TabDesignerPlugin;
  designerPlugin.showOneCategoryInPropertyGrid = true;

  expect(creator.sidebar.activePage).toEqual("propertyGrid");
  expect(creator.sidebar.header.componentName).toEqual("svc-side-bar-property-grid-header");
  expect(creator.sidebar.header.componentData).toEqual(designerPlugin.propertyGridViewModel.objectSelectionAction);
  expect(designerPlugin.propertyGridViewModel.objectSelectionAction.title).toEqual("Survey");
  expect(designerPlugin.propertyGridViewModel.objectSelectionAction.tooltip).toEqual("General");
  const tabs = designerPlugin["tabControlModel"].topToolbar.actions;
  expect(tabs.length).toBe(10);
  expect(tabs.map(t => t.id).join(",")).toBe("general,logo,navigation,question,pages,logic,data,validation,showOnCompleted,timer");
  expect(designerPlugin.propertyGridViewModel.survey.currentPage.name).toBe("general");
});

test("showOneCategoryInPropertyGrid: switch between tabs", () => {
  const creator = new CreatorTester();
  const designerPlugin = creator.getPlugin("designer") as TabDesignerPlugin;
  designerPlugin.showOneCategoryInPropertyGrid = true;

  expect(creator.sidebar.activePage).toEqual("propertyGrid");
  expect(designerPlugin.propertyGridViewModel.objectSelectionAction.title).toEqual("Survey");
  expect(designerPlugin.propertyGridViewModel.objectSelectionAction.tooltip).toEqual("General");
  const tabs = designerPlugin["tabControlModel"].topToolbar.actions;
  expect(tabs[0].active).toBe(true);
  expect(tabs[4].active).toBe(false);
  expect(designerPlugin.propertyGridViewModel.survey.currentPage.name).toBe("general");

  tabs[4].action();
  expect(designerPlugin.propertyGridViewModel.objectSelectionAction.title).toEqual("Survey");
  expect(designerPlugin.propertyGridViewModel.objectSelectionAction.tooltip).toEqual("Pages");
  expect(tabs[0].active).toBe(false);
  expect(tabs[4].active).toBe(true);
  expect(designerPlugin.propertyGridViewModel.survey.currentPage.name).toBe("pages");
});

test("showOneCategoryInPropertyGrid: switch tabs by search", () => {
  const creator = new CreatorTester();
  const designerPlugin = creator.getPlugin("designer") as TabDesignerPlugin;
  designerPlugin.showOneCategoryInPropertyGrid = true;

  expect(creator.sidebar.activePage).toEqual("propertyGrid");
  expect(designerPlugin.propertyGridViewModel.objectSelectionAction.title).toEqual("Survey");
  expect(designerPlugin.propertyGridViewModel.objectSelectionAction.tooltip).toEqual("General");
  const tabs = designerPlugin["tabControlModel"].topToolbar.actions;
  expect(tabs[0].active).toBe(true);
  expect(tabs[4].active).toBe(false);
  expect(designerPlugin.propertyGridViewModel.survey.currentPage.name).toBe("general");

  designerPlugin.propertyGridViewModel.searchManager.filterString = "pages";
  expect(designerPlugin.propertyGridViewModel.objectSelectionAction.title).toEqual("Survey");
  expect(designerPlugin.propertyGridViewModel.objectSelectionAction.tooltip).toEqual("Pages");
  expect(tabs[0].active).toBe(false);
  expect(tabs[4].active).toBe(true);
  expect(designerPlugin.propertyGridViewModel.survey.currentPage.name).toBe("pages");
});