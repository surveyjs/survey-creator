//Uncomment this line on creating a translation file
//import { editorLocalization, defaultStrings } from "../editorLocalization";

export var enStrings = {
  //survey templates
  survey: {
    edit: "Edit",
    dropQuestion: "Please drop a question here from the Toolbox on the left.",
    copy: "Copy",
    addToToolbox: "Add to toolbox",
    deletePanel: "Delete Panel",
    deleteQuestion: "Delete Question",
    convertTo: "Convert to"
  },
  //questionTypes
  qt: {
    checkbox: "Checkbox",
    comment: "Comment",
    dropdown: "Dropdown",
    file: "File",
    html: "Html",
    matrix: "Matrix (single choice)",
    matrixdropdown: "Matrix (multiple choice)",
    matrixdynamic: "Matrix (dynamic rows)",
    multipletext: "Multiple Text",
    panel: "Panel",
    paneldynamic: "Panel (dynamic panels)",
    radiogroup: "Radiogroup",
    rating: "Rating",
    text: "Single Input",
    boolean: "Boolean",
    expression: "Expression"
  },
  //Strings in Editor
  ed: {
    survey: "Survey",
    editSurvey: "Edit Survey",
    addNewPage: "Add New Page",
    deletePage: "Delete Page",
    editPage: "Edit Page",
    newPageName: "page",
    newQuestionName: "question",
    newPanelName: "panel",
    testSurvey: "Test Survey",
    testSurveyAgain: "Test Survey Again",
    testSurveyWidth: "Survey width: ",
    embedSurvey: "Embed Survey",
    saveSurvey: "Save Survey",
    designer: "Survey Designer",
    jsonEditor: "JSON Editor",
    undo: "Undo",
    redo: "Redo",
    options: "Options",
    generateValidJSON: "Generate Valid JSON",
    generateReadableJSON: "Generate Readable JSON",
    toolbox: "Toolbox",
    toolboxGeneralCategory: "General",
    delSelObject: "Delete selected object",
    editSelObject: "Edit selected object",
    correctJSON: "Please correct JSON.",
    surveyResults: "Survey Result: ",
    modified: "Modified",
    saving: "Saving",
    saved: "Saved"
  },
  //Property Editors
  pe: {
    apply: "Apply",
    ok: "OK",
    cancel: "Cancel",
    reset: "Reset",
    close: "Close",
    delete: "Delete",
    addNew: "Add New",
    addItem: "Click to add an item...",
    removeAll: "Remove All",
    edit: "Edit",
    move: "Move",
    empty: "<empty>",
    notEmpty: "<edit value>",
    fastEntry: "Fast Entry",
    formEntry: "Form Entry",
    testService: "Test the service",
    conditionSelectQuestion: "Select question...",
    conditionButtonAdd: "Add",
    conditionButtonReplace: "Replace",
    conditionHelp:
      "Please enter a boolean expression. It should return true to keep the question/page visible. For example: {question1} = 'value1' or ({question2} * {question4}  > 20 and {question3} < 5)",
    expressionHelp:
      "Please enter an expression. You may use curly brackets to get access to the question values: '{question1} + {question2}', '({price}*{quantity}) * (100 - {discount})'",
    aceEditorHelp: "Press ctrl+space to get expression completion hint",
    aceEditorRowTitle: "Current row",
    aceEditorPanelTitle: "Current panel",
    showMore: "For more details please check the documentation",
    assistantTitle: "Available questions:",
    cellsEmptyRowsColumns: "There is should be at least one column or row",

    propertyIsEmpty: "Please enter a value",
    value: "Value",
    text: "Text",
    required: "Required?",
    columnEdit: "Edit column: {0}",
    itemEdit: "Edit item: {0}",

    url: "URL",
    path: "Path",
    valueName: "Value name",
    titleName: "Title name",

    hasOther: "Has other item",
    otherText: "Other item text",
    name: "Name",
    title: "Title",
    cellType: "Cell type",
    colCount: "Column count",
    choicesOrder: "Select choices order",
    visible: "Is visible?",
    isRequired: "Is required?",
    startWithNewLine: "Is start with new line?",
    rows: "Row count",
    placeHolder: "Input place holder",
    showPreview: "Is image preview shown?",
    storeDataAsText: "Store file content in JSON result as text",
    maxSize: "Maximum file size in bytes",
    imageHeight: "Image height",
    imageWidth: "Image width",
    rowCount: "Row count",
    addRowText: "Add row button text",
    removeRowText: "Remove row button text",
    minRateDescription: "Minimum rate description",
    maxRateDescription: "Maximum rate description",
    inputType: "Input type",
    optionsCaption: "Options caption",
    defaultValue: "Default value",

    surveyEditorTitle: "Edit survey settings",
    qEditorTitle: "Edit: {0}",

    //survey
    showTitle: "Show/hide title",
    locale: "Default language",
    mode: "Mode (edit/read only)",
    clearInvisibleValues: "Clear invisible values",
    cookieName: "Cookie name (to disable run survey two times locally)",
    sendResultOnPageNext: "Send survey results on page next",
    storeOthersAsComment: "Store 'others' value in separate field",
    showPageTitles: "Show page titles",
    showPageNumbers: "Show page numbers",
    pagePrevText: "Page previous button text",
    pageNextText: "Page next button text",
    completeText: "Complete button text",
    startSurveyText: "Start button text",
    showNavigationButtons: "Show navigation buttons (default navigation)",
    showPrevButton: "Show previous button (user may return on previous page)",
    firstPageIsStarted: "The first page in the survey is a started page.",
    showCompletedPage: "Show the completed page at the end (completedHtml)",
    goNextPageAutomatic:
      "On answering all questions, go to the next page automatically",
    showProgressBar: "Show progress bar",
    questionTitleLocation: "Question title location",
    requiredText: "The question required symbol(s)",
    questionStartIndex: "Question start index (1, 2 or 'A', 'a')",
    showQuestionNumbers: "Show question numbers",
    questionTitleTemplate:
      "Question title template, default is: '{no}. {require} {title}'",
    questionErrorLocation: "Question error location",
    focusFirstQuestionAutomatic: "Focus first question on changing the page",
    questionsOrder: "Elements order on the page",
    maxTimeToFinish: "Maximum time to finish the survey",
    maxTimeToFinishPage: "Maximum time to finish a page in the survey",
    showTimerPanel: "Show timer panel",
    showTimerPanelMode: "Show timer panel mode",
    renderMode: "Render mode",
    allowAddPanel: "Allow adding a panel",
    allowRemovePanel: "Allow removing the panel",
    panelAddText: "Adding panel text",
    panelRemoveText: "Removing panel text",
    isSinglePage: "Show all elements on one page",

    tabs: {
      general: "General",
      fileOptions: "Options",
      html: "Html Editor",
      columns: "Columns",
      rows: "Rows",
      choices: "Choices",
      visibleIf: "Visible If",
      enableIf: "Enable If",
      rateValues: "Rate Values",
      choicesByUrl: "Choices from Web",
      matrixChoices: "Default Choices",
      multipleTextItems: "Text Inputs",
      validators: "Validators",
      navigation: "Navigation",
      question: "Question",
      completedHtml: "Completed Html",
      loadingHtml: "Loading Html",
      timer: "Timer/Quiz",
      triggers: "Triggers",
      templateTitle: "Template title"
    },
    editProperty: "Edit property '{0}'",
    items: "[ Items: {0} ]",

    enterNewValue: "Please, enter the value.",
    noquestions: "There is no any question in the survey.",
    createtrigger: "Please create a trigger",
    triggerOn: "On ",
    triggerMakePagesVisible: "Make pages visible:",
    triggerMakeQuestionsVisible: "Make elements visible:",
    triggerCompleteText: "Complete the survey if succeed.",
    triggerNotSet: "The trigger is not set",
    triggerRunIf: "Run if",
    triggerSetToName: "Change value of: ",
    triggerSetValue: "to: ",
    triggerIsVariable: "Do not put the variable into the survey result."
  },
  //Property values
  pv: {
    true: "true",
    false: "false"
  },
  //Operators
  op: {
    empty: "is empty",
    notempty: "is not empty",
    equal: "equals",
    notequal: "not equals",
    contains: "contains",
    notcontains: "not contains",
    greater: "greater",
    less: "less",
    greaterorequal: "greater or equals",
    lessorequal: "less or equals"
  },
  //Embed window
  ew: {
    angular: "Use Angular version",
    jquery: "Use jQuery version",
    knockout: "Use Knockout version",
    react: "Use React version",
    vue: "Use Vue version",
    bootstrap: "For bootstrap framework",
    standard: "No bootstrap",
    showOnPage: "Show survey on a page",
    showInWindow: "Show survey in a window",
    loadFromServer: "Load Survey JSON from server",
    titleScript: "Scripts and styles",
    titleHtml: "HTML",
    titleJavaScript: "JavaScript"
  },
  //Test Survey
  ts: {
    selectPage: "Select the page to test it:"
  },
  validators: {
    answercountvalidator: "answer count",
    emailvalidator: "e-mail",
    numericvalidator: "numeric",
    regexvalidator: "regex",
    textvalidator: "text"
  },
  triggers: {
    completetrigger: "complete survey",
    setvaluetrigger: "set value",
    visibletrigger: "change visibility"
  },
  //Properties
  p: {
    name: "name",
    title: {
      name: "title",
      title: "Leave it empty, if it is the same as 'Name'"
    },
    page_title: { name: "title", title: "Page title" }
  }
};
//Uncomment this line on creating a translation file. You should replace "en" and enStrings with your locale ("fr", "de" and so on) and your variable.
//editorLocalization.locales["en"] = enStrings;
