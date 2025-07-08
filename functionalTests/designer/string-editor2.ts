import { RatingToolboxItem, explicitErrorHandler, handleShiftEnter, setJSON, url } from "../helper";
import { ClientFunction, Selector } from "testcafe";
const title = "String Editor 2";

fixture`${title}`.page`${url}`.beforeEach(
  async (t) => {
    await t.maximizeWindow();
  }
);

test("Check item string editor focus out on near click", async (t) => {
  let json = {
    "elements": [
      {
        "type": "checkbox",
        "name": "question1",
        "choices": ["Item 1"]
      }
    ]
  };

  await setJSON(json);

  const svItemSelector = Selector(".sv-string-editor").withText("Item 1");

  await t
    .click(svItemSelector)
    .expect(svItemSelector.focused).ok()
    .click(Selector(".svc-item-value-wrapper").withText("Item 1"), { offsetX: 200, offsetY: 50 })
    .expect(svItemSelector.focused).notOk();
});

test("Check markdown events", async (t) => {
  await ClientFunction(() => {
    window["creator"].onSurveyInstanceCreated.add((sender, options) => {
      options.survey.onTextMarkdown.add((survey, options) => options.html = options.text.replaceAll("*", "$"));
    });
  })();

  await setJSON({
    "description": "*abc*",
    "elements": [
      {
        "type": "text",
        "name": "question1"
      }
    ]
  });

  await t
    .click(Selector(".sv-string-editor").withText("$abc$"))
    .expect(Selector(".sv-string-editor").withText("*abc*").visible).ok()
    .click(Selector(".sv-string-editor").withText("*abc*"))
    .typeText(Selector(".sv-string-editor").withText("*abc*"), "d", { caretPos: 0 })
    .pressKey("enter")
    .expect(Selector(".sv-string-editor").withText("d$abc$").visible).ok();
});

test("Check markdown shift-enter", async (t) => {
  await ClientFunction(() => {
    window["creator"].onSurveyInstanceCreated.add((sender, options) => {
      options.survey.onTextMarkdown.add((survey, options) => options.html = options.text);
      window["creator"].onHtmlToMarkdown.add((survey, options) => options.text = options.html);
    });
  })();

  await setJSON({
    "description": "abc",
    "elements": [
      {
        "type": "text",
        "name": "question1"
      }
    ]
  });

  await t
    .click(Selector(".sv-string-editor").withText("abc"))
    .typeText(Selector(".sv-string-editor").withText("abc"), "d", { caretPos: 1 })
    .pressKey("shift+enter")
    .expect(Selector(".sd-title .sd-description .sv-string-editor").focused).ok()
    .pressKey("enter")
    .expect(Selector(".sd-title .sd-description .sv-string-editor").focused).notOk();
});

test("Check markdown back events", async (t) => {
  await ClientFunction(() => {
    window["creator"].onSurveyInstanceCreated.add((sender, options) => {
      options.survey.onTextMarkdown.add((survey, options) => options.html = options.text.replaceAll("*", "$"));
    });
    window["creator"].onHtmlToMarkdown.add((survey, options) => options.text = options.html.replaceAll("$", "*"));
  })();
  var getValue = ClientFunction(() => {
    return window["creator"].survey.description;
  });

  await setJSON({
    "description": "*abc*",
    "elements": [
      {
        "type": "text",
        "name": "question1"
      }
    ]
  });

  await t
    .click(Selector(".sv-string-editor").withText("$abc$"))
    .expect(Selector(".sv-string-editor").withText("$abc$").visible).ok()
    .click(Selector(".sv-string-editor").withText("$abc$"))
    .typeText(Selector(".sv-string-editor").withText("$abc$"), "d", { caretPos: 0 })
    .pressKey("enter")
    .expect(Selector(".sv-string-editor").withText("d$abc$").visible).ok()
    .expect(getValue()).eql("d*abc*");
});

