---
title: Prevent Duplicate Form Submissions from the Same User - SurveyJS
description: Follow the steps below to prevent multiple form submissions from the same user by assigning a unique cookie value to your SurveyJS form | SurveyJS End-User Documentation
---

# Prevent Duplicate Form Submissions from the Same User

## About Duplicate Form Submission

Duplicate form submission refers to the situation where the same form or survey is submitted multiple times by the same user. This can happen due to the user's fault (for instance, when the user mistakenly clicks the submit button multiple times) or due to technical issues or system errors. Duplicate form submissions can distort data analysis and inflate response metrics. Therefore, implementing measures to prevent multiple form submissions is essential for ensuring the accuracy and reliability of the data collected through these forms.

## How Cookies Help Prevent Multiple Submissions

Cookies store information on a user's browser after the user have submitted a form or survey. This information indicates that the form has already been submitted from that particular browser. Subsequent attempts to submit the form can then be intercepted and blocked based on the presence of this cookie. This mechanism ensures that each user can only submit the form once from their specific browser, effectively preventing duplicate submissions without inconveniencing the user with additional verification steps. 

## How to Assign a Unique Cookie Value to a Form

To prevent repetitive form submission from the same respondent, follow these steps:

1. In the top right corner of the Property Grid, select **Survey** to switch to the survey-level settings.
1. Under **General**, locate an input field called **Limit to one response**. 
1. Enter a unique cookie value for your form.

<img src="../images/eud-limit-to-one-response.png" alt='Prevent duplicate form submissions in SurveyJS' width="445" height="702">

## Troubleshooting 

To verify whether cookie-based duplicate submission prevention is functioning correctly and the assigned cookie is set in a user's browser, use the following instructions:

1. Open a form that has an assigned cookie value.
1. Submit your responses by clicking the **Complete** button at the end of the form.
1. Open the developer tools by pressing **F12** or right-clicking anywhere on the form and selecting **Inspect**.
1. In the toolbar of the developer tools, select **Application**.
1. In the **Storage** section on the left panel, locate the **Cookies** subsection.
1. Expand the **Cookies** subsection by clicking the arrow icon.
1. Find and select the website where your form has been published.
1. In the list of cookies on the right panel, locate the unique cookie value that you've assigned.

<img src="../images/eud-cookie-troubleshooting.png" alt='Troubleshooting cookie-based duplicate submission prevention in SurveyJS' width="790" height="469">

## Limitations

Using cookies to prevent duplicate form submissions has its limitations. Since cookies are stored on the user's device, users can easily delete them from their browser settings or disable cookies altogether, which would allow them to bypass the prevention mechanism. Additionally, if a user switches to a different device or browser, the cookie tracking method won't work either, potentially allowing multiple submissions from the same user.

The most reliable way to stop users from submitting the same form multiple times is to implement a server-side validation and tracking mechanism that authenticates a user before they proceed to the form. This approach ensures that the validation and tracking occur on the server side, making it more difficult for users to bypass the prevention mechanism compared to client-side methods like cookies.



