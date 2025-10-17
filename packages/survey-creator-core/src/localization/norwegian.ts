import { setupLocale } from "survey-creator-core";

export var nbStrings = {
  // survey templates
  survey: {
    // "Edit"
    edit: "Rediger",
    // "Watch and learn how to create surveys"
    externalHelpLink: "Se og lær hvordan å opprette nye skjema",
    // "https://www.youtube.com/channel/UCH2ru9okIcooNZfpIbyq4qQ?view_as=subscriber"
    externalHelpLinkUrl: "https://www.youtube.com/channel/UCH2ru9okIcooNZfpIbyq4qQ?view_as=subscriber",
    // "Please drop a question here from the Toolbox."
    dropQuestion: "Dra og slipp et spørsmål her fra Verktøylisten til venstre.",
    // "Create a rule to customize the flow of the survey."
    addLogicItem: "Opprett en regel for å skreddersy skjemaflyten",
    // "Copy"
    copy: "Kopier",
    // [Auto-translated] "Duplicate"
    duplicate: "Duplikat",
    // "Add to toolbox"
    addToToolbox: "Legg til verktøylisten",
    // "Delete Panel"
    deletePanel: "Slett panel",
    // "Delete Question"
    deleteQuestion: "Slett spørsmål",
    // "Convert to"
    convertTo: "Konverter til",
    // "Drag element"
    drag: "Dra element"
  },
  // Creator tabs
  tabs: {
    // "Preview"
    preview: "Test skjema",
    // "Themes"
    theme: "Temaer",
    // "Translations"
    translation: "Oversettelse",
    // "Designer"
    designer: "Skjemadesigner",
    // "JSON Editor"
    json: "JSON-redigering",
    // "Logic"
    logic: "Skjemalogikk"
  },
  // Question types
  qt: {
    // "Default"
    default: "Standard",
    // "Checkboxes"
    checkbox: "Sjekkboks",
    // "Long Text"
    comment: "Kommentar",
    // "Image Picker"
    imagepicker: "Bildevelger",
    // [Auto-translated] "Ranking"
    ranking: "Rangering",
    // "Image"
    image: "Bilde",
    // "Dropdown"
    dropdown: "Nedtrekksliste",
    // [Auto-translated] "Multi-Select Dropdown"
    tagbox: "Rullegardinmenyen for flere valg",
    // "File Upload"
    file: "Fil",
    // "HTML"
    html: "Html",
    // "Single-Select Matrix"
    matrix: "Matrise (enkelvalg)",
    // "Multi-Select Matrix"
    matrixdropdown: "Matrise (flervalg)",
    // "Dynamic Matrix"
    matrixdynamic: "Matrise (dynamiske rader)",
    // "Multiple Textboxes"
    multipletext: "Flerlinjetekst",
    // "Panel"
    panel: "Panel",
    // "Dynamic Panel"
    paneldynamic: "Panel (dynamiske paneler)",
    // "Radio Button Group"
    radiogroup: "Radiogruppe",
    // "Rating Scale"
    rating: "Rangering",
    // [Auto-translated] "Slider"
    slider: "Glidebryter",
    // "Single-Line Input"
    text: "Enkel tekst",
    // "Yes/No (Boolean)"
    boolean: "Yes/No (Boolean)",
    // "Expression (read-only)"
    expression: "Formel",
    // "Signature"
    signaturepad: "Signatur",
    // [Auto-translated] "Button Group"
    buttongroup: "Knappegruppe"
  },
  toolboxCategories: {
    // "General"
    general: "Generelt",
    // "Choice Questions"
    choice: "Choice Spørsmål",
    // "Text Input Questions"
    text: "Spørsmål om tekstinndata",
    // "Containers"
    containers: "Beholdere",
    // "Matrix Questions"
    matrix: "Matrise Spørsmål",
    // "Misc"
    misc: "Misc"
  },
  // Strings in SurveyJS Creator
  ed: {
    // "Default ({0})"
    defaultLocale: "Standard ({0})",
    // "Survey"
    survey: "Skjema",
    // "Settings"
    settings: "Skjemainnstillinger",
    // "Open settings"
    settingsTooltip: "Åpne skjemainnstillinger",
    // [Auto-translated] "Survey Settings"
    surveySettings: "Innstillinger for undersøkelse",
    // [Auto-translated] "Survey settings"
    surveySettingsTooltip: "Innstillinger for undersøkelse",
    // [Auto-translated] "Theme Settings"
    themeSettings: "Tema innstillinger",
    // [Auto-translated] "Theme settings"
    themeSettingsTooltip: "Innstillinger for tema",
    // [Auto-translated] "Creator Settings"
    creatorSettingTitle: "Innstillinger for skapere",
    // "Show Panel"
    showPanel: "Vis panel",
    // "Hide Panel"
    hidePanel: "Skjul panel",
    // [Auto-translated] "Select previous"
    prevSelected: "Velg forrige",
    // [Auto-translated] "Select next"
    nextSelected: "Velg neste",
    // [Auto-translated] "Focus previous"
    prevFocus: "Fokus forrige",
    // [Auto-translated] "Focus next"
    nextFocus: "Fokus neste",
    // [Auto-translated] "Survey"
    surveyTypeName: "Undersøkelse",
    // [Auto-translated] "Page"
    pageTypeName: "Side",
    // [Auto-translated] "Panel"
    panelTypeName: "Panel",
    // [Auto-translated] "Question"
    questionTypeName: "Spørsmål",
    // [Auto-translated] "Column"
    columnTypeName: "Kolonne",
    // "Add New Page"
    addNewPage: "Legg til ny side",
    // "Scroll to the Right"
    moveRight: "Bla til høyre",
    // "Scroll to the Left"
    moveLeft: "Bla til venstre",
    // "Delete Page"
    deletePage: "Slett side",
    // "Edit Page"
    editPage: "Rediger side",
    // "Edit"
    edit: "Rediger",
    // "page"
    newPageName: "side",
    // "question"
    newQuestionName: "spørsmål",
    // "panel"
    newPanelName: "panel",
    // "text"
    newTextItemName: "tekst",
    // [Auto-translated] "Default"
    defaultV2Theme: "Standard",
    // [Auto-translated] "Modern"
    modernTheme: "Moderne",
    // [Auto-translated] "Default (legacy)"
    defaultTheme: "Standard (eldre)",
    // "Preview Survey Again"
    testSurveyAgain: "Test skjema igjen",
    // "Survey width: "
    testSurveyWidth: "Skjemabredde: ",
    // "You had to navigate to"
    navigateToMsg: "Du måtte navigere til:",
    // "Save Survey"
    saveSurvey: "Lagre skjema",
    // "Save Survey"
    saveSurveyTooltip: "Lagre skjema",
    // [Auto-translated] "Save Theme"
    saveTheme: "Lagre tema",
    // [Auto-translated] "Save Theme"
    saveThemeTooltip: "Lagre tema",
    // [Auto-translated] "Hide errors"
    jsonHideErrors: "Skjul feil",
    // [Auto-translated] "Show errors"
    jsonShowErrors: "Vis feil",
    // "Undo"
    undo: "Angre",
    // "Redo"
    redo: "Gjenta",
    // "Undo last change"
    undoTooltip: "Angre siste endring",
    // "Redo the change"
    redoTooltip: "Gjør om siste endring",
    // [Auto-translated] "Expand"
    expandTooltip: "Utvide",
    // [Auto-translated] "Collapse"
    collapseTooltip: "Sammenbrudd",
    // "Expand All"
    expandAllTooltip: "Utvid alle",
    // "Collapse All"
    collapseAllTooltip: "Skjul alle",
    // [Auto-translated] "Zoom In"
    zoomInTooltip: "Zoom inn",
    // [Auto-translated] "Zoom to 100%"
    zoom100Tooltip: "Zoom til 100 %",
    // [Auto-translated] "Zoom Out"
    zoomOutTooltip: "Zoom ut",
    // [Auto-translated] "Lock expand/collapse state for questions"
    lockQuestionsTooltip: "Lås utvidelses-/skjuletilstand for spørsmål",
    // [Auto-translated] "Show more"
    showMoreChoices: "Vis mer",
    // [Auto-translated] "Show less"
    showLessChoices: "Vis mindre",
    // "Copy"
    copy: "Kopier",
    // "Cut"
    cut: "Kutt",
    // "Paste"
    paste: "Lim innn",
    // "Copy selection to clipboard"
    copyTooltip: "Kopier valgt seksjon inn i utklippstavla",
    // "Cut selection to clipboard"
    cutTooltip: "Kutt valgt seksjon inn i utklippstavla",
    // "Paste from clipboard"
    pasteTooltip: "Lim inn fra utklippstavla",
    // "Options"
    options: "Alternativer",
    // "Generate Valid JSON"
    generateValidJSON: "Lag gyldig JSON",
    // "Generate Readable JSON"
    generateReadableJSON: "Lag lesbar JSON",
    // "Toolbox"
    toolbox: "Verktøyliste",
    // "Properties"
    "property-grid": "Innstillinger",
    // [Auto-translated] "Search"
    toolboxSearch: "Søke",
    // [Auto-translated] "Type to search..."
    toolboxFilteredTextPlaceholder: "Skriv for å søke ...",
    // [Auto-translated] "No results found"
    toolboxNoResultsFound: "Fant ingen resultater",
    // [Auto-translated] "Type to search..."
    propertyGridFilteredTextPlaceholder: "Skriv for å søke ...",
    // [Auto-translated] "No results found"
    propertyGridNoResultsFound: "Fant ingen resultater",
    // [Auto-translated] "Start configuring your form"
    propertyGridPlaceholderTitle: "Begynn å konfigurere skjemaet",
    // [Auto-translated] "Click any category icon to explore survey settings. Additional settings will become available once you add a survey element to the design surface."
    propertyGridPlaceholderDescription: "Klikk på et kategoriikon for å utforske undersøkelsesinnstillingene. Flere innstillinger blir tilgjengelige når du legger til et undersøkelseselement på designoverflaten.",
    // "Please correct JSON."
    correctJSON: "Vennligst korriger JSON.",
    // "Survey Results "
    surveyResults: "Skjemaresultat: ",
    // "As Table"
    surveyResultsTable: "Som tabell",
    // "As JSON"
    surveyResultsJson: "Som JSON",
    // "Question Title"
    resultsTitle: "Spørsmålstittel",
    // "Question Name"
    resultsName: "Spørsmålsnavn",
    // "Answer Value"
    resultsValue: "Svar",
    // "Display Value"
    resultsDisplayValue: "Vist verdi",
    // "Modified"
    modified: "Endret",
    // "Saving"
    saving: "Lagrer",
    // "Saved"
    saved: "Lagret",
    // "Error"
    propertyEditorError: "Feil:",
    // "Error! Editor content is not saved."
    saveError: "Feil! Skjema innhold er ikke lagret.",
    // [Auto-translated] "Language Settings"
    translationPropertyGridTitle: "Språkinnstillinger",
    // [Auto-translated] "Theme Settings"
    themePropertyGridTitle: "Tema innstillinger",
    // [Auto-translated] "Add Language"
    addLanguageTooltip: "Legg til språk",
    // [Auto-translated] "Languages"
    translationLanguages: "Språk",
    // [Auto-translated] "Are you certain you wish to delete all strings for this language?"
    translationDeleteLanguage: "Er du sikker på at du ønsker å slette alle strenger for dette språket?",
    // "Select language to translate"
    translationAddLanguage: "Velg språk for oversetting",
    // "All Strings"
    translationShowAllStrings: "Vis alle strenger",
    // [Auto-translated] "Used Strings Only"
    translationShowUsedStringsOnly: "Bare brukte strenger",
    // "All Pages"
    translationShowAllPages: "Vis alle sider",
    // "No strings to translate. Please change the filter."
    translationNoStrings: "Ingen strenger å oversette. Vennligst endre filteret.",
    // "Export to CSV"
    translationExportToSCVButton: "Eksporter til CSV",
    // "Import from CSV"
    translationImportFromSCVButton: "Importer fra CSV",
    // [Auto-translated] "Auto-translate All"
    translateUsigAI: "Oversett alle automatisk",
    // [Auto-translated] "Translate from: "
    translateUsigAIFrom: "Oversett fra: ",
    // [Auto-translated] "Untranslated strings"
    translationDialogTitle: "Uoversatte strenger",
    // "Merge {0} with default locale"
    translationMergeLocaleWithDefault: "Flett {0} med standard språk",
    // [Auto-translated] "Translation..."
    translationPlaceHolder: "Oversettelse...",
    // [Auto-translated] "Source: "
    translationSource: "Kilde: ",
    // [Auto-translated] "Target: "
    translationTarget: "Mål: ",
    // [Auto-translated] "YouTube links are not supported."
    translationYouTubeNotSupported: "YouTube-linker støttes ikke.",
    // [Auto-translated] "Export"
    themeExportButton: "Eksport",
    // [Auto-translated] "Import"
    themeImportButton: "Importere",
    // [Auto-translated] "Export"
    surveyJsonExportButton: "Eksport",
    // [Auto-translated] "Import"
    surveyJsonImportButton: "Importere",
    // [Auto-translated] "Copy to clipboard"
    surveyJsonCopyButton: "Kopiere til utklippstavlen",
    // [Auto-translated] "Reset theme settings to default"
    themeResetButton: "Tilbakestill temainnstillinger til standard",
    // [Auto-translated] "Do you really want to reset the theme? All your customizations will be lost."
    themeResetConfirmation: "Vil du virkelig tilbakestille temaet? Alle tilpasningene dine vil gå tapt.",
    // [Auto-translated] "Yes, reset the theme"
    themeResetConfirmationOk: "Ja, tilbakestill temaet",
    // "Bold"
    bold: "Fet",
    // "Italic"
    italic: "Kursiv",
    // "Underline"
    underline: "Underlinjet",
    // "Add Question"
    addNewQuestion: "Legg til spørsmål",
    // "Select page..."
    selectPage: "Velg side...",
    // [Auto-translated] "Choices are copied from"
    carryForwardChoicesCopied: "Valgene kopieres fra",
    // [Auto-translated] "Choices are loaded from a web service."
    choicesLoadedFromWebText: "Valgene lastes inn fra en webtjeneste.",
    // [Auto-translated] "Go to settings"
    choicesLoadedFromWebLinkText: "Gå til innstillinger",
    // [Auto-translated] "Preview of loaded choice options"
    choicesLoadedFromWebPreviewTitle: "Forhåndsvisning av alternativer for lastet valg",
    // [Auto-translated] "HTML content will be here."
    htmlPlaceHolder: "HTML-innhold vil være her.",
    // [Auto-translated] "Drop a question from the toolbox here."
    panelPlaceHolder: "Slipp et spørsmål fra verktøykassen her.",
    // [Auto-translated] "The survey is empty. Drag an element from the toolbox or click the button below."
    surveyPlaceHolder: "Undersøkelsen er tom. Dra et element fra verktøykassen, eller klikk på knappen nedenfor.",
    // [Auto-translated] "The page is empty. Drag an element from the toolbox or click the button below."
    pagePlaceHolder: "Siden er tom. Dra et element fra verktøykassen, eller klikk på knappen nedenfor.",
    // [Auto-translated] "Drag and drop an image here or click the button below and choose an image to upload"
    imagePlaceHolder: "Dra og slipp et bilde her, eller klikk på knappen nedenfor og velg et bilde du vil laste opp",
    // "Click the \"Add Question\" button below to start creating your form."
    surveyPlaceHolderMobile: "Klikk på \"Legg til spørsmål\" -knappen nedenfor for å begynne å lage skjemaet ditt.",
    // [Auto-translated] "Your form is empty"
    surveyPlaceholderTitle: "Skjemaet ditt er tomt",
    // [Auto-translated] "Your form is empty"
    surveyPlaceholderTitleMobile: "Skjemaet ditt er tomt",
    // [Auto-translated] "Drag an element from the toolbox or click the button below."
    surveyPlaceholderDescription: "Dra et element fra verktøykassen eller klikk på knappen nedenfor.",
    // [Auto-translated] "Drag an element from the toolbox or click the button below."
    surveyPlaceholderDescriptionMobile: "Dra et element fra verktøykassen eller klikk på knappen nedenfor.",
    // [Auto-translated] "No preview"
    previewPlaceholderTitle: "Ingen forhåndsvisning",
    // [Auto-translated] "No preview"
    previewPlaceholderTitleMobile: "Ingen forhåndsvisning",
    // [Auto-translated] "The survey doesn't contain any visible elements."
    previewPlaceholderDescription: "Undersøkelsen inneholder ingen synlige elementer.",
    // [Auto-translated] "The survey doesn't contain any visible elements."
    previewPlaceholderDescriptionMobile: "Undersøkelsen inneholder ingen synlige elementer.",
    // [Auto-translated] "No strings to translate"
    translationsPlaceholderTitle: "Ingen strenger å oversette",
    // [Auto-translated] "No strings to translate"
    translationsPlaceholderTitleMobile: "Ingen strenger å oversette",
    // [Auto-translated] "Add elements to your form or change the strings filter in the toolbar."
    translationsPlaceholderDescription: "Legg til elementer i skjemaet, eller endre strengfilteret på verktøylinjen.",
    // [Auto-translated] "Add elements to your form or change the strings filter in the toolbar."
    translationsPlaceholderDescriptionMobile: "Legg til elementer i skjemaet, eller endre strengfilteret på verktøylinjen.",
    // "Click the \"Add Question\" button below to add a new element to the page."
    pagePlaceHolderMobile: "Klikk på \"Legg til spørsmål\" -knappen nedenfor for å legge til et nytt element på siden.",
    // "Click the \"Add Question\" button below to add a new element to the panel."
    panelPlaceHolderMobile: "Klikk på \"Legg til spørsmål\" -knappen nedenfor for å legge til et nytt element i panelet.",
    // [Auto-translated] "Click the button below and choose an image to upload"
    imagePlaceHolderMobile: "Klikk på knappen nedenfor og velg et bilde du vil laste opp",
    // [Auto-translated] "Choose Image"
    imageChooseImage: "Velg bilde",
    // [Auto-translated] "Add {0}"
    addNewTypeQuestion: "Legg til {0}", // {0} is localizable question type
    // [Auto-translated] "[LOGO]"
    chooseLogoPlaceholder: "[LOGO]",
    // [Auto-translated] "Item "
    choices_Item: "Vare ",
    // [Auto-translated] "Select a file"
    selectFile: "Velg en fil",
    // [Auto-translated] "Remove the file"
    removeFile: "Fjern filen",
    lg: {
      // "Add New Rule"
      addNewItem: "Legg til ny regel",
      // [Auto-translated] "Create a rule to customize the flow of the survey."
      empty_tab: "Opprett en regel for å tilpasse flyten i evalueringen.",
      // [Auto-translated] "No logical rules"
      logicPlaceholderTitle: "Ingen logiske regler",
      // [Auto-translated] "No logical rules"
      logicPlaceholderTitleMobile: "Ingen logiske regler",
      // [Auto-translated] "Create a rule to customize the flow of the survey."
      logicPlaceholderDescription: "Opprett en regel for å tilpasse flyten i evalueringen.",
      // [Auto-translated] "Create a rule to customize the flow of the survey."
      logicPlaceholderDescriptionMobile: "Opprett en regel for å tilpasse flyten i evalueringen.",
      // "Show/hide page"
      page_visibilityName: "Sidesynlighet",
      // [Auto-translated] "Enable/disable page"
      page_enableName: "Aktiver/deaktiver side",
      // [Auto-translated] "Make page required"
      page_requireName: "Gjøre siden obligatorisk",
      // "Show/hide panel"
      panel_visibilityName: "Panelsynlighet",
      // "Enable/disable panel"
      panel_enableName: "Panel aktivere/deaktivere",
      // [Auto-translated] "Make panel required"
      panel_requireName: "Gjør panelet obligatorisk",
      // "Show/hide question"
      question_visibilityName: "Spørsmålssynlghet",
      // "Enable/disable question"
      question_enableName: "Spørsmål aktivere/deaktivere",
      // "Make question required"
      question_requireName: "Spørsmål valgfritt/påkrevd",
      // [Auto-translated] "Reset question value"
      question_resetValueName: "Tilbakestille spørsmålsverdien",
      // [Auto-translated] "Set question value"
      question_setValueName: "Angi spørsmålsverdi",
      // [Auto-translated] "Show/hide column"
      column_visibilityName: "Vis/skjul kolonne",
      // [Auto-translated] "Enable/disable column"
      column_enableName: "Aktiver/deaktiver kolonne",
      // [Auto-translated] "Make column required"
      column_requireName: "Gjøre kolonne obligatorisk",
      // [Auto-translated] "Reset column value"
      column_resetValueName: "Tilbakestille kolonneverdi",
      // [Auto-translated] "Set column value"
      column_setValueName: "Angi kolonneverdi",
      // "Complete survey"
      trigger_completeName: "Fullfør skjema",
      // "Set answer"
      trigger_setvalueName: "Angi spørsmålsnavn",
      // "Copy answer"
      trigger_copyvalueName: "Kopier spørsmålsverdi",
      // "Skip to question"
      trigger_skipName: "Hopp til spørsmål",
      // "Run expression"
      trigger_runExpressionName: "Kjør tilpasset formel",
      // "Set \"Thank You\" page markup"
      completedHtmlOnConditionName: "Tilpasset 'Takk-side' tekst",
      // "Make the page visible when the logical expression evaluates to true. Otherwise, keep the page invisible."
      page_visibilityDescription: "Gjør siden synlig når formelen evalueres til 'sann', og holder den ellers usynlig.",
      // "Make the page visible when the logical expression evaluates to true. Otherwise, keep the panel invisible."
      panel_visibilityDescription: "Gjør panelet synlig når formelen evalueres til 'sann', og holder den ellers usynlig.",
      // "Make the panel and all elements inside it enabled when the logical expression evaluates to true. Otherwise, keep them disabled."
      panel_enableDescription: "Aktiverer panelet, og alle elementer inni, når formelen evalueres til 'sann'. I andre tilfeller holdes de deaktivert.",
      // "Make the question visible when the logical expression evaluates to true. Otherwise, keep the question invisible."
      question_visibilityDescription: "Gjør spørsmålet synlig når formelen evalueres til 'sann', og holder den ellers usynlig.",
      // "Make the question enabled when the logical expression evaluates to true. Otherwise, keep the question disabled."
      question_enableDescription: "Aktiverer spørsmålet når formelen evalueres til 'sann', og holder den ellers deaktivert.",
      // "Question becomes required when the logical expression evaluates to true."
      question_requireDescription: "Spørmsålet blir påkrevd når formelen evalueres til 'sann'.",
      // "When the logical expression evaluates to true, the survey ends, and the respondent sees the \"Thank you\" page."
      trigger_completeDescription: "Når formelen evalueres til 'sann' fullføres skjemaet og sluttbrukeren ser 'Takk-siden'.",
      // "When question values used in the logical expression are changed, and the expression evaluates to true, the specified value is assigned to the selected question."
      trigger_setvalueDescription: "Når spørsmålsverdier som er brukt i formelen endres, og formelen evalueres som 'sann', vil verdien settes i det valgte spørsmålet.",
      // "When question values used in the logical expression are changed, and the expression evaluates to true, the value of the selected question is copied to another question."
      trigger_copyvalueDescription: "Når spørsmålsverdier som er brukt i formelen endres, og formelen evalueres som 'sann', vil verdien i et valgt spørsmål kopieres til et annet valgt spørsmål.",
      // "When the logical expression evaluates to true, the survey focuses/jumps to the selected question."
      trigger_skipDescription: "Når formelen evalueres til 'sann' vil skjemaet hoppe til/fokusere på valgt spørsmål.",
      // "When the logical expression evaluates to true, the survey evaluates another expression. Optionally, the result of the latter expression can be assigned as a value to the selected question"
      trigger_runExpressionDescription: "Når formelen evauleres til 'sann' vil den tilpassede formelen utføres. Du kan valgfritt sette formelens resultat inn i det valgte spørsmålet.",
      // "If the logical expression evaluates to true, the \"Thank You\" page displays the specified content."
      completedHtmlOnConditionDescription: "Hvis formelen evalueres til 'sann' vil standardteksten på 'Takk siden' endres til den gitte teksten.",
      // "When expression: '{0}' returns true"
      itemExpressionText: "Når formelen: '{0}' evalueres til 'sann':", // {0} - the expression
      // [Auto-translated] "New rule"
      itemEmptyExpressionText: "Ny regel",
      // "make page {0} visible"
      page_visibilityText: "Gjøre side {0} synlig", // {0} page name
      // "make panel {0} visible"
      panel_visibilityText: "Gjør panel {0} synlig", // {0} panel name
      // "make panel {0} enable"
      panel_enableText: "Gjør panel {0} aktivert", // {0} panel name
      // "make question {0} visible"
      question_visibilityText: "Gjør spørsmål {0} synlig", // {0} question name
      // "make question {0} enable"
      question_enableText: "Gjør spørsmål {0} aktivert", // {0} question name
      // "make question {0} required"
      question_requireText: "Gjør spørsmål {0} påkrevd", // {0} question name
      // [Auto-translated] "reset value for question: {0}"
      question_resetValueText: "Tilbakestill verdi for spørsmål: {0}", // {0} question name.
      // [Auto-translated] "assign value: {1} to question: {0}"
      question_setValueText: "tilordne verdi: {1} til spørsmålet: {0}", // {0} question name and {1} setValueExpression
      // [Auto-translated] "make column {0} of question {1} visible"
      column_visibilityText: "Gjør kolonne {0} av spørsmålet {1} synlig", // {0} column name, {1} question name
      // [Auto-translated] "make column {0} of question {1} enable"
      column_enableText: "Gjør kolonne {0} av spørsmålet {1} aktiver", // {0} column name, {1} question name
      // [Auto-translated] "make column {0} of question {1} required"
      column_requireText: "Gjør kolonne {0} av spørsmålet {1} nødvendig", // {0} column name, {1} question name
      // [Auto-translated] "reset cell value for column: {0}"
      column_resetValueText: "Tilbakestill celleverdi for kolonne: {0}", // {0} column name
      // [Auto-translated] "assign cell value: {1} to column: {0}"
      column_setValueText: "Tilordne celleverdi: {1} til kolonne: {0}", // {0} column name and {1} setValueExpression
      // [Auto-translated] "An expression whose result will be assigned to the target question."
      setValueExpressionPlaceholder: "Et uttrykk der resultatet skal tilordnes målspørsmålet.",
      // "survey becomes completed"
      trigger_completeText: "Skjemaet blir fullført",
      // "set into question: {0} value {1}"
      trigger_setvalueText: "Sett inn: {0} verdi {1}", // {0} question name, {1} setValue
      // [Auto-translated] "clear question value: {0}"
      trigger_setvalueEmptyText: "Klar spørsmålsverdi: {0}", // {0} question name
      // "copy into question: {0} value from question {1}"
      trigger_copyvalueText: "Kopier inn: {0} verdi fra spørsmål {1}", // {0} and {1} question names
      // "survey skip to the question {0}"
      trigger_skipText: "Hopp til spørsmål {0}", // {0} question name
      // "run expression: '{0}'"
      trigger_runExpressionText1: "Kjør formel: '{0}'", // {0} the expression
      // " and set its result into question: {0}"
      trigger_runExpressionText2: " og sett inn resultatet i spørsmål: {0}", // {0} question name
      // "show custom text for the \"Thank You\" page."
      completedHtmlOnConditionText: "Vis tilpasset tekst for 'Takk-siden'.",
      // [Auto-translated] "All Questions"
      showAllQuestions: "Alle spørsmål",
      // [Auto-translated] "All Action Types"
      showAllActionTypes: "Alle handlingstyper",
      // "Condition(s)"
      conditions: "Vilkår",
      // "Action(s)"
      actions: "Handling(er)",
      // "Define condition(s)"
      expressionEditorTitle: "Definer vilkår",
      // "Define action(s)"
      actionsEditorTitle: "Definer handling(er)",
      // "Delete Action"
      deleteAction: "Slett handling",
      // "Add Action"
      addNewAction: "Legg til handling",
      // "Select action..."
      selectedActionCaption: "Velg handling som skal legges til...",
      // "The logic expression is empty or invalid. Please correct it."
      expressionInvalid: "Formelen er tom eller ugyldig. Vennligst korriger den.",
      // "Please add at least one action."
      noActionError: "Vennligst legg til minst en handling",
      // "Please fix issues in your action(s)."
      actionInvalid: "Vennligst korriger problemer med handlingen.",
      // [Auto-translated] "Logical rules are incomplete"
      uncompletedRule_title: "Logiske regler er ufullstendige",
      // [Auto-translated] "You have not completed some of the logical rules. If you leave the tab now, the changes will be lost. Do you still want to leave the tab without completing the changes?"
      uncompletedRule_text: "Noen av de logiske reglene har du ikke fullført. Hvis du forlater fanen nå, vil endringene gå tapt. Vil du fortsatt forlate fanen uten å fullføre endringene?",
      // [Auto-translated] "Yes"
      uncompletedRule_apply: "Ja",
      // [Auto-translated] "No, I want to complete the rules"
      uncompletedRule_cancel: "Nei, jeg vil fullføre reglene"
    }
  },
  // Property Editors
  pe: {
    panel: {
      // [Auto-translated] "Panel name"
      name: "Navn på panel",
      // [Auto-translated] "Panel title"
      title: "Panelets tittel",
      // [Auto-translated] "Panel description"
      description: "Beskrivelse av panelet",
      // [Auto-translated] "Make the panel visible if"
      visibleIf: "Gjør panelet synlig hvis",
      // [Auto-translated] "Make the panel required if"
      requiredIf: "Gjør panelet nødvendig hvis",
      // [Auto-translated] "Question order within the panel"
      questionOrder: "Spørsmålsrekkefølge i panelet",
      // [Auto-translated] "Move the panel to page"
      page: "Flytte panelet til side",
      // [Auto-translated] "Display the panel on a new line"
      startWithNewLine: "Vise panelet på en ny linje",
      // [Auto-translated] "Panel collapse state"
      state: "Tilstand for panelkollaps",
      // [Auto-translated] "Inline panel width"
      width: "Innebygd panelbredde",
      // [Auto-translated] "Minimum panel width"
      minWidth: "Minimum panelbredde",
      // [Auto-translated] "Maximum panel width"
      maxWidth: "Maksimal panelbredde",
      // [Auto-translated] "Number this panel"
      showNumber: "Nummerer dette panelet"
    },
    panellayoutcolumn: {
      // [Auto-translated] "Effective width, %"
      effectiveWidth: "Effektiv bredde, %",
      // [Auto-translated] "Question title width, px"
      questionTitleWidth: "Oppgavetittel bredde, px"
    },
    paneldynamic: {
      // [Auto-translated] "Panel name"
      name: "Navn på panel",
      // [Auto-translated] "Panel title"
      title: "Panelets tittel",
      // [Auto-translated] "Panel description"
      description: "Beskrivelse av panelet",
      // [Auto-translated] "Entry display mode"
      displayMode: "Inngangsvisningsmodus",
      // [Auto-translated] "Make the panel visible if"
      visibleIf: "Gjør panelet synlig hvis",
      // [Auto-translated] "Make the panel required if"
      requiredIf: "Gjør panelet nødvendig hvis",
      // [Auto-translated] "Move the panel to page"
      page: "Flytte panelet til siden",
      // [Auto-translated] "Display the panel on a new line"
      startWithNewLine: "Vise panelet på en ny linje",
      // [Auto-translated] "Panel collapse state"
      state: "Status for panelskjuling",
      // [Auto-translated] "Inline panel width"
      width: "Innebygd panelbredde",
      // [Auto-translated] "Minimum panel width"
      minWidth: "Minimum panelbredde",
      // [Auto-translated] "Maximum panel width"
      maxWidth: "Maksimal panelbredde",
      // [Auto-translated] "Confirm entry removal"
      confirmDelete: "Bekreft fjerning av oppføring",
      // [Auto-translated] "Entry description pattern"
      templateDescription: "Mønster for oppføringsbeskrivelse",
      // [Auto-translated] "Entry title pattern"
      templateTitle: "Mønster for oppføringstittel",
      // [Auto-translated] "Empty panel text"
      noEntriesText: "Tom paneltekst",
      // [Auto-translated] "Tab title pattern"
      templateTabTitle: "Mønster for tabulatortittel",
      // [Auto-translated] "Tab title placeholder"
      tabTitlePlaceholder: "Plassholder for tabulatortittel",
      // [Auto-translated] "Make an individual entry visible if"
      templateVisibleIf: "Gjør en individuell oppføring synlig hvis",
      // [Auto-translated] "Number the panel"
      showNumber: "Nummerer panelet",
      // [Auto-translated] "Panel title alignment"
      titleLocation: "Justering av paneltittel",
      // [Auto-translated] "Panel description alignment"
      descriptionLocation: "Justering av panelbeskrivelse",
      // [Auto-translated] "Question title alignment"
      templateQuestionTitleLocation: "Justering av spørsmålstittel",
      // [Auto-translated] "Question title width"
      templateQuestionTitleWidth: "Bredde på oppgavetittel",
      // [Auto-translated] "Error message alignment"
      templateErrorLocation: "Justering av feilmelding",
      // [Auto-translated] "New entry location"
      newPanelPosition: "Ny inngangsplassering",
      // [Auto-translated] "Show the progress bar"
      showRangeInProgress: "Vis fremdriftslinjen",
      // [Auto-translated] "Prevent duplicate responses in the following question"
      keyName: "Forhindre dupliserte svar i følgende spørsmål"
    },
    question: {
      // [Auto-translated] "Question name"
      name: "Spørsmål navn",
      // [Auto-translated] "Question title"
      title: "Spørsmål tittel",
      // [Auto-translated] "Question description"
      description: "Beskrivelse av spørsmål",
      // [Auto-translated] "Show the title and description"
      showTitle: "Vis tittelen og beskrivelsen",
      // [Auto-translated] "Make the question visible if"
      visibleIf: "Gjør spørsmålet synlig hvis",
      // [Auto-translated] "Make the question required if"
      requiredIf: "Gjør spørsmålet nødvendig hvis",
      // [Auto-translated] "Move the question to page"
      page: "Flytt spørsmålet til side",
      // [Auto-translated] "Question box collapse state"
      state: "Skjul tilstand for spørsmålsboks",
      // [Auto-translated] "Number this question"
      showNumber: "Nummerering av dette spørsmålet",
      // [Auto-translated] "Question title alignment"
      titleLocation: "Justering av spørsmålstittel",
      // [Auto-translated] "Question description alignment"
      descriptionLocation: "Justering av spørsmålsbeskrivelse",
      // [Auto-translated] "Error message alignment"
      errorLocation: "Justering av feilmelding",
      // [Auto-translated] "Increase the inner indent"
      indent: "Øke det indre innrykket",
      // [Auto-translated] "Inline question width"
      width: "Bredde på innebygde spørsmål",
      // [Auto-translated] "Minimum question width"
      minWidth: "Minimum spørsmålsbredde",
      // [Auto-translated] "Maximum question width"
      maxWidth: "Maksimal spørsmålsbredde",
      // [Auto-translated] "Update input field value"
      textUpdateMode: "Oppdater verdi for inndatafelt"
    },
    signaturepad: {
      // [Auto-translated] "Signature area width"
      signatureWidth: "Bredde på signaturområde",
      // [Auto-translated] "Signature area height"
      signatureHeight: "Signaturområdets høyde",
      // [Auto-translated] "Auto-scale the signature area"
      signatureAutoScaleEnabled: "Skalere signaturområdet automatisk",
      // [Auto-translated] "Show a placeholder within signature area"
      showPlaceholder: "Vise en plassholder i signaturområdet",
      // [Auto-translated] "Placeholder text"
      placeholder: "Plassholdertekst",
      // [Auto-translated] "Placeholder text in read-only or preview mode"
      placeholderReadOnly: "Plassholdertekst i skrivebeskyttet modus eller forhåndsvisningsmodus",
      // [Auto-translated] "Show the Clear button within signature area"
      allowClear: "Vis Slett-knappen i signaturområdet",
      // [Auto-translated] "Minimum stroke width"
      penMinWidth: "Minste strøkbredde",
      // [Auto-translated] "Maximum stroke width"
      penMaxWidth: "Maksimal strøkbredde",
      // [Auto-translated] "Stroke color"
      penColor: "Strekfarge"
    },
    comment: {
      // [Auto-translated] "Input field height (in lines)"
      rows: "Høyde på inndatafelt (i linjer)"
    },
    // "Question numbering"
    showQuestionNumbers: "Vis spørsmålsnummer",
    // "Question indexing type"
    questionStartIndex: "Spørsmål startindeks (1, 2 eller 'A', 'a')",
    expression: {
      // [Auto-translated] "Expression name"
      name: "Navn på uttrykk",
      // [Auto-translated] "Expression title"
      title: "Tittel på uttrykk",
      // [Auto-translated] "Expression description"
      description: "Beskrivelse av uttrykk",
      // [Auto-translated] "Expression"
      expression: "Uttrykk"
    },
    trigger: {
      // [Auto-translated] "Expression"
      expression: "Uttrykk"
    },
    calculatedvalue: {
      // [Auto-translated] "Expression"
      expression: "Uttrykk"
    },
    // survey templates
    survey: {
      // [Auto-translated] "Survey title"
      title: "Tittel på undersøkelsen",
      // [Auto-translated] "Survey description"
      description: "Beskrivelse av undersøkelsen",
      // [Auto-translated] "Make the survey read-only"
      readOnly: "Gjør undersøkelsen skrivebeskyttet"
    },
    page: {
      // [Auto-translated] "Page name"
      name: "Sidenavn",
      // [Auto-translated] "Page title"
      title: "Sidetittel",
      // [Auto-translated] "Page description"
      description: "Beskrivelse av siden",
      // [Auto-translated] "Make the page visible if"
      visibleIf: "Gjøre siden synlig hvis",
      // [Auto-translated] "Make the page required if"
      requiredIf: "Gjør siden obligatorisk hvis",
      // [Auto-translated] "Time limit to complete the page"
      timeLimit: "Tidsbegrensning for å fullføre siden",
      // [Auto-translated] "Question order on the page"
      questionOrder: "Spørsmålsrekkefølge på siden"
    },
    matrixdropdowncolumn: {
      // [Auto-translated] "Column name"
      name: "Navn på kolonne",
      // [Auto-translated] "Column title"
      title: "Kolonne tittel",
      // [Auto-translated] "Prevent duplicate responses"
      isUnique: "Forhindre dupliserte svar",
      // [Auto-translated] "Column width"
      width: "Kolonnebredden",
      // [Auto-translated] "Minimum column width"
      minWidth: "Minimum kolonnebredde",
      // [Auto-translated] "Input field height (in lines)"
      rows: "Høyde på inndatafelt (i linjer)",
      // [Auto-translated] "Make the column visible if"
      visibleIf: "Gjøre kolonnen synlig hvis",
      // [Auto-translated] "Make the column required if"
      requiredIf: "Gjør kolonnen obligatorisk hvis",
      // [Auto-translated] "Each option in a separate column"
      showInMultipleColumns: "Hvert alternativ i en egen kolonne"
    },
    matrixcolumn: {
      // [Auto-translated] "Clear others in the same row"
      isExclusive: "Fjern andre i samme rad"
    },
    multipletextitem: {
      // [Auto-translated] "Name"
      name: "Navn",
      // [Auto-translated] "Title"
      title: "Tittel"
    },
    masksettings: {
      // [Auto-translated] "Save masked value in survey results"
      saveMaskedValue: "Lagre maskert verdi i undersøkelsesresultater"
    },
    patternmask: {
      // [Auto-translated] "Value pattern"
      pattern: "Verdimønster"
    },
    datetimemask: {
      // [Auto-translated] "Minimum value"
      min: "Minimumsverdi",
      // [Auto-translated] "Maximum value"
      max: "Maksimumsverdi"
    },
    numericmask: {
      // [Auto-translated] "Allow negative values"
      allowNegativeValues: "Tillat negative verdier",
      // [Auto-translated] "Thousands separator"
      thousandsSeparator: "Tusenskilletegn",
      // [Auto-translated] "Decimal separator"
      decimalSeparator: "Desimalskilletegn",
      // [Auto-translated] "Value precision"
      precision: "Prisgunstig presisjon",
      // [Auto-translated] "Minimum value"
      min: "Minimumsverdi",
      // [Auto-translated] "Maximum value"
      max: "Maksimumsverdi"
    },
    currencymask: {
      // [Auto-translated] "Currency prefix"
      prefix: "Prefiks for valuta",
      // [Auto-translated] "Currency suffix"
      suffix: "Valutasuffiks"
    },
    // [Auto-translated] "Clear others when selected"
    isExclusive: "Fjern andre når det er valgt",
    // [Auto-translated] "Display both text and value"
    showValue: "Vis både tekst og verdi",
    // [Auto-translated] "Require user to enter a comment"
    isCommentRequired: "Krev at brukeren skriver inn en kommentar",
    // "Display area height"
    imageHeight: "Bildehøyde",
    // "Display area width"
    imageWidth: "Bildebredde",
    // "Join identifier"
    valueName: "Verdinavn",
    // [Auto-translated] "Default display value for dynamic texts"
    defaultDisplayValue: "Standard visningsverdi for dynamiske tekster",
    // [Auto-translated] "Label alignment"
    rateDescriptionLocation: "Justering av etiketter",
    // [Auto-translated] "Input field width (in characters)"
    size: "Bredde på inndatafelt (i tegn)",
    // [Auto-translated] "Cell error message alignment"
    cellErrorLocation: "Justering av cellefeilmelding",
    // [Auto-translated] "Enabled"
    enabled: "Aktivert",
    // [Auto-translated] "Disabled"
    disabled: "Ufør",
    // [Auto-translated] "Inherit"
    inherit: "Arve",
    // "Apply"
    apply: "Bruk",
    // "OK"
    ok: "OK",
    // "Save"
    save: "Lagre",
    // [Auto-translated] "Clear"
    clear: "Klar",
    // "Save"
    saveTooltip: "Lagre",
    // "Cancel"
    cancel: "Avbryt",
    // [Auto-translated] "Set"
    set: "Sett",
    // "Reset"
    reset: "Tilbakestill",
    // [Auto-translated] "Change"
    change: "Forandre",
    // "Refresh"
    refresh: "Last inn på nytt",
    // [Auto-translated] "Close"
    close: "Lukke",
    // "Delete"
    delete: "Slett",
    // "Add"
    add: "Legg til",
    // "Add New"
    addNew: "Legg til ny",
    // "Click to add an item..."
    addItem: "Klikk for å legge til...",
    // [Auto-translated] "Click to remove the item..."
    removeItem: "Klikk for å fjerne elementet...",
    // [Auto-translated] "Drag the item"
    dragItem: "Dra elementet",
    // "Other"
    addOther: "Annet",
    // "Select All"
    addSelectAll: "Velg alt",
    // "None"
    addNone: "Ingen",
    // "Remove All"
    removeAll: "Fjern alt",
    // "Edit"
    edit: "Rediger",
    // "Return without saving"
    back: "Gå tilbake uten å lagre",
    // "Return without saving"
    backTooltip: "Gå tilbake uten å lagre",
    // "Save and return"
    saveAndBack: "Lagre og gå tilbake",
    // "Save and return"
    saveAndBackTooltip: "Lagre og gå tilbake",
    // [Auto-translated] "Done"
    doneEditing: "Gjort",
    // "Edit Choices"
    editChoices: "Rediger valg",
    // "Show Choices"
    showChoices: "Vis valg",
    // "Move"
    move: "Flytt",
    // "<empty>"
    empty: "<tom>",
    // [Auto-translated] "Value is empty"
    emptyValue: "Verdien er tom",
    // "Manual Entry"
    fastEntry: "Rask innfylling",
    // [Auto-translated] "Value '{0}' is not unique"
    fastEntryNonUniqueError: "Verdien «{0}» er ikke unik",
    // [Auto-translated] "Please limit the number of items from {0} to {1}"
    fastEntryChoicesCountError: "Begrens antall varer fra {0} til {1}",
    // [Auto-translated] "Please enter at least {0} items"
    fastEntryChoicesMinCountError: "Vennligst skriv inn minst {0} elementer",
    // [Auto-translated] "Enter the list of choice options and their IDs in the following format:\n\nid|option\n\nA choice option ID is not visible to respondents and can be used in conditional rules."
    fastEntryPlaceholder: "Skriv inn listen over valgalternativer og ID-ene deres i følgende format:\n\nid|alternativ\n\nEn valgalternativ-ID er ikke synlig for respondenter og kan brukes i betingede regler.",
    // "Form Entry"
    formEntry: "Innfylling i skjema",
    // "Test the service"
    testService: "Sjekk tjenesten",
    // "Please select the element"
    itemSelectorEmpty: "Vennligst velg elementet",
    // "Please select the action"
    conditionActionEmpty: "Velg handlingen",
    // "Select a question..."
    conditionSelectQuestion: "Velg spørsmål...",
    // "Select a page..."
    conditionSelectPage: "Velg side...",
    // "Select a panel..."
    conditionSelectPanel: "Velg panel...",
    // "Please enter/select the value"
    conditionValueQuestionTitle: "Vennligst skriv inn/velg verdi",
    // "Press ctrl+space to get expression completion hint"
    aceEditorHelp: "Trykk ctrl+mellomrom for å få hint til å fullføre formler",
    // "Current row"
    aceEditorRowTitle: "Gjeldende rad",
    // "Current panel"
    aceEditorPanelTitle: "Gjeldende panel",
    // "For more details please check the documentation"
    showMore: "For mer detaljer - se dokumentasjonen",
    // "Available questions"
    assistantTitle: "Tilgjengelige spørsmål:",
    // "There is should be at least one column or row"
    cellsEmptyRowsColumns: "Det må være minst 1 kolonne eller rad",
    // [Auto-translated] "Review before submit"
    showPreviewBeforeComplete: "Gjennomgå før du sender inn",
    // [Auto-translated] "Enabled by a condition"
    overridingPropertyPrefix: "Aktivert av en betingelse",
    // [Auto-translated] "Reset"
    resetToDefaultCaption: "Nullstille",
    // "Please enter a value"
    propertyIsEmpty: "Vennligst fyll inn en verdi",
    // [Auto-translated] "Please enter a unique value"
    propertyIsNoUnique: "Angi en unik verdi",
    // "Please enter a unique name"
    propertyNameIsNotUnique: "Vennligst fyll inn et unikt navn",
    // "Do not use reserved words: \"item\", \"choice\", \"panel\", \"row\"."
    propertyNameIsIncorrect: "Ikke bruk reserverte ord: \"element\", \"valg\", \"panel\", \"rad\".",
    // "You don't have any items yet"
    listIsEmpty: "Legg til nytt element",
    // [Auto-translated] "You don't have any choices yet"
    "listIsEmpty@choices": "Du har ingen valg ennå",
    // [Auto-translated] "You don't have any columns yet"
    "listIsEmpty@columns": "Du har ingen kolonner ennå",
    // [Auto-translated] "You don't have layout columns yet"
    "listIsEmpty@gridLayoutColumns": "Du har ikke oppsettkolonner ennå",
    // [Auto-translated] "You don't have any rows yet"
    "listIsEmpty@rows": "Du har ingen rader ennå",
    // [Auto-translated] "You don't have any validation rules yet"
    "listIsEmpty@validators": "Du har ingen valideringsregler ennå",
    // [Auto-translated] "You don't have any custom variables yet"
    "listIsEmpty@calculatedValues": "Du har ingen egendefinerte variabler ennå",
    // [Auto-translated] "You don't have any triggers yet"
    "listIsEmpty@triggers": "Du har ingen utløsere ennå",
    // [Auto-translated] "You don't have any links yet"
    "listIsEmpty@navigateToUrlOnCondition": "Du har ingen koblinger ennå",
    // [Auto-translated] "You don't have any pages yet"
    "listIsEmpty@pages": "Du har ingen sider ennå",
    // [Auto-translated] "Add new choice"
    "addNew@choices": "Legg til nytt valg",
    // [Auto-translated] "Add new column"
    "addNew@columns": "Legg til ny kolonne",
    // [Auto-translated] "Add new row"
    "addNew@rows": "Legg til ny rad",
    // [Auto-translated] "Add new rule"
    "addNew@validators": "Legg til ny regel",
    // [Auto-translated] "Add new variable"
    "addNew@calculatedValues": "Legg til ny variabel",
    // [Auto-translated] "Add new trigger"
    "addNew@triggers": "Legg til ny utløser",
    // [Auto-translated] "Add new URL"
    "addNew@navigateToUrlOnCondition": "Legg til ny URL-adresse",
    // [Auto-translated] "Add new page"
    "addNew@pages": "Legg til ny side",
    // "Expression is empty"
    expressionIsEmpty: "Formelen er tom",
    // "Value"
    value: "Verdi",
    // "Text"
    text: "Tekst",
    // "Row ID"
    rowid: "Rad-ID",
    // "Image or video file URL"
    imageLink: "Bildelenke",
    // "Edit column: {0}"
    columnEdit: "Rediger kolonne: {0}",
    // "Edit item: {0}"
    itemEdit: "Rediger element: {0}",
    // "URL"
    url: "URL",
    // "Path to data"
    path: "Sti",
    choicesbyurl: {
      // [Auto-translated] "Web service URL"
      url: "URL-adresse til webtjeneste",
      // [Auto-translated] "Get value to store from the following property"
      valueName: "Få verdi å lagre fra følgende egenskap"
    },
    // "Get value to display from the following property"
    titleName: "Tittelnavn",
    // [Auto-translated] "Get file URLs from the following property"
    imageLinkName: "Hent fil-URL-adresser fra følgende område",
    // [Auto-translated] "Accept empty response"
    allowEmptyResponse: "Godta tomt svar",
    // "Title"
    titlePlaceholder: "Skriv tittel her",
    // "Survey Title"
    surveyTitlePlaceholder: "Skriv skjematittel her",
    // "Page {num}"
    pageTitlePlaceholder: "Skriv sidetittel her",
    // [Auto-translated] "Start Page"
    startPageTitlePlaceholder: "Startside",
    // "Description"
    descriptionPlaceholder: "Skriv beskrivelse",
    // "Description"
    surveyDescriptionPlaceholder: "Skriv skjema-beskrivelse",
    // "Description"
    pageDescriptionPlaceholder: "Skriv side-beskrivelse",
    // [Auto-translated] "Wrap choices"
    textWrapEnabled: "Valg for innpakning",
    // "Enable the \"Other\" option"
    showOtherItem: "Har annet element",
    // "Rename the \"Other\" option"
    otherText: "Annet element-tekst",
    // "Enable the \"None\" option"
    showNoneItem: "Har velg ingen",
    // [Auto-translated] "Enable the \"Refuse to Answer\" option"
    showRefuseItem: "Aktiver alternativet \"Nekt å svare\"",
    // [Auto-translated] "Enable the \"Don't Know\" option"
    showDontKnowItem: "Aktiver alternativet \"Vet ikke\"",
    // "Rename the \"None\" option"
    noneText: "Velg ingen-tekst",
    // "Enable the \"Select All\" option"
    showSelectAllItem: "Har velg alt-element",
    // "Rename the \"Select All\" option"
    selectAllText: "Velg alt elememt-tekst",
    // "Minimum value for auto-generated items"
    choicesMin: "Minsteverdi for auto-genererte elementer",
    // "Maximum value for auto-generated items"
    choicesMax: "Maksverdi for auto-genererte elementer",
    // "Step value for auto-generated items"
    choicesStep: "Forskjellene mellom auto-genererte elementer",
    // "Name"
    name: "Navn",
    // "Title"
    title: "Tittel",
    // "Cell input type"
    cellType: "Celletype",
    // "Column count"
    colCount: "Antall kolonner",
    // "Choice order"
    choicesOrder: "Velg rekkefølge på valg",
    // [Auto-translated] "Allow custom choices"
    allowCustomChoices: "Tillat egendefinerte valg",
    // "Visible"
    visible: "Er synlig?",
    // "Required"
    isRequired: "Er nødvendig?",
    // [Auto-translated] "Mark as required"
    markRequired: "Merk etter behov",
    // [Auto-translated] "Remove the required mark"
    removeRequiredMark: "Fjern ønsket merke",
    // "Require an answer in each row"
    eachRowRequired: "Nødvendig svar for alle rader",
    // [Auto-translated] "Prevent duplicate responses in rows"
    eachRowUnique: "Forhindre dupliserte svar i rader",
    // "Error message for required questions"
    requiredErrorText: "Nødvendig feilmelding",
    // "Display the question on a new line"
    startWithNewLine: "Må starte med ny linje?",
    // "Rows"
    rows: "Antall rader",
    // "Columns"
    cols: "Antall kolonner",
    // "Placeholder text within input field"
    placeholder: "Hjelpetekst",
    // "Show preview area"
    showPreview: "Er forhåndsvisning av bilde vist?",
    // "Store file content in JSON result as text"
    storeDataAsText: "Lagre filinnhold i JSON-resultat som tekst",
    // "Maximum file size (in bytes)"
    maxSize: "Maksimum filstørrelse i bytes",
    // "Row count"
    rowCount: "Antall rader",
    // "Columns layout"
    columnLayout: "Antall kolonner",
    // "\"Add Row\" button alignment"
    addRowButtonLocation: "Legg til rad knapp-plassering",
    // [Auto-translated] "Transpose rows to columns"
    transposeData: "Transponere rader til kolonner",
    // "\"Add Row\" button text"
    addRowText: "Legg til rad knapp-tekst",
    // "\"Remove Row\" button text"
    removeRowText: "Fjern rad knapp-tekst",
    // [Auto-translated] "Input field title pattern"
    singleInputTitleTemplate: "Tittelmønster for inndatafelt",
    // "Minimum rating value"
    rateMin: "Minimum sats",
    // "Maximum rating value"
    rateMax: "Maksimum sats",
    // "Step value"
    rateStep: "Sats steg",
    // "Minimum value label"
    minRateDescription: "Beskrivelse minimumsvudering",
    // "Maximum value label"
    maxRateDescription: "Beskrivelse maksimumsvurdering",
    // "Input type"
    inputType: "Inndata-type",
    // "Option placeholder"
    optionsCaption: "Tekst for alternativer",
    // "Default Answer"
    defaultValue: "Standardverdi",
    // "Default texts"
    cellsDefaultRow: "Standard celletekster",
    // "Edit survey settings"
    surveyEditorTitle: "Rediger skjemainnstillinger",
    // "Edit: {0}"
    qEditorTitle: "Rediger: {0}",
    // "Maximum character limit"
    maxLength: "Maksimum lengde",
    // "Build"
    buildExpression: "Bygg",
    // "Edit"
    editExpression: "Rediger",
    // [Auto-translated] "and"
    and: "og",
    // [Auto-translated] "or"
    or: "eller",
    // "Remove"
    remove: "Fjern",
    // "Add Condition"
    addCondition: "Legg til",
    // [Auto-translated] "Select a question to start configuring conditions."
    emptyLogicPopupMessage: "Velg et spørsmål for å begynne å konfigurere betingelsene.",
    // [Auto-translated] "If"
    if: "Hvis",
    // [Auto-translated] "then"
    then: "da",
    // [Auto-translated] "Target question"
    setToName: "Målspørsmål",
    // [Auto-translated] "Question to copy answer from"
    fromName: "Spørsmål å kopiere svar fra",
    // [Auto-translated] "Question to skip to"
    gotoName: "Spørsmål å hoppe til",
    // [Auto-translated] "Rule is incorrect"
    ruleIsNotSet: "Regelen er feil",
    // [Auto-translated] "Add to the survey results"
    includeIntoResult: "Legg til i undersøkelsesresultatene",
    // "Make the title and description visible"
    showTitle: "Vis/skjul tittel",
    // "Expand/collapse title"
    expandCollapseTitle: "Utvid/krymp tittel",
    // "Select a survey language"
    locale: "Standard språk",
    // "Select device type"
    simulator: "Velg enhet",
    // "Switch to landscape orientation"
    landscapeOrientation: "Liggende",
    // [Auto-translated] "Switch to portrait orientation"
    portraitOrientation: "Bytte til stående papirretning",
    // "Clear hidden question values"
    clearInvisibleValues: "Fjern usynlige verdier",
    // "Limit to one response"
    cookieName: "Informasjonskapsel navn (for å hindre bruk av skjema to ganger lokalt)",
    // "Auto-save survey progress on page change"
    partialSendEnabled: "Send skjema resultat ved neste side",
    // "Save the \"Other\" option value as a separate property"
    storeOthersAsComment: "Lagre 'andre' verdier i et separat felt",
    // "Show page titles"
    showPageTitles: "Vis sidetittel",
    // "Show page numbers"
    showPageNumbers: "Vis sidenummer",
    // "\"Previous Page\" button text"
    pagePrevText: "Forrige side knapp tekst",
    // "\"Next Page\" button text"
    pageNextText: "Neste side knapp tekst",
    // "\"Complete Survey\" button text"
    completeText: "Fullfør knapp tekst",
    // "\"Review Answers\" button text"
    previewText: "Forhåndsvisning knapp tekst",
    // "\"Edit Answer\" button text"
    editText: "Rediger knapp tekst",
    // "\"Start Survey\" button text"
    startSurveyText: "Start knapp tekst",
    // "Show navigation buttons"
    showNavigationButtons: "Vis navigasjonsknapper (standard navigering)",
    // [Auto-translated] "Navigation buttons alignment"
    navigationButtonsLocation: "Justering av navigasjonsknapper",
    // "Show the \"Previous Page\" button"
    showPrevButton: "Vis forrige knapp (bruker kan gå til forrige side)",
    // "First page is a start page"
    firstPageIsStartPage: "Den første siden i skjema er startside.",
    // "Show the \"Thank You\" page"
    showCompletePage: "Vis ferdigsiden på slutten (completedHtml)",
    // "Auto-advance to the next page"
    autoAdvanceEnabled: "Når en har svart alle spørsmål, gå til neste side automatisk",
    // [Auto-translated] "Complete the survey automatically"
    autoAdvanceAllowComplete: "Fullfør undersøkelsen automatisk",
    // "Show the progress bar"
    showProgressBar: "Vis fremdriftslinje",
    // [Auto-translated] "Progress bar alignment"
    progressBarLocation: "Justering av fremdriftslinje",
    // "Question title alignment"
    questionTitleLocation: "Spørsmål tittel plassering",
    // "Question title width"
    questionTitleWidth: "Bredde på spørsmålstittel",
    // "Required symbol(s)"
    requiredMark: "Svar nødvendig symbol(er)",
    // "Question title template, default is: '{no}. {require} {title}'"
    questionTitleTemplate: "Spørsmål tittel mal, standard er: '{no}. {require} {title}'",
    // "Error message alignment"
    questionErrorLocation: "Spørsmål feil plassering",
    // "Focus first question on a new page"
    autoFocusFirstQuestion: "Sett fokus på første spørsmål når en endrer side",
    // "Question order"
    questionOrder: "Rekkefølge på elementer på siden",
    // "Time limit to complete the survey"
    timeLimit: "Maks tid for å gjøre ferdig skjema",
    // "Time limit to complete one page"
    timeLimitPerPage: "Maks tid til å gjøre ferdig en side i skjema",
    // [Auto-translated] "Use a timer"
    showTimer: "Bruk en tidtaker",
    // "Timer alignment"
    timerLocation: "Vis tidtaking",
    // "Timer mode"
    timerInfoMode: "Vis tidtaking-modus",
    // "Panel display mode"
    renderMode: "Gjengivelse modus",
    // "Enable entry addition"
    allowAddPanel: "Tillat å legge til panel",
    // "Enable entry removal"
    allowRemovePanel: "Tillat å fjerne panel",
    // "\"Add Entry\" button text"
    addPanelText: "Legg til panel tekst",
    // "\"Remove Entry\" button text"
    removePanelText: "Fjern panel tekst",
    // "Show all elements on one page"
    isSinglePage: "Vis alle elementer på en side",
    // "HTML markup"
    html: "HTML",
    // [Auto-translated] "Answer"
    setValue: "Svare",
    // [Auto-translated] "Storage format"
    dataFormat: "Lagringsformat",
    // [Auto-translated] "Enable row addition"
    allowAddRows: "Aktivere radtillegg",
    // [Auto-translated] "Enable row removal"
    allowRemoveRows: "Aktiver fjerning av rader",
    // [Auto-translated] "Enable row reordering"
    allowRowReorder: "Aktivere omorganisering av rader",
    // [Auto-translated] "Does not apply if you specify the exact display area width or height."
    responsiveImageSizeHelp: "Gjelder ikke hvis du angir nøyaktig bredde eller høyde på visningsområdet.",
    // [Auto-translated] "Minimum display area width"
    minImageWidth: "Minste bredde på visningsområdet",
    // [Auto-translated] "Maximum display area width"
    maxImageWidth: "Maksimal bredde på visningsområdet",
    // [Auto-translated] "Minimum display area height"
    minImageHeight: "Minimum høyde på visningsområdet",
    // [Auto-translated] "Maximum display area height"
    maxImageHeight: "Maksimal visningsområdehøyde",
    // "Minimum value"
    minValue: "Minimumsverdi",
    // "Maximum value"
    maxValue: "Maksimal verdi",
    // [Auto-translated] "Case insensitive"
    caseInsensitive: "Skiller ikke mellom store og små bokstaver",
    // "Minimum length (in characters)"
    minLength: "Minimum lengde",
    // "Allow digits"
    allowDigits: "Tillat tall",
    // "Minimum count"
    minCount: "Minimum count",
    // "Maximum count"
    maxCount: "Maximum count",
    // "Regular expression"
    regex: "Regular expression",
    surveyvalidator: {
      // [Auto-translated] "Validation message"
      text: "Melding om validering",
      // [Auto-translated] "Validation expression"
      expression: "Uttrykk for validering",
      // [Auto-translated] "Notification type"
      notificationType: "Type varsling",
      // [Auto-translated] "Maximum length (in characters)"
      maxLength: "Maksimal lengde (i tegn)"
    },
    // "Total row header"
    totalText: "Total tekst",
    // "Aggregation method"
    totalType: "Total type",
    // "Total value expression"
    totalExpression: "Total formel",
    // "Total value display format"
    totalDisplayStyle: "Total visningsstil",
    // "Currency"
    totalCurrency: "Total valuta",
    // "Formatted string"
    totalFormat: "Total format",
    // [Auto-translated] "Survey logo"
    logo: "Logo for undersøkelse",
    // [Auto-translated] "Survey layout"
    questionsOnPageMode: "Oppsett av undersøkelse",
    // [Auto-translated] "Restrict answer length"
    maxTextLength: "Begrens svarlengden",
    // [Auto-translated] "Restrict comment length"
    maxCommentLength: "Begrens kommentarlengden",
    // [Auto-translated] "Comment area height (in lines)"
    commentAreaRows: "Høyde i kommentarområdet (i linjer)",
    // [Auto-translated] "Auto-expand text areas"
    autoGrowComment: "Utvid tekstområder automatisk",
    // [Auto-translated] "Allow users to resize text areas"
    allowResizeComment: "Tillat brukere å endre størrelse på tekstområder",
    // "Update input field values"
    textUpdateMode: "Oppdatere tekstspørsmålsverdi",
    // [Auto-translated] "Input mask type"
    maskType: "Type inndatamaske",
    // [Auto-translated] "Set focus on the first invalid answer"
    autoFocusFirstError: "Sette fokus på det første ugyldige svaret",
    // [Auto-translated] "Run validation"
    checkErrorsMode: "Kjør validering",
    // [Auto-translated] "Validate empty fields on lost focus"
    validateVisitedEmptyFields: "Validere tomme felt ved tapt fokus",
    // [Auto-translated] "Redirect to an external link after submission"
    navigateToUrl: "Omdiriger til en ekstern lenke etter innsending",
    // [Auto-translated] "Dynamic external link"
    navigateToUrlOnCondition: "Dynamisk ekstern lenke",
    // [Auto-translated] "Markup to show if the user already filled out this survey"
    completedBeforeHtml: "Markering for å vise om brukeren allerede har fylt ut denne undersøkelsen",
    // [Auto-translated] "\"Thank You\" page markup"
    completedHtml: "«Takk»-sidemarkering",
    // [Auto-translated] "Dynamic \"Thank You\" page markup"
    completedHtmlOnCondition: "Dynamisk «Takk»-sidemarkering",
    // [Auto-translated] "Markup to show while survey model is loading"
    loadingHtml: "Markering som skal vises mens evalueringsmodellen lastes inn",
    // [Auto-translated] "Comment area text"
    commentText: "Tekst i kommentarfeltet",
    // [Auto-translated] "Autocomplete type"
    autocomplete: "Autofullfør type",
    // "Label for \"True\""
    labelTrue: "Etiketten «True»",
    // "Label for \"False\""
    labelFalse: "\"False\" etikett",
    // "Show the Clear button"
    allowClear: "Vis Fjern-knappen",
    // [Auto-translated] "Search Mode"
    searchMode: "Søkemodus",
    // [Auto-translated] "Display format"
    displayStyle: "Visningsformat",
    // [Auto-translated] "Formatted string"
    format: "Formatert streng",
    // [Auto-translated] "Maximum fractional digits"
    maximumFractionDigits: "Maksimalt antall brøksifre",
    // [Auto-translated] "Minimum fractional digits"
    minimumFractionDigits: "Minimum brøksifre",
    // [Auto-translated] "Display grouping separators"
    useGrouping: "Skilletegn for skjermgruppering",
    // [Auto-translated] "Enable multiple file upload"
    allowMultiple: "Aktiver opplasting av flere filer",
    // [Auto-translated] "Preview uploaded images"
    allowImagesPreview: "Forhåndsvis opplastede bilder",
    // [Auto-translated] "Accepted file types"
    acceptedTypes: "Godkjente filtyper",
    // [Auto-translated] "Wait for upload to complete"
    waitForUpload: "Vent til opplastingen er fullført",
    // [Auto-translated] "Confirm file deletion"
    needConfirmRemoveFile: "Bekreft sletting av fil",
    // [Auto-translated] "Row details alignment"
    detailPanelMode: "Justering av raddetaljer",
    // [Auto-translated] "Minimum row count"
    minRowCount: "Minimum radantall",
    // [Auto-translated] "Maximum row count"
    maxRowCount: "Maksimalt radantall",
    // "Confirm row removal"
    confirmDelete: "Bekreft radsletting",
    // [Auto-translated] "Confirmation message"
    confirmDeleteText: "Bekreftelsesmelding",
    // [Auto-translated] "Initial number of entries"
    panelCount: "Opprinnelig antall oppføringer",
    // [Auto-translated] "Minimum number of entries"
    minPanelCount: "Minimum antall påmeldinger",
    // [Auto-translated] "Maximum number of entries"
    maxPanelCount: "Maksimalt antall påmeldinger",
    // [Auto-translated] "Initial entry state"
    panelsState: "Opprinnelig oppføringstilstand",
    // [Auto-translated] "\"Previous Entry\" button text"
    prevPanelText: "\"Forrige oppføring\"-knapptekst",
    // [Auto-translated] "\"Next Entry\" button text"
    nextPanelText: "Knappeteksten \"Neste oppføring\"",
    // [Auto-translated] "\"Remove Entry\" button alignment"
    removePanelButtonLocation: "\"Fjern oppføring\"-knappjustering",
    // [Auto-translated] "Hide the question if it has no rows"
    hideIfRowsEmpty: "Skjul spørsmålet hvis det ikke har noen rader",
    // [Auto-translated] "Hide columns if there are no rows"
    hideColumnsIfEmpty: "Skjule kolonner hvis det ikke er noen rader",
    // [Auto-translated] "Custom rating values"
    rateValues: "Egendefinerte vurderingsverdier",
    // [Auto-translated] "Rating count"
    rateCount: "Antall vurderinger",
    // [Auto-translated] "Rating configuration"
    autoGenerate: "Konfigurasjon av vurdering",
    slider: {
      // [Auto-translated] "Min value"
      min: "Min verdi",
      // [Auto-translated] "Max value"
      max: "Maks verdi",
      // [Auto-translated] "Step value"
      step: "Trinn verdi",
      // [Auto-translated] "Show scale labels"
      showLabels: "Vis skalaetiketter",
      // [Auto-translated] "Show tooltips"
      tooltipVisibility: "Vis verktøytips",
      // [Auto-translated] "Allow thumb crossing"
      allowSwap: "Tillat tommelkryssing",
      // [Auto-translated] "Number of auto-generated labels"
      labelCount: "Antall automatisk genererte etiketter",
      // [Auto-translated] "Min value expression"
      minValueExpression: "Uttrykk for minste verdi",
      // [Auto-translated] "Max value expression"
      maxValueExpression: "Uttrykk for maksverdi",
      // [Auto-translated] "Scale labels configuration"
      autoGenerate: "Konfigurasjon av skaleringsetiketter",
      // [Auto-translated] "Slider type"
      sliderType: "Type glidebryter",
      // [Auto-translated] "Min range length"
      minRangeLength: "Min rekkevidde lengde",
      // [Auto-translated] "Max range length"
      maxRangeLength: "Maks rekkevidde lengde",
      // [Auto-translated] "Custom labels"
      customLabels: "Tilpassede etiketter",
      // [Auto-translated] "Label format"
      labelFormat: "Etikett format",
      // [Auto-translated] "Tooltip format"
      tooltipFormat: "Format for verktøytips"
    },
    file: {
      // [Auto-translated] "Image height"
      imageHeight: "Høyde på bildet",
      // [Auto-translated] "Image width"
      imageWidth: "Bildets bredde"
    },
    // [Auto-translated] "Hide the question if it has no choices"
    hideIfChoicesEmpty: "Skjul spørsmålet hvis det ikke har noen valg",
    // "Minimum width"
    minWidth: "Minimumsbredde (i CSS-godkjente verdier)",
    // "Maximum width"
    maxWidth: "Maksimal bredde (i CSS-godkjente verdier)",
    // "Width"
    width: "Bredde (i CSS-godkjente verdier)",
    // [Auto-translated] "Show column headers"
    showHeader: "Vise kolonneoverskrifter",
    // [Auto-translated] "Show horizontal scrollbar"
    horizontalScroll: "Vis vannrett rullefelt",
    // [Auto-translated] "Minimum column width"
    columnMinWidth: "Minste kolonnebredde",
    // [Auto-translated] "Row header width"
    rowTitleWidth: "Bredde på radoverskrift",
    // "Value to store when \"True\" is selected"
    valueTrue: "\"True\"-verdi",
    // "Value to store when \"False\" is selected"
    valueFalse: "\"False\" verdi",
    // "\"Value is below minimum\" error message"
    minErrorText: "Feilmeldingen «Verdien er under minimum»",
    // "\"Value exceeds maximum\" error message"
    maxErrorText: "Feilmeldingen \"Verdien overskrider maksimum\"",
    // "\"Empty comment\" error message"
    otherErrorText: "Feilmeldingen «Tom kommentar»",
    // "Error message for duplicate responses"
    keyDuplicationError: "Feilmeldingen \"Ikke-unik nøkkelverdi\"",
    // [Auto-translated] "Minimum choices to select"
    minSelectedChoices: "Minimumsvalg å velge",
    // [Auto-translated] "Maximum choices to select"
    maxSelectedChoices: "Maksimalt antall valg å velge",
    // [Auto-translated] "Logo width"
    logoWidth: "Logo bredde",
    // [Auto-translated] "Logo height"
    logoHeight: "Logo høyde",
    // "Read-only"
    readOnly: "Skrivebeskyttet",
    // [Auto-translated] "Disable the read-only mode if"
    enableIf: "Deaktiver skrivebeskyttet modus hvis",
    // "\"No rows\" message"
    noRowsText: "Meldingen «Ingen rader»",
    // [Auto-translated] "Separate special choices"
    separateSpecialChoices: "Separate spesialvalg",
    // [Auto-translated] "Copy choices from the following question"
    choicesFromQuestion: "Kopier valg fra følgende spørsmål",
    // [Auto-translated] "Which choice options to copy"
    choicesFromQuestionMode: "Hvilke valgalternativer som skal kopieres",
    // [Auto-translated] "Use values from the following matrix column or panel question as choice IDs"
    choiceValuesFromQuestion: "Bruk verdier fra følgende matrisekolonne eller panelspørsmål som valg-ID-er",
    // [Auto-translated] "Use values from the following matrix column or panel question as choice texts"
    choiceTextsFromQuestion: "Bruk verdier fra følgende matrisekolonne eller paneloppgave som valgtekster",
    // [Auto-translated] "Display page titles in the progress bar"
    progressBarShowPageTitles: "Vise sidetitler i fremdriftslinjen",
    // [Auto-translated] "Display page numbers in the progress bar"
    progressBarShowPageNumbers: "Vise sidetall i fremdriftslinjen",
    // [Auto-translated] "Add a comment box"
    showCommentArea: "Legg til en kommentarboks",
    // [Auto-translated] "Placeholder text for the comment box"
    commentPlaceholder: "Plassholdertekst for kommentarfeltet",
    // [Auto-translated] "Show the labels as extreme values"
    displayRateDescriptionsAsExtremeItems: "Vise etikettene som ekstreme verdier",
    // [Auto-translated] "Row order"
    rowOrder: "Rekkefølge på rad",
    // [Auto-translated] "Column layout"
    columnsLayout: "Kolonneoppsett",
    // [Auto-translated] "Nested column count"
    columnColCount: "Nestet kolonneantall",
    // [Auto-translated] "Correct Answer"
    correctAnswer: "Riktig svar",
    // [Auto-translated] "Default Values"
    defaultPanelValue: "Standardverdier",
    // [Auto-translated] "Cell Texts"
    cells: "Cell Tekster",
    // [Auto-translated] "Select a file or paste a file link..."
    fileInputPlaceholder: "Velg en fil eller lim inn en filkobling ...",
    // "Prevent duplicate responses in the following column"
    keyName: "Nøkkelkolonne",
    itemvalue: {
      // [Auto-translated] "Make the option visible if"
      visibleIf: "Gjøre alternativet synlig hvis",
      // [Auto-translated] "Make the option selectable if"
      enableIf: "Gjør alternativet valgbart hvis"
    },
    "itemvalue@rows": {
      // [Auto-translated] "Make the row visible if"
      visibleIf: "Gjøre raden synlig hvis",
      // [Auto-translated] "Make the row editable if"
      enableIf: "Gjøre raden redigerbar hvis"
    },
    imageitemvalue: {
      // "Alt text"
      text: "Alternativ tekst"
    },
    // "Logo alignment"
    logoPosition: "Logo-posisjon",
    // "Add logo..."
    addLogo: "Legg til logo...",
    // "Change logo..."
    changeLogo: "Bytt logo...",
    logoPositions: {
      // "Remove logo"
      none: "Fjern logo",
      // "Left"
      left: "Venstre",
      // "Right"
      right: "Høyre",
      // "On the top"
      top: "Topp",
      // "In the bottom"
      bottom: "Bunn"
    },
    // [Auto-translated] "Preview mode"
    previewMode: "Forhåndsvisning-modus",
    // [Auto-translated] "Enable grid layout"
    gridLayoutEnabled: "Aktivere rutenettoppsett",
    // [Auto-translated] "Grid columns"
    gridLayoutColumns: "Kolonner i rutenettet",
    // [Auto-translated] "Mask settings"
    maskSettings: "Innstillinger for maske",
    // [Auto-translated] "Row details error message alignment"
    detailErrorLocation: "Justering av feilmeldinger for raddetaljer",
    // Creator tabs
    tabs: {
      panel: {
        // [Auto-translated] "Panel Layout"
        layout: "Panel Oppsett"
      },
      // "General"
      general: "Generelt",
      // "Options"
      fileOptions: "Valg",
      // "HTML Editor"
      html: "HTML-editor",
      // "Columns"
      columns: "Kolonner",
      // "Rows"
      rows: "Rader",
      // "Choice Options"
      choices: "Valg",
      // "Items"
      items: "Elementer",
      // "Visible If"
      visibleIf: "Synlig hvis",
      // "Editable If"
      enableIf: "Tilgjengelig hvis",
      // "Required If"
      requiredIf: "Nødvendig hvis",
      // "Rating Values"
      rateValues: "Rangering verdier",
      // [Auto-translated] "Slider Settings"
      sliderSettings: "Innstillinger for glidebryter",
      // "Choices from a Web Service"
      choicesByUrl: "Valg fra web",
      // "Default Choices"
      matrixChoices: "Standardvalg",
      // "Text Inputs"
      multipleTextItems: "Tekst inndata",
      // "Numbering"
      numbering: "Nummerering",
      // "Validators"
      validators: "Valideringer",
      // "Navigation"
      navigation: "Navigering",
      // "Question Settings"
      question: "Spørsmål",
      // "Pages"
      pages: "Sider",
      // "Quiz Mode"
      timer: "Tidtaker/Quiz",
      // "Calculated Values"
      calculatedValues: "Beregnede verdier",
      // "Triggers"
      triggers: "Triggere",
      // "Title template"
      templateTitle: "Mal-tittel",
      // "Totals"
      totals: "Totaler",
      // "Conditions"
      logic: "Logikk",
      // [Auto-translated] "Input Mask Settings"
      mask: "Innstillinger for inndatamaske",
      layout: {
        // [Auto-translated] "Panel Layout"
        panel: "Paneloppsett",
        // [Auto-translated] "Layout"
        question: "Oppsett",
        // [Auto-translated] "Layout"
        base: "Oppsett"
      },
      // "Data"
      data: "Data",
      // "Validation"
      validation: "Validering",
      // "Individual Cell Texts"
      cells: "Celler",
      // "\"Thank You\" Page"
      showOnCompleted: "Vis når ferdig",
      // "Logo in the Survey Header"
      logo: "Logo i skjematittel",
      // "Slider"
      slider: "Slider",
      // [Auto-translated] "Expression"
      expression: "Uttrykk",
      // [Auto-translated] "Question Settings"
      questionSettings: "Spørsmål Innstillinger",
      // "Header"
      header: "Topptekst",
      // "Background"
      background: "Bakgrunn",
      // "Appearance"
      appearance: "Utseende",
      // [Auto-translated] "Accent colors"
      accentColors: "Aksentfarger",
      // [Auto-translated] "Surface background"
      surfaceBackground: "Overflate bakgrunn",
      // [Auto-translated] "Scaling"
      scaling: "Skalering",
      // "Others"
      others: "Andre"
    },
    // "Edit property '{0}'"
    editProperty: "Rediger verdi '{0}'",
    // "Items"
    items: "[ Elementer: {0} ]",
    // [Auto-translated] "Make choices visible if"
    choicesVisibleIf: "Gjør valgene synlige hvis",
    // [Auto-translated] "Make choices selectable if"
    choicesEnableIf: "Gjør valgene valgbare hvis",
    // [Auto-translated] "Make columns visible if"
    columnsEnableIf: "Gjøre kolonner synlige hvis",
    // [Auto-translated] "Make rows visible if"
    rowsEnableIf: "Gjør rader synlige hvis",
    // [Auto-translated] "Increase the inner indent"
    innerIndent: "Øke det indre innrykket",
    // [Auto-translated] "Use answers from the last entry as default"
    copyDefaultValueFromLastEntry: "Bruk svar fra siste oppføring som standard",
    // "Please enter a value."
    enterNewValue: "Vennligst fyll inn verdien.",
    // "There are no questions in the survey."
    noquestions: "Det er ingen spørsmål i skjemaet.",
    // "Please create a trigger"
    createtrigger: "Vennligst lag en trigger",
    // "Press enter button to edit"
    titleKeyboardAdornerTip: "Trykk enter-tasten for å redigere",
    // "Press enter button to edit item, press delete button to delete item, press alt plus arrow up or arrow down to move item"
    keyboardAdornerTip: "Trykk enter-tasten for å redigere elementet, trykk slette-tasten for å slette elementet, trykk Alt + pil opp/ned for å flytte elementet",
    // "On "
    triggerOn: "På ",
    // "Make pages visible"
    triggerMakePagesVisible: "Gjør sider synlige:",
    // "Make elements visible"
    triggerMakeQuestionsVisible: "Gjør elementer synlige:",
    // "Complete the survey if successful."
    triggerCompleteText: "Fullfør skjema dersom vellykket.",
    // "The trigger is not set"
    triggerNotSet: "Trigger er ikke satt",
    // "Run if"
    triggerRunIf: "Kjør dersom",
    // "Change value of: "
    triggerSetToName: "Endre verdien av: ",
    // "Copy value from: "
    triggerFromName: "Kopier verdi fra: ",
    // "Run this Expression"
    triggerRunExpression: "Kjør denne formelen:",
    // "to: "
    triggerSetValue: "til: ",
    // "Go to the question"
    triggerGotoName: "Gå til spørsmål:",
    // "Do not put the variable into the survey result."
    triggerIsVariable: "Ikke legg variabelen i resultatet.",
    // "Please enter a valid expression"
    triggerRunExpressionEmpty: "Vennligst fyll inn en gyldig formel",
    // [Auto-translated] "Type expression here..."
    emptyExpressionPlaceHolder: "Skriv inn uttrykk her...",
    // "No file chosen"
    noFile: "Ingen fil valgt",
    // [Auto-translated] "Clear hidden question values"
    clearIfInvisible: "Fjern skjulte spørsmålsverdier",
    // [Auto-translated] "Store values in the following property"
    valuePropertyName: "Lagre verdier i følgende egenskap",
    // [Auto-translated] "Enable search-as-you-type"
    searchEnabled: "Aktivere søk mens du skriver",
    // [Auto-translated] "Hide selected items"
    hideSelectedItems: "Skjule merkede elementer",
    // [Auto-translated] "Collapse the dropdown upon selection"
    closeOnSelect: "Skjul rullegardinlisten ved valg",
    // [Auto-translated] "Vertical alignment within cells"
    verticalAlign: "Vertikal justering i celler",
    // [Auto-translated] "Alternate row colors"
    alternateRows: "Alternative radfarger",
    // [Auto-translated] "Make columns visible if"
    columnsVisibleIf: "Gjøre kolonner synlige hvis",
    // [Auto-translated] "Make rows visible if"
    rowsVisibleIf: "Gjør rader synlige hvis",
    // [Auto-translated] "Placeholder text for the comment box"
    otherPlaceholder: "Plassholdertekst for kommentarfeltet",
    // [Auto-translated] "Placeholder text for Local file"
    filePlaceholder: "Plassholdertekst for lokal fil",
    // [Auto-translated] "Placeholder text for Camera"
    photoPlaceholder: "Plassholdertekst for kamera",
    // [Auto-translated] "Placeholder text for Local file or Camera"
    fileOrPhotoPlaceholder: "Plassholdertekst for lokal fil eller kamera",
    // [Auto-translated] "Rating icon"
    rateType: "Vurdering-ikon",
    // [Auto-translated] "Ex.: https://api.example.com/books"
    url_placeholder: "Eks.: https://api.example.com/books",
    // [Auto-translated] "Ex.: categories.fiction"
    path_placeholder: "Eks.: kategorier.fiksjon",
    // [Auto-translated] "Ex.: a)"
    questionStartIndex_placeholder: "Eks.: a)",
    // [Auto-translated] "Ex.: 6in"
    width_placeholder: "Eks.: 6in",
    // [Auto-translated] "Ex.: 600px"
    minWidth_placeholder: "Eksempel: 600 piksler",
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
      isPanelless: "Spørsmål utseende",
      // [Auto-translated] "Background and corner radius"
      editorPanel: "Bakgrunn og hjørneradius",
      // [Auto-translated] "Background and corner radius"
      questionPanel: "Bakgrunn og hjørneradius",
      // [Auto-translated] "Accent color"
      primaryColor: "Uthevingsfarge",
      // [Auto-translated] "Panel and question box opacity"
      panelBackgroundTransparency: "Panel- og spørsmålsboks ugjennomsiktighet",
      // [Auto-translated] "Input element opacity"
      questionBackgroundTransparency: "Opasitet for inngangselement",
      // [Auto-translated] "Survey font size"
      fontSize: "Skriftstørrelse for undersøkelse",
      // [Auto-translated] "Survey scale factor"
      scale: "Skalafaktor for undersøkelse",
      // [Auto-translated] "Corner radius"
      cornerRadius: "Hjørne radius",
      // [Auto-translated] "Advanced mode"
      advancedMode: "Avansert modus",
      // [Auto-translated] "Title font"
      pageTitle: "Tittel skrift",
      // [Auto-translated] "Description font"
      pageDescription: "Beskrivelse skrift",
      // [Auto-translated] "Title font"
      questionTitle: "Tittel skrift",
      // [Auto-translated] "Description font"
      questionDescription: "Beskrivelse skrift",
      // [Auto-translated] "Font"
      editorFont: "Font",
      // [Auto-translated] "Opacity"
      backgroundOpacity: "Ugjennomsiktighet", // Auto-generated string
      // [Auto-translated] "Survey font family"
      "--sjs-font-family": "Skriftfamilie for undersøkelser",
      // [Auto-translated] "Background color"
      "--sjs-general-backcolor-dim": "Bakgrunnsfarge",
      // [Auto-translated] "Accent background colors"
      "--sjs-primary-backcolor": "Bakgrunnsfarger for aksentfarge",
      // [Auto-translated] "Accent foreground colors"
      "--sjs-primary-forecolor": "Aksentfarger i forgrunnen",
      // [Auto-translated] "Error message colors"
      "--sjs-special-red": "Farger på feilmeldinger",
      // [Auto-translated] "Shadow effects"
      "--sjs-shadow-small": "Skygge effekter",
      // [Auto-translated] "Shadow effects"
      "--sjs-shadow-inner": "Skygge effekter",
      // [Auto-translated] "Colors"
      "--sjs-border-default": "Farger"
    },
    "header@header": {
      // [Auto-translated] "View"
      headerView: "Utsikt",
      // [Auto-translated] "Logo alignment"
      logoPosition: "Justering av logo",
      // [Auto-translated] "Survey title font"
      surveyTitle: "Skrift for undersøkelsestittel",
      // [Auto-translated] "Survey description font"
      surveyDescription: "Skrift for undersøkelsesbeskrivelse",
      // [Auto-translated] "Survey title font"
      headerTitle: "Skrift for undersøkelsestittel",
      // [Auto-translated] "Survey description font"
      headerDescription: "Skrift for undersøkelsesbeskrivelse",
      // [Auto-translated] "Content area width"
      inheritWidthFrom: "Bredde på innholdsområdet",
      // [Auto-translated] "Text width"
      textAreaWidth: "Tekstbredde",
      // [Auto-translated] "Background color"
      backgroundColorSwitch: "Bakgrunnsfarge",
      // [Auto-translated] "Background image"
      backgroundImage: "Bakgrunnsbilde",
      // [Auto-translated] "Opacity"
      backgroundImageOpacity: "Ugjennomsiktighet",
      // [Auto-translated] "Overlap"
      overlapEnabled: "Overlappe",
      // [Auto-translated] "Logo alignment"
      logoPositionX: "Justering av logo",
      // [Auto-translated] "Survey title alignment"
      titlePositionX: "Justering av evalueringstittel",
      // [Auto-translated] "Survey description alignment"
      descriptionPositionX: "Justering av undersøkelsesbeskrivelse"
    }
  },
  // Property values
  pv: {
    // [Auto-translated] "true"
    "true": "sann",
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
    selected: "Utvalgt",
    // [Auto-translated] "Unselected"
    unselected: "Umerkede",
    // [Auto-translated] "decimal"
    decimal: "desimal",
    // [Auto-translated] "currency"
    currency: "valuta",
    // [Auto-translated] "percent"
    percent: "prosent",
    // "First panel is expanded"
    firstExpanded: "firstExpanded",
    // "Hide question numbers"
    off: "off",
    // "List"
    list: "list",
    // [Auto-translated] "Carousel"
    carousel: "Karusell",
    // [Auto-translated] "Tabs"
    tab: "Kategoriene",
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
    // "Both"
    both: "both",
    // "Left"
    left: "left",
    // [Auto-translated] "Right"
    right: "Høyre",
    // [Auto-translated] "Center"
    center: "Sentrum",
    // [Auto-translated] "Left and right"
    leftRight: "Venstre og høyre",
    // [Auto-translated] "Middle"
    middle: "Midt",
    // [Auto-translated] "color"
    color: "farge",
    // [Auto-translated] "date"
    date: "daddel",
    // [Auto-translated] "datetime"
    datetime: "datetime",
    // [Auto-translated] "datetime-local"
    "datetime-local": "datetime-lokal",
    // [Auto-translated] "email"
    email: "E-post",
    // [Auto-translated] "month"
    month: "måned",
    // [Auto-translated] "number"
    number: "nummer",
    // [Auto-translated] "password"
    password: "passord",
    // [Auto-translated] "range"
    range: "rekkevidde",
    // [Auto-translated] "tel"
    tel: "Tel",
    // [Auto-translated] "text"
    text: "Tekst",
    // [Auto-translated] "time"
    time: "Tid",
    // [Auto-translated] "url"
    url: "URL",
    // [Auto-translated] "week"
    week: "uke",
    // "Hidden"
    hidden: "hidden",
    // "Editable"
    edit: "edit",
    // "Read-only"
    display: "display",
    // [Auto-translated] "Contain"
    contain: "Inneholde",
    // [Auto-translated] "Cover"
    cover: "Lokk",
    // [Auto-translated] "Fill"
    fill: "Fylle",
    // [Auto-translated] "Next"
    next: "Neste",
    // [Auto-translated] "Last"
    last: "Siste",
    // "Upon survey completion"
    onComplete: "onComplete",
    // "When question gets hidden"
    onHidden: "onHidden",
    // [Auto-translated] "When question or its panel/page gets hidden"
    onHiddenContainer: "Når spørsmålet eller panelet/siden blir skjult",
    clearInvisibleValues: {
      // [Auto-translated] "Never"
      none: "Aldri"
    },
    clearIfInvisible: {
      // [Auto-translated] "Never"
      none: "Aldri"
    },
    // [Auto-translated] "Radio Buttons"
    radio: "Alternativknapper",
    inputType: {
      // [Auto-translated] "Color"
      color: "Farge",
      // [Auto-translated] "Date"
      date: "Daddel",
      // [Auto-translated] "Date and Time"
      "datetime-local": "Dato og klokkeslett",
      // [Auto-translated] "Email"
      email: "E-post",
      // [Auto-translated] "Month"
      month: "Måned",
      // [Auto-translated] "Number"
      number: "Nummer",
      // [Auto-translated] "Password"
      password: "Passord",
      // [Auto-translated] "Range"
      range: "Rekkevidde",
      // [Auto-translated] "Phone Number"
      tel: "Telefonnummer",
      // [Auto-translated] "Text"
      text: "Tekst",
      // [Auto-translated] "Time"
      time: "Tid",
      // [Auto-translated] "URL"
      url: "URL",
      // [Auto-translated] "Week"
      week: "Uke"
    },
    sliderType: {
      // [Auto-translated] "Single-Value"
      single: "Enkelt verdi",
      // [Auto-translated] "Range"
      range: "Rekkevidde"
    },
    tooltipVisibility: {
      // [Auto-translated] "Auto"
      auto: "Auto",
      // [Auto-translated] "Always"
      always: "Alltid",
      // [Auto-translated] "Never"
      never: "Aldri"
    },
    notificationType: {
      // [Auto-translated] "Error"
      error: "Feil",
      // [Auto-translated] "Warning"
      warning: "Advarsel",
      // [Auto-translated] "Informational"
      info: "Informativ"
    },
    autocomplete: {
      // [Auto-translated] "Full Name"
      name: "Fullt navn",
      // [Auto-translated] "Prefix"
      "honorific-prefix": "Prefiks",
      // [Auto-translated] "First Name"
      "given-name": "Fornavn",
      // [Auto-translated] "Middle Name"
      "additional-name": "Mellomnavn",
      // [Auto-translated] "Last Name"
      "family-name": "Etternavn",
      // [Auto-translated] "Suffix"
      "honorific-suffix": "Endelse",
      // [Auto-translated] "Nickname"
      nickname: "Kallenavn",
      // [Auto-translated] "Job Title"
      "organization-title": "Stillingstittel",
      // [Auto-translated] "User Name"
      username: "Brukernavn",
      // [Auto-translated] "New Password"
      "new-password": "Nytt passord",
      // [Auto-translated] "Current Password"
      "current-password": "Nåværende passord",
      // [Auto-translated] "Organization Name"
      organization: "Organisasjonens navn",
      // [Auto-translated] "Full Street Address"
      "street-address": "Full gateadresse",
      // [Auto-translated] "Address Line 1"
      "address-line1": "Adresselinje 1",
      // [Auto-translated] "Address Line 2"
      "address-line2": "Adresselinje 2",
      // [Auto-translated] "Address Line 3"
      "address-line3": "Adresselinje 3",
      // [Auto-translated] "Level 4 Address"
      "address-level4": "Adresse på nivå 4",
      // [Auto-translated] "Level 3 Address"
      "address-level3": "Nivå 3-adresse",
      // [Auto-translated] "Level 2 Address"
      "address-level2": "Nivå 2-adresse",
      // [Auto-translated] "Level 1 Address"
      "address-level1": "Adresse på nivå 1",
      // [Auto-translated] "Country Code"
      country: "Landkode",
      // [Auto-translated] "Country Name"
      "country-name": "Navn på land",
      // [Auto-translated] "Postal Code"
      "postal-code": "Postnummer",
      // [Auto-translated] "Cardholder Name"
      "cc-name": "Kortinnehaverens navn",
      // [Auto-translated] "Cardholder First Name"
      "cc-given-name": "Kortinnehaverens fornavn",
      // [Auto-translated] "Cardholder Middle Name"
      "cc-additional-name": "Kortinnehaverens mellomnavn",
      // [Auto-translated] "Cardholder Last Name"
      "cc-family-name": "Kortinnehaverens etternavn",
      // [Auto-translated] "Credit Card Number"
      "cc-number": "Kredittkortnummer",
      // [Auto-translated] "Expiration Date"
      "cc-exp": "Utløpsdato",
      // [Auto-translated] "Expiration Month"
      "cc-exp-month": "Utløpsmåned",
      // [Auto-translated] "Expiration Year"
      "cc-exp-year": "Utløpsår",
      // [Auto-translated] "Card Security Code"
      "cc-csc": "Sikkerhetskode for kort",
      // [Auto-translated] "Credit Card Type"
      "cc-type": "Type kredittkort",
      // [Auto-translated] "Transaction Currency"
      "transaction-currency": "Transaksjonens valuta",
      // [Auto-translated] "Transaction Amount"
      "transaction-amount": "Transaksjonsbeløp",
      // [Auto-translated] "Preferred Language"
      language: "Foretrukket språk",
      // [Auto-translated] "Birthday"
      bday: "Fødselsdag",
      // [Auto-translated] "Birthday Day"
      "bday-day": "Bursdag",
      // [Auto-translated] "Birthday Month"
      "bday-month": "Bursdag måned",
      // [Auto-translated] "Birthday Year"
      "bday-year": "Bursdag år",
      // [Auto-translated] "Gender"
      sex: "Kjønn",
      // [Auto-translated] "Website URL"
      url: "URL-adresse til nettsted",
      // [Auto-translated] "Profile Photo"
      photo: "Profilbilde",
      // [Auto-translated] "Telephone Number"
      tel: "Telefonnummer",
      // [Auto-translated] "Country Code for Phone"
      "tel-country-code": "Landskode for telefon",
      // [Auto-translated] "National Telephone Number"
      "tel-national": "Nasjonalt telefonnummer",
      // [Auto-translated] "Area Code"
      "tel-area-code": "Retningsnummer",
      // [Auto-translated] "Local Phone Number"
      "tel-local": "Lokalt telefonnummer",
      // [Auto-translated] "Local Phone Prefix"
      "tel-local-prefix": "Lokalt telefonprefiks",
      // [Auto-translated] "Local Phone Suffix"
      "tel-local-suffix": "Lokalt telefonsuffiks",
      // [Auto-translated] "Phone Extension"
      "tel-extension": "Utvidelse av telefon",
      // [Auto-translated] "Email Address"
      email: "E-postadresse",
      // [Auto-translated] "Instant Messaging Protocol"
      impp: "Protokoll for direktemeldinger"
    },
    maskType: {
      // [Auto-translated] "None"
      none: "Ingen",
      // [Auto-translated] "Pattern"
      pattern: "Mønster",
      // [Auto-translated] "Numeric"
      numeric: "Numerisk",
      // [Auto-translated] "Date and Time"
      datetime: "Dato og klokkeslett",
      // [Auto-translated] "Currency"
      currency: "Valuta"
    },
    inputTextAlignment: {
      // [Auto-translated] "Auto"
      auto: "Auto",
      // [Auto-translated] "Left"
      left: "Venstre",
      // [Auto-translated] "Right"
      right: "Høyre"
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
    onValueChanging: "Før et svar endres",
    questionsOnPageMode: {
      // [Auto-translated] "Original structure"
      standard: "Opprinnelig struktur",
      // [Auto-translated] "Show all questions on one page"
      singlePage: "Vis alle spørsmål på én side",
      // [Auto-translated] "Show single question per page"
      questionPerPage: "Vis ett spørsmål per side",
      // [Auto-translated] "Show single input field per page"
      inputPerPage: "Vis enkelt inndatafelt per side"
    },
    // "No preview"
    noPreview: "no preview",
    // "Show all questions"
    showAllQuestions: "show preview with all questions",
    // "Show answered questions only"
    showAnsweredQuestions: "show preview with answered questions",
    // [Auto-translated] "Show all questions"
    allQuestions: "Vis alle spørsmål",
    // [Auto-translated] "Show answered questions only"
    answeredQuestions: "Vis kun besvarte spørsmål",
    // [Auto-translated] "Completed pages"
    pages: "Fullførte sider",
    // [Auto-translated] "Answered questions"
    questions: "Besvarte spørsmål",
    // [Auto-translated] "Answered required questions"
    requiredQuestions: "Besvarte nødvendige spørsmål",
    // [Auto-translated] "Valid answers"
    correctQuestions: "Gyldige svar",
    // [Auto-translated] "Completed pages (button UI)"
    buttons: "Fullførte sider (brukergrensesnitt for knapp)",
    // [Auto-translated] "Under the input field"
    underInput: "Under inntastingsfeltet",
    // [Auto-translated] "Under the question title"
    underTitle: "Under spørsmålstittelen",
    // [Auto-translated] "On lost focus"
    onBlur: "På mistet fokus",
    // [Auto-translated] "While typing"
    onTyping: "Mens du skriver",
    // [Auto-translated] "Under the row"
    underRow: "Under raden",
    // [Auto-translated] "Under the row, display one section only"
    underRowSingle: "Under raden viser du bare én inndeling",
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
      default: "Basert på matriseoppsett"
    },
    panelsState: {
      // [Auto-translated] "Locked"
      default: "Låst",
      // [Auto-translated] "Collapse all"
      collapsed: "Skjul alle",
      // [Auto-translated] "Expand all"
      expanded: "Utvid alle",
      // [Auto-translated] "First expanded"
      firstExpanded: "Først utvidet"
    },
    widthMode: {
      // [Auto-translated] "Static"
      static: "Statisk",
      // [Auto-translated] "Responsive"
      responsive: "Lydhør"
    },
    contentMode: {
      // [Auto-translated] "Image"
      image: "Bilde",
      // [Auto-translated] "Video"
      video: "Video",
      // [Auto-translated] "YouTube"
      youtube: "YouTube"
    },
    displayMode: {
      // [Auto-translated] "Buttons"
      buttons: "Knapper",
      // [Auto-translated] "Dropdown"
      dropdown: "Rullegardinmeny"
    },
    rateColorMode: {
      // [Auto-translated] "Default"
      default: "Standard",
      // [Auto-translated] "Scale"
      scale: "Skala"
    },
    scaleColorMode: {
      // [Auto-translated] "Monochrome"
      monochrome: "Monokrom",
      // [Auto-translated] "Colored"
      colored: "Farget"
    },
    autoGenerate: {
      // [Auto-translated] "Auto-generate"
      "true": "Generer automatisk",
      // [Auto-translated] "Manual"
      "false": "Håndbok"
    },
    rateType: {
      // [Auto-translated] "Labels"
      labels: "Etiketter",
      // [Auto-translated] "Stars"
      stars: "Stjerner",
      // [Auto-translated] "Smileys"
      smileys: "Smilefjes"
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
      onPage: "Tilbakestill på hver side",
      // [Auto-translated] "Reset on each panel"
      onpanel: "Tilbakestill på hvert panel",
      // [Auto-translated] "Reset on each panel"
      onPanel: "Tilbakestill på hvert panel",
      // [Auto-translated] "Recursive numbering"
      recursive: "Rekursiv nummerering",
      // [Auto-translated] "Continue across the survey"
      onSurvey: "Fortsett på tvers av undersøkelsen",
      // [Auto-translated] "No numbering"
      off: "Ingen nummerering"
    },
    descriptionLocation: {
      // [Auto-translated] "Under the question title"
      underTitle: "Under spørsmålstittelen",
      // [Auto-translated] "Under the input field"
      underInput: "Under inntastingsfeltet"
    },
    selectToRankAreasLayout: {
      // [Auto-translated] "Next to choices"
      horizontal: "Ved siden av valg",
      // [Auto-translated] "Above choices"
      vertical: "Ovennevnte valg"
    },
    displayStyle: {
      // [Auto-translated] "Decimal"
      decimal: "Desimal",
      // [Auto-translated] "Currency"
      currency: "Valuta",
      // [Auto-translated] "Percentage"
      percent: "Prosent",
      // [Auto-translated] "Date"
      date: "Daddel"
    },
    totalDisplayStyle: {
      // [Auto-translated] "Decimal"
      decimal: "Desimal",
      // [Auto-translated] "Currency"
      currency: "Valuta",
      // [Auto-translated] "Percentage"
      percent: "Prosent",
      // [Auto-translated] "Date"
      date: "Daddel"
    },
    rowOrder: {
      // [Auto-translated] "Original"
      initial: "Original"
    },
    questionOrder: {
      // [Auto-translated] "Original"
      initial: "Original"
    },
    progressBarLocation: {
      // [Auto-translated] "Top"
      top: "Topp",
      // [Auto-translated] "Bottom"
      bottom: "Bunn",
      // [Auto-translated] "Top and bottom"
      topbottom: "Topp og bunn",
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
    count: "Greve",
    // [Auto-translated] "Min"
    min: "Min",
    // [Auto-translated] "Max"
    max: "Maks",
    // [Auto-translated] "Avg"
    avg: "Avg",
    searchMode: {
      // [Auto-translated] "Contains"
      contains: "Inneholder",
      // [Auto-translated] "Starts with"
      startsWith: "Starter med"
    },
    backgroundImageFit: {
      // [Auto-translated] "Auto"
      auto: "Auto",
      // [Auto-translated] "Cover"
      cover: "Lokk",
      // [Auto-translated] "Contain"
      contain: "Inneholde",
      // [Auto-translated] "Stretch"
      fill: "Strekning",
      // [Auto-translated] "Tile"
      tile: "Flis"
    },
    backgroundImageAttachment: {
      // [Auto-translated] "Fixed"
      fixed: "Fast",
      // [Auto-translated] "Scroll"
      scroll: "Bla"
    },
    headerView: {
      // [Auto-translated] "Basic"
      basic: "Grunnleggende",
      // [Auto-translated] "Advanced"
      advanced: "Avansert"
    },
    inheritWidthFrom: {
      // [Auto-translated] "Same as survey"
      survey: "Samme som undersøkelse",
      // [Auto-translated] "Same as container"
      container: "Samme som container"
    },
    backgroundColorSwitch: {
      // [Auto-translated] "None"
      none: "Ingen",
      // [Auto-translated] "Accent color"
      accentColor: "Uthevingsfarge",
      // [Auto-translated] "Custom"
      custom: "Skikk"
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
      "true": "Uten paneler"
    },
    progressBarInheritWidthFrom: {
      // [Auto-translated] "Same as survey"
      survey: "Samme som undersøkelse",
      // [Auto-translated] "Same as container"
      container: "Samme som container"
    }
  },
  // Operators
  op: {
    // "Empty"
    empty: "er tom",
    // "Not empty"
    notempty: "er ikke tom",
    // "Equals"
    equal: "er lik",
    // "Does not equal"
    notequal: "er ikke lik",
    // "Contains"
    contains: "inneholder",
    // "Does not contain"
    notcontains: "inneholder ikke",
    // "Any of"
    anyof: "noen av",
    // "All of"
    allof: "alle av",
    // "Greater than"
    greater: "større enn",
    // "Less than"
    less: "mindre enn",
    // "Greater than or equal to"
    greaterorequal: "større eller lik",
    // "Less than or equal to"
    lessorequal: "mindre eller lik",
    // [Auto-translated] "and"
    and: "og",
    // [Auto-translated] "or"
    or: "eller"
  },
  // Embed window
  ew: {
    // "Use Angular version"
    angular: "Bruk Angular-versjon",
    // "Use jQuery version"
    jquery: "Bruk jQuery-versjon",
    // "Use Knockout version"
    knockout: "Bruk Knockout-versjon",
    // "Use React version"
    react: "Bruk React-versjon",
    // "Use Vue version"
    vue: "Bruk Vue-versjon",
    // "For bootstrap framework"
    bootstrap: "For Bootstrap-rammeverk",
    // [Auto-translated] "Modern theme"
    modern: "Moderne tema",
    // [Auto-translated] "Default theme"
    default: "Standard tema",
    // [Auto-translated] "Orange theme"
    orange: "Oransje-tema",
    // [Auto-translated] "Darkblue theme"
    darkblue: "Mørkeblått-tema",
    // [Auto-translated] "Darkrose theme"
    darkrose: "Darkrose-tema",
    // [Auto-translated] "Stone theme"
    stone: "Stein-tema",
    // [Auto-translated] "Winter theme"
    winter: "Vinter-tema",
    // [Auto-translated] "Winter-Stone theme"
    winterstone: "Vinterstein-tema",
    // "Show survey on a page"
    showOnPage: "Vis skjema på en side",
    // "Show survey in a window"
    showInWindow: "Vis skjema i et vindu",
    // "Load Survey JSON from server"
    loadFromServer: "Last skjemadefinisjon som JSON fra server",
    // "Scripts and styles"
    titleScript: "Skript og stiler",
    // "HTML"
    titleHtml: "HTML",
    // "JavaScript"
    titleJavaScript: "JavaScript"
  },
  // Preview (Survey)
  ts: {
    // "Select the page to test it"
    selectPage: "Velg side:",
    // "Show invisible elements"
    showInvisibleElements: "Vis usynlige elementer",
    // [Auto-translated] "Hide invisible elements"
    hideInvisibleElements: "Skjule usynlige elementer",
    // [Auto-translated] "Previous"
    prevPage: "Foregående",
    // [Auto-translated] "Next"
    nextPage: "Neste"
  },
  validators: {
    // "Answer count"
    answercountvalidator: "antall svar",
    // "Email"
    emailvalidator: "e-post",
    // "Expression"
    expressionvalidator: "formel",
    // "Number"
    numericvalidator: "numerisk",
    // "Regex"
    regexvalidator: "regex",
    // "Text"
    textvalidator: "tekst"
  },
  triggers: {
    // "Complete survey"
    completetrigger: "complete skjema",
    // "Set answer"
    setvaluetrigger: "set value",
    // "Copy answer"
    copyvaluetrigger: "copy value",
    // "Skip to question"
    skiptrigger: "hopp til spørsmål",
    // "Run expression"
    runexpressiontrigger: "kjør formel",
    // "change visibility (deprecated)"
    visibletrigger: "endre synlighet (deprecated)"
  },
  peplaceholder: {
    patternmask: {
      // "Ex.: +1(999)-999-99-99"
      pattern: "Eks.: +1(999)-999-99-99"
    },
    datetimemask: {
      // [Auto-translated] "Ex.: mm/dd/yyyy HH:MM:ss"
      pattern: "Eks.: mm/dd/åååå HH:MM:ss"
    },
    currencymask: {
      // "Ex.: $"
      prefix: "Eks.: $",
      // "Ex.: USD"
      suffix: "Eks.: USD"
    },
    panelbase: {
      // [Auto-translated] "Ex.: 200px"
      questionTitleWidth: "Eks.: 200 piksler"
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
      name: "En panel-ID som ikke er synlig for respondentene.",
      // [Auto-translated] "Type a panel subtitle."
      description: "Skriv inn en undertittel i panelet.",
      // "Use the magic wand icon to set a conditional rule that determines panel visibility."
      visibleIf: "Bruk tryllestavikonet til å angi en betinget regel som bestemmer panelets synlighet.",
      // [Auto-translated] "Use the magic wand icon to set a conditional rule that disables the read-only mode for the panel."
      enableIf: "Bruk tryllestavikonet til å angi en betinget regel som deaktiverer skrivebeskyttet modus for panelet.",
      // "Use the magic wand icon to set a conditional rule that prevents survey submission unless at least one nested question has an answer."
      requiredIf: "Bruk tryllestavikonet til å angi en betinget regel som forhindrer innsending av spørreundersøkelser med mindre minst ett nestet spørsmål har et svar.",
      // [Auto-translated] "Applies to all questions within this panel. When set to \"Hidden\", it also hides question descriptions. If you want to override this setting, define title alignment rules for individual questions. The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Top\" by default). "
      questionTitleLocation: "Gjelder for alle spørsmål i dette panelet. Når den er satt til «Skjult», skjuler den også spørsmålsbeskrivelser. Hvis du vil overstyre denne innstillingen, definerer du regler for titteljustering for enkeltspørsmål. Alternativet \"Arv\" bruker innstillingen på sidenivå (hvis angitt) eller undersøkelsesnivå (\"Topp\" som standard). ",
      // [Auto-translated] "Sets consistent width for question titles when they are aligned to the left of their question boxes. Accepts CSS values (px, %, in, pt, etc.)."
      questionTitleWidth: "Angir konsekvent bredde for spørsmålstitler når de er justert til venstre for spørsmålsboksene. Godtar CSS-verdier (px, %, i, pt osv.).",
      // "Sets the location of an error message in relation to all questions within the panel. The \"Inherit\" option applies the page-level (if set) or survey-level setting."
      questionErrorLocation: "Angir plasseringen av en feilmelding i forhold til alle spørsmålene i panelet. Alternativet «Arv» bruker innstillingen på sidenivå (hvis angitt) eller undersøkelsesnivå.",
      // [Auto-translated] "Keeps the original order of questions or randomizes them. The \"Inherit\" option applies the page-level (if set) or survey-level setting."
      questionOrder: "Beholder den opprinnelige rekkefølgen på spørsmålene eller randomiserer dem. Alternativet \"Arv\" bruker innstillingen på sidenivå (hvis angitt) eller undersøkelsesnivå.",
      // "Repositions the panel to the end of a selected page."
      page: "Flytter panelet til slutten av en merket side.",
      // [Auto-translated] "Adds space or margin between the panel content and the left border of the panel box."
      innerIndent: "Legger til mellomrom eller marg mellom panelinnholdet og venstre kant på panelboksen.",
      // "Unselect to display the panel in one line with the previous question or panel. The setting doesn't apply if the panel is the first element in your form."
      startWithNewLine: "Fjern merket for å vise panelet på én linje med forrige spørsmål eller panel. Innstillingen gjelder ikke hvis panelet er det første elementet i skjemaet.",
      // "Choose from: \"Expanded\" - the panel is displayed in full and can be collapsed; \"Collapsed\" - the panel displays only the title and description and can be expanded; \"Locked\" - the panel is displayed in full and cannot be collapsed."
      state: "Velg mellom: \"Utvidet\" - panelet vises i sin helhet og kan skjules; \"Kollapset\" - panelet viser bare tittelen og beskrivelsen og kan utvides; \"Låst\" - panelet vises i sin helhet og kan ikke skjules.",
      // [Auto-translated] "Sets the width of the panel in proportion to other survey elements in the same line. Accepts CSS values (px, %, in, pt, etc.)."
      width: "Angir bredden på panelet proporsjonalt med andre undersøkelseselementer på samme linje. Godtar CSS-verdier (px, %, in, pt, etc.).",
      // [Auto-translated] "Assigns numbers to questions nested within this panel."
      showQuestionNumbers: "Tildeler numre til spørsmål som er nestet i dette panelet.",
      // [Auto-translated] "Specifies how many columns this panel spans within the grid layout."
      effectiveColSpan: "Angir hvor mange kolonner dette panelet strekker seg over i rutenettoppsettet.",
      // [Auto-translated] "This table lets you configure each grid column within the panel. It automatically sets the width percentage for each column based on the maximum number of elements in a row. To customize the grid layout, manually adjust these values and define the title width for all questions in each column."
      gridLayoutColumns: "I denne tabellen kan du konfigurere hver rutenettkolonne i panelet. Den angir automatisk breddeprosenten for hver kolonne basert på maksimalt antall elementer på rad. For å tilpasse rutenettoppsettet, juster disse verdiene manuelt og definer tittelbredden for alle spørsmålene i hver kolonne."
    },
    paneldynamic: {
      // "A panel ID that is not visible to respondents."
      name: "En panel-ID som ikke er synlig for respondentene.",
      // "Type a panel subtitle."
      description: "Skriv inn en panelundertekst.",
      // "Use the magic wand icon to set a conditional rule that determines panel visibility."
      visibleIf: "Bruk tryllestavikonet til å angi en betinget regel som bestemmer panelets synlighet.",
      // [Auto-translated] "Use the magic wand icon to set a conditional rule that disables the read-only mode for the panel."
      enableIf: "Bruk tryllestavikonet til å angi en betinget regel som deaktiverer skrivebeskyttet modus for panelet.",
      // "Use the magic wand icon to set a conditional rule that prevents survey submission unless at least one nested question has an answer."
      requiredIf: "Bruk tryllestavikonet til å angi en betinget regel som forhindrer innsending av spørreundersøkelser med mindre minst ett nestet spørsmål har et svar.",
      // "Applies to all questions within this dynamic panel. If you want to override this setting, define title alignment rules for individual questions. The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Top\" by default)."
      templateQuestionTitleLocation: "Gjelder alle spørsmålene i dette panelet. Hvis du vil overstyre denne innstillingen, definerer du regler for titteljustering for enkeltspørsmål. Alternativet \"Arv\" bruker innstillingen på sidenivå (hvis angitt) eller undersøkelsesnivå (\"Topp\" som standard).",
      // "Sets consistent width for question titles when they are aligned to the left of their question boxes. Accepts CSS values (px, %, in, pt, etc.)."
      templateQuestionTitleWidth: "Angir konsekvent bredde for spørsmålstitler når de er justert til venstre for spørsmålsboksene. Godtar CSS-verdier (px, %, in, pt, etc.).",
      // "Sets the location of an error message in relation to a question with invalid input. Choose between: \"Top\" - an error text is placed at the top of the question box; \"Bottom\" - an error text is placed at the bottom of the question box. The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Top\" by default)."
      templateErrorLocation: "Angir plasseringen av en feilmelding i forhold til et spørsmål med ugyldige inndata. Velg mellom: \"Topp\" - en feiltekst plasseres øverst i spørsmålsboksen; \"Bunn\" - en feiltekst er plassert nederst i spørsmålsboksen. Alternativet \"Arv\" bruker innstillingen på sidenivå (hvis angitt) eller undersøkelsesnivå (\"Topp\" som standard).",
      // "Sets the location of an error message in relation to all questions within the panel. The \"Inherit\" option applies the page-level (if set) or survey-level setting."
      errorLocation: "Angir plasseringen av en feilmelding i forhold til alle spørsmålene i panelet. Alternativet «Arv» bruker innstillingen på sidenivå (hvis angitt) eller undersøkelsesnivå.",
      // "Repositions the panel to the end of a selected page."
      page: "Flytter panelet til slutten av en merket side.",
      // [Auto-translated] "Adds space or margin between the panel content and the left border of the panel box."
      indent: "Legger til mellomrom eller marg mellom panelinnholdet og den venstre kanten av panelboksen.",
      // "Unselect to display the panel in one line with the previous question or panel. The setting doesn't apply if the panel is the first element in your form."
      startWithNewLine: "Fjern merket for å vise panelet på én linje med forrige spørsmål eller panel. Innstillingen gjelder ikke hvis panelet er det første elementet i skjemaet.",
      // "Choose from: \"Expanded\" - the panel is displayed in full and can be collapsed; \"Collapsed\" - the panel displays only the title and description and can be expanded; \"Locked\" - the panel is displayed in full and cannot be collapsed."
      state: "Velg mellom: \"Utvidet\" - panelet vises i sin helhet og kan skjules; \"Kollapset\" - panelet viser bare tittelen og beskrivelsen og kan utvides; \"Låst\" - panelet vises i sin helhet og kan ikke skjules.",
      // "Sets the width of the panel in proportion to other survey elements in the same line. Accepts CSS values (px, %, in, pt, etc.)."
      width: "Angir bredden på panelet i forhold til andre undersøkelseselementer på samme linje. Godtar CSS-verdier (px, %, i, pt osv.).",
      // "Type in a template for entry titles. Use {panelIndex} for the entry's general position and {visiblePanelIndex} for its order among visible entries. Insert these placeholders into the pattern to add automatic numbering."
      templateTitle: "Skriv inn en mal for dynamiske paneltitler. Bruk {panelIndex} for panelets generelle posisjon og {visiblePanelIndex} for rekkefølgen blant synlige paneler. Sett inn disse plassholderne i mønsteret for å legge til automatisk nummerering.",
      // "Type in a template for tab titles. Use {panelIndex} for an entry's general position and {visiblePanelIndex} for its order among visible entries. Insert these placeholders into the pattern to add automatic numbering."
      templateTabTitle: "Skriv inn en mal for fanetitler. Bruk {panelIndex} for panelets generelle posisjon og {visiblePanelIndex} for rekkefølgen blant synlige paneler. Sett inn disse plassholderne i mønsteret for å legge til automatisk nummerering.",
      // "A fallback text for tab titles that applies when the tab title pattern doesn't produce a meaningful value."
      tabTitlePlaceholder: "En basistekst for tabulatortitler som gjelder når mønsteret for tabulatortittel ikke gir meningsfull verdi.",
      // "This setting allows you to control the visibility of individual entries within the dynamic panel. Use the `{panel}` placeholder to reference the current entry in your expression."
      templateVisibleIf: "Med denne innstillingen kan du kontrollere synligheten til individuelle paneler i det dynamiske panelet. Bruk plassholderen {panel} til å referere til gjeldende panel i uttrykket.",
      // "This setting is automatically inherited by all questions within this dynamic panel. If you want to override this setting, define title alignment rules for individual questions. The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Top\" by default)."
      titleLocation: "Denne innstillingen arves automatisk av alle spørsmålene i dette panelet. Hvis du vil overstyre denne innstillingen, definerer du regler for titteljustering for enkeltspørsmål. Alternativet \"Arv\" bruker innstillingen på sidenivå (hvis angitt) eller undersøkelsesnivå (\"Topp\" som standard).",
      // "The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Under the panel title\" by default)."
      descriptionLocation: "Alternativet \"Arv\" bruker innstillingen på sidenivå (hvis angitt) eller innstilling på undersøkelsesnivå (\"Under paneltittelen\" som standard).",
      // "Defines the position of a newly added entry. By default, new entries are added to the end. Select \"Next\" to insert a new entry after the current one."
      newPanelPosition: "Definerer posisjonen til et nylig lagt til-panel. Som standard legges nye paneler til slutten. Velg \"Neste\" for å sette inn et nytt panel etter det nåværende.",
      // [Auto-translated] "Duplicates answers from the last entry and assigns them to the next added entry."
      copyDefaultValueFromLastEntry: "Dupliserer svar fra den siste oppføringen og tilordner dem til neste oppføring som er lagt til.",
      // "Reference a question name to require a user to provide a unique response for this question in each entry."
      keyName: "Referer til et spørsmålsnavn for å kreve at en bruker gir et unikt svar på dette spørsmålet i hvert panel.",
      // [Auto-translated] "Triggers a confirmation prompt before removing an entry."
      confirmDelete: "Utløser en bekreftelsesmelding før du fjerner en oppføring."
    },
    matrixdynamic: {
      // [Auto-translated] "Triggers a confirmation prompt before removing a row."
      confirmDelete: "Utløser en bekreftelsesmelding før du fjerner en rad.",
      // [Auto-translated] "Automatically expands the detail section when a new row is added to the matrix."
      detailPanelShowOnAdding: "Utvider automatisk detaljdelen når en ny rad legges til i matrisen."
    },
    // "Duplicates answers from the last row and assigns them to the next added dynamic row."
    copyDefaultValueFromLastEntry: "Dupliserer svar fra den siste raden og tilordner dem til den neste dynamiske raden som er lagt til.",
    // [Auto-translated] "This setting allows you to assign a default answer value based on an expression. The expression can include basic calculations - `{q1_id} + {q2_id}`, Boolean expressions, such as `{age} > 60`, and functions: `iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, etc. The value determined by this expression serves as the initial default value that can be overridden by a respondent's manual input."
    defaultValueExpression: "Med denne innstillingen kan du tilordne en standard svarverdi basert på et uttrykk. Uttrykket kan inneholde grunnleggende beregninger - '{q1_id} + {q2_id}', boolske uttrykk, for eksempel '{alder} > 60', og funksjoner: 'iif()', 'today()', 'age()', 'min()', 'max()', 'avg()', etc. Verdien som bestemmes av dette uttrykket, fungerer som den opprinnelige standardverdien som kan overstyres av en respondents manuelle inndata.",
    // "Use the magic wand icon to set a conditional rule that determines when a respondent's input is reset to the value based on the \"Default value expression\" or \"Set value expression\" or to the \"Default answer\" value (if either is set)."
    resetValueIf: "Bruk tryllestavikonet til å angi en betinget regel som bestemmer når en respondents inndata tilbakestilles til verdien basert på \"Standardverdiuttrykk\" eller \"Angi verdiuttrykk\" eller til \"Standard svar\"-verdien (hvis en av dem er angitt).",
    // "Use the magic wand icon to set a conditional rule that determines when to run the \"Set value expression\" and dynamically assign the resulting value as a response."
    setValueIf: "Bruk tryllestavikonet til å angi en betinget regel som bestemmer når \"Angi verdiuttrykk\" skal kjøres, og tilordne den resulterende verdien dynamisk som et svar.",
    // "Specify an expression that defines the value to be set when the conditions in the \"Set value if\" rule are met. The expression can include basic calculations - `{q1_id} + {q2_id}`, Boolean expressions, such as `{age} > 60`, and functions: `iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, etc. The value determined by this expression can be overridden by a respondent's manual input."
    setValueExpression: "Angi et uttrykk som definerer verdien som skal angis når betingelsene i regelen Angi verdi hvis er oppfylt. Uttrykket kan inneholde grunnleggende beregninger - '{q1_id} + {q2_id}', boolske uttrykk, for eksempel '{alder} > 60', og funksjoner: 'iif()', 'today()', 'age()', 'min()', 'max()', 'avg()', etc. Verdien som bestemmes av dette uttrykket, kan overstyres av en respondents manuelle inndata.",
    // "Survey Creator allows you to manually adjust the inline widths of form elements to control the layout. If this doesn't produce the desired outcome, you can enable the grid layout, which structures form elements using a column-based system. To configure layout columns, select a page or panel and use the \"Question Settings\" → \"Grid columns\" table. To adjust how many columns a question spans, select it and set the desired value in the \"Layout\" → \"Column span\" field."
    gridLayoutEnabled: "Med Survey Creator kan du manuelt justere de innebygde breddene på skjemaelementer for å kontrollere oppsettet. Hvis dette ikke gir ønsket resultat, kan du aktivere rutenettoppsettet, som strukturerer skjemaelementer ved hjelp av et kolonnebasert system. For å konfigurere layoutkolonner, velg en side eller et panel og bruk tabellen \"Spørsmålsinnstillinger\" → \"Rutenettkolonner\". For å justere hvor mange kolonner et spørsmål strekker seg over, velg det og angi ønsket verdi i feltet \"Oppsett\" → \"Kolonnespenn\".",
    question: {
      // "A question ID that is not visible to respondents."
      name: "En spørsmåls-ID som ikke er synlig for respondentene.",
      // "Type a question subtitle."
      description: "Skriv inn en spørsmålsundertittel.",
      // "Use the magic wand icon to set a conditional rule that determines question visibility."
      visibleIf: "Bruk tryllestavikonet til å angi en betinget regel som bestemmer spørsmålets synlighet.",
      // [Auto-translated] "Use the magic wand icon to set a conditional rule that disables the read-only mode for the question."
      enableIf: "Bruk tryllestavikonet til å angi en betinget regel som deaktiverer skrivebeskyttet modus for spørsmålet.",
      // "Use the magic wand icon to set a conditional rule that prevents survey advancing or submission unless the question received an answer."
      requiredIf: "Bruk tryllestavikonet til å angi en betinget regel som forhindrer avansement eller innsending av spørreundersøkelser med mindre spørsmålet fikk svar.",
      // [Auto-translated] "Unselect to display the question in one line with the previous question or panel. The setting doesn't apply if the question is the first element in your form."
      startWithNewLine: "Fjern merket for å vise spørsmålet på én linje med forrige spørsmål eller panel. Innstillingen gjelder ikke hvis spørsmålet er det første elementet i skjemaet.",
      // "Repositions the question to the end of a selected page."
      page: "Flytter spørsmålet til slutten av en merket side.",
      // "Choose from: \"Expanded\" - the question box is displayed in full and can be collapsed; \"Collapsed\" - the question box displays only the title and description and can be expanded; \"Locked\" - the question box is displayed in full and cannot be collapsed."
      state: "Velg mellom: \"Utvidet\" - spørsmålsboksen vises i sin helhet og kan skjules; \"Kollapset\" - spørsmålsboksen viser bare tittelen og beskrivelsen og kan utvides; \"Låst\" - spørsmålsboksen vises i sin helhet og kan ikke skjules.",
      // "Overrides title alignment rules defined on a panel, page, or survey level. When set to \"Hidden\", it also hides question descriptions. The \"Inherit\" option applies any higher-level settings (if set) or survey-level setting (\"Top\" by default)."
      titleLocation: "Overstyrer titteljusteringsregler som er definert på panel-, side- eller undersøkelsesnivå. Alternativet \"Arv\" bruker innstillinger på høyere nivå (hvis angitt) eller innstilling på undersøkelsesnivå (\"Topp\" som standard).",
      // "The \"Inherit\" option applies the survey-level setting (\"Under the question title\" by default)."
      descriptionLocation: "Alternativet \"Arv\" bruker innstillingen på undersøkelsesnivå (\"Under spørsmålstittelen\" som standard).",
      // "Sets the location of an error message in relation to the question with invalid input. Choose between: \"Top\" - an error text is placed at the top of the question box; \"Bottom\" - an error text is placed at the bottom of the question box. The \"Inherit\" option applies the survey-level setting (\"Top\" by default)."
      errorLocation: "Angir plasseringen til en feilmelding i forhold til spørsmålet med ugyldige inndata. Velg mellom: \"Topp\" - en feiltekst plasseres øverst i spørsmålsboksen; \"Bunn\" - en feiltekst er plassert nederst i spørsmålsboksen. Alternativet \"Arv\" bruker innstillingen på undersøkelsesnivå (\"Topp\" som standard).",
      // "Adds space or margin between the question content and the left border of the question box."
      indent: "Legger til mellomrom eller marg mellom spørsmålsinnholdet og venstre kantlinje i spørsmålsboksen.",
      // "Sets the width of the question in proportion to other survey elements in the same line. Accepts CSS values (px, %, in, pt, etc.)."
      width: "Angir bredden på spørsmålet i forhold til andre undersøkelseselementer på samme linje. Godtar CSS-verdier (px, %, i, pt osv.).",
      // "Choose from: \"On lost focus\" - the value is updated when the input field loses focus; \"While typing\" - the value is updated in real-time, as users are typing. The \"Inherit\" option applies the survey-level setting (\"On lost focus\" by default)."
      textUpdateMode: "Velg mellom: \"Ved tapt fokus\" - verdien oppdateres når inntastingsfeltet mister fokus; \"Mens du skriver\" - verdien oppdateres i sanntid, mens brukerne skriver. Alternativet \"Arv\" bruker innstillingen på undersøkelsesnivå (\"Ved tapt fokus\" som standard).",
      // [Auto-translated] "You can use any web service as a data source for multiple-choice questions. To populate choice values, enter the URL of the service providing the data."
      url: "Du kan bruke en hvilken som helst webtjeneste som datakilde for flervalgsspørsmål. Hvis du vil fylle ut valgverdier, angir du URL-adressen til tjenesten som leverer dataene.",
      // [Auto-translated] "A comparison operation used to filter the drop-down list."
      searchMode: "En sammenligningsoperasjon som brukes til å filtrere rullegardinlisten.",
      // [Auto-translated] "Long texts in choice options will automatically generate line breaks to fit within the drop-down menu. Unselect if you want the texts to clip."
      textWrapEnabled: "Lange tekster i valgalternativer genererer automatisk linjeskift slik at de passer inn i rullegardinmenyen. Fjern merket hvis du vil at tekstene skal klippes ut.",
      // [Auto-translated] "Specifies how many columns this question spans within the grid layout."
      effectiveColSpan: "Angir hvor mange kolonner dette spørsmålet strekker seg over i rutenettoppsettet."
    },
    surveyvalidator: {
      // "Use the magic wand icon to define when the question's value is considered valid."
      expression: "Bruk tryllestavikonet for å definere når spørsmålets verdi anses som gyldig.",
      // [Auto-translated] "Errors block progress until resolved. Warnings highlight issues but allow to continue. Informational notes offer additional context or neutral guidance. When using warnings or informational notes, we recommend enabling immediate validation: \"Survey\" → \"Validation\" → \"Run validation\" → \"After an answer has changed\"."
      notificationType: "Feil blokkerer fremdriften til den løses. Advarsler fremhever problemer, men lar dem fortsette. Informasjonsnotater gir ekstra kontekst eller nøytral veiledning. Når du bruker advarsler eller informasjonsnotater, anbefaler vi at du aktiverer umiddelbar validering: «Undersøkelse» → «Validering» → «Kjør validering» → «Etter at et svar er endret»."
    },
    signaturepad: {
      // "Sets the width of the displayed signature area and the resulting image."
      signatureWidth: "Angir bredden på signaturområdet som vises, og det resulterende bildet.",
      // "Sets the height of the displayed signature area and the resulting image."
      signatureHeight: "Angir høyden på signaturområdet som vises, og det resulterende bildet.",
      // "Select if you want the signature area to fill all available space within the question box while maintaining the default 3:2 aspect ratio. When custom width and height values are set, the setting will keep the aspect ratio of these dimensions."
      signatureAutoScaleEnabled: "Velg dette alternativet hvis du vil at signaturområdet skal fylle all tilgjengelig plass i spørsmålsboksen, samtidig som standardforholdet 3:2 beholdes. Når egendefinerte bredde- og høydeverdier angis, beholdes innstillingen størrelsesforholdet for disse dimensjonene."
    },
    file: {
      // "Specifies the display height of uploaded images in the preview and the actual height of images taken with the camera. In single file upload mode, the display height is limited by the preview area; in multiple file upload mode, it is limited by the thumbnail area."
      imageHeight: "Spesifiserer visningshøyden for opplastede bilder i forhåndsvisningen og den faktiske høyden på bilder tatt med kameraet. I enkeltfilopplastingsmodus er visningshøyden begrenset av forhåndsvisningsområdet; I modus for opplasting av flere filer er den begrenset av miniatyrbildeområdet.",
      // "Specifies the display width of uploaded images in the preview and the actual width of images taken with the camera. In single file upload mode, the display width is limited by the preview area; in multiple file upload mode, it is limited by the thumbnail area."
      imageWidth: "Angir visningsbredden på opplastede bilder i forhåndsvisningen og den faktiske bredden på bilder som er tatt med kameraet. I enkeltfilopplastingsmodus er visningsbredden begrenset av forhåndsvisningsområdet; I modus for opplasting av flere filer er den begrenset av miniatyrbildeområdet.",
      // [Auto-translated] "Displays thumbnail previews for uploaded files when possible. Unselect if you want to show file icons instead."
      allowImagesPreview: "Viser miniatyrforhåndsvisninger for opplastede filer når det er mulig. Fjern merket hvis du vil vise filikoner i stedet."
    },
    image: {
      // "The \"Auto\" option automatically determines the suitable mode for display - Image, Video, or YouTube - based on the source URL provided."
      contentMode: "Alternativet \"Auto\" bestemmer automatisk passende modus for visning - Bilde, Video eller YouTube - basert på kildens URL som er oppgitt."
    },
    imagepicker: {
      // [Auto-translated] "Overrides the minimum and maximum height values."
      imageHeight: "Overstyrer minimums- og maksimumshøydeverdiene.",
      // [Auto-translated] "Overrides the minimum and maximum width values."
      imageWidth: "Overstyrer verdiene for minimums- og maksimumsbredde.",
      // [Auto-translated] "\"Value\" serves as an item ID used in conditional rules; \"Text\" is displayed to respondents."
      choices: "\"Verdi\" fungerer som en vare-ID som brukes i betingede regler; \"Tekst\" vises til respondentene.",
      // "Choose between \"Image\" and \"Video\" to set the content mode of the media selector. If \"Image\" is selected, ensure that all options provided are image files in the following formats: JPEG, GIF, PNG, APNG, SVG, BMP, ICO. Similarly, if \"Video\" is selected, ensure that all options are direct links to video files in the following formats: MP4, MOV, WMV, FLV, AVI, MKV. Please note that YouTube links are not supported for video options."
      contentMode: "Velg mellom \"Image\" og \"Video\" for å stille inn innholdsmodusen til medievelgeren. Hvis \"Bilde\" er valgt, må du kontrollere at alle alternativene som er oppgitt, er bildefiler i følgende formater: JPEG, GIF, PNG, APNG, SVG, BMP, ICO. På samme måte, hvis \"Video\" er valgt, må du sørge for at alle alternativene er direkte koblinger til videofiler i følgende formater: MP4, MOV, WMV, FLV, AVI, MKV. Vær oppmerksom på at YouTube-koblinger ikke støttes for videoalternativer."
    },
    text: {
      // [Auto-translated] "This setting only resizes the input field and doesn't affect the width of the question box. To limit the accepted input length, go to \"Validation\" → \"Maximum character limit\"."
      size: "Denne innstillingen endrer bare størrelsen på inndatafeltet og påvirker ikke bredden på spørsmålsboksen. For å begrense den aksepterte inndatalengden, gå til \"Validering\" → \"Maksimal tegngrense\"."
    },
    comment: {
      // [Auto-translated] "Sets the number of displayed lines in the input field. If the input takes up more lines, the scroll bar will appear."
      rows: "Angir antall linjer som vises i inndatafeltet. Hvis inngangen tar opp flere linjer, vises rullefeltet."
    },
    // survey templates
    survey: {
      // "Select if you want to prevent respondents from filling out your survey."
      readOnly: "Velg hvis du vil hindre respondenter i å fylle ut undersøkelsen.",
      // "Sets the location of the progress bar. The \"Auto\" value displays the progress bar above or below the survey header."
      progressBarLocation: "Angir plasseringen av fremdriftslinjen. \"Auto\"-verdien viser fremdriftslinjen over eller under undersøkelsesoverskriften."
    },
    matrixdropdowncolumn: {
      // "A column ID that is not visible to respondents."
      name: "En kolonne-ID som ikke er synlig for respondentene.",
      // "When enabled for a column, a respondent is required to provide a unique response for each question within this column."
      isUnique: "Når en respondent er aktivert for en kolonne, må den gi et unikt svar for hvert spørsmål i denne kolonnen.",
      // "Sets the number of displayed lines in the input field. If the input takes up more lines, the scroll bar will appear."
      rows: "Angir antall viste linjer i inndatafeltet. Hvis inngangen tar opp flere linjer, vises rullefeltet.",
      // "Use the magic wand icon to set a conditional rule that determines column visibility."
      visibleIf: "Bruk tryllestavikonet til å angi en betinget regel som bestemmer kolonnens synlighet.",
      // [Auto-translated] "Use the magic wand icon to set a conditional rule that disables the read-only mode for the column."
      enableIf: "Bruk tryllestavikonet til å angi en betinget regel som deaktiverer skrivebeskyttet modus for kolonnen.",
      // "Use the magic wand icon to set a conditional rule that prevents survey submission unless at least one nested question has an answer."
      requiredIf: "Bruk tryllestavikonet til å angi en betinget regel som forhindrer innsending av spørreundersøkelser med mindre minst ett nestet spørsmål har et svar.",
      // "When selected, creates an individual column for each choice option."
      showInMultipleColumns: "Når dette alternativet er valgt, opprettes det én kolonne for hvert valgalternativ.",
      // [Auto-translated] "Arranges choice options in a multi-column layout. When set to 0, the options are displayed in a single line. When set to -1, the actual value is inherited from the \"Nested column count\" property of the parent matrix."
      colCount: "Ordner valgalternativer i et oppsett med flere kolonner. Når den er satt til 0, vises alternativene på én enkelt linje. Når satt til -1, arves den faktiske verdien fra egenskapen \"Nestet kolonneantall\" for den overordnede matrisen."
    },
    slider: {
      // "The lowest number that users can select."
      min: "Det laveste tallet som brukere kan velge.",
      // "The highest number that users can select."
      max: "Det høyeste tallet som brukere kan velge.",
      // "The interval between selectable scale values. For example, a step of 5 will allow users to select 0, 5, 10, etc."
      step: "Intervallet mellom valgbare skalaverdier. For eksempel vil et trinn på 5 tillate brukere å velge 0, 5, 10 osv.",
      // "The minimum distance between the slider thumbs a user can set."
      minRangeLength: "Minimumsavstanden mellom glidebrytertommelen en bruker kan angi.",
      // "The maximum distance between the slider thumbs a user can set."
      maxRangeLength: "Den maksimale avstanden mellom glidetommelen en bruker kan angi.",
      // "Specifies how many scale labels to generate. A value of -1 means the number is calculated automatically based on the Min value and Max value."
      labelCount: "Angir hvor mange skalaetiketter som skal genereres. En verdi på -1 betyr at tallet beregnes automatisk basert på Min-verdien og Max-verdien.",
      // "Use `{0}` as a placeholder for the actual value."
      labelFormat: "Bruk «{0}» som plassholder for den faktiske verdien.",
      // "Allows you to define custom labels at specific values and optionally assign corresponding text to them (e.g., 0 = \"Poor\", 100 = \"Excellent\")."
      customLabels: "Lar deg definere egendefinerte etiketter med bestemte verdier og eventuelt tilordne tilsvarende tekst til dem (f.eks. 0 = \"Dårlig\", 100 = \"Utmerket\").",
      // "Use `{0}` as a placeholder for the actual value."
      tooltipFormat: "Bruk «{0}» som plassholder for den faktiske verdien.",
      // "Allows users to move one thumb past the other."
      allowSwap: "Lar brukere flytte den ene tommelen forbi den andre.",
      // [Auto-translated] "Displays a button that clears the selected slider value and sets it to undefined."
      allowClear: "Viser en knapp som fjerner den valgte glidebryterverdien og setter den til udefinert.",
      // "Defines the slider's minimum value dynamically using an expression. Supports basic calculations (e.g, `{q1_id} + {q2_id}`), Boolean logic (e.g., `{age} > 60`), and functions like `iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, and more."
      minValueExpression: "Definerer glidebryterens minimumsverdi dynamisk ved hjelp av et uttrykk. Støtter grunnleggende beregninger (f.eks. '{q1_id} + {q2_id}'), boolsk logikk (f.eks. '{age} > 60'), og funksjoner som 'iif()', 'today()', 'age()', 'min()', 'max()', 'avg()' og mer.",
      // "Defines the slider's maximum value dynamically using an expression. Supports basic calculations (e.g, `{q1_id} + {q2_id}`), Boolean logic (e.g., `{age} > 60`), and functions like `iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, and more."
      maxValueExpression: "Definerer glidebryterens maksimumsverdi dynamisk ved hjelp av et uttrykk. Støtter grunnleggende beregninger (f.eks. '{q1_id} + {q2_id}'), boolsk logikk (f.eks. '{age} > 60'), og funksjoner som 'iif()', 'today()', 'age()', 'min()', 'max()', 'avg()' og mer."
    },
    // [Auto-translated] "Makes this choice exclusive. When selected by a user, it will automatically deselect all other options in the question."
    isExclusive: "Gjør dette valget eksklusivt. Når den velges av en bruker, vil den automatisk velge bort alle andre alternativer i spørsmålet.",
    matrixcolumn: {
      // [Auto-translated] "Makes checkboxes in this column exclusive. When selected by a user, they will automatically deselect all other checkboxes in the same row."
      isExclusive: "Gjør avmerkingsbokser i denne kolonnen eksklusive. Når de velges av en bruker, vil de automatisk fjerne merket for alle andre avmerkingsbokser i samme rad."
    },
    // [Auto-translated] "Select if uppercase and lowercase letters in the regular expression must be treated as equivalent."
    caseInsensitive: "Velg om store og små bokstaver i det regulære uttrykket må behandles som likeverdige.",
    // "Choose from: \"Static\" - sets a fixed width; \"Responsive\" - makes the survey occupy the full width of the screen; \"Auto\" - applies either of the two depending on the question types used."
    widthMode: "Velg mellom: \"Statisk\" - setter en fast bredde; \"Responsive\" - gjør at undersøkelsen opptar hele bredden på skjermen; \"Auto\" - gjelder en av de to avhengig av spørsmålstypene som brukes.",
    // [Auto-translated] "Assign a unique cookie value for your survey. The cookie will be set in a respondent's browser upon survey completion to prevent repetitive survey submissions."
    cookieName: "Tilordne en unik informasjonskapselverdi for undersøkelsen din. Informasjonskapselen vil bli satt i en respondents nettleser når undersøkelsen er fullført for å forhindre gjentatte undersøkelsesinnsendinger.",
    // [Auto-translated] "Paste an image link (no size limits) or click the folder icon to browse a file from your computer (up to 64KB)."
    logo: "Lim inn en bildekobling (ingen størrelsesbegrensninger) eller klikk på mappeikonet for å bla gjennom en fil fra datamaskinen din (opptil 64KB).",
    // [Auto-translated] "Sets a logo width in CSS units (px, %, in, pt, etc.)."
    logoWidth: "Setter en logo bredde i CSS enheter (px, %, i, pt, etc.).",
    // [Auto-translated] "Sets a logo height in CSS units (px, %, in, pt, etc.)."
    logoHeight: "Angir en logo høyde i CSS enheter (px, %, i, pt, etc.).",
    // "Choose from: \"None\" - image maintains its original size; \"Contain\" - image is resized to fit while maintaining its aspect ratio; \"Cover\" - image fills the entire box while maintaining its aspect ratio; \"Fill\" - image is stretched to fill the box without maintaining its aspect ratio."
    logoFit: "Velg mellom: \"Ingen\" - bildet opprettholder sin opprinnelige størrelse; \"Innehold\" - bildet endres for å passe samtidig som størrelsesforholdet opprettholdes; \"Cover\" - bildet fyller hele boksen mens du opprettholder størrelsesforholdet; \"Fyll\" - bildet strekkes for å fylle boksen uten å opprettholde størrelsesforholdet.",
    // [Auto-translated] "Select if you want the survey to auto-advance to the next page once a respondent has answered all questions on the current page. This feature won't apply if the last question on the page is open-ended or allows multiple answers."
    autoAdvanceEnabled: "Velg om du vil at evalueringen automatisk skal gå videre til neste side når en respondent har svart på alle spørsmålene på gjeldende side. Denne funksjonen gjelder ikke hvis det siste spørsmålet på siden er åpent eller tillater flere svar.",
    // [Auto-translated] "Select if you want the survey to complete automatically after a respondent answers all questions."
    autoAdvanceAllowComplete: "Velg om du vil at evalueringen skal fullføres automatisk etter at en svarperson har svart på alle spørsmålene.",
    // [Auto-translated] "Sets the visibility of navigation buttons on a page."
    showNavigationButtons: "Angir synligheten til navigasjonsknapper på en side.",
    // [Auto-translated] "Sets the location of navigation buttons on a page."
    navigationButtonsLocation: "Angir plasseringen av navigasjonsknapper på en side.",
    // [Auto-translated] "Enable the preview page with all or answered questions only."
    showPreviewBeforeComplete: "Aktiver forhåndsvisningssiden med alle eller besvarte spørsmål.",
    // "Applies to all questions within the survey. This setting can be overridden by title alignment rules at lower levels: panel, page, or question. A lower-level setting will override those on a higher level."
    questionTitleLocation: "Gjelder alle spørsmålene i undersøkelsen. Denne innstillingen kan overstyres av titteljusteringsregler på lavere nivåer: panel, side eller spørsmål. En innstilling på lavere nivå vil overstyre de på et høyere nivå.",
    // [Auto-translated] "A symbol or a sequence of symbols indicating that an answer is required."
    requiredMark: "Et symbol eller en sekvens av symboler som indikerer at et svar er nødvendig.",
    // [Auto-translated] "Enter a number or letter with which you want to start numbering."
    questionStartIndex: "Skriv inn et tall eller bokstav du vil starte nummereringen med.",
    // "Sets the location of an error message in relation to the question with invalid input. Choose between: \"Top\" - an error text is placed at the top of the question box; \"Bottom\" - an error text is placed at the bottom of the question box."
    questionErrorLocation: "Angir plasseringen til en feilmelding i forhold til spørsmålet med ugyldige inndata. Velg mellom: \"Topp\" - en feiltekst plasseres øverst i spørsmålsboksen; \"Bunn\" - en feiltekst er plassert nederst i spørsmålsboksen.",
    // [Auto-translated] "Select if you want the first input field on each page ready for text entry."
    autoFocusFirstQuestion: "Velg om du vil at det første inntastingsfeltet på hver side skal være klart for tekstinntasting.",
    // "Keeps the original order of questions or randomizes them. The effect of this setting is only visible in the Preview tab."
    questionOrder: "Beholder den opprinnelige rekkefølgen på spørsmål eller randomiserer dem. Effekten av denne innstillingen er bare synlig i kategorien Forhåndsvisning.",
    // [Auto-translated] "For text entry questions only."
    maxTextLength: "Kun for spørsmål om tekstoppføring.",
    // [Auto-translated] "For question comments only."
    maxCommentLength: "Kun for spørsmålskommentarer.",
    // [Auto-translated] "Sets the number of displayed lines in text areas for question comments. If the input takes up more lines, the scroll bar appears."
    commentAreaRows: "Angir antall linjer som vises i tekstområder for spørsmålskommentarer. Hvis inndataene tar opp flere linjer, vises rullefeltet.",
    // [Auto-translated] "Select if you want question comments and Long Text questions to auto-grow in height based on the entered text length."
    autoGrowComment: "Velg om du vil at spørsmålskommentarer og Lang tekst-spørsmål skal vokse automatisk i høyde basert på den angitte tekstlengden.",
    // [Auto-translated] "For question comments and Long Text questions only."
    allowResizeComment: "Kun for spørsmålskommentarer og langtekstspørsmål.",
    // [Auto-translated] "Custom variables serve as intermediate or auxiliary variables used in form calculations. They take respondent inputs as source values. Each custom variable has a unique name and an expression it's based on."
    calculatedValues: "Egendefinerte variabler fungerer som mellomliggende variabler eller hjelpevariabler som brukes i skjemaberegninger. De tar respondentinnganger som kildeverdier. Hver egendefinerte variabel har et unikt navn og et uttrykk den er basert på.",
    // [Auto-translated] "Select if you wish the calculated value of the expression to be saved along with survey results."
    includeIntoResult: "Velg dette hvis du vil at den beregnede verdien for uttrykket skal lagres sammen med evalueringsresultatene.",
    // "A trigger is an event or condition that is based on an expression. Once the expression is evaluated to \"true\", a trigger sets off an action. Such an action can optionally have a target question it affects."
    triggers: "En utløser er en hendelse eller betingelse som er basert på et uttrykk. Når uttrykket er evaluert til \"sann\", utløses en utløser en handling. En slik handling kan eventuelt ha et målspørsmål den påvirker.",
    // [Auto-translated] "Choose whether or not to clear values for questions hidden by conditional logic and when to do it."
    clearInvisibleValues: "Velg om du vil fjerne verdier for spørsmål skjult av betinget logikk, og når du vil gjøre det.",
    // "Choose from: \"On lost focus\" - the value is updated when the input field loses focus; \"While typing\" - the value is updated in real-time, as users are typing."
    textUpdateMode: "Velg mellom: \"Ved tapt fokus\" - verdien oppdateres når inntastingsfeltet mister fokus; \"Mens du skriver\" - verdien oppdateres i sanntid, mens brukerne skriver.",
    // [Auto-translated] "The left value serves as a column ID used in conditional rules, the right value is displayed to respondents."
    columns: "Den venstre verdien fungerer som en kolonne-ID som brukes i betingede regler, den riktige verdien vises for respondentene.",
    // "The left value serves as a row ID used in conditional rules, the right value is displayed to respondents."
    rows: "Den venstre verdien fungerer som en rad-ID som brukes i betingede regler, den riktige verdien vises for respondentene.",
    // [Auto-translated] "Accepts CSS values (px, %, in, pt, etc.)."
    columnMinWidth: "Godtar CSS-verdier (px, %, i, pt osv.).",
    // [Auto-translated] "Accepts CSS values (px, %, in, pt, etc.)."
    rowTitleWidth: "Godtar CSS-verdier (px, %, i, pt osv.).",
    // [Auto-translated] "Visible only if at least one column displays total values set with \"Aggregation method\" or \"Total value expression\"."
    totalText: "Vises bare hvis minst én kolonne viser totalverdier som er angitt med «Aggregasjonsmetode» eller «Totalt verdiuttrykk».",
    // "Sets the location of an error message in relation to a cell with invalid input. The \"Inherit\" option applies the setting from the \"Error message alignment\" property."
    cellErrorLocation: "Angir plasseringen til en feilmelding i forhold til en celle med ugyldige inndata. Alternativet \"Arv\" bruker innstillingen fra egenskapen \"Justering av feilmelding\".",
    // "Sets the location of error messages for questions nested in detail sections. The \"Inherit\" option applies the setting from the \"Error message alignment\" property."
    detailErrorLocation: "Angir plasseringen av feilmeldinger for spørsmål som er nestet i detaljdeler. Alternativet \"Arv\" bruker innstillingen fra egenskapen \"Feilmeldingsjustering\".",
    // "When the \"Prevent duplicate responses\" property is enabled, a respondent attempting to submit a duplicate entry will receive the following error message."
    keyDuplicationError: "Når egenskapen \"Forhindre dupliserte svar\" er aktivert, får en svarperson som prøver å sende inn en duplikatoppføring, følgende feilmelding.",
    // [Auto-translated] "Allows you to calculate total values based on an expression. The expression can include basic calculations (`{q1_id} + {q2_id}`), Boolean expressions (`{age} > 60`) and functions ('iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, etc.)."
    totalExpression: "Lar deg beregne totalverdier basert på et uttrykk. Uttrykket kan omfatte grunnleggende beregninger ('{q1_id} + {q2_id}'), boolske uttrykk ('{alder} > 60') og funksjoner ('iif()', 'today()', 'age()', 'min()', 'max()', 'avg()', etc.).",
    // "Reference a column ID to require a user to provide a unique response for each question within the specified column."
    keyName: "Hvis den angitte kolonnen inneholder identiske verdier, gir undersøkelsen feilen \"Ikke-unik nøkkelverdi\".",
    // "Type a subtitle."
    description: "Skriv inn en undertekst.",
    // [Auto-translated] "Choose a language to begin creating your survey. To add a translation, switch to a new language and translate the original text here or in the Translations tab."
    locale: "Velg et språk for å begynne å opprette evalueringen. Hvis du vil legge til en oversettelse, bytter du til et nytt språk og oversetter originalteksten her eller i Oversettelser-fanen.",
    // "Sets the location of a detail section in relation to a row. Choose from: \"None\" - no detail section is added; \"Under the row\" - a detail section is placed under each row of the matrix; \"Under the row, display one detail section only\" - a detail section is displayed under a single row only, the remaining sections are collapsed."
    detailPanelMode: "Angir plasseringen av en detaljinndeling i forhold til en rad. Velg mellom: \"Ingen\" - ingen utvidelse er lagt til; \"Under raden\" - en radutvidelse er plassert under hver rad av matrisen; \"Under raden, vis bare en radutvidelse\" - en utvidelse vises bare under en enkelt rad, de resterende radutvidelsene er skjult.",
    // "Choose from: \"None\" - image maintains its original size; \"Contain\" - image is resized to fit while maintaining its aspect ratio; \"Cover\" - image fills the entire box while maintaining its aspect ratio; \"Fill\" - image is stretched to fill the box without maintaining its aspect ratio."
    imageFit: "Velg mellom: \"Ingen\" - bildet opprettholder sin opprinnelige størrelse; \"Innehold\" - bildet endres for å passe samtidig som størrelsesforholdet opprettholdes; \"Cover\" - bildet fyller hele boksen mens du opprettholder størrelsesforholdet; \"Fyll\" - bildet strekkes for å fylle boksen uten å opprettholde størrelsesforholdet.",
    // "The \"Inherit\" option applies a survey-level setting (\"Disabled\" by default)."
    autoGrow: "Øker gradvis høyden på inndatafeltet etter hvert som data registreres. Overstyrer innstillingen \"Inndatafelthøyde (i linjer)\".",
    // [Auto-translated] "The \"Inherit\" option applies a survey-level setting (\"Enabled\" by default)."
    allowResize: "Alternativet \"Arv\" bruker en innstilling på undersøkelsesnivå (\"Aktivert\" som standard).",
    // [Auto-translated] "A time interval in seconds after which the survey auto-advances to the \"Thank You\" page. When set to 0, counts the time spent on the survey."
    timeLimit: "Et tidsintervall i sekunder, hvoretter undersøkelsen automatisk går videre til \"Takk\"-siden. Når satt til 0, teller tiden brukt på undersøkelsen.",
    // [Auto-translated] "A time interval in seconds after which the survey auto-advances to the next page. Hides the \"Previous\" navigation button. When set to 0, counts the time spent on the current page."
    timeLimitPerPage: "Et tidsintervall i sekunder hvoretter undersøkelsen automatisk går videre til neste side. Skjuler navigasjonsknappen \"Forrige\". Når satt til 0, teller tiden som er brukt på gjeldende side.",
    // [Auto-translated] "Enable this option to trigger validation when a user focuses on an empty input field and then leaves it without making any changes."
    validateVisitedEmptyFields: "Aktiver dette alternativet for å utløse validering når en bruker fokuserer på et tomt inndatafelt og deretter forlater det uten å gjøre noen endringer.",
    page: {
      // "A page ID that is not visible to respondents."
      name: "En side-ID som ikke er synlig for respondentene.",
      // "Type a page subtitle."
      description: "Skriv inn en sideundertittel.",
      // "A caption displayed on a navigation button in the progress bar or table of contents (TOC). If you leave this field empty, the navigation button will use the page title or page name. To enable the progress bar or TOC, go to \"Survey\" → \"Navigation\"."
      navigationTitle: "En bildetekst som vises på en navigasjonsknapp i fremdriftslinjen eller innholdsfortegnelsen. Hvis du lar dette feltet stå tomt, vil navigasjonsknappen bruke sidetittelen eller sidenavnet. For å aktivere fremdriftslinjen eller innholdsfortegnelsen, gå til \"Survey\" → \"Navigation\".",
      // "A time interval in seconds after which the survey auto-advances to the next page. Hides the \"Previous\" navigation button. When set to 0, counts the time spent on the current page."
      timeLimit: "Et tidsintervall i sekunder hvoretter undersøkelsen automatisk går videre til neste side.",
      // "Use the magic wand icon to set a conditional rule that determines page visibility."
      visibleIf: "Bruk tryllestavikonet til å angi en betinget regel som bestemmer sidens synlighet.",
      // [Auto-translated] "Use the magic wand icon to set a conditional rule that disables the read-only mode for the page."
      enableIf: "Bruk tryllestavikonet til å angi en betinget regel som deaktiverer skrivebeskyttet modus for siden.",
      // "Use the magic wand icon to set a conditional rule that prevents survey submission unless at least one nested question has an answer."
      requiredIf: "Bruk tryllestavikonet til å angi en betinget regel som forhindrer innsending av spørreundersøkelser med mindre minst ett nestet spørsmål har et svar.",
      // "Applies to all questions within this page. When set to \"Hidden\", it also hides question descriptions. If you want to override this setting, define title alignment rules for individual questions or panels. The \"Inherit\" option applies the survey-level setting (\"Top\" by default)."
      questionTitleLocation: "Gjelder alle spørsmål på denne siden. Hvis du vil overstyre denne innstillingen, definerer du regler for titteljustering for enkeltspørsmål eller paneler. Alternativet \"Arv\" bruker innstillingen på undersøkelsesnivå (\"Topp\" som standard).",
      // [Auto-translated] "Sets consistent width for question titles when they are aligned to the left of their question boxes. Accepts CSS values (px, %, in, pt, etc.)."
      questionTitleWidth: "Angir konsekvent bredde for spørsmålstitler når de er justert til venstre for spørsmålsboksene. Godtar CSS-verdier (px, %, i, pt osv.).",
      // "Sets the location of an error message in relation to the question with invalid input. Choose between: \"Top\" - an error text is placed at the top of the question box; \"Bottom\" - an error text is placed at the bottom of the question box. The \"Inherit\" option applies the survey-level setting (\"Top\" by default)."
      questionErrorLocation: "Angir plasseringen til en feilmelding i forhold til spørsmålet med ugyldige inndata. Velg mellom: \"Topp\" - en feiltekst plasseres øverst i spørsmålsboksen; \"Bunn\" - en feiltekst er plassert nederst i spørsmålsboksen. Alternativet \"Arv\" bruker innstillingen på undersøkelsesnivå (\"Topp\" som standard).",
      // "Keeps the original order of questions or randomizes them. The \"Inherit\" option applies the survey-level setting (\"Original\" by default). The effect of this setting is only visible in the Preview tab."
      questionOrder: "Beholder den opprinnelige rekkefølgen på spørsmål eller randomiserer dem. Alternativet \"Arv\" bruker innstillingen på undersøkelsesnivå (\"Original\" som standard). Effekten av denne innstillingen er bare synlig i kategorien Forhåndsvisning.",
      // "Sets the visibility of navigation buttons on the page. The \"Inherit\" option applies the survey-level setting, which defaults to \"Visible\"."
      showNavigationButtons: "Angir synligheten til navigasjonsknapper på siden. Alternativet \"Arv\" bruker innstillingen på undersøkelsesnivå, som som standard er \"Synlig\".",
      // [Auto-translated] "This table lets you configure each grid column on the page. It automatically sets the width percentage for each column based on the maximum number of elements in a row. To customize the grid layout, manually adjust these values and define the title width for all questions in each column."
      gridLayoutColumns: "I denne tabellen kan du konfigurere hver rutenettkolonne på siden. Den angir automatisk breddeprosenten for hver kolonne basert på maksimalt antall elementer på rad. For å tilpasse rutenettoppsettet, juster disse verdiene manuelt og definer tittelbredden for alle spørsmålene i hver kolonne."
    },
    // [Auto-translated] "Sets the location of a timer on a page."
    timerLocation: "Angir plasseringen av en tidtaker på en side.",
    // "Choose from: \"Locked\" - users cannot expand or collapse entries; \"Collapse all\" - all entries start in a collapsed state; \"Expand all\" - all entries start in an expanded state; \"First expanded\" - only the first entry is initially expanded. Applies if \"Entry display mode\" is set to \"List\" and the \"Entry title pattern\" property is specified."
    panelsState: "Velg mellom: \"Låst\" - brukere kan ikke utvide eller skjule paneler; \"Skjul alle\" - alle paneler starter i kollapset tilstand; \"Utvid alle\" - alle paneler starter i utvidet tilstand; \"Først utvidet\" - bare det første panelet er i utgangspunktet utvidet.",
    // [Auto-translated] "Enter a shared property name within the array of objects that contains the image or video file URLs you want to display in the choice list."
    imageLinkName: "Skriv inn et navn på en delt egenskap i matrisen med objekter som inneholder URL-adressene til bildet eller videofilen du vil vise i valglisten.",
    // "The left value serves as an item ID used in conditional rules, the right value is displayed to respondents."
    choices: "Den venstre verdien fungerer som en vare-ID som brukes i betingede regler, den riktige verdien vises for respondentene.",
    // [Auto-translated] "Type a user-friendly title to display."
    title: "Skriv inn en brukervennlig tittel som skal vises.",
    // [Auto-translated] "Ensures that users won't complete the survey until files are uploaded."
    waitForUpload: "Sikrer at brukerne ikke fullfører undersøkelsen før filene er lastet opp.",
    // [Auto-translated] "Accepts CSS values (px, %, in, pt, etc.)."
    minWidth: "Godtar CSS-verdier (px, %, i, pt osv.).",
    // [Auto-translated] "Accepts CSS values (px, %, in, pt, etc.)."
    maxWidth: "Godtar CSS-verdier (px, %, i, pt osv.).",
    // "Accepts CSS values (px, %, in, pt, etc.)."
    width: "Godtar CSS-verdier (px, %, i, pt osv.).",
    // [Auto-translated] "A join identifier is a custom key that you can assign to several questions to link them together and sync their values. These values will be merged into a single array or object and stored in survey results using the key as the property name."
    valueName: "En sammenføyningsidentifikator er en egendefinert nøkkel som du kan tilordne til flere spørsmål for å koble dem sammen og synkronisere verdiene deres. Disse verdiene slås sammen til én enkelt matrise eller ett enkelt objekt og lagres i undersøkelsesresultatene ved å bruke nøkkelen som egenskapsnavn.",
    // [Auto-translated] "A value displayed in HTML questions and in the dynamic titles and descriptions of survey elements when the question value is empty."
    defaultDisplayValue: "En verdi som vises i HTML-spørsmål og i de dynamiske titlene og beskrivelsene av undersøkelseselementer når spørsmålsverdien er tom.",
    // [Auto-translated] "In single- and multiple-selection question types, each choice option has an ID and display value. When selected, this setting shows a display value instead of an ID value in HTML questions and dynamic titles and descriptions of survey elements."
    useDisplayValuesInDynamicTexts: "I enkeltvalgs- og flervalgsspørsmålstyper har hvert valgalternativ en ID og visningsverdi. Når denne innstillingen er valgt, vises en visningsverdi i stedet for en ID-verdi i HTML-spørsmål og dynamiske titler og beskrivelser av evalueringselementer.",
    // "Choose whether or not to clear question values hidden by conditional logic and when to do it. The \"Inherit\" option applies the survey-level setting (\"Upon survey completion\" by default)."
    clearIfInvisible: "Velg om du vil fjerne spørsmålsverdier skjult av betinget logikk, og når du vil gjøre det. Alternativet \"Arv\" bruker innstillingen på undersøkelsesnivå (\"Når undersøkelsen er fullført\" som standard).",
    // "Choose from: \"All\" - copies all choice options from the selected question; \"Selected\" - dynamically copies only selected choice options; \"Unselected\" - dynamically copies only unselected choice options. The \"None\" and \"Other\" options are copied by default if enabled in the source question."
    choicesFromQuestionMode: "Velg mellom: \"Alle\" - kopierer alle valgalternativer fra det valgte spørsmålet; \"Valgt\" - kopierer dynamisk bare valgte valgalternativer; \"Unselected\" - kopierer dynamisk bare uvalgte valgalternativer. Alternativene \"Ingen\" og \"Annet\" kopieres som standard hvis de er aktivert i kildespørsmålet.",
    // [Auto-translated] "In single- and multiple-selection question types, each choice option has an ID and display value. This setting specifies which matrix column or panel question should provide the IDs."
    choiceValuesFromQuestion: "I spørsmålstyper med ett eller flere valg har hvert valgalternativ en ID og visningsverdi. Denne innstillingen angir hvilken matrisekolonne eller hvilket panelspørsmål som skal gi ID-ene.",
    // [Auto-translated] "In single- and multiple-selection question types, each choice option has an ID and display value. This setting specifies which matrix column or panel question should provide the display texts."
    choiceTextsFromQuestion: "I spørsmålstyper med ett eller flere valg har hvert valgalternativ en ID og visningsverdi. Denne innstillingen angir hvilken matrisekolonne eller hvilket panelspørsmål som skal inneholde visningstekstene.",
    // [Auto-translated] "Select to let respondents add their own choices if the desired option isn't available in the dropdown. Custom choices will only be stored temporarily for the duration of the current browser session."
    allowCustomChoices: "Velg dette alternativet for å la respondentene legge til sine egne valg hvis det ønskede alternativet ikke er tilgjengelig i rullegardinlisten. Egendefinerte valg lagres bare midlertidig så lenge den gjeldende nettleserøkten varer.",
    // [Auto-translated] "When selected, users can include additional input in a separate comment box."
    showOtherItem: "Når dette alternativet er valgt, kan brukerne inkludere flere inndata i et eget kommentarfelt.",
    // "Displays each special choice option (\"None\", \"Other\", \"Select All\") on a new line, even when using a multiple-column layout."
    separateSpecialChoices: "Viser hvert spesialvalgalternativ (\"Ingen\", \"Annet\", \"Merk alt\") på en ny linje, selv når du bruker et oppsett med flere kolonner.",
    // [Auto-translated] "Specify the location within the service dataset where the target array of objects is located. Leave empty if the URL already points to the array."
    path: "Angi plasseringen i tjenestedatasettet der målmatrisen med objekter er plassert. La stå tom hvis URL-adressen allerede peker på matrisen.",
    choicesbyurl: {
      // "Enter a uniform property name within the array of objects whose value will be stored as a response in survey results."
      valueName: " "
    },
    // [Auto-translated] "Enter a uniform property name within the array of objects that contains the values you want to display in the choice list."
    titleName: "Skriv inn et ensartet egenskapsnavn i matrisen med objekter som inneholder verdiene du vil vise i valglisten.",
    // [Auto-translated] "Select to allow the service to return an empty response or array."
    allowEmptyResponse: "Velg dette alternativet hvis du vil at tjenesten skal returnere et tomt svar eller en matrise.",
    // [Auto-translated] "Use the magic wand icon to set a conditional rule that determines the visibility of all choice options."
    choicesVisibleIf: "Bruk tryllestavikonet til å angi en betinget regel som bestemmer synligheten til alle valgalternativer.",
    // [Auto-translated] "The left value serves as an item ID used in conditional rules, the right value is displayed to respondents."
    rateValues: "Den venstre verdien fungerer som en vare-ID som brukes i betingede regler, den riktige verdien vises for respondentene.",
    rating: {
      // "\"Auto\" selects between the \"Buttons\" and \"Dropdown\" modes based on the available width. When the width is insufficient to display buttons, the question displays a dropdown."
      displayMode: "\"Auto\" velger mellom \"Knapper\" og \"Dropdown\" -modus basert på tilgjengelig bredde. Når bredden ikke er tilstrekkelig til å vise knapper, viser spørsmålet en rullegardinmeny."
    },
    // [Auto-translated] "Allows you to connect questions that produce results in different formats. When such questions are linked together using a join identifier, this shared property stores selected question values."
    valuePropertyName: "Lar deg koble til spørsmål som gir resultater i forskjellige formater. Når slike spørsmål kobles sammen ved hjelp av en sammenføyningsidentifikator, lagrer denne delte egenskapen valgte spørsmålsverdier.",
    // [Auto-translated] "Select if you want to update the drop-down menu contents to match the search query that a user is typing in the input field."
    searchEnabled: "Velg om du vil oppdatere innholdet på rullegardinmenyen slik at det samsvarer med søket som en bruker skriver inn i inndatafeltet.",
    // [Auto-translated] "A value to save in survey results when respondents give a positive answer."
    valueTrue: "En verdi å spare i undersøkelsesresultater når respondentene gir et positivt svar.",
    // [Auto-translated] "A value to save in survey results when respondents give a negative answer."
    valueFalse: "En verdi å lagre i undersøkelsesresultater når respondentene gir et negativt svar.",
    // [Auto-translated] "It's not recommended that you disable this option as it overrides the Preview image and makes it hard for a user to understand whether the files have been uploaded."
    showPreview: "Det anbefales ikke at du deaktiverer dette alternativet, da det overstyrer forhåndsvisningsbildet og gjør det vanskelig for en bruker å forstå om filene er lastet opp.",
    // [Auto-translated] "Triggers a prompt asking to confirm the file deletion."
    needConfirmRemoveFile: "Utløser en melding som ber om å bekrefte slettingen av filen.",
    // [Auto-translated] "Enable to rank only selected choices. Users will drag selected items from the choice list to order them within the ranking area."
    selectToRankEnabled: "Aktiver for å rangere bare valgte valg. Brukere vil dra valgte elementer fra valglisten for å sortere dem innenfor rangeringsområdet.",
    // [Auto-translated] "Enter a list of choices that will be suggested to the respondent during input."
    dataList: "Angi en liste over valg som skal foreslås for respondenten under inndata.",
    // [Auto-translated] "The setting only resizes the input fields and doesn't affect the width of the question box."
    inputSize: "Innstillingen endrer bare størrelsen på inndatafeltene og påvirker ikke bredden på spørsmålsboksen.",
    // [Auto-translated] "Sets consistent width for all item labels. Accepts CSS values (px, %, in, pt, etc.)."
    itemTitleWidth: "Angir konsekvent bredde for alle vareetiketter. Godtar CSS-verdier (px, %, in, pt, etc.).",
    // "Select how to align input value within the field. The default setting \"Auto\" aligns the input value to the right if currency or numeric masking is applied and to the left if not."
    inputTextAlignment: "Velg hvordan du vil justere inndataverdien i feltet. Standardinnstillingen \"Auto\" justerer inngangsverdien til høyre hvis valuta eller numerisk maskering brukes, og til venstre hvis ikke.",
    // [Auto-translated] "Serves as a substitute when the image cannot be displayed on a user's device and for accessibility purposes."
    altText: "Fungerer som en erstatning når bildet ikke kan vises på en brukers enhet og av tilgjengelighetshensyn.",
    // "Defines the color of the selected emoji when the Rating icon type is set to \"Smileys\". Choose between: \"Default\" - the selected emoji appears in default survey color; \"Scale\" - the selected emoji inherits color from the rating scale."
    rateColorMode: "Definerer fargen på den valgte emojien når Vurdering-ikontypen er satt til \"Smileys\". Velg mellom: \"Standard\" - den valgte emojien vises i standard undersøkelsesfarge; \"Skala\" - den valgte emojien arver farge fra vurderingsskalaen.",
    expression: {
      // "An expression ID that is not visible to respondents."
      name: "En uttrykks-ID som ikke er synlig for respondentene.",
      // "Type an expression subtitle."
      description: "Skriv inn en undertittel for uttrykk.",
      // "An expression can include basic calculations (`{q1_id} + {q2_id}`), conditions (`{age} > 60`), and functions ('iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, etc.)."
      expression: "Et uttrykk kan inneholde grunnleggende beregninger ('{q1_id} + {q2_id}'), betingelser ('{alder} > 60') og funksjoner ('iif()', 'today()', 'age()', 'min()', 'max()', 'avg()', etc.)."
    },
    // "Select to store the \"Other\" option value as a separate property in survey results."
    storeOthersAsComment: "Velg dette alternativet hvis du vil lagre alternativverdien «Annet» som en egen egenskap i undersøkelsesresultatene.",
    // [Auto-translated] "Use {0} as a placeholder for the actual value."
    format: "Bruk {0} som plassholder for den faktiske verdien.",
    // [Auto-translated] "Refer to the [accept](https://www.w3schools.com/tags/att_input_accept.asp) attribute description for more information."
    acceptedTypes: "Se attributtbeskrivelsen [accept](https://www.w3schools.com/tags/att_input_accept.asp) hvis du vil ha mer informasjon.",
    // [Auto-translated] "Arranges choice options in a multi-column layout. When set to 0, the options are displayed in a single line. Applies only to columns with \"Cell input type\" set to Radio Button Group or Checkboxes."
    columnColCount: "Ordner valgalternativer i et oppsett med flere kolonner. Når den er satt til 0, vises alternativene på én enkelt linje. Gjelder bare for kolonner med \"Celleinndatatype\" satt til Alternativknappgruppe eller avkrysningsbokser.",
    // [Auto-translated] "Select the data type that the user's browser can retrieve. This data is sourced either from past values entered by the user or from pre-configured values if any have been saved by the user for autocompletion."
    autocomplete: "Velg datatypen som brukerens nettleser kan hente. Disse dataene hentes enten fra tidligere verdier som er angitt av brukeren, eller fra forhåndskonfigurerte verdier hvis noen er lagret av brukeren for automatisk fullføring.",
    // "Applies when \"File source type\" is \"Local file\" or when camera is unavailable"
    filePlaceholder: "Gjelder når \"Kildetype\" er \"Lokale filer\" eller når kameraet er utilgjengelig",
    // "Applies when \"File source type\" is \"Camera\"."
    photoPlaceholder: "Gjelder når \"Kildetype\" er \"Kamera\".",
    // "Applies when \"File source type\" is \"Local file or camera\"."
    fileOrPhotoPlaceholder: "Gjelder når \"Kildetype\" er \"Lokale filer eller kamera\".",
    // "Arranges choice options in a multi-column layout. When set to 0, the options are displayed in a single line."
    colCount: "Ordner valgalternativer i et oppsett med flere kolonner. Når den er satt til 0, vises alternativene på én enkelt linje.",
    masksettings: {
      // "Select if you want to store the question value with an applied mask in survey results."
      saveMaskedValue: "Velg om du vil lagre spørsmålsverdien med en brukt maske i evalueringsresultatene."
    },
    patternmask: {
      // "The pattern can contain string literals and the following placeholders: `9` - for a digit; `a` - for an upper- or lower-case letter; `#` - for a digit or an upper- or lower-case letter. Use backslash `\\` to escape a character."
      pattern: "Mønsteret kan inneholde strenglitteraler og følgende plassholdere: '9' - for et siffer; 'a' - for en stor eller liten bokstav; '#' - for et siffer eller en stor eller liten bokstav. Bruk omvendt skråstrek '\\' for å unnslippe et tegn."
    },
    datetimemask: {
      // "The pattern can contain separator characters and the following placeholders:<br>`m` - Month number.<br>`mm` - Month number, with leading zero for single-digit values.<br>`d` - Day of the month.<br>`dd` - Day of the month, with leading zero for single-digit values.<br>`yy` - The last two digits of the year.<br>`yyyy` - Four-digit year.<br>`H` - Hours in 24-hour format.<br>`HH` - Hours in 24-hour format, with leading zero for single-digit values.<br>`h` - Hours in 12-hour format.<br>`hh` - Hours in 12-hour format, with leading zero for single-digit values.<br>`MM` - Minutes.<br>`ss` - Seconds.<br>`TT` - 12-hour clock period in upper case (AM/PM).<br>`tt` - 12-hour clock period in lower case (am/pm)."
      pattern: "Mønsteret kan inneholde skilletegn og følgende plassholdere:<br>'m' – Månedsnummer.<br>'mm' - Månedsnummer, med foranstilt null for ensifrede verdier. <br>'d' - Dag i måneden. <br>'dd' - Dagen i måneden, med foranstilt null for ensifrede verdier. <br>'yy' - De to siste sifrene i året. <br>'yyyy' - Firesifret år. <br>'H' - Timer i 24-timers format. <br>'HH' - Timer i 24-timers format, med foranstilt null for ensifrede verdier. <br>'h' - Timer i 12-timers format. <br>'hh' - Timer i 12-timers format, med ledende null for ensifrede verdier. <br>'MM' - minutter. <br>'ss' - Sekunder. <br>'TT' - 12-timers klokkeperiode med store bokstaver (AM / PM). <br>'TT' - 12-timers klokkeperiode med små bokstaver (AM / PM)."
    },
    numericmask: {
      // "A symbol used to separate the fractional part from the integer part of a displayed number."
      decimalSeparator: "Et symbol som brukes til å skille brøkdelen fra heltallsdelen av et tall som vises.",
      // "A symbol used to separate the digits of a large number into groups of three."
      thousandsSeparator: "Et symbol som brukes til å skille sifrene i et stort tall i grupper på tre.",
      // "Limits how many digits to retain after the decimal point for a displayed number."
      precision: "Begrenser hvor mange sifre som skal beholdes etter desimaltegnet for et tall som vises."
    },
    currencymask: {
      // "One or several symbols to be displayed before the value."
      prefix: "Ett eller flere symboler som skal vises før verdien.",
      // "One or several symbols to be displayed after the value."
      suffix: "Ett eller flere symboler som skal vises etter verdien."
    },
    theme: {
      // "This setting applies only to questions outside of a panel."
      isPanelless: "Denne innstillingen gjelder bare for spørsmål utenfor et panel.",
      // "Sets a supplementary color that highlights key survey elements."
      primaryColor: "Angir en tilleggsfarge som uthever viktige undersøkelseselementer.",
      // "Adjusts the transparency of panels and question boxes relative to the survey background."
      panelBackgroundTransparency: "Justerer gjennomsiktigheten til paneler og spørsmålsbokser i forhold til evalueringsbakgrunnen.",
      // "Adjusts the transparency of input elements relative to the survey background."
      questionBackgroundTransparency: "Justerer gjennomsiktigheten til inndataelementer i forhold til evalueringsbakgrunnen.",
      // "Sets the corner radius for all rectangular elements. Enable the Advanced Mode if you want to set individual corner radius values for input elements or panels and question boxes."
      cornerRadius: "Angir hjørneradiusen for alle rektangulære elementer. Aktiver avansert modus hvis du vil angi individuelle hjørneradiusverdier for inndataelementer eller paneler og spørsmålsbokser.",
      // "Sets the main background color of the survey."
      "--sjs-general-backcolor-dim": "Angir hovedbakgrunnsfargen for undersøkelsen."
    },
    header: {
      // "The \"Same as container\" option auto-adjusts the header content area width to fit into the HTML element the survey is placed in."
      inheritWidthFrom: "Alternativet \"Samme som beholder\" justerer automatisk bredden på overskriftsinnholdsområdet slik at det passer inn i HTML-elementet undersøkelsen er plassert i.",
      // [Auto-translated] "The width of the header area that contains the survey title and description, measured in pixels."
      textAreaWidth: "Bredden på overskriftsområdet som inneholder evalueringstittelen og beskrivelsen, målt i piksler.",
      // [Auto-translated] "When enabled, the top of the survey overlays the bottom of the header."
      overlapEnabled: "Når den er aktivert, overlapper toppen av evalueringen bunnen av overskriften.",
      // [Auto-translated] "When set to 0, the height is calculated automatically to accommodate the header's content."
      mobileHeight: "Når den er satt til 0, beregnes høyden automatisk for å få plass til overskriftens innhold."
    },
    // "The \"Same as container\" option auto-adjusts the progress bar area width to fit into the HTML element the survey is placed in."
    progressBarInheritWidthFrom: "Alternativet \"Samme som beholder\" justerer automatisk fremdriftslinjens områdebredde slik at den passer inn i HTML-elementet undersøkelsen er plassert i.",
    // [Auto-translated] "Used when the 'Survey layout' is set to 'Single input field per page'. In this layout, the matrix is split so that each input field appears on a separate page. Use the {rowIndex} placeholder to insert auto numbering, {rowTitle} or {rowName} to reference the row's title or ID, and {row.columnid} to include the value of a specific matrix column."
    singleInputTitleTemplate: "Brukes når 'Undersøkelsesoppsett' er satt til 'Enkelt inndatafelt per side'. I dette oppsettet er matrisen delt slik at hvert inndatafelt vises på en egen side. Bruk plassholderen {rowIndex} til å sette inn automatisk nummerering, {rowTitle} eller {rowName} for å referere til radens tittel eller ID, og {row.columnid} for å inkludere verdien for en bestemt matrisekolonne."
  },
  // Properties
  p: {
    title: {
      // "title"
      name: "title",
      // "Leave it empty, if it is the same as 'Name'"
      title: "La den være tom, dersom den skal være samme som navnet"
    },
    // [Auto-translated] "Allow multiple selection"
    multiSelect: "Tillat flere valg",
    // [Auto-translated] "Show image and video captions"
    showLabel: "Vis bilde- og videotekster",
    // [Auto-translated] "Swap the order of Yes and No"
    swapOrder: "Bytte rekkefølgen på Ja og Nei",
    // [Auto-translated] "Value"
    value: "Verdi",
    // [Auto-translated] "Tab alignment"
    tabAlign: "Justering av tabulatorer",
    // [Auto-translated] "File source type"
    sourceType: "Type filkilde",
    // [Auto-translated] "Fit to container"
    fitToContainer: "Tilpass til container",
    // [Auto-translated] "Set value expression"
    setValueExpression: "Angi verdiuttrykk",
    // "Description"
    description: "description", // Auto-generated string
    // [Auto-translated] "Logo fit"
    logoFit: "Logo passform",
    // [Auto-translated] "Pages"
    pages: "Sider", // Auto-generated string
    // [Auto-translated] "Questions"
    questions: "Spørsmål", // Auto-generated string
    // "Triggers"
    triggers: "triggers",
    // [Auto-translated] "Custom variables"
    calculatedValues: "Egendefinerte variabler",
    // [Auto-translated] "Survey id"
    surveyId: "Undersøkelses-ID", // Auto-generated string
    // [Auto-translated] "Survey post id"
    surveyPostId: "Post-ID for undersøkelse", // Auto-generated string
    // [Auto-translated] "Survey show data saving"
    surveyShowDataSaving: "Undersøkelse viser datalagring", // Auto-generated string
    // [Auto-translated] "Question description alignment"
    questionDescriptionLocation: "Justering av spørsmålsbeskrivelse",
    // [Auto-translated] "Progress bar type"
    progressBarType: "Type fremdriftsindikator", // Auto-generated string
    // [Auto-translated] "Show table of contents (TOC)"
    showTOC: "Vis innholdsfortegnelse (TOC)",
    // [Auto-translated] "TOC alignment"
    tocLocation: "Justering av innholdsfortegnelse",
    // [Auto-translated] "Question title pattern"
    questionTitlePattern: "Mønster for spørsmålstittel", // Auto-generated string
    // [Auto-translated] "Survey width mode"
    widthMode: "Modus for undersøkelsesbredde",
    // [Auto-translated] "Show brand info"
    showBrandInfo: "Vis merkeinformasjon", // Auto-generated string
    // [Auto-translated] "Use display values in dynamic texts"
    useDisplayValuesInDynamicTexts: "Bruke visningsverdier i dynamiske tekster",
    // "Visible if"
    visibleIf: "visibleIf", // Auto-generated string
    // [Auto-translated] "Default value expression"
    defaultValueExpression: "Uttrykk for standardverdi",
    // "Required if"
    requiredIf: "requiredIf", // Auto-generated string
    // [Auto-translated] "Reset value if"
    resetValueIf: "Tilbakestill verdien hvis",
    // [Auto-translated] "Set value if"
    setValueIf: "Angi verdi hvis",
    // "Validation rules"
    validators: "validators",
    // [Auto-translated] "Bindings"
    bindings: "Bindinger", // Auto-generated string
    // [Auto-translated] "Render as"
    renderAs: "Gjengi som", // Auto-generated string
    // [Auto-translated] "Attach original items"
    attachData: "Legg ved originale elementer", // Auto-generated string
    // "Choices"
    choices: "choices",
    // "Choices by url"
    choicesByUrl: "choicesByUrl", // Auto-generated string
    // "Currency"
    currency: "currency", // Auto-generated string
    // [Auto-translated] "Cell hint"
    cellHint: "Celle hint", // Auto-generated string
    // [Auto-translated] "Total maximum fraction digits"
    totalMaximumFractionDigits: "Totalt maksimum antall sifre i brøk", // Auto-generated string
    // [Auto-translated] "Total minimum fraction digits"
    totalMinimumFractionDigits: "Totalt antall minimumssifre i brøk", // Auto-generated string
    // "Columns"
    columns: "columns", // Auto-generated string
    // [Auto-translated] "Detail elements"
    detailElements: "Detaljelementer", // Auto-generated string
    // [Auto-translated] "Allow adaptive actions"
    allowAdaptiveActions: "Tillat adaptive handlinger", // Auto-generated string
    // "Default row value"
    defaultRowValue: "defaultRowValue", // Auto-generated string
    // [Auto-translated] "Auto-expand new row details"
    detailPanelShowOnAdding: "Utvid nye raddetaljer automatisk",
    // [Auto-translated] "Choices lazy load enabled"
    choicesLazyLoadEnabled: "Valg lat belastning aktivert", // Auto-generated string
    // [Auto-translated] "Choices lazy load page size"
    choicesLazyLoadPageSize: "Valg lat lastesidestørrelse", // Auto-generated string
    // [Auto-translated] "Input field component"
    inputFieldComponent: "Komponent for inntastingsfelt", // Auto-generated string
    // [Auto-translated] "Item component"
    itemComponent: "Element komponent", // Auto-generated string
    // [Auto-translated] "Min"
    min: "Min", // Auto-generated string
    // [Auto-translated] "Max"
    max: "Maks", // Auto-generated string
    // [Auto-translated] "Min value expression"
    minValueExpression: "Mitt verdiuttrykk", // Auto-generated string
    // [Auto-translated] "Max value expression"
    maxValueExpression: "Uttrykk med maksverdi", // Auto-generated string
    // [Auto-translated] "Step"
    step: "Skritt", // Auto-generated string
    // [Auto-translated] "Items for auto-suggest"
    dataList: "Elementer for automatisk forslag",
    // "Input field width (in characters)"
    inputSize: "inputSize",
    // [Auto-translated] "Item label width"
    itemTitleWidth: "Bredde på vareetikett",
    // [Auto-translated] "Input value alignment"
    inputTextAlignment: "Justering av inngangsverdi",
    // [Auto-translated] "Elements"
    elements: "Elementer", // Auto-generated string
    // [Auto-translated] "Content"
    content: "Innhold", // Auto-generated string
    // [Auto-translated] "Navigation title"
    navigationTitle: "Navigasjon tittel", // Auto-generated string
    // [Auto-translated] "Navigation description"
    navigationDescription: "Beskrivelse av navigasjon", // Auto-generated string
    // [Auto-translated] "Long tap"
    longTap: "Langt trykk", // Auto-generated string
    // [Auto-translated] "Expand input field dynamically"
    autoGrow: "Utvide inndatafeltet dynamisk",
    // [Auto-translated] "Enable resize handle"
    allowResize: "Aktiver størrelseshåndtak",
    // [Auto-translated] "Accept carriage return"
    acceptCarriageReturn: "Godta retur av frakt", // Auto-generated string
    // [Auto-translated] "Display mode"
    displayMode: "Visningsmodus",
    // [Auto-translated] "Rate type"
    rateType: "Type sats", // Auto-generated string
    // "Label"
    label: "label", // Auto-generated string
    // [Auto-translated] "Content mode"
    contentMode: "Innhold-modus",
    // [Auto-translated] "Image and thumbnail fit"
    imageFit: "Bilde og miniatyrbilde passer",
    // [Auto-translated] "Alt text"
    altText: "Alternativ tekst",
    // [Auto-translated] "Height"
    height: "Høyde", // Auto-generated string
    // [Auto-translated] "Height on smartphones"
    mobileHeight: "Høyde på smarttelefoner",
    // [Auto-translated] "Pen color"
    penColor: "Farge på penn", // Auto-generated string
    // [Auto-translated] "Background color"
    backgroundColor: "Bakgrunnsfarge",
    // [Auto-translated] "Template elements"
    templateElements: "Mal elementer", // Auto-generated string
    // [Auto-translated] "Operator"
    operator: "Operatør", // Auto-generated string
    // [Auto-translated] "Is variable"
    isVariable: "Er variabel", // Auto-generated string
    // [Auto-translated] "Run expression"
    runExpression: "Kjør uttrykk", // Auto-generated string
    // [Auto-translated] "Show caption"
    showCaption: "Vis bildetekst", // Auto-generated string
    // [Auto-translated] "Icon name"
    iconName: "Navn på ikon", // Auto-generated string
    // [Auto-translated] "Icon size"
    iconSize: "Ikon størrelse", // Auto-generated string
    // [Auto-translated] "Precision"
    precision: "Presisjon", // Auto-generated string
    // [Auto-translated] "Matrix drag handle area"
    matrixDragHandleArea: "Område for drahåndtak for matrise", // Auto-generated string
    // [Auto-translated] "Background image"
    backgroundImage: "Bakgrunnsbilde",
    // [Auto-translated] "Background image fit"
    backgroundImageFit: "Tilpasning til bakgrunnsbilde", // Auto-generated string
    // [Auto-translated] "Background image attachment"
    backgroundImageAttachment: "Vedlegg til bakgrunnsbilde", // Auto-generated string
    // [Auto-translated] "Background opacity"
    backgroundOpacity: "Ugjennomsiktighet i bakgrunnen", // Auto-generated string
    // [Auto-translated] "Allow selective ranking"
    selectToRankEnabled: "Tillat selektiv rangering",
    // [Auto-translated] "Ranking area alignment"
    selectToRankAreasLayout: "Justering av rangeringsområde",
    // [Auto-translated] "Text to show if all options are selected"
    selectToRankEmptyRankedAreaText: "Tekst som skal vises hvis alle alternativene er valgt",
    // [Auto-translated] "Placeholder text for the ranking area"
    selectToRankEmptyUnrankedAreaText: "Plassholdertekst for rangeringsområdet",
    // [Auto-translated] "Allow camera access"
    allowCameraAccess: "Tillat kameratilgang", // Auto-generated string
    // [Auto-translated] "Rating icon color mode"
    scaleColorMode: "Fargemodus for vurderingsikon",
    // [Auto-translated] "Smileys color scheme"
    rateColorMode: "Smilefjes fargevalg",
    // [Auto-translated] "Copy display value"
    copyDisplayValue: "Kopier visningsverdi", // Auto-generated string
    // [Auto-translated] "Column span"
    effectiveColSpan: "Spaltespenn",
    // [Auto-translated] "Progress bar area width"
    progressBarInheritWidthFrom: "Bredde på fremdriftslinjeområde",
    // [Auto-translated] "Theme name"
    themeName: "Tema navn"
  },
  theme: {
    // "Advanced mode"
    advancedMode: "Avansert modus",
    // "Page"
    pageTitle: "Skrift for sidetittel",
    // "Question box"
    questionTitle: "Spørsmål tittel skrift",
    // "Input element"
    editorPanel: "Inndata-element",
    // [Auto-translated] "Lines"
    lines: "Linjer",
    // [Auto-translated] "Default"
    primaryDefaultColor: "Standard",
    // [Auto-translated] "Hover"
    primaryDarkColor: "Sveve",
    // [Auto-translated] "Selected"
    primaryLightColor: "Utvalgt",
    // [Auto-translated] "Background color"
    backgroundDimColor: "Bakgrunnsfarge",
    // "Corner radius"
    cornerRadius: "Hjørne radius",
    // [Auto-translated] "Default background"
    backcolor: "Standard bakgrunn",
    // [Auto-translated] "Hover background"
    hovercolor: "Pekerfølsom bakgrunn",
    // [Auto-translated] "Border decoration"
    borderDecoration: "Grense dekorasjon",
    // [Auto-translated] "Font color"
    fontColor: "Skriftfarge",
    // [Auto-translated] "Background color"
    backgroundColor: "Bakgrunnsfarge",
    // [Auto-translated] "Default color"
    primaryForecolor: "Standardfarge",
    // [Auto-translated] "Disabled color"
    primaryForecolorLight: "Deaktivert farge",
    // [Auto-translated] "Font"
    font: "Font",
    // [Auto-translated] "Darker"
    borderDefault: "Mørkere",
    // [Auto-translated] "Lighter"
    borderLight: "Lekter",
    // [Auto-translated] "Font family"
    fontFamily: "Skriftfamilie",
    // [Auto-translated] "Regular"
    fontWeightRegular: "Regelmessig",
    // [Auto-translated] "Heavy"
    fontWeightHeavy: "Tung",
    // [Auto-translated] "Semi-bold"
    fontWeightSemiBold: "Halvmodig",
    // [Auto-translated] "Bold"
    fontWeightBold: "Fet",
    // [Auto-translated] "Color"
    color: "Farge",
    // [Auto-translated] "Placeholder color"
    placeholderColor: "Plassholderfarge",
    // [Auto-translated] "Size"
    size: "Størrelse",
    // [Auto-translated] "Opacity"
    opacity: "Ugjennomsiktighet",
    // [Auto-translated] "X"
    boxShadowX: "X",
    // [Auto-translated] "Y"
    boxShadowY: "Y",
    // [Auto-translated] "Add Shadow Effect"
    boxShadowAddRule: "Legg til skyggeeffekt",
    // [Auto-translated] "Blur"
    boxShadowBlur: "Dimme",
    // [Auto-translated] "Spread"
    boxShadowSpread: "Spredning",
    // [Auto-translated] "Drop"
    boxShadowDrop: "Dråpe",
    // [Auto-translated] "Inner"
    boxShadowInner: "Indre",
    names: {
      // [Auto-translated] "Default"
      default: "Standard",
      // [Auto-translated] "Sharp"
      sharp: "Skarp",
      // [Auto-translated] "Borderless"
      borderless: "Kantløse",
      // [Auto-translated] "Flat"
      flat: "Flat",
      // [Auto-translated] "Plain"
      plain: "Slette",
      // [Auto-translated] "Double Border"
      doubleborder: "Dobbel kantlinje",
      // [Auto-translated] "Layered"
      layered: "Lagdelte",
      // [Auto-translated] "Solid"
      solid: "Solid",
      // [Auto-translated] "3D"
      threedimensional: ".3D",
      // [Auto-translated] "Contrast"
      contrast: "Kontrast"
    },
    colors: {
      // [Auto-translated] "Teal"
      teal: "Teal",
      // [Auto-translated] "Blue"
      blue: "Blå",
      // [Auto-translated] "Purple"
      purple: "Lilla",
      // [Auto-translated] "Orchid"
      orchid: "Orkidé",
      // [Auto-translated] "Tulip"
      tulip: "Tulipan",
      // [Auto-translated] "Brown"
      brown: "Brun",
      // [Auto-translated] "Green"
      green: "Grønn",
      // [Auto-translated] "Gray"
      gray: "Grå"
    }
  },
  creatortheme: {
    // [Auto-translated] "Surface background"
    "--sjs-special-background": "Overflate bakgrunn",
    // [Auto-translated] "Primary"
    "--sjs-primary-background-500": "Primær",
    // [Auto-translated] "Secondary"
    "--sjs-secondary-background-500": "Sekundær",
    // [Auto-translated] "Surface"
    surfaceScale: "Flate",
    // [Auto-translated] "UI elements"
    userInterfaceBaseUnit: "Elementer i brukergrensesnittet",
    // [Auto-translated] "Font"
    fontScale: "Font",
    names: {
      // [Auto-translated] "Survey Creator 2020"
      sc2020: "Skaperen av spørreundersøkelsen 2020",
      // [Auto-translated] "Light"
      "default-light": "Lys",
      // [Auto-translated] "Dark"
      "default-dark": "Mørk",
      // [Auto-translated] "Contrast"
      "default-contrast": "Kontrast"
    }
  }
};

setupLocale({ localeCode: "nb", strings: nbStrings });