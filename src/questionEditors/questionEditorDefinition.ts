import * as Survey from "survey-knockout";

export interface ISurveyQuestionEditorDefinition {
  title?: string;
  properties?: Array<string | { name: string; title?: string; tab?: string }>;
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
        { name: "visible" },
        { name: "isRequired" },
        { name: "readOnly" },
        { name: "visibleIf", tab: "logic" },
        { name: "enableIf", tab: "logic" },
        { name: "requiredIf", tab: "logic" },
        { name: "page", tab: "layout" },
        { name: "startWithNewLine", tab: "layout" },
        { name: "titleLocation", tab: "layout" },
        { name: "descriptionLocation", tab: "layout" },
        { name: "indent", tab: "layout" },
        { name: "width", tab: "layout" },
        { name: "valueName", tab: "data" },
        { name: "defaultValue", tab: "data" },
        { name: "correctAnswer", tab: "data" },
        { name: "useDisplayValuesInTitle", tab: "data" },
        { name: "requiredErrorText", tab: "validation" },
        { name: "validators", tab: "validation" }
      ],
      tabs: [
        { name: "logic", index: 100 },
        { name: "layout", index: 200 },
        { name: "data", index: 300 },
        { name: "validation", index: 400 }
      ]
    },
    comment: {
      properties: [
        { name: "rows", tab: "layout" },
        { name: "cols", tab: "layout" },
        "placeHolder",
        { name: "maxLength", tab: "validation" }
      ]
    },
    file: {
      properties: [
        "allowMultiple",
        "allowImagesPreview",
        "acceptedTypes",
        { name: "showPreview" },
        { name: "storeDataAsText" },
        "maxSize",
        "imageHeight",
        "imageWidth",
        "waitForUpload"
      ]
    },
    html: {
      properties: ["html"]
    },
    matrixdropdownbase: {
      properties: [
        "cellType",
        "optionsCaption",
        { name: "showHeader", tab: "layout" },
        { name: "columnsVisibleIf", tab: "logic" },
        { name: "columnLayout", tab: "layout" },
        { name: "horizontalScroll", tab: "layout" },
        { name: "columnColCount", tab: "layout" },
        { name: "columnMinWidth", tab: "layout" }
      ],
      tabs: [
        { name: "columns", index: 10 },
        { name: "rows", index: 11 },
        { name: "choices", index: 12 }
      ]
    },
    matrixdynamic: {
      properties: [
        "rowCount",
        "minRowCount",
        "maxRowCount",
        "addRowLocation",
        "addRowText",
        "removeRowText",
        "confirmDelete",
        "confirmDeleteText",
        { name: "defaultRowValue", tab: "data" },
        { name: "defaultValueFromLastRow", tab: "data" },
        { name: "keyName", tab: "validation" },
        { name: "keyDuplicationError", tab: "validation" }
      ]
    },
    matrixdropdown: {
      properties: ["totalText", { name: "rowsVisibleIf", tab: "logic" }]
    },
    matrix: {
      properties: [
        { name: "isAllRowRequired", tab: "validation" },
        { name: "showHeader", tab: "layout" },
        { name: "rowsOrder", tab: "rows" },
        { name: "columnsVisibleIf", tab: "logic" },
        { name: "rowsVisibleIf", tab: "logic" }
      ],
      tabs: [
        { name: "columns", index: 10 },
        { name: "rows", index: 11 },
        { name: "cells", index: 500 }
      ]
    },
    multipletext: {
      properties: [
        { name: "colCount", tab: "layout" },
        { name: "itemSize", tab: "layout" }
      ],
      tabs: [{ name: "items", index: 10 }]
    },
    rating: {
      properties: [
        "hasComment",
        "commentText",
        { name: "rateMin", tab: "rateValues" },
        { name: "rateMax", tab: "rateValues" },
        { name: "rateStep", tab: "rateValues" },
        { name: "minRateDescription", tab: "rateValues" },
        { name: "maxRateDescription", tab: "rateValues" }
      ],
      tabs: [{ name: "rateValues", index: 10 }]
    },
    selectbase: {
      properties: [
        "hasComment",
        "commentText",
        { name: "choicesOrder", tab: "choices" },
        { name: "colCount", tab: "layout" },
        { name: "hasOther", tab: "choices" },
        { name: "otherText", tab: "choices" },
        { name: "otherPlaceHolder", tab: "choices" },
        { name: "hideIfChoicesEmpty", tab: "logic" },
        { name: "choicesVisibleIf", tab: "logic" },
        { name: "choicesEnableIf", tab: "logic" },
        { name: "otherErrorText", tab: "validation" }
      ],
      tabs: [
        { name: "choices", index: 10 },
        { name: "choicesByUrl", index: 11 }
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
    radiogroup: {
      properties: [{ name: "showClearButton", tab: "choices" }]
    },
    dropdown: {
      properties: [
        "optionsCaption",
        { name: "choicesMin", tab: "choices" },
        { name: "choicesMax", tab: "choices" },
        { name: "choicesStep", tab: "choices" },
        { name: "showOptionsCaption", tab: "choices" }
      ]
    },
    imagepicker: {
      properties: [
        "multiSelect",
        "showLabel",
        "contentMode",
        "imageFit",
        "imageHeight",
        "imageWidth"
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
    text: {
      properties: [
        "inputType",
        "placeHolder",
        { name: "size", tab: "layout" },
        { name: "maxLength", tab: "validation" }
      ]
    },
    boolean: {
      properties: [
        "label",
        "labelTrue",
        "labelFalse",
        "showTitle",
        { name: "valueTrue", tab: "data" },
        { name: "valueFalse", tab: "data" }
      ]
    },
    expression: {
      properties: [
        "expression",
        "currency",
        "displayStyle",
        "format",
        "maximumFractionDigits",
        "minimumFractionDigits",
        "useGrouping"
      ]
    },
    matrixdropdowncolumn: {
      properties: ["isRequired", "cellType", "name", "title"]
    },
    "matrixdropdowncolumn@default": {
      properties: [
        "name",
        "title",
        "isRequired",
        "width",
        { name: "visibleIf", tab: "logic" },
        { name: "enableIf", tab: "logic" },
        { name: "requiredIf", tab: "logic" },
        { name: "totalType", tab: "totals" },
        { name: "totalDisplayStyle", tab: "totals" },
        { name: "totalCurrency", tab: "totals" },
        { name: "totalFormat", tab: "totals" },
        { name: "totalExpression", tab: "totals" }
      ],
      tabs: [
        { name: "general", index: 5 },
        { name: "logic", index: 20 },
        { name: "totals", index: 40 }
      ]
    },
    "matrixdropdowncolumn@checkbox": {
      properties: [
        { name: "hasOther", tab: "choices" },
        { name: "otherText", tab: "choices" },
        { name: "choicesOrder", tab: "choices" },
        { name: "colCount", tab: "choices" }
      ],
      tabs: [
        { name: "choices", index: 10 },
        { name: "choicesByUrl", index: 11 }
      ]
    },
    "matrixdropdowncolumn@radiogroup": {
      properties: [
        { name: "hasOther", tab: "choices" },
        { name: "otherText", tab: "choices" },
        { name: "choicesOrder", tab: "choices" },
        { name: "colCount", tab: "choices" }
      ],
      tabs: [
        { name: "choices", index: 10 },
        { name: "choicesByUrl", index: 11 }
      ]
    },
    "matrixdropdowncolumn@dropdown": {
      properties: [
        { name: "hasOther", tab: "choices" },
        { name: "otherText", tab: "choices" },
        { name: "choicesOrder", tab: "choices" },
        { name: "optionsCaption", tab: "choices" }
      ],
      tabs: [
        { name: "choices", index: 10 },
        { name: "choicesByUrl", index: 11 }
      ]
    },
    "matrixdropdowncolumn@text": {
      properties: ["inputType", "placeHolder", "maxLength"],
      tabs: [{ name: "validators", index: 10 }]
    },
    "matrixdropdowncolumn@comment": {
      properties: ["rows", "placeHolder", "maxLength"],
      tabs: [{ name: "validators", index: 10 }]
    },
    "matrixdropdowncolumn@boolean": {
      properties: ["defaultValue"]
    },
    "matrixdropdowncolumn@expression": {
      properties: ["displayStyle", "currency"],
      tabs: [{ name: "expression", index: 10 }]
    },
    multipletextitem: {
      properties: ["inputType", "maxLength", "placeHolder", "requiredErrorText"]
    },
    "multipletext@items": {
      properties: ["isRequired", "name", "title"]
    },
    calculatedvalue: {
      properties: ["name", "expression", "includeIntoResult"]
    },
    "calculatedvalue@items": {
      properties: ["name", "expression"]
    },
    paneldynamic: {
      properties: [
        "renderMode",
        "panelCount",
        "minPanelCount",
        "maxPanelCount",
        "panelsState",
        { name: "allowAddPanel" },
        { name: "allowRemovePanel" },
        "panelAddText",
        "panelRemoveText",
        "templateTitle",
        "templateDescription",
        "confirmDelete",
        "confirmDeleteText",
        "panelPrevText",
        "panelNextText",
        "showQuestionNumbers",
        "showRangeInProgress",
        { name: "defaultPanelValue", tab: "data" },
        { name: "defaultValueFromLastPanel", tab: "data" },
        { name: "templateTitleLocation", tab: "layout" },
        { name: "keyName", tab: "validation" },
        { name: "keyDuplicationError", tab: "validation" }
      ]
    },
    panelbase: {
      properties: [
        "name",
        "title",
        "description",
        "visible",
        "readOnly",
        { name: "visibleIf", tab: "logic" },
        { name: "enableIf", tab: "logic" },
        { name: "questionTitleLocation", tab: "layout" }
      ],
      tabs: [
        { name: "logic", index: 100 },
        { name: "layout", index: 200 },
        { name: "data", index: 300 },
        { name: "validation", index: 400 }
      ]
    },
    panel: {
      properties: [
        "isRequired",
        "state",
        { name: "requiredErrorText", tab: "validation" },
        { name: "page", tab: "layout" },
        { name: "startWithNewLine", tab: "layout" },
        { name: "indent", tab: "layout" },
        { name: "innerIndent", tab: "layout" }
      ],
      tabs: [{ name: "validation", index: 400 }]
    },
    page: {
      properties: [
        "maxTimeToFinish",
        { name: "questionsOrder", tab: "layout" },
        { name: "navigationButtonsVisibility", tab: "layout" }
      ]
    },
    survey: {
      properties: [
        "title",
        "description",
        "showTitle",
        "locale",
        "mode",
        "cookieName",
        { name: "showPageTitles" },
        { name: "showPageNumbers" },

        { name: "pagePrevText", tab: "navigation" },
        { name: "pageNextText", tab: "navigation" },
        { name: "completeText", tab: "navigation" },
        { name: "startSurveyText", tab: "navigation" },
        {
          name: "showNavigationButtons",
          tab: "navigation"
        },
        { name: "showPrevButton", tab: "navigation" },
        { name: "firstPageIsStarted", tab: "navigation" },
        { name: "goNextPageAutomatic", tab: "navigation" },
        { name: "showProgressBar", tab: "navigation" },
        { name: "progressBarType", tab: "navigation" },
        { name: "questionsOnPageMode", tab: "navigation" },

        { name: "questionTitleLocation", tab: "question" },
        { name: "questionDescriptionLocation", tab: "question" },
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
        { name: "maxTextLength", tab: "question" },
        { name: "maxOthersLength", tab: "question" },

        { name: "calculatedValues", tab: "logic" },
        { name: "triggers", tab: "logic" },

        { name: "clearInvisibleValues", tab: "data" },
        { name: "textUpdateMode", tab: "data" },
        { name: "sendResultOnPageNext", tab: "data" },
        { name: "storeOthersAsComment", tab: "data" },

        { name: "focusOnFirstError", tab: "validation" },
        { name: "checkErrorsMode", tab: "validation" },

        { name: "navigateToUrl", tab: "showOnCompleted" },
        { name: "showCompletedPage", tab: "showOnCompleted" },
        { name: "completedHtml", tab: "showOnCompleted" },
        { name: "navigateToUrlOnCondition", tab: "showOnCompleted" },
        { name: "completedHtmlOnCondition", tab: "showOnCompleted" },
        { name: "loadingHtml", tab: "showOnCompleted" },
        { name: "completedBeforeHtml", tab: "showOnCompleted" },

        { name: "maxTimeToFinish", tab: "timer" },
        { name: "maxTimeToFinishPage", tab: "timer" },
        { name: "showTimerPanel", tab: "timer" },
        { name: "showTimerPanelMode", tab: "timer" }
      ],
      tabs: [
        { name: "navigation", index: 100 },
        { name: "question", index: 200 },
        { name: "logic", index: 300 },
        { name: "data", index: 400 },
        { name: "validation", index: 400 },
        { name: "showOnCompleted", index: 600 },
        { name: "timer", index: 700 }
      ]
    }
  };
}
