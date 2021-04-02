import { getFrameworks, url, initCreator } from "../helper";
import { Selector } from "testcafe";
const title = "Embed tab";

const options = {
    showEmbededSurveyTab: true
};

getFrameworks(process.argv).forEach((framework) => {
    fixture`${framework} ${title}`.page`${url}${framework}.html`.beforeEach(
        async (t) => {
            await initCreator(framework, undefined, options);
            await t.maximizeWindow();
        }
    );

    test("Choose knockout framework and show as widnow", async (t) => {
        await t.click(Selector(".svc-tabbed-menu-item").withText("Embed Survey"));
        await t.click("select[aria-label='framework']")
            .click(Selector('option').filter("[value='knockout']"));
        await t.click("select[aria-label='show']")
            .click(Selector('option').filter("[value='window']"));
        await t.expect(Selector("h5.sv-description").withText("HTML").exists).notOk();
    });
});