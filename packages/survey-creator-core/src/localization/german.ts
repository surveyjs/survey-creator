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
  // Creator tabs
  tabs: {
    preview: "Test",
    theme: "Themen",
    translation: "Übersetzung",
    designer: "Designer",
    editor: "JSON",
    logic: "Logik"
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
    buttongroup: "Schaltfläche-Gruppe"
  },
  toolboxCategories: {
    general: "Allgemein",
    choice: "Auswahl-Fragen",
    text: "Text-Eingabe-Fragen",
    containers: "Kontainer",
    matrix: "Matrix-Fragen",
    misc: "Verschiedenes"
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
    defaultV2Theme: "Standard",
    modernTheme: "Modern",
    defaultTheme: "Standard (veraltet)",
    testSurveyAgain: "Testumfrage wiederholen",
    testSurveyWidth: "Umfragebreite: ",
    navigateToMsg: "Sie werden weitergeleitet: ",
    saveSurvey: "Umfrage speichern",
    saveSurveyTooltip: "Umfrage speichern",
    saveTheme: "Theme speichern",
    saveThemeTooltip: "Theme speichern",
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
    generateValidJSON: "Gültiges JSON generieren",
    generateReadableJSON: "Lesbares JSON generieren",
    toolbox: "Werkzeugleiste",
    "property-grid": "Eigenschaften",
    propertyGridFilteredTextPlaceholder: "Tippen, um zu suchen ...",
    propertyGridNoResultsFound: "Keine Ergebnisse gefunden",
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
    translationDeleteLanguage: "Sind Sie sicher, dass Sie alle Texte für diese Sprache löschen möchten?",
    translationAddLanguage: "Wählen Sie eine Sprache aus",
    translationShowAllStrings: "Alle Texte anzeigen",
    translationShowUsedStringsOnly: "Verwendete Texte",
    translationShowAllPages: "Alle Seiten anzeigen",
    translationNoStrings: "Keine Texte zum Übersetzen. Bitte den Filter anpassen.",
    translationExportToSCVButton: "Export (CSV)",
    translationImportFromSCVButton: "Import (CSV)",
    translateUsigAI: "Alle automatisch übersetzen",
    translateUsigAIFrom: "Sprachrichtung: ",
    translationDialogTitle: "Nicht übersetzte Texte",
    translationMergeLocaleWithDefault: "{0} mit der Standardsprache zusammenführen",
    translationPlaceHolder: "Übersetzung ...",
    translationSource: "Quelle: ",
    translationTarget: "Ziel: ",
    themeExportButton: "Exportieren",
    themeImportButton: "Importieren",
    surveyJsonExportButton: "Exportieren",
    surveyJsonImportButton: "Importieren",
    surveyJsonCopyButton: "In Zwischenablage kopieren",
    themeResetButton: "Theme-Einstellungen auf die Standardeinstellungen zurücksetzen",
    themeResetConfirmation: "Möchten Sie das Theme wirklich zurücksetzen? Alle Ihre Anpassungen gehen verloren.",
    themeResetConfirmationOk: "Ja, Design zurücksetzen.",
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
    surveyPlaceHolder: "Die Umfrage enthält keine Frage. Ziehen Sie ein Element aus der Toolbox hier her oder drücken Sie auf die Schaltfläche unten.",
    pagePlaceHolder: "Die Seite ist leer. Ziehen Sie ein Element aus der Toolbox oder klicken Sie auf die Schaltfläche unten.",
    imagePlaceHolder: "Ziehen Sie ein Bild per Drag & Drop hierher oder klicken Sie auf die Schaltfläche unten und wählen Sie ein Bild zum Hochladen aus",
    surveyPlaceHolderMobile: "Klicken Sie unten auf die Schaltfläche \"Frage hinzufügen\", um mit der Erstellung Ihres Formulars zu beginnen.",
    pagePlaceHolderMobile: "Klicken Sie unten auf die Schaltfläche \"Frage hinzufügen\", um der Seite ein neues Element hinzuzufügen.",
    panelPlaceHolderMobile: "Klicken Sie unten auf die Schaltfläche \"Frage hinzufügen\", um dem Bedienfeld ein neues Element hinzuzufügen.",
    imagePlaceHolderMobile: "Klicken Sie auf die Schaltfläche unten und wählen Sie ein Bild zum Hochladen aus",
    imageChooseImage: "Bild auswählen",
    addNewTypeQuestion: "Add {0}", //{0} is localizable question type
    chooseLogoPlaceholder: "[LOGO]",
    choices_Item: "Artikel ",
    selectFile: "Wählen Sie eine Datei aus",
    removeFile: "Entfernen Sie die Datei",
    lg: {
      addNewItem: "Neue Regel hinzufügen",
      empty_tab: "Erstellen Sie eine Regel, um den Fluss der Umfrage anzupassen.",
      page_visibilityName: "Seite anzeigen/verstecken",
      page_enableName: "Seite aktivieren/deaktivieren",
      page_requireName: "Seite als erforderlich festlegen",
      panel_visibilityName: "Panel anzeigen/verstecken",
      panel_enableName: "Panel aktivieren/deaktivieren",
      panel_requireName: "Panel als erforderlich festlegen",
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
      page_visibilityDescription: "Seite sichtbar machen, wenn der logische Ausdruck wahr ergibt. Andernfalls unsichtbar lassen.",
      panel_visibilityDescription: "Panel sichtbar machen, wenn der logische Ausdruck wahr ergibt. Andernfalls unsichtbar lassen.",
      panel_enableDescription: "Panel zusammen mit all seinen Elementen aktivieren, wenn der logische Ausdruck wahr ergibt. Andernfalls deaktiviert lassen.",
      question_visibilityDescription: "Frage sichtbar machen, wenn der logische Ausdruck wahr ergibt. Andernfalls unsichtbar lassen.",
      question_enableDescription: "Frage aktivieren, wenn der logische Ausdruck wahr ergibt. Andernfalls deaktiviert lassen.",
      question_requireDescription: "Frage wird erforderlich, wenn der logische Ausdruck wahr ergibt.",
      trigger_completeDescription: "Wenn der logische Ausdruck wahr ergibt, wird die Umfrage abgeschlossen und der Benutzer sieht die Abschlussseite der Umfrage.",
      trigger_setvalueDescription: "Wenn Werte, die im logischen Ausdruck verwendet werden, geändert werden und der logische Ausdruck wahr ergibt, dann wird der Wert in die ausgewählte Frage eingesetzt.",
      trigger_copyvalueDescription: "Wenn Werte, die im logischen Ausdruck verwendet werden, geändert werden und der logische Ausdruck wahr ergibt, dann wird der Wert einer ausgewählte Frage kopiert und in eine andere ausgewählte Frage eingesetzt.",
      trigger_skipDescription: "Wenn der logische Ausdruck wahr ergibt, springt die Umfrage zur ausgewählten Frage.",
      trigger_runExpressionDescription: "Wenn der logische Ausdruck wahr ergibt, wird die benutzerdefinierte Anweisung ausgeführt. Sie können optional das Ergebnis der Anweisung in die ausgewählte Frage einsetzen.",
      completedHtmlOnConditionDescription: "Wenn der logische Ausdruck wahr ergibt, wird der Standardtext der Abschlussseite der Umfrage mit dem gegebenen Text ersetzt.",
      itemExpressionText: "Wenn der Ausdruck '{0}' wahr ergibt:", //{0} - the expression
      itemEmptyExpressionText: "Neue Regel",
      page_visibilityText: "Seite {0} sichtbar machen", //{0} page name
      panel_visibilityText: "Panel {0} sichtbar machen", //{0} panel name
      panel_enableText: "Panel {0} aktivieren", //{0} panel name
      question_visibilityText: "Frage {0} sichtbar machen", //{0} question name
      question_enableText: "Frage {0} aktivieren", //{0} question name
      question_requireText: "Frage {0} erforderlich machen", //{0} question name
      question_resetValueText: "Reset-Wert für Frage: {0}", //{0} question name.
      question_setValueText: "Wert zuweisen: {1} zu fragen: {0}",
      column_visibilityText: "Spalte {0} von Frage {1} sichtbar machen", //{0} column name, {1} question name
      column_enableText: "Spalte {0} von Frage {1} aktivieren", //{0} column name, {1} question name
      column_requireText: "Spalte {0} von Frage {1} erforderlich machen", //{0} column name, {1} question name
      column_resetValueText: "Zellenwert für Spalte zurücksetzen: {0}", //{0} column name
      column_setValueText: "Zellenwert zuweisen: {1} zur Spalte: {0}", //{0} column name and {1} setValueExpression
      setValueExpressionPlaceholder: "Ein Ausdruck, dessen Ergebnis der Zielfrage zugewiesen wird.",
      trigger_completeText: "Umfrage abschließen",
      trigger_setvalueText: " In Frage {0} den Wert {1} einsetzen", //{0} question name, {1} setValue
      trigger_setvalueEmptyText: "Fragewert: {0} löschen", //{0} question name
      trigger_copyvalueText: "In Frage {0} den Wert von Frage {1} kopieren", //{0} and {1} question names
      trigger_skipText: "Zu Frage {0} gehen", //{0} question name
      trigger_runExpressionText1: "Folgendee Ausdruck ausführen: '{0}'", //{0} the expression
      trigger_runExpressionText2: " und das Ergebnis in Frage {0} einsetzen", //{0} question name
      completedHtmlOnConditionText: "Benutzerdefinierter Text auf der Abschlussseite der Umfrage anzeigen.",
      showAllQuestions: "Alle Fragen anzeigen",
      showAllActionTypes: "Alle Aktionen anzeigen",
      conditions: "Bedingungen",
      actions: "Aktionen",
      expressionEditorTitle: "Bedingungen definieren",
      actionsEditorTitle: "Aktionen definieren",
      deleteAction: "Aktion löschen",
      addNewAction: "Aktion hinzufügen",
      selectedActionCaption: "Aktion zum Hinzufügen auswählen...",
      expressionInvalid: "Der logische Ausdruck ist leer oder ungültig. Bitte korrigieren Sie ihn.",
      noActionError: "Bitte fügen Sie mindestens eine Aktion hinzu.",
      actionInvalid: "Bitte beheben Sie die bestehenden Probleme in Ihren Aktionen.",
      uncompletedRule_title: "Logische Regeln sind unvollständig",
      uncompletedRule_text: "Sie haben einige der logischen Regeln nicht erfüllt. Wenn Sie den Tab jetzt verlassen, gehen die Änderungen verloren. Möchten Sie den Tab dennoch verlassen, ohne die Änderungen abzuschließen?",
      uncompletedRule_apply: "Ja",
      uncompletedRule_cancel: "Nein, ich möchte die Regeln vervollständigen"
    }
  },
  // Property Editors
  pe: {
    panel: {
      name: "Name des Panels",
      title: "Titel des Panels",
      description: "Beschreibung des Panels",
      visibleIf: "Panel sichtbar machen, wenn",
      requiredIf: "Panel erforderlich machen, wenn",
      questionsOrder: "Reihenfolge der Fragen innerhalb des Panels",
      page: "Panel auf die Seite verschieben",
      startWithNewLine: "Panel in einer neuen Zeile anzeigen",
      state: "Status des Ausblendens des Panels",
      width: "Breite des Inline-Panels",
      minWidth: "Minimale Breite des Panels",
      maxWidth: "Maximale Breite des Panels",
      showNumber: "Nummernfelder"
    },
    paneldynamic: {
      name: "Name des Panels",
      title: "Titel des Panels",
      description: "Beschreibung des Panels",
      visibleIf: "Panel sichtbar machen, wenn",
      requiredIf: "Panel erforderlich machen, wenn",
      page: "Panel auf die Seite verschieben",
      startWithNewLine: "Anzeigen des Panels in einer neuen Zeile",
      state: "Status des Ausblendens des Panels",
      width: "Breite des Inline-Panels",
      minWidth: "Minimale Breite des Panels",
      maxWidth: "Maximale Breite des Panels",
      confirmDelete: "Bestätigen Sie das Löschen des Panels",
      templateDescription: "Muster für die Panelbeschreibung",
      templateTitle: "Muster für den Panel-Titel",
      noEntriesText: "Text für leeres Panel",
      templateTabTitle: "Muster des Tab-Titels",
      templateVisibleIf: "Machen Sie ein einzelnes Panel sichtbar, wenn",
      hideNumber: "Ausblenden der Panel-Nummer",
      titleLocation: "Ausrichtung des Panel-Titels",
      descriptionLocation: "Ausrichtung der Panelbeschreibung",
      templateTitleLocation: "Ausrichtung des Fragetitels",
      templateErrorLocation: "Ausrichtung von Fehlermeldungen",
      newPanelPosition: "Neue Panel-Position",
      keyName: "Doppelte Antworten in der folgenden Frage verhindern"
    },
    question: {
      name: "Name der Frage",
      title: "Titel der Frage",
      description: "Beschreibung der Frage",
      visibleIf: "Frage sichtbar machen, wenn",
      requiredIf: "Frage erforderlich machen, wenn",
      page: "Frage auf die Seite verschieben",
      state: "Status des Ausblendens des Fragefelds",
      hideNumber: "Ausblenden der Fragenummer",
      titleLocation: "Ausrichtung des Fragetitels",
      descriptionLocation: "Ausrichtung der Fragebeschreibung",
      errorLocation: "Ausrichtung von Fehlermeldungen",
      indent: "Innerer Einzug vergrößern",
      width: "Breite der Inline-Frage",
      minWidth: "Minimale Fragebreite",
      maxWidth: "Maximale Fragebreite",
      textUpdateMode: "Eingabefeldwert aktualisieren"
    },
    signaturepad: {
      signatureWidth: "Breite des Signaturbereichs",
      signatureHeight: "Höhe des Signaturbereichs",
      signatureAutoScaleEnabled: "Automatisches Skalieren des Signaturbereichs",
      showPlaceholder: "Platzhalter anzeigen",
      placeholder: "Platzhaltertext",
      placeholderReadOnly: "Platzhaltertext im schreibgeschützten oder Vorschaumodus",
      allowClear: "Schaltfläche \"Löschen\" im Signaturbereich anzeigen",
      penMinWidth: "Minimale Stiftbreite",
      penMaxWidth: "Maximale Stiftbreite",
      penColor: "Farbe des Strichs"
    },
    comment: {
      rows: "Höhe des Eingabefeldes (in Zeilen)"
    },
    showQuestionNumbers: "Fragennummern anzeigen",
    questionStartIndex: "Startindex der Fragen (bspw. \"1\", \"A\", \"a\", ...)",
    expression: {
      name: "Name des Ausdrucks",
      title: "Titel des Ausdrucks",
      description: "Beschreibung des Ausdrucks",
      expression: "Ausdruck"
    },
    trigger: {
      expression: "Ausdruck"
    },
    calculatedvalue: {
      expression: "Ausdruck"
    },
    // survey templates
    survey: {
      title: "Titel",
      description: "Beschreibung der Umfrage"
    },
    page: {
      name: "Name der Seite",
      title: "Titel",
      description: "Seitenbeschreibung",
      visibleIf: "Seite sichtbar machen, wenn",
      requiredIf: "Seite erforderlich machen, wenn",
      maxTimeToFinish: "Zeitlimit zum Beenden der Seite (in Sekunden)",
      questionsOrder: "Reihenfolge der Fragen auf der Seite"
    },
    matrixdropdowncolumn: {
      name: "Name der Spalte",
      title: "Titel der Spalte",
      isUnique: "Doppelte Beantwortungen verhindern",
      width: "Spaltenbreite",
      minWidth: "Minimale Spaltenbreite",
      rows: "Höhe des Eingabefeldes (in Zeilen)",
      visibleIf: "Spalte sichtbar machen, wenn",
      requiredIf: "Spalte erforderlich machen, wenn",
      showInMultipleColumns: "Jede Option in einer separaten Spalte"
    },
    multipletextitem: {
      name: "Name",
      title: "Titel"
    },
    masksettings: {
      saveMaskedValue: "Maskierte Werte in Umfrageergebnissen speichern"
    },
    patternmask: {
      pattern: "Werte-Muster"
    },
    datetimemask: {
      min: "Mindestwert",
      max: "Maximalwert"
    },
    numericmask: {
      allowNegativeValues: "Negative Werte zulassen",
      thousandsSeparator: "Tausender-Trennzeichen",
      decimalSeparator: "Dezimaltrennzeichen",
      precision: "Wertgenauigkeit",
      min: "Mindestwert",
      max: "Maximalwert"
    },
    currencymask: {
      prefix: "Währungs-Präfix",
      suffix: "Währungs-Suffix"
    },
    imageHeight: "Bildhöhe",
    imageWidth: "Bildbreite",
    valueName: "Name der Antwort",
    rateDescriptionLocation: "Ausrichtung der Beschriftung",
    size: "Größe des Eingabefeldes (in Zeichen)",
    cellErrorLocation: "Ausrichtung von Zellenfehlermeldungen",
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
    dragItem: "Element ziehen",
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
    fastEntryChoicesCountError: "Anzahl der Elemente von {0} bis {1} begrenzen",
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
    "listIsEmpty@columns": "Sie haben noch keine Spalten",
    "listIsEmpty@rows": "Sie haben noch keine Zeilen",
    "listIsEmpty@validators": "Sie haben noch keine Validierungsregeln",
    "listIsEmpty@calculatedValues": "Sie haben noch keine benutzerdefinierten Variablen",
    "listIsEmpty@triggers": "Sie haben noch keine Auslöser",
    "listIsEmpty@navigateToUrlOnCondition": "Sie haben noch keine Links",
    "addNew@choices": "Auswahlmöglichkeit hinzufügen",
    "addNew@columns": "Neue Spalte hinzufügen",
    "addNew@rows": "Neue Zeile hinzufügen",
    "addNew@validators": "Neue Regel hinzufügen",
    "addNew@calculatedValues": "Neue Variable hinzufügen",
    "addNew@triggers": "Neuen Auslöser hinzufügen",
    "addNew@navigateToUrlOnCondition": "Neue URL hinzufügen",
    expressionIsEmpty: "Keinen Ausdruck definiert",
    value: "Wert",
    text: "Text",
    rowid: "Zeilen-ID",
    imageLink: "Link auf das Bild",
    columnEdit: "Spalte bearbeiten: {0}",
    itemEdit: "Element bearbeiten: {0}",
    url: "URL",
    path: "Pfad",
    choicesbyurl: {
      url: "URL des Webdienstes",
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
    textWrapEnabled: "Wrap-Auswahl",
    showOtherItem: "\"Sonstiges\" auswählbar?",
    otherText: "Text für \"Sonstiges\"",
    showNoneItem: "Alle Elemente abwählbar?",
    showRefuseItem: "Option \"Antwort ablehnen\" zulassen",
    showDontKnowItem: "Option \"Weiß nicht\" zulassen",
    noneText: "Text für die Abwahl aller Elemente",
    showSelectAllItem: "Alle Elemente auswählbar?",
    selectAllText: "Text für die Auswahl aller Elemente",
    choicesMin: "Minimaler Wert für automatisch erzeugte Elemente",
    choicesMax: "Maximaler Wert für automatisch erzeugte Elemente",
    choicesStep: "Schrittwert für automatisch erzeugte Elemente",
    name: "Name",
    title: "Titel",
    cellType: "Zellentyp",
    colCount: "Spaltenanzahl",
    choicesOrder: "Auswahlreihenfolge",
    visible: "Sichtbar?",
    isRequired: "Erforderlich?",
    markRequired: "Als erforderlich markieren",
    removeRequiredMark: "Erforderliche Markierung entfernen",
    isAllRowRequired: "Eine Antwort in jeder Zeile erforderlich machen",
    eachRowUnique: "Doppelte Beantwortungen in Zeilen verhindern",
    requiredErrorText: "Fehlermeldung bei nicht beantworteten erforderlichen Fragen",
    startWithNewLine: "Mit einer neuen Zeile starten",
    rows: "Zeilenanzahl",
    cols: "Spaltenanzahl",
    placeholder: "Platzhalter",
    showPreview: "Bildvorschau angezeigen",
    storeDataAsText: "Dateininhalt des JSON-Resultats als Text speichern",
    maxSize: "Maximale Dateigröße in Bytes",
    rowCount: "Zeilenanzahl",
    columnLayout: "Spaltenlayout",
    addRowLocation: "Zeilenknopfposition hinzufügen",
    transposeData: "Transponieren von Zeilen in Spalten",
    addRowText: "Text für die Schaltfläche \"Zeile hinzufügen\"",
    removeRowText: "Text für die Schaltfläche \"Zeile entfernen\"",
    rateMin: "Minimum",
    rateMax: "Maximum",
    rateStep: "Schritt Bewertung",
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
    emptyLogicPopupMessage: "Wählen Sie eine Frage aus, um die Bedingungen festzulegen.",
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
    sendResultOnPageNext: "Umfrageergebnisse beim Seitenwechsel automatisch speichern",
    storeOthersAsComment: "\"Sonstige\" Werte als Kommentar speichern",
    showPageTitles: "Seitenbeschreibung anzeigen",
    showPageNumbers: "Seitennummern anzeigen",
    pagePrevText: "Text für die Schaltfläche \"Vorherige Seite\"",
    pageNextText: "Text für die Schaltfläche \"Nächste Seite\"",
    completeText: "Text für die Schaltfläche \"Abschließen\"",
    previewText: "Text für die Schaltfläche \"Vorschau\"",
    editText: "Text für die Schaltfläche \"Antwort bearbeiten\"",
    startSurveyText: "Text für die Schaltfläche \"Umfrage starten\"",
    showNavigationButtons: "Navigationsschaltflächen anzeigen",
    showPrevButton: "Schaltfläche \"Vorherige Seite\" anzeigen (Benutzer können auf die vorherige Seite zurückkehren)",
    firstPageIsStarted: "Die erste Seite der Umfrage ist die Startseite",
    showCompletedPage: "Nach Abschluss die Seite \"Umfrage abgeschlossen\" anzeigen",
    goNextPageAutomatic: "Automatisch zur nächsten Seiten wechseln",
    allowCompleteSurveyAutomatic: "Umfrage automatisch ausfüllen",
    showProgressBar: "Fortschrittsbalken anzeigen",
    questionTitleLocation: "Position des Fragentitels",
    requiredText: "Symbol für erforderliche Fragen",
    questionTitleTemplate: "Template für den Fragentitel. Standard ist: \"{no}. {require} {title}\"",
    questionErrorLocation: "Position der Fehlermeldungen",
    focusFirstQuestionAutomatic: "Erste Frage auf einer neuen Seite fokussieren",
    questionsOrder: "Reihenfolge der Fragen auf der Seite",
    maxTimeToFinish: "Maximale Zeit, um die Umfrage zu beenden",
    maxTimeToFinishPage: "Maximale Zeit, um eine Seite der Umfrage zu beenden",
    showTimerPanel: "Position des Timers",
    showTimerPanelMode: "Modus des Timers",
    renderMode: "Anzeigemodus",
    allowAddPanel: "Hinzufügen eines Panels erlauben",
    allowRemovePanel: "Entfernen eines Panels erlauben",
    panelAddText: "Text für die Schaltfläche \"Panel hinzufügen\"",
    panelRemoveText: "Text für die Schaltfläche \"Panel entfernen\"",
    isSinglePage: "Alle Elemente auf einer Seite anzeigen",
    html: "HTML",
    setValue: "Antwort",
    dataFormat: "Bildformat",
    allowAddRows: "Hinzufügen von Zeilen zulassen",
    allowRemoveRows: "Entfernen von Zeilen zulassen",
    allowRowsDragAndDrop: "Verschieben von Zeilen zulassen",
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
    maskType: "Typ der Eingabemaske",
    maskTypes: {
      none: "Nichts",
      patternmask: "Muster",
      numericmask: "Numerisch",
      datetimemask: "Datum und Uhrzeit",
      currencymask: "Währung"
    },
    focusOnFirstError: "Fokus auf die erste ungültige Antwort setzen",
    checkErrorsMode: "Validierung ausführen",
    navigateToUrl: "Zur externen URL umleiten",
    navigateToUrlOnCondition: "Dynamische URL",
    completedBeforeHtml: "Markup, um anzuzeigen, ob der Benutzer diese Umfrage bereits ausgefüllt hat",
    completedHtml: "Markup der Seite \"Umfrage abgeschlossen\".",
    completedHtmlOnCondition: "Dynamisches Markup der Seite \"Umfrage abgeschlossen\".",
    loadingHtml: "Markup, das angezeigt werden soll, während die Umfrage geladen wird",
    commentText: "Text im Kommentarbereich",
    autocomplete: "Autocomplete-Typ",
    labelTrue: "Bezeichner \"Wahr\".",
    labelFalse: "Bezeichner \"Falsch\"",
    allowClear: "Überschrift der Auswahlmöglichkeiten anzeigen",
    searchMode: "Suchmodus",
    displayStyle: "Wertanzeigestil",
    format: "Formatierte Zeichenfolge",
    maximumFractionDigits: "Maximale Nachkommastellen",
    minimumFractionDigits: "Minimale Nachkommastellen",
    useGrouping: "Gruppierungstrennzeichen anzeigen",
    allowMultiple: "Mehrere Dateien zulassen",
    allowImagesPreview: "Vorschaubilder",
    acceptedTypes: "Akzeptierte Dateitypen",
    waitForUpload: "Warten bis der Upload abgeschlossen ist",
    needConfirmRemoveFile: "Löschen der Datei bestätigen",
    detailPanelMode: "Position des Detailbereichs",
    minRowCount: "Mindestzeilenanzahl",
    maxRowCount: "Maximale Zeilenanzahl",
    confirmDelete: "Zeilenlöschung bestätigen",
    confirmDeleteText: "Bestätigungsmeldung",
    panelCount: "Anfängliche Panel-Anzahl",
    minPanelCount: "Minimale Panelanzahl",
    maxPanelCount: "Maximale Panelanzahl",
    panelsState: "Erweiterungszustand des inneren Bereichs",
    panelPrevText: "Text für die Schaltfläche \"Vorheriges Panel\".",
    panelNextText: "Text für die Schaltfläche \"Nächstes Panel\".",
    showRangeInProgress: "Fortschrittsbalken anzeigen",
    panelRemoveButtonLocation: "Position der Schaltfläche \"Panel entfernen\"",
    hideIfRowsEmpty: "Frage ausblenden, wenn keine Zeilen vorhanden sind",
    hideColumnsIfEmpty: "Spalten ausblenden, wenn keine Zeilen vorhanden sind",
    rateValues: "Benutzerdefinierte Bewertungswerte",
    rateCount: "Anzahl der Bewertung",
    autoGenerate: "Bewertung konfigurieren",
    hideIfChoicesEmpty: "Frage ausblenden, wenn sie keine Auswahlmöglichkeiten enthält",
    minWidth: "Minimale Breite",
    maxWidth: "Maximale Breite",
    width: "Breite ",
    showHeader: "Spaltenüberschriften anzeigen",
    horizontalScroll: "Horizontaler Scrollbar anzeigen",
    columnMinWidth: "Minimale Spaltenbreite",
    rowTitleWidth: "Breite der Zeilenüberschrift",
    valueTrue: "Zu speichender Wert wenn \"Wahr\" ausgewählt wird",
    valueFalse: "Zu speichender Wert wenn \"Falsch\" ausgewählt wird",
    minErrorText: "Fehlermeldung \"Wert liegt unter dem Mindestwert\"",
    maxErrorText: "Fehlermeldung \"Wert überschreitet das Maximum\"",
    otherErrorText: "Fehlermeldung \"Leerer Kommentar\"",
    keyDuplicationError: "Fehlermeldung bei doppelter Beantwortung",
    minSelectedChoices: "Mindestanzahl an Auswahlmöglichkeiten",
    maxSelectedChoices: "Maximum an Auswahlmöglichkeiten",
    showClearButton: "Schaltfläche \"Löschen\" anzeigen",
    logoWidth: "Logobreite",
    logoHeight: "Logohöhe",
    readOnly: "Schreibgeschützt",
    enableIf: "Bearbeitbar, wenn",
    emptyRowsText: "Meldung \"Keine Zeilen\"",
    separateSpecialChoices: "Spezielle Auswahlmöglichkeiten separieren",
    choicesFromQuestion: "Auswahlmöglichkeiten aus folgender Frage kopieren",
    choicesFromQuestionMode: "Auswahlmöglichkeiten, die kopiert werden sollen",
    progressBarShowPageTitles: "Seitentitel in der Fortschrittsbalke anzeigen",
    progressBarShowPageNumbers: "Seitenzahlen in der Fortschrittsbalke anzeigen",
    showCommentArea: "Kommentarbereich anzeigen",
    commentPlaceholder: "Platzhaltertext für den Kommentarbereich",
    displayRateDescriptionsAsExtremeItems: "Beschreibung für minimale und maximale Bewertung als Werte anzeigen",
    rowsOrder: "Reihenfolge der Zeilen",
    columnsLayout: "Spalten-Layout",
    columnColCount: "Anzahl der geschachtelten Spalten",
    correctAnswer: "Richtige Antwort",
    defaultPanelValue: "Standardwerte",
    cells: "Zellentexte",
    keyName: "Spalte \"Schlüssel\"",
    itemvalue: {
      visibleIf: "Option sichtbar machen, wenn",
      enableIf: "Option auswählbar machen, wenn"
    },
    "itemvalue@rows": {
      visibleIf: "Zeile sichtbar machen, wenn",
      enableIf: "Zeile bearbeitbar machen, wenn"
    },
    imageitemvalue: {
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
    // Creator tabs
    tabs: {
      panel: {
        layout: "Panel-Layout"
      },
      general: "Allgemein",
      fileOptions: "Optionen",
      html: "Html-Editor",
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
      triggers: "Auslöser",
      templateTitle: "Titeltemplate",
      totals: "Summen",
      logic: "Logik",
      mask: "Einstellungen für die Eingabemaske",
      layout: {
        panel: "Layout",
        question: "Layout",
        base: "Layout"
      },
      data: "Daten",
      validation: "Validierung",
      cells: "Zellen",
      showOnCompleted: "Abschluss",
      logo: "Logo im Umfragetitel",
      slider: "Slider",
      expression: "Ausdruck",
      questionSettings: "Einstellungen für Fragen",
      header: "Titelzeile",
      background: "Hintergrund",
      appearance: "Erscheinungsbild",
      others: "Weiteres"
    },
    editProperty: "Eigenschaft bearbeiten '{0}'",
    items: "Eiträge",
    choicesVisibleIf: "Auswahl sichtbar machen, wenn",
    choicesEnableIf: "Auswahl wählbar machen, wenn",
    columnsEnableIf: "Spalten sichtbar machen, wenn",
    rowsEnableIf: "Zeilen sichtbar machen, wenn",
    innerIndent: "Inneren Einzug vergrößern",
    defaultValueFromLastRow: "Werte aus der letzten Zeile als Standard festlegen",
    defaultValueFromLastPanel: "Werte aus dem letzten Panel als Standard festlegen",
    enterNewValue: "Bitte einen Wert eingeben.",
    noquestions: "Die Umfrage enthält keine Fragen.",
    createtrigger: "Bitte einen Auslöser eingeben.",
    titleKeyboardAdornerTip: "Drücken Sie ENTER, um bearbeiten zu können",
    keyboardAdornerTip: "Drücken Sie ENTER, um das Element zu bearbeiten, ENTFERNEN, um das Element zu entfernen, STRG + PFEIL NACH OBEN/UNTEN, um das Element zu verschieben",
    triggerOn: "Ein",
    triggerMakePagesVisible: "Seiten sichtbar machen:",
    triggerMakeQuestionsVisible: "Elemente sichtbar machen:",
    triggerCompleteText: "Bei Erfolg die Umfrage abschließen.",
    triggerNotSet: "Der Auslöser ist nicht gesetzt",
    triggerRunIf: "Ausführen wenn ...",
    triggerSetToName: "Wert ändern von: ",
    triggerFromName: "Wert kopieren von: ",
    triggerRunExpression: "Diesen Ausdruck ausführen:",
    triggerSetValue: "nach: ",
    triggerGotoName: "Zu Frage:",
    triggerIsVariable: "Die Variable nicht in das Umfrageergebnis setzen.",
    triggerRunExpressionEmpty: "Bitte geben Sie einen gültigen Ausdruck ein",
    emptyExpressionPlaceHolder: "Ausdruck hier eingeben ...",
    noFile: "Keine Datei ausgewählt",
    clearIfInvisible: "Wert löschen, wenn die Frage ausgeblendet wird",
    valuePropertyName: "Werte in dieser Eigenschaft speichern",
    searchEnabled: "Suche aktivieren",
    hideSelectedItems: "Ausgewählte Elemente ausblenden",
    closeOnSelect: "Dropdown-Menü nach der Auswahl schließen",
    verticalAlign: "Vertikale Ausrichtung",
    alternateRows: "Zeilen wechseln",
    columnsVisibleIf: "Spalten sichtbar machen, wenn",
    rowsVisibleIf: "Zeilen sichtbar machen, wenn",
    otherPlaceholder: "Platzhaltertext für den Kommentarbereich",
    filePlaceholder: "Platzhaltertext für Dateien",
    photoPlaceholder: "Platzhaltertext für Fotos",
    fileOrPhotoPlaceholder: "Datei- oder Foto-Platzhaltertext",
    rateType: "Bewertungssymbol",
    url_placeholder: "Bsp.: https://api.example.com/books",
    path_placeholder: "Bsp.: categories.fiction",
    questionStartIndex_placeholder: "Bsp.: a)",
    width_placeholder: "Bsp.: 6in",
    minWidth_placeholder: "Bsp.: 600px",
    maxWidth_placeholder: "Bsp.: 50%",
    imageHeight_placeholder: "auto",
    imageWidth_placeholder: "auto",
    theme: {
      themeName: "Thema",
      isPanelless: "Aussehen der Frage",
      editorPanel: "Hintergrund und Eckenradius",
      questionPanel: "Hintergrund und Eckenradius",
      primaryColor: "Akzentfarbe",
      panelBackgroundTransparency: "Deckkraft des Bedienfeldhintergrunds",
      questionBackgroundTransparency: "Deckkraft des Hintergrunds der Frage",
      fontSize: "Schriftgrad",
      scale: "Maßstab",
      cornerRadius: "Ecken-Radius",
      pageTitle: "Schriftart des Titels",
      pageDescription: "Beschreibung Schriftart",
      questionTitle: "Schriftart des Titels",
      questionDescription: "Beschreibung Schriftart",
      editorFont: "Schriftart",
      backgroundOpacity: "Undurchsichtigkeit",
      "--sjs-font-family": "Schriftfamilie",
      "--sjs-general-backcolor-dim": "Hintergrundfarbe",
      "--sjs-primary-backcolor": "Akzent-Hintergrund",
      "--sjs-primary-forecolor": "Akzent Vordergrund",
      "--sjs-shadow-small": "Schatten-Effekte",
      "--sjs-shadow-inner": "Schatten-Effekte",
      "--sjs-border-default": "Farben"
    },
    "header@header": {
      headerView: "Ansehen",
      logoPosition: "Logo-Position",
      surveyTitle: "Schriftart des Umfragetitels",
      surveyDescription: "Schriftart der Umfragebeschreibung",
      headerTitle: "Schriftart des Umfragetitels",
      headerDescription: "Schriftart der Umfragebeschreibung",
      inheritWidthFrom: "Breite des Inhaltsbereichs",
      textAreaWidth: "Textbreite",
      backgroundColorSwitch: "Hintergrundfarbe",
      backgroundImage: "Hintergrundbild",
      backgroundImageOpacity: "Undurchsichtigkeit",
      overlapEnabled: "Überlappung",
      logoPositionX: "Logo-Position",
      titlePositionX: "Titelposition",
      descriptionPositionX: "Beschreibung Position"
    }
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
    selected: "Ausgewählt",
    unselected: "Deaktiviert",
    decimal: "Dezimal",
    currency: "Währung",
    percent: "Prozent",
    firstExpanded: "ausgeklappt (erstes Element)",
    off: "aus",
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
    center: "Mitte",
    leftRight: "Links und rechts",
    middle: "Mitte",
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
    edit: "Bearbeiten",
    display: "Anzeigen",
    contain: "Enthalten",
    cover: "Deckel",
    fill: "Füllen",
    next: "Nächster",
    last: "Letzte",
    onComplete: "Wenn die Umfrage abgeschlossen wird",
    onHidden: "Wenn die Umfrage versteckt wird",
    onHiddenContainer: "Wenn die Frage oder deren Panel/Seite versteckt wird",
    clearInvisibleValues: {
      none: "Nie"
    },
    clearIfInvisible: {
      none: "Nie"
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
    onNextPage: "Wenn die Seite gewechselt wird",
    onValueChanged: "Wenn ein Wert geändert wird",
    onValueChanging: "Bevor eine Antwort geändert wird",
    questionsOnPageMode: {
      standard: "Ursprüngliche Struktur",
      singlePage: "Alle Fragen auf einer Seite anzeigen",
      questionPerPage: "Eine Frage pro Seite anzeigen"
    },
    noPreview: "Keine Vorschau",
    showAllQuestions: "Vorschau mit allen Fragen anzeigen",
    showAnsweredQuestions: "Vorschau mit beantworteten Fragen anzeigen",
    pages: "Seiten",
    questions: "Fragen",
    requiredQuestions: "Erforderliche Fragen",
    correctQuestions: "Richtig beantwortete Fragen",
    buttons: "Schaltflächen",
    underInput: "Unterhalb des Eingabefelds",
    underTitle: "Unterhalb des Titels",
    onBlur: "Bei verlorenem Fokus",
    onTyping: "Während der Eingabe",
    underRow: "Unter der Reihe",
    underRowSingle: "Unter der Zeile ist nur ein Bereich sichtbar",
    auto: "Auto",
    showNavigationButtons: {
      none: "Versteckt"
    },
    showTimerPanel: {
      none: "Versteckt"
    },
    showTimerPanelMode: {
      all: "Beide"
    },
    addRowLocation: {
      default: "Basierend auf dem Matrix-Layout"
    },
    panelsState: {
      default: "Benutzer können Panele nicht ein- oder ausblenden",
      collapsed: "Alle Panele einklappen",
      expanded: "Alle Panele ausklappen",
      firstExpanded: "Erstmals erweitert"
    },
    widthMode: {
      static: "Statisch",
      responsive: "Anpassend"
    },
    contentMode: {
      image: "Bild",
      video: "Video",
      youtube: "YouTube (Englisch)"
    },
    displayMode: {
      buttons: "Tasten",
      dropdown: "Dropdown-Liste"
    },
    rateColorMode: {
      default: "Default",
      scale: "Maßstab"
    },
    scaleColorMode: {
      monochrome: "Monochrom",
      colored: "Farbig"
    },
    autoGenerate: {
      "true": "Generieren",
      "false": "Manuell Eintragen"
    },
    rateType: {
      labels: "Beschriftung",
      stars: "Sterne",
      smileys: "Smileys"
    },
    state: {
      default: "Verschlossen"
    },
    showQuestionNumbers: {
      default: "Automatische Nummerierung",
      on: "Automatische Nummerierung",
      onPage: "Auf jeder Seite zurücksetzen",
      onpanel: "Bei jedem Panel zurücksetzen",
      onPanel: "Bei jedem Panel zurücksetzen",
      onSurvey: "Weiter in der Umfrage",
      off: "Keine Nummerierung"
    },
    descriptionLocation: {
      underTitle: "Unter dem Titel der Frage",
      underInput: "Unter dem Eingabefeld"
    },
    selectToRankAreasLayout: {
      horizontal: "Neben der Auswahl",
      vertical: "Über der Auswahl"
    },
    displayStyle: {
      decimal: "Dezimal",
      currency: "Währung",
      percent: "Prozentsatz",
      date: "Datum"
    },
    totalDisplayStyle: {
      decimal: "Dezimal",
      currency: "Währung",
      percent: "Prozentsatz",
      date: "Datum"
    },
    rowsOrder: {
      initial: "Original"
    },
    questionsOrder: {
      initial: "Original"
    },
    showProgressBar: {
      off: "Versteckt",
      topbottom: "oben und unten",
      aboveheader: "Über der Kopfzeile",
      belowheader: "Unterhalb der Kopfzeile"
    },
    sum: "Summe",
    count: "Zahl",
    min: "Min",
    max: "Max",
    avg: "Avg",
    searchMode: {
      contains: "Enthält",
      startsWith: "Beginnt mit"
    },
    backgroundImageFit: {
      auto: "Auto",
      cover: "Deckel",
      contain: "Enthalten",
      fill: "Strecken",
      tile: "Fliese"
    },
    backgroundImageAttachment: {
      fixed: "Fest",
      scroll: "Schriftrolle"
    },
    headerView: {
      basic: "Grundlegend",
      advanced: "Fortgeschritten"
    },
    inheritWidthFrom: {
      survey: "Wie bei der Umfrage",
      container: "An Container anpassen"
    },
    backgroundColorSwitch: {
      none: "Nichts",
      accentColor: "Akzentfarbe",
      custom: "Gewohnheit"
    },
    colorPalette: {
      light: "Licht",
      dark: "Dunkel"
    },
    isPanelless: {
      "false": "Vorgabe",
      "true": "Ohne Paneele"
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
    bootstrap: "Als Bootstrap-Framework",
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
    loadFromServer: "Umfrage als JSON vom Server laden",
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
  peplaceholder: {
    patternmask: {
      pattern: "Bsp.: +1(999)-999-99-99"
    },
    datetimemask: {
      pattern: "Beispiel: mm/tt/jjjj"
    },
    currencymask: {
      prefix: "Bsp.: $",
      suffix: "Bsp.: USD"
    }
  },
  pehelp: {
    panel: {
      name: "Eine Panel-ID, die für die Befragten nicht sichtbar ist.",
      description: "Geben Sie einen Untertitel für das Panel ein.",
      visibleIf: "Verwenden Sie das Zauberstabsymbol, um eine bedingte Regel festzulegen, die die Sichtbarkeit des Panels bestimmt.",
      enableIf: "Verwenden Sie das Zauberstabsymbol, um eine bedingte Regel festzulegen, die den schreibgeschützten Modus für das Panel deaktiviert.",
      requiredIf: "Verwenden Sie das Zauberstabsymbol, um eine bedingte Regel festzulegen, die die Übermittlung von Umfragen verhindert, es sei denn, mindestens eine verschachtelte Frage enthält eine Antwort.",
      questionTitleLocation: "Gilt für alle Fragen in diesem Bereich. Wenn Sie diese Einstellung außer Kraft setzen möchten, definieren Sie Regeln für die Titelausrichtung für einzelne Fragen. Die Option \"Vererben\" wendet die Einstellung auf Seitenebene (falls gesetzt) oder auf Umfrageebene an (standardmäßig \"Oben\").",
      questionErrorLocation: "Legt die Position einer Fehlermeldung in Bezug auf alle Fragen innerhalb des Bereichs fest. Die Option \"Vererben\" wendet die Einstellung auf Seitenebene (falls gesetzt) oder auf Umfrageebene an.",
      questionsOrder: "Behält die ursprüngliche Reihenfolge der Fragen bei oder randomisiert sie. Die Option \"Vererben\" wendet die Einstellung auf Seitenebene (falls gesetzt) oder auf Umfrageebene an.",
      page: "Positioniert das Panel am Ende einer ausgewählten Seite.",
      innerIndent: "Fügt Abstand oder Rand zwischen dem Inhalt des Panels und dem linken Rand des Panels hinzu.",
      startWithNewLine: "Deaktivieren Sie diese Option, um den Bereich in einer Zeile mit der vorherigen Frage oder dem vorherigen Bereich anzuzeigen. Die Einstellung gilt nicht, wenn der Bereich das erste Element in Ihrem Formular ist.",
      state: "Wählen Sie aus: \"Erweitert\" - das Panel wird vollständig angezeigt und kann eingeklappt werden; \"Reduziert\" - das Panel zeigt nur den Titel und die Beschreibung an und kann erweitert werden; \"Gesperrt\" - das Panel wird vollständig angezeigt und kann nicht eingeklappt werden.",
      width: "Legt die Breite des Fensters im Verhältnis zu anderen Vermessungselementen in derselben Linie fest. Akzeptiert CSS-Werte (px, %, in, pt usw.)."
    },
    paneldynamic: {
      name: "Eine Panel-ID, die für die Befragten nicht sichtbar ist.",
      description: "Geben Sie einen Untertitel für das Panel ein.",
      visibleIf: "Verwenden Sie das Zauberstabsymbol, um eine bedingte Regel festzulegen, die die Sichtbarkeit des Panels bestimmt.",
      enableIf: "Verwenden Sie das Zauberstabsymbol, um eine bedingte Regel festzulegen, die den schreibgeschützten Modus für das Panel deaktiviert.",
      requiredIf: "Verwenden Sie das Zauberstabsymbol, um eine bedingte Regel festzulegen, die die Übermittlung von Umfragen verhindert, es sei denn, mindestens eine verschachtelte Frage enthält eine Antwort.",
      templateTitleLocation: "Gilt für alle Fragen in diesem Bereich. Wenn Sie diese Einstellung außer Kraft setzen möchten, definieren Sie Regeln für die Titelausrichtung für einzelne Fragen. Die Option \"Vererben\" wendet die Einstellung auf Seitenebene (falls gesetzt) oder auf Umfrageebene an (standardmäßig \"Oben\").",
      templateErrorLocation: "Legt die Position einer Fehlermeldung in Bezug auf eine Frage mit ungültiger Eingabe fest. Wählen Sie zwischen: \"Oben\" - ein Fehlertext wird am oberen Rand des Fragefelds platziert; \"Unten\" - ein Fehlertext wird am unteren Rand des Fragefelds platziert. Die Option \"Vererben\" wendet die Einstellung auf Seitenebene (falls gesetzt) oder auf Umfrageebene an (standardmäßig \"Oben\").",
      errorLocation: "Legt die Position einer Fehlermeldung in Bezug auf alle Fragen innerhalb des Bereichs fest. Die Option \"Vererben\" wendet die Einstellung auf Seitenebene (falls gesetzt) oder auf Umfrageebene an.",
      page: "Positioniert das Panel am Ende einer ausgewählten Seite.",
      innerIndent: "Fügt Abstand oder Rand zwischen dem Inhalt des Panels und dem linken Rand des Panels hinzu.",
      startWithNewLine: "Deaktivieren Sie diese Option, um den Bereich in einer Zeile mit der vorherigen Frage oder dem vorherigen Bereich anzuzeigen. Die Einstellung gilt nicht, wenn der Bereich das erste Element in Ihrem Formular ist.",
      state: "Wählen Sie aus: \"Erweitert\" - das Panel wird vollständig angezeigt und kann eingeklappt werden; \"Reduziert\" - das Panel zeigt nur den Titel und die Beschreibung an und kann erweitert werden; \"Gesperrt\" - das Panel wird vollständig angezeigt und kann nicht eingeklappt werden.",
      width: "Legt die Breite des Fensters im Verhältnis zu anderen Vermessungselementen in derselben Linie fest. Akzeptiert CSS-Werte (px, %, in, pt usw.).",
      templateTitle: "Geben Sie eine Vorlage für die Titeln von dynamischen Panele. Verwenden Sie {panelIndex} für die allgemeine Position des Panels und {visiblePanelIndex} für die Reihenfolge der sichtbaren Panele. Fügen Sie diese Platzhalter in das Muster ein, um eine automatische Nummerierung hinzuzufügen.",
      templateTabTitle: "Geben Sie eine Vorlage für Tab-titel ein. Verwenden Sie {panelIndex} für die allgemeine Position eines Panels und {visiblePanelIndex} für die Reihenfolge der sichtbaren Panele. Fügen Sie diese Platzhalter in das Muster ein, um eine automatische Nummerierung hinzuzufügen.",
      templateVisibleIf: "Mit dieser Einstellung können Sie die Sichtbarkeit einzelner Panele innerhalb des dynamischen Panels steuern. Verwenden Sie den Platzhalter '{panel}', um auf das aktuelle Panel in Ihrem Ausdruck zu verweisen.",
      titleLocation: "Diese Einstellung wird automatisch von allen Fragen in diesem Bereich übernommen. Wenn Sie diese Einstellung außer Kraft setzen möchten, definieren Sie Regeln für die Titelausrichtung für einzelne Fragen. Die Option \"Vererben\" wendet die Einstellung auf Seitenebene (falls gesetzt) oder auf Umfrageebene an (standardmäßig \"Oben\").",
      descriptionLocation: "Die Option \"Vererben\" wendet die Einstellung auf Seitenebene (falls gesetzt) oder auf Umfrageebene an (standardmäßig unter dem Panel-Titel).",
      newPanelPosition: "Definiert die Position eines neu hinzugefügten Panels. Standardmäßig werden neue Panele am Ende hinzugefügt. Wählen Sie \"Weiter\", um ein neues Panel nach dem aktuellen einzufügen.",
      defaultValueFromLastPanel: "Dupliziert die Antworten aus dem letzten Bereich und weist sie dem nächsten hinzugefügten dynamischen Bereich zu.",
      keyName: "Verweisen Sie auf einen Fragenamen, um einen Benutzer aufzufordern, in jedem Bereich eine eindeutige Antwort auf diese Frage zu geben."
    },
    defaultValueExpression: "Mit dieser Einstellung können Sie einen Standardantwortwert basierend auf einem Ausdruck zuweisen. Der Ausdruck kann grundlegende Berechnungen enthalten - '{q1_id} + {q2_id}', boolesche Ausdrücke wie '{age} > 60' und Funktionen: 'iif()', 'today()', 'age()', 'min()', 'max()', 'avg()' usw. Der durch diesen Ausdruck ermittelte Wert dient als anfänglicher Standardwert, der durch die manuelle Eingabe eines Befragten überschrieben werden kann.",
    resetValueIf: "Verwenden Sie das Zauberstabsymbol, um eine Bedingungsregel festzulegen, die bestimmt, wann die Eingabe eines Befragten auf den Wert zurückgesetzt wird, der auf dem Wert \"Standardwertausdruck\" oder \"Wertausdruck festlegen\" oder auf dem Wert \"Standardantwort\" (falls einer dieser Werte festgelegt ist) basiert.",
    setValueIf: "Verwenden Sie das Zauberstabsymbol, um eine Bedingungsregel festzulegen, die bestimmt, wann der \"Wertausdruck festlegen\" ausgeführt werden soll, und weisen Sie den resultierenden Wert dynamisch als Antwort zu.",
    setValueExpression: "Geben Sie einen Ausdruck an, der den Wert definiert, der festgelegt werden soll, wenn die Bedingungen in der Regel \"Wert festlegen, wenn\" erfüllt sind. Der Ausdruck kann grundlegende Berechnungen enthalten - '{q1_id} + {q2_id}', boolesche Ausdrücke wie '{age} > 60' und Funktionen: 'iif()', 'today()', 'age()', 'min()', 'max()', 'avg()' usw. Der durch diesen Ausdruck ermittelte Wert kann durch die manuelle Eingabe eines Befragten überschrieben werden.",
    question: {
      name: "Eine Frage-ID, die für die Befragten nicht sichtbar ist.",
      description: "Geben Sie einen Untertitel für die Frage ein.",
      visibleIf: "Verwenden Sie das Zauberstabsymbol, um eine bedingte Regel festzulegen, die die Sichtbarkeit von Fragen bestimmt.",
      enableIf: "Verwenden Sie das Zauberstabsymbol, um eine bedingte Regel festzulegen, die den schreibgeschützten Modus für die Frage deaktiviert.",
      requiredIf: "Verwenden Sie das Zauberstabsymbol, um eine bedingte Regel festzulegen, die verhindert, dass die Umfrage fortgesetzt oder gesendet wird, es sei denn, die Frage wurde beantwortet.",
      startWithNewLine: "Deaktivieren Sie diese Option, um die Frage in einer Zeile mit der vorherigen Frage oder dem vorherigen Bereich anzuzeigen. Die Einstellung gilt nicht, wenn die Frage das erste Element in Ihrem Formular ist.",
      page: "Positioniert die Frage an das Ende einer ausgewählten Seite.",
      state: "Wählen Sie aus: \"Erweitert\" - das Fragefeld wird vollständig angezeigt und kann eingeklappt werden; \"Zugeklappt\" - das Fragefeld zeigt nur den Titel und die Beschreibung an und kann erweitert werden; \"Gesperrt\" - das Fragefeld wird vollständig angezeigt und kann nicht eingeklappt werden.",
      titleLocation: "Überschreibt Regeln für die Titelausrichtung, die auf Bereichs-, Seiten- oder Umfrageebene definiert sind. Mit der Option \"Vererben\" werden alle übergeordneten Einstellungen (falls gesetzt) oder Einstellungen auf Umfrageebene (\"Standardmäßig oben\") angewendet.",
      descriptionLocation: "Die Option \"Vererben\" wendet die Einstellung auf Umfrageebene an (\"Standardmäßig unter dem Fragetitel\").",
      errorLocation: "Legt die Position einer Fehlermeldung in Bezug auf die Frage mit ungültiger Eingabe fest. Wählen Sie zwischen: \"Oben\" - ein Fehlertext wird am oberen Rand des Fragefelds platziert; \"Unten\" - ein Fehlertext wird am unteren Rand des Fragefelds platziert. Die Option \"Vererben\" wendet die Einstellung auf Umfrageebene an (standardmäßig \"Oben\").",
      indent: "Fügt Leerzeichen oder Ränder zwischen dem Inhalt der Frage und dem linken Rand des Fragefelds hinzu.",
      width: "Legt die Breite der Frage im Verhältnis zu anderen Umfrageelementen in derselben Zeile fest. Akzeptiert CSS-Werte (px, %, in, pt usw.).",
      surveyvalidator: {
        expression: "Verwenden Sie das Zauberstabsymbol, um eine Validierungsregel für die Frage festzulegen."
      },
      textUpdateMode: "Wählen Sie aus: \"Bei Fokusverlust\" - der Wert wird aktualisiert, wenn das Eingabefeld den Fokus verliert; \"Während der Eingabe\" - der Wert wird in Echtzeit aktualisiert, während Benutzer tippen. Die Option \"Vererben\" wendet die Einstellung auf Umfrageebene an (\"Standardmäßig bei verlorenem Fokus\").",
      url: "Sie können einen beliebigen Webdienst als Datenquelle für Multiple-Choice-Fragen verwenden. Um Auswahlwerte aufzufüllen, geben Sie die URL des Diensts ein, der die Daten bereitstellt.",
      searchMode: "Ein Vergleichsvorgang, der zum Filtern der Dropdownliste verwendet wird.",
      textWrapEnabled: "Lange Texte in Auswahloptionen generieren automatisch Zeilenumbrüche, die in das Dropdown-Menü passen. Deaktivieren Sie diese Option, wenn die Texte abgeschnitten werden sollen."
    },
    signaturepad: {
      signatureWidth: "Legt die Breite des angezeigten Signaturbereichs und des resultierenden Bildes fest.",
      signatureHeight: "Legt die Höhe des angezeigten Signaturbereichs und des resultierenden Bildes fest.",
      signatureAutoScaleEnabled: "Wählen Sie diese Option aus, wenn der Signaturbereich den gesamten verfügbaren Platz innerhalb des Fragefelds ausfüllen soll, während das Standardseitenverhältnis von 3:2 beibehalten wird. Wenn benutzerdefinierte Werte für Breite und Höhe festgelegt sind, behält die Einstellung das Seitenverhältnis dieser Abmessungen bei."
    },
    file: {
      imageHeight: "Passt die Höhe des Bildes in den Umfrageergebnissen an.",
      imageWidth: "Passt die Breite des Bildes in den Umfrageergebnissen an."
    },
    image: {
      contentMode: "Die Option \"Auto\" bestimmt automatisch den geeigneten Anzeigemodus - Bild, Video oder YouTube - basierend auf der bereitgestellten Quell-URL."
    },
    imagepicker: {
      imageHeight: "Überschreibt die minimalen und maximalen Höhenwerte.",
      imageWidth: "Überschreibt die minimalen und maximalen Breitenwerte.",
      choices: "\"Wert\" dient als Element-ID, die in bedingten Regeln verwendet wird. Den Befragten wird \"Text\" angezeigt.",
      contentMode: "Wählen Sie zwischen \"Bild\" und \"Video\", um den Inhaltsmodus der Medienauswahl festzulegen. Wenn \"Bild\" ausgewählt ist, stellen Sie sicher, dass es sich bei allen bereitgestellten Optionen um Bilddateien in den folgenden Formaten handelt: JPEG, GIF, PNG, APNG, SVG, BMP, ICO. Wenn \"Video\" ausgewählt ist, stellen Sie sicher, dass alle Optionen direkte Links zu Videodateien in den folgenden Formaten sind: MP4, MOV, WMV, FLV, AVI, MKV. Bitte beachten Sie, dass YouTube-Links für Videooptionen nicht unterstützt werden."
    },
    text: {
      size: "Diese Einstellung ändert nur die Größe des Eingabefelds und wirkt sich nicht auf die Breite des Fragefelds aus. Um die zulässige Eingabelänge zu begrenzen, gehen Sie zu <b>Validierung → Maximales Zeichenlimit</b>."
    },
    comment: {
      rows: "Legt die Anzahl der angezeigten Zeilen im Eingabefeld fest. Wenn die Eingabe mehr Zeilen einnimmt, wird die Bildlaufleiste angezeigt."
    },
    // survey templates
    survey: {
      mode: "Wählen Sie zwischen: \"Bearbeiten\" - ermöglicht es den Befragten, Ihre Umfrage auszufüllen; \"Anzeigen\" - deaktiviert die Formularbearbeitung."
    },
    matrixdropdowncolumn: {
      name: "Eine Spalten-ID, die für die Befragten nicht sichtbar ist.",
      isUnique: "Wenn diese Option für eine Spalte aktiviert ist, muss ein Befragter für jede Frage in dieser Spalte eine eindeutige Antwort geben.",
      rows: "Legt die Anzahl der angezeigten Zeilen im Eingabefeld fest. Wenn die Eingabe mehr Zeilen einnimmt, wird die Bildlaufleiste angezeigt.",
      visibleIf: "Verwenden Sie das Zauberstabsymbol, um eine bedingte Regel festzulegen, die die Sichtbarkeit von Spalten bestimmt.",
      enableIf: "Verwenden Sie das Zauberstabsymbol, um eine Bedingungsregel festzulegen, die den schreibgeschützten Modus für die Spalte deaktiviert.",
      requiredIf: "Verwenden Sie das Zauberstabsymbol, um eine bedingte Regel festzulegen, die die Übermittlung von Umfragen verhindert, es sei denn, mindestens eine verschachtelte Frage enthält eine Antwort.",
      showInMultipleColumns: "Wenn diese Option aktiviert ist, wird für jede Auswahloption eine eigene Spalte erstellt."
    },
    widthMode: "Wählen Sie aus: \"Statisch\" - legt eine feste Breite fest; \"Responsive\" - lässt die Umfrage die gesamte Breite des Bildschirms einnehmen; \"Auto\" - wendet je nach verwendetem Fragetyp einen der beiden an.",
    cookieName: "Cookies verhindern, dass Benutzer dieselbe Umfrage zweimal ausfüllen.",
    logo: "Fügen Sie einen Bildlink ein (keine Größenbeschränkung) oder klicken Sie auf das Ordnersymbol, um eine Datei von Ihrem Computer (bis zu 64 KB) zu durchsuchen.",
    logoWidth: "Legt eine Logobreite in CSS-Einheiten (px, %, in, pt usw.) fest.",
    logoHeight: "Legt die Höhe eines Logos in CSS-Einheiten (px, %, in, pt usw.) fest.",
    logoFit: "Wählen Sie aus: \"Keine\" - das Bild behält seine ursprüngliche Größe; \"Enthalten\" - die Größe des Bildes wird angepasst, wobei das Seitenverhältnis beibehalten wird. \"Cover\" - das Bild füllt den gesamten Rahmen aus, während das Seitenverhältnis beibehalten wird. \"Füllen\" - Das Bild wird gestreckt, um den Rahmen auszufüllen, ohne das Seitenverhältnis beizubehalten.",
    goNextPageAutomatic: "Wählen Sie diese Option aus, wenn die Umfrage automatisch zur nächsten Seite weitergeleitet werden soll, nachdem ein Befragter alle Fragen auf der aktuellen Seite beantwortet hat.",
    allowCompleteSurveyAutomatic: "Wählen Sie diese Option aus, wenn die Umfrage automatisch abgeschlossen werden soll, nachdem ein Befragter alle Fragen beantwortet hat.",
    showNavigationButtons: "Legt die Sichtbarkeit und Position von Navigationsschaltflächen auf einer Seite fest.",
    showProgressBar: "Legt die Sichtbarkeit und Position einer Statusanzeige fest. Der Wert \"Auto\" zeigt den Fortschrittsbalken über oder unter der Kopfzeile der Umfrage an.",
    showPreviewBeforeComplete: "Aktivieren Sie die Vorschauseite nur mit allen oder beantworteten Fragen.",
    questionTitleLocation: "Gilt für alle Fragen innerhalb der Umfrage. Diese Einstellung kann durch Regeln für die Titelausrichtung auf niedrigeren Ebenen außer Kraft gesetzt werden: Bereich, Seite oder Frage. Eine Einstellung auf niedrigerer Ebene überschreibt die Einstellung auf einer höheren Ebene.",
    requiredText: "Ein Symbol oder eine Sequenz von Symbolen, die darauf hinweist, dass eine Antwort erforderlich ist.",
    questionStartIndex: "Geben Sie eine Zahl oder einen Buchstaben ein, mit der Sie die Nummerierung beginnen möchten.",
    questionErrorLocation: "Legt die Position einer Fehlermeldung in Bezug auf die Frage mit ungültiger Eingabe fest. Wählen Sie zwischen: \"Oben\" - ein Fehlertext wird am oberen Rand des Fragefelds platziert; \"Unten\" - ein Fehlertext wird am unteren Rand des Fragefelds platziert.",
    focusFirstQuestionAutomatic: "Wählen Sie diese Option aus, wenn das erste Eingabefeld auf jeder Seite für die Texteingabe bereit sein soll.",
    questionsOrder: "Behält die ursprüngliche Reihenfolge der Fragen bei oder randomisiert sie. Die Auswirkungen dieser Einstellung sind nur auf dem Tab \"Vorschau\" sichtbar.",
    maxTextLength: "Nur für Fragen zur Texteingabe.",
    maxOthersLength: "Nur für Fragenkommentare.",
    autoGrowComment: "Wählen Sie diese Option aus, wenn Fragenkommentare und Langtextfragen basierend auf der eingegebenen Textlänge automatisch in die Höhe wachsen sollen.",
    allowResizeComment: "Nur für Fragenkommentare und Langtextfragen.",
    calculatedValues: "Benutzerdefinierte Variablen dienen als Zwischen- oder Hilfsvariablen, die in Formularberechnungen verwendet werden. Sie nehmen die Eingaben der Befragten als Quellwerte. Jede benutzerdefinierte Variable hat einen eindeutigen Namen und einen Ausdruck, auf dem sie basiert.",
    includeIntoResult: "Wählen Sie diese Option aus, wenn der berechnete Wert des Ausdrucks zusammen mit den Umfrageergebnissen gespeichert werden soll.",
    triggers: "Ein Auslöser ist ein Ereignis oder eine Bedingung, die auf einem Ausdruck basiert. Sobald der Ausdruck als \"true\" ausgewertet wird, löst ein Auslöser eine Aktion aus. Eine solche Aktion kann optional eine Zielfrage haben, auf die sie sich auswirkt.",
    clearInvisibleValues: "Wählen Sie aus, ob und wann Werte für Fragen, die durch bedingte Logik ausgeblendet werden, gelöscht werden sollen.",
    textUpdateMode: "Wählen Sie aus: \"Bei Fokusverlust\" - der Wert wird aktualisiert, wenn das Eingabefeld den Fokus verliert; \"Während der Eingabe\" - der Wert wird in Echtzeit aktualisiert, während Benutzer tippen.",
    columns: "Der linke Wert dient als Spalten-ID, die in bedingten Regeln verwendet wird, der rechte Wert wird den Befragten angezeigt.",
    rows: "Der linke Wert dient als Zeilen-ID, die in bedingten Regeln verwendet wird, der rechte Wert wird den Befragten angezeigt.",
    columnMinWidth: "Akzeptiert CSS-Werte (px, %, in, pt usw.).",
    rowTitleWidth: "Akzeptiert CSS-Werte (px, %, in, pt usw.).",
    totalText: "Diese Option ist nur sichtbar, wenn mindestens eine Spalte über den Total-Typ oder den Total-Ausdruck verfügt.",
    cellErrorLocation: "Legt die Position einer Fehlermeldung in Bezug auf eine Zelle mit ungültiger Eingabe fest. Die Option \"Vererben\" übernimmt die Einstellung aus der Eigenschaft \"Fehlermeldungsausrichtung\".",
    keyDuplicationError: "Wenn die Eigenschaft \"Doppelte Beantwortungen verhindern\" aktiviert ist, erhält ein Befragter, der versucht, einen doppelten Beitrag einzureichen, die folgende Fehlermeldung.",
    totalExpression: "Hiermit können Sie Gesamtwerte basierend auf einem Ausdruck berechnen. Der Ausdruck kann grundlegende Berechnungen ('{q1_id} + {q2_id}'), boolesche Ausdrücke ('{age} > 60') und Funktionen ('iif()', 'today()', 'age()', 'min()', 'max()', 'avg()' usw.) enthalten.",
    confirmDelete: "Löst eine Eingabeaufforderung aus, in der Sie aufgefordert werden, das Löschen der Zeile zu bestätigen.",
    defaultValueFromLastRow: "Dupliziert Antworten aus der letzten Zeile und weist sie der nächsten hinzugefügten dynamischen Zeile zu.",
    keyName: "Wenn die angegebene Spalte identische Werte enthält, löst die Umfrage den Fehler \"Nicht eindeutiger Schlüsselwert\" aus.",
    description: "Geben Sie einen Untertitel ein.",
    locale: "Wählen Sie eine Sprache aus, um mit der Erstellung Ihrer Umfrage zu beginnen. Um eine Übersetzung hinzuzufügen, wechseln Sie in eine neue Sprache und übersetzen Sie den Originaltext hier oder auf dem Tab \"Übersetzungen\".",
    detailPanelMode: "Legt die Position eines Detailabschnitts in Bezug auf eine Zeile fest. Wählen Sie aus: \"Keine\" - es wird keine Erweiterung hinzugefügt; \"Unter der Zeile\" - unter jeder Zeile der Matrix wird eine Zeilenerweiterung platziert; \"Unter der Zeile nur eine Zeilenerweiterung anzeigen\" - eine Erweiterung wird nur unter einer einzelnen Zeile angezeigt, die restlichen Zeilenerweiterungen werden ausgeblendet.",
    imageFit: "Wählen Sie aus: \"Keine\" - das Bild behält seine ursprüngliche Größe; \"Enthalten\" - die Größe des Bildes wird angepasst, wobei das Seitenverhältnis beibehalten wird. \"Cover\" - das Bild füllt den gesamten Rahmen aus, während das Seitenverhältnis beibehalten wird. \"Füllen\" - Das Bild wird gestreckt, um den Rahmen auszufüllen, ohne das Seitenverhältnis beizubehalten.",
    autoGrow: "Erhöht die Höhe des Eingabefelds schrittweise, während Daten eingegeben werden. Überschreibt die Einstellung \"Höhe des Eingabefelds (in Zeilen)\".",
    allowResize: "Der Ziehpunkt (oder Griff) wird in der Ecke angezeigt und kann gezogen werden, um die Größe des Eingabefelds zu ändern.",
    maxTimeToFinish: "Ein Zeitintervall in Sekunden, nach dem die Umfrage automatisch zur Danke-Seite wechselt.",
    maxTimeToFinishPage: "Ein Zeitintervall in Sekunden, nach dem die Umfrage automatisch zur nächsten Seite wechselt.",
    page: {
      maxTimeToFinish: "Ein Zeitintervall in Sekunden, nach dem die Umfrage automatisch zur nächsten Seite wechselt.",
      visibleIf: "Verwenden Sie das Zauberstabsymbol, um eine bedingte Regel festzulegen, die die Sichtbarkeit der Seite bestimmt.",
      enableIf: "Verwenden Sie das Zauberstabsymbol, um eine bedingte Regel festzulegen, die den schreibgeschützten Modus für die Seite deaktiviert.",
      requiredIf: "Verwenden Sie das Zauberstabsymbol, um eine bedingte Regel festzulegen, die die Übermittlung von Umfragen verhindert, es sei denn, mindestens eine verschachtelte Frage enthält eine Antwort.",
      questionTitleLocation: "Gilt für alle Fragen auf dieser Seite. Wenn Sie diese Einstellung außer Kraft setzen möchten, definieren Sie Regeln für die Titelausrichtung für einzelne Fragen oder Bereiche. Die Option \"Vererben\" wendet die Einstellung auf Umfrageebene an (standardmäßig \"Oben\").",
      questionErrorLocation: "Legt die Position einer Fehlermeldung in Bezug auf die Frage mit ungültiger Eingabe fest. Wählen Sie zwischen: \"Oben\" - ein Fehlertext wird am oberen Rand des Fragefelds platziert; \"Unten\" - ein Fehlertext wird am unteren Rand des Fragefelds platziert. Die Option \"Vererben\" wendet die Einstellung auf Umfrageebene an (standardmäßig \"Oben\").",
      questionsOrder: "Behält die ursprüngliche Reihenfolge der Fragen bei oder randomisiert sie. Mit der Option \"Vererben\" wird die Einstellung auf Umfrageebene (\"Original\" standardmäßig) angewendet. Die Auswirkungen dieser Einstellung sind nur auf dem Tab \"Vorschau\" sichtbar.",
      navigationButtonsVisibility: "Legt die Sichtbarkeit von Navigationsschaltflächen auf der Seite fest. Mit der Option \"Vererben\" wird die Einstellung auf Umfrageebene angewendet, die standardmäßig auf \"Sichtbar\" eingestellt ist."
    },
    showTimerPanel: "Legt die Sichtbarkeit und Position eines Timers auf einer Seite fest.",
    panelsState: "Wählen Sie aus: \"Gesperrt\" - Benutzer können Panele nicht erweitern oder reduzieren; \"Alle ausblenden\" - alle Panele beginnen in einem zusammengeklappten Zustand; \"Alle erweitern\" - alle Panele beginnen in einem erweiterten Zustand; \"First expanded\" - nur das erste Panel wird zunächst erweitert.",
    imageLinkName: "Geben Sie einen freigegebenen Eigenschaftsnamen in das Array von Objekten ein, das die Bild- oder Videodatei-URLs enthält, die in der Auswahlliste angezeigt werden sollen.",
    choices: "Der linke Wert dient als Element-ID, die in bedingten Regeln verwendet wird, der rechte Wert wird den Befragten angezeigt.",
    title: "Geben Sie einen benutzerfreundlichen Titel ein, der angezeigt werden soll.",
    waitForUpload: "Stellt sicher, dass Benutzer die Umfrage erst abschließen, wenn die Dateien hochgeladen wurden.",
    minWidth: "Akzeptiert CSS-Werte (px, %, in, pt usw.).",
    maxWidth: "Akzeptiert CSS-Werte (px, %, in, pt usw.).",
    width: "Akzeptiert CSS-Werte (px, %, in, pt usw.).",
    valueName: "Wenn Sie diese Eigenschaft nicht festlegen, wird die Antwort in einem Feld gespeichert, das durch die Name-Eigenschaft angegeben wird.",
    useDisplayValuesInDynamicTexts: "Bei Fragetypen mit einfacher und mehrfacher Auswahl verfügt jede Auswahloption über eine ID und einen Anzeigewert. Wenn diese Einstellung aktiviert ist, wird in HTML-Fragen und dynamischen Titeln und Beschreibungen von Umfrageelementen ein Anzeigewert anstelle eines ID-Werts angezeigt.",
    clearIfInvisible: "Wählen Sie aus, ob und wann Fragenwerte, die durch bedingte Logik ausgeblendet werden, gelöscht werden sollen. Die Option \"Vererben\" wendet die Einstellung auf Umfrageebene an (standardmäßig \"Nach Abschluss der Umfrage\").",
    choicesFromQuestionMode: "Wählen Sie aus: \"Alle\" - kopiert alle Auswahloptionen aus der ausgewählten Frage; \"Ausgewählt\" - kopiert dynamisch nur ausgewählte Auswahloptionen; \"Nicht ausgewählt\" - kopiert dynamisch nur nicht ausgewählte Auswahloptionen. Die Optionen \"Keine\" und \"Sonstiges\" werden standardmäßig kopiert, wenn sie in der Quellfrage aktiviert sind.",
    showOtherItem: "Wenn diese Option ausgewählt ist, können Benutzer zusätzliche Eingaben in ein separates Kommentarfeld einfügen.",
    separateSpecialChoices: "Zeigt jede spezielle Auswahloption (\"Keine\", \"Andere\", \"Alle auswählen\") in einer neuen Zeile an, auch wenn ein mehrspaltiges Layout verwendet wird.",
    path: "Geben Sie die Position innerhalb des Service-Datasets an, an der sich das Ziel-Array von Objekten befindet. Lassen Sie das Feld leer, wenn die URL bereits auf das Array verweist.",
    choicesbyurl: {
      valueName: " "
    },
    titleName: "Geben Sie innerhalb des Objektarrays einen einheitlichen Eigenschaftsnamen ein, der die Werte enthält, die in der Auswahlliste angezeigt werden sollen.",
    allowEmptyResponse: "Wählen Sie diese Option aus, damit der Dienst eine leere Antwort oder ein leeres Array zurückgeben kann.",
    choicesVisibleIf: "Verwenden Sie das Zauberstabsymbol, um eine Bedingungsregel festzulegen, die die Sichtbarkeit aller Auswahloptionen bestimmt.",
    rateValues: "Der linke Wert dient als Element-ID, die in bedingten Regeln verwendet wird, der rechte Wert wird den Befragten angezeigt.",
    rating: {
      displayMode: "\"Auto\" wählt zwischen den Modi \"Buttons\" und \"Dropdown\" basierend auf der verfügbaren Breite. Wenn die Breite nicht ausreicht, um Schaltflächen anzuzeigen, wird für die Frage ein Dropdown-Menü angezeigt."
    },
    valuePropertyName: "Ermöglicht es Ihnen, Fragen zu verbinden, die Ergebnisse in verschiedenen Formaten liefern. Wenn solche Fragen mithilfe eines Verknüpfungsbezeichners miteinander verknüpft sind, speichert diese gemeinsam genutzte Eigenschaft ausgewählte Fragewerte.",
    searchEnabled: "Wählen Sie diese Option aus, wenn Sie den Inhalt des Dropdown-Menüs so aktualisieren möchten, dass er der Suchabfrage entspricht, die ein Benutzer in das Eingabefeld eingibt.",
    valueTrue: "Ein Wert, der in den Umfrageergebnissen gespeichert werden soll, wenn die Befragten eine positive Antwort geben.",
    valueFalse: "Ein Wert, der in den Umfrageergebnissen gespeichert werden soll, wenn die Befragten eine negative Antwort geben.",
    showPreview: "Es wird nicht empfohlen, diese Option zu deaktivieren, da sie das Vorschaubild überschreibt und es für einen Benutzer schwierig macht, zu verstehen, ob die Dateien hochgeladen wurden.",
    needConfirmRemoveFile: "Löst eine Eingabeaufforderung aus, in der Sie aufgefordert werden, das Löschen der Datei zu bestätigen.",
    selectToRankEnabled: "Aktivieren Sie diese Option, um nur ausgewählte Auswahlmöglichkeiten in eine Rangfolge zu bringen. Benutzer ziehen ausgewählte Elemente aus der Auswahlliste, um sie innerhalb des Ranking-Bereichs zu sortieren.",
    dataList: "Geben Sie eine Liste mit Auswahlmöglichkeiten ein, die dem Befragten während der Eingabe vorgeschlagen werden.",
    itemSize: "Die Einstellung ändert nur die Größe der Eingabefelder und wirkt sich nicht auf die Breite des Fragefelds aus.",
    itemTitleWidth: "Legt eine konsistente Breite für alle Elementbeschriftungen in Pixeln fest",
    altText: "Dient als Ersatz, wenn das Bild nicht auf dem Gerät eines Benutzers angezeigt werden kann, und aus Gründen der Barrierefreiheit.",
    rateColorMode: "Definiert die Farbe des ausgewählten Emojis, wenn der Symboltyp \"Bewertung\" auf \"Smileys\" eingestellt ist. Wählen Sie zwischen: \"Standard\" - das ausgewählte Emoji erscheint in der Standardfarbe der Umfrage; \"Skala\" - das ausgewählte Emoji erbt die Farbe von der Bewertungsskala.",
    expression: {
      name: "Eine Ausdrucks-ID, die für die Befragten nicht sichtbar ist.",
      description: "Geben Sie einen Ausdrucksuntertitel ein.",
      expression: "Ein Ausdruck kann grundlegende Berechnungen ('{q1_id} + {q2_id}'), Bedingungen ('{age} > 60') und Funktionen ('iif()', 'today()', 'age()', 'min()', 'max()', 'avg()' usw.) enthalten."
    },
    storeOthersAsComment: "Wählen Sie diese Option aus, um den Wert der Option \"Sonstiges\" als separate Eigenschaft in den Umfrageergebnissen zu speichern.",
    format: "Verwenden Sie {0} als Platzhalter für den tatsächlichen Wert.",
    acceptedTypes: "Weitere Informationen finden Sie in der Beschreibung des Attributs [accept](https://www.w3schools.com/tags/att_input_accept.asp).",
    columnColCount: "Gilt nur für die Zellentypen \"Radiogruppe\" und \"Kontrollkästchen\".",
    autocomplete: "Weitere Informationen finden Sie in der Attributbeschreibung [autocomplete](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete).",
    filePlaceholder: "Gilt, wenn \"Quelltyp\" \"Lokale Dateien\" ist oder wenn die Kamera nicht verfügbar ist",
    photoPlaceholder: "Gilt, wenn der \"Quellentyp\" auf \"Kamera\" festgelegt ist.",
    fileOrPhotoPlaceholder: "Gilt, wenn \"Quelltyp\" \"Lokale Dateien oder Kamera\" ist.",
    masksettings: {
      saveMaskedValue: "Wählen Sie diese Option aus, wenn Sie den Fragewert mit einer angewendeten Maske in den Umfrageergebnissen speichern möchten."
    },
    patternmask: {
      pattern: "Das Muster kann Zeichenfolgenliterale und die folgenden Platzhalter enthalten: '9' - für eine Ziffer; \"a\" - für einen Groß- oder Kleinbuchstaben; '#' - für eine Ziffer oder einen Groß- oder Kleinbuchstaben. Verwenden Sie den umgekehrten Schrägstrich '\\', um ein Zeichen mit Escapezeichen zu versehen."
    },
    datetimemask: {
      pattern: "Das Muster kann Trennzeichen und die folgenden Platzhalter enthalten:<br>'m' - Monatszahl.<br>'mm' - Monatszahl mit führender Null für einstellige Werte. <br>'d' - Tag des Monats. <br>'dd' - Tag des Monats mit führender Null für einstellige Werte. <br>'yy' - Die letzten beiden Ziffern des Jahres. <br>'yyyy' - Vierstellige Jahreszahl. <br>'H' - Stunden im 24-Stunden-Format. <br>'HH' - Stunden im 24-Stunden-Format, mit führender Null für einstellige Werte. <br>'h' - Stunden im 12-Stunden-Format. <br>'hh' - Stunden im 12-Stunden-Format, mit führender Null für einstellige Werte. <br>'MM' - Minuten. <br>'ss' - Sekunden. <br>'TT' - 12-Stunden-Takt in Großbuchstaben (AM/PM). <br>'tt' - 12-Stunden-Takt in Kleinbuchstaben (am/pm)."
    },
    numericmask: {
      decimalSeparator: "Ein Symbol, das verwendet wird, um den Bruchteil vom ganzzahligen Teil einer angezeigten Zahl zu trennen.",
      thousandsSeparator: "Ein Symbol, das verwendet wird, um die Ziffern einer großen Zahl in Dreiergruppen zu unterteilen.",
      precision: "Schränkt die Anzahl der Nachkommastellen für eine angezeigte Zahl ein."
    },
    currencymask: {
      prefix: "Ein oder mehrere Symbole, die vor dem Wert angezeigt werden sollen.",
      suffix: "Ein oder mehrere Symbole, die nach dem Wert angezeigt werden sollen."
    }
  },
  // Properties
  p: {
    title: {
      name: "Titel",
      title: "Bitte leer lassen, falls gleich wie \"Name\""
    },
    multiSelect: "Mehrfachauswahl",
    showLabel: "Label anzeigen",
    swapOrder: "Reihenfolge von Ja und Nein vertauschen",
    value: "Wert",
    tabAlign: "Ausrichtung der Tabs",
    sourceType: "Quellentyp",
    fitToContainer: "Passend zum Behälter",
    setValueExpression: "Ausdruck \"Wert festlegen\"",
    description: "Beschreibung",
    logoFit: "Passform des Logos",
    pages: "Seiten",
    questions: "Fragen",
    triggers: "Auslöser",
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
    itemTitleWidth: "Breite der Artikelbeschriftung (in px)",
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
    selectToRankEmptyRankedAreaText: "Text, der angezeigt werden soll, wenn alle Optionen ausgewählt sind",
    selectToRankEmptyUnrankedAreaText: "Platzhaltertext für den Rankingbereich",
    allowCameraAccess: "Kamerazugriff zulassen",
    scaleColorMode: "Farbmodus skalieren",
    rateColorMode: "Farbmodus bewerten",
    copyDisplayValue: "Anzeigewert kopieren"
  },
  theme: {
    advancedMode: "Erweiterter Modus",
    pageTitle: "Schriftart des Seitentitels",
    questionTitle: "Schriftart des Fragetitels",
    editorPanel: "Eingabeelement",
    lines: "Linien",
    primaryDefaultColor: "Standard",
    primaryDarkColor: "Schweben",
    primaryLightColor: "Ausgewählt",
    backgroundDimColor: "Hintergrundfarbe",
    cornerRadius: "Ecken-Radius",
    backcolor: "Standard-Hintergrund",
    hovercolor: "Hover-Hintergrund",
    borderDecoration: "Bordüren-Verzierung",
    primaryForecolor: "Standardfarbe",
    primaryForecolorLight: "Deaktivierte Farbe",
    font: "Schriftart",
    borderDefault: "Dunkler",
    borderLight: "Heller",
    fontFamily: "Schriftfamilie",
    fontWeightRegular: "Regelmäßig",
    fontWeightHeavy: "Schwer",
    fontWeightSemiBold: "Halbfett",
    fontWeightBold: "Kühn",
    color: "Farbe",
    placeholderColor: "Platzhalterfarbe",
    size: "Größe",
    opacity: "Undurchsichtigkeit",
    boxShadowX: "X",
    boxShadowY: "Y",
    boxShadowAddRule: "Schatteneffekt hinzufügen",
    boxShadowBlur: "Verwischen",
    boxShadowSpread: "Verbreitung",
    boxShadowDrop: "Tropfen",
    boxShadowInner: "Inner",
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
      teal: "Blaugrün",
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
// pe.state: "Panel expand state" => "Status erweitern des Panels"
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
// theme.groupAdvanced: "Advanced" => "Fortgeschritten"
// theme.themeName: "Theme" => "Thema"
// theme.isPanellessss: "Question appearance" => "Erscheinungsbild der Frage"
// theme.isPanellessLightweight: "Without Panels" => "Ohne Paneele"
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
// theme.surveyTitleFont: "Survey title font" => "Schriftart für den Umfragetitel"
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
// theme.backgroundImageFitFill: "Stretch" => "Strecken"
// theme.headerView: "View" => "Ansehen"
// theme.headerViewBasic: "Basic" => "Grundlegend"
// theme.headerViewAdvanced: "Advanced" => "Fortgeschritten"
// theme.headerInheritWidthFrom: "Content area width" => "Breite des Inhaltsbereichs"
// theme.headerInheritWidthFromSurvey: "Same as survey" => "Wie Umfrage"
// theme.headerInheritWidthFromPage: "Fit to page" => "An Seite anpassen"
// theme.headerTextAreaWidth: "Text width" => "Textbreite"
// theme.headerBackgroundColorSwitch: "Background color" => "Hintergrundfarbe"
// theme.headerBackgroundColorAccentColor: "Accent color" => "Akzentfarbe"
// theme.horizontalAlignmentLeft: "Left" => "Links"
// theme.horizontalAlignmentCenter: "Center" => "Mitte"
// theme.horizontalAlignmentRight: "Right" => "Rechts"
// theme.verticalAlignmentMiddle: "Middle" => "Mitte"
// theme.logoPosition: "Logo Position" => "Position des Logos"
// theme.headerTitlePosition: "Title Position" => "Position des Titels"
// theme.headerDescriptionPosition: "Description Position" => "Beschreibung Position"
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
// theme.background: "Background" => "Hintergrund"
// ed.themeResetConfirmation: "Do you really want to reset the theme? All your customizations will be lost." => "Möchten Sie das Theme wirklich zurücksetzen? Alle Ihre Anpassungen gehen verloren."
// ed.themeResetConfirmationOk: "Yes, reset the theme" => "Ja, setzen Sie das Design zurück"
// theme.background: "Background" => "Hintergrund"
// theme.appearance: "Appearance" => "Aussehen"
// signaturepad.showPlaceholder: "Show the placeholder" => "Platzhalter anzeigen"
// signaturepad.placeholder: "Placeholder text" => "Platzhaltertext"
// theme.surveyDescriptionFont: "Survey description font" => "Schriftart der Umfragebeschreibung"

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

// pe.transposeData: "Transpose rows to columns" => "Transponieren von Zeilen in Spalten"
// layout.panel: "Layout" => "Layout"
// layout.question: "Layout" => "Layout"
// layout.base: "Layout" => "Layout"
// panel.name: "Panel name" => "Name des Panels"
// panel.title: "Panel title" => "Titel des Panels"
// panel.description: "Panel description" => "Beschreibung des Panels"
// panel.visibleIf: "Make the panel visible if" => "Machen Sie das Panel sichtbar, wenn"
// panel.requiredIf: "Make the panel required if" => "Machen Sie das Panel erforderlich, wenn"
// panel.questionsOrder: "Question order within the panel" => "Reihenfolge der Fragen innerhalb des Panels"
// panel.startWithNewLine: "Display the panel on a new line" => "Anzeigen des Panels in einer neuen Zeile"
// panel.state: "Panel collapse state" => "Status des Ausblendens des Panels"
// panel.width: "Inline panel width" => "Breite des Inline-Panels"
// panel.minWidth: "Minimum panel width" => "Minimale Breite der Platte"
// panel.maxWidth: "Maximum panel width" => "Maximale Breite des Paneels"
// panel.showNumber: "Number panels" => "Nummernfelder"
// paneldynamic.name: "Panel name" => "Name des Panels"
// paneldynamic.title: "Panel title" => "Titel des Panels"
// paneldynamic.description: "Panel description" => "Beschreibung des Panels"
// paneldynamic.visibleIf: "Make the panel visible if" => "Machen Sie das Panel sichtbar, wenn"
// paneldynamic.requiredIf: "Make the panel required if" => "Machen Sie das Panel erforderlich, wenn"
// paneldynamic.page: "Move the panel to page" => "Verschieben des Panels auf die Seite"
// paneldynamic.startWithNewLine: "Display the panel on a new line" => "Anzeigen des Panels in einer neuen Zeile"
// paneldynamic.state: "Panel collapse state" => "Status des Ausblendens des Panels"
// paneldynamic.width: "Inline panel width" => "Breite des Inline-Panels"
// paneldynamic.minWidth: "Minimum panel width" => "Minimale Breite der Platte"
// paneldynamic.maxWidth: "Maximum panel width" => "Maximale Breite des Paneels"
// paneldynamic.templateDescription: "Panel description pattern" => "Muster für die Bereichsbeschreibung"
// paneldynamic.templateTitle: "Panel title pattern" => "Muster für den Panel-Titel"
// paneldynamic.noEntriesText: "Empty panel text" => "Leerer Bedienfeldtext"
// paneldynamic.templateTabTitle: "Tab title pattern" => "Muster des Tab-Titels"
// paneldynamic.templateVisibleIf: "Make an individual panel visible if" => "Machen Sie ein einzelnes Panel sichtbar, wenn"
// paneldynamic.hideNumber: "Hide the panel number" => "Ausblenden der Panel-Nummer"
// paneldynamic.titleLocation: "Panel title alignment" => "Ausrichtung des Panel-Titels"
// paneldynamic.descriptionLocation: "Panel description alignment" => "Ausrichtung der Panelbeschreibung"
// paneldynamic.templateTitleLocation: "Question title alignment" => "Ausrichtung des Fragetitels"
// paneldynamic.templateErrorLocation: "Error message alignment" => "Ausrichtung von Fehlermeldungen"
// paneldynamic.newPanelPosition: "New panel location" => "Neue Panel-Position"
// paneldynamic.keyName: "Prevent duplicate responses in the following question" => "Verhindern Sie doppelte Antworten in der folgenden Frage"
// question.name: "Question name" => "Name der Frage"
// question.title: "Question title" => "Titel der Frage"
// question.description: "Question description" => "Beschreibung der Frage"
// question.visibleIf: "Make the question visible if" => "Machen Sie die Frage sichtbar, wenn"
// question.requiredIf: "Make the question required if" => "Machen Sie die Frage erforderlich, wenn"
// question.state: "Question box collapse state" => "Status des Ausblendens des Fragefelds"
// question.hideNumber: "Hide the question number" => "Ausblenden der Fragenummer"
// question.titleLocation: "Question title alignment" => "Ausrichtung des Fragetitels"
// question.descriptionLocation: "Question description alignment" => "Ausrichtung der Fragebeschreibung"
// question.errorLocation: "Error message alignment" => "Ausrichtung von Fehlermeldungen"
// question.indent: "Increase the inner indent" => "Vergrößern Sie den inneren Einzug"
// question.width: "Inline question width" => "Breite der Inline-Frage"
// question.minWidth: "Minimum question width" => "Minimale Fragebreite"
// question.maxWidth: "Maximum question width" => "Maximale Fragebreite"
// question.textUpdateMode: "Update input field value" => "Aktualisieren des Eingabefeldwerts"
// signaturepad.allowClear: "Show the Clear button within signature area" => "Zeigen Sie die Schaltfläche \"Löschen\" im Signaturbereich an"
// signaturepad.penColor: "Stroke color" => "Farbe des Strichs"
// comment.rows: "Input field height (in lines)" => "Höhe des Eingabefeldes (in Zeilen)"
// expression.name: "Expression name" => "Name des Ausdrucks"
// expression.title: "Expression title" => "Titel des Ausdrucks"
// expression.description: "Expression description" => "Beschreibung des Ausdrucks"
// expression.expression: "Expression" => "Ausdruck"
// trigger.expression: "Expression" => "Ausdruck"
// calculatedvalue.expression: "Expression" => "Ausdruck"
// survey.description: "Survey description" => "Beschreibung der Umfrage"
// page.name: "Page name" => "Name der Seite"
// page.description: "Page description" => "Seitenbeschreibung"
// page.visibleIf: "Make the page visible if" => "Machen Sie die Seite sichtbar, wenn"
// page.requiredIf: "Make the page required if" => "Machen Sie die Seite erforderlich, wenn"
// page.questionsOrder: "Question order on the page" => "Reihenfolge der Fragen auf der Seite"
// matrixdropdowncolumn.name: "Column name" => "Name der Spalte"
// matrixdropdowncolumn.title: "Column title" => "Titel der Spalte"
// matrixdropdowncolumn.isUnique: "Prevent duplicate responses" => "Doppelte Beantwortungen verhindern"
// matrixdropdowncolumn.width: "Column width" => "Spaltenbreite"
// matrixdropdowncolumn.minWidth: "Minimum column width" => "Minimale Spaltenbreite"
// matrixdropdowncolumn.rows: "Input field height (in lines)" => "Höhe des Eingabefeldes (in Zeilen)"
// matrixdropdowncolumn.visibleIf: "Make the column visible if" => "Machen Sie die Spalte sichtbar, wenn"
// matrixdropdowncolumn.requiredIf: "Make the column required if" => "Machen Sie die Spalte erforderlich, wenn"
// matrixdropdowncolumn.showInMultipleColumns: "Each option in a separate column" => "Jede Option in einer separaten Spalte"
// multipletextitem.name: "Name" => "Name"
// multipletextitem.title: "Title" => "Titel"
// pe.rateDescriptionLocation: "Label alignment" => "Ausrichtung der Beschriftung"
// pe.cellErrorLocation: "Cell error message alignment" => "Ausrichtung von Zellenfehlermeldungen"
// pe.listIsEmpty@columns: "You don't have any columns yet" => "Sie haben noch keine Spalten"
// pe.listIsEmpty@rows: "You don't have any rows yet" => "Sie haben noch keine Zeilen"
// pe.listIsEmpty@validators: "You don't have any validation rules yet" => "Sie haben noch keine Validierungsregeln"
// pe.listIsEmpty@calculatedValues: "You don't have any custom variables yet" => "Sie haben noch keine benutzerdefinierten Variablen"
// pe.listIsEmpty@triggers: "You don't have any triggers yet" => "Sie haben noch keine Auslöser"
// pe.listIsEmpty@navigateToUrlOnCondition: "You don't have any links yet" => "Sie haben noch keine Links"
// pe.addNew@columns: "Add new column" => "Neue Spalte hinzufügen"
// pe.addNew@rows: "Add new row" => "Neue Zeile hinzufügen"
// pe.addNew@validators: "Add new rule" => "Neue Regel hinzufügen"
// pe.addNew@calculatedValues: "Add new variable" => "Neue Variable hinzufügen"
// pe.addNew@triggers: "Add new trigger" => "Neuen Auslöser hinzufügen"
// pe.addNew@navigateToUrlOnCondition: "Add new URL" => "Neue URL hinzufügen"
// choicesbyurl.url: "Web service's URL" => "URL des Webdienstes"
// pe.progressBarShowPageTitles: "Display page titles in progress bar" => "Seitentitel in der Fortschrittsleiste anzeigen"
// pe.progressBarShowPageNumbers: "Display page numbers in progress bar" => "Seitenzahlen in der Fortschrittsleiste anzeigen"
// itemvalue.visibleIf: "Make the option visible if" => "Machen Sie die Option sichtbar, wenn"
// itemvalue.enableIf: "Make the option selectable if" => "Machen Sie die Option auswählbar, wenn"
// panel.layout: "Panel Layout" => "Panel-Layout"
// tabs.questionSettings: "Question Settings" => "Einstellungen für Fragen"
// pe.url_placeholder: "Ex.: https://api.example.com/books" => "Bsp.: https://api.example.com/books"
// pe.path_placeholder: "Ex.: categories.fiction" => "Bsp.: categories.fiction"
// pe.questionStartIndex_placeholder: "Ex.: a)" => "Bsp.: a)"
// pe.width_placeholder: "Ex.: 6in" => "Bsp.: 6in"
// pe.minWidth_placeholder: "Ex.: 600px" => "Bsp.: 600px"
// pe.maxWidth_placeholder: "Ex.: 50%" => "Bsp.: 50%"
// pv.selected: "Selected" => "Ausgewählt"
// pv.unselected: "Unselected" => "Deaktiviert"
// pv.center: "Center" => "Mitte"
// pv.middle: "Middle" => "Mitte"
// pv.next: "Next" => "Nächster"
// pv.last: "Last" => "Letzte"
// clearIfInvisible.none: "Never" => "Nie"
// questionsOnPageMode.standard: "Original structure" => "Ursprüngliche Struktur"
// questionsOnPageMode.singlePage: "Show all questions on one page" => "Alle Fragen auf einer Seite anzeigen"
// questionsOnPageMode.questionPerPage: "Show single question per page" => "Einzelne Frage pro Seite anzeigen"
// pv.auto: "Auto" => "Auto"
// panelsState.firstExpanded: "First expanded" => "Erstmals erweitert"
// rateColorMode.scale: "Scale" => "Maßstab"
// scaleColorMode.monochrome: "Monochrome" => "Monochrom"
// scaleColorMode.colored: "Colored" => "Farbig"
// state.default: "Locked" => "Verschlossen"
// showQuestionNumbers.default: "Auto-numbering" => "Automatische Nummerierung"
// showQuestionNumbers.on: "Auto-numbering" => "Automatische Nummerierung"
// showQuestionNumbers.onPage: "Reset on each page" => "Zurücksetzen auf jeder Seite"
// showQuestionNumbers.onpanel: "Reset on each panel" => "Zurücksetzen auf jedem Panel"
// showQuestionNumbers.onPanel: "Reset on each panel" => "Zurücksetzen auf jedem Panel"
// showQuestionNumbers.onSurvey: "Continue across the survey" => "Weiter in der Umfrage"
// showQuestionNumbers.off: "No numbering" => "Keine Nummerierung"
// descriptionLocation.underTitle: "Under the question title" => "Unter dem Titel der Frage"
// descriptionLocation.underInput: "Under the input field" => "Unter dem Eingabefeld"
// selectToRankAreasLayout.horizontal: "Next to choices" => "Neben den Auswahlmöglichkeiten"
// selectToRankAreasLayout.vertical: "Above choices" => "Oben genannte Auswahlmöglichkeiten"
// displayStyle.decimal: "Decimal" => "Dezimal"
// displayStyle.currency: "Currency" => "Währung"
// displayStyle.percent: "Percentage" => "Prozentsatz"
// displayStyle.date: "Date" => "Datum"
// totalDisplayStyle.decimal: "Decimal" => "Dezimal"
// totalDisplayStyle.currency: "Currency" => "Währung"
// totalDisplayStyle.percent: "Percentage" => "Prozentsatz"
// totalDisplayStyle.date: "Date" => "Datum"
// rowsOrder.initial: "Original" => "Original"
// questionsOrder.initial: "Original" => "Original"
// showProgressBar.aboveheader: "Above the header" => "Über der Kopfzeile"
// showProgressBar.belowheader: "Below the header" => "Unterhalb der Kopfzeile"
// pv.sum: "Sum" => "Summe"
// pv.count: "Count" => "Zählen"
// pv.min: "Min" => "Min"
// pv.max: "Max" => "Max"
// pv.avg: "Avg" => "Avg"
// searchMode.contains: "Contains" => "Enthält"
// searchMode.startsWith: "Starts with" => "Beginnt mit"
// panel.name: "A panel ID that is not visible to respondents." => "Eine Panel-ID, die für die Befragten nicht sichtbar ist."
// panel.description: "Type a panel subtitle." => "Geben Sie einen Untertitel für das Panel ein."
// panel.visibleIf: "Use the magic wand icon to set a conditional rule that determines panel visibility." => "Verwenden Sie das Zauberstabsymbol, um eine bedingte Regel festzulegen, die die Sichtbarkeit des Panels bestimmt."
// panel.enableIf: "Use the magic wand icon to set a conditional rule that disables the read-only mode for the panel." => "Verwenden Sie das Zauberstabsymbol, um eine bedingte Regel festzulegen, die den schreibgeschützten Modus für das Panel deaktiviert."
// panel.requiredIf: "Use the magic wand icon to set a conditional rule that prevents survey submission unless at least one nested question has an answer." => "Verwenden Sie das Zauberstabsymbol, um eine bedingte Regel festzulegen, die die Übermittlung von Umfragen verhindert, es sei denn, mindestens eine verschachtelte Frage enthält eine Antwort."
// panel.questionTitleLocation: "Applies to all questions within this panel. If you want to override this setting, define title alignment rules for individual questions. The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Top\" by default)." => "Gilt für alle Fragen in diesem Bereich. Wenn Sie diese Einstellung außer Kraft setzen möchten, definieren Sie Regeln für die Titelausrichtung für einzelne Fragen. Die Option \"Vererben\" wendet die Einstellung auf Seitenebene (falls gesetzt) oder auf Umfrageebene an (standardmäßig \"Oben\")."
// panel.questionErrorLocation: "Sets the location of an error message in relation to all questions within the panel. The \"Inherit\" option applies the page-level (if set) or survey-level setting." => "Legt die Position einer Fehlermeldung in Bezug auf alle Fragen innerhalb des Bereichs fest. Die Option \"Vererben\" wendet die Einstellung auf Seitenebene (falls gesetzt) oder auf Umfrageebene an."
// panel.questionsOrder: "Keeps the original order of questions or randomizes them. The \"Inherit\" option applies the page-level (if set) or survey-level setting." => "Behält die ursprüngliche Reihenfolge der Fragen bei oder randomisiert sie. Die Option \"Vererben\" wendet die Einstellung auf Seitenebene (falls gesetzt) oder auf Umfrageebene an."
// panel.page: "Repositions the panel to the end of a selected page." => "Positioniert das Panel am Ende einer ausgewählten Seite."
// panel.innerIndent: "Adds space or margin between the panel content and the left border of the panel box." => "Fügt Abstand oder Rand zwischen dem Inhalt des Panels und dem linken Rand des Panels hinzu."
// panel.startWithNewLine: "Unselect to display the panel in one line with the previous question or panel. The setting doesn't apply if the panel is the first element in your form." => "Deaktivieren Sie diese Option, um den Bereich in einer Zeile mit der vorherigen Frage oder dem vorherigen Bereich anzuzeigen. Die Einstellung gilt nicht, wenn der Bereich das erste Element in Ihrem Formular ist."
// panel.state: "Choose from: \"Expanded\" - the panel is displayed in full and can be collapsed; \"Collapsed\" - the panel displays only the title and description and can be expanded; \"Locked\" - the panel is displayed in full and cannot be collapsed." => "Wählen Sie aus: \"Erweitert\" - das Panel wird vollständig angezeigt und kann eingeklappt werden; \"Reduziert\" - das Panel zeigt nur den Titel und die Beschreibung an und kann erweitert werden; \"Gesperrt\" - das Panel wird vollständig angezeigt und kann nicht eingeklappt werden."
// panel.width: "Sets the width of the panel in proportion to other survey elements in the same line. Accepts CSS values (px, %, in, pt, etc.)." => "Legt die Breite des Fensters im Verhältnis zu anderen Vermessungselementen in derselben Linie fest. Akzeptiert CSS-Werte (px, %, in, pt usw.)."
// paneldynamic.name: "A panel ID that is not visible to respondents." => "Eine Panel-ID, die für die Befragten nicht sichtbar ist."
// paneldynamic.description: "Type a panel subtitle." => "Geben Sie einen Untertitel für das Panel ein."
// paneldynamic.visibleIf: "Use the magic wand icon to set a conditional rule that determines panel visibility." => "Verwenden Sie das Zauberstabsymbol, um eine bedingte Regel festzulegen, die die Sichtbarkeit des Panels bestimmt."
// paneldynamic.enableIf: "Use the magic wand icon to set a conditional rule that disables the read-only mode for the panel." => "Verwenden Sie das Zauberstabsymbol, um eine bedingte Regel festzulegen, die den schreibgeschützten Modus für das Panel deaktiviert."
// paneldynamic.requiredIf: "Use the magic wand icon to set a conditional rule that prevents survey submission unless at least one nested question has an answer." => "Verwenden Sie das Zauberstabsymbol, um eine bedingte Regel festzulegen, die die Übermittlung von Umfragen verhindert, es sei denn, mindestens eine verschachtelte Frage enthält eine Antwort."
// paneldynamic.templateTitleLocation: "Applies to all questions within this panel. If you want to override this setting, define title alignment rules for individual questions. The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Top\" by default)." => "Gilt für alle Fragen in diesem Bereich. Wenn Sie diese Einstellung außer Kraft setzen möchten, definieren Sie Regeln für die Titelausrichtung für einzelne Fragen. Die Option \"Vererben\" wendet die Einstellung auf Seitenebene (falls gesetzt) oder auf Umfrageebene an (standardmäßig \"Oben\")."
// paneldynamic.templateErrorLocation: "Sets the location of an error message in relation to a question with invalid input. Choose between: \"Top\" - an error text is placed at the top of the question box; \"Bottom\" - an error text is placed at the bottom of the question box. The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Top\" by default)." => "Legt die Position einer Fehlermeldung in Bezug auf eine Frage mit ungültiger Eingabe fest. Wählen Sie zwischen: \"Oben\" - ein Fehlertext wird am oberen Rand des Fragefelds platziert; \"Unten\" - ein Fehlertext wird am unteren Rand des Fragefelds platziert. Die Option \"Vererben\" wendet die Einstellung auf Seitenebene (falls gesetzt) oder auf Umfrageebene an (standardmäßig \"Oben\")."
// paneldynamic.errorLocation: "Sets the location of an error message in relation to all questions within the panel. The \"Inherit\" option applies the page-level (if set) or survey-level setting." => "Legt die Position einer Fehlermeldung in Bezug auf alle Fragen innerhalb des Bereichs fest. Die Option \"Vererben\" wendet die Einstellung auf Seitenebene (falls gesetzt) oder auf Umfrageebene an."
// paneldynamic.page: "Repositions the panel to the end of a selected page." => "Positioniert das Panel am Ende einer ausgewählten Seite."
// paneldynamic.innerIndent: "Adds space or margin between the panel content and the left border of the panel box." => "Fügt Abstand oder Rand zwischen dem Inhalt des Panels und dem linken Rand des Panels hinzu."
// paneldynamic.startWithNewLine: "Unselect to display the panel in one line with the previous question or panel. The setting doesn't apply if the panel is the first element in your form." => "Deaktivieren Sie diese Option, um den Bereich in einer Zeile mit der vorherigen Frage oder dem vorherigen Bereich anzuzeigen. Die Einstellung gilt nicht, wenn der Bereich das erste Element in Ihrem Formular ist."
// paneldynamic.state: "Choose from: \"Expanded\" - the panel is displayed in full and can be collapsed; \"Collapsed\" - the panel displays only the title and description and can be expanded; \"Locked\" - the panel is displayed in full and cannot be collapsed." => "Wählen Sie aus: \"Erweitert\" - das Panel wird vollständig angezeigt und kann eingeklappt werden; \"Reduziert\" - das Panel zeigt nur den Titel und die Beschreibung an und kann erweitert werden; \"Gesperrt\" - das Panel wird vollständig angezeigt und kann nicht eingeklappt werden."
// paneldynamic.width: "Sets the width of the panel in proportion to other survey elements in the same line. Accepts CSS values (px, %, in, pt, etc.)." => "Legt die Breite des Fensters im Verhältnis zu anderen Vermessungselementen in derselben Linie fest. Akzeptiert CSS-Werte (px, %, in, pt usw.)."
// paneldynamic.templateTitle: "Type in a template for dynamic panel titles. Use {panelIndex} for the panel's general position and {visiblePanelIndex} for its order among visible panels. Insert these placeholders into the pattern to add automatic numbering." => "Geben Sie eine Vorlage für dynamische Panel-Titel ein. Verwenden Sie {panelIndex} für die allgemeine Position des Panels und {visiblePanelIndex} für die Reihenfolge der sichtbaren Bedienfelder. Fügen Sie diese Platzhalter in das Muster ein, um eine automatische Nummerierung hinzuzufügen."
// paneldynamic.templateTabTitle: "Type in a template for tab titles. Use {panelIndex} for a panel's general position and {visiblePanelIndex} for its order among visible panels. Insert these placeholders into the pattern to add automatic numbering." => "Geben Sie eine Vorlage für Registerkartentitel ein. Verwenden Sie {panelIndex} für die allgemeine Position eines Panels und {visiblePanelIndex} für die Reihenfolge der sichtbaren Bedienfelder. Fügen Sie diese Platzhalter in das Muster ein, um eine automatische Nummerierung hinzuzufügen."
// paneldynamic.templateVisibleIf: "This setting allows you to control the visibility of individual panels within the dynamic panel. Use the `{panel}` placeholder to reference the current panel in your expression." => "Mit dieser Einstellung können Sie die Sichtbarkeit einzelner Bedienfelder innerhalb des dynamischen Panels steuern. Verwenden Sie den Platzhalter '{panel}', um auf das aktuelle Panel in Ihrem Ausdruck zu verweisen."
// paneldynamic.titleLocation: "This setting is automatically inherited by all questions within this panel. If you want to override this setting, define title alignment rules for individual questions. The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Top\" by default)." => "Diese Einstellung wird automatisch von allen Fragen in diesem Bereich übernommen. Wenn Sie diese Einstellung außer Kraft setzen möchten, definieren Sie Regeln für die Titelausrichtung für einzelne Fragen. Die Option \"Vererben\" wendet die Einstellung auf Seitenebene (falls gesetzt) oder auf Umfrageebene an (standardmäßig \"Oben\")."
// paneldynamic.descriptionLocation: "The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Under the panel title\" by default)." => "Die Option \"Vererben\" wendet die Einstellung auf Seitenebene (falls gesetzt) oder auf Umfrageebene an (standardmäßig unter dem Panel-Titel)."
// paneldynamic.newPanelPosition: "Defines the position of a newly added panel. By default, new panels are added to the end. Select \"Next\" to insert a new panel after the current one." => "Definiert die Position eines neu hinzugefügten Panels. Standardmäßig werden neue Bedienfelder am Ende hinzugefügt. Wählen Sie \"Weiter\", um ein neues Panel nach dem aktuellen einzufügen."
// paneldynamic.defaultValueFromLastPanel: "Duplicates answers from the last panel and assigns them to the next added dynamic panel." => "Dupliziert die Antworten aus dem letzten Bereich und weist sie dem nächsten hinzugefügten dynamischen Bereich zu."
// paneldynamic.keyName: "Reference a question name to require a user to provide a unique response for this question in each panel." => "Verweisen Sie auf einen Fragenamen, um einen Benutzer aufzufordern, in jedem Bereich eine eindeutige Antwort auf diese Frage zu geben."
// pehelp.defaultValueExpression: "This setting allows you to assign a default answer value based on an expression. The expression can include basic calculations - `{q1_id} + {q2_id}`, Boolean expressions, such as `{age} > 60`, and functions: `iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, etc. The value determined by this expression serves as the initial default value that can be overridden by a respondent's manual input." => "Mit dieser Einstellung können Sie einen Standardantwortwert basierend auf einem Ausdruck zuweisen. Der Ausdruck kann grundlegende Berechnungen enthalten - '{q1_id} + {q2_id}', boolesche Ausdrücke wie '{age} > 60' und Funktionen: 'iif()', 'today()', 'age()', 'min()', 'max()', 'avg()' usw. Der durch diesen Ausdruck ermittelte Wert dient als anfänglicher Standardwert, der durch die manuelle Eingabe eines Befragten überschrieben werden kann."
// pehelp.resetValueIf: "Use the magic wand icon to set a conditional rule that determines when a respondent's input is reset to the value based on the \"Default value expression\" or \"Set value expression\" or to the \"Default answer\" value (if either is set)." => "Verwenden Sie das Zauberstabsymbol, um eine Bedingungsregel festzulegen, die bestimmt, wann die Eingabe eines Befragten auf den Wert zurückgesetzt wird, der auf dem Wert \"Standardwertausdruck\" oder \"Wertausdruck festlegen\" oder auf dem Wert \"Standardantwort\" (falls einer dieser Werte festgelegt ist) basiert."
// pehelp.setValueIf: "Use the magic wand icon to set a conditional rule that determines when to run the \"Set value expression\" and dynamically assign the resulting value as a response." => "Verwenden Sie das Zauberstabsymbol, um eine Bedingungsregel festzulegen, die bestimmt, wann der \"Wertausdruck festlegen\" ausgeführt werden soll, und weisen Sie den resultierenden Wert dynamisch als Antwort zu."
// pehelp.setValueExpression: "Specify an expression that defines the value to be set when the conditions in the \"Set value if\" rule are met. The expression can include basic calculations - `{q1_id} + {q2_id}`, Boolean expressions, such as `{age} > 60`, and functions: `iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, etc. The value determined by this expression can be overridden by a respondent's manual input." => "Geben Sie einen Ausdruck an, der den Wert definiert, der festgelegt werden soll, wenn die Bedingungen in der Regel \"Wert festlegen, wenn\" erfüllt sind. Der Ausdruck kann grundlegende Berechnungen enthalten - '{q1_id} + {q2_id}', boolesche Ausdrücke wie '{age} > 60' und Funktionen: 'iif()', 'today()', 'age()', 'min()', 'max()', 'avg()' usw. Der durch diesen Ausdruck ermittelte Wert kann durch die manuelle Eingabe eines Befragten überschrieben werden."
// question.name: "A question ID that is not visible to respondents." => "Eine Frage-ID, die für die Befragten nicht sichtbar ist."
// question.description: "Type a question subtitle." => "Geben Sie einen Untertitel für die Frage ein."
// question.visibleIf: "Use the magic wand icon to set a conditional rule that determines question visibility." => "Verwenden Sie das Zauberstabsymbol, um eine bedingte Regel festzulegen, die die Sichtbarkeit von Fragen bestimmt."
// question.enableIf: "Use the magic wand icon to set a conditional rule that disables the read-only mode for the question." => "Verwenden Sie das Zauberstabsymbol, um eine bedingte Regel festzulegen, die den schreibgeschützten Modus für die Frage deaktiviert."
// question.requiredIf: "Use the magic wand icon to set a conditional rule that prevents survey advancing or submission unless the question received an answer." => "Verwenden Sie das Zauberstabsymbol, um eine bedingte Regel festzulegen, die verhindert, dass die Umfrage fortgesetzt oder gesendet wird, es sei denn, die Frage wurde beantwortet."
// question.startWithNewLine: "Unselect to display the question in one line with the previous question or panel. The setting doesn't apply if the question is the first element in your form." => "Deaktivieren Sie diese Option, um die Frage in einer Zeile mit der vorherigen Frage oder dem vorherigen Bereich anzuzeigen. Die Einstellung gilt nicht, wenn die Frage das erste Element in Ihrem Formular ist."
// question.page: "Repositions the question to the end of a selected page." => "Positioniert die Frage an das Ende einer ausgewählten Seite."
// question.state: "Choose from: \"Expanded\" - the question box is displayed in full and can be collapsed; \"Collapsed\" - the question box displays only the title and description and can be expanded; \"Locked\" - the question box is displayed in full and cannot be collapsed." => "Wählen Sie aus: \"Erweitert\" - das Fragefeld wird vollständig angezeigt und kann eingeklappt werden; \"Zugeklappt\" - das Fragefeld zeigt nur den Titel und die Beschreibung an und kann erweitert werden; \"Gesperrt\" - das Fragefeld wird vollständig angezeigt und kann nicht eingeklappt werden."
// question.titleLocation: "Overrides title alignment rules defined on a panel, page or survey level. The \"Inherit\" option applies any higher-level settings (if set) or survey-level setting (\"Top\" by default)." => "Überschreibt Regeln für die Titelausrichtung, die auf Bereichs-, Seiten- oder Umfrageebene definiert sind. Mit der Option \"Vererben\" werden alle übergeordneten Einstellungen (falls gesetzt) oder Einstellungen auf Umfrageebene (\"Standardmäßig oben\") angewendet."
// question.descriptionLocation: "The \"Inherit\" option applies the survey-level setting (\"Under the question title\" by default)." => "Die Option \"Vererben\" wendet die Einstellung auf Umfrageebene an (\"Standardmäßig unter dem Fragetitel\")."
// question.errorLocation: "Sets the location of an error message in relation to the question with invalid input. Choose between: \"Top\" - an error text is placed at the top of the question box; \"Bottom\" - an error text is placed at the bottom of the question box. The \"Inherit\" option applies the survey-level setting (\"Top\" by default)." => "Legt die Position einer Fehlermeldung in Bezug auf die Frage mit ungültiger Eingabe fest. Wählen Sie zwischen: \"Oben\" - ein Fehlertext wird am oberen Rand des Fragefelds platziert; \"Unten\" - ein Fehlertext wird am unteren Rand des Fragefelds platziert. Die Option \"Vererben\" wendet die Einstellung auf Umfrageebene an (standardmäßig \"Oben\")."
// question.indent: "Adds space or margin between the question content and the left border of the question box." => "Fügt Leerzeichen oder Ränder zwischen dem Inhalt der Frage und dem linken Rand des Fragefelds hinzu."
// question.width: "Sets the width of the question in proportion to other survey elements in the same line. Accepts CSS values (px, %, in, pt, etc.)." => "Legt die Breite der Frage im Verhältnis zu anderen Umfrageelementen in derselben Zeile fest. Akzeptiert CSS-Werte (px, %, in, pt usw.)."
// surveyvalidator.expression: "Use the magic wand icon to set a validation rule for the question." => "Verwenden Sie das Zauberstabsymbol, um eine Validierungsregel für die Frage festzulegen."
// question.textUpdateMode: "Choose from: \"On lost focus\" - the value is updated when the input field loses focus; \"While typing\" - the value is updated in real-time, as users are typing. The \"Inherit\" option applies the survey-level setting (\"On lost focus\" by default)." => "Wählen Sie aus: \"Bei Fokusverlust\" - der Wert wird aktualisiert, wenn das Eingabefeld den Fokus verliert; \"Während der Eingabe\" - der Wert wird in Echtzeit aktualisiert, während Benutzer tippen. Die Option \"Vererben\" wendet die Einstellung auf Umfrageebene an (\"Standardmäßig bei verlorenem Fokus\")."
// question.url: "You can use any web service as a data source for multiple-choice questions. To populate choice values, enter the URL of the service providing the data." => "Sie können einen beliebigen Webdienst als Datenquelle für Multiple-Choice-Fragen verwenden. Um Auswahlwerte aufzufüllen, geben Sie die URL des Diensts ein, der die Daten bereitstellt."
// question.searchMode: "A comparison operation used to filter the drop-down list." => "Ein Vergleichsvorgang, der zum Filtern der Dropdownliste verwendet wird."
// signaturepad.signatureWidth: "Sets the width of the displayed signature area and the resulting image." => "Legt die Breite des angezeigten Signaturbereichs und des resultierenden Bildes fest."
// signaturepad.signatureHeight: "Sets the height of the displayed signature area and the resulting image." => "Legt die Höhe des angezeigten Signaturbereichs und des resultierenden Bildes fest."
// signaturepad.signatureAutoScaleEnabled: "Select if you want the signature area to fill all available space within the question box while maintaining the default 3:2 aspect ratio. When custom width and height values are set, the setting will keep the aspect ratio of these dimensions." => "Wählen Sie diese Option aus, wenn der Signaturbereich den gesamten verfügbaren Platz innerhalb des Fragefelds ausfüllen soll, während das Standardseitenverhältnis von 3:2 beibehalten wird. Wenn benutzerdefinierte Werte für Breite und Höhe festgelegt sind, behält die Einstellung das Seitenverhältnis dieser Abmessungen bei."
// file.imageHeight: "Adjusts the height of the image in the survey results." => "Passt die Höhe des Bildes in den Umfrageergebnissen an."
// file.imageWidth: "Adjusts the width of the image in the survey results." => "Passt die Breite des Bildes in den Umfrageergebnissen an."
// imagepicker.imageHeight: "Overrides the minimum and maximum height values." => "Überschreibt die minimalen und maximalen Höhenwerte."
// imagepicker.imageWidth: "Overrides the minimum and maximum width values." => "Überschreibt die minimalen und maximalen Breitenwerte."
// imagepicker.choices: "\"Value\" serves as an item ID used in conditional rules; \"Text\" is displayed to respondents." => "\"Wert\" dient als Element-ID, die in bedingten Regeln verwendet wird. Den Befragten wird \"Text\" angezeigt."
// text.size: "This setting only resizes the input field and doesn't affect the width of the question box. To limit the accepted input length, go to <b>Validation → Maximum character limit</b>." => "Diese Einstellung ändert nur die Größe des Eingabefelds und wirkt sich nicht auf die Breite des Fragefelds aus. Um die zulässige Eingabelänge zu begrenzen, gehen Sie zu <b>Validierung → Maximales Zeichenlimit</b>."
// comment.rows: "Sets the number of displayed lines in the input field. If the input takes up more lines, the scroll bar will appear." => "Legt die Anzahl der angezeigten Zeilen im Eingabefeld fest. Wenn die Eingabe mehr Zeilen einnimmt, wird die Bildlaufleiste angezeigt."
// survey.mode: "Choose between: \"Editable\" - enables respondents to fill out your survey; \"Read-only\" - disables form editing." => "Wählen Sie zwischen: \"Bearbeitbar\" - ermöglicht es den Befragten, Ihre Umfrage auszufüllen; \"Schreibgeschützt\" - deaktiviert die Formularbearbeitung."
// matrixdropdowncolumn.name: "A column ID that is not visible to respondents." => "Eine Spalten-ID, die für die Befragten nicht sichtbar ist."
// matrixdropdowncolumn.isUnique: "When enabled for a column, a respondent is required to provide a unique response for each question within this column." => "Wenn diese Option für eine Spalte aktiviert ist, muss ein Befragter für jede Frage in dieser Spalte eine eindeutige Antwort geben."
// matrixdropdowncolumn.rows: "Sets the number of displayed lines in the input field. If the input takes up more lines, the scroll bar will appear." => "Legt die Anzahl der angezeigten Zeilen im Eingabefeld fest. Wenn die Eingabe mehr Zeilen einnimmt, wird die Bildlaufleiste angezeigt."
// matrixdropdowncolumn.visibleIf: "Use the magic wand icon to set a conditional rule that determines column visibility." => "Verwenden Sie das Zauberstabsymbol, um eine bedingte Regel festzulegen, die die Sichtbarkeit von Spalten bestimmt."
// matrixdropdowncolumn.enableIf: "Use the magic wand icon to set a conditional rule that disables the read-only mode for the column." => "Verwenden Sie das Zauberstabsymbol, um eine Bedingungsregel festzulegen, die den schreibgeschützten Modus für die Spalte deaktiviert."
// matrixdropdowncolumn.requiredIf: "Use the magic wand icon to set a conditional rule that prevents survey submission unless at least one nested question has an answer." => "Verwenden Sie das Zauberstabsymbol, um eine bedingte Regel festzulegen, die die Übermittlung von Umfragen verhindert, es sei denn, mindestens eine verschachtelte Frage enthält eine Antwort."
// matrixdropdowncolumn.showInMultipleColumns: "When selected, creates an individual column for each choice option." => "Wenn diese Option aktiviert ist, wird für jede Auswahloption eine eigene Spalte erstellt."
// pehelp.widthMode: "Choose from: \"Static\" - sets a fixed width; \"Responsive\" - makes the survey occupy the full width of the screen; \"Auto\" - applies either of the two depending on the question types used." => "Wählen Sie aus: \"Statisch\" - legt eine feste Breite fest; \"Responsive\" - lässt die Umfrage die gesamte Breite des Bildschirms einnehmen; \"Auto\" - wendet je nach verwendetem Fragetyp einen der beiden an."
// pehelp.logo: "Paste an image link (no size limits) or click the folder icon to browse a file from your computer (up to 64KB)." => "Fügen Sie einen Bildlink ein (keine Größenbeschränkung) oder klicken Sie auf das Ordnersymbol, um eine Datei von Ihrem Computer (bis zu 64 KB) zu durchsuchen."
// pehelp.logoWidth: "Sets a logo width in CSS units (px, %, in, pt, etc.)." => "Legt eine Logobreite in CSS-Einheiten (px, %, in, pt usw.) fest."
// pehelp.logoHeight: "Sets a logo height in CSS units (px, %, in, pt, etc.)." => "Legt die Höhe eines Logos in CSS-Einheiten (px, %, in, pt usw.) fest."
// pehelp.logoFit: "Choose from: \"None\" - image maintains its original size; \"Contain\" - image is resized to fit while maintaining its aspect ratio; \"Cover\" - image fills the entire box while maintaining its aspect ratio; \"Fill\" - image is stretched to fill the box without maintaining its aspect ratio." => "Wählen Sie aus: \"Keine\" - das Bild behält seine ursprüngliche Größe; \"Enthalten\" - die Größe des Bildes wird angepasst, wobei das Seitenverhältnis beibehalten wird. \"Cover\" - das Bild füllt den gesamten Rahmen aus, während das Seitenverhältnis beibehalten wird. \"Füllen\" - Das Bild wird gestreckt, um den Rahmen auszufüllen, ohne das Seitenverhältnis beizubehalten."
// pehelp.goNextPageAutomatic: "Select if you want the survey to advance to the next page automatically after a respondent answers all questions on the current page. The survey is also completed automatically." => "Wählen Sie diese Option aus, wenn die Umfrage automatisch zur nächsten Seite weitergeleitet werden soll, nachdem ein Befragter alle Fragen auf der aktuellen Seite beantwortet hat."
// pehelp.showNavigationButtons: "Sets the visibility and location of navigation buttons on a page." => "Legt die Sichtbarkeit und Position von Navigationsschaltflächen auf einer Seite fest."
// pehelp.showProgressBar: "Sets the visibility and location of a progress bar. The \"Auto\" value displays the progress bar above or below the survey header." => "Legt die Sichtbarkeit und Position einer Statusanzeige fest. Der Wert \"Auto\" zeigt den Fortschrittsbalken über oder unter der Kopfzeile der Umfrage an."
// pehelp.showPreviewBeforeComplete: "Enable the preview page with all or answered questions only." => "Aktivieren Sie die Vorschauseite nur mit allen oder beantworteten Fragen."
// pehelp.questionTitleLocation: "Applies to all questions within the survey. This setting can be overridden by title alignment rules at lower levels: panel, page, or question. A lower-level setting will override those on a higher level." => "Gilt für alle Fragen innerhalb der Umfrage. Diese Einstellung kann durch Regeln für die Titelausrichtung auf niedrigeren Ebenen außer Kraft gesetzt werden: Bereich, Seite oder Frage. Eine Einstellung auf niedrigerer Ebene überschreibt die Einstellung auf einer höheren Ebene."
// pehelp.requiredText: "A symbol or a sequence of symbols indicating that an answer is required." => "Ein Symbol oder eine Sequenz von Symbolen, die darauf hinweist, dass eine Antwort erforderlich ist."
// pehelp.questionStartIndex: "Enter a number or letter with which you want to start numbering." => "Geben Sie eine Zahl oder einen Buchstaben ein, mit der Sie die Nummerierung beginnen möchten."
// pehelp.questionErrorLocation: "Sets the location of an error message in relation to the question with invalid input. Choose between: \"Top\" - an error text is placed at the top of the question box; \"Bottom\" - an error text is placed at the bottom of the question box." => "Legt die Position einer Fehlermeldung in Bezug auf die Frage mit ungültiger Eingabe fest. Wählen Sie zwischen: \"Oben\" - ein Fehlertext wird am oberen Rand des Fragefelds platziert; \"Unten\" - ein Fehlertext wird am unteren Rand des Fragefelds platziert."
// pehelp.focusFirstQuestionAutomatic: "Select if you want the first input field on each page ready for text entry." => "Wählen Sie diese Option aus, wenn das erste Eingabefeld auf jeder Seite für die Texteingabe bereit sein soll."
// pehelp.questionsOrder: "Keeps the original order of questions or randomizes them. The effect of this setting is only visible in the Preview tab." => "Behält die ursprüngliche Reihenfolge der Fragen bei oder randomisiert sie. Die Auswirkungen dieser Einstellung sind nur auf der Registerkarte Vorschau sichtbar."
// pehelp.maxTextLength: "For text entry questions only." => "Nur für Fragen zur Texteingabe."
// pehelp.maxOthersLength: "For question comments only." => "Nur für Fragenkommentare."
// pehelp.autoGrowComment: "Select if you want question comments and Long Text questions to auto-grow in height based on the entered text length." => "Wählen Sie diese Option aus, wenn Fragenkommentare und Langtextfragen basierend auf der eingegebenen Textlänge automatisch in die Höhe wachsen sollen."
// pehelp.allowResizeComment: "For question comments and Long Text questions only." => "Nur für Fragenkommentare und Langtextfragen."
// pehelp.calculatedValues: "Custom variables serve as intermediate or auxiliary variables used in form calculations. They take respondent inputs as source values. Each custom variable has a unique name and an expression it's based on." => "Benutzerdefinierte Variablen dienen als Zwischen- oder Hilfsvariablen, die in Formularberechnungen verwendet werden. Sie nehmen die Eingaben der Befragten als Quellwerte. Jede benutzerdefinierte Variable hat einen eindeutigen Namen und einen Ausdruck, auf dem sie basiert."
// pehelp.includeIntoResult: "Select if you wish the calculated value of the expression to be saved along with survey results." => "Wählen Sie diese Option aus, wenn der berechnete Wert des Ausdrucks zusammen mit den Umfrageergebnissen gespeichert werden soll."
// pehelp.triggers: "A trigger is an event or condition that is based on an expression. Once the expression is evaluated to \"true\", a trigger sets off an action. Such an action can optionally have a target question it affects." => "Ein Trigger ist ein Ereignis oder eine Bedingung, die auf einem Ausdruck basiert. Sobald der Ausdruck als \"true\" ausgewertet wird, löst ein Trigger eine Aktion aus. Eine solche Aktion kann optional eine Zielfrage haben, auf die sie sich auswirkt."
// pehelp.clearInvisibleValues: "Choose whether or not to clear values for questions hidden by conditional logic and when to do it." => "Wählen Sie aus, ob und wann Werte für Fragen, die durch bedingte Logik ausgeblendet werden, gelöscht werden sollen."
// pehelp.textUpdateMode: "Choose from: \"On lost focus\" - the value is updated when the input field loses focus; \"While typing\" - the value is updated in real-time, as users are typing." => "Wählen Sie aus: \"Bei Fokusverlust\" - der Wert wird aktualisiert, wenn das Eingabefeld den Fokus verliert; \"Während der Eingabe\" - der Wert wird in Echtzeit aktualisiert, während Benutzer tippen."
// pehelp.columns: "The left value serves as a column ID used in conditional rules, the right value is displayed to respondents." => "Der linke Wert dient als Spalten-ID, die in bedingten Regeln verwendet wird, der rechte Wert wird den Befragten angezeigt."
// pehelp.rows: "The left value serves as a row ID used in conditional rules, the right value is displayed to respondents." => "Der linke Wert dient als Zeilen-ID, die in bedingten Regeln verwendet wird, der rechte Wert wird den Befragten angezeigt."
// pehelp.columnMinWidth: "Accepts CSS values (px, %, in, pt, etc.)." => "Akzeptiert CSS-Werte (px, %, in, pt usw.)."
// pehelp.rowTitleWidth: "Accepts CSS values (px, %, in, pt, etc.)." => "Akzeptiert CSS-Werte (px, %, in, pt usw.)."
// pehelp.cellErrorLocation: "Sets the location of an error message in relation to a cell with invalid input. The \"Inherit\" option applies the setting from the \"Error message alignment\" property." => "Legt die Position einer Fehlermeldung in Bezug auf eine Zelle mit ungültiger Eingabe fest. Die Option \"Vererben\" übernimmt die Einstellung aus der Eigenschaft \"Fehlermeldungsausrichtung\"."
// pehelp.keyDuplicationError: "When the \"Prevent duplicate responses\" property is enabled, a respondent attempting to submit a duplicate entry will receive the following error message." => "Wenn die Eigenschaft \"Doppelte Beantwortungen verhindern\" aktiviert ist, erhält ein Befragter, der versucht, einen doppelten Beitrag einzureichen, die folgende Fehlermeldung."
// pehelp.totalExpression: "Allows you to calculate total values based on an expression. The expression can include basic calculations (`{q1_id} + {q2_id}`), Boolean expressions (`{age} > 60`) and functions ('iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, etc.)." => "Hiermit können Sie Gesamtwerte basierend auf einem Ausdruck berechnen. Der Ausdruck kann grundlegende Berechnungen ('{q1_id} + {q2_id}'), boolesche Ausdrücke ('{age} > 60') und Funktionen ('iif()', 'today()', 'age()', 'min()', 'max()', 'avg()' usw.) enthalten."
// pehelp.confirmDelete: "Triggers a prompt asking to confirm the row deletion." => "Löst eine Eingabeaufforderung aus, in der Sie aufgefordert werden, das Löschen der Zeile zu bestätigen."
// pehelp.defaultValueFromLastRow: "Duplicates answers from the last row and assigns them to the next added dynamic row." => "Dupliziert Antworten aus der letzten Zeile und weist sie der nächsten hinzugefügten dynamischen Zeile zu."
// pehelp.description: "Type a subtitle." => "Geben Sie einen Untertitel ein."
// pehelp.locale: "Choose a language to begin creating your survey. To add a translation, switch to a new language and translate the original text here or in the Translations tab." => "Wählen Sie eine Sprache aus, um mit der Erstellung Ihrer Umfrage zu beginnen. Um eine Übersetzung hinzuzufügen, wechseln Sie in eine neue Sprache und übersetzen Sie den Originaltext hier oder auf der Registerkarte Übersetzungen."
// pehelp.detailPanelMode: "Sets the location of a details section in relation to a row. Choose from: \"None\" - no expansion is added; \"Under the row\" - a row expansion is placed under each row of the matrix; \"Under the row, display one row expansion only\" - an expansion is displayed under a single row only, the remaining row expansions are collapsed." => "Legt die Position eines Detailabschnitts in Bezug auf eine Zeile fest. Wählen Sie aus: \"Keine\" - es wird keine Erweiterung hinzugefügt; \"Unter der Zeile\" - unter jeder Zeile der Matrix wird eine Zeilenerweiterung platziert; \"Unter der Zeile nur eine Zeilenerweiterung anzeigen\" - eine Erweiterung wird nur unter einer einzelnen Zeile angezeigt, die restlichen Zeilenerweiterungen werden ausgeblendet."
// pehelp.imageFit: "Choose from: \"None\" - image maintains its original size; \"Contain\" - image is resized to fit while maintaining its aspect ratio; \"Cover\" - image fills the entire box while maintaining its aspect ratio; \"Fill\" - image is stretched to fill the box without maintaining its aspect ratio." => "Wählen Sie aus: \"Keine\" - das Bild behält seine ursprüngliche Größe; \"Enthalten\" - die Größe des Bildes wird angepasst, wobei das Seitenverhältnis beibehalten wird. \"Cover\" - das Bild füllt den gesamten Rahmen aus, während das Seitenverhältnis beibehalten wird. \"Füllen\" - Das Bild wird gestreckt, um den Rahmen auszufüllen, ohne das Seitenverhältnis beizubehalten."
// pehelp.autoGrow: "Gradually increases the height of the input field as data is being entered. Overrides the \"Input field height (in lines)\" setting." => "Erhöht die Höhe des Eingabefelds schrittweise, während Daten eingegeben werden. Überschreibt die Einstellung \"Höhe des Eingabefelds (in Zeilen)\"."
// pehelp.allowResize: "The resize handle (or grip) appears in the corner and can be dragged to alter the size of the input field." => "Der Ziehpunkt (oder Griff) wird in der Ecke angezeigt und kann gezogen werden, um die Größe des Eingabefelds zu ändern."
// pehelp.maxTimeToFinish: "A time interval in seconds after which the survey auto-advances to the Thank You page." => "Ein Zeitintervall in Sekunden, nach dem die Umfrage automatisch zur Danke-Seite wechselt."
// pehelp.maxTimeToFinishPage: "A time interval in seconds after which the survey auto-advances to the next page." => "Ein Zeitintervall in Sekunden, nach dem die Umfrage automatisch zur nächsten Seite wechselt."
// page.maxTimeToFinish: "A time interval in seconds after which the survey auto-advances to the next page." => "Ein Zeitintervall in Sekunden, nach dem die Umfrage automatisch zur nächsten Seite wechselt."
// page.visibleIf: "Use the magic wand icon to set a conditional rule that determines page visibility." => "Verwenden Sie das Zauberstabsymbol, um eine bedingte Regel festzulegen, die die Sichtbarkeit der Seite bestimmt."
// page.enableIf: "Use the magic wand icon to set a conditional rule that disables the read-only mode for the page." => "Verwenden Sie das Zauberstabsymbol, um eine bedingte Regel festzulegen, die den schreibgeschützten Modus für die Seite deaktiviert."
// page.requiredIf: "Use the magic wand icon to set a conditional rule that prevents survey submission unless at least one nested question has an answer." => "Verwenden Sie das Zauberstabsymbol, um eine bedingte Regel festzulegen, die die Übermittlung von Umfragen verhindert, es sei denn, mindestens eine verschachtelte Frage enthält eine Antwort."
// page.questionTitleLocation: "Applies to all questions within this page. If you want to override this setting, define title alignment rules for individual questions or panels. The \"Inherit\" option applies the survey-level setting (\"Top\" by default)." => "Gilt für alle Fragen auf dieser Seite. Wenn Sie diese Einstellung außer Kraft setzen möchten, definieren Sie Regeln für die Titelausrichtung für einzelne Fragen oder Bereiche. Die Option \"Vererben\" wendet die Einstellung auf Umfrageebene an (standardmäßig \"Oben\")."
// page.questionErrorLocation: "Sets the location of an error message in relation to the question with invalid input. Choose between: \"Top\" - an error text is placed at the top of the question box; \"Bottom\" - an error text is placed at the bottom of the question box. The \"Inherit\" option applies the survey-level setting (\"Top\" by default)." => "Legt die Position einer Fehlermeldung in Bezug auf die Frage mit ungültiger Eingabe fest. Wählen Sie zwischen: \"Oben\" - ein Fehlertext wird am oberen Rand des Fragefelds platziert; \"Unten\" - ein Fehlertext wird am unteren Rand des Fragefelds platziert. Die Option \"Vererben\" wendet die Einstellung auf Umfrageebene an (standardmäßig \"Oben\")."
// page.questionsOrder: "Keeps the original order of questions or randomizes them. The \"Inherit\" option applies the survey-level setting (\"Original\" by default). The effect of this setting is only visible in the Preview tab." => "Behält die ursprüngliche Reihenfolge der Fragen bei oder randomisiert sie. Mit der Option \"Vererben\" wird die Einstellung auf Umfrageebene (\"Original\" standardmäßig) angewendet. Die Auswirkungen dieser Einstellung sind nur auf der Registerkarte Vorschau sichtbar."
// page.navigationButtonsVisibility: "Sets the visibility of navigation buttons on the page. The \"Inherit\" option applies the survey-level setting, which defaults to \"Visible\"." => "Legt die Sichtbarkeit von Navigationsschaltflächen auf der Seite fest. Mit der Option \"Vererben\" wird die Einstellung auf Umfrageebene angewendet, die standardmäßig auf \"Sichtbar\" eingestellt ist."
// pehelp.showTimerPanel: "Sets the visibility and location of a timer on a page." => "Legt die Sichtbarkeit und Position eines Timers auf einer Seite fest."
// pehelp.panelsState: "Choose from: \"Locked\" - users cannot expand or collapse panels; \"Collapse all\" - all panels start in a collapsed state; \"Expand all\" - all panels start in an expanded state; \"First expanded\" - only the first panel is initially expanded." => "Wählen Sie aus: \"Gesperrt\" - Benutzer können Bedienfelder nicht erweitern oder reduzieren; \"Alle ausblenden\" - alle Bedienfelder beginnen in einem zusammengeklappten Zustand; \"Alle erweitern\" - alle Bedienfelder beginnen in einem erweiterten Zustand; \"First expanded\" - nur das erste Panel wird zunächst erweitert."
// pehelp.imageLinkName: "Enter a shared property name within the array of objects that contains the image or video file URLs you want to display in the choice list." => "Geben Sie einen freigegebenen Eigenschaftsnamen in das Array von Objekten ein, das die Bild- oder Videodatei-URLs enthält, die in der Auswahlliste angezeigt werden sollen."
// pehelp.choices: "The left value serves as an item ID used in conditional rules, the right value is displayed to respondents." => "Der linke Wert dient als Element-ID, die in bedingten Regeln verwendet wird, der rechte Wert wird den Befragten angezeigt."
// pehelp.title: "Type a user-friendly title to display." => "Geben Sie einen benutzerfreundlichen Titel ein, der angezeigt werden soll."
// pehelp.waitForUpload: "Ensures that users won't complete the survey until files are uploaded." => "Stellt sicher, dass Benutzer die Umfrage erst abschließen, wenn die Dateien hochgeladen wurden."
// pehelp.minWidth: "Accepts CSS values (px, %, in, pt, etc.)." => "Akzeptiert CSS-Werte (px, %, in, pt usw.)."
// pehelp.maxWidth: "Accepts CSS values (px, %, in, pt, etc.)." => "Akzeptiert CSS-Werte (px, %, in, pt usw.)."
// pehelp.width: "Accepts CSS values (px, %, in, pt, etc.)." => "Akzeptiert CSS-Werte (px, %, in, pt usw.)."
// pehelp.useDisplayValuesInDynamicTexts: "In single- and multiple-selection question types, each choice option has an ID and display value. When selected, this setting shows a display value instead of an ID value in HTML questions and dynamic titles and descriptions of survey elements." => "Bei Fragetypen mit einfacher und mehrfacher Auswahl verfügt jede Auswahloption über eine ID und einen Anzeigewert. Wenn diese Einstellung aktiviert ist, wird in HTML-Fragen und dynamischen Titeln und Beschreibungen von Umfrageelementen ein Anzeigewert anstelle eines ID-Werts angezeigt."
// pehelp.clearIfInvisible: "Choose whether or not to clear question values hidden by conditional logic and when to do it. The \"Inherit\" option applies the survey-level setting (\"Upon survey completion\" by default)." => "Wählen Sie aus, ob und wann Fragenwerte, die durch bedingte Logik ausgeblendet werden, gelöscht werden sollen. Die Option \"Vererben\" wendet die Einstellung auf Umfrageebene an (standardmäßig \"Nach Abschluss der Umfrage\")."
// pehelp.choicesFromQuestionMode: "Choose from: \"All\" - copies all choice options from the selected question; \"Selected\" - dynamically copies only selected choice options; \"Unselected\" - dynamically copies only unselected choice options. The \"None\" and \"Other\" options are copied by default if enabled in the source question." => "Wählen Sie aus: \"Alle\" - kopiert alle Auswahloptionen aus der ausgewählten Frage; \"Ausgewählt\" - kopiert dynamisch nur ausgewählte Auswahloptionen; \"Nicht ausgewählt\" - kopiert dynamisch nur nicht ausgewählte Auswahloptionen. Die Optionen \"Keine\" und \"Sonstiges\" werden standardmäßig kopiert, wenn sie in der Quellfrage aktiviert sind."
// pehelp.showOtherItem: "When selected, users can include additional input in a separate comment box." => "Wenn diese Option ausgewählt ist, können Benutzer zusätzliche Eingaben in ein separates Kommentarfeld einfügen."
// pehelp.separateSpecialChoices: "Displays each special choice option (\"None\", \"Other\", \"Select All\") on a new line, even when using a multiple-column layout." => "Zeigt jede spezielle Auswahloption (\"Keine\", \"Andere\", \"Alle auswählen\") in einer neuen Zeile an, auch wenn ein mehrspaltiges Layout verwendet wird."
// pehelp.path: "Specify the location within the service dataset where the target array of objects is located. Leave empty if the URL already points to the array." => "Geben Sie die Position innerhalb des Service-Datasets an, an der sich das Ziel-Array von Objekten befindet. Lassen Sie das Feld leer, wenn die URL bereits auf das Array verweist."
// pehelp.titleName: "Enter a uniform property name within the array of objects that contains the values you want to display in the choice list." => "Geben Sie innerhalb des Objektarrays einen einheitlichen Eigenschaftsnamen ein, der die Werte enthält, die in der Auswahlliste angezeigt werden sollen."
// pehelp.allowEmptyResponse: "Select to allow the service to return an empty response or array." => "Wählen Sie diese Option aus, damit der Dienst eine leere Antwort oder ein leeres Array zurückgeben kann."
// pehelp.choicesVisibleIf: "Use the magic wand icon to set a conditional rule that determines the visibility of all choice options." => "Verwenden Sie das Zauberstabsymbol, um eine Bedingungsregel festzulegen, die die Sichtbarkeit aller Auswahloptionen bestimmt."
// pehelp.rateValues: "The left value serves as an item ID used in conditional rules, the right value is displayed to respondents." => "Der linke Wert dient als Element-ID, die in bedingten Regeln verwendet wird, der rechte Wert wird den Befragten angezeigt."
// rating.displayMode: "\"Auto\" selects between the \"Buttons\" and \"Dropdown\" modes based on the available width. When the width is insufficient to display buttons, the question displays a dropdown." => "\"Auto\" wählt zwischen den Modi \"Buttons\" und \"Dropdown\" basierend auf der verfügbaren Breite. Wenn die Breite nicht ausreicht, um Schaltflächen anzuzeigen, wird für die Frage ein Dropdown-Menü angezeigt."
// pehelp.valuePropertyName: "Allows you to connect questions that produce results in different formats. When such questions are linked together using a join identifier, this shared property stores selected question values." => "Ermöglicht es Ihnen, Fragen zu verbinden, die Ergebnisse in verschiedenen Formaten liefern. Wenn solche Fragen mithilfe eines Verknüpfungsbezeichners miteinander verknüpft sind, speichert diese gemeinsam genutzte Eigenschaft ausgewählte Fragewerte."
// pehelp.searchEnabled: "Select if you want to update the drop-down menu contents to match the search query that a user is typing in the input field." => "Wählen Sie diese Option aus, wenn Sie den Inhalt des Dropdown-Menüs so aktualisieren möchten, dass er der Suchabfrage entspricht, die ein Benutzer in das Eingabefeld eingibt."
// pehelp.valueTrue: "A value to save in survey results when respondents give a positive answer." => "Ein Wert, der in den Umfrageergebnissen gespeichert werden soll, wenn die Befragten eine positive Antwort geben."
// pehelp.valueFalse: "A value to save in survey results when respondents give a negative answer." => "Ein Wert, der in den Umfrageergebnissen gespeichert werden soll, wenn die Befragten eine negative Antwort geben."
// pehelp.showPreview: "It's not recommended to disable this option as it overrides the Preview image and makes it hard for a user to understand whether the files have been uploaded." => "Es wird nicht empfohlen, diese Option zu deaktivieren, da sie das Vorschaubild überschreibt und es für einen Benutzer schwierig macht, zu verstehen, ob die Dateien hochgeladen wurden."
// pehelp.needConfirmRemoveFile: "Triggers a prompt asking to confirm the file deletion." => "Löst eine Eingabeaufforderung aus, in der Sie aufgefordert werden, das Löschen der Datei zu bestätigen."
// pehelp.selectToRankEnabled: "Enable to rank only selected choices. Users will drag selected items from the choice list to order them within the ranking area." => "Aktivieren Sie diese Option, um nur ausgewählte Auswahlmöglichkeiten in eine Rangfolge zu bringen. Benutzer ziehen ausgewählte Elemente aus der Auswahlliste, um sie innerhalb des Ranking-Bereichs zu sortieren."
// pehelp.dataList: "Enter a list of choices that will be suggested to the respondent during input." => "Geben Sie eine Liste mit Auswahlmöglichkeiten ein, die dem Befragten während der Eingabe vorgeschlagen werden."
// pehelp.itemSize: "The setting only resizes the input fields and doesn't affect the width of the question box." => "Die Einstellung ändert nur die Größe der Eingabefelder und wirkt sich nicht auf die Breite des Fragefelds aus."
// pehelp.itemTitleWidth: "Sets consistent width for all item labels in pixels" => "Legt eine konsistente Breite für alle Elementbeschriftungen in Pixeln fest"
// pehelp.contentMode: "The \"Auto\" option automatically determines the suitable mode for display - Image, Video, or YouTube - based on the source URL provided." => "Die Option \"Auto\" bestimmt automatisch den geeigneten Anzeigemodus - Bild, Video oder YouTube - basierend auf der bereitgestellten Quell-URL."
// pehelp.altText: "Serves as a substitute when the image cannot be displayed on a user's device and for accessibility purposes." => "Dient als Ersatz, wenn das Bild nicht auf dem Gerät eines Benutzers angezeigt werden kann, und aus Gründen der Barrierefreiheit."
// pehelp.rateColorMode: "Defines the color of the selected emoji when the Rating icon type is set to \"Smileys\". Choose between: \"Default\" - the selected emoji appears in default survey color; \"Scale\" - the selected emoji inherits color from the rating scale." => "Definiert die Farbe des ausgewählten Emojis, wenn der Symboltyp \"Bewertung\" auf \"Smileys\" eingestellt ist. Wählen Sie zwischen: \"Standard\" - das ausgewählte Emoji erscheint in der Standardfarbe der Umfrage; \"Skala\" - das ausgewählte Emoji erbt die Farbe von der Bewertungsskala."
// expression.name: "An expression ID that is not visible to respondents." => "Eine Ausdrucks-ID, die für die Befragten nicht sichtbar ist."
// expression.description: "Type an expression subtitle." => "Geben Sie einen Ausdrucksuntertitel ein."
// expression.expression: "An expression can include basic calculations (`{q1_id} + {q2_id}`), conditions (`{age} > 60`), and functions ('iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, etc.)." => "Ein Ausdruck kann grundlegende Berechnungen ('{q1_id} + {q2_id}'), Bedingungen ('{age} > 60') und Funktionen ('iif()', 'today()', 'age()', 'min()', 'max()', 'avg()' usw.) enthalten."
// pehelp.storeOthersAsComment: "Select to store the \"Other\" option value as a separate property in survey results." => "Wählen Sie diese Option aus, um den Wert der Option \"Sonstiges\" als separate Eigenschaft in den Umfrageergebnissen zu speichern."
// p.swapOrder: "Swap the order of Yes and No" => "Vertauschen Sie die Reihenfolge von Ja und Nein"
// p.itemTitleWidth: "Item label width (in px)" => "Breite der Artikelbeschriftung (in px)"
// p.selectToRankEmptyRankedAreaText: "Text to show if all options are selected" => "Text, der angezeigt werden soll, wenn alle Optionen ausgewählt sind"
// p.selectToRankEmptyUnrankedAreaText: "Placeholder text for the ranking area" => "Platzhaltertext für den Rankingbereich"
// pe.allowCompleteSurveyAutomatic: "Complete the survey automatically" => "Automatisches Ausfüllen der Umfrage"
// pehelp.allowCompleteSurveyAutomatic: "Select if you want the survey to complete automatically after a respondent answers all questions." => "Wählen Sie diese Option aus, wenn die Umfrage automatisch abgeschlossen werden soll, nachdem ein Befragter alle Fragen beantwortet hat."
// masksettings.saveMaskedValue: "Save masked value in survey results" => "Maskierte Werte in Umfrageergebnissen speichern"
// patternmask.pattern: "Value pattern" => "Werte-Muster"
// datetimemask.min: "Minimum value" => "Mindestwert"
// datetimemask.max: "Maximum value" => "Maximalwert"
// numericmask.allowNegativeValues: "Allow negative values" => "Negative Werte zulassen"
// numericmask.thousandsSeparator: "Thousands separator" => "Tausender-Trennzeichen"
// numericmask.decimalSeparator: "Decimal separator" => "Dezimaltrennzeichen"
// numericmask.precision: "Value precision" => "Wertgenauigkeit"
// numericmask.min: "Minimum value" => "Mindestwert"
// numericmask.max: "Maximum value" => "Maximalwert"
// currencymask.prefix: "Currency prefix" => "Währungs-Präfix"
// currencymask.suffix: "Currency suffix" => "Währungs-Suffix"
// pe.maskType: "Input mask type" => "Typ der Eingabemaske"
// maskTypes.patternmask: "Pattern" => "Muster"
// maskTypes.numericmask: "Numeric" => "Numerisch"
// maskTypes.datetimemask: "Date and Time" => "Datum und Uhrzeit"
// maskTypes.currencymask: "Currency" => "Währung"
// tabs.mask: "Input Mask Settings" => "Einstellungen für die Eingabemaske"
// pe.pattern_placeholder: "Ex.: +1(999)-999-99-99" => "Bsp.: +1(999)-999-99-99"
// pe.datetimepattern_placeholder: "Ex.: mm/dd/yyyy" => "Beispiel: mm/tt/jjjj"
// pe.currencyprefix_placeholder: "Ex.: $" => "Bsp.: $"
// pe.currencysuffix_placeholder: "Ex.: USD" => "Bsp.: USD"
// pv.textWrapEnabled: "Wrap choices" => "Auswahl an Wraps"
// question.textWrapEnabled: "Long texts in choice options will automatically generate line breaks to fit within the drop-down menu. Unselect if you want the texts to clip." => "Lange Texte in Auswahloptionen generieren automatisch Zeilenumbrüche, die in das Dropdown-Menü passen. Deaktivieren Sie diese Option, wenn die Texte abgeschnitten werden sollen."
// masksettings.saveMaskedValue: "Select if you want to store the question value with an applied mask in survey results." => "Wählen Sie diese Option aus, wenn Sie den Fragewert mit einer angewendeten Maske in den Umfrageergebnissen speichern möchten."
// patternmask.pattern: "The pattern can contain string literals and the following placeholders: `9` - for a digit; `a` - for an upper- or lower-case letter; `#` - for a digit or an upper- or lower-case letter. Use backslash `\\` to escape a character." => "Das Muster kann Zeichenfolgenliterale und die folgenden Platzhalter enthalten: '9' - für eine Ziffer; \"a\" - für einen Groß- oder Kleinbuchstaben; '#' - für eine Ziffer oder einen Groß- oder Kleinbuchstaben. Verwenden Sie den umgekehrten Schrägstrich '\\', um ein Zeichen mit Escapezeichen zu versehen."
// datetimemask.pattern: "The pattern can contain separator characters and the following placeholders: `m` - for month number; `mm` - for month number, with leading zero for single-digit values; `d` - for day of the month; `dd` - for day of the month, with leading zero for single-digit values; `yy` - for the last two digits of the year; `yyyy` - for a four-digit year." => "Das Muster kann Trennzeichen und die folgenden Platzhalter enthalten: 'm' - für Monatsnummer; 'mm' - für Monatszahl, mit führender Null für einstellige Werte; 'd' - für Tag des Monats; 'dd' - für Tag des Monats, mit führender Null für einstellige Werte; 'yy' - für die letzten beiden Ziffern des Jahres; 'yyyy' - für ein vierstelliges Jahr."
// numericmask.decimalSeparator: "A symbol used to separate the fractional part from the integer part of a displayed number." => "Ein Symbol, das verwendet wird, um den Bruchteil vom ganzzahligen Teil einer angezeigten Zahl zu trennen."
// numericmask.thousandsSeparator: "A symbol used to separate the digits of a large number into groups of three." => "Ein Symbol, das verwendet wird, um die Ziffern einer großen Zahl in Dreiergruppen zu unterteilen."
// numericmask.precision: "Limits how many digits to retain after the decimal point for a displayed number." => "Schränkt die Anzahl der Nachkommastellen für eine angezeigte Zahl ein."
// currencymask.prefix: "One or several symbols to be displayed before the value." => "Ein oder mehrere Symbole, die vor dem Wert angezeigt werden sollen."
// currencymask.suffix: "One or several symbols to be displayed after the value." => "Ein oder mehrere Symbole, die nach dem Wert angezeigt werden sollen."
// ed.translationSource: "Source: " => "Quelle: "
// ed.translationTarget: "Target: " => "Ziel: "
// ed.pagePlaceHolder: "The page is empty. Drag an element from the toolbox or click the button below." => "Die Seite ist leer. Ziehen Sie ein Element aus der Toolbox oder klicken Sie auf die Schaltfläche unten."
// maskTypes.none: "None" => "Nichts"
// itemvalue@rows.visibleIf: "Make the row visible if" => "Machen Sie die Zeile sichtbar, wenn"
// itemvalue@rows.enableIf: "Make the row editable if" => "Machen Sie die Zeile bearbeitbar, wenn"
// signaturepad.placeholderReadOnly: "Placeholder text in read-only or preview mode" => "Platzhaltertext im schreibgeschützten oder Vorschaumodus"
// pe.textWrapEnabled: "Wrap choices" => "Auswahl an Wraps"
// image.contentMode: "The \"Auto\" option automatically determines the suitable mode for display - Image, Video, or YouTube - based on the source URL provided." => "Die Option \"Auto\" bestimmt automatisch den geeigneten Anzeigemodus - Bild, Video oder YouTube - basierend auf der bereitgestellten Quell-URL."
// imagepicker.contentMode: "Choose between \"Image\" and \"Video\" to set the content mode of the media selector. If \"Image\" is selected, ensure that all options provided are image files in the following formats: JPEG, GIF, PNG, APNG, SVG, BMP, ICO. Similarly, if \"Video\" is selected, ensure that all options are direct links to video files in the following formats: MP4, MOV, WMV, FLV, AVI, MKV. Please note that YouTube links are not supported for video options." => "Wählen Sie zwischen \"Bild\" und \"Video\", um den Inhaltsmodus der Medienauswahl festzulegen. Wenn \"Bild\" ausgewählt ist, stellen Sie sicher, dass es sich bei allen bereitgestellten Optionen um Bilddateien in den folgenden Formaten handelt: JPEG, GIF, PNG, APNG, SVG, BMP, ICO. Wenn \"Video\" ausgewählt ist, stellen Sie sicher, dass alle Optionen direkte Links zu Videodateien in den folgenden Formaten sind: MP4, MOV, WMV, FLV, AVI, MKV. Bitte beachten Sie, dass YouTube-Links für Videooptionen nicht unterstützt werden."
// ed.selectFile: "Select a file" => "Wählen Sie eine Datei aus"
// ed.removeFile: "Remove the file" => "Entfernen Sie die Datei"
// pe.searchMode: "Search Mode" => "Suchmodus"

// ed.surveyPlaceHolderMobile: "Click the \"Add Question\" button below to start creating your form." => "Klicken Sie unten auf die Schaltfläche \"Frage hinzufügen\", um mit der Erstellung Ihres Formulars zu beginnen."
// ed.pagePlaceHolderMobile: "Click the \"Add Question\" button below to add a new element to the page." => "Klicken Sie unten auf die Schaltfläche \"Frage hinzufügen\", um der Seite ein neues Element hinzuzufügen."
// ed.panelPlaceHolderMobile: "Click the \"Add Question\" button below to add a new element to the panel." => "Klicken Sie unten auf die Schaltfläche \"Frage hinzufügen\", um dem Bedienfeld ein neues Element hinzuzufügen."
// ed.imagePlaceHolderMobile: "Click the button below and choose an image to upload" => "Klicken Sie auf die Schaltfläche unten und wählen Sie ein Bild zum Hochladen aus"
// coloralpha.opacity: "Opacity" => "Undurchsichtigkeit"
// font.family: "Font family" => "Schriftfamilie"
// font.color: "Color" => "Farbe"
// font.placeholderColor: "Placeholder color" => "Platzhalterfarbe"
// font.size: "Size" => "Größe"
// theme.themeName: "Theme" => "Thema"
// theme.isPanelless: "Question appearance" => "Aussehen der Frage"
// theme.editorPanel: "Background and corner radius" => "Hintergrund und Eckenradius"
// theme.questionPanel: "Background and corner radius" => "Hintergrund und Eckenradius"
// theme.primaryColor: "Accent color" => "Akzentfarbe"
// theme.panelBackgroundTransparency: "Panel background opacity" => "Deckkraft des Bedienfeldhintergrunds"
// theme.questionBackgroundTransparency: "Question background opacity" => "Deckkraft des Hintergrunds der Frage"
// theme.fontSize: "Font size" => "Schriftgrad"
// theme.scale: "Scale" => "Maßstab"
// theme.cornerRadius: "Corner radius" => "Ecken-Radius"
// theme.pageTitle: "Title font" => "Schriftart des Titels"
// theme.pageDescription: "Description font" => "Beschreibung Schriftart"
// theme.questionTitle: "Title font" => "Schriftart des Titels"
// theme.questionDescription: "Description font" => "Beschreibung Schriftart"
// theme.editorFont: "Font" => "Schriftart"
// theme.backgroundOpacity: "Opacity" => "Undurchsichtigkeit"
// theme.--sjs-font-family: "Font family" => "Schriftfamilie"
// theme.--sjs-general-backcolor-dim: "Background color" => "Hintergrundfarbe"
// theme.--sjs-primary-backcolor: "Accent background" => "Akzent-Hintergrund"
// theme.--sjs-primary-forecolor: "Accent foreground" => "Akzent Vordergrund"
// theme.--sjs-shadow-small: "Shadow effects" => "Schatten-Effekte"
// theme.--sjs-shadow-inner: "Shadow effects" => "Schatten-Effekte"
// theme.--sjs-border-default: "Colors" => "Farben"
// header@header.headerView: "View" => "Ansehen"
// header@header.logoPosition: "Logo position" => "Logo-Position"
// header@header.surveyTitle: "Survey title font" => "Schriftart des Umfragetitels"
// header@header.surveyDescription: "Survey description font" => "Schriftart der Umfragebeschreibung"
// header@header.headerTitle: "Survey title font" => "Schriftart des Umfragetitels"
// header@header.headerDescription: "Survey description font" => "Schriftart der Umfragebeschreibung"
// header@header.inheritWidthFrom: "Content area width" => "Breite des Inhaltsbereichs"
// header@header.textAreaWidth: "Text width" => "Textbreite"
// header@header.backgroundColorSwitch: "Background color" => "Hintergrundfarbe"
// header@header.backgroundImage: "Background image" => "Hintergrundbild"
// header@header.backgroundImageOpacity: "Opacity" => "Undurchsichtigkeit"
// header@header.overlapEnabled: "Overlap" => "Überlappung"
// header@header.logoPositionX: "Logo position" => "Logo-Position"
// header@header.titlePositionX: "Title position" => "Titelposition"
// header@header.descriptionPositionX: "Description position" => "Beschreibung Position"
// weight.400: "Regular" => "Regelmäßig"
// weight.600: "Heavy" => "Schwer"
// weight.700: "Semi-bold" => "Halbfett"
// weight.800: "Bold" => "Kühn"
// backgroundImageFit.auto: "Auto" => "Auto"
// backgroundImageFit.cover: "Cover" => "Deckel"
// backgroundImageFit.contain: "Contain" => "Enthalten"
// backgroundImageFit.fill: "Stretch" => "Strecken"
// backgroundImageFit.tile: "Tile" => "Fliese"
// backgroundImageAttachment.fixed: "Fixed" => "Fest"
// backgroundImageAttachment.scroll: "Scroll" => "Schriftrolle"
// headerView.basic: "Basic" => "Grundlegend"
// headerView.advanced: "Advanced" => "Fortgeschritten"
// inheritWidthFrom.survey: "Same as survey" => "Wie bei der Umfrage"
// inheritWidthFrom.container: "Fit to container" => "An Container anpassen"
// backgroundColorSwitch.none: "None" => "Nichts"
// backgroundColorSwitch.accentColor: "Accent color" => "Akzentfarbe"
// backgroundColorSwitch.custom: "Custom" => "Gewohnheit"
// colorPalette.light: "Light" => "Licht"
// colorPalette.dark: "Dark" => "Dunkel"
// isPanelless.false: "Default" => "Vorgabe"
// isPanelless.true: "Without Panels" => "Ohne Paneele"
// theme.cornerRadius: "Corner radius" => "Ecken-Radius"
// theme.fontFamily: "Font family" => "Schriftfamilie"
// theme.fontWeightRegular: "Regular" => "Regelmäßig"
// theme.fontWeightHeavy: "Heavy" => "Schwer"
// theme.fontWeightSemiBold: "Semi-bold" => "Halbfett"
// theme.fontWeightBold: "Bold" => "Kühn"
// theme.color: "Color" => "Farbe"
// theme.placeholderColor: "Placeholder color" => "Platzhalterfarbe"
// theme.size: "Size" => "Größe"
// theme.opacity: "Opacity" => "Undurchsichtigkeit"