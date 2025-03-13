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
   * Default value: `true`
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
   * Specifies whether users can modify the [Survey Creator theme](https://surveyjs.io/survey-creator/documentation/api-reference/survey-creator#creatorTheme). Applies only if [`propertyGridNavigationMode`](https://surveyjs.io/survey-creator/documentation/api-reference/icreatoroptions#propertyGridNavigationMode) is `"buttons"`.
   * 
   * Default value: `true`
   */
  showCreatorThemeSettings?: boolean;
  /**
   * Specifies whether the "Zoom In", "Zoom Out", and "Zoom to 100%" buttons are available.
   * 
   * Default value: `true`
   */
  allowZoom?: boolean;
  /**
   * Specifies whether to call the [`saveSurveyFunc`](https://surveyjs.io/survey-creator/documentation/api-reference/survey-creator#saveSurveyFunc) and [`saveThemeFunc`](https://surveyjs.io/survey-creator/documentation/api-reference/survey-creator#saveThemeFunc) functions each time survey or theme settings are changed.
   *
   * Default value: `false`
   */
  autoSaveEnabled?: boolean;
  /**
   * @deprecated Use the [`autoSaveEnabled`](https://surveyjs.io/survey-creator/documentation/api-reference/icreatoroptions#autoSaveEnabled) property instead.
   */
  isAutoSave?: boolean;
  /**
   * Specifies whether to enable support for right-to-left languages.
   *
   * Default value: `false`
   */
  isRTL?: boolean;
  /**
   * Specifies whether users can see and edit the survey header and related survey properties.
   *
   * Default value: `true`
   */
  showSurveyHeader?: boolean;
  /**
   * @deprecated Use the [`showSurveyHeader`](https://surveyjs.io/survey-creator/documentation/api-reference/icreatoroptions#showSurveyHeader) property instead.
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
  logicAllowTextEditExpressions?: boolean;
  /**
   * @deprecated Use the [`logicAllowTextEditExpressions`](https://surveyjs.io/survey-creator/documentation/api-reference/icreatoroptions#logicAllowTextEditExpressions) property instead.
   */
  allowEditExpressionsInTextEditor?: boolean;
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
  previewAllowSelectPage?: boolean;
  /**
   * @deprecated Use the [`previewAllowSelectPage`](https://surveyjs.io/survey-creator/documentation/api-reference/icreatoroptions#previewAllowSelectPage) property instead.
   */
  showPagesInPreviewTab?: boolean;
  /**
   * A [UI theme](https://surveyjs.io/Documentation/Library?id=get-started-react#configure-styles) used to display the survey in the Preview tab.
   *
   * Accepted values: `"default"`
   *
   * Default value: `"default"`
   */
  previewTheme?: string;
  /**
   * @deprecated Use the [`previewTheme`](https://surveyjs.io/survey-creator/documentation/api-reference/icreatoroptions#previewTheme) property instead.
   */
  themeForPreview?: string;
  /**
   * Specifies whether the Preview tab displays the Device button that allows users to preview the survey on different device types.
   *
   * Default value: `true`
   */
  previewAllowSimulateDevices?: boolean;
  /**
   * @deprecated Use the [`previewAllowSimulateDevices`](https://surveyjs.io/survey-creator/documentation/api-reference/icreatoroptions#previewAllowSimulateDevices) property instead.
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
   * Always display the language selector with [all supported languages](https://github.com/surveyjs/survey-creator/tree/90de47d2c9da49b06a7f97414026d70f7acf05c6/packages/survey-creator-core/src/localization).
   *
   * **See also**: [Localization & Globalization](https://surveyjs.io/Documentation/Survey-Creator?id=localization)
   */
  previewAllowSelectLanguage?: boolean | string;
  /**
   * @deprecated Use the [`previewAllowSelectLanguage`](https://surveyjs.io/survey-creator/documentation/api-reference/icreatoroptions#previewAllowSelectLanguage) property instead.
   */
  showDefaultLanguageInPreviewTab?: boolean | string;
  /**
   * Specifies whether the Preview tab displays a checkbox that allows users to show or hide invisible survey elements.
   *
   * Default value: `true`
   */
  previewAllowHiddenElements?: boolean;
  /**
   * @deprecated Use the [`previewAllowHiddenElements`](https://surveyjs.io/survey-creator/documentation/api-reference/icreatoroptions#previewAllowHiddenElements) property instead.
   */
  showInvisibleElementsInPreviewTab?: boolean;
  /**
   * @deprecated Use the [`useElementTitles`](https://surveyjs.io/survey-creator/documentation/api-reference/icreatoroptions#useElementTitles) property instead.
   */
  showObjectTitles?: boolean;
  /**
   * @deprecated Use the [`useElementTitles`](https://surveyjs.io/survey-creator/documentation/api-reference/icreatoroptions#useElementTitles) property instead.
   */
  showTitlesInExpressions?: boolean;
  /**
   * Specifies whether Survey Creator UI elements display survey, page, and question titles instead of their names.
   *
   * Default value: `false`
   */
  useElementTitles?: boolean;
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
   * Limits the number of columns that users can add to [Single-Select Matrix](https://surveyjs.io/Documentation/Library?id=questionmatrixmodel), [Multi-Select Matrix](https://surveyjs.io/Documentation/Library?id=questionmatrixdropdownmodel), and [Dynamic Matrix](https://surveyjs.io/Documentation/Library?id=questionmatrixdynamicmodel) questions.
   *
   * Default value: 0 (unlimited, taken from `settings.propertyGrid.maxColumns`)
   */
  maxColumns?: number;
  /**
   * Limits the minimum number of choices in [Checkboxes](https://surveyjs.io/Documentation/Library?id=questioncheckboxmodel), [Dropdown](https://surveyjs.io/Documentation/Library?id=questiondropdownmodel), and [Radio Button Group](https://surveyjs.io/Documentation/Library?id=questionradiogroupmodel) questions. Set this property if users should not delete choices below the specified limit.
   *
   * Default value: 0 (unlimited, taken from `settings.propertyGrid.minChoices`)
   */
  minChoices?: number;
  /**
   * Limits the number of choices that users can add to [Checkboxes](https://surveyjs.io/Documentation/Library?id=questioncheckboxmodel), [Dropdown](https://surveyjs.io/Documentation/Library?id=questiondropdownmodel), and [Radio Button Group](https://surveyjs.io/Documentation/Library?id=questionradiogroupmodel) questions.
   *
   * Default value: 0 (unlimited, taken from `settings.propertyGrid.maxChoices`)
   */
  maxChoices?: number;
  /**
   * Limits the number of rows that users can add to [Single-Select Matrix](https://surveyjs.io/Documentation/Library?id=questionmatrixmodel) and [Multi-Select Matrix](https://surveyjs.io/Documentation/Library?id=questionmatrixdropdownmodel) questions.
   *
   * Default value: 0 (unlimited, taken from `settings.propertyGrid.maxRows`)
   */
  maxRows?: number;
  /**
   * Limits the number of rate values that users can add to [Rating Scale](https://surveyjs.io/Documentation/Library?id=questionratingmodel) questions.
   *
   * Default value: 0 (unlimited, taken from `settings.propertyGrid.maxRateValues`)
   */
  maxRateValues?: number;
  /**
   * @deprecated Use the [`maxColumns`](https://surveyjs.io/survey-creator/documentation/api-reference/icreatoroptions#maxColumns) property instead.
   */
  maximumColumnsCount?: number;
  /**
   * @deprecated Use the [`minChoices`](https://surveyjs.io/survey-creator/documentation/api-reference/icreatoroptions#minChoices) property instead.
   */
  minimumChoicesCount?: number;
  /**
   * @deprecated Use the [`maxChoices`](https://surveyjs.io/survey-creator/documentation/api-reference/icreatoroptions#maxChoices) property instead.
   */
  maximumChoicesCount?: number;
  /**
   * @deprecated Use the [`maxRows`](https://surveyjs.io/survey-creator/documentation/api-reference/icreatoroptions#maxRows) property instead.
   */
  maximumRowsCount?: number;
  /**
   * @deprecated Use the [`maxRateValues`](https://surveyjs.io/survey-creator/documentation/api-reference/icreatoroptions#maxRateValues) property instead.
   */
  maximumRateValues?: number;

  /**
   * Limits the number of items in a logical condition.
   *
   * Default value: -1 (unlimited)
   */
  logicMaxItemsInCondition?: number;
  /**
   * @deprecated Use the [`logicMaxItemsInCondition`](https://surveyjs.io/survey-creator/documentation/api-reference/icreatoroptions#logicMaxItemsInCondition) property instead.
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
  previewAllowSelectTheme?: boolean;
  /**
   * @deprecated Use the [`previewAllowSelectTheme`](https://surveyjs.io/survey-creator/documentation/api-reference/icreatoroptions#previewAllowSelectTheme) property instead.
   */
  allowChangeThemeInPreview?: boolean;
  /**
   * Specifies a default device for survey preview in the Preview tab.
   *
   * Accepted values:
   * 
   * - `"desktop"` (default)
   * - `"iPhoneSE"`
   * - `"iPhone15"`
   * - `"iPhone15Plus"`
   * - `"iPad"`
   * - `"iPadMini"`
   * - `"androidPhone"`
   * - `"androidTablet"`
   * - `"microsoftSurface"`
   */
  previewDevice?: string;
  /**
   * Specifies the orientation of the selected device in the Preview tab.
   * 
   * Accepted values:
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
  /**
   * Specifies the visibility of the buttons that expand and collapse survey elements on the design surface.
   * 
   * Accepted values:
   * 
   * - `"onhover"` (default) - Displays an expand/collapse button when a survey element is hovered over or selected.
   * - `"always"` - Displays the expand/collapse buttons permanently.
   * - `"never"` - Hides the expand/collapse buttons.
   * @see [SurveyCreatorModel.onElementGetExpandCollapseState](https://surveyjs.io/survey-creator/documentation/api-reference/survey-creator#onElementGetExpandCollapseState)
   * @see collapseOnDrag
   */
  expandCollapseButtonVisibility?: "never" | "onhover" | "always";

  /**
   * Specifies whether survey pages appear collapsed on the design surface by default.
   * 
   * Default value: `false`
   * 
   * [View Demo](https://surveyjs.io/survey-creator/examples/expand-and-collapse-survey-elements/ (linkStyle))
   * 
   * This property specifies the expand/collapse state of all survey pages at once. To adjust the state of individual pages, handle the [`onElementGetExpandCollapseState`](https://surveyjs.io/survey-creator/documentation/api-reference/survey-creator#onElementGetExpandCollapseState) event.
   * @see expandCollapseButtonVisibility
   */
  collapsePages?: boolean;
  /**
   * Specifies whether panels appear collapsed on the design surface by default.
   * 
   * Default value: `false`
   * 
   * [View Demo](https://surveyjs.io/survey-creator/examples/expand-and-collapse-survey-elements/ (linkStyle))
   * 
   * This property specifies the expand/collapse state of all panels at once. To adjust the state of individual panels, handle the [`onElementGetExpandCollapseState`](https://surveyjs.io/survey-creator/documentation/api-reference/survey-creator#onElementGetExpandCollapseState) event.
   * @see expandCollapseButtonVisibility
   */
  collapsePanels?: boolean;
  /**
   * Specifies whether survey questions appear collapsed on the design surface by default.
   * 
   * Default value: `false`
   * 
   * [View Demo](https://surveyjs.io/survey-creator/examples/expand-and-collapse-survey-elements/ (linkStyle))
   * 
   * This property specifies the expand/collapse state of all survey questions at once. To adjust the state of individual questions, handle the [`onElementGetExpandCollapseState`](https://surveyjs.io/survey-creator/documentation/api-reference/survey-creator#onElementGetExpandCollapseState) event.
   * @see expandCollapseButtonVisibility
   */
  collapseQuestions?: boolean;
  /**
   * Specifies how users navigate categories in the Property Grid.
   * 
   * Accepted values:
   * 
   * - `"accordion"` (default)        
   * The Property Grid displays a stacked list of categories that users can expand or collapse to reveal nested properties.
   * 
   * - `"buttons"`      
   * The Property Grid displays the properties of a currently selected category. Users can switch between categories using buttons on the right side of the Property Grid. 
   */
  propertyGridNavigationMode?: "buttons" | "accordion";
  /**
   * Specifies whether users can drag and drop pages on the design surface.
   * 
   * Default value: `true` if [`pageEditMode`](https://surveyjs.io/survey-creator/documentation/api-reference/icreatoroptions#pageEditMode) is `"standard"`; `false` otherwise.
   * @see collapseOnDrag
   */
  allowDragPages?: boolean;
  /**
   * Specifies whether to collapse pages on the design surface when users start dragging a survey element.
   * 
   * Default value: `true`
   */
  collapseOnDrag?: boolean;
}
