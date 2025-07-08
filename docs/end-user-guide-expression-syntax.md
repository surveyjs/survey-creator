---
title: Expression Syntax
description: Learn about expression syntax rules to create advanced expressions for configuring survey flow, question visibility, and data validation.
---

# Expression Syntax

## About Expressions and Expression Syntax Rules

In SurveyJS, an expression is a mathematical formula or logical statement used to specify conditional rules or calculate values. With expressions, you can control the flow of your survey, manage question visibility and read-only state, perform in-survey computations, and more. Expressions are evaluated (that is, calculated to produce a result) in real time while a respondent fills out a form. This dynamic evaluation ensures that expression results are always up-to-date.

SurveyJS Form Builder provides a graphical user interface for constructing logical expressions&mdash;a pop-up dialog with a list of questions and custom variables to select from and available operators. This dialog appears when you click a **Magic wand** button next to an expression setting in the Property Grid. For example, you can find such settings within the **Conditions** category of a page or question.

<img src="../images/eud-expression-settings.png" alt='Survey Creator: Expression builder UI' width="1340" height="760">

Although the visual expression builder covers most use cases, it operates within certain limitations that do not allow you to construct any imaginable expression. To unlock the full capabilities of expressions, you need to get acquainted with the syntax rules. This guide will introduce you to expression structure, supported operators, and built-in functions that you can use for calculations within your form.

## Expression Operands

Any expression consists of operands and operators. Operands are values upon which an operator performs an action. Alongside literals (values like `3`, `true`, or `"selected"`), expressions can use question values, custom variables, and function results as operands.

### Question Values

To use a question value in an expression, specify the **Question name** property value in curly brackets: `{my-question-name}`. Upon expression evaluation, the question name will be replaced with a real value. For example, the image below shows two questions with names `nps-score` and `promoter-features`. The latter question is displayed only when the `nps-score` value is 9 or higher. To configure this behavior, you need to do the following:

1. Select the `promoter-features` question on the design surface or in the survey tree.
2. Open the **Conditions** category and find the **Make the question visible if** setting in it.
3. Specify this setting with the following expression: `{nps-score} >= 9`.

<img src="../images/eud-visibleif-expression.png" alt='How to specify a conditional visibility expression' width="1338" height="756">

> For questions with a specified **Data** > **Join identifier** setting, use its value instead of the **Question name** value.

Complex question types (Multiple Textboxes, Dynamic Panel, matrices) and multi-select questions (Checkboxes, Image Picker, Ranking) support advanced syntax for accessing the values of their inner elements (individual textboxes, items, panels, rows, columns).

<div class="v2-class---doc-table-container">
  <table class="v2-class---doc-table-container__table">
    <thead>
      <tr>
        <th>Syntax</th>
        <th>Description</th>
        <th>Example</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td colspan="3"><b>Checkboxes</b>, <b>Image Picker</b>, <b>Multiple Textboxes</b>, <b>Ranking</b></td>
      </tr>
      <tr>
        <td><code>{questionid[index]}</code></td>
        <td>Use a zero-based index to access a selected item.</td>
        <td><code>{question1[0]}</code></td>
      </tr>
      <tr>
        <td colspan="3"><b>Multiple Textboxes</b></td>
      </tr>
      <tr>
        <td><code>{questionid.itemid}</code></td>
        <td>Accesses an individual textbox.</td>
        <td><code>{question1.item1}</code></td>
      </tr>
      <tr>
        <td colspan="3"><b>Single-Select Matrix</b></td>
      </tr>
      <tr>
        <td><code>{row.columnid}</code></td>
        <td>Use the <code>row</code> prefix to access a cell in the same matrix row.</td>
        <td><code>{row.column1}</code></td>
      </tr>
      <tr>
        <td colspan="3"><b>Multi-Select Matrix</b></td>
      </tr>
      <tr>
        <td><code>{row.columnid}</code></td>
        <td>Use the <code>row</code> prefix to access a cell in the same matrix row.</td>
        <td><code>{row.column1}</code></td>
      </tr>
      <tr>
        <td><code>{questionid.rowid.columnid}</code></td>
        <td>Accesses an individual matrix cell.</td>
        <td><code>{matrix.row1.column1}</code></td>
      </tr>
      <tr>
        <td><code>{questionid-total.columnid}</code></td>
        <td>Accesses a cell in a total row.</td>
        <td><code>{question1-total.column1}</code></td>
      </tr>
      <tr>
        <td colspan="3"><b>Dynamic Matrix</b></td>
      </tr>
      <tr>
        <td><code>{row.columnid}</code></td>
        <td>Use the <code>row</code> prefix to access a cell in the same matrix row.</td>
        <td><code>{row.column1}</code></td>
      </tr>
      <tr>
        <td><code>{dmatrixid[rowindex].columnid}</code></td>
        <td>Use a zero-based row index to access a specific cell.</td>
        <td><code>{dmatrix1[0].column1}</code></td>
      </tr>
      <tr>
        <td colspan="3"><b>Dynamic Panel</b></td>
      </tr>
      <tr>
        <td><code>{panel.questionid}</code></td>
        <td>Use the <code>panel</code> prefix to access a question within the same panel.</td>
        <td><code>{panel.question1}</code></td>
      </tr>
      <tr>
        <td><code>{parentPanel.questionid}</code></td>
        <td>Use the <code>parentPanel</code> prefix to access a question within a parent Dynamic Panel. Applies when one Dynamic Panel question is nested in another.</td>
        <td><code>{parentPanel.question1}</code></td>
      </tr>
      <tr>
        <td><code>{dpanelid[panelindex].questionid}</code></td>
        <td>Use a zero-based panel index to access a question within a specific panel.</td>
        <td><code>{dpanel1[0].question1}</code></td>
      </tr>
    </tbody>
  </table>
