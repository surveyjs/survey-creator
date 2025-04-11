import { setupLocale } from "survey-creator-core";

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
  // Creator tabs
  tabs: {
    preview: "Test skjema",
    theme: "Temaer",
    translation: "Oversettelse",
    designer: "Skjemadesigner",
    json: "JSON-redigering",
    logic: "Skjemalogikk"
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
  toolboxCategories: {
    general: "Generelt",
    choice: "Choice Spørsmål",
    text: "Spørsmål om tekstinndata",
    containers: "Beholdere",
    matrix: "Matrise Spørsmål",
    misc: "Misc"
  },
  // Strings in SurveyJS Creator
  ed: {
    defaultLocale: "Standard ({0})",
    survey: "Skjema",
    settings: "Skjemainnstillinger",
    settingsTooltip: "Åpne skjemainnstillinger",
    surveySettings: "Innstillinger for undersøkelse",
    surveySettingsTooltip: "Innstillinger for undersøkelse",
    themeSettings: "Tema innstillinger",
    themeSettingsTooltip: "Temainnstillinger",
    creatorSettingTitle: "Innstillinger for skapere",
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
    defaultV2Theme: "Standard",
    modernTheme: "Moderne",
    defaultTheme: "Standard (eldre)",
    testSurveyAgain: "Test skjema igjen",
    testSurveyWidth: "Skjemabredde: ",
    navigateToMsg: "Du måtte navigere til:",
    saveSurvey: "Lagre skjema",
    saveSurveyTooltip: "Lagre skjema",
    saveTheme: "Lagre tema",
    saveThemeTooltip: "Lagre tema",
    jsonHideErrors: "Skjul feil",
    jsonShowErrors: "Vis feil",
    undo: "Angre",
    redo: "Gjenta",
    undoTooltip: "Angre siste endring",
    redoTooltip: "Gjør om siste endring",
    expandTooltip: "Utvide",
    collapseTooltip: "Sammenbrudd",
    expandAllTooltip: "Utvid alle",
    collapseAllTooltip: "Skjul alle",
    zoomInTooltip: "Zoom inn",
    zoom100Tooltip: "Zoom til 100 %",
    zoomOutTooltip: "Zoom ut",
    lockQuestionsTooltip: "Lås utvidelses-/skjuletilstand for spørsmål",
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
    toolboxFilteredTextPlaceholder: "Skriv for å søke ...",
    toolboxNoResultsFound: "Fant ingen resultater",
    propertyGridFilteredTextPlaceholder: "Skriv for å søke ...",
    propertyGridNoResultsFound: "Fant ingen resultater",
    propertyGridPlaceholderTitle: "Begynn å konfigurere skjemaet",
    propertyGridPlaceholderDescription: "Klikk på et kategoriikon for å utforske undersøkelsesinnstillingene. Flere innstillinger blir tilgjengelige når du legger til et undersøkelseselement på designoverflaten.",
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
    addLanguageTooltip: "Legg til språk",
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
    translateUsigAIFrom: "Oversett fra: ",
    translationDialogTitle: "Uoversatte strenger",
    translationMergeLocaleWithDefault: "Flett {0} med standard språk",
    translationPlaceHolder: "Oversettelse...",
    translationSource: "Kilde: ",
    translationTarget: "Mål: ",
    translationYouTubeNotSupported: "YouTube-linker støttes ikke.",
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
    choicesLoadedFromWebText: "Valgene lastes inn fra en webtjeneste.",
    choicesLoadedFromWebLinkText: "Gå til innstillinger",
    choicesLoadedFromWebPreviewTitle: "Forhåndsvisning av alternativer for lastet valg",
    htmlPlaceHolder: "HTML-innhold vil være her.",
    panelPlaceHolder: "Slipp et spørsmål fra verktøykassen her.",
    surveyPlaceHolder: "Undersøkelsen er tom. Dra et element fra verktøykassen, eller klikk på knappen nedenfor.",
    pagePlaceHolder: "Siden er tom. Dra et element fra verktøykassen, eller klikk på knappen nedenfor.",
    imagePlaceHolder: "Dra og slipp et bilde her, eller klikk på knappen nedenfor og velg et bilde du vil laste opp",
    surveyPlaceHolderMobile: "Klikk på \"Legg til spørsmål\" -knappen nedenfor for å begynne å lage skjemaet ditt.",
    surveyPlaceholderTitle: "Skjemaet ditt er tomt",
    surveyPlaceholderTitleMobile: "Skjemaet ditt er tomt",
    surveyPlaceholderDescription: "Dra et element fra verktøykassen eller klikk på knappen nedenfor.",
    surveyPlaceholderDescriptionMobile: "Dra et element fra verktøykassen eller klikk på knappen nedenfor.",
    previewPlaceholderTitle: "Ingen forhåndsvisning",
    previewPlaceholderTitleMobile: "Ingen forhåndsvisning",
    previewPlaceholderDescription: "Undersøkelsen inneholder ingen synlige elementer.",
    previewPlaceholderDescriptionMobile: "Undersøkelsen inneholder ingen synlige elementer.",
    translationsPlaceholderTitle: "Ingen strenger å oversette",
    translationsPlaceholderTitleMobile: "Ingen strenger å oversette",
    translationsPlaceholderDescription: "Legg til elementer i skjemaet, eller endre strengfilteret på verktøylinjen.",
    translationsPlaceholderDescriptionMobile: "Legg til elementer i skjemaet, eller endre strengfilteret på verktøylinjen.",
    pagePlaceHolderMobile: "Klikk på \"Legg til spørsmål\" -knappen nedenfor for å legge til et nytt element på siden.",
    panelPlaceHolderMobile: "Klikk på \"Legg til spørsmål\" -knappen nedenfor for å legge til et nytt element i panelet.",
    imagePlaceHolderMobile: "Klikk på knappen nedenfor og velg et bilde du vil laste opp",
    imageChooseImage: "Velg bilde",
    addNewTypeQuestion: "Legg til {0}", //{0} is localizable question type
    chooseLogoPlaceholder: "[LOGO]",
    choices_Item: "Vare ",
    selectFile: "Velg en fil",
    removeFile: "Fjern filen",
    lg: {
      addNewItem: "Legg til ny regel",
      empty_tab: "Opprett en regel for å tilpasse flyten i evalueringen.",
      logicPlaceholderTitle: "Ingen logiske regler",
      logicPlaceholderTitleMobile: "Ingen logiske regler",
      logicPlaceholderDescription: "Opprett en regel for å tilpasse flyten i evalueringen.",
      logicPlaceholderDescriptionMobile: "Opprett en regel for å tilpasse flyten i evalueringen.",
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
      question_resetValueText: "Tilbakestill verdi for spørsmål: {0}", //{0} question name.
      question_setValueText: "tilordne verdi: {1} til spørsmålet: {0}",
      column_visibilityText: "Gjør kolonne {0} av spørsmålet {1} synlig", //{0} column name, {1} question name
      column_enableText: "Gjør kolonne {0} av spørsmålet {1} aktiver", //{0} column name, {1} question name
      column_requireText: "Gjør kolonne {0} av spørsmålet {1} nødvendig", //{0} column name, {1} question name
      column_resetValueText: "Tilbakestill celleverdi for kolonne: {0}", //{0} column name
      column_setValueText: "Tilordne celleverdi: {1} til kolonne: {0}", //{0} column name and {1} setValueExpression
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
    panel: {
      name: "Navn på panel",
      title: "Panelets tittel",
      description: "Beskrivelse av panelet",
      visibleIf: "Gjør panelet synlig hvis",
      requiredIf: "Gjør panelet nødvendig hvis",
      questionOrder: "Spørsmålsrekkefølge i panelet",
      page: "Overordnet side",
      startWithNewLine: "Vise panelet på en ny linje",
      state: "Status for panelskjuling",
      width: "Innebygd panelbredde",
      minWidth: "Minimum panelbredde",
      maxWidth: "Maksimal panelbredde",
      showNumber: "Nummerer dette panelet"
    },
    panellayoutcolumn: {
      effectiveWidth: "Effektiv bredde, %",
      questionTitleWidth: "Oppgavetittel bredde, px"
    },
    paneldynamic: {
      name: "Navn på panel",
      title: "Panelets tittel",
      description: "Beskrivelse av panelet",
      visibleIf: "Gjør panelet synlig hvis",
      requiredIf: "Gjør panelet nødvendig hvis",
      page: "Flytte panelet til siden",
      startWithNewLine: "Vise panelet på en ny linje",
      state: "Status for panelskjuling",
      width: "Innebygd panelbredde",
      minWidth: "Minimum panelbredde",
      maxWidth: "Maksimal panelbredde",
      confirmDelete: "Bekreft sletting av panel",
      templateDescription: "Mønster for panelbeskrivelse",
      templateTitle: "Mønster for paneltittel",
      noEntriesText: "Tom paneltekst",
      templateTabTitle: "Mønster for tabulatortittel",
      tabTitlePlaceholder: "Plassholder for tabulatortittel",
      templateVisibleIf: "Gjør et individuelt panel synlig hvis",
      showNumber: "Nummerer panelet",
      titleLocation: "Justering av paneltittel",
      descriptionLocation: "Justering av panelbeskrivelse",
      templateQuestionTitleLocation: "Justering av spørsmålstittel",
      templateQuestionTitleWidth: "Bredde på oppgavetittel",
      templateErrorLocation: "Justering av feilmelding",
      newPanelPosition: "Ny panelplassering",
      showRangeInProgress: "Vis fremdriftslinjen",
      keyName: "Forhindre dupliserte svar i følgende spørsmål"
    },
    question: {
      name: "Spørsmål navn",
      title: "Spørsmål tittel",
      description: "Beskrivelse av spørsmål",
      visibleIf: "Gjør spørsmålet synlig hvis",
      requiredIf: "Gjør spørsmålet nødvendig hvis",
      page: "Overordnet side",
      state: "Skjul tilstand for spørsmålsboks",
      showNumber: "Nummerering av dette spørsmålet",
      titleLocation: "Justering av spørsmålstittel",
      descriptionLocation: "Justering av spørsmålsbeskrivelse",
      errorLocation: "Justering av feilmelding",
      indent: "Øke det indre innrykket",
      width: "Bredde på innebygde spørsmål",
      minWidth: "Minimum spørsmålsbredde",
      maxWidth: "Maksimal spørsmålsbredde",
      textUpdateMode: "Oppdatere verdien for inndatafelt"
    },
    signaturepad: {
      signatureWidth: "Bredde på signaturområde",
      signatureHeight: "Høyde på signaturområdet",
      signatureAutoScaleEnabled: "Skalere signaturområdet automatisk",
      showPlaceholder: "Vise plassholderen",
      placeholder: "Plassholdertekst",
      placeholderReadOnly: "Plassholdertekst i skrivebeskyttet modus eller forhåndsvisningsmodus",
      allowClear: "Vise Fjern-knappen i signaturområdet",
      penMinWidth: "Minimum pennebredde",
      penMaxWidth: "Maksimal pennebredde",
      penColor: "Strekfarge"
    },
    comment: {
      rows: "Høyde på inndatafelt (i linjer)"
    },
    showQuestionNumbers: "Vis spørsmålsnummer",
    questionStartIndex: "Spørsmål startindeks (1, 2 eller 'A', 'a')",
    expression: {
      name: "Navn på uttrykk",
      title: "Tittel på uttrykk",
      description: "Beskrivelse av uttrykk",
      expression: "Uttrykk"
    },
    trigger: {
      expression: "Uttrykk"
    },
    calculatedvalue: {
      expression: "Uttrykk"
    },
    // survey templates
    survey: {
      title: "Tittel",
      description: "Beskrivelse av undersøkelsen",
      readOnly: "Gjør undersøkelsen skrivebeskyttet"
    },
    page: {
      name: "Sidenavn",
      title: "Tittel",
      description: "Beskrivelse av siden",
      visibleIf: "Gjøre siden synlig hvis",
      requiredIf: "Gjør siden obligatorisk hvis",
      timeLimit: "Tidsbegrensning for å fullføre siden (i sekunder)",
      questionOrder: "Spørsmålsrekkefølge på siden"
    },
    matrixdropdowncolumn: {
      name: "Navn på kolonne",
      title: "Kolonne tittel",
      isUnique: "Forhindre dupliserte svar",
      width: "Kolonnebredden",
      minWidth: "Minimum kolonnebredde",
      rows: "Høyde på inndatafelt (i linjer)",
      visibleIf: "Gjøre kolonnen synlig hvis",
      requiredIf: "Gjør kolonnen obligatorisk hvis",
      showInMultipleColumns: "Hvert alternativ i en egen kolonne"
    },
    multipletextitem: {
      name: "Navn",
      title: "Tittel"
    },
    masksettings: {
      saveMaskedValue: "Lagre maskert verdi i undersøkelsesresultater"
    },
    patternmask: {
      pattern: "Verdimønster"
    },
    datetimemask: {
      min: "Minimumsverdi",
      max: "Maksimumsverdi"
    },
    numericmask: {
      allowNegativeValues: "Tillat negative verdier",
      thousandsSeparator: "Tusenskilletegn",
      decimalSeparator: "Desimalskilletegn",
      precision: "Prisgunstig presisjon",
      min: "Minimumsverdi",
      max: "Maksimumsverdi"
    },
    currencymask: {
      prefix: "Prefiks for valuta",
      suffix: "Valutasuffiks"
    },
    imageHeight: "Bildehøyde",
    imageWidth: "Bildebredde",
    valueName: "Verdinavn",
    defaultDisplayValue: "Standard visningsverdi for dynamiske tekster",
    rateDescriptionLocation: "Justering av etiketter",
    size: "Størrelse på inndatafelt (i tegn)",
    cellErrorLocation: "Justering av cellefeilmelding",
    enabled: "Aktivert",
    disabled: "Ufør",
    inherit: "Arve",
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
    "listIsEmpty@columns": "Du har ingen kolonner ennå",
    "listIsEmpty@gridLayoutColumns": "Du har ikke oppsettkolonner ennå",
    "listIsEmpty@rows": "Du har ingen rader ennå",
    "listIsEmpty@validators": "Du har ingen valideringsregler ennå",
    "listIsEmpty@calculatedValues": "Du har ingen egendefinerte variabler ennå",
    "listIsEmpty@triggers": "Du har ingen utløsere ennå",
    "listIsEmpty@navigateToUrlOnCondition": "Du har ingen koblinger ennå",
    "listIsEmpty@pages": "Du har ingen sider ennå",
    "addNew@choices": "Legg til et valg",
    "addNew@columns": "Legg til ny kolonne",
    "addNew@rows": "Legg til ny rad",
    "addNew@validators": "Legg til ny regel",
    "addNew@calculatedValues": "Legg til ny variabel",
    "addNew@triggers": "Legg til ny utløser",
    "addNew@navigateToUrlOnCondition": "Legg til ny URL-adresse",
    "addNew@pages": "Legg til ny side",
    expressionIsEmpty: "Formelen er tom",
    value: "Verdi",
    text: "Tekst",
    rowid: "Rad-ID",
    imageLink: "Bildelenke",
    columnEdit: "Rediger kolonne: {0}",
    itemEdit: "Rediger element: {0}",
    url: "URL",
    path: "Sti",
    choicesbyurl: {
      url: "URL-adressen til webtjenesten",
      valueName: "Hent verdier fra følgende JSON-felt"
    },
    titleName: "Tittelnavn",
    imageLinkName: "Hent bildenettadresser fra følgende JSON-felt",
    allowEmptyResponse: "Tillat tom respons",
    titlePlaceholder: "Skriv tittel her",
    surveyTitlePlaceholder: "Skriv skjematittel her",
    pageTitlePlaceholder: "Skriv sidetittel her",
    startPageTitlePlaceholder: "Startside",
    descriptionPlaceholder: "Skriv beskrivelse",
    surveyDescriptionPlaceholder: "Skriv skjema-beskrivelse",
    pageDescriptionPlaceholder: "Skriv side-beskrivelse",
    textWrapEnabled: "Valg for innpakning",
    showOtherItem: "Har annet element",
    otherText: "Annet element-tekst",
    showNoneItem: "Har velg ingen",
    showRefuseItem: "Tillat alternativet Nekt å svare",
    showDontKnowItem: "Tillat alternativet Vet ikke",
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
    allowCustomChoices: "Tillat egendefinerte valg",
    visible: "Er synlig?",
    isRequired: "Er nødvendig?",
    markRequired: "Merk etter behov",
    removeRequiredMark: "Fjern ønsket merke",
    eachRowRequired: "Nødvendig svar for alle rader",
    eachRowUnique: "Forhindre dupliserte svar i rader",
    requiredErrorText: "Nødvendig feilmelding",
    startWithNewLine: "Må starte med ny linje?",
    rows: "Antall rader",
    cols: "Antall kolonner",
    placeholder: "Hjelpetekst",
    showPreview: "Er forhåndsvisning av bilde vist?",
    storeDataAsText: "Lagre filinnhold i JSON-resultat som tekst",
    maxSize: "Maksimum filstørrelse i bytes",
    rowCount: "Antall rader",
    columnLayout: "Antall kolonner",
    addRowButtonLocation: "Legg til rad knapp-plassering",
    transposeData: "Transponere rader til kolonner",
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
    clearInvisibleValues: "Fjern usynlige verdier",
    cookieName: "Informasjonskapsel navn (for å hindre bruk av skjema to ganger lokalt)",
    partialSendEnabled: "Send skjema resultat ved neste side",
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
    navigationButtonsLocation: "Justering av navigasjonsknapper",
    showPrevButton: "Vis forrige knapp (bruker kan gå til forrige side)",
    firstPageIsStartPage: "Den første siden i skjema er startside.",
    showCompletePage: "Vis ferdigsiden på slutten (completedHtml)",
    autoAdvanceEnabled: "Når en har svart alle spørsmål, gå til neste side automatisk",
    autoAdvanceAllowComplete: "Fullfør undersøkelsen automatisk",
    showProgressBar: "Vis fremdriftslinje",
    progressBarLocation: "Justering av fremdriftslinje",
    questionTitleLocation: "Spørsmål tittel plassering",
    questionTitleWidth: "Bredde på spørsmålstittel",
    requiredMark: "Svar nødvendig symbol(er)",
    questionTitleTemplate: "Spørsmål tittel mal, standard er: '{no}. {require} {title}'",
    questionErrorLocation: "Spørsmål feil plassering",
    autoFocusFirstQuestion: "Sett fokus på første spørsmål når en endrer side",
    questionOrder: "Rekkefølge på elementer på siden",
    timeLimit: "Maks tid for å gjøre ferdig skjema",
    timeLimitPerPage: "Maks tid til å gjøre ferdig en side i skjema",
    showTimer: "Bruk en tidtaker",
    timerLocation: "Vis tidtaking",
    timerInfoMode: "Vis tidtaking-modus",
    renderMode: "Gjengivelse modus",
    allowAddPanel: "Tillat å legge til panel",
    allowRemovePanel: "Tillat å fjerne panel",
    addPanelText: "Legg til panel tekst",
    removePanelText: "Fjern panel tekst",
    isSinglePage: "Vis alle elementer på en side",
    html: "HTML",
    setValue: "Svare",
    dataFormat: "Bildeformat",
    allowAddRows: "Tillat at rader legges til",
    allowRemoveRows: "Tillat fjerning av rader",
    allowRowReorder: "Tillat dra og slipp i rad",
    responsiveImageSizeHelp: "Gjelder ikke hvis du angir nøyaktig bildebredde eller -høyde.",
    minImageWidth: "Minimum bildebredde",
    maxImageWidth: "Maksimal bildebredde",
    minImageHeight: "Minimum bildehøyde",
    maxImageHeight: "Maksimal bildehøyde",
    minValue: "Minimumsverdi",
    maxValue: "Maksimal verdi",
    caseInsensitive: "Skiller ikke mellom store og små bokstaver",
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
    maxCommentLength: "Maksimal kommentarlengde (i tegn)",
    commentAreaRows: "Høyde i kommentarområdet (i linjer)",
    autoGrowComment: "Utvid kommentarområdet automatisk om nødvendig",
    allowResizeComment: "Tillat brukere å endre størrelse på tekstområder",
    textUpdateMode: "Oppdatere tekstspørsmålsverdi",
    maskType: "Type inndatamaske",
    autoFocusFirstError: "Sette fokus på det første ugyldige svaret",
    checkErrorsMode: "Kjør validering",
    validateVisitedEmptyFields: "Validere tomme felt ved tapt fokus",
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
    searchMode: "Søkemodus",
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
    panelCount: "Innledende panelopptelling",
    minPanelCount: "Minimum antall paneler",
    maxPanelCount: "Maksimalt antall paneler",
    panelsState: "Utvidelsestilstand for Indre panel",
    prevPanelText: "Verktøytips for forrige panelknapp",
    nextPanelText: "Verktøytips for neste panelknapp",
    removePanelButtonLocation: "Fjern plassering av panelknappen",
    hideIfRowsEmpty: "Skjul spørsmålet hvis det ikke er noen rader",
    hideColumnsIfEmpty: "Skjule kolonner hvis det ikke er noen rader",
    rateValues: "Egendefinerte frekvensverdier",
    rateCount: "Antall priser",
    autoGenerate: "Hvordan spesifisere renteverdier?",
    hideIfChoicesEmpty: "Skjul spørsmålet hvis det ikke inneholder noen valg",
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
    logoWidth: "Logobredde (i CSS-godkjente verdier)",
    logoHeight: "Logohøyde (i CSS-godkjente verdier)",
    readOnly: "Skrivebeskyttet",
    enableIf: "Kan redigeres hvis",
    noRowsText: "Meldingen «Ingen rader»",
    separateSpecialChoices: "Skille spesialvalg (Ingen, Annet, Merk alt)",
    choicesFromQuestion: "Kopier valg fra følgende spørsmål",
    choicesFromQuestionMode: "Hvilke valg å kopiere?",
    choiceValuesFromQuestion: "Bruk verdier fra følgende matrisekolonne eller panelspørsmål som valg-ID-er",
    choiceTextsFromQuestion: "Bruk verdier fra følgende matrisekolonne eller paneloppgave som valgtekster",
    progressBarShowPageTitles: "Vise sidetitler på fremdriftslinjen",
    progressBarShowPageNumbers: "Vise sidetall på fremdriftslinjen",
    showCommentArea: "Vis kommentarfeltet",
    commentPlaceholder: "Plassholder for kommentarområde",
    displayRateDescriptionsAsExtremeItems: "Vise frekvensbeskrivelser som ekstremverdier",
    rowOrder: "Rekkefølge på rad",
    columnsLayout: "Kolonneoppsett",
    columnColCount: "Nestet kolonneantall",
    correctAnswer: "Riktig svar",
    defaultPanelValue: "Standardverdier",
    cells: "Cell Tekster",
    fileInputPlaceholder: "Velg en fil eller lim inn en filkobling ...",
    keyName: "Nøkkelkolonne",
    itemvalue: {
      visibleIf: "Gjøre alternativet synlig hvis",
      enableIf: "Gjør alternativet valgbart hvis"
    },
    "itemvalue@rows": {
      visibleIf: "Gjøre raden synlig hvis",
      enableIf: "Gjøre raden redigerbar hvis"
    },
    imageitemvalue: {
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
    previewMode: "Forhåndsvisning-modus",
    gridLayoutEnabled: "Aktivere rutenettoppsettet",
    gridLayoutColumns: "Kolonner for rutenettoppsett",
    maskSettings: "Innstillinger for maske",
    detailErrorLocation: "Justering av feilmelding for radutvidelse",
    // Creator tabs
    tabs: {
      panel: {
        layout: "Panel Oppsett"
      },
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
      mask: "Innstillinger for inndatamaske",
      layout: {
        panel: "Oppsett",
        question: "Oppsett",
        base: "Oppsett"
      },
      data: "Data",
      validation: "Validering",
      cells: "Celler",
      showOnCompleted: "Vis når ferdig",
      logo: "Logo i skjematittel",
      slider: "Slider",
      expression: "Uttrykk",
      questionSettings: "Spørsmål Innstillinger",
      header: "Topptekst",
      background: "Bakgrunn",
      appearance: "Utseende",
      accentColors: "Aksentfarger",
      surfaceBackground: "Overflate bakgrunn",
      scaling: "Skalering",
      others: "Andre"
    },
    editProperty: "Rediger verdi '{0}'",
    items: "[ Elementer: {0} ]",
    choicesVisibleIf: "Valgene er synlige hvis",
    choicesEnableIf: "Valgene kan velges hvis",
    columnsEnableIf: "Kolonner er synlige hvis",
    rowsEnableIf: "Rader er synlige hvis:",
    innerIndent: "Legge til indre innrykk",
    copyDefaultValueFromLastEntry: "Bruk svar fra siste oppføring som standard",
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
    verticalAlign: "Loddrett justering",
    alternateRows: "Annenhver rad",
    columnsVisibleIf: "Kolonner er synlige hvis",
    rowsVisibleIf: "Rader er synlige hvis:",
    otherPlaceholder: "Plassholder for kommentarområde",
    filePlaceholder: "Plassholdertekst for fil",
    photoPlaceholder: "Tekst for plassholdere for bilde",
    fileOrPhotoPlaceholder: "Plassholdertekst for fil eller bilde",
    rateType: "Type sats",
    url_placeholder: "Eks.: https://api.example.com/books",
    path_placeholder: "Eks.: kategorier.fiksjon",
    questionStartIndex_placeholder: "Eks.: a)",
    width_placeholder: "Eks.: 6in",
    minWidth_placeholder: "Eksempel: 600 piksler",
    maxWidth_placeholder: "Eks.: 50%",
    imageHeight_placeholder: "auto",
    imageWidth_placeholder: "auto",
    itemTitleWidth_placeholder: "Eks.: 100px",
    theme: {
      themeName: "Tema",
      isPanelless: "Spørsmål utseende",
      editorPanel: "Bakgrunn og hjørneradius",
      questionPanel: "Bakgrunn og hjørneradius",
      primaryColor: "Uthevingsfarge",
      panelBackgroundTransparency: "Tetthet i panelbakgrunn",
      questionBackgroundTransparency: "Spørsmål om bakgrunnstetthet",
      fontSize: "Skriftstørrelse",
      scale: "Skala",
      cornerRadius: "Hjørne radius",
      advancedMode: "Avansert modus",
      pageTitle: "Tittel skrift",
      pageDescription: "Beskrivelse font",
      questionTitle: "Tittel skrift",
      questionDescription: "Beskrivelse font",
      editorFont: "Font",
      backgroundOpacity: "Ugjennomsiktighet",
      "--sjs-font-family": "Skriftfamilie",
      "--sjs-general-backcolor-dim": "Bakgrunnsfarge",
      "--sjs-primary-backcolor": "Bakgrunn med aksent",
      "--sjs-primary-forecolor": "Aksent i forgrunnen",
      "--sjs-special-red": "Feilmeldinger",
      "--sjs-shadow-small": "Skygge effekter",
      "--sjs-shadow-inner": "Skygge effekter",
      "--sjs-border-default": "Farger"
    },
    "header@header": {
      headerView: "Utsikt",
      logoPosition: "Logo posisjon",
      surveyTitle: "Skrift for undersøkelsestittel",
      surveyDescription: "Skrift for undersøkelsesbeskrivelse",
      headerTitle: "Skrift for undersøkelsestittel",
      headerDescription: "Skrift for undersøkelsesbeskrivelse",
      inheritWidthFrom: "Bredde på innholdsområdet",
      textAreaWidth: "Tekstbredde",
      backgroundColorSwitch: "Bakgrunnsfarge",
      backgroundImage: "Bakgrunnsbilde",
      backgroundImageOpacity: "Ugjennomsiktighet",
      overlapEnabled: "Overlappe",
      logoPositionX: "Logo posisjon",
      titlePositionX: "Tittelposisjon",
      descriptionPositionX: "Beskrivelse posisjon"
    }
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
    selected: "Utvalgt",
    unselected: "Umerkede",
    decimal: "desimal",
    currency: "valuta",
    percent: "prosent",
    firstExpanded: "firstExpanded",
    off: "off",
    list: "list",
    carousel: "Karusell",
    tab: "Kategoriene",
    progressTop: "progressTop",
    progressBottom: "progressBottom",
    progressTopBottom: "progressTopBottom",
    horizontal: "horizontal",
    vertical: "vertical",
    top: "top",
    bottom: "bottom",
    topBottom: "top and bottom",
    both: "both",
    left: "left",
    right: "Høyre",
    center: "Sentrum",
    leftRight: "Venstre og høyre",
    middle: "Midt",
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
    edit: "edit",
    display: "display",
    contain: "Inneholde",
    cover: "Lokk",
    fill: "Fylle",
    next: "Neste",
    last: "Siste",
    onComplete: "onComplete",
    onHidden: "onHidden",
    onHiddenContainer: "Når spørsmålet eller panelet/siden blir skjult",
    clearInvisibleValues: {
      none: "Aldri"
    },
    clearIfInvisible: {
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
    autocomplete: {
      name: "Fullt navn",
      "honorific-prefix": "Prefiks",
      "given-name": "Fornavn",
      "additional-name": "Mellomnavn",
      "family-name": "Etternavn",
      "honorific-suffix": "Endelse",
      nickname: "Kallenavn",
      "organization-title": "Stillingstittel",
      username: "Brukernavn",
      "new-password": "Nytt passord",
      "current-password": "Nåværende passord",
      organization: "Organisasjonens navn",
      "street-address": "Full gateadresse",
      "address-line1": "Adresselinje 1",
      "address-line2": "Adresselinje 2",
      "address-line3": "Adresselinje 3",
      "address-level4": "Adresse på nivå 4",
      "address-level3": "Nivå 3-adresse",
      "address-level2": "Nivå 2-adresse",
      "address-level1": "Adresse på nivå 1",
      country: "Landkode",
      "country-name": "Navn på land",
      "postal-code": "Postnummer",
      "cc-name": "Kortinnehaverens navn",
      "cc-given-name": "Kortinnehaverens fornavn",
      "cc-additional-name": "Kortinnehaverens mellomnavn",
      "cc-family-name": "Kortinnehaverens etternavn",
      "cc-number": "Kredittkortnummer",
      "cc-exp": "Utløpsdato",
      "cc-exp-month": "Utløpsmåned",
      "cc-exp-year": "Utløpsår",
      "cc-csc": "Sikkerhetskode for kort",
      "cc-type": "Type kredittkort",
      "transaction-currency": "Transaksjonens valuta",
      "transaction-amount": "Transaksjonsbeløp",
      language: "Foretrukket språk",
      bday: "Fødselsdag",
      "bday-day": "Bursdag",
      "bday-month": "Bursdag måned",
      "bday-year": "Bursdag år",
      sex: "Kjønn",
      url: "URL-adresse til nettsted",
      photo: "Profilbilde",
      tel: "Telefonnummer",
      "tel-country-code": "Landskode for telefon",
      "tel-national": "Nasjonalt telefonnummer",
      "tel-area-code": "Retningsnummer",
      "tel-local": "Lokalt telefonnummer",
      "tel-local-prefix": "Lokalt telefonprefiks",
      "tel-local-suffix": "Lokalt telefonsuffiks",
      "tel-extension": "Utvidelse av telefon",
      email: "E-postadresse",
      impp: "Protokoll for direktemeldinger"
    },
    maskType: {
      none: "Ingen",
      pattern: "Mønster",
      numeric: "Numerisk",
      datetime: "Dato og klokkeslett",
      currency: "Valuta"
    },
    inputTextAlignment: {
      auto: "Auto",
      left: "Venstre",
      right: "Høyre"
    },
    all: "all",
    page: "page",
    survey: "survey",
    onNextPage: "onNextPage",
    onValueChanged: "onValueChanged",
    onValueChanging: "Før et svar endres",
    questionsOnPageMode: {
      standard: "Opprinnelig struktur",
      singlePage: "Vis alle spørsmål på én side",
      questionPerPage: "Vis ett spørsmål per side"
    },
    noPreview: "no preview",
    showAllQuestions: "show preview with all questions",
    showAnsweredQuestions: "show preview with answered questions",
    allQuestions: "Vis alle spørsmål",
    answeredQuestions: "Vis kun besvarte spørsmål",
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
    auto: "Auto",
    showNavigationButtons: {
      none: "Skjult"
    },
    timerInfoMode: {
      combined: "Begge"
    },
    addRowButtonLocation: {
      default: "Avhenger av matriseoppsett"
    },
    panelsState: {
      default: "Brukere kan ikke vise eller skjule paneler",
      collapsed: "Alle paneler er skjult",
      expanded: "Alle paneler er utvidet",
      firstExpanded: "Først utvidet"
    },
    widthMode: {
      static: "Statisk",
      responsive: "Lydhør"
    },
    contentMode: {
      image: "Bilde",
      video: "Video",
      youtube: "YouTube"
    },
    displayMode: {
      buttons: "Knapper",
      dropdown: "Rullegardinmeny"
    },
    rateColorMode: {
      default: "Standard",
      scale: "Skala"
    },
    scaleColorMode: {
      monochrome: "Monokrom",
      colored: "Farget"
    },
    autoGenerate: {
      "true": "Frembringe",
      "false": "Angi manuelt"
    },
    rateType: {
      labels: "Etiketter",
      stars: "Stjerner",
      smileys: "Smilefjes"
    },
    state: {
      default: "Låst"
    },
    showQuestionNumbers: {
      default: "Automatisk nummerering",
      on: "Automatisk nummerering",
      onPage: "Tilbakestill på hver side",
      onpanel: "Tilbakestill på hvert panel",
      onPanel: "Tilbakestill på hvert panel",
      recursive: "Rekursiv nummerering",
      onSurvey: "Fortsett på tvers av undersøkelsen",
      off: "Ingen nummerering"
    },
    descriptionLocation: {
      underTitle: "Under spørsmålstittelen",
      underInput: "Under inntastingsfeltet"
    },
    selectToRankAreasLayout: {
      horizontal: "Ved siden av valg",
      vertical: "Ovennevnte valg"
    },
    displayStyle: {
      decimal: "Desimal",
      currency: "Valuta",
      percent: "Prosent",
      date: "Daddel"
    },
    totalDisplayStyle: {
      decimal: "Desimal",
      currency: "Valuta",
      percent: "Prosent",
      date: "Daddel"
    },
    rowOrder: {
      initial: "Original"
    },
    questionOrder: {
      initial: "Original"
    },
    progressBarLocation: {
      top: "Topp",
      bottom: "Bunn",
      topbottom: "Topp og bunn",
      aboveheader: "Over overskriften",
      belowheader: "Under overskriften",
      off: "Skjult"
    },
    sum: "Sum",
    count: "Greve",
    min: "Min",
    max: "Maks",
    avg: "Avg",
    searchMode: {
      contains: "Inneholder",
      startsWith: "Starter med"
    },
    backgroundImageFit: {
      auto: "Auto",
      cover: "Lokk",
      contain: "Inneholde",
      fill: "Strekning",
      tile: "Flis"
    },
    backgroundImageAttachment: {
      fixed: "Fast",
      scroll: "Bla"
    },
    headerView: {
      basic: "Grunnleggende",
      advanced: "Avansert"
    },
    inheritWidthFrom: {
      survey: "Samme som undersøkelse",
      container: "Tilpass til container"
    },
    backgroundColorSwitch: {
      none: "Ingen",
      accentColor: "Uthevingsfarge",
      custom: "Skikk"
    },
    colorPalette: {
      light: "Lys",
      dark: "Mørk"
    },
    isPanelless: {
      "false": "Standard",
      "true": "Uten paneler"
    },
    progressBarInheritWidthFrom: {
      survey: "Samme som undersøkelse",
      container: "Samme som container"
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
  peplaceholder: {
    patternmask: {
      pattern: "Eks.: +1(999)-999-99-99"
    },
    datetimemask: {
      pattern: "Eks.: mm/dd/åååå"
    },
    currencymask: {
      prefix: "Eks.: $",
      suffix: "Eks.: USD"
    },
    panelbase: {
      questionTitleWidth: "Eks.: 200 piksler"
    },
    panellayoutcolumn: {
      effectiveWidth: "Eks.: 30%",
      questionTitleWidth: "Eks.: 200px"
    }
  },
  pehelp: {
    panel: {
      name: "En panel-ID som ikke er synlig for respondentene.",
      description: "Skriv inn en panelundertekst.",
      visibleIf: "Bruk tryllestavikonet til å angi en betinget regel som bestemmer panelets synlighet.",
      enableIf: "Bruk tryllestavikonet til å angi en betinget regel som deaktiverer skrivebeskyttet modus for panelet.",
      requiredIf: "Bruk tryllestavikonet til å angi en betinget regel som forhindrer innsending av spørreundersøkelser med mindre minst ett nestet spørsmål har et svar.",
      questionTitleLocation: "Gjelder alle spørsmålene i dette panelet. Hvis du vil overstyre denne innstillingen, definerer du regler for titteljustering for enkeltspørsmål. Alternativet \"Arv\" bruker innstillingen på sidenivå (hvis angitt) eller undersøkelsesnivå (\"Topp\" som standard).",
      questionTitleWidth: "Angir konsekvent bredde for spørsmålstitler når de er justert til venstre for spørsmålsboksene. Godtar CSS-verdier (px, %, i, pt osv.).",
      questionErrorLocation: "Angir plasseringen av en feilmelding i forhold til alle spørsmålene i panelet. Alternativet «Arv» bruker innstillingen på sidenivå (hvis angitt) eller undersøkelsesnivå.",
      questionOrder: "Beholder den opprinnelige rekkefølgen på spørsmål eller randomiserer dem. Alternativet «Arv» bruker innstillingen på sidenivå (hvis angitt) eller undersøkelsesnivå.",
      page: "Flytter panelet til slutten av en merket side.",
      innerIndent: "Legger til mellomrom eller marg mellom panelinnholdet og venstre kant på panelboksen.",
      startWithNewLine: "Fjern merket for å vise panelet på én linje med forrige spørsmål eller panel. Innstillingen gjelder ikke hvis panelet er det første elementet i skjemaet.",
      state: "Velg mellom: \"Utvidet\" - panelet vises i sin helhet og kan skjules; \"Kollapset\" - panelet viser bare tittelen og beskrivelsen og kan utvides; \"Låst\" - panelet vises i sin helhet og kan ikke skjules.",
      width: "Angir bredden på panelet i forhold til andre undersøkelseselementer på samme linje. Godtar CSS-verdier (px, %, i, pt osv.).",
      showQuestionNumbers: "Tildeler numre til spørsmål som er nestet i dette panelet.",
      effectiveColSpan: "Angir hvor mange kolonner dette panelet strekker seg over i rutenettoppsettet.",
      gridLayoutColumns: "I denne tabellen kan du konfigurere hver rutenettkolonne i panelet. Den angir automatisk breddeprosenten for hver kolonne basert på maksimalt antall elementer på rad. For å tilpasse rutenettoppsettet, juster disse verdiene manuelt og definer tittelbredden for alle spørsmålene i hver kolonne."
    },
    paneldynamic: {
      name: "En panel-ID som ikke er synlig for respondentene.",
      description: "Skriv inn en panelundertekst.",
      visibleIf: "Bruk tryllestavikonet til å angi en betinget regel som bestemmer panelets synlighet.",
      enableIf: "Bruk tryllestavikonet til å angi en betinget regel som deaktiverer skrivebeskyttet modus for panelet.",
      requiredIf: "Bruk tryllestavikonet til å angi en betinget regel som forhindrer innsending av spørreundersøkelser med mindre minst ett nestet spørsmål har et svar.",
      templateQuestionTitleLocation: "Gjelder alle spørsmålene i dette panelet. Hvis du vil overstyre denne innstillingen, definerer du regler for titteljustering for enkeltspørsmål. Alternativet \"Arv\" bruker innstillingen på sidenivå (hvis angitt) eller undersøkelsesnivå (\"Topp\" som standard).",
      templateQuestionTitleWidth: "Angir konsekvent bredde for spørsmålstitler når de er justert til venstre for spørsmålsboksene. Godtar CSS-verdier (px, %, in, pt, etc.).",
      templateErrorLocation: "Angir plasseringen av en feilmelding i forhold til et spørsmål med ugyldige inndata. Velg mellom: \"Topp\" - en feiltekst plasseres øverst i spørsmålsboksen; \"Bunn\" - en feiltekst er plassert nederst i spørsmålsboksen. Alternativet \"Arv\" bruker innstillingen på sidenivå (hvis angitt) eller undersøkelsesnivå (\"Topp\" som standard).",
      errorLocation: "Angir plasseringen av en feilmelding i forhold til alle spørsmålene i panelet. Alternativet «Arv» bruker innstillingen på sidenivå (hvis angitt) eller undersøkelsesnivå.",
      page: "Flytter panelet til slutten av en merket side.",
      innerIndent: "Legger til mellomrom eller marg mellom panelinnholdet og venstre kant på panelboksen.",
      startWithNewLine: "Fjern merket for å vise panelet på én linje med forrige spørsmål eller panel. Innstillingen gjelder ikke hvis panelet er det første elementet i skjemaet.",
      state: "Velg mellom: \"Utvidet\" - panelet vises i sin helhet og kan skjules; \"Kollapset\" - panelet viser bare tittelen og beskrivelsen og kan utvides; \"Låst\" - panelet vises i sin helhet og kan ikke skjules.",
      width: "Angir bredden på panelet i forhold til andre undersøkelseselementer på samme linje. Godtar CSS-verdier (px, %, i, pt osv.).",
      templateTitle: "Skriv inn en mal for dynamiske paneltitler. Bruk {panelIndex} for panelets generelle posisjon og {visiblePanelIndex} for rekkefølgen blant synlige paneler. Sett inn disse plassholderne i mønsteret for å legge til automatisk nummerering.",
      templateTabTitle: "Skriv inn en mal for fanetitler. Bruk {panelIndex} for panelets generelle posisjon og {visiblePanelIndex} for rekkefølgen blant synlige paneler. Sett inn disse plassholderne i mønsteret for å legge til automatisk nummerering.",
      tabTitlePlaceholder: "En basistekst for tabulatortitler som gjelder når mønsteret for tabulatortittel ikke gir meningsfull verdi.",
      templateVisibleIf: "Med denne innstillingen kan du kontrollere synligheten til individuelle paneler i det dynamiske panelet. Bruk plassholderen {panel} til å referere til gjeldende panel i uttrykket.",
      titleLocation: "Denne innstillingen arves automatisk av alle spørsmålene i dette panelet. Hvis du vil overstyre denne innstillingen, definerer du regler for titteljustering for enkeltspørsmål. Alternativet \"Arv\" bruker innstillingen på sidenivå (hvis angitt) eller undersøkelsesnivå (\"Topp\" som standard).",
      descriptionLocation: "Alternativet \"Arv\" bruker innstillingen på sidenivå (hvis angitt) eller innstilling på undersøkelsesnivå (\"Under paneltittelen\" som standard).",
      newPanelPosition: "Definerer posisjonen til et nylig lagt til-panel. Som standard legges nye paneler til slutten. Velg \"Neste\" for å sette inn et nytt panel etter det nåværende.",
      copyDefaultValueFromLastEntry: "Dupliserer svar fra det siste panelet og tilordner dem til det neste dynamiske panelet som er lagt til.",
      keyName: "Referer til et spørsmålsnavn for å kreve at en bruker gir et unikt svar på dette spørsmålet i hvert panel."
    },
    copyDefaultValueFromLastEntry: "Dupliserer svar fra den siste raden og tilordner dem til den neste dynamiske raden som er lagt til.",
    defaultValueExpression: "Med denne innstillingen kan du tilordne en standard svarverdi basert på et uttrykk. Uttrykket kan inneholde grunnleggende beregninger - '{q1_id} + {q2_id}', boolske uttrykk, for eksempel '{alder} > 60', og funksjoner: 'iif()', 'today()', 'age()', 'min()', 'max()', 'avg()', etc. Verdien som bestemmes av dette uttrykket, fungerer som den opprinnelige standardverdien som kan overstyres av en respondents manuelle inndata.",
    resetValueIf: "Bruk tryllestavikonet til å angi en betinget regel som bestemmer når en respondents inndata tilbakestilles til verdien basert på \"Standardverdiuttrykk\" eller \"Angi verdiuttrykk\" eller til \"Standard svar\"-verdien (hvis en av dem er angitt).",
    setValueIf: "Bruk tryllestavikonet til å angi en betinget regel som bestemmer når \"Angi verdiuttrykk\" skal kjøres, og tilordne den resulterende verdien dynamisk som et svar.",
    setValueExpression: "Angi et uttrykk som definerer verdien som skal angis når betingelsene i regelen Angi verdi hvis er oppfylt. Uttrykket kan inneholde grunnleggende beregninger - '{q1_id} + {q2_id}', boolske uttrykk, for eksempel '{alder} > 60', og funksjoner: 'iif()', 'today()', 'age()', 'min()', 'max()', 'avg()', etc. Verdien som bestemmes av dette uttrykket, kan overstyres av en respondents manuelle inndata.",
    gridLayoutEnabled: "Med Survey Creator kan du manuelt justere de innebygde breddene på skjemaelementer for å kontrollere oppsettet. Hvis dette ikke gir ønsket resultat, kan du aktivere rutenettoppsettet, som strukturerer skjemaelementer ved hjelp av et kolonnebasert system. For å konfigurere layoutkolonner, velg en side eller et panel og bruk tabellen \"Spørsmålsinnstillinger\" → \"Rutenettkolonner\". For å justere hvor mange kolonner et spørsmål strekker seg over, velg det og angi ønsket verdi i feltet \"Oppsett\" → \"Kolonnespenn\".",
    question: {
      name: "En spørsmåls-ID som ikke er synlig for respondentene.",
      description: "Skriv inn en spørsmålsundertittel.",
      visibleIf: "Bruk tryllestavikonet til å angi en betinget regel som bestemmer spørsmålets synlighet.",
      enableIf: "Bruk tryllestavikonet til å angi en betinget regel som deaktiverer skrivebeskyttet modus for spørsmålet.",
      requiredIf: "Bruk tryllestavikonet til å angi en betinget regel som forhindrer avansement eller innsending av spørreundersøkelser med mindre spørsmålet fikk svar.",
      startWithNewLine: "Fjern merket for å vise spørsmålet på én linje med forrige spørsmål eller panel. Innstillingen gjelder ikke hvis spørsmålet er det første elementet i skjemaet.",
      page: "Flytter spørsmålet til slutten av en merket side.",
      state: "Velg mellom: \"Utvidet\" - spørsmålsboksen vises i sin helhet og kan skjules; \"Kollapset\" - spørsmålsboksen viser bare tittelen og beskrivelsen og kan utvides; \"Låst\" - spørsmålsboksen vises i sin helhet og kan ikke skjules.",
      titleLocation: "Overstyrer titteljusteringsregler som er definert på panel-, side- eller undersøkelsesnivå. Alternativet \"Arv\" bruker innstillinger på høyere nivå (hvis angitt) eller innstilling på undersøkelsesnivå (\"Topp\" som standard).",
      descriptionLocation: "Alternativet \"Arv\" bruker innstillingen på undersøkelsesnivå (\"Under spørsmålstittelen\" som standard).",
      errorLocation: "Angir plasseringen til en feilmelding i forhold til spørsmålet med ugyldige inndata. Velg mellom: \"Topp\" - en feiltekst plasseres øverst i spørsmålsboksen; \"Bunn\" - en feiltekst er plassert nederst i spørsmålsboksen. Alternativet \"Arv\" bruker innstillingen på undersøkelsesnivå (\"Topp\" som standard).",
      indent: "Legger til mellomrom eller marg mellom spørsmålsinnholdet og venstre kantlinje i spørsmålsboksen.",
      width: "Angir bredden på spørsmålet i forhold til andre undersøkelseselementer på samme linje. Godtar CSS-verdier (px, %, i, pt osv.).",
      surveyvalidator: {
        expression: "Bruk tryllestavikonet til å angi en valideringsregel for spørsmålet."
      },
      textUpdateMode: "Velg mellom: \"Ved tapt fokus\" - verdien oppdateres når inntastingsfeltet mister fokus; \"Mens du skriver\" - verdien oppdateres i sanntid, mens brukerne skriver. Alternativet \"Arv\" bruker innstillingen på undersøkelsesnivå (\"Ved tapt fokus\" som standard).",
      url: "Du kan bruke en hvilken som helst webtjeneste som datakilde for flervalgsspørsmål. Hvis du vil fylle ut valgverdier, angir du URL-adressen til tjenesten som leverer dataene.",
      searchMode: "En sammenligningsoperasjon som brukes til å filtrere rullegardinlisten.",
      textWrapEnabled: "Lange tekster i valgalternativer genererer automatisk linjeskift slik at de passer inn i rullegardinmenyen. Fjern merket hvis du vil at tekstene skal klippes ut.",
      effectiveColSpan: "Angir hvor mange kolonner dette spørsmålet strekker seg over i rutenettoppsettet."
    },
    signaturepad: {
      signatureWidth: "Angir bredden på signaturområdet som vises, og det resulterende bildet.",
      signatureHeight: "Angir høyden på signaturområdet som vises, og det resulterende bildet.",
      signatureAutoScaleEnabled: "Velg dette alternativet hvis du vil at signaturområdet skal fylle all tilgjengelig plass i spørsmålsboksen, samtidig som standardforholdet 3:2 beholdes. Når egendefinerte bredde- og høydeverdier angis, beholdes innstillingen størrelsesforholdet for disse dimensjonene."
    },
    file: {
      imageHeight: "Justerer høyden på bildet i undersøkelsesresultatene.",
      imageWidth: "Justerer bredden på bildet i undersøkelsesresultatene.",
      allowImagesPreview: "Viser miniatyrforhåndsvisninger for opplastede filer når det er mulig. Fjern merket hvis du vil vise filikoner i stedet."
    },
    image: {
      contentMode: "Alternativet \"Auto\" bestemmer automatisk passende modus for visning - Bilde, Video eller YouTube - basert på kildens URL som er oppgitt."
    },
    imagepicker: {
      imageHeight: "Overstyrer minimums- og maksimumshøydeverdiene.",
      imageWidth: "Overstyrer verdiene for minimums- og maksimumsbredde.",
      choices: "\"Verdi\" fungerer som en vare-ID som brukes i betingede regler; \"Tekst\" vises for respondentene.",
      contentMode: "Velg mellom \"Image\" og \"Video\" for å stille inn innholdsmodusen til medievelgeren. Hvis \"Bilde\" er valgt, må du kontrollere at alle alternativene som er oppgitt, er bildefiler i følgende formater: JPEG, GIF, PNG, APNG, SVG, BMP, ICO. På samme måte, hvis \"Video\" er valgt, må du sørge for at alle alternativene er direkte koblinger til videofiler i følgende formater: MP4, MOV, WMV, FLV, AVI, MKV. Vær oppmerksom på at YouTube-koblinger ikke støttes for videoalternativer."
    },
    text: {
      size: "Denne innstillingen endrer bare størrelsen på inndatafeltet og påvirker ikke bredden på spørsmålsboksen. Hvis du vil begrense den godkjente inndatalengden, går du til <b>Validering → Maksimal tegngrense</b>."
    },
    comment: {
      rows: "Angir antall viste linjer i inndatafeltet. Hvis inngangen tar opp flere linjer, vises rullefeltet."
    },
    // survey templates
    survey: {
      readOnly: "Velg hvis du vil hindre respondenter i å fylle ut undersøkelsen.",
      progressBarLocation: "Angir plasseringen av fremdriftslinjen. \"Auto\"-verdien viser fremdriftslinjen over eller under undersøkelsesoverskriften."
    },
    matrixdropdowncolumn: {
      name: "En kolonne-ID som ikke er synlig for respondentene.",
      isUnique: "Når en respondent er aktivert for en kolonne, må den gi et unikt svar for hvert spørsmål i denne kolonnen.",
      rows: "Angir antall viste linjer i inndatafeltet. Hvis inngangen tar opp flere linjer, vises rullefeltet.",
      visibleIf: "Bruk tryllestavikonet til å angi en betinget regel som bestemmer kolonnens synlighet.",
      enableIf: "Bruk tryllestavikonet til å angi en betinget regel som deaktiverer skrivebeskyttet modus for kolonnen.",
      requiredIf: "Bruk tryllestavikonet til å angi en betinget regel som forhindrer innsending av spørreundersøkelser med mindre minst ett nestet spørsmål har et svar.",
      showInMultipleColumns: "Når dette alternativet er valgt, opprettes det én kolonne for hvert valgalternativ.",
      colCount: "Ordner valgalternativer i et oppsett med flere kolonner. Når den er satt til 0, vises alternativene på én enkelt linje. Når satt til -1, arves den faktiske verdien fra egenskapen \"Nestet kolonneantall\" for den overordnede matrisen."
    },
    caseInsensitive: "Velg om store og små bokstaver i det regulære uttrykket må behandles som likeverdige.",
    widthMode: "Velg mellom: \"Statisk\" - setter en fast bredde; \"Responsive\" - gjør at undersøkelsen opptar hele bredden på skjermen; \"Auto\" - gjelder en av de to avhengig av spørsmålstypene som brukes.",
    cookieName: "Informasjonskapsler hindrer brukere i å fylle ut den samme undersøkelsen to ganger.",
    logo: "Lim inn en bildekobling (ingen størrelsesbegrensninger) eller klikk på mappeikonet for å bla gjennom en fil fra datamaskinen din (opptil 64KB).",
    logoWidth: "Setter en logo bredde i CSS enheter (px, %, i, pt, etc.).",
    logoHeight: "Angir en logo høyde i CSS enheter (px, %, i, pt, etc.).",
    logoFit: "Velg mellom: \"Ingen\" - bildet opprettholder sin opprinnelige størrelse; \"Innehold\" - bildet endres for å passe samtidig som størrelsesforholdet opprettholdes; \"Cover\" - bildet fyller hele boksen mens du opprettholder størrelsesforholdet; \"Fyll\" - bildet strekkes for å fylle boksen uten å opprettholde størrelsesforholdet.",
    autoAdvanceEnabled: "Velg om du vil at evalueringen automatisk skal gå videre til neste side når en respondent har svart på alle spørsmålene på gjeldende side. Denne funksjonen gjelder ikke hvis det siste spørsmålet på siden er åpent eller tillater flere svar.",
    autoAdvanceAllowComplete: "Velg om du vil at evalueringen skal fullføres automatisk etter at en svarperson har svart på alle spørsmålene.",
    showNavigationButtons: "Angir synligheten og plasseringen av navigasjonsknapper på en side.",
    navigationButtonsLocation: "Angir plasseringen av navigasjonsknapper på en side.",
    showPreviewBeforeComplete: "Aktiver forhåndsvisningssiden med alle eller besvarte spørsmål.",
    questionTitleLocation: "Gjelder alle spørsmålene i undersøkelsen. Denne innstillingen kan overstyres av titteljusteringsregler på lavere nivåer: panel, side eller spørsmål. En innstilling på lavere nivå vil overstyre de på et høyere nivå.",
    requiredMark: "Et symbol eller en sekvens av symboler som indikerer at et svar er nødvendig.",
    questionStartIndex: "Skriv inn et tall eller bokstav du vil starte nummereringen med.",
    questionErrorLocation: "Angir plasseringen til en feilmelding i forhold til spørsmålet med ugyldige inndata. Velg mellom: \"Topp\" - en feiltekst plasseres øverst i spørsmålsboksen; \"Bunn\" - en feiltekst er plassert nederst i spørsmålsboksen.",
    autoFocusFirstQuestion: "Velg om du vil at det første inntastingsfeltet på hver side skal være klart for tekstinntasting.",
    questionOrder: "Beholder den opprinnelige rekkefølgen på spørsmål eller randomiserer dem. Effekten av denne innstillingen er bare synlig i kategorien Forhåndsvisning.",
    maxTextLength: "Kun for spørsmål om tekstoppføring.",
    maxCommentLength: "Kun for spørsmålskommentarer.",
    commentAreaRows: "Angir antall linjer som vises i tekstområder for spørsmålskommentarer. Hvis inndataene tar opp flere linjer, vises rullefeltet.",
    autoGrowComment: "Velg om du vil at spørsmålskommentarer og Lang tekst-spørsmål skal vokse automatisk i høyde basert på den angitte tekstlengden.",
    allowResizeComment: "Kun for spørsmålskommentarer og langtekstspørsmål.",
    calculatedValues: "Egendefinerte variabler fungerer som mellomliggende variabler eller hjelpevariabler som brukes i skjemaberegninger. De tar respondentinnganger som kildeverdier. Hver egendefinerte variabel har et unikt navn og et uttrykk den er basert på.",
    includeIntoResult: "Velg dette hvis du vil at den beregnede verdien for uttrykket skal lagres sammen med evalueringsresultatene.",
    triggers: "En utløser er en hendelse eller betingelse som er basert på et uttrykk. Når uttrykket er evaluert til \"sann\", utløses en utløser en handling. En slik handling kan eventuelt ha et målspørsmål den påvirker.",
    clearInvisibleValues: "Velg om du vil fjerne verdier for spørsmål skjult av betinget logikk, og når du vil gjøre det.",
    textUpdateMode: "Velg mellom: \"Ved tapt fokus\" - verdien oppdateres når inntastingsfeltet mister fokus; \"Mens du skriver\" - verdien oppdateres i sanntid, mens brukerne skriver.",
    columns: "Den venstre verdien fungerer som en kolonne-ID som brukes i betingede regler, den riktige verdien vises for respondentene.",
    rows: "Den venstre verdien fungerer som en rad-ID som brukes i betingede regler, den riktige verdien vises for respondentene.",
    columnMinWidth: "Godtar CSS-verdier (px, %, i, pt osv.).",
    rowTitleWidth: "Godtar CSS-verdier (px, %, i, pt osv.).",
    totalText: "Bare synlig når minst én kolonne har Totaltype- eller Total-uttrykk.",
    cellErrorLocation: "Angir plasseringen til en feilmelding i forhold til en celle med ugyldige inndata. Alternativet \"Arv\" bruker innstillingen fra egenskapen \"Justering av feilmelding\".",
    detailErrorLocation: "Angir plasseringen av feilmeldinger for spørsmål som er nestet i detaljdeler. Alternativet \"Arv\" bruker innstillingen fra egenskapen \"Feilmeldingsjustering\".",
    keyDuplicationError: "Når egenskapen \"Forhindre dupliserte svar\" er aktivert, får en svarperson som prøver å sende inn en duplikatoppføring, følgende feilmelding.",
    totalExpression: "Lar deg beregne totalverdier basert på et uttrykk. Uttrykket kan omfatte grunnleggende beregninger ('{q1_id} + {q2_id}'), boolske uttrykk ('{alder} > 60') og funksjoner ('iif()', 'today()', 'age()', 'min()', 'max()', 'avg()', etc.).",
    confirmDelete: "Utløser en melding som ber om å bekrefte radslettingen.",
    keyName: "Hvis den angitte kolonnen inneholder identiske verdier, gir undersøkelsen feilen \"Ikke-unik nøkkelverdi\".",
    description: "Skriv inn en undertekst.",
    locale: "Velg et språk for å begynne å opprette evalueringen. Hvis du vil legge til en oversettelse, bytter du til et nytt språk og oversetter originalteksten her eller i Oversettelser-fanen.",
    detailPanelMode: "Angir plasseringen av en detaljinndeling i forhold til en rad. Velg mellom: \"Ingen\" - ingen utvidelse er lagt til; \"Under raden\" - en radutvidelse er plassert under hver rad av matrisen; \"Under raden, vis bare en radutvidelse\" - en utvidelse vises bare under en enkelt rad, de resterende radutvidelsene er skjult.",
    imageFit: "Velg mellom: \"Ingen\" - bildet opprettholder sin opprinnelige størrelse; \"Innehold\" - bildet endres for å passe samtidig som størrelsesforholdet opprettholdes; \"Cover\" - bildet fyller hele boksen mens du opprettholder størrelsesforholdet; \"Fyll\" - bildet strekkes for å fylle boksen uten å opprettholde størrelsesforholdet.",
    autoGrow: "Øker gradvis høyden på inndatafeltet etter hvert som data registreres. Overstyrer innstillingen \"Inndatafelthøyde (i linjer)\".",
    allowResize: "Skaleringshåndtaket (eller grepet) vises i hjørnet og kan dras for å endre størrelsen på inndatafeltet.",
    timeLimit: "Et tidsintervall i sekunder hvoretter undersøkelsen automatisk går videre til takkesiden.",
    timeLimitPerPage: "Et tidsintervall i sekunder hvoretter undersøkelsen automatisk går videre til neste side.",
    validateVisitedEmptyFields: "Aktiver dette alternativet for å utløse validering når en bruker fokuserer på et tomt inndatafelt og deretter forlater det uten å gjøre noen endringer.",
    page: {
      name: "En side-ID som ikke er synlig for respondentene.",
      description: "Skriv inn en sideundertittel.",
      navigationTitle: "En bildetekst som vises på en navigasjonsknapp i fremdriftslinjen eller innholdsfortegnelsen. Hvis du lar dette feltet stå tomt, vil navigasjonsknappen bruke sidetittelen eller sidenavnet. For å aktivere fremdriftslinjen eller innholdsfortegnelsen, gå til \"Survey\" → \"Navigation\".",
      timeLimit: "Et tidsintervall i sekunder hvoretter undersøkelsen automatisk går videre til neste side.",
      visibleIf: "Bruk tryllestavikonet til å angi en betinget regel som bestemmer sidens synlighet.",
      enableIf: "Bruk tryllestavikonet til å angi en betinget regel som deaktiverer skrivebeskyttet modus for siden.",
      requiredIf: "Bruk tryllestavikonet til å angi en betinget regel som forhindrer innsending av spørreundersøkelser med mindre minst ett nestet spørsmål har et svar.",
      questionTitleLocation: "Gjelder alle spørsmål på denne siden. Hvis du vil overstyre denne innstillingen, definerer du regler for titteljustering for enkeltspørsmål eller paneler. Alternativet \"Arv\" bruker innstillingen på undersøkelsesnivå (\"Topp\" som standard).",
      questionTitleWidth: "Angir konsekvent bredde for spørsmålstitler når de er justert til venstre for spørsmålsboksene. Godtar CSS-verdier (px, %, i, pt osv.).",
      questionErrorLocation: "Angir plasseringen til en feilmelding i forhold til spørsmålet med ugyldige inndata. Velg mellom: \"Topp\" - en feiltekst plasseres øverst i spørsmålsboksen; \"Bunn\" - en feiltekst er plassert nederst i spørsmålsboksen. Alternativet \"Arv\" bruker innstillingen på undersøkelsesnivå (\"Topp\" som standard).",
      questionOrder: "Beholder den opprinnelige rekkefølgen på spørsmål eller randomiserer dem. Alternativet \"Arv\" bruker innstillingen på undersøkelsesnivå (\"Original\" som standard). Effekten av denne innstillingen er bare synlig i kategorien Forhåndsvisning.",
      showNavigationButtons: "Angir synligheten til navigasjonsknapper på siden. Alternativet \"Arv\" bruker innstillingen på undersøkelsesnivå, som som standard er \"Synlig\".",
      gridLayoutColumns: "I denne tabellen kan du konfigurere hver rutenettkolonne på siden. Den angir automatisk breddeprosenten for hver kolonne basert på maksimalt antall elementer på rad. For å tilpasse rutenettoppsettet, juster disse verdiene manuelt og definer tittelbredden for alle spørsmålene i hver kolonne."
    },
    timerLocation: "Angir plasseringen av en tidtaker på en side.",
    panelsState: "Velg mellom: \"Låst\" - brukere kan ikke utvide eller skjule paneler; \"Skjul alle\" - alle paneler starter i kollapset tilstand; \"Utvid alle\" - alle paneler starter i utvidet tilstand; \"Først utvidet\" - bare det første panelet er i utgangspunktet utvidet.",
    imageLinkName: "Skriv inn et navn på en delt egenskap i matrisen med objekter som inneholder URL-adressene til bildet eller videofilen du vil vise i valglisten.",
    choices: "Den venstre verdien fungerer som en vare-ID som brukes i betingede regler, den riktige verdien vises for respondentene.",
    title: "Skriv inn en brukervennlig tittel som skal vises.",
    waitForUpload: "Sikrer at brukerne ikke fullfører undersøkelsen før filene er lastet opp.",
    minWidth: "Godtar CSS-verdier (px, %, i, pt osv.).",
    maxWidth: "Godtar CSS-verdier (px, %, i, pt osv.).",
    width: "Godtar CSS-verdier (px, %, i, pt osv.).",
    valueName: "Hvis du ikke angir denne egenskapen, lagres svaret i et felt som er angitt av egenskapen Name.",
    defaultDisplayValue: "En verdi som vises i HTML-spørsmål og i de dynamiske titlene og beskrivelsene av undersøkelseselementer når spørsmålsverdien er tom.",
    useDisplayValuesInDynamicTexts: "I enkeltvalgs- og flervalgsspørsmålstyper har hvert valgalternativ en ID og visningsverdi. Når denne innstillingen er valgt, vises en visningsverdi i stedet for en ID-verdi i HTML-spørsmål og dynamiske titler og beskrivelser av evalueringselementer.",
    clearIfInvisible: "Velg om du vil fjerne spørsmålsverdier skjult av betinget logikk, og når du vil gjøre det. Alternativet \"Arv\" bruker innstillingen på undersøkelsesnivå (\"Når undersøkelsen er fullført\" som standard).",
    choicesFromQuestionMode: "Velg mellom: \"Alle\" - kopierer alle valgalternativer fra det valgte spørsmålet; \"Valgt\" - kopierer dynamisk bare valgte valgalternativer; \"Unselected\" - kopierer dynamisk bare uvalgte valgalternativer. Alternativene \"Ingen\" og \"Annet\" kopieres som standard hvis de er aktivert i kildespørsmålet.",
    choiceValuesFromQuestion: "I spørsmålstyper med ett eller flere valg har hvert valgalternativ en ID og visningsverdi. Denne innstillingen angir hvilken matrisekolonne eller hvilket panelspørsmål som skal gi ID-ene.",
    choiceTextsFromQuestion: "I spørsmålstyper med ett eller flere valg har hvert valgalternativ en ID og visningsverdi. Denne innstillingen angir hvilken matrisekolonne eller hvilket panelspørsmål som skal inneholde visningstekstene.",
    allowCustomChoices: "Velg dette alternativet for å la respondentene legge til sine egne valg hvis det ønskede alternativet ikke er tilgjengelig i rullegardinlisten. Egendefinerte valg lagres bare midlertidig så lenge den gjeldende nettleserøkten varer.",
    showOtherItem: "Når dette alternativet er valgt, kan brukerne inkludere flere inndata i et eget kommentarfelt.",
    separateSpecialChoices: "Viser hvert spesialvalgalternativ (\"Ingen\", \"Annet\", \"Merk alt\") på en ny linje, selv når du bruker et oppsett med flere kolonner.",
    path: "Angi plasseringen i tjenestedatasettet der målmatrisen med objekter er plassert. La stå tom hvis URL-adressen allerede peker på matrisen.",
    choicesbyurl: {
      valueName: " "
    },
    titleName: "Skriv inn et ensartet egenskapsnavn i matrisen med objekter som inneholder verdiene du vil vise i valglisten.",
    allowEmptyResponse: "Velg dette alternativet hvis du vil at tjenesten skal returnere et tomt svar eller en matrise.",
    choicesVisibleIf: "Bruk tryllestavikonet til å angi en betinget regel som bestemmer synligheten til alle valgalternativer.",
    rateValues: "Den venstre verdien fungerer som en vare-ID som brukes i betingede regler, den riktige verdien vises for respondentene.",
    rating: {
      displayMode: "\"Auto\" velger mellom \"Knapper\" og \"Dropdown\" -modus basert på tilgjengelig bredde. Når bredden ikke er tilstrekkelig til å vise knapper, viser spørsmålet en rullegardinmeny."
    },
    valuePropertyName: "Lar deg koble til spørsmål som gir resultater i forskjellige formater. Når slike spørsmål kobles sammen ved hjelp av en sammenføyningsidentifikator, lagrer denne delte egenskapen valgte spørsmålsverdier.",
    searchEnabled: "Velg om du vil oppdatere innholdet på rullegardinmenyen slik at det samsvarer med søket som en bruker skriver inn i inndatafeltet.",
    valueTrue: "En verdi å spare i undersøkelsesresultater når respondentene gir et positivt svar.",
    valueFalse: "En verdi å lagre i undersøkelsesresultater når respondentene gir et negativt svar.",
    showPreview: "Det anbefales ikke å deaktivere dette alternativet, da det overstyrer forhåndsvisningsbildet og gjør det vanskelig for en bruker å forstå om filene er lastet opp.",
    needConfirmRemoveFile: "Utløser en melding som ber om å bekrefte slettingen av filen.",
    selectToRankEnabled: "Aktiver for å rangere bare valgte valg. Brukere vil dra valgte elementer fra valglisten for å sortere dem innenfor rangeringsområdet.",
    dataList: "Angi en liste over valg som skal foreslås for respondenten under inndata.",
    inputSize: "Innstillingen endrer bare størrelsen på inndatafeltene og påvirker ikke bredden på spørsmålsboksen.",
    itemTitleWidth: "Angir konsekvent bredde for alle vareetiketter. Godtar CSS-verdier (px, %, in, pt, etc.).",
    inputTextAlignment: "Velg hvordan du vil justere inndataverdien i feltet. Standardinnstillingen \"Auto\" justerer inngangsverdien til høyre hvis valuta eller numerisk maskering brukes, og til venstre hvis ikke.",
    altText: "Fungerer som en erstatning når bildet ikke kan vises på en brukers enhet og av tilgjengelighetshensyn.",
    rateColorMode: "Definerer fargen på den valgte emojien når Vurdering-ikontypen er satt til \"Smileys\". Velg mellom: \"Standard\" - den valgte emojien vises i standard undersøkelsesfarge; \"Skala\" - den valgte emojien arver farge fra vurderingsskalaen.",
    expression: {
      name: "En uttrykks-ID som ikke er synlig for respondentene.",
      description: "Skriv inn en undertittel for uttrykk.",
      expression: "Et uttrykk kan inneholde grunnleggende beregninger ('{q1_id} + {q2_id}'), betingelser ('{alder} > 60') og funksjoner ('iif()', 'today()', 'age()', 'min()', 'max()', 'avg()', etc.)."
    },
    storeOthersAsComment: "Velg dette alternativet hvis du vil lagre alternativverdien «Annet» som en egen egenskap i undersøkelsesresultatene.",
    format: "Bruk {0} som plassholder for den faktiske verdien.",
    acceptedTypes: "Se attributtbeskrivelsen [accept](https://www.w3schools.com/tags/att_input_accept.asp) hvis du vil ha mer informasjon.",
    columnColCount: "Gjelder bare for celletypene Radiogruppe og Avmerkingsboks.",
    autocomplete: "Se attributtbeskrivelsen [autofullfør](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete) hvis du vil ha mer informasjon.",
    filePlaceholder: "Gjelder når \"Kildetype\" er \"Lokale filer\" eller når kameraet er utilgjengelig",
    photoPlaceholder: "Gjelder når \"Kildetype\" er \"Kamera\".",
    fileOrPhotoPlaceholder: "Gjelder når \"Kildetype\" er \"Lokale filer eller kamera\".",
    colCount: "Ordner valgalternativer i et oppsett med flere kolonner. Når den er satt til 0, vises alternativene på én enkelt linje.",
    masksettings: {
      saveMaskedValue: "Velg om du vil lagre spørsmålsverdien med en brukt maske i evalueringsresultatene."
    },
    patternmask: {
      pattern: "Mønsteret kan inneholde strenglitteraler og følgende plassholdere: '9' - for et siffer; 'a' - for en stor eller liten bokstav; '#' - for et siffer eller en stor eller liten bokstav. Bruk omvendt skråstrek '\\' for å unnslippe et tegn."
    },
    datetimemask: {
      pattern: "Mønsteret kan inneholde skilletegn og følgende plassholdere:<br>'m' – Månedsnummer.<br>'mm' - Månedsnummer, med foranstilt null for ensifrede verdier. <br>'d' - Dag i måneden. <br>'dd' - Dagen i måneden, med foranstilt null for ensifrede verdier. <br>'yy' - De to siste sifrene i året. <br>'yyyy' - Firesifret år. <br>'H' - Timer i 24-timers format. <br>'HH' - Timer i 24-timers format, med foranstilt null for ensifrede verdier. <br>'h' - Timer i 12-timers format. <br>'hh' - Timer i 12-timers format, med ledende null for ensifrede verdier. <br>'MM' - minutter. <br>'ss' - Sekunder. <br>'TT' - 12-timers klokkeperiode med store bokstaver (AM / PM). <br>'TT' - 12-timers klokkeperiode med små bokstaver (AM / PM)."
    },
    numericmask: {
      decimalSeparator: "Et symbol som brukes til å skille brøkdelen fra heltallsdelen av et tall som vises.",
      thousandsSeparator: "Et symbol som brukes til å skille sifrene i et stort tall i grupper på tre.",
      precision: "Begrenser hvor mange sifre som skal beholdes etter desimaltegnet for et tall som vises."
    },
    currencymask: {
      prefix: "Ett eller flere symboler som skal vises før verdien.",
      suffix: "Ett eller flere symboler som skal vises etter verdien."
    },
    theme: {
      isPanelless: "Denne innstillingen gjelder bare for spørsmål utenfor et panel.",
      primaryColor: "Angir en tilleggsfarge som uthever viktige undersøkelseselementer.",
      panelBackgroundTransparency: "Justerer gjennomsiktigheten til paneler og spørsmålsbokser i forhold til evalueringsbakgrunnen.",
      questionBackgroundTransparency: "Justerer gjennomsiktigheten til inndataelementer i forhold til evalueringsbakgrunnen.",
      cornerRadius: "Angir hjørneradiusen for alle rektangulære elementer. Aktiver avansert modus hvis du vil angi individuelle hjørneradiusverdier for inndataelementer eller paneler og spørsmålsbokser.",
      "--sjs-general-backcolor-dim": "Angir hovedbakgrunnsfargen for undersøkelsen."
    },
    header: {
      inheritWidthFrom: "Alternativet \"Samme som beholder\" justerer automatisk bredden på overskriftsinnholdsområdet slik at det passer inn i HTML-elementet undersøkelsen er plassert i.",
      textAreaWidth: "Bredden på overskriftsområdet som inneholder evalueringstittelen og beskrivelsen, målt i piksler.",
      overlapEnabled: "Når den er aktivert, overlapper toppen av evalueringen bunnen av overskriften.",
      mobileHeight: "Når den er satt til 0, beregnes høyden automatisk for å få plass til overskriftens innhold."
    },
    progressBarInheritWidthFrom: "Alternativet \"Samme som beholder\" justerer automatisk fremdriftslinjens områdebredde slik at den passer inn i HTML-elementet undersøkelsen er plassert i."
  },
  // Properties
  p: {
    title: {
      name: "title",
      title: "La den være tom, dersom den skal være samme som navnet"
    },
    multiSelect: "Tillat flere valg",
    showLabel: "Vis bildetekster",
    swapOrder: "Bytte rekkefølgen på Ja og Nei",
    value: "Verdi",
    tabAlign: "Justering av tabulatorer",
    sourceType: "Type kilde",
    fitToContainer: "Tilpass til container",
    setValueExpression: "Angi verdiuttrykk",
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
    inputSize: "inputSize",
    itemTitleWidth: "Bredden på vareetiketten (i piksler)",
    inputTextAlignment: "Justering av inngangsverdi",
    elements: "Elementer",
    content: "Innhold",
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
    mobileHeight: "Høyde på smarttelefoner",
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
    selectToRankEmptyRankedAreaText: "Tekst som skal vises hvis alle alternativene er valgt",
    selectToRankEmptyUnrankedAreaText: "Plassholdertekst for rangeringsområdet",
    allowCameraAccess: "Tillat kameratilgang",
    scaleColorMode: "Skaler farge, modus",
    rateColorMode: "Vurder farge, modus",
    copyDisplayValue: "Kopier visningsverdi",
    effectiveColSpan: "Spaltespenn",
    progressBarInheritWidthFrom: "Bredde på fremdriftslinjeområde"
  },
  theme: {
    advancedMode: "Avansert modus",
    pageTitle: "Skrift for sidetittel",
    questionTitle: "Spørsmål tittel skrift",
    editorPanel: "Inndata-element",
    lines: "Linjer",
    primaryDefaultColor: "Standard",
    primaryDarkColor: "Sveve",
    primaryLightColor: "Utvalgt",
    backgroundDimColor: "Bakgrunnsfarge",
    cornerRadius: "Hjørne radius",
    backcolor: "Standard bakgrunn",
    hovercolor: "Pekerfølsom bakgrunn",
    borderDecoration: "Grense dekorasjon",
    fontColor: "Skriftfarge",
    backgroundColor: "Bakgrunnsfarge",
    primaryForecolor: "Standardfarge",
    primaryForecolorLight: "Deaktivert farge",
    font: "Font",
    borderDefault: "Mørkere",
    borderLight: "Lekter",
    fontFamily: "Skriftfamilie",
    fontWeightRegular: "Regelmessig",
    fontWeightHeavy: "Tung",
    fontWeightSemiBold: "Halvmodig",
    fontWeightBold: "Fet",
    color: "Farge",
    placeholderColor: "Plassholderfarge",
    size: "Størrelse",
    opacity: "Ugjennomsiktighet",
    boxShadowX: "X",
    boxShadowY: "Y",
    boxShadowAddRule: "Legg til skyggeeffekt",
    boxShadowBlur: "Dimme",
    boxShadowSpread: "Spredning",
    boxShadowDrop: "Dråpe",
    boxShadowInner: "Indre",
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
      green: "Grønn",
      gray: "Grå"
    }
  },
  creatortheme: {
    "--sjs-special-background": "Overflate bakgrunn",
    "--sjs-primary-background-500": "Primær",
    "--sjs-secondary-background-500": "Sekundær",
    surfaceScale: "Flate",
    userInterfaceBaseUnit: "Brukergrensesnitt",
    fontScale: "Font",
    names: {
      sc2020: "Skaperen av spørreundersøkelsen 2020",
      "default-light": "Lys",
      "default-dark": "Mørk",
      "default-contrast": "Kontrast"
    }
  }
};

setupLocale({ localeCode: "nb", strings: nbStrings });

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
// page.timeLimit: "Time limit to finish the page (in seconds)" => "Tidsbegrensning for å fullføre siden (i sekunder)"
// question.page: "Parent page" => "Overordnet side"
// pe.noEntriesText: "Empty entries text" => "Tekst med tomme oppføringer"
// pe.setValue: "Answer" => "Svare"
// pe.dataFormat: "Image format" => "Bildeformat"
// pe.allowAddRows: "Allow adding rows" => "Tillat at rader legges til"
// pe.allowRemoveRows: "Allow removing rows" => "Tillat fjerning av rader"
// pe.allowRowReorder: "Allow row drag and drop" => "Tillat dra og slipp i rad"
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
// pe.maxCommentLength: "Maximum comment length (in characters)" => "Maksimal kommentarlengde (i tegn)"
// pe.autoGrowComment: "Auto-expand comment area if necessary" => "Utvid kommentarområdet automatisk om nødvendig"
// pe.allowResizeComment: "Allow users to resize text areas" => "Tillat brukere å endre størrelse på tekstområder"
// pe.textUpdateMode: "Update text question value" => "Oppdatere tekstspørsmålsverdi"
// pe.autoFocusFirstError: "Set focus on the first invalid answer" => "Sette fokus på det første ugyldige svaret"
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
// pe.prevPanelText: "Previous Panel button tooltip" => "Verktøytips for forrige panelknapp"
// pe.nextPanelText: "Next Panel button tooltip" => "Verktøytips for neste panelknapp"
// pe.showRangeInProgress: "Show progress bar" => "Vis fremdriftsindikator"
// pe.templateQuestionTitleLocation: "Question title location" => "Spørsmål tittel sted"
// pe.removePanelButtonLocation: "Remove Panel button location" => "Fjern plassering av panelknappen"
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
// pe.showNumber: "Show panel number" => "Vis panelnummer"
// pe.logoWidth: "Logo width (in CSS-accepted values)" => "Logobredde (i CSS-godkjente verdier)"
// pe.logoHeight: "Logo height (in CSS-accepted values)" => "Logohøyde (i CSS-godkjente verdier)"
// pe.readOnly: "Read-only" => "Skrivebeskyttet"
// pe.enableIf: "Editable if" => "Kan redigeres hvis"
// pe.noRowsText: "\"No rows\" message" => "Meldingen «Ingen rader»"
// pe.size: "Input field size (in characters)" => "Størrelse på inndatafelt (i tegn)"
// pe.separateSpecialChoices: "Separate special choices (None, Other, Select All)" => "Skille spesialvalg (Ingen, Annet, Merk alt)"
// pe.choicesFromQuestion: "Copy choices from the following question" => "Kopier valg fra følgende spørsmål"
// pe.choicesFromQuestionMode: "Which choices to copy?" => "Hvilke valg å kopiere?"
// pe.showCommentArea: "Show the comment area" => "Vis kommentarfeltet"
// pe.commentPlaceholder: "Comment area placeholder" => "Plassholder for kommentarområde"
// pe.displayRateDescriptionsAsExtremeItems: "Display rate descriptions as extreme values" => "Vise frekvensbeskrivelser som ekstremverdier"
// pe.rowOrder: "Row order" => "Rekkefølge på rad"
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
// addRowButtonLocation.default: "Depends on matrix layout" => "Avhenger av matriseoppsett"
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
// theme.groupAdvanced: "Advanced" => "Avansert"
// theme.themeName: "Theme" => "Tema"
// theme.isPanellessss: "Question appearance" => "Spørsmål utseende"
// theme.isPanellessPanels: "Default" => "Standard"
// theme.isPanellessLightweight: "Without Panels" => "Uten paneler"
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
// theme.surveyTitleFont: "Survey title font" => "Skrift for undersøkelsestittel"
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
// theme.header: "Header" => "Topptekst"
// theme.backgroundImageFitFill: "Stretch" => "Strekning"
// theme.backgroundImageFitTile: "Tile" => "Flis"
// theme.headerView: "View" => "Utsikt"
// theme.headerViewBasic: "Basic" => "Grunnleggende"
// theme.headerViewAdvanced: "Advanced" => "Avansert"
// theme.headerInheritWidthFrom: "Content area width" => "Bredde på innholdsområdet"
// theme.headerInheritWidthFromSurvey: "Same as survey" => "Samme som undersøkelse"
// theme.headerInheritWidthFromPage: "Fit to page" => "Tilpass til side"
// theme.headerTextAreaWidth: "Text width" => "Tekstbredde"
// theme.headerBackgroundColorSwitch: "Background color" => "Bakgrunnsfarge"
// theme.headerBackgroundColorNone: "None" => "Ingen"
// theme.headerBackgroundColorAccentColor: "Accent color" => "Uthevingsfarge"
// theme.headerBackgroundColorCustom: "Custom" => "Skikk"
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
// theme.background: "Background" => "Bakgrunn"
// theme.appearance: "Appearance" => "Utseende"
// ed.themeResetConfirmation: "Do you really want to reset the theme? All your customizations will be lost." => "Vil du virkelig tilbakestille temaet? Alle tilpasningene dine vil gå tapt."
// ed.themeResetConfirmationOk: "Yes, reset the theme" => "Ja, tilbakestill temaet"
// theme.headerInheritWidthFromContainer: "Fit to container" => "Tilpass til container"
// signaturepad.showPlaceholder: "Show the placeholder" => "Vise plassholderen"
// signaturepad.placeholder: "Placeholder text" => "Plassholdertekst"
// theme.surveyDescriptionFont: "Survey description font" => "Skrift for undersøkelsesbeskrivelse"
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
// theme.headerTitlePosition: "Title position" => "Tittelposisjon"
// theme.headerDescriptionPosition: "Description position" => "Beskrivelse posisjon"
// ed.propertyGridNoResultsFound: "No results found" => "Fant ingen resultater"
// pv.leftRight: "Left and right" => "Venstre og høyre"
// p.sourceType: "Source type" => "Type kilde"
// p.fitToContainer: "Fit to container" => "Tilpass til container"
// p.setValueExpression: "Set value expression" => "Angi verdiuttrykk"
// ed.choicesLoadedFromWebText: "Choices are loaded from a web service." => "Valgene lastes inn fra en webtjeneste."
// ed.choicesLoadedFromWebLinkText: "Go to settings" => "Gå til innstillinger"
// ed.choicesLoadedFromWebPreviewTitle: "Preview of loaded choice options" => "Forhåndsvisning av alternativer for lastet valg"
// pe.eachRowUnique: "Prevent duplicate responses in rows" => "Forhindre dupliserte svar i rader"
// theme.advancedMode: "Advanced mode" => "Avansert modus"
// theme.backgroundCornerRadius: "Background and corner radius" => "Bakgrunn og hjørneradius"
// theme.colorsTitle: "Colors" => "Farger"
// theme.font: "Font" => "Font"
// theme.lines: "Lines" => "Linjer"
// theme.titleFont: "Title font" => "Tittel skrift"
// theme.descriptionFont: "Description font" => "Beskrivelse font"
// theme.shadow: "Shadow effects" => "Skygge effekter"
// ed.translateUsigAIFrom: "Translate from: " => "Oversett fra: "
// pe.showRefuseItem: "Allow the Refuse to Answer option" => "Tillat alternativet Nekt å svare"
// pe.showDontKnowItem: "Allow the Don't Know option" => "Tillat alternativet Vet ikke"
// pe.showRefuseItem: "Allow the Refuse to Answer option" => "Tillat alternativet Nekt å svare"
// pe.showDontKnowItem: "Allow the Don't Know option" => "Tillat alternativet Vet ikke"
// pv.contain: "Contain" => "Inneholde"
// pv.cover: "Cover" => "Lokk"
// pv.fill: "Fill" => "Fylle"

// pe.transposeData: "Transpose rows to columns" => "Transponere rader til kolonner"
// layout.panel: "Layout" => "Oppsett"
// layout.question: "Layout" => "Oppsett"
// layout.base: "Layout" => "Oppsett"
// panel.name: "Panel name" => "Navn på panel"
// panel.title: "Panel title" => "Panelets tittel"
// panel.description: "Panel description" => "Beskrivelse av panelet"
// panel.visibleIf: "Make the panel visible if" => "Gjør panelet synlig hvis"
// panel.requiredIf: "Make the panel required if" => "Gjør panelet nødvendig hvis"
// panel.questionOrder: "Question order within the panel" => "Spørsmålsrekkefølge i panelet"
// panel.startWithNewLine: "Display the panel on a new line" => "Vise panelet på en ny linje"
// panel.state: "Panel collapse state" => "Status for panelskjuling"
// panel.width: "Inline panel width" => "Innebygd panelbredde"
// panel.minWidth: "Minimum panel width" => "Minimum panelbredde"
// panel.maxWidth: "Maximum panel width" => "Maksimal panelbredde"
// paneldynamic.name: "Panel name" => "Navn på panel"
// paneldynamic.title: "Panel title" => "Panelets tittel"
// paneldynamic.description: "Panel description" => "Beskrivelse av panelet"
// paneldynamic.visibleIf: "Make the panel visible if" => "Gjør panelet synlig hvis"
// paneldynamic.requiredIf: "Make the panel required if" => "Gjør panelet nødvendig hvis"
// paneldynamic.page: "Move the panel to page" => "Flytte panelet til siden"
// paneldynamic.startWithNewLine: "Display the panel on a new line" => "Vise panelet på en ny linje"
// paneldynamic.state: "Panel collapse state" => "Status for panelskjuling"
// paneldynamic.width: "Inline panel width" => "Innebygd panelbredde"
// paneldynamic.minWidth: "Minimum panel width" => "Minimum panelbredde"
// paneldynamic.maxWidth: "Maximum panel width" => "Maksimal panelbredde"
// paneldynamic.templateDescription: "Panel description pattern" => "Mønster for panelbeskrivelse"
// paneldynamic.templateTitle: "Panel title pattern" => "Mønster for paneltittel"
// paneldynamic.noEntriesText: "Empty panel text" => "Tom paneltekst"
// paneldynamic.templateTabTitle: "Tab title pattern" => "Mønster for tabulatortittel"
// paneldynamic.templateVisibleIf: "Make an individual panel visible if" => "Gjør et individuelt panel synlig hvis"
// paneldynamic.hideNumber: "Hide the panel number" => "Skjule panelnummeret"
// paneldynamic.titleLocation: "Panel title alignment" => "Justering av paneltittel"
// paneldynamic.descriptionLocation: "Panel description alignment" => "Justering av panelbeskrivelse"
// paneldynamic.templateQuestionTitleLocation: "Question title alignment" => "Justering av spørsmålstittel"
// paneldynamic.templateErrorLocation: "Error message alignment" => "Justering av feilmelding"
// paneldynamic.newPanelPosition: "New panel location" => "Ny panelplassering"
// paneldynamic.keyName: "Prevent duplicate responses in the following question" => "Forhindre dupliserte svar i følgende spørsmål"
// question.name: "Question name" => "Spørsmål navn"
// question.title: "Question title" => "Spørsmål tittel"
// question.description: "Question description" => "Beskrivelse av spørsmål"
// question.visibleIf: "Make the question visible if" => "Gjør spørsmålet synlig hvis"
// question.requiredIf: "Make the question required if" => "Gjør spørsmålet nødvendig hvis"
// question.state: "Question box collapse state" => "Skjul tilstand for spørsmålsboks"
// question.hideNumber: "Hide the question number" => "Skjul spørsmålsnummeret"
// question.titleLocation: "Question title alignment" => "Justering av spørsmålstittel"
// question.descriptionLocation: "Question description alignment" => "Justering av spørsmålsbeskrivelse"
// question.errorLocation: "Error message alignment" => "Justering av feilmelding"
// question.indent: "Increase the inner indent" => "Øke det indre innrykket"
// question.width: "Inline question width" => "Bredde på innebygde spørsmål"
// question.minWidth: "Minimum question width" => "Minimum spørsmålsbredde"
// question.maxWidth: "Maximum question width" => "Maksimal spørsmålsbredde"
// question.textUpdateMode: "Update input field value" => "Oppdatere verdien for inndatafelt"
// signaturepad.allowClear: "Show the Clear button within signature area" => "Vise Fjern-knappen i signaturområdet"
// signaturepad.penColor: "Stroke color" => "Strekfarge"
// comment.rows: "Input field height (in lines)" => "Høyde på inndatafelt (i linjer)"
// expression.name: "Expression name" => "Navn på uttrykk"
// expression.title: "Expression title" => "Tittel på uttrykk"
// expression.description: "Expression description" => "Beskrivelse av uttrykk"
// expression.expression: "Expression" => "Uttrykk"
// trigger.expression: "Expression" => "Uttrykk"
// calculatedvalue.expression: "Expression" => "Uttrykk"
// survey.description: "Survey description" => "Beskrivelse av undersøkelsen"
// page.name: "Page name" => "Sidenavn"
// page.description: "Page description" => "Beskrivelse av siden"
// page.visibleIf: "Make the page visible if" => "Gjøre siden synlig hvis"
// page.requiredIf: "Make the page required if" => "Gjør siden obligatorisk hvis"
// page.questionOrder: "Question order on the page" => "Spørsmålsrekkefølge på siden"
// matrixdropdowncolumn.name: "Column name" => "Navn på kolonne"
// matrixdropdowncolumn.title: "Column title" => "Kolonne tittel"
// matrixdropdowncolumn.isUnique: "Prevent duplicate responses" => "Forhindre dupliserte svar"
// matrixdropdowncolumn.width: "Column width" => "Kolonnebredden"
// matrixdropdowncolumn.minWidth: "Minimum column width" => "Minimum kolonnebredde"
// matrixdropdowncolumn.rows: "Input field height (in lines)" => "Høyde på inndatafelt (i linjer)"
// matrixdropdowncolumn.visibleIf: "Make the column visible if" => "Gjøre kolonnen synlig hvis"
// matrixdropdowncolumn.requiredIf: "Make the column required if" => "Gjør kolonnen obligatorisk hvis"
// matrixdropdowncolumn.showInMultipleColumns: "Each option in a separate column" => "Hvert alternativ i en egen kolonne"
// multipletextitem.name: "Name" => "Navn"
// multipletextitem.title: "Title" => "Tittel"
// pe.rateDescriptionLocation: "Label alignment" => "Justering av etiketter"
// pe.cellErrorLocation: "Cell error message alignment" => "Justering av cellefeilmelding"
// pe.listIsEmpty@columns: "You don't have any columns yet" => "Du har ingen kolonner ennå"
// pe.listIsEmpty@rows: "You don't have any rows yet" => "Du har ingen rader ennå"
// pe.listIsEmpty@validators: "You don't have any validation rules yet" => "Du har ingen valideringsregler ennå"
// pe.listIsEmpty@calculatedValues: "You don't have any custom variables yet" => "Du har ingen egendefinerte variabler ennå"
// pe.listIsEmpty@triggers: "You don't have any triggers yet" => "Du har ingen utløsere ennå"
// pe.listIsEmpty@navigateToUrlOnCondition: "You don't have any links yet" => "Du har ingen koblinger ennå"
// pe.addNew@columns: "Add new column" => "Legg til ny kolonne"
// pe.addNew@rows: "Add new row" => "Legg til ny rad"
// pe.addNew@validators: "Add new rule" => "Legg til ny regel"
// pe.addNew@calculatedValues: "Add new variable" => "Legg til ny variabel"
// pe.addNew@triggers: "Add new trigger" => "Legg til ny utløser"
// pe.addNew@navigateToUrlOnCondition: "Add new URL" => "Legg til ny URL-adresse"
// choicesbyurl.url: "Web service's URL" => "URL-adressen til webtjenesten"
// pe.progressBarShowPageTitles: "Display page titles in progress bar" => "Vise sidetitler på fremdriftslinjen"
// pe.progressBarShowPageNumbers: "Display page numbers in progress bar" => "Vise sidetall på fremdriftslinjen"
// itemvalue.visibleIf: "Make the option visible if" => "Gjøre alternativet synlig hvis"
// itemvalue.enableIf: "Make the option selectable if" => "Gjør alternativet valgbart hvis"
// panel.layout: "Panel Layout" => "Panel Oppsett"
// tabs.questionSettings: "Question Settings" => "Spørsmål Innstillinger"
// pe.url_placeholder: "Ex.: https://api.example.com/books" => "Eks.: https://api.example.com/books"
// pe.path_placeholder: "Ex.: categories.fiction" => "Eks.: kategorier.fiksjon"
// pe.questionStartIndex_placeholder: "Ex.: a)" => "Eks.: a)"
// pe.width_placeholder: "Ex.: 6in" => "Eks.: 6in"
// pe.minWidth_placeholder: "Ex.: 600px" => "Eksempel: 600 piksler"
// pe.maxWidth_placeholder: "Ex.: 50%" => "Eks.: 50%"
// pv.selected: "Selected" => "Utvalgt"
// pv.unselected: "Unselected" => "Umerkede"
// pv.center: "Center" => "Sentrum"
// pv.middle: "Middle" => "Midt"
// pv.next: "Next" => "Neste"
// pv.last: "Last" => "Siste"
// clearIfInvisible.none: "Never" => "Aldri"
// questionsOnPageMode.standard: "Original structure" => "Opprinnelig struktur"
// questionsOnPageMode.singlePage: "Show all questions on one page" => "Vis alle spørsmål på én side"
// questionsOnPageMode.questionPerPage: "Show single question per page" => "Vis ett spørsmål per side"
// pv.auto: "Auto" => "Auto"
// panelsState.firstExpanded: "First expanded" => "Først utvidet"
// rateColorMode.scale: "Scale" => "Skala"
// scaleColorMode.monochrome: "Monochrome" => "Monokrom"
// scaleColorMode.colored: "Colored" => "Farget"
// state.default: "Locked" => "Låst"
// showQuestionNumbers.default: "Auto-numbering" => "Automatisk nummerering"
// showQuestionNumbers.on: "Auto-numbering" => "Automatisk nummerering"
// showQuestionNumbers.onPage: "Reset on each page" => "Tilbakestill på hver side"
// showQuestionNumbers.onpanel: "Reset on each panel" => "Tilbakestill på hvert panel"
// showQuestionNumbers.onPanel: "Reset on each panel" => "Tilbakestill på hvert panel"
// showQuestionNumbers.onSurvey: "Continue across the survey" => "Fortsett på tvers av undersøkelsen"
// showQuestionNumbers.off: "No numbering" => "Ingen nummerering"
// descriptionLocation.underTitle: "Under the question title" => "Under spørsmålstittelen"
// descriptionLocation.underInput: "Under the input field" => "Under inntastingsfeltet"
// selectToRankAreasLayout.horizontal: "Next to choices" => "Ved siden av valg"
// selectToRankAreasLayout.vertical: "Above choices" => "Ovennevnte valg"
// displayStyle.decimal: "Decimal" => "Desimal"
// displayStyle.currency: "Currency" => "Valuta"
// displayStyle.percent: "Percentage" => "Prosent"
// displayStyle.date: "Date" => "Daddel"
// totalDisplayStyle.decimal: "Decimal" => "Desimal"
// totalDisplayStyle.currency: "Currency" => "Valuta"
// totalDisplayStyle.percent: "Percentage" => "Prosent"
// totalDisplayStyle.date: "Date" => "Daddel"
// rowOrder.initial: "Original" => "Original"
// questionOrder.initial: "Original" => "Original"
// showProgressBar.aboveheader: "Above the header" => "Over overskriften"
// showProgressBar.belowheader: "Below the header" => "Under overskriften"
// pv.sum: "Sum" => "Sum"
// pv.count: "Count" => "Greve"
// pv.min: "Min" => "Min"
// pv.max: "Max" => "Maks"
// pv.avg: "Avg" => "Avg"
// searchMode.contains: "Contains" => "Inneholder"
// searchMode.startsWith: "Starts with" => "Starter med"
// panel.name: "A panel ID that is not visible to respondents." => "En panel-ID som ikke er synlig for respondentene."
// panel.description: "Type a panel subtitle." => "Skriv inn en panelundertekst."
// panel.visibleIf: "Use the magic wand icon to set a conditional rule that determines panel visibility." => "Bruk tryllestavikonet til å angi en betinget regel som bestemmer panelets synlighet."
// panel.enableIf: "Use the magic wand icon to set a conditional rule that disables the read-only mode for the panel." => "Bruk tryllestavikonet til å angi en betinget regel som deaktiverer skrivebeskyttet modus for panelet."
// panel.requiredIf: "Use the magic wand icon to set a conditional rule that prevents survey submission unless at least one nested question has an answer." => "Bruk tryllestavikonet til å angi en betinget regel som forhindrer innsending av spørreundersøkelser med mindre minst ett nestet spørsmål har et svar."
// panel.questionTitleLocation: "Applies to all questions within this panel. If you want to override this setting, define title alignment rules for individual questions. The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Top\" by default)." => "Gjelder alle spørsmålene i dette panelet. Hvis du vil overstyre denne innstillingen, definerer du regler for titteljustering for enkeltspørsmål. Alternativet \"Arv\" bruker innstillingen på sidenivå (hvis angitt) eller undersøkelsesnivå (\"Topp\" som standard)."
// panel.questionErrorLocation: "Sets the location of an error message in relation to all questions within the panel. The \"Inherit\" option applies the page-level (if set) or survey-level setting." => "Angir plasseringen av en feilmelding i forhold til alle spørsmålene i panelet. Alternativet «Arv» bruker innstillingen på sidenivå (hvis angitt) eller undersøkelsesnivå."
// panel.questionOrder: "Keeps the original order of questions or randomizes them. The \"Inherit\" option applies the page-level (if set) or survey-level setting." => "Beholder den opprinnelige rekkefølgen på spørsmål eller randomiserer dem. Alternativet «Arv» bruker innstillingen på sidenivå (hvis angitt) eller undersøkelsesnivå."
// panel.page: "Repositions the panel to the end of a selected page." => "Flytter panelet til slutten av en merket side."
// panel.innerIndent: "Adds space or margin between the panel content and the left border of the panel box." => "Legger til mellomrom eller marg mellom panelinnholdet og venstre kant på panelboksen."
// panel.startWithNewLine: "Unselect to display the panel in one line with the previous question or panel. The setting doesn't apply if the panel is the first element in your form." => "Fjern merket for å vise panelet på én linje med forrige spørsmål eller panel. Innstillingen gjelder ikke hvis panelet er det første elementet i skjemaet."
// panel.state: "Choose from: \"Expanded\" - the panel is displayed in full and can be collapsed; \"Collapsed\" - the panel displays only the title and description and can be expanded; \"Locked\" - the panel is displayed in full and cannot be collapsed." => "Velg mellom: \"Utvidet\" - panelet vises i sin helhet og kan skjules; \"Kollapset\" - panelet viser bare tittelen og beskrivelsen og kan utvides; \"Låst\" - panelet vises i sin helhet og kan ikke skjules."
// panel.width: "Sets the width of the panel in proportion to other survey elements in the same line. Accepts CSS values (px, %, in, pt, etc.)." => "Angir bredden på panelet i forhold til andre undersøkelseselementer på samme linje. Godtar CSS-verdier (px, %, i, pt osv.)."
// paneldynamic.name: "A panel ID that is not visible to respondents." => "En panel-ID som ikke er synlig for respondentene."
// paneldynamic.description: "Type a panel subtitle." => "Skriv inn en panelundertekst."
// paneldynamic.visibleIf: "Use the magic wand icon to set a conditional rule that determines panel visibility." => "Bruk tryllestavikonet til å angi en betinget regel som bestemmer panelets synlighet."
// paneldynamic.enableIf: "Use the magic wand icon to set a conditional rule that disables the read-only mode for the panel." => "Bruk tryllestavikonet til å angi en betinget regel som deaktiverer skrivebeskyttet modus for panelet."
// paneldynamic.requiredIf: "Use the magic wand icon to set a conditional rule that prevents survey submission unless at least one nested question has an answer." => "Bruk tryllestavikonet til å angi en betinget regel som forhindrer innsending av spørreundersøkelser med mindre minst ett nestet spørsmål har et svar."
// paneldynamic.templateQuestionTitleLocation: "Applies to all questions within this panel. If you want to override this setting, define title alignment rules for individual questions. The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Top\" by default)." => "Gjelder alle spørsmålene i dette panelet. Hvis du vil overstyre denne innstillingen, definerer du regler for titteljustering for enkeltspørsmål. Alternativet \"Arv\" bruker innstillingen på sidenivå (hvis angitt) eller undersøkelsesnivå (\"Topp\" som standard)."
// paneldynamic.templateErrorLocation: "Sets the location of an error message in relation to a question with invalid input. Choose between: \"Top\" - an error text is placed at the top of the question box; \"Bottom\" - an error text is placed at the bottom of the question box. The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Top\" by default)." => "Angir plasseringen av en feilmelding i forhold til et spørsmål med ugyldige inndata. Velg mellom: \"Topp\" - en feiltekst plasseres øverst i spørsmålsboksen; \"Bunn\" - en feiltekst er plassert nederst i spørsmålsboksen. Alternativet \"Arv\" bruker innstillingen på sidenivå (hvis angitt) eller undersøkelsesnivå (\"Topp\" som standard)."
// paneldynamic.errorLocation: "Sets the location of an error message in relation to all questions within the panel. The \"Inherit\" option applies the page-level (if set) or survey-level setting." => "Angir plasseringen av en feilmelding i forhold til alle spørsmålene i panelet. Alternativet «Arv» bruker innstillingen på sidenivå (hvis angitt) eller undersøkelsesnivå."
// paneldynamic.page: "Repositions the panel to the end of a selected page." => "Flytter panelet til slutten av en merket side."
// paneldynamic.innerIndent: "Adds space or margin between the panel content and the left border of the panel box." => "Legger til mellomrom eller marg mellom panelinnholdet og venstre kant på panelboksen."
// paneldynamic.startWithNewLine: "Unselect to display the panel in one line with the previous question or panel. The setting doesn't apply if the panel is the first element in your form." => "Fjern merket for å vise panelet på én linje med forrige spørsmål eller panel. Innstillingen gjelder ikke hvis panelet er det første elementet i skjemaet."
// paneldynamic.state: "Choose from: \"Expanded\" - the panel is displayed in full and can be collapsed; \"Collapsed\" - the panel displays only the title and description and can be expanded; \"Locked\" - the panel is displayed in full and cannot be collapsed." => "Velg mellom: \"Utvidet\" - panelet vises i sin helhet og kan skjules; \"Kollapset\" - panelet viser bare tittelen og beskrivelsen og kan utvides; \"Låst\" - panelet vises i sin helhet og kan ikke skjules."
// paneldynamic.width: "Sets the width of the panel in proportion to other survey elements in the same line. Accepts CSS values (px, %, in, pt, etc.)." => "Angir bredden på panelet i forhold til andre undersøkelseselementer på samme linje. Godtar CSS-verdier (px, %, i, pt osv.)."
// paneldynamic.templateTitle: "Type in a template for dynamic panel titles. Use {panelIndex} for the panel's general position and {visiblePanelIndex} for its order among visible panels. Insert these placeholders into the pattern to add automatic numbering." => "Skriv inn en mal for dynamiske paneltitler. Bruk {panelIndex} for panelets generelle posisjon og {visiblePanelIndex} for rekkefølgen blant synlige paneler. Sett inn disse plassholderne i mønsteret for å legge til automatisk nummerering."
// paneldynamic.templateTabTitle: "Type in a template for tab titles. Use {panelIndex} for a panel's general position and {visiblePanelIndex} for its order among visible panels. Insert these placeholders into the pattern to add automatic numbering." => "Skriv inn en mal for fanetitler. Bruk {panelIndex} for panelets generelle posisjon og {visiblePanelIndex} for rekkefølgen blant synlige paneler. Sett inn disse plassholderne i mønsteret for å legge til automatisk nummerering."
// paneldynamic.templateVisibleIf: "This setting allows you to control the visibility of individual panels within the dynamic panel. Use the `{panel}` placeholder to reference the current panel in your expression." => "Med denne innstillingen kan du kontrollere synligheten til individuelle paneler i det dynamiske panelet. Bruk plassholderen {panel} til å referere til gjeldende panel i uttrykket."
// paneldynamic.titleLocation: "This setting is automatically inherited by all questions within this panel. If you want to override this setting, define title alignment rules for individual questions. The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Top\" by default)." => "Denne innstillingen arves automatisk av alle spørsmålene i dette panelet. Hvis du vil overstyre denne innstillingen, definerer du regler for titteljustering for enkeltspørsmål. Alternativet \"Arv\" bruker innstillingen på sidenivå (hvis angitt) eller undersøkelsesnivå (\"Topp\" som standard)."
// paneldynamic.descriptionLocation: "The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Under the panel title\" by default)." => "Alternativet \"Arv\" bruker innstillingen på sidenivå (hvis angitt) eller innstilling på undersøkelsesnivå (\"Under paneltittelen\" som standard)."
// paneldynamic.newPanelPosition: "Defines the position of a newly added panel. By default, new panels are added to the end. Select \"Next\" to insert a new panel after the current one." => "Definerer posisjonen til et nylig lagt til-panel. Som standard legges nye paneler til slutten. Velg \"Neste\" for å sette inn et nytt panel etter det nåværende."
// paneldynamic.copyDefaultValueFromLastEntry: "Duplicates answers from the last panel and assigns them to the next added dynamic panel." => "Dupliserer svar fra det siste panelet og tilordner dem til det neste dynamiske panelet som er lagt til."
// paneldynamic.keyName: "Reference a question name to require a user to provide a unique response for this question in each panel." => "Referer til et spørsmålsnavn for å kreve at en bruker gir et unikt svar på dette spørsmålet i hvert panel."
// pehelp.defaultValueExpression: "This setting allows you to assign a default answer value based on an expression. The expression can include basic calculations - `{q1_id} + {q2_id}`, Boolean expressions, such as `{age} > 60`, and functions: `iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, etc. The value determined by this expression serves as the initial default value that can be overridden by a respondent's manual input." => "Med denne innstillingen kan du tilordne en standard svarverdi basert på et uttrykk. Uttrykket kan inneholde grunnleggende beregninger - '{q1_id} + {q2_id}', boolske uttrykk, for eksempel '{alder} > 60', og funksjoner: 'iif()', 'today()', 'age()', 'min()', 'max()', 'avg()', etc. Verdien som bestemmes av dette uttrykket, fungerer som den opprinnelige standardverdien som kan overstyres av en respondents manuelle inndata."
// pehelp.resetValueIf: "Use the magic wand icon to set a conditional rule that determines when a respondent's input is reset to the value based on the \"Default value expression\" or \"Set value expression\" or to the \"Default answer\" value (if either is set)." => "Bruk tryllestavikonet til å angi en betinget regel som bestemmer når en respondents inndata tilbakestilles til verdien basert på \"Standardverdiuttrykk\" eller \"Angi verdiuttrykk\" eller til \"Standard svar\"-verdien (hvis en av dem er angitt)."
// pehelp.setValueIf: "Use the magic wand icon to set a conditional rule that determines when to run the \"Set value expression\" and dynamically assign the resulting value as a response." => "Bruk tryllestavikonet til å angi en betinget regel som bestemmer når \"Angi verdiuttrykk\" skal kjøres, og tilordne den resulterende verdien dynamisk som et svar."
// pehelp.setValueExpression: "Specify an expression that defines the value to be set when the conditions in the \"Set value if\" rule are met. The expression can include basic calculations - `{q1_id} + {q2_id}`, Boolean expressions, such as `{age} > 60`, and functions: `iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, etc. The value determined by this expression can be overridden by a respondent's manual input." => "Angi et uttrykk som definerer verdien som skal angis når betingelsene i regelen Angi verdi hvis er oppfylt. Uttrykket kan inneholde grunnleggende beregninger - '{q1_id} + {q2_id}', boolske uttrykk, for eksempel '{alder} > 60', og funksjoner: 'iif()', 'today()', 'age()', 'min()', 'max()', 'avg()', etc. Verdien som bestemmes av dette uttrykket, kan overstyres av en respondents manuelle inndata."
// question.name: "A question ID that is not visible to respondents." => "En spørsmåls-ID som ikke er synlig for respondentene."
// question.description: "Type a question subtitle." => "Skriv inn en spørsmålsundertittel."
// question.visibleIf: "Use the magic wand icon to set a conditional rule that determines question visibility." => "Bruk tryllestavikonet til å angi en betinget regel som bestemmer spørsmålets synlighet."
// question.enableIf: "Use the magic wand icon to set a conditional rule that disables the read-only mode for the question." => "Bruk tryllestavikonet til å angi en betinget regel som deaktiverer skrivebeskyttet modus for spørsmålet."
// question.requiredIf: "Use the magic wand icon to set a conditional rule that prevents survey advancing or submission unless the question received an answer." => "Bruk tryllestavikonet til å angi en betinget regel som forhindrer avansement eller innsending av spørreundersøkelser med mindre spørsmålet fikk svar."
// question.startWithNewLine: "Unselect to display the question in one line with the previous question or panel. The setting doesn't apply if the question is the first element in your form." => "Fjern merket for å vise spørsmålet på én linje med forrige spørsmål eller panel. Innstillingen gjelder ikke hvis spørsmålet er det første elementet i skjemaet."
// question.page: "Repositions the question to the end of a selected page." => "Flytter spørsmålet til slutten av en merket side."
// question.state: "Choose from: \"Expanded\" - the question box is displayed in full and can be collapsed; \"Collapsed\" - the question box displays only the title and description and can be expanded; \"Locked\" - the question box is displayed in full and cannot be collapsed." => "Velg mellom: \"Utvidet\" - spørsmålsboksen vises i sin helhet og kan skjules; \"Kollapset\" - spørsmålsboksen viser bare tittelen og beskrivelsen og kan utvides; \"Låst\" - spørsmålsboksen vises i sin helhet og kan ikke skjules."
// question.titleLocation: "Overrides title alignment rules defined on a panel, page or survey level. The \"Inherit\" option applies any higher-level settings (if set) or survey-level setting (\"Top\" by default)." => "Overstyrer titteljusteringsregler som er definert på panel-, side- eller undersøkelsesnivå. Alternativet \"Arv\" bruker innstillinger på høyere nivå (hvis angitt) eller innstilling på undersøkelsesnivå (\"Topp\" som standard)."
// question.descriptionLocation: "The \"Inherit\" option applies the survey-level setting (\"Under the question title\" by default)." => "Alternativet \"Arv\" bruker innstillingen på undersøkelsesnivå (\"Under spørsmålstittelen\" som standard)."
// question.errorLocation: "Sets the location of an error message in relation to the question with invalid input. Choose between: \"Top\" - an error text is placed at the top of the question box; \"Bottom\" - an error text is placed at the bottom of the question box. The \"Inherit\" option applies the survey-level setting (\"Top\" by default)." => "Angir plasseringen til en feilmelding i forhold til spørsmålet med ugyldige inndata. Velg mellom: \"Topp\" - en feiltekst plasseres øverst i spørsmålsboksen; \"Bunn\" - en feiltekst er plassert nederst i spørsmålsboksen. Alternativet \"Arv\" bruker innstillingen på undersøkelsesnivå (\"Topp\" som standard)."
// question.indent: "Adds space or margin between the question content and the left border of the question box." => "Legger til mellomrom eller marg mellom spørsmålsinnholdet og venstre kantlinje i spørsmålsboksen."
// question.width: "Sets the width of the question in proportion to other survey elements in the same line. Accepts CSS values (px, %, in, pt, etc.)." => "Angir bredden på spørsmålet i forhold til andre undersøkelseselementer på samme linje. Godtar CSS-verdier (px, %, i, pt osv.)."
// surveyvalidator.expression: "Use the magic wand icon to set a validation rule for the question." => "Bruk tryllestavikonet til å angi en valideringsregel for spørsmålet."
// question.textUpdateMode: "Choose from: \"On lost focus\" - the value is updated when the input field loses focus; \"While typing\" - the value is updated in real-time, as users are typing. The \"Inherit\" option applies the survey-level setting (\"On lost focus\" by default)." => "Velg mellom: \"Ved tapt fokus\" - verdien oppdateres når inntastingsfeltet mister fokus; \"Mens du skriver\" - verdien oppdateres i sanntid, mens brukerne skriver. Alternativet \"Arv\" bruker innstillingen på undersøkelsesnivå (\"Ved tapt fokus\" som standard)."
// question.url: "You can use any web service as a data source for multiple-choice questions. To populate choice values, enter the URL of the service providing the data." => "Du kan bruke en hvilken som helst webtjeneste som datakilde for flervalgsspørsmål. Hvis du vil fylle ut valgverdier, angir du URL-adressen til tjenesten som leverer dataene."
// question.searchMode: "A comparison operation used to filter the drop-down list." => "En sammenligningsoperasjon som brukes til å filtrere rullegardinlisten."
// signaturepad.signatureWidth: "Sets the width of the displayed signature area and the resulting image." => "Angir bredden på signaturområdet som vises, og det resulterende bildet."
// signaturepad.signatureHeight: "Sets the height of the displayed signature area and the resulting image." => "Angir høyden på signaturområdet som vises, og det resulterende bildet."
// signaturepad.signatureAutoScaleEnabled: "Select if you want the signature area to fill all available space within the question box while maintaining the default 3:2 aspect ratio. When custom width and height values are set, the setting will keep the aspect ratio of these dimensions." => "Velg dette alternativet hvis du vil at signaturområdet skal fylle all tilgjengelig plass i spørsmålsboksen, samtidig som standardforholdet 3:2 beholdes. Når egendefinerte bredde- og høydeverdier angis, beholdes innstillingen størrelsesforholdet for disse dimensjonene."
// file.imageHeight: "Adjusts the height of the image in the survey results." => "Justerer høyden på bildet i undersøkelsesresultatene."
// file.imageWidth: "Adjusts the width of the image in the survey results." => "Justerer bredden på bildet i undersøkelsesresultatene."
// imagepicker.imageHeight: "Overrides the minimum and maximum height values." => "Overstyrer minimums- og maksimumshøydeverdiene."
// imagepicker.imageWidth: "Overrides the minimum and maximum width values." => "Overstyrer verdiene for minimums- og maksimumsbredde."
// imagepicker.choices: "\"Value\" serves as an item ID used in conditional rules; \"Text\" is displayed to respondents." => "\"Verdi\" fungerer som en vare-ID som brukes i betingede regler; \"Tekst\" vises for respondentene."
// text.size: "This setting only resizes the input field and doesn't affect the width of the question box. To limit the accepted input length, go to <b>Validation → Maximum character limit</b>." => "Denne innstillingen endrer bare størrelsen på inndatafeltet og påvirker ikke bredden på spørsmålsboksen. Hvis du vil begrense den godkjente inndatalengden, går du til <b>Validering → Maksimal tegngrense</b>."
// comment.rows: "Sets the number of displayed lines in the input field. If the input takes up more lines, the scroll bar will appear." => "Angir antall viste linjer i inndatafeltet. Hvis inngangen tar opp flere linjer, vises rullefeltet."
// survey.mode: "Choose between: \"Editable\" - enables respondents to fill out your survey; \"Read-only\" - disables form editing." => "Velg mellom: \"Redigerbar\" - gjør det mulig for respondenter å fylle ut undersøkelsen din; \"Skrivebeskyttet\" - deaktiverer skjemaredigering."
// matrixdropdowncolumn.name: "A column ID that is not visible to respondents." => "En kolonne-ID som ikke er synlig for respondentene."
// matrixdropdowncolumn.isUnique: "When enabled for a column, a respondent is required to provide a unique response for each question within this column." => "Når en respondent er aktivert for en kolonne, må den gi et unikt svar for hvert spørsmål i denne kolonnen."
// matrixdropdowncolumn.rows: "Sets the number of displayed lines in the input field. If the input takes up more lines, the scroll bar will appear." => "Angir antall viste linjer i inndatafeltet. Hvis inngangen tar opp flere linjer, vises rullefeltet."
// matrixdropdowncolumn.visibleIf: "Use the magic wand icon to set a conditional rule that determines column visibility." => "Bruk tryllestavikonet til å angi en betinget regel som bestemmer kolonnens synlighet."
// matrixdropdowncolumn.enableIf: "Use the magic wand icon to set a conditional rule that disables the read-only mode for the column." => "Bruk tryllestavikonet til å angi en betinget regel som deaktiverer skrivebeskyttet modus for kolonnen."
// matrixdropdowncolumn.requiredIf: "Use the magic wand icon to set a conditional rule that prevents survey submission unless at least one nested question has an answer." => "Bruk tryllestavikonet til å angi en betinget regel som forhindrer innsending av spørreundersøkelser med mindre minst ett nestet spørsmål har et svar."
// matrixdropdowncolumn.showInMultipleColumns: "When selected, creates an individual column for each choice option." => "Når dette alternativet er valgt, opprettes det én kolonne for hvert valgalternativ."
// pehelp.widthMode: "Choose from: \"Static\" - sets a fixed width; \"Responsive\" - makes the survey occupy the full width of the screen; \"Auto\" - applies either of the two depending on the question types used." => "Velg mellom: \"Statisk\" - setter en fast bredde; \"Responsive\" - gjør at undersøkelsen opptar hele bredden på skjermen; \"Auto\" - gjelder en av de to avhengig av spørsmålstypene som brukes."
// pehelp.logo: "Paste an image link (no size limits) or click the folder icon to browse a file from your computer (up to 64KB)." => "Lim inn en bildekobling (ingen størrelsesbegrensninger) eller klikk på mappeikonet for å bla gjennom en fil fra datamaskinen din (opptil 64KB)."
// pehelp.logoWidth: "Sets a logo width in CSS units (px, %, in, pt, etc.)." => "Setter en logo bredde i CSS enheter (px, %, i, pt, etc.)."
// pehelp.logoHeight: "Sets a logo height in CSS units (px, %, in, pt, etc.)." => "Angir en logo høyde i CSS enheter (px, %, i, pt, etc.)."
// pehelp.logoFit: "Choose from: \"None\" - image maintains its original size; \"Contain\" - image is resized to fit while maintaining its aspect ratio; \"Cover\" - image fills the entire box while maintaining its aspect ratio; \"Fill\" - image is stretched to fill the box without maintaining its aspect ratio." => "Velg mellom: \"Ingen\" - bildet opprettholder sin opprinnelige størrelse; \"Innehold\" - bildet endres for å passe samtidig som størrelsesforholdet opprettholdes; \"Cover\" - bildet fyller hele boksen mens du opprettholder størrelsesforholdet; \"Fyll\" - bildet strekkes for å fylle boksen uten å opprettholde størrelsesforholdet."
// pehelp.showNavigationButtons: "Sets the visibility and location of navigation buttons on a page." => "Angir synligheten og plasseringen av navigasjonsknapper på en side."
// pehelp.showProgressBar: "Sets the visibility and location of a progress bar. The \"Auto\" value displays the progress bar above or below the survey header." => "Angir synligheten og plasseringen til en fremdriftsindikator. \"Auto\"-verdien viser fremdriftslinjen over eller under undersøkelseshodet."
// pehelp.showPreviewBeforeComplete: "Enable the preview page with all or answered questions only." => "Aktiver forhåndsvisningssiden med alle eller besvarte spørsmål."
// pehelp.questionTitleLocation: "Applies to all questions within the survey. This setting can be overridden by title alignment rules at lower levels: panel, page, or question. A lower-level setting will override those on a higher level." => "Gjelder alle spørsmålene i undersøkelsen. Denne innstillingen kan overstyres av titteljusteringsregler på lavere nivåer: panel, side eller spørsmål. En innstilling på lavere nivå vil overstyre de på et høyere nivå."
// pehelp.requiredMark: "A symbol or a sequence of symbols indicating that an answer is required." => "Et symbol eller en sekvens av symboler som indikerer at et svar er nødvendig."
// pehelp.questionStartIndex: "Enter a number or letter with which you want to start numbering." => "Skriv inn et tall eller bokstav du vil starte nummereringen med."
// pehelp.questionErrorLocation: "Sets the location of an error message in relation to the question with invalid input. Choose between: \"Top\" - an error text is placed at the top of the question box; \"Bottom\" - an error text is placed at the bottom of the question box." => "Angir plasseringen til en feilmelding i forhold til spørsmålet med ugyldige inndata. Velg mellom: \"Topp\" - en feiltekst plasseres øverst i spørsmålsboksen; \"Bunn\" - en feiltekst er plassert nederst i spørsmålsboksen."
// pehelp.autoFocusFirstQuestion: "Select if you want the first input field on each page ready for text entry." => "Velg om du vil at det første inntastingsfeltet på hver side skal være klart for tekstinntasting."
// pehelp.questionOrder: "Keeps the original order of questions or randomizes them. The effect of this setting is only visible in the Preview tab." => "Beholder den opprinnelige rekkefølgen på spørsmål eller randomiserer dem. Effekten av denne innstillingen er bare synlig i kategorien Forhåndsvisning."
// pehelp.maxTextLength: "For text entry questions only." => "Kun for spørsmål om tekstoppføring."
// pehelp.maxCommentLength: "For question comments only." => "Kun for spørsmålskommentarer."
// pehelp.autoGrowComment: "Select if you want question comments and Long Text questions to auto-grow in height based on the entered text length." => "Velg om du vil at spørsmålskommentarer og Lang tekst-spørsmål skal vokse automatisk i høyde basert på den angitte tekstlengden."
// pehelp.allowResizeComment: "For question comments and Long Text questions only." => "Kun for spørsmålskommentarer og langtekstspørsmål."
// pehelp.calculatedValues: "Custom variables serve as intermediate or auxiliary variables used in form calculations. They take respondent inputs as source values. Each custom variable has a unique name and an expression it's based on." => "Egendefinerte variabler fungerer som mellomliggende variabler eller hjelpevariabler som brukes i skjemaberegninger. De tar respondentinnganger som kildeverdier. Hver egendefinerte variabel har et unikt navn og et uttrykk den er basert på."
// pehelp.includeIntoResult: "Select if you wish the calculated value of the expression to be saved along with survey results." => "Velg dette hvis du vil at den beregnede verdien for uttrykket skal lagres sammen med evalueringsresultatene."
// pehelp.triggers: "A trigger is an event or condition that is based on an expression. Once the expression is evaluated to \"true\", a trigger sets off an action. Such an action can optionally have a target question it affects." => "En utløser er en hendelse eller betingelse som er basert på et uttrykk. Når uttrykket er evaluert til \"sann\", utløses en utløser en handling. En slik handling kan eventuelt ha et målspørsmål den påvirker."
// pehelp.clearInvisibleValues: "Choose whether or not to clear values for questions hidden by conditional logic and when to do it." => "Velg om du vil fjerne verdier for spørsmål skjult av betinget logikk, og når du vil gjøre det."
// pehelp.textUpdateMode: "Choose from: \"On lost focus\" - the value is updated when the input field loses focus; \"While typing\" - the value is updated in real-time, as users are typing." => "Velg mellom: \"Ved tapt fokus\" - verdien oppdateres når inntastingsfeltet mister fokus; \"Mens du skriver\" - verdien oppdateres i sanntid, mens brukerne skriver."
// pehelp.columns: "The left value serves as a column ID used in conditional rules, the right value is displayed to respondents." => "Den venstre verdien fungerer som en kolonne-ID som brukes i betingede regler, den riktige verdien vises for respondentene."
// pehelp.rows: "The left value serves as a row ID used in conditional rules, the right value is displayed to respondents." => "Den venstre verdien fungerer som en rad-ID som brukes i betingede regler, den riktige verdien vises for respondentene."
// pehelp.columnMinWidth: "Accepts CSS values (px, %, in, pt, etc.)." => "Godtar CSS-verdier (px, %, i, pt osv.)."
// pehelp.rowTitleWidth: "Accepts CSS values (px, %, in, pt, etc.)." => "Godtar CSS-verdier (px, %, i, pt osv.)."
// pehelp.cellErrorLocation: "Sets the location of an error message in relation to a cell with invalid input. The \"Inherit\" option applies the setting from the \"Error message alignment\" property." => "Angir plasseringen til en feilmelding i forhold til en celle med ugyldige inndata. Alternativet \"Arv\" bruker innstillingen fra egenskapen \"Justering av feilmelding\"."
// pehelp.keyDuplicationError: "When the \"Prevent duplicate responses\" property is enabled, a respondent attempting to submit a duplicate entry will receive the following error message." => "Når egenskapen \"Forhindre dupliserte svar\" er aktivert, får en svarperson som prøver å sende inn en duplikatoppføring, følgende feilmelding."
// pehelp.totalExpression: "Allows you to calculate total values based on an expression. The expression can include basic calculations (`{q1_id} + {q2_id}`), Boolean expressions (`{age} > 60`) and functions ('iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, etc.)." => "Lar deg beregne totalverdier basert på et uttrykk. Uttrykket kan omfatte grunnleggende beregninger ('{q1_id} + {q2_id}'), boolske uttrykk ('{alder} > 60') og funksjoner ('iif()', 'today()', 'age()', 'min()', 'max()', 'avg()', etc.)."
// pehelp.confirmDelete: "Triggers a prompt asking to confirm the row deletion." => "Utløser en melding som ber om å bekrefte radslettingen."
// pehelp.copyDefaultValueFromLastEntry: "Duplicates answers from the last row and assigns them to the next added dynamic row." => "Dupliserer svar fra den siste raden og tilordner dem til den neste dynamiske raden som er lagt til."
// pehelp.description: "Type a subtitle." => "Skriv inn en undertekst."
// pehelp.locale: "Choose a language to begin creating your survey. To add a translation, switch to a new language and translate the original text here or in the Translations tab." => "Velg et språk for å begynne å opprette evalueringen. Hvis du vil legge til en oversettelse, bytter du til et nytt språk og oversetter originalteksten her eller i Oversettelser-fanen."
// pehelp.detailPanelMode: "Sets the location of a details section in relation to a row. Choose from: \"None\" - no expansion is added; \"Under the row\" - a row expansion is placed under each row of the matrix; \"Under the row, display one row expansion only\" - an expansion is displayed under a single row only, the remaining row expansions are collapsed." => "Angir plasseringen av en detaljinndeling i forhold til en rad. Velg mellom: \"Ingen\" - ingen utvidelse er lagt til; \"Under raden\" - en radutvidelse er plassert under hver rad av matrisen; \"Under raden, vis bare en radutvidelse\" - en utvidelse vises bare under en enkelt rad, de resterende radutvidelsene er skjult."
// pehelp.imageFit: "Choose from: \"None\" - image maintains its original size; \"Contain\" - image is resized to fit while maintaining its aspect ratio; \"Cover\" - image fills the entire box while maintaining its aspect ratio; \"Fill\" - image is stretched to fill the box without maintaining its aspect ratio." => "Velg mellom: \"Ingen\" - bildet opprettholder sin opprinnelige størrelse; \"Innehold\" - bildet endres for å passe samtidig som størrelsesforholdet opprettholdes; \"Cover\" - bildet fyller hele boksen mens du opprettholder størrelsesforholdet; \"Fyll\" - bildet strekkes for å fylle boksen uten å opprettholde størrelsesforholdet."
// pehelp.autoGrow: "Gradually increases the height of the input field as data is being entered. Overrides the \"Input field height (in lines)\" setting." => "Øker gradvis høyden på inndatafeltet etter hvert som data registreres. Overstyrer innstillingen \"Inndatafelthøyde (i linjer)\"."
// pehelp.allowResize: "The resize handle (or grip) appears in the corner and can be dragged to alter the size of the input field." => "Skaleringshåndtaket (eller grepet) vises i hjørnet og kan dras for å endre størrelsen på inndatafeltet."
// pehelp.timeLimit: "A time interval in seconds after which the survey auto-advances to the Thank You page." => "Et tidsintervall i sekunder hvoretter undersøkelsen automatisk går videre til takkesiden."
// pehelp.timeLimitPerPage: "A time interval in seconds after which the survey auto-advances to the next page." => "Et tidsintervall i sekunder hvoretter undersøkelsen automatisk går videre til neste side."
// page.timeLimit: "A time interval in seconds after which the survey auto-advances to the next page." => "Et tidsintervall i sekunder hvoretter undersøkelsen automatisk går videre til neste side."
// page.visibleIf: "Use the magic wand icon to set a conditional rule that determines page visibility." => "Bruk tryllestavikonet til å angi en betinget regel som bestemmer sidens synlighet."
// page.enableIf: "Use the magic wand icon to set a conditional rule that disables the read-only mode for the page." => "Bruk tryllestavikonet til å angi en betinget regel som deaktiverer skrivebeskyttet modus for siden."
// page.requiredIf: "Use the magic wand icon to set a conditional rule that prevents survey submission unless at least one nested question has an answer." => "Bruk tryllestavikonet til å angi en betinget regel som forhindrer innsending av spørreundersøkelser med mindre minst ett nestet spørsmål har et svar."
// page.questionTitleLocation: "Applies to all questions within this page. If you want to override this setting, define title alignment rules for individual questions or panels. The \"Inherit\" option applies the survey-level setting (\"Top\" by default)." => "Gjelder alle spørsmål på denne siden. Hvis du vil overstyre denne innstillingen, definerer du regler for titteljustering for enkeltspørsmål eller paneler. Alternativet \"Arv\" bruker innstillingen på undersøkelsesnivå (\"Topp\" som standard)."
// page.questionErrorLocation: "Sets the location of an error message in relation to the question with invalid input. Choose between: \"Top\" - an error text is placed at the top of the question box; \"Bottom\" - an error text is placed at the bottom of the question box. The \"Inherit\" option applies the survey-level setting (\"Top\" by default)." => "Angir plasseringen til en feilmelding i forhold til spørsmålet med ugyldige inndata. Velg mellom: \"Topp\" - en feiltekst plasseres øverst i spørsmålsboksen; \"Bunn\" - en feiltekst er plassert nederst i spørsmålsboksen. Alternativet \"Arv\" bruker innstillingen på undersøkelsesnivå (\"Topp\" som standard)."
// page.questionOrder: "Keeps the original order of questions or randomizes them. The \"Inherit\" option applies the survey-level setting (\"Original\" by default). The effect of this setting is only visible in the Preview tab." => "Beholder den opprinnelige rekkefølgen på spørsmål eller randomiserer dem. Alternativet \"Arv\" bruker innstillingen på undersøkelsesnivå (\"Original\" som standard). Effekten av denne innstillingen er bare synlig i kategorien Forhåndsvisning."
// page.showNavigationButtons: "Sets the visibility of navigation buttons on the page. The \"Inherit\" option applies the survey-level setting, which defaults to \"Visible\"." => "Angir synligheten til navigasjonsknapper på siden. Alternativet \"Arv\" bruker innstillingen på undersøkelsesnivå, som som standard er \"Synlig\"."
// pehelp.panelsState: "Choose from: \"Locked\" - users cannot expand or collapse panels; \"Collapse all\" - all panels start in a collapsed state; \"Expand all\" - all panels start in an expanded state; \"First expanded\" - only the first panel is initially expanded." => "Velg mellom: \"Låst\" - brukere kan ikke utvide eller skjule paneler; \"Skjul alle\" - alle paneler starter i kollapset tilstand; \"Utvid alle\" - alle paneler starter i utvidet tilstand; \"Først utvidet\" - bare det første panelet er i utgangspunktet utvidet."
// pehelp.imageLinkName: "Enter a shared property name within the array of objects that contains the image or video file URLs you want to display in the choice list." => "Skriv inn et navn på en delt egenskap i matrisen med objekter som inneholder URL-adressene til bildet eller videofilen du vil vise i valglisten."
// pehelp.choices: "The left value serves as an item ID used in conditional rules, the right value is displayed to respondents." => "Den venstre verdien fungerer som en vare-ID som brukes i betingede regler, den riktige verdien vises for respondentene."
// pehelp.title: "Type a user-friendly title to display." => "Skriv inn en brukervennlig tittel som skal vises."
// pehelp.waitForUpload: "Ensures that users won't complete the survey until files are uploaded." => "Sikrer at brukerne ikke fullfører undersøkelsen før filene er lastet opp."
// pehelp.minWidth: "Accepts CSS values (px, %, in, pt, etc.)." => "Godtar CSS-verdier (px, %, i, pt osv.)."
// pehelp.maxWidth: "Accepts CSS values (px, %, in, pt, etc.)." => "Godtar CSS-verdier (px, %, i, pt osv.)."
// pehelp.width: "Accepts CSS values (px, %, in, pt, etc.)." => "Godtar CSS-verdier (px, %, i, pt osv.)."
// pehelp.useDisplayValuesInDynamicTexts: "In single- and multiple-selection question types, each choice option has an ID and display value. When selected, this setting shows a display value instead of an ID value in HTML questions and dynamic titles and descriptions of survey elements." => "I enkeltvalgs- og flervalgsspørsmålstyper har hvert valgalternativ en ID og visningsverdi. Når denne innstillingen er valgt, vises en visningsverdi i stedet for en ID-verdi i HTML-spørsmål og dynamiske titler og beskrivelser av evalueringselementer."
// pehelp.clearIfInvisible: "Choose whether or not to clear question values hidden by conditional logic and when to do it. The \"Inherit\" option applies the survey-level setting (\"Upon survey completion\" by default)." => "Velg om du vil fjerne spørsmålsverdier skjult av betinget logikk, og når du vil gjøre det. Alternativet \"Arv\" bruker innstillingen på undersøkelsesnivå (\"Når undersøkelsen er fullført\" som standard)."
// pehelp.choicesFromQuestionMode: "Choose from: \"All\" - copies all choice options from the selected question; \"Selected\" - dynamically copies only selected choice options; \"Unselected\" - dynamically copies only unselected choice options. The \"None\" and \"Other\" options are copied by default if enabled in the source question." => "Velg mellom: \"Alle\" - kopierer alle valgalternativer fra det valgte spørsmålet; \"Valgt\" - kopierer dynamisk bare valgte valgalternativer; \"Unselected\" - kopierer dynamisk bare uvalgte valgalternativer. Alternativene \"Ingen\" og \"Annet\" kopieres som standard hvis de er aktivert i kildespørsmålet."
// pehelp.showOtherItem: "When selected, users can include additional input in a separate comment box." => "Når dette alternativet er valgt, kan brukerne inkludere flere inndata i et eget kommentarfelt."
// pehelp.separateSpecialChoices: "Displays each special choice option (\"None\", \"Other\", \"Select All\") on a new line, even when using a multiple-column layout." => "Viser hvert spesialvalgalternativ (\"Ingen\", \"Annet\", \"Merk alt\") på en ny linje, selv når du bruker et oppsett med flere kolonner."
// pehelp.path: "Specify the location within the service dataset where the target array of objects is located. Leave empty if the URL already points to the array." => "Angi plasseringen i tjenestedatasettet der målmatrisen med objekter er plassert. La stå tom hvis URL-adressen allerede peker på matrisen."
// pehelp.titleName: "Enter a uniform property name within the array of objects that contains the values you want to display in the choice list." => "Skriv inn et ensartet egenskapsnavn i matrisen med objekter som inneholder verdiene du vil vise i valglisten."
// pehelp.allowEmptyResponse: "Select to allow the service to return an empty response or array." => "Velg dette alternativet hvis du vil at tjenesten skal returnere et tomt svar eller en matrise."
// pehelp.choicesVisibleIf: "Use the magic wand icon to set a conditional rule that determines the visibility of all choice options." => "Bruk tryllestavikonet til å angi en betinget regel som bestemmer synligheten til alle valgalternativer."
// pehelp.rateValues: "The left value serves as an item ID used in conditional rules, the right value is displayed to respondents." => "Den venstre verdien fungerer som en vare-ID som brukes i betingede regler, den riktige verdien vises for respondentene."
// rating.displayMode: "\"Auto\" selects between the \"Buttons\" and \"Dropdown\" modes based on the available width. When the width is insufficient to display buttons, the question displays a dropdown." => "\"Auto\" velger mellom \"Knapper\" og \"Dropdown\" -modus basert på tilgjengelig bredde. Når bredden ikke er tilstrekkelig til å vise knapper, viser spørsmålet en rullegardinmeny."
// pehelp.valuePropertyName: "Allows you to connect questions that produce results in different formats. When such questions are linked together using a join identifier, this shared property stores selected question values." => "Lar deg koble til spørsmål som gir resultater i forskjellige formater. Når slike spørsmål kobles sammen ved hjelp av en sammenføyningsidentifikator, lagrer denne delte egenskapen valgte spørsmålsverdier."
// pehelp.searchEnabled: "Select if you want to update the drop-down menu contents to match the search query that a user is typing in the input field." => "Velg om du vil oppdatere innholdet på rullegardinmenyen slik at det samsvarer med søket som en bruker skriver inn i inndatafeltet."
// pehelp.valueTrue: "A value to save in survey results when respondents give a positive answer." => "En verdi å spare i undersøkelsesresultater når respondentene gir et positivt svar."
// pehelp.valueFalse: "A value to save in survey results when respondents give a negative answer." => "En verdi å lagre i undersøkelsesresultater når respondentene gir et negativt svar."
// pehelp.showPreview: "It's not recommended to disable this option as it overrides the Preview image and makes it hard for a user to understand whether the files have been uploaded." => "Det anbefales ikke å deaktivere dette alternativet, da det overstyrer forhåndsvisningsbildet og gjør det vanskelig for en bruker å forstå om filene er lastet opp."
// pehelp.needConfirmRemoveFile: "Triggers a prompt asking to confirm the file deletion." => "Utløser en melding som ber om å bekrefte slettingen av filen."
// pehelp.selectToRankEnabled: "Enable to rank only selected choices. Users will drag selected items from the choice list to order them within the ranking area." => "Aktiver for å rangere bare valgte valg. Brukere vil dra valgte elementer fra valglisten for å sortere dem innenfor rangeringsområdet."
// pehelp.dataList: "Enter a list of choices that will be suggested to the respondent during input." => "Angi en liste over valg som skal foreslås for respondenten under inndata."
// pehelp.inputSize: "The setting only resizes the input fields and doesn't affect the width of the question box." => "Innstillingen endrer bare størrelsen på inndatafeltene og påvirker ikke bredden på spørsmålsboksen."
// pehelp.itemTitleWidth: "Sets consistent width for all item labels in pixels" => "Angir konsekvent bredde for alle elementetiketter i piksler"
// pehelp.contentMode: "The \"Auto\" option automatically determines the suitable mode for display - Image, Video, or YouTube - based on the source URL provided." => "Alternativet \"Auto\" bestemmer automatisk passende modus for visning - Bilde, Video eller YouTube - basert på kildens URL som er oppgitt."
// pehelp.altText: "Serves as a substitute when the image cannot be displayed on a user's device and for accessibility purposes." => "Fungerer som en erstatning når bildet ikke kan vises på en brukers enhet og av tilgjengelighetshensyn."
// pehelp.rateColorMode: "Defines the color of the selected emoji when the Rating icon type is set to \"Smileys\". Choose between: \"Default\" - the selected emoji appears in default survey color; \"Scale\" - the selected emoji inherits color from the rating scale." => "Definerer fargen på den valgte emojien når Vurdering-ikontypen er satt til \"Smileys\". Velg mellom: \"Standard\" - den valgte emojien vises i standard undersøkelsesfarge; \"Skala\" - den valgte emojien arver farge fra vurderingsskalaen."
// expression.name: "An expression ID that is not visible to respondents." => "En uttrykks-ID som ikke er synlig for respondentene."
// expression.description: "Type an expression subtitle." => "Skriv inn en undertittel for uttrykk."
// expression.expression: "An expression can include basic calculations (`{q1_id} + {q2_id}`), conditions (`{age} > 60`), and functions ('iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, etc.)." => "Et uttrykk kan inneholde grunnleggende beregninger ('{q1_id} + {q2_id}'), betingelser ('{alder} > 60') og funksjoner ('iif()', 'today()', 'age()', 'min()', 'max()', 'avg()', etc.)."
// pehelp.storeOthersAsComment: "Select to store the \"Other\" option value as a separate property in survey results." => "Velg dette alternativet hvis du vil lagre alternativverdien «Annet» som en egen egenskap i undersøkelsesresultatene."
// p.swapOrder: "Swap the order of Yes and No" => "Bytte rekkefølgen på Ja og Nei"
// p.itemTitleWidth: "Item label width (in px)" => "Bredden på vareetiketten (i piksler)"
// p.selectToRankEmptyRankedAreaText: "Text to show if all options are selected" => "Tekst som skal vises hvis alle alternativene er valgt"
// p.selectToRankEmptyUnrankedAreaText: "Placeholder text for the ranking area" => "Plassholdertekst for rangeringsområdet"
// pe.autoAdvanceAllowComplete: "Complete the survey automatically" => "Fullfør undersøkelsen automatisk"
// pehelp.autoAdvanceAllowComplete: "Select if you want the survey to complete automatically after a respondent answers all questions." => "Velg om du vil at evalueringen skal fullføres automatisk etter at en svarperson har svart på alle spørsmålene."
// masksettings.saveMaskedValue: "Save masked value in survey results" => "Lagre maskert verdi i undersøkelsesresultater"
// patternmask.pattern: "Value pattern" => "Verdimønster"
// datetimemask.min: "Minimum value" => "Minimumsverdi"
// datetimemask.max: "Maximum value" => "Maksimumsverdi"
// numericmask.allowNegativeValues: "Allow negative values" => "Tillat negative verdier"
// numericmask.thousandsSeparator: "Thousands separator" => "Tusenskilletegn"
// numericmask.decimalSeparator: "Decimal separator" => "Desimalskilletegn"
// numericmask.precision: "Value precision" => "Prisgunstig presisjon"
// numericmask.min: "Minimum value" => "Minimumsverdi"
// numericmask.max: "Maximum value" => "Maksimumsverdi"
// currencymask.prefix: "Currency prefix" => "Prefiks for valuta"
// currencymask.suffix: "Currency suffix" => "Valutasuffiks"
// pe.maskType: "Input mask type" => "Type inndatamaske"
// maskTypes.patternmask: "Pattern" => "Mønster"
// maskTypes.numericmask: "Numeric" => "Numerisk"
// maskTypes.datetimemask: "Date and Time" => "Dato og klokkeslett"
// maskTypes.currencymask: "Currency" => "Valuta"
// tabs.mask: "Input Mask Settings" => "Innstillinger for inndatamaske"
// pe.pattern_placeholder: "Ex.: +1(999)-999-99-99" => "Eks.: +1(999)-999-99-99"
// pe.datetimepattern_placeholder: "Ex.: mm/dd/yyyy" => "Eks.: mm/dd/åååå"
// pe.currencyprefix_placeholder: "Ex.: $" => "Eks.: $"
// pe.currencysuffix_placeholder: "Ex.: USD" => "Eks.: USD"
// pv.textWrapEnabled: "Wrap choices" => "Valg for innpakning"
// question.textWrapEnabled: "Long texts in choice options will automatically generate line breaks to fit within the drop-down menu. Unselect if you want the texts to clip." => "Lange tekster i valgalternativer genererer automatisk linjeskift slik at de passer inn i rullegardinmenyen. Fjern merket hvis du vil at tekstene skal klippes ut."
// masksettings.saveMaskedValue: "Select if you want to store the question value with an applied mask in survey results." => "Velg om du vil lagre spørsmålsverdien med en brukt maske i evalueringsresultatene."
// patternmask.pattern: "The pattern can contain string literals and the following placeholders: `9` - for a digit; `a` - for an upper- or lower-case letter; `#` - for a digit or an upper- or lower-case letter. Use backslash `\\` to escape a character." => "Mønsteret kan inneholde strenglitteraler og følgende plassholdere: '9' - for et siffer; 'a' - for en stor eller liten bokstav; '#' - for et siffer eller en stor eller liten bokstav. Bruk omvendt skråstrek '\\' for å unnslippe et tegn."
// datetimemask.pattern: "The pattern can contain separator characters and the following placeholders: `m` - for month number; `mm` - for month number, with leading zero for single-digit values; `d` - for day of the month; `dd` - for day of the month, with leading zero for single-digit values; `yy` - for the last two digits of the year; `yyyy` - for a four-digit year." => "Mønsteret kan inneholde skilletegn og følgende plassholdere: 'm' - for månedsnummer; 'mm' - for månedsnummer, med ledende null for ensifrede verdier; 'd' - for dagen i måneden; 'dd' - for dagen i måneden, med ledende null for ensifrede verdier; 'yy' - for de to siste sifrene i året; 'åååå' - i et firesifret år."
// numericmask.decimalSeparator: "A symbol used to separate the fractional part from the integer part of a displayed number." => "Et symbol som brukes til å skille brøkdelen fra heltallsdelen av et tall som vises."
// numericmask.thousandsSeparator: "A symbol used to separate the digits of a large number into groups of three." => "Et symbol som brukes til å skille sifrene i et stort tall i grupper på tre."
// numericmask.precision: "Limits how many digits to retain after the decimal point for a displayed number." => "Begrenser hvor mange sifre som skal beholdes etter desimaltegnet for et tall som vises."
// currencymask.prefix: "One or several symbols to be displayed before the value." => "Ett eller flere symboler som skal vises før verdien."
// currencymask.suffix: "One or several symbols to be displayed after the value." => "Ett eller flere symboler som skal vises etter verdien."
// ed.translationSource: "Source: " => "Kilde: "
// ed.translationTarget: "Target: " => "Mål: "
// ed.pagePlaceHolder: "The page is empty. Drag an element from the toolbox or click the button below." => "Siden er tom. Dra et element fra verktøykassen, eller klikk på knappen nedenfor."
// maskTypes.none: "None" => "Ingen"
// itemvalue@rows.visibleIf: "Make the row visible if" => "Gjøre raden synlig hvis"
// itemvalue@rows.enableIf: "Make the row editable if" => "Gjøre raden redigerbar hvis"
// signaturepad.placeholderReadOnly: "Placeholder text in read-only or preview mode" => "Plassholdertekst i skrivebeskyttet modus eller forhåndsvisningsmodus"
// pe.textWrapEnabled: "Wrap choices" => "Valg for innpakning"
// image.contentMode: "The \"Auto\" option automatically determines the suitable mode for display - Image, Video, or YouTube - based on the source URL provided." => "Alternativet \"Auto\" bestemmer automatisk passende modus for visning - Bilde, Video eller YouTube - basert på kildens URL som er oppgitt."
// imagepicker.contentMode: "Choose between \"Image\" and \"Video\" to set the content mode of the media selector. If \"Image\" is selected, ensure that all options provided are image files in the following formats: JPEG, GIF, PNG, APNG, SVG, BMP, ICO. Similarly, if \"Video\" is selected, ensure that all options are direct links to video files in the following formats: MP4, MOV, WMV, FLV, AVI, MKV. Please note that YouTube links are not supported for video options." => "Velg mellom \"Image\" og \"Video\" for å stille inn innholdsmodusen til medievelgeren. Hvis \"Bilde\" er valgt, må du kontrollere at alle alternativene som er oppgitt, er bildefiler i følgende formater: JPEG, GIF, PNG, APNG, SVG, BMP, ICO. På samme måte, hvis \"Video\" er valgt, må du sørge for at alle alternativene er direkte koblinger til videofiler i følgende formater: MP4, MOV, WMV, FLV, AVI, MKV. Vær oppmerksom på at YouTube-koblinger ikke støttes for videoalternativer."
// ed.selectFile: "Select a file" => "Velg en fil"
// ed.removeFile: "Remove the file" => "Fjern filen"
// pe.searchMode: "Search Mode" => "Søkemodus"
// ed.surveyPlaceHolderMobile: "Click the \"Add Question\" button below to start creating your form." => "Klikk på \"Legg til spørsmål\" -knappen nedenfor for å begynne å lage skjemaet ditt."
// ed.pagePlaceHolderMobile: "Click the \"Add Question\" button below to add a new element to the page." => "Klikk på \"Legg til spørsmål\" -knappen nedenfor for å legge til et nytt element på siden."
// ed.panelPlaceHolderMobile: "Click the \"Add Question\" button below to add a new element to the panel." => "Klikk på \"Legg til spørsmål\" -knappen nedenfor for å legge til et nytt element i panelet."
// ed.imagePlaceHolderMobile: "Click the button below and choose an image to upload" => "Klikk på knappen nedenfor og velg et bilde du vil laste opp"
// coloralpha.opacity: "Opacity" => "Ugjennomsiktighet"
// font.family: "Font family" => "Skriftfamilie"
// font.color: "Color" => "Farge"
// font.placeholderColor: "Placeholder color" => "Plassholderfarge"
// font.size: "Size" => "Størrelse"
// theme.themeName: "Theme" => "Tema"
// theme.isPanelless: "Question appearance" => "Spørsmål utseende"
// theme.editorPanel: "Background and corner radius" => "Bakgrunn og hjørneradius"
// theme.questionPanel: "Background and corner radius" => "Bakgrunn og hjørneradius"
// theme.primaryColor: "Accent color" => "Uthevingsfarge"
// theme.panelBackgroundTransparency: "Panel background opacity" => "Tetthet i panelbakgrunn"
// theme.questionBackgroundTransparency: "Question background opacity" => "Spørsmål om bakgrunnstetthet"
// theme.fontSize: "Font size" => "Skriftstørrelse"
// theme.scale: "Scale" => "Skala"
// theme.cornerRadius: "Corner radius" => "Hjørne radius"
// theme.pageTitle: "Title font" => "Tittel skrift"
// theme.pageDescription: "Description font" => "Beskrivelse font"
// theme.questionTitle: "Title font" => "Tittel skrift"
// theme.questionDescription: "Description font" => "Beskrivelse font"
// theme.editorFont: "Font" => "Font"
// theme.backgroundOpacity: "Opacity" => "Ugjennomsiktighet"
// theme.--sjs-font-family: "Font family" => "Skriftfamilie"
// theme.--sjs-general-backcolor-dim: "Background color" => "Bakgrunnsfarge"
// theme.--sjs-primary-backcolor: "Accent background" => "Bakgrunn med aksent"
// theme.--sjs-primary-forecolor: "Accent foreground" => "Aksent i forgrunnen"
// theme.--sjs-shadow-small: "Shadow effects" => "Skygge effekter"
// theme.--sjs-shadow-inner: "Shadow effects" => "Skygge effekter"
// theme.--sjs-border-default: "Colors" => "Farger"
// header@header.headerView: "View" => "Utsikt"
// header@header.logoPosition: "Logo position" => "Logo posisjon"
// header@header.surveyTitle: "Survey title font" => "Skrift for undersøkelsestittel"
// header@header.surveyDescription: "Survey description font" => "Skrift for undersøkelsesbeskrivelse"
// header@header.headerTitle: "Survey title font" => "Skrift for undersøkelsestittel"
// header@header.headerDescription: "Survey description font" => "Skrift for undersøkelsesbeskrivelse"
// header@header.inheritWidthFrom: "Content area width" => "Bredde på innholdsområdet"
// header@header.textAreaWidth: "Text width" => "Tekstbredde"
// header@header.backgroundColorSwitch: "Background color" => "Bakgrunnsfarge"
// header@header.backgroundImage: "Background image" => "Bakgrunnsbilde"
// header@header.backgroundImageOpacity: "Opacity" => "Ugjennomsiktighet"
// header@header.overlapEnabled: "Overlap" => "Overlappe"
// header@header.logoPositionX: "Logo position" => "Logo posisjon"
// header@header.titlePositionX: "Title position" => "Tittelposisjon"
// header@header.descriptionPositionX: "Description position" => "Beskrivelse posisjon"
// weight.400: "Regular" => "Regelmessig"
// weight.600: "Heavy" => "Tung"
// weight.700: "Semi-bold" => "Halvmodig"
// weight.800: "Bold" => "Fet"
// backgroundImageFit.auto: "Auto" => "Auto"
// backgroundImageFit.cover: "Cover" => "Lokk"
// backgroundImageFit.contain: "Contain" => "Inneholde"
// backgroundImageFit.fill: "Stretch" => "Strekning"
// backgroundImageFit.tile: "Tile" => "Flis"
// backgroundImageAttachment.fixed: "Fixed" => "Fast"
// backgroundImageAttachment.scroll: "Scroll" => "Bla"
// headerView.basic: "Basic" => "Grunnleggende"
// headerView.advanced: "Advanced" => "Avansert"
// inheritWidthFrom.survey: "Same as survey" => "Samme som undersøkelse"
// inheritWidthFrom.container: "Fit to container" => "Tilpass til container"
// backgroundColorSwitch.none: "None" => "Ingen"
// backgroundColorSwitch.accentColor: "Accent color" => "Uthevingsfarge"
// backgroundColorSwitch.custom: "Custom" => "Skikk"
// colorPalette.light: "Light" => "Lys"
// colorPalette.dark: "Dark" => "Mørk"
// isPanelless.false: "Default" => "Standard"
// isPanelless.true: "Without Panels" => "Uten paneler"
// theme.cornerRadius: "Corner radius" => "Hjørne radius"
// theme.fontFamily: "Font family" => "Skriftfamilie"
// theme.fontWeightRegular: "Regular" => "Regelmessig"
// theme.fontWeightHeavy: "Heavy" => "Tung"
// theme.fontWeightSemiBold: "Semi-bold" => "Halvmodig"
// theme.fontWeightBold: "Bold" => "Fet"
// theme.color: "Color" => "Farge"
// theme.placeholderColor: "Placeholder color" => "Plassholderfarge"
// theme.size: "Size" => "Størrelse"
// theme.opacity: "Opacity" => "Ugjennomsiktighet"
// ed.toolboxFilteredTextPlaceholder: "Type to search..." => "Skriv for å søke ..."
// ed.toolboxNoResultsFound: "No results found" => "Fant ingen resultater"
// paneldynamic.tabTitlePlaceholder: "Tab title placeholder" => "Plassholder for tabulatortittel"
// theme.--sjs-special-red: "Error messages" => "Feilmeldinger"
// paneldynamic.tabTitlePlaceholder: "A fallback text for tab titles that applies when the tab title pattern doesn't produce a meaningful value." => "En basistekst for tabulatortitler som gjelder når mønsteret for tabulatortittel ikke gir meningsfull verdi."
// theme.fontColor: "Font color" => "Skriftfarge"
// theme.backgroundColor: "Background color" => "Bakgrunnsfarge"
// pe.questionTitleWidth: "Question title width" => "Bredde på spørsmålstittel"
// pe.fileInputPlaceholder: "Select a file or paste a file link..." => "Velg en fil eller lim inn en filkobling ..."
// panelbase.questionTitleWidth: "Ex.: 200px" => "Eks.: 200 piksler"
// panel.questionTitleWidth: "Sets consistent width for question titles when they are aligned to the left of their question boxes. Accepts CSS values (px, %, in, pt, etc.)." => "Angir konsekvent bredde for spørsmålstitler når de er justert til venstre for spørsmålsboksene. Godtar CSS-verdier (px, %, i, pt osv.)."
// page.questionTitleWidth: "Sets consistent width for question titles when they are aligned to the left of their question boxes. Accepts CSS values (px, %, in, pt, etc.)." => "Angir konsekvent bredde for spørsmålstitler når de er justert til venstre for spørsmålsboksene. Godtar CSS-verdier (px, %, i, pt osv.)."
// pe.commentAreaRows: "Comment area height (in lines)" => "Høyde i kommentarområdet (i linjer)"
// pehelp.commentAreaRows: "Sets the number of displayed lines in text areas for question comments. In the input takes up more lines, the scroll bar appears." => "Angir antall viste linjer i tekstområder for spørsmålskommentarer. I inngangen tar opp flere linjer, vises rullefeltet."
// pe.enabled: "Enabled" => "Aktivert"
// pe.disabled: "Disabled" => "Ufør"
// pe.inherit: "Inherit" => "Arve"
// pe.validateVisitedEmptyFields: "Validate empty fields on lost focus" => "Validere tomme felt ved tapt fokus"
// panellayoutcolumn.effectiveWidth: "Ex.: 30%" => "Eks.: 30%"
// panellayoutcolumn.questionTitleWidth: "Ex.: 200px" => "Eks.: 200px"
// pehelp.validateVisitedEmptyFields: "Enable this option to trigger validation when a user focuses on an empty input field and then leaves it without making any changes." => "Aktiver dette alternativet for å utløse validering når en bruker fokuserer på et tomt inndatafelt og deretter forlater det uten å gjøre noen endringer."
// pehelp.colCount: "Arranges choice options in a multi-column layout. When set to 0, the options are displayed in a single line." => "Ordner valgalternativer i et oppsett med flere kolonner. Når den er satt til 0, vises alternativene på én enkelt linje."
// theme.isPanelless: "This setting applies only to questions outside of a panel." => "Denne innstillingen gjelder bare for spørsmål utenfor et panel."
// theme.primaryColor: "Sets a supplementary color that highlights key survey elements." => "Angir en tilleggsfarge som uthever viktige undersøkelseselementer."
// theme.panelBackgroundTransparency: "Adjusts the transparency of panels and question boxes relative to the survey background." => "Justerer gjennomsiktigheten til paneler og spørsmålsbokser i forhold til evalueringsbakgrunnen."
// theme.questionBackgroundTransparency: "Adjusts the transparency of input elements relative to the survey background." => "Justerer gjennomsiktigheten til inndataelementer i forhold til evalueringsbakgrunnen."
// theme.cornerRadius: "Sets the corner radius for all rectangular elements. Enable the Advanced Mode if you want to set individual corner radius values for input elements or panels and question boxes." => "Angir hjørneradiusen for alle rektangulære elementer. Aktiver avansert modus hvis du vil angi individuelle hjørneradiusverdier for inndataelementer eller paneler og spørsmålsbokser."
// theme.--sjs-general-backcolor-dim: "Sets the main background color of the survey." => "Angir hovedbakgrunnsfargen for undersøkelsen."
// header.inheritWidthFrom: "The \"Same as container\" option auto-adjusts the header content area width to fit into the HTML element the survey is placed in." => "Alternativet \"Samme som beholder\" justerer automatisk bredden på overskriftsinnholdsområdet slik at det passer inn i HTML-elementet undersøkelsen er plassert i."
// header.textAreaWidth: "The width of the header area that contains the survey title and description, measured in pixels." => "Bredden på overskriftsområdet som inneholder evalueringstittelen og beskrivelsen, målt i piksler."
// panellayoutcolumn.effectiveWidth: "Accepts values %." => "Godtar verdier %."
// panellayoutcolumn.questionTitleWidth: "Accepts values px." => "Godtar verdier px."
// p.effectiveColSpan: "Column span" => "Spaltespenn"
// progressBarInheritWidthFrom.survey: "Same as survey" => "Samme som undersøkelse"
// progressBarInheritWidthFrom.container: "Same as container" => "Samme som container"
// file.allowImagesPreview: "Displays thumbnail previews for uploaded files when possible. Unselect if you want to show file icons instead." => "Viser miniatyrforhåndsvisninger for opplastede filer når det er mulig. Fjern merket hvis du vil vise filikoner i stedet."
// pehelp.progressBarInheritWidthFrom: "The \"Same as container\" option auto-adjusts the progress bar area width to fit into the HTML element the survey is placed in." => "Alternativet \"Samme som beholder\" justerer automatisk fremdriftslinjens områdebredde slik at den passer inn i HTML-elementet undersøkelsen er plassert i."
// p.progressBarInheritWidthFrom: "Progress bar area width" => "Bredde på fremdriftslinjeområde"
// maskType.none: "None" => "Ingen"
// maskType.pattern: "Pattern" => "Mønster"
// maskType.numeric: "Numeric" => "Numerisk"
// maskType.datetime: "Date and Time" => "Dato og klokkeslett"
// maskType.currency: "Currency" => "Valuta"

// inputTextAlignment.auto: "Auto" => "Auto"
// inputTextAlignment.left: "Left" => "Venstre"
// inputTextAlignment.right: "Right" => "Høyre"
// pehelp.inputTextAlignment: "Select how to align input value within the field. The default setting \"Auto\" aligns the input value to the right if currency or numeric masking is applied and to the left if not." => "Velg hvordan du vil justere inndataverdien i feltet. Standardinnstillingen \"Auto\" justerer inngangsverdien til høyre hvis valuta eller numerisk maskering brukes, og til venstre hvis ikke."
// p.inputTextAlignment: "Input value alignment" => "Justering av inngangsverdi"
// paneldynamic.showRangeInProgress: "Show the progress bar" => "Vis fremdriftslinjen"
// paneldynamic.showProgressBar: "Show the progress bar" => "Vis fremdriftslinjen"
// paneldynamic.progressBarLocation: "Progress bar alignment" => "Justering av fremdriftslinje"
// pv.carousel: "Carousel" => "Karusell"
// progressBarLocation.top: "Top" => "Topp"
// progressBarLocation.bottom: "Bottom" => "Bunn"
// progressBarLocation.topBottom: "Top and bottom" => "Topp og bunn"
// matrixdropdowncolumn.colCount: "Arranges choice options in a multi-column layout. When set to 0, the options are displayed in a single line. When set to -1, the actual value is inherited from the \"Nested column count\" property of the parent matrix." => "Ordner valgalternativer i et oppsett med flere kolonner. Når den er satt til 0, vises alternativene på én enkelt linje. Når satt til -1, arves den faktiske verdien fra egenskapen \"Nestet kolonneantall\" for den overordnede matrisen."
// ed.translationYouTubeNotSupported: "YouTube links are not supported." => "YouTube-linker støttes ikke."
// ed.propertyGridPlaceholderTitle: "Start configuring your form" => "Begynn å konfigurere skjemaet"
// ed.propertyGridPlaceholderDescription: "Click any category icon to explore survey settings. Additional settings will become available once you add a survey element to the design surface." => "Klikk på et kategoriikon for å utforske undersøkelsesinnstillingene. Flere innstillinger blir tilgjengelige når du legger til et undersøkelseselement på designoverflaten."
// pe.caseInsensitive: "Case insensitive" => "Skiller ikke mellom store og små bokstaver"
// pehelp.caseInsensitive: "Select if uppercase and lowercase letters in the regular expression must be treated as equivalent." => "Velg om store og små bokstaver i det regulære uttrykket må behandles som likeverdige."

// ed.surveyPlaceholderTitle: "Your form is empty" => "Skjemaet ditt er tomt"
// ed.surveyPlaceholderTitleMobile: "Your form is empty" => "Skjemaet ditt er tomt"
// ed.surveyPlaceholderDescription: "Drag an element from the toolbox or click the button below." => "Dra et element fra verktøykassen eller klikk på knappen nedenfor."
// ed.surveyPlaceholderDescriptionMobile: "Drag an element from the toolbox or click the button below." => "Dra et element fra verktøykassen eller klikk på knappen nedenfor."
// ed.previewPlaceholderTitle: "No preview" => "Ingen forhåndsvisning"
// ed.previewPlaceholderTitleMobile: "No preview" => "Ingen forhåndsvisning"
// ed.previewPlaceholderDescription: "The survey doesn't contain any visible elements." => "Undersøkelsen inneholder ingen synlige elementer."
// ed.previewPlaceholderDescriptionMobile: "The survey doesn't contain any visible elements." => "Undersøkelsen inneholder ingen synlige elementer."
// ed.translationsPlaceholderTitle: "No strings to translate" => "Ingen strenger å oversette"
// ed.translationsPlaceholderTitleMobile: "No strings to translate" => "Ingen strenger å oversette"
// ed.translationsPlaceholderDescription: "Add elements to your form or change the strings filter in the toolbar." => "Legg til elementer i skjemaet, eller endre strengfilteret på verktøylinjen."
// ed.translationsPlaceholderDescriptionMobile: "Add elements to your form or change the strings filter in the toolbar." => "Legg til elementer i skjemaet, eller endre strengfilteret på verktøylinjen."
// lg.logicPlaceholderTitle: "No logical rules" => "Ingen logiske regler"
// lg.logicPlaceholderTitleMobile: "No logical rules" => "Ingen logiske regler"
// lg.logicPlaceholderDescription: "Create a rule to customize the flow of the survey." => "Opprett en regel for å tilpasse flyten i evalueringen."
// lg.logicPlaceholderDescriptionMobile: "Create a rule to customize the flow of the survey." => "Opprett en regel for å tilpasse flyten i evalueringen."
// pe.showTimer: "Use a timer" => "Bruk en tidtaker"
// theme.advancedMode: "Advanced mode" => "Avansert modus"
// pehelp.timerLocation: "Sets the location of a timer on a page." => "Angir plasseringen av en tidtaker på en side."
// header.mobileHeight: "When set to 0, the height is calculated automatically to accommodate the header's content." => "Når den er satt til 0, beregnes høyden automatisk for å få plass til overskriftens innhold."
// p.mobileHeight: "Height on smartphones" => "Høyde på smarttelefoner"
// header.overlapEnabled: "When enabled, the top of the survey overlays the bottom of the header." => "Når den er aktivert, overlapper toppen av evalueringen bunnen av overskriften."
// ed.creatorSettingTitle: "Creator Settings" => "Innstillinger for skapere"
// tabs.accentColors: "Accent colors" => "Aksentfarger"
// tabs.scaling: "Scaling" => "Skalering"
// panel.showQuestionNumbers: "Assigns numbers to questions nested within this panel." => "Tildeler numre til spørsmål som er nestet i dette panelet."
// creatortheme.--sjs-special-background: "Surface background" => "Overflate bakgrunn"
// creatortheme.--sjs-primary-background-500: "Primary" => "Primær"
// creatortheme.--sjs-secondary-background-500: "Secondary" => "Sekundær"
// creatortheme.surfaceScale: "Surface" => "Flate"
// creatortheme.userInterfaceBaseUnit: "User interface" => "Brukergrensesnitt"
// creatortheme.fontScale: "Font" => "Font"
// names.sc2020: "Survey Creator 2020" => "Skaperen av spørreundersøkelsen 2020"
// names.default-light: "Light" => "Lys"
// names.default-dark: "Dark" => "Mørk"
// names.default-contrast: "Contrast" => "Kontrast"
// panel.showNumber: "Number this panel" => "Nummerer dette panelet"
// pehelp.autoAdvanceEnabled: "Select if you want the survey to auto-advance to the next page once a respondent has answered all questions on the current page. This feature won't apply if the last question on the page is open-ended or allows multiple answers." => "Velg om du vil at evalueringen automatisk skal gå videre til neste side når en respondent har svart på alle spørsmålene på gjeldende side. Denne funksjonen gjelder ikke hvis det siste spørsmålet på siden er åpent eller tillater flere svar."
// autocomplete.name: "Full Name" => "Fullt navn"
// autocomplete.honorific-prefix: "Prefix" => "Prefiks"
// autocomplete.given-name: "First Name" => "Fornavn"
// autocomplete.additional-name: "Middle Name" => "Mellomnavn"
// autocomplete.family-name: "Last Name" => "Etternavn"
// autocomplete.honorific-suffix: "Suffix" => "Endelse"
// autocomplete.nickname: "Nickname" => "Kallenavn"
// autocomplete.organization-title: "Job Title" => "Stillingstittel"
// autocomplete.username: "User Name" => "Brukernavn"
// autocomplete.new-password: "New Password" => "Nytt passord"
// autocomplete.current-password: "Current Password" => "Nåværende passord"
// autocomplete.organization: "Organization Name" => "Organisasjonens navn"
// autocomplete.street-address: "Full Street Address" => "Full gateadresse"
// autocomplete.address-line1: "Address Line 1" => "Adresselinje 1"
// autocomplete.address-line2: "Address Line 2" => "Adresselinje 2"
// autocomplete.address-line3: "Address Line 3" => "Adresselinje 3"
// autocomplete.address-level4: "Level 4 Address" => "Adresse på nivå 4"
// autocomplete.address-level3: "Level 3 Address" => "Nivå 3-adresse"
// autocomplete.address-level2: "Level 2 Address" => "Nivå 2-adresse"
// autocomplete.address-level1: "Level 1 Address" => "Adresse på nivå 1"
// autocomplete.country: "Country Code" => "Landkode"
// autocomplete.country-name: "Country Name" => "Navn på land"
// autocomplete.postal-code: "Postal Code" => "Postnummer"
// autocomplete.cc-name: "Cardholder Name" => "Kortinnehaverens navn"
// autocomplete.cc-given-name: "Cardholder First Name" => "Kortinnehaverens fornavn"
// autocomplete.cc-additional-name: "Cardholder Middle Name" => "Kortinnehaverens mellomnavn"
// autocomplete.cc-family-name: "Cardholder Last Name" => "Kortinnehaverens etternavn"
// autocomplete.cc-number: "Credit Card Number" => "Kredittkortnummer"
// autocomplete.cc-exp: "Expiration Date" => "Utløpsdato"
// autocomplete.cc-exp-month: "Expiration Month" => "Utløpsmåned"
// autocomplete.cc-exp-year: "Expiration Year" => "Utløpsår"
// autocomplete.cc-csc: "Card Security Code" => "Sikkerhetskode for kort"
// autocomplete.cc-type: "Credit Card Type" => "Type kredittkort"
// autocomplete.transaction-currency: "Transaction Currency" => "Transaksjonens valuta"
// autocomplete.transaction-amount: "Transaction Amount" => "Transaksjonsbeløp"
// autocomplete.language: "Preferred Language" => "Foretrukket språk"
// autocomplete.bday: "Birthday" => "Fødselsdag"
// autocomplete.bday-day: "Birthday Day" => "Bursdag"
// autocomplete.bday-month: "Birthday Month" => "Bursdag måned"
// autocomplete.bday-year: "Birthday Year" => "Bursdag år"
// autocomplete.sex: "Gender" => "Kjønn"
// autocomplete.url: "Website URL" => "URL-adresse til nettsted"
// autocomplete.photo: "Profile Photo" => "Profilbilde"
// autocomplete.tel: "Telephone Number" => "Telefonnummer"
// autocomplete.tel-country-code: "Country Code for Phone" => "Landskode for telefon"
// autocomplete.tel-national: "National Telephone Number" => "Nasjonalt telefonnummer"
// autocomplete.tel-area-code: "Area Code" => "Retningsnummer"
// autocomplete.tel-local: "Local Phone Number" => "Lokalt telefonnummer"
// autocomplete.tel-local-prefix: "Local Phone Prefix" => "Lokalt telefonprefiks"
// autocomplete.tel-local-suffix: "Local Phone Suffix" => "Lokalt telefonsuffiks"
// autocomplete.tel-extension: "Phone Extension" => "Utvidelse av telefon"
// autocomplete.email: "Email Address" => "E-postadresse"
// autocomplete.impp: "Instant Messaging Protocol" => "Protokoll for direktemeldinger"
// ed.lockQuestionsTooltip: "Lock expand/collapse state for questions" => "Lås utvidelses-/skjuletilstand for spørsmål"
// pe.listIsEmpty@pages: "You don't have any pages yet" => "Du har ingen sider ennå"
// pe.addNew@pages: "Add new page" => "Legg til ny side"
// ed.zoomInTooltip: "Zoom In" => "Zoom inn"
// ed.zoomOutTooltip: "Zoom Out" => "Zoom ut"
// tabs.surfaceBackground: "Surface Background" => "Overflate bakgrunn"
// pe.copyDefaultValueFromLastEntry: "Use answers from the last entry as default" => "Bruk svar fra siste oppføring som standard"
// colors.gray: "Gray" => "Grå"
// pe.navigationButtonsLocation: "Navigation buttons alignment" => "Justering av navigasjonsknapper"
// pv.allQuestions: "Show all questions" => "Vis alle spørsmål"
// pv.answeredQuestions: "Show answered questions only" => "Vis kun besvarte spørsmål"
// pehelp.navigationButtonsLocation: "Sets the location of navigation buttons on a page." => "Angir plasseringen av navigasjonsknapper på en side."
// pe.choiceValuesFromQuestion: "Use values from the following matrix column or panel question as choice IDs" => "Bruk verdier fra følgende matrisekolonne eller panelspørsmål som valg-ID-er"
// pe.choiceTextsFromQuestion: "Use values from the following matrix column or panel question as choice texts" => "Bruk verdier fra følgende matrisekolonne eller paneloppgave som valgtekster"
// pehelp.choiceValuesFromQuestion: "In single- and multiple-selection question types, each choice option has an ID and display value. This setting specifies which matrix column or panel question should provide the IDs." => "I spørsmålstyper med ett eller flere valg har hvert valgalternativ en ID og visningsverdi. Denne innstillingen angir hvilken matrisekolonne eller hvilket panelspørsmål som skal gi ID-ene."
// pehelp.choiceTextsFromQuestion: "In single- and multiple-selection question types, each choice option has an ID and display value. This setting specifies which matrix column or panel question should provide the display texts." => "I spørsmålstyper med ett eller flere valg har hvert valgalternativ en ID og visningsverdi. Denne innstillingen angir hvilken matrisekolonne eller hvilket panelspørsmål som skal inneholde visningstekstene."
// pe.progressBarLocation: "Progress bar alignment" => "Justering av fremdriftslinje"
// progressBarLocation.topbottom: "Top and bottom" => "Topp og bunn"
// progressBarLocation.aboveheader: "Above the header" => "Over overskriften"
// progressBarLocation.belowheader: "Below the header" => "Under overskriften"
// progressBarLocation.off: "Hidden" => "Skjult"
// survey.progressBarLocation: "Sets the location of the progress bar. The \"Auto\" value displays the progress bar above or below the survey header." => "Angir plasseringen av fremdriftslinjen. \"Auto\"-verdien viser fremdriftslinjen over eller under undersøkelsesoverskriften."
// survey.readOnly: "Make the survey read-only" => "Gjør undersøkelsen skrivebeskyttet"
// survey.readOnly: "Select if you want to prevent respondents from filling out your survey." => "Velg hvis du vil hindre respondenter i å fylle ut undersøkelsen."
// paneldynamic.showNumber: "Number the panel" => "Nummerer panelet"
// question.showNumber: "Number this question" => "Nummerering av dette spørsmålet"
// pe.previewMode: "Preview mode" => "Forhåndsvisning-modus"
// pe.gridLayoutEnabled: "Enable the grid layout" => "Aktivere rutenettoppsettet"
// pe.maskSettings: "Mask settings" => "Innstillinger for maske"
// pe.detailErrorLocation: "Row expansion error message alignment" => "Justering av feilmelding for radutvidelse"
// pehelp.detailErrorLocation: "Sets the location of error messages for questions nested in detail sections. The \"Inherit\" option applies the setting from the \"Error message alignment\" property." => "Angir plasseringen av feilmeldinger for spørsmål som er nestet i detaljdeler. Alternativet \"Arv\" bruker innstillingen fra egenskapen \"Feilmeldingsjustering\"."
// pe.gridLayoutColumns: "Grid layout columns" => "Kolonner for rutenettoppsett"
// pe.startPageTitlePlaceholder: "Start Page" => "Startside"
// panellayoutcolumn.effectiveWidth: "Effective width, %" => "Effektiv bredde, %"
// panellayoutcolumn.questionTitleWidth: "Question title width, px" => "Oppgavetittel bredde, px"
// pe.listIsEmpty@gridLayoutColumns: "You don't have layout columns yet" => "Du har ikke oppsettkolonner ennå"
// panel.effectiveColSpan: "Specifies how many columns this panel spans within the grid layout." => "Angir hvor mange kolonner dette panelet strekker seg over i rutenettoppsettet."
// panel.gridLayoutColumns: "This table lets you configure each grid column within the panel. It automatically sets the width percentage for each column based on the maximum number of elements in a row. To customize the grid layout, manually adjust these values and define the title width for all questions in each column." => "I denne tabellen kan du konfigurere hver rutenettkolonne i panelet. Den angir automatisk breddeprosenten for hver kolonne basert på maksimalt antall elementer på rad. For å tilpasse rutenettoppsettet, juster disse verdiene manuelt og definer tittelbredden for alle spørsmålene i hver kolonne."
// pehelp.gridLayoutEnabled: "Survey Creator allows you to manually adjust the inline widths of form elements to control the layout. If this doesn't produce the desired outcome, you can enable the grid layout, which structures form elements using a column-based system. To configure layout columns, select a page or panel and use the \"Question Settings\" → \"Grid columns\" table. To adjust how many columns a question spans, select it and set the desired value in the \"Layout\" → \"Column span\" field." => "Med Survey Creator kan du manuelt justere de innebygde breddene på skjemaelementer for å kontrollere oppsettet. Hvis dette ikke gir ønsket resultat, kan du aktivere rutenettoppsettet, som strukturerer skjemaelementer ved hjelp av et kolonnebasert system. For å konfigurere layoutkolonner, velg en side eller et panel og bruk tabellen \"Spørsmålsinnstillinger\" → \"Rutenettkolonner\". For å justere hvor mange kolonner et spørsmål strekker seg over, velg det og angi ønsket verdi i feltet \"Oppsett\" → \"Kolonnespenn\"."
// question.effectiveColSpan: "Specifies how many columns this question spans within the grid layout." => "Angir hvor mange kolonner dette spørsmålet strekker seg over i rutenettoppsettet."
// page.gridLayoutColumns: "This table lets you configure each grid column on the page. It automatically sets the width percentage for each column based on the maximum number of elements in a row. To customize the grid layout, manually adjust these values and define the title width for all questions in each column." => "I denne tabellen kan du konfigurere hver rutenettkolonne på siden. Den angir automatisk breddeprosenten for hver kolonne basert på maksimalt antall elementer på rad. For å tilpasse rutenettoppsettet, juster disse verdiene manuelt og definer tittelbredden for alle spørsmålene i hver kolonne."

// ed.expandTooltip: "Expand" => "Utvide"
// ed.collapseTooltip: "Collapse" => "Sammenbrudd"
// pe.itemTitleWidth_placeholder: "Ex.: 100px" => "Eks.: 100px"
// pehelp.itemTitleWidth: "Sets consistent width for all item labels. Accepts CSS values (px, %, in, pt, etc.)." => "Angir konsekvent bredde for alle vareetiketter. Godtar CSS-verdier (px, %, in, pt, etc.)."
// ed.zoom100Tooltip: "Zoom to 100%" => "Zoom til 100 %"
// ed.addLanguageTooltip: "Add Language" => "Legg til språk"
// pehelp.commentAreaRows: "Sets the number of displayed lines in text areas for question comments. If the input takes up more lines, the scroll bar appears." => "Angir antall linjer som vises i tekstområder for spørsmålskommentarer. Hvis inndataene tar opp flere linjer, vises rullefeltet."
// pe.defaultDisplayValue: "Default display value for dynamic texts" => "Standard visningsverdi for dynamiske tekster"
// pehelp.defaultDisplayValue: "A value displayed in HTML questions and in the dynamic titles and descriptions of survey elements when the question value is empty." => "En verdi som vises i HTML-spørsmål og i de dynamiske titlene og beskrivelsene av undersøkelseselementer når spørsmålsverdien er tom."
// showQuestionNumbers.recursive: "Recursive numbering" => "Rekursiv nummerering"
// paneldynamic.templateQuestionTitleWidth: "Question title width" => "Bredde på oppgavetittel"
// pe.allowCustomChoices: "Allow custom choices" => "Tillat egendefinerte valg"
// paneldynamic.templateQuestionTitleWidth: "Sets consistent width for question titles when they are aligned to the left of their question boxes. Accepts CSS values (px, %, in, pt, etc.)." => "Angir konsekvent bredde for spørsmålstitler når de er justert til venstre for spørsmålsboksene. Godtar CSS-verdier (px, %, in, pt, etc.)."
// page.name: "A page ID that is not visible to respondents." => "En side-ID som ikke er synlig for respondentene."
// page.description: "Type a page subtitle." => "Skriv inn en sideundertittel."
// page.navigationTitle: "A caption displayed on a navigation button in the progress bar or table of contents (TOC). If you leave this field empty, the navigation button will use the page title or page name. To enable the progress bar or TOC, go to \"Survey\" → \"Navigation\"." => "En bildetekst som vises på en navigasjonsknapp i fremdriftslinjen eller innholdsfortegnelsen. Hvis du lar dette feltet stå tomt, vil navigasjonsknappen bruke sidetittelen eller sidenavnet. For å aktivere fremdriftslinjen eller innholdsfortegnelsen, gå til \"Survey\" → \"Navigation\"."
// pehelp.allowCustomChoices: "Select to let respondents add their own choices if the desired option isn't available in the dropdown. Custom choices will only be stored temporarily for the duration of the current browser session." => "Velg dette alternativet for å la respondentene legge til sine egne valg hvis det ønskede alternativet ikke er tilgjengelig i rullegardinlisten. Egendefinerte valg lagres bare midlertidig så lenge den gjeldende nettleserøkten varer."