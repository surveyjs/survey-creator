---
title: Customize Your Survey Look - SurveyJS
description: Learn how to customize the appearance of your survey by adjusting the accent color, transparency levels of panels and question boxes, survey font, scale, and corner radius of survey elements. | SurveyJS End-User Documentation
---

# Customize the Survey Look

## Accent Color

The accent color is used to highlight key survey elements, such as the survey title, selected choice options, and focused input fields.

<img src="../images/eud-accent-color.png" alt="Survey accent color" width="1544" height="736">

Each predefined theme comes with a unique accent color, but you can easily change it by following these steps:

1. Switch to the **Themes** tab.
2. Under the **Appearance** category, locate the **Accent color** property.  
3. Select a new accent color from the drop-down menu or use the **Color Picker** to set the color in RGB, HEX, or HSL. If you know the color code for the color you'd like to use, you can enter it directly into the **Accent color** input field.

<img src="../images/eud-accent-color-editor.png" alt="Set the survey accent color" width="1544" height="736">

## Survey Element Transparency

You can adjust the transparency of panels (sections that group questions) and question boxes (which frame individual questions) relative to the survey background. This setting can help create a cleaner look by blending these elements with the background. To set the transparency, do the following:

1. Locate the **Panel and question box opacity** property.  
2. Adjust the opacity between 0% and 100% by using the spinner to achieve the desired transparency level.

<img src="../images/eud-appearance-opacity.png" alt="Adjust the opacity of panels and question boxes" width="1544" height="736">

Similarly, you can customize the transparency of input elements (text boxes, Boolean toggles, the background of checkboxes and radio buttons) using the **Input element opacity** setting.

<img src="../images/eud-input-element-opacity.png" alt="Adjust the opacity of input elements" width="1544" height="736">

## Survey Font

To change the font used in your survey, follow these steps:

1. Locate the **Survey font family** setting.  
2. Expand the drop-down menu and select a font from the available options. If your desired font isn't listed, you can request your development team to add it to your Survey Creator by following the instructions from the [Add Custom Fonts](https://surveyjs.io/survey-creator/examples/add-custom-fonts/) demo.

> A specified **Survey font family** also applies to the survey title. If the title should have a different font, change the **Survey title font** property in the header settings.

To adjust the font size, use the **Survey font size** property. You can enter the desired size in percentage or use the spinner for easy adjustments.

<img src="../images/eud-survey-font.png" alt="Set the survey font" width="1544" height="738">

## Survey Scale Factor

The **Survey scale factor** setting allows you to increase or decrease the size of survey elements. Adjust the scale factor using the spinner to achieve the desired dimensions.

<img src="../images/eud-scale-factor.png" alt="Survey scale factor" width="1544" height="780">

## Corner Radius

The **Corner radius** property controls the roundness of all rectangular elements (panels, question boxes, input fields).

<img src="../images/eud-corner-radius.png" alt="Set a common corner radius for rectangular survey elements" width="1544" height="616">

To set corner radii for specific elements, enable the **Advanced mode** toggle in the **Appearance** category and use individual corner radius settings.

## See Also

[Survey Theming](/survey-creator/documentation/end-user-guide/survey-theming (linkStyle))
