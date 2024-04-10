---
title: Image and Video Choice Questions
description: Make your survey or form more engaging compared to forms with traditional text-based questions. Add questions containing visual content, such as images or videos. Use the image picker to present respondents with a set of media files to choose from.
---

# Image and Video Choice Questions

## About questions with visual content

An image or video choice question is a type of question format commonly used in surveys, quizzes, or assessments. In this type of question, respondents are presented with visual content, such as images or videos, and are asked to make a choice or provide feedback based on what they see.

For example, in a market research survey, participants might be shown different product images and asked to select which one they find most appealing. In an educational setting, students might be shown a video clip and asked questions about its content or to choose the most appropriate response based on what they watched.

These types of questions can be particularly effective for engaging respondents and gathering more nuanced feedback compared to traditional text-based questions. They can also be useful for assessing visual perception, preferences, or understanding of visual content.

## Input types that support visual content

SurveyJS Form Builder offers two question types that allow form creators to add images and videos to their surveys and forms&mdash;Image Picker and Image.

### Image Picker

[Image Picker](https://surveyjs.io/form-library/examples/image-picker-question/), or image chooser, is a type of input that allows users to select images or video files from a predefined set of options. The image below illustrates the Image Picker question that offers respondents to select their favorite movie from the Academy Award for Best Picture nominees of 2024.

<img src="../images/eud-image-picker.png" alt='Image picker question' width="796" height="781">

### Image

The [Image](https://surveyjs.io/form-library/examples/add-image-and-video-to-survey/) question is a type of question that includes visual content, such as an image, graphics, or video as a question itself. Instead of being purely text-based, the Image question requires a respondent to interpret or analyze the visual information provided in order to answer the follow-up question(s) accurately. Unlike the Image Picker, the Image question allows presenting only one visual element at once and doesn't imply any choice making. The image below shows an Image question that displays a YouTube video.

<img src="../images/eud-image.png" alt='Add an image or video to a from' width="872" height="761">

## How to Create an Image Choice Question

To add an Image Picker to a form, follow these steps:

1. Drag the **Image Picker** input type from the Toolbox on the left onto the design surface. By default, its **Content mode** property is set to **Image**.

    <img src="../images/eud-content-mode.png" alt='Image picker question: Select content mode' width="332" height="352">

2. Under **Choice Options**, locate the property table **Choices**.
3. In the first column titled **Value**, assign internal IDs for your choice options.
4. In the second column titled **Alt text**, add descriptive alternative texts for media files to make your image picker question accessible for respondents using screen readers.
5. In the third column titled **Image or video file URL**, paste URLs to image files in the following formats: JPEG, GIF, PNG, APNG, SVG, BMP, ICO.

    <img src="../images/eud-image-picker-choices.png" alt='Image picker question: Configure choice options' width="452" height="526">

6. To specify how to fit the images into their containers, under **General**, locate the **Image and thumbnail fit** property and choose from the following values:

   - **None** - Image maintains its original size.
   - **Contain** - Image is resized to fit while maintaining its aspect ratio.
   - **Cover** - Image fills the entire box while maintaining its aspect ratio.
   - **Fill** - Image is stretched to fill the box without maintaining its aspect ratio.

    <img src="../images/eud-image-fit.png" alt='Image picker question: Image fit' width="394" height="448">
   
7. Locate and select the **Allow multiple selection** checkbox if you want to enable respondents to choose more than one option.
8.  To set the number of minimum and maximum answers that a respondent can select, locate the **Validation rules** property under **Validation**.
9.  In the drop-down menu, select **Answer count**.
10. Enter the minimum number of answers in the **Minimum count** field.
11. Enter the maximum number of answers in the **Maximum count** field.

    <img src="../images/eud-min-max.png" alt='Image picker question: Set the minimum and maximum number of answers' width="386" height="519">

12. Under **General**, locate and select the **Show image and video captions** checkbox to display the alternative texts as image captions.
13. Locate **Display area height** and **Display area width** and specify display area dimensions for image containers. The input fields accept positive numbers and CSS values.
  
    > It's not recommended to set **Display area height** and **Display area width** values when the **Survey width mode** property is set to **Responsive**.

    <img src="../images/eud-allow-multiple-selection.png" alt='Image picker question: Allow multiple selection' width="394" height="489">

14. To change the order of the choice options, locate **Choice order** under **Choice Options**.
15. In the drop-down menu, select among available choice order options. 

    <img src="../images/eud-choice-order.png" alt='Image picker question: Choice order' width="386" height="544">

Values entered in "Display area height" and "Display area width" fields override the values of the following properties:

- Minimum display area width        
Maintains the minimum value of the image container width (200px by default) when the "Survey width mode" property is set to Responsive.

- Maximum display area width        
Maintains the maximum value of the image container width (400px by default) when the "Survey width mode" property is set to Responsive.

- Minimum display area height           
Maintains the minimum value of the image container height (133px by default) when the "Survey width mode" property is set to Responsive.

- Maximum display area height           
Maintains the maximum value of the image container height (266px by default) when the "Survey width mode" property is set to Responsive.

Optionally, you can set up a conditional rule that defines whether a particular choice option is visible/selectable. To add a [display logic](https://surveyjs.io/survey-creator/documentation/end-user-guide/form-display-logic) rule, follow these steps:

1. Under **Choice Options**, locate the **Choices** property table.
2. Select an option for which you wish to add a conditional rule.
3. Click the **Pen** icon on the right of the option to expand its settings.
4. Locate the **Make the option visible if** property if you want to set up a rule defining choice option visibility. 
5. Click the magic wand icon to select a trigger question and a condition that would make the option visible only if it is met.
6. Locate the **Make the option selectable if** property if you want to set up a rule defining whether the option is available for selection or not.
7. Click the magic wand icon to select a trigger question and a condition that would make the option selectable only if it is met.

<img src="../images/eud-choice-option-visibility.png" alt='Image picker question: set up display logic rules for choice options' width="395" height="548">

## How to Create a Video Choice Question

To create a question that would allow respondents to select one or several options from presented videos, follow these steps:

1. Drag the **Image Picker** input type from the Toolbox on the left onto the design surface. 
1. Under **General**, locate the **Content mode** property. 
1. Select **Video**.
1. Under **Choice Options**, locate the property table **Choices**.
1. Fill out the table with an ID, alternative text, and file URL for each choice option.

> The Image Picker question does not accept a combination of image and video files within one question. YouTube links are not supported. If the "Content mode" property is set to Video, the question only accepts direct video file URLs. If you want to use YouTube links to add video content to your forms, please consider [using the Image question](#how-to-add-an-image-or-video-to-a-form).

## How to Add an Image or Video to a Form

If you want to provide information more accurately than you can with a purely text-based question, you can add an image or a video to your form, and then add a few follow-up questions underneath.

To add an image or video to a form, follow these steps:

1. Drag the **Image** input type from the Toolbox on the left onto the design surface.
2. Under **General**, locate the **Image or video file URL** property and paste a direct link to your file.
3. To specify how to fit the image or video into its container, locate the **Image and thumbnail fit** property and choose from the following values:
   - **None** - Image maintains its original size.
   - **Contain** - Image is resized to fit while maintaining its aspect ratio.
   - **Cover** - Image fills the entire box while maintaining its aspect ratio.
   - **Fill** - Image is stretched to fill the box without maintaining its aspect ratio.
4. Locate the **Alt text** property and add descriptive alternative text for the media file to make your image or video accessible for respondents using screen readers.
5. Optionally, set the height and width for the media file container using the **Display area height** and **Display area width** fields.

<img src="../images/eud-add-image-question.png" alt='How to add an image or video to a survey' width="1037" height="613">

## Limitations

A survey or form created in the [free form builder demo](https://surveyjs.io/create-free-survey) can accept up to 64KB of files in total. If you wish to have an unlimited total size for all uploaded files, including images and videos, we recommend integrating [Survey Creator](https://surveyjs.io/open-source).
