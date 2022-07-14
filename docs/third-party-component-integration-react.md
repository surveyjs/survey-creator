# Integrate Third-Party React Components

This help topic describes how to integrate a third-party React component into a standalone survey and Survey Creator.

- [Create a Model](#create-a-model)
- [Configure JSON Serialization](#configure-json-serialization)
- [Render the Third-Party Component](#render-the-third-party-component)
- [Specify Captions](#specify-captions)
- [Add an Icon](#add-an-icon)
- [Use the Custom Component as an Editor in the Property Grid](#use-the-custom-component-as-an-editor-in-the-property-grid)

As an example, we will integrate the [React Color](https://casesandberg.github.io/react-color/) component. To install it, run the following command:

```cmd
npm install react-color --save
```

[View full code on GitHub](https://github.com/surveyjs/code-examples/tree/main/integrate-third-party-react-components)

## Create a Model

To integrate a third-party component, you need to configure a custom question type for it. All question types in SurveyJS demand a model. To create it, add a custom class (`QuestionColorPickerModel` in the code below) that extends the [`Question`](https://surveyjs.io/Documentation/Library?id=question) class and inherits all its properties and methods. Override the [getType()](https://surveyjs.io/Documentation/Library?id=question#getType) method with an implementation that returns the name of your custom question type. If the model requires custom properties, declare them as getter + setter pairs. In the following code, the model includes two such properties: `colorPickerType` and `disableAlpha`.

```js
import { Question } from "survey-core";

const CUSTOM_TYPE = "color-picker";

export class QuestionColorPickerModel extends Question {
  getType() {
    return CUSTOM_TYPE;
  }
  get colorPickerType() {
    return this.getPropertyValue("colorPickerType");
  }
  set colorPickerType(val) {
    this.setPropertyValue("colorPickerType", val);
  }

  get disableAlpha() {
    return this.getPropertyValue("disableAlpha");
  }
  set disableAlpha(val) {
    this.setPropertyValue("disableAlpha", val);
  }
}
```

Implement a function that registers the created model in the `ElementFactory` under the name returned by the `getType()` method:

```js
import { ElementFactory } from "survey-core";

const CUSTOM_TYPE = "color-picker";

export function registerColorPicker() {
  ElementFactory.Instance.registerElement(CUSTOM_TYPE, (name) => {
    return new QuestionColorPickerModel(name);
  });
}
```

Call the implemented function in the component that renders the Survey Creator to register the model:

```js
import { SurveyCreator, SurveyCreatorComponent } from "survey-creator-react";
import { registerColorPicker } from "./ColorPicker";
import "survey-core/defaultV2.css";
import "survey-creator-core/survey-creator-core.css";

registerColorPicker();

export function SurveyCreatorWidget () {
  const creator = new SurveyCreator();
  return <SurveyCreatorComponent creator={creator} />;
}

```

## Configure JSON Serialization

Our model exists only in JavaScript code, but SurveyJS works with JSON objects. You need to configure how your model should be serialized into JSON. To do this, call the `addClass(name, properties, creator, parentName)` method on the `Serializer` object. This method accepts the following arguments:

- `name`      
A string value that you returned from the model's `getType()` method. This property is used to associate the JSON object with the model's JavaScript class.

- `properties`      
An array of objects used to serialize custom model properties into JSON. This array must include all custom model properties. [Our model](#create-a-model) contains two custom properties (`colorPickerType` and `disableAlpha`), and the code below configures their serialization.

- `creator`       
A function that returns an instance of the model's JavaScript class (`QuestionColorPickerModel`) associated with the JSON object.

- `parentName`        
The name of a parent class that the custom class extends (`"question"`).

```js
import { ..., Serializer } from "survey-core";

const CUSTOM_TYPE = "color-picker";

Serializer.addClass(
  CUSTOM_TYPE,
  [{
    name: "colorPickerType",
    default: "Slider",
    choices: ["Slider", "Sketch", "Compact"],
    category: "general",
    visibleIndex: 2 // Place after the Name and Title
  }, {
    name: "disableAlpha:boolean",
    dependsOn: "colorPickerType",
    visibleIf: function (obj) {
      return obj.colorPickerType === "Sketch";
    },
    category: "general",
    visibleIndex: 3 // Place after the Name, Title, and Color Picker Type
  }],
  function () {
    return new QuestionColorPickerModel("");
  },
  "question"
);
```

## Render the Third-Party Component

Implement a custom class that extends `SurveyQuestionElementBase` and renders the desired UI elements. Model properties are available through props. In the following example, a custom class uses the `type` property to render different color picker types from the [React Color](https://casesandberg.github.io/react-color/) library:

```js
import { SurveyQuestionElementBase } from "survey-react-ui";
import { SliderPicker, SketchPicker, CompactPicker } from "react-color";

export class SurveyQuestionColorPicker extends SurveyQuestionElementBase {
  constructor(props) {
    super(props);
    this.state = { value: this.question.value };
  }
  get question() {
    return this.questionBase;
  }
  get value() {
    return this.question.value;
  }
  get disableAlpha() {
    return this.question.disableAlpha;
  }
  get type() {
    return this.question.colorPickerType;
  }
  handleColorChange = (data) => {
    this.question.value = data.hex;
  };

  // Support the read-only and design modes
  get style() {
    return this.question.getPropertyValue("readOnly")
      || this.question.isDesignMode ? { pointerEvents: "none" } : undefined;
  }

  renderColorPicker(type) {
    switch (type) {
      case "Slider": {
        return (
          <SliderPicker color={this.value} onChange={this.handleColorChange} />
        );
      }
      case "Sketch": {
        return (
          <SketchPicker color={this.value} onChange={this.handleColorChange} disableAlpha={this.disableAlpha} />
        );
      }
      case "Compact": {
        return (
          <CompactPicker color={this.value} onChange={this.handleColorChange} />
        );
      }
      default:
        return <div>Unknown type</div>;
    }
  }

  renderElement() {
    return (
      <div style={this.style}>
        {this.renderColorPicker(this.type)}
      </div>
    );
  }
}
```

Register your custom class (`SurveyQuestionColorPicker`) as a class that renders a custom question type (`color-picker`):

```js
import { ..., ReactQuestionFactory } from "survey-react-ui";

const CUSTOM_TYPE = "color-picker";

ReactQuestionFactory.Instance.registerQuestion(CUSTOM_TYPE, (props) => {
  return createElement(SurveyQuestionColorPicker, props);
});
```

## Specify Captions

Survey Creator generates captions for your custom question type and its properties automatically. If you need to change them, use the [localization engine](/Documentation/Survey-Creator?id=localization):

```js
import { localization } from "survey-creator-react";

const CUSTOM_TYPE = "color-picker";

const locale = localization.getLocale("");
locale.qt[CUSTOM_TYPE] = "Color Picker";
locale.pe.colorPickerType = "Color Picker type";
locale.pe.disableAlpha = "Disable alpha channel";
```

## Add an Icon

Each question type has an icon that is displayed next to the type name in the [Toolbox](/Documentation/Survey-Creator?id=toolbox) and the Add Question menu. The following code shows how to register an SVG icon for your custom question type:

```js
import { ReactComponent as ColorPickerIcon } from "../color-picker.svg";
import ReactDOMServer from "react-dom/server";

const CUSTOM_TYPE = "color-picker";

const svg = ReactDOMServer.renderToString(<ColorPickerIcon />);
SvgRegistry.registerIconFromSvg(CUSTOM_TYPE, svg);
```

## Use the Custom Component as an Editor in the Property Grid

The [Property Grid](/Documentation/Survey-Creator?id=property-grid) is built upon a regular survey and can be customized using the same techniques. It means that if you integrate a third-party component into a survey, you can integrate it into the Property Grid with little effort. For example, the following code shows how to register the Color Picker configured in this tutorial as an editor for the properties of the `"color"` type:

```js
import { ..., PropertyGridEditorCollection } from "survey-creator-react";

const CUSTOM_TYPE = "color-picker";

PropertyGridEditorCollection.register({
  fit: function (prop) {
    return prop.type === "color";
  },
  getJSON: function () {
    return { type: CUSTOM_TYPE };
  }
});
```

[View full code on GitHub](https://github.com/surveyjs/code-examples/tree/main/integrate-third-party-react-components)

## Further Reading

- [Create Specialized Question Types](/Documentation/Survey-Creator?id=create-specialized-question-types)
- [Create Composite Question Types](/Documentation/Survey-Creator?id=create-composite-question-types)