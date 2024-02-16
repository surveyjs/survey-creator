import { CreatorTester } from "./creator-tester";
import { CreatorPreset } from "../src/presets/presets";

test("show/hidetabs", () => {
  const creator = new CreatorTester();
  expect(creator.tabs).toHaveLength(3);
  new CreatorPreset({}).apply(creator);
  expect(creator.tabs).toHaveLength(3);
  new CreatorPreset({ tabs: { items: [] } }).apply(creator);
  expect(creator.tabs).toHaveLength(3);
  expect(creator.activeTab).toBe("designer");
  const preset = new CreatorPreset({
    tabs: {
      items: ["preview", "unknown", "designer"],
      activeTab: "preview"
    }
  });
  preset.apply(creator);
  expect(creator.tabs).toHaveLength(2);
  expect(creator.tabs[0].id).toBe("test");
  expect(creator.tabs[1].id).toBe("designer");
  expect(creator.activeTab).toBe("test");
});
test("set toolbox categories", () => {
  const creator = new CreatorTester();
  const preset = new CreatorPreset({
    toolbox: {
      items: ["text", "dropdown"],
      categories: [
        { category: "matrix", items: ["matrix", "matrixdropdown"] }
      ]
    }
  });
  preset.apply(creator);
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
  expect(creator.toolbox.categories).toHaveLength(1);
  expect(creator.toolbox.visibleActions).toHaveLength(3);
  expect(creator.toolbox.hasCategories).toBeFalsy();
});