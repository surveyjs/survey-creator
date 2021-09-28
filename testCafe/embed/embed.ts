import { url } from "../helper";
import { ClientFunction, Selector } from "testcafe";
const title = "Embed tab";

fixture`${title}`.page`${url}`.beforeEach(
    async (t) => {
        await t.maximizeWindow();
    }
);

test("Choose knockout framework and show as widnow", async (t) => {
    // await ClientFunction(() => { creator.showEmbeddedSurveyTab = true; })();
    // await t.click(Selector(".svc-tabbed-menu-item").withText("Embed Survey"));
    // await t.click("select[aria-label='framework']")
    //     .click(Selector('option').filter("[value='knockout']"));
    // await t.click("select[aria-label='show']")
    //     .click(Selector('option').filter("[value='window']"));
    // await t.expect(Selector("h5.sv-description").withText("HTML").exists).notOk();
});