import { url } from '../helper';
import { ClientFunction, Selector } from 'testcafe';
const title = 'Page Title';

const json = {
    questions: [
        {
            type: 'text',
            name: 'page_title'
        }
    ]
};

fixture`${title}`.page`${url}`.beforeEach(
    async (t) => {
        await t.maximizeWindow();
    }
);

test('Edit page title', async (t) => {
    await ClientFunction((json) => { creator.JSON = json; })(json);
    const placeholder = await ClientFunction(() => {
        const property = Survey.Serializer.findProperty('page', 'title');
        return creator.getLocString(property.placeholder);
    })();
    await t.click(Selector(`span[aria-placeholder='${placeholder}']`));
    const title = 'PageTitle';
    await t.pressKey(title.split('').join(' '));
    await t.pressKey('enter');
    await t.expect(Selector('textarea[aria-label=Title]').value).
        eql(title, 'Page title in property grid is updated');
});