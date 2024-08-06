import { DragTypeOverMeEnum, Question, QuestionTextModel, SurveyModel } from "survey-core";
import { DragDropSurveyElements, calculateIsEdge, calculateIsSide } from "../src/survey-elements";
import { CreatorTester } from "./creator-tester";

test("calculateVerticalMiddleOfHTMLElement", () => {
  let ddHelper = new DragDropSurveyElements(null);
  const calculateVerticalMiddleOfHTMLElement = ddHelper["calculateVerticalMiddleOfHTMLElement"];
  const testElement = document.body.appendChild(document.createElement("div"));
  (<any>testElement).getBoundingClientRect = () => ({
    y: 10,
    height: 100,
  });

  let result = calculateVerticalMiddleOfHTMLElement(testElement);
  expect(result).toBe(60);
});

// test("calculateIsBottom", () => {
//   let ddHelper = new DragDropSurveyElements(null);
//   const testElement = document.body.appendChild(document.createElement("div"));
//   (<any>testElement).getBoundingClientRect = () => ({
//     y: 100,
//     height: 100,
//   });

//   let result = ddHelper["calculateIsBottom"](150, testElement);
//   expect(result).toBe(true);

//   result = ddHelper["calculateIsBottom"](100, testElement);
//   expect(result).toBe(false);
// });

test("calculateIsEdge", () => {
  DragDropSurveyElements.edgeHeight = 20;
  let ddHelper = new DragDropSurveyElements(null);
  const testElement = document.body.appendChild(document.createElement("div"));
  (<any>testElement).getBoundingClientRect = () => ({
    top: 100,
    bottom: 300
  });

  let result = calculateIsEdge(testElement, 100);
  expect(result).toBe(true);

  result = calculateIsEdge(testElement, 121);
  expect(result).toBe(false);
  result = calculateIsEdge(testElement, 150);
  expect(result).toBe(false);
  result = calculateIsEdge(testElement, 279);
  expect(result).toBe(false);

  result = calculateIsEdge(testElement, 280);
  expect(result).toBe(true);
});

test("calculateIsSide", () => {
  let ddHelper = new DragDropSurveyElements(null);
  const testElement = document.body.appendChild(document.createElement("div"));
  (<any>testElement).getBoundingClientRect = () => ({
    left: 100,
    right: 200,
  });

  let result = calculateIsSide(testElement, 100);
  expect(result).toBe(true);

  result = calculateIsSide(testElement, 150);
  expect(result).toBe(false);

  result = calculateIsSide(testElement, 200);
  expect(result).toBe(true);
});

// test("calculateIsRight", () => {
//   let ddHelper = new DragDropSurveyElements(null);
//   const testElement = document.body.appendChild(document.createElement("div"));
//   (<any>testElement).getBoundingClientRect = () => ({
//     x: 100,
//     width: 100,
//   });

//   let result = ddHelper["calculateIsRight"](150, testElement);
//   expect(result).toBe(true);

//   result = ddHelper["calculateIsRight"](100, testElement);
//   expect(result).toBe(false);
// });

// QUnit.test("calculateIsRight", function (
//   assert
// ) {
//   const survey = new SurveyModel(
//     {
//       "logoPosition": "right",
//       "pages": [
//         {
//           "name": "page1",
//           "elements": [
//             {
//               "type": "text",
//               "name": "question1"
//             },
//             {
//               "type": "text",
//               "name": "question2",
//               "startWithNewLine": false
//             },
//             {
//               "type": "text",
//               "name": "question3"
//             }
//           ]
//         }
//       ]
//     }
//   );
//   let dropTarget = survey.getQuestionByName("question2");
//   let draggedElement = survey.getQuestionByName("question3");

//   const ddHelper: any = new DragDropSurveyElements(<any>survey);

//   ddHelper.parentElement = survey.pages[0];
//   ddHelper.dropTarget = dropTarget;
//   ddHelper.draggedElement = draggedElement;

//   let isRight = ddHelper.calculateIsRight();

//   assert.equal(isRight, true);
// });

test("dropTargetDataAttributeName for questions", () => {
  let ddHelper: any = new DragDropSurveyElements(null);

  ddHelper.draggedElement = new Question(null);
  expect(ddHelper.dropTargetDataAttributeName).toBe("[data-sv-drop-target-survey-element]");
});

