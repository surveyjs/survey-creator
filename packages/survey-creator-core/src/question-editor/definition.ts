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
  iconName?: string;
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
      "showTitle",
      "showCommentArea",
      "commentText",
      "commentPlaceholder",
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
      { name: "visibleIf", tab: "logic", index: 100 },
      { name: "enableIf", tab: "logic", index: 200 },
      { name: "requiredIf", tab: "logic", index: 300 },
      { name: "bindings", tab: "logic", index: 400 },
      { name: "defaultValueExpression", tab: "logic", index: 500 },
      { name: "resetValueIf", tab: "logic", index: 600 },
      { name: "setValueIf", tab: "logic", index: 700 },
      { name: "setValueExpression", tab: "logic", index: 800 },
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
      "placeholder",
      { name: "rows", tab: "layout" },
      { name: "autoGrow", tab: "layout" },
      { name: "allowResize", tab: "layout" },
      { name: "textUpdateMode", tab: "data" },
      { name: "maxLength", tab: "validation" },
    ]
  },
  file: {
    properties: [
      "sourceType",
      "allowMultiple",
      "maxFiles",
      { name: "showPreview" },
      "allowImagesPreview",
      "waitForUpload",
      "needConfirmRemoveFile",
      { name: "storeDataAsText" },
      "allowCameraAccess",
      "acceptedCategories",
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
      "detailPanelMode",
      "detailPanelShowOnAdding",
      "singleInputTitleTemplate",
      { name: "columnMinWidth", tab: "layout" },
      { name: "showHeader", tab: "layout" },
      { name: "verticalAlign", tab: "layout" },
      { name: "alternateRows", tab: "layout" },
      { name: "transposeData", tab: "layout" },
      { name: "columnColCount", tab: "layout" },
      { name: "cellErrorLocation", tab: "layout" },
      { name: "detailErrorLocation", tab: "layout" },
      { name: "columnsVisibleIf", tab: "logic", index: 1000 },
      { name: "rowsVisibleIf", tab: "logic", index: 1100 }
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
      "confirmDelete",
      "confirmDeleteText",
      "addRowButtonLocation",
      "addRowText",
      "removeRowText",
      "rowCount",
      "minRowCount",
      "maxRowCount",
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
      "cellType",
      { name: "rowOrder", tab: "rows" },
      { name: "hideIfRowsEmpty", tab: "rows" },
      { name: "columnMinWidth", tab: "layout" },
      { name: "rowTitleWidth", tab: "layout" },
      { name: "showHeader", tab: "layout" },
      { name: "verticalAlign", tab: "layout" },
      { name: "alternateRows", tab: "layout" },

      { name: "columnsVisibleIf", tab: "logic", index: 1000 },
      { name: "rowsVisibleIf", tab: "logic", index: 1100 },
      { name: "eachRowRequired", tab: "validation" },
      { name: "eachRowUnique", tab: "validation" }
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
  slider: {
    properties: [
      { name: "sliderType", tab: "sliderSettings" },
      { name: "min", tab: "sliderSettings" },
      { name: "max", tab: "sliderSettings" },
      { name: "step", tab: "sliderSettings" },
      // { name: "segmentCount", tab: "sliderSettings" },
      { name: "minRangeLength", tab: "sliderSettings" },
      { name: "maxRangeLength", tab: "sliderSettings" },
      { name: "showLabels", tab: "sliderSettings" },
      { name: "autoGenerate", tab: "sliderSettings" },
      { name: "labelCount", tab: "sliderSettings" },
      { name: "customLabels", tab: "sliderSettings" },
      { name: "labelFormat", tab: "sliderSettings" },
      { name: "tooltipVisibility", tab: "sliderSettings" },
      { name: "tooltipFormat", tab: "sliderSettings" },
      { name: "allowSwap", tab: "sliderSettings" },
      { name: "allowClear", tab: "sliderSettings" },
      { name: "minValueExpression", tab: "logic", index: 410 },
      { name: "maxValueExpression", tab: "logic", index: 420 },
    ],
    tabs: [{ name: "sliderSettings", index: 10 }]
  },
  selectbase: {
    properties: [
      { name: "choicesFromQuestion", tab: "choices" },
      { name: "choicesFromQuestionMode", tab: "choices" },
      { name: "choiceValuesFromQuestion", tab: "choices" },
      { name: "choiceTextsFromQuestion", tab: "choices" },
      { name: "choicesOrder", tab: "choices" },
      { name: "allowCustomChoices", tab: "choices" },
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
      { name: "separateSpecialChoices", tab: "choices" },
      { name: "colCount", tab: "layout" },
      { name: "hideIfChoicesEmpty", tab: "logic", index: 1000 },
      { name: "choicesVisibleIf", tab: "logic", index: 1100 },
      { name: "choicesEnableIf", tab: "logic", index: 1200 },
      { name: "otherErrorText", tab: "validation" },
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
    properties: ["visibleIf", "enableIf"],
    tabs: [{ name: "general" }]
  },
  "choiceitem[]@choices": {
    properties: ["visibleIf", "enableIf", "showCommentArea", "isCommentRequired", "commentPlaceholder"],
    tabs: [{ name: "general" }]
  },
  "imageitemvalue[]@choices": {
    properties: ["value", "text", "visibleIf", "enableIf", "imageLink"]
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
      { name: "minValueExpression", tab: "logic", index: 1000 },
      { name: "maxValueExpression", tab: "logic", index: 1100 },
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
  "matrixdropdowncolumn@slider": {
    properties: [
      { name: "sliderType", tab: "sliderSettings" },
      { name: "min", tab: "sliderSettings" },
      { name: "max", tab: "sliderSettings" },
      { name: "step", tab: "sliderSettings" },
      { name: "minRangeLength", tab: "sliderSettings" },
      { name: "maxRangeLength", tab: "sliderSettings" },
      { name: "showLabels", tab: "sliderSettings" },
      { name: "autoGenerate", tab: "sliderSettings" },
      { name: "labelCount", tab: "sliderSettings" },
      { name: "customLabels", tab: "sliderSettings" },
      { name: "labelFormat", tab: "sliderSettings" },
      { name: "tooltipVisibility", tab: "sliderSettings" },
      { name: "tooltipFormat", tab: "sliderSettings" },
      { name: "allowSwap", tab: "sliderSettings" },
      { name: "allowClear", tab: "sliderSettings" },
      { name: "minValueExpression", tab: "logic", index: 410 },
      { name: "maxValueExpression", tab: "logic", index: 420 },
    ],
    tabs: [{ name: "sliderSettings", index: 10 }]
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
      { name: "defaultValueExpression", tab: "logic", index: 1000 },
      { name: "minValueExpression", tab: "logic", index: 1100 },
      { name: "maxValueExpression", tab: "logic", index: 1200 },
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
      "confirmDelete",
      "confirmDeleteText",
      "addPanelText",
      "removePanelText",
      "templateTitle",
      "templateDescription",
      "noEntriesText",
      "prevPanelText",
      "nextPanelText",
      "showProgressBar",
      "progressBarLocation",
      { name: "defaultPanelValue", tab: "data" },
      { name: "copyDefaultValueFromLastEntry", tab: "data" },
      { name: "templateQuestionTitleLocation", tab: "questionSettings" },
      { name: "templateQuestionTitleWidth", tab: "questionSettings" },
      { name: "templateErrorLocation", tab: "questionSettings" },
      { name: "removePanelButtonLocation", tab: "layout" },
      { name: "showNumber", tab: "numbering" },
      { name: "showQuestionNumbers", tab: "numbering" },
      { name: "questionStartIndex", tab: "numbering" },
      { name: "keyName", tab: "validation" },
      { name: "keyDuplicationError", tab: "validation" }
    ],
    tabs: [
      { name: "numbering", index: 350 }
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
      { name: "questionOrder", tab: "questionSettings" },
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
      { name: "questionStartIndex", tab: "questionSettings" },
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
      { name: "progressBarInheritWidthFrom", tab: "navigation" },
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
