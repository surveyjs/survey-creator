import { editorLocalization } from "survey-creator-core";

export var danishStrings = {
  // survey templates
  survey: {
    edit: "Rediger",
    externalHelpLink: "Se og lær, hvordan du opretter undersøgelser",
    externalHelpLinkUrl: "https://www.youtube.com/channel/UCH2ru9okIcooNZfpIbyq4qQ?view_as=subscriber",
    dropQuestion: "Træk et spørgsmål hertil fra paletten til venstre.",
    addLogicItem: "Opret en regel for at tilpasse undersøgelsens flow.",
    copy: "Kopier",
    duplicate: "Multiplicere",
    addToToolbox: "Tilføj til paletten",
    deletePanel: "Slet panel",
    deleteQuestion: "Slet spørgsmål",
    convertTo: "Konverter til",
    drag: "Træk element",
  },
  // Question types
  qt: {
    default: "Standard",
    checkbox: "Afkrydsningsfelt",
    comment: "Kommentar",
    imagepicker: "Billedvælger",
    ranking: "Rangering",
    image: "Billede",
    dropdown: "Dropdown",
    tagbox: "Rullemenu med flere valg",
    file: "Fil",
    html: "Html",
    matrix: "Matrice (ét valg)",
    matrixdropdown: "Matrice (flere valg)",
    matrixdynamic: "Matrice (dynamiske rækker)",
    multipletext: "Flere tekstfelter",
    panel: "Panel",
    paneldynamic: "Panel (dynamiske paneler)",
    radiogroup: "Alternativknap",
    rating: "Vurdering",
    text: "Tekstfelt",
    boolean: "Sandt/falsk",
    expression: "Udtryk",
    signaturepad: "Underskrift",
    buttongroup: "Knap gruppe"
  },
  // Strings in SurveyJS Creator
  ed: {
    defaultLocale: "Standard ({0})",
    survey: "Undersøgelse",
    settings: "Indstillinger for undersøgelse",
    settingsTooltip: "Åbn indstillinger",
    surveySettings: "Indstillinger for undersøgelse",
    surveySettingsTooltip: "Indstillinger for undersøgelse",
    themeSettings: "Temaindstillinger",
    themeSettingsTooltip: "Temaindstillinger",
    showPanel: "Vis panel",
    hidePanel: "Skjul panel",
    prevSelected: "Vælg forrige",
    nextSelected: "Vælg næste",
    prevFocus: "Fokus forrige",
    nextFocus: "Fokuser næste",
    surveyTypeName: "Spørgeundersøgelse",
    pageTypeName: "Side",
    panelTypeName: "Panelet",
    questionTypeName: "Spørgsmål",
    columnTypeName: "Kolonne",
    addNewPage: "Tilføj ny side",
    moveRight: "Gå til højre",
    moveLeft: "Gå til venstre",
    deletePage: "Slet side",
    editPage: "Rediger side",
    edit: "Rediger",
    newPageName: "side",
    newQuestionName: "spørgsmål",
    newPanelName: "panel",
    newTextItemName: "Tekst",
    testSurvey: "Afprøv undersøgelse",
    themeSurvey: "Temaer",
    defaultV2Theme: "Standard",
    modernTheme: "Moderne",
    defaultTheme: "Standard (ældre)",
    testSurveyAgain: "Afprøv undersøgelse igen",
    testSurveyWidth: "Bredde af undersøgelse: ",
    navigateToMsg: "Du var nødt til at navigere til",
    logic: "Logik",
    embedSurvey: "Indlejr undersøgelse",
    translation: "Oversættelse",
    saveSurvey: "Gem undersøgelse",
    saveSurveyTooltip: "Gem undersøgelse",
    saveTheme: "Gem tema",
    saveThemeTooltip: "Gem tema",
    designer: "Undersøgelsesdesigner",
    jsonEditor: "JSON Editor",
    jsonHideErrors: "Skjul fejl",
    jsonShowErrors: "Vis fejl",
    undo: "Fortryd",
    redo: "Annuller fortryd",
    undoTooltip: "Fortryd seneste ændring",
    redoTooltip: "Fortryd ændringen",
    showMoreChoices: "Vis mere",
    showLessChoices: "Vis mindre",
    copy: "Eksemplar",
    cut: "Skære",
    paste: "Indsætte",
    copyTooltip: "Kopiere markering til Udklipsholder",
    cutTooltip: "Klip markering til udklipsholder",
    pasteTooltip: "Indsæt fra udklipsholder",
    options: "Indstillinger",
    generateValidJSON: "Generer gylding JSON",
    generateReadableJSON: "Generer læsbar JSON",
    toolbox: "Værktøjskasse",
    "property-grid": "Egenskaber",
    propertyGridFilteredTextPlaceholder: "Skriv for at søge...",
    propertyGridNoResultsFound: "Ingen resultater fundet",
    toolboxGeneralCategory: "Generelt",
    toolboxChoiceCategory: "Spørgsmål om valg",
    toolboxTextCategory: "Spørgsmål om tekstinput",
    toolboxContainersCategory: "Containere",
    toolboxMatrixCategory: "Matrix spørgsmål",
    toolboxMiscCategory: "Misc",
    correctJSON: "Ret venligst JSON.",
    surveyResults: "Undersøgelsesresultat: ",
    surveyResultsTable: "Som tabel",
    surveyResultsJson: "Som JSON",
    resultsTitle: "Spørgsmålets titel",
    resultsName: "Spørgsmålets navn",
    resultsValue: "Svarværdi",
    resultsDisplayValue: "Visningsværdi",
    modified: "Ændret",
    saving: "Gemmer",
    saved: "Gemt",
    propertyEditorError: "Fejl",
    saveError: "Fejl! Undersøgelsen er ikke blevet gemt.",
    translationPropertyGridTitle: "Sprogindstillinger",
    themePropertyGridTitle: "Temaindstillinger",
    translationLanguages: "Sprog",
    translationDeleteLanguage: "Er du sikker på, at du ønsker at slette alle strenge for dette sprog?",
    translationAddLanguage: "Vælg et sprog at oversætte",
    translationShowAllStrings: "Vis alle tekststrenge",
    translationShowUsedStringsOnly: "Kun brugte strenge",
    translationShowAllPages: "Vis alle sider",
    translationNoStrings: "Ingen tekststrenge at oversætte. Ret filteret.",
    translationExportToSCVButton: "Eksporter til CSV",
    translationImportFromSCVButton: "Importer fra CSV",
    translateUsigAI: "Oversæt automatisk alle",
    translateUsigAIFrom: "Oversæt fra: ",
    translationDialogTitle: "Uoversatte strenge",
    translationMergeLocaleWithDefault: "Flet {0} med standardsprog",
    translationPlaceHolder: "Oversættelse...",
    themeExportButton: "Eksport",
    themeImportButton: "Import",
    surveyJsonExportButton: "Eksport",
    surveyJsonImportButton: "Import",
    surveyJsonCopyButton: "Kopier til udklipsholder",
    themeResetButton: "Nulstil temaindstillinger til standard",
    themeResetConfirmation: "Vil du virkelig nulstille temaet? Alle dine tilpasninger går tabt.",
    themeResetConfirmationOk: "Ja, nulstil temaet",
    bold: "Modig",
    italic: "Kursiv",
    underline: "Understrege",
    addNewQuestion: "Tilføj spørgsmål",
    selectPage: "Vælg side...",
    carryForwardChoicesCopied: "Valg kopieres fra",
    choicesLoadedFromWebText: "Valg indlæses fra en webtjeneste.",
    choicesLoadedFromWebLinkText: "Gå til indstillinger",
    choicesLoadedFromWebPreviewTitle: "Forhåndsvisning af indlæste valgmuligheder",
    htmlPlaceHolder: "HTML-indhold vil være her.",
    panelPlaceHolder: "Smid et spørgsmål fra værktøjskassen her.",
    surveyPlaceHolder: "Undersøgelsen er tom. Træk et element fra værktøjskassen, eller klik på knappen nedenfor.",
    imagePlaceHolder: "Træk og slip et billede her, eller klik på knappen nedenfor, og vælg et billede, der skal uploades",
    imageChooseImage: "Vælg billede",
    addNewTypeQuestion: "Tilføj {0}", //{0} is localizable question type
    chooseLogoPlaceholder: "[LOGO]",
    auto: "auto",
    choices_Item: "Vare ",
    lg: {
      addNewItem: "Tilføj ny regel",
      empty_tab: "Opret en regel for at tilpasse undersøgelsens flow.",
      page_visibilityName: "Vis (skjul) side",
      page_enableName: "Aktivér (deaktiver) side",
      page_requireName: "Gør siden påkrævet",
      panel_visibilityName: "Panelet Vis (skjul)",
      panel_enableName: "Aktivér (deaktiver) panel",
      panel_requireName: "Gør siden påkrævet",
      question_visibilityName: "Vis (skjul) spørgsmål",
      question_enableName: "Aktivér (deaktiver) spørgsmål",
      question_requireName: "Gør spørgsmål påkrævet",
      question_resetValueName: "Nulstil spørgsmålsværdi",
      question_setValueName: "Angiv spørgsmålsværdi",
      column_visibilityName: "Vis (skjul) kolonne",
      column_enableName: "Aktivér (deaktiver) kolonne",
      column_requireName: "Gør kolonne påkrævet",
      column_resetValueName: "Nulstil kolonneværdi",
      column_setValueName: "Angiv kolonneværdi",
      trigger_completeName: "Komplet undersøgelse",
      trigger_setvalueName: "Indstil svar",
      trigger_copyvalueName: "Kopier svar",
      trigger_skipName: "Spring til spørgsmål",
      trigger_runExpressionName: "Kør udtryk",
      completedHtmlOnConditionName: "Indstil sidemarkering af \"Undersøgelse fuldført\"",
      page_visibilityDescription: "Gør siden synlig, når det logiske udtryk returnerer sand. Ellers skal du holde det usynligt.",
      panel_visibilityDescription: "Gør panelet synligt, når det logiske udtryk returnerer sand. Ellers skal du holde det usynligt.",
      panel_enableDescription: "Få panelet og alle elementer i det til at aktivere, når det logiske udtryk returnerer sand. Ellers skal du holde dem deaktiveret.",
      question_visibilityDescription: "Gør spørgsmålet synligt, når det logiske udtryk returnerer sand. Ellers skal du holde det usynligt.",
      question_enableDescription: "Få spørgsmålet til at aktivere, når det logiske udtryk returnerer sand. Ellers skal du holde det deaktiveret.",
      question_requireDescription: "Spørgsmål bliver påkrævet, når det logiske udtryk returnerer sandt.",
      trigger_completeDescription: "Når det logiske udtryk returnerer sand, afsluttes undersøgelsen, og en slutbruger ser siden \"Tak\".",
      trigger_setvalueDescription: "Når spørgsmålsværdier, der bruges i det logiske udtryk, ændres, og det logiske udtryk returnerer sand, angives værdien til det valgte spørgsmål.",
      trigger_copyvalueDescription: "Når spørgsmålsværdier, der bruges i det logiske udtryk, ændres, og det logiske udtryk returnerer sand, kopieres værdien af et markeret spørgsmål til et andet markeret spørgsmål.",
      trigger_skipDescription: "Når det logiske udtryk returnerer sandt, springer undersøgelsen til / fokuserer det valgte spørgsmål.",
      trigger_runExpressionDescription: "Når det logiske udtryk returnerer sand, udføres det brugerdefinerede udtryk. Du kan eventuelt angive dette udtryksresultat i det valgte spørgsmål",
      completedHtmlOnConditionDescription: "Hvis det logiske udtryk returnerer sandt, ændres standardteksten for 'Tak-siden' til den givne.",
      itemExpressionText: "Når udtrykket: '{0}' returnerer sandt", //{0} - the expression
      itemEmptyExpressionText: "Ny regel",
      page_visibilityText: "Gør siden {0} synlig", //{0} page name
      panel_visibilityText: "Gør panelet {0} synligt", //{0} panel name
      panel_enableText: "Få panelet {0} aktivere", //{0} panel name
      question_visibilityText: "Gør spørgsmål {0} synlige", //{0} question name
      question_enableText: "Foretag spørgsmål{0} aktiver", //{0} question name
      question_requireText: "Gør spørgsmål {0} påkrævet", //{0} question name
      question_resetValueText: "Nulstil værdi for spørgsmål: {0}",
      question_setValueText: "Tildel værdi: {1} til spørgsmål: {0}",
      column_visibilityText: "Gør kolonne {0} af spørgsmål {1} synlig", //{0} column name, {1} question name
      column_enableText: "Få kolonne {0} af spørgsmål {1} aktivere", //{0} column name, {1} question name
      column_requireText: "Gøre kolonne {0} af spørgsmål {1} påkrævet", //{0} column name, {1} question name
      column_resetValueText: "Nulstil celleværdi for kolonne: {0}",
      column_setValueText: "Tildel celleværdi: {1} til kolonne: {0}",
      setValueExpressionPlaceholder: " Et udtryk, hvis resultat vil blive tildelt målspørgsmålet.",
      trigger_completeText: "Undersøgelsen bliver afsluttet",
      trigger_setvalueText: "Sæt spørgsmålstegn ved: {0} værdi {1}", //{0} question name, {1} setValue
      trigger_setvalueEmptyText: "Klar spørgsmålsværdi: {0}", //{0} question name
      trigger_copyvalueText: "Kopi i spørgsmål: {0} værdi fra spørgsmål {1}", //{0} and {1} question names
      trigger_skipText: "Undersøgelse Spring til spørgsmålet {0}", //{0} question name
      trigger_runExpressionText1: "Kør udtryk: '{0}'", //{0} the expression
      trigger_runExpressionText2: " og sætte spørgsmålstegn ved resultatet: {0}", //{0} question name
      completedHtmlOnConditionText: "Vis brugerdefineret tekst til siden \"Tak\".",
      showAllQuestions: "Alle spørgsmål",
      showAllActionTypes: "Alle handlingstyper",
      conditions: "Tilstand(e)",
      actions: "Foranstaltning(er)",
      expressionEditorTitle: "Definer betingelse(r)",
      actionsEditorTitle: "Definer handling(er)",
      deleteAction: "Slet handling",
      addNewAction: "Tilføj handling",
      selectedActionCaption: "Vælg handling...",
      expressionInvalid: "Det logiske udtryk er tomt eller ugyldigt. Vær venlig at rette det.",
      noActionError: "Tilføj mindst én handling.",
      actionInvalid: "Løs venligst problemer i din(e) handling(er).",
      uncompletedRule_title: "Logiske regler er ufuldstændige",
      uncompletedRule_text: "Du har ikke gennemført nogle af de logiske regler. Hvis du forlader fanen nu, vil ændringerne gå tabt. Vil du stadig forlade fanen uden at gennemføre ændringerne?",
      uncompletedRule_apply: "Ja",
      uncompletedRule_cancel: "Nej, jeg vil gerne udfylde reglerne"
    }
  },
  // Property Editors
  pe: {
    apply: "Anvend",
    ok: "OK",
    save: "Spare",
    clear: "Tydelig",
    saveTooltip: "Spare",
    cancel: "Annuller",
    set: "Sæt",
    reset: "Nulstil",
    change: "Forandre",
    refresh: "Opdatere",
    close: "Luk",
    delete: "Slet",
    add: "Tilføje",
    addNew: "Tilføj ny",
    addItem: "Klik for at tilføje...",
    removeItem: "Klik for at fjerne elementet...",
    dragItem: "Træk elementet",
    addOther: "Anden",
    addSelectAll: "Vælg alle",
    addNone: "Ingen",
    removeAll: "Fjern alle",
    edit: "Rediger",
    back: "Returner uden at gemme",
    backTooltip: "Returner uden at gemme",
    saveAndBack: "Gem og returner",
    saveAndBackTooltip: "Gem og returner",
    doneEditing: "Gjort",
    editChoices: "Rediger valgmuligheder",
    showChoices: "Vis valgmuligheder",
    move: "Flyt",
    empty: "<tom>",
    emptyValue: "Værdien er tom",
    fastEntry: "Fast Entry",
    fastEntryNonUniqueError: "Værdien '{0}' er ikke unik",
    fastEntryChoicesCountError: "Begræns antallet af varer fra {0} til {1}",
    fastEntryChoicesMinCountError: "Indtast mindst {0} punkter",
    fastEntryPlaceholder: "Du kan indstille data i følgende format:\nværdi1|tekst\nværdi2",
    formEntry: "Form Entry",
    testService: "Test the service",
    itemSelectorEmpty: "Vælg elementet",
    conditionActionEmpty: "Vælg handlingen",
    conditionSelectQuestion: "Vælg spørgsmål...",
    conditionSelectPage: "Vælg side...",
    conditionSelectPanel: "Vælg panel...",
    conditionValueQuestionTitle: "Indtast/vælg værdi",
    expressionHelp: "Indtast et udtryk. Du kan bruge krølle-parenteser for at få adgang til svarene: '{question1} + {question2}', '({price}*{quantity}) * (100 - {discount})'",
    aceEditorHelp: "Tast ctrl+space for hjælp til at afslutte udtrykket",
    aceEditorRowTitle: "Aktuel række",
    aceEditorPanelTitle: "Aktuelt panel",
    showMore: "Se dokumentationen for flere informationer",
    assistantTitle: "Tilgængelige spørgsmål:",
    cellsEmptyRowsColumns: "Der skal være mindst én kolonne eller række",
    showPreviewBeforeComplete: "Få vist et eksempel på svarene, før du indsender undersøgelsen",
    overridingPropertyPrefix: "Indstillet af ",
    resetToDefaultCaption: "Nulstille",
    propertyIsEmpty: "Indtast en værdi",
    propertyIsNoUnique: "Indtast en unik værdi",
    propertyNameIsNotUnique: "Indtast et unikt navn",
    propertyNameIsIncorrect: "Brug ikke reserverede ord: \"element\", \"valg\", \"panel\", \"række\".",
    listIsEmpty: "Der er endnu ikke tilføjet nogen varer",
    "listIsEmpty@choices": "Der er endnu ikke tilføjet nogen valgmuligheder",
    "addNew@choices": "Tilføj et valg",
    expressionIsEmpty: "Udtrykket er tomt",
    value: "Værdi",
    text: "Tekst",
    rowid: "Række ID",
    imageLink: "Billedlink",
    columnEdit: "Rediger kolonne: {0}",
    itemEdit: "Redigér: {0}",
    url: "URL",
    path: "Sti",
    valueName: "Værdiens navn",
    choicesbyurl: {
      valueName: "Hent værdier fra følgende JSON-felt"
    },
    titleName: "Titelnavn",
    imageLinkName: "Hent URL-adresser til billeder fra følgende JSON-felt",
    allowEmptyResponse: "Tillad tomt svar",
    titlePlaceholder: "Titel",
    surveyTitlePlaceholder: "Undersøgelsens titel",
    pageTitlePlaceholder: "Side {num}",
    descriptionPlaceholder: "Beskrivelse",
    surveyDescriptionPlaceholder: "Beskrivelse",
    pageDescriptionPlaceholder: "Beskrivelse",
    showOtherItem: "Har andet element",
    otherText: "Andet element tekst",
    showNoneItem: "Tillad indstillingen Ingen",
    showRefuseItem: "Tillad indstillingen Afvis at svare",
    showDontKnowItem: "Tillad indstillingen Ved ikke",
    noneText: "Ingen tekst til valgmulighed",
    showSelectAllItem: "Tillad indstillingen Vælg alt",
    selectAllText: "Vælg tekst med valgmuligheden Alle",
    choicesMin: "Minimumsværdi for automatisk genererede varer",
    choicesMax: "Maksimal værdi for automatisk genererede varer",
    choicesStep: "Trin for automatisk genererede elementer",
    name: "Navn",
    title: "Titel",
    cellType: "Celletype",
    colCount: "Antal kolonner",
    choicesOrder: "Vælg rækkefølge på valg",
    visible: "Er synlig?",
    isRequired: "Er påkrævet?",
    markRequired: "Markér efter behov",
    removeRequiredMark: "Fjern det påkrævede mærke",
    isAllRowRequired: "Kræv svar for alle rækker",
    eachRowUnique: "Undgå dublerede svar i rækker",
    requiredErrorText: "Fejlmeddelelsen \"Påkrævet\"",
    startWithNewLine: "Skal starte med ny linie?",
    rows: "Antal rækker",
    cols: "Kolonner",
    placeholder: "Hint-tekst",
    showPreview: "Vises forhåndsvisning af billeder?",
    storeDataAsText: "Gem filindhold i JSON-resultat som tekst",
    maxSize: "Maksimal filstørrelse i bytes",
    imageHeight: "Billedhøjde",
    imageWidth: "Billedbredde",
    rowCount: "Antal rækker",
    columnLayout: "Kolonnelayout",
    addRowLocation: "Tilføj række knapplacering",
    addRowText: "Tilføj række knaptekst",
    removeRowText: "Fjern række knaptekst",
    rateMin: "Mindste sats værdi",
    rateMax: "Maksimal sats værdi",
    rateStep: "Sats trin",
    minRateDescription: "Beskriv laveste vurdering",
    maxRateDescription: "Beskriv højeste vurdering",
    inputType: "Inputtype",
    optionsCaption: "Muligheder tekst",
    defaultValue: "Standardværdi",
    cellsDefaultRow: "Standard celletekst",
    surveyEditorTitle: "Rediger undersøgelsesindstillinger",
    qEditorTitle: "Redigér: {0}",
    maxLength: "Maximal længde",
    buildExpression: "Bygge",
    editExpression: "Redigere",
    and: "og",
    or: "eller",
    remove: "Fjerne",
    addCondition: "Tilføj betingelse",
    emptyLogicPopupMessage: "Vælg et spørgsmål for at begynde at konfigurere betingelser.",
    if: "Hvis",
    then: "derpå",
    setToName: "Mål spørgsmål",
    fromName: "Spørgsmål at kopiere svar fra",
    gotoName: "Spørgsmål at springe til",
    ruleIsNotSet: "Reglen er forkert",
    includeIntoResult: "Medtag i undersøgelsesresultater",
    showTitle: "Vis/skjul titel",
    expandCollapseTitle: "Udvid/skjul titel",
    locale: "Standardsprog",
    simulator: "Vælg enhedstype",
    landscapeOrientation: "Skift til liggende retning",
    portraitOrientation: "Skift til stående format",
    mode: "Mode (rediger/skrivebeskyttet)",
    clearInvisibleValues: "Fjern usynlige værdier",
    cookieName: "Cookienavn (for at undgå at afvikle undersøgelsen to gange lokalt)",
    sendResultOnPageNext: "Send undersøgelsesresultatet ved næste side",
    storeOthersAsComment: "Gem 'others' værdien i et seperat felt",
    showPageTitles: "Vis sidetitler",
    showPageNumbers: "Vis sidenumre",
    pagePrevText: "Forrige side knaptekst",
    pageNextText: "Næste side knaptekst",
    completeText: "Færdig knaptekst",
    previewText: "Tekst til knappen Vis svar",
    editText: "Tekst til knappen Rediger svar",
    startSurveyText: "Start knaptekst",
    showNavigationButtons: "Vis navigationsknapper (standard navigation)",
    showPrevButton: "Vis forrige knap (brugeren må gå tilbage til forrige side)",
    firstPageIsStarted: "Den første side in undersøgelsen er starten på undersøgelsen.",
    showCompletedPage: "Vis afslutningssiden til slut (completedHtml)",
    goNextPageAutomatic: "Gå til næste side automatisk når alle spørgsmål er besvaret",
    showProgressBar: "Vis fremdriftslinje",
    questionTitleLocation: "Spørgsmålstitel placering",
    requiredText: "Påkrævet spørgsmålssymbol(er)",
    questionStartIndex: "Spørgsmål startindex (1, 2 eller 'A', 'a')",
    showQuestionNumbers: "Vis spørgsmålsnumre",
    questionTitleTemplate: "Spørgsmålstitel template, standard er: '{no}. {require} {title}'",
    questionErrorLocation: "Spørgsmålsfejl placering",
    focusFirstQuestionAutomatic: "Fokusér første spørgsmål ved sideskift",
    questionsOrder: "Rækkefølge af spørgsmål på siden",
    maxTimeToFinish: "Maximal tid til at gennemføre undersøgelsen",
    maxTimeToFinishPage: "Maximal tid til at gennemføre en side i undersøgelsen",
    image: {
      imageHeight: "Billedhøjde (i CSS-accepterede værdier)",
      imageWidth: "Billedbredde (i CSS-accepterede værdier)"
    },
    // survey templates
    survey: {
      title: "Titel"
    },
    page: {
      title: "Titel",
      maxTimeToFinish: "Tidsgrænse for at afslutte siden (i sekunder)"
    },
    question: {
      page: "Overordnet side"
    },
    showTimerPanel: "Vis tidspanel",
    showTimerPanelMode: "Vis tidspanel tilstand",
    renderMode: "Renderingstilstand",
    allowAddPanel: "Tillad at tilføje et panel",
    allowRemovePanel: "Tillad at fjerne et panel",
    noEntriesText: "Tekst til tomme poster",
    panelAddText: "Tilføj panel tekst",
    panelRemoveText: "Fjern panel tekst",
    isSinglePage: "Vis alle elementer på én side",
    html: "HTML-markering",
    expression: "Udtryk",
    setValue: "Svare",
    dataFormat: "Billedformat",
    allowAddRows: "Tillad tilføjelse af rækker",
    allowRemoveRows: "Tillad fjernelse af rækker",
    allowRowsDragAndDrop: "Tillad træk og slip af rækker",
    responsiveImageSizeHelp: "Gælder ikke, hvis du angiver den nøjagtige billedbredde eller -højde.",
    minImageWidth: "Mindste billedbredde",
    maxImageWidth: "Maksimal billedbredde",
    minImageHeight: "Mindste billedhøjde",
    maxImageHeight: "Maksimal billedhøjde",
    minValue: "Mindste værdi",
    maxValue: "Maksimal værdi",
    minLength: "Mindste længde (med bogstaver)",
    allowDigits: "Tillad cifre",
    minCount: "Mindste antal",
    maxCount: "Maksimalt antal",
    regex: "Regulært udtryk",
    surveyvalidator: {
      text: "Fejlmeddelelse",
      expression: "Valideringsudtryk"
    },
    totalText: "Tekst i samlet række",
    totalType: "Samlet type",
    totalExpression: "Samlet udtryk",
    totalDisplayStyle: "Visningstypografi for samlet værdi",
    totalCurrency: "Valuta",
    totalFormat: "Formateret streng",
    logo: "Logo (URL eller base64-kodet streng)",
    questionsOnPageMode: "Undersøgelsens opbygning",
    maxTextLength: "Maksimal svarlængde (med tegn)",
    maxOthersLength: "Maksimal kommentarlængde (i tegn)",
    autoGrowComment: "Udvid automatisk kommentarområdet, hvis det er nødvendigt",
    allowResizeComment: "Tillad brugere at ændre størrelsen på tekstområder",
    textUpdateMode: "Opdater værdi for tekstspørgsmål",
    focusOnFirstError: "Sæt fokus på det første ugyldige svar",
    checkErrorsMode: "Kør validering",
    navigateToUrl: "Naviger til URL",
    navigateToUrlOnCondition: "Dynamisk webadresse",
    completedBeforeHtml: "Markering for at vise, om brugeren allerede har udfyldt denne undersøgelse",
    completedHtml: "Opmærkning af siden Undersøgelse fuldført",
    completedHtmlOnCondition: "Dynamisk undersøgelse fuldført sidemarkering",
    loadingHtml: "Markering, der skal vises, mens undersøgelsesmodellen indlæses",
    commentText: "Tekst i kommentarområdet",
    autocomplete: "Type Autofuldførelse",
    labelTrue: "\"True\" etiket",
    labelFalse: "Etiketten \"Falsk\"",
    allowClear: "Vis knappen Ryd",
    displayStyle: "Værdi visningsstil",
    format: "Formateret streng",
    maximumFractionDigits: "Maksimalt antal brøkdele",
    minimumFractionDigits: "Mindste brøkdele",
    useGrouping: "Vis grupperingsseparatorer",
    allowMultiple: "Tillad flere filer",
    allowImagesPreview: "Se eksempler på billeder",
    acceptedTypes: "Accepterede filtyper",
    waitForUpload: "Vent på, at overførslen er fuldført",
    needConfirmRemoveFile: "Bekræft sletning af fil",
    detailPanelMode: "Placering af panelet Detaljer",
    minRowCount: "Mindste antal rækker",
    maxRowCount: "Maksimalt antal rækker",
    confirmDelete: "Bekræft sletning af række",
    confirmDeleteText: "Bekræftelsesmeddelelse",
    paneldynamic: {
      confirmDelete: "Bekræft sletning af panel"
    },
    panelCount: "Indledende antal paneler",
    minPanelCount: "Mindste antal paneler",
    maxPanelCount: "Maksimalt antal paneler",
    panelsState: "Udvid tilstand for indvendigt panel",
    templateDescription: "Beskrivelse skabelon",
    templateTitle: "Titel skabelon",
    panelPrevText: "Forrige værktøjstip til panelknap",
    panelNextText: "Værktøjstip til knappen Næste panel",
    showRangeInProgress: "Vis statuslinje",
    templateTitleLocation: "Placering af spørgsmålets titel",
    panelRemoveButtonLocation: "Fjern placering af panelknap",
    hideIfRowsEmpty: "Skjul spørgsmålet, hvis der ikke er nogen rækker",
    hideColumnsIfEmpty: "Skjule kolonner, hvis der ikke er nogen rækker",
    rateValues: "Tilpassede satsværdier",
    rateCount: "Antal satser",
    autoGenerate: "Hvordan angives satsværdier?",
    hideIfChoicesEmpty: "Skjul spørgsmålet, hvis det ikke indeholder nogen valgmuligheder",
    hideNumber: "Skjul spørgsmålsnummer",
    minWidth: "Minimumbredde (i CSS-accepterede værdier)",
    maxWidth: "Maksimal bredde (i CSS-accepterede værdier)",
    width: "Bredde (i CSS-accepterede værdier)",
    showHeader: "Vis kolonneoverskrifter",
    horizontalScroll: "Vis vandret rullepanel",
    columnMinWidth: "Mindste kolonnebredde (i CSS-accepterede værdier)",
    rowTitleWidth: "Bredde på rækkeoverskrift (i CSS-accepterede værdier)",
    valueTrue: "\"Sand\" værdi",
    valueFalse: "\"Falsk\" værdi",
    minErrorText: "Fejlmeddelelsen \"Værdien er under minimum\"",
    maxErrorText: "Fejlmeddelelsen \"Værdien overstiger maksimum\"",
    otherErrorText: "Fejlmeddelelsen \"Tom kommentar\"",
    keyDuplicationError: "Fejlmeddelelsen \"Ikke-entydig nøgleværdi\"",
    minSelectedChoices: "Minimum valgte valg",
    maxSelectedChoices: "Maksimalt antal valgte valg",
    showClearButton: "Vis knappen Ryd",
    showNumber: "Vis panelnummer",
    logoWidth: "Logobredde (i CSS-accepterede værdier)",
    logoHeight: "Logohøjde (i CSS-accepterede værdier)",
    readOnly: "Skrivebeskyttet",
    enableIf: "Redigerbar, hvis",
    emptyRowsText: "Meddelelsen \"Ingen rækker\"",
    size: "Inputfeltstørrelse (i tegn)",
    separateSpecialChoices: "Adskil særlige valg (Ingen, Andet, Vælg alle)",
    choicesFromQuestion: "Kopiér valg fra følgende spørgsmål",
    choicesFromQuestionMode: "Hvilke valgmuligheder skal kopieres?",
    showCommentArea: "Vis kommentarområdet",
    commentPlaceholder: "Pladsholder til kommentarområde",
    displayRateDescriptionsAsExtremeItems: "Beskrivelser af visningshastighed som ekstreme værdier",
    rowsOrder: "Rækkefølge af rækker",
    columnsLayout: "Kolonnelayout",
    columnColCount: "Antal indlejrede kolonner",
    state: "Panel udvide tilstand",
    correctAnswer: "Korrekt svar",
    defaultPanelValue: "Standardværdier",
    cells: "Celle tekster",
    keyName: "Nøglekolonne",
    itemvalue: {
      text: "Alternativ tekst"
    },
    logoPosition: "Logo position",
    addLogo: "Tilføj logo...",
    changeLogo: "Skift logo...",
    logoPositions: {
      none: "Fjern logo",
      left: "Venstre",
      right: "Højre",
      top: "På toppen",
      bottom: "I bunden"
    },
    tabs: {
      general: "Generelt",
      fileOptions: "Indstillinger",
      html: "Html-editor",
      columns: "Kolonner",
      rows: "Rækker",
      choices: "Valgmuligheder",
      items: "Elementer",
      visibleIf: "Synlig hvis",
      enableIf: "Aktiv hvis",
      requiredIf: "Påkrævet, hvis",
      rateValues: "Bedøm-værdier",
      choicesByUrl: "Valgmuligheder fra Web",
      matrixChoices: "Standard valgmuligheder",
      multipleTextItems: "Tekst inputmuligheder",
      numbering: "Nummerering",
      validators: "Valideringer",
      navigation: "Navigation",
      question: "Spørgsmål",
      pages: "Sider",
      timer: "Tid/Quiz",
      calculatedValues: "Beregnede værdier",
      triggers: "Triggere",
      templateTitle: "Skabelon titel",
      totals: "Totaler",
      logic: "Logik",
      layout: "Layout",
      data: "Data",
      validation: "Validering",
      cells: "Celle tekster",
      showOnCompleted: "Undersøgelsen er fuldført",
      logo: "Logo i undersøgelsens titel",
      slider: "Skyderen",
      expression: "Udtryk",
      others: "Andre"
    },
    editProperty: "Rediger egenskab '{0}'",
    items: "[ Element: {0} ]",
    choicesVisibleIf: "Valg er synlige, hvis",
    choicesEnableIf: "Valg kan vælges, hvis:",
    columnsEnableIf: "Kolonner er synlige, hvis",
    rowsEnableIf: "Rækker er synlige, hvis",
    indent: "Tilføj indrykninger",
    panel: {
      indent: "Tilføj ydre indrykninger"
    },
    innerIndent: "Tilføj indre indrykninger",
    defaultValueFromLastRow: "Tag standardværdier fra den sidste række",
    defaultValueFromLastPanel: "Tag standardværdier fra det sidste panel",
    enterNewValue: "Indtast værdien.",
    noquestions: "Der er ingen spørgsmål i undersøgelsen.",
    createtrigger: "Opret en trigger",
    titleKeyboardAdornerTip: "Tryk på enter-knappen for at redigere",
    keyboardAdornerTip: "Tryk på enter-knappen for at redigere elementet, tryk på slet-knappen for at slette elementet, tryk på alt plus pil op eller pil ned for at flytte elementet",
    triggerOn: "På ",
    triggerMakePagesVisible: "Gør sider synlige:",
    triggerMakeQuestionsVisible: "Gør spørgsmål synlige:",
    triggerCompleteText: "Aflslut spørgeskema ved at fortsætte.",
    triggerNotSet: "Triggerer er ikke sat",
    triggerRunIf: "Afvikl hvis",
    triggerSetToName: "Ændr værdien af: ",
    triggerFromName: "Kopier værdi fra: ",
    triggerRunExpression: "Afvikl dette udtryk:",
    triggerSetValue: "til: ",
    triggerGotoName: "Gå til spørgsmålet",
    triggerIsVariable: "Gem ikke variablen i undersøgelsesresultatet.",
    triggerRunExpressionEmpty: "Indtast et gyldigt udtryk",
    emptyExpressionPlaceHolder: "Skriv udtryk her...",
    noFile: "Ingen fil valgt",
    clearIfInvisible: "Ryd værdien, hvis spørgsmålet bliver skjult",
    valuePropertyName: "Egenskabsnavn for værdi",
    searchEnabled: "Aktivér søgning",
    hideSelectedItems: "Skjule markerede elementer",
    closeOnSelect: "Luk rullemenuen efter markering",
    signatureWidth: "Signaturens bredde",
    signatureHeight: "Signatur højde",
    verticalAlign: "Lodret justering",
    alternateRows: "Alternative rækker",
    columnsVisibleIf: "Kolonner er synlige, hvis",
    rowsVisibleIf: "Rækker er synlige, hvis",
    otherPlaceholder: "Pladsholder til kommentarområde",
    signaturepad: {
      showPlaceholder: "Vis pladsholderen",
      placeholder: "Pladsholdertekst",
      signatureWidth: "Bredde på signaturområde",
      signatureHeight: "Højde på signaturområde",
      signatureAutoScaleEnabled: "Skaler signaturområdet automatisk",
      penMinWidth: "Mindste bredde på pennen",
      penMaxWidth: "Maksimal bredde på pennen"
    },
    filePlaceholder: "Filpladsholdertekst",
    photoPlaceholder: "Eksempeltekst til billeder",
    fileOrPhotoPlaceholder: "Arkiv- eller fotopladsholdertekst",
    rateType: "Sats type"
  },
  // Property values
  pv: {
    "true": "sand",
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
    decimal: "decimal",
    currency: "valuta",
    percent: "procent",
    firstExpanded: "firstExpanded",
    off: "off",
    onpanel: "Start på hvert panel",
    onPanel: "onPanel",
    onSurvey: "onSurvey",
    list: "list",
    progressTop: "progressTop",
    progressBottom: "progressBottom",
    progressTopBottom: "progressTopBottom",
    tab: "Faner",
    horizontal: "horizontal",
    vertical: "vertical",
    top: "top",
    bottom: "bottom",
    topBottom: "top and bottom",
    both: "Begge",
    left: "left",
    right: "Højre",
    leftRight: "Venstre og højre",
    color: "farve",
    date: "dato",
    datetime: "datetime",
    "datetime-local": "datetime-lokal",
    email: "E-mail",
    month: "måned",
    number: "tal",
    password: "kodeord",
    range: "interval",
    tel: "Tel",
    text: "Tekst",
    time: "Tidspunkt",
    url: "URL-adresse",
    week: "uge",
    hidden: "hidden",
    on: "on",
    onPage: "onPage",
    edit: "edit",
    display: "display",
    onComplete: "onComplete",
    onHidden: "onHidden",
    onHiddenContainer: "Når spørgsmålet eller dets panel/side bliver skjult",
    contain: "Indeholde",
    cover: "Dække",
    fill: "Fylde",
    clearInvisibleValues: {
      none: "Aldrig"
    },
    inputType: {
      color: "Farve",
      date: "Dato",
      "datetime-local": "Dato og klokkeslæt",
      email: "E-mail",
      month: "Måned",
      number: "Tal",
      password: "Kodeord",
      range: "Interval",
      tel: "Telefonnummer",
      text: "Tekst",
      time: "Tidspunkt",
      url: "URL-adresse",
      week: "Uge"
    },
    all: "all",
    page: "page",
    survey: "survey",
    onNextPage: "onNextPage",
    onValueChanged: "onValueChanged",
    onValueChanging: "Før et svar ændres",
    standard: "Oprindelig struktur",
    singlePage: "Alle spørgsmål på en enkelt side",
    questionPerPage: "Hvert spørgsmål på en individuel side",
    noPreview: "Ingen forhåndsvisning",
    showAllQuestions: "Vis alle spørgsmål",
    showAnsweredQuestions: "Vis kun besvarede spørgsmål",
    pages: "Afsluttede sider",
    questions: "Besvarede spørgsmål",
    requiredQuestions: "Besvarede nødvendige spørgsmål",
    correctQuestions: "Gyldige svar",
    buttons: "Afsluttede sider (knapbrugergrænseflade)",
    underInput: "Under indgangen",
    underTitle: "Under titlen",
    onBlur: "På sløring",
    onTyping: "Mens du skriver",
    underRow: "Under rækken",
    underRowSingle: "Under rækken er kun ét panel synligt",
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
      default: "Afhænger af matrixlayout"
    },
    panelsState: {
      default: "Brugere kan ikke udvide eller skjule paneler",
      collapsed: "Alle paneler er skjult",
      expanded: "Alle paneler er udvidet"
    },
    widthMode: {
      auto: "Auto",
      static: "Statisk",
      responsive: "Lydhør"
    },
    imageFit: {
      none: "Ingen",
      contain: "Indeholde",
      cover: "Dække",
      fill: "Fylde"
    },
    contentMode: {
      auto: "Auto",
      image: "Billede",
      video: "Video",
      youtube: "YouTube"
    },
    displayMode: {
      auto: "Auto",
      buttons: "Knapper",
      dropdown: "Rullemenu"
    },
    rateColorMode: {
      default: "Standard"
    },
    autoGenerate: {
      "true": "Frembringe",
      "false": "Indtast manuelt"
    },
    rateType: {
      labels: "Etiketter",
      stars: "Stjerner",
      smileys: "Smileys"
    }
  },
  // Operators
  op: {
    empty: "is empty",
    notempty: "is not empty",
    equal: "equals",
    notequal: "not equals",
    contains: "contains",
    notcontains: "not contains",
    anyof: "Enhver af",
    allof: "Alle af",
    greater: "greater",
    less: "less",
    greaterorequal: "greater or equals",
    lessorequal: "less or equals",
    and: "og",
    or: "eller"
  },
  // Embed window
  ew: {
    angular: "Benyt Angular version",
    jquery: "Benyt jQuery version",
    knockout: "Benyt Knockout version",
    react: "Benyt React version",
    vue: "Benyt Vue version",
    bootstrap: "For bootstrap framework",
    modern: "Moderne tema",
    default: "Standardtema",
    orange: "Orange tema",
    darkblue: "Mørkeblåt tema",
    darkrose: "Temaet Darkrose",
    stone: "Temaet Sten",
    winter: "Vinter tema",
    winterstone: "Temaet Vintersten",
    showOnPage: "Vis undersøgelsen på en side",
    showInWindow: "Vis undersøgelsen i et vindue",
    loadFromServer: "Hent undersøgelsen som JSON fra serveren",
    titleScript: "Scripts og styles",
    titleHtml: "HTML",
    titleJavaScript: "JavaScript"
  },
  // Preview (Survey)
  ts: {
    selectPage: "Vælg siden for at teste den:",
    showInvisibleElements: "Vis usynlige elementer",
    hideInvisibleElements: "Skjul usynlige elementer"
  },
  validators: {
    answercountvalidator: "answer count",
    emailvalidator: "e-mail",
    expressionvalidator: "expression",
    numericvalidator: "numeric",
    regexvalidator: "regex",
    textvalidator: "text"
  },
  triggers: {
    completetrigger: "undersøgelse gennemført",
    setvaluetrigger: "sæt værdi",
    copyvaluetrigger: "kopiér værdi",
    skiptrigger: "Spring til spørgsmål",
    runexpressiontrigger: "afvikl udtry",
    visibletrigger: "skift synlighed"
  },
  pehelp: {
    cookieName: "Cookies forhindrer brugere i at udfylde den samme undersøgelse to gange.",
    size: "Ændrer størrelsen på det synlige område af inputfeltet. Brug indstillingen <b>Validering → Maksimal længde</b> for at begrænse inputlængden.",
    format: "Brug {0} som pladsholder for den faktiske værdi.",
    totalText: "Kun synlig, når mindst én kolonne har typen Total eller Totaludtryk.",
    acceptedTypes: "Se beskrivelsen af attributten [accept](https://www.w3schools.com/tags/att_input_accept.asp) for at få flere oplysninger.",
    columnColCount: "Gælder kun for celletyperne Radiogruppe og afkrydsningsfelt.",
    autocomplete: "Se beskrivelsen af attributten [autofuldførelse](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete) for at få flere oplysninger.",
    valueName: "Hvis du ikke angiver denne egenskab, gemmes svaret i et felt, der er angivet af egenskaben Navn.",
    choicesbyurl: {
      valueName: " "
    },
    keyName: "Hvis den angivne kolonne indeholder identiske værdier, kaster undersøgelsen fejlen \"Ikke-unik nøgleværdi\".",
    filePlaceholder: "Gælder, når \"Kildetype\" er \"Lokale filer\", eller når kameraet ikke er tilgængeligt",
    photoPlaceholder: "Gælder, når \"Kildetype\" er \"Kamera\".",
    fileOrPhotoPlaceholder: "Gælder, når \"Kildetype\" er \"Lokale filer eller kamera\"."
  },
  // Properties
  p: {
    title: {
      name: "titel",
      title: "Lad den være tom hvis det er det samme som 'Navn'"
    },
    multiSelect: "Tillad flere valg",
    showLabel: "Vis billedtekster",
    value: "Værdi",
    tabAlign: "Tabulatorjustering",
    sourceType: "Kilde type",
    fitToContainer: "Passer til beholder",
    setValueExpression: "Angiv værdiudtryk",
    description: "description",
    logoFit: "Logo pasform",
    pages: "Sider",
    questions: "Spørgsmål",
    triggers: "triggers",
    calculatedValues: "Beregnede værdier",
    surveyId: "Undersøgelses-id",
    surveyPostId: "Id for undersøgelsespost",
    surveyShowDataSaving: "Undersøgelse viser lagring af data",
    questionDescriptionLocation: "Placering af spørgsmålsbeskrivelse",
    progressBarType: "Type af statuslinje",
    showTOC: "Vis indholdsfortegnelse",
    tocLocation: "Toc placering",
    questionTitlePattern: "Mønster for spørgsmålets titel",
    widthMode: "Bredde-tilstand",
    showBrandInfo: "Vis brandoplysninger",
    useDisplayValuesInDynamicTexts: "Brug visningsværdier i dynamiske tekster",
    visibleIf: "visibleIf",
    titleLocation: "titleLocation",
    descriptionLocation: "Beskrivelse placering",
    defaultValueExpression: "Standardværdiudtryk",
    requiredIf: "Påkrævet, hvis",
    resetValueIf: "Nulstil værdi, hvis",
    setValueIf: "Angiv værdi, hvis",
    validators: "validators",
    bindings: "Bindings",
    renderAs: "Gengiv som",
    attachOriginalItems: "Vedhæft originale elementer",
    choices: "choices",
    choicesByUrl: "choicesByUrl",
    currency: "currency",
    cellHint: "Celle tip",
    isUnique: "Er unik",
    showInMultipleColumns: "Vis i flere kolonner",
    totalMaximumFractionDigits: "Maksimale brøkdele i alt",
    totalMinimumFractionDigits: "Mindste brøkdele i alt",
    columns: "columns",
    detailElements: "Detaljeelementer",
    allowAdaptiveActions: "Tillad adaptive handlinger",
    defaultRowValue: "defaultRowValue",
    detailPanelShowOnAdding: "Panelet Detaljer vises ved tilføjelse",
    choicesLazyLoadEnabled: "Valg doven belastning aktiveret",
    choicesLazyLoadPageSize: "Valg doven indlæsningssidestørrelse",
    inputFieldComponent: "Inputfeltkomponent",
    itemComponent: "Element komponent",
    min: "Min.",
    max: "Maks",
    minValueExpression: "Min værdi udtryk",
    maxValueExpression: "Maks. værdiudtryk",
    step: "Skridt",
    dataList: "Dataliste",
    itemSize: "itemSize",
    elements: "Elementer",
    content: "Indhold",
    navigationButtonsVisibility: "navigationButtonsVisibility",
    navigationTitle: "Navigation titel",
    navigationDescription: "Beskrivelse af navigation",
    longTap: "Langt tryk",
    autoGrow: "Automatisk vækst",
    allowResize: "Tillad ændring af størrelse",
    acceptCarriageReturn: "Accepter retur af transport",
    displayMode: "Visningstilstand",
    rateType: "Sats type",
    label: "label",
    contentMode: "Indholdstilstand",
    imageFit: "Billede passer",
    altText: "Alternativ tekst",
    height: "Højde",
    penColor: "Pen farve",
    backgroundColor: "Baggrundsfarve",
    templateElements: "Skabelon elementer",
    operator: "Operatør",
    isVariable: "Er variabel",
    runExpression: "Kør udtryk",
    showCaption: "Vis billedtekst",
    iconName: "Ikon navn",
    iconSize: "Ikon størrelse",
    precision: "Præcision",
    matrixDragHandleArea: "Området for matrix-trækhåndtaget",
    backgroundImage: "Baggrundsbillede",
    backgroundImageFit: "Tilpasning af baggrundsbillede",
    backgroundImageAttachment: "Vedhæftet fil til baggrundsbillede",
    backgroundOpacity: "Opacitet i baggrunden",
    selectToRankEnabled: "Vælg at rangere aktiveret",
    selectToRankAreasLayout: "Vælg for at rangere områdelayout",
    allowCameraAccess: "Tillad kameraadgang",
    scaleColorMode: "Skaler farvetilstand",
    rateColorMode: "Bedøm farvetilstand",
    templateTabTitle: "Titel på fanen Skabelon",
    templateVisibleIf: "Skabelon synlig, hvis",
    copyDisplayValue: "Kopiér visningsværdi"
  },
  theme: {
    "--background": "Baggrundsfarve",
    "--background-dim-light": "Baggrund svag lys farve",
    "--primary-foreground": "Primær forgrundsfarve",
    "--foreground": "Forgrundsfarve",
    "--base-unit": "Basisenhed",
    advancedMode: "Avanceret tilstand",
    groupGeneral: "Generel",
    groupHeader: "Header",
    groupBackground: "Baggrund",
    groupAppearance: "Udseende",
    themeName: "Tema",
    themeMode: "Spørgsmål udseende",
    themeModePanels: "Standard",
    themeModeLightweight: "Uden paneler",
    themePaletteLight: "Lys",
    themePaletteDark: "Mørk",
    primaryColor: "Accent farve",
    primaryDefaultColor: "Standard",
    primaryDarkColor: "Hover",
    primaryLightColor: "Valgte",
    coverTitleForecolor: "Titel forfarve",
    coverDescriptionForecolor: "Beskrivelse forfarve",
    coverOverlapEnabled: "Overlapning",
    backgroundDimColor: "Baggrundsfarve",
    backgroundImage: "Baggrundsbillede",
    backgroundImageFitAuto: "Auto",
    backgroundImageFitCover: "Dække",
    backgroundImageFitContain: "Indeholde",
    backgroundImageFitFill: "Stræk",
    backgroundImageFitTile: "Flise",
    backgroundOpacity: "Opacitet",
    backgroundImageAttachmentFixed: "Fast",
    backgroundImageAttachmentScroll: "Rulle",
    panelBackgroundTransparency: "Opacitet af panelets baggrund",
    questionBackgroundTransparency: "Spørgsmål baggrundsuigennemsigtighed",
    questionTitle: "Skrifttype for spørgsmålstitel",
    editorPanel: "Input element",
    backgroundCornerRadius: "Baggrund og hjørneradius",
    backcolor: "Standard baggrund",
    hovercolor: "Hold markøren over baggrunden",
    borderDecoration: "Kant dekoration",
    accentBackground: "Accent baggrund",
    accentForeground: "Accent forgrund",
    primaryForecolor: "Standardfarve",
    primaryForecolorLight: "Deaktiveret farve",
    colorsTitle: "Farver",
    font: "Skrifttype",
    lines: "Linjer",
    borderDefault: "Mørkere",
    borderLight: "Lighter",
    fontFamily: "Skrifttypefamilie",
    fontSize: "Skrifttypestørrelse",
    color: "Farve",
    placeholderColor: "Pladsholderfarve",
    size: "Størrelse",
    fontWeightRegular: "Regelmæssig",
    fontWeightHeavy: "Tung",
    fontWeightSemiBold: "Halvfed skrift",
    fontWeightBold: "Modig",
    scale: "Skæl",
    cornerRadius: "Hjørne radius",
    surveyTitle: "Skrifttype for undersøgelsestitel",
    surveyDescription: "Skrifttype til undersøgelsesbeskrivelse",
    pageTitle: "Sidetitel skrifttype",
    titleFont: "Titel skrifttype",
    descriptionFont: "Beskrivelse skrifttype",
    boxShadowX: "X",
    boxShadowY: "Y",
    boxShadowAddRule: "Tilføj skyggeeffekt",
    opacity: "Opacitet",
    boxShadowBlur: "Sløring",
    boxShadowSpread: "Spredning",
    boxShadowDrop: "Dråbe",
    boxShadowInner: "Indre",
    shadow: "Skyggeeffekter",
    headerView: "Udsigt",
    headerViewBasic: "Grundlæggende",
    headerViewAdvanced: "Avanceret",
    coverInheritWidthFrom: "Bredde på indholdsområde",
    coverInheritWidthFromSurvey: "Samme som undersøgelse",
    coverInheritWidthFromContainer: "Passer til beholder",
    coverTextAreaWidth: "Tekstbredde",
    coverBackgroundColorSwitch: "Baggrundsfarve",
    coverBackgroundColorNone: "Ingen",
    coverBackgroundColorAccentColor: "Accent farve",
    coverBackgroundColorCustom: "Sædvane",
    horizontalAlignmentLeft: "Venstre",
    horizontalAlignmentCenter: "Midte",
    horizontalAlignmentRight: "Højre",
    verticalAlignmentTop: "Top",
    verticalAlignmentMiddle: "Midte",
    verticalAlignmentBottom: "Bund",
    logoPosition: "Logo position",
    coverTitlePosition: "Titel position",
    coverDescriptionPosition: "Beskrivelse position",
    names: {
      default: "Standard",
      sharp: "Skarp",
      borderless: "Kant",
      flat: "Flad",
      plain: "Slette",
      doubleborder: "Dobbelt kant",
      layered: "Lagdelte",
      solid: "Fast",
      threedimensional: ".3D",
      contrast: "Kontrast"
    },
    colors: {
      teal: "Krikand",
      blue: "Blå",
      purple: "Lilla",
      orchid: "Orkide",
      tulip: "Tulipan",
      brown: "Brun",
      green: "Grøn"
    }
  }
};

