import { CreatorTester } from "./creator-tester";
import SurveyThemes from "survey-core/themes";

test("Inline layout: the design surface takes the panelless theme variables and drops them on a switch back", () => {
  const creator = new CreatorTester({ layoutMode: "inline" });
  creator.JSON = { elements: [{ type: "text", name: "q1" }, { type: "panel", name: "p1", elements: [{ type: "text", name: "q2" }] }] };
  expect(creator.isInlineLayout).toBeTruthy();

  creator.theme = SurveyThemes.DefaultLightPanelless;
  let vars = creator.survey.themeVariables;
  expect(vars["--sjs2-is-panelless"]).toBe("true");
  expect(vars["--sjs2-color-component-panel-simple-default-bg"]).toBe("transparent");
  expect(vars["--sjs2-layout-component-panel-simple-content-area-padding-horizontal"]).toBe("var(--sjs2-spacing-x000)");

  creator.theme = SurveyThemes.DefaultLight;
  vars = creator.survey.themeVariables;
  expect(vars["--sjs2-is-panelless"]).toBeUndefined();
  expect(vars["--sjs2-color-component-panel-simple-default-bg"]).toBeUndefined();
  expect(vars["--sjs2-layout-component-panel-simple-content-area-padding-horizontal"]).toBeUndefined();
});

test("Inline layout: a panelless theme set before the JSON is applied to the new design surface", () => {
  const creator = new CreatorTester({ layoutMode: "inline" });
  creator.theme = SurveyThemes.DefaultLightPanelless;
  creator.JSON = { elements: [{ type: "text", name: "q1" }] };
  expect(creator.survey.themeVariables["--sjs2-is-panelless"]).toBe("true");
  expect(creator.survey.themeVariables["--sjs2-color-component-panel-simple-default-bg"]).toBe("transparent");
});
