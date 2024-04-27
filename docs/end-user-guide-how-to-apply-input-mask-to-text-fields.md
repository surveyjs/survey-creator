---
title: How to Apply Input Masks to Single-Line Text Fields
description: Follow the steps below to apply a pattern, date and time, numeric, or currency mask to text fields of a Single-Line Input or Multiple Textboxes question, or a column of cell of a Multi-Select Matrix.
---

# How to Apply Input Masks to Single-Line Text Fields

## About Input Masking

Input masking is a technique used to help respondents enter information into a form in a specific way. Imagine you need to ask your respondents for their phone numbers. Instead of just typing in their number freely as a bunch of unordered digits, respondents receive clear guidelines on how to enter it in a certain format, such as +1 (123) 456-7890.

Input masking can be really helpful in reducing errors and ensuring that the form data you receive is consistent and easy to process.

## Mask Types

Input masks serve as templates that show respondents exactly how to enter their information, making sure input fields only accept data in certain predefined formats. In SurveyJS Form Builder, the following input mask types are available:

- Pattern       
Allows you to define a custom pattern using characters and symbols, ensuring that respondents enter data according to your specified format. For example, you can create a pattern for credit card numbers, such as 1234 4567 7891 1234.

- Date and Time         
Guides respondents to enter dates and times in a specific format, such as `mm/dd/yyyy` for dates and `HH:MM` for times. This helps ensure consistency and accuracy in date and time entries.

- Numeric           
Restricts input to numerical values only, allowing respondents to enter numbers without any additional characters. This is useful for collecting data like age, quantity, or measurements.

- Currency      
Formats input fields to accept currency values. This mask type allows symbols, such as commas separating thousands or dollar signs to represent monetary amounts, helping respondents enter monetary values consistently and accurately.

## Question types that support input masking

In SurveyJS Form Builder, you can apply masks to single-line fields available in the following question types:

- [Single-Line Input](#single-line-input)
- [Multiple Textboxes](#multiple-textboxes)
- [Multi-Select Matrix](#multi-select-matrix) (as a cell type)
- Dynamic Matrix (as a cell type)

## How to Apply Masks

### Single-Line Input

To mask an entry of a Single-Line Input question, follow the steps below:

1. Select a Single-Line Input question to which you wish to apply an input mask.
1. Under **General**, locate the **Input type** property and make sure it's set to its default **Text**.
1. Under **Input Mask Settings**, locate the **Input mask type** property.
1. In the drop-down menu, select among the available mask types.

<img src="../images/eud-input-mask-type.png" alt='Input mask types' width="343" height="517">

### Multiple Textboxes

By default, a Multiple Textboxes question consists of two single-line fields. To apply an input mask to an individual single-line field in a Multiple Textboxes question, follow these steps:

1. Select a Multiple Textboxes question. This action will display the question settings in the Property Grid.
1. Under **Items**, locate the field whose input you wish to mask.
1. Click the **Pen** icon on the right of the input field title to expand the field's settings.

    <img src="../images/eud-items.png" alt='Expand item settings' width="302" height="400">

1. Locate the **Input type** property and make sure it's set to its default **Text** option.

    <img src="../images/eud-item-input-type.png" alt='Change item input type' width="301" height="391">

1. Under **Input Mask Settings**, locate the **Input mask type** property.
1. In the drop-down menu, select among the available input types.

    <img src="../images/eud-item-input-mask.png" alt='Apply input mask to a text field of a Multiple Textboxes question' width="305" height="356">

The image bellow illustrates a Multiple Textboxes question with four masked text fields for collecting payment details.

<img src="../images/eud-preview-items.png" alt='Multiple Textboxes question with masked fields' width="584" height="324">

### Multi-Select Matrix

A Multi-Select Matrix allows you to set **Cell input types** for all cells of a matrix table or for cells of a particular matrix column. By default, when a new Multi-Select Matrix is added to a form, all cells have the Dropdown type. To make input mask settings available in the Property Grid, **Cell input type** for all cells of a matrix table or for cells of a particular matrix column has to be set to Single-Line Input.

To change **Cell input type** for all cells of a matrix table to Single-Line Input, follow these steps:

1. Select a Multi-Select Matrix question. This action will display the question settings in the Property Grid.
2. Under **General**, locate the **Cell input type** property.
3. In the drop-down menu, select **Single-Line Input**.

<img src="../images/eud-mutli-select-all-cells.png" alt='Multi-Select Matrix: How to set a cell type for all matrix cells' width="1347" height="672">

If you wish to apply different cell input types to different matrix columns, change **Cell input type** for individual columns as follows:

1. Select a Multi-Select Matrix question. This action will display the question settings in the Property Grid.
2. Under **Columns**, select the column to whose cells you wish to apply a mask.
3. Click the **Pen** icon on the right of the column title. This action will display the column settings in the Property Grid.

    <img src="../images/eud-multi-select-matrix-column.png" alt='Multi-Select Matrix: How to set a new cell type for a column' width="329" height="414">

    Another way to display the column settings in the Property Grid is by clicking the area around the column title on the design surface.

    <img src="../images/eud-column-area.png" alt='Multiple Textboxes: How to activate column settings in the Property Grid' width="819" height="454">

4. Under **General**, locate the **Cell input type** property. By default, it is set to **Default**, which means that it inherits **Cell input type** set for the entire matrix table.
5. In the drop-down menu, select **Single-Line Input**.
6. Locate the **Input type** property and make sure it's set to its default **Text** option.

    <img src="../images/eud-column-input-type.png" alt='Multi-Select Matrix column: Changing cell input type to Single-Line Input' width="334" height="543">

Now that the **Cell input type** is set to **Single-Line Input**, you can apply input masks to cells of such a column:

1. Under **Input Mask Settings**, locate the **Input mask type** property.
1. In the drop-down menu, select among the available mask types.

> A cell input type set for a column overrides the same setting defined for all cells within a multi-select matrix table.

To apply input masks to column cells within a Dynamic Matrix, follow the same instructions as for the Multi-Select Matrix.
