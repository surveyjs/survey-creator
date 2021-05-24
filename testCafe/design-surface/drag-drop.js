import { url, getPages, getQuestions, setJSON } from "../helper";
import { Selector } from "testcafe";
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
    await t.dragToElement(RatingToolboxItem, EmptyPage);

    await t.hover(RatingToolboxItem);
    await t.dragToElement(RatingToolboxItem, newGhostPagePage);

    const pages = await getPages();
    const questions = await getQuestions();

    await t.expect(pages.length).eql(2);
    await t.expect(questions.length).eql(2);
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

    const Rating1 = Selector("[data-svc-drop-target-element-name='rating1']");
    const Rating2 = Selector("[data-svc-drop-target-element-name='rating2']");
    const Rating3 = Selector("[data-svc-drop-target-element-name='rating3']");
    const DragZoneRating2 = Rating2.find(".svc-question__drag-element");

    await t.hover(Rating2);
    await t.hover(DragZoneRating2);

    await t.drag(DragZoneRating2, 0, -350, {
        offsetX: 7,
        offsetY: 8
    });

    // await t.debug();
});

// test("Drag Drop to Panel", async (t) => {});

// test("Drag Drop ItemValue (choices)", async (t) => {});

// test("Drag Drop Question (StartWithNewLine === false)", async (t) => {});
