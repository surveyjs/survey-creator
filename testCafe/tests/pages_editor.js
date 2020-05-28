import { url, init } from "../settings";
import { Selector, ClientFunction } from "testcafe";
const assert = require("assert");
const title = `drag and drop`;

fixture`surveyjseditor: ${title}`.page`${url}`.beforeEach(async ctx => {
  await init();
});

test(`checking pagesEditor elements exists`, async t => {
  const getPagesCount = ClientFunction(
    () => document.querySelectorAll(".svd-pages .svd-page").length
  );

  await t
    .hover("svd-pages-editor")
    .hover(".svd-page-selector")
    .hover(".svd-pages")
    .hover(`[title="Add New Page"]`);

  assert.equal(await getPagesCount(), 1);
});

test(`checking add page`, async t => {
  const getPagesCount = ClientFunction(
    () => document.querySelectorAll(".svd-pages .svd-page").length
  );

  await t.click(`[title="Add New Page"]`);

  assert.equal(await getPagesCount(), 2);

  const page1 = Selector(".svd-pages ")
    .find(".svd-page")
    .withText("page1");

  const page2 = Selector(".svd-pages ")
    .find(".svd-page")
    .withText("page2");

  await t.hover(page1).hover(page2);
});

test(`checking remove page`, async t => {
  const getPagesCount = ClientFunction(
    () => document.querySelectorAll(".svd-pages .svd-page").length
  );

  await t.click(`[title="Add New Page"]`);
  await t.click(`[title="Add New Page"]`);
  assert.equal(await getPagesCount(), 3);

  const page2 = Selector(".svd-pages ")
    .find(".svd-page")
    .withText("page2");

  await t.click(page2).hover(page2);

  await t.click(
    page2
      .find(".svd-page-actions")
      .find(".svd-page-action")
      .nth(1)
  );
  assert.equal(await getPagesCount(), 2);

  const page1 = Selector(".svd-pages ")
    .find(".svd-page")
    .withText("page1");

  const page3 = Selector(".svd-pages ")
    .find(".svd-page")
    .withText("page3");

  await t.hover(page1).hover(page3);
});

test(`check that removeBtn doesn't exist whwen only one page has`, async t => {
  const getStyleAttr = ClientFunction(() =>
    document
      .querySelectorAll(
        ".svd-pages .svd-page .svd-page-actions .svd-page-action"
      )[1]
      .getAttribute("style")
  );
  assert.equal(await getStyleAttr(), "display: none;");
});

test(`checking copy page`, async t => {
  const getPagesCount = ClientFunction(
    () => document.querySelectorAll(".svd-pages .svd-page").length
  );

  assert.equal(await getPagesCount(), 1);

  const page1 = Selector(".svd-pages ")
    .find(".svd-page")
    .withText("page1");

  await t.click(page1).hover(page1);

  await t.click(
    page1
      .find(".svd-page-actions")
      .find(".svd-page-action")
      .nth(2)
  );
  assert.equal(await getPagesCount(), 2);
});

test(`checking page selector`, async t => {
  const getPagesCount = ClientFunction(
    () => document.querySelectorAll(".svd-pages .svd-page").length
  );

  assert.equal(await getPagesCount(), 1);

  const select = Selector(".svd-page-selector");
  const option = select.find("option");

  await t.click(select).click(option.withText("Add New Page"));

  assert.equal(await getPagesCount(), 2);

  await t.click(select).click(option.withText("page1"));

  //check 1 page is active
  const gearactivePage1 = Selector(".svd-pages ")
    .find(".svd-page")
    .withText("page1")
    .find(".svd-page-actions-container ")
    .find(".icon-gearactive");

  await t.hover(gearactivePage1);
});

test(`checking scroll to left/right arrows`, async t => {
  const getPagesCount = ClientFunction(
    () => document.querySelectorAll(".svd-pages .svd-page").length
  );

  for (let i = 0; i <= 28; i++) {
    await t.click(`[title="Add New Page"]`);
  }

  assert.equal(await getPagesCount(), 30);

  //check 30 page is active
  const gearactivePage30 = Selector(".svd-pages ")
    .find(".svd-page")
    .withText("page30")
    .find(".svd-page-actions-container ")
    .find(".icon-gearactive");
  await t.hover(gearactivePage30);

  await t.hover(`[title="Scroll to the Left"]`);
  await t.hover(`[title="Scroll to the Right"]`);
});
