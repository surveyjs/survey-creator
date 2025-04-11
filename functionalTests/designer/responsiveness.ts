import { ClientFunction, Selector } from "testcafe";
import {
  collapseButtonSelector, expandButtonSelector, getBarItemByTitle,
  getTabbedMenuItemByText, pageNavigator, propertyGridSelector, questions, questionToolbarActions,
  setJSON, toolbox, toolboxItemIcons, toolboxItemTitles, url, creatorTabDesignerName, creatorTabPreviewName, objectSelectorButton, getPropertyGridCategory, generalGroupName, getAddNewQuestionButton, selectedObjectTextSelector, surveySettingsButtonSelector,
  changeToolboxScrolling,
  getListItemByText
} from "../helper";
const title = "Responsiveness";

fixture`${title}`.page`${url}`;

const flyoutPropertyGrid = Selector(".svc-side-bar--flyout");

test("Check base responsiveness for tabbed menu", async (t) => {
  const tabbedMenuItemSelector = Selector(".svc-tabbed-menu .svc-tabbed-menu-item-container:nth-of-type(5)");
  await t
    .resizeWindow(1920, 900)
    .expect(tabbedMenuItemSelector.hasClass("sv-action--hidden")).notOk()
    .resizeWindow(700, 969)
    .expect(tabbedMenuItemSelector.hasClass("sv-action--hidden")).ok()
    .click(".svc-tabbed-menu-item-container.sv-dots");
  const popupSelector = Selector(".sv-popup .sv-popup__container").filterVisible();
  await t
    .expect(getListItemByText("Translation").visible).ok()
    .pressKey("esc")
    .expect(popupSelector.visible).notOk()
    .resizeWindow(1920, 900)
    .expect(await tabbedMenuItemSelector.hasClass("sv-action--hidden")).ok();
});

test("Check base responsiveness for toolbox", async (t) => {
  await changeToolboxScrolling(false);
  const tabbedMenuItemSelector = Selector(".svc-toolbox .svc-toolbox__tool:nth-of-type(20)");
  await t
    .resizeWindow(1280, 1200)
    .expect(tabbedMenuItemSelector.hasClass("sv-action--hidden")).notOk()
    .resizeWindow(1280, 632)
    .expect(tabbedMenuItemSelector.hasClass("sv-action--hidden")).ok()
    .click(".svc-toolbox__tool--dots");
  const popupSelector = Selector(".sv-popup .sv-popup__container").filterVisible();
  await t
    .expect(getListItemByText("Dynamic Panel").visible).ok()
    .pressKey("esc")
    .expect(popupSelector.visible).notOk()
    .resizeWindow(1920, 1200)
    .expect(tabbedMenuItemSelector.hasClass("sv-action--hidden")).notOk();
});

test("Responsive creator: toolbox & page navigator", async (t) => {
  await setJSON({
    pages: [
      {
        elements: [{ type: "text", name: "question1" }]
      },
      {
        elements: [{ type: "text", name: "question2" }]
      },
      {
        elements: [{ type: "text", name: "question2" }]
      }
    ]
  });
  const toolboxItemCount = 21;
  await t
    .resizeWindow(1920, 1200)
    .click(collapseButtonSelector)
    .expect(toolbox.visible).ok()
    .expect(toolboxItemIcons.count).eql(toolboxItemCount)
    .expect(toolboxItemTitles.count).eql(toolboxItemCount)
    .expect(pageNavigator.visible).ok()

    .resizeWindow(1000, 1200)
    .expect(toolbox.visible).ok()
    .expect(toolboxItemIcons.count).eql(toolboxItemCount)
    .expect(toolboxItemTitles.count).eql(0)
    .expect(pageNavigator.visible).ok()

    .resizeWindow(750, 500)
    .expect(toolbox.exists).notOk()
    .expect(pageNavigator.exists).notOk()

    .click(getTabbedMenuItemByText(creatorTabPreviewName))
    .click(getTabbedMenuItemByText(creatorTabDesignerName))
    .expect(toolbox.exists).notOk()
    .expect(pageNavigator.exists).notOk();
});

async function changeSidebarLocation(newVal: string) {
  await ClientFunction((newVal) => {
    window["creator"].sidebarLocation = newVal;
  })(newVal);
}

