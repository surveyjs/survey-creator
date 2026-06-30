import { Locator, Page } from "playwright/test";
import { test } from "../e2e/helper";

export * from "../e2e/helper";

export const setOptions = async (page, options) => {
  await page.waitForFunction(() => !!window["creator"]);
  await page.evaluate((options) => {
    (window as any).creator.setOptions(options);
  }, options);
};

// export const handleShiftEnter = ClientFunction((selector: string) => {
//   document.querySelector(selector).addEventListener("keypress", function (e: any) {
//     if (e.charCode === 13 && e.shiftKey) {
//       var editorEl = document.querySelector(selector) as any;
//       var selection = window.getSelection() as any;
//       var range = document.createRange();

//       editorEl.innerHTML += "<div><br/></div>";

//       range.setStart(editorEl, editorEl.childNodes.length);
//       range.setEnd(editorEl, editorEl.childNodes.length);

//       selection.removeAllRanges();
//       selection.addRange(range);
//     }
//   });
// });

// export const SingleInputToolboxItem = Selector("[aria-label='Single-Line Input']");
// export const RatingToolboxItem = Selector("[aria-label='Rating Scale']");

export const creatorTabDesignerName = "Designer";
export const creatorTabPreviewName = "Preview";
export const creatorTabLogicName = "Logic";
export const creatorTabTranslationName = "Translation";
export const creatorTabThemeName = "Themes";
export const generalGroupName = "General";
export const logicGroupName = "Conditions";
export const inputMaskSettingsGroupName = "Input Mask Settings";

// export const creatorContentSelector = Selector(".svc-creator__content-holder");

export const expandButtonSelector = (page) => page.locator(".sv-action-bar-item[title=\"Show Panel\"]");
export const collapseButtonSelector = (page) => page.locator(".sv-action-bar-item[title=\"Hide Panel\"]");
export const surveySettingsButtonSelector = (page) => page.locator(".sv-action-bar-item[title=\"Survey settings\"]");
export const themeSettingsButtonSelector = (page) => page.locator(".sv-action-bar-item[title=\"Theme settings\"]");
// export const propertyGridSelector = Selector(".svc-side-bar__container");
// export const objectSelectorButton = Selector(".svc-side-bar__container-header .sv-action--object-selector .sv-action-bar-item");
// export const objectSelectorPopup = Selector(".sv-popup.svc-object-selector .svc-list__container");
// export const selectedObjectTextSelector = ".svc-side-bar__container-header .sv-action--object-selector .sv-action-bar-item__title";

// export const questions = Selector(".svc-question__content");
// export const questionToolbarActions = Selector(".svc-question__content--selected .svc-question__content-actions").find(".sv-action");
// export const unselectedQuestionToolbarActions = Selector(".svc-question__content-actions").find(".sv-action");

// export const pageNavigator = Selector(".svc-page-navigator__selector");
// export const toolbox = Selector(".svc-toolbox");
// export const toolboxItems = Selector(".svc-toolbox__tool");
// export const toolboxItemIcons = Selector(".svc-toolbox__tool .svc-toolbox__item-container");
// export const toolboxItemTitles = Selector(".svc-toolbox__tool .svc-toolbox__item > .svc-toolbox__item-title");

// export const logicAddNewRuleButton = Selector(".svc-logic-tab__content-action").withText("Add New Rule");
// export const logicQuestionSelector = Selector(".svc-logic-operator.svc-logic-operator--question");
// export const logicOperatorSelector = Selector(".svc-logic-operator.svc-logic-operator--operator:not(.sl-paneldynamic__add-btn)");
// export const logicActionSelector = Selector(".svc-logic-operator--action");
// export const logicQuestionValueSelector = Selector(".svc-logic-question-value");
// export const logicDropdownValueSelector = Selector(".sd-input.sd-dropdown .sd-dropdown__value");
// export const logicOperatorConjuction = Selector(".svc-logic-operator.svc-logic-operator--conjunction");
// export const logicActionTriggerEditorElement = Selector(".svc-logic_trigger-editor");
// export const logicActionTriggerQuestionsElement = Selector(".svc-logic_trigger-questions");
// export const logicDetailButtonElement = Selector(".sl-table__detail-button");
// export const tableRulesSelector = Selector(".sl-table tbody .sl-table__row:not(.st-table__row--detail)");

export function getTabbedMenuItemByText(page: Page, text: "Designer" | "Preview" | "Logic" | "Translation" | "JSON Editor" | "Embed Survey" | "Miner Logik" | "Themes"): Locator {
  return page.locator(".svc-tabbed-menu-item-container .svc-tabbed-menu-item__text").getByText(text).or(page.locator(".svc-tabbed-menu-item-container").filter({ has: page.locator("title").getByText(text) }));
}
export function getSelectOptionByText(page, text: string) {
  return page.locator("option").withExactText(text);
}
export function getBarItemByText(page, text) {
  return page.locator(".sv-action-bar-item").getByText(text);
}
export function getPropertyGridCategory(page, categoryName) {
  return page.locator(".spg-panel__title span").getByText(categoryName);
}

