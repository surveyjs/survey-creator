---
title: How to Create a Form with File Upload
description: In this guide, we’ll show how to add and configure the File Upload question in SurveyJS form builder, including its file sources, upload limits, accepted file types, image settings, and other customization options.
---

# How to Create a Form with File Upload

## About File Upload Questions

Adding a File Upload question to a form allows respondents to submit supporting files directly. This keeps all collected data in one place and reduces the need to request files separately via email or other channels. Respondents can provide documents, images, or other file types as part of their response.

SurveyJS is a [front-end solution](https://surveyjs.io/documentation/backend-integration) that allows you to collect data on the client side and send it to your own database. Because of this architecture, **there are no storage limits from our side**. Unlike many SaaS survey platforms such as Google Forms, when you use SurveyJS, you can allow your respondents to upload as many files as needed.

Our File Upload question comes with a wide range of customization options. These options let you control the file source, the number of files allowed, file types, file size limits, image display settings, and more. This guide explains all available file upload settings and how to configure them in a form.

## How to Add a File Upload Question to Your Form

1. Drag a **File Upload** question to your form from the Toolbox.

2. Assign a **Question name, title and description** to let respondents know what type of files to upload.<br>
   <img src="../images/eud-title-description.png" alt='Add title and description to your File Upload question.' width="1544" height="942">

4. Set the **File source type**:

   - **Local file**&mdash;uploads files from the respondent’s device.

   - **Camera**&mdash;takes a photo or video directly from a device camera.

   - **Local file or Camera**&mdash;allows the respondent to use both options.<br>
   <img src="../images/eud-file-source-file.png" alt='Set a file source type for your File Upload question.' width="1544" height="878">
   
   When this option is enabled, the respondent will see two buttons that let them either activate their device camera or access their local files.<br>
   <img src="../images/eud-local-file-camera.png" alt='File Upload question with two enabled file source types: Camera and Local file.' width="1544" height="770">

5. **Enable multiple file upload** if you want respondents to select and add several files at once.

6. **Set the maximum number of files** a respondent is allowed to upload. By default, this is 1000 items.<br>
   <img src="../images/eud-max-files.png" alt='Enable multiple file upload and set the maximum number of files allowed.' width="1544" height="884">

8. **Preview uploaded images** enables or disables the preview of uploaded image files.<br>
   <img src="../images/eud-disable-image-preview.png" alt='Uploaded images with disabled preview.' width="1544" height="768">

10. **Wait for upload to complete** prevents respondents from proceeding to the next page or submitting the form without waiting for all uploaded files to finish loading. We recommend keeping this setting enabled to prevent unintended data loss.

11. **Confirm file deletion** displays a confirmation popup when a user removes an uploaded file.<br>
   <img src="../images/confirmation-popup.png" alt='Confirmation popup shown when an uploaded file is being deleted.' width="1542" height="766">

12. When **Store file content in JSON result as text** is enabled, all uploaded files, including images, are stored in the survey results JSON schema as Base64 URLs. If you are collecting large images, which could significantly increase the size of the result file, we recommend uploading images directly to your server and only saving image links in the survey results. Refer to this [demo guide](https://surveyjs.io/survey-creator/examples/file-upload/documentation) to learn more.

13. **Accepted file categories** defines which file type groups respondents are allowed to upload. Please refer to the table below to see specific file types included in each category.<br>
   <img src="../images/eud-accepted-file-types.png" alt='Select one or several file type categories that your File Upload question will accept.' width="1544" height="882">

| Category | Allowed File Types |
| ----- | ----- |
| Documents | .pdf, .doc, .docx, .ppt, .pptx, .txt, .xls, .xlsx, .rtf, .csv |
| Images | .jpg, .jpeg, .png, .gif, .bmp, .tiff, .svg |
| Videos | .mp4, .mov, .avi, .mpeg, .mpg, .wmv, .flv, .mkv, .webm |
| Audio | .mp3, .m4a, .wav, .ogg, .flac, .wma, .aac |
| Archives | .zip, .rar, .7z, .tar, .gz |

Even though the built-in categories cover the most popular file extensions, you can enter additional file types separated by commas (e.g., .epc, .ai) in the **Additional file extensions** field.<br>
   <img src="../images/custom-file-type.png" alt='Add custom file extentions that your File Upload question will accept.' width="1544" height="882">

11. **Maximum file size (in bytes)** allows you to limit the total size of uploaded files. The table below shows common file size units converted into bytes. 

| File Size | Bytes |
| ----- | ----- |
| 1 KB | 1,024 B |
| 1 MB | 1,048,576 B |
| 1 GB | 1,073,741,824 B |

When selected files exceed the allowed value, the respondent will be informed with a validation error message.<br>
   <img src="../images/eud-file-exceeds-allowed-size.png" alt='The default validation error shown when the size of the selected files exceed the maximum allowed file size.' width="1544" height="770">

12. **Image height** and **Image width** specify the display height and width of uploaded images in the preview and the actual height of images taken with the camera.

- If the **Enable multiple file upload** is disabled, the display height is limited by the preview area.

- If the **Enable multiple file upload** is enabled, the display height is limited by the thumbnail area.

13. You can optionally adjust the placeholder text for the File Upload question depending on the selected file source type.

