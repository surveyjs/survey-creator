import { ItemValue, QuestionDropdownModel } from "survey-core";
import { TranslationBase, TranslationGroup } from "../../src/components/tabs/translation";
import { TranslationSideBySide, getTranslationLocaleProgress } from "../../src/components/tabs/translation-side-by-side";
import { TabTranslationPlugin } from "../../src/components/tabs/translation-plugin";
import { CreatorTester } from "../creator-tester";

// Shared by the "translation tree is built once" tests of the default and side-by-side modes:
// the survey they run on, normalized snapshots of the model state (no object identities and no
// generated ids, which every reset renews by design), and a counter of the tree builds.

export const treeOnceJSON = {
  title: "Survey title",
  description: { default: "Survey description", de: "Umfragebeschreibung" },
  pages: [
    {
      name: "page1",
      title: "Page 1",
      elements: [
        {
          type: "panel", name: "panel1", title: "Panel 1",
          elements: [{ type: "text", name: "q1", title: { default: "Question 1", de: "Frage 1" } }]
        },
        {
          type: "checkbox", name: "q2", title: "Question 2",
          choices: [{ value: "item1", text: "Item 1" }, { value: "item2", text: { default: "Item 2", de: "Element 2" } }]
        }
      ]
    },
    {
      name: "page2",
      elements: [
        {
          type: "matrixdropdown", name: "q3", title: "Question 3",
          columns: [{ name: "col1", title: "Column 1" }, { name: "col2", title: { default: "Column 2", de: "Spalte 2" } }],
          rows: [{ value: "row1", text: "Row 1" }, { value: "row2", text: "Row 2" }]
        },
        { type: "text", name: "q4", title: "Question 4" }
      ]
    }
  ]
};

// The survey takes ownership of the loaded JSON object, so a copy keeps tests independent; every
// copy also gives the creator a survey whose pages are new objects.
export function getTreeOnceJSON(locale?: string): any {
  const json = JSON.parse(JSON.stringify(treeOnceJSON));
  if (!!locale) json.locale = locale;
  return json;
}
export function createTreeOnceCreator(options: any = {}, activate: boolean = true, locale?: string): CreatorTester {
  const creator = new CreatorTester(Object.assign({ showTranslationTab: true }, options));
  creator.JSON = getTreeOnceJSON(locale);
  if (activate) creator.activeTab = "translation";
  return creator;
}
export function getTranslationPlugin(creator: CreatorTester): TabTranslationPlugin {
  return <TabTranslationPlugin>creator.getPlugin("translation");
}
export function getTranslationModel(creator: CreatorTester): TranslationBase {
  return getTranslationPlugin(creator).model;
}

// One line per group: its full name, then its items with their stored texts (if any).
export function getTreeSnapshot(root: TranslationGroup): Array<string> {
  const res = new Array<string>();
  const visit = (group: TranslationGroup): void => {
    const items = group.locItems.map(item => {
      const json = item.locString.getJson();
      return item.name + (!!json ? "=" + JSON.stringify(json) : "");
    });
    res.push(group.fullName + ": " + items.join("; "));
    group.groups.forEach(visit);
  };
  if (!!root) visit(root);
  return res;
}
export function getStringsSurveySnapshot(model: TranslationBase): any {
  const survey = model.stringsSurvey;
  if (!survey) return null;
  return {
    questions: survey.getAllQuestions().map((q: any) => q.name + ": " + (q.rows || []).map((row: ItemValue) => row.value).join(", ")),
    data: survey.data
  };
}
function getFilteredPageSnapshot(model: TranslationBase): any {
  return !!model.filteredPage ? model.filteredPage.name : model.filteredPage;
}
export function getModelSnapshot(model: TranslationBase): any {
  return {
    root: !!model.root ? model.root.fullName : null,
    tree: getTreeSnapshot(model.root),
    strings: getStringsSurveySnapshot(model),
    locales: model.locales.slice(),
    filteredPage: getFilteredPageSnapshot(model),
    showAllStrings: model.showAllStrings,
    isEmpty: model.isEmpty
  };
}
// The side-by-side state that has no strings survey (the form view) or comes on top of it.
export function getSideBySideSnapshot(creator: CreatorTester): any {
  const model = <TranslationSideBySide>getTranslationModel(creator);
  const copiesMap = (<any>model).copiesMap;
  const target = <QuestionDropdownModel>model.settingsSurvey.getQuestionByName("targetLocale");
  const allItems = !!model.root ? model.root.allLocItems : [];
  return {
    model: getModelSnapshot(model),
    sourceLocale: model.sourceLocale,
    targetLocale: model.targetLocale,
    readOnlyItems: allItems.filter(item => item.readOnly).length + "/" + allItems.length,
    usedStrings: model.getUsedStringsItems().map(item => item.name),
    counters: !!target ? target.choices.filter((item: ItemValue) => !!getTranslationLocaleProgress(item))
      .map((item: ItemValue) => item.value + ": " + getTranslationLocaleProgress(item)) : null,
    copies: copiesMap.byRealLocStr.size,
    editableCopies: copiesMap.byEditableCopy.size
  };
}

// Counts TranslationGroup.fillItems calls on roots, by kind. A root is recognized by its object:
// the creator's survey (the main tree of the model, or the used-strings tree when its owner is
// the used-strings owner), another survey (the side-by-side pane copies), or one of the pages
// passed in (a page-scoped main tree).
export interface ITreeBuildCounts { main: number, used: number, copy: number, page: number, other: number }
export function countRootBuilds(creator: CreatorTester, fn: () => void, pages: Array<any> = []): ITreeBuildCounts {
  const spy = vi.spyOn(<any>TranslationGroup.prototype, "fillItems");
  try {
    fn();
    const res: ITreeBuildCounts = { main: 0, used: 0, copy: 0, page: 0, other: 0 };
    const model = getTranslationModel(creator);
    spy.mock.contexts.forEach((group: any) => {
      const owner = group.translation;
      const obj = group.obj;
      const isUsedOwner = !!owner && owner.constructor.name === "TranslationUsedStringsOwner";
      if (obj === creator.survey) {
        if (owner === model) res.main++;
        else if (isUsedOwner) res.used++;
        else res.other++;
      } else if (!!obj && typeof obj.getType === "function" && obj.getType() === "survey") {
        if (owner === model) res.copy++;
        else res.other++;
      } else if (pages.indexOf(obj) > -1 && owner === model) {
        res.page++;
      }
    });
    return res;
  } finally {
    spy.mockRestore();
  }
}