test("Check markdown events with HTML", async (t) => {
  await ClientFunction(() => {
    window["creator"].onSurveyInstanceCreated.add((sender, options) => {
      options.survey.onTextMarkdown.add((survey, options) => options.html = options.text.replaceAll("*", "$"));
    });
  })();

  var getValue = ClientFunction(() => {
    return window["creator"].survey.description;
  });

  await setJSON({
    "description": "*a<b>b</b>c*",
    "elements": [
      {
        "type": "text",
        "name": "question1"
      }
    ]
  });

  await t
    .expect(getValue()).eql("*a<b>b</b>c*")
    .click(Selector(".sv-string-editor").withText("$abc$"))
    .expect(Selector(".sv-string-editor").withText("*a<b>b</b>c*").visible).ok()
    .click(Selector(".sv-string-editor").withText("*a<b>b</b>c*"))
    .wait(100)
    .pressKey("esc")
    .wait(100)
    .expect(Selector(".sv-string-editor").withText("$abc$").visible).ok()
    .expect(getValue()).eql("*a<b>b</b>c*")
    .click(Selector(".sv-string-editor").withText("$abc$"))
    .expect(Selector(".sv-string-editor").withText("*a<b>b</b>c*").visible).ok()
    .click(Selector(".sv-string-editor").withText("*a<b>b</b>c*"))
    .typeText(Selector(".sv-string-editor").withText("*a<b>b</b>c*"), "d", { caretPos: 0 })
    .pressKey("enter")
    .expect(Selector(".sv-string-editor").withText("d$abc$").visible).ok()
    .expect(getValue()).eql("d*a<b>b</b>c*");
});

test("Check markdown events with question title", async (t) => {
  await ClientFunction(() => {
    window["creator"].onSurveyInstanceCreated.add((sender, options) => {
      options.survey.onTextMarkdown.add((survey, options) => options.html = options.text.replaceAll("*", "$"));
    });
  })();

  await setJSON({
    "elements": [
      {
        "type": "text",
        "name": "question1"
      }
    ]
  });

  await t
    .click(Selector(".sv-string-editor").withText("question1"))
    .expect(Selector(".sv-string-editor").withText("question1").focused).ok();
});

test("Test selection", async (t) => {
  let json = {
    "elements": [
      {
        "type": "text",
        "name": "question1"
      }
    ]
  };

  await setJSON(json);

  const svItemSelector = Selector(".sv-string-editor").withText("question1");

  await t
    .click(svItemSelector)
    .expect(ClientFunction(() => {
      return window.getSelection().toString();
    })()).eql("question1")
    .wait(300)
    .click(svItemSelector)
    .expect(ClientFunction(() => {
      return window.getSelection().toString();
    })()).eql("");
});

test("Test styles", async (t) => {
  let json = {
    "elements": [
      {
        "type": "text",
        "name": "question1"
      }
    ]
  };

  await setJSON(json);

  const svItemSelector = Selector(".sv-string-editor").withText("question1");

  await t
    .expect(await svItemSelector.getStyleProperty("user-select")).eql("text");
});

test("Test selection after tab", async (t) => {
  let json = {
    "logoPosition": "right",
    "pages": [
      {
        "name": "page1",
        "elements": [
          {
            "type": "text",
            "name": "question1"
          }
        ],
        "title": "page_title",
        "description": "page_desc"
      }
    ]
  };

  await setJSON(json);

  const svItemSelector = Selector(".sv-string-editor").withText("page_title");

  await t
    .click(svItemSelector)
    .expect(ClientFunction(() => {
      return window.getSelection().toString();
    })()).eql("page_title")
    .wait(300)
    .pressKey("tab")
    .expect(ClientFunction(() => {
      return window.getSelection().toString();
    })()).eql("page_desc");
});

