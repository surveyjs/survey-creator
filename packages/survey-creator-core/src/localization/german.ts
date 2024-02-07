import { editorLocalization } from "survey-creator-core";

var germanTranslation = {
  // survey templates
  survey: {
    edit: "Bearbeiten",
    externalHelpLink: "Schauen Sie sich an, wie Sie Umfragen erstellen können",
    externalHelpLinkUrl: "https://www.youtube.com/channel/UCH2ru9okIcooNZfpIbyq4qQ?view_as=subscriber",
    dropQuestion: "Frage bitte hier platzieren.",
    addLogicItem: "Eine Regel erstellen, um den Fluss der Umfrage anzupassen.",
    copy: "Kopieren",
    duplicate: "Duplizieren",
    addToToolbox: "Zur Werkzeugleiste hinzufügen",
    deletePanel: "Panel löschen",
    deleteQuestion: "Frage löschen",
    convertTo: "Konvertieren zu",
    drag: "Element ziehen",
  },
  // Question types
  qt: {
    default: "Standard",
    checkbox: "Auswahl",
    comment: "Kommentar",
    imagepicker: "Bildauswahl",
    ranking: "Reihenfolge",
    image: "Bild",
    dropdown: "Dropdown",
    tagbox: "Dropdown-Menü mit Mehrfachauswahl",
    file: "Datei",
    html: "HTML",
    matrix: "Matrix (einfache Auswahl)",
    matrixdropdown: "Matrix (mehrfache Auswahl)",
    matrixdynamic: "Matrix (dynamische Zeilen)",
    multipletext: "Text (mehrzeilig)",
    panel: "Panel",
    paneldynamic: "Panel (dynamisch)",
    radiogroup: "Option",
    rating: "Bewertung",
    text: "Text",
    boolean: "Wahrheitswert",
    expression: "Ausdruck (schreibgeschützt)",
    signaturepad: "Unterschrift",
    buttongroup: "Button Gruppe"
  },
  // Strings in SurveyJS Creator
  ed: {
    defaultLocale: "Standard ({0})",
    survey: "Umfrage",
    settings: "Umfrageeinstellungen",
    settingsTooltip: "Umfrageeinstellungen öffnen",
    surveySettings: "Umfrage Einstellungen",
    surveySettingsTooltip: "Einstellungen für Umfragen",
    themeSettings: "Theme-Einstellungen",
    themeSettingsTooltip: "Theme-Einstellungen",
    showPanel: "Panel anzeigen",
    hidePanel: "Panel verstecken",
    prevSelected: "Vorheriges auswählen",
    nextSelected: "Nächstes auswählen",
    prevFocus: "Fokus zurück",
    nextFocus: "Weiter fokussieren",
    surveyTypeName: "Umfrage",
    pageTypeName: "Seite",
    panelTypeName: "Panel",
    questionTypeName: "Frage",
    columnTypeName: "Spalte",
    addNewPage: "Neue Seite hinzufügen",
    moveRight: "Nach rechts scrollen",
    moveLeft: "Nach links scrollen",
    deletePage: "Seite löschen",
    editPage: "Seite bearbeiten",
    edit: "Bearbeiten",
    newPageName: "Seite",
    newQuestionName: "Frage",
    newPanelName: "Panel",
    newTextItemName: "Text",
    testSurvey: "Test",
    themeSurvey: "Themen",
    defaultV2Theme: "Standard",
    modernTheme: "Modern",
    defaultTheme: "Standard (veraltet)",
    testSurveyAgain: "Testumfrage wiederholen",
    testSurveyWidth: "Umfragebreite: ",
    navigateToMsg: "Sie werden weitergeleitet: ",
    logic: "Logik",
    embedSurvey: "Umfrage einfügen",
    translation: "Übersetzung",
    saveSurvey: "Umfrage speichern",
    saveSurveyTooltip: "Umfrage speichern",
    saveTheme: "Theme speichern",
    saveThemeTooltip: "Theme speichern",
    designer: "Designer",
    jsonEditor: "JSON",
    jsonHideErrors: "Fehler verstecken",
    jsonShowErrors: "Fehler anzeigen",
    undo: "Rückgängig",
    redo: "Wiederherstellen",
    undoTooltip: "Letzte Änderung rückgängig machen",
    redoTooltip: "Letzte Änderung wiederherstellen",
    showMoreChoices: "Zeige mehr",
    showLessChoices: "Zeige weniger",
    copy: "Kopieren",
    cut: "Ausschneiden",
    paste: "Einfügen",
    copyTooltip: "Auswahl in die Zwischenablage kopieren",
    cutTooltip: "Auswahl ausschneiden",
    pasteTooltip: "Aus der Zwischenablage einfügen",
    options: "Optionen",
    generateValidJSON: "Generiere gültiges JSON",
    generateReadableJSON: "Generiere lesbares JSON",
    toolbox: "Werkzeugleiste",
    "property-grid": "Eigenschaften",
    propertyGridFilteredTextPlaceholder: "Tippen, um zu suchen ...",
    propertyGridNoResultsFound: "Keine Ergebnisse gefunden",
    toolboxGeneralCategory: "Allgemein",
    toolboxChoiceCategory: "Auswahl Fragen",
    toolboxTextCategory: "Text Eingabe Fragen",
    toolboxContainersCategory: "Kontainer",
    toolboxMatrixCategory: "Matrix Fragen",
    toolboxMiscCategory: "Verschiedenes",
    correctJSON: "Bitte JSON korrigieren.",
    surveyResults: "Umfrageergebnis: ",
    surveyResultsTable: "Als Tabelle",
    surveyResultsJson: "Als JSON",
    resultsTitle: "Titel der Frage",
    resultsName: "Name der Frage",
    resultsValue: "Wert der Antwort",
    resultsDisplayValue: "Anzeigewert",
    modified: "Modifiziert",
    saving: "Speichern",
    saved: "Gespeichert",
    propertyEditorError: "Fehler:",
    saveError: "Fehler! Der Inhalt des Editors wurde nicht gespeichert.",
    translationPropertyGridTitle: "Übersetzungseinstellungen",
    themePropertyGridTitle: "Theme-Einstellungen",
    translationLanguages: "Sprachen",
    translationDeleteLanguage: "Sind Sie sicher, dass Sie alle Zeichenfolgen für diese Sprache löschen möchten?",
    translationAddLanguage: "Wählen Sie eine Sprache aus",
    translationShowAllStrings: "Alle Texte anzeigen",
    translationShowUsedStringsOnly: "Verwendete Texte",
    translationShowAllPages: "Alle Seiten anzeigen",
    translationNoStrings: "Keine Texte zum Übersetzen. Bitte den Filter anpassen.",
    translationExportToSCVButton: "Export (CSV)",
    translationImportFromSCVButton: "Import (CSV)",
    translateUsigAI: "Alle automatisch übersetzen",
    translateUsigAIFrom: "Sprachrichtung: ",
    translationDialogTitle: "Nicht übersetzte Zeichenketten",
    translationMergeLocaleWithDefault: "Verschmelze {0} mit der Standardsprache",
    translationPlaceHolder: "Übersetzung ...",
    themeExportButton: "Exportieren",
    themeImportButton: "Importieren",
    surveyJsonExportButton: "Exportieren",
    surveyJsonImportButton: "Importieren",
    surveyJsonCopyButton: "In Zwischenablage kopieren",
    themeResetButton: "Theme-Einstellungen auf die Standardeinstellungen zurücksetzen",
    themeResetConfirmation: "Möchten Sie das Theme wirklich zurücksetzen? Alle Ihre Anpassungen gehen verloren.",
    themeResetConfirmationOk: "Ja, setzen Sie das Design zurück",
    bold: "Fett",
    italic: "Kursiv",
    underline: "Unterstrichen",
    addNewQuestion: "Frage hinzufügen",
    selectPage: "Seite auswählen ...",
    carryForwardChoicesCopied: "Auswahlmöglichkeiten werden kopiert von",
    choicesLoadedFromWebText: "Auswahlmöglichkeiten werden aus einem Webdienst geladen.",
    choicesLoadedFromWebLinkText: "Gehen Sie zu den Einstellungen",
    choicesLoadedFromWebPreviewTitle: "Vorschau der geladenen Auswahloptionen",
    htmlPlaceHolder: "HTML wird hier dargestellt werden.",
    panelPlaceHolder: "Ziehe eine Frage aus der Toolbox hier her.",
    surveyPlaceHolder: "Die Umfrage enthält keine Frage. Ziehe ein Element aus der Toolbox hier her oder drücke den Button unten.",
    imagePlaceHolder: "Ziehen Sie ein Bild per Drag & Drop hierher oder klicken Sie auf die Schaltfläche unten und wählen Sie ein Bild zum Hochladen aus",
    imageChooseImage: "Bild auswählen",
    addNewTypeQuestion: "Add {0}", //{0} is localizable question type
    chooseLogoPlaceholder: "[LOGO]",
    auto: "automatisch",
    choices_Item: "Artikel ",
    lg: {
      addNewItem: "Neue Regel hinzufügen",
      empty_tab: "Erstelle eine Regel erstellen, um den Fluss der Umfrage anzupassen.",
      page_visibilityName: "Seite anzeigen/verstecken",
      page_enableName: "Seite aktivieren/deaktivieren",
      page_requireName: "Als Seite erforderlich festlegen",
      panel_visibilityName: "Panel anzeigen/verstecken",
      panel_enableName: "Panel aktivieren/deaktivieren",
      panel_requireName: "Als Seite erforderlich festlegen",
      question_visibilityName: "Frage anzeigen/verstecken",
      question_enableName: "Frage aktivieren/deaktivieren",
      question_requireName: "Frage optional/erforderlich",
      question_resetValueName: "Fragewert zurücksetzen",
      question_setValueName: "Festlegen des Fragewerts",
      column_visibilityName: "Spalte anzeigen/verstecken",
      column_enableName: "Spalte aktivieren/deaktivieren",
      column_requireName: "Spalte optional/erforderlich",
      column_resetValueName: "Spaltenwert zurücksetzen",
      column_setValueName: "Festlegen des Spaltenwerts",
      trigger_completeName: "Umfrage abschließen",
      trigger_setvalueName: "Antwort setzen",
      trigger_copyvalueName: "Antwort kopieren",
      trigger_skipName: "Zu Frage springen",
      trigger_runExpressionName: "Ausdruck ausführen",
      completedHtmlOnConditionName: "Seite nach Abschluss der Umfrage anzeigen",
      page_visibilityDescription: "Mache die Seite sichtbar, wenn der logische Ausdruck wahr ergibt. Andernfalls lass sie unsichtbar.",
      panel_visibilityDescription: "Mache das Panel sichtbar, wenn der logische Ausdruck wahr ergibt. Andernfalls lass es unsichtbar.",
      panel_enableDescription: "Aktiviere das Panel zusammen mit all seinen Elementen, wenn der logische Ausdruck wahr ergibt. Andernfalls lass sie deaktiviert.",
      question_visibilityDescription: "Mache die Frage sichtbar, wenn der logische Ausdruck wahr ergibt. Andernfalls lass sie unsichtbar.",
      question_enableDescription: "Aktiviere die Frage, wenn der logische Ausdruck wahr ergibt. Andernfalls lass sie deaktiviert.",
      question_requireDescription: "Frage wird erforderlich, wenn der logische Ausdruck wahr ergibt.",
      trigger_completeDescription: "Wenn der logische Ausdruck wahr ergibt, wir die Umfrage abgeschlossen und der Benutzer sieht die Abschlussseite der Umfrage.",
      trigger_setvalueDescription: "Wenn Werte, die im logischen Ausdruck verwendet werden, geändert werden und der logische Ausdruck wahr ergibt, dann wird der Wert in die ausgewählte Frage eingesetzt.",
      trigger_copyvalueDescription: "Wenn Werte, die im logischen Ausdruck verwendet werden, geändert werden und der logische Ausdruck wahr ergibt, dann wird der Wert einer ausgewählte Fragen kopiert und in eine andere ausgewählte Frage eingesetzt.",
      trigger_skipDescription: "Wenn der logische Ausdruck wahr ergibt, springt die Umfrage zur ausgewählten Frage.",
      trigger_runExpressionDescription: "Wenn der logische Ausdruck wahr ergibt, wird die benutzerdefinierte Anweisung ausgeführt. Sie können optional das Ergebnis der Anweisung in die ausgewählte Frage einsetzen.",
      completedHtmlOnConditionDescription: "Wenn der logische Ausdruck wahr ergibt, dann wird der Standardtext der Abschlussseite der Umfrage mit dem gegebenen Text ersetzt.",
      itemExpressionText: "Wenn der Ausdruck '{0}' wahr ergibt:", //{0} - the expression
      itemEmptyExpressionText: "Neue Regel",
      page_visibilityText: "Mache die Seite {0} sichtbar", //{0} page name
      panel_visibilityText: "Mache das Panel {0} sichtbar", //{0} panel name
      panel_enableText: "Aktiviere das Panel {0}", //{0} panel name
      question_visibilityText: "Mache die Frage {0} sichtbar", //{0} question name
      question_enableText: "Aktiviere die Frage {0}", //{0} question name
      question_requireText: "Mache die Frage {0} erforderlich", //{0} question name
      question_resetValueText: "Reset-Wert für Frage: {0}",
      question_setValueText: "Wert zuweisen: {1} zu fragen: {0}",
      column_visibilityText: "Mache die Spalte {0} von Frage {1} sichtbar", //{0} column name, {1} question name
      column_enableText: "Aktiviere die Spalte {0} von Frage {1}", //{0} column name, {1} question name
      column_requireText: "Mache die Spalte {0} von Frage {1} erforderlich", //{0} column name, {1} question name
      column_resetValueText: "Zellenwert für Spalte zurücksetzen: {0}",
      column_setValueText: "Zellenwert zuweisen: {1} zur Spalte: {0}",
      setValueExpressionPlaceholder: " Ein Ausdruck, dessen Ergebnis der Zielfrage zugewiesen wird.",
      trigger_completeText: "Umfrage abschließen",
      trigger_setvalueText: "Setze in Frage {0} den Wert {1} ein", //{0} question name, {1} setValue
      trigger_setvalueEmptyText: "Klarer Fragewert: {0}", //{0} question name
      trigger_copyvalueText: "Kopiere in Frage {0} den Wert von Frage {1}", //{0} and {1} question names
      trigger_skipText: "Gehe zu Frage {0}", //{0} question name
      trigger_runExpressionText1: "Führe folgenden Ausdruck aus: '{0}'", //{0} the expression
      trigger_runExpressionText2: " und setze das Ergebnis in Frage {0} ein", //{0} question name
      completedHtmlOnConditionText: "Zeigen Sie einen benutzerdefinierten Text auf der Abschlussseite der Umfrage an.",
      showAllQuestions: "Alle Fragen anzeigen",
      showAllActionTypes: "Alle Aktionen anzeigen",
      conditions: "Bedingungen",
      actions: "Aktionen",
      expressionEditorTitle: "Definiere Bedingungen",
      actionsEditorTitle: "Definiere Aktionen",
      deleteAction: "Aktion löschen",
      addNewAction: "Aktion hinzufügen",
      selectedActionCaption: "Aktion zum Hinzufügen auswählen...",
      expressionInvalid: "Der logische Ausdruck ist leer oder ungültig. Bitte korrigieren Sie ihn.",
      noActionError: "Bitte fügen Sie mindestens eine Aktion hinzu.",
      actionInvalid: "Bitte beheben Sie die bestehenden Probleme in Ihren Aktionen.",
      uncompletedRule_title: "Logische Regeln sind unvollständig",
      uncompletedRule_text: "Sie haben einige der logischen Regeln nicht erfüllt. Wenn Sie den Tab jetzt verlassen, gehen die Änderungen verloren. Möchten Sie die Registerkarte dennoch verlassen, ohne die Änderungen abzuschließen?",
      uncompletedRule_apply: "Ja",
      uncompletedRule_cancel: "Nein, ich möchte die Regeln vervollständigen"
    }
  },
  // Property Editors
  pe: {
    apply: "Anwenden",
    ok: "OK",
    save: "Speichern",
    clear: "Leeren",
    saveTooltip: "Speichern",
    cancel: "Abbrechen",
    set: "Setze",
    reset: "Zurücksetzen",
    change: "Verändern",
    refresh: "Neu laden",
    close: "Schliessen",
    delete: "Löschen",
    add: "Hinzufügen",
    addNew: "Neues Element hinzufügen",
    addItem: "Klicken, um ein Element hinzuzufügen ...",
    removeItem: "Klicken, um ein Element zu entfernen ...",
    dragItem: "Ziehe das Element",
    addOther: "Weiteres Element",
    addSelectAll: "Alle Elemente auswählen hinzufügen",
    addNone: "Alle Elemente abwählen hinzufügen",
    removeAll: "Alle löschen",
    edit: "Bearbeiten",
    back: "Zurück ohne zu speichern",
    backTooltip: "Zurück ohne zu speichern",
    saveAndBack: "Speichern und zurück",
    saveAndBackTooltip: "Speichern und zurück",
    doneEditing: "Fertig",
    editChoices: "Auswahlmöglichkeiten bearbeiten",
    showChoices: "Auswahlmöglichkeiten anzeigen",
    move: "Verschieben",
    empty: "<leer>",
    emptyValue: "Wert is leer",
    fastEntry: "Schnelleintrag",
    fastEntryNonUniqueError: "Wert '{0}' ist nicht eindeutig",
    fastEntryChoicesCountError: "Bitte begrenze die Anzahl der Elemente von {0} bis {1}",
    fastEntryChoicesMinCountError: "Bitte geben Sie mindestens {0} Artikel ein",
    fastEntryPlaceholder: "Daten im folgenden Format setzen:\nwert1|text\nwert2",
    formEntry: "Formulareintrag",
    testService: "Service testen",
    itemSelectorEmpty: "Bitte ein Element auswählen",
    conditionActionEmpty: "Bitte eine Aktion auswählen",
    conditionSelectQuestion: "Frage auswählen ...",
    conditionSelectPage: "Seite auswählen ...",
    conditionSelectPanel: "Panel auswählen ...",
    conditionValueQuestionTitle: "Bitte den Wert eingeben oder auswählen",
    expressionHelp: "Bitte geben Sie einen Ausdruck ein. Sie können geschweifte Klammern verwenden, um Zugriff auf die Werte der Fragen zu bekommen: \"{question1} + {question2}\", \"({price} * {quantity}) * (100 - {discount})\"",
    aceEditorHelp: "Bitte drücken Sie Strg+Leertaste, um Vervollständigungsvorschläge für den Ausdruck zu erhalten",
    aceEditorRowTitle: "Aktuelle Zeile",
    aceEditorPanelTitle: "Aktuelles Panel",
    showMore: "Weitere Informationen finden Sie in der Dokumentation",
    assistantTitle: "Verfügbare Fragen:",
    cellsEmptyRowsColumns: "Es sollte mindestens eine Spalte oder Zeile geben",
    showPreviewBeforeComplete: "Vorschau der Antworten vor dem Absenden anzeigen",
    overridingPropertyPrefix: "Gesetzt von ",
    resetToDefaultCaption: "Zurücksetzen",
    propertyIsEmpty: "Bitte geben Sie einen Wert ein",
    propertyIsNoUnique: "Bitte geben Sie einen eindeutigen Wert ein",
    propertyNameIsNotUnique: "Bitte geben Sie einen eindeutigen Wert ein",
    propertyNameIsIncorrect: "Verwenden Sie keine reservierten Wörter: \"Element\", \"Auswahl\", \"Panel\", \"Zeile\".",
    listIsEmpty: "Neues Element hinzufügen",
    "listIsEmpty@choices": "Bisher wurden noch keine Auswahlmöglichkeiten hinzugefügt",
    "addNew@choices": "Auswahlmöglichkeit hinzufügen",
    expressionIsEmpty: "Keinen Ausdruck definiert",
    value: "Wert",
    text: "Text",
    rowid: "Zeilen-ID",
    imageLink: "Link auf das Bild",
    columnEdit: "Spalte bearbeiten: {0}",
    itemEdit: "Element bearbeiten: {0}",
    url: "URL",
    path: "Pfad",
    valueName: "Name der Antwort",
    choicesbyurl: {
      valueName: "Werte von folgenden JSON Feld übernehmen"
    },
    titleName: "Name des Titels",
    imageLinkName: "Name des Links zum Bild",
    allowEmptyResponse: "Keine Antwort erlauben",
    titlePlaceholder: "Titel eingeben",
    surveyTitlePlaceholder: "Umfragetitel eingeben",
    pageTitlePlaceholder: "Seitenbeschreibung eingeben",
    descriptionPlaceholder: "Beschreibung eingeben",
    surveyDescriptionPlaceholder: "Umfragebeschreibung eingeben",
    pageDescriptionPlaceholder: "Seitenbeschreibung eingeben",
    showOtherItem: "Sonstiges auswählbar?",
    otherText: "Text für Sonstiges",
    showNoneItem: "Alle Elemente abwählbar?",
    showRefuseItem: "Zulassen der Option \"Antwort ablehnen\"",
    showDontKnowItem: "Erlauben Sie die Option \"Weiß nicht\"",
    noneText: "Text für die Abwahl aller Elemente",
    showSelectAllItem: "Alle Elemente auswählbar?",
    selectAllText: "Text für die Auswahl aller Elemente",
    choicesMin: "Minimaler Wert für automatisch erzeugte Elemente",
    choicesMax: "Maximaler Wert für automatisch erzeugte Elemente",
    choicesStep: "Schrittgröße für automatisch erzeugte Elemente",
    name: "Name",
    title: "Titel",
    cellType: "Zellentyp",
    colCount: "Spaltenanzahl",
    choicesOrder: "Auswahlreihenfolge",
    visible: "Sichtbar?",
    isRequired: "Erforderlich?",
    markRequired: "Als erforderlich markieren",
    removeRequiredMark: "Entfernen Sie die erforderliche Markierung",
    isAllRowRequired: "Ist eine Antwort für alle Zeilen erforderlich?",
    eachRowUnique: "Doppelte Beantwortungen in Zeilen verhindern",
    requiredErrorText: "Fehlermeldung bei nicht beantworteten erforderlichen Fragen",
    startWithNewLine: "Starte mit einer neuen Zeile",
    rows: "Zeilenanzahl",
    cols: "Spaltenanzahl",
    placeholder: "Platzhalter",
    showPreview: "Wird eine Bildvorschau angezeigt?",
    storeDataAsText: "Speicher Dateininhalt des JSON-Resultats als Text",
    maxSize: "Maximale Dateigröße in Bytes",
    imageHeight: "Bildhöhe",
    imageWidth: "Bildbreite",
    rowCount: "Zeilenanzahl",
    columnLayout: "Spaltenlayout",
    addRowLocation: "Zeilenknopfposition hinzufügen",
    addRowText: "Zeilenknopftext hinzufügen",
    removeRowText: "Zeilenknopftext löschen",
    rateMin: "Minimum",
    rateMax: "Maximum",
    rateStep: "Bewertungsschritte",
    minRateDescription: "Beschreibung für minimale Bewertung",
    maxRateDescription: "Beschreibung für maximale Bewertung",
    inputType: "Eingabetyp",
    optionsCaption: "Auswahlbeschriftung",
    defaultValue: "Standardantwort",
    cellsDefaultRow: "Standardzellentext",
    surveyEditorTitle: "Umfrageeinstellungen bearbeiten",
    qEditorTitle: "Frage bearbeiten: {0}",
    maxLength: "Maximale Länge",
    buildExpression: "Einfach",
    editExpression: "Erweitert",
    and: "und",
    or: "oder",
    remove: "Entfernen",
    addCondition: "Bedingung hinzufügen",
    emptyLogicPopupMessage: "Eine Frage auswählen um die Bedingungen festzulegen.",
    if: "Wenn",
    then: "dann",
    setToName: "von",
    fromName: "bis",
    gotoName: "Zur Frage springen",
    ruleIsNotSet: "Regel is nicht korrekt",
    includeIntoResult: "In Umfrageergebnisse einbeziehen",
    showTitle: "Titel anzeigen",
    expandCollapseTitle: "Titel ausklappen/einklappen",
    locale: "Standardsprache",
    simulator: "Gerät auswählen",
    landscapeOrientation: "Querformat",
    portraitOrientation: "Hochformat",
    mode: "Modus (editierbar/schreibgeschützt)",
    clearInvisibleValues: "Alle unsichtbaren Werte leeren",
    cookieName: "Cookie-Name (um zu unterdrücken, dass die Umfrage lokal zwei Mal ausgefüllt werden kann)",
    sendResultOnPageNext: "Sende Umfrageergebnisse beim Betreten der nächsten Seite",
    storeOthersAsComment: "Speichere andere Werte als Kommentar",
    showPageTitles: "Seitenbeschreibung anzeigen",
    showPageNumbers: "Seitennummern anzeigen",
    pagePrevText: "Text des Buttons für die vorherige Seite",
    pageNextText: "Text des Buttons für die nächste Seite",
    completeText: "Text des Abschließenbuttons",
    previewText: "Text des Vorschaubuttons",
    editText: "Text des Bearbeitenbuttons",
    startSurveyText: "Text des Startbuttons",
    showNavigationButtons: "Anzeige der Navigationsbuttons",
    showPrevButton: "Button für die vorherige Seite anzeigen (Benutzer können auf die vorherige Seite zurückkehren)",
    firstPageIsStarted: "Die erste Seite der Umfrage ist die Startseite",
    showCompletedPage: "Nach Abschluss die ausgefüllte Umfrage anzeigen",
    goNextPageAutomatic: "Wenn alle Fragen auf einer Seite beantwortet sind, gehe automatisch zur nächsten Seiten",
    showProgressBar: "Fortschrittsbalken anzeigen",
    questionTitleLocation: "Position des Fragentitels",
    requiredText: "Symbol für erforderliche Fragen",
    questionStartIndex: "Startindex der Fragen (bspw. \"1\", \"A\", \"a\", ...)",
    showQuestionNumbers: "Fragennummern anzeigen",
    questionTitleTemplate: "Template für den Fragentitel. Standard ist: \"{no}. {require} {title}\"",
    questionErrorLocation: "Position der Fehlermeldungen",
    focusFirstQuestionAutomatic: "Fokussiere die erste Frage automatisch",
    questionsOrder: "Reihenfolge der Elemente auf der Seite",
    maxTimeToFinish: "Maximale Zeit, um die Umfrage zu beenden",
    maxTimeToFinishPage: "Maximale Zeit, um eine Seite der Umfrage zu beenden",
    image: {
      imageHeight: "Bildhöhe (in CSS-akzeptierten Werten)",
      imageWidth: "Bildbreite (in CSS-akzeptierten Werten)"
    },
    // survey templates
    survey: {
      title: "Titel"
    },
    page: {
      title: "Titel",
      maxTimeToFinish: "Zeitlimit zum Beenden der Seite (in Sekunden)"
    },
    question: {
      page: "Elternseite"
    },
    panel: {
      page: "Elternseite",
      indent: "Äußere Einzüge hinzufügen"
    },
    showTimerPanel: "Position des Timers",
    showTimerPanelMode: "Modus des Timers",
    renderMode: "Anzeigemodus",
    allowAddPanel: "Erlaube das Hinzufügen eines Paneltexts",
    allowRemovePanel: "Erlaube das Entfernen eines Paneltexts",
    noEntriesText: "Leerer Eintragstext",
    panelAddText: "Paneltext hinzufügen",
    panelRemoveText: "Paneltext entfernen",
    isSinglePage: "Alle Elemente auf einer Seite anzeigen",
    html: "HTML",
    expression: "Ausdruck",
    setValue: "Antwort",
    dataFormat: "Bildformat",
    allowAddRows: "Hinzufügen von Zeilen zulassen",
    allowRemoveRows: "Allow removing rows",
    allowRowsDragAndDrop: "Entfernen von Zeilen zulassen",
    responsiveImageSizeHelp: "Gilt nicht, wenn Sie die genaue Bildbreite oder -höhe angeben.",
    minImageWidth: "Minimale Bildbreite",
    maxImageWidth: "Maximale Bildbreite",
    minImageHeight: "Minimale Bildhöhe",
    maxImageHeight: "Maximale Bildhöhe",
    minValue: "Minimaler Wert",
    maxValue: "Maximaler Wert",
    minLength: "Minimale Länge",
    allowDigits: "Ziffern erlaubt",
    minCount: "Minimale Anzahl",
    maxCount: "Maximale Anzahl",
    regex: "Regulärer Ausdruck",
    surveyvalidator: {
      text: "Fehlermeldung",
      expression: "Validierungsausdruck"
    },
    totalText: "Text (total)",
    totalType: "Typ (total)",
    totalExpression: "Ausdruck (total)",
    totalDisplayStyle: "Anzeigestil (total)",
    totalCurrency: "Währung (total)",
    totalFormat: "Format (total)",
    logo: "Logo (URL oder base64-codierte Zeichenfolge)",
    questionsOnPageMode: "Umfrage Struktur",
    maxTextLength: "Maximale Antwortlänge (in Zeichen)",
    maxOthersLength: "Maximale Kommentarlänge (in Zeichen)",
    autoGrowComment: "Kommentarbereich bei Bedarf automatisch erweitern",
    allowResizeComment: "Benutzern erlauben, die Größe von Textbereichen zu ändern",
    textUpdateMode: "Wert der Textfrage aktualisieren",
    focusOnFirstError: "Fokus auf die erste ungültige Antwort setzen",
    checkErrorsMode: "Validierung ausführen",
    navigateToUrl: "Navigieren Sie zur URL",
    navigateToUrlOnCondition: "Dynamische URL",
    completedBeforeHtml: "Markup, um anzuzeigen, ob der Benutzer diese Umfrage bereits ausgefüllt hat",
    completedHtml: "Markup der Seite „Umfrage abgeschlossen“.",
    completedHtmlOnCondition: "Dynamisches Markup der Seite „Umfrage abgeschlossen“.",
    loadingHtml: "Markup, das angezeigt werden soll, während die Umfrage geladen wird",
    commentText: "Text im Kommentarbereich",
    autocomplete: "Autocomplete-Typ",
    labelTrue: "Bezeichner \"Wahr\".",
    labelFalse: "Bezeichner \"Falsch\"",
    allowClear: "Überschrift der Auswahlmöglichkeiten anzeigen",
    displayStyle: "Wertanzeigestil",
    format: "Formatierte Zeichenfolge",
    maximumFractionDigits: "Maximale Nachkommastellen",
    minimumFractionDigits: "Minimale Nachkommastellen",
    useGrouping: "Gruppierungstrennzeichen anzeigen",
    allowMultiple: "Mehrere Dateien zulassen",
    allowImagesPreview: "Vorschaubilder",
    acceptedTypes: "Akzeptierte Dateitypen",
    waitForUpload: "Warten Sie, bis der Upload abgeschlossen ist",
    needConfirmRemoveFile: "Bestätigen Sie das Löschen der Datei",
    detailPanelMode: "Position des Detailbereichs",
    minRowCount: "Mindestzeilenanzahl",
    maxRowCount: "Maximale Zeilenanzahl",
    confirmDelete: "Zeilenlöschung bestätigen",
    confirmDeleteText: "Bestätigungsmeldung",
    paneldynamic: {
      confirmDelete: "Bestätigen Sie das Löschen des Panels"
    },
    panelCount: "Anfängliche Panel-Anzahl",
    minPanelCount: "Minimale Panelanzahl",
    maxPanelCount: "Maximale Panelanzahl",
    panelsState: "Erweiterungszustand des inneren Bereichs",
    templateDescription: "Beschreibungsvorlage",
    templateTitle: "Titelvorlage",
    panelPrevText: "Tooltip für die Schaltfläche „Vorheriges Bedienfeld“.",
    panelNextText: "Tooltip für die Schaltfläche „Nächstes Bedienfeld“.",
    showRangeInProgress: "Fortschrittsbalken anzeigen",
    templateTitleLocation: "Position des Fragetitels",
    panelRemoveButtonLocation: "Position der Panel-Schaltfläche entfernen",
    hideIfRowsEmpty: "Blenden Sie die Frage aus, wenn keine Zeilen vorhanden sind",
    hideColumnsIfEmpty: "Spalten ausblenden, wenn keine Zeilen vorhanden sind",
    rateValues: "Benutzerdefinierte Ratenwerte",
    rateCount: "Skalengröße",
    autoGenerate: "Wie lege ich Tarifwerte fest?",
    hideIfChoicesEmpty: "Blenden Sie die Frage aus, wenn sie keine Auswahlmöglichkeiten enthält",
    hideNumber: "Fragenummer ausblenden",
    minWidth: "Minimale Breite (in CSS-akzeptierten Werten)",
    maxWidth: "Maximale Breite (in CSS-akzeptierten Werten)",
    width: "Breite (in CSS-akzeptierten Werten)",
    showHeader: "Spaltenüberschriften anzeigen",
    horizontalScroll: "Horizontale Bildlaufleiste anzeigen",
    columnMinWidth: "Minimale Spaltenbreite (in CSS-akzeptierten Werten)",
    rowTitleWidth: "Breite der Zeilenüberschrift (in CSS-akzeptierten Werten)",
    valueTrue: "\"Wahrer\" Wert",
    valueFalse: "\"False\"-Wert",
    minErrorText: "Fehlermeldung \"Wert liegt unter Minimum\"",
    maxErrorText: "Fehlermeldung \"Wert überschreitet Maximum\"",
    otherErrorText: "Fehlermeldung \"Leerer Kommentar\"",
    keyDuplicationError: "Fehlermeldung \"Nicht eindeutiger Schlüsselwert\"",
    minSelectedChoices: "Minimale Auswahlmöglichkeiten",
    maxSelectedChoices: "Maximale Auswahlmöglichkeiten",
    showClearButton: "Zeigen Sie die Schaltfläche \"Löschen\" an",
    showNumber: "Panel-Nummer anzeigen",
    logoWidth: "Logobreite (in CSS-akzeptierten Werten)",
    logoHeight: "Logohöhe (in CSS-akzeptierten Werten)",
    readOnly: "Schreibgeschützt",
    enableIf: "Bearbeitbar, wenn",
    emptyRowsText: "Meldung \"Keine Zeilen\"",
    size: "Größe des Eingabefeldes (in Zeichen)",
    separateSpecialChoices: "Spezielle Auswahlmöglichkeiten separieren",
    choicesFromQuestion: "Kopieren Sie die Auswahlmöglichkeiten aus der folgenden Frage",
    choicesFromQuestionMode: "Welche Auswahlmöglichkeiten sollen kopiert werden?",
    showCommentArea: "Kommentarbereich anzeigen",
    commentPlaceholder: "Platzhalter für den Kommentarbereich",
    displayRateDescriptionsAsExtremeItems: "Beschreibung für minimale und maximale Bewertung als Werte anzeigen",
    rowsOrder: "Reihenfolge der Zeilen",
    columnsLayout: "Spalten-Layout",
    columnColCount: "Anzahl der geschachtelten Spalten",
    state: "Status erweitern des Bedienfelds",
    correctAnswer: "Richtige Antwort",
    defaultPanelValue: "Standardwerte",
    cells: "Zellentexte",
    keyName: "Spalte \"Schlüssel\"",
    itemvalue: {
      text: "Alt-Text"
    },
    logoPosition: "Logoposition",
    addLogo: "Logo hinzufügen ...",
    changeLogo: "Logo bearbeiten ...",
    logoPositions: {
      none: "ausblenden",
      left: "links",
      right: "rechts",
      top: "oben",
      bottom: "unten"
    },
    tabs: {
      general: "Allgemein",
      fileOptions: "Optionen",
      html: "Html Editor",
      columns: "Spalten",
      rows: "Zeilen",
      choices: "Auswahlmöglichkeiten",
      items: "Elemente",
      visibleIf: "Sichtbar wenn ...",
      enableIf: "Aktiviert wenn ...",
      requiredIf: "Erforderlich wenn ...",
      rateValues: "Bewertungsskala",
      choicesByUrl: "Auswahlmöglichkeiten aus dem Internet",
      matrixChoices: "Standardauswahl",
      multipleTextItems: "Texteingabe",
      numbering: "Nummerierung",
      validators: "Überprüfung",
      navigation: "Navigation",
      question: "Fragen",
      pages: "Seiten",
      timer: "Timer",
      calculatedValues: "Berechnete Werte",
      triggers: "Trigger",
      templateTitle: "Titeltemplate",
      totals: "Summen",
      logic: "Logik",
      layout: "Layout",
      data: "Daten",
      validation: "Validierung",
      cells: "Zellen",
      showOnCompleted: "Abschluss",
      logo: "Logo im Umfragetitel",
      slider: "Slider",
      expression: "Ausdruck",
      others: "Weiteres"
    },
    editProperty: "Eigenschaft bearbeiten '{0}'",
    items: "Eiträge",
    choicesVisibleIf: "Auswahlmöglichkeiten sind sichtbar, wenn",
    choicesEnableIf: "Wahlmöglichkeiten sind wählbar, wenn",
    columnsEnableIf: "Spalten sind sichtbar, wenn",
    rowsEnableIf: "Zeilen sind sichtbar, wenn",
    indent: "Einzüge hinzufügen",
    innerIndent: "Fügen Sie innere Einzüge hinzu",
    defaultValueFromLastRow: "Nehmen Sie Standardwerte aus der letzten Zeile",
    defaultValueFromLastPanel: "Nehmen Sie Standardwerte aus dem letzten Bereich",
    enterNewValue: "Bitte einen Wert eingeben.",
    noquestions: "Die Umfrage enthält keine Frage.",
    createtrigger: "Bitte einen Trigger eingeben.",
    titleKeyboardAdornerTip: "Bitte drücken Sie ENTER, um bearbeiten zu können",
    keyboardAdornerTip: "Drücken Sie ENTER, um das Element zu bearbeiten, ENTFERNEN, um das Element zu entfernen, STRG + PFEIL NACH OBEN/UNTEN, um das Element zu verschieben",
    triggerOn: "Ein",
    triggerMakePagesVisible: "Seiten sichtbar machen:",
    triggerMakeQuestionsVisible: "Elemente sichtbar machen:",
    triggerCompleteText: "Bei Erfolg die Umfrage abschliessen.",
    triggerNotSet: "Trigger ist nicht gesetzt",
    triggerRunIf: "Ausführen wenn ...",
    triggerSetToName: "Ändere den Wert von: ",
    triggerFromName: "Kopiere den Wert von: ",
    triggerRunExpression: "Führe diesen Ausdruck aus:",
    triggerSetValue: "nach: ",
    triggerGotoName: "Gehe zu Frage:",
    triggerIsVariable: "Die Variable nicht in das Umfrageergebnis platzieren.",
    triggerRunExpressionEmpty: "Bitte geben Sie einen gültigen Ausdruck ein",
    emptyExpressionPlaceHolder: "Tippen Sie hier Ihren Ausdruck ein ...",
    noFile: "Keine Datei ausgewählt",
    clearIfInvisible: "Löschen Sie den Wert, wenn die Frage ausgeblendet wird",
    valuePropertyName: "Wert Eigenschaftsname",
    searchEnabled: "Suche aktivieren",
    hideSelectedItems: "Ausgewählte Elemente ausblenden",
    closeOnSelect: "Schließen Sie das Dropdown-Menü nach der Auswahl",
    signatureWidth: "Signaturbreite",
    signatureHeight: "Signaturhöhe",
    verticalAlign: "Vertikale Ausrichtung",
    alternateRows: "Zeilen wechseln",
    columnsVisibleIf: "Spalten sind sichtbar, wenn",
    rowsVisibleIf: "Zeilen sind sichtbar, wenn",
    otherPlaceholder: "Platzhalter für den Kommentarbereich",
    signaturepad: {
      showPlaceholder: "Platzhalter anzeigen",
      placeholder: "Platzhaltertext",
      signatureWidth: "Breite des Signaturbereichs",
      signatureHeight: "Höhe des Signaturbereichs",
      signatureAutoScaleEnabled: "Automatisches Skalieren des Signaturbereichs",
      penMinWidth: "Minimale Stiftbreite",
      penMaxWidth: "Maximale Stiftbreite"
    },
    filePlaceholder: "Platzhaltertext für Dateien",
    photoPlaceholder: "Platzhaltertext für Fotos",
    fileOrPhotoPlaceholder: "Datei- oder Foto-Platzhaltertext",
    rateType: "Ansicht der Bewertungssymbole"
  },
  // Property values
  pv: {
    "true": "wahr",
    "false": "falsch",
    file: "Lokale Dateien",
    camera: "Kamera",
    "file-camera": "Lokale Dateien oder Kamera",
    inherit: "vererbt",
    show: "anzeigen",
    hide: "verstecken",
    default: "Standard",
    initial: "initial",
    random: "zufällig",
    collapsed: "eingeklappt",
    expanded: "ausgeklappt",
    none: "/",
    asc: "aufsteigend",
    desc: "absteigend",
    indeterminate: "unentschieden",
    decimal: "Dezimal",
    currency: "Währung",
    percent: "Prozent",
    firstExpanded: "ausgeklappt (erstes Element)",
    off: "aus",
    onpanel: "Beginnen Sie auf jedem Bereich",
    onPanel: "Panel",
    onSurvey: "Umfrage",
    list: "Liste",
    progressTop: "oben (Fortschritt)",
    progressBottom: "unten (Fortschritt)",
    progressTopBottom: "oben und unten (Fortschritt)",
    tab: "Tabulatoren",
    horizontal: "horizontal",
    vertical: "vertikal",
    top: "oben",
    bottom: "unten",
    topBottom: "oben und unten",
    both: "beides",
    left: "links",
    right: "rechts",
    leftRight: "Links und rechts",
    color: "Farbe",
    date: "Datum",
    datetime: "Datum/Uhrzeit",
    "datetime-local": "Datum/Uhrzeit (Lokal)",
    email: "E-Mail",
    month: "Monat",
    number: "Nummer",
    password: "Passwort",
    range: "Bereich",
    tel: "Telefon",
    text: "Text",
    time: "Uhrzeit",
    url: "URL",
    week: "Woche",
    hidden: "versteckt",
    on: "an",
    onPage: "an (unabhängig für jede Seite)",
    edit: "Bearbeiten",
    display: "Anzeigen",
    onComplete: "Wenn die Umfrage abgeschlossen wurde",
    onHidden: "Wenn die Umfrage versteckt wurde",
    onHiddenContainer: "Wenn die Frage oder ihr Panel/Seite ausgeblendet wird",
    contain: "Enthalten",
    cover: "Deckel",
    fill: "Füllen",
    clearInvisibleValues: {
      none: "Niemals"
    },
    inputType: {
      color: "Farbe",
      date: "Datum",
      "datetime-local": "Datum und Uhrzeit",
      email: "E-Mail",
      month: "Monat",
      number: "Zahl",
      password: "Passwort",
      range: "Bereich",
      tel: "Telefonnummer",
      text: "Text",
      time: "Zeit",
      url: "Web-URL",
      week: "Woche"
    },
    all: "alle",
    page: "Seite",
    survey: "Umfrage",
    onNextPage: "Wenn die Seite gewechselt wurde",
    onValueChanged: "Wenn ein Wert geändert wurde",
    onValueChanging: "Bevor eine Antwort geändert wird",
    standard: "Standard",
    singlePage: "Alle Fragen auf eine Seite",
    questionPerPage: "Alle Fragen auf eine eigene Seite",
    noPreview: "Keine Vorschau",
    showAllQuestions: "Vorschau mit allen Fragen anzeigen",
    showAnsweredQuestions: "Vorschau mit beantworteten Fragen anzeigen",
    pages: "Seiten",
    questions: "Fragen",
    requiredQuestions: "Erforderliche Fragen",
    correctQuestions: "Richtig beantwortete Fragen",
    buttons: "Buttons",
    underInput: "Unterhalb des Eingabefelds",
    underTitle: "Unterhalb des Titels",
    onBlur: "Bei Unschärfe",
    onTyping: "Während der Eingabe",
    underRow: "Unter der Reihe",
    underRowSingle: "Unter der Zeile ist nur ein Bereich sichtbar",
    showNavigationButtons: {
      none: "Versteckt"
    },
    showProgressBar: {
      off: "Versteckt"
    },
    showTimerPanel: {
      none: "Versteckt"
    },
    showTimerPanelMode: {
      all: "Beide"
    },
    detailPanelMode: {
      none: "Versteckt"
    },
    addRowLocation: {
      default: "Hängt vom Matrix Layout ab"
    },
    panelsState: {
      default: "Benutzer können Bedienfelder nicht ein- oder ausblenden",
      collapsed: "Alle Paneele sind eingeklappt",
      expanded: "Alle Panels sind ausgeklappt"
    },
    widthMode: {
      auto: "Auto",
      static: "Statisch",
      responsive: "Ansprechbar"
    },
    imageFit: {
      none: "Nichts",
      contain: "Enthalten",
      cover: "Deckel",
      fill: "Füllen"
    },
    contentMode: {
      auto: "Auto",
      image: "Bild",
      video: "Video",
      youtube: "YouTube (Englisch)"
    },
    displayMode: {
      auto: "Auto",
      buttons: "Tasten",
      dropdown: "Dropdown-Liste"
    },
    rateColorMode: {
      default: "Default"
    },
    autoGenerate: {
      "true": "Generieren",
      "false": "Manuell Eintragen"
    },
    rateType: {
      labels: "Beschriftung",
      stars: "Sterne",
      smileys: "Smileys"
    }
  },
  // Operators
  op: {
    empty: "ist leer",
    notempty: "ist nicht leer",
    equal: "ist gleich",
    notequal: "ist ungleich",
    contains: "enthält",
    notcontains: "enthält nicht",
    anyof: "eins aus",
    allof: "alle aus",
    greater: "größer als",
    less: "kleiner als",
    greaterorequal: "größer oder gleich als",
    lessorequal: "kleiner oder gleich als",
    and: "und",
    or: "oder"
  },
  // Embed window
  ew: {
    angular: "Angular-Version benutzen",
    jquery: "jQuery-Version benutzen",
    knockout: "Knockout-Version benutzen",
    react: "React-Version benutzen",
    vue: "Vue-Version benutzen",
    bootstrap: "Als Bootstrap Framework",
    modern: "Theme: Modern",
    default: "Theme: Standard",
    orange: "Theme: Orange",
    darkblue: "Theme: Dunkelblau",
    darkrose: "Theme: Dunklerosa",
    stone: "Theme: Stein",
    winter: "Theme: Winter",
    winterstone: "Theme: Winterstein",
    showOnPage: "Umfrage auf Seite anzeigen",
    showInWindow: "Umfrage als Fenster anzeigen",
    loadFromServer: "Lade Umfrage als JSON vom Server",
    titleScript: "Skripte und Styles",
    titleHtml: "HTML",
    titleJavaScript: "JavaScript"
  },
  // Preview (Survey)
  ts: {
    selectPage: "Seite:",
    showInvisibleElements: "Unsichtbare Elemente anzeigen",
    hideInvisibleElements: "Unsichtbare Elemente ausblenden"
  },
  validators: {
    answercountvalidator: "Antwortanzahl",
    emailvalidator: "E-Mail",
    expressionvalidator: "Ausdruck",
    numericvalidator: "Zahl",
    regexvalidator: "Regulärer Ausdruck",
    textvalidator: "Text"
  },
  triggers: {
    completetrigger: "Umfrage abschließen",
    setvaluetrigger: "Wert setzen",
    copyvaluetrigger: "Wert kopieren",
    skiptrigger: "Frage wechseln",
    runexpressiontrigger: "Anweisung ausführen",
    visibletrigger: "Sichtbarkeit ändern (deprecated)"
  },
  pehelp: {
    cookieName: "Cookies verhindern, dass Benutzer dieselbe Umfrage zweimal ausfüllen.",
    size: "Ändert die Größe des sichtbaren Bereichs des Eingabefelds. Bitte verwenden Sie die Einstellung <b>Validierung → Maximale Länge</b>, um die Eingabelänge zu begrenzen.",
    format: "Verwenden Sie {0} als Platzhalter für den tatsächlichen Wert.",
    totalText: "Diese Option ist nur sichtbar, wenn mindestens eine Spalte über den Total-Typ oder den Total-Ausdruck verfügt.",
    acceptedTypes: "Weitere Informationen finden Sie in der Beschreibung des Attributs [accept](https://www.w3schools.com/tags/att_input_accept.asp).",
    columnColCount: "Gilt nur für die Zellentypen \"Radiogruppe\" und \"Kontrollkästchen\".",
    autocomplete: "Weitere Informationen finden Sie in der Attributbeschreibung [autocomplete](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete).",
    valueName: "Wenn Sie diese Eigenschaft nicht festlegen, wird die Antwort in einem Feld gespeichert, das durch die Name-Eigenschaft angegeben wird.",
    choicesbyurl: {
      valueName: " "
    },
    keyName: "Wenn die angegebene Spalte identische Werte enthält, löst die Umfrage den Fehler \"Nicht eindeutiger Schlüsselwert\" aus.",
    filePlaceholder: "Gilt, wenn \"Quelltyp\" \"Lokale Dateien\" ist oder wenn die Kamera nicht verfügbar ist",
    photoPlaceholder: "Gilt, wenn der \"Quellentyp\" auf \"Kamera\" festgelegt ist.",
    fileOrPhotoPlaceholder: "Gilt, wenn \"Quelltyp\" \"Lokale Dateien oder Kamera\" ist."
  },
  // Properties
  p: {
    title: {
      name: "Titel",
      title: "Bitte leer lassen, falls gleich wie \"Name\""
    },
    multiSelect: "Mehrfachauswahl",
    showLabel: "Label anzeigen",
    value: "Wert",
    tabAlign: "Ausrichtung der Registerkarten",
    sourceType: "Quellentyp",
    fitToContainer: "Passend zum Behälter",
    setValueExpression: "Ausdruck \"Wert festlegen\"",
    description: "Beschreibung",
    logoFit: "Passform des Logos",
    pages: "Seiten",
    questions: "Fragen",
    triggers: "Trigger",
    calculatedValues: "Berechnete Werte",
    surveyId: "surveyId",
    surveyPostId: "surveyPostId",
    surveyShowDataSaving: "surveyShowDataSaving",
    questionDescriptionLocation: "Position der Fragenbeschreibung",
    progressBarType: "Fortschrittsbalkentyp",
    showTOC: "Inhaltsverzeichnis anzeigen",
    tocLocation: "Toc-Standort",
    questionTitlePattern: "Pattern für Fragentitel",
    widthMode: "Modus für die Breite",
    showBrandInfo: "Markeninfo anzeigen",
    useDisplayValuesInDynamicTexts: "Verwende Anzeigewerte im Titel",
    visibleIf: "Sichtbar wenn ...",
    titleLocation: "Position des Titels",
    descriptionLocation: "Position der Beschreibung",
    defaultValueExpression: "Ausdruck für Standardwerte",
    requiredIf: "Erforderlich wenn ...",
    resetValueIf: "Wert zurücksetzen, wenn",
    setValueIf: "Wert setzen, wenn",
    validators: "Validierungen",
    bindings: "Bindings",
    renderAs: "Rendern als",
    attachOriginalItems: "Originalartikel anbringen",
    choices: "Auswahlmöglichkeiten",
    choicesByUrl: "Auswahlreihenfolge nach URL",
    currency: "Währung",
    cellHint: "Hinweis auf die Zelle",
    isUnique: "Ist einzigartig",
    showInMultipleColumns: "In mehreren Spalten anzeigen",
    totalMaximumFractionDigits: "Maximale Nachkommastellen insgesamt",
    totalMinimumFractionDigits: "Minimale Nachkommastellen insgesamt",
    columns: "Spalten",
    detailElements: "Detail-Elemente",
    allowAdaptiveActions: "Adaptive Aktionen zulassen",
    defaultRowValue: "Standardwert für Zeilen",
    detailPanelShowOnAdding: "Panel für Details beim Hinzufügen anzeigen",
    choicesLazyLoadEnabled: "Auswahlmöglichkeiten Lazy Load aktiviert",
    choicesLazyLoadPageSize: "Auswahlmöglichkeiten Lazy Load-Seitengröße",
    inputFieldComponent: "Eingabefeld-Komponente",
    itemComponent: "Artikelkomponente",
    min: "Minimaler Wert",
    max: "Maximaler Wert",
    minValueExpression: "Ausdruck für minimalen Wert",
    maxValueExpression: "Ausdruck für maximalen Wert",
    step: "Schritt",
    dataList: "Datenliste",
    itemSize: "Elementgröße",
    elements: "Elemente",
    content: "Inhalt",
    navigationButtonsVisibility: "Sichtbarkeit der Navigationsbuttons",
    navigationTitle: "Navigationstitel",
    navigationDescription: "Navigationsbeschreibung",
    longTap: "langtippen",
    autoGrow: "Automatisch vergrößern",
    allowResize: "Größenänderung zulassen",
    acceptCarriageReturn: "akzeptieren CarriageReturn",
    displayMode: "Anzeigemodus",
    rateType: "Ansicht der Bewertungssymbole",
    label: "Label",
    contentMode: "Inhaltsmodus",
    imageFit: "Passform des Bildes",
    altText: "altText",
    height: "Höhe",
    penColor: "Stiftfarbe",
    backgroundColor: "Hintergrundfarbe",
    templateElements: "VorlagenElemente",
    operator: "Operator",
    isVariable: "istVariable",
    runExpression: "runExpression",
    showCaption: "Titel anzeigen",
    iconName: "Name des Icons",
    iconSize: "Größe des Icons",
    precision: "Präzision",
    matrixDragHandleArea: "Matrix-Ziehgriffbereich",
    backgroundImage: "Hintergrundbild",
    backgroundImageFit: "Anpassung des Hintergrundbildes",
    backgroundImageAttachment: "Anhang des Hintergrundbildes",
    backgroundOpacity: "Deckkraft des Hintergrunds",
    selectToRankEnabled: "Wählen Sie diese Option aus, um eine aktivierte Rangfolge zu erzielen",
    selectToRankAreasLayout: "Wählen Sie aus, um das Layout der Bereiche zu ordnen",
    allowCameraAccess: "Kamerazugriff zulassen",
    scaleColorMode: "Farbmodus skalieren",
    rateColorMode: "Farbmodus bewerten",
    templateTabTitle: "Titel der Registerkarte \"Vorlage\"",
    templateVisibleIf: "Vorlage sichtbar, wenn",
    copyDisplayValue: "Anzeigewert kopieren"
  },
  theme: {
    "--background": "Hintergrundfarbe",
    "--background-dim-light": "Hintergrund schwache Lichtfarbe",
    "--primary-foreground": "Primäre Vordergrundfarbe",
    "--foreground": "Vordergrundfarbe",
    "--base-unit": "Basiseinheit",
    advancedMode: "Erweiterter Modus",
    groupGeneral: "Allgemein",
    groupHeader: "Titelzeile",
    groupBackground: "Hintergrund",
    groupAppearance: "Erscheinungsbild",
    themeName: "Thema",
    themeMode: "Erscheinungsbild der Frage",
    themeModePanels: "Standard",
    themeModeLightweight: "Ohne Paneele",
    themePaletteLight: "Hell",
    themePaletteDark: "Dunkel",
    primaryColor: "Akzentfarbe",
    primaryDefaultColor: "Standard",
    primaryDarkColor: "Schweben",
    primaryLightColor: "Ausgewählt",
    coverTitleForecolor: "Vorfarbe des Titels",
    coverDescriptionForecolor: "Beschreibung Vorfarbe",
    coverOverlapEnabled: "Überlappung",
    backgroundDimColor: "Hintergrundfarbe",
    backgroundImage: "Hintergrundbild",
    backgroundImageFitAuto: "Auto",
    backgroundImageFitCover: "Abdecken",
    backgroundImageFitContain: "Enthalten",
    backgroundImageFitFill: "Strecken",
    backgroundImageFitTile: "Kachel",
    backgroundOpacity: "Deckkraft",
    backgroundImageAttachmentFixed: "Fixiert",
    backgroundImageAttachmentScroll: "Scrollen",
    panelBackgroundTransparency: "Deckkraft des Panel-Hintergrunds",
    questionBackgroundTransparency: "Deckkraft des Hintergrunds der Frage",
    questionTitle: "Schriftart des Fragetitels",
    editorPanel: "Eingabeelement",
    backgroundCornerRadius: "Hintergrund und Eckenradius",
    backcolor: "Standard-Hintergrund",
    hovercolor: "Hover-Hintergrund",
    borderDecoration: "Bordüren-Verzierung",
    accentBackground: "Akzent-Hintergrund",
    accentForeground: "Akzent Vordergrund",
    primaryForecolor: "Standardfarbe",
    primaryForecolorLight: "Deaktivierte Farbe",
    colorsTitle: "Farben",
    font: "Schriftart",
    lines: "Linien",
    borderDefault: "Dunkler",
    borderLight: "Feuerzeug",
    fontFamily: "Schriftfamilie",
    fontSize: "Schriftgrad",
    color: "Farbe",
    placeholderColor: "Farbe des Platzhalters",
    size: "Größe",
    fontWeightRegular: "Regelmäßig",
    fontWeightHeavy: "Schwer",
    fontWeightSemiBold: "Halbfett",
    fontWeightBold: "Fett",
    scale: "Maßstab",
    cornerRadius: "Eckenradius",
    surveyTitle: "Schriftart für den Umfragetitel",
    surveyDescription: "Schriftart der Umfragebeschreibung",
    pageTitle: "Schriftart des Seitentitels",
    titleFont: "Schriftart des Titels",
    descriptionFont: "Beschreibung Schriftart",
    boxShadowX: "X",
    boxShadowY: "Y",
    boxShadowAddRule: "Schatteneffekt hinzufügen",
    opacity: "Undurchsichtigkeit",
    boxShadowBlur: "Verwischen",
    boxShadowSpread: "Verbreitung",
    boxShadowDrop: "Tropfen",
    boxShadowInner: "Inner",
    shadow: "Schatten-Effekte",
    headerView: "Ansehen",
    headerViewBasic: "Grundlegend",
    headerViewAdvanced: "Fortgeschritten",
    coverInheritWidthFrom: "Breite des Inhaltsbereichs",
    coverInheritWidthFromSurvey: "Wie Umfrage",
    coverInheritWidthFromContainer: "Passend zum Container",
    coverTextAreaWidth: "Textbreite",
    coverBackgroundColorSwitch: "Hintergrundfarbe",
    coverBackgroundColorNone: "Keine",
    coverBackgroundColorAccentColor: "Akzentfarbe",
    coverBackgroundColorCustom: "Bentzerdefiniert",
    horizontalAlignmentLeft: "Links",
    horizontalAlignmentCenter: "Mitte",
    horizontalAlignmentRight: "Rechts",
    verticalAlignmentTop: "Oben",
    verticalAlignmentMiddle: "Mitte",
    verticalAlignmentBottom: "Unten",
    logoPosition: "Position des Logos",
    coverTitlePosition: "Position des Titels",
    coverDescriptionPosition: "Beschreibung Position",
    names: {
      default: "Default",
      sharp: "Scharf",
      borderless: "Ohne Rand",
      flat: "Flach",
      plain: "Einfach",
      doubleborder: "Doppelter Rand",
      layered: "Stufig",
      solid: "Fest",
      threedimensional: ".3D",
      contrast: "Kontrast"
    },
    colors: {
      teal: "Krickente",
      blue: "Blau",
      purple: "Lila",
      orchid: "Orchidee",
      tulip: "Tulpe",
      brown: "Braun",
      green: "Grün"
    }
  }
};

