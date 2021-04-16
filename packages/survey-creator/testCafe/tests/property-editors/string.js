import { url, init } from '../../helper';
import { Selector, ClientFunction } from 'testcafe';
const title = `string property editor`;

fixture`Property editors: ${title}`.page`${url}`.beforeEach(async (ctx) => {
    await init();
});

test(`survey title property editor`, async (t) => {
    const getSurveyTitle = ClientFunction(() => {
        return creator.survey.title;
    });

    const generalAccorditionTabHeader = Selector(
        ".svd-accordion-tab-header[data-title='General']"
    ).withText('General');

    const titleInput = generalAccorditionTabHeader
        .nextSibling()
        .find("[aria-label='Title']");

    await t.typeText(titleInput, 'New Title');

    await t.click(generalAccorditionTabHeader); // change focus

    const title = await getSurveyTitle();

    await t.expect(title).eql('New Title');
});
