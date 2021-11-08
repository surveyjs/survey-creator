import { url, getTabbedMenuItemByText, setJSON, getBarItemByTitle, getListItemByText } from "../helper";
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
        "item1",
        "item2",
        "item3"
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
      choices: ["item1", "item2", "item3"]
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

test("Language switcher", async (t) => {
  await setJSON(json2);

  await t
    .click(getTabbedMenuItemByText("Test Survey"))
    .expect(getBarItemByTitle("english").visible).ok()
    .expect(Selector(".sv-title .sv-header__text").textContent).contains("My Survey")
    .click(getBarItemByTitle("english"))
    .expect(getListItemByText("deutsch").visible).ok()
    .click(getListItemByText("deutsch"))
    .expect(Selector(".sv-title .sv-header__text").textContent).contains("Meine Umfrage")
    .expect(getBarItemByTitle("deutsch").visible).ok();
});

test.only("Page switcher", async (t) => {
  await setJSON(json2);

  await t
    .click(getTabbedMenuItemByText("Test Survey"))
    .expect(Selector(".sv-question__title").withText("string_editor").visible).ok()
    .expect(Selector("#pageSelector").textContent).contains("First page")
    .expect(Selector("#prevPage button").hasAttribute("disabled")).eql(true)
    .expect(Selector("#nextPage button").hasAttribute("disabled")).eql(false)

    .click(Selector("#nextPage"))
    .expect(Selector(".sv-question__title").withText("question1").visible).ok()
    .expect(Selector("#pageSelector").textContent).contains("Second page")
    .expect(Selector("#prevPage button").hasAttribute("disabled")).eql(false)
    .expect(Selector("#nextPage button").hasAttribute("disabled")).eql(false)

    .click(Selector("#nextPage"))
    .expect(Selector(".sv-question__title").withText("question2").visible).ok()
    .expect(Selector("#pageSelector").textContent).contains("page3")
    .expect(Selector("#prevPage button").hasAttribute("disabled")).eql(false)
    .expect(Selector("#nextPage button").hasAttribute("disabled")).eql(true)

    .click(getBarItemByTitle("page3"))
    .expect(getListItemByText("Second page").visible).ok()
    .expect(getListItemByText("First page").hasClass("sv-list__item--selected")).notOk()
    .expect(getListItemByText("Second page").hasClass("sv-list__item--selected")).notOk()
    .expect(getListItemByText("page3").hasClass("sv-list__item--selected")).ok()
    .click(getListItemByText("Second page"))
    .expect(Selector(".sv-question__title").withText("question1").visible).ok()
    .expect(Selector("#pageSelector").textContent).contains("Second page")
    .expect(Selector("#prevPage button").hasAttribute("disabled")).eql(false)
    .expect(Selector("#nextPage button").hasAttribute("disabled")).eql(false)
    .click(getBarItemByTitle("Second page"))
    .expect(getListItemByText("First page").hasClass("sv-list__item--selected")).notOk()
    .expect(getListItemByText("Second page").hasClass("sv-list__item--selected")).ok()
    .expect(getListItemByText("page3").hasClass("sv-list__item--selected")).notOk()
    .click(getListItemByText("Second page"));
});

test("Test Survey Again", async (t) => {
  await setJSON(json2);
  const switcher = getBarItemByTitle("Show invisible elements");

  await t
    .click(getTabbedMenuItemByText("Test Survey"))
    .click(Selector("#nextPage"))
    .click(Selector("#nextPage"))
    .click(Selector("input[value='Complete']"))
    .expect(Selector("h3").withText("Thank you for completing the survey!").visible).ok()
    .click(getBarItemByTitle("Test Survey Again"))
    .expect(Selector(".sv-question__title").withText("string_editor").visible).ok();
});

test("Show invisible elements switcher", async (t) => {
  await setJSON(json2);
  const switcher = getBarItemByTitle("Show invisible elements");

  await t
    .click(getTabbedMenuItemByText("Test Survey"))
    .expect(Selector(".sv-question__title").withText("string_editor").visible).ok()
    .expect(switcher.visible).ok("Switcher is visible")
    .click(switcher)
    .expect(Selector(".sv-question__title").withText("hidden_question").visible).ok();
});

test("Landscape switcher", async (t) => {
  await setJSON(json);

  await t
    .click(getTabbedMenuItemByText("Test Survey"))
    .expect(orientationAction.hasAttribute("disabled")).ok()
    .expect(Selector(".svd-simulator-main").hasClass("svd-simulator-main--frame")).notOk()
    .expect(getBarItemByTitle("Show invisible elements").visible).ok()

    .click(getBarItemByTitle("Desktop"))
    .expect(getListItemByText("iPad").visible).ok()
    .click(getListItemByText("iPad"))
    .expect(orientationAction.hasAttribute("disabled")).notOk()
    .expect(Selector(".svd-simulator-main").hasClass("svd-simulator-main--frame")).ok()
    .expect(Selector(".svd-simulator-wrapper").clientWidth).gt(900)
    .expect(Selector(".svd-simulator-wrapper").clientHeight).lt(800)
    .click(getBarItemByTitle("Landscape"))
    .expect(getBarItemByTitle("Portrait").visible).ok()
    .expect(Selector(".svd-simulator-wrapper").clientWidth).lt(800)
    .expect(Selector(".svd-simulator-wrapper").clientHeight).gt(900);
});
test("Device selector", async (t) => {
  await setJSON(json);

  await t
    .click(getTabbedMenuItemByText("Test Survey"))
    .expect(Selector(".svc-top-bar .sv-action-bar-item").filterVisible().count).eql(3)
    .expect(orientationAction.hasAttribute("disabled")).ok()
    .expect(getBarItemByTitle("Show invisible elements").visible).ok()

    .click(getBarItemByTitle("Desktop"))
    .expect(getListItemByText("iPad").visible).ok()

    .click(getListItemByText("iPad"))
    .click(Selector("input[value='Complete']"))
    .expect(orientationAction.hasAttribute("disabled")).notOk()
    .expect(getBarItemByTitle("Test Survey Again").visible).ok()

    .click(getBarItemByTitle("iPad"))
    .expect(getListItemByText("Desktop").visible).ok()

    .click(getListItemByText("Desktop"))
    .click(getBarItemByTitle("Test Survey Again"))
    .expect(orientationAction.hasAttribute("disabled")).ok()
    .expect(getBarItemByTitle("Show invisible elements").visible).ok()

    .click(getBarItemByTitle("Desktop"))
    .expect(getListItemByText("iPad").visible).ok();
});