# End-User Documentation for Survey Creator

This document illustrates how to perform basic tasks in the Survey Creator component. The component's UI is organized in multiple tabs. Each section in this document describes an individual tab.

<img src="images/survey-creator-tabs.png" alt="Survey Creator - Tabs" width="100%" usemap="#tabs-map">

<map name="tabs-map">
    <area alt="Designer Tab" title="Designer Tab" href="#designer-tab" coords="10,67,140,135" shape="rect">
    <area alt="Preview Tab" title="Preview Tab" href="#preview-tab" coords="152,68,274,135" shape="rect">
    <area alt="Logic Tab" title="Logic Tab" href="#logic-tab" coords="282,68,392,135" shape="rect">
    <area alt="JSON Editor Tab" title="JSON Editor Tab" href="#json-editor-tab" coords="398,67,545,135" shape="rect">
    <area alt="Translation Tab" title="Translation Tab" href="#translation-tab" coords="561,68,713,136" shape="rect">
</map>

- [Designer Tab](#designer-tab)
  - [Question and Panel Types](#question-and-panel-types)
    - [Single Input](#single-input)
    - [Checkbox](#checkbox)
    - [Radiogroup](#radiogroup)
    - [Dropdown](#dropdown)
    - [Comment](#comment)
    - [Rating](#rating)
    - [Ranking](#ranking)
    - [Image Picker](#image-picker)
    - [Boolean](#boolean)
    - [Image](#image)
    - [HTML](#html)
    - [Signature Pad](#signature-pad)
    - [Expression](#expression)
    - [File](#file)
    - [Single-Choice Matrix](#single-choice-matrix)
    - [Multiple-Choice Matrix](#multiple-choice-matrix)
    - [Dynamic Matrix](#dynamic-matrix)
    - [Multiple Text](#multiple-text)
    - [Panel](#panel)
    - [Dynamic Panel](#dynamic-panel)
  - [Adorners](#adorners)
  - [How to: Add a question to the survey](#how-to-add-a-question-to-the-survey)
  - [How to: Add a page to the survey](#how-to-add-a-page-to-the-survey)
  - [How to: Change the question type](#how-to-change-the-question-type)
  - [How to: Clear the survey](#how-to-clear-the-survey)
- [Preview Tab](#preview-tab)
  - [How to: Re-run the preview](#how-to-re-run-the-preview)
  - [How to: Preview the survey on different devices](#how-to-preview-the-survey-on-different-devices)
- [Logic Tab](#logic-tab)
  - [How to: Add a new rule](#how-to-add-a-new-rule)
  - [How to: Edit a rule](#how-to-edit-a-rule)
  - [How to: Filter rules](#how-to-filter-rules)
- [JSON Editor Tab](#json-editor-tab)
- [Translation Tab](#translation-tab)
  - [How to: Add another language](#how-to-add-another-language)
  - [How to: Filter translation strings](#how-to-filter-translation-strings)
  - [How to: Import or export translation strings to CSV](#how-to-import-or-export-translation-strings-to-csv)

## Designer Tab

The Designer tab allows you to configure your survey. You can drag and drop questions and panels from the Toolbox onto the design surface and then use the Property Grid to change the question, panel, and survey settings.

<img src="images/survey-creator-tabs-designer.png" alt="Survey Creator - Designer tab" width="100%">

### Question and Panel Types

The Toolbox contains the question and panel types described below.

#### Single Input

Respondents enter their answer into a single-line text editor. Use the Single Input type for open-ended questions that require short answers.

<img src="images/question-types-single-input.png" alt="Question types - Single input" width="50%">

See also:

- [Comment](#comment)
- [Multiple Text](#multiple-text)

#### Checkbox

Respondents click one or several checkboxes to select answers. Use the Checkbox type for questions that accept multiple answers.

<img src="images/question-types-checkbox.png" alt="Question types - Checkbox" width="50%">

#### Radiogroup

Respondents use radio buttons to select a single answer. Use the Radiogroup type for questions that can have multiple options but accept only one answer.

<img src="images/question-types-radiogroup.png" alt="Question types - Radiogroup" width="50%">

See also: [Dropdown](#dropdown)

#### Dropdown 

Respondents select a single answer from a drop-down list. Like [Radiogroup](#radiogroup), the Dropdown type can be used for questions that have multiple options but accept only one answer. However, the Dropdown UI can display more options while occupying less screen space.

<img src="images/question-types-dropdown.png" alt="Question types - Dropdown" width="50%">

#### Comment

Respondents enter their lengthy answer into a resizable multi-line text area. Use the Comment type for open-ended questions that accept multi-line answers.

<img src="images/question-types-comment.png" alt="Question types - Comment" width="50%">

See also:

- [Single Input](#single-input)
- [Multiple Text](#multiple-text)

#### Rating

Respondents select one number within a range. Use the Rating type when you want respondents to enter a rating.

<img src="images/question-types-rating.png" alt="Question types - Rating" width="50%">

#### Ranking 

Respondents drag and drop items from a list to rearrange them according to rank or preference. Use the Ranking type for questions in which respondents must set the order of items.

<img src="images/question-types-ranking.png" alt="Question types - Ranking" width="50%">

#### Image Picker

Respondents select one or several images or videos from a series. A value associated with this image or video is saved to the survey results.

<img src="images/question-types-imagepicker.png" alt="Question types - Image Picker" width="50%">

- How to: Associate values with images or videos          
Expand the **Choices** category and enter the values in the **Choices** table:

    <img src="images/survey-creator-choices-value.png" alt="Survey Creator - Image value" width="40%">

- How to: Enable multiple image or video selection           
Expand the **General** category and select **Allow multiple selection**:

    <img src="images/survey-creator-allow-multiple-selection.png" alt="Survey Creator - Allow multiple selection" width="40%">

#### Boolean

Respondents switch a Boolean editor to Yes or No. The response is saved in the survey results as `true` for Yes or `false` for No.

<img src="images/question-types-boolean.png" alt="Question types - Boolean" width="50%">

#### Image

Use the Image type to add an image or video to the survey. This type is used for presentation only and does not produce a value to be saved in the survey results.

#### HTML

Use the HTML type to format text as needed, include links, and insert media or other custom elements into the survey. This type is used for presentation only and does not produce a value to be saved in the survey results. Be aware that HTML content can be vulnerable to security breaches. Ensure that the links you insert lead to trusted resources.

#### Signature Pad

Respondents use mouse or touch gestures to draw their signature within the allocated input area. Use this type to obtain the respondent's signature or any hand-drawn input.

<img src="images/question-types-signature-pad.png" alt="Question types - Signature pad" width="50%">


- How to: Resize the allocated area         
Expand the **General** category and change the **Width** and **Height** values:

    <img src="images/survey-creator-change-size.png" alt="Survey Creator - Change size" width="40%">

- How to: Change the image format        
The respondent's input is saved as a base64-encoded image in one of the following formats: PNG, JPEG, SVG. To select the desired format, use the **Image format** drop-down menu in the **General** category:

    <img src="images/survey-creator-image-format.png" alt="Survey Creator - Image format" width="40%">

- How to: Change the pen color          
Expand the **General** category and select the desired color from the **Pen color** drop-down menu:

    <img src="images/survey-creator-pen-color.png" alt="Survey Creator - Pen color" width="40%">

#### Expression

Use the Expression type to calculate values and present them to respondents. For example, you can sum up the scores of previous responses, display current date and time, or find an average value. The calculated value is saved in the survey results. In the following image, the Expression type concatenates the first and last names to display a full name:

<img src="images/question-types-expression.png" alt="Question types - Expression" width="50%">

To specify an expression, enter it into the **Expression** field in the **General** category. Your expression can reference other survey questions (for example, `{question1} + {question2}`) or use built-in calculation functions. Refer to the following help topics for more information:

- [Boolean Expressions](https://surveyjs.io/Documentation/Library#boolean-expressions)
- [Built-In Functions](https://surveyjs.io/Documentation/Library#built-in-functions)

#### File

Use the File type to allow respondents to upload files. Respondents drag and drop one or several files onto the allocated area or select files in the browser's Upload File dialog window. The uploaded files are saved in the survey results as base64-encoded strings.

<img src="images/question-types-file.png" alt="Question types - File" width="50%">

- How to: Restrict uploaded file types          
The File type is built upon the standard `<input type="file">` HTML element. To restrict file types, the standard element uses the <a href="https://www.w3schools.com/tags/att_input_accept.asp" target="_blank">`accept`</a> attribute. Enter its value into the **Accepted file types** field in the **General** category:

    <img src="images/survey-creator-accepted-file-types.png" alt="Survey Creator - Accepted file types" width="40%">

> Always restrict the allowed file types to prevent possible security vulnerabilities. 

- How to: Enable multiple file selection           
Expand the **General** category and select **Allow multiple files**:

    <img src="images/survey-creator-allow-multiple-files.png" alt="Survey Creator - Allow multiple files" width="40%">

#### Single-Choice Matrix

The Single-Choice Matrix type displays radio buttons in rows and columns. Respondents can select only one radio button in each row.

<img src="images/question-types-matrix-single-choice.png" alt="Question types - Single-Choice Matrix" width="50%">

- How to: Add new rows          
Expand the **Rows** category and click **Add New**:

    <img src="images/survey-creator-add-new-row.png" alt="Survey Creator - Add new row to a matrix question" width="40%">

- How to: Randomize rows        
Expand the **Rows** category, find the **Row order** editor, and switch it to *Random*:

    <img src="images/survey-creator-row-order.png" alt="Survey Creator - Row order in a matrix question" width="40%">

See also:

- [Multiple-Choice Matrix](#multiple-choice-matrix)
- [Dynamic Matrix](#dynamic-matrix)

#### Multiple-Choice Matrix

The Multiple-Choice Matrix type displays rows and columns. At their intersections, the matrix can display the following editors:

- [Dropdown](#dropdown)
- [Checkbox](#checkbox)
- [Radiogroup](#radiogroup)
- [Single Input](#single-input)
- [Comment](#comment)
- [Boolean](#boolean)
- [Expression](#expression)
- [Rating](#rating)

Respondents use these editors to select a desired value in each cell. The following image illustrates the Multiple-Choice Matrix type with the default Dropdown editors: 

<img src="images/question-types-matrix-multiple-choices.png" alt="Question types - Multiple-Choice Matrix" width="50%">

- How to: Change the editor type         
Expand the **General** category and select the desired editor type from the **Cell type** drop-down menu:

    <img src="images/survey-creator-matrix-cell-type.png" alt="Survey Creator - Matrix cell type" width="40%">

See also:

- [Single-Choice Matrix](#single-choice-matrix)
- [Dynamic Matrix](#dynamic-matrix)

#### Dynamic Matrix

The Dynamic Matrix type is similar to a [Multiple-Choice Matrix](#multiple-choice-matrix), but respondents can add and remove matrix rows.

<img src="images/question-types-matrix-dynamic-rows.png" alt="Question types - Dynamic Matrix" width="50%">

#### Multiple Text

Respondents enter their answers into multiple single-line text editors. Use the Multiple Text type for open-ended questions that require more than one short answer.

<img src="images/question-types-multiple-text.png" alt="Question types - Multiple text" width="50%">

- How to: Specify default answers           
Expand the **Data** category and click **Set Default Answer** to open the Default Answer pop-up window. Enter the default answers into the text editors and click **Apply**:

    <img src="images/survey-creator-multiple-text-set-default-answer.png" alt="Survey Creator - Matrix cell type" width="80%">

#### Panel

The Panel type is a container for other questions and panels. Use this type to group several questions or panels and control them all together.

#### Dynamic Panel

The Dynamic Panel type is a template panel that can contain multiple questions. Respondents can add and remove panels based on the template.

<img src="images/question-types-dynamic-panel.png" alt="Question types - Dynamic panel" width="50%">

### Adorners

Adorners are design-surface controls for survey element manipulation. Use adorners to edit UI text in place, reorder choices, duplicate and delete elements, specify whether an answer is required, and perform other actions on survey elements. Settings that you specify using adorners are synchronized with settings in the Property Grid, and vice versa.

Each element type has an associated set of adorners. The following image highlights adorners for a [Dropdown](#dropdown) question:

<img src="images/survey-creator-dropdown-adorners.png" alt="Survey Creator - Adorners" width="50%">

### How to: Add a question to the survey

Drag and drop the desired question type from the Toolbox onto the design surface. Alternatively, you can click the **Add Question** button to add a [Single Input](#single-input) question. This button also displays an ellipsis icon that allows you to change the type of inserted questions.

<img src="images/survey-creator-add-question-button.png" alt="Survey Creator - Add Question button" width="50%">

### How to: Add a page to the survey

In the Property Grid, select **Survey**, expand the **Pages** category, and click the **Add New** button in the **Pages** editor:

<img src="images/survey-creator-add-new-page.png" alt="Survey Creator - Add new page" width="40%">

Alternatively, you can add a page on the design surface. The surface displays the skeleton of a new page at the bottom. To add a new page, you need to [add a question to it](#how-to-add-a-question-to-the-survey).

### How to: Change the question type

Use the element type selector in the question:

<img src="images/survey-creator-element-type-selector.png" alt="Survey Creator - Element type selector" width="50%">

Some question types are non-interchangeable. For example, a [Dropdown](#dropdown) question supports choices, while [Single Input](#single-input) does not. If you switch the question type from Dropdown to Single Input, your choices will be lost. In this case, you can click the **Undo** button to reinstate the previous configuration:

<img src="images/survey-creator-undo-button.png" alt="Survey Creator - The Undo button" width="50%">

### How to: Clear the survey

Click the **Clear Survey** button on the Toolbar:

<img src="images/survey-creator-clear-survey.png" alt="Survey Creator - The Clear Survey button" width="50%">

## Preview Tab

The Preview tab allows you to view and take the survey as a respondent.

<img src="images/survey-creator-preview-tab.png" alt="Survey Creator - The Preview tab" width="50%">

### How to: Re-run the preview

After you complete the survey, you can see the survey results in the table or JSON format. Click the Preview Survey Again button above the results to preview the survey again:

<img src="images/survey-creator-preview-survey-again.png" alt="Survey Creator - Preview survey again" width="50%">

### How to: Preview the survey on different devices

Click the **Device** icon and select the desired device from the drop-down menu. You can also click the **Orientation** icon to switch between the landscape and portrait orientations:

<img src="images/survey-creator-preview-different-devices.png" alt="Survey Creator - Preview the survey on different devices" width="50%">

## Logic Tab

The Logic tab displays and allows you to edit logical rules that specify the survey flow.

<img src="images/survey-creator-logic-tab.png" alt="Survey Creator - The Logic tab" width="75%">

### How to: Add a new rule

Click **Add New Rule** at the bottom of the Logic tab to display editors that allow you to specify conditions and select actions to perform when these conditions are met.

#### Specify conditions (if-clauses)       

Select a question whose answer should be checked and a logical operation from the corresponding drop-down menus. Then, specify the answer that applies the rule. Some logical operations do not need an answer (for example, Empty or Not empty).

<img src="images/survey-creator-logic-tab-add-new-rule.png" alt="Survey Creator - Add new logical rule" width="50%">

If the rule needs more than one condition, click the **Add Condition** button. You can use the AND or OR logical operator to combine the new and previous conditions.

<img src="images/survey-creator-multiple-conditions.png" alt="Survey Creator - Add new logical rule" width="33%">

Conditions that you specify in the UI are converted to logical expressions. If you prefer to enter the expressions directly, click the **Manual Entry** button on the Toolbar.

<img src="images/survey-creator-logic-tab-manual-entry.png" alt="Survey Creator - Manual entry" width="75%">

#### Specify the action (then-clause)         

Select one of the following actions from the drop-down menu:

- Show (hide) page          
Makes the selected page visible. If you want to hide the page, invert the logic of your condition.

- Enable (disable) page         
Makes the selected page editable. If you want to make the page read-only, invert the logic of your condition.

- Show (hide) question          
Makes the selected question visible. If you want to hide the question, invert the logic of your condition.

- Enable (disable) question         
Makes the selected question editable. If you want to make the question read-only, invert the logic of your condition.

- Make question required            
Requires an answer for the selected question.

- Complete survey           
Completes the survey.

- Set answer            
Sets a specified answer to the selected question.

- Copy answer           
Copies the answer from the selected question to a target question.

- Skip to question          
Navigates the survey to the selected question.

- Run expression            
Runs a custom expression on the selected question.

- Set "Survey Complete" page markup         
Specifies custom HTML markup for the Survey Complete page.

### How to: Edit a rule

Click a rule to expand it and use UI elements to edit the rule. Click **Done** to save your changes.

### How to: Filter rules

Use the Question Filter to filter rules by a specific question. You can also use the Action Type Filter to view only rules for the selected action type:

<img src="images/survey-creator-logic-tab-filter-rules.png" alt="Survey Creator - Filter rules in the Logic tab" width="50%">

## JSON Editor Tab

The JSON Editor tab enables you to preview and edit the resulting survey configuration. In most cases, you do not need to modify the JSON object on this tab. Change survey settings in the Property Grid instead.

<img src="images/survey-creator-json-editor-tab.png" alt="Survey Creator - JSON Editor tab" width="50%">

## Translation Tab

The Translation tab displays survey strings and allows you to translate them into different languages.

<img src="images/survey-creator-translation-tab.png" alt="Survey Creator - Translation tab" width="75%">

### How to: Add another language

In the Language Settings sidebar, click the **Add** icon and select the desired language from the pop-up menu:

<img src="images/survey-creator-translation-tab-language-settings.png" alt="Survey Creator - Language settings in the Translation tab" width="40%">

### How to: Filter translation strings

Use the Page Filter to filter strings by a specific page. You can also use the Used Strings Filter to view only the strings that were changed:

<img src="images/survey-creator-translation-tab-filters.png" alt="Survey Creator - Filter strings in the Translation tab" width="50%">

### How to: Import or export translation strings to CSV

Click the **Import to CSV** or **Export to CSV** button on the Toolbar:

<img src="images/survey-creator-translation-tab-import-export.png" alt="Survey Creator - Filter strings in the Translation tab" width="50%">