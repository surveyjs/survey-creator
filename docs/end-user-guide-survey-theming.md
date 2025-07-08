---
title: Survey Theming - SurveyJS
description: Follow the steps below to learn how to customize the survey design, including its logo, fonts, colors, add a background image and more using our user-friendly CSS theme editor | SurveyJS End-User Documentation
---

# How to Style Your Survey

## About Survey Theming

A well-designed survey not only looks professional but also makes it easier for respondents to interact with. Survey Creator offers a powerful Theme Editor&mdash;a fully integrated styling tool that simplifies survey customization and allows you to align its appearance with your specific brand style.

A theme in SurveyJS is a set of CSS variables that control the look and feel of all survey elements, including their colors, fonts, layout, and spacing. The Theme Editor provides a user-friendly interface where you can modify these variables without needing to write code. You can start with predefined themes and tailor them to meet your design requirements. Once customization is done, the Theme Editor generates a JSON file with all the theme settings. Your developers can save this file as a reusable custom theme that you can apply with one click to all or some of your surveys for a consistent and tailored appearance.

To customize the survey design, open the **Themes** tab in the Survey Creator.

<img src="../images/eud-themes-tab 1348 762.png" alt="The Theme Editor tab" width="1348" height="726">

## Choose and Apply a Theme

The Theme Editor comes with a collection of predefined themes that provide a great starting point for customizing your survey. Each theme supports dark mode and a more compact view without panels, which gives you a total of 40 different theme variations right out of the box.

To apply a new theme, locate the **Theme** drop-down menu under the **General** category and select a theme from this menu:

<img src="../images/eud-theme 402 704.png" alt="Select a survey theme" width="402" height="704">

## Enable Dark Mode

Dark mode provides a smooth, modern appearance that's easier on the eyes, especially in low-light environments. To enable this mode, switch the Light/Dark toggle to **Dark**:

<img src="../images/eud-theme-mode 1357 781.png" alt="Change the theme mode" width="1357" height="781">

## Display Questions Without Question Boxes

In Survey Creator, every survey element includes an input field and a question box&mdash;an area that frames the question content and separates it from the survey background. 

<img src="../images/eud-with-question-boxes 1300 771.png" alt="Survey elements with question boxes" width="1300" height="771">

The Theme Editor allows you to remove the question boxes for the questions that are not nested within a panel, resulting in a lighter and more compact overall appearance.

To display questions without their individual question boxes, locate the **Question appearance** setting under the **General** category and toggle it to **Without Panels**:

<img src="../images/eud-without-panels 1300 778.png" alt="Survey elements without question boxes" width="1300" height="778">

> The form builder offers an element called a panel (or a section) that allows you to group several questions together and modify their settings all at once. When questions are grouped within a panel, they don't have individual question boxes. The **Question appearance** setting doesn't apply to such nested questions.<br><br>
<img src="../images/eud-question-in-panel 1570 789.png" alt="Survey elements grouped within a panel" width="1570" height="789">

## Style the Survey Header

The Theme Editor provides two levels of customization for your survey header. By default, you have access to basic settings that allow you to make minor adjustments to the logo, form title, and description. For more detailed styling options, you can enable the advanced mode that allows you to fine-tune the design of the survey header with greater precision.

### Add a Logo

To add and configure your company logo in the survey header, follow these steps:

1. Switch to the **Designer** tab.
2. Under the **Logo in the Survey Header** category, locate the **Logo** property.  
3. Paste a link to the image in the input field or click the **Folder** icon next to the property to upload a file.  
4. Optionally, resize the logo by entering the desired dimensions in CSS units (px, %, in, pt, etc.) in the **Logo width** and **Logo height** input fields.  
5. Select the **Logo fit** option:
   * **None** - Image maintains its original size.
   * **Contain** - Image is resized to fit while maintaining its aspect ratio.
   * **Cover** - Image fills the entire box while maintaining its aspect ratio.
   * **Fill** - Image is stretched to fill the box without maintaining its aspect ratio.    
6. Switch to the **Themes** tab.  
7. Under **Header**, locate the **Logo alignment** property and select between **Left** and **Right** (default) to set the logo position in the header.<br><br>
   <img src="../images/eud-basic-logo-alignment 402 418.png" alt="Basic survey header settings: Logo alignment" width="402" height="418">

If you wish to center the logo or align it vertically, you can enable additional logo alignment options by switching to the advanced header settings:

1. Under **Header**, locate the **View** setting and toggle it to **Advanced**.<br><br>
   <img src="../images/eud-header-advanced 399 412.png" alt="Enable advanced settings for the survey header" width="399" height="412">
2. Locate the **Logo alignment** section and select the desired alignment options.<br><br>
   <img src="../images/eud-advanced-logo-alignment 399 460.png" alt="Advanced survey header settings: Logo alignment" width="399" height="460">

> Regardless of the position you set, the logo is always displayed on the right in the Designer tab.

### Survey Title and Description

If your survey includes a title and description, you can customize their fonts and appearance using a dedicated set of properties. Since the settings for the description and title fonts are identical and located next to each other, this guide will focus on configuring the survey title font settings.

