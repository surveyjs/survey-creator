import { SideBarModel } from "../src/components/side-bar/side-bar-model";
import { CreatorTester } from "./creator-tester";

test("SideBar tabs initial", () => {
  const creator = new CreatorTester();
  expect(creator.sideBar.tabs.length).toEqual(2);
});
test("SideBar tabs with showTranslationTab: true", () => {
  const creator = new CreatorTester({ showTranslationTab: true });
  expect(creator.sideBar.tabs.length).toEqual(3);
});

test("SideBar: activate tab change", () => {
  const creator = new CreatorTester({ showTranslationTab: true });
  expect(creator.sideBar.headerText).toEqual(undefined);
  expect(creator.sideBar.activeTab).toEqual("propertyGrid");
  expect(creator.sideBar.tabs[0].visible).toEqual(true);
  expect(creator.sideBar.tabs[1].visible).toEqual(false);
  expect(creator.sideBar.tabs[2].visible).toEqual(false);

  creator.sideBar.activeTab = "translation";
  expect(creator.sideBar.headerText).toEqual("Translation Setting");
  expect(creator.sideBar.activeTab).toEqual("translation");
  expect(creator.sideBar.tabs[0].visible).toEqual(false);
  expect(creator.sideBar.tabs[1].visible).toEqual(false);
  expect(creator.sideBar.tabs[2].visible).toEqual(true);

  creator.sideBar.activeTab = "toolbox";
  expect(creator.sideBar.headerText).toEqual(undefined);
  expect(creator.sideBar.activeTab).toEqual("toolbox");
  expect(creator.sideBar.tabs[0].visible).toEqual(false);
  expect(creator.sideBar.tabs[1].visible).toEqual(true);
  expect(creator.sideBar.tabs[2].visible).toEqual(false);

  creator.isMobileView = true;
  expect(creator.sideBar.headerText).toEqual("Survey");
});

test("SideBar: hasVisibleTabs test", () => {
  const creator = new CreatorTester({ showTranslationTab: true });
  expect(creator.sideBar.hasVisibleTabs).toEqual(true);

  creator.makeNewViewActive("test");
  expect(creator.sideBar.hasVisibleTabs).toEqual(false);

  creator.makeNewViewActive("translation");
  expect(creator.sideBar.hasVisibleTabs).toEqual(true);
});