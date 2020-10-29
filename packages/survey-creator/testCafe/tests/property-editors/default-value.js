import { url, init } from '../../settings';
import { Selector, ClientFunction } from 'testcafe';
const title = `default-value property editor`;

fixture`surveyjseditor: ${title}`.page`${url}`.beforeEach(async (ctx) => {
    await init();
});

test(`boolean question data`, async (t) => {
    const getDefaultValue = ClientFunction(() => {
        return creator.survey.getAllQuestions()[0].defaultValue;
    });

    await t.click(`[title~=Boolean]`);

    let defaultValue = await getDefaultValue();

    await t.expect(defaultValue).eql('indeterminate');

    const dataAccorditionTabHeader = Selector(
        ".svd-accordion-tab-header[data-title='Data']"
    ).withText('Data');

    const select = dataAccorditionTabHeader
        .nextSibling()
        .find('label')
        .withText('Default value')
        .nextSibling('.svd_property_editor_dropdown');

    const option = select.find('option').withText('true');

    await t.click(dataAccorditionTabHeader).click(select).click(option);

    defaultValue = await getDefaultValue();

    await t.expect(defaultValue).eql('true');
});
