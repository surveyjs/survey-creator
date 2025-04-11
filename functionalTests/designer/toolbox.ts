import { url, getJSON, toolboxItems, explicitErrorHandler, setJSON, changeToolboxScrolling, changeToolboxSearchEnabled, getToolboxItemByText, getSubToolboxItemByText, setAllowEditSurveyTitle } from "../helper";

import { ClientFunction, Selector } from "testcafe";
const title = "Toolbox";

fixture`${title}`.page`${url}`.beforeEach(async (t) => {
  await t.resizeWindow(1900, 600);
});

test("Simple click", async (t) => {
  await t.hover(toolboxItems);
  await t.click(toolboxItems, { offsetX: -20 });
  const resultJson = await getJSON();
  await t.expect(resultJson.pages[0].elements.length).eql(1);
});

async function setupCategories(t, windowWidth = 1910) {
  const changeCategories = ClientFunction(() => {
    window["creator"].toolbox.removeCategories();
    window["creator"].toolbox.orderedQuestions = ["radiogroup", "matrix", "matrixdropdown", "panel", "panaldynamic"];
    window["creator"].toolbox.showCategoryTitles = true;
    window["creator"].toolbox.changeCategories([
      {
        name: "panel",
        category: "Panels"
      }, {
        name: "paneldynamic",
        category: "Panels"
      }, {
        name: "matrix",
        category: "Matrix"
      }, {
        name: "matrixdropdown",
        category: "Matrix"
      }, {
        name: "matrixdynamic",
        category: "Matrix"
      }
    ]);
  });
  await changeCategories();
  await t.resizeWindow(windowWidth, 600);
}

async function setupToolboxProperty(propertyName: string, propertyValue: any) {
  await ClientFunction((propertyName: string, propertyValue: any) => {
    window["creator"].toolbox[propertyName] = propertyValue;
  })(propertyName, propertyValue);
}

const categories = Selector(".svc-toolbox__category");
const categoriesHeader = Selector(".svc-toolbox__category-header");
const visibleToolboxItems = Selector(".svc-toolbox__category>.svc-toolbox__tool").filterVisible();
const collapsibleCategories = Selector(".svc-toolbox__category-header--collapsed");
const getCollapsedCategories = (index = 0) => { return categoriesHeader.nth(index).find(".svc-string-editor__button--expand"); };
const getExpandedCategories = (index = 0) => { return categoriesHeader.nth(index).find(".svc-string-editor__button--collapse"); };
const toolboxSubTypesPopup = Selector(".sv-popup-inner.svc-toolbox-subtypes .sv-popup__container").filterVisible();
const newGhostPagePage = Selector("[data-sv-drop-target-survey-element='newGhostPage']");

test("Categories check hover icons", async (t) => {
  await setupCategories(t);

  await t
    .resizeWindow(1920, 1920)
    .expect(categoriesHeader.count).eql(3)
    .expect(categoriesHeader.nth(0).innerText).eql("General")
    .expect(categoriesHeader.nth(1).innerText).eql("Matrix")
    .expect(categoriesHeader.nth(2).innerText).eql("Panels")
    .hover(categoriesHeader.nth(0))
    .expect(getExpandedCategories(0).visible).ok()
    .expect(getCollapsedCategories(0).visible).notOk()

    .hover(categoriesHeader.nth(1))
    .expect(getExpandedCategories(1).visible).notOk()
    .expect(getCollapsedCategories(1).visible).ok()

    .hover(categoriesHeader.nth(2))
    .expect(getExpandedCategories(2).visible).notOk()
    .expect(getCollapsedCategories(2).visible).ok()
    .wait(100);
});

test("Categories large mode", async (t) => {
  await setupCategories(t);

  await t
    .expect(categoriesHeader.count).eql(3)
    .expect(visibleToolboxItems.count).eql(16)

    .click(categoriesHeader.nth(1))
    .expect(visibleToolboxItems.count).eql(3)

    .click(categoriesHeader.nth(2))
    .expect(visibleToolboxItems.count).eql(2);
});

