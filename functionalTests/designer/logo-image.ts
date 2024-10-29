import { url, base64image, setJSON } from "../helper";
import { ClientFunction, Selector } from "testcafe";
const title = "Logo Image";

fixture`${title}`.page`${url}`.beforeEach(
  async (t) => {
    await t.maximizeWindow();
  }
);

test("Set logo in property grid and remove it in designer", async (t) => {
  await setJSON({ pages: [{ name: "page1" }] });
  const logoSection = await ClientFunction(() => {
    return window["creator"].getLocString("pe.tabs.logo");
  })();
  await t
    .click(Selector(".spg-title").withText(logoSection))
    .typeText(Selector("[data-name='logo']").find("input[type='text']"), base64image, { paste: true })
    .pressKey("tab")
    .expect(Selector("img").withAttribute("src", base64image).exists).ok();
});

test("Set logo in designer, change it and check it in test tab", async (t) => {
  await setJSON({ pages: [{ name: "page1" }] });
  await t
    .setFilesToUpload(Selector(".svc-logo-image input[type=file]"), "./image.jpg")
    .click(Selector(".svc-logo-image-placeholder svg"));

  const logoImage = await ClientFunction(() => {
    return "img." + window["creator"].survey.css.logoImage;
  })();
  await t
    .expect(Selector(logoImage).exists).ok()
    .setFilesToUpload(Selector(".svc-logo-image input[type=file]"), "./image.jpg");
  await t.expect(Selector(logoImage).exists).ok();

  const testTab = await ClientFunction(() => {
    return window["creator"].getLocString("tabs.preview");
  })();
  await t
    .click(Selector(".svc-tabbed-menu-item").withText(testTab))
    .expect(Selector("img.sd-logo__image").exists).ok();
});

test("Set logo in property grid and change it in designer", async (t) => {
  await setJSON({ pages: [{ name: "page1" }] });
  const logoSection = await ClientFunction(() => {
    return window["creator"].getLocString("pe.tabs.logo");
  })();
  await t
    .click(Selector(".spg-title").withText(logoSection))
    .typeText(Selector("[data-name='logo']").find("input[type='text']"), base64image, { paste: true })
    .pressKey("tab")
    .expect(Selector("img").withAttribute("src", base64image).exists).ok();
  const logoImage = await ClientFunction(() => {
    return "img." + window["creator"].survey.css.logoImage;
  })();
  await t.setFilesToUpload(Selector(".svc-logo-image input[type=file]"), "./image.jpg")
    .click(Selector(".svc-logo-image"));
  await t.expect(Selector(logoImage).exists).ok();
});