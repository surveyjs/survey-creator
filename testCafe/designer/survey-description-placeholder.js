import { url } from '../helper';
import { ClientFunction, Selector } from 'testcafe';
const title = 'Survey Description Placeholder';

fixture`${title}`.page`${url}`.beforeEach(
    async (t) => {
        await t.maximizeWindow();
    }
);

test('Edit survey description', async (t) => {
    const placeholder = await ClientFunction(() => {
        const property = Survey.Serializer.findProperty('survey', 'description');
        return creator.getLocString(property.placeholder);
    })();
    await t.click(Selector(`span[aria-placeholder='${placeholder}']`));
    const description = 'SurveyDescription';
    await t.pressKey(description.split('').join(' '));
    await t.pressKey('enter');
    await t.expect(Selector('textarea[aria-label=Description]').value).
        eql(description, 'Survey description in property grid is updated');
});