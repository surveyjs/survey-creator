//TODO accessebility.js is duplicated here and in other frameworks because of  1) Cannot resolve the "boundTestRun" option because its value is not a
// [1]       test controller. TestCafe Error

import { ClientFunction } from 'testcafe';
import { axeCheck, createReport } from 'axe-testcafe';

fixture`TestCafe tests with Axe`
    .page`http://127.0.0.1:8080/testCafe/testcafe.html`;

const getDataFromClient = ClientFunction(() => { return {}; });


test('Automated accessibility testing', async t => {
    await t.resizeWindow(1920, 900);

    const { error, violations } = await axeCheck(t, this, {
        runOnly: {
            type: 'tag',
            values: ['wcag21a', 'wcag21aa'/*, 'wcag412'*/]
        },
        rules: {
            //https://github.com/dequelabs/axe-core/blob/develop/doc/rule-descriptions.md
            'color-contrast': {
                enabled: false
            },
            'document-title': {
                enabled: false
            },
            'landmark-one-main': {
                enabled: false
            },
            'page-has-heading-one': {
                enabled: false
            },
            'region': {
                enabled: false
            }
        }
    });
    await t.expect(violations.length === 0).ok(createReport(violations));
});

test('Check client function', async t => {
    const boundGetDataFromClient = getDataFromClient.with({ boundTestRun: t });

    const equal = await new Promise(resolve => {
        boundGetDataFromClient().then(clientData => {
            resolve(JSON.stringify(clientData) === "{}");
        });
    });

    await t.expect(equal).ok();
});