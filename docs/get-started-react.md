---
title: React Form Builder | Generate dynamic HTML forms using JSON
description: SurveyJS Form Builder for React is an open-source client-side component that fully integrates into your React application and generates form JSON definitions (schemas) behind the scenes. It offers a user-friendly drag-and-drop interface, GUI for form branching, and an integrated theme editor for customizing form design.
---
# React Form Builder

[SurveyJS Form Builder](https://surveyjs.io/create-free-survey) is an open-source UI component in React that seamlessly integrates with any backend system and allows you to create and style multiple dynamic HTML forms right in your React application. This component generates form definitions (schemas) in real-time and offers a no-code drag-and-drop interface that makes form creation accessible to anyone. The form builder features a dedicated GUI for conditional rules and form branching and an integrated CSS theme editor for custom form styling and branding. This step-by-step tutorial will help you get started with the Form Builder component in a React application. To add the component to your application, follow the steps below:

- [Install the `survey-creator-react` npm Package](#install-the-survey-creator-react-npm-package)
- [Configure Styles](#configure-styles)
- [Configure Survey Creator](#configure-survey-creator)
- [Render Survey Creator](#render-survey-creator)
- [Save and Load Survey Model Schemas](#save-and-load-survey-model-schemas)
- [Manage Image Uploads](#manage-image-uploads)

[View Full Code on GitHub](https://github.com/surveyjs/code-examples/tree/main/get-started-creator/react (linkStyle))

If you are looking for a quick-start application that includes all SurveyJS components, refer to the following GitHub repositories:

- <a href="https://github.com/surveyjs/surveyjs_react_quickstart" target="_blank">SurveyJS + React Quickstart Template</a>
- <a href="https://github.com/surveyjs/surveyjs-nextjs" target="_blank">SurveyJS + Next.js Quickstart Template</a>
- <a href="https://github.com/surveyjs/surveyjs-remix" target="_blank">SurveyJS + Remix Quickstart Template</a>

> In this guide, the terms "Form Builder" and "Survey Creator" are used interchangeably and both refer to the SurveyJS form building component for React.

## Install the `survey-creator-react` npm Package

Survey Creator for React consists of two npm packages: [`survey-creator-core`](https://www.npmjs.com/package/survey-creator-core) (platform-independent code) and [`survey-creator-react`](https://www.npmjs.com/package/survey-creator-react) (rendering code). Run the following command to install `survey-creator-react`. The `survey-creator-core` package will be installed automatically as a dependency.

```cmd
npm install survey-creator-react --save
```

## Configure Styles

Import Survey Creator and SurveyJS Form Library style sheets as shown below:

```js
import "survey-core/defaultV2.min.css";
import "survey-creator-core/survey-creator-core.min.css";
```

## Configure Survey Creator

To configure the Survey Creator component, specify [its properties](https://surveyjs.io/survey-creator/documentation/api-reference/icreatoroptions) in a configuration object. In this tutorial, the object enables the following properties:

- [`showLogicTab`](https://surveyjs.io/survey-creator/documentation/api-reference/icreatoroptions#showLogicTab)        
Displays the Logic tab in the tab panel.

- [`isAutoSave`](https://surveyjs.io/survey-creator/documentation/api-reference/icreatoroptions#isAutoSave)        
Automatically saves the survey JSON schema on every change.

```js
const creatorOptions = {
  showLogicTab: true,
  isAutoSave: true
};
```

Pass the configuration object to the `SurveyCreator` constructor as shown in the code below to instantiate Survey Creator. Assign the produced instance to a constant that will be used later to render the component:

```js
import { SurveyCreator } from "survey-creator-react";

// ...

export function SurveyCreatorWidget() {
  const creator = new SurveyCreator(creatorOptions);
}
```

<details>
  <summary>View Full Code</summary>

```js
import { SurveyCreator } from "survey-creator-react";
import "survey-core/defaultV2.min.css";
import "survey-creator-core/survey-creator-core.min.css";

const creatorOptions = {
  showLogicTab: true,
  isAutoSave: true
};

export function SurveyCreatorWidget() {
  const creator = new SurveyCreator(creatorOptions);
  return (

  )
}
```
</details>

## Render Survey Creator

To render Survey Creator, import the `SurveyCreatorComponent`, add it to the template, and pass the instance you created in the previous step to the component's `creator` attribute, as shown below.

> If you are using [Next.js](https://nextjs.org) or another framework that [has adopted React Server Components](https://react.dev/learn/start-a-new-react-project#bleeding-edge-react-frameworks), you need to explicitly mark the React component that renders a SurveyJS component as client code using the ['use client'](https://react.dev/reference/react/use-client) directive.

```js
// Uncomment the following line if you are using Next.js:
// 'use client'

import { SurveyCreatorComponent, SurveyCreator } from "survey-creator-react";

// ...

export function SurveyCreatorWidget() {
  const creator = new SurveyCreator(creatorOptions);

  return (
    <SurveyCreatorComponent creator={creator} />
  )
}
```

<details>
  <summary>View Full Code</summary>

```js
// Uncomment the following line if you are using Next.js:
// 'use client'

import { SurveyCreatorComponent, SurveyCreator } from "survey-creator-react";
import "survey-core/defaultV2.min.css";
import "survey-creator-core/survey-creator-core.min.css";

const creatorOptions = {
  showLogicTab: true,
  isAutoSave: true
};

export function SurveyCreatorWidget() {
  const creator = new SurveyCreator(creatorOptions);
  return (
    <SurveyCreatorComponent creator={creator} />
  )
}
```
</details>

## Save and Load Survey Model Schemas

Survey Creator produces survey model schemas as JSON objects. You can persist these objects on your server: save updates and restore previously saved schemas. To save a JSON object, implement the `saveSurveyFunc` function. It accepts two arguments:

- `saveNo`      
An incremental number of the current change. Since web services are asynchronous, you cannot guarantee that the service receives the changes in the same order as the client sends them. For example, change #11 may arrive to the server faster than change #10. In your web service code, update the storage only if you receive changes with a higher `saveNo`.

- `callback`        
A callback function. Call it and pass `saveNo` as the first argument. Set the second argument to `true` or `false` based on whether the server applied or rejected the change.

The following code shows how to use the `saveSurveyFunc` function to save a survey model schema in a <a href="https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage" target="_blank">`localStorage`</a> or in your web service:


```js
export function SurveyCreatorWidget() {
  // ...
  creator.saveSurveyFunc = (saveNo, callback) => { 
    // If you use localStorage:
    window.localStorage.setItem("survey-json", creator.text);
    callback(saveNo, true);

    // If you use a web service:
    saveSurveyJson(
        "https://your-web-service.com/",
        creator.JSON,
        saveNo,
        callback
    );
  };
  // ...
}

// If you use a web service:
function saveSurveyJson(url, json, saveNo, callback) {
  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    },
    body: JSON.stringify(json)
  })
  .then(response => {
    if (response.ok) {
      callback(saveNo, true);
    } else {
      callback(saveNo, false);
    }
  })
  .catch(error => {
    callback(saveNo, false);
  });
}
```

If you are running a NodeJS server, you can check a survey JSON schema before saving it. On the server, create a `SurveyModel` and call its [`toJSON()`](https://surveyjs.io/form-library/documentation/api-reference/survey-data-model#toJSON) method. This method deletes unknown properties and incorrect property values from the survey JSON schema:

```js
// Server-side code for a NodeJS backend
import { Model } from "survey-core";

const incorrectSurveyJson = { ... };
const survey = new Model(surveyJson);
const correctSurveyJson = survey.toJSON();
// ...
// Save `correctSurveyJson` in a database
// ...
```

To load a survey model schema JSON into Survey Creator, assign the schema to Survey Creator's [`JSON`](https://surveyjs.io/survey-creator/documentation/api-reference/survey-creator#JSON) or [`text`](https://surveyjs.io/survey-creator/documentation/api-reference/survey-creator#text) property. Use `text` if the JSON object is converted to a string; otherwise, use `JSON`. The following code takes a survey model schema from the `localStorage`. If the schema is not found (for example, when Survey Creator is launched for the first time), a default JSON is used:


```js
// ...
const defaultJson = {
  pages: [{
    name: "Name",
    elements: [{
      name: "FirstName",
      title: "Enter your first name:",
      type: "text"
    }, {
      name: "LastName",
      title: "Enter your last name:",
      type: "text"
    }]
  }]
};

export function SurveyCreatorWidget() {
  // ...
  creator.text = window.localStorage.getItem("survey-json") || JSON.stringify(defaultJson);
  // ...
}
```

<details>
  <summary>View Full Code</summary>

```js
// Uncomment the following line if you are using Next.js:
// 'use client'

import { SurveyCreatorComponent, SurveyCreator } from "survey-creator-react";
import "survey-core/defaultV2.min.css";
import "survey-creator-core/survey-creator-core.min.css";

const creatorOptions = {
  showLogicTab: true,
  isAutoSave: true
};

const defaultJson = {
  pages: [{
    name: "Name",
    elements: [{
      name: "FirstName",
      title: "Enter your first name:",
      type: "text"
    }, {
      name: "LastName",
      title: "Enter your last name:",
      type: "text"
    }]
  }]
};

export function SurveyCreatorWidget() {
  const creator = new SurveyCreator(creatorOptions);
  creator.text = window.localStorage.getItem("survey-json") || JSON.stringify(defaultJson);
  creator.saveSurveyFunc = (saveNo, callback) => { 
    window.localStorage.setItem("survey-json", creator.text);
    callback(saveNo, true);
    // saveSurveyJson(
    //     "https://your-web-service.com/",
    //     creator.JSON,
    //     saveNo,
    //     callback
    // );
  };
  return (
    <SurveyCreatorComponent creator={creator} />
  )
}

// function saveSurveyJson(url, json, saveNo, callback) {
//   fetch(url, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json;charset=UTF-8'
//     },
//     body: JSON.stringify(json)
//   })
//   .then(response => {
//     if (response.ok) {
//       callback(saveNo, true);
//     } else {
//       callback(saveNo, false);
//     }
//   })
//   .catch(error => {
//     callback(saveNo, false);
//   });
// }
```
</details>

## Manage Image Uploads

When survey authors design a form or questionnaire, they can add images to use as a survey [logo](https://surveyjs.io/form-library/documentation/api-reference/survey-data-model#logo) or [background](https://surveyjs.io/form-library/documentation/api-reference/survey-data-model#backgroundImage), in the survey header, or within [Image](https://surveyjs.io/form-library/examples/add-image-and-video-to-survey/) and [Image Picker](https://surveyjs.io/form-library/examples/image-picker-question/) questions. Those images are embedded in the survey and theme JSON schemas as Base64 URLs. However, this technique increases the schema size. To avoid this, you can upload images to a server and save only image links in the JSON schemas.

To implement image upload, handle the [`onUploadFile`](https://surveyjs.io/survey-creator/documentation/api-reference/survey-creator#onUploadFile) event. Its `options.files` parameter stores the images you should send to your server. Once the server responds with an image link, call the `options.callback(status, imageLink)` method. Pass `"success"` as the `status` parameter and a link to the uploaded image as the `imageLink` parameter.

```js
export function SurveyCreatorWidget() {
  // ...
  creator.onUploadFile.add((_, options) => {
    const formData = new FormData();
    options.files.forEach(file => {
      formData.append(file.name, file);
    });
    fetch("https://example.com/uploadFiles", {
      method: "post",
      body: formData
    }).then(response => response.json())
      .then(result => {
        options.callback(
          "success",
          // A link to the uploaded file
          "https://example.com/files?name=" + result[options.files[0].name]
        );
      })
      .catch(error => {
        options.callback('error');
      });
  });
  // ...
}
```

To view the application, run `npm run start` in a command line and open [http://localhost:3000/](http://localhost:3000/) in your browser.

<details>
  <summary>View Full Code</summary>

```js
// Uncomment the following line if you are using Next.js:
// 'use client'

import { SurveyCreatorComponent, SurveyCreator } from "survey-creator-react";
import "survey-core/defaultV2.min.css";
import "survey-creator-core/survey-creator-core.min.css";

const creatorOptions = {
  showLogicTab: true,
  isAutoSave: true
};

const defaultJson = {
  pages: [{
    name: "Name",
    elements: [{
      name: "FirstName",
      title: "Enter your first name:",
      type: "text"
    }, {
      name: "LastName",
      title: "Enter your last name:",
      type: "text"
    }]
  }]
};

export function SurveyCreatorWidget() {
  const creator = new SurveyCreator(creatorOptions);
  creator.text = window.localStorage.getItem("survey-json") || JSON.stringify(defaultJson);
  creator.saveSurveyFunc = (saveNo, callback) => { 
    window.localStorage.setItem("survey-json", creator.text);
    callback(saveNo, true);
    // saveSurveyJson(
    //     "https://your-web-service.com/",
    //     creator.JSON,
    //     saveNo,
    //     callback
    // );
  };
  // creator.onUploadFile.add((_, options) => {
  //   const formData = new FormData();
  //   options.files.forEach(file => {
  //     formData.append(file.name, file);
  //   });
  //   fetch("https://example.com/uploadFiles", {
  //     method: "post",
  //     body: formData
  //   }).then(response => response.json())
  //     .then(result => {
  //       options.callback(
  //         "success",
  //         // A link to the uploaded file
  //         "https://example.com/files?name=" + result[options.files[0].name]
  //       );
  //     })
  //     .catch(error => {
  //       options.callback('error');
  //     });
  // });
  return (
    <SurveyCreatorComponent creator={creator} />
  )
}

// function saveSurveyJson(url, json, saveNo, callback) {
//   fetch(url, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json;charset=UTF-8'
//     },
//     body: JSON.stringify(json)
//   })
//   .then(response => {
//     if (response.ok) {
//       callback(saveNo, true);
//     } else {
//       callback(saveNo, false);
//     }
//   })
//   .catch(error => {
//     callback(saveNo, false);
//   });
// }
```
</details>

[View Demo](https://surveyjs.io/survey-creator/examples/file-upload/reactjs (linkStyle))

[View Full Code on GitHub](https://github.com/surveyjs/code-examples/tree/main/get-started-creator/react (linkStyle))

## Further Reading

- [Localization](https://surveyjs.io/Documentation/Survey-Creator?id=localization)
- [Property Grid Customization](https://surveyjs.io/Documentation/Survey-Creator?id=property-grid)
- [Toolbox Customization](https://surveyjs.io/Documentation/Survey-Creator?id=toolbox)
- [Survey Customization](https://surveyjs.io/Documentation/Survey-Creator?id=survey-customization)
- [Create a Custom Widget](https://surveyjs.io/Documentation/Survey-Creator?id=Create-Custom-Widget)
