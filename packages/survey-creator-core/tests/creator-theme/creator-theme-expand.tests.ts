import { CreatorTester } from "../creator-tester";
import { ICreatorTheme } from "../../src/creator-theme/creator-themes";
import { mockDomWindowGetComputedStyleFromInlineStyles, mockGetRGBaColorIdentity, restoreGetRGBaColorMock } from "../tabs/theme-test-mocks";
import { DomWindowHelper } from "survey-core";

beforeEach(() => {
  mockGetRGBaColorIdentity();
  mockDomWindowGetComputedStyleFromInlineStyles();
});
afterEach(() => {
  restoreGetRGBaColorMock();
  (DomWindowHelper.getWindow as any).mockRestore?.();
});

test("creator.applyCreatorTheme expands bare base-variable references into fallback chains", () => {
  const creator: CreatorTester = new CreatorTester({ showThemeTab: true, showCreatorThemeSettings: true });
  const themeJson: ICreatorTheme = {
    themeName: "custom",
    cssVariables: {
      "--test-brand": "var(--sjs2-color-bg-brand-primary)",
      "--test-literal": "green",
      "--test-with-fallback": "var(--sjs2-color-bg-brand-primary, red)"
    }
  };

  creator.applyCreatorTheme(themeJson);

  expect(creator.themeVariables["--test-brand"]).toEqual("var(--sjs2-color-bg-brand-primary, var(--sjs2-color-project-brand-600, #19B394))");
  expect(creator.themeVariables["--test-literal"]).toEqual("green");
  expect(creator.themeVariables["--test-with-fallback"]).toEqual("var(--sjs2-color-bg-brand-primary, red)");
});

test("creator.setSurfaceCssVariables expands bare base-variable references into fallback chains", () => {
  const creator: CreatorTester = new CreatorTester({ showThemeTab: true, showCreatorThemeSettings: true });

  creator.setSurfaceCssVariables({
    "--test-brand": "var(--sjs2-color-bg-brand-primary)",
    "--test-literal": "8px"
  });

  expect(creator.defaultSurfaceCssVariables["--test-brand"]).toEqual("var(--sjs2-color-bg-brand-primary, var(--sjs2-color-project-brand-600, #19B394))");
  expect(creator.defaultSurfaceCssVariables["--test-literal"]).toEqual("8px");
});