export function getBarItemByTitle(page, text: string) {
  return page.locator(".sv-action-bar-item[title=\"" + text + "\"]");
}
export function getQuestionBarItemByTitle(page, text: string) {
  return page.locator(".svc-survey-element-toolbar__item[title=\"" + text + "\"]");
}
export function getListItemByText(page, text) {
  return page.locator(".sv-popup__content .svc-list .svc-list__item").getByText(text);
}
export function getSurveyListItemByText(page, text) {
  return page.locator(".sv-popup__content .sv-list__item").getByText(text);
}
export function getAddNewQuestionButton(page) {
  return page.locator(".svc-element__add-new-question > span").getByText("Add Question");
}

export function getToolboxItemByText(page, text) {
  return page.locator(".svc-toolbox__item-title").getByText(text, { exact: true });
}
export function getToolboxItemByAriaLabel(page, text) {
  return page.locator(".svc-toolbox__item").withAttribute("aria-label").getByText(text);
}
export function getSubToolboxItemByText(page, text) {
  return page.locator(".svc-toolbox__item-subtype").getByText(text, { exact: true });
}
export async function addQuestionByAddQuestionButton(page, text) {
  await page.locator(".svc-element__add-new-question .svc-element__question-type-selector").click();
  await page.locator(".svc-list__item span").getByText(text).click();
}

export async function changeToolboxLocation(page: Page, newVal: string) {
  await page.waitForFunction(() => !!window["creator"]);
  await page.evaluate((newVal) => {
    window["creator"].toolboxLocation = newVal;
  }, newVal);
  await page.waitForTimeout(500);
}

export async function setDirRTL(page) {
  await page.evaluate(() => {
    document.body.setAttribute("dir", "rtl");
  });
}

export async function setShowToolbox(page, newVal: boolean) {
  await page.waitForFunction(() => !!window["creator"]);
  await page.evaluate((newVal) => {
    window["creator"].showToolbox = newVal;
  }, newVal);
}
export async function setShowSidebar(page, newVal: boolean) {
  await page.waitForFunction(() => !!window["creator"]);
  await page.evaluate((newVal) => {
    window["creator"].showSidebar = newVal;
  }, newVal);
}
export async function setShowAddQuestionButton(page, newVal: boolean) {
  await page.waitForFunction(() => !!window["creator"]);
  await page.evaluate((newVal) => {
    window["creator"].showAddQuestionButton = newVal;
  }, newVal);
}
export async function setExpandCollapseButtonVisibility(page, newVal: string) {
  await page.waitForFunction(() => !!window["creator"]);
  await page.evaluate((newVal) => {
    window["creator"].expandCollapseButtonVisibility = newVal;
  }, newVal);
}
export async function setAllowZoom(page, newVal: boolean) {
  await page.waitForFunction(() => !!window["creator"]);
  await page.evaluate((newVal) => {
    window["creator"].allowZoom = newVal;
  }, newVal);
}

export async function setIsCompact(page, newVal: boolean) {
  await page.waitForFunction(() => !!window["creator"]);
  await page.evaluate((newVal) => {
    window["creator"].toolbox.isCompact = newVal;
  }, newVal);
}

// export const patchDragDropToDisableDrop = ClientFunction(() => {
//   window["creator"].dragDropSurveyElements.drop = () => { };
//   window["creator"].dragDropChoices.drop = () => { };
//   window["creator"].dragDropSurveyElements.domAdapter.drop = () => { };
//   window["creator"].dragDropChoices.domAdapter.drop = () => { };
// });

// export function getDropdownValue(selector: string | Selector = ".sd-input.sd-dropdown") {
//   return Selector(selector).find(".sv-string-viewer").textContent;
// }

export async function resetHoverToCreator(page: Page, offsetX: number = 0, offsetY: number = 0): Promise<void> {
  await page.locator("#survey-creator").hover({ position: { x: offsetX, y: offsetY }, force: true });
}

export const hideAllAdornerActions = async (page) => {
  await page.waitForFunction(() => !!window["creator"]);
  await page.evaluate(() => {
    (<any>window).creator.onElementAllowOperations.add((_, options) => {
      Object.keys(options).forEach(key => {
        if (key !== "allowDragging" && key !== "allowDrag" && key !== "allowEdit") {
          options[key] = false;
        }
      });
    });
  });
};

export async function resetFocusToBody(page: Page): Promise<void> {
  await page.waitForFunction(() => !!window["creator"]);
  await page.evaluate(() => {
    const rootNode = (window as any).creator.rootElement.getRootNode();
    if (!!rootNode.activeElement) {
      rootNode.activeElement.blur();
    }
    document.body.focus();
  });
}

// Waits until the bounding box of the element matched by `selector` stays the same
// for several consecutive animation frames - i.e. the smooth scrollIntoView is finished.
export function waitForScrollEnd(page: Page, selector: string) {
  return test.step(`waitForScrollEnd ${selector}`, () => page.waitForFunction((sel) => {
    const root: ParentNode = (window as any).creator?.rootElement?.getRootNode?.() ?? document;
    const el = root.querySelector(sel);
    if (!el) return false;
    const top = el.getBoundingClientRect().top;
    const w = window as any;
    const state = w.__waitForScrollEndState || (w.__waitForScrollEndState = {});
    const stable = state.prevTop === top ? (state.frames || 0) + 1 : 0;
    state.prevTop = top;
    state.frames = stable;
    if (stable >= 3) {
      delete w.__waitForScrollEndState;
      return true;
    }
    return false;
  }, selector), { box: true });
}