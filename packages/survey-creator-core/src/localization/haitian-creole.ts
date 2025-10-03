import { setupLocale } from "survey-creator-core";

export var htStrings = {
  // survey templates
  survey: {
    // "Edit"
    edit: "Modifye",
    // "Watch and learn how to create surveys"
    externalHelpLink: "Gade epi aprann kijan pou kreye sondaj",
    // "https://www.youtube.com/channel/UCH2ru9okIcooNZfpIbyq4qQ?view_as=subscriber"
    externalHelpLinkUrl: "https://www.youtube.com/channel/UCH2ru9okIcooNZfpIbyq4qQ?view_as=subscriber",
    // "Please drop a question here from the Toolbox."
    dropQuestion: "Tanpri lage yon kesyon isit la nan Toolbox la.",
    // "Create a rule to customize the flow of the survey."
    addLogicItem: "Kreye yon règ pou personnaliser flux sondaj la.",
    // "Copy"
    copy: "Kopi",
    // "Duplicate"
    duplicate: "Diplike",
    // "Add to toolbox"
    addToToolbox: "Ajoute nan bwat zouti",
    // "Delete Panel"
    deletePanel: "Efase Panel",
    // "Delete Question"
    deleteQuestion: "Efase Kesyon",
    // "Convert to"
    convertTo: "Konvèti an",
    // "Drag element"
    drag: "Trennen eleman"
  },
  // Creator tabs
  tabs: {
    // "Preview"
    preview: "Aperçu",
    // "Themes"
    theme: "Tèm",
    // "Translations"
    translation: "Tradiksyon",
    // "Designer"
    designer: "Designer",
    // "JSON Editor"
    json: "JSON Editè",
    // "Logic"
    logic: "Lojik"
  },
  // Question types
  qt: {
    // "Default"
    default: "Default",
    // "Checkboxes"
    checkbox: "Bwat chèk",
    // "Long Text"
    comment: "Tèks Long",
    // "Image Picker"
    imagepicker: "Seleksyon imaj",
    // "Ranking"
    ranking: "Klasman",
    // "Image"
    image: "Imaj",
    // "Dropdown"
    dropdown: "Dropdown",
    // "Multi-Select Dropdown"
    tagbox: "Multi-Chwazi Dropdown",
    // "File Upload"
    file: "Fichye Upload",
    // "HTML"
    html: "HTML",
    // "Single-Select Matrix"
    matrix: "Single-Chwazi Matrice",
    // "Multi-Select Matrix"
    matrixdropdown: "Multi-Chwazi Matris",
    // "Dynamic Matrix"
    matrixdynamic: "Matrice dinamik",
    // "Multiple Textboxes"
    multipletext: "Bwat tèks miltip",
    // "Panel"
    panel: "Panèl",
    // "Dynamic Panel"
    paneldynamic: "Panèl dinamik",
    // "Radio Button Group"
    radiogroup: "Gwoup bouton radyo",
    // "Rating Scale"
    rating: "Echèl Rating",
    // [Auto-translated] "Slider"
    slider: "Glise",
    // "Single-Line Input"
    text: "Yon sèl-liy Antre",
    // "Yes/No (Boolean)"
    boolean: "Wi/Non (Boolean)",
    // "Expression (read-only)"
    expression: "Ekspresyon (li sèlman)",
    // "Signature"
    signaturepad: "Siyati",
    // "Button Group"
    buttongroup: "Gwoup bouton"
  },
  toolboxCategories: {
    // "General"
    general: "Jeneral",
    // "Choice Questions"
    choice: "Kesyon chwa",
    // "Text Input Questions"
    text: "Kesyon Antre Tèks",
    // "Containers"
    containers: "Kontenè",
    // "Matrix Questions"
    matrix: "Kesyon Matris",
    // "Misc"
    misc: "Misk"
  },
  // Strings in SurveyJS Creator
  ed: {
    // "Default ({0})"
    defaultLocale: "Default ({0})",
    // "Survey"
    survey: "Sondaj",
    // "Settings"
    settings: "Anviwònman",
    // "Open settings"
    settingsTooltip: "Louvri paramèt yo",
    // "Survey Settings"
    surveySettings: "Anviwònman Sondaj",
    // "Survey settings"
    surveySettingsTooltip: "Anviwònman sondaj",
    // "Theme Settings"
    themeSettings: "Anviwònman tèm",
    // "Theme settings"
    themeSettingsTooltip: "Anviwònman tèm",
    // "Creator Settings"
    creatorSettingTitle: "Anviwònman kreyatè",
    // "Show Panel"
    showPanel: "Montre Panel",
    // "Hide Panel"
    hidePanel: "Kache Panel",
    // "Select previous"
    prevSelected: "Chwazi anvan",
    // "Select next"
    nextSelected: "Chwazi pwochen",
    // "Focus previous"
    prevFocus: "Konsantre anvan",
    // "Focus next"
    nextFocus: "Konsantre pwochen",
    // "Survey"
    surveyTypeName: "Sondaj",
    // "Page"
    pageTypeName: "Paj",
    // "Panel"
    panelTypeName: "Panèl",
    // "Question"
    questionTypeName: "Kesyon",
    // "Column"
    columnTypeName: "Kolòn",
    // "Add New Page"
    addNewPage: "Ajoute nouvo paj",
    // "Scroll to the Right"
    moveRight: "Scroll sou bò dwat la",
    // "Scroll to the Left"
    moveLeft: "Scroll sou Goch la",
    // "Delete Page"
    deletePage: "Efase paj",
    // "Edit Page"
    editPage: "Modifye paj",
    // "Edit"
    edit: "Modifye",
    // "page"
    newPageName: "paj",
    // "question"
    newQuestionName: "kesyon",
    // "panel"
    newPanelName: "panèl",
    // "text"
    newTextItemName: "tèks",
    // "Default"
    defaultV2Theme: "Default",
    // "Modern"
    modernTheme: "Modèn",
    // "Default (legacy)"
    defaultTheme: "Default (eritaj)",
    // "Preview Survey Again"
    testSurveyAgain: "Preview Sondaj Ankò",
    // "Survey width: "
    testSurveyWidth: "Lajè sondaj:",
    // "You had to navigate to"
    navigateToMsg: "Ou te oblije navige nan",
    // "Save Survey"
    saveSurvey: "Save Sondaj",
    // "Save Survey"
    saveSurveyTooltip: "Save Sondaj",
    // "Save Theme"
    saveTheme: "Sove tèm",
    // "Save Theme"
    saveThemeTooltip: "Sove tèm",
    // "Hide errors"
    jsonHideErrors: "Kache erè",
    // "Show errors"
    jsonShowErrors: "Montre erè",
    // "Undo"
    undo: "Defèt",
    // "Redo"
    redo: "Refè",
    // "Undo last change"
    undoTooltip: "Defèt dènye chanjman",
    // "Redo the change"
    redoTooltip: "Refè chanjman an",
    // "Expand"
    expandTooltip: "Elaji",
    // "Collapse"
    collapseTooltip: "Tonbe",
    // "Expand All"
    expandAllTooltip: "Elaji tout",
    // "Collapse All"
    collapseAllTooltip: "Efondre tout",
    // "Zoom In"
    zoomInTooltip: "Zoom nan",
    // "Zoom to 100%"
    zoom100Tooltip: "Zoom a 100%",
    // "Zoom Out"
    zoomOutTooltip: "Zoom Out",
    // "Lock expand/collapse state for questions"
    lockQuestionsTooltip: "Fèmen eta agrandi/effondreman pou kesyon yo",
    // "Show more"
    showMoreChoices: "Montre plis",
    // "Show less"
    showLessChoices: "Montre mwens",
    // "Copy"
    copy: "Kopi",
    // "Cut"
    cut: "Koupe",
    // "Paste"
    paste: "Kole",
    // "Copy selection to clipboard"
    copyTooltip: "Kopi seleksyon an nan clipboard",
    // "Cut selection to clipboard"
    cutTooltip: "Koupe seleksyon an nan clipboard",
    // "Paste from clipboard"
    pasteTooltip: "Kole soti nan clipboard",
    // "Options"
    options: "Opsyon",
    // "Generate Valid JSON"
    generateValidJSON: "Jenere JSON valab",
    // "Generate Readable JSON"
    generateReadableJSON: "Jenere JSON lizib",
    // "Toolbox"
    toolbox: "Bwat zouti",
    // "Properties"
    "property-grid": "Pwopriyete",
    // [Auto-translated] "Search"
    toolboxSearch: "Fouye",
    // "Type to search..."
    toolboxFilteredTextPlaceholder: "Tape pou chèche...",
    // "No results found"
    toolboxNoResultsFound: "Pa gen rezilta yo jwenn",
    // "Type to search..."
    propertyGridFilteredTextPlaceholder: "Tape pou chèche...",
    // "No results found"
    propertyGridNoResultsFound: "Pa gen rezilta yo jwenn",
    // "Start configuring your form"
    propertyGridPlaceholderTitle: "Kòmanse konfigirasyon fòm ou a",
    // "Click any category icon to explore survey settings. Additional settings will become available once you add a survey element to the design surface."
    propertyGridPlaceholderDescription: "Klike sou nenpòt ikòn kategori pou eksplore anviwònman sondaj la. Anviwònman adisyonèl yo ap disponib yon fwa ou ajoute yon eleman sondaj sou sifas konsepsyon an.",
    // "Please correct JSON."
    correctJSON: "Tanpri korije JSON.",
    // "Survey Results "
    surveyResults: "Rezilta Sondaj",
    // "As Table"
    surveyResultsTable: "Kòm Tablo",
    // "As JSON"
    surveyResultsJson: "Kòm JSON",
    // "Question Title"
    resultsTitle: "Tit kesyon",
    // "Question Name"
    resultsName: "Non Kesyon an",
    // "Answer Value"
    resultsValue: "Valè Repons",
    // "Display Value"
    resultsDisplayValue: "Montre valè",
    // "Modified"
    modified: "Modifye",
    // "Saving"
    saving: "Ekonomize",
    // "Saved"
    saved: "Sove",
    // "Error"
    propertyEditorError: "Erè",
    // "Error! Editor content is not saved."
    saveError: "Erè! Kontni editè a pa sove.",
    // "Language Settings"
    translationPropertyGridTitle: "Anviwònman Lang",
    // "Theme Settings"
    themePropertyGridTitle: "Anviwònman tèm",
    // "Add Language"
    addLanguageTooltip: "Ajoute Lang",
    // "Languages"
    translationLanguages: "Lang",
    // "Are you certain you wish to delete all strings for this language?"
    translationDeleteLanguage: "Èske w sèten ou vle efase tout kòd pou lang sa a?",
    // "Select language to translate"
    translationAddLanguage: "Chwazi lang pou tradui",
    // "All Strings"
    translationShowAllStrings: "Tout fisèl",
    // "Used Strings Only"
    translationShowUsedStringsOnly: "Itilize kòd sèlman",
    // "All Pages"
    translationShowAllPages: "Tout Paj",
    // "No strings to translate. Please change the filter."
    translationNoStrings: "Pa gen kòd pou tradui. Tanpri chanje filtè a.",
    // "Export to CSV"
    translationExportToSCVButton: "Ekspòte nan CSV",
    // "Import from CSV"
    translationImportFromSCVButton: "Enpòte soti nan CSV",
    // "Auto-translate All"
    translateUsigAI: "Oto-tradui Tout",
    // "Translate from: "
    translateUsigAIFrom: "Tradui soti nan:",
    // "Untranslated strings"
    translationDialogTitle: "Fisèl ki pa tradui",
    // "Merge {0} with default locale"
    translationMergeLocaleWithDefault: "Rantre {0} ak lokalizasyon default",
    // "Translation..."
    translationPlaceHolder: "Tradiksyon...",
    // "Source: "
    translationSource: "Sous:",
    // "Target: "
    translationTarget: "Sib:",
    // "YouTube links are not supported."
    translationYouTubeNotSupported: "Lyen YouTube yo pa sipòte.",
    // "Export"
    themeExportButton: "Ekspòtasyon",
    // "Import"
    themeImportButton: "Enpòte",
    // "Export"
    surveyJsonExportButton: "Ekspòtasyon",
    // "Import"
    surveyJsonImportButton: "Enpòte",
    // "Copy to clipboard"
    surveyJsonCopyButton: "Kopi nan clipboard",
    // "Reset theme settings to default"
    themeResetButton: "Reyajiste anviwònman tèm nan default",
    // "Do you really want to reset the theme? All your customizations will be lost."
    themeResetConfirmation: "Ou reyèlman vle Reyajiste tèm nan? Tout personnalisation ou yo pral pèdi.",
    // "Yes, reset the theme"
    themeResetConfirmationOk: "Wi, reset tèm nan",
    // "Bold"
    bold: "Fonse",
    // "Italic"
    italic: "Italik",
    // "Underline"
    underline: "Soulinye",
    // "Add Question"
    addNewQuestion: "Ajoute Kesyon",
    // "Select page..."
    selectPage: "Chwazi paj...",
    // "Choices are copied from"
    carryForwardChoicesCopied: "Chwa yo kopye nan",
    // "Choices are loaded from a web service."
    choicesLoadedFromWebText: "Chwa yo chaje nan yon sèvis entènèt.",
    // "Go to settings"
    choicesLoadedFromWebLinkText: "Ale nan paramèt",
    // "Preview of loaded choice options"
    choicesLoadedFromWebPreviewTitle: "Preview nan opsyon chwa chaje",
    // "HTML content will be here."
    htmlPlaceHolder: "Kontni HTML yo pral isit la.",
    // "Drop a question from the toolbox here."
    panelPlaceHolder: "Depoze yon kesyon nan bwat zouti a isit la.",
    // "The survey is empty. Drag an element from the toolbox or click the button below."
    surveyPlaceHolder: "Sondaj la vid. Trennen yon eleman nan bwat zouti a oswa klike sou bouton ki anba a.",
    // "The page is empty. Drag an element from the toolbox or click the button below."
    pagePlaceHolder: "Paj la vid. Trennen yon eleman nan bwat zouti a oswa klike sou bouton ki anba a.",
    // "Drag and drop an image here or click the button below and choose an image to upload"
    imagePlaceHolder: "Trennen epi depoze yon imaj isit la oswa klike sou bouton ki anba a epi chwazi yon imaj pou telechaje",
    // "Click the \"Add Question\" button below to start creating your form."
    surveyPlaceHolderMobile: "Klike sou bouton \"Ajoute Kesyon\" ki anba a pou kòmanse kreye fòm ou a.",
    // "Your form is empty"
    surveyPlaceholderTitle: "Fòm ou a vid",
    // "Your form is empty"
    surveyPlaceholderTitleMobile: "Fòm ou a vid",
    // "Drag an element from the toolbox or click the button below."
    surveyPlaceholderDescription: "Trennen yon eleman nan bwat zouti a oswa klike sou bouton ki anba a.",
    // "Drag an element from the toolbox or click the button below."
    surveyPlaceholderDescriptionMobile: "Trennen yon eleman nan bwat zouti a oswa klike sou bouton ki anba a.",
    // "No preview"
    previewPlaceholderTitle: "Pa gen preview",
    // "No preview"
    previewPlaceholderTitleMobile: "Pa gen preview",
    // "The survey doesn't contain any visible elements."
    previewPlaceholderDescription: "Sondaj la pa genyen okenn eleman vizib.",
    // "The survey doesn't contain any visible elements."
    previewPlaceholderDescriptionMobile: "Sondaj la pa genyen okenn eleman vizib.",
    // "No strings to translate"
    translationsPlaceholderTitle: "Pa gen kòd pou tradui",
    // "No strings to translate"
    translationsPlaceholderTitleMobile: "Pa gen kòd pou tradui",
    // "Add elements to your form or change the strings filter in the toolbar."
    translationsPlaceholderDescription: "Ajoute eleman nan fòm ou a oswa chanje filtè fisèl yo nan ba zouti a.",
    // "Add elements to your form or change the strings filter in the toolbar."
    translationsPlaceholderDescriptionMobile: "Ajoute eleman nan fòm ou a oswa chanje filtè fisèl yo nan ba zouti a.",
    // "Click the \"Add Question\" button below to add a new element to the page."
    pagePlaceHolderMobile: "Klike sou bouton \"Ajoute Kesyon\" ki anba a pou ajoute yon nouvo eleman nan paj la.",
    // "Click the \"Add Question\" button below to add a new element to the panel."
    panelPlaceHolderMobile: "Klike sou bouton \"Ajoute Kesyon\" ki anba a pou ajoute yon nouvo eleman nan panèl la.",
    // "Click the button below and choose an image to upload"
    imagePlaceHolderMobile: "Klike sou bouton ki anba a epi chwazi yon imaj pou w telechaje",
    // "Choose Image"
    imageChooseImage: "Chwazi Imaj",
    // "Add {0}"
    addNewTypeQuestion: "Ajoute {0}", // {0} is localizable question type
    // "[LOGO]"
    chooseLogoPlaceholder: "[LOGO]",
    // "Item "
    choices_Item: "Atik",
    // "Select a file"
    selectFile: "Chwazi yon fichye",
    // "Remove the file"
    removeFile: "Retire fichye a",
    lg: {
      // "Add New Rule"
      addNewItem: "Ajoute Nouvo Règ",
      // "Create a rule to customize the flow of the survey."
      empty_tab: "Kreye yon règ pou personnaliser flux sondaj la.",
      // "No logical rules"
      logicPlaceholderTitle: "Pa gen règ ki lojik",
      // "No logical rules"
      logicPlaceholderTitleMobile: "Pa gen règ ki lojik",
      // "Create a rule to customize the flow of the survey."
      logicPlaceholderDescription: "Kreye yon règ pou personnaliser flux sondaj la.",
      // "Create a rule to customize the flow of the survey."
      logicPlaceholderDescriptionMobile: "Kreye yon règ pou personnaliser flux sondaj la.",
      // "Show/hide page"
      page_visibilityName: "Montre/kache paj",
      // "Enable/disable page"
      page_enableName: "Aktive/enfim paj",
      // "Make page required"
      page_requireName: "Fè paj obligatwa",
      // "Show/hide panel"
      panel_visibilityName: "Montre/kache panèl",
      // "Enable/disable panel"
      panel_enableName: "Pèmèt/enfim panèl",
      // "Make panel required"
      panel_requireName: "Fè panèl obligatwa",
      // "Show/hide question"
      question_visibilityName: "Montre/kache kesyon",
      // "Enable/disable question"
      question_enableName: "Aktive/enfim kesyon",
      // "Make question required"
      question_requireName: "Fè kesyon yo mande yo",
      // "Reset question value"
      question_resetValueName: "Reyajiste valè kesyon an",
      // "Set question value"
      question_setValueName: "Mete valè kesyon an",
      // "Show/hide column"
      column_visibilityName: "Montre/kache kolòn",
      // "Enable/disable column"
      column_enableName: "Pèmèt/enfim kolòn",
      // "Make column required"
      column_requireName: "Fè kolòn obligatwa",
      // "Reset column value"
      column_resetValueName: "Reyajiste valè kolòn",
      // "Set column value"
      column_setValueName: "Mete valè kolòn",
      // "Complete survey"
      trigger_completeName: "Ranpli sondaj",
      // "Set answer"
      trigger_setvalueName: "Mete repons",
      // "Copy answer"
      trigger_copyvalueName: "Kopi repons",
      // "Skip to question"
      trigger_skipName: "Ale nan kesyon",
      // "Run expression"
      trigger_runExpressionName: "Kouri ekspresyon",
      // "Set \"Thank You\" page markup"
      completedHtmlOnConditionName: "Mete makè paj \"Mèsi\".",
      // "Make the page visible when the logical expression evaluates to true. Otherwise, keep the page invisible."
      page_visibilityDescription: "Fè paj la vizib lè ekspresyon lojik la evalye vre. Sinon, kenbe paj la envizib.",
      // "Make the page visible when the logical expression evaluates to true. Otherwise, keep the panel invisible."
      panel_visibilityDescription: "Fè paj la vizib lè ekspresyon lojik la evalye vre. Sinon, kenbe panèl la envizib.",
      // "Make the panel and all elements inside it enabled when the logical expression evaluates to true. Otherwise, keep them disabled."
      panel_enableDescription: "Fè panèl la ak tout eleman andedan li yo aktive lè ekspresyon lojik la evalye vre. Sinon, kenbe yo enfim.",
      // "Make the question visible when the logical expression evaluates to true. Otherwise, keep the question invisible."
      question_visibilityDescription: "Fè kesyon an vizib lè ekspresyon lojik la evalye vre. Sinon, kenbe kesyon an envizib.",
      // "Make the question enabled when the logical expression evaluates to true. Otherwise, keep the question disabled."
      question_enableDescription: "Fè kesyon an aktive lè ekspresyon lojik la evalye a vre. Sinon, kenbe kesyon an enfim.",
      // "Question becomes required when the logical expression evaluates to true."
      question_requireDescription: "Kesyon an vin obligatwa lè ekspresyon lojik la evalye a vre.",
      // "When the logical expression evaluates to true, the survey ends, and the respondent sees the \"Thank you\" page."
      trigger_completeDescription: "Lè ekspresyon lojik la evalye a vre, sondaj la fini, epi moun ki reponn a wè paj \"Mèsi\" la.",
      // "When question values used in the logical expression are changed, and the expression evaluates to true, the specified value is assigned to the selected question."
      trigger_setvalueDescription: "Lè valè kesyon yo itilize nan ekspresyon lojik la chanje, epi ekspresyon an evalye a vre, valè espesifye yo asiyen nan kesyon yo chwazi a.",
      // "When question values used in the logical expression are changed, and the expression evaluates to true, the value of the selected question is copied to another question."
      trigger_copyvalueDescription: "Lè valè kesyon yo itilize nan ekspresyon lojik la chanje, epi ekspresyon an evalye a vre, valè kesyon yo chwazi a kopye nan yon lòt kesyon.",
      // "When the logical expression evaluates to true, the survey focuses/jumps to the selected question."
      trigger_skipDescription: "Lè ekspresyon lojik la evalye a vre, sondaj la konsantre/sote sou kesyon yo chwazi a.",
      // "When the logical expression evaluates to true, the survey evaluates another expression. Optionally, the result of the latter expression can be assigned as a value to the selected question"
      trigger_runExpressionDescription: "Lè ekspresyon lojik la evalye a vre, sondaj la evalye yon lòt ekspresyon. Opsyonèlman, rezilta dènye ekspresyon an ka bay kòm yon valè nan kesyon yo chwazi a",
      // "If the logical expression evaluates to true, the \"Thank You\" page displays the specified content."
      completedHtmlOnConditionDescription: "Si ekspresyon lojik la evalye vre, paj \"Mèsi\" montre kontni espesifye a.",
      // "When expression: '{0}' returns true"
      itemExpressionText: "Lè ekspresyon: '{0}' retounen vre", // {0} - the expression
      // "New rule"
      itemEmptyExpressionText: "Nouvo règ",
      // "make page {0} visible"
      page_visibilityText: "fè paj {0} vizib", // {0} page name
      // "make panel {0} visible"
      panel_visibilityText: "fè panèl {0} vizib", // {0} panel name
      // "make panel {0} enable"
      panel_enableText: "fè panèl {0} pèmèt", // {0} panel name
      // "make question {0} visible"
      question_visibilityText: "fè kesyon {0} vizib", // {0} question name
      // "make question {0} enable"
      question_enableText: "fè kesyon {0} pèmèt", // {0} question name
      // "make question {0} required"
      question_requireText: "fè kesyon {0} obligatwa", // {0} question name
      // "reset value for question: {0}"
      question_resetValueText: "Reyajiste valè pou kesyon: {0}", // {0} question name.
      // "assign value: {1} to question: {0}"
      question_setValueText: "bay valè: {1} poze kesyon: {0}", // {0} question name and {1} setValueExpression
      // "make column {0} of question {1} visible"
      column_visibilityText: "fè kolòn {0} nan kesyon {1} vizib", // {0} column name, {1} question name
      // "make column {0} of question {1} enable"
      column_enableText: "fè kolòn {0} nan kesyon {1} pèmèt", // {0} column name, {1} question name
      // "make column {0} of question {1} required"
      column_requireText: "fè kolòn {0} nan kesyon {1} obligatwa", // {0} column name, {1} question name
      // "reset cell value for column: {0}"
      column_resetValueText: "Reyajiste valè selilè pou kolòn: {0}", // {0} column name
      // "assign cell value: {1} to column: {0}"
      column_setValueText: "bay valè selilè: {1} nan kolòn: {0}", // {0} column name and {1} setValueExpression
      // "An expression whose result will be assigned to the target question."
      setValueExpressionPlaceholder: "Yon ekspresyon ki gen rezilta yo pral asiyen nan kesyon sib la.",
      // "survey becomes completed"
      trigger_completeText: "sondaj la fini",
      // "set into question: {0} value {1}"
      trigger_setvalueText: "mete an kesyon: {0} valè {1}", // {0} question name, {1} setValue
      // "clear question value: {0}"
      trigger_setvalueEmptyText: "valè kesyon klè: {0}", // {0} question name
      // "copy into question: {0} value from question {1}"
      trigger_copyvalueText: "kopye nan kesyon: {0} valè nan kesyon an {1}", // {0} and {1} question names
      // "survey skip to the question {0}"
      trigger_skipText: "sondaj ale nan kesyon an {0}", // {0} question name
      // "run expression: '{0}'"
      trigger_runExpressionText1: "kouri ekspresyon: '{0}'", // {0} the expression
      // " and set its result into question: {0}"
      trigger_runExpressionText2: "epi mete rezilta li an kesyon: {0}", // {0} question name
      // "show custom text for the \"Thank You\" page."
      completedHtmlOnConditionText: "montre tèks koutim pou paj \"Mèsi\".",
      // "All Questions"
      showAllQuestions: "Tout Kesyon",
      // "All Action Types"
      showAllActionTypes: "Tout kalite aksyon",
      // "Condition(s)"
      conditions: "Kondisyon (yo)",
      // "Action(s)"
      actions: "Aksyon (yo)",
      // "Define condition(s)"
      expressionEditorTitle: "Defini kondisyon (yo)",
      // "Define action(s)"
      actionsEditorTitle: "Defini aksyon (yo)",
      // "Delete Action"
      deleteAction: "Efase Aksyon",
      // "Add Action"
      addNewAction: "Ajoute Aksyon",
      // "Select action..."
      selectedActionCaption: "Chwazi aksyon...",
      // "The logic expression is empty or invalid. Please correct it."
      expressionInvalid: "Ekspresyon lojik la vid oswa envalid. Tanpri korije li.",
      // "Please add at least one action."
      noActionError: "Tanpri ajoute omwen yon aksyon.",
      // "Please fix issues in your action(s)."
      actionInvalid: "Tanpri ranje pwoblèm nan aksyon ou (yo).",
      // "Logical rules are incomplete"
      uncompletedRule_title: "Règ lojik yo enkonplè",
      // "You have not completed some of the logical rules. If you leave the tab now, the changes will be lost. Do you still want to leave the tab without completing the changes?"
      uncompletedRule_text: "Ou poko ranpli kèk nan règ lojik yo. Si ou kite tab la kounye a, chanjman yo pral pèdi. Èske ou toujou vle kite tab la san w pa konplete chanjman yo?",
      // "Yes"
      uncompletedRule_apply: "Wi",
      // "No, I want to complete the rules"
      uncompletedRule_cancel: "Non, mwen vle ranpli règ yo"
    }
  },
  // Property Editors
  pe: {
    panel: {
      // "Panel name"
      name: "Non panèl",
      // "Panel title"
      title: "Tit panèl",
      // "Panel description"
      description: "Deskripsyon panèl",
      // "Make the panel visible if"
      visibleIf: "Fè panèl la vizib si",
      // "Make the panel required if"
      requiredIf: "Fè panèl la mande si",
      // "Question order within the panel"
      questionOrder: "Kesyon lòd nan panèl la",
      // "Move the panel to page"
      page: "Deplase panèl la nan paj",
      // "Display the panel on a new line"
      startWithNewLine: "Montre panèl la sou yon nouvo liy",
      // "Panel collapse state"
      state: "Eta panèl tonbe",
      // "Inline panel width"
      width: "Inline panèl lajè",
      // "Minimum panel width"
      minWidth: "Minimòm lajè panèl",
      // "Maximum panel width"
      maxWidth: "Maksimòm lajè panèl",
      // "Number this panel"
      showNumber: "Nimewo panèl sa a"
    },
    panellayoutcolumn: {
      // "Effective width, %"
      effectiveWidth: "Lajè efikas, %",
      // "Question title width, px"
      questionTitleWidth: "Tit kesyon lajè, px"
    },
    paneldynamic: {
      // "Panel name"
      name: "Non panèl",
      // "Panel title"
      title: "Tit panèl",
      // "Panel description"
      description: "Deskripsyon panèl",
      // [Auto-translated] "Entry display mode"
      displayMode: "Antre ekspozisyon mòd",
      // "Make the panel visible if"
      visibleIf: "Fè panèl la vizib si",
      // "Make the panel required if"
      requiredIf: "Fè panèl la mande si",
      // "Move the panel to page"
      page: "Deplase panèl la nan paj",
      // "Display the panel on a new line"
      startWithNewLine: "Montre panèl la sou yon nouvo liy",
      // "Panel collapse state"
      state: "Eta panèl tonbe",
      // "Inline panel width"
      width: "Inline panèl lajè",
      // "Minimum panel width"
      minWidth: "Minimòm lajè panèl",
      // "Maximum panel width"
      maxWidth: "Maksimòm lajè panèl",
      // [Auto-translated] "Confirm entry removal"
      confirmDelete: "Konfime retire antre konfime",
      // "Entry description pattern"
      templateDescription: "Modèl deskripsyon panèl",
      // "Entry title pattern"
      templateTitle: "Modèl tit panèl",
      // "Empty panel text"
      noEntriesText: "Tèks panèl vid",
      // "Tab title pattern"
      templateTabTitle: "Modèl tit tab",
      // "Tab title placeholder"
      tabTitlePlaceholder: "Tab Tit anplasman",
      // "Make an individual entry visible if"
      templateVisibleIf: "Fè yon panèl endividyèl vizib si",
      // "Number the panel"
      showNumber: "Nimewo panèl la",
      // "Panel title alignment"
      titleLocation: "Aliyman tit panèl",
      // "Panel description alignment"
      descriptionLocation: "Panèl deskripsyon aliyman",
      // "Question title alignment"
      templateQuestionTitleLocation: "Kesyon aliyman tit",
      // "Question title width"
      templateQuestionTitleWidth: "Kesyon tit lajè",
      // "Error message alignment"
      templateErrorLocation: "Erè mesaj aliyman",
      // "New entry location"
      newPanelPosition: "Nouvo kote panèl",
      // "Show the progress bar"
      showRangeInProgress: "Montre ba pwogrè a",
      // "Prevent duplicate responses in the following question"
      keyName: "Anpeche repons doub nan kesyon sa a"
    },
    question: {
      // "Question name"
      name: "Non kesyon an",
      // "Question title"
      title: "Tit kesyon an",
      // "Question description"
      description: "Deskripsyon kesyon",
      // [Auto-translated] "Show the title and description"
      showTitle: "Montre la ak deskripsyon an",
      // "Make the question visible if"
      visibleIf: "Fè kesyon an vizib si",
      // "Make the question required if"
      requiredIf: "Fè kesyon an mande si",
      // "Move the question to page"
      page: "Deplase kesyon an nan paj la",
      // "Question box collapse state"
      state: "Kesyon bwat efondreman eta",
      // "Number this question"
      showNumber: "Nimewo kesyon sa a",
      // "Question title alignment"
      titleLocation: "Kesyon aliyman tit",
      // "Question description alignment"
      descriptionLocation: "Kesyon deskripsyon aliyman",
      // "Error message alignment"
      errorLocation: "Erè mesaj aliyman",
      // "Increase the inner indent"
      indent: "Ogmante endentasyon anndan an",
      // "Inline question width"
      width: "Lajè kesyon an liy",
      // "Minimum question width"
      minWidth: "Lajè minimòm kesyon an",
      // "Maximum question width"
      maxWidth: "Maksimòm lajè kesyon an",
      // "Update input field value"
      textUpdateMode: "Mete ajou valè jaden opinyon"
    },
    signaturepad: {
      // "Signature area width"
      signatureWidth: "Siyati zòn lajè",
      // "Signature area height"
      signatureHeight: "Wotè zòn siyati",
      // "Auto-scale the signature area"
      signatureAutoScaleEnabled: "Auto-echèl zòn siyati a",
      // "Show a placeholder within signature area"
      showPlaceholder: "Montre yon emplacement nan zòn siyati",
      // "Placeholder text"
      placeholder: "Tèks anplasman",
      // "Placeholder text in read-only or preview mode"
      placeholderReadOnly: "Tèks anplasman nan mòd lekti sèlman oswa aperçu",
      // "Show the Clear button within signature area"
      allowClear: "Montre bouton Clear la nan zòn siyati a",
      // "Minimum stroke width"
      penMinWidth: "Lajè konjesyon serebral minimòm",
      // "Maximum stroke width"
      penMaxWidth: "Maksimòm lajè kou",
      // "Stroke color"
      penColor: "Koulè konjesyon serebral"
    },
    comment: {
      // "Input field height (in lines)"
      rows: "Antre wotè jaden (an liy)"
    },
    // "Question numbering"
    showQuestionNumbers: "Kesyon nimero",
    // "Question indexing type"
    questionStartIndex: "Kalite Indexing kesyon",
    expression: {
      // "Expression name"
      name: "Non ekspresyon",
      // "Expression title"
      title: "Tit ekspresyon",
      // "Expression description"
      description: "Ekspresyon deskripsyon",
      // "Expression"
      expression: "Ekspresyon"
    },
    trigger: {
      // "Expression"
      expression: "Ekspresyon"
    },
    calculatedvalue: {
      // "Expression"
      expression: "Ekspresyon"
    },
    // survey templates
    survey: {
      // "Survey title"
      title: "Tit sondaj la",
      // "Survey description"
      description: "Deskripsyon sondaj la",
      // "Make the survey read-only"
      readOnly: "Fè sondaj la lekti sèlman"
    },
    page: {
      // "Page name"
      name: "Non paj la",
      // "Page title"
      title: "Tit paj la",
      // "Page description"
      description: "Deskripsyon paj la",
      // "Make the page visible if"
      visibleIf: "Fè paj la vizib si",
      // "Make the page required if"
      requiredIf: "Fè paj la mande si",
      // "Time limit to complete the page"
      timeLimit: "Tan limit pou konplete paj la",
      // "Question order on the page"
      questionOrder: "Lòd kesyon sou paj la"
    },
    matrixdropdowncolumn: {
      // "Column name"
      name: "Non kolòn",
      // "Column title"
      title: "Tit kolòn",
      // "Prevent duplicate responses"
      isUnique: "Anpeche repons doub",
      // "Column width"
      width: "Lajè kolòn",
      // "Minimum column width"
      minWidth: "Lajè kolòn minimòm",
      // "Input field height (in lines)"
      rows: "Antre wotè jaden (an liy)",
      // "Make the column visible if"
      visibleIf: "Fè kolòn nan vizib si",
      // "Make the column required if"
      requiredIf: "Fè kolòn ki nesesè si",
      // "Each option in a separate column"
      showInMultipleColumns: "Chak opsyon nan yon kolòn separe"
    },
    matrixcolumn: {
      // [Auto-translated] "Clear others in the same row"
      isExclusive: "Klè lòt moun nan menm ranje a"
    },
    multipletextitem: {
      // "Name"
      name: "Non",
      // "Title"
      title: "Tit"
    },
    masksettings: {
      // "Save masked value in survey results"
      saveMaskedValue: "Sove valè maske nan rezilta sondaj yo"
    },
    patternmask: {
      // "Value pattern"
      pattern: "Modèl valè"
    },
    datetimemask: {
      // "Minimum value"
      min: "Valè minimòm",
      // "Maximum value"
      max: "Valè maksimòm"
    },
    numericmask: {
      // "Allow negative values"
      allowNegativeValues: "Pèmèt valè negatif",
      // "Thousands separator"
      thousandsSeparator: "Dè milye séparateur",
      // "Decimal separator"
      decimalSeparator: "Desimal séparateur",
      // "Value precision"
      precision: "Valè presizyon",
      // "Minimum value"
      min: "Valè minimòm",
      // "Maximum value"
      max: "Valè maksimòm"
    },
    currencymask: {
      // "Currency prefix"
      prefix: "Prefiks lajan",
      // "Currency suffix"
      suffix: "Sifiks lajan"
    },
    // [Auto-translated] "Clear others when selected"
    isExclusive: "Klè lòt moun lè yo chwazi yo",
    // [Auto-translated] "Require user to enter a comment"
    isCommentRequired: "Mande pou itilizatè antre nan yon kòmantè",
    // "Display area height"
    imageHeight: "Montre wotè zòn nan",
    // "Display area width"
    imageWidth: "Montre lajè zòn nan",
    // "Join identifier"
    valueName: "Antre nan idantifyan",
    // "Default display value for dynamic texts"
    defaultDisplayValue: "Valè ekspozisyon defo pou tèks dinamik",
    // "Label alignment"
    rateDescriptionLocation: "Aliyman etikèt",
    // "Input field width (in characters)"
    size: "Antre lajè jaden (an karaktè)",
    // "Cell error message alignment"
    cellErrorLocation: "Aliyman mesaj erè selilè",
    // "Enabled"
    enabled: "Pèmèt",
    // "Disabled"
    disabled: "Andikape",
    // "Inherit"
    inherit: "Eritye",
    // "Apply"
    apply: "Aplike",
    // "OK"
    ok: "OK",
    // "Save"
    save: "Sove",
    // "Clear"
    clear: "Klè",
    // "Save"
    saveTooltip: "Sove",
    // "Cancel"
    cancel: "Anile",
    // "Set"
    set: "Mete",
    // "Reset"
    reset: "Reyajiste",
    // "Change"
    change: "Chanje",
    // "Refresh"
    refresh: "Rafrechi",
    // "Close"
    close: "Fèmen",
    // "Delete"
    delete: "Efase",
    // "Add"
    add: "Ajoute",
    // "Add New"
    addNew: "Ajoute Nouvo",
    // "Click to add an item..."
    addItem: "Klike pou ajoute yon atik...",
    // "Click to remove the item..."
    removeItem: "Klike pou retire atik la...",
    // "Drag the item"
    dragItem: "Trennen atik la",
    // "Other"
    addOther: "Lòt",
    // "Select All"
    addSelectAll: "Chwazi Tout",
    // "None"
    addNone: "Okenn",
    // "Remove All"
    removeAll: "Retire tout",
    // "Edit"
    edit: "Modifye",
    // "Return without saving"
    back: "Retounen san sove",
    // "Return without saving"
    backTooltip: "Retounen san sove",
    // "Save and return"
    saveAndBack: "Sove epi retounen",
    // "Save and return"
    saveAndBackTooltip: "Sove epi retounen",
    // "Done"
    doneEditing: "Fè",
    // "Edit Choices"
    editChoices: "Edit chwa",
    // "Show Choices"
    showChoices: "Montre chwa",
    // "Move"
    move: "Deplase",
    // "<empty>"
    empty: "<vid>",
    // "Value is empty"
    emptyValue: "Valè a vid",
    // "Manual Entry"
    fastEntry: "Antre Manyèl",
    // "Value '{0}' is not unique"
    fastEntryNonUniqueError: "Valè '{0}' se pa inik",
    // "Please limit the number of items from {0} to {1}"
    fastEntryChoicesCountError: "Tanpri limite kantite atik ki soti nan {0} pou {1}",
    // "Please enter at least {0} items"
    fastEntryChoicesMinCountError: "Tanpri antre omwen {0} atik yo",
    // "Enter the list of choice options and their IDs in the following format:\n\nid|option\n\nA choice option ID is not visible to respondents and can be used in conditional rules."
    fastEntryPlaceholder: "Antre lis opsyon chwa yo ak idantite yo nan fòma sa a:",
    // "Form Entry"
    formEntry: "Fòm Antre",
    // "Test the service"
    testService: "Teste sèvis la",
    // "Please select the element"
    itemSelectorEmpty: "Tanpri chwazi eleman an",
    // "Please select the action"
    conditionActionEmpty: "Tanpri chwazi aksyon an",
    // "Select a question..."
    conditionSelectQuestion: "Chwazi yon kesyon...",
    // "Select a page..."
    conditionSelectPage: "Chwazi yon paj...",
    // "Select a panel..."
    conditionSelectPanel: "Chwazi yon panèl...",
    // "Please enter/select the value"
    conditionValueQuestionTitle: "Tanpri antre/chwazi valè a",
    // "Press ctrl+space to get expression completion hint"
    aceEditorHelp: "Peze ctrl + espas pou jwenn sijesyon pou fini ekspresyon",
    // "Current row"
    aceEditorRowTitle: "Ranje aktyèl la",
    // "Current panel"
    aceEditorPanelTitle: "Kouran panèl",
    // "For more details please check the documentation"
    showMore: "Pou plis detay tanpri tcheke dokiman an",
    // "Available questions"
    assistantTitle: "Kesyon ki disponib",
    // "There is should be at least one column or row"
    cellsEmptyRowsColumns: "Ta dwe gen omwen yon kolòn oswa yon ranje",
    // "Review before submit"
    showPreviewBeforeComplete: "Revize anvan soumèt",
    // "Enabled by a condition"
    overridingPropertyPrefix: "Pèmèt pa yon kondisyon",
    // "Reset"
    resetToDefaultCaption: "Reyajiste",
    // "Please enter a value"
    propertyIsEmpty: "Tanpri antre yon valè",
    // "Please enter a unique value"
    propertyIsNoUnique: "Tanpri antre yon valè inik",
    // "Please enter a unique name"
    propertyNameIsNotUnique: "Tanpri antre yon non inik",
    // "Do not use reserved words: \"item\", \"choice\", \"panel\", \"row\"."
    propertyNameIsIncorrect: "Pa sèvi ak mo rezève: \"item\", \"chwa\", \"panel\", \"ranje\".",
    // "You don't have any items yet"
    listIsEmpty: "Ou pa gen okenn atik ankò",
    // "You don't have any choices yet"
    "listIsEmpty@choices": "Ou pa gen okenn chwa ankò",
    // "You don't have any columns yet"
    "listIsEmpty@columns": "Ou poko gen okenn kolòn",
    // "You don't have layout columns yet"
    "listIsEmpty@gridLayoutColumns": "Ou poko gen kolòn layout",
    // "You don't have any rows yet"
    "listIsEmpty@rows": "Ou poko gen okenn ranje",
    // "You don't have any validation rules yet"
    "listIsEmpty@validators": "Ou pa gen okenn règ validation ankò",
    // "You don't have any custom variables yet"
    "listIsEmpty@calculatedValues": "Ou pa gen okenn varyab koutim ankò",
    // "You don't have any triggers yet"
    "listIsEmpty@triggers": "Ou pa gen okenn deklanche ankò",
    // "You don't have any links yet"
    "listIsEmpty@navigateToUrlOnCondition": "Ou poko gen okenn lyen",
    // "You don't have any pages yet"
    "listIsEmpty@pages": "Ou poko gen okenn paj",
    // "Add new choice"
    "addNew@choices": "Ajoute nouvo chwa",
    // "Add new column"
    "addNew@columns": "Ajoute nouvo kolòn",
    // "Add new row"
    "addNew@rows": "Ajoute nouvo ranje",
    // "Add new rule"
    "addNew@validators": "Ajoute nouvo règ",
    // "Add new variable"
    "addNew@calculatedValues": "Ajoute nouvo varyab",
    // "Add new trigger"
    "addNew@triggers": "Ajoute nouvo deklanche",
    // "Add new URL"
    "addNew@navigateToUrlOnCondition": "Ajoute nouvo URL",
    // "Add new page"
    "addNew@pages": "Ajoute nouvo paj",
    // "Expression is empty"
    expressionIsEmpty: "Ekspresyon se vid",
    // "Value"
    value: "Valè",
    // "Text"
    text: "Tèks",
    // "Row ID"
    rowid: "Ranje ID",
    // "Image or video file URL"
    imageLink: "URL dosye imaj oswa videyo",
    // "Edit column: {0}"
    columnEdit: "Modifye kolòn: {0}",
    // "Edit item: {0}"
    itemEdit: "Modifye atik: {0}",
    // "URL"
    url: "URL",
    // "Path to data"
    path: "Chemen done yo",
    choicesbyurl: {
      // "Web service URL"
      url: "URL sèvis entènèt",
      // "Get value to store from the following property"
      valueName: "Jwenn valè nan magazen nan pwopriyete sa a"
    },
    // "Get value to display from the following property"
    titleName: "Jwenn valè pou montre nan pwopriyete sa a",
    // "Get file URLs from the following property"
    imageLinkName: "Jwenn adrès URL dosye ki soti nan pwopriyete sa a",
    // "Accept empty response"
    allowEmptyResponse: "Aksepte repons vid",
    // "Title"
    titlePlaceholder: "Tit",
    // "Survey Title"
    surveyTitlePlaceholder: "Tit Sondaj",
    // "Page {num}"
    pageTitlePlaceholder: "Paj {num}",
    // "Start Page"
    startPageTitlePlaceholder: "Kòmanse Paj",
    // "Description"
    descriptionPlaceholder: "Deskripsyon",
    // "Description"
    surveyDescriptionPlaceholder: "Deskripsyon",
    // "Description"
    pageDescriptionPlaceholder: "Deskripsyon",
    // "Wrap choices"
    textWrapEnabled: "Wrap chwa yo",
    // "Enable the \"Other\" option"
    showOtherItem: "Aktive opsyon \"Lòt\" la",
    // "Rename the \"Other\" option"
    otherText: "Chanje non opsyon \"Lòt\" la",
    // "Enable the \"None\" option"
    showNoneItem: "Aktive opsyon \"Okenn\".",
    // "Enable the \"Refuse to Answer\" option"
    showRefuseItem: "Aktive opsyon \"Refize reponn\".",
    // "Enable the \"Don't Know\" option"
    showDontKnowItem: "Aktive opsyon \"Pa konnen\".",
    // "Rename the \"None\" option"
    noneText: "Chanje non opsyon \"Okenn\" la",
    // "Enable the \"Select All\" option"
    showSelectAllItem: "Aktive opsyon \"Chwazi tout\".",
    // "Rename the \"Select All\" option"
    selectAllText: "Chanje non opsyon \"Chwazi tout\" la",
    // "Minimum value for auto-generated items"
    choicesMin: "Valè minimòm pou atik oto-pwodwi",
    // "Maximum value for auto-generated items"
    choicesMax: "Valè maksimòm pou atik oto-pwodwi",
    // "Step value for auto-generated items"
    choicesStep: "Valè etap pou atik oto-pwodwi",
    // "Name"
    name: "Non",
    // "Title"
    title: "Tit",
    // "Cell input type"
    cellType: "Kalite antre selilè",
    // "Column count"
    colCount: "Konte kolòn",
    // "Choice order"
    choicesOrder: "Lòd chwa",
    // "Allow custom choices"
    allowCustomChoices: "Pèmèt chwa koutim",
    // "Visible"
    visible: "Vizib",
    // "Required"
    isRequired: "Obligatwa",
    // "Mark as required"
    markRequired: "Make jan sa nesesè",
    // "Remove the required mark"
    removeRequiredMark: "Retire mak ki nesesè yo",
    // "Require an answer in each row"
    eachRowRequired: "Mande yon repons nan chak ranje",
    // "Prevent duplicate responses in rows"
    eachRowUnique: "Anpeche repons doub nan ranje",
    // "Error message for required questions"
    requiredErrorText: "Mesaj erè pou kesyon obligatwa yo",
    // "Display the question on a new line"
    startWithNewLine: "Montre kesyon an sou yon nouvo liy",
    // "Rows"
    rows: "Ranje",
    // "Columns"
    cols: "Kolòn",
    // "Placeholder text within input field"
    placeholder: "Tèks anplasman nan jaden antre",
    // "Show preview area"
    showPreview: "Montre zòn preview",
    // "Store file content in JSON result as text"
    storeDataAsText: "Sere kontni fichye a nan rezilta JSON kòm tèks",
    // "Maximum file size (in bytes)"
    maxSize: "Gwosè maksimòm dosye (an byte)",
    // "Row count"
    rowCount: "Konte ranje",
    // "Columns layout"
    columnLayout: "Layout kolòn yo",
    // "\"Add Row\" button alignment"
    addRowButtonLocation: "Aliyman bouton \"Ajoute Ranje\".",
    // "Transpose rows to columns"
    transposeData: "Transpoze ranje nan kolòn",
    // "\"Add Row\" button text"
    addRowText: "Tèks bouton \"Ajoute Ranje\".",
    // "\"Remove Row\" button text"
    removeRowText: "Tèks bouton \"Retire Ranje\".",
    // [Auto-translated] "Input field title pattern"
    singleInputTitleTemplate: "Input jaden modèl",
    // "Minimum rating value"
    rateMin: "Valè evalyasyon minimòm",
    // "Maximum rating value"
    rateMax: "Maksimòm valè Rating",
    // "Step value"
    rateStep: "Valè etap la",
    // "Minimum value label"
    minRateDescription: "Etikèt valè minimòm",
    // "Maximum value label"
    maxRateDescription: "Maksimòm valè etikèt",
    // "Input type"
    inputType: "Kalite Antre",
    // "Option placeholder"
    optionsCaption: "Anplasman opsyon",
    // "Default Answer"
    defaultValue: "Repons Default",
    // "Default texts"
    cellsDefaultRow: "Tèks default",
    // "Edit survey settings"
    surveyEditorTitle: "Edite anviwònman sondaj yo",
    // "Edit: {0}"
    qEditorTitle: "Modifye: {0}",
    // "Maximum character limit"
    maxLength: "Limit maksimòm karaktè",
    // "Build"
    buildExpression: "Bati",
    // "Edit"
    editExpression: "Modifye",
    // "and"
    and: "epi",
    // "or"
    or: "oswa",
    // "Remove"
    remove: "Retire",
    // "Add Condition"
    addCondition: "Ajoute Kondisyon",
    // "Select a question to start configuring conditions."
    emptyLogicPopupMessage: "Chwazi yon kesyon pou kòmanse konfigirasyon kondisyon yo.",
    // "If"
    if: "Si",
    // "then"
    then: "lè sa a",
    // "Target question"
    setToName: "Kesyon sib",
    // "Question to copy answer from"
    fromName: "Kesyon pou kopye repons nan",
    // "Question to skip to"
    gotoName: "Kesyon pou pase",
    // "Rule is incorrect"
    ruleIsNotSet: "Règ pa kòrèk",
    // "Add to the survey results"
    includeIntoResult: "Ajoute nan rezilta sondaj yo",
    // "Make the title and description visible"
    showTitle: "Fè tit la ak deskripsyon vizib",
    // "Expand/collapse title"
    expandCollapseTitle: "Elaji/effondreman tit",
    // "Select a survey language"
    locale: "Chwazi yon lang pou sondaj",
    // "Select device type"
    simulator: "Chwazi kalite aparèy",
    // "Switch to landscape orientation"
    landscapeOrientation: "Chanje nan oryantasyon jaden flè",
    // "Switch to portrait orientation"
    portraitOrientation: "Chanje nan oryantasyon pòtrè",
    // "Clear hidden question values"
    clearInvisibleValues: "Klè valè kesyon kache yo",
    // "Limit to one response"
    cookieName: "Limite nan yon repons",
    // "Auto-save survey progress on page change"
    partialSendEnabled: "Sove otomatik pwogrè sondaj sou chanjman paj la",
    // "Save the \"Other\" option value as a separate property"
    storeOthersAsComment: "Sove valè opsyon \"Lòt\" kòm yon pwopriyete separe",
    // "Show page titles"
    showPageTitles: "Montre tit paj yo",
    // "Show page numbers"
    showPageNumbers: "Montre nimewo paj yo",
    // "\"Previous Page\" button text"
    pagePrevText: "Tèks bouton \"Paj Previous\".",
    // "\"Next Page\" button text"
    pageNextText: "Tèks bouton \"Next Page\".",
    // "\"Complete Survey\" button text"
    completeText: "Tèks bouton \"Ranpli Sondaj\".",
    // "\"Review Answers\" button text"
    previewText: "Tèks bouton \"Revize Repons\".",
    // "\"Edit Answer\" button text"
    editText: "Tèks bouton \"Edite Repons\".",
    // "\"Start Survey\" button text"
    startSurveyText: "Tèks bouton \"Kòmanse Sondaj\".",
    // "Show navigation buttons"
    showNavigationButtons: "Montre bouton navigasyon yo",
    // "Navigation buttons alignment"
    navigationButtonsLocation: "Bouton navigasyon aliyman",
    // "Show the \"Previous Page\" button"
    showPrevButton: "Montre bouton \"Paj Previous\".",
    // "First page is a start page"
    firstPageIsStartPage: "Premye paj se yon paj kòmanse",
    // "Show the \"Thank You\" page"
    showCompletePage: "Montre paj \"Mèsi\" la",
    // "Auto-advance to the next page"
    autoAdvanceEnabled: "Avanse otomatikman nan pwochen paj la",
    // "Complete the survey automatically"
    autoAdvanceAllowComplete: "Ranpli sondaj la otomatikman",
    // "Show the progress bar"
    showProgressBar: "Montre ba pwogrè a",
    // "Progress bar alignment"
    progressBarLocation: "Pwogrè ba aliyman",
    // "Question title alignment"
    questionTitleLocation: "Kesyon aliyman tit",
    // "Question title width"
    questionTitleWidth: "Kesyon tit lajè",
    // "Required symbol(s)"
    requiredMark: "Senbòl obligatwa (yo)",
    // "Question title template, default is: '{no}. {require} {title}'"
    questionTitleTemplate: "Modèl tit kesyon, default se: '{no}. {require} {title}'",
    // "Error message alignment"
    questionErrorLocation: "Erè mesaj aliyman",
    // "Focus first question on a new page"
    autoFocusFirstQuestion: "Konsantre premye kesyon sou yon nouvo paj",
    // "Question order"
    questionOrder: "Kesyon lòd",
    // "Time limit to complete the survey"
    timeLimit: "Limit tan pou ranpli sondaj la",
    // "Time limit to complete one page"
    timeLimitPerPage: "Limit tan pou konplete yon paj",
    // "Use a timer"
    showTimer: "Sèvi ak yon revèy",
    // "Timer alignment"
    timerLocation: "Aliyman revèy",
    // "Timer mode"
    timerInfoMode: "Mòd revèy",
    // "Panel display mode"
    renderMode: "Mòd ekspozisyon panèl",
    // "Enable entry addition"
    allowAddPanel: "Pèmèt adisyon panèl",
    // "Enable entry removal"
    allowRemovePanel: "Pèmèt retire panèl",
    // "\"Add Entry\" button text"
    addPanelText: "Tèks bouton \"Ajoute Panel\".",
    // "\"Remove Entry\" button text"
    removePanelText: "Tèks bouton \"Retire Panel\".",
    // "Show all elements on one page"
    isSinglePage: "Montre tout eleman sou yon paj",
    // "HTML markup"
    html: "HTML maketing",
    // "Answer"
    setValue: "Repons",
    // "Storage format"
    dataFormat: "Fòma depo",
    // "Enable row addition"
    allowAddRows: "Pèmèt adisyon ranje",
    // "Enable row removal"
    allowRemoveRows: "Pèmèt retire ranje",
    // "Enable row reordering"
    allowRowReorder: "Pèmèt ranje ranje",
    // "Does not apply if you specify the exact display area width or height."
    responsiveImageSizeHelp: "Pa aplike si ou presize egzak lajè oswa wotè zòn ekspozisyon an.",
    // "Minimum display area width"
    minImageWidth: "Lajè zòn ekspozisyon minimòm",
    // "Maximum display area width"
    maxImageWidth: "Lajè zòn maksimòm ekspozisyon",
    // "Minimum display area height"
    minImageHeight: "Minimòm wotè zòn ekspozisyon",
    // "Maximum display area height"
    maxImageHeight: "Maksimòm wotè zòn ekspozisyon",
    // "Minimum value"
    minValue: "Valè minimòm",
    // "Maximum value"
    maxValue: "Valè maksimòm",
    // "Case insensitive"
    caseInsensitive: "Ka ensansib",
    // "Minimum length (in characters)"
    minLength: "Longè minimòm (nan karaktè)",
    // "Allow digits"
    allowDigits: "Pèmèt chif yo",
    // "Minimum count"
    minCount: "Konte minimòm",
    // "Maximum count"
    maxCount: "Konte maksimòm",
    // "Regular expression"
    regex: "Ekspresyon regilye",
    surveyvalidator: {
      // [Auto-translated] "Validation message"
      text: "Mesaj validasyon an",
      // [Auto-translated] "Validation expression"
      expression: "Ekspresyon validasyon",
      // [Auto-translated] "Notification type"
      notificationType: "Kalite notifikasyon"
    },
    // "Total row header"
    totalText: "Total ranje tèt",
    // "Aggregation method"
    totalType: "Metòd agrégation",
    // "Total value expression"
    totalExpression: "Ekspresyon valè total",
    // "Total value display format"
    totalDisplayStyle: "Fòma total ekspozisyon valè",
    // "Currency"
    totalCurrency: "Lajan",
    // "Formatted string"
    totalFormat: "Fòma fisèl",
    // "Survey logo"
    logo: "Sondaj logo",
    // "Survey layout"
    questionsOnPageMode: "Layout sondaj",
    // "Restrict answer length"
    maxTextLength: "Limite longè repons",
    // "Restrict comment length"
    maxCommentLength: "Limite longè kòmantè",
    // "Comment area height (in lines)"
    commentAreaRows: "Wotè zòn kòmantè (nan liy)",
    // "Auto-expand text areas"
    autoGrowComment: "Oto-agrandi zòn tèks yo",
    // "Allow users to resize text areas"
    allowResizeComment: "Pèmèt itilizatè yo redimansyonman zòn tèks yo",
    // "Update input field values"
    textUpdateMode: "Mete ajou valè jaden antre yo",
    // "Input mask type"
    maskType: "Antre kalite mask",
    // "Set focus on the first invalid answer"
    autoFocusFirstError: "Mete konsantre sou premye repons ki pa valab",
    // "Run validation"
    checkErrorsMode: "Kouri validation",
    // "Validate empty fields on lost focus"
    validateVisitedEmptyFields: "Valide jaden vid sou konsantre pèdi",
    // "Redirect to an external link after submission"
    navigateToUrl: "Redireksyon nan yon lyen ekstèn apre soumèt",
    // "Dynamic external link"
    navigateToUrlOnCondition: "Lyen ekstèn dinamik",
    // "Markup to show if the user already filled out this survey"
    completedBeforeHtml: "Mak pou montre si itilizatè a te deja ranpli sondaj sa a",
    // "\"Thank You\" page markup"
    completedHtml: "Marke paj \"Mèsi\".",
    // "Dynamic \"Thank You\" page markup"
    completedHtmlOnCondition: "Koleksyon dinamik paj \"Mèsi\".",
    // "Markup to show while survey model is loading"
    loadingHtml: "Mak pou montre pandan modèl sondaj la ap chaje",
    // "Comment area text"
    commentText: "Tèks zòn kòmantè",
    // "Autocomplete type"
    autocomplete: "Kalite Autocomplete",
    // "Label for \"True\""
    labelTrue: "Mete etikèt sou \"Vre\"",
    // "Label for \"False\""
    labelFalse: "Mete etikèt sou \"Fo\"",
    // "Show the Clear button"
    allowClear: "Montre bouton an klè",
    // "Search Mode"
    searchMode: "Mode rechèch",
    // "Display format"
    displayStyle: "Fòma ekspozisyon",
    // "Formatted string"
    format: "Fòma fisèl",
    // "Maximum fractional digits"
    maximumFractionDigits: "Chif fraksyon maksimòm",
    // "Minimum fractional digits"
    minimumFractionDigits: "Chif fraksyon minimòm",
    // "Display grouping separators"
    useGrouping: "Montre gwoupman séparateurs",
    // "Enable multiple file upload"
    allowMultiple: "Pèmèt telechaje fichye miltip",
    // "Preview uploaded images"
    allowImagesPreview: "Preview imaj telechaje yo",
    // "Accepted file types"
    acceptedTypes: "Aksepte kalite dosye",
    // "Wait for upload to complete"
    waitForUpload: "Rete tann pou telechaje yo fini",
    // "Confirm file deletion"
    needConfirmRemoveFile: "Konfime efase fichye a",
    // "Row details alignment"
    detailPanelMode: "Aliyman ekspansyon ranje",
    // "Minimum row count"
    minRowCount: "Konte minimòm ranje",
    // "Maximum row count"
    maxRowCount: "Konte maksimòm ranje",
    // "Confirm row removal"
    confirmDelete: "Konfime efase ranje",
    // "Confirmation message"
    confirmDeleteText: "Mesaj konfimasyon",
    // "Initial number of entries"
    panelCount: "Inisyal konte panèl",
    // "Minimum number of entries"
    minPanelCount: "Kantite minimòm panèl",
    // "Maximum number of entries"
    maxPanelCount: "Kantite maksimòm panèl",
    // "Initial entry state"
    panelsState: "Eta panèl enteryè tonbe",
    // "\"Previous Entry\" button text"
    prevPanelText: "Tèks bouton \"Previous Panel\".",
    // "\"Next Entry\" button text"
    nextPanelText: "Tèks bouton \"Next Panel\".",
    // "\"Remove Entry\" button alignment"
    removePanelButtonLocation: "Aliyman bouton \"Retire Panel\".",
    // "Hide the question if it has no rows"
    hideIfRowsEmpty: "Kache kesyon an si li pa gen ranje",
    // "Hide columns if there are no rows"
    hideColumnsIfEmpty: "Kache kolòn si pa gen ranje",
    // "Custom rating values"
    rateValues: "Valè evalyasyon koutim",
    // "Rating count"
    rateCount: "Kantite evalyasyon",
    // "Rating configuration"
    autoGenerate: "Evalyasyon konfigirasyon",
    slider: {
      // [Auto-translated] "Min value"
      min: "Valè min",
      // [Auto-translated] "Max value"
      max: "Valè maks",
      // [Auto-translated] "Step value"
      step: "Valè etap",
      // [Auto-translated] "Show scale labels"
      showLabels: "Montre etikèt echèl",
      // [Auto-translated] "Show tooltips"
      tooltipVisibility: "Montre zouti",
      // [Auto-translated] "Allow thumb crossing"
      allowSwap: "Pèmèt travèse gwo pous",
      // [Auto-translated] "Number of auto-generated labels"
      labelCount: "Nimewo nan etikèt oto-pwodwi",
      // [Auto-translated] "Min value expression"
      minValueExpression: "Min ekspresyon",
      // [Auto-translated] "Max value expression"
      maxValueExpression: "Max ekspresyon valè",
      // [Auto-translated] "Scale labels configuration"
      autoGenerate: "Echèl etikèt konfigirasyon",
      // [Auto-translated] "Slider type"
      sliderType: "kalite koulis",
      // [Auto-translated] "Min range length"
      minRangeLength: "Longè ranje min",
      // [Auto-translated] "Max range length"
      maxRangeLength: "Max ranje longè",
      // [Auto-translated] "Custom labels"
      customLabels: "Etikèt koutim",
      // [Auto-translated] "Label format"
      labelFormat: "Fòma etikèt",
      // [Auto-translated] "Tooltip format"
      tooltipFormat: "Fòma zouti"
    },
    file: {
      // [Auto-translated] "Image height"
      imageHeight: "Wotè imaj",
      // [Auto-translated] "Image width"
      imageWidth: "Lajè imaj"
    },
    // "Hide the question if it has no choices"
    hideIfChoicesEmpty: "Kache kesyon an si li pa gen chwa",
    // "Minimum width"
    minWidth: "Lajè minimòm",
    // "Maximum width"
    maxWidth: "Maksimòm lajè",
    // "Width"
    width: "Lajè",
    // "Show column headers"
    showHeader: "Montre tèt kolòn yo",
    // "Show horizontal scrollbar"
    horizontalScroll: "Montre defile orizontal",
    // "Minimum column width"
    columnMinWidth: "Lajè kolòn minimòm",
    // "Row header width"
    rowTitleWidth: "Lajè header ranje",
    // "Value to store when \"True\" is selected"
    valueTrue: "Valè pou sere lè yo chwazi \"Vrè\".",
    // "Value to store when \"False\" is selected"
    valueFalse: "Valè pou sere lè yo chwazi \"False\".",
    // "\"Value is below minimum\" error message"
    minErrorText: "Mesaj erè \"Valè pi ba pase minimòm\".",
    // "\"Value exceeds maximum\" error message"
    maxErrorText: "Mesaj erè \"Valè depase maksimòm\".",
    // "\"Empty comment\" error message"
    otherErrorText: "Mesaj erè \"Komantè vid\".",
    // "Error message for duplicate responses"
    keyDuplicationError: "Mesaj erè pou repons doub",
    // "Minimum choices to select"
    minSelectedChoices: "Chwa minimòm pou chwazi",
    // "Maximum choices to select"
    maxSelectedChoices: "Chwa maksimòm pou chwazi",
    // "Logo width"
    logoWidth: "Lajè logo",
    // "Logo height"
    logoHeight: "Wotè logo",
    // "Read-only"
    readOnly: "Lekti sèlman",
    // "Disable the read-only mode if"
    enableIf: "Enfim mòd lekti sèlman si",
    // "\"No rows\" message"
    noRowsText: "Mesaj \"Pa gen ranje\".",
    // "Separate special choices"
    separateSpecialChoices: "Separe chwa espesyal yo",
    // "Copy choices from the following question"
    choicesFromQuestion: "Kopi chwa nan kesyon sa a",
    // "Which choice options to copy"
    choicesFromQuestionMode: "Ki chwa chwa pou kopye",
    // "Use values from the following matrix column or panel question as choice IDs"
    choiceValuesFromQuestion: "Sèvi ak valè nan kolòn matris sa a oswa kesyon panèl la kòm idantite chwa",
    // "Use values from the following matrix column or panel question as choice texts"
    choiceTextsFromQuestion: "Sèvi ak valè nan kolòn matris sa a oswa kesyon panèl la kòm tèks chwa",
    // "Display page titles in the progress bar"
    progressBarShowPageTitles: "Montre tit paj nan ba pwogrè a",
    // "Display page numbers in the progress bar"
    progressBarShowPageNumbers: "Montre nimewo paj nan ba pwogrè a",
    // "Add a comment box"
    showCommentArea: "Ajoute yon bwat kòmantè",
    // "Placeholder text for the comment box"
    commentPlaceholder: "Tèks anplasman pou bwat kòmantè a",
    // "Show the labels as extreme values"
    displayRateDescriptionsAsExtremeItems: "Montre etikèt yo kòm valè ekstrèm",
    // "Row order"
    rowOrder: "Lòd ranje",
    // "Column layout"
    columnsLayout: "Layout kolòn",
    // "Nested column count"
    columnColCount: "Konte kolòn nich",
    // "Correct Answer"
    correctAnswer: "Repons kòrèk",
    // "Default Values"
    defaultPanelValue: "Valè Default",
    // "Cell Texts"
    cells: "Tèks selil yo",
    // "Select a file or paste a file link..."
    fileInputPlaceholder: "Chwazi yon fichye oswa kole yon lyen dosye...",
    // "Prevent duplicate responses in the following column"
    keyName: "Anpeche repons doub nan kolòn sa a",
    itemvalue: {
      // "Make the option visible if"
      visibleIf: "Fè opsyon a vizib si",
      // "Make the option selectable if"
      enableIf: "Fè opsyon a chwazi si"
    },
    "itemvalue@rows": {
      // "Make the row visible if"
      visibleIf: "Fè ranje a vizib si",
      // "Make the row editable if"
      enableIf: "Fè ranje a editable si"
    },
    imageitemvalue: {
      // "Alt text"
      text: "Alt tèks"
    },
    // "Logo alignment"
    logoPosition: "Logo aliyman",
    // "Add logo..."
    addLogo: "Ajoute logo...",
    // "Change logo..."
    changeLogo: "Chanje logo...",
    logoPositions: {
      // "Remove logo"
      none: "Retire logo",
      // "Left"
      left: "Goch",
      // "Right"
      right: "Dwa",
      // "On the top"
      top: "Sou tèt la",
      // "In the bottom"
      bottom: "Nan pati anba a"
    },
    // "Preview mode"
    previewMode: "Aperçu mòd",
    // "Enable grid layout"
    gridLayoutEnabled: "Pèmèt Layout kadriyaj",
    // "Grid columns"
    gridLayoutColumns: "Kolòn kadriyaj",
    // "Mask settings"
    maskSettings: "Anviwònman mask",
    // "Row details error message alignment"
    detailErrorLocation: "Ranje ekspansyon mesaj erè aliyman",
    // Creator tabs
    tabs: {
      panel: {
        // "Panel Layout"
        layout: "Layout panèl"
      },
      // "General"
      general: "Jeneral",
      // "Options"
      fileOptions: "Opsyon",
      // "HTML Editor"
      html: "Editè HTML",
      // "Columns"
      columns: "Kolòn",
      // "Rows"
      rows: "Ranje",
      // "Choice Options"
      choices: "Opsyon Chwa",
      // "Items"
      items: "Atik",
      // "Visible If"
      visibleIf: "Vizib Si",
      // "Editable If"
      enableIf: "Editab Si",
      // "Required If"
      requiredIf: "Obligatwa Si",
      // "Rating Values"
      rateValues: "Valè Rating",
      // [Auto-translated] "Slider Settings"
      sliderSettings: "Anviwònman koulis",
      // "Choices from a Web Service"
      choicesByUrl: "Chwa nan yon sèvis entènèt",
      // "Default Choices"
      matrixChoices: "Chwa Default",
      // "Text Inputs"
      multipleTextItems: "Antre tèks",
      // "Numbering"
      numbering: "Nimerasyon",
      // "Validators"
      validators: "Validatè",
      // "Navigation"
      navigation: "Navigasyon",
      // "Question Settings"
      question: "Anviwònman kesyon yo",
      // "Pages"
      pages: "Paj",
      // "Quiz Mode"
      timer: "Mòd egzamen",
      // "Calculated Values"
      calculatedValues: "Valè Kalkile",
      // "Triggers"
      triggers: "Deklanche",
      // "Title template"
      templateTitle: "Modèl Tit",
      // "Totals"
      totals: "Total",
      // "Conditions"
      logic: "Kondisyon yo",
      // "Input Mask Settings"
      mask: "Antre Anviwònman Mask",
      layout: {
        // "Panel Layout"
        panel: "Layout panèl",
        // "Layout"
        question: "Layout",
        // "Layout"
        base: "Layout"
      },
      // "Data"
      data: "Done",
      // "Validation"
      validation: "Validasyon",
      // "Individual Cell Texts"
      cells: "Tèks selil endividyèl yo",
      // "\"Thank You\" Page"
      showOnCompleted: "Paj \"Mèsi\".",
      // "Logo in the Survey Header"
      logo: "Logo nan Header Sondaj la",
      // "Slider"
      slider: "Kurseur",
      // "Expression"
      expression: "Ekspresyon",
      // "Question Settings"
      questionSettings: "Anviwònman kesyon yo",
      // "Header"
      header: "Tèt",
      // "Background"
      background: "Jan nou koumanse",
      // "Appearance"
      appearance: "Aparans",
      // "Accent colors"
      accentColors: "Koulè aksan",
      // "Surface background"
      surfaceBackground: "Fond sifas",
      // "Scaling"
      scaling: "Eskalad",
      // "Others"
      others: "Lòt moun"
    },
    // "Edit property '{0}'"
    editProperty: "Edit pwopriyete '{0}'",
    // "Items"
    items: "Atik",
    // "Make choices visible if"
    choicesVisibleIf: "Fè chwa vizib si",
    // "Make choices selectable if"
    choicesEnableIf: "Fè chwa sélectionnable si",
    // "Make columns visible if"
    columnsEnableIf: "Fè kolòn vizib si",
    // "Make rows visible if"
    rowsEnableIf: "Fè ranje vizib si",
    // "Increase the inner indent"
    innerIndent: "Ogmante endentasyon anndan an",
    // "Use answers from the last entry as default"
    copyDefaultValueFromLastEntry: "Sèvi ak repons ki soti nan dènye antre a kòm default",
    // "Please enter a value."
    enterNewValue: "Tanpri antre yon valè.",
    // "There are no questions in the survey."
    noquestions: "Pa gen okenn kesyon nan sondaj la.",
    // "Please create a trigger"
    createtrigger: "Tanpri kreye yon deklanche",
    // "Press enter button to edit"
    titleKeyboardAdornerTip: "Peze bouton antre pou edite",
    // "Press enter button to edit item, press delete button to delete item, press alt plus arrow up or arrow down to move item"
    keyboardAdornerTip: "Peze bouton antre pou modifye atik, peze bouton efase pou efase atik, peze alt plis flèch anlè oswa flèch desann pou deplase atik la.",
    // "On "
    triggerOn: "Sou",
    // "Make pages visible"
    triggerMakePagesVisible: "Fè paj vizib",
    // "Make elements visible"
    triggerMakeQuestionsVisible: "Fè eleman vizib",
    // "Complete the survey if successful."
    triggerCompleteText: "Ranpli sondaj la si w reyisi.",
    // "The trigger is not set"
    triggerNotSet: "Deklanche a pa mete",
    // "Run if"
    triggerRunIf: "Kouri si",
    // "Change value of: "
    triggerSetToName: "Chanje valè:",
    // "Copy value from: "
    triggerFromName: "Kopi valè soti nan:",
    // "Run this Expression"
    triggerRunExpression: "Kouri ekspresyon sa a",
    // "to: "
    triggerSetValue: "pou:",
    // "Go to the question"
    triggerGotoName: "Ale nan kesyon an",
    // "Do not put the variable into the survey result."
    triggerIsVariable: "Pa mete varyab la nan rezilta sondaj la.",
    // "Please enter a valid expression"
    triggerRunExpressionEmpty: "Tanpri antre yon ekspresyon ki valab",
    // "Type expression here..."
    emptyExpressionPlaceHolder: "Tape ekspresyon isit la...",
    // "No file chosen"
    noFile: "Pa gen fichye chwazi",
    // "Clear hidden question values"
    clearIfInvisible: "Klè valè kesyon kache yo",
    // "Store values in the following property"
    valuePropertyName: "Sere valè nan pwopriyete sa a",
    // "Enable search-as-you-type"
    searchEnabled: "Pèmèt rechèch-jan-ou-tape",
    // "Hide selected items"
    hideSelectedItems: "Kache atik yo chwazi yo",
    // "Collapse the dropdown upon selection"
    closeOnSelect: "Ranpli deroule a lè seleksyon an",
    // "Vertical alignment within cells"
    verticalAlign: "Aliyman vètikal nan selil yo",
    // "Alternate row colors"
    alternateRows: "Altène koulè ranje",
    // "Make columns visible if"
    columnsVisibleIf: "Fè kolòn vizib si",
    // "Make rows visible if"
    rowsVisibleIf: "Fè ranje vizib si",
    // "Placeholder text for the comment box"
    otherPlaceholder: "Tèks anplasman pou bwat kòmantè a",
    // "Placeholder text for Local file"
    filePlaceholder: "Tèks anplasman pou dosye lokal",
    // "Placeholder text for Camera"
    photoPlaceholder: "Tèks anplasman pou Kamera",
    // "Placeholder text for Local file or Camera"
    fileOrPhotoPlaceholder: "Tèks anplasman pou dosye lokal oswa kamera",
    // "Rating icon"
    rateType: "Evalyasyon icon",
    // "Ex.: https://api.example.com/books"
    url_placeholder: "Egz.: https://api.example.com/books",
    // "Ex.: categories.fiction"
    path_placeholder: "Egz.: kategori.fiksyon",
    // "Ex.: a)"
    questionStartIndex_placeholder: "Egz.: a)",
    // "Ex.: 6in"
    width_placeholder: "Egz.: 6 pous",
    // "Ex.: 600px"
    minWidth_placeholder: "Egz.: 600px",
    // "Ex.: 50%"
    maxWidth_placeholder: "Egz.: 50%",
    // "auto"
    imageHeight_placeholder: "oto",
    // "auto"
    imageWidth_placeholder: "oto",
    // "Ex.: 100px"
    itemTitleWidth_placeholder: "Egz.: 100px",
    theme: {
      // "Theme"
      themeName: "Tèm",
      // "Question appearance"
      isPanelless: "Kesyon aparans",
      // "Background and corner radius"
      editorPanel: "Background ak reyon kwen",
      // "Background and corner radius"
      questionPanel: "Background ak reyon kwen",
      // "Accent color"
      primaryColor: "Koulè aksan",
      // "Panel and question box opacity"
      panelBackgroundTransparency: "Panel ak bwat kesyon opakite",
      // "Input element opacity"
      questionBackgroundTransparency: "Opakite eleman antre",
      // "Survey font size"
      fontSize: "Gwosè font sondaj",
      // "Survey scale factor"
      scale: "Faktè echèl sondaj la",
      // "Corner radius"
      cornerRadius: "Reyon kwen",
      // "Advanced mode"
      advancedMode: "Mòd avanse",
      // "Title font"
      pageTitle: "Font Tit",
      // "Description font"
      pageDescription: "Deskripsyon font",
      // "Title font"
      questionTitle: "Font Tit",
      // "Description font"
      questionDescription: "Deskripsyon font",
      // "Font"
      editorFont: "Font",
      // "Opacity"
      backgroundOpacity: "Opakite", // Auto-generated string
      // "Survey font family"
      "--sjs-font-family": "Fanmi font sondaj",
      // "Background color"
      "--sjs-general-backcolor-dim": "Koulè background",
      // "Accent background colors"
      "--sjs-primary-backcolor": "Aksan koulè background",
      // "Accent foreground colors"
      "--sjs-primary-forecolor": "Aksan koulè premye plan",
      // "Error message colors"
      "--sjs-special-red": "Koulè mesaj erè",
      // "Shadow effects"
      "--sjs-shadow-small": "Efè lonbraj",
      // "Shadow effects"
      "--sjs-shadow-inner": "Efè lonbraj",
      // "Colors"
      "--sjs-border-default": "Koulè"
    },
    "header@header": {
      // "View"
      headerView: "Gade",
      // "Logo alignment"
      logoPosition: "Logo aliyman",
      // "Survey title font"
      surveyTitle: "Font tit sondaj la",
      // "Survey description font"
      surveyDescription: "Polis deskripsyon sondaj la",
      // "Survey title font"
      headerTitle: "Font tit sondaj la",
      // "Survey description font"
      headerDescription: "Polis deskripsyon sondaj la",
      // "Content area width"
      inheritWidthFrom: "Lajè zòn kontni",
      // "Text width"
      textAreaWidth: "Lajè tèks",
      // "Background color"
      backgroundColorSwitch: "Koulè background",
      // "Background image"
      backgroundImage: "Imaj background",
      // "Opacity"
      backgroundImageOpacity: "Opakite",
      // "Overlap"
      overlapEnabled: "Sipèpoze",
      // "Logo alignment"
      logoPositionX: "Logo aliyman",
      // "Survey title alignment"
      titlePositionX: "Aliyman tit sondaj la",
      // "Survey description alignment"
      descriptionPositionX: "Sondaj deskripsyon aliyman"
    }
  },
  // Property values
  pv: {
    // "true"
    "true": "vre",
    // "false"
    "false": "fo",
    // "Local file"
    file: "Dosye lokal la",
    // "Camera"
    camera: "Kamera",
    // "Local file or Camera"
    "file-camera": "Dosye lokal oswa Kamera",
    // "Inherit"
    inherit: "Eritye",
    // "Visible"
    show: "Vizib",
    // "Hidden"
    hide: "Kache",
    // "Inherit"
    default: "Eritye",
    // "Initial"
    initial: "Inisyal",
    // "Random"
    random: "O aza",
    // "Collapsed"
    collapsed: "Efondre",
    // "Expanded"
    expanded: "Elaji",
    // "None"
    none: "Okenn",
    // "Ascending"
    asc: "Asandan",
    // "Descending"
    desc: "Desandan",
    // "Indeterminate"
    indeterminate: "Endetèmine",
    // "Selected"
    selected: "Chwazi",
    // "Unselected"
    unselected: "Pa seleksyone",
    // "decimal"
    decimal: "desimal",
    // "currency"
    currency: "lajan",
    // "percent"
    percent: "pousan",
    // "First panel is expanded"
    firstExpanded: "Premye panèl agrandi",
    // "Hide question numbers"
    off: "Kache nimewo kesyon yo",
    // "List"
    list: "Lis",
    // "Carousel"
    carousel: "Carousel",
    // "Tabs"
    tab: "Tabs",
    // "Panel navigator + Progress bar at the top"
    progressTop: "Panel navigatè + ba pwogrè nan tèt la",
    // "Panel navigator + Progress bar at the bottom"
    progressBottom: "Panel navigatè + Pwogrè ba nan pati anba a",
    // "Panel navigator + Progress bar at the top and bottom"
    progressTopBottom: "Navigatè Panel + Ba Pwogrè nan tèt ak anba",
    // "Horizontal"
    horizontal: "Orizontal",
    // "Vertical"
    vertical: "Vètikal",
    // "Top"
    top: "Top",
    // "Bottom"
    bottom: "Anba",
    // "Top and bottom"
    topBottom: "Anlè ak anba",
    // "Both"
    both: "Tou de",
    // "Left"
    left: "Goch",
    // "Right"
    right: "Dwa",
    // "Center"
    center: "Sant",
    // "Left and right"
    leftRight: "Goch ak dwa",
    // "Middle"
    middle: "Mwayen",
    // "color"
    color: "koulè",
    // "date"
    date: "dat",
    // "datetime"
    datetime: "dat lè",
    // "datetime-local"
    "datetime-local": "dattime-lokal",
    // "email"
    email: "imel",
    // "month"
    month: "mwa",
    // "number"
    number: "nimewo",
    // "password"
    password: "modpas",
    // "range"
    range: "ranje",
    // "tel"
    tel: "tel",
    // "text"
    text: "tèks",
    // "time"
    time: "tan",
    // "url"
    url: "url",
    // "week"
    week: "semèn",
    // "Hidden"
    hidden: "Kache",
    // "Editable"
    edit: "Editabl",
    // "Read-only"
    display: "Lekti sèlman",
    // "Contain"
    contain: "Genyen",
    // "Cover"
    cover: "Kouvri",
    // "Fill"
    fill: "Ranpli",
    // "Next"
    next: "Pwochen",
    // "Last"
    last: "Denye",
    // "Upon survey completion"
    onComplete: "Lè sondaj fini",
    // "When question gets hidden"
    onHidden: "Lè kesyon vin kache",
    // "When question or its panel/page gets hidden"
    onHiddenContainer: "Lè kesyon oswa panèl/paj li yo vin kache",
    clearInvisibleValues: {
      // "Never"
      none: "Pa janm"
    },
    clearIfInvisible: {
      // "Never"
      none: "Pa janm"
    },
    // [Auto-translated] "Radio Buttons"
    radio: "Bouton radyo",
    inputType: {
      // "Color"
      color: "Koulè",
      // "Date"
      date: "Dat",
      // "Date and Time"
      "datetime-local": "Dat ak Lè",
      // "Email"
      email: "Imèl",
      // "Month"
      month: "Mwa",
      // "Number"
      number: "Nimewo",
      // "Password"
      password: "Modpas",
      // "Range"
      range: "Range",
      // "Phone Number"
      tel: "Nimewo Telefòn",
      // "Text"
      text: "Tèks",
      // "Time"
      time: "Tan",
      // "URL"
      url: "URL",
      // "Week"
      week: "Semèn"
    },
    sliderType: {
      // [Auto-translated] "Single-Value"
      single: "Yon sèl-Valè",
      // [Auto-translated] "Range"
      range: "Pòte"
    },
    notificationType: {
      // [Auto-translated] "Error"
      error: "Erè",
      // [Auto-translated] "Warning"
      warning: "Avètisman",
      // [Auto-translated] "Informational note"
      info: "Nòt enfòmasyon"
    },
    autocomplete: {
      // "Full Name"
      name: "Non konplè",
      // "Prefix"
      "honorific-prefix": "Prefiks",
      // "First Name"
      "given-name": "Premye Non",
      // "Middle Name"
      "additional-name": "Mwayen Non",
      // "Last Name"
      "family-name": "Siyati",
      // "Suffix"
      "honorific-suffix": "Sifiks",
      // "Nickname"
      nickname: "Ti non",
      // "Job Title"
      "organization-title": "Tit travay",
      // "User Name"
      username: "Non itilizatè",
      // "New Password"
      "new-password": "Nouvo Modpas",
      // "Current Password"
      "current-password": "Modpas aktyèl la",
      // "Organization Name"
      organization: "Non òganizasyon an",
      // "Full Street Address"
      "street-address": "Adrès Ri konplè",
      // "Address Line 1"
      "address-line1": "Liy adrès 1",
      // "Address Line 2"
      "address-line2": "Liy adrès 2",
      // "Address Line 3"
      "address-line3": "Liy adrès 3",
      // "Level 4 Address"
      "address-level4": "Adrès Nivo 4",
      // "Level 3 Address"
      "address-level3": "Adrès Nivo 3",
      // "Level 2 Address"
      "address-level2": "Adrès Nivo 2",
      // "Level 1 Address"
      "address-level1": "Adrès Nivo 1",
      // "Country Code"
      country: "Kòd Peyi",
      // "Country Name"
      "country-name": "Non Peyi a",
      // "Postal Code"
      "postal-code": "Kòd Postal",
      // "Cardholder Name"
      "cc-name": "Non moun ki gen kat la",
      // "Cardholder First Name"
      "cc-given-name": "Non moun ki gen kat la",
      // "Cardholder Middle Name"
      "cc-additional-name": "Mwayen Non Titular Kat la",
      // "Cardholder Last Name"
      "cc-family-name": "Non moun ki gen kat la",
      // "Credit Card Number"
      "cc-number": "Nimewo Kat Kredi",
      // "Expiration Date"
      "cc-exp": "Dat ekspirasyon",
      // "Expiration Month"
      "cc-exp-month": "Mwa ekspirasyon",
      // "Expiration Year"
      "cc-exp-year": "Ane ekspirasyon",
      // "Card Security Code"
      "cc-csc": "Kòd Sekirite Kat",
      // "Credit Card Type"
      "cc-type": "Kalite kat kredi",
      // "Transaction Currency"
      "transaction-currency": "Tranzaksyon Lajan",
      // "Transaction Amount"
      "transaction-amount": "Kantite Tranzaksyon",
      // "Preferred Language"
      language: "Lang Prefere",
      // "Birthday"
      bday: "anivèsè nesans",
      // "Birthday Day"
      "bday-day": "Jou anivèsè nesans",
      // "Birthday Month"
      "bday-month": "Mwa anivèsè nesans",
      // "Birthday Year"
      "bday-year": "Ane anivèsè nesans",
      // "Gender"
      sex: "Sèks",
      // "Website URL"
      url: "URL sit entènèt",
      // "Profile Photo"
      photo: "Foto pwofil",
      // "Telephone Number"
      tel: "Nimewo Telefòn",
      // "Country Code for Phone"
      "tel-country-code": "Kòd Peyi pou Telefòn",
      // "National Telephone Number"
      "tel-national": "Nimewo Telefòn Nasyonal",
      // "Area Code"
      "tel-area-code": "Kòd zòn",
      // "Local Phone Number"
      "tel-local": "Nimewo Telefòn lokal",
      // "Local Phone Prefix"
      "tel-local-prefix": "Prefiks telefòn lokal yo",
      // "Local Phone Suffix"
      "tel-local-suffix": "Sifiks telefòn lokal yo",
      // "Phone Extension"
      "tel-extension": "Ekstansyon Telefòn",
      // "Email Address"
      email: "Adrès Imèl",
      // "Instant Messaging Protocol"
      impp: "Pwotokòl Instant Messaging"
    },
    maskType: {
      // "None"
      none: "Okenn",
      // "Pattern"
      pattern: "Modèl",
      // "Numeric"
      numeric: "Nimerik",
      // "Date and Time"
      datetime: "Dat ak Lè",
      // "Currency"
      currency: "Lajan"
    },
    inputTextAlignment: {
      // "Auto"
      auto: "Oto",
      // "Left"
      left: "Goch",
      // "Right"
      right: "Dwa"
    },
    // "All"
    all: "Tout",
    // "Page"
    page: "Paj",
    // "Survey"
    survey: "Sondaj",
    // "When switching to the next page"
    onNextPage: "Lè w ap chanje nan pwochen paj la",
    // "After an answer is changed"
    onValueChanged: "Apre yon repons chanje",
    // "Before an answer is changed"
    onValueChanging: "Anvan yon repons chanje",
    questionsOnPageMode: {
      // "Original structure"
      standard: "Estrikti orijinal la",
      // "Show all questions on one page"
      singlePage: "Montre tout kesyon sou yon paj",
      // "Show single question per page"
      questionPerPage: "Montre yon sèl kesyon pou chak paj",
      // [Auto-translated] "Show single input field per page"
      inputPerPage: "Montre jaden sèl pou chak paj"
    },
    // "No preview"
    noPreview: "Pa gen preview",
    // "Show all questions"
    showAllQuestions: "Montre tout kesyon yo",
    // "Show answered questions only"
    showAnsweredQuestions: "Montre kesyon repons yo sèlman",
    // "Show all questions"
    allQuestions: "Montre tout kesyon yo",
    // "Show answered questions only"
    answeredQuestions: "Montre kesyon repons yo sèlman",
    // "Completed pages"
    pages: "Paj ranpli",
    // "Answered questions"
    questions: "Kesyon reponn",
    // "Answered required questions"
    requiredQuestions: "Reponn kesyon obligatwa yo",
    // "Valid answers"
    correctQuestions: "Repons valab",
    // "Completed pages (button UI)"
    buttons: "Paj ranpli (bouton UI)",
    // "Under the input field"
    underInput: "Anba jaden an opinyon",
    // "Under the question title"
    underTitle: "Anba tit kesyon an",
    // "On lost focus"
    onBlur: "Sou konsantre pèdi",
    // "While typing"
    onTyping: "Pandan w ap tape",
    // "Under the row"
    underRow: "Anba ranje a",
    // "Under the row, display one section only"
    underRowSingle: "Anba ranje a, montre yon sèl ekspansyon ranje sèlman",
    // "Auto"
    auto: "Oto",
    showNavigationButtons: {
      // "Hidden"
      none: "Kache"
    },
    timerInfoMode: {
      // "Both"
      combined: "Tou de"
    },
    addRowButtonLocation: {
      // "Based on matrix layout"
      default: "Ki baze sou layout matris"
    },
    panelsState: {
      // "Locked"
      default: "Fèmen",
      // "Collapse all"
      collapsed: "Tonbe tout",
      // "Expand all"
      expanded: "Elaji tout",
      // "First expanded"
      firstExpanded: "Premye elaji"
    },
    widthMode: {
      // "Static"
      static: "Estatik",
      // "Responsive"
      responsive: "Reponn"
    },
    contentMode: {
      // "Image"
      image: "Imaj",
      // "Video"
      video: "Videyo",
      // "YouTube"
      youtube: "YouTube"
    },
    displayMode: {
      // "Buttons"
      buttons: "Bouton",
      // "Dropdown"
      dropdown: "depoze"
    },
    rateColorMode: {
      // "Default"
      default: "Defo",
      // "Scale"
      scale: "Echèl"
    },
    scaleColorMode: {
      // "Monochrome"
      monochrome: "Monokrom",
      // "Colored"
      colored: "Koulè"
    },
    autoGenerate: {
      // "Auto-generate"
      "true": "Oto-jenere",
      // "Manual"
      "false": "Manyèl"
    },
    rateType: {
      // "Labels"
      labels: "Etikèt",
      // "Stars"
      stars: "Zetwal",
      // "Smileys"
      smileys: "Smie"
    },
    state: {
      // "Locked"
      default: "Fèmen"
    },
    showQuestionNumbers: {
      // "Auto-numbering"
      default: "Oto-nimero",
      // "Auto-numbering"
      on: "Oto-nimero",
      // "Reset on each page"
      onPage: "Reyajiste sou chak paj",
      // "Reset on each panel"
      onpanel: "Reyajiste sou chak panèl",
      // "Reset on each panel"
      onPanel: "Reyajiste sou chak panèl",
      // "Recursive numbering"
      recursive: "Nimero rekursif",
      // "Continue across the survey"
      onSurvey: "Kontinye atravè sondaj la",
      // "No numbering"
      off: "Pa gen nimero"
    },
    descriptionLocation: {
      // "Under the question title"
      underTitle: "Anba tit kesyon an",
      // "Under the input field"
      underInput: "Anba jaden an opinyon"
    },
    selectToRankAreasLayout: {
      // "Next to choices"
      horizontal: "Akote chwa yo",
      // "Above choices"
      vertical: "Pi wo pase chwa yo"
    },
    displayStyle: {
      // "Decimal"
      decimal: "Desimal",
      // "Currency"
      currency: "Lajan",
      // "Percentage"
      percent: "Pousantaj",
      // "Date"
      date: "Dat"
    },
    totalDisplayStyle: {
      // "Decimal"
      decimal: "Desimal",
      // "Currency"
      currency: "Lajan",
      // "Percentage"
      percent: "Pousantaj",
      // "Date"
      date: "Dat"
    },
    rowOrder: {
      // "Original"
      initial: "Orijinal"
    },
    questionOrder: {
      // "Original"
      initial: "Orijinal"
    },
    progressBarLocation: {
      // "Top"
      top: "Tèt",
      // "Bottom"
      bottom: "Anba",
      // "Top and bottom"
      topbottom: "Anlè ak anba",
      // "Above the header"
      aboveheader: "Anwo tèt la",
      // "Below the header"
      belowheader: "Anba tèt la",
      // "Hidden"
      off: "Kache"
    },
    // "Sum"
    sum: "Sòm",
    // "Count"
    count: "Konte",
    // "Min"
    min: "Min",
    // "Max"
    max: "Max",
    // "Avg"
    avg: "Mwayèn",
    searchMode: {
      // "Contains"
      contains: "Gen ladann",
      // "Starts with"
      startsWith: "Kòmanse ak"
    },
    backgroundImageFit: {
      // "Auto"
      auto: "Oto",
      // "Cover"
      cover: "Kouvri",
      // "Contain"
      contain: "Genyen",
      // "Stretch"
      fill: "Detire",
      // "Tile"
      tile: "Mozayik"
    },
    backgroundImageAttachment: {
      // "Fixed"
      fixed: "Fiks",
      // "Scroll"
      scroll: "Scroll"
    },
    headerView: {
      // "Basic"
      basic: "Debaz",
      // "Advanced"
      advanced: "Avanse"
    },
    inheritWidthFrom: {
      // "Same as survey"
      survey: "Menm jan ak sondaj",
      // "Same as container"
      container: "Menm jan ak veso"
    },
    backgroundColorSwitch: {
      // "None"
      none: "Okenn",
      // "Accent color"
      accentColor: "Koulè aksan",
      // "Custom"
      custom: "Custom"
    },
    colorPalette: {
      // "Light"
      light: "Limyè",
      // "Dark"
      dark: "Fè nwa"
    },
    isPanelless: {
      // "Default"
      "false": "Defo",
      // "Without Panels"
      "true": "San Panno"
    },
    progressBarInheritWidthFrom: {
      // "Same as survey"
      survey: "Menm jan ak sondaj",
      // "Same as container"
      container: "Menm jan ak veso"
    }
  },
  // Operators
  op: {
    // "Empty"
    empty: "Vide",
    // "Not empty"
    notempty: "Pa vid",
    // "Equals"
    equal: "Egal",
    // "Does not equal"
    notequal: "Pa egal",
    // "Contains"
    contains: "Gen ladann",
    // "Does not contain"
    notcontains: "Pa genyen",
    // "Any of"
    anyof: "Nenpòt nan",
    // "All of"
    allof: "Tout",
    // "Greater than"
    greater: "Pi gran pase",
    // "Less than"
    less: "Mwens pase",
    // "Greater than or equal to"
    greaterorequal: "Pi gran pase oswa egal a",
    // "Less than or equal to"
    lessorequal: "Mwens pase oswa egal a",
    // "and"
    and: "epi",
    // "or"
    or: "oswa"
  },
  // Embed window
  ew: {
    // "Use Angular version"
    angular: "Sèvi ak vèsyon angilè",
    // "Use jQuery version"
    jquery: "Sèvi ak vèsyon jQuery",
    // "Use Knockout version"
    knockout: "Sèvi ak vèsyon knockout",
    // "Use React version"
    react: "Sèvi ak vèsyon React",
    // "Use Vue version"
    vue: "Sèvi ak vèsyon Vue",
    // "For bootstrap framework"
    bootstrap: "Pou fondasyon bootstrap",
    // "Modern theme"
    modern: "Tèm modèn",
    // "Default theme"
    default: "Default tèm",
    // "Orange theme"
    orange: "Tèm zoranj",
    // "Darkblue theme"
    darkblue: "Tèm ble fonse",
    // "Darkrose theme"
    darkrose: "Tèm Darkrose",
    // "Stone theme"
    stone: "Tèm wòch",
    // "Winter theme"
    winter: "Tèm sezon fredi",
    // "Winter-Stone theme"
    winterstone: "Winter-Stone tèm",
    // "Show survey on a page"
    showOnPage: "Montre sondaj sou yon paj",
    // "Show survey in a window"
    showInWindow: "Montre sondaj nan yon fenèt",
    // "Load Survey JSON from server"
    loadFromServer: "Chaje Sondaj JSON soti nan sèvè",
    // "Scripts and styles"
    titleScript: "Scripts ak estil",
    // "HTML"
    titleHtml: "HTML",
    // "JavaScript"
    titleJavaScript: "JavaScript"
  },
  // Preview (Survey)
  ts: {
    // "Select the page to test it"
    selectPage: "Chwazi paj la pou teste li",
    // "Show invisible elements"
    showInvisibleElements: "Montre eleman envizib yo",
    // "Hide invisible elements"
    hideInvisibleElements: "Kache eleman envizib yo",
    // "Previous"
    prevPage: "Anvan yo",
    // "Next"
    nextPage: "Pwochen"
  },
  validators: {
    // "Answer count"
    answercountvalidator: "Konte repons",
    // "Email"
    emailvalidator: "Imèl",
    // "Expression"
    expressionvalidator: "Ekspresyon",
    // "Number"
    numericvalidator: "Nimewo",
    // "Regex"
    regexvalidator: "Regex",
    // "Text"
    textvalidator: "Tèks"
  },
  triggers: {
    // "Complete survey"
    completetrigger: "Ranpli sondaj",
    // "Set answer"
    setvaluetrigger: "Mete repons",
    // "Copy answer"
    copyvaluetrigger: "Kopi repons",
    // "Skip to question"
    skiptrigger: "Ale nan kesyon",
    // "Run expression"
    runexpressiontrigger: "Kouri ekspresyon",
    // "change visibility (deprecated)"
    visibletrigger: "chanje vizibilite (depreche)"
  },
  peplaceholder: {
    patternmask: {
      // "Ex.: +1(999)-999-99-99"
      pattern: "Egz.: +1(999)-999-99-99"
    },
    datetimemask: {
      // "Ex.: mm/dd/yyyy HH:MM:ss"
      pattern: "Egz.: mm/jj/aaaa HH:MM:ss"
    },
    currencymask: {
      // "Ex.: $"
      prefix: "Egz.: $",
      // "Ex.: USD"
      suffix: "Egz.: USD"
    },
    panelbase: {
      // "Ex.: 200px"
      questionTitleWidth: "Egzanp: 200px"
    },
    panellayoutcolumn: {
      // "Ex.: 30%"
      effectiveWidth: "Egz.: 30%",
      // "Ex.: 200px"
      questionTitleWidth: "Egzanp: 200px"
    }
  },
  pehelp: {
    panel: {
      // "A panel ID that is not visible to respondents."
      name: "Yon ID panèl ki pa vizib pou moun ki reponn yo.",
      // "Type a panel subtitle."
      description: "Tape yon sous-titre panèl.",
      // "Use the magic wand icon to set a conditional rule that determines panel visibility."
      visibleIf: "Sèvi ak icon ralonj majik la pou mete yon règ kondisyonèl ki detèmine vizibilite panèl la.",
      // "Use the magic wand icon to set a conditional rule that disables the read-only mode for the panel."
      enableIf: "Sèvi ak icon ralonj majik la pou mete yon règ kondisyonèl ki enfim mòd lekti sèlman pou panèl la.",
      // "Use the magic wand icon to set a conditional rule that prevents survey submission unless at least one nested question has an answer."
      requiredIf: "Sèvi ak icon ralonj majik la pou mete yon règ kondisyonèl ki anpeche soumèt sondaj sof si omwen yon kesyon anbrike gen yon repons.",
      // "Applies to all questions within this panel. When set to \"Hidden\", it also hides question descriptions. If you want to override this setting, define title alignment rules for individual questions. The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Top\" by default). "
      questionTitleLocation: "Aplike pou tout kesyon ki nan panèl sa a. Lè yo mete sou \"Hidden\", li kache tou deskripsyon kesyon yo. Si ou vle chanje paramèt sa a, defini règ aliyman tit pou kesyon endividyèl yo. Opsyon \"Eritye\" aplike nivo paj (si yo mete) oswa nivo sondaj (\"Top\" pa default).",
      // "Sets consistent width for question titles when they are aligned to the left of their question boxes. Accepts CSS values (px, %, in, pt, etc.)."
      questionTitleWidth: "Mete lajè ki konsistan pou tit kesyon yo lè yo aliyen sou bò gòch bwat kesyon yo. Aksepte valè CSS (px, %, in, pt, elatriye).",
      // "Sets the location of an error message in relation to all questions within the panel. The \"Inherit\" option applies the page-level (if set) or survey-level setting."
      questionErrorLocation: "Mete kote yon mesaj erè an relasyon ak tout kesyon ki nan panèl la. Opsyon \"Eritite\" aplike paramèt nivo paj (si yo tabli) oswa nivo sondaj la.",
      // "Keeps the original order of questions or randomizes them. The \"Inherit\" option applies the page-level (if set) or survey-level setting."
      questionOrder: "Kenbe lòd orijinal la nan kesyon oswa randomize yo. Opsyon \"Eritite\" aplike paramèt nivo paj (si yo tabli) oswa nivo sondaj la.",
      // "Repositions the panel to the end of a selected page."
      page: "Repositionne panèl la nan fen yon paj chwazi.",
      // "Adds space or margin between the panel content and the left border of the panel box."
      innerIndent: "Ajoute espas oswa maj ant kontni panèl la ak fwontyè gòch bwat panèl la.",
      // "Unselect to display the panel in one line with the previous question or panel. The setting doesn't apply if the panel is the first element in your form."
      startWithNewLine: "Deseleksyone pou montre panèl la nan yon liy ak kesyon oswa panèl anvan an. Anviwònman an pa aplike si panèl la se premye eleman nan fòm ou a.",
      // "Choose from: \"Expanded\" - the panel is displayed in full and can be collapsed; \"Collapsed\" - the panel displays only the title and description and can be expanded; \"Locked\" - the panel is displayed in full and cannot be collapsed."
      state: "Chwazi nan: \"Elaji\" - panèl la parèt an antye epi yo ka tonbe; \"Efondre\" - panèl la montre sèlman tit la ak deskripsyon epi li ka elaji; \"Kloke\" - panèl la parèt an antye epi yo pa ka tonbe.",
      // "Sets the width of the panel in proportion to other survey elements in the same line. Accepts CSS values (px, %, in, pt, etc.)."
      width: "Mete lajè panèl la an pwopòsyon ak lòt eleman sondaj nan menm liy lan. Aksepte valè CSS (px, %, in, pt, elatriye).",
      // "Assigns numbers to questions nested within this panel."
      showQuestionNumbers: "Bay nimewo pou kesyon ki enbrike nan panèl sa a.",
      // "Specifies how many columns this panel spans within the grid layout."
      effectiveColSpan: "Espesifye konbyen kolòn panèl sa a kouvri nan layout kadriyaj la.",
      // "This table lets you configure each grid column within the panel. It automatically sets the width percentage for each column based on the maximum number of elements in a row. To customize the grid layout, manually adjust these values and define the title width for all questions in each column."
      gridLayoutColumns: "Tablo sa a pèmèt ou konfigirasyon chak kolòn kadriyaj nan panèl la. Li otomatikman fikse pousantaj lajè pou chak kolòn ki baze sou kantite maksimòm eleman nan yon ranje. Pou personnaliser layout kadriyaj la, ajiste valè sa yo manyèlman epi defini lajè tit la pou tout kesyon ki nan chak kolòn."
    },
    paneldynamic: {
      // "A panel ID that is not visible to respondents."
      name: "Yon ID panèl ki pa vizib pou moun ki reponn yo.",
      // "Type a panel subtitle."
      description: "Tape yon sous-titre panèl.",
      // "Use the magic wand icon to set a conditional rule that determines panel visibility."
      visibleIf: "Sèvi ak icon ralonj majik la pou mete yon règ kondisyonèl ki detèmine vizibilite panèl la.",
      // "Use the magic wand icon to set a conditional rule that disables the read-only mode for the panel."
      enableIf: "Sèvi ak icon ralonj majik la pou mete yon règ kondisyonèl ki enfim mòd lekti sèlman pou panèl la.",
      // "Use the magic wand icon to set a conditional rule that prevents survey submission unless at least one nested question has an answer."
      requiredIf: "Sèvi ak icon ralonj majik la pou mete yon règ kondisyonèl ki anpeche soumèt sondaj sòf si omwen yon kesyon anbrike gen yon repons.",
      // "Applies to all questions within this dynamic panel. If you want to override this setting, define title alignment rules for individual questions. The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Top\" by default)."
      templateQuestionTitleLocation: "Aplike pou tout kesyon ki nan panèl sa a. Si ou vle chanje paramèt sa a, defini règ aliyman tit pou kesyon endividyèl yo. Opsyon \"Eritye\" aplike nivo paj (si yo mete) oswa nivo sondaj (\"Top\" pa default).",
      // "Sets consistent width for question titles when they are aligned to the left of their question boxes. Accepts CSS values (px, %, in, pt, etc.)."
      templateQuestionTitleWidth: "Mete lajè ki konsistan pou tit kesyon yo lè yo aliyen sou bò gòch bwat kesyon yo. Aksepte valè CSS (px, %, in, pt, elatriye).",
      // "Sets the location of an error message in relation to a question with invalid input. Choose between: \"Top\" - an error text is placed at the top of the question box; \"Bottom\" - an error text is placed at the bottom of the question box. The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Top\" by default)."
      templateErrorLocation: "Mete kote yon mesaj erè an relasyon ak yon kesyon ki pa valab. Chwazi ant: \"Top\" - yo mete yon tèks erè nan tèt bwat kesyon an; \"Anba\" - yo mete yon tèks erè nan pati anba bwat kesyon an. Opsyon \"Eritye\" aplike nivo paj (si yo mete) oswa nivo sondaj (\"Top\" pa default).",
      // "Sets the location of an error message in relation to all questions within the panel. The \"Inherit\" option applies the page-level (if set) or survey-level setting."
      errorLocation: "Mete kote yon mesaj erè an relasyon ak tout kesyon ki nan panèl la. Opsyon \"Eritite\" aplike paramèt nivo paj (si yo tabli) oswa nivo sondaj la.",
      // "Repositions the panel to the end of a selected page."
      page: "Repositionne panèl la nan fen yon paj chwazi.",
      // [Auto-translated] "Adds space or margin between the panel content and the left border of the panel box."
      indent: "Ajoute espas oswa maj ant kontni an panèl ak fwontyè a gòch nan bwat panèl la.",
      // "Unselect to display the panel in one line with the previous question or panel. The setting doesn't apply if the panel is the first element in your form."
      startWithNewLine: "Deseleksyone pou montre panèl la nan yon liy ak kesyon oswa panèl anvan an. Anviwònman an pa aplike si panèl la se premye eleman nan fòm ou a.",
      // "Choose from: \"Expanded\" - the panel is displayed in full and can be collapsed; \"Collapsed\" - the panel displays only the title and description and can be expanded; \"Locked\" - the panel is displayed in full and cannot be collapsed."
      state: "Chwazi nan: \"Elaji\" - panèl la parèt an antye epi yo ka tonbe; \"Efondre\" - panèl la montre sèlman tit la ak deskripsyon epi li ka elaji; \"Kloke\" - panèl la parèt an antye epi yo pa ka tonbe.",
      // "Sets the width of the panel in proportion to other survey elements in the same line. Accepts CSS values (px, %, in, pt, etc.)."
      width: "Mete lajè panèl la an pwopòsyon ak lòt eleman sondaj nan menm liy lan. Aksepte valè CSS (px, %, in, pt, elatriye).",
      // "Type in a template for entry titles. Use {panelIndex} for the entry's general position and {visiblePanelIndex} for its order among visible entries. Insert these placeholders into the pattern to add automatic numbering."
      templateTitle: "Tape yon modèl pou tit panèl dinamik. Sèvi ak {panelIndex} pou pozisyon jeneral panèl la ak {visiblePanelIndex} pou lòd li nan mitan panno vizib. Mete espas sa yo nan modèl la pou ajoute nimero otomatik.",
      // "Type in a template for tab titles. Use {panelIndex} for an entry's general position and {visiblePanelIndex} for its order among visible entries. Insert these placeholders into the pattern to add automatic numbering."
      templateTabTitle: "Tape yon modèl pou tit tab yo. Sèvi ak {panelIndex} pou pozisyon jeneral yon panèl ak {visiblePanelIndex} pou lòd li nan mitan panno vizib. Mete espas sa yo nan modèl la pou ajoute nimero otomatik.",
      // "A fallback text for tab titles that applies when the tab title pattern doesn't produce a meaningful value."
      tabTitlePlaceholder: "Yon tèks sekou pou tit tab ki aplike lè modèl tit tab la pa pwodui yon valè ki gen sans.",
      // "This setting allows you to control the visibility of individual entries within the dynamic panel. Use the `{panel}` placeholder to reference the current entry in your expression."
      templateVisibleIf: "Anviwònman sa a pèmèt ou kontwole vizibilite panno endividyèl yo nan panèl dinamik la. Sèvi ak `{panel}` anplasman pou fè referans a panèl aktyèl la nan ekspresyon ou.",
      // "This setting is automatically inherited by all questions within this dynamic panel. If you want to override this setting, define title alignment rules for individual questions. The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Top\" by default)."
      titleLocation: "Anviwònman sa a otomatikman eritye pa tout kesyon ki nan panèl sa a. Si ou vle chanje paramèt sa a, defini règ aliyman tit pou kesyon endividyèl yo. Opsyon \"Eritye\" aplike nivo paj (si yo mete) oswa nivo sondaj (\"Top\" pa default).",
      // "The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Under the panel title\" by default)."
      descriptionLocation: "Opsyon \"Eritite\" aplike nivo paj la (si yo tabli) oswa nivo sondaj (\"Anba tit panèl la\" pa default).",
      // "Defines the position of a newly added entry. By default, new entries are added to the end. Select \"Next\" to insert a new entry after the current one."
      newPanelPosition: "Defini pozisyon yon panèl ki fèk ajoute. Pa default, nouvo panno yo ajoute nan fen an. Chwazi \"Next\" pou mete yon nouvo panèl apre youn aktyèl la.",
      // "Duplicates answers from the last entry and assigns them to the next added entry."
      copyDefaultValueFromLastEntry: "Duplike repons ki soti nan dènye panèl la epi asiyen yo nan pwochen panèl dinamik ajoute a.",
      // "Reference a question name to require a user to provide a unique response for this question in each entry."
      keyName: "Referans yon non kesyon pou mande pou yon itilizatè bay yon repons inik pou kesyon sa a nan chak panèl.",
      // "Triggers a confirmation prompt before removing an entry."
      confirmDelete: "Deklanche yon konfimasyon pouse anvan ou retire yon panèl."
    },
    matrixdynamic: {
      // [Auto-translated] "Triggers a confirmation prompt before removing a row."
      confirmDelete: "Deklanche yon konfimasyon pouse anvan ou retire yon ranje.",
      // [Auto-translated] "Automatically expands the detail section when a new row is added to the matrix."
      detailPanelShowOnAdding: "Otomatikman ogmante seksyon an detay lè yon nouvo ranje ajoute nan matris la."
    },
    // "Duplicates answers from the last row and assigns them to the next added dynamic row."
    copyDefaultValueFromLastEntry: "Duplike repons ki soti nan dènye ranje a epi asiyen yo nan pwochen ranje dinamik ajoute a.",
    // "This setting allows you to assign a default answer value based on an expression. The expression can include basic calculations - `{q1_id} + {q2_id}`, Boolean expressions, such as `{age} > 60`, and functions: `iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, etc. The value determined by this expression serves as the initial default value that can be overridden by a respondent's manual input."
    defaultValueExpression: "Anviwònman sa a pèmèt ou bay yon valè repons default ki baze sou yon ekspresyon. Ekspresyon an ka gen ladan kalkil debaz - `{q1_id} + {q2_id}`, ekspresyon Boolean, tankou `{age} > 60`, ak fonksyon: `iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, elatriye. Valè ki detèmine pa ekspresyon sa a sèvi kòm valè defo inisyal ki ka pase sou plas pa manyèl yon moun ki reponn.",
    // "Use the magic wand icon to set a conditional rule that determines when a respondent's input is reset to the value based on the \"Default value expression\" or \"Set value expression\" or to the \"Default answer\" value (if either is set)."
    resetValueIf: "Sèvi ak icon ralonj majik la pou mete yon règ kondisyonèl ki detèmine lè opinyon yon repondan yo reset sou valè a ki baze sou \"Espresyon valè default\" oswa \"Mete ekspresyon valè \" oswa nan valè \"Repons Default\" (si youn nan yo mete).",
    // "Use the magic wand icon to set a conditional rule that determines when to run the \"Set value expression\" and dynamically assign the resulting value as a response."
    setValueIf: "Sèvi ak icon ralonj majik la pou tabli yon règ kondisyonèl ki detèmine lè pou w kouri \"Mete ekspresyon valè a\" epi bay dinamik valè ki lakòz kòm yon repons.",
    // "Specify an expression that defines the value to be set when the conditions in the \"Set value if\" rule are met. The expression can include basic calculations - `{q1_id} + {q2_id}`, Boolean expressions, such as `{age} > 60`, and functions: `iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, etc. The value determined by this expression can be overridden by a respondent's manual input."
    setValueExpression: "Espesifye yon ekspresyon ki defini valè yo dwe mete lè kondisyon yo nan règ \"Mete valè si\" yo satisfè. Ekspresyon an ka gen ladan kalkil debaz - `{q1_id} + {q2_id}`, ekspresyon Boolean, tankou `{age} > 60`, ak fonksyon: `iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, elatriye. Valè ki detèmine pa ekspresyon sa a ka pase sou valè pa manyèl yon moun ki reponn.",
    // "Survey Creator allows you to manually adjust the inline widths of form elements to control the layout. If this doesn't produce the desired outcome, you can enable the grid layout, which structures form elements using a column-based system. To configure layout columns, select a page or panel and use the \"Question Settings\" → \"Grid columns\" table. To adjust how many columns a question spans, select it and set the desired value in the \"Layout\" → \"Column span\" field."
    gridLayoutEnabled: "Sondaj Kreyatè pèmèt ou ajiste manyèlman lajè inline eleman fòm yo pou kontwole layout la. Si sa a pa pwodui rezilta vle a, ou ka pèmèt Layout kadriyaj la, ki estrikti fòme eleman lè l sèvi avèk yon sistèm ki baze sou kolòn. Pou konfigirasyon kolòn layout, chwazi yon paj oswa yon panèl epi sèvi ak tab \"Anviwònman Kesyon\" → \"Kolòn Grid\". Pou ajiste konbyen kolòn yon kesyon span, chwazi li epi mete valè ou vle a nan jaden \"Layout\" → \"Column span\".",
    question: {
      // "A question ID that is not visible to respondents."
      name: "Yon ID kesyon ki pa vizib pou moun ki reponn yo.",
      // "Type a question subtitle."
      description: "Tape yon soustit kesyon.",
      // "Use the magic wand icon to set a conditional rule that determines question visibility."
      visibleIf: "Sèvi ak icon ralonj majik la pou mete yon règ kondisyonèl ki detèmine vizibilite kesyon an.",
      // "Use the magic wand icon to set a conditional rule that disables the read-only mode for the question."
      enableIf: "Sèvi ak icon ralonj majik la pou mete yon règ kondisyonèl ki enfim mòd lekti sèlman pou kesyon an.",
      // "Use the magic wand icon to set a conditional rule that prevents survey advancing or submission unless the question received an answer."
      requiredIf: "Sèvi ak icon ralonj majik la pou mete yon règ kondisyonèl ki anpeche sondaj avanse oswa soumèt sòf si kesyon an te resevwa yon repons.",
      // "Unselect to display the question in one line with the previous question or panel. The setting doesn't apply if the question is the first element in your form."
      startWithNewLine: "Dezeleksyone pou montre kesyon an nan yon liy ak kesyon anvan an oswa panèl la. Anviwònman an pa aplike si kesyon an se premye eleman nan fòm ou a.",
      // "Repositions the question to the end of a selected page."
      page: "Repoze kesyon an nan fen yon paj chwazi.",
      // "Choose from: \"Expanded\" - the question box is displayed in full and can be collapsed; \"Collapsed\" - the question box displays only the title and description and can be expanded; \"Locked\" - the question box is displayed in full and cannot be collapsed."
      state: "Chwazi nan: \"Elaji\" - bwat kesyon an parèt an antye epi yo ka tonbe; \"Efondre\" - bwat kesyon an montre sèlman tit la ak deskripsyon epi yo ka elaji; \"Kloke\" - bwat kesyon an parèt an antye epi yo pa ka tonbe.",
      // "Overrides title alignment rules defined on a panel, page, or survey level. When set to \"Hidden\", it also hides question descriptions. The \"Inherit\" option applies any higher-level settings (if set) or survey-level setting (\"Top\" by default)."
      titleLocation: "Ranplase règ aliyman tit defini sou yon panèl, paj, oswa nivo sondaj. Lè yo mete sou \"Hidden\", li kache tou deskripsyon kesyon yo. Opsyon \"Eritite\" aplike nenpòt paramèt ki pi wo nivo (si yo mete) oswa anviwònman nivo sondaj (\"Top\" pa default).",
      // "The \"Inherit\" option applies the survey-level setting (\"Under the question title\" by default)."
      descriptionLocation: "Opsyon \"Eritye\" aplike anviwònman nivo sondaj la (\"Anba tit kesyon an\" pa default).",
      // "Sets the location of an error message in relation to the question with invalid input. Choose between: \"Top\" - an error text is placed at the top of the question box; \"Bottom\" - an error text is placed at the bottom of the question box. The \"Inherit\" option applies the survey-level setting (\"Top\" by default)."
      errorLocation: "Mete kote yon mesaj erè an relasyon ak kesyon an ki pa valab. Chwazi ant: \"Top\" - yo mete yon tèks erè nan tèt bwat kesyon an; \"Anba\" - yo mete yon tèks erè nan pati anba bwat kesyon an. Opsyon \"Eritite\" aplike anviwònman nivo sondaj la (\"Top\" pa default).",
      // "Adds space or margin between the question content and the left border of the question box."
      indent: "Ajoute espas oswa maj ant kontni kesyon an ak fwontyè gòch bwat kesyon an.",
      // "Sets the width of the question in proportion to other survey elements in the same line. Accepts CSS values (px, %, in, pt, etc.)."
      width: "Mete lajè kesyon an nan pwopòsyon ak lòt eleman sondaj nan menm liy lan. Aksepte valè CSS (px, %, in, pt, elatriye).",
      // "Choose from: \"On lost focus\" - the value is updated when the input field loses focus; \"While typing\" - the value is updated in real-time, as users are typing. The \"Inherit\" option applies the survey-level setting (\"On lost focus\" by default)."
      textUpdateMode: "Chwazi nan: \"Sou pèdi konsantre\" - valè a mete ajou lè jaden an opinyon konsantre; \"Pandan ke tape\" - valè a mete ajou nan tan reyèl, kòm itilizatè yo ap tape. Opsyon \"Eritaj\" aplike anviwònman an sondaj-nivo (\"Sou pèdi konsantre\" pa default).",
      // [Auto-translated] "You can use any web service as a data source for multiple-choice questions. To populate choice values, enter the URL of the service providing the data."
      url: "Ou ka itilize nenpòt sèvis entènèt kòm yon sous done pou kesyon chwa miltip. Pou popilasyon valè chwa, antre nan URL la nan sèvis la bay done yo.",
      // [Auto-translated] "A comparison operation used to filter the drop-down list."
      searchMode: "Yon operasyon konparezon itilize pou filtre lis la gout-desann.",
      // [Auto-translated] "Long texts in choice options will automatically generate line breaks to fit within the drop-down menu. Unselect if you want the texts to clip."
      textWrapEnabled: "Long tèks nan opsyon chwa pral otomatikman jenere liy liy yo anfòm nan meni an gout-desann. Sòf si ou vle tèks yo klip.",
      // [Auto-translated] "Specifies how many columns this question spans within the grid layout."
      effectiveColSpan: "Espesifye konbyen kolòn kesyon sa a kouvri nan layout la kadriyaj."
    },
    surveyvalidator: {
      // "Use the magic wand icon to define when the question's value is considered valid."
      expression: "Sèvi ak icon majik la pou defini lè valè kesyon an konsidere valab.",
      // [Auto-translated] "Errors block progress until resolved. Warnings highlight issues but allow to continue. Informational notes offer additional context or neutral guidance. When using warnings or informational notes, we recommend enabling immediate validation: \"Survey\" → \"Validation\" → \"Run validation\" → \"After an answer has changed\"."
      notificationType: "Erè bloke pwogrè jiskaske rezoud Avètisman mete aksan sou pwoblèm men pèmèt yo kontinye Nòt enfòmasyon yo ofri kontèks adisyonèl oswa konsèy net. Lè w ap itilize avètisman oswa nòt enfòmasyon, nou rekòmande pou pèmèt validasyon imedyat: \"Sondaj\" → \"Validasyon\" → \"Kouri validasyon\" → \"Apre yon repons te chanje\"."
    },
    signaturepad: {
      // "Sets the width of the displayed signature area and the resulting image."
      signatureWidth: "Mete lajè zòn siyati ki parèt la ak imaj ki kapab lakòz.",
      // "Sets the height of the displayed signature area and the resulting image."
      signatureHeight: "Mete wotè zòn siyati ki parèt la ak imaj ki kapab lakòz.",
      // "Select if you want the signature area to fill all available space within the question box while maintaining the default 3:2 aspect ratio. When custom width and height values are set, the setting will keep the aspect ratio of these dimensions."
      signatureAutoScaleEnabled: "Chwazi si ou vle zòn siyati a ranpli tout espas ki disponib nan bwat kesyon an pandan w ap kenbe rapò aspè 3:2 default la. Lè yo mete valè koutim lajè ak wotè, anviwònman an ap kenbe rapò aspè dimansyon sa yo."
    },
    file: {
      // "Specifies the display height of uploaded images in the preview and the actual height of images taken with the camera. In single file upload mode, the display height is limited by the preview area; in multiple file upload mode, it is limited by the thumbnail area."
      imageHeight: "Espesifye wotè a ekspozisyon nan imaj Uploaded nan preview la ak wotè aktyèl la nan imaj pran ak kamera a. Nan yon sèl mòd dosye Upload, wotè a ekspozisyon limite pa zòn nan preview; nan mòd miltip Upload, li limite pa zòn nan thumbnail.",
      // "Specifies the display width of uploaded images in the preview and the actual width of images taken with the camera. In single file upload mode, the display width is limited by the preview area; in multiple file upload mode, it is limited by the thumbnail area."
      imageWidth: "Espesifye lajè a nan imaj Uploaded nan preview la ak lajè aktyèl la nan imaj pran ak kamera a. Nan yon sèl mòd dosye Upload, lajè a ekspozisyon limite pa zòn nan preview; nan mòd miltip Upload, li limite pa zòn nan thumbnail.",
      // "Displays thumbnail previews for uploaded files when possible. Unselect if you want to show file icons instead."
      allowImagesPreview: "Montre aperçu miniatures pou fichye telechaje lè sa posib. Dezeleksyone si ou vle montre ikon dosye pito."
    },
    image: {
      // "The \"Auto\" option automatically determines the suitable mode for display - Image, Video, or YouTube - based on the source URL provided."
      contentMode: "Opsyon \"Oto\" otomatikman detèmine mòd apwopriye pou ekspozisyon an - Imaj, Videyo, oswa YouTube - ki baze sou URL sous yo bay la."
    },
    imagepicker: {
      // "Overrides the minimum and maximum height values."
      imageHeight: "Anile valè minimòm ak maksimòm wotè.",
      // "Overrides the minimum and maximum width values."
      imageWidth: "Ranplase valè minimòm ak maksimòm lajè.",
      // "\"Value\" serves as an item ID used in conditional rules; \"Text\" is displayed to respondents."
      choices: "\"Valè\" sèvi kòm yon ID atik yo itilize nan règ kondisyonèl; \"Tèks\" parèt pou moun ki repond yo.",
      // "Choose between \"Image\" and \"Video\" to set the content mode of the media selector. If \"Image\" is selected, ensure that all options provided are image files in the following formats: JPEG, GIF, PNG, APNG, SVG, BMP, ICO. Similarly, if \"Video\" is selected, ensure that all options are direct links to video files in the following formats: MP4, MOV, WMV, FLV, AVI, MKV. Please note that YouTube links are not supported for video options."
      contentMode: "Chwazi ant \"Imaj\" ak \"Videyo\" pou mete mòd kontni seleksyon medya a. Si yo chwazi \"Imaj\", asire w ke tout opsyon yo bay yo se fichye imaj nan fòma sa yo: JPEG, GIF, PNG, APNG, SVG, BMP, ICO. Menm jan an tou, si yo chwazi \"Videyo\", asire w ke tout opsyon yo se lyen dirèk nan dosye videyo nan fòma sa yo: MP4, MOV, WMV, FLV, AVI, MKV. Tanpri sonje ke lyen YouTube yo pa sipòte pou opsyon videyo."
    },
    text: {
      // "This setting only resizes the input field and doesn't affect the width of the question box. To limit the accepted input length, go to \"Validation\" → \"Maximum character limit\"."
      size: "Anviwònman sa a sèlman redimansyone jaden an opinyon epi li pa afekte lajè bwat kesyon an. Pou limite longè antre aksepte, ale nan \"Validation\" → \"Limit maksimòm karaktè\"."
    },
    comment: {
      // "Sets the number of displayed lines in the input field. If the input takes up more lines, the scroll bar will appear."
      rows: "Fikse kantite liy ki parèt nan jaden an antre. Si opinyon an pran plis liy, ba woulo liv la ap parèt."
    },
    // survey templates
    survey: {
      // "Select if you want to prevent respondents from filling out your survey."
      readOnly: "Chwazi si ou vle anpeche moun ki repond ranpli sondaj ou a.",
      // "Sets the location of the progress bar. The \"Auto\" value displays the progress bar above or below the survey header."
      progressBarLocation: "Mete kote ba pwogrè a. Valè \"Oto\" a montre ba pwogrè a anwo oswa anba tèt sondaj la."
    },
    matrixdropdowncolumn: {
      // "A column ID that is not visible to respondents."
      name: "Yon ID kolòn ki pa vizib pou moun ki reponn yo.",
      // "When enabled for a column, a respondent is required to provide a unique response for each question within this column."
      isUnique: "Lè yo aktive pou yon kolòn, yon moun ki reponn yo oblije bay yon repons inik pou chak kesyon ki nan kolòn sa a.",
      // "Sets the number of displayed lines in the input field. If the input takes up more lines, the scroll bar will appear."
      rows: "Fikse kantite liy ki parèt nan jaden an antre. Si opinyon an pran plis liy, ba woulo liv la ap parèt.",
      // "Use the magic wand icon to set a conditional rule that determines column visibility."
      visibleIf: "Sèvi ak icon ralonj majik la pou mete yon règ kondisyonèl ki detèmine vizibilite kolòn.",
      // "Use the magic wand icon to set a conditional rule that disables the read-only mode for the column."
      enableIf: "Sèvi ak icon ralonj majik la pou mete yon règ kondisyonèl ki enfim mòd lekti sèlman pou kolòn nan.",
      // "Use the magic wand icon to set a conditional rule that prevents survey submission unless at least one nested question has an answer."
      requiredIf: "Sèvi ak icon ralonj majik la pou mete yon règ kondisyonèl ki anpeche soumèt sondaj sòf si omwen yon kesyon anbrike gen yon repons.",
      // "When selected, creates an individual column for each choice option."
      showInMultipleColumns: "Lè yo chwazi, kreye yon kolòn endividyèl pou chak opsyon chwa.",
      // "Arranges choice options in a multi-column layout. When set to 0, the options are displayed in a single line. When set to -1, the actual value is inherited from the \"Nested column count\" property of the parent matrix."
      colCount: "Fè aranjman pou chwa chwa nan yon layout milti-kolòn. Lè yo mete sou 0, opsyon yo parèt sou yon sèl liy. Lè yo mete sou -1, valè aktyèl la eritye nan pwopriyete \"Konte kolòn ki nichye\" nan matris paran an."
    },
    slider: {
      // "The lowest number that users can select."
      min: "Nimewo ki pi ba ke itilizatè yo ka chwazi.",
      // "The highest number that users can select."
      max: "Nimewo ki pi wo ke itilizatè yo ka chwazi.",
      // "The interval between selectable scale values. For example, a step of 5 will allow users to select 0, 5, 10, etc."
      step: "Entèval la ant valè echèl chwazi. Pou egzanp, yon etap nan 5 pral pèmèt itilizatè yo chwazi 0, 5, 10, elatriye.",
      // "The minimum distance between the slider thumbs a user can set."
      minRangeLength: "Distans minimòm ant gwo pous glise yon itilizatè ka mete.",
      // "The maximum distance between the slider thumbs a user can set."
      maxRangeLength: "Distans maksimòm ant glise yon itilizatè ka mete.",
      // "Specifies how many scale labels to generate. A value of -1 means the number is calculated automatically based on the Min value and Max value."
      labelCount: "Espesifye konbyen etikèt echèl jenere. Yon valè de-1 vle di nimewo a kalkile otomatikman ki baze sou valè a Min ak Max valè.",
      // "Use `{0}` as a placeholder for the actual value."
      labelFormat: "Sèvi ak '{0}' kòm yon plas pou valè aktyèl la.",
      // "Allows you to define custom labels at specific values and optionally assign corresponding text to them (e.g., 0 = \"Poor\", 100 = \"Excellent\")."
      customLabels: "Pèmèt ou defini etikèt koutim nan valè espesifik ak opsyonèlman bay tèks korespondan yo (egzanp, 0 = \"Pòv\", 100 = \"Ekselan\").",
      // "Use `{0}` as a placeholder for the actual value."
      tooltipFormat: "Sèvi ak '{0}' kòm yon plas pou valè aktyèl la.",
      // "Allows users to move one thumb past the other."
      allowSwap: "Pèmèt itilizatè yo pou avanse pou pi yon gwo pous sot pase lòt la.",
      // [Auto-translated] "Displays a button that clears the selected slider value and sets it to undefined."
      allowClear: "Montre yon bouton ki klè valè a glise chwazi epi li etabli li nan defini.",
      // "Defines the slider's minimum value dynamically using an expression. Supports basic calculations (e.g, `{q1_id} + {q2_id}`), Boolean logic (e.g., `{age} > 60`), and functions like `iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, and more."
      minValueExpression: "Defini valè minimòm slider a dinamikman lè l sèvi avèk yon ekspresyon. Sipòte kalkil debaz (e.g, '{q1_id} + {q2_id}'), Boolean lojik (tankou g., '{laj} > 60'), ak fonksyon tankou 'iif(), 'jodi a(), 'laj(), 'min(),', 'max(), 'avg(), 'avg(), ak plis ankò.",
      // "Defines the slider's maximum value dynamically using an expression. Supports basic calculations (e.g, `{q1_id} + {q2_id}`), Boolean logic (e.g., `{age} > 60`), and functions like `iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, and more."
      maxValueExpression: "Defini valè maksimòm slider a dinamikman lè l sèvi avèk yon ekspresyon. Sipòte kalkil debaz (e.g, '{q1_id} + {q2_id}'), Boolean lojik (tankou g., '{laj} > 60'), ak fonksyon tankou 'iif(), 'jodi a(), 'laj(), 'min(),', 'max(), 'avg(), 'avg(), ak plis ankò."
    },
    // [Auto-translated] "Makes this choice exclusive. When selected by a user, it will automatically deselect all other options in the question."
    isExclusive: "Fè chwa sa a san konte. Lè chwazi pa yon itilizatè, li pral otomatikman deselere tout lòt opsyon nan kesyon an.",
    matrixcolumn: {
      // [Auto-translated] "Makes checkboxes in this column exclusive. When selected by a user, they will automatically deselect all other checkboxes in the same row."
      isExclusive: "Fè kaz chèk nan kolòn sa a san konte Lè yo chwazi pa yon itilizatè, yo pral otomatikman deklase, tout lòt bwat nan ranje a menm."
    },
    // "Select if uppercase and lowercase letters in the regular expression must be treated as equivalent."
    caseInsensitive: "Chwazi si lèt majiskil ak miniskil nan ekspresyon regilye a dwe trete kòm ekivalan.",
    // "Choose from: \"Static\" - sets a fixed width; \"Responsive\" - makes the survey occupy the full width of the screen; \"Auto\" - applies either of the two depending on the question types used."
    widthMode: "Chwazi nan: \"Static\" - fikse yon lajè fiks; \"Reponsive\" - fè sondaj la okipe tout lajè ekran an; \"Oto\" - aplike youn nan de yo depann de kalite kesyon yo itilize yo.",
    // "Assign a unique cookie value for your survey. The cookie will be set in a respondent's browser upon survey completion to prevent repetitive survey submissions."
    cookieName: "Bay yon valè bonbon inik pou sondaj ou a. Yo pral mete bonbon an nan navigatè yon moun ki reponn lè sondaj fini pou anpeche soumèt sondaj repete.",
    // "Paste an image link (no size limits) or click the folder icon to browse a file from your computer (up to 64KB)."
    logo: "Kole yon lyen imaj (pa gen limit gwosè) oswa klike sou ikòn nan katab pou browse yon fichye nan òdinatè w lan (jiska 64KB).",
    // "Sets a logo width in CSS units (px, %, in, pt, etc.)."
    logoWidth: "Mete yon lajè logo nan inite CSS (px, %, in, pt, elatriye).",
    // "Sets a logo height in CSS units (px, %, in, pt, etc.)."
    logoHeight: "Mete yon wotè logo nan inite CSS (px, %, in, pt, elatriye).",
    // "Choose from: \"None\" - image maintains its original size; \"Contain\" - image is resized to fit while maintaining its aspect ratio; \"Cover\" - image fills the entire box while maintaining its aspect ratio; \"Fill\" - image is stretched to fill the box without maintaining its aspect ratio."
    logoFit: "Chwazi nan: \"Okenn\" - imaj kenbe gwosè orijinal li; \"Contain\" - imaj la redimansyone pou l anfòm pandan l ap kenbe rapò aspè li yo; \"Kouvri\" - imaj ranpli tout bwat la pandan w ap kenbe rapò aspè li yo; \"Ranpli\" - imaj la lonje pou ranpli bwat la san yo pa kenbe rapò aspè li yo.",
    // "Select if you want the survey to auto-advance to the next page once a respondent has answered all questions on the current page. This feature won't apply if the last question on the page is open-ended or allows multiple answers."
    autoAdvanceEnabled: "Chwazi si w vle sondaj la avanse otomatikman nan pwochen paj la yon fwa yon moun ki reponn reponn tout kesyon ki nan paj aktyèl la. Karakteristik sa a p ap aplike si dènye kesyon ki sou paj la louvri oswa si li pèmèt plizyè repons.",
    // "Select if you want the survey to complete automatically after a respondent answers all questions."
    autoAdvanceAllowComplete: "Chwazi si ou vle sondaj la ranpli otomatikman apre yon moun ki reponn tout kesyon yo.",
    // "Sets the visibility of navigation buttons on a page."
    showNavigationButtons: "Mete vizibilite bouton navigasyon yo sou yon paj.",
    // "Sets the location of navigation buttons on a page."
    navigationButtonsLocation: "Mete kote bouton navigasyon yo sou yon paj.",
    // "Enable the preview page with all or answered questions only."
    showPreviewBeforeComplete: "Aktive paj preview la ak tout kesyon oswa kesyon yo reponn sèlman.",
    // "Applies to all questions within the survey. This setting can be overridden by title alignment rules at lower levels: panel, page, or question. A lower-level setting will override those on a higher level."
    questionTitleLocation: "Aplike pou tout kesyon ki nan sondaj la. Anviwònman sa a ka pase sou règ aliyman tit nan nivo ki pi ba yo: panèl, paj, oswa kesyon. Yon anviwònman ki pi ba yo pral pase sou tèt moun ki sou yon nivo ki pi wo.",
    // "A symbol or a sequence of symbols indicating that an answer is required."
    requiredMark: "Yon senbòl oswa yon sekans senbòl ki endike ke yon repons obligatwa.",
    // "Enter a number or letter with which you want to start numbering."
    questionStartIndex: "Antre yon nimewo oswa yon lèt ak ki ou vle kòmanse nimewote.",
    // "Sets the location of an error message in relation to the question with invalid input. Choose between: \"Top\" - an error text is placed at the top of the question box; \"Bottom\" - an error text is placed at the bottom of the question box."
    questionErrorLocation: "Mete kote yon mesaj erè an relasyon ak kesyon an ki pa valab. Chwazi ant: \"Top\" - yo mete yon tèks erè nan tèt bwat kesyon an; \"Anba\" - yo mete yon tèks erè nan pati anba bwat kesyon an.",
    // "Select if you want the first input field on each page ready for text entry."
    autoFocusFirstQuestion: "Chwazi si ou vle premye jaden antre nan chak paj pare pou antre tèks.",
    // "Keeps the original order of questions or randomizes them. The effect of this setting is only visible in the Preview tab."
    questionOrder: "Kenbe lòd orijinal la nan kesyon oswa randomize yo. Efè anviwònman sa a vizib sèlman nan tab la Preview.",
    // "For text entry questions only."
    maxTextLength: "Pou kesyon tèks sèlman.",
    // "For question comments only."
    maxCommentLength: "Pou kòmantè kesyon sèlman.",
    // "Sets the number of displayed lines in text areas for question comments. If the input takes up more lines, the scroll bar appears."
    commentAreaRows: "Fikse kantite liy ki parèt nan zòn tèks pou kòmantè kesyon yo. Si opinyon an pran plis liy, ba woulo liv la parèt.",
    // "Select if you want question comments and Long Text questions to auto-grow in height based on the entered text length."
    autoGrowComment: "Chwazi si ou vle kòmantè kesyon ak kesyon Tèks Long yo oto-grandi nan wotè ki baze sou longè tèks la antre.",
    // "For question comments and Long Text questions only."
    allowResizeComment: "Pou kòmantè kesyon ak kesyon Tèks Long sèlman.",
    // "Custom variables serve as intermediate or auxiliary variables used in form calculations. They take respondent inputs as source values. Each custom variable has a unique name and an expression it's based on."
    calculatedValues: "Varyab koutim sèvi kòm varyab entèmedyè oswa oksilyè yo itilize nan kalkil fòm. Yo pran entrées repond kòm valè sous. Chak varyab koutim gen yon non inik ak yon ekspresyon li baze sou.",
    // "Select if you wish the calculated value of the expression to be saved along with survey results."
    includeIntoResult: "Chwazi si ou vle valè kalkile ekspresyon an sove ansanm ak rezilta sondaj la.",
    // "A trigger is an event or condition that is based on an expression. Once the expression is evaluated to \"true\", a trigger sets off an action. Such an action can optionally have a target question it affects."
    triggers: "Yon deklanche se yon evènman oswa kondisyon ki baze sou yon ekspresyon. Yon fwa ke ekspresyon an evalye a \"vrè\", yon deklanche deklanche yon aksyon. Yon aksyon sa yo ka opsyonèlman gen yon kesyon sib li afekte.",
    // "Choose whether or not to clear values for questions hidden by conditional logic and when to do it."
    clearInvisibleValues: "Chwazi si ou pa klè valè pou kesyon lojik kondisyonèl kache ak ki lè pou fè li.",
    // "Choose from: \"On lost focus\" - the value is updated when the input field loses focus; \"While typing\" - the value is updated in real-time, as users are typing."
    textUpdateMode: "Chwazi nan: \"On lost focus\" - valè a mete ajou lè jaden an antre pèdi konsantre; \"Pandan w ap tape\" - valè a mete ajou an tan reyèl, jan itilizatè yo ap tape.",
    // "The left value serves as a column ID used in conditional rules, the right value is displayed to respondents."
    columns: "Valè gòch la sèvi kòm yon ID kolòn yo itilize nan règ kondisyonèl, valè dwat la parèt pou moun ki repond yo.",
    // "The left value serves as a row ID used in conditional rules, the right value is displayed to respondents."
    rows: "Valè gòch la sèvi kòm yon ID ranje yo itilize nan règ kondisyonèl, valè dwat la parèt pou moun ki repond yo.",
    // "Accepts CSS values (px, %, in, pt, etc.)."
    columnMinWidth: "Aksepte valè CSS (px, %, in, pt, elatriye).",
    // "Accepts CSS values (px, %, in, pt, etc.)."
    rowTitleWidth: "Aksepte valè CSS (px, %, in, pt, elatriye).",
    // "Visible only if at least one column displays total values set with \"Aggregation method\" or \"Total value expression\"."
    totalText: "Vizib sèlman si omwen yon kolòn montre valè total ki tabli ak \"Metòd agrégation\" oswa \"Espresyon valè total\".",
    // "Sets the location of an error message in relation to a cell with invalid input. The \"Inherit\" option applies the setting from the \"Error message alignment\" property."
    cellErrorLocation: "Mete kote yon mesaj erè an relasyon ak yon selil ki gen opinyon ki pa valab. Opsyon \"Eritye\" aplike paramèt ki soti nan pwopriyete \"Aliyman mesaj erè\".",
    // "Sets the location of error messages for questions nested in detail sections. The \"Inherit\" option applies the setting from the \"Error message alignment\" property."
    detailErrorLocation: "Fikse kote mesaj erè yo pou kesyon ki enbrike nan seksyon detay yo. Opsyon \"Eritye\" aplike paramèt ki soti nan pwopriyete \"Aliyman mesaj erè\".",
    // "When the \"Prevent duplicate responses\" property is enabled, a respondent attempting to submit a duplicate entry will receive the following error message."
    keyDuplicationError: "Lè pwopriyete \"Anpeche repons kopi\" yo aktive, yon moun ki reponn ap eseye soumèt yon kopi kopi ap resevwa mesaj erè sa a.",
    // "Allows you to calculate total values based on an expression. The expression can include basic calculations (`{q1_id} + {q2_id}`), Boolean expressions (`{age} > 60`) and functions ('iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, etc.)."
    totalExpression: "Pèmèt ou kalkile valè total ki baze sou yon ekspresyon. Ekspresyon an ka gen ladan kalkil debaz (`{q1_id} + {q2_id}`), ekspresyon booleyen (`{age} > 60`) ak fonksyon ('iif()`, `jodi a ()`, `age ()`, `min()`, `max()`, `avg()`, elatriye).",
    // "Reference a column ID to require a user to provide a unique response for each question within the specified column."
    keyName: "Referans yon ID kolòn pou mande pou yon itilizatè bay yon repons inik pou chak kesyon nan kolòn espesifye a.",
    // "Type a subtitle."
    description: "Tape yon sous-titre.",
    // "Choose a language to begin creating your survey. To add a translation, switch to a new language and translate the original text here or in the Translations tab."
    locale: "Chwazi yon lang pou kòmanse kreye sondaj ou a. Pou ajoute yon tradiksyon, chanje nan yon nouvo lang epi tradui tèks orijinal la isit la oswa nan tab la Tradiksyon.",
    // "Sets the location of a detail section in relation to a row. Choose from: \"None\" - no detail section is added; \"Under the row\" - a detail section is placed under each row of the matrix; \"Under the row, display one detail section only\" - a detail section is displayed under a single row only, the remaining sections are collapsed."
    detailPanelMode: "Mete kote yon seksyon detay an relasyon ak yon ranje. Chwazi nan: \"Okenn\" - pa gen okenn ekspansyon ajoute; \"Anba ranje a\" - yo mete yon ekspansyon ranje anba chak ranje nan matris la; \"Anba ranje a, montre yon sèl ekspansyon ranje sèlman\" - yon ekspansyon parèt anba yon sèl ranje sèlman, ekspansyon ranje ki rete yo tonbe.",
    // "Choose from: \"None\" - image maintains its original size; \"Contain\" - image is resized to fit while maintaining its aspect ratio; \"Cover\" - image fills the entire box while maintaining its aspect ratio; \"Fill\" - image is stretched to fill the box without maintaining its aspect ratio."
    imageFit: "Chwazi nan: \"Okenn\" - imaj kenbe gwosè orijinal li; \"Contain\" - imaj la redimansyone pou l anfòm pandan l ap kenbe rapò aspè li yo; \"Kouvri\" - imaj ranpli tout bwat la pandan w ap kenbe rapò aspè li yo; \"Ranpli\" - imaj la lonje pou ranpli bwat la san yo pa kenbe rapò aspè li yo.",
    // "The \"Inherit\" option applies a survey-level setting (\"Disabled\" by default)."
    autoGrow: "Opsyon \"Eritite\" aplike yon anviwònman nivo sondaj (\"Enfim\" pa default).",
    // "The \"Inherit\" option applies a survey-level setting (\"Enabled\" by default)."
    allowResize: "Opsyon \"Erite\" aplike yon anviwònman nivo sondaj (\"Enabled\" pa default).",
    // "A time interval in seconds after which the survey auto-advances to the \"Thank You\" page. When set to 0, counts the time spent on the survey."
    timeLimit: "Yon entèval tan an segonn apre ke sondaj la ap avanse oto nan paj \"Mèsi\" la. Lè mete a 0, konte tan ki pase nan sondaj la.",
    // "A time interval in seconds after which the survey auto-advances to the next page. Hides the \"Previous\" navigation button. When set to 0, counts the time spent on the current page."
    timeLimitPerPage: "Yon entèval tan an segonn apre ke sondaj la ap avanse oto nan paj \"Mèsi\" la. Lè mete a 0, konte tan ki pase nan sondaj la.",
    // "Enable this option to trigger validation when a user focuses on an empty input field and then leaves it without making any changes."
    validateVisitedEmptyFields: "Pèmèt opsyon sa a pou deklanche validation lè yon itilizatè konsantre sou yon jaden antre vid epi li kite l san fè okenn chanjman.",
    page: {
      // "A page ID that is not visible to respondents."
      name: "Yon ID paj ki pa vizib pou moun ki reponn yo.",
      // "Type a page subtitle."
      description: "Tape yon sous-titre paj.",
      // "A caption displayed on a navigation button in the progress bar or table of contents (TOC). If you leave this field empty, the navigation button will use the page title or page name. To enable the progress bar or TOC, go to \"Survey\" → \"Navigation\"."
      navigationTitle: "tit ki parèt sou yon bouton navigasyon nan ba pwogrè oswa tab matyè (TOC). Si ou kite jaden sa a vid, bouton navigasyon an pral sèvi ak tit paj la oswa non paj la. Pou pèmèt ba pwogrè oswa TOC, ale nan \"Sondaj\" → \"Navigasyon\".",
      // "A time interval in seconds after which the survey auto-advances to the next page. Hides the \"Previous\" navigation button. When set to 0, counts the time spent on the current page."
      timeLimit: "Yon entèval tan an segonn apre sondaj la ap avanse otomatikman nan pwochen paj la. Kache bouton navigasyon \"Previous\". Lè mete a 0, konte tan ki pase sou paj aktyèl la.",
      // "Use the magic wand icon to set a conditional rule that determines page visibility."
      visibleIf: "Sèvi ak icon ralonj majik la pou mete yon règ kondisyonèl ki detèmine vizibilite paj la.",
      // "Use the magic wand icon to set a conditional rule that disables the read-only mode for the page."
      enableIf: "Sèvi ak icon ralonj majik la pou mete yon règ kondisyonèl ki enfim mòd lekti sèlman pou paj la.",
      // "Use the magic wand icon to set a conditional rule that prevents survey submission unless at least one nested question has an answer."
      requiredIf: "Sèvi ak icon ralonj majik la pou mete yon règ kondisyonèl ki anpeche soumèt sondaj sòf si omwen yon kesyon anbrike gen yon repons.",
      // "Applies to all questions within this page. When set to \"Hidden\", it also hides question descriptions. If you want to override this setting, define title alignment rules for individual questions or panels. The \"Inherit\" option applies the survey-level setting (\"Top\" by default)."
      questionTitleLocation: "Aplike pou tout kesyon ki nan paj sa a. Lè yo mete sou \"Hidden\", li kache tou deskripsyon kesyon yo. Si ou vle chanje paramèt sa a, defini règ aliyman tit pou kesyon endividyèl oswa panno. Opsyon \"Eritye\" aplike anviwònman sondaj la (\"Top\" pa default).",
      // "Sets consistent width for question titles when they are aligned to the left of their question boxes. Accepts CSS values (px, %, in, pt, etc.)."
      questionTitleWidth: "Mete lajè ki konsistan pou tit kesyon yo lè yo aliyen sou bò gòch bwat kesyon yo. Aksepte valè CSS (px, %, in, pt, elatriye).",
      // "Sets the location of an error message in relation to the question with invalid input. Choose between: \"Top\" - an error text is placed at the top of the question box; \"Bottom\" - an error text is placed at the bottom of the question box. The \"Inherit\" option applies the survey-level setting (\"Top\" by default)."
      questionErrorLocation: "Mete kote yon mesaj erè an relasyon ak kesyon an ki pa valab. Chwazi ant: \"Top\" - yo mete yon tèks erè nan tèt bwat kesyon an; \"Anba\" - yo mete yon tèks erè nan pati anba bwat kesyon an. Opsyon \"Eritye\" aplike anviwònman sondaj la (\"Top\" pa default).",
      // "Keeps the original order of questions or randomizes them. The \"Inherit\" option applies the survey-level setting (\"Original\" by default). The effect of this setting is only visible in the Preview tab."
      questionOrder: "Kenbe lòd orijinal la nan kesyon oswa randomize yo. Opsyon \"Eritye\" aplike anviwònman sondaj la (\"Original\" pa defo). Efè anviwònman sa a vizib sèlman nan tab la Preview.",
      // "Sets the visibility of navigation buttons on the page. The \"Inherit\" option applies the survey-level setting, which defaults to \"Visible\"."
      showNavigationButtons: "Mete vizibilite bouton navigasyon yo sou paj la. Opsyon \"Eritite\" aplike paramèt nivo sondaj la, ki se \"Vizib\".",
      // "This table lets you configure each grid column on the page. It automatically sets the width percentage for each column based on the maximum number of elements in a row. To customize the grid layout, manually adjust these values and define the title width for all questions in each column."
      gridLayoutColumns: "Tablo sa a pèmèt ou konfigirasyon chak kolòn kadriyaj sou paj la. Li otomatikman fikse pousantaj lajè pou chak kolòn ki baze sou kantite maksimòm eleman nan yon ranje. Pou personnaliser layout griy la, ajiste valè sa yo manyèlman epi defini lajè tit la pou tout kesyon ki nan chak kolòn."
    },
    // "Sets the location of a timer on a page."
    timerLocation: "Mete kote yon revèy sou yon paj.",
    // "Choose from: \"Locked\" - users cannot expand or collapse entries; \"Collapse all\" - all entries start in a collapsed state; \"Expand all\" - all entries start in an expanded state; \"First expanded\" - only the first entry is initially expanded. Applies if \"Entry display mode\" is set to \"List\" and the \"Entry title pattern\" property is specified."
    panelsState: "Chwazi nan: \"Locked\" - itilizatè yo pa kapab elaji oswa efondre panno yo; \"Collapse all\" - tout panno kòmanse nan yon eta tonbe; \"Elaji tout\" - tout panno kòmanse nan yon eta agrandi; \"Premye elaji\" - se sèlman premye panèl la okòmansman elaji. Aplike si \"Modèl ekspozisyon panèl\" mete sou \"Lis\" epi yo espesifye pwopriyete \"Modèl tit panèl la\".",
    // "Enter a shared property name within the array of objects that contains the image or video file URLs you want to display in the choice list."
    imageLinkName: "Antre yon non pwopriyete pataje nan etalaj la nan objè ki gen imaj oswa URL dosye videyo ou vle montre nan lis chwa a.",
    // "The left value serves as an item ID used in conditional rules, the right value is displayed to respondents."
    choices: "Valè gòch la sèvi kòm yon ID atik yo itilize nan règ kondisyonèl, valè dwat la parèt pou moun ki repond yo.",
    // "Type a user-friendly title to display."
    title: "Tape yon tit ki fasil pou w montre w.",
    // "Ensures that users won't complete the survey until files are uploaded."
    waitForUpload: "Asire ke itilizatè yo pa pral ranpli sondaj la jiskaske yo telechaje dosye yo.",
    // "Accepts CSS values (px, %, in, pt, etc.)."
    minWidth: "Aksepte valè CSS (px, %, in, pt, elatriye).",
    // "Accepts CSS values (px, %, in, pt, etc.)."
    maxWidth: "Aksepte valè CSS (px, %, in, pt, elatriye).",
    // "Accepts CSS values (px, %, in, pt, etc.)."
    width: "Aksepte valè CSS (px, %, in, pt, elatriye).",
    // "A join identifier is a custom key that you can assign to several questions to link them together and sync their values. These values will be merged into a single array or object and stored in survey results using the key as the property name."
    valueName: "Yon idantifyan rantre se yon kle koutim ke ou ka bay plizyè kesyon pou konekte yo ansanm ak senkronize valè yo. Valè sa yo pral fizyone nan yon sèl etalaj oswa objè epi estoke nan rezilta sondaj yo lè l sèvi avèk kle a kòm non pwopriyete a.",
    // "A value displayed in HTML questions and in the dynamic titles and descriptions of survey elements when the question value is empty."
    defaultDisplayValue: "Yon valè ki parèt nan kesyon HTML ak nan tit dinamik ak deskripsyon eleman sondaj yo lè valè kesyon an vid.",
    // "In single- and multiple-selection question types, each choice option has an ID and display value. When selected, this setting shows a display value instead of an ID value in HTML questions and dynamic titles and descriptions of survey elements."
    useDisplayValuesInDynamicTexts: "Nan kalite kesyon yon sèl ak seleksyon miltip, chak opsyon chwa gen yon ID ak valè ekspozisyon. Lè yo chwazi, paramèt sa a montre yon valè ekspozisyon olye de yon valè ID nan kesyon HTML ak tit dinamik ak deskripsyon eleman sondaj yo.",
    // "Choose whether or not to clear question values hidden by conditional logic and when to do it. The \"Inherit\" option applies the survey-level setting (\"Upon survey completion\" by default)."
    clearIfInvisible: "Chwazi si ou pa klè valè kesyon ki kache pa lojik kondisyonèl ak ki lè pou fè li. Opsyon \"Eritye\" aplike anviwònman nivo sondaj la (\"Lè sondaj fini\" pa default).",
    // "Choose from: \"All\" - copies all choice options from the selected question; \"Selected\" - dynamically copies only selected choice options; \"Unselected\" - dynamically copies only unselected choice options. The \"None\" and \"Other\" options are copied by default if enabled in the source question."
    choicesFromQuestionMode: "Chwazi nan: \"Tout\" - kopye tout opsyon chwa nan kesyon yo chwazi a; \"Selected\" - kopye dinamik sèlman opsyon chwa chwazi; \"Unselected\" - kopi dinamik sèlman opsyon chwa ki pa seleksyone yo. Opsyon \"Okenn\" ak \"Lòt\" yo kopye pa default si yo aktive nan kesyon sous la.",
    // "In single- and multiple-selection question types, each choice option has an ID and display value. This setting specifies which matrix column or panel question should provide the IDs."
    choiceValuesFromQuestion: "Nan kalite kesyon yon sèl ak seleksyon miltip, chak opsyon chwa gen yon ID ak valè ekspozisyon. Anviwònman sa a presize ki kolòn matris oswa kesyon panèl ki ta dwe bay ID yo.",
    // "In single- and multiple-selection question types, each choice option has an ID and display value. This setting specifies which matrix column or panel question should provide the display texts."
    choiceTextsFromQuestion: "Nan kalite kesyon yon sèl ak seleksyon miltip, chak opsyon chwa gen yon ID ak valè ekspozisyon. Anviwònman sa a presize ki kolòn matris oswa kesyon panèl ki ta dwe bay tèks ekspozisyon yo.",
    // "Select to let respondents add their own choices if the desired option isn't available in the dropdown. Custom choices will only be stored temporarily for the duration of the current browser session."
    allowCustomChoices: "Chwazi pou kite moun ki reponn yo ajoute pwòp chwa pa yo si opsyon ou vle a pa disponib nan deroule a. Chwa koutim yo pral sèlman estoke tanporèman pou dire sesyon navigatè aktyèl la.",
    // "When selected, users can include additional input in a separate comment box."
    showOtherItem: "Lè yo chwazi yo, itilizatè yo ka mete opinyon adisyonèl nan yon bwat kòmantè separe.",
    // "Displays each special choice option (\"None\", \"Other\", \"Select All\") on a new line, even when using a multiple-column layout."
    separateSpecialChoices: "Montre chak opsyon chwa espesyal (\"Okenn\", \"Lòt\", \"Chwazi tout\") sou yon nouvo liy, menm lè w ap itilize yon layout plizyè kolòn.",
    // "Specify the location within the service dataset where the target array of objects is located. Leave empty if the URL already points to the array."
    path: "Espesifye kote yo ye nan seri done sèvis la kote etalaj sib objè yo ye. Kite vid si URL la deja lonje dwèt sou etalaj la.",
    choicesbyurl: {
      // "Enter a uniform property name within the array of objects whose value will be stored as a response in survey results."
      valueName: "Antre yon non pwopriyete inifòm nan etalaj la nan objè ki gen valè yo pral estoke kòm yon repons nan rezilta sondaj la."
    },
    // [Auto-translated] "Enter a uniform property name within the array of objects that contains the values you want to display in the choice list."
    titleName: "Antre nan yon non pwopriyete inifòm nan etalaj la nan objè ki gen valè ou vle montre nan lis la chwa.",
    // [Auto-translated] "Select to allow the service to return an empty response or array."
    allowEmptyResponse: "Chwazi pou pèmèt sèvis la retounen yon repons vid oswa etalaj.",
    // [Auto-translated] "Use the magic wand icon to set a conditional rule that determines the visibility of all choice options."
    choicesVisibleIf: "Sèvi ak icon nan majik yo mete yon règ kondisyonèl ki detèmine vizibilite a nan tout opsyon chwa.",
    // "The left value serves as an item ID used in conditional rules, the right value is displayed to respondents."
    rateValues: "Valè gòch la sèvi kòm yon ID atik yo itilize nan règ kondisyonèl, valè dwat la parèt pou moun ki repond yo.",
    rating: {
      // "\"Auto\" selects between the \"Buttons\" and \"Dropdown\" modes based on the available width. When the width is insufficient to display buttons, the question displays a dropdown."
      displayMode: "\"Oto\" chwazi ant mòd \"Bouton\" ak \"Dropdown\" ki baze sou lajè ki disponib. Lè lajè a pa ase pou montre bouton, kesyon an montre yon deroulan."
    },
    // "Allows you to connect questions that produce results in different formats. When such questions are linked together using a join identifier, this shared property stores selected question values."
    valuePropertyName: "Pèmèt ou konekte kesyon ki pwodui rezilta nan diferan fòma. Lè kesyon sa yo lye ansanm avèk yon idantifyan rantre, pwopriyete pataje sa a estoke valè kesyon yo chwazi yo.",
    // "Select if you want to update the drop-down menu contents to match the search query that a user is typing in the input field."
    searchEnabled: "Chwazi si ou vle mete ajou sa ki nan meni dewoulman an pou matche ak rechèch rechèch ke yon itilizatè ap tape nan jaden an D '.",
    // "A value to save in survey results when respondents give a positive answer."
    valueTrue: "Yon valè pou sove nan rezilta sondaj yo lè moun ki repond bay yon repons pozitif.",
    // "A value to save in survey results when respondents give a negative answer."
    valueFalse: "Yon valè pou sove nan rezilta sondaj yo lè moun ki repond bay yon repons negatif.",
    // "It's not recommended that you disable this option as it overrides the Preview image and makes it hard for a user to understand whether the files have been uploaded."
    showPreview: "Li pa rekòmande pou ou enfim opsyon sa a paske li depase imaj Preview la epi li fè li difisil pou yon itilizatè konprann si wi ou non dosye yo te Uploaded.",
    // "Triggers a prompt asking to confirm the file deletion."
    needConfirmRemoveFile: "Deklanche yon èd memwa ki mande konfime sipresyon fichye a.",
    // "Enable to rank only selected choices. Users will drag selected items from the choice list to order them within the ranking area."
    selectToRankEnabled: "Pèmèt yo klase sèlman chwa chwazi yo. Itilizatè yo pral trennen atik yo chwazi nan lis chwa a pou kòmande yo nan zòn klasman an.",
    // "Enter a list of choices that will be suggested to the respondent during input."
    dataList: "Antre yon lis chwa ke yo pral sijere bay moun ki reponn a pandan opinyon.",
    // "The setting only resizes the input fields and doesn't affect the width of the question box."
    inputSize: "Anviwònman an sèlman redimansyone jaden yo antre epi li pa afekte lajè bwat kesyon an.",
    // "Sets consistent width for all item labels. Accepts CSS values (px, %, in, pt, etc.)."
    itemTitleWidth: "Mete lajè konsistan pou tout etikèt atik yo. Aksepte valè CSS (px, %, in, pt, elatriye).",
    // "Select how to align input value within the field. The default setting \"Auto\" aligns the input value to the right if currency or numeric masking is applied and to the left if not."
    inputTextAlignment: "Chwazi kijan pou fè aliman valè antre nan jaden an. Anviwònman default \"Oto\" aliman valè D 'a adwat si yo aplike lajan oswa nimerik mask ak sou bò gòch la si se pa.",
    // "Serves as a substitute when the image cannot be displayed on a user's device and for accessibility purposes."
    altText: "Sèvi kòm yon ranplasan lè imaj la pa ka parèt sou aparèy yon itilizatè ak pou rezon aksè.",
    // "Defines the color of the selected emoji when the Rating icon type is set to \"Smileys\". Choose between: \"Default\" - the selected emoji appears in default survey color; \"Scale\" - the selected emoji inherits color from the rating scale."
    rateColorMode: "Defini koulè emoji yo chwazi a lè kalite icon Rating yo mete sou \"Smileys\". Chwazi ant: \"Default\" - emoji chwazi a parèt nan koulè sondaj default; \"Echèl\" - emoji chwazi a eritye koulè nan echèl evalyasyon an.",
    expression: {
      // "An expression ID that is not visible to respondents."
      name: "Yon idantite ekspresyon ki pa vizib pou moun ki reponn yo.",
      // "Type an expression subtitle."
      description: "Tape yon sous-titre ekspresyon.",
      // "An expression can include basic calculations (`{q1_id} + {q2_id}`), conditions (`{age} > 60`), and functions ('iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, etc.)."
      expression: "Yon ekspresyon ka gen ladan kalkil debaz (`{q1_id} + {q2_id}`), kondisyon (`{age} > 60`), ak fonksyon ('iif()`, `jodi a ()`, `age ()`, `min()`, `max()`, `avg()`, elatriye)."
    },
    // "Select to store the \"Other\" option value as a separate property in survey results."
    storeOthersAsComment: "Chwazi pou estoke valè opsyon \"Lòt\" kòm yon pwopriyete apa nan rezilta sondaj yo.",
    // "Use {0} as a placeholder for the actual value."
    format: "Sèvi ak {0} kòm yon anplasman pou valè aktyèl la.",
    // "Refer to the [accept](https://www.w3schools.com/tags/att_input_accept.asp) attribute description for more information."
    acceptedTypes: "Gade deskripsyon atribi [accept](https://www.w3schools.com/tags/att_input_accept.asp) pou plis enfòmasyon.",
    // "Arranges choice options in a multi-column layout. When set to 0, the options are displayed in a single line. Applies only to columns with \"Cell input type\" set to Radio Button Group or Checkboxes."
    columnColCount: "Fè aranjman pou chwa chwa nan yon layout milti-kolòn. Lè yo mete sou 0, opsyon yo parèt sou yon sèl liy. Aplike sèlman nan kolòn ki gen \"Tip antre selil\" mete sou Gwoup bouton radyo oswa kaz.",
    // "Select the data type that the user's browser can retrieve. This data is sourced either from past values entered by the user or from pre-configured values if any have been saved by the user for autocompletion."
    autocomplete: "Chwazi kalite done ke navigatè itilizatè a ka rekipere. Done sa yo soti swa nan valè sot pase yo te antre pa itilizatè a oswa nan valè pre-konfigirasyon si itilizatè a te sove nenpòt ki pou ranpli oto.",
    // "Applies when \"File source type\" is \"Local file\" or when camera is unavailable"
    filePlaceholder: "Aplike lè \"Tip sous dosye\" se \"Fichiye lokal\" oswa lè kamera pa disponib.",
    // "Applies when \"File source type\" is \"Camera\"."
    photoPlaceholder: "Aplike lè \"Tip sous dosye\" se \"Kamera\".",
    // "Applies when \"File source type\" is \"Local file or camera\"."
    fileOrPhotoPlaceholder: "Aplike lè \"Tip sous dosye\" se \"Fichiye lokal oswa kamera\".",
    // "Arranges choice options in a multi-column layout. When set to 0, the options are displayed in a single line."
    colCount: "Fè aranjman pou chwa chwa nan yon layout milti-kolòn. Lè yo mete sou 0, opsyon yo parèt sou yon sèl liy.",
    masksettings: {
      // "Select if you want to store the question value with an applied mask in survey results."
      saveMaskedValue: "Chwazi si ou vle estoke valè kesyon an ak yon mask aplike nan rezilta sondaj yo."
    },
    patternmask: {
      // "The pattern can contain string literals and the following placeholders: `9` - for a digit; `a` - for an upper- or lower-case letter; `#` - for a digit or an upper- or lower-case letter. Use backslash `\\` to escape a character."
      pattern: "Modèl la ka gen ladan literèl fisèl ak espas sa yo: `9` - pou yon chif; `a` - pou yon lèt majiskil oswa miniskil; `#` - pou yon chif oswa yon lèt majiskil oswa miniskil. Sèvi ak backslash `\\` pou sove yon karaktè."
    },
    datetimemask: {
      // "The pattern can contain separator characters and the following placeholders:<br>`m` - Month number.<br>`mm` - Month number, with leading zero for single-digit values.<br>`d` - Day of the month.<br>`dd` - Day of the month, with leading zero for single-digit values.<br>`yy` - The last two digits of the year.<br>`yyyy` - Four-digit year.<br>`H` - Hours in 24-hour format.<br>`HH` - Hours in 24-hour format, with leading zero for single-digit values.<br>`h` - Hours in 12-hour format.<br>`hh` - Hours in 12-hour format, with leading zero for single-digit values.<br>`MM` - Minutes.<br>`ss` - Seconds.<br>`TT` - 12-hour clock period in upper case (AM/PM).<br>`tt` - 12-hour clock period in lower case (am/pm)."
      pattern: "Modèl la kapab genyen karaktè séparateur ak anplasman sa yo:<br>`m` - Nimewo mwa.<br>`mm` - Nimewo mwa, ak premye zewo pou valè yon sèl chif.<br>`d` - Jou nan mwa a.<br>`dd` - Jou nan mwa a, ak premye zewo pou valè yon sèl chif.<br>`yy` - De dènye chif yo. ane.<br>`H` - Orè nan fòma 24 èdtan.<br>`HH` - Lè nan fòma 24 èdtan, ak zewo dirijan pou valè yon sèl chif.<br>`h` - Lè nan fòma 12 èdtan.<br>`hh` - Lè nan fòma 12 èdtan, ak zewo prensipal pou valè yon sèl chif. Segond.<br>`TT` - peryòd 12 èdtan nan majiskil (AM/PM).<br>`tt` - peryòd revèy 12 èdtan nan minuskil (am/pm)."
    },
    numericmask: {
      // "A symbol used to separate the fractional part from the integer part of a displayed number."
      decimalSeparator: "Yon senbòl yo itilize pou separe pati fraksyon nan pati nonb antye relatif yon nonm ki parèt.",
      // "A symbol used to separate the digits of a large number into groups of three."
      thousandsSeparator: "Yon senbòl yo itilize pou separe chif yon gwo kantite an gwoup twa.",
      // "Limits how many digits to retain after the decimal point for a displayed number."
      precision: "Limite konbyen chif yo kenbe apre pwen desimal la pou yon nimewo ki parèt."
    },
    currencymask: {
      // "One or several symbols to be displayed before the value."
      prefix: "Youn oswa plizyè senbòl yo dwe parèt devan valè a.",
      // "One or several symbols to be displayed after the value."
      suffix: "Youn oswa plizyè senbòl yo dwe parèt apre valè a."
    },
    theme: {
      // "This setting applies only to questions outside of a panel."
      isPanelless: "Anviwònman sa a aplike sèlman pou kesyon deyò yon panèl.",
      // "Sets a supplementary color that highlights key survey elements."
      primaryColor: "Mete yon koulè siplemantè ki mete aksan sou eleman kle sondaj yo.",
      // "Adjusts the transparency of panels and question boxes relative to the survey background."
      panelBackgroundTransparency: "Ajiste transparans panno yo ak bwat kesyon yo anrapò ak background nan sondaj la.",
      // "Adjusts the transparency of input elements relative to the survey background."
      questionBackgroundTransparency: "Ajiste transparans eleman opinyon yo parapò ak background sondaj la.",
      // "Sets the corner radius for all rectangular elements. Enable the Advanced Mode if you want to set individual corner radius values for input elements or panels and question boxes."
      cornerRadius: "Mete reyon kwen an pou tout eleman rektangilè. Pèmèt Mòd Avanse a si ou vle mete valè reyon kwen endividyèl pou eleman opinyon oswa panno ak bwat kesyon.",
      // "Sets the main background color of the survey."
      "--sjs-general-backcolor-dim": "Mete koulè background prensipal sondaj la."
    },
    header: {
      // "The \"Same as container\" option auto-adjusts the header content area width to fit into the HTML element the survey is placed in."
      inheritWidthFrom: "Opsyon \"Menm ak kontenè\" ajiste otomatikman lajè zòn kontni antèt la pou l anfòm nan eleman HTML kote sondaj la mete.",
      // "The width of the header area that contains the survey title and description, measured in pixels."
      textAreaWidth: "Lajè zòn header ki gen tit sondaj la ak deskripsyon an, mezire an piksèl.",
      // "When enabled, the top of the survey overlays the bottom of the header."
      overlapEnabled: "Lè yo aktive, tèt sondaj la kouvri anba header la.",
      // "When set to 0, the height is calculated automatically to accommodate the header's content."
      mobileHeight: "Lè yo mete a 0, wotè a kalkile otomatikman pou akomode kontni header la."
    },
    // "The \"Same as container\" option auto-adjusts the progress bar area width to fit into the HTML element the survey is placed in."
    progressBarInheritWidthFrom: "Opsyon \"Menm ak kontenè\" ajiste otomatikman lajè zòn ba pwogrè a pou l anfòm nan eleman HTML kote sondaj la mete.",
    // [Auto-translated] "Used when the 'Survey layout' is set to 'Single input field per page'. In this layout, the matrix is split so that each input field appears on a separate page. Use the {rowIndex} placeholder to insert auto numbering, {rowTitle} or {rowName} to reference the row's title or ID, and {row.columnid} to include the value of a specific matrix column."
    singleInputTitleTemplate: "Itilize lè 'Layout sondaj la' mete nan 'yon sèl jaden opinyon pou chak paj'. Nan kouman sa a, matris la se divize pou chak jaden opinyon parèt sou yon paj separe. Use {rowIndex} placeholder to insert auto nimewo, {rowTitle} or {rowName} to referans la row a oswa ID, ak {row.columnid} to include valè a nan yon kolòn matris espesifik."
  },
  // Properties
  p: {
    title: {
      // "title"
      name: "Tit",
      // "Leave it empty, if it is the same as 'Name'"
      title: "Kite li vid, si li se menm jan ak 'Non'"
    },
    // "Allow multiple selection"
    multiSelect: "Pèmèt seleksyon miltip",
    // "Show image and video captions"
    showLabel: "Montre tit imaj ak videyo",
    // "Swap the order of Yes and No"
    swapOrder: "Boukante lòd Wi ak Non",
    // "Value"
    value: "Valè",
    // "Tab alignment"
    tabAlign: "Tab aliyman",
    // "File source type"
    sourceType: "Kalite sous dosye",
    // "Fit to container"
    fitToContainer: "Anfòm nan veso",
    // "Set value expression"
    setValueExpression: "Mete ekspresyon valè",
    // "Description"
    description: "Deskripsyon", // Auto-generated string
    // "Logo fit"
    logoFit: "Logo anfòm",
    // "Pages"
    pages: "Paj", // Auto-generated string
    // "Questions"
    questions: "Kesyon", // Auto-generated string
    // "Triggers"
    triggers: "Deklanche",
    // "Custom variables"
    calculatedValues: "Varyab koutim",
    // "Survey id"
    surveyId: "Sondaj id", // Auto-generated string
    // "Survey post id"
    surveyPostId: "ID pòs sondaj la", // Auto-generated string
    // "Survey show data saving"
    surveyShowDataSaving: "Sondaj montre ekonomize done", // Auto-generated string
    // "Question description alignment"
    questionDescriptionLocation: "Kesyon deskripsyon aliyman",
    // "Progress bar type"
    progressBarType: "Kalite ba pwogrè", // Auto-generated string
    // "Show table of contents (TOC)"
    showTOC: "Montre tab la (TOC)",
    // "TOC alignment"
    tocLocation: "TOC aliyman",
    // "Question title pattern"
    questionTitlePattern: "Kesyon tit modèl", // Auto-generated string
    // "Survey width mode"
    widthMode: "Mòd lajè sondaj",
    // "Show brand info"
    showBrandInfo: "Montre enfòmasyon sou mak", // Auto-generated string
    // "Use display values in dynamic texts"
    useDisplayValuesInDynamicTexts: "Sèvi ak valè ekspozisyon nan tèks dinamik",
    // "Visible if"
    visibleIf: "Vizib si", // Auto-generated string
    // "Default value expression"
    defaultValueExpression: "Ekspresyon valè default",
    // "Required if"
    requiredIf: "Obligatwa si", // Auto-generated string
    // "Reset value if"
    resetValueIf: "Reyajiste valè si",
    // "Set value if"
    setValueIf: "Mete valè si",
    // "Validation rules"
    validators: "Règ validation",
    // "Bindings"
    bindings: "Liaisons", // Auto-generated string
    // "Render as"
    renderAs: "Rann kòm", // Auto-generated string
    // "Attach original items"
    attachOriginalItems: "Tache atik orijinal yo", // Auto-generated string
    // "Choices"
    choices: "Chwa",
    // "Choices by url"
    choicesByUrl: "Chwa pa url", // Auto-generated string
    // "Currency"
    currency: "Lajan", // Auto-generated string
    // "Cell hint"
    cellHint: "Sijesyon selilè", // Auto-generated string
    // "Total maximum fraction digits"
    totalMaximumFractionDigits: "Total maksimòm chif fraksyon", // Auto-generated string
    // "Total minimum fraction digits"
    totalMinimumFractionDigits: "Total chif fraksyon minimòm", // Auto-generated string
    // "Columns"
    columns: "Kolòn", // Auto-generated string
    // "Detail elements"
    detailElements: "Eleman detay", // Auto-generated string
    // "Allow adaptive actions"
    allowAdaptiveActions: "Pèmèt aksyon adaptasyon", // Auto-generated string
    // "Default row value"
    defaultRowValue: "Valè ranje default", // Auto-generated string
    // [Auto-translated] "Auto-expand new row details"
    detailPanelShowOnAdding: "Oto-elaji nouvo detay ranje",
    // "Choices lazy load enabled"
    choicesLazyLoadEnabled: "Chwa chaj parese pèmèt", // Auto-generated string
    // "Choices lazy load page size"
    choicesLazyLoadPageSize: "Chwa gwosè paj chaj parese", // Auto-generated string
    // "Input field component"
    inputFieldComponent: "Antre eleman jaden", // Auto-generated string
    // "Item component"
    itemComponent: "Eleman atik", // Auto-generated string
    // "Min"
    min: "Min", // Auto-generated string
    // "Max"
    max: "Max", // Auto-generated string
    // "Min value expression"
    minValueExpression: "Min valè ekspresyon", // Auto-generated string
    // "Max value expression"
    maxValueExpression: "Ekspresyon valè maksimòm", // Auto-generated string
    // "Step"
    step: "Etap", // Auto-generated string
    // "Items for auto-suggest"
    dataList: "Atik pou oto-sijere",
    // "Input field width (in characters)"
    inputSize: "Antre lajè jaden (an karaktè)",
    // "Item label width"
    itemTitleWidth: "Lajè etikèt atik la",
    // "Input value alignment"
    inputTextAlignment: "Antre valè aliyman",
    // "Elements"
    elements: "Eleman", // Auto-generated string
    // "Content"
    content: "Kontni", // Auto-generated string
    // "Navigation title"
    navigationTitle: "Tit navigasyon", // Auto-generated string
    // "Navigation description"
    navigationDescription: "Deskripsyon navigasyon", // Auto-generated string
    // "Long tap"
    longTap: "Tape long", // Auto-generated string
    // "Expand input field dynamically"
    autoGrow: "Elaji jaden opinyon dinamik",
    // "Enable resize handle"
    allowResize: "Pèmèt manch redimensionner",
    // "Accept carriage return"
    acceptCarriageReturn: "Aksepte retounen cha", // Auto-generated string
    // "Display mode"
    displayMode: "Mòd ekspozisyon",
    // "Rate type"
    rateType: "Kalite pousantaj", // Auto-generated string
    // "Label"
    label: "Mete etikèt sou", // Auto-generated string
    // "Content mode"
    contentMode: "Mòd kontni",
    // "Image and thumbnail fit"
    imageFit: "Imaj ak miniature anfòm",
    // "Alt text"
    altText: "Alt tèks",
    // "Height"
    height: "Wotè", // Auto-generated string
    // "Height on smartphones"
    mobileHeight: "Wotè sou smartphones",
    // "Pen color"
    penColor: "Koulè plim", // Auto-generated string
    // "Background color"
    backgroundColor: "Koulè background",
    // "Template elements"
    templateElements: "Eleman modèl", // Auto-generated string
    // "Operator"
    operator: "Operatè", // Auto-generated string
    // "Is variable"
    isVariable: "Èske varyab", // Auto-generated string
    // "Run expression"
    runExpression: "Kouri ekspresyon", // Auto-generated string
    // "Show caption"
    showCaption: "Montre tit", // Auto-generated string
    // "Icon name"
    iconName: "Non ikon", // Auto-generated string
    // "Icon size"
    iconSize: "Gwosè ikon", // Auto-generated string
    // "Precision"
    precision: "Presizyon", // Auto-generated string
    // "Matrix drag handle area"
    matrixDragHandleArea: "Zòn manch trennen matris", // Auto-generated string
    // "Background image"
    backgroundImage: "Imaj background",
    // "Background image fit"
    backgroundImageFit: "Imaj background anfòm", // Auto-generated string
    // "Background image attachment"
    backgroundImageAttachment: "Tachman imaj background", // Auto-generated string
    // "Background opacity"
    backgroundOpacity: "Opakite background", // Auto-generated string
    // "Allow selective ranking"
    selectToRankEnabled: "Pèmèt klasman selektif",
    // "Ranking area alignment"
    selectToRankAreasLayout: "Aliyman zòn klasman",
    // "Text to show if all options are selected"
    selectToRankEmptyRankedAreaText: "Tèks pou montre si yo chwazi tout opsyon",
    // "Placeholder text for the ranking area"
    selectToRankEmptyUnrankedAreaText: "Tèks anplasman pou zòn klasman an",
    // "Allow camera access"
    allowCameraAccess: "Pèmèt aksè kamera", // Auto-generated string
    // "Rating icon color mode"
    scaleColorMode: "Rating mòd koulè icon",
    // "Smileys color scheme"
    rateColorMode: "Konplo koulè Smileys",
    // "Copy display value"
    copyDisplayValue: "Kopi valè ekspozisyon", // Auto-generated string
    // "Column span"
    effectiveColSpan: "span kolòn",
    // "Progress bar area width"
    progressBarInheritWidthFrom: "Lajè zòn ba pwogrè",
    // [Auto-translated] "Theme name"
    themeName: "Non tèm"
  },
  theme: {
    // "Advanced mode"
    advancedMode: "Mòd avanse",
    // "Page"
    pageTitle: "Paj",
    // "Question box"
    questionTitle: "Bwat kesyon",
    // "Input element"
    editorPanel: "Eleman Antre",
    // "Lines"
    lines: "Liy",
    // "Default"
    primaryDefaultColor: "Default",
    // "Hover"
    primaryDarkColor: "Hover",
    // "Selected"
    primaryLightColor: "Chwazi",
    // "Background color"
    backgroundDimColor: "Koulè background",
    // "Corner radius"
    cornerRadius: "Reyon kwen",
    // "Default background"
    backcolor: "Default background",
    // "Hover background"
    hovercolor: "Hover background",
    // "Border decoration"
    borderDecoration: "Dekorasyon fwontyè",
    // "Font color"
    fontColor: "Koulè font",
    // "Background color"
    backgroundColor: "Koulè background",
    // "Default color"
    primaryForecolor: "Koulè default",
    // "Disabled color"
    primaryForecolorLight: "Koulè andikape",
    // "Font"
    font: "Font",
    // "Darker"
    borderDefault: "Pi fonse",
    // "Lighter"
    borderLight: "Pi lejè",
    // "Font family"
    fontFamily: "Fanmi font",
    // "Regular"
    fontWeightRegular: "Regilye",
    // "Heavy"
    fontWeightHeavy: "Lou",
    // "Semi-bold"
    fontWeightSemiBold: "Semi-gras",
    // "Bold"
    fontWeightBold: "Fonse",
    // "Color"
    color: "Koulè",
    // "Placeholder color"
    placeholderColor: "Koulè placeholder",
    // "Size"
    size: "Gwosè",
    // "Opacity"
    opacity: "Opakite",
    // "X"
    boxShadowX: "X",
    // "Y"
    boxShadowY: "Y",
    // "Add Shadow Effect"
    boxShadowAddRule: "Ajoute efè lonbraj",
    // "Blur"
    boxShadowBlur: "Flou",
    // "Spread"
    boxShadowSpread: "Gaye",
    // "Drop"
    boxShadowDrop: "Drop",
    // "Inner"
    boxShadowInner: "Enteryè",
    names: {
      // "Default"
      default: "Defo",
      // "Sharp"
      sharp: "Byen file",
      // "Borderless"
      borderless: "San fwontyè",
      // "Flat"
      flat: "Plat",
      // "Plain"
      plain: "Plenn",
      // "Double Border"
      doubleborder: "Double fwontyè",
      // "Layered"
      layered: "Kouch",
      // "Solid"
      solid: "Solid",
      // "3D"
      threedimensional: "3D",
      // "Contrast"
      contrast: "Kontras"
    },
    colors: {
      // "Teal"
      teal: "Teal",
      // "Blue"
      blue: "Blue",
      // "Purple"
      purple: "Purple",
      // "Orchid"
      orchid: "Orchid",
      // "Tulip"
      tulip: "Tulip",
      // "Brown"
      brown: "Brown",
      // "Green"
      green: "Green",
      // "Gray"
      gray: "Gray"
    }
  },
  creatortheme: {
    // "Surface background"
    "--sjs-special-background": "Fond sifas",
    // "Primary"
    "--sjs-primary-background-500": "Prensipal",
    // "Secondary"
    "--sjs-secondary-background-500": "Segondè",
    // "Surface"
    surfaceScale: "Sifas",
    // "UI elements"
    userInterfaceBaseUnit: "Eleman UI",
    // "Font"
    fontScale: "Font",
    names: {
      // "Survey Creator 2020"
      sc2020: "Sondaj Kreyatè 2020",
      // "Light"
      "default-light": "Limyè",
      // "Dark"
      "default-dark": "Fè nwa",
      // "Contrast"
      "default-contrast": "Kontras"
    }
  }
};

// Uncomment the line below if you create a custom dictionary.
// Replace "en" with a custom locale code (for example, "fr" or "de"),
// Replace `enStrings` with the name of the variable that contains the custom dictionary.
setupLocale({ localeCode: "ht", strings: htStrings });