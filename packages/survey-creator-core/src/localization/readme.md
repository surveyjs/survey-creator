# Survey Creator / Form Builder Localization

This topic describes how to add a new dictionary or update an existing dictionary to localize Survey Creator. Refer to the following help topic for information on how to configure the localization in your application: [Localization & Globalization](https://surveyjs.io/survey-creator/documentation/localization).

## Add a New Dictionary

Follow the steps below to add a new localization dictionary:

1. Fork the [`survey-creator`](https://github.com/surveyjs/survey-creator) repository.
1. Create a new file in the [`src/localization`](../localization/) directory and name it `[language name].ts`, for example, `french.ts`.
1. Copy the content from the [`english.ts`](../localization/english.ts) file and uncomment the first and last lines.
1. Translate required strings.
1. Open the [`src/entries/i18n.ts`](../entries/i18n.ts) file and import your file in it for Webpack. For example, the following code imports the `french.ts` file:
  
    ```js
    import "../localization/french";
    ```

1. [Rebuild the library](../../README.md#build-the-survey-creator-model-from-sources).
1. *(Optional)* Create a [pull request](https://github.com/surveyjs/survey-creator/pulls) to share your dictionary with the community. After the PR is merged, your localization will be included in the next official release.

## Update an Existing Dictionary

Follow the steps below to update an existing localization dictionary:

1. Fork the [`survey-creator`](https://github.com/surveyjs/survey-creator) repository.
1. Open the [`src/localization`](../localization/) directory and find the required dictionary.
1. Change required translations.
1. [Rebuild the library](../../README.md#build-the-survey-creator-model-from-sources).
1. *(Optional)* Create a [pull request](https://github.com/surveyjs/survey-creator/pulls) to share your translations with the community. After the PR is merged, your localization will be included in the next official release.
