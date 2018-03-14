import { editorLocalization } from "../editorLocalization";

var germanTranslation = {
  //survey templates
  survey: {
    edit: "Bearbeiten",
    dropQuestion: "Frage bitte hier platzieren.",
    copy: "Kopieren",
    addToToolbox: "Zur Werkzeugleiste hinzufügen",
    deletePanel: "Panel löschen",
    deleteQuestion: "Frage löschen"
  },
  //questionTypes
  qt: {
    checkbox: "Checkbox",
    comment: "Kommentar",
    dropdown: "Aufklappmenü",
    file: "Datei",
    html: "Html",
    matrix: "Matrix (einfache Auswahl)",
    matrixdropdown: "Matrix (mehrfache Auswahl)",
    matrixdynamic: "Matrix (dynamische Zeilen)",
    multipletext: "Mehrzeiliger Text",
    panel: "Panel",
    paneldynamic: "Panel (dynamische Panels)",
    radiogroup: "Radiogruppe",
    rating: "Bewertung",
    text: "Einfache	Eingabe",
    boolean: "Boolean"
  },
  //Strings in Editor
  ed: {
    survey: "Umfrage",
    addNewPage: "Neue Seite hinzufügen",
    newPageName: "Seite",
    newQuestionName: "Frage",
    newPanelName: "Panel",
    testSurvey: "Testumfrage",
    testSurveyAgain: "Testumfrage wiederholen",
    testSurveyWidth: "Umfragebreite: ",
    embedSurvey: "Umfrage einfügen",
    saveSurvey: " Umfrage speichern",
    designer: "Umfrage Designer",
    jsonEditor: "JSON Editor",
    undo: "Rückgängig",
    redo: "Wiederherstellen",
    options: "Optionen",
    generateValidJSON: "Generiere gültiges JSON",
    generateReadableJSON: "Generiere lesbares JSON",
    toolbox: "Werkzeugleiste",
    delSelObject: "Lösche markiertes Objekt",
    correctJSON: "Bitte JSON korrigieren.",
    surveyResults: "Umfrageergebnis: "
  },
  //Property Editors
  pe: {
    apply: "Anwenden",
    ok: "OK",
    cancel: "Abbrechen",
    reset: "Zurücksetzen",
    close: "Schliessen",
    delete: "Löschen",
    addNew: "Neu hinzufügen",
    removeAll: "Alles löschen",
    edit: "Bearbeiten",
    empty: "<leer>",
    fastEntry: "Schnell-Eintrag",
    formEntry: "Formular-Eintrag",
    testService: "Service testen",
    expressionHelp:
      "Bitte geben Sie eine booleschen Ausdruck ein. Es muss 'true' retournieren um die Frage/Seite anzuzeigen. zum Beispiel: {question1} = 'value1' or ({question2} = 3 and {question3} < 5)",

    propertyIsEmpty: "Bitte geben Sie einen Wert ein",
    value: "Wert",
    text: "Text",
    required: "Erforderlich?",
    columnEdit: "Spalte bearbeiten: {0}",
    itemEdit: "Element bearbeiten: {0}",

    hasOther: "Hat ein anderes Element",
    name: "Name",
    title: "Titel",
    cellType: "Zellentyp",
    colCount: "Spaltenanzahl",
    choicesOrder: "Wähle Auswahlreihenfolge",
    visible: "Ist es sichtbar?",
    isRequired: "Ist es erforderlich?",
    startWithNewLine: "In neuer Zeile beginnen?",
    rows: "Zeilenanzahl",
    placeHolder: "Platzhalter eingeben",
    showPreview: "Wird eine Bildvorschau angezeigt?",
    storeDataAsText: "Speicher Dateininhalt des JSON-Resultats als Text",
    maxSize: "Maximale Dateigrösse in Bytes",
    imageHeight: "Bildhöhe",
    imageWidth: "Bildbreite",
    rowCount: "Zeilenanzahl",
    addRowText: "Zeilenknopftext hinzufügen",
    removeRowText: "Zeilenknopftext löschen",
    minRateDescription: "Bewertungsbeschreibung minimieren",
    maxRateDescription: "Bewertungsbeschreibung maximieren",
    inputType: "Eingabetyp",
    optionsCaption: "Auswahlbeschriftung",

    qEditorTitle: "Frage bearbeiten: {0}",
    tabs: {
      general: "Allgemein",
      fileOptions: "Optionen",
      html: "Html Editor",
      columns: "Spalten",
      rows: "Zeilen",
      choices: "Auswahlmöglichkeiten",
      visibleIf: "Sichtbar wenn",
      rateValues: "Bewertungswerte",
      choicesByUrl: "Auswahlmöglichkeiten vom Internet",
      matrixChoices: "Standardauswahl",
      multipleTextItems: "Texteingabe",
      validators: "Überprüfung"
    },
    editProperty: "Eigenschaft bearbeiten '{0}'",
    items: "[ Gegenstand: {0} ]",

    enterNewValue: "Bitte einen Wert eingeben.",
    noquestions: "Die Umfrage enthält keine Frage.",
    createtrigger: "Bitte einen Trigger eingeben.",
    triggerOn: "Ein ",
    triggerMakePagesVisible: "Seiten sichtbar machen:",
    triggerMakeQuestionsVisible: "Elemente sichtbar machen:",
    triggerCompleteText: "Bei Erfolg die Umfrage abschliessen.",
    triggerNotSet: "Kein Trigger eingerichtet",
    triggerRunIf: "Ausführen wenn",
    triggerSetToName: "Ändere Wert von: ",
    triggerSetValue: "auf: ",
    triggerIsVariable: "Variable nicht im Umfrageergebnis einbinden.",
    verbChangeType: "Typ ändern ",
    verbChangePage: "Seite ändern "
  },
  //Property values
  pv: {
    true: "true",
    false: "false"
  },
  //Operators
  op: {
    empty: "ist leer",
    notempty: "ist nicht leer",
    equal: "ist gleich",
    notequal: "ist ungleich",
    contains: "enthält",
    notcontains: "enthält nicht",
    greater: "grösser als",
    less: "kleiner als",
    greaterorequal: "grösser oder kleiner als",
    lessorequal: "kleiner oder ist gleich"
  },
  //Embed window
  ew: {
    angular: "Angular-Version benutzen",
    jquery: "jQuery-Version benutzen",
    knockout: "Knockout-Version benutzen",
    react: "React-Version benutzen",
    vue: "Vue-Version benutzen",
    bootstrap: "Als Bootstrap Framework",
    standard: "Kein Bootstrap",
    showOnPage: "Zeige Umfrage auf Seite",
    showInWindow: "Zeige Umfrage als Fenster",
    loadFromServer: "Lade Umfrage als JSON vom Server",
    titleScript: "Skripte und Styles",
    titleHtml: "HTML",
    titleJavaScript: "JavaScript"
  },
  validators: {
    answercountvalidator: "Anzahl Antworten",
    emailvalidator: "E-Mail",
    numericvalidator: "numerisch",
    regexvalidator: "regex",
    textvalidator: "text"
  },
  triggers: {
    completetrigger: "Umfrage abschliessen",
    setvaluetrigger: "Wert setzen",
    visibletrigger: "Sichtbarkeit ändern"
  },
  //Properties
  p: {
    name: "Name",
    title: {
      name: "Titel",
      title: "Bitte leer lassen, falls gleich wie 'Name'"
    },
    survey_title: { name: "Titel", title: "Wird auf jeder Seite angezeigt." },
    page_title: { name: "title", title: "Seitentitel" }
  }
};

editorLocalization.locales["de"] = germanTranslation;
