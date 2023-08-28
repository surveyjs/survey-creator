import { RatingToolboxItem, explicitErrorHandler, generalGroupName, getPropertyGridCategory, setJSON, url } from "../helper";
import { ClientFunction, Selector } from "testcafe";
const title = "String Editor";

const json = {
  questions: [
    {
      type: "checkbox",
      name: "string_editor",
      choices: [
        "Item 1",
        "Item 2",
        "Item 3"
      ]
    }
  ]
};

const json2 = {
  questions: [
    {
      type: "checkbox",
      name: "string_editor",
      description: "desc",
      choices: [
        "Item 1",
        "Item 2",
        "Item 3"
      ]
    }
  ]
};
const json3 = {
  questions: [
    {
      type: "checkbox",
      name: "string_editor",
      description: "desc",
      choices: [
        "Item 1",
        "Item 2",
        "Item 3"
      ]
    },
    {
      "type": "matrixdropdown",
      "name": "question1",
      "columns": [
        {
          "name": "Column 1"
        },
        {
          "name": "Column 2"
        },
        {
          "name": "Column 3"
        }
      ],
      "choices": [
        1,
        2,
        3,
        4,
        5
      ],
      "rows": [
        "Row 1",
        "Row 2"
      ]
    }
  ]
};

fixture`${title}`.page`${url}`.beforeEach(
  async (t) => {
    await t.maximizeWindow();
  }
);

test("Edit question title", async (t) => {
  await setJSON(json);
  const title = json.questions[0].name;
  const svStringSelector = Selector(".sv-string-editor").withText(title);
  const prefix = "prefix";

  await t
    .click(getPropertyGridCategory(generalGroupName))
    .click(svStringSelector)
    .typeText(svStringSelector, prefix, { caretPos: 0 })
    .pressKey("esc")
    .expect(Selector("[data-name='title']").find("textarea").value).eql("", "Question title in property grid still empty")

    .click(svStringSelector)
    .click(svStringSelector)
    .typeText(svStringSelector, prefix, { caretPos: 0 })
    .pressKey("ctrl+enter")
    .expect(Selector("[data-name='title']").find("textarea").value).eql(prefix + title, "Question title in property grid is updated")

    .click(svStringSelector)
    .pressKey("ctrl+a")
    .pressKey("delete")
    .pressKey("ctrl+enter")
    .expect(Selector(".sv-string-editor").withText(title).visible).ok("Question title is reset to question name")

    .click(svStringSelector)
    .pressKey("ctrl+a")
    .pressKey("delete")
    .pressKey("ctrl+enter")
    .expect(Selector(".sv-string-editor").withText(title).visible).ok("Question title still contains question name");
});

test("Check string editor visibility", async (t) => {
  await setJSON(json);

  await t.expect(Selector(".sd-question__description .svc-string-editor").visible).notOk();

  const newJson = JSON.parse(JSON.stringify(json));
  newJson.questions[0]["description"] = "Desc";
  await setJSON(newJson);
  await t.expect(Selector(".sd-question__description .svc-string-editor").visible).ok();

  await ClientFunction((json) => {
    window["Survey"].Serializer.findProperty("question", "description").placeholder = "Q placeholder";
    window["creator"].JSON = json;
  })(json);
  await t.expect(Selector(".sd-question__description .svc-string-editor").visible).ok();
});

