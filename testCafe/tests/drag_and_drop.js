import { url, init } from "../settings";
import {Selector, ClientFunction} from 'testcafe';
const assert = require('assert');
const title = `drag and drop`;

fixture `surveyjseditor: ${title}`

    .page `${url}`

    .beforeEach( async ctx => {
        await init();
    });

    test(`check d&d`, async t => {
        const getQuestionsAddedCount = ClientFunction(() =>
            document.querySelectorAll("#surveyjs .svd_question ").length);
        
        await t.dragToElement( `[title~=Radiogroup]`, `#surveyjs` );
        assert.equal(await getQuestionsAddedCount(), 1);
    });