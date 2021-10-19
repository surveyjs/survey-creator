import { url, getTabbedMenuItemByText, setJSON } from "../helper";
import { ClientFunction, Selector } from "testcafe";
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

function getBarItemByText(text) {
  return Selector(".svc-test-tab__content-actions .sv-action-bar-item .sv-action-bar-item__title").withText(text);
}
function getListItemByText(text) {
  return Selector(".sv-popup__content .sv-list .sv-list__item").withText(text);
}

const visibleBarItems = Selector(".svc-test-tab__content-actions .sv-action").filterVisible();

test("Language switcher", async (t) => {
  await setJSON(json2);

  await t
    .click(getTabbedMenuItemByText("Test Survey"))
    .expect(getBarItemByText("english").visible).ok()
    .expect(Selector(".sv-title .sv-header__text").textContent).contains("My Survey")
    .click(getBarItemByText("english"))
    .expect(getListItemByText("deutsch").visible).ok()
    .click(getListItemByText("deutsch"))
    .expect(Selector(".sv-title .sv-header__text").textContent).contains("Meine Umfrage")
    .expect(getBarItemByText("deutsch").visible).ok();
});

test("Page switcher", async (t) => {
  await setJSON(json2);

  await t
    .click(getTabbedMenuItemByText("Test Survey"))
    .expect(Selector(".sv-question__title").withText("string_editor").visible).ok()
    .expect(Selector("#pageSelector").textContent).contains("page1")
    .expect(Selector("#prevPage button").hasAttribute("disabled")).eql(true)
    .expect(Selector("#nextPage button").hasAttribute("disabled")).eql(false)

    .click(Selector("#nextPage"))
    .expect(Selector(".sv-question__title").withText("question1").visible).ok()
    .expect(Selector("#pageSelector").textContent).contains("page2")
    .expect(Selector("#prevPage button").hasAttribute("disabled")).eql(false)
    .expect(Selector("#nextPage button").hasAttribute("disabled")).eql(false)

    .click(Selector("#nextPage"))
    .expect(Selector(".sv-question__title").withText("question2").visible).ok()
    .expect(Selector("#pageSelector").textContent).contains("page3")
    .expect(Selector("#prevPage button").hasAttribute("disabled")).eql(false)
    .expect(Selector("#nextPage button").hasAttribute("disabled")).eql(true)

    .click(getBarItemByText("page3"))
    .expect(getListItemByText("page2").visible).ok()
    .expect(getListItemByText("page1").hasClass("sv-list__item--selected")).notOk()
    .expect(getListItemByText("page2").hasClass("sv-list__item--selected")).notOk()
    .expect(getListItemByText("page3").hasClass("sv-list__item--selected")).ok()
    .click(getListItemByText("page2"))
    .expect(Selector(".sv-question__title").withText("question1").visible).ok()
    .expect(Selector("#pageSelector").textContent).contains("page2")
    .expect(Selector("#prevPage button").hasAttribute("disabled")).eql(false)
    .expect(Selector("#nextPage button").hasAttribute("disabled")).eql(false)
    .click(getBarItemByText("page2"))
    .expect(getListItemByText("page1").hasClass("sv-list__item--selected")).notOk()
    .expect(getListItemByText("page2").hasClass("sv-list__item--selected")).ok()
    .expect(getListItemByText("page3").hasClass("sv-list__item--selected")).notOk()
    .click(getListItemByText("page2"));
});

test("Test Survey Again", async (t) => {
  await setJSON(json2);
  const switcher = getBarItemByText("Show invisible elements");

  await t
    .click(getTabbedMenuItemByText("Test Survey"))
    .click(Selector("#nextPage"))
    .click(Selector("#nextPage"))
    .click(Selector("input[value='Complete']"))
    .expect(Selector("h3").withText("Thank you for completing the survey!").visible).ok()
    .click(getBarItemByText("Test Survey Again"))
    .expect(Selector(".sv-question__title").withText("string_editor").visible).ok();
});

test("Show invisible elements switcher", async (t) => {
  await setJSON(json2);
  const switcher = getBarItemByText("Show invisible elements");

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
    .expect(Selector("#orientationSelector").visible).notOk()
    .expect(Selector(".svd-simulator-main").hasClass("svd-simulator-main--frame")).notOk()
    .expect(getBarItemByText("Show invisible elements").visible).ok()

    .click(getBarItemByText("Desktop"))
    .expect(getListItemByText("iPad").visible).ok()
    .click(getListItemByText("iPad"))
    .expect(getBarItemByText("Landscape").visible).ok()
    .expect(Selector(".svd-simulator-main").hasClass("svd-simulator-main--frame")).ok()
    .expect(Selector(".svd-simulator-wrapper").clientWidth).gt(900)
    .expect(Selector(".svd-simulator-wrapper").clientHeight).lt(800)
    .click(getBarItemByText("Landscape"))
    .expect(getBarItemByText("Portrait").visible).ok()
    .expect(Selector(".svd-simulator-wrapper").clientWidth).lt(800)
    .expect(Selector(".svd-simulator-wrapper").clientHeight).gt(900);
});
test("Device selector", async (t) => {
  await setJSON(json);

  await t
    .click(getTabbedMenuItemByText("Test Survey"))
    .expect(visibleBarItems.count).eql(2)
    .expect(getBarItemByText("Show invisible elements").visible).ok()

    .click(getBarItemByText("Desktop"))
    .expect(getListItemByText("iPad").visible).ok()

    .click(getListItemByText("iPad"))
    .click(Selector("input[value='Complete']"))
    .expect(visibleBarItems.count).eql(3, "Landscape/Portrait switch appeared")
    .expect(getBarItemByText("Test Survey Again").visible).ok()

    .click(getBarItemByText("iPad"))
    .expect(getListItemByText("Desktop").visible).ok()

    .click(getListItemByText("Desktop"))
    .click(getBarItemByText("Test Survey Again"))
    .expect(visibleBarItems.count).eql(2)
    .expect(getBarItemByText("Show invisible elements").visible).ok()

    .click(getBarItemByText("Desktop"))
    .expect(getListItemByText("iPad").visible).ok();
});