import { url, setJSON, collapseButtonSelector, getTabbedMenuItemByText, creatorTabPreviewName, explicitErrorHandler, generalGroupName, getPropertyGridCategory, getVisibleElement } from "../helper";
import { ClientFunction, Selector } from "testcafe";
const title = "Designer surface";

fixture`${title}`.page`${url}`;

test("Image question", async (t) => {
  const json = {
    "pages": [
      {
        "name": "page1",
        "elements": [
          {
            "type": "image",
            "name": "question1",
            "imageLink": "https://surveyjs.io/Content/Images/examples/image-picker/lion.jpg"
          }
        ]
      }
    ]
  };
  const imageQuestionSelector = Selector(".sd-image__image");
  await setJSON(json);

  await t
    .resizeWindow(1280, 900)
    .expect(imageQuestionSelector.exists).ok()
    .expect(imageQuestionSelector.classNames).contains("sd-image__image--adaptive")
    .expect(imageQuestionSelector.clientWidth).eql(624)
    .expect(imageQuestionSelector.clientHeight).eql(415)

    .click(imageQuestionSelector)
    .expect(Selector("div [data-name=\"imageHeight\"] input").value).eql("")
    .expect(Selector("div [data-name=\"imageHeight\"] input").getAttribute("placeholder")).eql("auto")
    .expect(Selector("div [data-name=\"imageWidth\"] input").value).eql("")
    .expect(Selector("div [data-name=\"imageWidth\"] input").getAttribute("placeholder")).eql("auto")

    .click(collapseButtonSelector)
    .expect(imageQuestionSelector.exists).ok()
    .expect(imageQuestionSelector.classNames).contains("sd-image__image--adaptive")
    .expect(imageQuestionSelector.clientWidth).eql(624)
    .expect(imageQuestionSelector.clientHeight).eql(415)

    .click(getTabbedMenuItemByText(creatorTabPreviewName))
    .expect(imageQuestionSelector.exists).ok()
    .expect(imageQuestionSelector.classNames).contains("sd-image__image--adaptive")
    .expect(imageQuestionSelector.clientWidth).eql(640)
    .expect(imageQuestionSelector.clientHeight).eql(426);
});

test("Check scrollbar is not appear when width mode is responsive", async (t) => {
  const json = {
    widthMode: "responsive",
    "pages": [
      {
        "name": "page1",
        "elements": [
          {
            "type": "text",
            "name": "text",
          }
        ]
      }
    ]
  };
  await setJSON(json);
  const rootSelector = Selector(".svc-tab-designer");
  const verticalScrollWidth = 12;
  const rootOffsetWidth = await rootSelector.offsetWidth;
  const rootScrollWidth = await rootSelector.scrollWidth;
  await t
    .resizeWindow(1920, 1080)
    .expect(rootOffsetWidth - rootScrollWidth).lte(verticalScrollWidth);
});

test("Check imagepicker add/delete items not raises errors and works fine: #3203", async (t) => {
  await t.resizeWindow(1920, 1080);
  await setJSON({});
  await explicitErrorHandler();
  await t
    .click(".svc-toolbox__item--icon-imagepicker")
    .click(".spg-panel__title--expandable[aria-label='Choice Options']")
    .click(".spg-action-button[title='Add new choice']")
    .click(".spg-matrixdynamic tr:last-of-type .spg-action-button--danger")
    .expect(Selector(".sd-imagepicker").find(".sd-imagepicker > *:not(svc-image-item-value)").count).eql(6);
});

test("Check imagepicker add/delete items style", async (t) => {
  await t.resizeWindow(1920, 1080);
  await explicitErrorHandler();
  await setJSON({
    elements: [{
      type: "imagepicker", name: "q1", choices: [
        {
          "value": "lion",
          "imageLink": "lion.jpg"
        },
        {
          "value": "giraffe",
          "imageLink": "lion.jpg"
        }
      ]
    }]
  });

  await t
    .click(".svc-tab-designer .svc-context-button--danger")
    .expect(Selector(".svc-tab-designer .svc-image-item-value--new").visible).ok()
    .setFilesToUpload(getVisibleElement(".svc-image-item-value-wrapper").nth(1).find(".svc-choose-file-input"), "./image.jpg")
    .click(".svc-image-item-value-controls__add");
});

