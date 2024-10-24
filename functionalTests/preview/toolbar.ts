import { url, getTabbedMenuItemByText, setJSON, getBarItemByTitle, getListItemByText, creatorTabPreviewName, explicitErrorHandler } from "../helper";
import { Selector } from "testcafe";
const title = "Preview tab";

fixture`${title}`.page`${url}`.beforeEach(
  async (t) => {
    await t.maximizeWindow();
  }
);

const json = {
  questions: [
    {
      type: "checkbox",
      name: "string_editor",
      choices: [
        "Item 1",
        "Item 2",
        "Item 3"
      ]
    }
  ]
};

const json2 = {
  title: {
    default: "My Survey",
    de: "Meine Umfrage"
  },
  pages: [{
    name: "page1",
    elements: [{
      type: "checkbox",
      name: "string_editor",
      choices: ["Item 1", "Item 2", "Item 3"]
    },
    {
      type: "text",
      name: "hidden_question",
      visible: false
    }],
    title: {
      default: "First page",
      de: "Erste Seite"
    }
  },
  {
    name: "page2",
    elements: [{
      type: "text",
      name: "question1"
    }],
    title: {
      default: "Second page",
      de: "Zweite Seite"
    }
  },
  {
    name: "page3",
    elements: [{
      type: "text",
      name: "question2"
    }]
  }]
};

const orientationAction = Selector("#orientationSelector .sv-action-bar-item");
const restartSurveyButtonText = "Preview Survey Again";

test("Language switcher", async (t) => {
  await setJSON(json2);

  await t
    .click(getTabbedMenuItemByText(creatorTabPreviewName))
    .expect(getBarItemByTitle("English").visible).ok()
    .expect(Selector(".sd-title .sd-header__text h3").textContent).contains("My Survey")
    .click(getBarItemByTitle("English"))
    .expect(getListItemByText("Deutsch").visible).ok()
    .click(getListItemByText("Deutsch"))
    .expect(Selector(".sd-title .sd-header__text h3").textContent).contains("Meine Umfrage")
    .expect(getBarItemByTitle("Deutsch").visible).ok();
});

test("Page switcher", async (t) => {
  await setJSON(json2);

  await t
    .click(getTabbedMenuItemByText(creatorTabPreviewName))
    .expect(Selector(".sd-question__title").withText("string_editor").visible).ok()
    .expect(Selector("#pageSelector").textContent).contains("First page")
    .expect(Selector("#prevPage button").hasAttribute("disabled")).eql(true)
    .expect(Selector("#nextPage button").hasAttribute("disabled")).eql(false)

    .click(Selector("#nextPage"))
    .expect(Selector(".sd-question__title").withText("question1").visible).ok()
    .expect(Selector("#pageSelector").textContent).contains("Second page")
    .expect(Selector("#prevPage button").hasAttribute("disabled")).eql(false)
    .expect(Selector("#nextPage button").hasAttribute("disabled")).eql(false)

    .click(Selector("#nextPage"))
    .expect(Selector(".sd-question__title").withText("question2").visible).ok()
    .expect(Selector("#pageSelector").textContent).contains("Page 3")
    .expect(Selector("#prevPage button").hasAttribute("disabled")).eql(false)
    .expect(Selector("#nextPage button").hasAttribute("disabled")).eql(true)

    .click(getBarItemByTitle("Page 3"))
    .expect(getListItemByText("Second page").visible).ok()
    .expect(getListItemByText("First page").hasClass("sv-list__item--selected")).notOk()
    .expect(getListItemByText("Second page").hasClass("sv-list__item--selected")).notOk()
    .expect(getListItemByText("Page 3").hasClass("sv-list__item--selected")).ok()
    .click(getListItemByText("Second page"))
    .expect(Selector(".sd-question__title").withText("question1").visible).ok()
    .expect(Selector("#pageSelector").textContent).contains("Second page")
    .expect(Selector("#prevPage button").hasAttribute("disabled")).eql(false)
    .expect(Selector("#nextPage button").hasAttribute("disabled")).eql(false)
    .click(getBarItemByTitle("Second page"))
    .expect(getListItemByText("First page").hasClass("sv-list__item--selected")).notOk()
    .expect(getListItemByText("Second page").hasClass("sv-list__item--selected")).ok()
    .expect(getListItemByText("Page 3").hasClass("sv-list__item--selected")).notOk()
    .click(getListItemByText("Second page"));
});

