---
title: Customize Survey Creation Process | SurveyJS
description: Tailor your survey design process to your specific needs by implementing some customized functionality in Survey Creator. For example, you can manage the availability of adorners (design-surface controls), perform element customization on creation, or access survey instances within the tool.
---

# Survey Customization

This help topic describes how you can customize the following aspects of Survey Creator functionality:

- [Specify Adorner Availability](#specify-adorner-availability)
- [Customize Survey Elements on Creation](#customize-survey-elements-on-creation)
- [Access Survey Instances Within Survey Creator](#access-survey-instances-within-survey-creator)
  - [Design Mode Survey Instance](#design-mode-survey-instance)
  - [Preview Mode Survey Instance](#preview-mode-survey-instance)
  - [Attach Event Handlers](#attach-event-handlers)

## Specify Adorner Availability

Adorners are design-surface controls that allow Survey Creator users to manipulate survey elements. Each element type has an associated set of default adorners. The following image highlights adorners on a Dropdown question:

<img src="./images/survey-creator-dropdown-adorners.png" alt="Survey Creator - Adorners" width="772" height="663">

You can control the visibility of adorners using the [`onElementAllowOperations`](https://surveyjs.io/survey-creator/documentation/api-reference/survey-creator#onElementAllowOperations) event. As the second parameter, the event handler accepts an object that exposes the following Boolean properties:

| Property | Description |
| -------- | ----------- |
| `allowChangeRequired` | Shows or hides the adorner that makes the question required. |
| `allowChangeType` | Shows or hides the adorner that changes the survey element type. |
| `allowChangeInputType` | Shows or hides the adorner that changes the [`inputType`](https://surveyjs.io/form-library/documentation/api-reference/text-entry-question-model#inputType) property of Single-Line Input questions. |
| `allowCopy` | Shows or hides the adorner that duplicates the survey element. |
| `allowDelete` | Shows or hides the adorner that deletes the survey element. |
| `allowDrag` | Shows or hides the adorner that allows users to drag and drop survey elements. |
| `allowEdit` | Shows or hides the adorners that allow users to edit survey element properties on the design surface. If you disable this property, users can edit survey element properties only in the Property Grid. |
| `allowExpandCollapse` | Shows or hides the adorners that allow users to collapse and expand the survey element. |
| `allowShowSettings` | Shows or hides the adorner that allow users to open the Property Grid for survey element configuration. |

The following code hides the "Change Type" adorner for Dropdown questions:

```js
creator.onElementAllowOperations.add((_, options) => {
  if (options.element?.getType() === "dropdown") {
    options.allowChangeType = false;
  }
});
```

[View Demo](https://surveyjs.io/survey-creator/examples/customadorner/ (linkStyle))

## Customize Survey Elements on Creation

Survey Creator raises events when users add new elements to a survey. You can handle these events to customize the elements.

| Event name | Raised when |
| ---------- | ----------- |
| [`onQuestionAdded`](https://surveyjs.io/survey-creator/documentation/api-reference/survey-creator#onQuestionAdded) | Raised when users add a question to the survey. |
| [`onPanelAdded`](https://surveyjs.io/survey-creator/documentation/api-reference/survey-creator#onPanelAdded) | Raised when users add a panel to the survey. |
| [`onPageAdded`](https://surveyjs.io/survey-creator/documentation/api-reference/survey-creator#onPageAdded) | Raised when users add a page to the survey. |
| [`onMatrixColumnAdded`](https://surveyjs.io/survey-creator/documentation/api-reference/survey-creator#onMatrixColumnAdded) | Raised when users add a column to the [Matrix Dropdown](https://surveyjs.io/Documentation/Library?id=questionmatrixdropdownmodel) or [Matrix Dynamic](https://surveyjs.io/Documentation/Library?id=questionmatrixdynamicmodel) question. |
| [`onItemValueAdded`](https://surveyjs.io/survey-creator/documentation/api-reference/survey-creator#onItemValueAdded) | Raised when users add a new item value (column, row, choice). |

The code below shows how you can handle the `onQuestionAdded` event to customize the default question name:

```js
let questionNumbers = {};
creator.onQuestionAdded.add(function (_, options) {
  const question = options.question;
  const type = question.getType();
  if (!questionNumbers[type]) {
    questionNumbers[type] = 1;
  }
  const number = questionNumbers[type];
  // Set `name` in the following format: DropdownQuestion1, CheckboxQuestion6, etc.
  question.name = type[0].toUpperCase() + type.substring(1) + "Question" + number;
  questionNumbers[type] = number + 1;
});
```

[View Demo](https://surveyjs.io/survey-creator/examples/oncreatequestion/ (linkStyle))

## Access Survey Instances Within Survey Creator

Survey Creator contains different survey instances for design and preview modes. In design mode, survey elements have [adorners](#specify-adorner-availability). In preview mode, the survey is displayed as respondents will see it.

### Design Mode Survey Instance

To access the design mode survey instance, use the Survey Creator's [`survey`](https://surveyjs.io/survey-creator/documentation/api-reference/survey-creator#survey) property. You can do this at any point in your application. Use the [Survey API](https://surveyjs.io/Documentation/Library?id=surveymodel) to manipulate the survey instance. For example, the following code changes the survey [`title`](https://surveyjs.io/Documentation/Library?id=surveymodel#title):

```js
creator.survey.title = "My Survey";
```

Survey Creator may create a new design mode survey instance during the design process (for example, when a user switches from the JSON Editor tab back to the Designer). To handle the survey recreation, use the [`onSurveyInstanceCreated`](https://surveyjs.io/survey-creator/documentation/api-reference/survey-creator#onSurveyInstanceCreated) event.

```js
creator.onSurveyInstanceCreated.add((_, options) => {
  if (options.area === "designer-tab") {
    // The recreated survey instance is stored in the `options.survey` property.
    console.log(options.survey);
  }
})
```

### Preview Mode Survey Instance

The preview mode survey instance is recreated each time a user opens the Preview tab. To access this instance, handle the [`onSurveyInstanceCreated`](https://surveyjs.io/survey-creator/documentation/api-reference/survey-creator#onSurveyInstanceCreated) event as follows:

```js
creator.onSurveyInstanceCreated.add((_, options) => {
  if (options.area === "preview-tab") {
    options.survey.title = "You started previewing the survey at: " + new Date().toLocaleTimeString();
  }
});
```

### Attach Event Handlers

To customize a survey instance, you use the [`SurveyModel` API](https://surveyjs.io/form-library/documentation/api-reference/survey-data-model), which includes various survey events. Although you can attach event handlers using the [`onSurveyInstanceCreated`](https://surveyjs.io/survey-creator/documentation/api-reference/survey-creator#onSurveyInstanceCreated) event, keep in mind that this event is triggered *after* the survey instance has been initialized with a JSON schema. As a result, some survey events may not fire as expected.

To ensure that all survey events are raised properly, attach your handlers using the [`onSurveyInstanceSetupHandlers`](https://surveyjs.io/survey-creator/documentation/api-reference/survey-creator#onSurveyInstanceSetupHandlers) event instead. The following example demonstrates how to handle the [`onProcessText`](https://surveyjs.io/form-library/documentation/api-reference/survey-data-model#onProcessHtml) event:

```js
creator.onSurveyInstanceSetupHandlers.add((_, options) => {
  if (options.area === "preview-tab") {
    options.survey.onProcessHtml.add((_, options) => {
      if (options.reason === "html-question") {
        // ...
        // Encode `options.html` here with your favorite sanitizing tool
        // ...
      }
    });
  }
});
```