test("Test string change event", async (t) => {
  let json = {
    "logoPosition": "right",
    "pages": [
      {
        "name": "page1",
        "elements": [
          {
            "type": "matrix",
            "name": "question1",
            "columns": [
              "Column 1",
              "Column 2",
              "Column 3"
            ],
            "rows": [
              "Row 1",
              "Row 2"
            ]
          }
        ]
      }
    ]
  };

  await setJSON(json);

  const svItemSelector = Selector(".sv-string-editor").withText("page_title");
  await ClientFunction(() => {
    window["creator"].survey.getAllQuestions()[0].columns[0].text = "newTitle";
  })();
});

test("Focus on new question", async (t) => {
  await t.click(Selector(".svc-toolbox__tool").withText("Radio Button Group"));
  const svStringSelector = Selector(".sv-string-editor").withText("question1");
  await t.expect(svStringSelector.focused).ok();
});

test("Focus on new question dragged", async (t) => {
  await setJSON({ pages: [{ name: "page1" }] });
  const EmptyPage = Selector("[data-sv-drop-target-survey-element='page1']");

  await t
    .hover(RatingToolboxItem)
    .dragToElement(RatingToolboxItem, EmptyPage, { speed: 0.5 });
  const svStringSelector = Selector(".sv-string-editor").withText("question1");
  await t.expect(svStringSelector.focused).ok();
});

test("Do not focus on existing question dragged", async (t) => {
  await setJSON({
    "logoPosition": "right",
    "pages": [
      {
        "name": "page1",
        "elements": [
          {
            "type": "text",
            "name": "question1"
          },
          {
            "type": "text",
            "name": "question2"
          },
          {
            "type": "text",
            "name": "question3"
          }
        ]
      }
    ]
  });

  const questionName = "question1";
  const q1 = Selector("[data-sv-drop-target-survey-element=\"question1\"]");
  const q3 = Selector("[data-sv-drop-target-survey-element=\"question3\"]");
  const dragZone = q1.find(".svc-question__drag-element");

  await t
    .hover(q1, { speed: 0.5, offsetX: 5, offsetY: 5 })
    .hover(dragZone, { speed: 0.5 })
    .dragToElement(dragZone, q3, {
      offsetX: 5,
      offsetY: 5,
      destinationOffsetY: 1,
      speed: 0.5
    });

  const svStringSelector = Selector(".sv-string-editor").withText("question1");
  await t.expect(svStringSelector.focused).notOk();
});

test("Focus switch on select base", async (t) => {
  await t.click(Selector(".svc-toolbox__tool").withText("Radio Button Group"));
  const svStringSelector = Selector(".sv-string-editor").withText("question1");
  await t.expect(svStringSelector.focused).ok();
  await t.pressKey("Enter")
    .expect(Selector(".sv-string-editor").withText("Item 1").withAttribute("contenteditable", "true").focused).ok()
    .pressKey("Enter")
    .expect(Selector(".sv-string-editor").withText("Item 2").withAttribute("contenteditable", "true").focused).ok()
    .pressKey("Enter")
    .expect(Selector(".sv-string-editor").withText("Item 3").withAttribute("contenteditable", "true").focused).ok()
    .pressKey("Enter")
    .expect(Selector(".sv-string-editor").withText("Item 4").withAttribute("contenteditable", "true").focused).ok()
    .pressKey("ctrl+enter")
    .expect(Selector(".sv-string-editor").withText("Item 5").withAttribute("contenteditable", "true").visible).notOk();
});

