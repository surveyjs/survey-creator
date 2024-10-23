import { Selector } from "testcafe";
import { url, urlByPage, getAddNewQuestionButton } from "../helper";

const title = "Page Edit Modes";

fixture`${title}`.page`${url}`.beforeEach(async (t) => {
});

test("Continious (ordinary) page mode", async (t) => {
  await t
    .maximizeWindow()

    .expect(Selector(".svc-tab-designer__page-navigator").exists).notOk()
    .expect(getAddNewQuestionButton().count).eql(1)
    .expect(getAddNewQuestionButton().visible).ok()

    .click(getAddNewQuestionButton())
    .expect(Selector("span").withText("question1").visible).ok()
    .expect(Selector(".svc-tab-designer__page-navigator").exists).ok()
    .expect(Selector(".svc-tab-designer__page-navigator").visible).notOk()
    //.expect(Selector(".svc-page-navigator-item-content").count).eql(0)
    .expect(getAddNewQuestionButton().count).eql(2)
    .expect(Selector("h4.sd-page__title span[aria-placeholder='Page 1']").visible).ok()
    .expect(Selector("h4.sd-page__title span[aria-placeholder='Page 2']").visible).ok()

    .click(getAddNewQuestionButton().nth(1))
    .expect(Selector(".svc-tab-designer__page-navigator").exists).ok()
    .expect(Selector(".svc-tab-designer__page-navigator").visible).ok()
    .expect(Selector("span").withText("question2").visible).ok()
    .expect(getAddNewQuestionButton().count).eql(3)
    .expect(Selector("h4.sd-page__title span[aria-placeholder='Page 1']").visible).ok()
    .expect(Selector("h4.sd-page__title span[aria-placeholder='Page 2']").visible).ok()
    .expect(Selector("h4.sd-page__title span[aria-placeholder='Page 3']").visible).ok()
    .expect(Selector(".svc-page-navigator-item-content").count).eql(2)
    .expect(Selector(".svc-page-navigator-item-content").withText("page1").visible).ok()
    .expect(Selector(".svc-page-navigator-item-content").withText("page2").visible).ok();
});

test.page(urlByPage)("By page edit mode", async (t) => {
  await t
    .maximizeWindow()

    .expect(Selector(".svc-tab-designer__page-navigator").exists).notOk()
    .expect(getAddNewQuestionButton().count).eql(1)
    .expect(getAddNewQuestionButton().visible).ok()

    .click(getAddNewQuestionButton())
    .expect(Selector("span").withText("question1").visible).ok()
    .expect(Selector(".svc-tab-designer__page-navigator").exists).ok()
    .expect(Selector(".svc-tab-designer__page-navigator").visible).ok()
    .expect(Selector(".svc-page-navigator-item-content").count).eql(2)
    .expect(Selector(".svc-page-navigator-item-content").withText("page1").visible).ok()
    .expect(Selector(".svc-page-navigator-item-content").withText("page2").visible).ok()
    .expect(getAddNewQuestionButton().count).eql(1)
    .expect(Selector("h4.sd-page__title span[aria-placeholder='Page 1']").exists).ok()
    .expect(Selector("h4.sd-page__title span[aria-placeholder='Page 2']").exists).notOk()

    .click(Selector(".svc-page-navigator-item-content").withText("page2"))
    .expect(Selector("h4.sd-page__title span[aria-placeholder='Page 2']").visible).ok()
    .expect(getAddNewQuestionButton().count).eql(1)
    .expect(Selector("h4.sd-page__title span[aria-placeholder='Page 1']").exists).notOk()
    .expect(Selector("h4.sd-page__title span[aria-placeholder='Page 2']").exists).ok()

    .click(getAddNewQuestionButton())
    .expect(Selector(".svc-tab-designer__page-navigator").exists).ok()
    .expect(Selector(".svc-tab-designer__page-navigator").visible).ok()
    .expect(Selector("span").withText("question2").visible).ok()
    .expect(Selector(".svc-page-navigator-item-content").count).eql(3)
    .expect(Selector(".svc-page-navigator-item-content").withText("page1").visible).ok()
    .expect(Selector(".svc-page-navigator-item-content").withText("page2").visible).ok()
    .expect(Selector(".svc-page-navigator-item-content").withText("page3").visible).ok()
    .expect(getAddNewQuestionButton().count).eql(1)
    .expect(Selector("h4.sd-page__title span[aria-placeholder='Page 2']").visible).ok()

    .click(Selector(".svc-page-navigator-item-content").withText("page3"))
    .expect(Selector("h4.sd-page__title span[aria-placeholder='Page 3']").visible).ok()
    .expect(getAddNewQuestionButton().count).eql(1)
    .expect(Selector("h4.sd-page__title span[aria-placeholder='Page 1']").exists).notOk()
    .expect(Selector("h4.sd-page__title span[aria-placeholder='Page 2']").exists).notOk()
    .expect(Selector("h4.sd-page__title span[aria-placeholder='Page 3']").exists).ok();
});
test.page(urlByPage)("By page edit mode - delete second page", async (t) => {
  const pageToolbarActions = Selector(".svc-page__content-actions").filterVisible().find(".sv-action").filterVisible();
  const deleteActionButton = pageToolbarActions.find('button[title="Delete"]');
  await t
    .maximizeWindow()

    .click(getAddNewQuestionButton())
    .expect(Selector("span").withText("question1").visible).ok()
    .click(Selector(".svc-page-navigator-item-content").withText("page2"))
    .expect(Selector("h4.sd-page__title span[aria-placeholder='Page 2']").visible).ok()
    .click(getAddNewQuestionButton())
    .click(Selector(".svc-page-navigator-item-content").withText("page1"))
    .expect(Selector("span").withText("question1").visible).ok()
    .click(Selector(".svc-page-navigator-item-content").withText("page2"))
    .expect(Selector("span").withText("question2").visible).ok()
    .click(deleteActionButton)
    .expect(Selector(".svc-page-navigator-item-content").withText("page1").visible).ok()
    .expect(Selector("span").withText("question1").visible).ok();
});