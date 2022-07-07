# Create Specialized Question Types

Built-in question types are versatile and multi-functional, but in some cases, you need a question type with a more specific functionality. For example, you need to populate a [Dropdown](/Documentation/Library?id=questiondropdownmodel) question in advance. You can create a regular Dropdown question and specify its [`choices`](/Documentation/Library?id=questiondropdownmodel#choices) or [`choicesByUrl`](/Documentation/Library?id=questiondropdownmodel#choicesByUrl) property (depending on whether the choices come from a server or not). The following code shows a Country question configured in this manner:

```json
{
  "name": "country",
  "type": "dropdown",
  "optionsCaption": "Select a country...",
  "choicesByUrl": {
    "url": "https://surveyjs.io/api/CountriesExample"
  }
}
```

If you [add this question to the Toolbox](/Documentation/Survey-Creator?id=toolbox#add-a-custom-toolbox-item), end users can use it in their surveys. However, this approach has a number of drawbacks:

- End users can edit the `choicesByUrl` property and break the functionality.
- If the question needs modifications (for example, if the server URL has changed), end users have to modify every created instance of this question individually.
- In the JSON definition, your custom question looks like a regular Dropdown question.

To avoid these drawbacks, use a different approach: add your custom question type to the survey's `ComponentCollection`:

```js
Survey.ComponentCollection.Instance.add({
  // A unique name; must use lowercase
  name: "country", 
  // A display name used in the Toolbox
  title: "Country", 
  // A JSON definition for the base question type (Dropdown in this case)
  questionJSON: {
    "type": "dropdown",
    "optionsCaption": "Select a country...",
    "choicesByUrl": {
      "url": "https://surveyjs.io/api/CountriesExample",
    }
  }
});
```

This approach gives you the following advantages:

- A corresponding toolbox item is added automatically.
- End users cannot break the functionality because the Property Grid hides the `questionJSON` object properties.
- If you modify the question configuration, the changes automatically apply to every instance of this question.
- A cleaner JSON definition:

  ```json
  {
    "type": "country",
    "name": "question1"
  }
  ```

[View the "Country Component" example](/Examples/Survey-Creator?id=component-country)
[View the "Order Table Component" example](/Examples/Survey-Creator?id=component-ordertable)
[View the "Order Grid Component" example](/Examples/Survey-Creator?id=component-ordergrid)

## Further Reading

- [Create Composite Question Types](/Documentation/Survey-Creator?id=create-composite-question-types)
- [Integrate Third-Party React Components](/Documentation/Survey-Creator?id=third-party-component-integration-react)