test("Disable edit inactive items", async (t) => {
  await t.click(Selector(".svc-toolbox__tool").withText("Checkboxes"))
    .expect(Selector(".svc-item-value__item .svc-string-editor .sv-string-editor").withText("Select All").withAttribute("contenteditable", "false").exists).ok()
    .expect(Selector(".svc-item-value__item .svc-string-editor .sv-string-editor").withText("None").withAttribute("contenteditable", "false").exists).ok()
    .expect(Selector(".svc-item-value__item .svc-string-editor .sv-string-editor").withText("Other").withAttribute("contenteditable", "false").exists).ok()
    .click(Selector(".svc-item-value-controls__add").nth(0))
    .expect(Selector(".svc-item-value__item .svc-string-editor .sv-string-editor").withText("Select All").withAttribute("contenteditable", "true").exists).ok()
    .click(Selector(".svc-item-value-controls__add").nth(1))
    .expect(Selector(".svc-item-value__item .svc-string-editor .sv-string-editor").withText("None").withAttribute("contenteditable", "true").exists).ok()
    .click(Selector(".svc-item-value-controls__add").nth(1))
    .expect(Selector(".svc-item-value__item .svc-string-editor .sv-string-editor").withText("Other").withAttribute("contenteditable", "true").exists).ok();
});

test("Focus switch on rating base", async (t) => {
  await t.click(Selector(".svc-toolbox__tool").withText("Rating Scale"));
  await t.pressKey("Enter");
  const svStringSelector = Selector(".svc-rating-question-content .sv-string-editor").withText("2");
  await t
    .expect(svStringSelector.visible).ok()
    .click(svStringSelector)
    .expect(svStringSelector.focused).ok();
  await t
    .pressKey("tab")
    .expect(Selector(".svc-rating-question-content .sv-string-editor").withText("3").focused).ok()
    .pressKey("Enter")
    .expect(Selector(".svc-rating-question-content .sv-string-editor").withText("4").focused).notOk();
});

test("Delete items on backspace", async (t) => {
  await t.click(Selector(".svc-toolbox__tool").withText("Radio Button Group"));
  const svStringSelector = Selector(".sv-string-editor").withText("question1");
  await t.expect(svStringSelector.focused).ok();
  await t.pressKey("Enter").pressKey("Enter")
    .expect(Selector(".sv-string-editor").withText("Item 2").focused).ok()
    .expect(Selector(".sv-string-editor").withText("Item 1").visible).ok()
    .expect(Selector(".sv-string-editor").withText("Item 2").visible).ok()
    .expect(Selector(".sv-string-editor").withText("Item 3").visible).ok()
    .pressKey("backspace")
    .wait(200)
    .pressKey("backspace")
    .wait(200)
    .expect(Selector(".sv-string-editor").withText("Item 1").focused).ok()
    .expect(Selector(".sv-string-editor").withText("Item 2").visible).notOk()
    .expect(Selector(".sv-string-editor").withText("Item 1").visible).ok()
    .expect(Selector(".sv-string-editor").withText("Item 3").visible).ok()
    .pressKey("backspace")
    .wait(200)
    .pressKey("backspace")
    .wait(200)
    .expect(Selector(".sv-string-editor").withText("Item 3").focused).ok()
    .expect(Selector(".sv-string-editor").withText("Item 1").visible).notOk()
    .pressKey("backspace")
    .wait(200)
    .pressKey("backspace")
    .wait(200)
    .expect(Selector(".sv-string-editor").withText("Item 3").visible).notOk();
});

test("Focus switch on multiple text", async (t) => {
  await t.click(Selector(".svc-toolbox__tool").withText("Multiple Textboxes"));
  const svStringSelector = Selector(".sv-string-editor").withText("question1");
  await t.expect(svStringSelector.focused).ok();
  await t.pressKey("Enter")
    .expect(Selector(".sv-string-editor").withText("text1").focused).ok()
    .pressKey("Enter")
    .expect(Selector(".sv-string-editor").withText("text2").focused).ok()
    .pressKey("Enter")
    .expect(Selector(".sv-string-editor").withText("text3").focused).ok()
    .pressKey("Enter")
    .expect(Selector(".sv-string-editor").withText("text4").focused).ok()
    .pressKey("ctrl+enter")
    .expect(Selector(".sv-string-editor").withText("text5").visible).notOk();
});