To change the font of your survey title, follow these steps:

1. Under **Header**, locate the **Survey title font** section.  
2. Select a **Font family** from the drop-down menu.  
3. Select the **Font weight**: **Regular**, **Semi-bold**, **Bold**, or **Heavy**.  
4. Set the **Font size** in pixels.<br><br>
   <img src="../images/eud-title-font-basic.png" alt="Basic survey header settings: Survey title font" width="401" height="751">
5. To access advanced survey title settings, toggle the **View** property to **Advanced**.  
6. Locate the **Survey title font** property.  
7. Use the **Color** property to select a color or enter an RGB, HEX, or HSL color code.<br><br>
   <img src="../images/eud-title-font-advanced.png" alt="Advanced survey header settings: Survey title font" width="401" height="709">
8. Adjust the **Opacity** of the survey title font in percent using the property located next to **Color**.  
9. Locate the **Text width** property to set the width of the survey header area that contains the survey title and description.<br><br>
   <img src="../images/eud-header-area-text-width.png" alt="Advanced survey header settings: Header area text width" width="402" height="580">
10. Scroll down the settings in the **Header** category and locate the **Survey title alignment** property.  
11. Align the survey title both vertically and horizontally using the available options to achieve the desired layout.<br><br>
   <img src="../images/eud-survey-title-alignment.png" alt="Advanced survey header settings: Survey title alignment" width="400" height="697">

### Customize the Header Area

To customize header area properties, follow these steps:

1. Toggle the **View** property to **Advanced** to reveal additional header settings.  
2. Set the header height for desktop devices using the **Height** property and for mobile devices using the **Height on smartphones** property.<br><br>
   <img src="../images/eud-header-height.png" alt="Advanced survey header settings: Survey header height" width="1478" height="778">
   > You can preview how your survey looks on different devices in the **Preview** tab by switching between available devices and screen orientations.
3. Locate the background settings within the **Header** category.<br><br>
   <img src="../images/eud-header-area-background.png" alt="Advanced survey header settings: Survey header background settings" width="1476" height="776">
4. To change the color of the survey header, choose from the following **Background color** property options:
   * **None** - Removes the individual header color, making it the same as the form background.
   * **Accent** - Applies the accent color from the selected survey theme.
   * **Custom** - Allows you to set a custom background color using the color picker (in RGB, HSL, or HEX format).

Alternatively, you can style the header background by uploading an image: 

1. Find the **Background image** properties.
2. Paste a link to an image in the input field or click the **Folder** icon next to the property to upload a file.  
3. To set the image display style, choose from the following display options:
   * **Cover** - Image fills the entire header area while maintaining its aspect ratio.  
   * **Fill** - Image is stretched to fill the header box without maintaining its aspect ratio.  
   * **Contain** - Image is resized to fit within the header box while maintaining its aspect ratio.  
   * **Tile** - Image is repeated to fill the entire header area, maintaining its aspect ratio.
4. Set the transparency of the background image using the **Opacity** property.  
5. If you want the survey content to overlap with the header, check the **Overlap** checkbox in the header settings.

### Adjust the Header Content Area

Follow the steps below to modify the width of the survey header area that contains content (survey title, description, and logo):

1. Toggle the **View** property to **Advanced** to access additional header settings.  
2. Locate the **Content area width** property and set the area width:
   * Keep the default option **Same as container** if you want the header content area to automatically adjust its width to match the space where your survey is displayed.  
   * Select **Same as survey** if you prefer the header content to match the width of the survey itself (its content).<br><br>
   <img src="../images/eud-content-area-width.png" alt="Advanced survey header settings: Area width of the header content" width="402" height="489">

## Background Options

The background color of your survey helps set the overall tone and appearance, making your form more visually appealing. To set the survey background color, follow the steps below:

1. Under the **Background** category, locate the **Background color** property.
2. Specify the background color in one of the following ways:
   - Select a color from a drop-down menu or using a color picker.
   - Enter an RGB, HEX, or HSL color code.

Alternatively, you can style the survey background by uploading an image:

1. Under **Background**, find the **Background image** section.
2. Paste a link to an image in the input field or click the **Folder** icon to upload an image.
3. To set the image display style, choose from the following display options:
   * **Auto** - Image maintains its original size and aspect ratio. Tiling applies if the image is smaller than the survey container.
   * **Contain** - Image is resized to fit the container while maintaining its aspect ratio. Tiling applies if the image is smaller than the survey container
   * **Cover** - Image fills the entire container while maintaining its aspect ratio.
4. You can also lock the image in place by setting the **Image position** toggle to **Fixed**, so the background remains stationary as you scroll the survey. To make the background move along with the content, switch to **Scroll**.
5. Adjust the image's transparency using the **Opacity** property.<br><br>
   <img src="../images/eud-background-image.png" alt="Survey background settings" width="409" height="646">   

## See Also

[Customize the Survey Look](/survey-creator/documentation/end-user-guide/how-to-customize-survey-look (linkStyle))