test("Check imagepicker add/delete - 5817", async (t) => {
  await t.resizeWindow(1920, 1080);
  await explicitErrorHandler();
  await setJSON({
    elements: [{
      type: "imagepicker", name: "q1", choices: [
        {
          "value": "lion",
          "imageLink": "lion.jpg"
        },
        {
          "value": "giraffe",
          "imageLink": "lion.jpg"
        }
      ]
    }]
  });
  await ClientFunction(() => {
    const creator = (window as any).creator;
    creator.selectElement(creator.survey.getQuestionByName("q1"));
  })();
  await t
    .expect(Selector(".svc-tab-designer .svc-image-item-value--new").visible).ok()
    .click(".svc-image-item-value-controls__add")
    .setFilesToUpload(getVisibleElement(".svc-image-item-value--new").find(".svc-choose-file-input"), "./image.jpg")
    .expect(Selector(".svc-image-item-value").nth(2).find("img").hasAttribute("src")).ok()
    .click(Selector(".svc-context-button--danger").nth(2))
    .expect(Selector(".svc-image-item-value").nth(2).hasClass("svc-image-item-value--new")).ok()
    .expect(Selector(".svc-tab-designer .svc-image-item-value--new").visible).ok()
    .click(".svc-image-item-value-controls__add")
    .setFilesToUpload(getVisibleElement(".svc-image-item-value--new").find(".svc-choose-file-input"), "./image.jpg")
    .expect(Selector(".svc-image-item-value").nth(2).find("img").hasAttribute("src")).ok();
});

test("Check imagepicker delete item", async (t) => {
  await t.resizeWindow(1920, 1080);
  await explicitErrorHandler();
  await setJSON({
    elements: [{
      type: "imagepicker", name: "q1", choices: [
        {
          "value": "lion",
          "imageLink": "lion.jpg"
        },
        {
          "value": "giraffe",
          "imageLink": "lion.jpg"
        }
      ]
    }]
  });

  await t
    .expect(Selector(".svc-tab-designer .svc-context-button--danger").count).eql(2)
    .expect(Selector(".svc-image-item-value:not(.svc-image-item-value--new)").count).eql(2)
    .click(".svc-tab-designer .svc-context-button--danger")
    .expect(Selector(".svc-tab-designer .svc-context-button--danger").count).eql(1)
    .expect(Selector(".svc-image-item-value:not(.svc-image-item-value--new)").count).eql(1);
});

test("Check imagepicker add/delete files title", async (t) => {
  await t.resizeWindow(1920, 1080);
  await explicitErrorHandler();
  await setJSON({
    elements: [{
      type: "imagepicker", name: "q1", choices: [
        {
          "value": "lion",
          "imageLink": "lion.jpg"
        }
      ]
    }]
  });

  await t
    .hover(Selector(".svc-image-item-value-wrapper svg title").withExactText("Select a file"))
    .hover(Selector(".svc-image-item-value-wrapper svg title").withExactText("Remove the file"));
});

test("Focus on new panel added", async (t) => {
  await t.resizeWindow(1920, 1080);
  const EmptyPage = Selector("[data-sv-drop-target-survey-element='newGhostPage']");
  const PanelItem = Selector("[aria-label='Panel']");

  await t
    .hover(PanelItem)
    .dragToElement(PanelItem, EmptyPage, { speed: 0.5 });

  await t.wait(1000);
  const panelSelector = Selector(".svc-question__content--panel");
  await t.expect(panelSelector.focused).ok();
});

test("Focus on new html question added", async (t) => {
  await t.resizeWindow(1920, 1080);
  const EmptyPage = Selector("[data-sv-drop-target-survey-element='newGhostPage']");
  const HTMLItem = Selector("[aria-label='HTML']");

  await t
    .hover(HTMLItem)
    .dragToElement(HTMLItem, EmptyPage, { speed: 0.5 });

  const panelSelector = Selector(".svc-question__content--html");
  await t.expect(panelSelector.focused).ok();
});

