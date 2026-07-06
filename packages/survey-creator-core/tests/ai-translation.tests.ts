import { settings, surveyLocalization } from "survey-core";
import { CreatorTester } from "./creator-tester";

test("startMachineTranslationTo passes the default locale name into onMachineTranslate options", () => {
  const creator = new CreatorTester();
  creator.JSON = {
    elements: [{ type: "text", name: "q1", title: "Title" }]
  };
  let fromLocale: string = undefined;
  creator.onMachineTranslate.add((sender, options) => {
    fromLocale = options.fromLocale;
    options.callback(options.strings.map(str => options.toLocale + ": " + str));
  });
  // By default the survey-core default locale is used
  creator.startMachineTranslationTo(["de"]);
  expect(fromLocale, "default locale name is not set").toBe(surveyLocalization.defaultLocale);

  // A configured default locale name is passed as the source locale
  settings.localization.defaultLocaleName = "en-GB";
  try {
    creator.JSON = { elements: [{ type: "text", name: "q2", title: "Title2" }] };
    creator.startMachineTranslationTo(["fr"]);
    expect(fromLocale, "configured default locale name").toBe("en-GB");
  } finally {
    settings.localization.defaultLocaleName = "default";
  }
});
test("Translate untranslated strings", () => {
  const creator = new CreatorTester();
  creator.JSON = {
    pages: [
      {
        name: "page1",
        elements: [
          {
            type: "checkbox",
            name: "q1",
            description: "desc",
            choices: [
              { value: 1, text: "text1" },
              { value: "text2" },
              { value: 3 }
            ]
          }
        ]
      }
    ]
  };
  creator.onMachineTranslate.add((sender, options) => {
    const translatedStrings = new Array<string>();
    options.strings.forEach(str => { translatedStrings.push(options.toLocale + ": " + str); });
    options.callback(translatedStrings);
  });
  creator.startMachineTranslationTo(["de", "fr"]);
  const q = creator.survey.getQuestionByName("q1");
  expect(q.locTitle.isEmpty).toBeTruthy();
  expect(q.locDescription.getJson()).toStrictEqual({ default: "desc", fr: "fr: desc", de: "de: desc" });
  expect(q.choices[0].locText.getJson()).toStrictEqual({ default: "text1", fr: "fr: text1", de: "de: text1" });
  expect(q.choices[1].locText.getJson()).toStrictEqual({ fr: "fr: text2", de: "de: text2" });
  expect(q.choices[2].locText.isEmpty).toBeTruthy();
});
test("Translate untranslated strings & options.clearTranslationsOnSourceTextChange - survey.toJSON()", () => {
  const creator = new CreatorTester({
    clearTranslationsOnSourceTextChange: true
  });
  creator.JSON = {
    pages: [
      {
        name: "page1",
        elements: [
          {
            type: "checkbox",
            name: "q1",
            title: "Tilte",
            choices: [
              { value: "text1" }
            ]
          }
        ]
      }
    ]
  };
  creator.onMachineTranslate.add((sender, options) => {
    const translatedStrings = new Array<string>();
    options.strings.forEach(str => { translatedStrings.push(options.toLocale + ": " + str); });
    options.callback(translatedStrings);
  });
  creator.startMachineTranslationTo(["de", "fr"]);
  expect(creator.JSON).toMatchObject({
    pages: [{
      name: "page1",
      elements: [
        {
          type: "checkbox",
          name: "q1",
          title: { default: "Tilte", fr: "fr: Tilte", de: "de: Tilte" },
          choices: [
            { value: "text1", text: { fr: "fr: text1", de: "de: text1" } }
          ]
        }
      ] }] });
});
test("Do not call for translated strings", () => {
  const creator = new CreatorTester({
    clearTranslationsOnSourceTextChange: true
  });
  creator.JSON = {
    pages: [
      {
        name: "page1",
        title: "Page 1",
        elements: [
          {
            type: "checkbox",
            name: "q1",
            title: "Tilte",
            choices: [
              { value: "text1" }
            ]
          }
        ]
      }
    ]
  };
  let translatedHash: any = {};
  creator.onMachineTranslate.add((sender, options) => {
    translatedHash[options.toLocale] = options.strings.length;
    const translatedStrings = new Array<string>();
    options.strings.forEach(str => { translatedStrings.push(options.toLocale + ": " + str); });
    options.callback(translatedStrings);
  });
  creator.startMachineTranslationTo(["de", "fr"]);
  expect(translatedHash).toMatchObject({ de: 3, fr: 3 });
  translatedHash = { de: 0, fr: 0 };
  creator.startMachineTranslationTo(["de", "fr"]);
  expect(translatedHash).toMatchObject({ de: 0, fr: 0 });
  creator.startMachineTranslationTo(["de", "fr", "it"]);
  expect(translatedHash).toMatchObject({ de: 0, fr: 0, it: 3 });
  creator.survey.title = "New title";
  creator.survey.locTitle.setLocaleText("de", "New title de");
  translatedHash = { de: 0, fr: 0, it: 0 };
  creator.startMachineTranslationTo(["de", "fr", "it"]);
  expect(translatedHash).toMatchObject({ de: 0, fr: 1, it: 1 });
  creator.survey.title = "New title1";
  creator.survey.locTitle.setLocaleText("fr", "New title1 de");
  translatedHash = { de: 0, fr: 0, it: 0 };
  creator.startMachineTranslationTo(["de", "fr", "it", "es"]);
  expect(translatedHash).toMatchObject({ de: 1, fr: 0, it: 1, es: 4 });
});
