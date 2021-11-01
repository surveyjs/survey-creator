# SurveyJS Creator V2: What's new

We spent tremendous recourses of our team working on new Creator V2 and here we are going to share with you benefits of using our new version.

One of the biggest complain of our customers for Creator V1, was that we built it using [knockoutjs](https://knockoutjs.com/). It is good tiny MVVM framework that works great for many projects, but within time [knockoutjs](https://knockoutjs.com/) lost the battle to Angular, React and Vue frameworks and it is rare choice for the most JavaScript developers nowadays. We chosen it because it works perfectly with all popular framework, it is tiny and there is no reason to invent your own MVVM library.  However, it has limitations and the biggest one is using “eval” function for parsing their templates. Despite the fact, it is ok for security point of view to do it in browser, many companies have security checks built in their CI/CD and it doesn’t allow them to use JavaScript libraries that uses “eval” function.

Another issue with [knockoutjs](https://knockoutjs.com/), it makes SurveyJS Creator, for many our customers, a black box. It is still a JavaScript Library, but it is not in their JavaScript application life cycle. It means that we must provide a better solution for our Angular, React and Vue customers. We should have versions for Angular, React and Vue.
At the current moment, we have SurveyJS Creator V2 for React and Knockout, but we are going to have versions for Angular and Vue as well. We are going to work on them shortly.

Having SurveyJS Creator version for React means that every single pierce of SurveyJS Creator for React renders by react components. You can override rendering our react components or introduce your own React components. We decided to go with SurveyJS Library for React concepts. The most code, SurveyJS Model, platform independent [part](https://github.com/surveyjs/survey-library/tree/master/src) (SurveyJS Core) written in platform independent way and all rendering is done by using [react components](https://github.com/surveyjs/survey-library/tree/master/src/react), that uses SurveyJS Core as a wrapper.

We have absolutely the same approach for SurveyJS Creator V2. We have platform [independent part](https://github.com/surveyjs/survey-creator/tree/master/packages/survey-creator-core) (Creator Core) and [react rendering part](https://github.com/surveyjs/survey-creator/tree/master/packages/survey-creator-react). It kills two birds with one stone. We should not duplicate our efforts for each supported platform, and we provide a standard react component that can be used as any other react component. Moreover, since inside SurveyJS Creator V2 for react we are using SurveyJS Library for react, you can introduce the support a popular react component in Library and in Creator. Here are examples of using a popular [select react component](https://react-select.com/home) for [SuveyJS Library](#link) and [SurveyJS Creator](#link). SurveyJS Creator V2 for React is not a black box for react developers. You can override its elements and change rendering and/or behavior. [Here is the example](https://surveyjs.io/Examples/Survey-Creator?id=overridepropertygrid&platform=ReactjsV2) of wrapping the default Property Pane component into a new react component by adding a new element on the top of the Property Pane react component.

There are many technical changes and solutions that we have introduce in Creator V2. In fact, we rewrite almost all code from scratch, to introduce into Creator V2 a clean and intuitive UI.
We override the way we work with multiple pages surveys. We got rid from tabs and introduce MS Word page style approach by showing all pages at once, one by one, with page navigation on the right to pages.
<p align="center">
![Pages navigation](https://github.com/surveyjs/survey-creator/blob/master/docs/images/creator-v2-pages-navigation.png?raw=true)

_Pages navigation_
</p>

We put all Creator actions into one line in all tabs and give you the full control under them.

We fully redesign our Logic tab. You can create and edit Logic item on the same screen.
<p align="center">
![Logic item editing](https://github.com/surveyjs/survey-creator/blob/master/docs/images/creator-v2-logic-item-editing.png?raw=true)

_Logic item editing_
</p>

You can filter your logic items by a question to show only logic related by this question or by logic type. It helps a lot with supporting complex survey/forms with a lot of logic in them.
<p align="center">
![Logic filtering](https://github.com/surveyjs/survey-creator/blob/master/docs/images/creator-v2-logic-filtering.png?raw=true)

_Logic filtering_
</p>

We fully rewrite elements adorners and provide a lot of new functionality. You can edit any string elements in survey by simply clicking on it.
<p align="center">
![Column title adorner](https://github.com/surveyjs/survey-creator/blob/master/docs/images/creator-v2-column-title-adorner.png?raw=true)

_Column title adorner_
</p>

You can setup a column cell properties directly in the designer.
<p align="center">
![Setup column cell editor](https://github.com/surveyjs/survey-creator/blob/master/docs/images/creator-v2-setup-column-adorner.png?raw=true)

_Setup column cell properties_
</p>

You can a new question or page by clicking a button on designer and so on.
<p align="center">
![Add new question](https://github.com/surveyjs/survey-creator/blob/master/docs/images/creator-v2-add-question?raw=true)

_Add new question from designer_
</p>


We change our element selector and show filtering if there are more then N elements in the list, ten by default.
<p align="center">
![Element selector](https://github.com/surveyjs/survey-creator/blob/master/docs/images/creator-v2-element-selector?raw=true)

_Element selector_
</p>

We fully change design for toolbox and property grid. They look clean and support adaptivity better.The same story about our Translation tab.

There are many others tinies changes that can be found during using SurveyJS Creator V2.

We made a lot of changes in SurveyJS Library as well. However, we made changes in Library as evolution instead of revolution. Creator V1 and Creator V2 are both work with the same library versions. We had to introduce a lot of new functionality and performance improvements into library, because the most UI elements in Creator V2 are SurveyJS Library elements.

We use SurveyJS Library UI elements in Creator V1 mainly in two places: Designer tab (Survey Creator users design), Test Tab (obvious reason).

We have absolutely another story in Creator V2. We used SuveyJS Library elements everywhere and more extensively.
After we decided to show all pages at once in Creator V2, by supporting MS Word layout, we had to resolve the performance issue. SurveyJS Library could render up to 100 hundred questions one page but render 40 pages by 25 questions at once was the problem. We do have customers with 1000+ questions surveys and we try our best to handle operation bellow 1 sec for large surveys. To solve the rendering performance issue, we decided to introduce [lazy rendering support](https://surveyjs.io/Examples/Library?id=survey-lazy&platform=Reactjs) by rendering skeletons for questions that are not visible in the screen and heavily optimized operations in SurveyJS model.

Another big step was to change the way we render elements adorners on the design surface. We use [after render mechanism](https://surveyjs.io/Examples/Library?id=survey-lazy&platform=Reactjs) in Creator V1. We wanted to create a more robust solution for Creator V2 instead of modifying DOM elements after rendering. It looks more like a hack for us, and we wanted something more reliable. We have ended up with alternative rendering mechanism for SurveyJS Library elements. A developer can register a new render for UI elements in Library and use a new render code instead of default. It allows us to introduce better in-place editing support in the designer. For example, to make all our survey strings editable in Creator V2, we just override the default rendering by span with a span with a div supported editable content. 
<p align="center">
![Rating text adorner](https://github.com/surveyjs/survey-creator/blob/master/docs/images/creator-v2-rating-text-adorner?raw=true)

_Rating text adorner_
</p>

Tabs, toolbox, element selectors and many other elements are SurveyJS Library elements. They support adaptivity and accessibility out of the box.  
<p align="center">
![Toolbox adaptivity](https://github.com/surveyjs/survey-creator/blob/master/docs/images/creator-v2-toolbox-adaptivity?raw=true)

_Toolbox adaptivity_
</p>


What can really blow your mind, that property grid, list of logic items in Logic Tab, list of matrices in Translation tab and many other UI elements are SurveyJS Library widget.

Before starting to write the code for new property grid. We told to ourselves. Wait a minute, we are going to introduce a widget for data entering, but our SurveyJS is a widget for data entering. What if we add missed functionality into our SurveyJS Library and turn all data-entry widgets in Creator V2 into Survey widgets.

Property Grid is a one-page survey with several [expandable panels](https://surveyjs.io/Examples/Library?id=questiontype-panel) and turned-off navigation. Every property editor is a survey question. To introduce or override the existing property editor you need just to define a question JSON and optionally define several functions that are fired by survey events. [Here is the example](https://surveyjs.io/Examples/Survey-Creator?id=custompropertyeditor&platform=ReactjsV2#content-js) of creating a new property grid in Creator V2. We have introduced a lot of small improvements, for [example actions](https://surveyjs.io/Examples/Library?id=survey-titleactions) in question titles.
<p align="center">
![Choices property editor](https://github.com/surveyjs/survey-creator/blob/master/docs/images/creator-v2-choices-property-editor?raw=true)

_Title actions in choices property editor_
</p>

Matrix in “Logic tab” is a dynamic matrix question. It uses a [new detail panel functionality](https://surveyjs.io/Examples/Library?id=questiontype-matrixdynamic-detail). In the detail panel we use panel dynamic to edit conditions and another panel dynamic to edit logic actions.
<p align="center">
![Detail panel in logic tab](https://github.com/surveyjs/survey-creator/blob/master/docs/images/creator-v2-logic-item-editing?raw=true)

_Using detail panel in Logic tab_
</p>

We use survey with many dropdown matrices in Translation tab. To create a better layout for this tab, we introduced auto grow/shrink functionality for comment question. The number of rows increase/decrease based on a question content.
(#image animated gif)

There are many other examples. We tried to keep the number of custom developed elements in Creator V2 to minimum. For example, page navigation is the custom developed widget.

The biggest advantage of using SurveyJS elements, including survey widget, you don’t need to write rendering for them for all platforms in Creator. These elements are already renders in all platforms in SurveyJS Library and they have been tested in thousands web applications.

Another advantages, we make our SurveyJS Library, that was already the most powerful JavaScript survey, superb comparing to any other competitive solution, by supporting dozens new scenarios out of the box.

As we wrote in the beginning, we currently support two platforms in Creator V2: react and knockout. Creator for React you can use in your react application and knockout version for all other platforms. We are working on Angular version and later will introduce Vue version that you will be able to replace with the knockout version in your Angular and Vue applications as soon as we release them.

If you were purchase SurveyJS Creator or SurveyJS Pro within a year since today, you can start use Creator V2 right now. If your subscription is over, you can continue to use the old versions as long as you wish, but to get our latest versions, including Creator V2, you will have to [renewal your subscription](https://surveyjs.io/Buy#surveyjs-updates).