test("surveyelement: onDragStart and onDragEnd events", () => {
  const survey = new SurveyModel({
    elements: [
      {
        type: "text",
        name: "q1",
      },
      {
        type: "text",
        name: "q2",
      },
    ],
  });
  const question1 = survey.getQuestionByName("q1");
  const question2 = survey.getQuestionByName("q2");
  let beforeCount = 0;
  let afterCount = 0;
  let draggedElement;

  const ddHelper: any = new DragDropSurveyElements(survey);
  ddHelper.onDragStart.add((sender, options) => {
    beforeCount++;
  });
  ddHelper.onDragEnd.add((sender, options) => {
    afterCount++;
    draggedElement = options.draggedElement;
  });
  ddHelper.parentElement = survey.pages[0];
  ddHelper.dropTarget = {};
  ddHelper.draggedElement = question2;
  ddHelper.dropTarget = question1;

  ddHelper["createDraggedElementShortcut"] = ()=>{};
  ddHelper.dragInit(null, ddHelper.draggedElement, ddHelper.parentElement, document.createElement("div"));
  expect(beforeCount).toBe(1);

  ddHelper["draggedElementShortcut"] = document.body.appendChild(
    document.createElement("div")
  );
  ddHelper["allowDropHere"] = true;
  ddHelper["drop"]();
  expect(afterCount).toBe(1);
  expect(draggedElement.name).toBe("q2");

  ddHelper["draggedElementShortcut"] = document.body.appendChild(
    document.createElement("div")
  );
  ddHelper["allowDropHere"] = false;
  ddHelper["drop"]();
  expect(beforeCount).toBe(1);
  expect(afterCount).toBe(1);
});

test("onDragStart event options", () => {
  const survey = new SurveyModel({
    pages: [{
      name: "page1",
      elements: [
        {
          type: "text",
          name: "q",
        },
        {
          type: "panel",
          name: "p",
        }
      ]
    }]
  });

  const page = survey.pages[0];
  const question = survey.getQuestionByName("q");
  const panel = survey.getPanelByName("p");

  let fromElement;
  let draggedElement;
  let toElement;

  // init
  const ddHelper: any = new DragDropSurveyElements(survey);

  ddHelper.onDragEnd.add((sender, options) => {
    fromElement = options.fromElement;
    draggedElement = options.draggedElement;
    toElement = options.toElement;
  });
  // EO init

  //onDragEnd
  ddHelper.draggedElement = panel;
  ddHelper.dropTarget = question;
  ddHelper.parentElement = page;
  ddHelper["draggedElementShortcut"] = document.body.appendChild(
    document.createElement("div")
  );
  ddHelper["allowDropHere"] = true;
  ddHelper["drop"]();

  expect(fromElement.name).toBe(page.name);
  expect(draggedElement.name).toBe(panel.name);
  expect(toElement.name).toBe(question.name);
  //EO onDragEnd
});

test("allowDropHere", () => {
  const survey = new SurveyModel({
    elements: [
      {
        type: "text",
        name: "q1",
      },
      {
        type: "text",
        name: "q2",
      },
    ],
  });
  const question = survey.getQuestionByName("q2");
  let beforeCount = 0;
  let afterCount = 0;

  const ddHelper: any = new DragDropSurveyElements(survey);
  ddHelper.onDragStart.add((sender, options) => {
    beforeCount++;
  });
  ddHelper.onDragEnd.add((sender, options) => {
    afterCount++;
  });
  ddHelper.parentElement = survey.pages[0];
  ddHelper.dropTarget = {};
  ddHelper.draggedElement = question;

  ddHelper["draggedElementShortcut"] = document.body.appendChild(
    document.createElement("div")
  );
  ddHelper["allowDropHere"] = false;
  ddHelper["drop"]();
  expect(beforeCount).toBe(0);
  expect(afterCount).toBe(0);
});

test("SurveyElements: isDropTargetValid", () => {
  const survey = new SurveyModel({
    elements: [
      {
        type: "paneldynamic",
        name: "q1",
      },
      {
        type: "text",
        name: "q2",
      }
    ],
  });
  const pd = survey.getQuestionByName("q1");
  const ddHelper: any = new DragDropSurveyElements(survey);

  ddHelper.dropTarget = null;
  expect(ddHelper.isDropTargetValid(null)).toBe(false); // "dropTarget should be"

  ddHelper.draggedElement = pd;
  expect(ddHelper.isDropTargetValid(pd)).toBe(false); // "can't drop to itself"
  expect(ddHelper.isDropTargetValid(pd.template)).toBe(false); // "can't drop to itself (pd template)")

  ddHelper.draggedElement = survey.getQuestionByName("q2");
  expect(ddHelper.isDropTargetValid(pd)).toBe(true); // "dropTarget is valid"
  expect(ddHelper.isDropTargetValid(pd.template)).toBe(true); // "dropTarget is valid (pd template)"
});
test("SurveyElements: isDropTargetValid && maxNestedPanels", () => {
  const survey = new SurveyModel({
    elements: [
      {
        type: "panel",
        name: "panel1",
        elements: [
          { type: "text", name: "q2" }
        ]
      },
      {
        type: "text",
        name: "q1",
      },
      {
        type: "panel",
        name: "panel2",
      }
    ],
  });
  const pd = survey.getPanelByName("panel2");
  const ddHelper: any = new DragDropSurveyElements(survey);

  ddHelper.draggedElement = pd;
  expect(ddHelper.isDropTargetValid(survey.getPanelByName("panel1"))).toBe(true);
  expect(ddHelper.isDropTargetValid(survey.getQuestionByName("q1"))).toBe(true);
  expect(ddHelper.isDropTargetValid(survey.getQuestionByName("q2"))).toBe(true);
  expect(ddHelper.isDropTargetValid(survey.getPanelByName("panel2"), undefined, DragTypeOverMeEnum.InsideEmptyPanel)).toBe(false);
  ddHelper.onGetMaxNestedPanels = (): number => { return 0; };
  expect(ddHelper.isDropTargetValid(survey.getPanelByName("panel1"))).toBe(true);
  expect(ddHelper.isDropTargetValid(survey.getQuestionByName("q1"))).toBe(true);
  expect(ddHelper.isDropTargetValid(survey.getQuestionByName("q2"))).toBe(false);
  expect(ddHelper.isDropTargetValid(survey.getPanelByName("panel2"), undefined, DragTypeOverMeEnum.InsideEmptyPanel)).toBe(false);
});