editorLocalization.locales["de"] = germanTranslation;

// The following strings have been translated by a machine translation service
// Remove those strings that you have corrected manually
// ed.themeSurvey: "Themes" => "Themen"
// ed.themePropertyGridTitle: "Theme Settings" => "Theme-Einstellungen"
// ed.carryForwardChoicesCopied: "Choices are copied from" => "Auswahlmöglichkeiten werden kopiert von"
// ed.imagePlaceHolder: "Drag and drop an image here or click the button below and choose an image to upload" => "Ziehen Sie ein Bild per Drag & Drop hierher oder klicken Sie auf die Schaltfläche unten und wählen Sie ein Bild zum Hochladen aus"
// ed.choices_Item: "Item " => "Artikel "
// lg.trigger_setvalueEmptyText: "clear question value: {0}" => "Klarer Fragewert: {0}"
// lg.uncompletedRule_title: "Logical rules are incomplete" => "Logische Regeln sind unvollständig"
// lg.uncompletedRule_text: "You have not completed some of the logical rules. If you leave the tab now, the changes will be lost. Do you still want to leave the tab without completing the changes?" => "Sie haben einige der logischen Regeln nicht erfüllt. Wenn Sie den Tab jetzt verlassen, gehen die Änderungen verloren. Möchten Sie die Registerkarte dennoch verlassen, ohne die Änderungen abzuschließen?"
// lg.uncompletedRule_apply: "Yes" => "Ja"
// lg.uncompletedRule_cancel: "No, I want to complete the rules" => "Nein, ich möchte die Regeln vervollständigen"
// pe.overridingPropertyPrefix: "Set by " => "Gesetzt von "
// pe.propertyNameIsIncorrect: "Do not use reserved words: \"item\", \"choice\", \"panel\", \"row\"." => "Verwenden Sie keine reservierten Wörter: \"Element\", \"Auswahl\", \"Panel\", \"Zeile\"."
// image.imageHeight: "Image height (in CSS-accepted values)" => "Bildhöhe (in CSS-akzeptierten Werten)"
// image.imageWidth: "Image width (in CSS-accepted values)" => "Bildbreite (in CSS-akzeptierten Werten)"
// pe.allowResizeComment: "Allow users to resize text areas" => "Benutzern erlauben, die Größe von Textbereichen zu ändern"
// pe.templateTitleLocation: "Question title location" => "Position des Fragetitels"
// pe.panelRemoveButtonLocation: "Remove Panel button location" => "Position der Panel-Schaltfläche entfernen"
// pe.hideIfRowsEmpty: "Hide the question if there are no rows" => "Blenden Sie die Frage aus, wenn keine Zeilen vorhanden sind"
// pe.hideColumnsIfEmpty: "Hide columns if there are no rows" => "Spalten ausblenden, wenn keine Zeilen vorhanden sind"
// pe.rateValues: "Custom rate values" => "Benutzerdefinierte Ratenwerte"
// pe.autoGenerate: "How to specify rate values?" => "Wie lege ich Tarifwerte fest?"
// pe.hideIfChoicesEmpty: "Hide the question if it contains no choices" => "Blenden Sie die Frage aus, wenn sie keine Auswahlmöglichkeiten enthält"
// pe.hideNumber: "Hide question number" => "Fragenummer ausblenden"
// pe.minWidth: "Minimum width (in CSS-accepted values)" => "Minimale Breite (in CSS-akzeptierten Werten)"
// pe.maxWidth: "Maximum width (in CSS-accepted values)" => "Maximale Breite (in CSS-akzeptierten Werten)"
// pe.width: "Width (in CSS-accepted values)" => "Breite (in CSS-akzeptierten Werten)"
// pe.showHeader: "Show column headers" => "Spaltenüberschriften anzeigen"
// pe.horizontalScroll: "Show horizontal scrollbar" => "Horizontale Bildlaufleiste anzeigen"
// pe.columnMinWidth: "Minimum column width (in CSS-accepted values)" => "Minimale Spaltenbreite (in CSS-akzeptierten Werten)"
// pe.rowTitleWidth: "Row header width (in CSS-accepted values)" => "Breite der Zeilenüberschrift (in CSS-akzeptierten Werten)"
// pe.valueTrue: "\"True\" value" => "\"Wahrer\" Wert"
// pe.valueFalse: "\"False\" value" => "\"False\"-Wert"
// pe.minErrorText: "\"Value is below minimum\" error message" => "Fehlermeldung \"Wert liegt unter Minimum\""
// pe.maxErrorText: "\"Value exceeds maximum\" error message" => "Fehlermeldung \"Wert überschreitet Maximum\""
// pe.otherErrorText: "\"Empty comment\" error message" => "Fehlermeldung \"Leerer Kommentar\""
// pe.keyDuplicationError: "\"Non-unique key value\" error message" => "Fehlermeldung \"Nicht eindeutiger Schlüsselwert\""
// pe.minSelectedChoices: "Minimum selected choices" => "Minimale Auswahlmöglichkeiten"
// pe.maxSelectedChoices: "Maximum selected choices" => "Maximale Auswahlmöglichkeiten"
// pe.showClearButton: "Show the Clear button" => "Zeigen Sie die Schaltfläche \"Löschen\" an"
// pe.showNumber: "Show panel number" => "Panel-Nummer anzeigen"
// pe.logoWidth: "Logo width (in CSS-accepted values)" => "Logobreite (in CSS-akzeptierten Werten)"
// pe.logoHeight: "Logo height (in CSS-accepted values)" => "Logohöhe (in CSS-akzeptierten Werten)"
// pe.enableIf: "Editable if" => "Bearbeitbar, wenn"
// pe.emptyRowsText: "\"No rows\" message" => "Meldung \"Keine Zeilen\""
// pe.size: "Input field size (in characters)" => "Größe des Eingabefeldes (in Zeichen)"
// pe.choicesFromQuestion: "Copy choices from the following question" => "Kopieren Sie die Auswahlmöglichkeiten aus der folgenden Frage"
// pe.choicesFromQuestionMode: "Which choices to copy?" => "Welche Auswahlmöglichkeiten sollen kopiert werden?"
// pe.showCommentArea: "Show the comment area" => "Kommentarbereich anzeigen"
// pe.commentPlaceholder: "Comment area placeholder" => "Platzhalter für den Kommentarbereich"
// pe.rowsOrder: "Row order" => "Reihenfolge der Zeilen"
// pe.columnsLayout: "Column layout" => "Spalten-Layout"
// pe.columnColCount: "Nested column count" => "Anzahl der geschachtelten Spalten"
// pe.state: "Panel expand state" => "Status erweitern des Bedienfelds"
// pe.correctAnswer: "Correct Answer" => "Richtige Antwort"
// pe.defaultPanelValue: "Default Values" => "Standardwerte"
// pe.cells: "Cell Texts" => "Zellentexte"
// pe.keyName: "Key column" => "Spalte \"Schlüssel\""
// itemvalue.text: "Alt text" => "Alt-Text"
// pe.closeOnSelect: "Close the dropdown after selection" => "Schließen Sie das Dropdown-Menü nach der Auswahl"
// pv.tab: "Tabs" => "Tabulatoren"
// inputType.datetime-local: "Date and Time" => "Datum und Uhrzeit"
// inputType.range: "Range" => "Bereich"
// inputType.url: "URL" => "Web-URL"
// inputType.week: "Week" => "Woche"
// pv.onBlur: "On blur" => "Bei Unschärfe"
// pv.onTyping: "While typing" => "Während der Eingabe"
// pv.underRow: "Under the row" => "Unter der Reihe"
// pv.underRowSingle: "Under the row, only one panel is visible" => "Unter der Zeile ist nur ein Bereich sichtbar"
// panelsState.default: "Users cannot expand or collapse panels" => "Benutzer können Bedienfelder nicht ein- oder ausblenden"
// panelsState.collapsed: "All panels are collapsed" => "Alle Paneele sind eingeklappt"
// panelsState.expanded: "All panels are expanded" => "Alle Panels sind ausgeklappt"
// widthMode.auto: "Auto" => "Auto"
// widthMode.static: "Static" => "Statisch"
// widthMode.responsive: "Responsive" => "Ansprechbar"
// imageFit.none: "None" => "Nichts"
// imageFit.contain: "Contain" => "Enthalten"
// imageFit.cover: "Cover" => "Deckel"
// imageFit.fill: "Fill" => "Füllen"
// contentMode.auto: "Auto" => "Auto"
// contentMode.youtube: "YouTube" => "YouTube (Englisch)"
// displayMode.auto: "Auto" => "Auto"
// displayMode.buttons: "Buttons" => "Tasten"
// displayMode.dropdown: "Dropdown" => "Dropdown-Liste"
// pehelp.cookieName: "Cookies prevent users from filling out the same survey twice." => "Cookies verhindern, dass Benutzer dieselbe Umfrage zweimal ausfüllen."
// pehelp.size: "Resizes the visible area of the input field. Please use the <b>Validation → Maximum length</b> setting to limit the input length." => "Ändert die Größe des sichtbaren Bereichs des Eingabefelds. Bitte verwenden Sie die Einstellung <b>Validierung → Maximale Länge</b>, um die Eingabelänge zu begrenzen."
// pehelp.format: "Use {0} as a placeholder for the actual value." => "Verwenden Sie {0} als Platzhalter für den tatsächlichen Wert."
// pehelp.totalText: "Visible only when at least one column has Total type or Total expression." => "Diese Option ist nur sichtbar, wenn mindestens eine Spalte über den Total-Typ oder den Total-Ausdruck verfügt."
// pehelp.acceptedTypes: "Refer to the [accept](https://www.w3schools.com/tags/att_input_accept.asp) attribute description for more information." => "Weitere Informationen finden Sie in der Beschreibung des Attributs [accept](https://www.w3schools.com/tags/att_input_accept.asp)."
// pehelp.columnColCount: "Applicable only to Radiogroup and Checkbox cell types." => "Gilt nur für die Zellentypen \"Radiogruppe\" und \"Kontrollkästchen\"."
// pehelp.autocomplete: "Refer to the [autocomplete](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete) attribute description for more information." => "Weitere Informationen finden Sie in der Attributbeschreibung [autocomplete](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete)."
// pehelp.valueName: "If you do not set this property, the answer will be stored in a field specified by the Name property." => "Wenn Sie diese Eigenschaft nicht festlegen, wird die Antwort in einem Feld gespeichert, das durch die Name-Eigenschaft angegeben wird."
// choicesbyurl.valueName: " " => " "
// pehelp.keyName: "If the specified column contains identical values, the survey throws the \"Non-unique key value\" error." => "Wenn die angegebene Spalte identische Werte enthält, löst die Umfrage den Fehler \"Nicht eindeutiger Schlüsselwert\" aus."
// p.value: "Value" => "Wert"
// p.tabAlign: "Tab alignment" => "Ausrichtung der Registerkarten"
// p.tocLocation: "Toc location" => "Toc-Standort"
// p.showBrandInfo: "Show brand info" => "Markeninfo anzeigen"
// p.renderAs: "Render as" => "Rendern als"
// p.attachOriginalItems: "Attach original items" => "Originalartikel anbringen"
// p.cellHint: "Cell hint" => "Hinweis auf die Zelle"
// p.isUnique: "Is unique" => "Ist einzigartig"
// p.showInMultipleColumns: "Show in multiple columns" => "In mehreren Spalten anzeigen"
// p.detailElements: "Detail elements" => "Detail-Elemente"
// p.allowAdaptiveActions: "Allow adaptive actions" => "Adaptive Aktionen zulassen"
// p.choicesLazyLoadEnabled: "Choices lazy load enabled" => "Auswahlmöglichkeiten Lazy Load aktiviert"
// p.choicesLazyLoadPageSize: "Choices lazy load page size" => "Auswahlmöglichkeiten Lazy Load-Seitengröße"
// p.inputFieldComponent: "Input field component" => "Eingabefeld-Komponente"
// p.itemComponent: "Item component" => "Artikelkomponente"
// p.allowResize: "Allow resizing" => "Größenänderung zulassen"
// p.precision: "Precision" => "Präzision"
// p.matrixDragHandleArea: "Matrix drag handle area" => "Matrix-Ziehgriffbereich"
// p.backgroundImage: "Background image" => "Hintergrundbild"
// p.backgroundImageFit: "Background image fit" => "Anpassung des Hintergrundbildes"
// p.backgroundImageAttachment: "Background image attachment" => "Anhang des Hintergrundbildes"
// p.backgroundOpacity: "Background opacity" => "Deckkraft des Hintergrunds"
// p.selectToRankEnabled: "Select to rank enabled" => "Wählen Sie diese Option aus, um eine aktivierte Rangfolge zu erzielen"
// p.selectToRankAreasLayout: "Select to rank areas layout" => "Wählen Sie aus, um das Layout der Bereiche zu ordnen"
// p.allowCameraAccess: "Allow camera access" => "Kamerazugriff zulassen"
// p.scaleColorMode: "Scale color mode" => "Farbmodus skalieren"
// p.rateColorMode: "Rate color mode" => "Farbmodus bewerten"
// p.templateTabTitle: "Template tab title" => "Titel der Registerkarte \"Vorlage\""
// p.templateVisibleIf: "Template visible if" => "Vorlage sichtbar, wenn"
// p.copyDisplayValue: "Copy display value" => "Anzeigewert kopieren"
// theme.--background: "Background color" => "Hintergrundfarbe"
// theme.--background-dim-light: "Background dim light color" => "Hintergrund schwache Lichtfarbe"
// theme.--primary-foreground: "Primary foreground color" => "Primäre Vordergrundfarbe"
// theme.--foreground: "Foreground color" => "Vordergrundfarbe"
// theme.--base-unit: "Base unit" => "Basiseinheit"
// theme.groupGeneral: "General" => "Allgemein"
// theme.groupAdvanced: "Advanced" => "Fortgeschritten"
// theme.themeName: "Theme" => "Thema"
// theme.themeMode: "Question appearance" => "Erscheinungsbild der Frage"
// theme.themeModeLightweight: "Without Panels" => "Ohne Paneele"
// theme.themePaletteDark: "Dark" => "Dunkel"
// theme.primaryColor: "Accent color" => "Akzentfarbe"
// theme.primaryDarkColor: "Hover" => "Schweben"
// theme.primaryLightColor: "Selected" => "Ausgewählt"
// theme.backgroundDimColor: "Background color" => "Hintergrundfarbe"
// theme.backgroundImage: "Background image" => "Hintergrundbild"
// theme.backgroundImageFitAuto: "Auto" => "Auto"
// theme.backgroundImageFitContain: "Contain" => "Enthalten"
// theme.panelBackgroundTransparency: "Panel background opacity" => "Deckkraft des Panel-Hintergrunds"
// theme.questionBackgroundTransparency: "Question background opacity" => "Deckkraft des Hintergrunds der Frage"
// theme.questionPanel: "Panel background and corner radius" => "Paneelhintergrund und Eckenradius"
// theme.questionTitle: "Question title font" => "Schriftart des Fragetitels"
// theme.questionDescription: "Question description font" => "Frage-Beschreibung-Schriftart"
// theme.editorPanel: "Input element" => "Eingabeelement"
// theme.editorFont: "Input element font" => "Schriftart des Eingabeelements"
// theme.backcolor: "Default background" => "Standard-Hintergrund"
// theme.hovercolor: "Hover background" => "Hover-Hintergrund"
// theme.borderDecoration: "Border decoration" => "Bordüren-Verzierung"
// theme.accentBackground: "Accent background" => "Akzent-Hintergrund"
// theme.accentForeground: "Accent foreground" => "Akzent Vordergrund"
// theme.primaryForecolor: "Default color" => "Standardfarbe"
// theme.primaryForecolorLight: "Disabled color" => "Deaktivierte Farbe"
// theme.linesColors: "Minor line colors" => "Kleinere Linienfarben"
// theme.borderDefault: "Darker" => "Dunkler"
// theme.borderLight: "Lighter" => "Feuerzeug"
// theme.fontFamily: "Font family" => "Schriftfamilie"
// theme.fontSize: "Font size" => "Schriftgrad"
// theme.color: "Color" => "Farbe"
// theme.size: "Size" => "Größe"
// theme.fontWeightRegular: "Regular" => "Regelmäßig"
// theme.fontWeightHeavy: "Heavy" => "Schwer"
// theme.fontWeightSemiBold: "Semi-bold" => "Halbfett"
// theme.scale: "Scale" => "Maßstab"
// theme.cornerRadius: "Corner radius" => "Eckenradius"
// theme.surveyTitle: "Survey title font" => "Schriftart für den Umfragetitel"
// theme.pageTitle: "Page title font" => "Schriftart des Seitentitels"
// theme.pageDescription: "Page description font" => "Schriftart für die Seitenbeschreibung"
// theme.boxShadowX: "X" => "X"
// theme.boxShadowY: "Y" => "Y"
// theme.boxShadowAddRule: "Add Shadow Effect" => "Schatteneffekt hinzufügen"
// theme.opacity: "Opacity" => "Undurchsichtigkeit"
// theme.boxShadowBlur: "Blur" => "Verwischen"
// theme.boxShadowSpread: "Spread" => "Verbreitung"
// theme.boxShadowDrop: "Drop" => "Tropfen"
// theme.boxShadowInner: "Inner" => "Inner"
// theme.questionShadow: "Shadow effects" => "Schatteneffekte"
// theme.editorShadow: "Input element shadow effects" => "Schatteneffekte von Eingabeelementen"
// names.contrast: "Contrast" => "Kontrast"
// names.plain: "Plain" => "Einfach"
// names.simple: "Simple" => "Einfach"
// names.blank: "Blank" => "Leer"
// names.double: "Double" => "Doppelt"
// names.bulk: "Bulk" => "Masse"
// names.pseudo-3d: "Pseudo 3D" => "Pseudo 3D"
// names.playful: "Playful" => "Verspielt"
// names.ultra: "Ultra" => "Ultra"
// colors.teal: "Teal" => "Krickente"
// colors.orchid: "Orchid" => "Orchidee"
// colors.tulip: "Tulip" => "Tulpe"
// names.sharp: "Sharp" => "Scharf"
// names.borderless: "Borderless" => "Ohne Rand"
// names.flat: "Flat" => "Flach"
// names.doubleborder: "Double Border" => "Doppelter Rand"
// names.layered: "Layered" => "Stufig"
// names.solid: "Solid" => "Fest"
// names.threedimensional: "3D" => ".3D"
// ed.translationDeleteLanguage: "Are you certain you wish to delete all strings for this language?" => "Sind Sie sicher, dass Sie alle Zeichenfolgen für diese Sprache löschen möchten?"
// ed.themeResetButton: "Reset theme settings to default" => "Theme-Einstellungen auf die Standardeinstellungen zurücksetzen"
// theme.placeholderColor: "Placeholder color" => "Farbe des Platzhalters"
// ed.themeSettings: "Theme Settings" => "Theme-Einstellungen"
// ed.themeSettingsTooltip: "Open theme settings" => "Öffnen Sie die Theme-Einstellungen"
// pe.resetToDefaultCaption: "Reset" => "Zurücksetzen"
// pv.file: "Local files" => "Lokale Dateien"
// pv.camera: "Camera" => "Kamera"
// pv.file-camera: "Local files or camera" => "Lokale Dateien oder Kamera"

