import { url } from "../helper";
import { ClientFunction, Selector } from "testcafe";
const title = "Property Grid";

const json = {
    pages: [
        {
            elements: [{ type: "text", name: "question1" }]
        },
        {
            elements: [{ type: "text", name: "question2" }]
        },
        {
            elements: [{ type: "text", name: "question2" }]
        }
    ]
};

fixture`${title}`.page`${url}`.beforeEach(async (t) => {
    await t.maximizeWindow();
});
export default async function () {
    const { error } = await t.getBrowserConsoleMessages();

    await t.expect(error[0]).notOk();
}

test("Delete second page", async (t) => {
    await ClientFunction((json) => {
        creator.JSON = json;
    })(json);
    await t.click(Selector("h4").child("span").withExactText("General"));
    await t.click(Selector("h4").child("span").withExactText("Pages"));
    const deleteButtons = Selector("div[name=pages]").find(
        "button[title=Remove]"
    );
    await t.expect(await deleteButtons.count).eql(2);
    await t.click(deleteButtons);
    await t.expect(await deleteButtons.count).eql(1);
});

test("Add calculated values", async (t) => {
    await ClientFunction((json) => {
        creator.JSON = json;
    })(json);
    await t.click(Selector("h4").child("span").withExactText("General"));
    await t.click(Selector("h4").child("span").withExactText("Logic"));
    const addButton = Selector("div[name=calculatedValues]").find(
        "button[title='Add New']"
    );
    const rows = Selector("div[name=calculatedValues]")
        .find("tbody")
        .find("tr");
    await t.expect(await rows.count).eql(0);
    await t.click(addButton);
    await t.expect(await rows.count).eql(2);
});
