import {
    url,
    getPagesLength,
    getQuestionsLength,
    setJSON,
    getJSON,
    getQuestionNameByIndex,
    getItemValueByIndex
} from "../helper";
import { Selector, ClientFunction } from "testcafe";
const title = "Drag Drop";

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
    const Rating1 = Selector(`[data-svc-drop-target-element-name="rating1"]`);
    const Rating2 = Selector(
        `[data-svc-drop-target-element-name=${questionName}]`
    );
    const Rating3 = Selector(`[data-svc-drop-target-element-name="rating3"]`);
    const DragZoneRating2 = Rating2.find(".svc-question__drag-element");

    await t.hover(Rating2, { speed: 0.5 });
    await t.hover(DragZoneRating2);
    await t.dragToElement(DragZoneRating2, Rating1, {
        offsetX: 5,
        offsetY: 5,
        destinationOffsetY: -120,
        speed: 0.5
    });

    let name = await getQuestionNameByIndex(0);
    await t.expect(name).eql(questionName);

    await t.hover(Rating2, { speed: 0.5 });
    await t.hover(DragZoneRating2, { speed: 0.5 });
    await t.dragToElement(DragZoneRating2, Rating3, {
        offsetX: 5,
        offsetY: 5,
        destinationOffsetY: 120,
        speed: 0.5
    });

    name = await getQuestionNameByIndex(2);
    await t.expect(name).eql(questionName);
});

test("Drag Drop to Panel", async (t) => {
    const json = {
        pages: [
            {
                name: "page1",
                elements: [
                    {
                        type: "panel",
                        name: "panel1"
                    }
                ]
            }
        ]
    };
    await setJSON(json);

    const Panel = Selector(`[data-svc-drop-target-element-name="panel1"]`);
    const RatingToolboxItem = Selector("[aria-label='Rating toolbox item']");

    await t.hover(RatingToolboxItem, { speed: 0.5 });
    await t.dragToElement(RatingToolboxItem, Panel, {
        offsetX: 5,
        offsetY: 5,
        destinationOffsetY: -120,
        speed: 0.5
    });

    await t.hover(RatingToolboxItem, { speed: 0.5 });
    await t.dragToElement(RatingToolboxItem, Panel, {
        offsetX: 5,
        offsetY: 5,
        destinationOffsetY: 120,
        speed: 0.5
    });

    await t.hover(RatingToolboxItem, { speed: 0.5 });
    await t.dragToElement(RatingToolboxItem, Panel, {
        offsetX: 5,
        offsetY: 5,
        speed: 0.5
    });

    const Question3 = Selector(
        `[data-svc-drop-target-element-name="question3"]`
    );

    await t.hover(RatingToolboxItem, { speed: 0.5 });
    await t.dragToElement(RatingToolboxItem, Question3, {
        offsetX: 5,
        offsetY: 5,
        destinationOffsetY: -120,
        speed: 0.5
    });

    await t.hover(RatingToolboxItem, { speed: 0.5 });
    await t.dragToElement(RatingToolboxItem, Question3, {
        offsetX: 5,
        offsetY: 5,
        destinationOffsetY: 120,
        speed: 0.5
    });

    const expectedJson = {
        pages: [
            {
                name: "page1",
                elements: [
                    { type: "rating", name: "question1" },
                    {
                        type: "panel",
                        name: "panel1",
                        elements: [
                            { type: "rating", name: "question4" },
                            { type: "rating", name: "question3" },
                            { type: "rating", name: "question5" }
                        ]
                    },
                    { type: "rating", name: "question2" }
                ]
            }
        ]
    };
    const resultJson = await getJSON();
    await t.expect(resultJson).eql(expectedJson);
});

test("Drag Drop ItemValue (choices)", async (t) => {
    const json = {
        pages: [
            {
                name: "page1",
                elements: [
                    {
                        type: "radiogroup",
                        name: "question1",
                        choices: ["item1", "item2", "item3"]
                    }
                ]
            }
        ]
    };
    await setJSON(json);

    const Question1 = Selector(`[name="question1"]`);
    const Item1 = Selector(`[data-svc-drop-target-item-value="item1"]`);
    const Item2 = Selector(`[data-svc-drop-target-item-value="item2"]`);
    const Item3 = Selector(`[data-svc-drop-target-item-value="item3"]`);
    const DragZoneItem2 = Item2.find(".svc-item-value-controls__drag");

    await t.click(Question1, { speed: 0.5 });

    await t.hover(Item1).hover(Item2).hover(Item3).hover(DragZoneItem2);

    const expectedValue = "item2";

    await t.dragToElement(DragZoneItem2, Item1, {
        offsetX: 5,
        offsetY: 5,
        destinationOffsetY: -50,
        speed: 0.5
    });
    let value = await getItemValueByIndex("question1", 0);
    await t.expect(value).eql(expectedValue);

    await t.dragToElement(DragZoneItem2, Item3, {
        offsetX: 5,
        offsetY: 5,
        destinationOffsetY: 20,
        speed: 0.5
    });
    value = await getItemValueByIndex("question1", 2);
    await t.expect(value).eql(expectedValue);
});

// test("Drag Drop Question (StartWithNewLine === false)", async (t) => {});
