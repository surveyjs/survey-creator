import { setupLocale } from "survey-creator-core";

var italianTranslation = {
  // survey templates
  survey: {
    edit: "Modifica",
    externalHelpLink: "Guarda e impara come creare sondaggio",
    externalHelpLinkUrl: "https://www.youtube.com/channel/UCH2ru9okIcooNZfpIbyq4qQ?view_as=subscriber",
    dropQuestion: "Aggiungi una domanda qui",
    addLogicItem: "Crea una regola per personalizzare il percorso del sondaggio.",
    copy: "Copia",
    duplicate: "Duplica",
    addToToolbox: "Aggiungi alla toolbox",
    deletePanel: "Elimina Pannello",
    deleteQuestion: "Elimina Domanda",
    convertTo: "Converti in",
    drag: "Trascina l'elemento",
  },
  // Creator tabs
  tabs: {
    preview: "Anteprima del sondaggio",
    theme: "Temi",
    translation: "Traduzione",
    designer: "Progetta il sondaggio",
    json: "Modifica JSON",
    logic: "Logica"
  },
  // Question types
  qt: {
    default: "Default",
    checkbox: "Casella di controllo",
    comment: "Commento",
    imagepicker: "Selezionatore di immagini",
    ranking: "Classifica",
    image: "Immagine",
    dropdown: "Tendina",
    tagbox: "Menù a discesa a selezione multipla",
    file: "File Upload",
    html: "Html",
    matrix: "Matrice (scelta singola)",
    matrixdropdown: "Matrice (scelta multipla)",
    matrixdynamic: "Matrice (dinamica)",
    multipletext: "Testo multiplo",
    panel: "Pannello",
    paneldynamic: "Pannello dinamico",
    radiogroup: "Opzione multipla",
    rating: "Valutazione",
    text: "Testo semplice",
    boolean: "Booleano",
    expression: "Espressione (sola lettura)",
    signaturepad: "Pad per la firma",
    buttongroup: "Gruppo di pulsanti"
  },
  toolboxCategories: {
    general: "Generale",
    choice: "Domande a scelta",
    text: "Domande sull'input di testo",
    containers: "Contenitori",
    matrix: "Domande sulla matrice",
    misc: "Altri"
  },
  // Strings in SurveyJS Creator
  ed: {
    defaultLocale: "Default ({0})",
    survey: "Sondaggio",
    settings: "Impostazioni sondaggio",
    settingsTooltip: "Apri le impostazioni del sondaggio",
    surveySettings: "Impostazioni del sondaggio",
    surveySettingsTooltip: "Impostazioni dell'indagine",
    themeSettings: "Impostazioni del tema",
    themeSettingsTooltip: "Impostazioni del tema",
    creatorSettingTitle: "Impostazioni autore",
    showPanel: "Mostra Pannello",
    hidePanel: "Nascondi Pannello",
    prevSelected: "Seleziona precedente",
    nextSelected: "Seleziona seguente",
    prevFocus: "Focus precedente",
    nextFocus: "Focus successivo",
    surveyTypeName: "Sondaggio",
    pageTypeName: "Pagina",
    panelTypeName: "Pannello",
    questionTypeName: "Domanda",
    columnTypeName: "Colonna",
    addNewPage: "Aggiungi Nuova Pagina",
    moveRight: "Scorri a destra",
    moveLeft: "Scorri a sinistra",
    deletePage: "Elimina Pagina",
    editPage: "Modifica Pagina",
    edit: "Modifica",
    newPageName: "Pagina",
    newQuestionName: "Domanda",
    newPanelName: "Pannello",
    newTextItemName: "Testo",
    defaultV2Theme: "Default",
    modernTheme: "Tema Moderno",
    defaultTheme: "Default (legacy)",
    testSurveyAgain: "Prova il sondaggio di nuovo",
    testSurveyWidth: "Larghezza sondaggio:",
    navigateToMsg: "Bisogna navigare fino a:",
    saveSurvey: "Salva sondaggio",
    saveSurveyTooltip: "Salva sondaggio",
    saveTheme: "Salva tema",
    saveThemeTooltip: "Salva tema",
    jsonHideErrors: "Nascondi gli errori",
    jsonShowErrors: "Mostra gli errori",
    undo: "Annulla",
    redo: "Ripristina",
    undoTooltip: "Annulla l'ultima modifica",
    redoTooltip: "Ripristina l'ultima modifica",
    expandTooltip: "Espandere",
    collapseTooltip: "Collasso",
    expandAllTooltip: "Espandi tutto",
    collapseAllTooltip: "Comprimi tutto",
    zoomInTooltip: "Ingrandisci",
    zoom100Tooltip: "Zoom al 100%",
    zoomOutTooltip: "Zoom indietro",
    lockQuestionsTooltip: "Blocca lo stato di espansione/compressione per le domande",
    showMoreChoices: "Mostra di più",
    showLessChoices: "Mostra meno",
    copy: "Copia",
    cut: "Taglia",
    paste: "Incolla",
    copyTooltip: "Copia la selezione negli appunti",
    cutTooltip: "Taglia la selezione negli appunti",
    pasteTooltip: "Incolla dagli appunti",
    options: "Opzioni",
    generateValidJSON: "Genera JSON Valido",
    generateReadableJSON: "Genera JSON Leggibile",
    toolbox: "Toolbox",
    "property-grid": "Proprietà",
    toolboxFilteredTextPlaceholder: "Digita per cercare...",
    toolboxNoResultsFound: "Nessun risultato trovato",
    propertyGridFilteredTextPlaceholder: "Digita per cercare...",
    propertyGridNoResultsFound: "Nessun risultato trovato",
    propertyGridPlaceholderTitle: "Inizia a configurare il tuo modulo",
    propertyGridPlaceholderDescription: "Fai clic sull'icona di una categoria per esplorare le impostazioni dell'indagine. Dopo l'aggiunta di un elemento di rilievo all'area di progettazione, saranno disponibili impostazioni aggiuntive.",
    correctJSON: "Correggi il tuo JSON",
    surveyResults: "Risultati del sondaggio: ",
    surveyResultsTable: "Come tabella",
    surveyResultsJson: "Come JSON",
    resultsTitle: "Titolo Domanda",
    resultsName: "Nome Domanda",
    resultsValue: "Valore Risposta",
    resultsDisplayValue: "Mostra Valore",
    modified: "Modificato",
    saving: "Salvataggio",
    saved: "Salvato",
    propertyEditorError: "Errore:",
    saveError: "Errore! Il contenuto dell'editor non è salvato.",
    translationPropertyGridTitle: "Impostazione della traduzione",
    themePropertyGridTitle: "Impostazioni del tema",
    addLanguageTooltip: "Aggiungi lingua",
    translationLanguages: "Lingue",
    translationDeleteLanguage: "Sei sicuro di voler eliminare tutte le stringhe per questa lingua?",
    translationAddLanguage: "Seleziona la lingua da tradurre",
    translationShowAllStrings: "Tutte le stringhe",
    translationShowUsedStringsOnly: "Solo le stringhe usate",
    translationShowAllPages: "Tutte le pagine",
    translationNoStrings: "Nessuna stringa da tradurre. Cambia il filtro.",
    translationExportToSCVButton: "Esporta in CSV",
    translationImportFromSCVButton: "Importa da CSV",
    translateUsigAI: "Traduzione automatica di tutto",
    translateUsigAIFrom: "Traduci da: ",
    translationDialogTitle: "Stringhe non tradotte",
    translationMergeLocaleWithDefault: "Unisci {0} con il predefinito",
    translationPlaceHolder: "Traduzione...",
    translationSource: "Fonte: ",
    translationTarget: "Bersaglio: ",
    translationYouTubeNotSupported: "I link di YouTube non sono supportati.",
    themeExportButton: "Esportazione",
    themeImportButton: "Importazione",
    surveyJsonExportButton: "Esportazione",
    surveyJsonImportButton: "Importazione",
    surveyJsonCopyButton: "Copia negli Appunti",
    themeResetButton: "Ripristina le impostazioni del tema predefinite",
    themeResetConfirmation: "Vuoi davvero resettare il tema? Tutte le tue personalizzazioni andranno perse.",
    themeResetConfirmationOk: "Sì, reimposta il tema",
    bold: "Grassetto",
    italic: "Corsivo",
    underline: "Sottolineato",
    addNewQuestion: "Aggiungi domanda",
    selectPage: "Seleziona la pagina...",
    carryForwardChoicesCopied: "Le scelte vengono copiate da",
    choicesLoadedFromWebText: "Le scelte vengono caricate da un servizio Web.",
    choicesLoadedFromWebLinkText: "Vai alle impostazioni",
    choicesLoadedFromWebPreviewTitle: "Anteprima delle opzioni di scelta caricate",
    htmlPlaceHolder: "Il contenuto HTML sarà qui.",
    panelPlaceHolder: "Trascina una domanda dalla toolbox qui.",
    surveyPlaceHolder: "Il sondaggio è vuoto. Trascina un elemento dalla toolbox o clicca sul tasto sottostante.",
    pagePlaceHolder: "La pagina è vuota. Trascinare un elemento dalla casella degli strumenti o fare clic sul pulsante sottostante.",
    imagePlaceHolder: "Trascina e rilascia un'immagine qui o fai clic sul pulsante qui sotto e scegli un'immagine da caricare",
    surveyPlaceHolderMobile: "Fai clic sul pulsante \"Aggiungi domanda\" qui sotto per iniziare a creare il tuo modulo.",
    surveyPlaceholderTitle: "Il modulo è vuoto",
    surveyPlaceholderTitleMobile: "Il modulo è vuoto",
    surveyPlaceholderDescription: "Trascina un elemento dalla casella degli strumenti o fai clic sul pulsante sottostante.",
    surveyPlaceholderDescriptionMobile: "Trascina un elemento dalla casella degli strumenti o fai clic sul pulsante sottostante.",
    previewPlaceholderTitle: "Nessuna anteprima",
    previewPlaceholderTitleMobile: "Nessuna anteprima",
    previewPlaceholderDescription: "Il sondaggio non contiene elementi visibili.",
    previewPlaceholderDescriptionMobile: "Il sondaggio non contiene elementi visibili.",
    translationsPlaceholderTitle: "Nessun vincolo da tradurre",
    translationsPlaceholderTitleMobile: "Nessun vincolo da tradurre",
    translationsPlaceholderDescription: "Aggiungi elementi al modulo o modifica il filtro delle stringhe nella barra degli strumenti.",
    translationsPlaceholderDescriptionMobile: "Aggiungi elementi al modulo o modifica il filtro delle stringhe nella barra degli strumenti.",
    pagePlaceHolderMobile: "Fai clic sul pulsante \"Aggiungi domanda\" in basso per aggiungere un nuovo elemento alla pagina.",
    panelPlaceHolderMobile: "Fai clic sul pulsante \"Aggiungi domanda\" in basso per aggiungere un nuovo elemento al pannello.",
    imagePlaceHolderMobile: "Clicca sul pulsante qui sotto e scegli un'immagine da caricare",
    imageChooseImage: "Scegli immagine",
    addNewTypeQuestion: "Aggiungi {0}", //{0} is localizable question type
    chooseLogoPlaceholder: "[LOGO]",
    choices_Item: "Articolo ",
    selectFile: "Seleziona un file",
    removeFile: "Rimuovere il file",
    lg: {
      addNewItem: "Aggiungi Nuova Regola",
      empty_tab: "Crea una regola per personalizzare il percorso del sondaggio.",
      logicPlaceholderTitle: "Nessuna regola logica",
      logicPlaceholderTitleMobile: "Nessuna regola logica",
      logicPlaceholderDescription: "Crea una regola per personalizzare il flusso del sondaggio.",
      logicPlaceholderDescriptionMobile: "Crea una regola per personalizzare il flusso del sondaggio.",
      page_visibilityName: "Mostra (nascondi) pagina",
      page_enableName: "Abilita (disabilita) pagina",
      page_requireName: "Rendi la pagina obbligatoria",
      panel_visibilityName: "Mostra (nascondi) pannello",
      panel_enableName: "Abilita (disabilita) pannello",
      panel_requireName: "Rendi la pagina obbligatoria",
      question_visibilityName: "Mostra (nascondi) domanda",
      question_enableName: "Abilita (disabilita) domanda",
      question_requireName: "Rendi la domanda obbligatoria",
      question_resetValueName: "Reimpostare il valore della domanda",
      question_setValueName: "Impostare il valore della domanda",
      column_visibilityName: "Mostra (nascondi) colonna",
      column_enableName: "Abilita (disabilita) colonna",
      column_requireName: "Rendi la colonna obbligatoria",
      column_resetValueName: "Reimposta valore colonna",
      column_setValueName: "Impostare il valore della colonna",
      trigger_completeName: "Completa sondaggio",
      trigger_setvalueName: "Imposta la risposta",
      trigger_copyvalueName: "Copia la risposta",
      trigger_skipName: "Passa alla domanda",
      trigger_runExpressionName: "Esegui l'espressione",
      completedHtmlOnConditionName: "Imposta il markup della pagina \"sondaggio Completo\"",
      page_visibilityDescription: "Rendi la pagina visibile quando l'espressione logica restituisce vero. Altrimenti, mantienila invisibile.",
      panel_visibilityDescription: "Rendi il pannello visibile quando l'espressione logica restituisce vero. Altrimenti, mantienilo invisibile.",
      panel_enableDescription: "Rendi il pannello e tutti gli elementi al suo interno abilitati quando l'espressione logica restituisce vero. Altrimenti, mantienili disabilitati.",
      question_visibilityDescription: "Rendi visibile la domanda quando l'espressione logica restituisce vero. Altrimenti, mantienila invisibile.",
      question_enableDescription: "Rendi la domanda abilitata quando l'espressione logica restituisce vero. Altrimenti, mantienila disabilitata.",
      question_requireDescription: "La domanda diventa obbligatoria quando l'espressione logica restituisce vero.",
      trigger_completeDescription: "Quando l'espressione logica restituisce vero, il sondaggio diventa completo e l'utente finale vede la 'Pagina di ringraziamento'.",
      trigger_setvalueDescription: "Quando i valori della domanda, utilizzati nell'espressione logica, vengono modificati e l'espressione logica restituisce vero, il valore viene impostato sulla domanda selezionata.",
      trigger_copyvalueDescription: "Quando i valori della domanda, utilizzata nell'espressione logica, vengono modificati e l'espressione logica restituisce vero, il valore di una domanda selezionata viene copiato in un'altra domanda selezionata.",
      trigger_skipDescription: "Quando l'espressione logica restituisce vero, il sondaggio passa / si focalizza sulla domanda selezionata.",
      trigger_runExpressionDescription: "Quando l'espressione logica restituisce vero, viene eseguita l'espressione personalizzata. È possibile impostare il risultato dell'espressione nella domanda selezionata.",
      completedHtmlOnConditionDescription: "Se l'espressione logica restituisce vero, il testo di default per la 'Pagina di ringraziamento' viene modificato in quello indicato.",
      itemExpressionText: "Quando l'espressione: '{0}' restituisce vero:", //{0} - the expression
      itemEmptyExpressionText: "Nuova regola",
      page_visibilityText: "rendi la pagina {0} visibile", //{0} page name
      panel_visibilityText: "rendi il pannello {0} visibile", //{0} panel name
      panel_enableText: "rendi il pannello {0} abilitato", //{0} panel name
      question_visibilityText: "rendi la domanda {0} visibile", //{0} question name
      question_enableText: "rendi la domanda {0} abilitata", //{0} question name
      question_requireText: "rendi la domanda {0} obbligatoria", //{0} question name
      question_resetValueText: "Valore di ripristino per la domanda: {0}", //{0} question name.
      question_setValueText: "Assegna valore: {1} alla domanda: {0}",
      column_visibilityText: "rendi la colonna {0} della domanda {1} visibile", //{0} column name, {1} question name
      column_enableText: "rendi la colonna {0} della domanda {1} abilitata", //{0} column name, {1} question name
      column_requireText: "rendi la colonna {0} della domanda {1} obbligatoria", //{0} column name, {1} question name
      column_resetValueText: "Reimposta il valore della cella per la colonna: {0}", //{0} column name
      column_setValueText: "Assegna valore cella: {1} alla colonna: {0}", //{0} column name and {1} setValueExpression
      setValueExpressionPlaceholder: " Espressione il cui risultato verrà assegnato alla domanda di destinazione.",
      trigger_completeText: "il sondaggio viene completato",
      trigger_setvalueText: "imposta nella domanda: {0} valore {1}", //{0} question name, {1} setValue
      trigger_setvalueEmptyText: "Valore chiaro della domanda: {0}", //{0} question name
      trigger_copyvalueText: "copia nella domanda: {0} valore dalla domanda {1}", //{0} and {1} question names
      trigger_skipText: "sondaggio passa alla domanda {0}", //{0} question name
      trigger_runExpressionText1: "esegui l'espressione: '{0}'", //{0} the expression
      trigger_runExpressionText2: " e imposta il risultato nella domanda: {0}", //{0} question name
      completedHtmlOnConditionText: "mostra il testo personalizzato per la 'Pagina di ringraziamento'.",
      showAllQuestions: "Tutte le Domande",
      showAllActionTypes: "Tutti i Tipi di Azione",
      conditions: "Condizione(i)",
      actions: "Azione(i)",
      expressionEditorTitle: "Definisci condizione(i)",
      actionsEditorTitle: "Definisci azione(i)",
      deleteAction: "Cancella Azione",
      addNewAction: "Aggiungi Azione",
      selectedActionCaption: "Seleziona azione...",
      expressionInvalid: "L'espressione logica è vuota o invalida. Correggila.",
      noActionError: "Aggiungi almeno un'azione.",
      actionInvalid: "Risolvi i problemi nell'azione(i)",
      uncompletedRule_title: "Le regole logiche sono incomplete",
      uncompletedRule_text: "Alcune regole logiche non sono state completate. Se lasci la scheda ora, le modifiche andranno perse. Vuoi comunque uscire dalla scheda senza completare le modifiche?",
      uncompletedRule_apply: "Sì",
      uncompletedRule_cancel: "No, voglio completare le regole"
    }
  },
  // Property Editors
  pe: {
    panel: {
      name: "Nome del pannello",
      title: "Titolo del panel",
      description: "Descrizione del pannello",
      visibleIf: "Rendi visibile il pannello se",
      requiredIf: "Rendere il pannello richiesto se",
      questionOrder: "Ordine delle domande all'interno del panel",
      page: "Pagina principale",
      startWithNewLine: "Visualizzare il pannello su una nuova riga",
      state: "Stato di compressione del pannello",
      width: "Larghezza del pannello in linea",
      minWidth: "Larghezza minima del pannello",
      maxWidth: "Larghezza massima del pannello",
      showNumber: "Numera questo pannello"
    },
    panellayoutcolumn: {
      effectiveWidth: "Larghezza effettiva, %",
      questionTitleWidth: "Larghezza del titolo della domanda, px"
    },
    paneldynamic: {
      name: "Nome del pannello",
      title: "Titolo del panel",
      description: "Descrizione del pannello",
      visibleIf: "Rendi visibile il pannello se",
      requiredIf: "Rendere il pannello richiesto se",
      page: "Sposta il pannello nella pagina",
      startWithNewLine: "Visualizzare il pannello su una nuova riga",
      state: "Stato di compressione del pannello",
      width: "Larghezza del pannello in linea",
      minWidth: "Larghezza minima del pannello",
      maxWidth: "Larghezza massima del pannello",
      confirmDelete: "Conferma eliminazione del pannello",
      templateDescription: "Modello di descrizione del pannello",
      templateTitle: "Pattern titolo pannello",
      noEntriesText: "Testo del pannello vuoto",
      templateTabTitle: "Modello del titolo della tabulazione",
      tabTitlePlaceholder: "Segnaposto titolo tabulazione",
      templateVisibleIf: "Rendi visibile un singolo pannello se",
      showNumber: "Numerare il pannello",
      titleLocation: "Allineamento del titolo del pannello",
      descriptionLocation: "Allineamento della descrizione del pannello",
      templateQuestionTitleLocation: "Allineamento del titolo della domanda",
      templateQuestionTitleWidth: "Larghezza del titolo della domanda",
      templateErrorLocation: "Allineamento dei messaggi di errore",
      newPanelPosition: "Nuova posizione del pannello",
      showRangeInProgress: "Visualizzare la barra di avanzamento",
      keyName: "Impedisci risposte duplicate nella seguente domanda"
    },
    question: {
      name: "Nome della domanda",
      title: "Titolo della domanda",
      description: "Descrizione della domanda",
      visibleIf: "Rendi visibile la domanda se",
      requiredIf: "Rendi la domanda richiesta se",
      page: "Pagina principale",
      state: "Stato di compressione della casella delle domande",
      showNumber: "Numera questa domanda",
      titleLocation: "Allineamento del titolo della domanda",
      descriptionLocation: "Allineamento della descrizione della domanda",
      errorLocation: "Allineamento dei messaggi di errore",
      indent: "Aumentare il rientro interno",
      width: "Larghezza della domanda in linea",
      minWidth: "Larghezza minima della domanda",
      maxWidth: "Larghezza massima della domanda",
      textUpdateMode: "Aggiorna il valore del campo di input"
    },
    signaturepad: {
      signatureWidth: "Larghezza dell'area della firma",
      signatureHeight: "Altezza dell'area della firma",
      signatureAutoScaleEnabled: "Ridimensionamento automatico dell'area della firma",
      showPlaceholder: "Visualizzare il segnaposto",
      placeholder: "Testo segnaposto",
      placeholderReadOnly: "Testo segnaposto in modalità di sola lettura o anteprima",
      allowClear: "Mostra il pulsante Cancella all'interno dell'area della firma",
      penMinWidth: "Larghezza minima della penna",
      penMaxWidth: "Larghezza massima della penna",
      penColor: "Colore del tratto"
    },
    comment: {
      rows: "Altezza del campo di immissione (in righe)"
    },
    showQuestionNumbers: "Visualizza il numero delle domande",
    questionStartIndex: "La domanda inizia con l'indice (1, 2 oppure 'A', 'a')",
    expression: {
      name: "Nome dell'espressione",
      title: "Titolo dell'espressione",
      description: "Descrizione dell'espressione",
      expression: "Espressione"
    },
    trigger: {
      expression: "Espressione"
    },
    calculatedvalue: {
      expression: "Espressione"
    },
    // survey templates
    survey: {
      title: "Titolo",
      description: "Descrizione dell'indagine",
      readOnly: "Rendere l'indagine di sola lettura"
    },
    page: {
      name: "Nome della pagina",
      title: "Titolo",
      description: "Descrizione della pagina",
      visibleIf: "Rendi visibile la pagina se",
      requiredIf: "Rendi la pagina obbligatoria se",
      timeLimit: "Tempo massimo per terminare la pagina (in secondi)",
      questionOrder: "Ordine delle domande nella pagina"
    },
    matrixdropdowncolumn: {
      name: "Nome della colonna",
      title: "Titolo della colonna",
      isUnique: "Impedisci risposte duplicate",
      width: "Larghezza colonna",
      minWidth: "Larghezza minima della colonna",
      rows: "Altezza del campo di immissione (in righe)",
      visibleIf: "Rendi visibile la colonna se",
      requiredIf: "Rendere obbligatoria la colonna se",
      showInMultipleColumns: "Ogni opzione in una colonna separata"
    },
    multipletextitem: {
      name: "Nome",
      title: "Titolo"
    },
    masksettings: {
      saveMaskedValue: "Salvare il valore mascherato nei risultati dell'indagine"
    },
    patternmask: {
      pattern: "Modello di valore"
    },
    datetimemask: {
      min: "Valore minimo",
      max: "Valore massimo"
    },
    numericmask: {
      allowNegativeValues: "Consenti valori negativi",
      thousandsSeparator: "Separatore delle migliaia",
      decimalSeparator: "Separatore decimale",
      precision: "Precisione del valore",
      min: "Valore minimo",
      max: "Valore massimo"
    },
    currencymask: {
      prefix: "Prefisso di valuta",
      suffix: "Suffisso valuta"
    },
    imageHeight: "Altezza immagine",
    imageWidth: "Larghezza immagine",
    valueName: "Nome Valore",
    defaultDisplayValue: "Valore di visualizzazione predefinito per i testi dinamici",
    rateDescriptionLocation: "Allineamento delle etichette",
    size: "Larghezza del campo di input (in caratteri)",
    cellErrorLocation: "Allineamento dei messaggi di errore delle celle",
    enabled: "Abilitato",
    disabled: "Disabile",
    inherit: "Ereditare",
    apply: "Applica",
    ok: "OK",
    save: "Salva",
    clear: "Cancella",
    saveTooltip: "Salva",
    cancel: "Annulla",
    set: "Imposta",
    reset: "Reimposta",
    change: "Modifica",
    refresh: "Aggiorna",
    close: "Chiudi",
    delete: "Elimina",
    add: "Aggiungi",
    addNew: "Aggiungi Nuovo",
    addItem: "Clicca per aggiungere un'opzione...",
    removeItem: "Clicca per rimuovere un'opzione...",
    dragItem: "Trascina l'opzione",
    addOther: "Altro",
    addSelectAll: "Seleziona Tutti",
    addNone: "Nessuno",
    removeAll: "Elimina tutto",
    edit: "Modifica",
    back: "Torna indietro senza salvare",
    backTooltip: "Torna indietro senza salvare",
    saveAndBack: "Salva e torna indietro",
    saveAndBackTooltip: "Salva e torna indietro",
    doneEditing: "Fatto",
    editChoices: "Modifica Scelte",
    showChoices: "Mostra Scelte",
    move: "Muovi",
    empty: "<empty>",
    emptyValue: "Il valore è vuoto",
    fastEntry: "Inserimento manuale",
    fastEntryNonUniqueError: "Il valore '{0}' non è univoco",
    fastEntryChoicesCountError: "Limita il numero di opzioni da {0} a {1}",
    fastEntryChoicesMinCountError: "Inserisci almeno {0} elementi",
    fastEntryPlaceholder: "È possibile impostare i dati nel seguente formato:\nvalore1|testo\nvalore2",
    formEntry: "Inserimento dati",
    testService: "Prova il servizio",
    itemSelectorEmpty: "Seleziona elemento",
    conditionActionEmpty: "Seleziona azione",
    conditionSelectQuestion: "Seleziona domanda...",
    conditionSelectPage: "Seleziona pagina...",
    conditionSelectPanel: "Seleziona pannello...",
    conditionValueQuestionTitle: "Inserisci/seleziona valore",
    aceEditorHelp: "Premi ctrl+spazio per ottenere un suggerimento sul completamento dell'espressione",
    aceEditorRowTitle: "Riga corrente",
    aceEditorPanelTitle: "Pannello Corrente",
    showMore: "Per maggiori dettagli, guarda la documentazione",
    assistantTitle: "Domande disponibili:",
    cellsEmptyRowsColumns: "Dovrebbe esserci almeno una colonna o riga",
    showPreviewBeforeComplete: "Vedi l'anteprima delle risposte prima di inviare il sondaggio",
    overridingPropertyPrefix: "Impostato da ",
    resetToDefaultCaption: "Resettare",
    propertyIsEmpty: "Per favore, inserisci un valore",
    propertyIsNoUnique: "Inserisci un valore univoco",
    propertyNameIsNotUnique: "Inserisci un nome univoco",
    propertyNameIsIncorrect: "Non utilizzare parole riservate: \"articolo\", \"scelta\", \"pannello\", \"riga\".",
    listIsEmpty: "Aggiungi una nuova opzione",
    "listIsEmpty@choices": "Non sono state ancora aggiunte scelte",
    "listIsEmpty@columns": "Non hai ancora colonne",
    "listIsEmpty@gridLayoutColumns": "Non hai ancora colonne di layout",
    "listIsEmpty@rows": "Non ci sono ancora righe",
    "listIsEmpty@validators": "Non si dispone ancora di regole di convalida",
    "listIsEmpty@calculatedValues": "Non disponi ancora di variabili personalizzate",
    "listIsEmpty@triggers": "Non hai ancora alcun trigger",
    "listIsEmpty@navigateToUrlOnCondition": "Non hai ancora nessun link",
    "listIsEmpty@pages": "Non hai ancora nessuna pagina",
    "addNew@choices": "Aggiungi una scelta",
    "addNew@columns": "Aggiungi nuova colonna",
    "addNew@rows": "Aggiungi nuova riga",
    "addNew@validators": "Aggiunta di una nuova regola",
    "addNew@calculatedValues": "Aggiunta di una nuova variabile",
    "addNew@triggers": "Aggiungere un nuovo trigger",
    "addNew@navigateToUrlOnCondition": "Aggiungi nuovo URL",
    "addNew@pages": "Aggiungi nuova pagina",
    expressionIsEmpty: "Espressione vuota",
    value: "Valore",
    text: "Testo",
    rowid: "ID Riga",
    imageLink: "URL immagine o video",
    columnEdit: "Modifica colonna: {0}",
    itemEdit: "Modifica elemento: {0}",
    url: "URL",
    path: "Percorso",
    choicesbyurl: {
      url: "URL del servizio Web",
      valueName: "Ottenere valori dal seguente campo JSON"
    },
    titleName: "Nome Titolo",
    imageLinkName: "Ottieni gli URL delle immagini dal seguente campo JSON:",
    allowEmptyResponse: "Consenti risposta vuota",
    titlePlaceholder: "Titolo",
    surveyTitlePlaceholder: "Titolo del sondaggio",
    pageTitlePlaceholder: "Pagina {num}",
    startPageTitlePlaceholder: "Pagina iniziale",
    descriptionPlaceholder: "Descrizione",
    surveyDescriptionPlaceholder: "Descrizione",
    pageDescriptionPlaceholder: "Descrizione",
    textWrapEnabled: "Scelte di avvolgimento",
    showOtherItem: "Consenti l'opzione Altro",
    otherText: "Testo dell'opzione Altro",
    showNoneItem: "Consenti l'opzione Nessuno",
    showRefuseItem: "Consenti l'opzione Rifiuta di rispondere",
    showDontKnowItem: "Consenti l'opzione Non so",
    noneText: "Testo dell'opzione Nessuno",
    showSelectAllItem: "Consenti l'opzione Seleziona tutti",
    selectAllText: "Testo dell'opzione Seleziona tutti",
    choicesMin: "Valore minimo per le opzioni generate automaticamente",
    choicesMax: "Valore massimo per le opzioni generate automaticamente",
    choicesStep: "Distanza valori opzioni generate automaticamente",
    name: "Nome",
    title: "Titolo",
    cellType: "Tipo di cella",
    colCount: "Numero di colonne",
    choicesOrder: "Ordinamento delle scelte",
    allowCustomChoices: "Consenti scelte personalizzate",
    visible: "Visibile",
    isRequired: "Obbligatoria",
    markRequired: "Contrassegna come richiesto",
    removeRequiredMark: "Rimuovere il segno richiesto",
    eachRowRequired: "Richiedi risposta per tutte le righe",
    eachRowUnique: "Impedisci risposte duplicate nelle righe",
    requiredErrorText: "\"Obbligatoria\" messaggio di errore",
    startWithNewLine: "Visualizza la domanda su una nuova riga",
    rows: "Righe",
    cols: "Colonne",
    placeholder: "Testo segnaposto",
    showPreview: "Mostra anteprima",
    storeDataAsText: "Vedi il contenuto JSON come testo",
    maxSize: "Dimensione massima (in bytes)",
    rowCount: "Numero delle righe",
    columnLayout: "Layout delle colonne",
    addRowButtonLocation: "Posizione del tasto Aggiungi riga",
    transposeData: "Trasponi righe in colonne",
    addRowText: "Testo del tasto per aggiungere una nuova riga",
    removeRowText: "Testo del tasto per eliminare una riga",
    rateMin: "Valore minimo",
    rateMax: "Valore massimo",
    rateStep: "Distanza tra i valori",
    minRateDescription: "Descrizione del valore minimo",
    maxRateDescription: "Descrizione del valore massimo",
    inputType: "Tipo di inserimento",
    optionsCaption: "Testo segnaposto dell'opzione",
    defaultValue: "Valore default",
    cellsDefaultRow: "Testi default",
    surveyEditorTitle: "Modifica le impostazioni del sondaggio",
    qEditorTitle: "Modifica domanda: {0}",
    maxLength: "Lunghezza massima (in caratteri)",
    buildExpression: "Build",
    editExpression: "Modifica",
    and: "e",
    or: "o",
    remove: "Elimina",
    addCondition: "Aggiungi Condizione",
    emptyLogicPopupMessage: "Selezionare una domanda per iniziare a configurare le condizioni.",
    if: "se",
    then: "allora",
    setToName: "Domanda mirata",
    fromName: "Domanda da cui copiare la risposta",
    gotoName: "Domanda a cui passare",
    ruleIsNotSet: "La regola è sbagliata",
    includeIntoResult: "Includi nei risultati del sondaggio",
    showTitle: "Mostra/nascondi titolo",
    expandCollapseTitle: "Espandi/comprimi il titolo",
    locale: "Lingua Default",
    simulator: "Scegli il dispositivo",
    landscapeOrientation: "Orizzontale",
    portraitOrientation: "Verticale",
    clearInvisibleValues: "Cancella i valori invisibili",
    cookieName: "Nome cookie (per disabilitare esegui il sondaggio due volte in locale)",
    partialSendEnabled: "Invia i risultati del sondaggio alla pagina successiva",
    storeOthersAsComment: "Memorizza il valore Altro in campi separati",
    showPageTitles: "Visualizza titolo e descrizione pagina",
    showPageNumbers: "Visualizza numero pagina",
    pagePrevText: "Testo del tasto Pagina Precedente",
    pageNextText: "Testo del tasto Pagina Successiva",
    completeText: "Testo del tasto Completato",
    previewText: "Testo del tasto Anteprima risposte",
    editText: "Testo del tasto Modifica risposta",
    startSurveyText: "Testo del tasto Inizia sondaggio",
    showNavigationButtons: "Visualizza tasti di navigazione (navigazione di default)",
    navigationButtonsLocation: "Allineamento dei pulsanti di navigazione",
    showPrevButton: "Visualizza tasto Pagina Precedente (l'utente può tornare alla pagina precedente)",
    firstPageIsStartPage: "La prima pagina nel sondaggio è la pagina iniziale",
    showCompletePage: "Mostra la pagina sondaggio Completo",
    autoAdvanceEnabled: "Rispondendo a tutte le domande, vai alla pagina successiva in automatico",
    autoAdvanceAllowComplete: "Completa automaticamente il sondaggio",
    showProgressBar: "Visualizza barra di avanzamento",
    progressBarLocation: "Allineamento della barra di avanzamento",
    questionTitleLocation: "Posizione del titolo della domanda",
    questionTitleWidth: "Larghezza del titolo della domanda",
    requiredMark: "Simbolo domanda obbligatoria, ad esempio (*)",
    questionTitleTemplate: "Template titolo della domanda, il default è: '{no}. {require} {title}'",
    questionErrorLocation: "Posizione del messaggio di errore",
    autoFocusFirstQuestion: "Al cambio pagina, posiziona il cursore sulla prima domanda",
    questionOrder: "Ordine delle domande sulla pagina",
    timeLimit: "Tempo massimo per terminare il sondaggio",
    timeLimitPerPage: "Tempo massimo per terminare una pagina del sondaggio",
    showTimer: "Usa un timer",
    timerLocation: "Visualizzazione pannello timer",
    timerInfoMode: "Modalità visualizzazione pannello timer",
    renderMode: "Modalità di visualizzazione",
    allowAddPanel: "Consenti l'aggiunta di un pannello",
    allowRemovePanel: "Consenti la rimozione di un pannello",
    addPanelText: "Testo del tasto Aggiungi pannello",
    removePanelText: "Testo del tasto Rimuovi pannello",
    isSinglePage: "Visualizza tutti gli elementi su una pagina",
    html: "Markup HTML",
    setValue: "Rispondi",
    dataFormat: "Formato immagine",
    allowAddRows: "Permetti di aggiungere righe",
    allowRemoveRows: "Permetti di eliminare righe",
    allowRowReorder: "Consenti il trascinamento delle righe",
    responsiveImageSizeHelp: "Non si applica se si specifica l'esatta larghezza o altezza dell'immagine.",
    minImageWidth: "Larghezza minima dell'immagine",
    maxImageWidth: "Larghezza massima dell'immagine",
    minImageHeight: "Altezza minima dell'immagine",
    maxImageHeight: "Altezza massima dell'immagine",
    minValue: "Valore minimo",
    maxValue: "Valore massimo",
    caseInsensitive: "Senza distinzione tra maiuscole e minuscole",
    minLength: "Lunghezza minima (in caratteri)",
    allowDigits: "Ammetti le cifre",
    minCount: "Numero minimo",
    maxCount: "Numero massimo",
    regex: "Espressione regolare",
    surveyvalidator: {
      text: "Messaggio di errore",
      expression: "Espressione di convalida"
    },
    totalText: "Testo della riga Totale",
    totalType: "Tipo Totale",
    totalExpression: "Espressione Totale",
    totalDisplayStyle: "Stile di visualizzazione del valore Totale",
    totalCurrency: "Valuta",
    totalFormat: "Stringa formattata",
    logo: "Logo (URL o stringa codificata in base64)",
    questionsOnPageMode: "Struttura sondaggio",
    maxTextLength: "Lunghezza massima della risposta (in caratteri)",
    maxCommentLength: "Lunghezza massima del commento (in caratteri)",
    commentAreaRows: "Altezza dell'area di commento (in righe)",
    autoGrowComment: "Espansione automatica dell'area dei commenti, se necessaria",
    allowResizeComment: "Consenti agli utenti di ridimensionare le aree di testo",
    textUpdateMode: "Aggiornare il valore del testo della domanda",
    maskType: "Tipo di maschera di input",
    autoFocusFirstError: "Imposta il focus sulla prima risposta invalida",
    checkErrorsMode: "Esegui la convalida",
    validateVisitedEmptyFields: "Convalida i campi vuoti in caso di perdita dello stato attivo",
    navigateToUrl: "Naviga fino all'URL",
    navigateToUrlOnCondition: "URL Dinamico",
    completedBeforeHtml: "Markup da mostrare se l'utente ha già compilato questo sondaggio",
    completedHtml: "Markup della pagina sondaggio Completo",
    completedHtmlOnCondition: "Markup dinamico della pagina sondaggio Completo",
    loadingHtml: "Markup da mostrare durante il caricamento del modello del sondaggio",
    commentText: "Titolo dell'Area commento",
    autocomplete: "Tipo di completamento automatico",
    labelTrue: "Etichetta \"Vero\"",
    labelFalse: "Etichetta \"Falso\"",
    allowClear: "Mostra il tasto Cancella",
    searchMode: "Modalità di ricerca",
    displayStyle: "Stile di visualizzazione del valore",
    format: "Stringa formattata",
    maximumFractionDigits: "Numero massimo di cifre frazionarie",
    minimumFractionDigits: "Numero minimo di cifre frazionarie",
    useGrouping: "Mostra i separatori di raggruppamento",
    allowMultiple: "Consenti più file",
    allowImagesPreview: "Anteprima immagini",
    acceptedTypes: "Tipi di file accettati",
    waitForUpload: "Attendi il completamento del caricamento",
    needConfirmRemoveFile: "Conferma l'eliminazione del file",
    detailPanelMode: "Posizione del pannello di dettaglio",
    minRowCount: "Numero minimo di righe",
    maxRowCount: "Numero massimo di righe",
    confirmDelete: "Conferma eliminazione della riga",
    confirmDeleteText: "Testo del messaggio di conferma",
    panelCount: "Numero iniziale di pannelli",
    minPanelCount: "Numero minimo di pannelli",
    maxPanelCount: "Numero massimo di pannelli",
    panelsState: "Stato di espansione del pannello interno",
    prevPanelText: "Testo del tasto Pannello Precedente",
    nextPanelText: "Testo del tasto Pannello Successivo",
    removePanelButtonLocation: "Posizione del tasto Rimozione Pannello",
    hideIfRowsEmpty: "Nascondi la domanda se non ci sono righe",
    hideColumnsIfEmpty: "Nascondi le colonne se non ci sono righe",
    rateValues: "Valori personalizzati",
    rateCount: "Conteggio delle tariffe",
    autoGenerate: "Come specificare i valori dei tassi?",
    hideIfChoicesEmpty: "Nascondi la domanda se non ci sono scelte",
    minWidth: "Larghezza minima (in valori accettati da CSS)",
    maxWidth: "Larghezza massima (in valori accettati da CSS)",
    width: "Larghezza (in valori accettati da CSS)",
    showHeader: "Mostra intestazioni colonna",
    horizontalScroll: "Mostra la barra di scorrimento orizzontale",
    columnMinWidth: "Larghezza minima della colonna (in valori accettati da CSS)",
    rowTitleWidth: "Larghezza dell'intestazione della riga (in valori accettati dai CSS)",
    valueTrue: "Valore \"Vero\"",
    valueFalse: "Valore \"Falso\"",
    minErrorText: "\"Valore inferiore al minimo\" messaggio di errore",
    maxErrorText: "\"Valore superiore al massimo\" messaggio di errore",
    otherErrorText: "\"Commento vuoto\" messaggio di errore",
    keyDuplicationError: "\"Valore chiave non univoco\" messaggio di errore",
    minSelectedChoices: "Numero minimo di scelte selezionate",
    maxSelectedChoices: "Max. scelte selezionabili",
    logoWidth: "Larghezza logo (in valori accettati da CSS)",
    logoHeight: "Altezza logo (in valori accettati da CSS)",
    readOnly: "Sola lettura",
    enableIf: "Editabile se",
    noRowsText: "\"Nessuna riga\" messaggio",
    separateSpecialChoices: "Scelte speciali separate (Nessuno, Altro, Seleziona tutti)",
    choicesFromQuestion: "Copia le scelte dalla domanda seguente:",
    choicesFromQuestionMode: "Quale scelta copiare?",
    choiceValuesFromQuestion: "Utilizza i valori della colonna matrice seguente o della domanda del pannello come ID di scelta",
    choiceTextsFromQuestion: "Usa i valori della seguente colonna matrice o domanda del pannello come testi di scelta",
    progressBarShowPageTitles: "Visualizzare i titoli delle pagine nella barra di avanzamento",
    progressBarShowPageNumbers: "Visualizzare i numeri di pagina nella barra di avanzamento",
    showCommentArea: "Mostra l'area commento",
    commentPlaceholder: "Testo segnaposto area commento",
    displayRateDescriptionsAsExtremeItems: "Mostra le descrizioni come valori estremi",
    rowOrder: "Ordine righe",
    columnsLayout: "Layout colonna",
    columnColCount: "Numero colonne annidate",
    correctAnswer: "Risposta corretta",
    defaultPanelValue: "Valori di default",
    cells: "Testi Celle",
    fileInputPlaceholder: "Seleziona un file o incolla un collegamento a un file...",
    keyName: "Colonna chiave",
    itemvalue: {
      visibleIf: "Rendi visibile l'opzione se",
      enableIf: "Rendere l'opzione selezionabile se"
    },
    "itemvalue@rows": {
      visibleIf: "Rendi visibile la riga se",
      enableIf: "Rendi la riga modificabile se"
    },
    imageitemvalue: {
      text: "Testo alternativo"
    },
    logoPosition: "Posizione Logo",
    addLogo: "Aggiungi logo...",
    changeLogo: "Modifica logo...",
    logoPositions: {
      none: "Rimuovi logo",
      left: "Sinistra",
      right: "Destra",
      top: "In alto",
      bottom: "In basso"
    },
    previewMode: "Modalità anteprima",
    gridLayoutEnabled: "Abilita il layout della griglia",
    gridLayoutColumns: "Colonne del layout a griglia",
    maskSettings: "Impostazioni maschera",
    detailErrorLocation: "Allineamento del messaggio di errore di espansione delle righe",
    // Creator tabs
    tabs: {
      panel: {
        layout: "Layout del pannello"
      },
      general: "Generale",
      fileOptions: "Opzioni",
      html: "Modifica Html",
      columns: "Colonne",
      rows: "Righe",
      choices: "Scelte",
      items: "Opzioni",
      visibleIf: "Visibile se",
      enableIf: "Editabile se",
      requiredIf: "Obbligatoria se",
      rateValues: "Valori della classifica",
      choicesByUrl: "Opzioni da URL",
      matrixChoices: "Opzioni predefinite",
      multipleTextItems: "Voci di testo",
      numbering: "Numerazione",
      validators: "Validatori",
      navigation: "Navigazione",
      question: "Domanda",
      pages: "Pagine",
      timer: "Timer/Quiz",
      calculatedValues: "Valori Calcolati",
      triggers: "Trigger",
      templateTitle: "Template titolo",
      totals: "Totale",
      logic: "Logica",
      mask: "Impostazioni della maschera di input",
      layout: {
        panel: "Impaginazione",
        question: "Impaginazione",
        base: "Impaginazione"
      },
      data: "Dati",
      validation: "Validazione",
      cells: "Testi Cella",
      showOnCompleted: "Sondaggio Completo",
      logo: "Logo nel Titolo sondaggio",
      slider: "Cursore",
      expression: "Espressione",
      questionSettings: "Impostazioni delle domande",
      header: "Intestazione",
      background: "Sfondo",
      appearance: "Apparenza",
      accentColors: "Colori d'accento",
      surfaceBackground: "Sfondo della superficie",
      scaling: "Scalata",
      others: "Altri"
    },
    editProperty: "Modifica propietà '{0}'",
    items: "[ Elemento: {0} ]",
    choicesVisibleIf: "Scelte visibili se",
    choicesEnableIf: "Scelte selezionabili se",
    columnsEnableIf: "Colonne visibili se",
    rowsEnableIf: "Righe visibili se",
    innerIndent: "Aggiungi rientri interni",
    copyDefaultValueFromLastEntry: "Usa le risposte dell'ultima voce come impostazione predefinita",
    enterNewValue: "Inserisci il valore.",
    noquestions: "Non c'è alcuna domanda nel sondaggio.",
    createtrigger: "Il trigger non è impostato",
    titleKeyboardAdornerTip: "Premi il tasto Invio per modificare",
    keyboardAdornerTip: "Premi il tasto Invio per modificare l'elemento, premi il tasto Cancella per eliminare l'elemento, premi alt più freccia su o freccia giù per spostare l'elemento.",
    triggerOn: "Attivazione",
    triggerMakePagesVisible: "Rendi visibili le pagine:",
    triggerMakeQuestionsVisible: "Rendi visibili le domande:",
    triggerCompleteText: "Completa il sondaggio.",
    triggerNotSet: "Non impostato",
    triggerRunIf: "Esegui se",
    triggerSetToName: "Cambia il valore di: ",
    triggerFromName: "Copia valore da: ",
    triggerRunExpression: "Esegui questa Espressione:",
    triggerSetValue: "a: ",
    triggerGotoName: "Vai alla domanda:",
    triggerIsVariable: "Non inserire la variabile del risultato del sondaggio",
    triggerRunExpressionEmpty: "Inserisci un'espressione valida",
    emptyExpressionPlaceHolder: "Digita qui l'espressione...",
    noFile: "Nessun file scelto",
    clearIfInvisible: "Cancella se Invisibile",
    valuePropertyName: "Nome della proprietà Value",
    searchEnabled: "Abilita ricerca",
    hideSelectedItems: "Nascondere gli elementi selezionati",
    closeOnSelect: "Chiudere il menu a discesa dopo la selezione",
    verticalAlign: "Allineamento verticale",
    alternateRows: "Righe alternate",
    columnsVisibleIf: "Colonne visibili se",
    rowsVisibleIf: "Righe visibili se",
    otherPlaceholder: "Testo segnaposto area commenti",
    filePlaceholder: "Testo segnaposto del file",
    photoPlaceholder: "Testo segnaposto foto",
    fileOrPhotoPlaceholder: "Testo segnaposto per file o foto",
    rateType: "Tipo di tariffa",
    url_placeholder: "Es.: https://api.example.com/books",
    path_placeholder: "Es.: categories.fiction",
    questionStartIndex_placeholder: "Es.: a)",
    width_placeholder: "Es.: 6 pollici",
    minWidth_placeholder: "Es.: 600px",
    maxWidth_placeholder: "Es.: 50%",
    imageHeight_placeholder: "Automatico",
    imageWidth_placeholder: "Automatico",
    itemTitleWidth_placeholder: "Es.: 100px",
    theme: {
      themeName: "Tema",
      isPanelless: "Aspetto della domanda",
      editorPanel: "Sfondo e raggio d'angolo",
      questionPanel: "Sfondo e raggio d'angolo",
      primaryColor: "Colore d'accento",
      panelBackgroundTransparency: "Opacità dello sfondo del pannello",
      questionBackgroundTransparency: "Opacità dello sfondo della domanda",
      fontSize: "Dimensione del carattere",
      scale: "Scala",
      cornerRadius: "Raggio d'angolo",
      advancedMode: "Modalità avanzata",
      pageTitle: "Carattere del titolo",
      pageDescription: "Carattere di descrizione",
      questionTitle: "Carattere del titolo",
      questionDescription: "Carattere di descrizione",
      editorFont: "Font",
      backgroundOpacity: "Opacità",
      "--sjs-font-family": "Famiglia di caratteri",
      "--sjs-general-backcolor-dim": "Colore di sfondo",
      "--sjs-primary-backcolor": "Sfondo d'accento",
      "--sjs-primary-forecolor": "Primo piano in primo piano",
      "--sjs-special-red": "Messaggi di errore",
      "--sjs-shadow-small": "Effetti ombra",
      "--sjs-shadow-inner": "Effetti ombra",
      "--sjs-border-default": "Colori"
    },
    "header@header": {
      headerView: "Vista",
      logoPosition: "Posizione del logo",
      surveyTitle: "Carattere del titolo dell'indagine",
      surveyDescription: "Carattere della descrizione dell'indagine",
      headerTitle: "Carattere del titolo dell'indagine",
      headerDescription: "Carattere della descrizione dell'indagine",
      inheritWidthFrom: "Larghezza dell'area del contenuto",
      textAreaWidth: "Larghezza del testo",
      backgroundColorSwitch: "Colore di sfondo",
      backgroundImage: "Immagine di sfondo",
      backgroundImageOpacity: "Opacità",
      overlapEnabled: "Sovrapposizione",
      logoPositionX: "Posizione del logo",
      titlePositionX: "Posizione del titolo",
      descriptionPositionX: "Descrizione posizione"
    }
  },
  // Property values
  pv: {
    "true": "vero",
    "false": "falso",
    file: "File locali",
    camera: "Macchina fotografica",
    "file-camera": "File locali o fotocamera",
    inherit: "Default",
    show: "Visibile",
    hide: "Nascosto",
    default: "Default",
    initial: "Iniziale",
    random: "Random",
    collapsed: "Ridotto",
    expanded: "Esteso",
    none: "Nessuno",
    asc: "Ascendente",
    desc: "Discendente",
    indeterminate: "Indeterminato",
    selected: "Selezionato",
    unselected: "Deselezionata",
    decimal: "decimale",
    currency: "valuta",
    percent: "percento",
    firstExpanded: "Il primo pannello è esteso",
    off: "Nascondi il numero delle domande",
    list: "Lista",
    carousel: "Carosello",
    tab: "Schede",
    progressTop: "Navigatore del pannello + Barra di avanzamento in alto",
    progressBottom: "Navigatore del pannello + Barra di avanzamento in basso",
    progressTopBottom: "Navigatore del pannello + Barra di avanzamento in alto e in basso",
    horizontal: "Orizzontale",
    vertical: "Verticale",
    top: "In alto",
    bottom: "In basso",
    topBottom: "In alto e in basso",
    both: "Entrambe",
    left: "Sinistra",
    right: "Destra",
    center: "Centro",
    leftRight: "Destra e sinistra",
    middle: "Mezzo",
    color: "Colore",
    date: "dattero",
    datetime: "datetime",
    "datetime-local": "datetime-local",
    email: "E-mail",
    month: "mese",
    number: "numero",
    password: "parola d’ordine",
    range: "gamma",
    tel: "Tel",
    text: "Testo",
    time: "Ore",
    url: "URL",
    week: "settimana",
    hidden: "Nascosto",
    edit: "Editabile",
    display: "Sola lettura",
    contain: "Contenere",
    cover: "Coprire",
    fill: "Riempire",
    next: "Prossimo",
    last: "Ultimo",
    onComplete: "Al termine del sondaggio",
    onHidden: "Quando la domanda diventa nascosta",
    onHiddenContainer: "Quando la domanda, o il suo pannello/pagina, diventa nascosta",
    clearInvisibleValues: {
      none: "Mai"
    },
    clearIfInvisible: {
      none: "Mai"
    },
    inputType: {
      color: "Colore",
      date: "Dattero",
      "datetime-local": "Data e ora",
      email: "E-mail",
      month: "Mese",
      number: "Numero",
      password: "Parola d’ordine",
      range: "Gamma",
      tel: "Numero di telefono",
      text: "Testo",
      time: "Ore",
      url: "URL",
      week: "Settimana"
    },
    autocomplete: {
      name: "Nome completo",
      "honorific-prefix": "Prefisso",
      "given-name": "Nome di battesimo",
      "additional-name": "Secondo nome",
      "family-name": "Cognome",
      "honorific-suffix": "Suffisso",
      nickname: "Soprannome",
      "organization-title": "Titolo di lavoro",
      username: "Nome utente",
      "new-password": "Nuova password",
      "current-password": "Password corrente",
      organization: "Nome dell'organizzazione",
      "street-address": "Indirizzo completo",
      "address-line1": "Indirizzo Riga 1",
      "address-line2": "Indirizzo Riga 2",
      "address-line3": "Indirizzo Riga 3",
      "address-level4": "Indirizzo di livello 4",
      "address-level3": "Indirizzo di livello 3",
      "address-level2": "Indirizzo di livello 2",
      "address-level1": "Indirizzo di livello 1",
      country: "Prefisso internazionale",
      "country-name": "Nome del paese",
      "postal-code": "Codice postale",
      "cc-name": "Nome del titolare della carta",
      "cc-given-name": "Nome del titolare della carta",
      "cc-additional-name": "Secondo nome del titolare della carta",
      "cc-family-name": "Cognome del titolare della carta",
      "cc-number": "Numero di carta di credito",
      "cc-exp": "Data di scadenza",
      "cc-exp-month": "Mese di scadenza",
      "cc-exp-year": "Anno di scadenza",
      "cc-csc": "Codice di sicurezza della carta",
      "cc-type": "Tipo di carta di credito",
      "transaction-currency": "Valuta della transazione",
      "transaction-amount": "Importo della transazione",
      language: "Lingua preferita",
      bday: "Compleanno",
      "bday-day": "Giorno del compleanno",
      "bday-month": "Mese del compleanno",
      "bday-year": "Anno di compleanno",
      sex: "Genere",
      url: "URL del sito web",
      photo: "Foto del profilo",
      tel: "Numero telefonico",
      "tel-country-code": "Prefisso internazionale per il telefono",
      "tel-national": "Numero telefonico nazionale",
      "tel-area-code": "Prefisso",
      "tel-local": "Numero di telefono locale",
      "tel-local-prefix": "Prefisso telefonico locale",
      "tel-local-suffix": "Suffisso del telefono locale",
      "tel-extension": "Interno telefonico",
      email: "Indirizzo email",
      impp: "Protocollo di messaggistica istantanea"
    },
    maskType: {
      none: "Nessuno",
      pattern: "Modello",
      numeric: "Numerico",
      datetime: "Data e ora",
      currency: "Valuta"
    },
    inputTextAlignment: {
      auto: "Automatico",
      left: "A sinistra",
      right: "A destra"
    },
    all: "Tutto",
    page: "Pagina",
    survey: "Sondaggio",
    onNextPage: "Quando si passa alla pagina successiva",
    onValueChanged: "Dopo la modifica di una risposta",
    onValueChanging: "Prima della modifica di una risposta",
    questionsOnPageMode: {
      standard: "Struttura originale",
      singlePage: "Mostra tutte le domande in un'unica pagina",
      questionPerPage: "Mostra una singola domanda per pagina"
    },
    noPreview: "No anteprima",
    showAllQuestions: "Mostra tutte le domande",
    showAnsweredQuestions: "Mostra solo le domande con risposta",
    allQuestions: "Mostra tutte le domande",
    answeredQuestions: "Mostra solo le domande con risposta",
    pages: "Pagine completate",
    questions: "Domande con risposte",
    requiredQuestions: "Domande obbligatorie con risposta",
    correctQuestions: "Risposte valide",
    buttons: "Pagine completate (tasto UI)",
    underInput: "Sotto l'input",
    underTitle: "Sotto il titolo",
    onBlur: "Quando perde focus",
    onTyping: "Mentre si digita",
    underRow: "Sotto la riga",
    underRowSingle: "Sotto la riga, solo un pannello è visibile",
    auto: "Automatico",
    showNavigationButtons: {
      none: "Nascosto"
    },
    timerInfoMode: {
      combined: "Entrambe"
    },
    addRowButtonLocation: {
      default: "Dipende dal layout della matrice"
    },
    panelsState: {
      default: "Gli utenti non possono espandere o comprimere i pannelli",
      collapsed: "Tutti i pannelli sono compressi",
      expanded: "Tutti i pannelli sono estesi",
      firstExpanded: "Prima espansione"
    },
    widthMode: {
      static: "Statico",
      responsive: "Reattivo"
    },
    contentMode: {
      image: "Immagine",
      video: "Video",
      youtube: "Collegamenti esterni"
    },
    displayMode: {
      buttons: "Pulsanti",
      dropdown: "Menù a discesa"
    },
    rateColorMode: {
      default: "Default",
      scale: "Scala"
    },
    scaleColorMode: {
      monochrome: "Monocromatico",
      colored: "Colorato"
    },
    autoGenerate: {
      "true": "Generare",
      "false": "Inserisci manualmente"
    },
    rateType: {
      labels: "Etichette",
      stars: "Stelle",
      smileys: "Faccine"
    },
    state: {
      default: "Bloccato"
    },
    showQuestionNumbers: {
      default: "Numerazione automatica",
      on: "Continua dalla pagina precedente",
      onPage: "Inizia da capo in ogni pagina",
      onpanel: "Ripristina su ogni pannello",
      onPanel: "Ripristina su ogni pannello",
      recursive: "Numerazione ricorsiva",
      onSurvey: "Continua con l'indagine",
      off: "Nessuna numerazione"
    },
    descriptionLocation: {
      underTitle: "Sotto il titolo della domanda",
      underInput: "Sotto il campo di immissione"
    },
    selectToRankAreasLayout: {
      horizontal: "Accanto alle scelte",
      vertical: "Scelte di cui sopra"
    },
    displayStyle: {
      decimal: "Decimale",
      currency: "Valuta",
      percent: "Percentuale",
      date: "Dattero"
    },
    totalDisplayStyle: {
      decimal: "Decimale",
      currency: "Valuta",
      percent: "Percentuale",
      date: "Dattero"
    },
    rowOrder: {
      initial: "Originale"
    },
    questionOrder: {
      initial: "Originale"
    },
    progressBarLocation: {
      top: "In alto",
      bottom: "Fondoschiena",
      topbottom: "Sopra e sotto",
      aboveheader: "Sopra l'intestazione",
      belowheader: "Sotto l'intestazione",
      off: "Nascosto"
    },
    sum: "Somma",
    count: "Contare",
    min: "Min",
    max: "Max",
    avg: "Medio",
    searchMode: {
      contains: "Contiene",
      startsWith: "Inizia con"
    },
    backgroundImageFit: {
      auto: "Automatico",
      cover: "Coprire",
      contain: "Contenere",
      fill: "Stendere",
      tile: "Tegola"
    },
    backgroundImageAttachment: {
      fixed: "Fissato",
      scroll: "Scorrere"
    },
    headerView: {
      basic: "Basico",
      advanced: "Avanzato"
    },
    inheritWidthFrom: {
      survey: "Uguale al sondaggio",
      container: "Adatto al contenitore"
    },
    backgroundColorSwitch: {
      none: "Nessuno",
      accentColor: "Colore d'accento",
      custom: "Costume"
    },
    colorPalette: {
      light: "Leggero",
      dark: "Oscuro"
    },
    isPanelless: {
      "false": "Default",
      "true": "Senza pannelli"
    },
    progressBarInheritWidthFrom: {
      survey: "Come il sondaggio",
      container: "Uguale al contenitore"
    }
  },
  // Operators
  op: {
    empty: "è vuoto",
    notempty: "non è vuoto ",
    equal: "è uguale a",
    notequal: "non è uguale a",
    contains: "contiene",
    notcontains: "non contiene",
    anyof: "Qualsiasi",
    allof: "Tutti",
    greater: "maggiore",
    less: "minore",
    greaterorequal: "maggiore o uguale",
    lessorequal: "minore o uguale",
    and: "e",
    or: "o"
  },
  // Embed window
  ew: {
    angular: "Versione per Angular",
    jquery: "Versione per jQuery",
    knockout: "Versione per Knockout",
    react: "Versione per React",
    vue: "Versione per Vue",
    bootstrap: "Per framework bootstrap",
    modern: "Tema moderno",
    default: "Tema default",
    orange: "Tema Orange",
    darkblue: "Tema Darkblue",
    darkrose: "Tema Darkrose",
    stone: "Tema Stone",
    winter: "Tema Winter",
    winterstone: "Tema Winter-Stone",
    showOnPage: "Visualizza in questa pagina",
    showInWindow: "Visualizza in una finestra",
    loadFromServer: "Carica JSON dal server",
    titleScript: "Scripts e stili",
    titleHtml: "HTML",
    titleJavaScript: "JavaScript"
  },
  // Preview (Survey)
  ts: {
    selectPage: "Seleziona la pagina da testare:",
    showInvisibleElements: "Mostra elementi nascosti",
    hideInvisibleElements: "Nascondi elementi invisibili"
  },
  validators: {
    answercountvalidator: "Numero risposte",
    emailvalidator: "E-mail",
    expressionvalidator: "Espressione",
    numericvalidator: "Numerico",
    regexvalidator: "Regex",
    textvalidator: "Testo"
  },
  triggers: {
    completetrigger: "Completa sondaggio",
    setvaluetrigger: "Imposta valore",
    copyvaluetrigger: "Copia risposta",
    skiptrigger: "Vai alla domanda",
    runexpressiontrigger: "Esegui espressione",
    visibletrigger: "Cambia visibilità"
  },
  peplaceholder: {
    patternmask: {
      pattern: "Es.: +1(999)-999-99-99"
    },
    datetimemask: {
      pattern: "Es.: gg/mm/aaaa"
    },
    currencymask: {
      prefix: "Es.: $",
      suffix: "Es.: USD"
    },
    panelbase: {
      questionTitleWidth: "Es.: 200px"
    },
    panellayoutcolumn: {
      effectiveWidth: "Es.: 30%",
      questionTitleWidth: "Es.: 200px"
    }
  },
  pehelp: {
    panel: {
      name: "Un ID pannello che non è visibile ai rispondenti.",
      description: "Digita un sottotitolo del pannello.",
      visibleIf: "Utilizzare l'icona della bacchetta magica per impostare una regola condizionale che determina la visibilità del pannello.",
      enableIf: "Utilizzare l'icona della bacchetta magica per impostare una regola condizionale che disabiliti la modalità di sola lettura per il pannello.",
      requiredIf: "Utilizza l'icona della bacchetta magica per impostare una regola condizionale che impedisca l'invio dell'indagine a meno che almeno una domanda nidificata non abbia una risposta.",
      questionTitleLocation: "Si applica a tutte le domande all'interno di questo pannello. Se si desidera ignorare questa impostazione, definire le regole di allineamento del titolo per le singole domande. L'opzione \"Eredita\" applica l'impostazione a livello di pagina (se impostata) o a livello di indagine (\"In alto\" per impostazione predefinita).",
      questionTitleWidth: "Imposta una larghezza coerente per i titoli delle domande quando sono allineati a sinistra delle caselle delle domande. Accetta valori CSS (px, %, in, pt, ecc.).",
      questionErrorLocation: "Imposta la posizione di un messaggio di errore in relazione a tutte le domande all'interno del pannello. L'opzione \"Eredita\" applica l'impostazione a livello di pagina (se impostata) o a livello di indagine.",
      questionOrder: "Mantiene l'ordine originale delle domande o le rende casuali. L'opzione \"Eredita\" applica l'impostazione a livello di pagina (se impostata) o a livello di indagine.",
      page: "Riposiziona il pannello alla fine di una pagina selezionata.",
      innerIndent: "Aggiunge spazio o margine tra il contenuto del pannello e il bordo sinistro del riquadro del pannello.",
      startWithNewLine: "Deselezionare questa opzione per visualizzare il pannello in una riga con la domanda o il pannello precedente. L'impostazione non si applica se il pannello è il primo elemento del modulo.",
      state: "Scegli tra: \"Espanso\" - il pannello viene visualizzato per intero e può essere compresso; \"Compresso\" - il pannello visualizza solo il titolo e la descrizione e può essere espanso; \"Bloccato\": il pannello viene visualizzato per intero e non può essere compresso.",
      width: "Imposta la larghezza del pannello in proporzione agli altri elementi di rilievo nella stessa linea. Accetta valori CSS (px, %, in, pt, ecc.).",
      showQuestionNumbers: "Assegna numeri alle domande nidificate all'interno di questo pannello.",
      effectiveColSpan: "Specifica il numero di colonne distribuite dal pannello all'interno del layout della griglia.",
      gridLayoutColumns: "Questa tabella consente di configurare ogni colonna della griglia all'interno del pannello. Imposta automaticamente la percentuale di larghezza per ogni colonna in base al numero massimo di elementi in una riga. Per personalizzare il layout della griglia, regola manualmente questi valori e definisci la larghezza del titolo per tutte le domande in ogni colonna."
    },
    paneldynamic: {
      name: "Un ID pannello che non è visibile ai rispondenti.",
      description: "Digita un sottotitolo del pannello.",
      visibleIf: "Utilizzare l'icona della bacchetta magica per impostare una regola condizionale che determina la visibilità del pannello.",
      enableIf: "Utilizzare l'icona della bacchetta magica per impostare una regola condizionale che disabiliti la modalità di sola lettura per il pannello.",
      requiredIf: "Utilizza l'icona della bacchetta magica per impostare una regola condizionale che impedisca l'invio dell'indagine a meno che almeno una domanda nidificata non abbia una risposta.",
      templateQuestionTitleLocation: "Si applica a tutte le domande all'interno di questo pannello. Se si desidera ignorare questa impostazione, definire le regole di allineamento del titolo per le singole domande. L'opzione \"Eredita\" applica l'impostazione a livello di pagina (se impostata) o a livello di indagine (\"In alto\" per impostazione predefinita).",
      templateQuestionTitleWidth: "Imposta una larghezza coerente per i titoli delle domande quando sono allineati a sinistra delle caselle delle domande. Accetta valori CSS (px, %, in, pt, ecc.).",
      templateErrorLocation: "Imposta la posizione di un messaggio di errore in relazione a una domanda con input non valido. Scegli tra: \"In alto\" - un testo di errore viene posizionato nella parte superiore della casella della domanda; \"In basso\": un testo di errore viene inserito nella parte inferiore della casella della domanda. L'opzione \"Eredita\" applica l'impostazione a livello di pagina (se impostata) o a livello di indagine (\"In alto\" per impostazione predefinita).",
      errorLocation: "Imposta la posizione di un messaggio di errore in relazione a tutte le domande all'interno del pannello. L'opzione \"Eredita\" applica l'impostazione a livello di pagina (se impostata) o a livello di indagine.",
      page: "Riposiziona il pannello alla fine di una pagina selezionata.",
      innerIndent: "Aggiunge spazio o margine tra il contenuto del pannello e il bordo sinistro del riquadro del pannello.",
      startWithNewLine: "Deselezionare questa opzione per visualizzare il pannello in una riga con la domanda o il pannello precedente. L'impostazione non si applica se il pannello è il primo elemento del modulo.",
      state: "Scegli tra: \"Espanso\" - il pannello viene visualizzato per intero e può essere compresso; \"Compresso\" - il pannello visualizza solo il titolo e la descrizione e può essere espanso; \"Bloccato\": il pannello viene visualizzato per intero e non può essere compresso.",
      width: "Imposta la larghezza del pannello in proporzione agli altri elementi di rilievo nella stessa linea. Accetta valori CSS (px, %, in, pt, ecc.).",
      templateTitle: "Digita un modello per i titoli dei pannelli dinamici. Utilizzare {panelIndex} per la posizione generale del pannello e {visiblePanelIndex} per l'ordine tra i pannelli visibili. Inserire questi segnaposto nel motivo per aggiungere la numerazione automatica.",
      templateTabTitle: "Digita un modello per i titoli delle schede. Utilizzate {panelIndex} per la posizione generale di un pannello e {visiblePanelIndex} per l'ordine tra i pannelli visibili. Inserire questi segnaposto nel motivo per aggiungere la numerazione automatica.",
      tabTitlePlaceholder: "Testo di fallback per i titoli delle schede che si applica quando il modello del titolo della scheda non produce un valore significativo.",
      templateVisibleIf: "Questa impostazione consente di controllare la visibilità dei singoli pannelli all'interno del pannello dinamico. Utilizzare il segnaposto '{panel}' per fare riferimento al pannello corrente nell'espressione.",
      titleLocation: "Questa impostazione viene ereditata automaticamente da tutte le domande all'interno di questo pannello. Se si desidera ignorare questa impostazione, definire le regole di allineamento del titolo per le singole domande. L'opzione \"Eredita\" applica l'impostazione a livello di pagina (se impostata) o a livello di indagine (\"In alto\" per impostazione predefinita).",
      descriptionLocation: "L'opzione \"Eredita\" applica l'impostazione a livello di pagina (se impostata) o a livello di indagine (\"Sotto il titolo del pannello\" per impostazione predefinita).",
      newPanelPosition: "Definisce la posizione di un pannello appena aggiunto. Per impostazione predefinita, i nuovi pannelli vengono aggiunti alla fine. Selezionare \"Avanti\" per inserire un nuovo pannello dopo quello corrente.",
      copyDefaultValueFromLastEntry: "Duplica le risposte dall'ultimo pannello e le assegna al successivo pannello dinamico aggiunto.",
      keyName: "Fai riferimento al nome di una domanda per richiedere a un utente di fornire una risposta univoca per questa domanda in ogni pannello."
    },
    copyDefaultValueFromLastEntry: "Duplica le risposte dell'ultima riga e le assegna alla successiva riga dinamica aggiunta.",
    defaultValueExpression: "Questa impostazione consente di assegnare un valore di risposta predefinito in base a un'espressione. L'espressione può includere calcoli di base: '{q1_id} + {q2_id}', espressioni booleane, come '{age} > 60' e funzioni: 'iif()', 'today()', 'age()', 'min()', 'max()', 'avg()', ecc. Il valore determinato da questa espressione funge da valore predefinito iniziale che può essere sostituito dall'input manuale di un rispondente.",
    resetValueIf: "Utilizza l'icona della bacchetta magica per impostare una regola condizionale che determini quando l'input di un rispondente viene reimpostato sul valore in base all'\"Espressione del valore predefinito\" o \"Imposta espressione del valore\" o al valore \"Risposta predefinita\" (se uno dei due è impostato).",
    setValueIf: "Utilizzare l'icona della bacchetta magica per impostare una regola condizionale che determina quando eseguire l'espressione \"Imposta valore\" e assegnare dinamicamente il valore risultante come risposta.",
    setValueExpression: "Specificare un'espressione che definisca il valore da impostare quando vengono soddisfatte le condizioni della regola \"Imposta valore se\". L'espressione può includere calcoli di base: '{q1_id} + {q2_id}', espressioni booleane, come '{age} > 60' e funzioni: 'iif()', 'today()', 'age()', 'min()', 'max()', 'avg()', ecc. Il valore determinato da questa espressione può essere sovrascritto dall'input manuale di un rispondente.",
    gridLayoutEnabled: "Survey Creator consente di regolare manualmente le larghezze in linea degli elementi del modulo per controllare il layout. Se questo non produce il risultato desiderato, è possibile abilitare il layout a griglia, che struttura gli elementi di forma utilizzando un sistema basato su colonne. Per configurare le colonne del layout, seleziona una pagina o un pannello e utilizza la tabella \"Impostazioni domanda\" → \"Colonne griglia\". Per regolare il numero di colonne di una domanda, selezionala e imposta il valore desiderato nel campo \"Layout\" → \"Estensione colonne\".",
    question: {
      name: "Un ID domanda che non è visibile ai rispondenti.",
      description: "Digita il sottotitolo di una domanda.",
      visibleIf: "Usa l'icona della bacchetta magica per impostare una regola condizionale che determina la visibilità delle domande.",
      enableIf: "Utilizza l'icona della bacchetta magica per impostare una regola condizionale che disabilita la modalità di sola lettura per la domanda.",
      requiredIf: "Utilizza l'icona della bacchetta magica per impostare una regola condizionale che impedisca l'avanzamento o l'invio dell'indagine a meno che la domanda non riceva una risposta.",
      startWithNewLine: "Deseleziona questa opzione per visualizzare la domanda in una riga con la domanda o il pannello precedente. L'impostazione non si applica se la domanda è il primo elemento del modulo.",
      page: "Riposiziona la domanda alla fine di una pagina selezionata.",
      state: "Scegli tra: \"Espandito\" - la casella della domanda viene visualizzata per intero e può essere compressa; \"Compresso\": la casella della domanda mostra solo il titolo e la descrizione e può essere espansa; \"Bloccata\": la casella della domanda viene visualizzata per intero e non può essere compressa.",
      titleLocation: "Sostituisce le regole di allineamento del titolo definite a livello di pannello, pagina o rilevamento. L'opzione \"Eredita\" applica tutte le impostazioni di livello superiore (se impostate) o le impostazioni a livello di indagine (\"In alto\" per impostazione predefinita).",
      descriptionLocation: "L'opzione \"Eredita\" applica l'impostazione a livello di indagine (\"Sotto il titolo della domanda\" per impostazione predefinita).",
      errorLocation: "Imposta la posizione di un messaggio di errore in relazione alla domanda con input non valido. Scegli tra: \"In alto\" - un testo di errore viene posizionato nella parte superiore della casella della domanda; \"In basso\": un testo di errore viene inserito nella parte inferiore della casella della domanda. L'opzione \"Eredita\" applica l'impostazione a livello di indagine (\"In alto\" per impostazione predefinita).",
      indent: "Aggiunge uno spazio o un margine tra il contenuto della domanda e il bordo sinistro della casella della domanda.",
      width: "Imposta la larghezza della domanda in proporzione agli altri elementi del sondaggio nella stessa riga. Accetta valori CSS (px, %, in, pt, ecc.).",
      surveyvalidator: {
        expression: "Usa l'icona della bacchetta magica per impostare una regola di convalida per la domanda."
      },
      textUpdateMode: "Scegli tra: \"In caso di perdita di messa a fuoco\" - il valore viene aggiornato quando il campo di immissione perde lo stato attivo; \"Durante la digitazione\": il valore viene aggiornato in tempo reale, mentre gli utenti digitano. L'opzione \"Eredita\" applica l'impostazione a livello di indagine (\"In caso di perdita di focus\" per impostazione predefinita).",
      url: "È possibile utilizzare qualsiasi servizio Web come origine dati per le domande a scelta multipla. Per popolare i valori di scelta, immettere l'URL del servizio che fornisce i dati.",
      searchMode: "Operazione di confronto utilizzata per filtrare l'elenco a discesa.",
      textWrapEnabled: "I testi lunghi nelle opzioni di scelta genereranno automaticamente interruzioni di riga per adattarsi al menu a discesa. Deselezionare questa opzione se si desidera che i testi vengano ritagliati.",
      effectiveColSpan: "Specifica il numero di colonne su cui si estende la domanda all'interno del layout della griglia."
    },
    signaturepad: {
      signatureWidth: "Imposta la larghezza dell'area della firma visualizzata e dell'immagine risultante.",
      signatureHeight: "Imposta l'altezza dell'area della firma visualizzata e dell'immagine risultante.",
      signatureAutoScaleEnabled: "Selezionare questa opzione se si desidera che l'area della firma occupi tutto lo spazio disponibile all'interno della casella della domanda, mantenendo le proporzioni 3:2 predefinite. Quando vengono impostati valori di larghezza e altezza personalizzati, l'impostazione manterrà le proporzioni di queste dimensioni."
    },
    file: {
      imageHeight: "Regola l'altezza dell'immagine nei risultati del rilevamento.",
      imageWidth: "Regola la larghezza dell'immagine nei risultati del rilevamento.",
      allowImagesPreview: "Visualizza le anteprime in miniatura per i file caricati, quando possibile. Deseleziona se desideri mostrare le icone dei file."
    },
    image: {
      contentMode: "L'opzione \"Auto\" determina automaticamente la modalità di visualizzazione adatta - Immagine, Video o YouTube - in base all'URL di origine fornito."
    },
    imagepicker: {
      imageHeight: "Sostituisce i valori di altezza minima e massima.",
      imageWidth: "Sostituisce i valori di larghezza minima e massima.",
      choices: "\"Valore\" funge da ID elemento utilizzato nelle regole condizionali; \"Testo\" viene visualizzato ai rispondenti.",
      contentMode: "Scegli tra \"Immagine\" e \"Video\" per impostare la modalità contenuto del selettore multimediale. Se è selezionata l'opzione \"Immagine\", assicurarsi che tutte le opzioni fornite siano file immagine nei seguenti formati: JPEG, GIF, PNG, APNG, SVG, BMP, ICO. Allo stesso modo, se è selezionato \"Video\", assicurarsi che tutte le opzioni siano collegamenti diretti a file video nei seguenti formati: MP4, MOV, WMV, FLV, AVI, MKV. Tieni presente che i link di YouTube non sono supportati per le opzioni video."
    },
    text: {
      size: "Questa impostazione ridimensiona solo il campo di input e non influisce sulla larghezza della casella della domanda. Per limitare la lunghezza di input accettata, passare a <b>Convalida → Limite massimo di caratteri</b>."
    },
    comment: {
      rows: "Imposta il numero di righe visualizzate nel campo di immissione. Se l'input occupa più righe, verrà visualizzata la barra di scorrimento."
    },
    // survey templates
    survey: {
      readOnly: "Seleziona se vuoi impedire ai rispondenti di compilare la tua indagine.",
      progressBarLocation: "Imposta la posizione della barra di avanzamento. Il valore \"Auto\" visualizza la barra di avanzamento sopra o sotto l'intestazione del rilevamento."
    },
    matrixdropdowncolumn: {
      name: "Un ID colonna che non è visibile ai rispondenti.",
      isUnique: "Se abilitata per una colonna, un rispondente deve fornire una risposta univoca per ogni domanda all'interno di questa colonna.",
      rows: "Imposta il numero di righe visualizzate nel campo di immissione. Se l'input occupa più righe, verrà visualizzata la barra di scorrimento.",
      visibleIf: "Utilizzare l'icona della bacchetta magica per impostare una regola condizionale che determini la visibilità della colonna.",
      enableIf: "Utilizzare l'icona della bacchetta magica per impostare una regola condizionale che disabiliti la modalità di sola lettura per la colonna.",
      requiredIf: "Utilizza l'icona della bacchetta magica per impostare una regola condizionale che impedisca l'invio dell'indagine a meno che almeno una domanda nidificata non abbia una risposta.",
      showInMultipleColumns: "Quando questa opzione è selezionata, crea una singola colonna per ogni opzione di scelta.",
      colCount: "Dispone le opzioni di scelta in un layout a più colonne. Se impostato su 0, le opzioni vengono visualizzate in una singola riga. Se impostato su -1, il valore effettivo viene ereditato dalla proprietà \"Conteggio colonne nidificate\" della matrice padre."
    },
    caseInsensitive: "Selezionare se le lettere maiuscole e minuscole nell'espressione regolare devono essere considerate equivalenti.",
    widthMode: "Scegli tra: \"Statico\" - imposta una larghezza fissa; \"Responsive\" - fa sì che il sondaggio occupi l'intera larghezza dello schermo; \"Auto\": applica uno dei due a seconda del tipo di domanda utilizzato.",
    cookieName: "I cookie impediscono agli utenti di compilare due volte lo stesso sondaggio.",
    logo: "Incolla un link immagine (senza limiti di dimensione) o fai clic sull'icona della cartella per sfogliare un file dal tuo computer (fino a 64 KB).",
    logoWidth: "Imposta la larghezza del logo in unità CSS (px, %, in, pt e così via).",
    logoHeight: "Imposta l'altezza di un logo in unità CSS (px, %, in, pt e così via).",
    logoFit: "Scegli tra: \"Nessuna\" - l'immagine mantiene le sue dimensioni originali; \"Contieni\": l'immagine viene ridimensionata per adattarla mantenendo le sue proporzioni; \"Copertina\": l'immagine riempie l'intera scatola mantenendo le sue proporzioni; \"Riempi\" - l'immagine viene allungata per riempire la casella senza mantenerne le proporzioni.",
    autoAdvanceEnabled: "Seleziona questa opzione se desideri che l'indagine passi automaticamente alla pagina successiva una volta che un rispondente ha risposto a tutte le domande della pagina corrente. Questa funzione non si applica se l'ultima domanda della pagina è aperta o consente risposte multiple.",
    autoAdvanceAllowComplete: "Seleziona questa opzione se desideri che l'indagine venga completata automaticamente dopo che un rispondente ha risposto a tutte le domande.",
    showNavigationButtons: "Imposta la visibilità e la posizione dei pulsanti di navigazione in una pagina.",
    navigationButtonsLocation: "Imposta la posizione dei pulsanti di navigazione in una pagina.",
    showPreviewBeforeComplete: "Abilita la pagina di anteprima con tutte le domande o solo con risposta.",
    questionTitleLocation: "Si applica a tutte le domande all'interno dell'indagine. Questa impostazione può essere sostituita dalle regole di allineamento del titolo ai livelli inferiori: pannello, pagina o domanda. Un'impostazione di livello inferiore sostituirà quelle di livello superiore.",
    requiredMark: "Un simbolo o una sequenza di simboli che indica che è necessaria una risposta.",
    questionStartIndex: "Immettere un numero o una lettera con cui si desidera iniziare la numerazione.",
    questionErrorLocation: "Imposta la posizione di un messaggio di errore in relazione alla domanda con input non valido. Scegli tra: \"In alto\" - un testo di errore viene posizionato nella parte superiore della casella della domanda; \"In basso\": un testo di errore viene inserito nella parte inferiore della casella della domanda.",
    autoFocusFirstQuestion: "Selezionare se si desidera che il primo campo di immissione di ogni pagina sia pronto per l'immissione di testo.",
    questionOrder: "Mantiene l'ordine originale delle domande o le rende casuali. L'effetto di questa impostazione è visibile solo nella scheda Anteprima.",
    maxTextLength: "Solo per domande di immissione di testo.",
    maxCommentLength: "Solo per i commenti alle domande.",
    commentAreaRows: "Imposta il numero di righe visualizzate nelle aree di testo per i commenti alle domande. Se l'input occupa più righe, viene visualizzata la barra di scorrimento.",
    autoGrowComment: "Selezionare questa opzione se si desidera che i commenti alle domande e le domande di testo lungo aumentino automaticamente in altezza in base alla lunghezza del testo inserito.",
    allowResizeComment: "Solo per i commenti alle domande e le domande a testo lungo.",
    calculatedValues: "Le variabili personalizzate fungono da variabili intermedie o ausiliarie utilizzate nei calcoli dei moduli. Accettano gli input dei rispondenti come valori di origine. Ogni variabile personalizzata ha un nome univoco e un'espressione su cui si basa.",
    includeIntoResult: "Selezionare questa opzione se si desidera che il valore calcolato dell'espressione venga salvato insieme ai risultati del rilevamento.",
    triggers: "Un trigger è un evento o una condizione basata su un'espressione. Una volta che l'espressione è stata valutata come \"true\", un trigger attiva un'azione. Un'azione di questo tipo può facoltativamente avere un effetto su una domanda di destinazione.",
    clearInvisibleValues: "Scegli se cancellare o meno i valori per le domande nascoste dalla logica condizionale e quando farlo.",
    textUpdateMode: "Scegli tra: \"In caso di perdita di messa a fuoco\" - il valore viene aggiornato quando il campo di immissione perde lo stato attivo; \"Durante la digitazione\": il valore viene aggiornato in tempo reale, mentre gli utenti digitano.",
    columns: "Il valore a sinistra funge da ID colonna utilizzato nelle regole condizionali, mentre il valore a destra viene visualizzato dai rispondenti.",
    rows: "Il valore a sinistra funge da ID riga utilizzato nelle regole condizionali, mentre il valore a destra viene visualizzato dai rispondenti.",
    columnMinWidth: "Accetta valori CSS (px, %, in, pt, ecc.).",
    rowTitleWidth: "Accetta valori CSS (px, %, in, pt, ecc.).",
    totalText: "Visibile solo quando almeno una colonna ha il tipo Totale o l'espressione Totale.",
    cellErrorLocation: "Imposta la posizione di un messaggio di errore in relazione a una cella con input non valido. L'opzione \"Eredita\" applica l'impostazione della proprietà \"Allineamento messaggi di errore\".",
    detailErrorLocation: "Imposta la posizione dei messaggi di errore per le domande nidificate nelle sezioni di dettaglio. L'opzione \"Eredita\" applica l'impostazione della proprietà \"Allineamento messaggio di errore\".",
    keyDuplicationError: "Quando la proprietà \"Impedisci risposte duplicate\" è abilitata, un rispondente che tenta di inviare una voce duplicata riceverà il seguente messaggio di errore.",
    totalExpression: "Consente di calcolare i valori totali in base a un'espressione. L'espressione può includere calcoli di base ('{q1_id} + {q2_id}'), espressioni booleane ('{age} > 60') e funzioni ('iif()', 'today()', 'age()', 'min()', 'max()', 'avg()', ecc.).",
    confirmDelete: "Attiva un prompt che chiede di confermare l'eliminazione della riga.",
    keyName: "Se la colonna specificata contiene valori identici, il sondaggio produce l'errore \"Valore chiave non univoco\".",
    description: "Digita un sottotitolo.",
    locale: "Scegli una lingua per iniziare a creare la tua indagine. Per aggiungere una traduzione, passa a una nuova lingua e traduci il testo originale qui o nella scheda Traduzioni.",
    detailPanelMode: "Imposta la posizione di una sezione di dettagli in relazione a una riga. Scegli tra: \"Nessuna\" - non viene aggiunta alcuna espansione; \"Sotto la riga\": un'espansione di riga viene posizionata sotto ogni riga della matrice; \"Sotto la riga, visualizza solo un'espansione di riga\": un'espansione viene visualizzata solo sotto una singola riga, le espansioni di riga rimanenti vengono compresse.",
    imageFit: "Scegli tra: \"Nessuna\" - l'immagine mantiene le sue dimensioni originali; \"Contieni\": l'immagine viene ridimensionata per adattarla mantenendo le sue proporzioni; \"Copertina\": l'immagine riempie l'intera scatola mantenendo le sue proporzioni; \"Riempi\" - l'immagine viene allungata per riempire la casella senza mantenerne le proporzioni.",
    autoGrow: "Aumenta gradualmente l'altezza del campo di immissione man mano che i dati vengono inseriti. Sostituisce l'impostazione \"Altezza campo di immissione (in righe)\".",
    allowResize: "La maniglia di ridimensionamento (o grip) viene visualizzata nell'angolo e può essere trascinata per modificare le dimensioni del campo di immissione.",
    timeLimit: "Un intervallo di tempo in secondi dopo il quale l'indagine avanza automaticamente alla pagina di ringraziamento.",
    timeLimitPerPage: "Un intervallo di tempo in secondi dopo il quale il rilevamento avanza automaticamente alla pagina successiva.",
    validateVisitedEmptyFields: "Abilitare questa opzione per attivare la convalida quando un utente si concentra su un campo di input vuoto e poi lo abbandona senza apportare modifiche.",
    page: {
      name: "Un ID pagina che non è visibile ai rispondenti.",
      description: "Digita un sottotitolo della pagina.",
      navigationTitle: "Didascalia visualizzata su un pulsante di navigazione nella barra di avanzamento o nel sommario. Se si lascia vuoto questo campo, il pulsante di navigazione utilizzerà il titolo o il nome della pagina. Per abilitare la barra di avanzamento o il sommario, vai su \"Sondaggio\" → \"Navigazione\".",
      timeLimit: "Un intervallo di tempo in secondi dopo il quale il rilevamento avanza automaticamente alla pagina successiva.",
      visibleIf: "Usa l'icona della bacchetta magica per impostare una regola condizionale che determina la visibilità della pagina.",
      enableIf: "Utilizzare l'icona della bacchetta magica per impostare una regola condizionale che disabilita la modalità di sola lettura per la pagina.",
      requiredIf: "Utilizza l'icona della bacchetta magica per impostare una regola condizionale che impedisca l'invio dell'indagine a meno che almeno una domanda nidificata non abbia una risposta.",
      questionTitleLocation: "Si applica a tutte le domande all'interno di questa pagina. Se si desidera ignorare questa impostazione, definire le regole di allineamento dei titoli per le singole domande o pannelli. L'opzione \"Eredita\" applica l'impostazione a livello di indagine (\"In alto\" per impostazione predefinita).",
      questionTitleWidth: "Imposta una larghezza coerente per i titoli delle domande quando sono allineati a sinistra delle caselle delle domande. Accetta valori CSS (px, %, in, pt, ecc.).",
      questionErrorLocation: "Imposta la posizione di un messaggio di errore in relazione alla domanda con input non valido. Scegli tra: \"In alto\" - un testo di errore viene posizionato nella parte superiore della casella della domanda; \"In basso\": un testo di errore viene inserito nella parte inferiore della casella della domanda. L'opzione \"Eredita\" applica l'impostazione a livello di indagine (\"In alto\" per impostazione predefinita).",
      questionOrder: "Mantiene l'ordine originale delle domande o le rende casuali. L'opzione \"Eredita\" applica l'impostazione a livello di indagine (\"Originale\" per impostazione predefinita). L'effetto di questa impostazione è visibile solo nella scheda Anteprima.",
      showNavigationButtons: "Imposta la visibilità dei pulsanti di navigazione nella pagina. L'opzione \"Eredita\" applica l'impostazione a livello di indagine, che per impostazione predefinita è \"Visibile\".",
      gridLayoutColumns: "Questa tabella consente di configurare ogni colonna della griglia nella pagina. Imposta automaticamente la percentuale di larghezza per ogni colonna in base al numero massimo di elementi in una riga. Per personalizzare il layout della griglia, regola manualmente questi valori e definisci la larghezza del titolo per tutte le domande in ogni colonna."
    },
    timerLocation: "Imposta la posizione di un timer su una pagina.",
    panelsState: "Scegli tra: \"Bloccato\" - gli utenti non possono espandere o comprimere i pannelli; \"Comprimi tutto\": tutti i pannelli iniziano in uno stato compresso; \"Espandi tutto\": tutti i pannelli iniziano in uno stato espanso; \"Prima espansa\": inizialmente viene espanso solo il primo pannello.",
    imageLinkName: "Immettere un nome di proprietà condivisa all'interno della matrice di oggetti che contiene gli URL del file di immagine o video che si desidera visualizzare nell'elenco di scelta.",
    choices: "Il valore a sinistra funge da ID elemento utilizzato nelle regole condizionali, mentre il valore a destra viene visualizzato dai rispondenti.",
    title: "Digitare un titolo descrittivo da visualizzare.",
    waitForUpload: "Garantisce che gli utenti non completino l'indagine fino a quando i file non vengono caricati.",
    minWidth: "Accetta valori CSS (px, %, in, pt, ecc.).",
    maxWidth: "Accetta valori CSS (px, %, in, pt, ecc.).",
    width: "Accetta valori CSS (px, %, in, pt, ecc.).",
    valueName: "Se non si imposta questa proprietà, la risposta sarà memorizzata in un campo specificato dalla proprietà Nome.",
    defaultDisplayValue: "Un valore visualizzato nelle domande HTML e nei titoli dinamici e nelle descrizioni degli elementi dell'indagine quando il valore della domanda è vuoto.",
    useDisplayValuesInDynamicTexts: "Nei tipi di domande a selezione singola e multipla, ogni opzione di scelta ha un ID e un valore di visualizzazione. Quando questa opzione è selezionata, questa impostazione mostra un valore di visualizzazione anziché un valore ID nelle domande HTML e nei titoli dinamici e nelle descrizioni degli elementi dell'indagine.",
    clearIfInvisible: "Scegli se cancellare o meno i valori delle domande nascosti dalla logica condizionale e quando farlo. L'opzione \"Eredita\" applica l'impostazione a livello di indagine (\"Al completamento dell'indagine\" per impostazione predefinita).",
    choicesFromQuestionMode: "Scegli tra: \"Tutte\" - copia tutte le opzioni di scelta dalla domanda selezionata; \"Selezionato\" - copia dinamicamente solo le opzioni di scelta selezionate; \"Non selezionato\" - copia dinamicamente solo le opzioni di scelta non selezionate. Le opzioni \"Nessuna\" e \"Altro\" vengono copiate per impostazione predefinita se abilitate nella domanda di origine.",
    choiceValuesFromQuestion: "Nei tipi di domande a selezione singola e multipla, ogni opzione di scelta ha un ID e un valore visualizzato. Questa impostazione specifica quale colonna matrice o domanda del pannello deve fornire gli ID.",
    choiceTextsFromQuestion: "Nei tipi di domande a selezione singola e multipla, ogni opzione di scelta ha un ID e un valore visualizzato. Questa impostazione specifica quale colonna matrice o domanda del pannello deve fornire i testi visualizzati.",
    allowCustomChoices: "Seleziona questa opzione per consentire ai rispondenti di aggiungere le proprie scelte se l'opzione desiderata non è disponibile nel menu a discesa. Le scelte personalizzate verranno memorizzate solo temporaneamente per la durata della sessione corrente del browser.",
    showOtherItem: "Quando questa opzione è selezionata, gli utenti possono includere input aggiuntivi in una casella di commento separata.",
    separateSpecialChoices: "Visualizza ogni opzione di scelta speciale (\"Nessuna\", \"Altro\", \"Seleziona tutto\") su una nuova riga, anche quando si utilizza un layout a più colonne.",
    path: "Specificare la posizione all'interno del set di dati del servizio in cui si trova la matrice di oggetti di destinazione. Lasciare vuoto se l'URL punta già all'array.",
    choicesbyurl: {
      valueName: " "
    },
    titleName: "Immettere un nome di proprietà uniforme all'interno della matrice di oggetti contenente i valori che si desidera visualizzare nell'elenco di scelte.",
    allowEmptyResponse: "Selezionare questa opzione per consentire al servizio di restituire una risposta o una matrice vuota.",
    choicesVisibleIf: "Utilizzare l'icona della bacchetta magica per impostare una regola condizionale che determina la visibilità di tutte le opzioni di scelta.",
    rateValues: "Il valore a sinistra funge da ID elemento utilizzato nelle regole condizionali, mentre il valore a destra viene visualizzato dai rispondenti.",
    rating: {
      displayMode: "\"Auto\" seleziona tra le modalità \"Pulsanti\" e \"Menu a discesa\" in base alla larghezza disponibile. Quando la larghezza è insufficiente per visualizzare i pulsanti, la domanda visualizza un menu a discesa."
    },
    valuePropertyName: "Consente di collegare domande che producono risultati in formati diversi. Quando tali domande sono collegate tra loro utilizzando un identificatore di join, questa proprietà condivisa memorizza i valori delle domande selezionate.",
    searchEnabled: "Selezionare questa opzione se si desidera aggiornare il contenuto del menu a discesa in modo che corrisponda alla query di ricerca digitata dall'utente nel campo di immissione.",
    valueTrue: "Un valore da salvare nei risultati dell'indagine quando i rispondenti danno una risposta positiva.",
    valueFalse: "Un valore da salvare nei risultati dell'indagine quando i rispondenti danno una risposta negativa.",
    showPreview: "Non è consigliabile disabilitare questa opzione in quanto sostituisce l'immagine di anteprima e rende difficile per un utente capire se i file sono stati caricati.",
    needConfirmRemoveFile: "Attiva un prompt che chiede di confermare l'eliminazione del file.",
    selectToRankEnabled: "Abilita per classificare solo le scelte selezionate. Gli utenti trascineranno gli elementi selezionati dall'elenco di scelta per ordinarli all'interno dell'area di classificazione.",
    dataList: "Inserisci un elenco di scelte che verranno suggerite al rispondente durante l'inserimento.",
    inputSize: "L'impostazione ridimensiona solo i campi di input e non influisce sulla larghezza della casella della domanda.",
    itemTitleWidth: "Imposta una larghezza uniforme per tutte le etichette degli articoli. Accetta valori CSS (px, %, in, pt, ecc.).",
    inputTextAlignment: "Selezionare la modalità di allineamento del valore di input all'interno del campo. L'impostazione predefinita \"Auto\" allinea il valore di input a destra se viene applicata una maschera di valuta o numerica e a sinistra in caso contrario.",
    altText: "Funge da sostituto quando l'immagine non può essere visualizzata sul dispositivo di un utente e per motivi di accessibilità.",
    rateColorMode: "Definisce il colore dell'emoji selezionata quando il tipo di icona Valutazione è impostato su \"Smiley\". Scegli tra: \"Predefinito\" - l'emoji selezionata appare nel colore predefinito del sondaggio; \"Scala\": l'emoji selezionata eredita il colore dalla scala di valutazione.",
    expression: {
      name: "Un ID espressione che non è visibile ai rispondenti.",
      description: "Digitare un sottotitolo dell'espressione.",
      expression: "Un'espressione può includere calcoli di base ('{q1_id} + {q2_id}'), condizioni ('{età} > 60') e funzioni ('iif()', 'oggi()', 'età()', 'min()', 'max()', 'avg()' e così via)."
    },
    storeOthersAsComment: "Selezionare questa opzione per memorizzare il valore dell'opzione \"Altro\" come proprietà separata nei risultati del rilevamento.",
    format: "Usa {0} come segnaposto per il valore effettivo.",
    acceptedTypes: "Per ulteriori informazioni, consultare la descrizione dell'attributo [accept](https://www.w3schools.com/tags/att_input_accept.asp).",
    columnColCount: "Applicabile solo ai tipi di cella Opzione multipla e Casella di controllo.",
    autocomplete: "Per ulteriori informazioni, consultare la descrizione dell'attributo [autocomplete](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete).",
    filePlaceholder: "Si applica quando \"Tipo di origine\" è \"File locali\" o quando la fotocamera non è disponibile",
    photoPlaceholder: "Si applica quando \"Tipo di sorgente\" è \"Fotocamera\".",
    fileOrPhotoPlaceholder: "Si applica quando \"Tipo di origine\" è \"File locali o fotocamera\".",
    colCount: "Dispone le opzioni di scelta in un layout a più colonne. Se impostato su 0, le opzioni vengono visualizzate in una singola riga.",
    masksettings: {
      saveMaskedValue: "Selezionare questa opzione se si desidera memorizzare il valore della domanda con una maschera applicata nei risultati dell'indagine."
    },
    patternmask: {
      pattern: "Il modello può contenere valori letterali stringa e i segnaposto seguenti: '9' - per una cifra; 'a' - per una lettera maiuscola o minuscola; '#' - per una cifra o una lettera maiuscola o minuscola. Usa la barra rovesciata '\\' per eseguire l'escape di un carattere."
    },
    datetimemask: {
      pattern: "Il modello può contenere caratteri separatori e i seguenti segnaposto:<br>'m' - Numero del mese.<br>'mm' - Numero del mese, con zero iniziale per i valori a una cifra. <br>'d' - Giorno del mese. <br>'dd' - Giorno del mese, con zero iniziale per i valori a una cifra. <br>'yy' - Le ultime due cifre dell'anno. <br>'yyyy' - Anno a quattro cifre. <br>'H' - Ore nel formato 24 ore. <br>'HH' - Ore nel formato 24 ore, con zero iniziale per i valori a una cifra. <br>'h' - Ore nel formato 12 ore. <br>'hh' - Ore nel formato 12 ore, con zero iniziale per i valori a una cifra. <br>«MM» - Processo verbale. <br>'ss' - Secondi. <br>'TT' - Periodo di 12 ore in maiuscolo (AM/PM). <br>'TT' - Periodo di 12 ore in minuscolo (AM/PM)."
    },
    numericmask: {
      decimalSeparator: "Simbolo utilizzato per separare la parte frazionaria dalla parte intera di un numero visualizzato.",
      thousandsSeparator: "Simbolo utilizzato per separare le cifre di un numero elevato in gruppi di tre.",
      precision: "Limita il numero di cifre da mantenere dopo la virgola decimale per un numero visualizzato."
    },
    currencymask: {
      prefix: "Uno o più simboli da visualizzare prima del valore.",
      suffix: "Uno o più simboli da visualizzare dopo il valore."
    },
    theme: {
      isPanelless: "Questa impostazione si applica solo alle domande esterne a un pannello.",
      primaryColor: "Imposta un colore supplementare che evidenzia gli elementi chiave del rilievo.",
      panelBackgroundTransparency: "Regola la trasparenza dei pannelli e delle caselle delle domande rispetto allo sfondo del sondaggio.",
      questionBackgroundTransparency: "Regola la trasparenza degli elementi di input rispetto allo sfondo del rilevamento.",
      cornerRadius: "Imposta il raggio dell'angolo per tutti gli elementi rettangolari. Abilitare la Modalità avanzata se si desidera impostare i valori del raggio d'angolo individuali per gli elementi di input o i pannelli e le caselle delle domande.",
      "--sjs-general-backcolor-dim": "Imposta il colore di sfondo principale del rilevamento."
    },
    header: {
      inheritWidthFrom: "L'opzione \"Uguale al contenitore\" regola automaticamente la larghezza dell'area del contenuto dell'intestazione per adattarla all'elemento HTML in cui è posizionato il sondaggio.",
      textAreaWidth: "La larghezza dell'area dell'intestazione che contiene il titolo e la descrizione del sondaggio, misurata in pixel.",
      overlapEnabled: "Se abilitata, la parte superiore del sondaggio si sovrappone alla parte inferiore dell'intestazione.",
      mobileHeight: "Se impostata su 0, l'altezza viene calcolata automaticamente per adattarsi al contenuto dell'intestazione."
    },
    progressBarInheritWidthFrom: "L'opzione \"Uguale al contenitore\" regola automaticamente la larghezza dell'area della barra di avanzamento per adattarla all'elemento HTML in cui è posizionato il sondaggio."
  },
  // Properties
  p: {
    title: {
      name: "Titolo",
      title: "Lascialo vuoto, se è uguale a 'Nome'"
    },
    multiSelect: "Consenti selezione multipla",
    showLabel: "Mostra le didascalie delle immagini",
    swapOrder: "Scambia l'ordine di Sì e No",
    value: "Valore",
    tabAlign: "Allineamento delle tabulazioni",
    sourceType: "Tipo di origine",
    fitToContainer: "Adatto al contenitore",
    setValueExpression: "Espressione del valore impostato",
    description: "Descrizione",
    logoFit: "Adattamento del logo",
    pages: "Pagine",
    questions: "Domande",
    triggers: "Triggers",
    calculatedValues: "Valori calcolati",
    surveyId: "ID sondaggio",
    surveyPostId: "ID post sondaggio",
    surveyShowDataSaving: "Il sondaggio mostra il salvataggio dei dati",
    questionDescriptionLocation: "Posizione descrizione domanda",
    progressBarType: "Tipo barra di avanzamento",
    showTOC: "Mostra sommario",
    tocLocation: "Posizione Toc",
    questionTitlePattern: "Modello titolo della domanda",
    widthMode: "Larghezza sondaggio",
    showBrandInfo: "Mostra informazioni sul marchio",
    useDisplayValuesInDynamicTexts: "Usa Valori di Riferimento nel titolo",
    visibleIf: "Visibile Se",
    defaultValueExpression: "Espressione valore predefinito",
    requiredIf: "Obbligatoria Se",
    resetValueIf: "Reimposta valore se",
    setValueIf: "Imposta valore se",
    validators: "Validatori",
    bindings: "Collegamenti",
    renderAs: "Esegui il rendering come",
    attachOriginalItems: "Allega elementi originali",
    choices: "Scelte",
    choicesByUrl: "Scelte per url",
    currency: "Valuta",
    cellHint: "Suggerimento cella",
    totalMaximumFractionDigits: "Cifre totali della frazione massima",
    totalMinimumFractionDigits: "Cifre di frazione minima totale",
    columns: "Colonne",
    detailElements: "Elementi di dettaglio",
    allowAdaptiveActions: "Consenti azioni adattive",
    defaultRowValue: "Valore predefinito Riga",
    detailPanelShowOnAdding: "Dettaglio Mostra Pannello su Aggiunta",
    choicesLazyLoadEnabled: "Scelte lazy load abilitate",
    choicesLazyLoadPageSize: "Scelte lazy load dimensione della pagina",
    inputFieldComponent: "Componente del campo di input",
    itemComponent: "Componente dell'articolo",
    min: "min",
    max: "max",
    minValueExpression: "Valore min Espressione",
    maxValueExpression: "Valore max Espressione",
    step: "Distanza",
    dataList: "Lista dati",
    inputSize: "Dimensione opzione",
    itemTitleWidth: "Larghezza dell'etichetta dell'articolo (in px)",
    inputTextAlignment: "Allineamento dei valori di input",
    elements: "Elementi",
    content: "Contenuto",
    navigationTitle: "Titolo navigazione",
    navigationDescription: "Descrizione navigazione",
    longTap: "Tocco prolungato",
    autoGrow: "Espansione automatica",
    allowResize: "Consenti ridimensionamento",
    acceptCarriageReturn: "Accetta la restituzione in capo",
    displayMode: "Modalità di visualizzazione",
    rateType: "Tipo di tariffa",
    label: "Etichetta",
    contentMode: "Modalità contenuto",
    imageFit: "Adattamento dell'immagine",
    altText: "Testo alternativo",
    height: "Altezza",
    mobileHeight: "Altezza su smartphone",
    penColor: "Colore penna",
    backgroundColor: "Colore sfondo",
    templateElements: "Elementi del modello",
    operator: "Operatore",
    isVariable: "È variabile",
    runExpression: "Esegui espressione",
    showCaption: "Mostra didascalia",
    iconName: "Nome icona",
    iconSize: "Grandezza icona",
    precision: "Precisione",
    matrixDragHandleArea: "Area della maniglia di trascinamento della matrice",
    backgroundImage: "Immagine di sfondo",
    backgroundImageFit: "Adattamento dell'immagine di sfondo",
    backgroundImageAttachment: "Allegato immagine di sfondo",
    backgroundOpacity: "Opacità dello sfondo",
    selectToRankEnabled: "Seleziona per classificare abilitato",
    selectToRankAreasLayout: "Selezionare per classificare il layout delle aree",
    selectToRankEmptyRankedAreaText: "Testo da mostrare se tutte le opzioni sono selezionate",
    selectToRankEmptyUnrankedAreaText: "Testo segnaposto per l'area di classificazione",
    allowCameraAccess: "Consenti accesso alla videocamera",
    scaleColorMode: "Modalità scala colore",
    rateColorMode: "Valuta la modalità colore",
    copyDisplayValue: "Copia valore di visualizzazione",
    effectiveColSpan: "Estensione delle colonne",
    progressBarInheritWidthFrom: "Larghezza dell'area della barra di avanzamento"
  },
  theme: {
    advancedMode: "Modalità avanzata",
    pageTitle: "Carattere del titolo della pagina",
    questionTitle: "Tipo di carattere del titolo della domanda",
    editorPanel: "Elemento di input",
    lines: "Poema",
    primaryDefaultColor: "Default",
    primaryDarkColor: "Fluttuare",
    primaryLightColor: "Selezionato",
    backgroundDimColor: "Colore di sfondo",
    cornerRadius: "Raggio d'angolo",
    backcolor: "Sfondo predefinito",
    hovercolor: "Sfondo al passaggio del mouse",
    borderDecoration: "Decorazione del bordo",
    fontColor: "Colore del carattere",
    backgroundColor: "Colore di sfondo",
    primaryForecolor: "Colore predefinito",
    primaryForecolorLight: "Colore disabilitato",
    font: "Font",
    borderDefault: "Scuro",
    borderLight: "Accendino",
    fontFamily: "Famiglia di caratteri",
    fontWeightRegular: "Regolare",
    fontWeightHeavy: "Pesante",
    fontWeightSemiBold: "Semi-grassetto",
    fontWeightBold: "Audace",
    color: "Colore",
    placeholderColor: "Colore segnaposto",
    size: "Grandezza",
    opacity: "Opacità",
    boxShadowX: "X",
    boxShadowY: "Y",
    boxShadowAddRule: "Aggiungi effetto ombra",
    boxShadowBlur: "Sfocatura",
    boxShadowSpread: "Diffusione",
    boxShadowDrop: "Goccia",
    boxShadowInner: "Interno",
    names: {
      default: "Default",
      sharp: "Affilato",
      borderless: "Borderless",
      flat: "Appartamento",
      plain: "Pianura",
      doubleborder: "Doppio bordo",
      layered: "Stratificato",
      solid: "Solido",
      threedimensional: ".3D",
      contrast: "Contrasto"
    },
    colors: {
      teal: "Color foglia di tè",
      blue: "Blu",
      purple: "Porpora",
      orchid: "Orchidea",
      tulip: "Tulipano",
      brown: "Marrone",
      green: "Verde",
      gray: "Grigio"
    }
  },
  creatortheme: {
    "--sjs-special-background": "Sfondo della superficie",
    "--sjs-primary-background-500": "Primario",
    "--sjs-secondary-background-500": "Secondario",
    surfaceScale: "Superficie",
    userInterfaceBaseUnit: "Interfaccia utente",
    fontScale: "Font",
    names: {
      sc2020: "Creatore di sondaggi 2020",
      "default-light": "Leggero",
      "default-dark": "Oscuro",
      "default-contrast": "Contrasto"
    }
  }
};

