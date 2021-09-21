import { url, getTabbedMenuItemByText } from '../helper';
import { ClientFunction, Selector } from 'testcafe';
const title = 'Preview tab';

fixture`${title}`.page`${url}`.beforeEach(
    async (t) => {
        await t.maximizeWindow();
    }
);

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

function getBarItemByText(text) {
    return Selector(".svc-test-tab__content-actions .sv-action-bar-item .sv-action-bar-item__title").withText(text);
}
function getListItemByText(text) {
    return Selector(".sv-popup__content .sv-list .sv-list__item").withText(text);
}

const visibleBarItems = Selector(".svc-test-tab__content-actions .sv-action").filterVisible();
test('Landscape switcher', async (t) => {
    await ClientFunction((json) => { creator.JSON = json; })(json);

    await t
        .click(getTabbedMenuItemByText("Test Survey"))
        .expect(Selector("#orientationSelector").visible).notOk()
        .expect(Selector(".svd-simulator-main").hasClass("svd-simulator-main--frame")).notOk()
        .expect(getBarItemByText("Show invisible elements").visible).ok()

        .click(getBarItemByText("Desktop"))
        .expect(getListItemByText("iPad").visible).ok()
        .click(getListItemByText("iPad"))
        .expect(getBarItemByText("Landscape").visible).ok()
        .expect(Selector(".svd-simulator-main").hasClass("svd-simulator-main--frame")).ok()
        .expect(Selector(".svd-simulator-wrapper").clientWidth).gt(900)
        .expect(Selector(".svd-simulator-wrapper").clientHeight).lt(800)
        .click(getBarItemByText("Landscape"))
        .expect(getBarItemByText("Portrait").visible).ok()
        .expect(Selector(".svd-simulator-wrapper").clientWidth).lt(800)
        .expect(Selector(".svd-simulator-wrapper").clientHeight).gt(900)        
});
test('Device selector', async (t) => {
    await ClientFunction((json) => { creator.JSON = json; })(json);

    await t
        .click(getTabbedMenuItemByText("Test Survey"))
        .expect(visibleBarItems.count).eql(2)
        .expect(getBarItemByText("Show invisible elements").visible).ok()

        .click(getBarItemByText("Desktop"))
        .expect(getListItemByText("iPad").visible).ok()

        .click(getListItemByText("iPad"))
        .click(Selector("input[value='Complete']"))
        .expect(visibleBarItems.count).eql(3, "Landscape/Portrait switch appeared")
        .expect(getBarItemByText("Test Survey Again").visible).ok()

        .click(getBarItemByText("iPad"))
        .expect(getListItemByText("Desktop").visible).ok()

        .click(getListItemByText("Desktop"))
        .click(getBarItemByText("Test Survey Again"))
        .expect(visibleBarItems.count).eql(2)
        .expect(getBarItemByText("Show invisible elements").visible).ok()

        .click(getBarItemByText("Desktop"))
        .expect(getListItemByText("iPad").visible).ok()
});