// test("surveyelement: calcTargetRowMultiple for paneldynamic", () => {
//   const survey = new SurveyModel({
//     "logoPosition": "right",
//     "pages": [
//       {
//         "name": "page1",
//         "elements": [
//           {
//             "type": "paneldynamic",
//             "name": "paneldynamic1",
//             "templateElements": [
//               {
//                 "type": "text",
//                 "name": "text1"
//               },
//               {
//                 "type": "text",
//                 "name": "text2",
//                 "startWithNewLine": false
//               }
//             ]
//           }
//         ]
//       }
//     ]
//   });

//   const paneldynamic1 = survey.getQuestionByName("paneldynamic1");
//   const text1 = paneldynamic1.template.elements[0];
//   const text2 = paneldynamic1.template.elements[1];

//   const ddHelper: any = new DragDropSurveyElements(<any>survey);
//   ddHelper.isEdge = true;
//   ddHelper.draggedElement = text1;
//   ddHelper.dropTarget = text2;

//   expect(ddHelper["calcTargetRowMultiple"]()).toBe(true);
// });

// test("surveyelement: calcTargetRowMultiple for paneldynamic 2", () => {
//   const json = {
//     "logoPosition": "right",
//     "pages": [
//       {
//         "name": "page1",
//         "elements": [
//           {
//             "type": "paneldynamic",
//             "name": "question2",
//             "title": "paneldynamic",
//             "templateElements": [
//               {
//                 "type": "panel",
//                 "name": "panel1",
//                 "elements": [
//                   {
//                     "type": "rating",
//                     "name": "question3"
//                   },
//                   {
//                     "type": "rating",
//                     "name": "question4",
//                     "startWithNewLine": false
//                   }
//                 ],
//                 "title": "panel"
//               }
//             ]
//           },
//           {
//             "type": "rating",
//             "name": "question1"
//           }
//         ]
//       }
//     ]
//   };
//   const survey = new SurveyModel(json);

//   const paneldynamic = survey.getQuestionByName("question2");
//   const question3 = paneldynamic.template.elements[0].elements[0];
//   const question1 = survey.getQuestionByName("question1");

//   question3.__page = survey.pages[0];

//   const ddHelper: any = new DragDropSurveyElements(<any>survey);
//   ddHelper.isEdge = true;
//   ddHelper.draggedElement = question1;
//   ddHelper.dropTarget = question3;

//   ddHelper["calcTargetRowMultiple"]();

//   expect(ddHelper.dropTarget.__page).toBeDefined();
// });

test("drag drop existing to top/bottom", () => {
  const json = {
    "elements": [
      { "type": "text", "name": "q1", },
      { "type": "text", "name": "q2", },
      { "type": "text", "name": "q3", },
    ]
  };
  const survey = new SurveyModel(json);

  const q1 = survey.getQuestionByName("q1");
  const q2 = survey.getQuestionByName("q2");
  const q3 = survey.getQuestionByName("q3");

  const ddHelper: any = new DragDropSurveyElements(survey);
  ddHelper.draggedElement = q3;

  ddHelper.dragOverCore(q1, DragTypeOverMeEnum.Bottom);
  ddHelper.doDrop();
  expect(survey.toJSON()).toStrictEqual({
    "pages": [
      {
        "name": "page1",
        "elements": [
          { "name": "q1", "type": "text", },
          { "name": "q3", "type": "text", },
          { "name": "q2", "type": "text", },
        ],
      },
    ],
  });

  ddHelper.dragOverCore(q1, DragTypeOverMeEnum.Top);
  ddHelper.doDrop();
  expect(survey.toJSON()).toStrictEqual({
    "pages": [
      {
        "name": "page1",
        "elements": [
          { "name": "q3", "type": "text", },
          { "name": "q1", "type": "text", },
          { "name": "q2", "type": "text", },
        ],
      },
    ],
  });
});

