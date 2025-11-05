import { Locator, Page } from "playwright/test";

export * from "../e2e/helper";

export const base64image =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8DwHwAFBQIAX8jx0gAAAABJRU5ErkJggg==";

export const getPagesLength = async (page) => {
  await page.evaluate(() => {
    (window as any).creator.survey.pages.length;
  });
};

export const getQuestionsLength = async (page) => {
  await page.evaluate(() => {
    (window as any).creator.survey.getAllQuestions().length;
  });
};

export const setJSON = async (page, json) => {
  await page.evaluate((json) => {
    (window as any).creator.text = JSON.stringify(json);
  }, json);
};

export const setOptions = async (page, options) => {
  await page.evaluate((options) => {
    (window as any).creator.setOptions(options);
  }, options);
};

export const setSurveyProp = async (page, propName, value) => {
  await page.evaluate(([propName, value]) => {
    (window as any).creator.survey[propName] = value;
  }, [propName, value]);
};

export const getJSON = async (page) => {
  await page.evaluate(() => {
    return JSON.parse((window as any).creator.text);
  });
};

export const getQuestionNameByIndex = async (page, index) => {
  await page.evaluate((index) => {
    return (window as any).creator.survey.getAllQuestions()[index].name;
  }, index);
};

export const getItemValueByIndex = async (page, questionName, index) => {
  await page.evaluate(([questionName, index]) => {
    const question = (window as any).survey.getQuestionByName(questionName);
    const choices = question.visibleChoices;
    return choices[index].value;
  }, [questionName, index]);
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
// export const objectSelectorButton = Selector(".svc-side-bar__container-header #svd-grid-object-selector .sv-action-bar-item");
// export const objectSelectorPopup = Selector(".sv-popup.svc-object-selector .svc-list__container");
// export const selectedObjectTextSelector = ".svc-side-bar__container-header #svd-grid-object-selector .sv-action-bar-item__title";

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
  return page.locator(".svc-toolbox__item-title").getByText(text);
}
export function getToolboxItemByAriaLabel(page, text) {
  return page.locator(".svc-toolbox__item").withAttribute("aria-label").getByText(text);
}
export function getSubToolboxItemByText(page, text) {
  return page.locator(".svc-toolbox__item-subtype").getByText(text);
}
export async function addQuestionByAddQuestionButton(page, text) {
  await page.locator(".svc-element__add-new-question .svc-element__question-type-selector").click();
  await page.locator(".svc-list__item span").getByText(text).click();
}

export async function changeToolboxLocation(page, newVal: string) {
  await page.evaluate((newVal) => {
    window["creator"].toolboxLocation = newVal;
  }, newVal);
}

export async function changeToolboxScrolling(page, hasScroll: boolean) {
  await page.evaluate((newVal) => {
    window["creator"].toolbox.overflowBehavior = newVal ? "scroll" : "hideInMenu";
  }, hasScroll);
}

export async function changeToolboxSearchEnabled(page, enabled: boolean) {
  await page.evaluate((newVal) => {
    window["creator"].toolbox.searchEnabled = newVal;
  }, enabled);
}

export async function setDirRTL(page) {
  await page.evaluate(() => {
    document.body.setAttribute("dir", "rtl");
  });
}

export async function setShowToolbox(page, newVal: boolean) {
  await page.evaluate((newVal) => {
    window["creator"].showToolbox = newVal;
  }, newVal);
}
export async function setShowSidebar(page, newVal: boolean) {
  await page.evaluate((newVal) => {
    window["creator"].showSidebar = newVal;
  }, newVal);
}
export async function setShowAddQuestionButton(page, newVal: boolean) {
  await page.evaluate((newVal) => {
    window["creator"].showAddQuestionButton = newVal;
  }, newVal);
}
export async function setAllowEditSurveyTitle(page, newVal: boolean) {
  await page.evaluate((newVal) => {
    window["creator"].showSurveyHeader = newVal;
  }, newVal);
}
export async function setExpandCollapseButtonVisibility(page, newVal: string) {
  await page.evaluate((newVal) => {
    window["creator"].expandCollapseButtonVisibility = newVal;
  }, newVal);
}
export async function setAllowZoom(page, newVal: boolean) {
  await page.evaluate((newVal) => {
    window["creator"].allowZoom = newVal;
  }, newVal);
}

export async function setIsCompact(page, newVal: boolean) {
  await page.evaluate((newVal) => {
    window["creator"].toolbox.isCompact = newVal;
  }, newVal);
}

