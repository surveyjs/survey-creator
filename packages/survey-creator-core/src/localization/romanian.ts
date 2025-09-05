import { setupLocale } from "survey-creator-core";

export const roStrings = {
  // survey templates
  survey: {
    // "Edit"
    edit: "Editează",
    // "Watch and learn how to create surveys"
    externalHelpLink: "Vizionați și învățați cum să creați chestionare",
    // "https://www.youtube.com/channel/UCH2ru9okIcooNZfpIbyq4qQ?view_as=subscriber"
    externalHelpLinkUrl: "https://www.youtube.com/channel/UCH2ru9okIcooNZfpIbyq4qQ?view_as=subscriber",
    // "Please drop a question here from the Toolbox."
    dropQuestion: "Vă rugăm să lăsați o întrebare aici din cutia de instrumente.",
    // "Create a rule to customize the flow of the survey."
    addLogicItem: "Creați o regulă pentru a personaliza fluxul chestionarului.",
    // "Copy"
    copy: "Copiază",
    // "Duplicate"
    duplicate: "Duplică",
    // "Add to toolbox"
    addToToolbox: "Adaugă în cutia de instrumente",
    // "Delete Panel"
    deletePanel: "Șterge panoul",
    // "Delete Question"
    deleteQuestion: "Șterge întrebarea",
    // "Convert to"
    convertTo: "Convertiți în",
    // "Drag element"
    drag: "Trage elementul"
  },
  // Creator tabs
  tabs: {
    // "Preview"
    preview: "Previzualizare",
    // "Themes"
    theme: "Teme",
    // "Translations"
    translation: "Traduceri",
    // "Designer"
    designer: "Designer",
    // "JSON Editor"
    json: "Editor JSON",
    // "Logic"
    logic: "Logică"
  },
  // Question types
  qt: {
    // "Default"
    default: "Implicit",
    // "Checkboxes"
    checkbox: "Casete de selectare",
    // "Long Text"
    comment: "Text lung",
    // "Image Picker"
    imagepicker: "Selector de imagini",
    // "Ranking"
    ranking: "Clasament",
    // "Image"
    image: "Imagine",
    // "Dropdown"
    dropdown: "Dropdown",
    // "Multi-Select Dropdown"
    tagbox: "Dropdown Multi-Select",
    // "File Upload"
    file: "Încărcare fișier",
    // "HTML"
    html: "HTML",
    // "Single-Select Matrix"
    matrix: "Matrice cu selecție unică",
    // "Multi-Select Matrix"
    matrixdropdown: "Matrice cu selecție multiplă",
    // "Dynamic Matrix"
    matrixdynamic: "Matrice dinamică",
    // "Multiple Textboxes"
    multipletext: "Casete de text multiple",
    // "Panel"
    panel: "Panou",
    // "Dynamic Panel"
    paneldynamic: "Panou dinamic",
    // "Radio Button Group"
    radiogroup: "Grup de butoane radio",
    // "Rating Scale"
    rating: "Scală de evaluare",
    // [Auto-translated] "Slider"
    slider: "Glisorul",
    // "Single-Line Input"
    text: "Intrare pe un singur rând",
    // "Yes/No (Boolean)"
    boolean: "Da/Nu (Boolean)",
    // "Expression (read-only)"
    expression: "Expresie (doar citire)",
    // "Signature"
    signaturepad: "Pad de semnătură",
    // "Button Group"
    buttongroup: "Grup de butoane"
  },
  toolboxCategories: {
    // "General"
    general: "General",
    // "Choice Questions"
    choice: "Întrebări de alegere",
    // "Text Input Questions"
    text: "Întrebări cu răspuns text",
    // "Containers"
    containers: "Containere",
    // "Matrix Questions"
    matrix: "Întrebări matrice",
    // "Misc"
    misc: "Diverse"
  },
  // Strings in SurveyJS Creator
  ed: {
    // "Default ({0})"
    defaultLocale: "Implicit ({0})",
    // "Survey"
    survey: "Chestionar",
    // "Settings"
    settings: "Setări",
    // "Open settings"
    settingsTooltip: "Deschideți setările",
    // "Survey Settings"
    surveySettings: "Setările chestionarului",
    // "Survey settings"
    surveySettingsTooltip: "Setările chestionarului",
    // "Theme Settings"
    themeSettings: "Setările temei",
    // "Theme settings"
    themeSettingsTooltip: "Setările temei",
    // [Auto-translated] "Creator Settings"
    creatorSettingTitle: "Setările creatorului",
    // "Show Panel"
    showPanel: "Afișează panoul",
    // "Hide Panel"
    hidePanel: "Ascunde panoul",
    // "Select previous"
    prevSelected: "Selectează precedentul",
    // "Select next"
    nextSelected: "Selectează următorul",
    // "Focus previous"
    prevFocus: "Focalizează pe precedentul",
    // "Focus next"
    nextFocus: "Focalizează pe următorul",
    // "Survey"
    surveyTypeName: "Chestionar",
    // "Page"
    pageTypeName: "Pagină",
    // "Panel"
    panelTypeName: "Panou",
    // "Question"
    questionTypeName: "Întrebare",
    // "Column"
    columnTypeName: "Coloană",
    // "Add New Page"
    addNewPage: "Adaugă pagină nouă",
    // "Scroll to the Right"
    moveRight: "Derulează spre dreapta",
    // "Scroll to the Left"
    moveLeft: "Derulează spre stânga",
    // "Delete Page"
    deletePage: "Șterge pagina",
    // "Edit Page"
    editPage: "Editează pagina",
    // "Edit"
    edit: "Editează",
    // "page"
    newPageName: "pagină",
    // "question"
    newQuestionName: "întrebare",
    // "panel"
    newPanelName: "panou",
    // "text"
    newTextItemName: "text",
    // "Default"
    defaultV2Theme: "Implicit",
    // "Modern"
    modernTheme: "Modern",
    // "Default (legacy)"
    defaultTheme: "Implicit (legacy)",
    // "Preview Survey Again"
    testSurveyAgain: "Previzualizați chestionarul din nou",
    // "Survey width: "
    testSurveyWidth: "Lățimea chestionarului: ",
    // "You had to navigate to"
    navigateToMsg: "A trebuit să navighezi la",
    // "Save Survey"
    saveSurvey: "Salvează chestionarul",
    // "Save Survey"
    saveSurveyTooltip: "Salvează chestionarul",
    // "Save Theme"
    saveTheme: "Salvează tema",
    // "Save Theme"
    saveThemeTooltip: "Salvează tema",
    // "Hide errors"
    jsonHideErrors: "Ascunde erorile",
    // "Show errors"
    jsonShowErrors: "Afișează erorile",
    // "Undo"
    undo: "Anulează",
    // "Redo"
    redo: "Refă",
    // "Undo last change"
    undoTooltip: "Anulează ultima modificare",
    // "Redo the change"
    redoTooltip: "Refă modificarea",
    // [Auto-translated] "Expand"
    expandTooltip: "Expanda",
    // [Auto-translated] "Collapse"
    collapseTooltip: "Colaps",
    // "Expand All"
    expandAllTooltip: "Extindeți tot",
    // "Collapse All"
    collapseAllTooltip: "Restrângeți tot",
    // [Auto-translated] "Zoom In"
    zoomInTooltip: "Măriți",
    // [Auto-translated] "Zoom to 100%"
    zoom100Tooltip: "Măriți la 100%",
    // [Auto-translated] "Zoom Out"
    zoomOutTooltip: "Micșorare",
    // [Auto-translated] "Lock expand/collapse state for questions"
    lockQuestionsTooltip: "Blocați starea de extindere/restrângere pentru întrebări",
    // "Show more"
    showMoreChoices: "Afișează mai multe",
    // "Show less"
    showLessChoices: "Afișează mai puține",
    // "Copy"
    copy: "Copiază",
    // "Cut"
    cut: "Taie",
    // "Paste"
    paste: "Lipește",
    // "Copy selection to clipboard"
    copyTooltip: "Copiază selecția în clipboard",
    // "Cut selection to clipboard"
    cutTooltip: "Taie selecția în clipboard",
    // "Paste from clipboard"
    pasteTooltip: "Lipește din clipboard",
    // "Options"
    options: "Opțiuni",
    // "Generate Valid JSON"
    generateValidJSON: "Generează JSON valid",
    // "Generate Readable JSON"
    generateReadableJSON: "Generează JSON lizibil",
    // "Toolbox"
    toolbox: "Cutia de instrumente",
    // "Properties"
    "property-grid": "Proprietăți",
    // [Auto-translated] "Search"
    toolboxSearch: "Căutare",
    // "Type to search..."
    toolboxFilteredTextPlaceholder: "Tastați pentru a căuta...",
    // "No results found"
    toolboxNoResultsFound: "Nu au fost găsite rezultate",
    // "Type to search..."
    propertyGridFilteredTextPlaceholder: "Tastați pentru a căuta...",
    // "No results found"
    propertyGridNoResultsFound: "Nu au fost găsite rezultate",
    // [Auto-translated] "Start configuring your form"
    propertyGridPlaceholderTitle: "Începeți să configurați formularul",
    // [Auto-translated] "Click any category icon to explore survey settings. Additional settings will become available once you add a survey element to the design surface."
    propertyGridPlaceholderDescription: "Faceți clic pe orice pictogramă de categorie pentru a explora setările sondajului. Setările suplimentare vor deveni disponibile odată ce adăugați un element de chestionar la suprafața de proiectare.",
    // "Please correct JSON."
    correctJSON: "Vă rugăm să corectați JSON.",
    // "Survey Results "
    surveyResults: "Rezultatele chestionarului ",
    // "As Table"
    surveyResultsTable: "Ca tabel",
    // "As JSON"
    surveyResultsJson: "Ca JSON",
    // "Question Title"
    resultsTitle: "Titlul întrebării",
    // "Question Name"
    resultsName: "Numele întrebării",
    // "Answer Value"
    resultsValue: "Valoarea răspunsului",
    // "Display Value"
    resultsDisplayValue: "Valoare afișată",
    // "Modified"
    modified: "Modificat",
    // "Saving"
    saving: "Se salvează",
    // "Saved"
    saved: "Salvat",
    // "Error"
    propertyEditorError: "Eroare",
    // "Error! Editor content is not saved."
    saveError: "Eroare! Conținutul editorului nu este salvat.",
    // "Language Settings"
    translationPropertyGridTitle: "Setări de limbă",
    // "Theme Settings"
    themePropertyGridTitle: "Setări de temă",
    // [Auto-translated] "Add Language"
    addLanguageTooltip: "Adăugați limbă",
    // "Languages"
    translationLanguages: "Limbi",
    // "Are you certain you wish to delete all strings for this language?"
    translationDeleteLanguage: "Sigur doriți să ștergeți toate șirurile pentru această limbă?",
    // "Select language to translate"
    translationAddLanguage: "Selectați limba pentru traducere",
    // "All Strings"
    translationShowAllStrings: "Toate șirurile",
    // "Used Strings Only"
    translationShowUsedStringsOnly: "Doar șirurile folosite",
    // "All Pages"
    translationShowAllPages: "Toate paginile",
    // "No strings to translate. Please change the filter."
    translationNoStrings: "Nu există șiruri de tradus. Vă rugăm să schimbați filtrul.",
    // "Export to CSV"
    translationExportToSCVButton: "Exportă în CSV",
    // "Import from CSV"
    translationImportFromSCVButton: "Importă din CSV",
    // "Auto-translate All"
    translateUsigAI: "Traducere automată a tuturor",
    // "Translate from: "
    translateUsigAIFrom: "Traducere din: ",
    // "Untranslated strings"
    translationDialogTitle: "Șiruri netraduse",
    // "Merge {0} with default locale"
    translationMergeLocaleWithDefault: "Fuzionați {0} cu locația implicită",
    // "Translation..."
    translationPlaceHolder: "Traducere...",
    // "Source: "
    translationSource: "Sursă: ",
    // "Target: "
    translationTarget: "Țintă: ",
    // [Auto-translated] "YouTube links are not supported."
    translationYouTubeNotSupported: "Linkurile YouTube nu sunt acceptate.",
    // "Export"
    themeExportButton: "Exportă",
    // "Import"
    themeImportButton: "Importă",
    // "Export"
    surveyJsonExportButton: "Exportă",
    // "Import"
    surveyJsonImportButton: "Importă",
    // "Copy to clipboard"
    surveyJsonCopyButton: "Copiază în clipboard",
    // "Reset theme settings to default"
    themeResetButton: "Resetează setările temei la implicit",
    // "Do you really want to reset the theme? All your customizations will be lost."
    themeResetConfirmation: "Sigur doriți să resetați tema? Toate personalizările dvs. vor fi pierdute.",
    // "Yes, reset the theme"
    themeResetConfirmationOk: "Da, resetează tema",
    // "Bold"
    bold: "Îngroșat",
    // "Italic"
    italic: "Italic",
    // "Underline"
    underline: "Subliniat",
    // "Add Question"
    addNewQuestion: "Adaugă întrebare",
    // "Select page..."
    selectPage: "Selectează pagina...",
    // "Choices are copied from"
    carryForwardChoicesCopied: "Opțiunile sunt copiate de la",
    // "Choices are loaded from a web service."
    choicesLoadedFromWebText: "Opțiunile sunt încărcate de la un serviciu web.",
    // "Go to settings"
    choicesLoadedFromWebLinkText: "Mergeți la setări",
    // "Preview of loaded choice options"
    choicesLoadedFromWebPreviewTitle: "Previzualizare opțiuni încărcate",
    // "HTML content will be here."
    htmlPlaceHolder: "Conținutul HTML va fi aici.",
    // "Drop a question from the toolbox here."
    panelPlaceHolder: "Lăsați o întrebare din cutia de instrumente aici.",
    // "The survey is empty. Drag an element from the toolbox or click the button below."
    surveyPlaceHolder: "Chestionarul este gol. Trageți un element din cutia de instrumente sau faceți clic pe butonul de mai jos.",
    // "The page is empty. Drag an element from the toolbox or click the button below."
    pagePlaceHolder: "Pagina este goală. Trageți un element din cutia de instrumente sau faceți clic pe butonul de mai jos.",
    // "Drag and drop an image here or click the button below and choose an image to upload"
    imagePlaceHolder: "Trageți și lăsați o imagine aici sau faceți clic pe butonul de mai jos și alegeți o imagine de încărcat",
    // "Click the \"Add Question\" button below to start creating your form."
    surveyPlaceHolderMobile: "Faceți clic pe butonul \"Adaugă întrebare\" de mai jos pentru a începe crearea formularului.",
    // [Auto-translated] "Your form is empty"
    surveyPlaceholderTitle: "Formularul tău este gol",
    // [Auto-translated] "Your form is empty"
    surveyPlaceholderTitleMobile: "Formularul tău este gol",
    // [Auto-translated] "Drag an element from the toolbox or click the button below."
    surveyPlaceholderDescription: "Trageți un element din caseta de instrumente sau faceți clic pe butonul de mai jos.",
    // [Auto-translated] "Drag an element from the toolbox or click the button below."
    surveyPlaceholderDescriptionMobile: "Trageți un element din caseta de instrumente sau faceți clic pe butonul de mai jos.",
    // [Auto-translated] "No preview"
    previewPlaceholderTitle: "Fără previzualizare",
    // [Auto-translated] "No preview"
    previewPlaceholderTitleMobile: "Fără previzualizare",
    // [Auto-translated] "The survey doesn't contain any visible elements."
    previewPlaceholderDescription: "Sondajul nu conține elemente vizibile.",
    // [Auto-translated] "The survey doesn't contain any visible elements."
    previewPlaceholderDescriptionMobile: "Sondajul nu conține elemente vizibile.",
    // [Auto-translated] "No strings to translate"
    translationsPlaceholderTitle: "Fără șiruri de tradus",
    // [Auto-translated] "No strings to translate"
    translationsPlaceholderTitleMobile: "Fără șiruri de tradus",
    // [Auto-translated] "Add elements to your form or change the strings filter in the toolbar."
    translationsPlaceholderDescription: "Adăugați elemente la formular sau modificați filtrul șiruri din bara de instrumente.",
    // [Auto-translated] "Add elements to your form or change the strings filter in the toolbar."
    translationsPlaceholderDescriptionMobile: "Adăugați elemente la formular sau modificați filtrul șiruri din bara de instrumente.",
    // "Click the \"Add Question\" button below to add a new element to the page."
    pagePlaceHolderMobile: "Faceți clic pe butonul \"Adaugă întrebare\" de mai jos pentru a adăuga un nou element pe pagină.",
    // "Click the \"Add Question\" button below to add a new element to the panel."
    panelPlaceHolderMobile: "Faceți clic pe butonul \"Adaugă întrebare\" de mai jos pentru a adăuga un nou element în panou.",
    // "Click the button below and choose an image to upload"
    imagePlaceHolderMobile: "Faceți clic pe butonul de mai jos și alegeți o imagine de încărcat",
    // "Choose Image"
    imageChooseImage: "Alegeți imaginea",
    // "Add {0}"
    addNewTypeQuestion: "Adăugați {0}", // {0} is localizable question type
    // "[LOGO]"
    chooseLogoPlaceholder: "[LOGO]",
    // "Item "
    choices_Item: "Element ",
    // "Select a file"
    selectFile: "Selectați un fișier",
    // "Remove the file"
    removeFile: "Eliminați fișierul",
    lg: {
      // "Add New Rule"
      addNewItem: "Adăugați regulă nouă",
      // "Create a rule to customize the flow of the survey."
      empty_tab: "Creați o regulă pentru a personaliza fluxul chestionarului.",
      // [Auto-translated] "No logical rules"
      logicPlaceholderTitle: "Fără reguli logice",
      // [Auto-translated] "No logical rules"
      logicPlaceholderTitleMobile: "Fără reguli logice",
      // [Auto-translated] "Create a rule to customize the flow of the survey."
      logicPlaceholderDescription: "Creați o regulă pentru a personaliza fluxul sondajului.",
      // [Auto-translated] "Create a rule to customize the flow of the survey."
      logicPlaceholderDescriptionMobile: "Creați o regulă pentru a personaliza fluxul sondajului.",
      // "Show/hide page"
      page_visibilityName: "Afișează/ascunde pagina",
      // "Enable/disable page"
      page_enableName: "Activează/dezactivează pagina",
      // "Make page required"
      page_requireName: "Fă pagina obligatorie",
      // "Show/hide panel"
      panel_visibilityName: "Afișează/ascunde panoul",
      // "Enable/disable panel"
      panel_enableName: "Activează/dezactivează panoul",
      // "Make panel required"
      panel_requireName: "Fă panoul obligatoriu",
      // "Show/hide question"
      question_visibilityName: "Afișează/ascunde întrebarea",
      // "Enable/disable question"
      question_enableName: "Activează/dezactivează întrebarea",
      // "Make question required"
      question_requireName: "Fă întrebarea obligatorie",
      // "Reset question value"
      question_resetValueName: "Resetează valoarea întrebării",
      // "Set question value"
      question_setValueName: "Setează valoarea întrebării",
      // "Show/hide column"
      column_visibilityName: "Afișează/ascunde coloana",
      // "Enable/disable column"
      column_enableName: "Activează/dezactivează coloana",
      // "Make column required"
      column_requireName: "Fă coloana obligatorie",
      // "Reset column value"
      column_resetValueName: "Resetează valoarea coloanei",
      // "Set column value"
      column_setValueName: "Setează valoarea coloanei",
      // "Complete survey"
      trigger_completeName: "Finalizează chestionarul",
      // "Set answer"
      trigger_setvalueName: "Setează răspunsul",
      // "Copy answer"
      trigger_copyvalueName: "Copiază răspunsul",
      // "Skip to question"
      trigger_skipName: "Sari la întrebare",
      // "Run expression"
      trigger_runExpressionName: "Execută expresia",
      // "Set \"Thank You\" page markup"
      completedHtmlOnConditionName: "Setează marcajul paginii de „Mulțumire”",
      // "Make the page visible when the logical expression evaluates to true. Otherwise, keep the page invisible."
      page_visibilityDescription: "Faceți pagina vizibilă atunci când expresia logică evaluează la adevărat. În caz contrar, mențineți pagina invizibilă.",
      // "Make the page visible when the logical expression evaluates to true. Otherwise, keep the panel invisible."
      panel_visibilityDescription: "Faceți pagina vizibilă atunci când expresia logică evaluează la adevărat. În caz contrar, mențineți panoul invizibil.",
      // "Make the panel and all elements inside it enabled when the logical expression evaluates to true. Otherwise, keep them disabled."
      panel_enableDescription: "Faceți panoul și toate elementele din interiorul său activate atunci când expresia logică evaluează la adevărat. În caz contrar, mențineți-le dezactivate.",
      // "Make the question visible when the logical expression evaluates to true. Otherwise, keep the question invisible."
      question_visibilityDescription: "Faceți întrebarea vizibilă atunci când expresia logică evaluează la adevărat. În caz contrar, mențineți întrebarea invizibilă.",
      // "Make the question enabled when the logical expression evaluates to true. Otherwise, keep the question disabled."
      question_enableDescription: "Faceți întrebarea activată atunci când expresia logică evaluează la adevărat. În caz contrar, mențineți întrebarea dezactivată.",
      // "Question becomes required when the logical expression evaluates to true."
      question_requireDescription: "Întrebarea devine obligatorie atunci când expresia logică evaluează la adevărat.",
      // "When the logical expression evaluates to true, the survey ends, and the respondent sees the \"Thank you\" page."
      trigger_completeDescription: "Când expresia logică evaluează la adevărat, chestionarul se încheie, iar respondentul vede pagina de „Mulțumire”.",
      // "When question values used in the logical expression are changed, and the expression evaluates to true, the specified value is assigned to the selected question."
      trigger_setvalueDescription: "Când valorile întrebărilor utilizate în expresia logică se schimbă și expresia evaluează la adevărat, valoarea specificată este atribuită întrebării selectate.",
      // "When question values used in the logical expression are changed, and the expression evaluates to true, the value of the selected question is copied to another question."
      trigger_copyvalueDescription: "Când valorile întrebărilor utilizate în expresia logică se schimbă și expresia evaluează la adevărat, valoarea întrebării selectate este copiată în altă întrebare.",
      // "When the logical expression evaluates to true, the survey focuses/jumps to the selected question."
      trigger_skipDescription: "Când expresia logică evaluează la adevărat, chestionarul se concentrează/sare la întrebarea selectată.",
      // "When the logical expression evaluates to true, the survey evaluates another expression. Optionally, the result of the latter expression can be assigned as a value to the selected question"
      trigger_runExpressionDescription: "Când expresia logică evaluează la adevărat, chestionarul evaluează o altă expresie. Opțional, rezultatul ultimei expresii poate fi atribuit ca valoare întrebării selectate",
      // "If the logical expression evaluates to true, the \"Thank You\" page displays the specified content."
      completedHtmlOnConditionDescription: "Dacă expresia logică evaluează la adevărat, pagina de „Mulțumire” afișează conținutul specificat.",
      // "When expression: '{0}' returns true"
      itemExpressionText: "Când expresia: '{0}' returnează adevărat", // {0} - the expression
      // "New rule"
      itemEmptyExpressionText: "Regulă nouă",
      // "make page {0} visible"
      page_visibilityText: "face pagina {0} vizibilă", // {0} page name
      // "make panel {0} visible"
      panel_visibilityText: "face panoul {0} vizibil", // {0} panel name
      // "make panel {0} enable"
      panel_enableText: "face panoul {0} activ", // {0} panel name
      // "make question {0} visible"
      question_visibilityText: "face întrebarea {0} vizibilă", // {0} question name
      // "make question {0} enable"
      question_enableText: "face întrebarea {0} activă", // {0} question name
      // "make question {0} required"
      question_requireText: "face întrebarea {0} obligatorie", // {0} question name
      // "reset value for question: {0}"
      question_resetValueText: "resetează valoarea pentru întrebarea: {0}", // {0} question name.
      // "assign value: {1} to question: {0}"
      question_setValueText: "atribuiți valoarea: {1} întrebării: {0}", // {0} question name and {1} setValueExpression
      // "make column {0} of question {1} visible"
      column_visibilityText: "face coloana {0} a întrebării {1} vizibilă", // {0} column name, {1} question name
      // "make column {0} of question {1} enable"
      column_enableText: "face coloana {0} a întrebării {1} activă", // {0} column name, {1} question name
      // "make column {0} of question {1} required"
      column_requireText: "face coloana {0} a întrebării {1} obligatorie", // {0} column name, {1} question name
      // "reset cell value for column: {0}"
      column_resetValueText: "resetează valoarea celulei pentru coloana: {0}", // {0} column name
      // "assign cell value: {1} to column: {0}"
      column_setValueText: "atribuiți valoarea celulei: {1} coloanei: {0}", // {0} column name and {1} setValueExpression
      // "An expression whose result will be assigned to the target question."
      setValueExpressionPlaceholder: "O expresie al cărei rezultat va fi atribuit întrebării țintă.",
      // "survey becomes completed"
      trigger_completeText: "chestionarul devine completat",
      // "set into question: {0} value {1}"
      trigger_setvalueText: "setați în întrebarea: {0} valoarea {1}", // {0} question name, {1} setValue
      // "clear question value: {0}"
      trigger_setvalueEmptyText: "ștergeți valoarea întrebării: {0}", // {0} question name
      // "copy into question: {0} value from question {1}"
      trigger_copyvalueText: "copiați în întrebarea: {0} valoarea din întrebarea {1}", // {0} and {1} question names
      // "survey skip to the question {0}"
      trigger_skipText: "chestionarul sare la întrebarea {0}", // {0} question name
      // "run expression: '{0}'"
      trigger_runExpressionText1: "execută expresia: '{0}'", // {0} the expression
      // " and set its result into question: {0}"
      trigger_runExpressionText2: " și setați rezultatul acesteia în întrebarea: {0}", // {0} question name
      // "show custom text for the \"Thank You\" page."
      completedHtmlOnConditionText: "afișați text personalizat pentru pagina de „Mulțumire”.",
      // "All Questions"
      showAllQuestions: "Toate întrebările",
      // "All Action Types"
      showAllActionTypes: "Toate tipurile de acțiuni",
      // "Condition(s)"
      conditions: "Condiție(i)",
      // "Action(s)"
      actions: "Acțiune(i)",
      // "Define condition(s)"
      expressionEditorTitle: "Definește condiție(i)",
      // "Define action(s)"
      actionsEditorTitle: "Definește acțiune(i)",
      // "Delete Action"
      deleteAction: "Șterge acțiunea",
      // "Add Action"
      addNewAction: "Adaugă acțiune",
      // "Select action..."
      selectedActionCaption: "Selectează acțiunea...",
      // "The logic expression is empty or invalid. Please correct it."
      expressionInvalid: "Expresia logică este goală sau invalidă. Vă rugăm să o corectați.",
      // "Please add at least one action."
      noActionError: "Vă rugăm să adăugați cel puțin o acțiune.",
      // "Please fix issues in your action(s)."
      actionInvalid: "Vă rugăm să remediați problemele în acțiunile dvs.",
      // "Logical rules are incomplete"
      uncompletedRule_title: "Regulile logice sunt incomplete",
      // "You have not completed some of the logical rules. If you leave the tab now, the changes will be lost. Do you still want to leave the tab without completing the changes?"
      uncompletedRule_text: "Nu ați completat unele dintre regulile logice. Dacă părăsiți fila acum, modificările vor fi pierdute. Doriți să părăsiți fila fără a completa modificările?",
      // "Yes"
      uncompletedRule_apply: "Da",
      // "No, I want to complete the rules"
      uncompletedRule_cancel: "Nu, vreau să completez regulile"
    }
  },
  // Property Editors
  pe: {
    panel: {
      // "Panel name"
      name: "Numele panoului",
      // "Panel title"
      title: "Titlul panoului",
      // "Panel description"
      description: "Descrierea panoului",
      // "Make the panel visible if"
      visibleIf: "Fă panoul vizibil dacă",
      // "Make the panel required if"
      requiredIf: "Fă panoul obligatoriu dacă",
      // "Question order within the panel"
      questionOrder: "Ordinea întrebărilor în panou",
      // "Move the panel to page"
      page: "Mută panoul la pagina",
      // "Display the panel on a new line"
      startWithNewLine: "Afișează panoul pe un rând nou",
      // "Panel collapse state"
      state: "Starea de colaps a panoului",
      // "Inline panel width"
      width: "Lățimea panoului inline",
      // "Minimum panel width"
      minWidth: "Lățimea minimă a panoului",
      // "Maximum panel width"
      maxWidth: "Lățimea maximă a panoului",
      // [Auto-translated] "Number this panel"
      showNumber: "Numerotați acest panou"
    },
    panellayoutcolumn: {
      // [Auto-translated] "Effective width, %"
      effectiveWidth: "Lățimea efectivă, %",
      // [Auto-translated] "Question title width, px"
      questionTitleWidth: "Lățimea titlului întrebării, px"
    },
    paneldynamic: {
      // "Panel name"
      name: "Numele panoului",
      // "Panel title"
      title: "Titlul panoului",
      // "Panel description"
      description: "Descrierea panoului",
      // [Auto-translated] "Entry display mode"
      displayMode: "Mod de afișare a intrării",
      // "Make the panel visible if"
      visibleIf: "Fă panoul vizibil dacă",
      // "Make the panel required if"
      requiredIf: "Fă panoul obligatoriu dacă",
      // "Move the panel to page"
      page: "Mută panoul la pagina",
      // "Display the panel on a new line"
      startWithNewLine: "Afișează panoul pe un rând nou",
      // "Panel collapse state"
      state: "Starea de colaps a panoului",
      // "Inline panel width"
      width: "Lățimea panoului inline",
      // "Minimum panel width"
      minWidth: "Lățimea minimă a panoului",
      // "Maximum panel width"
      maxWidth: "Lățimea maximă a panoului",
      // [Auto-translated] "Confirm entry removal"
      confirmDelete: "Confirmați eliminarea intrării",
      // "Entry description pattern"
      templateDescription: "Model de descriere a panoului",
      // "Entry title pattern"
      templateTitle: "Model de titlu a panoului",
      // "Empty panel text"
      noEntriesText: "Text panou gol",
      // "Tab title pattern"
      templateTabTitle: "Model de titlu a filei",
      // "Tab title placeholder"
      tabTitlePlaceholder: "Locaș pentru titlul filei",
      // "Make an individual entry visible if"
      templateVisibleIf: "Fă un panou individual vizibil dacă",
      // [Auto-translated] "Number the panel"
      showNumber: "Numerotați panoul",
      // "Panel title alignment"
      titleLocation: "Alinierea titlului panoului",
      // "Panel description alignment"
      descriptionLocation: "Alinierea descrierii panoului",
      // "Question title alignment"
      templateQuestionTitleLocation: "Alinierea titlului întrebării",
      // [Auto-translated] "Question title width"
      templateQuestionTitleWidth: "Lățimea titlului întrebării",
      // "Error message alignment"
      templateErrorLocation: "Alinierea mesajului de eroare",
      // "New entry location"
      newPanelPosition: "Locația noului panou",
      // [Auto-translated] "Show the progress bar"
      showRangeInProgress: "Afișați bara de progres",
      // "Prevent duplicate responses in the following question"
      keyName: "Prevenirea răspunsurilor duplicate în următoarea întrebare"
    },
    question: {
      // "Question name"
      name: "Numele întrebării",
      // "Question title"
      title: "Titlul întrebării",
      // "Question description"
      description: "Descrierea întrebării",
      // [Auto-translated] "Show the title and description"
      showTitle: "Afișați titlul și descrierea",
      // "Make the question visible if"
      visibleIf: "Fă întrebarea vizibilă dacă",
      // "Make the question required if"
      requiredIf: "Fă întrebarea obligatorie dacă",
      // "Move the question to page"
      page: "Mută întrebarea la pagina",
      // "Question box collapse state"
      state: "Starea de colaps a casetei întrebării",
      // [Auto-translated] "Number this question"
      showNumber: "Numerotați această întrebare",
      // "Question title alignment"
      titleLocation: "Alinierea titlului întrebării",
      // "Question description alignment"
      descriptionLocation: "Alinierea descrierii întrebării",
      // "Error message alignment"
      errorLocation: "Alinierea mesajului de eroare",
      // "Increase the inner indent"
      indent: "Crește indentarea internă",
      // "Inline question width"
      width: "Lățimea întrebării inline",
      // "Minimum question width"
      minWidth: "Lățimea minimă a întrebării",
      // "Maximum question width"
      maxWidth: "Lățimea maximă a întrebării",
      // "Update input field value"
      textUpdateMode: "Actualizează valoarea câmpului de intrare"
    },
    signaturepad: {
      // "Signature area width"
      signatureWidth: "Lățimea zonei de semnătură",
      // "Signature area height"
      signatureHeight: "Înălțimea zonei de semnătură",
      // "Auto-scale the signature area"
      signatureAutoScaleEnabled: "Auto-scalare zona de semnătură",
      // "Show a placeholder within signature area"
      showPlaceholder: "Afișează un locaș în zona de semnătură",
      // "Placeholder text"
      placeholder: "Text locaș",
      // "Placeholder text in read-only or preview mode"
      placeholderReadOnly: "Text locaș în modul doar citire sau previzualizare",
      // "Show the Clear button within signature area"
      allowClear: "Afișează butonul de ștergere în zona de semnătură",
      // "Minimum stroke width"
      penMinWidth: "Lățimea minimă a creionului",
      // "Maximum stroke width"
      penMaxWidth: "Lățimea maximă a creionului",
      // "Stroke color"
      penColor: "Culoarea creionului"
    },
    comment: {
      // "Input field height (in lines)"
      rows: "Înălțimea câmpului de intrare (în linii)"
    },
    // "Question numbering"
    showQuestionNumbers: "Numerotarea întrebărilor",
    // "Question indexing type"
    questionStartIndex: "Tipul de indexare a întrebărilor",
    expression: {
      // "Expression name"
      name: "Numele expresiei",
      // "Expression title"
      title: "Titlul expresiei",
      // "Expression description"
      description: "Descrierea expresiei",
      // "Expression"
      expression: "Expresie"
    },
    trigger: {
      // "Expression"
      expression: "Expresie"
    },
    calculatedvalue: {
      // "Expression"
      expression: "Expresie"
    },
    // survey templates
    survey: {
      // "Survey title"
      title: "Titlul chestionarului",
      // "Survey description"
      description: "Descrierea chestionarului",
      // [Auto-translated] "Make the survey read-only"
      readOnly: "Faceți chestionarul doar în citire"
    },
    page: {
      // [Auto-translated] "Page name"
      name: "Numele paginii",
      // "Page title"
      title: "Titlul paginii",
      // [Auto-translated] "Page description"
      description: "Descrierea paginii",
      // "Make the page visible if"
      visibleIf: "Fă pagina vizibilă dacă",
      // "Make the page required if"
      requiredIf: "Fă pagina obligatorie dacă",
      // "Time limit to complete the page"
      timeLimit: "Limită de timp pentru finalizarea paginii",
      // "Question order on the page"
      questionOrder: "Ordinea întrebărilor pe pagină"
    },
    matrixdropdowncolumn: {
      // "Column name"
      name: "Numele coloanei",
      // "Column title"
      title: "Titlul coloanei",
      // "Prevent duplicate responses"
      isUnique: "Prevenirea răspunsurilor duplicate",
      // "Column width"
      width: "Lățimea coloanei",
      // "Minimum column width"
      minWidth: "Lățimea minimă a coloanei",
      // "Input field height (in lines)"
      rows: "Înălțimea câmpului de intrare (în linii)",
      // "Make the column visible if"
      visibleIf: "Fă coloana vizibilă dacă",
      // "Make the column required if"
      requiredIf: "Fă coloana obligatorie dacă",
      // "Each option in a separate column"
      showInMultipleColumns: "Fiecare opțiune într-o coloană separată"
    },
    multipletextitem: {
      // "Name"
      name: "Nume",
      // "Title"
      title: "Titlu"
    },
    masksettings: {
      // "Save masked value in survey results"
      saveMaskedValue: "Salvați valoarea mascată în rezultatele chestionarului"
    },
    patternmask: {
      // "Value pattern"
      pattern: "Model de valoare"
    },
    datetimemask: {
      // "Minimum value"
      min: "Valoarea minimă",
      // "Maximum value"
      max: "Valoarea maximă"
    },
    numericmask: {
      // "Allow negative values"
      allowNegativeValues: "Permiteți valori negative",
      // "Thousands separator"
      thousandsSeparator: "Separator de mii",
      // "Decimal separator"
      decimalSeparator: "Separator zecimal",
      // "Value precision"
      precision: "Precizia valorii",
      // "Minimum value"
      min: "Valoarea minimă",
      // "Maximum value"
      max: "Valoarea maximă"
    },
    currencymask: {
      // "Currency prefix"
      prefix: "Prefix valutar",
      // "Currency suffix"
      suffix: "Sufix valutar"
    },
    // [Auto-translated] "Clear others when selected"
    isExclusive: "Ștergeți altele când este selectat",
    // [Auto-translated] "Require user to enter a comment"
    isCommentRequired: "Solicitați utilizatorului să introducă un comentariu",
    // "Display area height"
    imageHeight: "Înălțimea zonei de afișare",
    // "Display area width"
    imageWidth: "Lățimea zonei de afișare",
    // "Join identifier"
    valueName: "Identificator de îmbinare",
    // [Auto-translated] "Default display value for dynamic texts"
    defaultDisplayValue: "Valoarea de afișare implicită pentru textele dinamice",
    // "Label alignment"
    rateDescriptionLocation: "Alinierea etichetei",
    // "Input field width (in characters)"
    size: "Lățimea câmpului de intrare (în caractere)",
    // "Cell error message alignment"
    cellErrorLocation: "Alinierea mesajului de eroare al celulei",
    // "Enabled"
    enabled: "Activat",
    // "Disabled"
    disabled: "Dezactivat",
    // "Inherit"
    inherit: "Moștenit",
    // "Apply"
    apply: "Aplică",
    // "OK"
    ok: "OK",
    // "Save"
    save: "Salvează",
    // "Clear"
    clear: "Șterge",
    // "Save"
    saveTooltip: "Salvează",
    // "Cancel"
    cancel: "Anulează",
    // "Set"
    set: "Setează",
    // "Reset"
    reset: "Resetează",
    // "Change"
    change: "Schimbă",
    // "Refresh"
    refresh: "Reîmprospătează",
    // "Close"
    close: "Închide",
    // "Delete"
    delete: "Șterge",
    // "Add"
    add: "Adaugă",
    // "Add New"
    addNew: "Adaugă nou",
    // "Click to add an item..."
    addItem: "Faceți clic pentru a adăuga un element...",
    // "Click to remove the item..."
    removeItem: "Faceți clic pentru a elimina elementul...",
    // "Drag the item"
    dragItem: "Trageți elementul",
    // "Other"
    addOther: "Altul",
    // "Select All"
    addSelectAll: "Selectează tot",
    // "None"
    addNone: "Niciunul",
    // "Remove All"
    removeAll: "Eliminați tot",
    // "Edit"
    edit: "Editează",
    // "Return without saving"
    back: "Întoarceți-vă fără a salva",
    // "Return without saving"
    backTooltip: "Întoarceți-vă fără a salva",
    // "Save and return"
    saveAndBack: "Salvează și întoarce-te",
    // "Save and return"
    saveAndBackTooltip: "Salvează și întoarce-te",
    // "Done"
    doneEditing: "Gata",
    // "Edit Choices"
    editChoices: "Editează alegerile",
    // "Show Choices"
    showChoices: "Afișează alegerile",
    // "Move"
    move: "Mută",
    // "<empty>"
    empty: "<gol>",
    // "Value is empty"
    emptyValue: "Valoarea este goală",
    // "Manual Entry"
    fastEntry: "Intrare manuală",
    // "Value '{0}' is not unique"
    fastEntryNonUniqueError: "Valoarea '{0}' nu este unică",
    // "Please limit the number of items from {0} to {1}"
    fastEntryChoicesCountError: "Vă rugăm să limitați numărul de elemente de la {0} la {1}",
    // "Please enter at least {0} items"
    fastEntryChoicesMinCountError: "Vă rugăm să introduceți cel puțin {0} elemente",
    // "Enter the list of choice options and their IDs in the following format:\n\nid|option\n\nA choice option ID is not visible to respondents and can be used in conditional rules."
    fastEntryPlaceholder: "Introduceți lista opțiunilor de alegere și ID-urile acestora în următorul format:\n\nid|opțiune\n\nUn ID de opțiune de alegere nu este vizibil pentru respondenți și poate fi utilizat în regulile condiționale.",
    // "Form Entry"
    formEntry: "Intrare în formular",
    // "Test the service"
    testService: "Testează serviciul",
    // "Please select the element"
    itemSelectorEmpty: "Vă rugăm să selectați elementul",
    // "Please select the action"
    conditionActionEmpty: "Vă rugăm să selectați acțiunea",
    // "Select a question..."
    conditionSelectQuestion: "Selectează o întrebare...",
    // "Select a page..."
    conditionSelectPage: "Selectează o pagină...",
    // "Select a panel..."
    conditionSelectPanel: "Selectează un panou...",
    // "Please enter/select the value"
    conditionValueQuestionTitle: "Vă rugăm să introduceți/selectați valoarea",
    // "Press ctrl+space to get expression completion hint"
    aceEditorHelp: "Apăsați ctrl+spațiu pentru a obține sugestii de completare a expresiei",
    // "Current row"
    aceEditorRowTitle: "Rândul curent",
    // "Current panel"
    aceEditorPanelTitle: "Panoul curent",
    // "For more details please check the documentation"
    showMore: "Pentru mai multe detalii, vă rugăm să consultați documentația",
    // "Available questions"
    assistantTitle: "Întrebări disponibile",
    // "There is should be at least one column or row"
    cellsEmptyRowsColumns: "Trebuie să existe cel puțin o coloană sau un rând",
    // "Review before submit"
    showPreviewBeforeComplete: "Revizuire înainte de a trimite",
    // "Enabled by a condition"
    overridingPropertyPrefix: "Activat de o condiție",
    // "Reset"
    resetToDefaultCaption: "Resetează",
    // "Please enter a value"
    propertyIsEmpty: "Vă rugăm să introduceți o valoare",
    // "Please enter a unique value"
    propertyIsNoUnique: "Vă rugăm să introduceți o valoare unică",
    // "Please enter a unique name"
    propertyNameIsNotUnique: "Vă rugăm să introduceți un nume unic",
    // "Do not use reserved words: \"item\", \"choice\", \"panel\", \"row\"."
    propertyNameIsIncorrect: "Nu folosiți cuvinte rezervate: \"item\", \"choice\", \"panel\", \"row\".",
    // "You don't have any items yet"
    listIsEmpty: "Nu aveți încă niciun element",
    // "You don't have any choices yet"
    "listIsEmpty@choices": "Nu aveți încă nicio alegere",
    // "You don't have any columns yet"
    "listIsEmpty@columns": "Nu aveți încă nicio coloană",
    // [Auto-translated] "You don't have layout columns yet"
    "listIsEmpty@gridLayoutColumns": "Nu aveți încă coloane de aspect",
    // "You don't have any rows yet"
    "listIsEmpty@rows": "Nu aveți încă niciun rând",
    // "You don't have any validation rules yet"
    "listIsEmpty@validators": "Nu aveți încă nicio regulă de validare",
    // "You don't have any custom variables yet"
    "listIsEmpty@calculatedValues": "Nu aveți încă nicio variabilă personalizată",
    // "You don't have any triggers yet"
    "listIsEmpty@triggers": "Nu aveți încă niciun declanșator",
    // "You don't have any links yet"
    "listIsEmpty@navigateToUrlOnCondition": "Nu aveți încă niciun link",
    // [Auto-translated] "You don't have any pages yet"
    "listIsEmpty@pages": "Nu aveți încă nicio pagină",
    // "Add new choice"
    "addNew@choices": "Adăugați o alegere nouă",
    // "Add new column"
    "addNew@columns": "Adăugați o coloană nouă",
    // "Add new row"
    "addNew@rows": "Adăugați un rând nou",
    // "Add new rule"
    "addNew@validators": "Adăugați o regulă nouă",
    // "Add new variable"
    "addNew@calculatedValues": "Adăugați o variabilă nouă",
    // "Add new trigger"
    "addNew@triggers": "Adăugați un declanșator nou",
    // "Add new URL"
    "addNew@navigateToUrlOnCondition": "Adăugați un URL nou",
    // [Auto-translated] "Add new page"
    "addNew@pages": "Adaugă o pagină nouă",
    // "Expression is empty"
    expressionIsEmpty: "Expresia este goală",
    // "Value"
    value: "Valoare",
    // "Text"
    text: "Text",
    // "Row ID"
    rowid: "ID rând",
    // "Image or video file URL"
    imageLink: "URL fișier imagine sau video",
    // "Edit column: {0}"
    columnEdit: "Editează coloana: {0}",
    // "Edit item: {0}"
    itemEdit: "Editează elementul: {0}",
    // "URL"
    url: "URL",
    // "Path to data"
    path: "Calea către date",
    choicesbyurl: {
      // "Web service URL"
      url: "URL serviciu web",
      // "Get value to store from the following property"
      valueName: "Obțineți valoarea de stocat din următoarea proprietate"
    },
    // "Get value to display from the following property"
    titleName: "Obțineți valoarea de afișat din următoarea proprietate",
    // "Get file URLs from the following property"
    imageLinkName: "Obțineți URL-urile fișierelor din următoarea proprietate",
    // "Accept empty response"
    allowEmptyResponse: "Acceptă răspuns gol",
    // "Title"
    titlePlaceholder: "Titlu",
    // "Survey Title"
    surveyTitlePlaceholder: "Titlul chestionarului",
    // "Page {num}"
    pageTitlePlaceholder: "Pagina {num}",
    // [Auto-translated] "Start Page"
    startPageTitlePlaceholder: "Pagina de pornire",
    // "Description"
    descriptionPlaceholder: "Descriere",
    // "Description"
    surveyDescriptionPlaceholder: "Descriere",
    // "Description"
    pageDescriptionPlaceholder: "Descriere",
    // "Wrap choices"
    textWrapEnabled: "Înfășurați alegerile",
    // "Enable the \"Other\" option"
    showOtherItem: "Activează opțiunea „Altul”",
    // "Rename the \"Other\" option"
    otherText: "Redenumește opțiunea „Altul”",
    // "Enable the \"None\" option"
    showNoneItem: "Activează opțiunea „Niciunul”",
    // "Enable the \"Refuse to Answer\" option"
    showRefuseItem: "Activează opțiunea „Refuz să răspund”",
    // "Enable the \"Don't Know\" option"
    showDontKnowItem: "Activează opțiunea „Nu știu”",
    // "Rename the \"None\" option"
    noneText: "Redenumește opțiunea „Niciunul”",
    // "Enable the \"Select All\" option"
    showSelectAllItem: "Activează opțiunea „Selectează tot”",
    // "Rename the \"Select All\" option"
    selectAllText: "Redenumește opțiunea „Selectează tot”",
    // "Minimum value for auto-generated items"
    choicesMin: "Valoarea minimă pentru elementele auto-generate",
    // "Maximum value for auto-generated items"
    choicesMax: "Valoarea maximă pentru elementele auto-generate",
    // "Step value for auto-generated items"
    choicesStep: "Valoarea pasului pentru elementele auto-generate",
    // "Name"
    name: "Nume",
    // "Title"
    title: "Titlu",
    // "Cell input type"
    cellType: "Tip intrare celulă",
    // "Column count"
    colCount: "Număr de coloane",
    // "Choice order"
    choicesOrder: "Ordinea alegerilor",
    // [Auto-translated] "Allow custom choices"
    allowCustomChoices: "Permiteți opțiuni personalizate",
    // "Visible"
    visible: "Vizibil",
    // "Required"
    isRequired: "Obligatoriu",
    // "Mark as required"
    markRequired: "Marchează ca obligatoriu",
    // "Remove the required mark"
    removeRequiredMark: "Elimină marcajul obligatoriu",
    // "Require an answer in each row"
    eachRowRequired: "Necesită un răspuns în fiecare rând",
    // "Prevent duplicate responses in rows"
    eachRowUnique: "Prevenirea răspunsurilor duplicate în rânduri",
    // "Error message for required questions"
    requiredErrorText: "Mesaj de eroare pentru întrebările obligatorii",
    // "Display the question on a new line"
    startWithNewLine: "Afișează întrebarea pe un rând nou",
    // "Rows"
    rows: "Rânduri",
    // "Columns"
    cols: "Coloane",
    // "Placeholder text within input field"
    placeholder: "Text locaș în câmpul de intrare",
    // "Show preview area"
    showPreview: "Afișează zona de previzualizare",
    // "Store file content in JSON result as text"
    storeDataAsText: "Stocați conținutul fișierului în rezultatul JSON ca text",
    // "Maximum file size (in bytes)"
    maxSize: "Dimensiunea maximă a fișierului (în octeți)",
    // "Row count"
    rowCount: "Număr de rânduri",
    // "Columns layout"
    columnLayout: "Aspect coloane",
    // "\"Add Row\" button alignment"
    addRowButtonLocation: "Alinierea butonului „Adaugă rând”",
    // "Transpose rows to columns"
    transposeData: "Transpune rândurile în coloane",
    // "\"Add Row\" button text"
    addRowText: "Textul butonului „Adaugă rând”",
    // "\"Remove Row\" button text"
    removeRowText: "Textul butonului „Elimină rând”",
    // [Auto-translated] "Input field title pattern"
    singleInputTitleTemplate: "Modelul de titlu al câmpului de intrare",
    // "Minimum rating value"
    rateMin: "Valoarea minimă a evaluării",
    // "Maximum rating value"
    rateMax: "Valoarea maximă a evaluării",
    // "Step value"
    rateStep: "Valoarea pasului",
    // "Minimum value label"
    minRateDescription: "Etichetă valoare minimă",
    // "Maximum value label"
    maxRateDescription: "Etichetă valoare maximă",
    // "Input type"
    inputType: "Tip intrare",
    // "Option placeholder"
    optionsCaption: "Locaș opțiune",
    // "Default Answer"
    defaultValue: "Răspuns implicit",
    // "Default texts"
    cellsDefaultRow: "Texte implicite",
    // "Edit survey settings"
    surveyEditorTitle: "Editează setările chestionarului",
    // "Edit: {0}"
    qEditorTitle: "Editează: {0}",
    // "Maximum character limit"
    maxLength: "Limită maximă de caractere",
    // "Build"
    buildExpression: "Construiește",
    // "Edit"
    editExpression: "Editează",
    // "and"
    and: "și",
    // "or"
    or: "sau",
    // "Remove"
    remove: "Elimină",
    // "Add Condition"
    addCondition: "Adaugă condiție",
    // "Select a question to start configuring conditions."
    emptyLogicPopupMessage: "Selectați o întrebare pentru a începe configurarea condițiilor.",
    // "If"
    if: "Dacă",
    // "then"
    then: "atunci",
    // "Target question"
    setToName: "Întrebarea țintă",
    // "Question to copy answer from"
    fromName: "Întrebarea de unde se copiază răspunsul",
    // "Question to skip to"
    gotoName: "Întrebarea la care săriți",
    // "Rule is incorrect"
    ruleIsNotSet: "Regula este incorectă",
    // "Add to the survey results"
    includeIntoResult: "Adăugați la rezultatele chestionarului",
    // "Make the title and description visible"
    showTitle: "Faceți titlul și descrierea vizibile",
    // "Expand/collapse title"
    expandCollapseTitle: "Extinde/colapsează titlul",
    // "Select a survey language"
    locale: "Selectați o limbă pentru chestionar",
    // "Select device type"
    simulator: "Selectați tipul de dispozitiv",
    // "Switch to landscape orientation"
    landscapeOrientation: "Comutați la orientarea peisaj",
    // "Switch to portrait orientation"
    portraitOrientation: "Comutați la orientarea portret",
    // "Clear hidden question values"
    clearInvisibleValues: "Ștergeți valorile întrebărilor ascunse",
    // "Limit to one response"
    cookieName: "Limitează la un singur răspuns",
    // "Auto-save survey progress on page change"
    partialSendEnabled: "Auto-salvați progresul chestionarului la schimbarea paginii",
    // "Save the \"Other\" option value as a separate property"
    storeOthersAsComment: "Salvați valoarea opțiunii „Altul” ca proprietate separată",
    // "Show page titles"
    showPageTitles: "Afișați titlurile paginilor",
    // "Show page numbers"
    showPageNumbers: "Afișați numerele paginilor",
    // "\"Previous Page\" button text"
    pagePrevText: "Textul butonului „Pagina anterioară”",
    // "\"Next Page\" button text"
    pageNextText: "Textul butonului „Pagina următoare”",
    // "\"Complete Survey\" button text"
    completeText: "Textul butonului „Completează chestionarul”",
    // "\"Review Answers\" button text"
    previewText: "Textul butonului „Revizuiește răspunsurile”",
    // "\"Edit Answer\" button text"
    editText: "Textul butonului „Editează răspunsul”",
    // "\"Start Survey\" button text"
    startSurveyText: "Textul butonului „Începe chestionarul”",
    // "Show navigation buttons"
    showNavigationButtons: "Afișați/ascundeți butoanele de navigare",
    // [Auto-translated] "Navigation buttons alignment"
    navigationButtonsLocation: "Alinierea butoanelor de navigare",
    // "Show the \"Previous Page\" button"
    showPrevButton: "Afișați butonul „Pagina anterioară”",
    // "First page is a start page"
    firstPageIsStartPage: "Prima pagină este o pagină de început",
    // "Show the \"Thank You\" page"
    showCompletePage: "Afișați pagina de „Mulțumire”",
    // "Auto-advance to the next page"
    autoAdvanceEnabled: "Trecerea automată la pagina următoare",
    // "Complete the survey automatically"
    autoAdvanceAllowComplete: "Finalizați chestionarul automat",
    // "Show the progress bar"
    showProgressBar: "Alinierea barei de progres",
    // [Auto-translated] "Progress bar alignment"
    progressBarLocation: "Alinierea barei de progres",
    // "Question title alignment"
    questionTitleLocation: "Alinierea titlului întrebării",
    // "Question title width"
    questionTitleWidth: "Lățimea titlului întrebării",
    // "Required symbol(s)"
    requiredMark: "Simbol(uri) obligatoriu(e)",
    // "Question title template, default is: '{no}. {require} {title}'"
    questionTitleTemplate: "Șablon titlu întrebare, implicit este: '{no}. {require} {title}'",
    // "Error message alignment"
    questionErrorLocation: "Alinierea mesajului de eroare",
    // "Focus first question on a new page"
    autoFocusFirstQuestion: "Focalizați pe prima întrebare la o pagină nouă",
    // "Question order"
    questionOrder: "Ordinea întrebărilor",
    // "Time limit to complete the survey"
    timeLimit: "Limită de timp pentru finalizarea chestionarului",
    // "Time limit to complete one page"
    timeLimitPerPage: "Limită de timp pentru finalizarea unei pagini",
    // [Auto-translated] "Use a timer"
    showTimer: "Utilizarea unui cronometru",
    // "Timer alignment"
    timerLocation: "Alinierea timerului",
    // "Timer mode"
    timerInfoMode: "Modul timerului",
    // "Panel display mode"
    renderMode: "Modul de afișare a panoului",
    // "Enable entry addition"
    allowAddPanel: "Permite adăugarea panoului",
    // "Enable entry removal"
    allowRemovePanel: "Permite eliminarea panoului",
    // "\"Add Entry\" button text"
    addPanelText: "Textul butonului „Adaugă panou”",
    // "\"Remove Entry\" button text"
    removePanelText: "Textul butonului „Elimină panou”",
    // "Show all elements on one page"
    isSinglePage: "Afișează toate elementele pe o singură pagină",
    // "HTML markup"
    html: "Marcaj HTML",
    // "Answer"
    setValue: "Răspuns",
    // "Storage format"
    dataFormat: "Format de stocare",
    // "Enable row addition"
    allowAddRows: "Permite adăugarea rândului",
    // "Enable row removal"
    allowRemoveRows: "Permite eliminarea rândului",
    // "Enable row reordering"
    allowRowReorder: "Permite reordonarea rândurilor",
    // "Does not apply if you specify the exact display area width or height."
    responsiveImageSizeHelp: "Nu se aplică dacă specificați lățimea sau înălțimea exactă a zonei de afișare.",
    // "Minimum display area width"
    minImageWidth: "Lățimea minimă a zonei de afișare",
    // "Maximum display area width"
    maxImageWidth: "Lățimea maximă a zonei de afișare",
    // "Minimum display area height"
    minImageHeight: "Înălțimea minimă a zonei de afișare",
    // "Maximum display area height"
    maxImageHeight: "Înălțimea maximă a zonei de afișare",
    // "Minimum value"
    minValue: "Valoarea minimă",
    // "Maximum value"
    maxValue: "Valoarea maximă",
    // [Auto-translated] "Case insensitive"
    caseInsensitive: "Insensibil la majuscule și minuscule",
    // "Minimum length (in characters)"
    minLength: "Lungimea minimă (în caractere)",
    // "Allow digits"
    allowDigits: "Permiteți cifre",
    // "Minimum count"
    minCount: "Numărul minim",
    // "Maximum count"
    maxCount: "Numărul maxim",
    // "Regular expression"
    regex: "Expresie regulată",
    surveyvalidator: {
      // "Error message"
      text: "Mesaj de eroare",
      // [Auto-translated] "Validation expression"
      expression: "Expresie de validare"
    },
    // "Total row header"
    totalText: "Antet rând total",
    // "Aggregation method"
    totalType: "Metoda de agregare",
    // "Total value expression"
    totalExpression: "Expresie valoare totală",
    // "Total value display format"
    totalDisplayStyle: "Format de afișare a valorii totale",
    // "Currency"
    totalCurrency: "Monedă",
    // "Formatted string"
    totalFormat: "Șir formatat",
    // "Survey logo"
    logo: "Logo-ul chestionarului",
    // "Survey layout"
    questionsOnPageMode: "Aspectul chestionarului",
    // "Restrict answer length"
    maxTextLength: "Restricționează lungimea răspunsului",
    // "Restrict comment length"
    maxCommentLength: "Restricționează lungimea comentariului",
    // "Comment area height (in lines)"
    commentAreaRows: "Înălțimea zonei de comentarii (în linii)",
    // "Auto-expand text areas"
    autoGrowComment: "Auto-extindere a zonelor de text",
    // "Allow users to resize text areas"
    allowResizeComment: "Permite utilizatorilor să redimensioneze zonele de text",
    // "Update input field values"
    textUpdateMode: "Actualizează valorile câmpurilor de intrare",
    // "Input mask type"
    maskType: "Tip mască de intrare",
    // "Set focus on the first invalid answer"
    autoFocusFirstError: "Focalizați pe primul răspuns invalid",
    // "Run validation"
    checkErrorsMode: "Rulați validarea",
    // [Auto-translated] "Validate empty fields on lost focus"
    validateVisitedEmptyFields: "Validarea câmpurilor goale pentru focalizarea pierdută",
    // "Redirect to an external link after submission"
    navigateToUrl: "Redirecționare către un link extern după trimitere",
    // "Dynamic external link"
    navigateToUrlOnCondition: "Link extern dinamic",
    // "Markup to show if the user already filled out this survey"
    completedBeforeHtml: "Marcaj de afișat dacă utilizatorul a completat deja acest chestionar",
    // "\"Thank You\" page markup"
    completedHtml: "Marcaj pagina de „Mulțumire”",
    // "Dynamic \"Thank You\" page markup"
    completedHtmlOnCondition: "Marcaj dinamic pentru pagina de „Mulțumire”",
    // "Markup to show while survey model is loading"
    loadingHtml: "Marcaj de afișat în timp ce modelul chestionarului se încarcă",
    // "Comment area text"
    commentText: "Text zona de comentarii",
    // "Autocomplete type"
    autocomplete: "Tip autocompletare",
    // "Label for \"True\""
    labelTrue: "Etichetă pentru „Adevărat”",
    // "Label for \"False\""
    labelFalse: "Etichetă pentru „Fals”",
    // "Show the Clear button"
    allowClear: "Afișează butonul de ștergere",
    // "Search Mode"
    searchMode: "Modul de căutare",
    // "Display format"
    displayStyle: "Format de afișare",
    // "Formatted string"
    format: "Șir formatat",
    // "Maximum fractional digits"
    maximumFractionDigits: "Numărul maxim de cifre fracționare",
    // "Minimum fractional digits"
    minimumFractionDigits: "Numărul minim de cifre fracționare",
    // "Display grouping separators"
    useGrouping: "Afișează separatori de grupare",
    // "Enable multiple file upload"
    allowMultiple: "Permite încărcarea multiplă de fișiere",
    // "Preview uploaded images"
    allowImagesPreview: "Previzualizează imaginile încărcate",
    // "Accepted file types"
    acceptedTypes: "Tipuri de fișiere acceptate",
    // "Wait for upload to complete"
    waitForUpload: "Așteptați finalizarea încărcării",
    // "Confirm file deletion"
    needConfirmRemoveFile: "Confirmați ștergerea fișierului",
    // "Row details alignment"
    detailPanelMode: "Alinierea extinderii rândului",
    // "Minimum row count"
    minRowCount: "Număr minim de rânduri",
    // "Maximum row count"
    maxRowCount: "Număr maxim de rânduri",
    // "Confirm row removal"
    confirmDelete: "Confirmați ștergerea rândului",
    // "Confirmation message"
    confirmDeleteText: "Mesaj de confirmare",
    // "Initial number of entries"
    panelCount: "Număr inițial de panouri",
    // "Minimum number of entries"
    minPanelCount: "Număr minim de panouri",
    // "Maximum number of entries"
    maxPanelCount: "Număr maxim de panouri",
    // "Initial entry state"
    panelsState: "Starea de colaps a panoului intern",
    // "\"Previous Entry\" button text"
    prevPanelText: "Textul butonului „Panoul anterior”",
    // "\"Next Entry\" button text"
    nextPanelText: "Textul butonului „Panoul următor”",
    // "\"Remove Entry\" button alignment"
    removePanelButtonLocation: "Alinierea butonului „Elimină panou”",
    // "Hide the question if it has no rows"
    hideIfRowsEmpty: "Ascunde întrebarea dacă nu are rânduri",
    // "Hide columns if there are no rows"
    hideColumnsIfEmpty: "Ascunde coloanele dacă nu sunt rânduri",
    // "Custom rating values"
    rateValues: "Valori personalizate de evaluare",
    // "Rating count"
    rateCount: "Număr de evaluări",
    // "Rating configuration"
    autoGenerate: "Configurare evaluare",
    slider: {
      // [Auto-translated] "Min value"
      min: "Valoarea minimă",
      // [Auto-translated] "Max value"
      max: "Valoarea maximă",
      // [Auto-translated] "Step value"
      step: "Valoarea pasului",
      // [Auto-translated] "Show scale labels"
      showLabels: "Afișarea etichetelor de scară",
      // [Auto-translated] "Show tooltips"
      tooltipVisibilityPG: "Afișarea sfaturilor ecran",
      // [Auto-translated] "Allow thumb crossing"
      allowSwap: "Permiteți încrucișarea degetului mare",
      // [Auto-translated] "Number of auto-generated labels"
      labelCount: "Numărul de etichete generate automat",
      // [Auto-translated] "Min value expression"
      minValueExpression: "Expresia valorii minime",
      // [Auto-translated] "Max value expression"
      maxValueExpression: "Expresie valoare maximă",
      // [Auto-translated] "Scale labels configuration"
      autoGenerate: "Configurarea etichetelor de scară",
      // [Auto-translated] "Slider type"
      sliderType: "Tip glisor",
      // [Auto-translated] "Min range length"
      minRangeLength: "Lungimea minimă a intervalului",
      // [Auto-translated] "Max range length"
      maxRangeLength: "Lungimea maximă a intervalului",
      // [Auto-translated] "Custom labels"
      customLabels: "Etichete personalizate",
      // [Auto-translated] "Label format"
      labelFormat: "Formatul etichetei",
      // [Auto-translated] "Tooltip format"
      tooltipFormat: "Formatul sfatului ecran"
    },
    file: {
      // [Auto-translated] "Image height"
      imageHeight: "Înălțimea imaginii",
      // [Auto-translated] "Image width"
      imageWidth: "Lățimea imaginii"
    },
    // "Hide the question if it has no choices"
    hideIfChoicesEmpty: "Ascunde întrebarea dacă nu are alegeri",
    // "Minimum width"
    minWidth: "Lățime minimă",
    // "Maximum width"
    maxWidth: "Lățime maximă",
    // "Width"
    width: "Lățime",
    // "Show column headers"
    showHeader: "Afișează anteturile coloanelor",
    // "Show horizontal scrollbar"
    horizontalScroll: "Afișează bara de derulare orizontală",
    // "Minimum column width"
    columnMinWidth: "Lățimea minimă a coloanei",
    // "Row header width"
    rowTitleWidth: "Lățimea antetului rândului",
    // "Value to store when \"True\" is selected"
    valueTrue: "Valoare de stocat când se selectează „Adevărat”",
    // "Value to store when \"False\" is selected"
    valueFalse: "Valoare de stocat când se selectează „Fals”",
    // "\"Value is below minimum\" error message"
    minErrorText: "Mesaj de eroare pentru „Valoarea este sub minim”",
    // "\"Value exceeds maximum\" error message"
    maxErrorText: "Mesaj de eroare pentru „Valoarea depășește maximul”",
    // "\"Empty comment\" error message"
    otherErrorText: "Mesaj de eroare pentru „Comentariu gol”",
    // "Error message for duplicate responses"
    keyDuplicationError: "Mesaj de eroare pentru răspunsuri duplicate",
    // "Minimum choices to select"
    minSelectedChoices: "Alegere minimă pentru selectare",
    // "Maximum choices to select"
    maxSelectedChoices: "Alegere maximă pentru selectare",
    // "Logo width"
    logoWidth: "Lățimea logo-ului",
    // "Logo height"
    logoHeight: "Înălțimea logo-ului",
    // "Read-only"
    readOnly: "Doar citire",
    // "Disable the read-only mode if"
    enableIf: "Dezactivează modul doar citire dacă",
    // "\"No rows\" message"
    noRowsText: "Mesaj „Nu sunt rânduri”",
    // "Separate special choices"
    separateSpecialChoices: "Separă alegerile speciale",
    // "Copy choices from the following question"
    choicesFromQuestion: "Copiază alegerile din următoarea întrebare",
    // "Which choice options to copy"
    choicesFromQuestionMode: "Care opțiuni de alegere să fie copiate",
    // [Auto-translated] "Use values from the following matrix column or panel question as choice IDs"
    choiceValuesFromQuestion: "Utilizați valorile din următoarea coloană de matrice sau întrebare de panou ca ID-uri de alegere",
    // [Auto-translated] "Use values from the following matrix column or panel question as choice texts"
    choiceTextsFromQuestion: "Utilizați valorile din următoarea coloană de matrice sau întrebare de panou ca texte de alegere",
    // "Display page titles in the progress bar"
    progressBarShowPageTitles: "Afișează titlurile paginilor în bara de progres",
    // "Display page numbers in the progress bar"
    progressBarShowPageNumbers: "Afișează numerele paginilor în bara de progres",
    // "Add a comment box"
    showCommentArea: "Adaugă o casetă de comentarii",
    // "Placeholder text for the comment box"
    commentPlaceholder: "Text locaș pentru caseta de comentarii",
    // "Show the labels as extreme values"
    displayRateDescriptionsAsExtremeItems: "Afișați etichetele ca valori extreme",
    // "Row order"
    rowOrder: "Ordinea rândurilor",
    // "Column layout"
    columnsLayout: "Aspect coloane",
    // "Nested column count"
    columnColCount: "Număr coloane imbricate",
    // "Correct Answer"
    correctAnswer: "Răspuns corect",
    // "Default Values"
    defaultPanelValue: "Valori implicite",
    // "Cell Texts"
    cells: "Texte celulă",
    // "Select a file or paste a file link..."
    fileInputPlaceholder: "Selectați un fișier sau introduceți un link către fișier...",
    // "Prevent duplicate responses in the following column"
    keyName: "Prevenirea răspunsurilor duplicate în următoarea coloană",
    itemvalue: {
      // "Make the option visible if"
      visibleIf: "Fă opțiunea vizibilă dacă",
      // "Make the option selectable if"
      enableIf: "Fă opțiunea selectabilă dacă"
    },
    "itemvalue@rows": {
      // "Make the row visible if"
      visibleIf: "Fă rândul vizibil dacă",
      // "Make the row editable if"
      enableIf: "Fă rândul editabil dacă"
    },
    imageitemvalue: {
      // "Alt text"
      text: "Text alternativ"
    },
    // "Logo alignment"
    logoPosition: "Alinierea logo-ului",
    // "Add logo..."
    addLogo: "Adăugați logo...",
    // "Change logo..."
    changeLogo: "Schimbați logo...",
    logoPositions: {
      // "Remove logo"
      none: "Eliminați logo-ul",
      // "Left"
      left: "Stânga",
      // "Right"
      right: "Dreapta",
      // "On the top"
      top: "Deasupra",
      // "In the bottom"
      bottom: "Dedesubt"
    },
    // [Auto-translated] "Preview mode"
    previewMode: "Modul de previzualizare",
    // [Auto-translated] "Enable grid layout"
    gridLayoutEnabled: "Activați aspectul grilei",
    // [Auto-translated] "Grid columns"
    gridLayoutColumns: "Coloane grilă",
    // [Auto-translated] "Mask settings"
    maskSettings: "Setările măștii",
    // [Auto-translated] "Row details error message alignment"
    detailErrorLocation: "Alinierea mesajelor de eroare cu detaliile rândului",
    // Creator tabs
    tabs: {
      panel: {
        // "Panel Layout"
        layout: "Aspect panou"
      },
      // "General"
      general: "General",
      // "Options"
      fileOptions: "Opțiuni",
      // "HTML Editor"
      html: "Editor HTML",
      // "Columns"
      columns: "Coloane",
      // "Rows"
      rows: "Rânduri",
      // "Choice Options"
      choices: "Opțiuni de alegere",
      // "Items"
      items: "Elemente",
      // "Visible If"
      visibleIf: "Vizibil dacă",
      // "Editable If"
      enableIf: "Editabil dacă",
      // "Required If"
      requiredIf: "Obligatoriu dacă",
      // "Rating Values"
      rateValues: "Valori evaluare",
      // [Auto-translated] "Slider Settings"
      sliderSettings: "Setări glisor",
      // "Choices from a Web Service"
      choicesByUrl: "Alegeri dintr-un serviciu web",
      // "Default Choices"
      matrixChoices: "Alegeri implicite",
      // "Text Inputs"
      multipleTextItems: "Câmpuri de text",
      // "Numbering"
      numbering: "Numerotare",
      // "Validators"
      validators: "Validatori",
      // "Navigation"
      navigation: "Navigare",
      // "Question Settings"
      question: "Setări întrebare",
      // "Pages"
      pages: "Pagini",
      // "Quiz Mode"
      timer: "Modul chestionar",
      // "Calculated Values"
      calculatedValues: "Valori calculate",
      // "Triggers"
      triggers: "Declanșatori",
      // "Title template"
      templateTitle: "Șablon titlu",
      // "Totals"
      totals: "Totaluri",
      // "Conditions"
      logic: "Condiții",
      // "Input Mask Settings"
      mask: "Setări mască de intrare",
      layout: {
        // "Panel Layout"
        panel: "Aspect panou",
        // "Layout"
        question: "Aspect",
        // "Layout"
        base: "Aspect"
      },
      // "Data"
      data: "Date",
      // "Validation"
      validation: "Validare",
      // "Individual Cell Texts"
      cells: "Texte celulă individuale",
      // "\"Thank You\" Page"
      showOnCompleted: "Pagina de „Mulțumire”",
      // "Logo in the Survey Header"
      logo: "Logo-ul în antetul chestionarului",
      // "Slider"
      slider: "Slider",
      // "Expression"
      expression: "Expresie",
      // "Question Settings"
      questionSettings: "Setări întrebare",
      // "Header"
      header: "Antet",
      // "Background"
      background: "Fundal",
      // "Appearance"
      appearance: "Aspect",
      // [Auto-translated] "Accent colors"
      accentColors: "Culori de accent",
      // [Auto-translated] "Surface background"
      surfaceBackground: "Fundal de suprafață",
      // [Auto-translated] "Scaling"
      scaling: "Scalare",
      // "Others"
      others: "Altele"
    },
    // "Edit property '{0}'"
    editProperty: "Editează proprietatea '{0}'",
    // "Items"
    items: "Elemente",
    // "Make choices visible if"
    choicesVisibleIf: "Fă alegerile vizibile dacă",
    // "Make choices selectable if"
    choicesEnableIf: "Fă alegerile selectabile dacă",
    // "Make columns visible if"
    columnsEnableIf: "Fă coloanele vizibile dacă",
    // "Make rows visible if"
    rowsEnableIf: "Fă rândurile vizibile dacă",
    // "Increase the inner indent"
    innerIndent: "Crește indentarea internă",
    // [Auto-translated] "Use answers from the last entry as default"
    copyDefaultValueFromLastEntry: "Utilizați răspunsurile de la ultima intrare ca implicit",
    // "Please enter a value."
    enterNewValue: "Vă rugăm să introduceți o valoare.",
    // "There are no questions in the survey."
    noquestions: "Nu există întrebări în chestionar.",
    // "Please create a trigger"
    createtrigger: "Vă rugăm să creați un declanșator",
    // "Press enter button to edit"
    titleKeyboardAdornerTip: "Apăsați butonul Enter pentru a edita",
    // "Press enter button to edit item, press delete button to delete item, press alt plus arrow up or arrow down to move item"
    keyboardAdornerTip: "Apăsați butonul Enter pentru a edita elementul, apăsați butonul Ștergere pentru a șterge elementul, apăsați Alt + săgeată în sus sau în jos pentru a muta elementul",
    // "On "
    triggerOn: "Pe ",
    // "Make pages visible"
    triggerMakePagesVisible: "Fă paginile vizibile",
    // "Make elements visible"
    triggerMakeQuestionsVisible: "Fă elementele vizibile",
    // "Complete the survey if successful."
    triggerCompleteText: "Completează chestionarul dacă este de succes.",
    // "The trigger is not set"
    triggerNotSet: "Declanșatorul nu este setat",
    // "Run if"
    triggerRunIf: "Execută dacă",
    // "Change value of: "
    triggerSetToName: "Schimbă valoarea pentru: ",
    // "Copy value from: "
    triggerFromName: "Copiază valoarea de la: ",
    // "Run this Expression"
    triggerRunExpression: "Execută această expresie",
    // "to: "
    triggerSetValue: "la: ",
    // "Go to the question"
    triggerGotoName: "Sari la întrebarea",
    // "Do not put the variable into the survey result."
    triggerIsVariable: "Nu adăuga variabila în rezultatul chestionarului.",
    // "Please enter a valid expression"
    triggerRunExpressionEmpty: "Vă rugăm să introduceți o expresie validă",
    // "Type expression here..."
    emptyExpressionPlaceHolder: "Tastați expresia aici...",
    // "No file chosen"
    noFile: "Niciun fișier ales",
    // "Clear hidden question values"
    clearIfInvisible: "Ștergeți valorile întrebărilor ascunse",
    // "Store values in the following property"
    valuePropertyName: "Stocați valorile în următoarea proprietate",
    // "Enable search-as-you-type"
    searchEnabled: "Activează căutarea în timp real",
    // "Hide selected items"
    hideSelectedItems: "Ascunde elementele selectate",
    // "Collapse the dropdown upon selection"
    closeOnSelect: "Colapsează lista derulantă la selecție",
    // "Vertical alignment within cells"
    verticalAlign: "Aliniere verticală în celule",
    // "Alternate row colors"
    alternateRows: "Culori alternante ale rândurilor",
    // "Make columns visible if"
    columnsVisibleIf: "Fă coloanele vizibile dacă",
    // "Make rows visible if"
    rowsVisibleIf: "Fă rândurile vizibile dacă",
    // "Placeholder text for the comment box"
    otherPlaceholder: "Text locaș pentru caseta de comentarii",
    // "Placeholder text for Local file"
    filePlaceholder: "Text locaș pentru fișier local",
    // "Placeholder text for Camera"
    photoPlaceholder: "Text locaș pentru cameră",
    // "Placeholder text for Local file or Camera"
    fileOrPhotoPlaceholder: "Text locaș pentru fișier local sau cameră",
    // "Rating icon"
    rateType: "Pictogramă de evaluare",
    // "Ex.: https://api.example.com/books"
    url_placeholder: "Ex.: https://api.example.com/cărți",
    // "Ex.: categories.fiction"
    path_placeholder: "Ex.: categorii.ficțiune",
    // "Ex.: a)"
    questionStartIndex_placeholder: "Ex.: a)",
    // "Ex.: 6in"
    width_placeholder: "Ex.: 6in",
    // "Ex.: 600px"
    minWidth_placeholder: "Ex.: 600px",
    // "Ex.: 50%"
    maxWidth_placeholder: "Ex.: 50%",
    // "auto"
    imageHeight_placeholder: "auto",
    // "auto"
    imageWidth_placeholder: "auto",
    // [Auto-translated] "Ex.: 100px"
    itemTitleWidth_placeholder: "Ex.: 100px",
    theme: {
      // "Theme"
      themeName: "Temă",
      // "Question appearance"
      isPanelless: "Aspect întrebări",
      // "Background and corner radius"
      editorPanel: "Fundal și rază de colț",
      // "Background and corner radius"
      questionPanel: "Fundal și rază de colț",
      // "Accent color"
      primaryColor: "Culoare accent",
      // "Panel and question box opacity"
      panelBackgroundTransparency: "Opacitatea panoului și a casetei de întrebări",
      // "Input element opacity"
      questionBackgroundTransparency: "Opacitatea elementelor de intrare",
      // "Survey font size"
      fontSize: "Dimensiunea fontului chestionarului",
      // "Survey scale factor"
      scale: "Factor de scalare chestionar",
      // "Corner radius"
      cornerRadius: "Raza colțului",
      // [Auto-translated] "Advanced mode"
      advancedMode: "Mod avansat",
      // "Title font"
      pageTitle: "Font titlu",
      // "Description font"
      pageDescription: "Font descriere",
      // "Title font"
      questionTitle: "Font titlu",
      // "Description font"
      questionDescription: "Font descriere",
      // "Font"
      editorFont: "Font",
      // "Opacity"
      backgroundOpacity: "Opacitate", // Auto-generated string
      // "Survey font family"
      "--sjs-font-family": "Familia fontului chestionarului",
      // "Background color"
      "--sjs-general-backcolor-dim": "Culoarea fundalului",
      // "Accent background colors"
      "--sjs-primary-backcolor": "Culorile fundalului accent",
      // "Accent foreground colors"
      "--sjs-primary-forecolor": "Culorile primului plan accent",
      // "Error message colors"
      "--sjs-special-red": "Culorile mesajului de eroare",
      // "Shadow effects"
      "--sjs-shadow-small": "Efecte de umbră",
      // "Shadow effects"
      "--sjs-shadow-inner": "Efecte de umbră",
      // "Colors"
      "--sjs-border-default": "Culori"
    },
    "header@header": {
      // "View"
      headerView: "Vizualizare",
      // "Logo alignment"
      logoPosition: "Alinierea logo-ului",
      // "Survey title font"
      surveyTitle: "Font titlu chestionar",
      // "Survey description font"
      surveyDescription: "Font descriere chestionar",
      // "Survey title font"
      headerTitle: "Font titlu chestionar",
      // "Survey description font"
      headerDescription: "Font descriere chestionar",
      // "Content area width"
      inheritWidthFrom: "Lățimea zonei de conținut",
      // "Text width"
      textAreaWidth: "Lățimea textului",
      // "Background color"
      backgroundColorSwitch: "Culoarea fundalului",
      // "Background image"
      backgroundImage: "Imagine fundal",
      // "Opacity"
      backgroundImageOpacity: "Opacitate",
      // "Overlap"
      overlapEnabled: "Suprapunere",
      // "Logo alignment"
      logoPositionX: "Alinierea logo-ului",
      // "Survey title alignment"
      titlePositionX: "Alinierea titlului chestionarului",
      // "Survey description alignment"
      descriptionPositionX: "Alinierea descrierii chestionarului"
    }
  },
  // Property values
  pv: {
    // "true"
    "true": "adevărat",
    // "false"
    "false": "fals",
    // "Local file"
    file: "Fișier local",
    // "Camera"
    camera: "Cameră",
    // "Local file or Camera"
    "file-camera": "Fișier local sau cameră",
    // "Inherit"
    inherit: "Moștenit",
    // "Visible"
    show: "Vizibil",
    // "Hidden"
    hide: "Ascuns",
    // "Inherit"
    default: "Moștenit",
    // "Initial"
    initial: "Inițial",
    // "Random"
    random: "Aleatoriu",
    // "Collapsed"
    collapsed: "Colapsat",
    // "Expanded"
    expanded: "Extins",
    // "None"
    none: "Niciunul",
    // "Ascending"
    asc: "Ascendent",
    // "Descending"
    desc: "Descendent",
    // "Indeterminate"
    indeterminate: "Nedeterminat",
    // "Selected"
    selected: "Selectat",
    // "Unselected"
    unselected: "Neselectat",
    // "decimal"
    decimal: "zecimal",
    // "currency"
    currency: "valută",
    // "percent"
    percent: "procent",
    // "First panel is expanded"
    firstExpanded: "Primul panou este extins",
    // "Hide question numbers"
    off: "Ascunde numerele întrebărilor",
    // "List"
    list: "Listă",
    // [Auto-translated] "Carousel"
    carousel: "Carusel",
    // "Tabs"
    tab: "File",
    // "Panel navigator + Progress bar at the top"
    progressTop: "Navigator panou + bară de progres în partea de sus",
    // "Panel navigator + Progress bar at the bottom"
    progressBottom: "Navigator panou + bară de progres în partea de jos",
    // "Panel navigator + Progress bar at the top and bottom"
    progressTopBottom: "Navigator panou + bară de progres în partea de sus și de jos",
    // "Horizontal"
    horizontal: "Orizontal",
    // "Vertical"
    vertical: "Vertical",
    // "Top"
    top: "Deasupra",
    // "Bottom"
    bottom: "Dedesubt",
    // "Top and bottom"
    topBottom: "Deasupra și dedesubt",
    // "Both"
    both: "Ambele",
    // "Left"
    left: "Stânga",
    // "Right"
    right: "Dreapta",
    // "Center"
    center: "Centru",
    // "Left and right"
    leftRight: "Stânga și dreapta",
    // "Middle"
    middle: "Mijloc",
    // "color"
    color: "culoare",
    // "date"
    date: "dată",
    // "datetime"
    datetime: "data și ora",
    // "datetime-local"
    "datetime-local": "data și ora locală",
    // "email"
    email: "email",
    // "month"
    month: "lună",
    // "number"
    number: "număr",
    // "password"
    password: "parolă",
    // "range"
    range: "interval",
    // "tel"
    tel: "număr de telefon",
    // "text"
    text: "text",
    // "time"
    time: "ora",
    // "url"
    url: "URL",
    // "week"
    week: "săptămână",
    // "Hidden"
    hidden: "Ascuns",
    // "Editable"
    edit: "Editabil",
    // "Read-only"
    display: "Doar citire",
    // "Contain"
    contain: "Conține",
    // "Cover"
    cover: "Acoperă",
    // "Fill"
    fill: "Umple",
    // "Next"
    next: "Următor",
    // "Last"
    last: "Ultim",
    // "Upon survey completion"
    onComplete: "La finalizarea chestionarului",
    // "When question gets hidden"
    onHidden: "Când întrebarea este ascunsă",
    // "When question or its panel/page gets hidden"
    onHiddenContainer: "Când întrebarea sau panoul/pagina este ascuns(ă)",
    clearInvisibleValues: {
      // "Never"
      none: "Niciodată"
    },
    clearIfInvisible: {
      // "Never"
      none: "Niciodată"
    },
    // [Auto-translated] "Radio Buttons"
    radio: "Butoane radio",
    inputType: {
      // "Color"
      color: "Culoare",
      // "Date"
      date: "Dată",
      // "Date and Time"
      "datetime-local": "Dată și oră",
      // "Email"
      email: "Email",
      // "Month"
      month: "Lună",
      // "Number"
      number: "Număr",
      // "Password"
      password: "Parolă",
      // "Range"
      range: "Interval",
      // "Phone Number"
      tel: "Număr de telefon",
      // "Text"
      text: "Text",
      // "Time"
      time: "Ora",
      // "URL"
      url: "URL",
      // "Week"
      week: "Săptămână"
    },
    sliderType: {
      // [Auto-translated] "Single-Value"
      single: "Valoare unică",
      // [Auto-translated] "Range"
      range: "Gama"
    },
    autocomplete: {
      // [Auto-translated] "Full Name"
      name: "Nume complet",
      // [Auto-translated] "Prefix"
      "honorific-prefix": "Prefix",
      // [Auto-translated] "First Name"
      "given-name": "Prenume",
      // [Auto-translated] "Middle Name"
      "additional-name": "Al doilea nume",
      // [Auto-translated] "Last Name"
      "family-name": "Nume de familie",
      // [Auto-translated] "Suffix"
      "honorific-suffix": "Sufix",
      // [Auto-translated] "Nickname"
      nickname: "Poreclă",
      // [Auto-translated] "Job Title"
      "organization-title": "Titlul postului",
      // [Auto-translated] "User Name"
      username: "Nume de utilizator",
      // [Auto-translated] "New Password"
      "new-password": "Parolă nouă",
      // [Auto-translated] "Current Password"
      "current-password": "Parolă curentă",
      // [Auto-translated] "Organization Name"
      organization: "Numele organizației",
      // [Auto-translated] "Full Street Address"
      "street-address": "Adresa stradală completă",
      // [Auto-translated] "Address Line 1"
      "address-line1": "Linia de adresă 1",
      // [Auto-translated] "Address Line 2"
      "address-line2": "Linia de adresă 2",
      // [Auto-translated] "Address Line 3"
      "address-line3": "Linia de adresă 3",
      // [Auto-translated] "Level 4 Address"
      "address-level4": "Adresa de nivel 4",
      // [Auto-translated] "Level 3 Address"
      "address-level3": "Nivel 3 Adresă",
      // [Auto-translated] "Level 2 Address"
      "address-level2": "Nivel 2 Adresă",
      // [Auto-translated] "Level 1 Address"
      "address-level1": "Adresa de nivel 1",
      // [Auto-translated] "Country Code"
      country: "Codul țării",
      // [Auto-translated] "Country Name"
      "country-name": "Numele țării",
      // [Auto-translated] "Postal Code"
      "postal-code": "Cod poștal",
      // [Auto-translated] "Cardholder Name"
      "cc-name": "Numele titularului cardului",
      // [Auto-translated] "Cardholder First Name"
      "cc-given-name": "Prenumele titularului cardului",
      // [Auto-translated] "Cardholder Middle Name"
      "cc-additional-name": "Al doilea prenume al deținătorului cardului",
      // [Auto-translated] "Cardholder Last Name"
      "cc-family-name": "Numele de familie al titularului cardului",
      // [Auto-translated] "Credit Card Number"
      "cc-number": "Numărul cardului de credit",
      // [Auto-translated] "Expiration Date"
      "cc-exp": "Data de expirare",
      // [Auto-translated] "Expiration Month"
      "cc-exp-month": "Luna de expirare",
      // [Auto-translated] "Expiration Year"
      "cc-exp-year": "Anul de expirare",
      // [Auto-translated] "Card Security Code"
      "cc-csc": "Codul de securitate al cardului",
      // [Auto-translated] "Credit Card Type"
      "cc-type": "Tip card de credit",
      // [Auto-translated] "Transaction Currency"
      "transaction-currency": "Moneda tranzacției",
      // [Auto-translated] "Transaction Amount"
      "transaction-amount": "Suma tranzacției",
      // [Auto-translated] "Preferred Language"
      language: "Limba preferată",
      // [Auto-translated] "Birthday"
      bday: "Aniversare",
      // [Auto-translated] "Birthday Day"
      "bday-day": "Ziua zilei de naștere",
      // [Auto-translated] "Birthday Month"
      "bday-month": "Luna zilei de naștere",
      // [Auto-translated] "Birthday Year"
      "bday-year": "Anul zilei de naștere",
      // [Auto-translated] "Gender"
      sex: "Gen",
      // [Auto-translated] "Website URL"
      url: "Adresa URL a site-ului web",
      // [Auto-translated] "Profile Photo"
      photo: "Fotografie de profil",
      // [Auto-translated] "Telephone Number"
      tel: "Număr telefonic",
      // [Auto-translated] "Country Code for Phone"
      "tel-country-code": "Codul de țară pentru telefon",
      // [Auto-translated] "National Telephone Number"
      "tel-national": "Număr de telefon național",
      // [Auto-translated] "Area Code"
      "tel-area-code": "Prefix",
      // [Auto-translated] "Local Phone Number"
      "tel-local": "Număr de telefon local",
      // [Auto-translated] "Local Phone Prefix"
      "tel-local-prefix": "Prefix telefon local",
      // [Auto-translated] "Local Phone Suffix"
      "tel-local-suffix": "Sufixul telefonului local",
      // [Auto-translated] "Phone Extension"
      "tel-extension": "Extensie de telefon",
      // [Auto-translated] "Email Address"
      email: "Adresa de e-mail",
      // [Auto-translated] "Instant Messaging Protocol"
      impp: "Protocol de mesagerie instantanee"
    },
    maskType: {
      // [Auto-translated] "None"
      none: "Niciunul",
      // [Auto-translated] "Pattern"
      pattern: "Model",
      // [Auto-translated] "Numeric"
      numeric: "Numerică",
      // [Auto-translated] "Date and Time"
      datetime: "Data și ora",
      // [Auto-translated] "Currency"
      currency: "Valută"
    },
    inputTextAlignment: {
      // [Auto-translated] "Auto"
      auto: "Automobil",
      // [Auto-translated] "Left"
      left: "Stânga",
      // [Auto-translated] "Right"
      right: "Dreapta"
    },
    // "All"
    all: "Toate",
    // "Page"
    page: "Pagină",
    // "Survey"
    survey: "Chestionar",
    // "When switching to the next page"
    onNextPage: "La trecerea la pagina următoare",
    // "After an answer is changed"
    onValueChanged: "După modificarea unui răspuns",
    // "Before an answer is changed"
    onValueChanging: "Înainte de modificarea unui răspuns",
    questionsOnPageMode: {
      // "Original structure"
      standard: "Structură originală",
      // "Show all questions on one page"
      singlePage: "Afișați toate întrebările pe o singură pagină",
      // "Show single question per page"
      questionPerPage: "Afișați o singură întrebare pe pagină",
      // [Auto-translated] "Show single input field per page"
      inputPerPage: "Afișează un singur câmp de introducere pe pagină"
    },
    // "No preview"
    noPreview: "Fără previzualizare",
    // "Show all questions"
    showAllQuestions: "Afișați toate întrebările",
    // "Show answered questions only"
    showAnsweredQuestions: "Afișați doar întrebările la care s-a răspuns",
    // [Auto-translated] "Show all questions"
    allQuestions: "Afișează toate întrebările",
    // [Auto-translated] "Show answered questions only"
    answeredQuestions: "Afișați numai întrebările la care au răspuns",
    // "Completed pages"
    pages: "Pagini completate",
    // "Answered questions"
    questions: "Întrebări cu răspuns",
    // "Answered required questions"
    requiredQuestions: "Întrebări obligatorii cu răspuns",
    // "Valid answers"
    correctQuestions: "Răspunsuri valide",
    // "Completed pages (button UI)"
    buttons: "Pagini completate (interfață buton)",
    // "Under the input field"
    underInput: "Sub câmpul de intrare",
    // "Under the question title"
    underTitle: "Sub titlul întrebării",
    // "On lost focus"
    onBlur: "La pierderea focalizării",
    // "While typing"
    onTyping: "În timp ce se tastează",
    // "Under the row"
    underRow: "Sub rând",
    // "Under the row, display one section only"
    underRowSingle: "Sub rând, afișați doar o singură extindere de rând",
    // "Auto"
    auto: "Auto",
    showNavigationButtons: {
      // "Hidden"
      none: "Ascuns"
    },
    timerInfoMode: {
      // "Both"
      combined: "Ambele"
    },
    addRowButtonLocation: {
      // "Based on matrix layout"
      default: "Pe baza aspectului matricei"
    },
    panelsState: {
      // "Locked"
      default: "Blocat",
      // "Collapse all"
      collapsed: "Colapsați toate",
      // "Expand all"
      expanded: "Extindeți toate",
      // "First expanded"
      firstExpanded: "Primul extins"
    },
    widthMode: {
      // "Static"
      static: "Static",
      // "Responsive"
      responsive: "Responsive"
    },
    contentMode: {
      // "Image"
      image: "Imagine",
      // "Video"
      video: "Video",
      // "YouTube"
      youtube: "YouTube"
    },
    displayMode: {
      // "Buttons"
      buttons: "Butoane",
      // "Dropdown"
      dropdown: "Dropdown"
    },
    rateColorMode: {
      // "Default"
      default: "Implicit",
      // "Scale"
      scale: "Scară"
    },
    scaleColorMode: {
      // "Monochrome"
      monochrome: "Monocrom",
      // "Colored"
      colored: "Colorat"
    },
    autoGenerate: {
      // "Auto-generate"
      "true": "Auto-generat",
      // "Manual"
      "false": "Manual"
    },
    rateType: {
      // "Labels"
      labels: "Etichete",
      // "Stars"
      stars: "Stele",
      // "Smileys"
      smileys: "Emoji"
    },
    state: {
      // "Locked"
      default: "Blocat"
    },
    showQuestionNumbers: {
      // "Auto-numbering"
      default: "Auto-numerotare",
      // "Auto-numbering"
      on: "Auto-numerotare",
      // "Reset on each page"
      onPage: "Resetare pe fiecare pagină",
      // "Reset on each panel"
      onpanel: "Resetare pe fiecare panou",
      // "Reset on each panel"
      onPanel: "Resetare pe fiecare panou",
      // [Auto-translated] "Recursive numbering"
      recursive: "Numerotare recursivă",
      // "Continue across the survey"
      onSurvey: "Continuă pe tot chestionarul",
      // "No numbering"
      off: "Fără numerotare"
    },
    descriptionLocation: {
      // "Under the question title"
      underTitle: "Sub titlul întrebării",
      // "Under the input field"
      underInput: "Sub câmpul de intrare"
    },
    selectToRankAreasLayout: {
      // "Next to choices"
      horizontal: "Lângă alegeri",
      // "Above choices"
      vertical: "Deasupra alegerilor"
    },
    displayStyle: {
      // "Decimal"
      decimal: "Zecimal",
      // "Currency"
      currency: "Valută",
      // "Percentage"
      percent: "Procent",
      // "Date"
      date: "Dată"
    },
    totalDisplayStyle: {
      // "Decimal"
      decimal: "Zecimal",
      // "Currency"
      currency: "Valută",
      // "Percentage"
      percent: "Procent",
      // "Date"
      date: "Dată"
    },
    rowOrder: {
      // "Original"
      initial: "Original"
    },
    questionOrder: {
      // "Original"
      initial: "Original"
    },
    progressBarLocation: {
      // [Auto-translated] "Top"
      top: "Culme",
      // [Auto-translated] "Bottom"
      bottom: "Fund",
      // [Auto-translated] "Top and bottom"
      topbottom: "Sus și jos",
      // [Auto-translated] "Above the header"
      aboveheader: "Deasupra antetului",
      // [Auto-translated] "Below the header"
      belowheader: "Sub antet",
      // [Auto-translated] "Hidden"
      off: "Ascuns"
    },
    // "Sum"
    sum: "Sumă",
    // "Count"
    count: "Numără",
    // "Min"
    min: "Min",
    // "Max"
    max: "Max",
    // "Avg"
    avg: "Medie",
    searchMode: {
      // "Contains"
      contains: "Conține",
      // "Starts with"
      startsWith: "Începe cu"
    },
    backgroundImageFit: {
      // "Auto"
      auto: "Auto",
      // "Cover"
      cover: "Acoperă",
      // "Contain"
      contain: "Conține",
      // "Stretch"
      fill: "Umple",
      // "Tile"
      tile: "Placă"
    },
    backgroundImageAttachment: {
      // "Fixed"
      fixed: "Fix",
      // "Scroll"
      scroll: "Derulare"
    },
    headerView: {
      // "Basic"
      basic: "De bază",
      // "Advanced"
      advanced: "Avansat"
    },
    inheritWidthFrom: {
      // "Same as survey"
      survey: "La fel ca chestionarul",
      // "Same as container"
      container: "La fel ca containerul"
    },
    backgroundColorSwitch: {
      // "None"
      none: "Niciunul",
      // "Accent color"
      accentColor: "Culoare accent",
      // "Custom"
      custom: "Personalizat"
    },
    colorPalette: {
      // "Light"
      light: "Deschis",
      // "Dark"
      dark: "Întunecat"
    },
    isPanelless: {
      // "Default"
      "false": "Implicit",
      // "Without Panels"
      "true": "Fără panouri"
    },
    progressBarInheritWidthFrom: {
      // [Auto-translated] "Same as survey"
      survey: "La fel ca sondajul",
      // [Auto-translated] "Same as container"
      container: "La fel ca containerul"
    }
  },
  // Operators
  op: {
    // "Empty"
    empty: "Gol",
    // "Not empty"
    notempty: "Nu este gol",
    // "Equals"
    equal: "Egal cu",
    // "Does not equal"
    notequal: "Nu este egal cu",
    // "Contains"
    contains: "Conține",
    // "Does not contain"
    notcontains: "Nu conține",
    // "Any of"
    anyof: "Oricare dintre",
    // "All of"
    allof: "Toate dintre",
    // "Greater than"
    greater: "Mai mare decât",
    // "Less than"
    less: "Mai mic decât",
    // "Greater than or equal to"
    greaterorequal: "Mai mare sau egal cu",
    // "Less than or equal to"
    lessorequal: "Mai mic sau egal cu",
    // "and"
    and: "și",
    // "or"
    or: "sau"
  },
  // Embed window
  ew: {
    // "Use Angular version"
    angular: "Utilizați versiunea Angular",
    // "Use jQuery version"
    jquery: "Utilizați versiunea jQuery",
    // "Use Knockout version"
    knockout: "Utilizați versiunea Knockout",
    // "Use React version"
    react: "Utilizați versiunea React",
    // "Use Vue version"
    vue: "Utilizați versiunea Vue",
    // "For bootstrap framework"
    bootstrap: "Pentru cadrul bootstrap",
    // "Modern theme"
    modern: "Tema modernă",
    // "Default theme"
    default: "Tema implicită",
    // "Orange theme"
    orange: "Tema portocalie",
    // "Darkblue theme"
    darkblue: "Tema albastru închis",
    // "Darkrose theme"
    darkrose: "Tema trandafir închis",
    // "Stone theme"
    stone: "Tema piatră",
    // "Winter theme"
    winter: "Tema iarnă",
    // "Winter-Stone theme"
    winterstone: "Tema iarnă-piatră",
    // "Show survey on a page"
    showOnPage: "Afișați chestionarul pe o pagină",
    // "Show survey in a window"
    showInWindow: "Afișați chestionarul într-o fereastră",
    // "Load Survey JSON from server"
    loadFromServer: "Încărcați JSON-ul chestionarului de pe server",
    // "Scripts and styles"
    titleScript: "Scripturi și stiluri",
    // "HTML"
    titleHtml: "HTML",
    // "JavaScript"
    titleJavaScript: "JavaScript"
  },
  // Preview (Survey)
  ts: {
    // "Select the page to test it"
    selectPage: "Selectați pagina pentru a o testa",
    // "Show invisible elements"
    showInvisibleElements: "Afișează elementele invizibile",
    // "Hide invisible elements"
    hideInvisibleElements: "Ascunde elementele invizibile",
    // [Auto-translated] "Previous"
    prevPage: "Precedent",
    // [Auto-translated] "Next"
    nextPage: "Următor"
  },
  validators: {
    // "Answer count"
    answercountvalidator: "Număr de răspunsuri",
    // "Email"
    emailvalidator: "Email",
    // "Expression"
    expressionvalidator: "Expresie",
    // "Number"
    numericvalidator: "Număr",
    // "Regex"
    regexvalidator: "Expresie regulată",
    // "Text"
    textvalidator: "Text"
  },
  triggers: {
    // "Complete survey"
    completetrigger: "Completează chestionarul",
    // "Set answer"
    setvaluetrigger: "Setează răspunsul",
    // "Copy answer"
    copyvaluetrigger: "Copiază răspunsul",
    // "Skip to question"
    skiptrigger: "Sari la întrebare",
    // "Run expression"
    runexpressiontrigger: "Execută expresia",
    // "change visibility (deprecated)"
    visibletrigger: "schimbare vizibilitate (depreciat)"
  },
  peplaceholder: {
    patternmask: {
      // "Ex.: +1(999)-999-99-99"
      pattern: "Ex.: +1(999)-999-99-99"
    },
    datetimemask: {
      // "Ex.: mm/dd/yyyy HH:MM:ss"
      pattern: "Ex.: mm/dd/yyyy HH:MM:ss"
    },
    currencymask: {
      // "Ex.: $"
      prefix: "Ex.: $",
      // "Ex.: USD"
      suffix: "Ex.: USD"
    },
    panelbase: {
      // "Ex.: 200px"
      questionTitleWidth: "Ex.: 200px"
    },
    panellayoutcolumn: {
      // "Ex.: 30%"
      effectiveWidth: "Ex.: 30%",
      // "Ex.: 200px"
      questionTitleWidth: "Ex.: 200px"
    }
  },
  pehelp: {
    panel: {
      // "A panel ID that is not visible to respondents."
      name: "Un ID al panoului care nu este vizibil pentru respondenți.",
      // "Type a panel subtitle."
      description: "Introduceți un subtitlu pentru panou.",
      // "Use the magic wand icon to set a conditional rule that determines panel visibility."
      visibleIf: "Utilizați pictograma bagheta magică pentru a seta o regulă condițională care determină vizibilitatea panoului.",
      // "Use the magic wand icon to set a conditional rule that disables the read-only mode for the panel."
      enableIf: "Utilizați pictograma bagheta magică pentru a seta o regulă condițională care dezactivează modul doar citire pentru panou.",
      // "Use the magic wand icon to set a conditional rule that prevents survey submission unless at least one nested question has an answer."
      requiredIf: "Utilizați pictograma bagheta magică pentru a seta o regulă condițională care împiedică trimiterea chestionarului dacă cel puțin o întrebare inclusă nu are un răspuns.",
      // "Applies to all questions within this panel. When set to \"Hidden\", it also hides question descriptions. If you want to override this setting, define title alignment rules for individual questions. The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Top\" by default). "
      questionTitleLocation: "Se aplică tuturor întrebărilor din acest panou. Dacă doriți să înlocuiți această setare, definiți reguli de aliniere a titlului pentru întrebările individuale. Opțiunea „Moștenește” aplică setarea de la nivel de pagină (dacă este setată) sau setarea de la nivel de chestionar („Sus” implicit).",
      // "Sets consistent width for question titles when they are aligned to the left of their question boxes. Accepts CSS values (px, %, in, pt, etc.)."
      questionTitleWidth: "Setează lățimea titlurilor întrebărilor atunci când sunt aliniate la stânga casetelor de întrebări. Acceptă valori CSS (px, %, in, pt etc.).",
      // "Sets the location of an error message in relation to all questions within the panel. The \"Inherit\" option applies the page-level (if set) or survey-level setting."
      questionErrorLocation: "Setează locația unui mesaj de eroare în raport cu toate întrebările din panou. Opțiunea „Moștenește” aplică setarea de la nivel de pagină (dacă este setată) sau setarea de la nivel de chestionar.",
      // "Keeps the original order of questions or randomizes them. The \"Inherit\" option applies the page-level (if set) or survey-level setting."
      questionOrder: "Păstrează ordinea originală a întrebărilor sau le randomizează. Opțiunea „Moștenește” aplică setarea de la nivel de pagină (dacă este setată) sau setarea de la nivel de chestionar.",
      // "Repositions the panel to the end of a selected page."
      page: "Repoziționează panoul la sfârșitul unei pagini selectate.",
      // "Adds space or margin between the panel content and the left border of the panel box."
      innerIndent: "Adaugă spațiu sau margine între conținutul panoului și marginea stângă a casetei panoului.",
      // "Unselect to display the panel in one line with the previous question or panel. The setting doesn't apply if the panel is the first element in your form."
      startWithNewLine: "Deselectați pentru a afișa panoul pe un rând cu întrebarea sau panoul anterior. Setarea nu se aplică dacă panoul este primul element din formular.",
      // "Choose from: \"Expanded\" - the panel is displayed in full and can be collapsed; \"Collapsed\" - the panel displays only the title and description and can be expanded; \"Locked\" - the panel is displayed in full and cannot be collapsed."
      state: "Alegeți dintre: „Extins” - panoul este afișat complet și poate fi colapsat; „Colapsat” - panoul afișează doar titlul și descrierea și poate fi extins; „Blocat” - panoul este afișat complet și nu poate fi colapsat.",
      // "Sets the width of the panel in proportion to other survey elements in the same line. Accepts CSS values (px, %, in, pt, etc.)."
      width: "Setează lățimea panoului în proporție cu alte elemente ale chestionarului de pe același rând. Acceptă valori CSS (px, %, in, pt etc.).",
      // [Auto-translated] "Assigns numbers to questions nested within this panel."
      showQuestionNumbers: "Atribuie numere întrebărilor imbricate în acest panou.",
      // [Auto-translated] "Specifies how many columns this panel spans within the grid layout."
      effectiveColSpan: "Specifică câte coloane se întinde acest panou în aspectul grilei.",
      // [Auto-translated] "This table lets you configure each grid column within the panel. It automatically sets the width percentage for each column based on the maximum number of elements in a row. To customize the grid layout, manually adjust these values and define the title width for all questions in each column."
      gridLayoutColumns: "Acest tabel vă permite să configurați fiecare coloană de grilă din panou. Setează automat procentul de lățime pentru fiecare coloană pe baza numărului maxim de elemente dintr-un rând. Pentru a particulariza aspectul grilei, ajustați manual aceste valori și definiți lățimea titlului pentru toate întrebările din fiecare coloană."
    },
    paneldynamic: {
      // "A panel ID that is not visible to respondents."
      name: "Un ID al panoului care nu este vizibil pentru respondenți.",
      // "Type a panel subtitle."
      description: "Introduceți un subtitlu pentru panou.",
      // "Use the magic wand icon to set a conditional rule that determines panel visibility."
      visibleIf: "Utilizați pictograma bagheta magică pentru a seta o regulă condițională care determină vizibilitatea panoului.",
      // "Use the magic wand icon to set a conditional rule that disables the read-only mode for the panel."
      enableIf: "Utilizați pictograma bagheta magică pentru a seta o regulă condițională care dezactivează modul doar citire pentru panou.",
      // "Use the magic wand icon to set a conditional rule that prevents survey submission unless at least one nested question has an answer."
      requiredIf: "Utilizați pictograma bagheta magică pentru a seta o regulă condițională care împiedică trimiterea chestionarului dacă cel puțin o întrebare inclusă nu are un răspuns.",
      // "Applies to all questions within this dynamic panel. If you want to override this setting, define title alignment rules for individual questions. The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Top\" by default)."
      templateQuestionTitleLocation: "Se aplică tuturor întrebărilor din acest panou. Dacă doriți să înlocuiți această setare, definiți reguli de aliniere a titlului pentru întrebările individuale. Opțiunea „Moștenește” aplică setarea de la nivel de pagină (dacă este setată) sau setarea de la nivel de chestionar („Sus” implicit).",
      // "Sets consistent width for question titles when they are aligned to the left of their question boxes. Accepts CSS values (px, %, in, pt, etc.)."
      templateQuestionTitleWidth: "Setează lățimea consecventă pentru titlurile întrebărilor atunci când sunt aliniate la stânga casetelor de întrebări. Acceptă valori CSS (px, %, in, pt etc.).",
      // "Sets the location of an error message in relation to a question with invalid input. Choose between: \"Top\" - an error text is placed at the top of the question box; \"Bottom\" - an error text is placed at the bottom of the question box. The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Top\" by default)."
      templateErrorLocation: "Setează locația unui mesaj de eroare în raport cu o întrebare cu intrare invalidă. Alegeți dintre: „Sus” - un text de eroare este plasat în partea de sus a casetei întrebării; „Jos” - un text de eroare este plasat în partea de jos a casetei întrebării. Opțiunea „Moștenește” aplică setarea de la nivel de pagină (dacă este setată) sau setarea de la nivel de chestionar („Sus” implicit).",
      // "Sets the location of an error message in relation to all questions within the panel. The \"Inherit\" option applies the page-level (if set) or survey-level setting."
      errorLocation: "Setează locația unui mesaj de eroare în raport cu toate întrebările din panou. Opțiunea „Moștenește” aplică setarea de la nivel de pagină (dacă este setată) sau setarea de la nivel de chestionar.",
      // "Repositions the panel to the end of a selected page."
      page: "Repoziționează panoul la sfârșitul unei pagini selectate.",
      // [Auto-translated] "Adds space or margin between the panel content and the left border of the panel box."
      indent: "Adaugă spațiu sau margine între conținutul panoului și marginea din stânga a casetei panoului.",
      // "Unselect to display the panel in one line with the previous question or panel. The setting doesn't apply if the panel is the first element in your form."
      startWithNewLine: "Deselectați pentru a afișa panoul pe un rând cu întrebarea sau panoul anterior. Setarea nu se aplică dacă panoul este primul element din formular.",
      // "Choose from: \"Expanded\" - the panel is displayed in full and can be collapsed; \"Collapsed\" - the panel displays only the title and description and can be expanded; \"Locked\" - the panel is displayed in full and cannot be collapsed."
      state: "Alegeți dintre: „Extins” - panoul este afișat complet și poate fi colapsat; „Colapsat” - panoul afișează doar titlul și descrierea și poate fi extins; „Blocat” - panoul este afișat complet și nu poate fi colapsat.",
      // "Sets the width of the panel in proportion to other survey elements in the same line. Accepts CSS values (px, %, in, pt, etc.)."
      width: "Setează lățimea panoului în proporție cu alte elemente ale chestionarului de pe același rând. Acceptă valori CSS (px, %, in, pt etc.).",
      // "Type in a template for entry titles. Use {panelIndex} for the entry's general position and {visiblePanelIndex} for its order among visible entries. Insert these placeholders into the pattern to add automatic numbering."
      templateTitle: "Introduceți un șablon pentru titlurile panourilor dinamice. Utilizați {panelIndex} pentru poziția generală a panoului și {visiblePanelIndex} pentru ordinea acestuia printre panourile vizibile. Introduceți aceste substituenți în model pentru a adăuga numerotare automată.",
      // "Type in a template for tab titles. Use {panelIndex} for an entry's general position and {visiblePanelIndex} for its order among visible entries. Insert these placeholders into the pattern to add automatic numbering."
      templateTabTitle: "Introduceți un șablon pentru titlurile filelor. Utilizați {panelIndex} pentru poziția generală a unui panou și {visiblePanelIndex} pentru ordinea acestuia printre panourile vizibile. Introduceți aceste substituenți în model pentru a adăuga numerotare automată.",
      // "A fallback text for tab titles that applies when the tab title pattern doesn't produce a meaningful value."
      tabTitlePlaceholder: "Un text fallback pentru titlurile filelor care se aplică atunci când șablonul titlului filei nu produce o valoare semnificativă.",
      // "This setting allows you to control the visibility of individual entries within the dynamic panel. Use the `{panel}` placeholder to reference the current entry in your expression."
      templateVisibleIf: "Această setare vă permite să controlați vizibilitatea panourilor individuale din panoul dinamic. Utilizați substituentul `{panel}` pentru a face referire la panoul curent în expresia dvs.",
      // "This setting is automatically inherited by all questions within this dynamic panel. If you want to override this setting, define title alignment rules for individual questions. The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Top\" by default)."
      titleLocation: "Această setare este moștenită automat de toate întrebările din acest panou. Dacă doriți să înlocuiți această setare, definiți reguli de aliniere a titlului pentru întrebările individuale. Opțiunea „Moștenește” aplică setarea de la nivel de pagină (dacă este setată) sau setarea de la nivel de chestionar („Sus” implicit).",
      // "The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Under the panel title\" by default)."
      descriptionLocation: "Opțiunea „Moștenește” aplică setarea de la nivel de pagină (dacă este setată) sau setarea de la nivel de chestionar („Sub titlul panoului” implicit).",
      // "Defines the position of a newly added entry. By default, new entries are added to the end. Select \"Next\" to insert a new entry after the current one."
      newPanelPosition: "Definește poziția unui panou nou adăugat. În mod implicit, panourile noi sunt adăugate la sfârșit. Selectați „Următor” pentru a introduce un nou panou după cel curent.",
      // "Duplicates answers from the last entry and assigns them to the next added entry."
      copyDefaultValueFromLastEntry: "Duplică răspunsurile din ultimul panou și le atribuie următorului panou dinamic adăugat.",
      // "Reference a question name to require a user to provide a unique response for this question in each entry."
      keyName: "Faceți referire la un nume de întrebare pentru a solicita unui utilizator să furnizeze un răspuns unic pentru această întrebare în fiecare panou.",
      // "Triggers a confirmation prompt before removing an entry."
      confirmDelete: "Declanșează o solicitare de confirmare înainte de a elimina un panou."
    },
    matrixdynamic: {
      // [Auto-translated] "Triggers a confirmation prompt before removing a row."
      confirmDelete: "Declanșează o solicitare de confirmare înainte de a elimina un rând.",
      // [Auto-translated] "Automatically expands the detail section when a new row is added to the matrix."
      detailPanelShowOnAdding: "Extinde automat secțiunea de detalii atunci când se adaugă un rând nou la matrice."
    },
    // "Duplicates answers from the last row and assigns them to the next added dynamic row."
    copyDefaultValueFromLastEntry: "Duplică răspunsurile din ultimul rând și le atribuie următorului rând dinamic adăugat.",
    // "This setting allows you to assign a default answer value based on an expression. The expression can include basic calculations - `{q1_id} + {q2_id}`, Boolean expressions, such as `{age} > 60`, and functions: `iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, etc. The value determined by this expression serves as the initial default value that can be overridden by a respondent's manual input."
    defaultValueExpression: "Această setare vă permite să atribuiți o valoare implicită a răspunsului pe baza unei expresii. Expresia poate include calcule de bază - `{q1_id} + {q2_id}`, expresii booleene, cum ar fi `{age} > 60`, și funcții: `iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, etc. Valoarea determinată de această expresie servește ca valoare implicită inițială care poate fi suprascrisă de o intrare manuală a respondentului.",
    // "Use the magic wand icon to set a conditional rule that determines when a respondent's input is reset to the value based on the \"Default value expression\" or \"Set value expression\" or to the \"Default answer\" value (if either is set)."
    resetValueIf: "Utilizați pictograma bagheta magică pentru a seta o regulă condițională care determină când o intrare a respondentului este resetată la valoarea pe baza „Expresiei valorii implicite” sau „Expresiei de setare a valorii” sau la valoarea „Răspuns implicit” (dacă oricare este setată).",
    // "Use the magic wand icon to set a conditional rule that determines when to run the \"Set value expression\" and dynamically assign the resulting value as a response."
    setValueIf: "Utilizați pictograma bagheta magică pentru a seta o regulă condițională care determină când să rulați „Expresia de setare a valorii” și să atribuiți dinamic valoarea rezultată ca răspuns.",
    // "Specify an expression that defines the value to be set when the conditions in the \"Set value if\" rule are met. The expression can include basic calculations - `{q1_id} + {q2_id}`, Boolean expressions, such as `{age} > 60`, and functions: `iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, etc. The value determined by this expression can be overridden by a respondent's manual input."
    setValueExpression: "Specificați o expresie care definește valoarea ce trebuie setată atunci când condițiile din regula „Setați valoarea dacă” sunt îndeplinite. Expresia poate include calcule de bază - `{q1_id} + {q2_id}`, expresii booleene, cum ar fi `{age} > 60`, și funcții: `iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, etc. Valoarea determinată de această expresie poate fi suprascrisă de o intrare manuală a respondentului.",
    // "Survey Creator allows you to manually adjust the inline widths of form elements to control the layout. If this doesn't produce the desired outcome, you can enable the grid layout, which structures form elements using a column-based system. To configure layout columns, select a page or panel and use the \"Question Settings\" → \"Grid columns\" table. To adjust how many columns a question spans, select it and set the desired value in the \"Layout\" → \"Column span\" field."
    gridLayoutEnabled: "Survey Creator vă permite să ajustați manual lățimile în linie ale elementelor de formular pentru a controla aspectul. Dacă acest lucru nu produce rezultatul dorit, puteți activa aspectul grilei, care structuri formează elemente folosind un sistem bazat pe coloane. Pentru a configura coloanele de aspect, selectați o pagină sau un panou și utilizați tabelul \"Setări întrebări\" → \"Coloane grilă\". Pentru a ajusta câte coloane se întinde pe o întrebare, selectați-o și setați valoarea dorită în câmpul \"Aspect\" → \"Spania coloanelor\".",
    question: {
      // "A question ID that is not visible to respondents."
      name: "Un ID al întrebării care nu este vizibil pentru respondenți.",
      // "Type a question subtitle."
      description: "Introduceți un subtitlu pentru întrebare.",
      // "Use the magic wand icon to set a conditional rule that determines question visibility."
      visibleIf: "Utilizați pictograma bagheta magică pentru a seta o regulă condițională care determină vizibilitatea întrebării.",
      // "Use the magic wand icon to set a conditional rule that disables the read-only mode for the question."
      enableIf: "Utilizați pictograma bagheta magică pentru a seta o regulă condițională care dezactivează modul doar citire pentru întrebare.",
      // "Use the magic wand icon to set a conditional rule that prevents survey advancing or submission unless the question received an answer."
      requiredIf: "Utilizați pictograma bagheta magică pentru a seta o regulă condițională care împiedică avansarea sau trimiterea chestionarului dacă întrebarea nu a primit un răspuns.",
      // "Unselect to display the question in one line with the previous question or panel. The setting doesn't apply if the question is the first element in your form."
      startWithNewLine: "Deselectați pentru a afișa întrebarea pe un rând cu întrebarea sau panoul anterior. Setarea nu se aplică dacă întrebarea este primul element din formular.",
      // "Repositions the question to the end of a selected page."
      page: "Repoziționează întrebarea la sfârșitul unei pagini selectate.",
      // "Choose from: \"Expanded\" - the question box is displayed in full and can be collapsed; \"Collapsed\" - the question box displays only the title and description and can be expanded; \"Locked\" - the question box is displayed in full and cannot be collapsed."
      state: "Alegeți dintre: „Extins” - caseta întrebării este afișată complet și poate fi colapsată; „Colapsat” - caseta întrebării afișează doar titlul și descrierea și poate fi extinsă; „Blocat” - caseta întrebării este afișată complet și nu poate fi colapsată.",
      // "Overrides title alignment rules defined on a panel, page, or survey level. When set to \"Hidden\", it also hides question descriptions. The \"Inherit\" option applies any higher-level settings (if set) or survey-level setting (\"Top\" by default)."
      titleLocation: "Înlocuiește regulile de aliniere a titlului definite la nivel de panou, pagină sau chestionar. Opțiunea „Moștenește” aplică orice setare de nivel superior (dacă este setată) sau setarea de la nivel de chestionar („Sus” implicit).",
      // "The \"Inherit\" option applies the survey-level setting (\"Under the question title\" by default)."
      descriptionLocation: "Opțiunea „Moștenește” aplică setarea de la nivel de chestionar („Sub titlul întrebării” implicit).",
      // "Sets the location of an error message in relation to the question with invalid input. Choose between: \"Top\" - an error text is placed at the top of the question box; \"Bottom\" - an error text is placed at the bottom of the question box. The \"Inherit\" option applies the survey-level setting (\"Top\" by default)."
      errorLocation: "Setează locația unui mesaj de eroare în raport cu întrebarea cu intrare invalidă. Alegeți dintre: „Sus” - un text de eroare este plasat în partea de sus a casetei întrebării; „Jos” - un text de eroare este plasat în partea de jos a casetei întrebării. Opțiunea „Moștenește” aplică setarea de la nivel de chestionar („Sus” implicit).",
      // "Adds space or margin between the question content and the left border of the question box."
      indent: "Adaugă spațiu sau margine între conținutul întrebării și marginea stângă a casetei întrebării.",
      // "Sets the width of the question in proportion to other survey elements in the same line. Accepts CSS values (px, %, in, pt, etc.)."
      width: "Setează lățimea întrebării în proporție cu alte elemente ale chestionarului de pe același rând. Acceptă valori CSS (px, %, in, pt etc.).",
      // "Choose from: \"On lost focus\" - the value is updated when the input field loses focus; \"While typing\" - the value is updated in real-time, as users are typing. The \"Inherit\" option applies the survey-level setting (\"On lost focus\" by default)."
      textUpdateMode: "Alegeți dintre: „La pierderea focalizării” - valoarea este actualizată când câmpul de intrare pierde focalizarea; „În timp ce se tastează” - valoarea este actualizată în timp real, pe măsură ce utilizatorii tastează. Opțiunea „Moștenește” aplică setarea de la nivel de chestionar („La pierderea focalizării” implicit).",
      // "You can use any web service as a data source for multiple-choice questions. To populate choice values, enter the URL of the service providing the data."
      url: "Puteți utiliza orice serviciu web ca sursă de date pentru întrebările cu multiple opțiuni de alegere. Pentru a popula valorile opțiunilor, introduceți URL-ul serviciului care furnizează datele.",
      // "A comparison operation used to filter the drop-down list."
      searchMode: "O operație de comparație utilizată pentru a filtra lista derulantă.",
      // "Long texts in choice options will automatically generate line breaks to fit within the drop-down menu. Unselect if you want the texts to clip."
      textWrapEnabled: "Textele lungi din opțiunile de alegere vor genera automat întreruperi de linie pentru a se încadra în meniul derulant. Deselectați dacă doriți ca textele să fie tăiate.",
      // [Auto-translated] "Specifies how many columns this question spans within the grid layout."
      effectiveColSpan: "Specifică câte coloane se întinde această întrebare în aspectul grilei."
    },
    surveyvalidator: {
      // "Use the magic wand icon to define when the question's value is considered valid."
      expression: "Utilizați pictograma baghetă magică pentru a defini când valoarea întrebării este considerată validă."
    },
    signaturepad: {
      // "Sets the width of the displayed signature area and the resulting image."
      signatureWidth: "Setează lățimea zonei de semnătură afișate și a imaginii rezultate.",
      // "Sets the height of the displayed signature area and the resulting image."
      signatureHeight: "Setează înălțimea zonei de semnătură afișate și a imaginii rezultate.",
      // "Select if you want the signature area to fill all available space within the question box while maintaining the default 3:2 aspect ratio. When custom width and height values are set, the setting will keep the aspect ratio of these dimensions."
      signatureAutoScaleEnabled: "Selectați dacă doriți ca zona de semnătură să umple tot spațiul disponibil din caseta întrebării menținând aspectul implicit 3:2. Când sunt setate valori de lățime și înălțime personalizate, setarea va menține aspectul acestor dimensiuni."
    },
    file: {
      // "Specifies the display height of uploaded images in the preview and the actual height of images taken with the camera. In single file upload mode, the display height is limited by the preview area; in multiple file upload mode, it is limited by the thumbnail area."
      imageHeight: "Specifică înălțimea de afișare a imaginilor încărcate în previzualizare și înălțimea reală a imaginilor realizate cu aparatul foto. În modul de încărcare a unui singur fișier, înălțimea afișajului este limitată de zona de previzualizare; În modul de încărcare a mai multor fișiere, este limitat de zona de miniaturi.",
      // "Specifies the display width of uploaded images in the preview and the actual width of images taken with the camera. In single file upload mode, the display width is limited by the preview area; in multiple file upload mode, it is limited by the thumbnail area."
      imageWidth: "Specifică lățimea de afișare a imaginilor încărcate în previzualizare și lățimea reală a imaginilor realizate cu camera. În modul de încărcare a unui singur fișier, lățimea afișării este limitată de zona de previzualizare; În modul de încărcare a mai multor fișiere, este limitat de zona de miniaturi.",
      // [Auto-translated] "Displays thumbnail previews for uploaded files when possible. Unselect if you want to show file icons instead."
      allowImagesPreview: "Afișează previzualizări în miniatură pentru fișierele încărcate atunci când este posibil. Deselectați dacă doriți să afișați pictogramele fișierelor."
    },
    image: {
      // "The \"Auto\" option automatically determines the suitable mode for display - Image, Video, or YouTube - based on the source URL provided."
      contentMode: "Opțiunea „Auto” determină automat modul potrivit pentru afișare - Imagine, Video sau YouTube - pe baza URL-ului sursă furnizat."
    },
    imagepicker: {
      // "Overrides the minimum and maximum height values."
      imageHeight: "Înlocuiește valorile minime și maxime de înălțime.",
      // "Overrides the minimum and maximum width values."
      imageWidth: "Înlocuiește valorile minime și maxime de lățime.",
      // "\"Value\" serves as an item ID used in conditional rules; \"Text\" is displayed to respondents."
      choices: "\"Valoare\" servește ca un ID al elementului utilizat în regulile condiționale; „Text” este afișat respondenților.",
      // "Choose between \"Image\" and \"Video\" to set the content mode of the media selector. If \"Image\" is selected, ensure that all options provided are image files in the following formats: JPEG, GIF, PNG, APNG, SVG, BMP, ICO. Similarly, if \"Video\" is selected, ensure that all options are direct links to video files in the following formats: MP4, MOV, WMV, FLV, AVI, MKV. Please note that YouTube links are not supported for video options."
      contentMode: "Alegeți între „Imagine” și „Video” pentru a seta modul de conținut al selectorului media. Dacă este selectată „Imagine”, asigurați-vă că toate opțiunile furnizate sunt fișiere de imagine în următoarele formate: JPEG, GIF, PNG, APNG, SVG, BMP, ICO. În mod similar, dacă este selectat „Video”, asigurați-vă că toate opțiunile sunt linkuri directe către fișiere video în următoarele formate: MP4, MOV, WMV, FLV, AVI, MKV. Vă rugăm să rețineți că linkurile YouTube nu sunt acceptate pentru opțiunile video."
    },
    text: {
      // "This setting only resizes the input field and doesn't affect the width of the question box. To limit the accepted input length, go to \"Validation\" → \"Maximum character limit\"."
      size: "Această setare redimensionează doar câmpul de intrare și nu afectează lățimea casetei întrebării. Pentru a limita lungimea acceptată a intrării, accesați <b>Validare → Limită maximă de caractere</b>."
    },
    comment: {
      // "Sets the number of displayed lines in the input field. If the input takes up more lines, the scroll bar will appear."
      rows: "Setează numărul de linii afișate în câmpul de intrare. Dacă intrarea ocupă mai multe linii, va apărea bara de derulare."
    },
    // survey templates
    survey: {
      // "Select if you want to prevent respondents from filling out your survey."
      readOnly: "Selectați dacă doriți să împiedicați respondenții să completeze chestionarul.",
      // "Sets the location of the progress bar. The \"Auto\" value displays the progress bar above or below the survey header."
      progressBarLocation: "Setează locația barei de progres. Valoarea \"Auto\" afișează bara de progres deasupra sau dedesubtul antetului sondajului."
    },
    matrixdropdowncolumn: {
      // "A column ID that is not visible to respondents."
      name: "Un ID al coloanei care nu este vizibil pentru respondenți.",
      // "When enabled for a column, a respondent is required to provide a unique response for each question within this column."
      isUnique: "Când este activată pentru o coloană, un respondent este obligat să furnizeze un răspuns unic pentru fiecare întrebare din această coloană.",
      // "Sets the number of displayed lines in the input field. If the input takes up more lines, the scroll bar will appear."
      rows: "Setează numărul de linii afișate în câmpul de intrare. Dacă intrarea ocupă mai multe linii, va apărea bara de derulare.",
      // "Use the magic wand icon to set a conditional rule that determines column visibility."
      visibleIf: "Utilizați pictograma bagheta magică pentru a seta o regulă condițională care determină vizibilitatea coloanei.",
      // "Use the magic wand icon to set a conditional rule that disables the read-only mode for the column."
      enableIf: "Utilizați pictograma bagheta magică pentru a seta o regulă condițională care dezactivează modul doar citire pentru coloană.",
      // "Use the magic wand icon to set a conditional rule that prevents survey submission unless at least one nested question has an answer."
      requiredIf: "Utilizați pictograma bagheta magică pentru a seta o regulă condițională care împiedică trimiterea chestionarului dacă cel puțin o întrebare inclusă nu are un răspuns.",
      // "When selected, creates an individual column for each choice option."
      showInMultipleColumns: "Când este selectat, creează o coloană individuală pentru fiecare opțiune de alegere.",
      // "Arranges choice options in a multi-column layout. When set to 0, the options are displayed in a single line. When set to -1, the actual value is inherited from the \"Nested column count\" property of the parent matrix."
      colCount: "Aranjează opțiunile de alegere într-un aspect cu mai multe coloane. Când este setat la 0, opțiunile sunt afișate într-o singură linie. Când este setată la -1, valoarea reală este moștenită de la proprietatea \"Număr de coloane imbricate\" a matricei părinte."
    },
    slider: {
      // "The lowest number that users can select."
      min: "Cel mai mic număr pe care îl pot selecta utilizatorii.",
      // "The highest number that users can select."
      max: "Cel mai mare număr pe care îl pot selecta utilizatorii.",
      // "The interval between selectable scale values. For example, a step of 5 will allow users to select 0, 5, 10, etc."
      step: "Intervalul dintre valorile scalei selectabile. De exemplu, un pas de 5 va permite utilizatorilor să selecteze 0, 5, 10 etc.",
      // "The minimum distance between the slider thumbs a user can set."
      minRangeLength: "Distanța minimă dintre degetele glisante pe care le poate seta un utilizator.",
      // "The maximum distance between the slider thumbs a user can set."
      maxRangeLength: "Distanța maximă dintre degetele glisante pe care le poate seta un utilizator.",
      // "Specifies how many scale labels to generate. A value of -1 means the number is calculated automatically based on the Min value and Max value."
      labelCount: "Specifică câte etichete de scară să genereze. O valoare de -1 înseamnă că numărul este calculat automat pe baza valorii minime și a valorii maxime.",
      // "Use `{0}` as a placeholder for the actual value."
      labelFormat: "Utilizați \"{0}\" ca substituent pentru valoarea reală.",
      // "Allows you to define custom labels at specific values and optionally assign corresponding text to them (e.g., 0 = \"Poor\", 100 = \"Excellent\")."
      customLabels: "Vă permite să definiți etichete personalizate la anumite valori și, opțional, să le atribuiți textul corespunzător (de exemplu, 0 = \"Slab\", 100 = \"Excelent\").",
      // "Use `{0}` as a placeholder for the actual value."
      tooltipFormat: "Utilizați \"{0}\" ca substituent pentru valoarea reală.",
      // "Allows users to move one thumb past the other."
      allowSwap: "Permite utilizatorilor să treacă cu degetul mare pe lângă celălalt.",
      // [Auto-translated] "Displays a button that clears the selected slider value and sets it to undefined."
      allowClear: "Afișează un buton care șterge valoarea glisorului selectată și o setează la nedefinită.",
      // "Defines the slider's minimum value dynamically using an expression. Supports basic calculations (e.g, `{q1_id} + {q2_id}`), Boolean logic (e.g., `{age} > 60`), and functions like `iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, and more."
      minValueExpression: "Definește valoarea minimă a glisorului în mod dinamic folosind o expresie. Suportă calcule de bază (de exemplu, '{q1_id} + {q2_id}'), logică booleană (de exemplu, '{age} > 60') și funcții precum 'iif()', 'today()', 'age()', 'min()', 'max()', 'avg()' și multe altele.",
      // "Defines the slider's maximum value dynamically using an expression. Supports basic calculations (e.g, `{q1_id} + {q2_id}`), Boolean logic (e.g., `{age} > 60`), and functions like `iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, and more."
      maxValueExpression: "Definește valoarea maximă a glisorului în mod dinamic folosind o expresie. Suportă calcule de bază (de exemplu, '{q1_id} + {q2_id}'), logică booleană (de exemplu, '{age} > 60') și funcții precum 'iif()', 'today()', 'age()', 'min()', 'max()', 'avg()' și multe altele."
    },
    // [Auto-translated] "Makes this choice exclusive. When selected by a user, it will automatically deselect all other options in the question."
    isExclusive: "Face ca această alegere să fie exclusivă. Când este selectat de un utilizator, acesta va deselecta automat toate celelalte opțiuni din întrebare.",
    // [Auto-translated] "Select if uppercase and lowercase letters in the regular expression must be treated as equivalent."
    caseInsensitive: "Selectați dacă literele mari și mici din expresia regulată trebuie tratate ca echivalente.",
    // "Choose from: \"Static\" - sets a fixed width; \"Responsive\" - makes the survey occupy the full width of the screen; \"Auto\" - applies either of the two depending on the question types used."
    widthMode: "Alegeți dintre: „Static” - setează o lățime fixă; „Responsive” - face ca chestionarul să ocupe întreaga lățime a ecranului; „Auto” - aplică una dintre cele două în funcție de tipurile de întrebări utilizate.",
    // "Assign a unique cookie value for your survey. The cookie will be set in a respondent's browser upon survey completion to prevent repetitive survey submissions."
    cookieName: "Atribuiți o valoare unică cookie-ului pentru chestionarul dvs. Cookie-ul va fi setat în browserul unui respondent la finalizarea chestionarului pentru a preveni trimiterea repetată a chestionarului.",
    // "Paste an image link (no size limits) or click the folder icon to browse a file from your computer (up to 64KB)."
    logo: "Introduceți un link către o imagine (fără limită de dimensiune) sau faceți clic pe pictograma folder pentru a naviga un fișier de pe computerul dvs. (până la 64KB).",
    // "Sets a logo width in CSS units (px, %, in, pt, etc.)."
    logoWidth: "Setează o lățime a logo-ului în unități CSS (px, %, in, pt etc.).",
    // "Sets a logo height in CSS units (px, %, in, pt, etc.)."
    logoHeight: "Setează o înălțime a logo-ului în unități CSS (px, %, in, pt etc.).",
    // "Choose from: \"None\" - image maintains its original size; \"Contain\" - image is resized to fit while maintaining its aspect ratio; \"Cover\" - image fills the entire box while maintaining its aspect ratio; \"Fill\" - image is stretched to fill the box without maintaining its aspect ratio."
    logoFit: "Alegeți dintre: „Niciunul” - imaginea își menține dimensiunea originală; „Conține” - imaginea este redimensionată pentru a se potrivi păstrând aspectul său; „Acoperă” - imaginea umple întreaga casetă păstrând aspectul său; „Umple” - imaginea este întinsă pentru a umple caseta fără a păstra aspectul său.",
    // [Auto-translated] "Select if you want the survey to auto-advance to the next page once a respondent has answered all questions on the current page. This feature won't apply if the last question on the page is open-ended or allows multiple answers."
    autoAdvanceEnabled: "Selectați dacă doriți ca chestionarul să avanseze automat la pagina următoare după ce un respondent a răspuns la toate întrebările de pe pagina curentă. Această funcție nu se va aplica dacă ultima întrebare de pe pagină este deschisă sau permite răspunsuri multiple.",
    // "Select if you want the survey to complete automatically after a respondent answers all questions."
    autoAdvanceAllowComplete: "Selectați dacă doriți ca chestionarul să se completeze automat după ce un respondent răspunde la toate întrebările.",
    // "Sets the visibility of navigation buttons on a page."
    showNavigationButtons: "Setează vizibilitatea și locația butoanelor de navigare pe o pagină.",
    // [Auto-translated] "Sets the location of navigation buttons on a page."
    navigationButtonsLocation: "Setează locația butoanelor de navigare dintr-o pagină.",
    // "Enable the preview page with all or answered questions only."
    showPreviewBeforeComplete: "Activează pagina de previzualizare cu toate sau doar întrebările la care s-a răspuns.",
    // "Applies to all questions within the survey. This setting can be overridden by title alignment rules at lower levels: panel, page, or question. A lower-level setting will override those on a higher level."
    questionTitleLocation: "Se aplică tuturor întrebărilor din chestionar. Această setare poate fi înlocuită de regulile de aliniere a titlului la niveluri inferioare: panou, pagină sau întrebare. O setare de nivel inferior va înlocui setările de nivel superior.",
    // "A symbol or a sequence of symbols indicating that an answer is required."
    requiredMark: "Un simbol sau o secvență de simboluri care indică faptul că este necesar un răspuns.",
    // "Enter a number or letter with which you want to start numbering."
    questionStartIndex: "Introduceți un număr sau o literă cu care doriți să începeți numerotarea.",
    // "Sets the location of an error message in relation to the question with invalid input. Choose between: \"Top\" - an error text is placed at the top of the question box; \"Bottom\" - an error text is placed at the bottom of the question box."
    questionErrorLocation: "Setează locația unui mesaj de eroare în raport cu întrebarea cu intrare invalidă. Alegeți dintre: „Sus” - un text de eroare este plasat în partea de sus a casetei întrebării; „Jos” - un text de eroare este plasat în partea de jos a casetei întrebării.",
    // "Select if you want the first input field on each page ready for text entry."
    autoFocusFirstQuestion: "Selectați dacă doriți ca primul câmp de intrare de pe fiecare pagină să fie pregătit pentru introducerea textului.",
    // "Keeps the original order of questions or randomizes them. The effect of this setting is only visible in the Preview tab."
    questionOrder: "Păstrează ordinea originală a întrebărilor sau le randomizează. Efectul acestei setări este vizibil doar în fila Previzualizare.",
    // "For text entry questions only."
    maxTextLength: "Doar pentru întrebările de introducere a textului.",
    // "For question comments only."
    maxCommentLength: "Doar pentru comentariile întrebărilor.",
    // [Auto-translated] "Sets the number of displayed lines in text areas for question comments. If the input takes up more lines, the scroll bar appears."
    commentAreaRows: "Setează numărul de linii afișate în zonele de text pentru comentariile la întrebări. Dacă intrarea ocupă mai multe linii, apare bara de derulare.",
    // "Select if you want question comments and Long Text questions to auto-grow in height based on the entered text length."
    autoGrowComment: "Selectați dacă doriți ca comentariile întrebărilor și întrebările de Text lung să se extindă automat în funcție de lungimea textului introdus.",
    // "For question comments and Long Text questions only."
    allowResizeComment: "Doar pentru comentariile întrebărilor și întrebările de Text lung.",
    // "Custom variables serve as intermediate or auxiliary variables used in form calculations. They take respondent inputs as source values. Each custom variable has a unique name and an expression it's based on."
    calculatedValues: "Variabilele personalizate servesc drept variabile intermediare sau auxiliareutilizate în calculele formularului. Acestea iau intrările respondenților ca valori sursă. Fiecare variabilă personalizată are un nume unic și o expresie pe care se bazează.",
    // "Select if you wish the calculated value of the expression to be saved along with survey results."
    includeIntoResult: "Selectați dacă doriți ca valoarea calculată a expresiei să fie salvată împreună cu rezultatele chestionarului.",
    // "A trigger is an event or condition that is based on an expression. Once the expression is evaluated to \"true\", a trigger sets off an action. Such an action can optionally have a target question it affects."
    triggers: "Un declanșator este un eveniment sau o condiție bazată pe o expresie. Odată ce expresia este evaluată ca „adevărată”, declanșatorul declanșează o acțiune. O astfel de acțiune poate avea opțional o întrebare țintă pe care o afectează.",
    // "Choose whether or not to clear values for questions hidden by conditional logic and when to do it."
    clearInvisibleValues: "Alegeți dacă doriți sau nu să ștergeți valorile întrebărilor ascunse prin logica condițională și când să o faceți.",
    // "Choose from: \"On lost focus\" - the value is updated when the input field loses focus; \"While typing\" - the value is updated in real-time, as users are typing."
    textUpdateMode: "Alegeți dintre: „La pierderea focalizării” - valoarea este actualizată când câmpul de intrare pierde focalizarea; „În timp ce se tastează” - valoarea este actualizată în timp real, pe măsură ce utilizatorii tastează.",
    // "The left value serves as a column ID used in conditional rules, the right value is displayed to respondents."
    columns: "Valoarea din stânga servește ca ID al coloanei utilizat în regulile condiționale, valoarea din dreapta este afișată respondenților.",
    // "The left value serves as a row ID used in conditional rules, the right value is displayed to respondents."
    rows: "Valoarea din stânga servește ca ID al rândului utilizat în regulile condiționale, valoarea din dreapta este afișată respondenților.",
    // "Accepts CSS values (px, %, in, pt, etc.)."
    columnMinWidth: "Acceptă valori CSS (px, %, in, pt etc.).",
    // "Accepts CSS values (px, %, in, pt, etc.)."
    rowTitleWidth: "Acceptă valori CSS (px, %, in, pt etc.).",
    // "Visible only if at least one column displays total values set with \"Aggregation method\" or \"Total value expression\"."
    totalText: "Vizibil numai dacă cel puțin o coloană afișează valorile totale setate cu „Metoda de agregare” sau „Expresia valorii totale”.",
    // "Sets the location of an error message in relation to a cell with invalid input. The \"Inherit\" option applies the setting from the \"Error message alignment\" property."
    cellErrorLocation: "Setează locația unui mesaj de eroare în raport cu o celulă cu intrare invalidă. Opțiunea „Moștenește” aplică setarea din proprietatea „Alinierea mesajului de eroare”.",
    // "Sets the location of error messages for questions nested in detail sections. The \"Inherit\" option applies the setting from the \"Error message alignment\" property."
    detailErrorLocation: "Setează locația mesajelor de eroare pentru întrebările imbricate în secțiunile de detaliu. Opțiunea \"Moștenire\" aplică setarea din proprietatea \"Alinierea mesajului de eroare\".",
    // "When the \"Prevent duplicate responses\" property is enabled, a respondent attempting to submit a duplicate entry will receive the following error message."
    keyDuplicationError: "Când proprietatea „Împiedică răspunsurile duplicate” este activată, un respondent care încearcă să trimită o intrare duplicat va primi următorul mesaj de eroare.",
    // "Allows you to calculate total values based on an expression. The expression can include basic calculations (`{q1_id} + {q2_id}`), Boolean expressions (`{age} > 60`) and functions ('iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, etc.)."
    totalExpression: "Vă permite să calculați valorile totale pe baza unei expresii. Expresia poate include calcule de bază (`{q1_id} + {q2_id}`), expresii booleene (`{age} > 60`) și funcții (`iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, etc.).",
    // "Reference a column ID to require a user to provide a unique response for each question within the specified column."
    keyName: "Faceți referire la un ID al coloanei pentru a solicita unui utilizator să furnizeze un răspuns unic pentru fiecare întrebare din coloana specificată.",
    // "Type a subtitle."
    description: "Introduceți un subtitlu.",
    // "Choose a language to begin creating your survey. To add a translation, switch to a new language and translate the original text here or in the Translations tab."
    locale: "Alegeți o limbă pentru a începe să creați chestionarul. Pentru a adăuga o traducere, comutați la o limbă nouă și traduceți textul original aici sau în fila Traduceri.",
    // "Sets the location of a detail section in relation to a row. Choose from: \"None\" - no detail section is added; \"Under the row\" - a detail section is placed under each row of the matrix; \"Under the row, display one detail section only\" - a detail section is displayed under a single row only, the remaining sections are collapsed."
    detailPanelMode: "Setează locația unei secțiuni de detalii în raport cu un rând. Alegeți dintre: „Niciunul” - nu se adaugă nicio extindere; „Sub rând” - o extindere a rândului este plasată sub fiecare rând al matricei; „Sub rând, afișați doar o singură extindere de rând” - o extindere este afișată sub un singur rând, celelalte extinderi de rând fiind colapsate.",
    // "Choose from: \"None\" - image maintains its original size; \"Contain\" - image is resized to fit while maintaining its aspect ratio; \"Cover\" - image fills the entire box while maintaining its aspect ratio; \"Fill\" - image is stretched to fill the box without maintaining its aspect ratio."
    imageFit: "Alegeți dintre: „Niciunul” - imaginea își menține dimensiunea originală; „Conține” - imaginea este redimensionată pentru a se potrivi păstrând aspectul său; „Acoperă” - imaginea umple întreaga casetă păstrând aspectul său; „Umple” - imaginea este întinsă pentru a umple caseta fără a păstra aspectul său.",
    // "The \"Inherit\" option applies a survey-level setting (\"Disabled\" by default)."
    autoGrow: "Opțiunea „Moștenește” aplică setarea de la nivel de chestionar („Dezactivat” implicit).",
    // "The \"Inherit\" option applies a survey-level setting (\"Enabled\" by default)."
    allowResize: "Opțiunea „Moștenește” aplică setarea de la nivel de chestionar („Activat” implicit).",
    // "A time interval in seconds after which the survey auto-advances to the \"Thank You\" page. When set to 0, counts the time spent on the survey."
    timeLimit: "Un interval de timp în secunde după care chestionarul avansează automat la pagina „Mulțumim”.",
    // "A time interval in seconds after which the survey auto-advances to the next page. Hides the \"Previous\" navigation button. When set to 0, counts the time spent on the current page."
    timeLimitPerPage: "Un interval de timp în secunde după care chestionarul avansează automat la pagina următoare. Ascunde butonul de navigare „Anterior”.",
    // [Auto-translated] "Enable this option to trigger validation when a user focuses on an empty input field and then leaves it without making any changes."
    validateVisitedEmptyFields: "Activați această opțiune pentru a declanșa validarea atunci când un utilizator se concentrează pe un câmp de introducere gol și apoi îl lasă fără a efectua modificări.",
    page: {
      // "A page ID that is not visible to respondents."
      name: "Un cod de pagină care nu este vizibil pentru respondenți.",
      // "Type a page subtitle."
      description: "Tastați o subtitrare a paginii.",
      // "A caption displayed on a navigation button in the progress bar or table of contents (TOC). If you leave this field empty, the navigation button will use the page title or page name. To enable the progress bar or TOC, go to \"Survey\" → \"Navigation\"."
      navigationTitle: "O legendă afișată pe un buton de navigare din bara de progres sau din cuprinsul (TOC). Dacă lăsați acest câmp gol, butonul de navigare va folosi titlul paginii sau numele paginii. Pentru a activa bara de progres sau TOC, accesați \"Sondaj\" → \"Navigare\".",
      // "A time interval in seconds after which the survey auto-advances to the next page. Hides the \"Previous\" navigation button. When set to 0, counts the time spent on the current page."
      timeLimit: "Un interval de timp în secunde după care chestionarul avansează automat la pagina următoare. Ascunde butonul de navigare „Anterior”.",
      // "Use the magic wand icon to set a conditional rule that determines page visibility."
      visibleIf: "Utilizați pictograma bagheta magică pentru a seta o regulă condițională care determină vizibilitatea paginii.",
      // "Use the magic wand icon to set a conditional rule that disables the read-only mode for the page."
      enableIf: "Utilizați pictograma bagheta magică pentru a seta o regulă condițională care dezactivează modul doar citire pentru pagină.",
      // "Use the magic wand icon to set a conditional rule that prevents survey submission unless at least one nested question has an answer."
      requiredIf: "Utilizați pictograma bagheta magică pentru a seta o regulă condițională care împiedică trimiterea chestionarului dacă cel puțin o întrebare inclusă nu are un răspuns.",
      // "Applies to all questions within this page. When set to \"Hidden\", it also hides question descriptions. If you want to override this setting, define title alignment rules for individual questions or panels. The \"Inherit\" option applies the survey-level setting (\"Top\" by default)."
      questionTitleLocation: "Se aplică tuturor întrebărilor din această pagină. Dacă doriți să înlocuiți această setare, definiți reguli de aliniere a titlului pentru întrebările individuale sau panouri. Opțiunea „Moștenește” aplică setarea de la nivel de chestionar („Sus” implicit).",
      // "Sets consistent width for question titles when they are aligned to the left of their question boxes. Accepts CSS values (px, %, in, pt, etc.)."
      questionTitleWidth: "Setează lățimea titlurilor întrebărilor atunci când sunt aliniate la stânga casetelor de întrebări. Acceptă valori CSS (px, %, in, pt etc.).",
      // "Sets the location of an error message in relation to the question with invalid input. Choose between: \"Top\" - an error text is placed at the top of the question box; \"Bottom\" - an error text is placed at the bottom of the question box. The \"Inherit\" option applies the survey-level setting (\"Top\" by default)."
      questionErrorLocation: "Setează locația unui mesaj de eroare în raport cu întrebarea cu intrare invalidă. Alegeți dintre: „Sus” - un text de eroare este plasat în partea de sus a casetei întrebării; „Jos” - un text de eroare este plasat în partea de jos a casetei întrebării. Opțiunea „Moștenește” aplică setarea de la nivel de chestionar.",
      // "Keeps the original order of questions or randomizes them. The \"Inherit\" option applies the survey-level setting (\"Original\" by default). The effect of this setting is only visible in the Preview tab."
      questionOrder: "Păstrează ordinea originală a întrebărilor sau le randomizează. Opțiunea „Moștenește” aplică setarea de la nivel de chestionar („Original” implicit). Efectul acestei setări este vizibil doar în fila Previzualizare.",
      // "Sets the visibility of navigation buttons on the page. The \"Inherit\" option applies the survey-level setting, which defaults to \"Visible\"."
      showNavigationButtons: "Setează vizibilitatea butoanelor de navigare pe pagină. Opțiunea „Moștenește” aplică setarea de la nivel de chestionar, care implicit este „Vizibilă”.",
      // [Auto-translated] "This table lets you configure each grid column on the page. It automatically sets the width percentage for each column based on the maximum number of elements in a row. To customize the grid layout, manually adjust these values and define the title width for all questions in each column."
      gridLayoutColumns: "Acest tabel vă permite să configurați fiecare coloană de grilă din pagină. Setează automat procentul de lățime pentru fiecare coloană pe baza numărului maxim de elemente dintr-un rând. Pentru a particulariza aspectul grilei, ajustați manual aceste valori și definiți lățimea titlului pentru toate întrebările din fiecare coloană."
    },
    // [Auto-translated] "Sets the location of a timer on a page."
    timerLocation: "Setează locația unui cronometru pe o pagină.",
    // "Choose from: \"Locked\" - users cannot expand or collapse entries; \"Collapse all\" - all entries start in a collapsed state; \"Expand all\" - all entries start in an expanded state; \"First expanded\" - only the first entry is initially expanded. Applies if \"Entry display mode\" is set to \"List\" and the \"Entry title pattern\" property is specified."
    panelsState: "Alegeți dintre: „Blocat” - utilizatorii nu pot extinde sau colapsa panouri; „Colapsați toate” - toate panourile încep într-o stare colapsată; „Extindeți toate” - toate panourile încep într-o stare extinsă; „Primul extins” - doar primul panou este extins inițial. Se aplică dacă „Modul de afișare a panoului” este setat la „Listă” și proprietatea „Șablon titlu panou” este specificată.",
    // "Enter a shared property name within the array of objects that contains the image or video file URLs you want to display in the choice list."
    imageLinkName: "Introduceți un nume de proprietate comun în cadrul array-ului de obiecte care conține URL-urile fișierelor imagine sau video pe care doriți să le afișați în lista de opțiuni.",
    // "The left value serves as an item ID used in conditional rules, the right value is displayed to respondents."
    choices: "Valoarea din stânga servește ca un ID al elementului utilizat în regulile condiționale, valoarea din dreapta este afișată respondenților.",
    // "Type a user-friendly title to display."
    title: "Introduceți un titlu prietenos pentru utilizator care să fie afișat.",
    // "Ensures that users won't complete the survey until files are uploaded."
    waitForUpload: "Asigură că utilizatorii nu vor putea finaliza chestionarul până când fișierele nu sunt încărcate.",
    // "Accepts CSS values (px, %, in, pt, etc.)."
    minWidth: "Acceptă valori CSS (px, %, in, pt etc.).",
    // "Accepts CSS values (px, %, in, pt, etc.)."
    maxWidth: "Acceptă valori CSS (px, %, in, pt etc.).",
    // "Accepts CSS values (px, %, in, pt, etc.)."
    width: "Acceptă valori CSS (px, %, in, pt etc.).",
    // "A join identifier is a custom key that you can assign to several questions to link them together and sync their values. These values will be merged into a single array or object and stored in survey results using the key as the property name."
    valueName: "Un identificator comun este o cheie personalizată pe care o puteți atribui mai multor întrebări pentru a le lega împreună și a sincroniza valorile acestora. Aceste valori vor fi îmbinate într-un singur array sau obiect și stocate în rezultatele chestionarului folosind cheia ca nume de proprietate.",
    // [Auto-translated] "A value displayed in HTML questions and in the dynamic titles and descriptions of survey elements when the question value is empty."
    defaultDisplayValue: "O valoare afișată în întrebările HTML și în titlurile și descrierile dinamice ale elementelor chestionarului atunci când valoarea întrebării este goală.",
    // "In single- and multiple-selection question types, each choice option has an ID and display value. When selected, this setting shows a display value instead of an ID value in HTML questions and dynamic titles and descriptions of survey elements."
    useDisplayValuesInDynamicTexts: "În tipurile de întrebări de selecție unică și multiplă, fiecare opțiune de alegere are un ID și o valoare de afișare. Când este selectată, această setare afișează o valoare de afișare în loc de o valoare ID în întrebările HTML și în titlurile și descrierile dinamice ale elementelor chestionarului.",
    // "Choose whether or not to clear question values hidden by conditional logic and when to do it. The \"Inherit\" option applies the survey-level setting (\"Upon survey completion\" by default)."
    clearIfInvisible: "Alegeți dacă doriți sau nu să ștergeți valorile întrebărilor ascunse prin logica condițională și când să o faceți. Opțiunea „Moștenește” aplică setarea de la nivel de chestionar („La finalizarea chestionarului” implicit).",
    // "Choose from: \"All\" - copies all choice options from the selected question; \"Selected\" - dynamically copies only selected choice options; \"Unselected\" - dynamically copies only unselected choice options. The \"None\" and \"Other\" options are copied by default if enabled in the source question."
    choicesFromQuestionMode: "Alegeți dintre: „Toate” - copiază toate opțiunile de alegere din întrebarea selectată; „Selectate” - copiază dinamic doar opțiunile de alegere selectate; „Neselectate” - copiază dinamic doar opțiunile de alegere neselectate. Opțiunile „Niciuna” și „Altele” sunt copiate implicit dacă sunt activate în întrebarea sursă.",
    // [Auto-translated] "In single- and multiple-selection question types, each choice option has an ID and display value. This setting specifies which matrix column or panel question should provide the IDs."
    choiceValuesFromQuestion: "În tipurile de întrebări cu selecție unică și multiplă, fiecare opțiune de alegere are un ID și o valoare afișată. Această setare specifică ce coloană de matrice sau întrebare de panou ar trebui să furnizeze ID-urile.",
    // [Auto-translated] "In single- and multiple-selection question types, each choice option has an ID and display value. This setting specifies which matrix column or panel question should provide the display texts."
    choiceTextsFromQuestion: "În tipurile de întrebări cu selecție unică și multiplă, fiecare opțiune de alegere are un ID și o valoare afișată. Această setare specifică ce coloană de matrice sau întrebare de panou ar trebui să furnizeze textele afișate.",
    // [Auto-translated] "Select to let respondents add their own choices if the desired option isn't available in the dropdown. Custom choices will only be stored temporarily for the duration of the current browser session."
    allowCustomChoices: "Selectați pentru a permite respondenților să-și adauge propriile opțiuni dacă opțiunea dorită nu este disponibilă în meniul drop-down. Opțiunile personalizate vor fi stocate doar temporar pe durata sesiunii curente a browserului.",
    // "When selected, users can include additional input in a separate comment box."
    showOtherItem: "Când este selectat, utilizatorii pot include intrare suplimentară într-o casetă de comentarii separată.",
    // "Displays each special choice option (\"None\", \"Other\", \"Select All\") on a new line, even when using a multiple-column layout."
    separateSpecialChoices: "Afișează fiecare opțiune de alegere specială („Niciuna”, „Altele”, „Selectează toate”) pe un rând nou, chiar și atunci când utilizați un layout pe mai multe coloane.",
    // "Specify the location within the service dataset where the target array of objects is located. Leave empty if the URL already points to the array."
    path: "Specificați locația din cadrul setului de date al serviciului unde se află array-ul de obiecte țintă. Lăsați gol dacă URL-ul indică deja către array.",
    choicesbyurl: {
      // "Enter a uniform property name within the array of objects whose value will be stored as a response in survey results."
      valueName: "Introduceți un nume de proprietate uniform în cadrul array-ului de obiecte a cărui valoare va fi stocată ca răspuns în rezultatele chestionarului."
    },
    // "Enter a uniform property name within the array of objects that contains the values you want to display in the choice list."
    titleName: "Introduceți un nume de proprietate uniform în cadrul array-ului de obiecte care conține valorile pe care doriți să le afișați în lista de opțiuni.",
    // "Select to allow the service to return an empty response or array."
    allowEmptyResponse: "Selectați pentru a permite serviciului să returneze un răspuns sau un array gol.",
    // "Use the magic wand icon to set a conditional rule that determines the visibility of all choice options."
    choicesVisibleIf: "Utilizați pictograma bagheta magică pentru a seta o regulă condițională care determină vizibilitatea tuturor opțiunilor de alegere.",
    // "The left value serves as an item ID used in conditional rules, the right value is displayed to respondents."
    rateValues: "Valoarea din stânga servește ca un ID al elementului utilizat în regulile condiționale, valoarea din dreapta este afișată respondenților.",
    rating: {
      // "\"Auto\" selects between the \"Buttons\" and \"Dropdown\" modes based on the available width. When the width is insufficient to display buttons, the question displays a dropdown."
      displayMode: "\"Auto\" selectează între modurile „Butoane” și „Dropdown” pe baza lățimii disponibile. Când lățimea este insuficientă pentru a afișa butoanele, întrebarea afișează un meniu derulant."
    },
    // "Allows you to connect questions that produce results in different formats. When such questions are linked together using a join identifier, this shared property stores selected question values."
    valuePropertyName: "Vă permite să conectați întrebările care produc rezultate în diferite formate. Când astfel de întrebări sunt legate împreună folosind un identificator comun, această proprietate partajată stochează valorile întrebărilor selectate.",
    // "Select if you want to update the drop-down menu contents to match the search query that a user is typing in the input field."
    searchEnabled: "Selectați dacă doriți să actualizați conținutul meniului derulant pentru a se potrivi cu interogarea de căutare pe care un utilizator o tastează în câmpul de intrare.",
    // "A value to save in survey results when respondents give a positive answer."
    valueTrue: "O valoare de salvat în rezultatele chestionarului atunci când respondenții oferă un răspuns pozitiv.",
    // "A value to save in survey results when respondents give a negative answer."
    valueFalse: "O valoare de salvat în rezultatele chestionarului atunci când respondenții oferă un răspuns negativ.",
    // "It's not recommended that you disable this option as it overrides the Preview image and makes it hard for a user to understand whether the files have been uploaded."
    showPreview: "Nu este recomandat să dezactivați această opțiune, deoarece suprascrie Previzualizarea imaginii și face dificilă pentru utilizator înțelegerea dacă fișierele au fost încărcate.",
    // "Triggers a prompt asking to confirm the file deletion."
    needConfirmRemoveFile: "Declanșează un prompt care solicită confirmarea ștergerii fișierului.",
    // "Enable to rank only selected choices. Users will drag selected items from the choice list to order them within the ranking area."
    selectToRankEnabled: "Activați pentru a clasifica doar opțiunile selectate. Utilizatorii vor trage elementele selectate din lista de opțiuni pentru a le ordona în zona de clasificare.",
    // "Enter a list of choices that will be suggested to the respondent during input."
    dataList: "Introduceți o listă de opțiuni care vor fi sugerate respondentului în timpul introducerii.",
    // "The setting only resizes the input fields and doesn't affect the width of the question box."
    inputSize: "Setarea redimensionează doar câmpurile de intrare și nu afectează lățimea casetei întrebării.",
    // [Auto-translated] "Sets consistent width for all item labels. Accepts CSS values (px, %, in, pt, etc.)."
    itemTitleWidth: "Setează lățimea consecventă pentru toate etichetele articolelor. Acceptă valori CSS (px, %, in, pt etc.).",
    // "Select how to align input value within the field. The default setting \"Auto\" aligns the input value to the right if currency or numeric masking is applied and to the left if not."
    inputTextAlignment: "Selectați modul de aliniere a valorii de intrare în câmp. Setarea implicită \"Auto\" aliniază valoarea de intrare la dreapta dacă se aplică mascare monedară sau numerică și la stânga dacă nu.",
    // "Serves as a substitute when the image cannot be displayed on a user's device and for accessibility purposes."
    altText: "Servește ca un substitut atunci când imaginea nu poate fi afișată pe dispozitivul utilizatorului și pentru scopuri de accesibilitate.",
    // "Defines the color of the selected emoji when the Rating icon type is set to \"Smileys\". Choose between: \"Default\" - the selected emoji appears in default survey color; \"Scale\" - the selected emoji inherits color from the rating scale."
    rateColorMode: "Definește culoarea emoji-ului selectat când tipul pictogramei de evaluare este setat la „Smileys”. Alegeți dintre: „Implicit” - emoji-ul selectat apare în culoarea implicită a chestionarului; „Scală” - emoji-ul selectat moștenește culoarea de la scala de evaluare.",
    expression: {
      // "An expression ID that is not visible to respondents."
      name: "Un ID al expresiei care nu este vizibil pentru respondenți.",
      // "Type an expression subtitle."
      description: "Introduceți un subtitlu pentru expresie.",
      // "An expression can include basic calculations (`{q1_id} + {q2_id}`), conditions (`{age} > 60`), and functions ('iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, etc.)."
      expression: "O expresie poate include calcule de bază (`{q1_id} + {q2_id}`), condiții (`{age} > 60`) și funcții ('iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, etc.)."
    },
    // "Select to store the \"Other\" option value as a separate property in survey results."
    storeOthersAsComment: "Selectați pentru a stoca valoarea opțiunii „Altele” ca o proprietate separată în rezultatele chestionarului.",
    // "Use {0} as a placeholder for the actual value."
    format: "Utilizați {0} ca substituent pentru valoarea actuală.",
    // "Refer to the [accept](https://www.w3schools.com/tags/att_input_accept.asp) attribute description for more information."
    acceptedTypes: "Consultați descrierea atributului [accept](https://www.w3schools.com/tags/att_input_accept.asp) pentru mai multe informații.",
    // "Arranges choice options in a multi-column layout. When set to 0, the options are displayed in a single line. Applies only to columns with \"Cell input type\" set to Radio Button Group or Checkboxes."
    columnColCount: "Se aplică doar dacă „Tip de intrare a celulei” este setat la Grup de butoane radio sau Casete de selectare.",
    // "Select the data type that the user's browser can retrieve. This data is sourced either from past values entered by the user or from pre-configured values if any have been saved by the user for autocompletion."
    autocomplete: "Selectați tipul de date pe care browserul utilizatorului îl poate recupera. Aceste date sunt sursă fie din valorile introduse anterior de utilizator, fie din valorile preconfigurate dacă există valori salvate de utilizator pentru completare automată.",
    // "Applies when \"File source type\" is \"Local file\" or when camera is unavailable"
    filePlaceholder: "Se aplică atunci când „Tip sursă fișier” este „Fișier local” sau când camera nu este disponibilă",
    // "Applies when \"File source type\" is \"Camera\"."
    photoPlaceholder: "Se aplică atunci când „Tip sursă fișier” este „Cameră”.",
    // "Applies when \"File source type\" is \"Local file or camera\"."
    fileOrPhotoPlaceholder: "Se aplică atunci când „Tip sursă fișier” este „Fișier local sau cameră”.",
    // "Arranges choice options in a multi-column layout. When set to 0, the options are displayed in a single line."
    colCount: "Aranjează opțiunile de alegere într-un layout pe mai multe coloane. Când este setat la 0, opțiunile sunt afișate pe un singur rând.",
    masksettings: {
      // "Select if you want to store the question value with an applied mask in survey results."
      saveMaskedValue: "Selectați dacă doriți să stocați valoarea întrebării cu o mască aplicată în rezultatele chestionarului."
    },
    patternmask: {
      // "The pattern can contain string literals and the following placeholders: `9` - for a digit; `a` - for an upper- or lower-case letter; `#` - for a digit or an upper- or lower-case letter. Use backslash `\\` to escape a character."
      pattern: "Modelul poate conține litere de șir și următorii substituenți: `9` - pentru o cifră; `a` - pentru o literă mare sau mică; `#` - pentru o cifră sau o literă mare sau mică. Utilizați backslash `\\` pentru a scăpa un caracter."
    },
    datetimemask: {
      // "The pattern can contain separator characters and the following placeholders:<br>`m` - Month number.<br>`mm` - Month number, with leading zero for single-digit values.<br>`d` - Day of the month.<br>`dd` - Day of the month, with leading zero for single-digit values.<br>`yy` - The last two digits of the year.<br>`yyyy` - Four-digit year.<br>`H` - Hours in 24-hour format.<br>`HH` - Hours in 24-hour format, with leading zero for single-digit values.<br>`h` - Hours in 12-hour format.<br>`hh` - Hours in 12-hour format, with leading zero for single-digit values.<br>`MM` - Minutes.<br>`ss` - Seconds.<br>`TT` - 12-hour clock period in upper case (AM/PM).<br>`tt` - 12-hour clock period in lower case (am/pm)."
      pattern: "Modelul poate conține caractere de separator și următorii substituenți:<br>`m` - Număr lună.<br>`mm` - Număr lună, cu zero la început pentru valori de o cifră.<br>`d` - Ziua lunii.<br>`dd` - Ziua lunii, cu zero la început pentru valori de o cifră.<br>`yy` - Ultimele două cifre ale anului.<br>`yyyy` - An de patru cifre.<br>`H` - Ore în format 24 de ore.<br>`HH` - Ore în format 24 de ore, cu zero la început pentru valori de o cifră.<br>`h` - Ore în format 12 de ore.<br>` `hh` - Ore în format de 12 ore, cu zero înainte pentru valorile cu o singură cifră.<br>`MM` - Minute.<br>`ss` - Secunde.<br>`TT` - Perioada de ceas de 12 ore cu litere mari (AM/PM).<br>`tt` - perioada ceasului de 12 ore cu litere mici (am/pm)"
    },
    numericmask: {
      // "A symbol used to separate the fractional part from the integer part of a displayed number."
      decimalSeparator: "Un simbol folosit pentru a separa partea fracționară de partea întreagă a unui număr afișat.",
      // "A symbol used to separate the digits of a large number into groups of three."
      thousandsSeparator: "Un simbol folosit pentru a separa cifrele unui număr mare în grupuri de câte trei.",
      // "Limits how many digits to retain after the decimal point for a displayed number."
      precision: "Limitează câte cifre să fie reținute după punctul zecimal pentru un număr afișat."
    },
    currencymask: {
      // "One or several symbols to be displayed before the value."
      prefix: "Unul sau mai multe simboluri care să fie afișate înaintea valorii.",
      // "One or several symbols to be displayed after the value."
      suffix: "Unul sau mai multe simboluri care să fie afișate după valoare."
    },
    theme: {
      // "This setting applies only to questions outside of a panel."
      isPanelless: "Această setare se aplică doar întrebărilor din afara unui panou.",
      // "Sets a supplementary color that highlights key survey elements."
      primaryColor: "Setează o culoare suplimentară care evidențiază elementele cheie ale chestionarului.",
      // "Adjusts the transparency of panels and question boxes relative to the survey background."
      panelBackgroundTransparency: "Ajustează transparența panourilor și casetelor de întrebări în raport cu fundalul chestionarului.",
      // "Adjusts the transparency of input elements relative to the survey background."
      questionBackgroundTransparency: "Ajustează transparența elementelor de intrare în raport cu fundalul chestionarului.",
      // "Sets the corner radius for all rectangular elements. Enable the Advanced Mode if you want to set individual corner radius values for input elements or panels and question boxes."
      cornerRadius: "Setează raza colțurilor pentru toate elementele dreptunghiulare. Activați modul avansat dacă doriți să setați valori individuale pentru raza colțurilor pentru elementele de intrare sau panourile și casetele de întrebări.",
      // "Sets the main background color of the survey."
      "--sjs-general-backcolor-dim": "Setează culoarea principală a fundalului chestionarului."
    },
    header: {
      // "The \"Same as container\" option auto-adjusts the header content area width to fit into the HTML element the survey is placed in."
      inheritWidthFrom: "Opțiunea \"La fel ca și containerul\" ajustează automat lățimea zonei de conținut a antetului pentru a se potrivi în elementul HTML în care este plasat chestionarul.",
      // "The width of the header area that contains the survey title and description, measured in pixels."
      textAreaWidth: "Lățimea zonei de antet care conține titlul și descrierea chestionarului, măsurată în pixeli.",
      // [Auto-translated] "When enabled, the top of the survey overlays the bottom of the header."
      overlapEnabled: "Când este activată, partea de sus a chestionarului se suprapune cu partea de jos a antetului.",
      // [Auto-translated] "When set to 0, the height is calculated automatically to accommodate the header's content."
      mobileHeight: "Când este setată la 0, înălțimea este calculată automat pentru a găzdui conținutul antetului."
    },
    // "The \"Same as container\" option auto-adjusts the progress bar area width to fit into the HTML element the survey is placed in."
    progressBarInheritWidthFrom: "Opțiunea \"La fel ca containerul\" ajustează automat lățimea zonei barei de progres pentru a se potrivi cu elementul HTML în care este plasat sondajul.",
    // "Used when the 'Survey layout' is set to 'Single input field per page'. In this layout, the matrix is split so that each input field appears on a separate page. Use the {rowIndex} placeholder to insert auto numbering, {rowTitle} or {rowName} to reference the row's title or ID, and {row.columnid} to include the value of a specific matrix column."
    singleInputTitleTemplate: "Folosit atunci când \"Aspectul sondajului\" este setat la \"Un singur câmp de intrare pe pagină\". În acest aspect, matricea este împărțită astfel încât fiecare câmp de intrare să apară pe o pagină separată. Utilizați substituentul {rowIndex} pentru a insera numerotarea automată, {rowTitle} sau {rowName} pentru a face referire la titlul sau ID-ul rândului și {row.columnid} pentru a include valoarea unei anumite coloane de matrice."
  },
  // Properties
  p: {
    title: {
      // "title"
      name: "title",
      // "Leave it empty, if it is the same as 'Name'"
      title: "Lăsați gol, dacă este la fel ca 'Nume'"
    },
    // "Allow multiple selection"
    multiSelect: "Permite selecția multiplă",
    // "Show image and video captions"
    showLabel: "Arată subtitlurile pentru imagini și videoclipuri",
    // "Swap the order of Yes and No"
    swapOrder: "Schimbă ordinea dintre Da și Nu",
    // "Value"
    value: "Valoare",
    // "Tab alignment"
    tabAlign: "Alinierea tabului",
    // "File source type"
    sourceType: "Tipul sursei de fișier",
    // "Fit to container"
    fitToContainer: "Potrivește în container",
    // "Set value expression"
    setValueExpression: "Setează expresia valorii",
    // "Description"
    description: "Descriere", // Auto-generated string
    // "Logo fit"
    logoFit: "Potrivirea logo-ului",
    // "Pages"
    pages: "Pagini", // Auto-generated string
    // "Questions"
    questions: "Întrebări", // Auto-generated string
    // "Triggers"
    triggers: "Declanșatori",
    // "Custom variables"
    calculatedValues: "Variabile personalizate",
    // "Survey id"
    surveyId: "ID-ul chestionarului", // Auto-generated string
    // "Survey post id"
    surveyPostId: "ID-ul postării chestionarului", // Auto-generated string
    // "Survey show data saving"
    surveyShowDataSaving: "Afișează salvarea datelor chestionarului", // Auto-generated string
    // "Question description alignment"
    questionDescriptionLocation: "Alinierea descrierii întrebării",
    // "Progress bar type"
    progressBarType: "Tipul barei de progres", // Auto-generated string
    // "Show table of contents (TOC)"
    showTOC: "Arată tabelul de conținut (TOC)",
    // "TOC alignment"
    tocLocation: "Alinierea TOC",
    // "Question title pattern"
    questionTitlePattern: "Modelul titlului întrebării", // Auto-generated string
    // "Survey width mode"
    widthMode: "Modul de lățime al chestionarului",
    // "Show brand info"
    showBrandInfo: "Arată informații despre marcă", // Auto-generated string
    // "Use display values in dynamic texts"
    useDisplayValuesInDynamicTexts: "Utilizați valorile afișate în textele dinamice",
    // "Visible if"
    visibleIf: "Vizibil dacă", // Auto-generated string
    // "Default value expression"
    defaultValueExpression: "Expresia valorii implicite",
    // "Required if"
    requiredIf: "Necesar dacă", // Auto-generated string
    // "Reset value if"
    resetValueIf: "Resetați valoarea dacă",
    // "Set value if"
    setValueIf: "Setează valoarea dacă",
    // "Validation rules"
    validators: "Reguli de validare",
    // "Bindings"
    bindings: "Legături", // Auto-generated string
    // "Render as"
    renderAs: "Renderizare ca", // Auto-generated string
    // "Attach original items"
    attachOriginalItems: "Atașați elementele originale", // Auto-generated string
    // "Choices"
    choices: "Opțiuni",
    // "Choices by url"
    choicesByUrl: "Opțiuni de la URL", // Auto-generated string
    // "Currency"
    currency: "Valută", // Auto-generated string
    // "Cell hint"
    cellHint: "Sugestie celulă", // Auto-generated string
    // "Total maximum fraction digits"
    totalMaximumFractionDigits: "Numărul maxim de zecimale totale", // Auto-generated string
    // "Total minimum fraction digits"
    totalMinimumFractionDigits: "Numărul minim de zecimale totale", // Auto-generated string
    // "Columns"
    columns: "Coloane", // Auto-generated string
    // "Detail elements"
    detailElements: "Elemente detaliate", // Auto-generated string
    // "Allow adaptive actions"
    allowAdaptiveActions: "Permite acțiuni adaptive", // Auto-generated string
    // "Default row value"
    defaultRowValue: "Valoarea implicită a rândului", // Auto-generated string
    // [Auto-translated] "Auto-expand new row details"
    detailPanelShowOnAdding: "Extinderea automată a detaliilor noului rând",
    // "Choices lazy load enabled"
    choicesLazyLoadEnabled: "Încărcare întârziată activată pentru opțiuni", // Auto-generated string
    // "Choices lazy load page size"
    choicesLazyLoadPageSize: "Dimensiunea paginii pentru încărcarea întârziată a opțiunilor", // Auto-generated string
    // "Input field component"
    inputFieldComponent: "Componenta câmpului de intrare", // Auto-generated string
    // "Item component"
    itemComponent: "Componentă element", // Auto-generated string
    // "Min"
    min: "Min", // Auto-generated string
    // "Max"
    max: "Max", // Auto-generated string
    // "Min value expression"
    minValueExpression: "Expresia valorii minime", // Auto-generated string
    // "Max value expression"
    maxValueExpression: "Expresia valorii maxime", // Auto-generated string
    // "Step"
    step: "Pas", // Auto-generated string
    // "Items for auto-suggest"
    dataList: "Elemente pentru sugestii automate",
    // "Input field width (in characters)"
    inputSize: "Lățimea câmpului de intrare (în caractere)",
    // "Item label width"
    itemTitleWidth: "Lățimea etichetei elementului (în px)",
    // [Auto-translated] "Input value alignment"
    inputTextAlignment: "Alinierea valorilor de intrare",
    // "Elements"
    elements: "Elemente", // Auto-generated string
    // "Content"
    content: "Conținut", // Auto-generated string
    // "Navigation title"
    navigationTitle: "Titlul navigării", // Auto-generated string
    // "Navigation description"
    navigationDescription: "Descrierea navigării", // Auto-generated string
    // "Long tap"
    longTap: "Apăsare lungă", // Auto-generated string
    // "Expand input field dynamically"
    autoGrow: "Extinderea dinamică a câmpului de intrare",
    // "Enable resize handle"
    allowResize: "Permite redimensionarea",
    // "Accept carriage return"
    acceptCarriageReturn: "Acceptă întoarcerea la linie", // Auto-generated string
    // "Display mode"
    displayMode: "Mod de afișare",
    // "Rate type"
    rateType: "Tip de evaluare", // Auto-generated string
    // "Label"
    label: "Etichetă", // Auto-generated string
    // "Content mode"
    contentMode: "Mod de conținut",
    // "Image and thumbnail fit"
    imageFit: "Potrivirea imaginii și miniaturilor",
    // "Alt text"
    altText: "Text alternativ",
    // "Height"
    height: "Înălțime", // Auto-generated string
    // [Auto-translated] "Height on smartphones"
    mobileHeight: "Înălțimea pe smartphone-uri",
    // "Pen color"
    penColor: "Culoarea stiloului", // Auto-generated string
    // "Background color"
    backgroundColor: "Culoarea fundalului",
    // "Template elements"
    templateElements: "Elemente template", // Auto-generated string
    // "Operator"
    operator: "Operator", // Auto-generated string
    // "Is variable"
    isVariable: "Este variabil", // Auto-generated string
    // "Run expression"
    runExpression: "Rulează expresia", // Auto-generated string
    // "Show caption"
    showCaption: "Arată subtitlul", // Auto-generated string
    // "Icon name"
    iconName: "Nume pictogramă", // Auto-generated string
    // "Icon size"
    iconSize: "Dimensiunea pictogramei", // Auto-generated string
    // "Precision"
    precision: "Precizie", // Auto-generated string
    // "Matrix drag handle area"
    matrixDragHandleArea: "Zona de manipulare a matricei", // Auto-generated string
    // "Background image"
    backgroundImage: "Imagine de fundal",
    // "Background image fit"
    backgroundImageFit: "Potrivirea imaginii de fundal", // Auto-generated string
    // "Background image attachment"
    backgroundImageAttachment: "Atașament imagine de fundal", // Auto-generated string
    // "Background opacity"
    backgroundOpacity: "Opacitatea fundalului", // Auto-generated string
    // "Allow selective ranking"
    selectToRankEnabled: "Permite clasificarea selectivă",
    // "Ranking area alignment"
    selectToRankAreasLayout: "Alinierea zonei de clasificare",
    // "Text to show if all options are selected"
    selectToRankEmptyRankedAreaText: "Text de afișat dacă toate opțiunile sunt selectate",
    // "Placeholder text for the ranking area"
    selectToRankEmptyUnrankedAreaText: "Textul substitut pentru zona de clasificare",
    // "Allow camera access"
    allowCameraAccess: "Permite accesul la cameră", // Auto-generated string
    // "Rating icon color mode"
    scaleColorMode: "Modul de culoare al pictogramei de evaluare",
    // "Smileys color scheme"
    rateColorMode: "Schema de culori a pictogramelor Smileys",
    // "Copy display value"
    copyDisplayValue: "Copiază valoarea afișată", // Auto-generated string
    // "Column span"
    effectiveColSpan: "Span de coloană eficient",
    // [Auto-translated] "Progress bar area width"
    progressBarInheritWidthFrom: "Lățimea zonei barei de progres",
    // [Auto-translated] "Theme name"
    themeName: "Numele temei"
  },
  theme: {
    // "Advanced mode"
    advancedMode: "Mod avansat",
    // "Page"
    pageTitle: "Pagină",
    // "Question box"
    questionTitle: "Caseta de întrebare",
    // "Input element"
    editorPanel: "Element de intrare",
    // "Lines"
    lines: "Linii",
    // "Default"
    primaryDefaultColor: "Implicit",
    // "Hover"
    primaryDarkColor: "Hover",
    // "Selected"
    primaryLightColor: "Selectat",
    // "Background color"
    backgroundDimColor: "Culoarea fundalului",
    // "Corner radius"
    cornerRadius: "Raza colțului",
    // "Default background"
    backcolor: "Fundal implicit",
    // "Hover background"
    hovercolor: "Fundal la trecere",
    // "Border decoration"
    borderDecoration: "Decorarea bordurii",
    // "Font color"
    fontColor: "Culoarea fontului",
    // "Background color"
    backgroundColor: "Culoarea fundalului",
    // "Default color"
    primaryForecolor: "Culoare implicită",
    // "Disabled color"
    primaryForecolorLight: "Culoare dezactivată",
    // "Font"
    font: "Font",
    // "Darker"
    borderDefault: "Mai întunecat",
    // "Lighter"
    borderLight: "Mai deschis",
    // "Font family"
    fontFamily: "Familia de fonturi",
    // "Regular"
    fontWeightRegular: "Regular",
    // "Heavy"
    fontWeightHeavy: "Heavy",
    // "Semi-bold"
    fontWeightSemiBold: "Semi-bold",
    // "Bold"
    fontWeightBold: "Bold",
    // "Color"
    color: "Culoare",
    // "Placeholder color"
    placeholderColor: "Culoarea textului substitut",
    // "Size"
    size: "Dimensiune",
    // "Opacity"
    opacity: "Opacitate",
    // "X"
    boxShadowX: "X",
    // "Y"
    boxShadowY: "Y",
    // "Add Shadow Effect"
    boxShadowAddRule: "Adăugați efect de umbră",
    // "Blur"
    boxShadowBlur: "Blur",
    // "Spread"
    boxShadowSpread: "Întindere",
    // "Drop"
    boxShadowDrop: "Drop",
    // "Inner"
    boxShadowInner: "Interior",
    names: {
      // "Default"
      default: "Implicit",
      // "Sharp"
      sharp: "Sharp",
      // "Borderless"
      borderless: "Fără bordură",
      // "Flat"
      flat: "Flat",
      // "Plain"
      plain: "Simplu",
      // "Double Border"
      doubleborder: "Bordură dublă",
      // "Layered"
      layered: "Stratificat",
      // "Solid"
      solid: "Solid",
      // "3D"
      threedimensional: "3D",
      // "Contrast"
      contrast: "Contrast"
    },
    colors: {
      // "Teal"
      teal: "Teal",
      // "Blue"
      blue: "Albastru",
      // "Purple"
      purple: "Violet",
      // "Orchid"
      orchid: "Orhidee",
      // "Tulip"
      tulip: "Lalea",
      // "Brown"
      brown: "Maro",
      // "Green"
      green: "Verde",
      // [Auto-translated] "Gray"
      gray: "Gri"
    }
  },
  creatortheme: {
    // [Auto-translated] "Surface background"
    "--sjs-special-background": "Fundal de suprafață",
    // [Auto-translated] "Primary"
    "--sjs-primary-background-500": "Primar",
    // [Auto-translated] "Secondary"
    "--sjs-secondary-background-500": "Secundar",
    // [Auto-translated] "Surface"
    surfaceScale: "Suprafață",
    // [Auto-translated] "UI elements"
    userInterfaceBaseUnit: "Elemente de interfață",
    // [Auto-translated] "Font"
    fontScale: "Font",
    names: {
      // [Auto-translated] "Survey Creator 2020"
      sc2020: "Creator de sondaje 2020",
      // [Auto-translated] "Light"
      "default-light": "Lumină",
      // [Auto-translated] "Dark"
      "default-dark": "Întunecat",
      // [Auto-translated] "Contrast"
      "default-contrast": "Contrast"
    }
  }
};

setupLocale({ localeCode: "ro", strings: roStrings });