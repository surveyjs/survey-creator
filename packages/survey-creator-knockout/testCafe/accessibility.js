import { ClientFunction } from 'testcafe';
import { axeCheck, createReport } from 'axe-testcafe';
 
fixture `TestCafe tests with Axe`
    .page `http://127.0.0.1:8080/testCafe/testcafe.html`;
 
const getDataFromClient = ClientFunction(() => { return {}; });


test('Automated accessibility testing', async t => {
    const { error, violations } = await axeCheck(t);
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