test.before(async (t) => {
  await t.resizeWindow(1200, 605);
})("Categories Responsiveness small -> large", async (t) => {
  await changeToolboxScrolling(false);
  await changeToolboxSearchEnabled(false);

  await setupCategories(t, 1110);
  await t
    .expect(Selector(".svc-toolbox .sv-dots__item").visible).ok()
    .expect(categoriesHeader.count).eql(0)
    .expect(visibleToolboxItems.count).eql(11)

    .resizeWindow(1900, 600)
    .expect(categoriesHeader.count).eql(3)
    .expect(visibleToolboxItems.count).eql(16)

    .click(categoriesHeader.nth(1))
    .expect(visibleToolboxItems.count).eql(3)

    .click(categoriesHeader.nth(2))
    .expect(visibleToolboxItems.count).eql(2);
});

test.before(async (t) => {
  await t.resizeWindow(1900, 600);
})("Categories Responsiveness large -> small", async (t) => {
  await changeToolboxScrolling(false);
  await changeToolboxSearchEnabled(false);
  await setupCategories(t);
  await t
    .expect(categoriesHeader.count).eql(3)
    .expect(visibleToolboxItems.count).eql(16)

    .resizeWindow(1200, 600)
    .expect(Selector(".svc-toolbox .sv-dots__item").visible).ok()
    .expect(categoriesHeader.count).eql(0)
    .expect(visibleToolboxItems.count).eql(11);
});

test("Categories allowExpandMultipleCategories property", async (t) => {

  await setupCategories(t);
  await setupToolboxProperty("allowExpandMultipleCategories", true);
  await setupToolboxProperty("forceCompact", false);

  await t
    .expect(categoriesHeader.count).eql(3)
    .expect(collapsibleCategories.count).eql(3)
    .expect(visibleToolboxItems.count).eql(0)

    .click(categoriesHeader.nth(0))
    .expect(categories.nth(0).find(":scope>.svc-toolbox__tool").count).eql(16)
    .expect(visibleToolboxItems.count).eql(16)

    .click(categoriesHeader.nth(1))
    .expect(categories.nth(1).find(":scope>.svc-toolbox__tool").count).eql(3)
    .expect(visibleToolboxItems.count).eql(19)

    .click(categoriesHeader.nth(2))
    .expect(categories.nth(2).find(":scope>.svc-toolbox__tool").count).eql(2)
    .expect(visibleToolboxItems.count).eql(21);
});

test("Categories keepAllCategoriesExpanded property", async (t) => {
  await setupCategories(t);
  await setupToolboxProperty("forceCompact", false);
  await setupToolboxProperty("keepAllCategoriesExpanded", true);

  await t
    .expect(categoriesHeader.count).eql(3)
    .expect(collapsibleCategories.count).eql(0)
    .expect(visibleToolboxItems.count).eql(21)

    .hover(categoriesHeader.nth(0), { speed: 0.5 })
    .expect(getExpandedCategories(0).exists).notOk()
    .expect(getCollapsedCategories(0).exists).notOk()

    .click(categoriesHeader.nth(0))
    .expect(categoriesHeader.count).eql(3)
    .expect(collapsibleCategories.count).eql(0)
    .expect(visibleToolboxItems.count).eql(21)

    .hover(categoriesHeader.nth(1), { speed: 0.5 })
    .expect(getExpandedCategories(1).exists).notOk()
    .expect(getCollapsedCategories(1).exists).notOk()

    .click(categoriesHeader.nth(1))
    .expect(categoriesHeader.count).eql(3)
    .expect(collapsibleCategories.count).eql(0)
    .expect(visibleToolboxItems.count).eql(21)

    .hover(categoriesHeader.nth(2), { speed: 0.5 })
    .expect(getExpandedCategories(2).exists).notOk()
    .expect(getCollapsedCategories(2).exists).notOk()

    .click(categoriesHeader.nth(2))
    .expect(categoriesHeader.count).eql(3)
    .expect(collapsibleCategories.count).eql(0)
    .expect(visibleToolboxItems.count).eql(21);
});

test("add question from toolbox popup items", async (t) => {
  await changeToolboxScrolling(false);

  const popup = Selector(".sv-popup__container").filterVisible();

  await t
    .resizeWindow(970, 632)
    .expect(Selector(".svc-question__content").exists).notOk()
    .expect(popup.visible).notOk()

    .click(".svc-toolbox__tool--dots")
    .expect(popup.visible).ok()

    .click(popup.find(".svc-list__item"))
    .expect(Selector(".svc-question__content").exists).ok()
    .resizeWindow(1900, 600);
});