test("Delete  multiple text items on backspace", async (t) => {
  await t.click(Selector(".svc-toolbox__tool").withText("Multiple Textboxes"));
  const svStringSelector = Selector(".sv-string-editor").withText("question1");
  await t.expect(svStringSelector.focused).ok();
  await t.pressKey("Enter").pressKey("Enter").pressKey("Enter").pressKey("shift+tab")
    .expect(Selector(".sv-string-editor").withText("text2").focused).ok()
    .expect(Selector(".sv-string-editor").withText("text1").visible).ok()
    .expect(Selector(".sv-string-editor").withText("text2").visible).ok()
    .expect(Selector(".sv-string-editor").withText("text3").visible).ok()
    .pressKey("backspace")
    .wait(200)
    .pressKey("backspace")
    .wait(200)
    .expect(Selector(".sv-string-editor").withText("text1").focused).ok()
    .expect(Selector(".sv-string-editor").withText("text2").visible).notOk()
    .expect(Selector(".sv-string-editor").withText("text1").visible).ok()
    .expect(Selector(".sv-string-editor").withText("text3").visible).ok()
    .pressKey("backspace")
    .wait(200)
    .pressKey("backspace")
    .wait(200)
    .expect(Selector(".sv-string-editor").withText("text3").focused).ok()
    .expect(Selector(".sv-string-editor").withText("text1").visible).notOk()
    .pressKey("backspace")
    .wait(200)
    .pressKey("backspace")
    .wait(200)
    .expect(Selector(".sv-string-editor").withText("text3").visible).notOk();
});

test("Focus switch on matrix columns and rows", async (t) => {
  await t.click(Selector(".svc-toolbox__tool").withText("Single-Select Matrix"));
  const svStringSelector = Selector(".sv-string-editor").withText("question1");
  await t.expect(svStringSelector.focused).ok();
  await t.pressKey("Enter")
    .expect(Selector(".sv-string-editor").withText("Column 1").focused).ok()
    .pressKey("Enter")
    .expect(Selector(".sv-string-editor").withText("Column 2").focused).ok()
    .pressKey("Enter")
    .expect(Selector(".sv-string-editor").withText("Column 3").focused).ok()
    .pressKey("Enter")
    .expect(Selector(".sv-string-editor").withText("Column 4").focused).ok()
    .pressKey("ctrl+enter")
    .expect(Selector(".sv-string-editor").withText("Column 5").visible).notOk()
    .click(Selector(".sv-string-editor").withText("Row 1"))
    .expect(Selector(".sv-string-editor").withText("Row 1").focused).ok()
    .pressKey("Enter")
    .expect(Selector(".sv-string-editor").withText("Row 2").focused).ok()
    .pressKey("Enter")
    .expect(Selector(".sv-string-editor").withText("Row 3").focused).ok()
    .pressKey("Enter")
    .expect(Selector(".sv-string-editor").withText("Row 4").focused).ok()
    .pressKey("ctrl+enter")
    .expect(Selector(".sv-string-editor").withText("Row 5").visible).notOk();
});

test("Delete matrix Columns on backspace", async (t) => {
  await t.click(Selector(".svc-toolbox__tool").withText("Single-Select Matrix"));
  const svStringSelector = Selector(".sv-string-editor").withText("question1");
  await t.expect(svStringSelector.focused).ok();
  await t.pressKey("Enter").pressKey("Enter")
    .expect(Selector(".sv-string-editor").withText("Column 2").focused).ok()
    .expect(Selector(".sv-string-editor").withText("Column 1").visible).ok()
    .expect(Selector(".sv-string-editor").withText("Column 2").visible).ok()
    .expect(Selector(".sv-string-editor").withText("Column 3").visible).ok()
    .pressKey("backspace")
    .wait(200)
    .pressKey("backspace")
    .wait(200)
    .expect(Selector(".sv-string-editor").withText("Column 1").focused).ok()
    .expect(Selector(".sv-string-editor").withText("Column 2").visible).notOk()
    .expect(Selector(".sv-string-editor").withText("Column 1").visible).ok()
    .expect(Selector(".sv-string-editor").withText("Column 3").visible).ok()
    .pressKey("backspace")
    .wait(200)
    .pressKey("backspace")
    .wait(200)
    .expect(Selector(".sv-string-editor").withText("Column 3").focused).ok()
    .expect(Selector(".sv-string-editor").withText("Column 1").visible).notOk()
    .pressKey("backspace")
    .wait(200)
    .pressKey("backspace")
    .wait(200)
    .expect(Selector(".sv-string-editor").withText("Column 3").visible).notOk();
});

