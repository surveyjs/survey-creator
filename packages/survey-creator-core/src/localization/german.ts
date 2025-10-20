import { setupLocale } from "survey-creator-core";

export var germanTranslation = {
  // survey templates
  survey: {
    // "Edit"
    edit: "Bearbeiten",
    // "Watch and learn how to create surveys"
    externalHelpLink: "Schauen Sie sich an, wie Sie Umfragen erstellen können",
    // "https://www.youtube.com/channel/UCH2ru9okIcooNZfpIbyq4qQ?view_as=subscriber"
    externalHelpLinkUrl: "https://www.youtube.com/channel/UCH2ru9okIcooNZfpIbyq4qQ?view_as=subscriber",
    // "Please drop a question here from the Toolbox."
    dropQuestion: "Frage bitte hier platzieren.",
    // "Create a rule to customize the flow of the survey."
    addLogicItem: "Eine Regel erstellen, um den Fluss der Umfrage anzupassen.",
    // "Copy"
    copy: "Kopieren",
    // "Duplicate"
    duplicate: "Duplizieren",
    // "Add to toolbox"
    addToToolbox: "Zur Werkzeugleiste hinzufügen",
    // "Delete Panel"
    deletePanel: "Panel löschen",
    // "Delete Question"
    deleteQuestion: "Frage löschen",
    // "Convert to"
    convertTo: "Konvertieren zu",
    // "Drag element"
    drag: "Element ziehen"
  },
  // Creator tabs
  tabs: {
    // "Preview"
    preview: "Test",
    // "Themes"
    theme: "Themen",
    // "Translations"
    translation: "Übersetzung",
    // "Designer"
    designer: "Designer",
    // "JSON Editor"
    json: "JSON",
    // "Logic"
    logic: "Logik"
  },
  // Question types
  qt: {
    // "Default"
    default: "Standard",
    // "Checkboxes"
    checkbox: "Auswahl",
    // "Long Text"
    comment: "Kommentar",
    // "Image Picker"
    imagepicker: "Bildauswahl",
    // "Ranking"
    ranking: "Reihenfolge",
    // "Image"
    image: "Bild",
    // "Dropdown"
    dropdown: "Dropdown",
    // "Multi-Select Dropdown"
    tagbox: "Dropdown-Menü mit Mehrfachauswahl",
    // "File Upload"
    file: "Datei",
    // "HTML"
    html: "HTML",
    // "Single-Select Matrix"
    matrix: "Matrix (einfache Auswahl)",
    // "Multi-Select Matrix"
    matrixdropdown: "Matrix (mehrfache Auswahl)",
    // "Dynamic Matrix"
    matrixdynamic: "Matrix (dynamische Zeilen)",
    // "Multiple Textboxes"
    multipletext: "Text (mehrzeilig)",
    // "Panel"
    panel: "Panel",
    // "Dynamic Panel"
    paneldynamic: "Panel (dynamisch)",
    // "Radio Button Group"
    radiogroup: "Option",
    // "Rating Scale"
    rating: "Bewertung",
    // [Auto-translated] "Slider"
    slider: "Schieberegler",
    // "Single-Line Input"
    text: "Text",
    // "Yes/No (Boolean)"
    boolean: "Wahrheitswert",
    // "Expression (read-only)"
    expression: "Ausdruck (schreibgeschützt)",
    // "Signature"
    signaturepad: "Unterschrift",
    // "Button Group"
    buttongroup: "Schaltfläche-Gruppe"
  },
  toolboxCategories: {
    // "General"
    general: "Allgemein",
    // "Choice Questions"
    choice: "Auswahl-Fragen",
    // "Text Input Questions"
    text: "Text-Eingabe-Fragen",
    // "Containers"
    containers: "Bereiche",
    // "Matrix Questions"
    matrix: "Matrix-Fragen",
    // "Misc"
    misc: "Verschiedenes"
  },
  // Strings in SurveyJS Creator
  ed: {
    // "Default ({0})"
    defaultLocale: "Standard ({0})",
    // "Survey"
    survey: "Umfrage",
    // "Settings"
    settings: "Umfrageeinstellungen",
    // "Open settings"
    settingsTooltip: "Umfrageeinstellungen öffnen",
    // "Survey Settings"
    surveySettings: "Umfrage Einstellungen",
    // "Survey settings"
    surveySettingsTooltip: "Einstellungen für Umfragen",
    // [Auto-translated] "Theme Settings"
    themeSettings: "Theme-Einstellungen",
    // [Auto-translated] "Theme settings"
    themeSettingsTooltip: "Theme-Einstellungen",
    // [Auto-translated] "Creator Settings"
    creatorSettingTitle: "Creator-Einstellungen",
    // "Show Panel"
    showPanel: "Panel anzeigen",
    // "Hide Panel"
    hidePanel: "Panel verstecken",
    // "Select previous"
    prevSelected: "Vorheriges auswählen",
    // "Select next"
    nextSelected: "Nächstes auswählen",
    // [Auto-translated] "Focus previous"
    prevFocus: "Fokus zurück",
    // [Auto-translated] "Focus next"
    nextFocus: "Weiter fokussieren",
    // "Survey"
    surveyTypeName: "Umfrage",
    // "Page"
    pageTypeName: "Seite",
    // "Panel"
    panelTypeName: "Panel",
    // "Question"
    questionTypeName: "Frage",
    // "Column"
    columnTypeName: "Spalte",
    // "Add New Page"
    addNewPage: "Neue Seite hinzufügen",
    // "Scroll to the Right"
    moveRight: "Nach rechts scrollen",
    // "Scroll to the Left"
    moveLeft: "Nach links scrollen",
    // "Delete Page"
    deletePage: "Seite löschen",
    // "Edit Page"
    editPage: "Seite bearbeiten",
    // "Edit"
    edit: "Bearbeiten",
    // "page"
    newPageName: "Seite",
    // "question"
    newQuestionName: "Frage",
    // "panel"
    newPanelName: "Panel",
    // "text"
    newTextItemName: "Text",
    // "Default"
    defaultV2Theme: "Standard",
    // "Modern"
    modernTheme: "Modern",
    // "Default (legacy)"
    defaultTheme: "Standard (veraltet)",
    // "Preview Survey Again"
    testSurveyAgain: "Testumfrage wiederholen",
    // "Survey width: "
    testSurveyWidth: "Umfragebreite: ",
    // "You had to navigate to"
    navigateToMsg: "Sie werden weitergeleitet: ",
    // "Save Survey"
    saveSurvey: "Umfrage speichern",
    // "Save Survey"
    saveSurveyTooltip: "Umfrage speichern",
    // [Auto-translated] "Save Theme"
    saveTheme: "Theme speichern",
    // [Auto-translated] "Save Theme"
    saveThemeTooltip: "Theme speichern",
    // "Hide errors"
    jsonHideErrors: "Fehler verstecken",
    // "Show errors"
    jsonShowErrors: "Fehler anzeigen",
    // "Undo"
    undo: "Rückgängig",
    // "Redo"
    redo: "Wiederherstellen",
    // "Undo last change"
    undoTooltip: "Letzte Änderung rückgängig machen",
    // "Redo the change"
    redoTooltip: "Letzte Änderung wiederherstellen",
    // [Auto-translated] "Expand"
    expandTooltip: "Erweitern",
    // [Auto-translated] "Collapse"
    collapseTooltip: "Zusammenbruch",
    // "Expand All"
    expandAllTooltip: "Alle aufklappen",
    // "Collapse All"
    collapseAllTooltip: "Alle einklappen",
    // [Auto-translated] "Zoom In"
    zoomInTooltip: "Vergrößern",
    // [Auto-translated] "Zoom to 100%"
    zoom100Tooltip: "Auf 100 % zoomen",
    // [Auto-translated] "Zoom Out"
    zoomOutTooltip: "Verkleinern",
    // [Auto-translated] "Lock expand/collapse state for questions"
    lockQuestionsTooltip: "Sperren des Erweiterungs-/Einklappenzustands für Fragen",
    // "Show more"
    showMoreChoices: "Zeige mehr",
    // "Show less"
    showLessChoices: "Zeige weniger",
    // "Copy"
    copy: "Kopieren",
    // "Cut"
    cut: "Ausschneiden",
    // "Paste"
    paste: "Einfügen",
    // "Copy selection to clipboard"
    copyTooltip: "Auswahl in die Zwischenablage kopieren",
    // "Cut selection to clipboard"
    cutTooltip: "Auswahl ausschneiden",
    // "Paste from clipboard"
    pasteTooltip: "Aus der Zwischenablage einfügen",
    // "Options"
    options: "Optionen",
    // "Generate Valid JSON"
    generateValidJSON: "Gültiges JSON generieren",
    // "Generate Readable JSON"
    generateReadableJSON: "Lesbares JSON generieren",
    // "Toolbox"
    toolbox: "Werkzeugleiste",
    // "Properties"
    "property-grid": "Eigenschaften",
    // [Auto-translated] "Search"
    toolboxSearch: "Suchen",
    // [Auto-translated] "Type to search..."
    toolboxFilteredTextPlaceholder: "Geben Sie ein, um zu suchen...",
    // [Auto-translated] "No results found"
    toolboxNoResultsFound: "Keine Ergebnisse gefunden",
    // "Type to search..."
    propertyGridFilteredTextPlaceholder: "Tippen, um zu suchen ...",
    // [Auto-translated] "No results found"
    propertyGridNoResultsFound: "Keine Ergebnisse gefunden",
    // [Auto-translated] "Start configuring your form"
    propertyGridPlaceholderTitle: "Beginnen Sie mit der Konfiguration Ihres Formulars",
    // [Auto-translated] "Click any category icon to explore survey settings. Additional settings will become available once you add a survey element to the design surface."
    propertyGridPlaceholderDescription: "Klicken Sie auf ein beliebiges Kategoriesymbol, um die Umfrageeinstellungen zu erkunden. Zusätzliche Einstellungen sind verfügbar, sobald Sie der Entwurfsoberfläche ein Vermessungselement hinzufügen.",
    // "Please correct JSON."
    correctJSON: "Bitte JSON korrigieren.",
    // "Survey Results "
    surveyResults: "Umfrageergebnis: ",
    // "As Table"
    surveyResultsTable: "Als Tabelle",
    // "As JSON"
    surveyResultsJson: "Als JSON",
    // "Question Title"
    resultsTitle: "Titel der Frage",
    // "Question Name"
    resultsName: "Name der Frage",
    // "Answer Value"
    resultsValue: "Wert der Antwort",
    // "Display Value"
    resultsDisplayValue: "Anzeigewert",
    // "Modified"
    modified: "Modifiziert",
    // "Saving"
    saving: "Speichern",
    // "Saved"
    saved: "Gespeichert",
    // "Error"
    propertyEditorError: "Fehler:",
    // "Error! Editor content is not saved."
    saveError: "Fehler! Der Inhalt des Editors wurde nicht gespeichert.",
    // "Language Settings"
    translationPropertyGridTitle: "Übersetzungseinstellungen",
    // [Auto-translated] "Theme Settings"
    themePropertyGridTitle: "Theme-Einstellungen",
    // [Auto-translated] "Add Language"
    addLanguageTooltip: "Sprache hinzufügen",
    // "Languages"
    translationLanguages: "Sprachen",
    // [Auto-translated] "Are you certain you wish to delete all strings for this language?"
    translationDeleteLanguage: "Sind Sie sicher, dass Sie alle Texte für diese Sprache löschen möchten?",
    // "Select language to translate"
    translationAddLanguage: "Wählen Sie eine Sprache aus",
    // "All Strings"
    translationShowAllStrings: "Alle Texte anzeigen",
    // "Used Strings Only"
    translationShowUsedStringsOnly: "Verwendete Texte",
    // "All Pages"
    translationShowAllPages: "Alle Seiten anzeigen",
    // "No strings to translate. Please change the filter."
    translationNoStrings: "Keine Texte zum Übersetzen. Bitte den Filter anpassen.",
    // "Export to CSV"
    translationExportToSCVButton: "Export (CSV)",
    // "Import from CSV"
    translationImportFromSCVButton: "Import (CSV)",
    // [Auto-translated] "Auto-translate All"
    translateUsigAI: "Alle automatisch übersetzen",
    // [Auto-translated] "Translate from: "
    translateUsigAIFrom: "Sprachrichtung: ",
    // [Auto-translated] "Untranslated strings"
    translationDialogTitle: "Nicht übersetzte Texte",
    // "Merge {0} with default locale"
    translationMergeLocaleWithDefault: "{0} mit der Standardsprache zusammenführen",
    // "Translation..."
    translationPlaceHolder: "Übersetzung ...",
    // [Auto-translated] "Source: "
    translationSource: "Quelle: ",
    // [Auto-translated] "Target: "
    translationTarget: "Ziel: ",
    // [Auto-translated] "YouTube links are not supported."
    translationYouTubeNotSupported: "YouTube-Links werden nicht unterstützt.",
    // "Export"
    themeExportButton: "Exportieren",
    // "Import"
    themeImportButton: "Importieren",
    // [Auto-translated] "Export"
    surveyJsonExportButton: "Exportieren",
    // [Auto-translated] "Import"
    surveyJsonImportButton: "Importieren",
    // [Auto-translated] "Copy to clipboard"
    surveyJsonCopyButton: "In Zwischenablage kopieren",
    // [Auto-translated] "Reset theme settings to default"
    themeResetButton: "Theme-Einstellungen auf die Standardeinstellungen zurücksetzen",
    // [Auto-translated] "Do you really want to reset the theme? All your customizations will be lost."
    themeResetConfirmation: "Möchten Sie das Theme wirklich zurücksetzen? Alle Ihre Anpassungen gehen verloren.",
    // [Auto-translated] "Yes, reset the theme"
    themeResetConfirmationOk: "Ja, Design zurücksetzen.",
    // "Bold"
    bold: "Fett",
    // "Italic"
    italic: "Kursiv",
    // "Underline"
    underline: "Unterstrichen",
    // "Add Question"
    addNewQuestion: "Frage hinzufügen",
    // "Select page..."
    selectPage: "Seite auswählen ...",
    // [Auto-translated] "Choices are copied from"
    carryForwardChoicesCopied: "Auswahlmöglichkeiten werden kopiert von",
    // [Auto-translated] "Choices are loaded from a web service."
    choicesLoadedFromWebText: "Auswahlmöglichkeiten werden aus einem Webdienst geladen.",
    // [Auto-translated] "Go to settings"
    choicesLoadedFromWebLinkText: "Gehen Sie zu den Einstellungen",
    // [Auto-translated] "Preview of loaded choice options"
    choicesLoadedFromWebPreviewTitle: "Vorschau der geladenen Auswahloptionen",
    // "HTML content will be here."
    htmlPlaceHolder: "HTML wird hier dargestellt werden.",
    // "Drop a question from the toolbox here."
    panelPlaceHolder: "Ziehe eine Frage aus der Toolbox hier her.",
    // "The survey is empty. Drag an element from the toolbox or click the button below."
    surveyPlaceHolder: "Die Umfrage enthält keine Frage. Ziehen Sie ein Element aus der Toolbox hier her oder drücken Sie auf die Schaltfläche unten.",
    // [Auto-translated] "The page is empty. Drag an element from the toolbox or click the button below."
    pagePlaceHolder: "Die Seite ist leer. Ziehen Sie ein Element aus der Toolbox oder klicken Sie auf die Schaltfläche unten.",
    // [Auto-translated] "Drag and drop an image here or click the button below and choose an image to upload"
    imagePlaceHolder: "Ziehen Sie ein Bild per Drag & Drop hierher oder klicken Sie auf die Schaltfläche unten und wählen Sie ein Bild zum Hochladen aus",
    // "Click the \"Add Question\" button below to start creating your form."
    surveyPlaceHolderMobile: "Klicken Sie unten auf die Schaltfläche \"Frage hinzufügen\", um mit der Erstellung Ihres Formulars zu beginnen.",
    // [Auto-translated] "Your form is empty"
    surveyPlaceholderTitle: "Ihr Formular ist leer",
    // [Auto-translated] "Your form is empty"
    surveyPlaceholderTitleMobile: "Ihr Formular ist leer",
    // [Auto-translated] "Drag an element from the toolbox or click the button below."
    surveyPlaceholderDescription: "Ziehen Sie ein Element aus der Toolbox oder klicken Sie auf die Schaltfläche unten.",
    // [Auto-translated] "Drag an element from the toolbox or click the button below."
    surveyPlaceholderDescriptionMobile: "Ziehen Sie ein Element aus der Toolbox oder klicken Sie auf die Schaltfläche unten.",
    // [Auto-translated] "No preview"
    previewPlaceholderTitle: "Keine Vorschau",
    // [Auto-translated] "No preview"
    previewPlaceholderTitleMobile: "Keine Vorschau",
    // [Auto-translated] "The survey doesn't contain any visible elements."
    previewPlaceholderDescription: "Die Umfrage enthält keine sichtbaren Elemente.",
    // [Auto-translated] "The survey doesn't contain any visible elements."
    previewPlaceholderDescriptionMobile: "Die Umfrage enthält keine sichtbaren Elemente.",
    // [Auto-translated] "No strings to translate"
    translationsPlaceholderTitle: "Keine Zeichenfolgen zu übersetzen",
    // [Auto-translated] "No strings to translate"
    translationsPlaceholderTitleMobile: "Keine Zeichenfolgen zu übersetzen",
    // [Auto-translated] "Add elements to your form or change the strings filter in the toolbar."
    translationsPlaceholderDescription: "Fügen Sie Ihrem Formular Elemente hinzu oder ändern Sie den Zeichenfolgenfilter in der Symbolleiste.",
    // [Auto-translated] "Add elements to your form or change the strings filter in the toolbar."
    translationsPlaceholderDescriptionMobile: "Fügen Sie Ihrem Formular Elemente hinzu oder ändern Sie den Zeichenfolgenfilter in der Symbolleiste.",
    // "Click the \"Add Question\" button below to add a new element to the page."
    pagePlaceHolderMobile: "Klicken Sie unten auf die Schaltfläche \"Frage hinzufügen\", um der Seite ein neues Element hinzuzufügen.",
    // "Click the \"Add Question\" button below to add a new element to the panel."
    panelPlaceHolderMobile: "Klicken Sie unten auf die Schaltfläche \"Frage hinzufügen\", um dem Bedienfeld ein neues Element hinzuzufügen.",
    // [Auto-translated] "Click the button below and choose an image to upload"
    imagePlaceHolderMobile: "Klicken Sie auf die Schaltfläche unten und wählen Sie ein Bild zum Hochladen aus",
    // "Choose Image"
    imageChooseImage: "Bild auswählen",
    // "Add {0}"
    addNewTypeQuestion: "{0} hinzufügen", // {0} is localizable question type
    // "[LOGO]"
    chooseLogoPlaceholder: "[LOGO]",
    // [Auto-translated] "Item "
    choices_Item: "Artikel ",
    // [Auto-translated] "Select a file"
    selectFile: "Wählen Sie eine Datei aus",
    // [Auto-translated] "Remove the file"
    removeFile: "Entfernen Sie die Datei",
    lg: {
      // "Add New Rule"
      addNewItem: "Neue Regel hinzufügen",
      // "Create a rule to customize the flow of the survey."
      empty_tab: "Erstellen Sie eine Regel, um den Fluss der Umfrage anzupassen.",
      // [Auto-translated] "No logical rules"
      logicPlaceholderTitle: "Keine logischen Regeln",
      // [Auto-translated] "No logical rules"
      logicPlaceholderTitleMobile: "Keine logischen Regeln",
      // [Auto-translated] "Create a rule to customize the flow of the survey."
      logicPlaceholderDescription: "Erstellen Sie eine Regel, um den Ablauf der Umfrage anzupassen.",
      // [Auto-translated] "Create a rule to customize the flow of the survey."
      logicPlaceholderDescriptionMobile: "Erstellen Sie eine Regel, um den Ablauf der Umfrage anzupassen.",
      // "Show/hide page"
      page_visibilityName: "Seite anzeigen/verstecken",
      // "Enable/disable page"
      page_enableName: "Seite aktivieren/deaktivieren",
      // [Auto-translated] "Make page required"
      page_requireName: "Seite als erforderlich festlegen",
      // "Show/hide panel"
      panel_visibilityName: "Panel anzeigen/verstecken",
      // "Enable/disable panel"
      panel_enableName: "Panel aktivieren/deaktivieren",
      // [Auto-translated] "Make panel required"
      panel_requireName: "Panel als erforderlich festlegen",
      // "Show/hide question"
      question_visibilityName: "Frage anzeigen/verstecken",
      // "Enable/disable question"
      question_enableName: "Frage aktivieren/deaktivieren",
      // "Make question required"
      question_requireName: "Frage optional/erforderlich",
      // [Auto-translated] "Reset question value"
      question_resetValueName: "Fragewert zurücksetzen",
      // [Auto-translated] "Set question value"
      question_setValueName: "Festlegen des Fragewerts",
      // "Show/hide column"
      column_visibilityName: "Spalte anzeigen/verstecken",
      // "Enable/disable column"
      column_enableName: "Spalte aktivieren/deaktivieren",
      // "Make column required"
      column_requireName: "Spalte optional/erforderlich",
      // [Auto-translated] "Reset column value"
      column_resetValueName: "Spaltenwert zurücksetzen",
      // [Auto-translated] "Set column value"
      column_setValueName: "Festlegen des Spaltenwerts",
      // "Complete survey"
      trigger_completeName: "Umfrage abschließen",
      // "Set answer"
      trigger_setvalueName: "Antwort setzen",
      // "Copy answer"
      trigger_copyvalueName: "Antwort kopieren",
      // "Skip to question"
      trigger_skipName: "Zu Frage springen",
      // "Run expression"
      trigger_runExpressionName: "Ausdruck ausführen",
      // "Set \"Thank You\" page markup"
      completedHtmlOnConditionName: "Seite nach Abschluss der Umfrage anzeigen",
      // "Make the page visible when the logical expression evaluates to true. Otherwise, keep the page invisible."
      page_visibilityDescription: "Seite sichtbar machen, wenn der logische Ausdruck wahr ergibt. Andernfalls unsichtbar lassen.",
      // "Make the page visible when the logical expression evaluates to true. Otherwise, keep the panel invisible."
      panel_visibilityDescription: "Panel sichtbar machen, wenn der logische Ausdruck wahr ergibt. Andernfalls unsichtbar lassen.",
      // "Make the panel and all elements inside it enabled when the logical expression evaluates to true. Otherwise, keep them disabled."
      panel_enableDescription: "Panel zusammen mit all seinen Elementen aktivieren, wenn der logische Ausdruck wahr ergibt. Andernfalls deaktiviert lassen.",
      // "Make the question visible when the logical expression evaluates to true. Otherwise, keep the question invisible."
      question_visibilityDescription: "Frage sichtbar machen, wenn der logische Ausdruck wahr ergibt. Andernfalls unsichtbar lassen.",
      // "Make the question enabled when the logical expression evaluates to true. Otherwise, keep the question disabled."
      question_enableDescription: "Frage aktivieren, wenn der logische Ausdruck wahr ergibt. Andernfalls deaktiviert lassen.",
      // "Question becomes required when the logical expression evaluates to true."
      question_requireDescription: "Frage wird erforderlich, wenn der logische Ausdruck wahr ergibt.",
      // "When the logical expression evaluates to true, the survey ends, and the respondent sees the \"Thank you\" page."
      trigger_completeDescription: "Wenn der logische Ausdruck wahr ergibt, wird die Umfrage abgeschlossen und der Benutzer sieht die Abschlussseite der Umfrage.",
      // "When question values used in the logical expression are changed, and the expression evaluates to true, the specified value is assigned to the selected question."
      trigger_setvalueDescription: "Wenn Werte, die im logischen Ausdruck verwendet werden, geändert werden und der logische Ausdruck wahr ergibt, dann wird der Wert in die ausgewählte Frage eingesetzt.",
      // "When question values used in the logical expression are changed, and the expression evaluates to true, the value of the selected question is copied to another question."
      trigger_copyvalueDescription: "Wenn Werte, die im logischen Ausdruck verwendet werden, geändert werden und der logische Ausdruck wahr ergibt, dann wird der Wert einer ausgewählte Frage kopiert und in eine andere ausgewählte Frage eingesetzt.",
      // "When the logical expression evaluates to true, the survey focuses/jumps to the selected question."
      trigger_skipDescription: "Wenn der logische Ausdruck wahr ergibt, springt die Umfrage zur ausgewählten Frage.",
      // "When the logical expression evaluates to true, the survey evaluates another expression. Optionally, the result of the latter expression can be assigned as a value to the selected question"
      trigger_runExpressionDescription: "Wenn der logische Ausdruck wahr ergibt, wird die benutzerdefinierte Anweisung ausgeführt. Sie können optional das Ergebnis der Anweisung in die ausgewählte Frage einsetzen.",
      // "If the logical expression evaluates to true, the \"Thank You\" page displays the specified content."
      completedHtmlOnConditionDescription: "Wenn der logische Ausdruck wahr ergibt, wird der Standardtext der Abschlussseite der Umfrage mit dem gegebenen Text ersetzt.",
      // "When expression: '{0}' returns true"
      itemExpressionText: "Wenn der Ausdruck '{0}' wahr ergibt:", // {0} - the expression
      // "New rule"
      itemEmptyExpressionText: "Neue Regel",
      // "make page {0} visible"
      page_visibilityText: "Seite {0} sichtbar machen", // {0} page name
      // "make panel {0} visible"
      panel_visibilityText: "Panel {0} sichtbar machen", // {0} panel name
      // "make panel {0} enable"
      panel_enableText: "Panel {0} aktivieren", // {0} panel name
      // "make question {0} visible"
      question_visibilityText: "Frage {0} sichtbar machen", // {0} question name
      // "make question {0} enable"
      question_enableText: "Frage {0} aktivieren", // {0} question name
      // "make question {0} required"
      question_requireText: "Frage {0} erforderlich machen", // {0} question name
      // [Auto-translated] "reset value for question: {0}"
      question_resetValueText: "Reset-Wert für Frage: {0}", // {0} question name.
      // [Auto-translated] "assign value: {1} to question: {0}"
      question_setValueText: "Wert zuweisen: {1} zu fragen: {0}", // {0} question name and {1} setValueExpression
      // "make column {0} of question {1} visible"
      column_visibilityText: "Spalte {0} von Frage {1} sichtbar machen", // {0} column name, {1} question name
      // "make column {0} of question {1} enable"
      column_enableText: "Spalte {0} von Frage {1} aktivieren", // {0} column name, {1} question name
      // "make column {0} of question {1} required"
      column_requireText: "Spalte {0} von Frage {1} erforderlich machen", // {0} column name, {1} question name
      // [Auto-translated] "reset cell value for column: {0}"
      column_resetValueText: "Zellenwert für Spalte zurücksetzen: {0}", // {0} column name
      // [Auto-translated] "assign cell value: {1} to column: {0}"
      column_setValueText: "Zellenwert zuweisen: {1} zur Spalte: {0}", // {0} column name and {1} setValueExpression
      // [Auto-translated] "An expression whose result will be assigned to the target question."
      setValueExpressionPlaceholder: "Ein Ausdruck, dessen Ergebnis der Zielfrage zugewiesen wird.",
      // "survey becomes completed"
      trigger_completeText: "Umfrage abschließen",
      // "set into question: {0} value {1}"
      trigger_setvalueText: " In Frage {0} den Wert {1} einsetzen", // {0} question name, {1} setValue
      // [Auto-translated] "clear question value: {0}"
      trigger_setvalueEmptyText: "Fragewert: {0} löschen", // {0} question name
      // "copy into question: {0} value from question {1}"
      trigger_copyvalueText: "In Frage {0} den Wert von Frage {1} kopieren", // {0} and {1} question names
      // "survey skip to the question {0}"
      trigger_skipText: "Zu Frage {0} gehen", // {0} question name
      // "run expression: '{0}'"
      trigger_runExpressionText1: "Folgendee Ausdruck ausführen: '{0}'", // {0} the expression
      // " and set its result into question: {0}"
      trigger_runExpressionText2: " und das Ergebnis in Frage {0} einsetzen", // {0} question name
      // "show custom text for the \"Thank You\" page."
      completedHtmlOnConditionText: "Benutzerdefinierter Text auf der Abschlussseite der Umfrage anzeigen.",
      // "All Questions"
      showAllQuestions: "Alle Fragen anzeigen",
      // "All Action Types"
      showAllActionTypes: "Alle Aktionen anzeigen",
      // "Condition(s)"
      conditions: "Bedingungen",
      // "Action(s)"
      actions: "Aktionen",
      // "Define condition(s)"
      expressionEditorTitle: "Bedingungen definieren",
      // "Define action(s)"
      actionsEditorTitle: "Aktionen definieren",
      // "Delete Action"
      deleteAction: "Aktion löschen",
      // "Add Action"
      addNewAction: "Aktion hinzufügen",
      // "Select action..."
      selectedActionCaption: "Aktion zum Hinzufügen auswählen...",
      // "The logic expression is empty or invalid. Please correct it."
      expressionInvalid: "Der logische Ausdruck ist leer oder ungültig. Bitte korrigieren Sie ihn.",
      // "Please add at least one action."
      noActionError: "Bitte fügen Sie mindestens eine Aktion hinzu.",
      // "Please fix issues in your action(s)."
      actionInvalid: "Bitte beheben Sie die bestehenden Probleme in Ihren Aktionen.",
      // [Auto-translated] "Logical rules are incomplete"
      uncompletedRule_title: "Logische Regeln sind unvollständig",
      // [Auto-translated] "You have not completed some of the logical rules. If you leave the tab now, the changes will be lost. Do you still want to leave the tab without completing the changes?"
      uncompletedRule_text: "Sie haben einige der logischen Regeln nicht erfüllt. Wenn Sie den Tab jetzt verlassen, gehen die Änderungen verloren. Möchten Sie den Tab dennoch verlassen, ohne die Änderungen abzuschließen?",
      // [Auto-translated] "Yes"
      uncompletedRule_apply: "Ja",
      // [Auto-translated] "No, I want to complete the rules"
      uncompletedRule_cancel: "Nein, ich möchte die Regeln vervollständigen"
    }
  },
  // Property Editors
  pe: {
    panel: {
      // [Auto-translated] "Panel name"
      name: "Name des Panels",
      // [Auto-translated] "Panel title"
      title: "Titel des Panels",
      // [Auto-translated] "Panel description"
      description: "Beschreibung des Panels",
      // [Auto-translated] "Make the panel visible if"
      visibleIf: "Panel sichtbar machen, wenn",
      // [Auto-translated] "Make the panel required if"
      requiredIf: "Panel erforderlich machen, wenn",
      // [Auto-translated] "Question order within the panel"
      questionOrder: "Reihenfolge der Fragen innerhalb des Panels",
      // [Auto-translated] "Move the panel to page"
      page: "Verschieben des Bedienfelds auf eine Seite",
      // [Auto-translated] "Display the panel on a new line"
      startWithNewLine: "Panel in einer neuen Zeile anzeigen",
      // [Auto-translated] "Panel collapse state"
      state: "Status des Ausblendens des Panels",
      // [Auto-translated] "Inline panel width"
      width: "Inline-Paneelbreite",
      // [Auto-translated] "Minimum panel width"
      minWidth: "Minimale Paneelbreite",
      // [Auto-translated] "Maximum panel width"
      maxWidth: "Maximale Paneelbreite",
      // [Auto-translated] "Number this panel"
      showNumber: "Nummerieren Sie dieses Feld"
    },
    panellayoutcolumn: {
      // [Auto-translated] "Effective width, %"
      effectiveWidth: "Effektive Breite, %",
      // [Auto-translated] "Question title width, px"
      questionTitleWidth: "Titelbreite der Frage, px"
    },
    paneldynamic: {
      // [Auto-translated] "Panel name"
      name: "Name des Panels",
      // [Auto-translated] "Panel title"
      title: "Titel des Panels",
      // [Auto-translated] "Panel description"
      description: "Beschreibung des Panels",
      // [Auto-translated] "Entry display mode"
      displayMode: "Anzeigemodus für den Einstieg",
      // [Auto-translated] "Make the panel visible if"
      visibleIf: "Panel sichtbar machen, wenn",
      // [Auto-translated] "Make the panel required if"
      requiredIf: "Panel erforderlich machen, wenn",
      // [Auto-translated] "Move the panel to page"
      page: "Panel auf die Seite verschieben",
      // [Auto-translated] "Display the panel on a new line"
      startWithNewLine: "Anzeigen des Panels in einer neuen Zeile",
      // [Auto-translated] "Panel collapse state"
      state: "Status des Ausblendens des Panels",
      // [Auto-translated] "Inline panel width"
      width: "Breite des Inline-Panels",
      // [Auto-translated] "Minimum panel width"
      minWidth: "Minimale Breite des Panels",
      // [Auto-translated] "Maximum panel width"
      maxWidth: "Maximale Breite des Panels",
      // [Auto-translated] "Confirm entry removal"
      confirmDelete: "Bestätigen Sie die Entfernung des Eintrags",
      // [Auto-translated] "Entry description pattern"
      templateDescription: "Muster für die Eintragsbeschreibung",
      // [Auto-translated] "Entry title pattern"
      templateTitle: "Muster für den Titeleintrag",
      // [Auto-translated] "Empty panel text"
      noEntriesText: "Text für leeres Panel",
      // [Auto-translated] "Tab title pattern"
      templateTabTitle: "Muster des Tab-Titels",
      // [Auto-translated] "Tab title placeholder"
      tabTitlePlaceholder: "Platzhalter für Registerkartentitel",
      // [Auto-translated] "Make an individual entry visible if"
      templateVisibleIf: "Machen Sie einen einzelnen Eintrag sichtbar, wenn",
      // [Auto-translated] "Number the panel"
      showNumber: "Nummerieren des Bedienfelds",
      // [Auto-translated] "Panel title alignment"
      titleLocation: "Ausrichtung des Panel-Titels",
      // [Auto-translated] "Panel description alignment"
      descriptionLocation: "Ausrichtung der Panelbeschreibung",
      // [Auto-translated] "Question title alignment"
      templateQuestionTitleLocation: "Ausrichtung des Fragetitels",
      // [Auto-translated] "Question title width"
      templateQuestionTitleWidth: "Breite des Fragetitels",
      // [Auto-translated] "Error message alignment"
      templateErrorLocation: "Ausrichtung von Fehlermeldungen",
      // [Auto-translated] "New entry location"
      newPanelPosition: "Neuer Einstiegsort",
      // [Auto-translated] "Show the progress bar"
      showRangeInProgress: "Zeigen Sie den Fortschrittsbalken an",
      // [Auto-translated] "Prevent duplicate responses in the following question"
      keyName: "Doppelte Antworten in der folgenden Frage verhindern"
    },
    question: {
      // [Auto-translated] "Question name"
      name: "Name der Frage",
      // [Auto-translated] "Question title"
      title: "Titel der Frage",
      // [Auto-translated] "Question description"
      description: "Beschreibung der Frage",
      // [Auto-translated] "Show the title and description"
      showTitle: "Zeigen Sie den Titel und die Beschreibung an",
      // [Auto-translated] "Make the question visible if"
      visibleIf: "Frage sichtbar machen, wenn",
      // [Auto-translated] "Make the question required if"
      requiredIf: "Frage erforderlich machen, wenn",
      // [Auto-translated] "Move the question to page"
      page: "Verschieben der Frage auf die Seite",
      // [Auto-translated] "Question box collapse state"
      state: "Status des Ausblendens des Fragefelds",
      // [Auto-translated] "Number this question"
      showNumber: "Diese Frage nummerieren",
      // [Auto-translated] "Question title alignment"
      titleLocation: "Ausrichtung des Fragetitels",
      // [Auto-translated] "Question description alignment"
      descriptionLocation: "Ausrichtung der Fragebeschreibung",
      // [Auto-translated] "Error message alignment"
      errorLocation: "Ausrichtung von Fehlermeldungen",
      // [Auto-translated] "Increase the inner indent"
      indent: "Innerer Einzug vergrößern",
      // [Auto-translated] "Inline question width"
      width: "Breite der Inline-Frage",
      // [Auto-translated] "Minimum question width"
      minWidth: "Minimale Fragebreite",
      // [Auto-translated] "Maximum question width"
      maxWidth: "Maximale Fragebreite",
      // [Auto-translated] "Update input field value"
      textUpdateMode: "Eingabefeldwert aktualisieren"
    },
    signaturepad: {
      // [Auto-translated] "Signature area width"
      signatureWidth: "Breite des Signaturbereichs",
      // [Auto-translated] "Signature area height"
      signatureHeight: "Höhe des Signaturbereichs",
      // [Auto-translated] "Auto-scale the signature area"
      signatureAutoScaleEnabled: "Automatisches Skalieren des Signaturbereichs",
      // [Auto-translated] "Show a placeholder within signature area"
      showPlaceholder: "Zeigen Sie einen Platzhalter im Signaturbereich an",
      // [Auto-translated] "Placeholder text"
      placeholder: "Platzhaltertext",
      // [Auto-translated] "Placeholder text in read-only or preview mode"
      placeholderReadOnly: "Platzhaltertext im schreibgeschützten oder Vorschaumodus",
      // "Show the Clear button within signature area"
      allowClear: "Schaltfläche \"Löschen\" im Signaturbereich anzeigen",
      // [Auto-translated] "Minimum stroke width"
      penMinWidth: "Minimale Strichbreite",
      // [Auto-translated] "Maximum stroke width"
      penMaxWidth: "Maximale Strichbreite",
      // [Auto-translated] "Stroke color"
      penColor: "Farbe des Strichs"
    },
    comment: {
      // [Auto-translated] "Input field height (in lines)"
      rows: "Höhe des Eingabefeldes (in Zeilen)"
    },
    // "Question numbering"
    showQuestionNumbers: "Fragennummern anzeigen",
    // "Question indexing type"
    questionStartIndex: "Startindex der Fragen (bspw. \"1\", \"A\", \"a\", ...)",
    expression: {
      // [Auto-translated] "Expression name"
      name: "Name des Ausdrucks",
      // [Auto-translated] "Expression title"
      title: "Titel des Ausdrucks",
      // [Auto-translated] "Expression description"
      description: "Beschreibung des Ausdrucks",
      // [Auto-translated] "Expression"
      expression: "Ausdruck"
    },
    trigger: {
      // [Auto-translated] "Expression"
      expression: "Ausdruck"
    },
    calculatedvalue: {
      // [Auto-translated] "Expression"
      expression: "Ausdruck"
    },
    // survey templates
    survey: {
      // [Auto-translated] "Survey title"
      title: "Titel der Umfrage",
      // [Auto-translated] "Survey description"
      description: "Beschreibung der Umfrage",
      // [Auto-translated] "Make the survey read-only"
      readOnly: "Machen Sie die Umfrage schreibgeschützt"
    },
    page: {
      // [Auto-translated] "Page name"
      name: "Name der Seite",
      // [Auto-translated] "Page title"
      title: "Seitentitel",
      // [Auto-translated] "Page description"
      description: "Seitenbeschreibung",
      // [Auto-translated] "Make the page visible if"
      visibleIf: "Seite sichtbar machen, wenn",
      // [Auto-translated] "Make the page required if"
      requiredIf: "Seite erforderlich machen, wenn",
      // [Auto-translated] "Time limit to complete the page"
      timeLimit: "Zeitlimit zum Abschließen der Seite",
      // [Auto-translated] "Question order on the page"
      questionOrder: "Reihenfolge der Fragen auf der Seite"
    },
    matrixdropdowncolumn: {
      // [Auto-translated] "Column name"
      name: "Name der Spalte",
      // [Auto-translated] "Column title"
      title: "Titel der Spalte",
      // [Auto-translated] "Prevent duplicate responses"
      isUnique: "Doppelte Beantwortungen verhindern",
      // [Auto-translated] "Column width"
      width: "Spaltenbreite",
      // [Auto-translated] "Minimum column width"
      minWidth: "Minimale Spaltenbreite",
      // [Auto-translated] "Input field height (in lines)"
      rows: "Höhe des Eingabefeldes (in Zeilen)",
      // [Auto-translated] "Make the column visible if"
      visibleIf: "Spalte sichtbar machen, wenn",
      // [Auto-translated] "Make the column required if"
      requiredIf: "Spalte erforderlich machen, wenn",
      // [Auto-translated] "Each option in a separate column"
      showInMultipleColumns: "Jede Option in einer separaten Spalte"
    },
    matrixcolumn: {
      // [Auto-translated] "Clear others in the same row"
      isExclusive: "Andere in derselben Reihe löschen"
    },
    multipletextitem: {
      // [Auto-translated] "Name"
      name: "Name",
      // [Auto-translated] "Title"
      title: "Titel"
    },
    masksettings: {
      // [Auto-translated] "Save masked value in survey results"
      saveMaskedValue: "Maskierte Werte in Umfrageergebnissen speichern"
    },
    patternmask: {
      // [Auto-translated] "Value pattern"
      pattern: "Werte-Muster"
    },
    datetimemask: {
      // [Auto-translated] "Minimum value"
      min: "Mindestwert",
      // [Auto-translated] "Maximum value"
      max: "Maximalwert"
    },
    numericmask: {
      // [Auto-translated] "Allow negative values"
      allowNegativeValues: "Negative Werte zulassen",
      // [Auto-translated] "Thousands separator"
      thousandsSeparator: "Tausender-Trennzeichen",
      // [Auto-translated] "Decimal separator"
      decimalSeparator: "Dezimaltrennzeichen",
      // [Auto-translated] "Value precision"
      precision: "Wertgenauigkeit",
      // [Auto-translated] "Minimum value"
      min: "Mindestwert",
      // [Auto-translated] "Maximum value"
      max: "Maximalwert"
    },
    currencymask: {
      // [Auto-translated] "Currency prefix"
      prefix: "Währungs-Präfix",
      // [Auto-translated] "Currency suffix"
      suffix: "Währungs-Suffix"
    },
    // [Auto-translated] "Clear others when selected"
    isExclusive: "Andere löschen, wenn ausgewählt",
    // [Auto-translated] "Display both text and value"
    showValue: "Sowohl Text als auch Wert anzeigen",
    // [Auto-translated] "Require user to enter a comment"
    isCommentRequired: "Benutzer zur Eingabe eines Kommentars auffordern",
    // "Display area height"
    imageHeight: "Bildhöhe",
    // "Display area width"
    imageWidth: "Bildbreite",
    // "Join identifier"
    valueName: "Name der Antwort",
    // [Auto-translated] "Default display value for dynamic texts"
    defaultDisplayValue: "Voreingestellter Anzeigewert für dynamische Texte",
    // [Auto-translated] "Label alignment"
    rateDescriptionLocation: "Ausrichtung der Beschriftung",
    // [Auto-translated] "Input field width (in characters)"
    size: "Breite des Eingabefeldes (in Zeichen)",
    // [Auto-translated] "Cell error message alignment"
    cellErrorLocation: "Ausrichtung von Zellenfehlermeldungen",
    // [Auto-translated] "Enabled"
    enabled: "Ermöglichte",
    // [Auto-translated] "Disabled"
    disabled: "Arbeitsunfähig",
    // [Auto-translated] "Inherit"
    inherit: "Erben",
    // "Apply"
    apply: "Anwenden",
    // "OK"
    ok: "OK",
    // "Save"
    save: "Speichern",
    // "Clear"
    clear: "Leeren",
    // "Save"
    saveTooltip: "Speichern",
    // "Cancel"
    cancel: "Abbrechen",
    // "Set"
    set: "Setze",
    // "Reset"
    reset: "Zurücksetzen",
    // "Change"
    change: "Verändern",
    // "Refresh"
    refresh: "Neu laden",
    // "Close"
    close: "Schliessen",
    // "Delete"
    delete: "Löschen",
    // "Add"
    add: "Hinzufügen",
    // "Add New"
    addNew: "Neues Element hinzufügen",
    // "Click to add an item..."
    addItem: "Klicken, um ein Element hinzuzufügen ...",
    // "Click to remove the item..."
    removeItem: "Klicken, um ein Element zu entfernen ...",
    // "Drag the item"
    dragItem: "Element ziehen",
    // "Other"
    addOther: "Weiteres Element",
    // "Select All"
    addSelectAll: "Alle Elemente auswählen hinzufügen",
    // "None"
    addNone: "Alle Elemente abwählen hinzufügen",
    // "Remove All"
    removeAll: "Alle löschen",
    // "Edit"
    edit: "Bearbeiten",
    // "Return without saving"
    back: "Zurück ohne zu speichern",
    // "Return without saving"
    backTooltip: "Zurück ohne zu speichern",
    // "Save and return"
    saveAndBack: "Speichern und zurück",
    // "Save and return"
    saveAndBackTooltip: "Speichern und zurück",
    // "Done"
    doneEditing: "Fertig",
    // "Edit Choices"
    editChoices: "Auswahlmöglichkeiten bearbeiten",
    // "Show Choices"
    showChoices: "Auswahlmöglichkeiten anzeigen",
    // "Move"
    move: "Verschieben",
    // "<empty>"
    empty: "<leer>",
    // "Value is empty"
    emptyValue: "Wert is leer",
    // "Manual Entry"
    fastEntry: "Schnelleintrag",
    // "Value '{0}' is not unique"
    fastEntryNonUniqueError: "Wert '{0}' ist nicht eindeutig",
    // "Please limit the number of items from {0} to {1}"
    fastEntryChoicesCountError: "Anzahl der Elemente von {0} bis {1} begrenzen",
    // [Auto-translated] "Please enter at least {0} items"
    fastEntryChoicesMinCountError: "Bitte geben Sie mindestens {0} Artikel ein",
    // "Enter the list of choice options and their IDs in the following format:\n\nid|option\n\nA choice option ID is not visible to respondents and can be used in conditional rules."
    fastEntryPlaceholder: "Daten im folgenden Format setzen:\nwert1|text\nwert2",
    // "Form Entry"
    formEntry: "Formulareintrag",
    // "Test the service"
    testService: "Service testen",
    // "Please select the element"
    itemSelectorEmpty: "Bitte ein Element auswählen",
    // "Please select the action"
    conditionActionEmpty: "Bitte eine Aktion auswählen",
    // "Select a question..."
    conditionSelectQuestion: "Frage auswählen ...",
    // "Select a page..."
    conditionSelectPage: "Seite auswählen ...",
    // "Select a panel..."
    conditionSelectPanel: "Panel auswählen ...",
    // "Please enter/select the value"
    conditionValueQuestionTitle: "Bitte den Wert eingeben oder auswählen",
    // "Press ctrl+space to get expression completion hint"
    aceEditorHelp: "Bitte drücken Sie Strg+Leertaste, um Vervollständigungsvorschläge für den Ausdruck zu erhalten",
    // "Current row"
    aceEditorRowTitle: "Aktuelle Zeile",
    // "Current panel"
    aceEditorPanelTitle: "Aktuelles Panel",
    // "For more details please check the documentation"
    showMore: "Weitere Informationen finden Sie in der Dokumentation",
    // "Available questions"
    assistantTitle: "Verfügbare Fragen:",
    // "There is should be at least one column or row"
    cellsEmptyRowsColumns: "Es sollte mindestens eine Spalte oder Zeile geben",
    // "Review before submit"
    showPreviewBeforeComplete: "Vorschau der Antworten vor dem Absenden anzeigen",
    // [Auto-translated] "Enabled by a condition"
    overridingPropertyPrefix: "Aktiviert durch eine Bedingung",
    // [Auto-translated] "Reset"
    resetToDefaultCaption: "Zurücksetzen",
    // "Please enter a value"
    propertyIsEmpty: "Bitte geben Sie einen Wert ein",
    // "Please enter a unique value"
    propertyIsNoUnique: "Bitte geben Sie einen eindeutigen Wert ein",
    // "Please enter a unique name"
    propertyNameIsNotUnique: "Bitte geben Sie einen eindeutigen Wert ein",
    // "Do not use reserved words: \"item\", \"choice\", \"panel\", \"row\"."
    propertyNameIsIncorrect: "Verwenden Sie keine reservierten Wörter: \"Element\", \"Auswahl\", \"Panel\", \"Zeile\".",
    // "You don't have any items yet"
    listIsEmpty: "Neues Element hinzufügen",
    // "You don't have any choices yet"
    "listIsEmpty@choices": "Bisher wurden noch keine Auswahlmöglichkeiten hinzugefügt",
    // [Auto-translated] "You don't have any columns yet"
    "listIsEmpty@columns": "Sie haben noch keine Spalten",
    // [Auto-translated] "You don't have layout columns yet"
    "listIsEmpty@gridLayoutColumns": "Sie haben noch keine Layoutspalten",
    // [Auto-translated] "You don't have any rows yet"
    "listIsEmpty@rows": "Sie haben noch keine Zeilen",
    // [Auto-translated] "You don't have any validation rules yet"
    "listIsEmpty@validators": "Sie haben noch keine Validierungsregeln",
    // [Auto-translated] "You don't have any custom variables yet"
    "listIsEmpty@calculatedValues": "Sie haben noch keine benutzerdefinierten Variablen",
    // [Auto-translated] "You don't have any triggers yet"
    "listIsEmpty@triggers": "Sie haben noch keine Auslöser",
    // [Auto-translated] "You don't have any links yet"
    "listIsEmpty@navigateToUrlOnCondition": "Sie haben noch keine Links",
    // [Auto-translated] "You don't have any pages yet"
    "listIsEmpty@pages": "Sie haben noch keine Seiten",
    // "Add new choice"
    "addNew@choices": "Auswahlmöglichkeit hinzufügen",
    // [Auto-translated] "Add new column"
    "addNew@columns": "Neue Spalte hinzufügen",
    // [Auto-translated] "Add new row"
    "addNew@rows": "Neue Zeile hinzufügen",
    // [Auto-translated] "Add new rule"
    "addNew@validators": "Neue Regel hinzufügen",
    // [Auto-translated] "Add new variable"
    "addNew@calculatedValues": "Neue Variable hinzufügen",
    // [Auto-translated] "Add new trigger"
    "addNew@triggers": "Neuen Auslöser hinzufügen",
    // [Auto-translated] "Add new URL"
    "addNew@navigateToUrlOnCondition": "Neue URL hinzufügen",
    // [Auto-translated] "Add new page"
    "addNew@pages": "Neue Seite hinzufügen",
    // "Expression is empty"
    expressionIsEmpty: "Keinen Ausdruck definiert",
    // "Value"
    value: "Wert",
    // "Text"
    text: "Text",
    // "Row ID"
    rowid: "Zeilen-ID",
    // "Image or video file URL"
    imageLink: "Link auf das Bild",
    // "Edit column: {0}"
    columnEdit: "Spalte bearbeiten: {0}",
    // "Edit item: {0}"
    itemEdit: "Element bearbeiten: {0}",
    // "URL"
    url: "URL",
    // "Path to data"
    path: "Pfad",
    choicesbyurl: {
      // [Auto-translated] "Web service URL"
      url: "Webdienst-URL",
      // [Auto-translated] "Get value to store from the following property"
      valueName: "Abrufen des zu speichernden Werts aus der folgenden Eigenschaft"
    },
    // "Get value to display from the following property"
    titleName: "Name des Titels",
    // "Get file URLs from the following property"
    imageLinkName: "Name des Links zum Bild",
    // "Accept empty response"
    allowEmptyResponse: "Keine Antwort erlauben",
    // "Title"
    titlePlaceholder: "Titel eingeben",
    // "Survey Title"
    surveyTitlePlaceholder: "Umfragetitel eingeben",
    // "Page {num}"
    pageTitlePlaceholder: "Seitenbeschreibung eingeben",
    // [Auto-translated] "Start Page"
    startPageTitlePlaceholder: "Startseite",
    // "Description"
    descriptionPlaceholder: "Beschreibung eingeben",
    // "Description"
    surveyDescriptionPlaceholder: "Umfragebeschreibung eingeben",
    // "Description"
    pageDescriptionPlaceholder: "Seitenbeschreibung eingeben",
    // [Auto-translated] "Wrap choices"
    textWrapEnabled: "Wrap-Auswahl",
    // "Enable the \"Other\" option"
    showOtherItem: "\"Sonstiges\" auswählbar?",
    // "Rename the \"Other\" option"
    otherText: "Text für \"Sonstiges\"",
    // "Enable the \"None\" option"
    showNoneItem: "Alle Elemente abwählbar?",
    // "Enable the \"Refuse to Answer\" option"
    showRefuseItem: "Option \"Antwort ablehnen\" zulassen",
    // "Enable the \"Don't Know\" option"
    showDontKnowItem: "Option \"Weiß nicht\" zulassen",
    // "Rename the \"None\" option"
    noneText: "Text für die Abwahl aller Elemente",
    // "Enable the \"Select All\" option"
    showSelectAllItem: "Alle Elemente auswählbar?",
    // "Rename the \"Select All\" option"
    selectAllText: "Text für die Auswahl aller Elemente",
    // "Minimum value for auto-generated items"
    choicesMin: "Minimaler Wert für automatisch erzeugte Elemente",
    // "Maximum value for auto-generated items"
    choicesMax: "Maximaler Wert für automatisch erzeugte Elemente",
    // "Step value for auto-generated items"
    choicesStep: "Schrittwert für automatisch erzeugte Elemente",
    // "Name"
    name: "Name",
    // "Title"
    title: "Titel",
    // "Cell input type"
    cellType: "Zellentyp",
    // "Column count"
    colCount: "Spaltenanzahl",
    // "Choice order"
    choicesOrder: "Auswahlreihenfolge",
    // [Auto-translated] "Allow custom choices"
    allowCustomChoices: "Benutzerdefinierte Auswahlmöglichkeiten zulassen",
    // "Visible"
    visible: "Sichtbar?",
    // "Required"
    isRequired: "Erforderlich?",
    // [Auto-translated] "Mark as required"
    markRequired: "Als erforderlich markieren",
    // [Auto-translated] "Remove the required mark"
    removeRequiredMark: "Erforderliche Markierung entfernen",
    // "Require an answer in each row"
    eachRowRequired: "Eine Antwort in jeder Zeile erforderlich machen",
    // [Auto-translated] "Prevent duplicate responses in rows"
    eachRowUnique: "Doppelte Beantwortungen in Zeilen verhindern",
    // "Error message for required questions"
    requiredErrorText: "Fehlermeldung bei nicht beantworteten erforderlichen Fragen",
    // "Display the question on a new line"
    startWithNewLine: "Mit einer neuen Zeile starten",
    // "Rows"
    rows: "Zeilenanzahl",
    // "Columns"
    cols: "Spaltenanzahl",
    // "Placeholder text within input field"
    placeholder: "Platzhalter",
    // "Show preview area"
    showPreview: "Bildvorschau angezeigen",
    // "Store file content in JSON result as text"
    storeDataAsText: "Dateininhalt des JSON-Resultats als Text speichern",
    // "Maximum file size (in bytes)"
    maxSize: "Maximale Dateigröße in Bytes",
    // "Row count"
    rowCount: "Zeilenanzahl",
    // "Columns layout"
    columnLayout: "Spaltenlayout",
    // "\"Add Row\" button alignment"
    addRowButtonLocation: "Zeilenknopfposition hinzufügen",
    // [Auto-translated] "Transpose rows to columns"
    transposeData: "Transponieren von Zeilen in Spalten",
    // "\"Add Row\" button text"
    addRowText: "Text für die Schaltfläche \"Zeile hinzufügen\"",
    // "\"Remove Row\" button text"
    removeRowText: "Text für die Schaltfläche \"Zeile entfernen\"",
    // [Auto-translated] "Input field title pattern"
    singleInputTitleTemplate: "Muster für den Titel des Eingabefelds",
    // "Minimum rating value"
    rateMin: "Minimum",
    // "Maximum rating value"
    rateMax: "Maximum",
    // "Step value"
    rateStep: "Schritt Bewertung",
    // "Minimum value label"
    minRateDescription: "Beschreibung für minimale Bewertung",
    // "Maximum value label"
    maxRateDescription: "Beschreibung für maximale Bewertung",
    // "Input type"
    inputType: "Eingabetyp",
    // "Option placeholder"
    optionsCaption: "Auswahlbeschriftung",
    // "Default Answer"
    defaultValue: "Standardantwort",
    // "Default texts"
    cellsDefaultRow: "Standardzellentext",
    // "Edit survey settings"
    surveyEditorTitle: "Umfrageeinstellungen bearbeiten",
    // "Edit: {0}"
    qEditorTitle: "Frage bearbeiten: {0}",
    // "Maximum character limit"
    maxLength: "Maximale Länge",
    // "Build"
    buildExpression: "Einfach",
    // "Edit"
    editExpression: "Erweitert",
    // "and"
    and: "und",
    // "or"
    or: "oder",
    // "Remove"
    remove: "Entfernen",
    // "Add Condition"
    addCondition: "Bedingung hinzufügen",
    // "Select a question to start configuring conditions."
    emptyLogicPopupMessage: "Wählen Sie eine Frage aus, um die Bedingungen festzulegen.",
    // "If"
    if: "Wenn",
    // "then"
    then: "dann",
    // "Target question"
    setToName: "von",
    // "Question to copy answer from"
    fromName: "bis",
    // "Question to skip to"
    gotoName: "Zur Frage springen",
    // "Rule is incorrect"
    ruleIsNotSet: "Regel is nicht korrekt",
    // "Add to the survey results"
    includeIntoResult: "In Umfrageergebnisse einbeziehen",
    // "Make the title and description visible"
    showTitle: "Titel anzeigen",
    // "Expand/collapse title"
    expandCollapseTitle: "Titel ausklappen/einklappen",
    // "Select a survey language"
    locale: "Standardsprache",
    // "Select device type"
    simulator: "Gerät auswählen",
    // "Switch to landscape orientation"
    landscapeOrientation: "Querformat",
    // "Switch to portrait orientation"
    portraitOrientation: "Hochformat",
    // "Clear hidden question values"
    clearInvisibleValues: "Alle unsichtbaren Werte leeren",
    // "Limit to one response"
    cookieName: "Cookie-Name (um zu unterdrücken, dass die Umfrage lokal zwei Mal ausgefüllt werden kann)",
    // "Auto-save survey progress on page change"
    partialSendEnabled: "Umfrageergebnisse beim Seitenwechsel automatisch speichern",
    // "Save the \"Other\" option value as a separate property"
    storeOthersAsComment: "\"Sonstige\" Werte als Kommentar speichern",
    // "Show page titles"
    showPageTitles: "Seitenbeschreibung anzeigen",
    // "Show page numbers"
    showPageNumbers: "Seitennummern anzeigen",
    // "\"Previous Page\" button text"
    pagePrevText: "Text für die Schaltfläche \"Vorherige Seite\"",
    // "\"Next Page\" button text"
    pageNextText: "Text für die Schaltfläche \"Nächste Seite\"",
    // "\"Complete Survey\" button text"
    completeText: "Text für die Schaltfläche \"Abschließen\"",
    // "\"Review Answers\" button text"
    previewText: "Text für die Schaltfläche \"Vorschau\"",
    // "\"Edit Answer\" button text"
    editText: "Text für die Schaltfläche \"Antwort bearbeiten\"",
    // "\"Start Survey\" button text"
    startSurveyText: "Text für die Schaltfläche \"Umfrage starten\"",
    // "Show navigation buttons"
    showNavigationButtons: "Navigationsschaltflächen anzeigen",
    // [Auto-translated] "Navigation buttons alignment"
    navigationButtonsLocation: "Ausrichtung der Navigationsschaltflächen",
    // "Show the \"Previous Page\" button"
    showPrevButton: "Schaltfläche \"Vorherige Seite\" anzeigen (Benutzer können auf die vorherige Seite zurückkehren)",
    // "First page is a start page"
    firstPageIsStartPage: "Die erste Seite der Umfrage ist die Startseite",
    // "Show the \"Thank You\" page"
    showCompletePage: "Nach Abschluss die Seite \"Umfrage abgeschlossen\" anzeigen",
    // "Auto-advance to the next page"
    autoAdvanceEnabled: "Automatisch zur nächsten Seiten wechseln",
    // [Auto-translated] "Complete the survey automatically"
    autoAdvanceAllowComplete: "Umfrage automatisch ausfüllen",
    // "Show the progress bar"
    showProgressBar: "Fortschrittsbalken anzeigen",
    // [Auto-translated] "Progress bar alignment"
    progressBarLocation: "Ausrichtung der Fortschrittsleiste",
    // "Question title alignment"
    questionTitleLocation: "Position des Fragentitels",
    // "Question title width"
    questionTitleWidth: "Breite des Fragetitels",
    // "Required symbol(s)"
    requiredMark: "Symbol für erforderliche Fragen",
    // "Question title template, default is: '{no}. {require} {title}'"
    questionTitleTemplate: "Template für den Fragentitel. Standard ist: \"{no}. {require} {title}\"",
    // "Error message alignment"
    questionErrorLocation: "Position der Fehlermeldungen",
    // "Focus first question on a new page"
    autoFocusFirstQuestion: "Erste Frage auf einer neuen Seite fokussieren",
    // "Question order"
    questionOrder: "Reihenfolge der Fragen auf der Seite",
    // "Time limit to complete the survey"
    timeLimit: "Maximale Zeit, um die Umfrage zu beenden",
    // "Time limit to complete one page"
    timeLimitPerPage: "Maximale Zeit, um eine Seite der Umfrage zu beenden",
    // [Auto-translated] "Use a timer"
    showTimer: "Verwenden eines Timers",
    // "Timer alignment"
    timerLocation: "Position des Timers",
    // "Timer mode"
    timerInfoMode: "Modus des Timers",
    // "Panel display mode"
    renderMode: "Anzeigemodus",
    // "Enable entry addition"
    allowAddPanel: "Hinzufügen eines Panels erlauben",
    // "Enable entry removal"
    allowRemovePanel: "Entfernen eines Panels erlauben",
    // "\"Add Entry\" button text"
    addPanelText: "Text für die Schaltfläche \"Panel hinzufügen\"",
    // "\"Remove Entry\" button text"
    removePanelText: "Text für die Schaltfläche \"Panel entfernen\"",
    // "Show all elements on one page"
    isSinglePage: "Alle Elemente auf einer Seite anzeigen",
    // "HTML markup"
    html: "HTML",
    // "Answer"
    setValue: "Antwort",
    // "Storage format"
    dataFormat: "Bildformat",
    // "Enable row addition"
    allowAddRows: "Hinzufügen von Zeilen zulassen",
    // "Enable row removal"
    allowRemoveRows: "Entfernen von Zeilen zulassen",
    // "Enable row reordering"
    allowRowReorder: "Verschieben von Zeilen zulassen",
    // "Does not apply if you specify the exact display area width or height."
    responsiveImageSizeHelp: "Gilt nicht, wenn Sie die genaue Bildbreite oder -höhe angeben.",
    // "Minimum display area width"
    minImageWidth: "Minimale Bildbreite",
    // "Maximum display area width"
    maxImageWidth: "Maximale Bildbreite",
    // "Minimum display area height"
    minImageHeight: "Minimale Bildhöhe",
    // "Maximum display area height"
    maxImageHeight: "Maximale Bildhöhe",
    // "Minimum value"
    minValue: "Minimaler Wert",
    // "Maximum value"
    maxValue: "Maximaler Wert",
    // [Auto-translated] "Case insensitive"
    caseInsensitive: "Schreibungsunabhängig",
    // "Minimum length (in characters)"
    minLength: "Minimale Länge",
    // "Allow digits"
    allowDigits: "Ziffern erlaubt",
    // "Minimum count"
    minCount: "Minimale Anzahl",
    // "Maximum count"
    maxCount: "Maximale Anzahl",
    // "Regular expression"
    regex: "Regulärer Ausdruck",
    surveyvalidator: {
      // [Auto-translated] "Validation message"
      text: "Validierungsmeldung",
      // [Auto-translated] "Validation expression"
      expression: "Validierungs-Ausdruck",
      // [Auto-translated] "Notification type"
      notificationType: "Art der Meldung",
      // [Auto-translated] "Maximum length (in characters)"
      maxLength: "Maximale Länge (in Zeichen)"
    },
    // "Total row header"
    totalText: "Text (total)",
    // "Aggregation method"
    totalType: "Typ (total)",
    // "Total value expression"
    totalExpression: "Ausdruck (total)",
    // "Total value display format"
    totalDisplayStyle: "Anzeigestil (total)",
    // "Currency"
    totalCurrency: "Währung (total)",
    // "Formatted string"
    totalFormat: "Format (total)",
    // "Survey logo"
    logo: "Logo (URL oder base64-codierte Zeichenfolge)",
    // "Survey layout"
    questionsOnPageMode: "Umfrage Struktur",
    // "Restrict answer length"
    maxTextLength: "Maximale Antwortlänge (in Zeichen)",
    // "Restrict comment length"
    maxCommentLength: "Maximale Kommentarlänge (in Zeichen)",
    // [Auto-translated] "Comment area height (in lines)"
    commentAreaRows: "Höhe des Kommentarbereichs (in Zeilen)",
    // "Auto-expand text areas"
    autoGrowComment: "Kommentarbereich bei Bedarf automatisch erweitern",
    // [Auto-translated] "Allow users to resize text areas"
    allowResizeComment: "Benutzern erlauben, die Größe von Textbereichen zu ändern",
    // "Update input field values"
    textUpdateMode: "Wert der Textfrage aktualisieren",
    // [Auto-translated] "Input mask type"
    maskType: "Typ der Eingabemaske",
    // "Set focus on the first invalid answer"
    autoFocusFirstError: "Fokus auf die erste ungültige Antwort setzen",
    // "Run validation"
    checkErrorsMode: "Validierung ausführen",
    // [Auto-translated] "Validate empty fields on lost focus"
    validateVisitedEmptyFields: "Validieren leerer Felder bei verlorenem Fokus",
    // "Redirect to an external link after submission"
    navigateToUrl: "Zur externen URL umleiten",
    // "Dynamic external link"
    navigateToUrlOnCondition: "Dynamische URL",
    // "Markup to show if the user already filled out this survey"
    completedBeforeHtml: "Markup, um anzuzeigen, ob der Benutzer diese Umfrage bereits ausgefüllt hat",
    // "\"Thank You\" page markup"
    completedHtml: "Markup der Seite \"Umfrage abgeschlossen\".",
    // "Dynamic \"Thank You\" page markup"
    completedHtmlOnCondition: "Dynamisches Markup der Seite \"Umfrage abgeschlossen\".",
    // "Markup to show while survey model is loading"
    loadingHtml: "Markup, das angezeigt werden soll, während die Umfrage geladen wird",
    // "Comment area text"
    commentText: "Text im Kommentarbereich",
    // "Autocomplete type"
    autocomplete: "Autocomplete-Typ",
    // "Label for \"True\""
    labelTrue: "Bezeichner \"Wahr\".",
    // "Label for \"False\""
    labelFalse: "Bezeichner \"Falsch\"",
    // "Show the Clear button"
    allowClear: "Überschrift der Auswahlmöglichkeiten anzeigen",
    // [Auto-translated] "Search Mode"
    searchMode: "Suchmodus",
    // "Display format"
    displayStyle: "Wertanzeigestil",
    // "Formatted string"
    format: "Formatierte Zeichenfolge",
    // "Maximum fractional digits"
    maximumFractionDigits: "Maximale Nachkommastellen",
    // "Minimum fractional digits"
    minimumFractionDigits: "Minimale Nachkommastellen",
    // "Display grouping separators"
    useGrouping: "Gruppierungstrennzeichen anzeigen",
    // "Enable multiple file upload"
    allowMultiple: "Mehrere Dateien zulassen",
    // "Preview uploaded images"
    allowImagesPreview: "Vorschaubilder",
    // "Accepted file types"
    acceptedTypes: "Akzeptierte Dateitypen",
    // "Wait for upload to complete"
    waitForUpload: "Warten bis der Upload abgeschlossen ist",
    // "Confirm file deletion"
    needConfirmRemoveFile: "Löschen der Datei bestätigen",
    // "Row details alignment"
    detailPanelMode: "Position des Detailbereichs",
    // "Minimum row count"
    minRowCount: "Mindestzeilenanzahl",
    // "Maximum row count"
    maxRowCount: "Maximale Zeilenanzahl",
    // "Confirm row removal"
    confirmDelete: "Zeilenlöschung bestätigen",
    // "Confirmation message"
    confirmDeleteText: "Bestätigungsmeldung",
    // "Initial number of entries"
    panelCount: "Anfängliche Panel-Anzahl",
    // "Minimum number of entries"
    minPanelCount: "Minimale Panelanzahl",
    // "Maximum number of entries"
    maxPanelCount: "Maximale Panelanzahl",
    // "Initial entry state"
    panelsState: "Erweiterungszustand des inneren Bereichs",
    // "\"Previous Entry\" button text"
    prevPanelText: "Text für die Schaltfläche \"Vorheriges Panel\".",
    // "\"Next Entry\" button text"
    nextPanelText: "Text für die Schaltfläche \"Nächstes Panel\".",
    // [Auto-translated] "\"Remove Entry\" button alignment"
    removePanelButtonLocation: "Ausrichtung der Schaltfläche \"Eintrag entfernen\"",
    // [Auto-translated] "Hide the question if it has no rows"
    hideIfRowsEmpty: "Blenden Sie die Frage aus, wenn sie keine Zeilen enthält",
    // [Auto-translated] "Hide columns if there are no rows"
    hideColumnsIfEmpty: "Spalten ausblenden, wenn keine Zeilen vorhanden sind",
    // [Auto-translated] "Custom rating values"
    rateValues: "Benutzerdefinierte Bewertungswerte",
    // "Rating count"
    rateCount: "Anzahl der Bewertung",
    // [Auto-translated] "Rating configuration"
    autoGenerate: "Konfiguration der Bewertung",
    slider: {
      // [Auto-translated] "Min value"
      min: "Min. Wert",
      // [Auto-translated] "Max value"
      max: "Maximaler Wert",
      // [Auto-translated] "Step value"
      step: "Schritt-Wert",
      // [Auto-translated] "Show scale labels"
      showLabels: "Anzeigen von Skalenbeschriftungen",
      // [Auto-translated] "Show tooltips"
      tooltipVisibility: "Tooltips anzeigen",
      // [Auto-translated] "Allow thumb crossing"
      allowSwap: "Daumen kreuzen erlauben",
      // [Auto-translated] "Number of auto-generated labels"
      labelCount: "Anzahl der automatisch generierten Beschriftungen",
      // [Auto-translated] "Min value expression"
      minValueExpression: "Min-Wert-Ausdruck",
      // [Auto-translated] "Max value expression"
      maxValueExpression: "Ausdruck des Max. Werts",
      // [Auto-translated] "Scale labels configuration"
      autoGenerate: "Konfiguration von Skalenbeschriftungen",
      // [Auto-translated] "Slider type"
      sliderType: "Typ des Schiebereglers",
      // [Auto-translated] "Min range length"
      minRangeLength: "Länge des Min. Bereichs",
      // [Auto-translated] "Max range length"
      maxRangeLength: "Maximale Reichweitenlänge",
      // [Auto-translated] "Custom labels"
      customLabels: "Benutzerdefinierte Etiketten",
      // [Auto-translated] "Label format"
      labelFormat: "Format der Beschriftung",
      // [Auto-translated] "Tooltip format"
      tooltipFormat: "Tooltip-Format"
    },
    file: {
      // [Auto-translated] "Image height"
      imageHeight: "Bildhöhe",
      // [Auto-translated] "Image width"
      imageWidth: "Breite des Bildes"
    },
    // [Auto-translated] "Hide the question if it has no choices"
    hideIfChoicesEmpty: "Verstecken Sie die Frage, wenn es keine Wahlmöglichkeiten hat",
    // "Minimum width"
    minWidth: "Minimale Breite",
    // "Maximum width"
    maxWidth: "Maximale Breite",
    // "Width"
    width: "Breite ",
    // [Auto-translated] "Show column headers"
    showHeader: "Spaltenüberschriften anzeigen",
    // [Auto-translated] "Show horizontal scrollbar"
    horizontalScroll: "Horizontaler Scrollbar anzeigen",
    // [Auto-translated] "Minimum column width"
    columnMinWidth: "Minimale Spaltenbreite",
    // [Auto-translated] "Row header width"
    rowTitleWidth: "Breite der Zeilenüberschrift",
    // "Value to store when \"True\" is selected"
    valueTrue: "Zu speichender Wert wenn \"Wahr\" ausgewählt wird",
    // "Value to store when \"False\" is selected"
    valueFalse: "Zu speichender Wert wenn \"Falsch\" ausgewählt wird",
    // "\"Value is below minimum\" error message"
    minErrorText: "Fehlermeldung \"Wert liegt unter dem Mindestwert\"",
    // "\"Value exceeds maximum\" error message"
    maxErrorText: "Fehlermeldung \"Wert überschreitet das Maximum\"",
    // "\"Empty comment\" error message"
    otherErrorText: "Fehlermeldung \"Leerer Kommentar\"",
    // "Error message for duplicate responses"
    keyDuplicationError: "Fehlermeldung bei doppelter Beantwortung",
    // [Auto-translated] "Minimum choices to select"
    minSelectedChoices: "Minimale Auswahlmöglichkeiten",
    // [Auto-translated] "Maximum choices to select"
    maxSelectedChoices: "Maximale Auswahlmöglichkeiten",
    // [Auto-translated] "Logo width"
    logoWidth: "Breite des Logos",
    // [Auto-translated] "Logo height"
    logoHeight: "Höhe des Logos",
    // "Read-only"
    readOnly: "Schreibgeschützt",
    // [Auto-translated] "Disable the read-only mode if"
    enableIf: "Deaktivieren Sie den schreibgeschützten Modus, wenn",
    // "\"No rows\" message"
    noRowsText: "Meldung \"Keine Zeilen\"",
    // "Separate special choices"
    separateSpecialChoices: "Spezielle Auswahlmöglichkeiten separieren",
    // [Auto-translated] "Copy choices from the following question"
    choicesFromQuestion: "Auswahlmöglichkeiten aus folgender Frage kopieren",
    // [Auto-translated] "Which choice options to copy"
    choicesFromQuestionMode: "Welche Auswahlmöglichkeiten sollen kopiert werden?",
    // [Auto-translated] "Use values from the following matrix column or panel question as choice IDs"
    choiceValuesFromQuestion: "Verwenden Sie Werte aus der folgenden Matrixspalte oder Bereichsfrage als Auswahl-IDs",
    // [Auto-translated] "Use values from the following matrix column or panel question as choice texts"
    choiceTextsFromQuestion: "Verwenden Sie Werte aus der folgenden Matrixspalte oder Panelfrage als Auswahltexte",
    // [Auto-translated] "Display page titles in the progress bar"
    progressBarShowPageTitles: "Seitentitel in der Fortschrittsleiste anzeigen",
    // [Auto-translated] "Display page numbers in the progress bar"
    progressBarShowPageNumbers: "Seitenzahlen in der Fortschrittsleiste anzeigen",
    // [Auto-translated] "Add a comment box"
    showCommentArea: "Hinzufügen eines Kommentarfelds",
    // [Auto-translated] "Placeholder text for the comment box"
    commentPlaceholder: "Platzhaltertext für das Kommentarfeld",
    // "Show the labels as extreme values"
    displayRateDescriptionsAsExtremeItems: "Beschreibung für minimale und maximale Bewertung als Werte anzeigen",
    // [Auto-translated] "Row order"
    rowOrder: "Reihenfolge der Zeilen",
    // [Auto-translated] "Column layout"
    columnsLayout: "Spalten-Layout",
    // [Auto-translated] "Nested column count"
    columnColCount: "Anzahl der geschachtelten Spalten",
    // [Auto-translated] "Correct Answer"
    correctAnswer: "Richtige Antwort",
    // [Auto-translated] "Default Values"
    defaultPanelValue: "Standardwerte",
    // [Auto-translated] "Cell Texts"
    cells: "Zellentexte",
    // [Auto-translated] "Select a file or paste a file link..."
    fileInputPlaceholder: "Wählen Sie eine Datei aus oder fügen Sie einen Dateilink ein...",
    // "Prevent duplicate responses in the following column"
    keyName: "Spalte \"Schlüssel\"",
    itemvalue: {
      // [Auto-translated] "Make the option visible if"
      visibleIf: "Option sichtbar machen, wenn",
      // [Auto-translated] "Make the option selectable if"
      enableIf: "Option auswählbar machen, wenn"
    },
    "itemvalue@rows": {
      // [Auto-translated] "Make the row visible if"
      visibleIf: "Zeile sichtbar machen, wenn",
      // [Auto-translated] "Make the row editable if"
      enableIf: "Zeile bearbeitbar machen, wenn"
    },
    imageitemvalue: {
      // "Alt text"
      text: "Alt-Text"
    },
    // "Logo alignment"
    logoPosition: "Logoposition",
    // "Add logo..."
    addLogo: "Logo hinzufügen ...",
    // "Change logo..."
    changeLogo: "Logo bearbeiten ...",
    logoPositions: {
      // "Remove logo"
      none: "ausblenden",
      // "Left"
      left: "links",
      // "Right"
      right: "rechts",
      // "On the top"
      top: "oben",
      // "In the bottom"
      bottom: "unten"
    },
    // [Auto-translated] "Preview mode"
    previewMode: "Vorschau-Modus",
    // [Auto-translated] "Enable grid layout"
    gridLayoutEnabled: "Aktivieren des Rasterlayouts",
    // [Auto-translated] "Grid columns"
    gridLayoutColumns: "Spalten des Rasters",
    // [Auto-translated] "Mask settings"
    maskSettings: "Masken-Einstellungen",
    // [Auto-translated] "Row details error message alignment"
    detailErrorLocation: "Ausrichtung der Fehlermeldung \"Zeilendetails\"",
    // Creator tabs
    tabs: {
      panel: {
        // [Auto-translated] "Panel Layout"
        layout: "Panel-Layout"
      },
      // "General"
      general: "Allgemein",
      // "Options"
      fileOptions: "Optionen",
      // "HTML Editor"
      html: "Html-Editor",
      // "Columns"
      columns: "Spalten",
      // "Rows"
      rows: "Zeilen",
      // "Choice Options"
      choices: "Auswahlmöglichkeiten",
      // "Items"
      items: "Elemente",
      // "Visible If"
      visibleIf: "Sichtbar wenn ...",
      // "Editable If"
      enableIf: "Aktiviert wenn ...",
      // "Required If"
      requiredIf: "Erforderlich wenn ...",
      // "Rating Values"
      rateValues: "Bewertungsskala",
      // [Auto-translated] "Slider Settings"
      sliderSettings: "Schieberegler-Einstellungen",
      // "Choices from a Web Service"
      choicesByUrl: "Auswahlmöglichkeiten aus dem Internet",
      // "Default Choices"
      matrixChoices: "Standardauswahl",
      // "Text Inputs"
      multipleTextItems: "Texteingabe",
      // "Numbering"
      numbering: "Nummerierung",
      // "Validators"
      validators: "Überprüfung",
      // "Navigation"
      navigation: "Navigation",
      // "Question Settings"
      question: "Fragen",
      // "Pages"
      pages: "Seiten",
      // "Quiz Mode"
      timer: "Timer",
      // "Calculated Values"
      calculatedValues: "Berechnete Werte",
      // "Triggers"
      triggers: "Auslöser",
      // "Title template"
      templateTitle: "Titeltemplate",
      // "Totals"
      totals: "Summen",
      // "Conditions"
      logic: "Logik",
      // [Auto-translated] "Input Mask Settings"
      mask: "Einstellungen für die Eingabemaske",
      layout: {
        // [Auto-translated] "Panel Layout"
        panel: "Panel-Layout",
        // [Auto-translated] "Layout"
        question: "Layout",
        // [Auto-translated] "Layout"
        base: "Layout"
      },
      // "Data"
      data: "Daten",
      // "Validation"
      validation: "Validierung",
      // "Individual Cell Texts"
      cells: "Zellen",
      // "\"Thank You\" Page"
      showOnCompleted: "Abschluss",
      // "Logo in the Survey Header"
      logo: "Logo im Umfragetitel",
      // "Slider"
      slider: "Slider",
      // "Expression"
      expression: "Ausdruck",
      // [Auto-translated] "Question Settings"
      questionSettings: "Einstellungen für Fragen",
      // "Header"
      header: "Titelzeile",
      // "Background"
      background: "Hintergrund",
      // "Appearance"
      appearance: "Erscheinungsbild",
      // [Auto-translated] "Accent colors"
      accentColors: "Akzentfarben",
      // [Auto-translated] "Surface background"
      surfaceBackground: "Oberflächenhintergrund",
      // [Auto-translated] "Scaling"
      scaling: "Skalierung",
      // "Others"
      others: "Weiteres"
    },
    // "Edit property '{0}'"
    editProperty: "Eigenschaft bearbeiten '{0}'",
    // "Items"
    items: "Eiträge",
    // "Make choices visible if"
    choicesVisibleIf: "Auswahl sichtbar machen, wenn",
    // "Make choices selectable if"
    choicesEnableIf: "Auswahl wählbar machen, wenn",
    // "Make columns visible if"
    columnsEnableIf: "Spalten sichtbar machen, wenn",
    // "Make rows visible if"
    rowsEnableIf: "Zeilen sichtbar machen, wenn",
    // "Increase the inner indent"
    innerIndent: "Inneren Einzug vergrößern",
    // [Auto-translated] "Use answers from the last entry as default"
    copyDefaultValueFromLastEntry: "Antworten aus dem letzten Eintrag als Standard verwenden",
    // "Please enter a value."
    enterNewValue: "Bitte einen Wert eingeben.",
    // "There are no questions in the survey."
    noquestions: "Die Umfrage enthält keine Fragen.",
    // "Please create a trigger"
    createtrigger: "Bitte einen Auslöser eingeben.",
    // "Press enter button to edit"
    titleKeyboardAdornerTip: "Drücken Sie ENTER, um bearbeiten zu können",
    // "Press enter button to edit item, press delete button to delete item, press alt plus arrow up or arrow down to move item"
    keyboardAdornerTip: "Drücken Sie ENTER, um das Element zu bearbeiten, ENTFERNEN, um das Element zu entfernen, STRG + PFEIL NACH OBEN/UNTEN, um das Element zu verschieben",
    // "On "
    triggerOn: "Ein",
    // "Make pages visible"
    triggerMakePagesVisible: "Seiten sichtbar machen:",
    // "Make elements visible"
    triggerMakeQuestionsVisible: "Elemente sichtbar machen:",
    // "Complete the survey if successful."
    triggerCompleteText: "Bei Erfolg die Umfrage abschließen.",
    // "The trigger is not set"
    triggerNotSet: "Der Auslöser ist nicht gesetzt",
    // "Run if"
    triggerRunIf: "Ausführen wenn ...",
    // "Change value of: "
    triggerSetToName: "Wert ändern von: ",
    // "Copy value from: "
    triggerFromName: "Wert kopieren von: ",
    // "Run this Expression"
    triggerRunExpression: "Diesen Ausdruck ausführen:",
    // "to: "
    triggerSetValue: "nach: ",
    // "Go to the question"
    triggerGotoName: "Zu Frage:",
    // "Do not put the variable into the survey result."
    triggerIsVariable: "Die Variable nicht in das Umfrageergebnis setzen.",
    // "Please enter a valid expression"
    triggerRunExpressionEmpty: "Bitte geben Sie einen gültigen Ausdruck ein",
    // "Type expression here..."
    emptyExpressionPlaceHolder: "Ausdruck hier eingeben ...",
    // "No file chosen"
    noFile: "Keine Datei ausgewählt",
    // "Clear hidden question values"
    clearIfInvisible: "Wert löschen, wenn die Frage ausgeblendet wird",
    // "Store values in the following property"
    valuePropertyName: "Werte in dieser Eigenschaft speichern",
    // "Enable search-as-you-type"
    searchEnabled: "Suche aktivieren",
    // "Hide selected items"
    hideSelectedItems: "Ausgewählte Elemente ausblenden",
    // [Auto-translated] "Collapse the dropdown upon selection"
    closeOnSelect: "Dropdown-Menü bei Auswahl einklappen",
    // "Vertical alignment within cells"
    verticalAlign: "Vertikale Ausrichtung",
    // "Alternate row colors"
    alternateRows: "Zeilen wechseln",
    // "Make columns visible if"
    columnsVisibleIf: "Spalten sichtbar machen, wenn",
    // "Make rows visible if"
    rowsVisibleIf: "Zeilen sichtbar machen, wenn",
    // "Placeholder text for the comment box"
    otherPlaceholder: "Platzhaltertext für den Kommentarbereich",
    // [Auto-translated] "Placeholder text for Local file"
    filePlaceholder: "Platzhaltertext für lokale Datei",
    // [Auto-translated] "Placeholder text for Camera"
    photoPlaceholder: "Platzhaltertext für Kamera",
    // [Auto-translated] "Placeholder text for Local file or Camera"
    fileOrPhotoPlaceholder: "Platzhaltertext für Lokale Datei oder Kamera",
    // "Rating icon"
    rateType: "Bewertungssymbol",
    // [Auto-translated] "Ex.: https://api.example.com/books"
    url_placeholder: "Bsp.: https://api.example.com/books",
    // [Auto-translated] "Ex.: categories.fiction"
    path_placeholder: "Bsp.: categories.fiction",
    // [Auto-translated] "Ex.: a)"
    questionStartIndex_placeholder: "Bsp.: a)",
    // [Auto-translated] "Ex.: 6in"
    width_placeholder: "Bsp.: 6in",
    // [Auto-translated] "Ex.: 600px"
    minWidth_placeholder: "Bsp.: 600px",
    // [Auto-translated] "Ex.: 50%"
    maxWidth_placeholder: "Bsp.: 50%",
    // "auto"
    imageHeight_placeholder: "auto",
    // "auto"
    imageWidth_placeholder: "auto",
    // [Auto-translated] "Ex.: 100px"
    itemTitleWidth_placeholder: "Beispiel: 100px",
    theme: {
      // [Auto-translated] "Theme"
      themeName: "Thema",
      // [Auto-translated] "Question appearance"
      isPanelless: "Aussehen der Frage",
      // [Auto-translated] "Background and corner radius"
      editorPanel: "Hintergrund und Eckenradius",
      // [Auto-translated] "Background and corner radius"
      questionPanel: "Hintergrund und Eckenradius",
      // [Auto-translated] "Accent color"
      primaryColor: "Akzentfarbe",
      // [Auto-translated] "Panel and question box opacity"
      panelBackgroundTransparency: "Deckkraft des Panels und des Fragefelds",
      // [Auto-translated] "Input element opacity"
      questionBackgroundTransparency: "Deckkraft des Eingabeelements",
      // [Auto-translated] "Survey font size"
      fontSize: "Schriftgröße der Umfrage",
      // [Auto-translated] "Survey scale factor"
      scale: "Skalierungsfaktor der Umfrage",
      // [Auto-translated] "Corner radius"
      cornerRadius: "Ecken-Radius",
      // [Auto-translated] "Advanced mode"
      advancedMode: "Erweiterter Modus",
      // [Auto-translated] "Title font"
      pageTitle: "Schriftart des Titels",
      // [Auto-translated] "Description font"
      pageDescription: "Beschreibung Schriftart",
      // [Auto-translated] "Title font"
      questionTitle: "Schriftart des Titels",
      // [Auto-translated] "Description font"
      questionDescription: "Beschreibung Schriftart",
      // [Auto-translated] "Font"
      editorFont: "Schriftart",
      // [Auto-translated] "Opacity"
      backgroundOpacity: "Undurchsichtigkeit", // Auto-generated string
      // [Auto-translated] "Survey font family"
      "--sjs-font-family": "Survey-Schriftfamilie",
      // [Auto-translated] "Background color"
      "--sjs-general-backcolor-dim": "Hintergrundfarbe",
      // [Auto-translated] "Accent background colors"
      "--sjs-primary-backcolor": "Hintergrundfarben für Akzente",
      // [Auto-translated] "Accent foreground colors"
      "--sjs-primary-forecolor": "Akzentfarben im Vordergrund setzen",
      // [Auto-translated] "Error message colors"
      "--sjs-special-red": "Farben der Fehlermeldung",
      // [Auto-translated] "Shadow effects"
      "--sjs-shadow-small": "Schatten-Effekte",
      // [Auto-translated] "Shadow effects"
      "--sjs-shadow-inner": "Schatten-Effekte",
      // [Auto-translated] "Colors"
      "--sjs-border-default": "Farben"
    },
    "header@header": {
      // [Auto-translated] "View"
      headerView: "Ansehen",
      // [Auto-translated] "Logo alignment"
      logoPosition: "Ausrichtung des Logos",
      // [Auto-translated] "Survey title font"
      surveyTitle: "Schriftart des Umfragetitels",
      // [Auto-translated] "Survey description font"
      surveyDescription: "Schriftart der Umfragebeschreibung",
      // [Auto-translated] "Survey title font"
      headerTitle: "Schriftart des Umfragetitels",
      // [Auto-translated] "Survey description font"
      headerDescription: "Schriftart der Umfragebeschreibung",
      // [Auto-translated] "Content area width"
      inheritWidthFrom: "Breite des Inhaltsbereichs",
      // [Auto-translated] "Text width"
      textAreaWidth: "Textbreite",
      // [Auto-translated] "Background color"
      backgroundColorSwitch: "Hintergrundfarbe",
      // [Auto-translated] "Background image"
      backgroundImage: "Hintergrundbild",
      // [Auto-translated] "Opacity"
      backgroundImageOpacity: "Undurchsichtigkeit",
      // [Auto-translated] "Overlap"
      overlapEnabled: "Überlappung",
      // [Auto-translated] "Logo alignment"
      logoPositionX: "Ausrichtung des Logos",
      // [Auto-translated] "Survey title alignment"
      titlePositionX: "Ausrichtung des Umfragetitels",
      // [Auto-translated] "Survey description alignment"
      descriptionPositionX: "Ausrichtung der Vermessungsbeschreibung"
    }
  },
  // Property values
  pv: {
    // "true"
    "true": "wahr",
    // "false"
    "false": "falsch",
    // [Auto-translated] "Local file"
    file: "Lokale Datei",
    // [Auto-translated] "Camera"
    camera: "Kamera",
    // [Auto-translated] "Local file or Camera"
    "file-camera": "Lokale Datei oder Kamera",
    // "Inherit"
    inherit: "vererbt",
    // "Visible"
    show: "anzeigen",
    // "Hidden"
    hide: "verstecken",
    // "Inherit"
    default: "Standard",
    // "Initial"
    initial: "initial",
    // "Random"
    random: "zufällig",
    // "Collapsed"
    collapsed: "eingeklappt",
    // "Expanded"
    expanded: "ausgeklappt",
    // "None"
    none: "/",
    // "Ascending"
    asc: "aufsteigend",
    // "Descending"
    desc: "absteigend",
    // "Indeterminate"
    indeterminate: "unentschieden",
    // [Auto-translated] "Selected"
    selected: "Ausgewählt",
    // [Auto-translated] "Unselected"
    unselected: "Deaktiviert",
    // "decimal"
    decimal: "Dezimal",
    // "currency"
    currency: "Währung",
    // "percent"
    percent: "Prozent",
    // "First panel is expanded"
    firstExpanded: "ausgeklappt (erstes Element)",
    // "Hide question numbers"
    off: "aus",
    // "List"
    list: "Liste",
    // [Auto-translated] "Carousel"
    carousel: "Karussell",
    // [Auto-translated] "Tabs"
    tab: "Tabulatoren",
    // "Panel navigator + Progress bar at the top"
    progressTop: "oben (Fortschritt)",
    // "Panel navigator + Progress bar at the bottom"
    progressBottom: "unten (Fortschritt)",
    // "Panel navigator + Progress bar at the top and bottom"
    progressTopBottom: "oben und unten (Fortschritt)",
    // "Horizontal"
    horizontal: "horizontal",
    // "Vertical"
    vertical: "vertikal",
    // "Top"
    top: "oben",
    // "Bottom"
    bottom: "unten",
    // "Top and bottom"
    topBottom: "oben und unten",
    // "Both"
    both: "beides",
    // "Left"
    left: "links",
    // "Right"
    right: "rechts",
    // [Auto-translated] "Center"
    center: "Mitte",
    // [Auto-translated] "Left and right"
    leftRight: "Links und rechts",
    // [Auto-translated] "Middle"
    middle: "Mitte",
    // "color"
    color: "Farbe",
    // "date"
    date: "Datum",
    // "datetime"
    datetime: "Datum/Uhrzeit",
    // "datetime-local"
    "datetime-local": "Datum/Uhrzeit (Lokal)",
    // "email"
    email: "E-Mail",
    // "month"
    month: "Monat",
    // "number"
    number: "Nummer",
    // "password"
    password: "Passwort",
    // "range"
    range: "Bereich",
    // "tel"
    tel: "Telefon",
    // "text"
    text: "Text",
    // "time"
    time: "Uhrzeit",
    // "url"
    url: "URL",
    // "week"
    week: "Woche",
    // "Hidden"
    hidden: "versteckt",
    // "Editable"
    edit: "Bearbeiten",
    // "Read-only"
    display: "Anzeigen",
    // [Auto-translated] "Contain"
    contain: "Enthalten",
    // [Auto-translated] "Cover"
    cover: "Deckel",
    // [Auto-translated] "Fill"
    fill: "Füllen",
    // [Auto-translated] "Next"
    next: "Nächster",
    // [Auto-translated] "Last"
    last: "Letzte",
    // "Upon survey completion"
    onComplete: "Wenn die Umfrage abgeschlossen wird",
    // "When question gets hidden"
    onHidden: "Wenn die Umfrage versteckt wird",
    // "When question or its panel/page gets hidden"
    onHiddenContainer: "Wenn die Frage oder deren Panel/Seite versteckt wird",
    clearInvisibleValues: {
      // "Never"
      none: "Nie"
    },
    clearIfInvisible: {
      // [Auto-translated] "Never"
      none: "Nie"
    },
    // [Auto-translated] "Radio Buttons"
    radio: "Optionsfelder",
    inputType: {
      // "Color"
      color: "Farbe",
      // "Date"
      date: "Datum",
      // [Auto-translated] "Date and Time"
      "datetime-local": "Datum und Uhrzeit",
      // "Email"
      email: "E-Mail",
      // "Month"
      month: "Monat",
      // "Number"
      number: "Zahl",
      // "Password"
      password: "Passwort",
      // [Auto-translated] "Range"
      range: "Bereich",
      // "Phone Number"
      tel: "Telefonnummer",
      // "Text"
      text: "Text",
      // "Time"
      time: "Zeit",
      // [Auto-translated] "URL"
      url: "Web-URL",
      // [Auto-translated] "Week"
      week: "Woche"
    },
    sliderType: {
      // [Auto-translated] "Single-Value"
      single: "Einzelwertig",
      // [Auto-translated] "Range"
      range: "Bereich"
    },
    tooltipVisibility: {
      // [Auto-translated] "Auto"
      auto: "Auto",
      // [Auto-translated] "Always"
      always: "Immer",
      // [Auto-translated] "Never"
      never: "Nie"
    },
    notificationType: {
      // [Auto-translated] "Error"
      error: "Fehler",
      // [Auto-translated] "Warning"
      warning: "Warnung",
      // [Auto-translated] "Informational"
      info: "Mitteilsam"
    },
    autocomplete: {
      // [Auto-translated] "Full Name"
      name: "Vollständiger Name",
      // [Auto-translated] "Prefix"
      "honorific-prefix": "Präfix",
      // [Auto-translated] "First Name"
      "given-name": "Vorname",
      // [Auto-translated] "Middle Name"
      "additional-name": "Zweitname",
      // [Auto-translated] "Last Name"
      "family-name": "Nachname",
      // [Auto-translated] "Suffix"
      "honorific-suffix": "Nachsilbe",
      // [Auto-translated] "Nickname"
      nickname: "Spitzname",
      // [Auto-translated] "Job Title"
      "organization-title": "Berufsbezeichnung",
      // [Auto-translated] "User Name"
      username: "Benutzername",
      // [Auto-translated] "New Password"
      "new-password": "Neues Passwort",
      // [Auto-translated] "Current Password"
      "current-password": "Aktuelles Passwort",
      // [Auto-translated] "Organization Name"
      organization: "Name der Organisation",
      // [Auto-translated] "Full Street Address"
      "street-address": "Vollständige Adresse",
      // [Auto-translated] "Address Line 1"
      "address-line1": "Adresszeile 1",
      // [Auto-translated] "Address Line 2"
      "address-line2": "Adresszeile 2",
      // [Auto-translated] "Address Line 3"
      "address-line3": "Adresszeile 3",
      // [Auto-translated] "Level 4 Address"
      "address-level4": "Adresse der Ebene 4",
      // [Auto-translated] "Level 3 Address"
      "address-level3": "Level 3 Adresse",
      // [Auto-translated] "Level 2 Address"
      "address-level2": "Level 2 Adresse",
      // [Auto-translated] "Level 1 Address"
      "address-level1": "Adresse der Ebene 1",
      // [Auto-translated] "Country Code"
      country: "Landescode",
      // [Auto-translated] "Country Name"
      "country-name": "Ländername",
      // [Auto-translated] "Postal Code"
      "postal-code": "Postleitzahl",
      // [Auto-translated] "Cardholder Name"
      "cc-name": "Name des Karteninhabers",
      // [Auto-translated] "Cardholder First Name"
      "cc-given-name": "Vorname des Karteninhabers",
      // [Auto-translated] "Cardholder Middle Name"
      "cc-additional-name": "Zweiter Vorname des Karteninhabers",
      // [Auto-translated] "Cardholder Last Name"
      "cc-family-name": "Nachname des Karteninhabers",
      // [Auto-translated] "Credit Card Number"
      "cc-number": "Kreditkartennummer",
      // [Auto-translated] "Expiration Date"
      "cc-exp": "Verfallsdatum",
      // [Auto-translated] "Expiration Month"
      "cc-exp-month": "Ablauf-Monat",
      // [Auto-translated] "Expiration Year"
      "cc-exp-year": "Verfallsjahr",
      // [Auto-translated] "Card Security Code"
      "cc-csc": "Sicherheitscode der Karte",
      // [Auto-translated] "Credit Card Type"
      "cc-type": "Art der Kreditkarte",
      // [Auto-translated] "Transaction Currency"
      "transaction-currency": "Transaktionswährung",
      // [Auto-translated] "Transaction Amount"
      "transaction-amount": "Betrag der Transaktion",
      // [Auto-translated] "Preferred Language"
      language: "Bevorzugte Sprache",
      // [Auto-translated] "Birthday"
      bday: "Geburtstag",
      // [Auto-translated] "Birthday Day"
      "bday-day": "Geburtstagstag",
      // [Auto-translated] "Birthday Month"
      "bday-month": "Geburtstagsmonat",
      // [Auto-translated] "Birthday Year"
      "bday-year": "Geburtstagsjahr",
      // [Auto-translated] "Gender"
      sex: "Geschlecht",
      // [Auto-translated] "Website URL"
      url: "Website URL",
      // [Auto-translated] "Profile Photo"
      photo: "Profilfoto",
      // [Auto-translated] "Telephone Number"
      tel: "Telefonnummer",
      // [Auto-translated] "Country Code for Phone"
      "tel-country-code": "Landesvorwahl für Telefon",
      // [Auto-translated] "National Telephone Number"
      "tel-national": "Nationale Telefonnummer",
      // [Auto-translated] "Area Code"
      "tel-area-code": "Vorwahl",
      // [Auto-translated] "Local Phone Number"
      "tel-local": "Lokale Telefonnummer",
      // [Auto-translated] "Local Phone Prefix"
      "tel-local-prefix": "Lokale Telefonvorwahl",
      // [Auto-translated] "Local Phone Suffix"
      "tel-local-suffix": "Suffix für lokale Telefone",
      // [Auto-translated] "Phone Extension"
      "tel-extension": "Telefon-Durchwahl",
      // [Auto-translated] "Email Address"
      email: "E-Mail-Adresse",
      // [Auto-translated] "Instant Messaging Protocol"
      impp: "Instant-Messaging-Protokoll"
    },
    maskType: {
      // [Auto-translated] "None"
      none: "Nichts",
      // [Auto-translated] "Pattern"
      pattern: "Muster",
      // [Auto-translated] "Numeric"
      numeric: "Numerisch",
      // [Auto-translated] "Date and Time"
      datetime: "Datum und Uhrzeit",
      // [Auto-translated] "Currency"
      currency: "Währung"
    },
    inputTextAlignment: {
      // [Auto-translated] "Auto"
      auto: "Auto",
      // [Auto-translated] "Left"
      left: "Links",
      // [Auto-translated] "Right"
      right: "Rechts"
    },
    // "All"
    all: "alle",
    // "Page"
    page: "Seite",
    // "Survey"
    survey: "Umfrage",
    // "When switching to the next page"
    onNextPage: "Wenn die Seite gewechselt wird",
    // "After an answer is changed"
    onValueChanged: "Wenn ein Wert geändert wird",
    // "Before an answer is changed"
    onValueChanging: "Bevor eine Antwort geändert wird",
    questionsOnPageMode: {
      // [Auto-translated] "Original structure"
      standard: "Ursprüngliche Struktur",
      // [Auto-translated] "Show all questions on one page"
      singlePage: "Alle Fragen auf einer Seite anzeigen",
      // [Auto-translated] "Show single question per page"
      questionPerPage: "Eine Frage pro Seite anzeigen",
      // [Auto-translated] "Show single input field per page"
      inputPerPage: "Einzelnes Eingabefeld pro Seite anzeigen"
    },
    // "No preview"
    noPreview: "Keine Vorschau",
    // "Show all questions"
    showAllQuestions: "Vorschau mit allen Fragen anzeigen",
    // "Show answered questions only"
    showAnsweredQuestions: "Vorschau mit beantworteten Fragen anzeigen",
    // [Auto-translated] "Show all questions"
    allQuestions: "Alle Fragen anzeigen",
    // [Auto-translated] "Show answered questions only"
    answeredQuestions: "Nur beantwortete Fragen anzeigen",
    // "Completed pages"
    pages: "Seiten",
    // "Answered questions"
    questions: "Fragen",
    // "Answered required questions"
    requiredQuestions: "Erforderliche Fragen",
    // "Valid answers"
    correctQuestions: "Richtig beantwortete Fragen",
    // "Completed pages (button UI)"
    buttons: "Schaltflächen",
    // "Under the input field"
    underInput: "Unterhalb des Eingabefelds",
    // "Under the question title"
    underTitle: "Unterhalb des Titels",
    // [Auto-translated] "On lost focus"
    onBlur: "Über den verlorenen Fokus",
    // [Auto-translated] "While typing"
    onTyping: "Während der Eingabe",
    // [Auto-translated] "Under the row"
    underRow: "Unter der Reihe",
    // [Auto-translated] "Under the row, display one section only"
    underRowSingle: "Unter der Zeile wird nur ein Abschnitt angezeigt",
    // "Auto"
    auto: "Auto",
    showNavigationButtons: {
      // "Hidden"
      none: "Versteckt"
    },
    timerInfoMode: {
      // "Both"
      combined: "Beide"
    },
    addRowButtonLocation: {
      // "Based on matrix layout"
      default: "Basierend auf dem Matrix-Layout"
    },
    panelsState: {
      // [Auto-translated] "Locked"
      default: "Verschlossen",
      // [Auto-translated] "Collapse all"
      collapsed: "Alle einklappen",
      // [Auto-translated] "Expand all"
      expanded: "Alle aufklappen",
      // [Auto-translated] "First expanded"
      firstExpanded: "Erstmals erweitert"
    },
    widthMode: {
      // [Auto-translated] "Static"
      static: "Statisch",
      // [Auto-translated] "Responsive"
      responsive: "Anpassend"
    },
    contentMode: {
      // "Image"
      image: "Bild",
      // "Video"
      video: "Video",
      // [Auto-translated] "YouTube"
      youtube: "YouTube (Englisch)"
    },
    displayMode: {
      // [Auto-translated] "Buttons"
      buttons: "Tasten",
      // [Auto-translated] "Dropdown"
      dropdown: "Dropdown-Liste"
    },
    rateColorMode: {
      // "Default"
      default: "Default",
      // [Auto-translated] "Scale"
      scale: "Maßstab"
    },
    scaleColorMode: {
      // [Auto-translated] "Monochrome"
      monochrome: "Monochrom",
      // [Auto-translated] "Colored"
      colored: "Farbig"
    },
    autoGenerate: {
      // "Auto-generate"
      "true": "Generieren",
      // "Manual"
      "false": "Manuell Eintragen"
    },
    rateType: {
      // "Labels"
      labels: "Beschriftung",
      // "Stars"
      stars: "Sterne",
      // "Smileys"
      smileys: "Smileys"
    },
    state: {
      // [Auto-translated] "Locked"
      default: "Verschlossen"
    },
    showQuestionNumbers: {
      // [Auto-translated] "Auto-numbering"
      default: "Automatische Nummerierung",
      // [Auto-translated] "Auto-numbering"
      on: "Automatische Nummerierung",
      // [Auto-translated] "Reset on each page"
      onPage: "Auf jeder Seite zurücksetzen",
      // [Auto-translated] "Reset on each panel"
      onpanel: "Bei jedem Panel zurücksetzen",
      // [Auto-translated] "Reset on each panel"
      onPanel: "Bei jedem Panel zurücksetzen",
      // [Auto-translated] "Recursive numbering"
      recursive: "Rekursive Nummerierung",
      // [Auto-translated] "Continue across the survey"
      onSurvey: "Weiter in der Umfrage",
      // [Auto-translated] "No numbering"
      off: "Keine Nummerierung"
    },
    descriptionLocation: {
      // [Auto-translated] "Under the question title"
      underTitle: "Unter dem Titel der Frage",
      // [Auto-translated] "Under the input field"
      underInput: "Unter dem Eingabefeld"
    },
    selectToRankAreasLayout: {
      // [Auto-translated] "Next to choices"
      horizontal: "Neben der Auswahl",
      // [Auto-translated] "Above choices"
      vertical: "Über der Auswahl"
    },
    displayStyle: {
      // [Auto-translated] "Decimal"
      decimal: "Dezimal",
      // [Auto-translated] "Currency"
      currency: "Währung",
      // [Auto-translated] "Percentage"
      percent: "Prozentsatz",
      // [Auto-translated] "Date"
      date: "Datum"
    },
    totalDisplayStyle: {
      // [Auto-translated] "Decimal"
      decimal: "Dezimal",
      // [Auto-translated] "Currency"
      currency: "Währung",
      // [Auto-translated] "Percentage"
      percent: "Prozentsatz",
      // [Auto-translated] "Date"
      date: "Datum"
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
      top: "Nach oben",
      // [Auto-translated] "Bottom"
      bottom: "Unteres",
      // [Auto-translated] "Top and bottom"
      topbottom: "Oben und unten",
      // [Auto-translated] "Above the header"
      aboveheader: "Oberhalb der Kopfzeile",
      // [Auto-translated] "Below the header"
      belowheader: "Unterhalb der Kopfzeile",
      // [Auto-translated] "Hidden"
      off: "Versteckt"
    },
    // [Auto-translated] "Sum"
    sum: "Summe",
    // [Auto-translated] "Count"
    count: "Zahl",
    // [Auto-translated] "Min"
    min: "Min",
    // [Auto-translated] "Max"
    max: "Max",
    // [Auto-translated] "Avg"
    avg: "Avg",
    searchMode: {
      // [Auto-translated] "Contains"
      contains: "Enthält",
      // [Auto-translated] "Starts with"
      startsWith: "Beginnt mit"
    },
    backgroundImageFit: {
      // [Auto-translated] "Auto"
      auto: "Auto",
      // [Auto-translated] "Cover"
      cover: "Deckel",
      // [Auto-translated] "Contain"
      contain: "Enthalten",
      // [Auto-translated] "Stretch"
      fill: "Strecken",
      // [Auto-translated] "Tile"
      tile: "Fliese"
    },
    backgroundImageAttachment: {
      // [Auto-translated] "Fixed"
      fixed: "Fest",
      // [Auto-translated] "Scroll"
      scroll: "Schriftrolle"
    },
    headerView: {
      // [Auto-translated] "Basic"
      basic: "Grundlegend",
      // [Auto-translated] "Advanced"
      advanced: "Fortgeschritten"
    },
    inheritWidthFrom: {
      // [Auto-translated] "Same as survey"
      survey: "Wie bei der Umfrage",
      // [Auto-translated] "Same as container"
      container: "Identisch mit Container"
    },
    backgroundColorSwitch: {
      // [Auto-translated] "None"
      none: "Nichts",
      // [Auto-translated] "Accent color"
      accentColor: "Akzentfarbe",
      // [Auto-translated] "Custom"
      custom: "Gewohnheit"
    },
    colorPalette: {
      // [Auto-translated] "Light"
      light: "Licht",
      // [Auto-translated] "Dark"
      dark: "Dunkel"
    },
    isPanelless: {
      // [Auto-translated] "Default"
      "false": "Vorgabe",
      // [Auto-translated] "Without Panels"
      "true": "Ohne Paneele"
    },
    progressBarInheritWidthFrom: {
      // [Auto-translated] "Same as survey"
      survey: "Wie bei der Umfrage",
      // [Auto-translated] "Same as container"
      container: "Identisch mit Container"
    }
  },
  // Operators
  op: {
    // "Empty"
    empty: "ist leer",
    // "Not empty"
    notempty: "ist nicht leer",
    // "Equals"
    equal: "ist gleich",
    // "Does not equal"
    notequal: "ist ungleich",
    // "Contains"
    contains: "enthält",
    // "Does not contain"
    notcontains: "enthält nicht",
    // "Any of"
    anyof: "eins aus",
    // "All of"
    allof: "alle aus",
    // "Greater than"
    greater: "größer als",
    // "Less than"
    less: "kleiner als",
    // "Greater than or equal to"
    greaterorequal: "größer oder gleich als",
    // "Less than or equal to"
    lessorequal: "kleiner oder gleich als",
    // "and"
    and: "und",
    // "or"
    or: "oder"
  },
  // Embed window
  ew: {
    // "Use Angular version"
    angular: "Angular-Version benutzen",
    // "Use jQuery version"
    jquery: "jQuery-Version benutzen",
    // "Use Knockout version"
    knockout: "Knockout-Version benutzen",
    // "Use React version"
    react: "React-Version benutzen",
    // "Use Vue version"
    vue: "Vue-Version benutzen",
    // "For bootstrap framework"
    bootstrap: "Als Bootstrap-Framework",
    // "Modern theme"
    modern: "Theme: Modern",
    // "Default theme"
    default: "Theme: Standard",
    // "Orange theme"
    orange: "Theme: Orange",
    // "Darkblue theme"
    darkblue: "Theme: Dunkelblau",
    // "Darkrose theme"
    darkrose: "Theme: Dunklerosa",
    // "Stone theme"
    stone: "Theme: Stein",
    // "Winter theme"
    winter: "Theme: Winter",
    // "Winter-Stone theme"
    winterstone: "Theme: Winterstein",
    // "Show survey on a page"
    showOnPage: "Umfrage auf Seite anzeigen",
    // "Show survey in a window"
    showInWindow: "Umfrage als Fenster anzeigen",
    // "Load Survey JSON from server"
    loadFromServer: "Umfrage als JSON vom Server laden",
    // "Scripts and styles"
    titleScript: "Skripte und Styles",
    // "HTML"
    titleHtml: "HTML",
    // "JavaScript"
    titleJavaScript: "JavaScript"
  },
  // Preview (Survey)
  ts: {
    // "Select the page to test it"
    selectPage: "Seite:",
    // "Show invisible elements"
    showInvisibleElements: "Unsichtbare Elemente anzeigen",
    // "Hide invisible elements"
    hideInvisibleElements: "Unsichtbare Elemente ausblenden",
    // [Auto-translated] "Previous"
    prevPage: "Vorhergehend",
    // [Auto-translated] "Next"
    nextPage: "Nächster"
  },
  validators: {
    // "Answer count"
    answercountvalidator: "Antwortanzahl",
    // "Email"
    emailvalidator: "E-Mail",
    // "Expression"
    expressionvalidator: "Ausdruck",
    // "Number"
    numericvalidator: "Zahl",
    // "Regex"
    regexvalidator: "Regulärer Ausdruck",
    // "Text"
    textvalidator: "Text"
  },
  triggers: {
    // "Complete survey"
    completetrigger: "Umfrage abschließen",
    // "Set answer"
    setvaluetrigger: "Wert setzen",
    // "Copy answer"
    copyvaluetrigger: "Wert kopieren",
    // "Skip to question"
    skiptrigger: "Frage wechseln",
    // "Run expression"
    runexpressiontrigger: "Anweisung ausführen",
    // "change visibility (deprecated)"
    visibletrigger: "Sichtbarkeit ändern (deprecated)"
  },
  peplaceholder: {
    patternmask: {
      // "Ex.: +1(999)-999-99-99"
      pattern: "Bsp.: +1(999)-999-99-99"
    },
    datetimemask: {
      // [Auto-translated] "Ex.: mm/dd/yyyy HH:MM:ss"
      pattern: "Bsp.: mm/dd/yyyy HH:MM:ss"
    },
    currencymask: {
      // "Ex.: $"
      prefix: "Bsp.: $",
      // "Ex.: USD"
      suffix: "Bsp.: USD"
    },
    panelbase: {
      // [Auto-translated] "Ex.: 200px"
      questionTitleWidth: "Beispiel: 200px"
    },
    panellayoutcolumn: {
      // "Ex.: 30%"
      effectiveWidth: "Bsp.: 30%",
      // "Ex.: 200px"
      questionTitleWidth: "Beispiel: 200px"
    }
  },
  pehelp: {
    panel: {
      // "A panel ID that is not visible to respondents."
      name: "Eine Panel-ID, die für die Befragten nicht sichtbar ist.",
      // [Auto-translated] "Type a panel subtitle."
      description: "Geben Sie einen Untertitel für das Bedienfeld ein.",
      // "Use the magic wand icon to set a conditional rule that determines panel visibility."
      visibleIf: "Verwenden Sie das Zauberstabsymbol, um eine bedingte Regel festzulegen, die die Sichtbarkeit des Panels bestimmt.",
      // [Auto-translated] "Use the magic wand icon to set a conditional rule that disables the read-only mode for the panel."
      enableIf: "Verwenden Sie das Zauberstabsymbol, um eine bedingte Regel festzulegen, die den schreibgeschützten Modus für das Panel deaktiviert.",
      // "Use the magic wand icon to set a conditional rule that prevents survey submission unless at least one nested question has an answer."
      requiredIf: "Verwenden Sie das Zauberstabsymbol, um eine bedingte Regel festzulegen, die die Übermittlung von Umfragen verhindert, es sei denn, mindestens eine verschachtelte Frage enthält eine Antwort.",
      // [Auto-translated] "Applies to all questions within this panel. When set to \"Hidden\", it also hides question descriptions. If you want to override this setting, define title alignment rules for individual questions. The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Top\" by default). "
      questionTitleLocation: "Gilt für alle Fragen in diesem Bereich. Wenn es auf \"Versteckt\" eingestellt ist, werden auch Fragebeschreibungen ausgeblendet. Wenn Sie diese Einstellung überschreiben möchten, definieren Sie Regeln für die Titelausrichtung für einzelne Fragen. Die Option \"Erben\" wendet die Einstellung auf Seitenebene (falls festgelegt) oder auf Umfrageebene an (\"standardmäßig oben\"). ",
      // [Auto-translated] "Sets consistent width for question titles when they are aligned to the left of their question boxes. Accepts CSS values (px, %, in, pt, etc.)."
      questionTitleWidth: "Legt eine konsistente Breite für Fragetitel fest, wenn sie links neben den Fragefeldern ausgerichtet sind. Akzeptiert CSS-Werte (px, %, in, pt usw.).",
      // "Sets the location of an error message in relation to all questions within the panel. The \"Inherit\" option applies the page-level (if set) or survey-level setting."
      questionErrorLocation: "Legt die Position einer Fehlermeldung in Bezug auf alle Fragen innerhalb des Bereichs fest. Die Option \"Vererben\" wendet die Einstellung auf Seitenebene (falls gesetzt) oder auf Umfrageebene an.",
      // [Auto-translated] "Keeps the original order of questions or randomizes them. The \"Inherit\" option applies the page-level (if set) or survey-level setting."
      questionOrder: "Behält die ursprüngliche Reihenfolge der Fragen bei oder ordnet sie nach dem Zufallsprinzip an. Die Option \"Vererben\" wendet die Einstellung auf Seitenebene (falls festgelegt) oder auf Umfrageebene an.",
      // "Repositions the panel to the end of a selected page."
      page: "Positioniert das Panel am Ende einer ausgewählten Seite.",
      // [Auto-translated] "Adds space or margin between the panel content and the left border of the panel box."
      innerIndent: "Fügt Abstand oder Rand zwischen dem Inhalt des Panels und dem linken Rand des Panels hinzu.",
      // "Unselect to display the panel in one line with the previous question or panel. The setting doesn't apply if the panel is the first element in your form."
      startWithNewLine: "Deaktivieren Sie diese Option, um den Bereich in einer Zeile mit der vorherigen Frage oder dem vorherigen Bereich anzuzeigen. Die Einstellung gilt nicht, wenn der Bereich das erste Element in Ihrem Formular ist.",
      // "Choose from: \"Expanded\" - the panel is displayed in full and can be collapsed; \"Collapsed\" - the panel displays only the title and description and can be expanded; \"Locked\" - the panel is displayed in full and cannot be collapsed."
      state: "Wählen Sie aus: \"Erweitert\" - das Panel wird vollständig angezeigt und kann eingeklappt werden; \"Reduziert\" - das Panel zeigt nur den Titel und die Beschreibung an und kann erweitert werden; \"Gesperrt\" - das Panel wird vollständig angezeigt und kann nicht eingeklappt werden.",
      // [Auto-translated] "Sets the width of the panel in proportion to other survey elements in the same line. Accepts CSS values (px, %, in, pt, etc.)."
      width: "Legt die Breite des Bereichs im Verhältnis zu anderen Vermessungselementen in derselben Linie fest. Akzeptiert CSS-Werte (px, %, in, pt usw.).",
      // [Auto-translated] "Assigns numbers to questions nested within this panel."
      showQuestionNumbers: "Weist Fragen, die in diesem Bereich verschachtelt sind, Nummern zu.",
      // [Auto-translated] "Specifies how many columns this panel spans within the grid layout."
      effectiveColSpan: "Gibt an, über wie viele Spalten sich dieser Bereich innerhalb des Rasterlayouts erstreckt.",
      // [Auto-translated] "This table lets you configure each grid column within the panel. It automatically sets the width percentage for each column based on the maximum number of elements in a row. To customize the grid layout, manually adjust these values and define the title width for all questions in each column."
      gridLayoutColumns: "In dieser Tabelle können Sie jede Rasterspalte innerhalb des Bereichs konfigurieren. Der Breitenprozentsatz für jede Spalte wird automatisch basierend auf der maximalen Anzahl von Elementen in einer Zeile festgelegt. Um das Rasterlayout anzupassen, passen Sie diese Werte manuell an und definieren Sie die Titelbreite für alle Fragen in jeder Spalte."
    },
    paneldynamic: {
      // "A panel ID that is not visible to respondents."
      name: "Eine Panel-ID, die für die Befragten nicht sichtbar ist.",
      // "Type a panel subtitle."
      description: "Geben Sie einen Untertitel für das Panel ein.",
      // "Use the magic wand icon to set a conditional rule that determines panel visibility."
      visibleIf: "Verwenden Sie das Zauberstabsymbol, um eine bedingte Regel festzulegen, die die Sichtbarkeit des Panels bestimmt.",
      // [Auto-translated] "Use the magic wand icon to set a conditional rule that disables the read-only mode for the panel."
      enableIf: "Verwenden Sie das Zauberstabsymbol, um eine bedingte Regel festzulegen, die den schreibgeschützten Modus für das Panel deaktiviert.",
      // "Use the magic wand icon to set a conditional rule that prevents survey submission unless at least one nested question has an answer."
      requiredIf: "Verwenden Sie das Zauberstabsymbol, um eine bedingte Regel festzulegen, die die Übermittlung von Umfragen verhindert, es sei denn, mindestens eine verschachtelte Frage enthält eine Antwort.",
      // "Applies to all questions within this dynamic panel. If you want to override this setting, define title alignment rules for individual questions. The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Top\" by default)."
      templateQuestionTitleLocation: "Gilt für alle Fragen in diesem Bereich. Wenn Sie diese Einstellung außer Kraft setzen möchten, definieren Sie Regeln für die Titelausrichtung für einzelne Fragen. Die Option \"Vererben\" wendet die Einstellung auf Seitenebene (falls gesetzt) oder auf Umfrageebene an (standardmäßig \"Oben\").",
      // "Sets consistent width for question titles when they are aligned to the left of their question boxes. Accepts CSS values (px, %, in, pt, etc.)."
      templateQuestionTitleWidth: "Legt die einheitliche Breite für Fragetitel fest, wenn sie links von den Fragefeldern ausgerichtet sind. Akzeptiert CSS-Werte (px, %, in, pt usw.).",
      // "Sets the location of an error message in relation to a question with invalid input. Choose between: \"Top\" - an error text is placed at the top of the question box; \"Bottom\" - an error text is placed at the bottom of the question box. The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Top\" by default)."
      templateErrorLocation: "Legt die Position einer Fehlermeldung in Bezug auf eine Frage mit ungültiger Eingabe fest. Wählen Sie zwischen: \"Oben\" - ein Fehlertext wird am oberen Rand des Fragefelds platziert; \"Unten\" - ein Fehlertext wird am unteren Rand des Fragefelds platziert. Die Option \"Vererben\" wendet die Einstellung auf Seitenebene (falls gesetzt) oder auf Umfrageebene an (standardmäßig \"Oben\").",
      // "Sets the location of an error message in relation to all questions within the panel. The \"Inherit\" option applies the page-level (if set) or survey-level setting."
      errorLocation: "Legt die Position einer Fehlermeldung in Bezug auf alle Fragen innerhalb des Bereichs fest. Die Option \"Vererben\" wendet die Einstellung auf Seitenebene (falls gesetzt) oder auf Umfrageebene an.",
      // "Repositions the panel to the end of a selected page."
      page: "Positioniert das Panel am Ende einer ausgewählten Seite.",
      // [Auto-translated] "Adds space or margin between the panel content and the left border of the panel box."
      indent: "Fügt Platz oder Rand zwischen dem Bedienfeldinhalt und dem linken Rand des Bedienfelds hinzu.",
      // "Unselect to display the panel in one line with the previous question or panel. The setting doesn't apply if the panel is the first element in your form."
      startWithNewLine: "Deaktivieren Sie diese Option, um den Bereich in einer Zeile mit der vorherigen Frage oder dem vorherigen Bereich anzuzeigen. Die Einstellung gilt nicht, wenn der Bereich das erste Element in Ihrem Formular ist.",
      // "Choose from: \"Expanded\" - the panel is displayed in full and can be collapsed; \"Collapsed\" - the panel displays only the title and description and can be expanded; \"Locked\" - the panel is displayed in full and cannot be collapsed."
      state: "Wählen Sie aus: \"Erweitert\" - das Panel wird vollständig angezeigt und kann eingeklappt werden; \"Reduziert\" - das Panel zeigt nur den Titel und die Beschreibung an und kann erweitert werden; \"Gesperrt\" - das Panel wird vollständig angezeigt und kann nicht eingeklappt werden.",
      // "Sets the width of the panel in proportion to other survey elements in the same line. Accepts CSS values (px, %, in, pt, etc.)."
      width: "Legt die Breite des Fensters im Verhältnis zu anderen Vermessungselementen in derselben Linie fest. Akzeptiert CSS-Werte (px, %, in, pt usw.).",
      // "Type in a template for entry titles. Use {panelIndex} for the entry's general position and {visiblePanelIndex} for its order among visible entries. Insert these placeholders into the pattern to add automatic numbering."
      templateTitle: "Geben Sie eine Vorlage für die Titeln von dynamischen Panele. Verwenden Sie {panelIndex} für die allgemeine Position des Panels und {visiblePanelIndex} für die Reihenfolge der sichtbaren Panele. Fügen Sie diese Platzhalter in das Muster ein, um eine automatische Nummerierung hinzuzufügen.",
      // "Type in a template for tab titles. Use {panelIndex} for an entry's general position and {visiblePanelIndex} for its order among visible entries. Insert these placeholders into the pattern to add automatic numbering."
      templateTabTitle: "Geben Sie eine Vorlage für Tab-titel ein. Verwenden Sie {panelIndex} für die allgemeine Position eines Panels und {visiblePanelIndex} für die Reihenfolge der sichtbaren Panele. Fügen Sie diese Platzhalter in das Muster ein, um eine automatische Nummerierung hinzuzufügen.",
      // "A fallback text for tab titles that applies when the tab title pattern doesn't produce a meaningful value."
      tabTitlePlaceholder: "Ein Fallbacktext für Registerkartentitel, der angewendet wird, wenn das Registerkartentitelmuster keinen aussagekräftigen Wert erzeugt.",
      // "This setting allows you to control the visibility of individual entries within the dynamic panel. Use the `{panel}` placeholder to reference the current entry in your expression."
      templateVisibleIf: "Mit dieser Einstellung können Sie die Sichtbarkeit einzelner Panele innerhalb des dynamischen Panels steuern. Verwenden Sie den Platzhalter '{panel}', um auf das aktuelle Panel in Ihrem Ausdruck zu verweisen.",
      // "This setting is automatically inherited by all questions within this dynamic panel. If you want to override this setting, define title alignment rules for individual questions. The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Top\" by default)."
      titleLocation: "Diese Einstellung wird automatisch von allen Fragen in diesem Bereich übernommen. Wenn Sie diese Einstellung außer Kraft setzen möchten, definieren Sie Regeln für die Titelausrichtung für einzelne Fragen. Die Option \"Vererben\" wendet die Einstellung auf Seitenebene (falls gesetzt) oder auf Umfrageebene an (standardmäßig \"Oben\").",
      // "The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Under the panel title\" by default)."
      descriptionLocation: "Die Option \"Vererben\" wendet die Einstellung auf Seitenebene (falls gesetzt) oder auf Umfrageebene an (standardmäßig unter dem Panel-Titel).",
      // "Defines the position of a newly added entry. By default, new entries are added to the end. Select \"Next\" to insert a new entry after the current one."
      newPanelPosition: "Definiert die Position eines neu hinzugefügten Panels. Standardmäßig werden neue Panele am Ende hinzugefügt. Wählen Sie \"Weiter\", um ein neues Panel nach dem aktuellen einzufügen.",
      // [Auto-translated] "Duplicates answers from the last entry and assigns them to the next added entry."
      copyDefaultValueFromLastEntry: "Dupliziert die Antworten des letzten Eintrags und ordnet sie dem nächsten hinzugefügten Eintrag zu.",
      // "Reference a question name to require a user to provide a unique response for this question in each entry."
      keyName: "Verweisen Sie auf einen Fragenamen, um einen Benutzer aufzufordern, in jedem Bereich eine eindeutige Antwort auf diese Frage zu geben.",
      // [Auto-translated] "Triggers a confirmation prompt before removing an entry."
      confirmDelete: "Löst eine Bestätigungsaufforderung aus, bevor ein Eintrag entfernt wird."
    },
    matrixdynamic: {
      // [Auto-translated] "Triggers a confirmation prompt before removing a row."
      confirmDelete: "Löst eine Bestätigungsaufforderung aus, bevor eine Zeile entfernt wird.",
      // [Auto-translated] "Automatically expands the detail section when a new row is added to the matrix."
      detailPanelShowOnAdding: "Erweitert den Detailabschnitt automatisch, wenn der Matrix eine neue Zeile hinzugefügt wird."
    },
    // "Duplicates answers from the last row and assigns them to the next added dynamic row."
    copyDefaultValueFromLastEntry: "Dupliziert Antworten aus der letzten Zeile und weist sie der nächsten hinzugefügten dynamischen Zeile zu.",
    // [Auto-translated] "This setting allows you to assign a default answer value based on an expression. The expression can include basic calculations - `{q1_id} + {q2_id}`, Boolean expressions, such as `{age} > 60`, and functions: `iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, etc. The value determined by this expression serves as the initial default value that can be overridden by a respondent's manual input."
    defaultValueExpression: "Mit dieser Einstellung können Sie einen Standardantwortwert basierend auf einem Ausdruck zuweisen. Der Ausdruck kann grundlegende Berechnungen enthalten - '{q1_id} + {q2_id}', boolesche Ausdrücke wie '{age} > 60' und Funktionen: 'iif()', 'today()', 'age()', 'min()', 'max()', 'avg()' usw. Der durch diesen Ausdruck ermittelte Wert dient als anfänglicher Standardwert, der durch die manuelle Eingabe eines Befragten überschrieben werden kann.",
    // "Use the magic wand icon to set a conditional rule that determines when a respondent's input is reset to the value based on the \"Default value expression\" or \"Set value expression\" or to the \"Default answer\" value (if either is set)."
    resetValueIf: "Verwenden Sie das Zauberstabsymbol, um eine Bedingungsregel festzulegen, die bestimmt, wann die Eingabe eines Befragten auf den Wert zurückgesetzt wird, der auf dem Wert \"Standardwertausdruck\" oder \"Wertausdruck festlegen\" oder auf dem Wert \"Standardantwort\" (falls einer dieser Werte festgelegt ist) basiert.",
    // "Use the magic wand icon to set a conditional rule that determines when to run the \"Set value expression\" and dynamically assign the resulting value as a response."
    setValueIf: "Verwenden Sie das Zauberstabsymbol, um eine Bedingungsregel festzulegen, die bestimmt, wann der \"Wertausdruck festlegen\" ausgeführt werden soll, und weisen Sie den resultierenden Wert dynamisch als Antwort zu.",
    // "Specify an expression that defines the value to be set when the conditions in the \"Set value if\" rule are met. The expression can include basic calculations - `{q1_id} + {q2_id}`, Boolean expressions, such as `{age} > 60`, and functions: `iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, etc. The value determined by this expression can be overridden by a respondent's manual input."
    setValueExpression: "Geben Sie einen Ausdruck an, der den Wert definiert, der festgelegt werden soll, wenn die Bedingungen in der Regel \"Wert festlegen, wenn\" erfüllt sind. Der Ausdruck kann grundlegende Berechnungen enthalten - '{q1_id} + {q2_id}', boolesche Ausdrücke wie '{age} > 60' und Funktionen: 'iif()', 'today()', 'age()', 'min()', 'max()', 'avg()' usw. Der durch diesen Ausdruck ermittelte Wert kann durch die manuelle Eingabe eines Befragten überschrieben werden.",
    // "Survey Creator allows you to manually adjust the inline widths of form elements to control the layout. If this doesn't produce the desired outcome, you can enable the grid layout, which structures form elements using a column-based system. To configure layout columns, select a page or panel and use the \"Question Settings\" → \"Grid columns\" table. To adjust how many columns a question spans, select it and set the desired value in the \"Layout\" → \"Column span\" field."
    gridLayoutEnabled: "Mit Survey Creator können Sie die Inline-Breiten von Formularelementen manuell anpassen, um das Layout zu steuern. Wenn dies nicht zum gewünschten Ergebnis führt, können Sie das Rasterlayout aktivieren, das Formularelemente mithilfe eines spaltenbasierten Systems strukturiert. Um Layoutspalten zu konfigurieren, wählen Sie eine Seite oder einen Bereich aus und verwenden Sie die Tabelle \"Frageneinstellungen\" → \"Rasterspalten\". Um anzupassen, wie viele Spalten eine Frage umfasst, wählen Sie sie aus und stellen Sie den gewünschten Wert im Feld \"Layout\" → \"Spaltenbereich\" ein.",
    question: {
      // "A question ID that is not visible to respondents."
      name: "Eine Frage-ID, die für die Befragten nicht sichtbar ist.",
      // "Type a question subtitle."
      description: "Geben Sie einen Untertitel für die Frage ein.",
      // "Use the magic wand icon to set a conditional rule that determines question visibility."
      visibleIf: "Verwenden Sie das Zauberstabsymbol, um eine bedingte Regel festzulegen, die die Sichtbarkeit von Fragen bestimmt.",
      // [Auto-translated] "Use the magic wand icon to set a conditional rule that disables the read-only mode for the question."
      enableIf: "Verwenden Sie das Zauberstabsymbol, um eine bedingte Regel festzulegen, die den schreibgeschützten Modus für die Frage deaktiviert.",
      // "Use the magic wand icon to set a conditional rule that prevents survey advancing or submission unless the question received an answer."
      requiredIf: "Verwenden Sie das Zauberstabsymbol, um eine bedingte Regel festzulegen, die verhindert, dass die Umfrage fortgesetzt oder gesendet wird, es sei denn, die Frage wurde beantwortet.",
      // [Auto-translated] "Unselect to display the question in one line with the previous question or panel. The setting doesn't apply if the question is the first element in your form."
      startWithNewLine: "Deaktivieren Sie diese Option, um die Frage in einer Zeile mit der vorherigen Frage oder dem vorherigen Bereich anzuzeigen. Die Einstellung gilt nicht, wenn die Frage das erste Element in Ihrem Formular ist.",
      // "Repositions the question to the end of a selected page."
      page: "Positioniert die Frage an das Ende einer ausgewählten Seite.",
      // "Choose from: \"Expanded\" - the question box is displayed in full and can be collapsed; \"Collapsed\" - the question box displays only the title and description and can be expanded; \"Locked\" - the question box is displayed in full and cannot be collapsed."
      state: "Wählen Sie aus: \"Erweitert\" - das Fragefeld wird vollständig angezeigt und kann eingeklappt werden; \"Zugeklappt\" - das Fragefeld zeigt nur den Titel und die Beschreibung an und kann erweitert werden; \"Gesperrt\" - das Fragefeld wird vollständig angezeigt und kann nicht eingeklappt werden.",
      // "Overrides title alignment rules defined on a panel, page, or survey level. When set to \"Hidden\", it also hides question descriptions. The \"Inherit\" option applies any higher-level settings (if set) or survey-level setting (\"Top\" by default)."
      titleLocation: "Überschreibt Regeln für die Titelausrichtung, die auf Bereichs-, Seiten- oder Umfrageebene definiert sind. Mit der Option \"Vererben\" werden alle übergeordneten Einstellungen (falls gesetzt) oder Einstellungen auf Umfrageebene (\"Standardmäßig oben\") angewendet.",
      // "The \"Inherit\" option applies the survey-level setting (\"Under the question title\" by default)."
      descriptionLocation: "Die Option \"Vererben\" wendet die Einstellung auf Umfrageebene an (\"Standardmäßig unter dem Fragetitel\").",
      // "Sets the location of an error message in relation to the question with invalid input. Choose between: \"Top\" - an error text is placed at the top of the question box; \"Bottom\" - an error text is placed at the bottom of the question box. The \"Inherit\" option applies the survey-level setting (\"Top\" by default)."
      errorLocation: "Legt die Position einer Fehlermeldung in Bezug auf die Frage mit ungültiger Eingabe fest. Wählen Sie zwischen: \"Oben\" - ein Fehlertext wird am oberen Rand des Fragefelds platziert; \"Unten\" - ein Fehlertext wird am unteren Rand des Fragefelds platziert. Die Option \"Vererben\" wendet die Einstellung auf Umfrageebene an (standardmäßig \"Oben\").",
      // "Adds space or margin between the question content and the left border of the question box."
      indent: "Fügt Leerzeichen oder Ränder zwischen dem Inhalt der Frage und dem linken Rand des Fragefelds hinzu.",
      // "Sets the width of the question in proportion to other survey elements in the same line. Accepts CSS values (px, %, in, pt, etc.)."
      width: "Legt die Breite der Frage im Verhältnis zu anderen Umfrageelementen in derselben Zeile fest. Akzeptiert CSS-Werte (px, %, in, pt usw.).",
      // "Choose from: \"On lost focus\" - the value is updated when the input field loses focus; \"While typing\" - the value is updated in real-time, as users are typing. The \"Inherit\" option applies the survey-level setting (\"On lost focus\" by default)."
      textUpdateMode: "Wählen Sie aus: \"Bei Fokusverlust\" - der Wert wird aktualisiert, wenn das Eingabefeld den Fokus verliert; \"Während der Eingabe\" - der Wert wird in Echtzeit aktualisiert, während Benutzer tippen. Die Option \"Vererben\" wendet die Einstellung auf Umfrageebene an (\"Standardmäßig bei verlorenem Fokus\").",
      // [Auto-translated] "You can use any web service as a data source for multiple-choice questions. To populate choice values, enter the URL of the service providing the data."
      url: "Sie können einen beliebigen Webdienst als Datenquelle für Multiple-Choice-Fragen verwenden. Um Auswahlwerte aufzufüllen, geben Sie die URL des Diensts ein, der die Daten bereitstellt.",
      // [Auto-translated] "A comparison operation used to filter the drop-down list."
      searchMode: "Ein Vergleichsvorgang, der zum Filtern der Dropdownliste verwendet wird.",
      // [Auto-translated] "Long texts in choice options will automatically generate line breaks to fit within the drop-down menu. Unselect if you want the texts to clip."
      textWrapEnabled: "Lange Texte in Auswahloptionen generieren automatisch Zeilenumbrüche, die in das Dropdown-Menü passen. Deaktivieren Sie diese Option, wenn die Texte abgeschnitten werden sollen.",
      // [Auto-translated] "Specifies how many columns this question spans within the grid layout."
      effectiveColSpan: "Gibt an, über wie viele Spalten sich diese Frage innerhalb des Rasterlayouts erstreckt."
    },
    surveyvalidator: {
      // "Use the magic wand icon to define when the question's value is considered valid."
      expression: "Verwenden Sie das Zauberstab-Symbol, um festzulegen, wann der Wert der Frage als gültig gilt.",
      // [Auto-translated] "Errors block progress until resolved. Warnings highlight issues but allow to continue. Informational notes offer additional context or neutral guidance. When using warnings or informational notes, we recommend enabling immediate validation: \"Survey\" → \"Validation\" → \"Run validation\" → \"After an answer has changed\"."
      notificationType: "Fehler blockieren den Fortschritt, bis sie behoben sind. Warnungen weisen auf Probleme hin, lassen aber zu, dass fortgefahren wird. Informationsnotizen bieten zusätzlichen Kontext oder eine neutrale Orientierung. Bei der Verwendung von Warnungen oder Informationshinweisen empfehlen wir, die sofortige Validierung zu aktivieren: \"Umfrage\" → \"Validierung\" → \"Validierung ausführen\" → \"Nachdem sich eine Antwort geändert hat\"."
    },
    signaturepad: {
      // "Sets the width of the displayed signature area and the resulting image."
      signatureWidth: "Legt die Breite des angezeigten Signaturbereichs und des resultierenden Bildes fest.",
      // "Sets the height of the displayed signature area and the resulting image."
      signatureHeight: "Legt die Höhe des angezeigten Signaturbereichs und des resultierenden Bildes fest.",
      // "Select if you want the signature area to fill all available space within the question box while maintaining the default 3:2 aspect ratio. When custom width and height values are set, the setting will keep the aspect ratio of these dimensions."
      signatureAutoScaleEnabled: "Wählen Sie diese Option aus, wenn der Signaturbereich den gesamten verfügbaren Platz innerhalb des Fragefelds ausfüllen soll, während das Standardseitenverhältnis von 3:2 beibehalten wird. Wenn benutzerdefinierte Werte für Breite und Höhe festgelegt sind, behält die Einstellung das Seitenverhältnis dieser Abmessungen bei."
    },
    file: {
      // "Specifies the display height of uploaded images in the preview and the actual height of images taken with the camera. In single file upload mode, the display height is limited by the preview area; in multiple file upload mode, it is limited by the thumbnail area."
      imageHeight: "Gibt die Anzeigehöhe der hochgeladenen Bilder in der Vorschau und die tatsächliche Höhe der mit der Kamera aufgenommenen Bilder an. Im Modus zum Hochladen einzelner Dateien wird die Anzeigehöhe durch den Vorschaubereich begrenzt. Im Modus zum Hochladen mehrerer Dateien ist es durch den Miniaturansichtsbereich begrenzt.",
      // "Specifies the display width of uploaded images in the preview and the actual width of images taken with the camera. In single file upload mode, the display width is limited by the preview area; in multiple file upload mode, it is limited by the thumbnail area."
      imageWidth: "Gibt die Anzeigebreite hochgeladener Bilder in der Vorschau und die tatsächliche Breite von Bildern an, die mit der Kamera aufgenommen wurden. Im Modus zum Hochladen einzelner Dateien wird die Anzeigebreite durch den Vorschaubereich begrenzt. Im Modus zum Hochladen mehrerer Dateien ist es durch den Miniaturansichtsbereich begrenzt.",
      // [Auto-translated] "Displays thumbnail previews for uploaded files when possible. Unselect if you want to show file icons instead."
      allowImagesPreview: "Zeigt nach Möglichkeit Miniaturansichten für hochgeladene Dateien an. Deaktivieren Sie diese Option, wenn Sie stattdessen Dateisymbole anzeigen möchten."
    },
    image: {
      // "The \"Auto\" option automatically determines the suitable mode for display - Image, Video, or YouTube - based on the source URL provided."
      contentMode: "Die Option \"Auto\" bestimmt automatisch den geeigneten Anzeigemodus - Bild, Video oder YouTube - basierend auf der bereitgestellten Quell-URL."
    },
    imagepicker: {
      // [Auto-translated] "Overrides the minimum and maximum height values."
      imageHeight: "Überschreibt die minimalen und maximalen Höhenwerte.",
      // [Auto-translated] "Overrides the minimum and maximum width values."
      imageWidth: "Überschreibt die minimalen und maximalen Breitenwerte.",
      // [Auto-translated] "\"Value\" serves as an item ID used in conditional rules; \"Text\" is displayed to respondents."
      choices: "\"Wert\" dient als Element-ID, die in bedingten Regeln verwendet wird. Den Befragten wird \"Text\" angezeigt.",
      // "Choose between \"Image\" and \"Video\" to set the content mode of the media selector. If \"Image\" is selected, ensure that all options provided are image files in the following formats: JPEG, GIF, PNG, APNG, SVG, BMP, ICO. Similarly, if \"Video\" is selected, ensure that all options are direct links to video files in the following formats: MP4, MOV, WMV, FLV, AVI, MKV. Please note that YouTube links are not supported for video options."
      contentMode: "Wählen Sie zwischen \"Bild\" und \"Video\", um den Inhaltsmodus der Medienauswahl festzulegen. Wenn \"Bild\" ausgewählt ist, stellen Sie sicher, dass es sich bei allen bereitgestellten Optionen um Bilddateien in den folgenden Formaten handelt: JPEG, GIF, PNG, APNG, SVG, BMP, ICO. Wenn \"Video\" ausgewählt ist, stellen Sie sicher, dass alle Optionen direkte Links zu Videodateien in den folgenden Formaten sind: MP4, MOV, WMV, FLV, AVI, MKV. Bitte beachten Sie, dass YouTube-Links für Videooptionen nicht unterstützt werden."
    },
    text: {
      // [Auto-translated] "This setting only resizes the input field and doesn't affect the width of the question box. To limit the accepted input length, go to \"Validation\" → \"Maximum character limit\"."
      size: "Diese Einstellung ändert nur die Größe des Eingabefelds und wirkt sich nicht auf die Breite des Fragefelds aus. Um die zulässige Eingabelänge zu begrenzen, gehen Sie zu \"Validierung\" → \"Maximale Zeichenbeschränkung\"."
    },
    comment: {
      // [Auto-translated] "Sets the number of displayed lines in the input field. If the input takes up more lines, the scroll bar will appear."
      rows: "Legt die Anzahl der angezeigten Zeilen im Eingabefeld fest. Wenn die Eingabe mehr Zeilen einnimmt, wird die Bildlaufleiste angezeigt."
    },
    // survey templates
    survey: {
      // "Select if you want to prevent respondents from filling out your survey."
      readOnly: "Wählen Sie diese Option aus, wenn Sie verhindern möchten, dass die Befragten Ihre Umfrage ausfüllen.",
      // "Sets the location of the progress bar. The \"Auto\" value displays the progress bar above or below the survey header."
      progressBarLocation: "Legt die Position des Fortschrittsbalkens fest. Der Wert \"Auto\" zeigt den Fortschrittsbalken über oder unter der Kopfzeile der Umfrage an."
    },
    matrixdropdowncolumn: {
      // "A column ID that is not visible to respondents."
      name: "Eine Spalten-ID, die für die Befragten nicht sichtbar ist.",
      // "When enabled for a column, a respondent is required to provide a unique response for each question within this column."
      isUnique: "Wenn diese Option für eine Spalte aktiviert ist, muss ein Befragter für jede Frage in dieser Spalte eine eindeutige Antwort geben.",
      // "Sets the number of displayed lines in the input field. If the input takes up more lines, the scroll bar will appear."
      rows: "Legt die Anzahl der angezeigten Zeilen im Eingabefeld fest. Wenn die Eingabe mehr Zeilen einnimmt, wird die Bildlaufleiste angezeigt.",
      // "Use the magic wand icon to set a conditional rule that determines column visibility."
      visibleIf: "Verwenden Sie das Zauberstabsymbol, um eine bedingte Regel festzulegen, die die Sichtbarkeit von Spalten bestimmt.",
      // [Auto-translated] "Use the magic wand icon to set a conditional rule that disables the read-only mode for the column."
      enableIf: "Verwenden Sie das Zauberstabsymbol, um eine Bedingungsregel festzulegen, die den schreibgeschützten Modus für die Spalte deaktiviert.",
      // "Use the magic wand icon to set a conditional rule that prevents survey submission unless at least one nested question has an answer."
      requiredIf: "Verwenden Sie das Zauberstabsymbol, um eine bedingte Regel festzulegen, die die Übermittlung von Umfragen verhindert, es sei denn, mindestens eine verschachtelte Frage enthält eine Antwort.",
      // "When selected, creates an individual column for each choice option."
      showInMultipleColumns: "Wenn diese Option aktiviert ist, wird für jede Auswahloption eine eigene Spalte erstellt.",
      // [Auto-translated] "Arranges choice options in a multi-column layout. When set to 0, the options are displayed in a single line. When set to -1, the actual value is inherited from the \"Nested column count\" property of the parent matrix."
      colCount: "Ordnet die Auswahloptionen in einem mehrspaltigen Layout an. Wenn der Wert auf 0 gesetzt ist, werden die Optionen in einer einzigen Zeile angezeigt. Wenn dieser Wert auf -1 festgelegt ist, wird der tatsächliche Wert von der Eigenschaft \"Anzahl der geschachtelten Spalten\" der übergeordneten Matrix geerbt."
    },
    slider: {
      // "The lowest number that users can select."
      min: "Die niedrigste Zahl, die Benutzer auswählen können.",
      // "The highest number that users can select."
      max: "Die höchste Zahl, die Benutzer auswählen können.",
      // "The interval between selectable scale values. For example, a step of 5 will allow users to select 0, 5, 10, etc."
      step: "Das Intervall zwischen den auswählbaren Skalenwerten. In einem Schritt von 5 können Benutzer beispielsweise 0, 5, 10 usw. auswählen.",
      // "The minimum distance between the slider thumbs a user can set."
      minRangeLength: "Der Mindestabstand zwischen den Schiebereglern, die ein Benutzer festlegen kann.",
      // "The maximum distance between the slider thumbs a user can set."
      maxRangeLength: "Der maximale Abstand zwischen den Schiebereglern, die ein Benutzer festlegen kann.",
      // "Specifies how many scale labels to generate. A value of -1 means the number is calculated automatically based on the Min value and Max value."
      labelCount: "Gibt an, wie viele Maßstabsbeschriftungen generiert werden sollen. Ein Wert von -1 bedeutet, dass die Zahl automatisch basierend auf dem Min-Wert und dem Max-Wert berechnet wird.",
      // "Use `{0}` as a placeholder for the actual value."
      labelFormat: "Verwenden Sie '{0}' als Platzhalter für den tatsächlichen Wert.",
      // "Allows you to define custom labels at specific values and optionally assign corresponding text to them (e.g., 0 = \"Poor\", 100 = \"Excellent\")."
      customLabels: "Ermöglicht es Ihnen, benutzerdefinierte Beschriftungen bei bestimmten Werten zu definieren und ihnen optional entsprechenden Text zuzuweisen (z. B. 0 = \"Schlecht\", 100 = \"Ausgezeichnet\").",
      // "Use `{0}` as a placeholder for the actual value."
      tooltipFormat: "Verwenden Sie '{0}' als Platzhalter für den tatsächlichen Wert.",
      // "Allows users to move one thumb past the other."
      allowSwap: "Ermöglicht es Benutzern, einen Daumen über den anderen zu bewegen.",
      // [Auto-translated] "Displays a button that clears the selected slider value and sets it to undefined."
      allowClear: "Zeigt eine Schaltfläche an, die den ausgewählten Schiebereglerwert löscht und auf undefined setzt.",
      // "Defines the slider's minimum value dynamically using an expression. Supports basic calculations (e.g, `{q1_id} + {q2_id}`), Boolean logic (e.g., `{age} > 60`), and functions like `iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, and more."
      minValueExpression: "Definiert den Mindestwert des Schiebereglers dynamisch mithilfe eines Ausdrucks. Unterstützt grundlegende Berechnungen (z. B. '{q1_id} + {q2_id}'), boolesche Logik (z. B. '{age} > 60') und Funktionen wie 'iif()', 'today()', 'age()', 'min()', 'max()', 'avg()' und mehr.",
      // "Defines the slider's maximum value dynamically using an expression. Supports basic calculations (e.g, `{q1_id} + {q2_id}`), Boolean logic (e.g., `{age} > 60`), and functions like `iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, and more."
      maxValueExpression: "Definiert den Maximalwert des Schiebereglers dynamisch mithilfe eines Ausdrucks. Unterstützt grundlegende Berechnungen (z. B. '{q1_id} + {q2_id}'), boolesche Logik (z. B. '{age} > 60') und Funktionen wie 'iif()', 'today()', 'age()', 'min()', 'max()', 'avg()' und mehr."
    },
    // [Auto-translated] "Makes this choice exclusive. When selected by a user, it will automatically deselect all other options in the question."
    isExclusive: "Macht diese Wahl exklusiv. Wenn sie von einem Benutzer ausgewählt wird, werden automatisch alle anderen Optionen in der Frage abgewählt.",
    matrixcolumn: {
      // [Auto-translated] "Makes checkboxes in this column exclusive. When selected by a user, they will automatically deselect all other checkboxes in the same row."
      isExclusive: "Macht die Kontrollkästchen in dieser Spalte exklusiv. Wenn sie von einem Benutzer ausgewählt werden, werden alle anderen Kontrollkästchen in derselben Zeile automatisch deaktiviert."
    },
    // [Auto-translated] "Select if uppercase and lowercase letters in the regular expression must be treated as equivalent."
    caseInsensitive: "Wählen Sie diese Option aus, wenn Groß- und Kleinbuchstaben im regulären Ausdruck als gleichwertig behandelt werden müssen.",
    // "Choose from: \"Static\" - sets a fixed width; \"Responsive\" - makes the survey occupy the full width of the screen; \"Auto\" - applies either of the two depending on the question types used."
    widthMode: "Wählen Sie aus: \"Statisch\" - legt eine feste Breite fest; \"Responsive\" - lässt die Umfrage die gesamte Breite des Bildschirms einnehmen; \"Auto\" - wendet je nach verwendetem Fragetyp einen der beiden an.",
    // [Auto-translated] "Assign a unique cookie value for your survey. The cookie will be set in a respondent's browser upon survey completion to prevent repetitive survey submissions."
    cookieName: "Weisen Sie Ihrer Umfrage einen eindeutigen Cookie-Wert zu. Das Cookie wird nach Abschluss der Umfrage im Browser eines Befragten gesetzt, um wiederholte Umfrageeinreichungen zu verhindern.",
    // [Auto-translated] "Paste an image link (no size limits) or click the folder icon to browse a file from your computer (up to 64KB)."
    logo: "Fügen Sie einen Bildlink ein (keine Größenbeschränkung) oder klicken Sie auf das Ordnersymbol, um eine Datei von Ihrem Computer (bis zu 64 KB) zu durchsuchen.",
    // [Auto-translated] "Sets a logo width in CSS units (px, %, in, pt, etc.)."
    logoWidth: "Legt eine Logobreite in CSS-Einheiten (px, %, in, pt usw.) fest.",
    // [Auto-translated] "Sets a logo height in CSS units (px, %, in, pt, etc.)."
    logoHeight: "Legt die Höhe eines Logos in CSS-Einheiten (px, %, in, pt usw.) fest.",
    // "Choose from: \"None\" - image maintains its original size; \"Contain\" - image is resized to fit while maintaining its aspect ratio; \"Cover\" - image fills the entire box while maintaining its aspect ratio; \"Fill\" - image is stretched to fill the box without maintaining its aspect ratio."
    logoFit: "Wählen Sie aus: \"Keine\" - das Bild behält seine ursprüngliche Größe; \"Enthalten\" - die Größe des Bildes wird angepasst, wobei das Seitenverhältnis beibehalten wird. \"Cover\" - das Bild füllt den gesamten Rahmen aus, während das Seitenverhältnis beibehalten wird. \"Füllen\" - Das Bild wird gestreckt, um den Rahmen auszufüllen, ohne das Seitenverhältnis beizubehalten.",
    // [Auto-translated] "Select if you want the survey to auto-advance to the next page once a respondent has answered all questions on the current page. This feature won't apply if the last question on the page is open-ended or allows multiple answers."
    autoAdvanceEnabled: "Wählen Sie aus, ob die Umfrage automatisch zur nächsten Seite wechseln soll, sobald ein Befragter alle Fragen auf der aktuellen Seite beantwortet hat. Diese Funktion wird nicht angewendet, wenn die letzte Frage auf der Seite offen ist oder mehrere Antworten zulässt.",
    // [Auto-translated] "Select if you want the survey to complete automatically after a respondent answers all questions."
    autoAdvanceAllowComplete: "Wählen Sie diese Option aus, wenn die Umfrage automatisch abgeschlossen werden soll, nachdem ein Befragter alle Fragen beantwortet hat.",
    // [Auto-translated] "Sets the visibility of navigation buttons on a page."
    showNavigationButtons: "Legt die Sichtbarkeit von Navigationsschaltflächen auf einer Seite fest.",
    // [Auto-translated] "Sets the location of navigation buttons on a page."
    navigationButtonsLocation: "Legt die Position der Navigationsschaltflächen auf einer Seite fest.",
    // [Auto-translated] "Enable the preview page with all or answered questions only."
    showPreviewBeforeComplete: "Aktivieren Sie die Vorschauseite nur mit allen oder beantworteten Fragen.",
    // "Applies to all questions within the survey. This setting can be overridden by title alignment rules at lower levels: panel, page, or question. A lower-level setting will override those on a higher level."
    questionTitleLocation: "Gilt für alle Fragen innerhalb der Umfrage. Diese Einstellung kann durch Regeln für die Titelausrichtung auf niedrigeren Ebenen außer Kraft gesetzt werden: Bereich, Seite oder Frage. Eine Einstellung auf niedrigerer Ebene überschreibt die Einstellung auf einer höheren Ebene.",
    // [Auto-translated] "A symbol or a sequence of symbols indicating that an answer is required."
    requiredMark: "Ein Symbol oder eine Sequenz von Symbolen, die darauf hinweist, dass eine Antwort erforderlich ist.",
    // [Auto-translated] "Enter a number or letter with which you want to start numbering."
    questionStartIndex: "Geben Sie eine Zahl oder einen Buchstaben ein, mit der Sie die Nummerierung beginnen möchten.",
    // "Sets the location of an error message in relation to the question with invalid input. Choose between: \"Top\" - an error text is placed at the top of the question box; \"Bottom\" - an error text is placed at the bottom of the question box."
    questionErrorLocation: "Legt die Position einer Fehlermeldung in Bezug auf die Frage mit ungültiger Eingabe fest. Wählen Sie zwischen: \"Oben\" - ein Fehlertext wird am oberen Rand des Fragefelds platziert; \"Unten\" - ein Fehlertext wird am unteren Rand des Fragefelds platziert.",
    // [Auto-translated] "Select if you want the first input field on each page ready for text entry."
    autoFocusFirstQuestion: "Wählen Sie diese Option aus, wenn das erste Eingabefeld auf jeder Seite für die Texteingabe bereit sein soll.",
    // "Keeps the original order of questions or randomizes them. The effect of this setting is only visible in the Preview tab."
    questionOrder: "Behält die ursprüngliche Reihenfolge der Fragen bei oder randomisiert sie. Die Auswirkungen dieser Einstellung sind nur auf dem Tab \"Vorschau\" sichtbar.",
    // [Auto-translated] "For text entry questions only."
    maxTextLength: "Nur für Fragen zur Texteingabe.",
    // [Auto-translated] "For question comments only."
    maxCommentLength: "Nur für Fragenkommentare.",
    // [Auto-translated] "Sets the number of displayed lines in text areas for question comments. If the input takes up more lines, the scroll bar appears."
    commentAreaRows: "Legt die Anzahl der angezeigten Zeilen in Textbereichen für Fragenkommentare fest. Wenn die Eingabe mehr Zeilen einnimmt, wird die Bildlaufleiste angezeigt.",
    // [Auto-translated] "Select if you want question comments and Long Text questions to auto-grow in height based on the entered text length."
    autoGrowComment: "Wählen Sie diese Option aus, wenn Fragenkommentare und Langtextfragen basierend auf der eingegebenen Textlänge automatisch in die Höhe wachsen sollen.",
    // [Auto-translated] "For question comments and Long Text questions only."
    allowResizeComment: "Nur für Fragenkommentare und Langtextfragen.",
    // [Auto-translated] "Custom variables serve as intermediate or auxiliary variables used in form calculations. They take respondent inputs as source values. Each custom variable has a unique name and an expression it's based on."
    calculatedValues: "Benutzerdefinierte Variablen dienen als Zwischen- oder Hilfsvariablen, die in Formularberechnungen verwendet werden. Sie nehmen die Eingaben der Befragten als Quellwerte. Jede benutzerdefinierte Variable hat einen eindeutigen Namen und einen Ausdruck, auf dem sie basiert.",
    // [Auto-translated] "Select if you wish the calculated value of the expression to be saved along with survey results."
    includeIntoResult: "Wählen Sie diese Option aus, wenn der berechnete Wert des Ausdrucks zusammen mit den Umfrageergebnissen gespeichert werden soll.",
    // "A trigger is an event or condition that is based on an expression. Once the expression is evaluated to \"true\", a trigger sets off an action. Such an action can optionally have a target question it affects."
    triggers: "Ein Auslöser ist ein Ereignis oder eine Bedingung, die auf einem Ausdruck basiert. Sobald der Ausdruck als \"true\" ausgewertet wird, löst ein Auslöser eine Aktion aus. Eine solche Aktion kann optional eine Zielfrage haben, auf die sie sich auswirkt.",
    // [Auto-translated] "Choose whether or not to clear values for questions hidden by conditional logic and when to do it."
    clearInvisibleValues: "Wählen Sie aus, ob und wann Werte für Fragen, die durch bedingte Logik ausgeblendet werden, gelöscht werden sollen.",
    // "Choose from: \"On lost focus\" - the value is updated when the input field loses focus; \"While typing\" - the value is updated in real-time, as users are typing."
    textUpdateMode: "Wählen Sie aus: \"Bei Fokusverlust\" - der Wert wird aktualisiert, wenn das Eingabefeld den Fokus verliert; \"Während der Eingabe\" - der Wert wird in Echtzeit aktualisiert, während Benutzer tippen.",
    // [Auto-translated] "The left value serves as a column ID used in conditional rules, the right value is displayed to respondents."
    columns: "Der linke Wert dient als Spalten-ID, die in bedingten Regeln verwendet wird, der rechte Wert wird den Befragten angezeigt.",
    // "The left value serves as a row ID used in conditional rules, the right value is displayed to respondents."
    rows: "Der linke Wert dient als Zeilen-ID, die in bedingten Regeln verwendet wird, der rechte Wert wird den Befragten angezeigt.",
    // [Auto-translated] "Accepts CSS values (px, %, in, pt, etc.)."
    columnMinWidth: "Akzeptiert CSS-Werte (px, %, in, pt usw.).",
    // [Auto-translated] "Accepts CSS values (px, %, in, pt, etc.)."
    rowTitleWidth: "Akzeptiert CSS-Werte (px, %, in, pt usw.).",
    // [Auto-translated] "Visible only if at least one column displays total values set with \"Aggregation method\" or \"Total value expression\"."
    totalText: "Nur sichtbar, wenn in mindestens einer Spalte Gesamtwerte angezeigt werden, die mit \"Aggregationsmethode\" oder \"Gesamtwertausdruck\" festgelegt wurden.",
    // "Sets the location of an error message in relation to a cell with invalid input. The \"Inherit\" option applies the setting from the \"Error message alignment\" property."
    cellErrorLocation: "Legt die Position einer Fehlermeldung in Bezug auf eine Zelle mit ungültiger Eingabe fest. Die Option \"Vererben\" übernimmt die Einstellung aus der Eigenschaft \"Fehlermeldungsausrichtung\".",
    // "Sets the location of error messages for questions nested in detail sections. The \"Inherit\" option applies the setting from the \"Error message alignment\" property."
    detailErrorLocation: "Legt die Position von Fehlermeldungen für Fragen fest, die in Detailabschnitten verschachtelt sind. Die Option \"Vererben\" wendet die Einstellung aus der Eigenschaft \"Ausrichtung der Fehlermeldung\" an.",
    // "When the \"Prevent duplicate responses\" property is enabled, a respondent attempting to submit a duplicate entry will receive the following error message."
    keyDuplicationError: "Wenn die Eigenschaft \"Doppelte Beantwortungen verhindern\" aktiviert ist, erhält ein Befragter, der versucht, einen doppelten Beitrag einzureichen, die folgende Fehlermeldung.",
    // [Auto-translated] "Allows you to calculate total values based on an expression. The expression can include basic calculations (`{q1_id} + {q2_id}`), Boolean expressions (`{age} > 60`) and functions ('iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, etc.)."
    totalExpression: "Hiermit können Sie Gesamtwerte basierend auf einem Ausdruck berechnen. Der Ausdruck kann grundlegende Berechnungen ('{q1_id} + {q2_id}'), boolesche Ausdrücke ('{age} > 60') und Funktionen ('iif()', 'today()', 'age()', 'min()', 'max()', 'avg()' usw.) enthalten.",
    // "Reference a column ID to require a user to provide a unique response for each question within the specified column."
    keyName: "Wenn die angegebene Spalte identische Werte enthält, löst die Umfrage den Fehler \"Nicht eindeutiger Schlüsselwert\" aus.",
    // "Type a subtitle."
    description: "Geben Sie einen Untertitel ein.",
    // [Auto-translated] "Choose a language to begin creating your survey. To add a translation, switch to a new language and translate the original text here or in the Translations tab."
    locale: "Wählen Sie eine Sprache aus, um mit der Erstellung Ihrer Umfrage zu beginnen. Um eine Übersetzung hinzuzufügen, wechseln Sie in eine neue Sprache und übersetzen Sie den Originaltext hier oder auf dem Tab \"Übersetzungen\".",
    // "Sets the location of a detail section in relation to a row. Choose from: \"None\" - no detail section is added; \"Under the row\" - a detail section is placed under each row of the matrix; \"Under the row, display one detail section only\" - a detail section is displayed under a single row only, the remaining sections are collapsed."
    detailPanelMode: "Legt die Position eines Detailabschnitts in Bezug auf eine Zeile fest. Wählen Sie aus: \"Keine\" - es wird keine Erweiterung hinzugefügt; \"Unter der Zeile\" - unter jeder Zeile der Matrix wird eine Zeilenerweiterung platziert; \"Unter der Zeile nur eine Zeilenerweiterung anzeigen\" - eine Erweiterung wird nur unter einer einzelnen Zeile angezeigt, die restlichen Zeilenerweiterungen werden ausgeblendet.",
    // "Choose from: \"None\" - image maintains its original size; \"Contain\" - image is resized to fit while maintaining its aspect ratio; \"Cover\" - image fills the entire box while maintaining its aspect ratio; \"Fill\" - image is stretched to fill the box without maintaining its aspect ratio."
    imageFit: "Wählen Sie aus: \"Keine\" - das Bild behält seine ursprüngliche Größe; \"Enthalten\" - die Größe des Bildes wird angepasst, wobei das Seitenverhältnis beibehalten wird. \"Cover\" - das Bild füllt den gesamten Rahmen aus, während das Seitenverhältnis beibehalten wird. \"Füllen\" - Das Bild wird gestreckt, um den Rahmen auszufüllen, ohne das Seitenverhältnis beizubehalten.",
    // "The \"Inherit\" option applies a survey-level setting (\"Disabled\" by default)."
    autoGrow: "Erhöht die Höhe des Eingabefelds schrittweise, während Daten eingegeben werden. Überschreibt die Einstellung \"Höhe des Eingabefelds (in Zeilen)\".",
    // [Auto-translated] "The \"Inherit\" option applies a survey-level setting (\"Enabled\" by default)."
    allowResize: "Die Option \"Vererben\" wendet eine Einstellung auf Umfrageebene an (\"standardmäßig aktiviert\").",
    // [Auto-translated] "A time interval in seconds after which the survey auto-advances to the \"Thank You\" page. When set to 0, counts the time spent on the survey."
    timeLimit: "Ein Zeitintervall in Sekunden, nach dem die Umfrage automatisch zur \"Danke\"-Seite übergeht. Wenn der Wert auf 0 festgelegt ist, wird die Zeit gezählt, die für die Umfrage aufgewendet wurde.",
    // [Auto-translated] "A time interval in seconds after which the survey auto-advances to the next page. Hides the \"Previous\" navigation button. When set to 0, counts the time spent on the current page."
    timeLimitPerPage: "Ein Zeitintervall in Sekunden, nach dem der Survey automatisch zur nächsten Seite wechselt. Blendet die Navigationsschaltfläche \"Zurück\" aus. Wenn diese Option auf 0 festgelegt ist, wird die Zeit gezählt, die auf der aktuellen Seite verbracht wurde.",
    // [Auto-translated] "Enable this option to trigger validation when a user focuses on an empty input field and then leaves it without making any changes."
    validateVisitedEmptyFields: "Aktivieren Sie diese Option, um die Validierung auszulösen, wenn sich ein Benutzer auf ein leeres Eingabefeld konzentriert und es dann verlässt, ohne Änderungen vorzunehmen.",
    page: {
      // "A page ID that is not visible to respondents."
      name: "Eine Seiten-ID, die für die Befragten nicht sichtbar ist.",
      // "Type a page subtitle."
      description: "Geben Sie einen Seitenuntertitel ein.",
      // "A caption displayed on a navigation button in the progress bar or table of contents (TOC). If you leave this field empty, the navigation button will use the page title or page name. To enable the progress bar or TOC, go to \"Survey\" → \"Navigation\"."
      navigationTitle: "Eine Beschriftung, die auf einer Navigationsschaltfläche in der Fortschrittsleiste oder im Inhaltsverzeichnis angezeigt wird. Wenn Sie dieses Feld leer lassen, verwendet die Navigationsschaltfläche den Seitentitel oder den Seitennamen. Um den Fortschrittsbalken oder das Inhaltsverzeichnis zu aktivieren, gehen Sie zu \"Umfrage\" → \"Navigation\".",
      // "A time interval in seconds after which the survey auto-advances to the next page. Hides the \"Previous\" navigation button. When set to 0, counts the time spent on the current page."
      timeLimit: "Ein Zeitintervall in Sekunden, nach dem die Umfrage automatisch zur nächsten Seite wechselt.",
      // "Use the magic wand icon to set a conditional rule that determines page visibility."
      visibleIf: "Verwenden Sie das Zauberstabsymbol, um eine bedingte Regel festzulegen, die die Sichtbarkeit der Seite bestimmt.",
      // [Auto-translated] "Use the magic wand icon to set a conditional rule that disables the read-only mode for the page."
      enableIf: "Verwenden Sie das Zauberstabsymbol, um eine bedingte Regel festzulegen, die den schreibgeschützten Modus für die Seite deaktiviert.",
      // "Use the magic wand icon to set a conditional rule that prevents survey submission unless at least one nested question has an answer."
      requiredIf: "Verwenden Sie das Zauberstabsymbol, um eine bedingte Regel festzulegen, die die Übermittlung von Umfragen verhindert, es sei denn, mindestens eine verschachtelte Frage enthält eine Antwort.",
      // "Applies to all questions within this page. When set to \"Hidden\", it also hides question descriptions. If you want to override this setting, define title alignment rules for individual questions or panels. The \"Inherit\" option applies the survey-level setting (\"Top\" by default)."
      questionTitleLocation: "Gilt für alle Fragen auf dieser Seite. Wenn Sie diese Einstellung außer Kraft setzen möchten, definieren Sie Regeln für die Titelausrichtung für einzelne Fragen oder Bereiche. Die Option \"Vererben\" wendet die Einstellung auf Umfrageebene an (standardmäßig \"Oben\").",
      // [Auto-translated] "Sets consistent width for question titles when they are aligned to the left of their question boxes. Accepts CSS values (px, %, in, pt, etc.)."
      questionTitleWidth: "Legt eine konsistente Breite für Fragetitel fest, wenn sie links neben den Fragefeldern ausgerichtet sind. Akzeptiert CSS-Werte (px, %, in, pt usw.).",
      // "Sets the location of an error message in relation to the question with invalid input. Choose between: \"Top\" - an error text is placed at the top of the question box; \"Bottom\" - an error text is placed at the bottom of the question box. The \"Inherit\" option applies the survey-level setting (\"Top\" by default)."
      questionErrorLocation: "Legt die Position einer Fehlermeldung in Bezug auf die Frage mit ungültiger Eingabe fest. Wählen Sie zwischen: \"Oben\" - ein Fehlertext wird am oberen Rand des Fragefelds platziert; \"Unten\" - ein Fehlertext wird am unteren Rand des Fragefelds platziert. Die Option \"Vererben\" wendet die Einstellung auf Umfrageebene an (standardmäßig \"Oben\").",
      // "Keeps the original order of questions or randomizes them. The \"Inherit\" option applies the survey-level setting (\"Original\" by default). The effect of this setting is only visible in the Preview tab."
      questionOrder: "Behält die ursprüngliche Reihenfolge der Fragen bei oder randomisiert sie. Mit der Option \"Vererben\" wird die Einstellung auf Umfrageebene (\"Original\" standardmäßig) angewendet. Die Auswirkungen dieser Einstellung sind nur auf dem Tab \"Vorschau\" sichtbar.",
      // "Sets the visibility of navigation buttons on the page. The \"Inherit\" option applies the survey-level setting, which defaults to \"Visible\"."
      showNavigationButtons: "Legt die Sichtbarkeit von Navigationsschaltflächen auf der Seite fest. Mit der Option \"Vererben\" wird die Einstellung auf Umfrageebene angewendet, die standardmäßig auf \"Sichtbar\" eingestellt ist.",
      // [Auto-translated] "This table lets you configure each grid column on the page. It automatically sets the width percentage for each column based on the maximum number of elements in a row. To customize the grid layout, manually adjust these values and define the title width for all questions in each column."
      gridLayoutColumns: "In dieser Tabelle können Sie jede Rasterspalte auf der Seite konfigurieren. Der Breitenprozentsatz für jede Spalte wird automatisch basierend auf der maximalen Anzahl von Elementen in einer Zeile festgelegt. Um das Rasterlayout anzupassen, passen Sie diese Werte manuell an und definieren Sie die Titelbreite für alle Fragen in jeder Spalte."
    },
    // [Auto-translated] "Sets the location of a timer on a page."
    timerLocation: "Legt die Position eines Timers auf einer Seite fest.",
    // "Choose from: \"Locked\" - users cannot expand or collapse entries; \"Collapse all\" - all entries start in a collapsed state; \"Expand all\" - all entries start in an expanded state; \"First expanded\" - only the first entry is initially expanded. Applies if \"Entry display mode\" is set to \"List\" and the \"Entry title pattern\" property is specified."
    panelsState: "Wählen Sie aus: \"Gesperrt\" - Benutzer können Panele nicht erweitern oder reduzieren; \"Alle ausblenden\" - alle Panele beginnen in einem zusammengeklappten Zustand; \"Alle erweitern\" - alle Panele beginnen in einem erweiterten Zustand; \"First expanded\" - nur das erste Panel wird zunächst erweitert.",
    // [Auto-translated] "Enter a shared property name within the array of objects that contains the image or video file URLs you want to display in the choice list."
    imageLinkName: "Geben Sie einen freigegebenen Eigenschaftsnamen in das Array von Objekten ein, das die Bild- oder Videodatei-URLs enthält, die in der Auswahlliste angezeigt werden sollen.",
    // "The left value serves as an item ID used in conditional rules, the right value is displayed to respondents."
    choices: "Der linke Wert dient als Element-ID, die in bedingten Regeln verwendet wird, der rechte Wert wird den Befragten angezeigt.",
    // [Auto-translated] "Type a user-friendly title to display."
    title: "Geben Sie einen benutzerfreundlichen Titel ein, der angezeigt werden soll.",
    // [Auto-translated] "Ensures that users won't complete the survey until files are uploaded."
    waitForUpload: "Stellt sicher, dass Benutzer die Umfrage erst abschließen, wenn die Dateien hochgeladen wurden.",
    // [Auto-translated] "Accepts CSS values (px, %, in, pt, etc.)."
    minWidth: "Akzeptiert CSS-Werte (px, %, in, pt usw.).",
    // [Auto-translated] "Accepts CSS values (px, %, in, pt, etc.)."
    maxWidth: "Akzeptiert CSS-Werte (px, %, in, pt usw.).",
    // "Accepts CSS values (px, %, in, pt, etc.)."
    width: "Akzeptiert CSS-Werte (px, %, in, pt usw.).",
    // [Auto-translated] "A join identifier is a custom key that you can assign to several questions to link them together and sync their values. These values will be merged into a single array or object and stored in survey results using the key as the property name."
    valueName: "Ein Join-Bezeichner ist ein benutzerdefinierter Schlüssel, den Sie mehreren Fragen zuweisen können, um sie miteinander zu verknüpfen und ihre Werte zu synchronisieren. Diese Werte werden in einem einzelnen Array oder Objekt zusammengeführt und in den Umfrageergebnissen gespeichert, wobei der Schlüssel als Eigenschaftsname verwendet wird.",
    // [Auto-translated] "A value displayed in HTML questions and in the dynamic titles and descriptions of survey elements when the question value is empty."
    defaultDisplayValue: "Ein Wert, der in HTML-Fragen und in den dynamischen Titeln und Beschreibungen von Umfrageelementen angezeigt wird, wenn der Fragewert leer ist.",
    // [Auto-translated] "In single- and multiple-selection question types, each choice option has an ID and display value. When selected, this setting shows a display value instead of an ID value in HTML questions and dynamic titles and descriptions of survey elements."
    useDisplayValuesInDynamicTexts: "Bei Fragetypen mit einfacher und mehrfacher Auswahl verfügt jede Auswahloption über eine ID und einen Anzeigewert. Wenn diese Einstellung aktiviert ist, wird in HTML-Fragen und dynamischen Titeln und Beschreibungen von Umfrageelementen ein Anzeigewert anstelle eines ID-Werts angezeigt.",
    // "Choose whether or not to clear question values hidden by conditional logic and when to do it. The \"Inherit\" option applies the survey-level setting (\"Upon survey completion\" by default)."
    clearIfInvisible: "Wählen Sie aus, ob und wann Fragenwerte, die durch bedingte Logik ausgeblendet werden, gelöscht werden sollen. Die Option \"Vererben\" wendet die Einstellung auf Umfrageebene an (standardmäßig \"Nach Abschluss der Umfrage\").",
    // "Choose from: \"All\" - copies all choice options from the selected question; \"Selected\" - dynamically copies only selected choice options; \"Unselected\" - dynamically copies only unselected choice options. The \"None\" and \"Other\" options are copied by default if enabled in the source question."
    choicesFromQuestionMode: "Wählen Sie aus: \"Alle\" - kopiert alle Auswahloptionen aus der ausgewählten Frage; \"Ausgewählt\" - kopiert dynamisch nur ausgewählte Auswahloptionen; \"Nicht ausgewählt\" - kopiert dynamisch nur nicht ausgewählte Auswahloptionen. Die Optionen \"Keine\" und \"Sonstiges\" werden standardmäßig kopiert, wenn sie in der Quellfrage aktiviert sind.",
    // [Auto-translated] "In single- and multiple-selection question types, each choice option has an ID and display value. This setting specifies which matrix column or panel question should provide the IDs."
    choiceValuesFromQuestion: "Bei Fragetypen mit Einzel- und Mehrfachauswahl verfügt jede Auswahloption über eine ID und einen Anzeigewert. Diese Einstellung gibt an, welche Matrixspalten- oder Bereichsfrage die IDs bereitstellen soll.",
    // [Auto-translated] "In single- and multiple-selection question types, each choice option has an ID and display value. This setting specifies which matrix column or panel question should provide the display texts."
    choiceTextsFromQuestion: "Bei Fragetypen mit Einzel- und Mehrfachauswahl verfügt jede Auswahloption über eine ID und einen Anzeigewert. Diese Einstellung legt fest, welche Matrix-, Spalten- oder Bereichsfrage die Anzeigetexte bereitstellen soll.",
    // [Auto-translated] "Select to let respondents add their own choices if the desired option isn't available in the dropdown. Custom choices will only be stored temporarily for the duration of the current browser session."
    allowCustomChoices: "Wählen Sie diese Option aus, damit die Befragten ihre eigenen Auswahlmöglichkeiten hinzufügen können, wenn die gewünschte Option nicht in der Dropdown-Liste verfügbar ist. Benutzerdefinierte Auswahlmöglichkeiten werden nur für die Dauer der aktuellen Browsersitzung vorübergehend gespeichert.",
    // [Auto-translated] "When selected, users can include additional input in a separate comment box."
    showOtherItem: "Wenn diese Option ausgewählt ist, können Benutzer zusätzliche Eingaben in ein separates Kommentarfeld einfügen.",
    // "Displays each special choice option (\"None\", \"Other\", \"Select All\") on a new line, even when using a multiple-column layout."
    separateSpecialChoices: "Zeigt jede spezielle Auswahloption (\"Keine\", \"Andere\", \"Alle auswählen\") in einer neuen Zeile an, auch wenn ein mehrspaltiges Layout verwendet wird.",
    // [Auto-translated] "Specify the location within the service dataset where the target array of objects is located. Leave empty if the URL already points to the array."
    path: "Geben Sie die Position innerhalb des Service-Datasets an, an der sich das Ziel-Array von Objekten befindet. Lassen Sie das Feld leer, wenn die URL bereits auf das Array verweist.",
    choicesbyurl: {
      // "Enter a uniform property name within the array of objects whose value will be stored as a response in survey results."
      valueName: " "
    },
    // [Auto-translated] "Enter a uniform property name within the array of objects that contains the values you want to display in the choice list."
    titleName: "Geben Sie innerhalb des Objektarrays einen einheitlichen Eigenschaftsnamen ein, der die Werte enthält, die in der Auswahlliste angezeigt werden sollen.",
    // [Auto-translated] "Select to allow the service to return an empty response or array."
    allowEmptyResponse: "Wählen Sie diese Option aus, damit der Dienst eine leere Antwort oder ein leeres Array zurückgeben kann.",
    // [Auto-translated] "Use the magic wand icon to set a conditional rule that determines the visibility of all choice options."
    choicesVisibleIf: "Verwenden Sie das Zauberstabsymbol, um eine Bedingungsregel festzulegen, die die Sichtbarkeit aller Auswahloptionen bestimmt.",
    // [Auto-translated] "The left value serves as an item ID used in conditional rules, the right value is displayed to respondents."
    rateValues: "Der linke Wert dient als Element-ID, die in bedingten Regeln verwendet wird, der rechte Wert wird den Befragten angezeigt.",
    rating: {
      // "\"Auto\" selects between the \"Buttons\" and \"Dropdown\" modes based on the available width. When the width is insufficient to display buttons, the question displays a dropdown."
      displayMode: "\"Auto\" wählt zwischen den Modi \"Buttons\" und \"Dropdown\" basierend auf der verfügbaren Breite. Wenn die Breite nicht ausreicht, um Schaltflächen anzuzeigen, wird für die Frage ein Dropdown-Menü angezeigt."
    },
    // [Auto-translated] "Allows you to connect questions that produce results in different formats. When such questions are linked together using a join identifier, this shared property stores selected question values."
    valuePropertyName: "Ermöglicht es Ihnen, Fragen zu verbinden, die Ergebnisse in verschiedenen Formaten liefern. Wenn solche Fragen mithilfe eines Verknüpfungsbezeichners miteinander verknüpft sind, speichert diese gemeinsam genutzte Eigenschaft ausgewählte Fragewerte.",
    // [Auto-translated] "Select if you want to update the drop-down menu contents to match the search query that a user is typing in the input field."
    searchEnabled: "Wählen Sie diese Option aus, wenn Sie den Inhalt des Dropdown-Menüs so aktualisieren möchten, dass er der Suchabfrage entspricht, die ein Benutzer in das Eingabefeld eingibt.",
    // [Auto-translated] "A value to save in survey results when respondents give a positive answer."
    valueTrue: "Ein Wert, der in den Umfrageergebnissen gespeichert werden soll, wenn die Befragten eine positive Antwort geben.",
    // [Auto-translated] "A value to save in survey results when respondents give a negative answer."
    valueFalse: "Ein Wert, der in den Umfrageergebnissen gespeichert werden soll, wenn die Befragten eine negative Antwort geben.",
    // [Auto-translated] "It's not recommended that you disable this option as it overrides the Preview image and makes it hard for a user to understand whether the files have been uploaded."
    showPreview: "Es wird nicht empfohlen, diese Option zu deaktivieren, da sie das Vorschaubild überschreibt und es für einen Benutzer schwierig macht, zu verstehen, ob die Dateien hochgeladen wurden.",
    // [Auto-translated] "Triggers a prompt asking to confirm the file deletion."
    needConfirmRemoveFile: "Löst eine Eingabeaufforderung aus, in der Sie aufgefordert werden, das Löschen der Datei zu bestätigen.",
    // [Auto-translated] "Enable to rank only selected choices. Users will drag selected items from the choice list to order them within the ranking area."
    selectToRankEnabled: "Aktivieren Sie diese Option, um nur ausgewählte Auswahlmöglichkeiten in eine Rangfolge zu bringen. Benutzer ziehen ausgewählte Elemente aus der Auswahlliste, um sie innerhalb des Ranking-Bereichs zu sortieren.",
    // [Auto-translated] "Enter a list of choices that will be suggested to the respondent during input."
    dataList: "Geben Sie eine Liste mit Auswahlmöglichkeiten ein, die dem Befragten während der Eingabe vorgeschlagen werden.",
    // [Auto-translated] "The setting only resizes the input fields and doesn't affect the width of the question box."
    inputSize: "Die Einstellung ändert nur die Größe der Eingabefelder und wirkt sich nicht auf die Breite des Fragefelds aus.",
    // [Auto-translated] "Sets consistent width for all item labels. Accepts CSS values (px, %, in, pt, etc.)."
    itemTitleWidth: "Legt die einheitliche Breite für alle Elementbeschriftungen fest. Akzeptiert CSS-Werte (px, %, in, pt usw.).",
    // "Select how to align input value within the field. The default setting \"Auto\" aligns the input value to the right if currency or numeric masking is applied and to the left if not."
    inputTextAlignment: "Wählen Sie aus, wie der Eingabewert innerhalb des Felds ausgerichtet werden soll. Die Standardeinstellung \"Auto\" richtet den Eingabewert nach rechts aus, wenn eine Währungs- oder numerische Maskierung angewendet wird, und nach links, wenn dies nicht der Fall ist.",
    // [Auto-translated] "Serves as a substitute when the image cannot be displayed on a user's device and for accessibility purposes."
    altText: "Dient als Ersatz, wenn das Bild nicht auf dem Gerät eines Benutzers angezeigt werden kann, und aus Gründen der Barrierefreiheit.",
    // "Defines the color of the selected emoji when the Rating icon type is set to \"Smileys\". Choose between: \"Default\" - the selected emoji appears in default survey color; \"Scale\" - the selected emoji inherits color from the rating scale."
    rateColorMode: "Definiert die Farbe des ausgewählten Emojis, wenn der Symboltyp \"Bewertung\" auf \"Smileys\" eingestellt ist. Wählen Sie zwischen: \"Standard\" - das ausgewählte Emoji erscheint in der Standardfarbe der Umfrage; \"Skala\" - das ausgewählte Emoji erbt die Farbe von der Bewertungsskala.",
    expression: {
      // "An expression ID that is not visible to respondents."
      name: "Eine Ausdrucks-ID, die für die Befragten nicht sichtbar ist.",
      // "Type an expression subtitle."
      description: "Geben Sie einen Ausdrucksuntertitel ein.",
      // "An expression can include basic calculations (`{q1_id} + {q2_id}`), conditions (`{age} > 60`), and functions ('iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, etc.)."
      expression: "Ein Ausdruck kann grundlegende Berechnungen ('{q1_id} + {q2_id}'), Bedingungen ('{age} > 60') und Funktionen ('iif()', 'today()', 'age()', 'min()', 'max()', 'avg()' usw.) enthalten."
    },
    // "Select to store the \"Other\" option value as a separate property in survey results."
    storeOthersAsComment: "Wählen Sie diese Option aus, um den Wert der Option \"Sonstiges\" als separate Eigenschaft in den Umfrageergebnissen zu speichern.",
    // [Auto-translated] "Use {0} as a placeholder for the actual value."
    format: "Verwenden Sie {0} als Platzhalter für den tatsächlichen Wert.",
    // [Auto-translated] "Refer to the [accept](https://www.w3schools.com/tags/att_input_accept.asp) attribute description for more information."
    acceptedTypes: "Weitere Informationen finden Sie in der Beschreibung des Attributs [accept](https://www.w3schools.com/tags/att_input_accept.asp).",
    // "Arranges choice options in a multi-column layout. When set to 0, the options are displayed in a single line. Applies only to columns with \"Cell input type\" set to Radio Button Group or Checkboxes."
    columnColCount: "Gilt nur für die Zellentypen \"Radiogruppe\" und \"Kontrollkästchen\".",
    // [Auto-translated] "Select the data type that the user's browser can retrieve. This data is sourced either from past values entered by the user or from pre-configured values if any have been saved by the user for autocompletion."
    autocomplete: "Wählen Sie den Datentyp aus, den der Browser des Benutzers abrufen kann. Diese Daten stammen entweder aus früheren Werten, die vom Benutzer eingegeben wurden, oder aus vorkonfigurierten Werten, falls diese vom Benutzer für die automatische Vervollständigung gespeichert wurden.",
    // "Applies when \"File source type\" is \"Local file\" or when camera is unavailable"
    filePlaceholder: "Gilt, wenn \"Quelltyp\" \"Lokale Dateien\" ist oder wenn die Kamera nicht verfügbar ist",
    // "Applies when \"File source type\" is \"Camera\"."
    photoPlaceholder: "Gilt, wenn der \"Quellentyp\" auf \"Kamera\" festgelegt ist.",
    // "Applies when \"File source type\" is \"Local file or camera\"."
    fileOrPhotoPlaceholder: "Gilt, wenn \"Quelltyp\" \"Lokale Dateien oder Kamera\" ist.",
    // "Arranges choice options in a multi-column layout. When set to 0, the options are displayed in a single line."
    colCount: "Ordnet die Auswahloptionen in einem mehrspaltigen Layout an. Wenn der Wert auf 0 gesetzt ist, werden die Optionen in einer einzigen Zeile angezeigt.",
    masksettings: {
      // "Select if you want to store the question value with an applied mask in survey results."
      saveMaskedValue: "Wählen Sie diese Option aus, wenn Sie den Fragewert mit einer angewendeten Maske in den Umfrageergebnissen speichern möchten."
    },
    patternmask: {
      // "The pattern can contain string literals and the following placeholders: `9` - for a digit; `a` - for an upper- or lower-case letter; `#` - for a digit or an upper- or lower-case letter. Use backslash `\\` to escape a character."
      pattern: "Das Muster kann Zeichenfolgenliterale und die folgenden Platzhalter enthalten: '9' - für eine Ziffer; \"a\" - für einen Groß- oder Kleinbuchstaben; '#' - für eine Ziffer oder einen Groß- oder Kleinbuchstaben. Verwenden Sie den umgekehrten Schrägstrich '\\', um ein Zeichen mit Escapezeichen zu versehen."
    },
    datetimemask: {
      // "The pattern can contain separator characters and the following placeholders:<br>`m` - Month number.<br>`mm` - Month number, with leading zero for single-digit values.<br>`d` - Day of the month.<br>`dd` - Day of the month, with leading zero for single-digit values.<br>`yy` - The last two digits of the year.<br>`yyyy` - Four-digit year.<br>`H` - Hours in 24-hour format.<br>`HH` - Hours in 24-hour format, with leading zero for single-digit values.<br>`h` - Hours in 12-hour format.<br>`hh` - Hours in 12-hour format, with leading zero for single-digit values.<br>`MM` - Minutes.<br>`ss` - Seconds.<br>`TT` - 12-hour clock period in upper case (AM/PM).<br>`tt` - 12-hour clock period in lower case (am/pm)."
      pattern: "Das Muster kann Trennzeichen und die folgenden Platzhalter enthalten:<br>'m' - Monatszahl.<br>'mm' - Monatszahl mit führender Null für einstellige Werte. <br>'d' - Tag des Monats. <br>'dd' - Tag des Monats mit führender Null für einstellige Werte. <br>'yy' - Die letzten beiden Ziffern des Jahres. <br>'yyyy' - Vierstellige Jahreszahl. <br>'H' - Stunden im 24-Stunden-Format. <br>'HH' - Stunden im 24-Stunden-Format, mit führender Null für einstellige Werte. <br>'h' - Stunden im 12-Stunden-Format. <br>'hh' - Stunden im 12-Stunden-Format, mit führender Null für einstellige Werte. <br>'MM' - Minuten. <br>'ss' - Sekunden. <br>'TT' - 12-Stunden-Takt in Großbuchstaben (AM/PM). <br>'tt' - 12-Stunden-Takt in Kleinbuchstaben (am/pm)."
    },
    numericmask: {
      // "A symbol used to separate the fractional part from the integer part of a displayed number."
      decimalSeparator: "Ein Symbol, das verwendet wird, um den Bruchteil vom ganzzahligen Teil einer angezeigten Zahl zu trennen.",
      // "A symbol used to separate the digits of a large number into groups of three."
      thousandsSeparator: "Ein Symbol, das verwendet wird, um die Ziffern einer großen Zahl in Dreiergruppen zu unterteilen.",
      // "Limits how many digits to retain after the decimal point for a displayed number."
      precision: "Schränkt die Anzahl der Nachkommastellen für eine angezeigte Zahl ein."
    },
    currencymask: {
      // "One or several symbols to be displayed before the value."
      prefix: "Ein oder mehrere Symbole, die vor dem Wert angezeigt werden sollen.",
      // "One or several symbols to be displayed after the value."
      suffix: "Ein oder mehrere Symbole, die nach dem Wert angezeigt werden sollen."
    },
    theme: {
      // "This setting applies only to questions outside of a panel."
      isPanelless: "Diese Einstellung gilt nur für Fragen außerhalb eines Bereichs.",
      // "Sets a supplementary color that highlights key survey elements."
      primaryColor: "Legt eine zusätzliche Farbe fest, in der wichtige Vermessungselemente hervorgehoben werden.",
      // "Adjusts the transparency of panels and question boxes relative to the survey background."
      panelBackgroundTransparency: "Passt die Transparenz von Panels und Fragefeldern relativ zum Umfragehintergrund an.",
      // "Adjusts the transparency of input elements relative to the survey background."
      questionBackgroundTransparency: "Passt die Transparenz der Eingabeelemente relativ zum Umfragehintergrund an.",
      // "Sets the corner radius for all rectangular elements. Enable the Advanced Mode if you want to set individual corner radius values for input elements or panels and question boxes."
      cornerRadius: "Legt den Eckradius für alle rechteckigen Elemente fest. Aktivieren Sie den erweiterten Modus, wenn Sie individuelle Eckenradiuswerte für Eingabeelemente oder Panels und Fragefelder festlegen möchten.",
      // "Sets the main background color of the survey."
      "--sjs-general-backcolor-dim": "Legt die Haupthintergrundfarbe der Umfrage fest."
    },
    header: {
      // "The \"Same as container\" option auto-adjusts the header content area width to fit into the HTML element the survey is placed in."
      inheritWidthFrom: "Die Option \"Wie Container\" passt die Breite des Inhaltsbereichs der Kopfzeile automatisch an das HTML-Element an, in dem die Umfrage platziert wird.",
      // [Auto-translated] "The width of the header area that contains the survey title and description, measured in pixels."
      textAreaWidth: "Die Breite des Kopfbereichs, der den Titel und die Beschreibung der Umfrage enthält, gemessen in Pixeln.",
      // [Auto-translated] "When enabled, the top of the survey overlays the bottom of the header."
      overlapEnabled: "Wenn diese Option aktiviert ist, überlagert der obere Rand der Umfrage den unteren Rand der Kopfzeile.",
      // [Auto-translated] "When set to 0, the height is calculated automatically to accommodate the header's content."
      mobileHeight: "Wenn der Wert auf 0 gesetzt ist, wird die Höhe automatisch berechnet, um den Inhalt der Kopfzeile aufzunehmen."
    },
    // "The \"Same as container\" option auto-adjusts the progress bar area width to fit into the HTML element the survey is placed in."
    progressBarInheritWidthFrom: "Die Option \"Wie Container\" passt die Breite des Fortschrittsbalkenbereichs automatisch an das HTML-Element an, in dem die Umfrage platziert wird.",
    // "Used when the 'Survey layout' is set to 'Single input field per page'. In this layout, the matrix is split so that each input field appears on a separate page. Use the {rowIndex} placeholder to insert auto numbering, {rowTitle} or {rowName} to reference the row's title or ID, and {row.columnid} to include the value of a specific matrix column."
    singleInputTitleTemplate: "Wird verwendet, wenn das \"Umfragelayout\" auf \"Einzeleingabefeld pro Seite\" eingestellt ist. In diesem Layout wird die Matrix so aufgeteilt, dass jedes Eingabefeld auf einer separaten Seite erscheint. Verwenden Sie den Platzhalter {rowIndex}, um die automatische Nummerierung einzufügen, {rowTitle} oder {rowName}, um auf den Titel oder die ID der Zeile zu verweisen, und {row.columnid}, um den Wert einer bestimmten Matrixspalte einzuschließen."
  },
  // Properties
  p: {
    title: {
      // "title"
      name: "Titel",
      // "Leave it empty, if it is the same as 'Name'"
      title: "Bitte leer lassen, falls gleich wie \"Name\""
    },
    // "Allow multiple selection"
    multiSelect: "Mehrfachauswahl",
    // "Show image and video captions"
    showLabel: "Label anzeigen",
    // [Auto-translated] "Swap the order of Yes and No"
    swapOrder: "Reihenfolge von Ja und Nein vertauschen",
    // [Auto-translated] "Value"
    value: "Wert",
    // [Auto-translated] "Tab alignment"
    tabAlign: "Ausrichtung der Tabs",
    // [Auto-translated] "File source type"
    sourceType: "Typ der Dateiquelle",
    // [Auto-translated] "Fit to container"
    fitToContainer: "Passend zum Behälter",
    // "Set value expression"
    setValueExpression: "Ausdruck \"Wert festlegen\"",
    // "Description"
    description: "Beschreibung", // Auto-generated string
    // "Logo fit"
    logoFit: "Passform des Logos",
    // "Pages"
    pages: "Seiten", // Auto-generated string
    // "Questions"
    questions: "Fragen", // Auto-generated string
    // "Triggers"
    triggers: "Auslöser",
    // "Custom variables"
    calculatedValues: "Berechnete Werte",
    // "Survey id"
    surveyId: "surveyId", // Auto-generated string
    // "Survey post id"
    surveyPostId: "surveyPostId", // Auto-generated string
    // "Survey show data saving"
    surveyShowDataSaving: "surveyShowDataSaving", // Auto-generated string
    // "Question description alignment"
    questionDescriptionLocation: "Position der Fragenbeschreibung",
    // "Progress bar type"
    progressBarType: "Fortschrittsbalkentyp", // Auto-generated string
    // "Show table of contents (TOC)"
    showTOC: "Inhaltsverzeichnis anzeigen",
    // [Auto-translated] "TOC alignment"
    tocLocation: "Ausrichtung des Inhaltsverzeichnisses",
    // "Question title pattern"
    questionTitlePattern: "Pattern für Fragentitel", // Auto-generated string
    // "Survey width mode"
    widthMode: "Modus für die Breite",
    // [Auto-translated] "Show brand info"
    showBrandInfo: "Markeninfo anzeigen", // Auto-generated string
    // "Use display values in dynamic texts"
    useDisplayValuesInDynamicTexts: "Verwende Anzeigewerte im Titel",
    // "Visible if"
    visibleIf: "Sichtbar wenn ...", // Auto-generated string
    // "Default value expression"
    defaultValueExpression: "Ausdruck für Standardwerte",
    // "Required if"
    requiredIf: "Erforderlich wenn ...", // Auto-generated string
    // [Auto-translated] "Reset value if"
    resetValueIf: "Wert zurücksetzen, wenn",
    // [Auto-translated] "Set value if"
    setValueIf: "Wert setzen, wenn",
    // "Validation rules"
    validators: "Validierungen",
    // "Bindings"
    bindings: "Bindings", // Auto-generated string
    // [Auto-translated] "Render as"
    renderAs: "Rendern als", // Auto-generated string
    // [Auto-translated] "Attach original items"
    attachOriginalItems: "Originalartikel anbringen", // Auto-generated string
    // "Choices"
    choices: "Auswahlmöglichkeiten",
    // "Choices by url"
    choicesByUrl: "Auswahlreihenfolge nach URL", // Auto-generated string
    // "Currency"
    currency: "Währung", // Auto-generated string
    // [Auto-translated] "Cell hint"
    cellHint: "Hinweis auf die Zelle", // Auto-generated string
    // "Total maximum fraction digits"
    totalMaximumFractionDigits: "Maximale Nachkommastellen insgesamt", // Auto-generated string
    // "Total minimum fraction digits"
    totalMinimumFractionDigits: "Minimale Nachkommastellen insgesamt", // Auto-generated string
    // "Columns"
    columns: "Spalten", // Auto-generated string
    // [Auto-translated] "Detail elements"
    detailElements: "Detail-Elemente", // Auto-generated string
    // [Auto-translated] "Allow adaptive actions"
    allowAdaptiveActions: "Adaptive Aktionen zulassen", // Auto-generated string
    // "Default row value"
    defaultRowValue: "Standardwert für Zeilen", // Auto-generated string
    // [Auto-translated] "Auto-expand new row details"
    detailPanelShowOnAdding: "Neue Zeilendetails automatisch erweitern",
    // [Auto-translated] "Choices lazy load enabled"
    choicesLazyLoadEnabled: "Auswahlmöglichkeiten Lazy Load aktiviert", // Auto-generated string
    // [Auto-translated] "Choices lazy load page size"
    choicesLazyLoadPageSize: "Auswahlmöglichkeiten Lazy Load-Seitengröße", // Auto-generated string
    // [Auto-translated] "Input field component"
    inputFieldComponent: "Eingabefeld-Komponente", // Auto-generated string
    // [Auto-translated] "Item component"
    itemComponent: "Artikelkomponente", // Auto-generated string
    // "Min"
    min: "Minimaler Wert", // Auto-generated string
    // "Max"
    max: "Maximaler Wert", // Auto-generated string
    // "Min value expression"
    minValueExpression: "Ausdruck für minimalen Wert", // Auto-generated string
    // "Max value expression"
    maxValueExpression: "Ausdruck für maximalen Wert", // Auto-generated string
    // "Step"
    step: "Schritt", // Auto-generated string
    // "Items for auto-suggest"
    dataList: "Datenliste",
    // "Input field width (in characters)"
    inputSize: "Elementgröße",
    // [Auto-translated] "Item label width"
    itemTitleWidth: "Breite des Artikeletiketts",
    // [Auto-translated] "Input value alignment"
    inputTextAlignment: "Ausrichtung der Eingabewerte",
    // "Elements"
    elements: "Elemente", // Auto-generated string
    // "Content"
    content: "Inhalt", // Auto-generated string
    // "Navigation title"
    navigationTitle: "Navigationstitel", // Auto-generated string
    // "Navigation description"
    navigationDescription: "Navigationsbeschreibung", // Auto-generated string
    // "Long tap"
    longTap: "langtippen", // Auto-generated string
    // "Expand input field dynamically"
    autoGrow: "Automatisch vergrößern",
    // [Auto-translated] "Enable resize handle"
    allowResize: "Aktivieren des Größenänderungsgriffs",
    // "Accept carriage return"
    acceptCarriageReturn: "akzeptieren CarriageReturn", // Auto-generated string
    // "Display mode"
    displayMode: "Anzeigemodus",
    // "Rate type"
    rateType: "Ansicht der Bewertungssymbole", // Auto-generated string
    // "Label"
    label: "Label", // Auto-generated string
    // "Content mode"
    contentMode: "Inhaltsmodus",
    // "Image and thumbnail fit"
    imageFit: "Passform des Bildes",
    // "Alt text"
    altText: "altText",
    // "Height"
    height: "Höhe", // Auto-generated string
    // [Auto-translated] "Height on smartphones"
    mobileHeight: "Höhe auf Smartphones",
    // "Pen color"
    penColor: "Stiftfarbe", // Auto-generated string
    // "Background color"
    backgroundColor: "Hintergrundfarbe",
    // "Template elements"
    templateElements: "VorlagenElemente", // Auto-generated string
    // "Operator"
    operator: "Operator", // Auto-generated string
    // "Is variable"
    isVariable: "istVariable", // Auto-generated string
    // "Run expression"
    runExpression: "Ausführen eines Ausdrucks", // Auto-generated string
    // "Show caption"
    showCaption: "Titel anzeigen", // Auto-generated string
    // "Icon name"
    iconName: "Name des Icons", // Auto-generated string
    // "Icon size"
    iconSize: "Größe des Icons", // Auto-generated string
    // [Auto-translated] "Precision"
    precision: "Präzision", // Auto-generated string
    // [Auto-translated] "Matrix drag handle area"
    matrixDragHandleArea: "Matrix-Ziehgriffbereich", // Auto-generated string
    // [Auto-translated] "Background image"
    backgroundImage: "Hintergrundbild",
    // [Auto-translated] "Background image fit"
    backgroundImageFit: "Anpassung des Hintergrundbildes", // Auto-generated string
    // [Auto-translated] "Background image attachment"
    backgroundImageAttachment: "Anhang des Hintergrundbildes", // Auto-generated string
    // [Auto-translated] "Background opacity"
    backgroundOpacity: "Deckkraft des Hintergrunds", // Auto-generated string
    // [Auto-translated] "Allow selective ranking"
    selectToRankEnabled: "Selektive Rangfolge zulassen",
    // [Auto-translated] "Ranking area alignment"
    selectToRankAreasLayout: "Ausrichtung des Rangfolgebereichs",
    // [Auto-translated] "Text to show if all options are selected"
    selectToRankEmptyRankedAreaText: "Text, der angezeigt werden soll, wenn alle Optionen ausgewählt sind",
    // [Auto-translated] "Placeholder text for the ranking area"
    selectToRankEmptyUnrankedAreaText: "Platzhaltertext für den Rankingbereich",
    // [Auto-translated] "Allow camera access"
    allowCameraAccess: "Kamerazugriff zulassen", // Auto-generated string
    // [Auto-translated] "Rating icon color mode"
    scaleColorMode: "Farbmodus des Bewertungssymbols",
    // [Auto-translated] "Smileys color scheme"
    rateColorMode: "Farbschema der Smileys",
    // [Auto-translated] "Copy display value"
    copyDisplayValue: "Anzeigewert kopieren", // Auto-generated string
    // [Auto-translated] "Column span"
    effectiveColSpan: "Spaltenbereich",
    // [Auto-translated] "Progress bar area width"
    progressBarInheritWidthFrom: "Breite des Fortschrittsbalkenbereichs",
    // [Auto-translated] "Theme name"
    themeName: "Name des Themas"
  },
  theme: {
    // "Advanced mode"
    advancedMode: "Erweiterter Modus",
    // "Page"
    pageTitle: "Schriftart des Seitentitels",
    // "Question box"
    questionTitle: "Schriftart des Fragetitels",
    // "Input element"
    editorPanel: "Eingabeelement",
    // [Auto-translated] "Lines"
    lines: "Linien",
    // "Default"
    primaryDefaultColor: "Standard",
    // [Auto-translated] "Hover"
    primaryDarkColor: "Schweben",
    // [Auto-translated] "Selected"
    primaryLightColor: "Ausgewählt",
    // [Auto-translated] "Background color"
    backgroundDimColor: "Hintergrundfarbe",
    // "Corner radius"
    cornerRadius: "Ecken-Radius",
    // [Auto-translated] "Default background"
    backcolor: "Standard-Hintergrund",
    // [Auto-translated] "Hover background"
    hovercolor: "Hover-Hintergrund",
    // [Auto-translated] "Border decoration"
    borderDecoration: "Bordüren-Verzierung",
    // [Auto-translated] "Font color"
    fontColor: "Schriftfarbe",
    // [Auto-translated] "Background color"
    backgroundColor: "Hintergrundfarbe",
    // [Auto-translated] "Default color"
    primaryForecolor: "Standardfarbe",
    // [Auto-translated] "Disabled color"
    primaryForecolorLight: "Deaktivierte Farbe",
    // [Auto-translated] "Font"
    font: "Schriftart",
    // [Auto-translated] "Darker"
    borderDefault: "Dunkler",
    // [Auto-translated] "Lighter"
    borderLight: "Heller",
    // [Auto-translated] "Font family"
    fontFamily: "Schriftfamilie",
    // [Auto-translated] "Regular"
    fontWeightRegular: "Regelmäßig",
    // [Auto-translated] "Heavy"
    fontWeightHeavy: "Schwer",
    // [Auto-translated] "Semi-bold"
    fontWeightSemiBold: "Halbfett",
    // [Auto-translated] "Bold"
    fontWeightBold: "Kühn",
    // [Auto-translated] "Color"
    color: "Farbe",
    // [Auto-translated] "Placeholder color"
    placeholderColor: "Platzhalterfarbe",
    // [Auto-translated] "Size"
    size: "Größe",
    // [Auto-translated] "Opacity"
    opacity: "Undurchsichtigkeit",
    // [Auto-translated] "X"
    boxShadowX: "X",
    // [Auto-translated] "Y"
    boxShadowY: "Y",
    // [Auto-translated] "Add Shadow Effect"
    boxShadowAddRule: "Schatteneffekt hinzufügen",
    // [Auto-translated] "Blur"
    boxShadowBlur: "Verwischen",
    // [Auto-translated] "Spread"
    boxShadowSpread: "Verbreitung",
    // [Auto-translated] "Drop"
    boxShadowDrop: "Tropfen",
    // [Auto-translated] "Inner"
    boxShadowInner: "Inner",
    names: {
      // "Default"
      default: "Default",
      // [Auto-translated] "Sharp"
      sharp: "Scharf",
      // [Auto-translated] "Borderless"
      borderless: "Ohne Rand",
      // [Auto-translated] "Flat"
      flat: "Flach",
      // [Auto-translated] "Plain"
      plain: "Einfach",
      // [Auto-translated] "Double Border"
      doubleborder: "Doppelter Rand",
      // [Auto-translated] "Layered"
      layered: "Stufig",
      // [Auto-translated] "Solid"
      solid: "Fest",
      // [Auto-translated] "3D"
      threedimensional: ".3D",
      // [Auto-translated] "Contrast"
      contrast: "Kontrast"
    },
    colors: {
      // [Auto-translated] "Teal"
      teal: "Blaugrün",
      // "Blue"
      blue: "Blau",
      // "Purple"
      purple: "Lila",
      // [Auto-translated] "Orchid"
      orchid: "Orchidee",
      // [Auto-translated] "Tulip"
      tulip: "Tulpe",
      // "Brown"
      brown: "Braun",
      // "Green"
      green: "Grün",
      // [Auto-translated] "Gray"
      gray: "Grau"
    }
  },
  creatortheme: {
    // [Auto-translated] "Surface background"
    "--sjs-special-background": "Oberflächenhintergrund",
    // [Auto-translated] "Primary"
    "--sjs-primary-background-500": "Primär",
    // [Auto-translated] "Secondary"
    "--sjs-secondary-background-500": "Sekundär",
    // [Auto-translated] "Surface"
    surfaceScale: "Oberfläche",
    // [Auto-translated] "UI elements"
    userInterfaceBaseUnit: "Elemente der Benutzeroberfläche",
    // [Auto-translated] "Font"
    fontScale: "Schriftart",
    names: {
      // [Auto-translated] "Survey Creator 2020"
      sc2020: "Ersteller von Umfragen 2020",
      // [Auto-translated] "Light"
      "default-light": "Licht",
      // [Auto-translated] "Dark"
      "default-dark": "Dunkel",
      // [Auto-translated] "Contrast"
      "default-contrast": "Kontrast"
    }
  }
};

setupLocale({ localeCode: "de", strings: germanTranslation });