test("check toolbox scroll", async (t) => {
  await changeToolboxScrolling(false);
  await explicitErrorHandler();
  await t.resizeWindow(1900, 800);
  const hasNoScroll = ClientFunction(() => {
    let element = document.querySelector(".svc-toolbox");
    return element?.scrollHeight == element?.clientHeight;
  });

  const setSize = ClientFunction((size) => {
    let element = document.querySelector(".svc-creator");
    element["style"].height = size + "px";
  });

  for (var i = 580; i > 540; i--) {
    await setSize(i);
    await t
      .wait(100)
      .expect(hasNoScroll()).ok();
  }
});

test("check toolbox css", async (t) => {
  await t.expect(Selector(".svc-toolbox__tool.undefined").exists).notOk();
});

test("toolbar responsiveness with search", async (t) => {
  await changeToolboxScrolling(false);
  await changeToolboxSearchEnabled(false);

  await explicitErrorHandler();
  await t.resizeWindow(1920, 597);
  await setJSON({
    widthMode: "responsive",
    "pages": [
      {
        "name": "page1",
        "elements": [
          {
            "type": "text",
            "name": "question1"
          }
        ]
      }
    ]
  });
  await t
    .expect(Selector(".svc-toolbox .sv-dots__item").visible).ok()
    .expect(Selector(".svc-toolbox__category>.svc-toolbox__tool").count).eql(22)
    .expect(Selector(".svc-toolbox .sv-dots__item").visible).ok()
    .expect(visibleToolboxItems.count).eql(11);

  await changeToolboxSearchEnabled(true);
  await t.resizeWindow(1920, 598);
  await t
    .expect(Selector(".svc-toolbox .sv-dots__item").visible).ok()
    .expect(Selector(".svc-toolbox__category>.svc-toolbox__tool").count).eql(22)
    .expect(Selector(".svc-toolbox .sv-dots__item").visible).ok()
    .expect(visibleToolboxItems.count).eql(10);
});

test("toolbar responsiveness in compact mode", async (t) => {
  await changeToolboxScrolling(false);
  await changeToolboxSearchEnabled(false);

  await explicitErrorHandler();
  await t.resizeWindow(1920, 605);
  const addCustomeButtonIntoQuestionToolbar = ClientFunction(() => {
    const customCategoryName = "Custom Questions";
    const customQuestionsData = {};

    var addIntoCustomItems = (element) => {
      var json = new window["Survey"].JsonObject().toJsonObject(element);
      json.type = element.getType();
      var item = {
        id: element.name,
        name: element.name,
        iconName: "icon-" + element.getType(),
        title: element.title,
        json: json,
        isCopied: false,
        isStandard: false,
        category: customCategoryName
      };
      customQuestionsData[item.name] = item;
      window["creator"].toolbox.addItem(item);
    };

    window["creator"].onDefineElementMenuItems.add(function (editor, options) {
      if (options.obj.isPage) return;
      const objToAdd = options.obj;
      options.items.unshift({
        id: "addtosharedrepo",
        title: "Save as Toolbox Item",
        iconName: "icon-toolbox",
        iconSize: 16,
        action: () => {
          addIntoCustomItems(objToAdd);
        }
      });
    });
  });
  await addCustomeButtonIntoQuestionToolbar();
  await setJSON({
    widthMode: "responsive",
    "pages": [
      {
        "name": "page1",
        "elements": [
          {
            "type": "text",
            "name": "question1"
          }
        ]
      }
    ]
  });

  await t
    .expect(Selector(".svc-toolbox .sv-dots__item").visible).ok()
    .expect(Selector(".sv-scroll__container").clientHeight).lte(515)
    .expect(visibleToolboxItems.count).eql(11)
    .expect(Selector(".svc-toolbox__category>.svc-toolbox__tool").count).eql(22)

    .click(".svc-question__content--text", { offsetX: 200, offsetY: 20 })
    .click(Selector(".svc-survey-element-toolbar-item__title").withText("Save as Toolbox Item"))

    .expect(Selector(".svc-toolbox .sv-dots__item").visible).ok()
    .expect(Selector(".sv-scroll__container").clientHeight).lte(515)
    .expect(visibleToolboxItems.count).eql(11)
    .expect(Selector(".svc-toolbox__category>.svc-toolbox__tool").count).eql(23);
});

