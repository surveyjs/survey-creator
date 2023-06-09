import { url, getJSON, toolboxItems, explicitErrorHandler, setJSON } from "../helper";
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
const visibleToolboxItems = Selector(".svc-toolbox__tool").filterVisible();
const collapsibleCategories = Selector(".svc-toolbox__category-header--collapsed");
const getCollapsedCategories = (index = 0) => { return categoriesHeader.nth(index).find(".svc-string-editor__button--expand"); };
const getExpandedCategories = (index = 0) => { return categoriesHeader.nth(index).find(".svc-string-editor__button--collapse"); };

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
    .expect(categories.nth(0).find(".svc-toolbox__tool").count).eql(16)
    .expect(visibleToolboxItems.count).eql(16)

    .click(categoriesHeader.nth(1))
    .expect(categories.nth(1).find(".svc-toolbox__tool").count).eql(3)
    .expect(visibleToolboxItems.count).eql(19)

    .click(categoriesHeader.nth(2))
    .expect(categories.nth(2).find(".svc-toolbox__tool").count).eql(2)
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
  const popup = Selector(".sv-popup__container").filterVisible();

  await t
    .resizeWindow(970, 632)
    .expect(Selector(".svc-question__content").exists).notOk()
    .expect(popup.visible).notOk()

    .click(".svc-toolbox__tool.sv-dots")
    .expect(popup.visible).ok()

    .click(popup.find(".sv-list__item"))
    .expect(Selector(".svc-question__content").exists).ok()
    .resizeWindow(1900, 600);
});

test("check toolbox scroll", async (t) => {
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

test("toolbar responsiveness in compact mode", async (t) => {
  await t.resizeWindow(1200, 605);
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
    .expect(Selector(".svc-toolbox__container").clientHeight).lte(510)
    .expect(visibleToolboxItems.count).eql(11)
    .expect(Selector(".svc-toolbox__tool").count).eql(22)

    .click(".svc-question__content--text", { offsetX: 200, offsetY: 20 })
    .click(Selector(".sv-action-bar-item__title").withText("Save as Toolbox Item"))

    .expect(Selector(".svc-toolbox .sv-dots__item").visible).ok()
    .expect(Selector(".svc-toolbox__container").clientHeight).lte(510)
    .expect(visibleToolboxItems.count).eql(11)
    .expect(Selector(".svc-toolbox__tool").count).eql(23);
});