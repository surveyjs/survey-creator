---
title: Property Grid Customization | JavaScript Survey Creator
description: Learn how to hide survey properties from Property Grid, add custom properties to it, and override default property values. Read this guide for SurveyJS Survey Creator.
---

# Property Grid Customization

Property Grid displays the properties of a selected survey element and allows a user to change the property values. This help topic describes how you can modify the Property Grid contents.

<img src="./images/survey-creator-property-grid.png" alt="Survey Creator - Property Grid" width="100%">

## Hide Properties from the Property Grid

If you do not want users to change a survey property, you can hide it from the Property Grid. Survey Creator allows you to hide an individual property or multiple properties at once.

To hide a single survey property, call the `getProperty(questionType, propertyName)` method on the `Survey.Serializer` object as follows:

```js
// Hide the `title` property for Boolean questions
Survey.Serializer.getProperty("boolean", "title").visible = false;

// In modular applications:
import { Serializer } from "survey-core";
Serializer.getProperty("boolean", "title").visible = false;
```

If you want to hide multiple properties, handle the Survey Creator's [`onShowingProperty`](https://surveyjs.io/survey-creator/documentation/api-reference/survey-creator#onShowingProperty) event. Its second parameter exposes the `canShow` Boolean property. Disable it for the properties you want to hide. The following example illustrates two cases: hide black-listed properties and keep only white-listed properties. This code hides the properties for [Panel](https://surveyjs.io/Documentation/Library?id=panelmodel) questions.

```js
const blackList = [ "visible", "isRequired" ];
// const whiteList = [ "title", "name" ];

creator.onShowingProperty.add(function (_, options) {
  if (options.obj.getType() == "panel") {
    // Hide properties found in `blackList`
    options.canShow = blackList.indexOf(options.property.name) < 0;

    // Hide all properties except those found in `whiteList`
    // options.canShow = whiteList.indexOf(options.property.name) > -1;
  }
});
```

[View Demo](https://surveyjs.io/survey-creator/examples/removeproperties/ (linkStyle))

## Override Default Property Values

You can specify a different default value for a property in Property Grid. To do this, call `Serializer`'s `getProperty(questionType, propertyName)` method and change the property's `defaultValue` setting:

```js
// Override the default value of the `isAllRowRequired` property for Single-Select Matrix questions
Survey.Serializer.getProperty("matrix", "isAllRowRequired").defaultValue = true;

// In modular applications:
import { Serializer } from "survey-core";
Serializer.getProperty("matrix", "isAllRowRequired").defaultValue = true;
```

## Add Help Texts to Property Editors

Property editors can display hints or tooltips that help survey authors specify correct property values. For example, the following image illustrates a hint for the [`acceptedTypes`](https://surveyjs.io/form-library/documentation/api-reference/file-model#acceptedTypes) property editor in a [File Upload](https://surveyjs.io/form-library/examples/file-upload/) question: 

<img src="./images/property-grid-hint.png" alt="Survey Creator: Hints in the Property Grid">

Hints are stored in the `pehelp` object (stands for "property editor help") within [localization dictionaries](https://github.com/surveyjs/survey-creator/tree/master/packages/survey-creator-core/src/localization). You can use [localization API](https://surveyjs.io/survey-creator/documentation/survey-localization-translate-surveys-to-different-languages#override-individual-translations) to specify or override help texts within this object. For instance, the code below specifies a hint for the [`title`](https://surveyjs.io/form-library/documentation/api-reference/question#title) property editor.

```js
// Get current locale translations
const translations = SurveyCreator.localization.getLocale("");
// In modular applications
import { localization } from "survey-creator-core";
const translations = localization.getLocale("");

translations.pehelp.title = "A hint for the Title property editor";
```

You can specify different help texts for properties that belong to questions, pages, and the survey itself:

```js
translations.pehelp.survey = { 
  title: "A hint for the Title property editor of the survey"
};
translations.pehelp.page = { 
  title: "A hint for the Title property editor of all pages"
};
translations.pehelp.question = { 
  title: "A hint for the Title property editor of all questions"
};
```

You can also set specific help texts for properties that belong to a certain [question type](https://surveyjs.io/form-library/documentation/api-reference/question#getType):

```js
translations.pehelp.file = { 
  title: "A hint for the Title property editor in File Upload questions"
};
translations.pehelp.comment = { 
  title: "A hint for the Title property editor in Long Text questions"
};
```

## Add Custom Properties to the Property Grid

Refer to the following help topic in the Form Library documentation:

[Add Custom Properties](/form-library/documentation/customize-question-types/add-custom-properties-to-a-form (linkStyle))