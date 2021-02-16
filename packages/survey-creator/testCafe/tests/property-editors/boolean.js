import { url, init } from '../../settings';
import { Selector, ClientFunction } from 'testcafe';
const title = `boolean property editor`;

fixture`Property editors: ${title}`.page`${url}`.beforeEach(async (ctx) => {
    await init();
});

test(`survey show/hide title`, async (t) => {
    const getSurveyshowTitle = ClientFunction(() => {
        return creator.survey.showTitle;
    });

    const generalAccorditionTabHeader = Selector(
        ".svd-accordion-tab-header[data-title='General']"
    ).withText('General');

    const checkboxSpan = generalAccorditionTabHeader
        .nextSibling()
        .find('span')
        .withText('Show/hide title');

    let showTitle = await getSurveyshowTitle();

    await t.expect(showTitle).eql(true);

    await t.click(checkboxSpan);

    showTitle = await getSurveyshowTitle();

    await t.expect(showTitle).eql(false);
});
