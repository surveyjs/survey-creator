import { url, base64image } from "../helper";
import { ClientFunction, Selector } from "testcafe";
const title = "Logo Image";

fixture`${title}`.page`${url}`.beforeEach(
  async (t) => {
    await t.maximizeWindow();
  }
);

test("Set logo in property grid and remove it in designer", async (t) => {
  const logoSection = await ClientFunction(() => {
    return window["creator"].getLocString("pe.tabs.logo");
  })();
  await t
    .click(Selector(".spg-title").withText(logoSection))
    .typeText(Selector("input[aria-label=Logo]"), base64image)
    .pressKey("tab")
    .expect(Selector("img").withAttribute("src", base64image).exists).ok()
    .click(Selector(".svc-logo-image .svc-image-item-value-controls__remove"))
    .expect(Selector("div").withText("[LOGO]").exists).ok();
});

test("Set logo in designer, change it and check it in test tab", async (t) => {
  await t
    .setFilesToUpload(Selector(".svc-logo-image input[type=file]"), "./image.jpg")
    .click(Selector(".svc-logo-image-placeholder").withText("[LOGO]"));

  const logoImage = await ClientFunction(() => {
    return "img." + window["creator"].survey.css.logoImage;
  })();
  await t
    .expect(Selector(logoImage).exists).ok()
    .setFilesToUpload(Selector(".svc-logo-image input[type=file]"), "./image.jpg");
  await t.expect(Selector(logoImage).exists).ok();

  const testTab = await ClientFunction(() => {
    return window["creator"].getLocString("ed.testSurvey");
  })();
  await t
    .click(Selector(".svc-tabbed-menu-item").withText(testTab))
    .expect(Selector("img.sv-logo__image").exists).ok();
});