editorLocalization.locales["da"] = danishStrings;

// The following strings have been translated by a machine translation service
// Remove those strings that you have corrected manually
// survey.externalHelpLink: "Watch and learn how to create surveys" => "Se og lær, hvordan du opretter undersøgelser"
// survey.externalHelpLinkUrl: "https://www.youtube.com/channel/UCH2ru9okIcooNZfpIbyq4qQ?view_as=subscriber" => "https://www.youtube.com/channel/UCH2ru9okIcooNZfpIbyq4qQ?view_as=subscriber"
// survey.addLogicItem: "Create a rule to customize the flow of the survey." => "Opret en regel for at tilpasse undersøgelsens flow."
// survey.duplicate: "Duplicate" => "Multiplicere"
// qt.ranking: "Ranking" => "Rangering"
// qt.image: "Image" => "Billede"
// qt.tagbox: "Multi-Select Dropdown" => "Rullemenu med flere valg"
// qt.signaturepad: "Signature" => "Underskrift"
// qt.buttongroup: "Button Group" => "Knap gruppe"
// ed.settingsTooltip: "Open settings" => "Åbn indstillinger"
// ed.surveySettings: "Survey Settings" => "Indstillinger for undersøgelse"
// ed.surveySettingsTooltip: "Open survey settings" => "Åbn undersøgelsesindstillinger"
// ed.showPanel: "Show Panel" => "Vis panel"
// ed.hidePanel: "Hide Panel" => "Skjul panel"
// ed.prevSelected: "Select previous" => "Vælg forrige"
// ed.nextSelected: "Select next" => "Vælg næste"
// ed.surveyTypeName: "Survey" => "Spørgeundersøgelse"
// ed.pageTypeName: "Page" => "Side"
// ed.panelTypeName: "Panel" => "Panelet"
// ed.questionTypeName: "Question" => "Spørgsmål"
// ed.columnTypeName: "Column" => "Kolonne"
// ed.newTextItemName: "text" => "Tekst"
// ed.themeSurvey: "Themes" => "Temaer"
// ed.defaultV2Theme: "Default" => "Standard"
// ed.modernTheme: "Modern" => "Moderne"
// ed.defaultTheme: "Default (legacy)" => "Standard (ældre)"
// ed.navigateToMsg: "You had to navigate to" => "Du var nødt til at navigere til"
// ed.logic: "Logic" => "Logik"
// ed.saveSurveyTooltip: "Save Survey" => "Gem undersøgelse"
// ed.jsonHideErrors: "Hide errors" => "Skjul fejl"
// ed.jsonShowErrors: "Show errors" => "Vis fejl"
// ed.undoTooltip: "Undo last change" => "Fortryd seneste ændring"
// ed.redoTooltip: "Redo the change" => "Fortryd ændringen"
// ed.showMoreChoices: "Show more" => "Vis mere"
// ed.showLessChoices: "Show less" => "Vis mindre"
// ed.copy: "Copy" => "Eksemplar"
// ed.cut: "Cut" => "Skære"
// ed.paste: "Paste" => "Indsætte"
// ed.copyTooltip: "Copy selection to clipboard" => "Kopiere markering til Udklipsholder"
// ed.cutTooltip: "Cut selection to clipboard" => "Klip markering til udklipsholder"
// ed.pasteTooltip: "Paste from clipboard" => "Indsæt fra udklipsholder"
// ed.property-grid: "Properties" => "Egenskaber"
// ed.propertyGridFilteredTextPlaceholder: "Type to search..." => "Skriv for at søge..."
// ed.toolboxChoiceCategory: "Choice Questions" => "Spørgsmål om valg"
// ed.toolboxTextCategory: "Text Input Questions" => "Spørgsmål om tekstinput"
// ed.toolboxContainersCategory: "Containers" => "Containere"
// ed.toolboxMatrixCategory: "Matrix Questions" => "Matrix spørgsmål"
// ed.toolboxMiscCategory: "Misc" => "Misc"
// ed.surveyResultsTable: "As Table" => "Som tabel"
// ed.surveyResultsJson: "As JSON" => "Som JSON"
// ed.resultsTitle: "Question Title" => "Spørgsmålets titel"
// ed.resultsName: "Question Name" => "Spørgsmålets navn"
// ed.resultsValue: "Answer Value" => "Svarværdi"
// ed.resultsDisplayValue: "Display Value" => "Visningsværdi"
// ed.propertyEditorError: "Error" => "Fejl"
// ed.translationPropertyGridTitle: "Language Settings" => "Sprogindstillinger"
// ed.themePropertyGridTitle: "Theme Settings" => "Temaindstillinger"
// ed.translationLanguages: "Languages" => "Sprog"
// ed.translationShowUsedStringsOnly: "Used Strings Only" => "Kun brugte strenge"
// ed.translationPlaceHolder: "Translation..." => "Oversættelse..."
// ed.themeExportButton: "Export" => "Eksport"
// ed.themeImportButton: "Import" => "Import"
// ed.bold: "Bold" => "Modig"
// ed.italic: "Italic" => "Kursiv"
// ed.underline: "Underline" => "Understrege"
// ed.addNewQuestion: "Add Question" => "Tilføj spørgsmål"
// ed.selectPage: "Select page..." => "Vælg side..."
// ed.carryForwardChoicesCopied: "Choices are copied from" => "Valg kopieres fra"
// ed.htmlPlaceHolder: "HTML content will be here." => "HTML-indhold vil være her."
// ed.panelPlaceHolder: "Drop a question from the toolbox here." => "Smid et spørgsmål fra værktøjskassen her."
// ed.surveyPlaceHolder: "The survey is empty. Drag an element from the toolbox or click the button below." => "Undersøgelsen er tom. Træk et element fra værktøjskassen, eller klik på knappen nedenfor."
// ed.imagePlaceHolder: "Drag and drop an image here or click the button below and choose an image to upload" => "Træk og slip et billede her, eller klik på knappen nedenfor, og vælg et billede, der skal uploades"
// ed.imageChooseImage: "Choose Image" => "Vælg billede"
// ed.addNewTypeQuestion: "Add {0}" => "Tilføj {0}"
// ed.chooseLogoPlaceholder: "[LOGO]" => "[LOGO]"
// ed.auto: "auto" => "auto"
// ed.choices_Item: "Item " => "Vare "
// lg.addNewItem: "Add New Rule" => "Tilføj ny regel"
// lg.empty_tab: "Create a rule to customize the flow of the survey." => "Opret en regel for at tilpasse undersøgelsens flow."
// lg.page_visibilityName: "Show (hide) page" => "Vis (skjul) side"
// lg.page_enableName: "Enable (disable) page" => "Aktivér (deaktiver) side"
// lg.panel_visibilityName: "Show (hide) panel" => "Panelet Vis (skjul)"
// lg.panel_enableName: "Enable (disable) panel" => "Aktivér (deaktiver) panel"
// lg.question_visibilityName: "Show (hide) question" => "Vis (skjul) spørgsmål"
// lg.question_enableName: "Enable (disable) question" => "Aktivér (deaktiver) spørgsmål"
// lg.question_requireName: "Make question required" => "Gør spørgsmål påkrævet"
// lg.column_visibilityName: "Show (hide) column" => "Vis (skjul) kolonne"
// lg.column_enableName: "Enable (disable) column" => "Aktivér (deaktiver) kolonne"
// lg.column_requireName: "Make column required" => "Gør kolonne påkrævet"
// lg.trigger_completeName: "Complete survey" => "Komplet undersøgelse"
// lg.trigger_setvalueName: "Set answer" => "Indstil svar"
// lg.trigger_copyvalueName: "Copy answer" => "Kopier svar"
// lg.trigger_skipName: "Skip to question" => "Spring til spørgsmål"
// lg.trigger_runExpressionName: "Run expression" => "Kør udtryk"
// lg.completedHtmlOnConditionName: "Set \"Survey Complete\" page markup" => "Indstil sidemarkering af \"Undersøgelse fuldført\""
// lg.page_visibilityDescription: "Make the page visible when the logic expression returns true. Otherwise keep it invisible." => "Gør siden synlig, når det logiske udtryk returnerer sand. Ellers skal du holde det usynligt."
// lg.panel_visibilityDescription: "Make the panel visible when the logic expression returns true. Otherwise keep it invisible." => "Gør panelet synligt, når det logiske udtryk returnerer sand. Ellers skal du holde det usynligt."
// lg.panel_enableDescription: "Make the panel, and all elements inside it, enable when the logic expression returns true. Otherwise keep them disabled." => "Få panelet og alle elementer i det til at aktivere, når det logiske udtryk returnerer sand. Ellers skal du holde dem deaktiveret."
// lg.question_visibilityDescription: "Make the question visible when the logic expression returns true. Otherwise keep it invisible." => "Gør spørgsmålet synligt, når det logiske udtryk returnerer sand. Ellers skal du holde det usynligt."
// lg.question_enableDescription: "Make the question enable when the logic expression returns true. Otherwise keep it disabled." => "Få spørgsmålet til at aktivere, når det logiske udtryk returnerer sand. Ellers skal du holde det deaktiveret."
// lg.question_requireDescription: "Question becomes required when the logic expression returns true." => "Spørgsmål bliver påkrævet, når det logiske udtryk returnerer sandt."
// lg.trigger_completeDescription: "When the logic expression returns true then the survey becomes completed and an end-user see the 'Thank you page'." => "Når det logiske udtryk returnerer sand, afsluttes undersøgelsen, og en slutbruger ser siden \"Tak\"."
// lg.trigger_setvalueDescription: "When question values, that are used in the logic expression, are changed and the logic expression returns true, then the value is set to the selected question." => "Når spørgsmålsværdier, der bruges i det logiske udtryk, ændres, og det logiske udtryk returnerer sand, angives værdien til det valgte spørgsmål."
// lg.trigger_copyvalueDescription: "When question values, that are used in the logic expression, are changed and the logic expression returns true, then the value of one selected question is copied to another selected question." => "Når spørgsmålsværdier, der bruges i det logiske udtryk, ændres, og det logiske udtryk returnerer sand, kopieres værdien af et markeret spørgsmål til et andet markeret spørgsmål."
// lg.trigger_skipDescription: "When the logic expression returns true then the survey skip to / focus the selected question." => "Når det logiske udtryk returnerer sandt, springer undersøgelsen til / fokuserer det valgte spørgsmål."
// lg.trigger_runExpressionDescription: "When the logic expression returns true, then the custom expression is performed. You may optionally set this expression result into the selected question" => "Når det logiske udtryk returnerer sand, udføres det brugerdefinerede udtryk. Du kan eventuelt angive dette udtryksresultat i det valgte spørgsmål"
// lg.completedHtmlOnConditionDescription: "If the logic expression returns true, then the default text for the 'Thank you page' is changed to the given one." => "Hvis det logiske udtryk returnerer sandt, ændres standardteksten for 'Tak-siden' til den givne."
// lg.itemExpressionText: "When expression: '{0}' returns true" => "Når udtrykket: '{0}' returnerer sandt"
// lg.itemEmptyExpressionText: "New rule" => "Ny regel"
// lg.page_visibilityText: "make page {0} visible" => "Gør siden {0} synlig"
// lg.panel_visibilityText: "make panel {0} visible" => "Gør panelet {0} synligt"
// lg.panel_enableText: "make panel {0} enable" => "Få panelet {0} aktivere"
// lg.question_visibilityText: "make question {0} visible" => "Gør spørgsmål {0} synlige"
// lg.question_enableText: "make question {0} enable" => "Foretag spørgsmål{0} aktiver"
// lg.question_requireText: "make question {0} required" => "Gør spørgsmål {0} påkrævet"
// lg.column_visibilityText: "make column {0} of question {1} visible" => "Gør kolonne {0} af spørgsmål {1} synlig"
// lg.column_enableText: "make column {0} of question {1} enable" => "Få kolonne {0} af spørgsmål {1} aktivere"
// lg.column_requireText: "make column {0} of question {1} required" => "Gøre kolonne {0} af spørgsmål {1} påkrævet"
// lg.trigger_completeText: "survey becomes completed" => "Undersøgelsen bliver afsluttet"
// lg.trigger_setvalueText: "set into question: {0} value {1}" => "Sæt spørgsmålstegn ved: {0} værdi {1}"
// lg.trigger_setvalueEmptyText: "clear question value: {0}" => "Klar spørgsmålsværdi: {0}"
// lg.trigger_copyvalueText: "copy into question: {0} value from question {1}" => "Kopi i spørgsmål: {0} værdi fra spørgsmål {1}"
// lg.trigger_skipText: "survey skip to the question {0}" => "Undersøgelse Spring til spørgsmålet {0}"
// lg.trigger_runExpressionText1: "run expression: '{0}'" => "Kør udtryk: '{0}'"
// lg.trigger_runExpressionText2: " and set its result into question: {0}" => " og sætte spørgsmålstegn ved resultatet: {0}"
// lg.completedHtmlOnConditionText: "show custom text for the 'Thank you page'." => "Vis brugerdefineret tekst til siden \"Tak\"."
// lg.showAllQuestions: "All Questions" => "Alle spørgsmål"
// lg.showAllActionTypes: "All Action Types" => "Alle handlingstyper"
// lg.conditions: "Condition(s)" => "Tilstand(e)"
// lg.actions: "Action(s)" => "Foranstaltning(er)"
// lg.expressionEditorTitle: "Define condition(s)" => "Definer betingelse(r)"
// lg.actionsEditorTitle: "Define action(s)" => "Definer handling(er)"
// lg.deleteAction: "Delete Action" => "Slet handling"
// lg.addNewAction: "Add Action" => "Tilføj handling"
// lg.selectedActionCaption: "Select action..." => "Vælg handling..."
// lg.expressionInvalid: "The logic expression is empty or invalid. Please correct it." => "Det logiske udtryk er tomt eller ugyldigt. Vær venlig at rette det."
// lg.noActionError: "Please, add at least one action." => "Tilføj mindst én handling."
// lg.actionInvalid: "Please, fix problems in your action(s)." => "Løs venligst problemer i din(e) handling(er)."
// lg.uncompletedRule_title: "Logical rules are incomplete" => "Logiske regler er ufuldstændige"
// lg.uncompletedRule_text: "You have not completed some of the logical rules. If you leave the tab now, the changes will be lost. Do you still want to leave the tab without completing the changes?" => "Du har ikke gennemført nogle af de logiske regler. Hvis du forlader fanen nu, vil ændringerne gå tabt. Vil du stadig forlade fanen uden at gennemføre ændringerne?"
// lg.uncompletedRule_apply: "Yes" => "Ja"
// lg.uncompletedRule_cancel: "No, I want to complete the rules" => "Nej, jeg vil gerne udfylde reglerne"
// pe.save: "Save" => "Spare"
// pe.clear: "Clear" => "Tydelig"
// pe.saveTooltip: "Save" => "Spare"
// pe.set: "Set" => "Sæt"
// pe.change: "Change" => "Forandre"
// pe.refresh: "Refresh" => "Opdatere"
// pe.add: "Add" => "Tilføje"
// pe.removeItem: "Click to remove the item..." => "Klik for at fjerne elementet..."
// pe.dragItem: "Drag the item" => "Træk elementet"
// pe.addOther: "Other" => "Anden"
// pe.addSelectAll: "Select All" => "Vælg alle"
// pe.addNone: "None" => "Ingen"
// pe.back: "Return without saving" => "Returner uden at gemme"
// pe.backTooltip: "Return without saving" => "Returner uden at gemme"
// pe.saveAndBack: "Save and return" => "Gem og returner"
// pe.saveAndBackTooltip: "Save and return" => "Gem og returner"
// pe.doneEditing: "Done" => "Gjort"
// pe.showChoices: "Show Choices" => "Vis valgmuligheder"
// pe.emptyValue: "Value is empty" => "Værdien er tom"
// pe.fastEntryNonUniqueError: "Value '{0}' is not unique" => "Værdien '{0}' er ikke unik"
// pe.fastEntryChoicesCountError: "Please limit the number of items from {0} to {1}" => "Begræns antallet af varer fra {0} til {1}"
// pe.fastEntryPlaceholder: "You can set data in the following format:\nvalue1|text\nvalue2" => "Du kan indstille data i følgende format:\nværdi1|tekst\nværdi2"
// pe.itemSelectorEmpty: "Please select the element" => "Vælg elementet"
// pe.conditionActionEmpty: "Please select the action" => "Vælg handlingen"
// pe.conditionSelectPage: "Select page..." => "Vælg side..."
// pe.conditionSelectPanel: "Select panel..." => "Vælg panel..."
// pe.showPreviewBeforeComplete: "Preview answers before submitting the survey" => "Få vist et eksempel på svarene, før du indsender undersøgelsen"
// pe.overridingPropertyPrefix: "Set by " => "Indstillet af "
// pe.propertyIsNoUnique: "Please enter a unique value" => "Indtast en unik værdi"
// pe.propertyNameIsNotUnique: "Please enter a unique name" => "Indtast et unikt navn"
// pe.propertyNameIsIncorrect: "Do not use reserved words: \"item\", \"choice\", \"panel\", \"row\"." => "Brug ikke reserverede ord: \"element\", \"valg\", \"panel\", \"række\"."
// pe.listIsEmpty: "No items have been added yet" => "Der er endnu ikke tilføjet nogen varer"
// pe.listIsEmpty@choices: "No choices have been added yet" => "Der er endnu ikke tilføjet nogen valgmuligheder"
// pe.addNew@choices: "Add a choice" => "Tilføj et valg"
// pe.expressionIsEmpty: "Expression is empty" => "Udtrykket er tomt"
// choicesbyurl.valueName: "Get values from the following JSON field" => "Hent værdier fra følgende JSON-felt"
// pe.imageLinkName: "Get image URLs from the following JSON field" => "Hent URL-adresser til billeder fra følgende JSON-felt"
// pe.allowEmptyResponse: "Allow empty response" => "Tillad tomt svar"
// pe.titlePlaceholder: "Title" => "Titel"
// pe.surveyTitlePlaceholder: "Survey Title" => "Undersøgelsens titel"
// pe.pageTitlePlaceholder: "Page {num}" => "Side {num}"
// pe.descriptionPlaceholder: "Description" => "Beskrivelse"
// pe.surveyDescriptionPlaceholder: "Description" => "Beskrivelse"
// pe.pageDescriptionPlaceholder: "Description" => "Beskrivelse"
// pe.showNoneItem: "Allow the None option" => "Tillad indstillingen Ingen"
// pe.noneText: "None option text" => "Ingen tekst til valgmulighed"
// pe.showSelectAllItem: "Allow the Select All option" => "Tillad indstillingen Vælg alt"
// pe.selectAllText: "Select All option text" => "Vælg tekst med valgmuligheden Alle"
// pe.choicesMin: "Minimum value for auto-generated items" => "Minimumsværdi for automatisk genererede varer"
// pe.choicesMax: "Maximum value for auto-generated items" => "Maksimal værdi for automatisk genererede varer"
// pe.choicesStep: "Step for auto-generated items" => "Trin for automatisk genererede elementer"
// pe.isAllRowRequired: "Require answer for all rows" => "Kræv svar for alle rækker"
// pe.requiredErrorText: "\"Required\" error message" => "Fejlmeddelelsen \"Påkrævet\""
// pe.cols: "Columns" => "Kolonner"
// pe.rateMin: "Minimum rate value" => "Mindste sats værdi"
// pe.rateMax: "Maximum rate value" => "Maksimal sats værdi"
// pe.rateStep: "Rate step" => "Sats trin"
// pe.buildExpression: "Build" => "Bygge"
// pe.editExpression: "Edit" => "Redigere"
// pe.and: "and" => "og"
// pe.or: "or" => "eller"
// pe.remove: "Remove" => "Fjerne"
// pe.addCondition: "Add Condition" => "Tilføj betingelse"
// pe.emptyLogicPopupMessage: "Select a question to start configuring conditions." => "Vælg et spørgsmål for at begynde at konfigurere betingelser."
// pe.if: "If" => "Hvis"
// pe.then: "then" => "derpå"
// pe.setToName: "Target question" => "Mål spørgsmål"
// pe.fromName: "Question to copy answer from" => "Spørgsmål at kopiere svar fra"
// pe.gotoName: "Question to skip to" => "Spørgsmål at springe til"
// pe.ruleIsNotSet: "Rule is incorrect" => "Reglen er forkert"
// pe.includeIntoResult: "Include into survey results" => "Medtag i undersøgelsesresultater"
// pe.expandCollapseTitle: "Expand/collapse title" => "Udvid/skjul titel"
// pe.simulator: "Select device type" => "Vælg enhedstype"
// pe.landscapeOrientation: "Switch to landscape orientation" => "Skift til liggende retning"
// pe.portraitOrientation: "Switch to portrait orientation" => "Skift til stående format"
// pe.previewText: "Preview Answers button text" => "Tekst til knappen Vis svar"
// pe.editText: "Edit Answer button text" => "Tekst til knappen Rediger svar"
// image.imageHeight: "Image height (in CSS-accepted values)" => "Billedhøjde (i CSS-accepterede værdier)"
// image.imageWidth: "Image width (in CSS-accepted values)" => "Billedbredde (i CSS-accepterede værdier)"
// page.maxTimeToFinish: "Time limit to finish the page (in seconds)" => "Tidsgrænse for at afslutte siden (i sekunder)"
// question.page: "Parent page" => "Overordnet side"
// pe.noEntriesText: "Empty entries text" => "Tekst til tomme poster"
// pe.html: "HTML markup" => "HTML-markering"
// pe.expression: "Expression" => "Udtryk"
// pe.setValue: "Answer" => "Svare"
// pe.dataFormat: "Image format" => "Billedformat"
// pe.allowAddRows: "Allow adding rows" => "Tillad tilføjelse af rækker"
// pe.allowRemoveRows: "Allow removing rows" => "Tillad fjernelse af rækker"
// pe.allowRowsDragAndDrop: "Allow row drag and drop" => "Tillad træk og slip af rækker"
// pe.responsiveImageSizeHelp: "Does not apply if you specify the exact image width or height." => "Gælder ikke, hvis du angiver den nøjagtige billedbredde eller -højde."
// pe.minImageWidth: "Minimum image width" => "Mindste billedbredde"
// pe.maxImageWidth: "Maximum image width" => "Maksimal billedbredde"
// pe.minImageHeight: "Minimum image height" => "Mindste billedhøjde"
// pe.maxImageHeight: "Maximum image height" => "Maksimal billedhøjde"
// pe.minValue: "Minimum value" => "Mindste værdi"
// pe.maxValue: "Maximum value" => "Maksimal værdi"
// pe.minLength: "Minimum length (in characters)" => "Mindste længde (med bogstaver)"
// pe.allowDigits: "Allow digits" => "Tillad cifre"
// pe.minCount: "Minimum count" => "Mindste antal"
// pe.maxCount: "Maximum count" => "Maksimalt antal"
// pe.regex: "Regular expression" => "Regulært udtryk"
// surveyvalidator.text: "Error message" => "Fejlmeddelelse"
// surveyvalidator.expression: "Validation expression" => "Valideringsudtryk"
// pe.totalText: "Total row text" => "Tekst i samlet række"
// pe.totalType: "Total type" => "Samlet type"
// pe.totalExpression: "Total expression" => "Samlet udtryk"
// pe.totalDisplayStyle: "Total value display style" => "Visningstypografi for samlet værdi"
// pe.totalCurrency: "Currency" => "Valuta"
// pe.totalFormat: "Formatted string" => "Formateret streng"
// pe.logo: "Logo (URL or base64-encoded string)" => "Logo (URL eller base64-kodet streng)"
// pe.questionsOnPageMode: "Survey structure" => "Undersøgelsens opbygning"
// pe.maxTextLength: "Maximum answer length (in characters)" => "Maksimal svarlængde (med tegn)"
// pe.maxOthersLength: "Maximum comment length (in characters)" => "Maksimal kommentarlængde (i tegn)"
// pe.autoGrowComment: "Auto-expand comment area if necessary" => "Udvid automatisk kommentarområdet, hvis det er nødvendigt"
// pe.allowResizeComment: "Allow users to resize text areas" => "Tillad brugere at ændre størrelsen på tekstområder"
// pe.textUpdateMode: "Update text question value" => "Opdater værdi for tekstspørgsmål"
// pe.focusOnFirstError: "Set focus on the first invalid answer" => "Sæt fokus på det første ugyldige svar"
// pe.checkErrorsMode: "Run validation" => "Kør validering"
// pe.navigateToUrl: "Navigate to URL" => "Naviger til URL"
// pe.navigateToUrlOnCondition: "Dynamic URL" => "Dynamisk webadresse"
// pe.completedBeforeHtml: "Markup to show if the user already filled out this survey" => "Markering for at vise, om brugeren allerede har udfyldt denne undersøgelse"
// pe.completedHtml: "Survey Complete page markup" => "Opmærkning af siden Undersøgelse fuldført"
// pe.completedHtmlOnCondition: "Dynamic Survey Complete page markup" => "Dynamisk undersøgelse fuldført sidemarkering"
// pe.loadingHtml: "Markup to show while survey model is loading" => "Markering, der skal vises, mens undersøgelsesmodellen indlæses"
// pe.commentText: "Comment area text" => "Tekst i kommentarområdet"
// pe.autocomplete: "Autocomplete type" => "Type Autofuldførelse"
// pe.labelTrue: "\"True\" label" => "\"True\" etiket"
// pe.labelFalse: "\"False\" label" => "Etiketten \"Falsk\""
// pe.allowClear: "Show the Clear button" => "Vis knappen Ryd"
// pe.displayStyle: "Value display style" => "Værdi visningsstil"
// pe.format: "Formatted string" => "Formateret streng"
// pe.maximumFractionDigits: "Maximum fractional digits" => "Maksimalt antal brøkdele"
// pe.minimumFractionDigits: "Minimum fractional digits" => "Mindste brøkdele"
// pe.useGrouping: "Display grouping separators" => "Vis grupperingsseparatorer"
// pe.allowMultiple: "Allow multiple files" => "Tillad flere filer"
// pe.allowImagesPreview: "Preview images" => "Se eksempler på billeder"
// pe.acceptedTypes: "Accepted file types" => "Accepterede filtyper"
// pe.waitForUpload: "Wait for the upload to complete" => "Vent på, at overførslen er fuldført"
// pe.needConfirmRemoveFile: "Confirm file deletion" => "Bekræft sletning af fil"
// pe.detailPanelMode: "Detail panel location" => "Placering af panelet Detaljer"
// pe.minRowCount: "Minimum row count" => "Mindste antal rækker"
// pe.maxRowCount: "Maximum row count" => "Maksimalt antal rækker"
// pe.confirmDelete: "Confirm row deletion" => "Bekræft sletning af række"
// pe.confirmDeleteText: "Confirmation message" => "Bekræftelsesmeddelelse"
// paneldynamic.confirmDelete: "Confirm panel deletion" => "Bekræft sletning af panel"
// pe.panelCount: "Initial panel count" => "Indledende antal paneler"
// pe.minPanelCount: "Minimum panel count" => "Mindste antal paneler"
// pe.maxPanelCount: "Maximum panel count" => "Maksimalt antal paneler"
// pe.panelsState: "Inner panel expand state" => "Udvid tilstand for indvendigt panel"
// pe.templateDescription: "Description template" => "Beskrivelse skabelon"
// pe.templateTitle: "Title template" => "Titel skabelon"
// pe.panelPrevText: "Previous Panel button tooltip" => "Forrige værktøjstip til panelknap"
// pe.panelNextText: "Next Panel button tooltip" => "Værktøjstip til knappen Næste panel"
// pe.showRangeInProgress: "Show progress bar" => "Vis statuslinje"
// pe.templateTitleLocation: "Question title location" => "Placering af spørgsmålets titel"
// pe.panelRemoveButtonLocation: "Remove Panel button location" => "Fjern placering af panelknap"
// pe.hideIfRowsEmpty: "Hide the question if there are no rows" => "Skjul spørgsmålet, hvis der ikke er nogen rækker"
// pe.hideColumnsIfEmpty: "Hide columns if there are no rows" => "Skjule kolonner, hvis der ikke er nogen rækker"
// pe.rateValues: "Custom rate values" => "Tilpassede satsværdier"
// pe.rateCount: "Rate count" => "Antal satser"
// pe.autoGenerate: "How to specify rate values?" => "Hvordan angives satsværdier?"
// pe.hideIfChoicesEmpty: "Hide the question if it contains no choices" => "Skjul spørgsmålet, hvis det ikke indeholder nogen valgmuligheder"
// pe.hideNumber: "Hide question number" => "Skjul spørgsmålsnummer"
// pe.minWidth: "Minimum width (in CSS-accepted values)" => "Minimumbredde (i CSS-accepterede værdier)"
// pe.maxWidth: "Maximum width (in CSS-accepted values)" => "Maksimal bredde (i CSS-accepterede værdier)"
// pe.width: "Width (in CSS-accepted values)" => "Bredde (i CSS-accepterede værdier)"
// pe.showHeader: "Show column headers" => "Vis kolonneoverskrifter"
// pe.horizontalScroll: "Show horizontal scrollbar" => "Vis vandret rullepanel"
// pe.columnMinWidth: "Minimum column width (in CSS-accepted values)" => "Mindste kolonnebredde (i CSS-accepterede værdier)"
// pe.rowTitleWidth: "Row header width (in CSS-accepted values)" => "Bredde på rækkeoverskrift (i CSS-accepterede værdier)"
// pe.valueTrue: "\"True\" value" => "\"Sand\" værdi"
// pe.valueFalse: "\"False\" value" => "\"Falsk\" værdi"
// pe.minErrorText: "\"Value is below minimum\" error message" => "Fejlmeddelelsen \"Værdien er under minimum\""
// pe.maxErrorText: "\"Value exceeds maximum\" error message" => "Fejlmeddelelsen \"Værdien overstiger maksimum\""
// pe.otherErrorText: "\"Empty comment\" error message" => "Fejlmeddelelsen \"Tom kommentar\""
// pe.keyDuplicationError: "\"Non-unique key value\" error message" => "Fejlmeddelelsen \"Ikke-entydig nøgleværdi\""
// pe.minSelectedChoices: "Minimum selected choices" => "Minimum valgte valg"
// pe.maxSelectedChoices: "Maximum selected choices" => "Maksimalt antal valgte valg"
// pe.showClearButton: "Show the Clear button" => "Vis knappen Ryd"
// pe.showNumber: "Show panel number" => "Vis panelnummer"
// pe.logoWidth: "Logo width (in CSS-accepted values)" => "Logobredde (i CSS-accepterede værdier)"
// pe.logoHeight: "Logo height (in CSS-accepted values)" => "Logohøjde (i CSS-accepterede værdier)"
// pe.readOnly: "Read-only" => "Skrivebeskyttet"
// pe.enableIf: "Editable if" => "Redigerbar, hvis"
// pe.emptyRowsText: "\"No rows\" message" => "Meddelelsen \"Ingen rækker\""
// pe.size: "Input field size (in characters)" => "Inputfeltstørrelse (i tegn)"
// pe.separateSpecialChoices: "Separate special choices (None, Other, Select All)" => "Adskil særlige valg (Ingen, Andet, Vælg alle)"
// pe.choicesFromQuestion: "Copy choices from the following question" => "Kopiér valg fra følgende spørgsmål"
// pe.choicesFromQuestionMode: "Which choices to copy?" => "Hvilke valgmuligheder skal kopieres?"
// pe.showCommentArea: "Show the comment area" => "Vis kommentarområdet"
// pe.commentPlaceholder: "Comment area placeholder" => "Pladsholder til kommentarområde"
// pe.displayRateDescriptionsAsExtremeItems: "Display rate descriptions as extreme values" => "Beskrivelser af visningshastighed som ekstreme værdier"
// pe.rowsOrder: "Row order" => "Rækkefølge af rækker"
// pe.columnsLayout: "Column layout" => "Kolonnelayout"
// pe.columnColCount: "Nested column count" => "Antal indlejrede kolonner"
// pe.state: "Panel expand state" => "Panel udvide tilstand"
// pe.correctAnswer: "Correct Answer" => "Korrekt svar"
// pe.defaultPanelValue: "Default Values" => "Standardværdier"
// pe.cells: "Cell Texts" => "Celle tekster"
// pe.keyName: "Key column" => "Nøglekolonne"
// itemvalue.text: "Alt text" => "Alternativ tekst"
// pe.logoPosition: "Logo position" => "Logo position"
// pe.addLogo: "Add logo..." => "Tilføj logo..."
// pe.changeLogo: "Change logo..." => "Skift logo..."
// logoPositions.none: "Remove logo" => "Fjern logo"
// logoPositions.left: "Left" => "Venstre"
// logoPositions.right: "Right" => "Højre"
// logoPositions.top: "On the top" => "På toppen"
// logoPositions.bottom: "In the bottom" => "I bunden"
// tabs.requiredIf: "Required If" => "Påkrævet, hvis"
// tabs.numbering: "Numbering" => "Nummerering"
// tabs.pages: "Pages" => "Sider"
// tabs.calculatedValues: "Calculated Values" => "Beregnede værdier"
// tabs.totals: "Totals" => "Totaler"
// tabs.logic: "Logic" => "Logik"
// tabs.layout: "Layout" => "Layout"
// tabs.data: "Data" => "Data"
// tabs.validation: "Validation" => "Validering"
// tabs.cells: "Cell Texts" => "Celle tekster"
// tabs.showOnCompleted: "Survey Complete" => "Undersøgelsen er fuldført"
// tabs.logo: "Logo in Survey Title" => "Logo i undersøgelsens titel"
// tabs.slider: "Slider" => "Skyderen"
// tabs.expression: "Expression" => "Udtryk"
// tabs.others: "Others" => "Andre"
// pe.choicesVisibleIf: "Choices are visible if" => "Valg er synlige, hvis"
// pe.choicesEnableIf: "Choices are selectable if" => "Valg kan vælges, hvis:"
// pe.columnsEnableIf: "Columns are visible if" => "Kolonner er synlige, hvis"
// pe.rowsEnableIf: "Rows are visible if" => "Rækker er synlige, hvis"
// pe.indent: "Add indents" => "Tilføj indrykninger"
// panel.indent: "Add outer indents" => "Tilføj ydre indrykninger"
// pe.innerIndent: "Add inner indents" => "Tilføj indre indrykninger"
// pe.defaultValueFromLastRow: "Take default values from the last row" => "Tag standardværdier fra den sidste række"
// pe.defaultValueFromLastPanel: "Take default values from the last panel" => "Tag standardværdier fra det sidste panel"
// pe.titleKeyboardAdornerTip: "Press enter button to edit" => "Tryk på enter-knappen for at redigere"
// pe.keyboardAdornerTip: "Press enter button to edit item, press delete button to delete item, press alt plus arrow up or arrow down to move item" => "Tryk på enter-knappen for at redigere elementet, tryk på slet-knappen for at slette elementet, tryk på alt plus pil op eller pil ned for at flytte elementet"
// pe.triggerGotoName: "Go to the question" => "Gå til spørgsmålet"
// pe.triggerRunExpressionEmpty: "Please enter a valid expression" => "Indtast et gyldigt udtryk"
// pe.emptyExpressionPlaceHolder: "Type expression here..." => "Skriv udtryk her..."
// pe.noFile: "No file choosen" => "Ingen fil valgt"
// pe.clearIfInvisible: "Clear the value if the question becomes hidden" => "Ryd værdien, hvis spørgsmålet bliver skjult"
// pe.valuePropertyName: "Value property name" => "Egenskabsnavn for værdi"
// pe.searchEnabled: "Enable search" => "Aktivér søgning"
// pe.hideSelectedItems: "Hide selected items" => "Skjule markerede elementer"
// pe.closeOnSelect: "Close the dropdown after selection" => "Luk rullemenuen efter markering"
// pe.signatureWidth: "Signature width" => "Signaturens bredde"
// pe.signatureHeight: "Signature height" => "Signatur højde"
// pe.verticalAlign: "Vertical alignment" => "Lodret justering"
// pe.alternateRows: "Alternate rows" => "Alternative rækker"
// pe.columnsVisibleIf: "Columns are visible if" => "Kolonner er synlige, hvis"
// pe.rowsVisibleIf: "Rows are visible if" => "Rækker er synlige, hvis"
// pe.otherPlaceholder: "Comment area placeholder" => "Pladsholder til kommentarområde"
// pe.rateType: "Rate type" => "Sats type"
// pv.true: "true" => "sand"
// pv.false: "false" => "falsk"
// pv.decimal: "decimal" => "decimal"
// pv.currency: "currency" => "valuta"
// pv.percent: "percent" => "procent"
// pv.onpanel: "Start on each panel" => "Start på hvert panel"
// pv.tab: "Tabs" => "Faner"
// pv.both: "Both" => "Begge"
// pv.right: "Right" => "Højre"
// pv.color: "color" => "farve"
// pv.date: "date" => "dato"
// pv.datetime: "datetime" => "datetime"
// pv.datetime-local: "datetime-local" => "datetime-lokal"
// pv.email: "email" => "E-mail"
// pv.month: "month" => "måned"
// pv.number: "number" => "tal"
// pv.password: "password" => "kodeord"
// pv.range: "range" => "interval"
// pv.tel: "tel" => "Tel"
// pv.text: "text" => "Tekst"
// pv.time: "time" => "Tidspunkt"
// pv.url: "url" => "URL-adresse"
// pv.week: "week" => "uge"
// pv.onHiddenContainer: "When the question or its panel/page becomes hidden" => "Når spørgsmålet eller dets panel/side bliver skjult"
// clearInvisibleValues.none: "Never" => "Aldrig"
// inputType.color: "Color" => "Farve"
// inputType.date: "Date" => "Dato"
// inputType.datetime-local: "Date and Time" => "Dato og klokkeslæt"
// inputType.email: "Email" => "E-mail"
// inputType.month: "Month" => "Måned"
// inputType.number: "Number" => "Tal"
// inputType.password: "Password" => "Kodeord"
// inputType.range: "Range" => "Interval"
// inputType.tel: "Phone Number" => "Telefonnummer"
// inputType.text: "Text" => "Tekst"
// inputType.time: "Time" => "Tidspunkt"
// inputType.url: "URL" => "URL-adresse"
// inputType.week: "Week" => "Uge"
// pv.onValueChanging: "Before an answer is changed" => "Før et svar ændres"
// pv.standard: "Original structure" => "Oprindelig struktur"
// pv.singlePage: "All questions on a single page" => "Alle spørgsmål på en enkelt side"
// pv.questionPerPage: "Each question on an individual page" => "Hvert spørgsmål på en individuel side"
// pv.noPreview: "No preview" => "Ingen forhåndsvisning"
// pv.showAllQuestions: "Show all questions" => "Vis alle spørgsmål"
// pv.showAnsweredQuestions: "Show answered questions only" => "Vis kun besvarede spørgsmål"
// pv.pages: "Completed pages" => "Afsluttede sider"
// pv.questions: "Answered questions" => "Besvarede spørgsmål"
// pv.requiredQuestions: "Answered required questions" => "Besvarede nødvendige spørgsmål"
// pv.correctQuestions: "Valid answers" => "Gyldige svar"
// pv.buttons: "Completed pages (button UI)" => "Afsluttede sider (knapbrugergrænseflade)"
// pv.underInput: "Under the input" => "Under indgangen"
// pv.underTitle: "Under the title" => "Under titlen"
// pv.onBlur: "On blur" => "På sløring"
// pv.onTyping: "While typing" => "Mens du skriver"
// pv.underRow: "Under the row" => "Under rækken"
// pv.underRowSingle: "Under the row, only one panel is visible" => "Under rækken er kun ét panel synligt"
// showNavigationButtons.none: "Hidden" => "Skjult"
// showProgressBar.off: "Hidden" => "Skjult"
// showTimerPanel.none: "Hidden" => "Skjult"
// showTimerPanelMode.all: "Both" => "Begge"
// detailPanelMode.none: "Hidden" => "Skjult"
// addRowLocation.default: "Depends on matrix layout" => "Afhænger af matrixlayout"
// panelsState.default: "Users cannot expand or collapse panels" => "Brugere kan ikke udvide eller skjule paneler"
// panelsState.collapsed: "All panels are collapsed" => "Alle paneler er skjult"
// panelsState.expanded: "All panels are expanded" => "Alle paneler er udvidet"
// widthMode.auto: "Auto" => "Auto"
// widthMode.static: "Static" => "Statisk"
// widthMode.responsive: "Responsive" => "Lydhør"
// imageFit.none: "None" => "Ingen"
// imageFit.contain: "Contain" => "Indeholde"
// imageFit.cover: "Cover" => "Dække"
// imageFit.fill: "Fill" => "Fylde"
// contentMode.auto: "Auto" => "Auto"
// contentMode.image: "Image" => "Billede"
// contentMode.video: "Video" => "Video"
// contentMode.youtube: "YouTube" => "YouTube"
// displayMode.auto: "Auto" => "Auto"
// displayMode.buttons: "Buttons" => "Knapper"
// displayMode.dropdown: "Dropdown" => "Rullemenu"
// rateColorMode.default: "Default" => "Standard"
// autoGenerate.true: "Generate" => "Frembringe"
// autoGenerate.false: "Enter manually" => "Indtast manuelt"
// rateType.labels: "Labels" => "Etiketter"
// rateType.stars: "Stars" => "Stjerner"
// rateType.smileys: "Smileys" => "Smileys"
// op.anyof: "Any of" => "Enhver af"
// op.allof: "All of" => "Alle af"
// op.and: "and" => "og"
// op.or: "or" => "eller"
// ew.modern: "Modern theme" => "Moderne tema"
// ew.default: "Default theme" => "Standardtema"
// ew.orange: "Orange theme" => "Orange tema"
// ew.darkblue: "Darkblue theme" => "Mørkeblåt tema"
// ew.darkrose: "Darkrose theme" => "Temaet Darkrose"
// ew.stone: "Stone theme" => "Temaet Sten"
// ew.winter: "Winter theme" => "Vinter tema"
// ew.winterstone: "Winter-Stone theme" => "Temaet Vintersten"
// ts.showInvisibleElements: "Show invisible elements" => "Vis usynlige elementer"
// ts.hideInvisibleElements: "Hide invisible elements" => "Skjul usynlige elementer"
// triggers.skiptrigger: "Skip to question" => "Spring til spørgsmål"
// pehelp.cookieName: "Cookies prevent users from filling out the same survey twice." => "Cookies forhindrer brugere i at udfylde den samme undersøgelse to gange."
// pehelp.size: "Resizes the visible area of the input field. Please use the <b>Validation → Maximum length</b> setting to limit the input length." => "Ændrer størrelsen på det synlige område af inputfeltet. Brug indstillingen <b>Validering → Maksimal længde</b> for at begrænse inputlængden."
// pehelp.format: "Use {0} as a placeholder for the actual value." => "Brug {0} som pladsholder for den faktiske værdi."
// pehelp.totalText: "Visible only when at least one column has Total type or Total expression." => "Kun synlig, når mindst én kolonne har typen Total eller Totaludtryk."
// pehelp.acceptedTypes: "Refer to the [accept](https://www.w3schools.com/tags/att_input_accept.asp) attribute description for more information." => "Se beskrivelsen af attributten [accept](https://www.w3schools.com/tags/att_input_accept.asp) for at få flere oplysninger."
// pehelp.columnColCount: "Applicable only to Radiogroup and Checkbox cell types." => "Gælder kun for celletyperne Radiogruppe og afkrydsningsfelt."
// pehelp.autocomplete: "Refer to the [autocomplete](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete) attribute description for more information." => "Se beskrivelsen af attributten [autofuldførelse](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete) for at få flere oplysninger."
// pehelp.valueName: "If you do not set this property, the answer will be stored in a field specified by the Name property." => "Hvis du ikke angiver denne egenskab, gemmes svaret i et felt, der er angivet af egenskaben Navn."
// choicesbyurl.valueName: " " => " "
// pehelp.keyName: "If the specified column contains identical values, the survey throws the \"Non-unique key value\" error." => "Hvis den angivne kolonne indeholder identiske værdier, kaster undersøgelsen fejlen \"Ikke-unik nøgleværdi\"."
// p.multiSelect: "Allow multiple selection" => "Tillad flere valg"
// p.showLabel: "Show image captions" => "Vis billedtekster"
// p.value: "Value" => "Værdi"
// p.tabAlign: "Tab alignment" => "Tabulatorjustering"
// p.logoFit: "Logo fit" => "Logo pasform"
// p.pages: "Pages" => "Sider"
// p.questions: "Questions" => "Spørgsmål"
// p.calculatedValues: "Calculated values" => "Beregnede værdier"
// p.surveyId: "Survey id" => "Undersøgelses-id"
// p.surveyPostId: "Survey post id" => "Id for undersøgelsespost"
// p.surveyShowDataSaving: "Survey show data saving" => "Undersøgelse viser lagring af data"
// p.questionDescriptionLocation: "Question description location" => "Placering af spørgsmålsbeskrivelse"
// p.progressBarType: "Progress bar type" => "Type af statuslinje"
// p.showTOC: "Show TOC" => "Vis indholdsfortegnelse"
// p.tocLocation: "Toc location" => "Toc placering"
// p.questionTitlePattern: "Question title pattern" => "Mønster for spørgsmålets titel"
// p.widthMode: "Width mode" => "Bredde-tilstand"
// p.showBrandInfo: "Show brand info" => "Vis brandoplysninger"
// p.useDisplayValuesInDynamicTexts: "Use display values in dynamic texts" => "Brug visningsværdier i dynamiske tekster"
// p.descriptionLocation: "Description location" => "Beskrivelse placering"
// p.defaultValueExpression: "Default value expression" => "Standardværdiudtryk"
// p.requiredIf: "Required if" => "Påkrævet, hvis"
// p.bindings: "Bindings" => "Bindings"
// p.renderAs: "Render as" => "Gengiv som"
// p.attachOriginalItems: "Attach original items" => "Vedhæft originale elementer"
// p.cellHint: "Cell hint" => "Celle tip"
// p.isUnique: "Is unique" => "Er unik"
// p.showInMultipleColumns: "Show in multiple columns" => "Vis i flere kolonner"
// p.totalMaximumFractionDigits: "Total maximum fraction digits" => "Maksimale brøkdele i alt"
// p.totalMinimumFractionDigits: "Total minimum fraction digits" => "Mindste brøkdele i alt"
// p.detailElements: "Detail elements" => "Detaljeelementer"
// p.allowAdaptiveActions: "Allow adaptive actions" => "Tillad adaptive handlinger"
// p.detailPanelShowOnAdding: "Detail panel show on adding" => "Panelet Detaljer vises ved tilføjelse"
// p.choicesLazyLoadEnabled: "Choices lazy load enabled" => "Valg doven belastning aktiveret"
// p.choicesLazyLoadPageSize: "Choices lazy load page size" => "Valg doven indlæsningssidestørrelse"
// p.inputFieldComponent: "Input field component" => "Inputfeltkomponent"
// p.itemComponent: "Item component" => "Element komponent"
// p.min: "Min" => "Min."
// p.max: "Max" => "Maks"
// p.minValueExpression: "Min value expression" => "Min værdi udtryk"
// p.maxValueExpression: "Max value expression" => "Maks. værdiudtryk"
// p.step: "Step" => "Skridt"
// p.dataList: "Data list" => "Dataliste"
// p.elements: "Elements" => "Elementer"
// p.content: "Content" => "Indhold"
// p.navigationTitle: "Navigation title" => "Navigation titel"
// p.navigationDescription: "Navigation description" => "Beskrivelse af navigation"
// p.longTap: "Long tap" => "Langt tryk"
// p.autoGrow: "Auto grow" => "Automatisk vækst"
// p.allowResize: "Allow resizing" => "Tillad ændring af størrelse"
// p.acceptCarriageReturn: "Accept carriage return" => "Accepter retur af transport"
// p.displayMode: "Display mode" => "Visningstilstand"
// p.rateType: "Rate type" => "Sats type"
// p.contentMode: "Content mode" => "Indholdstilstand"
// p.imageFit: "Image fit" => "Billede passer"
// p.altText: "Alt text" => "Alternativ tekst"
// p.height: "Height" => "Højde"
// p.penColor: "Pen color" => "Pen farve"
// p.backgroundColor: "Background color" => "Baggrundsfarve"
// p.templateElements: "Template elements" => "Skabelon elementer"
// p.operator: "Operator" => "Operatør"
// p.isVariable: "Is variable" => "Er variabel"
// p.runExpression: "Run expression" => "Kør udtryk"
// p.showCaption: "Show caption" => "Vis billedtekst"
// p.iconName: "Icon name" => "Ikon navn"
// p.iconSize: "Icon size" => "Ikon størrelse"
// p.precision: "Precision" => "Præcision"
// p.matrixDragHandleArea: "Matrix drag handle area" => "Området for matrix-trækhåndtaget"
// p.backgroundImage: "Background image" => "Baggrundsbillede"
// p.backgroundImageFit: "Background image fit" => "Tilpasning af baggrundsbillede"
// p.backgroundImageAttachment: "Background image attachment" => "Vedhæftet fil til baggrundsbillede"
// p.backgroundOpacity: "Background opacity" => "Opacitet i baggrunden"
// p.selectToRankEnabled: "Select to rank enabled" => "Vælg at rangere aktiveret"
// p.selectToRankAreasLayout: "Select to rank areas layout" => "Vælg for at rangere områdelayout"
// p.allowCameraAccess: "Allow camera access" => "Tillad kameraadgang"
// p.scaleColorMode: "Scale color mode" => "Skaler farvetilstand"
// p.rateColorMode: "Rate color mode" => "Bedøm farvetilstand"
// p.templateTabTitle: "Template tab title" => "Titel på fanen Skabelon"
// p.templateVisibleIf: "Template visible if" => "Skabelon synlig, hvis"
// p.copyDisplayValue: "Copy display value" => "Kopiér visningsværdi"
// theme.--background: "Background color" => "Baggrundsfarve"
// theme.--background-dim-light: "Background dim light color" => "Baggrund svag lys farve"
// theme.--primary-foreground: "Primary foreground color" => "Primær forgrundsfarve"
// theme.--foreground: "Foreground color" => "Forgrundsfarve"
// theme.--base-unit: "Base unit" => "Basisenhed"
// theme.groupGeneral: "General" => "Generel"
// theme.groupAdvanced: "Advanced" => "Avanceret"
// theme.themeName: "Theme" => "Tema"
// theme.themeMode: "Question appearance" => "Spørgsmål udseende"
// theme.themeModePanels: "Default" => "Standard"
// theme.themeModeLightweight: "Without Panels" => "Uden paneler"
// theme.themePaletteLight: "Light" => "Lys"
// theme.themePaletteDark: "Dark" => "Mørk"
// theme.primaryColor: "Accent color" => "Accent farve"
// theme.primaryDefaultColor: "Default" => "Standard"
// theme.primaryDarkColor: "Hover" => "Hover"
// theme.primaryLightColor: "Selected" => "Valgte"
// theme.backgroundDimColor: "Background color" => "Baggrundsfarve"
// theme.backgroundImage: "Background image" => "Baggrundsbillede"
// theme.backgroundImageFitAuto: "Auto" => "Auto"
// theme.backgroundImageFitCover: "Cover" => "Dække"
// theme.backgroundImageFitContain: "Contain" => "Indeholde"
// theme.backgroundOpacity: "Opacity" => "Opacitet"
// theme.backgroundImageAttachmentFixed: "Fixed" => "Fast"
// theme.backgroundImageAttachmentScroll: "Scroll" => "Rulle"
// theme.panelBackgroundTransparency: "Panel background opacity" => "Opacitet af panelets baggrund"
// theme.questionBackgroundTransparency: "Question background opacity" => "Spørgsmål baggrundsuigennemsigtighed"
// theme.questionPanel: "Panel background and corner radius" => "Panelbaggrund og hjørneradius"
// theme.questionTitle: "Question title font" => "Skrifttype for spørgsmålstitel"
// theme.questionDescription: "Question description font" => "Skrifttype til beskrivelse af spørgsmål"
// theme.editorPanel: "Input element" => "Input element"
// theme.editorFont: "Input element font" => "Skrifttype for inputelement"
// theme.backcolor: "Default background" => "Standard baggrund"
// theme.hovercolor: "Hover background" => "Hold markøren over baggrunden"
// theme.borderDecoration: "Border decoration" => "Kant dekoration"
// theme.accentBackground: "Accent background" => "Accent baggrund"
// theme.accentForeground: "Accent foreground" => "Accent forgrund"
// theme.primaryForecolor: "Default color" => "Standardfarve"
// theme.primaryForecolorLight: "Disabled color" => "Deaktiveret farve"
// theme.linesColors: "Minor line colors" => "Mindre stregfarver"
// theme.borderDefault: "Darker" => "Mørkere"
// theme.borderLight: "Lighter" => "Lighter"
// theme.fontFamily: "Font family" => "Skrifttypefamilie"
// theme.fontSize: "Font size" => "Skrifttypestørrelse"
// theme.color: "Color" => "Farve"
// theme.size: "Size" => "Størrelse"
// theme.fontWeightRegular: "Regular" => "Regelmæssig"
// theme.fontWeightHeavy: "Heavy" => "Tung"
// theme.fontWeightSemiBold: "Semi-bold" => "Halvfed skrift"
// theme.fontWeightBold: "Bold" => "Modig"
// theme.scale: "Scale" => "Skæl"
// theme.cornerRadius: "Corner radius" => "Hjørne radius"
// theme.surveyTitle: "Survey title font" => "Skrifttype for undersøgelsestitel"
// theme.pageTitle: "Page title font" => "Sidetitel skrifttype"
// theme.pageDescription: "Page description font" => "Sidebeskrivelse skrifttype"
// theme.boxShadowX: "X" => "X"
// theme.boxShadowY: "Y" => "Y"
// theme.boxShadowAddRule: "Add Shadow Effect" => "Tilføj skyggeeffekt"
// theme.opacity: "Opacity" => "Opacitet"
// theme.boxShadowBlur: "Blur" => "Sløring"
// theme.boxShadowSpread: "Spread" => "Spredning"
// theme.boxShadowDrop: "Drop" => "Dråbe"
// theme.boxShadowInner: "Inner" => "Indre"
// theme.questionShadow: "Shadow effects" => "Skyggeeffekter"
// theme.editorShadow: "Input element shadow effects" => "Skyggeeffekter for inputelement"
// names.default: "Default" => "Standard"
// names.contrast: "Contrast" => "Kontrast"
// names.plain: "Plain" => "Slette"
// names.simple: "Simple" => "Simpel"
// names.blank: "Blank" => "Hvid"
// names.double: "Double" => "Dobbelt"
// names.bulk: "Bulk" => "Bulk"
// names.pseudo-3d: "Pseudo 3D" => "Pseudo 3D"
// names.playful: "Playful" => "Legende"
// names.ultra: "Ultra" => "Ultra"
// colors.teal: "Teal" => "Krikand"
// colors.blue: "Blue" => "Blå"
// colors.purple: "Purple" => "Lilla"
// colors.orchid: "Orchid" => "Orkide"
// colors.tulip: "Tulip" => "Tulipan"
// colors.brown: "Brown" => "Brun"
// colors.green: "Green" => "Grøn"
// names.sharp: "Sharp" => "Skarp"
// names.borderless: "Borderless" => "Kant"
// names.flat: "Flat" => "Flad"
// names.doubleborder: "Double Border" => "Dobbelt kant"
// names.layered: "Layered" => "Lagdelte"
// names.solid: "Solid" => "Fast"
// names.threedimensional: "3D" => ".3D"
// ed.translationDeleteLanguage: "Are you certain you wish to delete all strings for this language?" => "Er du sikker på, at du ønsker at slette alle strenge for dette sprog?"
// ed.themeResetButton: "Reset theme settings to default" => "Nulstil temaindstillinger til standard"
// theme.placeholderColor: "Placeholder color" => "Pladsholderfarve"
// ed.themeSettings: "Theme Settings" => "Temaindstillinger"
// ed.themeSettingsTooltip: "Open theme settings" => "Åbn temaindstillinger"
// pe.resetToDefaultCaption: "Reset" => "Nulstille"
// pv.file: "Local files" => "Lokale filer"
// pv.camera: "Camera" => "Kamera"
// pv.file-camera: "Local files or camera" => "Lokale filer eller kamera"
// ed.translateUsigAI: "Auto-translate All" => "Oversæt automatisk alle"
// ed.translationDialogTitle: "Untranslated strings" => "Uoversatte strenge"
// pe.fastEntryChoicesMinCountError: "Please enter at least {0} items" => "Indtast mindst {0} punkter"
// lg.question_resetValueName: "Reset question value" => "Nulstil spørgsmålsværdi"
// lg.column_resetValue: "Reset column value" => "Nulstil kolonneværdi"
// pe.markRequired: "Mark as required" => "Markér efter behov"
// pe.removeRequiredMark: "Remove the required mark" => "Fjern det påkrævede mærke"
// p.resetValueIf: "Reset value if" => "Nulstil værdi, hvis"
// lg.question_setValueName: "Set question value" => "Angiv spørgsmålsværdi"
// lg.column_resetValueName: "Reset column value" => "Nulstil kolonneværdi"
// lg.column_setValueName: "Set column value" => "Angiv kolonneværdi"
// lg.setValueExpressionPlaceholder: " An expression whose result will be assigned to the target question." => " Et udtryk, hvis resultat vil blive tildelt målspørgsmålet."
// survey.title: "Title" => "Titel"
// page.title: "Title" => "Titel"
// p.setValueIf: "Set value if" => "Angiv værdi, hvis"
// theme.groupHeader: "Header" => "Header"
// theme.coverTitleForecolor: "Title forecolor" => "Titel forfarve"
// theme.coverOverlapEnabled: "Overlap" => "Overlapning"
// theme.backgroundImageFitFill: "Stretch" => "Stræk"
// theme.backgroundImageFitTile: "Tile" => "Flise"
// theme.headerView: "View" => "Udsigt"
// theme.headerViewBasic: "Basic" => "Grundlæggende"
// theme.headerViewAdvanced: "Advanced" => "Avanceret"
// theme.coverInheritWidthFrom: "Content area width" => "Bredde på indholdsområde"
// theme.coverInheritWidthFromSurvey: "Same as survey" => "Samme som undersøgelse"
// theme.coverInheritWidthFromPage: "Fit to page" => "Tilpas til side"
// theme.coverTextAreaWidth: "Text width" => "Tekstbredde"
// theme.coverBackgroundColorSwitch: "Background color" => "Baggrundsfarve"
// theme.coverBackgroundColorNone: "None" => "Ingen"
// theme.coverBackgroundColorAccentColor: "Accent color" => "Accent farve"
// theme.coverBackgroundColorCustom: "Custom" => "Sædvane"
// theme.horizontalAlignmentLeft: "Left" => "Venstre"
// theme.horizontalAlignmentCenter: "Center" => "Midte"
// theme.horizontalAlignmentRight: "Right" => "Højre"
// theme.verticalAlignmentTop: "Top" => "Top"
// theme.verticalAlignmentMiddle: "Middle" => "Midte"
// theme.verticalAlignmentBottom: "Bottom" => "Bund"
// lg.question_resetValueText: "reset value for question: {0}" => "Nulstil værdi for spørgsmål: {0}"
// lg.question_setValueText: "assign value: {1} to question: {0}" => "Tildel værdi: {1} til spørgsmål: {0}"
// lg.column_resetValueText: "reset cell value for column: {0}" => "Nulstil celleværdi for kolonne: {0}"
// lg.column_setValueText: "assign cell value: {1} to column: {0}" => "Tildel celleværdi: {1} til kolonne: {0}"
// ed.surveyJsonExportButton: "Export" => "Eksport"
// ed.surveyJsonImportButton: "Import" => "Import"
// ed.surveyJsonCopyButton: "Copy to clipboard" => "Kopier til udklipsholder"
// pe.filePlaceholder: "File placeholder text" => "Filpladsholdertekst"
// pe.photoPlaceholder: "Photo placeholder text" => "Eksempeltekst til billeder"
// pe.fileOrPhotoPlaceholder: "File or photo placeholder text" => "Arkiv- eller fotopladsholdertekst"
// pehelp.filePlaceholder: "Applies when \"Source type\" is \"Local files\" or when camera is unavailable" => "Gælder, når \"Kildetype\" er \"Lokale filer\", eller når kameraet ikke er tilgængeligt"
// pehelp.photoPlaceholder: "Applies when \"Source type\" is \"Camera\"." => "Gælder, når \"Kildetype\" er \"Kamera\"."
// pehelp.fileOrPhotoPlaceholder: "Applies when \"Source type\" is \"Local files or camera\"." => "Gælder, når \"Kildetype\" er \"Lokale filer eller kamera\"."
// theme.groupBackground: "Background" => "Baggrund"
// theme.groupAppearance: "Appearance" => "Udseende"
// theme.coverDescriptionForecolor: "Description forecolor" => "Beskrivelse forfarve"
// ed.themeResetConfirmation: "Do you really want to reset the theme? All your customizations will be lost." => "Vil du virkelig nulstille temaet? Alle dine tilpasninger går tabt."
// ed.themeResetConfirmationOk: "Yes, reset the theme" => "Ja, nulstil temaet"
// theme.groupBackground: "Background" => "Baggrund"
// theme.groupAppearance: "Appearance" => "Udseende"
// theme.coverDescriptionForecolor: "Description forecolor" => "Beskrivelse forfarve"
// theme.coverInheritWidthFromContainer: "Fit to container" => "Passer til beholder"
// signaturepad.showPlaceholder: "Show the placeholder" => "Vis pladsholderen"
// signaturepad.placeholder: "Placeholder text" => "Pladsholdertekst"
// theme.surveyDescription: "Survey description font" => "Skrifttype til undersøgelsesbeskrivelse"
// ed.prevFocus: "Focus previous" => "Fokus forrige"
// ed.nextFocus: "Focus next" => "Fokuser næste"
// ed.saveTheme: "Save Theme" => "Gem tema"
// ed.saveThemeTooltip: "Save Theme" => "Gem tema"
// lg.page_requireName: "Make page required" => "Gør siden påkrævet"
// lg.panel_requireName: "Make page required" => "Gør siden påkrævet"
// signaturepad.signatureWidth: "Signature area width" => "Bredde på signaturområde"
// signaturepad.signatureHeight: "Signature area height" => "Højde på signaturområde"
// signaturepad.signatureAutoScaleEnabled: "Auto-scale the signature area" => "Skaler signaturområdet automatisk"
// signaturepad.penMinWidth: "Minimum pen width" => "Mindste bredde på pennen"
// signaturepad.penMaxWidth: "Maximum pen width" => "Maksimal bredde på pennen"
// theme.logoPosition: "Logo position" => "Logo position"
// theme.coverTitlePosition: "Title position" => "Titel position"
// theme.coverDescriptionPosition: "Description position" => "Beskrivelse position"
// ed.propertyGridNoResultsFound: "No results found" => "Ingen resultater fundet"
// pv.leftRight: "Left and right" => "Venstre og højre"
// p.sourceType: "Source type" => "Kilde type"
// p.fitToContainer: "Fit to container" => "Passer til beholder"
// p.setValueExpression: "Set value expression" => "Angiv værdiudtryk"
// ed.choicesLoadedFromWebText: "Choices are loaded from a web service." => "Valg indlæses fra en webtjeneste."
// ed.choicesLoadedFromWebLinkText: "Go to settings" => "Gå til indstillinger"
// ed.choicesLoadedFromWebPreviewTitle: "Preview of loaded choice options" => "Forhåndsvisning af indlæste valgmuligheder"
// pe.eachRowUnique: "Prevent duplicate responses in rows" => "Undgå dublerede svar i rækker"
// theme.advancedMode: "Advanced mode" => "Avanceret tilstand"
// theme.backgroundCornerRadius: "Background and corner radius" => "Baggrund og hjørneradius"
// theme.colorsTitle: "Colors" => "Farver"
// theme.font: "Font" => "Skrifttype"
// theme.lines: "Lines" => "Linjer"
// theme.titleFont: "Title font" => "Titel skrifttype"
// theme.descriptionFont: "Description font" => "Beskrivelse skrifttype"
// theme.shadow: "Shadow effects" => "Skyggeeffekter"
// ed.translateUsigAIFrom: "Translate from: " => "Oversæt fra: "
// pe.showRefuseItem: "Allow the Refuse to Answer option" => "Tillad indstillingen Afvis at svare"
// pe.showDontKnowItem: "Allow the Don't Know option" => "Tillad indstillingen Ved ikke"
// pe.showRefuseItem: "Allow the Refuse to Answer option" => "Tillad indstillingen Afvis at svare"
// pe.showDontKnowItem: "Allow the Don't Know option" => "Tillad indstillingen Ved ikke"
// pv.contain: "Contain" => "Indeholde"
// pv.cover: "Cover" => "Dække"
// pv.fill: "Fill" => "Fylde"