test("drag drop existing to left/right", () => {
  const json = {
    "elements": [
      { "type": "text", "name": "q1", },
      { "type": "text", "name": "q2", },
      { "type": "text", "name": "q3", },
    ]
  };
  const survey = new SurveyModel(json);

  const q1 = survey.getQuestionByName("q1");
  const q2 = survey.getQuestionByName("q2");
  const q3 = survey.getQuestionByName("q3");

  const ddHelper: any = new DragDropSurveyElements(survey);
  ddHelper.draggedElement = q3;

  ddHelper.dragOverCore(q2, DragTypeOverMeEnum.Left);
  ddHelper.doDrop();
  expect(survey.toJSON()).toStrictEqual({
    "pages": [
      {
        "name": "page1",
        "elements": [
          { "name": "q1", "type": "text", },
          { "name": "q3", "type": "text", },
          { "name": "q2", "type": "text", "startWithNewLine": false },
        ],
      },
    ],
  });

  ddHelper.dragOverCore(q1, DragTypeOverMeEnum.Right);
  ddHelper.doDrop();
  expect(survey.toJSON()).toStrictEqual({
    "pages": [
      {
        "name": "page1",
        "elements": [
          { "name": "q1", "type": "text", },
          { "name": "q3", "type": "text", "startWithNewLine": false },
          { "name": "q2", "type": "text", },
        ],
      },
    ],
  });
});

test("drag drop existing from single row to outside top/bottom - break into several rows", () => {
  const json = {
    "elements": [
      { "type": "text", "name": "q1", },
      { "type": "text", "name": "q2", "startWithNewLine": false },
      { "type": "text", "name": "q3", "startWithNewLine": false },
    ]
  };
  const survey = new SurveyModel(json);

  const q1 = survey.getQuestionByName("q1");
  const q2 = survey.getQuestionByName("q2");
  const q3 = survey.getQuestionByName("q3");

  const ddHelper: any = new DragDropSurveyElements(survey);
  ddHelper.draggedElement = q2;

  ddHelper.dragOverCore(q1, DragTypeOverMeEnum.Top);
  ddHelper.doDrop();
  expect(survey.toJSON()).toStrictEqual({
    "pages": [
      {
        "name": "page1",
        "elements": [
          { "name": "q2", "type": "text", },
          { "name": "q1", "type": "text", },
          { "name": "q3", "type": "text", "startWithNewLine": false },
        ],
      },
    ],
  });

  ddHelper.draggedElement = q1;
  ddHelper.dragOverCore(q3, DragTypeOverMeEnum.Bottom);
  ddHelper.doDrop();
  expect(survey.toJSON()).toStrictEqual({
    "pages": [
      {
        "name": "page1",
        "elements": [
          { "name": "q2", "type": "text", },
          { "name": "q3", "type": "text", },
          { "name": "q1", "type": "text", },
        ],
      },
    ],
  });
});

test("drag drop existing from single row to outside top", () => {
  const json = {
    "elements": [
      { "type": "text", "name": "q1", },
      { "type": "text", "name": "q2", "startWithNewLine": false },
      { "type": "text", "name": "q3", "startWithNewLine": false },
    ]
  };
  let survey = new SurveyModel(json);
  let q1 = survey.getQuestionByName("q1");
  let q2 = survey.getQuestionByName("q2");
  let q3 = survey.getQuestionByName("q3");

  let ddHelper: any = new DragDropSurveyElements(survey);
  ddHelper.draggedElement = q1;
  ddHelper.dragOverCore(q2, DragTypeOverMeEnum.Top);
  ddHelper.doDrop();
  expect(survey.toJSON()).toStrictEqual({
    "pages": [
      {
        "name": "page1",
        "elements": [
          { "name": "q1", "type": "text", },
          { "name": "q2", "type": "text", },
          { "name": "q3", "type": "text", "startWithNewLine": false },
        ],
      },
    ],
  });

  survey = new SurveyModel(json);
  q1 = survey.getQuestionByName("q1");
  q2 = survey.getQuestionByName("q2");
  q3 = survey.getQuestionByName("q3");

  ddHelper = new DragDropSurveyElements(survey);
  ddHelper.draggedElement = q2;
  ddHelper.dragOverCore(q1, DragTypeOverMeEnum.Top);
  ddHelper.doDrop();
  expect(survey.toJSON()).toStrictEqual({
    "pages": [
      {
        "name": "page1",
        "elements": [
          { "name": "q2", "type": "text", },
          { "name": "q1", "type": "text", },
          { "name": "q3", "type": "text", "startWithNewLine": false },
        ],
      },
    ],
  });

  survey = new SurveyModel(json);
  q1 = survey.getQuestionByName("q1");
  q2 = survey.getQuestionByName("q2");
  q3 = survey.getQuestionByName("q3");

  ddHelper = new DragDropSurveyElements(survey);
  ddHelper.draggedElement = q3;
  ddHelper.dragOverCore(q1, DragTypeOverMeEnum.Top);
  ddHelper.doDrop();
  expect(survey.toJSON()).toStrictEqual({
    "pages": [
      {
        "name": "page1",
        "elements": [
          { "name": "q3", "type": "text", },
          { "name": "q1", "type": "text", },
          { "name": "q2", "type": "text", "startWithNewLine": false },
        ],
      },
    ],
  });
});

