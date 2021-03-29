import { frameworks, url, initCreator } from "../helper";
import { ClientFunction } from "testcafe";
const assert = require("assert");
const title = `JSON tab`;

const json = {
    questions: [
        {
            type: "text",
            name: "json_tab_text",
            title: "Change me"
        }
    ]
};

const options = {
};

frameworks.forEach((framework) => {
    fixture`${framework} ${title}`.page`${url}${framework}.html`.beforeEach(
        async () => { await initCreator(framework, json, options); }
    );

    test(`Change title of text question in JSON tab`, async (t) => {
        await t.wait(5000);
    });
});