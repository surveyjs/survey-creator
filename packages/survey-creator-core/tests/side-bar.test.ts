import { SidebarModel } from "../src/components/side-bar/side-bar-model";
import { CreatorTester } from "./creator-tester";

test("Sidebar tabs initial", () => {
  const creator = new CreatorTester();
  expect(creator.sidebar.tabs.length).toEqual(2);
});
test("Sidebar tabs with showTranslationTab: true", () => {
  const creator = new CreatorTester({ showTranslationTab: true });
  expect(creator.sidebar.tabs.length).toEqual(3);
});

test("Sidebar: activate tab change", () => {
  const creator = new CreatorTester({ showTranslationTab: true });
  expect(creator.sidebar.headerText).toEqual(undefined);
  expect(creator.sidebar.activeTab).toEqual("propertyGrid");
  expect(creator.sidebar.tabs[0].visible).toEqual(true);
  expect(creator.sidebar.tabs[1].visible).toEqual(false);
  expect(creator.sidebar.tabs[2].visible).toEqual(false);

  creator.sidebar.activeTab = "translation";
  expect(creator.sidebar.headerText).toEqual("Language Settings");
  expect(creator.sidebar.activeTab).toEqual("translation");
  expect(creator.sidebar.tabs[0].visible).toEqual(false);
  expect(creator.sidebar.tabs[1].visible).toEqual(false);
  expect(creator.sidebar.tabs[2].visible).toEqual(true);

  creator.sidebar.activeTab = "toolbox";
  expect(creator.sidebar.headerText).toEqual(undefined);
  expect(creator.sidebar.activeTab).toEqual("toolbox");
  expect(creator.sidebar.tabs[0].visible).toEqual(false);
  expect(creator.sidebar.tabs[1].visible).toEqual(true);
  expect(creator.sidebar.tabs[2].visible).toEqual(false);
});

test("Sidebar: hasVisibleTabs test", () => {
  const creator = new CreatorTester({ showTranslationTab: true });
  expect(creator.sidebar.hasVisibleTabs).toEqual(true);

  creator.makeNewViewActive("test");
  expect(creator.sidebar.hasVisibleTabs).toEqual(false);

  creator.makeNewViewActive("translation");
  expect(creator.sidebar.hasVisibleTabs).toEqual(true);
});