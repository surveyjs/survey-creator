import { url, init } from '../../settings';
import { Selector, ClientFunction } from 'testcafe';
const title = `dropdown property editor`;

fixture`surveyjseditor: ${title}`.page`${url}`.beforeEach(async (ctx) => {
    await init();
});

test(`survey Default language`, async (t) => {
    const getSurveyLocaleValue = ClientFunction(() => {
        return creator.survey.localeValue;
    });

    const generalAccorditionTabHeader = Selector(
        ".svd-accordion-tab-header[data-title='General']"
    ).withText('General');

    const select = generalAccorditionTabHeader
        .nextSibling()
        .find("[aria-label='Default language']");

    const option = select.find('option').withText('dansk');

    await t.click(select).click(option);

    const locale = await getSurveyLocaleValue();

    await t.expect(locale).eql('da');
});
