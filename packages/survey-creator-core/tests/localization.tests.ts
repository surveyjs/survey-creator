import { editorLocalization, defaultStrings } from "../src/editorLocalization";

test("Get nested property", () => {
  expect(editorLocalization.getString("qt.text")).toEqual("Single Input");
  expect(editorLocalization.getString("qt.text1")).toEqual("text1");
  expect(editorLocalization.getString("qt1.text")).toEqual("qt1");
});
test("Get property name and title", () => {
  expect(editorLocalization.getPropertyName("text_name")).toEqual("Name");
  expect(editorLocalization.getPropertyTitle("text_name")).toEqual("");
  expect(editorLocalization.getPropertyName("text_title")).toEqual(defaultStrings.p.title.name);
  expect(editorLocalization.getPropertyTitle("text_title")).toEqual(defaultStrings.p.title.title);
});
test("getProperty function breaks on word automatically", () => {
  expect(editorLocalization.getProperty("someGoodProperty")).toEqual("Some good property");
  expect(editorLocalization.getPropertyName("title")).toEqual("Title");
  expect(editorLocalization.getPropertyName("title", "My title")).toEqual("My title");
  editorLocalization.camelCaseBreaking = false;
  expect(editorLocalization.getProperty("aGoodProperty")).toEqual("aGoodProperty");
  editorLocalization.camelCaseBreaking = true;
});
test("add de localization", () => {
  const deutschStrings = {
    p: {
      isRequired: "Wird benötigt",
    },
  };
  editorLocalization.locales["de"] = deutschStrings;
  editorLocalization.currentLocale = "de";
  expect(editorLocalization.getString("p.isRequired")).toEqual(deutschStrings.p.isRequired);
  expect(editorLocalization.getString("op.empty")).toEqual(defaultStrings.op.empty);
});
test("change default ('en') locale", () => {
  const enStrings = defaultStrings;
  enStrings.p.isRequired = "some new text";

  editorLocalization.locales["en"] = enStrings;
  editorLocalization.currentLocale = "en";

  expect(editorLocalization.getString("p.isRequired")).toEqual(enStrings.p.isRequired);
});

test("change string to empty string", () => {
  var enStrings = defaultStrings;
  var prevValue = enStrings.ed.newTextItemName;
  enStrings.ed.newTextItemName = "";

  expect(editorLocalization.getString("ed.newTextItemName")).toEqual("");
  enStrings.ed.newTextItemName = prevValue;
});

test("getPropertyNameInEditor", () => {
  expect(editorLocalization.getPropertyNameInEditor("rateMin")).toEqual("Minimum rate");
  expect(editorLocalization.getPropertyNameInEditor("someGoodProperty")).toEqual("Some good property");
  expect(editorLocalization.getPropertyNameInEditor("title")).toEqual("Title");
});

test("getPropertyNameInEditor, go to p, if pe is emtpy", () => {
  var enStrings = defaultStrings;
  enStrings.p["isRequired2"] = "some new text";

  editorLocalization.locales["en"] = enStrings;
  editorLocalization.currentLocale = "en";

  expect(editorLocalization.getPropertyNameInEditor("isRequired2")).toEqual("some new text");
});
test("getPropertyValue and convertToCamelCase", () => {
  expect(editorLocalization.getPropertyValue("progressTop")).toEqual("progress on top");
  expect(editorLocalization.convertToCamelCase("onTop")).toEqual("On top");
  expect(editorLocalization.convertToCamelCase("USD")).toEqual("USD");
  expect(editorLocalization.convertToCamelCase("USD", true)).toEqual("USD");
  expect(editorLocalization.getPropertyValue("USD")).toEqual("USD");
});