test("Keyboard PG MobileView", async (t) => {
  await t.resizeWindow(1000, 1000);

  await t
    .pressKey("tab").pressKey("tab").pressKey("tab")
    .pressKey("tab").pressKey("tab").pressKey("tab")
    .pressKey("enter");

  const pgSurveyTitleInput = Selector(".spg-body .spg-row").nth(1).find("[data-name='title'] input");
  await t.expect(pgSurveyTitleInput.focused).ok();
});
test("Check page navigator is visually hidden", async (t) => {
  await t.resizeWindow(1920, 1080);
  const json = {
    elements: [
      {
        name: "q1",
        type: "text"
      }
    ]
  };
  await setJSON(json);
  await t.expect(Selector(".svc-tab-designer__page-navigator").visible).notOk();
});
test("Check sidebar shadow height", async (t) => {
  await t.resizeWindow(1000, 300);
  await setJSON({});
  await t.click('button[title="Survey settings"]');
  await t.expect(Selector(".svc-side-bar__shadow").offsetHeight).lte(480);
});

test("Question adorner - update other rows with lazy rendering on question collapsed", async (t) => {
  await t.resizeWindow(1200, 800);
  const jsonL = {
    "pages": [
      {
        "name": "page1",
        "elements": [
          {
            "type": "imagepicker",
            "name": "question1",
            "choices": [
              {
                "value": "Image 1",
                "imageLink": "https://surveyjs.io/Content/Images/examples/image-picker/lion.jpg"
              },
              {
                "value": "Image 2",
                "imageLink": "https://surveyjs.io/Content/Images/examples/image-picker/giraffe.jpg"
              },
              {
                "value": "Image 3",
                "imageLink": "https://surveyjs.io/Content/Images/examples/image-picker/panda.jpg"
              },
              {
                "value": "Image 4",
                "imageLink": "https://surveyjs.io/Content/Images/examples/image-picker/camel.jpg"
              }
            ],
            "imageFit": "cover"
          }
        ]
      },
      {
        "name": "page2",
        "elements": [
          {
            "type": "panel",
            "name": "panel1",
            "elements": [
              {
                "type": "imagepicker",
                "name": "question2",
                "choices": [
                  {
                    "value": "Image 1",
                    "imageLink": "https://surveyjs.io/Content/Images/examples/image-picker/lion.jpg"
                  },
                  {
                    "value": "Image 2",
                    "imageLink": "https://surveyjs.io/Content/Images/examples/image-picker/giraffe.jpg"
                  },
                  {
                    "value": "Image 3",
                    "imageLink": "https://surveyjs.io/Content/Images/examples/image-picker/panda.jpg"
                  },
                  {
                    "value": "Image 4",
                    "imageLink": "https://surveyjs.io/Content/Images/examples/image-picker/camel.jpg"
                  }
                ],
                "imageFit": "cover"
              }
            ]
          }
        ]
      }
    ]
  };
  await ClientFunction(() => {
    window["creator"].expandCollapseButtonVisibility = "always";
  })();
  await setJSON(jsonL);
  const qContent = Selector(".svc-question__content");
  const qCollapseButton = Selector(".svc-question__content #collapse");
  await t.expect(qContent.count).eql(2);
  await t.expect(qCollapseButton.count).eql(2);

  await t.click(qCollapseButton);
  await t.expect(qContent.count).eql(3);
  await t.expect(qCollapseButton.count).eql(3);
});
test("Collapse all and expand all toolbar", async (t) => {
  await t.resizeWindow(1600, 1080);
  const json = {
    elements: [
      {
        type: "text",
        name: "question1"
      },
      {
        type: "panel",
        name: "panel1"
      }
    ]
  };
  await ClientFunction(() => {
    window["creator"].expandCollapseButtonVisibility = "onhover";
  })();
  await setJSON(json);
  await t.click("#collapseAll");
  await t.expect(Selector(".svc-page__content--collapsed").exists).ok();
  await t.click("#expandAll");
  await t.expect(Selector(".svc-page__content--collapsed").exists).notOk();
});
test("Collapse all and expand all toolbar visibility", async (t) => {
  await t.resizeWindow(1600, 1080);
  const json = {
    elements: [
      {
        type: "text",
        name: "question1"
      },
      {
        type: "panel",
        name: "panel1"
      }
    ]
  };
  await ClientFunction(() => {
    window["creator"].expandCollapseButtonVisibility = "onhover";
  })();
  await setJSON(json);
  await t.expect(Selector("#collapseAll").exists).ok();
  await t.expect(Selector("#collapseAll").visible).ok();
  await t.expect(Selector("#expandAll").exists).ok();
  await t.expect(Selector("#expandAll").visible).ok();

  await ClientFunction(() => {
    window["creator"].expandCollapseButtonVisibility = "never";
  })();
  await t.expect(Selector("#collapseAll").visible).notOk();
  await t.expect(Selector("#expandAll").visible).notOk();

});
test("Check page adorner state is restored after shrink and stretch", async (t) => {
  await t.resizeWindow(1920, 1080);
  const json = {
    widthMode: "responsive",
    "pages": [
      {
        "name": "page1",
        "elements": [
          {
            "type": "text",
            "name": "text",
          }
        ]
      }
    ]
  };
  await setJSON(json);
  await t.click(".svc-page", { offsetX: 3, offsetY: 3 });
  await t.expect(Selector(".svc-page__content-actions #duplicate .svc-page-toolbar-item__title--with-icon").visible).ok();
  await t.resizeWindow(500, 1080);
  await t.expect(Selector(".svc-page__content-actions #duplicate .svc-page-toolbar-item__title--with-icon").visible).notOk();
  await t.resizeWindow(1920, 1080);
  await t.expect(Selector(".svc-page__content-actions #duplicate .svc-page-toolbar-item__title--with-icon").visible).ok();
});
test("Popup position", async (t) => {
  const setCreatorTop = ClientFunction((top) => {
    var el = document.getElementById("survey-creator");
    if (!el) el = document.querySelector(".svc-creator") as HTMLElement; // for angular app
    el.style.marginTop = top;
  });
  await setCreatorTop("200px");

  await t.resizeWindow(1400, 900);
  await setJSON({
    "elements": [
      {
        "type": "text",
        "name": "q1"
      }
    ]
  });
  await t.click('button[title="Survey settings"]');
  await t.click('[data-name="locale"]');
  await t.expect(ClientFunction(() => { return document.querySelector('[data-name="locale"] .sv-popup__container')?.getBoundingClientRect().top; })()).gte(200);
  await setCreatorTop("");
});