test("Responsive creator: property grid", async (t) => {
  await setJSON({
    pages: [
      {
        elements: [{ type: "comment", name: "question1" }, { type: "comment", name: "question2" }]
      },
      {
        elements: [{ type: "comment", name: "question3" }]
      }
    ]
  });
  const westResizer = Selector(".svc-resizer-west");
  const eastResizer = Selector(".svc-resizer-east");
  let pgWidth = 481;
  await t
    .resizeWindow(1920, 900)
    .expect(westResizer.visible).ok()
    .expect(eastResizer.visible).notOk()

    .click(questions.find(".sv-string-editor").withText("question1"))
    .expect(propertyGridSelector.visible).ok()
    .expect(propertyGridSelector.offsetWidth).eql(pgWidth)
    .expect(flyoutPropertyGrid.exists).notOk()
    .expect(questionToolbarActions.count).eql(4)

    .drag(westResizer, 150, 0)
    .expect(propertyGridSelector.offsetWidth).eql(pgWidth - 150)

    .resizeWindow(750, 700)
    .click(expandButtonSelector)
    .expect(propertyGridSelector.visible).ok()
    .expect(propertyGridSelector.offsetWidth).eql(pgWidth - 150)
    .expect(flyoutPropertyGrid.exists).ok()

    .drag(westResizer, -150, 0)
    .expect(propertyGridSelector.offsetWidth).eql(pgWidth)

    .click(collapseButtonSelector)
    .expect(propertyGridSelector.visible).notOk()
    .expect(flyoutPropertyGrid.exists).ok()

    .click(questions.find(".sv-string-editor").withText("question2"))
    .expect(questionToolbarActions.count).eql(5)

    .click(questionToolbarActions.withText("Settings"))
    .expect(propertyGridSelector.visible).ok()
    .expect(flyoutPropertyGrid.exists).ok()

    .click(collapseButtonSelector)
    .expect(propertyGridSelector.visible).notOk()
    .expect(flyoutPropertyGrid.exists).ok()

    .click(expandButtonSelector);
  await changeSidebarLocation("left");

  await t
    .expect(westResizer.visible).notOk()
    .expect(eastResizer.visible).ok()
    .expect(propertyGridSelector.offsetWidth).eql(pgWidth)

    .drag(eastResizer, -120, 0)
    .expect(propertyGridSelector.offsetWidth).eql(pgWidth - 120)

    .drag(eastResizer, 100, 0)
    .expect(propertyGridSelector.offsetWidth).eql(pgWidth - 20);
});

test("Responsive creator: designer tab for mobile devices", async (t) => {
  const topToolBar = Selector(".svc-top-bar .sv-action-bar");
  const footerToolBar = Selector(".svc-footer-bar .sv-action-bar");

  await t
    .resizeWindow(750, 500)
    .expect(topToolBar.visible).ok()
    .expect(footerToolBar.visible).notOk()
    .expect(topToolBar.find(".sv-action").filterVisible().count).eql(4)

    .resizeWindow(370, 400)
    .expect(topToolBar.visible).notOk()
    .expect(footerToolBar.visible).ok()
    .expect(footerToolBar.find(".sv-action").filterVisible().count).eql(5)

    .resizeWindow(1920, 900)
    .click(collapseButtonSelector)
    .expect(topToolBar.visible).ok()
    .expect(footerToolBar.visible).notOk()
    .expect(topToolBar.find(".sv-action").filterVisible().count).eql(4);
});

test("property grid for mobile devices", async (t) => {
  const mobilePropertGrid = Selector(".svc-side-bar--mobile .svc-side-bar__container");

  await t
    .resizeWindow(750, 600)
    .expect(mobilePropertGrid.exists).notOk()

    .resizeWindow(370, 600)
    .expect(mobilePropertGrid.visible).notOk()

    .click(surveySettingsButtonSelector)
    .expect(mobilePropertGrid.visible).ok()
    .expect(Selector(selectedObjectTextSelector).innerText).eql("Survey")

    .click(Selector(".svd-grid-hide"))
    .click(getAddNewQuestionButton())
    .click(Selector(".svc-survey-element-toolbar__item[title=\"Open settings\"]").filterVisible().nth(0))
    .expect(Selector(selectedObjectTextSelector).innerText).eql("question1")

    .resizeWindow(1920, 900)
    .expect(mobilePropertGrid.exists).notOk()
    .expect(propertyGridSelector.visible).ok();
});