</div>

<div id="dynamic-panel"></div>

The advanced syntax may be useful in many cases, one of which is data validation in a Dynamic Panel. For instance, if the Dynamic Panel contains Start Date and End Date questions, you might want to check that the start date doesn't exceed the end date. To set up this configuration, follow these steps:

1. Add a Dynamic Panel to the design surface.
2. Add two Single-Line Input questions to the Dynamic Panel.
3. Select the first question, locate the **Input type** drop-down menu under the **General** category, and select **Date**.
4. Repeat step 3 for the second question.<br><br>
  <img src="../images/eud-inputype-date.png" alt='How to specify input type' width="1321" height="594">
5. Select the first question and enter `start-date` as the **Question name** setting value.
6. Select the second question and enter `end-date` as a value for the same setting.<br><br>
  <img src="../images/eud-questionname.png" alt='How to specify question name' width="1321" height="640">
7. Select the `end-date` question, locate the **Validation rules** setting under the **Validation** category, and click **Add new rule**.<br><br>
  <img src="../images/eud-validationrules-addnewrule.png" alt='How to add a new data validation rule' width="1321" height="602">
8. Specify the following **Error message**: `End date should be greater than start date`.
9. Enter the following **Validation expression**: `{panel.start-date} < {panel.end-date}`.
  <img src="../images/eud-validationrules-expression.png" alt='A data validation rule of the expression type' width="1321" height="646">

To check that the validation rule works as expected, open the Preview tab, add a new entry to the Dynamic Panel, and select invalid start and end dates.

<img src="../images/eud-datevalidation-preview.png" alt='Date validation preview' width="1321" height="671">

### Custom Variables

Custom variables are user-defined variables used to store dynamically calculated values. To use a custom variable in an expression, wrap its name in curly brackets, just like you do with question names: `{my-custom-variable}`. For information on how to define custom variables, refer to the following help topic:

[How to Use Custom Variables in Form Calculations](/survey-creator/documentation/end-user-guide/how-to-use-custom-variables-in-form-calculations (linkStyle))

### Function Results

Calculation functions produce results that can be used as operands in expressions. For example, the `dateDiff()` function computes a difference between two dates. The function's result can be used in a validation expression to ensure that the difference doesn't exceed a specified limit. Follow the instructions below to configure this behavior:

