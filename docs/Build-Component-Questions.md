# Components: Simplify and Enrich SurveyJS Creator functionality

Please note, this functionality comes with [v1.7.1](https://surveyjs.io/WhatsNew#v1.7.1).

- [Simplicity vs Functionality](#simplicity)
- [Build Component Questions (examples)](#examples)
  - [Country example, simple custom question](#countryexamples)
  - [Full name, simple composite question](#fullname-example)
  - [Add a property into composite component](#add-property-example)
  - [Expressions and handling a question value change](#expression-example)
  - [Override base question properties in component/root question](#override-properties-example)
  - [Create order table component using matrix dropdown](#order-table-example)
  - [Create order grid component using matrix dynamic](#order-grid-example)
- [Component registration API](#api)

<div id="simplicity"></div>

## Simplicity vs Functionality.

Whatever product we are working on, we must often choose between simplicity or rich functionality. The more functionality and richer API a library/platform has, the longer learning curve is for this new library/platform. As software developers, we used to deal with it. We learned and know many programming languages, libraries, frameworks and so on. As software developers, most of us has no problems to build a survey/create a form using SurveyJS project. We can write some code to get the required functionality, in case it doesn’t exist out of the box. What about end-users? Should they deeply learn SurveyJS functionality? Is there a way, to provide them with even richer functionality, but hide the complexity?

We spoke and exchanged e-mails with many of our customers. From one side, our clients ask new functionality from us, and we believe that would never stop. From other side, there is a consensus, that a common, non-technical end-user will not be able to use the most of current functionality and build the survey/create form he needs without asking for a help for a technical person.

Our customers come from different industries and have different needs, we can’t create what every customer needs exactly. We are building a platform for a general purpose. In most cases, our client's end-users require some specific functionality, question types. These question types do not exist in the library. 
Component question model allows our customer to build and customize SurveyJS Creator in a such way, so their end-users will be able to create complex surveys/forms without deep knowledge of SurveyJS Creator and without programming skills. Software developers can create question types, that their end-users understand and need.

<div id="examples"></div>

## Build Component Questions (examples).

We will start with the simple examples and finish with table and grid.


<div id="country-examples"></div>

### Country example, simple custom question

So, let’s say, you need to allow users to select a country. The right solution is to use the dropdown and to set either choices property (set all countries you need) or use a web service to get the countries from the web. In case with restful web service, question JSON may look like:
```javascript
{
    name: "country"
    "type": "dropdown",
    optionsCaption: "Select a country...",
    choicesByUrl: {
        url: "https://surveyjs.io/api/CountriesExample"
    }
}
```
There is nothing extraordinary for a software developer. It is a little bit difficult for a non-technical user. You could use our [Toolbox customization functionality](https://surveyjs.io/Documentation/Survey-Creator?id=Survey-Creator-Overview#toolbox) in SurveyJS Creator and add this item into toolbox, as shown in [this example](https://surveyjs.io/Examples/Survey-Creator?id=toolboxcustomization).

The are some disadvantages of this approach:
 * The person who customize the survey / form, will still see all properties that he doesn’t need: choices, showOther and so on. There is a dozen unneeded properties. Bad UI.
 * If something happens to the service, it stops working or requires additional parameters, the user will have to modify all questions where the service is used.
 * Not the big one. In JSON it looks like a regular dropdown question.

 The right approach is to build and register the "country" component.
```javascript
//Register new "country" component
Survey.ComponentCollection.Instance.add({
  //Unique component name. It becomes a new question type. Please note, it should be written in lowercase.
  name: "country", 
  //The text that shows on toolbox
  title: "Country", 
  //The actual question that will do the job
  questionJSON: {
    type: "dropdown",
    optionsCaption: "Select a country...",
    choicesByUrl: {
      url: "https://surveyjs.io/api/CountriesExample",
    },
  },
});
```
By writing almost the same code as you do for register a new toolbox item, you will get the following advantages:
 * There are no properties that comes with dropdown questions. Your end-user will see only basic properties, like name, title, visible, required and some others.
 * You can change the questionJSON code at any time and it will reflect to all surveys that use this component
 * JSON is straightforward. Nobody needs to guess what it is. Even a non-technical person will understand it. It is clean and has nothing extra.
```javascript
{
    type: "country",
    name: "question1"
}
```

Go to live [country component](https://surveyjs.io/Examples/Survey-Creator?id=component-country) example.

<div id="fullname-example"></div>

### Full name, simple composite question

In example with country question we show how to create a wrapper component, inside the question there is another question to which end-user has no access.

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

The main difference between “country” component, “fullname” component sets “elementsJSON” attribute, instead of “questionJSON”. “elementsJSON” attribute is an array of questions. Behind the scene, based on what attribute you are using, SurveyJS will create a different container question, for a one question, or for several questions. For the last case, SurveyJS will create a composite question that has a panel, “contentPanel” where your elements will be placed.

Another change, the question value becomes an object. For our example it will be: ```fullNameQuestionName: {firstName: "EnteredFirstName", lastName: "EnteredLastName"}```.

In both cases, SurveyJS Creator will hide content questions/elements from an end-user. An end-user will be able to see those questions in designer, but he will not be able to select them and customize them. He will be able to customize a component, a root question.

The minimum JSON for this question will be the same as for "country" question:
```javascript
{
    type: "fullname",
    name: "question1"
}
```

<div id="add-property-example"></div>

### Add a property into composite component

Consider, that in some surveys we require to show an optional middle name in the “fullname” component. SurveyJS Creator user can decide, is there a need in the middle name or not in the particular survey. He will be able to show/hide middle name the survey by setting a property: “showMiddleName”.

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
  //SurveyJS calls this function after creating new question and loading it properties from JSON
  //It calls in runtime and at design-time (after loading from JSON) and pass the current component/root question as parameter
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

We use “onInit” function to add a new property into “fullname” class. SurveyJS creates a new class, using the component name, and then calls “onInit” function where you can add new additional classes and properties.

SurveyJS calls “onLoaded” function after loading JSON into a survey. We need to change the middle name question visibility, in case the SurveyJS Creator user changed it from the default.

The same story about “onPropertyChanged” function. SurveyJS calls it after a user click on “showMiddleName” checkbox in the property grid and we need to show/hide middle name question inside the container to react on this change.

The JSON for this question adds one additional "showMiddleName" property, if the property is __true__:
```javascript
{
    type: "fullname",
    name: "question1",
    showMiddleName: true
}
```
Go to live [fullname component](https://surveyjs.io/Examples/Survey-Creator?id=component-fullname) example.

<div id="expression-example"></div>

### Expressions and handling a question value change

Let’s review the survey where a user should fill business and shipping addresses. This survey contains with two comment questions (text area inputs) and one boolean question (a check) between them. Two comments are business address and shipping address. The boolean question is checked by default and its title says: “Shipping address same as business address”. When it checked, the shipping address question is disabled and the value from business address is copied into shipping address value. When the check is unchecked, shipping address becomes enabled and its data is cleared.  This is a typical task and this survey could be done by end-user by using expressions and triggers. Here is the survey JSON:

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
SurveyJS Creator user must know and understand SurveyJS expressions and triggers to build the survey. It is not that hard to build it using SurveyJS Creator, but still some job is required, even if you know what you are doing.
Let’s create the shipping address component.

```javascript
Survey.ComponentCollection.Instance.add({
  name: "shippingaddress",
  title: "Shipping Address",
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
      //Use "composite." prefix to search for "shippingSameAsBusiness" question inside the contentPanel
      enableIf: "{composite.shippingSameAsBusiness} <> true",
      isRequired: true,
    },
  ],
  //SurveyJS calls onCreated function right after creating contentPanel and its elements.
  onCreated(question) {
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
      //If shipping address same as business is chosen then
      if (shippingSameAsBusiness.value == true) {
        shippingAddress.value = businessAddress.value;
      }
    };
    //On changing address same as business
    shippingSameAsBusiness.valueChangedCallback = function () {
      //If shipping address same as business is chosen then copy value from business address, otherwise clear the value
      shippingAddress.value =
        shippingSameAsBusiness.value == true ? businessAddress.value : "";
    };
  }
});
```
We changed "shippingAddress" question "enableIf" expression by replacing _{shippingSameAsBusiness}_ with _{composite.shippingSameAsBusiness}_. Expression _{shippingSameAsBusiness}_ will search for "shippingSameAsBusiness" question in the survey. In our case, we need to find the hidden question inside the contentPanel and prefix _composite._ tells SurveyJS that we are looking for a question inside the contentPanel of the component.

The bigger change is removing triggers and replacing them with the code in _onCreated_ function. We can’t access survey triggers from our component. In fact, we can, but it is a bad practice, since we would break the encapsulation rule, the basic rule of a component world. The right approach is to write the code inside the _onCreated_ function. In this function we handle value changed callbacks for our “business address” and “shipping address same as business” and modify “shipping address” accordingly to our logic.

Now, all an end-user needs is to drop the "Shipping Address" component from the toolbox and the job is done. The question JSON turns into two lines:

```javascript
{
    type: "shippingaddress",
    name: "question1"
}
```
<div id="override-properties-example"></div>

### Override base question properties in component/root question

Let’s continue with “shipping address” component. We do not need a root title and it is better to have numbers on our content questions as they are part of survey end-to-end numbering. To deal with it, we must hide the question title for the component/root question and set a property for _contentPanel_, so the questions inside the panel have numbers. We must add the following code into _onCreated_ function.

```javascript
//Hide the title for component/root location
question.titleLocation = "hidden";
//Change the property value from "off" to "default" to get end-to-end numbering behavior
question.contentPanel.showQuestionNumbers = "default";
```
We could leave our component with this change. However, there are some properties now, that it is better to hide from SurveyJS Creator user and additionally change the default value for _titleLocation_ property from “default” to “hidden” to avoid unnecessary line in our question JSON. We can use _onInit_ function to implement this functionality. We will use _Survey.Serializer.addProperty_ function. We can’t use _Survey.Serializer.findProperty_ function to change the property attributes, because in this case we will change attributes for the basic question properties and it will be impact all questions. We need to change properties for our “shippingaddress” class only. That is why we need to override or define these properties one more time with new attributes.

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

This code _onInit_ function removes four unneeded properties from the property grid and will not serialize _titleLocation_ property that we changed in the code.

Finally, the component the code for component registration becomes the following:

```javascript
Survey.ComponentCollection.Instance.add({
  name: "shippingaddress",
  title: "Shipping Address",
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
  onCreated(question) {
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
      //If shipping address same as business is chosen then
      if (shippingSameAsBusiness.value == true) {
        shippingAddress.value = businessAddress.value;
      }
    };
    //On changing address same as business
    shippingSameAsBusiness.valueChangedCallback = function () {
      // //If shipping address same as business is chosen then copy value from business address, otherwise clear the value
      shippingAddress.value =
        shippingSameAsBusiness.value == true ? businessAddress.value : "";
    };
  },
});
```
Go to live [shippingaddress component](https://surveyjs.io/Examples/Survey-Creator?id=component-shippingaddress) example.


<div id="order-table-example"></div>

### Create order table component using matrix dropdown

Consider we need to create an order form using matrix dropdown question.

<p align="center">

![Matrix dropdown question as order table](https://github.com/surveyjs/survey-creator/blob/master/docs/images/order-matrix-dropdown.png?raw=true)

_Matrix dropdown question as order table_
</p>

SurveyJS Creator user can build it in SurveyJS Creator and he will get the following JSON:

```javascript
{
    type: 'matrixdropdown',
    name: 'food',
    title: 'Please select items',
    columns: [
        {
            name: 'price',
            title: 'Price',
            cellType: 'expression',
            displayStyle: 'currency'
        },
        {
            name: 'qty',
            title: 'Qty',
            cellType: 'dropdown',
            optionsCaption: '0',
            choices: [1, 2, 3, 4, 5]
        },
        {
            name: 'total',
            title: 'Total',
            cellType: 'expression',
            displayStyle: 'currency',
            expression: '{row.qty} * {row.price}',
            totalType: 'sum',
            totalDisplayStyle: 'currency'
        },
    ],
    rows: ['Steak', 'Salmon', 'Beer'],
    defaultValue: {
        Steak: { price: 23 },
        Salmon: { price: 19 },
        Beer: { price: 5 }
    }
}
```

It requires deep knowledge of SurveyJS for building this survey. SurveyJS Creator user must know about expression question and cell type, be able to create an expression "{row.qty} * {row.price}", know about total row in matrix and finally understand that he needs to use _defaultValue_ property to define the price column values.
In other words, it requires knowledge and time to convert matrix dropdown into order table widget.

Everything, that SurveyJS Creator user needs, is to define the list of items, their names and price, and nothing more. The component question allows to bring this functionality into SurveyJS Creator.

```javascript
Survey.ComponentCollection.Instance.add({
  name: "ordertable",
  title: "Order Table",
  questionJSON: {
    type: "matrixdropdown",
    columns: [
      {
        name: "price",
        title: "Price",
        cellType: "expression",
        displayStyle: "currency",
      },
      {
        name: "qty",
        title: "Qty",
        cellType: "dropdown",
        optionsCaption: "0",
        choices: [1, 2, 3, 4, 5],
      },
      {
        name: "total",
        title: "Total",
        cellType: "expression",
        displayStyle: "currency",
        expression: "{row.qty} * {row.price}",
        totalType: "sum",
        totalDisplayStyle: "currency",
      },
    ],
  },
  onInit() {
    //Create a new class derived from Survey.ItemValue
    //It hides text, visibleIf and enableIf properties
    //and it adds a new price number property.
    Survey.Serializer.addClass(
      "ordertableitem",
      [
        { name: "price:number", default: 0 },
        { name: "text", visible: false },
        { name: "visibleIf", visible: false },
        { name: "enableIf", visible: false },
      ],
      //We create a standard Survey.ItemValue instance.
      //The third parameter said that the actual type is "ordertableitem"
      //SurveyJS will use properties definition from "ordertableitem" class
      //and it will define "price" property for every new instance
      function () {
        return new Survey.ItemValue(null, null, "ordertableitem");
      },
      "itemvalue"
    );
    //Add orderItems properties. It is an array of ordertableitem elements
    Survey.Serializer.addProperty("ordertable", {
      name: "orderItems:ordertableitem[]",
      category: "general",
    });
  },
  onLoaded(question) {
    //Create rows and default values on first loading
    this.updateRowsAndValues(question);
  },
  //Calls on property changed in component/root question
  onPropertyChanged(question, propertyName, newValue) {
    if (propertyName == "orderItems") {
      //Calls when orderItems array is changed: 
      //new item is added or existing removed or elements order changed
      //We need to rebuild rows and defaultValues
      this.updateRowsAndValues(question);
    }
  },
  //Calls when a property of ItemValue element is changed.
  onItemValuePropertyChanged(question, options) {
    //If the propertyName of the array is "orderItems"
    if (options.propertyName == "orderItems") {
      //If property name of ItemValue element is "value" then rebuild rows and defaultValues
      if (options.name == "value") {
        this.updateRowsAndValues(question);
      }
      //If property name of ItemValue element is "price" then rebuild defaultValues
      if (options.name == "price") {
        this.setDefaultValues(question);
      }
    }
  },
  //Internal functions: buildRows, setDefaultValues and updateRowsAndValues
  //Create matrix rows using orderItems property
  buildRows(question) {
    var rows = [];
    for (var i = 0; i < question.orderItems.length; i++) {
      var item = question.orderItems[i];
      if (!!item.value) {
        rows.push(item.value);
      }
    }
    question.contentQuestion.rows = rows;
  },
  //Build matrix default value using orderItems property
  setDefaultValues(question) {
    var defaultValue = {};
    for (var i = 0; i < question.orderItems.length; i++) {
      var item = question.orderItems[i];
      if (!!item.value && !!item.price) {
        defaultValue[item.value] = { price: item.price };
      }
    }
    question.contentQuestion.defaultValue = defaultValue;
  },
  updateRowsAndValues(question) {
    this.buildRows(question);
    this.setDefaultValues(question);
  },
});
```

Now, end-user needs to define “orderItems” property only.

<p align="center">

![Order Items property](https://github.com/surveyjs/survey-creator/blob/master/docs/images/order-table-items.png?raw=true)

_Order Items property_
</p>

The question JSON becomes readable and clean:

```javascript
{
    "type": "ordertable",
    "name": "q1",
    "orderItems": [
        {
            "value": "Steak",
            "price": 27
        },
        {
            "value": "Salmon",
            "price": 22
        },
        {
            "value": "Beer",
            "price": 5
        }
    ]
}
```

Go to live [ordertable component](https://surveyjs.io/Examples/Survey-Creator?id=component-ordertable) example.


<div id="order-grid-example"></div>

### Create order grid component using matrix dynamic

We can solve the previous task by using matrix dynamic question. End-user will have to add/remove rows to add/remove order items.

Unfortunately, end-user could not build this type of survey in SurveyJS Creator. It requires to write JavaScript code and handle several events. The working example you can find [here](https://surveyjs.io/Examples/Library?id=questiontype-matrixdynamic-totals).


```javascript
Survey.ComponentCollection.Instance.add({
    name: "ordergrid",
    title: "Order Grid",
    questionJSON: {
        type: "matrixdynamic",
        defaultRowValue: { qty: 1 },
        rowCount: 1,
        addRowText: "Add Item",
        columns: [
        {
            name: "id",
            title: "Id",
            cellType: "expression",
            expression: "{rowIndex}",
        },
        {
            name: "item",
            title: "Item Name",
            cellType: "dropdown",
            isRequired: true,
            totalType: "count",
            totalFormat: "Items count: {0}",
        },
        {
            name: "price",
            title: "Price",
            cellType: "expression",
            displayStyle: "currency",
        },
        {
            name: "qty",
            title: "Qty",
            cellType: "text",
            inputType: "number",
        },
        {
            name: "total",
            title: "Total",
            cellType: "expression",
            displayStyle: "currency",
            expression: "{row.qty} * {row.price}",
            totalType: "sum",
            totalDisplayStyle: "currency",
        },
        ],
    },
    onInit() {
        //Add "price" property to base "itemvalue" class
        //It will allow us to set our order items into dropdown choices
        //without loosing the price property value
        Survey.Serializer.addProperty("itemvalue", {
          name: "price:number",
          visible: false,
          isSerializable: false,
        });
        //Create a new class derived from Survey.ItemValue
        //It hides text, visibleIf and enableIf properties
        //and makes price property visible for "ordergriditem" class only.
        Survey.Serializer.addClass(
          "ordergriditem",
          [
              {
                name: "price:number",
                default: 0,
                visible: true,
                isSerializable: true,
              },
              { name: "text", visible: false },
              { name: "visibleIf", visible: false },
              { name: "enableIf", visible: false },
          ],
          //We create a standard Survey.ItemValue instance.
          //The third parameter said that the actual type is "ordergriditem"
          //SurveyJS will use properties definition from "ordergriditem" class
          //and it will define "price" property for every new instance
          function () {
              return new Survey.ItemValue(null, null, "ordergriditem");
          },
          "itemvalue"
        );
        //Add orderItems properties. It is an array of ordergriditem elements
        Survey.Serializer.addProperty("ordergrid", {
          name: "orderItems:ordergriditem[]",
          category: "general",
          visibleIndex: 3
        });
    },
    onCreated(question) {
      //The options parameter of this callback function is same as options property survey.onMatrixCellCreated event
      //We need to set min/max properties for qty number question
      question.contentQuestion.onCellCreatedCallback = function (options) {
        if (options.columnName == "qty") {
            options.cellQuestion.min = 1;
            options.cellQuestion.max = 20;
        }
      };
      //The options parameter of this callback function is same as options property survey.onMatrixCellValueChanged event
      //We need to set price on changing the item
      question.contentQuestion.onCellValueChangedCallback = function (options) {
        //If cell in column 'item' is changed
        if (options.columnName == "item") {
            //get price question in this row
            var priceQuestion = options.row.getQuestionByColumnName("price");
            //get item question in this row
            var itemQuestion = options.row.getQuestionByColumnName("item");
            if (!!priceQuestion && !!itemQuestion) {
              //Set price to the price question value
              priceQuestion.value =
                  itemQuestion.selectedItem != null
                  ? itemQuestion.selectedItem.price
                  : 0;
            }
        }
      };
    },
    onLoaded(question) {
        //Set choices to the 'item' column on first loading
        this.updateItemsColumn(question);
    },
    //Calls on property changed in component/root question
    onPropertyChanged(question, propertyName, newValue) {
      if (propertyName == "orderItems") {
        //Calls when orderItems array is changed:
        //new item is added or existing removed or elements order changed
        this.updateItemsColumn(question);
      }
    },
    //Calls when a property of ItemValue element is changed.
    onItemValuePropertyChanged(question, options) {
        //If the propertyName of the array is "orderItems"
        if (options.propertyName == "orderItems") {
          this.updateItemsColumn(question);
        }
    },
    //Set choices to the 'item' column
    updateItemsColumn(question) {
        question.contentQuestion.getColumnByName("item").choices =
        question.orderItems;
    },
});
```

SurveyJS Creator user will get the same experience with this "ordergrid" component like with "ordertable" component. The JSON is the same:

```javascript
{
    "type": "ordergrid",
    "name": "q1",
    "orderItems": [
        {
            "value": "Steak",
            "price": 27
        },
        {
            "value": "Salmon",
            "price": 22
        },
        {
            "value": "Beer",
            "price": 5
        }
    ]
}
```

However, the survey UI and experience will be different.

<p align="center">

![Matrix dynamic question as order grid](https://github.com/surveyjs/survey-creator/blob/master/docs/images/order-matrix-dynamic.png?raw=true)

_Matrix dynamic question as order grid_
</p>

Go to live [ordergrid component](https://surveyjs.io/Examples/Survey-Creator?id=component-ordergrid) example.


<div id="api"></div>

## Component registration API

To register a new component, you have to add to into _Survey.ComponentCollection.Instance_ singleton a json with at least two attributes:
* name ― unique name across all SurveyJS classes.
* questionJSON or elementsJSON ― a wrapper question JSON or the JSON list of elements (questions and panels).

### The full list of parameters

```javascript
Survey.ComponentCollection.Instance.add({
  /**
   * Required attribute. Unique name in lower case.
   */ 
  name: "yourcomponentname",
  /**
   * Optional attribute. Toolbox use this value to display it as a text in toolbox item.
   * If it is empty, then name is used.
   */ 
  title: title,
  /**
   * Optional attribute. If Toolbox has several categories then 
   * this attribute defines to which category this component belongs.
   */ 
  category: category,
  /**
   * Optional attribute. Toolbox use it to show the icon type in toolbox item.
   * If it is empty, then Creator uses "icon-default" value.
   */ 
  iconName: iconName,
  /**
   * This attribute or elementsJSON or createQuestion()/createElements() function should not be empty. 
   * Please note, only one of these two attributes and two functions is required and expected.
   * You need to use this attribute if you need just one question and you want to set-up it in JSON.
   * This JSON creates dropdown with choices from 2020 till 1970.
   */
  questionJSON: {
    type: "dropdown",
    choicesMin: 1970,
    choicesMax: 2020        
    choicesOrder: "desc",
  },
  /**
   * Use this attribute if you need several elements in your question and you want to set up them via JSON
   * Please note, the array of elements is expected.
   * This JSON creates two required questions, first and last names, on the same line.
   */  
  elementsJSON: [
    { type: "text", name: "firstName", title: "First Name", isRequired: true },
    { type: "text", name: "lastName", title: "Last Name", isRequired: true, startWithNewLine: false }
  ],
  /**
   * The alternative to questionJSON, in case you want to create the question in code.
   * This function creates dropdown with choices from 2020 till 1970.
   */
  createQuestion: function () {
    let res = new Survey.QuestionDropdown("question");
    res.choicesMin = 1970;
    res.choicesMax = 2020;
    res.choicesOrder = "desc";
    return res;
  },
  /**
   * The alternative to elementsJSON, in case you want to create elements in code.
   * This function creates two required questions, first and last names, on the same line.
   */
  createElements: function (panel) {
    let q = panel.addNewQuestion("text", "firstName");
    q.title = "First Name";
    q.isRequired = true;
    q = panel.addNewQuestion("text", "lastName");
    q.title = "First Name";
    q.isRequired = true;
    q.startWithNewLine = false;
  },
  /**
   * SurveyJS calls this function one time on registing the component, after creating a new class.
   * This example adds a new property into your component class.
   */ 
  onInit() {
    Survey.Serializer.addProperty("yourcomponentname", {
      name: "showMiddleName:boolean",
      default: false,
      category: "general",
      visibleIndex: 3
    });
  },
  /**
   * You can use this function to set some properties or handle elements callbacks.
   * SurveyJS calls onCreated right after the content question/panel has been created and added into the elements tree.
   * The code in this examples set function on value changed callback functions.
   */ 
  onCreated: function (question) {
    var businessAddress = question.contentPanel.getQuestionByName("businessAddress");
    var shippingAddress = question.contentPanel.getQuestionByName("shippingAddress");
    var shippingSameAsBusiness = question.contentPanel.getQuestionByName("shippingSameAsBusiness");
    //On changing business address value
    businessAddress.valueChangedCallback = function () {
      //If shipping address same as business is chosen then
      if (shippingSameAsBusiness.value == true) {
        shippingAddress.value = businessAddress.value;
      }
    };
    //On changing address same as business
    shippingSameAsBusiness.valueChangedCallback = function () {
      //If shipping address same as business is chosen then copy value from business address, otherwise clear the value
      shippingAddress.value =
        shippingSameAsBusiness.value == true ? businessAddress.value : "";
    };
  },
  /**
   * You can use this function to setup some properties of your content question/elements based on properties of the component/root question.
   * SurveyJS calls this function after the question is loaded from survey json.
   */ 
  onLoaded: function (question) {
    //get middle question from the content panel
    let middle = question.contentPanel.getQuestionByName("middleName");
    if (!!middle) {
      //Set visible property based on component/root question showMiddleName property
      middle.visible = question.showMiddleName === true;
    }
  }
  /**
   * SurveyJS calls this function on a property change in the component/root question.
   * This code reacts on changing "showMiddleName" property of the component and based on the value, show/hide the middle name question.
   */ 
  //
  onPropertyChanged(question, propertyName, newValue) {
    if (propertyName == "showMiddleName") {
      //get middle question from the content panel
      let middle = question.contentPanel.getQuestionByName("middleName");
      if (!!middle) {
        //Set visible property based on component/root question showMiddleName property
        middle.visible = question.showMiddleName === true;
      }
    }
  },
  /**
   * SurveyJS calls this function when a property of ItemValue element is changed.
   */  
  onItemValuePropertyChanged(question, options) {
    //If the propertyName of the array is "orderItems"
    if (options.propertyName == "orderItems") {
      if (options.name == "value") {
        //do something on value property change
      }
      if (options.name == "text") {
        //do something on text property change
      }
    }
  /**
   * SurveyJS calls this function after rendering the content element.
   * This function is similar to survey.onAfterRenderQuestion event.
   * It allows you do not handle the event on survey level and put all needed code inside the component code
   */  
  onAfterRenderContentElement(question, element, htmlElement) {
    //For example, add new elements to htmlElement based on some logic
    //question is the component question and element is a content element (question or panel)
  }
  /**
   * SurveyJS calls this function after rendering the component.
   * This function is similar to onAfterRenderContentElement.
   * The main difference, htmlElement is a root html element for a component. 
   * You can get change the rendering of component title, errors and so on
   */  
  onAfterRender(question, htmlElement) {
  }
});
```
