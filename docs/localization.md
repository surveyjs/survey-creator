# Localization & Globalization

This article describes how to localize Survey Creator UI and give users the ability to localize their surveys.

- [Localize Survey Creator UI](#localize-survey-creator-ui)
- [Localize Survey Contents](#localize-survey-contents)

## Localize Survey Creator UI

Survey Creator UI is translated to multiple languages. We ship translation strings as [dictionary files](https://github.com/surveyjs/survey-creator/tree/master/packages/survey-creator-core/src/localization). Localization engine that works with these files is implemented in a separate script/module. Reference this script in the `<head>` tag of your page or import this module in the component that renders Survey Creator:

```html
<script src="https://unpkg.com/survey-creator-core/survey-creator-core.i18n.min.js"></script>
```

```js
import "survey-creator-core/survey-creator-core.i18n";
```

The default language for UI elements is English. To change it, set the `currentLocale` property. For example, the following code translates Survey Creator UI to French:

```js
SurveyCreator.localization.currentLocale = "fr";

// In modular applications:
import { localization } from "survey-creator-core";
localization.currentLocale = "fr";
```

You can modify individual translation strings. Call the `getLocale(locale)` method to get an object with locale translations. Refer to any [dictionary file](https://github.com/surveyjs/survey-creator/tree/master/packages/survey-creator-core/src/localization) for information about the structure of this object. To modify a translation string, change the corresponding object property:

```js
// Get current locale translations
const translations = SurveyCreator.localization.getLocale("");
// In modular applications
const translations = localization.getLocale("");

// Change text for the `visible` property in Property Grid
translations.p.visible = "Is visible";
// Change text for the `visible` property in Modal Editor
translations.pe.visible = "Is element visible?";
// Change text for the `visible` property in JSON Editor
translations.ed.jsonEditor = "Edit As Text";
```

[View Localization example](https://surveyjs.io/Examples/Survey-Creator/?id=localization)

Translation dictionaries are supported by the community and may be incomplete. Feel free to add missing translations to existing dictionaries or create new dictionaries for other languages. You can use English as a base dictionary: copy the file, replace English translations in it, and submit a pull request with the resulting file to the [survey-creator](https://github.com/surveyjs/survey-creator) repository.

## Localize Survey Contents

If you want your users to create multi-language surveys, add the following script to the `<head>` tag of your page or import the following module in the component that renders Survey Creator:

```html
<script src="https://unpkg.com/survey-core/survey.i18n.min.js"></script>
```

```js
import "survey-core/survey.i18n";
```

This script/module allows Survey Creator users to select a default language different from English:

<img src="./images/survey-creator-default-language-dropdown.png" alt="Survey Creator - Default Language dropdown" width="50%">

If you want to restrict the list of available languages, specify the `supportedLocales` array:

```js
Survey.surveyLocalization.supportedLocales = ["en", "de", "es", "fr"];

// In modular applications
import { surveyLocalization } from 'survey-core';
surveyLocalization.supportedLocales = ["en", "de", "es", "fr"];
```

Predefined survey texts are translated to the selected language automatically. SurveyJS Library takes translation strings from [community-supported dictionaries](https://github.com/surveyjs/survey-library/tree/master/src/localization). Custom texts (questions, choices, page titles, error messages) should be translated by Survey Creator users in the Translation tab. To display it, enable the [`showTranslationTab`](https://surveyjs.io/Documentation/Survey-Creator?id=surveycreator#showTranslationTab) property as shown below. Note that users can specify translation strings only for the languages that you list in the `supportedLocales` array.

```js
const creatorOptions = {
  showTranslationTab: true
};

const creator = new SurveyCreator.SurveyCreator(creatorOptions);

// In modular applications
import { SurveyCreator } from "survey-creator-knockout";
// or
import { SurveyCreator } from "survey-creator-react";
const creator = new SurveyCreator(creatorOptions);
```

[View Multiple Languages example](https://surveyjs.io/Examples/Survey-Creator/?id=multiplelanguages)