test("drag drop existing from single row to outside bottom", () => {
  const json = {
    "elements": [
      { "type": "text", "name": "q1", },
      { "type": "text", "name": "q2", "startWithNewLine": false },
      { "type": "text", "name": "q3", "startWithNewLine": false },
    ]
  };
  let survey = new SurveyModel(json);
  let q1 = survey.getQuestionByName("q1");
  let q2 = survey.getQuestionByName("q2");
  let q3 = survey.getQuestionByName("q3");

  let ddHelper: any = new DragDropSurveyElements(survey);
  ddHelper.draggedElement = q1;
  ddHelper.dragOverCore(q3, DragTypeOverMeEnum.Bottom);
  ddHelper.doDrop();
  expect(survey.toJSON()).toStrictEqual({
    "pages": [
      {
        "name": "page1",
        "elements": [
          { "name": "q2", "type": "text", },
          { "name": "q3", "type": "text", "startWithNewLine": false },
          { "name": "q1", "type": "text", },
        ],
      },
    ],
  });

  survey = new SurveyModel(json);
  q1 = survey.getQuestionByName("q1");
  q2 = survey.getQuestionByName("q2");
  q3 = survey.getQuestionByName("q3");

  ddHelper = new DragDropSurveyElements(survey);
  ddHelper.draggedElement = q2;
  ddHelper.dragOverCore(q3, DragTypeOverMeEnum.Bottom);
  ddHelper.doDrop();
  expect(survey.toJSON()).toStrictEqual({
    "pages": [
      {
        "name": "page1",
        "elements": [
          { "name": "q1", "type": "text", },
          { "name": "q3", "type": "text", "startWithNewLine": false },
          { "name": "q2", "type": "text", },
        ],
      },
    ],
  });

  survey = new SurveyModel(json);
  q1 = survey.getQuestionByName("q1");
  q2 = survey.getQuestionByName("q2");
  q3 = survey.getQuestionByName("q3");

  ddHelper = new DragDropSurveyElements(survey);
  ddHelper.draggedElement = q3;
  ddHelper.dragOverCore(q2, DragTypeOverMeEnum.Bottom);
  ddHelper.doDrop();
  expect(survey.toJSON()).toStrictEqual({
    "pages": [
      {
        "name": "page1",
        "elements": [
          { "name": "q1", "type": "text", },
          { "name": "q2", "type": "text", "startWithNewLine": false },
          { "name": "q3", "type": "text", },
        ],
      },
    ],
  });
});

test("drag drop first to left of last item", () => {
  const json = {
    "elements": [
      { "type": "text", "name": "q1", },
      { "type": "text", "name": "q2", "startWithNewLine": false },
      { "type": "text", "name": "q3", "startWithNewLine": false },
    ]
  };
  const survey = new SurveyModel(json);

  const q1 = survey.getQuestionByName("q1");
  const q2 = survey.getQuestionByName("q2");
  const q3 = survey.getQuestionByName("q3");

  const ddHelper: any = new DragDropSurveyElements(survey);
  ddHelper.draggedElement = q1;

  ddHelper.dragOverCore(q3, DragTypeOverMeEnum.Left);
  ddHelper.doDrop();
  expect(survey.toJSON()).toStrictEqual({
    "pages": [
      {
        "name": "page1",
        "elements": [
          { "name": "q2", "type": "text", },
          { "name": "q1", "type": "text", "startWithNewLine": false },
          { "name": "q3", "type": "text", "startWithNewLine": false },
        ],
      },
    ],
  });
});

test("drag drop first to right of last item", () => {
  const json = {
    "elements": [
      { "type": "text", "name": "q1", },
      { "type": "text", "name": "q2", "startWithNewLine": false },
      { "type": "text", "name": "q3", "startWithNewLine": false },
    ]
  };
  const survey = new SurveyModel(json);

  const q1 = survey.getQuestionByName("q1");
  const q2 = survey.getQuestionByName("q2");
  const q3 = survey.getQuestionByName("q3");

  const ddHelper: any = new DragDropSurveyElements(survey);
  ddHelper.draggedElement = q1;

  ddHelper.dragOverCore(q3, DragTypeOverMeEnum.Right);
  ddHelper.doDrop();
  expect(survey.toJSON()).toStrictEqual({
    "pages": [
      {
        "name": "page1",
        "elements": [
          { "name": "q2", "type": "text", },
          { "name": "q3", "type": "text", "startWithNewLine": false },
          { "name": "q1", "type": "text", "startWithNewLine": false },
        ],
      },
    ],
  });
});

