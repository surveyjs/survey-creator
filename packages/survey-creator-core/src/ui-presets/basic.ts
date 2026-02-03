export const Basic = {
  presetName: "basic",
  json: {
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
              "completedHtml",
              "showTimer",
              "timeLimit"
            ]
          },
          "question": {
            "properties": [
              "name",
              "title",
              "description",
              "isRequired",
              "defaultValue",
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
              "needConfirmRemoveFile",
              "acceptedTypes",
              "maxSize"
            ]
          },
          "matrix": {
            "properties": [
              "cellType",
              "eachRowRequired",
              "eachRowUnique"
            ]
          },
          "rating": {
            "properties": [
              "rateType",
              "rateMin",
              "rateMax",
              "rateStep"
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
