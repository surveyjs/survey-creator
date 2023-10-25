---
title: JS Form Builder Library for Vue.js | Getting Started Guide
description: A step-by-step guide to get started with Survey Creator component in a Vue.js application.
---
# Add Survey Creator / Form Builder to a Vue.js Application

This step-by-step tutorial will help you get started with the [Survey Creator](https://surveyjs.io/create-survey) component in a Vue application. To add the component to your application, follow the steps below:

- [Install the `survey-creator-knockout` npm Package](#install-the-survey-creator-knockout-npm-package)
- [Configure Styles](#configure-styles)
- [Configure Survey Creator](#configure-survey-creator)
- [Render Survey Creator](#render-survey-creator)
- [Save and Load Survey Model Schemas](#save-and-load-survey-model-schemas)
- [Manage Image Uploads](#manage-image-uploads)

[View Full Code on GitHub](https://github.com/surveyjs/code-examples/tree/main/get-started-creator/vue (linkStyle))

If you are looking for a quick-start application that enables all Survey Creator features, refer to the following GitHub repository: <a href="https://github.com/surveyjs/surveyjs_vue_quickstart" target="_blank">SurveyJS + Vue Quick Start Boilerplate</a>.

## Install the `survey-creator-knockout` npm Package

Survey Creator does not yet have a native implementation for Vue. However, you can integrate the version for Knockout into your Vue application. Run the following command to install the <a href="https://www.npmjs.com/package/survey-creator-knockout" target="_blank">survey-creator-knockout</a> package:

```cmd
npm install survey-creator-knockout --save
```

## Configure Styles

Import Survey Creator and SurveyJS Form Library style sheets as shown below:

```js
<script>
import "survey-core/defaultV2.min.css";
import "survey-creator-core/survey-creator-core.min.css";
</script>
```

Note that although standalone surveys support [multiple predefined themes](https://surveyjs.io/form-library/documentation/get-started-vue#configure-styles), surveys within Survey Creator apply only one theme ("Default V2"). However, you can use the survey configuration (JSON object) produced by Survey Creator to build a standalone survey and apply any theme to it. You can also customize Survey Creator theme colors as shown in the following example:

[View Demo](https://surveyjs.io/survey-creator/examples/edit-user-interface-theme-with-custom-css/ (linkStyle))

## Configure Survey Creator

To configure the Survey Creator component, specify [its properties](https://surveyjs.io/Documentation/Survey-Creator?id=ICreatorOptions) in a configuration object. In this tutorial, the object enables the following properties:

- [`showLogicTab`](https://surveyjs.io/Documentation/Survey-Creator?id=ICreatorOptions#showLogicTab)        
Displays the Logic tab in the tab panel.

- [`isAutoSave`](https://surveyjs.io/Documentation/Survey-Creator?id=ICreatorOptions#isAutoSave)        
Automatically saves the survey JSON schema on every change.

```js
const creatorOptions = {
  showLogicTab: true,
  isAutoSave: true
};
```

Pass the configuration object to the `SurveyCreator` constructor as shown in the code below to instantiate Survey Creator. Assign the produced instance to a constant that will be used later to render the component:

```js
<script>
import { SurveyCreator } from "survey-creator-knockout";
// ...

const creatorOptions = {
  showLogicTab: true,
  isAutoSave: true
};

export default {
  name: "survey-creator",
  mounted() {
    const creator = new SurveyCreator(creatorOptions);
  }
};
</script>
```

<details>
  <summary>View Full Code</summary>

```js
<script>
import { SurveyCreator } from "survey-creator-knockout";
import "survey-core/defaultV2.min.css";
import "survey-creator-core/survey-creator-core.min.css";

const creatorOptions = {
  showLogicTab: true,
  isAutoSave: true
};

export default {
  name: "survey-creator",
  mounted() {
    const creator = new SurveyCreator(creatorOptions);
  }
};
</script>
```
</details>

## Render Survey Creator

Switch to the component template. Add a page element that will serve as the Survey Creator container:

```html
<template>
  <div id="surveyCreator" />
</template>

<style scoped>
#surveyCreator {
  height: 100vh;
  width: 100vw;
}
</style>
```

To render Survey Creator in the page element, call the `render(containerId)` method on the Survey Creator instance you created in the previous step:

```js
<script>
// ...
export default {
  // ...
  mounted() {
    const creator = new SurveyCreator(creatorOptions);
    creator.render("surveyCreator");
  }
};
</script>
```

<details>
  <summary>View Full Code</summary>

```js
<template>
  <div id="surveyCreator" />
</template>

<script>
import { SurveyCreator } from "survey-creator-knockout";
import "survey-core/defaultV2.min.css";
import "survey-creator-core/survey-creator-core.min.css";

const creatorOptions = {
  showLogicTab: true,
  isAutoSave: true
};

export default {
  name: "survey-creator",
  mounted() {
    const creator = new SurveyCreator(creatorOptions);
    creator.render("surveyCreator");
  }
};
</script>
<style scoped>
#surveyCreator {
  height: 100vh;
  width: 100vw;
}
</style>
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
<script>
// ...
export default {
  // ...
  mounted() {
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
    creator.render("surveyCreator");
  }
};

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
</script>
```

To load a survey model schema JSON into Survey Creator, assign the schema to Survey Creator's [`JSON`](https://surveyjs.io/Documentation/Survey-Creator?id=surveycreator#JSON) or [`text`](https://surveyjs.io/Documentation/Survey-Creator?id=surveycreator#text) property. Use `text` if the JSON object is converted to a string; otherwise, use `JSON`. The following code takes a survey model schema from the `localStorage`. If the schema is not found (for example, when Survey Creator is launched for the first time), a default JSON is used:


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

export default {
  // ...
  mounted() {
    // ...
    creator.text = window.localStorage.getItem("survey-json") || JSON.stringify(defaultJson);
    // ...
  }
};
```

<details>
  <summary>View Full Code</summary>

```js
<template>
  <div id="surveyCreator" />
</template>

<script>
import { SurveyCreator } from "survey-creator-knockout";
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

export default {
  name: "survey-creator",
  mounted() {
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
    creator.render("surveyCreator");
  }
};

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
</script>
<style scoped>
#surveyCreator {
  height: 100vh;
  width: 100vw;
}
</style>
```
</details>

## Manage Image Uploads

When survey authors design a form or questionnaire, they can add images to use as a survey [logo](https://surveyjs.io/form-library/documentation/api-reference/survey-data-model#logo) or [background](https://surveyjs.io/form-library/documentation/api-reference/survey-data-model#backgroundImage), in the survey header, or within [Image](https://surveyjs.io/form-library/examples/add-image-and-video-to-survey/) and [Image Picker](https://surveyjs.io/form-library/examples/image-picker-question/) questions. Those images are embedded in the survey and theme JSON schemas as Base64 URLs. However, this technique increases the schema size. To avoid this, you can upload images to a server and save only image links in the JSON schemas.

To implement image upload, handle the [`onUploadFile`](https://surveyjs.io/survey-creator/documentation/api-reference/survey-creator#onUploadFile) event. Its `options.files` parameter stores the images you should send to your server. Once the server responds with an image link, call the `options.callback(status, imageLink)` method. Pass `"success"` as the `status` parameter and a link to the uploaded image as the `imageLink` parameter.

```js
// ...
export default {
  // ...
  mounted() {
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
};
```

<details>
  <summary>View Full Code</summary>

```js
<template>
  <div id="surveyCreator" />
</template>

<script>
import { SurveyCreator } from "survey-creator-knockout";
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

export default {
  name: "survey-creator",
  mounted() {
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
    creator.render("surveyCreator");
  }
};

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
</script>
<style scoped>
#surveyCreator {
  height: 100vh;
  width: 100vw;
}
</style>
```
</details>

[View Demo](https://surveyjs.io/survey-creator/examples/file-upload/ (linkStyle))

To view the application, run `npm run serve` in a command line and open [http://localhost:8080/](http://localhost:8080/) in your browser.

[View Full Code on GitHub](https://github.com/surveyjs/code-examples/tree/main/get-started-creator/vue (linkStyle))

## Further Reading

- [Localization](https://surveyjs.io/Documentation/Survey-Creator?id=localization)
- [Property Grid Customization](https://surveyjs.io/Documentation/Survey-Creator?id=property-grid)
- [Toolbox Customization](https://surveyjs.io/Documentation/Survey-Creator?id=toolbox)
- [Survey Customization](https://surveyjs.io/Documentation/Survey-Creator?id=survey-customization)
- [Create a Custom Widget](https://surveyjs.io/Documentation/Survey-Creator?id=Create-Custom-Widget)