setupLocale({ localeCode: "it", strings: italianTranslation });

// The following strings have been translated by a machine translation service
// Remove those strings that you have corrected manually
// qt.tagbox: "Multi-Select Dropdown" => "Menù a discesa a selezione multipla"
// ed.surveySettings: "Survey Settings" => "Impostazioni del sondaggio"
// ed.surveySettingsTooltip: "Open survey settings" => "Apri le impostazioni del sondaggio"
// ed.themeSurvey: "Themes" => "Temi"
// ed.showMoreChoices: "Show more" => "Mostra di più"
// ed.showLessChoices: "Show less" => "Mostra meno"
// ed.toolboxChoiceCategory: "Choice Questions" => "Domande a scelta"
// ed.toolboxTextCategory: "Text Input Questions" => "Domande sull'input di testo"
// ed.toolboxContainersCategory: "Containers" => "Contenitori"
// ed.toolboxMatrixCategory: "Matrix Questions" => "Domande sulla matrice"
// ed.toolboxMiscCategory: "Misc" => "Altri"
// ed.themePropertyGridTitle: "Theme Settings" => "Impostazioni del tema"
// ed.themeExportButton: "Export" => "Esportazione"
// ed.themeImportButton: "Import" => "Importazione"
// ed.carryForwardChoicesCopied: "Choices are copied from" => "Le scelte vengono copiate da"
// ed.imagePlaceHolder: "Drag and drop an image here or click the button below and choose an image to upload" => "Trascina e rilascia un'immagine qui o fai clic sul pulsante qui sotto e scegli un'immagine da caricare"
// ed.imageChooseImage: "Choose Image" => "Scegli immagine"
// ed.auto: "auto" => "Automatico"
// ed.choices_Item: "Item " => "Articolo "
// lg.trigger_setvalueEmptyText: "clear question value: {0}" => "Valore chiaro della domanda: {0}"
// lg.uncompletedRule_title: "Logical rules are incomplete" => "Le regole logiche sono incomplete"
// lg.uncompletedRule_text: "You have not completed some of the logical rules. If you leave the tab now, the changes will be lost. Do you still want to leave the tab without completing the changes?" => "Alcune regole logiche non sono state completate. Se lasci la scheda ora, le modifiche andranno perse. Vuoi comunque uscire dalla scheda senza completare le modifiche?"
// lg.uncompletedRule_apply: "Yes" => "Sì"
// lg.uncompletedRule_cancel: "No, I want to complete the rules" => "No, voglio completare le regole"
// pe.fastEntryPlaceholder: "You can set data in the following format:\nvalue1|text\nvalue2" => "È possibile impostare i dati nel seguente formato:\nvalore1|testo\nvalore2"
// pe.overridingPropertyPrefix: "Set by " => "Impostato da "
// pe.propertyNameIsIncorrect: "Do not use reserved words: \"item\", \"choice\", \"panel\", \"row\"." => "Non utilizzare parole riservate: \"articolo\", \"scelta\", \"pannello\", \"riga\"."
// choicesbyurl.valueName: "Get values from the following JSON field" => "Ottenere valori dal seguente campo JSON"
// pe.and: "and" => "e"
// pe.or: "or" => "o"
// pe.emptyLogicPopupMessage: "Select a question to start configuring conditions." => "Selezionare una domanda per iniziare a configurare le condizioni."
// pe.then: "then" => "allora"
// image.imageHeight: "Image height (in CSS-accepted values)" => "Altezza immagine (in valori accettati da CSS)"
// image.imageWidth: "Image width (in CSS-accepted values)" => "Larghezza immagine (in valori accettati da CSS)"
// pe.allowResizeComment: "Allow users to resize text areas" => "Consenti agli utenti di ridimensionare le aree di testo"
// pe.rateCount: "Rate count" => "Conteggio delle tariffe"
// pe.autoGenerate: "How to specify rate values?" => "Come specificare i valori dei tassi?"
// pe.minSelectedChoices: "Minimum selected choices" => "Numero minimo di scelte selezionate"
// itemvalue.text: "Alt text" => "Testo alternativo"
// tabs.expression: "Expression" => "Espressione"
// pe.valuePropertyName: "Value property name" => "Nome della proprietà Value"
// pe.searchEnabled: "Enable search" => "Abilita ricerca"
// pe.hideSelectedItems: "Hide selected items" => "Nascondere gli elementi selezionati"
// pe.closeOnSelect: "Close the dropdown after selection" => "Chiudere il menu a discesa dopo la selezione"
// pe.signatureWidth: "Signature width" => "Larghezza firma"
// pe.signatureHeight: "Signature height" => "Altezza firma"
// pe.verticalAlign: "Vertical alignment" => "Allineamento verticale"
// pe.alternateRows: "Alternate rows" => "Righe alternate"
// pe.rateType: "Rate type" => "Tipo di tariffa"
// pv.true: "true" => "vero"
// pv.false: "false" => "falso"
// pv.decimal: "decimal" => "decimale"
// pv.currency: "currency" => "valuta"
// pv.percent: "percent" => "percento"
// pv.tab: "Tabs" => "Schede"
// pv.color: "color" => "Colore"
// pv.date: "date" => "dattero"
// pv.datetime: "datetime" => "datetime"
// pv.datetime-local: "datetime-local" => "datetime-local"
// pv.email: "email" => "E-mail"
// pv.month: "month" => "mese"
// pv.number: "number" => "numero"
// pv.password: "password" => "parola d’ordine"
// pv.range: "range" => "gamma"
// pv.tel: "tel" => "Tel"
// pv.text: "text" => "Testo"
// pv.time: "time" => "Ore"
// pv.url: "url" => "URL"
// pv.week: "week" => "settimana"
// inputType.color: "Color" => "Colore"
// inputType.date: "Date" => "Dattero"
// inputType.datetime-local: "Date and Time" => "Data e ora"
// inputType.email: "Email" => "E-mail"
// inputType.month: "Month" => "Mese"
// inputType.number: "Number" => "Numero"
// inputType.password: "Password" => "Parola d’ordine"
// inputType.range: "Range" => "Gamma"
// inputType.tel: "Phone Number" => "Numero di telefono"
// inputType.text: "Text" => "Testo"
// inputType.time: "Time" => "Ore"
// inputType.url: "URL" => "URL"
// inputType.week: "Week" => "Settimana"
// widthMode.auto: "Auto" => "Automatico"
// widthMode.static: "Static" => "Statico"
// widthMode.responsive: "Responsive" => "Reattivo"
// imageFit.none: "None" => "Nessuno"
// imageFit.contain: "Contain" => "Contenere"
// imageFit.cover: "Cover" => "Coprire"
// imageFit.fill: "Fill" => "Riempire"
// contentMode.auto: "Auto" => "Automatico"
// contentMode.image: "Image" => "Immagine"
// contentMode.video: "Video" => "Video"
// contentMode.youtube: "YouTube" => "Collegamenti esterni"
// displayMode.auto: "Auto" => "Automatico"
// displayMode.buttons: "Buttons" => "Pulsanti"
// displayMode.dropdown: "Dropdown" => "Menù a discesa"
// rateColorMode.default: "Default" => "Default"
// autoGenerate.true: "Generate" => "Generare"
// autoGenerate.false: "Enter manually" => "Inserisci manualmente"
// rateType.labels: "Labels" => "Etichette"
// rateType.stars: "Stars" => "Stelle"
// rateType.smileys: "Smileys" => "Faccine"
// op.and: "and" => "e"
// op.or: "or" => "o"
// ts.hideInvisibleElements: "Hide invisible elements" => "Nascondi elementi invisibili"
// pehelp.size: "Resizes the visible area of the input field. Please use the <b>Validation → Maximum length</b> setting to limit the input length." => "Ridimensiona l'area visibile del campo di input. Utilizzare l'impostazione <b>Convalida → lunghezza massima</b> per limitare la lunghezza di input."
// choicesbyurl.valueName: " " => " "
// p.value: "Value" => "Valore"
// p.tabAlign: "Tab alignment" => "Allineamento delle tabulazioni"
// p.questions: "Questions" => "Domande"
// p.surveyId: "Survey id" => "ID sondaggio"
// p.surveyPostId: "Survey post id" => "ID post sondaggio"
// p.surveyShowDataSaving: "Survey show data saving" => "Il sondaggio mostra il salvataggio dei dati"
// p.showTOC: "Show TOC" => "Mostra sommario"
// p.tocLocation: "Toc location" => "Posizione Toc"
// p.showBrandInfo: "Show brand info" => "Mostra informazioni sul marchio"
// p.renderAs: "Render as" => "Esegui il rendering come"
// p.attachOriginalItems: "Attach original items" => "Allega elementi originali"
// p.choicesByUrl: "Choices by url" => "Scelte per url"
// p.cellHint: "Cell hint" => "Suggerimento cella"
// p.isUnique: "Is unique" => "È unico"
// p.showInMultipleColumns: "Show in multiple columns" => "Mostra in più colonne"
// p.totalMaximumFractionDigits: "Total maximum fraction digits" => "Cifre totali della frazione massima"
// p.totalMinimumFractionDigits: "Total minimum fraction digits" => "Cifre di frazione minima totale"
// p.detailElements: "Detail elements" => "Elementi di dettaglio"
// p.allowAdaptiveActions: "Allow adaptive actions" => "Consenti azioni adattive"
// p.choicesLazyLoadEnabled: "Choices lazy load enabled" => "Scelte lazy load abilitate"
// p.choicesLazyLoadPageSize: "Choices lazy load page size" => "Scelte lazy load dimensione della pagina"
// p.inputFieldComponent: "Input field component" => "Componente del campo di input"
// p.itemComponent: "Item component" => "Componente dell'articolo"
// p.elements: "Elements" => "Elementi"
// p.content: "Content" => "Contenuto"
// p.longTap: "Long tap" => "Tocco prolungato"
// p.allowResize: "Allow resizing" => "Consenti ridimensionamento"
// p.acceptCarriageReturn: "Accept carriage return" => "Accetta la restituzione in capo"
// p.displayMode: "Display mode" => "Modalità di visualizzazione"
// p.rateType: "Rate type" => "Tipo di tariffa"
// p.altText: "Alt text" => "Testo alternativo"
// p.templateElements: "Template elements" => "Elementi del modello"
// p.operator: "Operator" => "Operatore"
// p.isVariable: "Is variable" => "È variabile"
// p.runExpression: "Run expression" => "Esegui espressione"
// p.precision: "Precision" => "Precisione"
// p.matrixDragHandleArea: "Matrix drag handle area" => "Area della maniglia di trascinamento della matrice"
// p.backgroundImage: "Background image" => "Immagine di sfondo"
// p.backgroundImageFit: "Background image fit" => "Adattamento dell'immagine di sfondo"
// p.backgroundImageAttachment: "Background image attachment" => "Allegato immagine di sfondo"
// p.backgroundOpacity: "Background opacity" => "Opacità dello sfondo"
// p.selectToRankEnabled: "Select to rank enabled" => "Seleziona per classificare abilitato"
// p.selectToRankAreasLayout: "Select to rank areas layout" => "Selezionare per classificare il layout delle aree"
// p.allowCameraAccess: "Allow camera access" => "Consenti accesso alla videocamera"
// p.scaleColorMode: "Scale color mode" => "Modalità scala colore"
// p.rateColorMode: "Rate color mode" => "Valuta la modalità colore"
// p.templateTabTitle: "Template tab title" => "Titolo della scheda Modello"
// p.templateVisibleIf: "Template visible if" => "Modello visibile se"
// p.copyDisplayValue: "Copy display value" => "Copia valore di visualizzazione"
// theme.--background: "Background color" => "Colore di sfondo"
// theme.--background-dim-light: "Background dim light color" => "Colore della luce fioca dello sfondo"
// theme.--primary-foreground: "Primary foreground color" => "Colore di primo piano primario"
// theme.--foreground: "Foreground color" => "Colore di primo piano"
// theme.--base-unit: "Base unit" => "Unità base"
// theme.groupAdvanced: "Advanced" => "Avanzato"
// theme.themeName: "Theme" => "Tema"
// theme.isPanellessss: "Question appearance" => "Aspetto della domanda"
// theme.isPanellessPanels: "Default" => "Default"
// theme.isPanellessLightweight: "Without Panels" => "Senza pannelli"
// theme.themePaletteLight: "Light" => "Leggero"
// theme.themePaletteDark: "Dark" => "Oscuro"
// theme.primaryColor: "Accent color" => "Colore principale"
// theme.primaryDefaultColor: "Default" => "Default"
// theme.primaryDarkColor: "Hover" => "Fluttuare"
// theme.primaryLightColor: "Selected" => "Selezionato"
// theme.backgroundDimColor: "Background color" => "Colore di sfondo"
// theme.backgroundImage: "Background image" => "Immagine di sfondo"
// theme.backgroundImageFitAuto: "Auto" => "Automatico"
// theme.backgroundImageFitCover: "Cover" => "Coprire"
// theme.backgroundImageFitContain: "Contain" => "Contenere"
// theme.backgroundOpacity: "Opacity" => "Opacità"
// theme.backgroundImageAttachmentFixed: "Fixed" => "Fissato"
// theme.backgroundImageAttachmentScroll: "Scroll" => "Scorrere"
// theme.panelBackgroundTransparency: "Panel background opacity" => "Opacità dello sfondo del pannello"
// theme.questionBackgroundTransparency: "Question background opacity" => "Opacità dello sfondo della domanda"
// theme.questionPanel: "Panel background and corner radius" => "Sfondo del pannello e raggio d'angolo"
// theme.questionTitle: "Question title font" => "Tipo di carattere del titolo della domanda"
// theme.questionDescription: "Question description font" => "Carattere della descrizione della domanda"
// theme.editorPanel: "Input element" => "Elemento di input"
// theme.editorFont: "Input element font" => "Tipo di carattere dell'elemento di input"
// theme.backcolor: "Default background" => "Sfondo predefinito"
// theme.hovercolor: "Hover background" => "Sfondo al passaggio del mouse"
// theme.borderDecoration: "Border decoration" => "Decorazione del bordo"
// theme.accentBackground: "Accent background" => "Sfondo principale"
// theme.accentForeground: "Accent foreground" => "Primo piano in primo piano"
// theme.primaryForecolor: "Default color" => "Colore predefinito"
// theme.primaryForecolorLight: "Disabled color" => "Colore disabilitato"
// theme.linesColors: "Minor line colors" => "Colori di linea secondari"
// theme.borderDefault: "Darker" => "Scuro"
// theme.borderLight: "Lighter" => "Accendino"
// theme.fontFamily: "Font family" => "Famiglia di caratteri"
// theme.fontSize: "Font size" => "Dimensione del carattere"
// theme.color: "Color" => "Colore"
// theme.size: "Size" => "Grandezza"
// theme.fontWeightRegular: "Regular" => "Regolare"
// theme.fontWeightHeavy: "Heavy" => "Pesante"
// theme.fontWeightSemiBold: "Semi-bold" => "Semi-grassetto"
// theme.fontWeightBold: "Bold" => "Audace"
// theme.scale: "Scale" => "Scala"
// theme.cornerRadius: "Corner radius" => "Raggio d'angolo"
// theme.surveyTitleFont: "Survey title font" => "Carattere del titolo del sondaggio"
// theme.pageTitle: "Page title font" => "Carattere del titolo della pagina"
// theme.pageDescription: "Page description font" => "Carattere della descrizione della pagina"
// theme.boxShadowX: "X" => "X"
// theme.boxShadowY: "Y" => "Y"
// theme.boxShadowAddRule: "Add Shadow Effect" => "Aggiungi effetto ombra"
// theme.opacity: "Opacity" => "Opacità"
// theme.boxShadowBlur: "Blur" => "Sfocatura"
// theme.boxShadowSpread: "Spread" => "Diffusione"
// theme.boxShadowDrop: "Drop" => "Goccia"
// theme.boxShadowInner: "Inner" => "Interno"
// theme.questionShadow: "Shadow effects" => "Effetti ombra"
// theme.editorShadow: "Input element shadow effects" => "Effetti di ombreggiatura dell'elemento di input"
// names.default: "Default" => "Default"
// names.contrast: "Contrast" => "Contrasto"
// names.plain: "Plain" => "Pianura"
// names.simple: "Simple" => "Semplice"
// names.blank: "Blank" => "Vuoto"
// names.double: "Double" => "Doppio"
// names.bulk: "Bulk" => "Massa"
// names.pseudo-3d: "Pseudo 3D" => "Pseudo 3D"
// names.playful: "Playful" => "Giocoso"
// names.ultra: "Ultra" => "Ultra"
// colors.teal: "Teal" => "Color foglia di tè"
// colors.blue: "Blue" => "Blu"
// colors.purple: "Purple" => "Porpora"
// colors.orchid: "Orchid" => "Orchidea"
// colors.tulip: "Tulip" => "Tulipano"
// colors.brown: "Brown" => "Marrone"
// colors.green: "Green" => "Verde"
// names.sharp: "Sharp" => "Affilato"
// names.borderless: "Borderless" => "Borderless"
// names.flat: "Flat" => "Appartamento"
// names.doubleborder: "Double Border" => "Doppio bordo"
// names.layered: "Layered" => "Stratificato"
// names.solid: "Solid" => "Solido"
// names.threedimensional: "3D" => ".3D"
// ed.translationDeleteLanguage: "Are you certain you wish to delete all strings for this language?" => "Sei sicuro di voler eliminare tutte le stringhe per questa lingua?"
// ed.themeResetButton: "Reset theme settings to default" => "Ripristina le impostazioni del tema predefinite"
// theme.placeholderColor: "Placeholder color" => "Colore segnaposto"
// ed.themeSettings: "Theme Settings" => "Impostazioni del tema"
// ed.themeSettingsTooltip: "Open theme settings" => "Apri le impostazioni del tema"
// pe.resetToDefaultCaption: "Reset" => "Resettare"
// pv.file: "Local files" => "File locali"
// pv.camera: "Camera" => "Macchina fotografica"
// pv.file-camera: "Local files or camera" => "File locali o fotocamera"
// ed.translateUsigAI: "Auto-translate All" => "Traduzione automatica di tutto"
// ed.translationDialogTitle: "Untranslated strings" => "Stringhe non tradotte"
// pe.fastEntryChoicesMinCountError: "Please enter at least {0} items" => "Inserisci almeno {0} elementi"
// lg.question_resetValueName: "Reset question value" => "Reimpostare il valore della domanda"
// lg.column_resetValue: "Reset column value" => "Reimposta valore colonna"
// pe.markRequired: "Mark as required" => "Contrassegna come richiesto"
// pe.removeRequiredMark: "Remove the required mark" => "Rimuovere il segno richiesto"
// p.resetValueIf: "Reset value if" => "Reimposta valore se"
// lg.question_setValueName: "Set question value" => "Impostare il valore della domanda"
// lg.column_resetValueName: "Reset column value" => "Reimposta valore colonna"
// lg.column_setValueName: "Set column value" => "Impostare il valore della colonna"
// lg.setValueExpressionPlaceholder: " An expression whose result will be assigned to the target question." => " Espressione il cui risultato verrà assegnato alla domanda di destinazione."
// survey.title: "Title" => "Titolo"
// page.title: "Title" => "Titolo"
// p.setValueIf: "Set value if" => "Imposta valore se"
// theme.header: "Header" => "Intestazione"
// theme.backgroundImageFitFill: "Stretch" => "Stendere"
// theme.backgroundImageFitTile: "Tile" => "Tegola"
// theme.headerView: "View" => "Vista"
// theme.headerViewBasic: "Basic" => "Basico"
// theme.headerViewAdvanced: "Advanced" => "Avanzato"
// theme.headerInheritWidthFrom: "Content area width" => "Larghezza dell'area di contenuto"
// theme.headerInheritWidthFromSurvey: "Same as survey" => "Come il sondaggio"
// theme.headerInheritWidthFromPage: "Fit to page" => "Adatta alla pagina"
// theme.headerTextAreaWidth: "Text width" => "Larghezza del testo"
// theme.headerBackgroundColorSwitch: "Background color" => "Colore di sfondo"
// theme.headerBackgroundColorNone: "None" => "Nessuno"
// theme.headerBackgroundColorAccentColor: "Accent color" => "Colore principale"
// theme.headerBackgroundColorCustom: "Custom" => "Costume"
// theme.horizontalAlignmentLeft: "Left" => "A sinistra"
// theme.horizontalAlignmentCenter: "Center" => "Centro"
// theme.horizontalAlignmentRight: "Right" => "A destra"
// theme.verticalAlignmentTop: "Top" => "In alto"
// theme.verticalAlignmentMiddle: "Middle" => "Mezzo"
// theme.verticalAlignmentBottom: "Bottom" => "Fondoschiena"
// theme.logoPosition: "Logo Position" => "Posizione del logo"
// theme.headerTitlePosition: "Title Position" => "Posizione del titolo"
// lg.question_resetValueText: "reset value for question: {0}" => "Valore di ripristino per la domanda: {0}"
// lg.question_setValueText: "assign value: {1} to question: {0}" => "Assegna valore: {1} alla domanda: {0}"
// lg.column_resetValueText: "reset cell value for column: {0}" => "Reimposta il valore della cella per la colonna: {0}"
// lg.column_setValueText: "assign cell value: {1} to column: {0}" => "Assegna valore cella: {1} alla colonna: {0}"
// ed.surveyJsonExportButton: "Export" => "Esportazione"
// ed.surveyJsonImportButton: "Import" => "Importazione"
// ed.surveyJsonCopyButton: "Copy to clipboard" => "Copia negli Appunti"
// pe.filePlaceholder: "File placeholder text" => "Testo segnaposto del file"
// pe.photoPlaceholder: "Photo placeholder text" => "Testo segnaposto foto"
// pe.fileOrPhotoPlaceholder: "File or photo placeholder text" => "Testo segnaposto per file o foto"
// pehelp.filePlaceholder: "Applies when \"Source type\" is \"Local files\" or when camera is unavailable" => "Si applica quando \"Tipo di origine\" è \"File locali\" o quando la fotocamera non è disponibile"
// pehelp.photoPlaceholder: "Applies when \"Source type\" is \"Camera\"." => "Si applica quando \"Tipo di sorgente\" è \"Fotocamera\"."
// pehelp.fileOrPhotoPlaceholder: "Applies when \"Source type\" is \"Local files or camera\"." => "Si applica quando \"Tipo di origine\" è \"File locali o fotocamera\"."
// theme.background: "Background" => "Sfondo"
// theme.appearance: "Appearance" => "Apparenza"
// ed.themeResetConfirmation: "Do you really want to reset the theme? All your customizations will be lost." => "Vuoi davvero resettare il tema? Tutte le tue personalizzazioni andranno perse."
// ed.themeResetConfirmationOk: "Yes, reset the theme" => "Sì, reimposta il tema"
// theme.headerInheritWidthFromContainer: "Fit to container" => "Adatto al contenitore"
// signaturepad.showPlaceholder: "Show the placeholder" => "Visualizzare il segnaposto"
// signaturepad.placeholder: "Placeholder text" => "Testo segnaposto"
// theme.surveyDescriptionFont: "Survey description font" => "Carattere della descrizione dell'indagine"