test("Check string editor visibility on defferent ReadOnly cases", async (t) => {
  var json_t = {
    questions: [
      {
        type: "checkbox",
        name: "q1",
        choices: [
          "Item 1",
          "Item 2"
        ]
      },
      {
        type: "radiogroup",
        name: "q2",
        choices: [
          "Item 3",
          "Item 4"
        ]
      }
    ]
  };
  await setJSON(json_t);

  await t
    .expect(Selector(".svc-item-value__item .svc-string-editor .sv-string-editor").withText("Item 1").withAttribute("contenteditable", "true").exists).ok()
    .expect(Selector(".svc-item-value__item .svc-string-editor .sv-string-editor").withText("Item 2").withAttribute("contenteditable", "true").exists).ok()
    .expect(Selector(".svc-item-value__item .svc-string-editor .sv-string-editor").withText("Item 3").withAttribute("contenteditable", "true").exists).ok()
    .expect(Selector(".svc-item-value__item .svc-string-editor .sv-string-editor").withText("Item 4").withAttribute("contenteditable", "true").exists).ok();

  await ClientFunction(() => {
    window["Survey"].Serializer.getProperty("itemvalue", "text").readOnly = true;
  })();
  await setJSON(json_t);

  await t
    .expect(Selector(".svc-item-value__item .svc-string-editor .sv-string-editor").withText("Item 1").withAttribute("contenteditable", "false").exists).ok()
    .expect(Selector(".svc-item-value__item .svc-string-editor .sv-string-editor").withText("Item 3").withAttribute("contenteditable", "false").exists).ok()
    .expect(Selector(".svc-item-value__item .svc-string-editor .sv-string-editor").withText("Item 4").withAttribute("contenteditable", "false").exists).ok()
    .expect(Selector(".svc-item-value__item .svc-string-editor .sv-string-editor").withText("Item 2").withAttribute("contenteditable", "false").exists).ok();

  await ClientFunction(() => {
    window["Survey"].Serializer.getProperty("itemvalue", "text").readOnly = false;
    window["Survey"].Serializer.getProperty("checkbox", "choices").readOnly = true;
  })();
  await setJSON(json_t);

  await t
    .expect(Selector(".svc-item-value__item .svc-string-editor .sv-string-editor").withText("Item 1").withAttribute("contenteditable", "false").exists).ok()
    .expect(Selector(".svc-item-value__item .svc-string-editor .sv-string-editor").withText("Item 2").withAttribute("contenteditable", "false").exists).ok()
    .expect(Selector(".svc-item-value__item .svc-string-editor .sv-string-editor").withText("Item 3").withAttribute("contenteditable", "true").exists).ok()
    .expect(Selector(".svc-item-value__item .svc-string-editor .sv-string-editor").withText("Item 4").withAttribute("contenteditable", "true").exists).ok();

  await ClientFunction(() => {
    window["Survey"].Serializer.getProperty("checkbox", "choices").readOnly = false;
    window["creator"].onGetPropertyReadOnly.add(function (editor, options) {
      if (options.obj.getType() === "radiogroup" && options.propertyName == "choices")
        options.readOnly = true;
    });
  })();
  await setJSON(json_t);

  await t
    .expect(Selector(".svc-item-value__item .svc-string-editor .sv-string-editor").withText("Item 1").withAttribute("contenteditable", "true").exists).ok()
    .expect(Selector(".svc-item-value__item .svc-string-editor .sv-string-editor").withText("Item 2").withAttribute("contenteditable", "true").exists).ok()
    .expect(Selector(".svc-item-value__item .svc-string-editor .sv-string-editor").withText("Item 3").withAttribute("contenteditable", "false").exists).ok()
    .expect(Selector(".svc-item-value__item .svc-string-editor .sv-string-editor").withText("Item 4").withAttribute("contenteditable", "false").exists).ok();

});

test("Check creator events on string editor", async (t) => {
  const msg = "Description length can not be greater than 10 characters";
  await ClientFunction((json, msg) => {
    window["creator"].JSON = json;
    window["creator"].onPropertyValidationCustomError.add(function (sender, options) {
      if (options.obj.isQuestion && options.propertyName == "description" && options.value.length > 10) {
        options.error = msg;
      }
    });
  })(json2, msg);

  const svStringSelector = Selector(".sv-string-editor").withText("desc");
  const errorNotifyBalloonSelector = Selector(".svc-notifier.svc-notifier--error").filterVisible();
  await t
    .click(svStringSelector)
    .click(svStringSelector)
    .typeText(svStringSelector, "1234567890", { caretPos: 0 })
    .pressKey("enter")
    .expect(errorNotifyBalloonSelector.innerText).eql(msg)
    .expect(Selector(".sd-question__description .svc-string-editor").hasClass("svc-string-editor--error")).ok()
    .expect(ClientFunction(() => {
      return window?.getSelection()?.rangeCount || 0 > 0;
    })()).ok();
});

