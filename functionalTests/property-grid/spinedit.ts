import { url, setJSON, getJSON } from "../helper";
import { ClientFunction, Selector } from "testcafe";
const title = "Property Grid";

fixture`${title}`.page`${url}`.beforeEach(async (t) => {
  await t.maximizeWindow();
});

test("Check spinedit editor applies value on enter", async (t) => {
  await t.resizeWindow(1920, 1920);
  await ClientFunction(() => {
    (<any>window).Survey.Serializer.addProperty("survey", {
      name: "fontSize",
      default: 16,
      category: "general",
      visibleIndex: 0
    });
    (<any>window).SurveyCreatorCore.PropertyGridEditorCollection.register({
      fit: function (prop) {
        return prop.name === "fontSize";
      },
      getJSON: function (obj, prop, options) {
        return { type: "spinedit", unit: "px" };
      }
    });
  })();
  await setJSON({});
  await t
    .click(Selector("h4[aria-label=General]"))
    .typeText(Selector(".spg-spin-editor__input"), "24", { replace: true })
    .pressKey("enter")
    .expect(ClientFunction(() => (<any>window).creator.survey.fontSize)()).eql(24)
    .typeText(Selector(".spg-spin-editor__input"), "16", { replace: true })
    .pressKey("enter")
    .expect(ClientFunction(() => (<any>window).creator.survey.fontSize)()).eql(16);
});