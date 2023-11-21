import { editorLocalization, defaultStrings } from "survey-creator-core";

export var nbStrings = {
  // survey templates
  survey: {
    edit: "Rediger",
    externalHelpLink: "Se og lær hvordan å opprette nye skjema",
    externalHelpLinkUrl: "https://www.youtube.com/channel/UCH2ru9okIcooNZfpIbyq4qQ?view_as=subscriber",
    dropQuestion: "Dra og slipp et spørsmål her fra Verktøylisten til venstre.",
    addLogicItem: "Opprett en regel for å skreddersy skjemaflyten",
    copy: "Kopier",
    duplicate: "Duplikat",
    addToToolbox: "Legg til verktøylisten",
    deletePanel: "Slett panel",
    deleteQuestion: "Slett spørsmål",
    convertTo: "Konverter til",
    drag: "Dra element",
  },
  // Question types
  qt: {
    default: "Standard",
    checkbox: "Sjekkboks",
    comment: "Kommentar",
    imagepicker: "Bildevelger",
    ranking: "Rangering",
    image: "Bilde",
    dropdown: "Nedtrekksliste",
    tagbox: "Rullegardinmenyen for flere valg",
    file: "Fil",
    html: "Html",
    matrix: "Matrise (enkelvalg)",
    matrixdropdown: "Matrise (flervalg)",
    matrixdynamic: "Matrise (dynamiske rader)",
    multipletext: "Flerlinjetekst",
    panel: "Panel",
    paneldynamic: "Panel (dynamiske paneler)",
    radiogroup: "Radiogruppe",
    rating: "Rangering",
    text: "Enkel tekst",
    boolean: "Yes/No (Boolean)",
    expression: "Formel",
    signaturepad: "Signatur",
    buttongroup: "Knappegruppe"
  },
  // Strings in SurveyJS Creator
  ed: {
    defaultLocale: "Standard ({0})",
    survey: "Skjema",
    settings: "Skjemainnstillinger",
    settingsTooltip: "Åpne skjemainnstillinger",
    surveySettings: "Innstillinger for undersøkelse",
    surveySettingsTooltip: "Åpne innstillinger for evaluering",
    themeSettings: "Tema innstillinger",
    themeSettingsTooltip: "Åpne temainnstillinger",
    showPanel: "Vis panel",
    hidePanel: "Skjul panel",
    prevSelected: "Velg forrige",
    nextSelected: "Velg neste",
    prevFocus: "Fokus forrige",
    nextFocus: "Fokus neste",
    surveyTypeName: "Undersøkelse",
    pageTypeName: "Side",
    panelTypeName: "Panel",
    questionTypeName: "Spørsmål",
    columnTypeName: "Kolonne",
    addNewPage: "Legg til ny side",
    moveRight: "Bla til høyre",
    moveLeft: "Bla til venstre",
    deletePage: "Slett side",
    editPage: "Rediger side",
    edit: "Rediger",
    newPageName: "side",
    newQuestionName: "spørsmål",
    newPanelName: "panel",
    newTextItemName: "tekst",
    testSurvey: "Test skjema",
    themeSurvey: "Temaer",
    defaultV2Theme: "Standard",
    modernTheme: "Moderne",
    defaultTheme: "Standard (eldre)",
    testSurveyAgain: "Test skjema igjen",
    testSurveyWidth: "Skjemabredde: ",
    navigateToMsg: "Du måtte navigere til:",
    logic: "Skjemalogikk",
    embedSurvey: "Integrer skjema",
    translation: "Oversettelse",
    saveSurvey: "Lagre skjema",
    saveSurveyTooltip: "Lagre skjema",
    saveTheme: "Lagre tema",
    saveThemeTooltip: "Lagre tema",
    designer: "Skjemadesigner",
    jsonEditor: "JSON-redigering",
    jsonHideErrors: "Skjul feil",
    jsonShowErrors: "Vis feil",
    undo: "Angre",
    redo: "Gjenta",
    undoTooltip: "Angre siste endring",
    redoTooltip: "Gjør om siste endring",
    showMoreChoices: "Vis mer",
    showLessChoices: "Vis mindre",
    copy: "Kopier",
    cut: "Kutt",
    paste: "Lim innn",
    copyTooltip: "Kopier valgt seksjon inn i utklippstavla",
    cutTooltip: "Kutt valgt seksjon inn i utklippstavla",
    pasteTooltip: "Lim inn fra utklippstavla",
    options: "Alternativer",
    generateValidJSON: "Lag gyldig JSON",
    generateReadableJSON: "Lag lesbar JSON",
    toolbox: "Verktøyliste",
    "property-grid": "Innstillinger",
    propertyGridFilteredTextPlaceholder: "Skriv for å søke ...",
    toolboxGeneralCategory: "Generelt",
    toolboxChoiceCategory: "Choice Spørsmål",
    toolboxTextCategory: "Spørsmål om tekstinndata",
    toolboxContainersCategory: "Beholdere",
    toolboxMatrixCategory: "Matrise Spørsmål",
    toolboxMiscCategory: "Misc",
    correctJSON: "Vennligst korriger JSON.",
    surveyResults: "Skjemaresultat: ",
    surveyResultsTable: "Som tabell",
    surveyResultsJson: "Som JSON",
    resultsTitle: "Spørsmålstittel",
    resultsName: "Spørsmålsnavn",
    resultsValue: "Svar",
    resultsDisplayValue: "Vist verdi",
    modified: "Endret",
    saving: "Lagrer",
    saved: "Lagret",
    propertyEditorError: "Feil:",
    saveError: "Feil! Skjema innhold er ikke lagret.",
    translationPropertyGridTitle: "Språkinnstillinger",
    themePropertyGridTitle: "Tema innstillinger",
    translationLanguages: "Språk",
    translationDeleteLanguage: "Er du sikker på at du ønsker å slette alle strenger for dette språket?",
    translationAddLanguage: "Velg språk for oversetting",
    translationShowAllStrings: "Vis alle strenger",
    translationShowUsedStringsOnly: "Bare brukte strenger",
    translationShowAllPages: "Vis alle sider",
    translationNoStrings: "Ingen strenger å oversette. Vennligst endre filteret.",
    translationExportToSCVButton: "Eksporter til CSV",
    translationImportFromSCVButton: "Importer fra CSV",
    translateUsigAI: "Oversett alle automatisk",
    translationDialogTitle: "Uoversatte strenger",
    translationMergeLocaleWithDefault: "Flett {0} med standard språk",
    translationPlaceHolder: "Oversettelse...",
    themeExportButton: "Eksport",
    themeImportButton: "Importere",
    surveyJsonExportButton: "Eksport",
    surveyJsonImportButton: "Importere",
    surveyJsonCopyButton: "Kopiere til utklippstavlen",
    themeResetButton: "Tilbakestill temainnstillinger til standard",
    themeResetConfirmation: "Vil du virkelig tilbakestille temaet? Alle tilpasningene dine vil gå tapt.",
    themeResetConfirmationOk: "Ja, tilbakestill temaet",
    bold: "Fet",
    italic: "Kursiv",
    underline: "Underlinjet",
    addNewQuestion: "Legg til spørsmål",
    selectPage: "Velg side...",
    carryForwardChoicesCopied: "Valgene kopieres fra",
    htmlPlaceHolder: "HTML-innhold vil være her.",
    panelPlaceHolder: "Slipp et spørsmål fra verktøykassen her.",
    surveyPlaceHolder: "Undersøkelsen er tom. Dra et element fra verktøykassen, eller klikk på knappen nedenfor.",
    imagePlaceHolder: "Dra og slipp et bilde her, eller klikk på knappen nedenfor og velg et bilde du vil laste opp",
    imageChooseImage: "Velg bilde",
    addNewTypeQuestion: "Legg til {0}", //{0} is localizable question type
    chooseLogoPlaceholder: "[LOGO]",
    auto: "auto",
    choices_Item: "Vare ",
    lg: {
      addNewItem: "Legg til ny regel",
      empty_tab: "Opprett en regel for å tilpasse flyten i evalueringen.",
      page_visibilityName: "Sidesynlighet",
      page_enableName: "Aktivere (deaktivere) side",
      page_requireName: "Gjøre siden obligatorisk",
      panel_visibilityName: "Panelsynlighet",
      panel_enableName: "Panel aktivere/deaktivere",
      panel_requireName: "Gjøre siden obligatorisk",
      question_visibilityName: "Spørsmålssynlghet",
      question_enableName: "Spørsmål aktivere/deaktivere",
      question_requireName: "Spørsmål valgfritt/påkrevd",
      question_resetValueName: "Tilbakestille spørsmålsverdien",
      question_setValueName: "Angi spørsmålsverdi",
      column_visibilityName: "Vis kolonne (skjul)",
      column_enableName: "Aktivere (deaktivere) kolonne",
      column_requireName: "Gjøre kolonne obligatorisk",
      column_resetValueName: "Tilbakestille kolonneverdi",
      column_setValueName: "Angi kolonneverdi",
      trigger_completeName: "Fullfør skjema",
      trigger_setvalueName: "Angi spørsmålsnavn",
      trigger_copyvalueName: "Kopier spørsmålsverdi",
      trigger_skipName: "Hopp til spørsmål",
      trigger_runExpressionName: "Kjør tilpasset formel",
      completedHtmlOnConditionName: "Tilpasset 'Takk-side' tekst",
      page_visibilityDescription: "Gjør siden synlig når formelen evalueres til 'sann', og holder den ellers usynlig.",
      panel_visibilityDescription: "Gjør panelet synlig når formelen evalueres til 'sann', og holder den ellers usynlig.",
      panel_enableDescription: "Aktiverer panelet, og alle elementer inni, når formelen evalueres til 'sann'. I andre tilfeller holdes de deaktivert.",
      question_visibilityDescription: "Gjør spørsmålet synlig når formelen evalueres til 'sann', og holder den ellers usynlig.",
      question_enableDescription: "Aktiverer spørsmålet når formelen evalueres til 'sann', og holder den ellers deaktivert.",
      question_requireDescription: "Spørmsålet blir påkrevd når formelen evalueres til 'sann'.",
      trigger_completeDescription: "Når formelen evalueres til 'sann' fullføres skjemaet og sluttbrukeren ser 'Takk-siden'.",
      trigger_setvalueDescription: "Når spørsmålsverdier som er brukt i formelen endres, og formelen evalueres som 'sann', vil verdien settes i det valgte spørsmålet.",
      trigger_copyvalueDescription: "Når spørsmålsverdier som er brukt i formelen endres, og formelen evalueres som 'sann', vil verdien i et valgt spørsmål kopieres til et annet valgt spørsmål.",
      trigger_skipDescription: "Når formelen evalueres til 'sann' vil skjemaet hoppe til/fokusere på valgt spørsmål.",
      trigger_runExpressionDescription: "Når formelen evauleres til 'sann' vil den tilpassede formelen utføres. Du kan valgfritt sette formelens resultat inn i det valgte spørsmålet.",
      completedHtmlOnConditionDescription: "Hvis formelen evalueres til 'sann' vil standardteksten på 'Takk siden' endres til den gitte teksten.",
      itemExpressionText: "Når formelen: '{0}' evalueres til 'sann':", //{0} - the expression
      itemEmptyExpressionText: "Ny regel",
      page_visibilityText: "Gjøre side {0} synlig", //{0} page name
      panel_visibilityText: "Gjør panel {0} synlig", //{0} panel name
      panel_enableText: "Gjør panel {0} aktivert", //{0} panel name
      question_visibilityText: "Gjør spørsmål {0} synlig", //{0} question name
      question_enableText: "Gjør spørsmål {0} aktivert", //{0} question name
      question_requireText: "Gjør spørsmål {0} påkrevd", //{0} question name
      question_resetValueText: "Tilbakestill verdi for spørsmål: {0}",
      question_setValueText: "tilordne verdi: {1} til spørsmålet: {0}",
      column_visibilityText: "Gjør kolonne {0} av spørsmålet {1} synlig", //{0} column name, {1} question name
      column_enableText: "Gjør kolonne {0} av spørsmålet {1} aktiver", //{0} column name, {1} question name
      column_requireText: "Gjør kolonne {0} av spørsmålet {1} nødvendig", //{0} column name, {1} question name
      column_resetValueText: "Tilbakestill celleverdi for kolonne: {0}",
      column_setValueText: "Tilordne celleverdi: {1} til kolonne: {0}",
      setValueExpressionPlaceholder: " Et uttrykk der resultatet tilordnes målspørsmålet.",
      trigger_completeText: "Skjemaet blir fullført",
      trigger_setvalueText: "Sett inn: {0} verdi {1}", //{0} question name, {1} setValue
      trigger_setvalueEmptyText: "Klar spørsmålsverdi: {0}", //{0} question name
      trigger_copyvalueText: "Kopier inn: {0} verdi fra spørsmål {1}", //{0} and {1} question names
      trigger_skipText: "Hopp til spørsmål {0}", //{0} question name
      trigger_runExpressionText1: "Kjør formel: '{0}'", //{0} the expression
      trigger_runExpressionText2: " og sett inn resultatet i spørsmål: {0}", //{0} question name
      completedHtmlOnConditionText: "Vis tilpasset tekst for 'Takk-siden'.",
      showAllQuestions: "Alle spørsmål",
      showAllActionTypes: "Alle handlingstyper",
      conditions: "Vilkår",
      actions: "Handling(er)",
      expressionEditorTitle: "Definer vilkår",
      actionsEditorTitle: "Definer handling(er)",
      deleteAction: "Slett handling",
      addNewAction: "Legg til handling",
      selectedActionCaption: "Velg handling som skal legges til...",
      expressionInvalid: "Formelen er tom eller ugyldig. Vennligst korriger den.",
      noActionError: "Vennligst legg til minst en handling",
      actionInvalid: "Vennligst korriger problemer med handlingen.",
      uncompletedRule_title: "Logiske regler er ufullstendige",
      uncompletedRule_text: "Noen av de logiske reglene har du ikke fullført. Hvis du forlater fanen nå, vil endringene gå tapt. Vil du fortsatt forlate fanen uten å fullføre endringene?",
      uncompletedRule_apply: "Ja",
      uncompletedRule_cancel: "Nei, jeg vil fullføre reglene"
    }
  },
  // Property Editors
  pe: {
    apply: "Bruk",
    ok: "OK",
    save: "Lagre",
    clear: "Klar",
    saveTooltip: "Lagre",
    cancel: "Avbryt",
    set: "Sett",
    reset: "Tilbakestill",
    change: "Forandre",
    refresh: "Last inn på nytt",
    close: "Lukke",
    delete: "Slett",
    add: "Legg til",
    addNew: "Legg til ny",
    addItem: "Klikk for å legge til...",
    removeItem: "Klikk for å fjerne elementet...",
    dragItem: "Dra elementet",
    addOther: "Annet",
    addSelectAll: "Velg alt",
    addNone: "Ingen",
    removeAll: "Fjern alt",
    edit: "Rediger",
    back: "Gå tilbake uten å lagre",
    backTooltip: "Gå tilbake uten å lagre",
    saveAndBack: "Lagre og gå tilbake",
    saveAndBackTooltip: "Lagre og gå tilbake",
    doneEditing: "Gjort",
    editChoices: "Rediger valg",
    showChoices: "Vis valg",
    move: "Flytt",
    empty: "<tom>",
    emptyValue: "Verdien er tom",
    fastEntry: "Rask innfylling",
    fastEntryNonUniqueError: "Verdien «{0}» er ikke unik",
    fastEntryChoicesCountError: "Begrens antall varer fra {0} til {1}",
    fastEntryChoicesMinCountError: "Vennligst skriv inn minst {0} elementer",
    fastEntryPlaceholder: "Du kan angi data i følgende format:\nverdi1|tekst\nverdi2",
    formEntry: "Innfylling i skjema",
    testService: "Sjekk tjenesten",
    itemSelectorEmpty: "Vennligst velg elementet",
    conditionActionEmpty: "Velg handlingen",
    conditionSelectQuestion: "Velg spørsmål...",
    conditionSelectPage: "Velg side...",
    conditionSelectPanel: "Velg panel...",
    conditionValueQuestionTitle: "Vennligst skriv inn/velg verdi",
    expressionHelp: "Vennligst skriv inn en formel. Du kan bruke klammeparenteser for å få tilgang til spørsmålsverdiene: '{question1} + {question2}', '({price}*{quantity}) * (100 - {discount})'",
    aceEditorHelp: "Trykk ctrl+mellomrom for å få hint til å fullføre formler",
    aceEditorRowTitle: "Gjeldende rad",
    aceEditorPanelTitle: "Gjeldende panel",
    showMore: "For mer detaljer - se dokumentasjonen",
    assistantTitle: "Tilgjengelige spørsmål:",
    cellsEmptyRowsColumns: "Det må være minst 1 kolonne eller rad",
    showPreviewBeforeComplete: "Forhåndsvise svar før du sender inn undersøkelsen",
    overridingPropertyPrefix: "Sett av ",
    resetToDefaultCaption: "Nullstille",
    propertyIsEmpty: "Vennligst fyll inn en verdi",
    propertyIsNoUnique: "Angi en unik verdi",
    propertyNameIsNotUnique: "Vennligst fyll inn et unikt navn",
    propertyNameIsIncorrect: "Ikke bruk reserverte ord: \"element\", \"valg\", \"panel\", \"rad\".",
    listIsEmpty: "Legg til nytt element",
    "listIsEmpty@choices": "Ingen valg er lagt til ennå",
    "addNew@choices": "Legg til et valg",
    expressionIsEmpty: "Formelen er tom",
    value: "Verdi",
    text: "Tekst",
    rowid: "Rad-ID",
    imageLink: "Bildelenke",
    columnEdit: "Rediger kolonne: {0}",
    itemEdit: "Rediger element: {0}",
    url: "URL",
    path: "Sti",
    valueName: "Verdinavn",
    choicesbyurl: {
      valueName: "Hent verdier fra følgende JSON-felt"
    },
    titleName: "Tittelnavn",
    imageLinkName: "Hent bildenettadresser fra følgende JSON-felt",
    allowEmptyResponse: "Tillat tom respons",
    titlePlaceholder: "Skriv tittel her",
    surveyTitlePlaceholder: "Skriv skjematittel her",
    pageTitlePlaceholder: "Skriv sidetittel her",
    descriptionPlaceholder: "Skriv beskrivelse",
    surveyDescriptionPlaceholder: "Skriv skjema-beskrivelse",
    pageDescriptionPlaceholder: "Skriv side-beskrivelse",
    showOtherItem: "Har annet element",
    otherText: "Annet element-tekst",
    showNoneItem: "Har velg ingen",
    noneText: "Velg ingen-tekst",
    showSelectAllItem: "Har velg alt-element",
    selectAllText: "Velg alt elememt-tekst",
    choicesMin: "Minsteverdi for auto-genererte elementer",
    choicesMax: "Maksverdi for auto-genererte elementer",
    choicesStep: "Forskjellene mellom auto-genererte elementer",
    name: "Navn",
    title: "Tittel",
    cellType: "Celletype",
    colCount: "Antall kolonner",
    choicesOrder: "Velg rekkefølge på valg",
    visible: "Er synlig?",
    isRequired: "Er nødvendig?",
    markRequired: "Merk etter behov",
    removeRequiredMark: "Fjern ønsket merke",
    isAllRowRequired: "Nødvendig svar for alle rader",
    requiredErrorText: "Nødvendig feilmelding",
    startWithNewLine: "Må starte med ny linje?",
    rows: "Antall rader",
    cols: "Antall kolonner",
    placeholder: "Hjelpetekst",
    showPreview: "Er forhåndsvisning av bilde vist?",
    storeDataAsText: "Lagre filinnhold i JSON-resultat som tekst",
    maxSize: "Maksimum filstørrelse i bytes",
    imageHeight: "Bildehøyde",
    imageWidth: "Bildebredde",
    rowCount: "Antall rader",
    columnLayout: "Antall kolonner",
    addRowLocation: "Legg til rad knapp-plassering",
    addRowText: "Legg til rad knapp-tekst",
    removeRowText: "Fjern rad knapp-tekst",
    rateMin: "Minimum sats",
    rateMax: "Maksimum sats",
    rateStep: "Sats steg",
    minRateDescription: "Beskrivelse minimumsvudering",
    maxRateDescription: "Beskrivelse maksimumsvurdering",
    inputType: "Inndata-type",
    optionsCaption: "Tekst for alternativer",
    defaultValue: "Standardverdi",
    cellsDefaultRow: "Standard celletekster",
    surveyEditorTitle: "Rediger skjemainnstillinger",
    qEditorTitle: "Rediger: {0}",
    maxLength: "Maksimum lengde",
    buildExpression: "Bygg",
    editExpression: "Rediger",
    and: "og",
    or: "eller",
    remove: "Fjern",
    addCondition: "Legg til",
    emptyLogicPopupMessage: "Velg et spørsmål for å begynne å konfigurere betingelsene.",
    if: "Hvis",
    then: "da",
    setToName: "Målspørsmål",
    fromName: "Spørsmål å kopiere svar fra",
    gotoName: "Spørsmål å hoppe til",
    ruleIsNotSet: "Regelen er feil",
    includeIntoResult: "Inkluder i undersøkelsesresultater",
    showTitle: "Vis/skjul tittel",
    expandCollapseTitle: "Utvid/krymp tittel",
    locale: "Standard språk",
    simulator: "Velg enhet",
    landscapeOrientation: "Liggende",
    portraitOrientation: "Bytte til stående papirretning",
    mode: "Modus (rediger/kun lesbart)",
    clearInvisibleValues: "Fjern usynlige verdier",
    cookieName: "Informasjonskapsel navn (for å hindre bruk av skjema to ganger lokalt)",
    sendResultOnPageNext: "Send skjema resultat ved neste side",
    storeOthersAsComment: "Lagre 'andre' verdier i et separat felt",
    showPageTitles: "Vis sidetittel",
    showPageNumbers: "Vis sidenummer",
    pagePrevText: "Forrige side knapp tekst",
    pageNextText: "Neste side knapp tekst",
    completeText: "Fullfør knapp tekst",
    previewText: "Forhåndsvisning knapp tekst",
    editText: "Rediger knapp tekst",
    startSurveyText: "Start knapp tekst",
    showNavigationButtons: "Vis navigasjonsknapper (standard navigering)",
    showPrevButton: "Vis forrige knapp (bruker kan gå til forrige side)",
    firstPageIsStarted: "Den første siden i skjema er startside.",
    showCompletedPage: "Vis ferdigsiden på slutten (completedHtml)",
    goNextPageAutomatic: "Når en har svart alle spørsmål, gå til neste side automatisk",
    showProgressBar: "Vis fremdriftslinje",
    questionTitleLocation: "Spørsmål tittel plassering",
    requiredText: "Svar nødvendig symbol(er)",
    questionStartIndex: "Spørsmål startindeks (1, 2 eller 'A', 'a')",
    showQuestionNumbers: "Vis spørsmålsnummer",
    questionTitleTemplate: "Spørsmål tittel mal, standard er: '{no}. {require} {title}'",
    questionErrorLocation: "Spørsmål feil plassering",
    focusFirstQuestionAutomatic: "Sett fokus på første spørsmål når en endrer side",
    questionsOrder: "Rekkefølge på elementer på siden",
    maxTimeToFinish: "Maks tid for å gjøre ferdig skjema",
    maxTimeToFinishPage: "Maks tid til å gjøre ferdig en side i skjema",
    image: {
      imageHeight: "Bildehøyde (i CSS-godkjente verdier)",
      imageWidth: "Bildebredde (i CSS-godkjente verdier)"
    },
    // survey templates
    survey: {
      title: "Tittel"
    },
    page: {
      title: "Tittel",
      maxTimeToFinish: "Tidsbegrensning for å fullføre siden (i sekunder)"
    },
    question: {
      page: "Overordnet side"
    },
    showTimerPanel: "Vis tidtaking",
    showTimerPanelMode: "Vis tidtaking-modus",
    renderMode: "Gjengivelse modus",
    allowAddPanel: "Tillat å legge til panel",
    allowRemovePanel: "Tillat å fjerne panel",
    noEntriesText: "Tekst med tomme oppføringer",
    panelAddText: "Legg til panel tekst",
    panelRemoveText: "Fjern panel tekst",
    isSinglePage: "Vis alle elementer på en side",
    html: "HTML",
    expression: "Formel",
    setValue: "Svare",
    dataFormat: "Bildeformat",
    allowAddRows: "Tillat at rader legges til",
    allowRemoveRows: "Tillat fjerning av rader",
    allowRowsDragAndDrop: "Tillat dra og slipp i rad",
    responsiveImageSizeHelp: "Gjelder ikke hvis du angir nøyaktig bildebredde eller -høyde.",
    minImageWidth: "Minimum bildebredde",
    maxImageWidth: "Maksimal bildebredde",
    minImageHeight: "Minimum bildehøyde",
    maxImageHeight: "Maksimal bildehøyde",
    minValue: "Minimumsverdi",
    maxValue: "Maksimal verdi",
    minLength: "Minimum lengde",
    allowDigits: "Tillat tall",
    minCount: "Minimum count",
    maxCount: "Maximum count",
    regex: "Regular expression",
    surveyvalidator: {
      text: "Feilmelding",
      expression: "Uttrykk for validering"
    },
    totalText: "Total tekst",
    totalType: "Total type",
    totalExpression: "Total formel",
    totalDisplayStyle: "Total visningsstil",
    totalCurrency: "Total valuta",
    totalFormat: "Total format",
    logo: "Logo (URL eller base64-kodet streng)",
    questionsOnPageMode: "Undersøkelse struktur",
    maxTextLength: "Maksimal svarlengde (i tegn)",
    maxOthersLength: "Maksimal kommentarlengde (i tegn)",
    autoGrowComment: "Utvid kommentarområdet automatisk om nødvendig",
    allowResizeComment: "Tillat brukere å endre størrelse på tekstområder",
    textUpdateMode: "Oppdatere tekstspørsmålsverdi",
    focusOnFirstError: "Sette fokus på det første ugyldige svaret",
    checkErrorsMode: "Kjør validering",
    navigateToUrl: "Naviger til URL",
    navigateToUrlOnCondition: "Dynamisk URL-adresse",
    completedBeforeHtml: "Markering for å vise om brukeren allerede har fylt ut denne undersøkelsen",
    completedHtml: "Sidemarkering for fullført undersøkelse",
    completedHtmlOnCondition: "Sidemarkering for fullført dynamisk undersøkelse",
    loadingHtml: "Markering som skal vises mens evalueringsmodellen lastes inn",
    commentText: "Tekst i kommentarfeltet",
    autocomplete: "Autofullfør type",
    labelTrue: "Etiketten «True»",
    labelFalse: "\"False\" etikett",
    allowClear: "Vis Fjern-knappen",
    displayStyle: "Visningsstil for verdi",
    format: "Formatert streng",
    maximumFractionDigits: "Maksimalt antall brøksifre",
    minimumFractionDigits: "Minimum brøksifre",
    useGrouping: "Skilletegn for skjermgruppering",
    allowMultiple: "Tillat flere filer",
    allowImagesPreview: "Forhåndsvis bilder",
    acceptedTypes: "Godkjente filtyper",
    waitForUpload: "Vent til opplastingen er fullført",
    needConfirmRemoveFile: "Bekreft sletting av fil",
    detailPanelMode: "Plassering av detaljpanelet",
    minRowCount: "Minimum radantall",
    maxRowCount: "Maksimalt radantall",
    confirmDelete: "Bekreft radsletting",
    confirmDeleteText: "Bekreftelsesmelding",
    paneldynamic: {
      confirmDelete: "Bekreft sletting av panel"
    },
    panelCount: "Innledende panelopptelling",
    minPanelCount: "Minimum antall paneler",
    maxPanelCount: "Maksimalt antall paneler",
    panelsState: "Utvidelsestilstand for Indre panel",
    templateDescription: "Mal for beskrivelse",
    templateTitle: "Tittel mal",
    panelPrevText: "Verktøytips for forrige panelknapp",
    panelNextText: "Verktøytips for neste panelknapp",
    showRangeInProgress: "Vis fremdriftsindikator",
    templateTitleLocation: "Spørsmål tittel sted",
    panelRemoveButtonLocation: "Fjern plassering av panelknappen",
    hideIfRowsEmpty: "Skjul spørsmålet hvis det ikke er noen rader",
    hideColumnsIfEmpty: "Skjule kolonner hvis det ikke er noen rader",
    rateValues: "Egendefinerte frekvensverdier",
    rateCount: "Antall priser",
    autoGenerate: "Hvordan spesifisere renteverdier?",
    hideIfChoicesEmpty: "Skjul spørsmålet hvis det ikke inneholder noen valg",
    hideNumber: "Skjul spørsmålsnummer",
    minWidth: "Minimumsbredde (i CSS-godkjente verdier)",
    maxWidth: "Maksimal bredde (i CSS-godkjente verdier)",
    width: "Bredde (i CSS-godkjente verdier)",
    showHeader: "Vise kolonneoverskrifter",
    horizontalScroll: "Vis vannrett rullefelt",
    columnMinWidth: "Minimum kolonnebredde (i CSS-godkjente verdier)",
    rowTitleWidth: "Radoverskriftsbredde (i CSS-godtatte verdier)",
    valueTrue: "\"True\"-verdi",
    valueFalse: "\"False\" verdi",
    minErrorText: "Feilmeldingen «Verdien er under minimum»",
    maxErrorText: "Feilmeldingen \"Verdien overskrider maksimum\"",
    otherErrorText: "Feilmeldingen «Tom kommentar»",
    keyDuplicationError: "Feilmeldingen \"Ikke-unik nøkkelverdi\"",
    minSelectedChoices: "Minimum valgte valg",
    maxSelectedChoices: "Maksimalt antall merkede valg",
    showClearButton: "Vis Fjern-knappen",
    showNumber: "Vis panelnummer",
    logoWidth: "Logobredde (i CSS-godkjente verdier)",
    logoHeight: "Logohøyde (i CSS-godkjente verdier)",
    readOnly: "Skrivebeskyttet",
    enableIf: "Kan redigeres hvis",
    emptyRowsText: "Meldingen «Ingen rader»",
    size: "Størrelse på inndatafelt (i tegn)",
    separateSpecialChoices: "Skille spesialvalg (Ingen, Annet, Merk alt)",
    choicesFromQuestion: "Kopier valg fra følgende spørsmål",
    choicesFromQuestionMode: "Hvilke valg å kopiere?",
    showCommentArea: "Vis kommentarfeltet",
    commentPlaceholder: "Plassholder for kommentarområde",
    displayRateDescriptionsAsExtremeItems: "Vise frekvensbeskrivelser som ekstremverdier",
    rowsOrder: "Rekkefølge på rad",
    columnsLayout: "Kolonneoppsett",
    columnColCount: "Nestet kolonneantall",
    state: "Utvidelsestilstand for panel",
    correctAnswer: "Riktig svar",
    defaultPanelValue: "Standardverdier",
    cells: "Cell Tekster",
    keyName: "Nøkkelkolonne",
    itemvalue: {
      text: "Alternativ tekst"
    },
    logoPosition: "Logo-posisjon",
    addLogo: "Legg til logo...",
    changeLogo: "Bytt logo...",
    logoPositions: {
      none: "Fjern logo",
      left: "Venstre",
      right: "Høyre",
      top: "Topp",
      bottom: "Bunn"
    },
    tabs: {
      general: "Generelt",
      fileOptions: "Valg",
      html: "HTML-editor",
      columns: "Kolonner",
      rows: "Rader",
      choices: "Valg",
      items: "Elementer",
      visibleIf: "Synlig hvis",
      enableIf: "Tilgjengelig hvis",
      requiredIf: "Nødvendig hvis",
      rateValues: "Rangering verdier",
      choicesByUrl: "Valg fra web",
      matrixChoices: "Standardvalg",
      multipleTextItems: "Tekst inndata",
      numbering: "Nummerering",
      validators: "Valideringer",
      navigation: "Navigering",
      question: "Spørsmål",
      pages: "Sider",
      timer: "Tidtaker/Quiz",
      calculatedValues: "Beregnede verdier",
      triggers: "Triggere",
      templateTitle: "Mal-tittel",
      totals: "Totaler",
      logic: "Logikk",
      layout: "Oppsett",
      data: "Data",
      validation: "Validering",
      cells: "Celler",
      showOnCompleted: "Vis når ferdig",
      logo: "Logo i skjematittel",
      slider: "Slider",
      expression: "Uttrykk",
      others: "Andre"
    },
    editProperty: "Rediger verdi '{0}'",
    items: "[ Elementer: {0} ]",
    choicesVisibleIf: "Valgene er synlige hvis",
    choicesEnableIf: "Valgene kan velges hvis",
    columnsEnableIf: "Kolonner er synlige hvis",
    rowsEnableIf: "Rader er synlige hvis:",
    indent: "Legge til innrykk",
    panel: {
      indent: "Legge til ytre innrykk"
    },
    innerIndent: "Legge til indre innrykk",
    defaultValueFromLastRow: "Ta standardverdier fra den siste raden",
    defaultValueFromLastPanel: "Ta standardverdier fra det siste panelet",
    enterNewValue: "Vennligst fyll inn verdien.",
    noquestions: "Det er ingen spørsmål i skjemaet.",
    createtrigger: "Vennligst lag en trigger",
    titleKeyboardAdornerTip: "Trykk enter-tasten for å redigere",
    keyboardAdornerTip: "Trykk enter-tasten for å redigere elementet, trykk slette-tasten for å slette elementet, trykk Alt + pil opp/ned for å flytte elementet",
    triggerOn: "På ",
    triggerMakePagesVisible: "Gjør sider synlige:",
    triggerMakeQuestionsVisible: "Gjør elementer synlige:",
    triggerCompleteText: "Fullfør skjema dersom vellykket.",
    triggerNotSet: "Trigger er ikke satt",
    triggerRunIf: "Kjør dersom",
    triggerSetToName: "Endre verdien av: ",
    triggerFromName: "Kopier verdi fra: ",
    triggerRunExpression: "Kjør denne formelen:",
    triggerSetValue: "til: ",
    triggerGotoName: "Gå til spørsmål:",
    triggerIsVariable: "Ikke legg variabelen i resultatet.",
    triggerRunExpressionEmpty: "Vennligst fyll inn en gyldig formel",
    emptyExpressionPlaceHolder: "Skriv inn uttrykk her...",
    noFile: "Ingen fil valgt",
    clearIfInvisible: "Fjern verdien hvis spørsmålet blir skjult",
    valuePropertyName: "Navn på egenskap Value",
    searchEnabled: "Aktivere søk",
    hideSelectedItems: "Skjule merkede elementer",
    closeOnSelect: "Lukk rullegardinmenyen etter valget",
    signatureWidth: "Signatur bredde",
    signatureHeight: "Signatur høyde",
    verticalAlign: "Loddrett justering",
    alternateRows: "Annenhver rad",
    columnsVisibleIf: "Kolonner er synlige hvis",
    rowsVisibleIf: "Rader er synlige hvis:",
    otherPlaceholder: "Plassholder for kommentarområde",
    signaturepad: {
      showPlaceholder: "Vise plassholderen",
      placeholder: "Plassholdertekst",
      signatureWidth: "Bredde på signaturområde",
      signatureHeight: "Høyde på signaturområdet",
      signatureAutoScaleEnabled: "Skalere signaturområdet automatisk",
      penMinWidth: "Minimum pennebredde",
      penMaxWidth: "Maksimal pennebredde"
    },
    filePlaceholder: "Plassholdertekst for fil",
    photoPlaceholder: "Tekst for plassholdere for bilde",
    fileOrPhotoPlaceholder: "Plassholdertekst for fil eller bilde",
    rateType: "Type sats"
  },
  // Property values
  pv: {
    "true": "sann",
    "false": "falsk",
    file: "Lokale filer",
    camera: "Kamera",
    "file-camera": "Lokale filer eller kamera",
    inherit: "inherit",
    show: "show",
    hide: "hide",
    default: "default",
    initial: "initial",
    random: "random",
    collapsed: "collapsed",
    expanded: "expanded",
    none: "none",
    asc: "ascending",
    desc: "descending",
    indeterminate: "indeterminate",
    decimal: "desimal",
    currency: "valuta",
    percent: "prosent",
    firstExpanded: "firstExpanded",
    off: "off",
    onpanel: "Start på hvert panel",
    onPanel: "onPanel",
    onSurvey: "onSurvey",
    list: "list",
    progressTop: "progressTop",
    progressBottom: "progressBottom",
    progressTopBottom: "progressTopBottom",
    tab: "Kategoriene",
    horizontal: "horizontal",
    vertical: "vertical",
    top: "top",
    bottom: "bottom",
    topBottom: "top and bottom",
    both: "both",
    left: "left",
    right: "Høyre",
    color: "farge",
    date: "daddel",
    datetime: "datetime",
    "datetime-local": "datetime-lokal",
    email: "E-post",
    month: "måned",
    number: "nummer",
    password: "passord",
    range: "rekkevidde",
    tel: "Tel",
    text: "Tekst",
    time: "Tid",
    url: "URL",
    week: "uke",
    hidden: "hidden",
    on: "on",
    onPage: "onPage",
    edit: "edit",
    display: "display",
    onComplete: "onComplete",
    onHidden: "onHidden",
    onHiddenContainer: "Når spørsmålet eller panelet/siden blir skjult",
    clearInvisibleValues: {
      none: "Aldri"
    },
    inputType: {
      color: "Farge",
      date: "Daddel",
      "datetime-local": "Dato og klokkeslett",
      email: "E-post",
      month: "Måned",
      number: "Nummer",
      password: "Passord",
      range: "Rekkevidde",
      tel: "Telefonnummer",
      text: "Tekst",
      time: "Tid",
      url: "URL",
      week: "Uke"
    },
    all: "all",
    page: "page",
    survey: "survey",
    onNextPage: "onNextPage",
    onValueChanged: "onValueChanged",
    onValueChanging: "Før et svar endres",
    standard: "standard",
    singlePage: "single page",
    questionPerPage: "question per page",
    noPreview: "no preview",
    showAllQuestions: "show preview with all questions",
    showAnsweredQuestions: "show preview with answered questions",
    pages: "Fullførte sider",
    questions: "Besvarte spørsmål",
    requiredQuestions: "Besvarte nødvendige spørsmål",
    correctQuestions: "Gyldige svar",
    buttons: "Fullførte sider (brukergrensesnitt for knapp)",
    underInput: "Under inngangen",
    underTitle: "Under tittelen",
    onBlur: "På uskarphet",
    onTyping: "Mens du skriver",
    underRow: "Under raden",
    underRowSingle: "Under raden er bare ett panel synlig",
    showNavigationButtons: {
      none: "Skjult"
    },
    showProgressBar: {
      off: "Skjult"
    },
    showTimerPanel: {
      none: "Skjult"
    },
    showTimerPanelMode: {
      all: "Begge"
    },
    detailPanelMode: {
      none: "Skjult"
    },
    addRowLocation: {
      default: "Avhenger av matriseoppsett"
    },
    panelsState: {
      default: "Brukere kan ikke vise eller skjule paneler",
      collapsed: "Alle paneler er skjult",
      expanded: "Alle paneler er utvidet"
    },
    widthMode: {
      auto: "Auto",
      static: "Statisk",
      responsive: "Lydhør"
    },
    imageFit: {
      none: "Ingen",
      contain: "Inneholde",
      cover: "Lokk",
      fill: "Fylle"
    },
    contentMode: {
      auto: "Auto",
      image: "Bilde",
      video: "Video",
      youtube: "YouTube"
    },
    displayMode: {
      auto: "Auto",
      buttons: "Knapper",
      dropdown: "Rullegardinmeny"
    },
    rateColorMode: {
      default: "Standard"
    },
    autoGenerate: {
      "true": "Frembringe",
      "false": "Angi manuelt"
    },
    rateType: {
      labels: "Etiketter",
      stars: "Stjerner",
      smileys: "Smilefjes"
    }
  },
  // Operators
  op: {
    empty: "er tom",
    notempty: "er ikke tom",
    equal: "er lik",
    notequal: "er ikke lik",
    contains: "inneholder",
    notcontains: "inneholder ikke",
    anyof: "noen av",
    allof: "alle av",
    greater: "større enn",
    less: "mindre enn",
    greaterorequal: "større eller lik",
    lessorequal: "mindre eller lik",
    and: "og",
    or: "eller"
  },
  // Embed window
  ew: {
    angular: "Bruk Angular-versjon",
    jquery: "Bruk jQuery-versjon",
    knockout: "Bruk Knockout-versjon",
    react: "Bruk React-versjon",
    vue: "Bruk Vue-versjon",
    bootstrap: "For Bootstrap-rammeverk",
    modern: "Moderne tema",
    default: "Standard tema",
    orange: "Oransje-tema",
    darkblue: "Mørkeblått-tema",
    darkrose: "Darkrose-tema",
    stone: "Stein-tema",
    winter: "Vinter-tema",
    winterstone: "Vinterstein-tema",
    showOnPage: "Vis skjema på en side",
    showInWindow: "Vis skjema i et vindu",
    loadFromServer: "Last skjemadefinisjon som JSON fra server",
    titleScript: "Skript og stiler",
    titleHtml: "HTML",
    titleJavaScript: "JavaScript"
  },
  // Preview (Survey)
  ts: {
    selectPage: "Velg side:",
    showInvisibleElements: "Vis usynlige elementer",
    hideInvisibleElements: "Skjule usynlige elementer"
  },
  validators: {
    answercountvalidator: "antall svar",
    emailvalidator: "e-post",
    expressionvalidator: "formel",
    numericvalidator: "numerisk",
    regexvalidator: "regex",
    textvalidator: "tekst"
  },
  triggers: {
    completetrigger: "complete skjema",
    setvaluetrigger: "set value",
    copyvaluetrigger: "copy value",
    skiptrigger: "hopp til spørsmål",
    runexpressiontrigger: "kjør formel",
    visibletrigger: "endre synlighet (deprecated)"
  },
  pehelp: {
    cookieName: "Informasjonskapsler hindrer brukere i å fylle ut den samme undersøkelsen to ganger.",
    size: "Endrer størrelsen på det synlige området i inndatafeltet. <b>Bruk innstillingen Validering → maksimal lengde</b> for å begrense inngangslengden.",
    format: "Bruk {0} som plassholder for den faktiske verdien.",
    totalText: "Bare synlig når minst én kolonne har Totaltype- eller Total-uttrykk.",
    acceptedTypes: "Se attributtbeskrivelsen [accept](https://www.w3schools.com/tags/att_input_accept.asp) hvis du vil ha mer informasjon.",
    columnColCount: "Gjelder bare for celletypene Radiogruppe og Avmerkingsboks.",
    autocomplete: "Se attributtbeskrivelsen [autofullfør](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete) hvis du vil ha mer informasjon.",
    valueName: "Hvis du ikke angir denne egenskapen, lagres svaret i et felt som er angitt av egenskapen Name.",
    choicesbyurl: {
      valueName: " "
    },
    keyName: "Hvis den angitte kolonnen inneholder identiske verdier, gir undersøkelsen feilen \"Ikke-unik nøkkelverdi\".",
    filePlaceholder: "Gjelder når \"Kildetype\" er \"Lokale filer\" eller når kameraet er utilgjengelig",
    photoPlaceholder: "Gjelder når \"Kildetype\" er \"Kamera\".",
    fileOrPhotoPlaceholder: "Gjelder når \"Kildetype\" er \"Lokale filer eller kamera\"."
  },
  // Properties
  p: {
    title: {
      name: "title",
      title: "La den være tom, dersom den skal være samme som navnet"
    },
    multiSelect: "Tillat flere valg",
    showLabel: "Vis bildetekster",
    value: "Verdi",
    tabAlign: "Justering av tabulatorer",
    description: "description",
    logoFit: "Logo passform",
    pages: "Sider",
    questions: "Spørsmål",
    triggers: "triggers",
    calculatedValues: "Beregnede verdier",
    surveyId: "Undersøkelses-ID",
    surveyPostId: "Post-ID for undersøkelse",
    surveyShowDataSaving: "Undersøkelse viser datalagring",
    questionDescriptionLocation: "Spørsmål beskrivelse sted",
    progressBarType: "Type fremdriftsindikator",
    showTOC: "Vis innholdsfortegnelse",
    tocLocation: "Toc-plassering",
    questionTitlePattern: "Mønster for spørsmålstittel",
    widthMode: "Bredde, modus",
    showBrandInfo: "Vis merkeinformasjon",
    useDisplayValuesInDynamicTexts: "Bruke visningsverdier i dynamiske tekster",
    visibleIf: "visibleIf",
    titleLocation: "titleLocation",
    descriptionLocation: "Beskrivelse plassering",
    defaultValueExpression: "Uttrykk for standardverdi",
    requiredIf: "requiredIf",
    resetValueIf: "Tilbakestill verdien hvis",
    setValueIf: "Angi verdi hvis",
    validators: "validators",
    bindings: "Bindinger",
    renderAs: "Gjengi som",
    attachOriginalItems: "Legg ved originale elementer",
    choices: "choices",
    choicesByUrl: "choicesByUrl",
    currency: "currency",
    cellHint: "Celle hint",
    isUnique: "Er unik",
    showInMultipleColumns: "Vis i flere kolonner",
    totalMaximumFractionDigits: "Totalt maksimum antall sifre i brøk",
    totalMinimumFractionDigits: "Totalt antall minimumssifre i brøk",
    columns: "columns",
    detailElements: "Detaljelementer",
    allowAdaptiveActions: "Tillat adaptive handlinger",
    defaultRowValue: "defaultRowValue",
    detailPanelShowOnAdding: "Detaljpanelet vises når du legger til",
    choicesLazyLoadEnabled: "Valg lat belastning aktivert",
    choicesLazyLoadPageSize: "Valg lat lastesidestørrelse",
    inputFieldComponent: "Komponent for inntastingsfelt",
    itemComponent: "Element komponent",
    min: "Min",
    max: "Maks",
    minValueExpression: "Mitt verdiuttrykk",
    maxValueExpression: "Uttrykk med maksverdi",
    step: "Skritt",
    dataList: "Dataliste",
    itemSize: "itemSize",
    elements: "Elementer",
    content: "Innhold",
    navigationButtonsVisibility: "navigationButtonsVisibility",
    navigationTitle: "Navigasjon tittel",
    navigationDescription: "Beskrivelse av navigasjon",
    longTap: "Langt trykk",
    autoGrow: "Automatisk vekst",
    allowResize: "Tillat endring av størrelse",
    acceptCarriageReturn: "Godta retur av frakt",
    displayMode: "Visningsmodus",
    rateType: "Type sats",
    label: "label",
    contentMode: "Innhold-modus",
    imageFit: "Tilpasning til bildet",
    altText: "Alternativ tekst",
    height: "Høyde",
    penColor: "Farge på penn",
    backgroundColor: "Bakgrunnsfarge",
    templateElements: "Mal elementer",
    operator: "Operatør",
    isVariable: "Er variabel",
    runExpression: "Kjør uttrykk",
    showCaption: "Vis bildetekst",
    iconName: "Navn på ikon",
    iconSize: "Ikon størrelse",
    precision: "Presisjon",
    matrixDragHandleArea: "Område for drahåndtak for matrise",
    backgroundImage: "Bakgrunnsbilde",
    backgroundImageFit: "Tilpasning til bakgrunnsbilde",
    backgroundImageAttachment: "Vedlegg til bakgrunnsbilde",
    backgroundOpacity: "Ugjennomsiktighet i bakgrunnen",
    selectToRankEnabled: "Velg for å rangere aktivert",
    selectToRankAreasLayout: "Velg for å rangere områdeoppsettet",
    allowCameraAccess: "Tillat kameratilgang",
    scaleColorMode: "Skaler farge, modus",
    rateColorMode: "Vurder farge, modus",
    templateTabTitle: "Tittel på Mal-fanen",
    templateVisibleIf: "Mal synlig hvis",
    copyDisplayValue: "Kopier visningsverdi"
  },
  theme: {
    "--background": "Bakgrunnsfarge",
    "--background-dim-light": "Svak lys farge i bakgrunnen",
    "--primary-foreground": "Primær forgrunnsfarge",
    "--foreground": "Forgrunnsfarge",
    "--base-unit": "Basisenhet",
    groupGeneral: "Generelt",
    groupAdvanced: "Avansert",
    groupHeader: "Topptekst",
    groupBackground: "Bakgrunn",
    groupAppearance: "Utseende",
    themeName: "Tema",
    themeMode: "Spørsmål utseende",
    themeModePanels: "Standard",
    themeModeLightweight: "Uten paneler",
    themePaletteLight: "Lys",
    themePaletteDark: "Mørk",
    primaryColor: "Uthevingsfarge",
    primaryDefaultColor: "Standard",
    primaryDarkColor: "Sveve",
    primaryLightColor: "Utvalgt",
    coverTitleForecolor: "Tittel forfarge",
    coverDescriptionForecolor: "Beskrivelse forfarge",
    coverOverlapEnabled: "Overlappe",
    backgroundDimColor: "Bakgrunnsfarge",
    backgroundImage: "Bakgrunnsbilde",
    backgroundImageFitAuto: "Auto",
    backgroundImageFitCover: "Lokk",
    backgroundImageFitContain: "Inneholde",
    backgroundImageFitFill: "Strekning",
    backgroundImageFitTile: "Flis",
    backgroundOpacity: "Ugjennomsiktighet",
    backgroundImageAttachmentFixed: "Fast",
    backgroundImageAttachmentScroll: "Bla",
    panelBackgroundTransparency: "Tetthet i panelbakgrunn",
    questionBackgroundTransparency: "Spørsmål om bakgrunnstetthet",
    questionPanel: "Panelbakgrunn og hjørneradius",
    questionTitle: "Spørsmål tittel skrift",
    questionDescription: "Skrift for spørsmålsbeskrivelse",
    editorPanel: "Inndata-element",
    editorFont: "Skrift for inndataelement",
    backcolor: "Standard bakgrunn",
    hovercolor: "Pekerfølsom bakgrunn",
    borderDecoration: "Grense dekorasjon",
    accentBackground: "Bakgrunn med aksent",
    accentForeground: "Uthevingsforgrunn",
    primaryForecolor: "Standardfarge",
    primaryForecolorLight: "Deaktivert farge",
    linesColors: "Mindre linjefarger",
    borderDefault: "Mørkere",
    borderLight: "Lekter",
    fontFamily: "Skriftfamilie",
    fontSize: "Skriftstørrelse",
    color: "Farge",
    placeholderColor: "Plassholderfarge",
    size: "Størrelse",
    fontWeightRegular: "Regelmessig",
    fontWeightHeavy: "Tung",
    fontWeightSemiBold: "Halvmodig",
    fontWeightBold: "Fet",
    scale: "Skala",
    cornerRadius: "Hjørne radius",
    surveyTitle: "Skrift for undersøkelsestittel",
    surveyDescription: "Skrift for undersøkelsesbeskrivelse",
    pageTitle: "Skrift for sidetittel",
    pageDescription: "Skrift for sidebeskrivelse",
    boxShadowX: "X",
    boxShadowY: "Y",
    boxShadowAddRule: "Legg til skyggeeffekt",
    opacity: "Ugjennomsiktighet",
    boxShadowBlur: "Dimme",
    boxShadowSpread: "Spredning",
    boxShadowDrop: "Dråpe",
    boxShadowInner: "Indre",
    questionShadow: "Skygge effekter",
    editorShadow: "Skyggeeffekter for inndataelement",
    headerView: "Utsikt",
    headerViewBasic: "Grunnleggende",
    headerViewAdvanced: "Avansert",
    coverInheritWidthFrom: "Bredde på innholdsområdet",
    coverInheritWidthFromSurvey: "Samme som undersøkelse",
    coverInheritWidthFromContainer: "Tilpass til container",
    coverTextAreaWidth: "Tekstbredde",
    coverBackgroundColorSwitch: "Bakgrunnsfarge",
    coverBackgroundColorNone: "Ingen",
    coverBackgroundColorAccentColor: "Uthevingsfarge",
    coverBackgroundColorCustom: "Skikk",
    horizontalAlignmentLeft: "Venstre",
    horizontalAlignmentCenter: "Sentrum",
    horizontalAlignmentRight: "Høyre",
    verticalAlignmentTop: "Topp",
    verticalAlignmentMiddle: "Midt",
    verticalAlignmentBottom: "Bunn",
    logoPosition: "Logo posisjon",
    coverTitlePosition: "Tittelposisjon",
    coverDescriptionPosition: "Beskrivelse posisjon",
    names: {
      default: "Standard",
      sharp: "Skarp",
      borderless: "Kantløse",
      flat: "Flat",
      plain: "Slette",
      doubleborder: "Dobbel kantlinje",
      layered: "Lagdelte",
      solid: "Solid",
      threedimensional: ".3D",
      contrast: "Kontrast"
    },
    colors: {
      teal: "Teal",
      blue: "Blå",
      purple: "Lilla",
      orchid: "Orkidé",
      tulip: "Tulipan",
      brown: "Brun",
      green: "Grønn"
    }
  }
};
//Uncomment this line on creating a translation file. You should replace "en" and enStrings with your locale ("fr", "de" and so on) and your variable.
editorLocalization.locales["nb"] = nbStrings;