test("Preview Survey Again", async (t) => {
  await setJSON(json2);
  const switcher = getBarItemByTitle("Show invisible elements");

  await t
    .click(getTabbedMenuItemByText(creatorTabPreviewName))
    .click(Selector("#nextPage"))
    .click(Selector("#nextPage"))
    .click(Selector("input[value='Complete']"))
    .expect(Selector("h3").withText("Thank you for completing the survey").visible).ok()
    .click(Selector(".svc-preview__test-again span").withText(restartSurveyButtonText))
    .expect(Selector(".sd-question__title").withText("string_editor").visible).ok();
});

test("Show invisible elements switcher", async (t) => {
  await setJSON(json2);
  const switcher = getBarItemByTitle("Show invisible elements");

  await t
    .click(getTabbedMenuItemByText(creatorTabPreviewName))
    .expect(Selector(".sd-question__title").withText("string_editor").visible).ok()
    .expect(switcher.visible).ok("Switcher is visible")
    .click(switcher)
    .expect(Selector(".sd-question__title").withText("hidden_question").visible).ok();
});

test("Landscape switcher", async (t) => {
  await explicitErrorHandler();
  await setJSON(json);

  await t
    .click(getTabbedMenuItemByText(creatorTabPreviewName))
    .expect(orientationAction.hasAttribute("disabled")).ok()
    .expect(Selector(".svd-simulator-main").hasClass("svd-simulator-main--frame")).notOk()
    .expect(getBarItemByTitle("Show invisible elements").visible).ok()

    .click(getBarItemByTitle("Select device type"))
    .expect(getListItemByText("iPad Air").visible).ok()
    .click(getListItemByText("iPad Air"))
    .expect(orientationAction.hasAttribute("disabled")).notOk()
    .expect(Selector(".svd-simulator-main").hasClass("svd-simulator-main--frame")).ok()
    .expect(Selector(".svd-simulator-wrapper").clientWidth).gt(1200)
    .expect(Selector(".svd-simulator-wrapper").clientHeight).lt(1000)
    .click(getBarItemByTitle("Switch to portrait orientation"))
    .expect(getBarItemByTitle("Switch to landscape orientation").visible).ok()
    .expect(Selector(".svd-simulator-wrapper").clientWidth).lt(1000)
    .expect(Selector(".svd-simulator-wrapper").clientHeight).gt(1200);
});
test("Device selector", async (t) => {
  await explicitErrorHandler();
  await setJSON(json);

  await t
    .click(getTabbedMenuItemByText(creatorTabPreviewName))
    .expect(Selector(".svc-top-bar .sv-action-bar-item").filterVisible().count).eql(3)
    .expect(orientationAction.hasAttribute("disabled")).ok()
    .expect(getBarItemByTitle("Show invisible elements").visible).ok()

    .click(getBarItemByTitle("Select device type"))
    .expect(getListItemByText("iPad Air").visible).ok()

    .click(getListItemByText("iPad Air"))
    .click(Selector("input[value='Complete']"))
    .expect(orientationAction.hasAttribute("disabled")).notOk()
    .expect(Selector(".svc-preview__test-again span").withText(restartSurveyButtonText).visible).ok()

    .click(getBarItemByTitle("Select device type"))
    .expect(getListItemByText("Desktop").visible).ok()

    .click(getListItemByText("Desktop"))
    .click(Selector(".svc-preview__test-again span").withText(restartSurveyButtonText))
    .expect(orientationAction.hasAttribute("disabled")).ok()
    .expect(getBarItemByTitle("Show invisible elements").visible).ok()

    .click(getBarItemByTitle("Select device type"))
    .expect(getListItemByText("iPad Air").visible).ok();
});
test("Title hints", async (t) => {
  await explicitErrorHandler();
  await setJSON(json);

  await t
    .click(getTabbedMenuItemByText(creatorTabPreviewName))
    .expect(Selector(".svc-top-bar .sv-action-bar-item").filterVisible().count).eql(3)
    .expect(orientationAction.hasAttribute("disabled")).ok()
    .expect(getBarItemByTitle("Show invisible elements").visible).ok()

    .click(getBarItemByTitle("Select device type"))
    .expect(getListItemByText("iPad").visible).ok()

    .click(getListItemByText("iPad"))
    .click(getBarItemByTitle("Switch to portrait orientation"))
    .click(getBarItemByTitle("Switch to landscape orientation"))
    .click(getBarItemByTitle("Show invisible elements"))
    .expect(getBarItemByTitle("Hide invisible elements").visible).ok()
    .click(getBarItemByTitle("Hide invisible elements"))
    .expect(getBarItemByTitle("Show invisible elements").visible).ok();
});