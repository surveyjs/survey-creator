---
title: How to Customize Validation Messages in a Survey or Form
description: This step-by-step end-user guide explains how to customize the default error messages in Survey Creator to inform respondents about the required input format, type, or range for valid responses.
---

# How to Customize Validation Messages

## About Custom Error Messages

Validation messages provide users with feedback when their answers do not meet certain form requirements. These messages help ensure accurate data collection and enhance user experience by clearly indicating what needs to be corrected and how. While some validation messages can be modified using the no-code Survey Creator UI, others require a developer's input. This guide covers validation messages that can be customized in the Property Grid.

You can make any element of your survey required&mdash;from a page or panel to individual questions and matrix cells. Elements can be made required unconditionally or based on specified rules. All required survey elements are marked with an asterisk symbol by default.

## Change the Required Symbol

Survey Creator enables you to customize the default asterisk symbol by following these steps:

1. In the top-right corner of the Property Grid, select **Survey** to switch to the survey-level settings.  
2. Under the **Question Settings** category, locate the **Required symbol(s)** property and enter a custom value to indicate required questions.

Additionally, you can change the position of the symbol in the question title using the **Question title pattern** setting. By default, the symbol appears at the end of the title.

<img src="../images/eud-required-symbol-location 443 551.png" alt="How to change the required symbol" width="443" height="551">

## Change the Location of Error Messages

By default, validation messages appear at the top of the question box. To change their location, do the following:

1. In the Property Grid, select **Survey** to access the survey-level settings.  
2. Under the **Question Settings** category, locate the **Error message alignment** property.  
3. Set the property to **Bottom** to move error messages below the question box.

<img src="../images/eud-message-location 444 405.png" alt="How to change the location of error messages" width="444" height="405">

## Customize Error Messages for Required Questions

### Make a Question Required

Questions can be made required unconditionally by selecting the **Required** property under the **General** category.

<img src="../images/eud-question-always-required 446 702.png" alt="How to make a question required" width="446" height="702">

### Make a Question Conditionally Required

Alternatively, you can make a question required conditionally by following these steps:

1. Select the question you want to make conditionally required.  
2. Under the **Conditions** category, locate the **Make the question required if** property.  
3. Click the **Magic wand** icon to open a popup for condition configuration.  
4. In the popup, select the triggering element's **ID** (its **Question name** property value).  
5. Choose a condition from the drop-down menu, such as **Empty**, **Not Empty**, **Equals**, or **Greater than**.  
6. Enter or select the triggering value.  
7. Click **Apply**.

<img src="../images/eud-conditionally-required-question 1380 737.png" alt="How to make a question conditionally required" width="1380" height="737">

If the condition is met and a respondent attempts to skip the question without giving an answer, they will see an error message.

### Specify a Custom Message for Required Question

The default error message for required questions is "Response required." To customize this message for a specific question, follow the steps below:

1. Select the question you want to customize.  
2. Under the **Validation** category, locate the **Error message for required questions** setting.  
3. Enter a new error message in the input field.

<img src="../images/eud-custom-required-message 441 554.png" alt="How to make a question conditionally required" width="441" height="554">

## Customize Error Messages for Min/Max Value Validation

Date and numeric Single-Line Input questions allow you to set minimum and maximum values for validation. Before a respondent inputs a value, the UI provides visual cues. For instance, a date input disables dates outside the valid range. To provide textual feedback after validation has occurred, you can display custom error messages for minimum and maximum values, as described below:

1. Add a **Single-Line Input** question to your survey.   
2. Under the **General** category, locate the **Input type** property and set it to **Number**.  
3. Set **Min** and **Max** values using the dedicated input fields.<br>
    <img src="../images/eud-min-max-values 444 494.png" alt="How to set Min/Max value validation" width="444" height="494">
