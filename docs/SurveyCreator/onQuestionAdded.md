`onQuestionAdded` event calls when a user drop a question from toolbox on a survey page in the designer.
You may use it to setup some properties. The example below shows how to make all new added questions required.
```js
creator.onQuestionAdded.add(function(sender, options){
  options.question.isRequired = true;
})
```