// Uncomment the line below if you create a custom dictionary
// import { editorLocalization, defaultStrings } from "../editorLocalization";

export var enStrings = {
  // survey templates
  survey: {
    edit: "Edit",
    externalHelpLink: "Watch and learn how to create surveys",
    externalHelpLinkUrl: "https://www.youtube.com/channel/UCH2ru9okIcooNZfpIbyq4qQ?view_as=subscriber",
    dropQuestion: "Please drop a question here from the Toolbox.",
    addLogicItem: "Create a rule to customize the flow of the survey.",
    copy: "Copy",
    duplicate: "Duplicate",
    addToToolbox: "Add to toolbox",
    deletePanel: "Delete Panel",
    deleteQuestion: "Delete Question",
    convertTo: "Convert to",
    drag: "Drag element",
    license: "PLEASE PURCHASE A DEVELOPER LICENSE TO BE ABLE TO USE SURVEY CREATOR IN YOUR APP"
  },
  // Question types
  qt: {
    default: "Default",
    checkbox: "Checkboxes",
    comment: "Long Text",
    imagepicker: "Image Picker",
    ranking: "Ranking",
    image: "Image",
    dropdown: "Dropdown",
    tagbox: "Multi-Select Dropdown",
    file: "File Upload",
    html: "HTML",
    matrix: "Single-Select Matrix",
    matrixdropdown: "Multi-Select Matrix",
    matrixdynamic: "Dynamic Matrix",
    multipletext: "Multiple Textboxes",
    panel: "Panel",
    paneldynamic: "Dynamic Panel",
    radiogroup: "Radio Button Group",
    rating: "Rating Scale",
    text: "Single-Line Input",
    boolean: "Yes/No (Boolean)",
    expression: "Expression (read-only)",
    signaturepad: "Signature",
    buttongroup: "Button Group"
  },
  // Strings in SurveyJS Creator
  ed: {
    defaultLocale: "Default ({0})",
    survey: "Survey",
    settings: "Settings",
    settingsTooltip: "Open settings",
    surveySettings: "Survey Settings",
    surveySettingsTooltip: "Open survey settings",
    showPanel: "Show Panel",
    hidePanel: "Hide Panel",
    prevSelected: "Select previous",
    nextSelected: "Select next",
    surveyTypeName: "Survey",
    pageTypeName: "Page",
    panelTypeName: "Panel",
    questionTypeName: "Question",
    columnTypeName: "Column",
    addNewPage: "Add New Page",
    moveRight: "Scroll to the Right",
    moveLeft: "Scroll to the Left",
    deletePage: "Delete Page",
    editPage: "Edit Page",
    edit: "Edit",
    newPageName: "page",
    newQuestionName: "question",
    newPanelName: "panel",
    newTextItemName: "text",
    testSurvey: "Preview",
    themeSurvey: "Themes",
    defaultV2Theme: "Default",
    modernTheme: "Modern",
    defaultTheme: "Default (legacy)",
    testSurveyAgain: "Preview Survey Again",
    testSurveyWidth: "Survey width: ",
    navigateToMsg: "You had to navigate to",
    logic: "Logic",
    embedSurvey: "Embed Survey",
    translation: "Translation",
    saveSurvey: "Save Survey",
    saveSurveyTooltip: "Save Survey",
    designer: "Designer",
    jsonEditor: "JSON Editor",
    jsonHideErrors: "Hide errors",
    jsonShowErrors: "Show errors",
    undo: "Undo",
    redo: "Redo",
    undoTooltip: "Undo last change",
    redoTooltip: "Redo the change",
    showMoreChoices: "Show more",
    showLessChoices: "Show less",
    copy: "Copy",
    cut: "Cut",
    paste: "Paste",
    copyTooltip: "Copy selection to clipboard",
    cutTooltip: "Cut selection to clipboard",
    pasteTooltip: "Paste from clipboard",
    options: "Options",
    generateValidJSON: "Generate Valid JSON",
    generateReadableJSON: "Generate Readable JSON",
    toolbox: "Toolbox",
    "property-grid": "Properties",
    propertyGridFilteredTextPlaceholder: "Type to search...",
    toolboxGeneralCategory: "General",
    toolboxChoiceCategory: "Choice Questions",
    toolboxTextCategory: "Text Input Questions",
    toolboxContainersCategory: "Containers",
    toolboxMatrixCategory: "Matrix Questions",
    toolboxMiscCategory: "Misc",
    correctJSON: "Please correct JSON.",
    surveyResults: "Survey Results ",
    surveyResultsTable: "As Table",
    surveyResultsJson: "As JSON",
    resultsTitle: "Question Title",
    resultsName: "Question Name",
    resultsValue: "Answer Value",
    resultsDisplayValue: "Display Value",
    modified: "Modified",
    saving: "Saving",
    saved: "Saved",
    propertyEditorError: "Error",
    saveError: "Error! Editor content is not saved.",
    translationPropertyGridTitle: "Language Settings",
    themePropertyGridTitle: "Theme Settings",
    translationLanguages: "Languages",
    translationAddLanguage: "Select language to translate",
    translationShowAllStrings: "All Strings",
    translationShowUsedStringsOnly: "Used Strings Only",
    translationShowAllPages: "All Pages",
    translationNoStrings: "No strings to translate. Please, change the filter.",
    translationExportToSCVButton: "Export to CSV",
    translationImportFromSCVButton: "Import from CSV",
    translationMergeLocaleWithDefault: "Merge {0} with default locale",
    translationPlaceHolder: "Translation...",
    themeExportButton: "Export",
    themeImportButton: "Import",
    bold: "Bold",
    italic: "Italic",
    underline: "Underline",
    addNewQuestion: "Add Question",
    selectPage: "Select page...",
    carryForwardChoicesCopied: "Choices are copied from",
    htmlPlaceHolder: "HTML content will be here.",
    panelPlaceHolder: "Drop a question from the toolbox here.",
    surveyPlaceHolder: "The survey is empty. Drag an element from the toolbox or click the button below.",
    imagePlaceHolder: "Drag and drop an image here or click the button below and choose an image to upload",
    imageChooseImage: "Choose Image",
    addNewTypeQuestion: "Add {0}", //{0} is localizable question type
    chooseLogoPlaceholder: "[LOGO]",
    auto: "auto",
    choices_Item: "Item ",
    lg: {
      addNewItem: "Add New Rule",
      empty_tab: "Create a rule to customize the flow of the survey.",
      page_visibilityName: "Show (hide) page",
      page_enableName: "Enable (disable) page",
      panel_visibilityName: "Show (hide) panel",
      panel_enableName: "Enable (disable) panel",
      question_visibilityName: "Show (hide) question",
      question_enableName: "Enable (disable) question",
      question_requireName: "Make question required",
      column_visibilityName: "Show (hide) column",
      column_enableName: "Enable (disable) column",
      column_requireName: "Make column required",
      trigger_completeName: "Complete survey",
      trigger_setvalueName: "Set answer",
      trigger_copyvalueName: "Copy answer",
      trigger_skipName: "Skip to question",
      trigger_runExpressionName: "Run expression",
      completedHtmlOnConditionName: "Set \"Survey Complete\" page markup",
      page_visibilityDescription: "Make the page visible when the logic expression returns true. Otherwise keep it invisible.",
      panel_visibilityDescription: "Make the panel visible when the logic expression returns true. Otherwise keep it invisible.",
      panel_enableDescription: "Make the panel, and all elements inside it, enable when the logic expression returns true. Otherwise keep them disabled.",
      question_visibilityDescription: "Make the question visible when the logic expression returns true. Otherwise keep it invisible.",
      question_enableDescription: "Make the question enable when the logic expression returns true. Otherwise keep it disabled.",
      question_requireDescription: "Question becomes required when the logic expression returns true.",
      trigger_completeDescription: "When the logic expression returns true then the survey becomes completed and an end-user see the 'Thank you page'.",
      trigger_setvalueDescription: "When question values, that are used in the logic expression, are changed and the logic expression returns true, then the value is set to the selected question.",
      trigger_copyvalueDescription: "When question values, that are used in the logic expression, are changed and the logic expression returns true, then the value of one selected question is copied to another selected question.",
      trigger_skipDescription: "When the logic expression returns true then the survey skip to / focus the selected question.",
      trigger_runExpressionDescription: "When the logic expression returns true, then the custom expression is performed. You may optionally set this expression result into the selected question",
      completedHtmlOnConditionDescription: "If the logic expression returns true, then the default text for the 'Thank you page' is changed to the given one.",
      itemExpressionText: "When expression: '{0}' returns true", //{0} - the expression
      itemEmptyExpressionText: "New rule",
      page_visibilityText: "make page {0} visible", //{0} page name
      panel_visibilityText: "make panel {0} visible", //{0} panel name
      panel_enableText: "make panel {0} enable", //{0} panel name
      question_visibilityText: "make question {0} visible", //{0} question name
      question_enableText: "make question {0} enable", //{0} question name
      question_requireText: "make question {0} required", //{0} question name
      column_visibilityText: "make column {0} of question {1} visible", //{0} column name, {1} question name
      column_enableText: "make column {0} of question {1} enable", //{0} column name, {1} question name
      column_requireText: "make column {0} of question {1} required", //{0} column name, {1} question name
      trigger_completeText: "survey becomes completed",
      trigger_setvalueText: "set into question: {0} value {1}", //{0} question name, {1} setValue
      trigger_setvalueEmptyText: "clear question value: {0}", //{0} question name
      trigger_copyvalueText: "copy into question: {0} value from question {1}", //{0} and {1} question names
      trigger_skipText: "survey skip to the question {0}", //{0} question name
      trigger_runExpressionText1: "run expression: '{0}'", //{0} the expression
      trigger_runExpressionText2: " and set its result into question: {0}", //{0} question name
      completedHtmlOnConditionText: "show custom text for the 'Thank you page'.",
      showAllQuestions: "All Questions",
      showAllActionTypes: "All Action Types",
      conditions: "Condition(s)",
      actions: "Action(s)",
      expressionEditorTitle: "Define condition(s)",
      actionsEditorTitle: "Define action(s)",
      deleteAction: "Delete Action",
      addNewAction: "Add Action",
      selectedActionCaption: "Select action...",
      expressionInvalid: "The logic expression is empty or invalid. Please correct it.",
      noActionError: "Please, add at least one action.",
      actionInvalid: "Please, fix problems in your action(s).",
      uncompletedRule_title: "Logical rules are incomplete",
      uncompletedRule_text: "You have not completed some of the logical rules. If you leave the tab now, the changes will be lost. Do you still want to leave the tab without completing the changes?",
      uncompletedRule_apply: "Yes",
      uncompletedRule_cancel: "No, I want to complete the rules",
      expressionSetup: "",
      actionsSetup: ""
    }
  },
  // Property Editors
  pe: {
    apply: "Apply",
    ok: "OK",
    save: "Save",
    clear: "Clear",
    saveTooltip: "Save",
    cancel: "Cancel",
    set: "Set",
    reset: "Reset",
    change: "Change",
    refresh: "Refresh",
    close: "Close",
    delete: "Delete",
    add: "Add",
    addNew: "Add New",
    addItem: "Click to add an item...",
    removeItem: "Click to remove the item...",
    dragItem: "Drag the item",
    addOther: "Other",
    addSelectAll: "Select All",
    addNone: "None",
    removeAll: "Remove All",
    edit: "Edit",
    back: "Return without saving",
    backTooltip: "Return without saving",
    saveAndBack: "Save and return",
    saveAndBackTooltip: "Save and return",
    doneEditing: "Done",
    editChoices: "Edit Choices",
    showChoices: "Show Choices",
    move: "Move",
    empty: "<empty>",
    emptyValue: "Value is empty",
    fastEntry: "Manual Entry",
    fastEntryNonUniqueError: "Value '{0}' is not unique",
    fastEntryChoicesCountError: "Please limit the number of items from {0} to {1}",
    fastEntryPlaceholder: "You can set data in the following format:\nvalue1|text\nvalue2",
    formEntry: "Form Entry",
    testService: "Test the service",
    itemSelectorEmpty: "Please select the element",
    conditionActionEmpty: "Please select the action",
    conditionSelectQuestion: "Select question...",
    conditionSelectPage: "Select page...",
    conditionSelectPanel: "Select panel...",
    conditionValueQuestionTitle: "Please enter/select the value",
    expressionHelp: "Use curly brackets to access answers: `{question1} + {question2}`. Expressions also support functions: `iif()`, `today()`, `age()`, `min()`, `max()`, `count()`, `avg()`, and others",
    aceEditorHelp: "Press ctrl+space to get expression completion hint",
    aceEditorRowTitle: "Current row",
    aceEditorPanelTitle: "Current panel",
    showMore: "For more details please check the documentation",
    assistantTitle: "Available questions",
    cellsEmptyRowsColumns: "There is should be at least one column or row",
    showPreviewBeforeComplete: "Preview answers before submitting the survey",
    overridingPropertyPrefix: "Set by ",
    propertyIsEmpty: "Please enter a value",
    propertyIsNoUnique: "Please enter a unique value",
    propertyNameIsNotUnique: "Please enter a unique name",
    propertyNameIsIncorrect: "Do not use reserved words: \"item\", \"choice\", \"panel\", \"row\".",
    listIsEmpty: "No items have been added yet",
    "listIsEmpty@choices": "No choices have been added yet",
    "addNew@choices": "Add a choice",
    expressionIsEmpty: "Expression is empty",
    value: "Value",
    text: "Text",
    rowid: "Row ID",
    imageLink: "Image or video URL",
    columnEdit: "Edit column: {0}",
    itemEdit: "Edit item: {0}",
    url: "Service URL",
    path: "Path to data within the service",
    valueName: "Store answers in the following JSON field",
    choicesbyurl: {
      valueName: "Get values from the following JSON field"
    },
    titleName: "Get display texts from the following JSON field",
    imageLinkName: "Get image URLs from the following JSON field",
    allowEmptyResponse: "Allow empty response",
    titlePlaceholder: "Title",
    surveyTitlePlaceholder: "Survey Title",
    pageTitlePlaceholder: "Page {num}",
    descriptionPlaceholder: "Description",
    surveyDescriptionPlaceholder: "Description",
    pageDescriptionPlaceholder: "Description",
    showOtherItem: "Allow the Other option",
    otherText: "Other option text",
    showNoneItem: "Allow the None option",
    noneText: "None option text",
    showSelectAllItem: "Allow the Select All option",
    selectAllText: "Select All option text",
    choicesMin: "Minimum value for auto-generated items",
    choicesMax: "Maximum value for auto-generated items",
    choicesStep: "Step for auto-generated items",
    name: "Name",
    title: "Title",
    cellType: "Cell type",
    colCount: "Column count",
    choicesOrder: "Choices sort order",
    visible: "Visible",
    isRequired: "Required",
    isAllRowRequired: "Require answer for all rows",
    requiredErrorText: "\"Required\" error message",
    startWithNewLine: "Display the question on a new line",
    rows: "Rows",
    cols: "Columns",
    placeholder: "Input area placeholder",
    showPreview: "Show preview area",
    storeDataAsText: "Store file content in JSON result as text",
    maxSize: "Maximum file size (in bytes)",
    imageHeight: "Image height",
    imageWidth: "Image width",
    rowCount: "Row count",
    columnLayout: "Columns layout",
    addRowLocation: "Add Row button location",
    addRowText: "Add Row button text",
    removeRowText: "Remove Row button text",
    rateMin: "Minimum rate value",
    rateMax: "Maximum rate value",
    rateStep: "Rate step",
    minRateDescription: "Minimum rate value description",
    maxRateDescription: "Maximum rate value description",
    inputType: "Input type",
    optionsCaption: "Option placeholder",
    defaultValue: "Default Answer",
    cellsDefaultRow: "Default texts",
    surveyEditorTitle: "Edit survey settings",
    qEditorTitle: "Edit: {0}",
    maxLength: "Maximum length (in characters)",
    buildExpression: "Build",
    editExpression: "Edit",
    and: "and",
    or: "or",
    remove: "Remove",
    addCondition: "Add Condition",
    emptyLogicPopupMessage: "Select a question to start configuring conditions.",
    if: "If",
    then: "then",
    setToName: "Target question",
    fromName: "Question to copy answer from",
    gotoName: "Question to skip to",
    ruleIsNotSet: "Rule is incorrect",
    includeIntoResult: "Include into survey results",
    showTitle: "Show the title",
    expandCollapseTitle: "Expand/collapse title",
    locale: "Survey language",
    simulator: "Select device type",
    landscapeOrientation: "Switch to landscape orientation",
    portraitOrientation: "Switch to portrait orientation",
    mode: "Editable or read-only",
    clearInvisibleValues: "Clear invisible values",
    cookieName: "Cookie name",
    sendResultOnPageNext: "Save partial survey results in progress",
    storeOthersAsComment: "Store the Others value in a separate field",
    showPageTitles: "Show page titles",
    showPageNumbers: "Show page numbers",
    pagePrevText: "Previous Page button text",
    pageNextText: "Next Page button text",
    completeText: "Complete Survey button text",
    previewText: "Preview Answers button text",
    editText: "Edit Answer button text",
    startSurveyText: "Start Survey button text",
    showNavigationButtons: "Navigation buttons location",
    showPrevButton: "Show the Previous Page button",
    firstPageIsStarted: "First page is a start page",
    showCompletedPage: "Show the Survey Complete page",
    goNextPageAutomatic: "Proceed to the next page automatically",
    showProgressBar: "Progress bar location",
    questionTitleLocation: "Question title location",
    requiredText: "Required symbol(s)",
    questionStartIndex: "Start index (number or letter)",
    showQuestionNumbers: "Question numbering",
    questionTitleTemplate: "Question title template, default is: '{no}. {require} {title}'",
    questionErrorLocation: "Error message location",
    focusFirstQuestionAutomatic: "Focus first question on a new page",
    questionsOrder: "Element order on the page",
    maxTimeToFinish: "Time limit to finish the survey (in seconds)",
    maxTimeToFinishPage: "Time limit to finish one page (in seconds)",
    image: {
      imageHeight: "Image height (in CSS-accepted values)",
      imageWidth: "Image width (in CSS-accepted values)"
    },
    page: {
      maxTimeToFinish: "Time limit to finish the page (in seconds)"
    },
    question: {
      page: "Parent page"
    },
    showTimerPanel: "Timer location",
    showTimerPanelMode: "Timer mode",
    renderMode: "Panel display mode",
    allowAddPanel: "Allow adding panels",
    allowRemovePanel: "Allow removing panels",
    noEntriesText: "Empty entries text",
    panelAddText: "Add Panel button text",
    panelRemoveText: "Remove Panel button text",
    isSinglePage: "Show all elements on one page",
    html: "HTML markup",
    expression: "Expression",
    setValue: "Answer",
    dataFormat: "Image format",
    allowAddRows: "Allow adding rows",
    allowRemoveRows: "Allow removing rows",
    allowRowsDragAndDrop: "Allow row drag and drop",
    responsiveImageSizeHelp: "Does not apply if you specify the exact image width or height.",
    minImageWidth: "Minimum image width",
    maxImageWidth: "Maximum image width",
    minImageHeight: "Minimum image height",
    maxImageHeight: "Maximum image height",
    minValue: "Minimum value",
    maxValue: "Maximum value",
    minLength: "Minimum length (in characters)",
    allowDigits: "Allow digits",
    minCount: "Minimum count",
    maxCount: "Maximum count",
    regex: "Regular expression",
    surveyvalidator: {
      text: "Error message",
      expression: "Validation expression"
    },
    totalText: "Total row text",
    totalType: "Total type",
    totalExpression: "Total expression",
    totalDisplayStyle: "Total value display style",
    totalCurrency: "Currency",
    totalFormat: "Formatted string",
    logo: "Logo (URL or base64-encoded string)",
    questionsOnPageMode: "Survey structure",
    maxTextLength: "Maximum answer length (in characters)",
    maxOthersLength: "Maximum comment length (in characters)",
    autoGrowComment: "Auto-expand comment area if necessary",
    allowResizeComment: "Allow users to resize text areas",
    textUpdateMode: "Update text question value",
    focusOnFirstError: "Set focus on the first invalid answer",
    checkErrorsMode: "Run validation",
    navigateToUrl: "Navigate to URL",
    navigateToUrlOnCondition: "Dynamic URL",
    completedBeforeHtml: "Markup to show if the user already filled out this survey",
    completedHtml: "Survey Complete page markup",
    completedHtmlOnCondition: "Dynamic Survey Complete page markup",
    loadingHtml: "Markup to show while survey model is loading",
    commentText: "Comment area text",
    autocomplete: "Autocomplete type",
    labelTrue: "\"True\" label",
    labelFalse: "\"False\" label",
    allowClear: "Show the Clear button",
    displayStyle: "Value display style",
    format: "Formatted string",
    maximumFractionDigits: "Maximum fractional digits",
    minimumFractionDigits: "Minimum fractional digits",
    useGrouping: "Display grouping separators",
    allowMultiple: "Allow multiple files",
    allowImagesPreview: "Preview images",
    acceptedTypes: "Accepted file types",
    waitForUpload: "Wait for the upload to complete",
    needConfirmRemoveFile: "Confirm file deletion",
    detailPanelMode: "Detail panel location",
    minRowCount: "Minimum row count",
    maxRowCount: "Maximum row count",
    confirmDelete: "Confirm row deletion",
    confirmDeleteText: "Confirmation message",
    paneldynamic: {
      confirmDelete: "Confirm panel deletion"
    },
    panelCount: "Initial panel count",
    minPanelCount: "Minimum panel count",
    maxPanelCount: "Maximum panel count",
    panelsState: "Inner panel expand state",
    templateDescription: "Description template",
    templateTitle: "Title template",
    panelPrevText: "Previous Panel button tooltip",
    panelNextText: "Next Panel button tooltip",
    showRangeInProgress: "Show progress bar",
    templateTitleLocation: "Question title location",
    panelRemoveButtonLocation: "Remove Panel button location",
    hideIfRowsEmpty: "Hide the question if there are no rows",
    hideColumnsIfEmpty: "Hide columns if there are no rows",
    rateValues: "Custom rate values",
    rateCount: "Rate count",
    autoGenerate: "How to specify rate values?",
    hideIfChoicesEmpty: "Hide the question if it contains no choices",
    hideNumber: "Hide question number",
    minWidth: "Minimum width (in CSS-accepted values)",
    maxWidth: "Maximum width (in CSS-accepted values)",
    width: "Width (in CSS-accepted values)",
    showHeader: "Show column headers",
    horizontalScroll: "Show horizontal scrollbar",
    columnMinWidth: "Minimum column width (in CSS-accepted values)",
    rowTitleWidth: "Row header width (in CSS-accepted values)",
    valueTrue: "\"True\" value",
    valueFalse: "\"False\" value",
    minErrorText: "\"Value is below minimum\" error message",
    maxErrorText: "\"Value exceeds maximum\" error message",
    otherErrorText: "\"Empty comment\" error message",
    keyDuplicationError: "\"Non-unique key value\" error message",
    minSelectedChoices: "Minimum selected choices",
    maxSelectedChoices: "Maximum selected choices",
    showClearButton: "Show the Clear button",
    showNumber: "Show panel number",
    logoWidth: "Logo width (in CSS-accepted values)",
    logoHeight: "Logo height (in CSS-accepted values)",
    readOnly: "Read-only",
    enableIf: "Editable if",
    emptyRowsText: "\"No rows\" message",
    size: "Input field size (in characters)",
    separateSpecialChoices: "Separate special choices (None, Other, Select All)",
    choicesFromQuestion: "Copy choices from the following question",
    choicesFromQuestionMode: "Which choices to copy?",
    showCommentArea: "Show the comment area",
    commentPlaceholder: "Comment area placeholder",
    displayRateDescriptionsAsExtremeItems: "Display rate descriptions as extreme values",
    rowsOrder: "Row order",
    columnsLayout: "Column layout",
    columnColCount: "Nested column count",
    state: "Panel expand state",
    correctAnswer: "Correct Answer",
    defaultPanelValue: "Default Values",
    cells: "Cell Texts",
    keyName: "Key column",
    itemvalue: {
      text: "Alt text"
    },
    logoPosition: "Logo position",
    addLogo: "Add logo...",
    changeLogo: "Change logo...",
    logoPositions: {
      none: "Remove logo",
      left: "Left",
      right: "Right",
      top: "On the top",
      bottom: "In the bottom"
    },
    tabs: {
      general: "General",
      fileOptions: "Options",
      html: "HTML Editor",
      columns: "Columns",
      rows: "Rows",
      choices: "Choices",
      items: "Items",
      visibleIf: "Visible If",
      enableIf: "Editable If",
      requiredIf: "Required If",
      rateValues: "Rate Values",
      choicesByUrl: "Choices from a RESTful Service",
      matrixChoices: "Default Choices",
      multipleTextItems: "Text Inputs",
      numbering: "Numbering",
      validators: "Validators",
      navigation: "Navigation",
      question: "Question",
      pages: "Pages",
      timer: "Timer/Quiz",
      calculatedValues: "Calculated Values",
      triggers: "Triggers",
      templateTitle: "Title template",
      totals: "Totals",
      logic: "Logic",
      layout: "Layout",
      data: "Data",
      validation: "Validation",
      cells: "Cell Texts",
      showOnCompleted: "Survey Complete",
      logo: "Logo in Survey Title",
      slider: "Slider",
      expression: "Expression",
      others: "Others"
    },
    editProperty: "Edit property '{0}'",
    items: "Items",
    choicesVisibleIf: "Choices are visible if",
    choicesEnableIf: "Choices are selectable if",
    columnsEnableIf: "Columns are visible if",
    rowsEnableIf: "Rows are visible if",
    indent: "Add indents",
    panel: {
      indent: "Add outer indents"
    },
    innerIndent: "Add inner indents",
    defaultValueFromLastRow: "Take default values from the last row",
    defaultValueFromLastPanel: "Take default values from the last panel",
    enterNewValue: "Please, enter the value.",
    noquestions: "There are no questions in the survey.",
    createtrigger: "Please create a trigger",
    titleKeyboardAdornerTip: "Press enter button to edit",
    keyboardAdornerTip: "Press enter button to edit item, press delete button to delete item, press alt plus arrow up or arrow down to move item",
    triggerOn: "On ",
    triggerMakePagesVisible: "Make pages visible",
    triggerMakeQuestionsVisible: "Make elements visible",
    triggerCompleteText: "Complete the survey if succeed.",
    triggerNotSet: "The trigger is not set",
    triggerRunIf: "Run if",
    triggerSetToName: "Change value of: ",
    triggerFromName: "Copy value from: ",
    triggerRunExpression: "Run this Expression",
    triggerSetValue: "to: ",
    triggerGotoName: "Go to the question",
    triggerIsVariable: "Do not put the variable into the survey result.",
    triggerRunExpressionEmpty: "Please enter a valid expression",
    emptyExpressionPlaceHolder: "Type expression here...",
    noFile: "No file choosen",
    clearIfInvisible: "Clear the value if the question becomes hidden",
    valuePropertyName: "Value property name",
    searchEnabled: "Enable search",
    hideSelectedItems: "Hide selected items",
    closeOnSelect: "Close the dropdown after selection",
    signatureWidth: "Signature width",
    signatureHeight: "Signature height",
    verticalAlign: "Vertical alignment",
    alternateRows: "Alternate rows",
    columnsVisibleIf: "Columns are visible if",
    rowsVisibleIf: "Rows are visible if",
    otherPlaceholder: "Comment area placeholder",
    rateType: "Rate type" // Auto-generated string
  },
  // Property values
  pv: {
    "true": "true",
    "false": "false",
    inherit: "Inherit",
    show: "Visible",
    hide: "Hidden",
    default: "Inherit",
    initial: "Initial",
    random: "Random",
    collapsed: "Collapsed",
    expanded: "Expanded",
    none: "None",
    asc: "Ascending",
    desc: "Descending",
    indeterminate: "Indeterminate",
    decimal: "decimal",
    currency: "currency",
    percent: "percent",
    firstExpanded: "First panel is expanded",
    off: "Hide question numbers",
    onpanel: "Start on each panel",
    onPanel: "Start on each panel",
    onSurvey: "Continue throughout the survey",
    list: "List",
    progressTop: "Panel navigator + Progress bar at the top",
    progressBottom: "Panel navigator + Progress bar at the bottom",
    progressTopBottom: "Panel navigator + Progress bar at the top and bottom",
    tab: "Tabs",
    horizontal: "Horizontal",
    vertical: "Vertical",
    top: "Top",
    bottom: "Bottom",
    topBottom: "Top and bottom",
    both: "Both",
    left: "Left",
    right: "Right",
    color: "color",
    date: "date",
    datetime: "datetime",
    "datetime-local": "datetime-local",
    email: "email",
    month: "month",
    number: "number",
    password: "password",
    range: "range",
    tel: "tel",
    text: "text",
    time: "time",
    url: "url",
    week: "week",
    hidden: "Hidden",
    on: "Continue from the previous page",
    onPage: "Start on each page",
    edit: "Editable",
    display: "Read-only",
    onComplete: "When the survey is completed",
    onHidden: "When the question becomes hidden",
    onHiddenContainer: "When the question or its panel/page becomes hidden",
    clearInvisibleValues: {
      none: "Never"
    },
    inputType: {
      color: "Color",
      date: "Date",
      "datetime-local": "Date and Time",
      email: "Email",
      month: "Month",
      number: "Number",
      password: "Password",
      range: "Range",
      tel: "Phone Number",
      text: "Text",
      time: "Time",
      url: "URL",
      week: "Week"
    },
    all: "All",
    page: "Page",
    survey: "Survey",
    onNextPage: "When switching to the next page",
    onValueChanged: "After an answer is changed",
    onValueChanging: "Before an answer is changed",
    standard: "Original structure",
    singlePage: "All questions on a single page",
    questionPerPage: "Each question on an individual page",
    noPreview: "No preview",
    showAllQuestions: "Show all questions",
    showAnsweredQuestions: "Show answered questions only",
    pages: "Completed pages",
    questions: "Answered questions",
    requiredQuestions: "Answered required questions",
    correctQuestions: "Valid answers",
    buttons: "Completed pages (button UI)",
    underInput: "Under the input",
    underTitle: "Under the title",
    onBlur: "On blur",
    onTyping: "While typing",
    underRow: "Under the row",
    underRowSingle: "Under the row, only one panel is visible",
    showNavigationButtons: {
      none: "Hidden"
    },
    showProgressBar: {
      off: "Hidden"
    },
    showTimerPanel: {
      none: "Hidden"
    },
    showTimerPanelMode: {
      all: "Both"
    },
    detailPanelMode: {
      none: "Hidden"
    },
    addRowLocation: {
      default: "Depends on matrix layout"
    },
    panelsState: {
      default: "Users cannot expand or collapse panels",
      collapsed: "All panels are collapsed",
      expanded: "All panels are expanded"
    },
    widthMode: {
      auto: "Auto",
      static: "Static",
      responsive: "Responsive"
    },
    imageFit: {
      none: "None",
      contain: "Contain",
      cover: "Cover",
      fill: "Fill"
    },
    contentMode: {
      auto: "Auto",
      image: "Image",
      video: "Video",
      youtube: "YouTube"
    },
    displayMode: {
      auto: "Auto",
      buttons: "Buttons",
      dropdown: "Dropdown"
    },
    rateColorMode: {
      default: "Default"
    },
    autoGenerate: {
      "true": "Generate",
      "false": "Enter manually"
    },
    rateType: {
      labels: "Labels",
      stars: "Stars",
      smileys: "Smileys"
    }
  },
  // Operators
  op: {
    empty: "Empty",
    notempty: "Not empty",
    equal: "Equals",
    notequal: "Does not equal",
    contains: "Contains",
    notcontains: "Does not contain",
    anyof: "Any of",
    allof: "All of",
    greater: "Greater than",
    less: "Less than",
    greaterorequal: "Greater than or equal to",
    lessorequal: "Less than or equal to",
    and: "and",
    or: "or"
  },
  // Embed window
  ew: {
    angular: "Use Angular version",
    jquery: "Use jQuery version",
    knockout: "Use Knockout version",
    react: "Use React version",
    vue: "Use Vue version",
    bootstrap: "For bootstrap framework",
    modern: "Modern theme",
    default: "Default theme",
    orange: "Orange theme",
    darkblue: "Darkblue theme",
    darkrose: "Darkrose theme",
    stone: "Stone theme",
    winter: "Winter theme",
    winterstone: "Winter-Stone theme",
    showOnPage: "Show survey on a page",
    showInWindow: "Show survey in a window",
    loadFromServer: "Load Survey JSON from server",
    titleScript: "Scripts and styles",
    titleHtml: "HTML",
    titleJavaScript: "JavaScript"
  },
  // Preview (Survey)
  ts: {
    selectPage: "Select the page to test it",
    showInvisibleElements: "Show invisible elements",
    hideInvisibleElements: "Hide invisible elements"
  },
  validators: {
    answercountvalidator: "Answer count",
    emailvalidator: "Email",
    expressionvalidator: "Expression",
    numericvalidator: "Number",
    regexvalidator: "Regex",
    textvalidator: "Text"
  },
  triggers: {
    completetrigger: "Complete survey",
    setvaluetrigger: "Set answer",
    copyvaluetrigger: "Copy answer",
    skiptrigger: "Skip to question",
    runexpressiontrigger: "Run expression",
    visibletrigger: "change visibility (deprecated)"
  },
  pehelp: {
    cookieName: "Cookies prevent users from filling out the same survey twice.",
    size: "Resizes the visible area of the input field. Please use the <b>Validation → Maximum length</b> setting to limit the input length.",
    format: "Use {0} as a placeholder for the actual value.",
    totalText: "Visible only when at least one column has Total type or Total expression.",
    acceptedTypes: "Refer to the [accept](https://www.w3schools.com/tags/att_input_accept.asp) attribute description for more information.",
    columnColCount: "Applicable only to Radiogroup and Checkbox cell types.",
    autocomplete: "Refer to the [autocomplete](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete) attribute description for more information.",
    valueName: "If you do not set this property, the answer will be stored in a field specified by the Name property.",
    choicesbyurl: {
      valueName: " "
    },
    keyName: "If the specified column contains identical values, the survey throws the \"Non-unique key value\" error."
  },
  // Properties
  p: {
    title: {
      name: "title",
      title: "Leave it empty, if it is the same as 'Name'"
    },
    multiSelect: "Allow multiple selection",
    showLabel: "Show image captions",
    value: "Value",
    tabAlign: "Tab alignment",
    description: "Description", // Auto-generated string
    logoFit: "Logo fit", // Auto-generated string
    pages: "Pages", // Auto-generated string
    questions: "Questions", // Auto-generated string
    triggers: "Triggers", // Auto-generated string
    calculatedValues: "Calculated values", // Auto-generated string
    surveyId: "Survey id", // Auto-generated string
    surveyPostId: "Survey post id", // Auto-generated string
    surveyShowDataSaving: "Survey show data saving", // Auto-generated string
    questionDescriptionLocation: "Question description location", // Auto-generated string
    progressBarType: "Progress bar type", // Auto-generated string
    showTOC: "Show TOC", // Auto-generated string
    tocLocation: "Toc location", // Auto-generated string
    questionTitlePattern: "Question title pattern", // Auto-generated string
    widthMode: "Width mode", // Auto-generated string
    showBrandInfo: "Show brand info", // Auto-generated string
    useDisplayValuesInDynamicTexts: "Use display values in dynamic texts", // Auto-generated string
    visibleIf: "Visible if", // Auto-generated string
    titleLocation: "Title location", // Auto-generated string
    descriptionLocation: "Description location", // Auto-generated string
    defaultValueExpression: "Default value expression", // Auto-generated string
    requiredIf: "Required if", // Auto-generated string
    validators: "Validators", // Auto-generated string
    bindings: "Bindings", // Auto-generated string
    renderAs: "Render as", // Auto-generated string
    attachOriginalItems: "Attach original items", // Auto-generated string
    choices: "Choices", // Auto-generated string
    choicesByUrl: "Choices by url", // Auto-generated string
    currency: "Currency", // Auto-generated string
    cellHint: "Cell hint", // Auto-generated string
    isUnique: "Is unique", // Auto-generated string
    showInMultipleColumns: "Show in multiple columns", // Auto-generated string
    totalMaximumFractionDigits: "Total maximum fraction digits", // Auto-generated string
    totalMinimumFractionDigits: "Total minimum fraction digits", // Auto-generated string
    columns: "Columns", // Auto-generated string
    detailElements: "Detail elements", // Auto-generated string
    allowAdaptiveActions: "Allow adaptive actions", // Auto-generated string
    defaultRowValue: "Default row value", // Auto-generated string
    detailPanelShowOnAdding: "Detail panel show on adding", // Auto-generated string
    choicesLazyLoadEnabled: "Choices lazy load enabled", // Auto-generated string
    choicesLazyLoadPageSize: "Choices lazy load page size", // Auto-generated string
    inputFieldComponent: "Input field component", // Auto-generated string
    itemComponent: "Item component", // Auto-generated string
    min: "Min", // Auto-generated string
    max: "Max", // Auto-generated string
    minValueExpression: "Min value expression", // Auto-generated string
    maxValueExpression: "Max value expression", // Auto-generated string
    step: "Step", // Auto-generated string
    dataList: "Data list", // Auto-generated string
    itemSize: "Item size", // Auto-generated string
    elements: "Elements", // Auto-generated string
    content: "Content", // Auto-generated string
    navigationButtonsVisibility: "Navigation buttons visibility", // Auto-generated string
    navigationTitle: "Navigation title", // Auto-generated string
    navigationDescription: "Navigation description", // Auto-generated string
    longTap: "Long tap", // Auto-generated string
    autoGrow: "Auto grow", // Auto-generated string
    allowResize: "Allow resizing",
    acceptCarriageReturn: "Accept carriage return", // Auto-generated string
    displayMode: "Display mode", // Auto-generated string
    rateType: "Rate type", // Auto-generated string
    label: "Label", // Auto-generated string
    contentMode: "Content mode", // Auto-generated string
    imageFit: "Image fit", // Auto-generated string
    altText: "Alt text", // Auto-generated string
    height: "Height", // Auto-generated string
    penColor: "Pen color", // Auto-generated string
    backgroundColor: "Background color", // Auto-generated string
    templateElements: "Template elements", // Auto-generated string
    operator: "Operator", // Auto-generated string
    isVariable: "Is variable", // Auto-generated string
    runExpression: "Run expression", // Auto-generated string
    showCaption: "Show caption", // Auto-generated string
    iconName: "Icon name", // Auto-generated string
    iconSize: "Icon size", // Auto-generated string
    precision: "Precision", // Auto-generated string
    matrixDragHandleArea: "Matrix drag handle area", // Auto-generated string
    backgroundImage: "Background image", // Auto-generated string
    backgroundImageFit: "Background image fit", // Auto-generated string
    backgroundImageAttachment: "Background image attachment", // Auto-generated string
    backgroundOpacity: "Background opacity", // Auto-generated string
    selectToRankEnabled: "Select to rank enabled", // Auto-generated string
    selectToRankAreasLayout: "Select to rank areas layout", // Auto-generated string
    allowCameraAccess: "Allow camera access", // Auto-generated string
    scaleColorMode: "Scale color mode", // Auto-generated string
    rateColorMode: "Rate color mode", // Auto-generated string
    templateTabTitle: "Template tab title", // Auto-generated string
    templateVisibleIf: "Template visible if", // Auto-generated string
    copyDisplayValue: "Copy display value" // Auto-generated string
  },
  theme: {
    "--background": "Background color",
    "--background-dim-light": "Background dim light color",
    "--primary-foreground": "Primary foreground color",
    "--foreground": "Foreground color",
    "--base-unit": "Base unit",
    groupGeneral: "General",
    groupAdvanced: "Advanced",
    themeName: "Theme",
    themeMode: "Question appearance",
    themeModePanels: "Default",
    themeModeLightweight: "Without Panels",
    themePaletteLight: "Light",
    themePaletteDark: "Dark",
    primaryColor: "Accent color",
    primaryDefaultColor: "Default",
    primaryDarkColor: "Hover",
    primaryLightColor: "Selected",
    backgroundDimColor: "Background color",
    backgroundImage: "Background image", // Auto-generated string
    backgroundImageFitAuto: "Auto",
    backgroundImageFitCover: "Cover",
    backgroundImageFitContain: "Contain",
    backgroundOpacity: "Opacity", // Auto-generated string
    backgroundImageAttachmentFixed: "Fixed",
    backgroundImageAttachmentScroll: "Scroll",
    panelBackgroundTransparency: "Panel background opacity",
    questionBackgroundTransparency: "Question background opacity",
    questionPanel: "Panel background and corner radius",
    questionTitle: "Question title font",
    questionDescription: "Question description font",
    editorPanel: "Input element",
    editorFont: "Input element font",
    backcolor: "Default background",
    hovercolor: "Hover background",
    borderDecoration: "Border decoration",
    accentBackground: "Accent background",
    accentForeground: "Accent foreground",
    primaryForecolor: "Default color",
    primaryForecolorLight: "Disabled color",
    linesColors: "Minor line colors",
    borderDefault: "Darker",
    borderLight: "Lighter",
    fontFamily: "Font family",
    fontSize: "Font size",
    color: "Color",
    size: "Size",
    fontWeightRegular: "Regular",
    fontWeightHeavy: "Heavy",
    fontWeightSemiBold: "Semi-bold",
    fontWeightBold: "Bold",
    scale: "Scale",
    cornerRadius: "Corner radius",
    surveyTitle: "Survey title font",
    pageTitle: "Page title font",
    pageDescription: "Page description font",
    boxShadowX: "X",
    boxShadowY: "Y",
    boxShadowAddRule: "Add Shadow Effect",
    opacity: "Opacity",
    boxShadowBlur: "Blur",
    boxShadowSpread: "Spread",
    boxShadowDrop: "Drop",
    boxShadowInner: "Inner",
    questionShadow: "Shadow effects",
    editorShadow: "Input element shadow effects",
    names: {
      default: "Default",
      contrast: "Contrast",
      plain: "Plain",
      simple: "Simple",
      blank: "Blank",
      double: "Double",
      bulk: "Bulk",
      "pseudo-3d": "Pseudo 3D",
      playful: "Playful",
      ultra: "Ultra"
    },
    colors: {
      teal: "Teal",
      blue: "Blue",
      purple: "Purple",
      orchid: "Orchid",
      tulip: "Tulip",
      brown: "Brown",
      green: "Green"
    }
  }
};

// Uncomment the line below if you create a custom dictionary.
// Replace "en" with a custom locale code (for example, "fr" or "de"),
// Replace `enStrings` with the name of the variable that contains the custom dictionary.
// editorLocalization.locales["en"] = enStrings;