test("drag drop to panel vertical", () => {
  const json = {
    "elements": [
      { "type": "panel", "name": "p1", },
    ]
  };
  const survey = new SurveyModel(json);

  const p1 = survey.getPanelByName("p1");
  const q1 = new QuestionTextModel("q1");
  const q2 = new QuestionTextModel("q2");
  const q3 = new QuestionTextModel("q3");

  const ddHelper: any = new DragDropSurveyElements(survey);
  ddHelper.draggedElement = q1;

  ddHelper.dragOverCore(p1, DragTypeOverMeEnum.InsideEmptyPanel);
  ddHelper.doDrop();

  expect(survey.toJSON()).toStrictEqual({
    pages: [{
      name: "page1",
      "elements": [
        {
          "type": "panel", "name": "p1", elements: [{
            "name": "q1",
            "type": "text",
          }]
        }
      ],
    }]
  });

  ddHelper.draggedElement = q2;
  ddHelper.dragOverCore(survey.getQuestionByName("q1"), DragTypeOverMeEnum.Top);
  ddHelper.doDrop();

  expect(survey.toJSON()).toStrictEqual({
    pages: [{
      name: "page1",
      "elements": [
        {
          "type": "panel", "name": "p1", elements: [
            {
              "name": "q2",
              "type": "text",
            },
            {
              "name": "q1",
              "type": "text",
            }
          ]
        }
      ],
    }]
  });

  ddHelper.draggedElement = q3;
  ddHelper.dragOverCore(survey.getQuestionByName("q1"), DragTypeOverMeEnum.Bottom);
  ddHelper.doDrop();

  expect(survey.toJSON()).toStrictEqual({
    pages: [{
      name: "page1",
      "elements": [
        {
          "type": "panel", "name": "p1", elements: [
            {
              "name": "q2",
              "type": "text",
            },
            {
              "name": "q1",
              "type": "text",
            },
            {
              "name": "q3",
              "type": "text",
            }
          ]
        }
      ],
    }]
  });
});

test("drag drop to panel horizontal", () => {
  const json = {
    "elements": [
      { "type": "panel", "name": "p1", },
    ]
  };
  const survey = new SurveyModel(json);

  const p1 = survey.getPanelByName("p1");
  const q1 = new QuestionTextModel("q1");
  const q2 = new QuestionTextModel("q2");
  const q3 = new QuestionTextModel("q3");

  const ddHelper: any = new DragDropSurveyElements(survey);
  ddHelper.draggedElement = q1;

  ddHelper.dragOverCore(p1, DragTypeOverMeEnum.InsideEmptyPanel);
  ddHelper.doDrop();

  expect(survey.toJSON()).toStrictEqual({
    pages: [{
      name: "page1",
      "elements": [
        {
          "type": "panel", "name": "p1", elements: [{
            "name": "q1",
            "type": "text",
          }]
        }
      ],
    }]
  });

  ddHelper.draggedElement = q2;
  ddHelper.dragOverCore(survey.getQuestionByName("q1"), DragTypeOverMeEnum.Left);
  ddHelper.doDrop();

  expect(survey.toJSON()).toStrictEqual({
    pages: [{
      name: "page1",
      "elements": [
        {
          "type": "panel", "name": "p1", elements: [
            {
              "name": "q2",
              "type": "text",
            },
            {
              "name": "q1",
              "type": "text",
              "startWithNewLine": false
            }
          ]
        }
      ],
    }]
  });

  ddHelper.draggedElement = q3;
  ddHelper.dragOverCore(survey.getQuestionByName("q1"), DragTypeOverMeEnum.Right);
  ddHelper.doDrop();

  expect(survey.toJSON()).toStrictEqual({
    pages: [{
      name: "page1",
      "elements": [
        {
          "type": "panel", "name": "p1", elements: [
            {
              "name": "q2",
              "type": "text",
            },
            {
              "name": "q1",
              "type": "text",
              "startWithNewLine": false
            },
            {
              "name": "q3",
              "type": "text",
              "startWithNewLine": false
            }
          ]
        }
      ],
    }]
  });
});