test("Delete matrix rows on backspace", async (t) => {
  await t.click(Selector(".svc-toolbox__tool").withText("Single-Select Matrix"));
  const svStringSelector = Selector(".sv-string-editor").withText("question1");
  await t.expect(svStringSelector.focused).ok();
  await t.pressKey("tab").pressKey("tab").pressKey("tab").pressKey("tab");
  await t.pressKey("Enter").pressKey("Enter").pressKey("shift+tab")
    .expect(Selector(".sv-string-editor").withText("Row 2").focused).ok()
    .expect(Selector(".sv-string-editor").withText("Row 1").visible).ok()
    .expect(Selector(".sv-string-editor").withText("Row 2").visible).ok()
    .expect(Selector(".sv-string-editor").withText("Row 3").visible).ok()
    .pressKey("backspace")
    .wait(200)
    .pressKey("backspace")
    .wait(200)
    .expect(Selector(".sv-string-editor").withText("Row 1").focused).ok()
    .expect(Selector(".sv-string-editor").withText("Row 2").visible).notOk()
    .expect(Selector(".sv-string-editor").withText("Row 1").visible).ok()
    .expect(Selector(".sv-string-editor").withText("Row 3").visible).ok()
    .pressKey("backspace")
    .wait(200)
    .pressKey("backspace")
    .wait(200)
    .expect(Selector(".sv-string-editor").withText("Row 3").focused).ok()
    .expect(Selector(".sv-string-editor").withText("Row 1").visible).notOk()
    .pressKey("backspace")
    .wait(200)
    .pressKey("backspace")
    .wait(200)
    .expect(Selector(".sv-string-editor").withText("Row 3").visible).notOk();
});
test("Paste multiline selectbase", async (t) => {
  await t.click(Selector(".svc-toolbox__tool").withText("Radio Button Group"));

  await t
    .click(Selector(".sv-string-editor").withText("Item 2"))
    .typeText(Selector(".sv-string-editor").withText("Item 2"), "a\nb\nc", { caretPos: 2, paste: true });
  await t.expect(Selector(".sv-string-editor").withText("Item 3").focused).ok();
  await t.expect(ClientFunction(() => {
    return JSON.stringify(window["creator"].survey.getAllQuestions()[0].choices.map(c => c.text));
  })()).eql("[\"Item 1\",\"Ita\",\"b\",\"cem 2\",\"Item 3\"]");
});

test("Paste multiline selectbase through event", async (t) => {
  await setJSON({
    "elements": [
      {
        "type": "radiogroup",
        "name": "question1",
        "choices": [
          "Item 1",
        ],
        "showNoneItem": true
      }
    ]
  });

  var skipIfReact = ClientFunction(() => {
    return window["creator"].survey.platformName == "react";
  });
  // skip test fo react - insecured code
  if (await skipIfReact()) return;

  var paste = ClientFunction((data) => {
    var event = new Event("paste");
    event["clipboardData"] = { getData: () => data };
    document.activeElement.dispatchEvent(event);
  });

  await t
    .click(Selector(".sv-string-editor").withText("None"));
  await paste("q\nw\ne");
  await t.pressKey("Enter");
  await t.expect(ClientFunction(() => {
    return JSON.stringify(window["creator"].survey.getAllQuestions()[0].visibleChoices.map(c => c.text));
  })()).eql("[\"Item 1\",\"Item 2\",\"qwe\",\"Other (describe)\"]");

  await t
    .click(Selector(".sv-string-editor").withText("Item 1"));
  await paste("a\nb\nc");
  await t.expect(ClientFunction(() => {
    return JSON.stringify(window["creator"].survey.getAllQuestions()[0].choices.map(c => c.text));
  })()).eql("[\"a\",\"b\",\"c\"]");
});