// ed.translateUsigAI: "Auto-translate All" => "Alle automatisch übersetzen"
// ed.translationDialogTitle: "Untranslated strings" => "Nicht übersetzte Zeichenketten"
// pe.fastEntryChoicesMinCountError: "Please enter at least {0} items" => "Bitte geben Sie mindestens {0} Artikel ein"
// lg.question_resetValueName: "Reset question value" => "Fragewert zurücksetzen"
// lg.column_resetValue: "Reset column value" => "Spaltenwert zurücksetzen"
// pe.markRequired: "Mark as required" => "Als erforderlich markieren"
// pe.removeRequiredMark: "Remove the required mark" => "Entfernen Sie die erforderliche Markierung"
// p.resetValueIf: "Reset value if" => "Wert zurücksetzen, wenn"
// lg.question_setValueName: "Set question value" => "Festlegen des Fragewerts"
// lg.column_resetValueName: "Reset column value" => "Spaltenwert zurücksetzen"
// lg.column_setValueName: "Set column value" => "Festlegen des Spaltenwerts"
// lg.setValueExpressionPlaceholder: " An expression whose result will be assigned to the target question." => " Ein Ausdruck, dessen Ergebnis der Zielfrage zugewiesen wird."
// survey.title: "Title" => "Titel"
// page.title: "Title" => "Titel"
// p.setValueIf: "Set value if" => "Wert setzen, wenn"
// theme.coverTitleForecolor: "Title forecolor" => "Vorfarbe des Titels"
// theme.coverOverlapEnabled: "Overlap" => "Überlappung"
// theme.backgroundImageFitFill: "Stretch" => "Strecken"
// theme.headerView: "View" => "Ansehen"
// theme.headerViewBasic: "Basic" => "Grundlegend"
// theme.headerViewAdvanced: "Advanced" => "Fortgeschritten"
// theme.coverInheritWidthFrom: "Content area width" => "Breite des Inhaltsbereichs"
// theme.coverInheritWidthFromSurvey: "Same as survey" => "Wie Umfrage"
// theme.coverInheritWidthFromPage: "Fit to page" => "An Seite anpassen"
// theme.coverTextAreaWidth: "Text width" => "Textbreite"
// theme.coverBackgroundColorSwitch: "Background color" => "Hintergrundfarbe"
// theme.coverBackgroundColorAccentColor: "Accent color" => "Akzentfarbe"
// theme.horizontalAlignmentLeft: "Left" => "Links"
// theme.horizontalAlignmentCenter: "Center" => "Mitte"
// theme.horizontalAlignmentRight: "Right" => "Rechts"
// theme.verticalAlignmentMiddle: "Middle" => "Mitte"
// theme.logoPosition: "Logo Position" => "Position des Logos"
// theme.coverTitlePosition: "Title Position" => "Position des Titels"
// theme.coverDescriptionPosition: "Description Position" => "Beschreibung Position"
// lg.question_resetValueText: "reset value for question: {0}" => "Reset-Wert für Frage: {0}"
// lg.question_setValueText: "assign value: {1} to question: {0}" => "Wert zuweisen: {1} zu fragen: {0}"
// lg.column_resetValueText: "reset cell value for column: {0}" => "Zellenwert für Spalte zurücksetzen: {0}"
// lg.column_setValueText: "assign cell value: {1} to column: {0}" => "Zellenwert zuweisen: {1} zur Spalte: {0}"
// ed.surveyJsonExportButton: "Export" => "Exportieren"
// ed.surveyJsonImportButton: "Import" => "Importieren"
// ed.surveyJsonCopyButton: "Copy to clipboard" => "In Zwischenablage kopieren"
// pe.filePlaceholder: "File placeholder text" => "Platzhaltertext für Dateien"
// pe.photoPlaceholder: "Photo placeholder text" => "Platzhaltertext für Fotos"
// pe.fileOrPhotoPlaceholder: "File or photo placeholder text" => "Datei- oder Foto-Platzhaltertext"
// pehelp.filePlaceholder: "Applies when \"Source type\" is \"Local files\" or when camera is unavailable" => "Gilt, wenn \"Quelltyp\" \"Lokale Dateien\" ist oder wenn die Kamera nicht verfügbar ist"
// pehelp.photoPlaceholder: "Applies when \"Source type\" is \"Camera\"." => "Gilt, wenn der \"Quellentyp\" auf \"Kamera\" festgelegt ist."
// pehelp.fileOrPhotoPlaceholder: "Applies when \"Source type\" is \"Local files or camera\"." => "Gilt, wenn \"Quelltyp\" \"Lokale Dateien oder Kamera\" ist."
// theme.groupBackground: "Background" => "Hintergrund"
// theme.coverDescriptionForecolor: "Description forecolor" => "Beschreibung Vorfarbe"
// ed.themeResetConfirmation: "Do you really want to reset the theme? All your customizations will be lost." => "Möchten Sie das Theme wirklich zurücksetzen? Alle Ihre Anpassungen gehen verloren."
// ed.themeResetConfirmationOk: "Yes, reset the theme" => "Ja, setzen Sie das Design zurück"
// theme.groupBackground: "Background" => "Hintergrund"
// theme.groupAppearance: "Appearance" => "Aussehen"
// theme.coverDescriptionForecolor: "Description forecolor" => "Beschreibung Vorfarbe"
// signaturepad.showPlaceholder: "Show the placeholder" => "Platzhalter anzeigen"
// signaturepad.placeholder: "Placeholder text" => "Platzhaltertext"
// theme.surveyDescription: "Survey description font" => "Schriftart der Umfragebeschreibung"

