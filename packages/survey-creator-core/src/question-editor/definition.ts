export interface ISurveyQuestionEditorDefinition {
  title?: string;
  properties?: Array<string | IPropertyEditorInfo>;
  tabs?: Array<IPropertyTabInfo>;
}
export interface IPropertyEditorInfo {
  name: string;
  title?: string;
  tab?: string;
  placeholder?: string;
}

export interface IPropertyTabInfo {
  name: string;
  index?: number;
  title?: string;
  visible?: boolean;
}
export class SurveyQuestionEditorDefinition {
  public static definition: { [key: string]: ISurveyQuestionEditorDefinition } = {
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
        { name: "bindings", tab: "logic" },
        { name: "defaultValueExpression", tab: "logic" },
        { name: "page", tab: "layout" },
        { name: "startWithNewLine", tab: "layout" },
        { name: "hideNumber", tab: "layout" },
        { name: "state", tab: "layout" },
        { name: "titleLocation", tab: "layout" },
        { name: "descriptionLocation", tab: "layout" },
        { name: "indent", tab: "layout" },
        { name: "width", tab: "layout" },
        { name: "minWidth", tab: "layout" },
        { name: "maxWidth", tab: "layout" },
        { name: "valueName", tab: "data" },
        { name: "defaultValue", tab: "data" },
        { name: "correctAnswer", tab: "data" },
        { name: "useDisplayValuesInDynamicTexts", tab: "data" },
        { name: "clearIfInvisible", tab: "data" },
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
        "placeholder",
        { name: "maxLength", tab: "validation" },
        { name: "textUpdateMode", tab: "data" },
        { name: "autoGrow", tab: "layout" },
      ]
    },
    file: {
      properties: [
        "showCommentArea",
        "commentText",
        "commentPlaceholder",
        "allowMultiple",
        "allowImagesPreview",
        "acceptedTypes",
        { name: "showPreview" },
        { name: "storeDataAsText" },
        "maxSize",
        "imageHeight",
        "imageWidth",
        "waitForUpload",
        "needConfirmRemoveFile"
      ]
    },
    html: {
      properties: ["html"]
    },
    matrixdropdownbase: {
      properties: [
        "cellType",
        "optionsCaption",
        "detailPanelMode",
        "detailPanelShowOnAdding",
        { name: "showHeader", tab: "layout" },
        { name: "showColumnHeader", tab: "layout" },
        { name: "verticalAlign", tab: "layout" },
        { name: "alternateRows", tab: "layout" },
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
        "allowAddRows",
        "allowRemoveRows",
        "allowRowsDragAndDrop",
        "rowCount",
        "minRowCount",
        "maxRowCount",
        "addRowLocation",
        "addRowText",
        "removeRowText",
        "confirmDelete",
        "confirmDeleteText",
        "placeholder",
        { name: "hideColumnsIfEmpty", tab: "columns" },
        { name: "emptyRowsText", tab: "columns" },
        { name: "defaultRowValue", tab: "data" },
        { name: "defaultValueFromLastRow", tab: "data" },
        { name: "keyName", tab: "validation" },
        { name: "keyDuplicationError", tab: "validation" }
      ]
    },
    matrixdropdown: {
      properties: [
        "totalText",
        "placeholder",
        { name: "hideIfRowsEmpty", tab: "rows" },
        { name: "rowsVisibleIf", tab: "logic" },
        { name: "rowTitleWidth", tab: "layout" },
        { name: "keyDuplicationError", tab: "validation" }
      ]
    },
    matrix: {
      properties: [
        { name: "isAllRowRequired", tab: "validation" },
        { name: "showHeader", tab: "layout" },
        { name: "showColumnHeader", tab: "layout" },
        { name: "verticalAlign", tab: "layout" },
        { name: "alternateRows", tab: "layout" },
        { name: "rowsOrder", tab: "rows" },
        { name: "hideIfRowsEmpty", tab: "rows" },
        { name: "columnsVisibleIf", tab: "logic" },
        { name: "rowsVisibleIf", tab: "logic" },
        { name: "columnMinWidth", tab: "layout" },
        { name: "rowTitleWidth", tab: "layout" }
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
        "showCommentArea",
        "commentText",
        "commentPlaceholder",
        { name: "displayMode", tab: "layout" },
        { name: "rateMin", tab: "rateValues" },
        { name: "rateMax", tab: "rateValues" },
        { name: "rateStep", tab: "rateValues" },
        { name: "minRateDescription", tab: "rateValues" },
        { name: "maxRateDescription", tab: "rateValues" },
        { name: "displayRateDescriptionsAsExtremeItems", tab: "rateValues" },
      ],
      tabs: [{ name: "rateValues", index: 10 }]
    },
    selectbase: {
      properties: [
        "showCommentArea",
        "commentText",
        "commentPlaceholder",
        { name: "choicesFromQuestion", tab: "choices" },
        { name: "choicesFromQuestionMode", tab: "choices" },
        { name: "choicesOrder", tab: "choices" },
        { name: "colCount", tab: "layout" },
        { name: "showOtherItem", tab: "choices" },
        { name: "otherText", tab: "choices" },
        { name: "otherPlaceholder", tab: "choices" },
        { name: "showNoneItem", tab: "choices" },
        { name: "noneText", tab: "choices" },
        { name: "hideIfChoicesEmpty", tab: "logic" },
        { name: "choicesVisibleIf", tab: "logic" },
        { name: "choicesEnableIf", tab: "logic" },
        { name: "otherErrorText", tab: "validation" },
        { name: "separateSpecialChoices", tab: "choices" },
      ],
      tabs: [
        { name: "choices", index: 10 },
        { name: "choicesByUrl", index: 11 }
      ]
    },
    checkbox: {
      properties: [
        { name: "showSelectAllItem", tab: "choices" },
        { name: "selectAllText", tab: "choices" },
        { name: "maxSelectedChoices", tab: "choices" },
        { name: "separateSpecialChoices", tab: "choices" },
      ]
    },
    radiogroup: {
      properties: [
        { name: "showClearButton", tab: "choices" },
        { name: "separateSpecialChoices", tab: "choices" },
      ]
    },
    dropdown: {
      properties: [
        "placeholder",
        "autocomplete",
        { name: "choicesMin", tab: "choices" },
        { name: "choicesMax", tab: "choices" },
        { name: "choicesStep", tab: "choices" },
        { name: "allowClear", tab: "choices" }
      ]
    },
    tagbox: {
      properties: [
        "closeOnSelect",
        "placeholder",
        { name: "searchEnabled", tab: "layout" },
        { name: "hideSelectedItems", tab: "layout" },
        { name: "allowClear", tab: "choices" }
      ]
    },
    imagepicker: {
      properties: [
        "contentMode",
        "imageFit",
        "isResponsive",
        "minImageWidth",
        "maxImageWidth",
        "minImageHeight",
        "maxImageHeight",
        { name: "imageHeight", placeholder: "auto" },
        { name: "imageWidth", placeholder: "auto" },
        "multiSelect",
        "showLabel",
      ]
    },
    image: {
      properties: [
        "imageLink",
        "contentMode",
        "imageFit",
        { name: "imageHeight", placeholder: "auto" },
        { name: "imageWidth", placeholder: "auto" },
        "text"
      ]
    },
    "itemvalue[]@choices": {
      properties: [{ name: "visibleIf" }, { name: "enableIf" }],
      tabs: [{ name: "general" }]
    },
    "itemvalue[]@rows": {
      properties: [{ name: "visibleIf" }, { name: "enableIf" }],
      tabs: [{ name: "general" }]
    },
    "itemvalue[]@columns": {
      properties: [{ name: "visibleIf" }, { name: "enableIf" }],
      tabs: [{ name: "general" }]
    },
    text: {
      properties: [
        "inputType",
        "min",
        "max",
        "step",
        "placeholder",
        "autocomplete",
        "dataList",
        { name: "minValueExpression", tab: "logic" },
        { name: "maxValueExpression", tab: "logic" },
        { name: "size", tab: "layout" },
        { name: "maxLength", tab: "validation" },
        { name: "minErrorText", tab: "validation" },
        { name: "maxErrorText", tab: "validation" },
        { name: "textUpdateMode", tab: "data" }
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
      properties: ["name", "title"]
    },
    "matrixdropdowncolumn@default": {
      properties: [
        "cellType",
        "name",
        "title",
        "isRequired",
        "readOnly",
        "isUnique",
        "showInMultipleColumns",
        "width",
        "minWidth",
        { name: "visibleIf", tab: "logic" },
        { name: "enableIf", tab: "logic" },
        { name: "requiredIf", tab: "logic" },
        { name: "defaultValueExpression", tab: "logic" },
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
        { name: "showOtherItem", tab: "choices" },
        { name: "otherText", tab: "choices" },
        { name: "choicesOrder", tab: "choices" },
        { name: "colCount", tab: "choices" },
        { name: "showSelectAllItem", tab: "choices" },
        { name: "showNoneItem", tab: "choices" },
        { name: "noneText", tab: "choices" },
        { name: "maxSelectedChoices", tab: "choices" },
        { name: "selectAllText", tab: "choices" },
        { name: "choicesVisibleIf", tab: "logic" },
        { name: "choicesEnableIf", tab: "logic" },
      ],
      tabs: [
        { name: "choices", index: 10 },
        { name: "choicesByUrl", index: 11 }
      ]
    },
    "matrixdropdowncolumn@radiogroup": {
      properties: [
        { name: "showOtherItem", tab: "choices" },
        { name: "otherText", tab: "choices" },
        { name: "choicesOrder", tab: "choices" },
        { name: "colCount", tab: "choices" },
        { name: "showNoneItem", tab: "choices" },
        { name: "noneText", tab: "choices" },
        { name: "choicesVisibleIf", tab: "logic" },
        { name: "choicesEnableIf", tab: "logic" },
      ],
      tabs: [
        { name: "choices", index: 10 },
        { name: "choicesByUrl", index: 11 }
      ]
    },
    "matrixdropdowncolumn@dropdown": {
      properties: [
        { name: "showOtherItem", tab: "choices" },
        { name: "otherText", tab: "choices" },
        { name: "choicesOrder", tab: "choices" },
        { name: "optionsCaption", tab: "choices" },
        { name: "showNoneItem", tab: "choices" },
        { name: "noneText", tab: "choices" },
        { name: "choicesVisibleIf", tab: "logic" },
        { name: "choicesEnableIf", tab: "logic" },
      ],
      tabs: [
        { name: "choices", index: 10 },
        { name: "choicesByUrl", index: 11 }
      ]
    },
    "matrixdropdowncolumn@text": {
      properties: [
        "inputType",
        "min",
        "max",
        "step",
        "placeholder",
        "dataList",
        "maxLength"
      ],
      tabs: [{ name: "validators", index: 10 }]
    },
    "matrixdropdowncolumn@comment": {
      properties: ["rows", "placeholder", "maxLength"],
      tabs: [{ name: "validators", index: 10 }]
    },
    "matrixdropdowncolumn@boolean": {
      properties: [
        "defaultValue",
        "labelTrue",
        "labelFalse",
        "valueTrue",
        "valueFalse"
      ]
    },
    "matrixdropdowncolumn@expression": {
      properties: ["displayStyle", "currency"],
      tabs: [{ name: "expression", index: 10 }]
    },
    "matrixdropdowncolumn@rating": {
      properties: [
        "rateValues",
        { name: "rateMin", tab: "rateValues" },
        { name: "rateMax", tab: "rateValues" },
        { name: "rateStep", tab: "rateValues" },
        { name: "minRateDescription", tab: "rateValues" },
        { name: "maxRateDescription", tab: "rateValues" }
      ],
      tabs: [{ name: "rateValues", index: 5 }]
    },
    multipletextitem: {
      properties: [
        "inputType",
        "name",
        "title",
        "isRequired",
        "maxLength",
        "size",
        "placeholder",
        "requiredErrorText",
        "validators"
      ]
    },
    "multipletext@items": {
      properties: ["name", "title"]
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
        "noEntriesText",
        "confirmDelete",
        "confirmDeleteText",
        "panelPrevText",
        "panelNextText",
        "showQuestionNumbers",
        "showRangeInProgress",
        { name: "defaultPanelValue", tab: "data" },
        { name: "defaultValueFromLastPanel", tab: "data" },
        { name: "templateTitleLocation", tab: "layout" },
        { name: "panelRemoveButtonLocation", tab: "layout" },
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
        { name: "requiredIf", tab: "logic" },
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
        { name: "requiredErrorText", tab: "validation" },
        { name: "page", tab: "layout" },
        { name: "startWithNewLine", tab: "layout" },
        { name: "state", tab: "layout" },
        { name: "questionsOrder", tab: "layout" },
        { name: "indent", tab: "layout" },
        { name: "innerIndent", tab: "layout" },
        { name: "width", tab: "layout" },
        { name: "showNumber", tab: "numbering" },
        { name: "showQuestionNumbers", tab: "numbering" },
        { name: "questionStartIndex", tab: "numbering" },
        { name: "minWidth", tab: "layout" },
        { name: "maxWidth", tab: "layout" },
      ],
      tabs: [{ name: "numbering", index: 350 }]
    },
    page: {
      properties: [
        "navigationTitle",
        "navigationDescription",
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
        "widthMode",
        "width",

        { name: "showPreviewBeforeComplete", tab: "navigation" },
        { name: "pagePrevText", tab: "navigation" },
        { name: "pageNextText", tab: "navigation" },
        { name: "completeText", tab: "navigation" },
        { name: "previewText", tab: "navigation" },
        { name: "editText", tab: "navigation" },
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
        { name: "showQuestionNumbers", tab: "question" },
        { name: "questionTitlePattern", tab: "question" },
        { name: "requiredText", tab: "question" },
        { name: "questionStartIndex", tab: "question" },
        { name: "questionErrorLocation", tab: "question" },
        {
          name: "focusFirstQuestionAutomatic",
          tab: "question"
        },
        { name: "questionsOrder", tab: "question" },
        { name: "maxTextLength", tab: "question" },
        { name: "maxOthersLength", tab: "question" },
        { name: "autoGrowComment", tab: "question" },

        { name: "showPageTitles", tab: "pages" },
        { name: "showPageNumbers", tab: "pages" },

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
        { name: "showTimerPanelMode", tab: "timer" },

        { name: "logo", tab: "logo" },
        { name: "logoPosition", tab: "logo" },
        { name: "logoWidth", tab: "logo" },
        { name: "logoHeight", tab: "logo" },
        { name: "logoFit", tab: "logo" }
      ],
      tabs: [
        { name: "logo", index: 50 },
        { name: "navigation", index: 100 },
        { name: "question", index: 200 },
        { name: "pages", index: 250 },
        { name: "logic", index: 300 },
        { name: "data", index: 400 },
        { name: "validation", index: 500 },
        { name: "showOnCompleted", index: 600 },
        { name: "timer", index: 700 }
      ]
    },
    "page@survey": {
      properties: ["name", "title"]
    }
  };
}