// ed.prevFocus: "Focus previous" => "Focus precedente"
// ed.nextFocus: "Focus next" => "Focus successivo"
// ed.saveTheme: "Save Theme" => "Salva tema"
// ed.saveThemeTooltip: "Save Theme" => "Salva tema"
// lg.page_requireName: "Make page required" => "Rendi la pagina obbligatoria"
// lg.panel_requireName: "Make page required" => "Rendi la pagina obbligatoria"
// signaturepad.signatureWidth: "Signature area width" => "Larghezza dell'area della firma"
// signaturepad.signatureHeight: "Signature area height" => "Altezza dell'area della firma"
// signaturepad.signatureAutoScaleEnabled: "Auto-scale the signature area" => "Ridimensionamento automatico dell'area della firma"
// signaturepad.penMinWidth: "Minimum pen width" => "Larghezza minima della penna"
// signaturepad.penMaxWidth: "Maximum pen width" => "Larghezza massima della penna"
// theme.headerDescriptionPosition: "Description position" => "Descrizione posizione"
// ed.propertyGridNoResultsFound: "No results found" => "Nessun risultato trovato"
// pv.leftRight: "Left and right" => "Destra e sinistra"
// p.sourceType: "Source type" => "Tipo di origine"
// p.fitToContainer: "Fit to container" => "Adatto al contenitore"
// p.setValueExpression: "Set value expression" => "Espressione del valore impostato"
// ed.choicesLoadedFromWebText: "Choices are loaded from a web service." => "Le scelte vengono caricate da un servizio Web."
// ed.choicesLoadedFromWebLinkText: "Go to settings" => "Vai alle impostazioni"
// ed.choicesLoadedFromWebPreviewTitle: "Preview of loaded choice options" => "Anteprima delle opzioni di scelta caricate"
// pe.eachRowUnique: "Prevent duplicate responses in rows" => "Impedisci risposte duplicate nelle righe"
// theme.advancedMode: "Advanced mode" => "Modalità avanzata"
// theme.backgroundCornerRadius: "Background and corner radius" => "Sfondo e raggio d'angolo"
// theme.colorsTitle: "Colors" => "Colori"
// theme.font: "Font" => "Font"
// theme.lines: "Lines" => "Poema"
// theme.titleFont: "Title font" => "Carattere del titolo"
// theme.descriptionFont: "Description font" => "Carattere di descrizione"
// theme.shadow: "Shadow effects" => "Effetti ombra"
// ed.translateUsigAIFrom: "Translate from: " => "Traduci da: "
// pe.showRefuseItem: "Allow the Refuse to Answer option" => "Consenti l'opzione Rifiuta di rispondere"
// pe.showDontKnowItem: "Allow the Don't Know option" => "Consenti l'opzione Non so"
// pe.showRefuseItem: "Allow the Refuse to Answer option" => "Consenti l'opzione Rifiuta di rispondere"
// pe.showDontKnowItem: "Allow the Don't Know option" => "Consenti l'opzione Non so"
// pv.contain: "Contain" => "Contenere"
// pv.cover: "Cover" => "Coprire"
// pv.fill: "Fill" => "Riempire"

