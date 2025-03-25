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

- <a href="https://github.com/surveyjs/surveyjs-nextjs" target="_blank">SurveyJS + Next.js Quickstart Template</a>
- <a href="https://github.com/surveyjs/surveyjs-remix" target="_blank">SurveyJS + Remix Quickstart Template</a>

> In this guide, the terms "Form Builder" and "Survey Creator" are used interchangeably and both refer to the SurveyJS form building component for React.

<div id="install-the-survey-creator-react-npm-package"></div>

## Install the React Form Builder npm Package

Survey Creator for React consists of two npm packages: [`survey-creator-core`](https://www.npmjs.com/package/survey-creator-core) (platform-independent code) and [`survey-creator-react`](https://www.npmjs.com/package/survey-creator-react) (rendering code). Run the following command to install `survey-creator-react`. The `survey-creator-core` package will be installed automatically as a dependency.

```cmd
npm install survey-creator-react --save
```

## Configure Styles

Create a React component that will render Survey Creator and import Survey Creator and SurveyJS Form Library style sheets as shown below:

```js
// components/SurveyCreator.tsx
import "survey-core/survey-core.css";
import "survey-creator-core/survey-creator-core.css";
```

Survey Creator allows users to customize its interface at runtime using UI themes. Four themes are available out-of-the-box: Light, Dark, Contrast, and Survey Creator 2020. The configuration above applies the Light theme. If you want to apply a different predefined theme or create a custom theme, refer to the following help topic for detailed instructions:

[Themes & Styles](https://surveyjs.io/survey-creator/documentation/survey-creator-interface-themes (linkStyle))

## Configure Survey Creator

To configure the Survey Creator component, specify [its properties](https://surveyjs.io/survey-creator/documentation/api-reference/icreatoroptions) in a configuration object. In this tutorial, the object enables the following properties:

- [`autoSaveEnabled`](https://surveyjs.io/survey-creator/documentation/api-reference/icreatoroptions#autoSaveEnabled)        
Automatically saves the survey JSON schema on every change.

- [`collapseOnDrag`](https://surveyjs.io/survey-creator/documentation/api-reference/icreatoroptions#collapseOnDrag)        
Collapses pages on the design surface when users start dragging a survey element.

```js
// components/SurveyCreator.tsx
import { ICreatorOptions } from "survey-creator-core";

const defaultCreatorOptions: ICreatorOptions = {
  autoSaveEnabled: true,
  collapseOnDrag: true
};
```

Pass the configuration object to the `SurveyCreator` constructor as shown in the code below to instantiate Survey Creator. Assign the produced instance to a constant that will be used later to render the component:

```js
// components/SurveyCreator.tsx
// ...
import { useState } from "react";
import { SurveyCreator } from "survey-creator-react";

const defaultCreatorOptions: ICreatorOptions = { /* ... */ }

export default function SurveyCreatorWidget(props: { json?: Object, options?: ICreatorOptions }) {
  let [creator, setCreator] = useState<SurveyCreator>();

  if (!creator) {
    creator = new SurveyCreator(props.options || defaultCreatorOptions);
    setCreator(creator);
  }

  return "...";
}
```

<details>
  <summary>View Full Code</summary>

```js
// components/SurveyCreator.tsx
import { useState } from "react";
import { ICreatorOptions } from "survey-creator-core";
import { SurveyCreator } from "survey-creator-react";
import "survey-core/survey-core.css";
import "survey-creator-core/survey-creator-core.css";

const defaultCreatorOptions: ICreatorOptions = {
  autoSaveEnabled: true,
  collapseOnDrag: true
};

export default function SurveyCreatorWidget(props: { json?: Object, options?: ICreatorOptions }) {
  let [creator, setCreator] = useState<SurveyCreator>();

  if (!creator) {
    creator = new SurveyCreator(props.options || defaultCreatorOptions);
    setCreator(creator);
  }

  return "...";
}
```

</details>

## Render Survey Creator

To render Survey Creator, import the `SurveyCreatorComponent`, add it to the template, and pass the instance you created in the previous step to the component's `creator` attribute, as shown below.

SurveyJS components do not support server-side rendering (SSR). If you are using [Next.js](https://nextjs.org) or another framework that has adopted React Server Components, you need to explicitly mark the React component that renders a SurveyJS component as client code using the ['use client'](https://react.dev/reference/react/use-client) directive.

```js
// components/SurveyCreator.tsx
'use client'
// ...
import { SurveyCreatorComponent } from "survey-creator-react";

const defaultCreatorOptions: ICreatorOptions = { /* ... */ }

export function SurveyCreatorWidget() {
  let [creator, setCreator] = useState<SurveyCreator>();

  if (!creator) {
    creator = new SurveyCreator(props.options || defaultCreatorOptions);
    setCreator(creator);
  }

  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <SurveyCreatorComponent creator={creator} />
    </div>
  );
}
```

The lack of SSR support may cause hydration errors if a SurveyJS component is pre-rendered on the server. To ensure against those errors, use dynamic imports with `ssr: false` for React components that render SurveyJS components. The following code shows how to do this in Next.js:

```js
// creator/page.tsx
import dynamic from 'next/dynamic';

const SurveyCreatorComponent = dynamic(() => import("@/components/SurveyCreator"), {
  ssr: false
});

export default function SurveyCreator() {
  return (
    <SurveyCreatorComponent />
  );
}
```

<details>
  <summary>View Full Code</summary>

```js
// components/SurveyCreator.tsx
'use client'

import { useState } from "react";
import { ICreatorOptions } from "survey-creator-core";
import { SurveyCreator, SurveyCreatorComponent } from "survey-creator-react";
import "survey-core/survey-core.css";
import "survey-creator-core/survey-creator-core.css";

const defaultCreatorOptions: ICreatorOptions = {
  autoSaveEnabled: true,
  collapseOnDrag: true
};

export default function SurveyCreatorWidget(props: { json?: Object, options?: ICreatorOptions }) {
  let [creator, setCreator] = useState<SurveyCreator>();

  if (!creator) {
    creator = new SurveyCreator(props.options || defaultCreatorOptions);
    setCreator(creator);
  }

  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <SurveyCreatorComponent creator={creator} />
    </div>
  );
}
```

```js
// creator/page.tsx
import dynamic from 'next/dynamic';

const SurveyCreatorComponent = dynamic(() => import("@/components/SurveyCreator"), {
  ssr: false
});

export default function SurveyCreator() {
  return (
    <SurveyCreatorComponent />
  );
}
```
</details>

## Save and Load Survey Model Schemas

Survey Creator produces survey model schemas as JSON objects. You can persist these objects on your server: save updates and restore previously saved schemas. To save a JSON object, implement the [`saveSurveyFunc`](/survey-creator/documentation/api-reference/survey-creator#saveSurveyFunc) function. It accepts two arguments:

- `saveNo`      
An incremental number of the current change. Since web services are asynchronous, you cannot guarantee that the service receives the changes in the same order as the client sends them. For example, change #11 may arrive to the server faster than change #10. In your web service code, update the storage only if you receive changes with a higher `saveNo`.

- `callback`        
A callback function. Call it and pass `saveNo` as the first argument. Set the second argument to `true` or `false` based on whether the server applied or rejected the change.

The following code shows how to use the `saveSurveyFunc` function to save a survey model schema in the browser's <a href="https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage" target="_blank">`localStorage`</a> or in your web service:


```js
// components/SurveyCreator.tsx
// ...
export default function SurveyCreatorWidget(props: { json?: Object, options?: ICreatorOptions }) {
  // ...
  creator.saveSurveyFunc = (saveNo: number, callback: (num: number, status: boolean) => void) => {
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
function saveSurveyJson (url: string, json: object, saveNo: number, callback: (num: number, status: boolean) => void) {
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

[View Demo](/survey-creator/examples/set-how-survey-configuration-changes-are-saved/ (linkStyle))

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

To load a survey model schema into Survey Creator, assign the schema to Survey Creator's [`JSON`](https://surveyjs.io/survey-creator/documentation/api-reference/survey-creator#JSON) or [`text`](https://surveyjs.io/survey-creator/documentation/api-reference/survey-creator#text) property. Use `text` if the JSON object is converted to a string; otherwise, use `JSON`. The following code takes a survey model schema from component props or the `localStorage`. If the schema is not found (for example, when Survey Creator is launched for the first time), a default JSON is used:


```js
// components/SurveyCreator.tsx
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

export default function SurveyCreatorWidget(props: { json?: Object, options?: ICreatorOptions }) {
  // ...
  creator.text = JSON.stringify(props.json) || window.localStorage.getItem("survey-json") || JSON.stringify(defaultJson);
  // ...
}
```

<details>
  <summary>View Full Code</summary>

```js
// components/SurveyCreator.tsx
'use client'

import { useState } from "react";
import { ICreatorOptions } from "survey-creator-core";
import { SurveyCreatorComponent, SurveyCreator } from "survey-creator-react";
import "survey-core/survey-core.css";
import "survey-creator-core/survey-creator-core.css";

const defaultCreatorOptions: ICreatorOptions = {
  autoSaveEnabled: true
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

export default function SurveyCreatorWidget(props: { json?: Object, options?: ICreatorOptions }) {
  let [creator, setCreator] = useState<SurveyCreator>();

  if (!creator) {
    creator = new SurveyCreator(props.options || defaultCreatorOptions);
    setCreator(creator);
  }

  creator.saveSurveyFunc = (saveNo: number, callback: (num: number, status: boolean) => void) => {
    window.localStorage.setItem("survey-json", creator.text);
    callback(saveNo, true);
    // saveSurveyJson(
    //     "https://your-web-service.com/",
    //     creator.JSON,
    //     saveNo,
    //     callback
    // );
  };

  creator.text = JSON.stringify(props.json) || window.localStorage.getItem("survey-json") || JSON.stringify(defaultJson);

  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <SurveyCreatorComponent creator={creator} />
    </div>
  );
}

// function saveSurveyJson (url: string, json: object, saveNo: number, callback: (num: number, status: boolean) => void) {
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

```js
// creator/page.tsx
import dynamic from 'next/dynamic';

const SurveyCreatorComponent = dynamic(() => import("@/components/SurveyCreator"), {
  ssr: false
});

export default function SurveyCreator() {
  return (
    <SurveyCreatorComponent />
  );
}
```

</details>

## Manage Image Uploads

When survey authors design a form or questionnaire, they can add images to use as a survey [logo](https://surveyjs.io/form-library/documentation/api-reference/survey-data-model#logo) or [background](https://surveyjs.io/form-library/documentation/api-reference/survey-data-model#backgroundImage), in the survey header, or within [Image](https://surveyjs.io/form-library/examples/add-image-and-video-to-survey/) and [Image Picker](https://surveyjs.io/form-library/examples/image-picker-question/) questions. Those images are embedded in the survey and theme JSON schemas as Base64 URLs. However, this technique increases the schema size. To avoid this, you can upload images to a server and save only image links in the JSON schemas.

To implement image upload, handle the [`onUploadFile`](https://surveyjs.io/survey-creator/documentation/api-reference/survey-creator#onUploadFile) event. Its `options.files` parameter stores the images you should send to your server. Once the server responds with an image link, call the `options.callback(status, imageLink)` method. Pass `"success"` as the `status` parameter and a link to the uploaded image as the `imageLink` parameter.

```js
// components/SurveyCreator.tsx
// ...
import { SurveyCreatorModel, UploadFileEvent } from "survey-creator-core";

export default function SurveyCreatorWidget(props: { json?: Object, options?: ICreatorOptions }) {
  // ...
  creator.onUploadFile.add((_: SurveyCreatorModel, options: UploadFileEvent) => {
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
}
```

[View Demo](https://surveyjs.io/survey-creator/examples/file-upload/reactjs (linkStyle))

To view the application, run `npm run dev` in a command line and open [http://localhost:3000/](http://localhost:3000/) in your browser.

<details>
  <summary>View Full Code</summary>

```js
// components/SurveyCreator.tsx
// ...
'use client'

import { useState } from "react";
import {
  ICreatorOptions,
  // SurveyCreatorModel,
  // UploadFileEvent
} from "survey-creator-core";
import { SurveyCreatorComponent, SurveyCreator } from "survey-creator-react";
import "survey-core/survey-core.css";
import "survey-creator-core/survey-creator-core.css";

const defaultCreatorOptions: ICreatorOptions = {
  autoSaveEnabled: true
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

export default function SurveyCreatorWidget(props: { json?: Object, options?: ICreatorOptions }) {
  let [creator, setCreator] = useState<SurveyCreator>();

  if (!creator) {
    creator = new SurveyCreator(props.options || defaultCreatorOptions);
    setCreator(creator);
  }

  creator.saveSurveyFunc = (saveNo: number, callback: (num: number, status: boolean) => void) => {
    window.localStorage.setItem("survey-json", creator.text);
    callback(saveNo, true);
    // saveSurveyJson(
    //     "https://your-web-service.com/",
    //     creator.JSON,
    //     saveNo,
    //     callback
    // );
  };

  // creator.onUploadFile.add((_: SurveyCreatorModel, options: UploadFileEvent) => {
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

  creator.text = JSON.stringify(props.json) || window.localStorage.getItem("survey-json") || JSON.stringify(defaultJson);

  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <SurveyCreatorComponent creator={creator} />
    </div>
  );
}

// function saveSurveyJson (url: string, json: object, saveNo: number, callback: (num: number, status: boolean) => void) {
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

```js
// creator/page.tsx
import dynamic from 'next/dynamic';

const SurveyCreatorComponent = dynamic(() => import("@/components/SurveyCreator"), {
  ssr: false
});

export default function SurveyCreator() {
  return (
    <SurveyCreatorComponent />
  );
}
```

</details>

[View Full Code on GitHub](https://github.com/surveyjs/code-examples/tree/main/get-started-creator/react (linkStyle))

## (Optional) Enable Ace Editor in the JSON Editor Tab

The JSON Editor tab enables users to edit survey JSON schemas as text. To make the editing process more convenient, you can integrate the <a href="https://ace.c9.io/" target="_blank">Ace</a> code editor. Install the <a href="https://www.npmjs.com/package/ace-builds" target="_blank">`ace-builds`</a> package to add Ace to your project:

```sh
npm install ace-builds --save
```

Import Ace and required extensions in a React component that renders Survey Creator. For instance, the following code imports an extension that adds a Find/Replace dialog to Ace:

```js
// components/SurveyCreator.tsx
// ...
import "ace-builds/src-noconflict/ace";
import "ace-builds/src-noconflict/ext-searchbox";
// ...
```

[View Full Code on GitHub](https://github.com/surveyjs/code-examples/tree/main/get-started-creator/react (linkStyle))

## Further Reading

- [Localization](https://surveyjs.io/Documentation/Survey-Creator?id=localization)
- [Property Grid Customization](https://surveyjs.io/Documentation/Survey-Creator?id=property-grid)
- [Toolbox Customization](https://surveyjs.io/Documentation/Survey-Creator?id=toolbox)
- [Survey Customization](https://surveyjs.io/Documentation/Survey-Creator?id=survey-customization)
- [Create a Custom Widget](https://surveyjs.io/Documentation/Survey-Creator?id=Create-Custom-Widget)
