import { setupLocale } from "survey-creator-core";

export var italianTranslation = {
  // survey templates
  survey: {
    // "Edit"
    edit: "Modifica",
    // "Watch and learn how to create surveys"
    externalHelpLink: "Guarda e impara come creare sondaggio",
    // "https://www.youtube.com/channel/UCH2ru9okIcooNZfpIbyq4qQ?view_as=subscriber"
    externalHelpLinkUrl: "https://www.youtube.com/channel/UCH2ru9okIcooNZfpIbyq4qQ?view_as=subscriber",
    // "Please drop a question here from the Toolbox."
    dropQuestion: "Aggiungi una domanda qui",
    // "Create a rule to customize the flow of the survey."
    addLogicItem: "Crea una regola per personalizzare il percorso del sondaggio.",
    // "Copy"
    copy: "Copia",
    // "Duplicate"
    duplicate: "Duplica",
    // "Add to toolbox"
    addToToolbox: "Aggiungi alla toolbox",
    // "Delete Panel"
    deletePanel: "Elimina Pannello",
    // "Delete Question"
    deleteQuestion: "Elimina Domanda",
    // "Convert to"
    convertTo: "Converti in",
    // "Drag element"
    drag: "Trascina l'elemento"
  },
  // Creator tabs
  tabs: {
    // "Preview"
    preview: "Anteprima del sondaggio",
    // "Themes"
    theme: "Temi",
    // "Translations"
    translation: "Traduzione",
    // "Designer"
    designer: "Progetta il sondaggio",
    // "JSON Editor"
    json: "Modifica JSON",
    // "Logic"
    logic: "Logica"
  },
  // Question types
  qt: {
    // "Default"
    default: "Default",
    // "Checkboxes"
    checkbox: "Casella di controllo",
    // "Long Text"
    comment: "Commento",
    // "Image Picker"
    imagepicker: "Selezionatore di immagini",
    // "Ranking"
    ranking: "Classifica",
    // "Image"
    image: "Immagine",
    // "Dropdown"
    dropdown: "Tendina",
    // [Auto-translated] "Multi-Select Dropdown"
    tagbox: "Menù a discesa a selezione multipla",
    // "File Upload"
    file: "File Upload",
    // "HTML"
    html: "Html",
    // "Single-Select Matrix"
    matrix: "Matrice (scelta singola)",
    // "Multi-Select Matrix"
    matrixdropdown: "Matrice (scelta multipla)",
    // "Dynamic Matrix"
    matrixdynamic: "Matrice (dinamica)",
    // "Multiple Textboxes"
    multipletext: "Testo multiplo",
    // "Panel"
    panel: "Pannello",
    // "Dynamic Panel"
    paneldynamic: "Pannello dinamico",
    // "Radio Button Group"
    radiogroup: "Opzione multipla",
    // "Rating Scale"
    rating: "Valutazione",
    // [Auto-translated] "Slider"
    slider: "Cursore",
    // "Single-Line Input"
    text: "Testo semplice",
    // "Yes/No (Boolean)"
    boolean: "Booleano",
    // "Expression (read-only)"
    expression: "Espressione (sola lettura)",
    // "Signature"
    signaturepad: "Pad per la firma",
    // "Button Group"
    buttongroup: "Gruppo di pulsanti"
  },
  toolboxCategories: {
    // "General"
    general: "Generale",
    // "Choice Questions"
    choice: "Domande a scelta",
    // "Text Input Questions"
    text: "Domande sull'input di testo",
    // "Containers"
    containers: "Contenitori",
    // "Matrix Questions"
    matrix: "Domande sulla matrice",
    // "Misc"
    misc: "Altri"
  },
  // Strings in SurveyJS Creator
  ed: {
    // "Default ({0})"
    defaultLocale: "Default ({0})",
    // "Survey"
    survey: "Sondaggio",
    // "Settings"
    settings: "Impostazioni sondaggio",
    // "Open settings"
    settingsTooltip: "Apri le impostazioni del sondaggio",
    // [Auto-translated] "Survey Settings"
    surveySettings: "Impostazioni del sondaggio",
    // [Auto-translated] "Survey settings"
    surveySettingsTooltip: "Impostazioni del sondaggio",
    // [Auto-translated] "Theme Settings"
    themeSettings: "Impostazioni del tema",
    // [Auto-translated] "Theme settings"
    themeSettingsTooltip: "Impostazioni del tema",
    // [Auto-translated] "Creator Settings"
    creatorSettingTitle: "Impostazioni autore",
    // "Show Panel"
    showPanel: "Mostra Pannello",
    // "Hide Panel"
    hidePanel: "Nascondi Pannello",
    // "Select previous"
    prevSelected: "Seleziona precedente",
    // "Select next"
    nextSelected: "Seleziona seguente",
    // [Auto-translated] "Focus previous"
    prevFocus: "Focus precedente",
    // [Auto-translated] "Focus next"
    nextFocus: "Focus successivo",
    // "Survey"
    surveyTypeName: "Sondaggio",
    // "Page"
    pageTypeName: "Pagina",
    // "Panel"
    panelTypeName: "Pannello",
    // "Question"
    questionTypeName: "Domanda",
    // "Column"
    columnTypeName: "Colonna",
    // "Add New Page"
    addNewPage: "Aggiungi Nuova Pagina",
    // "Scroll to the Right"
    moveRight: "Scorri a destra",
    // "Scroll to the Left"
    moveLeft: "Scorri a sinistra",
    // "Delete Page"
    deletePage: "Elimina Pagina",
    // "Edit Page"
    editPage: "Modifica Pagina",
    // "Edit"
    edit: "Modifica",
    // "page"
    newPageName: "Pagina",
    // "question"
    newQuestionName: "Domanda",
    // "panel"
    newPanelName: "Pannello",
    // "text"
    newTextItemName: "Testo",
    // "Default"
    defaultV2Theme: "Default",
    // "Modern"
    modernTheme: "Tema Moderno",
    // "Default (legacy)"
    defaultTheme: "Default (legacy)",
    // "Preview Survey Again"
    testSurveyAgain: "Prova il sondaggio di nuovo",
    // "Survey width: "
    testSurveyWidth: "Larghezza sondaggio:",
    // "You had to navigate to"
    navigateToMsg: "Bisogna navigare fino a:",
    // "Save Survey"
    saveSurvey: "Salva sondaggio",
    // "Save Survey"
    saveSurveyTooltip: "Salva sondaggio",
    // [Auto-translated] "Save Theme"
    saveTheme: "Salva tema",
    // [Auto-translated] "Save Theme"
    saveThemeTooltip: "Salva tema",
    // "Hide errors"
    jsonHideErrors: "Nascondi gli errori",
    // "Show errors"
    jsonShowErrors: "Mostra gli errori",
    // "Undo"
    undo: "Annulla",
    // "Redo"
    redo: "Ripristina",
    // "Undo last change"
    undoTooltip: "Annulla l'ultima modifica",
    // "Redo the change"
    redoTooltip: "Ripristina l'ultima modifica",
    // [Auto-translated] "Expand"
    expandTooltip: "Espandere",
    // [Auto-translated] "Collapse"
    collapseTooltip: "Collasso",
    // "Expand All"
    expandAllTooltip: "Espandi tutto",
    // "Collapse All"
    collapseAllTooltip: "Comprimi tutto",
    // [Auto-translated] "Zoom In"
    zoomInTooltip: "Ingrandisci",
    // [Auto-translated] "Zoom to 100%"
    zoom100Tooltip: "Zoom al 100%",
    // [Auto-translated] "Zoom Out"
    zoomOutTooltip: "Zoom indietro",
    // [Auto-translated] "Lock expand/collapse state for questions"
    lockQuestionsTooltip: "Blocca lo stato di espansione/compressione per le domande",
    // [Auto-translated] "Show more"
    showMoreChoices: "Mostra di più",
    // [Auto-translated] "Show less"
    showLessChoices: "Mostra meno",
    // "Copy"
    copy: "Copia",
    // "Cut"
    cut: "Taglia",
    // "Paste"
    paste: "Incolla",
    // "Copy selection to clipboard"
    copyTooltip: "Copia la selezione negli appunti",
    // "Cut selection to clipboard"
    cutTooltip: "Taglia la selezione negli appunti",
    // "Paste from clipboard"
    pasteTooltip: "Incolla dagli appunti",
    // "Options"
    options: "Opzioni",
    // "Generate Valid JSON"
    generateValidJSON: "Genera JSON Valido",
    // "Generate Readable JSON"
    generateReadableJSON: "Genera JSON Leggibile",
    // "Toolbox"
    toolbox: "Toolbox",
    // "Properties"
    "property-grid": "Proprietà",
    // [Auto-translated] "Search"
    toolboxSearch: "Ricerca",
    // [Auto-translated] "Type to search..."
    toolboxFilteredTextPlaceholder: "Digita per cercare...",
    // [Auto-translated] "No results found"
    toolboxNoResultsFound: "Nessun risultato trovato",
    // "Type to search..."
    propertyGridFilteredTextPlaceholder: "Digita per cercare...",
    // [Auto-translated] "No results found"
    propertyGridNoResultsFound: "Nessun risultato trovato",
    // [Auto-translated] "Start configuring your form"
    propertyGridPlaceholderTitle: "Inizia a configurare il tuo modulo",
    // [Auto-translated] "Click any category icon to explore survey settings. Additional settings will become available once you add a survey element to the design surface."
    propertyGridPlaceholderDescription: "Fai clic sull'icona di una categoria per esplorare le impostazioni dell'indagine. Dopo l'aggiunta di un elemento di rilievo all'area di progettazione, saranno disponibili impostazioni aggiuntive.",
    // "Please correct JSON."
    correctJSON: "Correggi il tuo JSON",
    // "Survey Results "
    surveyResults: "Risultati del sondaggio: ",
    // "As Table"
    surveyResultsTable: "Come tabella",
    // "As JSON"
    surveyResultsJson: "Come JSON",
    // "Question Title"
    resultsTitle: "Titolo Domanda",
    // "Question Name"
    resultsName: "Nome Domanda",
    // "Answer Value"
    resultsValue: "Valore Risposta",
    // "Display Value"
    resultsDisplayValue: "Mostra Valore",
    // "Modified"
    modified: "Modificato",
    // "Saving"
    saving: "Salvataggio",
    // "Saved"
    saved: "Salvato",
    // "Error"
    propertyEditorError: "Errore:",
    // "Error! Editor content is not saved."
    saveError: "Errore! Il contenuto dell'editor non è salvato.",
    // "Language Settings"
    translationPropertyGridTitle: "Impostazione della traduzione",
    // [Auto-translated] "Theme Settings"
    themePropertyGridTitle: "Impostazioni del tema",
    // [Auto-translated] "Add Language"
    addLanguageTooltip: "Aggiungi lingua",
    // "Languages"
    translationLanguages: "Lingue",
    // [Auto-translated] "Are you certain you wish to delete all strings for this language?"
    translationDeleteLanguage: "Sei sicuro di voler eliminare tutte le stringhe per questa lingua?",
    // "Select language to translate"
    translationAddLanguage: "Seleziona la lingua da tradurre",
    // "All Strings"
    translationShowAllStrings: "Tutte le stringhe",
    // "Used Strings Only"
    translationShowUsedStringsOnly: "Solo le stringhe usate",
    // "All Pages"
    translationShowAllPages: "Tutte le pagine",
    // "No strings to translate. Please change the filter."
    translationNoStrings: "Nessuna stringa da tradurre. Cambia il filtro.",
    // "Export to CSV"
    translationExportToSCVButton: "Esporta in CSV",
    // "Import from CSV"
    translationImportFromSCVButton: "Importa da CSV",
    // [Auto-translated] "Auto-translate All"
    translateUsigAI: "Traduzione automatica di tutto",
    // [Auto-translated] "Translate from: "
    translateUsigAIFrom: "Traduci da: ",
    // [Auto-translated] "Untranslated strings"
    translationDialogTitle: "Stringhe non tradotte",
    // "Merge {0} with default locale"
    translationMergeLocaleWithDefault: "Unisci {0} con il predefinito",
    // "Translation..."
    translationPlaceHolder: "Traduzione...",
    // [Auto-translated] "Source: "
    translationSource: "Fonte: ",
    // [Auto-translated] "Target: "
    translationTarget: "Bersaglio: ",
    // [Auto-translated] "YouTube links are not supported."
    translationYouTubeNotSupported: "I link di YouTube non sono supportati.",
    // [Auto-translated] "Export"
    themeExportButton: "Esportazione",
    // [Auto-translated] "Import"
    themeImportButton: "Importazione",
    // [Auto-translated] "Export"
    surveyJsonExportButton: "Esportazione",
    // [Auto-translated] "Import"
    surveyJsonImportButton: "Importazione",
    // [Auto-translated] "Copy to clipboard"
    surveyJsonCopyButton: "Copia negli Appunti",
    // [Auto-translated] "Reset theme settings to default"
    themeResetButton: "Ripristina le impostazioni del tema predefinite",
    // [Auto-translated] "Do you really want to reset the theme? All your customizations will be lost."
    themeResetConfirmation: "Vuoi davvero resettare il tema? Tutte le tue personalizzazioni andranno perse.",
    // [Auto-translated] "Yes, reset the theme"
    themeResetConfirmationOk: "Sì, reimposta il tema",
    // "Bold"
    bold: "Grassetto",
    // "Italic"
    italic: "Corsivo",
    // "Underline"
    underline: "Sottolineato",
    // "Add Question"
    addNewQuestion: "Aggiungi domanda",
    // "Select page..."
    selectPage: "Seleziona la pagina...",
    // [Auto-translated] "Choices are copied from"
    carryForwardChoicesCopied: "Le scelte vengono copiate da",
    // [Auto-translated] "Choices are loaded from a web service."
    choicesLoadedFromWebText: "Le scelte vengono caricate da un servizio Web.",
    // [Auto-translated] "Go to settings"
    choicesLoadedFromWebLinkText: "Vai alle impostazioni",
    // [Auto-translated] "Preview of loaded choice options"
    choicesLoadedFromWebPreviewTitle: "Anteprima delle opzioni di scelta caricate",
    // "HTML content will be here."
    htmlPlaceHolder: "Il contenuto HTML sarà qui.",
    // "Drop a question from the toolbox here."
    panelPlaceHolder: "Trascina una domanda dalla toolbox qui.",
    // "The survey is empty. Drag an element from the toolbox or click the button below."
    surveyPlaceHolder: "Il sondaggio è vuoto. Trascina un elemento dalla toolbox o clicca sul tasto sottostante.",
    // [Auto-translated] "The page is empty. Drag an element from the toolbox or click the button below."
    pagePlaceHolder: "La pagina è vuota. Trascinare un elemento dalla casella degli strumenti o fare clic sul pulsante sottostante.",
    // [Auto-translated] "Drag and drop an image here or click the button below and choose an image to upload"
    imagePlaceHolder: "Trascina e rilascia un'immagine qui o fai clic sul pulsante qui sotto e scegli un'immagine da caricare",
    // "Click the \"Add Question\" button below to start creating your form."
    surveyPlaceHolderMobile: "Fai clic sul pulsante \"Aggiungi domanda\" qui sotto per iniziare a creare il tuo modulo.",
    // [Auto-translated] "Your form is empty"
    surveyPlaceholderTitle: "Il modulo è vuoto",
    // [Auto-translated] "Your form is empty"
    surveyPlaceholderTitleMobile: "Il modulo è vuoto",
    // [Auto-translated] "Drag an element from the toolbox or click the button below."
    surveyPlaceholderDescription: "Trascina un elemento dalla casella degli strumenti o fai clic sul pulsante sottostante.",
    // [Auto-translated] "Drag an element from the toolbox or click the button below."
    surveyPlaceholderDescriptionMobile: "Trascina un elemento dalla casella degli strumenti o fai clic sul pulsante sottostante.",
    // [Auto-translated] "No preview"
    previewPlaceholderTitle: "Nessuna anteprima",
    // [Auto-translated] "No preview"
    previewPlaceholderTitleMobile: "Nessuna anteprima",
    // [Auto-translated] "The survey doesn't contain any visible elements."
    previewPlaceholderDescription: "Il sondaggio non contiene elementi visibili.",
    // [Auto-translated] "The survey doesn't contain any visible elements."
    previewPlaceholderDescriptionMobile: "Il sondaggio non contiene elementi visibili.",
    // [Auto-translated] "No strings to translate"
    translationsPlaceholderTitle: "Nessun vincolo da tradurre",
    // [Auto-translated] "No strings to translate"
    translationsPlaceholderTitleMobile: "Nessun vincolo da tradurre",
    // [Auto-translated] "Add elements to your form or change the strings filter in the toolbar."
    translationsPlaceholderDescription: "Aggiungi elementi al modulo o modifica il filtro delle stringhe nella barra degli strumenti.",
    // [Auto-translated] "Add elements to your form or change the strings filter in the toolbar."
    translationsPlaceholderDescriptionMobile: "Aggiungi elementi al modulo o modifica il filtro delle stringhe nella barra degli strumenti.",
    // "Click the \"Add Question\" button below to add a new element to the page."
    pagePlaceHolderMobile: "Fai clic sul pulsante \"Aggiungi domanda\" in basso per aggiungere un nuovo elemento alla pagina.",
    // "Click the \"Add Question\" button below to add a new element to the panel."
    panelPlaceHolderMobile: "Fai clic sul pulsante \"Aggiungi domanda\" in basso per aggiungere un nuovo elemento al pannello.",
    // [Auto-translated] "Click the button below and choose an image to upload"
    imagePlaceHolderMobile: "Clicca sul pulsante qui sotto e scegli un'immagine da caricare",
    // [Auto-translated] "Choose Image"
    imageChooseImage: "Scegli immagine",
    // "Add {0}"
    addNewTypeQuestion: "Aggiungi {0}", // {0} is localizable question type
    // "[LOGO]"
    chooseLogoPlaceholder: "[LOGO]",
    // [Auto-translated] "Item "
    choices_Item: "Articolo ",
    // [Auto-translated] "Select a file"
    selectFile: "Seleziona un file",
    // [Auto-translated] "Remove the file"
    removeFile: "Rimuovere il file",
    lg: {
      // "Add New Rule"
      addNewItem: "Aggiungi Nuova Regola",
      // "Create a rule to customize the flow of the survey."
      empty_tab: "Crea una regola per personalizzare il percorso del sondaggio.",
      // [Auto-translated] "No logical rules"
      logicPlaceholderTitle: "Nessuna regola logica",
      // [Auto-translated] "No logical rules"
      logicPlaceholderTitleMobile: "Nessuna regola logica",
      // [Auto-translated] "Create a rule to customize the flow of the survey."
      logicPlaceholderDescription: "Crea una regola per personalizzare il flusso del sondaggio.",
      // [Auto-translated] "Create a rule to customize the flow of the survey."
      logicPlaceholderDescriptionMobile: "Crea una regola per personalizzare il flusso del sondaggio.",
      // "Show/hide page"
      page_visibilityName: "Mostra (nascondi) pagina",
      // "Enable/disable page"
      page_enableName: "Abilita (disabilita) pagina",
      // [Auto-translated] "Make page required"
      page_requireName: "Rendi la pagina obbligatoria",
      // "Show/hide panel"
      panel_visibilityName: "Mostra (nascondi) pannello",
      // "Enable/disable panel"
      panel_enableName: "Abilita (disabilita) pannello",
      // [Auto-translated] "Make panel required"
      panel_requireName: "Rendi il pannello richiesto",
      // "Show/hide question"
      question_visibilityName: "Mostra (nascondi) domanda",
      // "Enable/disable question"
      question_enableName: "Abilita (disabilita) domanda",
      // "Make question required"
      question_requireName: "Rendi la domanda obbligatoria",
      // [Auto-translated] "Reset question value"
      question_resetValueName: "Reimpostare il valore della domanda",
      // [Auto-translated] "Set question value"
      question_setValueName: "Impostare il valore della domanda",
      // "Show/hide column"
      column_visibilityName: "Mostra (nascondi) colonna",
      // "Enable/disable column"
      column_enableName: "Abilita (disabilita) colonna",
      // "Make column required"
      column_requireName: "Rendi la colonna obbligatoria",
      // [Auto-translated] "Reset column value"
      column_resetValueName: "Reimposta valore colonna",
      // [Auto-translated] "Set column value"
      column_setValueName: "Impostare il valore della colonna",
      // "Complete survey"
      trigger_completeName: "Completa sondaggio",
      // "Set answer"
      trigger_setvalueName: "Imposta la risposta",
      // "Copy answer"
      trigger_copyvalueName: "Copia la risposta",
      // "Skip to question"
      trigger_skipName: "Passa alla domanda",
      // "Run expression"
      trigger_runExpressionName: "Esegui l'espressione",
      // "Set \"Thank You\" page markup"
      completedHtmlOnConditionName: "Imposta il markup della pagina \"sondaggio Completo\"",
      // "Make the page visible when the logical expression evaluates to true. Otherwise, keep the page invisible."
      page_visibilityDescription: "Rendi la pagina visibile quando l'espressione logica restituisce vero. Altrimenti, mantienila invisibile.",
      // "Make the page visible when the logical expression evaluates to true. Otherwise, keep the panel invisible."
      panel_visibilityDescription: "Rendi il pannello visibile quando l'espressione logica restituisce vero. Altrimenti, mantienilo invisibile.",
      // "Make the panel and all elements inside it enabled when the logical expression evaluates to true. Otherwise, keep them disabled."
      panel_enableDescription: "Rendi il pannello e tutti gli elementi al suo interno abilitati quando l'espressione logica restituisce vero. Altrimenti, mantienili disabilitati.",
      // "Make the question visible when the logical expression evaluates to true. Otherwise, keep the question invisible."
      question_visibilityDescription: "Rendi visibile la domanda quando l'espressione logica restituisce vero. Altrimenti, mantienila invisibile.",
      // "Make the question enabled when the logical expression evaluates to true. Otherwise, keep the question disabled."
      question_enableDescription: "Rendi la domanda abilitata quando l'espressione logica restituisce vero. Altrimenti, mantienila disabilitata.",
      // "Question becomes required when the logical expression evaluates to true."
      question_requireDescription: "La domanda diventa obbligatoria quando l'espressione logica restituisce vero.",
      // "When the logical expression evaluates to true, the survey ends, and the respondent sees the \"Thank you\" page."
      trigger_completeDescription: "Quando l'espressione logica restituisce vero, il sondaggio diventa completo e l'utente finale vede la 'Pagina di ringraziamento'.",
      // "When question values used in the logical expression are changed, and the expression evaluates to true, the specified value is assigned to the selected question."
      trigger_setvalueDescription: "Quando i valori della domanda, utilizzati nell'espressione logica, vengono modificati e l'espressione logica restituisce vero, il valore viene impostato sulla domanda selezionata.",
      // "When question values used in the logical expression are changed, and the expression evaluates to true, the value of the selected question is copied to another question."
      trigger_copyvalueDescription: "Quando i valori della domanda, utilizzata nell'espressione logica, vengono modificati e l'espressione logica restituisce vero, il valore di una domanda selezionata viene copiato in un'altra domanda selezionata.",
      // "When the logical expression evaluates to true, the survey focuses/jumps to the selected question."
      trigger_skipDescription: "Quando l'espressione logica restituisce vero, il sondaggio passa / si focalizza sulla domanda selezionata.",
      // "When the logical expression evaluates to true, the survey evaluates another expression. Optionally, the result of the latter expression can be assigned as a value to the selected question"
      trigger_runExpressionDescription: "Quando l'espressione logica restituisce vero, viene eseguita l'espressione personalizzata. È possibile impostare il risultato dell'espressione nella domanda selezionata.",
      // "If the logical expression evaluates to true, the \"Thank You\" page displays the specified content."
      completedHtmlOnConditionDescription: "Se l'espressione logica restituisce vero, il testo di default per la 'Pagina di ringraziamento' viene modificato in quello indicato.",
      // "When expression: '{0}' returns true"
      itemExpressionText: "Quando l'espressione: '{0}' restituisce vero:", // {0} - the expression
      // "New rule"
      itemEmptyExpressionText: "Nuova regola",
      // "make page {0} visible"
      page_visibilityText: "rendi la pagina {0} visibile", // {0} page name
      // "make panel {0} visible"
      panel_visibilityText: "rendi il pannello {0} visibile", // {0} panel name
      // "make panel {0} enable"
      panel_enableText: "rendi il pannello {0} abilitato", // {0} panel name
      // "make question {0} visible"
      question_visibilityText: "rendi la domanda {0} visibile", // {0} question name
      // "make question {0} enable"
      question_enableText: "rendi la domanda {0} abilitata", // {0} question name
      // "make question {0} required"
      question_requireText: "rendi la domanda {0} obbligatoria", // {0} question name
      // [Auto-translated] "reset value for question: {0}"
      question_resetValueText: "Valore di ripristino per la domanda: {0}", // {0} question name.
      // [Auto-translated] "assign value: {1} to question: {0}"
      question_setValueText: "Assegna valore: {1} alla domanda: {0}", // {0} question name and {1} setValueExpression
      // "make column {0} of question {1} visible"
      column_visibilityText: "rendi la colonna {0} della domanda {1} visibile", // {0} column name, {1} question name
      // "make column {0} of question {1} enable"
      column_enableText: "rendi la colonna {0} della domanda {1} abilitata", // {0} column name, {1} question name
      // "make column {0} of question {1} required"
      column_requireText: "rendi la colonna {0} della domanda {1} obbligatoria", // {0} column name, {1} question name
      // [Auto-translated] "reset cell value for column: {0}"
      column_resetValueText: "Reimposta il valore della cella per la colonna: {0}", // {0} column name
      // [Auto-translated] "assign cell value: {1} to column: {0}"
      column_setValueText: "Assegna valore cella: {1} alla colonna: {0}", // {0} column name and {1} setValueExpression
      // [Auto-translated] "An expression whose result will be assigned to the target question."
      setValueExpressionPlaceholder: "Un'espressione il cui risultato verrà assegnato alla domanda di destinazione.",
      // "survey becomes completed"
      trigger_completeText: "il sondaggio viene completato",
      // "set into question: {0} value {1}"
      trigger_setvalueText: "imposta nella domanda: {0} valore {1}", // {0} question name, {1} setValue
      // [Auto-translated] "clear question value: {0}"
      trigger_setvalueEmptyText: "Valore chiaro della domanda: {0}", // {0} question name
      // "copy into question: {0} value from question {1}"
      trigger_copyvalueText: "copia nella domanda: {0} valore dalla domanda {1}", // {0} and {1} question names
      // "survey skip to the question {0}"
      trigger_skipText: "sondaggio passa alla domanda {0}", // {0} question name
      // "run expression: '{0}'"
      trigger_runExpressionText1: "esegui l'espressione: '{0}'", // {0} the expression
      // " and set its result into question: {0}"
      trigger_runExpressionText2: " e imposta il risultato nella domanda: {0}", // {0} question name
      // "show custom text for the \"Thank You\" page."
      completedHtmlOnConditionText: "mostra il testo personalizzato per la 'Pagina di ringraziamento'.",
      // "All Questions"
      showAllQuestions: "Tutte le Domande",
      // "All Action Types"
      showAllActionTypes: "Tutti i Tipi di Azione",
      // "Condition(s)"
      conditions: "Condizione(i)",
      // "Action(s)"
      actions: "Azione(i)",
      // "Define condition(s)"
      expressionEditorTitle: "Definisci condizione(i)",
      // "Define action(s)"
      actionsEditorTitle: "Definisci azione(i)",
      // "Delete Action"
      deleteAction: "Cancella Azione",
      // "Add Action"
      addNewAction: "Aggiungi Azione",
      // "Select action..."
      selectedActionCaption: "Seleziona azione...",
      // "The logic expression is empty or invalid. Please correct it."
      expressionInvalid: "L'espressione logica è vuota o invalida. Correggila.",
      // "Please add at least one action."
      noActionError: "Aggiungi almeno un'azione.",
      // "Please fix issues in your action(s)."
      actionInvalid: "Risolvi i problemi nell'azione(i)",
      // [Auto-translated] "Logical rules are incomplete"
      uncompletedRule_title: "Le regole logiche sono incomplete",
      // [Auto-translated] "You have not completed some of the logical rules. If you leave the tab now, the changes will be lost. Do you still want to leave the tab without completing the changes?"
      uncompletedRule_text: "Alcune regole logiche non sono state completate. Se lasci la scheda ora, le modifiche andranno perse. Vuoi comunque uscire dalla scheda senza completare le modifiche?",
      // [Auto-translated] "Yes"
      uncompletedRule_apply: "Sì",
      // [Auto-translated] "No, I want to complete the rules"
      uncompletedRule_cancel: "No, voglio completare le regole"
    }
  },
  // Property Editors
  pe: {
    panel: {
      // [Auto-translated] "Panel name"
      name: "Nome del pannello",
      // [Auto-translated] "Panel title"
      title: "Titolo del panel",
      // [Auto-translated] "Panel description"
      description: "Descrizione del pannello",
      // [Auto-translated] "Make the panel visible if"
      visibleIf: "Rendi visibile il pannello se",
      // [Auto-translated] "Make the panel required if"
      requiredIf: "Rendere il pannello richiesto se",
      // [Auto-translated] "Question order within the panel"
      questionOrder: "Ordine delle domande all'interno del panel",
      // [Auto-translated] "Move the panel to page"
      page: "Spostare il pannello nella pagina",
      // [Auto-translated] "Display the panel on a new line"
      startWithNewLine: "Visualizzare il pannello su una nuova riga",
      // [Auto-translated] "Panel collapse state"
      state: "Stato di compressione del pannello",
      // [Auto-translated] "Inline panel width"
      width: "Larghezza del pannello in linea",
      // [Auto-translated] "Minimum panel width"
      minWidth: "Larghezza minima del pannello",
      // [Auto-translated] "Maximum panel width"
      maxWidth: "Larghezza massima del pannello",
      // [Auto-translated] "Number this panel"
      showNumber: "Numera questo pannello"
    },
    panellayoutcolumn: {
      // [Auto-translated] "Effective width, %"
      effectiveWidth: "Larghezza effettiva, %",
      // [Auto-translated] "Question title width, px"
      questionTitleWidth: "Larghezza del titolo della domanda, px"
    },
    paneldynamic: {
      // [Auto-translated] "Panel name"
      name: "Nome del pannello",
      // [Auto-translated] "Panel title"
      title: "Titolo del panel",
      // [Auto-translated] "Panel description"
      description: "Descrizione del pannello",
      // [Auto-translated] "Entry display mode"
      displayMode: "Modalità di visualizzazione delle voci",
      // [Auto-translated] "Make the panel visible if"
      visibleIf: "Rendi visibile il pannello se",
      // [Auto-translated] "Make the panel required if"
      requiredIf: "Rendere il pannello richiesto se",
      // [Auto-translated] "Move the panel to page"
      page: "Sposta il pannello nella pagina",
      // [Auto-translated] "Display the panel on a new line"
      startWithNewLine: "Visualizzare il pannello su una nuova riga",
      // [Auto-translated] "Panel collapse state"
      state: "Stato di compressione del pannello",
      // [Auto-translated] "Inline panel width"
      width: "Larghezza del pannello in linea",
      // [Auto-translated] "Minimum panel width"
      minWidth: "Larghezza minima del pannello",
      // [Auto-translated] "Maximum panel width"
      maxWidth: "Larghezza massima del pannello",
      // [Auto-translated] "Confirm entry removal"
      confirmDelete: "Confermare la rimozione della voce",
      // [Auto-translated] "Entry description pattern"
      templateDescription: "Modello di descrizione della voce",
      // [Auto-translated] "Entry title pattern"
      templateTitle: "Modello del titolo della voce",
      // [Auto-translated] "Empty panel text"
      noEntriesText: "Testo del pannello vuoto",
      // [Auto-translated] "Tab title pattern"
      templateTabTitle: "Modello del titolo della tabulazione",
      // [Auto-translated] "Tab title placeholder"
      tabTitlePlaceholder: "Segnaposto titolo tabulazione",
      // [Auto-translated] "Make an individual entry visible if"
      templateVisibleIf: "Rendere visibile una singola voce se",
      // [Auto-translated] "Number the panel"
      showNumber: "Numerare il pannello",
      // [Auto-translated] "Panel title alignment"
      titleLocation: "Allineamento del titolo del pannello",
      // [Auto-translated] "Panel description alignment"
      descriptionLocation: "Allineamento della descrizione del pannello",
      // [Auto-translated] "Question title alignment"
      templateQuestionTitleLocation: "Allineamento del titolo della domanda",
      // [Auto-translated] "Question title width"
      templateQuestionTitleWidth: "Larghezza del titolo della domanda",
      // [Auto-translated] "Error message alignment"
      templateErrorLocation: "Allineamento dei messaggi di errore",
      // [Auto-translated] "New entry location"
      newPanelPosition: "Nuova posizione di ingresso",
      // [Auto-translated] "Show the progress bar"
      showRangeInProgress: "Visualizzare la barra di avanzamento",
      // [Auto-translated] "Prevent duplicate responses in the following question"
      keyName: "Impedisci risposte duplicate nella seguente domanda"
    },
    question: {
      // [Auto-translated] "Question name"
      name: "Nome della domanda",
      // [Auto-translated] "Question title"
      title: "Titolo della domanda",
      // [Auto-translated] "Question description"
      description: "Descrizione della domanda",
      // [Auto-translated] "Show the title and description"
      showTitle: "Mostra il titolo e la descrizione",
      // [Auto-translated] "Make the question visible if"
      visibleIf: "Rendi visibile la domanda se",
      // [Auto-translated] "Make the question required if"
      requiredIf: "Rendi la domanda richiesta se",
      // [Auto-translated] "Move the question to page"
      page: "Sposta la domanda nella pagina",
      // [Auto-translated] "Question box collapse state"
      state: "Stato di compressione della casella delle domande",
      // [Auto-translated] "Number this question"
      showNumber: "Numera questa domanda",
      // [Auto-translated] "Question title alignment"
      titleLocation: "Allineamento del titolo della domanda",
      // [Auto-translated] "Question description alignment"
      descriptionLocation: "Allineamento della descrizione della domanda",
      // [Auto-translated] "Error message alignment"
      errorLocation: "Allineamento dei messaggi di errore",
      // [Auto-translated] "Increase the inner indent"
      indent: "Aumentare il rientro interno",
      // [Auto-translated] "Inline question width"
      width: "Larghezza della domanda in linea",
      // [Auto-translated] "Minimum question width"
      minWidth: "Larghezza minima della domanda",
      // [Auto-translated] "Maximum question width"
      maxWidth: "Larghezza massima della domanda",
      // [Auto-translated] "Update input field value"
      textUpdateMode: "Aggiorna il valore del campo di input"
    },
    signaturepad: {
      // [Auto-translated] "Signature area width"
      signatureWidth: "Larghezza dell'area della firma",
      // [Auto-translated] "Signature area height"
      signatureHeight: "Altezza dell'area distintiva",
      // [Auto-translated] "Auto-scale the signature area"
      signatureAutoScaleEnabled: "Ridimensionamento automatico dell'area della firma",
      // [Auto-translated] "Show a placeholder within signature area"
      showPlaceholder: "Mostra un segnaposto all'interno dell'area della firma",
      // [Auto-translated] "Placeholder text"
      placeholder: "Testo segnaposto",
      // [Auto-translated] "Placeholder text in read-only or preview mode"
      placeholderReadOnly: "Testo segnaposto in modalità di sola lettura o anteprima",
      // [Auto-translated] "Show the Clear button within signature area"
      allowClear: "Mostra il pulsante Cancella all'interno dell'area della firma",
      // [Auto-translated] "Minimum stroke width"
      penMinWidth: "Larghezza minima del tratto",
      // [Auto-translated] "Maximum stroke width"
      penMaxWidth: "Larghezza massima della corsa",
      // [Auto-translated] "Stroke color"
      penColor: "Colore del tratto"
    },
    comment: {
      // [Auto-translated] "Input field height (in lines)"
      rows: "Altezza del campo di immissione (in righe)"
    },
    // "Question numbering"
    showQuestionNumbers: "Visualizza il numero delle domande",
    // "Question indexing type"
    questionStartIndex: "La domanda inizia con l'indice (1, 2 oppure 'A', 'a')",
    expression: {
      // [Auto-translated] "Expression name"
      name: "Nome dell'espressione",
      // [Auto-translated] "Expression title"
      title: "Titolo dell'espressione",
      // [Auto-translated] "Expression description"
      description: "Descrizione dell'espressione",
      // [Auto-translated] "Expression"
      expression: "Espressione"
    },
    trigger: {
      // [Auto-translated] "Expression"
      expression: "Espressione"
    },
    calculatedvalue: {
      // [Auto-translated] "Expression"
      expression: "Espressione"
    },
    // survey templates
    survey: {
      // [Auto-translated] "Survey title"
      title: "Titolo del sondaggio",
      // [Auto-translated] "Survey description"
      description: "Descrizione dell'indagine",
      // [Auto-translated] "Make the survey read-only"
      readOnly: "Rendere l'indagine di sola lettura"
    },
    page: {
      // [Auto-translated] "Page name"
      name: "Nome della pagina",
      // [Auto-translated] "Page title"
      title: "Titolo della pagina",
      // [Auto-translated] "Page description"
      description: "Descrizione della pagina",
      // [Auto-translated] "Make the page visible if"
      visibleIf: "Rendi visibile la pagina se",
      // [Auto-translated] "Make the page required if"
      requiredIf: "Rendi la pagina obbligatoria se",
      // [Auto-translated] "Time limit to complete the page"
      timeLimit: "Tempo limite per completare la pagina",
      // [Auto-translated] "Question order on the page"
      questionOrder: "Ordine delle domande nella pagina"
    },
    matrixdropdowncolumn: {
      // [Auto-translated] "Column name"
      name: "Nome della colonna",
      // [Auto-translated] "Column title"
      title: "Titolo della colonna",
      // [Auto-translated] "Prevent duplicate responses"
      isUnique: "Impedisci risposte duplicate",
      // [Auto-translated] "Column width"
      width: "Larghezza colonna",
      // [Auto-translated] "Minimum column width"
      minWidth: "Larghezza minima della colonna",
      // [Auto-translated] "Input field height (in lines)"
      rows: "Altezza del campo di immissione (in righe)",
      // [Auto-translated] "Make the column visible if"
      visibleIf: "Rendi visibile la colonna se",
      // [Auto-translated] "Make the column required if"
      requiredIf: "Rendere obbligatoria la colonna se",
      // [Auto-translated] "Each option in a separate column"
      showInMultipleColumns: "Ogni opzione in una colonna separata"
    },
    matrixcolumn: {
      // [Auto-translated] "Clear others in the same row"
      isExclusive: "Cancella gli altri nella stessa riga"
    },
    multipletextitem: {
      // [Auto-translated] "Name"
      name: "Nome",
      // [Auto-translated] "Title"
      title: "Titolo"
    },
    masksettings: {
      // [Auto-translated] "Save masked value in survey results"
      saveMaskedValue: "Salvare il valore mascherato nei risultati dell'indagine"
    },
    patternmask: {
      // [Auto-translated] "Value pattern"
      pattern: "Modello di valore"
    },
    datetimemask: {
      // [Auto-translated] "Minimum value"
      min: "Valore minimo",
      // [Auto-translated] "Maximum value"
      max: "Valore massimo"
    },
    numericmask: {
      // [Auto-translated] "Allow negative values"
      allowNegativeValues: "Consenti valori negativi",
      // [Auto-translated] "Thousands separator"
      thousandsSeparator: "Separatore delle migliaia",
      // [Auto-translated] "Decimal separator"
      decimalSeparator: "Separatore decimale",
      // [Auto-translated] "Value precision"
      precision: "Precisione del valore",
      // [Auto-translated] "Minimum value"
      min: "Valore minimo",
      // [Auto-translated] "Maximum value"
      max: "Valore massimo"
    },
    currencymask: {
      // [Auto-translated] "Currency prefix"
      prefix: "Prefisso di valuta",
      // [Auto-translated] "Currency suffix"
      suffix: "Suffisso valuta"
    },
    // [Auto-translated] "Clear others when selected"
    isExclusive: "Cancella gli altri quando selezionato",
    // [Auto-translated] "Require user to enter a comment"
    isCommentRequired: "Richiedi all'utente di inserire un commento",
    // "Display area height"
    imageHeight: "Altezza immagine",
    // "Display area width"
    imageWidth: "Larghezza immagine",
    // "Join identifier"
    valueName: "Nome Valore",
    // [Auto-translated] "Default display value for dynamic texts"
    defaultDisplayValue: "Valore di visualizzazione predefinito per i testi dinamici",
    // [Auto-translated] "Label alignment"
    rateDescriptionLocation: "Allineamento delle etichette",
    // [Auto-translated] "Input field width (in characters)"
    size: "Larghezza del campo di input (in caratteri)",
    // [Auto-translated] "Cell error message alignment"
    cellErrorLocation: "Allineamento dei messaggi di errore delle celle",
    // [Auto-translated] "Enabled"
    enabled: "Abilitato",
    // [Auto-translated] "Disabled"
    disabled: "Disabile",
    // [Auto-translated] "Inherit"
    inherit: "Ereditare",
    // "Apply"
    apply: "Applica",
    // "OK"
    ok: "OK",
    // "Save"
    save: "Salva",
    // "Clear"
    clear: "Cancella",
    // "Save"
    saveTooltip: "Salva",
    // "Cancel"
    cancel: "Annulla",
    // "Set"
    set: "Imposta",
    // "Reset"
    reset: "Reimposta",
    // "Change"
    change: "Modifica",
    // "Refresh"
    refresh: "Aggiorna",
    // "Close"
    close: "Chiudi",
    // "Delete"
    delete: "Elimina",
    // "Add"
    add: "Aggiungi",
    // "Add New"
    addNew: "Aggiungi Nuovo",
    // "Click to add an item..."
    addItem: "Clicca per aggiungere un'opzione...",
    // "Click to remove the item..."
    removeItem: "Clicca per rimuovere un'opzione...",
    // "Drag the item"
    dragItem: "Trascina l'opzione",
    // "Other"
    addOther: "Altro",
    // "Select All"
    addSelectAll: "Seleziona Tutti",
    // "None"
    addNone: "Nessuno",
    // "Remove All"
    removeAll: "Elimina tutto",
    // "Edit"
    edit: "Modifica",
    // "Return without saving"
    back: "Torna indietro senza salvare",
    // "Return without saving"
    backTooltip: "Torna indietro senza salvare",
    // "Save and return"
    saveAndBack: "Salva e torna indietro",
    // "Save and return"
    saveAndBackTooltip: "Salva e torna indietro",
    // "Done"
    doneEditing: "Fatto",
    // "Edit Choices"
    editChoices: "Modifica Scelte",
    // "Show Choices"
    showChoices: "Mostra Scelte",
    // "Move"
    move: "Muovi",
    // "<empty>"
    empty: "<empty>",
    // "Value is empty"
    emptyValue: "Il valore è vuoto",
    // "Manual Entry"
    fastEntry: "Inserimento manuale",
    // "Value '{0}' is not unique"
    fastEntryNonUniqueError: "Il valore '{0}' non è univoco",
    // "Please limit the number of items from {0} to {1}"
    fastEntryChoicesCountError: "Limita il numero di opzioni da {0} a {1}",
    // [Auto-translated] "Please enter at least {0} items"
    fastEntryChoicesMinCountError: "Inserisci almeno {0} elementi",
    // [Auto-translated] "Enter the list of choice options and their IDs in the following format:\n\nid|option\n\nA choice option ID is not visible to respondents and can be used in conditional rules."
    fastEntryPlaceholder: "Inserisci l'elenco delle opzioni di scelta e i relativi ID nel seguente formato:\n\nid|opzione\n\nL'ID di un'opzione di scelta non è visibile ai rispondenti e può essere utilizzato nelle regole condizionali.",
    // "Form Entry"
    formEntry: "Inserimento dati",
    // "Test the service"
    testService: "Prova il servizio",
    // "Please select the element"
    itemSelectorEmpty: "Seleziona elemento",
    // "Please select the action"
    conditionActionEmpty: "Seleziona azione",
    // "Select a question..."
    conditionSelectQuestion: "Seleziona domanda...",
    // "Select a page..."
    conditionSelectPage: "Seleziona pagina...",
    // "Select a panel..."
    conditionSelectPanel: "Seleziona pannello...",
    // "Please enter/select the value"
    conditionValueQuestionTitle: "Inserisci/seleziona valore",
    // "Press ctrl+space to get expression completion hint"
    aceEditorHelp: "Premi ctrl+spazio per ottenere un suggerimento sul completamento dell'espressione",
    // "Current row"
    aceEditorRowTitle: "Riga corrente",
    // "Current panel"
    aceEditorPanelTitle: "Pannello Corrente",
    // "For more details please check the documentation"
    showMore: "Per maggiori dettagli, guarda la documentazione",
    // "Available questions"
    assistantTitle: "Domande disponibili:",
    // "There is should be at least one column or row"
    cellsEmptyRowsColumns: "Dovrebbe esserci almeno una colonna o riga",
    // "Review before submit"
    showPreviewBeforeComplete: "Vedi l'anteprima delle risposte prima di inviare il sondaggio",
    // [Auto-translated] "Enabled by a condition"
    overridingPropertyPrefix: "Abilitato da una condizione",
    // [Auto-translated] "Reset"
    resetToDefaultCaption: "Resettare",
    // "Please enter a value"
    propertyIsEmpty: "Per favore, inserisci un valore",
    // "Please enter a unique value"
    propertyIsNoUnique: "Inserisci un valore univoco",
    // "Please enter a unique name"
    propertyNameIsNotUnique: "Inserisci un nome univoco",
    // "Do not use reserved words: \"item\", \"choice\", \"panel\", \"row\"."
    propertyNameIsIncorrect: "Non utilizzare parole riservate: \"articolo\", \"scelta\", \"pannello\", \"riga\".",
    // "You don't have any items yet"
    listIsEmpty: "Aggiungi una nuova opzione",
    // "You don't have any choices yet"
    "listIsEmpty@choices": "Non sono state ancora aggiunte scelte",
    // [Auto-translated] "You don't have any columns yet"
    "listIsEmpty@columns": "Non hai ancora colonne",
    // [Auto-translated] "You don't have layout columns yet"
    "listIsEmpty@gridLayoutColumns": "Non hai ancora colonne di layout",
    // [Auto-translated] "You don't have any rows yet"
    "listIsEmpty@rows": "Non ci sono ancora righe",
    // [Auto-translated] "You don't have any validation rules yet"
    "listIsEmpty@validators": "Non si dispone ancora di regole di convalida",
    // [Auto-translated] "You don't have any custom variables yet"
    "listIsEmpty@calculatedValues": "Non disponi ancora di variabili personalizzate",
    // [Auto-translated] "You don't have any triggers yet"
    "listIsEmpty@triggers": "Non hai ancora alcun trigger",
    // [Auto-translated] "You don't have any links yet"
    "listIsEmpty@navigateToUrlOnCondition": "Non hai ancora nessun link",
    // [Auto-translated] "You don't have any pages yet"
    "listIsEmpty@pages": "Non hai ancora nessuna pagina",
    // "Add new choice"
    "addNew@choices": "Aggiungi una scelta",
    // [Auto-translated] "Add new column"
    "addNew@columns": "Aggiungi nuova colonna",
    // [Auto-translated] "Add new row"
    "addNew@rows": "Aggiungi nuova riga",
    // [Auto-translated] "Add new rule"
    "addNew@validators": "Aggiunta di una nuova regola",
    // [Auto-translated] "Add new variable"
    "addNew@calculatedValues": "Aggiunta di una nuova variabile",
    // [Auto-translated] "Add new trigger"
    "addNew@triggers": "Aggiungere un nuovo trigger",
    // [Auto-translated] "Add new URL"
    "addNew@navigateToUrlOnCondition": "Aggiungi nuovo URL",
    // [Auto-translated] "Add new page"
    "addNew@pages": "Aggiungi nuova pagina",
    // "Expression is empty"
    expressionIsEmpty: "Espressione vuota",
    // "Value"
    value: "Valore",
    // "Text"
    text: "Testo",
    // "Row ID"
    rowid: "ID Riga",
    // "Image or video file URL"
    imageLink: "URL immagine o video",
    // "Edit column: {0}"
    columnEdit: "Modifica colonna: {0}",
    // "Edit item: {0}"
    itemEdit: "Modifica elemento: {0}",
    // "URL"
    url: "URL",
    // "Path to data"
    path: "Percorso",
    choicesbyurl: {
      // [Auto-translated] "Web service URL"
      url: "URL del servizio Web",
      // [Auto-translated] "Get value to store from the following property"
      valueName: "Ottenere valore da memorizzare dalla proprietà seguente"
    },
    // "Get value to display from the following property"
    titleName: "Nome Titolo",
    // "Get file URLs from the following property"
    imageLinkName: "Ottieni gli URL delle immagini dal seguente campo JSON:",
    // "Accept empty response"
    allowEmptyResponse: "Consenti risposta vuota",
    // "Title"
    titlePlaceholder: "Titolo",
    // "Survey Title"
    surveyTitlePlaceholder: "Titolo del sondaggio",
    // "Page {num}"
    pageTitlePlaceholder: "Pagina {num}",
    // [Auto-translated] "Start Page"
    startPageTitlePlaceholder: "Pagina iniziale",
    // "Description"
    descriptionPlaceholder: "Descrizione",
    // "Description"
    surveyDescriptionPlaceholder: "Descrizione",
    // "Description"
    pageDescriptionPlaceholder: "Descrizione",
    // [Auto-translated] "Wrap choices"
    textWrapEnabled: "Scelte di avvolgimento",
    // "Enable the \"Other\" option"
    showOtherItem: "Consenti l'opzione Altro",
    // "Rename the \"Other\" option"
    otherText: "Testo dell'opzione Altro",
    // "Enable the \"None\" option"
    showNoneItem: "Consenti l'opzione Nessuno",
    // [Auto-translated] "Enable the \"Refuse to Answer\" option"
    showRefuseItem: "Abilita l'opzione \"Rifiuta di rispondere\"",
    // [Auto-translated] "Enable the \"Don't Know\" option"
    showDontKnowItem: "Abilita l'opzione \"Non so\"",
    // "Rename the \"None\" option"
    noneText: "Testo dell'opzione Nessuno",
    // "Enable the \"Select All\" option"
    showSelectAllItem: "Consenti l'opzione Seleziona tutti",
    // "Rename the \"Select All\" option"
    selectAllText: "Testo dell'opzione Seleziona tutti",
    // "Minimum value for auto-generated items"
    choicesMin: "Valore minimo per le opzioni generate automaticamente",
    // "Maximum value for auto-generated items"
    choicesMax: "Valore massimo per le opzioni generate automaticamente",
    // "Step value for auto-generated items"
    choicesStep: "Distanza valori opzioni generate automaticamente",
    // "Name"
    name: "Nome",
    // "Title"
    title: "Titolo",
    // "Cell input type"
    cellType: "Tipo di cella",
    // "Column count"
    colCount: "Numero di colonne",
    // "Choice order"
    choicesOrder: "Ordinamento delle scelte",
    // [Auto-translated] "Allow custom choices"
    allowCustomChoices: "Consenti scelte personalizzate",
    // "Visible"
    visible: "Visibile",
    // "Required"
    isRequired: "Obbligatoria",
    // [Auto-translated] "Mark as required"
    markRequired: "Contrassegna come richiesto",
    // [Auto-translated] "Remove the required mark"
    removeRequiredMark: "Rimuovere il segno richiesto",
    // "Require an answer in each row"
    eachRowRequired: "Richiedi risposta per tutte le righe",
    // [Auto-translated] "Prevent duplicate responses in rows"
    eachRowUnique: "Impedisci risposte duplicate nelle righe",
    // "Error message for required questions"
    requiredErrorText: "\"Obbligatoria\" messaggio di errore",
    // "Display the question on a new line"
    startWithNewLine: "Visualizza la domanda su una nuova riga",
    // "Rows"
    rows: "Righe",
    // "Columns"
    cols: "Colonne",
    // "Placeholder text within input field"
    placeholder: "Testo segnaposto",
    // "Show preview area"
    showPreview: "Mostra anteprima",
    // "Store file content in JSON result as text"
    storeDataAsText: "Vedi il contenuto JSON come testo",
    // "Maximum file size (in bytes)"
    maxSize: "Dimensione massima (in bytes)",
    // "Row count"
    rowCount: "Numero delle righe",
    // "Columns layout"
    columnLayout: "Layout delle colonne",
    // "\"Add Row\" button alignment"
    addRowButtonLocation: "Posizione del tasto Aggiungi riga",
    // [Auto-translated] "Transpose rows to columns"
    transposeData: "Trasponi righe in colonne",
    // "\"Add Row\" button text"
    addRowText: "Testo del tasto per aggiungere una nuova riga",
    // "\"Remove Row\" button text"
    removeRowText: "Testo del tasto per eliminare una riga",
    // [Auto-translated] "Input field title pattern"
    singleInputTitleTemplate: "Modello del titolo del campo di input",
    // "Minimum rating value"
    rateMin: "Valore minimo",
    // "Maximum rating value"
    rateMax: "Valore massimo",
    // "Step value"
    rateStep: "Distanza tra i valori",
    // "Minimum value label"
    minRateDescription: "Descrizione del valore minimo",
    // "Maximum value label"
    maxRateDescription: "Descrizione del valore massimo",
    // "Input type"
    inputType: "Tipo di inserimento",
    // "Option placeholder"
    optionsCaption: "Testo segnaposto dell'opzione",
    // "Default Answer"
    defaultValue: "Valore default",
    // "Default texts"
    cellsDefaultRow: "Testi default",
    // "Edit survey settings"
    surveyEditorTitle: "Modifica le impostazioni del sondaggio",
    // "Edit: {0}"
    qEditorTitle: "Modifica domanda: {0}",
    // "Maximum character limit"
    maxLength: "Lunghezza massima (in caratteri)",
    // "Build"
    buildExpression: "Build",
    // "Edit"
    editExpression: "Modifica",
    // [Auto-translated] "and"
    and: "e",
    // [Auto-translated] "or"
    or: "o",
    // "Remove"
    remove: "Elimina",
    // "Add Condition"
    addCondition: "Aggiungi Condizione",
    // [Auto-translated] "Select a question to start configuring conditions."
    emptyLogicPopupMessage: "Selezionare una domanda per iniziare a configurare le condizioni.",
    // "If"
    if: "se",
    // [Auto-translated] "then"
    then: "allora",
    // "Target question"
    setToName: "Domanda mirata",
    // "Question to copy answer from"
    fromName: "Domanda da cui copiare la risposta",
    // "Question to skip to"
    gotoName: "Domanda a cui passare",
    // "Rule is incorrect"
    ruleIsNotSet: "La regola è sbagliata",
    // "Add to the survey results"
    includeIntoResult: "Includi nei risultati del sondaggio",
    // "Make the title and description visible"
    showTitle: "Mostra/nascondi titolo",
    // "Expand/collapse title"
    expandCollapseTitle: "Espandi/comprimi il titolo",
    // "Select a survey language"
    locale: "Lingua Default",
    // "Select device type"
    simulator: "Scegli il dispositivo",
    // "Switch to landscape orientation"
    landscapeOrientation: "Orizzontale",
    // "Switch to portrait orientation"
    portraitOrientation: "Verticale",
    // "Clear hidden question values"
    clearInvisibleValues: "Cancella i valori invisibili",
    // "Limit to one response"
    cookieName: "Nome cookie (per disabilitare esegui il sondaggio due volte in locale)",
    // "Auto-save survey progress on page change"
    partialSendEnabled: "Invia i risultati del sondaggio alla pagina successiva",
    // "Save the \"Other\" option value as a separate property"
    storeOthersAsComment: "Memorizza il valore Altro in campi separati",
    // "Show page titles"
    showPageTitles: "Visualizza titolo e descrizione pagina",
    // "Show page numbers"
    showPageNumbers: "Visualizza numero pagina",
    // "\"Previous Page\" button text"
    pagePrevText: "Testo del tasto Pagina Precedente",
    // "\"Next Page\" button text"
    pageNextText: "Testo del tasto Pagina Successiva",
    // "\"Complete Survey\" button text"
    completeText: "Testo del tasto Completato",
    // "\"Review Answers\" button text"
    previewText: "Testo del tasto Anteprima risposte",
    // "\"Edit Answer\" button text"
    editText: "Testo del tasto Modifica risposta",
    // "\"Start Survey\" button text"
    startSurveyText: "Testo del tasto Inizia sondaggio",
    // "Show navigation buttons"
    showNavigationButtons: "Visualizza tasti di navigazione (navigazione di default)",
    // [Auto-translated] "Navigation buttons alignment"
    navigationButtonsLocation: "Allineamento dei pulsanti di navigazione",
    // "Show the \"Previous Page\" button"
    showPrevButton: "Visualizza tasto Pagina Precedente (l'utente può tornare alla pagina precedente)",
    // "First page is a start page"
    firstPageIsStartPage: "La prima pagina nel sondaggio è la pagina iniziale",
    // "Show the \"Thank You\" page"
    showCompletePage: "Mostra la pagina sondaggio Completo",
    // "Auto-advance to the next page"
    autoAdvanceEnabled: "Rispondendo a tutte le domande, vai alla pagina successiva in automatico",
    // [Auto-translated] "Complete the survey automatically"
    autoAdvanceAllowComplete: "Completa automaticamente il sondaggio",
    // "Show the progress bar"
    showProgressBar: "Visualizza barra di avanzamento",
    // [Auto-translated] "Progress bar alignment"
    progressBarLocation: "Allineamento della barra di avanzamento",
    // "Question title alignment"
    questionTitleLocation: "Posizione del titolo della domanda",
    // "Question title width"
    questionTitleWidth: "Larghezza del titolo della domanda",
    // "Required symbol(s)"
    requiredMark: "Simbolo domanda obbligatoria, ad esempio (*)",
    // "Question title template, default is: '{no}. {require} {title}'"
    questionTitleTemplate: "Template titolo della domanda, il default è: '{no}. {require} {title}'",
    // "Error message alignment"
    questionErrorLocation: "Posizione del messaggio di errore",
    // "Focus first question on a new page"
    autoFocusFirstQuestion: "Al cambio pagina, posiziona il cursore sulla prima domanda",
    // "Question order"
    questionOrder: "Ordine delle domande sulla pagina",
    // "Time limit to complete the survey"
    timeLimit: "Tempo massimo per terminare il sondaggio",
    // "Time limit to complete one page"
    timeLimitPerPage: "Tempo massimo per terminare una pagina del sondaggio",
    // [Auto-translated] "Use a timer"
    showTimer: "Usa un timer",
    // "Timer alignment"
    timerLocation: "Visualizzazione pannello timer",
    // "Timer mode"
    timerInfoMode: "Modalità visualizzazione pannello timer",
    // "Panel display mode"
    renderMode: "Modalità di visualizzazione",
    // "Enable entry addition"
    allowAddPanel: "Consenti l'aggiunta di un pannello",
    // "Enable entry removal"
    allowRemovePanel: "Consenti la rimozione di un pannello",
    // "\"Add Entry\" button text"
    addPanelText: "Testo del tasto Aggiungi pannello",
    // "\"Remove Entry\" button text"
    removePanelText: "Testo del tasto Rimuovi pannello",
    // "Show all elements on one page"
    isSinglePage: "Visualizza tutti gli elementi su una pagina",
    // "HTML markup"
    html: "Markup HTML",
    // "Answer"
    setValue: "Rispondi",
    // "Storage format"
    dataFormat: "Formato immagine",
    // "Enable row addition"
    allowAddRows: "Permetti di aggiungere righe",
    // "Enable row removal"
    allowRemoveRows: "Permetti di eliminare righe",
    // "Enable row reordering"
    allowRowReorder: "Consenti il trascinamento delle righe",
    // "Does not apply if you specify the exact display area width or height."
    responsiveImageSizeHelp: "Non si applica se si specifica l'esatta larghezza o altezza dell'immagine.",
    // "Minimum display area width"
    minImageWidth: "Larghezza minima dell'immagine",
    // "Maximum display area width"
    maxImageWidth: "Larghezza massima dell'immagine",
    // "Minimum display area height"
    minImageHeight: "Altezza minima dell'immagine",
    // "Maximum display area height"
    maxImageHeight: "Altezza massima dell'immagine",
    // "Minimum value"
    minValue: "Valore minimo",
    // "Maximum value"
    maxValue: "Valore massimo",
    // [Auto-translated] "Case insensitive"
    caseInsensitive: "Senza distinzione tra maiuscole e minuscole",
    // "Minimum length (in characters)"
    minLength: "Lunghezza minima (in caratteri)",
    // "Allow digits"
    allowDigits: "Ammetti le cifre",
    // "Minimum count"
    minCount: "Numero minimo",
    // "Maximum count"
    maxCount: "Numero massimo",
    // "Regular expression"
    regex: "Espressione regolare",
    surveyvalidator: {
      // [Auto-translated] "Validation message"
      text: "Messaggio di convalida",
      // [Auto-translated] "Validation expression"
      expression: "Espressione di convalida",
      // [Auto-translated] "Notification type"
      notificationType: "Tipo di notifica",
      // [Auto-translated] "Maximum length (in characters)"
      maxLength: "Lunghezza massima (in caratteri)"
    },
    // "Total row header"
    totalText: "Testo della riga Totale",
    // "Aggregation method"
    totalType: "Tipo Totale",
    // "Total value expression"
    totalExpression: "Espressione Totale",
    // "Total value display format"
    totalDisplayStyle: "Stile di visualizzazione del valore Totale",
    // "Currency"
    totalCurrency: "Valuta",
    // "Formatted string"
    totalFormat: "Stringa formattata",
    // "Survey logo"
    logo: "Logo (URL o stringa codificata in base64)",
    // "Survey layout"
    questionsOnPageMode: "Struttura sondaggio",
    // "Restrict answer length"
    maxTextLength: "Lunghezza massima della risposta (in caratteri)",
    // "Restrict comment length"
    maxCommentLength: "Lunghezza massima del commento (in caratteri)",
    // [Auto-translated] "Comment area height (in lines)"
    commentAreaRows: "Altezza dell'area di commento (in righe)",
    // "Auto-expand text areas"
    autoGrowComment: "Espansione automatica dell'area dei commenti, se necessaria",
    // [Auto-translated] "Allow users to resize text areas"
    allowResizeComment: "Consenti agli utenti di ridimensionare le aree di testo",
    // "Update input field values"
    textUpdateMode: "Aggiornare il valore del testo della domanda",
    // [Auto-translated] "Input mask type"
    maskType: "Tipo di maschera di input",
    // "Set focus on the first invalid answer"
    autoFocusFirstError: "Imposta il focus sulla prima risposta invalida",
    // "Run validation"
    checkErrorsMode: "Esegui la convalida",
    // [Auto-translated] "Validate empty fields on lost focus"
    validateVisitedEmptyFields: "Convalida i campi vuoti in caso di perdita dello stato attivo",
    // "Redirect to an external link after submission"
    navigateToUrl: "Naviga fino all'URL",
    // "Dynamic external link"
    navigateToUrlOnCondition: "URL Dinamico",
    // "Markup to show if the user already filled out this survey"
    completedBeforeHtml: "Markup da mostrare se l'utente ha già compilato questo sondaggio",
    // "\"Thank You\" page markup"
    completedHtml: "Markup della pagina sondaggio Completo",
    // "Dynamic \"Thank You\" page markup"
    completedHtmlOnCondition: "Markup dinamico della pagina sondaggio Completo",
    // "Markup to show while survey model is loading"
    loadingHtml: "Markup da mostrare durante il caricamento del modello del sondaggio",
    // "Comment area text"
    commentText: "Titolo dell'Area commento",
    // "Autocomplete type"
    autocomplete: "Tipo di completamento automatico",
    // "Label for \"True\""
    labelTrue: "Etichetta \"Vero\"",
    // "Label for \"False\""
    labelFalse: "Etichetta \"Falso\"",
    // "Show the Clear button"
    allowClear: "Mostra il tasto Cancella",
    // [Auto-translated] "Search Mode"
    searchMode: "Modalità di ricerca",
    // "Display format"
    displayStyle: "Stile di visualizzazione del valore",
    // "Formatted string"
    format: "Stringa formattata",
    // "Maximum fractional digits"
    maximumFractionDigits: "Numero massimo di cifre frazionarie",
    // "Minimum fractional digits"
    minimumFractionDigits: "Numero minimo di cifre frazionarie",
    // "Display grouping separators"
    useGrouping: "Mostra i separatori di raggruppamento",
    // "Enable multiple file upload"
    allowMultiple: "Consenti più file",
    // "Preview uploaded images"
    allowImagesPreview: "Anteprima immagini",
    // "Accepted file types"
    acceptedTypes: "Tipi di file accettati",
    // "Wait for upload to complete"
    waitForUpload: "Attendi il completamento del caricamento",
    // "Confirm file deletion"
    needConfirmRemoveFile: "Conferma l'eliminazione del file",
    // "Row details alignment"
    detailPanelMode: "Posizione del pannello di dettaglio",
    // "Minimum row count"
    minRowCount: "Numero minimo di righe",
    // "Maximum row count"
    maxRowCount: "Numero massimo di righe",
    // "Confirm row removal"
    confirmDelete: "Conferma eliminazione della riga",
    // "Confirmation message"
    confirmDeleteText: "Testo del messaggio di conferma",
    // "Initial number of entries"
    panelCount: "Numero iniziale di pannelli",
    // "Minimum number of entries"
    minPanelCount: "Numero minimo di pannelli",
    // "Maximum number of entries"
    maxPanelCount: "Numero massimo di pannelli",
    // "Initial entry state"
    panelsState: "Stato di espansione del pannello interno",
    // "\"Previous Entry\" button text"
    prevPanelText: "Testo del tasto Pannello Precedente",
    // "\"Next Entry\" button text"
    nextPanelText: "Testo del tasto Pannello Successivo",
    // "\"Remove Entry\" button alignment"
    removePanelButtonLocation: "Posizione del tasto Rimozione Pannello",
    // "Hide the question if it has no rows"
    hideIfRowsEmpty: "Nascondi la domanda se non ci sono righe",
    // "Hide columns if there are no rows"
    hideColumnsIfEmpty: "Nascondi le colonne se non ci sono righe",
    // "Custom rating values"
    rateValues: "Valori personalizzati",
    // [Auto-translated] "Rating count"
    rateCount: "Conteggio valutazioni",
    // [Auto-translated] "Rating configuration"
    autoGenerate: "Configurazione della classificazione",
    slider: {
      // [Auto-translated] "Min value"
      min: "Valore minimo",
      // [Auto-translated] "Max value"
      max: "Valore massimo",
      // [Auto-translated] "Step value"
      step: "Valore del passo",
      // [Auto-translated] "Show scale labels"
      showLabels: "Mostra le etichette della scala",
      // [Auto-translated] "Show tooltips"
      tooltipVisibility: "Mostra descrizioni comandi",
      // [Auto-translated] "Allow thumb crossing"
      allowSwap: "Consenti l'incrocio del pollice",
      // [Auto-translated] "Number of auto-generated labels"
      labelCount: "Numero di etichette generate automaticamente",
      // [Auto-translated] "Min value expression"
      minValueExpression: "Espressione del valore minimo",
      // [Auto-translated] "Max value expression"
      maxValueExpression: "Espressione del valore massimo",
      // [Auto-translated] "Scale labels configuration"
      autoGenerate: "Configurazione delle etichette della bilancia",
      // [Auto-translated] "Slider type"
      sliderType: "Tipo di cursore",
      // [Auto-translated] "Min range length"
      minRangeLength: "Lunghezza minima dell'intervallo",
      // [Auto-translated] "Max range length"
      maxRangeLength: "Lunghezza massima della portata",
      // [Auto-translated] "Custom labels"
      customLabels: "Etichette personalizzate",
      // [Auto-translated] "Label format"
      labelFormat: "Formato etichetta",
      // [Auto-translated] "Tooltip format"
      tooltipFormat: "Formato della descrizione comando"
    },
    file: {
      // [Auto-translated] "Image height"
      imageHeight: "Altezza dell'immagine",
      // [Auto-translated] "Image width"
      imageWidth: "Larghezza dell'immagine"
    },
    // "Hide the question if it has no choices"
    hideIfChoicesEmpty: "Nascondi la domanda se non ci sono scelte",
    // "Minimum width"
    minWidth: "Larghezza minima (in valori accettati da CSS)",
    // "Maximum width"
    maxWidth: "Larghezza massima (in valori accettati da CSS)",
    // "Width"
    width: "Larghezza (in valori accettati da CSS)",
    // "Show column headers"
    showHeader: "Mostra intestazioni colonna",
    // "Show horizontal scrollbar"
    horizontalScroll: "Mostra la barra di scorrimento orizzontale",
    // "Minimum column width"
    columnMinWidth: "Larghezza minima della colonna (in valori accettati da CSS)",
    // "Row header width"
    rowTitleWidth: "Larghezza dell'intestazione della riga (in valori accettati dai CSS)",
    // "Value to store when \"True\" is selected"
    valueTrue: "Valore \"Vero\"",
    // "Value to store when \"False\" is selected"
    valueFalse: "Valore \"Falso\"",
    // "\"Value is below minimum\" error message"
    minErrorText: "\"Valore inferiore al minimo\" messaggio di errore",
    // "\"Value exceeds maximum\" error message"
    maxErrorText: "\"Valore superiore al massimo\" messaggio di errore",
    // "\"Empty comment\" error message"
    otherErrorText: "\"Commento vuoto\" messaggio di errore",
    // "Error message for duplicate responses"
    keyDuplicationError: "\"Valore chiave non univoco\" messaggio di errore",
    // [Auto-translated] "Minimum choices to select"
    minSelectedChoices: "Scelte minime da selezionare",
    // "Maximum choices to select"
    maxSelectedChoices: "Max. scelte selezionabili",
    // "Logo width"
    logoWidth: "Larghezza logo (in valori accettati da CSS)",
    // "Logo height"
    logoHeight: "Altezza logo (in valori accettati da CSS)",
    // "Read-only"
    readOnly: "Sola lettura",
    // "Disable the read-only mode if"
    enableIf: "Editabile se",
    // "\"No rows\" message"
    noRowsText: "\"Nessuna riga\" messaggio",
    // "Separate special choices"
    separateSpecialChoices: "Scelte speciali separate (Nessuno, Altro, Seleziona tutti)",
    // "Copy choices from the following question"
    choicesFromQuestion: "Copia le scelte dalla domanda seguente:",
    // "Which choice options to copy"
    choicesFromQuestionMode: "Quale scelta copiare?",
    // [Auto-translated] "Use values from the following matrix column or panel question as choice IDs"
    choiceValuesFromQuestion: "Utilizza i valori della colonna matrice seguente o della domanda del pannello come ID di scelta",
    // [Auto-translated] "Use values from the following matrix column or panel question as choice texts"
    choiceTextsFromQuestion: "Usa i valori della seguente colonna matrice o domanda del pannello come testi di scelta",
    // [Auto-translated] "Display page titles in the progress bar"
    progressBarShowPageTitles: "Visualizzare i titoli delle pagine nella barra di avanzamento",
    // [Auto-translated] "Display page numbers in the progress bar"
    progressBarShowPageNumbers: "Visualizzare i numeri di pagina nella barra di avanzamento",
    // "Add a comment box"
    showCommentArea: "Mostra l'area commento",
    // "Placeholder text for the comment box"
    commentPlaceholder: "Testo segnaposto area commento",
    // "Show the labels as extreme values"
    displayRateDescriptionsAsExtremeItems: "Mostra le descrizioni come valori estremi",
    // "Row order"
    rowOrder: "Ordine righe",
    // "Column layout"
    columnsLayout: "Layout colonna",
    // "Nested column count"
    columnColCount: "Numero colonne annidate",
    // "Correct Answer"
    correctAnswer: "Risposta corretta",
    // "Default Values"
    defaultPanelValue: "Valori di default",
    // "Cell Texts"
    cells: "Testi Celle",
    // [Auto-translated] "Select a file or paste a file link..."
    fileInputPlaceholder: "Seleziona un file o incolla un collegamento a un file...",
    // "Prevent duplicate responses in the following column"
    keyName: "Colonna chiave",
    itemvalue: {
      // [Auto-translated] "Make the option visible if"
      visibleIf: "Rendi visibile l'opzione se",
      // [Auto-translated] "Make the option selectable if"
      enableIf: "Rendere l'opzione selezionabile se"
    },
    "itemvalue@rows": {
      // [Auto-translated] "Make the row visible if"
      visibleIf: "Rendi visibile la riga se",
      // [Auto-translated] "Make the row editable if"
      enableIf: "Rendi la riga modificabile se"
    },
    imageitemvalue: {
      // "Alt text"
      text: "Testo alternativo"
    },
    // "Logo alignment"
    logoPosition: "Posizione Logo",
    // "Add logo..."
    addLogo: "Aggiungi logo...",
    // "Change logo..."
    changeLogo: "Modifica logo...",
    logoPositions: {
      // "Remove logo"
      none: "Rimuovi logo",
      // "Left"
      left: "Sinistra",
      // "Right"
      right: "Destra",
      // "On the top"
      top: "In alto",
      // "In the bottom"
      bottom: "In basso"
    },
    // [Auto-translated] "Preview mode"
    previewMode: "Modalità anteprima",
    // [Auto-translated] "Enable grid layout"
    gridLayoutEnabled: "Abilita layout griglia",
    // [Auto-translated] "Grid columns"
    gridLayoutColumns: "Colonne della griglia",
    // [Auto-translated] "Mask settings"
    maskSettings: "Impostazioni maschera",
    // [Auto-translated] "Row details error message alignment"
    detailErrorLocation: "Allineamento dei messaggi di errore dei dettagli delle righe",
    // Creator tabs
    tabs: {
      panel: {
        // [Auto-translated] "Panel Layout"
        layout: "Layout del pannello"
      },
      // "General"
      general: "Generale",
      // "Options"
      fileOptions: "Opzioni",
      // "HTML Editor"
      html: "Modifica Html",
      // "Columns"
      columns: "Colonne",
      // "Rows"
      rows: "Righe",
      // "Choice Options"
      choices: "Scelte",
      // "Items"
      items: "Opzioni",
      // "Visible If"
      visibleIf: "Visibile se",
      // "Editable If"
      enableIf: "Editabile se",
      // "Required If"
      requiredIf: "Obbligatoria se",
      // "Rating Values"
      rateValues: "Valori della classifica",
      // [Auto-translated] "Slider Settings"
      sliderSettings: "Impostazioni del dispositivo di scorrimento",
      // "Choices from a Web Service"
      choicesByUrl: "Opzioni da URL",
      // "Default Choices"
      matrixChoices: "Opzioni predefinite",
      // "Text Inputs"
      multipleTextItems: "Voci di testo",
      // "Numbering"
      numbering: "Numerazione",
      // "Validators"
      validators: "Validatori",
      // "Navigation"
      navigation: "Navigazione",
      // "Question Settings"
      question: "Domanda",
      // "Pages"
      pages: "Pagine",
      // "Quiz Mode"
      timer: "Timer/Quiz",
      // "Calculated Values"
      calculatedValues: "Valori Calcolati",
      // "Triggers"
      triggers: "Trigger",
      // "Title template"
      templateTitle: "Template titolo",
      // "Totals"
      totals: "Totale",
      // "Conditions"
      logic: "Logica",
      // [Auto-translated] "Input Mask Settings"
      mask: "Impostazioni della maschera di input",
      layout: {
        // [Auto-translated] "Panel Layout"
        panel: "Layout del pannello",
        // [Auto-translated] "Layout"
        question: "Impaginazione",
        // [Auto-translated] "Layout"
        base: "Impaginazione"
      },
      // "Data"
      data: "Dati",
      // "Validation"
      validation: "Validazione",
      // "Individual Cell Texts"
      cells: "Testi Cella",
      // "\"Thank You\" Page"
      showOnCompleted: "Sondaggio Completo",
      // "Logo in the Survey Header"
      logo: "Logo nel Titolo sondaggio",
      // "Slider"
      slider: "Cursore",
      // [Auto-translated] "Expression"
      expression: "Espressione",
      // [Auto-translated] "Question Settings"
      questionSettings: "Impostazioni delle domande",
      // "Header"
      header: "Intestazione",
      // "Background"
      background: "Sfondo",
      // "Appearance"
      appearance: "Apparenza",
      // [Auto-translated] "Accent colors"
      accentColors: "Colori d'accento",
      // [Auto-translated] "Surface background"
      surfaceBackground: "Sfondo della superficie",
      // [Auto-translated] "Scaling"
      scaling: "Scalata",
      // "Others"
      others: "Altri"
    },
    // "Edit property '{0}'"
    editProperty: "Modifica propietà '{0}'",
    // "Items"
    items: "[ Elemento: {0} ]",
    // "Make choices visible if"
    choicesVisibleIf: "Scelte visibili se",
    // "Make choices selectable if"
    choicesEnableIf: "Scelte selezionabili se",
    // "Make columns visible if"
    columnsEnableIf: "Colonne visibili se",
    // "Make rows visible if"
    rowsEnableIf: "Righe visibili se",
    // "Increase the inner indent"
    innerIndent: "Aggiungi rientri interni",
    // [Auto-translated] "Use answers from the last entry as default"
    copyDefaultValueFromLastEntry: "Usa le risposte dell'ultima voce come impostazione predefinita",
    // "Please enter a value."
    enterNewValue: "Inserisci il valore.",
    // "There are no questions in the survey."
    noquestions: "Non c'è alcuna domanda nel sondaggio.",
    // "Please create a trigger"
    createtrigger: "Il trigger non è impostato",
    // "Press enter button to edit"
    titleKeyboardAdornerTip: "Premi il tasto Invio per modificare",
    // "Press enter button to edit item, press delete button to delete item, press alt plus arrow up or arrow down to move item"
    keyboardAdornerTip: "Premi il tasto Invio per modificare l'elemento, premi il tasto Cancella per eliminare l'elemento, premi alt più freccia su o freccia giù per spostare l'elemento.",
    // "On "
    triggerOn: "Attivazione",
    // "Make pages visible"
    triggerMakePagesVisible: "Rendi visibili le pagine:",
    // "Make elements visible"
    triggerMakeQuestionsVisible: "Rendi visibili le domande:",
    // "Complete the survey if successful."
    triggerCompleteText: "Completa il sondaggio.",
    // "The trigger is not set"
    triggerNotSet: "Non impostato",
    // "Run if"
    triggerRunIf: "Esegui se",
    // "Change value of: "
    triggerSetToName: "Cambia il valore di: ",
    // "Copy value from: "
    triggerFromName: "Copia valore da: ",
    // "Run this Expression"
    triggerRunExpression: "Esegui questa Espressione:",
    // "to: "
    triggerSetValue: "a: ",
    // "Go to the question"
    triggerGotoName: "Vai alla domanda:",
    // "Do not put the variable into the survey result."
    triggerIsVariable: "Non inserire la variabile del risultato del sondaggio",
    // "Please enter a valid expression"
    triggerRunExpressionEmpty: "Inserisci un'espressione valida",
    // "Type expression here..."
    emptyExpressionPlaceHolder: "Digita qui l'espressione...",
    // "No file chosen"
    noFile: "Nessun file scelto",
    // "Clear hidden question values"
    clearIfInvisible: "Cancella se Invisibile",
    // [Auto-translated] "Store values in the following property"
    valuePropertyName: "Archiviare i valori nella proprietà seguente",
    // [Auto-translated] "Enable search-as-you-type"
    searchEnabled: "Abilita la ricerca durante la digitazione",
    // [Auto-translated] "Hide selected items"
    hideSelectedItems: "Nascondere gli elementi selezionati",
    // [Auto-translated] "Collapse the dropdown upon selection"
    closeOnSelect: "Comprimi il menu a discesa al momento della selezione",
    // [Auto-translated] "Vertical alignment within cells"
    verticalAlign: "Allineamento verticale all'interno delle celle",
    // [Auto-translated] "Alternate row colors"
    alternateRows: "Colori di riga alternati",
    // "Make columns visible if"
    columnsVisibleIf: "Colonne visibili se",
    // "Make rows visible if"
    rowsVisibleIf: "Righe visibili se",
    // "Placeholder text for the comment box"
    otherPlaceholder: "Testo segnaposto area commenti",
    // [Auto-translated] "Placeholder text for Local file"
    filePlaceholder: "Testo segnaposto per il file locale",
    // [Auto-translated] "Placeholder text for Camera"
    photoPlaceholder: "Testo segnaposto per la fotocamera",
    // [Auto-translated] "Placeholder text for Local file or Camera"
    fileOrPhotoPlaceholder: "Testo segnaposto per il file locale o la fotocamera",
    // [Auto-translated] "Rating icon"
    rateType: "Icona di valutazione",
    // [Auto-translated] "Ex.: https://api.example.com/books"
    url_placeholder: "Es.: https://api.example.com/books",
    // [Auto-translated] "Ex.: categories.fiction"
    path_placeholder: "Es.: categories.fiction",
    // [Auto-translated] "Ex.: a)"
    questionStartIndex_placeholder: "Es.: a)",
    // [Auto-translated] "Ex.: 6in"
    width_placeholder: "Es.: 6 pollici",
    // [Auto-translated] "Ex.: 600px"
    minWidth_placeholder: "Es.: 600px",
    // [Auto-translated] "Ex.: 50%"
    maxWidth_placeholder: "Es.: 50%",
    // "auto"
    imageHeight_placeholder: "Automatico",
    // "auto"
    imageWidth_placeholder: "Automatico",
    // [Auto-translated] "Ex.: 100px"
    itemTitleWidth_placeholder: "Es.: 100px",
    theme: {
      // [Auto-translated] "Theme"
      themeName: "Tema",
      // [Auto-translated] "Question appearance"
      isPanelless: "Aspetto della domanda",
      // [Auto-translated] "Background and corner radius"
      editorPanel: "Sfondo e raggio dell'angolo",
      // [Auto-translated] "Background and corner radius"
      questionPanel: "Sfondo e raggio dell'angolo",
      // [Auto-translated] "Accent color"
      primaryColor: "Colore d'accento",
      // [Auto-translated] "Panel and question box opacity"
      panelBackgroundTransparency: "Opacità del pannello e della casella delle domande",
      // [Auto-translated] "Input element opacity"
      questionBackgroundTransparency: "Opacità dell'elemento di input",
      // [Auto-translated] "Survey font size"
      fontSize: "Dimensione del carattere dell'indagine",
      // [Auto-translated] "Survey scale factor"
      scale: "Fattore di scala del sondaggio",
      // [Auto-translated] "Corner radius"
      cornerRadius: "Raggio d'angolo",
      // [Auto-translated] "Advanced mode"
      advancedMode: "Modalità avanzata",
      // [Auto-translated] "Title font"
      pageTitle: "Carattere del titolo",
      // [Auto-translated] "Description font"
      pageDescription: "Descrizione del carattere",
      // [Auto-translated] "Title font"
      questionTitle: "Carattere del titolo",
      // [Auto-translated] "Description font"
      questionDescription: "Descrizione del carattere",
      // [Auto-translated] "Font"
      editorFont: "Font",
      // [Auto-translated] "Opacity"
      backgroundOpacity: "Opacità", // Auto-generated string
      // [Auto-translated] "Survey font family"
      "--sjs-font-family": "Famiglia di caratteri per sondaggi",
      // [Auto-translated] "Background color"
      "--sjs-general-backcolor-dim": "Colore di sfondo",
      // [Auto-translated] "Accent background colors"
      "--sjs-primary-backcolor": "Colori di sfondo accentati",
      // [Auto-translated] "Accent foreground colors"
      "--sjs-primary-forecolor": "Colori di primo piano accentati",
      // [Auto-translated] "Error message colors"
      "--sjs-special-red": "Colori dei messaggi di errore",
      // [Auto-translated] "Shadow effects"
      "--sjs-shadow-small": "Effetti ombra",
      // [Auto-translated] "Shadow effects"
      "--sjs-shadow-inner": "Effetti ombra",
      // [Auto-translated] "Colors"
      "--sjs-border-default": "Colori"
    },
    "header@header": {
      // [Auto-translated] "View"
      headerView: "Vista",
      // [Auto-translated] "Logo alignment"
      logoPosition: "Allineamento del logo",
      // [Auto-translated] "Survey title font"
      surveyTitle: "Carattere del titolo dell'indagine",
      // [Auto-translated] "Survey description font"
      surveyDescription: "Carattere della descrizione dell'indagine",
      // [Auto-translated] "Survey title font"
      headerTitle: "Carattere del titolo dell'indagine",
      // [Auto-translated] "Survey description font"
      headerDescription: "Carattere della descrizione dell'indagine",
      // [Auto-translated] "Content area width"
      inheritWidthFrom: "Larghezza dell'area del contenuto",
      // [Auto-translated] "Text width"
      textAreaWidth: "Larghezza del testo",
      // [Auto-translated] "Background color"
      backgroundColorSwitch: "Colore di sfondo",
      // [Auto-translated] "Background image"
      backgroundImage: "Immagine di sfondo",
      // [Auto-translated] "Opacity"
      backgroundImageOpacity: "Opacità",
      // [Auto-translated] "Overlap"
      overlapEnabled: "Sovrapposizione",
      // [Auto-translated] "Logo alignment"
      logoPositionX: "Allineamento del logo",
      // [Auto-translated] "Survey title alignment"
      titlePositionX: "Allineamento del titolo del sondaggio",
      // [Auto-translated] "Survey description alignment"
      descriptionPositionX: "Allineamento della descrizione del sondaggio"
    }
  },
  // Property values
  pv: {
    // [Auto-translated] "true"
    "true": "vero",
    // [Auto-translated] "false"
    "false": "falso",
    // [Auto-translated] "Local file"
    file: "File locale",
    // [Auto-translated] "Camera"
    camera: "Macchina fotografica",
    // [Auto-translated] "Local file or Camera"
    "file-camera": "File locale o fotocamera",
    // "Inherit"
    inherit: "Default",
    // "Visible"
    show: "Visibile",
    // "Hidden"
    hide: "Nascosto",
    // "Inherit"
    default: "Default",
    // "Initial"
    initial: "Iniziale",
    // "Random"
    random: "Random",
    // "Collapsed"
    collapsed: "Ridotto",
    // "Expanded"
    expanded: "Esteso",
    // "None"
    none: "Nessuno",
    // "Ascending"
    asc: "Ascendente",
    // "Descending"
    desc: "Discendente",
    // "Indeterminate"
    indeterminate: "Indeterminato",
    // [Auto-translated] "Selected"
    selected: "Selezionato",
    // [Auto-translated] "Unselected"
    unselected: "Deselezionata",
    // [Auto-translated] "decimal"
    decimal: "decimale",
    // [Auto-translated] "currency"
    currency: "valuta",
    // [Auto-translated] "percent"
    percent: "percento",
    // "First panel is expanded"
    firstExpanded: "Il primo pannello è esteso",
    // "Hide question numbers"
    off: "Nascondi il numero delle domande",
    // "List"
    list: "Lista",
    // [Auto-translated] "Carousel"
    carousel: "Carosello",
    // [Auto-translated] "Tabs"
    tab: "Schede",
    // "Panel navigator + Progress bar at the top"
    progressTop: "Navigatore del pannello + Barra di avanzamento in alto",
    // "Panel navigator + Progress bar at the bottom"
    progressBottom: "Navigatore del pannello + Barra di avanzamento in basso",
    // "Panel navigator + Progress bar at the top and bottom"
    progressTopBottom: "Navigatore del pannello + Barra di avanzamento in alto e in basso",
    // "Horizontal"
    horizontal: "Orizzontale",
    // "Vertical"
    vertical: "Verticale",
    // "Top"
    top: "In alto",
    // "Bottom"
    bottom: "In basso",
    // "Top and bottom"
    topBottom: "In alto e in basso",
    // "Both"
    both: "Entrambe",
    // "Left"
    left: "Sinistra",
    // "Right"
    right: "Destra",
    // [Auto-translated] "Center"
    center: "Centro",
    // [Auto-translated] "Left and right"
    leftRight: "Destra e sinistra",
    // [Auto-translated] "Middle"
    middle: "Mezzo",
    // [Auto-translated] "color"
    color: "Colore",
    // [Auto-translated] "date"
    date: "dattero",
    // [Auto-translated] "datetime"
    datetime: "datetime",
    // [Auto-translated] "datetime-local"
    "datetime-local": "datetime-local",
    // [Auto-translated] "email"
    email: "E-mail",
    // [Auto-translated] "month"
    month: "mese",
    // [Auto-translated] "number"
    number: "numero",
    // [Auto-translated] "password"
    password: "parola d’ordine",
    // [Auto-translated] "range"
    range: "gamma",
    // [Auto-translated] "tel"
    tel: "Tel",
    // [Auto-translated] "text"
    text: "Testo",
    // [Auto-translated] "time"
    time: "Ore",
    // [Auto-translated] "url"
    url: "URL",
    // [Auto-translated] "week"
    week: "settimana",
    // "Hidden"
    hidden: "Nascosto",
    // "Editable"
    edit: "Editabile",
    // "Read-only"
    display: "Sola lettura",
    // [Auto-translated] "Contain"
    contain: "Contenere",
    // [Auto-translated] "Cover"
    cover: "Coprire",
    // [Auto-translated] "Fill"
    fill: "Riempire",
    // [Auto-translated] "Next"
    next: "Prossimo",
    // [Auto-translated] "Last"
    last: "Ultimo",
    // "Upon survey completion"
    onComplete: "Al termine del sondaggio",
    // "When question gets hidden"
    onHidden: "Quando la domanda diventa nascosta",
    // "When question or its panel/page gets hidden"
    onHiddenContainer: "Quando la domanda, o il suo pannello/pagina, diventa nascosta",
    clearInvisibleValues: {
      // "Never"
      none: "Mai"
    },
    clearIfInvisible: {
      // [Auto-translated] "Never"
      none: "Mai"
    },
    // [Auto-translated] "Radio Buttons"
    radio: "Pulsanti",
    inputType: {
      // [Auto-translated] "Color"
      color: "Colore",
      // [Auto-translated] "Date"
      date: "Dattero",
      // [Auto-translated] "Date and Time"
      "datetime-local": "Data e ora",
      // [Auto-translated] "Email"
      email: "E-mail",
      // [Auto-translated] "Month"
      month: "Mese",
      // [Auto-translated] "Number"
      number: "Numero",
      // [Auto-translated] "Password"
      password: "Parola d’ordine",
      // [Auto-translated] "Range"
      range: "Gamma",
      // [Auto-translated] "Phone Number"
      tel: "Numero di telefono",
      // [Auto-translated] "Text"
      text: "Testo",
      // [Auto-translated] "Time"
      time: "Ore",
      // [Auto-translated] "URL"
      url: "URL",
      // [Auto-translated] "Week"
      week: "Settimana"
    },
    sliderType: {
      // [Auto-translated] "Single-Value"
      single: "Valore singolo",
      // [Auto-translated] "Range"
      range: "Gamma"
    },
    tooltipVisibility: {
      // [Auto-translated] "Auto"
      auto: "Automatico",
      // [Auto-translated] "Always"
      always: "Sempre",
      // [Auto-translated] "Never"
      never: "Mai"
    },
    notificationType: {
      // [Auto-translated] "Error"
      error: "Errore",
      // [Auto-translated] "Warning"
      warning: "Avvertimento",
      // [Auto-translated] "Informational note"
      info: "Nota informativa"
    },
    autocomplete: {
      // [Auto-translated] "Full Name"
      name: "Nome completo",
      // [Auto-translated] "Prefix"
      "honorific-prefix": "Prefisso",
      // [Auto-translated] "First Name"
      "given-name": "Nome di battesimo",
      // [Auto-translated] "Middle Name"
      "additional-name": "Secondo nome",
      // [Auto-translated] "Last Name"
      "family-name": "Cognome",
      // [Auto-translated] "Suffix"
      "honorific-suffix": "Suffisso",
      // [Auto-translated] "Nickname"
      nickname: "Soprannome",
      // [Auto-translated] "Job Title"
      "organization-title": "Titolo di lavoro",
      // [Auto-translated] "User Name"
      username: "Nome utente",
      // [Auto-translated] "New Password"
      "new-password": "Nuova password",
      // [Auto-translated] "Current Password"
      "current-password": "Password corrente",
      // [Auto-translated] "Organization Name"
      organization: "Nome dell'organizzazione",
      // [Auto-translated] "Full Street Address"
      "street-address": "Indirizzo completo",
      // [Auto-translated] "Address Line 1"
      "address-line1": "Indirizzo Riga 1",
      // [Auto-translated] "Address Line 2"
      "address-line2": "Indirizzo Riga 2",
      // [Auto-translated] "Address Line 3"
      "address-line3": "Indirizzo Riga 3",
      // [Auto-translated] "Level 4 Address"
      "address-level4": "Indirizzo di livello 4",
      // [Auto-translated] "Level 3 Address"
      "address-level3": "Indirizzo di livello 3",
      // [Auto-translated] "Level 2 Address"
      "address-level2": "Indirizzo di livello 2",
      // [Auto-translated] "Level 1 Address"
      "address-level1": "Indirizzo di livello 1",
      // [Auto-translated] "Country Code"
      country: "Prefisso internazionale",
      // [Auto-translated] "Country Name"
      "country-name": "Nome del paese",
      // [Auto-translated] "Postal Code"
      "postal-code": "Codice postale",
      // [Auto-translated] "Cardholder Name"
      "cc-name": "Nome del titolare della carta",
      // [Auto-translated] "Cardholder First Name"
      "cc-given-name": "Nome del titolare della carta",
      // [Auto-translated] "Cardholder Middle Name"
      "cc-additional-name": "Secondo nome del titolare della carta",
      // [Auto-translated] "Cardholder Last Name"
      "cc-family-name": "Cognome del titolare della carta",
      // [Auto-translated] "Credit Card Number"
      "cc-number": "Numero di carta di credito",
      // [Auto-translated] "Expiration Date"
      "cc-exp": "Data di scadenza",
      // [Auto-translated] "Expiration Month"
      "cc-exp-month": "Mese di scadenza",
      // [Auto-translated] "Expiration Year"
      "cc-exp-year": "Anno di scadenza",
      // [Auto-translated] "Card Security Code"
      "cc-csc": "Codice di sicurezza della carta",
      // [Auto-translated] "Credit Card Type"
      "cc-type": "Tipo di carta di credito",
      // [Auto-translated] "Transaction Currency"
      "transaction-currency": "Valuta della transazione",
      // [Auto-translated] "Transaction Amount"
      "transaction-amount": "Importo della transazione",
      // [Auto-translated] "Preferred Language"
      language: "Lingua preferita",
      // [Auto-translated] "Birthday"
      bday: "Compleanno",
      // [Auto-translated] "Birthday Day"
      "bday-day": "Giorno del compleanno",
      // [Auto-translated] "Birthday Month"
      "bday-month": "Mese del compleanno",
      // [Auto-translated] "Birthday Year"
      "bday-year": "Anno di compleanno",
      // [Auto-translated] "Gender"
      sex: "Genere",
      // [Auto-translated] "Website URL"
      url: "URL del sito web",
      // [Auto-translated] "Profile Photo"
      photo: "Foto del profilo",
      // [Auto-translated] "Telephone Number"
      tel: "Numero telefonico",
      // [Auto-translated] "Country Code for Phone"
      "tel-country-code": "Prefisso internazionale per il telefono",
      // [Auto-translated] "National Telephone Number"
      "tel-national": "Numero telefonico nazionale",
      // [Auto-translated] "Area Code"
      "tel-area-code": "Prefisso",
      // [Auto-translated] "Local Phone Number"
      "tel-local": "Numero di telefono locale",
      // [Auto-translated] "Local Phone Prefix"
      "tel-local-prefix": "Prefisso telefonico locale",
      // [Auto-translated] "Local Phone Suffix"
      "tel-local-suffix": "Suffisso del telefono locale",
      // [Auto-translated] "Phone Extension"
      "tel-extension": "Interno telefonico",
      // [Auto-translated] "Email Address"
      email: "Indirizzo email",
      // [Auto-translated] "Instant Messaging Protocol"
      impp: "Protocollo di messaggistica istantanea"
    },
    maskType: {
      // [Auto-translated] "None"
      none: "Nessuno",
      // [Auto-translated] "Pattern"
      pattern: "Modello",
      // [Auto-translated] "Numeric"
      numeric: "Numerico",
      // [Auto-translated] "Date and Time"
      datetime: "Data e ora",
      // [Auto-translated] "Currency"
      currency: "Valuta"
    },
    inputTextAlignment: {
      // [Auto-translated] "Auto"
      auto: "Automatico",
      // [Auto-translated] "Left"
      left: "A sinistra",
      // [Auto-translated] "Right"
      right: "A destra"
    },
    // "All"
    all: "Tutto",
    // "Page"
    page: "Pagina",
    // "Survey"
    survey: "Sondaggio",
    // "When switching to the next page"
    onNextPage: "Quando si passa alla pagina successiva",
    // "After an answer is changed"
    onValueChanged: "Dopo la modifica di una risposta",
    // "Before an answer is changed"
    onValueChanging: "Prima della modifica di una risposta",
    questionsOnPageMode: {
      // [Auto-translated] "Original structure"
      standard: "Struttura originale",
      // [Auto-translated] "Show all questions on one page"
      singlePage: "Mostra tutte le domande in un'unica pagina",
      // [Auto-translated] "Show single question per page"
      questionPerPage: "Mostra una singola domanda per pagina",
      // [Auto-translated] "Show single input field per page"
      inputPerPage: "Mostra un singolo campo di input per pagina"
    },
    // "No preview"
    noPreview: "No anteprima",
    // "Show all questions"
    showAllQuestions: "Mostra tutte le domande",
    // "Show answered questions only"
    showAnsweredQuestions: "Mostra solo le domande con risposta",
    // [Auto-translated] "Show all questions"
    allQuestions: "Mostra tutte le domande",
    // [Auto-translated] "Show answered questions only"
    answeredQuestions: "Mostra solo le domande con risposta",
    // "Completed pages"
    pages: "Pagine completate",
    // "Answered questions"
    questions: "Domande con risposte",
    // "Answered required questions"
    requiredQuestions: "Domande obbligatorie con risposta",
    // "Valid answers"
    correctQuestions: "Risposte valide",
    // "Completed pages (button UI)"
    buttons: "Pagine completate (tasto UI)",
    // "Under the input field"
    underInput: "Sotto l'input",
    // "Under the question title"
    underTitle: "Sotto il titolo",
    // "On lost focus"
    onBlur: "Quando perde focus",
    // "While typing"
    onTyping: "Mentre si digita",
    // "Under the row"
    underRow: "Sotto la riga",
    // "Under the row, display one section only"
    underRowSingle: "Sotto la riga, solo un pannello è visibile",
    // "Auto"
    auto: "Automatico",
    showNavigationButtons: {
      // "Hidden"
      none: "Nascosto"
    },
    timerInfoMode: {
      // "Both"
      combined: "Entrambe"
    },
    addRowButtonLocation: {
      // "Based on matrix layout"
      default: "Dipende dal layout della matrice"
    },
    panelsState: {
      // "Locked"
      default: "Gli utenti non possono espandere o comprimere i pannelli",
      // "Collapse all"
      collapsed: "Tutti i pannelli sono compressi",
      // "Expand all"
      expanded: "Tutti i pannelli sono estesi",
      // [Auto-translated] "First expanded"
      firstExpanded: "Prima espansione"
    },
    widthMode: {
      // [Auto-translated] "Static"
      static: "Statico",
      // [Auto-translated] "Responsive"
      responsive: "Reattivo"
    },
    contentMode: {
      // [Auto-translated] "Image"
      image: "Immagine",
      // [Auto-translated] "Video"
      video: "Video",
      // [Auto-translated] "YouTube"
      youtube: "Collegamenti esterni"
    },
    displayMode: {
      // [Auto-translated] "Buttons"
      buttons: "Pulsanti",
      // [Auto-translated] "Dropdown"
      dropdown: "Menù a discesa"
    },
    rateColorMode: {
      // [Auto-translated] "Default"
      default: "Default",
      // [Auto-translated] "Scale"
      scale: "Scala"
    },
    scaleColorMode: {
      // [Auto-translated] "Monochrome"
      monochrome: "Monocromatico",
      // [Auto-translated] "Colored"
      colored: "Colorato"
    },
    autoGenerate: {
      // [Auto-translated] "Auto-generate"
      "true": "Generazione automatica",
      // [Auto-translated] "Manual"
      "false": "Manuale"
    },
    rateType: {
      // [Auto-translated] "Labels"
      labels: "Etichette",
      // [Auto-translated] "Stars"
      stars: "Stelle",
      // [Auto-translated] "Smileys"
      smileys: "Faccine"
    },
    state: {
      // [Auto-translated] "Locked"
      default: "Bloccato"
    },
    showQuestionNumbers: {
      // [Auto-translated] "Auto-numbering"
      default: "Numerazione automatica",
      // [Auto-translated] "Auto-numbering"
      on: "Continua dalla pagina precedente",
      // [Auto-translated] "Reset on each page"
      onPage: "Inizia da capo in ogni pagina",
      // [Auto-translated] "Reset on each panel"
      onpanel: "Ripristina su ogni pannello",
      // [Auto-translated] "Reset on each panel"
      onPanel: "Ripristina su ogni pannello",
      // [Auto-translated] "Recursive numbering"
      recursive: "Numerazione ricorsiva",
      // [Auto-translated] "Continue across the survey"
      onSurvey: "Continua con l'indagine",
      // [Auto-translated] "No numbering"
      off: "Nessuna numerazione"
    },
    descriptionLocation: {
      // [Auto-translated] "Under the question title"
      underTitle: "Sotto il titolo della domanda",
      // [Auto-translated] "Under the input field"
      underInput: "Sotto il campo di immissione"
    },
    selectToRankAreasLayout: {
      // [Auto-translated] "Next to choices"
      horizontal: "Accanto alle scelte",
      // [Auto-translated] "Above choices"
      vertical: "Scelte di cui sopra"
    },
    displayStyle: {
      // [Auto-translated] "Decimal"
      decimal: "Decimale",
      // [Auto-translated] "Currency"
      currency: "Valuta",
      // [Auto-translated] "Percentage"
      percent: "Percentuale",
      // [Auto-translated] "Date"
      date: "Dattero"
    },
    totalDisplayStyle: {
      // [Auto-translated] "Decimal"
      decimal: "Decimale",
      // [Auto-translated] "Currency"
      currency: "Valuta",
      // [Auto-translated] "Percentage"
      percent: "Percentuale",
      // [Auto-translated] "Date"
      date: "Dattero"
    },
    rowOrder: {
      // [Auto-translated] "Original"
      initial: "Originale"
    },
    questionOrder: {
      // [Auto-translated] "Original"
      initial: "Originale"
    },
    progressBarLocation: {
      // [Auto-translated] "Top"
      top: "In alto",
      // [Auto-translated] "Bottom"
      bottom: "Fondoschiena",
      // [Auto-translated] "Top and bottom"
      topbottom: "Sopra e sotto",
      // [Auto-translated] "Above the header"
      aboveheader: "Sopra l'intestazione",
      // [Auto-translated] "Below the header"
      belowheader: "Sotto l'intestazione",
      // [Auto-translated] "Hidden"
      off: "Nascosto"
    },
    // [Auto-translated] "Sum"
    sum: "Somma",
    // [Auto-translated] "Count"
    count: "Contare",
    // [Auto-translated] "Min"
    min: "Min",
    // [Auto-translated] "Max"
    max: "Max",
    // [Auto-translated] "Avg"
    avg: "Medio",
    searchMode: {
      // [Auto-translated] "Contains"
      contains: "Contiene",
      // [Auto-translated] "Starts with"
      startsWith: "Inizia con"
    },
    backgroundImageFit: {
      // [Auto-translated] "Auto"
      auto: "Automatico",
      // [Auto-translated] "Cover"
      cover: "Coprire",
      // [Auto-translated] "Contain"
      contain: "Contenere",
      // [Auto-translated] "Stretch"
      fill: "Stendere",
      // [Auto-translated] "Tile"
      tile: "Tegola"
    },
    backgroundImageAttachment: {
      // [Auto-translated] "Fixed"
      fixed: "Fissato",
      // [Auto-translated] "Scroll"
      scroll: "Scorrere"
    },
    headerView: {
      // [Auto-translated] "Basic"
      basic: "Basico",
      // [Auto-translated] "Advanced"
      advanced: "Avanzato"
    },
    inheritWidthFrom: {
      // [Auto-translated] "Same as survey"
      survey: "Uguale al sondaggio",
      // [Auto-translated] "Same as container"
      container: "Uguale al contenitore"
    },
    backgroundColorSwitch: {
      // [Auto-translated] "None"
      none: "Nessuno",
      // [Auto-translated] "Accent color"
      accentColor: "Colore d'accento",
      // [Auto-translated] "Custom"
      custom: "Costume"
    },
    colorPalette: {
      // [Auto-translated] "Light"
      light: "Leggero",
      // [Auto-translated] "Dark"
      dark: "Oscuro"
    },
    isPanelless: {
      // [Auto-translated] "Default"
      "false": "Default",
      // [Auto-translated] "Without Panels"
      "true": "Senza pannelli"
    },
    progressBarInheritWidthFrom: {
      // [Auto-translated] "Same as survey"
      survey: "Come il sondaggio",
      // [Auto-translated] "Same as container"
      container: "Uguale al contenitore"
    }
  },
  // Operators
  op: {
    // "Empty"
    empty: "è vuoto",
    // "Not empty"
    notempty: "non è vuoto ",
    // "Equals"
    equal: "è uguale a",
    // "Does not equal"
    notequal: "non è uguale a",
    // "Contains"
    contains: "contiene",
    // "Does not contain"
    notcontains: "non contiene",
    // "Any of"
    anyof: "Qualsiasi",
    // "All of"
    allof: "Tutti",
    // "Greater than"
    greater: "maggiore",
    // "Less than"
    less: "minore",
    // "Greater than or equal to"
    greaterorequal: "maggiore o uguale",
    // "Less than or equal to"
    lessorequal: "minore o uguale",
    // [Auto-translated] "and"
    and: "e",
    // [Auto-translated] "or"
    or: "o"
  },
  // Embed window
  ew: {
    // "Use Angular version"
    angular: "Versione per Angular",
    // "Use jQuery version"
    jquery: "Versione per jQuery",
    // "Use Knockout version"
    knockout: "Versione per Knockout",
    // "Use React version"
    react: "Versione per React",
    // "Use Vue version"
    vue: "Versione per Vue",
    // "For bootstrap framework"
    bootstrap: "Per framework bootstrap",
    // "Modern theme"
    modern: "Tema moderno",
    // "Default theme"
    default: "Tema default",
    // "Orange theme"
    orange: "Tema Orange",
    // "Darkblue theme"
    darkblue: "Tema Darkblue",
    // "Darkrose theme"
    darkrose: "Tema Darkrose",
    // "Stone theme"
    stone: "Tema Stone",
    // "Winter theme"
    winter: "Tema Winter",
    // "Winter-Stone theme"
    winterstone: "Tema Winter-Stone",
    // "Show survey on a page"
    showOnPage: "Visualizza in questa pagina",
    // "Show survey in a window"
    showInWindow: "Visualizza in una finestra",
    // "Load Survey JSON from server"
    loadFromServer: "Carica JSON dal server",
    // "Scripts and styles"
    titleScript: "Scripts e stili",
    // "HTML"
    titleHtml: "HTML",
    // "JavaScript"
    titleJavaScript: "JavaScript"
  },
  // Preview (Survey)
  ts: {
    // "Select the page to test it"
    selectPage: "Seleziona la pagina da testare:",
    // "Show invisible elements"
    showInvisibleElements: "Mostra elementi nascosti",
    // [Auto-translated] "Hide invisible elements"
    hideInvisibleElements: "Nascondi elementi invisibili",
    // [Auto-translated] "Previous"
    prevPage: "Precedente",
    // [Auto-translated] "Next"
    nextPage: "Prossimo"
  },
  validators: {
    // "Answer count"
    answercountvalidator: "Numero risposte",
    // "Email"
    emailvalidator: "E-mail",
    // "Expression"
    expressionvalidator: "Espressione",
    // "Number"
    numericvalidator: "Numerico",
    // "Regex"
    regexvalidator: "Regex",
    // "Text"
    textvalidator: "Testo"
  },
  triggers: {
    // "Complete survey"
    completetrigger: "Completa sondaggio",
    // "Set answer"
    setvaluetrigger: "Imposta valore",
    // "Copy answer"
    copyvaluetrigger: "Copia risposta",
    // "Skip to question"
    skiptrigger: "Vai alla domanda",
    // "Run expression"
    runexpressiontrigger: "Esegui espressione",
    // "change visibility (deprecated)"
    visibletrigger: "Cambia visibilità"
  },
  peplaceholder: {
    patternmask: {
      // "Ex.: +1(999)-999-99-99"
      pattern: "Es.: +1(999)-999-99-99"
    },
    datetimemask: {
      // [Auto-translated] "Ex.: mm/dd/yyyy HH:MM:ss"
      pattern: "Es.: mm/gg/aaaa HH:MM:ss"
    },
    currencymask: {
      // "Ex.: $"
      prefix: "Es.: $",
      // "Ex.: USD"
      suffix: "Es.: USD"
    },
    panelbase: {
      // [Auto-translated] "Ex.: 200px"
      questionTitleWidth: "Es.: 200px"
    },
    panellayoutcolumn: {
      // "Ex.: 30%"
      effectiveWidth: "Es.: 30%",
      // "Ex.: 200px"
      questionTitleWidth: "Es.: 200px"
    }
  },
  pehelp: {
    panel: {
      // "A panel ID that is not visible to respondents."
      name: "Un ID pannello che non è visibile ai rispondenti.",
      // [Auto-translated] "Type a panel subtitle."
      description: "Digita un sottotitolo del pannello.",
      // "Use the magic wand icon to set a conditional rule that determines panel visibility."
      visibleIf: "Utilizzare l'icona della bacchetta magica per impostare una regola condizionale che determina la visibilità del pannello.",
      // [Auto-translated] "Use the magic wand icon to set a conditional rule that disables the read-only mode for the panel."
      enableIf: "Utilizzare l'icona della bacchetta magica per impostare una regola condizionale che disabiliti la modalità di sola lettura per il pannello.",
      // "Use the magic wand icon to set a conditional rule that prevents survey submission unless at least one nested question has an answer."
      requiredIf: "Utilizza l'icona della bacchetta magica per impostare una regola condizionale che impedisca l'invio dell'indagine a meno che almeno una domanda nidificata non abbia una risposta.",
      // [Auto-translated] "Applies to all questions within this panel. When set to \"Hidden\", it also hides question descriptions. If you want to override this setting, define title alignment rules for individual questions. The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Top\" by default). "
      questionTitleLocation: "Si applica a tutte le domande all'interno di questo pannello. Se impostato su \"Nascosto\", nasconde anche le descrizioni delle domande. Se desideri ignorare questa impostazione, definisci le regole di allineamento del titolo per le singole domande. L'opzione \"Eredita\" applica l'impostazione a livello di pagina (se impostata) o a livello di sondaggio (\"In alto\" per impostazione predefinita). ",
      // [Auto-translated] "Sets consistent width for question titles when they are aligned to the left of their question boxes. Accepts CSS values (px, %, in, pt, etc.)."
      questionTitleWidth: "Imposta una larghezza coerente per i titoli delle domande quando sono allineati a sinistra delle caselle delle domande. Accetta valori CSS (px, %, in, pt, ecc.).",
      // "Sets the location of an error message in relation to all questions within the panel. The \"Inherit\" option applies the page-level (if set) or survey-level setting."
      questionErrorLocation: "Imposta la posizione di un messaggio di errore in relazione a tutte le domande all'interno del pannello. L'opzione \"Eredita\" applica l'impostazione a livello di pagina (se impostata) o a livello di indagine.",
      // [Auto-translated] "Keeps the original order of questions or randomizes them. The \"Inherit\" option applies the page-level (if set) or survey-level setting."
      questionOrder: "Mantiene l'ordine originale delle domande o le rende casuali. L'opzione \"Eredita\" applica l'impostazione a livello di pagina (se impostata) o a livello di indagine.",
      // "Repositions the panel to the end of a selected page."
      page: "Riposiziona il pannello alla fine di una pagina selezionata.",
      // [Auto-translated] "Adds space or margin between the panel content and the left border of the panel box."
      innerIndent: "Aggiunge spazio o margine tra il contenuto del pannello e il bordo sinistro del riquadro del pannello.",
      // "Unselect to display the panel in one line with the previous question or panel. The setting doesn't apply if the panel is the first element in your form."
      startWithNewLine: "Deselezionare questa opzione per visualizzare il pannello in una riga con la domanda o il pannello precedente. L'impostazione non si applica se il pannello è il primo elemento del modulo.",
      // "Choose from: \"Expanded\" - the panel is displayed in full and can be collapsed; \"Collapsed\" - the panel displays only the title and description and can be expanded; \"Locked\" - the panel is displayed in full and cannot be collapsed."
      state: "Scegli tra: \"Espanso\" - il pannello viene visualizzato per intero e può essere compresso; \"Compresso\" - il pannello visualizza solo il titolo e la descrizione e può essere espanso; \"Bloccato\": il pannello viene visualizzato per intero e non può essere compresso.",
      // [Auto-translated] "Sets the width of the panel in proportion to other survey elements in the same line. Accepts CSS values (px, %, in, pt, etc.)."
      width: "Imposta la larghezza del pannello in proporzione agli altri elementi del rilievo nella stessa linea. Accetta valori CSS (px, %, in, pt, ecc.).",
      // [Auto-translated] "Assigns numbers to questions nested within this panel."
      showQuestionNumbers: "Assegna numeri alle domande nidificate all'interno di questo pannello.",
      // [Auto-translated] "Specifies how many columns this panel spans within the grid layout."
      effectiveColSpan: "Specifica il numero di colonne distribuite dal pannello all'interno del layout della griglia.",
      // [Auto-translated] "This table lets you configure each grid column within the panel. It automatically sets the width percentage for each column based on the maximum number of elements in a row. To customize the grid layout, manually adjust these values and define the title width for all questions in each column."
      gridLayoutColumns: "Questa tabella consente di configurare ogni colonna della griglia all'interno del pannello. Imposta automaticamente la percentuale di larghezza per ogni colonna in base al numero massimo di elementi in una riga. Per personalizzare il layout della griglia, regola manualmente questi valori e definisci la larghezza del titolo per tutte le domande in ogni colonna."
    },
    paneldynamic: {
      // "A panel ID that is not visible to respondents."
      name: "Un ID pannello che non è visibile ai rispondenti.",
      // "Type a panel subtitle."
      description: "Digita un sottotitolo del pannello.",
      // "Use the magic wand icon to set a conditional rule that determines panel visibility."
      visibleIf: "Utilizzare l'icona della bacchetta magica per impostare una regola condizionale che determina la visibilità del pannello.",
      // [Auto-translated] "Use the magic wand icon to set a conditional rule that disables the read-only mode for the panel."
      enableIf: "Utilizzare l'icona della bacchetta magica per impostare una regola condizionale che disabiliti la modalità di sola lettura per il pannello.",
      // "Use the magic wand icon to set a conditional rule that prevents survey submission unless at least one nested question has an answer."
      requiredIf: "Utilizza l'icona della bacchetta magica per impostare una regola condizionale che impedisca l'invio dell'indagine a meno che almeno una domanda nidificata non abbia una risposta.",
      // "Applies to all questions within this dynamic panel. If you want to override this setting, define title alignment rules for individual questions. The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Top\" by default)."
      templateQuestionTitleLocation: "Si applica a tutte le domande all'interno di questo pannello. Se si desidera ignorare questa impostazione, definire le regole di allineamento del titolo per le singole domande. L'opzione \"Eredita\" applica l'impostazione a livello di pagina (se impostata) o a livello di indagine (\"In alto\" per impostazione predefinita).",
      // "Sets consistent width for question titles when they are aligned to the left of their question boxes. Accepts CSS values (px, %, in, pt, etc.)."
      templateQuestionTitleWidth: "Imposta una larghezza coerente per i titoli delle domande quando sono allineati a sinistra delle caselle delle domande. Accetta valori CSS (px, %, in, pt, ecc.).",
      // "Sets the location of an error message in relation to a question with invalid input. Choose between: \"Top\" - an error text is placed at the top of the question box; \"Bottom\" - an error text is placed at the bottom of the question box. The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Top\" by default)."
      templateErrorLocation: "Imposta la posizione di un messaggio di errore in relazione a una domanda con input non valido. Scegli tra: \"In alto\" - un testo di errore viene posizionato nella parte superiore della casella della domanda; \"In basso\": un testo di errore viene inserito nella parte inferiore della casella della domanda. L'opzione \"Eredita\" applica l'impostazione a livello di pagina (se impostata) o a livello di indagine (\"In alto\" per impostazione predefinita).",
      // "Sets the location of an error message in relation to all questions within the panel. The \"Inherit\" option applies the page-level (if set) or survey-level setting."
      errorLocation: "Imposta la posizione di un messaggio di errore in relazione a tutte le domande all'interno del pannello. L'opzione \"Eredita\" applica l'impostazione a livello di pagina (se impostata) o a livello di indagine.",
      // "Repositions the panel to the end of a selected page."
      page: "Riposiziona il pannello alla fine di una pagina selezionata.",
      // [Auto-translated] "Adds space or margin between the panel content and the left border of the panel box."
      indent: "Aggiunge spazio o margine tra il contenuto del pannello e il bordo sinistro della casella del pannello.",
      // "Unselect to display the panel in one line with the previous question or panel. The setting doesn't apply if the panel is the first element in your form."
      startWithNewLine: "Deselezionare questa opzione per visualizzare il pannello in una riga con la domanda o il pannello precedente. L'impostazione non si applica se il pannello è il primo elemento del modulo.",
      // "Choose from: \"Expanded\" - the panel is displayed in full and can be collapsed; \"Collapsed\" - the panel displays only the title and description and can be expanded; \"Locked\" - the panel is displayed in full and cannot be collapsed."
      state: "Scegli tra: \"Espanso\" - il pannello viene visualizzato per intero e può essere compresso; \"Compresso\" - il pannello visualizza solo il titolo e la descrizione e può essere espanso; \"Bloccato\": il pannello viene visualizzato per intero e non può essere compresso.",
      // "Sets the width of the panel in proportion to other survey elements in the same line. Accepts CSS values (px, %, in, pt, etc.)."
      width: "Imposta la larghezza del pannello in proporzione agli altri elementi di rilievo nella stessa linea. Accetta valori CSS (px, %, in, pt, ecc.).",
      // "Type in a template for entry titles. Use {panelIndex} for the entry's general position and {visiblePanelIndex} for its order among visible entries. Insert these placeholders into the pattern to add automatic numbering."
      templateTitle: "Digita un modello per i titoli dei pannelli dinamici. Utilizzare {panelIndex} per la posizione generale del pannello e {visiblePanelIndex} per l'ordine tra i pannelli visibili. Inserire questi segnaposto nel motivo per aggiungere la numerazione automatica.",
      // "Type in a template for tab titles. Use {panelIndex} for an entry's general position and {visiblePanelIndex} for its order among visible entries. Insert these placeholders into the pattern to add automatic numbering."
      templateTabTitle: "Digita un modello per i titoli delle schede. Utilizzate {panelIndex} per la posizione generale di un pannello e {visiblePanelIndex} per l'ordine tra i pannelli visibili. Inserire questi segnaposto nel motivo per aggiungere la numerazione automatica.",
      // "A fallback text for tab titles that applies when the tab title pattern doesn't produce a meaningful value."
      tabTitlePlaceholder: "Testo di fallback per i titoli delle schede che si applica quando il modello del titolo della scheda non produce un valore significativo.",
      // "This setting allows you to control the visibility of individual entries within the dynamic panel. Use the `{panel}` placeholder to reference the current entry in your expression."
      templateVisibleIf: "Questa impostazione consente di controllare la visibilità dei singoli pannelli all'interno del pannello dinamico. Utilizzare il segnaposto '{panel}' per fare riferimento al pannello corrente nell'espressione.",
      // "This setting is automatically inherited by all questions within this dynamic panel. If you want to override this setting, define title alignment rules for individual questions. The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Top\" by default)."
      titleLocation: "Questa impostazione viene ereditata automaticamente da tutte le domande all'interno di questo pannello. Se si desidera ignorare questa impostazione, definire le regole di allineamento del titolo per le singole domande. L'opzione \"Eredita\" applica l'impostazione a livello di pagina (se impostata) o a livello di indagine (\"In alto\" per impostazione predefinita).",
      // "The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Under the panel title\" by default)."
      descriptionLocation: "L'opzione \"Eredita\" applica l'impostazione a livello di pagina (se impostata) o a livello di indagine (\"Sotto il titolo del pannello\" per impostazione predefinita).",
      // "Defines the position of a newly added entry. By default, new entries are added to the end. Select \"Next\" to insert a new entry after the current one."
      newPanelPosition: "Definisce la posizione di un pannello appena aggiunto. Per impostazione predefinita, i nuovi pannelli vengono aggiunti alla fine. Selezionare \"Avanti\" per inserire un nuovo pannello dopo quello corrente.",
      // [Auto-translated] "Duplicates answers from the last entry and assigns them to the next added entry."
      copyDefaultValueFromLastEntry: "Duplica le risposte dell'ultima voce e le assegna alla successiva voce aggiunta.",
      // "Reference a question name to require a user to provide a unique response for this question in each entry."
      keyName: "Fai riferimento al nome di una domanda per richiedere a un utente di fornire una risposta univoca per questa domanda in ogni pannello.",
      // [Auto-translated] "Triggers a confirmation prompt before removing an entry."
      confirmDelete: "Attiva una richiesta di conferma prima di rimuovere una voce."
    },
    matrixdynamic: {
      // [Auto-translated] "Triggers a confirmation prompt before removing a row."
      confirmDelete: "Attiva una richiesta di conferma prima di rimuovere una riga.",
      // [Auto-translated] "Automatically expands the detail section when a new row is added to the matrix."
      detailPanelShowOnAdding: "Espande automaticamente la sezione dei dettagli quando viene aggiunta una nuova riga alla matrice."
    },
    // "Duplicates answers from the last row and assigns them to the next added dynamic row."
    copyDefaultValueFromLastEntry: "Duplica le risposte dell'ultima riga e le assegna alla successiva riga dinamica aggiunta.",
    // [Auto-translated] "This setting allows you to assign a default answer value based on an expression. The expression can include basic calculations - `{q1_id} + {q2_id}`, Boolean expressions, such as `{age} > 60`, and functions: `iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, etc. The value determined by this expression serves as the initial default value that can be overridden by a respondent's manual input."
    defaultValueExpression: "Questa impostazione consente di assegnare un valore di risposta predefinito in base a un'espressione. L'espressione può includere calcoli di base: '{q1_id} + {q2_id}', espressioni booleane, come '{age} > 60' e funzioni: 'iif()', 'today()', 'age()', 'min()', 'max()', 'avg()', ecc. Il valore determinato da questa espressione funge da valore predefinito iniziale che può essere sostituito dall'input manuale di un rispondente.",
    // "Use the magic wand icon to set a conditional rule that determines when a respondent's input is reset to the value based on the \"Default value expression\" or \"Set value expression\" or to the \"Default answer\" value (if either is set)."
    resetValueIf: "Utilizza l'icona della bacchetta magica per impostare una regola condizionale che determini quando l'input di un rispondente viene reimpostato sul valore in base all'\"Espressione del valore predefinito\" o \"Imposta espressione del valore\" o al valore \"Risposta predefinita\" (se uno dei due è impostato).",
    // "Use the magic wand icon to set a conditional rule that determines when to run the \"Set value expression\" and dynamically assign the resulting value as a response."
    setValueIf: "Utilizzare l'icona della bacchetta magica per impostare una regola condizionale che determina quando eseguire l'espressione \"Imposta valore\" e assegnare dinamicamente il valore risultante come risposta.",
    // "Specify an expression that defines the value to be set when the conditions in the \"Set value if\" rule are met. The expression can include basic calculations - `{q1_id} + {q2_id}`, Boolean expressions, such as `{age} > 60`, and functions: `iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, etc. The value determined by this expression can be overridden by a respondent's manual input."
    setValueExpression: "Specificare un'espressione che definisca il valore da impostare quando vengono soddisfatte le condizioni della regola \"Imposta valore se\". L'espressione può includere calcoli di base: '{q1_id} + {q2_id}', espressioni booleane, come '{age} > 60' e funzioni: 'iif()', 'today()', 'age()', 'min()', 'max()', 'avg()', ecc. Il valore determinato da questa espressione può essere sovrascritto dall'input manuale di un rispondente.",
    // "Survey Creator allows you to manually adjust the inline widths of form elements to control the layout. If this doesn't produce the desired outcome, you can enable the grid layout, which structures form elements using a column-based system. To configure layout columns, select a page or panel and use the \"Question Settings\" → \"Grid columns\" table. To adjust how many columns a question spans, select it and set the desired value in the \"Layout\" → \"Column span\" field."
    gridLayoutEnabled: "Survey Creator consente di regolare manualmente le larghezze in linea degli elementi del modulo per controllare il layout. Se questo non produce il risultato desiderato, è possibile abilitare il layout a griglia, che struttura gli elementi di forma utilizzando un sistema basato su colonne. Per configurare le colonne del layout, seleziona una pagina o un pannello e utilizza la tabella \"Impostazioni domanda\" → \"Colonne griglia\". Per regolare il numero di colonne di una domanda, selezionala e imposta il valore desiderato nel campo \"Layout\" → \"Estensione colonne\".",
    question: {
      // "A question ID that is not visible to respondents."
      name: "Un ID domanda che non è visibile ai rispondenti.",
      // "Type a question subtitle."
      description: "Digita il sottotitolo di una domanda.",
      // "Use the magic wand icon to set a conditional rule that determines question visibility."
      visibleIf: "Usa l'icona della bacchetta magica per impostare una regola condizionale che determina la visibilità delle domande.",
      // [Auto-translated] "Use the magic wand icon to set a conditional rule that disables the read-only mode for the question."
      enableIf: "Utilizza l'icona della bacchetta magica per impostare una regola condizionale che disabilita la modalità di sola lettura per la domanda.",
      // "Use the magic wand icon to set a conditional rule that prevents survey advancing or submission unless the question received an answer."
      requiredIf: "Utilizza l'icona della bacchetta magica per impostare una regola condizionale che impedisca l'avanzamento o l'invio dell'indagine a meno che la domanda non riceva una risposta.",
      // [Auto-translated] "Unselect to display the question in one line with the previous question or panel. The setting doesn't apply if the question is the first element in your form."
      startWithNewLine: "Deseleziona questa opzione per visualizzare la domanda in una riga con la domanda o il pannello precedente. L'impostazione non si applica se la domanda è il primo elemento del modulo.",
      // "Repositions the question to the end of a selected page."
      page: "Riposiziona la domanda alla fine di una pagina selezionata.",
      // "Choose from: \"Expanded\" - the question box is displayed in full and can be collapsed; \"Collapsed\" - the question box displays only the title and description and can be expanded; \"Locked\" - the question box is displayed in full and cannot be collapsed."
      state: "Scegli tra: \"Espandito\" - la casella della domanda viene visualizzata per intero e può essere compressa; \"Compresso\": la casella della domanda mostra solo il titolo e la descrizione e può essere espansa; \"Bloccata\": la casella della domanda viene visualizzata per intero e non può essere compressa.",
      // "Overrides title alignment rules defined on a panel, page, or survey level. When set to \"Hidden\", it also hides question descriptions. The \"Inherit\" option applies any higher-level settings (if set) or survey-level setting (\"Top\" by default)."
      titleLocation: "Sostituisce le regole di allineamento del titolo definite a livello di pannello, pagina o rilevamento. L'opzione \"Eredita\" applica tutte le impostazioni di livello superiore (se impostate) o le impostazioni a livello di indagine (\"In alto\" per impostazione predefinita).",
      // "The \"Inherit\" option applies the survey-level setting (\"Under the question title\" by default)."
      descriptionLocation: "L'opzione \"Eredita\" applica l'impostazione a livello di indagine (\"Sotto il titolo della domanda\" per impostazione predefinita).",
      // "Sets the location of an error message in relation to the question with invalid input. Choose between: \"Top\" - an error text is placed at the top of the question box; \"Bottom\" - an error text is placed at the bottom of the question box. The \"Inherit\" option applies the survey-level setting (\"Top\" by default)."
      errorLocation: "Imposta la posizione di un messaggio di errore in relazione alla domanda con input non valido. Scegli tra: \"In alto\" - un testo di errore viene posizionato nella parte superiore della casella della domanda; \"In basso\": un testo di errore viene inserito nella parte inferiore della casella della domanda. L'opzione \"Eredita\" applica l'impostazione a livello di indagine (\"In alto\" per impostazione predefinita).",
      // "Adds space or margin between the question content and the left border of the question box."
      indent: "Aggiunge uno spazio o un margine tra il contenuto della domanda e il bordo sinistro della casella della domanda.",
      // "Sets the width of the question in proportion to other survey elements in the same line. Accepts CSS values (px, %, in, pt, etc.)."
      width: "Imposta la larghezza della domanda in proporzione agli altri elementi del sondaggio nella stessa riga. Accetta valori CSS (px, %, in, pt, ecc.).",
      // "Choose from: \"On lost focus\" - the value is updated when the input field loses focus; \"While typing\" - the value is updated in real-time, as users are typing. The \"Inherit\" option applies the survey-level setting (\"On lost focus\" by default)."
      textUpdateMode: "Scegli tra: \"In caso di perdita di messa a fuoco\" - il valore viene aggiornato quando il campo di immissione perde lo stato attivo; \"Durante la digitazione\": il valore viene aggiornato in tempo reale, mentre gli utenti digitano. L'opzione \"Eredita\" applica l'impostazione a livello di indagine (\"In caso di perdita di focus\" per impostazione predefinita).",
      // [Auto-translated] "You can use any web service as a data source for multiple-choice questions. To populate choice values, enter the URL of the service providing the data."
      url: "È possibile utilizzare qualsiasi servizio Web come origine dati per le domande a scelta multipla. Per popolare i valori di scelta, immettere l'URL del servizio che fornisce i dati.",
      // [Auto-translated] "A comparison operation used to filter the drop-down list."
      searchMode: "Operazione di confronto utilizzata per filtrare l'elenco a discesa.",
      // [Auto-translated] "Long texts in choice options will automatically generate line breaks to fit within the drop-down menu. Unselect if you want the texts to clip."
      textWrapEnabled: "I testi lunghi nelle opzioni di scelta genereranno automaticamente interruzioni di riga per adattarsi al menu a discesa. Deselezionare questa opzione se si desidera che i testi vengano ritagliati.",
      // [Auto-translated] "Specifies how many columns this question spans within the grid layout."
      effectiveColSpan: "Specifica il numero di colonne su cui si estende la domanda all'interno del layout della griglia."
    },
    surveyvalidator: {
      // "Use the magic wand icon to define when the question's value is considered valid."
      expression: "Usa l'icona della bacchetta magica per definire quando il valore della domanda è considerato valido.",
      // [Auto-translated] "Errors block progress until resolved. Warnings highlight issues but allow to continue. Informational notes offer additional context or neutral guidance. When using warnings or informational notes, we recommend enabling immediate validation: \"Survey\" → \"Validation\" → \"Run validation\" → \"After an answer has changed\"."
      notificationType: "Gli errori bloccano l'avanzamento fino a quando non vengono risolti. Gli avvisi evidenziano i problemi ma consentono di continuare. Le note informative offrono un contesto aggiuntivo o una guida neutrale. Quando si utilizzano avvisi o note informative, si consiglia di abilitare la convalida immediata: \"Sondaggio\" → \"Convalida\" → \"Esegui convalida\" → \"Dopo che una risposta è stata modificata\"."
    },
    signaturepad: {
      // "Sets the width of the displayed signature area and the resulting image."
      signatureWidth: "Imposta la larghezza dell'area della firma visualizzata e dell'immagine risultante.",
      // "Sets the height of the displayed signature area and the resulting image."
      signatureHeight: "Imposta l'altezza dell'area della firma visualizzata e dell'immagine risultante.",
      // "Select if you want the signature area to fill all available space within the question box while maintaining the default 3:2 aspect ratio. When custom width and height values are set, the setting will keep the aspect ratio of these dimensions."
      signatureAutoScaleEnabled: "Selezionare questa opzione se si desidera che l'area della firma occupi tutto lo spazio disponibile all'interno della casella della domanda, mantenendo le proporzioni 3:2 predefinite. Quando vengono impostati valori di larghezza e altezza personalizzati, l'impostazione manterrà le proporzioni di queste dimensioni."
    },
    file: {
      // "Specifies the display height of uploaded images in the preview and the actual height of images taken with the camera. In single file upload mode, the display height is limited by the preview area; in multiple file upload mode, it is limited by the thumbnail area."
      imageHeight: "Specifica l'altezza di visualizzazione delle immagini caricate nell'anteprima e l'altezza effettiva delle immagini scattate con la fotocamera. Nella modalità di caricamento di un singolo file, l'altezza di visualizzazione è limitata dall'area di anteprima; Nella modalità di caricamento di più file, è limitato dall'area delle miniature.",
      // "Specifies the display width of uploaded images in the preview and the actual width of images taken with the camera. In single file upload mode, the display width is limited by the preview area; in multiple file upload mode, it is limited by the thumbnail area."
      imageWidth: "Specifica la larghezza di visualizzazione delle immagini caricate nell'anteprima e la larghezza effettiva delle immagini scattate con la fotocamera. Nella modalità di caricamento di un singolo file, la larghezza di visualizzazione è limitata dall'area di anteprima; Nella modalità di caricamento di più file, è limitato dall'area delle miniature.",
      // [Auto-translated] "Displays thumbnail previews for uploaded files when possible. Unselect if you want to show file icons instead."
      allowImagesPreview: "Visualizza le anteprime in miniatura per i file caricati, quando possibile. Deseleziona se desideri mostrare le icone dei file."
    },
    image: {
      // "The \"Auto\" option automatically determines the suitable mode for display - Image, Video, or YouTube - based on the source URL provided."
      contentMode: "L'opzione \"Auto\" determina automaticamente la modalità di visualizzazione adatta - Immagine, Video o YouTube - in base all'URL di origine fornito."
    },
    imagepicker: {
      // [Auto-translated] "Overrides the minimum and maximum height values."
      imageHeight: "Sostituisce i valori di altezza minima e massima.",
      // [Auto-translated] "Overrides the minimum and maximum width values."
      imageWidth: "Sostituisce i valori di larghezza minima e massima.",
      // [Auto-translated] "\"Value\" serves as an item ID used in conditional rules; \"Text\" is displayed to respondents."
      choices: "\"Value\" funge da ID elemento utilizzato nelle regole condizionali; \"Testo\" viene mostrato ai rispondenti.",
      // "Choose between \"Image\" and \"Video\" to set the content mode of the media selector. If \"Image\" is selected, ensure that all options provided are image files in the following formats: JPEG, GIF, PNG, APNG, SVG, BMP, ICO. Similarly, if \"Video\" is selected, ensure that all options are direct links to video files in the following formats: MP4, MOV, WMV, FLV, AVI, MKV. Please note that YouTube links are not supported for video options."
      contentMode: "Scegli tra \"Immagine\" e \"Video\" per impostare la modalità contenuto del selettore multimediale. Se è selezionata l'opzione \"Immagine\", assicurarsi che tutte le opzioni fornite siano file immagine nei seguenti formati: JPEG, GIF, PNG, APNG, SVG, BMP, ICO. Allo stesso modo, se è selezionato \"Video\", assicurarsi che tutte le opzioni siano collegamenti diretti a file video nei seguenti formati: MP4, MOV, WMV, FLV, AVI, MKV. Tieni presente che i link di YouTube non sono supportati per le opzioni video."
    },
    text: {
      // [Auto-translated] "This setting only resizes the input field and doesn't affect the width of the question box. To limit the accepted input length, go to \"Validation\" → \"Maximum character limit\"."
      size: "Questa impostazione ridimensiona solo il campo di input e non influisce sulla larghezza della casella della domanda. Per limitare la lunghezza dell'input accettato, vai su \"Convalida\" → \"Limite massimo di caratteri\"."
    },
    comment: {
      // [Auto-translated] "Sets the number of displayed lines in the input field. If the input takes up more lines, the scroll bar will appear."
      rows: "Imposta il numero di righe visualizzate nel campo di immissione. Se l'input occupa più righe, verrà visualizzata la barra di scorrimento."
    },
    // survey templates
    survey: {
      // "Select if you want to prevent respondents from filling out your survey."
      readOnly: "Seleziona se vuoi impedire ai rispondenti di compilare la tua indagine.",
      // "Sets the location of the progress bar. The \"Auto\" value displays the progress bar above or below the survey header."
      progressBarLocation: "Imposta la posizione della barra di avanzamento. Il valore \"Auto\" visualizza la barra di avanzamento sopra o sotto l'intestazione del rilevamento."
    },
    matrixdropdowncolumn: {
      // "A column ID that is not visible to respondents."
      name: "Un ID colonna che non è visibile ai rispondenti.",
      // "When enabled for a column, a respondent is required to provide a unique response for each question within this column."
      isUnique: "Se abilitata per una colonna, un rispondente deve fornire una risposta univoca per ogni domanda all'interno di questa colonna.",
      // "Sets the number of displayed lines in the input field. If the input takes up more lines, the scroll bar will appear."
      rows: "Imposta il numero di righe visualizzate nel campo di immissione. Se l'input occupa più righe, verrà visualizzata la barra di scorrimento.",
      // "Use the magic wand icon to set a conditional rule that determines column visibility."
      visibleIf: "Utilizzare l'icona della bacchetta magica per impostare una regola condizionale che determini la visibilità della colonna.",
      // [Auto-translated] "Use the magic wand icon to set a conditional rule that disables the read-only mode for the column."
      enableIf: "Utilizzare l'icona della bacchetta magica per impostare una regola condizionale che disabiliti la modalità di sola lettura per la colonna.",
      // "Use the magic wand icon to set a conditional rule that prevents survey submission unless at least one nested question has an answer."
      requiredIf: "Utilizza l'icona della bacchetta magica per impostare una regola condizionale che impedisca l'invio dell'indagine a meno che almeno una domanda nidificata non abbia una risposta.",
      // "When selected, creates an individual column for each choice option."
      showInMultipleColumns: "Quando questa opzione è selezionata, crea una singola colonna per ogni opzione di scelta.",
      // [Auto-translated] "Arranges choice options in a multi-column layout. When set to 0, the options are displayed in a single line. When set to -1, the actual value is inherited from the \"Nested column count\" property of the parent matrix."
      colCount: "Dispone le opzioni di scelta in un layout a più colonne. Se impostato su 0, le opzioni vengono visualizzate in una singola riga. Se impostato su -1, il valore effettivo viene ereditato dalla proprietà \"Conteggio colonne nidificate\" della matrice padre."
    },
    slider: {
      // "The lowest number that users can select."
      min: "Il numero più basso che gli utenti possono selezionare.",
      // "The highest number that users can select."
      max: "Il numero più alto che gli utenti possono selezionare.",
      // "The interval between selectable scale values. For example, a step of 5 will allow users to select 0, 5, 10, etc."
      step: "L'intervallo tra i valori di scala selezionabili. Ad esempio, un passo di 5 consentirà agli utenti di selezionare 0, 5, 10, ecc.",
      // "The minimum distance between the slider thumbs a user can set."
      minRangeLength: "La distanza minima tra i pollici del dispositivo di scorrimento che un utente può impostare.",
      // "The maximum distance between the slider thumbs a user can set."
      maxRangeLength: "La distanza massima tra i pollici del dispositivo di scorrimento che un utente può impostare.",
      // "Specifies how many scale labels to generate. A value of -1 means the number is calculated automatically based on the Min value and Max value."
      labelCount: "Specifica il numero di etichette di scala da generare. Un valore di -1 significa che il numero viene calcolato automaticamente in base al valore Min e al valore Max.",
      // "Use `{0}` as a placeholder for the actual value."
      labelFormat: "Utilizza \"{0}\" come segnaposto per il valore effettivo.",
      // "Allows you to define custom labels at specific values and optionally assign corresponding text to them (e.g., 0 = \"Poor\", 100 = \"Excellent\")."
      customLabels: "Consente di definire etichette personalizzate con valori specifici e di assegnare loro facoltativamente il testo corrispondente (ad esempio, 0 = \"Scarso\", 100 = \"Eccellente\").",
      // "Use `{0}` as a placeholder for the actual value."
      tooltipFormat: "Utilizza \"{0}\" come segnaposto per il valore effettivo.",
      // "Allows users to move one thumb past the other."
      allowSwap: "Consente agli utenti di spostare un pollice oltre l'altro.",
      // [Auto-translated] "Displays a button that clears the selected slider value and sets it to undefined."
      allowClear: "Visualizza un pulsante che cancella il valore del dispositivo di scorrimento selezionato e lo imposta su non definito.",
      // "Defines the slider's minimum value dynamically using an expression. Supports basic calculations (e.g, `{q1_id} + {q2_id}`), Boolean logic (e.g., `{age} > 60`), and functions like `iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, and more."
      minValueExpression: "Definisce il valore minimo del dispositivo di scorrimento in modo dinamico utilizzando un'espressione. Supporta calcoli di base (ad esempio, '{q1_id} + {q2_id}'), logica booleana (ad esempio, '{age} > 60') e funzioni come 'iif()', 'today()', 'age()', 'min()', 'max()', 'avg()' e altro ancora.",
      // "Defines the slider's maximum value dynamically using an expression. Supports basic calculations (e.g, `{q1_id} + {q2_id}`), Boolean logic (e.g., `{age} > 60`), and functions like `iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, and more."
      maxValueExpression: "Definisce il valore massimo del dispositivo di scorrimento in modo dinamico utilizzando un'espressione. Supporta calcoli di base (ad esempio, '{q1_id} + {q2_id}'), logica booleana (ad esempio, '{age} > 60') e funzioni come 'iif()', 'today()', 'age()', 'min()', 'max()', 'avg()' e altro ancora."
    },
    // [Auto-translated] "Makes this choice exclusive. When selected by a user, it will automatically deselect all other options in the question."
    isExclusive: "Rende questa scelta esclusiva. Quando viene selezionato da un utente, deseleziona automaticamente tutte le altre opzioni nella domanda.",
    matrixcolumn: {
      // [Auto-translated] "Makes checkboxes in this column exclusive. When selected by a user, they will automatically deselect all other checkboxes in the same row."
      isExclusive: "Rende esclusive le caselle di controllo in questa colonna. Quando viene selezionato da un utente, deseleziona automaticamente tutte le altre caselle di controllo nella stessa riga."
    },
    // [Auto-translated] "Select if uppercase and lowercase letters in the regular expression must be treated as equivalent."
    caseInsensitive: "Selezionare se le lettere maiuscole e minuscole nell'espressione regolare devono essere considerate equivalenti.",
    // "Choose from: \"Static\" - sets a fixed width; \"Responsive\" - makes the survey occupy the full width of the screen; \"Auto\" - applies either of the two depending on the question types used."
    widthMode: "Scegli tra: \"Statico\" - imposta una larghezza fissa; \"Responsive\" - fa sì che il sondaggio occupi l'intera larghezza dello schermo; \"Auto\": applica uno dei due a seconda del tipo di domanda utilizzato.",
    // "Assign a unique cookie value for your survey. The cookie will be set in a respondent's browser upon survey completion to prevent repetitive survey submissions."
    cookieName: "I cookie impediscono agli utenti di compilare due volte lo stesso sondaggio.",
    // [Auto-translated] "Paste an image link (no size limits) or click the folder icon to browse a file from your computer (up to 64KB)."
    logo: "Incolla un link immagine (senza limiti di dimensione) o fai clic sull'icona della cartella per sfogliare un file dal tuo computer (fino a 64 KB).",
    // [Auto-translated] "Sets a logo width in CSS units (px, %, in, pt, etc.)."
    logoWidth: "Imposta la larghezza del logo in unità CSS (px, %, in, pt e così via).",
    // [Auto-translated] "Sets a logo height in CSS units (px, %, in, pt, etc.)."
    logoHeight: "Imposta l'altezza di un logo in unità CSS (px, %, in, pt e così via).",
    // "Choose from: \"None\" - image maintains its original size; \"Contain\" - image is resized to fit while maintaining its aspect ratio; \"Cover\" - image fills the entire box while maintaining its aspect ratio; \"Fill\" - image is stretched to fill the box without maintaining its aspect ratio."
    logoFit: "Scegli tra: \"Nessuna\" - l'immagine mantiene le sue dimensioni originali; \"Contieni\": l'immagine viene ridimensionata per adattarla mantenendo le sue proporzioni; \"Copertina\": l'immagine riempie l'intera scatola mantenendo le sue proporzioni; \"Riempi\" - l'immagine viene allungata per riempire la casella senza mantenerne le proporzioni.",
    // [Auto-translated] "Select if you want the survey to auto-advance to the next page once a respondent has answered all questions on the current page. This feature won't apply if the last question on the page is open-ended or allows multiple answers."
    autoAdvanceEnabled: "Seleziona questa opzione se desideri che l'indagine passi automaticamente alla pagina successiva una volta che un rispondente ha risposto a tutte le domande della pagina corrente. Questa funzione non si applica se l'ultima domanda della pagina è aperta o consente risposte multiple.",
    // [Auto-translated] "Select if you want the survey to complete automatically after a respondent answers all questions."
    autoAdvanceAllowComplete: "Seleziona questa opzione se desideri che l'indagine venga completata automaticamente dopo che un rispondente ha risposto a tutte le domande.",
    // [Auto-translated] "Sets the visibility of navigation buttons on a page."
    showNavigationButtons: "Imposta la visibilità dei pulsanti di navigazione in una pagina.",
    // [Auto-translated] "Sets the location of navigation buttons on a page."
    navigationButtonsLocation: "Imposta la posizione dei pulsanti di navigazione in una pagina.",
    // [Auto-translated] "Enable the preview page with all or answered questions only."
    showPreviewBeforeComplete: "Abilita la pagina di anteprima con tutte le domande o solo con risposta.",
    // "Applies to all questions within the survey. This setting can be overridden by title alignment rules at lower levels: panel, page, or question. A lower-level setting will override those on a higher level."
    questionTitleLocation: "Si applica a tutte le domande all'interno dell'indagine. Questa impostazione può essere sostituita dalle regole di allineamento del titolo ai livelli inferiori: pannello, pagina o domanda. Un'impostazione di livello inferiore sostituirà quelle di livello superiore.",
    // [Auto-translated] "A symbol or a sequence of symbols indicating that an answer is required."
    requiredMark: "Un simbolo o una sequenza di simboli che indica che è necessaria una risposta.",
    // [Auto-translated] "Enter a number or letter with which you want to start numbering."
    questionStartIndex: "Immettere un numero o una lettera con cui si desidera iniziare la numerazione.",
    // "Sets the location of an error message in relation to the question with invalid input. Choose between: \"Top\" - an error text is placed at the top of the question box; \"Bottom\" - an error text is placed at the bottom of the question box."
    questionErrorLocation: "Imposta la posizione di un messaggio di errore in relazione alla domanda con input non valido. Scegli tra: \"In alto\" - un testo di errore viene posizionato nella parte superiore della casella della domanda; \"In basso\": un testo di errore viene inserito nella parte inferiore della casella della domanda.",
    // [Auto-translated] "Select if you want the first input field on each page ready for text entry."
    autoFocusFirstQuestion: "Selezionare se si desidera che il primo campo di immissione di ogni pagina sia pronto per l'immissione di testo.",
    // "Keeps the original order of questions or randomizes them. The effect of this setting is only visible in the Preview tab."
    questionOrder: "Mantiene l'ordine originale delle domande o le rende casuali. L'effetto di questa impostazione è visibile solo nella scheda Anteprima.",
    // [Auto-translated] "For text entry questions only."
    maxTextLength: "Solo per domande di immissione di testo.",
    // [Auto-translated] "For question comments only."
    maxCommentLength: "Solo per i commenti alle domande.",
    // [Auto-translated] "Sets the number of displayed lines in text areas for question comments. If the input takes up more lines, the scroll bar appears."
    commentAreaRows: "Imposta il numero di righe visualizzate nelle aree di testo per i commenti alle domande. Se l'input occupa più righe, viene visualizzata la barra di scorrimento.",
    // [Auto-translated] "Select if you want question comments and Long Text questions to auto-grow in height based on the entered text length."
    autoGrowComment: "Selezionare questa opzione se si desidera che i commenti alle domande e le domande di testo lungo aumentino automaticamente in altezza in base alla lunghezza del testo inserito.",
    // [Auto-translated] "For question comments and Long Text questions only."
    allowResizeComment: "Solo per i commenti alle domande e le domande a testo lungo.",
    // [Auto-translated] "Custom variables serve as intermediate or auxiliary variables used in form calculations. They take respondent inputs as source values. Each custom variable has a unique name and an expression it's based on."
    calculatedValues: "Le variabili personalizzate fungono da variabili intermedie o ausiliarie utilizzate nei calcoli dei moduli. Accettano gli input dei rispondenti come valori di origine. Ogni variabile personalizzata ha un nome univoco e un'espressione su cui si basa.",
    // [Auto-translated] "Select if you wish the calculated value of the expression to be saved along with survey results."
    includeIntoResult: "Selezionare questa opzione se si desidera che il valore calcolato dell'espressione venga salvato insieme ai risultati del rilevamento.",
    // "A trigger is an event or condition that is based on an expression. Once the expression is evaluated to \"true\", a trigger sets off an action. Such an action can optionally have a target question it affects."
    triggers: "Un trigger è un evento o una condizione basata su un'espressione. Una volta che l'espressione è stata valutata come \"true\", un trigger attiva un'azione. Un'azione di questo tipo può facoltativamente avere un effetto su una domanda di destinazione.",
    // [Auto-translated] "Choose whether or not to clear values for questions hidden by conditional logic and when to do it."
    clearInvisibleValues: "Scegli se cancellare o meno i valori per le domande nascoste dalla logica condizionale e quando farlo.",
    // "Choose from: \"On lost focus\" - the value is updated when the input field loses focus; \"While typing\" - the value is updated in real-time, as users are typing."
    textUpdateMode: "Scegli tra: \"In caso di perdita di messa a fuoco\" - il valore viene aggiornato quando il campo di immissione perde lo stato attivo; \"Durante la digitazione\": il valore viene aggiornato in tempo reale, mentre gli utenti digitano.",
    // [Auto-translated] "The left value serves as a column ID used in conditional rules, the right value is displayed to respondents."
    columns: "Il valore a sinistra funge da ID colonna utilizzato nelle regole condizionali, mentre il valore a destra viene visualizzato dai rispondenti.",
    // "The left value serves as a row ID used in conditional rules, the right value is displayed to respondents."
    rows: "Il valore a sinistra funge da ID riga utilizzato nelle regole condizionali, mentre il valore a destra viene visualizzato dai rispondenti.",
    // [Auto-translated] "Accepts CSS values (px, %, in, pt, etc.)."
    columnMinWidth: "Accetta valori CSS (px, %, in, pt, ecc.).",
    // [Auto-translated] "Accepts CSS values (px, %, in, pt, etc.)."
    rowTitleWidth: "Accetta valori CSS (px, %, in, pt, ecc.).",
    // "Visible only if at least one column displays total values set with \"Aggregation method\" or \"Total value expression\"."
    totalText: "Visibile solo quando almeno una colonna ha il tipo Totale o l'espressione Totale.",
    // "Sets the location of an error message in relation to a cell with invalid input. The \"Inherit\" option applies the setting from the \"Error message alignment\" property."
    cellErrorLocation: "Imposta la posizione di un messaggio di errore in relazione a una cella con input non valido. L'opzione \"Eredita\" applica l'impostazione della proprietà \"Allineamento messaggi di errore\".",
    // "Sets the location of error messages for questions nested in detail sections. The \"Inherit\" option applies the setting from the \"Error message alignment\" property."
    detailErrorLocation: "Imposta la posizione dei messaggi di errore per le domande nidificate nelle sezioni di dettaglio. L'opzione \"Eredita\" applica l'impostazione della proprietà \"Allineamento messaggio di errore\".",
    // "When the \"Prevent duplicate responses\" property is enabled, a respondent attempting to submit a duplicate entry will receive the following error message."
    keyDuplicationError: "Quando la proprietà \"Impedisci risposte duplicate\" è abilitata, un rispondente che tenta di inviare una voce duplicata riceverà il seguente messaggio di errore.",
    // [Auto-translated] "Allows you to calculate total values based on an expression. The expression can include basic calculations (`{q1_id} + {q2_id}`), Boolean expressions (`{age} > 60`) and functions ('iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, etc.)."
    totalExpression: "Consente di calcolare i valori totali in base a un'espressione. L'espressione può includere calcoli di base ('{q1_id} + {q2_id}'), espressioni booleane ('{age} > 60') e funzioni ('iif()', 'today()', 'age()', 'min()', 'max()', 'avg()', ecc.).",
    // "Reference a column ID to require a user to provide a unique response for each question within the specified column."
    keyName: "Se la colonna specificata contiene valori identici, il sondaggio produce l'errore \"Valore chiave non univoco\".",
    // "Type a subtitle."
    description: "Digita un sottotitolo.",
    // [Auto-translated] "Choose a language to begin creating your survey. To add a translation, switch to a new language and translate the original text here or in the Translations tab."
    locale: "Scegli una lingua per iniziare a creare la tua indagine. Per aggiungere una traduzione, passa a una nuova lingua e traduci il testo originale qui o nella scheda Traduzioni.",
    // "Sets the location of a detail section in relation to a row. Choose from: \"None\" - no detail section is added; \"Under the row\" - a detail section is placed under each row of the matrix; \"Under the row, display one detail section only\" - a detail section is displayed under a single row only, the remaining sections are collapsed."
    detailPanelMode: "Imposta la posizione di una sezione di dettagli in relazione a una riga. Scegli tra: \"Nessuna\" - non viene aggiunta alcuna espansione; \"Sotto la riga\": un'espansione di riga viene posizionata sotto ogni riga della matrice; \"Sotto la riga, visualizza solo un'espansione di riga\": un'espansione viene visualizzata solo sotto una singola riga, le espansioni di riga rimanenti vengono compresse.",
    // "Choose from: \"None\" - image maintains its original size; \"Contain\" - image is resized to fit while maintaining its aspect ratio; \"Cover\" - image fills the entire box while maintaining its aspect ratio; \"Fill\" - image is stretched to fill the box without maintaining its aspect ratio."
    imageFit: "Scegli tra: \"Nessuna\" - l'immagine mantiene le sue dimensioni originali; \"Contieni\": l'immagine viene ridimensionata per adattarla mantenendo le sue proporzioni; \"Copertina\": l'immagine riempie l'intera scatola mantenendo le sue proporzioni; \"Riempi\" - l'immagine viene allungata per riempire la casella senza mantenerne le proporzioni.",
    // "The \"Inherit\" option applies a survey-level setting (\"Disabled\" by default)."
    autoGrow: "Aumenta gradualmente l'altezza del campo di immissione man mano che i dati vengono inseriti. Sostituisce l'impostazione \"Altezza campo di immissione (in righe)\".",
    // [Auto-translated] "The \"Inherit\" option applies a survey-level setting (\"Enabled\" by default)."
    allowResize: "L'opzione \"Eredita\" applica un'impostazione a livello di indagine (\"Abilitato\" per impostazione predefinita).",
    // [Auto-translated] "A time interval in seconds after which the survey auto-advances to the \"Thank You\" page. When set to 0, counts the time spent on the survey."
    timeLimit: "Un intervallo di tempo in secondi dopo il quale l'indagine avanza automaticamente alla pagina \"Grazie\". Se impostato su 0, conta il tempo trascorso nell'indagine.",
    // [Auto-translated] "A time interval in seconds after which the survey auto-advances to the next page. Hides the \"Previous\" navigation button. When set to 0, counts the time spent on the current page."
    timeLimitPerPage: "Un intervallo di tempo in secondi dopo il quale l'indagine passa automaticamente alla pagina successiva. Nasconde il pulsante di navigazione \"Precedente\". Se impostato su 0, conta il tempo trascorso sulla pagina corrente.",
    // [Auto-translated] "Enable this option to trigger validation when a user focuses on an empty input field and then leaves it without making any changes."
    validateVisitedEmptyFields: "Abilitare questa opzione per attivare la convalida quando un utente si concentra su un campo di input vuoto e poi lo abbandona senza apportare modifiche.",
    page: {
      // "A page ID that is not visible to respondents."
      name: "Un ID pagina che non è visibile ai rispondenti.",
      // "Type a page subtitle."
      description: "Digita un sottotitolo della pagina.",
      // "A caption displayed on a navigation button in the progress bar or table of contents (TOC). If you leave this field empty, the navigation button will use the page title or page name. To enable the progress bar or TOC, go to \"Survey\" → \"Navigation\"."
      navigationTitle: "Didascalia visualizzata su un pulsante di navigazione nella barra di avanzamento o nel sommario. Se si lascia vuoto questo campo, il pulsante di navigazione utilizzerà il titolo o il nome della pagina. Per abilitare la barra di avanzamento o il sommario, vai su \"Sondaggio\" → \"Navigazione\".",
      // "A time interval in seconds after which the survey auto-advances to the next page. Hides the \"Previous\" navigation button. When set to 0, counts the time spent on the current page."
      timeLimit: "Un intervallo di tempo in secondi dopo il quale il rilevamento avanza automaticamente alla pagina successiva.",
      // "Use the magic wand icon to set a conditional rule that determines page visibility."
      visibleIf: "Usa l'icona della bacchetta magica per impostare una regola condizionale che determina la visibilità della pagina.",
      // [Auto-translated] "Use the magic wand icon to set a conditional rule that disables the read-only mode for the page."
      enableIf: "Utilizzare l'icona della bacchetta magica per impostare una regola condizionale che disabilita la modalità di sola lettura per la pagina.",
      // "Use the magic wand icon to set a conditional rule that prevents survey submission unless at least one nested question has an answer."
      requiredIf: "Utilizza l'icona della bacchetta magica per impostare una regola condizionale che impedisca l'invio dell'indagine a meno che almeno una domanda nidificata non abbia una risposta.",
      // "Applies to all questions within this page. When set to \"Hidden\", it also hides question descriptions. If you want to override this setting, define title alignment rules for individual questions or panels. The \"Inherit\" option applies the survey-level setting (\"Top\" by default)."
      questionTitleLocation: "Si applica a tutte le domande all'interno di questa pagina. Se si desidera ignorare questa impostazione, definire le regole di allineamento dei titoli per le singole domande o pannelli. L'opzione \"Eredita\" applica l'impostazione a livello di indagine (\"In alto\" per impostazione predefinita).",
      // [Auto-translated] "Sets consistent width for question titles when they are aligned to the left of their question boxes. Accepts CSS values (px, %, in, pt, etc.)."
      questionTitleWidth: "Imposta una larghezza coerente per i titoli delle domande quando sono allineati a sinistra delle caselle delle domande. Accetta valori CSS (px, %, in, pt, ecc.).",
      // "Sets the location of an error message in relation to the question with invalid input. Choose between: \"Top\" - an error text is placed at the top of the question box; \"Bottom\" - an error text is placed at the bottom of the question box. The \"Inherit\" option applies the survey-level setting (\"Top\" by default)."
      questionErrorLocation: "Imposta la posizione di un messaggio di errore in relazione alla domanda con input non valido. Scegli tra: \"In alto\" - un testo di errore viene posizionato nella parte superiore della casella della domanda; \"In basso\": un testo di errore viene inserito nella parte inferiore della casella della domanda. L'opzione \"Eredita\" applica l'impostazione a livello di indagine (\"In alto\" per impostazione predefinita).",
      // "Keeps the original order of questions or randomizes them. The \"Inherit\" option applies the survey-level setting (\"Original\" by default). The effect of this setting is only visible in the Preview tab."
      questionOrder: "Mantiene l'ordine originale delle domande o le rende casuali. L'opzione \"Eredita\" applica l'impostazione a livello di indagine (\"Originale\" per impostazione predefinita). L'effetto di questa impostazione è visibile solo nella scheda Anteprima.",
      // "Sets the visibility of navigation buttons on the page. The \"Inherit\" option applies the survey-level setting, which defaults to \"Visible\"."
      showNavigationButtons: "Imposta la visibilità dei pulsanti di navigazione nella pagina. L'opzione \"Eredita\" applica l'impostazione a livello di indagine, che per impostazione predefinita è \"Visibile\".",
      // [Auto-translated] "This table lets you configure each grid column on the page. It automatically sets the width percentage for each column based on the maximum number of elements in a row. To customize the grid layout, manually adjust these values and define the title width for all questions in each column."
      gridLayoutColumns: "Questa tabella consente di configurare ogni colonna della griglia nella pagina. Imposta automaticamente la percentuale di larghezza per ogni colonna in base al numero massimo di elementi in una riga. Per personalizzare il layout della griglia, regola manualmente questi valori e definisci la larghezza del titolo per tutte le domande in ogni colonna."
    },
    // [Auto-translated] "Sets the location of a timer on a page."
    timerLocation: "Imposta la posizione di un timer su una pagina.",
    // "Choose from: \"Locked\" - users cannot expand or collapse entries; \"Collapse all\" - all entries start in a collapsed state; \"Expand all\" - all entries start in an expanded state; \"First expanded\" - only the first entry is initially expanded. Applies if \"Entry display mode\" is set to \"List\" and the \"Entry title pattern\" property is specified."
    panelsState: "Scegli tra: \"Bloccato\" - gli utenti non possono espandere o comprimere i pannelli; \"Comprimi tutto\": tutti i pannelli iniziano in uno stato compresso; \"Espandi tutto\": tutti i pannelli iniziano in uno stato espanso; \"Prima espansa\": inizialmente viene espanso solo il primo pannello.",
    // [Auto-translated] "Enter a shared property name within the array of objects that contains the image or video file URLs you want to display in the choice list."
    imageLinkName: "Immettere un nome di proprietà condivisa all'interno della matrice di oggetti che contiene gli URL del file di immagine o video che si desidera visualizzare nell'elenco di scelta.",
    // "The left value serves as an item ID used in conditional rules, the right value is displayed to respondents."
    choices: "Il valore a sinistra funge da ID elemento utilizzato nelle regole condizionali, mentre il valore a destra viene visualizzato dai rispondenti.",
    // [Auto-translated] "Type a user-friendly title to display."
    title: "Digitare un titolo descrittivo da visualizzare.",
    // [Auto-translated] "Ensures that users won't complete the survey until files are uploaded."
    waitForUpload: "Garantisce che gli utenti non completino l'indagine fino a quando i file non vengono caricati.",
    // [Auto-translated] "Accepts CSS values (px, %, in, pt, etc.)."
    minWidth: "Accetta valori CSS (px, %, in, pt, ecc.).",
    // [Auto-translated] "Accepts CSS values (px, %, in, pt, etc.)."
    maxWidth: "Accetta valori CSS (px, %, in, pt, ecc.).",
    // "Accepts CSS values (px, %, in, pt, etc.)."
    width: "Accetta valori CSS (px, %, in, pt, ecc.).",
    // "A join identifier is a custom key that you can assign to several questions to link them together and sync their values. These values will be merged into a single array or object and stored in survey results using the key as the property name."
    valueName: "Se non si imposta questa proprietà, la risposta sarà memorizzata in un campo specificato dalla proprietà Nome.",
    // [Auto-translated] "A value displayed in HTML questions and in the dynamic titles and descriptions of survey elements when the question value is empty."
    defaultDisplayValue: "Un valore visualizzato nelle domande HTML e nei titoli dinamici e nelle descrizioni degli elementi dell'indagine quando il valore della domanda è vuoto.",
    // [Auto-translated] "In single- and multiple-selection question types, each choice option has an ID and display value. When selected, this setting shows a display value instead of an ID value in HTML questions and dynamic titles and descriptions of survey elements."
    useDisplayValuesInDynamicTexts: "Nei tipi di domande a selezione singola e multipla, ogni opzione di scelta ha un ID e un valore di visualizzazione. Quando questa opzione è selezionata, questa impostazione mostra un valore di visualizzazione anziché un valore ID nelle domande HTML e nei titoli dinamici e nelle descrizioni degli elementi dell'indagine.",
    // "Choose whether or not to clear question values hidden by conditional logic and when to do it. The \"Inherit\" option applies the survey-level setting (\"Upon survey completion\" by default)."
    clearIfInvisible: "Scegli se cancellare o meno i valori delle domande nascosti dalla logica condizionale e quando farlo. L'opzione \"Eredita\" applica l'impostazione a livello di indagine (\"Al completamento dell'indagine\" per impostazione predefinita).",
    // "Choose from: \"All\" - copies all choice options from the selected question; \"Selected\" - dynamically copies only selected choice options; \"Unselected\" - dynamically copies only unselected choice options. The \"None\" and \"Other\" options are copied by default if enabled in the source question."
    choicesFromQuestionMode: "Scegli tra: \"Tutte\" - copia tutte le opzioni di scelta dalla domanda selezionata; \"Selezionato\" - copia dinamicamente solo le opzioni di scelta selezionate; \"Non selezionato\" - copia dinamicamente solo le opzioni di scelta non selezionate. Le opzioni \"Nessuna\" e \"Altro\" vengono copiate per impostazione predefinita se abilitate nella domanda di origine.",
    // [Auto-translated] "In single- and multiple-selection question types, each choice option has an ID and display value. This setting specifies which matrix column or panel question should provide the IDs."
    choiceValuesFromQuestion: "Nei tipi di domande a selezione singola e multipla, ogni opzione di scelta ha un ID e un valore visualizzato. Questa impostazione specifica quale colonna matrice o domanda del pannello deve fornire gli ID.",
    // [Auto-translated] "In single- and multiple-selection question types, each choice option has an ID and display value. This setting specifies which matrix column or panel question should provide the display texts."
    choiceTextsFromQuestion: "Nei tipi di domande a selezione singola e multipla, ogni opzione di scelta ha un ID e un valore visualizzato. Questa impostazione specifica quale colonna matrice o domanda del pannello deve fornire i testi visualizzati.",
    // [Auto-translated] "Select to let respondents add their own choices if the desired option isn't available in the dropdown. Custom choices will only be stored temporarily for the duration of the current browser session."
    allowCustomChoices: "Seleziona questa opzione per consentire ai rispondenti di aggiungere le proprie scelte se l'opzione desiderata non è disponibile nel menu a discesa. Le scelte personalizzate verranno memorizzate solo temporaneamente per la durata della sessione corrente del browser.",
    // [Auto-translated] "When selected, users can include additional input in a separate comment box."
    showOtherItem: "Quando questa opzione è selezionata, gli utenti possono includere input aggiuntivi in una casella di commento separata.",
    // "Displays each special choice option (\"None\", \"Other\", \"Select All\") on a new line, even when using a multiple-column layout."
    separateSpecialChoices: "Visualizza ogni opzione di scelta speciale (\"Nessuna\", \"Altro\", \"Seleziona tutto\") su una nuova riga, anche quando si utilizza un layout a più colonne.",
    // [Auto-translated] "Specify the location within the service dataset where the target array of objects is located. Leave empty if the URL already points to the array."
    path: "Specificare la posizione all'interno del set di dati del servizio in cui si trova la matrice di oggetti di destinazione. Lasciare vuoto se l'URL punta già all'array.",
    choicesbyurl: {
      // "Enter a uniform property name within the array of objects whose value will be stored as a response in survey results."
      valueName: " "
    },
    // [Auto-translated] "Enter a uniform property name within the array of objects that contains the values you want to display in the choice list."
    titleName: "Immettere un nome di proprietà uniforme all'interno della matrice di oggetti contenente i valori che si desidera visualizzare nell'elenco di scelte.",
    // [Auto-translated] "Select to allow the service to return an empty response or array."
    allowEmptyResponse: "Selezionare questa opzione per consentire al servizio di restituire una risposta o una matrice vuota.",
    // [Auto-translated] "Use the magic wand icon to set a conditional rule that determines the visibility of all choice options."
    choicesVisibleIf: "Utilizzare l'icona della bacchetta magica per impostare una regola condizionale che determina la visibilità di tutte le opzioni di scelta.",
    // [Auto-translated] "The left value serves as an item ID used in conditional rules, the right value is displayed to respondents."
    rateValues: "Il valore a sinistra funge da ID elemento utilizzato nelle regole condizionali, mentre il valore a destra viene visualizzato dai rispondenti.",
    rating: {
      // "\"Auto\" selects between the \"Buttons\" and \"Dropdown\" modes based on the available width. When the width is insufficient to display buttons, the question displays a dropdown."
      displayMode: "\"Auto\" seleziona tra le modalità \"Pulsanti\" e \"Menu a discesa\" in base alla larghezza disponibile. Quando la larghezza è insufficiente per visualizzare i pulsanti, la domanda visualizza un menu a discesa."
    },
    // [Auto-translated] "Allows you to connect questions that produce results in different formats. When such questions are linked together using a join identifier, this shared property stores selected question values."
    valuePropertyName: "Consente di collegare domande che producono risultati in formati diversi. Quando tali domande sono collegate tra loro utilizzando un identificatore di join, questa proprietà condivisa memorizza i valori delle domande selezionate.",
    // [Auto-translated] "Select if you want to update the drop-down menu contents to match the search query that a user is typing in the input field."
    searchEnabled: "Selezionare questa opzione se si desidera aggiornare il contenuto del menu a discesa in modo che corrisponda alla query di ricerca digitata dall'utente nel campo di immissione.",
    // [Auto-translated] "A value to save in survey results when respondents give a positive answer."
    valueTrue: "Un valore da salvare nei risultati dell'indagine quando i rispondenti danno una risposta positiva.",
    // [Auto-translated] "A value to save in survey results when respondents give a negative answer."
    valueFalse: "Un valore da salvare nei risultati dell'indagine quando i rispondenti danno una risposta negativa.",
    // [Auto-translated] "It's not recommended that you disable this option as it overrides the Preview image and makes it hard for a user to understand whether the files have been uploaded."
    showPreview: "Non è consigliabile disabilitare questa opzione in quanto sostituisce l'immagine di anteprima e rende difficile per un utente capire se i file sono stati caricati.",
    // [Auto-translated] "Triggers a prompt asking to confirm the file deletion."
    needConfirmRemoveFile: "Attiva un prompt che chiede di confermare l'eliminazione del file.",
    // [Auto-translated] "Enable to rank only selected choices. Users will drag selected items from the choice list to order them within the ranking area."
    selectToRankEnabled: "Abilita per classificare solo le scelte selezionate. Gli utenti trascineranno gli elementi selezionati dall'elenco di scelta per ordinarli all'interno dell'area di classificazione.",
    // [Auto-translated] "Enter a list of choices that will be suggested to the respondent during input."
    dataList: "Inserisci un elenco di scelte che verranno suggerite al rispondente durante l'inserimento.",
    // [Auto-translated] "The setting only resizes the input fields and doesn't affect the width of the question box."
    inputSize: "L'impostazione ridimensiona solo i campi di input e non influisce sulla larghezza della casella della domanda.",
    // [Auto-translated] "Sets consistent width for all item labels. Accepts CSS values (px, %, in, pt, etc.)."
    itemTitleWidth: "Imposta una larghezza uniforme per tutte le etichette degli articoli. Accetta valori CSS (px, %, in, pt, ecc.).",
    // "Select how to align input value within the field. The default setting \"Auto\" aligns the input value to the right if currency or numeric masking is applied and to the left if not."
    inputTextAlignment: "Selezionare la modalità di allineamento del valore di input all'interno del campo. L'impostazione predefinita \"Auto\" allinea il valore di input a destra se viene applicata una maschera di valuta o numerica e a sinistra in caso contrario.",
    // [Auto-translated] "Serves as a substitute when the image cannot be displayed on a user's device and for accessibility purposes."
    altText: "Funge da sostituto quando l'immagine non può essere visualizzata sul dispositivo di un utente e per motivi di accessibilità.",
    // "Defines the color of the selected emoji when the Rating icon type is set to \"Smileys\". Choose between: \"Default\" - the selected emoji appears in default survey color; \"Scale\" - the selected emoji inherits color from the rating scale."
    rateColorMode: "Definisce il colore dell'emoji selezionata quando il tipo di icona Valutazione è impostato su \"Smiley\". Scegli tra: \"Predefinito\" - l'emoji selezionata appare nel colore predefinito del sondaggio; \"Scala\": l'emoji selezionata eredita il colore dalla scala di valutazione.",
    expression: {
      // "An expression ID that is not visible to respondents."
      name: "Un ID espressione che non è visibile ai rispondenti.",
      // "Type an expression subtitle."
      description: "Digitare un sottotitolo dell'espressione.",
      // "An expression can include basic calculations (`{q1_id} + {q2_id}`), conditions (`{age} > 60`), and functions ('iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, etc.)."
      expression: "Un'espressione può includere calcoli di base ('{q1_id} + {q2_id}'), condizioni ('{età} > 60') e funzioni ('iif()', 'oggi()', 'età()', 'min()', 'max()', 'avg()' e così via)."
    },
    // "Select to store the \"Other\" option value as a separate property in survey results."
    storeOthersAsComment: "Selezionare questa opzione per memorizzare il valore dell'opzione \"Altro\" come proprietà separata nei risultati del rilevamento.",
    // "Use {0} as a placeholder for the actual value."
    format: "Usa {0} come segnaposto per il valore effettivo.",
    // "Refer to the [accept](https://www.w3schools.com/tags/att_input_accept.asp) attribute description for more information."
    acceptedTypes: "Per ulteriori informazioni, consultare la descrizione dell'attributo [accept](https://www.w3schools.com/tags/att_input_accept.asp).",
    // "Arranges choice options in a multi-column layout. When set to 0, the options are displayed in a single line. Applies only to columns with \"Cell input type\" set to Radio Button Group or Checkboxes."
    columnColCount: "Applicabile solo ai tipi di cella Opzione multipla e Casella di controllo.",
    // "Select the data type that the user's browser can retrieve. This data is sourced either from past values entered by the user or from pre-configured values if any have been saved by the user for autocompletion."
    autocomplete: "Per ulteriori informazioni, consultare la descrizione dell'attributo [autocomplete](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete).",
    // "Applies when \"File source type\" is \"Local file\" or when camera is unavailable"
    filePlaceholder: "Si applica quando \"Tipo di origine\" è \"File locali\" o quando la fotocamera non è disponibile",
    // "Applies when \"File source type\" is \"Camera\"."
    photoPlaceholder: "Si applica quando \"Tipo di sorgente\" è \"Fotocamera\".",
    // "Applies when \"File source type\" is \"Local file or camera\"."
    fileOrPhotoPlaceholder: "Si applica quando \"Tipo di origine\" è \"File locali o fotocamera\".",
    // "Arranges choice options in a multi-column layout. When set to 0, the options are displayed in a single line."
    colCount: "Dispone le opzioni di scelta in un layout a più colonne. Se impostato su 0, le opzioni vengono visualizzate in una singola riga.",
    masksettings: {
      // "Select if you want to store the question value with an applied mask in survey results."
      saveMaskedValue: "Selezionare questa opzione se si desidera memorizzare il valore della domanda con una maschera applicata nei risultati dell'indagine."
    },
    patternmask: {
      // "The pattern can contain string literals and the following placeholders: `9` - for a digit; `a` - for an upper- or lower-case letter; `#` - for a digit or an upper- or lower-case letter. Use backslash `\\` to escape a character."
      pattern: "Il modello può contenere valori letterali stringa e i segnaposto seguenti: '9' - per una cifra; 'a' - per una lettera maiuscola o minuscola; '#' - per una cifra o una lettera maiuscola o minuscola. Usa la barra rovesciata '\\' per eseguire l'escape di un carattere."
    },
    datetimemask: {
      // "The pattern can contain separator characters and the following placeholders:<br>`m` - Month number.<br>`mm` - Month number, with leading zero for single-digit values.<br>`d` - Day of the month.<br>`dd` - Day of the month, with leading zero for single-digit values.<br>`yy` - The last two digits of the year.<br>`yyyy` - Four-digit year.<br>`H` - Hours in 24-hour format.<br>`HH` - Hours in 24-hour format, with leading zero for single-digit values.<br>`h` - Hours in 12-hour format.<br>`hh` - Hours in 12-hour format, with leading zero for single-digit values.<br>`MM` - Minutes.<br>`ss` - Seconds.<br>`TT` - 12-hour clock period in upper case (AM/PM).<br>`tt` - 12-hour clock period in lower case (am/pm)."
      pattern: "Il modello può contenere caratteri separatori e i seguenti segnaposto:<br>'m' - Numero del mese.<br>'mm' - Numero del mese, con zero iniziale per i valori a una cifra. <br>'d' - Giorno del mese. <br>'dd' - Giorno del mese, con zero iniziale per i valori a una cifra. <br>'yy' - Le ultime due cifre dell'anno. <br>'yyyy' - Anno a quattro cifre. <br>'H' - Ore nel formato 24 ore. <br>'HH' - Ore nel formato 24 ore, con zero iniziale per i valori a una cifra. <br>'h' - Ore nel formato 12 ore. <br>'hh' - Ore nel formato 12 ore, con zero iniziale per i valori a una cifra. <br>«MM» - Processo verbale. <br>'ss' - Secondi. <br>'TT' - Periodo di 12 ore in maiuscolo (AM/PM). <br>'TT' - Periodo di 12 ore in minuscolo (AM/PM)."
    },
    numericmask: {
      // "A symbol used to separate the fractional part from the integer part of a displayed number."
      decimalSeparator: "Simbolo utilizzato per separare la parte frazionaria dalla parte intera di un numero visualizzato.",
      // "A symbol used to separate the digits of a large number into groups of three."
      thousandsSeparator: "Simbolo utilizzato per separare le cifre di un numero elevato in gruppi di tre.",
      // "Limits how many digits to retain after the decimal point for a displayed number."
      precision: "Limita il numero di cifre da mantenere dopo la virgola decimale per un numero visualizzato."
    },
    currencymask: {
      // "One or several symbols to be displayed before the value."
      prefix: "Uno o più simboli da visualizzare prima del valore.",
      // "One or several symbols to be displayed after the value."
      suffix: "Uno o più simboli da visualizzare dopo il valore."
    },
    theme: {
      // "This setting applies only to questions outside of a panel."
      isPanelless: "Questa impostazione si applica solo alle domande esterne a un pannello.",
      // "Sets a supplementary color that highlights key survey elements."
      primaryColor: "Imposta un colore supplementare che evidenzia gli elementi chiave del rilievo.",
      // "Adjusts the transparency of panels and question boxes relative to the survey background."
      panelBackgroundTransparency: "Regola la trasparenza dei pannelli e delle caselle delle domande rispetto allo sfondo del sondaggio.",
      // "Adjusts the transparency of input elements relative to the survey background."
      questionBackgroundTransparency: "Regola la trasparenza degli elementi di input rispetto allo sfondo del rilevamento.",
      // "Sets the corner radius for all rectangular elements. Enable the Advanced Mode if you want to set individual corner radius values for input elements or panels and question boxes."
      cornerRadius: "Imposta il raggio dell'angolo per tutti gli elementi rettangolari. Abilitare la Modalità avanzata se si desidera impostare i valori del raggio d'angolo individuali per gli elementi di input o i pannelli e le caselle delle domande.",
      // "Sets the main background color of the survey."
      "--sjs-general-backcolor-dim": "Imposta il colore di sfondo principale del rilevamento."
    },
    header: {
      // "The \"Same as container\" option auto-adjusts the header content area width to fit into the HTML element the survey is placed in."
      inheritWidthFrom: "L'opzione \"Uguale al contenitore\" regola automaticamente la larghezza dell'area del contenuto dell'intestazione per adattarla all'elemento HTML in cui è posizionato il sondaggio.",
      // [Auto-translated] "The width of the header area that contains the survey title and description, measured in pixels."
      textAreaWidth: "La larghezza dell'area dell'intestazione che contiene il titolo e la descrizione del sondaggio, misurata in pixel.",
      // [Auto-translated] "When enabled, the top of the survey overlays the bottom of the header."
      overlapEnabled: "Se abilitata, la parte superiore del sondaggio si sovrappone alla parte inferiore dell'intestazione.",
      // [Auto-translated] "When set to 0, the height is calculated automatically to accommodate the header's content."
      mobileHeight: "Se impostata su 0, l'altezza viene calcolata automaticamente per adattarsi al contenuto dell'intestazione."
    },
    // "The \"Same as container\" option auto-adjusts the progress bar area width to fit into the HTML element the survey is placed in."
    progressBarInheritWidthFrom: "L'opzione \"Uguale al contenitore\" regola automaticamente la larghezza dell'area della barra di avanzamento per adattarla all'elemento HTML in cui è posizionato il sondaggio.",
    // "Used when the 'Survey layout' is set to 'Single input field per page'. In this layout, the matrix is split so that each input field appears on a separate page. Use the {rowIndex} placeholder to insert auto numbering, {rowTitle} or {rowName} to reference the row's title or ID, and {row.columnid} to include the value of a specific matrix column."
    singleInputTitleTemplate: "Utilizzato quando il \"Layout indagine\" è impostato su \"Singolo campo di input per pagina\". In questo layout, la matrice viene suddivisa in modo che ogni campo di input appaia su una pagina separata. Utilizza il segnaposto {rowIndex} per inserire la numerazione automatica, {rowTitle} o {rowName} per fare riferimento al titolo o all'ID della riga e {row.columnid} per includere il valore di una colonna matrice specifica."
  },
  // Properties
  p: {
    title: {
      // "title"
      name: "Titolo",
      // "Leave it empty, if it is the same as 'Name'"
      title: "Lascialo vuoto, se è uguale a 'Nome'"
    },
    // "Allow multiple selection"
    multiSelect: "Consenti selezione multipla",
    // "Show image and video captions"
    showLabel: "Mostra le didascalie delle immagini",
    // [Auto-translated] "Swap the order of Yes and No"
    swapOrder: "Scambia l'ordine di Sì e No",
    // [Auto-translated] "Value"
    value: "Valore",
    // [Auto-translated] "Tab alignment"
    tabAlign: "Allineamento delle tabulazioni",
    // [Auto-translated] "File source type"
    sourceType: "Tipo di origine file",
    // [Auto-translated] "Fit to container"
    fitToContainer: "Adatto al contenitore",
    // [Auto-translated] "Set value expression"
    setValueExpression: "Espressione del valore impostato",
    // "Description"
    description: "Descrizione", // Auto-generated string
    // "Logo fit"
    logoFit: "Adattamento del logo",
    // "Pages"
    pages: "Pagine", // Auto-generated string
    // [Auto-translated] "Questions"
    questions: "Domande", // Auto-generated string
    // "Triggers"
    triggers: "Triggers",
    // "Custom variables"
    calculatedValues: "Valori calcolati",
    // [Auto-translated] "Survey id"
    surveyId: "ID sondaggio", // Auto-generated string
    // [Auto-translated] "Survey post id"
    surveyPostId: "ID post sondaggio", // Auto-generated string
    // [Auto-translated] "Survey show data saving"
    surveyShowDataSaving: "Il sondaggio mostra il salvataggio dei dati", // Auto-generated string
    // "Question description alignment"
    questionDescriptionLocation: "Posizione descrizione domanda",
    // "Progress bar type"
    progressBarType: "Tipo barra di avanzamento", // Auto-generated string
    // [Auto-translated] "Show table of contents (TOC)"
    showTOC: "Mostra l'indice (TOC)",
    // [Auto-translated] "TOC alignment"
    tocLocation: "Allineamento TOC",
    // "Question title pattern"
    questionTitlePattern: "Modello titolo della domanda", // Auto-generated string
    // "Survey width mode"
    widthMode: "Larghezza sondaggio",
    // [Auto-translated] "Show brand info"
    showBrandInfo: "Mostra informazioni sul marchio", // Auto-generated string
    // "Use display values in dynamic texts"
    useDisplayValuesInDynamicTexts: "Usa Valori di Riferimento nel titolo",
    // "Visible if"
    visibleIf: "Visibile Se", // Auto-generated string
    // "Default value expression"
    defaultValueExpression: "Espressione valore predefinito",
    // "Required if"
    requiredIf: "Obbligatoria Se", // Auto-generated string
    // [Auto-translated] "Reset value if"
    resetValueIf: "Reimposta valore se",
    // [Auto-translated] "Set value if"
    setValueIf: "Imposta valore se",
    // "Validation rules"
    validators: "Validatori",
    // "Bindings"
    bindings: "Collegamenti", // Auto-generated string
    // [Auto-translated] "Render as"
    renderAs: "Esegui il rendering come", // Auto-generated string
    // [Auto-translated] "Attach original items"
    attachOriginalItems: "Allega elementi originali", // Auto-generated string
    // "Choices"
    choices: "Scelte",
    // [Auto-translated] "Choices by url"
    choicesByUrl: "Scelte per url", // Auto-generated string
    // "Currency"
    currency: "Valuta", // Auto-generated string
    // [Auto-translated] "Cell hint"
    cellHint: "Suggerimento cella", // Auto-generated string
    // [Auto-translated] "Total maximum fraction digits"
    totalMaximumFractionDigits: "Cifre totali della frazione massima", // Auto-generated string
    // [Auto-translated] "Total minimum fraction digits"
    totalMinimumFractionDigits: "Cifre di frazione minima totale", // Auto-generated string
    // "Columns"
    columns: "Colonne", // Auto-generated string
    // [Auto-translated] "Detail elements"
    detailElements: "Elementi di dettaglio", // Auto-generated string
    // [Auto-translated] "Allow adaptive actions"
    allowAdaptiveActions: "Consenti azioni adattive", // Auto-generated string
    // "Default row value"
    defaultRowValue: "Valore predefinito Riga", // Auto-generated string
    // [Auto-translated] "Auto-expand new row details"
    detailPanelShowOnAdding: "Espansione automatica dei dettagli delle nuove righe",
    // [Auto-translated] "Choices lazy load enabled"
    choicesLazyLoadEnabled: "Scelte lazy load abilitate", // Auto-generated string
    // [Auto-translated] "Choices lazy load page size"
    choicesLazyLoadPageSize: "Scelte lazy load dimensione della pagina", // Auto-generated string
    // [Auto-translated] "Input field component"
    inputFieldComponent: "Componente del campo di input", // Auto-generated string
    // [Auto-translated] "Item component"
    itemComponent: "Componente dell'articolo", // Auto-generated string
    // "Min"
    min: "min", // Auto-generated string
    // "Max"
    max: "max", // Auto-generated string
    // "Min value expression"
    minValueExpression: "Valore min Espressione", // Auto-generated string
    // "Max value expression"
    maxValueExpression: "Valore max Espressione", // Auto-generated string
    // "Step"
    step: "Distanza", // Auto-generated string
    // "Items for auto-suggest"
    dataList: "Lista dati",
    // "Input field width (in characters)"
    inputSize: "Dimensione opzione",
    // [Auto-translated] "Item label width"
    itemTitleWidth: "Larghezza dell'etichetta dell'articolo",
    // [Auto-translated] "Input value alignment"
    inputTextAlignment: "Allineamento dei valori di input",
    // [Auto-translated] "Elements"
    elements: "Elementi", // Auto-generated string
    // [Auto-translated] "Content"
    content: "Contenuto", // Auto-generated string
    // "Navigation title"
    navigationTitle: "Titolo navigazione", // Auto-generated string
    // "Navigation description"
    navigationDescription: "Descrizione navigazione", // Auto-generated string
    // [Auto-translated] "Long tap"
    longTap: "Tocco prolungato", // Auto-generated string
    // "Expand input field dynamically"
    autoGrow: "Espansione automatica",
    // [Auto-translated] "Enable resize handle"
    allowResize: "Abilita maniglia di ridimensionamento",
    // [Auto-translated] "Accept carriage return"
    acceptCarriageReturn: "Accetta la restituzione in capo", // Auto-generated string
    // [Auto-translated] "Display mode"
    displayMode: "Modalità di visualizzazione",
    // [Auto-translated] "Rate type"
    rateType: "Tipo di tariffa", // Auto-generated string
    // "Label"
    label: "Etichetta", // Auto-generated string
    // "Content mode"
    contentMode: "Modalità contenuto",
    // "Image and thumbnail fit"
    imageFit: "Adattamento dell'immagine",
    // [Auto-translated] "Alt text"
    altText: "Testo alternativo",
    // "Height"
    height: "Altezza", // Auto-generated string
    // [Auto-translated] "Height on smartphones"
    mobileHeight: "Altezza su smartphone",
    // "Pen color"
    penColor: "Colore penna", // Auto-generated string
    // "Background color"
    backgroundColor: "Colore sfondo",
    // [Auto-translated] "Template elements"
    templateElements: "Elementi del modello", // Auto-generated string
    // [Auto-translated] "Operator"
    operator: "Operatore", // Auto-generated string
    // [Auto-translated] "Is variable"
    isVariable: "È variabile", // Auto-generated string
    // [Auto-translated] "Run expression"
    runExpression: "Esegui espressione", // Auto-generated string
    // "Show caption"
    showCaption: "Mostra didascalia", // Auto-generated string
    // "Icon name"
    iconName: "Nome icona", // Auto-generated string
    // "Icon size"
    iconSize: "Grandezza icona", // Auto-generated string
    // [Auto-translated] "Precision"
    precision: "Precisione", // Auto-generated string
    // [Auto-translated] "Matrix drag handle area"
    matrixDragHandleArea: "Area della maniglia di trascinamento della matrice", // Auto-generated string
    // [Auto-translated] "Background image"
    backgroundImage: "Immagine di sfondo",
    // [Auto-translated] "Background image fit"
    backgroundImageFit: "Adattamento dell'immagine di sfondo", // Auto-generated string
    // [Auto-translated] "Background image attachment"
    backgroundImageAttachment: "Allegato immagine di sfondo", // Auto-generated string
    // [Auto-translated] "Background opacity"
    backgroundOpacity: "Opacità dello sfondo", // Auto-generated string
    // [Auto-translated] "Allow selective ranking"
    selectToRankEnabled: "Consenti classificazione selettiva",
    // [Auto-translated] "Ranking area alignment"
    selectToRankAreasLayout: "Allineamento dell'area di classificazione",
    // [Auto-translated] "Text to show if all options are selected"
    selectToRankEmptyRankedAreaText: "Testo da mostrare se tutte le opzioni sono selezionate",
    // [Auto-translated] "Placeholder text for the ranking area"
    selectToRankEmptyUnrankedAreaText: "Testo segnaposto per l'area di classificazione",
    // [Auto-translated] "Allow camera access"
    allowCameraAccess: "Consenti accesso alla videocamera", // Auto-generated string
    // [Auto-translated] "Rating icon color mode"
    scaleColorMode: "Modalità colore icona di valutazione",
    // [Auto-translated] "Smileys color scheme"
    rateColorMode: "Combinazione di colori Smileys",
    // [Auto-translated] "Copy display value"
    copyDisplayValue: "Copia valore di visualizzazione", // Auto-generated string
    // [Auto-translated] "Column span"
    effectiveColSpan: "Estensione delle colonne",
    // [Auto-translated] "Progress bar area width"
    progressBarInheritWidthFrom: "Larghezza dell'area della barra di avanzamento",
    // [Auto-translated] "Theme name"
    themeName: "Nome del tema"
  },
  theme: {
    // "Advanced mode"
    advancedMode: "Modalità avanzata",
    // "Page"
    pageTitle: "Carattere del titolo della pagina",
    // "Question box"
    questionTitle: "Tipo di carattere del titolo della domanda",
    // "Input element"
    editorPanel: "Elemento di input",
    // [Auto-translated] "Lines"
    lines: "Poema",
    // [Auto-translated] "Default"
    primaryDefaultColor: "Default",
    // [Auto-translated] "Hover"
    primaryDarkColor: "Fluttuare",
    // [Auto-translated] "Selected"
    primaryLightColor: "Selezionato",
    // [Auto-translated] "Background color"
    backgroundDimColor: "Colore di sfondo",
    // "Corner radius"
    cornerRadius: "Raggio d'angolo",
    // [Auto-translated] "Default background"
    backcolor: "Sfondo predefinito",
    // [Auto-translated] "Hover background"
    hovercolor: "Sfondo al passaggio del mouse",
    // [Auto-translated] "Border decoration"
    borderDecoration: "Decorazione del bordo",
    // [Auto-translated] "Font color"
    fontColor: "Colore del carattere",
    // [Auto-translated] "Background color"
    backgroundColor: "Colore di sfondo",
    // [Auto-translated] "Default color"
    primaryForecolor: "Colore predefinito",
    // [Auto-translated] "Disabled color"
    primaryForecolorLight: "Colore disabilitato",
    // [Auto-translated] "Font"
    font: "Font",
    // [Auto-translated] "Darker"
    borderDefault: "Scuro",
    // [Auto-translated] "Lighter"
    borderLight: "Accendino",
    // [Auto-translated] "Font family"
    fontFamily: "Famiglia di caratteri",
    // [Auto-translated] "Regular"
    fontWeightRegular: "Regolare",
    // [Auto-translated] "Heavy"
    fontWeightHeavy: "Pesante",
    // [Auto-translated] "Semi-bold"
    fontWeightSemiBold: "Semi-grassetto",
    // [Auto-translated] "Bold"
    fontWeightBold: "Audace",
    // [Auto-translated] "Color"
    color: "Colore",
    // [Auto-translated] "Placeholder color"
    placeholderColor: "Colore segnaposto",
    // [Auto-translated] "Size"
    size: "Grandezza",
    // [Auto-translated] "Opacity"
    opacity: "Opacità",
    // [Auto-translated] "X"
    boxShadowX: "X",
    // [Auto-translated] "Y"
    boxShadowY: "Y",
    // [Auto-translated] "Add Shadow Effect"
    boxShadowAddRule: "Aggiungi effetto ombra",
    // [Auto-translated] "Blur"
    boxShadowBlur: "Sfocatura",
    // [Auto-translated] "Spread"
    boxShadowSpread: "Diffusione",
    // [Auto-translated] "Drop"
    boxShadowDrop: "Goccia",
    // [Auto-translated] "Inner"
    boxShadowInner: "Interno",
    names: {
      // [Auto-translated] "Default"
      default: "Default",
      // [Auto-translated] "Sharp"
      sharp: "Affilato",
      // [Auto-translated] "Borderless"
      borderless: "Borderless",
      // [Auto-translated] "Flat"
      flat: "Appartamento",
      // [Auto-translated] "Plain"
      plain: "Pianura",
      // [Auto-translated] "Double Border"
      doubleborder: "Doppio bordo",
      // [Auto-translated] "Layered"
      layered: "Stratificato",
      // [Auto-translated] "Solid"
      solid: "Solido",
      // [Auto-translated] "3D"
      threedimensional: ".3D",
      // [Auto-translated] "Contrast"
      contrast: "Contrasto"
    },
    colors: {
      // [Auto-translated] "Teal"
      teal: "Color foglia di tè",
      // [Auto-translated] "Blue"
      blue: "Blu",
      // [Auto-translated] "Purple"
      purple: "Porpora",
      // [Auto-translated] "Orchid"
      orchid: "Orchidea",
      // [Auto-translated] "Tulip"
      tulip: "Tulipano",
      // [Auto-translated] "Brown"
      brown: "Marrone",
      // [Auto-translated] "Green"
      green: "Verde",
      // [Auto-translated] "Gray"
      gray: "Grigio"
    }
  },
  creatortheme: {
    // [Auto-translated] "Surface background"
    "--sjs-special-background": "Sfondo della superficie",
    // [Auto-translated] "Primary"
    "--sjs-primary-background-500": "Primario",
    // [Auto-translated] "Secondary"
    "--sjs-secondary-background-500": "Secondario",
    // [Auto-translated] "Surface"
    surfaceScale: "Superficie",
    // [Auto-translated] "UI elements"
    userInterfaceBaseUnit: "Elementi dell'interfaccia utente",
    // [Auto-translated] "Font"
    fontScale: "Font",
    names: {
      // [Auto-translated] "Survey Creator 2020"
      sc2020: "Creatore di sondaggi 2020",
      // [Auto-translated] "Light"
      "default-light": "Leggero",
      // [Auto-translated] "Dark"
      "default-dark": "Oscuro",
      // [Auto-translated] "Contrast"
      "default-contrast": "Contrasto"
    }
  }
};

setupLocale({ localeCode: "it", strings: italianTranslation });