1. Add two Single-Line Input questions to the design surface.
2. Set their **Input type** to **Date** and **Question name** to `start-date` and `end-date` (perform steps 3 to 6 from the [instructions for the Dynamic Panel](#dynamic-panel)).
3. Select the `end-date` question, locate the **Validation rules** setting under the **Validation** category, and click **Add new rule**.<br><br>
  <img src="../images/eud-validationrules-addnewrule.png" alt='How to add a new data validation rule' width="1321" height="602">
4. Specify the following **Error message**: `Difference between start and end dates must not be greater than 14 days`.
5. Enter the following **Validation expression**: `dateDiff({start-date}, {end-date}, "days") <= 14`.<br><br>
  <img src="../images/eud-validation-datediff.png" alt='A validation rule that checks the difference between two dates' width="1217" height="620">

To verify the validation, open the Preview tab and select two dates that are more than 14 days apart.

<img src="../images/eud-validation-datediff-preview.png" alt='Date difference validation preview' width="1217" height="407">

Other calculation functions are used in expressions in a similar way. For more details, refer to the [Calculation Functions](#calculation-functions) section of this document.

## Expression Operators

Operators are symbols or keywords that define operations performed on operands. SurveyJS supports comparison, logical, and arithmetic operators.

### Comparison Operators

Comparison operators are used to compare two values (or in case of `empty` and `notempty`, one value with `undefined` and `null`) and define whether the comparison is true or false. These operators are essential for managing the survey flow and implementing logic within your survey. The following table lists available comparison operators:

| Operator | Description | Expression example |
| -------- | ----------- | ------------------ |
| `empty` | Returns `true` if the value is `undefined` or `null`. | `"{q1} empty"` | 
| `notempty` | Returns `true` if the value is different from `undefined` and `null`. | `"{q1} notempty"` | 
| `<=` / `lessorequal`  | Compares two values and returns `true` if the first is less or equal to the second. | `"{q1} <= 10"` |
| `>=` / `greaterorequal`  | Compares two values and returns `true` if the first is greater or equal to the second. | `"{q1} >= 10"` |
| `=` / `==` / `equal`  | Compares two values and returns `true` if they are loosely equal (that is, their type is disregarded). | `"{q1} = 10"` |
| `!=` / `<>` / `notequal`  | Compares two values and returns `true` if they are not loosely equal. | `"{q1} != 10"` |
| `<` / `less`  | Compares two values and returns `true` if the first is less than the second. | `"{q1} < 10"` |
| `>` / `greater`  | Compares two values and returns `true` if the first is greater than the second. | `"{q1} > 10"` |
| `*=` / `contains` / `contain`  | Compares two values and returns `true` if the first value contains the second value within it. | `"{q1} contains 'abc'"` |
| `notcontains` / `notcontain` | Compares two values and returns `true` if the first value doesn't contain the second value within it. | `"{q1} notcontains 'abc'"` |
| `anyof` | Compares a value with an array of values and returns `true` if the value is present in the array. | `"{q1} anyof [ 'value1', 'value2', 'value3' ]"` |
| `allof` | Compares two arrays and returns `true` if the first array includes all values from the second. | `"{q1} allof [ 'value1', 'value2', 'value3' ]"` |

### Logical Operators

Logical operators combine or revert logical conditions to create complex logic for features like visibility, data validation, dynamic read-only state, etc. Available logical operators are described below:

| Operator | Description | Expression example |
| -------- | ----------- | ------------------ |
| `!` / `negate` | Returns `true` if the condition returns `false`, and vice versa. | `!{q1}` |
| `&&` / `and`  | Combines two or more conditions and returns `true` if *all* of them are `true`. | `"{q1} empty and {q2} empty"` |
| <code>&#124;&#124;</code> / `or` | Combines two or more conditions and returns `true` if *any* of them is `true`. | `"{q1} empty or {q2} empty"` |

### Arithmetic Operators

Arithmetic operators perform simple mathematical calculations on numeric values. You can find the available arithmetic operators in the following table:

| Operator | Description | Expression example |
| -------- | ----------- | ------------------ |
| `+`  | Adds up two values. | `"{q1} + {q2}"` |
| `-`  | Subtracts the second value from the first. | `"{q1} - {q2}"` |
| `*`  | Multiplies two values. | `"{q1} * {q2}"` |
| `/`  | Divides the first value by the second. | `"{q1} / {q2}"` |
| `%`  | Returns the remainder of the division of the first value by the second. | `"{q1} % {q2}"` |
| `^` / `power`  | Raises the first value to the power of the second. | `"{q1} ^ {q2}"` |

## Calculation Functions

Calculation functions allow you to perform computations within your survey. All functions are divided into three groups: logical, date, and aggregation functions.

### Logical Functions

Expressions support one logical function&mdash;`iif`. It returns one value or the other based on whether a specified condition is true or false.      
Example: `"iif({question1} > 20, 'High', 'Low')"`

### Date Functions

For date calculations, you can use the following functions: 

| Function | Return value | Example |
| -------- | ------------ | ------- |
| `age`| Age according to a given birthdate. | `"age('2000-01-01')"` |
| `currentDate` | Current date and time. | `"currentDate()"` |
| `today` | Current date or a date shifted from the current by a given number of days. | `"today(-1)"`&nbsp;(yesterday)<br>`"today(1)"` (tomorrow) |
| `year`| Year of a given date. | `"year('2000-01-01')"` (2000) |
| `month`| Month of a given date as a value from 1 (January) to 12 (December). | `"month('2000-01-01')"` (1) |
| `day`| Day of the month for a given date as a value from 1 to 31. | `"day('2000-01-30')"` (30) |
| `weekday`| Day of the week for a given date as a value from 0 (Sunday) to 6 (Saturday). | `"weekday('2000-01-01')"` (6) |
| `dateDiff`| Difference between two given dates in full days (default), hours, minutes, months, or years. | `"dateDiff('2000-01-01', '2000-02-01', "days")"` (31)<br>`"dateDiff('2000-01-01', '2000-04-01', "months")"` (3)<br>`"dateDiff('2000-01-01', '2009-02-01', "years")"` (9)<br>`"dateDiff('2000-01-01T01:00:00', '2000-01-01T03:00:00', "hours")"` (2)<br>`"dateDiff('2000-01-01T01:00:00', '2000-01-01T01:45:00', "minutes")"` (45) |
| `dateAdd`| A `Date` value with an added or subtracted number of full days (default), months, or years. | `"dateAdd('2000-01-01', 10, "days")"` (`new Date(2000-01-11)`)<br>`"dateAdd('2000-01-01', 4, "months")"` (`new Date(2000-05-01)`)<br>`"dateAdd('2000-01-01', -5, "years")"` (`new Date(1995-01-01)`) |

[How to Calculate Duration Between Dates and Prefill a Form Field with the Duration Value](https://surveyjs.io/survey-creator/documentation/end-user-guide/how-to-calculate-duration-between-dates-within-form (linkStyle))

### Aggregation Functions

Aggregation functions are used to summarize, combine, or otherwise process a set of values into a single value.

Most survey questions support basic aggregation functions, such as `sum`, `min`, `max`, and `avg`. For Multi-Select Matrix, Dynamic Matrix, and Dynamic Panel, you can use advanced functions that aggregate values in a specific matrix column or panel question. The advanced functions provide an optional third parameter that allows you to filter values included in the calculation.

The following table describes all aggregation functions that you can use in expressions:

| Function | Return value | Example |
| -------- | ------------ | ------- |
| `sum` | Sum of passed numbers. | `"sum(10, 20, 30, 40)"` (100) |
| `min` | Minimum of passed numbers. | `"min(10, 20, 30, 40)"` (10) |
| `max` | Maximum of passed numbers. | `"max(10, 20, 30, 40)"` (40) |
| `avg` | Average of passed numbers. | `"avg(10, 20, 30, 40)"` (25) |
| `sumInArray` | Sum of numbers in a specific matrix column or panel question. | See below |
| `minInArray` | Minimum of numbers in a specific matrix column or panel question. | See below |
| `maxInArray` | Maximum of numbers in a specific matrix column or panel question. | See below |
| `avgInArray` | Average of numbers in a specific matrix column or panel question. | See below |
| `countInArray` | Number of matrix rows whose specified column is not empty or number of inner panels whose specified question is not empty. | See below |

Examples for `...InArray` functions:

- `"sumInArray({matrixdynamic}, 'total', {categoryId} = 1)"`        
Sums up values from a `"total"` matrix column but includes only the rows where a `"categoryId"` column equals 1.

- `"minInArray({matrixdynamic}, 'quantity', {quantity} > 0 and {categoryId} = 1)"`          
Finds a minimum value within a `"quantity"` matrix column but searches for it only in the rows where a `"categoryId"` column equals 1 and the values are positive.

- `"maxInArray({matrixdynamic}, 'quantity', {quantity} < 100)"`           
Finds a maximum value within a `"quantity"` matrix column, but the value should be under 100.

- `"avgInArray({matrixdynamic}, 'quantity', {quantity} > 0)"`           
Finds an average of values within a `"quantity"` matrix column, excluding zeroes.       

- `"countInArray({matrixdynamic}, 'quantity', {quantity} > 0 and {categoryId} = 1)"`        
Finds the total number of matrix rows with a `"quantity"` column value greater than zero but includes only the rows where a `"categoryId"` column equals 1.