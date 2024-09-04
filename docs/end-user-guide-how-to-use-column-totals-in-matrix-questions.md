---
title: How to Use Column Totals in Matrix Questions
description: In this guide, we'll show you how to create a Multi-Select or Dynamic Matrix and aggregate data across rows for a specific matrix column.
---

# How to Use Column Totals in Matrix Questions

## About Data Aggregation in Matrix Columns

SurveyJS Form Builder allows you to combine data from different rows of a matrix column by using a set of properties under the **Totals** category. For example, if you have a matrix question that asks a user to specify 
dates of visit, you might aggregate the "Number of days" column to find the total number of days spent abroad, the average duration of a trip, or the maximum and minimum number of days spent away.

<img src="../images/eud-total-days.png" alt="Dynamic Matrix: How to aggregate data in a column" width="1131" height="690">

## Supported Question Types

You can aggregate data across rows for a specific column in the following question types:

- [Multi-Select Matrix](https://surveyjs.io/form-library/examples/multi-select-matrix-question/)
- [Dynamic Matrix](https://surveyjs.io/form-library/examples/dynamic-matrix-add-new-rows/)

## Data Aggregation Methods

The following data aggregation methods are supported:

- **Sum** - Adds up all the values in a column to get the total.
- **Count** - Counts the number of entries in a column.
- **Min** - Finds the smallest value in a column.
- **Max** - Finds the largest value in a column.
- **Avg** - Calculates the mean value of the data in a column.

<img src="../images/eud-aggregation-methods.png" alt="Dynamic Matrix: data aggregation methods" width="443" height="422">

## How to Add a Total to a Matrix Column

In this example, we create a Dynamic Matrix and populate one of its columns with choices selected in a preceding Multi-Select Dropdown question. For information on how to pipe choices to a Dynamic Matrix column, 
refer to the following guide:

[How to Pipe Selected Choices to a Dynamic Matrix](https://surveyjs.io/survey-creator/documentation/end-user-guide/pipe-selected-choices-to-dynamic-matrix (linkStyle))

To calculate the duration of each trip in days, we use the `dateDiff()` function, which you can learn more about in the dedicated guide:

[How to Calculate Duration Between Dates and Prefill a Form Field with the Duration Value](https://surveyjs.io/survey-creator/documentation/end-user-guide/how-to-calculate-duration-between-dates-within-form (linkStyle))

To combine data from different rows within a Dynamic Matrix column, follow the steps below:

1. Add a Dynamic Matrix to a form.
2. Select the matrix column whose data you want to aggregate by clicking the area around the column title.
3. Under **General**, locate the **Cell input type** property and set it to **Expression (read-only)**.
4. Locate the **Expression** field and enter the following value: `dateDiff({row.from}, {row.to}, 'days')`, where `from` is the column name (ID) of the start date and `to` is the column name (ID) of the end date of a visit.<br><br>
    <img src="../images/eud-expression-column.png" alt="Dynamic Matrix: How to use the duration function to calculate the number of days between two dates" width="334" height="514">
5. Under **Totals**, locate the **Aggregation method** property and select the desired method.
6. Locate the **Formatted string** property and enter the text format for the column total, where `{0}` will be replaced with the actual numerical value.<br><br>
    <img src="../images/eud-column-total.png" alt="Dynamic Matrix: How to add the Total value for a column" width="1562" height="725">
7. *(Optional)* Modify the format type using the **Total value display format** property. For example, if you are aggregating monetary values, set the property to Currency and select the desired currency type using the **Currency** drop-down menu.<br><br>
    <img src="../images/eud-currency.png" alt="Dynamic Matrix: How to set the currency for the total value of a matrix column" width="336" height="294">

The resulting value will look as follows:

<img src="../images/eud-usd.png" alt="Dynamic Matrix: How to sum up values within a column and add a currency sign to the total" width="991" height="489">

## How to Sum Numerical Values Across Matrix Columns

In the previous example, we calculated the duration between two dates. If your matrix columns contain numerical values that you want to sum and display, use the `sum()` function instead of `dateDiff()` in step 4: `sum({row.columnOneName}, {row.columnTwoName})`. The rest of the steps are the same.

## Limitations

Multi-Select Matrix columns do not support data formatting properties and only allow selection of an aggregation method.
