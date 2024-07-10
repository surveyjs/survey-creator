/**
 * Survey Creator configuration. Pass it as an argument to the `SurveyCreator`/`SurveyCreatorModel` constructor:
 *
 * ```js
 * const creatorOptions = { ... };
 * const creator = new SurveyCreator.SurveyCreator(creatorOptions);
 * 
 * // In modular applications:
 * import { SurveyCreatorModel } from "survey-creator-core";
 * 
 * const creatorOptions = { ... };
 * const creator = new SurveyCreatorModel(creatorOptions);
 * ```
 */
export interface ICreatorOptions {
  [index: string]: any;
  /**
   * Specifies whether to display the Designer tab.
   *
   * Default value: `true`
   */
  showDesignerTab?: boolean;
  /**
   * Specifies whether to display the Preview tab.
   *
   * Default value: `true`
   */
  showPreviewTab?: boolean;
  /**
   * Specifies whether to display the JSON Editor tab.
   *
   * Default value: `true`
   */
  showJSONEditorTab?: boolean;
  /**
   * Specifies whether to display the Logic tab.
   *
   * Default value: `false`
   */
  showLogicTab?: boolean;
  /**
   * Specifies whether to display the Translation tab.
   *
   * Default value: `false`
   */
  showTranslationTab?: boolean;
  /**
   * Specifies whether to display the Themes tab.
   *
   * Default value: `false`
   *
   * [Theme Editor](https://surveyjs.io/survey-creator/documentation/theme-editor (linkStyle))
   */
  showThemeTab?: boolean;
  /**
   * Specifies whether to call the [`saveSurveyFunc`](https://surveyjs.io/Documentation/Survey-Creator?id=surveycreator#saveSurveyFunc) and [`saveThemeFunc`](https://surveyjs.io/survey-creator/documentation/api-reference/survey-creator#saveThemeFunc) functions each time survey or theme settings are changed.
   *
   * Default value: `false`
   */
  isAutoSave?: boolean;
  /**
   * Specifies whether to enable support for right-to-left languages.
   *
   * Default value: `false`
   */
  isRTL?: boolean;
  /**
   * Specifies whether users can see and edit the survey title and related survey properties.
   *
   * Default value: `true`
   */
  showSurveyTitle?: boolean;
  /**
   * Specifies whether users can edit expressions in the Logic tab as plain text.
   *
   * If you set this property to `false`, users can only use UI elements to edit logical expressions.
   *
   * Default value: `true`
   *
   * @see showLogicTab
   */
  allowEditExpressionsInTextEditor?: boolean;
  /**
   * Specifies whether to display question titles instead of names when users edit logical expressions.
   *
   * Default value: `false`
   */
  showTitlesInExpressions?: boolean;
  /**
   * Specifies whether to show an error message if a survey is not saved in the database.
   *
   * Default value: `true`
   */
  showErrorOnFailedSave?: boolean;
  /**
   * Specifies whether the Survey Creator generates the survey definition as a valid JSON object or JavaScript object.
   *
   * Default value: `true`
   *
   * Refer to the following MDN topic for information on differences between JSON and JavaScript objects: [JavaScript and JSON Differences](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON#javascript_and_json_differences)
   */
  generateValidJSON?: boolean;
  /**
   * Enables the read-only mode. If you set this property to `true`, users cannot change the initial survey configuration.
   *
   * Default value: `false`
   */
  readOnly?: boolean;
  /**
   * Specifies whether to show the page selector at the bottom of the Preview tab.
   *
   * Default value: `true`
   */
  showPagesInPreviewTab?: boolean;
  /**
   * A [UI theme](https://surveyjs.io/Documentation/Library?id=get-started-react#configure-styles) used to display the survey in the Preview tab.
   *
   * Accepted values: `"modern"`, `"default"`, `"defaultV2"`
   *
   * Default value: `"defaultV2"`
   */
  themeForPreview?: string;
  /**
   * Specifies whether the Preview tab displays the Device button that allows users to preview the survey on different device types.
   *
   * Default value: `true`
   */
  showSimulatorInPreviewTab?: boolean;
  /**
   * Specifies whether the Preview tab displays the language selector.
   *
   * Accepted values:
   *
   * - `"auto"` (default)     
   * Display the language selector only if the survey is translated into more than one language.
   *
   * - `true`     
   * Always display the language selector regardless of how many languages are used in the survey.
   *
   * - `false`      
   * Never display the language selector.
   *
   * - `"all"`        
   * Always display the language selector with [all supported languages](https://github.com/surveyjs/survey-creator/tree/master/packages/survey-creator-core/src/localization).
   *
   * **See also**: [Localization & Globalization](https://surveyjs.io/Documentation/Survey-Creator?id=localization)
   */
  showDefaultLanguageInPreviewTab?: boolean | string;
  /**
   * Specifies whether the Preview tab displays a checkbox that allows users to show or hide invisible survey elements.
   *
   * Default value: `true`
   */
  showInvisibleElementsInPreviewTab?: boolean;
  /**
   * Specifies whether UI elements display survey, page, and question titles instead of their names.
   *
   * Default value: `false`
   */
  showObjectTitles?: boolean;
  /**
   * Limits the number of visible choices. Users can click "Show more" to view hidden choices.
   * 
   * Set this property to -1 if you do not want to hide any choices.
   * 
   * Default value: 10
   */
  maxVisibleChoices?: number;
  /**
   * Specifies whether the design surface displays the survey title and description when the survey does not contain any elements.
   *
   * Default value: `false`
   */
  showHeaderInEmptySurvey?: boolean;
  /**
   * Specifies whether users can add, edit, and delete survey pages.
   *
   * Default value: `true`
   */
  allowModifyPages?: boolean;
  /**
   * Limits the number of columns that users can add to [Matrix](https://surveyjs.io/Documentation/Library?id=questionmatrixmodel), [Matrix Dynamic](https://surveyjs.io/Documentation/Library?id=questionmatrixdynamicmodel), and [Matrix Dropdown](https://surveyjs.io/Documentation/Library?id=questionmatrixdropdownmodel) questions.
   *
   * Default value: 0 (unlimited, taken from `settings.propertyGrid.maximumColumnsCount`)
   */
  maximumColumnsCount?: number;
  /**
   * Limits the minimum number of choices in [Checkbox](https://surveyjs.io/Documentation/Library?id=questioncheckboxmodel), [Dropdown](https://surveyjs.io/Documentation/Library?id=questiondropdownmodel), and [Radiogroup](https://surveyjs.io/Documentation/Library?id=questionradiogroupmodel) questions. Set this property if users should not delete choices below the specified limit.
   *
   * Default value: 0 (unlimited, taken from `settings.propertyGrid.minimumChoicesCount`)
   */
  minimumChoicesCount?: number;
  /**
   * Limits the number of choices that users can add to [Checkbox](https://surveyjs.io/Documentation/Library?id=questioncheckboxmodel), [Dropdown](https://surveyjs.io/Documentation/Library?id=questiondropdownmodel), and [Radiogroup](https://surveyjs.io/Documentation/Library?id=questionradiogroupmodel) questions.
   *
   * Default value: 0 (unlimited, taken from `settings.propertyGrid.maximumChoicesCount`)
   */
  maximumChoicesCount?: number;
  /**
   * Limits the number of rows that users can add to [Matrix](https://surveyjs.io/Documentation/Library?id=questionmatrixmodel) and [Matrix Dropdown](https://surveyjs.io/Documentation/Library?id=questionmatrixdropdownmodel) questions.
   *
   * Default value: 0 (unlimited, taken from `settings.propertyGrid.maximumRowsCount`)
   */
  maximumRowsCount?: number;
  /**
   * Limits the number of rate values that users can add to [Rating](https://surveyjs.io/Documentation/Library?id=questionratingmodel) questions.
   *
   * Default value: 0 (unlimited, taken from `settings.propertyGrid.maximumRateValues`)
   */
  maximumRateValues?: number;
  /**
   * Limits the number of items in a logical expression.
   *
   * Default value: -1 (unlimited)
   */
  maxLogicItemsInCondition?: number;

