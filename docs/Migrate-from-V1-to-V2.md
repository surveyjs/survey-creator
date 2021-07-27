# Migration Guide for SurveyJS Creator - from V1 to V2

## Basics

We always do our best to minimize the impact an upgrade might have on existing projects. However, it is often necessary to change the UI, API, or behavior of our tools to improve them.  


In V2 of SurveyJS Creator, we have made a lot of changes. The most important are as follows.

* ### Native support for React
  The biggest change is a provided native support for the React JavaScript framework (and later we plan to add a similar native support for other JavaScript frameworks, such as Angular2 and Vue). For this purpose, we had to reorganize our source code and divide it into framework-related packages. As a result (from [v.1.8.13](https://github.com/surveyjs/survey-creator/tree/v1.8.13)?), we broke our Knockout.js code base into parts to stand out a common core part and detach parts for individual frameworks.  
  This change should not affect the working projects of our customers.


* ### Changes in UI 
  We changed the SurveyJS Creator's UI dramatically. New UI is not a face lifting. It is a deep re-design and re-thinking which were made based on the constructive and reasonable feedback provided by our customers and their users.

  Remarkable changes have been made to the following UI elements:  

  * Properties grid, 
  * Logic tab, 
  * Translation tab, 
  * Embedded Survey tab.  
  
  In V2, they render their contents with the help of our Survey widget instead of using previous redundant custom code.

In fact, we now render all forms in SurveyJS Creator by using our own Survey component that is implemented as SurveyModel in our main library - SurveyJS Library.  
And since SurveyJS Library already supports different frameworks and has already been thoroughly tested for accessibility and important functional requirements and use-cases, it empowers us to easily support the React framework in our V2 (and to provide support for other platforms in the same way in the near future). It should be admitted, that this approach exposes some incompatibilities with V1 (for example, in creating adorners and custom property editors). However, we strongly believe that the benefits outweigh the costs.

To facilitate your migration from V1 to V2, we try to log  potential incompatibilities as warnings into Console, when it is possible. A warning names a function or property that does not work in V2 and suggests you to use another approach or parameters. 


## To continue using Knockout

If you are going to continue using the Knockout version, you might need to make two changes in your projects. In most cases, they are:

### Step 1. Change JavaScript and CSS links
 
Change the links to the SurveyJS Library resources. 

#### Links to the SurveyJS Library's scripts

We still use the same library. However, for V2 of Creator you need to refer to the SurveyJS Library as to a library divided in two modules: a framework-independent part (core) and a framework-dependent part (Knockout in our case).

So, find and remove the following link (used in V1 as the [Add Survey Creator into your page](https://surveyjs.io/Documentation/Survey-Creator?id=Add-Survey-Creator-into-your-Web-Page#step-2.add-links-to-survey-creator-and-survey-library) topic suggested):

```javascript
<script src="https://unpkg.com/survey-knockout@SurveyJSVersion/survey-ko.min.js"></script>
```

And, in V2, add the following two references instead:

```javascript
<script src="https://unpkg.com/survey-core@SurveyJSVersion/survey.core.min.js"></script>

<script src="https://unpkg.com/survey-knockout@SurveyJSVersion/survey-knockout-ui.min.js"></script>
```

#### Links to the SurveyJS Creator's scripts and CSS

Additionally, make sure to remove the following old V1 links to SurveyJS Creator resources (script and CSS files):

```javascript
<script src="https://unpkg.com/survey-creator@SurveyJSVersion/survey-creator.min.js"></script>

<link href="https://unpkg.com/survey-creator@SurveyJSVersion/survey-creator.css" type="text/css" rel="stylesheet" />
```

Replace them with new references in V2, as follows:

```javascript
<script src="https://unpkg.com/survey-creator@SurveyJSVersion/survey-creator-knockout.min.js"></script>

<link href="https://unpkg.com/survey-creator@SurveyJSVersion/survey-creator-knockout.css" type="text/css" rel="stylesheet"/>
```



### Step 2. Optionally change constructor parameters and explicitly call a render function

In V2, we do not support rendering of a SurveyCreator instance in the SurveyCreator's constructor. You need to call a specific render function to render a SurveyCreator.

So, find all occurrences of specifying the Creator container element in the SurveyCreator's constructor (as the [Show Survey Creator on the Page](https://surveyjs.io/Documentation/Survey-Creator?id=Add-Survey-Creator-into-your-Web-Page#step-4.show-survey-creator-on-the-page) topic section previously suggested for V1).

```javascript
var creator = new SurveyCreator.SurveyCreator("creatorElement", options);
```

And modify them in the following manner by detaching the creation from the render (use the [render](https://surveyjs.io/Documentation/Survey-Creator?id=surveycreator#render) method to render the created instance). 

```javascript
var creator = new SurveyCreator.SurveyCreator(options);
// Add event handlers, survey JSON and any customization code you need here:
//...
creator.render("creatorElement"); // Finally, render the instance.
```

If you pass a DOM element or an element id into the SurveyCreator constructor as the first parameter, we (in V2) log a warning in the Console and ignore this constructor parameter in code.


In most cases, that's all you need to do to continue using the Knockout version in V2. The additional changes that relate to the advanced functionality of using custom property editors or custom adorners are addressed below.


## To start using React version

Prior to V2, React developers used our Knockout version (in V1) as a black box. We did not provide a native  SurveyJS Creator component for React framework.

In V2, the React version of the SurveyJS Creator is a truly React component that should be used as a common React widget.
It does not mean that if you are using React in your application, all code that you have created for V1 will go into trash.
The most of code is still valid, with an exception of the code that deals with rendering and some advanced functionality, such as custom property editors.

If your application uses SurveyJS Creator and you migrate from V1 to V2, make sure you use correct packages.
You need to install `survey-creator-react`. It depends on `survey-react-ui` and `survey-core` that will be installed as well.

As a result, your Survey Creator component code can look as follows:


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
        // Here go event handlers, survey JSON and any customization code you need.
    }
    render() {
        return <SurveyCreator.SurveyCreatorComponent creator={this.creator} />;
    }
}

export default SurveyComponent;
```



## Custom property editor

In V2, we implement the Properties window in a new manner - we render it using a Survey widget (SurveyModel) from our SurveyJS Library. This means that old code that relates to creating custom property editors and that worked fine in V1 will not work in V2.

The benefit of this change is that V2 makes it easier to set up a new property editor. All you need to do is to tell SurveyJS Creator what question type you want to use for a particular property.

Here is a simple example:

```javascript
// Register a new property for all questions.
Survey.Serializer.addProperty("question", {
    name: "shortname",
    type: "shorttext",
    isRequired: true,
    category: "general",
    visibleIndex: 3
});

// Register a new property editor for the "shorttext" property type
SurveyCreator.PropertyGridEditorCollection.register({
    // Returns true for a property with type "shorttext".
    fit: function (prop) {
        return prop.type === "shorttext";
    },
    // Returns a typical question JSON. This question will be used to edit the property value.
    getJSON: function (obj, prop, options) {
        return { type: "text", maxLength: 5 };
    }
});
```

You can override the default property editor and use your own property editor for any property by returning `true` in the `fit()` function.

## Custom adorners

We do not use an "after render" technique in the SurveyJS Creator V2 to render additional widgets for survey elements. Now we render them on the design surface using standard platform-dependent approaches: as templates - for Knockout, as React components - for React.
As a result, the old code used to render custom adorners will not work as well. SurveyJS Creator V2 simply ignores such a code now.

In V2, use the `onDefineElementMenuItems` event to add a new action to standard actions (adorners). You can also modify standard actions through this event.

The following code inserts a "Start with a new line" action before the "delete" action for all questions.

```javascript
creator.onDefineElementMenuItems.add((sender, options) => {
    // If an element doesn't have such a property, the element is not a question.
    if (options.obj.startWithNewLine === undefined) return;
    var question = options.obj;
    // Define a new bar item (action).
    var barItem = {
        id: "startWithNewLine", // Unique id
        css: () =>
            question.startWithNewLine ? "sv-action-bar-item--secondary" : "",
        title: "On new line", // Item text
        // An icon to render depending on a property's value:
        iconName: () => {
            if (question.startWithNewLine) {
                return "icon-switchactive_16x16";
            }
            return "icon-switchinactive_16x16";
        },
        // An action to perform on a click:
        action: () => {
            question.startWithNewLine = !question.startWithNewLine;
        }
    };
    // Find the "delete" action's position.
    var index = -1;
    for (var i = 0; i < options.items.length; i++) {
        if (options.items[i].id === "delete") {
            index = i;
            break;
        }
    }
    // Insert a new action before the "delete" action or at the end.
    if (index > -1) {
        options.items.splice(index, 0, barItem);
    } else {
        options.items.push(barItem);
    }
});
```