// pe.transposeData: "Transpose rows to columns" => "Trasponi righe in colonne"
// layout.panel: "Layout" => "Impaginazione"
// layout.question: "Layout" => "Impaginazione"
// layout.base: "Layout" => "Impaginazione"
// panel.name: "Panel name" => "Nome del pannello"
// panel.title: "Panel title" => "Titolo del panel"
// panel.description: "Panel description" => "Descrizione del pannello"
// panel.visibleIf: "Make the panel visible if" => "Rendi visibile il pannello se"
// panel.requiredIf: "Make the panel required if" => "Rendere il pannello richiesto se"
// panel.questionOrder: "Question order within the panel" => "Ordine delle domande all'interno del panel"
// panel.startWithNewLine: "Display the panel on a new line" => "Visualizzare il pannello su una nuova riga"
// panel.state: "Panel collapse state" => "Stato di compressione del pannello"
// panel.width: "Inline panel width" => "Larghezza del pannello in linea"
// panel.minWidth: "Minimum panel width" => "Larghezza minima del pannello"
// panel.maxWidth: "Maximum panel width" => "Larghezza massima del pannello"
// paneldynamic.name: "Panel name" => "Nome del pannello"
// paneldynamic.title: "Panel title" => "Titolo del panel"
// paneldynamic.description: "Panel description" => "Descrizione del pannello"
// paneldynamic.visibleIf: "Make the panel visible if" => "Rendi visibile il pannello se"
// paneldynamic.requiredIf: "Make the panel required if" => "Rendere il pannello richiesto se"
// paneldynamic.page: "Move the panel to page" => "Sposta il pannello nella pagina"
// paneldynamic.startWithNewLine: "Display the panel on a new line" => "Visualizzare il pannello su una nuova riga"
// paneldynamic.state: "Panel collapse state" => "Stato di compressione del pannello"
// paneldynamic.width: "Inline panel width" => "Larghezza del pannello in linea"
// paneldynamic.minWidth: "Minimum panel width" => "Larghezza minima del pannello"
// paneldynamic.maxWidth: "Maximum panel width" => "Larghezza massima del pannello"
// paneldynamic.templateDescription: "Panel description pattern" => "Modello di descrizione del pannello"
// paneldynamic.templateTitle: "Panel title pattern" => "Pattern titolo pannello"
// paneldynamic.noEntriesText: "Empty panel text" => "Testo del pannello vuoto"
// paneldynamic.templateTabTitle: "Tab title pattern" => "Modello del titolo della tabulazione"
// paneldynamic.templateVisibleIf: "Make an individual panel visible if" => "Rendi visibile un singolo pannello se"
// paneldynamic.hideNumber: "Hide the panel number" => "Nascondere il numero del pannello"
// paneldynamic.titleLocation: "Panel title alignment" => "Allineamento del titolo del pannello"
// paneldynamic.descriptionLocation: "Panel description alignment" => "Allineamento della descrizione del pannello"
// paneldynamic.templateQuestionTitleLocation: "Question title alignment" => "Allineamento del titolo della domanda"
// paneldynamic.templateErrorLocation: "Error message alignment" => "Allineamento dei messaggi di errore"
// paneldynamic.newPanelPosition: "New panel location" => "Nuova posizione del pannello"
// paneldynamic.keyName: "Prevent duplicate responses in the following question" => "Impedisci risposte duplicate nella seguente domanda"
// question.name: "Question name" => "Nome della domanda"
// question.title: "Question title" => "Titolo della domanda"
// question.description: "Question description" => "Descrizione della domanda"
// question.visibleIf: "Make the question visible if" => "Rendi visibile la domanda se"
// question.requiredIf: "Make the question required if" => "Rendi la domanda richiesta se"
// question.state: "Question box collapse state" => "Stato di compressione della casella delle domande"
// question.hideNumber: "Hide the question number" => "Nascondi il numero della domanda"
// question.titleLocation: "Question title alignment" => "Allineamento del titolo della domanda"
// question.descriptionLocation: "Question description alignment" => "Allineamento della descrizione della domanda"
// question.errorLocation: "Error message alignment" => "Allineamento dei messaggi di errore"
// question.indent: "Increase the inner indent" => "Aumentare il rientro interno"
// question.width: "Inline question width" => "Larghezza della domanda in linea"
// question.minWidth: "Minimum question width" => "Larghezza minima della domanda"
// question.maxWidth: "Maximum question width" => "Larghezza massima della domanda"
// question.textUpdateMode: "Update input field value" => "Aggiorna il valore del campo di input"
// signaturepad.allowClear: "Show the Clear button within signature area" => "Mostra il pulsante Cancella all'interno dell'area della firma"
// signaturepad.penColor: "Stroke color" => "Colore del tratto"
// comment.rows: "Input field height (in lines)" => "Altezza del campo di immissione (in righe)"
// expression.name: "Expression name" => "Nome dell'espressione"
// expression.title: "Expression title" => "Titolo dell'espressione"
// expression.description: "Expression description" => "Descrizione dell'espressione"
// expression.expression: "Expression" => "Espressione"
// trigger.expression: "Expression" => "Espressione"
// calculatedvalue.expression: "Expression" => "Espressione"
// survey.description: "Survey description" => "Descrizione dell'indagine"
// page.name: "Page name" => "Nome della pagina"
// page.description: "Page description" => "Descrizione della pagina"
// page.visibleIf: "Make the page visible if" => "Rendi visibile la pagina se"
// page.requiredIf: "Make the page required if" => "Rendi la pagina obbligatoria se"
// page.questionOrder: "Question order on the page" => "Ordine delle domande nella pagina"
// matrixdropdowncolumn.name: "Column name" => "Nome della colonna"
// matrixdropdowncolumn.title: "Column title" => "Titolo della colonna"
// matrixdropdowncolumn.isUnique: "Prevent duplicate responses" => "Impedisci risposte duplicate"
// matrixdropdowncolumn.width: "Column width" => "Larghezza colonna"
// matrixdropdowncolumn.minWidth: "Minimum column width" => "Larghezza minima della colonna"
// matrixdropdowncolumn.rows: "Input field height (in lines)" => "Altezza del campo di immissione (in righe)"
// matrixdropdowncolumn.visibleIf: "Make the column visible if" => "Rendi visibile la colonna se"
// matrixdropdowncolumn.requiredIf: "Make the column required if" => "Rendere obbligatoria la colonna se"
// matrixdropdowncolumn.showInMultipleColumns: "Each option in a separate column" => "Ogni opzione in una colonna separata"
// multipletextitem.name: "Name" => "Nome"
// multipletextitem.title: "Title" => "Titolo"
// pe.rateDescriptionLocation: "Label alignment" => "Allineamento delle etichette"
// pe.cellErrorLocation: "Cell error message alignment" => "Allineamento dei messaggi di errore delle celle"
// pe.listIsEmpty@columns: "You don't have any columns yet" => "Non hai ancora colonne"
// pe.listIsEmpty@rows: "You don't have any rows yet" => "Non ci sono ancora righe"
// pe.listIsEmpty@validators: "You don't have any validation rules yet" => "Non si dispone ancora di regole di convalida"
// pe.listIsEmpty@calculatedValues: "You don't have any custom variables yet" => "Non disponi ancora di variabili personalizzate"
// pe.listIsEmpty@triggers: "You don't have any triggers yet" => "Non hai ancora alcun trigger"
// pe.listIsEmpty@navigateToUrlOnCondition: "You don't have any links yet" => "Non hai ancora nessun link"
// pe.addNew@columns: "Add new column" => "Aggiungi nuova colonna"
// pe.addNew@rows: "Add new row" => "Aggiungi nuova riga"
// pe.addNew@validators: "Add new rule" => "Aggiunta di una nuova regola"
// pe.addNew@calculatedValues: "Add new variable" => "Aggiunta di una nuova variabile"
// pe.addNew@triggers: "Add new trigger" => "Aggiungere un nuovo trigger"
// pe.addNew@navigateToUrlOnCondition: "Add new URL" => "Aggiungi nuovo URL"
// choicesbyurl.url: "Web service's URL" => "URL del servizio Web"
// pe.progressBarShowPageTitles: "Display page titles in progress bar" => "Visualizzare i titoli delle pagine nella barra di avanzamento"
// pe.progressBarShowPageNumbers: "Display page numbers in progress bar" => "Visualizzare i numeri di pagina nella barra di avanzamento"
// itemvalue.visibleIf: "Make the option visible if" => "Rendi visibile l'opzione se"
// itemvalue.enableIf: "Make the option selectable if" => "Rendere l'opzione selezionabile se"
// panel.layout: "Panel Layout" => "Layout del pannello"
// tabs.questionSettings: "Question Settings" => "Impostazioni delle domande"
// pe.url_placeholder: "Ex.: https://api.example.com/books" => "Es.: https://api.example.com/books"
// pe.path_placeholder: "Ex.: categories.fiction" => "Es.: categories.fiction"
// pe.questionStartIndex_placeholder: "Ex.: a)" => "Es.: a)"
// pe.width_placeholder: "Ex.: 6in" => "Es.: 6 pollici"
// pe.minWidth_placeholder: "Ex.: 600px" => "Es.: 600px"
// pe.maxWidth_placeholder: "Ex.: 50%" => "Es.: 50%"
// pv.selected: "Selected" => "Selezionato"
// pv.unselected: "Unselected" => "Deselezionata"
// pv.center: "Center" => "Centro"
// pv.middle: "Middle" => "Mezzo"
// pv.next: "Next" => "Prossimo"
// pv.last: "Last" => "Ultimo"
// clearIfInvisible.none: "Never" => "Mai"
// questionsOnPageMode.standard: "Original structure" => "Struttura originale"
// questionsOnPageMode.singlePage: "Show all questions on one page" => "Mostra tutte le domande in un'unica pagina"
// questionsOnPageMode.questionPerPage: "Show single question per page" => "Mostra una singola domanda per pagina"
// pv.auto: "Auto" => "Automatico"
// panelsState.firstExpanded: "First expanded" => "Prima espansione"
// rateColorMode.scale: "Scale" => "Scala"
// scaleColorMode.monochrome: "Monochrome" => "Monocromatico"
// scaleColorMode.colored: "Colored" => "Colorato"
// state.default: "Locked" => "Bloccato"
// showQuestionNumbers.default: "Auto-numbering" => "Numerazione automatica"
// showQuestionNumbers.on: "Auto-numbering" => "Numerazione automatica"
// showQuestionNumbers.onPage: "Reset on each page" => "Ripristina su ogni pagina"
// showQuestionNumbers.onpanel: "Reset on each panel" => "Ripristina su ogni pannello"
// showQuestionNumbers.onPanel: "Reset on each panel" => "Ripristina su ogni pannello"
// showQuestionNumbers.onSurvey: "Continue across the survey" => "Continua con l'indagine"
// showQuestionNumbers.off: "No numbering" => "Nessuna numerazione"
// descriptionLocation.underTitle: "Under the question title" => "Sotto il titolo della domanda"
// descriptionLocation.underInput: "Under the input field" => "Sotto il campo di immissione"
// selectToRankAreasLayout.horizontal: "Next to choices" => "Accanto alle scelte"
// selectToRankAreasLayout.vertical: "Above choices" => "Scelte di cui sopra"
// displayStyle.decimal: "Decimal" => "Decimale"
// displayStyle.currency: "Currency" => "Valuta"
// displayStyle.percent: "Percentage" => "Percentuale"
// displayStyle.date: "Date" => "Dattero"
// totalDisplayStyle.decimal: "Decimal" => "Decimale"
// totalDisplayStyle.currency: "Currency" => "Valuta"
// totalDisplayStyle.percent: "Percentage" => "Percentuale"
// totalDisplayStyle.date: "Date" => "Dattero"
// rowOrder.initial: "Original" => "Originale"
// questionOrder.initial: "Original" => "Originale"
// showProgressBar.aboveheader: "Above the header" => "Sopra l'intestazione"
// showProgressBar.belowheader: "Below the header" => "Sotto l'intestazione"
// pv.sum: "Sum" => "Somma"
// pv.count: "Count" => "Contare"
// pv.min: "Min" => "Min"
// pv.max: "Max" => "Max"
// pv.avg: "Avg" => "Medio"
// searchMode.contains: "Contains" => "Contiene"
// searchMode.startsWith: "Starts with" => "Inizia con"
// panel.name: "A panel ID that is not visible to respondents." => "Un ID pannello che non è visibile ai rispondenti."
// panel.description: "Type a panel subtitle." => "Digita un sottotitolo del pannello."
// panel.visibleIf: "Use the magic wand icon to set a conditional rule that determines panel visibility." => "Utilizzare l'icona della bacchetta magica per impostare una regola condizionale che determina la visibilità del pannello."
// panel.enableIf: "Use the magic wand icon to set a conditional rule that disables the read-only mode for the panel." => "Utilizzare l'icona della bacchetta magica per impostare una regola condizionale che disabiliti la modalità di sola lettura per il pannello."
// panel.requiredIf: "Use the magic wand icon to set a conditional rule that prevents survey submission unless at least one nested question has an answer." => "Utilizza l'icona della bacchetta magica per impostare una regola condizionale che impedisca l'invio dell'indagine a meno che almeno una domanda nidificata non abbia una risposta."
// panel.questionTitleLocation: "Applies to all questions within this panel. If you want to override this setting, define title alignment rules for individual questions. The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Top\" by default)." => "Si applica a tutte le domande all'interno di questo pannello. Se si desidera ignorare questa impostazione, definire le regole di allineamento del titolo per le singole domande. L'opzione \"Eredita\" applica l'impostazione a livello di pagina (se impostata) o a livello di indagine (\"In alto\" per impostazione predefinita)."
// panel.questionErrorLocation: "Sets the location of an error message in relation to all questions within the panel. The \"Inherit\" option applies the page-level (if set) or survey-level setting." => "Imposta la posizione di un messaggio di errore in relazione a tutte le domande all'interno del pannello. L'opzione \"Eredita\" applica l'impostazione a livello di pagina (se impostata) o a livello di indagine."
// panel.questionOrder: "Keeps the original order of questions or randomizes them. The \"Inherit\" option applies the page-level (if set) or survey-level setting." => "Mantiene l'ordine originale delle domande o le rende casuali. L'opzione \"Eredita\" applica l'impostazione a livello di pagina (se impostata) o a livello di indagine."
// panel.page: "Repositions the panel to the end of a selected page." => "Riposiziona il pannello alla fine di una pagina selezionata."
// panel.innerIndent: "Adds space or margin between the panel content and the left border of the panel box." => "Aggiunge spazio o margine tra il contenuto del pannello e il bordo sinistro del riquadro del pannello."
// panel.startWithNewLine: "Unselect to display the panel in one line with the previous question or panel. The setting doesn't apply if the panel is the first element in your form." => "Deselezionare questa opzione per visualizzare il pannello in una riga con la domanda o il pannello precedente. L'impostazione non si applica se il pannello è il primo elemento del modulo."
// panel.state: "Choose from: \"Expanded\" - the panel is displayed in full and can be collapsed; \"Collapsed\" - the panel displays only the title and description and can be expanded; \"Locked\" - the panel is displayed in full and cannot be collapsed." => "Scegli tra: \"Espanso\" - il pannello viene visualizzato per intero e può essere compresso; \"Compresso\" - il pannello visualizza solo il titolo e la descrizione e può essere espanso; \"Bloccato\": il pannello viene visualizzato per intero e non può essere compresso."
// panel.width: "Sets the width of the panel in proportion to other survey elements in the same line. Accepts CSS values (px, %, in, pt, etc.)." => "Imposta la larghezza del pannello in proporzione agli altri elementi di rilievo nella stessa linea. Accetta valori CSS (px, %, in, pt, ecc.)."
// paneldynamic.name: "A panel ID that is not visible to respondents." => "Un ID pannello che non è visibile ai rispondenti."
// paneldynamic.description: "Type a panel subtitle." => "Digita un sottotitolo del pannello."
// paneldynamic.visibleIf: "Use the magic wand icon to set a conditional rule that determines panel visibility." => "Utilizzare l'icona della bacchetta magica per impostare una regola condizionale che determina la visibilità del pannello."
// paneldynamic.enableIf: "Use the magic wand icon to set a conditional rule that disables the read-only mode for the panel." => "Utilizzare l'icona della bacchetta magica per impostare una regola condizionale che disabiliti la modalità di sola lettura per il pannello."
// paneldynamic.requiredIf: "Use the magic wand icon to set a conditional rule that prevents survey submission unless at least one nested question has an answer." => "Utilizza l'icona della bacchetta magica per impostare una regola condizionale che impedisca l'invio dell'indagine a meno che almeno una domanda nidificata non abbia una risposta."
// paneldynamic.templateQuestionTitleLocation: "Applies to all questions within this panel. If you want to override this setting, define title alignment rules for individual questions. The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Top\" by default)." => "Si applica a tutte le domande all'interno di questo pannello. Se si desidera ignorare questa impostazione, definire le regole di allineamento del titolo per le singole domande. L'opzione \"Eredita\" applica l'impostazione a livello di pagina (se impostata) o a livello di indagine (\"In alto\" per impostazione predefinita)."
// paneldynamic.templateErrorLocation: "Sets the location of an error message in relation to a question with invalid input. Choose between: \"Top\" - an error text is placed at the top of the question box; \"Bottom\" - an error text is placed at the bottom of the question box. The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Top\" by default)." => "Imposta la posizione di un messaggio di errore in relazione a una domanda con input non valido. Scegli tra: \"In alto\" - un testo di errore viene posizionato nella parte superiore della casella della domanda; \"In basso\": un testo di errore viene inserito nella parte inferiore della casella della domanda. L'opzione \"Eredita\" applica l'impostazione a livello di pagina (se impostata) o a livello di indagine (\"In alto\" per impostazione predefinita)."
// paneldynamic.errorLocation: "Sets the location of an error message in relation to all questions within the panel. The \"Inherit\" option applies the page-level (if set) or survey-level setting." => "Imposta la posizione di un messaggio di errore in relazione a tutte le domande all'interno del pannello. L'opzione \"Eredita\" applica l'impostazione a livello di pagina (se impostata) o a livello di indagine."
// paneldynamic.page: "Repositions the panel to the end of a selected page." => "Riposiziona il pannello alla fine di una pagina selezionata."
// paneldynamic.innerIndent: "Adds space or margin between the panel content and the left border of the panel box." => "Aggiunge spazio o margine tra il contenuto del pannello e il bordo sinistro del riquadro del pannello."
// paneldynamic.startWithNewLine: "Unselect to display the panel in one line with the previous question or panel. The setting doesn't apply if the panel is the first element in your form." => "Deselezionare questa opzione per visualizzare il pannello in una riga con la domanda o il pannello precedente. L'impostazione non si applica se il pannello è il primo elemento del modulo."
// paneldynamic.state: "Choose from: \"Expanded\" - the panel is displayed in full and can be collapsed; \"Collapsed\" - the panel displays only the title and description and can be expanded; \"Locked\" - the panel is displayed in full and cannot be collapsed." => "Scegli tra: \"Espanso\" - il pannello viene visualizzato per intero e può essere compresso; \"Compresso\" - il pannello visualizza solo il titolo e la descrizione e può essere espanso; \"Bloccato\": il pannello viene visualizzato per intero e non può essere compresso."
// paneldynamic.width: "Sets the width of the panel in proportion to other survey elements in the same line. Accepts CSS values (px, %, in, pt, etc.)." => "Imposta la larghezza del pannello in proporzione agli altri elementi di rilievo nella stessa linea. Accetta valori CSS (px, %, in, pt, ecc.)."
// paneldynamic.templateTitle: "Type in a template for dynamic panel titles. Use {panelIndex} for the panel's general position and {visiblePanelIndex} for its order among visible panels. Insert these placeholders into the pattern to add automatic numbering." => "Digita un modello per i titoli dei pannelli dinamici. Utilizzare {panelIndex} per la posizione generale del pannello e {visiblePanelIndex} per l'ordine tra i pannelli visibili. Inserire questi segnaposto nel motivo per aggiungere la numerazione automatica."
// paneldynamic.templateTabTitle: "Type in a template for tab titles. Use {panelIndex} for a panel's general position and {visiblePanelIndex} for its order among visible panels. Insert these placeholders into the pattern to add automatic numbering." => "Digita un modello per i titoli delle schede. Utilizzate {panelIndex} per la posizione generale di un pannello e {visiblePanelIndex} per l'ordine tra i pannelli visibili. Inserire questi segnaposto nel motivo per aggiungere la numerazione automatica."
// paneldynamic.templateVisibleIf: "This setting allows you to control the visibility of individual panels within the dynamic panel. Use the `{panel}` placeholder to reference the current panel in your expression." => "Questa impostazione consente di controllare la visibilità dei singoli pannelli all'interno del pannello dinamico. Utilizzare il segnaposto '{panel}' per fare riferimento al pannello corrente nell'espressione."
// paneldynamic.titleLocation: "This setting is automatically inherited by all questions within this panel. If you want to override this setting, define title alignment rules for individual questions. The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Top\" by default)." => "Questa impostazione viene ereditata automaticamente da tutte le domande all'interno di questo pannello. Se si desidera ignorare questa impostazione, definire le regole di allineamento del titolo per le singole domande. L'opzione \"Eredita\" applica l'impostazione a livello di pagina (se impostata) o a livello di indagine (\"In alto\" per impostazione predefinita)."
// paneldynamic.descriptionLocation: "The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Under the panel title\" by default)." => "L'opzione \"Eredita\" applica l'impostazione a livello di pagina (se impostata) o a livello di indagine (\"Sotto il titolo del pannello\" per impostazione predefinita)."
// paneldynamic.newPanelPosition: "Defines the position of a newly added panel. By default, new panels are added to the end. Select \"Next\" to insert a new panel after the current one." => "Definisce la posizione di un pannello appena aggiunto. Per impostazione predefinita, i nuovi pannelli vengono aggiunti alla fine. Selezionare \"Avanti\" per inserire un nuovo pannello dopo quello corrente."
// paneldynamic.copyDefaultValueFromLastEntry: "Duplicates answers from the last panel and assigns them to the next added dynamic panel." => "Duplica le risposte dall'ultimo pannello e le assegna al successivo pannello dinamico aggiunto."
// paneldynamic.keyName: "Reference a question name to require a user to provide a unique response for this question in each panel." => "Fai riferimento al nome di una domanda per richiedere a un utente di fornire una risposta univoca per questa domanda in ogni pannello."
// pehelp.defaultValueExpression: "This setting allows you to assign a default answer value based on an expression. The expression can include basic calculations - `{q1_id} + {q2_id}`, Boolean expressions, such as `{age} > 60`, and functions: `iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, etc. The value determined by this expression serves as the initial default value that can be overridden by a respondent's manual input." => "Questa impostazione consente di assegnare un valore di risposta predefinito in base a un'espressione. L'espressione può includere calcoli di base: '{q1_id} + {q2_id}', espressioni booleane, come '{age} > 60' e funzioni: 'iif()', 'today()', 'age()', 'min()', 'max()', 'avg()', ecc. Il valore determinato da questa espressione funge da valore predefinito iniziale che può essere sostituito dall'input manuale di un rispondente."
// pehelp.resetValueIf: "Use the magic wand icon to set a conditional rule that determines when a respondent's input is reset to the value based on the \"Default value expression\" or \"Set value expression\" or to the \"Default answer\" value (if either is set)." => "Utilizza l'icona della bacchetta magica per impostare una regola condizionale che determini quando l'input di un rispondente viene reimpostato sul valore in base all'\"Espressione del valore predefinito\" o \"Imposta espressione del valore\" o al valore \"Risposta predefinita\" (se uno dei due è impostato)."
// pehelp.setValueIf: "Use the magic wand icon to set a conditional rule that determines when to run the \"Set value expression\" and dynamically assign the resulting value as a response." => "Utilizzare l'icona della bacchetta magica per impostare una regola condizionale che determina quando eseguire l'espressione \"Imposta valore\" e assegnare dinamicamente il valore risultante come risposta."
// pehelp.setValueExpression: "Specify an expression that defines the value to be set when the conditions in the \"Set value if\" rule are met. The expression can include basic calculations - `{q1_id} + {q2_id}`, Boolean expressions, such as `{age} > 60`, and functions: `iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, etc. The value determined by this expression can be overridden by a respondent's manual input." => "Specificare un'espressione che definisca il valore da impostare quando vengono soddisfatte le condizioni della regola \"Imposta valore se\". L'espressione può includere calcoli di base: '{q1_id} + {q2_id}', espressioni booleane, come '{age} > 60' e funzioni: 'iif()', 'today()', 'age()', 'min()', 'max()', 'avg()', ecc. Il valore determinato da questa espressione può essere sovrascritto dall'input manuale di un rispondente."
// question.name: "A question ID that is not visible to respondents." => "Un ID domanda che non è visibile ai rispondenti."
// question.description: "Type a question subtitle." => "Digita il sottotitolo di una domanda."
// question.visibleIf: "Use the magic wand icon to set a conditional rule that determines question visibility." => "Usa l'icona della bacchetta magica per impostare una regola condizionale che determina la visibilità delle domande."
// question.enableIf: "Use the magic wand icon to set a conditional rule that disables the read-only mode for the question." => "Utilizza l'icona della bacchetta magica per impostare una regola condizionale che disabilita la modalità di sola lettura per la domanda."
// question.requiredIf: "Use the magic wand icon to set a conditional rule that prevents survey advancing or submission unless the question received an answer." => "Utilizza l'icona della bacchetta magica per impostare una regola condizionale che impedisca l'avanzamento o l'invio dell'indagine a meno che la domanda non riceva una risposta."
// question.startWithNewLine: "Unselect to display the question in one line with the previous question or panel. The setting doesn't apply if the question is the first element in your form." => "Deseleziona questa opzione per visualizzare la domanda in una riga con la domanda o il pannello precedente. L'impostazione non si applica se la domanda è il primo elemento del modulo."
// question.page: "Repositions the question to the end of a selected page." => "Riposiziona la domanda alla fine di una pagina selezionata."
// question.state: "Choose from: \"Expanded\" - the question box is displayed in full and can be collapsed; \"Collapsed\" - the question box displays only the title and description and can be expanded; \"Locked\" - the question box is displayed in full and cannot be collapsed." => "Scegli tra: \"Espandito\" - la casella della domanda viene visualizzata per intero e può essere compressa; \"Compresso\": la casella della domanda mostra solo il titolo e la descrizione e può essere espansa; \"Bloccata\": la casella della domanda viene visualizzata per intero e non può essere compressa."
// question.titleLocation: "Overrides title alignment rules defined on a panel, page or survey level. The \"Inherit\" option applies any higher-level settings (if set) or survey-level setting (\"Top\" by default)." => "Sostituisce le regole di allineamento del titolo definite a livello di pannello, pagina o rilevamento. L'opzione \"Eredita\" applica tutte le impostazioni di livello superiore (se impostate) o le impostazioni a livello di indagine (\"In alto\" per impostazione predefinita)."
// question.descriptionLocation: "The \"Inherit\" option applies the survey-level setting (\"Under the question title\" by default)." => "L'opzione \"Eredita\" applica l'impostazione a livello di indagine (\"Sotto il titolo della domanda\" per impostazione predefinita)."
// question.errorLocation: "Sets the location of an error message in relation to the question with invalid input. Choose between: \"Top\" - an error text is placed at the top of the question box; \"Bottom\" - an error text is placed at the bottom of the question box. The \"Inherit\" option applies the survey-level setting (\"Top\" by default)." => "Imposta la posizione di un messaggio di errore in relazione alla domanda con input non valido. Scegli tra: \"In alto\" - un testo di errore viene posizionato nella parte superiore della casella della domanda; \"In basso\": un testo di errore viene inserito nella parte inferiore della casella della domanda. L'opzione \"Eredita\" applica l'impostazione a livello di indagine (\"In alto\" per impostazione predefinita)."
// question.indent: "Adds space or margin between the question content and the left border of the question box." => "Aggiunge uno spazio o un margine tra il contenuto della domanda e il bordo sinistro della casella della domanda."
// question.width: "Sets the width of the question in proportion to other survey elements in the same line. Accepts CSS values (px, %, in, pt, etc.)." => "Imposta la larghezza della domanda in proporzione agli altri elementi del sondaggio nella stessa riga. Accetta valori CSS (px, %, in, pt, ecc.)."
// surveyvalidator.expression: "Use the magic wand icon to set a validation rule for the question." => "Usa l'icona della bacchetta magica per impostare una regola di convalida per la domanda."
// question.textUpdateMode: "Choose from: \"On lost focus\" - the value is updated when the input field loses focus; \"While typing\" - the value is updated in real-time, as users are typing. The \"Inherit\" option applies the survey-level setting (\"On lost focus\" by default)." => "Scegli tra: \"In caso di perdita di messa a fuoco\" - il valore viene aggiornato quando il campo di immissione perde lo stato attivo; \"Durante la digitazione\": il valore viene aggiornato in tempo reale, mentre gli utenti digitano. L'opzione \"Eredita\" applica l'impostazione a livello di indagine (\"In caso di perdita di focus\" per impostazione predefinita)."
// question.url: "You can use any web service as a data source for multiple-choice questions. To populate choice values, enter the URL of the service providing the data." => "È possibile utilizzare qualsiasi servizio Web come origine dati per le domande a scelta multipla. Per popolare i valori di scelta, immettere l'URL del servizio che fornisce i dati."
// question.searchMode: "A comparison operation used to filter the drop-down list." => "Operazione di confronto utilizzata per filtrare l'elenco a discesa."
// signaturepad.signatureWidth: "Sets the width of the displayed signature area and the resulting image." => "Imposta la larghezza dell'area della firma visualizzata e dell'immagine risultante."
// signaturepad.signatureHeight: "Sets the height of the displayed signature area and the resulting image." => "Imposta l'altezza dell'area della firma visualizzata e dell'immagine risultante."
// signaturepad.signatureAutoScaleEnabled: "Select if you want the signature area to fill all available space within the question box while maintaining the default 3:2 aspect ratio. When custom width and height values are set, the setting will keep the aspect ratio of these dimensions." => "Selezionare questa opzione se si desidera che l'area della firma occupi tutto lo spazio disponibile all'interno della casella della domanda, mantenendo le proporzioni 3:2 predefinite. Quando vengono impostati valori di larghezza e altezza personalizzati, l'impostazione manterrà le proporzioni di queste dimensioni."
// file.imageHeight: "Adjusts the height of the image in the survey results." => "Regola l'altezza dell'immagine nei risultati del rilevamento."
// file.imageWidth: "Adjusts the width of the image in the survey results." => "Regola la larghezza dell'immagine nei risultati del rilevamento."
// imagepicker.imageHeight: "Overrides the minimum and maximum height values." => "Sostituisce i valori di altezza minima e massima."
// imagepicker.imageWidth: "Overrides the minimum and maximum width values." => "Sostituisce i valori di larghezza minima e massima."
// imagepicker.choices: "\"Value\" serves as an item ID used in conditional rules; \"Text\" is displayed to respondents." => "\"Valore\" funge da ID elemento utilizzato nelle regole condizionali; \"Testo\" viene visualizzato ai rispondenti."
// text.size: "This setting only resizes the input field and doesn't affect the width of the question box. To limit the accepted input length, go to <b>Validation → Maximum character limit</b>." => "Questa impostazione ridimensiona solo il campo di input e non influisce sulla larghezza della casella della domanda. Per limitare la lunghezza di input accettata, passare a <b>Convalida → Limite massimo di caratteri</b>."
// comment.rows: "Sets the number of displayed lines in the input field. If the input takes up more lines, the scroll bar will appear." => "Imposta il numero di righe visualizzate nel campo di immissione. Se l'input occupa più righe, verrà visualizzata la barra di scorrimento."
// survey.mode: "Choose between: \"Editable\" - enables respondents to fill out your survey; \"Read-only\" - disables form editing." => "Scegli tra: \"Modificabile\" - consente ai rispondenti di compilare la tua indagine; \"Sola lettura\": disabilita la modifica del modulo."
// matrixdropdowncolumn.name: "A column ID that is not visible to respondents." => "Un ID colonna che non è visibile ai rispondenti."
// matrixdropdowncolumn.isUnique: "When enabled for a column, a respondent is required to provide a unique response for each question within this column." => "Se abilitata per una colonna, un rispondente deve fornire una risposta univoca per ogni domanda all'interno di questa colonna."
// matrixdropdowncolumn.rows: "Sets the number of displayed lines in the input field. If the input takes up more lines, the scroll bar will appear." => "Imposta il numero di righe visualizzate nel campo di immissione. Se l'input occupa più righe, verrà visualizzata la barra di scorrimento."
// matrixdropdowncolumn.visibleIf: "Use the magic wand icon to set a conditional rule that determines column visibility." => "Utilizzare l'icona della bacchetta magica per impostare una regola condizionale che determini la visibilità della colonna."
// matrixdropdowncolumn.enableIf: "Use the magic wand icon to set a conditional rule that disables the read-only mode for the column." => "Utilizzare l'icona della bacchetta magica per impostare una regola condizionale che disabiliti la modalità di sola lettura per la colonna."
// matrixdropdowncolumn.requiredIf: "Use the magic wand icon to set a conditional rule that prevents survey submission unless at least one nested question has an answer." => "Utilizza l'icona della bacchetta magica per impostare una regola condizionale che impedisca l'invio dell'indagine a meno che almeno una domanda nidificata non abbia una risposta."
// matrixdropdowncolumn.showInMultipleColumns: "When selected, creates an individual column for each choice option." => "Quando questa opzione è selezionata, crea una singola colonna per ogni opzione di scelta."
// pehelp.widthMode: "Choose from: \"Static\" - sets a fixed width; \"Responsive\" - makes the survey occupy the full width of the screen; \"Auto\" - applies either of the two depending on the question types used." => "Scegli tra: \"Statico\" - imposta una larghezza fissa; \"Responsive\" - fa sì che il sondaggio occupi l'intera larghezza dello schermo; \"Auto\": applica uno dei due a seconda del tipo di domanda utilizzato."
// pehelp.logo: "Paste an image link (no size limits) or click the folder icon to browse a file from your computer (up to 64KB)." => "Incolla un link immagine (senza limiti di dimensione) o fai clic sull'icona della cartella per sfogliare un file dal tuo computer (fino a 64 KB)."
// pehelp.logoWidth: "Sets a logo width in CSS units (px, %, in, pt, etc.)." => "Imposta la larghezza del logo in unità CSS (px, %, in, pt e così via)."
// pehelp.logoHeight: "Sets a logo height in CSS units (px, %, in, pt, etc.)." => "Imposta l'altezza di un logo in unità CSS (px, %, in, pt e così via)."
// pehelp.logoFit: "Choose from: \"None\" - image maintains its original size; \"Contain\" - image is resized to fit while maintaining its aspect ratio; \"Cover\" - image fills the entire box while maintaining its aspect ratio; \"Fill\" - image is stretched to fill the box without maintaining its aspect ratio." => "Scegli tra: \"Nessuna\" - l'immagine mantiene le sue dimensioni originali; \"Contieni\": l'immagine viene ridimensionata per adattarla mantenendo le sue proporzioni; \"Copertina\": l'immagine riempie l'intera scatola mantenendo le sue proporzioni; \"Riempi\" - l'immagine viene allungata per riempire la casella senza mantenerne le proporzioni."
// pehelp.showNavigationButtons: "Sets the visibility and location of navigation buttons on a page." => "Imposta la visibilità e la posizione dei pulsanti di navigazione in una pagina."
// pehelp.showProgressBar: "Sets the visibility and location of a progress bar. The \"Auto\" value displays the progress bar above or below the survey header." => "Imposta la visibilità e la posizione di una barra di avanzamento. Il valore \"Auto\" mostra la barra di avanzamento sopra o sotto l'intestazione del sondaggio."
// pehelp.showPreviewBeforeComplete: "Enable the preview page with all or answered questions only." => "Abilita la pagina di anteprima con tutte le domande o solo con risposta."
// pehelp.questionTitleLocation: "Applies to all questions within the survey. This setting can be overridden by title alignment rules at lower levels: panel, page, or question. A lower-level setting will override those on a higher level." => "Si applica a tutte le domande all'interno dell'indagine. Questa impostazione può essere sostituita dalle regole di allineamento del titolo ai livelli inferiori: pannello, pagina o domanda. Un'impostazione di livello inferiore sostituirà quelle di livello superiore."
// pehelp.requiredMark: "A symbol or a sequence of symbols indicating that an answer is required." => "Un simbolo o una sequenza di simboli che indica che è necessaria una risposta."
// pehelp.questionStartIndex: "Enter a number or letter with which you want to start numbering." => "Immettere un numero o una lettera con cui si desidera iniziare la numerazione."
// pehelp.questionErrorLocation: "Sets the location of an error message in relation to the question with invalid input. Choose between: \"Top\" - an error text is placed at the top of the question box; \"Bottom\" - an error text is placed at the bottom of the question box." => "Imposta la posizione di un messaggio di errore in relazione alla domanda con input non valido. Scegli tra: \"In alto\" - un testo di errore viene posizionato nella parte superiore della casella della domanda; \"In basso\": un testo di errore viene inserito nella parte inferiore della casella della domanda."
// pehelp.autoFocusFirstQuestion: "Select if you want the first input field on each page ready for text entry." => "Selezionare se si desidera che il primo campo di immissione di ogni pagina sia pronto per l'immissione di testo."
// pehelp.questionOrder: "Keeps the original order of questions or randomizes them. The effect of this setting is only visible in the Preview tab." => "Mantiene l'ordine originale delle domande o le rende casuali. L'effetto di questa impostazione è visibile solo nella scheda Anteprima."
// pehelp.maxTextLength: "For text entry questions only." => "Solo per domande di immissione di testo."
// pehelp.maxCommentLength: "For question comments only." => "Solo per i commenti alle domande."
// pehelp.autoGrowComment: "Select if you want question comments and Long Text questions to auto-grow in height based on the entered text length." => "Selezionare questa opzione se si desidera che i commenti alle domande e le domande di testo lungo aumentino automaticamente in altezza in base alla lunghezza del testo inserito."
// pehelp.allowResizeComment: "For question comments and Long Text questions only." => "Solo per i commenti alle domande e le domande a testo lungo."
// pehelp.calculatedValues: "Custom variables serve as intermediate or auxiliary variables used in form calculations. They take respondent inputs as source values. Each custom variable has a unique name and an expression it's based on." => "Le variabili personalizzate fungono da variabili intermedie o ausiliarie utilizzate nei calcoli dei moduli. Accettano gli input dei rispondenti come valori di origine. Ogni variabile personalizzata ha un nome univoco e un'espressione su cui si basa."
// pehelp.includeIntoResult: "Select if you wish the calculated value of the expression to be saved along with survey results." => "Selezionare questa opzione se si desidera che il valore calcolato dell'espressione venga salvato insieme ai risultati del rilevamento."
// pehelp.triggers: "A trigger is an event or condition that is based on an expression. Once the expression is evaluated to \"true\", a trigger sets off an action. Such an action can optionally have a target question it affects." => "Un trigger è un evento o una condizione basata su un'espressione. Una volta che l'espressione è stata valutata come \"true\", un trigger attiva un'azione. Un'azione di questo tipo può facoltativamente avere un effetto su una domanda di destinazione."
// pehelp.clearInvisibleValues: "Choose whether or not to clear values for questions hidden by conditional logic and when to do it." => "Scegli se cancellare o meno i valori per le domande nascoste dalla logica condizionale e quando farlo."
// pehelp.textUpdateMode: "Choose from: \"On lost focus\" - the value is updated when the input field loses focus; \"While typing\" - the value is updated in real-time, as users are typing." => "Scegli tra: \"In caso di perdita di messa a fuoco\" - il valore viene aggiornato quando il campo di immissione perde lo stato attivo; \"Durante la digitazione\": il valore viene aggiornato in tempo reale, mentre gli utenti digitano."
// pehelp.columns: "The left value serves as a column ID used in conditional rules, the right value is displayed to respondents." => "Il valore a sinistra funge da ID colonna utilizzato nelle regole condizionali, mentre il valore a destra viene visualizzato dai rispondenti."
// pehelp.rows: "The left value serves as a row ID used in conditional rules, the right value is displayed to respondents." => "Il valore a sinistra funge da ID riga utilizzato nelle regole condizionali, mentre il valore a destra viene visualizzato dai rispondenti."
// pehelp.columnMinWidth: "Accepts CSS values (px, %, in, pt, etc.)." => "Accetta valori CSS (px, %, in, pt, ecc.)."
// pehelp.rowTitleWidth: "Accepts CSS values (px, %, in, pt, etc.)." => "Accetta valori CSS (px, %, in, pt, ecc.)."
// pehelp.cellErrorLocation: "Sets the location of an error message in relation to a cell with invalid input. The \"Inherit\" option applies the setting from the \"Error message alignment\" property." => "Imposta la posizione di un messaggio di errore in relazione a una cella con input non valido. L'opzione \"Eredita\" applica l'impostazione della proprietà \"Allineamento messaggi di errore\"."
// pehelp.keyDuplicationError: "When the \"Prevent duplicate responses\" property is enabled, a respondent attempting to submit a duplicate entry will receive the following error message." => "Quando la proprietà \"Impedisci risposte duplicate\" è abilitata, un rispondente che tenta di inviare una voce duplicata riceverà il seguente messaggio di errore."
// pehelp.totalExpression: "Allows you to calculate total values based on an expression. The expression can include basic calculations (`{q1_id} + {q2_id}`), Boolean expressions (`{age} > 60`) and functions ('iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, etc.)." => "Consente di calcolare i valori totali in base a un'espressione. L'espressione può includere calcoli di base ('{q1_id} + {q2_id}'), espressioni booleane ('{age} > 60') e funzioni ('iif()', 'today()', 'age()', 'min()', 'max()', 'avg()', ecc.)."
// pehelp.confirmDelete: "Triggers a prompt asking to confirm the row deletion." => "Attiva un prompt che chiede di confermare l'eliminazione della riga."
// pehelp.copyDefaultValueFromLastEntry: "Duplicates answers from the last row and assigns them to the next added dynamic row." => "Duplica le risposte dell'ultima riga e le assegna alla successiva riga dinamica aggiunta."
// pehelp.description: "Type a subtitle." => "Digita un sottotitolo."
// pehelp.locale: "Choose a language to begin creating your survey. To add a translation, switch to a new language and translate the original text here or in the Translations tab." => "Scegli una lingua per iniziare a creare la tua indagine. Per aggiungere una traduzione, passa a una nuova lingua e traduci il testo originale qui o nella scheda Traduzioni."
// pehelp.detailPanelMode: "Sets the location of a details section in relation to a row. Choose from: \"None\" - no expansion is added; \"Under the row\" - a row expansion is placed under each row of the matrix; \"Under the row, display one row expansion only\" - an expansion is displayed under a single row only, the remaining row expansions are collapsed." => "Imposta la posizione di una sezione di dettagli in relazione a una riga. Scegli tra: \"Nessuna\" - non viene aggiunta alcuna espansione; \"Sotto la riga\": un'espansione di riga viene posizionata sotto ogni riga della matrice; \"Sotto la riga, visualizza solo un'espansione di riga\": un'espansione viene visualizzata solo sotto una singola riga, le espansioni di riga rimanenti vengono compresse."
// pehelp.imageFit: "Choose from: \"None\" - image maintains its original size; \"Contain\" - image is resized to fit while maintaining its aspect ratio; \"Cover\" - image fills the entire box while maintaining its aspect ratio; \"Fill\" - image is stretched to fill the box without maintaining its aspect ratio." => "Scegli tra: \"Nessuna\" - l'immagine mantiene le sue dimensioni originali; \"Contieni\": l'immagine viene ridimensionata per adattarla mantenendo le sue proporzioni; \"Copertina\": l'immagine riempie l'intera scatola mantenendo le sue proporzioni; \"Riempi\" - l'immagine viene allungata per riempire la casella senza mantenerne le proporzioni."
// pehelp.autoGrow: "Gradually increases the height of the input field as data is being entered. Overrides the \"Input field height (in lines)\" setting." => "Aumenta gradualmente l'altezza del campo di immissione man mano che i dati vengono inseriti. Sostituisce l'impostazione \"Altezza campo di immissione (in righe)\"."
// pehelp.allowResize: "The resize handle (or grip) appears in the corner and can be dragged to alter the size of the input field." => "La maniglia di ridimensionamento (o grip) viene visualizzata nell'angolo e può essere trascinata per modificare le dimensioni del campo di immissione."
// pehelp.timeLimit: "A time interval in seconds after which the survey auto-advances to the Thank You page." => "Un intervallo di tempo in secondi dopo il quale l'indagine avanza automaticamente alla pagina di ringraziamento."
// pehelp.timeLimitPerPage: "A time interval in seconds after which the survey auto-advances to the next page." => "Un intervallo di tempo in secondi dopo il quale il rilevamento avanza automaticamente alla pagina successiva."
// page.timeLimit: "A time interval in seconds after which the survey auto-advances to the next page." => "Un intervallo di tempo in secondi dopo il quale il rilevamento avanza automaticamente alla pagina successiva."
// page.visibleIf: "Use the magic wand icon to set a conditional rule that determines page visibility." => "Usa l'icona della bacchetta magica per impostare una regola condizionale che determina la visibilità della pagina."
// page.enableIf: "Use the magic wand icon to set a conditional rule that disables the read-only mode for the page." => "Utilizzare l'icona della bacchetta magica per impostare una regola condizionale che disabilita la modalità di sola lettura per la pagina."
// page.requiredIf: "Use the magic wand icon to set a conditional rule that prevents survey submission unless at least one nested question has an answer." => "Utilizza l'icona della bacchetta magica per impostare una regola condizionale che impedisca l'invio dell'indagine a meno che almeno una domanda nidificata non abbia una risposta."
// page.questionTitleLocation: "Applies to all questions within this page. If you want to override this setting, define title alignment rules for individual questions or panels. The \"Inherit\" option applies the survey-level setting (\"Top\" by default)." => "Si applica a tutte le domande all'interno di questa pagina. Se si desidera ignorare questa impostazione, definire le regole di allineamento dei titoli per le singole domande o pannelli. L'opzione \"Eredita\" applica l'impostazione a livello di indagine (\"In alto\" per impostazione predefinita)."
// page.questionErrorLocation: "Sets the location of an error message in relation to the question with invalid input. Choose between: \"Top\" - an error text is placed at the top of the question box; \"Bottom\" - an error text is placed at the bottom of the question box. The \"Inherit\" option applies the survey-level setting (\"Top\" by default)." => "Imposta la posizione di un messaggio di errore in relazione alla domanda con input non valido. Scegli tra: \"In alto\" - un testo di errore viene posizionato nella parte superiore della casella della domanda; \"In basso\": un testo di errore viene inserito nella parte inferiore della casella della domanda. L'opzione \"Eredita\" applica l'impostazione a livello di indagine (\"In alto\" per impostazione predefinita)."
// page.questionOrder: "Keeps the original order of questions or randomizes them. The \"Inherit\" option applies the survey-level setting (\"Original\" by default). The effect of this setting is only visible in the Preview tab." => "Mantiene l'ordine originale delle domande o le rende casuali. L'opzione \"Eredita\" applica l'impostazione a livello di indagine (\"Originale\" per impostazione predefinita). L'effetto di questa impostazione è visibile solo nella scheda Anteprima."
// page.showNavigationButtons: "Sets the visibility of navigation buttons on the page. The \"Inherit\" option applies the survey-level setting, which defaults to \"Visible\"." => "Imposta la visibilità dei pulsanti di navigazione nella pagina. L'opzione \"Eredita\" applica l'impostazione a livello di indagine, che per impostazione predefinita è \"Visibile\"."
// pehelp.panelsState: "Choose from: \"Locked\" - users cannot expand or collapse panels; \"Collapse all\" - all panels start in a collapsed state; \"Expand all\" - all panels start in an expanded state; \"First expanded\" - only the first panel is initially expanded." => "Scegli tra: \"Bloccato\" - gli utenti non possono espandere o comprimere i pannelli; \"Comprimi tutto\": tutti i pannelli iniziano in uno stato compresso; \"Espandi tutto\": tutti i pannelli iniziano in uno stato espanso; \"Prima espansa\": inizialmente viene espanso solo il primo pannello."
// pehelp.imageLinkName: "Enter a shared property name within the array of objects that contains the image or video file URLs you want to display in the choice list." => "Immettere un nome di proprietà condivisa all'interno della matrice di oggetti che contiene gli URL del file di immagine o video che si desidera visualizzare nell'elenco di scelta."
// pehelp.choices: "The left value serves as an item ID used in conditional rules, the right value is displayed to respondents." => "Il valore a sinistra funge da ID elemento utilizzato nelle regole condizionali, mentre il valore a destra viene visualizzato dai rispondenti."
// pehelp.title: "Type a user-friendly title to display." => "Digitare un titolo descrittivo da visualizzare."
// pehelp.waitForUpload: "Ensures that users won't complete the survey until files are uploaded." => "Garantisce che gli utenti non completino l'indagine fino a quando i file non vengono caricati."
// pehelp.minWidth: "Accepts CSS values (px, %, in, pt, etc.)." => "Accetta valori CSS (px, %, in, pt, ecc.)."
// pehelp.maxWidth: "Accepts CSS values (px, %, in, pt, etc.)." => "Accetta valori CSS (px, %, in, pt, ecc.)."
// pehelp.width: "Accepts CSS values (px, %, in, pt, etc.)." => "Accetta valori CSS (px, %, in, pt, ecc.)."
// pehelp.useDisplayValuesInDynamicTexts: "In single- and multiple-selection question types, each choice option has an ID and display value. When selected, this setting shows a display value instead of an ID value in HTML questions and dynamic titles and descriptions of survey elements." => "Nei tipi di domande a selezione singola e multipla, ogni opzione di scelta ha un ID e un valore di visualizzazione. Quando questa opzione è selezionata, questa impostazione mostra un valore di visualizzazione anziché un valore ID nelle domande HTML e nei titoli dinamici e nelle descrizioni degli elementi dell'indagine."
// pehelp.clearIfInvisible: "Choose whether or not to clear question values hidden by conditional logic and when to do it. The \"Inherit\" option applies the survey-level setting (\"Upon survey completion\" by default)." => "Scegli se cancellare o meno i valori delle domande nascosti dalla logica condizionale e quando farlo. L'opzione \"Eredita\" applica l'impostazione a livello di indagine (\"Al completamento dell'indagine\" per impostazione predefinita)."
// pehelp.choicesFromQuestionMode: "Choose from: \"All\" - copies all choice options from the selected question; \"Selected\" - dynamically copies only selected choice options; \"Unselected\" - dynamically copies only unselected choice options. The \"None\" and \"Other\" options are copied by default if enabled in the source question." => "Scegli tra: \"Tutte\" - copia tutte le opzioni di scelta dalla domanda selezionata; \"Selezionato\" - copia dinamicamente solo le opzioni di scelta selezionate; \"Non selezionato\" - copia dinamicamente solo le opzioni di scelta non selezionate. Le opzioni \"Nessuna\" e \"Altro\" vengono copiate per impostazione predefinita se abilitate nella domanda di origine."
// pehelp.showOtherItem: "When selected, users can include additional input in a separate comment box." => "Quando questa opzione è selezionata, gli utenti possono includere input aggiuntivi in una casella di commento separata."
// pehelp.separateSpecialChoices: "Displays each special choice option (\"None\", \"Other\", \"Select All\") on a new line, even when using a multiple-column layout." => "Visualizza ogni opzione di scelta speciale (\"Nessuna\", \"Altro\", \"Seleziona tutto\") su una nuova riga, anche quando si utilizza un layout a più colonne."
// pehelp.path: "Specify the location within the service dataset where the target array of objects is located. Leave empty if the URL already points to the array." => "Specificare la posizione all'interno del set di dati del servizio in cui si trova la matrice di oggetti di destinazione. Lasciare vuoto se l'URL punta già all'array."
// pehelp.titleName: "Enter a uniform property name within the array of objects that contains the values you want to display in the choice list." => "Immettere un nome di proprietà uniforme all'interno della matrice di oggetti contenente i valori che si desidera visualizzare nell'elenco di scelte."
// pehelp.allowEmptyResponse: "Select to allow the service to return an empty response or array." => "Selezionare questa opzione per consentire al servizio di restituire una risposta o una matrice vuota."
// pehelp.choicesVisibleIf: "Use the magic wand icon to set a conditional rule that determines the visibility of all choice options." => "Utilizzare l'icona della bacchetta magica per impostare una regola condizionale che determina la visibilità di tutte le opzioni di scelta."
// pehelp.rateValues: "The left value serves as an item ID used in conditional rules, the right value is displayed to respondents." => "Il valore a sinistra funge da ID elemento utilizzato nelle regole condizionali, mentre il valore a destra viene visualizzato dai rispondenti."
// rating.displayMode: "\"Auto\" selects between the \"Buttons\" and \"Dropdown\" modes based on the available width. When the width is insufficient to display buttons, the question displays a dropdown." => "\"Auto\" seleziona tra le modalità \"Pulsanti\" e \"Menu a discesa\" in base alla larghezza disponibile. Quando la larghezza è insufficiente per visualizzare i pulsanti, la domanda visualizza un menu a discesa."
// pehelp.valuePropertyName: "Allows you to connect questions that produce results in different formats. When such questions are linked together using a join identifier, this shared property stores selected question values." => "Consente di collegare domande che producono risultati in formati diversi. Quando tali domande sono collegate tra loro utilizzando un identificatore di join, questa proprietà condivisa memorizza i valori delle domande selezionate."
// pehelp.searchEnabled: "Select if you want to update the drop-down menu contents to match the search query that a user is typing in the input field." => "Selezionare questa opzione se si desidera aggiornare il contenuto del menu a discesa in modo che corrisponda alla query di ricerca digitata dall'utente nel campo di immissione."
// pehelp.valueTrue: "A value to save in survey results when respondents give a positive answer." => "Un valore da salvare nei risultati dell'indagine quando i rispondenti danno una risposta positiva."
// pehelp.valueFalse: "A value to save in survey results when respondents give a negative answer." => "Un valore da salvare nei risultati dell'indagine quando i rispondenti danno una risposta negativa."
// pehelp.showPreview: "It's not recommended to disable this option as it overrides the Preview image and makes it hard for a user to understand whether the files have been uploaded." => "Non è consigliabile disabilitare questa opzione in quanto sostituisce l'immagine di anteprima e rende difficile per un utente capire se i file sono stati caricati."
// pehelp.needConfirmRemoveFile: "Triggers a prompt asking to confirm the file deletion." => "Attiva un prompt che chiede di confermare l'eliminazione del file."
// pehelp.selectToRankEnabled: "Enable to rank only selected choices. Users will drag selected items from the choice list to order them within the ranking area." => "Abilita per classificare solo le scelte selezionate. Gli utenti trascineranno gli elementi selezionati dall'elenco di scelta per ordinarli all'interno dell'area di classificazione."
// pehelp.dataList: "Enter a list of choices that will be suggested to the respondent during input." => "Inserisci un elenco di scelte che verranno suggerite al rispondente durante l'inserimento."
// pehelp.inputSize: "The setting only resizes the input fields and doesn't affect the width of the question box." => "L'impostazione ridimensiona solo i campi di input e non influisce sulla larghezza della casella della domanda."
// pehelp.itemTitleWidth: "Sets consistent width for all item labels in pixels" => "Imposta una larghezza coerente per tutte le etichette degli elementi in pixel"
// pehelp.contentMode: "The \"Auto\" option automatically determines the suitable mode for display - Image, Video, or YouTube - based on the source URL provided." => "L'opzione \"Auto\" determina automaticamente la modalità di visualizzazione adatta - Immagine, Video o YouTube - in base all'URL di origine fornito."
// pehelp.altText: "Serves as a substitute when the image cannot be displayed on a user's device and for accessibility purposes." => "Funge da sostituto quando l'immagine non può essere visualizzata sul dispositivo di un utente e per motivi di accessibilità."
// pehelp.rateColorMode: "Defines the color of the selected emoji when the Rating icon type is set to \"Smileys\". Choose between: \"Default\" - the selected emoji appears in default survey color; \"Scale\" - the selected emoji inherits color from the rating scale." => "Definisce il colore dell'emoji selezionata quando il tipo di icona Valutazione è impostato su \"Smiley\". Scegli tra: \"Predefinito\" - l'emoji selezionata appare nel colore predefinito del sondaggio; \"Scala\": l'emoji selezionata eredita il colore dalla scala di valutazione."
// expression.name: "An expression ID that is not visible to respondents." => "Un ID espressione che non è visibile ai rispondenti."
// expression.description: "Type an expression subtitle." => "Digitare un sottotitolo dell'espressione."
// expression.expression: "An expression can include basic calculations (`{q1_id} + {q2_id}`), conditions (`{age} > 60`), and functions ('iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, etc.)." => "Un'espressione può includere calcoli di base ('{q1_id} + {q2_id}'), condizioni ('{età} > 60') e funzioni ('iif()', 'oggi()', 'età()', 'min()', 'max()', 'avg()' e così via)."
// pehelp.storeOthersAsComment: "Select to store the \"Other\" option value as a separate property in survey results." => "Selezionare questa opzione per memorizzare il valore dell'opzione \"Altro\" come proprietà separata nei risultati del rilevamento."
// p.swapOrder: "Swap the order of Yes and No" => "Scambia l'ordine di Sì e No"
// p.itemTitleWidth: "Item label width (in px)" => "Larghezza dell'etichetta dell'articolo (in px)"
// p.selectToRankEmptyRankedAreaText: "Text to show if all options are selected" => "Testo da mostrare se tutte le opzioni sono selezionate"
// p.selectToRankEmptyUnrankedAreaText: "Placeholder text for the ranking area" => "Testo segnaposto per l'area di classificazione"
// pe.autoAdvanceAllowComplete: "Complete the survey automatically" => "Completa automaticamente il sondaggio"
// pehelp.autoAdvanceAllowComplete: "Select if you want the survey to complete automatically after a respondent answers all questions." => "Seleziona questa opzione se desideri che l'indagine venga completata automaticamente dopo che un rispondente ha risposto a tutte le domande."
// masksettings.saveMaskedValue: "Save masked value in survey results" => "Salvare il valore mascherato nei risultati dell'indagine"
// patternmask.pattern: "Value pattern" => "Modello di valore"
// datetimemask.min: "Minimum value" => "Valore minimo"
// datetimemask.max: "Maximum value" => "Valore massimo"
// numericmask.allowNegativeValues: "Allow negative values" => "Consenti valori negativi"
// numericmask.thousandsSeparator: "Thousands separator" => "Separatore delle migliaia"
// numericmask.decimalSeparator: "Decimal separator" => "Separatore decimale"
// numericmask.precision: "Value precision" => "Precisione del valore"
// numericmask.min: "Minimum value" => "Valore minimo"
// numericmask.max: "Maximum value" => "Valore massimo"
// currencymask.prefix: "Currency prefix" => "Prefisso di valuta"
// currencymask.suffix: "Currency suffix" => "Suffisso valuta"
// pe.maskType: "Input mask type" => "Tipo di maschera di input"
// maskTypes.patternmask: "Pattern" => "Modello"
// maskTypes.numericmask: "Numeric" => "Numerico"
// maskTypes.datetimemask: "Date and Time" => "Data e ora"
// maskTypes.currencymask: "Currency" => "Valuta"
// tabs.mask: "Input Mask Settings" => "Impostazioni della maschera di input"
// pe.pattern_placeholder: "Ex.: +1(999)-999-99-99" => "Es.: +1(999)-999-99-99"
// pe.datetimepattern_placeholder: "Ex.: mm/dd/yyyy" => "Es.: gg/mm/aaaa"
// pe.currencyprefix_placeholder: "Ex.: $" => "Es.: $"
// pe.currencysuffix_placeholder: "Ex.: USD" => "Es.: USD"
// pv.textWrapEnabled: "Wrap choices" => "Scelte di avvolgimento"
// question.textWrapEnabled: "Long texts in choice options will automatically generate line breaks to fit within the drop-down menu. Unselect if you want the texts to clip." => "I testi lunghi nelle opzioni di scelta genereranno automaticamente interruzioni di riga per adattarsi al menu a discesa. Deselezionare questa opzione se si desidera che i testi vengano ritagliati."
// masksettings.saveMaskedValue: "Select if you want to store the question value with an applied mask in survey results." => "Selezionare questa opzione se si desidera memorizzare il valore della domanda con una maschera applicata nei risultati dell'indagine."
// patternmask.pattern: "The pattern can contain string literals and the following placeholders: `9` - for a digit; `a` - for an upper- or lower-case letter; `#` - for a digit or an upper- or lower-case letter. Use backslash `\\` to escape a character." => "Il modello può contenere valori letterali stringa e i segnaposto seguenti: '9' - per una cifra; 'a' - per una lettera maiuscola o minuscola; '#' - per una cifra o una lettera maiuscola o minuscola. Usa la barra rovesciata '\\' per eseguire l'escape di un carattere."
// datetimemask.pattern: "The pattern can contain separator characters and the following placeholders: `m` - for month number; `mm` - for month number, with leading zero for single-digit values; `d` - for day of the month; `dd` - for day of the month, with leading zero for single-digit values; `yy` - for the last two digits of the year; `yyyy` - for a four-digit year." => "Il modello può contenere caratteri separatori e i seguenti segnaposto: 'm' - per il numero del mese; 'mm' - per il numero del mese, con zero iniziale per i valori a una cifra; 'd' - per il giorno del mese; 'dd' - per il giorno del mese, con zero iniziale per i valori a una cifra; 'yy' - per le ultime due cifre dell'anno; 'yyyy' - per un anno a quattro cifre."
// numericmask.decimalSeparator: "A symbol used to separate the fractional part from the integer part of a displayed number." => "Simbolo utilizzato per separare la parte frazionaria dalla parte intera di un numero visualizzato."
// numericmask.thousandsSeparator: "A symbol used to separate the digits of a large number into groups of three." => "Simbolo utilizzato per separare le cifre di un numero elevato in gruppi di tre."
// numericmask.precision: "Limits how many digits to retain after the decimal point for a displayed number." => "Limita il numero di cifre da mantenere dopo la virgola decimale per un numero visualizzato."
// currencymask.prefix: "One or several symbols to be displayed before the value." => "Uno o più simboli da visualizzare prima del valore."
// currencymask.suffix: "One or several symbols to be displayed after the value." => "Uno o più simboli da visualizzare dopo il valore."
// ed.translationSource: "Source: " => "Fonte: "
// ed.translationTarget: "Target: " => "Bersaglio: "
// ed.pagePlaceHolder: "The page is empty. Drag an element from the toolbox or click the button below." => "La pagina è vuota. Trascinare un elemento dalla casella degli strumenti o fare clic sul pulsante sottostante."
// maskTypes.none: "None" => "Nessuno"
// itemvalue@rows.visibleIf: "Make the row visible if" => "Rendi visibile la riga se"
// itemvalue@rows.enableIf: "Make the row editable if" => "Rendi la riga modificabile se"
// signaturepad.placeholderReadOnly: "Placeholder text in read-only or preview mode" => "Testo segnaposto in modalità di sola lettura o anteprima"
// pe.textWrapEnabled: "Wrap choices" => "Scelte di avvolgimento"
// image.contentMode: "The \"Auto\" option automatically determines the suitable mode for display - Image, Video, or YouTube - based on the source URL provided." => "L'opzione \"Auto\" determina automaticamente la modalità di visualizzazione adatta - Immagine, Video o YouTube - in base all'URL di origine fornito."
// imagepicker.contentMode: "Choose between \"Image\" and \"Video\" to set the content mode of the media selector. If \"Image\" is selected, ensure that all options provided are image files in the following formats: JPEG, GIF, PNG, APNG, SVG, BMP, ICO. Similarly, if \"Video\" is selected, ensure that all options are direct links to video files in the following formats: MP4, MOV, WMV, FLV, AVI, MKV. Please note that YouTube links are not supported for video options." => "Scegli tra \"Immagine\" e \"Video\" per impostare la modalità contenuto del selettore multimediale. Se è selezionata l'opzione \"Immagine\", assicurarsi che tutte le opzioni fornite siano file immagine nei seguenti formati: JPEG, GIF, PNG, APNG, SVG, BMP, ICO. Allo stesso modo, se è selezionato \"Video\", assicurarsi che tutte le opzioni siano collegamenti diretti a file video nei seguenti formati: MP4, MOV, WMV, FLV, AVI, MKV. Tieni presente che i link di YouTube non sono supportati per le opzioni video."
// ed.selectFile: "Select a file" => "Seleziona un file"
// ed.removeFile: "Remove the file" => "Rimuovere il file"
// pe.searchMode: "Search Mode" => "Modalità di ricerca"
// ed.surveyPlaceHolderMobile: "Click the \"Add Question\" button below to start creating your form." => "Fai clic sul pulsante \"Aggiungi domanda\" qui sotto per iniziare a creare il tuo modulo."
// ed.pagePlaceHolderMobile: "Click the \"Add Question\" button below to add a new element to the page." => "Fai clic sul pulsante \"Aggiungi domanda\" in basso per aggiungere un nuovo elemento alla pagina."
// ed.panelPlaceHolderMobile: "Click the \"Add Question\" button below to add a new element to the panel." => "Fai clic sul pulsante \"Aggiungi domanda\" in basso per aggiungere un nuovo elemento al pannello."
// ed.imagePlaceHolderMobile: "Click the button below and choose an image to upload" => "Clicca sul pulsante qui sotto e scegli un'immagine da caricare"
// coloralpha.opacity: "Opacity" => "Opacità"
// font.family: "Font family" => "Famiglia di caratteri"
// font.color: "Color" => "Colore"
// font.placeholderColor: "Placeholder color" => "Colore segnaposto"
// font.size: "Size" => "Grandezza"
// theme.themeName: "Theme" => "Tema"
// theme.isPanelless: "Question appearance" => "Aspetto della domanda"
// theme.editorPanel: "Background and corner radius" => "Sfondo e raggio d'angolo"
// theme.questionPanel: "Background and corner radius" => "Sfondo e raggio d'angolo"
// theme.primaryColor: "Accent color" => "Colore d'accento"
// theme.panelBackgroundTransparency: "Panel background opacity" => "Opacità dello sfondo del pannello"
// theme.questionBackgroundTransparency: "Question background opacity" => "Opacità dello sfondo della domanda"
// theme.fontSize: "Font size" => "Dimensione del carattere"
// theme.scale: "Scale" => "Scala"
// theme.cornerRadius: "Corner radius" => "Raggio d'angolo"
// theme.pageTitle: "Title font" => "Carattere del titolo"
// theme.pageDescription: "Description font" => "Carattere di descrizione"
// theme.questionTitle: "Title font" => "Carattere del titolo"
// theme.questionDescription: "Description font" => "Carattere di descrizione"
// theme.editorFont: "Font" => "Font"
// theme.backgroundOpacity: "Opacity" => "Opacità"
// theme.--sjs-font-family: "Font family" => "Famiglia di caratteri"
// theme.--sjs-general-backcolor-dim: "Background color" => "Colore di sfondo"
// theme.--sjs-primary-backcolor: "Accent background" => "Sfondo d'accento"
// theme.--sjs-primary-forecolor: "Accent foreground" => "Primo piano in primo piano"
// theme.--sjs-shadow-small: "Shadow effects" => "Effetti ombra"
// theme.--sjs-shadow-inner: "Shadow effects" => "Effetti ombra"
// theme.--sjs-border-default: "Colors" => "Colori"
// header@header.headerView: "View" => "Vista"
// header@header.logoPosition: "Logo position" => "Posizione del logo"
// header@header.surveyTitle: "Survey title font" => "Carattere del titolo dell'indagine"
// header@header.surveyDescription: "Survey description font" => "Carattere della descrizione dell'indagine"
// header@header.headerTitle: "Survey title font" => "Carattere del titolo dell'indagine"
// header@header.headerDescription: "Survey description font" => "Carattere della descrizione dell'indagine"
// header@header.inheritWidthFrom: "Content area width" => "Larghezza dell'area del contenuto"
// header@header.textAreaWidth: "Text width" => "Larghezza del testo"
// header@header.backgroundColorSwitch: "Background color" => "Colore di sfondo"
// header@header.backgroundImage: "Background image" => "Immagine di sfondo"
// header@header.backgroundImageOpacity: "Opacity" => "Opacità"
// header@header.overlapEnabled: "Overlap" => "Sovrapposizione"
// header@header.logoPositionX: "Logo position" => "Posizione del logo"
// header@header.titlePositionX: "Title position" => "Posizione del titolo"
// header@header.descriptionPositionX: "Description position" => "Descrizione posizione"
// weight.400: "Regular" => "Regolare"
// weight.600: "Heavy" => "Pesante"
// weight.700: "Semi-bold" => "Semi-grassetto"
// weight.800: "Bold" => "Audace"
// backgroundImageFit.auto: "Auto" => "Automatico"
// backgroundImageFit.cover: "Cover" => "Coprire"
// backgroundImageFit.contain: "Contain" => "Contenere"
// backgroundImageFit.fill: "Stretch" => "Stendere"
// backgroundImageFit.tile: "Tile" => "Tegola"
// backgroundImageAttachment.fixed: "Fixed" => "Fissato"
// backgroundImageAttachment.scroll: "Scroll" => "Scorrere"
// headerView.basic: "Basic" => "Basico"
// headerView.advanced: "Advanced" => "Avanzato"
// inheritWidthFrom.survey: "Same as survey" => "Uguale al sondaggio"
// inheritWidthFrom.container: "Fit to container" => "Adatto al contenitore"
// backgroundColorSwitch.none: "None" => "Nessuno"
// backgroundColorSwitch.accentColor: "Accent color" => "Colore d'accento"
// backgroundColorSwitch.custom: "Custom" => "Costume"
// colorPalette.light: "Light" => "Leggero"
// colorPalette.dark: "Dark" => "Oscuro"
// isPanelless.false: "Default" => "Default"
// isPanelless.true: "Without Panels" => "Senza pannelli"
// theme.cornerRadius: "Corner radius" => "Raggio d'angolo"
// theme.fontFamily: "Font family" => "Famiglia di caratteri"
// theme.fontWeightRegular: "Regular" => "Regolare"
// theme.fontWeightHeavy: "Heavy" => "Pesante"
// theme.fontWeightSemiBold: "Semi-bold" => "Semi-grassetto"
// theme.fontWeightBold: "Bold" => "Audace"
// theme.color: "Color" => "Colore"
// theme.placeholderColor: "Placeholder color" => "Colore segnaposto"
// theme.size: "Size" => "Grandezza"
// theme.opacity: "Opacity" => "Opacità"
// ed.toolboxFilteredTextPlaceholder: "Type to search..." => "Digita per cercare..."
// ed.toolboxNoResultsFound: "No results found" => "Nessun risultato trovato"
// paneldynamic.tabTitlePlaceholder: "Tab title placeholder" => "Segnaposto titolo tabulazione"
// theme.--sjs-special-red: "Error messages" => "Messaggi di errore"
// paneldynamic.tabTitlePlaceholder: "A fallback text for tab titles that applies when the tab title pattern doesn't produce a meaningful value." => "Testo di fallback per i titoli delle schede che si applica quando il modello del titolo della scheda non produce un valore significativo."
// theme.fontColor: "Font color" => "Colore del carattere"
// theme.backgroundColor: "Background color" => "Colore di sfondo"
// pe.questionTitleWidth: "Question title width" => "Larghezza del titolo della domanda"
// pe.fileInputPlaceholder: "Select a file or paste a file link..." => "Seleziona un file o incolla un collegamento a un file..."
// panelbase.questionTitleWidth: "Ex.: 200px" => "Es.: 200px"
// panel.questionTitleWidth: "Sets consistent width for question titles when they are aligned to the left of their question boxes. Accepts CSS values (px, %, in, pt, etc.)." => "Imposta una larghezza coerente per i titoli delle domande quando sono allineati a sinistra delle caselle delle domande. Accetta valori CSS (px, %, in, pt, ecc.)."
// page.questionTitleWidth: "Sets consistent width for question titles when they are aligned to the left of their question boxes. Accepts CSS values (px, %, in, pt, etc.)." => "Imposta una larghezza coerente per i titoli delle domande quando sono allineati a sinistra delle caselle delle domande. Accetta valori CSS (px, %, in, pt, ecc.)."
// pe.commentAreaRows: "Comment area height (in lines)" => "Altezza dell'area di commento (in righe)"
// pehelp.commentAreaRows: "Sets the number of displayed lines in text areas for question comments. In the input takes up more lines, the scroll bar appears." => "Imposta il numero di righe visualizzate nelle aree di testo per i commenti alle domande. Nell'input occupa più righe, viene visualizzata la barra di scorrimento."
// pe.enabled: "Enabled" => "Abilitato"
// pe.disabled: "Disabled" => "Disabile"
// pe.inherit: "Inherit" => "Ereditare"
// pe.validateVisitedEmptyFields: "Validate empty fields on lost focus" => "Convalida i campi vuoti in caso di perdita dello stato attivo"
// panellayoutcolumn.effectiveWidth: "Ex.: 30%" => "Es.: 30%"
// panellayoutcolumn.questionTitleWidth: "Ex.: 200px" => "Es.: 200px"
// pehelp.validateVisitedEmptyFields: "Enable this option to trigger validation when a user focuses on an empty input field and then leaves it without making any changes." => "Abilitare questa opzione per attivare la convalida quando un utente si concentra su un campo di input vuoto e poi lo abbandona senza apportare modifiche."
// pehelp.colCount: "Arranges choice options in a multi-column layout. When set to 0, the options are displayed in a single line." => "Dispone le opzioni di scelta in un layout a più colonne. Se impostato su 0, le opzioni vengono visualizzate in una singola riga."
// theme.isPanelless: "This setting applies only to questions outside of a panel." => "Questa impostazione si applica solo alle domande esterne a un pannello."
// theme.primaryColor: "Sets a supplementary color that highlights key survey elements." => "Imposta un colore supplementare che evidenzia gli elementi chiave del rilievo."
// theme.panelBackgroundTransparency: "Adjusts the transparency of panels and question boxes relative to the survey background." => "Regola la trasparenza dei pannelli e delle caselle delle domande rispetto allo sfondo del sondaggio."
// theme.questionBackgroundTransparency: "Adjusts the transparency of input elements relative to the survey background." => "Regola la trasparenza degli elementi di input rispetto allo sfondo del rilevamento."
// theme.cornerRadius: "Sets the corner radius for all rectangular elements. Enable the Advanced Mode if you want to set individual corner radius values for input elements or panels and question boxes." => "Imposta il raggio dell'angolo per tutti gli elementi rettangolari. Abilitare la Modalità avanzata se si desidera impostare i valori del raggio d'angolo individuali per gli elementi di input o i pannelli e le caselle delle domande."
// theme.--sjs-general-backcolor-dim: "Sets the main background color of the survey." => "Imposta il colore di sfondo principale del rilevamento."
// header.inheritWidthFrom: "The \"Same as container\" option auto-adjusts the header content area width to fit into the HTML element the survey is placed in." => "L'opzione \"Uguale al contenitore\" regola automaticamente la larghezza dell'area del contenuto dell'intestazione per adattarla all'elemento HTML in cui è posizionato il sondaggio."
// header.textAreaWidth: "The width of the header area that contains the survey title and description, measured in pixels." => "La larghezza dell'area dell'intestazione che contiene il titolo e la descrizione del sondaggio, misurata in pixel."
// panellayoutcolumn.effectiveWidth: "Accepts values %." => "Accetta valori %."
// panellayoutcolumn.questionTitleWidth: "Accepts values px." => "Accetta valori px."
// p.effectiveColSpan: "Column span" => "Estensione delle colonne"
// progressBarInheritWidthFrom.survey: "Same as survey" => "Come il sondaggio"
// progressBarInheritWidthFrom.container: "Same as container" => "Uguale al contenitore"
// file.allowImagesPreview: "Displays thumbnail previews for uploaded files when possible. Unselect if you want to show file icons instead." => "Visualizza le anteprime in miniatura per i file caricati, quando possibile. Deseleziona se desideri mostrare le icone dei file."
// pehelp.progressBarInheritWidthFrom: "The \"Same as container\" option auto-adjusts the progress bar area width to fit into the HTML element the survey is placed in." => "L'opzione \"Uguale al contenitore\" regola automaticamente la larghezza dell'area della barra di avanzamento per adattarla all'elemento HTML in cui è posizionato il sondaggio."
// p.progressBarInheritWidthFrom: "Progress bar area width" => "Larghezza dell'area della barra di avanzamento"
// maskType.none: "None" => "Nessuno"
// maskType.pattern: "Pattern" => "Modello"
// maskType.numeric: "Numeric" => "Numerico"
// maskType.datetime: "Date and Time" => "Data e ora"
// maskType.currency: "Currency" => "Valuta"

