# Draft document
# Componets: Simplify and Enrich the functionality of your Survey Creator

Please note, this functionality comes with [v1.7.1](https://surveyjs.io/WhatsNew#v1.7.1).

## Simplicity vs Functionality.

Commonly, what ever product we are working on, we must choose weather simplicity or rich functionality. The more functionality and richer API a library/platform has, the longer learning curve for this new library/platform. As software developers, we used to deal with it. We learned and knows how to use many programming languages, libraries, frameworks and so on. As a software developer, I doubt, that many of us has a problem to build a survey/create a form using SurveyJS project. We can write some code to get the functionality we missed, if it doesn’t exist out of the box. However, what about end-users? Should they deeply learn SurveyJS functionality, is there a way, to provide them with even richer functionality, but hide the complexity?

We spoke and exchanged e-mails with many of our customers. From one side, you continue to ask new functionality from us, and we believe that would never stop. From other side, there is a consensus, that a common, non-technical end-user will not be able to use the most of current functionality and build the survey/create form he needs without asking for help.

Unfortunately, since your, our customers, come from different industries and have different needs, we can’t create what you exactly need. We are building a platform for a general purpose. In most cases, your end-users, requires some specific functionality, question types. Let’s see how by using our component model, you can create your own Survey Creator / Form Builder, that will be easy to use for your end-users since it does exactly, they need and in the way the need and understand.

## Build Component Questions (examples).

We will start with the simple examples and finish with complex.

### Country Example
So, let’s say, you need to allow user to select countries. The right solution is to use the dropdown and to set weather choices property (set all countries you need) or use a web service to get the countries from the web. In case with restful web service, question JSON will look like:
```javascript
{
    name: "country"
    "type": "dropdown",
    optionsCaption: "Select a country...",
    choicesByUrl: {
        url: "https://restcountries.eu/rest/v2/all"
}
```
There is nothing extraordinary for a software developer. It is a little bit difficult for a non-technical user. You could use our [Toolbox customization functionality](https://surveyjs.io/Documentation/Survey-Creator?id=Survey-Creator-Overview#toolbox) in SurveyJS Creator and add this item into toolbox, as shown in [this example](https://surveyjs.io/Examples/Survey-Creator?id=toolboxcustomization).

The are some disadvantages of this approach:
 * The person who customize the survey / form, will still see all properties that he doesn’t need: choices, showOther and so on. There are dozens of them. Bad UI.
 * If something happens to the service, it stops working or requires additional parameters, the user will have to modify all questions where this service is used.
 * Not the big one. In JSON it looks like a regular dropdown question.

 From [v1.7.1](https://surveyjs.io/Whatsnew#v1.7.1) you can use the different, Component approach. All you need is to run the following code:
```javascript
//Register new "country" component
Survey.ComponentCollection.Instance.add({
  //Unique component name. It becomes the question type as well. It should be written in lowercase
  name: "country", 
  //The text that shows on toolbox
  title: "Country", 
  //The actual question that will do the job
  questionJSON: {
    type: "dropdown",
    optionsCaption: "Select a country...",
    choicesByUrl: {
      url: "https://restcountries.eu/rest/v2/all",
    },
  },
});
```
By writing almost the same code as you do for register a new toolbox item, as in example early, you will get the following advantages:
 * There are no properties that comes with dropdown questions. Your end-user will see only basic properties, like name, title, visible, required and some others.
 * You can change the questionJSON code at any time and it will reflect to all surveys that use this component
 * JSON is straightforward. Nobody needs to guess what it is. Even a non-technical person will understand it. It is clean and has nothing extra.
```javascript
{
    type: "country",
    name: "question1"
}
```

### Full name, simple composite question

In example with country question we shown how to create a wrapper component, inside the question there is another question to which end-user has no access.

Now, lets create a question that contains several questions inside. For example, a full name. It has a container with two questions: first name and last name.

```javascript
//Register new "fullname" component
Survey.ComponentCollection.Instance.add({
    //Unique component name. It becomes the question type as well. It should be written in lowercase
    name: "fullname", 
    //The text that shows on toolbox
    title: "Full Name", 
    //Array of elements. They will be assign to the container, panel, of the composite question
    elementsJSON: [ 
        { type: "text", name: "firstName", title: "First Name", isRequired: true },
        { type: "text", name: "lastName", title: "Last Name", isRequired: true, startWithNewLine: false },
        ],
    });
```

The main difference between “country” component, “fullname” component sets “elementsJSON” attribute, instead of “questionJSON”. “elementsJSON” attribute is an array of questions. Behind the scene, based on what attribute you are using, SurveyJS will create a different container question, for a one question, or for several questions. For the last case, SurveyJS will create a composite question that has a panel, “contentPanel” where your elements are rendered.

Another change, the question value becomes an object as well. For our example it will be: ```fullNameQuestionName: {firstName: "EnteredFirstName", lastName: "EnteredLastName"}```.

In both cases, SurveyJS Creator will hide content questions/elements from an end-user. An end-user will be able to see those questions in designer, but he will not be able to select them and customize them. He will be able to customize a component, a root question.

The minimum JSON for this question will be the same as for "country" question:
```javascript
{
    type: "fullname",
    name: "question1"
}
```

### Add a property into composite component

Consider, that in some surveys we require to show an optional middle name in the “fullname” component. End-user will decide is there a need in the middle name or not in the particular survey. He will be able to show/hide middle name for his survey by setting one property: “showMiddleName”.

```javascript
Survey.ComponentCollection.Instance.add({
  name: "fullname",
  title: "Full Name",
  elementsJSON: [
    {
      type: "text",
      name: "firstName",
      title: "First Name",
      isRequired: true,
    },
    {
      type: "text",
      name: "lastName",
      title: "Last Name",
      isRequired: true,
      startWithNewLine: false,
    },
    //Adding new middle name question
    {
      type: "text",
      name: "middleName",
      title: "Middle Name",
      startWithNewLine: false,
      //Initially makes middle name invisible
      visible: false,
    },
  ],
  //SurveyJS calls this function one time on registing component, after creating "fullname" class.
  onInit() {
    //SurveyJS will create a new class "fullname". We can add properties for this class onInit()
    Survey.Serializer.addProperty("fullname", {
      name: "showMiddleName:boolean",
      default: false,
      category: "general",
    });
  },
  //SurveyJS calls this function after creating new question and loading it's properties from JSON
  //It calls in runtime and at design-time (after loading from JSON) and pass the current component/root question
  onLoaded(question) {
    this.changeMiddleVisibility(question);
  },
  //SurveyJS calls this on a property change in the component/root question
  //It has three parameters that are self explained
  onPropertyChanged(question, propertyName, newValue) {
    if (propertyName == "showMiddleName") {
      this.changeMiddleVisibility(question);
    }
  },
  //The custom function that used in onLoaded and onPropertyChanged functions
  changeMiddleVisibility(question) {
    //get middle question from the content panel
    let middle = question.contentPanel.getQuestionByName("middleName");
    if (!!middle) {
      //Set visible property based on component/root question showMiddleName property
      middle.visible = question.showMiddleName === true;
    }
  },
});
```

In this example we are using three functions that SurveyJS calls, “onInit”, “onLoaded” and “onPropertyChanged”.

We use “onInit” function to add a new property into “fullname” class. SurveyJS creates a new class, using the component name and then calls “onInit” function where you can add new additional classes and properties.

SurveyJS calls “onLoaded” function after loading JSON into a survey. We need to change the middle name question visibility, in case the end-user changed it from the default.

The same story about “onPropertyChanged” function. SurveyJS calls it after end-user click on “showMiddleName” checkbox in the property grid and we need to show/hide middle name question inside the container to react on this change.

The JSON for this question adds one additional "showMiddleName" property, if the property is ``true``:
```javascript
{
    type: "fullname",
    name: "question1",
    showMiddleName: true
}
```


### Expressions and handling a question value change in composite question

Let’s review the survey where a user should fill business and shipping address. This survey contains with two comment questions (text area inputs) and one checkbox between them. Two comments are business address and shipping address. The checkbox is checked by default and its title: “Shipping address same as business address”. When it checked, the shipping address question is disabled and the data from business address are copied into shipping address. When the checkbox is unchecked, shipping address becomes enabled and the its data is cleared.  This is a typical task and this survey could be done by end-user without any coding using expressions and triggers. Here is the survey JSON:

```javascript
{
   "elements": [
    {
     "type": "comment",
     "name": "businessAddress",
     "title": "Business Address",
     "isRequired": true
    },
    {
     "type": "boolean",
     "name": "shippingSameAsBusiness",
     "title": "Shipping address same as business address",
     "defaultValue": "true"
    },
    {
     "type": "comment",
     "name": "shippingAddress",
     "title": "Shipping Address",
     "enableIf": "{shippingSameAsBusiness} <> true",
     "isRequired": true
  }
 ],
 "triggers": [
  {
   "type": "copyvalue",
   "expression": "{shippingSameAsBusiness} = true and {businessAddress} notempty",
   "setToName": "shippingAddress",
   "fromName": "businessAddress"
  },
  {
   "type": "setvalue",
   "expression": "{shippingSameAsBusiness} = false",
   "setToName": "shippingAddress"
  }
 ]
}
```
End-user must know and understand SurveyJS expressions and triggers to build the survey. It is not hard to build it using SurveyJS Creator, but still some job is required even if you know what you are doing.
Let’s create the shipping address component.

```javascript
Survey.ComponentCollection.Instance.add({
  name: "shippingaddress",
  title: "ShippingAddress",
  elementsJSON: [
    {
      type: "comment",
      name: "businessAddress",
      title: "Business Address",
      isRequired: true,
    },
    {
      type: "boolean",
      name: "shippingSameAsBusiness",
      title: "Shipping address same as business address",
      defaultValue: "true",
    },
    {
      type: "comment",
      name: "shippingAddress",
      title: "Shipping Address",
      //Use composite. prefix to get the "shippingSameAsBusiness" question inside the contentPanel
      enableIf: "{composite.shippingSameAsBusiness} <> true",
      isRequired: true,
    },
  ],
  onLoaded(question) {
    var businessAddress = question.contentPanel.getQuestionByName(
      "businessAddress"
    );
    var shippingAddress = question.contentPanel.getQuestionByName(
      "shippingAddress"
    );
    var shippingSameAsBusiness = question.contentPanel.getQuestionByName(
      "shippingSameAsBusiness"
    );
    //On changing business address value
    businessAddress.valueChangedCallback = function () {
      //If shipping address same as business is choosen then
      if (shippingSameAsBusiness.value == true) {
        shippingAddress.value = businessAddress.value;
      }
    };
    //On changing address same as business
    shippingSameAsBusiness.valueChangedCallback = function () {
      // //If shipping address same as business is choosen then copy value from business address, otherwise clear the value
      shippingAddress.value =
        shippingSameAsBusiness.value == true ? businessAddress.value : "";
    };
  },
});
```
We changed ``enableIf`` expression for "shippingAddress" by replacing ``{shippingSameAsBusiness}`` with ``{composite.shippingSameAsBusiness}``. ``{shippingSameAsBusiness}`` is a root question in a survey, in our case we need to find the hidden question inside the contentPanel and prefix ``composite.`` tells SurveyJS that we are looking for a question inside the contentPanel of the component.

The bigger change is removing triggers and replacing them with the code in ``onLoaded`` function. We can’t access survey triggers from our component. In fact, we can, but it is a bad practice, since we would break the encapsulation rule, the basic rule of a component world. The right approach is to write the code inside the ``onLoaded`` function. In this function we handle value changed callbacks for our “business address” and “shipping address same as business” and modify “shipping address” accordingly to our logic.

Now, all an end-user needs is to drop the "Shipping Address" component from the toolbox and the job is done. The question JSON turns into two lines:

```javascript
{
    type: "shippingaddress",
    name: "question1"
}
```

### Override base question properties in component/root question

Let’s continue with “shipping address” component. We do not need a root title and it is better to have numbers on our content questions as they are part of survey end-to-end numbering. To deal with it, we must hide the question title for the component/root question and set a property for ``contentPanel``, so the questions inside the panel have numbers. We must add the following code into ``onLoaded`` function.

```javascript
//Hide the title for component/root location
question.titleLocation = "hidden";
//Change the property value from "off" to "default" to get end-to-end numbering behavior
question.contentPanel.showQuestionNumbers = "default";
```
We could leave our component with this change. However, there are some properties now, that it is better to hide from the end-user and additionally change the default value for ``titleLocation`` property from “default” to “hidden” to avoid unnecessary line in our question JSON. We can use ``onInit`` function to implement this functionality. We will use ``Survey.Serializer.addProperty`` function. We can’t use ``Survey.Serializer.findProperty`` function to change the property attributes, because in this case we will change attributes for the basic question properties and it will be impact all questions. We need to change properties for our “shippingaddress” class only. That is why we need to override or define these properties one more time with new attributes.

```javascript
onInit() {
  //Override titleLocation property attributes for "shippingaddress" class by making it invisible in property grid and change its default value
  Survey.Serializer.addProperty("shippingaddress", {
    name: "titleLocation",
    visible: false,
    default: "hidden",
  });
  Survey.Serializer.addProperty("shippingaddress", {
    name: "title",
    visible: false,
  });
  Survey.Serializer.addProperty("shippingaddress", {
    name: "description",
    visible: false,
  });
  Survey.Serializer.addProperty("shippingaddress", {
    name: "hidenumber",
    visible: false,
  });
}
```

This code ``onInit`` function removes four unneeded properties from the property grid and will not serialize ``titleLocation`` property that we changed in the code.

Finally, the component the code for component registration becomes the following:

```javascript
Survey.ComponentCollection.Instance.add({
  name: "shippingaddress",
  title: "ShippingAddress",
  elementsJSON: [
    {
      type: "comment",
      name: "businessAddress",
      title: "Business Address",
      isRequired: true,
    },
    {
      type: "boolean",
      name: "shippingSameAsBusiness",
      title: "Shipping address same as business address",
      defaultValue: "true",
    },
    {
      type: "comment",
      name: "shippingAddress",
      title: "Shipping Address",
      //Use composite. prefix to get the "shippingSameAsBusiness" question inside the contentPanel
      enableIf: "{composite.shippingSameAsBusiness} <> true",
      isRequired: true,
    },
  ],
  onInit() {
    //Override titleLocation property attributes for "shippingaddress" class by making it invisible in property grid and change its default value
    Survey.Serializer.addProperty("shippingaddress", {
      name: "titleLocation",
      visible: false,
      default: "hidden",
    });
    Survey.Serializer.addProperty("shippingaddress", {
      name: "title",
      visible: false,
    });
    Survey.Serializer.addProperty("shippingaddress", {
      name: "description",
      visible: false,
    });
    Survey.Serializer.addProperty("shippingaddress", {
      name: "hidenumber",
      visible: false,
    });
  },
  onLoaded(question) {
    //Hide the title for component/root location
    question.titleLocation = "hidden";
    //Change the property value from "off" to "default" to get end-to-end numbering behavior
    question.contentPanel.showQuestionNumbers = "default";
    
    var businessAddress = question.contentPanel.getQuestionByName(
      "businessAddress"
    );
    var shippingAddress = question.contentPanel.getQuestionByName(
      "shippingAddress"
    );
    var shippingSameAsBusiness = question.contentPanel.getQuestionByName(
      "shippingSameAsBusiness"
    );
    //On changing business address value
    businessAddress.valueChangedCallback = function () {
      //If shipping address same as business is choosen then
      if (shippingSameAsBusiness.value == true) {
        shippingAddress.value = businessAddress.value;
      }
    };
    //On changing address same as business
    shippingSameAsBusiness.valueChangedCallback = function () {
      // //If shipping address same as business is choosen then copy value from business address, otherwise clear the value
      shippingAddress.value =
        shippingSameAsBusiness.value == true ? businessAddress.value : "";
    };
  },
});

```