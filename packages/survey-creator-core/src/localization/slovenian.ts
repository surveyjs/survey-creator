import { setupLocale } from "survey-creator-core";

export var slStrings = {
  // survey templates
  survey: {
    // "Edit"
    edit: "Uredi",
    // "Watch and learn how to create surveys"
    externalHelpLink: "Glej in se nauči, kako ustvariti ankete.",
    // "https://www.youtube.com/channel/UCH2ru9okIcooNZfpIbyq4qQ?view_as=subscriber"
    externalHelpLinkUrl: "https://www.youtube.com/channel/UCH2ru9okIcooNZfpIbyq4qQ?view_as=subscriber",
    // "Please drop a question here from the Toolbox."
    dropQuestion: "Prosim, postavite vprašanje tukaj iz Orodjarne.",
    // "Create a rule to customize the flow of the survey."
    addLogicItem: "Ustvarite pravilo za prilagoditev toka ankete.",
    // "Copy"
    copy: "Kopiraj",
    // "Duplicate"
    duplicate: "Dvojnik",
    // "Add to toolbox"
    addToToolbox: "Dodaj v orodje",
    // "Delete Panel"
    deletePanel: "Izbriši ploščo",
    // "Delete Question"
    deleteQuestion: "Izbriši vprašanje",
    // "Convert to"
    convertTo: "Pretvori v",
    // "Drag element"
    drag: "Povlecite element"
  },
  // Creator tabs
  tabs: {
    // "Preview"
    preview: "Predogled",
    // "Themes"
    theme: "Teme",
    // "Translations"
    translation: "Prevodi",
    // "Designer"
    designer: "Oblikovalec",
    // "JSON Editor"
    json: "Urejevalnik JSON",
    // "Logic"
    logic: "Logika"
  },
  // Question types
  qt: {
    // "Default"
    default: "Privzeto",
    // "Checkboxes"
    checkbox: "Potrditvena polja",
    // "Long Text"
    comment: "Dolgo besedilo",
    // "Image Picker"
    imagepicker: "Izbirnik slik",
    // "Ranking"
    ranking: "Uvrstitev",
    // "Image"
    image: "Slika",
    // "Dropdown"
    dropdown: "Spustni meni",
    // "Multi-Select Dropdown"
    tagbox: "Spustni meni za več izbir",
    // "File Upload"
    file: "Nalaganje datoteke",
    // "HTML"
    html: "HTML",
    // "Single-Select Matrix"
    matrix: "Matrika z eno izbiro",
    // "Multi-Select Matrix"
    matrixdropdown: "Multi-Select Matrix",
    // "Dynamic Matrix"
    matrixdynamic: "Dinamična matrica",
    // "Multiple Textboxes"
    multipletext: "Več besedilnih polj",
    // "Panel"
    panel: "Panel",
    // "Dynamic Panel"
    paneldynamic: "Dinamična plošča",
    // "Radio Button Group"
    radiogroup: "Skupina radijskih gumbov",
    // "Rating Scale"
    rating: "Ocenjevalna lestvica",
    // [Auto-translated] "Slider"
    slider: "Drsnik",
    // "Single-Line Input"
    text: "Enovrstični vnos",
    // "Yes/No (Boolean)"
    boolean: "Da/Ne (logično)",
    // "Expression (read-only)"
    expression: "Izraz (samo za branje)",
    // "Signature"
    signaturepad: "Podpis",
    // "Button Group"
    buttongroup: "Skupina gumbov"
  },
  toolboxCategories: {
    // "General"
    general: "Splošno",
    // "Choice Questions"
    choice: "Izbirna vprašanja",
    // "Text Input Questions"
    text: "Vprašanja za vnos besedila",
    // "Containers"
    containers: "Zabojniki",
    // "Matrix Questions"
    matrix: "Matrična vprašanja",
    // "Misc"
    misc: "Misc"
  },
  // Strings in SurveyJS Creator
  ed: {
    // "Default ({0})"
    defaultLocale: "Privzeto ({0})",
    // "Survey"
    survey: "Anketa",
    // "Settings"
    settings: "Nastavitve",
    // "Open settings"
    settingsTooltip: "Odprite nastavitve",
    // "Survey Settings"
    surveySettings: "Nastavitve ankete",
    // "Survey settings"
    surveySettingsTooltip: "Nastavitve ankete",
    // "Theme Settings"
    themeSettings: "Nastavitve teme",
    // "Theme settings"
    themeSettingsTooltip: "Nastavitve teme",
    // "Creator Settings"
    creatorSettingTitle: "Nastavitve ustvarjalca",
    // "Show Panel"
    showPanel: "Pokaži ploščo",
    // "Hide Panel"
    hidePanel: "Skrij ploščo",
    // "Select previous"
    prevSelected: "Izberite prejšnji",
    // "Select next"
    nextSelected: "Izberite Naprej",
    // "Focus previous"
    prevFocus: "Osredotoči se na prejšnje",
    // "Focus next"
    nextFocus: "Osredotočite se na naslednjega",
    // "Survey"
    surveyTypeName: "Anketa",
    // "Page"
    pageTypeName: "Stran",
    // "Panel"
    panelTypeName: "Panel",
    // "Question"
    questionTypeName: "vprašanje",
    // "Column"
    columnTypeName: "Stolpec",
    // "Add New Page"
    addNewPage: "Dodaj novo stran",
    // "Scroll to the Right"
    moveRight: "Pomaknite se v desno",
    // "Scroll to the Left"
    moveLeft: "Pomaknite se v levo",
    // "Delete Page"
    deletePage: "Izbriši stran",
    // "Edit Page"
    editPage: "Uredi stran",
    // "Edit"
    edit: "Uredi",
    // "page"
    newPageName: "stran",
    // "question"
    newQuestionName: "vprašanje",
    // "panel"
    newPanelName: "panel",
    // "text"
    newTextItemName: "tekst",
    // "Default"
    defaultV2Theme: "Privzeto",
    // "Modern"
    modernTheme: "Moderno",
    // "Default (legacy)"
    defaultTheme: "Privzeto (podedovano)",
    // "Preview Survey Again"
    testSurveyAgain: "Spet predogled ankete",
    // "Survey width: "
    testSurveyWidth: "Širina ankete: ",
    // "You had to navigate to"
    navigateToMsg: "Morali ste navigirati do",
    // "Save Survey"
    saveSurvey: "Shrani anketo",
    // "Save Survey"
    saveSurveyTooltip: "Shrani anketo",
    // "Save Theme"
    saveTheme: "Shrani temo",
    // "Save Theme"
    saveThemeTooltip: "Shrani temo",
    // "Hide errors"
    jsonHideErrors: "Skrij napake",
    // "Show errors"
    jsonShowErrors: "Pokaži napake",
    // "Undo"
    undo: "Razveljavi",
    // "Redo"
    redo: "Ponovi",
    // "Undo last change"
    undoTooltip: "Razveljavi zadnjo spremembo",
    // "Redo the change"
    redoTooltip: "Ponovite spremembo",
    // "Expand"
    expandTooltip: "Razširi",
    // "Collapse"
    collapseTooltip: "Strni",
    // "Expand All"
    expandAllTooltip: "Razširi vse",
    // "Collapse All"
    collapseAllTooltip: "Collapse All",
    // "Zoom In"
    zoomInTooltip: "Povečaj",
    // "Zoom to 100%"
    zoom100Tooltip: "100%",
    // "Zoom Out"
    zoomOutTooltip: "Pomanjšaj",
    // "Lock expand/collapse state for questions"
    lockQuestionsTooltip: "Zakleni stanje razširitve/strnitve za vprašanja",
    // "Show more"
    showMoreChoices: "Pokaži več",
    // "Show less"
    showLessChoices: "Pokaži manj",
    // "Copy"
    copy: "Kopiraj",
    // "Cut"
    cut: "Izreži",
    // "Paste"
    paste: "Prilepi",
    // "Copy selection to clipboard"
    copyTooltip: "Kopiraj izbiro v odložišče",
    // "Cut selection to clipboard"
    cutTooltip: "Izreži izbiro v odložišče",
    // "Paste from clipboard"
    pasteTooltip: "Prilepi iz odložišča",
    // "Options"
    options: "Možnosti",
    // "Generate Valid JSON"
    generateValidJSON: "Ustvari veljaven JSON",
    // "Generate Readable JSON"
    generateReadableJSON: "Ustvari berljiv JSON",
    // "Toolbox"
    toolbox: "Orodjarna",
    // "Properties"
    "property-grid": "Lastnosti",
    // [Auto-translated] "Search"
    toolboxSearch: "Iskanje",
    // "Type to search..."
    toolboxFilteredTextPlaceholder: "Vnesite za iskanje...",
    // "No results found"
    toolboxNoResultsFound: "Ni najdenih rezultatov",
    // "Type to search..."
    propertyGridFilteredTextPlaceholder: "Vnesite za iskanje...",
    // "No results found"
    propertyGridNoResultsFound: "Ni najdenih rezultatov",
    // "Start configuring your form"
    propertyGridPlaceholderTitle: "Začnite s konfiguracijo obrazca",
    // "Click any category icon to explore survey settings. Additional settings will become available once you add a survey element to the design surface."
    propertyGridPlaceholderDescription: "Kliknite katero koli ikono kategorije za raziskovanje nastavitev ankete. Dodatne nastavitve bodo na voljo, ko dodate element ankete na oblikovno površino.",
    // "Please correct JSON."
    correctJSON: "Prosimo, popravite JSON.",
    // "Survey Results "
    surveyResults: "Rezultati ankete",
    // "As Table"
    surveyResultsTable: "Kot tabela",
    // "As JSON"
    surveyResultsJson: "Kot JSON",
    // "Question Title"
    resultsTitle: "Naslov vprašanja",
    // "Question Name"
    resultsName: "Ime vprašanja",
    // "Answer Value"
    resultsValue: "Vrednost odgovora",
    // "Display Value"
    resultsDisplayValue: "Prikazana vrednost",
    // "Modified"
    modified: "Spremenjeno",
    // "Saving"
    saving: "Shranjevanje",
    // "Saved"
    saved: "Shranjeno",
    // "Error"
    propertyEditorError: "Napaka",
    // "Error! Editor content is not saved."
    saveError: "Napaka! Vsebina urejevalnika ni shranjena.",
    // "Language Settings"
    translationPropertyGridTitle: "Jezikovne nastavitve",
    // "Theme Settings"
    themePropertyGridTitle: "Nastavitve teme",
    // [Auto-translated] "Add Language"
    addLanguageTooltip: "Dodajanje jezika",
    // "Languages"
    translationLanguages: "Jeziki",
    // "Are you certain you wish to delete all strings for this language?"
    translationDeleteLanguage: "Ste prepričani, da želite izbrisati vse nize za ta jezik?",
    // "Select language to translate"
    translationAddLanguage: "Izberite jezik za prevod",
    // "All Strings"
    translationShowAllStrings: "Vsi nizi",
    // "Used Strings Only"
    translationShowUsedStringsOnly: "Samo uporabljeni nizi",
    // "All Pages"
    translationShowAllPages: "Vse strani",
    // "No strings to translate. Please change the filter."
    translationNoStrings: "Ni nizov za prevod. Spremenite filter.",
    // "Export to CSV"
    translationExportToSCVButton: "Izvozi v CSV",
    // "Import from CSV"
    translationImportFromSCVButton: "Uvozi iz CSV",
    // "Auto-translate All"
    translateUsigAI: "Samodejno prevedi vse",
    // "Translate from: "
    translateUsigAIFrom: "Prevedi iz: ",
    // "Untranslated strings"
    translationDialogTitle: "Neprevedeni nizi",
    // "Merge {0} with default locale"
    translationMergeLocaleWithDefault: "Združi {0} s privzetim jezikom",
    // "Translation..."
    translationPlaceHolder: "Prevod...",
    // "Source: "
    translationSource: "Vir: ",
    // "Target: "
    translationTarget: "Cilj: ",
    // "YouTube links are not supported."
    translationYouTubeNotSupported: "Povezave do YouTuba niso podprte.",
    // "Export"
    themeExportButton: "Izvoz",
    // "Import"
    themeImportButton: "Uvoz",
    // "Export"
    surveyJsonExportButton: "Izvoz",
    // "Import"
    surveyJsonImportButton: "Uvoz",
    // "Copy to clipboard"
    surveyJsonCopyButton: "Kopiraj v odložišče",
    // "Reset theme settings to default"
    themeResetButton: "Ponastavi nastavitve teme na privzete",
    // "Do you really want to reset the theme? All your customizations will be lost."
    themeResetConfirmation: "Ali res želite ponastaviti temo? Vse vaše prilagoditve bodo izgubljene.",
    // "Yes, reset the theme"
    themeResetConfirmationOk: "Da, ponastavi temo",
    // "Bold"
    bold: "Krepko",
    // "Italic"
    italic: "Ležeče",
    // "Underline"
    underline: "Podčrtano",
    // "Add Question"
    addNewQuestion: "Dodaj vprašanje",
    // "Select page..."
    selectPage: "Izberite stran...",
    // "Choices are copied from"
    carryForwardChoicesCopied: "Možnosti so kopirane iz",
    // "Choices are loaded from a web service."
    choicesLoadedFromWebText: "Možnosti so naložene iz spletne storitve.",
    // "Go to settings"
    choicesLoadedFromWebLinkText: "Pojdi na nastavitve",
    // "Preview of loaded choice options"
    choicesLoadedFromWebPreviewTitle: "Predogled naloženih možnosti izbire",
    // "HTML content will be here."
    htmlPlaceHolder: "Tukaj bo HTML vsebina.",
    // "Drop a question from the toolbox here."
    panelPlaceHolder: "Sem povlecite vprašanje iz orodjarne.",
    // "The survey is empty. Drag an element from the toolbox or click the button below."
    surveyPlaceHolder: "Anketa je prazna. Povlecite element iz orodjarne ali kliknite spodnji gumb.",
    // "The page is empty. Drag an element from the toolbox or click the button below."
    pagePlaceHolder: "Stran je prazna. Povlecite element iz orodjarne ali kliknite spodnji gumb.",
    // "Drag and drop an image here or click the button below and choose an image to upload"
    imagePlaceHolder: "Povlecite in spustite sliko sem ali kliknite spodnji gumb in izberite sliko za nalaganje.",
    // "Click the \"Add Question\" button below to start creating your form."
    surveyPlaceHolderMobile: "Kliknite gumb \"Dodaj vprašanje\" spodaj, da začnete ustvarjati svoj obrazec.",
    // "Your form is empty"
    surveyPlaceholderTitle: "Vaš obrazec je prazen",
    // "Your form is empty"
    surveyPlaceholderTitleMobile: "Vaš obrazec je prazen",
    // "Drag an element from the toolbox or click the button below."
    surveyPlaceholderDescription: "Povlecite element iz orodjarne ali kliknite spodnji gumb.",
    // "Drag an element from the toolbox or click the button below."
    surveyPlaceholderDescriptionMobile: "Povlecite element iz orodjarne ali kliknite spodnji gumb.",
    // "No preview"
    previewPlaceholderTitle: "Ni predogleda",
    // "No preview"
    previewPlaceholderTitleMobile: "Ni predogleda",
    // "The survey doesn't contain any visible elements."
    previewPlaceholderDescription: "Anketa ne vsebuje nobenih vidnih elementov.",
    // "The survey doesn't contain any visible elements."
    previewPlaceholderDescriptionMobile: "Anketa ne vsebuje nobenih vidnih elementov.",
    // "No strings to translate"
    translationsPlaceholderTitle: "Ni nizov za prevod",
    // "No strings to translate"
    translationsPlaceholderTitleMobile: "Ni nizov za prevod",
    // "Add elements to your form or change the strings filter in the toolbar."
    translationsPlaceholderDescription: "Dodajte elemente v svoj obrazec ali spremenite filter nizov v orodni vrstici.",
    // "Add elements to your form or change the strings filter in the toolbar."
    translationsPlaceholderDescriptionMobile: "Dodajte elemente v svoj obrazec ali spremenite filter nizov v orodni vrstici.",
    // "Click the \"Add Question\" button below to add a new element to the page."
    pagePlaceHolderMobile: "Kliknite gumb \"Dodaj vprašanje\" spodaj, da dodate nov element na stran.",
    // "Click the \"Add Question\" button below to add a new element to the panel."
    panelPlaceHolderMobile: "Kliknite gumb \"Dodaj vprašanje\" spodaj, da dodate nov element v ploščo.",
    // "Click the button below and choose an image to upload"
    imagePlaceHolderMobile: "Kliknite spodnji gumb in izberite sliko za nalaganje",
    // "Choose Image"
    imageChooseImage: "Izberite sliko",
    // "Add {0}"
    addNewTypeQuestion: "Dodaj {0}", // {0} is localizable question type
    // "[LOGO]"
    chooseLogoPlaceholder: "[LOGOTIP]",
    // "Item "
    choices_Item: "Element ",
    // "Select a file"
    selectFile: "Izberite datoteko",
    // "Remove the file"
    removeFile: "Odstrani datoteko",
    lg: {
      // "Add New Rule"
      addNewItem: "Dodaj novo pravilo",
      // "Create a rule to customize the flow of the survey."
      empty_tab: "Ustvarite pravilo za prilagoditev poteka ankete.",
      // "No logical rules"
      logicPlaceholderTitle: "Ni logičnih pravil",
      // "No logical rules"
      logicPlaceholderTitleMobile: "Ni logičnih pravil",
      // "Create a rule to customize the flow of the survey."
      logicPlaceholderDescription: "Ustvarite pravilo za prilagoditev poteka ankete.",
      // "Create a rule to customize the flow of the survey."
      logicPlaceholderDescriptionMobile: "Ustvarite pravilo za prilagoditev poteka ankete.",
      // "Show/hide page"
      page_visibilityName: "Prikaži/skrij stran",
      // "Enable/disable page"
      page_enableName: "Omogoči/onemogoči stran",
      // "Make page required"
      page_requireName: "Nastavi stran kot obvezno",
      // "Show/hide panel"
      panel_visibilityName: "Prikaži/skrij ploščo",
      // "Enable/disable panel"
      panel_enableName: "Omogoči/onemogoči ploščo",
      // "Make panel required"
      panel_requireName: "Nastavi ploščo kot obvezno",
      // "Show/hide question"
      question_visibilityName: "Prikaži/skrij vprašanje",
      // "Enable/disable question"
      question_enableName: "Omogoči/onemogoči vprašanje",
      // "Make question required"
      question_requireName: "Nastavi vprašanje kot obvezno",
      // "Reset question value"
      question_resetValueName: "Ponastavi vrednost vprašanja",
      // "Set question value"
      question_setValueName: "Nastavi vrednost vprašanja",
      // "Show/hide column"
      column_visibilityName: "Prikaži/skrij stolpec",
      // "Enable/disable column"
      column_enableName: "Omogoči/onemogoči stolpec",
      // "Make column required"
      column_requireName: "Nastavi stolpec kot obvezen",
      // "Reset column value"
      column_resetValueName: "Ponastavi vrednost stolpca",
      // "Set column value"
      column_setValueName: "Nastavi vrednost stolpca",
      // "Complete survey"
      trigger_completeName: "Zaključi anketo",
      // "Set answer"
      trigger_setvalueName: "Nastavi odgovor",
      // "Copy answer"
      trigger_copyvalueName: "Kopiraj odgovor",
      // "Skip to question"
      trigger_skipName: "Preskoči na vprašanje",
      // "Run expression"
      trigger_runExpressionName: "Izvedi izraz",
      // "Set \"Thank You\" page markup"
      completedHtmlOnConditionName: "Nastavi vsebino strani \"Hvala\"",
      // "Make the page visible when the logical expression evaluates to true. Otherwise, keep the page invisible."
      page_visibilityDescription: "Stran postane vidna, ko logični izraz vrne true. V nasprotnem primeru ostane skrita.",
      // "Make the page visible when the logical expression evaluates to true. Otherwise, keep the panel invisible."
      panel_visibilityDescription: "Plošča postane vidna, ko logični izraz vrne true. V nasprotnem primeru ostane skrita.",
      // "Make the panel and all elements inside it enabled when the logical expression evaluates to true. Otherwise, keep them disabled."
      panel_enableDescription: "Plošča in vsi elementi v njej postanejo omogočeni, ko logični izraz vrne true. V nasprotnem primeru ostanejo onemogočeni.",
      // "Make the question visible when the logical expression evaluates to true. Otherwise, keep the question invisible."
      question_visibilityDescription: "Vprašanje postane vidno, ko logični izraz vrne true. V nasprotnem primeru ostane skrito.",
      // "Make the question enabled when the logical expression evaluates to true. Otherwise, keep the question disabled."
      question_enableDescription: "Vprašanje postane omogočeno, ko logični izraz vrne true. V nasprotnem primeru ostane onemogočeno.",
      // "Question becomes required when the logical expression evaluates to true."
      question_requireDescription: "Vprašanje postane obvezno, ko logični izraz vrne true.",
      // "When the logical expression evaluates to true, the survey ends, and the respondent sees the \"Thank you\" page."
      trigger_completeDescription: "Ko logični izraz vrne true, se anketa zaključi in uporabnik vidi stran \"Hvala\".",
      // "When question values used in the logical expression are changed, and the expression evaluates to true, the specified value is assigned to the selected question."
      trigger_setvalueDescription: "Ko se spremenijo vrednosti vprašanj v logičnem izrazu in izraz vrne true, se določena vrednost dodeli izbranemu vprašanju.",
      // "When question values used in the logical expression are changed, and the expression evaluates to true, the value of the selected question is copied to another question."
      trigger_copyvalueDescription: "Ko se spremenijo vrednosti vprašanj v logičnem izrazu in izraz vrne true, se vrednost izbranega vprašanja kopira v drugo vprašanje.",
      // "When the logical expression evaluates to true, the survey focuses/jumps to the selected question."
      trigger_skipDescription: "Ko logični izraz vrne true, anketa skoči na izbrano vprašanje.",
      // "When the logical expression evaluates to true, the survey evaluates another expression. Optionally, the result of the latter expression can be assigned as a value to the selected question"
      trigger_runExpressionDescription: "Ko logični izraz vrne true, anketa izvede drug izraz. Po želji se rezultat lahko dodeli izbranemu vprašanju.",
      // "If the logical expression evaluates to true, the \"Thank You\" page displays the specified content."
      completedHtmlOnConditionDescription: "Če logični izraz vrne true, stran \"Hvala\" prikaže določeno vsebino.",
      // "When expression: '{0}' returns true"
      itemExpressionText: "Ko izraz: '{0}' vrne true", // {0} - the expression
      // "New rule"
      itemEmptyExpressionText: "Novo pravilo",
      // "make page {0} visible"
      page_visibilityText: "naredi stran {0} vidno", // {0} page name
      // "make panel {0} visible"
      panel_visibilityText: "naredi ploščo {0} vidno", // {0} panel name
      // "make panel {0} enable"
      panel_enableText: "omogoči ploščo {0}", // {0} panel name
      // "make question {0} visible"
      question_visibilityText: "naredi vprašanje {0} vidno", // {0} question name
      // "make question {0} enable"
      question_enableText: "omogoči vprašanje {0}", // {0} question name
      // "make question {0} required"
      question_requireText: "naredi vprašanje {0} obvezno", // {0} question name
      // "reset value for question: {0}"
      question_resetValueText: "ponastavi vrednost vprašanja: {0}", // {0} question name.
      // "assign value: {1} to question: {0}"
      question_setValueText: "dodeli vrednost: {1} vprašanju: {0}", // {0} question name and {1} setValueExpression
      // "make column {0} of question {1} visible"
      column_visibilityText: "naredi stolpec {0} vprašanja {1} viden", // {0} column name, {1} question name
      // "make column {0} of question {1} enable"
      column_enableText: "omogoči stolpec {0} vprašanja {1}", // {0} column name, {1} question name
      // "make column {0} of question {1} required"
      column_requireText: "naredi stolpec {0} vprašanja {1} obvezen", // {0} column name, {1} question name
      // "reset cell value for column: {0}"
      column_resetValueText: "ponastavi vrednost celice v stolpcu: {0}", // {0} column name
      // "assign cell value: {1} to column: {0}"
      column_setValueText: "dodeli vrednost celice: {1} stolpcu: {0}", // {0} column name and {1} setValueExpression
      // "An expression whose result will be assigned to the target question."
      setValueExpressionPlaceholder: "Izraz, katerega rezultat bo dodeljen ciljnemu vprašanju.",
      // "survey becomes completed"
      trigger_completeText: "anketa je zaključena",
      // "set into question: {0} value {1}"
      trigger_setvalueText: "nastavi v vprašanje: {0} vrednost {1}", // {0} question name, {1} setValue
      // "clear question value: {0}"
      trigger_setvalueEmptyText: "počisti vrednost vprašanja: {0}", // {0} question name
      // "copy into question: {0} value from question {1}"
      trigger_copyvalueText: "kopiraj v vprašanje: {0} vrednost iz vprašanja {1}", // {0} and {1} question names
      // "survey skip to the question {0}"
      trigger_skipText: "anketa preskoči na vprašanje {0}", // {0} question name
      // "run expression: '{0}'"
      trigger_runExpressionText1: "izvedi izraz: '{0}'", // {0} the expression
      // " and set its result into question: {0}"
      trigger_runExpressionText2: " in nastavi njegov rezultat v vprašanje: {0}", // {0} question name
      // "show custom text for the \"Thank You\" page."
      completedHtmlOnConditionText: "prikaži prilagojeno besedilo za stran \"Hvala\".",
      // "All Questions"
      showAllQuestions: "Vsa vprašanja",
      // "All Action Types"
      showAllActionTypes: "Vse vrste dejanj",
      // "Condition(s)"
      conditions: "Pogoj(i)",
      // "Action(s)"
      actions: "Dejanje(a)",
      // "Define condition(s)"
      expressionEditorTitle: "Določite pogoj(e)",
      // "Define action(s)"
      actionsEditorTitle: "Določite dejanje(a)",
      // "Delete Action"
      deleteAction: "Izbriši dejanje",
      // "Add Action"
      addNewAction: "Dodaj dejanje",
      // "Select action..."
      selectedActionCaption: "Izberite dejanje...",
      // "The logic expression is empty or invalid. Please correct it."
      expressionInvalid: "Logični izraz je prazen ali neveljaven. Prosimo, popravite ga.",
      // "Please add at least one action."
      noActionError: "Prosimo, dodajte vsaj eno dejanje.",
      // "Please fix issues in your action(s)."
      actionInvalid: "Prosimo, popravite težave v dejanjih.",
      // "Logical rules are incomplete"
      uncompletedRule_title: "Logična pravila niso dokončana",
      // "You have not completed some of the logical rules. If you leave the tab now, the changes will be lost. Do you still want to leave the tab without completing the changes?"
      uncompletedRule_text: "Nekatera logična pravila niso dokončana. Če zdaj zapustite zavihek, bodo spremembe izgubljene. Ali želite zapustiti zavihek brez dokončanja sprememb?",
      // "Yes"
      uncompletedRule_apply: "Da",
      // "No, I want to complete the rules"
      uncompletedRule_cancel: "Ne, želim dokončati pravila"
    }
  },
  // Property Editors
  pe: {
    panel: {
      // "Panel name"
      name: "Ime plošče",
      // "Panel title"
      title: "Naslov plošče",
      // "Panel description"
      description: "Opis plošče",
      // "Make the panel visible if"
      visibleIf: "Naredi ploščo vidno, če",
      // "Make the panel required if"
      requiredIf: "Naredi ploščo obvezno, če",
      // "Question order within the panel"
      questionOrder: "Vrstni red vprašanj znotraj plošče",
      // "Move the panel to page"
      page: "Premakni ploščo na stran",
      // "Display the panel on a new line"
      startWithNewLine: "Prikaži ploščo v novi vrstici",
      // "Panel collapse state"
      state: "Stanje strnjevanja plošče",
      // "Inline panel width"
      width: "Širina plošče v vrstici",
      // "Minimum panel width"
      minWidth: "Minimalna širina plošče",
      // "Maximum panel width"
      maxWidth: "Maksimalna širina plošče",
      // "Number this panel"
      showNumber: "Oštevilči to ploščo"
    },
    panellayoutcolumn: {
      // "Effective width, %"
      effectiveWidth: "Dejanska širina, %",
      // "Question title width, px"
      questionTitleWidth: "Širina naslova vprašanja, px"
    },
    paneldynamic: {
      // "Panel name"
      name: "Ime plošče",
      // "Panel title"
      title: "Naslov plošče",
      // "Panel description"
      description: "Opis plošče",
      // [Auto-translated] "Entry display mode"
      displayMode: "Način prikaza vnosa",
      // "Make the panel visible if"
      visibleIf: "Naredi ploščo vidno, če",
      // "Make the panel required if"
      requiredIf: "Naredi ploščo obvezno, če",
      // "Move the panel to page"
      page: "Premakni ploščo na stran",
      // "Display the panel on a new line"
      startWithNewLine: "Prikaži ploščo v novi vrstici",
      // "Panel collapse state"
      state: "Stanje strnjevanja plošče",
      // "Inline panel width"
      width: "Širina plošče v vrstici",
      // "Minimum panel width"
      minWidth: "Minimalna širina plošče",
      // "Maximum panel width"
      maxWidth: "Maksimalna širina plošče",
      // [Auto-translated] "Confirm entry removal"
      confirmDelete: "Potrdi odstranitev vnosa",
      // "Entry description pattern"
      templateDescription: "Vzorec opisa plošče",
      // "Entry title pattern"
      templateTitle: "Vzorec naslova plošče",
      // "Empty panel text"
      noEntriesText: "Prazno besedilo plošče",
      // "Tab title pattern"
      templateTabTitle: "Vzorec naslova zavihka",
      // "Tab title placeholder"
      tabTitlePlaceholder: "Zamenjava za naslov zavihka",
      // "Make an individual entry visible if"
      templateVisibleIf: "Naredi posamezno ploščo vidno, če",
      // "Number the panel"
      showNumber: "Oštevilči ploščo",
      // "Panel title alignment"
      titleLocation: "Poravnava naslova plošče",
      // "Panel description alignment"
      descriptionLocation: "Poravnava opisa plošče",
      // "Question title alignment"
      templateQuestionTitleLocation: "Poravnava naslova vprašanja",
      // [Auto-translated] "Question title width"
      templateQuestionTitleWidth: "Širina naslova vprašanja",
      // "Error message alignment"
      templateErrorLocation: "Poravnava sporočila o napaki",
      // "New entry location"
      newPanelPosition: "Nova lokacija plošče",
      // "Show the progress bar"
      showRangeInProgress: "Prikaži vrstico napredka",
      // "Prevent duplicate responses in the following question"
      keyName: "Prepreči podvojene odgovore v naslednjem vprašanju"
    },
    question: {
      // "Question name"
      name: "Ime vprašanja",
      // "Question title"
      title: "Naslov vprašanja",
      // "Question description"
      description: "Opis vprašanja",
      // [Auto-translated] "Show the title and description"
      showTitle: "Pokažite naslov in opis",
      // "Make the question visible if"
      visibleIf: "Naredi vprašanje vidno, če",
      // "Make the question required if"
      requiredIf: "Naredi vprašanje obvezno, če",
      // "Move the question to page"
      page: "Premakni vprašanje na stran",
      // "Question box collapse state"
      state: "Stanje strnjevanja vprašalnika",
      // "Number this question"
      showNumber: "Oštevilči vprašanje",
      // "Question title alignment"
      titleLocation: "Poravnava naslova vprašanja",
      // "Question description alignment"
      descriptionLocation: "Poravnava opisa vprašanja",
      // "Error message alignment"
      errorLocation: "Poravnava sporočila o napaki",
      // "Increase the inner indent"
      indent: "Povečaj notranji zamik",
      // "Inline question width"
      width: "Širina vprašanja v vrstici",
      // "Minimum question width"
      minWidth: "Minimalna širina vprašanja",
      // "Maximum question width"
      maxWidth: "Maksimalna širina vprašanja",
      // "Update input field value"
      textUpdateMode: "Posodobi vrednost vnosnega polja"
    },
    signaturepad: {
      // "Signature area width"
      signatureWidth: "Širina območja za podpis",
      // "Signature area height"
      signatureHeight: "Višina območja za podpis",
      // "Auto-scale the signature area"
      signatureAutoScaleEnabled: "Samodejno prilagodi velikost območja za podpis",
      // "Show a placeholder within signature area"
      showPlaceholder: "Prikaži besedilo vnaprej določenega mesta v območju za podpis",
      // "Placeholder text"
      placeholder: "Besedilo vnaprej določenega mesta",
      // "Placeholder text in read-only or preview mode"
      placeholderReadOnly: "Besedilo vnaprej določenega mesta v načinu samo za branje ali v predoglednem načinu",
      // "Show the Clear button within signature area"
      allowClear: "Prikaži gumb za izbris v območju za podpis",
      // "Minimum stroke width"
      penMinWidth: "Minimalna širina črte",
      // "Maximum stroke width"
      penMaxWidth: "Maksimalna širina črte",
      // "Stroke color"
      penColor: "Barva črte"
    },
    comment: {
      // "Input field height (in lines)"
      rows: "Višina vnosnega polja (v vrsticah)"
    },
    // "Question numbering"
    showQuestionNumbers: "Oštevilčevanje vprašanj",
    // "Question indexing type"
    questionStartIndex: "Vrsta indeksiranja vprašanj",
    expression: {
      // "Expression name"
      name: "Ime izraza",
      // "Expression title"
      title: "Naslov izraza",
      // "Expression description"
      description: "Opis izraza",
      // "Expression"
      expression: "Izraz"
    },
    trigger: {
      // "Expression"
      expression: "Izraz"
    },
    calculatedvalue: {
      // "Expression"
      expression: "Izraz"
    },
    // survey templates
    survey: {
      // "Survey title"
      title: "Naslov ankete",
      // "Survey description"
      description: "Opis ankete",
      // "Make the survey read-only"
      readOnly: "Naredi anketo samo za branje"
    },
    page: {
      // [Auto-translated] "Page name"
      name: "Ime strani",
      // "Page title"
      title: "Naslov strani",
      // [Auto-translated] "Page description"
      description: "Opis strani",
      // "Make the page visible if"
      visibleIf: "Naredi stran vidno, če",
      // "Make the page required if"
      requiredIf: "Naredi stran obvezno, če",
      // "Time limit to complete the page"
      timeLimit: "Časovni omejitev za dokončanje strani",
      // "Question order on the page"
      questionOrder: "Vrstni red vprašanj na strani"
    },
    matrixdropdowncolumn: {
      // "Column name"
      name: "Ime stolpca",
      // "Column title"
      title: "Naslov stolpca",
      // "Prevent duplicate responses"
      isUnique: "Prepreči podvojene odgovore",
      // "Column width"
      width: "Širina stolpca",
      // "Minimum column width"
      minWidth: "Minimalna širina stolpca",
      // "Input field height (in lines)"
      rows: "Višina vnosnega polja (v vrsticah)",
      // "Make the column visible if"
      visibleIf: "Naredi stolpec viden, če",
      // "Make the column required if"
      requiredIf: "Naredi stolpec obvezen, če",
      // "Each option in a separate column"
      showInMultipleColumns: "Vsaka možnost v ločenem stolpcu"
    },
    multipletextitem: {
      // "Name"
      name: "Ime",
      // "Title"
      title: "Naslov"
    },
    masksettings: {
      // "Save masked value in survey results"
      saveMaskedValue: "Shrani zakrito vrednost v rezultatih ankete"
    },
    patternmask: {
      // "Value pattern"
      pattern: "Vzorec vrednosti"
    },
    datetimemask: {
      // "Minimum value"
      min: "Minimalna vrednost",
      // "Maximum value"
      max: "Maksimalna vrednost"
    },
    numericmask: {
      // "Allow negative values"
      allowNegativeValues: "Dovoli negativne vrednosti",
      // "Thousands separator"
      thousandsSeparator: "Ločevalec tisočic",
      // "Decimal separator"
      decimalSeparator: "Ločevalec decimalk",
      // "Value precision"
      precision: "Natančnost vrednosti",
      // "Minimum value"
      min: "Minimalna vrednost",
      // "Maximum value"
      max: "Maksimalna vrednost"
    },
    currencymask: {
      // "Currency prefix"
      prefix: "Predpona valute",
      // "Currency suffix"
      suffix: "Zaimek valute"
    },
    // [Auto-translated] "Clear others when selected"
    isExclusive: "Brisanje drugih, ko so izbrane",
    // [Auto-translated] "Require user to enter a comment"
    isCommentRequired: "Zahteva, da uporabnik vnese komentar",
    // "Display area height"
    imageHeight: "Višina območja za prikaz",
    // "Display area width"
    imageWidth: "Širina območja za prikaz",
    // "Join identifier"
    valueName: "Povezovalni identifikator",
    // [Auto-translated] "Default display value for dynamic texts"
    defaultDisplayValue: "Privzeta prikazana vrednost za dinamična besedila",
    // "Label alignment"
    rateDescriptionLocation: "Poravnava oznake",
    // "Input field width (in characters)"
    size: "Širina vnosa (v znakih)",
    // "Cell error message alignment"
    cellErrorLocation: "Poravnava sporočila o napaki celice",
    // "Enabled"
    enabled: "Omogočeno",
    // "Disabled"
    disabled: "Onemogočeno",
    // "Inherit"
    inherit: "Dedovanje",
    // "Apply"
    apply: "Uporabi",
    // "OK"
    ok: "V redu",
    // "Save"
    save: "Shrani",
    // "Clear"
    clear: "Počisti",
    // "Save"
    saveTooltip: "Shrani",
    // "Cancel"
    cancel: "Prekliči",
    // "Set"
    set: "Nastavi",
    // "Reset"
    reset: "Ponastavi",
    // "Change"
    change: "Spremeni",
    // "Refresh"
    refresh: "Osveži",
    // "Close"
    close: "Zapri",
    // "Delete"
    delete: "Izbriši",
    // "Add"
    add: "Dodaj",
    // "Add New"
    addNew: "Dodaj novo",
    // "Click to add an item..."
    addItem: "Kliknite za dodajanje elementa...",
    // "Click to remove the item..."
    removeItem: "Kliknite za odstranitev elementa...",
    // "Drag the item"
    dragItem: "Povlecite element",
    // "Other"
    addOther: "Drugo",
    // "Select All"
    addSelectAll: "Izberi vse",
    // "None"
    addNone: "Noben",
    // "Remove All"
    removeAll: "Odstrani vse",
    // "Edit"
    edit: "Uredi",
    // "Return without saving"
    back: "Vrni se brez shranjevanja",
    // "Return without saving"
    backTooltip: "Vrni se brez shranjevanja",
    // "Save and return"
    saveAndBack: "Shrani in vrni se",
    // "Save and return"
    saveAndBackTooltip: "Shrani in vrni se",
    // "Done"
    doneEditing: "Končano",
    // "Edit Choices"
    editChoices: "Uredi možnosti",
    // "Show Choices"
    showChoices: "Pokaži možnosti",
    // "Move"
    move: "Premakni",
    // "<empty>"
    empty: "<prazno>",
    // "Value is empty"
    emptyValue: "Vrednost je prazna",
    // "Manual Entry"
    fastEntry: "Ročni vnos",
    // "Value '{0}' is not unique"
    fastEntryNonUniqueError: "Vrednost '{0}' ni edinstvena",
    // "Please limit the number of items from {0} to {1}"
    fastEntryChoicesCountError: "Prosimo, omejite število možnosti od {0} do {1}",
    // "Please enter at least {0} items"
    fastEntryChoicesMinCountError: "Vnesite vsaj {0} možnosti",
    // "Enter the list of choice options and their IDs in the following format:\n\nid|option\n\nA choice option ID is not visible to respondents and can be used in conditional rules."
    fastEntryPlaceholder: "Vnesite seznam možnosti in njihovih ID-jev v naslednjem formatu:\n\nid|možnost\n\nID možnosti ni viden anketirancem in se lahko uporablja v pogojnih pravilih.",
    // "Form Entry"
    formEntry: "Vnos obrazca",
    // "Test the service"
    testService: "Preizkusite storitev",
    // "Please select the element"
    itemSelectorEmpty: "Prosimo, izberite element",
    // "Please select the action"
    conditionActionEmpty: "Prosimo, izberite dejanje",
    // "Select a question..."
    conditionSelectQuestion: "Izberite vprašanje...",
    // "Select a page..."
    conditionSelectPage: "Izberite stran...",
    // "Select a panel..."
    conditionSelectPanel: "Izberite panel...",
    // "Please enter/select the value"
    conditionValueQuestionTitle: "Vnesite/izberite vrednost",
    // "Press ctrl+space to get expression completion hint"
    aceEditorHelp: "Pritisnite ctrl+space za hint za dokončanje izraza",
    // "Current row"
    aceEditorRowTitle: "Trenutna vrstica",
    // "Current panel"
    aceEditorPanelTitle: "Trenutni panel",
    // "For more details please check the documentation"
    showMore: "Za več podrobnosti preverite dokumentacijo",
    // "Available questions"
    assistantTitle: "Na voljo vprašanja",
    // "There is should be at least one column or row"
    cellsEmptyRowsColumns: "Morate imeti vsaj eno stolpec ali vrstico",
    // "Review before submit"
    showPreviewBeforeComplete: "Pregled pred oddajo",
    // "Enabled by a condition"
    overridingPropertyPrefix: "Omogočeno s pogojem",
    // "Reset"
    resetToDefaultCaption: "Ponastavi",
    // "Please enter a value"
    propertyIsEmpty: "Vnesite vrednost",
    // "Please enter a unique value"
    propertyIsNoUnique: "Vnesite edinstveno vrednost",
    // "Please enter a unique name"
    propertyNameIsNotUnique: "Vnesite edinstveno ime",
    // "Do not use reserved words: \"item\", \"choice\", \"panel\", \"row\"."
    propertyNameIsIncorrect: "Ne uporabljajte rezerviranih besed: \"item\", \"choice\", \"panel\", \"row\".",
    // "You don't have any items yet"
    listIsEmpty: "Še nimate nobenih elementov",
    // "You don't have any choices yet"
    "listIsEmpty@choices": "Še nimate nobenih možnosti",
    // "You don't have any columns yet"
    "listIsEmpty@columns": "Še nimate nobenih stolpcev",
    // "You don't have layout columns yet"
    "listIsEmpty@gridLayoutColumns": "Še nimate nobenih postavitev stolpcev",
    // "You don't have any rows yet"
    "listIsEmpty@rows": "Še nimate nobenih vrstic",
    // "You don't have any validation rules yet"
    "listIsEmpty@validators": "Še nimate nobenih pravil za preverjanje",
    // "You don't have any custom variables yet"
    "listIsEmpty@calculatedValues": "Še nimate nobenih spremenljivk",
    // "You don't have any triggers yet"
    "listIsEmpty@triggers": "Še nimate nobenih sprožilcev",
    // "You don't have any links yet"
    "listIsEmpty@navigateToUrlOnCondition": "Še nimate nobenih povezav",
    // "You don't have any pages yet"
    "listIsEmpty@pages": "Še nimate nobenih strani",
    // "Add new choice"
    "addNew@choices": "Dodaj novo možnost",
    // "Add new column"
    "addNew@columns": "Dodaj nov stolpec",
    // "Add new row"
    "addNew@rows": "Dodaj novo vrstico",
    // "Add new rule"
    "addNew@validators": "Dodaj novo pravilo",
    // "Add new variable"
    "addNew@calculatedValues": "Dodaj novo spremenljivko",
    // "Add new trigger"
    "addNew@triggers": "Dodaj nov sprožilec",
    // "Add new URL"
    "addNew@navigateToUrlOnCondition": "Dodaj novo URL",
    // "Add new page"
    "addNew@pages": "Dodaj novo stran",
    // "Expression is empty"
    expressionIsEmpty: "Izraz je prazen",
    // "Value"
    value: "Vrednost",
    // "Text"
    text: "Besedilo",
    // "Row ID"
    rowid: "ID vrstice",
    // "Image or video file URL"
    imageLink: "Povezava do slike ali videa",
    // "Edit column: {0}"
    columnEdit: "Uredi stolpec: {0}",
    // "Edit item: {0}"
    itemEdit: "Uredi element: {0}",
    // "URL"
    url: "URL",
    // "Path to data"
    path: "Pot do podatkov",
    choicesbyurl: {
      // "Web service URL"
      url: "URL spletne storitve",
      // "Get value to store from the following property"
      valueName: "Pridobite vrednost za shranjevanje iz naslednje lastnosti"
    },
    // "Get value to display from the following property"
    titleName: "Pridobite vrednost za prikaz iz naslednje lastnosti",
    // "Get file URLs from the following property"
    imageLinkName: "Pridobite URL-je datotek iz naslednje lastnosti",
    // "Accept empty response"
    allowEmptyResponse: "Sprejmi prazne odgovore",
    // "Title"
    titlePlaceholder: "Naslov",
    // "Survey Title"
    surveyTitlePlaceholder: "Naslov ankete",
    // "Page {num}"
    pageTitlePlaceholder: "Stran {num}",
    // "Start Page"
    startPageTitlePlaceholder: "Začetna stran",
    // "Description"
    descriptionPlaceholder: "Opis",
    // "Description"
    surveyDescriptionPlaceholder: "Opis ankete",
    // "Description"
    pageDescriptionPlaceholder: "Opis strani",
    // "Wrap choices"
    textWrapEnabled: "Prelomi izbire",
    // "Enable the \"Other\" option"
    showOtherItem: "Omogoči možnost \"Drugo\"",
    // "Rename the \"Other\" option"
    otherText: "Preimenuj možnost \"Drugo\"",
    // "Enable the \"None\" option"
    showNoneItem: "Omogoči možnost \"Nobenega\"",
    // "Enable the \"Refuse to Answer\" option"
    showRefuseItem: "Omogoči možnost \"Zavrni odgovor\"",
    // "Enable the \"Don't Know\" option"
    showDontKnowItem: "Omogoči možnost \"Ne vem\"",
    // "Rename the \"None\" option"
    noneText: "Preimenuj možnost \"Nobenega\"",
    // "Enable the \"Select All\" option"
    showSelectAllItem: "Omogoči možnost \"Izberi vse\"",
    // "Rename the \"Select All\" option"
    selectAllText: "Preimenuj možnost \"Izberi vse\"",
    // "Minimum value for auto-generated items"
    choicesMin: "Minimalna vrednost za samodejno ustvarjene možnosti",
    // "Maximum value for auto-generated items"
    choicesMax: "Maksimalna vrednost za samodejno ustvarjene možnosti",
    // "Step value for auto-generated items"
    choicesStep: "Korak za samodejno ustvarjene možnosti",
    // "Name"
    name: "Ime",
    // "Title"
    title: "Naslov",
    // "Cell input type"
    cellType: "Vrsta vnosa v celici",
    // "Column count"
    colCount: "Število stolpcev",
    // "Choice order"
    choicesOrder: "Vrsta izbire",
    // [Auto-translated] "Allow custom choices"
    allowCustomChoices: "Omogočanje izbir po meri",
    // "Visible"
    visible: "Vidno",
    // "Required"
    isRequired: "Obvezno",
    // "Mark as required"
    markRequired: "Označi kot obvezno",
    // "Remove the required mark"
    removeRequiredMark: "Odstrani oznako obveznosti",
    // "Require an answer in each row"
    eachRowRequired: "Zahtevaj odgovor v vsakem vrstici",
    // "Prevent duplicate responses in rows"
    eachRowUnique: "Prepreči podvojene odgovore v vrsticah",
    // "Error message for required questions"
    requiredErrorText: "Sporočilo o napaki za obvezna vprašanja",
    // "Display the question on a new line"
    startWithNewLine: "Prikaz vprašanja na novi vrstici",
    // "Rows"
    rows: "Vrste",
    // "Columns"
    cols: "Stolpci",
    // "Placeholder text within input field"
    placeholder: "Besedilo vnosnega polja",
    // "Show preview area"
    showPreview: "Prikaz predogleda",
    // "Store file content in JSON result as text"
    storeDataAsText: "Shrani vsebino datoteke v JSON rezultat kot besedilo",
    // "Maximum file size (in bytes)"
    maxSize: "Maksimalna velikost datoteke (v bajtih)",
    // "Row count"
    rowCount: "Število vrstic",
    // "Columns layout"
    columnLayout: "Postavitev stolpcev",
    // "\"Add Row\" button alignment"
    addRowButtonLocation: "Poravnava gumba \"Dodaj vrstico\"",
    // "Transpose rows to columns"
    transposeData: "Zamenjaj vrstice s stolpci",
    // "\"Add Row\" button text"
    addRowText: "Besedilo gumba \"Dodaj vrstico\"",
    // "\"Remove Row\" button text"
    removeRowText: "Besedilo gumba \"Odstrani vrstico\"",
    // [Auto-translated] "Input field title pattern"
    singleInputTitleTemplate: "Vzorec naslova vnosnega polja",
    // "Minimum rating value"
    rateMin: "Minimalna vrednost ocene",
    // "Maximum rating value"
    rateMax: "Maksimalna vrednost ocene",
    // "Step value"
    rateStep: "Korak vrednosti",
    // "Minimum value label"
    minRateDescription: "Oznaka za minimalno vrednost",
    // "Maximum value label"
    maxRateDescription: "Oznaka za maksimalno vrednost",
    // "Input type"
    inputType: "Vrsta vnosa",
    // "Option placeholder"
    optionsCaption: "Zaslon možnosti",
    // "Default Answer"
    defaultValue: "Privzeti odgovor",
    // "Default texts"
    cellsDefaultRow: "Privzeta besedila",
    // "Edit survey settings"
    surveyEditorTitle: "Uredi nastavitve ankete",
    // "Edit: {0}"
    qEditorTitle: "Uredi: {0}",
    // "Maximum character limit"
    maxLength: "Maksimalna dolžina znakov",
    // "Build"
    buildExpression: "Ustvari",
    // "Edit"
    editExpression: "Uredi",
    // "and"
    and: "in",
    // "or"
    or: "ali",
    // "Remove"
    remove: "Odstrani",
    // "Add Condition"
    addCondition: "Dodaj pogoj",
    // "Select a question to start configuring conditions."
    emptyLogicPopupMessage: "Izberite vprašanje, da začnete konfigurirati pogoje.",
    // "If"
    if: "Če",
    // "then"
    then: "potem",
    // "Target question"
    setToName: "Ciljno vprašanje",
    // "Question to copy answer from"
    fromName: "Vprašanje za kopiranje odgovora",
    // "Question to skip to"
    gotoName: "Vprašanje za preskočiti",
    // "Rule is incorrect"
    ruleIsNotSet: "Pravilnik je napačen",
    // "Add to the survey results"
    includeIntoResult: "Dodaj v rezultate ankete",
    // "Make the title and description visible"
    showTitle: "Pokaži naslov in opis",
    // "Expand/collapse title"
    expandCollapseTitle: "Pokaži/skrivaj naslov",
    // "Select a survey language"
    locale: "Izberite jezik ankete",
    // "Select device type"
    simulator: "Izberite vrsto naprave",
    // "Switch to landscape orientation"
    landscapeOrientation: "Preklopi v landscape usmeritev",
    // "Switch to portrait orientation"
    portraitOrientation: "Preklopi v portrait usmeritev",
    // "Clear hidden question values"
    clearInvisibleValues: "Počisti skrite vrednosti vprašanj",
    // "Limit to one response"
    cookieName: "Omeji na en odgovor",
    // "Auto-save survey progress on page change"
    partialSendEnabled: "Samodejno shrani napredek ankete ob spremembi strani",
    // "Save the \"Other\" option value as a separate property"
    storeOthersAsComment: "Shrani vrednost možnosti \"Drugo\" kot ločeno lastnost",
    // "Show page titles"
    showPageTitles: "Pokaži naslove strani",
    // "Show page numbers"
    showPageNumbers: "Pokaži številke strani",
    // "\"Previous Page\" button text"
    pagePrevText: "Besedilo gumba \"Prejšnja stran\"",
    // "\"Next Page\" button text"
    pageNextText: "Besedilo gumba \"Naslednja stran\"",
    // "\"Complete Survey\" button text"
    completeText: "Besedilo gumba \"Zaključi anketo\"",
    // "\"Review Answers\" button text"
    previewText: "Besedilo gumba \"Pregled odgovorov\"",
    // "\"Edit Answer\" button text"
    editText: "Besedilo gumba \"Uredi odgovor\"",
    // "\"Start Survey\" button text"
    startSurveyText: "Besedilo gumba \"Začni anketo\"",
    // "Show navigation buttons"
    showNavigationButtons: "Pokaži gumbe za navigacijo",
    // "Navigation buttons alignment"
    navigationButtonsLocation: "Poravnava gumbov za navigacijo",
    // "Show the \"Previous Page\" button"
    showPrevButton: "Pokaži gumb \"Prejšnja stran\"",
    // "First page is a start page"
    firstPageIsStartPage: "Prva stran je začetna stran",
    // "Show the \"Thank You\" page"
    showCompletePage: "Pokaži stran \"Hvala\"",
    // "Auto-advance to the next page"
    autoAdvanceEnabled: "Samodejni prehod na naslednjo stran",
    // "Complete the survey automatically"
    autoAdvanceAllowComplete: "Samodejno zaključite anketo",
    // "Show the progress bar"
    showProgressBar: "Pokaži vrstico napredka",
    // "Progress bar alignment"
    progressBarLocation: "Poravnava vrstice napredka",
    // "Question title alignment"
    questionTitleLocation: "Poravnava naslova vprašanja",
    // "Question title width"
    questionTitleWidth: "Širina naslova vprašanja",
    // "Required symbol(s)"
    requiredMark: "Oznaka obveznosti",
    // "Question title template, default is: '{no}. {require} {title}'"
    questionTitleTemplate: "Predloga naslova vprašanja, privzeta vrednost: '{no}. {require} {title}'",
    // "Error message alignment"
    questionErrorLocation: "Poravnava sporočila o napaki",
    // "Focus first question on a new page"
    autoFocusFirstQuestion: "Samodejno osredotoči prvo vprašanje na novi strani",
    // "Question order"
    questionOrder: "Vrsta vprašanj",
    // "Time limit to complete the survey"
    timeLimit: "Časovna omejitev za izpolnitev ankete",
    // "Time limit to complete one page"
    timeLimitPerPage: "Časovna omejitev za eno stran",
    // "Use a timer"
    showTimer: "Uporabi timer",
    // "Timer alignment"
    timerLocation: "Poravnava timerja",
    // "Timer mode"
    timerInfoMode: "Način timerja",
    // "Panel display mode"
    renderMode: "Način prikaza panela",
    // "Enable entry addition"
    allowAddPanel: "Omogoči dodajanje panela",
    // "Enable entry removal"
    allowRemovePanel: "Omogoči odstranjevanje panela",
    // "\"Add Entry\" button text"
    addPanelText: "Besedilo gumba \"Dodaj panel\"",
    // "\"Remove Entry\" button text"
    removePanelText: "Besedilo gumba \"Odstrani panel\"",
    // "Show all elements on one page"
    isSinglePage: "Pokaži vse elemente na eni strani",
    // "HTML markup"
    html: "HTML oznaka",
    // "Answer"
    setValue: "Odgovor",
    // "Storage format"
    dataFormat: "Oblikovanje shranjevanja",
    // "Enable row addition"
    allowAddRows: "Omogoči dodajanje vrstic",
    // "Enable row removal"
    allowRemoveRows: "Omogoči odstranjevanje vrstic",
    // "Enable row reordering"
    allowRowReorder: "Omogoči preurejanje vrstic",
    // "Does not apply if you specify the exact display area width or height."
    responsiveImageSizeHelp: "To ne velja, če določite točno širino ali višino prikaznega območja.",
    // "Minimum display area width"
    minImageWidth: "Minimalna širina prikaznega območja",
    // "Maximum display area width"
    maxImageWidth: "Maksimalna širina prikaznega območja",
    // "Minimum display area height"
    minImageHeight: "Minimalna višina prikaznega območja",
    // "Maximum display area height"
    maxImageHeight: "Maksimalna višina prikaznega območja",
    // "Minimum value"
    minValue: "Minimalna vrednost",
    // "Maximum value"
    maxValue: "Maksimalna vrednost",
    // "Case insensitive"
    caseInsensitive: "Brez upoštevanja velikosti črk",
    // "Minimum length (in characters)"
    minLength: "Minimalna dolžina (v znakih)",
    // "Allow digits"
    allowDigits: "Omogoči številke",
    // "Minimum count"
    minCount: "Minimalno število",
    // "Maximum count"
    maxCount: "Maksimalno število",
    // "Regular expression"
    regex: "Regularni izraz",
    surveyvalidator: {
      // "Error message"
      text: "Sporočilo o napaki",
      // [Auto-translated] "Validation expression"
      expression: "Validacijski izraz"
    },
    // "Total row header"
    totalText: "Povzetek vrstice",
    // "Aggregation method"
    totalType: "Metoda agregacije",
    // "Total value expression"
    totalExpression: "Izraz za skupno vrednost",
    // "Total value display format"
    totalDisplayStyle: "Format prikaza skupne vrednosti",
    // "Currency"
    totalCurrency: "Valuta",
    // "Formatted string"
    totalFormat: "Formatiran niz",
    // "Survey logo"
    logo: "Logotip ankete",
    // "Survey layout"
    questionsOnPageMode: "Postavitev ankete",
    // "Restrict answer length"
    maxTextLength: "Omejitev dolžine odgovora",
    // "Restrict comment length"
    maxCommentLength: "Omejitev dolžine komentarja",
    // "Comment area height (in lines)"
    commentAreaRows: "Višina območja za komentarje (v vrsticah)",
    // "Auto-expand text areas"
    autoGrowComment: "Samodejno širjenje besedilnih področij",
    // "Allow users to resize text areas"
    allowResizeComment: "Omogoči spremembo velikosti besedilnih področij",
    // "Update input field values"
    textUpdateMode: "Posodobi vrednosti v vhodnih poljih",
    // "Input mask type"
    maskType: "Vrsta maske za vnos",
    // "Set focus on the first invalid answer"
    autoFocusFirstError: "Nastavi fokus na prvi neveljaven odgovor",
    // "Run validation"
    checkErrorsMode: "Izvedi preverjanje",
    // "Validate empty fields on lost focus"
    validateVisitedEmptyFields: "Preveri prazna polja pri izgubi fokusa",
    // "Redirect to an external link after submission"
    navigateToUrl: "Preusmeri na zunanjo povezavo po oddaji",
    // "Dynamic external link"
    navigateToUrlOnCondition: "Dinamična zunanja povezava",
    // "Markup to show if the user already filled out this survey"
    completedBeforeHtml: "Označevanje za prikaz, če je uporabnik že izpolnil to anketo",
    // "\"Thank You\" page markup"
    completedHtml: "Označevanje za stran »Hvala«",
    // "Dynamic \"Thank You\" page markup"
    completedHtmlOnCondition: "Dinamično označevanje strani »Hvala«",
    // "Markup to show while survey model is loading"
    loadingHtml: "Označevanje za prikaz med nalaganjem modela ankete",
    // "Comment area text"
    commentText: "Besedilo območja za komentarje",
    // "Autocomplete type"
    autocomplete: "Vrsta samodejnega dopolnjevanja",
    // "Label for \"True\""
    labelTrue: "Oznaka za »Resnično«",
    // "Label for \"False\""
    labelFalse: "Oznaka za »Neresnično«",
    // "Show the Clear button"
    allowClear: "Prikaži gumb za brisanje",
    // "Search Mode"
    searchMode: "Način iskanja",
    // "Display format"
    displayStyle: "Format prikaza",
    // "Formatted string"
    format: "Formatiran niz",
    // "Maximum fractional digits"
    maximumFractionDigits: "Največje število decimalnih mest",
    // "Minimum fractional digits"
    minimumFractionDigits: "Najmanjše število decimalnih mest",
    // "Display grouping separators"
    useGrouping: "Prikaži ločevalce za skupine",
    // "Enable multiple file upload"
    allowMultiple: "Omogoči večkratno nalaganje datotek",
    // "Preview uploaded images"
    allowImagesPreview: "Ogled prenesenih slik",
    // "Accepted file types"
    acceptedTypes: "Dovoljeni tipi datotek",
    // "Wait for upload to complete"
    waitForUpload: "Počakaj, da se nalaganje zaključi",
    // "Confirm file deletion"
    needConfirmRemoveFile: "Potrdi brisanje datoteke",
    // "Row details alignment"
    detailPanelMode: "Poravnava širjenja vrstice",
    // "Minimum row count"
    minRowCount: "Najmanjše število vrstic",
    // "Maximum row count"
    maxRowCount: "Največje število vrstic",
    // "Confirm row removal"
    confirmDelete: "Potrdi brisanje vrstice",
    // "Confirmation message"
    confirmDeleteText: "Sporočilo za potrditev",
    // "Initial number of entries"
    panelCount: "Začetno število panelov",
    // "Minimum number of entries"
    minPanelCount: "Najmanjše število panelov",
    // "Maximum number of entries"
    maxPanelCount: "Največje število panelov",
    // "Initial entry state"
    panelsState: "Stanje znotraj zapiranja panela",
    // "\"Previous Entry\" button text"
    prevPanelText: "Besedilo gumba »Prejšnji panel«",
    // "\"Next Entry\" button text"
    nextPanelText: "Besedilo gumba »Naslednji panel«",
    // "\"Remove Entry\" button alignment"
    removePanelButtonLocation: "Poravnava gumba »Odstrani panel«",
    // "Hide the question if it has no rows"
    hideIfRowsEmpty: "Skrij vprašanje, če nima vrstic",
    // "Hide columns if there are no rows"
    hideColumnsIfEmpty: "Skrij stolpce, če ni vrstic",
    // "Custom rating values"
    rateValues: "Prilagojene vrednosti ocene",
    // "Rating count"
    rateCount: "Število ocen",
    // "Rating configuration"
    autoGenerate: "Konfiguracija ocene",
    slider: {
      // [Auto-translated] "Min value"
      min: "Najmanjša vrednost",
      // [Auto-translated] "Max value"
      max: "Največja vrednost",
      // [Auto-translated] "Step value"
      step: "Vrednost koraka",
      // [Auto-translated] "Show scale labels"
      showLabels: "Prikaz oznak merila",
      // [Auto-translated] "Show tooltips"
      tooltipVisibilityPG: "Pokaži opise orodij",
      // [Auto-translated] "Allow thumb crossing"
      allowSwap: "Dovoli prekrižanje palca",
      // [Auto-translated] "Number of auto-generated labels"
      labelCount: "Število samodejno ustvarjenih nalepk",
      // [Auto-translated] "Min value expression"
      minValueExpression: "Izraz najmanjše vrednosti",
      // [Auto-translated] "Max value expression"
      maxValueExpression: "Izraz največje vrednosti",
      // [Auto-translated] "Scale labels configuration"
      autoGenerate: "Konfiguracija nalepk merila",
      // [Auto-translated] "Slider type"
      sliderType: "Vrsta drsnika",
      // [Auto-translated] "Min range length"
      minRangeLength: "Najmanjša dolžina razpona",
      // [Auto-translated] "Max range length"
      maxRangeLength: "Največja dolžina območja",
      // [Auto-translated] "Custom labels"
      customLabels: "Oznake po meri",
      // [Auto-translated] "Label format"
      labelFormat: "Oblika nalepke",
      // [Auto-translated] "Tooltip format"
      tooltipFormat: "Oblika opisa orodja"
    },
    file: {
      // [Auto-translated] "Image height"
      imageHeight: "Višina slike",
      // [Auto-translated] "Image width"
      imageWidth: "Širina slike"
    },
    // "Hide the question if it has no choices"
    hideIfChoicesEmpty: "Skrij vprašanje, če nima možnosti",
    // "Minimum width"
    minWidth: "Najmanjša širina",
    // "Maximum width"
    maxWidth: "Največja širina",
    // "Width"
    width: "Širina",
    // "Show column headers"
    showHeader: "Prikaži glave stolpcev",
    // "Show horizontal scrollbar"
    horizontalScroll: "Prikaži horizontalni drsnik",
    // "Minimum column width"
    columnMinWidth: "Najmanjša širina stolpca",
    // "Row header width"
    rowTitleWidth: "Širina glave vrstice",
    // "Value to store when \"True\" is selected"
    valueTrue: "Vrednost, ki jo shranimo, ko je izbrano »Resnično«",
    // "Value to store when \"False\" is selected"
    valueFalse: "Vrednost, ki jo shranimo, ko je izbrano »Neresnično«",
    // "\"Value is below minimum\" error message"
    minErrorText: "Sporočilo o napaki »Vrednost je pod minimalno vrednostjo«",
    // "\"Value exceeds maximum\" error message"
    maxErrorText: "Sporočilo o napaki »Vrednost presega največjo vrednost«",
    // "\"Empty comment\" error message"
    otherErrorText: "Sporočilo o napaki »Prazni komentar«",
    // "Error message for duplicate responses"
    keyDuplicationError: "Sporočilo o napaki za podvojene odgovore",
    // "Minimum choices to select"
    minSelectedChoices: "Minimalno število izbranih možnosti",
    // "Maximum choices to select"
    maxSelectedChoices: "Največje število izbranih možnosti",
    // "Logo width"
    logoWidth: "Širina logotipa",
    // "Logo height"
    logoHeight: "Višina logotipa",
    // "Read-only"
    readOnly: "Samo za branje",
    // "Disable the read-only mode if"
    enableIf: "Onemogoči način samo za branje, če",
    // "\"No rows\" message"
    noRowsText: "Sporočilo »Ni vrstic«",
    // "Separate special choices"
    separateSpecialChoices: "Ločene posebne možnosti",
    // "Copy choices from the following question"
    choicesFromQuestion: "Kopiraj možnosti iz naslednjega vprašanja",
    // "Which choice options to copy"
    choicesFromQuestionMode: "Katero izbiro možnosti kopirati",
    // "Use values from the following matrix column or panel question as choice IDs"
    choiceValuesFromQuestion: "Uporabi vrednosti iz naslednje matrične vrstice ali panela kot ID-jev možnosti",
    // "Use values from the following matrix column or panel question as choice texts"
    choiceTextsFromQuestion: "Uporabi vrednosti iz naslednje matrične vrstice ali panela kot besedila možnosti",
    // "Display page titles in the progress bar"
    progressBarShowPageTitles: "Prikaz naslovov strani v napredku",
    // "Display page numbers in the progress bar"
    progressBarShowPageNumbers: "Prikaz številk strani v napredku",
    // "Add a comment box"
    showCommentArea: "Dodaj polje za komentarje",
    // "Placeholder text for the comment box"
    commentPlaceholder: "Besedilo za polje s komentarji",
    // "Show the labels as extreme values"
    displayRateDescriptionsAsExtremeItems: "Prikaz oznak kot ekstremnih vrednosti",
    // "Row order"
    rowOrder: "Vrsta vrstic",
    // "Column layout"
    columnsLayout: "Postavitev stolpcev",
    // "Nested column count"
    columnColCount: "Število gnezdenih stolpcev",
    // "Correct Answer"
    correctAnswer: "Pravilni odgovor",
    // "Default Values"
    defaultPanelValue: "Privzete vrednosti",
    // "Cell Texts"
    cells: "Besedila celic",
    // "Select a file or paste a file link..."
    fileInputPlaceholder: "Izberite datoteko ali prilepite povezavo do datoteke...",
    // "Prevent duplicate responses in the following column"
    keyName: "Prepreči podvojene odgovore v naslednjem stolpcu",
    itemvalue: {
      // "Make the option visible if"
      visibleIf: "Naredi možnost vidno, če",
      // "Make the option selectable if"
      enableIf: "Naredi možnost izbirno, če"
    },
    "itemvalue@rows": {
      // "Make the row visible if"
      visibleIf: "Naredi vrstico vidno, če",
      // "Make the row editable if"
      enableIf: "Naredi vrstico urejljivo, če"
    },
    imageitemvalue: {
      // "Alt text"
      text: "Alt besedilo"
    },
    // "Logo alignment"
    logoPosition: "Poravnava logotipa",
    // "Add logo..."
    addLogo: "Dodaj logotip...",
    // "Change logo..."
    changeLogo: "Spremeni logotip...",
    logoPositions: {
      // "Remove logo"
      none: "Odstrani logotip",
      // "Left"
      left: "Levo",
      // "Right"
      right: "Desno",
      // "On the top"
      top: "Na vrhu",
      // "In the bottom"
      bottom: "Na dnu"
    },
    // "Preview mode"
    previewMode: "Način predogleda",
    // "Enable grid layout"
    gridLayoutEnabled: "Omogoči mrežno postavitev",
    // "Grid columns"
    gridLayoutColumns: "Mrežne stolpce",
    // "Mask settings"
    maskSettings: "Nastavitve maske",
    // "Row details error message alignment"
    detailErrorLocation: "Poravnava sporočila o napaki pri razširitvi vrstice",
    // Creator tabs
    tabs: {
      panel: {
        // "Panel Layout"
        layout: "Postavitev panela"
      },
      // "General"
      general: "Splošno",
      // "Options"
      fileOptions: "Možnosti",
      // "HTML Editor"
      html: "HTML Urejevalnik",
      // "Columns"
      columns: "Stolpci",
      // "Rows"
      rows: "Vrstice",
      // "Choice Options"
      choices: "Možnosti izbire",
      // "Items"
      items: "Postavke",
      // "Visible If"
      visibleIf: "Vidno, če",
      // "Editable If"
      enableIf: "Omogočeno, če",
      // "Required If"
      requiredIf: "Zahtevano, če",
      // "Rating Values"
      rateValues: "Vrednosti ocene",
      // [Auto-translated] "Slider Settings"
      sliderSettings: "Nastavitve drsnika",
      // "Choices from a Web Service"
      choicesByUrl: "Možnosti iz spletne storitve",
      // "Default Choices"
      matrixChoices: "Privzete možnosti",
      // "Text Inputs"
      multipleTextItems: "Vnos besedila",
      // "Numbering"
      numbering: "Številčenje",
      // "Validators"
      validators: "Preverjevalniki",
      // "Navigation"
      navigation: "Navigacija",
      // "Question Settings"
      question: "Nastavitve vprašanja",
      // "Pages"
      pages: "Strani",
      // "Quiz Mode"
      timer: "Način kviza",
      // "Calculated Values"
      calculatedValues: "Izračunane vrednosti",
      // "Triggers"
      triggers: "Sprožilci",
      // "Title template"
      templateTitle: "Predloga naslova",
      // "Totals"
      totals: "Skupaj",
      // "Conditions"
      logic: "Pogoji",
      // "Input Mask Settings"
      mask: "Nastavitve maske za vnos",
      layout: {
        // "Panel Layout"
        panel: "Postavitev panela",
        // "Layout"
        question: "Postavitev vprašanja",
        // "Layout"
        base: "Osnovna postavitev"
      },
      // "Data"
      data: "Podatki",
      // "Validation"
      validation: "Preverjanje",
      // "Individual Cell Texts"
      cells: "Besedila posameznih celic",
      // "\"Thank You\" Page"
      showOnCompleted: "Stran 'Hvala' (Po zaključku)",
      // "Logo in the Survey Header"
      logo: "Logo v glavi ankete",
      // "Slider"
      slider: "Drsnik",
      // "Expression"
      expression: "Izraz",
      // "Question Settings"
      questionSettings: "Nastavitve vprašanja",
      // "Header"
      header: "Glava",
      // "Background"
      background: "Ozadetje",
      // "Appearance"
      appearance: "Videzo",
      // "Accent colors"
      accentColors: "Poudarjene barve",
      // "Surface background"
      surfaceBackground: "Ozadetje površine",
      // "Scaling"
      scaling: "Spreminjanje velikosti",
      // "Others"
      others: "Drugi"
    },
    // "Edit property '{0}'"
    editProperty: "Uredi lastnost '{0}'",
    // "Items"
    items: "Postavke",
    // "Make choices visible if"
    choicesVisibleIf: "Pokaži možnosti, če",
    // "Make choices selectable if"
    choicesEnableIf: "Omogoči možnosti, če",
    // "Make columns visible if"
    columnsEnableIf: "Pokaži stolpce, če",
    // "Make rows visible if"
    rowsEnableIf: "Pokaži vrstice, če",
    // "Increase the inner indent"
    innerIndent: "Povečaj notranji zamik",
    // "Use answers from the last entry as default"
    copyDefaultValueFromLastEntry: "Uporabi odgovore iz zadnjega vnosa kot privzete",
    // "Please enter a value."
    enterNewValue: "Prosimo, vnesite novo vrednost.",
    // "There are no questions in the survey."
    noquestions: "V anketi ni vprašanj.",
    // "Please create a trigger"
    createtrigger: "Prosimo, ustvarite sprožilec",
    // "Press enter button to edit"
    titleKeyboardAdornerTip: "Pritisnite tipko enter za urejanje",
    // "Press enter button to edit item, press delete button to delete item, press alt plus arrow up or arrow down to move item"
    keyboardAdornerTip: "Pritisnite tipko enter za urejanje postavke, pritisnite tipko delete za izbris postavke, pritisnite alt skupaj z zgornjo ali spodnjo puščico za premik postavke",
    // "On "
    triggerOn: "Na",
    // "Make pages visible"
    triggerMakePagesVisible: "Pokaži strani",
    // "Make elements visible"
    triggerMakeQuestionsVisible: "Pokaži elemente",
    // "Complete the survey if successful."
    triggerCompleteText: "Dokončaj anketo, če je uspešno.",
    // "The trigger is not set"
    triggerNotSet: "Sprožilec ni nastavljen",
    // "Run if"
    triggerRunIf: "Zaženi, če",
    // "Change value of: "
    triggerSetToName: "Spremeni vrednost za: ",
    // "Copy value from: "
    triggerFromName: "Kopiraj vrednost iz: ",
    // "Run this Expression"
    triggerRunExpression: "Zaženi ta izraz",
    // "to: "
    triggerSetValue: "na: ",
    // "Go to the question"
    triggerGotoName: "Pojdi na vprašanje",
    // "Do not put the variable into the survey result."
    triggerIsVariable: "Ne vključuj spremenljivke v rezultate ankete.",
    // "Please enter a valid expression"
    triggerRunExpressionEmpty: "Prosimo, vnesite veljaven izraz",
    // "Type expression here..."
    emptyExpressionPlaceHolder: "Vnesite izraz tukaj...",
    // "No file chosen"
    noFile: "Datoteka ni izbrana",
    // "Clear hidden question values"
    clearIfInvisible: "Počisti skrite vrednosti vprašanj",
    // "Store values in the following property"
    valuePropertyName: "Shrani vrednosti v naslednjo lastnost",
    // "Enable search-as-you-type"
    searchEnabled: "Omogoči iskanje med tipkanjem",
    // "Hide selected items"
    hideSelectedItems: "Skrij izbrane postavke",
    // "Collapse the dropdown upon selection"
    closeOnSelect: "Zaprti spustni seznam ob izbiri",
    // "Vertical alignment within cells"
    verticalAlign: "Verticalno poravnavanje v celicah",
    // "Alternate row colors"
    alternateRows: "Izmenični barvni odtenki vrstic",
    // "Make columns visible if"
    columnsVisibleIf: "Pokaži stolpce, če",
    // "Make rows visible if"
    rowsVisibleIf: "Pokaži vrstice, če",
    // "Placeholder text for the comment box"
    otherPlaceholder: "Besedilo za nadomestno polje za komentarje",
    // "Placeholder text for Local file"
    filePlaceholder: "Besedilo za nadomestno polje za lokalno datoteko",
    // "Placeholder text for Camera"
    photoPlaceholder: "Besedilo za nadomestno polje za kamero",
    // "Placeholder text for Local file or Camera"
    fileOrPhotoPlaceholder: "Besedilo za nadomestno polje za lokalno datoteko ali kamero",
    // "Rating icon"
    rateType: "Vrsta ikone za ocenjevanje",
    // "Ex.: https://api.example.com/books"
    url_placeholder: "Npr.: https://api.example.com/books",
    // "Ex.: categories.fiction"
    path_placeholder: "Npr.: categories.fiction",
    // "Ex.: a)"
    questionStartIndex_placeholder: "Npr.: a)",
    // "Ex.: 6in"
    width_placeholder: "Npr.: 6in",
    // "Ex.: 600px"
    minWidth_placeholder: "Npr.: 600px",
    // "Ex.: 50%"
    maxWidth_placeholder: "Npr.: 50%",
    // "auto"
    imageHeight_placeholder: "avtomatsko",
    // "auto"
    imageWidth_placeholder: "avtomatsko",
    // [Auto-translated] "Ex.: 100px"
    itemTitleWidth_placeholder: "Primer: 100px",
    theme: {
      // "Theme"
      themeName: "Tema",
      // "Question appearance"
      isPanelless: "Pogled vprašanja",
      // "Background and corner radius"
      editorPanel: "Ozadje in polmer robov",
      // "Background and corner radius"
      questionPanel: "Ozadje in polmer robov",
      // "Accent color"
      primaryColor: "Poudarni barvni odtenek",
      // "Panel and question box opacity"
      panelBackgroundTransparency: "Prosojnost panela in okvirja vprašanja",
      // "Input element opacity"
      questionBackgroundTransparency: "Prosojnost vhodnega elementa",
      // "Survey font size"
      fontSize: "Velikost pisave ankete",
      // "Survey scale factor"
      scale: "Delež lestvice ankete",
      // "Corner radius"
      cornerRadius: "Polmer robov",
      // "Advanced mode"
      advancedMode: "Napreden način",
      // "Title font"
      pageTitle: "Pisava naslova strani",
      // "Description font"
      pageDescription: "Pisava opisa strani",
      // "Title font"
      questionTitle: "Pisava naslova vprašanja",
      // "Description font"
      questionDescription: "Pisava opisa vprašanja",
      // "Font"
      editorFont: "Pisava",
      // "Opacity"
      backgroundOpacity: "Prosojnost", // Auto-generated string
      // "Survey font family"
      "--sjs-font-family": "Pisava ankete",
      // "Background color"
      "--sjs-general-backcolor-dim": "Barva ozadja",
      // "Accent background colors"
      "--sjs-primary-backcolor": "Poudarne barve ozadja",
      // "Accent foreground colors"
      "--sjs-primary-forecolor": "Poudarne barve besedila",
      // "Error message colors"
      "--sjs-special-red": "Barve sporočil o napakah",
      // "Shadow effects"
      "--sjs-shadow-small": "Efekti senc",
      // "Shadow effects"
      "--sjs-shadow-inner": "Efekti notranjih senc",
      // "Colors"
      "--sjs-border-default": "Barve"
    },
    "header@header": {
      // "View"
      headerView: "Pogled",
      // "Logo alignment"
      logoPosition: "Poravnava logotipa",
      // "Survey title font"
      surveyTitle: "Pisava naslova ankete",
      // "Survey description font"
      surveyDescription: "Pisava opisa ankete",
      // "Survey title font"
      headerTitle: "Pisava naslova glave",
      // "Survey description font"
      headerDescription: "Pisava opisa glave",
      // "Content area width"
      inheritWidthFrom: "Širina vsebinskega področja",
      // "Text width"
      textAreaWidth: "Širina besedila",
      // "Background color"
      backgroundColorSwitch: "Barva ozadja",
      // "Background image"
      backgroundImage: "Ozadje slike",
      // "Opacity"
      backgroundImageOpacity: "Prosojnost ozadja slike",
      // "Overlap"
      overlapEnabled: "Prekrivanje omogočeno",
      // "Logo alignment"
      logoPositionX: "Poravnava logotipa",
      // "Survey title alignment"
      titlePositionX: "Poravnava naslova ankete",
      // "Survey description alignment"
      descriptionPositionX: "Poravnava opisa ankete"
    }
  },
  // Property values
  pv: {
    // "true"
    "true": "resnično",
    // "false"
    "false": "napačno",
    // "Local file"
    file: "Lokalna datoteka",
    // "Camera"
    camera: "Kamera",
    // "Local file or Camera"
    "file-camera": "Lokalna datoteka ali Kamera",
    // "Inherit"
    inherit: "Dedovanje",
    // "Visible"
    show: "Vidno",
    // "Hidden"
    hide: "Skrito",
    // "Inherit"
    default: "Privzeto",
    // "Initial"
    initial: "Začetno",
    // "Random"
    random: "Naključno",
    // "Collapsed"
    collapsed: "Zmanjšano",
    // "Expanded"
    expanded: "Razširjeno",
    // "None"
    none: "Brez",
    // "Ascending"
    asc: "Naraščajoče",
    // "Descending"
    desc: "Padajoče",
    // "Indeterminate"
    indeterminate: "Nedoločeno",
    // "Selected"
    selected: "Izbrano",
    // "Unselected"
    unselected: "Neizbrano",
    // "decimal"
    decimal: "decimalno",
    // "currency"
    currency: "valuta",
    // "percent"
    percent: "odstotek",
    // "First panel is expanded"
    firstExpanded: "Prvi panel je razširjen",
    // "Hide question numbers"
    off: "Skrij številke vprašanj",
    // "List"
    list: "Seznam",
    // "Carousel"
    carousel: "Krožni pregled",
    // "Tabs"
    tab: "Zavihek",
    // "Panel navigator + Progress bar at the top"
    progressTop: "Navigacija panela + napredna vrstica na vrhu",
    // "Panel navigator + Progress bar at the bottom"
    progressBottom: "Navigacija panela + napredna vrstica na dnu",
    // "Panel navigator + Progress bar at the top and bottom"
    progressTopBottom: "Navigacija panela + napredna vrstica na vrhu in dnu",
    // "Horizontal"
    horizontal: "Horizontalno",
    // "Vertical"
    vertical: "Vertikalno",
    // "Top"
    top: "Zgoraj",
    // "Bottom"
    bottom: "Spodaj",
    // "Top and bottom"
    topBottom: "Zgoraj in spodaj",
    // "Both"
    both: "Oboje",
    // "Left"
    left: "Levo",
    // "Right"
    right: "Desno",
    // "Center"
    center: "Središče",
    // "Left and right"
    leftRight: "Levo in desno",
    // "Middle"
    middle: "Sredina",
    // "color"
    color: "barva",
    // "date"
    date: "datum",
    // "datetime"
    datetime: "datum in čas",
    // "datetime-local"
    "datetime-local": "lokalni datum in čas",
    // "email"
    email: "e-pošta",
    // "month"
    month: "mesec",
    // "number"
    number: "številka",
    // "password"
    password: "geslo",
    // "range"
    range: "obseg",
    // "tel"
    tel: "telefon",
    // "text"
    text: "besedilo",
    // "time"
    time: "čas",
    // "url"
    url: "url",
    // "week"
    week: "teden",
    // "Hidden"
    hidden: "Skrito",
    // "Editable"
    edit: "Za urejanje",
    // "Read-only"
    display: "Samo za branje",
    // "Contain"
    contain: "Vsebuje",
    // "Cover"
    cover: "Prekriva",
    // "Fill"
    fill: "Izpolni",
    // "Next"
    next: "Naprej",
    // "Last"
    last: "Zadnji",
    // "Upon survey completion"
    onComplete: "Ob zaključku ankete",
    // "When question gets hidden"
    onHidden: "Ko je vprašanje skrito",
    // "When question or its panel/page gets hidden"
    onHiddenContainer: "Ko je vprašanje ali njegov panel/stran skrita",
    clearInvisibleValues: {
      // "Never"
      none: "Nikoli"
    },
    clearIfInvisible: {
      // "Never"
      none: "Nikoli"
    },
    // [Auto-translated] "Radio Buttons"
    radio: "Izbirni gumbi",
    inputType: {
      // "Color"
      color: "Barva",
      // "Date"
      date: "Datum",
      // "Date and Time"
      "datetime-local": "Datum a čas",
      // "Email"
      email: "E-mail",
      // "Month"
      month: "Měsíc",
      // "Number"
      number: "Číslo",
      // "Password"
      password: "Heslo",
      // "Range"
      range: "Rozsah",
      // "Phone Number"
      tel: "Telefonní číslo",
      // "Text"
      text: "Text",
      // "Time"
      time: "Čas",
      // "URL"
      url: "URL",
      // "Week"
      week: "Týden"
    },
    sliderType: {
      // [Auto-translated] "Single-Value"
      single: "Enojna vrednost",
      // [Auto-translated] "Range"
      range: "Razpon"
    },
    autocomplete: {
      // "Full Name"
      name: "Celé jméno",
      // "Prefix"
      "honorific-prefix": "Prefix",
      // "First Name"
      "given-name": "Křestní jméno",
      // "Middle Name"
      "additional-name": "Střední jméno",
      // "Last Name"
      "family-name": "Příjmení",
      // "Suffix"
      "honorific-suffix": "Přípona",
      // "Nickname"
      nickname: "Přezdívka",
      // "Job Title"
      "organization-title": "Pozice",
      // "User Name"
      username: "Uživatelské jméno",
      // "New Password"
      "new-password": "Nové heslo",
      // "Current Password"
      "current-password": "Aktuální heslo",
      // "Organization Name"
      organization: "Název organizace",
      // "Full Street Address"
      "street-address": "Celá adresa",
      // "Address Line 1"
      "address-line1": "Adresa řádek 1",
      // "Address Line 2"
      "address-line2": "Adresa řádek 2",
      // "Address Line 3"
      "address-line3": "Adresa řádek 3",
      // "Level 4 Address"
      "address-level4": "Úroveň 4 adresa",
      // "Level 3 Address"
      "address-level3": "Úroveň 3 adresa",
      // "Level 2 Address"
      "address-level2": "Úroveň 2 adresa",
      // "Level 1 Address"
      "address-level1": "Úroveň 1 adresa",
      // "Country Code"
      country: "Kód země",
      // "Country Name"
      "country-name": "Název země",
      // "Postal Code"
      "postal-code": "PSČ",
      // "Cardholder Name"
      "cc-name": "Jméno držitele karty",
      // "Cardholder First Name"
      "cc-given-name": "Křestní jméno držitele karty",
      // "Cardholder Middle Name"
      "cc-additional-name": "Střední jméno držitele karty",
      // "Cardholder Last Name"
      "cc-family-name": "Příjmení držitele karty",
      // "Credit Card Number"
      "cc-number": "Číslo kreditní karty",
      // "Expiration Date"
      "cc-exp": "Datum expirace",
      // "Expiration Month"
      "cc-exp-month": "Měsíc expirace",
      // "Expiration Year"
      "cc-exp-year": "Rok expirace",
      // "Card Security Code"
      "cc-csc": "Kód bezpečnosti karty",
      // "Credit Card Type"
      "cc-type": "Typ kreditní karty",
      // "Transaction Currency"
      "transaction-currency": "Měna transakce",
      // "Transaction Amount"
      "transaction-amount": "Částka transakce",
      // "Preferred Language"
      language: "Preferovaný jazyk",
      // "Birthday"
      bday: "Datum narození",
      // "Birthday Day"
      "bday-day": "Den narození",
      // "Birthday Month"
      "bday-month": "Měsíc narození",
      // "Birthday Year"
      "bday-year": "Rok narození",
      // "Gender"
      sex: "Pohlaví",
      // "Website URL"
      url: "URL webové stránky",
      // "Profile Photo"
      photo: "Profilová fotografie",
      // "Telephone Number"
      tel: "Telefonní číslo",
      // "Country Code for Phone"
      "tel-country-code": "Kód země pro telefon",
      // "National Telephone Number"
      "tel-national": "Národní telefonní číslo",
      // "Area Code"
      "tel-area-code": "Předvolba oblasti",
      // "Local Phone Number"
      "tel-local": "Místní telefonní číslo",
      // "Local Phone Prefix"
      "tel-local-prefix": "Místní telefonní předvolba",
      // "Local Phone Suffix"
      "tel-local-suffix": "Místní telefonní přípona",
      // "Phone Extension"
      "tel-extension": "Telefonní linka",
      // "Email Address"
      email: "Emailová adresa",
      // "Instant Messaging Protocol"
      impp: "Protokol okamžitého zasílání zpráv"
    },
    maskType: {
      // "None"
      none: "Žádný",
      // "Pattern"
      pattern: "Vzor",
      // "Numeric"
      numeric: "Číselný",
      // "Date and Time"
      datetime: "Datum a čas",
      // "Currency"
      currency: "Měna"
    },
    inputTextAlignment: {
      // "Auto"
      auto: "Automaticky",
      // "Left"
      left: "Vlevo",
      // "Right"
      right: "Vpravo"
    },
    // "All"
    all: "Vše",
    // "Page"
    page: "Stránka",
    // "Survey"
    survey: "Průzkum",
    // "When switching to the next page"
    onNextPage: "Při přechodu na další stránku",
    // "After an answer is changed"
    onValueChanged: "Po změně odpovědi",
    // "Before an answer is changed"
    onValueChanging: "Před změnou odpovědi",
    questionsOnPageMode: {
      // "Original structure"
      standard: "Původní struktura",
      // "Show all questions on one page"
      singlePage: "Zobrazit všechny otázky na jedné stránce",
      // "Show single question per page"
      questionPerPage: "Zobrazit jednu otázku na stránce",
      // [Auto-translated] "Show single input field per page"
      inputPerPage: "Prikaz enega vnosnega polja na stran"
    },
    // "No preview"
    noPreview: "Žádný náhled",
    // "Show all questions"
    showAllQuestions: "Zobrazit všechny otázky",
    // "Show answered questions only"
    showAnsweredQuestions: "Zobrazit pouze zodpovězené otázky",
    // "Show all questions"
    allQuestions: "Zobrazit všechny otázky",
    // "Show answered questions only"
    answeredQuestions: "Zobrazit pouze zodpovězené otázky",
    // "Completed pages"
    pages: "Dokončené stránky",
    // "Answered questions"
    questions: "Zodpovězené otázky",
    // "Answered required questions"
    requiredQuestions: "Zodpovězené povinné otázky",
    // "Valid answers"
    correctQuestions: "Platné odpovědi",
    // "Completed pages (button UI)"
    buttons: "Dokončené stránky (tlačítkový UI)",
    // "Under the input field"
    underInput: "Pod vstupním polem",
    // "Under the question title"
    underTitle: "Pod názvem otázky",
    // "On lost focus"
    onBlur: "Při ztrátě zaměření",
    // "While typing"
    onTyping: "Během psaní",
    // "Under the row"
    underRow: "Pod řádkem",
    // "Under the row, display one section only"
    underRowSingle: "Pod řádkem, zobrazit pouze jednu expanze řádku",
    // "Auto"
    auto: "Automaticky",
    showNavigationButtons: {
      // "Hidden"
      none: "Skryté"
    },
    timerInfoMode: {
      // "Both"
      combined: "Obojí"
    },
    addRowButtonLocation: {
      // "Based on matrix layout"
      default: "Na základě rozložení matice"
    },
    panelsState: {
      // "Locked"
      default: "Zamčeno",
      // "Collapse all"
      collapsed: "Sbalit vše",
      // "Expand all"
      expanded: "Rozbalit vše",
      // "First expanded"
      firstExpanded: "První rozbalený"
    },
    widthMode: {
      // "Static"
      static: "Statické",
      // "Responsive"
      responsive: "Responzivní"
    },
    contentMode: {
      // "Image"
      image: "Obrázek",
      // "Video"
      video: "Video",
      // "YouTube"
      youtube: "YouTube"
    },
    displayMode: {
      // "Buttons"
      buttons: "Tlačítka",
      // "Dropdown"
      dropdown: "Rozbalovací nabídka"
    },
    rateColorMode: {
      // "Default"
      default: "Výchozí",
      // "Scale"
      scale: "Měřítko"
    },
    scaleColorMode: {
      // "Monochrome"
      monochrome: "Monochromatické",
      // "Colored"
      colored: "Barevné"
    },
    autoGenerate: {
      // "Auto-generate"
      "true": "Automatické generování",
      // "Manual"
      "false": "Manuální"
    },
    rateType: {
      // "Labels"
      labels: "Štítky",
      // "Stars"
      stars: "Hvězdičky",
      // "Smileys"
      smileys: "Smajlíky"
    },
    state: {
      // "Locked"
      default: "Zamčeno"
    },
    showQuestionNumbers: {
      // "Auto-numbering"
      default: "Automatsko numerisanje",
      // "Auto-numbering"
      on: "Automatsko numerisanje",
      // "Reset on each page"
      onPage: "Resetuj na svakoj stranici",
      // "Reset on each panel"
      onpanel: "Resetuj na svakom panelu",
      // "Reset on each panel"
      onPanel: "Resetuj na svakom panelu",
      // [Auto-translated] "Recursive numbering"
      recursive: "Rekurzivno številčenje",
      // "Continue across the survey"
      onSurvey: "Nastavi kroz anketu",
      // "No numbering"
      off: "Bez numerisanja"
    },
    descriptionLocation: {
      // "Under the question title"
      underTitle: "Ispod naslova pitanja",
      // "Under the input field"
      underInput: "Ispod unosa"
    },
    selectToRankAreasLayout: {
      // "Next to choices"
      horizontal: "Pored opcija",
      // "Above choices"
      vertical: "Iznad opcija"
    },
    displayStyle: {
      // "Decimal"
      decimal: "Decimal",
      // "Currency"
      currency: "Valuta",
      // "Percentage"
      percent: "Procenat",
      // "Date"
      date: "Datum"
    },
    totalDisplayStyle: {
      // "Decimal"
      decimal: "Decimal",
      // "Currency"
      currency: "Valuta",
      // "Percentage"
      percent: "Procenat",
      // "Date"
      date: "Datum"
    },
    rowOrder: {
      // "Original"
      initial: "Izvorno"
    },
    questionOrder: {
      // "Original"
      initial: "Izvorno"
    },
    progressBarLocation: {
      // "Top"
      top: "Zgoraj",
      // "Bottom"
      bottom: "Spodaj",
      // "Top and bottom"
      topbottom: "Zgoraj in spodaj",
      // "Above the header"
      aboveheader: "Nad naslovom",
      // "Below the header"
      belowheader: "Pod naslovom",
      // "Hidden"
      off: "Skrito"
    },
    // "Sum"
    sum: "Vsota",
    // "Count"
    count: "Štetje",
    // "Min"
    min: "Min",
    // "Max"
    max: "Max",
    // "Avg"
    avg: "Povprečje",
    searchMode: {
      // "Contains"
      contains: "Vsebuje",
      // "Starts with"
      startsWith: "Se začne z"
    },
    backgroundImageFit: {
      // "Auto"
      auto: "Samodejno",
      // "Cover"
      cover: "Pokrij",
      // "Contain"
      contain: "Vsebuje",
      // "Stretch"
      fill: "Raztegniti",
      // "Tile"
      tile: "Ploščice"
    },
    backgroundImageAttachment: {
      // "Fixed"
      fixed: "Fiksno",
      // "Scroll"
      scroll: "Pomikanje"
    },
    headerView: {
      // "Basic"
      basic: "Osnovno",
      // "Advanced"
      advanced: "Napredno"
    },
    inheritWidthFrom: {
      // "Same as survey"
      survey: "Enako kot raziskava",
      // "Same as container"
      container: "Enako kot vsebnik"
    },
    backgroundColorSwitch: {
      // "None"
      none: "Nič",
      // "Accent color"
      accentColor: "Poudarna barva",
      // "Custom"
      custom: "Po meri"
    },
    colorPalette: {
      // "Light"
      light: "Svetla",
      // "Dark"
      dark: "Temna"
    },
    isPanelless: {
      // "Default"
      "false": "Privzeto",
      // "Without Panels"
      "true": "Brez panelov"
    },
    progressBarInheritWidthFrom: {
      // "Same as survey"
      survey: "Enako kot anketa",
      // "Same as container"
      container: "Enako kot vsebnik"
    }
  },
  // Operators
  op: {
    // "Empty"
    empty: "Prazno",
    // "Not empty"
    notempty: "Ni prazno",
    // "Equals"
    equal: "Enako",
    // "Does not equal"
    notequal: "Ni enako",
    // "Contains"
    contains: "Vsebuje",
    // "Does not contain"
    notcontains: "Ne vsebuje",
    // "Any of"
    anyof: "Karkoli od",
    // "All of"
    allof: "Vse od",
    // "Greater than"
    greater: "Večje kot",
    // "Less than"
    less: "Manjše kot",
    // "Greater than or equal to"
    greaterorequal: "Večje ali enako",
    // "Less than or equal to"
    lessorequal: "Manjše ali enako",
    // "and"
    and: "in",
    // "or"
    or: "ali"
  },
  // Embed window
  ew: {
    // "Use Angular version"
    angular: "Uporabi različico Angular",
    // "Use jQuery version"
    jquery: "Uporabi različico jQuery",
    // "Use Knockout version"
    knockout: "Uporabi različico Knockout",
    // "Use React version"
    react: "Uporabi različico React",
    // "Use Vue version"
    vue: "Uporabi različico Vue",
    // "For bootstrap framework"
    bootstrap: "Za okvir Bootstrap",
    // "Modern theme"
    modern: "Sodobna tema",
    // "Default theme"
    default: "Privzeta tema",
    // "Orange theme"
    orange: "Oranžna tema",
    // "Darkblue theme"
    darkblue: "Temno modra tema",
    // "Darkrose theme"
    darkrose: "Temno roza tema",
    // "Stone theme"
    stone: "Kamnita tema",
    // "Winter theme"
    winter: "Zimska tema",
    // "Winter-Stone theme"
    winterstone: "Zimsko-kamnita tema",
    // "Show survey on a page"
    showOnPage: "Prikaži anketo na strani",
    // "Show survey in a window"
    showInWindow: "Prikaži anketo v oknu",
    // "Load Survey JSON from server"
    loadFromServer: "Naloži Survey JSON s strežnika",
    // "Scripts and styles"
    titleScript: "Skripte in slogi",
    // "HTML"
    titleHtml: "HTML",
    // "JavaScript"
    titleJavaScript: "JavaScript"
  },
  // Preview (Survey)
  ts: {
    // "Select the page to test it"
    selectPage: "Izberi stran za testiranje",
    // "Show invisible elements"
    showInvisibleElements: "Prikaži nevidne elemente",
    // "Hide invisible elements"
    hideInvisibleElements: "Skrij nevidne elemente",
    // [Auto-translated] "Previous"
    prevPage: "Prejšnji",
    // [Auto-translated] "Next"
    nextPage: "Naslednji"
  },
  validators: {
    // "Answer count"
    answercountvalidator: "Število odgovorov",
    // "Email"
    emailvalidator: "E-pošta",
    // "Expression"
    expressionvalidator: "Izraz",
    // "Number"
    numericvalidator: "Število",
    // "Regex"
    regexvalidator: "Regex",
    // "Text"
    textvalidator: "Besedilo"
  },
  triggers: {
    // "Complete survey"
    completetrigger: "Zaključi anketu",
    // "Set answer"
    setvaluetrigger: "Nastavi odgovor",
    // "Copy answer"
    copyvaluetrigger: "Kopiraj odgovor",
    // "Skip to question"
    skiptrigger: "Preskoči na vprašanje",
    // "Run expression"
    runexpressiontrigger: "Zaženi izraz",
    // "change visibility (deprecated)"
    visibletrigger: "Spremeni vidnost (zastarelo)"
  },
  peplaceholder: {
    patternmask: {
      // "Ex.: +1(999)-999-99-99"
      pattern: "Npr.: +1(999)-999-99-99"
    },
    datetimemask: {
      // "Ex.: mm/dd/yyyy HH:MM:ss"
      pattern: "Npr.: mm/dd/yyyy HH:MM:ss"
    },
    currencymask: {
      // "Ex.: $"
      prefix: "Npr.: $",
      // "Ex.: USD"
      suffix: "Npr.: USD"
    },
    panelbase: {
      // "Ex.: 200px"
      questionTitleWidth: "Npr.: 200px"
    },
    panellayoutcolumn: {
      // "Ex.: 30%"
      effectiveWidth: "Npr.: 30%",
      // "Ex.: 200px"
      questionTitleWidth: "Npr.: 200px"
    }
  },
  pehelp: {
    panel: {
      // "A panel ID that is not visible to respondents."
      name: "ID panela, ki ni viden anketirancem.",
      // "Type a panel subtitle."
      description: "Vnesite podnaslov panela.",
      // "Use the magic wand icon to set a conditional rule that determines panel visibility."
      visibleIf: "Uporabite ikono čarobne paličice za nastavitev pogojnega pravila, ki določa vidnost panela.",
      // "Use the magic wand icon to set a conditional rule that disables the read-only mode for the panel."
      enableIf: "Uporabite ikono čarobne paličice za nastavitev pogojnega pravila, ki onemogoči način samo za branje za panel.",
      // "Use the magic wand icon to set a conditional rule that prevents survey submission unless at least one nested question has an answer."
      requiredIf: "Uporabite ikono čarobne paličice za nastavitev pogojnega pravila, ki prepreči oddajo ankete, razen če je vsaj eno vprašanje znotraj panela odgovorjeno.",
      // "Applies to all questions within this panel. When set to \"Hidden\", it also hides question descriptions. If you want to override this setting, define title alignment rules for individual questions. The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Top\" by default). "
      questionTitleLocation: "Velja za vsa vprašanja znotraj tega panela. Ko je nastavljeno na \"Skrito\", skrije tudi opise vprašanj. Če želite prekiniti to nastavitev, določite pravila za poravnavo naslovov za posamezna vprašanja. Možnost \"Dedovanje\" uporabi nastavitev na ravni strani (če je nastavljeno) ali na ravni ankete (\"Na vrhu\" privzeto).",
      // "Sets consistent width for question titles when they are aligned to the left of their question boxes. Accepts CSS values (px, %, in, pt, etc.)."
      questionTitleWidth: "Določi enotno širino za naslove vprašanj, ko so poravnani levo od svojih polj za vprašanja. Sprejema CSS vrednosti (px, %, in, pt, itd.).",
      // "Sets the location of an error message in relation to all questions within the panel. The \"Inherit\" option applies the page-level (if set) or survey-level setting."
      questionErrorLocation: "Določi lokacijo sporočila o napaki v zvezi z vsemi vprašanji znotraj panela. Možnost \"Dedovanje\" uporabi nastavitev na ravni strani (če je nastavljeno) ali na ravni ankete.",
      // "Keeps the original order of questions or randomizes them. The \"Inherit\" option applies the page-level (if set) or survey-level setting."
      questionOrder: "Ohrani prvotni vrstni red vprašanj ali jih naključi. Možnost \"Dedovanje\" uporabi nastavitev na ravni strani (če je nastavljeno) ali na ravni ankete.",
      // "Repositions the panel to the end of a selected page."
      page: "Premakne panel na konec izbrane strani.",
      // "Adds space or margin between the panel content and the left border of the panel box."
      innerIndent: "Doda prostor ali rob med vsebino panela in levo mejo panela.",
      // "Unselect to display the panel in one line with the previous question or panel. The setting doesn't apply if the panel is the first element in your form."
      startWithNewLine: "Odznači, da bo panel prikazan v eni vrstici s prejšnjim vprašanjem ali panelom. Nastavitev ne velja, če je panel prvi element v obrazcu.",
      // "Choose from: \"Expanded\" - the panel is displayed in full and can be collapsed; \"Collapsed\" - the panel displays only the title and description and can be expanded; \"Locked\" - the panel is displayed in full and cannot be collapsed."
      state: "Izberite iz: \"Razširjeno\" - panel je prikazan v celoti in ga je mogoče zložiti; \"Zloženo\" - panel prikazuje samo naslov in opis ter ga je mogoče razširiti; \"Zaklenjeno\" - panel je prikazan v celoti in ga ni mogoče zložiti.",
      // "Sets the width of the panel in proportion to other survey elements in the same line. Accepts CSS values (px, %, in, pt, etc.)."
      width: "Določi širino panela v razmerju z drugimi elementi ankete v isti vrstici. Sprejema CSS vrednosti (px, %, in, pt, itd.).",
      // "Assigns numbers to questions nested within this panel."
      showQuestionNumbers: "Dodeli številke vprašanjem, ki so znotraj tega panela.",
      // "Specifies how many columns this panel spans within the grid layout."
      effectiveColSpan: "Določi, koliko stolpcev ta panel zajema v mrežnem načrtu.",
      // "This table lets you configure each grid column within the panel. It automatically sets the width percentage for each column based on the maximum number of elements in a row. To customize the grid layout, manually adjust these values and define the title width for all questions in each column."
      gridLayoutColumns: "Ta tabela vam omogoča konfiguracijo vsakega mrežnega stolpca znotraj panela. Samodejno nastavi širino odstotkov za vsak stolpec na podlagi največjega števila elementov v vrstici. Za prilagoditev mrežnega načrta ročno prilagodite te vrednosti in določite širino naslova za vsa vprašanja v vsakem stolpcu."
    },
    paneldynamic: {
      // "A panel ID that is not visible to respondents."
      name: "ID panela, ki ni viden anketirancem.",
      // "Type a panel subtitle."
      description: "Vnesite podnaslov panela.",
      // "Use the magic wand icon to set a conditional rule that determines panel visibility."
      visibleIf: "Uporabite ikono čarobne paličice za nastavitev pogojnega pravila, ki določa vidnost panela.",
      // "Use the magic wand icon to set a conditional rule that disables the read-only mode for the panel."
      enableIf: "Uporabite ikono čarobne paličice za nastavitev pogojnega pravila, ki onemogoči način samo za branje za panel.",
      // "Use the magic wand icon to set a conditional rule that prevents survey submission unless at least one nested question has an answer."
      requiredIf: "Uporabite ikono čarobne paličice za nastavitev pogojnega pravila, ki prepreči oddajo ankete, razen če je vsaj eno vprašanje znotraj panela odgovorjeno.",
      // "Applies to all questions within this dynamic panel. If you want to override this setting, define title alignment rules for individual questions. The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Top\" by default)."
      templateQuestionTitleLocation: "Velja za vsa vprašanja znotraj tega panela. Če želite prekiniti to nastavitev, določite pravila za poravnavo naslovov za posamezna vprašanja. Možnost \"Dedovanje\" uporabi nastavitev na ravni strani (če je nastavljeno) ali na ravni ankete (\"Na vrhu\" privzeto).",
      // "Sets consistent width for question titles when they are aligned to the left of their question boxes. Accepts CSS values (px, %, in, pt, etc.)."
      templateQuestionTitleWidth: "Nastavi dosledno širino naslovov vprašanj, ko so poravnani levo od polj z vprašanji. Sprejema vrednosti CSS (px, %, in, pt itd.).",
      // "Sets the location of an error message in relation to a question with invalid input. Choose between: \"Top\" - an error text is placed at the top of the question box; \"Bottom\" - an error text is placed at the bottom of the question box. The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Top\" by default)."
      templateErrorLocation: "Določi lokacijo sporočila o napaki v zvezi z vprašanjem z neveljavnim vnosom. Izberite med: \"Na vrhu\" - sporočilo o napaki je postavljeno na vrh okvira vprašanja; \"Na dnu\" - sporočilo o napaki je postavljeno na dno okvira vprašanja. Možnost \"Dedovanje\" uporabi nastavitev na ravni strani (če je nastavljeno) ali na ravni ankete.",
      // "Sets the location of an error message in relation to all questions within the panel. The \"Inherit\" option applies the page-level (if set) or survey-level setting."
      errorLocation: "Določi lokacijo sporočila o napaki v zvezi z vsemi vprašanji znotraj panela. Možnost \"Dedovanje\" uporabi nastavitev na ravni strani (če je nastavljeno) ali na ravni ankete.",
      // "Repositions the panel to the end of a selected page."
      page: "Premakne panel na konec izbrane strani.",
      // [Auto-translated] "Adds space or margin between the panel content and the left border of the panel box."
      indent: "Doda presledek ali rob med vsebino plošče in levo obrobo polja plošče.",
      // "Unselect to display the panel in one line with the previous question or panel. The setting doesn't apply if the panel is the first element in your form."
      startWithNewLine: "Odznači, da bo panel prikazan v eni vrstici s prejšnjim vprašanjem ali panelom. Nastavitev ne velja, če je panel prvi element v obrazcu.",
      // "Choose from: \"Expanded\" - the panel is displayed in full and can be collapsed; \"Collapsed\" - the panel displays only the title and description and can be expanded; \"Locked\" - the panel is displayed in full and cannot be collapsed."
      state: "Izberite iz: \"Razširjeno\" - panel je prikazan v celoti in ga je mogoče zložiti; \"Zloženo\" - panel prikazuje samo naslov in opis ter ga je mogoče razširiti; \"Zaklenjeno\" - panel je prikazan v celoti in ga ni mogoče zložiti.",
      // "Sets the width of the panel in proportion to other survey elements in the same line. Accepts CSS values (px, %, in, pt, etc.)."
      width: "Določi širino panela v razmerju z drugimi elementi ankete v isti vrstici. Sprejema CSS vrednosti (px, %, in, pt, itd.).",
      // "Type in a template for entry titles. Use {panelIndex} for the entry's general position and {visiblePanelIndex} for its order among visible entries. Insert these placeholders into the pattern to add automatic numbering."
      templateTitle: "Vnesite predlogo za dinamične naslove panelov. Uporabite {panelIndex} za splošno pozicijo panela in {visiblePanelIndex} za njegov vrstni red med vidnimi paneli. Vstavite te označevalce v vzorec za dodajanje samodejnega številčenja.",
      // "Type in a template for tab titles. Use {panelIndex} for an entry's general position and {visiblePanelIndex} for its order among visible entries. Insert these placeholders into the pattern to add automatic numbering."
      templateTabTitle: "Vnesite predlogo za naslove zavihkov. Uporabite {panelIndex} za splošno pozicijo panela in {visiblePanelIndex} za njegov vrstni red med vidnimi paneli. Vstavite te označevalce v vzorec za dodajanje samodejnega številčenja.",
      // "A fallback text for tab titles that applies when the tab title pattern doesn't produce a meaningful value."
      tabTitlePlaceholder: "Zasilni tekst za naslove zavihkov, ki se uporabi, kadar predloga za naslov zavihka ne ustvari smiselne vrednosti.",
      // "This setting allows you to control the visibility of individual entries within the dynamic panel. Use the `{panel}` placeholder to reference the current entry in your expression."
      templateVisibleIf: "Ta nastavitev vam omogoča nadzor nad vidnostjo posameznih panelov znotraj dinamičnega panela. Uporabite označevalec `{panel}` za sklicevanje na trenutni panel v vaši izrazi.",
      // "This setting is automatically inherited by all questions within this dynamic panel. If you want to override this setting, define title alignment rules for individual questions. The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Top\" by default)."
      titleLocation: "Ta nastavitev se samodejno deduje za vsa vprašanja znotraj tega panela. Če želite prekiniti to nastavitev, določite pravila za poravnavo naslovov za posamezna vprašanja. Možnost \"Dedovanje\" uporabi nastavitev na ravni strani (če je nastavljeno) ali na ravni ankete (\"Na vrhu\" privzeto).",
      // "The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Under the panel title\" by default)."
      descriptionLocation: "Možnost \"Dedovanje\" uporabi nastavitev na ravni strani (če je nastavljeno) ali na ravni ankete (\"Pod naslovom panela\" privzeto).",
      // "Defines the position of a newly added entry. By default, new entries are added to the end. Select \"Next\" to insert a new entry after the current one."
      newPanelPosition: "Določi pozicijo novega panela. Privzeto se novi paneli dodajo na konec. Izberite \"Naslednji\", da vstavite nov panel po trenutnem.",
      // "Duplicates answers from the last entry and assigns them to the next added entry."
      copyDefaultValueFromLastEntry: "Podvoji odgovore iz zadnjega panela in jih dodeli naslednjemu dodanemu dinamičnemu panelu.",
      // "Reference a question name to require a user to provide a unique response for this question in each entry."
      keyName: "Sklicujte se na ime vprašanja, da zahteva od uporabnika, da za to vprašanje v vsakem panelu poda edinstven odgovor.",
      // "Triggers a confirmation prompt before removing an entry."
      confirmDelete: "Sproži potrditveni poziv pred odstranitvijo plošče."
    },
    matrixdynamic: {
      // [Auto-translated] "Triggers a confirmation prompt before removing a row."
      confirmDelete: "Sproži potrditveni poziv pred odstranitvijo vrstice.",
      // [Auto-translated] "Automatically expands the detail section when a new row is added to the matrix."
      detailPanelShowOnAdding: "Samodejno razširi razdelek s podrobnostmi, ko je v matriko dodana nova vrstica."
    },
    // "Duplicates answers from the last row and assigns them to the next added dynamic row."
    copyDefaultValueFromLastEntry: "Podvoji odgovore iz zadnje vrstice in jih dodeli naslednji dinamično dodani vrstici.",
    // "This setting allows you to assign a default answer value based on an expression. The expression can include basic calculations - `{q1_id} + {q2_id}`, Boolean expressions, such as `{age} > 60`, and functions: `iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, etc. The value determined by this expression serves as the initial default value that can be overridden by a respondent's manual input."
    defaultValueExpression: "Ta nastavitev vam omogoča dodelitev privzetega odgovora na podlagi izraza. Izraz lahko vključuje osnovne izračune - `{q1_id} + {q2_id}`, Booleove izraze, kot je `{age} > 60`, in funkcije: `iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, itd. Vrednost, določena z tem izrazom, služi kot začetna privzeta vrednost, ki jo lahko respondent prekine z ročnim vnosom.",
    // "Use the magic wand icon to set a conditional rule that determines when a respondent's input is reset to the value based on the \"Default value expression\" or \"Set value expression\" or to the \"Default answer\" value (if either is set)."
    resetValueIf: "Uporabite ikono čarobne paličice za nastavitev pogojnega pravila, ki določa, kdaj naj se vnos respondenta ponastavi na vrednost, določeno z \"Izraz privzete vrednosti\" ali \"Izraz nastavitev vrednosti\" ali na \"Privzeti odgovor\" (če je eden od njih nastavljen).",
    // "Use the magic wand icon to set a conditional rule that determines when to run the \"Set value expression\" and dynamically assign the resulting value as a response."
    setValueIf: "Uporabite ikono čarobne paličice za nastavitev pogojnega pravila, ki določa, kdaj izvesti \"Izraz nastavitev vrednosti\" in dinamično dodeliti rezultat kot odgovor.",
    // "Specify an expression that defines the value to be set when the conditions in the \"Set value if\" rule are met. The expression can include basic calculations - `{q1_id} + {q2_id}`, Boolean expressions, such as `{age} > 60`, and functions: `iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, etc. The value determined by this expression can be overridden by a respondent's manual input."
    setValueExpression: "Določite izraz, ki opredeli vrednost, ki se nastavi, ko so izpolnjeni pogoji v pravilu \"Nastavi vrednost, če\". Izraz lahko vključuje osnovne izračune - `{q1_id} + {q2_id}`, Booleove izraze, kot je `{age} > 60`, in funkcije: `iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, itd. Vrednost, določena z tem izrazom, lahko prekine respondentov ročni vnos.",
    // "Survey Creator allows you to manually adjust the inline widths of form elements to control the layout. If this doesn't produce the desired outcome, you can enable the grid layout, which structures form elements using a column-based system. To configure layout columns, select a page or panel and use the \"Question Settings\" → \"Grid columns\" table. To adjust how many columns a question spans, select it and set the desired value in the \"Layout\" → \"Column span\" field."
    gridLayoutEnabled: "Ustvarjalec ankete vam omogoča ročno prilagoditev širine elementov obrazca za nadzor postavitve. Če to ne privede do želenega izida, lahko omogočite mrežno postavitev, ki strukturira elemente obrazca z uporabo sistema, temelječega na stolpcih. Za konfiguracijo postavitev stolpcev izberite stran ali panel in uporabite tabelo \"Nastavitve vprašanj\" → \"Stolpci mreže\". Za prilagoditev, koliko stolpcev zajema vprašanje, ga izberite in nastavite želeno vrednost v polju \"Postavitev\" → \"Širina stolpca\".",
    question: {
      // "A question ID that is not visible to respondents."
      name: "ID vprašanja, ki ni viden respondentu.",
      // "Type a question subtitle."
      description: "Vnesite podnaslov vprašanja.",
      // "Use the magic wand icon to set a conditional rule that determines question visibility."
      visibleIf: "Uporabite ikono čarobne paličice za nastavitev pogojnega pravila, ki določa vidnost vprašanja.",
      // "Use the magic wand icon to set a conditional rule that disables the read-only mode for the question."
      enableIf: "Uporabite ikono čarobne paličice za nastavitev pogojnega pravila, ki onemogoči način samo za branje za vprašanje.",
      // "Use the magic wand icon to set a conditional rule that prevents survey advancing or submission unless the question received an answer."
      requiredIf: "Uporabite ikono čarobne paličice za nastavitev pogojnega pravila, ki prepreči napredovanje ankete ali oddajo, razen če vprašanje prejme odgovor.",
      // "Unselect to display the question in one line with the previous question or panel. The setting doesn't apply if the question is the first element in your form."
      startWithNewLine: "Odkljukajte, če želite vprašanje prikazati v eni vrstici s prejšnjim vprašanjem ali panelom. Nastavitev ne velja, če je vprašanje prvi element v obrazcu.",
      // "Repositions the question to the end of a selected page."
      page: "Preuredi vprašanje na konec izbrane strani.",
      // "Choose from: \"Expanded\" - the question box is displayed in full and can be collapsed; \"Collapsed\" - the question box displays only the title and description and can be expanded; \"Locked\" - the question box is displayed in full and cannot be collapsed."
      state: "Izberite med: \"Razširjeno\" - vprašanje je prikazano v celoti in ga je mogoče zložiti; \"Zloženo\" - vprašanje prikazuje samo naslov in opis ter ga je mogoče razširiti; \"Zaklenjeno\" - vprašanje je prikazano v celoti in ga ni mogoče zložiti.",
      // "Overrides title alignment rules defined on a panel, page, or survey level. When set to \"Hidden\", it also hides question descriptions. The \"Inherit\" option applies any higher-level settings (if set) or survey-level setting (\"Top\" by default)."
      titleLocation: "Prepiše pravila poravnave naslovov, določena na ravni panela, strani ali ankete. Ko je nastavljeno na \"Skrito\", se skrijejo tudi opisi vprašanj. Možnost \"Podedovano\" uporablja nastavitve višje ravni (če so nastavljene) ali nastavitve ankete (\"Zgoraj\" privzeto).",
      // "The \"Inherit\" option applies the survey-level setting (\"Under the question title\" by default)."
      descriptionLocation: "Možnost \"Podedovano\" uporablja nastavitev na ravni ankete (\"Pod naslovom vprašanja\" privzeto).",
      // "Sets the location of an error message in relation to the question with invalid input. Choose between: \"Top\" - an error text is placed at the top of the question box; \"Bottom\" - an error text is placed at the bottom of the question box. The \"Inherit\" option applies the survey-level setting (\"Top\" by default)."
      errorLocation: "Nastavi lokacijo sporočila o napaki v povezavi z vprašanjem z neveljavnim vhodom. Izberite med: \"Zgoraj\" - sporočilo o napaki je postavljeno na vrh vprašalnika; \"Spodaj\" - sporočilo o napaki je postavljeno na dno vprašalnika. Možnost \"Podedovano\" uporablja nastavitev na ravni ankete (\"Zgoraj\" privzeto).",
      // "Adds space or margin between the question content and the left border of the question box."
      indent: "Doda prostor ali rob med vsebino vprašanja in levim robom vprašalnika.",
      // "Sets the width of the question in proportion to other survey elements in the same line. Accepts CSS values (px, %, in, pt, etc.)."
      width: "Nastavi širino vprašanja glede na druge elemente ankete v isti vrstici. Sprejema CSS vrednosti (px, %, in, pt, itd.).",
      // "Choose from: \"On lost focus\" - the value is updated when the input field loses focus; \"While typing\" - the value is updated in real-time, as users are typing. The \"Inherit\" option applies the survey-level setting (\"On lost focus\" by default)."
      textUpdateMode: "Izberite med: \"Ob izgubi fokusa\" - vrednost se posodobi, ko vnosno polje izgubi fokus; \"Med tipkanjem\" - vrednost se posodablja v realnem času med tipkanjem uporabnikov. Možnost \"Podedovano\" uporablja nastavitev na ravni ankete (privzeto \"Ob izgubi fokusa\").",
      // "You can use any web service as a data source for multiple-choice questions. To populate choice values, enter the URL of the service providing the data."
      url: "Kot vir podatkov za vprašanja z več možnimi odgovori lahko uporabite katero koli spletno storitev. Za izpolnitev vrednosti izbire vnesite URL storitve, ki zagotavlja podatke.",
      // "A comparison operation used to filter the drop-down list."
      searchMode: "Primerjalna operacija, ki se uporablja za filtriranje spustnega seznama.",
      // "Long texts in choice options will automatically generate line breaks to fit within the drop-down menu. Unselect if you want the texts to clip."
      textWrapEnabled: "Dolga besedila v možnostih izbire bodo samodejno prelomljena, da se prilegajo v spustni meni. Odznačite, če želite, da se besedila odrežejo.",
      // "Specifies how many columns this question spans within the grid layout."
      effectiveColSpan: "Določa, koliko stolpcev to vprašanje zavzema v postavitvi mreže."
    },
    surveyvalidator: {
      // "Use the magic wand icon to define when the question's value is considered valid."
      expression: "Z ikono čarobne palice določite, kdaj se vrednost vprašanja šteje za veljavno."
    },
    signaturepad: {
      // "Sets the width of the displayed signature area and the resulting image."
      signatureWidth: "Določa širino prikazanega območja podpisa in končne slike.",
      // "Sets the height of the displayed signature area and the resulting image."
      signatureHeight: "Določa višino prikazanega območja podpisa in končne slike.",
      // "Select if you want the signature area to fill all available space within the question box while maintaining the default 3:2 aspect ratio. When custom width and height values are set, the setting will keep the aspect ratio of these dimensions."
      signatureAutoScaleEnabled: "Izberite, če želite, da se območje podpisa zapolni z vsem razpoložljivim prostorom v polju vprašanja ob ohranjanju privzetega razmerja stranic 3:2. Ko so nastavljene prilagojene vrednosti širine in višine, bo nastavitev ohranila razmerje teh dimenzij."
    },
    file: {
      // "Specifies the display height of uploaded images in the preview and the actual height of images taken with the camera. In single file upload mode, the display height is limited by the preview area; in multiple file upload mode, it is limited by the thumbnail area."
      imageHeight: "Določa višino prikaza prenesenih slik v predogledu in dejansko višino slik, posnetih s fotoaparatom. V načinu nalaganja ene datoteke je višina zaslona omejena z območjem predogleda; V načinu nalaganja več datotek je omejen z območjem sličic.",
      // "Specifies the display width of uploaded images in the preview and the actual width of images taken with the camera. In single file upload mode, the display width is limited by the preview area; in multiple file upload mode, it is limited by the thumbnail area."
      imageWidth: "Določa širino prikaza prenesenih slik v predogledu in dejansko širino slik, posnetih s fotoaparatom. V načinu nalaganja ene datoteke je širina prikaza omejena z območjem predogleda; V načinu nalaganja več datotek je omejen z območjem sličic.",
      // "Displays thumbnail previews for uploaded files when possible. Unselect if you want to show file icons instead."
      allowImagesPreview: "Prikaže sličice naloženih datotek, kadar je to mogoče. Odznačite, če želite namesto tega prikazati ikone datotek."
    },
    image: {
      // "The \"Auto\" option automatically determines the suitable mode for display - Image, Video, or YouTube - based on the source URL provided."
      contentMode: "Možnost \"Samodejno\" samodejno določi ustrezen način prikaza – slika, video ali YouTube – glede na podani vir URL."
    },
    imagepicker: {
      // "Overrides the minimum and maximum height values."
      imageHeight: "Prepiše najmanjše in največje vrednosti višine.",
      // "Overrides the minimum and maximum width values."
      imageWidth: "Prepiše najmanjše in največje vrednosti širine.",
      // "\"Value\" serves as an item ID used in conditional rules; \"Text\" is displayed to respondents."
      choices: "\"Vrednost\" služi kot ID elementa, ki se uporablja v pogojnih pravilih; \"Besedilo\" je prikazano anketirancem.",
      // "Choose between \"Image\" and \"Video\" to set the content mode of the media selector. If \"Image\" is selected, ensure that all options provided are image files in the following formats: JPEG, GIF, PNG, APNG, SVG, BMP, ICO. Similarly, if \"Video\" is selected, ensure that all options are direct links to video files in the following formats: MP4, MOV, WMV, FLV, AVI, MKV. Please note that YouTube links are not supported for video options."
      contentMode: "Izberite med \"Slika\" in \"Video\", da nastavite način vsebine izbirnika medijev. Če je izbrana možnost \"Slika\", poskrbite, da so vse ponujene možnosti slikovne datoteke v naslednjih formatih: JPEG, GIF, PNG, APNG, SVG, BMP, ICO. Podobno, če je izbrana možnost \"Video\", zagotovite, da so vse možnosti neposredne povezave do video datotek v naslednjih formatih: MP4, MOV, WMV, FLV, AVI, MKV. Upoštevajte, da povezave do YouTuba niso podprte za video možnosti."
    },
    text: {
      // "This setting only resizes the input field and doesn't affect the width of the question box. To limit the accepted input length, go to \"Validation\" → \"Maximum character limit\"."
      size: "Ta nastavitev spremeni samo velikost vnosnega polja in ne vpliva na širino polja z vprašanjem. Če želite omejiti dolžino vnesenega besedila, pojdite na \"Validacija\" → \"Največje dovoljeno število znakov\"."
    },
    comment: {
      // "Sets the number of displayed lines in the input field. If the input takes up more lines, the scroll bar will appear."
      rows: "Določa število prikazanih vrstic v vnosnem polju. Če vnos zavzame več vrstic, se prikaže drsna vrstica."
    },
    // survey templates
    survey: {
      // "Select if you want to prevent respondents from filling out your survey."
      readOnly: "Izberite, če želite preprečiti anketirancem izpolnjevanje ankete.",
      // "Sets the location of the progress bar. The \"Auto\" value displays the progress bar above or below the survey header."
      progressBarLocation: "Določa lokacijo vrstice napredka. Vrednost \"Samodejno\" prikaže vrstico napredka nad ali pod glavo ankete."
    },
    matrixdropdowncolumn: {
      // "A column ID that is not visible to respondents."
      name: "ID stolpca, ki ni viden anketirancem.",
      // "When enabled for a column, a respondent is required to provide a unique response for each question within this column."
      isUnique: "Ko je omogočeno za stolpec, mora anketiranec zagotoviti edinstven odgovor za vsako vprašanje v tem stolpcu.",
      // "Sets the number of displayed lines in the input field. If the input takes up more lines, the scroll bar will appear."
      rows: "Določi število prikazanih vrstic v vnosnem polju. Če vnos zavzame več vrstic, se bo prikazala drsna vrstica.",
      // "Use the magic wand icon to set a conditional rule that determines column visibility."
      visibleIf: "Uporabite ikono čarobne palice za nastavitev pogojnega pravila, ki določi vidnost stolpca.",
      // "Use the magic wand icon to set a conditional rule that disables the read-only mode for the column."
      enableIf: "Uporabite ikono čarobne palice za nastavitev pogojnega pravila, ki onemogoči način samo za branje za stolpec.",
      // "Use the magic wand icon to set a conditional rule that prevents survey submission unless at least one nested question has an answer."
      requiredIf: "Uporabite ikono čarobne palice za nastavitev pogojnega pravila, ki prepreči oddajo ankete, če vsaj eno vprašanju v tem stolpcu ni bilo odgovorjeno.",
      // "When selected, creates an individual column for each choice option."
      showInMultipleColumns: "Ko je izbrano, ustvari posamezen stolpec za vsako izbiro.",
      // "Arranges choice options in a multi-column layout. When set to 0, the options are displayed in a single line. When set to -1, the actual value is inherited from the \"Nested column count\" property of the parent matrix."
      colCount: "Razvrsti možnosti izbire v postavitev z več stolpci. Ko je nastavljeno na 0, so možnosti prikazane v eni sami vrstici. Ko je nastavljeno na -1, se dejanska vrednost podeduje iz lastnosti \"Število gnezdenih stolpcev\" nadrejenega matriksa."
    },
    slider: {
      // "The lowest number that users can select."
      min: "Najnižja številka, ki jo lahko izberejo uporabniki.",
      // "The highest number that users can select."
      max: "Najvišja številka, ki jo lahko izberejo uporabniki.",
      // "The interval between selectable scale values. For example, a step of 5 will allow users to select 0, 5, 10, etc."
      step: "Interval med izbranimi vrednostmi merila. Na primer, korak 5 bo uporabnikom omogočil, da izberejo 0, 5, 10 itd.",
      // "The minimum distance between the slider thumbs a user can set."
      minRangeLength: "Najmanjša razdalja med palci drsnika, ki jo lahko nastavi uporabnik.",
      // "The maximum distance between the slider thumbs a user can set."
      maxRangeLength: "Največja razdalja med palci drsnika, ki jo lahko nastavi uporabnik.",
      // "Specifies how many scale labels to generate. A value of -1 means the number is calculated automatically based on the Min value and Max value."
      labelCount: "Določa, koliko oznak merila je treba ustvariti. Vrednost -1 pomeni, da se število izračuna samodejno na podlagi vrednosti »Min« in »Največja«.",
      // "Use `{0}` as a placeholder for the actual value."
      labelFormat: "Uporabite »{0}« kot označbo mesta za dejansko vrednost.",
      // "Allows you to define custom labels at specific values and optionally assign corresponding text to them (e.g., 0 = \"Poor\", 100 = \"Excellent\")."
      customLabels: "Omogoča določanje oznak po meri pri določenih vrednostih in jim po želji dodelite ustrezno besedilo (npr. 0 = »Slabo«, 100 = »Odlično«).",
      // "Use `{0}` as a placeholder for the actual value."
      tooltipFormat: "Uporabite »{0}« kot označbo mesta za dejansko vrednost.",
      // "Allows users to move one thumb past the other."
      allowSwap: "Uporabnikom omogoča, da premaknejo en palec mimo drugega.",
      // [Auto-translated] "Displays a button that clears the selected slider value and sets it to undefined."
      allowClear: "Prikaže gumb, ki počisti izbrano vrednost drsnika in jo nastavi na nedoločeno.",
      // "Defines the slider's minimum value dynamically using an expression. Supports basic calculations (e.g, `{q1_id} + {q2_id}`), Boolean logic (e.g., `{age} > 60`), and functions like `iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, and more."
      minValueExpression: "Dinamično določa najmanjšo vrednost drsnika z uporabo izraza. Podpira osnovne izračune (npr. '{q1_id} + {q2_id}'), logično logiko (npr. '{age} > 60') in funkcije, kot so 'iif()', 'today()', 'age()', 'min()', 'max()', 'avg()' in še več.",
      // "Defines the slider's maximum value dynamically using an expression. Supports basic calculations (e.g, `{q1_id} + {q2_id}`), Boolean logic (e.g., `{age} > 60`), and functions like `iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, and more."
      maxValueExpression: "Dinamično določa največjo vrednost drsnika z uporabo izraza. Podpira osnovne izračune (npr. '{q1_id} + {q2_id}'), logično logiko (npr. '{age} > 60') in funkcije, kot so 'iif()', 'today()', 'age()', 'min()', 'max()', 'avg()' in še več."
    },
    // [Auto-translated] "Makes this choice exclusive. When selected by a user, it will automatically deselect all other options in the question."
    isExclusive: "Zaradi tega je ta izbira ekskluzivna. Ko uporabnik izbere, bo samodejno preklical izbiro vseh drugih možnosti v vprašanju.",
    // "Select if uppercase and lowercase letters in the regular expression must be treated as equivalent."
    caseInsensitive: "Izberite, če naj bodo velike in male črke v regularnem izrazu obravnavane kot enake",
    // "Choose from: \"Static\" - sets a fixed width; \"Responsive\" - makes the survey occupy the full width of the screen; \"Auto\" - applies either of the two depending on the question types used."
    widthMode: "Izberite med Statistična - nastavi fiksno širino, Responsive - naredi anketo, da zasede celotno širino zaslona, Auto - uporabi eno izmed dveh možnosti glede na vrsto vprašanj",
    // "Assign a unique cookie value for your survey. The cookie will be set in a respondent's browser upon survey completion to prevent repetitive survey submissions."
    cookieName: "Dodelite edinstveno vrednost piškotka za vašo anketo. Piškotek bo nastavljen v brskalniku anketiranca ob zaključku ankete, da se prepreči ponovljeno oddajanje ankete",
    // "Paste an image link (no size limits) or click the folder icon to browse a file from your computer (up to 64KB)."
    logo: "Prilepite povezavo do slike (brez omejitve velikosti) ali kliknite ikono mape, da poiščete datoteko na vašem računalniku (do 64KB)",
    // "Sets a logo width in CSS units (px, %, in, pt, etc.)."
    logoWidth: "Nastavi širino logotipa v enotah CSS (px, %, in, pt itd.)",
    // "Sets a logo height in CSS units (px, %, in, pt, etc.)."
    logoHeight: "Nastavi višino logotipa v enotah CSS (px, %, in, pt itd.)",
    // "Choose from: \"None\" - image maintains its original size; \"Contain\" - image is resized to fit while maintaining its aspect ratio; \"Cover\" - image fills the entire box while maintaining its aspect ratio; \"Fill\" - image is stretched to fill the box without maintaining its aspect ratio."
    logoFit: "Izberite med: Brez - slika ohrani svojo izvirno velikost, Vsebuje - slika se preuredi, da se prilega obdržanju svojega razmerja stranic, Pokriva - slika zapolni celoten okvir obdržanju svojega razmerja stranic, Polni - slika se raztegne, da zapolni okvir brez ohranjanja razmerja stranic",
    // "Select if you want the survey to auto-advance to the next page once a respondent has answered all questions on the current page. This feature won't apply if the last question on the page is open-ended or allows multiple answers."
    autoAdvanceEnabled: "Izberite, če želite, da anketa samodejno preide na naslednjo stran, ko anketiranec odgovori na vsa vprašanja na trenutni strani. Ta funkcija se ne bo uporabila, če je zadnje vprašanje na strani odprto ali omogoča več odgovorov",
    // "Select if you want the survey to complete automatically after a respondent answers all questions."
    autoAdvanceAllowComplete: "Izberite, če želite, da se anketa samodejno zaključi, ko anketiranec odgovori na vsa vprašanja",
    // "Sets the visibility of navigation buttons on a page."
    showNavigationButtons: "Nastavi vidnost gumbov za navigacijo na strani",
    // "Sets the location of navigation buttons on a page."
    navigationButtonsLocation: "Nastavi lokacijo gumbov za navigacijo na strani",
    // "Enable the preview page with all or answered questions only."
    showPreviewBeforeComplete: "Omogoči predogledno stran z vsemi ali samo odgovorjenimi vprašanji",
    // "Applies to all questions within the survey. This setting can be overridden by title alignment rules at lower levels: panel, page, or question. A lower-level setting will override those on a higher level."
    questionTitleLocation: "Uporabi za vsa vprašanja v anketi. To nastavitev je mogoče nadomestiti z nastavitvami poravnave naslovov na nižjih ravneh: panel, stran ali vprašanje. Nastavitve na nižji ravni preglasijo tiste na višji ravni",
    // "A symbol or a sequence of symbols indicating that an answer is required."
    requiredMark: "Simbol ali zaporedje simbolov, ki nakazuje, da je odgovor obvezen",
    // "Enter a number or letter with which you want to start numbering."
    questionStartIndex: "Vnesite številko ali črko, s katero želite začeti številčenje",
    // "Sets the location of an error message in relation to the question with invalid input. Choose between: \"Top\" - an error text is placed at the top of the question box; \"Bottom\" - an error text is placed at the bottom of the question box."
    questionErrorLocation: "Nastavi lokacijo sporočila o napaki v povezavi z vprašanjem z neveljavnim vnosom. Izberite med: Na vrhu - sporočilo o napaki je postavljeno na vrh vprašanja, Na dnu - sporočilo o napaki je postavljeno na dno vprašanja",
    // "Select if you want the first input field on each page ready for text entry."
    autoFocusFirstQuestion: "Izberite, če želite, da je prvo vnosno polje na vsaki strani pripravljeno za vnos besedila",
    // "Keeps the original order of questions or randomizes them. The effect of this setting is only visible in the Preview tab."
    questionOrder: "Ohrani prvoten vrstni red vprašanj ali jih naključno postavi. Učinek te nastavitve je viden samo na zavihku Predogled",
    // "For text entry questions only."
    maxTextLength: "Samo za vprašanja z besedilnim vnosom",
    // "For question comments only."
    maxCommentLength: "Samo za komentarje k vprašanjem",
    // [Auto-translated] "Sets the number of displayed lines in text areas for question comments. If the input takes up more lines, the scroll bar appears."
    commentAreaRows: "Nastavi število prikazanih vrstic v besedilnih območjih za komentarje vprašanj. Če vnos zavzame več vrstic, se prikaže drsni trak.",
    // "Select if you want question comments and Long Text questions to auto-grow in height based on the entered text length."
    autoGrowComment: "Izberite, če želite, da se komentarji k vprašanjem in vprašanja z dolgim besedilom samodejno povečajo v višino glede na dolžino vnesenega besedila",
    // "For question comments and Long Text questions only."
    allowResizeComment: "Samo za komentarje k vprašanjem in vprašanja z dolgim besedilom",
    // "Custom variables serve as intermediate or auxiliary variables used in form calculations. They take respondent inputs as source values. Each custom variable has a unique name and an expression it's based on."
    calculatedValues: "Spremenljivke po meri služijo kot vmesne ali pomožne spremenljivke, ki se uporabljajo v izračunih obrazca. Uporabljajo vhodne vrednosti anketirancev. Vsaka spremenljivka po meri ima edinstveno ime in izraz, na katerem temelji",
    // "Select if you wish the calculated value of the expression to be saved along with survey results."
    includeIntoResult: "Izberite, če želite, da se izračunana vrednost izraza shrani skupaj z rezultati ankete",
    // "A trigger is an event or condition that is based on an expression. Once the expression is evaluated to \"true\", a trigger sets off an action. Such an action can optionally have a target question it affects."
    triggers: "Sprožilec je dogodek ali pogoj, ki temelji na izrazu. Ko je izraz ocenjen kot resničen, sprožilec izvede akcijo. Ta akcija lahko po potrebi vpliva na ciljno vprašanje",
    // "Choose whether or not to clear values for questions hidden by conditional logic and when to do it."
    clearInvisibleValues: "Izberite, ali želite ali ne želite počistiti vrednosti za vprašanja, ki so skrita zaradi pogojne logike, in kdaj to storiti",
    // "Choose from: \"On lost focus\" - the value is updated when the input field loses focus; \"While typing\" - the value is updated in real-time, as users are typing."
    textUpdateMode: "Izberite med: Ob izgubi fokusa - vrednost se posodobi, ko vnosno polje izgubi fokus, Med tipkanjem - vrednost se posodobi v realnem času, ko uporabniki tipkajo",
    // "The left value serves as a column ID used in conditional rules, the right value is displayed to respondents."
    columns: "Leva vrednost služi kot ID stolpca, ki se uporablja v pogojnih pravilih, desna vrednost pa je prikazana anketirancem",
    // "The left value serves as a row ID used in conditional rules, the right value is displayed to respondents."
    rows: "Leva vrednost služi kot ID vrstice, ki se uporablja v pogojnih pravilih, desna vrednost pa je prikazana anketirancem",
    // "Accepts CSS values (px, %, in, pt, etc.)."
    columnMinWidth: "Sprejme enote CSS (px, %, in, pt itd.)",
    // "Accepts CSS values (px, %, in, pt, etc.)."
    rowTitleWidth: "Sprejme enote CSS (px, %, in, pt itd.)",
    // "Visible only if at least one column displays total values set with \"Aggregation method\" or \"Total value expression\"."
    totalText: "Vidno je samo, če vsaj en stolpec prikazuje skupne vrednosti, nastavljene z: Metoda agregacije ali Izraz skupne vrednosti",
    // "Sets the location of an error message in relation to a cell with invalid input. The \"Inherit\" option applies the setting from the \"Error message alignment\" property."
    cellErrorLocation: "Nastavi lokacijo sporočila o napaki v povezavi s celico z neveljavnim vnosom. Nastavitev Podedovano uporablja nastavitev iz lastnosti: Poravnava sporočila o napaki",
    // "Sets the location of error messages for questions nested in detail sections. The \"Inherit\" option applies the setting from the \"Error message alignment\" property."
    detailErrorLocation: "Nastavi lokacijo sporočil o napakah za vprašanja, gnezdena v podrobnostnih razdelkih. Nastavitev Podedovano uporablja nastavitev iz lastnosti: Poravnava sporočila o napaki",
    // "When the \"Prevent duplicate responses\" property is enabled, a respondent attempting to submit a duplicate entry will receive the following error message."
    keyDuplicationError: "Ko je omogočena lastnost Prepreči podvojene odgovore, bo anketiranec, ki bo poskušal oddati podvojen vnos, prejel naslednje sporočilo o napaki",
    // "Allows you to calculate total values based on an expression. The expression can include basic calculations (`{q1_id} + {q2_id}`), Boolean expressions (`{age} > 60`) and functions ('iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, etc.)."
    totalExpression: "Omogoča izračun skupnih vrednosti na podlagi izraza. Izraz lahko vključuje: osnovne izračune ({q1_id} + {q2_id}), Booleove izraze ({age} > 60) in funkcije (iif(), today(), age(), min(), max(), avg() itd.)",
    // "Reference a column ID to require a user to provide a unique response for each question within the specified column."
    keyName: "Sklicujte se na ID stolpca, da zahtevate od uporabnika, da zagotovi edinstven odgovor za vsako vprašanje znotraj določenega stolpca",
    // "Type a subtitle."
    description: "Vnesite podnaslov",
    // "Choose a language to begin creating your survey. To add a translation, switch to a new language and translate the original text here or in the Translations tab."
    locale: "Izberite jezik za začetek ustvarjanja vaše ankete. Če želite dodati prevod, preklopite na nov jezik in prevedite izvirno besedilo tukaj ali na zavihku Prevod",
    // "Sets the location of a detail section in relation to a row. Choose from: \"None\" - no detail section is added; \"Under the row\" - a detail section is placed under each row of the matrix; \"Under the row, display one detail section only\" - a detail section is displayed under a single row only, the remaining sections are collapsed."
    detailPanelMode: "Nastavi lokacijo podrobnostnega razdelka v povezavi z vrstico. Izberite med: Brez - ni dodanega širjenja, Pod vrstico - širitev vrstice je postavljena pod vsako vrstico matrike, Pod vrstico prikaži samo eno širitev vrstice - širitev je prikazana samo pod eno vrstico, preostale širitve vrstic so skrite",
    // "Choose from: \"None\" - image maintains its original size; \"Contain\" - image is resized to fit while maintaining its aspect ratio; \"Cover\" - image fills the entire box while maintaining its aspect ratio; \"Fill\" - image is stretched to fill the box without maintaining its aspect ratio."
    imageFit: "Izbirate lahko med: \"Brez\" - slika ohrani svojo prvotno velikost; »Contain« - velikost slike se spremeni tako, da se prilega, hkrati pa se ohrani njeno razmerje; »Cover« - slika zapolni celotno škatlo, hkrati pa ohrani razmerje med širino in višino; »Polnilo« - slika se raztegne, da zapolni polje, ne da bi ohranila njegovo razmerje.",
    // "The \"Inherit\" option applies a survey-level setting (\"Disabled\" by default)."
    autoGrow: "Možnost »Podeduj« uporablja nastavitev na ravni ankete (»privzeto onemogočeno«).",
    // "The \"Inherit\" option applies a survey-level setting (\"Enabled\" by default)."
    allowResize: "Možnost »Deduj« uporablja nastavitev na ravni ankete (»privzeto omogočeno«).",
    // "A time interval in seconds after which the survey auto-advances to the \"Thank You\" page. When set to 0, counts the time spent on the survey."
    timeLimit: "Časovni interval v sekundah, po katerem anketa samodejno preide na stran Hvala. Ko je nastavljeno na 0, šteje čas preživet na anketi",
    // "A time interval in seconds after which the survey auto-advances to the next page. Hides the \"Previous\" navigation button. When set to 0, counts the time spent on the current page."
    timeLimitPerPage: "Časovni interval v sekundah, po katerem se anketa samodejno premakne na naslednjo stran. Skrije gumb za krmarjenje »Prejšnji«. Če je nastavljena na 0, šteje čas, porabljen na trenutni strani.",
    // "Enable this option to trigger validation when a user focuses on an empty input field and then leaves it without making any changes."
    validateVisitedEmptyFields: "Omogočite to možnost, da sprožite preverjanje, ko uporabnik klikne na prazno vnosno polje in ga nato zapusti brez sprememb",
    page: {
      // "A page ID that is not visible to respondents."
      name: "ID strani, ki ni viden anketirancem.",
      // "Type a page subtitle."
      description: "Vnesite podnaslov strani.",
      // "A caption displayed on a navigation button in the progress bar or table of contents (TOC). If you leave this field empty, the navigation button will use the page title or page name. To enable the progress bar or TOC, go to \"Survey\" → \"Navigation\"."
      navigationTitle: "Napis, prikazan na gumbu za krmarjenje v vrstici napredovanja ali kazalu. Če pustite to polje prazno, bo gumb za krmarjenje uporabil naslov ali ime strani. Če želite omogočiti vrstico napredovanja ali TOC, pojdite na »Anketa« → »Krmarjenje«.",
      // "A time interval in seconds after which the survey auto-advances to the next page. Hides the \"Previous\" navigation button. When set to 0, counts the time spent on the current page."
      timeLimit: "Časovni interval v sekundah, po katerem anketa samodejno preide na naslednjo stran. Skrije navigacijski gumb Prejšnja. Ko je nastavljeno na 0, šteje čas preživet na trenutni strani",
      // "Use the magic wand icon to set a conditional rule that determines page visibility."
      visibleIf: "Uporabite ikono čarobne palice za nastavitev pogoja, ki določa vidnost strani",
      // "Use the magic wand icon to set a conditional rule that disables the read-only mode for the page."
      enableIf: "Uporabite ikono čarobne palice za nastavitev pogoja, ki onemogoči način samo za branje na strani",
      // "Use the magic wand icon to set a conditional rule that prevents survey submission unless at least one nested question has an answer."
      requiredIf: "Uporabite ikono čarobne palice za nastavitev pogoja, ki prepreči oddajo ankete, razen če ima vsaj eno gnezdeno vprašanje odgovor",
      // "Applies to all questions within this page. When set to \"Hidden\", it also hides question descriptions. If you want to override this setting, define title alignment rules for individual questions or panels. The \"Inherit\" option applies the survey-level setting (\"Top\" by default)."
      questionTitleLocation: "Uporablja se za vsa vprašanja na tej strani. Ko je nastavljeno na Skrito, skrije tudi opise vprašanj. Če želite preglasiti to nastavitev, določite pravila poravnave naslovov za posamezna vprašanja ali panele. Možnost Podedovano uporabi nastavitev na ravni ankete (privzeto Zgoraj)",
      // "Sets consistent width for question titles when they are aligned to the left of their question boxes. Accepts CSS values (px, %, in, pt, etc.)."
      questionTitleWidth: "Nastavi enotno širino naslovov vprašanj, ko so poravnani na levo od svojih vprašalnih polj. Sprejema CSS vrednosti (px, %, in, pt itd.)",
      // "Sets the location of an error message in relation to the question with invalid input. Choose between: \"Top\" - an error text is placed at the top of the question box; \"Bottom\" - an error text is placed at the bottom of the question box. The \"Inherit\" option applies the survey-level setting (\"Top\" by default)."
      questionErrorLocation: "Nastavi lokacijo sporočila o napaki v povezavi z vprašanjem z neveljavnim vnosom. Izberite med: Zgoraj - besedilo napake je postavljeno na vrh polja vprašanja, Spodaj - besedilo napake je postavljeno na dno polja vprašanja. Možnost Podedovano uporabi nastavitev na ravni ankete (privzeto Zgoraj)",
      // "Keeps the original order of questions or randomizes them. The \"Inherit\" option applies the survey-level setting (\"Original\" by default). The effect of this setting is only visible in the Preview tab."
      questionOrder: "Ohrani prvoten vrstni red vprašanj ali jih naključno premeša. Možnost Podedovano uporabi nastavitev na ravni ankete (privzeto Originalno). Učinek te nastavitve je viden samo na zavihku Predogled",
      // "Sets the visibility of navigation buttons on the page. The \"Inherit\" option applies the survey-level setting, which defaults to \"Visible\"."
      showNavigationButtons: "Nastavi vidnost navigacijskih gumbov na strani. Možnost Podedovano uporabi nastavitev na ravni ankete, ki je privzeto Vidno",
      // "This table lets you configure each grid column on the page. It automatically sets the width percentage for each column based on the maximum number of elements in a row. To customize the grid layout, manually adjust these values and define the title width for all questions in each column."
      gridLayoutColumns: "Ta tabela vam omogoča konfiguracijo vsakega stolpca mreže na strani. Samodejno nastavi odstotke širine za vsak stolpec glede na največje število elementov v vrstici. Če želite prilagoditi postavitev mreže, ročno prilagodite te vrednosti in določite širino naslova za vsa vprašanja v posameznem stolpcu"
    },
    // "Sets the location of a timer on a page."
    timerLocation: "Nastavi lokacijo časovnika na strani",
    // "Choose from: \"Locked\" - users cannot expand or collapse entries; \"Collapse all\" - all entries start in a collapsed state; \"Expand all\" - all entries start in an expanded state; \"First expanded\" - only the first entry is initially expanded. Applies if \"Entry display mode\" is set to \"List\" and the \"Entry title pattern\" property is specified."
    panelsState: "Izberite med: Zaklenjeno - uporabniki ne morejo razširiti ali strniti panelov, Strni vse - vsi paneli se začnejo v strnjenem stanju, Razširi vse - vsi paneli se začnejo v razširjenem stanju, Prvi razširjen - samo prvi panel je sprva razširjen. Uporablja se, če je Način prikaza panela nastavljen na Seznam in je določena lastnost Vzorec naslova panela",
    // "Enter a shared property name within the array of objects that contains the image or video file URLs you want to display in the choice list."
    imageLinkName: "Vnesite skupno ime lastnosti v nizu objektov, ki vsebuje URL-je slik ali video datotek, ki jih želite prikazati na seznamu izbir",
    // "The left value serves as an item ID used in conditional rules, the right value is displayed to respondents."
    choices: "Leva vrednost služi kot ID elementa, ki se uporablja v pogojnih pravilih, desna vrednost je prikazana anketirancem",
    // "Type a user-friendly title to display."
    title: "Vnesite uporabniku prijazen naslov za prikaz",
    // "Ensures that users won't complete the survey until files are uploaded."
    waitForUpload: "Zagotavlja, da uporabniki ne morejo dokončati ankete, dokler datoteke niso naložene",
    // "Accepts CSS values (px, %, in, pt, etc.)."
    minWidth: "Sprejema CSS vrednosti (px, %, in, pt itd.)",
    // "Accepts CSS values (px, %, in, pt, etc.)."
    maxWidth: "Sprejema CSS vrednosti (px, %, in, pt itd.)",
    // "Accepts CSS values (px, %, in, pt, etc.)."
    width: "Sprejema CSS vrednosti (px, %, in, pt itd.)",
    // "A join identifier is a custom key that you can assign to several questions to link them together and sync their values. These values will be merged into a single array or object and stored in survey results using the key as the property name."
    valueName: "Identifikator združevanja je uporabniški ključ, ki ga lahko dodelite več vprašanjem, da jih povežete in sinhronizirate njihove vrednosti. Te vrednosti bodo združene v en niz ali objekt in shranjene v rezultatih ankete z uporabo ključa kot imena lastnosti",
    // [Auto-translated] "A value displayed in HTML questions and in the dynamic titles and descriptions of survey elements when the question value is empty."
    defaultDisplayValue: "Vrednost, prikazana v vprašanjih HTML ter v dinamičnih naslovih in opisih elementov ankete, ko je vrednost vprašanja prazna.",
    // "In single- and multiple-selection question types, each choice option has an ID and display value. When selected, this setting shows a display value instead of an ID value in HTML questions and dynamic titles and descriptions of survey elements."
    useDisplayValuesInDynamicTexts: "Pri vprašanjih z eno ali več izbirami ima vsaka možnost ID in prikazano vrednost. Ko je izbrano, ta nastavitev prikaže prikazano vrednost namesto ID-ja v HTML vprašanjih ter dinamičnih naslovih in opisih anketnih elementov",
    // "Choose whether or not to clear question values hidden by conditional logic and when to do it. The \"Inherit\" option applies the survey-level setting (\"Upon survey completion\" by default)."
    clearIfInvisible: "Izberite, ali naj se vrednosti vprašanj, skritih s pogojno logiko, izbrišejo in kdaj naj se to zgodi. Možnost Podedovano uporabi nastavitev na ravni ankete (privzeto Ob zaključku ankete)",
    // "Choose from: \"All\" - copies all choice options from the selected question; \"Selected\" - dynamically copies only selected choice options; \"Unselected\" - dynamically copies only unselected choice options. The \"None\" and \"Other\" options are copied by default if enabled in the source question."
    choicesFromQuestionMode: "Izberite med: Vse - kopira vse možnosti izbranega vprašanja, Izbrano - dinamično kopira samo izbrane možnosti, Neizbrano - dinamično kopira samo neizbrane možnosti. Možnosti Nobena in Drugo se kopirajo privzeto, če so omogočene v izvornih vprašanjih",
    // "In single- and multiple-selection question types, each choice option has an ID and display value. This setting specifies which matrix column or panel question should provide the IDs."
    choiceValuesFromQuestion: "Pri vprašanjih z eno ali več izbirami ima vsaka možnost ID in prikazano vrednost. Ta nastavitev določa, kateri stolpec matrike ali vprašanje panela naj zagotovi ID-je",
    // "In single- and multiple-selection question types, each choice option has an ID and display value. This setting specifies which matrix column or panel question should provide the display texts."
    choiceTextsFromQuestion: "Pri vprašanjih z eno ali več izbirami ima vsaka možnost ID in prikazano vrednost. Ta nastavitev določa, kateri stolpec matrike ali vprašanje panela naj zagotovi prikazana besedila",
    // [Auto-translated] "Select to let respondents add their own choices if the desired option isn't available in the dropdown. Custom choices will only be stored temporarily for the duration of the current browser session."
    allowCustomChoices: "Izberite, če želite respondentom omogočiti, da dodajo svoje izbire, če želena možnost ni na voljo v spustnem meniju. Izbire po meri bodo shranjene le začasno za čas trajanja trenutne seje brskalnika.",
    // "When selected, users can include additional input in a separate comment box."
    showOtherItem: "Ko je izbrano, lahko uporabniki vnesejo dodatni vnos v ločeno polje za komentar",
    // "Displays each special choice option (\"None\", \"Other\", \"Select All\") on a new line, even when using a multiple-column layout."
    separateSpecialChoices: "Vsako posebno možnost (Nobena, Drugo, Izberi vse) prikaže v novi vrstici, tudi pri uporabi večstolpčne postavitve",
    // "Specify the location within the service dataset where the target array of objects is located. Leave empty if the URL already points to the array."
    path: "Določite lokacijo znotraj niza podatkov storitve, kjer se nahaja ciljni niz objektov. Pustite prazno, če URL že kaže na niz",
    choicesbyurl: {
      // "Enter a uniform property name within the array of objects whose value will be stored as a response in survey results."
      valueName: "Vnesite enotno ime lastnosti znotraj niza objektov, katere vrednost bo shranjena kot odgovor v rezultatih ankete"
    },
    // "Enter a uniform property name within the array of objects that contains the values you want to display in the choice list."
    titleName: "Vnesite enotno ime lastnosti znotraj niza objektov, ki vsebuje vrednosti, ki jih želite prikazati na seznamu izbir",
    // "Select to allow the service to return an empty response or array."
    allowEmptyResponse: "Izberite to možnost, da omogočite storitvi vračanje praznega odziva ali niza",
    // "Use the magic wand icon to set a conditional rule that determines the visibility of all choice options."
    choicesVisibleIf: "Uporabite ikono čarobne palice za nastavitev pogoja, ki določa vidnost vseh možnosti izbire",
    // "The left value serves as an item ID used in conditional rules, the right value is displayed to respondents."
    rateValues: "Leva vrednost služi kot ID elementa, ki se uporablja v pogojnih pravilih, desna vrednost je prikazana anketirancem",
    rating: {
      // "\"Auto\" selects between the \"Buttons\" and \"Dropdown\" modes based on the available width. When the width is insufficient to display buttons, the question displays a dropdown."
      displayMode: "\"Samodejno\" izbere med načinoma \"Gumbi\" in \"Spustni seznam\" glede na razpoložljivo širino. Ko širina ni zadostna za prikaz gumbov, se vprašanje prikaže kot spustni seznam"
    },
    // "Allows you to connect questions that produce results in different formats. When such questions are linked together using a join identifier, this shared property stores selected question values."
    valuePropertyName: "Omogoča povezovanje vprašanj, ki ustvarjajo rezultate v različnih formatih. Ko so taka vprašanja povezana z identifikatorjem združevanja, ta skupna lastnost shrani izbrane vrednosti vprašanj",
    // "Select if you want to update the drop-down menu contents to match the search query that a user is typing in the input field."
    searchEnabled: "Izberite, če želite, da se vsebina spustnega seznama posodobi glede na iskalni niz, ki ga uporabnik vnaša v polje za vnos",
    // "A value to save in survey results when respondents give a positive answer."
    valueTrue: "Vrednost, ki se shrani v rezultate ankete, ko anketiranec poda pozitiven odgovor",
    // "A value to save in survey results when respondents give a negative answer."
    valueFalse: "Vrednost, ki se shrani v rezultate ankete, ko anketiranec poda negativen odgovor",
    // "It's not recommended that you disable this option as it overrides the Preview image and makes it hard for a user to understand whether the files have been uploaded."
    showPreview: "Ni priporočljivo, da onemogočite to možnost, saj preglasi predogled slike in uporabniku oteži razumevanje, ali so bile datoteke naložene",
    // "Triggers a prompt asking to confirm the file deletion."
    needConfirmRemoveFile: "Sproži poziv za potrditev brisanja datoteke",
    // "Enable to rank only selected choices. Users will drag selected items from the choice list to order them within the ranking area."
    selectToRankEnabled: "Omogoči razvrščanje samo izbranih možnosti. Uporabniki bodo povlekli izbrane elemente s seznama možnosti in jih razvrstili v območju za razvrščanje",
    // "Enter a list of choices that will be suggested to the respondent during input."
    dataList: "Vnesite seznam možnosti, ki bodo predlagane anketirancu med vnosom",
    // "The setting only resizes the input fields and doesn't affect the width of the question box."
    inputSize: "Ta nastavitev spremeni samo velikost vnosnih polj in ne vpliva na širino polja z vprašanjem",
    // "Sets consistent width for all item labels. Accepts CSS values (px, %, in, pt, etc.)."
    itemTitleWidth: "Nastavi enotno širino vseh oznak elementov v slikovnih pikah",
    // "Select how to align input value within the field. The default setting \"Auto\" aligns the input value to the right if currency or numeric masking is applied and to the left if not."
    inputTextAlignment: "Izberite način poravnave vnosne vrednosti znotraj polja. Privzeta nastavitev \"Samodejno\" poravna vnosno vrednost desno, če je uporabljeno oblikovanje valute ali številk, in levo, če ni",
    // "Serves as a substitute when the image cannot be displayed on a user's device and for accessibility purposes."
    altText: "Služi kot nadomestek, ko slike ni mogoče prikazati na uporabnikovi napravi, in za dostopnost",
    // "Defines the color of the selected emoji when the Rating icon type is set to \"Smileys\". Choose between: \"Default\" - the selected emoji appears in default survey color; \"Scale\" - the selected emoji inherits color from the rating scale."
    rateColorMode: "Določa barvo izbrane ikone smeška, ko je vrsta ocenjevalne ikone nastavljena na \"Smeški\". Izberite med: \"Privzeto\" - izbrani smeško se prikaže v privzeti barvi ankete; \"Lestvica\" - izbrani smeško podeduje barvo iz ocenjevalne lestvice",
    expression: {
      // "An expression ID that is not visible to respondents."
      name: "ID izraza, ki ni viden anketirancem",
      // "Type an expression subtitle."
      description: "Vnesite podnaslov izraza",
      // "An expression can include basic calculations (`{q1_id} + {q2_id}`), conditions (`{age} > 60`), and functions ('iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, etc.)."
      expression: "Izraz lahko vključuje osnovne izračune ({q1_id} + {q2_id}), pogoje ({age} > 60) in funkcije (iif(), today(), age(), min(), max(), avg(), itd.)"
    },
    // "Select to store the \"Other\" option value as a separate property in survey results."
    storeOthersAsComment: "Izberite, da shranite vrednost možnosti \"Drugo\" kot ločeno lastnost v rezultatih ankete",
    // "Use {0} as a placeholder for the actual value."
    format: "Uporabite {0} kot nadomestni znak za dejansko vrednost",
    // "Refer to the [accept](https://www.w3schools.com/tags/att_input_accept.asp) attribute description for more information."
    acceptedTypes: "Poglejte opis atributa accept za več informacij",
    // "Arranges choice options in a multi-column layout. When set to 0, the options are displayed in a single line. Applies only to columns with \"Cell input type\" set to Radio Button Group or Checkboxes."
    columnColCount: "Razporedi možnosti izbire v več-stolpčni postavitvi. Ko je nastavljen na 0, so možnosti prikazane v eni vrstici. Velja samo za stolpce, kjer je \"Vrsta vnosa celice\" nastavljena na Skupino gumbov za izbiro ali potrditvena polja",
    // "Select the data type that the user's browser can retrieve. This data is sourced either from past values entered by the user or from pre-configured values if any have been saved by the user for autocompletion."
    autocomplete: "Izberite vrsto podatkov, ki jih lahko brskalnik uporabnika pridobi. Ti podatki so pridobljeni bodisi iz prejšnjih vrednosti, ki jih je uporabnik vnesel, bodisi iz prednastavljenih vrednosti, če jih je uporabnik shranil za samodejno dopolnjevanje",
    // "Applies when \"File source type\" is \"Local file\" or when camera is unavailable"
    filePlaceholder: "Velja, ko je \"Vrsta vira datoteke\" nastavljena na \"Lokalna datoteka\" ali ko kamera ni na voljo",
    // "Applies when \"File source type\" is \"Camera\"."
    photoPlaceholder: "Velja, ko je \"Vrsta vira datoteke\" nastavljena na \"Kamera\"",
    // "Applies when \"File source type\" is \"Local file or camera\"."
    fileOrPhotoPlaceholder: "Velja, ko je \"Vrsta vira datoteke\" nastavljena na \"Lokalna datoteka ali kamera\"",
    // "Arranges choice options in a multi-column layout. When set to 0, the options are displayed in a single line."
    colCount: "Razporedi možnosti izbire v več-stolpčni postavitvi. Ko je nastavljen na 0, so možnosti prikazane v eni vrstici",
    masksettings: {
      // "Select if you want to store the question value with an applied mask in survey results."
      saveMaskedValue: "Izberite, če želite shraniti vrednost vprašanja z uporabo maske v rezultatih ankete"
    },
    patternmask: {
      // "The pattern can contain string literals and the following placeholders: `9` - for a digit; `a` - for an upper- or lower-case letter; `#` - for a digit or an upper- or lower-case letter. Use backslash `\\` to escape a character."
      pattern: "Vzorec lahko vsebuje dobesedne nize in naslednje nadomestne znake: 9 - za številko; a - za veliko ali malo črko; # - za številko ali veliko ali malo črko. Za pobeg znaka uporabite poševnico \\."
    },
    datetimemask: {
      // "The pattern can contain separator characters and the following placeholders:<br>`m` - Month number.<br>`mm` - Month number, with leading zero for single-digit values.<br>`d` - Day of the month.<br>`dd` - Day of the month, with leading zero for single-digit values.<br>`yy` - The last two digits of the year.<br>`yyyy` - Four-digit year.<br>`H` - Hours in 24-hour format.<br>`HH` - Hours in 24-hour format, with leading zero for single-digit values.<br>`h` - Hours in 12-hour format.<br>`hh` - Hours in 12-hour format, with leading zero for single-digit values.<br>`MM` - Minutes.<br>`ss` - Seconds.<br>`TT` - 12-hour clock period in upper case (AM/PM).<br>`tt` - 12-hour clock period in lower case (am/pm)."
      pattern: "Vzorec lahko vsebuje ločevalne znake in naslednje nadomestne znake:<br>m - številka meseca.<br>mm - številka meseca, z začetno ničlo za enomestne vrednosti.<br>d - dan v mesecu.<br>dd - dan v mesecu, z začetno ničlo za enomestne vrednosti.<br>yy - zadnji dve števki leta.<br>yyyy - štirimestno leto.<br>H - ure v 24-urnem formatu.<br>HH - ure v 24-urnem formatu, z začetno ničlo za enomestne vrednosti.<br>h - ure v 12-urnem formatu.<br>hh - ure v 12-urnem formatu, z začetno ničlo za enomestne vrednosti.<br>MM - minute.<br>ss - sekunde.<br>TT - obdobje 12-urnega ure v velikih črkah (AM/PM).<br>tt - obdobje 12-urnega ure v malih črkah (am/pm)."
    },
    numericmask: {
      // "A symbol used to separate the fractional part from the integer part of a displayed number."
      decimalSeparator: "Simbol, ki se uporablja za ločevanje decimalnega dela od celostnega dela prikazane številke.",
      // "A symbol used to separate the digits of a large number into groups of three."
      thousandsSeparator: "Simbol, ki se uporablja za ločevanje števk velike številke v skupine po tri.",
      // "Limits how many digits to retain after the decimal point for a displayed number."
      precision: "Omejuje, koliko števk se ohrani po decimalni piki za prikazano številko."
    },
    currencymask: {
      // "One or several symbols to be displayed before the value."
      prefix: "En ali več simbolov, ki bodo prikazani pred vrednostjo.",
      // "One or several symbols to be displayed after the value."
      suffix: "En ali več simbolov, ki bodo prikazani za vrednostjo."
    },
    theme: {
      // "This setting applies only to questions outside of a panel."
      isPanelless: "Ta nastavitev velja samo za vprašanja, ki niso v okviru panela.",
      // "Sets a supplementary color that highlights key survey elements."
      primaryColor: "Nastavi pomožno barvo, ki poudari ključne elemente ankete.",
      // "Adjusts the transparency of panels and question boxes relative to the survey background."
      panelBackgroundTransparency: "Prilagodi prosojnost panelov in polj vprašanj glede na ozadje ankete.",
      // "Adjusts the transparency of input elements relative to the survey background."
      questionBackgroundTransparency: "Prilagodi prosojnost vhodnih elementov glede na ozadje ankete.",
      // "Sets the corner radius for all rectangular elements. Enable the Advanced Mode if you want to set individual corner radius values for input elements or panels and question boxes."
      cornerRadius: "Nastavi radij kota za vse pravokotne elemente. Omogočite napreden način, če želite nastaviti posamezne vrednosti radija kota za vhodne elemente ali panele in polja vprašanj.",
      // "Sets the main background color of the survey."
      "--sjs-general-backcolor-dim": "Nastavi glavno ozadje ankete."
    },
    header: {
      // "The \"Same as container\" option auto-adjusts the header content area width to fit into the HTML element the survey is placed in."
      inheritWidthFrom: "\"Enako kot kontejner\" možnost samodejno prilagodi širino vsebine glave, da se prilega HTML elementu, v katerega je anketa vstavljena.",
      // "The width of the header area that contains the survey title and description, measured in pixels."
      textAreaWidth: "Širina območja glave, ki vsebuje naslov in opis ankete, izmerjena v slikovnih pikah.",
      // "When enabled, the top of the survey overlays the bottom of the header."
      overlapEnabled: "Ko je omogočeno, zgornji del ankete prekrije spodnji del glave.",
      // "When set to 0, the height is calculated automatically to accommodate the header's content."
      mobileHeight: "Ko je nastavljeno na 0, se višina samodejno izračuna, da sprejme vsebino glave."
    },
    // "The \"Same as container\" option auto-adjusts the progress bar area width to fit into the HTML element the survey is placed in."
    progressBarInheritWidthFrom: "\"Enako kot kontejner\" možnost samodejno prilagodi širino območja napredka, da se prilega HTML elementu, v katerega je anketa vstavljena.",
    // "Used when the 'Survey layout' is set to 'Single input field per page'. In this layout, the matrix is split so that each input field appears on a separate page. Use the {rowIndex} placeholder to insert auto numbering, {rowTitle} or {rowName} to reference the row's title or ID, and {row.columnid} to include the value of a specific matrix column."
    singleInputTitleTemplate: "Uporablja se, ko je \"Postavitev ankete\" nastavljena na \"Eno vnosno polje na stran\". V tej postavitvi je matrika razdeljena tako, da je vsako vnosno polje prikazano na ločeni strani. Označbo mesta {rowIndex} uporabite za vstavljanje samodejnega oštevilčenja, {rowTitle} ali {rowName} za sklicevanje na naslov ali ID vrstice in {row.columnid} za vključitev vrednosti določenega stolpca matrike."
  },
  // Properties
  p: {
    title: {
      // "title"
      name: "naslov",
      // "Leave it empty, if it is the same as 'Name'"
      title: "Pustite prazno, če je enako kot 'Ime'"
    },
    // "Allow multiple selection"
    multiSelect: "Dovoli večkratno izbiro",
    // "Show image and video captions"
    showLabel: "Prikaži podnapise za slike in videoposnetke",
    // "Swap the order of Yes and No"
    swapOrder: "Zamenjaj vrstni red Da in Ne",
    // "Value"
    value: "Vrednost",
    // "Tab alignment"
    tabAlign: "Poravnava zavičkov",
    // "File source type"
    sourceType: "Vrsta vira datotek",
    // "Fit to container"
    fitToContainer: "Prilagodi vsebino za vsak prostor",
    // "Set value expression"
    setValueExpression: "Nastavi izraz vrednosti",
    // "Description"
    description: "Opis", // Auto-generated string
    // "Logo fit"
    logoFit: "Prilagajanje logotipa",
    // "Pages"
    pages: "Strani", // Auto-generated string
    // "Questions"
    questions: "Vprašanja", // Auto-generated string
    // "Triggers"
    triggers: "Sprožilci",
    // "Custom variables"
    calculatedValues: "Prilagojene spremenljivke",
    // "Survey id"
    surveyId: "ID ankete", // Auto-generated string
    // "Survey post id"
    surveyPostId: "ID objave ankete", // Auto-generated string
    // "Survey show data saving"
    surveyShowDataSaving: "Prikaz shranjevanja podatkov ankete", // Auto-generated string
    // "Question description alignment"
    questionDescriptionLocation: "Poravnava opisa vprašanja",
    // "Progress bar type"
    progressBarType: "Vrsta napredovanja", // Auto-generated string
    // "Show table of contents (TOC)"
    showTOC: "Prikaz vsebine (TOC)",
    // "TOC alignment"
    tocLocation: "Poravnava vsebine",
    // "Question title pattern"
    questionTitlePattern: "Vzorec naslova vprašanja", // Auto-generated string
    // "Survey width mode"
    widthMode: "Način širine ankete",
    // "Show brand info"
    showBrandInfo: "Prikaz informacij o blagovni znamki", // Auto-generated string
    // "Use display values in dynamic texts"
    useDisplayValuesInDynamicTexts: "Uporabi prikazane vrednosti v dinamičnih besedilih",
    // "Visible if"
    visibleIf: "Vidno, če", // Auto-generated string
    // "Default value expression"
    defaultValueExpression: "Privzeti izraz vrednosti",
    // "Required if"
    requiredIf: "Obvezno, če", // Auto-generated string
    // "Reset value if"
    resetValueIf: "Ponastavi vrednost, če",
    // "Set value if"
    setValueIf: "Nastavi vrednost, če",
    // "Validation rules"
    validators: "Pravila za preverjanje",
    // "Bindings"
    bindings: "Povezave", // Auto-generated string
    // "Render as"
    renderAs: "Upodobi kot", // Auto-generated string
    // "Attach original items"
    attachOriginalItems: "Poveži izvirne predmete", // Auto-generated string
    // "Choices"
    choices: "Izbire",
    // "Choices by url"
    choicesByUrl: "Izbire prek URL-ja", // Auto-generated string
    // "Currency"
    currency: "Valuta", // Auto-generated string
    // "Cell hint"
    cellHint: "Namig za celico", // Auto-generated string
    // "Total maximum fraction digits"
    totalMaximumFractionDigits: "Skupaj največje decimalne številke", // Auto-generated string
    // "Total minimum fraction digits"
    totalMinimumFractionDigits: "Skupaj najmanjše decimalne številke", // Auto-generated string
    // "Columns"
    columns: "Stolpci", // Auto-generated string
    // "Detail elements"
    detailElements: "Podrobnosti elementov", // Auto-generated string
    // "Allow adaptive actions"
    allowAdaptiveActions: "Dovoli prilagodljive akcije", // Auto-generated string
    // "Default row value"
    defaultRowValue: "Privzeta vrednost vrstice", // Auto-generated string
    // [Auto-translated] "Auto-expand new row details"
    detailPanelShowOnAdding: "Samodejna razširitev podrobnosti nove vrstice",
    // "Choices lazy load enabled"
    choicesLazyLoadEnabled: "Omogoči počasno nalaganje izbir", // Auto-generated string
    // "Choices lazy load page size"
    choicesLazyLoadPageSize: "Velikost strani za počasno nalaganje izbir", // Auto-generated string
    // "Input field component"
    inputFieldComponent: "Komponenta vhodnega polja", // Auto-generated string
    // "Item component"
    itemComponent: "Komponenta predmeta", // Auto-generated string
    // "Min"
    min: "Min", // Auto-generated string
    // "Max"
    max: "Max", // Auto-generated string
    // "Min value expression"
    minValueExpression: "Izraz najmanjše vrednosti", // Auto-generated string
    // "Max value expression"
    maxValueExpression: "Izraz največje vrednosti", // Auto-generated string
    // "Step"
    step: "Korak", // Auto-generated string
    // "Items for auto-suggest"
    dataList: "Predmeti za samodejni predlog",
    // "Input field width (in characters)"
    inputSize: "Širina vhodnega polja (v znakih)",
    // "Item label width"
    itemTitleWidth: "Širina oznake predmeta (v px)",
    // "Input value alignment"
    inputTextAlignment: "Poravnava vnosa",
    // "Elements"
    elements: "Elementi", // Auto-generated string
    // "Content"
    content: "Vsebina", // Auto-generated string
    // "Navigation title"
    navigationTitle: "Naslov navigacije", // Auto-generated string
    // "Navigation description"
    navigationDescription: "Opis navigacije", // Auto-generated string
    // "Long tap"
    longTap: "Dolgo tapkanje", // Auto-generated string
    // "Expand input field dynamically"
    autoGrow: "Samodejno širjenje vhodnega polja",
    // "Enable resize handle"
    allowResize: "Omogoči ročico za spreminjanje velikosti",
    // "Accept carriage return"
    acceptCarriageReturn: "Sprejmi prenos vrstice", // Auto-generated string
    // "Display mode"
    displayMode: "Način prikaza",
    // "Rate type"
    rateType: "Vrsta ocene", // Auto-generated string
    // "Label"
    label: "Oznaka", // Auto-generated string
    // "Content mode"
    contentMode: "Način vsebine",
    // "Image and thumbnail fit"
    imageFit: "Prilagoditev slike in sličice",
    // "Alt text"
    altText: "Alternativno besedilo",
    // "Height"
    height: "Višina", // Auto-generated string
    // "Height on smartphones"
    mobileHeight: "Višina na pametnih telefonih",
    // "Pen color"
    penColor: "Barva peresa", // Auto-generated string
    // "Background color"
    backgroundColor: "Barva ozadja",
    // "Template elements"
    templateElements: "Elementi predloge", // Auto-generated string
    // "Operator"
    operator: "Operater", // Auto-generated string
    // "Is variable"
    isVariable: "Je spremenljivka", // Auto-generated string
    // "Run expression"
    runExpression: "Zaženi izraz", // Auto-generated string
    // "Show caption"
    showCaption: "Prikaz besedila", // Auto-generated string
    // "Icon name"
    iconName: "Ime ikone", // Auto-generated string
    // "Icon size"
    iconSize: "Velikost ikone", // Auto-generated string
    // "Precision"
    precision: "Natančnost", // Auto-generated string
    // "Matrix drag handle area"
    matrixDragHandleArea: "Območje za povleci ročaj matrične tabele", // Auto-generated string
    // "Background image"
    backgroundImage: "Slika ozadja",
    // "Background image fit"
    backgroundImageFit: "Prilagoditev slike ozadja", // Auto-generated string
    // "Background image attachment"
    backgroundImageAttachment: "Pripenjanje slike ozadja", // Auto-generated string
    // "Background opacity"
    backgroundOpacity: "Prosojnost ozadja", // Auto-generated string
    // "Allow selective ranking"
    selectToRankEnabled: "Omogoči selektivno razvrščanje",
    // "Ranking area alignment"
    selectToRankAreasLayout: "Poravnava območij za razvrščanje",
    // "Text to show if all options are selected"
    selectToRankEmptyRankedAreaText: "Besedilo, ki se prikaže, če so vse možnosti izbrane",
    // "Placeholder text for the ranking area"
    selectToRankEmptyUnrankedAreaText: "Besedilni prostor za območje razvrščanja",
    // "Allow camera access"
    allowCameraAccess: "Dovoli dostop do kamere", // Auto-generated string
    // "Rating icon color mode"
    scaleColorMode: "Način barve ikone za oceno",
    // "Smileys color scheme"
    rateColorMode: "Barvna shema smeškotov",
    // "Copy display value"
    copyDisplayValue: "Kopiraj prikazano vrednost", // Auto-generated string
    // "Column span"
    effectiveColSpan: "Razpon stolpca",
    // "Progress bar area width"
    progressBarInheritWidthFrom: "Širina območja napredka"
  },
  theme: {
    // "Advanced mode"
    advancedMode: "Napreden način",
    // "Page"
    pageTitle: "Stran",
    // "Question box"
    questionTitle: "Polje vprašanja",
    // "Input element"
    editorPanel: "Vhodni element",
    // "Lines"
    lines: "Vrste",
    // "Default"
    primaryDefaultColor: "Privzeto",
    // "Hover"
    primaryDarkColor: "Ob prehodu",
    // "Selected"
    primaryLightColor: "Izbrano",
    // "Background color"
    backgroundDimColor: "Barva ozadja",
    // "Corner radius"
    cornerRadius: "Radij kota",
    // "Default background"
    backcolor: "Privzeto ozadje",
    // "Hover background"
    hovercolor: "Ozadje ob prehodu",
    // "Border decoration"
    borderDecoration: "Dekoracija robov",
    // "Font color"
    fontColor: "Barva pisave",
    // "Background color"
    backgroundColor: "Barva ozadja",
    // "Default color"
    primaryForecolor: "Privzeta barva",
    // "Disabled color"
    primaryForecolorLight: "Onemogočena barva",
    // "Font"
    font: "Pisava",
    // "Darker"
    borderDefault: "Temnejši rob",
    // "Lighter"
    borderLight: "Svetlejši rob",
    // "Font family"
    fontFamily: "Družina pisav",
    // "Regular"
    fontWeightRegular: "Običajno",
    // "Heavy"
    fontWeightHeavy: "Težka",
    // "Semi-bold"
    fontWeightSemiBold: "Polkrepko",
    // "Bold"
    fontWeightBold: "Krepko",
    // "Color"
    color: "Barva",
    // "Placeholder color"
    placeholderColor: "Barva oznake",
    // "Size"
    size: "Velikost",
    // "Opacity"
    opacity: "Prosojnost",
    // "X"
    boxShadowX: "X",
    // "Y"
    boxShadowY: "Y",
    // "Add Shadow Effect"
    boxShadowAddRule: "Dodaj učinek sence",
    // "Blur"
    boxShadowBlur: "Zameglitev",
    // "Spread"
    boxShadowSpread: "Porazdelitev",
    // "Drop"
    boxShadowDrop: "Padec",
    // "Inner"
    boxShadowInner: "Znotraj",
    names: {
      // "Default"
      default: "Privzeto",
      // "Sharp"
      sharp: "Ostrina",
      // "Borderless"
      borderless: "Brez roba",
      // "Flat"
      flat: "Raven",
      // "Plain"
      plain: "Preprost",
      // "Double Border"
      doubleborder: "Dvojni rob",
      // "Layered"
      layered: "Slojevit",
      // "Solid"
      solid: "Trd",
      // "3D"
      threedimensional: "3D",
      // "Contrast"
      contrast: "Kontrast"
    },
    colors: {
      // "Teal"
      teal: "Turkizna",
      // "Blue"
      blue: "Modra",
      // "Purple"
      purple: "Vijolična",
      // "Orchid"
      orchid: "Orhideja",
      // "Tulip"
      tulip: "Tulipan",
      // "Brown"
      brown: "Rjava",
      // "Green"
      green: "Zelena",
      // "Gray"
      gray: "Siva"
    }
  },
  creatortheme: {
    // "Surface background"
    "--sjs-special-background": "Ozadje površine",
    // "Primary"
    "--sjs-primary-background-500": "Primarno",
    // "Secondary"
    "--sjs-secondary-background-500": "Sekundarno",
    // "Surface"
    surfaceScale: "Površina",
    // "UI elements"
    userInterfaceBaseUnit: "Enote uporabniškega vmesnika",
    // "Font"
    fontScale: "Pisava",
    names: {
      // "Survey Creator 2020"
      sc2020: "Ustvarjalec anket 2020",
      // "Light"
      "default-light": "Svetla",
      // "Dark"
      "default-dark": "Temna",
      // "Contrast"
      "default-contrast": "Kontrast"
    }
  }
};

setupLocale({ localeCode: "sl", strings: slStrings });