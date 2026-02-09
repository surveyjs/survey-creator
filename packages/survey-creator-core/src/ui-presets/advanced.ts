export const Advanced = {
  presetName: "advanced",
  json: {
    "tabs": {
      "items": [
        {
          "name": "designer",
          "iconName": "icon-config"
        },
        {
          "name": "preview",
          "iconName": "icon-preview"
        },
        {
          "name": "translation",
          "iconName": "icon-language"
        },
        {
          "name": "theme",
          "iconName": "icon-theme"
        }
      ],
      "activeTab": "designer"
    },
    "propertyGrid": {
      "definition": {
        "autoGenerateProperties": false,
        "classes": {
          question: {
            properties: [
              "name",
              "title",
              "description",
              "readOnly",
              "isRequired",
              "showTitle",
              "showCommentArea",
              { name: "page", tab: "layout" },
              { name: "startWithNewLine", tab: "layout" },
              { name: "showNumber", tab: "layout" },
              { name: "state", tab: "layout" },
              { name: "titleLocation", tab: "layout" },
              { name: "descriptionLocation", tab: "layout" },
              { name: "errorLocation", tab: "layout" },
              { name: "requiredIf", tab: "logic", index: 300 },
              { name: "validators", tab: "validation" },
            ],
            tabs: [
              { name: "layout", index: 100 },
              { name: "logic", index: 200 },
              { name: "validation", index: 400 }
            ]
          },
          comment: {
            properties: [
              { name: "rows", tab: "layout" },
              { name: "autoGrow", tab: "layout" },
              { name: "allowResize", tab: "layout" },
              { name: "maxLength", tab: "validation" },
            ]
          },
          file: {
            properties: [
              "sourceType",
              "allowImagesPreview",
              "waitForUpload",
              "needConfirmRemoveFile",
              "acceptedTypes",
              "maxSize",
            ]
          },
          signaturepad: {
            properties: [
              "allowClear",
              "waitForUpload",
            ]
          },
          html: {
            properties: ["html"]
          },
          matrixdropdownbase: {
            properties: [
              "cellType",
              { name: "columns", tab: "columns" },
              { name: "verticalAlign", tab: "layout" },
              { name: "alternateRows", tab: "layout" },
              { name: "cellErrorLocation", tab: "layout" },
            ],
          },
          matrixdynamic: {
            properties: [
              "allowAddRows",
              "allowRemoveRows",
              "allowRowReorder",
              "confirmDelete",
              "addRowButtonLocation",
              "rowCount",
              "minRowCount",
              "maxRowCount",
              { name: "keyName", tab: "validation" },
            ]
          },
          matrixdropdown: {
            properties: [{ name: "rows", tab: "rows" }],
          },
          matrix: {
            properties: [
              "cellType",
              { name: "alternateRows", tab: "layout" },
              { name: "eachRowRequired", tab: "validation" },
              { name: "eachRowUnique", tab: "validation" },
            ],
          },
          multipletext: {
            properties: [
              { name: "items", tab: "items" },
              { name: "itemTitleWidth", tab: "layout" },
            ]
          },
          rating: {
            properties: [
              { name: "rateType", tab: "rateValues" },
              { name: "rateMin", tab: "rateValues" },
              { name: "rateMax", tab: "rateValues" },
              { name: "rateStep", tab: "rateValues" },
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
              { name: "tooltipVisibility", tab: "sliderSettings" },
              { name: "allowSwap", tab: "sliderSettings" },
              { name: "allowClear", tab: "sliderSettings" },
            ],
            tabs: [{ name: "sliderSettings", index: 10 }]
          },
          selectbase: {
            properties: [
              { name: "choices", tab: "choices" },
              { name: "choicesFromQuestion", tab: "choices" },
              { name: "choicesFromQuestionMode", tab: "choices" },
              { name: "allowCustomChoices", tab: "choices" },
              { name: "textWrapEnabled", tab: "choices" },
              { name: "showOtherItem", tab: "choices" },
              { name: "showNoneItem", tab: "choices" },
              { name: "colCount", tab: "layout" },
            ],
            tabs: [
              { name: "choices", index: 10 },
            ]
          },
          checkbox: {
            properties: [
              { name: "showSelectAllItem", tab: "choices" },
              { name: "minSelectedChoices", tab: "choices" },
              { name: "maxSelectedChoices", tab: "choices" },
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
            properties: []
          },
          dropdown: {
            properties: [
              "autocomplete",
              { name: "allowClear", tab: "choices" },
              { name: "searchMode", tab: "choices" },
            ]
          },
          tagbox: {
            properties: [
              "closeOnSelect",
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
              "multiSelect",
              "showLabel",
            ]
          },
          image: {
            properties: [
              "imageLink",
              "contentMode",
              "imageFit",
              "text"
            ]
          },
          "itemvalue[]@choices": {
            properties: ["visibleIf", "enableIf"],
            tabs: [{ name: "general" }]
          },
          "choiceitem[]@choices": {
            properties: ["visibleIf", "enableIf", "showCommentArea", "isExclusive"],
            tabs: [{ name: "general" }]
          },
          "imageitemvalue[]@choices": {
            properties: ["visibleIf", "enableIf",]
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
              "autocomplete",
              { name: "inputTextAlignment", tab: "layout" },
              { name: "maskType", tab: "mask" },
              { name: "maskSettings", tab: "mask" },
            ],
            tabs: [
              { name: "mask", index: 250 }
            ]
          },
          boolean: {
            properties: [
              "labelTrue",
              "labelFalse",
              "swapOrder",
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
              "useGrouping",
              { name: "precision", tab: "data" },
            ]
          },
          paneldynamic: {
            properties: [
              "displayMode",
              "tabAlign",
              "panelCount",
              "minPanelCount",
              "maxPanelCount",
              { name: "allowAddPanel" },
              { name: "allowRemovePanel" },
              "confirmDelete",
              { name: "templateQuestionTitleLocation", tab: "questionSettings" },
              { name: "showQuestionNumbers", tab: "numbering" },
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
              { name: "visibleIf", tab: "logic" },
              { name: "questionTitleLocation", tab: "questionSettings" },
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
              { name: "startWithNewLine", tab: "layout" },
              { name: "showNumber", tab: "numbering" },
              { name: "showQuestionNumbers", tab: "numbering" },
            ],
            tabs: [
              { name: "layout", index: 150 },
              { name: "numbering", index: 350 }
            ]
          },
          page: {
            properties: [],
          },
          survey: {
            properties: [
              "title",
              "description",
              "cookieName",
              "locale",
              { name: "questionsOnPageMode", tab: "navigation" },
              //{ name: "firstPageIsStartPage", tab: "navigation" },
              { name: "autoAdvanceEnabled", tab: "navigation" },
              { name: "autoAdvanceAllowComplete", tab: "navigation" },
              //{ name: "showNavigationButtons", tab: "navigation" },
              { name: "navigationButtonsLocation", tab: "navigation" },
              { name: "showPrevButton", tab: "navigation" },
              { name: "progressBarLocation", tab: "navigation" },
              { name: "progressBarShowPageTitles", tab: "navigation" },
              { name: "progressBarShowPageNumbers", tab: "navigation" },
              { name: "showTOC", tab: "navigation" },
              { name: "tocLocation", tab: "navigation" },
              { name: "showPreviewBeforeComplete", tab: "navigation" },
              { name: "previewMode", tab: "navigation" },

              { name: "questionOrder", tab: "question" },
              { name: "questionTitleLocation", tab: "question" },
              { name: "questionDescriptionLocation", tab: "question" },
              { name: "showQuestionNumbers", tab: "question" },
              { name: "questionErrorLocation", tab: "question" },

              { name: "showPageTitles", tab: "pages" },
              { name: "showPageNumbers", tab: "pages" },

              { name: "checkErrorsMode", tab: "validation" },

              { name: "navigateToUrl", tab: "showOnCompleted" },
              { name: "navigateToUrlOnCondition", tab: "showOnCompleted" },
              { name: "showCompletePage", tab: "showOnCompleted" },
              { name: "completedHtml", tab: "showOnCompleted" },
              { name: "completedHtmlOnCondition", tab: "showOnCompleted" },

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
              { name: "validation", index: 500 },
              { name: "showOnCompleted", index: 600 },
              { name: "timer", index: 700 }
            ]
          },
          "matrixdropdowncolumn@default": {
            properties: [
              "name",
              "title",
              "cellType",
              "isRequired",
              "isUnique",
              { name: "requiredIf", tab: "logic" },
              { name: "validators", tab: "validation" },
            ],
            tabs: [
              { name: "general", index: 5 },
              { name: "logic", index: 20 },
              { name: "validation", index: 60 }
            ]
          },
          "matrixdropdowncolumn@checkbox": {
            properties: [
              { name: "choices", tab: "choices", index: 0 },
              { name: "choicesFromQuestion", tab: "choices" },
              { name: "choicesFromQuestionMode", tab: "choices" },
              { name: "showOtherItem", tab: "choices" },
              { name: "colCount", tab: "choices" },
              { name: "showSelectAllItem", tab: "choices" },
              { name: "minSelectedChoices", tab: "choices" },
              { name: "maxSelectedChoices", tab: "choices" },
            ],
            tabs: [
              { name: "choices", index: 10 },
              { name: "choicesByUrl", index: 11 }
            ]
          },
          "matrixdropdowncolumn@radiogroup": {
            properties: [
              { name: "choices", tab: "choices", index: 0 },
              { name: "choicesFromQuestion", tab: "choices" },
              { name: "choicesFromQuestionMode", tab: "choices" },
              { name: "showOtherItem", tab: "choices" },
              { name: "colCount", tab: "choices" },
            ],
            tabs: [
              { name: "choices", index: 10 },
              { name: "choicesByUrl", index: 11 }
            ]
          },
          "matrixdropdowncolumn@dropdown": {
            properties: [
              { name: "choices", tab: "choices", index: 0 },
              { name: "choicesFromQuestion", tab: "choices" },
              { name: "choicesFromQuestionMode", tab: "choices" },
              { name: "showOtherItem", tab: "choices" },
              { name: "colCount", tab: "choices" },
              { name: "allowClear", tab: "choices" },
            ],
            tabs: [
              { name: "choices", index: 10 },
              { name: "choicesByUrl", index: 11 }
            ]
          },
          "matrixdropdowncolumn@tagbox": {
            properties: [
              { name: "choices", tab: "choices", index: 0 },
              { name: "choicesFromQuestion", tab: "choices" },
              { name: "choicesFromQuestionMode", tab: "choices" },
              { name: "showOtherItem", tab: "choices" },
              { name: "colCount", tab: "choices" },
              { name: "allowClear", tab: "choices" },
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
              { name: "maskType", tab: "mask" },
              { name: "maskSettings", tab: "mask" },
            ],
            tabs: [
              { name: "mask", index: 20 }
            ]
          },
          "matrixdropdowncolumn@comment": {
            properties: ["rows", "maxLength"]
          },
          "matrixdropdowncolumn@boolean": {
            properties: [
              { name: "labelTrue", tab: "data" },
              { name: "labelFalse", tab: "data" },
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
              { name: "rateType", tab: "rateValues" },
              { name: "rateMin", tab: "rateValues" },
              { name: "rateMax", tab: "rateValues" },
              { name: "rateStep", tab: "rateValues" },
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
              { name: "tooltipVisibility", tab: "sliderSettings" },
              { name: "allowSwap", tab: "sliderSettings" },
              { name: "allowClear", tab: "sliderSettings" },
            ],
            tabs: [{ name: "sliderSettings", index: 10 }]
          },
          multipletextitem: {
            properties: [
              "name",
              "title",
              "inputType",
              "isRequired",
              "inputTextAlignment",
              { name: "maskType", tab: "mask" },
              { name: "maskSettings", tab: "mask" },
            ],
            tabs: [
              { name: "mask", index: 250 }
            ]
          },
        }
      }
    }
  }
}as const;

export default Advanced;

