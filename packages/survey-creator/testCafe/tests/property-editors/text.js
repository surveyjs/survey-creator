import { url, init } from '../../settings';
import { Selector, ClientFunction } from 'testcafe';
const title = `text property editor`;

fixture`Property editors: ${title}`.page`${url}`.beforeEach(async (ctx) => {
    await init();
});

test(`survey description`, async (t) => {
    const getSurveyDescription = ClientFunction(() => {
        return creator.survey.description;
    });

    const generalAccorditionTabHeader = Selector(
        ".svd-accordion-tab-header[data-title='General']"
    ).withText('General');

    const descriptionTextArea = generalAccorditionTabHeader
        .nextSibling()
        .find("[aria-label='Description']");

    await t.typeText(descriptionTextArea, 'New Description');

    await t.click(generalAccorditionTabHeader); // change focus

    const description = await getSurveyDescription();

    await t.expect(description).eql('New Description');
});
