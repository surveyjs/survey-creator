import { editorLocalization } from "../editorLocalization";

var italianTranslation = {
  // strings for survey templates
  survey: {
    edit: "Modifica",
    dropQuestion: "Aggiungi una domanda qui",
    copy: "Copia",
    addToToolbox: "Aggiungi alla toolbox",
    deletePanel: "Elimina pannello",
    deleteQuestion: "Elimina domanda",
    convertTo: "Converti a"
  },
  // strings for question types
  qt: {
    checkbox: "Casella di controllo ",
    comment: "Commento",
    dropdown: "Combo",
    file: "Archivio",
    html: "Html",
    matrix: "Matrice (unica opzione)",
    matrixdropdown: "Matrice (opzioni multiple)",
    matrixdynamic: "Matrice (dinamica)",
    multipletext: "Testo multiplo",
    panel: "Pannello",
    paneldynamic: "Pannello (dinamico)",
    radiogroup: "Opzione multipla",
    rating: "Valutazione",
    text: "Testo semplice",
    expression: "Espressione"
  },
  // strings for editor
  ed: {
    survey: "Questionario",
    editSurvey: "Modifica Questionario",
    addNewPage: "Aggiungi Nuova Pagina",
    deletePage: "Elimina Pagina",
    editPage: "Modifica Pagina",
    newPageName: "pagina",
    newQuestionName: "domanda",
    newPanelName: "pannello",
    testSurvey: "Testa questionario",
    testSurveyAgain: "Testa questionario di nuovo",
    testSurveyWidth: "Larghezza questionario:",
    embedSurvey: "Includi questionario",
    saveSurvey: "Salva questionario",
    designer: "Disegna",
    jsonEditor: "Modifica JSON",
    undo: "Annulla",
    redo: "Ripeti",
    options: "Opzioni",
    generateValidJSON: "Genera JSON valido",
    generateReadableJSON: "Genera JSON leggibile",
    toolbox: "Strumenti",
    delSelObject: "Elimina oggetto selezionato",
    editSelObject: "Modifica oggetto selezionato",
    correctJSON: "Per favore, correggi il tuo JSON",
    surveyResults: "Risultati del questionario: ",
    modified: "Modificato",
    saving: "Salvataggio",
    saved: "Salvato"
  },
  //Property names in table headers
  pel: {
    isRequired: "Richiesto"
  },
  // strings for property editors
  pe: {
    apply: "Applica",
    ok: "Accetta",
    cancel: "Annulla",
    reset: "Reimposta",
    close: "Chiudi",
    delete: "Elimina",
    addNew: "Nuovo",
    removeAll: "Elimina tutto",
    edit: "Modifica",
    empty: "<vuoto>",
    notEmpty: "<modifica valore>",
    fastEntry: "Inserimento rapido",
    formEntry: "Inserimento con dati ",
    testService: "Test del servizio",
    conditionSelectQuestion: "Seleziona domanda...",
    conditionButtonAdd: "Aggiungi",
    conditionButtonReplace: "Sostituisci",
    conditionHelp:
      "Per favore, inserire una espressione booleana. Dovrebbe restituire true per mantenere la domanda/pagina visibile. Ad esempio: {domanda1} = 'valore1' or ({domanda2} * {domanda4}  > 20 and {domanda3} < 5)",
    expressionHelp:
      "Per favore inserire una espressione. Puoi usare parentesi graffe per ottenere l'accesso ai valori delle domande: '{domanda1} + {domanda2}', '({prezzo}*{qta}) * (100 - {sconto})'",
    aceEditorHelp:
      "Premi ctrl+space per ottenere un suggerimento sul completamento dell'espressione",
    aceEditorRowTitle: "Riga corrente",
    aceEditorPanelTitle: "Pannello Corrente",
    showMore: "Per favore, per maggiori dettagli guardare la documentazione",
    assistantTitle: "Domande disponibili:",
    cellsEmptyRowsColumns: "Dovrebbe esserci almeno una colonna o riga",
    propertyIsEmpty: "Per favore, inserire un valore per la propietà",
    value: "Valore",
    text: "Testo",
    columnEdit: "Modifica colonna: {0}",
    itemEdit: "Modifica elemento: {0}",
    url: "URL",
    path: "Percorso",
    valueName: "Nome Valore",
    titleName: "Nome Titolo",
    hasOther: "Altri elementi",
    otherText: "Testo altri elementi",
    name: "Nome",
    title: "Titolo",
    cellType: "Tipo di cella",
    colCount: "Numero di colonne",
    choicesOrder: "Seleziona altre opzioni",
    visible: "Visibile",
    isRequired: "Richiesto",
    startWithNewLine: "Nuova linea",
    rows: "Numero di righe",
    placeHolder: "Testo di riferimento",
    showPreview: "Mostra anteprima",
    storeDataAsText: "Vedi il contenuto JSON come testo",
    maxSize: "Dimensione massima in bytes",
    imageHeight: "Altezza immagine",
    imageWidth: "Larghezza immagine",
    rowCount: "Numero delle righe",
    addRowText: "Testo del pulsante per aggiungere una nuova righa",
    removeRowText: "Testo del pulsante per eliminare una righa",
    minRateDescription: "Descrizione del valore minimo",
    maxRateDescription: "Descrizione del valore massimo",
    inputType: "Tipo di inserimento",
    optionsCaption: "Titolo dell'opzione",
    defaultValue: "Valore default",
    cellsDefaultRow: "Valore default celle",
    surveyEditorTitle: "Edit survey settings",
    qEditorTitle: "Modifica domanda: {0}",
    //survey
    showTitle: "Mostra/nascondi titolo",
    locale: "Lingua Default",
    mode: "Modalità (modifica/sola lettura)",
    clearInvisibleValues: "Pulischi valori non visibili",
    cookieName:
      "Nome cookie (per disabilitare esegui il questionario due volte in locale)",
    sendResultOnPageNext:
      "Invia i risultati del sondaggio alla pagina successiva",
    storeOthersAsComment: "Memorizza il valore 'altri' in campi separati",
    showPageTitles: "Visualizza titoli pagina",
    showPageNumbers: "Visualizza numeri pagina",
    pagePrevText: "Testo bottone pagina precedente",
    pageNextText: "Testo bottone pagina successiva",
    completeText: "Testo bottone Completato",
    startSurveyText: "Testo bottone Inizia",
    showNavigationButtons:
      "Visualizza bottoni di navigazione (navigazione di default)",
    showPrevButton:
      "Visualizza bottone precedente(l'utente può tornare alla pagina precedente)",
    firstPageIsStarted:
      "La prima pagina nel questionario è la pagina iniziale.",
    showCompletedPage:
      "Visualizza la pagina completata alla fine del questionario (completedHtml)",
    goNextPageAutomatic:
      "Rispondendo a tutte le domande, vai alla pagina successiva in automatico.",
    showProgressBar: "Visualizza barra di avanzamento",
    questionTitleLocation: "Posizione titolo domanda",
    requiredText: "Simbolo domanda obbligatoria, esempio (*)",
    questionStartIndex: "La domanda inizia con l'indice (1, 2 oppure 'A', 'a')",
    showQuestionNumbers: "Visualizza i numeri di domanda",
    questionTitleTemplate:
      "Template titolo della domanda, il default è: '{no}. {require} {title}'",
    questionErrorLocation: "Posizione notifica errore sulla domanda",
    focusFirstQuestionAutomatic:
      "Sul cambio pagina, posiziona il cursore sulla prima domanda",
    questionsOrder: "Ordine di elementi sulla pagina",
    maxTimeToFinish: "Tempo massimo per terminare il sondaggio",
    maxTimeToFinishPage: "Tempo massimo per terminare una pagina del sondaggio",
    showTimerPanel: "Visualizza pannello timer",
    showTimerPanelMode: "Visualizza modalità timer pannello",
    renderMode: "Modalità di rendering",
    allowAddPanel: "Consenti l'aggiunta di un pannello",
    allowRemovePanel: "Consenti la rimozione di un pannello",
    panelAddText: "Aggiungi testo pannello",
    panelRemoveText: "Remuovi testo pannello",
    isSinglePage: "Visualizza tutti gli elementi su una pagina",
    tabs: {
      general: "Generale",
      fileOptions: "Opzioni",
      html: "Modifica Html",
      columns: "Colonne",
      rows: "Righe",
      choices: "Scelte",
      visibleIf: "Visibile se",
      rateValues: "Volori della classifica",
      choicesByUrl: "Opzioni dal Web",
      matrixChoices: "Opzioni predefinite",
      multipleTextItems: "Voci di testo",
      validators: "Validazioni",
      navigation: "Navigazione",
      question: "Domanda",
      completedHtml: "Html questionario completato",
      loadingHtml: "Html caricamento questionario",
      timer: "Timer/Quiz",
      triggers: "Triggers",
      templateTitle: "Template titolo"
    },
    editProperty: "Modifca propietà '{0}'",
    items: "[ Elemento: {0} ]",
    enterNewValue: "Si prega di inserire il valore.",
    noquestions: "Non c'è alcun dubbio nel questionario.",
    createtrigger: "Si prega di creare un trigger",
    triggerOn: "Attivazione ",
    triggerMakePagesVisible: "Rendere visibili le pagine:",
    triggerMakeQuestionsVisible: "Rendere visibili le domande:",
    triggerCompleteText: "Completare il questionario, in caso di successo.",
    triggerNotSet: "Non impostato",
    triggerRunIf: "Esegui se",
    triggerSetToName: "Cambia il valore a: ",
    triggerSetValue: "a: ",
    triggerIsVariable:
      "Non posizionare la variabile del risultato del questionario"
  },
  // strings for operators
  op: {
    empty: "è vuoto",
    notempty: "non è vuoto ",
    equal: "è uguale a",
    notequal: "non è uguale a",
    contains: "contiene",
    notcontains: "non contiene",
    greater: "maggiore",
    less: "minore",
    greaterorequal: "maggiore o uguale",
    lessorequal: "minore o uguale"
  },
  // strings for embed window
  ew: {
    angular: "Versione per Angular",
    jquery: "Versione per jQuery",
    knockout: "Versione per Knockout",
    react: "Versione per React",
    vue: "Versione per Vue",
    bootstrap: "Per framework bootstrap",
    standard: "No bootstrap",
    showOnPage: "Visualizza in questa pagina",
    showInWindow: "Visualizza in una finestra",
    loadFromServer: "Carica JSON dal server",
    titleScript: "Scripts e stili",
    titleHtml: "HTML",
    titleJavaScript: "JavaScript"
  },
  //Test Survey
  ts: {
    selectPage: "Seleziona la pagina da testare:"
  },
  validators: {
    answercountvalidator: "numero risposte",
    emailvalidator: "e-mail",
    numericvalidator: "numerico",
    regexvalidator: "regex",
    textvalidator: "testo"
  },
  triggers: {
    completetrigger: "completa questionario",
    setvaluetrigger: "setta valore",
    visibletrigger: "cambia visibilità"
  },
  // strings of properties
  p: {
    name: "nome",
    title: {
      name: "titolo",
      title: "Lascia vuoto se è lo stesso di 'Nome'"
    },
    page_title: { name: "titolo", title: "Titolo della pagina" }
  }
};

editorLocalization.locales["it"] = italianTranslation;
