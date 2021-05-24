import {
    url,
    getPagesLength,
    getQuestionsLength,
    setJSON,
    getQuestionNameByIndex
} from "../helper";
import { Selector, ClientFunction } from "testcafe";
const title = "Drag Drop Survey Element";

fixture`${title}`.page`${url}`.beforeEach(async (t) => {
    await t.maximizeWindow();
});

test("Drag Drop Toolbox Item and Empty Page", async (t) => {
    const RatingToolboxItem = Selector("[aria-label='Rating toolbox item']");
    const EmptyPage = Selector("[data-svc-drop-target-element-name='page1']");
    const newGhostPagePage = Selector(
        "[data-svc-drop-target-element-name='newGhostPage']"
    );

    await t.hover(RatingToolboxItem);
    await t.dragToElement(RatingToolboxItem, EmptyPage, { speed: 0.5 });

    await t.hover(RatingToolboxItem);
    await t.dragToElement(RatingToolboxItem, newGhostPagePage, { speed: 0.5 });

    const pagesLength = await getPagesLength();
    const questionsLength = await getQuestionsLength();

    await t.expect(pagesLength).eql(2);
    await t.expect(questionsLength).eql(2);
});

test("Drag Drop Question", async (t) => {
    const json = {
        pages: [
            {
                name: "page1",
                elements: [
                    {
                        type: "rating",
                        name: "rating1"
                    },
                    {
                        type: "rating",
                        name: "rating2"
                    },
                    {
                        type: "rating",
                        name: "rating3"
                    }
                ]
            }
        ]
    };
    await setJSON(json);

    const questionName = "rating2";
    const Rating2 = Selector(
        `[data-svc-drop-target-element-name=${questionName}]`
    );
    const DragZoneRating2 = Rating2.find(".svc-question__drag-element");

    await t.hover(Rating2, { speed: 0.5 });
    await t.hover(DragZoneRating2);
    await t.drag(DragZoneRating2, 0, -150, {
        offsetX: 7,
        offsetY: 8
    });

    let name = await getQuestionNameByIndex(0);
    await t.expect(name).eql(questionName);

    await t.hover(Rating2, { speed: 0.5 });
    await t.hover(DragZoneRating2, { speed: 0.5 });
    await t.drag(DragZoneRating2, 0, 516, {
        offsetX: 10,
        offsetY: 5
    });

    name = await getQuestionNameByIndex(2);
    await t.expect(name).eql(questionName);
});

// test("Drag Drop to Panel", async (t) => {});

// test("Drag Drop ItemValue (choices)", async (t) => {});

// test("Drag Drop Question (StartWithNewLine === false)", async (t) => {});
