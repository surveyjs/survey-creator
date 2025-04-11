---
title: Customize Your Survey Look - SurveyJS
description: Learn how to customize the appearance of your survey by adjusting the accent color, transparency levels of panels and question boxes, survey font, scale, and corner radius of survey elements. | SurveyJS End-User Documentation
---

# Customize the Survey Look

## Accent Color

The accent color is used to highlight key survey elements, such as the survey title, selected choice options, and focused input fields.

<img src="../images/eud-accent-color 1411 737.png" alt="Survey accent color" width="1411" height="737">

Each predefined theme comes with a unique accent color, but you can easily change it by following these steps:

1. Under the **Appearance** category, locate the **Accent color** property.  
2. Select a new accent color from the drop-down menu or use the **Color Picker** to set the color in RGB, HEX, or HSL. If you know the color code for the color you'd like to use, you can enter it directly into the **Accent color** input field.

<img src="../images/eud-accent-color-dropdown 400 637.png" alt="Set the survey accent color" width="400" height="637">

## Survey Element Transparency

You can adjust the transparency of panels (sections that group questions) and question boxes (which frame individual questions) relative to the survey background. This setting can help create a cleaner look by blending these elements with the background. To set the transparency, do the following:

1. Locate the **Panel and question box opacity** property.  
2. Adjust the opacity between 0% and 100% by using the spinner to achieve the desired transparency level.

<img src="../images/eud-appearance-opacity-75 1346 770.png" alt="Adjust the opacity of panels and question boxes" width="1346" height="770">

Similarly, you can customize the transparency of input elements (text boxes, Boolean toggles, the background of checkboxes and radio buttons) using the **Input element opacity** setting.

<img src="../images/eud-input-element-opacity 1329 769.png" alt="Adjust the opacity of question input elements" width="1329" height="769">

## Survey Font

To change the font used in your survey, follow these steps:

1. Locate the **Survey font family** setting.  
2. Expand the drop-down menu and select a font from the available options. If your desired font isn't listed, you can request your development team to add it to your Survey Creator by following the instructions from the [Add Custom Fonts](https://surveyjs.io/survey-creator/examples/add-custom-fonts/) demo.

> A specified **Survey font family** also applies to the survey title. If the title should have a different font, change the **Survey title font** property in the header settings.

To adjust the font size, use the **Survey font size** property. You can enter the desired size in percentage or use the spinner for easy adjustments.

<img src="../images/eud-survey-font 1345 759.png" alt="Set the survey font" width="1345" height="759">

## Survey Scale Factor

The **Survey scale factor** setting allows you to increase or decrease the size of survey elements. Adjust the scale factor using the spinner to achieve the desired dimensions.

<img src="../images/eud-scale-factor.png" alt="Survey scale factor" width="397" height="551">

## Corner Radius

The **Corner radius** property controls the roundness of all rectangular elements (panels, question boxes, input fields).

<img src="../images/eud-corner-radius 1462 770.png" alt="Set a common corner radius for rectangular survey elements" width="1462" height="770">

To set corner radii for specific elements, enable the **Advanced mode** toggle in the **Appearance** category and use individual corner radius settings.

## See Also

[Survey Theming](/survey-creator/documentation/end-user-guide/survey-theming (linkStyle))