test.skip("Paste html data", async (t) => {
  // this test does not work in Chrome. Keep it here fore future investigation
  await setJSON({
    "elements": [
      {
        "type": "text",
        "name": "question1"
      },
      {
        "type": "html",
        "html": "<span id='copy-simulator'>Sim copy</span><span tabindex='-1' id='paste-simulator'>Sim paste</span>"
      }]
  });

  await ClientFunction(() => {
    document.addEventListener("copy", function (e) {
      e.clipboardData.setData("text/html", "<span>s\nd</span>");
      e.clipboardData.setData("text/plain", "s d");
    });

    document.getElementById("copy-simulator")?.addEventListener("click", () => {
      document.execCommand("copy");
    });
    document.getElementById("paste-simulator")?.addEventListener("mouseover", () => {
      document.execCommand("paste"); // does not work in chrome
    });
  })();

  await t.wait(200);
  await t.click(Selector("span").withText("Sim copy"));

  await t
    .click(Selector(".sv-string-editor").withText("question1"));

  await t.hover(Selector("span").withText("Sim paste"));
  await t.expect(ClientFunction(() => {
    return window["creator"].survey.getAllQuestions()[0].title;
  })()).eql("s d");
});
test("Undo after new item add", async (t) => {
  await t
    .click(Selector(".svc-toolbox__tool").withText("Radio Button Group"))
    .click(Selector(".svc-item-value-controls__add").filterVisible().nth(1))
    .expect(Selector(".svc-item-value-controls__remove").count).eql(4)
    .click(Selector("button[title=Undo]"))
    .expect(Selector(".svc-item-value-controls__remove").count).eql(3);
});
test("Check string editor focus on imagepicker caption click", async (t) => {
  await explicitErrorHandler();
  await setJSON({
    "elements": [
      {
        "type": "imagepicker",
        "name": "question1",
        "choices": [
          {
            "value": "lion",
            "imageLink": "https://surveyjs.io/Content/Images/examples/image-picker/lion.jpg"
          }
        ],
        "showLabel": true
      }]
  });

  const svStringSelector = Selector(".sv-string-editor").withText("lion");

  await t
    .click(svStringSelector)
    .expect(svStringSelector.focused).ok();
});

test("Check string editor with html", async (t) => {
  await explicitErrorHandler();
  await ClientFunction(() => {
    (<any>window).creator.onDesignerSurveyCreated.add(function (editor, options) {
      options.survey.onTextMarkdown.add((_, opt) => {
        opt.html = opt.text;
      });
    });
  })();
  await setJSON({
    "elements": [
      {
        "type": "text",
        title: "<p id='markup_html' style='color:rgb(255, 0, 255);'>Test</p>",
        "name": "question1",
      }]
  });

  const htmlMarkupSelector = Selector(".sv-string-editor--html #markup_html").withText("Test");

  await t.expect(htmlMarkupSelector.getStyleProperty("color")).eql("rgb(255, 0, 255)");
});

