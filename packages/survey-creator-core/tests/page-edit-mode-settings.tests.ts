import { afterEach, beforeEach, expect, test } from "vitest";
import { PageModel, settings as surveySettings } from "survey-core";
import { PageAdorner } from "../src/components/page";
import { TranslationSideBySide } from "../src/components/tabs/translation-side-by-side";
import { TabTranslationPlugin } from "../src/components/tabs/translation-plugin";
import { BeforeShowInplaceDescriptionEditorEvent } from "../src/creator-events-api";
import { CreatorTester } from "./creator-tester";

// A page with an empty title and an empty description.
const pageJSON = { pages: [{ name: "page1", elements: [{ type: "text", name: "q1" }] }] };
// A titled page and a titled panel with empty descriptions: _showDescription requires hasTitle,
// so only these check showEmptyDescriptionsInDesignMode on its own.
const titledJSON = {
  pages: [{
    name: "page1", title: "Page 1",
    elements: [{ type: "panel", name: "panel1", title: "Panel 1", elements: [{ type: "text", name: "q1" }] }]
  }]
};
const noHeaderClass = "svc-page__content--no-header";

// Every test restores survey-core's global settings: at the baseline the pageEditMode setter writes them.
let savedDesignMode: { showEmptyTitles: boolean, showEmptyDescriptions: boolean };
beforeEach(() => {
  savedDesignMode = { ...surveySettings.designMode };
  surveySettings.designMode.showEmptyTitles = true;
  surveySettings.designMode.showEmptyDescriptions = true;
});
afterEach(() => {
  surveySettings.designMode.showEmptyTitles = savedDesignMode.showEmptyTitles;
  surveySettings.designMode.showEmptyDescriptions = savedDesignMode.showEmptyDescriptions;
});

function createCreator(pageEditMode: "standard" | "single" | "bypage"): CreatorTester {
  const creator = new CreatorTester({ pageEditMode: pageEditMode });
  creator.JSON = JSON.parse(JSON.stringify(pageJSON));
  return creator;
}
function getFirstPage(creator: CreatorTester): PageModel {
  return creator.survey.pages[0];
}
function hasNoHeaderClass(creator: CreatorTester): boolean {
  const adorner = new PageAdorner(creator, getFirstPage(creator));
  const res = adorner.css.split(" ").indexOf(noHeaderClass) > -1;
  adorner.dispose();
  return res;
}
function expectEmptyHeaderShown(creator: CreatorTester, shown: boolean, message: string): void {
  const page = getFirstPage(creator);
  expect(page.hasTitle, message + ": hasTitle").toBe(shown);
  expect(page["_showDescription"], message + ": _showDescription").toBe(shown);
}

test("pageEditMode does not change settings.designMode", () => {
  const snapshot = { ...surveySettings.designMode };
  const creator = new CreatorTester({ pageEditMode: "single" });
  expect(surveySettings.designMode, "single").toEqual(snapshot);
  creator.pageEditMode = "standard";
  expect(surveySettings.designMode, "standard").toEqual(snapshot);
  creator.pageEditMode = "bypage";
  expect(surveySettings.designMode, "bypage").toEqual(snapshot);
});

test("a single creator and a standard creator on one page do not change each other", () => {
  const single1 = createCreator("single");
  const standard1 = createCreator("standard");
  expectEmptyHeaderShown(single1, false, "single created first");
  expectEmptyHeaderShown(standard1, true, "standard created second");

  const standard2 = createCreator("standard");
  const single2 = createCreator("single");
  expectEmptyHeaderShown(standard2, true, "standard created first");
  expectEmptyHeaderShown(single2, false, "single created second");
});

test("a customer's global showEmptyTitles = false is kept by a standard creator", () => {
  surveySettings.designMode.showEmptyTitles = false;
  const creator = createCreator("standard");
  expect(getFirstPage(creator).hasTitle).toBe(false);
  expect(hasNoHeaderClass(creator)).toBe(true);
  expect(surveySettings.designMode.showEmptyTitles).toBe(false);
});

test("a single creator hides empty page titles and descriptions when the customer's globals are true", () => {
  const creator = createCreator("single");
  // The customer's globals, set after the creator exists (at the baseline the setter overwrites earlier values).
  surveySettings.designMode.showEmptyTitles = true;
  surveySettings.designMode.showEmptyDescriptions = true;
  expectEmptyHeaderShown(creator, false, "single");
  expect(hasNoHeaderClass(creator)).toBe(true);
});

test("switching pageEditMode on a live creator updates the designer survey", () => {
  const creator = createCreator("standard");
  expectEmptyHeaderShown(creator, true, "standard");
  expect(hasNoHeaderClass(creator), "standard").toBe(false);

  creator.pageEditMode = "single";
  // The customer's globals stay true: only the creator's own survey hides the empty header.
  surveySettings.designMode.showEmptyTitles = true;
  surveySettings.designMode.showEmptyDescriptions = true;
  expectEmptyHeaderShown(creator, false, "single");
  expect(hasNoHeaderClass(creator), "single").toBe(true);

  creator.pageEditMode = "standard";
  expectEmptyHeaderShown(creator, true, "standard again");
  expect(hasNoHeaderClass(creator), "standard again").toBe(false);
});