// ed.prevFocus: "Focus previous" => "Fokus zurück"
// ed.nextFocus: "Focus next" => "Weiter fokussieren"
// ed.saveTheme: "Save Theme" => "Theme speichern"
// ed.saveThemeTooltip: "Save Theme" => "Theme speichern"
// lg.page_requireName: "Make page required" => "Als Seite erforderlich festlegen"
// lg.panel_requireName: "Make page required" => "Als Seite erforderlich festlegen"
// signaturepad.signatureWidth: "Signature area width" => "Breite des Signaturbereichs"
// signaturepad.signatureHeight: "Signature area height" => "Höhe des Signaturbereichs"
// signaturepad.signatureAutoScaleEnabled: "Auto-scale the signature area" => "Automatisches Skalieren des Signaturbereichs"
// signaturepad.penMinWidth: "Minimum pen width" => "Minimale Stiftbreite"
// signaturepad.penMaxWidth: "Maximum pen width" => "Maximale Stiftbreite"

// ed.propertyGridNoResultsFound: "No results found" => "Keine Ergebnisse gefunden"
// pv.leftRight: "Left and right" => "Links und rechts"
// p.sourceType: "Source type" => "Quellentyp"
// p.fitToContainer: "Fit to container" => "Passend zum Behälter"
// p.setValueExpression: "Set value expression" => "Ausdruck \"Wert festlegen\""
// ed.choicesLoadedFromWebText: "Choices are loaded from a web service." => "Auswahlmöglichkeiten werden aus einem Webdienst geladen."
// ed.choicesLoadedFromWebLinkText: "Go to settings" => "Gehen Sie zu den Einstellungen"
// ed.choicesLoadedFromWebPreviewTitle: "Preview of loaded choice options" => "Vorschau der geladenen Auswahloptionen"
// pe.eachRowUnique: "Prevent duplicate responses in rows" => "Doppelte Beantwortungen in Zeilen verhindern"
// theme.advancedMode: "Advanced mode" => "Erweiterter Modus"
// theme.backgroundCornerRadius: "Background and corner radius" => "Hintergrund und Eckenradius"
// theme.colorsTitle: "Colors" => "Farben"
// theme.font: "Font" => "Schriftart"
// theme.lines: "Lines" => "Linien"
// theme.titleFont: "Title font" => "Schriftart des Titels"
// theme.descriptionFont: "Description font" => "Beschreibung Schriftart"
// theme.shadow: "Shadow effects" => "Schatten-Effekte"
// ed.translateUsigAIFrom: "Translate from: " => "Sprachrichtung: "
// pe.showRefuseItem: "Allow the Refuse to Answer option" => "Zulassen der Option \"Antwort ablehnen\""
// pe.showDontKnowItem: "Allow the Don't Know option" => "Erlauben Sie die Option \"Weiß nicht\""
// pe.showRefuseItem: "Allow the Refuse to Answer option" => "Zulassen der Option \"Antwort ablehnen\""
// pe.showDontKnowItem: "Allow the Don't Know option" => "Erlauben Sie die Option \"Weiß nicht\""
// pv.contain: "Contain" => "Enthalten"
// pv.cover: "Cover" => "Deckel"
// pv.fill: "Fill" => "Füllen"
