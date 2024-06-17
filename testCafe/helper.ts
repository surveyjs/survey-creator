import { Selector, ClientFunction } from "testcafe";

export const url = "http://127.0.0.1:8080/testCafe/testcafe";
// export const url =
//     "http://127.0.0.1:7777/packages/survey-creator-knockout/example/index.html";
export const urlByPage = "http://127.0.0.1:8080/testCafe/by-page";
export const urlPreviewThemeSwitcher = "http://127.0.0.1:8080/testCafe/preview-theme-switcher";
export const urlThemeForPreview = "http://127.0.0.1:8080/testCafe/theme-for-preview-option";
export const urlDropdownCollapseView = "http://127.0.0.1:8080/testCafe/dropdown-collapse-view";
export const urlLocalized_de = "http://127.0.0.1:8080/testCafe/testcafe_localized_ui";

export const base64image =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8DwHwAFBQIAX8jx0gAAAABJRU5ErkJggg==";

export const getPagesLength = ClientFunction(() => {
  return window["creator"].survey.pages.length;
});

export const getQuestionsLength = ClientFunction(() => {
  return window["creator"].survey.getAllQuestions().length;
});

export const setJSON = ClientFunction((json) => {
  window["creator"].text = JSON.stringify(json);
});

export const setSurveyProp = ClientFunction((propName, value) => {
  window["creator"].survey[propName] = value;
});

export const getJSON = ClientFunction(() => {
  return JSON.parse(window["creator"].text);
});

export const getQuestionNameByIndex = ClientFunction((index) => {
  return window["creator"].survey.getAllQuestions()[index].name;
});

export const getItemValueByIndex = ClientFunction((questionName, index) => {
  const question = window["creator"].survey.getQuestionByName(questionName);
  const choices = question.visibleChoices;
  return choices[index].value;
});

export const handleShiftEnter = ClientFunction((selector: string) => {
  document.querySelector(selector).addEventListener("keypress", function (e: any) {
    if (e.charCode === 13 && e.shiftKey) {
      var editorEl = document.querySelector(selector) as any;
      var selection = window.getSelection() as any;
      var range = document.createRange();

      editorEl.innerHTML += "<div><br/></div>";

      range.setStart(editorEl, editorEl.childNodes.length);
      range.setEnd(editorEl, editorEl.childNodes.length);

      selection.removeAllRanges();
      selection.addRange(range);
    }
  });
});

export const SingleInputToolboxItem = Selector("[aria-label='Single-Line Input']");
export const RatingToolboxItem = Selector("[aria-label='Rating Scale']");

export const creatorTabDesignerName = "Designer";
export const creatorTabPreviewName = "Preview";
export const creatorTabLogicName = "Logic";
export const generalGroupName = "General";
export const logicGroupName = "Conditions";
export const inputMaskSettingsGroupName = "Input Mask Settings";

export const creatorContentSelector = Selector(".svc-creator__content-holder");

export const expandButtonSelector = Selector(".sv-action-bar-item[title=\"Show Panel\"]");
export const collapseButtonSelector = Selector(".sv-action-bar-item[title=\"Hide Panel\"]");
export const surveySettingsButtonSelector = Selector(".sv-action-bar-item[title=\"Survey settings\"]");
export const themeSettingsButtonSelector = Selector(".sv-action-bar-item[title=\"Theme settings\"]");
export const propertyGridSelector = Selector(".svc-side-bar__container");
export const objectSelectorButton = Selector(".svc-side-bar__container-header #svd-grid-object-selector .sv-action-bar-item");
export const objectSelectorPopup = Selector(".sv-popup.svc-object-selector .sv-list__container");
export const selectedObjectTextSelector = ".svc-side-bar__container-header #svd-grid-object-selector .sv-action-bar-item__title";

export const questions = Selector(".svc-question__content");
export const questionToolbarActions = Selector(".svc-question__content--selected .svc-question__content-actions").filterVisible().find(".sv-action").filterVisible();
export const unselectedQuestionToolbarActions = Selector(".svc-question__content-actions").filterVisible().find(".sv-action").filterVisible();

export const pageNavigator = Selector(".svc-page-navigator__selector").filterVisible();
export const toolbox = Selector(".svc-toolbox");
export const toolboxItems = Selector(".svc-toolbox__tool").filterVisible();
export const toolboxItemIcons = Selector(".svc-toolbox__tool .svc-toolbox__item-container").filterVisible();
export const toolboxItemTitles = Selector(".svc-toolbox__tool .svc-toolbox__item > .svc-toolbox__item-title").filterVisible();

