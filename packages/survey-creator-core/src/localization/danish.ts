import { setupLocale } from "survey-creator-core";

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
  // Creator tabs
  tabs: {
    preview: "Afprøv undersøgelse",
    theme: "Temaer",
    translation: "Oversættelse",
    designer: "Undersøgelsesdesigner",
    json: "JSON Editor",
    logic: "Logik"
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
  toolboxCategories: {
    general: "Generelt",
    choice: "Spørgsmål om valg",
    text: "Spørgsmål om tekstinput",
    containers: "Containere",
    matrix: "Matrix spørgsmål",
    misc: "Misc"
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
    creatorSettingTitle: "Indstillinger for skabere",
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
    defaultV2Theme: "Standard",
    modernTheme: "Moderne",
    defaultTheme: "Standard (ældre)",
    testSurveyAgain: "Afprøv undersøgelse igen",
    testSurveyWidth: "Bredde af undersøgelse: ",
    navigateToMsg: "Du var nødt til at navigere til",
    saveSurvey: "Gem undersøgelse",
    saveSurveyTooltip: "Gem undersøgelse",
    saveTheme: "Gem tema",
    saveThemeTooltip: "Gem tema",
    jsonHideErrors: "Skjul fejl",
    jsonShowErrors: "Vis fejl",
    undo: "Fortryd",
    redo: "Annuller fortryd",
    undoTooltip: "Fortryd seneste ændring",
    redoTooltip: "Fortryd ændringen",
    expandTooltip: "Ekspandere",
    collapseTooltip: "Sammenbrud",
    expandAllTooltip: "Udvid alle",
    collapseAllTooltip: "Skjul alle",
    zoomInTooltip: "Zoom ind",
    zoom100Tooltip: "Zoom til 100 %",
    zoomOutTooltip: "Zoom ud",
    lockQuestionsTooltip: "Lås udvid/skjul tilstand for spørgsmål",
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
    toolboxFilteredTextPlaceholder: "Skriv for at søge...",
    toolboxNoResultsFound: "Ingen resultater fundet",
    propertyGridFilteredTextPlaceholder: "Skriv for at søge...",
    propertyGridNoResultsFound: "Ingen resultater fundet",
    propertyGridPlaceholderTitle: "Begynd at konfigurere formularen",
    propertyGridPlaceholderDescription: "Klik på et kategoriikon for at udforske undersøgelsesindstillinger. Yderligere indstillinger bliver tilgængelige, når du føjer et undersøgelseselement til designoverfladen.",
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
    addLanguageTooltip: "Tilføj sprog",
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
    translationSource: "Kilde: ",
    translationTarget: "Mål: ",
    translationYouTubeNotSupported: "YouTube-links understøttes ikke.",
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
    pagePlaceHolder: "Siden er tom. Træk et element fra værktøjskassen, eller klik på knappen nedenfor.",
    imagePlaceHolder: "Træk og slip et billede her, eller klik på knappen nedenfor, og vælg et billede, der skal uploades",
    surveyPlaceHolderMobile: "Klik på knappen \"Tilføj spørgsmål\" nedenfor for at begynde at oprette din formular.",
    surveyPlaceholderTitle: "Din formular er tom",
    surveyPlaceholderTitleMobile: "Din formular er tom",
    surveyPlaceholderDescription: "Træk et element fra værktøjskassen, eller klik på knappen nedenfor.",
    surveyPlaceholderDescriptionMobile: "Træk et element fra værktøjskassen, eller klik på knappen nedenfor.",
    previewPlaceholderTitle: "Ingen forhåndsvisning",
    previewPlaceholderTitleMobile: "Ingen forhåndsvisning",
    previewPlaceholderDescription: "Undersøgelsen indeholder ingen synlige elementer.",
    previewPlaceholderDescriptionMobile: "Undersøgelsen indeholder ingen synlige elementer.",
    translationsPlaceholderTitle: "Ingen forpligtelser at oversætte",
    translationsPlaceholderTitleMobile: "Ingen forpligtelser at oversætte",
    translationsPlaceholderDescription: "Føj elementer til formularen, eller skift filteret for strenge på værktøjslinjen.",
    translationsPlaceholderDescriptionMobile: "Føj elementer til formularen, eller skift filteret for strenge på værktøjslinjen.",
    pagePlaceHolderMobile: "Klik på knappen \"Tilføj spørgsmål\" nedenfor for at tilføje et nyt element til siden.",
    panelPlaceHolderMobile: "Klik på knappen \"Tilføj spørgsmål\" nedenfor for at tilføje et nyt element til panelet.",
    imagePlaceHolderMobile: "Klik på knappen nedenfor, og vælg et billede, der skal uploades",
    imageChooseImage: "Vælg billede",
    addNewTypeQuestion: "Tilføj {0}", //{0} is localizable question type
    chooseLogoPlaceholder: "[LOGO]",
    choices_Item: "Vare ",
    selectFile: "Vælg en fil",
    removeFile: "Fjern filen",
    lg: {
      addNewItem: "Tilføj ny regel",
      empty_tab: "Opret en regel for at tilpasse undersøgelsens flow.",
      logicPlaceholderTitle: "Ingen logiske regler",
      logicPlaceholderTitleMobile: "Ingen logiske regler",
      logicPlaceholderDescription: "Opret en regel for at tilpasse undersøgelsens flow.",
      logicPlaceholderDescriptionMobile: "Opret en regel for at tilpasse undersøgelsens flow.",
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
      question_resetValueText: "Nulstil værdi for spørgsmål: {0}", //{0} question name.
      question_setValueText: "Tildel værdi: {1} til spørgsmål: {0}",
      column_visibilityText: "Gør kolonne {0} af spørgsmål {1} synlig", //{0} column name, {1} question name
      column_enableText: "Få kolonne {0} af spørgsmål {1} aktivere", //{0} column name, {1} question name
      column_requireText: "Gøre kolonne {0} af spørgsmål {1} påkrævet", //{0} column name, {1} question name
      column_resetValueText: "Nulstil celleværdi for kolonne: {0}", //{0} column name
      column_setValueText: "Tildel celleværdi: {1} til kolonne: {0}", //{0} column name and {1} setValueExpression
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
    panel: {
      name: "Panelets navn",
      title: "Panelets titel",
      description: "Beskrivelse af panelet",
      visibleIf: "Gør panelet synligt, hvis",
      requiredIf: "Gør panelet påkrævet, hvis",
      questionOrder: "Spørgsmålsrækkefølge i panelet",
      page: "Overordnet side",
      startWithNewLine: "Få vist panelet på en ny linje",
      state: "Panelets sammenbrudstilstand",
      width: "Indlejret panelbredde",
      minWidth: "Mindste panelbredde",
      maxWidth: "Maksimal panelbredde",
      showNumber: "Nummerer dette panel"
    },
    panellayoutcolumn: {
      effectiveWidth: "Effektiv bredde, %",
      questionTitleWidth: "Spørgsmålets titelbredde, px"
    },
    paneldynamic: {
      name: "Panelets navn",
      title: "Panelets titel",
      description: "Beskrivelse af panelet",
      visibleIf: "Gør panelet synligt, hvis",
      requiredIf: "Gør panelet påkrævet, hvis",
      page: "Flyt panelet til siden",
      startWithNewLine: "Få vist panelet på en ny linje",
      state: "Panelets sammenbrudstilstand",
      width: "Indlejret panelbredde",
      minWidth: "Mindste panelbredde",
      maxWidth: "Maksimal panelbredde",
      confirmDelete: "Bekræft sletning af panel",
      templateDescription: "Panel beskrivelse mønster",
      templateTitle: "Panelets titelmønster",
      noEntriesText: "Tom paneltekst",
      templateTabTitle: "Fanetitel mønster",
      tabTitlePlaceholder: "Pladsholder til fanetitel",
      templateVisibleIf: "Gør et individuelt panel synligt, hvis",
      showNumber: "Nummerer panelet",
      titleLocation: "Justering af paneltitel",
      descriptionLocation: "Justering af panelbeskrivelse",
      templateQuestionTitleLocation: "Tilpasning af spørgsmålets titel",
      templateQuestionTitleWidth: "Spørgsmålets titelbredde",
      templateErrorLocation: "Justering af fejlmeddelelse",
      newPanelPosition: "Ny panelplacering",
      showRangeInProgress: "Vis statuslinjen",
      keyName: "Undgå dublerede svar i følgende spørgsmål"
    },
    question: {
      name: "Navn på spørgsmål",
      title: "Spørgsmålets titel",
      description: "Beskrivelse af spørgsmål",
      visibleIf: "Gør spørgsmålet synligt, hvis",
      requiredIf: "Foretag spørgsmålet påkrævet, hvis",
      page: "Overordnet side",
      state: "Tilstand for sammenbrud af spørgsmålsfelt",
      showNumber: "Nummerer dette spørgsmål",
      titleLocation: "Tilpasning af spørgsmålets titel",
      descriptionLocation: "Tilpasning af spørgsmålsbeskrivelse",
      errorLocation: "Justering af fejlmeddelelse",
      indent: "Forøg det indre indryk",
      width: "Indbygget spørgsmålsbredde",
      minWidth: "Mindste spørgsmålsbredde",
      maxWidth: "Maksimal spørgsmålsbredde",
      textUpdateMode: "Opdater inputfeltværdi"
    },
    signaturepad: {
      signatureWidth: "Bredde på signaturområde",
      signatureHeight: "Højde på signaturområde",
      signatureAutoScaleEnabled: "Skaler signaturområdet automatisk",
      showPlaceholder: "Vis pladsholderen",
      placeholder: "Pladsholdertekst",
      placeholderReadOnly: "Pladsholdertekst i skrivebeskyttet tilstand eller eksempeltilstand",
      allowClear: "Vis knappen Ryd i signaturområdet",
      penMinWidth: "Mindste bredde på pennen",
      penMaxWidth: "Maksimal bredde på pennen",
      penColor: "Stregfarve"
    },
    comment: {
      rows: "Inputfelthøjde (i linjer)"
    },
    showQuestionNumbers: "Vis spørgsmålsnumre",
    questionStartIndex: "Spørgsmål startindex (1, 2 eller 'A', 'a')",
    expression: {
      name: "Navn på udtryk",
      title: "Udtryk titel",
      description: "Beskrivelse af udtryk",
      expression: "Udtryk"
    },
    trigger: {
      expression: "Udtryk"
    },
    calculatedvalue: {
      expression: "Udtryk"
    },
    // survey templates
    survey: {
      title: "Titel",
      description: "Beskrivelse af undersøgelsen",
      readOnly: "Gør undersøgelsen skrivebeskyttet"
    },
    page: {
      name: "Sidenavn",
      title: "Titel",
      description: "Sidebeskrivelse",
      visibleIf: "Gør siden synlig, hvis",
      requiredIf: "Gør siden påkrævet, hvis",
      timeLimit: "Tidsgrænse for at afslutte siden (i sekunder)",
      questionOrder: "Spørgsmålsrækkefølge på siden"
    },
    matrixdropdowncolumn: {
      name: "Kolonnens navn",
      title: "Kolonnens titel",
      isUnique: "Undgå dublerede svar",
      width: "Kolonnebredde",
      minWidth: "Mindste kolonnebredde",
      rows: "Inputfelthøjde (i linjer)",
      visibleIf: "Gør kolonnen synlig, hvis",
      requiredIf: "Gør kolonnen obligatorisk, hvis",
      showInMultipleColumns: "Hver indstilling i en separat kolonne"
    },
    multipletextitem: {
      name: "Navn",
      title: "Titel"
    },
    masksettings: {
      saveMaskedValue: "Gem maskeret værdi i undersøgelsesresultater"
    },
    patternmask: {
      pattern: "Værdimønster"
    },
    datetimemask: {
      min: "Mindste værdi",
      max: "Maksimal værdi"
    },
    numericmask: {
      allowNegativeValues: "Tillad negative værdier",
      thousandsSeparator: "Tusindtalsseparator",
      decimalSeparator: "Decimalseparator",
      precision: "Værdi præcision",
      min: "Mindste værdi",
      max: "Maksimal værdi"
    },
    currencymask: {
      prefix: "Valutapræfiks",
      suffix: "Suffiks for valuta"
    },
    imageHeight: "Billedhøjde",
    imageWidth: "Billedbredde",
    valueName: "Værdiens navn",
    defaultDisplayValue: "Standardvisningsværdi for dynamiske tekster",
    rateDescriptionLocation: "Justering af etiketter",
    size: "Bredde på inputfelt (i tegn)",
    cellErrorLocation: "Justering af cellefejlmeddelelse",
    enabled: "Aktiveret",
    disabled: "Handicappet",
    inherit: "Arve",
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
    "listIsEmpty@columns": "Du har ikke nogen kolonner endnu",
    "listIsEmpty@gridLayoutColumns": "Du har ikke layoutkolonner endnu",
    "listIsEmpty@rows": "Du har ingen rækker endnu",
    "listIsEmpty@validators": "Du har endnu ingen valideringsregler",
    "listIsEmpty@calculatedValues": "Du har endnu ingen tilpassede variabler",
    "listIsEmpty@triggers": "Du har ingen udløsere endnu",
    "listIsEmpty@navigateToUrlOnCondition": "Du har ingen links endnu",
    "listIsEmpty@pages": "Du har ingen sider endnu",
    "addNew@choices": "Tilføj et valg",
    "addNew@columns": "Tilføj ny kolonne",
    "addNew@rows": "Tilføj ny række",
    "addNew@validators": "Tilføj ny regel",
    "addNew@calculatedValues": "Tilføj ny variabel",
    "addNew@triggers": "Tilføj ny udløser",
    "addNew@navigateToUrlOnCondition": "Tilføj ny webadresse",
    "addNew@pages": "Tilføj ny side",
    expressionIsEmpty: "Udtrykket er tomt",
    value: "Værdi",
    text: "Tekst",
    rowid: "Række ID",
    imageLink: "Billedlink",
    columnEdit: "Rediger kolonne: {0}",
    itemEdit: "Redigér: {0}",
    url: "URL",
    path: "Sti",
    choicesbyurl: {
      url: "Webtjenestens URL-adresse",
      valueName: "Hent værdier fra følgende JSON-felt"
    },
    titleName: "Titelnavn",
    imageLinkName: "Hent URL-adresser til billeder fra følgende JSON-felt",
    allowEmptyResponse: "Tillad tomt svar",
    titlePlaceholder: "Titel",
    surveyTitlePlaceholder: "Undersøgelsens titel",
    pageTitlePlaceholder: "Side {num}",
    startPageTitlePlaceholder: "Startside",
    descriptionPlaceholder: "Beskrivelse",
    surveyDescriptionPlaceholder: "Beskrivelse",
    pageDescriptionPlaceholder: "Beskrivelse",
    textWrapEnabled: "Valg af wrap",
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
    allowCustomChoices: "Tillad brugerdefinerede valg",
    visible: "Er synlig?",
    isRequired: "Er påkrævet?",
    markRequired: "Markér efter behov",
    removeRequiredMark: "Fjern det påkrævede mærke",
    eachRowRequired: "Kræv svar for alle rækker",
    eachRowUnique: "Undgå dublerede svar i rækker",
    requiredErrorText: "Fejlmeddelelsen \"Påkrævet\"",
    startWithNewLine: "Skal starte med ny linie?",
    rows: "Antal rækker",
    cols: "Kolonner",
    placeholder: "Hint-tekst",
    showPreview: "Vises forhåndsvisning af billeder?",
    storeDataAsText: "Gem filindhold i JSON-resultat som tekst",
    maxSize: "Maksimal filstørrelse i bytes",
    rowCount: "Antal rækker",
    columnLayout: "Kolonnelayout",
    addRowButtonLocation: "Tilføj række knapplacering",
    transposeData: "Transponere rækker til kolonner",
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
    clearInvisibleValues: "Fjern usynlige værdier",
    cookieName: "Cookienavn (for at undgå at afvikle undersøgelsen to gange lokalt)",
    partialSendEnabled: "Send undersøgelsesresultatet ved næste side",
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
    navigationButtonsLocation: "Justering af navigationsknapper",
    showPrevButton: "Vis forrige knap (brugeren må gå tilbage til forrige side)",
    firstPageIsStartPage: "Den første side in undersøgelsen er starten på undersøgelsen.",
    showCompletePage: "Vis afslutningssiden til slut (completedHtml)",
    autoAdvanceEnabled: "Gå til næste side automatisk når alle spørgsmål er besvaret",
    autoAdvanceAllowComplete: "Udfyld undersøgelsen automatisk",
    showProgressBar: "Vis fremdriftslinje",
    progressBarLocation: "Justering af statuslinje",
    questionTitleLocation: "Spørgsmålstitel placering",
    questionTitleWidth: "Spørgsmålets titelbredde",
    requiredMark: "Påkrævet spørgsmålssymbol(er)",
    questionTitleTemplate: "Spørgsmålstitel template, standard er: '{no}. {require} {title}'",
    questionErrorLocation: "Spørgsmålsfejl placering",
    autoFocusFirstQuestion: "Fokusér første spørgsmål ved sideskift",
    questionOrder: "Rækkefølge af spørgsmål på siden",
    timeLimit: "Maximal tid til at gennemføre undersøgelsen",
    timeLimitPerPage: "Maximal tid til at gennemføre en side i undersøgelsen",
    showTimer: "Brug en timer",
    timerLocation: "Vis tidspanel",
    timerInfoMode: "Vis tidspanel tilstand",
    renderMode: "Renderingstilstand",
    allowAddPanel: "Tillad at tilføje et panel",
    allowRemovePanel: "Tillad at fjerne et panel",
    addPanelText: "Tilføj panel tekst",
    removePanelText: "Fjern panel tekst",
    isSinglePage: "Vis alle elementer på én side",
    html: "HTML-markering",
    setValue: "Svare",
    dataFormat: "Billedformat",
    allowAddRows: "Tillad tilføjelse af rækker",
    allowRemoveRows: "Tillad fjernelse af rækker",
    allowRowReorder: "Tillad træk og slip af rækker",
    responsiveImageSizeHelp: "Gælder ikke, hvis du angiver den nøjagtige billedbredde eller -højde.",
    minImageWidth: "Mindste billedbredde",
    maxImageWidth: "Maksimal billedbredde",
    minImageHeight: "Mindste billedhøjde",
    maxImageHeight: "Maksimal billedhøjde",
    minValue: "Mindste værdi",
    maxValue: "Maksimal værdi",
    caseInsensitive: "Der skelnes ikke mellem store og små bogstaver",
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
    maxCommentLength: "Maksimal kommentarlængde (i tegn)",
    commentAreaRows: "Højde på kommentarområdet (i linjer)",
    autoGrowComment: "Udvid automatisk kommentarområdet, hvis det er nødvendigt",
    allowResizeComment: "Tillad brugere at ændre størrelsen på tekstområder",
    textUpdateMode: "Opdater værdi for tekstspørgsmål",
    maskType: "Type af inputmaske",
    autoFocusFirstError: "Sæt fokus på det første ugyldige svar",
    checkErrorsMode: "Kør validering",
    validateVisitedEmptyFields: "Validere tomme felter ved mistet fokus",
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
    searchMode: "Søgetilstand",
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
    panelCount: "Indledende antal paneler",
    minPanelCount: "Mindste antal paneler",
    maxPanelCount: "Maksimalt antal paneler",
    panelsState: "Udvid tilstand for indvendigt panel",
    prevPanelText: "Forrige værktøjstip til panelknap",
    nextPanelText: "Værktøjstip til knappen Næste panel",
    removePanelButtonLocation: "Fjern placering af panelknap",
    hideIfRowsEmpty: "Skjul spørgsmålet, hvis der ikke er nogen rækker",
    hideColumnsIfEmpty: "Skjule kolonner, hvis der ikke er nogen rækker",
    rateValues: "Tilpassede satsværdier",
    rateCount: "Antal satser",
    autoGenerate: "Hvordan angives satsværdier?",
    hideIfChoicesEmpty: "Skjul spørgsmålet, hvis det ikke indeholder nogen valgmuligheder",
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
    logoWidth: "Logobredde (i CSS-accepterede værdier)",
    logoHeight: "Logohøjde (i CSS-accepterede værdier)",
    readOnly: "Skrivebeskyttet",
    enableIf: "Redigerbar, hvis",
    noRowsText: "Meddelelsen \"Ingen rækker\"",
    separateSpecialChoices: "Adskil særlige valg (Ingen, Andet, Vælg alle)",
    choicesFromQuestion: "Kopiér valg fra følgende spørgsmål",
    choicesFromQuestionMode: "Hvilke valgmuligheder skal kopieres?",
    choiceValuesFromQuestion: "Bruge værdier fra følgende matrixkolonne eller panelspørgsmål som valg-id'er",
    choiceTextsFromQuestion: "Brug værdier fra følgende matrixkolonne eller panelspørgsmål som valgtekster",
    progressBarShowPageTitles: "Vis sidetitler på statuslinjen",
    progressBarShowPageNumbers: "Vis sidetal på statuslinjen",
    showCommentArea: "Vis kommentarområdet",
    commentPlaceholder: "Pladsholder til kommentarområde",
    displayRateDescriptionsAsExtremeItems: "Beskrivelser af visningshastighed som ekstreme værdier",
    rowOrder: "Rækkefølge af rækker",
    columnsLayout: "Kolonnelayout",
    columnColCount: "Antal indlejrede kolonner",
    correctAnswer: "Korrekt svar",
    defaultPanelValue: "Standardværdier",
    cells: "Celle tekster",
    fileInputPlaceholder: "Vælg en fil, eller indsæt et fillink...",
    keyName: "Nøglekolonne",
    itemvalue: {
      visibleIf: "Gør indstillingen synlig, hvis",
      enableIf: "Gør indstillingen valgbar, hvis"
    },
    "itemvalue@rows": {
      visibleIf: "Gør rækken synlig, hvis",
      enableIf: "Gør rækken redigerbar, hvis"
    },
    imageitemvalue: {
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
    previewMode: "Forhåndsvisning tilstand",
    gridLayoutEnabled: "Aktivere gitterlayoutet",
    gridLayoutColumns: "Kolonner med gitterlayout",
    maskSettings: "Indstillinger for maske",
    detailErrorLocation: "Justering af fejlmeddelelse om rækkeudvidelse",
    // Creator tabs
    tabs: {
      panel: {
        layout: "Panel Layout"
      },
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
      mask: "Indstillinger for inputmaske",
      layout: {
        panel: "Layout",
        question: "Layout",
        base: "Layout"
      },
      data: "Data",
      validation: "Validering",
      cells: "Celle tekster",
      showOnCompleted: "Undersøgelsen er fuldført",
      logo: "Logo i undersøgelsens titel",
      slider: "Skyderen",
      expression: "Udtryk",
      questionSettings: "Indstillinger for spørgsmål",
      header: "Header",
      background: "Baggrund",
      appearance: "Udseende",
      accentColors: "Accentfarver",
      surfaceBackground: "Overflade baggrund",
      scaling: "Skalering",
      others: "Andre"
    },
    editProperty: "Rediger egenskab '{0}'",
    items: "[ Element: {0} ]",
    choicesVisibleIf: "Valg er synlige, hvis",
    choicesEnableIf: "Valg kan vælges, hvis:",
    columnsEnableIf: "Kolonner er synlige, hvis",
    rowsEnableIf: "Rækker er synlige, hvis",
    innerIndent: "Tilføj indre indrykninger",
    copyDefaultValueFromLastEntry: "Brug svar fra sidste post som standard",
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
    verticalAlign: "Lodret justering",
    alternateRows: "Alternative rækker",
    columnsVisibleIf: "Kolonner er synlige, hvis",
    rowsVisibleIf: "Rækker er synlige, hvis",
    otherPlaceholder: "Pladsholder til kommentarområde",
    filePlaceholder: "Filpladsholdertekst",
    photoPlaceholder: "Eksempeltekst til billeder",
    fileOrPhotoPlaceholder: "Arkiv- eller fotopladsholdertekst",
    rateType: "Sats type",
    url_placeholder: "Eks.: https://api.example.com/books",
    path_placeholder: "Eks.: kategorier.fiktion",
    questionStartIndex_placeholder: "Eks.: a)",
    width_placeholder: "Eks.: 6in",
    minWidth_placeholder: "Eks.: 600px",
    maxWidth_placeholder: "Eks.: 50%",
    imageHeight_placeholder: "auto",
    imageWidth_placeholder: "auto",
    itemTitleWidth_placeholder: "Eks.: 100px",
    theme: {
      themeName: "Tema",
      isPanelless: "Spørgsmål udseende",
      editorPanel: "Baggrund og hjørneradius",
      questionPanel: "Baggrund og hjørneradius",
      primaryColor: "Accent farve",
      panelBackgroundTransparency: "Opacitet af panelets baggrund",
      questionBackgroundTransparency: "Spørgsmål baggrundsuigennemsigtighed",
      fontSize: "Skrifttypestørrelse",
      scale: "Skæl",
      cornerRadius: "Hjørne radius",
      advancedMode: "Avanceret tilstand",
      pageTitle: "Titel skrifttype",
      pageDescription: "Beskrivelse skrifttype",
      questionTitle: "Titel skrifttype",
      questionDescription: "Beskrivelse skrifttype",
      editorFont: "Skrifttype",
      backgroundOpacity: "Opacitet",
      "--sjs-font-family": "Skrifttypefamilie",
      "--sjs-general-backcolor-dim": "Baggrundsfarve",
      "--sjs-primary-backcolor": "Accent baggrund",
      "--sjs-primary-forecolor": "Accent forgrund",
      "--sjs-special-red": "Fejlmeddelelser",
      "--sjs-shadow-small": "Skyggeeffekter",
      "--sjs-shadow-inner": "Skyggeeffekter",
      "--sjs-border-default": "Farver"
    },
    "header@header": {
      headerView: "Udsigt",
      logoPosition: "Logo position",
      surveyTitle: "Skrifttype for undersøgelsestitel",
      surveyDescription: "Skrifttype til undersøgelsesbeskrivelse",
      headerTitle: "Skrifttype for undersøgelsestitel",
      headerDescription: "Skrifttype til undersøgelsesbeskrivelse",
      inheritWidthFrom: "Bredde på indholdsområde",
      textAreaWidth: "Tekstbredde",
      backgroundColorSwitch: "Baggrundsfarve",
      backgroundImage: "Baggrundsbillede",
      backgroundImageOpacity: "Opacitet",
      overlapEnabled: "Overlapning",
      logoPositionX: "Logo position",
      titlePositionX: "Titel position",
      descriptionPositionX: "Beskrivelse position"
    }
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
    selected: "Valgte",
    unselected: "Markerede",
    decimal: "decimal",
    currency: "valuta",
    percent: "procent",
    firstExpanded: "firstExpanded",
    off: "off",
    list: "list",
    carousel: "Karrusel",
    tab: "Faner",
    progressTop: "progressTop",
    progressBottom: "progressBottom",
    progressTopBottom: "progressTopBottom",
    horizontal: "horizontal",
    vertical: "vertical",
    top: "top",
    bottom: "bottom",
    topBottom: "top and bottom",
    both: "Begge",
    left: "left",
    right: "Højre",
    center: "Midte",
    leftRight: "Venstre og højre",
    middle: "Midte",
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
    edit: "edit",
    display: "display",
    contain: "Indeholde",
    cover: "Dække",
    fill: "Fylde",
    next: "Næste",
    last: "Sidst",
    onComplete: "onComplete",
    onHidden: "onHidden",
    onHiddenContainer: "Når spørgsmålet eller dets panel/side bliver skjult",
    clearInvisibleValues: {
      none: "Aldrig"
    },
    clearIfInvisible: {
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
    autocomplete: {
      name: "Fulde navn",
      "honorific-prefix": "Præfiks",
      "given-name": "Fornavn",
      "additional-name": "Mellemnavn",
      "family-name": "Efternavn",
      "honorific-suffix": "Suffiks",
      nickname: "Kælenavn",
      "organization-title": "Stillingsbetegnelse",
      username: "Brugernavn",
      "new-password": "Ny adgangskode",
      "current-password": "Nuværende adgangskode",
      organization: "Organisationens navn",
      "street-address": "Fuld gadeadresse",
      "address-line1": "Adresse Linje 1",
      "address-line2": "Adresselinje 2",
      "address-line3": "Adresselinje 3",
      "address-level4": "Niveau 4-adresse",
      "address-level3": "Niveau 3-adresse",
      "address-level2": "Niveau 2-adresse",
      "address-level1": "Niveau 1-adresse",
      country: "Landekode",
      "country-name": "Landets navn",
      "postal-code": "Postnummer",
      "cc-name": "Kortindehaverens navn",
      "cc-given-name": "Kortholder Fornavn",
      "cc-additional-name": "Kortholder mellemnavn",
      "cc-family-name": "Kortholderens efternavn",
      "cc-number": "Kreditkortnummer",
      "cc-exp": "Udløbsdato",
      "cc-exp-month": "Udløbsmåned",
      "cc-exp-year": "Udløbsår",
      "cc-csc": "Kortets sikkerhedskode",
      "cc-type": "Kreditkort type",
      "transaction-currency": "Transaktionens valuta",
      "transaction-amount": "Posteringsbeløb",
      language: "Foretrukket sprog",
      bday: "Fødselsdag",
      "bday-day": "Fødselsdag",
      "bday-month": "Fødselsdag måned",
      "bday-year": "Fødselsdag År",
      sex: "Køn",
      url: "URL-adresse til websted",
      photo: "Profilfoto",
      tel: "Telefonnummer",
      "tel-country-code": "Landekode til telefon",
      "tel-national": "Nationalt telefonnummer",
      "tel-area-code": "Områdenummer",
      "tel-local": "Lokalt telefonnummer",
      "tel-local-prefix": "Lokalt telefonpræfiks",
      "tel-local-suffix": "Lokalt telefonsuffiks",
      "tel-extension": "Telefon Lokalnummer",
      email: "E-mailadresse",
      impp: "Protokol til onlinemeddelelser"
    },
    maskType: {
      none: "Ingen",
      pattern: "Mønster",
      numeric: "Numerisk",
      datetime: "Dato og klokkeslæt",
      currency: "Valuta"
    },
    inputTextAlignment: {
      auto: "Auto",
      left: "Venstre",
      right: "Højre"
    },
    all: "all",
    page: "page",
    survey: "survey",
    onNextPage: "onNextPage",
    onValueChanged: "onValueChanged",
    onValueChanging: "Før et svar ændres",
    questionsOnPageMode: {
      standard: "Oprindelig struktur",
      singlePage: "Vis alle spørgsmål på én side",
      questionPerPage: "Vis et enkelt spørgsmål pr. side"
    },
    noPreview: "Ingen forhåndsvisning",
    showAllQuestions: "Vis alle spørgsmål",
    showAnsweredQuestions: "Vis kun besvarede spørgsmål",
    allQuestions: "Vis alle spørgsmål",
    answeredQuestions: "Vis kun besvarede spørgsmål",
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
    auto: "Auto",
    showNavigationButtons: {
      none: "Skjult"
    },
    timerInfoMode: {
      combined: "Begge"
    },
    addRowButtonLocation: {
      default: "Afhænger af matrixlayout"
    },
    panelsState: {
      default: "Brugere kan ikke udvide eller skjule paneler",
      collapsed: "Alle paneler er skjult",
      expanded: "Alle paneler er udvidet",
      firstExpanded: "Først udvidet"
    },
    widthMode: {
      static: "Statisk",
      responsive: "Lydhør"
    },
    contentMode: {
      image: "Billede",
      video: "Video",
      youtube: "YouTube"
    },
    displayMode: {
      buttons: "Knapper",
      dropdown: "Rullemenu"
    },
    rateColorMode: {
      default: "Standard",
      scale: "Skæl"
    },
    scaleColorMode: {
      monochrome: "Monokrom",
      colored: "Farvet"
    },
    autoGenerate: {
      "true": "Frembringe",
      "false": "Indtast manuelt"
    },
    rateType: {
      labels: "Etiketter",
      stars: "Stjerner",
      smileys: "Smileys"
    },
    state: {
      default: "Låst"
    },
    showQuestionNumbers: {
      default: "Automatisk nummerering",
      on: "Automatisk nummerering",
      onPage: "Nulstil på hver side",
      onpanel: "Nulstil på hvert panel",
      onPanel: "Nulstil på hvert panel",
      recursive: "Rekursiv nummerering",
      onSurvey: "Fortsæt på tværs af undersøgelsen",
      off: "Ingen nummerering"
    },
    descriptionLocation: {
      underTitle: "Under spørgsmålets titel",
      underInput: "Under indtastningsfeltet"
    },
    selectToRankAreasLayout: {
      horizontal: "Ved siden af valgmuligheder",
      vertical: "Ovenstående valg"
    },
    displayStyle: {
      decimal: "Decimal",
      currency: "Valuta",
      percent: "Procentdel",
      date: "Dato"
    },
    totalDisplayStyle: {
      decimal: "Decimal",
      currency: "Valuta",
      percent: "Procentdel",
      date: "Dato"
    },
    rowOrder: {
      initial: "Oprindelig"
    },
    questionOrder: {
      initial: "Oprindelig"
    },
    progressBarLocation: {
      top: "Top",
      bottom: "Bund",
      topbottom: "Top og bund",
      aboveheader: "Over overskriften",
      belowheader: "Under overskriften",
      off: "Skjult"
    },
    sum: "Sum",
    count: "Tælle",
    min: "Min.",
    max: "Maks",
    avg: "Avg",
    searchMode: {
      contains: "Indeholder",
      startsWith: "Begynder med"
    },
    backgroundImageFit: {
      auto: "Auto",
      cover: "Dække",
      contain: "Indeholde",
      fill: "Stræk",
      tile: "Flise"
    },
    backgroundImageAttachment: {
      fixed: "Fast",
      scroll: "Rulle"
    },
    headerView: {
      basic: "Grundlæggende",
      advanced: "Avanceret"
    },
    inheritWidthFrom: {
      survey: "Samme som undersøgelse",
      container: "Passer til beholder"
    },
    backgroundColorSwitch: {
      none: "Ingen",
      accentColor: "Accent farve",
      custom: "Sædvane"
    },
    colorPalette: {
      light: "Lys",
      dark: "Mørk"
    },
    isPanelless: {
      "false": "Standard",
      "true": "Uden paneler"
    },
    progressBarInheritWidthFrom: {
      survey: "Samme som undersøgelse",
      container: "Samme som container"
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
  peplaceholder: {
    patternmask: {
      pattern: "Ex.: +1(999)-999-99-99"
    },
    datetimemask: {
      pattern: "Ex.: mm/dd/yyyy"
    },
    currencymask: {
      prefix: "Ex.: $",
      suffix: "Ex.: USD"
    },
    panelbase: {
      questionTitleWidth: "Eks.: 200px"
    },
    panellayoutcolumn: {
      effectiveWidth: "Eks.: 30%",
      questionTitleWidth: "Eks.: 200px"
    }
  },
  pehelp: {
    panel: {
      name: "Et panel-id, der ikke er synligt for svarpersonerne.",
      description: "Skriv en undertitel til panelet.",
      visibleIf: "Brug tryllestavsikonet til at indstille en betinget regel, der bestemmer panelets synlighed.",
      enableIf: "Brug tryllestavsikonet til at indstille en betinget regel, der deaktiverer panelets skrivebeskyttede tilstand.",
      requiredIf: "Brug tryllestavsikonet til at angive en betinget regel, der forhindrer indsendelse af undersøgelser, medmindre mindst ét indlejret spørgsmål har et svar.",
      questionTitleLocation: "Gælder for alle spørgsmål i dette panel. Hvis du vil tilsidesætte denne indstilling, skal du definere regler for titeljustering for individuelle spørgsmål. Indstillingen \"Nedarv\" anvender indstillingen på sideniveau (hvis angivet) eller undersøgelsesniveau (\"Top\" som standard).",
      questionTitleWidth: "Angiver ensartet bredde for spørgsmålstitler, når de er justeret til venstre for deres spørgsmålsbokse. Accepterer CSS-værdier (px, %, in, pt osv.).",
      questionErrorLocation: "Angiver placeringen af en fejlmeddelelse i forhold til alle spørgsmål i panelet. Indstillingen \"Nedarv\" anvender indstillingen for sideniveau (hvis angivet) eller undersøgelsesniveau.",
      questionOrder: "Bevarer den oprindelige rækkefølge af spørgsmål eller randomiserer dem. Indstillingen \"Nedarv\" anvender indstillingen for sideniveau (hvis angivet) eller undersøgelsesniveau.",
      page: "Flytter panelet til slutningen af en markeret side.",
      innerIndent: "Tilføjer mellemrum eller margen mellem panelindholdet og panelboksens venstre kant.",
      startWithNewLine: "Fjern markeringen for at få vist panelet på én linje med det forrige spørgsmål eller panel. Indstillingen gælder ikke, hvis panelet er det første element i formularen.",
      state: "Vælg mellem: \"Udvidet\" - panelet vises fuldt ud og kan skjules; \"Skjult\" - panelet viser kun titlen og beskrivelsen og kan udvides; \"Låst\" - panelet vises fuldt ud og kan ikke skjules.",
      width: "Indstiller panelets bredde i forhold til andre undersøgelseselementer på samme linje. Accepterer CSS-værdier (px, %, in, pt osv.).",
      showQuestionNumbers: "Tildeler numre til spørgsmål, der er indlejret i dette panel.",
      effectiveColSpan: "Angiver, hvor mange kolonner dette panel strækker sig over i gitterlayoutet.",
      gridLayoutColumns: "Denne tabel giver dig mulighed for at konfigurere hver gitterkolonne i panelet. Den indstiller automatisk breddeprocenten for hver kolonne baseret på det maksimale antal elementer i en række. Hvis du vil tilpasse gitterlayoutet, skal du manuelt justere disse værdier og definere titelbredden for alle spørgsmål i hver kolonne."
    },
    paneldynamic: {
      name: "Et panel-id, der ikke er synligt for svarpersonerne.",
      description: "Skriv en undertitel til panelet.",
      visibleIf: "Brug tryllestavsikonet til at indstille en betinget regel, der bestemmer panelets synlighed.",
      enableIf: "Brug tryllestavsikonet til at indstille en betinget regel, der deaktiverer panelets skrivebeskyttede tilstand.",
      requiredIf: "Brug tryllestavsikonet til at angive en betinget regel, der forhindrer indsendelse af undersøgelser, medmindre mindst ét indlejret spørgsmål har et svar.",
      templateQuestionTitleLocation: "Gælder for alle spørgsmål i dette panel. Hvis du vil tilsidesætte denne indstilling, skal du definere regler for titeljustering for individuelle spørgsmål. Indstillingen \"Nedarv\" anvender indstillingen på sideniveau (hvis angivet) eller undersøgelsesniveau (\"Top\" som standard).",
      templateQuestionTitleWidth: "Indstiller ensartet bredde for spørgsmålstitler, når de er justeret til venstre for deres spørgsmålsfelter. Accepterer CSS-værdier (px, %, in, pt osv.).",
      templateErrorLocation: "Angiver placeringen af en fejlmeddelelse i forhold til et spørgsmål med ugyldigt input. Vælg mellem: \"Top\" - en fejltekst placeres øverst i spørgsmålsfeltet; \"Nederst\" - en fejltekst placeres nederst i spørgsmålsfeltet. Indstillingen \"Nedarv\" anvender indstillingen på sideniveau (hvis angivet) eller undersøgelsesniveau (\"Top\" som standard).",
      errorLocation: "Angiver placeringen af en fejlmeddelelse i forhold til alle spørgsmål i panelet. Indstillingen \"Nedarv\" anvender indstillingen for sideniveau (hvis angivet) eller undersøgelsesniveau.",
      page: "Flytter panelet til slutningen af en markeret side.",
      innerIndent: "Tilføjer mellemrum eller margen mellem panelindholdet og panelboksens venstre kant.",
      startWithNewLine: "Fjern markeringen for at få vist panelet på én linje med det forrige spørgsmål eller panel. Indstillingen gælder ikke, hvis panelet er det første element i formularen.",
      state: "Vælg mellem: \"Udvidet\" - panelet vises fuldt ud og kan skjules; \"Skjult\" - panelet viser kun titlen og beskrivelsen og kan udvides; \"Låst\" - panelet vises fuldt ud og kan ikke skjules.",
      width: "Indstiller panelets bredde i forhold til andre undersøgelseselementer på samme linje. Accepterer CSS-værdier (px, %, in, pt osv.).",
      templateTitle: "Indtast en skabelon til dynamiske paneltitler. Brug {panelIndex} til panelets generelle placering og {visiblePanelIndex} til dets rækkefølge blandt synlige paneler. Indsæt disse pladsholdere i mønsteret for at tilføje automatisk nummerering.",
      templateTabTitle: "Indtast en skabelon til fanetitler. Brug {panelIndex} til et panels generelle placering og {visiblePanelIndex} til dets rækkefølge blandt synlige paneler. Indsæt disse pladsholdere i mønsteret for at tilføje automatisk nummerering.",
      tabTitlePlaceholder: "En reservetekst til fanetitler, der gælder, når fanetitelmønsteret ikke giver en meningsfuld værdi.",
      templateVisibleIf: "Denne indstilling giver dig mulighed for at styre synligheden af individuelle paneler i det dynamiske panel. Brug pladsholderen '{panel}' til at referere til det aktuelle panel i dit udtryk.",
      titleLocation: "Denne indstilling nedarves automatisk af alle spørgsmål i dette panel. Hvis du vil tilsidesætte denne indstilling, skal du definere regler for titeljustering for individuelle spørgsmål. Indstillingen \"Nedarv\" anvender indstillingen på sideniveau (hvis angivet) eller undersøgelsesniveau (\"Top\" som standard).",
      descriptionLocation: "Indstillingen \"Nedarv\" anvender indstillingen på sideniveau (hvis angivet) eller undersøgelsesniveau (\"Under paneltitlen\" som standard).",
      newPanelPosition: "Definerer placeringen af et nyligt tilføjet panel. Som standard tilføjes nye paneler til slutningen. Vælg \"Næste\" for at indsætte et nyt panel efter det aktuelle.",
      copyDefaultValueFromLastEntry: "Duplikerer svar fra det sidste panel og tildeler dem til det næste tilføjede dynamiske panel.",
      keyName: "Henvis til et spørgsmålsnavn for at kræve, at en bruger giver et entydigt svar på dette spørgsmål i hvert panel."
    },
    copyDefaultValueFromLastEntry: "Dublerer svar fra den sidste række og tildeler dem til den næste tilføjede dynamiske række.",
    defaultValueExpression: "Med denne indstilling kan du tildele en standardsvarværdi baseret på et udtryk. Udtrykket kan omfatte grundlæggende beregninger - '{q1_id} + {q2_id}', booleske udtryk, såsom '{alder} > 60' og funktioner: 'iif()', 'today()', 'age()', 'min()', 'max()', 'avg()' osv. Den værdi, der bestemmes af dette udtryk, fungerer som den oprindelige standardværdi, der kan tilsidesættes af svarpersonens manuelle input.",
    resetValueIf: "Brug tryllestavsikonet til at angive en betinget regel, der bestemmer, hvornår en svarpersons input nulstilles til værdien baseret på værdien \"Standardværdiudtryk\" eller \"Angiv værdiudtryk\" eller til værdien \"Standardsvar\" (hvis en af dem er angivet).",
    setValueIf: "Brug tryllestavsikonet til at indstille en betinget regel, der bestemmer, hvornår \"Indstil værdiudtryk\" skal køres, og tildele den resulterende værdi dynamisk som et svar.",
    setValueExpression: "Angiv et udtryk, der definerer den værdi, der skal angives, når betingelserne i reglen \"Angiv værdi hvis\" er opfyldt. Udtrykket kan omfatte grundlæggende beregninger - '{q1_id} + {q2_id}', booleske udtryk, såsom '{alder} > 60' og funktioner: 'iif()', 'today()', 'age()', 'min()', 'max()', 'avg()' osv. Den værdi, der bestemmes af dette udtryk, kan tilsidesættes af svarpersonens manuelle input.",
    gridLayoutEnabled: "Survey Creator giver dig mulighed for manuelt at justere de indbyggede bredder af formularelementer for at styre layoutet. Hvis dette ikke giver det ønskede resultat, kan du aktivere gitterlayoutet, som strukturerer formularelementer ved hjælp af et kolonnebaseret system. For at konfigurere layoutkolonner skal du vælge en side eller et panel og bruge tabellen \"Spørgsmålsindstillinger\" → \"Gitterkolonner\". For at justere, hvor mange kolonner et spørgsmål strækker sig over, skal du vælge det og indstille den ønskede værdi i feltet \"Layout\" → \"Kolonnespænd\".",
    question: {
      name: "Et spørgsmåls-id, der ikke er synligt for svarpersonerne.",
      description: "Skriv et spørgsmåls undertitel.",
      visibleIf: "Brug tryllestavsikonet til at angive en betinget regel, der bestemmer spørgsmålets synlighed.",
      enableIf: "Brug tryllestavsikonet til at angive en betinget regel, der deaktiverer skrivebeskyttet tilstand for spørgsmålet.",
      requiredIf: "Brug tryllestavsikonet til at angive en betinget regel, der forhindrer undersøgelse i at gå videre eller blive sendt, medmindre spørgsmålet blev besvaret.",
      startWithNewLine: "Fjern markeringen for at få vist spørgsmålet på én linje med det forrige spørgsmål eller panel. Indstillingen gælder ikke, hvis spørgsmålet er det første element i formularen.",
      page: "Flytter spørgsmålet til slutningen af en markeret side.",
      state: "Vælg mellem: \"Udvidet\" - spørgsmålsfeltet vises fuldt ud og kan skjules; \"Skjult\" - spørgsmålsfeltet viser kun titlen og beskrivelsen og kan udvides; \"Låst\" - spørgsmålsfeltet vises fuldt ud og kan ikke skjules.",
      titleLocation: "Tilsidesætter regler for titeljustering, der er defineret på panel-, side- eller undersøgelsesniveau. Indstillingen \"Nedarv\" anvender alle indstillinger på højere niveau (hvis indstillet) eller indstilling på undersøgelsesniveau (\"Top\" som standard).",
      descriptionLocation: "Indstillingen \"Nedarv\" anvender indstillingen på undersøgelsesniveau (\"Under spørgsmålets titel\" som standard).",
      errorLocation: "Angiver placeringen af en fejlmeddelelse i forhold til spørgsmålet med ugyldigt input. Vælg mellem: \"Top\" - en fejltekst placeres øverst i spørgsmålsfeltet; \"Nederst\" - en fejltekst placeres nederst i spørgsmålsfeltet. Indstillingen \"Nedarv\" anvender indstillingen på undersøgelsesniveau (\"Top\" som standard).",
      indent: "Tilføjer mellemrum eller margen mellem spørgsmålsindholdet og spørgsmålsfeltets venstre kant.",
      width: "Angiver bredden af spørgsmålet i forhold til andre undersøgelseselementer på samme linje. Accepterer CSS-værdier (px, %, in, pt osv.).",
      surveyvalidator: {
        expression: "Brug tryllestavsikonet til at angive en valideringsregel for spørgsmålet."
      },
      textUpdateMode: "Vælg mellem: \"Ved tabt fokus\" - værdien opdateres, når indtastningsfeltet mister fokus; \"Mens du skriver\" - værdien opdateres i realtid, da brugerne skriver. Indstillingen \"Nedarv\" anvender indstillingen på undersøgelsesniveau (\"Ved mistet fokus\" som standard).",
      url: "Du kan bruge enhver webtjeneste som datakilde til multiple choice-spørgsmål. Hvis du vil udfylde valgværdier, skal du angive URL-adressen på den tjeneste, der leverer dataene.",
      searchMode: "En sammenligningshandling, der bruges til at filtrere rullelisten.",
      textWrapEnabled: "Lange tekster i valgmuligheder genererer automatisk linjeskift, så de passer ind i rullemenuen. Fjern markeringen, hvis teksterne skal klippes.",
      effectiveColSpan: "Angiver, hvor mange kolonner dette spørgsmål strækker sig over i gitterlayoutet."
    },
    signaturepad: {
      signatureWidth: "Indstiller bredden på det viste signaturområde og det resulterende billede.",
      signatureHeight: "Indstiller højden på det viste signaturområde og det resulterende billede.",
      signatureAutoScaleEnabled: "Vælg, om signaturområdet skal udfylde al tilgængelig plads i spørgsmålsfeltet, samtidig med at standardformatet 3:2 bevares. Når brugerdefinerede bredde- og højdeværdier er angivet, bevarer indstillingen højde-bredde-forholdet for disse dimensioner."
    },
    file: {
      imageHeight: "Justerer billedets højde i undersøgelsesresultaterne.",
      imageWidth: "Justerer billedets bredde i undersøgelsesresultaterne.",
      allowImagesPreview: "Viser miniaturebilleder for uploadede filer, når det er muligt. Fjern markeringen, hvis du vil vise filikoner i stedet."
    },
    image: {
      contentMode: "Indstillingen \"Auto\" bestemmer automatisk den passende tilstand til visning - Billede, Video eller YouTube - baseret på den angivne kilde-URL."
    },
    imagepicker: {
      imageHeight: "Tilsidesætter minimum- og maksimumhøjdeværdierne.",
      imageWidth: "Tilsidesætter værdierne for minimum- og maksimumbredde.",
      choices: "\"Værdi\" fungerer som et vare-id, der bruges i betingede regler; \"Tekst\" vises til respondenterne.",
      contentMode: "Vælg mellem \"Billede\" og \"Video\" for at indstille medievælgerens indholdstilstand. Hvis \"Billede\" er valgt, skal du sikre dig, at alle angivne indstillinger er billedfiler i følgende formater: JPEG, GIF, PNG, APNG, SVG, BMP, ICO. Tilsvarende, hvis \"Video\" er valgt, skal du sikre dig, at alle indstillinger er direkte links til videofiler i følgende formater: MP4, MOV, WMV, FLV, AVI, MKV. Bemærk, at YouTube-links ikke understøttes for videoindstillinger."
    },
    text: {
      size: "Denne indstilling ændrer kun størrelsen på inputfeltet og påvirker ikke bredden af spørgsmålsfeltet. Hvis du vil begrænse den accepterede inputlængde, skal du gå til <b>Validering → Maksimal tegngrænse</b>."
    },
    comment: {
      rows: "Indstiller antallet af viste linjer i indtastningsfeltet. Hvis indgangen fylder flere linjer, vises rullepanelet."
    },
    // survey templates
    survey: {
      readOnly: "Vælg, hvis du vil forhindre respondenter i at udfylde din undersøgelse.",
      progressBarLocation: "Angiver placeringen af statuslinjen. Værdien \"Auto\" viser statuslinjen over eller under undersøgelsesoverskriften."
    },
    matrixdropdowncolumn: {
      name: "Et kolonne-id, der ikke er synligt for svarpersoner.",
      isUnique: "Når det er aktiveret for en kolonne, skal en svarperson give et entydigt svar på hvert spørgsmål i denne kolonne.",
      rows: "Indstiller antallet af viste linjer i indtastningsfeltet. Hvis indgangen fylder flere linjer, vises rullepanelet.",
      visibleIf: "Brug tryllestavsikonet til at angive en betinget regel, der bestemmer kolonnesynligheden.",
      enableIf: "Brug tryllestavsikonet til at angive en betinget regel, der deaktiverer skrivebeskyttet tilstand for kolonnen.",
      requiredIf: "Brug tryllestavsikonet til at angive en betinget regel, der forhindrer indsendelse af undersøgelser, medmindre mindst ét indlejret spørgsmål har et svar.",
      showInMultipleColumns: "Når denne indstilling er valgt, oprettes der en individuel kolonne for hver valgmulighed.",
      colCount: "Arrangerer valgmuligheder i et layout med flere kolonner. Når den er indstillet til 0, vises indstillingerne på en enkelt linje. Når den er angivet til -1, nedarves den faktiske værdi fra egenskaben \"Antal indlejrede kolonner\" for den overordnede matrix."
    },
    caseInsensitive: "Vælg, om store og små bogstaver i det regulære udtryk skal behandles som ækvivalente.",
    widthMode: "Vælg mellem: \"Statisk\" - indstiller en fast bredde; \"Responsive\" - får undersøgelsen til at optage skærmens fulde bredde; \"Auto\" - gælder for en af de to afhængigt af de anvendte spørgsmålstyper.",
    cookieName: "Cookies forhindrer brugere i at udfylde den samme undersøgelse to gange.",
    logo: "Indsæt et billedlink (ingen størrelsesbegrænsninger), eller klik på mappeikonet for at gennemse en fil fra din computer (op til 64 KB).",
    logoWidth: "Indstiller en logobredde i CSS-enheder (px, %, in, pt osv.).",
    logoHeight: "Indstiller en logohøjde i CSS-enheder (px, %, i, pt osv.).",
    logoFit: "Vælg mellem: \"Ingen\" - billedet bevarer sin oprindelige størrelse; \"Contain\" - billedet ændres til at passe, samtidig med at dets billedformat opretholdes; \"Cover\" - billedet fylder hele kassen, samtidig med at billedformatet opretholdes; \"Fyld\" - billedet strækkes for at udfylde boksen uden at opretholde dets billedformat.",
    autoAdvanceEnabled: "Vælg, om undersøgelsen automatisk skal gå videre til næste side, når en svarperson har besvaret alle spørgsmål på den aktuelle side. Denne funktion gælder ikke, hvis det sidste spørgsmål på siden er åbent eller tillader flere svar.",
    autoAdvanceAllowComplete: "Vælg, om undersøgelsen skal fuldføres automatisk, når svarpersonen har besvaret alle spørgsmål.",
    showNavigationButtons: "Angiver synligheden og placeringen af navigationsknapper på en side.",
    navigationButtonsLocation: "Angiver placeringen af navigationsknapper på en side.",
    showPreviewBeforeComplete: "Aktivér eksempelsiden med alle eller kun besvarede spørgsmål.",
    questionTitleLocation: "Gælder for alle spørgsmål i undersøgelsen. Denne indstilling kan tilsidesættes af titeljusteringsregler på lavere niveauer: panel, side eller spørgsmål. En indstilling på lavere niveau tilsidesætter dem på et højere niveau.",
    requiredMark: "Et symbol eller en sekvens af symboler, der angiver, at et svar er påkrævet.",
    questionStartIndex: "Indtast et tal eller bogstav, som du vil starte nummereringen med.",
    questionErrorLocation: "Angiver placeringen af en fejlmeddelelse i forhold til spørgsmålet med ugyldigt input. Vælg mellem: \"Top\" - en fejltekst placeres øverst i spørgsmålsfeltet; \"Nederst\" - en fejltekst placeres nederst i spørgsmålsfeltet.",
    autoFocusFirstQuestion: "Vælg, om det første indtastningsfelt på hver side skal være klar til indtastning af tekst.",
    questionOrder: "Bevarer den oprindelige rækkefølge af spørgsmål eller randomiserer dem. Effekten af denne indstilling er kun synlig under fanen Eksempel.",
    maxTextLength: "Kun til spørgsmål om indtastning af tekst.",
    maxCommentLength: "Kun til kommentarer til spørgsmål.",
    commentAreaRows: "Angiver antallet af viste linjer i tekstområder til spørgsmålskommentarer. Hvis inputtet optager flere linjer, vises rullepanelet.",
    autoGrowComment: "Vælg, om spørgsmålskommentarer og lange tekstspørgsmål automatisk skal vokse i højden baseret på den indtastede tekstlængde.",
    allowResizeComment: "Kun til spørgsmålskommentarer og lange tekstspørgsmål.",
    calculatedValues: "Brugerdefinerede variabler fungerer som mellemliggende eller hjælpevariabler, der bruges i formularberegninger. De tager respondentinput som kildeværdier. Hver brugerdefineret variabel har et entydigt navn og et udtryk, den er baseret på.",
    includeIntoResult: "Vælg, om den beregnede værdi af udtrykket skal gemmes sammen med undersøgelsesresultaterne.",
    triggers: "En udløser er en hændelse eller betingelse, der er baseret på et udtryk. Når udtrykket er evalueret til \"sand\", udløser en udløser en handling. En sådan handling kan eventuelt have et målspørgsmål, den påvirker.",
    clearInvisibleValues: "Vælg, om du vil rydde værdier for spørgsmål, der er skjult af betinget logik, og hvornår du vil gøre det.",
    textUpdateMode: "Vælg mellem: \"Ved tabt fokus\" - værdien opdateres, når indtastningsfeltet mister fokus; \"Mens du skriver\" - værdien opdateres i realtid, da brugerne skriver.",
    columns: "Den venstre værdi fungerer som et kolonne-id, der bruges i betingede regler, den rigtige værdi vises for respondenterne.",
    rows: "Den venstre værdi fungerer som et række-id, der bruges i betingede regler, den rigtige værdi vises for respondenterne.",
    columnMinWidth: "Accepterer CSS-værdier (px, %, in, pt osv.).",
    rowTitleWidth: "Accepterer CSS-værdier (px, %, in, pt osv.).",
    totalText: "Kun synlig, når mindst én kolonne har typen Total eller Totaludtryk.",
    cellErrorLocation: "Angiver placeringen af en fejlmeddelelse i forhold til en celle med ugyldigt input. Indstillingen \"Arv\" anvender indstillingen fra egenskaben \"Justering af fejlmeddelelse\".",
    detailErrorLocation: "Angiver placeringen af fejlmeddelelser for spørgsmål, der er indlejret i detaljerede afsnit. Indstillingen \"Arv\" anvender indstillingen fra egenskaben \"Justering af fejlmeddelelser\".",
    keyDuplicationError: "Når egenskaben \"Undgå dublerede svar\" er aktiveret, modtager en svarperson, der forsøger at sende en dubletpost, følgende fejlmeddelelse.",
    totalExpression: "Giver dig mulighed for at beregne samlede værdier baseret på et udtryk. Udtrykket kan omfatte grundlæggende beregninger ('{q1_id} + {q2_id}'), booleske udtryk ('{alder} > 60') og funktioner ('iif()', 'today()', 'age()', 'min()', 'max()', 'avg()' osv.).",
    confirmDelete: "Udløser en prompt, der beder om at bekræfte sletningen af rækken.",
    keyName: "Hvis den angivne kolonne indeholder identiske værdier, kaster undersøgelsen fejlen \"Ikke-unik nøgleværdi\".",
    description: "Skriv en undertekst.",
    locale: "Vælg et sprog for at begynde at oprette undersøgelsen. Hvis du vil tilføje en oversættelse, skal du skifte til et nyt sprog og oversætte den oprindelige tekst her eller på fanen Oversættelser.",
    detailPanelMode: "Angiver placeringen af en detaljesektion i forhold til en række. Vælg mellem: \"Ingen\" - ingen udvidelse tilføjes; \"Under rækken\" - en rækkeudvidelse placeres under hver række i matrixen; \"Vis kun én rækkeudvidelse under rækken\" - en udvidelse vises kun under en enkelt række, de resterende rækkeudvidelser skjules.",
    imageFit: "Vælg mellem: \"Ingen\" - billedet bevarer sin oprindelige størrelse; \"Contain\" - billedet ændres til at passe, samtidig med at dets billedformat opretholdes; \"Cover\" - billedet fylder hele kassen, samtidig med at billedformatet opretholdes; \"Fyld\" - billedet strækkes for at udfylde boksen uden at opretholde dets billedformat.",
    autoGrow: "Øger gradvist inputfeltets højde, efterhånden som data indtastes. Tilsidesætter indstillingen \"Inputfelthøjde (i linjer)\".",
    allowResize: "Størrelseshåndtaget (eller grebet) vises i hjørnet og kan trækkes for at ændre størrelsen på indtastningsfeltet.",
    timeLimit: "Et tidsinterval i sekunder, hvorefter undersøgelsen automatisk går videre til siden Tak.",
    timeLimitPerPage: "Et tidsinterval i sekunder, hvorefter undersøgelsen automatisk går videre til næste side.",
    validateVisitedEmptyFields: "Aktivér denne indstilling for at udløse validering, når en bruger fokuserer på et tomt inputfelt og derefter forlader det uden at foretage ændringer.",
    page: {
      name: "Et side-id, der ikke er synligt for svarpersoner.",
      description: "Skriv en sideundertitel.",
      navigationTitle: "En billedtekst, der vises på en navigationsknap på statuslinjen eller indholdsfortegnelsen. Hvis du lader dette felt være tomt, bruger navigationsknappen sidetitlen eller sidenavnet. For at aktivere statuslinjen eller indholdsfortegnelsen skal du gå til \"Undersøgelse\" → \"Navigation\".",
      timeLimit: "Et tidsinterval i sekunder, hvorefter undersøgelsen automatisk går videre til næste side.",
      visibleIf: "Brug tryllestavsikonet til at indstille en betinget regel, der bestemmer sidens synlighed.",
      enableIf: "Brug tryllestavsikonet til at angive en betinget regel, der deaktiverer skrivebeskyttet tilstand for siden.",
      requiredIf: "Brug tryllestavsikonet til at angive en betinget regel, der forhindrer indsendelse af undersøgelser, medmindre mindst ét indlejret spørgsmål har et svar.",
      questionTitleLocation: "Gælder for alle spørgsmål på denne side. Hvis du vil tilsidesætte denne indstilling, skal du definere regler for titeljustering for individuelle spørgsmål eller paneler. Indstillingen \"Nedarv\" anvender indstillingen på undersøgelsesniveau (\"Top\" som standard).",
      questionTitleWidth: "Angiver ensartet bredde for spørgsmålstitler, når de er justeret til venstre for deres spørgsmålsbokse. Accepterer CSS-værdier (px, %, in, pt osv.).",
      questionErrorLocation: "Angiver placeringen af en fejlmeddelelse i forhold til spørgsmålet med ugyldigt input. Vælg mellem: \"Top\" - en fejltekst placeres øverst i spørgsmålsfeltet; \"Nederst\" - en fejltekst placeres nederst i spørgsmålsfeltet. Indstillingen \"Nedarv\" anvender indstillingen på undersøgelsesniveau (\"Top\" som standard).",
      questionOrder: "Bevarer den oprindelige rækkefølge af spørgsmål eller randomiserer dem. Indstillingen \"Arv\" anvender indstillingen på undersøgelsesniveau (\"Original\" som standard). Effekten af denne indstilling er kun synlig under fanen Eksempel.",
      showNavigationButtons: "Indstiller synligheden af navigationsknapper på siden. Indstillingen \"Arv\" anvender indstillingen på undersøgelsesniveau, som som standard er \"Synlig\".",
      gridLayoutColumns: "I denne tabel kan du konfigurere hver gitterkolonne på siden. Den indstiller automatisk breddeprocenten for hver kolonne baseret på det maksimale antal elementer i en række. Hvis du vil tilpasse gitterlayoutet, skal du manuelt justere disse værdier og definere titelbredden for alle spørgsmål i hver kolonne."
    },
    timerLocation: "Indstiller placeringen af en timer på en side.",
    panelsState: "Vælg mellem: \"Låst\" - brugere kan ikke udvide eller skjule paneler; \"Skjul alle\" - alle paneler starter i kollapset tilstand; \"Udvid alle\" - alle paneler starter i udvidet tilstand; \"Først udvidet\" - kun det første panel udvides oprindeligt.",
    imageLinkName: "Angiv et delt egenskabsnavn i den række objekter, der indeholder de URL-adresser til billeder eller videofiler, du vil have vist på valglisten.",
    choices: "Den venstre værdi fungerer som et vare-id, der bruges i betingede regler, den rigtige værdi vises for respondenterne.",
    title: "Skriv en brugervenlig titel, der skal vises.",
    waitForUpload: "Sikrer, at brugerne ikke gennemfører undersøgelsen, før filerne er uploadet.",
    minWidth: "Accepterer CSS-værdier (px, %, in, pt osv.).",
    maxWidth: "Accepterer CSS-værdier (px, %, in, pt osv.).",
    width: "Accepterer CSS-værdier (px, %, in, pt osv.).",
    valueName: "Hvis du ikke angiver denne egenskab, gemmes svaret i et felt, der er angivet af egenskaben Navn.",
    defaultDisplayValue: "En værdi, der vises i HTML-spørgsmål og i de dynamiske titler og beskrivelser af undersøgelseselementer, når spørgsmålsværdien er tom.",
    useDisplayValuesInDynamicTexts: "I spørgsmålstyper med et enkelt og flere valg har hver valgmulighed et id og en visningsværdi. Når denne indstilling er valgt, vises der en visningsværdi i stedet for en id-værdi i HTML-spørgsmål og dynamiske titler og beskrivelser af undersøgelseselementer.",
    clearIfInvisible: "Vælg, om du vil rydde spørgsmålsværdier, der er skjult af betinget logik, og hvornår det skal gøres. Indstillingen \"Nedarv\" anvender indstillingen på undersøgelsesniveau (\"Ved afslutning af undersøgelsen\" som standard).",
    choicesFromQuestionMode: "Vælg mellem: \"Alle\" - kopierer alle valgmuligheder fra det valgte spørgsmål; \"Valgt\" - kopierer dynamisk kun valgte valgindstillinger; \"Ikke valgt\" - kopierer dynamisk kun ikke-valgte valgindstillinger. Indstillingerne \"Ingen\" og \"Andre\" kopieres som standard, hvis de er aktiveret i kildespørgsmålet.",
    choiceValuesFromQuestion: "I enkelt- og flervalgsspørgsmålstyper har hver valgmulighed et id og en visningsværdi. Denne indstilling angiver, hvilken matrixkolonne eller hvilket panelspørgsmål der skal angive id'erne.",
    choiceTextsFromQuestion: "I enkelt- og flervalgsspørgsmålstyper har hver valgmulighed et id og en visningsværdi. Denne indstilling angiver, hvilken matrixkolonne eller hvilket panelspørgsmål der skal indeholde visningsteksterne.",
    allowCustomChoices: "Vælg for at lade svarpersonerne tilføje deres egne valgmuligheder, hvis den ønskede indstilling ikke er tilgængelig på rullelisten. Brugerdefinerede valg gemmes kun midlertidigt i den aktuelle browsersession.",
    showOtherItem: "Når denne indstilling er valgt, kan brugerne medtage yderligere input i et separat kommentarfelt.",
    separateSpecialChoices: "Viser hver indstilling for særlige valgmuligheder (\"Ingen\", \"Andet\", \"Vælg alle\") på en ny linje, selv når du bruger et layout med flere kolonner.",
    path: "Angiv placeringen i tjenestedatasættet, hvor målmatrixen af objekter er placeret. Lad feltet stå tomt, hvis URL-adressen allerede peger på arrayet.",
    choicesbyurl: {
      valueName: " "
    },
    titleName: "Angiv et ensartet egenskabsnavn i den matrix af objekter, der indeholder de værdier, du vil have vist på valglisten.",
    allowEmptyResponse: "Vælg for at tillade, at tjenesten returnerer et tomt svar eller en matrix.",
    choicesVisibleIf: "Brug tryllestavsikonet til at angive en betinget regel, der bestemmer synligheden af alle valgmuligheder.",
    rateValues: "Den venstre værdi fungerer som et vare-id, der bruges i betingede regler, den rigtige værdi vises for respondenterne.",
    rating: {
      displayMode: "\"Auto\" vælger mellem tilstandene \"Knapper\" og \"Dropdown\" baseret på den tilgængelige bredde. Når bredden ikke er tilstrækkelig til at vise knapper, vises der en rullemenu i spørgsmålet."
    },
    valuePropertyName: "Giver dig mulighed for at forbinde spørgsmål, der giver resultater i forskellige formater. Når sådanne spørgsmål kædes sammen ved hjælp af et join-id, gemmer denne delte ejendom valgte spørgsmålsværdier.",
    searchEnabled: "Vælg, om du vil opdatere indholdet i rullemenuen, så det svarer til den søgeforespørgsel, som en bruger skriver i indtastningsfeltet.",
    valueTrue: "En værdi, der skal gemmes i undersøgelsesresultater, når respondenterne giver et positivt svar.",
    valueFalse: "En værdi, der skal gemmes i undersøgelsesresultater, når respondenterne giver et negativt svar.",
    showPreview: "Det anbefales ikke at deaktivere denne indstilling, da den tilsidesætter eksempelbilledet og gør det svært for en bruger at forstå, om filerne er blevet uploadet.",
    needConfirmRemoveFile: "Udløser en prompt, der beder om at bekræfte filsletningen.",
    selectToRankEnabled: "Aktivér for kun at rangere valgte valg. Brugere trækker valgte elementer fra valglisten for at sortere dem inden for rangeringsområdet.",
    dataList: "Angiv en liste over valgmuligheder, der vil blive foreslået svarpersonen under input.",
    inputSize: "Indstillingen ændrer kun størrelsen på inputfelterne og påvirker ikke bredden af spørgsmålsfeltet.",
    itemTitleWidth: "Indstiller ensartet bredde for alle elementetiketter. Accepterer CSS-værdier (px, %, in, pt osv.).",
    inputTextAlignment: "Vælg, hvordan inputværdien skal justeres i feltet. Standardindstillingen \"Auto\" justerer inputværdien til højre, hvis der anvendes valuta- eller numerisk maskering, og til venstre, hvis ikke.",
    altText: "Fungerer som erstatning, når billedet ikke kan vises på en brugers enhed og af tilgængelighedshensyn.",
    rateColorMode: "Definerer farven på den valgte emoji, når ikontypen Vurdering er indstillet til \"Smileys\". Vælg mellem: \"Standard\" - den valgte emoji vises i standard undersøgelsesfarve; \"Skala\" - den valgte emoji arver farve fra vurderingsskalaen.",
    expression: {
      name: "Et udtryks-id, der ikke er synligt for svarpersoner.",
      description: "Skriv et udtryk undertekst.",
      expression: "Et udtryk kan omfatte grundlæggende beregninger ('{q1_id} + {q2_id}'), betingelser ('{alder} > 60') og funktioner ('iif()', 'today()', 'age()', 'min()', 'max()', 'avg()' osv.)."
    },
    storeOthersAsComment: "Vælg for at gemme værdien \"Andet\" som en separat egenskab i undersøgelsesresultater.",
    format: "Brug {0} som pladsholder for den faktiske værdi.",
    acceptedTypes: "Se beskrivelsen af attributten [accept](https://www.w3schools.com/tags/att_input_accept.asp) for at få flere oplysninger.",
    columnColCount: "Gælder kun for celletyperne Radiogruppe og afkrydsningsfelt.",
    autocomplete: "Se beskrivelsen af attributten [autofuldførelse](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete) for at få flere oplysninger.",
    filePlaceholder: "Gælder, når \"Kildetype\" er \"Lokale filer\", eller når kameraet ikke er tilgængeligt",
    photoPlaceholder: "Gælder, når \"Kildetype\" er \"Kamera\".",
    fileOrPhotoPlaceholder: "Gælder, når \"Kildetype\" er \"Lokale filer eller kamera\".",
    colCount: "Arrangerer valgmuligheder i et layout med flere kolonner. Når den er indstillet til 0, vises indstillingerne på en enkelt linje.",
    masksettings: {
      saveMaskedValue: "Vælg, om du vil gemme spørgsmålsværdien med en anvendt maske i undersøgelsesresultater."
    },
    patternmask: {
      pattern: "Mønsteret kan indeholde strengkonstanter og følgende pladsholdere: '9' - for et ciffer; »a« - for store eller små bogstaver '#' - for et ciffer eller et stort eller lille bogstav. Brug omvendt skråstreg '\\' for at undslippe et tegn."
    },
    datetimemask: {
      pattern: "Mønsteret kan indeholde separatortegn og følgende pladsholdere:<br>'m' - Månedsnummer.<br>'mm' – Månedstal med foranstillet nul for encifrede værdier. <br>'d' - Dag i måneden. <br>'dd' – Dag i måneden med foranstillet nul for encifrede værdier. <br>'yy' - De sidste to cifre i året. <br>'åååå' - Firecifret årstal. <br>'H' - Timer i 24-timers format. <br>'HH' – timer i 24-timers format med foranstillet nul for encifrede værdier. <br>'h' - Timer i 12-timers format. <br>'hh' – Timer i 12-timers format med foranstillet nul for encifrede værdier. <br>»MM« - Minutter. <br>'ss' - sekunder. <br>'TT' - 12-timers urperiode med store bogstaver (AM/PM). <br>'TT' - 12-timers urperiode med små bogstaver (am / pm)."
    },
    numericmask: {
      decimalSeparator: "Et symbol, der bruges til at adskille brøkdelen fra heltalsdelen af et vist tal.",
      thousandsSeparator: "Et symbol, der bruges til at adskille cifrene i et stort tal i grupper på tre.",
      precision: "Begrænser, hvor mange cifre der skal bevares efter decimaltegnet for et vist tal."
    },
    currencymask: {
      prefix: "Et eller flere symboler, der skal vises før værdien.",
      suffix: "Et eller flere symboler, der skal vises efter værdien."
    },
    theme: {
      isPanelless: "Denne indstilling gælder kun for spørgsmål uden for et panel.",
      primaryColor: "Indstiller en supplerende farve, der fremhæver vigtige undersøgelseselementer.",
      panelBackgroundTransparency: "Justerer gennemsigtigheden af paneler og spørgsmålsfelter i forhold til undersøgelsesbaggrunden.",
      questionBackgroundTransparency: "Justerer gennemsigtigheden af inputelementer i forhold til undersøgelsesbaggrunden.",
      cornerRadius: "Indstiller hjørneradius for alle rektangulære elementer. Aktiver Avanceret tilstand, hvis du vil indstille individuelle hjørneradiusværdier for inputelementer eller paneler og spørgsmålsfelter.",
      "--sjs-general-backcolor-dim": "Indstiller undersøgelsens primære baggrundsfarve."
    },
    header: {
      inheritWidthFrom: "Indstillingen \"Samme som beholder\" justerer automatisk bredden på sidehovedindholdsområdet, så den passer ind i det HTML-element, som undersøgelsen er placeret i.",
      textAreaWidth: "Bredden af det sidehovedområde, der indeholder undersøgelsens titel og beskrivelse, målt i pixel.",
      overlapEnabled: "Når den er aktiveret, overlejres toppen af undersøgelsen bunden af sidehovedet.",
      mobileHeight: "Når den er indstillet til 0, beregnes højden automatisk for at rumme sidehovedets indhold."
    },
    progressBarInheritWidthFrom: "Indstillingen \"Samme som beholder\" justerer automatisk bredden på statuslinjens område, så den passer ind i det HTML-element, som undersøgelsen er placeret i."
  },
  // Properties
  p: {
    title: {
      name: "titel",
      title: "Lad den være tom hvis det er det samme som 'Navn'"
    },
    multiSelect: "Tillad flere valg",
    showLabel: "Vis billedtekster",
    swapOrder: "Skift rækkefølgen Ja og Nej",
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
    inputSize: "inputSize",
    itemTitleWidth: "Bredde på vareetiket (i px)",
    inputTextAlignment: "Justering af inputværdi",
    elements: "Elementer",
    content: "Indhold",
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
    mobileHeight: "Højde på smartphones",
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
    selectToRankEmptyRankedAreaText: "Tekst, der viser, om alle indstillinger er markeret",
    selectToRankEmptyUnrankedAreaText: "Pladsholdertekst for rangeringsområdet",
    allowCameraAccess: "Tillad kameraadgang",
    scaleColorMode: "Skaler farvetilstand",
    rateColorMode: "Bedøm farvetilstand",
    copyDisplayValue: "Kopiér visningsværdi",
    effectiveColSpan: "Søjlespænd",
    progressBarInheritWidthFrom: "Bredde på statuslinjeområde"
  },
  theme: {
    advancedMode: "Avanceret tilstand",
    pageTitle: "Sidetitel skrifttype",
    questionTitle: "Skrifttype for spørgsmålstitel",
    editorPanel: "Input element",
    lines: "Linjer",
    primaryDefaultColor: "Standard",
    primaryDarkColor: "Hover",
    primaryLightColor: "Valgte",
    backgroundDimColor: "Baggrundsfarve",
    cornerRadius: "Hjørne radius",
    backcolor: "Standard baggrund",
    hovercolor: "Hold markøren over baggrunden",
    borderDecoration: "Kant dekoration",
    fontColor: "Skriftfarve",
    backgroundColor: "Baggrundsfarve",
    primaryForecolor: "Standardfarve",
    primaryForecolorLight: "Deaktiveret farve",
    font: "Skrifttype",
    borderDefault: "Mørkere",
    borderLight: "Lighter",
    fontFamily: "Skrifttypefamilie",
    fontWeightRegular: "Regelmæssig",
    fontWeightHeavy: "Tung",
    fontWeightSemiBold: "Halvfed skrift",
    fontWeightBold: "Modig",
    color: "Farve",
    placeholderColor: "Pladsholderfarve",
    size: "Størrelse",
    opacity: "Opacitet",
    boxShadowX: "X",
    boxShadowY: "Y",
    boxShadowAddRule: "Tilføj skyggeeffekt",
    boxShadowBlur: "Sløring",
    boxShadowSpread: "Spredning",
    boxShadowDrop: "Dråbe",
    boxShadowInner: "Indre",
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
      green: "Grøn",
      gray: "Grå"
    }
  },
  creatortheme: {
    "--sjs-special-background": "Overflade baggrund",
    "--sjs-primary-background-500": "Primær",
    "--sjs-secondary-background-500": "Sekundær",
    surfaceScale: "Overflade",
    userInterfaceBaseUnit: "Brugergrænseflade",
    fontScale: "Skrifttype",
    names: {
      sc2020: "Skaberen af spørgeundersøgelsen 2020",
      "default-light": "Lys",
      "default-dark": "Mørk",
      "default-contrast": "Kontrast"
    }
  }
};
setupLocale({ localeCode: "da", strings: danishStrings });

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
// pe.eachRowRequired: "Require answer for all rows" => "Kræv svar for alle rækker"
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
// page.timeLimit: "Time limit to finish the page (in seconds)" => "Tidsgrænse for at afslutte siden (i sekunder)"
// question.page: "Parent page" => "Overordnet side"
// pe.noEntriesText: "Empty entries text" => "Tekst til tomme poster"
// pe.html: "HTML markup" => "HTML-markering"
// pe.expression: "Expression" => "Udtryk"
// pe.setValue: "Answer" => "Svare"
// pe.dataFormat: "Image format" => "Billedformat"
// pe.allowAddRows: "Allow adding rows" => "Tillad tilføjelse af rækker"
// pe.allowRemoveRows: "Allow removing rows" => "Tillad fjernelse af rækker"
// pe.allowRowReorder: "Allow row drag and drop" => "Tillad træk og slip af rækker"
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
// pe.maxCommentLength: "Maximum comment length (in characters)" => "Maksimal kommentarlængde (i tegn)"
// pe.autoGrowComment: "Auto-expand comment area if necessary" => "Udvid automatisk kommentarområdet, hvis det er nødvendigt"
// pe.allowResizeComment: "Allow users to resize text areas" => "Tillad brugere at ændre størrelsen på tekstområder"
// pe.textUpdateMode: "Update text question value" => "Opdater værdi for tekstspørgsmål"
// pe.autoFocusFirstError: "Set focus on the first invalid answer" => "Sæt fokus på det første ugyldige svar"
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
// pe.prevPanelText: "Previous Panel button tooltip" => "Forrige værktøjstip til panelknap"
// pe.nextPanelText: "Next Panel button tooltip" => "Værktøjstip til knappen Næste panel"
// pe.showRangeInProgress: "Show progress bar" => "Vis statuslinje"
// pe.templateQuestionTitleLocation: "Question title location" => "Placering af spørgsmålets titel"
// pe.removePanelButtonLocation: "Remove Panel button location" => "Fjern placering af panelknap"
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
// pe.showNumber: "Show panel number" => "Vis panelnummer"
// pe.logoWidth: "Logo width (in CSS-accepted values)" => "Logobredde (i CSS-accepterede værdier)"
// pe.logoHeight: "Logo height (in CSS-accepted values)" => "Logohøjde (i CSS-accepterede værdier)"
// pe.readOnly: "Read-only" => "Skrivebeskyttet"
// pe.enableIf: "Editable if" => "Redigerbar, hvis"
// pe.noRowsText: "\"No rows\" message" => "Meddelelsen \"Ingen rækker\""
// pe.size: "Input field size (in characters)" => "Inputfeltstørrelse (i tegn)"
// pe.separateSpecialChoices: "Separate special choices (None, Other, Select All)" => "Adskil særlige valg (Ingen, Andet, Vælg alle)"
// pe.choicesFromQuestion: "Copy choices from the following question" => "Kopiér valg fra følgende spørgsmål"
// pe.choicesFromQuestionMode: "Which choices to copy?" => "Hvilke valgmuligheder skal kopieres?"
// pe.showCommentArea: "Show the comment area" => "Vis kommentarområdet"
// pe.commentPlaceholder: "Comment area placeholder" => "Pladsholder til kommentarområde"
// pe.displayRateDescriptionsAsExtremeItems: "Display rate descriptions as extreme values" => "Beskrivelser af visningshastighed som ekstreme værdier"
// pe.rowOrder: "Row order" => "Rækkefølge af rækker"
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
// addRowButtonLocation.default: "Depends on matrix layout" => "Afhænger af matrixlayout"
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
// theme.groupAdvanced: "Advanced" => "Avanceret"
// theme.themeName: "Theme" => "Tema"
// theme.isPanellessss: "Question appearance" => "Spørgsmål udseende"
// theme.isPanellessPanels: "Default" => "Standard"
// theme.isPanellessLightweight: "Without Panels" => "Uden paneler"
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
// theme.surveyTitleFont: "Survey title font" => "Skrifttype for undersøgelsestitel"
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
// theme.header: "Header" => "Header"
// theme.backgroundImageFitFill: "Stretch" => "Stræk"
// theme.backgroundImageFitTile: "Tile" => "Flise"
// theme.headerView: "View" => "Udsigt"
// theme.headerViewBasic: "Basic" => "Grundlæggende"
// theme.headerViewAdvanced: "Advanced" => "Avanceret"
// theme.headerInheritWidthFrom: "Content area width" => "Bredde på indholdsområde"
// theme.headerInheritWidthFromSurvey: "Same as survey" => "Samme som undersøgelse"
// theme.headerInheritWidthFromPage: "Fit to page" => "Tilpas til side"
// theme.headerTextAreaWidth: "Text width" => "Tekstbredde"
// theme.headerBackgroundColorSwitch: "Background color" => "Baggrundsfarve"
// theme.headerBackgroundColorNone: "None" => "Ingen"
// theme.headerBackgroundColorAccentColor: "Accent color" => "Accent farve"
// theme.headerBackgroundColorCustom: "Custom" => "Sædvane"
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
// theme.background: "Background" => "Baggrund"
// theme.appearance: "Appearance" => "Udseende"
// ed.themeResetConfirmation: "Do you really want to reset the theme? All your customizations will be lost." => "Vil du virkelig nulstille temaet? Alle dine tilpasninger går tabt."
// ed.themeResetConfirmationOk: "Yes, reset the theme" => "Ja, nulstil temaet"
// theme.headerInheritWidthFromContainer: "Fit to container" => "Passer til beholder"
// signaturepad.showPlaceholder: "Show the placeholder" => "Vis pladsholderen"
// signaturepad.placeholder: "Placeholder text" => "Pladsholdertekst"
// theme.surveyDescriptionFont: "Survey description font" => "Skrifttype til undersøgelsesbeskrivelse"
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
// theme.headerTitlePosition: "Title position" => "Titel position"
// theme.headerDescriptionPosition: "Description position" => "Beskrivelse position"
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

// pe.transposeData: "Transpose rows to columns" => "Transponere rækker til kolonner"
// layout.panel: "Layout" => "Layout"
// layout.question: "Layout" => "Layout"
// layout.base: "Layout" => "Layout"
// panel.name: "Panel name" => "Panelets navn"
// panel.title: "Panel title" => "Panelets titel"
// panel.description: "Panel description" => "Beskrivelse af panelet"
// panel.visibleIf: "Make the panel visible if" => "Gør panelet synligt, hvis"
// panel.requiredIf: "Make the panel required if" => "Gør panelet påkrævet, hvis"
// panel.questionOrder: "Question order within the panel" => "Spørgsmålsrækkefølge i panelet"
// panel.startWithNewLine: "Display the panel on a new line" => "Få vist panelet på en ny linje"
// panel.state: "Panel collapse state" => "Panelets sammenbrudstilstand"
// panel.width: "Inline panel width" => "Indlejret panelbredde"
// panel.minWidth: "Minimum panel width" => "Mindste panelbredde"
// panel.maxWidth: "Maximum panel width" => "Maksimal panelbredde"
// paneldynamic.name: "Panel name" => "Panelets navn"
// paneldynamic.title: "Panel title" => "Panelets titel"
// paneldynamic.description: "Panel description" => "Beskrivelse af panelet"
// paneldynamic.visibleIf: "Make the panel visible if" => "Gør panelet synligt, hvis"
// paneldynamic.requiredIf: "Make the panel required if" => "Gør panelet påkrævet, hvis"
// paneldynamic.page: "Move the panel to page" => "Flyt panelet til siden"
// paneldynamic.startWithNewLine: "Display the panel on a new line" => "Få vist panelet på en ny linje"
// paneldynamic.state: "Panel collapse state" => "Panelets sammenbrudstilstand"
// paneldynamic.width: "Inline panel width" => "Indlejret panelbredde"
// paneldynamic.minWidth: "Minimum panel width" => "Mindste panelbredde"
// paneldynamic.maxWidth: "Maximum panel width" => "Maksimal panelbredde"
// paneldynamic.templateDescription: "Panel description pattern" => "Panel beskrivelse mønster"
// paneldynamic.templateTitle: "Panel title pattern" => "Panelets titelmønster"
// paneldynamic.noEntriesText: "Empty panel text" => "Tom paneltekst"
// paneldynamic.templateTabTitle: "Tab title pattern" => "Fanetitel mønster"
// paneldynamic.templateVisibleIf: "Make an individual panel visible if" => "Gør et individuelt panel synligt, hvis"
// paneldynamic.hideNumber: "Hide the panel number" => "Skjul panelnummeret"
// paneldynamic.titleLocation: "Panel title alignment" => "Justering af paneltitel"
// paneldynamic.descriptionLocation: "Panel description alignment" => "Justering af panelbeskrivelse"
// paneldynamic.templateQuestionTitleLocation: "Question title alignment" => "Tilpasning af spørgsmålets titel"
// paneldynamic.templateErrorLocation: "Error message alignment" => "Justering af fejlmeddelelse"
// paneldynamic.newPanelPosition: "New panel location" => "Ny panelplacering"
// paneldynamic.keyName: "Prevent duplicate responses in the following question" => "Undgå dublerede svar i følgende spørgsmål"
// question.name: "Question name" => "Navn på spørgsmål"
// question.title: "Question title" => "Spørgsmålets titel"
// question.description: "Question description" => "Beskrivelse af spørgsmål"
// question.visibleIf: "Make the question visible if" => "Gør spørgsmålet synligt, hvis"
// question.requiredIf: "Make the question required if" => "Foretag spørgsmålet påkrævet, hvis"
// question.state: "Question box collapse state" => "Tilstand for sammenbrud af spørgsmålsfelt"
// question.hideNumber: "Hide the question number" => "Skjul spørgsmålsnummeret"
// question.titleLocation: "Question title alignment" => "Tilpasning af spørgsmålets titel"
// question.descriptionLocation: "Question description alignment" => "Tilpasning af spørgsmålsbeskrivelse"
// question.errorLocation: "Error message alignment" => "Justering af fejlmeddelelse"
// question.indent: "Increase the inner indent" => "Forøg det indre indryk"
// question.width: "Inline question width" => "Indbygget spørgsmålsbredde"
// question.minWidth: "Minimum question width" => "Mindste spørgsmålsbredde"
// question.maxWidth: "Maximum question width" => "Maksimal spørgsmålsbredde"
// question.textUpdateMode: "Update input field value" => "Opdater inputfeltværdi"
// signaturepad.allowClear: "Show the Clear button within signature area" => "Vis knappen Ryd i signaturområdet"
// signaturepad.penColor: "Stroke color" => "Stregfarve"
// comment.rows: "Input field height (in lines)" => "Inputfelthøjde (i linjer)"
// expression.name: "Expression name" => "Navn på udtryk"
// expression.title: "Expression title" => "Udtryk titel"
// expression.description: "Expression description" => "Beskrivelse af udtryk"
// expression.expression: "Expression" => "Udtryk"
// trigger.expression: "Expression" => "Udtryk"
// calculatedvalue.expression: "Expression" => "Udtryk"
// survey.description: "Survey description" => "Beskrivelse af undersøgelsen"
// page.name: "Page name" => "Sidenavn"
// page.description: "Page description" => "Sidebeskrivelse"
// page.visibleIf: "Make the page visible if" => "Gør siden synlig, hvis"
// page.requiredIf: "Make the page required if" => "Gør siden påkrævet, hvis"
// page.questionOrder: "Question order on the page" => "Spørgsmålsrækkefølge på siden"
// matrixdropdowncolumn.name: "Column name" => "Kolonnens navn"
// matrixdropdowncolumn.title: "Column title" => "Kolonnens titel"
// matrixdropdowncolumn.isUnique: "Prevent duplicate responses" => "Undgå dublerede svar"
// matrixdropdowncolumn.width: "Column width" => "Kolonnebredde"
// matrixdropdowncolumn.minWidth: "Minimum column width" => "Mindste kolonnebredde"
// matrixdropdowncolumn.rows: "Input field height (in lines)" => "Inputfelthøjde (i linjer)"
// matrixdropdowncolumn.visibleIf: "Make the column visible if" => "Gør kolonnen synlig, hvis"
// matrixdropdowncolumn.requiredIf: "Make the column required if" => "Gør kolonnen obligatorisk, hvis"
// matrixdropdowncolumn.showInMultipleColumns: "Each option in a separate column" => "Hver indstilling i en separat kolonne"
// multipletextitem.name: "Name" => "Navn"
// multipletextitem.title: "Title" => "Titel"
// pe.rateDescriptionLocation: "Label alignment" => "Justering af etiketter"
// pe.cellErrorLocation: "Cell error message alignment" => "Justering af cellefejlmeddelelse"
// pe.listIsEmpty@columns: "You don't have any columns yet" => "Du har ikke nogen kolonner endnu"
// pe.listIsEmpty@rows: "You don't have any rows yet" => "Du har ingen rækker endnu"
// pe.listIsEmpty@validators: "You don't have any validation rules yet" => "Du har endnu ingen valideringsregler"
// pe.listIsEmpty@calculatedValues: "You don't have any custom variables yet" => "Du har endnu ingen tilpassede variabler"
// pe.listIsEmpty@triggers: "You don't have any triggers yet" => "Du har ingen udløsere endnu"
// pe.listIsEmpty@navigateToUrlOnCondition: "You don't have any links yet" => "Du har ingen links endnu"
// pe.addNew@columns: "Add new column" => "Tilføj ny kolonne"
// pe.addNew@rows: "Add new row" => "Tilføj ny række"
// pe.addNew@validators: "Add new rule" => "Tilføj ny regel"
// pe.addNew@calculatedValues: "Add new variable" => "Tilføj ny variabel"
// pe.addNew@triggers: "Add new trigger" => "Tilføj ny udløser"
// pe.addNew@navigateToUrlOnCondition: "Add new URL" => "Tilføj ny webadresse"
// choicesbyurl.url: "Web service's URL" => "Webtjenestens URL-adresse"
// pe.progressBarShowPageTitles: "Display page titles in progress bar" => "Vis sidetitler på statuslinjen"
// pe.progressBarShowPageNumbers: "Display page numbers in progress bar" => "Vis sidetal på statuslinjen"
// itemvalue.visibleIf: "Make the option visible if" => "Gør indstillingen synlig, hvis"
// itemvalue.enableIf: "Make the option selectable if" => "Gør indstillingen valgbar, hvis"
// panel.layout: "Panel Layout" => "Panel Layout"
// tabs.questionSettings: "Question Settings" => "Indstillinger for spørgsmål"
// pe.url_placeholder: "Ex.: https://api.example.com/books" => "Eks.: https://api.example.com/books"
// pe.path_placeholder: "Ex.: categories.fiction" => "Eks.: kategorier.fiktion"
// pe.questionStartIndex_placeholder: "Ex.: a)" => "Eks.: a)"
// pe.width_placeholder: "Ex.: 6in" => "Eks.: 6in"
// pe.minWidth_placeholder: "Ex.: 600px" => "Eks.: 600px"
// pe.maxWidth_placeholder: "Ex.: 50%" => "Eks.: 50%"
// pv.selected: "Selected" => "Valgte"
// pv.unselected: "Unselected" => "Markerede"
// pv.center: "Center" => "Midte"
// pv.middle: "Middle" => "Midte"
// pv.next: "Next" => "Næste"
// pv.last: "Last" => "Sidst"
// clearIfInvisible.none: "Never" => "Aldrig"
// questionsOnPageMode.standard: "Original structure" => "Oprindelig struktur"
// questionsOnPageMode.singlePage: "Show all questions on one page" => "Vis alle spørgsmål på én side"
// questionsOnPageMode.questionPerPage: "Show single question per page" => "Vis et enkelt spørgsmål pr. side"
// pv.auto: "Auto" => "Auto"
// panelsState.firstExpanded: "First expanded" => "Først udvidet"
// rateColorMode.scale: "Scale" => "Skæl"
// scaleColorMode.monochrome: "Monochrome" => "Monokrom"
// scaleColorMode.colored: "Colored" => "Farvet"
// state.default: "Locked" => "Låst"
// showQuestionNumbers.default: "Auto-numbering" => "Automatisk nummerering"
// showQuestionNumbers.on: "Auto-numbering" => "Automatisk nummerering"
// showQuestionNumbers.onPage: "Reset on each page" => "Nulstil på hver side"
// showQuestionNumbers.onpanel: "Reset on each panel" => "Nulstil på hvert panel"
// showQuestionNumbers.onPanel: "Reset on each panel" => "Nulstil på hvert panel"
// showQuestionNumbers.onSurvey: "Continue across the survey" => "Fortsæt på tværs af undersøgelsen"
// showQuestionNumbers.off: "No numbering" => "Ingen nummerering"
// descriptionLocation.underTitle: "Under the question title" => "Under spørgsmålets titel"
// descriptionLocation.underInput: "Under the input field" => "Under indtastningsfeltet"
// selectToRankAreasLayout.horizontal: "Next to choices" => "Ved siden af valgmuligheder"
// selectToRankAreasLayout.vertical: "Above choices" => "Ovenstående valg"
// displayStyle.decimal: "Decimal" => "Decimal"
// displayStyle.currency: "Currency" => "Valuta"
// displayStyle.percent: "Percentage" => "Procentdel"
// displayStyle.date: "Date" => "Dato"
// totalDisplayStyle.decimal: "Decimal" => "Decimal"
// totalDisplayStyle.currency: "Currency" => "Valuta"
// totalDisplayStyle.percent: "Percentage" => "Procentdel"
// totalDisplayStyle.date: "Date" => "Dato"
// rowOrder.initial: "Original" => "Oprindelig"
// questionOrder.initial: "Original" => "Oprindelig"
// showProgressBar.aboveheader: "Above the header" => "Over overskriften"
// showProgressBar.belowheader: "Below the header" => "Under overskriften"
// pv.sum: "Sum" => "Sum"
// pv.count: "Count" => "Tælle"
// pv.min: "Min" => "Min."
// pv.max: "Max" => "Maks"
// pv.avg: "Avg" => "Avg"
// searchMode.contains: "Contains" => "Indeholder"
// searchMode.startsWith: "Starts with" => "Begynder med"
// panel.name: "A panel ID that is not visible to respondents." => "Et panel-id, der ikke er synligt for svarpersonerne."
// panel.description: "Type a panel subtitle." => "Skriv en undertitel til panelet."
// panel.visibleIf: "Use the magic wand icon to set a conditional rule that determines panel visibility." => "Brug tryllestavsikonet til at indstille en betinget regel, der bestemmer panelets synlighed."
// panel.enableIf: "Use the magic wand icon to set a conditional rule that disables the read-only mode for the panel." => "Brug tryllestavsikonet til at indstille en betinget regel, der deaktiverer panelets skrivebeskyttede tilstand."
// panel.requiredIf: "Use the magic wand icon to set a conditional rule that prevents survey submission unless at least one nested question has an answer." => "Brug tryllestavsikonet til at angive en betinget regel, der forhindrer indsendelse af undersøgelser, medmindre mindst ét indlejret spørgsmål har et svar."
// panel.questionTitleLocation: "Applies to all questions within this panel. If you want to override this setting, define title alignment rules for individual questions. The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Top\" by default)." => "Gælder for alle spørgsmål i dette panel. Hvis du vil tilsidesætte denne indstilling, skal du definere regler for titeljustering for individuelle spørgsmål. Indstillingen \"Nedarv\" anvender indstillingen på sideniveau (hvis angivet) eller undersøgelsesniveau (\"Top\" som standard)."
// panel.questionErrorLocation: "Sets the location of an error message in relation to all questions within the panel. The \"Inherit\" option applies the page-level (if set) or survey-level setting." => "Angiver placeringen af en fejlmeddelelse i forhold til alle spørgsmål i panelet. Indstillingen \"Nedarv\" anvender indstillingen for sideniveau (hvis angivet) eller undersøgelsesniveau."
// panel.questionOrder: "Keeps the original order of questions or randomizes them. The \"Inherit\" option applies the page-level (if set) or survey-level setting." => "Bevarer den oprindelige rækkefølge af spørgsmål eller randomiserer dem. Indstillingen \"Nedarv\" anvender indstillingen for sideniveau (hvis angivet) eller undersøgelsesniveau."
// panel.page: "Repositions the panel to the end of a selected page." => "Flytter panelet til slutningen af en markeret side."
// panel.innerIndent: "Adds space or margin between the panel content and the left border of the panel box." => "Tilføjer mellemrum eller margen mellem panelindholdet og panelboksens venstre kant."
// panel.startWithNewLine: "Unselect to display the panel in one line with the previous question or panel. The setting doesn't apply if the panel is the first element in your form." => "Fjern markeringen for at få vist panelet på én linje med det forrige spørgsmål eller panel. Indstillingen gælder ikke, hvis panelet er det første element i formularen."
// panel.state: "Choose from: \"Expanded\" - the panel is displayed in full and can be collapsed; \"Collapsed\" - the panel displays only the title and description and can be expanded; \"Locked\" - the panel is displayed in full and cannot be collapsed." => "Vælg mellem: \"Udvidet\" - panelet vises fuldt ud og kan skjules; \"Skjult\" - panelet viser kun titlen og beskrivelsen og kan udvides; \"Låst\" - panelet vises fuldt ud og kan ikke skjules."
// panel.width: "Sets the width of the panel in proportion to other survey elements in the same line. Accepts CSS values (px, %, in, pt, etc.)." => "Indstiller panelets bredde i forhold til andre undersøgelseselementer på samme linje. Accepterer CSS-værdier (px, %, in, pt osv.)."
// paneldynamic.name: "A panel ID that is not visible to respondents." => "Et panel-id, der ikke er synligt for svarpersonerne."
// paneldynamic.description: "Type a panel subtitle." => "Skriv en undertitel til panelet."
// paneldynamic.visibleIf: "Use the magic wand icon to set a conditional rule that determines panel visibility." => "Brug tryllestavsikonet til at indstille en betinget regel, der bestemmer panelets synlighed."
// paneldynamic.enableIf: "Use the magic wand icon to set a conditional rule that disables the read-only mode for the panel." => "Brug tryllestavsikonet til at indstille en betinget regel, der deaktiverer panelets skrivebeskyttede tilstand."
// paneldynamic.requiredIf: "Use the magic wand icon to set a conditional rule that prevents survey submission unless at least one nested question has an answer." => "Brug tryllestavsikonet til at angive en betinget regel, der forhindrer indsendelse af undersøgelser, medmindre mindst ét indlejret spørgsmål har et svar."
// paneldynamic.templateQuestionTitleLocation: "Applies to all questions within this panel. If you want to override this setting, define title alignment rules for individual questions. The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Top\" by default)." => "Gælder for alle spørgsmål i dette panel. Hvis du vil tilsidesætte denne indstilling, skal du definere regler for titeljustering for individuelle spørgsmål. Indstillingen \"Nedarv\" anvender indstillingen på sideniveau (hvis angivet) eller undersøgelsesniveau (\"Top\" som standard)."
// paneldynamic.templateErrorLocation: "Sets the location of an error message in relation to a question with invalid input. Choose between: \"Top\" - an error text is placed at the top of the question box; \"Bottom\" - an error text is placed at the bottom of the question box. The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Top\" by default)." => "Angiver placeringen af en fejlmeddelelse i forhold til et spørgsmål med ugyldigt input. Vælg mellem: \"Top\" - en fejltekst placeres øverst i spørgsmålsfeltet; \"Nederst\" - en fejltekst placeres nederst i spørgsmålsfeltet. Indstillingen \"Nedarv\" anvender indstillingen på sideniveau (hvis angivet) eller undersøgelsesniveau (\"Top\" som standard)."
// paneldynamic.errorLocation: "Sets the location of an error message in relation to all questions within the panel. The \"Inherit\" option applies the page-level (if set) or survey-level setting." => "Angiver placeringen af en fejlmeddelelse i forhold til alle spørgsmål i panelet. Indstillingen \"Nedarv\" anvender indstillingen for sideniveau (hvis angivet) eller undersøgelsesniveau."
// paneldynamic.page: "Repositions the panel to the end of a selected page." => "Flytter panelet til slutningen af en markeret side."
// paneldynamic.innerIndent: "Adds space or margin between the panel content and the left border of the panel box." => "Tilføjer mellemrum eller margen mellem panelindholdet og panelboksens venstre kant."
// paneldynamic.startWithNewLine: "Unselect to display the panel in one line with the previous question or panel. The setting doesn't apply if the panel is the first element in your form." => "Fjern markeringen for at få vist panelet på én linje med det forrige spørgsmål eller panel. Indstillingen gælder ikke, hvis panelet er det første element i formularen."
// paneldynamic.state: "Choose from: \"Expanded\" - the panel is displayed in full and can be collapsed; \"Collapsed\" - the panel displays only the title and description and can be expanded; \"Locked\" - the panel is displayed in full and cannot be collapsed." => "Vælg mellem: \"Udvidet\" - panelet vises fuldt ud og kan skjules; \"Skjult\" - panelet viser kun titlen og beskrivelsen og kan udvides; \"Låst\" - panelet vises fuldt ud og kan ikke skjules."
// paneldynamic.width: "Sets the width of the panel in proportion to other survey elements in the same line. Accepts CSS values (px, %, in, pt, etc.)." => "Indstiller panelets bredde i forhold til andre undersøgelseselementer på samme linje. Accepterer CSS-værdier (px, %, in, pt osv.)."
// paneldynamic.templateTitle: "Type in a template for dynamic panel titles. Use {panelIndex} for the panel's general position and {visiblePanelIndex} for its order among visible panels. Insert these placeholders into the pattern to add automatic numbering." => "Indtast en skabelon til dynamiske paneltitler. Brug {panelIndex} til panelets generelle placering og {visiblePanelIndex} til dets rækkefølge blandt synlige paneler. Indsæt disse pladsholdere i mønsteret for at tilføje automatisk nummerering."
// paneldynamic.templateTabTitle: "Type in a template for tab titles. Use {panelIndex} for a panel's general position and {visiblePanelIndex} for its order among visible panels. Insert these placeholders into the pattern to add automatic numbering." => "Indtast en skabelon til fanetitler. Brug {panelIndex} til et panels generelle placering og {visiblePanelIndex} til dets rækkefølge blandt synlige paneler. Indsæt disse pladsholdere i mønsteret for at tilføje automatisk nummerering."
// paneldynamic.templateVisibleIf: "This setting allows you to control the visibility of individual panels within the dynamic panel. Use the `{panel}` placeholder to reference the current panel in your expression." => "Denne indstilling giver dig mulighed for at styre synligheden af individuelle paneler i det dynamiske panel. Brug pladsholderen '{panel}' til at referere til det aktuelle panel i dit udtryk."
// paneldynamic.titleLocation: "This setting is automatically inherited by all questions within this panel. If you want to override this setting, define title alignment rules for individual questions. The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Top\" by default)." => "Denne indstilling nedarves automatisk af alle spørgsmål i dette panel. Hvis du vil tilsidesætte denne indstilling, skal du definere regler for titeljustering for individuelle spørgsmål. Indstillingen \"Nedarv\" anvender indstillingen på sideniveau (hvis angivet) eller undersøgelsesniveau (\"Top\" som standard)."
// paneldynamic.descriptionLocation: "The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Under the panel title\" by default)." => "Indstillingen \"Nedarv\" anvender indstillingen på sideniveau (hvis angivet) eller undersøgelsesniveau (\"Under paneltitlen\" som standard)."
// paneldynamic.newPanelPosition: "Defines the position of a newly added panel. By default, new panels are added to the end. Select \"Next\" to insert a new panel after the current one." => "Definerer placeringen af et nyligt tilføjet panel. Som standard tilføjes nye paneler til slutningen. Vælg \"Næste\" for at indsætte et nyt panel efter det aktuelle."
// paneldynamic.copyDefaultValueFromLastEntry: "Duplicates answers from the last panel and assigns them to the next added dynamic panel." => "Duplikerer svar fra det sidste panel og tildeler dem til det næste tilføjede dynamiske panel."
// paneldynamic.keyName: "Reference a question name to require a user to provide a unique response for this question in each panel." => "Henvis til et spørgsmålsnavn for at kræve, at en bruger giver et entydigt svar på dette spørgsmål i hvert panel."
// pehelp.defaultValueExpression: "This setting allows you to assign a default answer value based on an expression. The expression can include basic calculations - `{q1_id} + {q2_id}`, Boolean expressions, such as `{age} > 60`, and functions: `iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, etc. The value determined by this expression serves as the initial default value that can be overridden by a respondent's manual input." => "Med denne indstilling kan du tildele en standardsvarværdi baseret på et udtryk. Udtrykket kan omfatte grundlæggende beregninger - '{q1_id} + {q2_id}', booleske udtryk, såsom '{alder} > 60' og funktioner: 'iif()', 'today()', 'age()', 'min()', 'max()', 'avg()' osv. Den værdi, der bestemmes af dette udtryk, fungerer som den oprindelige standardværdi, der kan tilsidesættes af svarpersonens manuelle input."
// pehelp.resetValueIf: "Use the magic wand icon to set a conditional rule that determines when a respondent's input is reset to the value based on the \"Default value expression\" or \"Set value expression\" or to the \"Default answer\" value (if either is set)." => "Brug tryllestavsikonet til at angive en betinget regel, der bestemmer, hvornår en svarpersons input nulstilles til værdien baseret på værdien \"Standardværdiudtryk\" eller \"Angiv værdiudtryk\" eller til værdien \"Standardsvar\" (hvis en af dem er angivet)."
// pehelp.setValueIf: "Use the magic wand icon to set a conditional rule that determines when to run the \"Set value expression\" and dynamically assign the resulting value as a response." => "Brug tryllestavsikonet til at indstille en betinget regel, der bestemmer, hvornår \"Indstil værdiudtryk\" skal køres, og tildele den resulterende værdi dynamisk som et svar."
// pehelp.setValueExpression: "Specify an expression that defines the value to be set when the conditions in the \"Set value if\" rule are met. The expression can include basic calculations - `{q1_id} + {q2_id}`, Boolean expressions, such as `{age} > 60`, and functions: `iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, etc. The value determined by this expression can be overridden by a respondent's manual input." => "Angiv et udtryk, der definerer den værdi, der skal angives, når betingelserne i reglen \"Angiv værdi hvis\" er opfyldt. Udtrykket kan omfatte grundlæggende beregninger - '{q1_id} + {q2_id}', booleske udtryk, såsom '{alder} > 60' og funktioner: 'iif()', 'today()', 'age()', 'min()', 'max()', 'avg()' osv. Den værdi, der bestemmes af dette udtryk, kan tilsidesættes af svarpersonens manuelle input."
// question.name: "A question ID that is not visible to respondents." => "Et spørgsmåls-id, der ikke er synligt for svarpersonerne."
// question.description: "Type a question subtitle." => "Skriv et spørgsmåls undertitel."
// question.visibleIf: "Use the magic wand icon to set a conditional rule that determines question visibility." => "Brug tryllestavsikonet til at angive en betinget regel, der bestemmer spørgsmålets synlighed."
// question.enableIf: "Use the magic wand icon to set a conditional rule that disables the read-only mode for the question." => "Brug tryllestavsikonet til at angive en betinget regel, der deaktiverer skrivebeskyttet tilstand for spørgsmålet."
// question.requiredIf: "Use the magic wand icon to set a conditional rule that prevents survey advancing or submission unless the question received an answer." => "Brug tryllestavsikonet til at angive en betinget regel, der forhindrer undersøgelse i at gå videre eller blive sendt, medmindre spørgsmålet blev besvaret."
// question.startWithNewLine: "Unselect to display the question in one line with the previous question or panel. The setting doesn't apply if the question is the first element in your form." => "Fjern markeringen for at få vist spørgsmålet på én linje med det forrige spørgsmål eller panel. Indstillingen gælder ikke, hvis spørgsmålet er det første element i formularen."
// question.page: "Repositions the question to the end of a selected page." => "Flytter spørgsmålet til slutningen af en markeret side."
// question.state: "Choose from: \"Expanded\" - the question box is displayed in full and can be collapsed; \"Collapsed\" - the question box displays only the title and description and can be expanded; \"Locked\" - the question box is displayed in full and cannot be collapsed." => "Vælg mellem: \"Udvidet\" - spørgsmålsfeltet vises fuldt ud og kan skjules; \"Skjult\" - spørgsmålsfeltet viser kun titlen og beskrivelsen og kan udvides; \"Låst\" - spørgsmålsfeltet vises fuldt ud og kan ikke skjules."
// question.titleLocation: "Overrides title alignment rules defined on a panel, page or survey level. The \"Inherit\" option applies any higher-level settings (if set) or survey-level setting (\"Top\" by default)." => "Tilsidesætter regler for titeljustering, der er defineret på panel-, side- eller undersøgelsesniveau. Indstillingen \"Nedarv\" anvender alle indstillinger på højere niveau (hvis indstillet) eller indstilling på undersøgelsesniveau (\"Top\" som standard)."
// question.descriptionLocation: "The \"Inherit\" option applies the survey-level setting (\"Under the question title\" by default)." => "Indstillingen \"Nedarv\" anvender indstillingen på undersøgelsesniveau (\"Under spørgsmålets titel\" som standard)."
// question.errorLocation: "Sets the location of an error message in relation to the question with invalid input. Choose between: \"Top\" - an error text is placed at the top of the question box; \"Bottom\" - an error text is placed at the bottom of the question box. The \"Inherit\" option applies the survey-level setting (\"Top\" by default)." => "Angiver placeringen af en fejlmeddelelse i forhold til spørgsmålet med ugyldigt input. Vælg mellem: \"Top\" - en fejltekst placeres øverst i spørgsmålsfeltet; \"Nederst\" - en fejltekst placeres nederst i spørgsmålsfeltet. Indstillingen \"Nedarv\" anvender indstillingen på undersøgelsesniveau (\"Top\" som standard)."
// question.indent: "Adds space or margin between the question content and the left border of the question box." => "Tilføjer mellemrum eller margen mellem spørgsmålsindholdet og spørgsmålsfeltets venstre kant."
// question.width: "Sets the width of the question in proportion to other survey elements in the same line. Accepts CSS values (px, %, in, pt, etc.)." => "Angiver bredden af spørgsmålet i forhold til andre undersøgelseselementer på samme linje. Accepterer CSS-værdier (px, %, in, pt osv.)."
// surveyvalidator.expression: "Use the magic wand icon to set a validation rule for the question." => "Brug tryllestavsikonet til at angive en valideringsregel for spørgsmålet."
// question.textUpdateMode: "Choose from: \"On lost focus\" - the value is updated when the input field loses focus; \"While typing\" - the value is updated in real-time, as users are typing. The \"Inherit\" option applies the survey-level setting (\"On lost focus\" by default)." => "Vælg mellem: \"Ved tabt fokus\" - værdien opdateres, når indtastningsfeltet mister fokus; \"Mens du skriver\" - værdien opdateres i realtid, da brugerne skriver. Indstillingen \"Nedarv\" anvender indstillingen på undersøgelsesniveau (\"Ved mistet fokus\" som standard)."
// question.url: "You can use any web service as a data source for multiple-choice questions. To populate choice values, enter the URL of the service providing the data." => "Du kan bruge enhver webtjeneste som datakilde til multiple choice-spørgsmål. Hvis du vil udfylde valgværdier, skal du angive URL-adressen på den tjeneste, der leverer dataene."
// question.searchMode: "A comparison operation used to filter the drop-down list." => "En sammenligningshandling, der bruges til at filtrere rullelisten."
// signaturepad.signatureWidth: "Sets the width of the displayed signature area and the resulting image." => "Indstiller bredden på det viste signaturområde og det resulterende billede."
// signaturepad.signatureHeight: "Sets the height of the displayed signature area and the resulting image." => "Indstiller højden på det viste signaturområde og det resulterende billede."
// signaturepad.signatureAutoScaleEnabled: "Select if you want the signature area to fill all available space within the question box while maintaining the default 3:2 aspect ratio. When custom width and height values are set, the setting will keep the aspect ratio of these dimensions." => "Vælg, om signaturområdet skal udfylde al tilgængelig plads i spørgsmålsfeltet, samtidig med at standardformatet 3:2 bevares. Når brugerdefinerede bredde- og højdeværdier er angivet, bevarer indstillingen højde-bredde-forholdet for disse dimensioner."
// file.imageHeight: "Adjusts the height of the image in the survey results." => "Justerer billedets højde i undersøgelsesresultaterne."
// file.imageWidth: "Adjusts the width of the image in the survey results." => "Justerer billedets bredde i undersøgelsesresultaterne."
// imagepicker.imageHeight: "Overrides the minimum and maximum height values." => "Tilsidesætter minimum- og maksimumhøjdeværdierne."
// imagepicker.imageWidth: "Overrides the minimum and maximum width values." => "Tilsidesætter værdierne for minimum- og maksimumbredde."
// imagepicker.choices: "\"Value\" serves as an item ID used in conditional rules; \"Text\" is displayed to respondents." => "\"Værdi\" fungerer som et vare-id, der bruges i betingede regler; \"Tekst\" vises til respondenterne."
// text.size: "This setting only resizes the input field and doesn't affect the width of the question box. To limit the accepted input length, go to <b>Validation → Maximum character limit</b>." => "Denne indstilling ændrer kun størrelsen på inputfeltet og påvirker ikke bredden af spørgsmålsfeltet. Hvis du vil begrænse den accepterede inputlængde, skal du gå til <b>Validering → Maksimal tegngrænse</b>."
// comment.rows: "Sets the number of displayed lines in the input field. If the input takes up more lines, the scroll bar will appear." => "Indstiller antallet af viste linjer i indtastningsfeltet. Hvis indgangen fylder flere linjer, vises rullepanelet."
// survey.mode: "Choose between: \"Editable\" - enables respondents to fill out your survey; \"Read-only\" - disables form editing." => "Vælg mellem: \"Redigerbar\" - gør det muligt for respondenter at udfylde din undersøgelse; \"Skrivebeskyttet\" - deaktiverer formularredigering."
// matrixdropdowncolumn.name: "A column ID that is not visible to respondents." => "Et kolonne-id, der ikke er synligt for svarpersoner."
// matrixdropdowncolumn.isUnique: "When enabled for a column, a respondent is required to provide a unique response for each question within this column." => "Når det er aktiveret for en kolonne, skal en svarperson give et entydigt svar på hvert spørgsmål i denne kolonne."
// matrixdropdowncolumn.rows: "Sets the number of displayed lines in the input field. If the input takes up more lines, the scroll bar will appear." => "Indstiller antallet af viste linjer i indtastningsfeltet. Hvis indgangen fylder flere linjer, vises rullepanelet."
// matrixdropdowncolumn.visibleIf: "Use the magic wand icon to set a conditional rule that determines column visibility." => "Brug tryllestavsikonet til at angive en betinget regel, der bestemmer kolonnesynligheden."
// matrixdropdowncolumn.enableIf: "Use the magic wand icon to set a conditional rule that disables the read-only mode for the column." => "Brug tryllestavsikonet til at angive en betinget regel, der deaktiverer skrivebeskyttet tilstand for kolonnen."
// matrixdropdowncolumn.requiredIf: "Use the magic wand icon to set a conditional rule that prevents survey submission unless at least one nested question has an answer." => "Brug tryllestavsikonet til at angive en betinget regel, der forhindrer indsendelse af undersøgelser, medmindre mindst ét indlejret spørgsmål har et svar."
// matrixdropdowncolumn.showInMultipleColumns: "When selected, creates an individual column for each choice option." => "Når denne indstilling er valgt, oprettes der en individuel kolonne for hver valgmulighed."
// pehelp.widthMode: "Choose from: \"Static\" - sets a fixed width; \"Responsive\" - makes the survey occupy the full width of the screen; \"Auto\" - applies either of the two depending on the question types used." => "Vælg mellem: \"Statisk\" - indstiller en fast bredde; \"Responsive\" - får undersøgelsen til at optage skærmens fulde bredde; \"Auto\" - gælder for en af de to afhængigt af de anvendte spørgsmålstyper."
// pehelp.logo: "Paste an image link (no size limits) or click the folder icon to browse a file from your computer (up to 64KB)." => "Indsæt et billedlink (ingen størrelsesbegrænsninger), eller klik på mappeikonet for at gennemse en fil fra din computer (op til 64 KB)."
// pehelp.logoWidth: "Sets a logo width in CSS units (px, %, in, pt, etc.)." => "Indstiller en logobredde i CSS-enheder (px, %, in, pt osv.)."
// pehelp.logoHeight: "Sets a logo height in CSS units (px, %, in, pt, etc.)." => "Indstiller en logohøjde i CSS-enheder (px, %, i, pt osv.)."
// pehelp.logoFit: "Choose from: \"None\" - image maintains its original size; \"Contain\" - image is resized to fit while maintaining its aspect ratio; \"Cover\" - image fills the entire box while maintaining its aspect ratio; \"Fill\" - image is stretched to fill the box without maintaining its aspect ratio." => "Vælg mellem: \"Ingen\" - billedet bevarer sin oprindelige størrelse; \"Contain\" - billedet ændres til at passe, samtidig med at dets billedformat opretholdes; \"Cover\" - billedet fylder hele kassen, samtidig med at billedformatet opretholdes; \"Fyld\" - billedet strækkes for at udfylde boksen uden at opretholde dets billedformat."
// pehelp.showNavigationButtons: "Sets the visibility and location of navigation buttons on a page." => "Angiver synligheden og placeringen af navigationsknapper på en side."
// pehelp.showProgressBar: "Sets the visibility and location of a progress bar. The \"Auto\" value displays the progress bar above or below the survey header." => "Indstiller synligheden og placeringen af en statuslinje. Værdien \"Auto\" viser statuslinjen over eller under undersøgelsesoverskriften."
// pehelp.showPreviewBeforeComplete: "Enable the preview page with all or answered questions only." => "Aktivér eksempelsiden med alle eller kun besvarede spørgsmål."
// pehelp.questionTitleLocation: "Applies to all questions within the survey. This setting can be overridden by title alignment rules at lower levels: panel, page, or question. A lower-level setting will override those on a higher level." => "Gælder for alle spørgsmål i undersøgelsen. Denne indstilling kan tilsidesættes af titeljusteringsregler på lavere niveauer: panel, side eller spørgsmål. En indstilling på lavere niveau tilsidesætter dem på et højere niveau."
// pehelp.requiredMark: "A symbol or a sequence of symbols indicating that an answer is required." => "Et symbol eller en sekvens af symboler, der angiver, at et svar er påkrævet."
// pehelp.questionStartIndex: "Enter a number or letter with which you want to start numbering." => "Indtast et tal eller bogstav, som du vil starte nummereringen med."
// pehelp.questionErrorLocation: "Sets the location of an error message in relation to the question with invalid input. Choose between: \"Top\" - an error text is placed at the top of the question box; \"Bottom\" - an error text is placed at the bottom of the question box." => "Angiver placeringen af en fejlmeddelelse i forhold til spørgsmålet med ugyldigt input. Vælg mellem: \"Top\" - en fejltekst placeres øverst i spørgsmålsfeltet; \"Nederst\" - en fejltekst placeres nederst i spørgsmålsfeltet."
// pehelp.autoFocusFirstQuestion: "Select if you want the first input field on each page ready for text entry." => "Vælg, om det første indtastningsfelt på hver side skal være klar til indtastning af tekst."
// pehelp.questionOrder: "Keeps the original order of questions or randomizes them. The effect of this setting is only visible in the Preview tab." => "Bevarer den oprindelige rækkefølge af spørgsmål eller randomiserer dem. Effekten af denne indstilling er kun synlig under fanen Eksempel."
// pehelp.maxTextLength: "For text entry questions only." => "Kun til spørgsmål om indtastning af tekst."
// pehelp.maxCommentLength: "For question comments only." => "Kun til kommentarer til spørgsmål."
// pehelp.autoGrowComment: "Select if you want question comments and Long Text questions to auto-grow in height based on the entered text length." => "Vælg, om spørgsmålskommentarer og lange tekstspørgsmål automatisk skal vokse i højden baseret på den indtastede tekstlængde."
// pehelp.allowResizeComment: "For question comments and Long Text questions only." => "Kun til spørgsmålskommentarer og lange tekstspørgsmål."
// pehelp.calculatedValues: "Custom variables serve as intermediate or auxiliary variables used in form calculations. They take respondent inputs as source values. Each custom variable has a unique name and an expression it's based on." => "Brugerdefinerede variabler fungerer som mellemliggende eller hjælpevariabler, der bruges i formularberegninger. De tager respondentinput som kildeværdier. Hver brugerdefineret variabel har et entydigt navn og et udtryk, den er baseret på."
// pehelp.includeIntoResult: "Select if you wish the calculated value of the expression to be saved along with survey results." => "Vælg, om den beregnede værdi af udtrykket skal gemmes sammen med undersøgelsesresultaterne."
// pehelp.triggers: "A trigger is an event or condition that is based on an expression. Once the expression is evaluated to \"true\", a trigger sets off an action. Such an action can optionally have a target question it affects." => "En udløser er en hændelse eller betingelse, der er baseret på et udtryk. Når udtrykket er evalueret til \"sand\", udløser en udløser en handling. En sådan handling kan eventuelt have et målspørgsmål, den påvirker."
// pehelp.clearInvisibleValues: "Choose whether or not to clear values for questions hidden by conditional logic and when to do it." => "Vælg, om du vil rydde værdier for spørgsmål, der er skjult af betinget logik, og hvornår du vil gøre det."
// pehelp.textUpdateMode: "Choose from: \"On lost focus\" - the value is updated when the input field loses focus; \"While typing\" - the value is updated in real-time, as users are typing." => "Vælg mellem: \"Ved tabt fokus\" - værdien opdateres, når indtastningsfeltet mister fokus; \"Mens du skriver\" - værdien opdateres i realtid, da brugerne skriver."
// pehelp.columns: "The left value serves as a column ID used in conditional rules, the right value is displayed to respondents." => "Den venstre værdi fungerer som et kolonne-id, der bruges i betingede regler, den rigtige værdi vises for respondenterne."
// pehelp.rows: "The left value serves as a row ID used in conditional rules, the right value is displayed to respondents." => "Den venstre værdi fungerer som et række-id, der bruges i betingede regler, den rigtige værdi vises for respondenterne."
// pehelp.columnMinWidth: "Accepts CSS values (px, %, in, pt, etc.)." => "Accepterer CSS-værdier (px, %, in, pt osv.)."
// pehelp.rowTitleWidth: "Accepts CSS values (px, %, in, pt, etc.)." => "Accepterer CSS-værdier (px, %, in, pt osv.)."
// pehelp.cellErrorLocation: "Sets the location of an error message in relation to a cell with invalid input. The \"Inherit\" option applies the setting from the \"Error message alignment\" property." => "Angiver placeringen af en fejlmeddelelse i forhold til en celle med ugyldigt input. Indstillingen \"Arv\" anvender indstillingen fra egenskaben \"Justering af fejlmeddelelse\"."
// pehelp.keyDuplicationError: "When the \"Prevent duplicate responses\" property is enabled, a respondent attempting to submit a duplicate entry will receive the following error message." => "Når egenskaben \"Undgå dublerede svar\" er aktiveret, modtager en svarperson, der forsøger at sende en dubletpost, følgende fejlmeddelelse."
// pehelp.totalExpression: "Allows you to calculate total values based on an expression. The expression can include basic calculations (`{q1_id} + {q2_id}`), Boolean expressions (`{age} > 60`) and functions ('iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, etc.)." => "Giver dig mulighed for at beregne samlede værdier baseret på et udtryk. Udtrykket kan omfatte grundlæggende beregninger ('{q1_id} + {q2_id}'), booleske udtryk ('{alder} > 60') og funktioner ('iif()', 'today()', 'age()', 'min()', 'max()', 'avg()' osv.)."
// pehelp.confirmDelete: "Triggers a prompt asking to confirm the row deletion." => "Udløser en prompt, der beder om at bekræfte sletningen af rækken."
// pehelp.copyDefaultValueFromLastEntry: "Duplicates answers from the last row and assigns them to the next added dynamic row." => "Dublerer svar fra den sidste række og tildeler dem til den næste tilføjede dynamiske række."
// pehelp.description: "Type a subtitle." => "Skriv en undertekst."
// pehelp.locale: "Choose a language to begin creating your survey. To add a translation, switch to a new language and translate the original text here or in the Translations tab." => "Vælg et sprog for at begynde at oprette undersøgelsen. Hvis du vil tilføje en oversættelse, skal du skifte til et nyt sprog og oversætte den oprindelige tekst her eller på fanen Oversættelser."
// pehelp.detailPanelMode: "Sets the location of a details section in relation to a row. Choose from: \"None\" - no expansion is added; \"Under the row\" - a row expansion is placed under each row of the matrix; \"Under the row, display one row expansion only\" - an expansion is displayed under a single row only, the remaining row expansions are collapsed." => "Angiver placeringen af en detaljesektion i forhold til en række. Vælg mellem: \"Ingen\" - ingen udvidelse tilføjes; \"Under rækken\" - en rækkeudvidelse placeres under hver række i matrixen; \"Vis kun én rækkeudvidelse under rækken\" - en udvidelse vises kun under en enkelt række, de resterende rækkeudvidelser skjules."
// pehelp.imageFit: "Choose from: \"None\" - image maintains its original size; \"Contain\" - image is resized to fit while maintaining its aspect ratio; \"Cover\" - image fills the entire box while maintaining its aspect ratio; \"Fill\" - image is stretched to fill the box without maintaining its aspect ratio." => "Vælg mellem: \"Ingen\" - billedet bevarer sin oprindelige størrelse; \"Contain\" - billedet ændres til at passe, samtidig med at dets billedformat opretholdes; \"Cover\" - billedet fylder hele kassen, samtidig med at billedformatet opretholdes; \"Fyld\" - billedet strækkes for at udfylde boksen uden at opretholde dets billedformat."
// pehelp.autoGrow: "Gradually increases the height of the input field as data is being entered. Overrides the \"Input field height (in lines)\" setting." => "Øger gradvist inputfeltets højde, efterhånden som data indtastes. Tilsidesætter indstillingen \"Inputfelthøjde (i linjer)\"."
// pehelp.allowResize: "The resize handle (or grip) appears in the corner and can be dragged to alter the size of the input field." => "Størrelseshåndtaget (eller grebet) vises i hjørnet og kan trækkes for at ændre størrelsen på indtastningsfeltet."
// pehelp.timeLimit: "A time interval in seconds after which the survey auto-advances to the Thank You page." => "Et tidsinterval i sekunder, hvorefter undersøgelsen automatisk går videre til siden Tak."
// pehelp.timeLimitPerPage: "A time interval in seconds after which the survey auto-advances to the next page." => "Et tidsinterval i sekunder, hvorefter undersøgelsen automatisk går videre til næste side."
// page.timeLimit: "A time interval in seconds after which the survey auto-advances to the next page." => "Et tidsinterval i sekunder, hvorefter undersøgelsen automatisk går videre til næste side."
// page.visibleIf: "Use the magic wand icon to set a conditional rule that determines page visibility." => "Brug tryllestavsikonet til at indstille en betinget regel, der bestemmer sidens synlighed."
// page.enableIf: "Use the magic wand icon to set a conditional rule that disables the read-only mode for the page." => "Brug tryllestavsikonet til at angive en betinget regel, der deaktiverer skrivebeskyttet tilstand for siden."
// page.requiredIf: "Use the magic wand icon to set a conditional rule that prevents survey submission unless at least one nested question has an answer." => "Brug tryllestavsikonet til at angive en betinget regel, der forhindrer indsendelse af undersøgelser, medmindre mindst ét indlejret spørgsmål har et svar."
// page.questionTitleLocation: "Applies to all questions within this page. If you want to override this setting, define title alignment rules for individual questions or panels. The \"Inherit\" option applies the survey-level setting (\"Top\" by default)." => "Gælder for alle spørgsmål på denne side. Hvis du vil tilsidesætte denne indstilling, skal du definere regler for titeljustering for individuelle spørgsmål eller paneler. Indstillingen \"Nedarv\" anvender indstillingen på undersøgelsesniveau (\"Top\" som standard)."
// page.questionErrorLocation: "Sets the location of an error message in relation to the question with invalid input. Choose between: \"Top\" - an error text is placed at the top of the question box; \"Bottom\" - an error text is placed at the bottom of the question box. The \"Inherit\" option applies the survey-level setting (\"Top\" by default)." => "Angiver placeringen af en fejlmeddelelse i forhold til spørgsmålet med ugyldigt input. Vælg mellem: \"Top\" - en fejltekst placeres øverst i spørgsmålsfeltet; \"Nederst\" - en fejltekst placeres nederst i spørgsmålsfeltet. Indstillingen \"Nedarv\" anvender indstillingen på undersøgelsesniveau (\"Top\" som standard)."
// page.questionOrder: "Keeps the original order of questions or randomizes them. The \"Inherit\" option applies the survey-level setting (\"Original\" by default). The effect of this setting is only visible in the Preview tab." => "Bevarer den oprindelige rækkefølge af spørgsmål eller randomiserer dem. Indstillingen \"Arv\" anvender indstillingen på undersøgelsesniveau (\"Original\" som standard). Effekten af denne indstilling er kun synlig under fanen Eksempel."
// page.showNavigationButtons: "Sets the visibility of navigation buttons on the page. The \"Inherit\" option applies the survey-level setting, which defaults to \"Visible\"." => "Indstiller synligheden af navigationsknapper på siden. Indstillingen \"Arv\" anvender indstillingen på undersøgelsesniveau, som som standard er \"Synlig\"."
// pehelp.panelsState: "Choose from: \"Locked\" - users cannot expand or collapse panels; \"Collapse all\" - all panels start in a collapsed state; \"Expand all\" - all panels start in an expanded state; \"First expanded\" - only the first panel is initially expanded." => "Vælg mellem: \"Låst\" - brugere kan ikke udvide eller skjule paneler; \"Skjul alle\" - alle paneler starter i kollapset tilstand; \"Udvid alle\" - alle paneler starter i udvidet tilstand; \"Først udvidet\" - kun det første panel udvides oprindeligt."
// pehelp.imageLinkName: "Enter a shared property name within the array of objects that contains the image or video file URLs you want to display in the choice list." => "Angiv et delt egenskabsnavn i den række objekter, der indeholder de URL-adresser til billeder eller videofiler, du vil have vist på valglisten."
// pehelp.choices: "The left value serves as an item ID used in conditional rules, the right value is displayed to respondents." => "Den venstre værdi fungerer som et vare-id, der bruges i betingede regler, den rigtige værdi vises for respondenterne."
// pehelp.title: "Type a user-friendly title to display." => "Skriv en brugervenlig titel, der skal vises."
// pehelp.waitForUpload: "Ensures that users won't complete the survey until files are uploaded." => "Sikrer, at brugerne ikke gennemfører undersøgelsen, før filerne er uploadet."
// pehelp.minWidth: "Accepts CSS values (px, %, in, pt, etc.)." => "Accepterer CSS-værdier (px, %, in, pt osv.)."
// pehelp.maxWidth: "Accepts CSS values (px, %, in, pt, etc.)." => "Accepterer CSS-værdier (px, %, in, pt osv.)."
// pehelp.width: "Accepts CSS values (px, %, in, pt, etc.)." => "Accepterer CSS-værdier (px, %, in, pt osv.)."
// pehelp.useDisplayValuesInDynamicTexts: "In single- and multiple-selection question types, each choice option has an ID and display value. When selected, this setting shows a display value instead of an ID value in HTML questions and dynamic titles and descriptions of survey elements." => "I spørgsmålstyper med et enkelt og flere valg har hver valgmulighed et id og en visningsværdi. Når denne indstilling er valgt, vises der en visningsværdi i stedet for en id-værdi i HTML-spørgsmål og dynamiske titler og beskrivelser af undersøgelseselementer."
// pehelp.clearIfInvisible: "Choose whether or not to clear question values hidden by conditional logic and when to do it. The \"Inherit\" option applies the survey-level setting (\"Upon survey completion\" by default)." => "Vælg, om du vil rydde spørgsmålsværdier, der er skjult af betinget logik, og hvornår det skal gøres. Indstillingen \"Nedarv\" anvender indstillingen på undersøgelsesniveau (\"Ved afslutning af undersøgelsen\" som standard)."
// pehelp.choicesFromQuestionMode: "Choose from: \"All\" - copies all choice options from the selected question; \"Selected\" - dynamically copies only selected choice options; \"Unselected\" - dynamically copies only unselected choice options. The \"None\" and \"Other\" options are copied by default if enabled in the source question." => "Vælg mellem: \"Alle\" - kopierer alle valgmuligheder fra det valgte spørgsmål; \"Valgt\" - kopierer dynamisk kun valgte valgindstillinger; \"Ikke valgt\" - kopierer dynamisk kun ikke-valgte valgindstillinger. Indstillingerne \"Ingen\" og \"Andre\" kopieres som standard, hvis de er aktiveret i kildespørgsmålet."
// pehelp.showOtherItem: "When selected, users can include additional input in a separate comment box." => "Når denne indstilling er valgt, kan brugerne medtage yderligere input i et separat kommentarfelt."
// pehelp.separateSpecialChoices: "Displays each special choice option (\"None\", \"Other\", \"Select All\") on a new line, even when using a multiple-column layout." => "Viser hver indstilling for særlige valgmuligheder (\"Ingen\", \"Andet\", \"Vælg alle\") på en ny linje, selv når du bruger et layout med flere kolonner."
// pehelp.path: "Specify the location within the service dataset where the target array of objects is located. Leave empty if the URL already points to the array." => "Angiv placeringen i tjenestedatasættet, hvor målmatrixen af objekter er placeret. Lad feltet stå tomt, hvis URL-adressen allerede peger på arrayet."
// pehelp.titleName: "Enter a uniform property name within the array of objects that contains the values you want to display in the choice list." => "Angiv et ensartet egenskabsnavn i den matrix af objekter, der indeholder de værdier, du vil have vist på valglisten."
// pehelp.allowEmptyResponse: "Select to allow the service to return an empty response or array." => "Vælg for at tillade, at tjenesten returnerer et tomt svar eller en matrix."
// pehelp.choicesVisibleIf: "Use the magic wand icon to set a conditional rule that determines the visibility of all choice options." => "Brug tryllestavsikonet til at angive en betinget regel, der bestemmer synligheden af alle valgmuligheder."
// pehelp.rateValues: "The left value serves as an item ID used in conditional rules, the right value is displayed to respondents." => "Den venstre værdi fungerer som et vare-id, der bruges i betingede regler, den rigtige værdi vises for respondenterne."
// rating.displayMode: "\"Auto\" selects between the \"Buttons\" and \"Dropdown\" modes based on the available width. When the width is insufficient to display buttons, the question displays a dropdown." => "\"Auto\" vælger mellem tilstandene \"Knapper\" og \"Dropdown\" baseret på den tilgængelige bredde. Når bredden ikke er tilstrækkelig til at vise knapper, vises der en rullemenu i spørgsmålet."
// pehelp.valuePropertyName: "Allows you to connect questions that produce results in different formats. When such questions are linked together using a join identifier, this shared property stores selected question values." => "Giver dig mulighed for at forbinde spørgsmål, der giver resultater i forskellige formater. Når sådanne spørgsmål kædes sammen ved hjælp af et join-id, gemmer denne delte ejendom valgte spørgsmålsværdier."
// pehelp.searchEnabled: "Select if you want to update the drop-down menu contents to match the search query that a user is typing in the input field." => "Vælg, om du vil opdatere indholdet i rullemenuen, så det svarer til den søgeforespørgsel, som en bruger skriver i indtastningsfeltet."
// pehelp.valueTrue: "A value to save in survey results when respondents give a positive answer." => "En værdi, der skal gemmes i undersøgelsesresultater, når respondenterne giver et positivt svar."
// pehelp.valueFalse: "A value to save in survey results when respondents give a negative answer." => "En værdi, der skal gemmes i undersøgelsesresultater, når respondenterne giver et negativt svar."
// pehelp.showPreview: "It's not recommended to disable this option as it overrides the Preview image and makes it hard for a user to understand whether the files have been uploaded." => "Det anbefales ikke at deaktivere denne indstilling, da den tilsidesætter eksempelbilledet og gør det svært for en bruger at forstå, om filerne er blevet uploadet."
// pehelp.needConfirmRemoveFile: "Triggers a prompt asking to confirm the file deletion." => "Udløser en prompt, der beder om at bekræfte filsletningen."
// pehelp.selectToRankEnabled: "Enable to rank only selected choices. Users will drag selected items from the choice list to order them within the ranking area." => "Aktivér for kun at rangere valgte valg. Brugere trækker valgte elementer fra valglisten for at sortere dem inden for rangeringsområdet."
// pehelp.dataList: "Enter a list of choices that will be suggested to the respondent during input." => "Angiv en liste over valgmuligheder, der vil blive foreslået svarpersonen under input."
// pehelp.inputSize: "The setting only resizes the input fields and doesn't affect the width of the question box." => "Indstillingen ændrer kun størrelsen på inputfelterne og påvirker ikke bredden af spørgsmålsfeltet."
// pehelp.itemTitleWidth: "Sets consistent width for all item labels in pixels" => "Angiver ensartet bredde for alle vareetiketter i pixel"
// pehelp.contentMode: "The \"Auto\" option automatically determines the suitable mode for display - Image, Video, or YouTube - based on the source URL provided." => "Indstillingen \"Auto\" bestemmer automatisk den passende tilstand til visning - Billede, Video eller YouTube - baseret på den angivne kilde-URL."
// pehelp.altText: "Serves as a substitute when the image cannot be displayed on a user's device and for accessibility purposes." => "Fungerer som erstatning, når billedet ikke kan vises på en brugers enhed og af tilgængelighedshensyn."
// pehelp.rateColorMode: "Defines the color of the selected emoji when the Rating icon type is set to \"Smileys\". Choose between: \"Default\" - the selected emoji appears in default survey color; \"Scale\" - the selected emoji inherits color from the rating scale." => "Definerer farven på den valgte emoji, når ikontypen Vurdering er indstillet til \"Smileys\". Vælg mellem: \"Standard\" - den valgte emoji vises i standard undersøgelsesfarve; \"Skala\" - den valgte emoji arver farve fra vurderingsskalaen."
// expression.name: "An expression ID that is not visible to respondents." => "Et udtryks-id, der ikke er synligt for svarpersoner."
// expression.description: "Type an expression subtitle." => "Skriv et udtryk undertekst."
// expression.expression: "An expression can include basic calculations (`{q1_id} + {q2_id}`), conditions (`{age} > 60`), and functions ('iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, etc.)." => "Et udtryk kan omfatte grundlæggende beregninger ('{q1_id} + {q2_id}'), betingelser ('{alder} > 60') og funktioner ('iif()', 'today()', 'age()', 'min()', 'max()', 'avg()' osv.)."
// pehelp.storeOthersAsComment: "Select to store the \"Other\" option value as a separate property in survey results." => "Vælg for at gemme værdien \"Andet\" som en separat egenskab i undersøgelsesresultater."
// p.swapOrder: "Swap the order of Yes and No" => "Skift rækkefølgen Ja og Nej"
// p.itemTitleWidth: "Item label width (in px)" => "Bredde på vareetiket (i px)"
// p.selectToRankEmptyRankedAreaText: "Text to show if all options are selected" => "Tekst, der viser, om alle indstillinger er markeret"
// p.selectToRankEmptyUnrankedAreaText: "Placeholder text for the ranking area" => "Pladsholdertekst for rangeringsområdet"
// pe.autoAdvanceAllowComplete: "Complete the survey automatically" => "Udfyld undersøgelsen automatisk"
// pehelp.autoAdvanceAllowComplete: "Select if you want the survey to complete automatically after a respondent answers all questions." => "Vælg, om undersøgelsen skal fuldføres automatisk, når svarpersonen har besvaret alle spørgsmål."
// masksettings.saveMaskedValue: "Save masked value in survey results" => "Gem maskeret værdi i undersøgelsesresultater"
// patternmask.pattern: "Value pattern" => "Værdimønster"
// datetimemask.min: "Minimum value" => "Mindste værdi"
// datetimemask.max: "Maximum value" => "Maksimal værdi"
// numericmask.allowNegativeValues: "Allow negative values" => "Tillad negative værdier"
// numericmask.thousandsSeparator: "Thousands separator" => "Tusindtalsseparator"
// numericmask.decimalSeparator: "Decimal separator" => "Decimalseparator"
// numericmask.precision: "Value precision" => "Værdi præcision"
// numericmask.min: "Minimum value" => "Mindste værdi"
// numericmask.max: "Maximum value" => "Maksimal værdi"
// currencymask.prefix: "Currency prefix" => "Valutapræfiks"
// currencymask.suffix: "Currency suffix" => "Suffiks for valuta"
// pe.maskType: "Input mask type" => "Type af inputmaske"
// maskTypes.patternmask: "Pattern" => "Mønster"
// maskTypes.numericmask: "Numeric" => "Numerisk"
// maskTypes.datetimemask: "Date and Time" => "Dato og klokkeslæt"
// maskTypes.currencymask: "Currency" => "Valuta"
// tabs.mask: "Input Mask Settings" => "Indstillinger for inputmaske"
// pe.pattern_placeholder: "Ex.: +1(999)-999-99-99" => "Eks.: +1(999)-999-99-99"
// pe.datetimepattern_placeholder: "Ex.: mm/dd/yyyy" => "Eks.: mm/dd/åååå"
// pe.currencyprefix_placeholder: "Ex.: $" => "Eks.: $"
// pe.currencysuffix_placeholder: "Ex.: USD" => "Eks.: USD"
// pv.textWrapEnabled: "Wrap choices" => "Valg af wrap"
// question.textWrapEnabled: "Long texts in choice options will automatically generate line breaks to fit within the drop-down menu. Unselect if you want the texts to clip." => "Lange tekster i valgmuligheder genererer automatisk linjeskift, så de passer ind i rullemenuen. Fjern markeringen, hvis teksterne skal klippes."
// masksettings.saveMaskedValue: "Select if you want to store the question value with an applied mask in survey results." => "Vælg, om du vil gemme spørgsmålsværdien med en anvendt maske i undersøgelsesresultater."
// patternmask.pattern: "The pattern can contain string literals and the following placeholders: `9` - for a digit; `a` - for an upper- or lower-case letter; `#` - for a digit or an upper- or lower-case letter. Use backslash `\\` to escape a character." => "Mønsteret kan indeholde strengkonstanter og følgende pladsholdere: '9' - for et ciffer; »a« - for store eller små bogstaver '#' - for et ciffer eller et stort eller lille bogstav. Brug omvendt skråstreg '\\' for at undslippe et tegn."
// datetimemask.pattern: "The pattern can contain separator characters and the following placeholders: `m` - for month number; `mm` - for month number, with leading zero for single-digit values; `d` - for day of the month; `dd` - for day of the month, with leading zero for single-digit values; `yy` - for the last two digits of the year; `yyyy` - for a four-digit year." => "Mønsteret kan indeholde separatortegn og følgende pladsholdere: 'm' - for månedsnummer; »mm« — for månedsnummer med foranstillet nul for encifrede værdier 'd' - for dag i måneden; 'dd' - for dag i måneden med foranstillet nul for encifrede værdier 'yy' - for de sidste to cifre i året; 'YYYY' - for et firecifret år."
// numericmask.decimalSeparator: "A symbol used to separate the fractional part from the integer part of a displayed number." => "Et symbol, der bruges til at adskille brøkdelen fra heltalsdelen af et vist tal."
// numericmask.thousandsSeparator: "A symbol used to separate the digits of a large number into groups of three." => "Et symbol, der bruges til at adskille cifrene i et stort tal i grupper på tre."
// numericmask.precision: "Limits how many digits to retain after the decimal point for a displayed number." => "Begrænser, hvor mange cifre der skal bevares efter decimaltegnet for et vist tal."
// currencymask.prefix: "One or several symbols to be displayed before the value." => "Et eller flere symboler, der skal vises før værdien."
// currencymask.suffix: "One or several symbols to be displayed after the value." => "Et eller flere symboler, der skal vises efter værdien."
// ed.translationSource: "Source: " => "Kilde: "
// ed.translationTarget: "Target: " => "Mål: "
// ed.pagePlaceHolder: "The page is empty. Drag an element from the toolbox or click the button below." => "Siden er tom. Træk et element fra værktøjskassen, eller klik på knappen nedenfor."
// maskTypes.none: "None" => "Ingen"
// itemvalue@rows.visibleIf: "Make the row visible if" => "Gør rækken synlig, hvis"
// itemvalue@rows.enableIf: "Make the row editable if" => "Gør rækken redigerbar, hvis"
// signaturepad.placeholderReadOnly: "Placeholder text in read-only or preview mode" => "Pladsholdertekst i skrivebeskyttet tilstand eller eksempeltilstand"
// pe.textWrapEnabled: "Wrap choices" => "Valg af wrap"
// image.contentMode: "The \"Auto\" option automatically determines the suitable mode for display - Image, Video, or YouTube - based on the source URL provided." => "Indstillingen \"Auto\" bestemmer automatisk den passende tilstand til visning - Billede, Video eller YouTube - baseret på den angivne kilde-URL."
// imagepicker.contentMode: "Choose between \"Image\" and \"Video\" to set the content mode of the media selector. If \"Image\" is selected, ensure that all options provided are image files in the following formats: JPEG, GIF, PNG, APNG, SVG, BMP, ICO. Similarly, if \"Video\" is selected, ensure that all options are direct links to video files in the following formats: MP4, MOV, WMV, FLV, AVI, MKV. Please note that YouTube links are not supported for video options." => "Vælg mellem \"Billede\" og \"Video\" for at indstille medievælgerens indholdstilstand. Hvis \"Billede\" er valgt, skal du sikre dig, at alle angivne indstillinger er billedfiler i følgende formater: JPEG, GIF, PNG, APNG, SVG, BMP, ICO. Tilsvarende, hvis \"Video\" er valgt, skal du sikre dig, at alle indstillinger er direkte links til videofiler i følgende formater: MP4, MOV, WMV, FLV, AVI, MKV. Bemærk, at YouTube-links ikke understøttes for videoindstillinger."
// ed.selectFile: "Select a file" => "Vælg en fil"
// ed.removeFile: "Remove the file" => "Fjern filen"
// pe.searchMode: "Search Mode" => "Søgetilstand"
// ed.surveyPlaceHolderMobile: "Click the \"Add Question\" button below to start creating your form." => "Klik på knappen \"Tilføj spørgsmål\" nedenfor for at begynde at oprette din formular."
// ed.pagePlaceHolderMobile: "Click the \"Add Question\" button below to add a new element to the page." => "Klik på knappen \"Tilføj spørgsmål\" nedenfor for at tilføje et nyt element til siden."
// ed.panelPlaceHolderMobile: "Click the \"Add Question\" button below to add a new element to the panel." => "Klik på knappen \"Tilføj spørgsmål\" nedenfor for at tilføje et nyt element til panelet."
// ed.imagePlaceHolderMobile: "Click the button below and choose an image to upload" => "Klik på knappen nedenfor, og vælg et billede, der skal uploades"
// coloralpha.opacity: "Opacity" => "Opacitet"
// font.family: "Font family" => "Skrifttypefamilie"
// font.color: "Color" => "Farve"
// font.placeholderColor: "Placeholder color" => "Pladsholderfarve"
// font.size: "Size" => "Størrelse"
// theme.themeName: "Theme" => "Tema"
// theme.isPanelless: "Question appearance" => "Spørgsmål udseende"
// theme.editorPanel: "Background and corner radius" => "Baggrund og hjørneradius"
// theme.questionPanel: "Background and corner radius" => "Baggrund og hjørneradius"
// theme.primaryColor: "Accent color" => "Accent farve"
// theme.panelBackgroundTransparency: "Panel background opacity" => "Opacitet af panelets baggrund"
// theme.questionBackgroundTransparency: "Question background opacity" => "Spørgsmål baggrundsuigennemsigtighed"
// theme.fontSize: "Font size" => "Skrifttypestørrelse"
// theme.scale: "Scale" => "Skæl"
// theme.cornerRadius: "Corner radius" => "Hjørne radius"
// theme.pageTitle: "Title font" => "Titel skrifttype"
// theme.pageDescription: "Description font" => "Beskrivelse skrifttype"
// theme.questionTitle: "Title font" => "Titel skrifttype"
// theme.questionDescription: "Description font" => "Beskrivelse skrifttype"
// theme.editorFont: "Font" => "Skrifttype"
// theme.backgroundOpacity: "Opacity" => "Opacitet"
// theme.--sjs-font-family: "Font family" => "Skrifttypefamilie"
// theme.--sjs-general-backcolor-dim: "Background color" => "Baggrundsfarve"
// theme.--sjs-primary-backcolor: "Accent background" => "Accent baggrund"
// theme.--sjs-primary-forecolor: "Accent foreground" => "Accent forgrund"
// theme.--sjs-shadow-small: "Shadow effects" => "Skyggeeffekter"
// theme.--sjs-shadow-inner: "Shadow effects" => "Skyggeeffekter"
// theme.--sjs-border-default: "Colors" => "Farver"
// header@header.headerView: "View" => "Udsigt"
// header@header.logoPosition: "Logo position" => "Logo position"
// header@header.surveyTitle: "Survey title font" => "Skrifttype for undersøgelsestitel"
// header@header.surveyDescription: "Survey description font" => "Skrifttype til undersøgelsesbeskrivelse"
// header@header.headerTitle: "Survey title font" => "Skrifttype for undersøgelsestitel"
// header@header.headerDescription: "Survey description font" => "Skrifttype til undersøgelsesbeskrivelse"
// header@header.inheritWidthFrom: "Content area width" => "Bredde på indholdsområde"
// header@header.textAreaWidth: "Text width" => "Tekstbredde"
// header@header.backgroundColorSwitch: "Background color" => "Baggrundsfarve"
// header@header.backgroundImage: "Background image" => "Baggrundsbillede"
// header@header.backgroundImageOpacity: "Opacity" => "Opacitet"
// header@header.overlapEnabled: "Overlap" => "Overlapning"
// header@header.logoPositionX: "Logo position" => "Logo position"
// header@header.titlePositionX: "Title position" => "Titel position"
// header@header.descriptionPositionX: "Description position" => "Beskrivelse position"
// weight.400: "Regular" => "Regelmæssig"
// weight.600: "Heavy" => "Tung"
// weight.700: "Semi-bold" => "Halvfed skrift"
// weight.800: "Bold" => "Modig"
// backgroundImageFit.auto: "Auto" => "Auto"
// backgroundImageFit.cover: "Cover" => "Dække"
// backgroundImageFit.contain: "Contain" => "Indeholde"
// backgroundImageFit.fill: "Stretch" => "Stræk"
// backgroundImageFit.tile: "Tile" => "Flise"
// backgroundImageAttachment.fixed: "Fixed" => "Fast"
// backgroundImageAttachment.scroll: "Scroll" => "Rulle"
// headerView.basic: "Basic" => "Grundlæggende"
// headerView.advanced: "Advanced" => "Avanceret"
// inheritWidthFrom.survey: "Same as survey" => "Samme som undersøgelse"
// inheritWidthFrom.container: "Fit to container" => "Passer til beholder"
// backgroundColorSwitch.none: "None" => "Ingen"
// backgroundColorSwitch.accentColor: "Accent color" => "Accent farve"
// backgroundColorSwitch.custom: "Custom" => "Sædvane"
// colorPalette.light: "Light" => "Lys"
// colorPalette.dark: "Dark" => "Mørk"
// isPanelless.false: "Default" => "Standard"
// isPanelless.true: "Without Panels" => "Uden paneler"
// theme.cornerRadius: "Corner radius" => "Hjørne radius"
// theme.fontFamily: "Font family" => "Skrifttypefamilie"
// theme.fontWeightRegular: "Regular" => "Regelmæssig"
// theme.fontWeightHeavy: "Heavy" => "Tung"
// theme.fontWeightSemiBold: "Semi-bold" => "Halvfed skrift"
// theme.fontWeightBold: "Bold" => "Modig"
// theme.color: "Color" => "Farve"
// theme.placeholderColor: "Placeholder color" => "Pladsholderfarve"
// theme.size: "Size" => "Størrelse"
// theme.opacity: "Opacity" => "Opacitet"
// ed.toolboxFilteredTextPlaceholder: "Type to search..." => "Skriv for at søge..."
// ed.toolboxNoResultsFound: "No results found" => "Ingen resultater fundet"
// paneldynamic.tabTitlePlaceholder: "Tab title placeholder" => "Pladsholder til fanetitel"
// theme.--sjs-special-red: "Error messages" => "Fejlmeddelelser"
// paneldynamic.tabTitlePlaceholder: "A fallback text for tab titles that applies when the tab title pattern doesn't produce a meaningful value." => "En reservetekst til fanetitler, der gælder, når fanetitelmønsteret ikke giver en meningsfuld værdi."
// theme.fontColor: "Font color" => "Skriftfarve"
// theme.backgroundColor: "Background color" => "Baggrundsfarve"
// pe.questionTitleWidth: "Question title width" => "Spørgsmålets titelbredde"
// pe.fileInputPlaceholder: "Select a file or paste a file link..." => "Vælg en fil, eller indsæt et fillink..."
// panelbase.questionTitleWidth: "Ex.: 200px" => "Eks.: 200px"
// panel.questionTitleWidth: "Sets consistent width for question titles when they are aligned to the left of their question boxes. Accepts CSS values (px, %, in, pt, etc.)." => "Angiver ensartet bredde for spørgsmålstitler, når de er justeret til venstre for deres spørgsmålsbokse. Accepterer CSS-værdier (px, %, in, pt osv.)."
// page.questionTitleWidth: "Sets consistent width for question titles when they are aligned to the left of their question boxes. Accepts CSS values (px, %, in, pt, etc.)." => "Angiver ensartet bredde for spørgsmålstitler, når de er justeret til venstre for deres spørgsmålsbokse. Accepterer CSS-værdier (px, %, in, pt osv.)."
// pe.commentAreaRows: "Comment area height (in lines)" => "Højde på kommentarområdet (i linjer)"
// pehelp.commentAreaRows: "Sets the number of displayed lines in text areas for question comments. In the input takes up more lines, the scroll bar appears." => "Angiver antallet af viste linjer i tekstområder for spørgsmålskommentarer. I indgangen optager flere linjer, rullepanelet vises."
// pe.enabled: "Enabled" => "Aktiveret"
// pe.disabled: "Disabled" => "Handicappet"
// pe.inherit: "Inherit" => "Arve"
// pe.validateVisitedEmptyFields: "Validate empty fields on lost focus" => "Validere tomme felter ved mistet fokus"
// panellayoutcolumn.effectiveWidth: "Ex.: 30%" => "Eks.: 30%"
// panellayoutcolumn.questionTitleWidth: "Ex.: 200px" => "Eks.: 200px"
// pehelp.validateVisitedEmptyFields: "Enable this option to trigger validation when a user focuses on an empty input field and then leaves it without making any changes." => "Aktivér denne indstilling for at udløse validering, når en bruger fokuserer på et tomt inputfelt og derefter forlader det uden at foretage ændringer."
// pehelp.colCount: "Arranges choice options in a multi-column layout. When set to 0, the options are displayed in a single line." => "Arrangerer valgmuligheder i et layout med flere kolonner. Når den er indstillet til 0, vises indstillingerne på en enkelt linje."
// theme.isPanelless: "This setting applies only to questions outside of a panel." => "Denne indstilling gælder kun for spørgsmål uden for et panel."
// theme.primaryColor: "Sets a supplementary color that highlights key survey elements." => "Indstiller en supplerende farve, der fremhæver vigtige undersøgelseselementer."
// theme.panelBackgroundTransparency: "Adjusts the transparency of panels and question boxes relative to the survey background." => "Justerer gennemsigtigheden af paneler og spørgsmålsfelter i forhold til undersøgelsesbaggrunden."
// theme.questionBackgroundTransparency: "Adjusts the transparency of input elements relative to the survey background." => "Justerer gennemsigtigheden af inputelementer i forhold til undersøgelsesbaggrunden."
// theme.cornerRadius: "Sets the corner radius for all rectangular elements. Enable the Advanced Mode if you want to set individual corner radius values for input elements or panels and question boxes." => "Indstiller hjørneradius for alle rektangulære elementer. Aktiver Avanceret tilstand, hvis du vil indstille individuelle hjørneradiusværdier for inputelementer eller paneler og spørgsmålsfelter."
// theme.--sjs-general-backcolor-dim: "Sets the main background color of the survey." => "Indstiller undersøgelsens primære baggrundsfarve."
// header.inheritWidthFrom: "The \"Same as container\" option auto-adjusts the header content area width to fit into the HTML element the survey is placed in." => "Indstillingen \"Samme som beholder\" justerer automatisk bredden på sidehovedindholdsområdet, så den passer ind i det HTML-element, som undersøgelsen er placeret i."
// header.textAreaWidth: "The width of the header area that contains the survey title and description, measured in pixels." => "Bredden af det sidehovedområde, der indeholder undersøgelsens titel og beskrivelse, målt i pixel."
// panellayoutcolumn.effectiveWidth: "Accepts values %." => "Accepterer værdier %."
// panellayoutcolumn.questionTitleWidth: "Accepts values px." => "Accepterer værdier px."
// p.effectiveColSpan: "Column span" => "Søjlespænd"
// progressBarInheritWidthFrom.survey: "Same as survey" => "Samme som undersøgelse"
// progressBarInheritWidthFrom.container: "Same as container" => "Samme som container"
// file.allowImagesPreview: "Displays thumbnail previews for uploaded files when possible. Unselect if you want to show file icons instead." => "Viser miniaturebilleder for uploadede filer, når det er muligt. Fjern markeringen, hvis du vil vise filikoner i stedet."
// pehelp.progressBarInheritWidthFrom: "The \"Same as container\" option auto-adjusts the progress bar area width to fit into the HTML element the survey is placed in." => "Indstillingen \"Samme som beholder\" justerer automatisk bredden på statuslinjens område, så den passer ind i det HTML-element, som undersøgelsen er placeret i."
// p.progressBarInheritWidthFrom: "Progress bar area width" => "Bredde på statuslinjeområde"
// maskType.none: "None" => "Ingen"
// maskType.pattern: "Pattern" => "Mønster"
// maskType.numeric: "Numeric" => "Numerisk"
// maskType.datetime: "Date and Time" => "Dato og klokkeslæt"
// maskType.currency: "Currency" => "Valuta"

// inputTextAlignment.auto: "Auto" => "Auto"
// inputTextAlignment.left: "Left" => "Venstre"
// inputTextAlignment.right: "Right" => "Højre"
// pehelp.inputTextAlignment: "Select how to align input value within the field. The default setting \"Auto\" aligns the input value to the right if currency or numeric masking is applied and to the left if not." => "Vælg, hvordan inputværdien skal justeres i feltet. Standardindstillingen \"Auto\" justerer inputværdien til højre, hvis der anvendes valuta- eller numerisk maskering, og til venstre, hvis ikke."
// p.inputTextAlignment: "Input value alignment" => "Justering af inputværdi"
// paneldynamic.showRangeInProgress: "Show the progress bar" => "Vis statuslinjen"
// paneldynamic.showProgressBar: "Show the progress bar" => "Vis statuslinjen"
// paneldynamic.progressBarLocation: "Progress bar alignment" => "Justering af statuslinje"
// pv.carousel: "Carousel" => "Karrusel"
// progressBarLocation.top: "Top" => "Top"
// progressBarLocation.bottom: "Bottom" => "Bund"
// progressBarLocation.topBottom: "Top and bottom" => "Top og bund"
// matrixdropdowncolumn.colCount: "Arranges choice options in a multi-column layout. When set to 0, the options are displayed in a single line. When set to -1, the actual value is inherited from the \"Nested column count\" property of the parent matrix." => "Arrangerer valgmuligheder i et layout med flere kolonner. Når den er indstillet til 0, vises indstillingerne på en enkelt linje. Når den er angivet til -1, nedarves den faktiske værdi fra egenskaben \"Antal indlejrede kolonner\" for den overordnede matrix."
// ed.translationYouTubeNotSupported: "YouTube links are not supported." => "YouTube-links understøttes ikke."
// ed.propertyGridPlaceholderTitle: "Start configuring your form" => "Begynd at konfigurere formularen"
// ed.propertyGridPlaceholderDescription: "Click any category icon to explore survey settings. Additional settings will become available once you add a survey element to the design surface." => "Klik på et kategoriikon for at udforske undersøgelsesindstillinger. Yderligere indstillinger bliver tilgængelige, når du føjer et undersøgelseselement til designoverfladen."
// pe.caseInsensitive: "Case insensitive" => "Der skelnes ikke mellem store og små bogstaver"
// pehelp.caseInsensitive: "Select if uppercase and lowercase letters in the regular expression must be treated as equivalent." => "Vælg, om store og små bogstaver i det regulære udtryk skal behandles som ækvivalente."

// ed.surveyPlaceholderTitle: "Your form is empty" => "Din formular er tom"
// ed.surveyPlaceholderTitleMobile: "Your form is empty" => "Din formular er tom"
// ed.surveyPlaceholderDescription: "Drag an element from the toolbox or click the button below." => "Træk et element fra værktøjskassen, eller klik på knappen nedenfor."
// ed.surveyPlaceholderDescriptionMobile: "Drag an element from the toolbox or click the button below." => "Træk et element fra værktøjskassen, eller klik på knappen nedenfor."
// ed.previewPlaceholderTitle: "No preview" => "Ingen forhåndsvisning"
// ed.previewPlaceholderTitleMobile: "No preview" => "Ingen forhåndsvisning"
// ed.previewPlaceholderDescription: "The survey doesn't contain any visible elements." => "Undersøgelsen indeholder ingen synlige elementer."
// ed.previewPlaceholderDescriptionMobile: "The survey doesn't contain any visible elements." => "Undersøgelsen indeholder ingen synlige elementer."
// ed.translationsPlaceholderTitle: "No strings to translate" => "Ingen forpligtelser at oversætte"
// ed.translationsPlaceholderTitleMobile: "No strings to translate" => "Ingen forpligtelser at oversætte"
// ed.translationsPlaceholderDescription: "Add elements to your form or change the strings filter in the toolbar." => "Føj elementer til formularen, eller skift filteret for strenge på værktøjslinjen."
// ed.translationsPlaceholderDescriptionMobile: "Add elements to your form or change the strings filter in the toolbar." => "Føj elementer til formularen, eller skift filteret for strenge på værktøjslinjen."
// lg.logicPlaceholderTitle: "No logical rules" => "Ingen logiske regler"
// lg.logicPlaceholderTitleMobile: "No logical rules" => "Ingen logiske regler"
// lg.logicPlaceholderDescription: "Create a rule to customize the flow of the survey." => "Opret en regel for at tilpasse undersøgelsens flow."
// lg.logicPlaceholderDescriptionMobile: "Create a rule to customize the flow of the survey." => "Opret en regel for at tilpasse undersøgelsens flow."
// pe.showTimer: "Use a timer" => "Brug en timer"
// theme.advancedMode: "Advanced mode" => "Avanceret tilstand"
// pehelp.timerLocation: "Sets the location of a timer on a page." => "Indstiller placeringen af en timer på en side."
// header.mobileHeight: "When set to 0, the height is calculated automatically to accommodate the header's content." => "Når den er indstillet til 0, beregnes højden automatisk for at rumme sidehovedets indhold."
// p.mobileHeight: "Height on smartphones" => "Højde på smartphones"
// header.overlapEnabled: "When enabled, the top of the survey overlays the bottom of the header." => "Når den er aktiveret, overlejres toppen af undersøgelsen bunden af sidehovedet."
// ed.creatorSettingTitle: "Creator Settings" => "Indstillinger for skabere"
// tabs.accentColors: "Accent colors" => "Accentfarver"
// tabs.scaling: "Scaling" => "Skalering"
// panel.showQuestionNumbers: "Assigns numbers to questions nested within this panel." => "Tildeler numre til spørgsmål, der er indlejret i dette panel."
// creatortheme.--sjs-special-background: "Surface background" => "Overflade baggrund"
// creatortheme.--sjs-primary-background-500: "Primary" => "Primær"
// creatortheme.--sjs-secondary-background-500: "Secondary" => "Sekundær"
// creatortheme.surfaceScale: "Surface" => "Overflade"
// creatortheme.userInterfaceBaseUnit: "User interface" => "Brugergrænseflade"
// creatortheme.fontScale: "Font" => "Skrifttype"
// names.sc2020: "Survey Creator 2020" => "Skaberen af spørgeundersøgelsen 2020"
// names.default-light: "Light" => "Lys"
// names.default-dark: "Dark" => "Mørk"
// names.default-contrast: "Contrast" => "Kontrast"
// panel.showNumber: "Number this panel" => "Nummerer dette panel"
// pehelp.autoAdvanceEnabled: "Select if you want the survey to auto-advance to the next page once a respondent has answered all questions on the current page. This feature won't apply if the last question on the page is open-ended or allows multiple answers." => "Vælg, om undersøgelsen automatisk skal gå videre til næste side, når en svarperson har besvaret alle spørgsmål på den aktuelle side. Denne funktion gælder ikke, hvis det sidste spørgsmål på siden er åbent eller tillader flere svar."
// autocomplete.name: "Full Name" => "Fulde navn"
// autocomplete.honorific-prefix: "Prefix" => "Præfiks"
// autocomplete.given-name: "First Name" => "Fornavn"
// autocomplete.additional-name: "Middle Name" => "Mellemnavn"
// autocomplete.family-name: "Last Name" => "Efternavn"
// autocomplete.honorific-suffix: "Suffix" => "Suffiks"
// autocomplete.nickname: "Nickname" => "Kælenavn"
// autocomplete.organization-title: "Job Title" => "Stillingsbetegnelse"
// autocomplete.username: "User Name" => "Brugernavn"
// autocomplete.new-password: "New Password" => "Ny adgangskode"
// autocomplete.current-password: "Current Password" => "Nuværende adgangskode"
// autocomplete.organization: "Organization Name" => "Organisationens navn"
// autocomplete.street-address: "Full Street Address" => "Fuld gadeadresse"
// autocomplete.address-line1: "Address Line 1" => "Adresse Linje 1"
// autocomplete.address-line2: "Address Line 2" => "Adresselinje 2"
// autocomplete.address-line3: "Address Line 3" => "Adresselinje 3"
// autocomplete.address-level4: "Level 4 Address" => "Niveau 4-adresse"
// autocomplete.address-level3: "Level 3 Address" => "Niveau 3-adresse"
// autocomplete.address-level2: "Level 2 Address" => "Niveau 2-adresse"
// autocomplete.address-level1: "Level 1 Address" => "Niveau 1-adresse"
// autocomplete.country: "Country Code" => "Landekode"
// autocomplete.country-name: "Country Name" => "Landets navn"
// autocomplete.postal-code: "Postal Code" => "Postnummer"
// autocomplete.cc-name: "Cardholder Name" => "Kortindehaverens navn"
// autocomplete.cc-given-name: "Cardholder First Name" => "Kortholder Fornavn"
// autocomplete.cc-additional-name: "Cardholder Middle Name" => "Kortholder mellemnavn"
// autocomplete.cc-family-name: "Cardholder Last Name" => "Kortholderens efternavn"
// autocomplete.cc-number: "Credit Card Number" => "Kreditkortnummer"
// autocomplete.cc-exp: "Expiration Date" => "Udløbsdato"
// autocomplete.cc-exp-month: "Expiration Month" => "Udløbsmåned"
// autocomplete.cc-exp-year: "Expiration Year" => "Udløbsår"
// autocomplete.cc-csc: "Card Security Code" => "Kortets sikkerhedskode"
// autocomplete.cc-type: "Credit Card Type" => "Kreditkort type"
// autocomplete.transaction-currency: "Transaction Currency" => "Transaktionens valuta"
// autocomplete.transaction-amount: "Transaction Amount" => "Posteringsbeløb"
// autocomplete.language: "Preferred Language" => "Foretrukket sprog"
// autocomplete.bday: "Birthday" => "Fødselsdag"
// autocomplete.bday-day: "Birthday Day" => "Fødselsdag"
// autocomplete.bday-month: "Birthday Month" => "Fødselsdag måned"
// autocomplete.bday-year: "Birthday Year" => "Fødselsdag År"
// autocomplete.sex: "Gender" => "Køn"
// autocomplete.url: "Website URL" => "URL-adresse til websted"
// autocomplete.photo: "Profile Photo" => "Profilfoto"
// autocomplete.tel: "Telephone Number" => "Telefonnummer"
// autocomplete.tel-country-code: "Country Code for Phone" => "Landekode til telefon"
// autocomplete.tel-national: "National Telephone Number" => "Nationalt telefonnummer"
// autocomplete.tel-area-code: "Area Code" => "Områdenummer"
// autocomplete.tel-local: "Local Phone Number" => "Lokalt telefonnummer"
// autocomplete.tel-local-prefix: "Local Phone Prefix" => "Lokalt telefonpræfiks"
// autocomplete.tel-local-suffix: "Local Phone Suffix" => "Lokalt telefonsuffiks"
// autocomplete.tel-extension: "Phone Extension" => "Telefon Lokalnummer"
// autocomplete.email: "Email Address" => "E-mailadresse"
// autocomplete.impp: "Instant Messaging Protocol" => "Protokol til onlinemeddelelser"
// ed.lockQuestionsTooltip: "Lock expand/collapse state for questions" => "Lås udvid/skjul tilstand for spørgsmål"
// pe.listIsEmpty@pages: "You don't have any pages yet" => "Du har ingen sider endnu"
// pe.addNew@pages: "Add new page" => "Tilføj ny side"
// ed.zoomInTooltip: "Zoom In" => "Zoom ind"
// ed.zoomOutTooltip: "Zoom Out" => "Zoom ud"
// tabs.surfaceBackground: "Surface Background" => "Overflade baggrund"
// pe.copyDefaultValueFromLastEntry: "Use answers from the last entry as default" => "Brug svar fra sidste post som standard"
// colors.gray: "Gray" => "Grå"
// pe.navigationButtonsLocation: "Navigation buttons alignment" => "Justering af navigationsknapper"
// pv.allQuestions: "Show all questions" => "Vis alle spørgsmål"
// pv.answeredQuestions: "Show answered questions only" => "Vis kun besvarede spørgsmål"
// pehelp.navigationButtonsLocation: "Sets the location of navigation buttons on a page." => "Angiver placeringen af navigationsknapper på en side."
// pe.size: "Input field width (in characters)" => "Bredde på inputfelt (i tegn)"
// pe.choiceValuesFromQuestion: "Use values from the following matrix column or panel question as choice IDs" => "Bruge værdier fra følgende matrixkolonne eller panelspørgsmål som valg-id'er"
// pe.choiceTextsFromQuestion: "Use values from the following matrix column or panel question as choice texts" => "Brug værdier fra følgende matrixkolonne eller panelspørgsmål som valgtekster"
// pehelp.choiceValuesFromQuestion: "In single- and multiple-selection question types, each choice option has an ID and display value. This setting specifies which matrix column or panel question should provide the IDs." => "I enkelt- og flervalgsspørgsmålstyper har hver valgmulighed et id og en visningsværdi. Denne indstilling angiver, hvilken matrixkolonne eller hvilket panelspørgsmål der skal angive id'erne."
// pehelp.choiceTextsFromQuestion: "In single- and multiple-selection question types, each choice option has an ID and display value. This setting specifies which matrix column or panel question should provide the display texts." => "I enkelt- og flervalgsspørgsmålstyper har hver valgmulighed et id og en visningsværdi. Denne indstilling angiver, hvilken matrixkolonne eller hvilket panelspørgsmål der skal indeholde visningsteksterne."
// pe.progressBarLocation: "Progress bar alignment" => "Justering af statuslinje"
// progressBarLocation.topbottom: "Top and bottom" => "Top og bund"
// progressBarLocation.aboveheader: "Above the header" => "Over overskriften"
// progressBarLocation.belowheader: "Below the header" => "Under overskriften"
// progressBarLocation.off: "Hidden" => "Skjult"
// survey.progressBarLocation: "Sets the location of the progress bar. The \"Auto\" value displays the progress bar above or below the survey header." => "Angiver placeringen af statuslinjen. Værdien \"Auto\" viser statuslinjen over eller under undersøgelsesoverskriften."
// survey.readOnly: "Make the survey read-only" => "Gør undersøgelsen skrivebeskyttet"
// survey.readOnly: "Select if you want to prevent respondents from filling out your survey." => "Vælg, hvis du vil forhindre respondenter i at udfylde din undersøgelse."
// paneldynamic.showNumber: "Number the panel" => "Nummerer panelet"
// question.showNumber: "Number this question" => "Nummerer dette spørgsmål"
// pe.previewMode: "Preview mode" => "Forhåndsvisning tilstand"
// pe.gridLayoutEnabled: "Enable the grid layout" => "Aktivere gitterlayoutet"
// pe.maskSettings: "Mask settings" => "Indstillinger for maske"
// pe.detailErrorLocation: "Row expansion error message alignment" => "Justering af fejlmeddelelse om rækkeudvidelse"
// pehelp.detailErrorLocation: "Sets the location of error messages for questions nested in detail sections. The \"Inherit\" option applies the setting from the \"Error message alignment\" property." => "Angiver placeringen af fejlmeddelelser for spørgsmål, der er indlejret i detaljerede afsnit. Indstillingen \"Arv\" anvender indstillingen fra egenskaben \"Justering af fejlmeddelelser\"."
// pe.gridLayoutColumns: "Grid layout columns" => "Kolonner med gitterlayout"
// pe.startPageTitlePlaceholder: "Start Page" => "Startside"
// panellayoutcolumn.effectiveWidth: "Effective width, %" => "Effektiv bredde, %"
// panellayoutcolumn.questionTitleWidth: "Question title width, px" => "Spørgsmålets titelbredde, px"
// pe.listIsEmpty@gridLayoutColumns: "You don't have layout columns yet" => "Du har ikke layoutkolonner endnu"
// panel.effectiveColSpan: "Specifies how many columns this panel spans within the grid layout." => "Angiver, hvor mange kolonner dette panel strækker sig over i gitterlayoutet."
// panel.gridLayoutColumns: "This table lets you configure each grid column within the panel. It automatically sets the width percentage for each column based on the maximum number of elements in a row. To customize the grid layout, manually adjust these values and define the title width for all questions in each column." => "Denne tabel giver dig mulighed for at konfigurere hver gitterkolonne i panelet. Den indstiller automatisk breddeprocenten for hver kolonne baseret på det maksimale antal elementer i en række. Hvis du vil tilpasse gitterlayoutet, skal du manuelt justere disse værdier og definere titelbredden for alle spørgsmål i hver kolonne."
// pehelp.gridLayoutEnabled: "Survey Creator allows you to manually adjust the inline widths of form elements to control the layout. If this doesn't produce the desired outcome, you can enable the grid layout, which structures form elements using a column-based system. To configure layout columns, select a page or panel and use the \"Question Settings\" → \"Grid columns\" table. To adjust how many columns a question spans, select it and set the desired value in the \"Layout\" → \"Column span\" field." => "Survey Creator giver dig mulighed for manuelt at justere de indbyggede bredder af formularelementer for at styre layoutet. Hvis dette ikke giver det ønskede resultat, kan du aktivere gitterlayoutet, som strukturerer formularelementer ved hjælp af et kolonnebaseret system. For at konfigurere layoutkolonner skal du vælge en side eller et panel og bruge tabellen \"Spørgsmålsindstillinger\" → \"Gitterkolonner\". For at justere, hvor mange kolonner et spørgsmål strækker sig over, skal du vælge det og indstille den ønskede værdi i feltet \"Layout\" → \"Kolonnespænd\"."
// question.effectiveColSpan: "Specifies how many columns this question spans within the grid layout." => "Angiver, hvor mange kolonner dette spørgsmål strækker sig over i gitterlayoutet."
// page.gridLayoutColumns: "This table lets you configure each grid column on the page. It automatically sets the width percentage for each column based on the maximum number of elements in a row. To customize the grid layout, manually adjust these values and define the title width for all questions in each column." => "I denne tabel kan du konfigurere hver gitterkolonne på siden. Den indstiller automatisk breddeprocenten for hver kolonne baseret på det maksimale antal elementer i en række. Hvis du vil tilpasse gitterlayoutet, skal du manuelt justere disse værdier og definere titelbredden for alle spørgsmål i hver kolonne."

// ed.expandTooltip: "Expand" => "Ekspandere"
// ed.collapseTooltip: "Collapse" => "Sammenbrud"
// pe.itemTitleWidth_placeholder: "Ex.: 100px" => "Eks.: 100px"
// pehelp.itemTitleWidth: "Sets consistent width for all item labels. Accepts CSS values (px, %, in, pt, etc.)." => "Indstiller ensartet bredde for alle elementetiketter. Accepterer CSS-værdier (px, %, in, pt osv.)."
// ed.zoom100Tooltip: "Zoom to 100%" => "Zoom til 100 %"
// ed.addLanguageTooltip: "Add Language" => "Tilføj sprog"
// pehelp.commentAreaRows: "Sets the number of displayed lines in text areas for question comments. If the input takes up more lines, the scroll bar appears." => "Angiver antallet af viste linjer i tekstområder til spørgsmålskommentarer. Hvis inputtet optager flere linjer, vises rullepanelet."
// pe.defaultDisplayValue: "Default display value for dynamic texts" => "Standardvisningsværdi for dynamiske tekster"
// pehelp.defaultDisplayValue: "A value displayed in HTML questions and in the dynamic titles and descriptions of survey elements when the question value is empty." => "En værdi, der vises i HTML-spørgsmål og i de dynamiske titler og beskrivelser af undersøgelseselementer, når spørgsmålsværdien er tom."
// showQuestionNumbers.recursive: "Recursive numbering" => "Rekursiv nummerering"
// paneldynamic.templateQuestionTitleWidth: "Question title width" => "Spørgsmålets titelbredde"
// pe.allowCustomChoices: "Allow custom choices" => "Tillad brugerdefinerede valg"
// paneldynamic.templateQuestionTitleWidth: "Sets consistent width for question titles when they are aligned to the left of their question boxes. Accepts CSS values (px, %, in, pt, etc.)." => "Indstiller ensartet bredde for spørgsmålstitler, når de er justeret til venstre for deres spørgsmålsfelter. Accepterer CSS-værdier (px, %, in, pt osv.)."
// page.name: "A page ID that is not visible to respondents." => "Et side-id, der ikke er synligt for svarpersoner."
// page.description: "Type a page subtitle." => "Skriv en sideundertitel."
// page.navigationTitle: "A caption displayed on a navigation button in the progress bar or table of contents (TOC). If you leave this field empty, the navigation button will use the page title or page name. To enable the progress bar or TOC, go to \"Survey\" → \"Navigation\"." => "En billedtekst, der vises på en navigationsknap på statuslinjen eller indholdsfortegnelsen. Hvis du lader dette felt være tomt, bruger navigationsknappen sidetitlen eller sidenavnet. For at aktivere statuslinjen eller indholdsfortegnelsen skal du gå til \"Undersøgelse\" → \"Navigation\"."
// pehelp.allowCustomChoices: "Select to let respondents add their own choices if the desired option isn't available in the dropdown. Custom choices will only be stored temporarily for the duration of the current browser session." => "Vælg for at lade svarpersonerne tilføje deres egne valgmuligheder, hvis den ønskede indstilling ikke er tilgængelig på rullelisten. Brugerdefinerede valg gemmes kun midlertidigt i den aktuelle browsersession."