---
title: Randomization within a Form
description: Follow these steps to randomize the order of all questions within a form, questions on a specific page or panel, the choice order in a single- or multi-select question, or the row order in a Single-Select Matrix. | SurveyJS End-User Documentation
---

# Randomization within a Form

## About Randomization

Randomization is a feature that allows you to display form elements, such as questions, matrix rows, and choice options, in a different order each time a user opens the form. This can be especially useful for forms or surveys aiming to reduce response biases, as it prevents respondents from anticipating the order of items. 

With SurveyJS, you can randomize question order at various levels, from all questions within a form to those on a specific page or panel. This setting can also be applied to choice options in a single- or multi-select question (for instance, Dropdown, Checkboxes, Radio Button Group) or to rows in a Single-Select Matrix.

## How to Randomize Questions in a Form

By default, questions within a form appear in their original order. To randomize the order of all questions in a form, follow the steps below:

1. Open the survey-level settings in the form structure tree.  
2. Under the **Question settings** category, find the **Question order** setting.  
3. Set this setting to **Random**.  
4. To see the randomized order in action, switch to the **Preview** tab.

<img src="../images/eud-randon-survey 397 421.png" alt="How to randomize questions in a form" width="397" height="421">

## How to Randomize Questions within a Page

To display questions on a specific page in random order, do the following:

1. Select the page you wish to modify in the form tree or click it directly on the design surface.  
2. Under the **Question settings** category, locate the **Question order on the page** setting.  
3. Set this setting to **Random**.  
4. View the changes by switching to the **Preview** tab.

If you choose the **Inherit** option, questions on the page will follow the question order set on the survey level.

<img src="../images/eud-random-page 410 515.png" alt="How to randomize questions within a page" width="410" height="421">

## How to Randomize Questions within a Panel

SurveyJS allows you to group multiple questions into a panel for easier management. You can randomize the order of questions within a specific panel as follows:

1. Select the panel you wish to modify in the form tree or click it directly on the design surface.  
2. Under the **Question settings** category, find the **Question order within the panel** setting.  
3. Set this setting to **Random**.  
4. Go to the **Preview** tab to view the effect.

<img src="../images/eud-random-panel 400 517.png" alt="How to randomize questions within a panel" width="400" height="517">

## How to Randomize Choice Options

The following question types support choice randomization:

* Radio Button Group  
* Checkboxes
* Dropdown
* Multi-Select Dropdown (Tag Box)
* Image Picker
* Ranking

Follow the steps below to randomize choices for those question types:

1. Select the question you want to modify in the form tree or click it directly on the design surface.  
2. Under the **Choice Options** category, locate the **Choice order** setting.  
3. Select **Random** from the drop-down menu.  
4. Switch to the **Preview** tab to view the randomized choice order.

<img src="../images/eud-random-choice-options 398 725.png" alt="How to randomize choice options in a question" width="398" height="725">

Other **Choice order** options include:

* **Ascending** - Displays choices in ascending order (numerically or alphabetically).  
* **Descending** - Displays choices in descending order (numerically or alphabetically).  
* **None** - Maintains the original order of choices.

## How to Randomize Rows in a Single-Select Matrix

Matrix rows appear in their default position unless they are randomized. To shuffle rows each time the form is loaded, follow these steps:

1. Select the Single-Select Matrix question in the form tree or click it directly on the design surface.  
2. Under the **Rows** category, find the **Row order** setting.  
3. Set this setting to **Random**.  
4. Preview the effect by switching to the **Preview** tab.

<img src="../images/eud-random-matrix-rows 1394 760.png" alt="How to randomize rows in a Single-Select Matrix" width="1394" height="760">

> Row randomization is unavailable for Multi-Select and Dynamic Matrices.