// inputTextAlignment.auto: "Auto" => "Automatico"
// inputTextAlignment.left: "Left" => "A sinistra"
// inputTextAlignment.right: "Right" => "A destra"
// pehelp.inputTextAlignment: "Select how to align input value within the field. The default setting \"Auto\" aligns the input value to the right if currency or numeric masking is applied and to the left if not." => "Selezionare la modalità di allineamento del valore di input all'interno del campo. L'impostazione predefinita \"Auto\" allinea il valore di input a destra se viene applicata una maschera di valuta o numerica e a sinistra in caso contrario."
// p.inputTextAlignment: "Input value alignment" => "Allineamento dei valori di input"
// paneldynamic.showRangeInProgress: "Show the progress bar" => "Visualizzare la barra di avanzamento"
// paneldynamic.showProgressBar: "Show the progress bar" => "Visualizzare la barra di avanzamento"
// paneldynamic.progressBarLocation: "Progress bar alignment" => "Allineamento della barra di avanzamento"
// pv.carousel: "Carousel" => "Carosello"
// progressBarLocation.top: "Top" => "In alto"
// progressBarLocation.bottom: "Bottom" => "Fondoschiena"
// progressBarLocation.topBottom: "Top and bottom" => "Sopra e sotto"
// matrixdropdowncolumn.colCount: "Arranges choice options in a multi-column layout. When set to 0, the options are displayed in a single line. When set to -1, the actual value is inherited from the \"Nested column count\" property of the parent matrix." => "Dispone le opzioni di scelta in un layout a più colonne. Se impostato su 0, le opzioni vengono visualizzate in una singola riga. Se impostato su -1, il valore effettivo viene ereditato dalla proprietà \"Conteggio colonne nidificate\" della matrice padre."
// ed.translationYouTubeNotSupported: "YouTube links are not supported." => "I link di YouTube non sono supportati."
// ed.propertyGridPlaceholderTitle: "Start configuring your form" => "Inizia a configurare il tuo modulo"
// ed.propertyGridPlaceholderDescription: "Click any category icon to explore survey settings. Additional settings will become available once you add a survey element to the design surface." => "Fai clic sull'icona di una categoria per esplorare le impostazioni dell'indagine. Dopo l'aggiunta di un elemento di rilievo all'area di progettazione, saranno disponibili impostazioni aggiuntive."
// pe.caseInsensitive: "Case insensitive" => "Senza distinzione tra maiuscole e minuscole"
// pehelp.caseInsensitive: "Select if uppercase and lowercase letters in the regular expression must be treated as equivalent." => "Selezionare se le lettere maiuscole e minuscole nell'espressione regolare devono essere considerate equivalenti."