test("Diabled Input issue", async (t) => {
  //https://github.com/surveyjs/survey-creator/issues/6138
  const qName = "question1";
  const json = {
    "pages": [
      {
        "name": "page1",
        "elements": [
          {
            "type": "text",
            "name": qName
          }
        ]
      }
    ]
  };
  await setJSON(json);

  const questionContentClass = "svc-question__content";
  const QuestionContent = Selector(`[data-sv-drop-target-survey-element=${qName}]`).find(`.${questionContentClass}`);
  const QuestionInput = QuestionContent.find(".sd-input:disabled");

  await t.click(QuestionInput);
  await t.expect(QuestionContent.hasClass(questionContentClass + "--selected")).ok();
});

test("Diabled Textarea issue", async (t) => {
  //https://github.com/surveyjs/survey-creator/issues/6138
  const qName = "question1";

  const json = {
    "pages": [
      {
        "name": "page1",
        "elements": [
          {
            "type": "comment",
            "name": qName
          }
        ]
      }
    ]
  };
  await setJSON(json);

  const questionContentClass = "svc-question__content";
  const QuestionContent = Selector(`[data-sv-drop-target-survey-element=${qName}]`).find(`.${questionContentClass}`);
  const QuestionInput = QuestionContent.find(".sd-input:disabled");

  await t.click(QuestionInput);
  await t.expect(QuestionContent.hasClass(questionContentClass + "--selected")).ok();
});