// The following strings have been translated by a machine translation service
// Remove those strings that you have corrected manually
// survey.duplicate: "Duplicate" => "Duplikat"
// qt.ranking: "Ranking" => "Rangering"
// qt.tagbox: "Multi-Select Dropdown" => "Rullegardinmenyen for flere valg"
// qt.buttongroup: "Button Group" => "Knappegruppe"
// ed.surveySettings: "Survey Settings" => "Innstillinger for undersøkelse"
// ed.surveySettingsTooltip: "Open survey settings" => "Åpne innstillinger for evaluering"
// ed.prevSelected: "Select previous" => "Velg forrige"
// ed.nextSelected: "Select next" => "Velg neste"
// ed.surveyTypeName: "Survey" => "Undersøkelse"
// ed.pageTypeName: "Page" => "Side"
// ed.panelTypeName: "Panel" => "Panel"
// ed.questionTypeName: "Question" => "Spørsmål"
// ed.columnTypeName: "Column" => "Kolonne"
// ed.themeSurvey: "Themes" => "Temaer"
// ed.defaultV2Theme: "Default" => "Standard"
// ed.modernTheme: "Modern" => "Moderne"
// ed.defaultTheme: "Default (legacy)" => "Standard (eldre)"
// ed.jsonHideErrors: "Hide errors" => "Skjul feil"
// ed.jsonShowErrors: "Show errors" => "Vis feil"
// ed.showMoreChoices: "Show more" => "Vis mer"
// ed.showLessChoices: "Show less" => "Vis mindre"
// ed.propertyGridFilteredTextPlaceholder: "Type to search..." => "Skriv for å søke ..."
// ed.toolboxChoiceCategory: "Choice Questions" => "Choice Spørsmål"
// ed.toolboxTextCategory: "Text Input Questions" => "Spørsmål om tekstinndata"
// ed.toolboxContainersCategory: "Containers" => "Beholdere"
// ed.toolboxMatrixCategory: "Matrix Questions" => "Matrise Spørsmål"
// ed.toolboxMiscCategory: "Misc" => "Misc"
// ed.translationPropertyGridTitle: "Language Settings" => "Språkinnstillinger"
// ed.themePropertyGridTitle: "Theme Settings" => "Tema innstillinger"
// ed.translationLanguages: "Languages" => "Språk"
// ed.translationShowUsedStringsOnly: "Used Strings Only" => "Bare brukte strenger"
// ed.translationPlaceHolder: "Translation..." => "Oversettelse..."
// ed.themeExportButton: "Export" => "Eksport"
// ed.themeImportButton: "Import" => "Importere"
// ed.carryForwardChoicesCopied: "Choices are copied from" => "Valgene kopieres fra"
// ed.htmlPlaceHolder: "HTML content will be here." => "HTML-innhold vil være her."
// ed.panelPlaceHolder: "Drop a question from the toolbox here." => "Slipp et spørsmål fra verktøykassen her."
// ed.surveyPlaceHolder: "The survey is empty. Drag an element from the toolbox or click the button below." => "Undersøkelsen er tom. Dra et element fra verktøykassen, eller klikk på knappen nedenfor."
// ed.imagePlaceHolder: "Drag and drop an image here or click the button below and choose an image to upload" => "Dra og slipp et bilde her, eller klikk på knappen nedenfor og velg et bilde du vil laste opp"
// ed.imageChooseImage: "Choose Image" => "Velg bilde"
// ed.addNewTypeQuestion: "Add {0}" => "Legg til {0}"
// ed.chooseLogoPlaceholder: "[LOGO]" => "[LOGO]"
// ed.auto: "auto" => "auto"
// ed.choices_Item: "Item " => "Vare "
// lg.empty_tab: "Create a rule to customize the flow of the survey." => "Opprett en regel for å tilpasse flyten i evalueringen."
// lg.page_enableName: "Enable (disable) page" => "Aktivere (deaktivere) side"
// lg.column_visibilityName: "Show (hide) column" => "Vis kolonne (skjul)"
// lg.column_enableName: "Enable (disable) column" => "Aktivere (deaktivere) kolonne"
// lg.column_requireName: "Make column required" => "Gjøre kolonne obligatorisk"
// lg.itemEmptyExpressionText: "New rule" => "Ny regel"
// lg.column_visibilityText: "make column {0} of question {1} visible" => "Gjør kolonne {0} av spørsmålet {1} synlig"
// lg.column_enableText: "make column {0} of question {1} enable" => "Gjør kolonne {0} av spørsmålet {1} aktiver"
// lg.column_requireText: "make column {0} of question {1} required" => "Gjør kolonne {0} av spørsmålet {1} nødvendig"
// lg.trigger_setvalueEmptyText: "clear question value: {0}" => "Klar spørsmålsverdi: {0}"
// lg.showAllQuestions: "All Questions" => "Alle spørsmål"
// lg.showAllActionTypes: "All Action Types" => "Alle handlingstyper"
// lg.uncompletedRule_title: "Logical rules are incomplete" => "Logiske regler er ufullstendige"
// lg.uncompletedRule_text: "You have not completed some of the logical rules. If you leave the tab now, the changes will be lost. Do you still want to leave the tab without completing the changes?" => "Noen av de logiske reglene har du ikke fullført. Hvis du forlater fanen nå, vil endringene gå tapt. Vil du fortsatt forlate fanen uten å fullføre endringene?"
// lg.uncompletedRule_apply: "Yes" => "Ja"
// lg.uncompletedRule_cancel: "No, I want to complete the rules" => "Nei, jeg vil fullføre reglene"
// pe.clear: "Clear" => "Klar"
// pe.set: "Set" => "Sett"
// pe.change: "Change" => "Forandre"
// pe.close: "Close" => "Lukke"
// pe.removeItem: "Click to remove the item..." => "Klikk for å fjerne elementet..."
// pe.dragItem: "Drag the item" => "Dra elementet"
// pe.doneEditing: "Done" => "Gjort"
// pe.emptyValue: "Value is empty" => "Verdien er tom"
// pe.fastEntryNonUniqueError: "Value '{0}' is not unique" => "Verdien «{0}» er ikke unik"
// pe.fastEntryChoicesCountError: "Please limit the number of items from {0} to {1}" => "Begrens antall varer fra {0} til {1}"
// pe.fastEntryPlaceholder: "You can set data in the following format:\nvalue1|text\nvalue2" => "Du kan angi data i følgende format:\nverdi1|tekst\nverdi2"
// pe.showPreviewBeforeComplete: "Preview answers before submitting the survey" => "Forhåndsvise svar før du sender inn undersøkelsen"
// pe.overridingPropertyPrefix: "Set by " => "Sett av "
// pe.propertyIsNoUnique: "Please enter a unique value" => "Angi en unik verdi"
// pe.propertyNameIsIncorrect: "Do not use reserved words: \"item\", \"choice\", \"panel\", \"row\"." => "Ikke bruk reserverte ord: \"element\", \"valg\", \"panel\", \"rad\"."
// pe.listIsEmpty@choices: "No choices have been added yet" => "Ingen valg er lagt til ennå"
// pe.addNew@choices: "Add a choice" => "Legg til et valg"
// choicesbyurl.valueName: "Get values from the following JSON field" => "Hent verdier fra følgende JSON-felt"
// pe.imageLinkName: "Get image URLs from the following JSON field" => "Hent bildenettadresser fra følgende JSON-felt"
// pe.allowEmptyResponse: "Allow empty response" => "Tillat tom respons"
// pe.and: "and" => "og"
// pe.or: "or" => "eller"
// pe.emptyLogicPopupMessage: "Select a question to start configuring conditions." => "Velg et spørsmål for å begynne å konfigurere betingelsene."
// pe.if: "If" => "Hvis"
// pe.then: "then" => "da"
// pe.setToName: "Target question" => "Målspørsmål"
// pe.fromName: "Question to copy answer from" => "Spørsmål å kopiere svar fra"
// pe.gotoName: "Question to skip to" => "Spørsmål å hoppe til"
// pe.ruleIsNotSet: "Rule is incorrect" => "Regelen er feil"
// pe.includeIntoResult: "Include into survey results" => "Inkluder i undersøkelsesresultater"
// pe.portraitOrientation: "Switch to portrait orientation" => "Bytte til stående papirretning"
// image.imageHeight: "Image height (in CSS-accepted values)" => "Bildehøyde (i CSS-godkjente verdier)"
// image.imageWidth: "Image width (in CSS-accepted values)" => "Bildebredde (i CSS-godkjente verdier)"
// page.maxTimeToFinish: "Time limit to finish the page (in seconds)" => "Tidsbegrensning for å fullføre siden (i sekunder)"
// question.page: "Parent page" => "Overordnet side"
// pe.noEntriesText: "Empty entries text" => "Tekst med tomme oppføringer"
// pe.setValue: "Answer" => "Svare"
// pe.dataFormat: "Image format" => "Bildeformat"
// pe.allowAddRows: "Allow adding rows" => "Tillat at rader legges til"
// pe.allowRemoveRows: "Allow removing rows" => "Tillat fjerning av rader"
// pe.allowRowsDragAndDrop: "Allow row drag and drop" => "Tillat dra og slipp i rad"
// pe.responsiveImageSizeHelp: "Does not apply if you specify the exact image width or height." => "Gjelder ikke hvis du angir nøyaktig bildebredde eller -høyde."
// pe.minImageWidth: "Minimum image width" => "Minimum bildebredde"
// pe.maxImageWidth: "Maximum image width" => "Maksimal bildebredde"
// pe.minImageHeight: "Minimum image height" => "Minimum bildehøyde"
// pe.maxImageHeight: "Maximum image height" => "Maksimal bildehøyde"
// surveyvalidator.text: "Error message" => "Feilmelding"
// surveyvalidator.expression: "Validation expression" => "Uttrykk for validering"
// pe.logo: "Logo (URL or base64-encoded string)" => "Logo (URL eller base64-kodet streng)"
// pe.questionsOnPageMode: "Survey structure" => "Undersøkelse struktur"
// pe.maxTextLength: "Maximum answer length (in characters)" => "Maksimal svarlengde (i tegn)"
// pe.maxOthersLength: "Maximum comment length (in characters)" => "Maksimal kommentarlengde (i tegn)"
// pe.autoGrowComment: "Auto-expand comment area if necessary" => "Utvid kommentarområdet automatisk om nødvendig"
// pe.allowResizeComment: "Allow users to resize text areas" => "Tillat brukere å endre størrelse på tekstområder"
// pe.textUpdateMode: "Update text question value" => "Oppdatere tekstspørsmålsverdi"
// pe.focusOnFirstError: "Set focus on the first invalid answer" => "Sette fokus på det første ugyldige svaret"
// pe.checkErrorsMode: "Run validation" => "Kjør validering"
// pe.navigateToUrl: "Navigate to URL" => "Naviger til URL"
// pe.navigateToUrlOnCondition: "Dynamic URL" => "Dynamisk URL-adresse"
// pe.completedBeforeHtml: "Markup to show if the user already filled out this survey" => "Markering for å vise om brukeren allerede har fylt ut denne undersøkelsen"
// pe.completedHtml: "Survey Complete page markup" => "Sidemarkering for fullført undersøkelse"
// pe.completedHtmlOnCondition: "Dynamic Survey Complete page markup" => "Sidemarkering for fullført dynamisk undersøkelse"
// pe.loadingHtml: "Markup to show while survey model is loading" => "Markering som skal vises mens evalueringsmodellen lastes inn"
// pe.commentText: "Comment area text" => "Tekst i kommentarfeltet"
// pe.autocomplete: "Autocomplete type" => "Autofullfør type"
// pe.labelTrue: "\"True\" label" => "Etiketten «True»"
// pe.labelFalse: "\"False\" label" => "\"False\" etikett"
// pe.allowClear: "Show the Clear button" => "Vis Fjern-knappen"
// pe.displayStyle: "Value display style" => "Visningsstil for verdi"
// pe.format: "Formatted string" => "Formatert streng"
// pe.maximumFractionDigits: "Maximum fractional digits" => "Maksimalt antall brøksifre"
// pe.minimumFractionDigits: "Minimum fractional digits" => "Minimum brøksifre"
// pe.useGrouping: "Display grouping separators" => "Skilletegn for skjermgruppering"
// pe.allowMultiple: "Allow multiple files" => "Tillat flere filer"
// pe.allowImagesPreview: "Preview images" => "Forhåndsvis bilder"
// pe.acceptedTypes: "Accepted file types" => "Godkjente filtyper"
// pe.waitForUpload: "Wait for the upload to complete" => "Vent til opplastingen er fullført"
// pe.needConfirmRemoveFile: "Confirm file deletion" => "Bekreft sletting av fil"
// pe.detailPanelMode: "Detail panel location" => "Plassering av detaljpanelet"
// pe.minRowCount: "Minimum row count" => "Minimum radantall"
// pe.maxRowCount: "Maximum row count" => "Maksimalt radantall"
// pe.confirmDelete: "Confirm row deletion" => "Bekreft radsletting"
// pe.confirmDeleteText: "Confirmation message" => "Bekreftelsesmelding"
// paneldynamic.confirmDelete: "Confirm panel deletion" => "Bekreft sletting av panel"
// pe.panelCount: "Initial panel count" => "Innledende panelopptelling"
// pe.minPanelCount: "Minimum panel count" => "Minimum antall paneler"
// pe.maxPanelCount: "Maximum panel count" => "Maksimalt antall paneler"
// pe.panelsState: "Inner panel expand state" => "Utvidelsestilstand for Indre panel"
// pe.templateDescription: "Description template" => "Mal for beskrivelse"
// pe.templateTitle: "Title template" => "Tittel mal"
// pe.panelPrevText: "Previous Panel button tooltip" => "Verktøytips for forrige panelknapp"
// pe.panelNextText: "Next Panel button tooltip" => "Verktøytips for neste panelknapp"
// pe.showRangeInProgress: "Show progress bar" => "Vis fremdriftsindikator"
// pe.templateTitleLocation: "Question title location" => "Spørsmål tittel sted"
// pe.panelRemoveButtonLocation: "Remove Panel button location" => "Fjern plassering av panelknappen"
// pe.hideIfRowsEmpty: "Hide the question if there are no rows" => "Skjul spørsmålet hvis det ikke er noen rader"
// pe.hideColumnsIfEmpty: "Hide columns if there are no rows" => "Skjule kolonner hvis det ikke er noen rader"
// pe.rateValues: "Custom rate values" => "Egendefinerte frekvensverdier"
// pe.rateCount: "Rate count" => "Antall priser"
// pe.autoGenerate: "How to specify rate values?" => "Hvordan spesifisere renteverdier?"
// pe.hideIfChoicesEmpty: "Hide the question if it contains no choices" => "Skjul spørsmålet hvis det ikke inneholder noen valg"
// pe.hideNumber: "Hide question number" => "Skjul spørsmålsnummer"
// pe.minWidth: "Minimum width (in CSS-accepted values)" => "Minimumsbredde (i CSS-godkjente verdier)"
// pe.maxWidth: "Maximum width (in CSS-accepted values)" => "Maksimal bredde (i CSS-godkjente verdier)"
// pe.width: "Width (in CSS-accepted values)" => "Bredde (i CSS-godkjente verdier)"
// pe.showHeader: "Show column headers" => "Vise kolonneoverskrifter"
// pe.horizontalScroll: "Show horizontal scrollbar" => "Vis vannrett rullefelt"
// pe.columnMinWidth: "Minimum column width (in CSS-accepted values)" => "Minimum kolonnebredde (i CSS-godkjente verdier)"
// pe.rowTitleWidth: "Row header width (in CSS-accepted values)" => "Radoverskriftsbredde (i CSS-godtatte verdier)"
// pe.valueTrue: "\"True\" value" => "\"True\"-verdi"
// pe.valueFalse: "\"False\" value" => "\"False\" verdi"
// pe.minErrorText: "\"Value is below minimum\" error message" => "Feilmeldingen «Verdien er under minimum»"
// pe.maxErrorText: "\"Value exceeds maximum\" error message" => "Feilmeldingen \"Verdien overskrider maksimum\""
// pe.otherErrorText: "\"Empty comment\" error message" => "Feilmeldingen «Tom kommentar»"
// pe.keyDuplicationError: "\"Non-unique key value\" error message" => "Feilmeldingen \"Ikke-unik nøkkelverdi\""
// pe.minSelectedChoices: "Minimum selected choices" => "Minimum valgte valg"
// pe.maxSelectedChoices: "Maximum selected choices" => "Maksimalt antall merkede valg"
// pe.showClearButton: "Show the Clear button" => "Vis Fjern-knappen"
// pe.showNumber: "Show panel number" => "Vis panelnummer"
// pe.logoWidth: "Logo width (in CSS-accepted values)" => "Logobredde (i CSS-godkjente verdier)"
// pe.logoHeight: "Logo height (in CSS-accepted values)" => "Logohøyde (i CSS-godkjente verdier)"
// pe.readOnly: "Read-only" => "Skrivebeskyttet"
// pe.enableIf: "Editable if" => "Kan redigeres hvis"
// pe.emptyRowsText: "\"No rows\" message" => "Meldingen «Ingen rader»"
// pe.size: "Input field size (in characters)" => "Størrelse på inndatafelt (i tegn)"
// pe.separateSpecialChoices: "Separate special choices (None, Other, Select All)" => "Skille spesialvalg (Ingen, Annet, Merk alt)"
// pe.choicesFromQuestion: "Copy choices from the following question" => "Kopier valg fra følgende spørsmål"
// pe.choicesFromQuestionMode: "Which choices to copy?" => "Hvilke valg å kopiere?"
// pe.showCommentArea: "Show the comment area" => "Vis kommentarfeltet"
// pe.commentPlaceholder: "Comment area placeholder" => "Plassholder for kommentarområde"
// pe.displayRateDescriptionsAsExtremeItems: "Display rate descriptions as extreme values" => "Vise frekvensbeskrivelser som ekstremverdier"
// pe.rowsOrder: "Row order" => "Rekkefølge på rad"
// pe.columnsLayout: "Column layout" => "Kolonneoppsett"
// pe.columnColCount: "Nested column count" => "Nestet kolonneantall"
// pe.state: "Panel expand state" => "Utvidelsestilstand for panel"
// pe.correctAnswer: "Correct Answer" => "Riktig svar"
// pe.defaultPanelValue: "Default Values" => "Standardverdier"
// pe.cells: "Cell Texts" => "Cell Tekster"
// pe.keyName: "Key column" => "Nøkkelkolonne"
// itemvalue.text: "Alt text" => "Alternativ tekst"
// tabs.expression: "Expression" => "Uttrykk"
// pe.choicesVisibleIf: "Choices are visible if" => "Valgene er synlige hvis"
// pe.choicesEnableIf: "Choices are selectable if" => "Valgene kan velges hvis"
// pe.columnsEnableIf: "Columns are visible if" => "Kolonner er synlige hvis"
// pe.rowsEnableIf: "Rows are visible if" => "Rader er synlige hvis:"
// pe.indent: "Add indents" => "Legge til innrykk"
// panel.indent: "Add outer indents" => "Legge til ytre innrykk"
// pe.innerIndent: "Add inner indents" => "Legge til indre innrykk"
// pe.defaultValueFromLastRow: "Take default values from the last row" => "Ta standardverdier fra den siste raden"
// pe.defaultValueFromLastPanel: "Take default values from the last panel" => "Ta standardverdier fra det siste panelet"
// pe.emptyExpressionPlaceHolder: "Type expression here..." => "Skriv inn uttrykk her..."
// pe.clearIfInvisible: "Clear the value if the question becomes hidden" => "Fjern verdien hvis spørsmålet blir skjult"
// pe.valuePropertyName: "Value property name" => "Navn på egenskap Value"
// pe.searchEnabled: "Enable search" => "Aktivere søk"
// pe.hideSelectedItems: "Hide selected items" => "Skjule merkede elementer"
// pe.closeOnSelect: "Close the dropdown after selection" => "Lukk rullegardinmenyen etter valget"
// pe.signatureWidth: "Signature width" => "Signatur bredde"
// pe.signatureHeight: "Signature height" => "Signatur høyde"
// pe.verticalAlign: "Vertical alignment" => "Loddrett justering"
// pe.alternateRows: "Alternate rows" => "Annenhver rad"
// pe.columnsVisibleIf: "Columns are visible if" => "Kolonner er synlige hvis"
// pe.rowsVisibleIf: "Rows are visible if" => "Rader er synlige hvis:"
// pe.otherPlaceholder: "Comment area placeholder" => "Plassholder for kommentarområde"
// pe.rateType: "Rate type" => "Type sats"
// pv.true: "true" => "sann"
// pv.false: "false" => "falsk"
// pv.decimal: "decimal" => "desimal"
// pv.currency: "currency" => "valuta"
// pv.percent: "percent" => "prosent"
// pv.onpanel: "Start on each panel" => "Start på hvert panel"
// pv.tab: "Tabs" => "Kategoriene"
// pv.right: "Right" => "Høyre"
// pv.color: "color" => "farge"
// pv.date: "date" => "daddel"
// pv.datetime: "datetime" => "datetime"
// pv.datetime-local: "datetime-local" => "datetime-lokal"
// pv.email: "email" => "E-post"
// pv.month: "month" => "måned"
// pv.number: "number" => "nummer"
// pv.password: "password" => "passord"
// pv.range: "range" => "rekkevidde"
// pv.tel: "tel" => "Tel"
// pv.text: "text" => "Tekst"
// pv.time: "time" => "Tid"
// pv.url: "url" => "URL"
// pv.week: "week" => "uke"
// pv.onHiddenContainer: "When the question or its panel/page becomes hidden" => "Når spørsmålet eller panelet/siden blir skjult"
// clearInvisibleValues.none: "Never" => "Aldri"
// inputType.color: "Color" => "Farge"
// inputType.date: "Date" => "Daddel"
// inputType.datetime-local: "Date and Time" => "Dato og klokkeslett"
// inputType.email: "Email" => "E-post"
// inputType.month: "Month" => "Måned"
// inputType.number: "Number" => "Nummer"
// inputType.password: "Password" => "Passord"
// inputType.range: "Range" => "Rekkevidde"
// inputType.tel: "Phone Number" => "Telefonnummer"
// inputType.text: "Text" => "Tekst"
// inputType.time: "Time" => "Tid"
// inputType.url: "URL" => "URL"
// inputType.week: "Week" => "Uke"
// pv.onValueChanging: "Before an answer is changed" => "Før et svar endres"
// pv.pages: "Completed pages" => "Fullførte sider"
// pv.questions: "Answered questions" => "Besvarte spørsmål"
// pv.requiredQuestions: "Answered required questions" => "Besvarte nødvendige spørsmål"
// pv.correctQuestions: "Valid answers" => "Gyldige svar"
// pv.buttons: "Completed pages (button UI)" => "Fullførte sider (brukergrensesnitt for knapp)"
// pv.underInput: "Under the input" => "Under inngangen"
// pv.underTitle: "Under the title" => "Under tittelen"
// pv.onBlur: "On blur" => "På uskarphet"
// pv.onTyping: "While typing" => "Mens du skriver"
// pv.underRow: "Under the row" => "Under raden"
// pv.underRowSingle: "Under the row, only one panel is visible" => "Under raden er bare ett panel synlig"
// showNavigationButtons.none: "Hidden" => "Skjult"
// showProgressBar.off: "Hidden" => "Skjult"
// showTimerPanel.none: "Hidden" => "Skjult"
// showTimerPanelMode.all: "Both" => "Begge"
// detailPanelMode.none: "Hidden" => "Skjult"
// addRowLocation.default: "Depends on matrix layout" => "Avhenger av matriseoppsett"
// panelsState.default: "Users cannot expand or collapse panels" => "Brukere kan ikke vise eller skjule paneler"
// panelsState.collapsed: "All panels are collapsed" => "Alle paneler er skjult"
// panelsState.expanded: "All panels are expanded" => "Alle paneler er utvidet"
// widthMode.auto: "Auto" => "Auto"
// widthMode.static: "Static" => "Statisk"
// widthMode.responsive: "Responsive" => "Lydhør"
// imageFit.none: "None" => "Ingen"
// imageFit.contain: "Contain" => "Inneholde"
// imageFit.cover: "Cover" => "Lokk"
// imageFit.fill: "Fill" => "Fylle"
// contentMode.auto: "Auto" => "Auto"
// contentMode.image: "Image" => "Bilde"
// contentMode.video: "Video" => "Video"
// contentMode.youtube: "YouTube" => "YouTube"
// displayMode.auto: "Auto" => "Auto"
// displayMode.buttons: "Buttons" => "Knapper"
// displayMode.dropdown: "Dropdown" => "Rullegardinmeny"
// rateColorMode.default: "Default" => "Standard"
// autoGenerate.true: "Generate" => "Frembringe"
// autoGenerate.false: "Enter manually" => "Angi manuelt"
// rateType.labels: "Labels" => "Etiketter"
// rateType.stars: "Stars" => "Stjerner"
// rateType.smileys: "Smileys" => "Smilefjes"
// op.and: "and" => "og"
// op.or: "or" => "eller"
// ew.modern: "Modern theme" => "Moderne tema"
// ew.default: "Default theme" => "Standard tema"
// ew.orange: "Orange theme" => "Oransje-tema"
// ew.darkblue: "Darkblue theme" => "Mørkeblått-tema"
// ew.darkrose: "Darkrose theme" => "Darkrose-tema"
// ew.stone: "Stone theme" => "Stein-tema"
// ew.winter: "Winter theme" => "Vinter-tema"
// ew.winterstone: "Winter-Stone theme" => "Vinterstein-tema"
// ts.hideInvisibleElements: "Hide invisible elements" => "Skjule usynlige elementer"
// pehelp.cookieName: "Cookies prevent users from filling out the same survey twice." => "Informasjonskapsler hindrer brukere i å fylle ut den samme undersøkelsen to ganger."
// pehelp.size: "Resizes the visible area of the input field. Please use the <b>Validation → Maximum length</b> setting to limit the input length." => "Endrer størrelsen på det synlige området i inndatafeltet. <b>Bruk innstillingen Validering → maksimal lengde</b> for å begrense inngangslengden."
// pehelp.format: "Use {0} as a placeholder for the actual value." => "Bruk {0} som plassholder for den faktiske verdien."
// pehelp.totalText: "Visible only when at least one column has Total type or Total expression." => "Bare synlig når minst én kolonne har Totaltype- eller Total-uttrykk."
// pehelp.acceptedTypes: "Refer to the [accept](https://www.w3schools.com/tags/att_input_accept.asp) attribute description for more information." => "Se attributtbeskrivelsen [accept](https://www.w3schools.com/tags/att_input_accept.asp) hvis du vil ha mer informasjon."
// pehelp.columnColCount: "Applicable only to Radiogroup and Checkbox cell types." => "Gjelder bare for celletypene Radiogruppe og Avmerkingsboks."
// pehelp.autocomplete: "Refer to the [autocomplete](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete) attribute description for more information." => "Se attributtbeskrivelsen [autofullfør](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete) hvis du vil ha mer informasjon."
// pehelp.valueName: "If you do not set this property, the answer will be stored in a field specified by the Name property." => "Hvis du ikke angir denne egenskapen, lagres svaret i et felt som er angitt av egenskapen Name."
// choicesbyurl.valueName: " " => " "
// pehelp.keyName: "If the specified column contains identical values, the survey throws the \"Non-unique key value\" error." => "Hvis den angitte kolonnen inneholder identiske verdier, gir undersøkelsen feilen \"Ikke-unik nøkkelverdi\"."
// p.multiSelect: "Allow multiple selection" => "Tillat flere valg"
// p.showLabel: "Show image captions" => "Vis bildetekster"
// p.value: "Value" => "Verdi"
// p.tabAlign: "Tab alignment" => "Justering av tabulatorer"
// p.logoFit: "Logo fit" => "Logo passform"
// p.pages: "Pages" => "Sider"
// p.questions: "Questions" => "Spørsmål"
// p.calculatedValues: "Calculated values" => "Beregnede verdier"
// p.surveyId: "Survey id" => "Undersøkelses-ID"
// p.surveyPostId: "Survey post id" => "Post-ID for undersøkelse"
// p.surveyShowDataSaving: "Survey show data saving" => "Undersøkelse viser datalagring"
// p.questionDescriptionLocation: "Question description location" => "Spørsmål beskrivelse sted"
// p.progressBarType: "Progress bar type" => "Type fremdriftsindikator"
// p.showTOC: "Show TOC" => "Vis innholdsfortegnelse"
// p.tocLocation: "Toc location" => "Toc-plassering"
// p.questionTitlePattern: "Question title pattern" => "Mønster for spørsmålstittel"
// p.widthMode: "Width mode" => "Bredde, modus"
// p.showBrandInfo: "Show brand info" => "Vis merkeinformasjon"
// p.useDisplayValuesInDynamicTexts: "Use display values in dynamic texts" => "Bruke visningsverdier i dynamiske tekster"
// p.descriptionLocation: "Description location" => "Beskrivelse plassering"
// p.defaultValueExpression: "Default value expression" => "Uttrykk for standardverdi"
// p.bindings: "Bindings" => "Bindinger"
// p.renderAs: "Render as" => "Gjengi som"
// p.attachOriginalItems: "Attach original items" => "Legg ved originale elementer"
// p.cellHint: "Cell hint" => "Celle hint"
// p.isUnique: "Is unique" => "Er unik"
// p.showInMultipleColumns: "Show in multiple columns" => "Vis i flere kolonner"
// p.totalMaximumFractionDigits: "Total maximum fraction digits" => "Totalt maksimum antall sifre i brøk"
// p.totalMinimumFractionDigits: "Total minimum fraction digits" => "Totalt antall minimumssifre i brøk"
// p.detailElements: "Detail elements" => "Detaljelementer"
// p.allowAdaptiveActions: "Allow adaptive actions" => "Tillat adaptive handlinger"
// p.detailPanelShowOnAdding: "Detail panel show on adding" => "Detaljpanelet vises når du legger til"
// p.choicesLazyLoadEnabled: "Choices lazy load enabled" => "Valg lat belastning aktivert"
// p.choicesLazyLoadPageSize: "Choices lazy load page size" => "Valg lat lastesidestørrelse"
// p.inputFieldComponent: "Input field component" => "Komponent for inntastingsfelt"
// p.itemComponent: "Item component" => "Element komponent"
// p.min: "Min" => "Min"
// p.max: "Max" => "Maks"
// p.minValueExpression: "Min value expression" => "Mitt verdiuttrykk"
// p.maxValueExpression: "Max value expression" => "Uttrykk med maksverdi"
// p.step: "Step" => "Skritt"
// p.dataList: "Data list" => "Dataliste"
// p.elements: "Elements" => "Elementer"
// p.content: "Content" => "Innhold"
// p.navigationTitle: "Navigation title" => "Navigasjon tittel"
// p.navigationDescription: "Navigation description" => "Beskrivelse av navigasjon"
// p.longTap: "Long tap" => "Langt trykk"
// p.autoGrow: "Auto grow" => "Automatisk vekst"
// p.allowResize: "Allow resizing" => "Tillat endring av størrelse"
// p.acceptCarriageReturn: "Accept carriage return" => "Godta retur av frakt"
// p.displayMode: "Display mode" => "Visningsmodus"
// p.rateType: "Rate type" => "Type sats"
// p.contentMode: "Content mode" => "Innhold-modus"
// p.imageFit: "Image fit" => "Tilpasning til bildet"
// p.altText: "Alt text" => "Alternativ tekst"
// p.height: "Height" => "Høyde"
// p.penColor: "Pen color" => "Farge på penn"
// p.backgroundColor: "Background color" => "Bakgrunnsfarge"
// p.templateElements: "Template elements" => "Mal elementer"
// p.operator: "Operator" => "Operatør"
// p.isVariable: "Is variable" => "Er variabel"
// p.runExpression: "Run expression" => "Kjør uttrykk"
// p.showCaption: "Show caption" => "Vis bildetekst"
// p.iconName: "Icon name" => "Navn på ikon"
// p.iconSize: "Icon size" => "Ikon størrelse"
// p.precision: "Precision" => "Presisjon"
// p.matrixDragHandleArea: "Matrix drag handle area" => "Område for drahåndtak for matrise"
// p.backgroundImage: "Background image" => "Bakgrunnsbilde"
// p.backgroundImageFit: "Background image fit" => "Tilpasning til bakgrunnsbilde"
// p.backgroundImageAttachment: "Background image attachment" => "Vedlegg til bakgrunnsbilde"
// p.backgroundOpacity: "Background opacity" => "Ugjennomsiktighet i bakgrunnen"
// p.selectToRankEnabled: "Select to rank enabled" => "Velg for å rangere aktivert"
// p.selectToRankAreasLayout: "Select to rank areas layout" => "Velg for å rangere områdeoppsettet"
// p.allowCameraAccess: "Allow camera access" => "Tillat kameratilgang"
// p.scaleColorMode: "Scale color mode" => "Skaler farge, modus"
// p.rateColorMode: "Rate color mode" => "Vurder farge, modus"
// p.templateTabTitle: "Template tab title" => "Tittel på Mal-fanen"
// p.templateVisibleIf: "Template visible if" => "Mal synlig hvis"
// p.copyDisplayValue: "Copy display value" => "Kopier visningsverdi"
// theme.--background: "Background color" => "Bakgrunnsfarge"
// theme.--background-dim-light: "Background dim light color" => "Svak lys farge i bakgrunnen"
// theme.--primary-foreground: "Primary foreground color" => "Primær forgrunnsfarge"
// theme.--foreground: "Foreground color" => "Forgrunnsfarge"
// theme.--base-unit: "Base unit" => "Basisenhet"
// theme.groupGeneral: "General" => "Generelt"
// theme.groupAdvanced: "Advanced" => "Avansert"
// theme.themeName: "Theme" => "Tema"
// theme.themeMode: "Question appearance" => "Spørsmål utseende"
// theme.themeModePanels: "Default" => "Standard"
// theme.themeModeLightweight: "Without Panels" => "Uten paneler"
// theme.themePaletteLight: "Light" => "Lys"
// theme.themePaletteDark: "Dark" => "Mørk"
// theme.primaryColor: "Accent color" => "Uthevingsfarge"
// theme.primaryDefaultColor: "Default" => "Standard"
// theme.primaryDarkColor: "Hover" => "Sveve"
// theme.primaryLightColor: "Selected" => "Utvalgt"
// theme.backgroundDimColor: "Background color" => "Bakgrunnsfarge"
// theme.backgroundImage: "Background image" => "Bakgrunnsbilde"
// theme.backgroundImageFitAuto: "Auto" => "Auto"
// theme.backgroundImageFitCover: "Cover" => "Lokk"
// theme.backgroundImageFitContain: "Contain" => "Inneholde"
// theme.backgroundOpacity: "Opacity" => "Ugjennomsiktighet"
// theme.backgroundImageAttachmentFixed: "Fixed" => "Fast"
// theme.backgroundImageAttachmentScroll: "Scroll" => "Bla"
// theme.panelBackgroundTransparency: "Panel background opacity" => "Tetthet i panelbakgrunn"
// theme.questionBackgroundTransparency: "Question background opacity" => "Spørsmål om bakgrunnstetthet"
// theme.questionPanel: "Panel background and corner radius" => "Panelbakgrunn og hjørneradius"
// theme.questionTitle: "Question title font" => "Spørsmål tittel skrift"
// theme.questionDescription: "Question description font" => "Skrift for spørsmålsbeskrivelse"
// theme.editorPanel: "Input element" => "Inndata-element"
// theme.editorFont: "Input element font" => "Skrift for inndataelement"
// theme.backcolor: "Default background" => "Standard bakgrunn"
// theme.hovercolor: "Hover background" => "Pekerfølsom bakgrunn"
// theme.borderDecoration: "Border decoration" => "Grense dekorasjon"
// theme.accentBackground: "Accent background" => "Bakgrunn med aksent"
// theme.accentForeground: "Accent foreground" => "Uthevingsforgrunn"
// theme.primaryForecolor: "Default color" => "Standardfarge"
// theme.primaryForecolorLight: "Disabled color" => "Deaktivert farge"
// theme.linesColors: "Minor line colors" => "Mindre linjefarger"
// theme.borderDefault: "Darker" => "Mørkere"
// theme.borderLight: "Lighter" => "Lekter"
// theme.fontFamily: "Font family" => "Skriftfamilie"
// theme.fontSize: "Font size" => "Skriftstørrelse"
// theme.color: "Color" => "Farge"
// theme.size: "Size" => "Størrelse"
// theme.fontWeightRegular: "Regular" => "Regelmessig"
// theme.fontWeightHeavy: "Heavy" => "Tung"
// theme.fontWeightSemiBold: "Semi-bold" => "Halvmodig"
// theme.fontWeightBold: "Bold" => "Fet"
// theme.scale: "Scale" => "Skala"
// theme.cornerRadius: "Corner radius" => "Hjørne radius"
// theme.surveyTitle: "Survey title font" => "Skrift for undersøkelsestittel"
// theme.pageTitle: "Page title font" => "Skrift for sidetittel"
// theme.pageDescription: "Page description font" => "Skrift for sidebeskrivelse"
// theme.boxShadowX: "X" => "X"
// theme.boxShadowY: "Y" => "Y"
// theme.boxShadowAddRule: "Add Shadow Effect" => "Legg til skyggeeffekt"
// theme.opacity: "Opacity" => "Ugjennomsiktighet"
// theme.boxShadowBlur: "Blur" => "Dimme"
// theme.boxShadowSpread: "Spread" => "Spredning"
// theme.boxShadowDrop: "Drop" => "Dråpe"
// theme.boxShadowInner: "Inner" => "Indre"
// theme.questionShadow: "Shadow effects" => "Skygge effekter"
// theme.editorShadow: "Input element shadow effects" => "Skyggeeffekter for inndataelement"
// names.default: "Default" => "Standard"
// names.contrast: "Contrast" => "Kontrast"
// names.plain: "Plain" => "Slette"
// names.simple: "Simple" => "Enkel"
// names.blank: "Blank" => "Blank"
// names.double: "Double" => "Dobbel"
// names.bulk: "Bulk" => "Bulk"
// names.pseudo-3d: "Pseudo 3D" => "Pseudo 3D"
// names.playful: "Playful" => "Leken"
// names.ultra: "Ultra" => "Ultra"
// colors.teal: "Teal" => "Teal"
// colors.blue: "Blue" => "Blå"
// colors.purple: "Purple" => "Lilla"
// colors.orchid: "Orchid" => "Orkidé"
// colors.tulip: "Tulip" => "Tulipan"
// colors.brown: "Brown" => "Brun"
// colors.green: "Green" => "Grønn"
// names.sharp: "Sharp" => "Skarp"
// names.borderless: "Borderless" => "Kantløse"
// names.flat: "Flat" => "Flat"
// names.doubleborder: "Double Border" => "Dobbel kantlinje"
// names.layered: "Layered" => "Lagdelte"
// names.solid: "Solid" => "Solid"
// names.threedimensional: "3D" => ".3D"
// ed.translationDeleteLanguage: "Are you certain you wish to delete all strings for this language?" => "Er du sikker på at du ønsker å slette alle strenger for dette språket?"
// ed.themeResetButton: "Reset theme settings to default" => "Tilbakestill temainnstillinger til standard"
// theme.placeholderColor: "Placeholder color" => "Plassholderfarge"
// ed.themeSettings: "Theme Settings" => "Tema innstillinger"
// ed.themeSettingsTooltip: "Open theme settings" => "Åpne temainnstillinger"
// pe.resetToDefaultCaption: "Reset" => "Nullstille"
// pv.file: "Local files" => "Lokale filer"
// pv.camera: "Camera" => "Kamera"
// pv.file-camera: "Local files or camera" => "Lokale filer eller kamera"
// ed.translateUsigAI: "Auto-translate All" => "Oversett alle automatisk"
// ed.translationDialogTitle: "Untranslated strings" => "Uoversatte strenger"
// pe.fastEntryChoicesMinCountError: "Please enter at least {0} items" => "Vennligst skriv inn minst {0} elementer"
// lg.question_resetValueName: "Reset question value" => "Tilbakestille spørsmålsverdien"
// lg.column_resetValue: "Reset column value" => "Tilbakestille kolonneverdi"
// pe.markRequired: "Mark as required" => "Merk etter behov"
// pe.removeRequiredMark: "Remove the required mark" => "Fjern ønsket merke"
// p.resetValueIf: "Reset value if" => "Tilbakestill verdien hvis"
// lg.question_setValueName: "Set question value" => "Angi spørsmålsverdi"
// lg.column_resetValueName: "Reset column value" => "Tilbakestille kolonneverdi"
// lg.column_setValueName: "Set column value" => "Angi kolonneverdi"
// lg.setValueExpressionPlaceholder: " An expression whose result will be assigned to the target question." => " Et uttrykk der resultatet tilordnes målspørsmålet."
// survey.title: "Title" => "Tittel"
// page.title: "Title" => "Tittel"
// p.setValueIf: "Set value if" => "Angi verdi hvis"
// theme.groupHeader: "Header" => "Topptekst"
// theme.coverTitleForecolor: "Title forecolor" => "Tittel forfarge"
// theme.coverOverlapEnabled: "Overlap" => "Overlappe"
// theme.backgroundImageFitFill: "Stretch" => "Strekning"
// theme.backgroundImageFitTile: "Tile" => "Flis"
// theme.headerView: "View" => "Utsikt"
// theme.headerViewBasic: "Basic" => "Grunnleggende"
// theme.headerViewAdvanced: "Advanced" => "Avansert"
// theme.coverInheritWidthFrom: "Content area width" => "Bredde på innholdsområdet"
// theme.coverInheritWidthFromSurvey: "Same as survey" => "Samme som undersøkelse"
// theme.coverInheritWidthFromPage: "Fit to page" => "Tilpass til side"
// theme.coverTextAreaWidth: "Text width" => "Tekstbredde"
// theme.coverBackgroundColorSwitch: "Background color" => "Bakgrunnsfarge"
// theme.coverBackgroundColorNone: "None" => "Ingen"
// theme.coverBackgroundColorAccentColor: "Accent color" => "Uthevingsfarge"
// theme.coverBackgroundColorCustom: "Custom" => "Skikk"
// theme.horizontalAlignmentLeft: "Left" => "Venstre"
// theme.horizontalAlignmentCenter: "Center" => "Sentrum"
// theme.horizontalAlignmentRight: "Right" => "Høyre"
// theme.verticalAlignmentTop: "Top" => "Topp"
// theme.verticalAlignmentMiddle: "Middle" => "Midt"
// theme.verticalAlignmentBottom: "Bottom" => "Bunn"
// lg.question_resetValueText: "reset value for question: {0}" => "Tilbakestill verdi for spørsmål: {0}"
// lg.question_setValueText: "assign value: {1} to question: {0}" => "tilordne verdi: {1} til spørsmålet: {0}"
// lg.column_resetValueText: "reset cell value for column: {0}" => "Tilbakestill celleverdi for kolonne: {0}"
// lg.column_setValueText: "assign cell value: {1} to column: {0}" => "Tilordne celleverdi: {1} til kolonne: {0}"
// ed.surveyJsonExportButton: "Export" => "Eksport"
// ed.surveyJsonImportButton: "Import" => "Importere"
// ed.surveyJsonCopyButton: "Copy to clipboard" => "Kopiere til utklippstavlen"
// pe.filePlaceholder: "File placeholder text" => "Plassholdertekst for fil"
// pe.photoPlaceholder: "Photo placeholder text" => "Tekst for plassholdere for bilde"
// pe.fileOrPhotoPlaceholder: "File or photo placeholder text" => "Plassholdertekst for fil eller bilde"
// pehelp.filePlaceholder: "Applies when \"Source type\" is \"Local files\" or when camera is unavailable" => "Gjelder når \"Kildetype\" er \"Lokale filer\" eller når kameraet er utilgjengelig"
// pehelp.photoPlaceholder: "Applies when \"Source type\" is \"Camera\"." => "Gjelder når \"Kildetype\" er \"Kamera\"."
// pehelp.fileOrPhotoPlaceholder: "Applies when \"Source type\" is \"Local files or camera\"." => "Gjelder når \"Kildetype\" er \"Lokale filer eller kamera\"."
// theme.groupBackground: "Background" => "Bakgrunn"
// theme.groupAppearance: "Appearance" => "Utseende"
// theme.coverDescriptionForecolor: "Description forecolor" => "Beskrivelse forfarge"
// ed.themeResetConfirmation: "Do you really want to reset the theme? All your customizations will be lost." => "Vil du virkelig tilbakestille temaet? Alle tilpasningene dine vil gå tapt."
// ed.themeResetConfirmationOk: "Yes, reset the theme" => "Ja, tilbakestill temaet"
// theme.groupBackground: "Background" => "Bakgrunn"
// theme.groupAppearance: "Appearance" => "Utseende"
// theme.coverDescriptionForecolor: "Description forecolor" => "Beskrivelse forfarge"
// theme.coverInheritWidthFromContainer: "Fit to container" => "Tilpass til container"
// signaturepad.showPlaceholder: "Show the placeholder" => "Vise plassholderen"
// signaturepad.placeholder: "Placeholder text" => "Plassholdertekst"
// theme.surveyDescription: "Survey description font" => "Skrift for undersøkelsesbeskrivelse"
// ed.prevFocus: "Focus previous" => "Fokus forrige"
// ed.nextFocus: "Focus next" => "Fokus neste"
// ed.saveTheme: "Save Theme" => "Lagre tema"
// ed.saveThemeTooltip: "Save Theme" => "Lagre tema"
// lg.page_requireName: "Make page required" => "Gjøre siden obligatorisk"
// lg.panel_requireName: "Make page required" => "Gjøre siden obligatorisk"
// signaturepad.signatureWidth: "Signature area width" => "Bredde på signaturområde"
// signaturepad.signatureHeight: "Signature area height" => "Høyde på signaturområdet"
// signaturepad.signatureAutoScaleEnabled: "Auto-scale the signature area" => "Skalere signaturområdet automatisk"
// signaturepad.penMinWidth: "Minimum pen width" => "Minimum pennebredde"
// signaturepad.penMaxWidth: "Maximum pen width" => "Maksimal pennebredde"
// theme.logoPosition: "Logo position" => "Logo posisjon"
// theme.coverTitlePosition: "Title position" => "Tittelposisjon"
// theme.coverDescriptionPosition: "Description position" => "Beskrivelse posisjon"