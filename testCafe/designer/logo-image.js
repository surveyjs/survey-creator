import { url, base64image } from '../helper';
import { ClientFunction, Selector } from 'testcafe';
const title = 'Logo Image';

fixture`${title}`.page`${url}`.beforeEach(
    async (t) => {
        await t.maximizeWindow();
    }
);

test('Set logo in property grid and remove it in designer', async (t) => {
    const logoSection = await ClientFunction(() => {
        return creator.getLocString('pe.tabs.logo');
    })();
    await t.click(Selector('.spg-title').withText(logoSection));
    await t.typeText(Selector('input[aria-label=Logo]'), base64image);
    await t.pressKey('enter');
    await t.expect(Selector('img').withAttribute('src', base64image).exists).ok();
    await t.click(Selector('.svc-logo-image .svc-image-item-value-controls__remove'));
    await t.expect(Selector('div').withText('[LOGO]').exists).ok();
});

test('Set logo in designer, change it and check it in test tab', async (t) => {
    await t.setFilesToUpload(Selector('.svc-logo-image input[type=file]'), './image.jpg');
    await t.click(Selector('.svc-logo-image-placeholder').withText('[LOGO]'));
    await t.expect(Selector('img.sv-logo__image').exists).ok();
    await t.setFilesToUpload(Selector('.svc-logo-image input[type=file]'), './image.jpg');
    await t.expect(Selector('img.sv-logo__image').exists).ok();
    const testTab = await ClientFunction(() => {
        return creator.getLocString('ed.testSurvey');
    })();
    await t.click(Selector('.svc-tabbed-menu-item').withText(testTab));
    await t.expect(Selector('img.sv-logo__image').exists).ok();
});