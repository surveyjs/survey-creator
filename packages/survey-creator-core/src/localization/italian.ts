import { editorLocalization } from "survey-creator-core";

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
  // Strings in SurveyJS Creator
  ed: {
    defaultLocale: "Default ({0})",
    survey: "Sondaggio",
    settings: "Impostazioni sondaggio",
    settingsTooltip: "Apri le impostazioni del sondaggio",
    surveySettings: "Impostazioni del sondaggio",
    surveySettingsTooltip: "Apri le impostazioni del sondaggio",
    themeSettings: "Impostazioni del tema",
    themeSettingsTooltip: "Apri le impostazioni del tema",
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
    testSurvey: "Anteprima del sondaggio",
    themeSurvey: "Temi",
    defaultV2Theme: "Default",
    modernTheme: "Tema Moderno",
    defaultTheme: "Default (legacy)",
    testSurveyAgain: "Prova il sondaggio di nuovo",
    testSurveyWidth: "Larghezza sondaggio:",
    navigateToMsg: "Bisogna navigare fino a:",
    logic: "Logica",
    embedSurvey: "Includi sondaggio",
    translation: "Traduzione",
    saveSurvey: "Salva sondaggio",
    saveSurveyTooltip: "Salva sondaggio",
    saveTheme: "Salva tema",
    saveThemeTooltip: "Salva tema",
    designer: "Progetta il sondaggio",
    jsonEditor: "Modifica JSON",
    jsonHideErrors: "Nascondi gli errori",
    jsonShowErrors: "Mostra gli errori",
    undo: "Annulla",
    redo: "Ripristina",
    undoTooltip: "Annulla l'ultima modifica",
    redoTooltip: "Ripristina l'ultima modifica",
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
    propertyGridFilteredTextPlaceholder: "Digita per cercare...",
    propertyGridNoResultsFound: "Nessun risultato trovato",
    toolboxGeneralCategory: "Generale",
    toolboxChoiceCategory: "Domande a scelta",
    toolboxTextCategory: "Domande sull'input di testo",
    toolboxContainersCategory: "Contenitori",
    toolboxMatrixCategory: "Domande sulla matrice",
    toolboxMiscCategory: "Altri",
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
    imagePlaceHolder: "Trascina e rilascia un'immagine qui o fai clic sul pulsante qui sotto e scegli un'immagine da caricare",
    imageChooseImage: "Scegli immagine",
    addNewTypeQuestion: "Aggiungi {0}", //{0} is localizable question type
    chooseLogoPlaceholder: "[LOGO]",
    auto: "Automatico",
    choices_Item: "Articolo ",
    lg: {
      addNewItem: "Aggiungi Nuova Regola",
      empty_tab: "Crea una regola per personalizzare il percorso del sondaggio.",
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
      question_resetValueText: "Valore di ripristino per la domanda: {0}",
      question_setValueText: "Assegna valore: {1} alla domanda: {0}",
      column_visibilityText: "rendi la colonna {0} della domanda {1} visibile", //{0} column name, {1} question name
      column_enableText: "rendi la colonna {0} della domanda {1} abilitata", //{0} column name, {1} question name
      column_requireText: "rendi la colonna {0} della domanda {1} obbligatoria", //{0} column name, {1} question name
      column_resetValueText: "Reimposta il valore della cella per la colonna: {0}",
      column_setValueText: "Assegna valore cella: {1} alla colonna: {0}",
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
    expressionHelp: "Inserisci un’espressione. Puoi usare le parentesi graffe per ottenere l’accesso ai valori delle domande: ‘{domanda1} + {domanda2}’. Le espressioni supportano anche le funzioni: iif(), today(), age(), min(), max(), count(), avg(), e altre.",
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
    "addNew@choices": "Aggiungi una scelta",
    expressionIsEmpty: "Espressione vuota",
    value: "Valore",
    text: "Testo",
    rowid: "ID Riga",
    imageLink: "URL immagine o video",
    columnEdit: "Modifica colonna: {0}",
    itemEdit: "Modifica elemento: {0}",
    url: "URL",
    path: "Percorso",
    valueName: "Nome Valore",
    choicesbyurl: {
      valueName: "Ottenere valori dal seguente campo JSON"
    },
    titleName: "Nome Titolo",
    imageLinkName: "Ottieni gli URL delle immagini dal seguente campo JSON:",
    allowEmptyResponse: "Consenti risposta vuota",
    titlePlaceholder: "Titolo",
    surveyTitlePlaceholder: "Titolo del sondaggio",
    pageTitlePlaceholder: "Pagina {num}",
    descriptionPlaceholder: "Descrizione",
    surveyDescriptionPlaceholder: "Descrizione",
    pageDescriptionPlaceholder: "Descrizione",
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
    visible: "Visibile",
    isRequired: "Obbligatoria",
    markRequired: "Contrassegna come richiesto",
    removeRequiredMark: "Rimuovere il segno richiesto",
    isAllRowRequired: "Richiedi risposta per tutte le righe",
    eachRowUnique: "Impedisci risposte duplicate nelle righe",
    requiredErrorText: "\"Obbligatoria\" messaggio di errore",
    startWithNewLine: "Visualizza la domanda su una nuova riga",
    rows: "Righe",
    cols: "Colonne",
    placeholder: "Testo segnaposto",
    showPreview: "Mostra anteprima",
    storeDataAsText: "Vedi il contenuto JSON come testo",
    maxSize: "Dimensione massima (in bytes)",
    imageHeight: "Altezza immagine",
    imageWidth: "Larghezza immagine",
    rowCount: "Numero delle righe",
    columnLayout: "Layout delle colonne",
    addRowLocation: "Posizione del tasto Aggiungi riga",
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
    mode: "Modalità (editabile/sola lettura)",
    clearInvisibleValues: "Cancella i valori invisibili",
    cookieName: "Nome cookie (per disabilitare esegui il sondaggio due volte in locale)",
    sendResultOnPageNext: "Invia i risultati del sondaggio alla pagina successiva",
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
    showPrevButton: "Visualizza tasto Pagina Precedente (l'utente può tornare alla pagina precedente)",
    firstPageIsStarted: "La prima pagina nel sondaggio è la pagina iniziale",
    showCompletedPage: "Mostra la pagina sondaggio Completo",
    goNextPageAutomatic: "Rispondendo a tutte le domande, vai alla pagina successiva in automatico",
    showProgressBar: "Visualizza barra di avanzamento",
    questionTitleLocation: "Posizione del titolo della domanda",
    requiredText: "Simbolo domanda obbligatoria, ad esempio (*)",
    questionStartIndex: "La domanda inizia con l'indice (1, 2 oppure 'A', 'a')",
    showQuestionNumbers: "Visualizza il numero delle domande",
    questionTitleTemplate: "Template titolo della domanda, il default è: '{no}. {require} {title}'",
    questionErrorLocation: "Posizione del messaggio di errore",
    focusFirstQuestionAutomatic: "Al cambio pagina, posiziona il cursore sulla prima domanda",
    questionsOrder: "Ordine delle domande sulla pagina",
    maxTimeToFinish: "Tempo massimo per terminare il sondaggio",
    maxTimeToFinishPage: "Tempo massimo per terminare una pagina del sondaggio",
    image: {
      imageHeight: "Altezza immagine (in valori accettati da CSS)",
      imageWidth: "Larghezza immagine (in valori accettati da CSS)"
    },
    // survey templates
    survey: {
      title: "Titolo"
    },
    page: {
      title: "Titolo",
      maxTimeToFinish: "Tempo massimo per terminare la pagina (in secondi)"
    },
    question: {
      page: "Pagina principale"
    },
    showTimerPanel: "Visualizzazione pannello timer",
    showTimerPanelMode: "Modalità visualizzazione pannello timer",
    renderMode: "Modalità di visualizzazione",
    allowAddPanel: "Consenti l'aggiunta di un pannello",
    allowRemovePanel: "Consenti la rimozione di un pannello",
    noEntriesText: "Testo segnaposto delle voci vuote",
    panelAddText: "Testo del tasto Aggiungi pannello",
    panelRemoveText: "Testo del tasto Rimuovi pannello",
    isSinglePage: "Visualizza tutti gli elementi su una pagina",
    html: "Markup HTML",
    expression: "Espressione",
    setValue: "Rispondi",
    dataFormat: "Formato immagine",
    allowAddRows: "Permetti di aggiungere righe",
    allowRemoveRows: "Permetti di eliminare righe",
    allowRowsDragAndDrop: "Consenti il trascinamento delle righe",
    responsiveImageSizeHelp: "Non si applica se si specifica l'esatta larghezza o altezza dell'immagine.",
    minImageWidth: "Larghezza minima dell'immagine",
    maxImageWidth: "Larghezza massima dell'immagine",
    minImageHeight: "Altezza minima dell'immagine",
    maxImageHeight: "Altezza massima dell'immagine",
    minValue: "Valore minimo",
    maxValue: "Valore massimo",
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
    maxOthersLength: "Lunghezza massima del commento (in caratteri)",
    autoGrowComment: "Espansione automatica dell'area dei commenti, se necessaria",
    allowResizeComment: "Consenti agli utenti di ridimensionare le aree di testo",
    textUpdateMode: "Aggiornare il valore del testo della domanda",
    focusOnFirstError: "Imposta il focus sulla prima risposta invalida",
    checkErrorsMode: "Esegui la convalida",
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
    paneldynamic: {
      confirmDelete: "Conferma eliminazione del pannello"
    },
    panelCount: "Numero iniziale di pannelli",
    minPanelCount: "Numero minimo di pannelli",
    maxPanelCount: "Numero massimo di pannelli",
    panelsState: "Stato di espansione del pannello interno",
    templateDescription: "Template descrizione",
    templateTitle: "Template titolo",
    panelPrevText: "Testo del tasto Pannello Precedente",
    panelNextText: "Testo del tasto Pannello Successivo",
    showRangeInProgress: "Mostra la barra di avanzamento",
    templateTitleLocation: "Posizione del titolo della domanda",
    panelRemoveButtonLocation: "Posizione del tasto Rimozione Pannello",
    hideIfRowsEmpty: "Nascondi la domanda se non ci sono righe",
    hideColumnsIfEmpty: "Nascondi le colonne se non ci sono righe",
    rateValues: "Valori personalizzati",
    rateCount: "Conteggio delle tariffe",
    autoGenerate: "Come specificare i valori dei tassi?",
    hideIfChoicesEmpty: "Nascondi la domanda se non ci sono scelte",
    hideNumber: "Nascondi numero domanda",
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
    showClearButton: "Mostra il tasto Cancella",
    showNumber: "Mostra numero pannello",
    logoWidth: "Larghezza logo (in valori accettati da CSS)",
    logoHeight: "Altezza logo (in valori accettati da CSS)",
    readOnly: "Sola lettura",
    enableIf: "Editabile se",
    emptyRowsText: "\"Nessuna riga\" messaggio",
    size: "Dimensione dell'input (in caratteri)",
    separateSpecialChoices: "Scelte speciali separate (Nessuno, Altro, Seleziona tutti)",
    choicesFromQuestion: "Copia le scelte dalla domanda seguente:",
    choicesFromQuestionMode: "Quale scelta copiare?",
    showCommentArea: "Mostra l'area commento",
    commentPlaceholder: "Testo segnaposto area commento",
    displayRateDescriptionsAsExtremeItems: "Mostra le descrizioni come valori estremi",
    rowsOrder: "Ordine righe",
    columnsLayout: "Layout colonna",
    columnColCount: "Numero colonne annidate",
    state: "Estensione del pannello",
    correctAnswer: "Risposta corretta",
    defaultPanelValue: "Valori di default",
    cells: "Testi Celle",
    keyName: "Colonna chiave",
    itemvalue: {
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
    tabs: {
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
      layout: "Layout",
      data: "Dati",
      validation: "Validazione",
      cells: "Testi Cella",
      showOnCompleted: "Sondaggio Completo",
      logo: "Logo nel Titolo sondaggio",
      slider: "Cursore",
      expression: "Espressione",
      others: "Altri"
    },
    editProperty: "Modifica propietà '{0}'",
    items: "[ Elemento: {0} ]",
    choicesVisibleIf: "Scelte visibili se",
    choicesEnableIf: "Scelte selezionabili se",
    columnsEnableIf: "Colonne visibili se",
    rowsEnableIf: "Righe visibili se",
    indent: "Aggiungi rientri",
    panel: {
      indent: "Aggiungi rientri esterni"
    },
    innerIndent: "Aggiungi rientri interni",
    defaultValueFromLastRow: "Prendi i valori predefiniti dall'ultima riga",
    defaultValueFromLastPanel: "Prendi i valori predefiniti dall'ultimo pannello",
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
    signatureWidth: "Larghezza firma",
    signatureHeight: "Altezza firma",
    verticalAlign: "Allineamento verticale",
    alternateRows: "Righe alternate",
    columnsVisibleIf: "Colonne visibili se",
    rowsVisibleIf: "Righe visibili se",
    otherPlaceholder: "Testo segnaposto area commenti",
    signaturepad: {
      showPlaceholder: "Visualizzare il segnaposto",
      placeholder: "Testo segnaposto",
      signatureWidth: "Larghezza dell'area della firma",
      signatureHeight: "Altezza dell'area della firma",
      signatureAutoScaleEnabled: "Ridimensionamento automatico dell'area della firma",
      penMinWidth: "Larghezza minima della penna",
      penMaxWidth: "Larghezza massima della penna"
    },
    filePlaceholder: "Testo segnaposto del file",
    photoPlaceholder: "Testo segnaposto foto",
    fileOrPhotoPlaceholder: "Testo segnaposto per file o foto",
    rateType: "Tipo di tariffa"
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
    decimal: "decimale",
    currency: "valuta",
    percent: "percento",
    firstExpanded: "Il primo pannello è esteso",
    off: "Nascondi il numero delle domande",
    onpanel: "Inizia su ogni pannello",
    onPanel: "Inizia su ogni pannello",
    onSurvey: "Continua lo svolgimento del sondaggio",
    list: "Lista",
    progressTop: "Navigatore del pannello + Barra di avanzamento in alto",
    progressBottom: "Navigatore del pannello + Barra di avanzamento in basso",
    progressTopBottom: "Navigatore del pannello + Barra di avanzamento in alto e in basso",
    tab: "Schede",
    horizontal: "Orizzontale",
    vertical: "Verticale",
    top: "In alto",
    bottom: "In basso",
    topBottom: "In alto e in basso",
    both: "Entrambe",
    left: "Sinistra",
    right: "Destra",
    leftRight: "Destra e sinistra",
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
    on: "Inizia da capo in ogni pagina",
    onPage: "Continua dalla pagina precedente",
    edit: "Editabile",
    display: "Sola lettura",
    onComplete: "Al termine del sondaggio",
    onHidden: "Quando la domanda diventa nascosta",
    onHiddenContainer: "Quando la domanda, o il suo pannello/pagina, diventa nascosta",
    contain: "Contenere",
    cover: "Coprire",
    fill: "Riempire",
    clearInvisibleValues: {
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
    all: "Tutto",
    page: "Pagina",
    survey: "Sondaggio",
    onNextPage: "Quando si passa alla pagina successiva",
    onValueChanged: "Dopo la modifica di una risposta",
    onValueChanging: "Prima della modifica di una risposta",
    standard: "Struttura originale",
    singlePage: "Tutte le domande in un'unica pagina",
    questionPerPage: "Ogni singola domanda in una pagina",
    noPreview: "No anteprima",
    showAllQuestions: "Mostra tutte le domande",
    showAnsweredQuestions: "Mostra solo le domande con risposta",
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
    showNavigationButtons: {
      none: "Nascosto"
    },
    showProgressBar: {
      off: "Nascosto"
    },
    showTimerPanel: {
      none: "Nascosto"
    },
    showTimerPanelMode: {
      all: "Entrambe"
    },
    detailPanelMode: {
      none: "Nascosto"
    },
    addRowLocation: {
      default: "Dipende dal layout della matrice"
    },
    panelsState: {
      default: "Gli utenti non possono espandere o comprimere i pannelli",
      collapsed: "Tutti i pannelli sono compressi",
      expanded: "Tutti i pannelli sono estesi"
    },
    widthMode: {
      auto: "Automatico",
      static: "Statico",
      responsive: "Reattivo"
    },
    imageFit: {
      none: "Nessuno",
      contain: "Contenere",
      cover: "Coprire",
      fill: "Riempire"
    },
    contentMode: {
      auto: "Automatico",
      image: "Immagine",
      video: "Video",
      youtube: "Collegamenti esterni"
    },
    displayMode: {
      auto: "Automatico",
      buttons: "Pulsanti",
      dropdown: "Menù a discesa"
    },
    rateColorMode: {
      default: "Default"
    },
    autoGenerate: {
      "true": "Generare",
      "false": "Inserisci manualmente"
    },
    rateType: {
      labels: "Etichette",
      stars: "Stelle",
      smileys: "Faccine"
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
  pehelp: {
    cookieName: "I cookie impediscono agli utenti di compilare due volte lo stesso sondaggio.",
    size: "Ridimensiona l'area visibile del campo di input. Utilizzare l'impostazione <b>Convalida → lunghezza massima</b> per limitare la lunghezza di input.",
    format: "Usa {0} come segnaposto per il valore effettivo.",
    totalText: "Visibile solo quando almeno una colonna ha il tipo Totale o l'espressione Totale.",
    acceptedTypes: "Per ulteriori informazioni, consultare la descrizione dell'attributo [accept](https://www.w3schools.com/tags/att_input_accept.asp).",
    columnColCount: "Applicabile solo ai tipi di cella Opzione multipla e Casella di controllo.",
    autocomplete: "Per ulteriori informazioni, consultare la descrizione dell'attributo [autocomplete](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete).",
    valueName: "Se non si imposta questa proprietà, la risposta sarà memorizzata in un campo specificato dalla proprietà Nome.",
    choicesbyurl: {
      valueName: " "
    },
    keyName: "Se la colonna specificata contiene valori identici, il sondaggio produce l'errore \"Valore chiave non univoco\".",
    filePlaceholder: "Si applica quando \"Tipo di origine\" è \"File locali\" o quando la fotocamera non è disponibile",
    photoPlaceholder: "Si applica quando \"Tipo di sorgente\" è \"Fotocamera\".",
    fileOrPhotoPlaceholder: "Si applica quando \"Tipo di origine\" è \"File locali o fotocamera\"."
  },
  // Properties
  p: {
    title: {
      name: "Titolo",
      title: "Lascialo vuoto, se è uguale a 'Nome'"
    },
    multiSelect: "Consenti selezione multipla",
    showLabel: "Mostra le didascalie delle immagini",
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
    titleLocation: "Posizione del titolo",
    descriptionLocation: "Posizione della descrizione",
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
    isUnique: "È unico",
    showInMultipleColumns: "Mostra in più colonne",
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
    itemSize: "Dimensione opzione",
    elements: "Elementi",
    content: "Contenuto",
    navigationButtonsVisibility: "Visibilità Pulsanti di navigazione",
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
    allowCameraAccess: "Consenti accesso alla videocamera",
    scaleColorMode: "Modalità scala colore",
    rateColorMode: "Valuta la modalità colore",
    templateTabTitle: "Titolo della scheda Modello",
    templateVisibleIf: "Modello visibile se",
    copyDisplayValue: "Copia valore di visualizzazione"
  },
  theme: {
    "--background": "Colore di sfondo",
    "--background-dim-light": "Colore della luce fioca dello sfondo",
    "--primary-foreground": "Colore di primo piano primario",
    "--foreground": "Colore di primo piano",
    "--base-unit": "Unità base",
    advancedMode: "Modalità avanzata",
    groupGeneral: "Generale",
    groupHeader: "Intestazione",
    groupBackground: "Sfondo",
    groupAppearance: "Apparenza",
    themeName: "Tema",
    themeMode: "Aspetto della domanda",
    themeModePanels: "Default",
    themeModeLightweight: "Senza pannelli",
    themePaletteLight: "Leggero",
    themePaletteDark: "Oscuro",
    primaryColor: "Colore principale",
    primaryDefaultColor: "Default",
    primaryDarkColor: "Fluttuare",
    primaryLightColor: "Selezionato",
    coverTitleForecolor: "Precolore del titolo",
    coverDescriptionForecolor: "Descrizione forecolor",
    coverOverlapEnabled: "Sovrapposizione",
    backgroundDimColor: "Colore di sfondo",
    backgroundImage: "Immagine di sfondo",
    backgroundImageFitAuto: "Automatico",
    backgroundImageFitCover: "Coprire",
    backgroundImageFitContain: "Contenere",
    backgroundImageFitFill: "Stendere",
    backgroundImageFitTile: "Tegola",
    backgroundOpacity: "Opacità",
    backgroundImageAttachmentFixed: "Fissato",
    backgroundImageAttachmentScroll: "Scorrere",
    panelBackgroundTransparency: "Opacità dello sfondo del pannello",
    questionBackgroundTransparency: "Opacità dello sfondo della domanda",
    questionTitle: "Tipo di carattere del titolo della domanda",
    editorPanel: "Elemento di input",
    backgroundCornerRadius: "Sfondo e raggio d'angolo",
    backcolor: "Sfondo predefinito",
    hovercolor: "Sfondo al passaggio del mouse",
    borderDecoration: "Decorazione del bordo",
    accentBackground: "Sfondo principale",
    accentForeground: "Primo piano in primo piano",
    primaryForecolor: "Colore predefinito",
    primaryForecolorLight: "Colore disabilitato",
    colorsTitle: "Colori",
    font: "Font",
    lines: "Poema",
    borderDefault: "Scuro",
    borderLight: "Accendino",
    fontFamily: "Famiglia di caratteri",
    fontSize: "Dimensione del carattere",
    color: "Colore",
    placeholderColor: "Colore segnaposto",
    size: "Grandezza",
    fontWeightRegular: "Regolare",
    fontWeightHeavy: "Pesante",
    fontWeightSemiBold: "Semi-grassetto",
    fontWeightBold: "Audace",
    scale: "Scala",
    cornerRadius: "Raggio d'angolo",
    surveyTitle: "Carattere del titolo del sondaggio",
    surveyDescription: "Carattere della descrizione dell'indagine",
    pageTitle: "Carattere del titolo della pagina",
    titleFont: "Carattere del titolo",
    descriptionFont: "Carattere di descrizione",
    boxShadowX: "X",
    boxShadowY: "Y",
    boxShadowAddRule: "Aggiungi effetto ombra",
    opacity: "Opacità",
    boxShadowBlur: "Sfocatura",
    boxShadowSpread: "Diffusione",
    boxShadowDrop: "Goccia",
    boxShadowInner: "Interno",
    shadow: "Effetti ombra",
    headerView: "Vista",
    headerViewBasic: "Basico",
    headerViewAdvanced: "Avanzato",
    coverInheritWidthFrom: "Larghezza dell'area di contenuto",
    coverInheritWidthFromSurvey: "Come il sondaggio",
    coverInheritWidthFromContainer: "Adatto al contenitore",
    coverTextAreaWidth: "Larghezza del testo",
    coverBackgroundColorSwitch: "Colore di sfondo",
    coverBackgroundColorNone: "Nessuno",
    coverBackgroundColorAccentColor: "Colore principale",
    coverBackgroundColorCustom: "Costume",
    horizontalAlignmentLeft: "A sinistra",
    horizontalAlignmentCenter: "Centro",
    horizontalAlignmentRight: "A destra",
    verticalAlignmentTop: "In alto",
    verticalAlignmentMiddle: "Mezzo",
    verticalAlignmentBottom: "Fondoschiena",
    logoPosition: "Posizione del logo",
    coverTitlePosition: "Posizione del titolo",
    coverDescriptionPosition: "Descrizione posizione",
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
      green: "Verde"
    }
  }
};

editorLocalization.locales["it"] = italianTranslation;

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
// theme.groupGeneral: "General" => "Generale"
// theme.groupAdvanced: "Advanced" => "Avanzato"
// theme.themeName: "Theme" => "Tema"
// theme.themeMode: "Question appearance" => "Aspetto della domanda"
// theme.themeModePanels: "Default" => "Default"
// theme.themeModeLightweight: "Without Panels" => "Senza pannelli"
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
// theme.surveyTitle: "Survey title font" => "Carattere del titolo del sondaggio"
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
// theme.groupHeader: "Header" => "Intestazione"
// theme.coverTitleForecolor: "Title forecolor" => "Precolore del titolo"
// theme.coverOverlapEnabled: "Overlap" => "Sovrapposizione"
// theme.backgroundImageFitFill: "Stretch" => "Stendere"
// theme.backgroundImageFitTile: "Tile" => "Tegola"
// theme.headerView: "View" => "Vista"
// theme.headerViewBasic: "Basic" => "Basico"
// theme.headerViewAdvanced: "Advanced" => "Avanzato"
// theme.coverInheritWidthFrom: "Content area width" => "Larghezza dell'area di contenuto"
// theme.coverInheritWidthFromSurvey: "Same as survey" => "Come il sondaggio"
// theme.coverInheritWidthFromPage: "Fit to page" => "Adatta alla pagina"
// theme.coverTextAreaWidth: "Text width" => "Larghezza del testo"
// theme.coverBackgroundColorSwitch: "Background color" => "Colore di sfondo"
// theme.coverBackgroundColorNone: "None" => "Nessuno"
// theme.coverBackgroundColorAccentColor: "Accent color" => "Colore principale"
// theme.coverBackgroundColorCustom: "Custom" => "Costume"
// theme.horizontalAlignmentLeft: "Left" => "A sinistra"
// theme.horizontalAlignmentCenter: "Center" => "Centro"
// theme.horizontalAlignmentRight: "Right" => "A destra"
// theme.verticalAlignmentTop: "Top" => "In alto"
// theme.verticalAlignmentMiddle: "Middle" => "Mezzo"
// theme.verticalAlignmentBottom: "Bottom" => "Fondoschiena"
// theme.logoPosition: "Logo Position" => "Posizione del logo"
// theme.coverTitlePosition: "Title Position" => "Posizione del titolo"
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
// theme.groupBackground: "Background" => "Sfondo"
// theme.groupAppearance: "Appearance" => "Apparenza"
// theme.coverDescriptionForecolor: "Description forecolor" => "Descrizione forecolor"
// ed.themeResetConfirmation: "Do you really want to reset the theme? All your customizations will be lost." => "Vuoi davvero resettare il tema? Tutte le tue personalizzazioni andranno perse."
// ed.themeResetConfirmationOk: "Yes, reset the theme" => "Sì, reimposta il tema"
// theme.groupBackground: "Background" => "Sfondo"
// theme.groupAppearance: "Appearance" => "Apparenza"
// theme.coverDescriptionForecolor: "Description forecolor" => "Descrizione forecolor"
// theme.coverInheritWidthFromContainer: "Fit to container" => "Adatto al contenitore"
// signaturepad.showPlaceholder: "Show the placeholder" => "Visualizzare il segnaposto"
// signaturepad.placeholder: "Placeholder text" => "Testo segnaposto"
// theme.surveyDescription: "Survey description font" => "Carattere della descrizione dell'indagine"

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
// theme.coverDescriptionPosition: "Description position" => "Descrizione posizione"
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
