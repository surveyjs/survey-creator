import { SidebarModel } from "../src/components/side-bar/side-bar-model";
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
  expect(creator.sidebar.headerText).toEqual(undefined);
  expect(creator.sidebar.activePage).toEqual("propertyGrid");
  expect(creator.sidebar.pages[0].visible).toEqual(true); // propertyGrid
  expect(creator.sidebar.pages[1].visible).toEqual(false); // toolbox
  expect(creator.sidebar.pages[2].visible).toEqual(false); // propertyGridPlaceholder
  expect(creator.sidebar.pages[3].visible).toEqual(false); // translation

  creator.sidebar.activePage = "translation";
  expect(creator.sidebar.headerText).toEqual("Language Settings");
  expect(creator.sidebar.activePage).toEqual("translation");
  expect(creator.sidebar.pages[0].visible).toEqual(false); // propertyGrid
  expect(creator.sidebar.pages[1].visible).toEqual(false); // toolbox
  expect(creator.sidebar.pages[2].visible).toEqual(false); // propertyGridPlaceholder
  expect(creator.sidebar.pages[3].visible).toEqual(true); // translation

  creator.sidebar.activePage = "toolbox";
  expect(creator.sidebar.headerText).toEqual(undefined);
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