test("Check string editor with html security", async (t) => {
  await explicitErrorHandler();
  await ClientFunction(() => {
    (<any>window).creator.onDesignerSurveyCreated.add(function (editor, options) {
      options.survey.onTextMarkdown.add((_, opt) => {
        opt.html = opt.text.replaceAll("<", "[").replaceAll(">", "]");
      });
    });
  })();

  await setJSON({
    "elements": [
      {
        "type": "text",
        title: "<p>Test</p>",
        "name": "q1",
      }]
  });

  const htmlMarkupSelector = Selector(".sv-string-editor--html").withText("Test");
  await t.expect(htmlMarkupSelector.visible).ok();

  await t.expect(ClientFunction(() => document.querySelector(".sd-question[data-name=q1] .sv-string-editor").innerHTML)()).eql("[p]Test[/p]");
  await t.click(htmlMarkupSelector);
  await t.expect(ClientFunction(() => document.querySelector(".sd-question[data-name=q1] .sv-string-editor").innerHTML)()).eql("&lt;p&gt;Test&lt;/p&gt;");
  await t.pressKey("enter");
  await t.expect(ClientFunction(() => document.querySelector(".sd-question[data-name=q1] .sv-string-editor").innerHTML)()).eql("[p]Test[/p]");
});

test("Check string editor focus does not throw error: #4459", async (t) => {
  await explicitErrorHandler();
  await setJSON({
    "elements": [
      {
        "type": "checkbox",
        "name": "promoter_features",
        "choices": [
          "Item 1",
          "Item 2",
          "Item 3",
        ],
        "colCount": 1
      }]
  });
  await t
    .click(Selector(".svc-question__content"))
    .click(Selector(".sv-string-editor").withExactText("Item 4"))
    .click(Selector(".svc-item-value-controls__add").filterVisible().nth(1))
    .expect(Selector(".sv-string-editor").withExactText("Item 5").exists).ok();
});

test("Check string editor composition update events", async (t) => {
  await ClientFunction(() => {
    const property = window["Survey"].Serializer.findProperty("question", "title");
    property.maxLength = 2;
  })();
  await setJSON({
    "elements": [
      {
        "type": "text",
        "name": "q",
        "maxLength": 1
      }]
  });
  var editor = Selector(".svc-question__content .svc-string-editor .sv-string-editor");
  await t
    .click(editor)
    .pressKey("a")
    .expect(editor.withExactText("a").exists).ok()
    .pressKey("b")
    .expect(editor.withExactText("ab").exists).ok()
    .pressKey("c")
    .expect(editor.withExactText("ab").exists).ok()
    .pressKey("esc");

  const options = Object.assign({
    eventConstructor: "CompositionEvent"
  });

  await t.dispatchEvent(editor, "compositionstart", options);

  await t
    .click(editor)
    .pressKey("a")
    .expect(editor.withExactText("a").exists).ok()
    .pressKey("b")
    .expect(editor.withExactText("ab").exists).ok()
    .pressKey("c")
    .expect(editor.withExactText("abc").exists).ok();

  await t.dispatchEvent(editor, "compositionend", options);

  await ClientFunction(() => {
    const property = window["Survey"].Serializer.findProperty("question", "title");
    property.maxLength = undefined;
  })();
});

test("Check string-editor enter key", async (t) => {
  await ClientFunction(() => {
    const property = window["Survey"].Serializer.findProperty("question", "title");
    property.maxLength = 2;
  })();
  await setJSON({
    "elements": [
      {
        "type": "text",
        "name": "q",
        "maxLength": 1
      }]
  });
  var titleQuerySelector = ".svc-designer-header .sd-title .svc-string-editor .sv-string-editor";
  var descriptionQuerySelector = ".svc-designer-header .sd-description .svc-string-editor .sv-string-editor";
  await handleShiftEnter(descriptionQuerySelector);
  await t
    .click(Selector(descriptionQuerySelector))
    .pressKey("a b c")
    .pressKey("shift+enter")
    .pressKey("d e f")
    .pressKey("enter");

  await t.expect(await ClientFunction(() => {
    return window["creator"].survey.description.trim().replace(/\n+/g, "\n");
  })()).eql("abc\ndef");

  await handleShiftEnter(titleQuerySelector);
  await t
    .click(Selector(titleQuerySelector))
    .pressKey("a b c")
    .pressKey("shift+enter")
    .pressKey("d e f")
    .pressKey("enter");

  await t.expect(await ClientFunction(() => {
    return window["creator"].survey.title.trim();
  })()).eql("abcdef");
});