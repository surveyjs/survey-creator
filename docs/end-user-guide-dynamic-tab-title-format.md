---
title: How to Set and Format Dynamic Tab Titles in Dynamic Panel
description: This step-by-step end-user guide explains how to format dynamic tab titles in a Dynamic Panel when it displays inner panels as tabs.
---

# How to Set and Format Dynamic Tab Titles in Dynamic Panel

## About Dynamic Panel

Dynamic Panel is a question type that allows you to create a set of grouped questions or form fields that a respondent can dynamically duplicate. When respondents are filling out a form, they see the initial group of fields within Dynamic Panel. If they need to add another set of responses, they click the "Add new" button which generates an additional group of fields identical to the first. They can add as many extra sets or fresh copies of these fields as needed to provide all necessary information. This question type is particularly useful in scenarios where the number of responses or entries cannot be predetermined.

Imagine a survey collecting data on projects that employees have worked on. Instead of having a fixed number of project fields, Dynamic Panel allows each employee to add as many project entries as necessary. Another example is a course registration form that collects data on courses a student wants to enroll on.

<img src="../images/eud-preview-dtp 1020 655.png" alt="Dynamic panel with tab view" width="1020" height="655">

## Tab View

Dynamic Panel's **Panel display mode** property located under **General** allows you to choose how panels with nested fields are placed in relation to each other and how they are navigated by a respondent.

<img src="../images/eud-panel-display-mode 442 713.png" alt="Dynamic panel display mode" width="332" height="535">

When the **Panel display mode** is set to **Tabs**, each panel is represented by a tab. Panels are navigated using tab titles. This mode allows respondents to easily switch to any panel by clicking on the corresponding tab title.

## Panel Count

Dynamic Panel includes the following settings that allow you to manage the number of panels:

- Initial panel count       
Specifies the number of panels that are initially displayed when the form is first loaded.

- Minimum panel count           
Specifies the minimum number of panels that must be filled out. This setting ensures that at least a certain number of entries are collected before the form can be submitted.

- Maximum panel count           
Specifies the maximum number of panels that can be added by the respondent. This setting restricts the total number of panels, preventing respondents from adding more than the specified limit.

<img src="../images/eud-panel-count 443 327.png" alt="Panel count properties" width="332" height="245">

## Tab Title

As mentioned earlier, dynamic panels are navigated using tab titles. The **Tab title pattern** property allows you to create a pattern for dynamically generated tab titles.

### Dynamic Panel Numbering

You can change the default panel title format by assigning each new panel a number. To do this, follow the steps below:

1. Add a **Dynamic Panel** to the design surface.
1. Under **General**, locate the **Panel display mode** property and set it to **Tabs**.
1. Locate the **Tab title pattern** field.
1. Enter `{panelIndex}`.

You can also add any text before or after the panel index. For example, if each panel represents a course, setting the **Tab title pattern** property to `Course #{panelIndex}` will result in panel titles look as follows:

<img src="../images/eud-numbering 895 562.png" alt="Panel numbering format" width="895" height="562">

### Dynamic Panel Title Pattern

It's easier for respondents to navigate through tabs if each tab is titled using a value they entered in one of the panel fields. For example, if they are listing places of employment, each tab title can be generated using the data entered into the "Employer name" field. Another example is using a "Course name" value to generate a tab title for each selected course.

To generate a dynamic panel title that uses a user's response to one of the panel fields, follow the steps below:

1. Add a **Dynamic Panel** to the design surface.
2. Populate it with questions.
3. Decide a response to which question you want to use as a dynamic panel title.
4. Assign this question a **Question name** and a **Question title**.
5. Make the question **Required** to make sure it receives an answer.
    <img src="../images/eud-dynamic-panel-setup 1583 795.png" alt="Dynamic panel tab titles" width="1583" height="795">
6. Select the Dynamic Panel.
7. Under **General**, locate the **Tab title pattern** property.
8. Enter the following sample value: `{panel.course-title}`, where `course-title` is the **Question name** value of the source question for the dynamic title.
9. Optionally, align the tab title to the left, center, or right using the **Tab alignment** property.
    <img src="../images/eud-tab-title-pattern 1580 784.png" alt="How to align dynamic panel tab titles" width="1580" height="784">
10. Set a static value for the **Tab title placeholder** property. This value will be used if the dynamic tab title pattern doesn't produce a meaningful result or if the source question has not yet been answered.
    <img src="../images/eud-tab-title-placeholder 893 562.png" alt="Fallback tab title configuration" width="893" height="562">