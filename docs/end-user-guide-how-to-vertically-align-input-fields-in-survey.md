---
title: How to Vertically Align Input Fields in a Form
description: This guide will walk you through how to set up vertical input field alignment using the Question title width property.
---
# How to Vertically Align Input Fields in a Form

## About Vertical Input Field Alignment

When question titles are left-aligned, the associated input fields can sometimes look disorganized due to varying title widths. This often occurs because the width of a question title depends on the number of characters it contains, leading to uneven spacing. 

<img src="../images/eud-before-alignment.png" alt="A form with multiple input fields" width="1390" height="791">

To solve this, SurveyJS introduced a **Question title width** setting, which allows you to apply a consistent width to all questions within a page or panel and align input fields more neatly. This guide will walk you through how to set up vertical input field alignment using the **Question title width** property.

<img src="../images/eud-after.png" alt="How to vertically alight input field in a form" width="1389" height="803">

## How to Enable Vertical Input Field Alignment

To apply a consistent width to question titles, follow these steps:

1. Select a page or panel where you'd like to apply the changes.  
2. Under the **Question Settings** category, locate the **Question title alignment** property.  
3. Set the **Question title alignment** to **Left**. Once this is done, the **Question title width** property will appear.  
4. Enter the desired value in the **Question title width** editor. This value will define a uniform width for all question titles in the selected page or panel. The property accepts all commonly used CSS values (px, %, in, pt, etc.).

<img src="../images/eud-page-panel.png" alt="How to set up vertical input field alignment for a page or panel using the new Question title width property." width="401" height="505">

## How to Apply Question Title Alignment at the Survey Level

The **Question title alignment** setting is also available at the survey level, with the default alignment set to **Top**. This alignment applies to all questions within the survey by default. If you want to change the alignment at the survey level, do the following:

1. Switch to the survey-level settings in the top right corner.  
2. Under the **Question settings** category, find the **Question title alignment** property and change it to **Left**.

<img src="../images/eud-survey-level.png" alt="How to vertically alight input field in the entire form" width="400" height="495">

This will apply left alignment to all questions in the survey. However, please note that to customize the **Question title width**, you will need to access the settings of individual pages or panels.

## Title Alignment Overriding Rules

**Question title alignment** can be overridden by settings at different levels:

* Survey level      
Default alignment ("Top" by default) applies to all questions.  

* Panel or page level       
Overrides the survey-level setting.

* Question level        
If set, overrides the panel, page, and survey-level settings.

This hierarchy ensures flexibility to control the alignment and width settings at various levels within your survey.