4. Under the **Validation** category, locate the **"Value is below minimum" error message** property.  
5. Replace the default message ("The value should not be less than {0}") with your custom text.  
6. Ensure you retain the `{0}` placeholder, which dynamically reflects the minimum value.  
7. Repeat the same steps for the **"Value exceeds maximum" error message** property.<br><br>
    <img src="../images/eud-custom-min-value 446 751.png" alt="How to customize error messages for Min/Max values validation" width="446" height="751">

## Add a Custom Validation Rule

Besides checking if a required question has an answer, you can also create a custom validation rule with a custom error message. The example below shows how to add a custom validation rule for a Single-Line Input question of a Date input type that asks respondents to provide their date of birth. Instead of setting a date range using the Min and Max values, the question uses the `age()` function to calculate the age of a respondent based on their birthdate. If the age is outside the 18-50 range, the question throws a corresponding error message.

<img src="../images/eud-age-validation 1411 736.png" alt="How to add a custom validation rule using the age()" function width="1411" height="736">

To add a custom validation rule for a Date of Birth question, follow these steps:

1. Add a **Single-Line Input** question to your survey.
2. Under the **General** category, set the **Input type** property to **Date**.
3. Under **Validation** category, locate the **Validation rules** property.
4. Click the **Plus** icon to add a new validation rule.
5. Enter a custom error message to be shown if a user provides an invalid answer, e.g., "You need to be between the ages of 18 and 50."
6. Enter the expression `age({date-of-birth}) >= 18 and age({date-of-birth}) <= 50`.

<img src="../images/eud-validation-expression 1495 735.png" alt="How to add a validation rule with a custom error message" function width="1495" height="735">

In this example, the expression checks if the user's age is within the required range. However, you can build any other validation rule using the [expression syntax supported in Survey Creator](https://surveyjs.io/survey-creator/documentation/end-user-guide/expression-syntax).

## Customize Error Messages for Required Panels

The default error message for required panels is "Response required: answer at least one question." To customize this message for a specific panel:

1. Select the panel you want to customize.  
2. Under the **Validation** category, locate the **Error message for required questions** setting.  
3. Enter a new error message in the input field.<br><br>
    <img src="../images/eud-panel-error-message 456 621.png" alt="How to customize error messages for required panels" function width="456" height="621">
4. Switch to the Preview tab to test the new validation message.

<img src="../images/eud-required-panel-example 1222 738.png" alt="Required panel preview" function width="1222" height="738">

## Customize Error Messages for Required Pages

You can prevent users from skipping a specific page by making it required. A required page ensures that respondents provide an answer to at least one question on it.

A page cannot be made required unless you specify a condition which will make it one when evaluated to `true`. To make a page of your survey conditionally required, follow these steps:

1. Select the page you want to make required.  
2. Under the **Conditions** category, locate the **Make the page required if** property.  
3. Click the **Magic wand** icon to open a popup for condition configuration.  
4. In the popup, select the triggering element's **ID** (its **Question name** property value).  
5. Choose a condition from the drop-down menu, such as **Empty**, **Not Empty**, **Equals**, or **Greater than**.  
6. Enter or select the triggering value.  
7. Click **Apply**.

<img src="../images/eud-required-page-if 1368 771.png" alt="How to customize error message for required pages" function width="1368" height="771">

If the condition is met, and a respondent attempts to skip the page without answering at least one question, they will see an error message "Response required: answer at least one question.". This message can only be modified by a developer.

<img src="../images/eud-page-required 1417 765.png" alt="Required page preview" function width="1417" height="765">

## Enable Immediate Validation

By default, validation occurs when a user proceeds to the next page. If you want validation to happen immediately, follow these steps:

1. In the top-right corner of the Property Grid, select **Survey** to access survey-level settings.
2. Under the **Validation** category, locate the **Run validation** property.
3. Select **After an answer is changed** to run validation immediately after a respondent updates an answer.

<img src="../images/eud-when-to-run-validation 442 754.png" alt="How to enable immediate validation" width="442" height="754">