  /**
   * Limits the number of nested panels within a [Panel](https://surveyjs.io/form-library/documentation/api-reference/panel-model) element.
   * 
   * Default value: -1 (unlimited)
   */
  maxNestedPanels?: number;
  /**
   * Specifies whether users can switch between UI themes in the Preview tab.
   *
   * Default value: `true`
   *
   * [View Demo](https://surveyjs.io/Examples/Creator?id=theme-switcher (linkStyle))
   */
  allowChangeThemeInPreview?: boolean;
  /**
   * Specifies the orientation of the selected device in the Preview tab.
   * 
   * Possible values:
   * - `"landscape"` (default)
   * - `"portrait"`
   */
  previewOrientation?: "landscape" | "portrait";
  /**
   * Limits question and panel types available in the Toolbox and Add Question menu.
   * 
   * Refer to the [Limit Available Question and Panel Types](https://surveyjs.io/Documentation/Survey-Creator?id=toolbox#limit-available-question-and-panel-types) help topic for more information.
   */
  questionTypes?: Array<string>;
  /**
   * Specifies where to add new questions when users click the "Add Question" button.
   * 
   * Accepted values:
   * 
   * - `true` (default)       
   * New questions are added to the end of a survey page.
   * 
   * - `false`      
   * New questions are added after the currently selected question on the design surface.
   */
  addNewQuestionLast?: boolean;
  /**
   * Specifies how Survey Creator users edit survey pages.
   * 
   * Accepted values:
   * 
   * - `"standard"` (default)       
   * Questions and panels are divided between pages. Users can scroll the design surface to reach a required page.
   * 
   * - `"single"`       
   * All questions and panels belong to a single page. Users cannot add or remove pages.
   * 
   * - `"bypage"`       
   * Questions and panels are divided between pages. Users can use the page navigator to switch to a required page.
   */
  pageEditMode?: "standard" | "single" | "bypage";
  enableLinkFileEditor?: boolean;

  expandCollapseButtonVisibility?: "never" | "onhover" | "always";
}
