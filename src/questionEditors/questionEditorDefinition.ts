import * as Survey from "survey-knockout";

export interface ISurveyQuestionEditorDefinition {
  title?: string;
  properties?: Array<
    string | { name: string; title?: string; category?: string; tab?: string }
  >;
  tabs?: Array<{
    name: string;
    index?: number;
    title?: string;
    visible?: boolean;
  }>;
}

export class SurveyQuestionEditorDefinition {
  public static definition: {
    [key: string]: ISurveyQuestionEditorDefinition;
  } = {
    question: {
      properties: [
        "name",
        "title",
        "description",
        { name: "visible", category: "checks" },
        { name: "isRequired", category: "checks" },
        { name: "startWithNewLine", category: "checks" }
      ],
      tabs: [
        { name: "visibleIf", index: 100 },
        { name: "enableIf", index: 110 }
      ]
    },
    comment: {
      properties: ["rows", "placeHolder"]
    },
    file: {
      properties: [
        { name: "showPreview", category: "imageChecks" },
        { name: "storeDataAsText", category: "imageChecks" },
        "maxSize",
        "imageHeight",
        "imageWidth"
      ]
    },
    html: {
      tabs: [{ name: "html", index: 10 }]
    },
    matrixdropdownbase: {
      properties: ["cellType", "columnsLocation"],
      tabs: [
        { name: "columns", index: 10 },
        { name: "rows", index: 11 },
        { name: "choices", index: 12 }
      ]
    },
    matrixdynamic: {
      properties: ["rowCount", "addRowLocation", "addRowText", "removeRowText"]
    },
    matrixdropdown: {
      properties: ["totalText"]
    },
    matrix: {
      properties: ["isAllRowRequired"],
      tabs: [{ name: "columns", index: 10 }, { name: "rows", index: 11 }]
    },
    multipletext: {
      properties: ["colCount"],
      tabs: [{ name: "items", index: 10 }]
    },
    rating: {
      properties: [
        "rateMin",
        "rateMax",
        "rateStep",
        "minRateDescription",
        "maxRateDescription"
      ],
      tabs: [{ name: "rateValues", index: 10 }]
    },
    selectbase: {
      properties: [
        { name: "hasOther", tab: "choices" },
        { name: "otherText", tab: "choices" },
        "choicesOrder",
        "colCount"
      ],
      tabs: [
        { name: "choices", index: 10 },
        { name: "choicesByUrl", index: 11 },
        { name: "validators", index: 200 }
      ]
    },
    "itemvalue[]@choices": {
      title: "Rules",
      tabs: [
        { name: "general", visible: false },
        { name: "visibleIf", visible: true },
        { name: "enableIf", visible: true }
      ]
    },
    "itemvalue[]@rows": {
      title: "Rules",
      tabs: [
        { name: "general", visible: false },
        { name: "visibleIf", visible: true }
      ]
    },
    "itemvalue[]@columns": {
      title: "Rules",
      tabs: [
        { name: "general", visible: false },
        { name: "visibleIf", visible: true }
      ]
    },
    checkbox: {
      properties: [
        { name: "hasSelectAll", tab: "choices" },
        { name: "selectAllText", tab: "choices" },
        { name: "hasNone", tab: "choices" },
        { name: "noneText", tab: "choices" }
      ]
    },
    radiogroup: {},
    dropdown: {
      properties: [
        "optionsCaption",
        { name: "choicesMin", tab: "choices" },
        { name: "choicesMax", tab: "choices" },
        { name: "choicesStep", tab: "choices" }
      ]
    },
    text: {
      properties: ["inputType", "placeHolder"],
      tabs: [{ name: "validators", index: 200 }]
    },
    boolean: {
      properties: ["label"]
    },
    expression: {
      properties: ["currency", "displayStyle", "format"],
      tabs: [{ name: "expression", index: 10 }]
    },
    matrixdropdowncolumn: {
      properties: [
        "isRequired",
        "cellType",
        "name",
        "title",
        { name: "totalType", tab: "totals" },
        { name: "totalDisplayStyle", tab: "totals" },
        { name: "totalCurrency", tab: "totals" },
        { name: "totalFormat", tab: "totals" },
        { name: "totalExpression", tab: "totals" }
      ]
    },
    "matrixdropdowncolumn@default": {
      tabs: [
        { name: "general", visible: false },
        { name: "visibleIf", index: 12 },
        { name: "enableIf", index: 20 },
        { name: "requiredIf", index: 30 },
        { name: "totals", index: 40 }
      ]
    },
    "matrixdropdowncolumn@checkbox": {
      properties: ["hasOther", "otherText", "choicesOrder", "colCount"],
      tabs: [
        { name: "choices", index: 10 },
        { name: "choicesByUrl", index: 11 },
        { name: "visibleIf", index: 12 },
        { name: "enableIf", index: 20 },
        { name: "requiredIf", index: 30 },
        { name: "totals", index: 40 }
      ]
    },
    "matrixdropdowncolumn@radiogroup": {
      properties: ["hasOther", "otherText", "choicesOrder", "colCount"],
      tabs: [
        { name: "choices", index: 10 },
        { name: "choicesByUrl", index: 11 },
        { name: "visibleIf", index: 12 },
        { name: "enableIf", index: 20 },
        { name: "requiredIf", index: 30 },
        { name: "totals", index: 40 }
      ]
    },
    "matrixdropdowncolumn@dropdown": {
      properties: ["hasOther", "otherText", "choicesOrder", "optionsCaption"],
      tabs: [
        { name: "choices", index: 10 },
        { name: "choicesByUrl", index: 11 },
        { name: "visibleIf", index: 12 },
        { name: "enableIf", index: 20 },
        { name: "requiredIf", index: 30 },
        { name: "totals", index: 40 }
      ]
    },
    "matrixdropdowncolumn@text": {
      properties: ["inputType", "placeHolder", "maxLength"],
      tabs: [
        { name: "validators", index: 10 },
        { name: "visibleIf", index: 12 },
        { name: "enableIf", index: 20 },
        { name: "requiredIf", index: 30 },
        { name: "totals", index: 40 }
      ]
    },
    "matrixdropdowncolumn@comment": {
      properties: ["rows", "placeHolder", "maxLength"],
      tabs: [
        { name: "validators", index: 10 },
        { name: "visibleIf", index: 12 },
        { name: "enableIf", index: 20 },
        { name: "requiredIf", index: 30 },
        { name: "totals", index: 40 }
      ]
    },
    "matrixdropdowncolumn@boolean": {
      properties: ["defaultValue"],
      tabs: [
        { name: "visibleIf", index: 12 },
        { name: "enableIf", index: 20 },
        { name: "requiredIf", index: 30 },
        { name: "totals", index: 40 }
      ]
    },
    "matrixdropdowncolumn@expression": {
      properties: ["name", "displayStyle", "currency"],
      tabs: [{ name: "expression", index: 10 }, { name: "totals", index: 40 }]
    },
    multipletextitem: {
      properties: [
        "inputType",
        "maxLength",
        "placeHolder",
        "requiredErrorText"
      ],
      tabs: [{ name: "validators", index: 10 }]
    },
    paneldynamic: {
      properties: [
        { name: "renderMode", category: "render" },
        { name: "allowAddPanel", category: "render" },
        { name: "allowRemovePanel", category: "render" },
        "panelAddText",
        "panelRemoveText"
      ],
      tabs: [{ name: "templateTitle", index: 10 }]
    },
    panel: {
      properties: ["name", "title", { name: "visible", category: "checks" }],
      tabs: [{ name: "visibleIf", index: 100 }]
    },
    page: {
      properties: [
        "name",
        "title",
        "description",
        { name: "visible", category: "checks" },
        "questionsOrder"
      ],
      tabs: [{ name: "visibleIf", index: 100 }]
    },
    survey: {
      properties: [
        "title",
        "description",
        "showTitle",
        "locale",
        "mode",
        "clearInvisibleValues",
        "cookieName",
        { name: "sendResultOnPageNext", category: "data" },
        { name: "storeOthersAsComment", category: "data" },
        { name: "showPageTitles", category: "page" },
        { name: "showPageNumbers", category: "page" },

        { name: "pagePrevText", tab: "navigation" },
        { name: "pageNextText", tab: "navigation" },
        { name: "completeText", tab: "navigation" },
        { name: "startSurveyText", tab: "navigation" },
        {
          name: "showNavigationButtons",
          tab: "navigation",
          category: "navbuttons"
        },
        { name: "showPrevButton", tab: "navigation", category: "navbuttons" },
        { name: "firstPageIsStarted", tab: "navigation", category: "navpages" },
        { name: "showCompletedPage", tab: "navigation", category: "navpages" },
        { name: "goNextPageAutomatic", tab: "navigation", category: "navopt" },
        { name: "showProgressBar", tab: "navigation", category: "navopt" },
        { name: "isSinglePage", tab: "navigation" },

        { name: "questionTitleLocation", tab: "question" },
        { name: "requiredText", tab: "question" },
        { name: "questionStartIndex", tab: "question" },
        { name: "showQuestionNumbers", tab: "question" },
        { name: "questionTitleTemplate", tab: "question" },
        { name: "questionErrorLocation", tab: "question" },
        {
          name: "focusFirstQuestionAutomatic",
          tab: "question"
        },
        { name: "questionsOrder", tab: "question" },

        { name: "maxTimeToFinish", tab: "timer" },
        { name: "maxTimeToFinishPage", tab: "timer" },
        { name: "showTimerPanel", tab: "timer", category: "check" },
        { name: "showTimerPanelMode", tab: "timer", category: "check" }
      ],
      tabs: [
        { name: "navigation", index: 10 },
        { name: "question", index: 20 },
        { name: "completedHtml", index: 70 },
        { name: "completedHtmlOnCondition", index: 75 },
        { name: "loadingHtml", index: 80 },
        { name: "timer", index: 90 },
        { name: "calculatedValues", index: 95 },
        { name: "triggers", index: 100 }
      ]
    }
  };
}
