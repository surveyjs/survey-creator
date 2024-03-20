---
title: Vue Form Builder | Generate dynamic JSON forms in your Vue.js application
description: SurveyJS Form Builder for Vue is an open-source client-side component that fully integrates into your Vue application and generates form JSON definitions (schemas) behind the scenes. It offers a user-friendly drag-and-drop interface, GUI for form branching, and an integrated theme editor for customizing form design.
---
# Form Builder for Vue.js

[SurveyJS Vue Form Builder](https://surveyjs.io/create-free-survey) is an open-source UI component that seamlessly integrates with any backend system and allows you to create and style multiple dynamic HTML forms in any Vue application. This component generates form definitions (schemas) in real-time and offers a no-code drag-and-drop interface that makes form creation accessible to anyone. The form builder features a dedicated GUI for conditional rules and form branching and an integrated CSS theme editor for custom form styling and branding. This step-by-step tutorial will help you get started with the Form Builder component in a Vue 2 or Vue 3 application. To add the component to your application, follow the steps below:

- [Add Survey Creator to a Vue 3 Application](#add-survey-creator-to-a-vue-3-application)
  - [Install the `survey-creator-vue` npm Package](#install-the-survey-creator-vue-npm-package)
  - [Configure Styles](#configure-styles)
  - [Configure Survey Creator](#configure-survey-creator)
  - [Render Survey Creator](#render-survey-creator)
  - [Save and Load Survey Model Schemas](#save-and-load-survey-model-schemas)
  - [Manage Image Uploads](#manage-image-uploads)
- [Add Survey Creator to a Vue 2 Application](#add-survey-creator-to-a-vue-2-application)
  - [Install the `survey-creator-knockout` npm Package](#install-the-survey-creator-knockout-npm-package)
  - [Configure Styles](#configure-styles-1)
  - [Configure Survey Creator](#configure-survey-creator-1)
  - [Render Survey Creator](#render-survey-creator-1)
  - [Save and Load Survey Model Schemas](#save-and-load-survey-model-schemas-1)
  - [Manage Image Uploads](#manage-image-uploads-1)

[View Full Code for Vue 3](https://github.com/surveyjs/code-examples/tree/main/get-started-creator/vue3 (linkStyle))
[View Full Code for Vue 2](https://github.com/surveyjs/code-examples/tree/main/get-started-creator/vue (linkStyle))

If you are looking for a quick-start application that includes all SurveyJS components, refer to the following GitHub repositories:

- <a href="https://github.com/surveyjs/surveyjs_vue3_quickstart" target="_blank">SurveyJS + Vue 3 Quickstart Template</a>
- <a href="https://github.com/surveyjs/surveyjs_vue_quickstart" target="_blank">SurveyJS + Vue 2 Quickstart Template</a>

> In this guide, the terms "Form Builder" and "Survey Creator" are used interchangeably and both refer to the SurveyJS form building component for Vue.js.

## Add Survey Creator to a Vue 3 Application

### Install the `survey-creator-vue` npm Package

Survey Creator for Vue 3 consists of two npm packages: [`survey-creator-core`](https://www.npmjs.com/package/survey-creator-core) (platform-independent code) and [`survey-creator-vue`](https://www.npmjs.com/package/survey-creator-vue) (rendering code). Run the following command to install `survey-creator-vue`. The `survey-creator-core` package will be installed automatically as a dependency.

```cmd
npm install survey-creator-vue --save
```

### Configure Styles

Import Survey Creator and SurveyJS Form Library style sheets in the Vue 3 component that will render Survey Creator:

```html
<script setup lang="ts">
import 'survey-core/defaultV2.min.css';
import "survey-creator-core/survey-creator-core.min.css";
</script>

<template>
  <!-- ... -->
</template>
```

### Configure Survey Creator

To configure the Survey Creator component, specify [its properties](https://surveyjs.io/survey-creator/documentation/api-reference/icreatoroptions) in a configuration object. In this tutorial, the object enables the following properties:

- [`showLogicTab`](https://surveyjs.io/survey-creator/documentation/api-reference/icreatoroptions#showLogicTab)        
Displays the Logic tab in the tab panel.

- [`isAutoSave`](https://surveyjs.io/survey-creator/documentation/api-reference/icreatoroptions#isAutoSave)        
Automatically saves the survey JSON schema on every change.

```html
<script setup lang="ts">
// ...
import type { ICreatorOptions } from "survey-creator-core";

const creatorOptions: ICreatorOptions = {
  showLogicTab: true,
  isAutoSave: true
};
</script>
```

Pass the configuration object to the `SurveyCreatorModel` constructor as shown in the code below to instantiate Survey Creator. Assign the produced instance to a constant that will be used later to render the component:

```html
<script setup lang="ts">
// ...
import { SurveyCreatorModel } from "survey-creator-core";
// ...
const creator = new SurveyCreatorModel(creatorOptions);
</script>
```

<details>
  <summary>View Full Code</summary>

```html
<script setup lang="ts">
import 'survey-core/defaultV2.min.css';
import "survey-creator-core/survey-creator-core.min.css";

import type { ICreatorOptions } from "survey-creator-core";
import { SurveyCreatorModel } from "survey-creator-core";

const creatorOptions: ICreatorOptions = {
  showLogicTab: true,
  isAutoSave: true
};
const creator = new SurveyCreatorModel(creatorOptions);
</script>

<template>
  <!-- ... -->
</template>
```
</details>

### Render Survey Creator

Survey Creator rendering code is encapsulated in the `SurveyCreatorComponent`. To use it in your template, you need to install `surveyPlugin` (for SurveyJS Form Library) and `surveyCreatorPlugin`. Open the `main.ts` file, import these plugins, and install them using the `app.use()` method *in the exact order shown below*:

```js
// main.ts
import { createApp } from "vue";
import App from "./App.vue";
import { surveyPlugin } from "survey-vue3-ui";
import { surveyCreatorPlugin } from "survey-creator-vue";

createApp(App)
  .use(surveyPlugin)
  .use(surveyCreatorPlugin)
  .mount("#app");
```

To render Survey Creator, add `SurveyCreatorComponent` to your template, and pass the model instance you created in the previous step to the component's `model` attribute:

```html
<script setup lang="ts">
// ...
</script>

<template>
  <SurveyCreatorComponent :model="creator" />
</template>
```

<details>
  <summary>View Full Code</summary>

```html
<!-- components/SurveyCreator.vue -->
<script setup lang="ts">
import 'survey-core/defaultV2.min.css';
import "survey-creator-core/survey-creator-core.min.css";

import type { ICreatorOptions } from "survey-creator-core";
import { SurveyCreatorModel } from "survey-creator-core";

const creatorOptions: ICreatorOptions = {
  showLogicTab: true,
  isAutoSave: true
};
const creator = new SurveyCreatorModel(creatorOptions);
</script>

<template>
  <SurveyCreatorComponent :model="creator" />
</template>
```

```js
// main.ts
import { createApp } from "vue";
import App from "./App.vue";
import { surveyPlugin } from "survey-vue3-ui";
import { surveyCreatorPlugin } from "survey-creator-vue";

createApp(App)
  .use(surveyPlugin)
  .use(surveyCreatorPlugin)
  .mount("#app");
```
</details>

### Save and Load Survey Model Schemas

Survey Creator produces survey model schemas as JSON objects. You can persist these objects on your server: save updates and restore previously saved schemas. To save a JSON object, implement the `saveSurveyFunc` function. It accepts two arguments:

- `saveNo`      
An incremental number of the current change. Since web services are asynchronous, you cannot guarantee that the service receives the changes in the same order as the client sends them. For example, change #11 may arrive to the server faster than change #10. In your web service code, update the storage only if you receive changes with a higher `saveNo`.

- `callback`        
A callback function. Call it and pass `saveNo` as the first argument. Set the second argument to `true` or `false` based on whether the server applied or rejected the change.

The following code shows how to use the `saveSurveyFunc` function to save a survey model schema in a <a href="https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage" target="_blank">`localStorage`</a> or in your web service:

```html
<script setup lang="ts">
// ...
creator.saveSurveyFunc = (saveNo: number, callback: Function) => { 
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

// If you use a web service:
function saveSurveyJson(url: string, json: object, saveNo: number, callback: Function) {
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

<template>
  <!-- ... -->
</template>
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

```html
<script setup lang="ts">
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

// ...
creator.text = window.localStorage.getItem("survey-json") || JSON.stringify(defaultJson);
// ...
</script>

<template>
  <!-- ... -->
</template>
```

<details>
  <summary>View Full Code</summary>

```html
<!-- components/SurveyCreator.vue -->
<script setup lang="ts">
import 'survey-core/defaultV2.min.css';
import "survey-creator-core/survey-creator-core.min.css";

import type { ICreatorOptions } from "survey-creator-core";
import { SurveyCreatorModel } from "survey-creator-core";

const creatorOptions: ICreatorOptions = {
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
const creator = new SurveyCreatorModel(creatorOptions);
creator.text = window.localStorage.getItem("survey-json") || JSON.stringify(defaultJson);
creator.saveSurveyFunc = (saveNo: number, callback: Function) => { 
  window.localStorage.setItem("survey-json", creator.text);
  callback(saveNo, true);
  // saveSurveyJson(
  //     "https://your-web-service.com/",
  //     creator.JSON,
  //     saveNo,
  //     callback
  // );
};

// function saveSurveyJson(url: string, json: object, saveNo: number, callback: Function) {
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

<template>
  <SurveyCreatorComponent :model="creator" />
</template>
```

```js
// main.ts
import { createApp } from "vue";
import App from "./App.vue";
import { surveyPlugin } from "survey-vue3-ui";
import { surveyCreatorPlugin } from "survey-creator-vue";

createApp(App)
  .use(surveyPlugin)
  .use(surveyCreatorPlugin)
  .mount("#app");
```
</details>

### Manage Image Uploads

When survey authors design a form or questionnaire, they can add images to use as a survey [logo](https://surveyjs.io/form-library/documentation/api-reference/survey-data-model#logo) or [background](https://surveyjs.io/form-library/documentation/api-reference/survey-data-model#backgroundImage), in the survey header, or within [Image](https://surveyjs.io/form-library/examples/add-image-and-video-to-survey/) and [Image Picker](https://surveyjs.io/form-library/examples/image-picker-question/) questions. Those images are embedded in the survey and theme JSON schemas as Base64 URLs. However, this technique increases the schema size. To avoid this, you can upload images to a server and save only image links in the JSON schemas.

To implement image upload, handle the [`onUploadFile`](https://surveyjs.io/survey-creator/documentation/api-reference/survey-creator#onUploadFile) event. Its `options.files` parameter stores the images you should send to your server. Once the server responds with an image link, call the `options.callback(status, imageLink)` method. Pass `"success"` as the `status` parameter and a link to the uploaded image as the `imageLink` parameter.

```html
<script setup lang="ts">
// ...
creator.onUploadFile.add((_, options) => {
  const formData = new FormData();
  options.files.forEach((file: File) => {
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
</script>

<template>
  <!-- ... -->
</template>
```

To view the application, run `npm run dev` in a command line and open [http://localhost:5173/](http://localhost:5173/) in your browser.

<details>
  <summary>View Full Code</summary>

```html
<!-- components/SurveyCreator.vue -->
<script setup lang="ts">
import 'survey-core/defaultV2.min.css';
import "survey-creator-core/survey-creator-core.min.css";

import type { ICreatorOptions } from "survey-creator-core";
import { SurveyCreatorModel } from "survey-creator-core";

const creatorOptions: ICreatorOptions = {
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
const creator = new SurveyCreatorModel(creatorOptions);
creator.text = window.localStorage.getItem("survey-json") || JSON.stringify(defaultJson);
creator.saveSurveyFunc = (saveNo: number, callback: Function) => { 
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
//   options.files.forEach((file: File) => {
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

// function saveSurveyJson(url: string, json: object, saveNo: number, callback: Function) {
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

<template>
  <SurveyCreatorComponent :model="creator" />
</template>
```

```js
// main.ts
import { createApp } from "vue";
import App from "./App.vue";
import { surveyPlugin } from "survey-vue3-ui";
import { surveyCreatorPlugin } from "survey-creator-vue";

createApp(App)
  .use(surveyPlugin)
  .use(surveyCreatorPlugin)
  .mount("#app");
```
</details>

[View Demo](https://surveyjs.io/survey-creator/examples/file-upload/vue3js (linkStyle))

[View Full Code on GitHub](https://github.com/surveyjs/code-examples/tree/main/get-started-creator/vue3 (linkStyle))

## Add Survey Creator to a Vue 2 Application

### Install the `survey-creator-knockout` npm Package

Survey Creator does not provide a native implementation for Vue 2. However, you can integrate the version for Knockout into your Vue 2 application. Run the following command to install the <a href="https://www.npmjs.com/package/survey-creator-knockout" target="_blank">survey-creator-knockout</a> package:

```cmd
npm install survey-creator-knockout --save
```

### Configure Styles

Import Survey Creator and SurveyJS Form Library style sheets as shown below:

```js
<script>
import "survey-core/defaultV2.min.css";
import "survey-creator-core/survey-creator-core.min.css";
</script>
```

### Configure Survey Creator

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

### Render Survey Creator

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

### Save and Load Survey Model Schemas

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

### Manage Image Uploads

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

To view the application, run `npm run serve` in a command line and open [http://localhost:8080/](http://localhost:8080/) in your browser.

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

[View Demo](https://surveyjs.io/survey-creator/examples/file-upload/vuejs (linkStyle))

[View Full Code on GitHub](https://github.com/surveyjs/code-examples/tree/main/get-started-creator/vue (linkStyle))

## Further Reading

- [Localization](https://surveyjs.io/Documentation/Survey-Creator?id=localization)
- [Property Grid Customization](https://surveyjs.io/Documentation/Survey-Creator?id=property-grid)
- [Toolbox Customization](https://surveyjs.io/Documentation/Survey-Creator?id=toolbox)
- [Survey Customization](https://surveyjs.io/Documentation/Survey-Creator?id=survey-customization)
- [Create a Custom Widget](https://surveyjs.io/Documentation/Survey-Creator?id=Create-Custom-Widget)
