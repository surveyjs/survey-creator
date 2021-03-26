import { url, init } from '../../helper';
import { Selector, ClientFunction } from 'testcafe';
const title = `switch property editor`;

fixture`Property editors: ${title}`.page`${url}`.beforeEach(async (ctx) => {
    await init();
});

test(`boolean question isRequired`, async (t) => {
    const getIsRequired = ClientFunction(() => {
        return creator.survey.getAllQuestions()[0].isRequired;
    });

    await t.click(`[title~=Boolean]`);

    let isRequired = await getIsRequired();

    await t.expect(isRequired).eql(false);

    const generalAccorditionTabHeader = Selector(
        ".svd-accordion-tab-header[data-title='General']"
    ).withText('General');

    const switchEditor = generalAccorditionTabHeader
        .nextSibling()
        .find('span')
        .withText('Is required?');

    await t.click(switchEditor);

    isRequired = await getIsRequired();

    await t.expect(isRequired).eql(true);
});

test(`radiogroup question isRequired`, async (t) => {
    const getIsRequired = ClientFunction(() => {
        return creator.survey.getAllQuestions()[0].isRequired;
    });

    await t.click(`[title~=Radiogroup]`);

    let isRequired = await getIsRequired();

    await t.expect(isRequired).eql(false);

    const generalAccorditionTabHeader = Selector(
        ".svd-accordion-tab-header[data-title='General']"
    ).withText('General');

    const switchEditor = generalAccorditionTabHeader
        .nextSibling()
        .find('span')
        .withText('Is required?');

    await t.click(switchEditor);

    isRequired = await getIsRequired();

    await t.expect(isRequired).eql(true);
});