test("Undo/redo question dragged from last page", (): any => {
  const creator = new CreatorTester();
  creator.JSON = {
    "logoPosition": "right",
    "pages": [
      {
        "name": "page1",
        "elements": [
          {
            "type": "text",
            "name": "question1"
          }
        ]
      },
      {
        "name": "page2",
        "elements": [
          {
            "type": "text",
            "name": "question2"
          }
        ]
      }
    ]
  };
  const ddHelper: any = creator.dragDropSurveyElements;

  expect(creator.survey.getAllQuestions()).toHaveLength(2);
  expect(creator.survey.pages).toHaveLength(2);
  expect(creator.undoRedoManager.canUndo()).toBeFalsy();
  expect(creator.undoRedoManager.canRedo()).toBeFalsy();

  ddHelper.draggedElement = creator.survey.getQuestionByName("question2");
  ddHelper.dragOverCore(creator.survey.getQuestionByName("question1"), DragTypeOverMeEnum.Bottom);
  creator.startUndoRedoTransaction("drag/drop");
  ddHelper.doDrop();
  creator.stopUndoRedoTransaction();

  expect(creator.survey.getAllQuestions()).toHaveLength(2);
  expect(creator.survey.pages).toHaveLength(1);
  expect(creator.undoRedoManager.canUndo()).toBeTruthy();
  expect(creator.undoRedoManager.canRedo()).toBeFalsy();

  creator.undo();
  expect(creator.survey.getAllQuestions()).toHaveLength(2);
  expect(creator.survey.pages).toHaveLength(2);
  expect(creator.undoRedoManager.canUndo()).toBeFalsy();
  expect(creator.undoRedoManager.canRedo()).toBeTruthy();
});
test("drag drop panel before another panel in left, Bug #4574", () => {
  const json = {
    "elements": [
      {
        "type": "panel",
        "name": "panel1",
        "elements": [
          {
            "type": "text",
            "name": "question1"
          }
        ]
      },
      {
        "type": "panel",
        "name": "panel2",
        "elements": [
          {
            "type": "text",
            "name": "question2"
          }
        ]
      }
    ]
  };
  const survey = new SurveyModel(json);
  const p1 = survey.getPanelByName("panel1");
  const p2 = survey.getPanelByName("panel2");

  const ddHelper: any = new DragDropSurveyElements(survey);
  ddHelper.draggedElement = p2;

  ddHelper.dragOverCore(p1, DragTypeOverMeEnum.Left);
  ddHelper.doDrop();
  expect(survey.toJSON()).toStrictEqual({
    "pages": [
      {
        "name": "page1",
        "elements": [
          {
            "type": "panel",
            "name": "panel2",
            "elements": [
              {
                "type": "text",
                "name": "question2"
              }
            ]
          },
          {
            "type": "panel",
            "name": "panel1",
            "startWithNewLine": false,
            "elements": [
              {
                "type": "text",
                "name": "question1"
              }
            ]
          }
        ]
      }
    ]
  });
});
test("Support onDragDropAllow, Bug#4572", (): any => {
  const creator = new CreatorTester();
  creator.JSON = {
    "logoPosition": "right",
    "pages": [
      {
        "name": "page1",
        "elements": [
          {
            "type": "text",
            "name": "question1"
          }
        ]
      },
      {
        "name": "page2",
        "elements": [
          {
            "type": "text",
            "name": "question2"
          }
        ]
      }
    ]
  };
  let counter = 0;
  let surveyQuestionCount = 0;
  let targetName = "";
  let sourceName = "";
  let parentName = "";
  creator.onDragDropAllow.add((sender, options) => {
    counter++;
    surveyQuestionCount = options.survey.getAllQuestions().length;
    targetName = options.target.name;
    sourceName = options.source.name;
    parentName = options.parent.name;
    options.allow = !!options.insertAfter;
  });
  const ddHelper: any = creator.dragDropSurveyElements;
  const q1 = creator.survey.getQuestionByName("question1");
  const q2 = creator.survey.getQuestionByName("question2");
  ddHelper.draggedElement = q2;
  ddHelper["allowDropHere"] = true;
  ddHelper.dragOverCore(q1, DragTypeOverMeEnum.Top);
  expect(counter).toBe(1);
  expect(targetName).toBe("question1");
  expect(sourceName).toBe("question2");
  expect(parentName).toBe("page1");
  expect(ddHelper["allowDropHere"]).toBeFalsy();
  ddHelper["allowDropHere"] = true;
  ddHelper.dragOverCore(q1, DragTypeOverMeEnum.Bottom);
  expect(counter).toBe(2);
  expect(ddHelper["allowDropHere"]).toBeTruthy();
});
test("Support onDragDropAllow&allowDropNextToAnother, #5621", (): any => {
  const creator = new CreatorTester();
  creator.JSON = {
    "logoPosition": "right",
    "pages": [
      {
        "name": "page1",
        "elements": [
          {
            "type": "text",
            "name": "question1"
          }
        ]
      },
      {
        "name": "page2",
        "elements": [
          {
            "type": "text",
            "name": "question2"
          }
        ]
      }
    ]
  };
  creator.onDragDropAllow.add((sender, options) => {
    (<any>options).allowDropNextToAnother = false;
  });
  const ddHelper: any = creator.dragDropSurveyElements;
  const q1 = creator.survey.getQuestionByName("question1");
  const q2 = creator.survey.getQuestionByName("question2");
  ddHelper.draggedElement = q2;
  ddHelper.dragOverCore(q1, DragTypeOverMeEnum.Left);
  expect(ddHelper.dragOverLocation).toBe(DragTypeOverMeEnum.Top);
  ddHelper.dragOverCore(q1, DragTypeOverMeEnum.Right);
  expect(ddHelper.dragOverLocation).toBe(DragTypeOverMeEnum.Bottom);
});