export const logicAddNewRuleButton = Selector(".svc-logic-tab__content-action").withText("Add New Rule");
export const logicQuestionSelector = Selector(".svc-logic-operator.svc-logic-operator--question").filterVisible();
export const logicOperatorSelector = Selector(".svc-logic-operator.svc-logic-operator--operator:not(.sl-paneldynamic__add-btn)").filterVisible();
export const logicActionSelector = Selector(".svc-logic-operator--action").filterVisible();
export const logicQuestionValueSelector = Selector(".svc-logic-question-value").filterVisible();
export const logicDropdownValueSelector = Selector(".sd-input.sd-dropdown .sd-dropdown__value").filterVisible();
export const logicOperatorConjuction = Selector(".svc-logic-operator.svc-logic-operator--conjunction").filterVisible();
export const logicActionTriggerEditorElement = Selector(".svc-logic_trigger-editor").filterVisible();
export const logicActionTriggerQuestionsElement = Selector(".svc-logic_trigger-questions").filterVisible();
export const logicDetailButtonElement = Selector(".sl-table__detail-button").filterVisible();
export const tableRulesSelector = Selector(".sl-table tbody .sl-table__row:not(.st-table__row--detail)").filterVisible();

export function getTabbedMenuItemByText(text: "Designer" | "Preview" | "Logic" | "Translation" | "JSON Editor" | "Embed Survey" | "Miner Logik" | "Themes") {
  return Selector(".svc-tabbed-menu-item-container .svc-tabbed-menu-item__text").withText(text).filterVisible();
}
export function getSelectOptionByText(text: string) {
  return Selector("option").withExactText(text).filterVisible();
}
export function getBarItemByText(text) {
  return Selector(".sv-action-bar-item__title").withText(text).parent(".sv-action-bar-item");
}
export function getPropertyGridCategory(categoryName) {
  return Selector(".spg-panel__title span").withText(categoryName).filterVisible();
}

export function getBarItemByTitle(text: string) {
  return Selector(".sv-action-bar-item[title=\"" + text + "\"]");
}
export function getListItemByText(text) {
  return Selector(".sv-popup__content .sv-list .sv-list__item").withText(text).filterVisible();
}
export function getAddNewQuestionButton() {
  return Selector(".svc-page__add-new-question > span").withText("Add Question");
}

export function getVisibleElement(selector: string | Selector): Selector {
  return selectorIsVisibleFilter(Selector(selector));
}
export function getToolboxItemByText(text: string) {
  return getVisibleElement(".svc-toolbox__item-title").withExactText(text);
}
export function getSubToolboxItemByText(text: string) {
  return getVisibleElement(".svc-toolbox__item-subtype").withExactText(text);
}
export async function addQuestionByAddQuestionButton(t: TestController, text: string) {
  await t
    .click(Selector(".svc-page__add-new-question .svc-page__question-type-selector"))
    .click(Selector(".sv-list__item span").withExactText(text).filterVisible());
}

function selectorIsVisibleFilter(selector: Selector) {
  return selector.filter(visibility).with({ timeout: 1200 });
}

export function visibility(node: Element, idx: number): boolean {
  var style = window.getComputedStyle(node);
  if (style.display === "none" || style.visibility === "hidden") return false;
  return node.parentElement ? visibility(node.parentElement, idx) : true;
}

export async function changeToolboxLocation(newVal: string) {
  await ClientFunction((newVal) => {
    window["creator"].toolboxLocation = newVal;
  })(newVal);
}

export async function changeToolboxScrolling(hasScroll: boolean) {
  await ClientFunction((newVal) => {
    window["creator"].toolbox.overflowBehavior = newVal ? "scroll" : "hideInMenu";
  })(hasScroll);
}

export async function changeToolboxSearchEnabled(enabled: boolean) {
  await ClientFunction((newVal) => {
    window["creator"].toolbox.searchEnabled = newVal;
  })(enabled);
}

export async function setShowSidebar(newVal: boolean) {
  await ClientFunction((newVal) => {
    window["creator"].showSidebar = newVal;
  })(newVal);
}
export const explicitErrorHandler = ClientFunction(() => {
  window.addEventListener("error", e => {
    if (e.message === "ResizeObserver loop completed with undelivered notifications." ||
      e.message === "ResizeObserver loop limit exceeded") {
      e.stopImmediatePropagation();
    }
  });
});

export const patchDragDropToDisableDrop = ClientFunction(() => {
  window["creator"].dragDropSurveyElements.drop = () => { };
  window["creator"].dragDropChoices.drop = () => { };
  window["creator"].dragDropSurveyElements.domAdapter.drop = () => { };
  window["creator"].dragDropChoices.domAdapter.drop = () => { };
});

export function getDropdownValue(selector: string | Selector = ".sd-input.sd-dropdown") {
  return Selector(selector).find(".sv-string-viewer").textContent;
}

export async function resetHoverToCreator(t: TestController): Promise<void> {
  await t.hover(Selector("#survey-creator"), { offsetX: 0, offsetY: 0 });
}