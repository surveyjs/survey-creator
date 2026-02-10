import { CreatorTester } from "../tests/creator-tester";
import { UIPresetEditor } from "../src/ui-preset-editor/presets-plugin";

test("UIPresetEditor: pagesAction.title falls back to empty string when selected item has no title", () => {
  const creator = new CreatorTester();
  const plugin = new UIPresetEditor(creator);

  plugin.activate();

  const pagesAction: any = plugin.model.navigationBar.getActionById("presets-pages");
  expect(pagesAction).toBeTruthy();

  const pagesList: any = (plugin as any)["pagesList"];
  expect(pagesList).toBeTruthy();
  expect(pagesList.actions.length).toBeGreaterThan(0);

  const surveyModel: any = plugin.model.model;
  surveyModel.currentPage = surveyModel.pages[1];

  expect(pagesAction.title).toBe(surveyModel.currentPage.navigationTitle);
  plugin.deactivate();
});

