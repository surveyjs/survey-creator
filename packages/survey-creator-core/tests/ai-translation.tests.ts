import { CreatorTester } from "./creator-tester";

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
