---
title: General Survey Layout Settings - SurveyJS
description: This step-by-step guide explains how to configure survey layout settings, including card view, collapse state, question title and description alignment, and more.
---

# Survey Layout Guide

## About Survey Layout

The layout settings in Survey Creator are essential for creating user-friendly and visually balanced surveys. These settings affect how questions are displayed and organized, helping ensure that your survey is easy to follow and interact with. Careful layout choices improve readability, reduce the perceived complexity of the survey, and create a more appealing and professional-looking form.

## How to Display a Single Question per Page (Card View)

The **Show single question per page** option, also known as Card View, helps break down surveys with multiple questions into manageable sections, placing each question on its own page. This option is particularly useful for longer surveys or when you need to focus user attention on one question at a time.

To enable the Card view, follow these steps:

1. In the top right corner of the Property Grid, select **Survey** to switch to the survey-level settings.  
2. Under **Navigation**, locate the **Survey layout** setting.  
3. Select the **Show single question per page** option.
   
<img src="../images/eud-survey-layout 399 435.png" alt="How to display a single question per page (card view)" width="399" height="435">

Other survey layout options include:

* Show all questions on a single page         
Displays the entire survey on one page. This is best suited for shorter surveys where all questions are easily visible without overwhelming the user with scrolling.  

* Original structure          
Keeps the survey in its initially designed layout, preserving the original number of pages and the specific placement of questions on each page.

## How to Change the Question Title Location

For forms with multiple questions and shorter titles, adjusting the title location can help make the survey more compact. You can configure the question title settings at four levels: for the entire form, for an individual page, for a specific panel, or for a single question.

To set question title location for all questions within a form, follow these steps:

1. In the top right corner of the Property Grid, select **Survey** to switch to the survey-level settings.  
2. Under **Question Settings**, locate the **Question title alignment** setting.  
3. Select between available options:  
   * **Top** (default) - Question title appears above the input field.  
   * **Bottom** - Question title appears below the input field.  
   * **Left** - Question title is displayed to the left of the input field.

<img src="../images/eud-question-title-alignment 399 410.png" alt="How to change the question title location" width="399" height="410">

To customize the question title location for questions within a specific page or panel, select the desired page or panel and follow the same steps in the example above starting from step 2. Selecting the **Inherit** option on step 3 will apply the alignment setting of the parent element, whether it's a nesting panel or the page which the question belongs to.

<img src="../images/eud-question-title-alignment-page 409 509.png" alt="How to set the question title location for all questions within a page or panel" width="409" height="509">

> If you set **Question title alignment** to **Left**, it's recommended to specify a consistent width for question titles on each page or panel to keep the layout tidy. Please refer to the following guide for more information: [How to Vertically Align Input Fields in a Form](https://surveyjs.io/survey-creator/documentation/end-user-guide/how-to-vertically-align-input-fields-in-survey)

You can also choose to place question titles at the **Bottom** of the input field, which can be helpful for focusing attention on choice options or when you want to show validation messages at the bottom.

<img src="../images/eud-question-title-alignment-bottom 1002 372.png" alt="How to bottom-align question titles" width="1002" height="372">

## How to Change the Question Description Location

By default, question descriptions are positioned beneath question titles to provide context or instructions. For this reason, the description alignment setting has only two options:

* Under the question title          
This option places the description directly beneath the question title, wherever the title is positioned.

* Under the input field       
This option always places the question description beneath the input field, regardless of the position of the question title.

The **Under the question title** option works well for descriptions of any length when the title is positioned at the top or bottom of the question box. However, for left-aligned titles, long descriptions may take up more space than expected, depending on the title width setting. If a width is specified, the description may require additional vertical space. If no width is set, it may extend horizontally. See the examples below for illustration.

<img src="../images/eud-question-width-set-to-100 1375 298.png" alt="Lengthy question description aligned to the left, with the question title width set to 100px" width="1375" height="298">

<img src="../images/eud-question-width-set 1375 211.png" alt="Long question description aligned to the left, with question title width unset" width="1375" height="211">

To avoid situations like those illustrated above, place descriptions under input fields if you align question titles to the left:

<img src="../images/eud-title-left-description-under-input 1163 252.png" alt="How to always place the question description under the input field regardless of the question title alignment" width="1163" height="252">

To set question description location for all questions within a form, follow these steps:

1. In the top right corner of the Property Grid, select **Survey** to switch to the survey-level settings.  
2. Under **Question Settings**, locate the **Question description alignment** setting.  
3. Select between the available options.

<img src="../images/eud-description-survey 402 690.png" alt="How to set question description location for all questions within a form" width="402" height="690">

To customize the question description location for questions within a specific page or panel, select the desired page or panel and follow the same steps in the example above starting from step 2.

If you wish to set a question description location for an individual question, follow these steps:

1. Select the question to modify on the design surface or from the survey tree using the question name (ID).  
2. Under **Layout**, locate the **Question description alignment** property.  
3. Select from the available options. Selecting **Inherit** will apply the alignment setting of the parent element, whether it's a nesting panel or the page which the question belongs to.

<img src="../images/eud-question-description-question 400 723.png" alt="How to set question description location for a specific form question" width="400" height="723">

## How to Collapse/Expand Panels

A panel (or a section) is a form element that allows you to group several questions together and modify their settings all at once. Collapsed panels can help improve navigation and reduce clutter, especially in surveys with multiple sections.

<video src="../images/eud-collapse-state-video.mp4" autoplay muted playsinline loop style="width: 100%"></video>

To set a collapse state for a panel, do the following:

1. Select the panel you'd like to modify.  
2. Under **Panel layout**, find the **Panel collapse state** setting.  
3. Select from the following options:  
   * **Expanded** - Panel is fully displayed but can be collapsed.  
   * **Collapsed** - Panel shows only the title and description initially and can be expanded.  
   * **Locked** - Panel is fully displayed and cannot be collapsed.

<img src="../images/eud-panel-collapse-state 401 412.png" alt="How to set a panel collapse state" width="401" height="412">

## How to Collapse/Expand Question Boxes

A question box is the area that includes the question title, input field, description, validation errors, and more. Collapsed question boxes can be useful for forms with long or complex questions, as they allow users to expand and focus on each question individually.

To set a collapse state for a question box, follow these steps:

1. Select the question you want to modify.  
2. Under **Layout**, locate the **Question box collapse state** setting.  
3. Select from the following options:  
   * **Expanded** - Question box is fully displayed but can be collapsed.  
   * **Collapsed** - Question box displays only the title and description initially and can be expanded.  
   * **Locked** - Question box is fully displayed and cannot be collapsed.

<img src="../images/eud-question-collapse-state 400 548.png" alt="How to set a question collapse state" width="400" height="548">
