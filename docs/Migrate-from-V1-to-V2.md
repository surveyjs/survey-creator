# Guid to migrate from V1 to V2

We did our best to make sure that SurveyJS Creator V2 compatible with V1. Unfortunately, we made a lot of changes and the biggest one is the support react and later other JavaScript frameworks. We have to divide our code from knockoutjs and this could not change the code dramatically.

Moreover, SurveyJS Creator V2 UI changed dramatically. It is not a face lifting. It is a deep re-design and re-thinking based on our customers and users feedback.

If we are talking about technical and internal code changes, then the biggest change in V2 that we have replaced custom UI in property grid, logic tab, translation tab, Embedded Survey tab with Survey widget. In fact, we are creating all forms using our own Survey. Since Survey Library is already support different frameworks and it has been tested on accessibility and other important functionality, it let us to support react framework and soon other platforms comparatively easy. It creates some incompatibility with V1, for example in creating adorners and custom property editors, but we strongly believe it costs it.

For compatibility reason, when it is possible, we are logging warning into console that a function/property from V1 doesn’t work in V2 and you need to use another approach or parameters.

## Knockout version

If you are going to continue to use the knockout version, then in most cases you will need to make two changes:

### Step 1. Change JavaScript and CSS links

You will need to change the links to the Survey Library. We are using the same library, but for Creator V2 you will need SurveyJS Library slitted on two modules: framework independent part (core) and framework depended on part (knockout in our case).

In our case it will be:

```javascript
<script src="https://unpkg.com/survey-core@SurveyJSVersion/survey.core.min.js"></script>
<script src="https://unpkg.com/survey-knockout@SurveyJSVersion/survey-knockout-ui.min.js"></script>
```

Instead of one link in V1:

```javascript
<script src="https://unpkg.com/survey-knockout@SurveyJSVersion/survey-ko.min.js"></script>
```

You will need to make sure to remove the old SurveyJS Creator V1 links and replace it with new:

```javascript
<script src="https://unpkg.com/survey-creator@SurveyJSVersion/survey-creator-knockout.min.js"></script>
<link href="https://unpkg.com/survey-creator@SurveyJSVersion/survey-creator-knockout.css" type="text/css" rel="stylesheet"/>
```

### Step 2. Optionally change constructor parameters and explicitly call render function

You will need to make sure to call the render function to render the Creator widget. We do not render SurveyJS Creator in constructor, and we can do it V1. Moreover, we will log a warning in the console if you pass a DOM element or element id into constructor as the first parameter. We will simply ignore it. It means instead of one line of code in V1:

```javascript
var creator = new SurveyCreator.SurveyCreator("creatorElement", options);
```

You will need at least two lines of code in V2:

```javascript
var creator = new SurveyCreator.SurveyCreator(options);
//Add event handlers, survey JSON and any customization code you need here
creator.render("creatorElement");
```

In the most cases, that is all you need to do. We will discuss advanced changes later.

## React version

We did not have SurveyJS Creator for react framework before. React developers use V1 knockout version as a black box. Now SurveyJS Creator V2 for react and a truly react widget and it should be used a common react widget. It does not mean that all your code that you have created for V1 will go into trash if you are using react in your application. The most code will be still valid, except the code that deals with rendering and some advanced functionality as custom property editors.

If you migrate your application with SurveyJS Creator from V1 into V2 then you will need to make sure to use the correct packages.

You will require to install `survey-creator-react`. It depends on `survey-react-ui` and `survey-core` that will be installed as well.
Your Survey Creator component code can look like this:

```javascript
import React, { Component } from "react";
import * as SurveyCreator from "survey-creator-react";
import "survey-core/modern.css";
import "survey-creator-react/survey-creator-react.css";

class SurveyComponent extends Component {
    constructor() {
        super();
        const options = { showLogicTab: true };
        this.creator = new SurveyCreator.SurveyCreator(options);
        //Add event handlers, survey JSON and any customization code you need here
    }
    render() {
        return <SurveyCreator.SurveyCreatorComponent creator={this.creator} />;
    }
}

export default SurveyComponent;
```
