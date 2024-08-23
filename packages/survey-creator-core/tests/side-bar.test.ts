import { SidebarModel } from "../src/components/side-bar/side-bar-model";
import { CreatorTester } from "./creator-tester";

test("Sidebar tabs initial", () => {
  const creator = new CreatorTester();
  expect(creator.sidebar.pages.length).toEqual(2);
});
test("Sidebar tabs with showTranslationTab: true", () => {
  const creator = new CreatorTester({ showTranslationTab: true });
  expect(creator.sidebar.pages.length).toEqual(3);
});

test("Sidebar: activate tab change", () => {
  const creator = new CreatorTester({ showTranslationTab: true });
  expect(creator.sidebar.headerText).toEqual(undefined);
  expect(creator.sidebar.activePage).toEqual("propertyGrid");
  expect(creator.sidebar.pages[0].visible).toEqual(true);
  expect(creator.sidebar.pages[1].visible).toEqual(false);
  expect(creator.sidebar.pages[2].visible).toEqual(false);

  creator.sidebar.activePage = "translation";
  expect(creator.sidebar.headerText).toEqual("Language Settings");
  expect(creator.sidebar.activePage).toEqual("translation");
  expect(creator.sidebar.pages[0].visible).toEqual(false);
  expect(creator.sidebar.pages[1].visible).toEqual(false);
  expect(creator.sidebar.pages[2].visible).toEqual(true);

  creator.sidebar.activePage = "toolbox";
  expect(creator.sidebar.headerText).toEqual(undefined);
  expect(creator.sidebar.activePage).toEqual("toolbox");
  expect(creator.sidebar.pages[0].visible).toEqual(false);
  expect(creator.sidebar.pages[1].visible).toEqual(true);
  expect(creator.sidebar.pages[2].visible).toEqual(false);
});

test("Sidebar: hasVisiblePages test", () => {
  const creator = new CreatorTester({ showTranslationTab: true });
  expect(creator.sidebar.hasVisiblePages).toEqual(true);

  creator.makeNewViewActive("test");
  expect(creator.sidebar.hasVisiblePages).toEqual(false);

  creator.makeNewViewActive("translation");
  expect(creator.sidebar.hasVisiblePages).toEqual(true);
});