test("test tab for mobile devices", async (t) => {
  await setJSON({
    pages: [
      {
        elements: [{ type: "text", name: "question1" }]
      }
    ]
  });
  const testTabToolbar = Selector(".sv-action-bar--pages");
  const creatorFooterToolbar = Selector(".svc-footer-bar .svc-toolbar-wrapper");
  const creatorFooterToolbarActions = creatorFooterToolbar.find(".sv-action").filterVisible();
  await t
    .resizeWindow(1920, 900)
    .click(getTabbedMenuItemByText(creatorTabPreviewName))
    .expect(testTabToolbar.exists).notOk()
    .expect(creatorFooterToolbar.exists).notOk()

    .resizeWindow(370, 600)
    .expect(testTabToolbar.exists).notOk()
    .expect(creatorFooterToolbarActions.count).eql(3)
    .expect(creatorFooterToolbarActions.nth(0).id).eql("svd-designer")
    .expect(creatorFooterToolbarActions.nth(1).id).eql("svd-preview")
    .expect(creatorFooterToolbarActions.nth(2).id).eql("showInvisible")

    .resizeWindow(1920, 900)
    .expect(testTabToolbar.exists).notOk()
    .expect(creatorFooterToolbar.exists).notOk()

    .click(getTabbedMenuItemByText(creatorTabDesignerName))
    .click(getAddNewQuestionButton().nth(1))
    .click(getTabbedMenuItemByText(creatorTabPreviewName))
    .expect(testTabToolbar.exists).ok()
    .expect(creatorFooterToolbar.exists).notOk()
    .expect(testTabToolbar.find(".sv-action").filterVisible().count).eql(3)

    .resizeWindow(370, 600)
    .expect(testTabToolbar.exists).notOk()
    .expect(creatorFooterToolbarActions.count).eql(5)
    .expect(creatorFooterToolbarActions.nth(0).id).eql("svd-designer")
    .expect(creatorFooterToolbarActions.nth(1).id).eql("svd-preview")
    .expect(creatorFooterToolbarActions.nth(2).id).eql("prevPage")
    .expect(creatorFooterToolbarActions.find(".svc-preview-pager__item").nth(0).hasAttribute("disabled")).eql(true)
    .expect(creatorFooterToolbarActions.nth(3).id).eql("nextPage")
    .expect(creatorFooterToolbarActions.find(".svc-preview-pager__item").nth(1).hasAttribute("disabled")).eql(false)
    .expect(creatorFooterToolbarActions.nth(4).id).eql("showInvisible")

    .click(creatorFooterToolbarActions.nth(3))
    .expect(creatorFooterToolbarActions.find(".svc-preview-pager__item").nth(0).hasAttribute("disabled")).eql(false)
    .expect(creatorFooterToolbarActions.find(".svc-preview-pager__item").nth(1).hasAttribute("disabled")).eql(true)

    .resizeWindow(1920, 900)
    .expect(testTabToolbar.exists).ok()
    .expect(creatorFooterToolbar.exists).notOk();
});

test("Property grid editor popup", async (t) => {
  const json = {
    "pages": [
      {
        "name": "page1",
        "elements": [
          {
            "type": "checkbox",
            "name": "question1",
            "title": "question1",
            "choices": [
              "Item 1",
              "Item 2",
              "Item 3"
            ]
          }
        ]
      }
    ]
  };
  await setJSON(json);

  const question1 = Selector("[data-name=\"question1\"]");

  await t
    .resizeWindow(1920, 900)
    .click(question1)
    .click(getPropertyGridCategory(generalGroupName))
    .click(getPropertyGridCategory("Data"))
    .click(Selector("span").withExactText("Set Default Answer"))
    .expect(Selector(".sv-popup--modal-popup").visible).ok()
    .click(Selector("button").withExactText("Cancel"))
    .resizeWindow(380, 600)
    .click(Selector(".svc-survey-element-toolbar__item[title=\"Open settings\"]").filterVisible())
    .click(Selector(".svd-grid-hide"))
    .click(question1, { offsetX: 5, offsetY: 5 })
    .click(Selector(".svc-question__content-actions .svc-survey-element-toolbar__item[title=\"Open settings\"]").filterVisible())
    .click(Selector("span").withExactText("Set Default Answer"))
    .expect(Selector(".sv-popup--modal-overlay").visible).ok();
});

test("Question type popup - wide", async (t) => {
  const json = {
  };
  await setJSON(json);
  await t
    .resizeWindow(1920, 900)
    .click(Selector("button.svc-element__question-type-selector"))
    .expect(getListItemByText("Single-Line Input").exists).ok();
});

test("Question type popup - narrow", async (t) => {
  const json = {
    elements: [
      {
        type: "text",
        name: "q1"
      }
    ]
  };
  await ClientFunction(() => {
    (window as any).creator.isTouch = true;
  })();
  await setJSON(json);
  await t
    .resizeWindow(380, 600)
    .click(Selector("button.svc-element__question-type-selector"))
    .expect(getListItemByText("Single-Line Input").exists).ok();
});

test("Responsive creator: property grid - click the shadow", async (t) => {
  const json = { pages: [{ name: "page1" }] };
  await setJSON(json);
  await t
    .resizeWindow(900, 700)
    .click(Selector(".svc-page__content"), { offsetX: 5, offsetY: 5 })
    .click(expandButtonSelector)
    .expect(propertyGridSelector.visible).ok()
    .expect(flyoutPropertyGrid.exists).ok()
    .expect(objectSelectorButton.withText("page1").visible).ok()
    .click(collapseButtonSelector)
    .click(surveySettingsButtonSelector)
    .expect(objectSelectorButton.withText("Survey").visible).ok()
    .click(Selector(".svc-creator"), { offsetX: 237, offsetY: 273 })

    .expect(objectSelectorButton.withText("page1").visible).notOk();
});
