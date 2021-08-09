import { url } from '../helper';
import { ClientFunction, Selector } from 'testcafe';
const title = 'String Editor';

const json = {
    questions: [
        {
            type: 'checkbox',
            name: 'string_editor',
            choices: [
                'item1',
                'item2',
                'item3'
            ]
        }
    ]
};

fixture`${title}`.page`${url}`.beforeEach(
    async (t) => {
        await t.maximizeWindow();
    }
);

test('Edit question title', async (t) => {
    await ClientFunction((json) => { creator.JSON = json; })(json);
    const title = json.questions[0].name;
    const svStringSelector = Selector('.sv-string-editor').withText(title);
    await t.click(svStringSelector);
    const prefix = 'prefix';
    await t.typeText(svStringSelector, prefix, { caretPos: 0 });
    await t.pressKey('enter');
    await t.expect(Selector('textarea[aria-label=Title]').value).
        eql(prefix + title, 'Question title in property grid is updated');
});