test("Question adorner double click", async (t) => {
  const json = {
    "pages": [
      {
        "name": "page1",
        "elements": [
          {
            "type": "comment",
            "name": "q"
          }
        ]
      }
    ]
  };
  await ClientFunction(() => {
    window["creator"].expandCollapseButtonVisibility = "always";
  })();
  await setJSON(json);
  function isCollapsed() {
    return Selector(".svc-question__content").hasClass("svc-question__content--collapsed");
  }
  await t.doubleClick(Selector(".svc-question__content"));
  await t.expect(isCollapsed()).notOk();

  await t.doubleClick(Selector(".svc-required-action"));
  await t.expect(isCollapsed()).notOk();

  await t.doubleClick(Selector(".sv-action-bar-item--collapse button"));
  await t.expect(isCollapsed()).notOk();

  await t.doubleClick(Selector(".svc-question__content .sv-string-editor"));
  await t.expect(isCollapsed()).notOk();

  await t.doubleClick(Selector(".svc-question__content"), { offsetX: 5, offsetY: -5 });
  await t.expect(isCollapsed()).ok();
  await t.doubleClick(Selector(".svc-question__content"), { offsetX: 5, offsetY: -5 });
  await t.expect(isCollapsed()).notOk();

  await t.doubleClick(Selector(".sd-question__title"));
  await t.expect(isCollapsed()).ok();
  await t.doubleClick(Selector(".sd-question__title"));
  await t.expect(isCollapsed()).notOk();

  await t.doubleClick(Selector(".svc-question__drag-area").nth(0));
  await t.expect(isCollapsed()).ok();
  await t.doubleClick(Selector(".svc-question__drag-area").nth(0));
  await t.expect(isCollapsed()).notOk();

});

test("Page adorner double click", async (t) => {
  const json = {
    "pages": [
      {
        "name": "page1",
        "elements": [
          {
            "type": "comment",
            "name": "q"
          }
        ]
      }
    ]
  };
  await ClientFunction(() => {
    window["creator"].expandCollapseButtonVisibility = "always";
    window["creator"].allowDragPages = true;
  })();
  await setJSON(json);
  function isCollapsed() {
    return Selector(".svc-page__content").hasClass("svc-page__content--collapsed");
  }
  await t.doubleClick(Selector(".svc-page__content"));
  await t.expect(isCollapsed()).notOk();

  await t.doubleClick(Selector(".sv-action-bar-item--collapse button"));
  await t.expect(isCollapsed()).notOk();

  await t.doubleClick(Selector(".svc-page__content .sv-string-editor"));
  await t.expect(isCollapsed()).notOk();

  await t.doubleClick(Selector(".svc-page__content"), { offsetX: 5, offsetY: -5 });
  await t.expect(isCollapsed()).ok();
  await t.doubleClick(Selector(".svc-page__content"), { offsetX: 5, offsetY: -5 });
  await t.expect(isCollapsed()).notOk();

  await t.doubleClick(Selector(".sd-body__page"), { offsetY: 5 });
  await t.expect(isCollapsed()).ok();
  await t.doubleClick(Selector(".sd-body__page"), { offsetY: 5 });
  await t.expect(isCollapsed()).notOk();

  await t.doubleClick(Selector(".svc-page__content > .svc-question__drag-area"));
  await t.expect(isCollapsed()).ok();
  await t.doubleClick(Selector(".svc-page__content > .svc-question__drag-area"));
  await t.expect(isCollapsed()).notOk();

});

test("Page adorner header click - select", async (t) => {
  const qName = "question1";
  const json = {
    "pages": [
      {
        "name": "page1",
        "elements": [
          {
            "type": "text",
            "name": qName
          }
        ]
      }
    ]
  };
  await setJSON(json);

  await t.click(".svc-page__content-actions", { offsetX: 50, offsetY: 5 });
  await t.expect(Selector(".svc-page__content").hasClass("svc-page__content--selected")).ok();
});

test("Check survey settings button", async (t) => {
  const settingsButton = Selector('button[title="Survey settings"]');
  await ClientFunction(() => window["creator"].showOneCategoryInPropertyGrid = true)();
  await t.resizeWindow(1000, 800);
  await t.resizeWindow(1600, 800);
  await t.expect(settingsButton.hasClass("svc-toolbar__item--active")).notOk();
  await t.click('.svc-menu-action__button[title="General"]');
  await t.expect(settingsButton.hasClass("svc-toolbar__item--active")).ok();
});