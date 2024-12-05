---
title: How to Reposition Form Elements
description: This guide explains how to reposition form elements in Survey Creator. Learn how to quickly reorder form pages and move a question or panel to a different form page. | SurveyJS End-User Documentation
---

# How to Reposition Form Elements

## Introduction

When designing multi-page forms, you might find it necessary to adjust the placement of certain elements for better flow and consistency. For example, you may need to rearrange pages, move a question to a different page where it fits more naturally, or relocate a question that you duplicated to avoid configuring it from scratch. While simple click-and-drag can work, it might become tedious, especially for complex forms. Survey Creator simplifies this process with dedicated properties, which are covered in this guide.

## How to Reorder Form Pages

Reordering pages can help improve the logical flow of your form. For instance, if a section meant for demographics appears after more specific questions, you might want to move it to the start of the survey. To reorder pages, follow these steps:

1. In the top-right corner of the Property Grid, select **Survey** to access survey-level settings.  
2. Locate and expand the **Pages** category.  
3. Click and drag a page to move it up or down the list of pages.

Additionally, you can add a new page using the **Plus** icon and position it anywhere within the form using click-and-drag.

<img src="../images/eud-reorder-pages.png" alt='Survey Creator: How to reorder form pages' width="444" height="730">

## How to Move a Question to a Different Page

Moving a question to another page is helpful when you identify that its placement would be more consistent elsewhere. It's also useful when you duplicate a question (duplicates are created next to the original) and need to position the duplicate on a different page. To reposition a question to a different page, follow these steps:

1. Select the question you want to modify on the design surface or in the survey tree.  
2. Under the **Layout** category, locate the **Move the question to page** setting.  
3. Select the target page from the drop-down list.

<img src="../images/eud-move-question.png" alt='Survey Creator: How to move a question to a different page' width="1446" height="810">

## How to Move a Panel to a Different Page

A panel (or section) in Survey Creator is a form element that groups multiple questions together, allowing you to modify their settings collectively. Similar to individual questions, you can change the page that a panel is located on by specifying a target page in the Property Grid. The following steps explain how to duplicate a panel and reposition the copy to a different page:

1. Select the panel you want to copy on the design surface or in the survey tree.  
2. Click **Duplicate** at the bottom of the panel. A copy will be created, and the focus will shift to the duplicate.
3. Under the **General** category, locate the **Panel name** setting and assign a unique ID to the panel for further configuration.<br><br>
    <img src="../images/eud-duplicate-panel.png" alt='Survey Creator: How to duplicate a panel' width="1438" height="686">
4. Under the **Panel Layout** category, locate the **Move the panel to page** setting.  
5. Select the target page from the drop-down list.<br><br>
    <img src="../images/eud-move-panel.png" alt='Survey Creator: How to move a panel to a different page' width="1450" height="810">

> For both questions and panels, a repositioned element is placed at the end of the target page and can then be dragged to its desired location within the page.
