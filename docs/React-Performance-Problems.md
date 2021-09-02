# React: Visualization of drag-and-drop operations is slow for large surveys

In the [React version](Survey-Creator?Migrate-from-V1-to-V2#use-react) of SurveyJS Creator V2, there might occur performance issues during drag-and-drop operations. 

Issue: [#1445](https://github.com/surveyjs/survey-creator/issues/1445)

If Survey Creator edits a rather large survey (about 50 questions or more), dragging a survey element (a question from the Toolbox, for instance) might have a slow visualization response.

To overcome this problem check whether your Survey Creator application uses React in the **_development_** or **_production_** mode. 
It is expected that you use the development mode when working on your app, and the production mode when deploying your app to the users.

Make sure that you test your application with the minified _**production**_ build to minimize possible performance issues.

Refer to the following React documentation topic to find instructions for building your app for production:  
[Optimizing Performance: Use the Production Build](https://reactjs.org/docs/optimizing-performance.html#use-the-production-build)