// ed.surveyPlaceholderTitle: "Your form is empty" => "Il modulo è vuoto"
// ed.surveyPlaceholderTitleMobile: "Your form is empty" => "Il modulo è vuoto"
// ed.surveyPlaceholderDescription: "Drag an element from the toolbox or click the button below." => "Trascina un elemento dalla casella degli strumenti o fai clic sul pulsante sottostante."
// ed.surveyPlaceholderDescriptionMobile: "Drag an element from the toolbox or click the button below." => "Trascina un elemento dalla casella degli strumenti o fai clic sul pulsante sottostante."
// ed.previewPlaceholderTitle: "No preview" => "Nessuna anteprima"
// ed.previewPlaceholderTitleMobile: "No preview" => "Nessuna anteprima"
// ed.previewPlaceholderDescription: "The survey doesn't contain any visible elements." => "Il sondaggio non contiene elementi visibili."
// ed.previewPlaceholderDescriptionMobile: "The survey doesn't contain any visible elements." => "Il sondaggio non contiene elementi visibili."
// ed.translationsPlaceholderTitle: "No strings to translate" => "Nessun vincolo da tradurre"
// ed.translationsPlaceholderTitleMobile: "No strings to translate" => "Nessun vincolo da tradurre"
// ed.translationsPlaceholderDescription: "Add elements to your form or change the strings filter in the toolbar." => "Aggiungi elementi al modulo o modifica il filtro delle stringhe nella barra degli strumenti."
// ed.translationsPlaceholderDescriptionMobile: "Add elements to your form or change the strings filter in the toolbar." => "Aggiungi elementi al modulo o modifica il filtro delle stringhe nella barra degli strumenti."
// lg.logicPlaceholderTitle: "No logical rules" => "Nessuna regola logica"
// lg.logicPlaceholderTitleMobile: "No logical rules" => "Nessuna regola logica"
// lg.logicPlaceholderDescription: "Create a rule to customize the flow of the survey." => "Crea una regola per personalizzare il flusso del sondaggio."
// lg.logicPlaceholderDescriptionMobile: "Create a rule to customize the flow of the survey." => "Crea una regola per personalizzare il flusso del sondaggio."
// pe.showTimer: "Use a timer" => "Usa un timer"
// theme.advancedMode: "Advanced mode" => "Modalità avanzata"
// pehelp.timerLocation: "Sets the location of a timer on a page." => "Imposta la posizione di un timer su una pagina."
// header.mobileHeight: "When set to 0, the height is calculated automatically to accommodate the header's content." => "Se impostata su 0, l'altezza viene calcolata automaticamente per adattarsi al contenuto dell'intestazione."
// p.mobileHeight: "Height on smartphones" => "Altezza su smartphone"
// header.overlapEnabled: "When enabled, the top of the survey overlays the bottom of the header." => "Se abilitata, la parte superiore del sondaggio si sovrappone alla parte inferiore dell'intestazione."
// ed.creatorSettingTitle: "Creator Settings" => "Impostazioni autore"
// tabs.accentColors: "Accent colors" => "Colori d'accento"
// tabs.scaling: "Scaling" => "Scalata"
// panel.showQuestionNumbers: "Assigns numbers to questions nested within this panel." => "Assegna numeri alle domande nidificate all'interno di questo pannello."
// creatortheme.--sjs-special-background: "Surface background" => "Sfondo della superficie"
// creatortheme.--sjs-primary-background-500: "Primary" => "Primario"
// creatortheme.--sjs-secondary-background-500: "Secondary" => "Secondario"
// creatortheme.surfaceScale: "Surface" => "Superficie"
// creatortheme.userInterfaceBaseUnit: "User interface" => "Interfaccia utente"
// creatortheme.fontScale: "Font" => "Font"
// names.sc2020: "Survey Creator 2020" => "Creatore di sondaggi 2020"
// names.default-light: "Light" => "Leggero"
// names.default-dark: "Dark" => "Oscuro"
// names.default-contrast: "Contrast" => "Contrasto"
// panel.showNumber: "Number this panel" => "Numera questo pannello"
// pehelp.autoAdvanceEnabled: "Select if you want the survey to auto-advance to the next page once a respondent has answered all questions on the current page. This feature won't apply if the last question on the page is open-ended or allows multiple answers." => "Seleziona questa opzione se desideri che l'indagine passi automaticamente alla pagina successiva una volta che un rispondente ha risposto a tutte le domande della pagina corrente. Questa funzione non si applica se l'ultima domanda della pagina è aperta o consente risposte multiple."
// autocomplete.name: "Full Name" => "Nome completo"
// autocomplete.honorific-prefix: "Prefix" => "Prefisso"
// autocomplete.given-name: "First Name" => "Nome di battesimo"
// autocomplete.additional-name: "Middle Name" => "Secondo nome"
// autocomplete.family-name: "Last Name" => "Cognome"
// autocomplete.honorific-suffix: "Suffix" => "Suffisso"
// autocomplete.nickname: "Nickname" => "Soprannome"
// autocomplete.organization-title: "Job Title" => "Titolo di lavoro"
// autocomplete.username: "User Name" => "Nome utente"
// autocomplete.new-password: "New Password" => "Nuova password"
// autocomplete.current-password: "Current Password" => "Password corrente"
// autocomplete.organization: "Organization Name" => "Nome dell'organizzazione"
// autocomplete.street-address: "Full Street Address" => "Indirizzo completo"
// autocomplete.address-line1: "Address Line 1" => "Indirizzo Riga 1"
// autocomplete.address-line2: "Address Line 2" => "Indirizzo Riga 2"
// autocomplete.address-line3: "Address Line 3" => "Indirizzo Riga 3"
// autocomplete.address-level4: "Level 4 Address" => "Indirizzo di livello 4"
// autocomplete.address-level3: "Level 3 Address" => "Indirizzo di livello 3"
// autocomplete.address-level2: "Level 2 Address" => "Indirizzo di livello 2"
// autocomplete.address-level1: "Level 1 Address" => "Indirizzo di livello 1"
// autocomplete.country: "Country Code" => "Prefisso internazionale"
// autocomplete.country-name: "Country Name" => "Nome del paese"
// autocomplete.postal-code: "Postal Code" => "Codice postale"
// autocomplete.cc-name: "Cardholder Name" => "Nome del titolare della carta"
// autocomplete.cc-given-name: "Cardholder First Name" => "Nome del titolare della carta"
// autocomplete.cc-additional-name: "Cardholder Middle Name" => "Secondo nome del titolare della carta"
// autocomplete.cc-family-name: "Cardholder Last Name" => "Cognome del titolare della carta"
// autocomplete.cc-number: "Credit Card Number" => "Numero di carta di credito"
// autocomplete.cc-exp: "Expiration Date" => "Data di scadenza"
// autocomplete.cc-exp-month: "Expiration Month" => "Mese di scadenza"
// autocomplete.cc-exp-year: "Expiration Year" => "Anno di scadenza"
// autocomplete.cc-csc: "Card Security Code" => "Codice di sicurezza della carta"
// autocomplete.cc-type: "Credit Card Type" => "Tipo di carta di credito"
// autocomplete.transaction-currency: "Transaction Currency" => "Valuta della transazione"
// autocomplete.transaction-amount: "Transaction Amount" => "Importo della transazione"
// autocomplete.language: "Preferred Language" => "Lingua preferita"
// autocomplete.bday: "Birthday" => "Compleanno"
// autocomplete.bday-day: "Birthday Day" => "Giorno del compleanno"
// autocomplete.bday-month: "Birthday Month" => "Mese del compleanno"
// autocomplete.bday-year: "Birthday Year" => "Anno di compleanno"
// autocomplete.sex: "Gender" => "Genere"
// autocomplete.url: "Website URL" => "URL del sito web"
// autocomplete.photo: "Profile Photo" => "Foto del profilo"
// autocomplete.tel: "Telephone Number" => "Numero telefonico"
// autocomplete.tel-country-code: "Country Code for Phone" => "Prefisso internazionale per il telefono"
// autocomplete.tel-national: "National Telephone Number" => "Numero telefonico nazionale"
// autocomplete.tel-area-code: "Area Code" => "Prefisso"
// autocomplete.tel-local: "Local Phone Number" => "Numero di telefono locale"
// autocomplete.tel-local-prefix: "Local Phone Prefix" => "Prefisso telefonico locale"
// autocomplete.tel-local-suffix: "Local Phone Suffix" => "Suffisso del telefono locale"
// autocomplete.tel-extension: "Phone Extension" => "Interno telefonico"
// autocomplete.email: "Email Address" => "Indirizzo email"
// autocomplete.impp: "Instant Messaging Protocol" => "Protocollo di messaggistica istantanea"
// ed.lockQuestionsTooltip: "Lock expand/collapse state for questions" => "Blocca lo stato di espansione/compressione per le domande"
// pe.listIsEmpty@pages: "You don't have any pages yet" => "Non hai ancora nessuna pagina"
// pe.addNew@pages: "Add new page" => "Aggiungi nuova pagina"
// ed.zoomInTooltip: "Zoom In" => "Ingrandisci"
// ed.zoomOutTooltip: "Zoom Out" => "Zoom indietro"
// tabs.surfaceBackground: "Surface Background" => "Sfondo della superficie"
// pe.copyDefaultValueFromLastEntry: "Use answers from the last entry as default" => "Usa le risposte dell'ultima voce come impostazione predefinita"
// colors.gray: "Gray" => "Grigio"
// pe.navigationButtonsLocation: "Navigation buttons alignment" => "Allineamento dei pulsanti di navigazione"
// pv.allQuestions: "Show all questions" => "Mostra tutte le domande"
// pv.answeredQuestions: "Show answered questions only" => "Mostra solo le domande con risposta"
// pehelp.navigationButtonsLocation: "Sets the location of navigation buttons on a page." => "Imposta la posizione dei pulsanti di navigazione in una pagina."
// pe.size: "Input field width (in characters)" => "Larghezza del campo di input (in caratteri)"
// pe.choiceValuesFromQuestion: "Use values from the following matrix column or panel question as choice IDs" => "Utilizza i valori della colonna matrice seguente o della domanda del pannello come ID di scelta"
// pe.choiceTextsFromQuestion: "Use values from the following matrix column or panel question as choice texts" => "Usa i valori della seguente colonna matrice o domanda del pannello come testi di scelta"
// pehelp.choiceValuesFromQuestion: "In single- and multiple-selection question types, each choice option has an ID and display value. This setting specifies which matrix column or panel question should provide the IDs." => "Nei tipi di domande a selezione singola e multipla, ogni opzione di scelta ha un ID e un valore visualizzato. Questa impostazione specifica quale colonna matrice o domanda del pannello deve fornire gli ID."
// pehelp.choiceTextsFromQuestion: "In single- and multiple-selection question types, each choice option has an ID and display value. This setting specifies which matrix column or panel question should provide the display texts." => "Nei tipi di domande a selezione singola e multipla, ogni opzione di scelta ha un ID e un valore visualizzato. Questa impostazione specifica quale colonna matrice o domanda del pannello deve fornire i testi visualizzati."
// pe.progressBarLocation: "Progress bar alignment" => "Allineamento della barra di avanzamento"
// progressBarLocation.topbottom: "Top and bottom" => "Sopra e sotto"
// progressBarLocation.aboveheader: "Above the header" => "Sopra l'intestazione"
// progressBarLocation.belowheader: "Below the header" => "Sotto l'intestazione"
// progressBarLocation.off: "Hidden" => "Nascosto"
// survey.progressBarLocation: "Sets the location of the progress bar. The \"Auto\" value displays the progress bar above or below the survey header." => "Imposta la posizione della barra di avanzamento. Il valore \"Auto\" visualizza la barra di avanzamento sopra o sotto l'intestazione del rilevamento."
// survey.readOnly: "Make the survey read-only" => "Rendere l'indagine di sola lettura"
// survey.readOnly: "Select if you want to prevent respondents from filling out your survey." => "Seleziona se vuoi impedire ai rispondenti di compilare la tua indagine."
// paneldynamic.showNumber: "Number the panel" => "Numerare il pannello"
// question.showNumber: "Number this question" => "Numera questa domanda"
// pe.previewMode: "Preview mode" => "Modalità anteprima"
// pe.gridLayoutEnabled: "Enable the grid layout" => "Abilita il layout della griglia"
// pe.maskSettings: "Mask settings" => "Impostazioni maschera"
// pe.detailErrorLocation: "Row expansion error message alignment" => "Allineamento del messaggio di errore di espansione delle righe"
// pehelp.detailErrorLocation: "Sets the location of error messages for questions nested in detail sections. The \"Inherit\" option applies the setting from the \"Error message alignment\" property." => "Imposta la posizione dei messaggi di errore per le domande nidificate nelle sezioni di dettaglio. L'opzione \"Eredita\" applica l'impostazione della proprietà \"Allineamento messaggio di errore\"."
// pe.gridLayoutColumns: "Grid layout columns" => "Colonne del layout a griglia"
// pe.startPageTitlePlaceholder: "Start Page" => "Pagina iniziale"
// panellayoutcolumn.effectiveWidth: "Effective width, %" => "Larghezza effettiva, %"
// panellayoutcolumn.questionTitleWidth: "Question title width, px" => "Larghezza del titolo della domanda, px"
// pe.listIsEmpty@gridLayoutColumns: "You don't have layout columns yet" => "Non hai ancora colonne di layout"
// panel.effectiveColSpan: "Specifies how many columns this panel spans within the grid layout." => "Specifica il numero di colonne distribuite dal pannello all'interno del layout della griglia."
// panel.gridLayoutColumns: "This table lets you configure each grid column within the panel. It automatically sets the width percentage for each column based on the maximum number of elements in a row. To customize the grid layout, manually adjust these values and define the title width for all questions in each column." => "Questa tabella consente di configurare ogni colonna della griglia all'interno del pannello. Imposta automaticamente la percentuale di larghezza per ogni colonna in base al numero massimo di elementi in una riga. Per personalizzare il layout della griglia, regola manualmente questi valori e definisci la larghezza del titolo per tutte le domande in ogni colonna."
// pehelp.gridLayoutEnabled: "Survey Creator allows you to manually adjust the inline widths of form elements to control the layout. If this doesn't produce the desired outcome, you can enable the grid layout, which structures form elements using a column-based system. To configure layout columns, select a page or panel and use the \"Question Settings\" → \"Grid columns\" table. To adjust how many columns a question spans, select it and set the desired value in the \"Layout\" → \"Column span\" field." => "Survey Creator consente di regolare manualmente le larghezze in linea degli elementi del modulo per controllare il layout. Se questo non produce il risultato desiderato, è possibile abilitare il layout a griglia, che struttura gli elementi di forma utilizzando un sistema basato su colonne. Per configurare le colonne del layout, seleziona una pagina o un pannello e utilizza la tabella \"Impostazioni domanda\" → \"Colonne griglia\". Per regolare il numero di colonne di una domanda, selezionala e imposta il valore desiderato nel campo \"Layout\" → \"Estensione colonne\"."
// question.effectiveColSpan: "Specifies how many columns this question spans within the grid layout." => "Specifica il numero di colonne su cui si estende la domanda all'interno del layout della griglia."
// page.gridLayoutColumns: "This table lets you configure each grid column on the page. It automatically sets the width percentage for each column based on the maximum number of elements in a row. To customize the grid layout, manually adjust these values and define the title width for all questions in each column." => "Questa tabella consente di configurare ogni colonna della griglia nella pagina. Imposta automaticamente la percentuale di larghezza per ogni colonna in base al numero massimo di elementi in una riga. Per personalizzare il layout della griglia, regola manualmente questi valori e definisci la larghezza del titolo per tutte le domande in ogni colonna."