test("toolbox subTypes: add items by drag-n-drop", async (t) => {
  await explicitErrorHandler();
  await setAllowEditSurveyTitle(false);
  await t.resizeWindow(1900, 800);

  await t
    .expect(toolboxSubTypesPopup.visible).notOk()
    .hover(getToolboxItemByText("Rating Scale").parent(".svc-toolbox__tool").find(".svc-toolbox__item-submenu-button"))
    .wait(400)
    .expect(toolboxSubTypesPopup.visible).ok()
    .hover(getToolboxItemByText("Rating Scale").parent(".svc-toolbox__tool"))
    .wait(400)
    .expect(toolboxSubTypesPopup.visible).notOk()
    .hover(getToolboxItemByText("Rating Scale").parent(".svc-toolbox__tool").find(".svc-toolbox__item-submenu-button"))
    .wait(400)
    .expect(toolboxSubTypesPopup.visible).ok()

    .hover(getSubToolboxItemByText("Smileys"), { speed: 0.1 })
    .wait(400)
    .dragToElement(getSubToolboxItemByText("Smileys"), ".svc-designer__placeholder-container", { speed: 0.5 })
    .expect(Selector(".svc-question__content").filterVisible().count).eql(1)

    .hover(getToolboxItemByText("Rating Scale"))
    .dragToElement(getToolboxItemByText("Rating Scale"), newGhostPagePage, { speed: 0.5 })
    .expect(Selector(".svc-question__content").filterVisible().count).eql(2)
    .expect(toolboxSubTypesPopup.visible).notOk();

  const expectedJson = {
    "headerView": "advanced",
    "pages": [
      {
        "name": "page1",
        "elements": [
          {
            "type": "rating",
            "name": "question1",
            "rateType": "smileys"
          }
        ]
      },
      {
        "name": "page2",
        "elements": [
          {
            "type": "rating",
            "name": "question2"
          }
        ]
      }
    ]
  };
  const resultJson = await getJSON();
  await t.expect(resultJson).eql(expectedJson);
});

test("toolbox subTypes: add items by click", async (t) => {
  await explicitErrorHandler();
  await t.resizeWindow(1900, 800);

  await t
    .click(getToolboxItemByText("Single-Line Input"))
    .wait(400)
    .expect(Selector(".svc-question__content").filterVisible().count).eql(1)

    .hover(getToolboxItemByText("Single-Line Input").parent(".svc-toolbox__tool").find(".svc-toolbox__item-submenu-button"))
    .wait(400)
    .expect(toolboxSubTypesPopup.visible).ok()

    .click(getSubToolboxItemByText("Password"))
    .expect(Selector(".svc-question__content").filterVisible().count).eql(2)
    .expect(toolboxSubTypesPopup.visible).ok();

  const expectedJson = {
    "headerView": "advanced",
    "pages": [
      {
        "name": "page1",
        "elements": [
          {
            "type": "text",
            "name": "question1"
          },
          {
            "type": "text",
            "name": "question2",
            "inputType": "password"
          }
        ]
      }
    ]
  };
  const resultJson = await getJSON();
  await t.expect(resultJson).eql(expectedJson);
});

test("toolbox subTypes: hide subTypes popup", async (t) => {
  await explicitErrorHandler();
  await t.resizeWindow(1900, 800);

  await t
    .expect(toolboxSubTypesPopup.visible).notOk()
    .hover(getToolboxItemByText("Rating Scale").parent(".svc-toolbox__tool").find(".svc-toolbox__item-submenu-button"))
    .wait(400)
    .expect(toolboxSubTypesPopup.visible).ok()

    .scrollBy(".sv-scroll__scroller", 2, 100)
    .expect(toolboxSubTypesPopup.visible).notOk();
});

test("toolbox search in compact mode - clear but do not close", async (t) => {
  await t.resizeWindow(1200, 600);

  await t
    .click(".svc-toolbox__search-button")
    .typeText(".svc-search__input", "d")
    .expect(Selector(".svc-search__input").value).eql("d")
    .expect(Selector(".svc-toolbox").hasClass("svc-toolbox--flyout")).ok()
    .click(".svc-toolbox #svd-grid-search-close")
    .expect(Selector(".svc-search__input").value).eql("")
    .expect(Selector(".svc-toolbox").hasClass("svc-toolbox--flyout")).ok();
});
