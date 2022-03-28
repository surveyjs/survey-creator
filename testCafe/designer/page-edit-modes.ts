import { Selector } from "testcafe";
import { url, urlByPage, setJSON, changeToolboxLocation, addQuestionByAddQuestionButton, getToolboxItemByText, getVisibleElement } from "../helper";

const title = "Page Edit Modes";

fixture`${title}`.page`${url}`.beforeEach(async (t) => {
});

test("Continious (ordinary) page mode", async (t) => {
  await t
    .maximizeWindow()

    .expect(Selector(".svc-tab-designer__page-navigator").exists).notOk()
    .expect(Selector(".svc-page__add-new-question > span").withText("Add Question").count).eql(1)
    .expect(Selector(".svc-page__add-new-question > span").withText("Add Question").visible).ok()

    .click(Selector(".svc-page__add-new-question > span").withText("Add Question"))
    .expect(Selector("span").withText("question1").visible).ok()
    .expect(Selector(".svc-tab-designer__page-navigator").exists).ok()
    .expect(Selector(".svc-tab-designer__page-navigator").visible).ok()
    //.expect(Selector(".svc-page-navigator-item-content").count).eql(0)
    .expect(Selector(".svc-page__add-new-question > span").withText("Add Question").count).eql(2)
    .expect(Selector("h4.sd-page__title span[aria-placeholder='Page 1']").visible).ok()
    .expect(Selector("h4.sd-page__title span[aria-placeholder='Page 2']").visible).ok()

    .click(Selector(".svc-page__add-new-question > span").withText("Add Question").nth(1))
    .expect(Selector(".svc-tab-designer__page-navigator").exists).ok()
    .expect(Selector(".svc-tab-designer__page-navigator").visible).ok()
    .expect(Selector("span").withText("question2").visible).ok()
    .expect(Selector(".svc-page__add-new-question > span").withText("Add Question").count).eql(3)
    .expect(Selector("h4.sd-page__title span[aria-placeholder='Page 1']").visible).ok()
    .expect(Selector("h4.sd-page__title span[aria-placeholder='Page 2']").visible).ok()
    .expect(Selector("h4.sd-page__title span[aria-placeholder='Page 3']").visible).ok()
    .expect(Selector(".svc-page-navigator-item-content").count).eql(2)
    .expect(Selector(".svc-page-navigator-item-content").withText("page1").visible).ok()
    .expect(Selector(".svc-page-navigator-item-content").withText("page2").visible).ok();
});

fixture`${title}`.page`${urlByPage}`.beforeEach(async (t) => {
});

test("By page edit mode", async (t) => {
  await t
    .maximizeWindow()

    .expect(Selector(".svc-tab-designer__page-navigator").exists).notOk()
    .expect(Selector(".svc-page__add-new-question > span").withText("Add Question").count).eql(1)
    .expect(Selector(".svc-page__add-new-question > span").withText("Add Question").visible).ok()

    .click(Selector(".svc-page__add-new-question > span").withText("Add Question"))
    .expect(Selector("span").withText("question1").visible).ok()
    .expect(Selector(".svc-tab-designer__page-navigator").exists).ok()
    .expect(Selector(".svc-tab-designer__page-navigator").visible).ok()
    .expect(Selector(".svc-page-navigator-item-content").count).eql(2)
    .expect(Selector(".svc-page-navigator-item-content").withText("page1").visible).ok()
    .expect(Selector(".svc-page-navigator-item-content").withText("page2").visible).ok()
    .expect(Selector(".svc-page__add-new-question > span").withText("Add Question").count).eql(1)
    .expect(Selector("h4.sd-page__title span[aria-placeholder='Page 1']").exists).ok()
    .expect(Selector("h4.sd-page__title span[aria-placeholder='Page 2']").exists).notOk()

    .click(Selector(".svc-page-navigator-item-content").withText("page2"))
    .expect(Selector("h4.sd-page__title span[aria-placeholder='Page 2']").visible).ok()
    .expect(Selector(".svc-page__add-new-question > span").withText("Add Question").count).eql(1)
    .expect(Selector("h4.sd-page__title span[aria-placeholder='Page 1']").exists).notOk()
    .expect(Selector("h4.sd-page__title span[aria-placeholder='Page 2']").exists).ok()

    .click(Selector(".svc-page__add-new-question > span").withText("Add Question"))
    .expect(Selector(".svc-tab-designer__page-navigator").exists).ok()
    .expect(Selector(".svc-tab-designer__page-navigator").visible).ok()
    .expect(Selector("span").withText("question2").visible).ok()
    .expect(Selector(".svc-page-navigator-item-content").count).eql(3)
    .expect(Selector(".svc-page-navigator-item-content").withText("page1").visible).ok()
    .expect(Selector(".svc-page-navigator-item-content").withText("page2").visible).ok()
    .expect(Selector(".svc-page-navigator-item-content").withText("page3").visible).ok()
    .expect(Selector(".svc-page__add-new-question > span").withText("Add Question").count).eql(1)
    .expect(Selector("h4.sd-page__title span[aria-placeholder='Page 2']").visible).ok()

    .click(Selector(".svc-page-navigator-item-content").withText("page3"))
    .expect(Selector("h4.sd-page__title span[aria-placeholder='Page 3']").visible).ok()
    .expect(Selector(".svc-page__add-new-question > span").withText("Add Question").count).eql(1)
    .expect(Selector("h4.sd-page__title span[aria-placeholder='Page 1']").exists).notOk()
    .expect(Selector("h4.sd-page__title span[aria-placeholder='Page 2']").exists).notOk()
    .expect(Selector("h4.sd-page__title span[aria-placeholder='Page 3']").exists).ok();
});