// ed.expandTooltip: "Expand" => "Espandere"
// ed.collapseTooltip: "Collapse" => "Collasso"
// pe.itemTitleWidth_placeholder: "Ex.: 100px" => "Es.: 100px"
// pehelp.itemTitleWidth: "Sets consistent width for all item labels. Accepts CSS values (px, %, in, pt, etc.)." => "Imposta una larghezza uniforme per tutte le etichette degli articoli. Accetta valori CSS (px, %, in, pt, ecc.)."
// ed.zoom100Tooltip: "Zoom to 100%" => "Zoom al 100%"
// ed.addLanguageTooltip: "Add Language" => "Aggiungi lingua"
// pehelp.commentAreaRows: "Sets the number of displayed lines in text areas for question comments. If the input takes up more lines, the scroll bar appears." => "Imposta il numero di righe visualizzate nelle aree di testo per i commenti alle domande. Se l'input occupa più righe, viene visualizzata la barra di scorrimento."
// pe.defaultDisplayValue: "Default display value for dynamic texts" => "Valore di visualizzazione predefinito per i testi dinamici"
// pehelp.defaultDisplayValue: "A value displayed in HTML questions and in the dynamic titles and descriptions of survey elements when the question value is empty." => "Un valore visualizzato nelle domande HTML e nei titoli dinamici e nelle descrizioni degli elementi dell'indagine quando il valore della domanda è vuoto."
// showQuestionNumbers.recursive: "Recursive numbering" => "Numerazione ricorsiva"
// paneldynamic.templateQuestionTitleWidth: "Question title width" => "Larghezza del titolo della domanda"
// pe.allowCustomChoices: "Allow custom choices" => "Consenti scelte personalizzate"
// paneldynamic.templateQuestionTitleWidth: "Sets consistent width for question titles when they are aligned to the left of their question boxes. Accepts CSS values (px, %, in, pt, etc.)." => "Imposta una larghezza coerente per i titoli delle domande quando sono allineati a sinistra delle caselle delle domande. Accetta valori CSS (px, %, in, pt, ecc.)."
// page.name: "A page ID that is not visible to respondents." => "Un ID pagina che non è visibile ai rispondenti."
// page.description: "Type a page subtitle." => "Digita un sottotitolo della pagina."
// page.navigationTitle: "A caption displayed on a navigation button in the progress bar or table of contents (TOC). If you leave this field empty, the navigation button will use the page title or page name. To enable the progress bar or TOC, go to \"Survey\" → \"Navigation\"." => "Didascalia visualizzata su un pulsante di navigazione nella barra di avanzamento o nel sommario. Se si lascia vuoto questo campo, il pulsante di navigazione utilizzerà il titolo o il nome della pagina. Per abilitare la barra di avanzamento o il sommario, vai su \"Sondaggio\" → \"Navigazione\"."
// pehelp.allowCustomChoices: "Select to let respondents add their own choices if the desired option isn't available in the dropdown. Custom choices will only be stored temporarily for the duration of the current browser session." => "Seleziona questa opzione per consentire ai rispondenti di aggiungere le proprie scelte se l'opzione desiderata non è disponibile nel menu a discesa. Le scelte personalizzate verranno memorizzate solo temporaneamente per la durata della sessione corrente del browser."