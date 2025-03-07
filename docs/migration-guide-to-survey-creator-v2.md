---
title: "Migration to Survey Creator V2: React, Angular, jQuery, Knockout, and Vue"
description: Learn how to migrate to Survey Creator V2 with this comprehensive guide. Explore migration steps for React, Angular, jQuery, Knockout, and Vue. Update packages, adapt to constructor changes, customize property editors and adorners, handle localization, and explore other new features.
---

# Migration to Survey Creator V2

- [Migration in React](#migration-in-react)
- [Migration in Angular](#migration-in-angular)
- [Migration in jQuery, Knockout, and Vue 2](#migration-in-jquery-knockout-and-vue-2)
  - [Replace Packages / Source Links](#replace-packages--source-links)
  - [Update the Survey Creator Constructor](#update-the-survey-creator-constructor)
- [Customized Property Editors](#customized-property-editors)
- [Customized Adorners](#customized-adorners)
- [Localization](#localization)
- [Other Features](#other-features)

## Migration in React

Survey Creator V2 introduces a native implementation for React. Although this is a major update, the changes mostly affect rendering and UI customization. The rest of your code for V1 should work fine in V2.

To migrate to the new Survey Creator, uninstall `survey-creator` and install the `survey-creator-react` package. Its dependencies (`survey-core`, `survey-creator-core`, and `survey-react-ui`) are installed automatically:

```cmd
npm uninstall survey-creator
npm install survey-creator-react --save
```

Most of the imports will break after this operation. Run your application and fix import errors shown in the console. As a result, the Survey Creator code should look as follows:

```js
import "survey-core/defaultV2.min.css";
import "survey-creator-core/survey-creator-core.min.css";
import { SurveyCreator, SurveyCreatorComponent } from "survey-creator-react";

const options = {
  showLogicTab: true
};

export default function SurveyComponent() {
  const creator = new SurveyCreator(options);
  // ...
  // Add event handlers, survey JSON, and customizations here
  // ...
  return <SurveyCreatorComponent creator={creator} />;
}
```
## Migration in Angular

If you migrate from Survey Creator V1, uninstall the `survey-creator` package:

```cmd
npm uninstall survey-creator
```

If you migrate from Survey Creator V2 for Knockout, uninstall the `survey-creator-knockout` package:

```cmd
npm uninstall survey-creator-knockout
```

After that, follow the instructions given in the following help topic: [Add a Survey to an Angular Application](https://surveyjs.io/form-library/documentation/get-started-angular).

## Migration in jQuery, Knockout, and Vue 2

### Replace Packages / Source Links

Survey Creator versions for jQuery and Vue 2 continue to use the Knockout engine. The new version does introduce a change though. We separated the Knockout monolith module into a platform-independent core ([`survey-creator-core`](https://www.npmjs.com/package/survey-creator-core)) and platform-specific view models ([`survey-creator-knockout`](https://www.npmjs.com/package/survey-creator-knockout)). You need to change references to SurveyJS and Survey Creator scripts and style sheets or replace npm packages accordingly:

<details>
  <summary>Vue 2</summary>

```cmd
npm uninstall survey-creator
npm install survey-creator-knockout --save
```

```js
<script>
import "survey-core/defaultV2.min.css";
import "survey-creator-core/survey-creator-core.min.css";
</script>
```
</details>

<details>
  <summary>Knockout / jQuery</summary>

```html
<!-- Previously -->
<!-- <script src="https://unpkg.com/survey-knockout/survey.ko.min.css"></script> -->
<!-- <script src="https://unpkg.com/survey-knockout/survey.ko.min.js"></script> -->

<!-- <link  href="https://unpkg.com/survey-creator/survey-creator.css" type="text/css" rel="stylesheet"> -->
<!-- <script src="https://unpkg.com/survey-creator/survey-creator.min.js"></script> -->
```

```html
<!-- Now -->
<script src="https://unpkg.com/survey-core/survey.core.min.css"></script>
<script src="https://unpkg.com/survey-core/survey.core.min.js"></script>
<script src="https://unpkg.com/survey-knockout-ui/survey-knockout-ui.min.js"></script>

<link  href="https://unpkg.com/survey-creator-core/survey-creator-core.min.css" type="text/css" rel="stylesheet">
<script src="https://unpkg.com/survey-creator-core/survey-creator-core.min.js"></script>
<script src="https://unpkg.com/survey-creator-knockout/survey-creator-knockout.min.js"></script>
```
</details>

In Vue 2, most of the imports will break after you uninstall the old and install the new packages. Run your application to find all broken imports and change them to imports from `"survey-core"` or `"survey-creator-knockout"`.

### Update the Survey Creator Constructor 

Previously, the constructor accepted two arguments: the element ID in which to render the Survey Creator and an object with Survey Creator configuration. When the constructor was called, it both instantiated and rendered the Survey Creator.

Now, the constructor only accepts the configuration object. Thus, we separate the instantiation from the rendering. To render the Survey Creator, call the `render(elementId)` method on the Survey Creator instance:

```js
// Previously
// const creator = new SurveyCreator.SurveyCreator("creatorElement", options);
```

```js
// Now
const creator = new SurveyCreator.SurveyCreator(options);
// ...
// Add event handlers, survey JSON, and customizations here
// ...
creator.render("creatorElement");

// In modular applications:
import { SurveyCreator } from "survey-creator-knockout";
const creator = new SurveyCreator(options);
// ...
// Add event handlers, survey JSON, and customizations here
// ...
creator.render("creatorElement");
```

## Customized Property Editors

In Survey Creator V2, we changed the internal design of the Property Grid. You need to rewrite most of your old customization code. On the other hand, we simplified customization. The Property Grid is now a survey. To add a new property editor, you simply need to add a question to the survey. Refer to the following help topic for more information: [Add Custom Properties to the Property Grid](https://surveyjs.io/Documentation/Survey-Creator?id=property-grid#add-custom-properties-to-the-property-grid).

## Customized Adorners

We [changed how adorners are rendered](https://surveyjs.io/Documentation/Survey-Creator?id=Creator-V2-Whats-New#alternative-rendering-for-adorners) on the design surface. We now use native framework techniques to render the adorners (templates in Knockout and React components in React). If you added custom adorners in V1, your code won't work in V2. Replace it with the `onDefineElementMenuItems` event handler. Within this handler, you can add a new action or customize a predefined action. Refer to the following example for more information:

[View Demo](https://surveyjs.io/Examples/Survey-Creator/?id=customadorner (linkStyle))

## Localization

Previously, localization utilities were part of the main Survey Creator module. We decided to separate them to make the main module lighter. Refer to the [Localization & Globalization](https://surveyjs.io/Documentation/Survey-Creator?id=localization) help topic for information on how to enable localization after you migrate to the new Survey Creator.


## Other Features

To facilitate migration, the new Survey Creator logs backward-compatibility warnings into the console. These warnings suggest how you can replace deprecated properties and outdated functionality. Please follow these suggestions to keep your code up to date.