export const explicitErrorHandler = async (page) => {
  await page.evaluate(() => {
    window.addEventListener("error", e => {
      if (e.message === "ResizeObserver loop completed with undelivered notifications." ||
      e.message === "ResizeObserver loop limit exceeded") {
        e.stopImmediatePropagation();
      }
    });
  });
};

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
  await page.locator("#survey-creator").hover({ position: { x: offsetX, y: offsetY } });
}

export const hideAllAdornerActions = async (page) => {
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
  await page.evaluate(() => {
    if (!!document.activeElement) {
      document.activeElement.blur();
    }
    document.body.focus();
  });
}

export var downArrowImageLink = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAACFCAYAAAAenrcsAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAAALISURBVHhe7dvLbdtAGIVRKyW4QZfhGlyGa2E/bkEBYSKJFemKzyE5c87GXAo/7gdKC1+6rru+AHf9Gv4CdwgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAv9yO8Pb18fwdD6fr+/DE2N4g0x05jh6Z//8pQkEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAILl3XXYfnqrx9fQxPlPL5+j481aPKN4g49lHj3X3FgkAgEFQZSI3fhc/Ab5ATEUlZtd676q9YIimj5jtX/xtEJNuq/b5N/EgXyTZauGsTgfREsq5W7tlMID2RrKOlOzYVSE8ky7R2v+YC6Ylknhbv1mQgPZFM0+q9mg2kJ5JxWr5T04H0RJK1fp/mA+mJ5D53EcgfxvCTe3wTyD+M4ps7/CWQG62PQxw/CeSOVkcijv8J5IHWxiKO+wQStDIacTwmkCdqH484MoGMUOuIxPGcQEaqbUziGEcgE9QyKnGMJ5CJzj4ucUwjkBnOOjJxTCeQmc42NnHMI5AFzjI6ccwnkIWOPj5xLCOQFRx1hOJYTiArOdoYxbEOgazoKKMUx3oEsrK9xymOdQlkA3uNVBzrE8hGSo9VHNsQyIZKjVYc2xHIxrYerzi2JZACthqxOLYnkELWHrM4yhBIQWuNWhzlCKSwpeMWR1kC2cHckYujPIHsZOrYxbEPgexo7OjFsR+B7OzZ+MWxL4EcwKMIxLE/gRzEbQziOIZL13XX4Rm44Q0CgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUDgoZeX345nhpcQYL2CAAAAAElFTkSuQmCC";
export var rigthArrowImageLink = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAACFCAYAAAAenrcsAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAAALJSURBVHhe7dzNjdtADIBRb0pIgykjNaSMrUX9pIVNBHgBQ5Bo/UtDvnfx+Cr4AzUH86Pruq8HMOrH8xMYIRAICAQCAoGAQCAgEAgIBAICgYBAICAQCAgEAgKBgEAgIBAICAQCAoGAQCDgH4U38uvvn+fp8fj8+ft54komyE28xtEbfucaArkBMdyXQC4mjnsTyIXEcX8CuYg42iCQC4ijHQI5mTjaIpATiaM9AjmJONokkBOIo10COZg42iaQA4mjfQI5iDhyEMgBxJGHQHYmjlwEsiNx5COQnYgjJ4HsQBx5CWQjceQmkA3EkZ9AVhJHDQJZQRx1WPuzkDimZVxVZIIsII5YxucjkJnEUZNAZhBHXQJ5Qxy1CSQgDgQyQRz0BDJCHHwTyIA4eCWQF+JgSCBP4mCMQP4TB1PKByIOIqUDEQfvlA1EHMxRMhBxMFe5QMTBEqUCEQdLlQlEHKxRIhBxsFb6QMTBFqkDEQdbpQ1EHOwhZSDiYC8lLumwlkAgkDKQjBv+uEbaCSIS9pD6FUskbJX+DiIStihxSRcJa5UIpCcS1igTSE8kLFUqkJ5IWKJcID2RMFfJQHoiYY6ygfREwjulA+mJhEj5QHoiYYpAnkTCGIG8EAlDAhkQCa8EMkIkfBPIBJHQE0hAJAjkDZHUJpAZRFKXQGYSSU0CWUAksYzP56Pruq/nmZnO2twoyOuZICv44dYhkJVEUoNANhBJfgLZSCS5CWQHIslLIDsRSU4C2ZFI8hHIzkSSi0AOIJI8BHIQkeQgkAOJpH0COZhI2iaQE4ikXQI5iUjaJJATiaQ9AjmZSNoikAuIpB0CuYhI2iCQC4nk/gRyMZHcm0BuQCT3JZCbGEYimnuw9gcCJggEBAIBgUBAIBAQCAQEAgGBQEAgEBAIBAQCAYFAQCAQEAgEBAIBgUBAIBAQCAQEAgGBwKTH4x+QJ6duSQLV/gAAAABJRU5ErkJggg==";
export var leftArrowImageLink = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAACFCAYAAAAenrcsAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAAALISURBVHhe7dzNcZxAEIDRlUNwgg7DMTgMxUI+TkEupC3Jq2V7+Yfpfu/CcAW+mrnQL13XvV2AQT+uV2CAQCAgEAgIBAICgYBAICAQCAgEAgKBgEAgIBAICAQCAoGAQCAgEAgIBAICgYA/Ck/k198/19Xl8vrz93XFkewgJ/F/HL3v9xxDICcmkuMJ5OREciyBNEAkxxFII0RyDIE0RCT7E0hjRLIvgTRIJPsRSKNEsg+BNEwk2xNI40SyLYEkIJLtCCQJkWxDIImIZH0CSUYk6xJIQiJZj0CSEsk6BJKYSJYTSHIiWUYgBYhkPoEUIZJ5BFKISKZLO/bHx/CYkULjpdxBxBHzfMZzxCpKJOMIpDCRPCeQ4kQSEwgiCQiEdyIZJhA+ieSeQLghklsC4Y5IvgiEQSL5IBAeEolAeKJ6JALhqcqRCIRRqkYiEEarGIlAmKRaJAJhskqRCIRZqkQiEGarEIlAWCR7JAJhscyRCIRVZI1EIKwmYyQCgYBAICAQVpNxYqNAWEXWcaYCYbHMs34FwiLZB2ELhNkqTIkXCLNUiKMnECarEkdPIExSKY6eQBitWhw9gTBKxTh6AuGpqnH0BEKochw9gfBQ9Th6AmGQOD4IhDvi+CIQbojjlkD4JI57AuGdOIYJBHEEBFKcOGICKUwczwmkKHGMkzIQLz/m+Yz30nXd23XNgfaaSiiOaRyxChHHdAIpQhzzCKQAccwnkOTEsYxAEhPHcgJJShzrEEhC4liPQJIRx7oEkog41ieQJMSxDYEkII7tCKRx4tiWQBomju0JpFHi2IdAGiSO/QikMeLYl0AaIo79CaQR4jiGQBogjuMI5OTEcSyBnJg4jieQk/gegzjOwdgfCNhBICAQCAgEAgKBgEAgIBAICAQCAoGAQCAgEAgIBAICgYBAICAQCAgEAgKBgEAgIBAICAQeulz+AcZap24+5oKPAAAAAElFTkSuQmCC";
export var upArrowImageLink = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAACFCAYAAAAenrcsAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAAALCSURBVHhe7dvRcdpAGIVRSAk0mDKoIWVQi/pJCyQZa8Y2gYskpF2xe84L8hvzz/0MfvBxGIbrAbjrx/gK3CEQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCPzL7Y78/P1rfDocLqfz+ERNPkF24msc/9z+TB0C2YFHMYikPoFU9iwCkdQlkIqmjl8k9QikkrmjF0kdAqlg6dhFUp5ACnt15CIpSyAFrTVukZQjkELWHrVIyhBIAVuNWSTbE8jGth6xSLYlkA2VGq9ItiOQjZQerUi2IZAN1BqrSNYnkJXVHqlI1iWQFe1lnCJZj0BWsrdRimQdAlnBXscoktcJ5EV7H6FIXiOQF7zL+ESynEAWerfRiWQZgSzwrmMTyXwCmendRyaSeQQyQyvjEsl0ApmotVGJZBqBTNDqmETynECeaH1EIskEEvQyHpE8JpAHehuNSO4TyB29jkUk/xPIjd5HIpLvBPKFcXxwh08CGRnFd+7xQSB/GcN97iIQI3ii9/t0HYg4pun5Tt0GIo55er1Xl4GIY5ke79ZdIOJ4TW/36yoQcayjpzt2E4g41tXLPbsIRBzb6OGuzQcijm21ft+mAxFHGS3fudlAxFFWq/duMhBx1NHi3bv4Ix2WEggETQZyOZ3HJ0pq8e7HYRiu4zMTtPA92y+Q6XzFgkAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoHMdDmdx6f39O7vv7TjMAzX8Rm44RMEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoHAQ4fDH0O9wbeYZugeAAAAAElFTkSuQmCC";
