import { url, setJSON } from "../helper";
import { ClientFunction, Selector } from "testcafe";
const title = "Custom Property Grid Editors";

fixture`${title}`.page`${url}`.beforeEach(async (t) => {
});

test("Check color editor key navigation", async (t) => {
  await t.resizeWindow(1920, 1920);
  await ClientFunction(() => {
    (<any>window).Survey.Serializer.addProperty("survey", {
      name: "fontColor1",
      category: "general",
      visibleIndex: 0
    });
    (<any>window).Survey.Serializer.addProperty("survey", {
      name: "fontColor2",
      category: "general",
      visibleIndex: 1
    });
    (<any>window).SurveyCreatorCore.PropertyGridEditorCollection.register({
      fit: function (prop) {
        return prop.name === "fontColor1" || prop.name === "fontColor2";
      },
      getJSON: function (obj, prop, options) {
        return {
          type: "color", choices: [{ text: "Contrast", value: "#673AB0" }, { text: "Plain", value: "673AB0" }, { text: "Simple", value: "#55B534" }],
        };
      }
    });
  })();
  await setJSON({});
  await t
    .click(Selector("h4[aria-label=General]"))
    .click(".spg-input-container__input")
    .pressKey("tab")
    .expect(t.eval(() => document.activeElement?.tagName)).eql("INPUT")
    .expect(t.eval(() => document.activeElement == document.querySelector("[data-name='fontColor2'] .spg-input-container__input"))).ok()
    .pressKey("shift+tab")
    .expect(t.eval(() => document.activeElement?.tagName)).eql("INPUT")
    .expect(t.eval(() => document.activeElement == document.querySelector("[data-name='fontColor1'] .spg-input-container__input"))).ok()
    .expect(Selector("div[data-name='fontColor1'] .sv-popup").visible).notOk()
    .pressKey("down")
    .wait(1000)
    .expect(Selector("div[data-name='fontColor1'] .sv-popup").visible).ok()
    .pressKey("down")
    .pressKey("down")
    .pressKey("enter")
    .expect(Selector("div[data-name='fontColor1'] .spg-input-container__input").value).eql("#55B534");
});

test("Check spinedit editor key navigation", async (t) => {
  await t.resizeWindow(1920, 1920);
  await ClientFunction(() => {
    (<any>window).Survey.Serializer.addProperty("survey", {
      name: "fontSize1",
      default: 16,
      category: "general",
      visibleIndex: 0
    }
    );
    (<any>window).Survey.Serializer.addProperty("survey", {
      name: "fontSize2",
      default: 16,
      category: "general",
      visibleIndex: 1
    }
    );
    (<any>window).SurveyCreatorCore.PropertyGridEditorCollection.register({
      fit: function (prop) {
        return prop.name === "fontSize1" || prop.name === "fontSize2";
      },
      getJSON: function (obj, prop, options) {
        return { type: "spinedit", unit: "px" };
      }
    });
  })();
  await setJSON({});
  const firstSpinInputSelector = Selector("[data-name='fontSize1'] .spg-input-container__input");
  await t
    .click(Selector("h4[aria-label=General]"))
    .click(".spg-input-container__input")
    .expect(t.eval(() => (<HTMLInputElement>document.activeElement).selectionStart)).eql(2)
    .expect(t.eval(() => (<HTMLInputElement>document.activeElement).selectionEnd)).eql(2)
    .pressKey("tab")
    .expect(t.eval(() => document.activeElement?.tagName)).eql("INPUT")
    .expect(t.eval(() => document.activeElement == document.querySelector("[data-name='fontSize2'] .spg-input-container__input"))).ok()
    .expect(t.eval(() => (<HTMLInputElement>document.activeElement).selectionStart)).eql(0)
    .expect(t.eval(() => (<HTMLInputElement>document.activeElement).selectionEnd)).eql(2)
    .pressKey("shift+tab")
    .expect(t.eval(() => document.activeElement?.tagName)).eql("INPUT")
    .expect(t.eval(() => document.activeElement == document.querySelector("[data-name='fontSize1'] .spg-input-container__input"))).ok()
    .expect(t.eval(() => (<HTMLInputElement>document.activeElement).selectionStart)).eql(0)
    .expect(t.eval(() => (<HTMLInputElement>document.activeElement).selectionEnd)).eql(2)
    .pressKey("down")
    .expect(firstSpinInputSelector.value).eql("15")
    .pressKey("up")
    .expect(firstSpinInputSelector.value).eql("16");
});
test("Check file editor key navigation", async (t) => {
  await t.resizeWindow(1920, 1920);
  await ClientFunction(() => {
    (<any>window).Survey.Serializer.addProperty("survey", {
      name: "image",
      category: "general",
      visibleIndex: 0,
      default: "some_url"
    });
    (<any>window).SurveyCreatorCore.PropertyGridEditorCollection.register({
      fit: function (prop) {
        return prop.name === "image";
      },
      getJSON: function (obj, prop, options) {
        return { type: "fileedit" };
      }
    });
  })();
  const colorInputSelector = Selector("div[data-name='image'] .spg-input-container__input");
  await setJSON({});
  await t
    .click(Selector("h4[aria-label=General]"))
    .click(colorInputSelector)
    .expect(colorInputSelector.value).eql("some_url")
    .pressKey("tab")
    .pressKey("tab")
    .expect(t.eval(() => document.activeElement?.getAttribute("aria-label"))).eql("Select File")
    .pressKey("shift+tab")
    .pressKey("enter")
    .expect(colorInputSelector.value).eql("");
});