test("single mode hides empty descriptions of a titled page and a titled panel, standard mode shows them", () => {
  const single = new CreatorTester({ pageEditMode: "single" });
  single.JSON = JSON.parse(JSON.stringify(titledJSON));
  const standard = new CreatorTester({ pageEditMode: "standard" });
  standard.JSON = JSON.parse(JSON.stringify(titledJSON));
  // The customer's globals, set after the creators exist (at the baseline the setter overwrites earlier values).
  surveySettings.designMode.showEmptyTitles = true;
  surveySettings.designMode.showEmptyDescriptions = true;
  expect(single.survey.pages[0].hasTitle, "single: page title").toBe(true);
  expect(single.survey.pages[0]["_showDescription"], "single: page").toBe(false);
  expect(single.survey.getPanelByName("panel1")["_showDescription"], "single: panel").toBe(false);
  expect(standard.survey.pages[0]["_showDescription"], "standard: page").toBe(true);
  expect(standard.survey.getPanelByName("panel1")["_showDescription"], "standard: panel").toBe(true);
});

test("a replaced designer survey keeps the single mode and the JSON does not contain the survey properties", () => {
  const creator = createCreator("single");
  creator.JSON = { elements: [{ type: "text", name: "q2" }] };
  expect(creator.survey.showEmptyTitlesInDesignMode).toBe(false);
  expect(creator.survey.showEmptyDescriptionsInDesignMode).toBe(false);
  expectEmptyHeaderShown(creator, false, "after creator.JSON");

  creator.text = JSON.stringify({ elements: [{ type: "text", name: "q3" }] });
  expect(creator.survey.getQuestionByName("q3")).toBeTruthy();
  expectEmptyHeaderShown(creator, false, "after creator.text");

  const json = JSON.stringify(creator.JSON);
  expect(json.indexOf("showEmptyTitlesInDesignMode")).toBe(-1);
  expect(json.indexOf("showEmptyDescriptionsInDesignMode")).toBe(-1);
  expect(creator.text.indexOf("showEmptyTitlesInDesignMode")).toBe(-1);
  expect(creator.text.indexOf("showEmptyDescriptionsInDesignMode")).toBe(-1);
});

function openTranslationPanes(pageEditMode: "standard" | "single"): TranslationSideBySide {
  const creator = new CreatorTester({ pageEditMode: pageEditMode, showTranslationTab: true, translationMode: "sideBySide" });
  creator.JSON = { locale: "de", pages: [{ name: "page1", elements: [{ type: "text", name: "q1", title: { default: "Question 1", de: "Frage 1" } }] }] };
  // The customer's globals, set after the creator exists (at the baseline the setter overwrites earlier values).
  surveySettings.designMode.showEmptyTitles = true;
  surveySettings.designMode.showEmptyDescriptions = true;
  creator.activeTab = "translation";
  const model = <TranslationSideBySide>(<TabTranslationPlugin>creator.getPlugin("translation")).model;
  expect(model.sourceSurvey).toBeTruthy();
  expect(model.targetSurvey).toBeTruthy();
  return model;
}
test("the translation panes follow the single mode", () => {
  const single = openTranslationPanes("single");
  expect(single.targetSurvey.pages[0]["_showDescription"], "single: target").toBe(false);
  // The source pane forces its page-title row (setupSourceEmptySpaces), so only the description follows the mode.
  expect(single.sourceSurvey.pages[0].hasTitle, "single: source title row").toBe(true);
  expect(single.sourceSurvey.pages[0]["_showDescription"], "single: source").toBe(false);

  const standard = openTranslationPanes("standard");
  expect(standard.sourceSurvey.pages[0]["_showDescription"], "standard: source").toBe(true);
});

test("onBeforeShowInplaceDescriptionEditor gets show = false for empty page and panel descriptions in single mode and can override it", () => {
  [pageJSON, titledJSON].forEach((json, index) => {
    const creator = new CreatorTester({ pageEditMode: "single" });
    const shows: { [name: string]: Array<boolean> } = {};
    creator.onBeforeShowInplaceDescriptionEditor.add((_, options: BeforeShowInplaceDescriptionEditorEvent) => {
      if (options.element.isPage || options.element.isPanel) {
        const name = options.element.name;
        (shows[name] = shows[name] || []).push(options.show);
        options.show = true;
      }
    });
    creator.JSON = JSON.parse(JSON.stringify(json));
    surveySettings.designMode.showEmptyTitles = true;
    surveySettings.designMode.showEmptyDescriptions = true;
    const elements: Array<any> = [getFirstPage(creator)];
    if (json === titledJSON) elements.push(creator.survey.getPanelByName("panel1"));
    elements.forEach(el => {
      const message = "json #" + index + ", " + el.name;
      // the handler runs when _showDescription is read
      expect(el["_showDescription"], message + ": overridden").toBe(true);
      expect(shows[el.name]?.length > 0, message + ": handler called").toBe(true);
      expect(shows[el.name].every(show => show === false), message + ": show = false").toBe(true);
    });
  });
});
