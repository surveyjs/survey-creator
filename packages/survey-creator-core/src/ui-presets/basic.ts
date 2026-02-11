export const Basic = {
  presetName: "basic",
  json: {
    "toolbox": {
      "definition": [
        { "name": "radiogroup" },
        { "name": "rating" },
        { "name": "slider" },
        { "name": "checkbox" },
        { "name": "dropdown" },
        { "name": "boolean" },
        { "name": "file" },
        { "name": "text" },
        { "name": "comment" },
        { "name": "matrix" },
        { "name": "image" },
      ],
    },
    "tabs": {
      "items": [
        {
          "name": "designer",
          "iconName": "icon-config"
        },
        {
          "name": "preview",
          "iconName": "icon-preview"
        }
      ],
      "activeTab": "designer"
    },
    "propertyGrid": {
      "definition": {
        "autoGenerateProperties": false,
        "classes": {
          "survey": {
            "properties": [
              "title",
              "description",
              "cookieName",
              "showProgressBar",
              "progressBarType",
              "showPreviewBeforeComplete",
              "questionOrder",
              "showQuestionNumbers",
              "checkErrorsMode",
              "navigateToUrl",
              "showCompletePage",
              "completedHtml",
              "showTimer",
              "timeLimit",
            ]
          },
          "question": {
            "properties": [
              "name",
              "title",
              "description",
              "isRequired",
              "correctAnswer"
            ]
          },
          "comment": {
            "properties": [
              "maxLength"
            ]
          },
          "file": {
            "properties": [
              "allowMultiple",
              "acceptedTypes",
              "maxSize"
            ]
          },
          "matrix": {
            "properties": [
              "cellType",
              "rowOrder",
              "eachRowRequired",
              "eachRowUnique",
              "columns",
              "rows",
            ]
          },
          "rating": {
            "properties": [
              "rateType",
              "rateMin",
              "rateMax",
              "rateStep",
              "minRateDescription",
              "maxRateDescription"
            ]
          },
          "slider": {
            "properties": [
              "sliderType",
              "min",
              "max",
              "step",
              "minRangeLength",
              "maxRangeLength"
            ]
          },
          "selectbase": {
            "properties": [
              "choices",
              "choicesOrder",
              "showOtherItem",
              "showNoneItem"
            ]
          },
          "checkbox": {
            "properties": [
              "showSelectAllItem"
            ]
          },
          "image": {
            "properties": [
              "imageLink",
              "contentMode",
              "altText"
            ]
          },
          "text": {
            "properties": [
              "inputType",
              "min",
              "max",
              "step"
            ]
          },
          "boolean": {
            "properties": [
              "labelTrue",
              "labelFalse"
            ]
          }
        }
      }
    }
  }
} as const;

export default Basic;
