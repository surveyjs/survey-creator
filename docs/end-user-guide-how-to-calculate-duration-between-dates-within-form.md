---
title: How to Calculate Duration Between Dates and Prefill a Form Field with the Duration Value
description: Learn how to use the dateDiff() function to calculate the difference between two date fields within a form in days, months, or years.
---

# How to Calculate Duration Between Dates and Prefill a Form Field with the Duration Value

## About Duration Function

The `dateDiff()` function allows you to calculate the difference between two dates in days, months, or years. It's useful if you need to estimate the duration between two dates in the past or between a past date and the form submission date. For example, if you are building a resume, you can introduce a read-only field that calculates the duration of employment with a particular employer based on the start and end dates of employment. Another example is calculating the duration of ownership or experience, such as residency or a driver's license (to determine the total number of years of experience), etc.

## Supported Types of Duration

SurveyJS Form Builder supports three built-in duration types:

- Days
- Months
- Years

They can be used separately ("10 days", "5 months", "6 years") or together to form a combined value ("4 years 6 months").

## Supported Question types to Display Duration Value

You can use the `dateDiff()` function to display the calculated duration value in the following questions:

- Expression
  
This question is always read-only. The value is set using the **Expression** property located under **General**:


  <img src="../images/eud-expression 401 611.png" alt='Duration fuction in an Expression question' width="301" height="458">
  
- Single-Line Input
      
The value is set using the **Set value expression** property located under **Conditions**:


  <img src="../images/eud-set-value-expression 400 596.png" alt='Duration fuction in a Single Line Input' width="300" height="447">

  You can enable the read-only mode for a Single-Line Input with a set expression using the **Read-only** property located under **General**:

  <img src="../images/eud-read-only 400 596.png" alt='How to set Read-only mode for a Single-Line Input' width="300" height="447">

If you want the calculations to happen behind the scenes, you can create a hidden Expression question, create a custom variable, or use a combination of both. For example, you can create one custom variable for the duration in years and another one for the number of months of the remaining incomplete year. Then, you can create a read-only Expression question that will display both values in a single field.

## Duration Function Syntax for Single Values

For single values ("10 days", "5 months", "6 years"), use the following syntax to estimate duration:

- Days &mdash; `dateDiff({firstDate}, {secondDate}, 'days')`
- Months &mdash; `dateDiff({firstDate}, {secondDate}, 'months')`
- Years &mdash; `dateDiff({firstDate}, {secondDate}, 'years')`

If you want to calculate the duration between any date and a survey completion date, replace `{secondDate}` with `today()` without curly brackets.

## Duration Function Syntax for Combined Values

Combined values are commonly used when you want your duration estimate to be precise. For example, when it comes to the employment period, you might want to include the number of months of the incomplete year, not just the number of full years of employment. If you use the syntax above to estimate the number of months, the expression will estimate and display the employment duration in full months only, even if the number is greater than 12. To estimate the duration of the incomplete year in days or months, the following syntax is used:

- Incomplete year in days &mdash; `dateDiff({firstDate}, {secondDate}, 'days') % 365` 
- Incomplete year in months &mdash; `dateDiff({firstDate}, {secondDate}, 'months') % 12`

## Outcome

Using the `dateDiff()` function in either Expression questions or by setting expression-based values for Single-Line Inputs, you can add read-only fields to your form that display values calculated in real-time, eliminating the need for respondents to calculate and enter these values manually.


<img src="../images/eud-outcome 905 534.png" alt='How to calculate duration between two date fields in a form' width="905" height="534">


## Examples

The examples below produce the same result&mdash;"# years # months"&mdash;but illustrate the use of the `dateDiff()` function in an Expression question and Single-Line Input.

**The task is to generate a read-only field that will display the duration between a value entered in the "Since when" question and the form submission date (today).**

### How to Prefill an Expression Question with a Calculated Duration Value


The source question for the start date has the Question title "Since when" and Question name (ID) "since-date".


<img src="../images/eud-expression-outcome 912 598.png" alt='An Expression question that calculates and dysplays duration between two other date fields' width="912" height="598">


To configure an Expression question that will estimate and merge both values&mdash;full years and months of the incomplete year&mdash;and then display the resulting value, follow these steps:

1. Add an **Expression** question to the design surface.
1. Under **General**, locate the **Expression** field.
1. Enter the following sample value: `dateDiff({since-date}, today(), 'years') + ' years' + ' ' + dateDiff({since-date}, today(), 'months') % 12 + ' months'`
1. Under **Conditions**, locate the **Make the question visible if** property.
1. Click the **Magic wand icon** on the right of the property.
1. Set up a visibility rule by selecting the ID of the source question for the start date. Based on the configuration below, the Expression question will only be visible once the question with an ID "since-date" receives a date value, i.e., when it is not empty.
   
<img src="../images/eud-expression-visibility 1179 723.png" alt='How to set up a visibility rule for an Expression question' width="1179" height="723">

### How to Prefill a Single-Line Input with a Calculated Duration Value


In this example, we will use the same source question for the start date and assign the resulting duration value to a Single-Line Input question in read-only mode.


<img src="../images/eud-single-line-outcome 905 598.png" alt='How to set an expression-based value for a Single-Line Input question' width="905" height="598">


1. Add a **Single-Line Input** question to the design surface.
2. Under **General**, select the **Read-only** checkbox to disable manual editing of the set value by a respondent.
3. Under **Conditions**, locate the **Set value expression** property.
4. Enter the following sample value: `dateDiff({since-date}, today(), 'years') + ' years' + ' ' + dateDiff({since-date}, today(), 'months') % 12 + ' months'`
5. Locate the **Set value if** property.
6. Click the magic wand icon and set a conditional rule that determines when to assign the calculated value as a response.


<img src="../images/eud-set-value-if-and-set-value.png" alt='How to set and condition an expression-based value for a Single-Line Input' width="1193" height="571">


In the example above, the value is assigned when the source question for the start date with an ID "since-date" has a value, i.e., is not empty. If you don't want to set the value conditionally, use the **Default value expression** property instead of **Set value expression** and **Set value if**.


## Limitations


When merged values contain both numbers and strings (text), they cannot be used in the **Formatted string** property of the Expression question. Expressions ignore text values, so the resulting expression will only display calculated numbers.
