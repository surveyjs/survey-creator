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
        { "name": "text", "subitems": [] },
        {
          "name": "date",
          "title": "Date",
          "iconName": "icon-toolbox-calendar-24x24",
          "json": {
            "type": "text",
            "inputType": "date"
          }
        },
        {
          "name": "email",
          "title": "Email",
          "iconName": "icon-toolbox-email-24x24",
          "json": {
            "type": "text",
            "inputType": "email"
          }
        },
        {
          "name": "tel",
          "title": "Phone Number",
          "iconName": "icon-toolbox-phone-24x24",
          "json": {
            "type": "text",
            "inputType": "tel"
          }
        },
        { "name": "comment" },
        { "name": "matrix" },
        { "name": "image" },
      ],
      "categories": [
        {
          "category": "choice",
          "items": [
            "radiogroup",
            "rating",
            "slider",
            "checkbox",
            "dropdown",
            "boolean",
            "file",
          ]
        },
        {
          "category": "text",
          "items": [
            "text",
            "email",
            "tel",
            "date",
            "comment",
          ]
        },
        {
          "category": "matrix",
          "items": [
            "matrix"
          ]
        },
        {
          "category": "misc",
          "items": [
            "image"
          ]
        }
      ]
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
              { name: "correctAnswer", index: 100000 }
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
              "acceptedCategories",
              "acceptedTypes",
              "maxSize"
            ]
          },
          "matrix": {
            "properties": [
              "cellType",
              "columns",
              "rows",
              "rowOrder",
              "eachRowRequired",
              "eachRowUnique",
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
