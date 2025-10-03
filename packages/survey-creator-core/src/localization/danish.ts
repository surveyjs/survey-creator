import { setupLocale } from "survey-creator-core";

export var danishStrings = {
  // survey templates
  survey: {
    // "Edit"
    edit: "Rediger",
    // [Auto-translated] "Watch and learn how to create surveys"
    externalHelpLink: "Se og lær, hvordan du opretter undersøgelser",
    // [Auto-translated] "https://www.youtube.com/channel/UCH2ru9okIcooNZfpIbyq4qQ?view_as=subscriber"
    externalHelpLinkUrl: "https://www.youtube.com/channel/UCH2ru9okIcooNZfpIbyq4qQ?view_as=subscriber",
    // "Please drop a question here from the Toolbox."
    dropQuestion: "Træk et spørgsmål hertil fra paletten til venstre.",
    // [Auto-translated] "Create a rule to customize the flow of the survey."
    addLogicItem: "Opret en regel for at tilpasse undersøgelsens flow.",
    // "Copy"
    copy: "Kopier",
    // [Auto-translated] "Duplicate"
    duplicate: "Multiplicere",
    // "Add to toolbox"
    addToToolbox: "Tilføj til paletten",
    // "Delete Panel"
    deletePanel: "Slet panel",
    // "Delete Question"
    deleteQuestion: "Slet spørgsmål",
    // "Convert to"
    convertTo: "Konverter til",
    // "Drag element"
    drag: "Træk element"
  },
  // Creator tabs
  tabs: {
    // "Preview"
    preview: "Afprøv undersøgelse",
    // "Themes"
    theme: "Temaer",
    // "Translations"
    translation: "Oversættelse",
    // "Designer"
    designer: "Undersøgelsesdesigner",
    // "JSON Editor"
    json: "JSON Editor",
    // [Auto-translated] "Logic"
    logic: "Logik"
  },
  // Question types
  qt: {
    // "Default"
    default: "Standard",
    // "Checkboxes"
    checkbox: "Afkrydsningsfelt",
    // "Long Text"
    comment: "Kommentar",
    // "Image Picker"
    imagepicker: "Billedvælger",
    // [Auto-translated] "Ranking"
    ranking: "Rangering",
    // [Auto-translated] "Image"
    image: "Billede",
    // "Dropdown"
    dropdown: "Dropdown",
    // [Auto-translated] "Multi-Select Dropdown"
    tagbox: "Rullemenu med flere valg",
    // "File Upload"
    file: "Fil",
    // "HTML"
    html: "Html",
    // "Single-Select Matrix"
    matrix: "Matrice (ét valg)",
    // "Multi-Select Matrix"
    matrixdropdown: "Matrice (flere valg)",
    // "Dynamic Matrix"
    matrixdynamic: "Matrice (dynamiske rækker)",
    // "Multiple Textboxes"
    multipletext: "Flere tekstfelter",
    // "Panel"
    panel: "Panel",
    // "Dynamic Panel"
    paneldynamic: "Panel (dynamiske paneler)",
    // "Radio Button Group"
    radiogroup: "Alternativknap",
    // "Rating Scale"
    rating: "Vurdering",
    // [Auto-translated] "Slider"
    slider: "Skyderen",
    // "Single-Line Input"
    text: "Tekstfelt",
    // "Yes/No (Boolean)"
    boolean: "Sandt/falsk",
    // "Expression (read-only)"
    expression: "Udtryk",
    // [Auto-translated] "Signature"
    signaturepad: "Underskrift",
    // [Auto-translated] "Button Group"
    buttongroup: "Knap gruppe"
  },
  toolboxCategories: {
    // "General"
    general: "Generelt",
    // "Choice Questions"
    choice: "Spørgsmål om valg",
    // "Text Input Questions"
    text: "Spørgsmål om tekstinput",
    // "Containers"
    containers: "Containere",
    // "Matrix Questions"
    matrix: "Matrix spørgsmål",
    // "Misc"
    misc: "Misc"
  },
  // Strings in SurveyJS Creator
  ed: {
    // "Default ({0})"
    defaultLocale: "Standard ({0})",
    // "Survey"
    survey: "Undersøgelse",
    // "Settings"
    settings: "Indstillinger for undersøgelse",
    // [Auto-translated] "Open settings"
    settingsTooltip: "Åbn indstillinger",
    // [Auto-translated] "Survey Settings"
    surveySettings: "Indstillinger for undersøgelse",
    // [Auto-translated] "Survey settings"
    surveySettingsTooltip: "Indstillinger for undersøgelse",
    // [Auto-translated] "Theme Settings"
    themeSettings: "Temaindstillinger",
    // [Auto-translated] "Theme settings"
    themeSettingsTooltip: "Indstillinger for tema",
    // [Auto-translated] "Creator Settings"
    creatorSettingTitle: "Indstillinger for skabere",
    // [Auto-translated] "Show Panel"
    showPanel: "Vis panel",
    // [Auto-translated] "Hide Panel"
    hidePanel: "Skjul panel",
    // [Auto-translated] "Select previous"
    prevSelected: "Vælg forrige",
    // [Auto-translated] "Select next"
    nextSelected: "Vælg næste",
    // [Auto-translated] "Focus previous"
    prevFocus: "Fokus forrige",
    // [Auto-translated] "Focus next"
    nextFocus: "Fokuser næste",
    // [Auto-translated] "Survey"
    surveyTypeName: "Spørgeundersøgelse",
    // [Auto-translated] "Page"
    pageTypeName: "Side",
    // [Auto-translated] "Panel"
    panelTypeName: "Panelet",
    // [Auto-translated] "Question"
    questionTypeName: "Spørgsmål",
    // [Auto-translated] "Column"
    columnTypeName: "Kolonne",
    // "Add New Page"
    addNewPage: "Tilføj ny side",
    // "Scroll to the Right"
    moveRight: "Gå til højre",
    // "Scroll to the Left"
    moveLeft: "Gå til venstre",
    // "Delete Page"
    deletePage: "Slet side",
    // "Edit Page"
    editPage: "Rediger side",
    // "Edit"
    edit: "Rediger",
    // "page"
    newPageName: "side",
    // "question"
    newQuestionName: "spørgsmål",
    // "panel"
    newPanelName: "panel",
    // [Auto-translated] "text"
    newTextItemName: "Tekst",
    // [Auto-translated] "Default"
    defaultV2Theme: "Standard",
    // [Auto-translated] "Modern"
    modernTheme: "Moderne",
    // [Auto-translated] "Default (legacy)"
    defaultTheme: "Standard (ældre)",
    // "Preview Survey Again"
    testSurveyAgain: "Afprøv undersøgelse igen",
    // "Survey width: "
    testSurveyWidth: "Bredde af undersøgelse: ",
    // [Auto-translated] "You had to navigate to"
    navigateToMsg: "Du var nødt til at navigere til",
    // "Save Survey"
    saveSurvey: "Gem undersøgelse",
    // [Auto-translated] "Save Survey"
    saveSurveyTooltip: "Gem undersøgelse",
    // [Auto-translated] "Save Theme"
    saveTheme: "Gem tema",
    // [Auto-translated] "Save Theme"
    saveThemeTooltip: "Gem tema",
    // [Auto-translated] "Hide errors"
    jsonHideErrors: "Skjul fejl",
    // [Auto-translated] "Show errors"
    jsonShowErrors: "Vis fejl",
    // "Undo"
    undo: "Fortryd",
    // "Redo"
    redo: "Annuller fortryd",
    // [Auto-translated] "Undo last change"
    undoTooltip: "Fortryd seneste ændring",
    // [Auto-translated] "Redo the change"
    redoTooltip: "Fortryd ændringen",
    // [Auto-translated] "Expand"
    expandTooltip: "Ekspandere",
    // [Auto-translated] "Collapse"
    collapseTooltip: "Sammenbrud",
    // "Expand All"
    expandAllTooltip: "Udvid alle",
    // "Collapse All"
    collapseAllTooltip: "Skjul alle",
    // [Auto-translated] "Zoom In"
    zoomInTooltip: "Zoom ind",
    // [Auto-translated] "Zoom to 100%"
    zoom100Tooltip: "Zoom til 100 %",
    // [Auto-translated] "Zoom Out"
    zoomOutTooltip: "Zoom ud",
    // [Auto-translated] "Lock expand/collapse state for questions"
    lockQuestionsTooltip: "Lås udvid/skjul tilstand for spørgsmål",
    // [Auto-translated] "Show more"
    showMoreChoices: "Vis mere",
    // [Auto-translated] "Show less"
    showLessChoices: "Vis mindre",
    // [Auto-translated] "Copy"
    copy: "Eksemplar",
    // [Auto-translated] "Cut"
    cut: "Skære",
    // [Auto-translated] "Paste"
    paste: "Indsætte",
    // [Auto-translated] "Copy selection to clipboard"
    copyTooltip: "Kopiere markering til Udklipsholder",
    // [Auto-translated] "Cut selection to clipboard"
    cutTooltip: "Klip markering til udklipsholder",
    // [Auto-translated] "Paste from clipboard"
    pasteTooltip: "Indsæt fra udklipsholder",
    // "Options"
    options: "Indstillinger",
    // "Generate Valid JSON"
    generateValidJSON: "Generer gylding JSON",
    // "Generate Readable JSON"
    generateReadableJSON: "Generer læsbar JSON",
    // "Toolbox"
    toolbox: "Værktøjskasse",
    // [Auto-translated] "Properties"
    "property-grid": "Egenskaber",
    // [Auto-translated] "Search"
    toolboxSearch: "Søge",
    // [Auto-translated] "Type to search..."
    toolboxFilteredTextPlaceholder: "Skriv for at søge...",
    // [Auto-translated] "No results found"
    toolboxNoResultsFound: "Ingen resultater fundet",
    // [Auto-translated] "Type to search..."
    propertyGridFilteredTextPlaceholder: "Skriv for at søge...",
    // [Auto-translated] "No results found"
    propertyGridNoResultsFound: "Ingen resultater fundet",
    // [Auto-translated] "Start configuring your form"
    propertyGridPlaceholderTitle: "Begynd at konfigurere formularen",
    // [Auto-translated] "Click any category icon to explore survey settings. Additional settings will become available once you add a survey element to the design surface."
    propertyGridPlaceholderDescription: "Klik på et kategoriikon for at udforske undersøgelsesindstillinger. Yderligere indstillinger bliver tilgængelige, når du føjer et undersøgelseselement til designoverfladen.",
    // "Please correct JSON."
    correctJSON: "Ret venligst JSON.",
    // "Survey Results "
    surveyResults: "Undersøgelsesresultat: ",
    // [Auto-translated] "As Table"
    surveyResultsTable: "Som tabel",
    // [Auto-translated] "As JSON"
    surveyResultsJson: "Som JSON",
    // [Auto-translated] "Question Title"
    resultsTitle: "Spørgsmålets titel",
    // [Auto-translated] "Question Name"
    resultsName: "Spørgsmålets navn",
    // [Auto-translated] "Answer Value"
    resultsValue: "Svarværdi",
    // [Auto-translated] "Display Value"
    resultsDisplayValue: "Visningsværdi",
    // "Modified"
    modified: "Ændret",
    // "Saving"
    saving: "Gemmer",
    // "Saved"
    saved: "Gemt",
    // [Auto-translated] "Error"
    propertyEditorError: "Fejl",
    // "Error! Editor content is not saved."
    saveError: "Fejl! Undersøgelsen er ikke blevet gemt.",
    // [Auto-translated] "Language Settings"
    translationPropertyGridTitle: "Sprogindstillinger",
    // [Auto-translated] "Theme Settings"
    themePropertyGridTitle: "Temaindstillinger",
    // [Auto-translated] "Add Language"
    addLanguageTooltip: "Tilføj sprog",
    // [Auto-translated] "Languages"
    translationLanguages: "Sprog",
    // [Auto-translated] "Are you certain you wish to delete all strings for this language?"
    translationDeleteLanguage: "Er du sikker på, at du ønsker at slette alle strenge for dette sprog?",
    // "Select language to translate"
    translationAddLanguage: "Vælg et sprog at oversætte",
    // "All Strings"
    translationShowAllStrings: "Vis alle tekststrenge",
    // [Auto-translated] "Used Strings Only"
    translationShowUsedStringsOnly: "Kun brugte strenge",
    // "All Pages"
    translationShowAllPages: "Vis alle sider",
    // "No strings to translate. Please change the filter."
    translationNoStrings: "Ingen tekststrenge at oversætte. Ret filteret.",
    // "Export to CSV"
    translationExportToSCVButton: "Eksporter til CSV",
    // "Import from CSV"
    translationImportFromSCVButton: "Importer fra CSV",
    // [Auto-translated] "Auto-translate All"
    translateUsigAI: "Oversæt automatisk alle",
    // [Auto-translated] "Translate from: "
    translateUsigAIFrom: "Oversæt fra: ",
    // [Auto-translated] "Untranslated strings"
    translationDialogTitle: "Uoversatte strenge",
    // "Merge {0} with default locale"
    translationMergeLocaleWithDefault: "Flet {0} med standardsprog",
    // [Auto-translated] "Translation..."
    translationPlaceHolder: "Oversættelse...",
    // [Auto-translated] "Source: "
    translationSource: "Kilde: ",
    // [Auto-translated] "Target: "
    translationTarget: "Mål: ",
    // [Auto-translated] "YouTube links are not supported."
    translationYouTubeNotSupported: "YouTube-links understøttes ikke.",
    // [Auto-translated] "Export"
    themeExportButton: "Eksport",
    // [Auto-translated] "Import"
    themeImportButton: "Import",
    // [Auto-translated] "Export"
    surveyJsonExportButton: "Eksport",
    // [Auto-translated] "Import"
    surveyJsonImportButton: "Import",
    // [Auto-translated] "Copy to clipboard"
    surveyJsonCopyButton: "Kopier til udklipsholder",
    // [Auto-translated] "Reset theme settings to default"
    themeResetButton: "Nulstil temaindstillinger til standard",
    // [Auto-translated] "Do you really want to reset the theme? All your customizations will be lost."
    themeResetConfirmation: "Vil du virkelig nulstille temaet? Alle dine tilpasninger går tabt.",
    // [Auto-translated] "Yes, reset the theme"
    themeResetConfirmationOk: "Ja, nulstil temaet",
    // [Auto-translated] "Bold"
    bold: "Modig",
    // [Auto-translated] "Italic"
    italic: "Kursiv",
    // [Auto-translated] "Underline"
    underline: "Understrege",
    // [Auto-translated] "Add Question"
    addNewQuestion: "Tilføj spørgsmål",
    // [Auto-translated] "Select page..."
    selectPage: "Vælg side...",
    // [Auto-translated] "Choices are copied from"
    carryForwardChoicesCopied: "Valg kopieres fra",
    // [Auto-translated] "Choices are loaded from a web service."
    choicesLoadedFromWebText: "Valg indlæses fra en webtjeneste.",
    // [Auto-translated] "Go to settings"
    choicesLoadedFromWebLinkText: "Gå til indstillinger",
    // [Auto-translated] "Preview of loaded choice options"
    choicesLoadedFromWebPreviewTitle: "Forhåndsvisning af indlæste valgmuligheder",
    // [Auto-translated] "HTML content will be here."
    htmlPlaceHolder: "HTML-indhold vil være her.",
    // [Auto-translated] "Drop a question from the toolbox here."
    panelPlaceHolder: "Smid et spørgsmål fra værktøjskassen her.",
    // [Auto-translated] "The survey is empty. Drag an element from the toolbox or click the button below."
    surveyPlaceHolder: "Undersøgelsen er tom. Træk et element fra værktøjskassen, eller klik på knappen nedenfor.",
    // [Auto-translated] "The page is empty. Drag an element from the toolbox or click the button below."
    pagePlaceHolder: "Siden er tom. Træk et element fra værktøjskassen, eller klik på knappen nedenfor.",
    // [Auto-translated] "Drag and drop an image here or click the button below and choose an image to upload"
    imagePlaceHolder: "Træk og slip et billede her, eller klik på knappen nedenfor, og vælg et billede, der skal uploades",
    // "Click the \"Add Question\" button below to start creating your form."
    surveyPlaceHolderMobile: "Klik på knappen \"Tilføj spørgsmål\" nedenfor for at begynde at oprette din formular.",
    // [Auto-translated] "Your form is empty"
    surveyPlaceholderTitle: "Din formular er tom",
    // [Auto-translated] "Your form is empty"
    surveyPlaceholderTitleMobile: "Din formular er tom",
    // [Auto-translated] "Drag an element from the toolbox or click the button below."
    surveyPlaceholderDescription: "Træk et element fra værktøjskassen, eller klik på knappen nedenfor.",
    // [Auto-translated] "Drag an element from the toolbox or click the button below."
    surveyPlaceholderDescriptionMobile: "Træk et element fra værktøjskassen, eller klik på knappen nedenfor.",
    // [Auto-translated] "No preview"
    previewPlaceholderTitle: "Ingen forhåndsvisning",
    // [Auto-translated] "No preview"
    previewPlaceholderTitleMobile: "Ingen forhåndsvisning",
    // [Auto-translated] "The survey doesn't contain any visible elements."
    previewPlaceholderDescription: "Undersøgelsen indeholder ingen synlige elementer.",
    // [Auto-translated] "The survey doesn't contain any visible elements."
    previewPlaceholderDescriptionMobile: "Undersøgelsen indeholder ingen synlige elementer.",
    // [Auto-translated] "No strings to translate"
    translationsPlaceholderTitle: "Ingen forpligtelser at oversætte",
    // [Auto-translated] "No strings to translate"
    translationsPlaceholderTitleMobile: "Ingen forpligtelser at oversætte",
    // [Auto-translated] "Add elements to your form or change the strings filter in the toolbar."
    translationsPlaceholderDescription: "Føj elementer til formularen, eller skift filteret for strenge på værktøjslinjen.",
    // [Auto-translated] "Add elements to your form or change the strings filter in the toolbar."
    translationsPlaceholderDescriptionMobile: "Føj elementer til formularen, eller skift filteret for strenge på værktøjslinjen.",
    // "Click the \"Add Question\" button below to add a new element to the page."
    pagePlaceHolderMobile: "Klik på knappen \"Tilføj spørgsmål\" nedenfor for at tilføje et nyt element til siden.",
    // "Click the \"Add Question\" button below to add a new element to the panel."
    panelPlaceHolderMobile: "Klik på knappen \"Tilføj spørgsmål\" nedenfor for at tilføje et nyt element til panelet.",
    // [Auto-translated] "Click the button below and choose an image to upload"
    imagePlaceHolderMobile: "Klik på knappen nedenfor, og vælg et billede, der skal uploades",
    // [Auto-translated] "Choose Image"
    imageChooseImage: "Vælg billede",
    // [Auto-translated] "Add {0}"
    addNewTypeQuestion: "Tilføj {0}", // {0} is localizable question type
    // [Auto-translated] "[LOGO]"
    chooseLogoPlaceholder: "[LOGO]",
    // [Auto-translated] "Item "
    choices_Item: "Vare ",
    // [Auto-translated] "Select a file"
    selectFile: "Vælg en fil",
    // [Auto-translated] "Remove the file"
    removeFile: "Fjern filen",
    lg: {
      // [Auto-translated] "Add New Rule"
      addNewItem: "Tilføj ny regel",
      // [Auto-translated] "Create a rule to customize the flow of the survey."
      empty_tab: "Opret en regel for at tilpasse undersøgelsens flow.",
      // [Auto-translated] "No logical rules"
      logicPlaceholderTitle: "Ingen logiske regler",
      // [Auto-translated] "No logical rules"
      logicPlaceholderTitleMobile: "Ingen logiske regler",
      // [Auto-translated] "Create a rule to customize the flow of the survey."
      logicPlaceholderDescription: "Opret en regel for at tilpasse undersøgelsens flow.",
      // [Auto-translated] "Create a rule to customize the flow of the survey."
      logicPlaceholderDescriptionMobile: "Opret en regel for at tilpasse undersøgelsens flow.",
      // [Auto-translated] "Show/hide page"
      page_visibilityName: "Vis/skjul side",
      // [Auto-translated] "Enable/disable page"
      page_enableName: "Aktiver/deaktiver side",
      // [Auto-translated] "Make page required"
      page_requireName: "Gør siden påkrævet",
      // [Auto-translated] "Show/hide panel"
      panel_visibilityName: "Vis/skjul panel",
      // [Auto-translated] "Enable/disable panel"
      panel_enableName: "Aktiver/deaktiver panel",
      // [Auto-translated] "Make panel required"
      panel_requireName: "Gør panelet påkrævet",
      // [Auto-translated] "Show/hide question"
      question_visibilityName: "Vis/skjul spørgsmål",
      // [Auto-translated] "Enable/disable question"
      question_enableName: "Aktiver/deaktiver spørgsmål",
      // [Auto-translated] "Make question required"
      question_requireName: "Gør spørgsmål påkrævet",
      // [Auto-translated] "Reset question value"
      question_resetValueName: "Nulstil spørgsmålsværdi",
      // [Auto-translated] "Set question value"
      question_setValueName: "Angiv spørgsmålsværdi",
      // [Auto-translated] "Show/hide column"
      column_visibilityName: "Vis/skjul kolonne",
      // [Auto-translated] "Enable/disable column"
      column_enableName: "Aktiver/deaktiver kolonne",
      // [Auto-translated] "Make column required"
      column_requireName: "Gør kolonne påkrævet",
      // [Auto-translated] "Reset column value"
      column_resetValueName: "Nulstil kolonneværdi",
      // [Auto-translated] "Set column value"
      column_setValueName: "Angiv kolonneværdi",
      // [Auto-translated] "Complete survey"
      trigger_completeName: "Komplet undersøgelse",
      // [Auto-translated] "Set answer"
      trigger_setvalueName: "Indstil svar",
      // [Auto-translated] "Copy answer"
      trigger_copyvalueName: "Kopier svar",
      // [Auto-translated] "Skip to question"
      trigger_skipName: "Spring til spørgsmål",
      // [Auto-translated] "Run expression"
      trigger_runExpressionName: "Kør udtryk",
      // "Set \"Thank You\" page markup"
      completedHtmlOnConditionName: "Indstil sidemarkering af \"Undersøgelse fuldført\"",
      // [Auto-translated] "Make the page visible when the logical expression evaluates to true. Otherwise, keep the page invisible."
      page_visibilityDescription: "Gør siden synlig, når det logiske udtryk evalueres til sand. Ellers skal du holde siden usynlig.",
      // [Auto-translated] "Make the page visible when the logical expression evaluates to true. Otherwise, keep the panel invisible."
      panel_visibilityDescription: "Gør siden synlig, når det logiske udtryk evalueres til sand. Ellers skal du holde panelet usynligt.",
      // [Auto-translated] "Make the panel and all elements inside it enabled when the logical expression evaluates to true. Otherwise, keep them disabled."
      panel_enableDescription: "Gør panelet og alle elementer i det aktiveret, når det logiske udtryk evalueres til sand. Ellers skal du holde dem deaktiveret.",
      // [Auto-translated] "Make the question visible when the logical expression evaluates to true. Otherwise, keep the question invisible."
      question_visibilityDescription: "Gør spørgsmålet synligt, når det logiske udtryk evalueres til sandt. Ellers skal du holde spørgsmålet usynligt.",
      // [Auto-translated] "Make the question enabled when the logical expression evaluates to true. Otherwise, keep the question disabled."
      question_enableDescription: "Gør spørgsmålet aktiveret, når det logiske udtryk evalueres til sandt. Ellers skal du holde spørgsmålet deaktiveret.",
      // [Auto-translated] "Question becomes required when the logical expression evaluates to true."
      question_requireDescription: "Spørgsmålet bliver påkrævet, når det logiske udtryk evalueres til sandt.",
      // "When the logical expression evaluates to true, the survey ends, and the respondent sees the \"Thank you\" page."
      trigger_completeDescription: "Når det logiske udtryk returnerer sand, afsluttes undersøgelsen, og en slutbruger ser siden \"Tak\".",
      // [Auto-translated] "When question values used in the logical expression are changed, and the expression evaluates to true, the specified value is assigned to the selected question."
      trigger_setvalueDescription: "Når spørgsmålsværdier, der bruges i det logiske udtryk, ændres, og udtrykket evalueres til sand, tildeles den angivne værdi til det valgte spørgsmål.",
      // [Auto-translated] "When question values used in the logical expression are changed, and the expression evaluates to true, the value of the selected question is copied to another question."
      trigger_copyvalueDescription: "Når spørgsmålsværdier, der bruges i det logiske udtryk, ændres, og udtrykket evalueres til sand, kopieres værdien af det valgte spørgsmål til et andet spørgsmål.",
      // [Auto-translated] "When the logical expression evaluates to true, the survey focuses/jumps to the selected question."
      trigger_skipDescription: "Når det logiske udtryk evalueres til sand, fokuserer/springer undersøgelsen til det valgte spørgsmål.",
      // [Auto-translated] "When the logical expression evaluates to true, the survey evaluates another expression. Optionally, the result of the latter expression can be assigned as a value to the selected question"
      trigger_runExpressionDescription: "Når det logiske udtryk evalueres til sand, evaluerer undersøgelsen et andet udtryk. Resultatet af sidstnævnte udtryk kan eventuelt tildeles som en værdi til det valgte spørgsmål",
      // [Auto-translated] "If the logical expression evaluates to true, the \"Thank You\" page displays the specified content."
      completedHtmlOnConditionDescription: "Hvis det logiske udtryk evalueres til sand, viser siden \"Tak\" det angivne indhold.",
      // [Auto-translated] "When expression: '{0}' returns true"
      itemExpressionText: "Når udtrykket: '{0}' returnerer sandt", // {0} - the expression
      // [Auto-translated] "New rule"
      itemEmptyExpressionText: "Ny regel",
      // [Auto-translated] "make page {0} visible"
      page_visibilityText: "Gør siden {0} synlig", // {0} page name
      // [Auto-translated] "make panel {0} visible"
      panel_visibilityText: "Gør panelet {0} synligt", // {0} panel name
      // [Auto-translated] "make panel {0} enable"
      panel_enableText: "Få panelet {0} aktivere", // {0} panel name
      // [Auto-translated] "make question {0} visible"
      question_visibilityText: "Gør spørgsmål {0} synlige", // {0} question name
      // [Auto-translated] "make question {0} enable"
      question_enableText: "Foretag spørgsmål{0} aktiver", // {0} question name
      // [Auto-translated] "make question {0} required"
      question_requireText: "Gør spørgsmål {0} påkrævet", // {0} question name
      // [Auto-translated] "reset value for question: {0}"
      question_resetValueText: "Nulstil værdi for spørgsmål: {0}", // {0} question name.
      // [Auto-translated] "assign value: {1} to question: {0}"
      question_setValueText: "Tildel værdi: {1} til spørgsmål: {0}", // {0} question name and {1} setValueExpression
      // [Auto-translated] "make column {0} of question {1} visible"
      column_visibilityText: "Gør kolonne {0} af spørgsmål {1} synlig", // {0} column name, {1} question name
      // [Auto-translated] "make column {0} of question {1} enable"
      column_enableText: "Få kolonne {0} af spørgsmål {1} aktivere", // {0} column name, {1} question name
      // [Auto-translated] "make column {0} of question {1} required"
      column_requireText: "Gøre kolonne {0} af spørgsmål {1} påkrævet", // {0} column name, {1} question name
      // [Auto-translated] "reset cell value for column: {0}"
      column_resetValueText: "Nulstil celleværdi for kolonne: {0}", // {0} column name
      // [Auto-translated] "assign cell value: {1} to column: {0}"
      column_setValueText: "Tildel celleværdi: {1} til kolonne: {0}", // {0} column name and {1} setValueExpression
      // [Auto-translated] "An expression whose result will be assigned to the target question."
      setValueExpressionPlaceholder: "Et udtryk, hvis resultat tildeles målspørgsmålet.",
      // [Auto-translated] "survey becomes completed"
      trigger_completeText: "Undersøgelsen bliver afsluttet",
      // [Auto-translated] "set into question: {0} value {1}"
      trigger_setvalueText: "Sæt spørgsmålstegn ved: {0} værdi {1}", // {0} question name, {1} setValue
      // [Auto-translated] "clear question value: {0}"
      trigger_setvalueEmptyText: "Klar spørgsmålsværdi: {0}", // {0} question name
      // [Auto-translated] "copy into question: {0} value from question {1}"
      trigger_copyvalueText: "Kopi i spørgsmål: {0} værdi fra spørgsmål {1}", // {0} and {1} question names
      // [Auto-translated] "survey skip to the question {0}"
      trigger_skipText: "Undersøgelse Spring til spørgsmålet {0}", // {0} question name
      // [Auto-translated] "run expression: '{0}'"
      trigger_runExpressionText1: "Kør udtryk: '{0}'", // {0} the expression
      // [Auto-translated] " and set its result into question: {0}"
      trigger_runExpressionText2: " og sætte spørgsmålstegn ved resultatet: {0}", // {0} question name
      // "show custom text for the \"Thank You\" page."
      completedHtmlOnConditionText: "Vis brugerdefineret tekst til siden \"Tak\".",
      // [Auto-translated] "All Questions"
      showAllQuestions: "Alle spørgsmål",
      // [Auto-translated] "All Action Types"
      showAllActionTypes: "Alle handlingstyper",
      // [Auto-translated] "Condition(s)"
      conditions: "Tilstand(e)",
      // [Auto-translated] "Action(s)"
      actions: "Foranstaltning(er)",
      // [Auto-translated] "Define condition(s)"
      expressionEditorTitle: "Definer betingelse(r)",
      // [Auto-translated] "Define action(s)"
      actionsEditorTitle: "Definer handling(er)",
      // [Auto-translated] "Delete Action"
      deleteAction: "Slet handling",
      // [Auto-translated] "Add Action"
      addNewAction: "Tilføj handling",
      // [Auto-translated] "Select action..."
      selectedActionCaption: "Vælg handling...",
      // [Auto-translated] "The logic expression is empty or invalid. Please correct it."
      expressionInvalid: "Det logiske udtryk er tomt eller ugyldigt. Vær venlig at rette det.",
      // [Auto-translated] "Please add at least one action."
      noActionError: "Tilføj mindst én handling.",
      // [Auto-translated] "Please fix issues in your action(s)."
      actionInvalid: "Løs venligst problemer i din(e) handling(er).",
      // [Auto-translated] "Logical rules are incomplete"
      uncompletedRule_title: "Logiske regler er ufuldstændige",
      // [Auto-translated] "You have not completed some of the logical rules. If you leave the tab now, the changes will be lost. Do you still want to leave the tab without completing the changes?"
      uncompletedRule_text: "Du har ikke gennemført nogle af de logiske regler. Hvis du forlader fanen nu, vil ændringerne gå tabt. Vil du stadig forlade fanen uden at gennemføre ændringerne?",
      // [Auto-translated] "Yes"
      uncompletedRule_apply: "Ja",
      // [Auto-translated] "No, I want to complete the rules"
      uncompletedRule_cancel: "Nej, jeg vil gerne udfylde reglerne"
    }
  },
  // Property Editors
  pe: {
    panel: {
      // [Auto-translated] "Panel name"
      name: "Panelets navn",
      // [Auto-translated] "Panel title"
      title: "Panelets titel",
      // [Auto-translated] "Panel description"
      description: "Beskrivelse af panelet",
      // [Auto-translated] "Make the panel visible if"
      visibleIf: "Gør panelet synligt, hvis",
      // [Auto-translated] "Make the panel required if"
      requiredIf: "Gør panelet påkrævet, hvis",
      // [Auto-translated] "Question order within the panel"
      questionOrder: "Spørgsmålsrækkefølge i panelet",
      // [Auto-translated] "Move the panel to page"
      page: "Flyt panelet til side",
      // [Auto-translated] "Display the panel on a new line"
      startWithNewLine: "Få vist panelet på en ny linje",
      // [Auto-translated] "Panel collapse state"
      state: "Tilstand for panelskjul",
      // [Auto-translated] "Inline panel width"
      width: "Indbygget panelbredde",
      // [Auto-translated] "Minimum panel width"
      minWidth: "Mindste panelbredde",
      // [Auto-translated] "Maximum panel width"
      maxWidth: "Maksimal panelbredde",
      // [Auto-translated] "Number this panel"
      showNumber: "Nummerer dette panel"
    },
    panellayoutcolumn: {
      // [Auto-translated] "Effective width, %"
      effectiveWidth: "Effektiv bredde, %",
      // [Auto-translated] "Question title width, px"
      questionTitleWidth: "Spørgsmålets titelbredde, px"
    },
    paneldynamic: {
      // [Auto-translated] "Panel name"
      name: "Panelets navn",
      // [Auto-translated] "Panel title"
      title: "Panelets titel",
      // [Auto-translated] "Panel description"
      description: "Beskrivelse af panelet",
      // [Auto-translated] "Entry display mode"
      displayMode: "Indtastningsvisningstilstand",
      // [Auto-translated] "Make the panel visible if"
      visibleIf: "Gør panelet synligt, hvis",
      // [Auto-translated] "Make the panel required if"
      requiredIf: "Gør panelet påkrævet, hvis",
      // [Auto-translated] "Move the panel to page"
      page: "Flyt panelet til siden",
      // [Auto-translated] "Display the panel on a new line"
      startWithNewLine: "Få vist panelet på en ny linje",
      // [Auto-translated] "Panel collapse state"
      state: "Panelets sammenbrudstilstand",
      // [Auto-translated] "Inline panel width"
      width: "Indlejret panelbredde",
      // [Auto-translated] "Minimum panel width"
      minWidth: "Mindste panelbredde",
      // [Auto-translated] "Maximum panel width"
      maxWidth: "Maksimal panelbredde",
      // [Auto-translated] "Confirm entry removal"
      confirmDelete: "Bekræft fjernelse af post",
      // [Auto-translated] "Entry description pattern"
      templateDescription: "Indgangsbeskrivelse mønster",
      // [Auto-translated] "Entry title pattern"
      templateTitle: "Mønster for indgangstitel",
      // [Auto-translated] "Empty panel text"
      noEntriesText: "Tom paneltekst",
      // [Auto-translated] "Tab title pattern"
      templateTabTitle: "Fanetitel mønster",
      // [Auto-translated] "Tab title placeholder"
      tabTitlePlaceholder: "Pladsholder til fanetitel",
      // [Auto-translated] "Make an individual entry visible if"
      templateVisibleIf: "Gør en individuel post synlig, hvis",
      // [Auto-translated] "Number the panel"
      showNumber: "Nummerer panelet",
      // [Auto-translated] "Panel title alignment"
      titleLocation: "Justering af paneltitel",
      // [Auto-translated] "Panel description alignment"
      descriptionLocation: "Justering af panelbeskrivelse",
      // [Auto-translated] "Question title alignment"
      templateQuestionTitleLocation: "Tilpasning af spørgsm��lets titel",
      // [Auto-translated] "Question title width"
      templateQuestionTitleWidth: "Spørgsmålets titelbredde",
      // [Auto-translated] "Error message alignment"
      templateErrorLocation: "Justering af fejlmeddelelse",
      // [Auto-translated] "New entry location"
      newPanelPosition: "Ny indgangsplacering",
      // [Auto-translated] "Show the progress bar"
      showRangeInProgress: "Vis statuslinjen",
      // [Auto-translated] "Prevent duplicate responses in the following question"
      keyName: "Undgå dublerede svar i følgende spørgsmål"
    },
    question: {
      // [Auto-translated] "Question name"
      name: "Navn på spørgsmål",
      // [Auto-translated] "Question title"
      title: "Spørgsmålets titel",
      // [Auto-translated] "Question description"
      description: "Beskrivelse af spørgsmål",
      // [Auto-translated] "Show the title and description"
      showTitle: "Vis titel og beskrivelse",
      // [Auto-translated] "Make the question visible if"
      visibleIf: "Gør spørgsmålet synligt, hvis",
      // [Auto-translated] "Make the question required if"
      requiredIf: "Foretag spørgsmålet påkrævet, hvis",
      // [Auto-translated] "Move the question to page"
      page: "Flyt spørgsmålet til side",
      // [Auto-translated] "Question box collapse state"
      state: "Tilstand for sammenbrud af spørgsmålsfelt",
      // [Auto-translated] "Number this question"
      showNumber: "Nummerer dette spørgsmål",
      // [Auto-translated] "Question title alignment"
      titleLocation: "Tilpasning af spørgsmålets titel",
      // [Auto-translated] "Question description alignment"
      descriptionLocation: "Tilpasning af spørgsmålsbeskrivelse",
      // [Auto-translated] "Error message alignment"
      errorLocation: "Justering af fejlmeddelelse",
      // [Auto-translated] "Increase the inner indent"
      indent: "Forøg den indre indrykning",
      // [Auto-translated] "Inline question width"
      width: "Indbygget spørgsmålsbredde",
      // [Auto-translated] "Minimum question width"
      minWidth: "Mindste spørgsmålsbredde",
      // [Auto-translated] "Maximum question width"
      maxWidth: "Maksimal spørgsmålsbredde",
      // [Auto-translated] "Update input field value"
      textUpdateMode: "Opdater inputfeltværdi"
    },
    signaturepad: {
      // [Auto-translated] "Signature area width"
      signatureWidth: "Bredde på signaturområde",
      // [Auto-translated] "Signature area height"
      signatureHeight: "Signaturområdets højde",
      // [Auto-translated] "Auto-scale the signature area"
      signatureAutoScaleEnabled: "Skaler signaturområdet automatisk",
      // [Auto-translated] "Show a placeholder within signature area"
      showPlaceholder: "Vise en pladsholder i signaturområdet",
      // [Auto-translated] "Placeholder text"
      placeholder: "Pladsholdertekst",
      // [Auto-translated] "Placeholder text in read-only or preview mode"
      placeholderReadOnly: "Pladsholdertekst i skrivebeskyttet tilstand eller eksempeltilstand",
      // [Auto-translated] "Show the Clear button within signature area"
      allowClear: "Vis knappen Ryd i signaturområdet",
      // [Auto-translated] "Minimum stroke width"
      penMinWidth: "Mindste stregbredde",
      // [Auto-translated] "Maximum stroke width"
      penMaxWidth: "Maksimal stregbredde",
      // [Auto-translated] "Stroke color"
      penColor: "Stregfarve"
    },
    comment: {
      // [Auto-translated] "Input field height (in lines)"
      rows: "Inputfelthøjde (i linjer)"
    },
    // "Question numbering"
    showQuestionNumbers: "Vis spørgsmålsnumre",
    // "Question indexing type"
    questionStartIndex: "Spørgsmål startindex (1, 2 eller 'A', 'a')",
    // [Auto-translated] "Expression"
    expression: {
      // [Auto-translated] "Expression name"
      name: "Navn på udtryk",
      // [Auto-translated] "Expression title"
      title: "Udtryk titel",
      // [Auto-translated] "Expression description"
      description: "Beskrivelse af udtryk",
      // [Auto-translated] "Expression"
      expression: "Udtryk"
    },
    trigger: {
      // [Auto-translated] "Expression"
      expression: "Udtryk"
    },
    calculatedvalue: {
      // [Auto-translated] "Expression"
      expression: "Udtryk"
    },
    // survey templates
    survey: {
      // [Auto-translated] "Survey title"
      title: "Undersøgelsens titel",
      // [Auto-translated] "Survey description"
      description: "Beskrivelse af undersøgelsen",
      // [Auto-translated] "Make the survey read-only"
      readOnly: "Gør undersøgelsen skrivebeskyttet"
    },
    page: {
      // [Auto-translated] "Page name"
      name: "Sidenavn",
      // [Auto-translated] "Page title"
      title: "Sidens titel",
      // [Auto-translated] "Page description"
      description: "Sidebeskrivelse",
      // [Auto-translated] "Make the page visible if"
      visibleIf: "Gør siden synlig, hvis",
      // [Auto-translated] "Make the page required if"
      requiredIf: "Gør siden påkrævet, hvis",
      // [Auto-translated] "Time limit to complete the page"
      timeLimit: "Frist for at færdiggøre siden",
      // [Auto-translated] "Question order on the page"
      questionOrder: "Spørgsmålsrækkefølge på siden"
    },
    matrixdropdowncolumn: {
      // [Auto-translated] "Column name"
      name: "Kolonnens navn",
      // [Auto-translated] "Column title"
      title: "Kolonnens titel",
      // [Auto-translated] "Prevent duplicate responses"
      isUnique: "Undgå dublerede svar",
      // [Auto-translated] "Column width"
      width: "Kolonnebredde",
      // [Auto-translated] "Minimum column width"
      minWidth: "Mindste kolonnebredde",
      // [Auto-translated] "Input field height (in lines)"
      rows: "Inputfelthøjde (i linjer)",
      // [Auto-translated] "Make the column visible if"
      visibleIf: "Gør kolonnen synlig, hvis",
      // [Auto-translated] "Make the column required if"
      requiredIf: "Gør kolonnen obligatorisk, hvis",
      // [Auto-translated] "Each option in a separate column"
      showInMultipleColumns: "Hver indstilling i en separat kolonne"
    },
    matrixcolumn: {
      // [Auto-translated] "Clear others in the same row"
      isExclusive: "Ryd andre i samme række"
    },
    multipletextitem: {
      // [Auto-translated] "Name"
      name: "Navn",
      // [Auto-translated] "Title"
      title: "Titel"
    },
    masksettings: {
      // [Auto-translated] "Save masked value in survey results"
      saveMaskedValue: "Gem maskeret værdi i undersøgelsesresultater"
    },
    patternmask: {
      // [Auto-translated] "Value pattern"
      pattern: "Værdimønster"
    },
    datetimemask: {
      // [Auto-translated] "Minimum value"
      min: "Mindste værdi",
      // [Auto-translated] "Maximum value"
      max: "Maksimal værdi"
    },
    numericmask: {
      // [Auto-translated] "Allow negative values"
      allowNegativeValues: "Tillad negative værdier",
      // [Auto-translated] "Thousands separator"
      thousandsSeparator: "Tusindtalsseparator",
      // [Auto-translated] "Decimal separator"
      decimalSeparator: "Decimalseparator",
      // [Auto-translated] "Value precision"
      precision: "Værdi præcision",
      // [Auto-translated] "Minimum value"
      min: "Mindste værdi",
      // [Auto-translated] "Maximum value"
      max: "Maksimal værdi"
    },
    currencymask: {
      // [Auto-translated] "Currency prefix"
      prefix: "Valutapræfiks",
      // [Auto-translated] "Currency suffix"
      suffix: "Suffiks for valuta"
    },
    // [Auto-translated] "Clear others when selected"
    isExclusive: "Ryd andre, når det er valgt",
    // [Auto-translated] "Require user to enter a comment"
    isCommentRequired: "Kræv, at brugeren indtaster en kommentar",
    // "Display area height"
    imageHeight: "Billedhøjde",
    // "Display area width"
    imageWidth: "Billedbredde",
    // "Join identifier"
    valueName: "Værdiens navn",
    // [Auto-translated] "Default display value for dynamic texts"
    defaultDisplayValue: "Standardvisningsværdi for dynamiske tekster",
    // [Auto-translated] "Label alignment"
    rateDescriptionLocation: "Justering af etiketter",
    // [Auto-translated] "Input field width (in characters)"
    size: "Bredde på inputfelt (i tegn)",
    // [Auto-translated] "Cell error message alignment"
    cellErrorLocation: "Justering af cellefejlmeddelelse",
    // [Auto-translated] "Enabled"
    enabled: "Aktiveret",
    // [Auto-translated] "Disabled"
    disabled: "Handicappet",
    // [Auto-translated] "Inherit"
    inherit: "Arve",
    // "Apply"
    apply: "Anvend",
    // "OK"
    ok: "OK",
    // [Auto-translated] "Save"
    save: "Spare",
    // [Auto-translated] "Clear"
    clear: "Tydelig",
    // [Auto-translated] "Save"
    saveTooltip: "Spare",
    // "Cancel"
    cancel: "Annuller",
    // [Auto-translated] "Set"
    set: "Sæt",
    // "Reset"
    reset: "Nulstil",
    // [Auto-translated] "Change"
    change: "Forandre",
    // [Auto-translated] "Refresh"
    refresh: "Opdatere",
    // "Close"
    close: "Luk",
    // "Delete"
    delete: "Slet",
    // [Auto-translated] "Add"
    add: "Tilføje",
    // "Add New"
    addNew: "Tilføj ny",
    // "Click to add an item..."
    addItem: "Klik for at tilføje...",
    // [Auto-translated] "Click to remove the item..."
    removeItem: "Klik for at fjerne elementet...",
    // [Auto-translated] "Drag the item"
    dragItem: "Træk elementet",
    // [Auto-translated] "Other"
    addOther: "Anden",
    // [Auto-translated] "Select All"
    addSelectAll: "Vælg alle",
    // [Auto-translated] "None"
    addNone: "Ingen",
    // "Remove All"
    removeAll: "Fjern alle",
    // "Edit"
    edit: "Rediger",
    // [Auto-translated] "Return without saving"
    back: "Returner uden at gemme",
    // [Auto-translated] "Return without saving"
    backTooltip: "Returner uden at gemme",
    // [Auto-translated] "Save and return"
    saveAndBack: "Gem og returner",
    // [Auto-translated] "Save and return"
    saveAndBackTooltip: "Gem og returner",
    // [Auto-translated] "Done"
    doneEditing: "Gjort",
    // "Edit Choices"
    editChoices: "Rediger valgmuligheder",
    // [Auto-translated] "Show Choices"
    showChoices: "Vis valgmuligheder",
    // "Move"
    move: "Flyt",
    // "<empty>"
    empty: "<tom>",
    // [Auto-translated] "Value is empty"
    emptyValue: "Værdien er tom",
    // "Manual Entry"
    fastEntry: "Fast Entry",
    // [Auto-translated] "Value '{0}' is not unique"
    fastEntryNonUniqueError: "Værdien '{0}' er ikke unik",
    // [Auto-translated] "Please limit the number of items from {0} to {1}"
    fastEntryChoicesCountError: "Begræns antallet af varer fra {0} til {1}",
    // [Auto-translated] "Please enter at least {0} items"
    fastEntryChoicesMinCountError: "Indtast mindst {0} punkter",
    // [Auto-translated] "Enter the list of choice options and their IDs in the following format:\n\nid|option\n\nA choice option ID is not visible to respondents and can be used in conditional rules."
    fastEntryPlaceholder: "Angiv listen over valgmuligheder og deres id'er i følgende format:\n\nid|mulighed\n\nEt id for valgmulighed er ikke synligt for svarpersoner og kan bruges i betingede regler.",
    // "Form Entry"
    formEntry: "Form Entry",
    // "Test the service"
    testService: "Test the service",
    // [Auto-translated] "Please select the element"
    itemSelectorEmpty: "Vælg elementet",
    // [Auto-translated] "Please select the action"
    conditionActionEmpty: "Vælg handlingen",
    // "Select a question..."
    conditionSelectQuestion: "Vælg spørgsmål...",
    // [Auto-translated] "Select a page..."
    conditionSelectPage: "Vælg en side...",
    // [Auto-translated] "Select a panel..."
    conditionSelectPanel: "Vælg et panel...",
    // "Please enter/select the value"
    conditionValueQuestionTitle: "Indtast/vælg værdi",
    // "Press ctrl+space to get expression completion hint"
    aceEditorHelp: "Tast ctrl+space for hjælp til at afslutte udtrykket",
    // "Current row"
    aceEditorRowTitle: "Aktuel række",
    // "Current panel"
    aceEditorPanelTitle: "Aktuelt panel",
    // "For more details please check the documentation"
    showMore: "Se dokumentationen for flere informationer",
    // "Available questions"
    assistantTitle: "Tilgængelige spørgsmål:",
    // "There is should be at least one column or row"
    cellsEmptyRowsColumns: "Der skal være mindst én kolonne eller række",
    // [Auto-translated] "Review before submit"
    showPreviewBeforeComplete: "Gennemgå før indsendelse",
    // [Auto-translated] "Enabled by a condition"
    overridingPropertyPrefix: "Aktiveret af en betingelse",
    // [Auto-translated] "Reset"
    resetToDefaultCaption: "Nulstille",
    // "Please enter a value"
    propertyIsEmpty: "Indtast en værdi",
    // [Auto-translated] "Please enter a unique value"
    propertyIsNoUnique: "Indtast en unik værdi",
    // [Auto-translated] "Please enter a unique name"
    propertyNameIsNotUnique: "Indtast et unikt navn",
    // "Do not use reserved words: \"item\", \"choice\", \"panel\", \"row\"."
    propertyNameIsIncorrect: "Brug ikke reserverede ord: \"element\", \"valg\", \"panel\", \"række\".",
    // [Auto-translated] "You don't have any items yet"
    listIsEmpty: "Du har ingen varer endnu",
    // [Auto-translated] "You don't have any choices yet"
    "listIsEmpty@choices": "Du har ingen valg endnu",
    // [Auto-translated] "You don't have any columns yet"
    "listIsEmpty@columns": "Du har ikke nogen kolonner endnu",
    // [Auto-translated] "You don't have layout columns yet"
    "listIsEmpty@gridLayoutColumns": "Du har ikke layoutkolonner endnu",
    // [Auto-translated] "You don't have any rows yet"
    "listIsEmpty@rows": "Du har ingen rækker endnu",
    // [Auto-translated] "You don't have any validation rules yet"
    "listIsEmpty@validators": "Du har endnu ingen valideringsregler",
    // [Auto-translated] "You don't have any custom variables yet"
    "listIsEmpty@calculatedValues": "Du har endnu ingen tilpassede variabler",
    // [Auto-translated] "You don't have any triggers yet"
    "listIsEmpty@triggers": "Du har ingen udløsere endnu",
    // [Auto-translated] "You don't have any links yet"
    "listIsEmpty@navigateToUrlOnCondition": "Du har ingen links endnu",
    // [Auto-translated] "You don't have any pages yet"
    "listIsEmpty@pages": "Du har ingen sider endnu",
    // [Auto-translated] "Add new choice"
    "addNew@choices": "Tilføj nyt valg",
    // [Auto-translated] "Add new column"
    "addNew@columns": "Tilføj ny kolonne",
    // [Auto-translated] "Add new row"
    "addNew@rows": "Tilføj ny række",
    // [Auto-translated] "Add new rule"
    "addNew@validators": "Tilføj ny regel",
    // [Auto-translated] "Add new variable"
    "addNew@calculatedValues": "Tilføj ny variabel",
    // [Auto-translated] "Add new trigger"
    "addNew@triggers": "Tilføj ny udløser",
    // [Auto-translated] "Add new URL"
    "addNew@navigateToUrlOnCondition": "Tilføj ny webadresse",
    // [Auto-translated] "Add new page"
    "addNew@pages": "Tilføj ny side",
    // [Auto-translated] "Expression is empty"
    expressionIsEmpty: "Udtrykket er tomt",
    // "Value"
    value: "Værdi",
    // "Text"
    text: "Tekst",
    // "Row ID"
    rowid: "Række ID",
    // "Image or video file URL"
    imageLink: "Billedlink",
    // "Edit column: {0}"
    columnEdit: "Rediger kolonne: {0}",
    // "Edit item: {0}"
    itemEdit: "Redigér: {0}",
    // "URL"
    url: "URL",
    // "Path to data"
    path: "Sti",
    choicesbyurl: {
      // [Auto-translated] "Web service URL"
      url: "URL-adresse til webtjeneste",
      // [Auto-translated] "Get value to store from the following property"
      valueName: "Få værdi til at gemme fra følgende egenskab"
    },
    // "Get value to display from the following property"
    titleName: "Titelnavn",
    // [Auto-translated] "Get file URLs from the following property"
    imageLinkName: "Hent fil-URL-adresser fra følgende ejendom",
    // [Auto-translated] "Accept empty response"
    allowEmptyResponse: "Accepter tomt svar",
    // [Auto-translated] "Title"
    titlePlaceholder: "Titel",
    // [Auto-translated] "Survey Title"
    surveyTitlePlaceholder: "Undersøgelsens titel",
    // [Auto-translated] "Page {num}"
    pageTitlePlaceholder: "Side {num}",
    // [Auto-translated] "Start Page"
    startPageTitlePlaceholder: "Startside",
    // [Auto-translated] "Description"
    descriptionPlaceholder: "Beskrivelse",
    // [Auto-translated] "Description"
    surveyDescriptionPlaceholder: "Beskrivelse",
    // [Auto-translated] "Description"
    pageDescriptionPlaceholder: "Beskrivelse",
    // [Auto-translated] "Wrap choices"
    textWrapEnabled: "Valg af wrap",
    // "Enable the \"Other\" option"
    showOtherItem: "Har andet element",
    // "Rename the \"Other\" option"
    otherText: "Andet element tekst",
    // [Auto-translated] "Enable the \"None\" option"
    showNoneItem: "Aktiver indstillingen \"Ingen\"",
    // [Auto-translated] "Enable the \"Refuse to Answer\" option"
    showRefuseItem: "Aktiver indstillingen \"Afvis at svare\"",
    // [Auto-translated] "Enable the \"Don't Know\" option"
    showDontKnowItem: "Aktiver indstillingen \"Ved ikke\"",
    // [Auto-translated] "Rename the \"None\" option"
    noneText: "Omdøb indstillingen \"Ingen\"",
    // [Auto-translated] "Enable the \"Select All\" option"
    showSelectAllItem: "Aktiver indstillingen \"Vælg alle\"",
    // [Auto-translated] "Rename the \"Select All\" option"
    selectAllText: "Omdøb indstillingen \"Vælg alle\"",
    // [Auto-translated] "Minimum value for auto-generated items"
    choicesMin: "Minimumsværdi for automatisk genererede varer",
    // [Auto-translated] "Maximum value for auto-generated items"
    choicesMax: "Maksimal værdi for automatisk genererede varer",
    // [Auto-translated] "Step value for auto-generated items"
    choicesStep: "Trinværdi for automatisk genererede varer",
    // "Name"
    name: "Navn",
    // "Title"
    title: "Titel",
    // "Cell input type"
    cellType: "Celletype",
    // "Column count"
    colCount: "Antal kolonner",
    // "Choice order"
    choicesOrder: "Vælg rækkefølge på valg",
    // [Auto-translated] "Allow custom choices"
    allowCustomChoices: "Tillad brugerdefinerede valg",
    // "Visible"
    visible: "Er synlig?",
    // "Required"
    isRequired: "Er påkrævet?",
    // [Auto-translated] "Mark as required"
    markRequired: "Markér efter behov",
    // [Auto-translated] "Remove the required mark"
    removeRequiredMark: "Fjern det påkrævede mærke",
    // [Auto-translated] "Require an answer in each row"
    eachRowRequired: "Kræv et svar i hver række",
    // [Auto-translated] "Prevent duplicate responses in rows"
    eachRowUnique: "Undgå dublerede svar i rækker",
    // "Error message for required questions"
    requiredErrorText: "Fejlmeddelelsen \"Påkrævet\"",
    // "Display the question on a new line"
    startWithNewLine: "Skal starte med ny linie?",
    // "Rows"
    rows: "Antal rækker",
    // [Auto-translated] "Columns"
    cols: "Kolonner",
    // "Placeholder text within input field"
    placeholder: "Hint-tekst",
    // "Show preview area"
    showPreview: "Vises forhåndsvisning af billeder?",
    // "Store file content in JSON result as text"
    storeDataAsText: "Gem filindhold i JSON-resultat som tekst",
    // "Maximum file size (in bytes)"
    maxSize: "Maksimal filstørrelse i bytes",
    // "Row count"
    rowCount: "Antal rækker",
    // "Columns layout"
    columnLayout: "Kolonnelayout",
    // "\"Add Row\" button alignment"
    addRowButtonLocation: "Tilføj række knapplacering",
    // [Auto-translated] "Transpose rows to columns"
    transposeData: "Transponere rækker til kolonner",
    // "\"Add Row\" button text"
    addRowText: "Tilføj række knaptekst",
    // "\"Remove Row\" button text"
    removeRowText: "Fjern række knaptekst",
    // [Auto-translated] "Input field title pattern"
    singleInputTitleTemplate: "Titelmønster for inputfelt",
    // [Auto-translated] "Minimum rating value"
    rateMin: "Mindste bedømmelsesværdi",
    // [Auto-translated] "Maximum rating value"
    rateMax: "Maksimal bedømmelsesværdi",
    // [Auto-translated] "Step value"
    rateStep: "Trinværdi",
    // "Minimum value label"
    minRateDescription: "Beskriv laveste vurdering",
    // "Maximum value label"
    maxRateDescription: "Beskriv højeste vurdering",
    // "Input type"
    inputType: "Inputtype",
    // "Option placeholder"
    optionsCaption: "Muligheder tekst",
    // "Default Answer"
    defaultValue: "Standardværdi",
    // "Default texts"
    cellsDefaultRow: "Standard celletekst",
    // "Edit survey settings"
    surveyEditorTitle: "Rediger undersøgelsesindstillinger",
    // "Edit: {0}"
    qEditorTitle: "Redigér: {0}",
    // "Maximum character limit"
    maxLength: "Maximal længde",
    // [Auto-translated] "Build"
    buildExpression: "Bygge",
    // [Auto-translated] "Edit"
    editExpression: "Redigere",
    // [Auto-translated] "and"
    and: "og",
    // [Auto-translated] "or"
    or: "eller",
    // [Auto-translated] "Remove"
    remove: "Fjerne",
    // [Auto-translated] "Add Condition"
    addCondition: "Tilføj betingelse",
    // [Auto-translated] "Select a question to start configuring conditions."
    emptyLogicPopupMessage: "Vælg et spørgsmål for at begynde at konfigurere betingelser.",
    // [Auto-translated] "If"
    if: "Hvis",
    // [Auto-translated] "then"
    then: "derpå",
    // [Auto-translated] "Target question"
    setToName: "Mål spørgsmål",
    // [Auto-translated] "Question to copy answer from"
    fromName: "Spørgsmål at kopiere svar fra",
    // [Auto-translated] "Question to skip to"
    gotoName: "Spørgsmål at springe til",
    // [Auto-translated] "Rule is incorrect"
    ruleIsNotSet: "Reglen er forkert",
    // [Auto-translated] "Add to the survey results"
    includeIntoResult: "Føj til undersøgelsesresultaterne",
    // "Make the title and description visible"
    showTitle: "Vis/skjul titel",
    // [Auto-translated] "Expand/collapse title"
    expandCollapseTitle: "Udvid/skjul titel",
    // "Select a survey language"
    locale: "Standardsprog",
    // [Auto-translated] "Select device type"
    simulator: "Vælg enhedstype",
    // [Auto-translated] "Switch to landscape orientation"
    landscapeOrientation: "Skift til liggende retning",
    // [Auto-translated] "Switch to portrait orientation"
    portraitOrientation: "Skift til stående format",
    // "Clear hidden question values"
    clearInvisibleValues: "Fjern usynlige værdier",
    // "Limit to one response"
    cookieName: "Cookienavn (for at undgå at afvikle undersøgelsen to gange lokalt)",
    // "Auto-save survey progress on page change"
    partialSendEnabled: "Send undersøgelsesresultatet ved næste side",
    // "Save the \"Other\" option value as a separate property"
    storeOthersAsComment: "Gem 'others' værdien i et seperat felt",
    // "Show page titles"
    showPageTitles: "Vis sidetitler",
    // "Show page numbers"
    showPageNumbers: "Vis sidenumre",
    // "\"Previous Page\" button text"
    pagePrevText: "Forrige side knaptekst",
    // "\"Next Page\" button text"
    pageNextText: "Næste side knaptekst",
    // "\"Complete Survey\" button text"
    completeText: "Færdig knaptekst",
    // [Auto-translated] "\"Review Answers\" button text"
    previewText: "Knapteksten \"Gennemgå svar\"",
    // [Auto-translated] "\"Edit Answer\" button text"
    editText: "Knapteksten \"Rediger svar\"",
    // "\"Start Survey\" button text"
    startSurveyText: "Start knaptekst",
    // "Show navigation buttons"
    showNavigationButtons: "Vis navigationsknapper (standard navigation)",
    // [Auto-translated] "Navigation buttons alignment"
    navigationButtonsLocation: "Justering af navigationsknapper",
    // "Show the \"Previous Page\" button"
    showPrevButton: "Vis forrige knap (brugeren må gå tilbage til forrige side)",
    // "First page is a start page"
    firstPageIsStartPage: "Den første side in undersøgelsen er starten på undersøgelsen.",
    // "Show the \"Thank You\" page"
    showCompletePage: "Vis afslutningssiden til slut (completedHtml)",
    // "Auto-advance to the next page"
    autoAdvanceEnabled: "Gå til næste side automatisk når alle spørgsmål er besvaret",
    // [Auto-translated] "Complete the survey automatically"
    autoAdvanceAllowComplete: "Udfyld undersøgelsen automatisk",
    // "Show the progress bar"
    showProgressBar: "Vis fremdriftslinje",
    // [Auto-translated] "Progress bar alignment"
    progressBarLocation: "Justering af statuslinje",
    // "Question title alignment"
    questionTitleLocation: "Spørgsmålstitel placering",
    // "Question title width"
    questionTitleWidth: "Spørgsmålets titelbredde",
    // "Required symbol(s)"
    requiredMark: "Påkrævet spørgsmålssymbol(er)",
    // "Question title template, default is: '{no}. {require} {title}'"
    questionTitleTemplate: "Spørgsmålstitel template, standard er: '{no}. {require} {title}'",
    // "Error message alignment"
    questionErrorLocation: "Spørgsmålsfejl placering",
    // "Focus first question on a new page"
    autoFocusFirstQuestion: "Fokusér første spørgsmål ved sideskift",
    // "Question order"
    questionOrder: "Rækkefølge af spørgsmål på siden",
    // "Time limit to complete the survey"
    timeLimit: "Maximal tid til at gennemføre undersøgelsen",
    // "Time limit to complete one page"
    timeLimitPerPage: "Maximal tid til at gennemføre en side i undersøgelsen",
    // [Auto-translated] "Use a timer"
    showTimer: "Brug en timer",
    // "Timer alignment"
    timerLocation: "Vis tidspanel",
    // "Timer mode"
    timerInfoMode: "Vis tidspanel tilstand",
    // "Panel display mode"
    renderMode: "Renderingstilstand",
    // "Enable entry addition"
    allowAddPanel: "Tillad at tilføje et panel",
    // "Enable entry removal"
    allowRemovePanel: "Tillad at fjerne et panel",
    // "\"Add Entry\" button text"
    addPanelText: "Tilføj panel tekst",
    // "\"Remove Entry\" button text"
    removePanelText: "Fjern panel tekst",
    // "Show all elements on one page"
    isSinglePage: "Vis alle elementer på én side",
    // [Auto-translated] "HTML markup"
    html: "HTML-markering",
    // [Auto-translated] "Answer"
    setValue: "Svare",
    // [Auto-translated] "Storage format"
    dataFormat: "Opbevaring format",
    // [Auto-translated] "Enable row addition"
    allowAddRows: "Aktiver tilføjelse af rækker",
    // [Auto-translated] "Enable row removal"
    allowRemoveRows: "Aktivér fjernelse af rækker",
    // [Auto-translated] "Enable row reordering"
    allowRowReorder: "Aktivere omarrangering af rækker",
    // [Auto-translated] "Does not apply if you specify the exact display area width or height."
    responsiveImageSizeHelp: "Gælder ikke, hvis du angiver den nøjagtige bredde eller højde for visningsområdet.",
    // [Auto-translated] "Minimum display area width"
    minImageWidth: "Mindste bredde på visningsområdet",
    // [Auto-translated] "Maximum display area width"
    maxImageWidth: "Maksimal bredde på visningsområdet",
    // [Auto-translated] "Minimum display area height"
    minImageHeight: "Mindste visningsområdehøjde",
    // [Auto-translated] "Maximum display area height"
    maxImageHeight: "Maksimal visningsområdehøjde",
    // [Auto-translated] "Minimum value"
    minValue: "Mindste værdi",
    // [Auto-translated] "Maximum value"
    maxValue: "Maksimal værdi",
    // [Auto-translated] "Case insensitive"
    caseInsensitive: "Der skelnes ikke mellem store og små bogstaver",
    // [Auto-translated] "Minimum length (in characters)"
    minLength: "Mindste længde (med bogstaver)",
    // [Auto-translated] "Allow digits"
    allowDigits: "Tillad cifre",
    // [Auto-translated] "Minimum count"
    minCount: "Mindste antal",
    // [Auto-translated] "Maximum count"
    maxCount: "Maksimalt antal",
    // [Auto-translated] "Regular expression"
    regex: "Regulært udtryk",
    surveyvalidator: {
      // [Auto-translated] "Validation message"
      text: "Meddelelse om validering",
      // [Auto-translated] "Validation expression"
      expression: "Valideringsudtryk",
      // [Auto-translated] "Notification type"
      notificationType: "Type af notifikationer"
    },
    // [Auto-translated] "Total row header"
    totalText: "Rækkeoverskrift i total",
    // [Auto-translated] "Aggregation method"
    totalType: "Aggregeringsmetode",
    // [Auto-translated] "Total value expression"
    totalExpression: "Udtryk for samlet værdi",
    // [Auto-translated] "Total value display format"
    totalDisplayStyle: "Visningsformat for samlet værdi",
    // [Auto-translated] "Currency"
    totalCurrency: "Valuta",
    // [Auto-translated] "Formatted string"
    totalFormat: "Formateret streng",
    // [Auto-translated] "Survey logo"
    logo: "Logo for undersøgelse",
    // [Auto-translated] "Survey layout"
    questionsOnPageMode: "Undersøgelsens layout",
    // [Auto-translated] "Restrict answer length"
    maxTextLength: "Begræns svarlængden",
    // [Auto-translated] "Restrict comment length"
    maxCommentLength: "Begræns kommentarlængden",
    // [Auto-translated] "Comment area height (in lines)"
    commentAreaRows: "Højde på kommentarområdet (i linjer)",
    // [Auto-translated] "Auto-expand text areas"
    autoGrowComment: "Udvid automatisk tekstområder",
    // [Auto-translated] "Allow users to resize text areas"
    allowResizeComment: "Tillad brugere at ændre størrelsen på tekstområder",
    // "Update input field values"
    textUpdateMode: "Opdater værdi for tekstspørgsmål",
    // [Auto-translated] "Input mask type"
    maskType: "Type af inputmaske",
    // [Auto-translated] "Set focus on the first invalid answer"
    autoFocusFirstError: "Sæt fokus på det første ugyldige svar",
    // [Auto-translated] "Run validation"
    checkErrorsMode: "Kør validering",
    // [Auto-translated] "Validate empty fields on lost focus"
    validateVisitedEmptyFields: "Validere tomme felter ved mistet fokus",
    // [Auto-translated] "Redirect to an external link after submission"
    navigateToUrl: "Omdiriger til et eksternt link efter indsendelse",
    // [Auto-translated] "Dynamic external link"
    navigateToUrlOnCondition: "Dynamisk eksternt link",
    // [Auto-translated] "Markup to show if the user already filled out this survey"
    completedBeforeHtml: "Markering for at vise, om brugeren allerede har udfyldt denne undersøgelse",
    // [Auto-translated] "\"Thank You\" page markup"
    completedHtml: "\"Tak\"-sidemarkering",
    // [Auto-translated] "Dynamic \"Thank You\" page markup"
    completedHtmlOnCondition: "Dynamisk \"Tak\"-sidemarkering",
    // [Auto-translated] "Markup to show while survey model is loading"
    loadingHtml: "Markering, der skal vises, mens undersøgelsesmodellen indlæses",
    // [Auto-translated] "Comment area text"
    commentText: "Tekst i kommentarområdet",
    // [Auto-translated] "Autocomplete type"
    autocomplete: "Type Autofuldførelse",
    // "Label for \"True\""
    labelTrue: "\"True\" etiket",
    // "Label for \"False\""
    labelFalse: "Etiketten \"Falsk\"",
    // "Show the Clear button"
    allowClear: "Vis knappen Ryd",
    // [Auto-translated] "Search Mode"
    searchMode: "Søgetilstand",
    // [Auto-translated] "Display format"
    displayStyle: "Visningsformat",
    // [Auto-translated] "Formatted string"
    format: "Formateret streng",
    // [Auto-translated] "Maximum fractional digits"
    maximumFractionDigits: "Maksimalt antal brøkdele",
    // [Auto-translated] "Minimum fractional digits"
    minimumFractionDigits: "Mindste brøkdele",
    // [Auto-translated] "Display grouping separators"
    useGrouping: "Vis grupperingsseparatorer",
    // [Auto-translated] "Enable multiple file upload"
    allowMultiple: "Aktivér upload af flere filer",
    // [Auto-translated] "Preview uploaded images"
    allowImagesPreview: "Se eksempler på uploadede billeder",
    // [Auto-translated] "Accepted file types"
    acceptedTypes: "Accepterede filtyper",
    // [Auto-translated] "Wait for upload to complete"
    waitForUpload: "Vent på, at overførslen er fuldført",
    // [Auto-translated] "Confirm file deletion"
    needConfirmRemoveFile: "Bekræft sletning af fil",
    // [Auto-translated] "Row details alignment"
    detailPanelMode: "Justering af rækkedetaljer",
    // [Auto-translated] "Minimum row count"
    minRowCount: "Mindste antal rækker",
    // [Auto-translated] "Maximum row count"
    maxRowCount: "Maksimalt antal rækker",
    // "Confirm row removal"
    confirmDelete: "Bekræft sletning af række",
    // [Auto-translated] "Confirmation message"
    confirmDeleteText: "Bekræftelsesmeddelelse",
    // [Auto-translated] "Initial number of entries"
    panelCount: "Oprindelig antal poster",
    // [Auto-translated] "Minimum number of entries"
    minPanelCount: "Mindste antal tilmeldinger",
    // [Auto-translated] "Maximum number of entries"
    maxPanelCount: "Maksimalt antal tilmeldinger",
    // [Auto-translated] "Initial entry state"
    panelsState: "Indledende indtastningstilstand",
    // [Auto-translated] "\"Previous Entry\" button text"
    prevPanelText: "Knapteksten \"Forrige indtastning\"",
    // [Auto-translated] "\"Next Entry\" button text"
    nextPanelText: "Knapteksten \"Næste indtastning\"",
    // [Auto-translated] "\"Remove Entry\" button alignment"
    removePanelButtonLocation: "Justering af knappen \"Fjern indtastning\"",
    // [Auto-translated] "Hide the question if it has no rows"
    hideIfRowsEmpty: "Skjul spørgsmålet, hvis det ikke har nogen linjer",
    // [Auto-translated] "Hide columns if there are no rows"
    hideColumnsIfEmpty: "Skjule kolonner, hvis der ikke er nogen rækker",
    // [Auto-translated] "Custom rating values"
    rateValues: "Brugerdefinerede vurderingsværdier",
    // [Auto-translated] "Rating count"
    rateCount: "Antal bedømmelser",
    // [Auto-translated] "Rating configuration"
    autoGenerate: "Konfiguration af bedømmelse",
    slider: {
      // [Auto-translated] "Min value"
      min: "Min. værdi",
      // [Auto-translated] "Max value"
      max: "Maks. værdi",
      // [Auto-translated] "Step value"
      step: "Trinværdi",
      // [Auto-translated] "Show scale labels"
      showLabels: "Vis skalaetiketter",
      // [Auto-translated] "Show tooltips"
      tooltipVisibility: "Vis værktøjstip",
      // [Auto-translated] "Allow thumb crossing"
      allowSwap: "Tillad tommelfingerkrydsning",
      // [Auto-translated] "Number of auto-generated labels"
      labelCount: "Antal automatisk genererede etiketter",
      // [Auto-translated] "Min value expression"
      minValueExpression: "Udtryk for min. værdi",
      // [Auto-translated] "Max value expression"
      maxValueExpression: "Udtryk for maks. værdi",
      // [Auto-translated] "Scale labels configuration"
      autoGenerate: "Konfiguration af skaleringsetiketter",
      // [Auto-translated] "Slider type"
      sliderType: "Skyder type",
      // [Auto-translated] "Min range length"
      minRangeLength: "Min. rækkevidde længde",
      // [Auto-translated] "Max range length"
      maxRangeLength: "Maks. rækkevidde længde",
      // [Auto-translated] "Custom labels"
      customLabels: "Brugerdefinerede etiketter",
      // [Auto-translated] "Label format"
      labelFormat: "Etiket format",
      // [Auto-translated] "Tooltip format"
      tooltipFormat: "Værktøjstip-format"
    },
    file: {
      // [Auto-translated] "Image height"
      imageHeight: "Billedets højde",
      // [Auto-translated] "Image width"
      imageWidth: "Billedets bredde"
    },
    // [Auto-translated] "Hide the question if it has no choices"
    hideIfChoicesEmpty: "Skjul spørgsmålet, hvis det ikke har nogen valgmuligheder",
    // "Minimum width"
    minWidth: "Minimumbredde (i CSS-accepterede værdier)",
    // "Maximum width"
    maxWidth: "Maksimal bredde (i CSS-accepterede værdier)",
    // "Width"
    width: "Bredde (i CSS-accepterede værdier)",
    // [Auto-translated] "Show column headers"
    showHeader: "Vis kolonneoverskrifter",
    // [Auto-translated] "Show horizontal scrollbar"
    horizontalScroll: "Vis vandret rullepanel",
    // [Auto-translated] "Minimum column width"
    columnMinWidth: "Mindste kolonnebredde",
    // [Auto-translated] "Row header width"
    rowTitleWidth: "Rækkeoverskriftens bredde",
    // "Value to store when \"True\" is selected"
    valueTrue: "\"Sand\" værdi",
    // "Value to store when \"False\" is selected"
    valueFalse: "\"Falsk\" værdi",
    // "\"Value is below minimum\" error message"
    minErrorText: "Fejlmeddelelsen \"Værdien er under minimum\"",
    // "\"Value exceeds maximum\" error message"
    maxErrorText: "Fejlmeddelelsen \"Værdien overstiger maksimum\"",
    // "\"Empty comment\" error message"
    otherErrorText: "Fejlmeddelelsen \"Tom kommentar\"",
    // "Error message for duplicate responses"
    keyDuplicationError: "Fejlmeddelelsen \"Ikke-entydig nøgleværdi\"",
    // [Auto-translated] "Minimum choices to select"
    minSelectedChoices: "Mindste valgmuligheder at vælge",
    // [Auto-translated] "Maximum choices to select"
    maxSelectedChoices: "Maksimalt antal valgmuligheder at vælge",
    // [Auto-translated] "Logo width"
    logoWidth: "Logo bredde",
    // [Auto-translated] "Logo height"
    logoHeight: "Logo højde",
    // "Read-only"
    readOnly: "Skrivebeskyttet",
    // [Auto-translated] "Disable the read-only mode if"
    enableIf: "Deaktiver skrivebeskyttet tilstand, hvis",
    // "\"No rows\" message"
    noRowsText: "Meddelelsen \"Ingen rækker\"",
    // [Auto-translated] "Separate special choices"
    separateSpecialChoices: "Separate særlige valg",
    // [Auto-translated] "Copy choices from the following question"
    choicesFromQuestion: "Kopiér valg fra følgende spørgsmål",
    // [Auto-translated] "Which choice options to copy"
    choicesFromQuestionMode: "Hvilke valgmuligheder der skal kopieres",
    // [Auto-translated] "Use values from the following matrix column or panel question as choice IDs"
    choiceValuesFromQuestion: "Bruge værdier fra følgende matrixkolonne eller panelspørgsmål som valg-id'er",
    // [Auto-translated] "Use values from the following matrix column or panel question as choice texts"
    choiceTextsFromQuestion: "Brug værdier fra følgende matrixkolonne eller panelspørgsmål som valgtekster",
    // [Auto-translated] "Display page titles in the progress bar"
    progressBarShowPageTitles: "Vise sidetitler på statuslinjen",
    // [Auto-translated] "Display page numbers in the progress bar"
    progressBarShowPageNumbers: "Vise sidetal på statuslinjen",
    // [Auto-translated] "Add a comment box"
    showCommentArea: "Tilføj et kommentarfelt",
    // [Auto-translated] "Placeholder text for the comment box"
    commentPlaceholder: "Pladsholdertekst til kommentarfeltet",
    // [Auto-translated] "Show the labels as extreme values"
    displayRateDescriptionsAsExtremeItems: "Vise etiketterne som ekstreme værdier",
    // [Auto-translated] "Row order"
    rowOrder: "Rækkefølge af rækker",
    // [Auto-translated] "Column layout"
    columnsLayout: "Kolonnelayout",
    // [Auto-translated] "Nested column count"
    columnColCount: "Antal indlejrede kolonner",
    // [Auto-translated] "Correct Answer"
    correctAnswer: "Korrekt svar",
    // [Auto-translated] "Default Values"
    defaultPanelValue: "Standardværdier",
    // [Auto-translated] "Cell Texts"
    cells: "Celle tekster",
    // [Auto-translated] "Select a file or paste a file link..."
    fileInputPlaceholder: "Vælg en fil, eller indsæt et fillink...",
    // "Prevent duplicate responses in the following column"
    keyName: "Nøglekolonne",
    itemvalue: {
      // [Auto-translated] "Make the option visible if"
      visibleIf: "Gør indstillingen synlig, hvis",
      // [Auto-translated] "Make the option selectable if"
      enableIf: "Gør indstillingen valgbar, hvis"
    },
    "itemvalue@rows": {
      // [Auto-translated] "Make the row visible if"
      visibleIf: "Gør rækken synlig, hvis",
      // [Auto-translated] "Make the row editable if"
      enableIf: "Gør rækken redigerbar, hvis"
    },
    imageitemvalue: {
      // "Alt text"
      text: "Alternativ tekst"
    },
    // [Auto-translated] "Logo alignment"
    logoPosition: "Justering af logo",
    // [Auto-translated] "Add logo..."
    addLogo: "Tilføj logo...",
    // [Auto-translated] "Change logo..."
    changeLogo: "Skift logo...",
    logoPositions: {
      // [Auto-translated] "Remove logo"
      none: "Fjern logo",
      // [Auto-translated] "Left"
      left: "Venstre",
      // [Auto-translated] "Right"
      right: "Højre",
      // [Auto-translated] "On the top"
      top: "På toppen",
      // [Auto-translated] "In the bottom"
      bottom: "I bunden"
    },
    // [Auto-translated] "Preview mode"
    previewMode: "Forhåndsvisning tilstand",
    // [Auto-translated] "Enable grid layout"
    gridLayoutEnabled: "Aktivere gitterlayout",
    // [Auto-translated] "Grid columns"
    gridLayoutColumns: "Gitterkolonner",
    // [Auto-translated] "Mask settings"
    maskSettings: "Indstillinger for maske",
    // [Auto-translated] "Row details error message alignment"
    detailErrorLocation: "Justering af fejlmeddelelser for rækkedetaljer",
    // Creator tabs
    tabs: {
      panel: {
        // [Auto-translated] "Panel Layout"
        layout: "Panellayout"
      },
      // "General"
      general: "Generelt",
      // "Options"
      fileOptions: "Indstillinger",
      // "HTML Editor"
      html: "Html-editor",
      // "Columns"
      columns: "Kolonner",
      // "Rows"
      rows: "Rækker",
      // "Choice Options"
      choices: "Valgmuligheder",
      // "Items"
      items: "Elementer",
      // "Visible If"
      visibleIf: "Synlig hvis",
      // "Editable If"
      enableIf: "Aktiv hvis",
      // [Auto-translated] "Required If"
      requiredIf: "Påkrævet, hvis",
      // "Rating Values"
      rateValues: "Bedøm-værdier",
      // [Auto-translated] "Slider Settings"
      sliderSettings: "Indstillinger for skyder",
      // "Choices from a Web Service"
      choicesByUrl: "Valgmuligheder fra Web",
      // "Default Choices"
      matrixChoices: "Standard valgmuligheder",
      // "Text Inputs"
      multipleTextItems: "Tekst inputmuligheder",
      // [Auto-translated] "Numbering"
      numbering: "Nummerering",
      // "Validators"
      validators: "Valideringer",
      // "Navigation"
      navigation: "Navigation",
      // "Question Settings"
      question: "Spørgsmål",
      // [Auto-translated] "Pages"
      pages: "Sider",
      // "Quiz Mode"
      timer: "Tid/Quiz",
      // [Auto-translated] "Calculated Values"
      calculatedValues: "Beregnede værdier",
      // "Triggers"
      triggers: "Triggere",
      // "Title template"
      templateTitle: "Skabelon titel",
      // [Auto-translated] "Totals"
      totals: "Totaler",
      // "Conditions"
      logic: "Logik",
      // [Auto-translated] "Input Mask Settings"
      mask: "Indstillinger for inputmaske",
      layout: {
        // [Auto-translated] "Panel Layout"
        panel: "Panellayout",
        // [Auto-translated] "Layout"
        question: "Layout",
        // [Auto-translated] "Layout"
        base: "Layout"
      },
      // [Auto-translated] "Data"
      data: "Data",
      // [Auto-translated] "Validation"
      validation: "Validering",
      // [Auto-translated] "Individual Cell Texts"
      cells: "Individuelle celletekster",
      // [Auto-translated] "\"Thank You\" Page"
      showOnCompleted: "\"Tak\"-side",
      // [Auto-translated] "Logo in the Survey Header"
      logo: "Logo i undersøgelsesoverskriften",
      // [Auto-translated] "Slider"
      slider: "Skyderen",
      // [Auto-translated] "Expression"
      expression: "Udtryk",
      // [Auto-translated] "Question Settings"
      questionSettings: "Indstillinger for spørgsmål",
      // "Header"
      header: "Header",
      // "Background"
      background: "Baggrund",
      // "Appearance"
      appearance: "Udseende",
      // [Auto-translated] "Accent colors"
      accentColors: "Accentfarver",
      // [Auto-translated] "Surface background"
      surfaceBackground: "Overflade baggrund",
      // [Auto-translated] "Scaling"
      scaling: "Skalering",
      // [Auto-translated] "Others"
      others: "Andre"
    },
    // "Edit property '{0}'"
    editProperty: "Rediger egenskab '{0}'",
    // "Items"
    items: "[ Element: {0} ]",
    // [Auto-translated] "Make choices visible if"
    choicesVisibleIf: "Gør valgene synlige, hvis",
    // [Auto-translated] "Make choices selectable if"
    choicesEnableIf: "Gør valgmuligheder valgbare, hvis",
    // [Auto-translated] "Make columns visible if"
    columnsEnableIf: "Gør kolonner synlige, hvis",
    // [Auto-translated] "Make rows visible if"
    rowsEnableIf: "Gør rækker synlige, hvis",
    // [Auto-translated] "Increase the inner indent"
    innerIndent: "Forøg den indre indrykning",
    // [Auto-translated] "Use answers from the last entry as default"
    copyDefaultValueFromLastEntry: "Brug svar fra sidste post som standard",
    // "Please enter a value."
    enterNewValue: "Indtast værdien.",
    // "There are no questions in the survey."
    noquestions: "Der er ingen spørgsmål i undersøgelsen.",
    // "Please create a trigger"
    createtrigger: "Opret en trigger",
    // [Auto-translated] "Press enter button to edit"
    titleKeyboardAdornerTip: "Tryk på enter-knappen for at redigere",
    // [Auto-translated] "Press enter button to edit item, press delete button to delete item, press alt plus arrow up or arrow down to move item"
    keyboardAdornerTip: "Tryk på enter-knappen for at redigere elementet, tryk på slet-knappen for at slette elementet, tryk på alt plus pil op eller pil ned for at flytte elementet",
    // "On "
    triggerOn: "På ",
    // "Make pages visible"
    triggerMakePagesVisible: "Gør sider synlige:",
    // "Make elements visible"
    triggerMakeQuestionsVisible: "Gør spørgsmål synlige:",
    // "Complete the survey if successful."
    triggerCompleteText: "Aflslut spørgeskema ved at fortsætte.",
    // "The trigger is not set"
    triggerNotSet: "Triggerer er ikke sat",
    // "Run if"
    triggerRunIf: "Afvikl hvis",
    // "Change value of: "
    triggerSetToName: "Ændr værdien af: ",
    // "Copy value from: "
    triggerFromName: "Kopier værdi fra: ",
    // "Run this Expression"
    triggerRunExpression: "Afvikl dette udtryk:",
    // "to: "
    triggerSetValue: "til: ",
    // [Auto-translated] "Go to the question"
    triggerGotoName: "Gå til spørgsmålet",
    // "Do not put the variable into the survey result."
    triggerIsVariable: "Gem ikke variablen i undersøgelsesresultatet.",
    // [Auto-translated] "Please enter a valid expression"
    triggerRunExpressionEmpty: "Indtast et gyldigt udtryk",
    // [Auto-translated] "Type expression here..."
    emptyExpressionPlaceHolder: "Skriv udtryk her...",
    // [Auto-translated] "No file chosen"
    noFile: "Ingen fil valgt",
    // [Auto-translated] "Clear hidden question values"
    clearIfInvisible: "Ryd skjulte spørgsmålsværdier",
    // [Auto-translated] "Store values in the following property"
    valuePropertyName: "Gem værdier i følgende egenskab",
    // [Auto-translated] "Enable search-as-you-type"
    searchEnabled: "Aktivér søgning, mens du skriver",
    // [Auto-translated] "Hide selected items"
    hideSelectedItems: "Skjule markerede elementer",
    // [Auto-translated] "Collapse the dropdown upon selection"
    closeOnSelect: "Skjul rullemenuen ved valg",
    // [Auto-translated] "Vertical alignment within cells"
    verticalAlign: "Lodret justering i celler",
    // [Auto-translated] "Alternate row colors"
    alternateRows: "Alternative rækkefarver",
    // [Auto-translated] "Make columns visible if"
    columnsVisibleIf: "Gør kolonner synlige, hvis",
    // [Auto-translated] "Make rows visible if"
    rowsVisibleIf: "Gør rækker synlige, hvis",
    // [Auto-translated] "Placeholder text for the comment box"
    otherPlaceholder: "Pladsholdertekst til kommentarfeltet",
    // [Auto-translated] "Placeholder text for Local file"
    filePlaceholder: "Pladsholdertekst til lokal fil",
    // [Auto-translated] "Placeholder text for Camera"
    photoPlaceholder: "Pladsholdertekst til kamera",
    // [Auto-translated] "Placeholder text for Local file or Camera"
    fileOrPhotoPlaceholder: "Pladsholdertekst til lokal fil eller kamera",
    // [Auto-translated] "Rating icon"
    rateType: "Bedømmelse ikon",
    // [Auto-translated] "Ex.: https://api.example.com/books"
    url_placeholder: "Eks.: https://api.example.com/books",
    // [Auto-translated] "Ex.: categories.fiction"
    path_placeholder: "Eks.: kategorier.fiktion",
    // [Auto-translated] "Ex.: a)"
    questionStartIndex_placeholder: "Eks.: a)",
    // [Auto-translated] "Ex.: 6in"
    width_placeholder: "Eks.: 6in",
    // [Auto-translated] "Ex.: 600px"
    minWidth_placeholder: "Eks.: 600px",
    // [Auto-translated] "Ex.: 50%"
    maxWidth_placeholder: "Eks.: 50%",
    // "auto"
    imageHeight_placeholder: "auto",
    // "auto"
    imageWidth_placeholder: "auto",
    // [Auto-translated] "Ex.: 100px"
    itemTitleWidth_placeholder: "Eks.: 100px",
    theme: {
      // [Auto-translated] "Theme"
      themeName: "Tema",
      // [Auto-translated] "Question appearance"
      isPanelless: "Spørgsmål udseende",
      // [Auto-translated] "Background and corner radius"
      editorPanel: "Baggrund og hjørneradius",
      // [Auto-translated] "Background and corner radius"
      questionPanel: "Baggrund og hjørneradius",
      // [Auto-translated] "Accent color"
      primaryColor: "Accent farve",
      // [Auto-translated] "Panel and question box opacity"
      panelBackgroundTransparency: "Panel- og spørgsmålsboksopacitet",
      // [Auto-translated] "Input element opacity"
      questionBackgroundTransparency: "Opacitet for inputelement",
      // [Auto-translated] "Survey font size"
      fontSize: "Skriftstørrelse på undersøgelse",
      // [Auto-translated] "Survey scale factor"
      scale: "Skalafaktor for undersøgelse",
      // [Auto-translated] "Corner radius"
      cornerRadius: "Hjørne radius",
      // [Auto-translated] "Advanced mode"
      advancedMode: "Avanceret tilstand",
      // [Auto-translated] "Title font"
      pageTitle: "Titel skrifttype",
      // [Auto-translated] "Description font"
      pageDescription: "Beskrivelse skrifttype",
      // [Auto-translated] "Title font"
      questionTitle: "Titel skrifttype",
      // [Auto-translated] "Description font"
      questionDescription: "Beskrivelse skrifttype",
      // [Auto-translated] "Font"
      editorFont: "Skrifttype",
      // [Auto-translated] "Opacity"
      backgroundOpacity: "Opacitet", // Auto-generated string
      // [Auto-translated] "Survey font family"
      "--sjs-font-family": "Skrifttypefamilie til undersøgelser",
      // [Auto-translated] "Background color"
      "--sjs-general-backcolor-dim": "Baggrundsfarve",
      // [Auto-translated] "Accent background colors"
      "--sjs-primary-backcolor": "Baggrundsfarver med accent",
      // [Auto-translated] "Accent foreground colors"
      "--sjs-primary-forecolor": "Accentfarver i forgrunden",
      // [Auto-translated] "Error message colors"
      "--sjs-special-red": "Farver på fejlmeddelelser",
      // [Auto-translated] "Shadow effects"
      "--sjs-shadow-small": "Skyggeeffekter",
      // [Auto-translated] "Shadow effects"
      "--sjs-shadow-inner": "Skyggeeffekter",
      // [Auto-translated] "Colors"
      "--sjs-border-default": "Farver"
    },
    "header@header": {
      // [Auto-translated] "View"
      headerView: "Udsigt",
      // [Auto-translated] "Logo alignment"
      logoPosition: "Justering af logo",
      // [Auto-translated] "Survey title font"
      surveyTitle: "Skrifttype for undersøgelsestitel",
      // [Auto-translated] "Survey description font"
      surveyDescription: "Skrifttype til undersøgelsesbeskrivelse",
      // [Auto-translated] "Survey title font"
      headerTitle: "Skrifttype for undersøgelsestitel",
      // [Auto-translated] "Survey description font"
      headerDescription: "Skrifttype til undersøgelsesbeskrivelse",
      // [Auto-translated] "Content area width"
      inheritWidthFrom: "Bredde på indholdsområde",
      // [Auto-translated] "Text width"
      textAreaWidth: "Tekstbredde",
      // [Auto-translated] "Background color"
      backgroundColorSwitch: "Baggrundsfarve",
      // [Auto-translated] "Background image"
      backgroundImage: "Baggrundsbillede",
      // [Auto-translated] "Opacity"
      backgroundImageOpacity: "Opacitet",
      // [Auto-translated] "Overlap"
      overlapEnabled: "Overlapning",
      // [Auto-translated] "Logo alignment"
      logoPositionX: "Justering af logo",
      // [Auto-translated] "Survey title alignment"
      titlePositionX: "Justering af undersøgelsens titel",
      // [Auto-translated] "Survey description alignment"
      descriptionPositionX: "Justering af undersøgelsesbeskrivelse"
    }
  },
  // Property values
  pv: {
    // [Auto-translated] "true"
    "true": "sand",
    // [Auto-translated] "false"
    "false": "falsk",
    // [Auto-translated] "Local file"
    file: "Lokal fil",
    // [Auto-translated] "Camera"
    camera: "Kamera",
    // [Auto-translated] "Local file or Camera"
    "file-camera": "Lokal fil eller kamera",
    // "Inherit"
    inherit: "inherit",
    // "Visible"
    show: "show",
    // "Hidden"
    hide: "hide",
    // "Inherit"
    default: "default",
    // "Initial"
    initial: "initial",
    // "Random"
    random: "random",
    // "Collapsed"
    collapsed: "collapsed",
    // "Expanded"
    expanded: "expanded",
    // "None"
    none: "none",
    // "Ascending"
    asc: "ascending",
    // "Descending"
    desc: "descending",
    // "Indeterminate"
    indeterminate: "indeterminate",
    // [Auto-translated] "Selected"
    selected: "Valgte",
    // [Auto-translated] "Unselected"
    unselected: "Markerede",
    // [Auto-translated] "decimal"
    decimal: "decimal",
    // [Auto-translated] "currency"
    currency: "valuta",
    // [Auto-translated] "percent"
    percent: "procent",
    // "First panel is expanded"
    firstExpanded: "firstExpanded",
    // "Hide question numbers"
    off: "off",
    // "List"
    list: "list",
    // [Auto-translated] "Carousel"
    carousel: "Karrusel",
    // [Auto-translated] "Tabs"
    tab: "Faner",
    // "Panel navigator + Progress bar at the top"
    progressTop: "progressTop",
    // "Panel navigator + Progress bar at the bottom"
    progressBottom: "progressBottom",
    // "Panel navigator + Progress bar at the top and bottom"
    progressTopBottom: "progressTopBottom",
    // "Horizontal"
    horizontal: "horizontal",
    // "Vertical"
    vertical: "vertical",
    // "Top"
    top: "top",
    // "Bottom"
    bottom: "bottom",
    // "Top and bottom"
    topBottom: "top and bottom",
    // [Auto-translated] "Both"
    both: "Begge",
    // "Left"
    left: "left",
    // [Auto-translated] "Right"
    right: "Højre",
    // [Auto-translated] "Center"
    center: "Midte",
    // [Auto-translated] "Left and right"
    leftRight: "Venstre og højre",
    // [Auto-translated] "Middle"
    middle: "Midte",
    // [Auto-translated] "color"
    color: "farve",
    // [Auto-translated] "date"
    date: "dato",
    // [Auto-translated] "datetime"
    datetime: "datetime",
    // [Auto-translated] "datetime-local"
    "datetime-local": "datetime-lokal",
    // [Auto-translated] "email"
    email: "E-mail",
    // [Auto-translated] "month"
    month: "måned",
    // [Auto-translated] "number"
    number: "tal",
    // [Auto-translated] "password"
    password: "kodeord",
    // [Auto-translated] "range"
    range: "interval",
    // [Auto-translated] "tel"
    tel: "Tel",
    // [Auto-translated] "text"
    text: "Tekst",
    // [Auto-translated] "time"
    time: "Tidspunkt",
    // [Auto-translated] "url"
    url: "URL-adresse",
    // [Auto-translated] "week"
    week: "uge",
    // "Hidden"
    hidden: "hidden",
    // "Editable"
    edit: "edit",
    // "Read-only"
    display: "display",
    // [Auto-translated] "Contain"
    contain: "Indeholde",
    // [Auto-translated] "Cover"
    cover: "Dække",
    // [Auto-translated] "Fill"
    fill: "Fylde",
    // [Auto-translated] "Next"
    next: "Næste",
    // [Auto-translated] "Last"
    last: "Sidst",
    // "Upon survey completion"
    onComplete: "onComplete",
    // "When question gets hidden"
    onHidden: "onHidden",
    // [Auto-translated] "When question or its panel/page gets hidden"
    onHiddenContainer: "Når spørgsmålet eller dets panel/side bliver skjult",
    clearInvisibleValues: {
      // [Auto-translated] "Never"
      none: "Aldrig"
    },
    clearIfInvisible: {
      // [Auto-translated] "Never"
      none: "Aldrig"
    },
    // [Auto-translated] "Radio Buttons"
    radio: "Alternativknapper",
    inputType: {
      // [Auto-translated] "Color"
      color: "Farve",
      // [Auto-translated] "Date"
      date: "Dato",
      // [Auto-translated] "Date and Time"
      "datetime-local": "Dato og klokkeslæt",
      // [Auto-translated] "Email"
      email: "E-mail",
      // [Auto-translated] "Month"
      month: "Måned",
      // [Auto-translated] "Number"
      number: "Tal",
      // [Auto-translated] "Password"
      password: "Kodeord",
      // [Auto-translated] "Range"
      range: "Interval",
      // [Auto-translated] "Phone Number"
      tel: "Telefonnummer",
      // [Auto-translated] "Text"
      text: "Tekst",
      // [Auto-translated] "Time"
      time: "Tidspunkt",
      // [Auto-translated] "URL"
      url: "URL-adresse",
      // [Auto-translated] "Week"
      week: "Uge"
    },
    sliderType: {
      // [Auto-translated] "Single-Value"
      single: "Enkelt værdi",
      // [Auto-translated] "Range"
      range: "Interval"
    },
    tooltipVisibility: {
      // [Auto-translated] "Auto"
      auto: "Auto",
      // [Auto-translated] "Always"
      always: "Altid",
      // [Auto-translated] "Never"
      never: "Aldrig"
    },
    notificationType: {
      // [Auto-translated] "Error"
      error: "Fejl",
      // [Auto-translated] "Warning"
      warning: "Advarsel",
      // [Auto-translated] "Informational note"
      info: "Informativ note"
    },
    autocomplete: {
      // [Auto-translated] "Full Name"
      name: "Fulde navn",
      // [Auto-translated] "Prefix"
      "honorific-prefix": "Præfiks",
      // [Auto-translated] "First Name"
      "given-name": "Fornavn",
      // [Auto-translated] "Middle Name"
      "additional-name": "Mellemnavn",
      // [Auto-translated] "Last Name"
      "family-name": "Efternavn",
      // [Auto-translated] "Suffix"
      "honorific-suffix": "Suffiks",
      // [Auto-translated] "Nickname"
      nickname: "Kælenavn",
      // [Auto-translated] "Job Title"
      "organization-title": "Stillingsbetegnelse",
      // [Auto-translated] "User Name"
      username: "Brugernavn",
      // [Auto-translated] "New Password"
      "new-password": "Ny adgangskode",
      // [Auto-translated] "Current Password"
      "current-password": "Nuværende adgangskode",
      // [Auto-translated] "Organization Name"
      organization: "Organisationens navn",
      // [Auto-translated] "Full Street Address"
      "street-address": "Fuld gadeadresse",
      // [Auto-translated] "Address Line 1"
      "address-line1": "Adresse Linje 1",
      // [Auto-translated] "Address Line 2"
      "address-line2": "Adresselinje 2",
      // [Auto-translated] "Address Line 3"
      "address-line3": "Adresselinje 3",
      // [Auto-translated] "Level 4 Address"
      "address-level4": "Niveau 4-adresse",
      // [Auto-translated] "Level 3 Address"
      "address-level3": "Niveau 3-adresse",
      // [Auto-translated] "Level 2 Address"
      "address-level2": "Niveau 2-adresse",
      // [Auto-translated] "Level 1 Address"
      "address-level1": "Niveau 1-adresse",
      // [Auto-translated] "Country Code"
      country: "Landekode",
      // [Auto-translated] "Country Name"
      "country-name": "Landets navn",
      // [Auto-translated] "Postal Code"
      "postal-code": "Postnummer",
      // [Auto-translated] "Cardholder Name"
      "cc-name": "Kortindehaverens navn",
      // [Auto-translated] "Cardholder First Name"
      "cc-given-name": "Kortholder Fornavn",
      // [Auto-translated] "Cardholder Middle Name"
      "cc-additional-name": "Kortholder mellemnavn",
      // [Auto-translated] "Cardholder Last Name"
      "cc-family-name": "Kortholderens efternavn",
      // [Auto-translated] "Credit Card Number"
      "cc-number": "Kreditkortnummer",
      // [Auto-translated] "Expiration Date"
      "cc-exp": "Udløbsdato",
      // [Auto-translated] "Expiration Month"
      "cc-exp-month": "Udløbsmåned",
      // [Auto-translated] "Expiration Year"
      "cc-exp-year": "Udløbsår",
      // [Auto-translated] "Card Security Code"
      "cc-csc": "Kortets sikkerhedskode",
      // [Auto-translated] "Credit Card Type"
      "cc-type": "Kreditkort type",
      // [Auto-translated] "Transaction Currency"
      "transaction-currency": "Transaktionens valuta",
      // [Auto-translated] "Transaction Amount"
      "transaction-amount": "Posteringsbeløb",
      // [Auto-translated] "Preferred Language"
      language: "Foretrukket sprog",
      // [Auto-translated] "Birthday"
      bday: "Fødselsdag",
      // [Auto-translated] "Birthday Day"
      "bday-day": "Fødselsdag",
      // [Auto-translated] "Birthday Month"
      "bday-month": "Fødselsdag måned",
      // [Auto-translated] "Birthday Year"
      "bday-year": "Fødselsdag År",
      // [Auto-translated] "Gender"
      sex: "Køn",
      // [Auto-translated] "Website URL"
      url: "URL-adresse til websted",
      // [Auto-translated] "Profile Photo"
      photo: "Profilfoto",
      // [Auto-translated] "Telephone Number"
      tel: "Telefonnummer",
      // [Auto-translated] "Country Code for Phone"
      "tel-country-code": "Landekode til telefon",
      // [Auto-translated] "National Telephone Number"
      "tel-national": "Nationalt telefonnummer",
      // [Auto-translated] "Area Code"
      "tel-area-code": "Områdenummer",
      // [Auto-translated] "Local Phone Number"
      "tel-local": "Lokalt telefonnummer",
      // [Auto-translated] "Local Phone Prefix"
      "tel-local-prefix": "Lokalt telefonpræfiks",
      // [Auto-translated] "Local Phone Suffix"
      "tel-local-suffix": "Lokalt telefonsuffiks",
      // [Auto-translated] "Phone Extension"
      "tel-extension": "Telefon Lokalnummer",
      // [Auto-translated] "Email Address"
      email: "E-mailadresse",
      // [Auto-translated] "Instant Messaging Protocol"
      impp: "Protokol til onlinemeddelelser"
    },
    maskType: {
      // [Auto-translated] "None"
      none: "Ingen",
      // [Auto-translated] "Pattern"
      pattern: "Mønster",
      // [Auto-translated] "Numeric"
      numeric: "Numerisk",
      // [Auto-translated] "Date and Time"
      datetime: "Dato og klokkeslæt",
      // [Auto-translated] "Currency"
      currency: "Valuta"
    },
    inputTextAlignment: {
      // [Auto-translated] "Auto"
      auto: "Auto",
      // [Auto-translated] "Left"
      left: "Venstre",
      // [Auto-translated] "Right"
      right: "Højre"
    },
    // "All"
    all: "all",
    // "Page"
    page: "page",
    // "Survey"
    survey: "survey",
    // "When switching to the next page"
    onNextPage: "onNextPage",
    // "After an answer is changed"
    onValueChanged: "onValueChanged",
    // [Auto-translated] "Before an answer is changed"
    onValueChanging: "Før et svar ændres",
    questionsOnPageMode: {
      // [Auto-translated] "Original structure"
      standard: "Oprindelig struktur",
      // [Auto-translated] "Show all questions on one page"
      singlePage: "Vis alle spørgsmål på én side",
      // [Auto-translated] "Show single question per page"
      questionPerPage: "Vis et enkelt spørgsmål pr. side",
      // [Auto-translated] "Show single input field per page"
      inputPerPage: "Vis et enkelt indtastningsfelt pr. side"
    },
    // [Auto-translated] "No preview"
    noPreview: "Ingen forhåndsvisning",
    // [Auto-translated] "Show all questions"
    showAllQuestions: "Vis alle spørgsmål",
    // [Auto-translated] "Show answered questions only"
    showAnsweredQuestions: "Vis kun besvarede spørgsmål",
    // [Auto-translated] "Show all questions"
    allQuestions: "Vis alle spørgsmål",
    // [Auto-translated] "Show answered questions only"
    answeredQuestions: "Vis kun besvarede spørgsmål",
    // [Auto-translated] "Completed pages"
    pages: "Afsluttede sider",
    // [Auto-translated] "Answered questions"
    questions: "Besvarede spørgsmål",
    // [Auto-translated] "Answered required questions"
    requiredQuestions: "Besvarede nødvendige spørgsmål",
    // [Auto-translated] "Valid answers"
    correctQuestions: "Gyldige svar",
    // [Auto-translated] "Completed pages (button UI)"
    buttons: "Afsluttede sider (knapbrugergrænseflade)",
    // [Auto-translated] "Under the input field"
    underInput: "Under indtastningsfeltet",
    // [Auto-translated] "Under the question title"
    underTitle: "Under spørgsmålets titel",
    // [Auto-translated] "On lost focus"
    onBlur: "Om mistet fokus",
    // [Auto-translated] "While typing"
    onTyping: "Mens du skriver",
    // [Auto-translated] "Under the row"
    underRow: "Under rækken",
    // [Auto-translated] "Under the row, display one section only"
    underRowSingle: "Under rækken skal du kun få vist én sektion",
    // "Auto"
    auto: "Auto",
    showNavigationButtons: {
      // [Auto-translated] "Hidden"
      none: "Skjult"
    },
    timerInfoMode: {
      // "Both"
      combined: "Begge"
    },
    addRowButtonLocation: {
      // [Auto-translated] "Based on matrix layout"
      default: "Baseret på matrixlayout"
    },
    panelsState: {
      // [Auto-translated] "Locked"
      default: "Låst",
      // [Auto-translated] "Collapse all"
      collapsed: "Skjul alle",
      // [Auto-translated] "Expand all"
      expanded: "Udvid alle",
      // [Auto-translated] "First expanded"
      firstExpanded: "Først udvidet"
    },
    widthMode: {
      // [Auto-translated] "Static"
      static: "Statisk",
      // [Auto-translated] "Responsive"
      responsive: "Lydhør"
    },
    contentMode: {
      // [Auto-translated] "Image"
      image: "Billede",
      // [Auto-translated] "Video"
      video: "Video",
      // [Auto-translated] "YouTube"
      youtube: "YouTube"
    },
    displayMode: {
      // [Auto-translated] "Buttons"
      buttons: "Knapper",
      // [Auto-translated] "Dropdown"
      dropdown: "Rullemenu"
    },
    rateColorMode: {
      // [Auto-translated] "Default"
      default: "Standard",
      // [Auto-translated] "Scale"
      scale: "Skæl"
    },
    scaleColorMode: {
      // [Auto-translated] "Monochrome"
      monochrome: "Monokrom",
      // [Auto-translated] "Colored"
      colored: "Farvet"
    },
    autoGenerate: {
      // [Auto-translated] "Auto-generate"
      "true": "Automatisk generering",
      // [Auto-translated] "Manual"
      "false": "Manual"
    },
    rateType: {
      // [Auto-translated] "Labels"
      labels: "Etiketter",
      // [Auto-translated] "Stars"
      stars: "Stjerner",
      // [Auto-translated] "Smileys"
      smileys: "Smileys"
    },
    state: {
      // [Auto-translated] "Locked"
      default: "Låst"
    },
    showQuestionNumbers: {
      // [Auto-translated] "Auto-numbering"
      default: "Automatisk nummerering",
      // [Auto-translated] "Auto-numbering"
      on: "Automatisk nummerering",
      // [Auto-translated] "Reset on each page"
      onPage: "Nulstil på hver side",
      // [Auto-translated] "Reset on each panel"
      onpanel: "Nulstil på hvert panel",
      // [Auto-translated] "Reset on each panel"
      onPanel: "Nulstil på hvert panel",
      // [Auto-translated] "Recursive numbering"
      recursive: "Rekursiv nummerering",
      // [Auto-translated] "Continue across the survey"
      onSurvey: "Fortsæt på tværs af undersøgelsen",
      // [Auto-translated] "No numbering"
      off: "Ingen nummerering"
    },
    descriptionLocation: {
      // [Auto-translated] "Under the question title"
      underTitle: "Under spørgsmålets titel",
      // [Auto-translated] "Under the input field"
      underInput: "Under indtastningsfeltet"
    },
    selectToRankAreasLayout: {
      // [Auto-translated] "Next to choices"
      horizontal: "Ved siden af valgmuligheder",
      // [Auto-translated] "Above choices"
      vertical: "Ovenstående valg"
    },
    displayStyle: {
      // [Auto-translated] "Decimal"
      decimal: "Decimal",
      // [Auto-translated] "Currency"
      currency: "Valuta",
      // [Auto-translated] "Percentage"
      percent: "Procentdel",
      // [Auto-translated] "Date"
      date: "Dato"
    },
    totalDisplayStyle: {
      // [Auto-translated] "Decimal"
      decimal: "Decimal",
      // [Auto-translated] "Currency"
      currency: "Valuta",
      // [Auto-translated] "Percentage"
      percent: "Procentdel",
      // [Auto-translated] "Date"
      date: "Dato"
    },
    rowOrder: {
      // [Auto-translated] "Original"
      initial: "Oprindelig"
    },
    questionOrder: {
      // [Auto-translated] "Original"
      initial: "Oprindelig"
    },
    progressBarLocation: {
      // [Auto-translated] "Top"
      top: "Top",
      // [Auto-translated] "Bottom"
      bottom: "Bund",
      // [Auto-translated] "Top and bottom"
      topbottom: "Top og bund",
      // [Auto-translated] "Above the header"
      aboveheader: "Over overskriften",
      // [Auto-translated] "Below the header"
      belowheader: "Under overskriften",
      // [Auto-translated] "Hidden"
      off: "Skjult"
    },
    // [Auto-translated] "Sum"
    sum: "Sum",
    // [Auto-translated] "Count"
    count: "Tælle",
    // [Auto-translated] "Min"
    min: "Min.",
    // [Auto-translated] "Max"
    max: "Maks",
    // [Auto-translated] "Avg"
    avg: "Avg",
    searchMode: {
      // [Auto-translated] "Contains"
      contains: "Indeholder",
      // [Auto-translated] "Starts with"
      startsWith: "Begynder med"
    },
    backgroundImageFit: {
      // [Auto-translated] "Auto"
      auto: "Auto",
      // [Auto-translated] "Cover"
      cover: "Dække",
      // [Auto-translated] "Contain"
      contain: "Indeholde",
      // [Auto-translated] "Stretch"
      fill: "Stræk",
      // [Auto-translated] "Tile"
      tile: "Flise"
    },
    backgroundImageAttachment: {
      // [Auto-translated] "Fixed"
      fixed: "Fast",
      // [Auto-translated] "Scroll"
      scroll: "Rulle"
    },
    headerView: {
      // [Auto-translated] "Basic"
      basic: "Grundlæggende",
      // [Auto-translated] "Advanced"
      advanced: "Avanceret"
    },
    inheritWidthFrom: {
      // [Auto-translated] "Same as survey"
      survey: "Samme som undersøgelse",
      // [Auto-translated] "Same as container"
      container: "Samme som container"
    },
    backgroundColorSwitch: {
      // [Auto-translated] "None"
      none: "Ingen",
      // [Auto-translated] "Accent color"
      accentColor: "Accent farve",
      // [Auto-translated] "Custom"
      custom: "Sædvane"
    },
    colorPalette: {
      // [Auto-translated] "Light"
      light: "Lys",
      // [Auto-translated] "Dark"
      dark: "Mørk"
    },
    isPanelless: {
      // [Auto-translated] "Default"
      "false": "Standard",
      // [Auto-translated] "Without Panels"
      "true": "Uden paneler"
    },
    progressBarInheritWidthFrom: {
      // [Auto-translated] "Same as survey"
      survey: "Samme som undersøgelse",
      // [Auto-translated] "Same as container"
      container: "Samme som container"
    }
  },
  // Operators
  op: {
    // "Empty"
    empty: "is empty",
    // "Not empty"
    notempty: "is not empty",
    // "Equals"
    equal: "equals",
    // "Does not equal"
    notequal: "not equals",
    // "Contains"
    contains: "contains",
    // "Does not contain"
    notcontains: "not contains",
    // [Auto-translated] "Any of"
    anyof: "Enhver af",
    // [Auto-translated] "All of"
    allof: "Alle af",
    // "Greater than"
    greater: "greater",
    // "Less than"
    less: "less",
    // "Greater than or equal to"
    greaterorequal: "greater or equals",
    // "Less than or equal to"
    lessorequal: "less or equals",
    // [Auto-translated] "and"
    and: "og",
    // [Auto-translated] "or"
    or: "eller"
  },
  // Embed window
  ew: {
    // "Use Angular version"
    angular: "Benyt Angular version",
    // "Use jQuery version"
    jquery: "Benyt jQuery version",
    // "Use Knockout version"
    knockout: "Benyt Knockout version",
    // "Use React version"
    react: "Benyt React version",
    // "Use Vue version"
    vue: "Benyt Vue version",
    // "For bootstrap framework"
    bootstrap: "For bootstrap framework",
    // [Auto-translated] "Modern theme"
    modern: "Moderne tema",
    // [Auto-translated] "Default theme"
    default: "Standardtema",
    // [Auto-translated] "Orange theme"
    orange: "Orange tema",
    // [Auto-translated] "Darkblue theme"
    darkblue: "Mørkeblåt tema",
    // [Auto-translated] "Darkrose theme"
    darkrose: "Temaet Darkrose",
    // [Auto-translated] "Stone theme"
    stone: "Temaet Sten",
    // [Auto-translated] "Winter theme"
    winter: "Vinter tema",
    // [Auto-translated] "Winter-Stone theme"
    winterstone: "Temaet Vintersten",
    // "Show survey on a page"
    showOnPage: "Vis undersøgelsen på en side",
    // "Show survey in a window"
    showInWindow: "Vis undersøgelsen i et vindue",
    // "Load Survey JSON from server"
    loadFromServer: "Hent undersøgelsen som JSON fra serveren",
    // "Scripts and styles"
    titleScript: "Scripts og styles",
    // "HTML"
    titleHtml: "HTML",
    // "JavaScript"
    titleJavaScript: "JavaScript"
  },
  // Preview (Survey)
  ts: {
    // "Select the page to test it"
    selectPage: "Vælg siden for at teste den:",
    // [Auto-translated] "Show invisible elements"
    showInvisibleElements: "Vis usynlige elementer",
    // [Auto-translated] "Hide invisible elements"
    hideInvisibleElements: "Skjul usynlige elementer",
    // [Auto-translated] "Previous"
    prevPage: "Tidligere",
    // [Auto-translated] "Next"
    nextPage: "Næste"
  },
  validators: {
    // "Answer count"
    answercountvalidator: "answer count",
    // "Email"
    emailvalidator: "e-mail",
    // "Expression"
    expressionvalidator: "expression",
    // "Number"
    numericvalidator: "numeric",
    // "Regex"
    regexvalidator: "regex",
    // "Text"
    textvalidator: "text"
  },
  triggers: {
    // "Complete survey"
    completetrigger: "undersøgelse gennemført",
    // "Set answer"
    setvaluetrigger: "sæt værdi",
    // "Copy answer"
    copyvaluetrigger: "kopiér værdi",
    // [Auto-translated] "Skip to question"
    skiptrigger: "Spring til spørgsmål",
    // "Run expression"
    runexpressiontrigger: "afvikl udtry",
    // "change visibility (deprecated)"
    visibletrigger: "skift synlighed"
  },
  peplaceholder: {
    patternmask: {
      // "Ex.: +1(999)-999-99-99"
      pattern: "Ex.: +1(999)-999-99-99"
    },
    datetimemask: {
      // [Auto-translated] "Ex.: mm/dd/yyyy HH:MM:ss"
      pattern: "Eks.: mm / dd / åååå HH: MM: ss"
    },
    currencymask: {
      // "Ex.: $"
      prefix: "Ex.: $",
      // "Ex.: USD"
      suffix: "Ex.: USD"
    },
    panelbase: {
      // [Auto-translated] "Ex.: 200px"
      questionTitleWidth: "Eks.: 200px"
    },
    panellayoutcolumn: {
      // "Ex.: 30%"
      effectiveWidth: "Eks.: 30%",
      // "Ex.: 200px"
      questionTitleWidth: "Eks.: 200px"
    }
  },
  pehelp: {
    panel: {
      // "A panel ID that is not visible to respondents."
      name: "Et panel-id, der ikke er synligt for svarpersonerne.",
      // [Auto-translated] "Type a panel subtitle."
      description: "Skriv en panelundertitel.",
      // "Use the magic wand icon to set a conditional rule that determines panel visibility."
      visibleIf: "Brug tryllestavsikonet til at indstille en betinget regel, der bestemmer panelets synlighed.",
      // [Auto-translated] "Use the magic wand icon to set a conditional rule that disables the read-only mode for the panel."
      enableIf: "Brug tryllestavsikonet til at indstille en betinget regel, der deaktiverer panelets skrivebeskyttede tilstand.",
      // "Use the magic wand icon to set a conditional rule that prevents survey submission unless at least one nested question has an answer."
      requiredIf: "Brug tryllestavsikonet til at angive en betinget regel, der forhindrer indsendelse af undersøgelser, medmindre mindst ét indlejret spørgsmål har et svar.",
      // [Auto-translated] "Applies to all questions within this panel. When set to \"Hidden\", it also hides question descriptions. If you want to override this setting, define title alignment rules for individual questions. The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Top\" by default). "
      questionTitleLocation: "Gælder for alle spørgsmål i dette panel. Når den er indstillet til \"Skjult\", skjuler den også beskrivelser af spørgsmål. Hvis du vil tilsidesætte denne indstilling, skal du definere regler for titeljustering for individuelle spørgsmål. Indstillingen \"Nedarv\" anvender indstillingen på sideniveau (hvis angivet) eller undersøgelsesniveau (\"Top\" som standard). ",
      // [Auto-translated] "Sets consistent width for question titles when they are aligned to the left of their question boxes. Accepts CSS values (px, %, in, pt, etc.)."
      questionTitleWidth: "Angiver ensartet bredde for spørgsmålstitler, når de er justeret til venstre for deres spørgsmålsbokse. Accepterer CSS-værdier (px, %, in, pt osv.).",
      // "Sets the location of an error message in relation to all questions within the panel. The \"Inherit\" option applies the page-level (if set) or survey-level setting."
      questionErrorLocation: "Angiver placeringen af en fejlmeddelelse i forhold til alle spørgsmål i panelet. Indstillingen \"Nedarv\" anvender indstillingen for sideniveau (hvis angivet) eller undersøgelsesniveau.",
      // [Auto-translated] "Keeps the original order of questions or randomizes them. The \"Inherit\" option applies the page-level (if set) or survey-level setting."
      questionOrder: "Bevarer den oprindelige rækkefølge af spørgsmål eller tilfældiggør dem. Indstillingen \"Nedarv\" anvender indstillingen på sideniveau (hvis angivet) eller undersøgelsesniveau.",
      // "Repositions the panel to the end of a selected page."
      page: "Flytter panelet til slutningen af en markeret side.",
      // [Auto-translated] "Adds space or margin between the panel content and the left border of the panel box."
      innerIndent: "Tilføjer mellemrum eller margen mellem panelindholdet og panelboksens venstre kant.",
      // "Unselect to display the panel in one line with the previous question or panel. The setting doesn't apply if the panel is the first element in your form."
      startWithNewLine: "Fjern markeringen for at få vist panelet på én linje med det forrige spørgsmål eller panel. Indstillingen gælder ikke, hvis panelet er det første element i formularen.",
      // "Choose from: \"Expanded\" - the panel is displayed in full and can be collapsed; \"Collapsed\" - the panel displays only the title and description and can be expanded; \"Locked\" - the panel is displayed in full and cannot be collapsed."
      state: "Vælg mellem: \"Udvidet\" - panelet vises fuldt ud og kan skjules; \"Skjult\" - panelet viser kun titlen og beskrivelsen og kan udvides; \"Låst\" - panelet vises fuldt ud og kan ikke skjules.",
      // [Auto-translated] "Sets the width of the panel in proportion to other survey elements in the same line. Accepts CSS values (px, %, in, pt, etc.)."
      width: "Indstiller panelets bredde i forhold til andre undersøgelseselementer på samme linje. Accepterer CSS-værdier (px, %, in, pt osv.).",
      // [Auto-translated] "Assigns numbers to questions nested within this panel."
      showQuestionNumbers: "Tildeler numre til spørgsmål, der er indlejret i dette panel.",
      // [Auto-translated] "Specifies how many columns this panel spans within the grid layout."
      effectiveColSpan: "Angiver, hvor mange kolonner dette panel strækker sig over i gitterlayoutet.",
      // [Auto-translated] "This table lets you configure each grid column within the panel. It automatically sets the width percentage for each column based on the maximum number of elements in a row. To customize the grid layout, manually adjust these values and define the title width for all questions in each column."
      gridLayoutColumns: "Denne tabel giver dig mulighed for at konfigurere hver gitterkolonne i panelet. Den indstiller automatisk breddeprocenten for hver kolonne baseret på det maksimale antal elementer i en række. Hvis du vil tilpasse gitterlayoutet, skal du manuelt justere disse værdier og definere titelbredden for alle spørgsmål i hver kolonne."
    },
    paneldynamic: {
      // "A panel ID that is not visible to respondents."
      name: "Et panel-id, der ikke er synligt for svarpersonerne.",
      // "Type a panel subtitle."
      description: "Skriv en undertitel til panelet.",
      // "Use the magic wand icon to set a conditional rule that determines panel visibility."
      visibleIf: "Brug tryllestavsikonet til at indstille en betinget regel, der bestemmer panelets synlighed.",
      // [Auto-translated] "Use the magic wand icon to set a conditional rule that disables the read-only mode for the panel."
      enableIf: "Brug tryllestavsikonet til at indstille en betinget regel, der deaktiverer panelets skrivebeskyttede tilstand.",
      // "Use the magic wand icon to set a conditional rule that prevents survey submission unless at least one nested question has an answer."
      requiredIf: "Brug tryllestavsikonet til at angive en betinget regel, der forhindrer indsendelse af undersøgelser, medmindre mindst ét indlejret spørgsmål har et svar.",
      // "Applies to all questions within this dynamic panel. If you want to override this setting, define title alignment rules for individual questions. The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Top\" by default)."
      templateQuestionTitleLocation: "Gælder for alle spørgsmål i dette panel. Hvis du vil tilsidesætte denne indstilling, skal du definere regler for titeljustering for individuelle spørgsmål. Indstillingen \"Nedarv\" anvender indstillingen på sideniveau (hvis angivet) eller undersøgelsesniveau (\"Top\" som standard).",
      // "Sets consistent width for question titles when they are aligned to the left of their question boxes. Accepts CSS values (px, %, in, pt, etc.)."
      templateQuestionTitleWidth: "Indstiller ensartet bredde for spørgsmålstitler, når de er justeret til venstre for deres spørgsmålsfelter. Accepterer CSS-værdier (px, %, in, pt osv.).",
      // "Sets the location of an error message in relation to a question with invalid input. Choose between: \"Top\" - an error text is placed at the top of the question box; \"Bottom\" - an error text is placed at the bottom of the question box. The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Top\" by default)."
      templateErrorLocation: "Angiver placeringen af en fejlmeddelelse i forhold til et spørgsmål med ugyldigt input. Vælg mellem: \"Top\" - en fejltekst placeres øverst i spørgsmålsfeltet; \"Nederst\" - en fejltekst placeres nederst i spørgsmålsfeltet. Indstillingen \"Nedarv\" anvender indstillingen på sideniveau (hvis angivet) eller undersøgelsesniveau (\"Top\" som standard).",
      // "Sets the location of an error message in relation to all questions within the panel. The \"Inherit\" option applies the page-level (if set) or survey-level setting."
      errorLocation: "Angiver placeringen af en fejlmeddelelse i forhold til alle spørgsmål i panelet. Indstillingen \"Nedarv\" anvender indstillingen for sideniveau (hvis angivet) eller undersøgelsesniveau.",
      // "Repositions the panel to the end of a selected page."
      page: "Flytter panelet til slutningen af en markeret side.",
      // [Auto-translated] "Adds space or margin between the panel content and the left border of the panel box."
      indent: "Tilføjer plads eller margen mellem panelindholdet og panelboksens venstre kant.",
      // "Unselect to display the panel in one line with the previous question or panel. The setting doesn't apply if the panel is the first element in your form."
      startWithNewLine: "Fjern markeringen for at få vist panelet på én linje med det forrige spørgsmål eller panel. Indstillingen gælder ikke, hvis panelet er det første element i formularen.",
      // "Choose from: \"Expanded\" - the panel is displayed in full and can be collapsed; \"Collapsed\" - the panel displays only the title and description and can be expanded; \"Locked\" - the panel is displayed in full and cannot be collapsed."
      state: "Vælg mellem: \"Udvidet\" - panelet vises fuldt ud og kan skjules; \"Skjult\" - panelet viser kun titlen og beskrivelsen og kan udvides; \"Låst\" - panelet vises fuldt ud og kan ikke skjules.",
      // "Sets the width of the panel in proportion to other survey elements in the same line. Accepts CSS values (px, %, in, pt, etc.)."
      width: "Indstiller panelets bredde i forhold til andre undersøgelseselementer på samme linje. Accepterer CSS-værdier (px, %, in, pt osv.).",
      // "Type in a template for entry titles. Use {panelIndex} for the entry's general position and {visiblePanelIndex} for its order among visible entries. Insert these placeholders into the pattern to add automatic numbering."
      templateTitle: "Indtast en skabelon til dynamiske paneltitler. Brug {panelIndex} til panelets generelle placering og {visiblePanelIndex} til dets rækkefølge blandt synlige paneler. Indsæt disse pladsholdere i mønsteret for at tilføje automatisk nummerering.",
      // "Type in a template for tab titles. Use {panelIndex} for an entry's general position and {visiblePanelIndex} for its order among visible entries. Insert these placeholders into the pattern to add automatic numbering."
      templateTabTitle: "Indtast en skabelon til fanetitler. Brug {panelIndex} til et panels generelle placering og {visiblePanelIndex} til dets rækkefølge blandt synlige paneler. Indsæt disse pladsholdere i mønsteret for at tilføje automatisk nummerering.",
      // "A fallback text for tab titles that applies when the tab title pattern doesn't produce a meaningful value."
      tabTitlePlaceholder: "En reservetekst til fanetitler, der gælder, når fanetitelmønsteret ikke giver en meningsfuld værdi.",
      // "This setting allows you to control the visibility of individual entries within the dynamic panel. Use the `{panel}` placeholder to reference the current entry in your expression."
      templateVisibleIf: "Denne indstilling giver dig mulighed for at styre synligheden af individuelle paneler i det dynamiske panel. Brug pladsholderen '{panel}' til at referere til det aktuelle panel i dit udtryk.",
      // "This setting is automatically inherited by all questions within this dynamic panel. If you want to override this setting, define title alignment rules for individual questions. The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Top\" by default)."
      titleLocation: "Denne indstilling nedarves automatisk af alle spørgsmål i dette panel. Hvis du vil tilsidesætte denne indstilling, skal du definere regler for titeljustering for individuelle spørgsmål. Indstillingen \"Nedarv\" anvender indstillingen på sideniveau (hvis angivet) eller undersøgelsesniveau (\"Top\" som standard).",
      // "The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Under the panel title\" by default)."
      descriptionLocation: "Indstillingen \"Nedarv\" anvender indstillingen på sideniveau (hvis angivet) eller undersøgelsesniveau (\"Under paneltitlen\" som standard).",
      // "Defines the position of a newly added entry. By default, new entries are added to the end. Select \"Next\" to insert a new entry after the current one."
      newPanelPosition: "Definerer placeringen af et nyligt tilføjet panel. Som standard tilføjes nye paneler til slutningen. Vælg \"Næste\" for at indsætte et nyt panel efter det aktuelle.",
      // [Auto-translated] "Duplicates answers from the last entry and assigns them to the next added entry."
      copyDefaultValueFromLastEntry: "Duplikerer svar fra den sidste post og tildeler dem til den næste tilføjede post.",
      // "Reference a question name to require a user to provide a unique response for this question in each entry."
      keyName: "Henvis til et spørgsmålsnavn for at kræve, at en bruger giver et entydigt svar på dette spørgsmål i hvert panel.",
      // [Auto-translated] "Triggers a confirmation prompt before removing an entry."
      confirmDelete: "Udløser en bekræftelsesprompt, før en post fjernes."
    },
    matrixdynamic: {
      // [Auto-translated] "Triggers a confirmation prompt before removing a row."
      confirmDelete: "Udløser en bekræftelsesprompt, før en række fjernes.",
      // [Auto-translated] "Automatically expands the detail section when a new row is added to the matrix."
      detailPanelShowOnAdding: "Udvider automatisk detaljesektionen, når en ny række føjes til matrixen."
    },
    // "Duplicates answers from the last row and assigns them to the next added dynamic row."
    copyDefaultValueFromLastEntry: "Dublerer svar fra den sidste række og tildeler dem til den næste tilføjede dynamiske række.",
    // [Auto-translated] "This setting allows you to assign a default answer value based on an expression. The expression can include basic calculations - `{q1_id} + {q2_id}`, Boolean expressions, such as `{age} > 60`, and functions: `iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, etc. The value determined by this expression serves as the initial default value that can be overridden by a respondent's manual input."
    defaultValueExpression: "Med denne indstilling kan du tildele en standardsvarværdi baseret på et udtryk. Udtrykket kan omfatte grundlæggende beregninger - '{q1_id} + {q2_id}', booleske udtryk, såsom '{alder} > 60' og funktioner: 'iif()', 'today()', 'age()', 'min()', 'max()', 'avg()' osv. Den værdi, der bestemmes af dette udtryk, fungerer som den oprindelige standardværdi, der kan tilsidesættes af svarpersonens manuelle input.",
    // "Use the magic wand icon to set a conditional rule that determines when a respondent's input is reset to the value based on the \"Default value expression\" or \"Set value expression\" or to the \"Default answer\" value (if either is set)."
    resetValueIf: "Brug tryllestavsikonet til at angive en betinget regel, der bestemmer, hvornår en svarpersons input nulstilles til værdien baseret på værdien \"Standardværdiudtryk\" eller \"Angiv værdiudtryk\" eller til værdien \"Standardsvar\" (hvis en af dem er angivet).",
    // "Use the magic wand icon to set a conditional rule that determines when to run the \"Set value expression\" and dynamically assign the resulting value as a response."
    setValueIf: "Brug tryllestavsikonet til at indstille en betinget regel, der bestemmer, hvornår \"Indstil værdiudtryk\" skal køres, og tildele den resulterende værdi dynamisk som et svar.",
    // "Specify an expression that defines the value to be set when the conditions in the \"Set value if\" rule are met. The expression can include basic calculations - `{q1_id} + {q2_id}`, Boolean expressions, such as `{age} > 60`, and functions: `iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, etc. The value determined by this expression can be overridden by a respondent's manual input."
    setValueExpression: "Angiv et udtryk, der definerer den værdi, der skal angives, når betingelserne i reglen \"Angiv værdi hvis\" er opfyldt. Udtrykket kan omfatte grundlæggende beregninger - '{q1_id} + {q2_id}', booleske udtryk, såsom '{alder} > 60' og funktioner: 'iif()', 'today()', 'age()', 'min()', 'max()', 'avg()' osv. Den værdi, der bestemmes af dette udtryk, kan tilsidesættes af svarpersonens manuelle input.",
    // "Survey Creator allows you to manually adjust the inline widths of form elements to control the layout. If this doesn't produce the desired outcome, you can enable the grid layout, which structures form elements using a column-based system. To configure layout columns, select a page or panel and use the \"Question Settings\" → \"Grid columns\" table. To adjust how many columns a question spans, select it and set the desired value in the \"Layout\" → \"Column span\" field."
    gridLayoutEnabled: "Survey Creator giver dig mulighed for manuelt at justere de indbyggede bredder af formularelementer for at styre layoutet. Hvis dette ikke giver det ønskede resultat, kan du aktivere gitterlayoutet, som strukturerer formularelementer ved hjælp af et kolonnebaseret system. For at konfigurere layoutkolonner skal du vælge en side eller et panel og bruge tabellen \"Spørgsmålsindstillinger\" → \"Gitterkolonner\". For at justere, hvor mange kolonner et spørgsmål strækker sig over, skal du vælge det og indstille den ønskede værdi i feltet \"Layout\" → \"Kolonnespænd\".",
    question: {
      // "A question ID that is not visible to respondents."
      name: "Et spørgsmåls-id, der ikke er synligt for svarpersonerne.",
      // "Type a question subtitle."
      description: "Skriv et spørgsmåls undertitel.",
      // "Use the magic wand icon to set a conditional rule that determines question visibility."
      visibleIf: "Brug tryllestavsikonet til at angive en betinget regel, der bestemmer spørgsmålets synlighed.",
      // [Auto-translated] "Use the magic wand icon to set a conditional rule that disables the read-only mode for the question."
      enableIf: "Brug tryllestavsikonet til at angive en betinget regel, der deaktiverer skrivebeskyttet tilstand for spørgsmålet.",
      // "Use the magic wand icon to set a conditional rule that prevents survey advancing or submission unless the question received an answer."
      requiredIf: "Brug tryllestavsikonet til at angive en betinget regel, der forhindrer undersøgelse i at gå videre eller blive sendt, medmindre spørgsmålet blev besvaret.",
      // [Auto-translated] "Unselect to display the question in one line with the previous question or panel. The setting doesn't apply if the question is the first element in your form."
      startWithNewLine: "Fjern markeringen for at få vist spørgsmålet på én linje med det forrige spørgsmål eller panel. Indstillingen gælder ikke, hvis spørgsmålet er det første element i formularen.",
      // "Repositions the question to the end of a selected page."
      page: "Flytter spørgsmålet til slutningen af en markeret side.",
      // "Choose from: \"Expanded\" - the question box is displayed in full and can be collapsed; \"Collapsed\" - the question box displays only the title and description and can be expanded; \"Locked\" - the question box is displayed in full and cannot be collapsed."
      state: "Vælg mellem: \"Udvidet\" - spørgsmålsfeltet vises fuldt ud og kan skjules; \"Skjult\" - spørgsmålsfeltet viser kun titlen og beskrivelsen og kan udvides; \"Låst\" - spørgsmålsfeltet vises fuldt ud og kan ikke skjules.",
      // "Overrides title alignment rules defined on a panel, page, or survey level. When set to \"Hidden\", it also hides question descriptions. The \"Inherit\" option applies any higher-level settings (if set) or survey-level setting (\"Top\" by default)."
      titleLocation: "Tilsidesætter regler for titeljustering, der er defineret på panel-, side- eller undersøgelsesniveau. Indstillingen \"Nedarv\" anvender alle indstillinger på højere niveau (hvis indstillet) eller indstilling på undersøgelsesniveau (\"Top\" som standard).",
      // "The \"Inherit\" option applies the survey-level setting (\"Under the question title\" by default)."
      descriptionLocation: "Indstillingen \"Nedarv\" anvender indstillingen på undersøgelsesniveau (\"Under spørgsmålets titel\" som standard).",
      // "Sets the location of an error message in relation to the question with invalid input. Choose between: \"Top\" - an error text is placed at the top of the question box; \"Bottom\" - an error text is placed at the bottom of the question box. The \"Inherit\" option applies the survey-level setting (\"Top\" by default)."
      errorLocation: "Angiver placeringen af en fejlmeddelelse i forhold til spørgsmålet med ugyldigt input. Vælg mellem: \"Top\" - en fejltekst placeres øverst i spørgsmålsfeltet; \"Nederst\" - en fejltekst placeres nederst i spørgsmålsfeltet. Indstillingen \"Nedarv\" anvender indstillingen på undersøgelsesniveau (\"Top\" som standard).",
      // "Adds space or margin between the question content and the left border of the question box."
      indent: "Tilføjer mellemrum eller margen mellem spørgsmålsindholdet og spørgsmålsfeltets venstre kant.",
      // "Sets the width of the question in proportion to other survey elements in the same line. Accepts CSS values (px, %, in, pt, etc.)."
      width: "Angiver bredden af spørgsmålet i forhold til andre undersøgelseselementer på samme linje. Accepterer CSS-værdier (px, %, in, pt osv.).",
      // "Choose from: \"On lost focus\" - the value is updated when the input field loses focus; \"While typing\" - the value is updated in real-time, as users are typing. The \"Inherit\" option applies the survey-level setting (\"On lost focus\" by default)."
      textUpdateMode: "Vælg mellem: \"Ved tabt fokus\" - værdien opdateres, når indtastningsfeltet mister fokus; \"Mens du skriver\" - værdien opdateres i realtid, da brugerne skriver. Indstillingen \"Nedarv\" anvender indstillingen på undersøgelsesniveau (\"Ved mistet fokus\" som standard).",
      // [Auto-translated] "You can use any web service as a data source for multiple-choice questions. To populate choice values, enter the URL of the service providing the data."
      url: "Du kan bruge enhver webtjeneste som datakilde til multiple choice-spørgsmål. Hvis du vil udfylde valgværdier, skal du angive URL-adressen på den tjeneste, der leverer dataene.",
      // [Auto-translated] "A comparison operation used to filter the drop-down list."
      searchMode: "En sammenligningshandling, der bruges til at filtrere rullelisten.",
      // [Auto-translated] "Long texts in choice options will automatically generate line breaks to fit within the drop-down menu. Unselect if you want the texts to clip."
      textWrapEnabled: "Lange tekster i valgmuligheder genererer automatisk linjeskift, så de passer ind i rullemenuen. Fjern markeringen, hvis teksterne skal klippes.",
      // [Auto-translated] "Specifies how many columns this question spans within the grid layout."
      effectiveColSpan: "Angiver, hvor mange kolonner dette spørgsmål strækker sig over i gitterlayoutet."
    },
    surveyvalidator: {
      // "Use the magic wand icon to define when the question's value is considered valid."
      expression: "Brug tryllestavsikonet til at definere, hvornår spørgsmålets værdi betragtes som gyldig.",
      // [Auto-translated] "Errors block progress until resolved. Warnings highlight issues but allow to continue. Informational notes offer additional context or neutral guidance. When using warnings or informational notes, we recommend enabling immediate validation: \"Survey\" → \"Validation\" → \"Run validation\" → \"After an answer has changed\"."
      notificationType: "Fejl blokerer fremskridt, indtil de er løst. Advarsler fremhæver problemer, men tillader at fortsætte. Informative noter giver yderligere kontekst eller neutral vejledning. Når du bruger advarsler eller informationsbemærkninger, anbefaler vi, at du aktiverer øjeblikkelig validering: \"Undersøgelse\" → \"Validering\" → \"Kør validering\" → \"Når et svar er ændret\"."
    },
    signaturepad: {
      // "Sets the width of the displayed signature area and the resulting image."
      signatureWidth: "Indstiller bredden på det viste signaturområde og det resulterende billede.",
      // "Sets the height of the displayed signature area and the resulting image."
      signatureHeight: "Indstiller højden på det viste signaturområde og det resulterende billede.",
      // "Select if you want the signature area to fill all available space within the question box while maintaining the default 3:2 aspect ratio. When custom width and height values are set, the setting will keep the aspect ratio of these dimensions."
      signatureAutoScaleEnabled: "Vælg, om signaturområdet skal udfylde al tilgængelig plads i spørgsmålsfeltet, samtidig med at standardformatet 3:2 bevares. Når brugerdefinerede bredde- og højdeværdier er angivet, bevarer indstillingen højde-bredde-forholdet for disse dimensioner."
    },
    file: {
      // "Specifies the display height of uploaded images in the preview and the actual height of images taken with the camera. In single file upload mode, the display height is limited by the preview area; in multiple file upload mode, it is limited by the thumbnail area."
      imageHeight: "Angiver visningshøjden for uploadede billeder i eksemplet og den faktiske højde for billeder, der er taget med kameraet. I enkeltfiloverførselstilstand er visningshøjden begrænset af forhåndsvisningsområdet; I multifiloverførselstilstand er den begrænset af miniatureområdet.",
      // "Specifies the display width of uploaded images in the preview and the actual width of images taken with the camera. In single file upload mode, the display width is limited by the preview area; in multiple file upload mode, it is limited by the thumbnail area."
      imageWidth: "Angiver visningsbredden for uploadede billeder i forhåndsvisningen og den faktiske bredde af billeder, der er taget med kameraet. I enkeltfiloverførselstilstand er visningsbredden begrænset af forhåndsvisningsområdet; I multifiloverførselstilstand er den begrænset af miniatureområdet.",
      // [Auto-translated] "Displays thumbnail previews for uploaded files when possible. Unselect if you want to show file icons instead."
      allowImagesPreview: "Viser miniaturebilleder for uploadede filer, når det er muligt. Fjern markeringen, hvis du vil vise filikoner i stedet."
    },
    image: {
      // "The \"Auto\" option automatically determines the suitable mode for display - Image, Video, or YouTube - based on the source URL provided."
      contentMode: "Indstillingen \"Auto\" bestemmer automatisk den passende tilstand til visning - Billede, Video eller YouTube - baseret på den angivne kilde-URL."
    },
    imagepicker: {
      // [Auto-translated] "Overrides the minimum and maximum height values."
      imageHeight: "Tilsidesætter minimum- og maksimumhøjdeværdierne.",
      // [Auto-translated] "Overrides the minimum and maximum width values."
      imageWidth: "Tilsidesætter værdierne for minimum- og maksimumbredde.",
      // [Auto-translated] "\"Value\" serves as an item ID used in conditional rules; \"Text\" is displayed to respondents."
      choices: "\"Værdi\" fungerer som et vare-id, der bruges i betingede regler. \"Tekst\" vises for respondenterne.",
      // "Choose between \"Image\" and \"Video\" to set the content mode of the media selector. If \"Image\" is selected, ensure that all options provided are image files in the following formats: JPEG, GIF, PNG, APNG, SVG, BMP, ICO. Similarly, if \"Video\" is selected, ensure that all options are direct links to video files in the following formats: MP4, MOV, WMV, FLV, AVI, MKV. Please note that YouTube links are not supported for video options."
      contentMode: "Vælg mellem \"Billede\" og \"Video\" for at indstille medievælgerens indholdstilstand. Hvis \"Billede\" er valgt, skal du sikre dig, at alle angivne indstillinger er billedfiler i følgende formater: JPEG, GIF, PNG, APNG, SVG, BMP, ICO. Tilsvarende, hvis \"Video\" er valgt, skal du sikre dig, at alle indstillinger er direkte links til videofiler i følgende formater: MP4, MOV, WMV, FLV, AVI, MKV. Bemærk, at YouTube-links ikke understøttes for videoindstillinger."
    },
    text: {
      // [Auto-translated] "This setting only resizes the input field and doesn't affect the width of the question box. To limit the accepted input length, go to \"Validation\" → \"Maximum character limit\"."
      size: "Denne indstilling ændrer kun størrelsen på indtastningsfeltet og påvirker ikke bredden af spørgsmålsfeltet. For at begrænse den accepterede inputlængde skal du gå til \"Validering\" → \"Maksimal tegngrænse\"."
    },
    comment: {
      // [Auto-translated] "Sets the number of displayed lines in the input field. If the input takes up more lines, the scroll bar will appear."
      rows: "Indstiller antallet af viste linjer i indtastningsfeltet. Hvis inputtet optager flere linjer, vises rullepanelet."
    },
    // survey templates
    survey: {
      // "Select if you want to prevent respondents from filling out your survey."
      readOnly: "Vælg, hvis du vil forhindre respondenter i at udfylde din undersøgelse.",
      // "Sets the location of the progress bar. The \"Auto\" value displays the progress bar above or below the survey header."
      progressBarLocation: "Angiver placeringen af statuslinjen. Værdien \"Auto\" viser statuslinjen over eller under undersøgelsesoverskriften."
    },
    matrixdropdowncolumn: {
      // "A column ID that is not visible to respondents."
      name: "Et kolonne-id, der ikke er synligt for svarpersoner.",
      // "When enabled for a column, a respondent is required to provide a unique response for each question within this column."
      isUnique: "Når det er aktiveret for en kolonne, skal en svarperson give et entydigt svar på hvert spørgsmål i denne kolonne.",
      // "Sets the number of displayed lines in the input field. If the input takes up more lines, the scroll bar will appear."
      rows: "Indstiller antallet af viste linjer i indtastningsfeltet. Hvis indgangen fylder flere linjer, vises rullepanelet.",
      // "Use the magic wand icon to set a conditional rule that determines column visibility."
      visibleIf: "Brug tryllestavsikonet til at angive en betinget regel, der bestemmer kolonnesynligheden.",
      // [Auto-translated] "Use the magic wand icon to set a conditional rule that disables the read-only mode for the column."
      enableIf: "Brug tryllestavsikonet til at angive en betinget regel, der deaktiverer skrivebeskyttet tilstand for kolonnen.",
      // "Use the magic wand icon to set a conditional rule that prevents survey submission unless at least one nested question has an answer."
      requiredIf: "Brug tryllestavsikonet til at angive en betinget regel, der forhindrer indsendelse af undersøgelser, medmindre mindst ét indlejret spørgsmål har et svar.",
      // "When selected, creates an individual column for each choice option."
      showInMultipleColumns: "Når denne indstilling er valgt, oprettes der en individuel kolonne for hver valgmulighed.",
      // [Auto-translated] "Arranges choice options in a multi-column layout. When set to 0, the options are displayed in a single line. When set to -1, the actual value is inherited from the \"Nested column count\" property of the parent matrix."
      colCount: "Arrangerer valgmuligheder i et layout med flere kolonner. Når den er indstillet til 0, vises indstillingerne på en enkelt linje. Når den er angivet til -1, nedarves den faktiske værdi fra egenskaben \"Antal indlejrede kolonner\" for den overordnede matrix."
    },
    slider: {
      // "The lowest number that users can select."
      min: "Det laveste tal, som brugerne kan vælge.",
      // "The highest number that users can select."
      max: "Det højeste tal, som brugerne kan vælge.",
      // "The interval between selectable scale values. For example, a step of 5 will allow users to select 0, 5, 10, etc."
      step: "Intervallet mellem valgbare skalaværdier. For eksempel vil et trin på 5 give brugerne mulighed for at vælge 0, 5, 10 osv.",
      // "The minimum distance between the slider thumbs a user can set."
      minRangeLength: "Den mindste afstand mellem skyderen, en bruger kan indstille.",
      // "The maximum distance between the slider thumbs a user can set."
      maxRangeLength: "Den maksimale afstand mellem skyderens tommelfingre, som en bruger kan indstille.",
      // "Specifies how many scale labels to generate. A value of -1 means the number is calculated automatically based on the Min value and Max value."
      labelCount: "Angiver, hvor mange skaleringsetiketter der skal genereres. En værdi på -1 betyder, at tallet beregnes automatisk baseret på Min-værdien og Max-værdien.",
      // "Use `{0}` as a placeholder for the actual value."
      labelFormat: "Brug \"{0}\" som pladsholder for den faktiske værdi.",
      // "Allows you to define custom labels at specific values and optionally assign corresponding text to them (e.g., 0 = \"Poor\", 100 = \"Excellent\")."
      customLabels: "Giver dig mulighed for at definere brugerdefinerede etiketter ved bestemte værdier og eventuelt tildele dem tilsvarende tekst (f.eks. 0 = \"Dårlig\", 100 = \"Fremragende\").",
      // "Use `{0}` as a placeholder for the actual value."
      tooltipFormat: "Brug \"{0}\" som pladsholder for den faktiske værdi.",
      // "Allows users to move one thumb past the other."
      allowSwap: "Giver brugerne mulighed for at flytte den ene tommelfinger forbi den anden.",
      // [Auto-translated] "Displays a button that clears the selected slider value and sets it to undefined."
      allowClear: "Viser en knap, der rydder den valgte skyderværdi og indstiller den til udefineret.",
      // "Defines the slider's minimum value dynamically using an expression. Supports basic calculations (e.g, `{q1_id} + {q2_id}`), Boolean logic (e.g., `{age} > 60`), and functions like `iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, and more."
      minValueExpression: "Definerer skyderens minimumværdi dynamisk ved hjælp af et udtryk. Understøtter grundlæggende beregninger (f.eks. '{q1_id} + {q2_id}'), boolsk logik (f.eks. '{age} > 60') og funktioner som 'iif()', 'today()', 'age()', 'min()', 'max()', 'avg()' og mere.",
      // "Defines the slider's maximum value dynamically using an expression. Supports basic calculations (e.g, `{q1_id} + {q2_id}`), Boolean logic (e.g., `{age} > 60`), and functions like `iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, and more."
      maxValueExpression: "Definerer skyderens maksimumværdi dynamisk ved hjælp af et udtryk. Understøtter grundlæggende beregninger (f.eks. '{q1_id} + {q2_id}'), boolsk logik (f.eks. '{age} > 60') og funktioner som 'iif()', 'today()', 'age()', 'min()', 'max()', 'avg()' og mere."
    },
    // [Auto-translated] "Makes this choice exclusive. When selected by a user, it will automatically deselect all other options in the question."
    isExclusive: "Gør dette valg eksklusivt. Når den vælges af en bruger, fravælger den automatisk alle andre muligheder i spørgsmålet.",
    matrixcolumn: {
      // [Auto-translated] "Makes checkboxes in this column exclusive. When selected by a user, they will automatically deselect all other checkboxes in the same row."
      isExclusive: "Gør afkrydsningsfelter i denne kolonne eksklusive. Når de vælges af en bruger, vil de automatisk fravælge alle andre afkrydsningsfelter i samme række."
    },
    // [Auto-translated] "Select if uppercase and lowercase letters in the regular expression must be treated as equivalent."
    caseInsensitive: "Vælg, om store og små bogstaver i det regulære udtryk skal behandles som ækvivalente.",
    // "Choose from: \"Static\" - sets a fixed width; \"Responsive\" - makes the survey occupy the full width of the screen; \"Auto\" - applies either of the two depending on the question types used."
    widthMode: "Vælg mellem: \"Statisk\" - indstiller en fast bredde; \"Responsive\" - får undersøgelsen til at optage skærmens fulde bredde; \"Auto\" - gælder for en af de to afhængigt af de anvendte spørgsmålstyper.",
    // [Auto-translated] "Assign a unique cookie value for your survey. The cookie will be set in a respondent's browser upon survey completion to prevent repetitive survey submissions."
    cookieName: "Tildel en unik cookieværdi til din undersøgelse. Cookien vil blive indstillet i en respondents browser, når undersøgelsen er afsluttet, for at forhindre gentagne undersøgelsesindsendelser.",
    // [Auto-translated] "Paste an image link (no size limits) or click the folder icon to browse a file from your computer (up to 64KB)."
    logo: "Indsæt et billedlink (ingen størrelsesbegrænsninger), eller klik på mappeikonet for at gennemse en fil fra din computer (op til 64 KB).",
    // [Auto-translated] "Sets a logo width in CSS units (px, %, in, pt, etc.)."
    logoWidth: "Indstiller en logobredde i CSS-enheder (px, %, in, pt osv.).",
    // [Auto-translated] "Sets a logo height in CSS units (px, %, in, pt, etc.)."
    logoHeight: "Indstiller en logohøjde i CSS-enheder (px, %, i, pt osv.).",
    // "Choose from: \"None\" - image maintains its original size; \"Contain\" - image is resized to fit while maintaining its aspect ratio; \"Cover\" - image fills the entire box while maintaining its aspect ratio; \"Fill\" - image is stretched to fill the box without maintaining its aspect ratio."
    logoFit: "Vælg mellem: \"Ingen\" - billedet bevarer sin oprindelige størrelse; \"Contain\" - billedet ændres til at passe, samtidig med at dets billedformat opretholdes; \"Cover\" - billedet fylder hele kassen, samtidig med at billedformatet opretholdes; \"Fyld\" - billedet strækkes for at udfylde boksen uden at opretholde dets billedformat.",
    // [Auto-translated] "Select if you want the survey to auto-advance to the next page once a respondent has answered all questions on the current page. This feature won't apply if the last question on the page is open-ended or allows multiple answers."
    autoAdvanceEnabled: "Vælg, om undersøgelsen automatisk skal gå videre til næste side, når en svarperson har besvaret alle spørgsmål på den aktuelle side. Denne funktion gælder ikke, hvis det sidste spørgsmål på siden er åbent eller tillader flere svar.",
    // [Auto-translated] "Select if you want the survey to complete automatically after a respondent answers all questions."
    autoAdvanceAllowComplete: "Vælg, om undersøgelsen skal fuldføres automatisk, når svarpersonen har besvaret alle spørgsmål.",
    // [Auto-translated] "Sets the visibility of navigation buttons on a page."
    showNavigationButtons: "Angiver synligheden af navigationsknapper på en side.",
    // [Auto-translated] "Sets the location of navigation buttons on a page."
    navigationButtonsLocation: "Angiver placeringen af navigationsknapper på en side.",
    // [Auto-translated] "Enable the preview page with all or answered questions only."
    showPreviewBeforeComplete: "Aktivér eksempelsiden med alle eller kun besvarede spørgsmål.",
    // "Applies to all questions within the survey. This setting can be overridden by title alignment rules at lower levels: panel, page, or question. A lower-level setting will override those on a higher level."
    questionTitleLocation: "Gælder for alle spørgsmål i undersøgelsen. Denne indstilling kan tilsidesættes af titeljusteringsregler på lavere niveauer: panel, side eller spørgsmål. En indstilling på lavere niveau tilsidesætter dem på et højere niveau.",
    // [Auto-translated] "A symbol or a sequence of symbols indicating that an answer is required."
    requiredMark: "Et symbol eller en sekvens af symboler, der angiver, at et svar er påkrævet.",
    // [Auto-translated] "Enter a number or letter with which you want to start numbering."
    questionStartIndex: "Indtast et tal eller bogstav, som du vil starte nummereringen med.",
    // "Sets the location of an error message in relation to the question with invalid input. Choose between: \"Top\" - an error text is placed at the top of the question box; \"Bottom\" - an error text is placed at the bottom of the question box."
    questionErrorLocation: "Angiver placeringen af en fejlmeddelelse i forhold til spørgsmålet med ugyldigt input. Vælg mellem: \"Top\" - en fejltekst placeres øverst i spørgsmålsfeltet; \"Nederst\" - en fejltekst placeres nederst i spørgsmålsfeltet.",
    // [Auto-translated] "Select if you want the first input field on each page ready for text entry."
    autoFocusFirstQuestion: "Vælg, om det første indtastningsfelt på hver side skal være klar til indtastning af tekst.",
    // "Keeps the original order of questions or randomizes them. The effect of this setting is only visible in the Preview tab."
    questionOrder: "Bevarer den oprindelige rækkefølge af spørgsmål eller randomiserer dem. Effekten af denne indstilling er kun synlig under fanen Eksempel.",
    // [Auto-translated] "For text entry questions only."
    maxTextLength: "Kun til spørgsmål om indtastning af tekst.",
    // [Auto-translated] "For question comments only."
    maxCommentLength: "Kun til kommentarer til spørgsmål.",
    // [Auto-translated] "Sets the number of displayed lines in text areas for question comments. If the input takes up more lines, the scroll bar appears."
    commentAreaRows: "Angiver antallet af viste linjer i tekstområder til spørgsmålskommentarer. Hvis inputtet optager flere linjer, vises rullepanelet.",
    // [Auto-translated] "Select if you want question comments and Long Text questions to auto-grow in height based on the entered text length."
    autoGrowComment: "Vælg, om spørgsmålskommentarer og lange tekstspørgsmål automatisk skal vokse i højden baseret på den indtastede tekstlængde.",
    // [Auto-translated] "For question comments and Long Text questions only."
    allowResizeComment: "Kun til spørgsmålskommentarer og lange tekstspørgsmål.",
    // [Auto-translated] "Custom variables serve as intermediate or auxiliary variables used in form calculations. They take respondent inputs as source values. Each custom variable has a unique name and an expression it's based on."
    calculatedValues: "Brugerdefinerede variabler fungerer som mellemliggende eller hjælpevariabler, der bruges i formularberegninger. De tager respondentinput som kildeværdier. Hver brugerdefineret variabel har et entydigt navn og et udtryk, den er baseret på.",
    // [Auto-translated] "Select if you wish the calculated value of the expression to be saved along with survey results."
    includeIntoResult: "Vælg, om den beregnede værdi af udtrykket skal gemmes sammen med undersøgelsesresultaterne.",
    // "A trigger is an event or condition that is based on an expression. Once the expression is evaluated to \"true\", a trigger sets off an action. Such an action can optionally have a target question it affects."
    triggers: "En udløser er en hændelse eller betingelse, der er baseret på et udtryk. Når udtrykket er evalueret til \"sand\", udløser en udløser en handling. En sådan handling kan eventuelt have et målspørgsmål, den påvirker.",
    // [Auto-translated] "Choose whether or not to clear values for questions hidden by conditional logic and when to do it."
    clearInvisibleValues: "Vælg, om du vil rydde værdier for spørgsmål, der er skjult af betinget logik, og hvornår du vil gøre det.",
    // "Choose from: \"On lost focus\" - the value is updated when the input field loses focus; \"While typing\" - the value is updated in real-time, as users are typing."
    textUpdateMode: "Vælg mellem: \"Ved tabt fokus\" - værdien opdateres, når indtastningsfeltet mister fokus; \"Mens du skriver\" - værdien opdateres i realtid, da brugerne skriver.",
    // [Auto-translated] "The left value serves as a column ID used in conditional rules, the right value is displayed to respondents."
    columns: "Den venstre værdi fungerer som et kolonne-id, der bruges i betingede regler, den rigtige værdi vises for respondenterne.",
    // "The left value serves as a row ID used in conditional rules, the right value is displayed to respondents."
    rows: "Den venstre værdi fungerer som et række-id, der bruges i betingede regler, den rigtige værdi vises for respondenterne.",
    // [Auto-translated] "Accepts CSS values (px, %, in, pt, etc.)."
    columnMinWidth: "Accepterer CSS-værdier (px, %, in, pt osv.).",
    // [Auto-translated] "Accepts CSS values (px, %, in, pt, etc.)."
    rowTitleWidth: "Accepterer CSS-værdier (px, %, in, pt osv.).",
    // [Auto-translated] "Visible only if at least one column displays total values set with \"Aggregation method\" or \"Total value expression\"."
    totalText: "Vises kun, hvis mindst én kolonne viser samlede værdier, der er angivet med \"Sammenlægningsmetode\" eller \"Samlet værdiudtryk\".",
    // "Sets the location of an error message in relation to a cell with invalid input. The \"Inherit\" option applies the setting from the \"Error message alignment\" property."
    cellErrorLocation: "Angiver placeringen af en fejlmeddelelse i forhold til en celle med ugyldigt input. Indstillingen \"Arv\" anvender indstillingen fra egenskaben \"Justering af fejlmeddelelse\".",
    // "Sets the location of error messages for questions nested in detail sections. The \"Inherit\" option applies the setting from the \"Error message alignment\" property."
    detailErrorLocation: "Angiver placeringen af fejlmeddelelser for spørgsmål, der er indlejret i detaljerede afsnit. Indstillingen \"Arv\" anvender indstillingen fra egenskaben \"Justering af fejlmeddelelser\".",
    // "When the \"Prevent duplicate responses\" property is enabled, a respondent attempting to submit a duplicate entry will receive the following error message."
    keyDuplicationError: "Når egenskaben \"Undgå dublerede svar\" er aktiveret, modtager en svarperson, der forsøger at sende en dubletpost, følgende fejlmeddelelse.",
    // [Auto-translated] "Allows you to calculate total values based on an expression. The expression can include basic calculations (`{q1_id} + {q2_id}`), Boolean expressions (`{age} > 60`) and functions ('iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, etc.)."
    totalExpression: "Giver dig mulighed for at beregne samlede værdier baseret på et udtryk. Udtrykket kan omfatte grundlæggende beregninger ('{q1_id} + {q2_id}'), booleske udtryk ('{alder} > 60') og funktioner ('iif()', 'today()', 'age()', 'min()', 'max()', 'avg()' osv.).",
    // "Reference a column ID to require a user to provide a unique response for each question within the specified column."
    keyName: "Hvis den angivne kolonne indeholder identiske værdier, kaster undersøgelsen fejlen \"Ikke-unik nøgleværdi\".",
    // "Type a subtitle."
    description: "Skriv en undertekst.",
    // [Auto-translated] "Choose a language to begin creating your survey. To add a translation, switch to a new language and translate the original text here or in the Translations tab."
    locale: "Vælg et sprog for at begynde at oprette undersøgelsen. Hvis du vil tilføje en oversættelse, skal du skifte til et nyt sprog og oversætte den oprindelige tekst her eller på fanen Oversættelser.",
    // "Sets the location of a detail section in relation to a row. Choose from: \"None\" - no detail section is added; \"Under the row\" - a detail section is placed under each row of the matrix; \"Under the row, display one detail section only\" - a detail section is displayed under a single row only, the remaining sections are collapsed."
    detailPanelMode: "Angiver placeringen af en detaljesektion i forhold til en række. Vælg mellem: \"Ingen\" - ingen udvidelse tilføjes; \"Under rækken\" - en rækkeudvidelse placeres under hver række i matrixen; \"Vis kun én rækkeudvidelse under rækken\" - en udvidelse vises kun under en enkelt række, de resterende rækkeudvidelser skjules.",
    // "Choose from: \"None\" - image maintains its original size; \"Contain\" - image is resized to fit while maintaining its aspect ratio; \"Cover\" - image fills the entire box while maintaining its aspect ratio; \"Fill\" - image is stretched to fill the box without maintaining its aspect ratio."
    imageFit: "Vælg mellem: \"Ingen\" - billedet bevarer sin oprindelige størrelse; \"Contain\" - billedet ændres til at passe, samtidig med at dets billedformat opretholdes; \"Cover\" - billedet fylder hele kassen, samtidig med at billedformatet opretholdes; \"Fyld\" - billedet strækkes for at udfylde boksen uden at opretholde dets billedformat.",
    // "The \"Inherit\" option applies a survey-level setting (\"Disabled\" by default)."
    autoGrow: "Øger gradvist inputfeltets højde, efterhånden som data indtastes. Tilsidesætter indstillingen \"Inputfelthøjde (i linjer)\".",
    // [Auto-translated] "The \"Inherit\" option applies a survey-level setting (\"Enabled\" by default)."
    allowResize: "Indstillingen \"Nedarv\" anvender en indstilling på undersøgelsesniveau (\"Aktiveret\" som standard).",
    // [Auto-translated] "A time interval in seconds after which the survey auto-advances to the \"Thank You\" page. When set to 0, counts the time spent on the survey."
    timeLimit: "Et tidsinterval i sekunder, hvorefter undersøgelsen automatisk går videre til siden \"Tak\". Når den er indstillet til 0, tæller den tid, der er brugt på undersøgelsen.",
    // [Auto-translated] "A time interval in seconds after which the survey auto-advances to the next page. Hides the \"Previous\" navigation button. When set to 0, counts the time spent on the current page."
    timeLimitPerPage: "Et tidsinterval i sekunder, hvorefter undersøgelsen automatisk går videre til næste side. Skjuler navigationsknappen \"Forrige\". Når den er indstillet til 0, tæller den tid, der er brugt på den aktuelle side.",
    // [Auto-translated] "Enable this option to trigger validation when a user focuses on an empty input field and then leaves it without making any changes."
    validateVisitedEmptyFields: "Aktivér denne indstilling for at udløse validering, når en bruger fokuserer på et tomt inputfelt og derefter forlader det uden at foretage ændringer.",
    page: {
      // "A page ID that is not visible to respondents."
      name: "Et side-id, der ikke er synligt for svarpersoner.",
      // "Type a page subtitle."
      description: "Skriv en sideundertitel.",
      // "A caption displayed on a navigation button in the progress bar or table of contents (TOC). If you leave this field empty, the navigation button will use the page title or page name. To enable the progress bar or TOC, go to \"Survey\" → \"Navigation\"."
      navigationTitle: "En billedtekst, der vises på en navigationsknap på statuslinjen eller indholdsfortegnelsen. Hvis du lader dette felt være tomt, bruger navigationsknappen sidetitlen eller sidenavnet. For at aktivere statuslinjen eller indholdsfortegnelsen skal du gå til \"Undersøgelse\" → \"Navigation\".",
      // "A time interval in seconds after which the survey auto-advances to the next page. Hides the \"Previous\" navigation button. When set to 0, counts the time spent on the current page."
      timeLimit: "Et tidsinterval i sekunder, hvorefter undersøgelsen automatisk går videre til næste side.",
      // "Use the magic wand icon to set a conditional rule that determines page visibility."
      visibleIf: "Brug tryllestavsikonet til at indstille en betinget regel, der bestemmer sidens synlighed.",
      // [Auto-translated] "Use the magic wand icon to set a conditional rule that disables the read-only mode for the page."
      enableIf: "Brug tryllestavsikonet til at angive en betinget regel, der deaktiverer skrivebeskyttet tilstand for siden.",
      // "Use the magic wand icon to set a conditional rule that prevents survey submission unless at least one nested question has an answer."
      requiredIf: "Brug tryllestavsikonet til at angive en betinget regel, der forhindrer indsendelse af undersøgelser, medmindre mindst ét indlejret spørgsmål har et svar.",
      // "Applies to all questions within this page. When set to \"Hidden\", it also hides question descriptions. If you want to override this setting, define title alignment rules for individual questions or panels. The \"Inherit\" option applies the survey-level setting (\"Top\" by default)."
      questionTitleLocation: "Gælder for alle spørgsmål på denne side. Hvis du vil tilsidesætte denne indstilling, skal du definere regler for titeljustering for individuelle spørgsmål eller paneler. Indstillingen \"Nedarv\" anvender indstillingen på undersøgelsesniveau (\"Top\" som standard).",
      // [Auto-translated] "Sets consistent width for question titles when they are aligned to the left of their question boxes. Accepts CSS values (px, %, in, pt, etc.)."
      questionTitleWidth: "Angiver ensartet bredde for spørgsmålstitler, når de er justeret til venstre for deres spørgsmålsbokse. Accepterer CSS-værdier (px, %, in, pt osv.).",
      // "Sets the location of an error message in relation to the question with invalid input. Choose between: \"Top\" - an error text is placed at the top of the question box; \"Bottom\" - an error text is placed at the bottom of the question box. The \"Inherit\" option applies the survey-level setting (\"Top\" by default)."
      questionErrorLocation: "Angiver placeringen af en fejlmeddelelse i forhold til spørgsmålet med ugyldigt input. Vælg mellem: \"Top\" - en fejltekst placeres øverst i spørgsmålsfeltet; \"Nederst\" - en fejltekst placeres nederst i spørgsmålsfeltet. Indstillingen \"Nedarv\" anvender indstillingen på undersøgelsesniveau (\"Top\" som standard).",
      // "Keeps the original order of questions or randomizes them. The \"Inherit\" option applies the survey-level setting (\"Original\" by default). The effect of this setting is only visible in the Preview tab."
      questionOrder: "Bevarer den oprindelige rækkefølge af spørgsmål eller randomiserer dem. Indstillingen \"Arv\" anvender indstillingen på undersøgelsesniveau (\"Original\" som standard). Effekten af denne indstilling er kun synlig under fanen Eksempel.",
      // "Sets the visibility of navigation buttons on the page. The \"Inherit\" option applies the survey-level setting, which defaults to \"Visible\"."
      showNavigationButtons: "Indstiller synligheden af navigationsknapper på siden. Indstillingen \"Arv\" anvender indstillingen på undersøgelsesniveau, som som standard er \"Synlig\".",
      // [Auto-translated] "This table lets you configure each grid column on the page. It automatically sets the width percentage for each column based on the maximum number of elements in a row. To customize the grid layout, manually adjust these values and define the title width for all questions in each column."
      gridLayoutColumns: "I denne tabel kan du konfigurere hver gitterkolonne på siden. Den indstiller automatisk breddeprocenten for hver kolonne baseret på det maksimale antal elementer i en række. Hvis du vil tilpasse gitterlayoutet, skal du manuelt justere disse værdier og definere titelbredden for alle spørgsmål i hver kolonne."
    },
    // [Auto-translated] "Sets the location of a timer on a page."
    timerLocation: "Indstiller placeringen af en timer på en side.",
    // "Choose from: \"Locked\" - users cannot expand or collapse entries; \"Collapse all\" - all entries start in a collapsed state; \"Expand all\" - all entries start in an expanded state; \"First expanded\" - only the first entry is initially expanded. Applies if \"Entry display mode\" is set to \"List\" and the \"Entry title pattern\" property is specified."
    panelsState: "Vælg mellem: \"Låst\" - brugere kan ikke udvide eller skjule paneler; \"Skjul alle\" - alle paneler starter i kollapset tilstand; \"Udvid alle\" - alle paneler starter i udvidet tilstand; \"Først udvidet\" - kun det første panel udvides oprindeligt.",
    // [Auto-translated] "Enter a shared property name within the array of objects that contains the image or video file URLs you want to display in the choice list."
    imageLinkName: "Angiv et delt egenskabsnavn i den række objekter, der indeholder de URL-adresser til billeder eller videofiler, du vil have vist på valglisten.",
    // "The left value serves as an item ID used in conditional rules, the right value is displayed to respondents."
    choices: "Den venstre værdi fungerer som et vare-id, der bruges i betingede regler, den rigtige værdi vises for respondenterne.",
    // [Auto-translated] "Type a user-friendly title to display."
    title: "Skriv en brugervenlig titel, der skal vises.",
    // [Auto-translated] "Ensures that users won't complete the survey until files are uploaded."
    waitForUpload: "Sikrer, at brugerne ikke gennemfører undersøgelsen, før filerne er uploadet.",
    // [Auto-translated] "Accepts CSS values (px, %, in, pt, etc.)."
    minWidth: "Accepterer CSS-værdier (px, %, in, pt osv.).",
    // [Auto-translated] "Accepts CSS values (px, %, in, pt, etc.)."
    maxWidth: "Accepterer CSS-værdier (px, %, in, pt osv.).",
    // "Accepts CSS values (px, %, in, pt, etc.)."
    width: "Accepterer CSS-værdier (px, %, in, pt osv.).",
    // [Auto-translated] "A join identifier is a custom key that you can assign to several questions to link them together and sync their values. These values will be merged into a single array or object and stored in survey results using the key as the property name."
    valueName: "Et join-id er en brugerdefineret nøgle, som du kan tildele til flere spørgsmål for at knytte dem sammen og synkronisere deres værdier. Disse værdier flettes ind i en enkelt matrix eller et enkelt objekt og gemmes i undersøgelsesresultater ved hjælp af nøglen som egenskabsnavn.",
    // [Auto-translated] "A value displayed in HTML questions and in the dynamic titles and descriptions of survey elements when the question value is empty."
    defaultDisplayValue: "En værdi, der vises i HTML-spørgsmål og i de dynamiske titler og beskrivelser af undersøgelseselementer, når spørgsmålsværdien er tom.",
    // [Auto-translated] "In single- and multiple-selection question types, each choice option has an ID and display value. When selected, this setting shows a display value instead of an ID value in HTML questions and dynamic titles and descriptions of survey elements."
    useDisplayValuesInDynamicTexts: "I spørgsmålstyper med et enkelt og flere valg har hver valgmulighed et id og en visningsværdi. Når denne indstilling er valgt, vises der en visningsværdi i stedet for en id-værdi i HTML-spørgsmål og dynamiske titler og beskrivelser af undersøgelseselementer.",
    // "Choose whether or not to clear question values hidden by conditional logic and when to do it. The \"Inherit\" option applies the survey-level setting (\"Upon survey completion\" by default)."
    clearIfInvisible: "Vælg, om du vil rydde spørgsmålsværdier, der er skjult af betinget logik, og hvornår det skal gøres. Indstillingen \"Nedarv\" anvender indstillingen på undersøgelsesniveau (\"Ved afslutning af undersøgelsen\" som standard).",
    // "Choose from: \"All\" - copies all choice options from the selected question; \"Selected\" - dynamically copies only selected choice options; \"Unselected\" - dynamically copies only unselected choice options. The \"None\" and \"Other\" options are copied by default if enabled in the source question."
    choicesFromQuestionMode: "Vælg mellem: \"Alle\" - kopierer alle valgmuligheder fra det valgte spørgsmål; \"Valgt\" - kopierer dynamisk kun valgte valgindstillinger; \"Ikke valgt\" - kopierer dynamisk kun ikke-valgte valgindstillinger. Indstillingerne \"Ingen\" og \"Andre\" kopieres som standard, hvis de er aktiveret i kildespørgsmålet.",
    // [Auto-translated] "In single- and multiple-selection question types, each choice option has an ID and display value. This setting specifies which matrix column or panel question should provide the IDs."
    choiceValuesFromQuestion: "I enkelt- og flervalgsspørgsmålstyper har hver valgmulighed et id og en visningsværdi. Denne indstilling angiver, hvilken matrixkolonne eller hvilket panelspørgsmål der skal angive id'erne.",
    // [Auto-translated] "In single- and multiple-selection question types, each choice option has an ID and display value. This setting specifies which matrix column or panel question should provide the display texts."
    choiceTextsFromQuestion: "I enkelt- og flervalgsspørgsmålstyper har hver valgmulighed et id og en visningsværdi. Denne indstilling angiver, hvilken matrixkolonne eller hvilket panelspørgsmål der skal indeholde visningsteksterne.",
    // [Auto-translated] "Select to let respondents add their own choices if the desired option isn't available in the dropdown. Custom choices will only be stored temporarily for the duration of the current browser session."
    allowCustomChoices: "Vælg for at lade svarpersonerne tilføje deres egne valgmuligheder, hvis den ønskede indstilling ikke er tilgængelig på rullelisten. Brugerdefinerede valg gemmes kun midlertidigt i den aktuelle browsersession.",
    // [Auto-translated] "When selected, users can include additional input in a separate comment box."
    showOtherItem: "Når denne indstilling er valgt, kan brugerne medtage yderligere input i et separat kommentarfelt.",
    // "Displays each special choice option (\"None\", \"Other\", \"Select All\") on a new line, even when using a multiple-column layout."
    separateSpecialChoices: "Viser hver indstilling for særlige valgmuligheder (\"Ingen\", \"Andet\", \"Vælg alle\") på en ny linje, selv når du bruger et layout med flere kolonner.",
    // [Auto-translated] "Specify the location within the service dataset where the target array of objects is located. Leave empty if the URL already points to the array."
    path: "Angiv placeringen i tjenestedatasættet, hvor målmatrixen af objekter er placeret. Lad feltet stå tomt, hvis URL-adressen allerede peger på arrayet.",
    choicesbyurl: {
      // "Enter a uniform property name within the array of objects whose value will be stored as a response in survey results."
      valueName: " "
    },
    // [Auto-translated] "Enter a uniform property name within the array of objects that contains the values you want to display in the choice list."
    titleName: "Angiv et ensartet egenskabsnavn i den matrix af objekter, der indeholder de værdier, du vil have vist på valglisten.",
    // [Auto-translated] "Select to allow the service to return an empty response or array."
    allowEmptyResponse: "Vælg for at tillade, at tjenesten returnerer et tomt svar eller en matrix.",
    // [Auto-translated] "Use the magic wand icon to set a conditional rule that determines the visibility of all choice options."
    choicesVisibleIf: "Brug tryllestavsikonet til at angive en betinget regel, der bestemmer synligheden af alle valgmuligheder.",
    // [Auto-translated] "The left value serves as an item ID used in conditional rules, the right value is displayed to respondents."
    rateValues: "Den venstre værdi fungerer som et vare-id, der bruges i betingede regler, den rigtige værdi vises for respondenterne.",
    rating: {
      // "\"Auto\" selects between the \"Buttons\" and \"Dropdown\" modes based on the available width. When the width is insufficient to display buttons, the question displays a dropdown."
      displayMode: "\"Auto\" vælger mellem tilstandene \"Knapper\" og \"Dropdown\" baseret på den tilgængelige bredde. Når bredden ikke er tilstrækkelig til at vise knapper, vises der en rullemenu i spørgsmålet."
    },
    // [Auto-translated] "Allows you to connect questions that produce results in different formats. When such questions are linked together using a join identifier, this shared property stores selected question values."
    valuePropertyName: "Giver dig mulighed for at forbinde spørgsmål, der giver resultater i forskellige formater. Når sådanne spørgsmål kædes sammen ved hjælp af et join-id, gemmer denne delte ejendom valgte spørgsmålsværdier.",
    // [Auto-translated] "Select if you want to update the drop-down menu contents to match the search query that a user is typing in the input field."
    searchEnabled: "Vælg, om du vil opdatere indholdet i rullemenuen, så det svarer til den søgeforespørgsel, som en bruger skriver i indtastningsfeltet.",
    // [Auto-translated] "A value to save in survey results when respondents give a positive answer."
    valueTrue: "En værdi, der skal gemmes i undersøgelsesresultater, når respondenterne giver et positivt svar.",
    // [Auto-translated] "A value to save in survey results when respondents give a negative answer."
    valueFalse: "En værdi, der skal gemmes i undersøgelsesresultater, når respondenterne giver et negativt svar.",
    // [Auto-translated] "It's not recommended that you disable this option as it overrides the Preview image and makes it hard for a user to understand whether the files have been uploaded."
    showPreview: "Det anbefales ikke, at du deaktiverer denne indstilling, da den tilsidesætter eksempelbilledet og gør det svært for en bruger at forstå, om filerne er blevet uploadet.",
    // [Auto-translated] "Triggers a prompt asking to confirm the file deletion."
    needConfirmRemoveFile: "Udløser en prompt, der beder om at bekræfte filsletningen.",
    // [Auto-translated] "Enable to rank only selected choices. Users will drag selected items from the choice list to order them within the ranking area."
    selectToRankEnabled: "Aktivér for kun at rangere valgte valg. Brugere trækker valgte elementer fra valglisten for at sortere dem inden for rangeringsområdet.",
    // [Auto-translated] "Enter a list of choices that will be suggested to the respondent during input."
    dataList: "Angiv en liste over valgmuligheder, der vil blive foreslået svarpersonen under input.",
    // [Auto-translated] "The setting only resizes the input fields and doesn't affect the width of the question box."
    inputSize: "Indstillingen ændrer kun størrelsen på inputfelterne og påvirker ikke bredden af spørgsmålsfeltet.",
    // [Auto-translated] "Sets consistent width for all item labels. Accepts CSS values (px, %, in, pt, etc.)."
    itemTitleWidth: "Indstiller ensartet bredde for alle elementetiketter. Accepterer CSS-værdier (px, %, in, pt osv.).",
    // "Select how to align input value within the field. The default setting \"Auto\" aligns the input value to the right if currency or numeric masking is applied and to the left if not."
    inputTextAlignment: "Vælg, hvordan inputværdien skal justeres i feltet. Standardindstillingen \"Auto\" justerer inputværdien til højre, hvis der anvendes valuta- eller numerisk maskering, og til venstre, hvis ikke.",
    // [Auto-translated] "Serves as a substitute when the image cannot be displayed on a user's device and for accessibility purposes."
    altText: "Fungerer som erstatning, når billedet ikke kan vises på en brugers enhed og af tilgængelighedshensyn.",
    // "Defines the color of the selected emoji when the Rating icon type is set to \"Smileys\". Choose between: \"Default\" - the selected emoji appears in default survey color; \"Scale\" - the selected emoji inherits color from the rating scale."
    rateColorMode: "Definerer farven på den valgte emoji, når ikontypen Vurdering er indstillet til \"Smileys\". Vælg mellem: \"Standard\" - den valgte emoji vises i standard undersøgelsesfarve; \"Skala\" - den valgte emoji arver farve fra vurderingsskalaen.",
    expression: {
      // "An expression ID that is not visible to respondents."
      name: "Et udtryks-id, der ikke er synligt for svarpersoner.",
      // "Type an expression subtitle."
      description: "Skriv et udtryk undertekst.",
      // "An expression can include basic calculations (`{q1_id} + {q2_id}`), conditions (`{age} > 60`), and functions ('iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, etc.)."
      expression: "Et udtryk kan omfatte grundlæggende beregninger ('{q1_id} + {q2_id}'), betingelser ('{alder} > 60') og funktioner ('iif()', 'today()', 'age()', 'min()', 'max()', 'avg()' osv.)."
    },
    // "Select to store the \"Other\" option value as a separate property in survey results."
    storeOthersAsComment: "Vælg for at gemme værdien \"Andet\" som en separat egenskab i undersøgelsesresultater.",
    // [Auto-translated] "Use {0} as a placeholder for the actual value."
    format: "Brug {0} som pladsholder for den faktiske værdi.",
    // [Auto-translated] "Refer to the [accept](https://www.w3schools.com/tags/att_input_accept.asp) attribute description for more information."
    acceptedTypes: "Se beskrivelsen af attributten [accept](https://www.w3schools.com/tags/att_input_accept.asp) for at få flere oplysninger.",
    // [Auto-translated] "Arranges choice options in a multi-column layout. When set to 0, the options are displayed in a single line. Applies only to columns with \"Cell input type\" set to Radio Button Group or Checkboxes."
    columnColCount: "Arrangerer valgmuligheder i et layout med flere kolonner. Når den er indstillet til 0, vises indstillingerne på en enkelt linje. Gælder kun for kolonner, hvor \"Celleinputtype\" er indstillet til Alternativknapgruppe eller afkrydsningsfelter.",
    // [Auto-translated] "Select the data type that the user's browser can retrieve. This data is sourced either from past values entered by the user or from pre-configured values if any have been saved by the user for autocompletion."
    autocomplete: "Vælg den datatype, som brugerens browser kan hente. Disse data stammer enten fra tidligere værdier, der er indtastet af brugeren, eller fra forudkonfigurerede værdier, hvis nogen er blevet gemt af brugeren til automatisk fuldførelse.",
    // "Applies when \"File source type\" is \"Local file\" or when camera is unavailable"
    filePlaceholder: "Gælder, når \"Kildetype\" er \"Lokale filer\", eller når kameraet ikke er tilgængeligt",
    // "Applies when \"File source type\" is \"Camera\"."
    photoPlaceholder: "Gælder, når \"Kildetype\" er \"Kamera\".",
    // "Applies when \"File source type\" is \"Local file or camera\"."
    fileOrPhotoPlaceholder: "Gælder, når \"Kildetype\" er \"Lokale filer eller kamera\".",
    // "Arranges choice options in a multi-column layout. When set to 0, the options are displayed in a single line."
    colCount: "Arrangerer valgmuligheder i et layout med flere kolonner. Når den er indstillet til 0, vises indstillingerne på en enkelt linje.",
    masksettings: {
      // "Select if you want to store the question value with an applied mask in survey results."
      saveMaskedValue: "Vælg, om du vil gemme spørgsmålsværdien med en anvendt maske i undersøgelsesresultater."
    },
    patternmask: {
      // "The pattern can contain string literals and the following placeholders: `9` - for a digit; `a` - for an upper- or lower-case letter; `#` - for a digit or an upper- or lower-case letter. Use backslash `\\` to escape a character."
      pattern: "Mønsteret kan indeholde strengkonstanter og følgende pladsholdere: '9' - for et ciffer; »a« - for store eller små bogstaver '#' - for et ciffer eller et stort eller lille bogstav. Brug omvendt skråstreg '\\' for at undslippe et tegn."
    },
    datetimemask: {
      // "The pattern can contain separator characters and the following placeholders:<br>`m` - Month number.<br>`mm` - Month number, with leading zero for single-digit values.<br>`d` - Day of the month.<br>`dd` - Day of the month, with leading zero for single-digit values.<br>`yy` - The last two digits of the year.<br>`yyyy` - Four-digit year.<br>`H` - Hours in 24-hour format.<br>`HH` - Hours in 24-hour format, with leading zero for single-digit values.<br>`h` - Hours in 12-hour format.<br>`hh` - Hours in 12-hour format, with leading zero for single-digit values.<br>`MM` - Minutes.<br>`ss` - Seconds.<br>`TT` - 12-hour clock period in upper case (AM/PM).<br>`tt` - 12-hour clock period in lower case (am/pm)."
      pattern: "Mønsteret kan indeholde separatortegn og følgende pladsholdere:<br>'m' - Månedsnummer.<br>'mm' – Månedstal med foranstillet nul for encifrede værdier. <br>'d' - Dag i måneden. <br>'dd' – Dag i måneden med foranstillet nul for encifrede værdier. <br>'yy' - De sidste to cifre i året. <br>'åååå' - Firecifret årstal. <br>'H' - Timer i 24-timers format. <br>'HH' – timer i 24-timers format med foranstillet nul for encifrede værdier. <br>'h' - Timer i 12-timers format. <br>'hh' – Timer i 12-timers format med foranstillet nul for encifrede værdier. <br>»MM« - Minutter. <br>'ss' - sekunder. <br>'TT' - 12-timers urperiode med store bogstaver (AM/PM). <br>'TT' - 12-timers urperiode med små bogstaver (am / pm)."
    },
    numericmask: {
      // "A symbol used to separate the fractional part from the integer part of a displayed number."
      decimalSeparator: "Et symbol, der bruges til at adskille brøkdelen fra heltalsdelen af et vist tal.",
      // "A symbol used to separate the digits of a large number into groups of three."
      thousandsSeparator: "Et symbol, der bruges til at adskille cifrene i et stort tal i grupper på tre.",
      // "Limits how many digits to retain after the decimal point for a displayed number."
      precision: "Begrænser, hvor mange cifre der skal bevares efter decimaltegnet for et vist tal."
    },
    currencymask: {
      // "One or several symbols to be displayed before the value."
      prefix: "Et eller flere symboler, der skal vises før værdien.",
      // "One or several symbols to be displayed after the value."
      suffix: "Et eller flere symboler, der skal vises efter værdien."
    },
    theme: {
      // "This setting applies only to questions outside of a panel."
      isPanelless: "Denne indstilling gælder kun for spørgsmål uden for et panel.",
      // "Sets a supplementary color that highlights key survey elements."
      primaryColor: "Indstiller en supplerende farve, der fremhæver vigtige undersøgelseselementer.",
      // "Adjusts the transparency of panels and question boxes relative to the survey background."
      panelBackgroundTransparency: "Justerer gennemsigtigheden af paneler og spørgsmålsfelter i forhold til undersøgelsesbaggrunden.",
      // "Adjusts the transparency of input elements relative to the survey background."
      questionBackgroundTransparency: "Justerer gennemsigtigheden af inputelementer i forhold til undersøgelsesbaggrunden.",
      // "Sets the corner radius for all rectangular elements. Enable the Advanced Mode if you want to set individual corner radius values for input elements or panels and question boxes."
      cornerRadius: "Indstiller hjørneradius for alle rektangulære elementer. Aktiver Avanceret tilstand, hvis du vil indstille individuelle hjørneradiusværdier for inputelementer eller paneler og spørgsmålsfelter.",
      // "Sets the main background color of the survey."
      "--sjs-general-backcolor-dim": "Indstiller undersøgelsens primære baggrundsfarve."
    },
    header: {
      // "The \"Same as container\" option auto-adjusts the header content area width to fit into the HTML element the survey is placed in."
      inheritWidthFrom: "Indstillingen \"Samme som beholder\" justerer automatisk bredden på sidehovedindholdsområdet, så den passer ind i det HTML-element, som undersøgelsen er placeret i.",
      // [Auto-translated] "The width of the header area that contains the survey title and description, measured in pixels."
      textAreaWidth: "Bredden af det sidehovedområde, der indeholder undersøgelsens titel og beskrivelse, målt i pixel.",
      // [Auto-translated] "When enabled, the top of the survey overlays the bottom of the header."
      overlapEnabled: "Når den er aktiveret, overlejres toppen af undersøgelsen bunden af sidehovedet.",
      // [Auto-translated] "When set to 0, the height is calculated automatically to accommodate the header's content."
      mobileHeight: "Når den er indstillet til 0, beregnes højden automatisk for at rumme sidehovedets indhold."
    },
    // "The \"Same as container\" option auto-adjusts the progress bar area width to fit into the HTML element the survey is placed in."
    progressBarInheritWidthFrom: "Indstillingen \"Samme som beholder\" justerer automatisk bredden på statuslinjens område, så den passer ind i det HTML-element, som undersøgelsen er placeret i.",
    // [Auto-translated] "Used when the 'Survey layout' is set to 'Single input field per page'. In this layout, the matrix is split so that each input field appears on a separate page. Use the {rowIndex} placeholder to insert auto numbering, {rowTitle} or {rowName} to reference the row's title or ID, and {row.columnid} to include the value of a specific matrix column."
    singleInputTitleTemplate: "Bruges, når 'Undersøgelseslayout' er indstillet til 'Enkelt indtastningsfelt pr. side'. I dette layout er matrixen opdelt, så hvert inputfelt vises på en separat side. Brug pladsholderen {rowIndex} til at indsætte automatisk nummerering, {rowTitle} eller {rowName} til at referere til rækkens titel eller id, og {row.columnid} til at medtage værdien af en bestemt matrixkolonne."
  },
  // Properties
  p: {
    title: {
      // "title"
      name: "titel",
      // "Leave it empty, if it is the same as 'Name'"
      title: "Lad den være tom hvis det er det samme som 'Navn'"
    },
    // [Auto-translated] "Allow multiple selection"
    multiSelect: "Tillad flere valg",
    // [Auto-translated] "Show image and video captions"
    showLabel: "Vis billed- og videotekster",
    // [Auto-translated] "Swap the order of Yes and No"
    swapOrder: "Skift rækkefølgen Ja og Nej",
    // [Auto-translated] "Value"
    value: "Værdi",
    // [Auto-translated] "Tab alignment"
    tabAlign: "Tabulatorjustering",
    // [Auto-translated] "File source type"
    sourceType: "Filkilde type",
    // [Auto-translated] "Fit to container"
    fitToContainer: "Passer til beholder",
    // [Auto-translated] "Set value expression"
    setValueExpression: "Angiv værdiudtryk",
    // "Description"
    description: "description", // Auto-generated string
    // [Auto-translated] "Logo fit"
    logoFit: "Logo pasform",
    // [Auto-translated] "Pages"
    pages: "Sider", // Auto-generated string
    // [Auto-translated] "Questions"
    questions: "Spørgsmål", // Auto-generated string
    // "Triggers"
    triggers: "triggers",
    // [Auto-translated] "Custom variables"
    calculatedValues: "Brugerdefinerede variabler",
    // [Auto-translated] "Survey id"
    surveyId: "Undersøgelses-id", // Auto-generated string
    // [Auto-translated] "Survey post id"
    surveyPostId: "Id for undersøgelsespost", // Auto-generated string
    // [Auto-translated] "Survey show data saving"
    surveyShowDataSaving: "Undersøgelse viser lagring af data", // Auto-generated string
    // [Auto-translated] "Question description alignment"
    questionDescriptionLocation: "Justering af spørgsmålsbeskrivelse",
    // [Auto-translated] "Progress bar type"
    progressBarType: "Type af statuslinje", // Auto-generated string
    // [Auto-translated] "Show table of contents (TOC)"
    showTOC: "Vis indholdsfortegnelse (TOC)",
    // [Auto-translated] "TOC alignment"
    tocLocation: "Justering af indholdsfortegnelse",
    // [Auto-translated] "Question title pattern"
    questionTitlePattern: "Mønster for spørgsmålets titel", // Auto-generated string
    // [Auto-translated] "Survey width mode"
    widthMode: "Tilstand for opmålingsbredde",
    // [Auto-translated] "Show brand info"
    showBrandInfo: "Vis brandoplysninger", // Auto-generated string
    // [Auto-translated] "Use display values in dynamic texts"
    useDisplayValuesInDynamicTexts: "Brug visningsværdier i dynamiske tekster",
    // "Visible if"
    visibleIf: "visibleIf", // Auto-generated string
    // [Auto-translated] "Default value expression"
    defaultValueExpression: "Standardværdiudtryk",
    // [Auto-translated] "Required if"
    requiredIf: "Påkrævet, hvis", // Auto-generated string
    // [Auto-translated] "Reset value if"
    resetValueIf: "Nulstil værdi, hvis",
    // [Auto-translated] "Set value if"
    setValueIf: "Angiv værdi, hvis",
    // "Validation rules"
    validators: "validators",
    // [Auto-translated] "Bindings"
    bindings: "Bindings", // Auto-generated string
    // [Auto-translated] "Render as"
    renderAs: "Gengiv som", // Auto-generated string
    // [Auto-translated] "Attach original items"
    attachOriginalItems: "Vedhæft originale elementer", // Auto-generated string
    // "Choices"
    choices: "choices",
    // "Choices by url"
    choicesByUrl: "choicesByUrl", // Auto-generated string
    // "Currency"
    currency: "currency", // Auto-generated string
    // [Auto-translated] "Cell hint"
    cellHint: "Celle tip", // Auto-generated string
    // [Auto-translated] "Total maximum fraction digits"
    totalMaximumFractionDigits: "Maksimale brøkdele i alt", // Auto-generated string
    // [Auto-translated] "Total minimum fraction digits"
    totalMinimumFractionDigits: "Mindste brøkdele i alt", // Auto-generated string
    // "Columns"
    columns: "columns", // Auto-generated string
    // [Auto-translated] "Detail elements"
    detailElements: "Detaljeelementer", // Auto-generated string
    // [Auto-translated] "Allow adaptive actions"
    allowAdaptiveActions: "Tillad adaptive handlinger", // Auto-generated string
    // "Default row value"
    defaultRowValue: "defaultRowValue", // Auto-generated string
    // [Auto-translated] "Auto-expand new row details"
    detailPanelShowOnAdding: "Udvid automatisk nye rækkedetaljer",
    // [Auto-translated] "Choices lazy load enabled"
    choicesLazyLoadEnabled: "Valg doven belastning aktiveret", // Auto-generated string
    // [Auto-translated] "Choices lazy load page size"
    choicesLazyLoadPageSize: "Valg doven indlæsningssidestørrelse", // Auto-generated string
    // [Auto-translated] "Input field component"
    inputFieldComponent: "Inputfeltkomponent", // Auto-generated string
    // [Auto-translated] "Item component"
    itemComponent: "Element komponent", // Auto-generated string
    // [Auto-translated] "Min"
    min: "Min.", // Auto-generated string
    // [Auto-translated] "Max"
    max: "Maks", // Auto-generated string
    // [Auto-translated] "Min value expression"
    minValueExpression: "Min værdi udtryk", // Auto-generated string
    // [Auto-translated] "Max value expression"
    maxValueExpression: "Maks. værdiudtryk", // Auto-generated string
    // [Auto-translated] "Step"
    step: "Skridt", // Auto-generated string
    // [Auto-translated] "Items for auto-suggest"
    dataList: "Elementer til automatisk forslag",
    // "Input field width (in characters)"
    inputSize: "inputSize",
    // [Auto-translated] "Item label width"
    itemTitleWidth: "Bredde på emnelabel",
    // [Auto-translated] "Input value alignment"
    inputTextAlignment: "Justering af inputværdi",
    // [Auto-translated] "Elements"
    elements: "Elementer", // Auto-generated string
    // [Auto-translated] "Content"
    content: "Indhold", // Auto-generated string
    // [Auto-translated] "Navigation title"
    navigationTitle: "Navigation titel", // Auto-generated string
    // [Auto-translated] "Navigation description"
    navigationDescription: "Beskrivelse af navigation", // Auto-generated string
    // [Auto-translated] "Long tap"
    longTap: "Langt tryk", // Auto-generated string
    // [Auto-translated] "Expand input field dynamically"
    autoGrow: "Udvid indtastningsfeltet dynamisk",
    // [Auto-translated] "Enable resize handle"
    allowResize: "Aktiver størrelseshåndtag",
    // [Auto-translated] "Accept carriage return"
    acceptCarriageReturn: "Accepter retur af transport", // Auto-generated string
    // [Auto-translated] "Display mode"
    displayMode: "Visningstilstand",
    // [Auto-translated] "Rate type"
    rateType: "Sats type", // Auto-generated string
    // "Label"
    label: "label", // Auto-generated string
    // [Auto-translated] "Content mode"
    contentMode: "Indholdstilstand",
    // [Auto-translated] "Image and thumbnail fit"
    imageFit: "Billede og miniaturetilpasning",
    // [Auto-translated] "Alt text"
    altText: "Alternativ tekst",
    // [Auto-translated] "Height"
    height: "Højde", // Auto-generated string
    // [Auto-translated] "Height on smartphones"
    mobileHeight: "Højde på smartphones",
    // [Auto-translated] "Pen color"
    penColor: "Pen farve", // Auto-generated string
    // [Auto-translated] "Background color"
    backgroundColor: "Baggrundsfarve",
    // [Auto-translated] "Template elements"
    templateElements: "Skabelon elementer", // Auto-generated string
    // [Auto-translated] "Operator"
    operator: "Operatør", // Auto-generated string
    // [Auto-translated] "Is variable"
    isVariable: "Er variabel", // Auto-generated string
    // [Auto-translated] "Run expression"
    runExpression: "Kør udtryk", // Auto-generated string
    // [Auto-translated] "Show caption"
    showCaption: "Vis billedtekst", // Auto-generated string
    // [Auto-translated] "Icon name"
    iconName: "Ikon navn", // Auto-generated string
    // [Auto-translated] "Icon size"
    iconSize: "Ikon størrelse", // Auto-generated string
    // [Auto-translated] "Precision"
    precision: "Præcision", // Auto-generated string
    // [Auto-translated] "Matrix drag handle area"
    matrixDragHandleArea: "Området for matrix-trækhåndtaget", // Auto-generated string
    // [Auto-translated] "Background image"
    backgroundImage: "Baggrundsbillede",
    // [Auto-translated] "Background image fit"
    backgroundImageFit: "Tilpasning af baggrundsbillede", // Auto-generated string
    // [Auto-translated] "Background image attachment"
    backgroundImageAttachment: "Vedhæftet fil til baggrundsbillede", // Auto-generated string
    // [Auto-translated] "Background opacity"
    backgroundOpacity: "Opacitet i baggrunden", // Auto-generated string
    // [Auto-translated] "Allow selective ranking"
    selectToRankEnabled: "Tillad selektiv rangering",
    // [Auto-translated] "Ranking area alignment"
    selectToRankAreasLayout: "Justering af rangordning af område",
    // [Auto-translated] "Text to show if all options are selected"
    selectToRankEmptyRankedAreaText: "Tekst, der viser, om alle indstillinger er markeret",
    // [Auto-translated] "Placeholder text for the ranking area"
    selectToRankEmptyUnrankedAreaText: "Pladsholdertekst for rangeringsområdet",
    // [Auto-translated] "Allow camera access"
    allowCameraAccess: "Tillad kameraadgang", // Auto-generated string
    // [Auto-translated] "Rating icon color mode"
    scaleColorMode: "Farvetilstand for bedømmelsesikon",
    // [Auto-translated] "Smileys color scheme"
    rateColorMode: "Smileys farveskema",
    // [Auto-translated] "Copy display value"
    copyDisplayValue: "Kopiér visningsværdi", // Auto-generated string
    // [Auto-translated] "Column span"
    effectiveColSpan: "Søjlespænd",
    // [Auto-translated] "Progress bar area width"
    progressBarInheritWidthFrom: "Bredde på statuslinjeområde",
    // [Auto-translated] "Theme name"
    themeName: "Tema navn"
  },
  theme: {
    // "Advanced mode"
    advancedMode: "Avanceret tilstand",
    // "Page"
    pageTitle: "Sidetitel skrifttype",
    // "Question box"
    questionTitle: "Skrifttype for spørgsmålstitel",
    // "Input element"
    editorPanel: "Input element",
    // [Auto-translated] "Lines"
    lines: "Linjer",
    // [Auto-translated] "Default"
    primaryDefaultColor: "Standard",
    // [Auto-translated] "Hover"
    primaryDarkColor: "Hover",
    // [Auto-translated] "Selected"
    primaryLightColor: "Valgte",
    // [Auto-translated] "Background color"
    backgroundDimColor: "Baggrundsfarve",
    // "Corner radius"
    cornerRadius: "Hjørne radius",
    // [Auto-translated] "Default background"
    backcolor: "Standard baggrund",
    // [Auto-translated] "Hover background"
    hovercolor: "Hold markøren over baggrunden",
    // [Auto-translated] "Border decoration"
    borderDecoration: "Kant dekoration",
    // [Auto-translated] "Font color"
    fontColor: "Skriftfarve",
    // [Auto-translated] "Background color"
    backgroundColor: "Baggrundsfarve",
    // [Auto-translated] "Default color"
    primaryForecolor: "Standardfarve",
    // [Auto-translated] "Disabled color"
    primaryForecolorLight: "Deaktiveret farve",
    // [Auto-translated] "Font"
    font: "Skrifttype",
    // [Auto-translated] "Darker"
    borderDefault: "Mørkere",
    // [Auto-translated] "Lighter"
    borderLight: "Lighter",
    // [Auto-translated] "Font family"
    fontFamily: "Skrifttypefamilie",
    // [Auto-translated] "Regular"
    fontWeightRegular: "Regelmæssig",
    // [Auto-translated] "Heavy"
    fontWeightHeavy: "Tung",
    // [Auto-translated] "Semi-bold"
    fontWeightSemiBold: "Halvfed skrift",
    // [Auto-translated] "Bold"
    fontWeightBold: "Modig",
    // [Auto-translated] "Color"
    color: "Farve",
    // [Auto-translated] "Placeholder color"
    placeholderColor: "Pladsholderfarve",
    // [Auto-translated] "Size"
    size: "Størrelse",
    // [Auto-translated] "Opacity"
    opacity: "Opacitet",
    // [Auto-translated] "X"
    boxShadowX: "X",
    // [Auto-translated] "Y"
    boxShadowY: "Y",
    // [Auto-translated] "Add Shadow Effect"
    boxShadowAddRule: "Tilføj skyggeeffekt",
    // [Auto-translated] "Blur"
    boxShadowBlur: "Sløring",
    // [Auto-translated] "Spread"
    boxShadowSpread: "Spredning",
    // [Auto-translated] "Drop"
    boxShadowDrop: "Dråbe",
    // [Auto-translated] "Inner"
    boxShadowInner: "Indre",
    names: {
      // [Auto-translated] "Default"
      default: "Standard",
      // [Auto-translated] "Sharp"
      sharp: "Skarp",
      // [Auto-translated] "Borderless"
      borderless: "Kant",
      // [Auto-translated] "Flat"
      flat: "Flad",
      // [Auto-translated] "Plain"
      plain: "Slette",
      // [Auto-translated] "Double Border"
      doubleborder: "Dobbelt kant",
      // [Auto-translated] "Layered"
      layered: "Lagdelte",
      // [Auto-translated] "Solid"
      solid: "Fast",
      // [Auto-translated] "3D"
      threedimensional: ".3D",
      // [Auto-translated] "Contrast"
      contrast: "Kontrast"
    },
    colors: {
      // [Auto-translated] "Teal"
      teal: "Krikand",
      // [Auto-translated] "Blue"
      blue: "Blå",
      // [Auto-translated] "Purple"
      purple: "Lilla",
      // [Auto-translated] "Orchid"
      orchid: "Orkide",
      // [Auto-translated] "Tulip"
      tulip: "Tulipan",
      // [Auto-translated] "Brown"
      brown: "Brun",
      // [Auto-translated] "Green"
      green: "Grøn",
      // [Auto-translated] "Gray"
      gray: "Grå"
    }
  },
  creatortheme: {
    // [Auto-translated] "Surface background"
    "--sjs-special-background": "Overflade baggrund",
    // [Auto-translated] "Primary"
    "--sjs-primary-background-500": "Primær",
    // [Auto-translated] "Secondary"
    "--sjs-secondary-background-500": "Sekundær",
    // [Auto-translated] "Surface"
    surfaceScale: "Overflade",
    // [Auto-translated] "UI elements"
    userInterfaceBaseUnit: "Elementer i brugergrænsefladen",
    // [Auto-translated] "Font"
    fontScale: "Skrifttype",
    names: {
      // [Auto-translated] "Survey Creator 2020"
      sc2020: "Skaberen af spørgeundersøgelsen 2020",
      // [Auto-translated] "Light"
      "default-light": "Lys",
      // [Auto-translated] "Dark"
      "default-dark": "Mørk",
      // [Auto-translated] "Contrast"
      "default-contrast": "Kontrast"
    }
  }
};
setupLocale({ localeCode: "da", strings: danishStrings });