test("drag drop one empty panel to other empty panel - https://github.com/surveyjs/survey-creator/issues/4390", () => {
  const json = {
    "logoPosition": "right",
    "pages": [
      {
        "name": "page1",
        "elements": [
          {
            "type": "panel",
            "name": "panel1"
          },
          {
            "type": "panel",
            "name": "panel2"
          }
        ]
      }
    ]
  };
  const survey = new SurveyModel(json);
  const p1 = survey.getPanelByName("panel1");
  const p2 = survey.getPanelByName("panel2");

  const ddHelper: any = new DragDropSurveyElements(survey);
  ddHelper.draggedElement = p2;

  ddHelper.dragOverCore(p1, DragTypeOverMeEnum.InsideEmptyPanel);
  ddHelper.doDrop();

  expect(survey.toJSON()).toStrictEqual({
    "logoPosition": "right",
    "pages": [
      {
        "name": "page1",
        "elements": [
          {
            "type": "panel",
            "name": "panel1",
            "elements": [
              {
                "type": "panel",
                "name": "panel2"
              }
            ]
          }
        ]
      }
    ]
  });
});
test("Do not allow to drag inside panel", () => {
  const json = {
    "elements": [
      {
        "type": "panel",
        "name": "panel1",
        "elements": [
          {
            "type": "panel",
            "name": "panel2",
            "elements": [
              { "type": "text", "name": "q2" }
            ]
          },
          { "type": "text", "name": "q1" }
        ]
      },
      { "type": "text", "name": "q3" }
    ]
  };
  const survey = new SurveyModel(json);
  const p1 = survey.getPanelByName("panel1");
  const p2 = survey.getPanelByName("panel2");
  const q1 = survey.getQuestionByName("q1");
  const q2 = survey.getQuestionByName("q2");

  const ddHelper: any = new DragDropSurveyElements(survey);
  ddHelper.draggedElement = p1;

  const checkAllowDragOverByType = (element: any, en: DragTypeOverMeEnum): void => {
    ddHelper.dragOverCore(element, en);
    expect(ddHelper["allowDropHere"]).toBeFalsy();
  };
  const checkAllowDragOver = (element: any): void => {
    checkAllowDragOverByType(element, DragTypeOverMeEnum.Top);
    checkAllowDragOverByType(element, DragTypeOverMeEnum.Bottom);
    checkAllowDragOverByType(element, DragTypeOverMeEnum.Left);
    checkAllowDragOverByType(element, DragTypeOverMeEnum.Right);
  };
  ddHelper["allowDropHere"] = true;
  checkAllowDragOver(p2);
  checkAllowDragOver(q1);
  checkAllowDragOver(q2);
});

test("onQuestionAdded doesn't fire when drag drop existing element", () => {
  const json = {
    "elements": [
      { "type": "text", "name": "q1", },
      { "type": "text", "name": "q2", },
      { "type": "text", "name": "q3", },
    ]
  };
  const survey = new SurveyModel(json);
  let log = "";
  survey.onQuestionAdded.add((s, o) => {
    log += "->added:" + o.question.name;
  });

  const q1 = survey.getQuestionByName("q1");
  const q3 = survey.getQuestionByName("q3");

  const ddHelper: any = new DragDropSurveyElements(survey);
  ddHelper.draggedElement = q3;

  ddHelper.dragOverCore(q1, DragTypeOverMeEnum.Bottom);
  ddHelper.doDrop();
  expect(survey.toJSON()).toStrictEqual({
    "pages": [
      {
        "name": "page1",
        "elements": [
          { "name": "q1", "type": "text", },
          { "name": "q3", "type": "text", },
          { "name": "q2", "type": "text", },
        ],
      },
    ],
  });
  expect(log).toBe("");
});
test("onQuestionAdded fires when drag drop new element", () => {
  const json = {
    "elements": [
      { "type": "text", "name": "q1", },
      { "type": "text", "name": "q2", },
      { "type": "text", "name": "q3", },
    ]
  };
  const survey = new SurveyModel(json);
  let log = "";
  survey.onQuestionAdded.add((s, o) => {
    log += "->added:" + o.question.name;
  });

  const q1 = survey.getQuestionByName("q1");
  const q4 = new QuestionTextModel("q4");

  const ddHelper: any = new DragDropSurveyElements(survey);
  ddHelper.draggedElement = q4;

  ddHelper.dragOverCore(q1, DragTypeOverMeEnum.Bottom);
  ddHelper.doDrop();
  expect(survey.toJSON()).toStrictEqual({
    "pages": [
      {
        "name": "page1",
        "elements": [
          { "name": "q1", "type": "text", },
          { "name": "q4", "type": "text", },
          { "name": "q2", "type": "text", },
          { "name": "q3", "type": "text", },
        ],
      },
    ],
  });
  expect(log).toBe("->added:q4");
});