test("Check string editor on isRequired", async (t) => {
  const msg = "Please enter a value";
  await ClientFunction((json, msg) => {
    window["Survey"].Serializer.findProperty("question", "description").isRequired = true;
    window["creator"].JSON = json;
  })(json2, msg);

  const svStringSelector = Selector(".sv-string-editor").withText("desc");
  const errorNotifyBalloonSelector = Selector(".svc-notifier.svc-notifier--error").filterVisible();

  await t
    .click(svStringSelector)
    .expect(svStringSelector.focused).ok()
    .pressKey("ctrl+a delete")
    .pressKey("enter")
    .expect(errorNotifyBalloonSelector.innerText).eql(msg)
    .expect(Selector(".sd-question__description .svc-string-editor").hasClass("svc-string-editor--error")).ok()
    .expect(ClientFunction(() => {
      return window?.getSelection()?.rangeCount || 0 > 0;
    })()).ok();
});

test("Check string editor not loosing focus and selects underlying items", async (t) => {
  await setJSON(json3);

  const svStringSelector = Selector(".sv-string-editor").withText("string_editor");
  const svItemSelector = Selector(".sv-string-editor").withText("Item 1");

  await t
    .click(svStringSelector)
    .expect(svStringSelector.focused).ok()
    .expect(Selector(".svc-side-bar__container-header .sv-action-bar-item__title").withText("string_editor").visible).ok()
    .pressKey("tab")
    .expect(Selector(".sv-string-editor").withText("desc").focused).ok()
    .expect(Selector(".svc-side-bar__container-header .sv-action-bar-item__title").withText("string_editor").visible).ok()
    .click(svItemSelector)
    .expect(Selector(".svc-side-bar__container-header .sv-action-bar-item__title").withText("string_editor").visible).ok()
    .expect(svItemSelector.focused).ok()
    .click(Selector(".sv-string-editor").withText("Column 1"))
    .expect(Selector(".svc-side-bar__container-header .sv-action-bar-item__title").withText("Column 1").visible).ok()
    .click(Selector(".sv-string-editor").withText("Column 2"))
    .expect(Selector(".svc-side-bar__container-header .sv-action-bar-item__title").withText("Column 2").visible).ok()
    .pressKey("tab")
    .expect(Selector(".svc-side-bar__container-header .sv-action-bar-item__title").withText("Column 3").visible).ok();
});

test("Check string editor inplaceEditForValues property", async (t) => {
  await setJSON(json);

  const svItemSelector = Selector(".sv-string-editor").withText("Item 1");

  await t
    .click(svItemSelector)
    .click(svItemSelector)
    .typeText(svItemSelector, "new", { caretPos: 0 })
    .pressKey("enter")
    .expect(ClientFunction(() => {
      var itemvalue = window["creator"].survey.getQuestionByName("string_editor").choices[0];
      return { value: itemvalue.value, text: itemvalue.text };
    })()).eql({ value: "Item 1", text: "newItem 1" });

  await ClientFunction(() => {
    window["creator"].inplaceEditForValues = true;
  })();

  await t
    .click(Selector(".sv-string-editor").withText("newItem 1"))
    .click(Selector(".sv-string-editor").withText("newItem 1"))
    .typeText(Selector(".sv-string-editor").withText("newItem 1"), "Ok", { caretPos: 0 })
    .pressKey("enter")
    .expect(ClientFunction(() => {
      var itemvalue = window["creator"].survey.getQuestionByName("string_editor").choices[0];
      return { value: itemvalue.value, text: itemvalue.text };
    })()).eql({ value: "OknewItem 1", text: "newItem 1" });
});

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
    .expect(Selector(".sv-string-editor").withText("*abc*").visible).ok()
    .click(Selector(".sv-string-editor").withText("*abc*"))
    .wait(100)
    .pressKey("esc")
    .wait(100)
    .expect(Selector(".sv-string-editor").withText("$abc$").visible).ok()
    .expect(getValue()).eql("*a<b>b</b>c*")
    .click(Selector(".sv-string-editor").withText("$abc$"))
    .expect(Selector(".sv-string-editor").withText("*abc*").visible).ok()
    .click(Selector(".sv-string-editor").withText("*abc*"))
    .typeText(Selector(".sv-string-editor").withText("*abc*"), "d", { caretPos: 0 })
    .pressKey("enter")
    .expect(Selector(".sv-string-editor").withText("d$abc$").visible).ok()
    .expect(getValue()).eql("d*a<b>b</b>c*");
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