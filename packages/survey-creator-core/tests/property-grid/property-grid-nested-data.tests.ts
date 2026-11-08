import { editorLocalization } from "../../src/editorLocalization";

const valueNameHelp = "The questions inside this panel or page store their values in an object under this key in survey results." +
  " If you leave it empty, their values are stored with the values of the enclosing panel or page (or at the top level), unless" +
  " the survey's \"Store panel and page values in objects\" setting nests every panel or page under its name. When that setting" +
  " is \"Never (flat data)\", the key is kept but ignored. The key is not available inside a dynamic panel, a matrix detail" +
  " section, or a composite question, whose entries keep flat data.";

const dataNestingHelp = "Specifies which panels and pages store their questions' values in an object." +
  " \"Panels and pages with a data key\" nests only the panels and pages whose data key is set. \"Every panel\"," +
  " \"Every page\", and \"Every panel and page\" also nest the panels or pages without a data key, under their names." +
  " \"Never (flat data)\" ignores every data key and stores all values at the top level. Changing this setting" +
  " does not move data you have already collected.";

describe("property grid strings: panel and page valueName, survey dataNesting (nested data, survey-library #12233)", () => {
  test("a panel's and a page's valueName is the data key, a question's is still the join identifier", () => {
    expect(editorLocalization.getPropertyNameInEditor("panel", "valueName")).toBe("Data key");
    expect(editorLocalization.getPropertyNameInEditor("page", "valueName")).toBe("Data key");
    expect(editorLocalization.getPropertyNameInEditor("text", "valueName")).toBe("Join identifier");
    expect(editorLocalization.getPropertyHelpInEditor("panel", "valueName")).toBe(valueNameHelp);
    expect(editorLocalization.getPropertyHelpInEditor("page", "valueName")).toBe(valueNameHelp);
    expect(editorLocalization.getPropertyHelpInEditor("text", "valueName").indexOf("A join identifier")).toBe(0);
  });
  test("the survey's dataNesting has a title, a help text and a text per choice", () => {
    expect(editorLocalization.getPropertyNameInEditor("survey", "dataNesting")).toBe("Store panel and page values in objects");
    expect(editorLocalization.getPropertyHelpInEditor("survey", "dataNesting")).toBe(dataNestingHelp);
    expect(["auto", "none", "panel", "page", "panelAndPage"].map(val => editorLocalization.getPropertyValueInEditor("dataNesting", val)))
      .toEqual(["Panels and pages with a data key", "Never (flat data)", "Every panel", "Every page", "Every panel and page"]);
  });
});
