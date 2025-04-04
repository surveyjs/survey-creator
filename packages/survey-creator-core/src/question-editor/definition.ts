export interface IPropertyEditorInfo {
  name: string;
  index?: number;
  title?: string;
  tab?: string;
}

export interface IPropertyTabInfo {
  name: string;
  index?: number;
  title?: string;
  visible?: boolean;
  parent?: string;
}

export interface ISurveyQuestionEditorDefinition {
  title?: string;
  properties?: Array<string | IPropertyEditorInfo>;
  tabs?: Array<IPropertyTabInfo>;
}

export interface ISurveyPropertiesDefinition {
  [key: string]: ISurveyQuestionEditorDefinition;
}

export interface ISurveyPropertyGridDefinition {
  autoGenerateProperties: boolean;
  classes: ISurveyPropertiesDefinition;
}

const defaultProperties: ISurveyPropertiesDefinition = {
  question: {
    properties: [
      "name",
      "title",
      "description",
      "visible",
      "readOnly",
      "isRequired",
      "showCommentArea",
      "commentText",
      "commentPlaceholder",
      { name: "visibleIf", tab: "logic" },
      { name: "enableIf", tab: "logic" },
      { name: "requiredIf", tab: "logic" },
      { name: "bindings", tab: "logic" },
      { name: "defaultValueExpression", tab: "logic" },
      { name: "resetValueIf", tab: "logic" },
      { name: "setValueIf", tab: "logic" },
      { name: "setValueExpression", tab: "logic" },
      { name: "page", tab: "layout" },
      { name: "startWithNewLine", tab: "layout" },
      { name: "showNumber", tab: "layout" },
      { name: "state", tab: "layout" },
      { name: "titleLocation", tab: "layout" },
      { name: "descriptionLocation", tab: "layout" },
      { name: "errorLocation", tab: "layout" },
      { name: "indent", tab: "layout" },
      {
        name: "width",
        tab: "layout",
      },
      {
        name: "minWidth",
        tab: "layout",
      },
      {
        name: "maxWidth",
        tab: "layout",
      },
      { name: "effectiveColSpan", tab: "layout" },
      { name: "valueName", tab: "data" },
      { name: "defaultValue", tab: "data" },
      { name: "correctAnswer", tab: "data" },
      { name: "useDisplayValuesInDynamicTexts", tab: "data" },
      { name: "defaultDisplayValue", tab: "data" },
      { name: "clearIfInvisible", tab: "data" },
      { name: "validators", tab: "validation" },
      { name: "requiredErrorText", tab: "validation" }
    ],
    tabs: [
      { name: "layout", index: 100 },
      { name: "logic", index: 200 },
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
      { name: "allowResize", tab: "layout" },
    ]
  },
  file: {
    properties: [
      "sourceType",
      "visible",
      "readOnly",
      "isRequired",
      "showCommentArea",
      "allowMultiple",
      { name: "showPreview" },
      "allowImagesPreview",
      "waitForUpload",
      "needConfirmRemoveFile",
      { name: "storeDataAsText" },
      "allowCameraAccess",
      "acceptedTypes",
      "maxSize",
      "imageHeight",
      "imageWidth",
      "filePlaceholder",
      "photoPlaceholder",
      "fileOrPhotoPlaceholder"
    ]
  },
  signaturepad: {
    properties: [
      "dataFormat",
      "signatureWidth",
      "signatureHeight",
      "signatureAutoScaleEnabled",
      "showPlaceholder",
      "placeholder",
      "placeholderReadOnly",
      "allowClear",
      "backgroundImage",
      "backgroundColor",
      "penMinWidth",
      "penMaxWidth",
      "penColor",
      "waitForUpload",
      { name: "storeDataAsText" },
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
      { name: "rowsVisibleIf", tab: "logic" },
      { name: "columnLayout", tab: "layout" },
      { name: "transposeData", tab: "layout" },
      { name: "horizontalScroll", tab: "layout" },
      { name: "columnColCount", tab: "layout" },
      { name: "columnMinWidth", tab: "layout" },
      { name: "cellErrorLocation", tab: "layout" },
      { name: "detailErrorLocation", tab: "layout" }
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
      "allowRowReorder",
      "rowCount",
      "minRowCount",
      "maxRowCount",
      "addRowButtonLocation",
      "addRowText",
      "removeRowText",
      "confirmDelete",
      "confirmDeleteText",
      "placeholder",
      { name: "hideColumnsIfEmpty", tab: "columns" },
      { name: "noRowsText", tab: "columns" },
      { name: "defaultRowValue", tab: "data" },
      { name: "copyDefaultValueFromLastEntry", tab: "data" },
      { name: "keyName", tab: "validation" },
      { name: "keyDuplicationError", tab: "validation" }
    ]
  },
  matrixdropdown: {
    properties: [
      "totalText",
      "placeholder",
      { name: "hideIfRowsEmpty", tab: "rows" },
      { name: "rowTitleWidth", tab: "layout" },
      { name: "keyDuplicationError", tab: "validation" }
    ]
  },
  matrix: {
    properties: [
      { name: "eachRowRequired", tab: "validation" },
      { name: "eachRowUnique", tab: "validation" },
      { name: "showHeader", tab: "layout" },
      { name: "showColumnHeader", tab: "layout" },
      { name: "verticalAlign", tab: "layout" },
      { name: "alternateRows", tab: "layout" },
      { name: "rowOrder", tab: "rows" },
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
      { name: "inputSize", tab: "layout" },
      { name: "itemErrorLocation", tab: "layout" }
    ],
    tabs: [{ name: "items", index: 10 }]
  },
  rating: {
    properties: [
      { name: "displayMode", tab: "rateValues" },
      { name: "rateCount", tab: "rateValues" },
      { name: "rateMin", tab: "rateValues" },
      { name: "rateMax", tab: "rateValues" },
      { name: "rateStep", tab: "rateValues" },
      { name: "minRateDescription", tab: "rateValues" },
      { name: "maxRateDescription", tab: "rateValues" },
      { name: "rateDescriptionLocation", tab: "rateValues" },
      { name: "displayRateDescriptionsAsExtremeItems", tab: "rateValues" },
    ],
    tabs: [{ name: "rateValues", index: 10 }]
  },
  selectbase: {
    properties: [
      { name: "choicesFromQuestion", tab: "choices" },
      { name: "choicesFromQuestionMode", tab: "choices" },
      { name: "choiceValuesFromQuestion", tab: "choices" },
      { name: "choiceTextsFromQuestion", tab: "choices" },
      { name: "choicesOrder", tab: "choices" },
      { name: "allowCustomChoices", tab: "choices" },
      { name: "colCount", tab: "layout" },
      { name: "textWrapEnabled", tab: "choices" },
      { name: "showOtherItem", tab: "choices" },
      { name: "otherText", tab: "choices" },
      { name: "otherPlaceholder", tab: "choices" },
      { name: "showNoneItem", tab: "choices" },
      { name: "noneText", tab: "choices" },
      { name: "showRefuseItem", tab: "choices" },
      { name: "refuseText", tab: "choices" },
      { name: "showDontKnowItem", tab: "choices" },
      { name: "dontKnowText", tab: "choices" },
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
      { name: "minSelectedChoices", tab: "choices" },
      { name: "maxSelectedChoices", tab: "choices" },
      { name: "separateSpecialChoices", tab: "choices" },
    ]
  },
  ranking: {
    properties: [
      { name: "selectToRankEnabled" },
      { name: "selectToRankAreasLayout" },
      { name: "minSelectedChoices", tab: "choices" },
      { name: "maxSelectedChoices", tab: "choices" }
    ]
  },
  radiogroup: {
    properties: [
      { name: "allowClear", tab: "choices" },
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
      { name: "allowClear", tab: "choices" },
      { name: "searchMode", tab: "choices" },
    ]
  },
  tagbox: {
    properties: [
      "closeOnSelect",
      "placeholder",
      { name: "searchEnabled", tab: "choices" },
      { name: "searchMode", tab: "choices" },
      { name: "hideSelectedItems", tab: "choices" },
      { name: "allowClear", tab: "choices" },
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
      "imageHeight",
      "imageWidth",
      "multiSelect",
      "showLabel",
    ]
  },
  image: {
    properties: [
      "imageLink",
      "contentMode",
      "imageFit",
      "imageHeight",
      "imageWidth",
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
      { name: "inputSize", tab: "layout" },
      { name: "inputTextAlignment", tab: "layout" },
      { name: "maxLength", tab: "validation" },
      { name: "minErrorText", tab: "validation" },
      { name: "maxErrorText", tab: "validation" },
      { name: "textUpdateMode", tab: "data" },
      { name: "maskType", tab: "mask" },
      { name: "maskSettings", tab: "mask" },
    ],
    tabs: [
      { name: "mask", index: 250 }
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
      "displayStyle",
      "currency",
      "format",
      "maximumFractionDigits",
      "minimumFractionDigits",
      "useGrouping"
    ]
  },
  "panellayoutcolumn": {
    properties: ["effectiveWidth", "questionTitleWidth"]
  },
  matrixdropdowncolumn: {
    properties: ["name", "title"]
  },
  "matrixdropdowncolumn@default": {
    properties: [
      "name",
      "title",
      "cellType",
      "visible",
      "readOnly",
      "isRequired",
      "isUnique",
      "showInMultipleColumns",
      "width",
      "minWidth",
      { name: "visibleIf", tab: "logic" },
      { name: "enableIf", tab: "logic" },
      { name: "requiredIf", tab: "logic" },
      { name: "defaultValueExpression", tab: "logic" },
      { name: "resetValueIf", tab: "logic" },
      { name: "setValueIf", tab: "logic" },
      { name: "setValueExpression", tab: "logic" },
      { name: "totalType", tab: "totals" },
      { name: "totalDisplayStyle", tab: "totals" },
      { name: "totalCurrency", tab: "totals" },
      { name: "totalFormat", tab: "totals" },
      { name: "totalExpression", tab: "totals" },
      { name: "validators", tab: "validation" },
      { name: "requiredErrorText", tab: "validation" },
      { name: "defaultDisplayValue", tab: "data" }
    ],
    tabs: [
      { name: "general", index: 5 },
      { name: "logic", index: 20 },
      { name: "data", index: 25 },
      { name: "totals", index: 40 },
      { name: "validation", index: 60 }
    ]
  },
  "matrixdropdowncolumn@checkbox": {
    properties: [
      { name: "choicesFromQuestion", tab: "choices" },
      { name: "choicesFromQuestionMode", tab: "choices" },
      { name: "choiceValuesFromQuestion", tab: "choices" },
      { name: "choiceTextsFromQuestion", tab: "choices" },
      { name: "showOtherItem", tab: "choices" },
      { name: "otherText", tab: "choices" },
      { name: "otherPlaceholder", tab: "choices" },
      { name: "choicesOrder", tab: "choices" },
      { name: "colCount", tab: "choices" },
      { name: "showSelectAllItem", tab: "choices" },
      { name: "showNoneItem", tab: "choices" },
      { name: "noneText", tab: "choices" },
      { name: "showRefuseItem", tab: "choices" },
      { name: "refuseText", tab: "choices" },
      { name: "showDontKnowItem", tab: "choices" },
      { name: "dontKnowText", tab: "choices" },
      { name: "minSelectedChoices", tab: "choices" },
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
      { name: "choicesFromQuestion", tab: "choices" },
      { name: "choicesFromQuestionMode", tab: "choices" },
      { name: "choiceValuesFromQuestion", tab: "choices" },
      { name: "choiceTextsFromQuestion", tab: "choices" },
      { name: "showOtherItem", tab: "choices" },
      { name: "otherText", tab: "choices" },
      { name: "otherPlaceholder", tab: "choices" },
      { name: "choicesOrder", tab: "choices" },
      { name: "colCount", tab: "choices" },
      { name: "showNoneItem", tab: "choices" },
      { name: "noneText", tab: "choices" },
      { name: "showRefuseItem", tab: "choices" },
      { name: "refuseText", tab: "choices" },
      { name: "showDontKnowItem", tab: "choices" },
      { name: "dontKnowText", tab: "choices" },
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
      "placeholder",
      { name: "choicesFromQuestion", tab: "choices" },
      { name: "choicesFromQuestionMode", tab: "choices" },
      { name: "choiceValuesFromQuestion", tab: "choices" },
      { name: "choiceTextsFromQuestion", tab: "choices" },
      { name: "showOtherItem", tab: "choices" },
      { name: "otherText", tab: "choices" },
      { name: "otherPlaceholder", tab: "choices" },
      { name: "choicesOrder", tab: "choices" },
      { name: "optionsCaption", tab: "choices" },
      { name: "showNoneItem", tab: "choices" },
      { name: "noneText", tab: "choices" },
      { name: "showRefuseItem", tab: "choices" },
      { name: "refuseText", tab: "choices" },
      { name: "showDontKnowItem", tab: "choices" },
      { name: "dontKnowText", tab: "choices" },
      { name: "choicesMin", tab: "choices" },
      { name: "choicesMax", tab: "choices" },
      { name: "choicesStep", tab: "choices" },
      { name: "allowClear", tab: "choices" },
      { name: "choicesVisibleIf", tab: "logic" },
      { name: "choicesEnableIf", tab: "logic" },
    ],
    tabs: [
      { name: "choices", index: 10 },
      { name: "choicesByUrl", index: 11 }
    ]
  },
  "matrixdropdowncolumn@tagbox": {
    properties: [
      "placeholder",
      { name: "choicesFromQuestion", tab: "choices" },
      { name: "choicesFromQuestionMode", tab: "choices" },
      { name: "choiceValuesFromQuestion", tab: "choices" },
      { name: "choiceTextsFromQuestion", tab: "choices" },
      { name: "showOtherItem", tab: "choices" },
      { name: "otherText", tab: "choices" },
      { name: "otherPlaceholder", tab: "choices" },
      { name: "choicesOrder", tab: "choices" },
      { name: "optionsCaption", tab: "choices" },
      { name: "showNoneItem", tab: "choices" },
      { name: "noneText", tab: "choices" },
      { name: "showRefuseItem", tab: "choices" },
      { name: "refuseText", tab: "choices" },
      { name: "showDontKnowItem", tab: "choices" },
      { name: "dontKnowText", tab: "choices" },
      { name: "choicesMin", tab: "choices" },
      { name: "choicesMax", tab: "choices" },
      { name: "choicesStep", tab: "choices" },
      { name: "allowClear", tab: "choices" },
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
      "maxLength",
      { name: "maskType", tab: "mask" },
      { name: "maskSettings", tab: "mask" },
    ],
    tabs: [
      { name: "mask", index: 20 }
    ]
  },
  "matrixdropdowncolumn@comment": {
    properties: ["rows", "placeholder ", "maxLength"]
  },
  "matrixdropdowncolumn@boolean": {
    properties: [
      { name: "labelTrue", tab: "data" },
      { name: "labelFalse", tab: "data" },
      { name: "valueTrue", tab: "data" },
      { name: "valueFalse", tab: "data" },
      { name: "defaultValue", tab: "data" }
    ],
    tabs: [{ name: "data", index: 25 }]
  },
  "matrixdropdowncolumn@expression": {
    properties: [
      "expression",
      "displayStyle",
      "currency"
    ]
  },
  "matrixdropdowncolumn@rating": {
    properties: [
      { name: "displayMode", tab: "rateValues" },
      { name: "rateType", tab: "rateValues" },
      { name: "rateCount", tab: "rateValues" },
      { name: "rateColorMode", tab: "rateValues" },
      { name: "scaleColorMode", tab: "rateValues" },
      { name: "autoGenerate", tab: "rateValues" },
      { name: "rateMin", tab: "rateValues" },
      { name: "rateMax", tab: "rateValues" },
      { name: "rateStep", tab: "rateValues" },
      { name: "rateValues", tab: "rateValues" },
      { name: "minRateDescription", tab: "rateValues" },
      { name: "maxRateDescription", tab: "rateValues" },
      { name: "rateDescriptionLocation", tab: "rateValues" },
      { name: "displayRateDescriptionsAsExtremeItems", tab: "rateValues" },

    ],
    tabs: [{ name: "rateValues", index: 5 }]
  },
  multipletextitem: {
    properties: [
      "name",
      "title",
      "inputType",
      "isRequired",
      "inputSize",
      "placeholder",
      "inputTextAlignment",
      { name: "maxLength", tab: "validation" },
      { name: "requiredErrorText", tab: "validation" },
      { name: "validators", tab: "validation" },
      { name: "defaultValueExpression", tab: "logic" },
      { name: "minValueExpression", tab: "logic" },
      { name: "maxValueExpression", tab: "logic" },
      { name: "maskType", tab: "mask" },
      { name: "maskSettings", tab: "mask" },
    ],
    tabs: [
      { name: "logic", index: 200 },
      { name: "mask", index: 250 },
      { name: "validation", index: 300 }
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
      "displayMode",
      "templateTabTitle",
      "tabTitlePlaceholder",
      "tabAlign",
      "panelCount",
      "minPanelCount",
      "maxPanelCount",
      "panelsState",
      { name: "allowAddPanel" },
      { name: "allowRemovePanel" },
      "addPanelText",
      "removePanelText",
      "templateTitle",
      "templateDescription",
      "noEntriesText",
      "confirmDelete",
      "confirmDeleteText",
      "prevPanelText",
      "nextPanelText",
      "showQuestionNumbers",
      "showRangeInProgress",
      "showProgressBar",
      "progressBarLocation",
      { name: "defaultPanelValue", tab: "data" },
      { name: "copyDefaultValueFromLastEntry", tab: "data" },
      { name: "templateQuestionTitleLocation", tab: "questionSettings" },
      { name: "templateQuestionTitleWidth", tab: "questionSettings" },
      { name: "templateErrorLocation", tab: "questionSettings" },
      { name: "removePanelButtonLocation", tab: "layout" },
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
      { name: "questionTitleLocation", tab: "questionSettings" },
      { name: "questionTitleWidth", tab: "questionSettings" },
      { name: "questionErrorLocation", tab: "questionSettings" },
      { name: "gridLayoutColumns", tab: "questionSettings", index: 900 },
    ],
    tabs: [
      { name: "questionSettings", index: 100 },
      { name: "logic", index: 200 },
      { name: "data", index: 300 },
      { name: "validation", index: 400 }
    ]
  },
  panel: {
    properties: [
      "isRequired",
      { name: "questionOrder", tab: "questionSettings" },
      { name: "innerIndent", tab: "questionSettings" },
      { name: "requiredErrorText", tab: "validation" },
      { name: "page", tab: "layout" },
      { name: "startWithNewLine", tab: "layout" },
      { name: "state", tab: "layout" },
      { name: "width", tab: "layout" },
      { name: "minWidth", tab: "layout" },
      { name: "maxWidth", tab: "layout" },
      { name: "effectiveColSpan", tab: "layout" },
      { name: "showNumber", tab: "numbering" },
      { name: "showQuestionNumbers", tab: "numbering" },
      { name: "questionStartIndex", tab: "numbering" }
    ],
    tabs: [
      { name: "layout", index: 150 },
      { name: "numbering", index: 350 }
    ]
  },
  page: {
    properties: [
      "navigationTitle",
      "navigationDescription",
      "timeLimit",
      "maxTimeToFinish",
      { name: "questionOrder", tab: "questionSettings" },
      { name: "showNavigationButtons", tab: "navigation" }
    ],
    tabs: [{ name: "navigation", index: 350 }, { name: "layout", visible: false }]
  },
  survey: {
    properties: [
      "title",
      "description",
      "showTitle",
      "readOnly",
      "locale",
      "cookieName",
      "widthMode",
      "width",
      "fitToContainer",

      { name: "questionsOnPageMode", tab: "navigation" },
      { name: "firstPageIsStartPage", tab: "navigation" },
      { name: "autoAdvanceEnabled", tab: "navigation" },
      { name: "autoAdvanceAllowComplete", tab: "navigation" },
      { name: "showNavigationButtons", tab: "navigation" },
      { name: "navigationButtonsLocation", tab: "navigation" },
      { name: "showPrevButton", tab: "navigation" },
      { name: "showProgressBar", tab: "navigation" },
      { name: "progressBarType", tab: "navigation" },
      { name: "progressBarLocation", tab: "navigation" },
      { name: "progressBarShowPageTitles", tab: "navigation" },
      { name: "progressBarShowPageNumbers", tab: "navigation" },
      { name: "showTOC", tab: "navigation" },
      { name: "tocLocation", tab: "navigation" },
      { name: "showPreviewBeforeComplete", tab: "navigation" },
      { name: "previewMode", tab: "navigation" },
      { name: "previewText", tab: "navigation" },
      { name: "editText", tab: "navigation" },
      { name: "startSurveyText", tab: "navigation" },
      { name: "pagePrevText", tab: "navigation" },
      { name: "pageNextText", tab: "navigation" },
      { name: "completeText", tab: "navigation" },

      { name: "questionOrder", tab: "question" },
      { name: "questionTitleLocation", tab: "question" },
      { name: "questionDescriptionLocation", tab: "question" },
      { name: "showQuestionNumbers", tab: "question" },
      { name: "questionTitlePattern", tab: "question" },
      { name: "requiredMark", tab: "question" },
      { name: "questionStartIndex", tab: "question" },
      { name: "questionErrorLocation", tab: "question" },
      {
        name: "autoFocusFirstQuestion",
        tab: "question"
      },
      { name: "maxTextLength", tab: "question" },
      { name: "maxCommentLength", tab: "question" },
      { name: "commentAreaRows", tab: "question" },
      { name: "autoGrowComment", tab: "question" },
      { name: "allowResizeComment", tab: "question" },
      { name: "showPageTitles", tab: "pages" },
      { name: "showPageNumbers", tab: "pages" },
      { name: "gridLayoutEnabled", tab: "pages" },

      { name: "calculatedValues", tab: "logic" },
      { name: "triggers", tab: "logic" },

      { name: "clearInvisibleValues", tab: "data" },
      { name: "textUpdateMode", tab: "data" },
      { name: "partialSendEnabled", tab: "data" },
      { name: "storeOthersAsComment", tab: "data" },

      { name: "autoFocusFirstError", tab: "validation" },
      { name: "checkErrorsMode", tab: "validation" },
      { name: "validateVisitedEmptyFields", tab: "validation" },

      { name: "navigateToUrl", tab: "showOnCompleted" },
      { name: "navigateToUrlOnCondition", tab: "showOnCompleted" },
      { name: "showCompletePage", tab: "showOnCompleted" },
      { name: "completedHtml", tab: "showOnCompleted" },
      { name: "completedHtmlOnCondition", tab: "showOnCompleted" },
      { name: "loadingHtml", tab: "showOnCompleted" },
      { name: "completedBeforeHtml", tab: "showOnCompleted" },

      { name: "showTimer", tab: "timer" },
      { name: "timerLocation", tab: "timer" },
      { name: "timeLimit", tab: "timer" },
      { name: "timeLimitPerPage", tab: "timer" },
      { name: "timerInfoMode", tab: "timer" },

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
  },
  choicesByUrl: {
    properties: [
      "url",
      "path",
      "valueName",
      "titleName",
      "allowEmptyResponse"
    ]
  },
  "patternmask@maskSettings": {
    properties: [
      "pattern",
      "saveMaskedValue",
    ]
  },
  "datetimemask@maskSettings": {
    properties: [
      "pattern",
      "min",
      "max",
      "saveMaskedValue",
    ]
  },
  "numericmask@maskSettings": {
    properties: [
      "min",
      "max",
      "precision",
      "decimalSeparator",
      "thousandsSeparator",
      "allowNegativeValues",
      "saveMaskedValue",
    ]
  },
  "currencymask@maskSettings": {
    properties: [
      "prefix",
      "suffix",
      "min",
      "max",
      "precision",
      "decimalSeparator",
      "thousandsSeparator",
      "allowNegativeValues",
      "saveMaskedValue",
    ]
  },
  "patternmask": {
    properties: ["pattern"]
  },
  "datetimemask": {
    properties: ["pattern"]
  },
  "currencymask": {
    properties: ["prefix", "suffix"]
  }
};

export const defaultPropertyGridDefinition: ISurveyPropertyGridDefinition = {
  autoGenerateProperties: true,
  classes: defaultProperties
};

export class SurveyQuestionEditorDefinition {
  public static definition: ISurveyPropertiesDefinition = defaultProperties;
}
