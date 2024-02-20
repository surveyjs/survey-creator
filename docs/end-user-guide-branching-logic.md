---
title: Branching Logic - SurveyJS
description: Follow the steps below to set up branching logic in your form that directs respondents along different conditional paths based on their responses to preceding questions | SurveyJS End-User Documentation
---

# Branching Logic

## About Branching Logic 

Branching logic, also known as branch logic or form branching, refers to the practice of designing forms that allows you to direct respondents along different conditional paths based on their responses to preceding questions. With branching logic in place, your form can automatically skip irrelevant questions, reveal or hide certain sections, or even prompt a respondent to the survey completion page. This dynamic approach enables forms to adapt to individual inputs and ensures that respondents are presented with only the most relevant content, thereby increasing completion rates and data accuracy.

For example, consider a customer satisfaction survey for a software product. If a respondent indicates that they are satisfied with the product's performance, branching logic might direct them to a follow-up question asking for additional feedback. However, if the respondent expresses dissatisfaction, the logic might skip the follow-up question and instead prompt them to indicate specific areas of improvement.

## Types of Branching Logic

### Skip Logic

[Skip logic](/survey-creator/documentation/end-user-guide/skip-logic-in-forms) is a form of branching that allows respondents to skip certain questions or sections based on their responses to previous questions. For instance, if a respondent indicates they do not own a car, skip logic might bypass questions related to car ownership and proceed to the next relevant section.

### Show/Hide Logic

Show/hide logic, also known as [display logic](/survey-creator/documentation/end-user-guide/form-display-logic), involves revealing or concealing specific questions or sections based on predefined conditions. For example, if a respondent selects "Yes" to a question about owning a pet, show/hide logic might display additional questions related to pet ownership while hiding them if the respondent selects "No".

### Complete Survey Logic

In more complex scenarios, branching logic can direct respondents to the "Thank You" page based on how they responded to a trigger question. For example, if a respondent answers "Yes" to a question about experiencing a particular issue, they might be directed to a follow-up section with more detailed questions about that issue. On the other hand, if they answer "No", they might be directed to the survey completion page because all further questions are not relevant to them due to the absence of any encountered issue.

## How to Set Up Branching Logic

### Skip to Question

To guide a respondent to a specific question further down the line based on their response to a current question, you can implement an expression-based event called "trigger". When the expression evaluates to `true`, the trigger initiates an action. One such trigger type is "Skip to question". It takes a respondent to a target question.

To set up branching logic that redirects a respondent to a specific form question, follow these steps:

1. In the top right corner of the Property Grid, select **Survey** to switch to the survey-level settings.
1. Under **Conditions**, locate a subsection called **Triggers** and click the **Plus** icon to add a new trigger.
1. In the trigger drop-down menu, select **Skip to question**.
   <img src="../images/eud-skip-to-question-steps-part-1.png" alt='Survey Creator: How to implement "skip to question" logic, part 1' width="1164" height="710">
2. Click the **Pen** icon to expand the trigger settings.
3. Use one of the following ways to specify an expression that, when evaluates to `true`, will take a respondent to the target question (the destination you want to direct a respondent to).
   - Enter the expression in the **Expression** field.
   - Click the **Magic wand** icon to open a popup and build the expression using a GUI. Click **Apply** when you finish.
4. Select a target question using the drop-down menu of the **Question to skip to** property.
   <img src="../images/eud-skip-to-question-steps-part-2.png" alt='Survey Creator: How to implement "skip to question" logic, part 2' width="1163" height="709">

### Show/Hide Questions

The simplest way to incorporate branching logic in a form is by displaying certain questions to some of your respondents while hiding them from others based on their answers. This approach is particularly convenient when you need to target specific form elements. With SurveyJS, you can set up display logic on individual questions, sections (in SurveyJS referred to as "panels"), or the entire page.

To create a conditional rule that determines the visibility of a question, panel, or page, do the following:

1. Select the dependent element you want to dynamically hide.
2. Expand its **Conditions** category in the Property Grid and locate the **Make the question/panel/page visible if** property.
3. Click the **Magic wand** icon on the right of the property. This action opens a popup with a GUI for setting up display logic.
4. In the popup, select the trigger [element ID](/survey-creator/documentation/end-user-guide/form-display-logic#how-it-works) (its **Question name** property value).
5. Select a condition from the drop-down menu: Empty, Not Empty, Equals, Does not equal, Any of, Greater than, Less than, Greater than or equals to, or Less than or equals to.
6. Type in or select the triggering answer.
7. Click **Apply**.

<img src="../images/eud-question-display-logic-steps.png" alt='Survey Creator: How to implement question display logic' width="1190" height="631">

### Complete Survey

To automatically complete a survey based on a user response, perform the following steps:

1. In the top right corner of the Property Grid, select **Survey** to switch to the survey-level settings.
1. Under **Conditions**, locate a subsection called **Triggers** and click the **Plus** icon to add a new trigger.
1. In the trigger drop-down menu, select **Complete survey**.
   <img src="../images/eud-complete-survey-steps-part-1.png" alt='Survey Creator: How to implement "complete survey" logic, part 1' width="1162" height="710">
2. Click the **Pen** icon to expand the trigger settings.
3. Use one of the following ways to specify an expression that, when evaluates to `true`, will activate survey completion.
   - Enter the expression in the **Expression** field.
   - Click the **Magic wand** icon to open a popup and build the expression using a GUI. Click **Apply** when you finish.
   <img src="../images/eud-complete-survey-steps-part-2.png" alt='Survey Creator: How to implement "complete survey" logic, part 2' width="1163" height="709">

### Graphical User Interface for Conditional Forms

SurveyJS Form Builder offers a user-friendly Logic tab and Conditions sections within the Property Grid for all form elements. These features allow users with diverse technical expertise to effortlessly configure conditional logic via a graphical user interface (GUI). The Logic tab consolidates all conditional rules created in the individual Conditions sections of the Property Grid. Within the Logic tab, users can implement all available types of form branching, including "Skip to question", "Complete survey", and "Show/Hide question".

<img src="../images/eud-logic-tab-condition-list.png" alt='Survey Creator: Condition list in the Logic tab' width="1084" height="884">

## See Also

- [Skip Logic](/survey-creator/documentation/end-user-guide/skip-logic-in-forms)
- [Display Logic](/survey-creator/documentation/end-user-guide/form-display-logic)