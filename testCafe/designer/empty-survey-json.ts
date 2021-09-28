import { url } from "../helper";
import { Selector, ClientFunction } from "testcafe";
const title = "Check Empty Survey JSON";

fixture`${title}`.page`${url}`.beforeEach(async (t) => {
    await t.maximizeWindow();
});

test("Designer with empty json should show only one page", async (t) => {
    const getPagesCount = ClientFunction(() => {
        return document.querySelectorAll(".svc-page__content").length;
    });
    const pagesCount = await getPagesCount();
    await t.expect(pagesCount).eql(1);
});
