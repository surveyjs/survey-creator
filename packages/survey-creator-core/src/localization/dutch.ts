import { editorLocalization, defaultStrings } from "survey-creator-core";

export var nlStrings = {
  // survey templates
  survey: {
    edit: "Bewerk",
    externalHelpLink: "Bekijk en leer hoe u enquêtes maakt",
    externalHelpLinkUrl: "https://www.youtube.com/channel/UCH2ru9okIcooNZfpIbyq4qQ?view_as=subscriber",
    dropQuestion: "Stel hier een vraag vanuit de Toolbox.",
    addLogicItem: "Maak een regel om de stroom van de enquête aan te passen.",
    copy: "Kopiëren",
    duplicate: "Duplicaat",
    addToToolbox: "Toevoegen aan toolbox",
    deletePanel: "Paneel verwijderen",
    deleteQuestion: "Vraag verwijderen",
    convertTo: "Omzetten naar",
    drag: "Sleep element",
  },
  // Question types
  qt: {
    default: "Standaard",
    checkbox: "Selectievakje",
    comment: "Commentaar",
    imagepicker: "Afbeelingsvraag",
    ranking: "Ranking",
    image: "Afbeelding",
    dropdown: "Keuzelijst",
    tagbox: "Vervolgkeuzemenu voor meerdere selecties",
    file: "Bestandsupload",
    html: "Html",
    matrix: "Matrix (enkele keuze)",
    matrixdropdown: "Matrix (meerkeuze)",
    matrixdynamic: "Matrix (dynamische rijen)",
    multipletext: "Meervoudige tekstvak",
    panel: "Paneel",
    paneldynamic: "Paneel (dynamische panelen)",
    radiogroup: "Meerkeuzevraag",
    rating: "Beoordeling",
    text: "Tekstvak",
    boolean: "Yes/No (Boolean)",
    expression: "Berekening",
    signaturepad: "Handtekening",
    buttongroup: "Knoppengroep"
  },
  // Strings in SurveyJS Creator
  ed: {
    defaultLocale: "Standaard ({0})",
    survey: "Enquête",
    settings: "Enquête-instellingen",
    settingsTooltip: "Open enquête-instellingen",
    surveySettings: "Enquête-instellingen",
    surveySettingsTooltip: "Enquête-instellingen openen",
    showPanel: "Toon paneel",
    hidePanel: "Verberg paneel",
    prevSelected: "Selecteer vorige",
    nextSelected: "Selecteer volgende",
    surveyTypeName: "Enquête",
    pageTypeName: "Bladzijde",
    panelTypeName: "Paneel",
    questionTypeName: "Vraag",
    columnTypeName: "Kolom",
    addNewPage: "Pagina toevoegen",
    moveRight: "Scroll naar rechts",
    moveLeft: "Scroll naar links",
    deletePage: "Pagina verwijderen",
    editPage: "Pagina aanpassen",
    edit: "Bewerk",
    newPageName: "Pagina",
    newQuestionName: "Vraag",
    newPanelName: "Paneel",
    newTextItemName: "Tekst",
    testSurvey: "Test de enquête",
    themeSurvey: "Thema 's",
    defaultV2Theme: "Verstek",
    modernTheme: "Modern",
    defaultTheme: "Standaard (verouderd)",
    testSurveyAgain: "Test de enquête opnieuw",
    testSurveyWidth: "Onderzoeksbreedte: ",
    navigateToMsg: "Je moest navigeren naar:",
    logic: "Onderzoekslogica",
    embedSurvey: "Enquête insluiten",
    translation: "Vertaling",
    saveSurvey: "Enquête opslaan",
    saveSurveyTooltip: "Enquête opslaan",
    designer: "Enquête-ontwerper",
    jsonEditor: "JSON-editor",
    jsonHideErrors: "Fouten verbergen",
    jsonShowErrors: "Toon fouten",
    undo: "Ongedaan maken",
    redo: "Opnieuw uitvoeren",
    undoTooltip: "Maak de laatste wijziging ongedaan",
    redoTooltip: "Voer de wijziging opnieuw uit",
    showMoreChoices: "Toon meer",
    showLessChoices: "Toon minder",
    copy: "Kopiëren",
    cut: "Besnoeiing",
    paste: "Plakken",
    copyTooltip: "Kopieer selectie naar klembord",
    cutTooltip: "Knip de selectie naar het klembord",
    pasteTooltip: "Plakken vanaf klembord",
    options: "Opties",
    generateValidJSON: "Genereer geldige JSON",
    generateReadableJSON: "Genereer leesbare JSON",
    toolbox: "Gereedschap",
    "property-grid": "Eigenschappen",
    propertyGridFilteredTextPlaceholder: "Typ om te zoeken...",
    toolboxGeneralCategory: "Algemeen",
    toolboxChoiceCategory: "Keuzevragen",
    toolboxTextCategory: "Vragen over tekstinvoer",
    toolboxContainersCategory: "Containers",
    toolboxMatrixCategory: "Matrix vragen",
    toolboxMiscCategory: "MISC",
    correctJSON: "Corrigeer JSON.",
    surveyResults: "Enquêteresultaat: ",
    surveyResultsTable: "Als tafel",
    surveyResultsJson: "Als JSON",
    resultsTitle: "Vraag titel",
    resultsName: "Vraag naam",
    resultsValue: "Antwoordwaarde",
    resultsDisplayValue: "Waarde weergeven",
    modified: "Gewijzigd",
    saving: "Besparing",
    saved: "Opgeslagen",
    propertyEditorError: "Fout:",
    saveError: "Fout! De inhoud van de editor wordt niet opgeslagen.",
    translationPropertyGridTitle: "Taalinstellingen",
    themePropertyGridTitle: "Thema-instellingen",
    translationLanguages: "Talen",
    translationDeleteLanguage: "Weet u zeker dat u alle tekenreeksen voor deze taal wilt verwijderen?",
    translationAddLanguage: "Selecteer de taal om te vertalen",
    translationShowAllStrings: "Toon alle snaren",
    translationShowUsedStringsOnly: "Alleen gebruikte tekenreeksen",
    translationShowAllPages: "Toon alle paginas",
    translationNoStrings: "Geen verplichtingen om te vertalen. Vervang alstublieft het filter.",
    translationExportToSCVButton: "Exporteren naar CSV",
    translationImportFromSCVButton: "Importeren vanuit CSV",
    translationMergeLocaleWithDefault: "Voeg {0} samen met de standaardlandinstelling",
    translationPlaceHolder: "Vertaling...",
    themeExportButton: "Exporteren",
    themeImportButton: "Importeren",
    themeResetButton: "Thema-instellingen terugzetten op de standaardinstellingen",
    bold: "Vetgedrukt",
    italic: "Cursief",
    underline: "Onderstrepen",
    addNewQuestion: "Vraag toevoegen",
    selectPage: "Selecteer pagina...",
    carryForwardChoicesCopied: "Keuzes worden gekopieerd van",
    htmlPlaceHolder: "HTML-inhoud zal hier zijn.",
    panelPlaceHolder: "Drop hier een vraag uit de toolbox.",
    surveyPlaceHolder: "De enquête is leeg. Sleep een element uit de gereedschapskist of klik op de onderstaande knop.",
    imagePlaceHolder: "Sleep een afbeelding hierheen of klik op de onderstaande knop en kies een afbeelding om te uploaden",
    imageChooseImage: "Kies afbeelding",
    addNewTypeQuestion: "Voeg {0} toe", //{0} is localizable question type
    chooseLogoPlaceholder: "[LOGO]",
    auto: "Auto",
    choices_Item: "Item ",
    lg: {
      addNewItem: "Nieuwe regel toevoegen",
      empty_tab: "Maak een regel om de stroom van de enquête aan te passen.",
      page_visibilityName: "Pagina zichtbaarheid",
      page_enableName: "Pagina inschakelen (uitschakelen)",
      panel_visibilityName: "Paneel zichtbaarheid",
      panel_enableName: "Paneel inschakelen/uitschakelen",
      question_visibilityName: "Vraag zichtbaarheid",
      question_enableName: "Vraag inschakelen/uitschakelen",
      question_requireName: "Vraag optioneel vereist",
      column_visibilityName: "Kolom weergeven (verbergen)",
      column_enableName: "Kolom Inschakelen (uitschakelen)",
      column_requireName: "Kolom verplicht maken",
      trigger_completeName: "Volledige enquête",
      trigger_setvalueName: "Stel vraagwaarde in",
      trigger_copyvalueName: "Kopieer de vraagwaarde",
      trigger_skipName: "Ga naar de vraag",
      trigger_runExpressionName: "Voer een aangepaste expressie uit",
      completedHtmlOnConditionName: "Aangepaste 'Bedanktpagina'-tekst",
      page_visibilityDescription: "Maak de pagina zichtbaar wanneer de logische uitdrukking true retourneert. Houd het anders onzichtbaar.",
      panel_visibilityDescription: "Maak het paneel zichtbaar wanneer de logische uitdrukking true retourneert. Houd het anders onzichtbaar.",
      panel_enableDescription: "Zorg ervoor dat het paneel en alle elementen erin worden ingeschakeld wanneer de logische uitdrukking true retourneert. Houd ze anders uitgeschakeld.",
      question_visibilityDescription: "Maak de vraag zichtbaar wanneer de logische uitdrukking true retourneert. Houd het anders onzichtbaar.",
      question_enableDescription: "Schakel de vraag in wanneer de logische uitdrukking true retourneert. Houd het anders uitgeschakeld.",
      question_requireDescription: "Vraag wordt vereist wanneer de logische uitdrukking true retourneert.",
      trigger_completeDescription: "Wanneer de logische uitdrukking true retourneert, wordt de enquête voltooid en ziet een eindgebruiker de 'Bedankpagina'.",
      trigger_setvalueDescription: "Wanneer vraagwaarden, die worden gebruikt in de logische uitdrukking, worden gewijzigd en de logische uitdrukking true retourneert, wordt de waarde ingesteld op de geselecteerde vraag.",
      trigger_copyvalueDescription: "Wanneer vraagwaarden, die worden gebruikt in de logische uitdrukking, worden gewijzigd en de logische uitdrukking true retourneert, wordt de waarde van een geselecteerde vraag gekopieerd naar een andere geselecteerde vraag.",
      trigger_skipDescription: "Als de logische uitdrukking true retourneert, gaat de enquête naar/focust de geselecteerde vraag.",
      trigger_runExpressionDescription: "Wanneer de logische expressie true retourneert, wordt de aangepaste expressie uitgevoerd. U kunt dit expressieresultaat optioneel instellen voor de geselecteerde vraag",
      completedHtmlOnConditionDescription: "Als de logische uitdrukking true retourneert, wordt de standaardtekst voor de 'Bedankpagina' gewijzigd in de opgegeven tekst.",
      itemExpressionText: "Wanneer expressie: '{0}' true retourneert:", //{0} - the expression
      itemEmptyExpressionText: "Nieuwe regel",
      page_visibilityText: "Maak pagina {0} zichtbaar", //{0} page name
      panel_visibilityText: "Maak paneel {0} zichtbaar", //{0} panel name
      panel_enableText: "Schakel paneel {0} in", //{0} panel name
      question_visibilityText: "Maak vraag {0} zichtbaar", //{0} question name
      question_enableText: "Schakel vraag {0} in", //{0} question name
      question_requireText: "Stel vraag {0} verplicht", //{0} question name
      column_visibilityText: "Kolom {0} van vraag {1} zichtbaar maken", //{0} column name, {1} question name
      column_enableText: "Kolom {0} van vraag maken {1} inschakelen", //{0} column name, {1} question name
      column_requireText: "Kolom {0} met vraag {1} verplicht maken", //{0} column name, {1} question name
      trigger_completeText: "Enquête wordt voltooid",
      trigger_setvalueText: "Stel de vraag: {0} waarde {1}", //{0} question name, {1} setValue
      trigger_setvalueEmptyText: "duidelijke vraagwaarde: {0}", //{0} question name
      trigger_copyvalueText: "Kopieer naar vraag: {0} waarde uit vraag {1}", //{0} and {1} question names
      trigger_skipText: "Enquête ga verder met de vraag {0}", //{0} question name
      trigger_runExpressionText1: "Uitdrukking uitvoeren: '{0}'", //{0} the expression
      trigger_runExpressionText2: " en stel het resultaat in vraag: {0}", //{0} question name
      completedHtmlOnConditionText: "Toon aangepaste tekst voor de 'Bedankpagina'.",
      showAllQuestions: "Alle vragen",
      showAllActionTypes: "Alle actietypen",
      conditions: "Voorwaard(en)",
      actions: "Actie(s)",
      expressionEditorTitle: "Definieer conditie(s)",
      actionsEditorTitle: "Definieer actie(s)",
      deleteAction: "Actie verwijderen",
      addNewAction: "Voeg nieuwe actie toe",
      selectedActionCaption: "Selecteer een actie om toe te voegen...",
      expressionInvalid: "De logische uitdrukking is leeg of ongeldig. Verbeter dit alstublieft.",
      noActionError: "Voeg ten minste één actie toe.",
      actionInvalid: "Los problemen in uw actie(s) op.",
      uncompletedRule_title: "Logische regels zijn onvolledig",
      uncompletedRule_text: "U hebt een aantal van de logische regels niet voltooid. Als u het tabblad nu verlaat, gaan de wijzigingen verloren. Wilt u het tabblad nog steeds verlaten zonder de wijzigingen te voltooien?",
      uncompletedRule_apply: "Ja",
      uncompletedRule_cancel: "Nee, ik wil de regels invullen",
      // expressionSetup: "",
      // actionsSetup: ""
    }
  },
  // Property Editors
  pe: {
    apply: "Van toepassing zijn",
    ok: "OK",
    save: "Opslaan",
    clear: "Duidelijk",
    saveTooltip: "Opslaan",
    cancel: "Annuleren",
    set: "Set",
    reset: "Resetten",
    change: "Veranderen",
    refresh: "Opslaan",
    close: "Sluiten",
    delete: "Verwijderen",
    add: "Toevoegen",
    addNew: "Nieuwe toevoegen",
    addItem: "Klik om een item toe te voegen...",
    removeItem: "Klik om het item te verwijderen...",
    dragItem: "Sleep het item",
    addOther: "Andere",
    addSelectAll: "Selecteer alles",
    addNone: "Geen",
    removeAll: "Verwijder alles",
    edit: "Bewerk",
    back: "Keer terug zonder op te slaan",
    backTooltip: "Keer terug zonder op te slaan",
    saveAndBack: "Bewaar en keer terug",
    saveAndBackTooltip: "Bewaar en keer terug",
    doneEditing: "Klaar",
    editChoices: "Keuzes bewerken",
    showChoices: "Toon keuzes",
    move: "Bewegen",
    empty: "<leeg>",
    emptyValue: "Waarde is leeg",
    fastEntry: "Snelle toegang",
    fastEntryNonUniqueError: "Waarde '{0}' is niet uniek",
    fastEntryChoicesCountError: "Beperk het aantal objecten van {0} tot {1}",
    fastEntryPlaceholder: "U kunt gegevens instellen in de volgende indeling:\nwaarde1|tekst\nwaarde2",
    formEntry: "Formulierinvoer",
    testService: "Test de service",
    itemSelectorEmpty: "Selecteer het element",
    conditionActionEmpty: "Selecteer de actie",
    conditionSelectQuestion: "Selecteer vraag...",
    conditionSelectPage: "Selecteer pagina...",
    conditionSelectPanel: "Selecteer paneel...",
    conditionValueQuestionTitle: "Voer/selecteer de waarde",
    expressionHelp: "U kunt accolades gebruiken om toegang te krijgen tot de vraagwaarden: {vraag1} + {vraag2}, ({prijs} * {aantal}) * (100 - {korting}). U kunt functies gebruiken als: iif(), today(), age(), min(), max(), count(), avg() en anderen.",
    aceEditorHelp: "Druk op Ctrl+spatiebalk om een hint voor het voltooien van een uitdrukking te krijgen",
    aceEditorRowTitle: "Huidige rij",
    aceEditorPanelTitle: "Huidig paneel",
    showMore: "Raadpleeg de documentatie voor meer details",
    assistantTitle: "Beschikbare vragen:",
    cellsEmptyRowsColumns: "Er moet minimaal één kolom of rij zijn",
    showPreviewBeforeComplete: "Voorbeeldweergave voor afronden",
    overridingPropertyPrefix: "Ingesteld door ",
    propertyIsEmpty: "Voer alstublieft een waarde in",
    propertyIsNoUnique: "Voer een unieke waarde in",
    propertyNameIsNotUnique: "Voer een unieke naam in",
    propertyNameIsIncorrect: "Gebruik geen gereserveerde woorden: \"item\", \"keuze\", \"paneel\", \"rij\".",
    listIsEmpty: "Voeg een nieuw item toe",
    "listIsEmpty@choices": "Er zijn nog geen keuzes toegevoegd",
    "addNew@choices": "Een keuze toevoegen",
    expressionIsEmpty: "Expressie is leeg",
    value: "Waarde",
    text: "Tekst",
    rowid: "Rij-ID",
    imageLink: "Afbeeldingslink",
    columnEdit: "Kolom bewerken: {0}",
    itemEdit: "Bewerk item: {0}",
    url: "URL",
    path: "Pad",
    valueName: "Waardenaam",
    choicesbyurl: {
      valueName: "Haal waarden op uit het volgende JSON-veld"
    },
    titleName: "Titel",
    imageLinkName: "Afbeeldings-URL's ophalen uit het volgende JSON-veld",
    allowEmptyResponse: "Leeg respons toestaan",
    titlePlaceholder: "Voer hier de titel in",
    surveyTitlePlaceholder: "Voer de enquêtetitel hier in",
    pageTitlePlaceholder: "Voer hier de paginatitel in",
    descriptionPlaceholder: "Voer een omschrijving in",
    surveyDescriptionPlaceholder: "Voer een onderzoeksbeschrijving in",
    pageDescriptionPlaceholder: "Voer een paginabeschrijving in",
    showOtherItem: "Heeft de 'Anders:'-optie",
    otherText: "Titel 'Anders:'-optie",
    showNoneItem: "Heeft de 'Geen'-optie",
    noneText: "Titel 'Geen'-optie",
    showSelectAllItem: "Heeft de 'Alles selecteren'-optie",
    selectAllText: "Titel 'Alles selecteren'-optie",
    choicesMin: "Minimumwaarde voor automatisch gegenereerde items",
    choicesMax: "Maximale waarde voor automatisch gegenereerde items",
    choicesStep: "Het verschil tussen automatisch gegenereerde items",
    name: "Naam",
    title: "Titel",
    cellType: "Celtype",
    colCount: "Kolom tellen",
    choicesOrder: "Volgorde opties",
    visible: "Is zichtbaar?",
    isRequired: "Is verplicht?",
    isAllRowRequired: "Antwoord vereisen voor alle rijen",
    requiredErrorText: "Tekst bij niet-ingevulde verplichte vraag",
    startWithNewLine: "Beginnen met een nieuwe regel?",
    rows: "Aantal rijen",
    cols: "Kolom tellen",
    placeholder: "Hulptekst",
    showPreview: "Toon voorbeeldgebied",
    storeDataAsText: "Bewaar bestandsinhoud in JSON-resultaat als tekst",
    maxSize: "Maximale bestandsgrootte in bytes",
    imageHeight: "Afbeelding hoogte",
    imageWidth: "Afbeelding breedte",
    rowCount: "Aantal rijen",
    columnLayout: "Kolommen layout",
    addRowLocation: "Voeg de locatie van de rijknop toe",
    addRowText: "Voeg tekst van de rijknop toe",
    removeRowText: "Verwijder de tekst van de rijknop",
    rateMin: "Minimumtarief",
    rateMax: "Maximaal tarief",
    rateStep: "Beoordeel stap",
    minRateDescription: "Beschrijving minimumtarief",
    maxRateDescription: "Maximale tariefomschrijving",
    inputType: "Invoertype",
    optionsCaption: "Bijschrift opties",
    defaultValue: "Standaardwaarde",
    cellsDefaultRow: "Standaard celteksten",
    surveyEditorTitle: "Bewerk enquête-instellingen",
    qEditorTitle: "Bewerken: {0}",
    maxLength: "Maximale lengte",
    buildExpression: "Bouwen",
    editExpression: "Bewerk",
    and: "en",
    or: "of",
    remove: "Verwijderen",
    addCondition: "Voorwaarde toevoegen",
    emptyLogicPopupMessage: "Selecteer een vraag om te beginnen met het configureren van voorwaarden.",
    if: "Als",
    then: "dan",
    setToName: "Doelvraag",
    fromName: "Vraag om het antwoord van te kopiëren",
    gotoName: "Vraag om naar over te slaan",
    ruleIsNotSet: "Regel is onjuist",
    includeIntoResult: "Opnemen in enquêteresultaten",
    showTitle: "Titel weergeven/verbergen",
    expandCollapseTitle: "Titel uitvouwen/samenvouwen",
    locale: "Standaardtaal",
    simulator: "Kies apparaat",
    landscapeOrientation: "Landschap",
    portraitOrientation: "Overschakelen naar staande stand",
    mode: "Modus (bewerken/alleen lezen)",
    clearInvisibleValues: "Wis onzichtbare waarden",
    cookieName: "Cookienaam (zodat enquête slechts éénmalig wordt ingevuld)",
    sendResultOnPageNext: "Antwoorden opslaan bij pagina-overgang",
    storeOthersAsComment: "Sla de waarde van 'anderen' op in een apart veld",
    showPageTitles: "Toon paginatitels",
    showPageNumbers: "Toon paginanummers",
    pagePrevText: "Knoptitel 'Vorige pagina'",
    pageNextText: "Knoptitel 'Volgende pagina'",
    completeText: "Knoptitel 'Afronden'",
    previewText: "Knoptitel 'Voorbeeldweergave'",
    editText: "Knoptitel 'Bewerken'",
    startSurveyText: "Knoptitel 'Starten'",
    showNavigationButtons: "Navigatieknoppen weergeven (standaardnavigatie)",
    showPrevButton: "Toon knop 'Vorige pagina' (gebruiker kan terugkeren)",
    firstPageIsStarted: "De eerste pagina in de enquête is een startpagina",
    showCompletedPage: "Toon bij afronden deze HTML-code",
    goNextPageAutomatic: "Na alle vragen automatisch naar volgende pagina gaan",
    showProgressBar: "Toon voortgangsbalk",
    questionTitleLocation: "Plek vraagtitel",
    requiredText: "Symbool(en) verplichte vraag",
    questionStartIndex: "Eerste vraag (1, 2 or 'A', 'a')",
    showQuestionNumbers: "Toon vraagnummers",
    questionTitleTemplate: "Vraagtitelsjabloon, standaard is: '{no}. {vereisen} {titel}'",
    questionErrorLocation: "Plek vraagfoutmelding",
    focusFirstQuestionAutomatic: "Op volgende pagina focus op de eerste vraag zetten",
    questionsOrder: "Volgorde elementen op pagina",
    maxTimeToFinish: "Maximale tijd om de enquête te voltooien",
    maxTimeToFinishPage: "Maximale tijd om een pagina in de enquête te voltooien",
    image: {
      imageHeight: "Afbeeldingshoogte (in css-geaccepteerde waarden)",
      imageWidth: "Afbeeldingsbreedte (in css-geaccepteerde waarden)"
    },
    page: {
      maxTimeToFinish: "Tijdslimiet om de pagina te voltooien (in seconden)"
    },
    question: {
      page: "Bovenliggende pagina"
    },
    showTimerPanel: "Toon timerpaneel",
    showTimerPanelMode: "Modus timerpaneel",
    renderMode: "Render-modus",
    allowAddPanel: "Sta het toevoegen van een paneel toe",
    allowRemovePanel: "Laat het verwijderen van het paneel toe",
    noEntriesText: "Lege invoertekst",
    panelAddText: "Paneeltekst toevoegen",
    panelRemoveText: "Paneeltekst verwijderen",
    isSinglePage: "Toon alle elementen op één pagina",
    html: "Html",
    expression: "Uitdrukking",
    setValue: "Antwoorden",
    dataFormat: "Beeldformaat",
    allowAddRows: "Het toevoegen van rijen toestaan",
    allowRemoveRows: "Het verwijderen van rijen toestaan",
    allowRowsDragAndDrop: "Rij slepen en neerzetten toestaan",
    responsiveImageSizeHelp: "Is niet van toepassing als u de exacte breedte of hoogte van de afbeelding opgeeft.",
    minImageWidth: "Minimale afbeeldingsbreedte",
    maxImageWidth: "Maximale afbeeldingsbreedte",
    minImageHeight: "Minimale beeldhoogte",
    maxImageHeight: "Maximale beeldhoogte",
    minValue: "Minimale waarde",
    maxValue: "Maximale waarde",
    minLength: "Minimale lengte",
    allowDigits: "Cijfers toestaan",
    minCount: "Minimum aantal",
    maxCount: "Maximale telling",
    regex: "Reguliere expressie",
    surveyvalidator: {
      text: "Foutmelding",
      expression: "Validatie-expressie"
    },
    totalText: "Totale tekst",
    totalType: "Totaal type",
    totalExpression: "Totale expressie",
    totalDisplayStyle: "Totale weergavestijl",
    totalCurrency: "Totale valuta",
    totalFormat: "Totaal formaat",
    logo: "Logo (URL of base64-gecodeerde tekenreeks)",
    questionsOnPageMode: "Structuur van de enquête",
    maxTextLength: "Maximale tekstlengte",
    maxOthersLength: "Maximale tekstlengte optie 'Anders:'",
    autoGrowComment: "Commentaargebied indien nodig automatisch uitvouwen",
    allowResizeComment: "Gebruikers toestaan het formaat van tekstgebieden te wijzigen",
    textUpdateMode: "Modus tekstvernieuwing",
    focusOnFirstError: "Focus op eerste fout zetten",
    checkErrorsMode: "Validatie uitvoeren",
    navigateToUrl: "Navigeer naar URL",
    navigateToUrlOnCondition: "Dynamische URL",
    completedBeforeHtml: "Markering om aan te geven of de gebruiker deze enquête al heeft ingevuld",
    completedHtml: "Paginaopmaak voor voltooide enquête",
    completedHtmlOnCondition: "Dynamische enquête volledige paginaopmaak",
    loadingHtml: "Markeringen om weer te geven terwijl het enquêtemodel wordt geladen",
    commentText: "Tekst in het commentaargebied",
    autocomplete: "Type Automatisch aanvullen",
    labelTrue: "Label \"Waar\"",
    labelFalse: "Label 'Onwaar'",
    allowClear: "De knop Wissen weergeven",
    displayStyle: "Waarde weergavestijl",
    format: "Opgemaakte tekenreeks",
    maximumFractionDigits: "Maximum fractionele cijfers",
    minimumFractionDigits: "Minimale fractionele cijfers",
    useGrouping: "Scheidingstekens voor groeperingen weergeven",
    allowMultiple: "Meerdere bestanden toestaan",
    allowImagesPreview: "Afbeeldingen bekijken",
    acceptedTypes: "Geaccepteerde bestandstypen",
    waitForUpload: "Wacht tot het uploaden is voltooid",
    needConfirmRemoveFile: "Bevestig het verwijderen van bestanden",
    detailPanelMode: "Locatie van het detailpaneel",
    minRowCount: "Minimaal aantal rijen",
    maxRowCount: "Maximaal aantal rijen",
    confirmDelete: "Rijverwijdering bevestigen",
    confirmDeleteText: "Bevestigingsbericht",
    paneldynamic: {
      confirmDelete: "Het verwijderen van het deelvenster bevestigen"
    },
    panelCount: "Initiële paneeltelling",
    minPanelCount: "Minimaal aantal panelen",
    maxPanelCount: "Maximaal aantal panelen",
    panelsState: "Uitvouwstatus binnenpaneel",
    templateDescription: "Beschrijving sjabloon",
    templateTitle: "Titel sjabloon",
    panelPrevText: "Knopinfo vorige deelvensterknop",
    panelNextText: "knopinfo voor het volgende deelvenster",
    showRangeInProgress: "Voortgangsbalk weergeven",
    templateTitleLocation: "Locatie van de vraagtitel",
    panelRemoveButtonLocation: "Locatie van de knop Deelvenster verwijderen",
    hideIfRowsEmpty: "Verberg de vraag als er geen rijen zijn",
    hideColumnsIfEmpty: "Kolommen verbergen als er geen rijen zijn",
    rateValues: "Aangepaste tariefwaarden",
    rateCount: "Aantal tarieven",
    autoGenerate: "Hoe geef ik tariefwaarden op?",
    hideIfChoicesEmpty: "Verberg de vraag als deze geen keuzes bevat",
    hideNumber: "Verberg vraagnummer",
    minWidth: "Minimale breedte (in css-geaccepteerde waarden)",
    maxWidth: "Maximale breedte (in css-geaccepteerde waarden)",
    width: "Breedte (in CSS-geaccepteerde waarden)",
    showHeader: "Kolomkoppen weergeven",
    horizontalScroll: "Horizontale schuifbalk weergeven",
    columnMinWidth: "Minimale kolombreedte (in css-geaccepteerde waarden)",
    rowTitleWidth: "Breedte van rijkoptekst (in css-geaccepteerde waarden)",
    valueTrue: "Waarde 'Waar'",
    valueFalse: "Waarde 'Onwaar'",
    minErrorText: "Foutbericht 'Waarde is onder het minimum'",
    maxErrorText: "Foutbericht 'Waarde overschrijdt maximum'",
    otherErrorText: "Foutbericht 'Lege opmerking'",
    keyDuplicationError: "Foutbericht 'Niet-unieke sleutelwaarde'",
    minSelectedChoices: "Minimaal geselecteerde keuzes",
    maxSelectedChoices: "Maximum aantal geselecteerde keuzes",
    showClearButton: "De knop Wissen weergeven",
    showNumber: "Toon paneelnummer",
    logoWidth: "Breedte logo",
    logoHeight: "Hoogte logo",
    readOnly: "Alleen-lezen",
    enableIf: "Bewerkbaar als",
    emptyRowsText: "Bericht 'Geen rijen'",
    size: "Grootte invoerveld (in tekens)",
    separateSpecialChoices: "Speciale keuzes afzonderlijk (Geen, Overig, Alles selecteren)",
    choicesFromQuestion: "Kopieer keuzes uit de volgende vraag",
    choicesFromQuestionMode: "Welke keuzes kopiëren?",
    showCommentArea: "Het opmerkingenveld weergeven",
    commentPlaceholder: "Tijdelijke aanduiding voor het opmerkingengebied",
    displayRateDescriptionsAsExtremeItems: "Beschrijvingen van tarieven weergeven als extreme waarden",
    rowsOrder: "Rijvolgorde",
    columnsLayout: "Kolomindeling",
    columnColCount: "Aantal geneste kolommen",
    state: "Uitvouwstatus deelvenster",
    correctAnswer: "Juist antwoord",
    defaultPanelValue: "Standaardwaarden",
    cells: "Celteksten",
    keyName: "Sleutelkolom",
    itemvalue: {
      text: "Alternatieve tekst"
    },
    logoPosition: "Positie logo",
    addLogo: "Logo toevoegen...",
    changeLogo: "Logo wijzigen...",
    logoPositions: {
      none: "Logo verwijderen",
      left: "Links",
      right: "Rechtsaf",
      top: "Bovenop",
      bottom: "Onder aan"
    },
    tabs: {
      general: "Algemeen",
      fileOptions: "Opties",
      html: "Html-editor",
      columns: "Kolommen",
      rows: "Rijen",
      choices: "Keuzes",
      items: "Artikelen",
      visibleIf: "Zichtbaar als",
      enableIf: "Schakel If in",
      requiredIf: "Vereist als",
      rateValues: "Beoordeel waarden",
      choicesByUrl: "Keuzes van internet",
      matrixChoices: "Standaardkeuzes",
      multipleTextItems: "Tekstinvoer",
      numbering: "Nummering",
      validators: "Validators",
      navigation: "Navigatie",
      question: "Vraag",
      pages: "Pagina's",
      timer: "Timer/Quiz",
      calculatedValues: "Berekende waardes",
      triggers: "Triggers",
      templateTitle: "Sjabloontitel",
      totals: "Totalen",
      logic: "Logica",
      layout: "Indeling",
      data: "Gegevens",
      validation: "Validatie",
      cells: "Cellen",
      showOnCompleted: "Weergeven bij afronden",
      logo: "Logo in enquêtetitel",
      slider: "Schuifregelaar",
      expression: "Uitdrukking",
      others: "Anderen"
    },
    editProperty: "Eigenschap '{0}' bewerken",
    items: "Items",
    choicesVisibleIf: "Keuzes zijn zichtbaar als",
    choicesEnableIf: "Keuzes kunnen worden geselecteerd als",
    columnsEnableIf: "Kolommen zijn zichtbaar als",
    rowsEnableIf: "Rijen zijn zichtbaar als",
    indent: "Inspringingen toevoegen",
    panel: {
      indent: "Buitenste streepjes toevoegen"
    },
    innerIndent: "Binnenste inspringingen toevoegen",
    defaultValueFromLastRow: "Standaardwaarden uit de laatste rij nemen",
    defaultValueFromLastPanel: "Standaardwaarden uit het laatste deelvenster overnemen",
    enterNewValue: "Voer de waarde in.",
    noquestions: "Er is geen enkele vraag in de enquête.",
    createtrigger: "Maak een trigger",
    titleKeyboardAdornerTip: "Druk op de enter-knop om te bewerken",
    keyboardAdornerTip: "Druk op de enter-knop om het item te bewerken, druk op de delete-knop om het item te verwijderen, druk op alt plus pijl omhoog of pijl omlaag om item te verplaatsen",
    triggerOn: "Aan ",
    triggerMakePagesVisible: "Maak pagina's zichtbaar:",
    triggerMakeQuestionsVisible: "Maak elementen zichtbaar:",
    triggerCompleteText: "Vul de enquête in als dit lukt.",
    triggerNotSet: "De trigger is niet ingesteld",
    triggerRunIf: "Voer als",
    triggerSetToName: "Verander waarde van: ",
    triggerFromName: "Waarde kopiëren van: ",
    triggerRunExpression: "Voer deze expressie uit:",
    triggerSetValue: "naar: ",
    triggerGotoName: "Ga naar de vraag:",
    triggerIsVariable: "Zet de variabele niet in het onderzoeksresultaat.",
    triggerRunExpressionEmpty: "Voer een geldige uitdrukking in",
    emptyExpressionPlaceHolder: "Typ hier expressie...",
    noFile: "Geen bestand gekozen",
    clearIfInvisible: "Wis de waarde als de vraag verborgen wordt",
    valuePropertyName: "Naam van de eigenschap Value",
    searchEnabled: "Zoeken inschakelen",
    hideSelectedItems: "Geselecteerde items verbergen",
    closeOnSelect: "Sluit de vervolgkeuzelijst na selectie",
    signatureWidth: "Breedte handtekening",
    signatureHeight: "Kenmerkende hoogte",
    verticalAlign: "Verticale uitlijning",
    alternateRows: "Alternatieve rijen",
    columnsVisibleIf: "Kolommen zijn zichtbaar als",
    rowsVisibleIf: "Rijen zijn zichtbaar als",
    otherPlaceholder: "Tijdelijke aanduiding voor het opmerkingengebied",
    rateType: "Type tarief"
  },
  // Property values
  pv: {
    "true": "waar",
    "false": "vals",
    inherit: "Erven",
    show: "Tonen",
    hide: "Zich verstoppen",
    default: "Standaard",
    initial: "Standaard",
    random: "Willekeurig",
    collapsed: "Ingestort",
    expanded: "Uitgebreid",
    none: "Geen",
    asc: "Oplopend",
    desc: "Aflopend",
    indeterminate: "Onbepaald",
    decimal: "decimaal",
    currency: "valuta",
    percent: "procent",
    firstExpanded: "Eerste uitgevouwen",
    off: "Uit",
    onpanel: "Begin op elk paneel",
    onPanel: "Op paneel",
    onSurvey: "Op enquête",
    list: "Lijst",
    progressTop: "Voortgang top",
    progressBottom: "Voortgang bodem",
    progressTopBottom: "Voortgang top bodem",
    tab: "Tabs",
    horizontal: "Horizontaal",
    vertical: "Verticaal",
    top: "Top",
    bottom: "Beneden",
    topBottom: "Top en beneden",
    both: "Beide",
    left: "Links",
    right: "Rechts",
    color: "Kleur",
    date: "datum",
    datetime: "datetime",
    "datetime-local": "datetime-lokaal",
    email: "E-mail",
    month: "maand",
    number: "getal",
    password: "wachtwoord",
    range: "bereik",
    tel: "Tel",
    text: "Sms",
    time: "Tijd",
    url: "Url",
    week: "week",
    hidden: "Verborgen",
    on: "Aan",
    onPage: "Op pagina",
    edit: "Bewerk",
    display: "Scherm",
    onComplete: "Bij afronden",
    onHidden: "Bij verbergen",
    onHiddenContainer: "Wanneer de vraag of het bijbehorende paneel/de bijbehorende pagina verborgen raakt",
    clearInvisibleValues: {
      none: "Nooit"
    },
    inputType: {
      color: "Kleur",
      date: "Datum",
      "datetime-local": "Datum en tijd",
      email: "E-mail",
      month: "Maand",
      number: "Getal",
      password: "Wachtwoord",
      range: "Bereik",
      tel: "Telefoonnummer",
      text: "Sms",
      time: "Tijd",
      url: "Url",
      week: "Week"
    },
    all: "Alle",
    page: "Pagina",
    survey: "Enquête",
    onNextPage: "Bij pagina-overgang",
    onValueChanged: "Bij waardeverandering",
    onValueChanging: "Voordat een antwoord wordt gewijzigd",
    standard: "Standaard",
    singlePage: "Enkele pagina",
    questionPerPage: "Vraag per pagina",
    noPreview: "Geen preview",
    showAllQuestions: "Toon voorbeeld met alle vragen",
    showAnsweredQuestions: "Toon voorbeeld met beantwoorde vragen",
    pages: "Voltooide pagina's",
    questions: "Beantwoorde vragen",
    requiredQuestions: "Vereiste vragen beantwoord",
    correctQuestions: "Geldige antwoorden",
    buttons: "Voltooide pagina's (knop UI)",
    underInput: "Onder het invoerveld",
    underTitle: "Onder de titel",
    onBlur: "Bij verliezen focus",
    onTyping: "Tijdens het typen",
    underRow: "Onder de rij",
    underRowSingle: "Onder de rij is slechts één paneel zichtbaar",
    showNavigationButtons: {
      none: "Verborgen"
    },
    showProgressBar: {
      off: "Verborgen"
    },
    showTimerPanel: {
      none: "Verborgen"
    },
    showTimerPanelMode: {
      all: "Beide"
    },
    detailPanelMode: {
      none: "Verborgen"
    },
    addRowLocation: {
      default: "Afhankelijk van de matrixindeling"
    },
    panelsState: {
      default: "Gebruikers kunnen deelvensters niet uitvouwen of samenvouwen",
      collapsed: "Alle panelen zijn samengevouwen",
      expanded: "Alle panelen zijn uitgebreid"
    },
    widthMode: {
      auto: "Auto",
      static: "Statisch",
      responsive: "Responsieve"
    },
    imageFit: {
      none: "Geen",
      contain: "Bevatten",
      cover: "Bedekken",
      fill: "Vullen"
    },
    contentMode: {
      auto: "Auto",
      image: "Beeld",
      video: "Video",
      youtube: "YouTube"
    },
    displayMode: {
      auto: "Auto",
      buttons: "Knopen",
      dropdown: "Vervolgkeuzemenu"
    },
    rateColorMode: {
      default: "Verstek"
    },
    autoGenerate: {
      "true": "Genereren",
      "false": "Handmatig invoeren"
    },
    rateType: {
      labels: "Etiketten",
      stars: "Sterren",
      smileys: "Smileys"
    }
  },
  // Operators
  op: {
    empty: "is leeg",
    notempty: "is niet leeg",
    equal: "gelijk is",
    notequal: "niet gelijk",
    contains: "bevat",
    notcontains: "bevat niet",
    anyof: "een van",
    allof: "alles van",
    greater: "groter",
    less: "minder",
    greaterorequal: "groter of gelijk aan",
    lessorequal: "minder of gelijk aan",
    and: "en",
    or: "of"
  },
  // Embed window
  ew: {
    angular: "Gebruik de Angular-versie",
    jquery: "Gebruik de jQuery-versie",
    knockout: "Gebruik de Knockout-versie",
    react: "Gebruik de React-versie",
    vue: "Gebruik de Vue-versie",
    bootstrap: "Voor bootstrap-framework",
    modern: "Modern thema",
    default: "Standaard thema",
    orange: "Oranje thema",
    darkblue: "Donkerblauw thema",
    darkrose: "Donkereroos thema",
    stone: "Stenen thema",
    winter: "Winter thema",
    winterstone: "Wintersteen thema",
    showOnPage: "Toon enquête op een pagina",
    showInWindow: "Toon enquête in een venster",
    loadFromServer: "Laad Survey JSON vanaf de server",
    titleScript: "Scripts en stijlen",
    titleHtml: "HTML",
    titleJavaScript: "JavaScript"
  },
  // Preview (Survey)
  ts: {
    selectPage: "Selecteer de pagina om deze te testen:",
    showInvisibleElements: "Toon onzichtbare elementen",
    hideInvisibleElements: "Onzichtbare elementen verbergen"
  },
  validators: {
    answercountvalidator: "Aantal antwoorden",
    emailvalidator: "E-mail",
    expressionvalidator: "Uitdrukking",
    numericvalidator: "Numeriek",
    regexvalidator: "Regex",
    textvalidator: "Tekst"
  },
  triggers: {
    completetrigger: "Volledige enquête",
    setvaluetrigger: "Ingestelde waarde",
    copyvaluetrigger: "Kopie waarde",
    skiptrigger: "Ga naar de vraag",
    runexpressiontrigger: "Run expressie",
    visibletrigger: "Zichtbaarheid wijzigen (verouderd)"
  },
  pehelp: {
    cookieName: "Cookies voorkomen dat gebruikers dezelfde enquête twee keer invullen.",
    size: "Hiermee wijzigt u het formaat van het zichtbare gebied van het invoerveld. Gebruik de instelling <b>Validatie → Maximale lengte</b> om de invoerlengte te beperken.",
    format: "Gebruik {0} als tijdelijke aanduiding voor de werkelijke waarde.",
    totalText: "Alleen zichtbaar als ten minste één kolom het type Totaal of de expressie Totaal heeft.",
    acceptedTypes: "Raadpleeg de beschrijving van het kenmerk [accepteren](https://www.w3schools.com/tags/att_input_accept.asp) voor meer informatie.",
    columnColCount: "Alleen van toepassing op de celtypen Radiogroep en selectievakje.",
    autocomplete: "Raadpleeg de [autocomplete](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete) kenmerkbeschrijving voor meer informatie.",
    valueName: "Als u deze eigenschap niet instelt, wordt het antwoord opgeslagen in een veld dat is opgegeven door de eigenschap Name.",
    choicesbyurl: {
      valueName: " "
    },
    keyName: "Als de opgegeven kolom identieke waarden bevat, genereert de enquête de fout 'Niet-unieke sleutelwaarde'."
  },
  // Properties
  p: {
    title: {
      name: "Titel",
      title: "Laat het leeg als het hetzelfde is als 'Naam'"
    },
    multiSelect: "Meerdere selecties toestaan",
    showLabel: "Afbeeldingsbijschriften weergeven",
    value: "Waarde",
    tabAlign: "Uitlijning van tabbladen",
    description: "Omschrijving",
    logoFit: "Logo past",
    pages: "Bladzijden",
    questions: "Vragen",
    triggers: "Triggers",
    calculatedValues: "Berekende waarden",
    surveyId: "Enquête-id",
    surveyPostId: "Enquête post-ID",
    surveyShowDataSaving: "Enquête toont gegevensbesparing",
    questionDescriptionLocation: "Plek vraagomschrijving",
    progressBarType: "Type voortgangsbalk",
    showTOC: "Inhoudsopgave weergeven",
    tocLocation: "Toc locatie",
    questionTitlePattern: "Patroon van de vraagtitel",
    widthMode: "Breedte-modus",
    showBrandInfo: "Toon merkinformatie",
    useDisplayValuesInDynamicTexts: "Waardes in titel gebruiken",
    visibleIf: "Zichtbaar als",
    titleLocation: "Plek titel",
    descriptionLocation: "Plek omschrijving",
    defaultValueExpression: "Standaardwaarde-expressie",
    requiredIf: "Vereist als",
    validators: "Validators",
    bindings: "Bindings",
    renderAs: "Renderen als",
    attachOriginalItems: "Voeg originele items toe",
    choices: "Keuzes",
    choicesByUrl: "Keuzes per url",
    currency: "Valuta",
    cellHint: "Hint voor cel",
    isUnique: "Is uniek",
    showInMultipleColumns: "Weergeven in meerdere kolommen",
    totalMaximumFractionDigits: "Totaal maximum fractiecijfers",
    totalMinimumFractionDigits: "Totaal minimum breukcijfers",
    columns: "Kolommen",
    detailElements: "Detailelementen",
    allowAdaptiveActions: "Adaptieve acties toestaan",
    defaultRowValue: "Standaard rijwaarde",
    detailPanelShowOnAdding: "Detailpaneel weergeven bij toevoegen",
    choicesLazyLoadEnabled: "Keuzes lazy load ingeschakeld",
    choicesLazyLoadPageSize: "Keuzes lui laad paginaformaat",
    inputFieldComponent: "Component invoerveld",
    itemComponent: "Onderdeel Item",
    min: "Min",
    max: "Max",
    minValueExpression: "Expressie van de min-waarde",
    maxValueExpression: "Maximale waarde-expressie",
    step: "Stap",
    dataList: "Gegevenslijst",
    itemSize: "Item grootte",
    elements: "Elementen",
    content: "Tevreden",
    navigationButtonsVisibility: "Navigatie Knoppen zichtbaarheid",
    navigationTitle: "Titel navigatie",
    navigationDescription: "Navigatie beschrijving",
    longTap: "Lange tik",
    autoGrow: "Automatisch groeien",
    allowResize: "Formaat wijzigen toestaan",
    acceptCarriageReturn: "Accepteer retour vervoer",
    displayMode: "Weergavemodus",
    rateType: "Type tarief",
    label: "Etiket",
    contentMode: "Inhoudsmodus",
    imageFit: "Passend bij het beeld",
    altText: "Alternatieve tekst",
    height: "Hoogte",
    penColor: "Kleur van de pen",
    backgroundColor: "Achtergrondkleur",
    templateElements: "Sjabloonelementen",
    operator: "Bediener",
    isVariable: "Is variabel",
    runExpression: "Expressie uitvoeren",
    showCaption: "Toon bijschrift",
    iconName: "Naam van pictogram",
    iconSize: "Pictogramgrootte",
    precision: "Precisie",
    matrixDragHandleArea: "Matrix sleepgreep gebied",
    backgroundImage: "Achtergrondafbeelding",
    backgroundImageFit: "Passend op de achtergrondafbeelding",
    backgroundImageAttachment: "Bijlage bij achtergrondafbeelding",
    backgroundOpacity: "Dekking op de achtergrond",
    selectToRankEnabled: "Selecteer om te rangschikken ingeschakeld",
    selectToRankAreasLayout: "Selecteer om de indeling van gebieden te rangschikken",
    allowCameraAccess: "Toegang tot de camera toestaan",
    scaleColorMode: "Kleurmodus schalen",
    rateColorMode: "Kleurmodus beoordelen",
    templateTabTitle: "Titel van sjabloontabblad",
    templateVisibleIf: "Sjabloon zichtbaar als",
    copyDisplayValue: "Weergavewaarde kopiëren"
  },
  theme: {
    "--background": "Achtergrondkleur",
    "--background-dim-light": "Achtergrond dim licht kleur",
    "--primary-foreground": "Primaire voorgrondkleur",
    "--foreground": "Voorgrondkleur",
    "--base-unit": "Basiseenheid",
    groupGeneral: "Algemeen",
    groupAdvanced: "Geavanceerd",
    themeName: "Thema",
    themeMode: "Uiterlijk van de vraag",
    themeModePanels: "Verstek",
    themeModeLightweight: "Zonder panelen",
    themePaletteLight: "Licht",
    themePaletteDark: "Donker",
    primaryColor: "Accentkleur",
    primaryDefaultColor: "Verstek",
    primaryDarkColor: "Zweven",
    primaryLightColor: "Uitverkoren",
    backgroundDimColor: "Achtergrondkleur",
    backgroundImage: "Achtergrondafbeelding",
    backgroundImageFitAuto: "Auto",
    backgroundImageFitCover: "Bedekken",
    backgroundImageFitContain: "Bevatten",
    backgroundOpacity: "Dekking",
    backgroundImageAttachmentFixed: "Vast",
    backgroundImageAttachmentScroll: "Scrollen",
    panelBackgroundTransparency: "Dekking van de achtergrond van het deelvenster",
    questionBackgroundTransparency: "Ondoorzichtigheid van de vraagachtergrond",
    questionPanel: "Achtergrond van het deelvenster en hoekradius",
    questionTitle: "Lettertype voor de titel van de vraag",
    questionDescription: "Lettertype voor vraagbeschrijving",
    editorPanel: "Invoerelement",
    editorFont: "Lettertype van invoerelement",
    backcolor: "Standaard achtergrond",
    hovercolor: "Achtergrond aanwijzen",
    borderDecoration: "Randdecoratie",
    accentBackground: "Accentachtergrond",
    accentForeground: "Accent voorgrond",
    primaryForecolor: "Standaardkleur",
    primaryForecolorLight: "Uitgeschakelde kleur",
    linesColors: "Kleine lijnkleuren",
    borderDefault: "Donkerder",
    borderLight: "Aansteker",
    fontFamily: "Lettertypefamilie",
    fontSize: "Tekengrootte",
    color: "Kleur",
    placeholderColor: "Kleur van tijdelijke aanduiding",
    size: "Grootte",
    fontWeightRegular: "Regelmatig",
    fontWeightHeavy: "Zwaar",
    fontWeightSemiBold: "Semi-vet",
    fontWeightBold: "Brutaal",
    scale: "Schub",
    cornerRadius: "Hoekradius",
    surveyTitle: "Lettertype voor enquêtetitel",
    pageTitle: "Lettertype voor paginatitel",
    pageDescription: "Lettertype paginabeschrijving",
    boxShadowX: "X",
    boxShadowY: "Y",
    boxShadowAddRule: "Schaduweffect toevoegen",
    opacity: "Dekking",
    boxShadowBlur: "Vervagen",
    boxShadowSpread: "Verspreiden",
    boxShadowDrop: "Druppel",
    boxShadowInner: "Binnenste",
    questionShadow: "Schaduweffecten",
    editorShadow: "Schaduweffecten van invoerelementen",
    names: {
      default: "Verstek",
      sharp: "Scherp",
      borderless: "Grenzeloos",
      flat: "Plat",
      plain: "Vlakte",
      doubleborder: "Dubbele rand",
      layered: "Gelaagd",
      solid: "Degelijk",
      threedimensional: ".3D",
      contrast: "Tegenstelling"
    },
    colors: {
      teal: "Taling",
      blue: "Blauw",
      purple: "Paars",
      orchid: "Orchidee",
      tulip: "Tulp",
      brown: "Bruin",
      green: "Groen"
    }
  }
};
//Uncomment this line on creating a translation file. You should replace "en" and enStrings with your locale ("fr", "de" and so on) and your variable.
editorLocalization.locales["nl"] = nlStrings;

// The following strings have been translated by a machine translation service
// Remove those strings that you have corrected manually
// survey.duplicate: "Duplicate" => "Duplicaat"
// qt.ranking: "Ranking" => "Ranking"
// qt.tagbox: "Multi-Select Dropdown" => "Vervolgkeuzemenu voor meerdere selecties"
// qt.buttongroup: "Button Group" => "Knoppengroep"
// ed.surveySettings: "Survey Settings" => "Enquête-instellingen"
// ed.surveySettingsTooltip: "Open survey settings" => "Enquête-instellingen openen"
// ed.prevSelected: "Select previous" => "Selecteer vorige"
// ed.nextSelected: "Select next" => "Selecteer volgende"
// ed.surveyTypeName: "Survey" => "Enquête"
// ed.pageTypeName: "Page" => "Bladzijde"
// ed.panelTypeName: "Panel" => "Paneel"
// ed.questionTypeName: "Question" => "Vraag"
// ed.columnTypeName: "Column" => "Kolom"
// ed.themeSurvey: "Themes" => "Thema 's"
// ed.defaultV2Theme: "Default" => "Verstek"
// ed.modernTheme: "Modern" => "Modern"
// ed.defaultTheme: "Default (legacy)" => "Standaard (verouderd)"
// ed.jsonHideErrors: "Hide errors" => "Fouten verbergen"
// ed.jsonShowErrors: "Show errors" => "Toon fouten"
// ed.showMoreChoices: "Show more" => "Toon meer"
// ed.showLessChoices: "Show less" => "Toon minder"
// ed.propertyGridFilteredTextPlaceholder: "Type to search..." => "Typ om te zoeken..."
// ed.toolboxChoiceCategory: "Choice Questions" => "Keuzevragen"
// ed.toolboxTextCategory: "Text Input Questions" => "Vragen over tekstinvoer"
// ed.toolboxContainersCategory: "Containers" => "Containers"
// ed.toolboxMatrixCategory: "Matrix Questions" => "Matrix vragen"
// ed.toolboxMiscCategory: "Misc" => "MISC"
// ed.translationPropertyGridTitle: "Language Settings" => "Taalinstellingen"
// ed.themePropertyGridTitle: "Theme Settings" => "Thema-instellingen"
// ed.translationLanguages: "Languages" => "Talen"
// ed.translationShowUsedStringsOnly: "Used Strings Only" => "Alleen gebruikte tekenreeksen"
// ed.translationPlaceHolder: "Translation..." => "Vertaling..."
// ed.themeExportButton: "Export" => "Exporteren"
// ed.themeImportButton: "Import" => "Importeren"
// ed.carryForwardChoicesCopied: "Choices are copied from" => "Keuzes worden gekopieerd van"
// ed.htmlPlaceHolder: "HTML content will be here." => "HTML-inhoud zal hier zijn."
// ed.panelPlaceHolder: "Drop a question from the toolbox here." => "Drop hier een vraag uit de toolbox."
// ed.surveyPlaceHolder: "The survey is empty. Drag an element from the toolbox or click the button below." => "De enquête is leeg. Sleep een element uit de gereedschapskist of klik op de onderstaande knop."
// ed.imagePlaceHolder: "Drag and drop an image here or click the button below and choose an image to upload" => "Sleep een afbeelding hierheen of klik op de onderstaande knop en kies een afbeelding om te uploaden"
// ed.imageChooseImage: "Choose Image" => "Kies afbeelding"
// ed.addNewTypeQuestion: "Add {0}" => "Voeg {0} toe"
// ed.chooseLogoPlaceholder: "[LOGO]" => "[LOGO]"
// ed.auto: "auto" => "Auto"
// ed.choices_Item: "Item " => "Item "
// lg.addNewItem: "Add New Rule" => "Nieuwe regel toevoegen"
// lg.empty_tab: "Create a rule to customize the flow of the survey." => "Maak een regel om de stroom van de enquête aan te passen."
// lg.page_enableName: "Enable (disable) page" => "Pagina inschakelen (uitschakelen)"
// lg.column_visibilityName: "Show (hide) column" => "Kolom weergeven (verbergen)"
// lg.column_enableName: "Enable (disable) column" => "Kolom Inschakelen (uitschakelen)"
// lg.column_requireName: "Make column required" => "Kolom verplicht maken"
// lg.itemEmptyExpressionText: "New rule" => "Nieuwe regel"
// lg.column_visibilityText: "make column {0} of question {1} visible" => "Kolom {0} van vraag {1} zichtbaar maken"
// lg.column_enableText: "make column {0} of question {1} enable" => "Kolom {0} van vraag maken {1} inschakelen"
// lg.column_requireText: "make column {0} of question {1} required" => "Kolom {0} met vraag {1} verplicht maken"
// lg.trigger_setvalueEmptyText: "clear question value: {0}" => "duidelijke vraagwaarde: {0}"
// lg.showAllQuestions: "All Questions" => "Alle vragen"
// lg.showAllActionTypes: "All Action Types" => "Alle actietypen"
// lg.uncompletedRule_title: "Logical rules are incomplete" => "Logische regels zijn onvolledig"
// lg.uncompletedRule_text: "You have not completed some of the logical rules. If you leave the tab now, the changes will be lost. Do you still want to leave the tab without completing the changes?" => "U hebt een aantal van de logische regels niet voltooid. Als u het tabblad nu verlaat, gaan de wijzigingen verloren. Wilt u het tabblad nog steeds verlaten zonder de wijzigingen te voltooien?"
// lg.uncompletedRule_apply: "Yes" => "Ja"
// lg.uncompletedRule_cancel: "No, I want to complete the rules" => "Nee, ik wil de regels invullen"
// lg.expressionSetup: "" => ""
// lg.actionsSetup: "" => ""
// pe.clear: "Clear" => "Duidelijk"
// pe.set: "Set" => "Set"
// pe.change: "Change" => "Veranderen"
// pe.close: "Close" => "Sluiten"
// pe.removeItem: "Click to remove the item..." => "Klik om het item te verwijderen..."
// pe.dragItem: "Drag the item" => "Sleep het item"
// pe.doneEditing: "Done" => "Klaar"
// pe.emptyValue: "Value is empty" => "Waarde is leeg"
// pe.fastEntryNonUniqueError: "Value '{0}' is not unique" => "Waarde '{0}' is niet uniek"
// pe.fastEntryChoicesCountError: "Please limit the number of items from {0} to {1}" => "Beperk het aantal objecten van {0} tot {1}"
// pe.fastEntryPlaceholder: "You can set data in the following format:\nvalue1|text\nvalue2" => "U kunt gegevens instellen in de volgende indeling:\nwaarde1|tekst\nwaarde2"
// pe.overridingPropertyPrefix: "Set by " => "Ingesteld door "
// pe.propertyIsNoUnique: "Please enter a unique value" => "Voer een unieke waarde in"
// pe.propertyNameIsIncorrect: "Do not use reserved words: \"item\", \"choice\", \"panel\", \"row\"." => "Gebruik geen gereserveerde woorden: \"item\", \"keuze\", \"paneel\", \"rij\"."
// pe.listIsEmpty@choices: "No choices have been added yet" => "Er zijn nog geen keuzes toegevoegd"
// pe.addNew@choices: "Add a choice" => "Een keuze toevoegen"
// choicesbyurl.valueName: "Get values from the following JSON field" => "Haal waarden op uit het volgende JSON-veld"
// pe.imageLinkName: "Get image URLs from the following JSON field" => "Afbeeldings-URL's ophalen uit het volgende JSON-veld"
// pe.and: "and" => "en"
// pe.or: "or" => "of"
// pe.emptyLogicPopupMessage: "Select a question to start configuring conditions." => "Selecteer een vraag om te beginnen met het configureren van voorwaarden."
// pe.if: "If" => "Als"
// pe.then: "then" => "dan"
// pe.setToName: "Target question" => "Doelvraag"
// pe.fromName: "Question to copy answer from" => "Vraag om het antwoord van te kopiëren"
// pe.gotoName: "Question to skip to" => "Vraag om naar over te slaan"
// pe.ruleIsNotSet: "Rule is incorrect" => "Regel is onjuist"
// pe.includeIntoResult: "Include into survey results" => "Opnemen in enquêteresultaten"
// pe.portraitOrientation: "Switch to portrait orientation" => "Overschakelen naar staande stand"
// image.imageHeight: "Image height (in CSS-accepted values)" => "Afbeeldingshoogte (in css-geaccepteerde waarden)"
// image.imageWidth: "Image width (in CSS-accepted values)" => "Afbeeldingsbreedte (in css-geaccepteerde waarden)"
// page.maxTimeToFinish: "Time limit to finish the page (in seconds)" => "Tijdslimiet om de pagina te voltooien (in seconden)"
// question.page: "Parent page" => "Bovenliggende pagina"
// pe.noEntriesText: "Empty entries text" => "Lege invoertekst"
// pe.setValue: "Answer" => "Antwoorden"
// pe.dataFormat: "Image format" => "Beeldformaat"
// pe.allowAddRows: "Allow adding rows" => "Het toevoegen van rijen toestaan"
// pe.allowRemoveRows: "Allow removing rows" => "Het verwijderen van rijen toestaan"
// pe.allowRowsDragAndDrop: "Allow row drag and drop" => "Rij slepen en neerzetten toestaan"
// pe.responsiveImageSizeHelp: "Does not apply if you specify the exact image width or height." => "Is niet van toepassing als u de exacte breedte of hoogte van de afbeelding opgeeft."
// pe.minImageWidth: "Minimum image width" => "Minimale afbeeldingsbreedte"
// pe.maxImageWidth: "Maximum image width" => "Maximale afbeeldingsbreedte"
// pe.minImageHeight: "Minimum image height" => "Minimale beeldhoogte"
// pe.maxImageHeight: "Maximum image height" => "Maximale beeldhoogte"
// surveyvalidator.text: "Error message" => "Foutmelding"
// surveyvalidator.expression: "Validation expression" => "Validatie-expressie"
// pe.logo: "Logo (URL or base64-encoded string)" => "Logo (URL of base64-gecodeerde tekenreeks)"
// pe.questionsOnPageMode: "Survey structure" => "Structuur van de enquête"
// pe.autoGrowComment: "Auto-expand comment area if necessary" => "Commentaargebied indien nodig automatisch uitvouwen"
// pe.allowResizeComment: "Allow users to resize text areas" => "Gebruikers toestaan het formaat van tekstgebieden te wijzigen"
// pe.checkErrorsMode: "Run validation" => "Validatie uitvoeren"
// pe.navigateToUrl: "Navigate to URL" => "Navigeer naar URL"
// pe.navigateToUrlOnCondition: "Dynamic URL" => "Dynamische URL"
// pe.completedBeforeHtml: "Markup to show if the user already filled out this survey" => "Markering om aan te geven of de gebruiker deze enquête al heeft ingevuld"
// pe.completedHtml: "Survey Complete page markup" => "Paginaopmaak voor voltooide enquête"
// pe.completedHtmlOnCondition: "Dynamic Survey Complete page markup" => "Dynamische enquête volledige paginaopmaak"
// pe.loadingHtml: "Markup to show while survey model is loading" => "Markeringen om weer te geven terwijl het enquêtemodel wordt geladen"
// pe.commentText: "Comment area text" => "Tekst in het commentaargebied"
// pe.autocomplete: "Autocomplete type" => "Type Automatisch aanvullen"
// pe.labelTrue: "\"True\" label" => "Label \"Waar\""
// pe.labelFalse: "\"False\" label" => "Label 'Onwaar'"
// pe.allowClear: "Show the Clear button" => "De knop Wissen weergeven"
// pe.displayStyle: "Value display style" => "Waarde weergavestijl"
// pe.format: "Formatted string" => "Opgemaakte tekenreeks"
// pe.maximumFractionDigits: "Maximum fractional digits" => "Maximum fractionele cijfers"
// pe.minimumFractionDigits: "Minimum fractional digits" => "Minimale fractionele cijfers"
// pe.useGrouping: "Display grouping separators" => "Scheidingstekens voor groeperingen weergeven"
// pe.allowMultiple: "Allow multiple files" => "Meerdere bestanden toestaan"
// pe.allowImagesPreview: "Preview images" => "Afbeeldingen bekijken"
// pe.acceptedTypes: "Accepted file types" => "Geaccepteerde bestandstypen"
// pe.waitForUpload: "Wait for the upload to complete" => "Wacht tot het uploaden is voltooid"
// pe.needConfirmRemoveFile: "Confirm file deletion" => "Bevestig het verwijderen van bestanden"
// pe.detailPanelMode: "Detail panel location" => "Locatie van het detailpaneel"
// pe.minRowCount: "Minimum row count" => "Minimaal aantal rijen"
// pe.maxRowCount: "Maximum row count" => "Maximaal aantal rijen"
// pe.confirmDelete: "Confirm row deletion" => "Rijverwijdering bevestigen"
// pe.confirmDeleteText: "Confirmation message" => "Bevestigingsbericht"
// paneldynamic.confirmDelete: "Confirm panel deletion" => "Het verwijderen van het deelvenster bevestigen"
// pe.panelCount: "Initial panel count" => "Initiële paneeltelling"
// pe.minPanelCount: "Minimum panel count" => "Minimaal aantal panelen"
// pe.maxPanelCount: "Maximum panel count" => "Maximaal aantal panelen"
// pe.panelsState: "Inner panel expand state" => "Uitvouwstatus binnenpaneel"
// pe.templateDescription: "Description template" => "Beschrijving sjabloon"
// pe.templateTitle: "Title template" => "Titel sjabloon"
// pe.panelPrevText: "Previous Panel button tooltip" => "Knopinfo vorige deelvensterknop"
// pe.panelNextText: "Next Panel button tooltip" => "knopinfo voor het volgende deelvenster"
// pe.showRangeInProgress: "Show progress bar" => "Voortgangsbalk weergeven"
// pe.templateTitleLocation: "Question title location" => "Locatie van de vraagtitel"
// pe.panelRemoveButtonLocation: "Remove Panel button location" => "Locatie van de knop Deelvenster verwijderen"
// pe.hideIfRowsEmpty: "Hide the question if there are no rows" => "Verberg de vraag als er geen rijen zijn"
// pe.hideColumnsIfEmpty: "Hide columns if there are no rows" => "Kolommen verbergen als er geen rijen zijn"
// pe.rateValues: "Custom rate values" => "Aangepaste tariefwaarden"
// pe.rateCount: "Rate count" => "Aantal tarieven"
// pe.autoGenerate: "How to specify rate values?" => "Hoe geef ik tariefwaarden op?"
// pe.hideIfChoicesEmpty: "Hide the question if it contains no choices" => "Verberg de vraag als deze geen keuzes bevat"
// pe.hideNumber: "Hide question number" => "Verberg vraagnummer"
// pe.minWidth: "Minimum width (in CSS-accepted values)" => "Minimale breedte (in css-geaccepteerde waarden)"
// pe.maxWidth: "Maximum width (in CSS-accepted values)" => "Maximale breedte (in css-geaccepteerde waarden)"
// pe.width: "Width (in CSS-accepted values)" => "Breedte (in CSS-geaccepteerde waarden)"
// pe.showHeader: "Show column headers" => "Kolomkoppen weergeven"
// pe.horizontalScroll: "Show horizontal scrollbar" => "Horizontale schuifbalk weergeven"
// pe.columnMinWidth: "Minimum column width (in CSS-accepted values)" => "Minimale kolombreedte (in css-geaccepteerde waarden)"
// pe.rowTitleWidth: "Row header width (in CSS-accepted values)" => "Breedte van rijkoptekst (in css-geaccepteerde waarden)"
// pe.valueTrue: "\"True\" value" => "Waarde 'Waar'"
// pe.valueFalse: "\"False\" value" => "Waarde 'Onwaar'"
// pe.minErrorText: "\"Value is below minimum\" error message" => "Foutbericht 'Waarde is onder het minimum'"
// pe.maxErrorText: "\"Value exceeds maximum\" error message" => "Foutbericht 'Waarde overschrijdt maximum'"
// pe.otherErrorText: "\"Empty comment\" error message" => "Foutbericht 'Lege opmerking'"
// pe.keyDuplicationError: "\"Non-unique key value\" error message" => "Foutbericht 'Niet-unieke sleutelwaarde'"
// pe.minSelectedChoices: "Minimum selected choices" => "Minimaal geselecteerde keuzes"
// pe.maxSelectedChoices: "Maximum selected choices" => "Maximum aantal geselecteerde keuzes"
// pe.showClearButton: "Show the Clear button" => "De knop Wissen weergeven"
// pe.showNumber: "Show panel number" => "Toon paneelnummer"
// pe.readOnly: "Read-only" => "Alleen-lezen"
// pe.enableIf: "Editable if" => "Bewerkbaar als"
// pe.emptyRowsText: "\"No rows\" message" => "Bericht 'Geen rijen'"
// pe.size: "Input field size (in characters)" => "Grootte invoerveld (in tekens)"
// pe.separateSpecialChoices: "Separate special choices (None, Other, Select All)" => "Speciale keuzes afzonderlijk (Geen, Overig, Alles selecteren)"
// pe.choicesFromQuestion: "Copy choices from the following question" => "Kopieer keuzes uit de volgende vraag"
// pe.choicesFromQuestionMode: "Which choices to copy?" => "Welke keuzes kopiëren?"
// pe.showCommentArea: "Show the comment area" => "Het opmerkingenveld weergeven"
// pe.commentPlaceholder: "Comment area placeholder" => "Tijdelijke aanduiding voor het opmerkingengebied"
// pe.displayRateDescriptionsAsExtremeItems: "Display rate descriptions as extreme values" => "Beschrijvingen van tarieven weergeven als extreme waarden"
// pe.rowsOrder: "Row order" => "Rijvolgorde"
// pe.columnsLayout: "Column layout" => "Kolomindeling"
// pe.columnColCount: "Nested column count" => "Aantal geneste kolommen"
// pe.state: "Panel expand state" => "Uitvouwstatus deelvenster"
// pe.correctAnswer: "Correct Answer" => "Juist antwoord"
// pe.defaultPanelValue: "Default Values" => "Standaardwaarden"
// pe.cells: "Cell Texts" => "Celteksten"
// pe.keyName: "Key column" => "Sleutelkolom"
// itemvalue.text: "Alt text" => "Alternatieve tekst"
// tabs.expression: "Expression" => "Uitdrukking"
// pe.choicesVisibleIf: "Choices are visible if" => "Keuzes zijn zichtbaar als"
// pe.choicesEnableIf: "Choices are selectable if" => "Keuzes kunnen worden geselecteerd als"
// pe.columnsEnableIf: "Columns are visible if" => "Kolommen zijn zichtbaar als"
// pe.rowsEnableIf: "Rows are visible if" => "Rijen zijn zichtbaar als"
// pe.indent: "Add indents" => "Inspringingen toevoegen"
// panel.indent: "Add outer indents" => "Buitenste streepjes toevoegen"
// pe.innerIndent: "Add inner indents" => "Binnenste inspringingen toevoegen"
// pe.defaultValueFromLastRow: "Take default values from the last row" => "Standaardwaarden uit de laatste rij nemen"
// pe.defaultValueFromLastPanel: "Take default values from the last panel" => "Standaardwaarden uit het laatste deelvenster overnemen"
// pe.emptyExpressionPlaceHolder: "Type expression here..." => "Typ hier expressie..."
// pe.clearIfInvisible: "Clear the value if the question becomes hidden" => "Wis de waarde als de vraag verborgen wordt"
// pe.valuePropertyName: "Value property name" => "Naam van de eigenschap Value"
// pe.searchEnabled: "Enable search" => "Zoeken inschakelen"
// pe.hideSelectedItems: "Hide selected items" => "Geselecteerde items verbergen"
// pe.closeOnSelect: "Close the dropdown after selection" => "Sluit de vervolgkeuzelijst na selectie"
// pe.signatureWidth: "Signature width" => "Breedte handtekening"
// pe.signatureHeight: "Signature height" => "Kenmerkende hoogte"
// pe.verticalAlign: "Vertical alignment" => "Verticale uitlijning"
// pe.alternateRows: "Alternate rows" => "Alternatieve rijen"
// pe.columnsVisibleIf: "Columns are visible if" => "Kolommen zijn zichtbaar als"
// pe.rowsVisibleIf: "Rows are visible if" => "Rijen zijn zichtbaar als"
// pe.otherPlaceholder: "Comment area placeholder" => "Tijdelijke aanduiding voor het opmerkingengebied"
// pe.rateType: "Rate type" => "Type tarief"
// pv.true: "true" => "waar"
// pv.false: "false" => "vals"
// pv.decimal: "decimal" => "decimaal"
// pv.currency: "currency" => "valuta"
// pv.percent: "percent" => "procent"
// pv.onpanel: "Start on each panel" => "Begin op elk paneel"
// pv.tab: "Tabs" => "Tabs"
// pv.color: "color" => "Kleur"
// pv.date: "date" => "datum"
// pv.datetime: "datetime" => "datetime"
// pv.datetime-local: "datetime-local" => "datetime-lokaal"
// pv.email: "email" => "E-mail"
// pv.month: "month" => "maand"
// pv.number: "number" => "getal"
// pv.password: "password" => "wachtwoord"
// pv.range: "range" => "bereik"
// pv.tel: "tel" => "Tel"
// pv.text: "text" => "Sms"
// pv.time: "time" => "Tijd"
// pv.url: "url" => "Url"
// pv.week: "week" => "week"
// pv.onHiddenContainer: "When the question or its panel/page becomes hidden" => "Wanneer de vraag of het bijbehorende paneel/de bijbehorende pagina verborgen raakt"
// clearInvisibleValues.none: "Never" => "Nooit"
// inputType.color: "Color" => "Kleur"
// inputType.date: "Date" => "Datum"
// inputType.datetime-local: "Date and Time" => "Datum en tijd"
// inputType.email: "Email" => "E-mail"
// inputType.month: "Month" => "Maand"
// inputType.number: "Number" => "Getal"
// inputType.password: "Password" => "Wachtwoord"
// inputType.range: "Range" => "Bereik"
// inputType.tel: "Phone Number" => "Telefoonnummer"
// inputType.text: "Text" => "Sms"
// inputType.time: "Time" => "Tijd"
// inputType.url: "URL" => "Url"
// inputType.week: "Week" => "Week"
// pv.onValueChanging: "Before an answer is changed" => "Voordat een antwoord wordt gewijzigd"
// pv.pages: "Completed pages" => "Voltooide pagina's"
// pv.questions: "Answered questions" => "Beantwoorde vragen"
// pv.requiredQuestions: "Answered required questions" => "Vereiste vragen beantwoord"
// pv.correctQuestions: "Valid answers" => "Geldige antwoorden"
// pv.buttons: "Completed pages (button UI)" => "Voltooide pagina's (knop UI)"
// pv.underRow: "Under the row" => "Onder de rij"
// pv.underRowSingle: "Under the row, only one panel is visible" => "Onder de rij is slechts één paneel zichtbaar"
// showNavigationButtons.none: "Hidden" => "Verborgen"
// showProgressBar.off: "Hidden" => "Verborgen"
// showTimerPanel.none: "Hidden" => "Verborgen"
// showTimerPanelMode.all: "Both" => "Beide"
// detailPanelMode.none: "Hidden" => "Verborgen"
// addRowLocation.default: "Depends on matrix layout" => "Afhankelijk van de matrixindeling"
// panelsState.default: "Users cannot expand or collapse panels" => "Gebruikers kunnen deelvensters niet uitvouwen of samenvouwen"
// panelsState.collapsed: "All panels are collapsed" => "Alle panelen zijn samengevouwen"
// panelsState.expanded: "All panels are expanded" => "Alle panelen zijn uitgebreid"
// widthMode.auto: "Auto" => "Auto"
// widthMode.static: "Static" => "Statisch"
// widthMode.responsive: "Responsive" => "Responsieve"
// imageFit.none: "None" => "Geen"
// imageFit.contain: "Contain" => "Bevatten"
// imageFit.cover: "Cover" => "Bedekken"
// imageFit.fill: "Fill" => "Vullen"
// contentMode.auto: "Auto" => "Auto"
// contentMode.image: "Image" => "Beeld"
// contentMode.video: "Video" => "Video"
// contentMode.youtube: "YouTube" => "YouTube"
// displayMode.auto: "Auto" => "Auto"
// displayMode.buttons: "Buttons" => "Knopen"
// displayMode.dropdown: "Dropdown" => "Vervolgkeuzemenu"
// rateColorMode.default: "Default" => "Verstek"
// autoGenerate.true: "Generate" => "Genereren"
// autoGenerate.false: "Enter manually" => "Handmatig invoeren"
// rateType.labels: "Labels" => "Etiketten"
// rateType.stars: "Stars" => "Sterren"
// rateType.smileys: "Smileys" => "Smileys"
// op.and: "and" => "en"
// op.or: "or" => "of"
// ts.hideInvisibleElements: "Hide invisible elements" => "Onzichtbare elementen verbergen"
// pehelp.cookieName: "Cookies prevent users from filling out the same survey twice." => "Cookies voorkomen dat gebruikers dezelfde enquête twee keer invullen."
// pehelp.size: "Resizes the visible area of the input field. Please use the <b>Validation → Maximum length</b> setting to limit the input length." => "Hiermee wijzigt u het formaat van het zichtbare gebied van het invoerveld. Gebruik de instelling <b>Validatie → Maximale lengte</b> om de invoerlengte te beperken."
// pehelp.format: "Use {0} as a placeholder for the actual value." => "Gebruik {0} als tijdelijke aanduiding voor de werkelijke waarde."
// pehelp.totalText: "Visible only when at least one column has Total type or Total expression." => "Alleen zichtbaar als ten minste één kolom het type Totaal of de expressie Totaal heeft."
// pehelp.acceptedTypes: "Refer to the [accept](https://www.w3schools.com/tags/att_input_accept.asp) attribute description for more information." => "Raadpleeg de beschrijving van het kenmerk [accepteren](https://www.w3schools.com/tags/att_input_accept.asp) voor meer informatie."
// pehelp.columnColCount: "Applicable only to Radiogroup and Checkbox cell types." => "Alleen van toepassing op de celtypen Radiogroep en selectievakje."
// pehelp.autocomplete: "Refer to the [autocomplete](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete) attribute description for more information." => "Raadpleeg de [autocomplete](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete) kenmerkbeschrijving voor meer informatie."
// pehelp.valueName: "If you do not set this property, the answer will be stored in a field specified by the Name property." => "Als u deze eigenschap niet instelt, wordt het antwoord opgeslagen in een veld dat is opgegeven door de eigenschap Name."
// choicesbyurl.valueName: " " => " "
// pehelp.keyName: "If the specified column contains identical values, the survey throws the \"Non-unique key value\" error." => "Als de opgegeven kolom identieke waarden bevat, genereert de enquête de fout 'Niet-unieke sleutelwaarde'."
// p.multiSelect: "Allow multiple selection" => "Meerdere selecties toestaan"
// p.showLabel: "Show image captions" => "Afbeeldingsbijschriften weergeven"
// p.value: "Value" => "Waarde"
// p.tabAlign: "Tab alignment" => "Uitlijning van tabbladen"
// p.logoFit: "Logo fit" => "Logo past"
// p.pages: "Pages" => "Bladzijden"
// p.questions: "Questions" => "Vragen"
// p.calculatedValues: "Calculated values" => "Berekende waarden"
// p.surveyId: "Survey id" => "Enquête-id"
// p.surveyPostId: "Survey post id" => "Enquête post-ID"
// p.surveyShowDataSaving: "Survey show data saving" => "Enquête toont gegevensbesparing"
// p.showTOC: "Show TOC" => "Inhoudsopgave weergeven"
// p.tocLocation: "Toc location" => "Toc locatie"
// p.questionTitlePattern: "Question title pattern" => "Patroon van de vraagtitel"
// p.widthMode: "Width mode" => "Breedte-modus"
// p.showBrandInfo: "Show brand info" => "Toon merkinformatie"
// p.defaultValueExpression: "Default value expression" => "Standaardwaarde-expressie"
// p.bindings: "Bindings" => "Bindings"
// p.renderAs: "Render as" => "Renderen als"
// p.attachOriginalItems: "Attach original items" => "Voeg originele items toe"
// p.cellHint: "Cell hint" => "Hint voor cel"
// p.isUnique: "Is unique" => "Is uniek"
// p.showInMultipleColumns: "Show in multiple columns" => "Weergeven in meerdere kolommen"
// p.totalMaximumFractionDigits: "Total maximum fraction digits" => "Totaal maximum fractiecijfers"
// p.totalMinimumFractionDigits: "Total minimum fraction digits" => "Totaal minimum breukcijfers"
// p.detailElements: "Detail elements" => "Detailelementen"
// p.allowAdaptiveActions: "Allow adaptive actions" => "Adaptieve acties toestaan"
// p.detailPanelShowOnAdding: "Detail panel show on adding" => "Detailpaneel weergeven bij toevoegen"
// p.choicesLazyLoadEnabled: "Choices lazy load enabled" => "Keuzes lazy load ingeschakeld"
// p.choicesLazyLoadPageSize: "Choices lazy load page size" => "Keuzes lui laad paginaformaat"
// p.inputFieldComponent: "Input field component" => "Component invoerveld"
// p.itemComponent: "Item component" => "Onderdeel Item"
// p.min: "Min" => "Min"
// p.max: "Max" => "Max"
// p.minValueExpression: "Min value expression" => "Expressie van de min-waarde"
// p.maxValueExpression: "Max value expression" => "Maximale waarde-expressie"
// p.step: "Step" => "Stap"
// p.dataList: "Data list" => "Gegevenslijst"
// p.elements: "Elements" => "Elementen"
// p.content: "Content" => "Tevreden"
// p.navigationTitle: "Navigation title" => "Titel navigatie"
// p.navigationDescription: "Navigation description" => "Navigatie beschrijving"
// p.longTap: "Long tap" => "Lange tik"
// p.autoGrow: "Auto grow" => "Automatisch groeien"
// p.allowResize: "Allow resizing" => "Formaat wijzigen toestaan"
// p.acceptCarriageReturn: "Accept carriage return" => "Accepteer retour vervoer"
// p.displayMode: "Display mode" => "Weergavemodus"
// p.rateType: "Rate type" => "Type tarief"
// p.contentMode: "Content mode" => "Inhoudsmodus"
// p.imageFit: "Image fit" => "Passend bij het beeld"
// p.altText: "Alt text" => "Alternatieve tekst"
// p.height: "Height" => "Hoogte"
// p.penColor: "Pen color" => "Kleur van de pen"
// p.backgroundColor: "Background color" => "Achtergrondkleur"
// p.templateElements: "Template elements" => "Sjabloonelementen"
// p.operator: "Operator" => "Bediener"
// p.isVariable: "Is variable" => "Is variabel"
// p.runExpression: "Run expression" => "Expressie uitvoeren"
// p.showCaption: "Show caption" => "Toon bijschrift"
// p.iconName: "Icon name" => "Naam van pictogram"
// p.iconSize: "Icon size" => "Pictogramgrootte"
// p.precision: "Precision" => "Precisie"
// p.matrixDragHandleArea: "Matrix drag handle area" => "Matrix sleepgreep gebied"
// p.backgroundImage: "Background image" => "Achtergrondafbeelding"
// p.backgroundImageFit: "Background image fit" => "Passend op de achtergrondafbeelding"
// p.backgroundImageAttachment: "Background image attachment" => "Bijlage bij achtergrondafbeelding"
// p.backgroundOpacity: "Background opacity" => "Dekking op de achtergrond"
// p.selectToRankEnabled: "Select to rank enabled" => "Selecteer om te rangschikken ingeschakeld"
// p.selectToRankAreasLayout: "Select to rank areas layout" => "Selecteer om de indeling van gebieden te rangschikken"
// p.allowCameraAccess: "Allow camera access" => "Toegang tot de camera toestaan"
// p.scaleColorMode: "Scale color mode" => "Kleurmodus schalen"
// p.rateColorMode: "Rate color mode" => "Kleurmodus beoordelen"
// p.templateTabTitle: "Template tab title" => "Titel van sjabloontabblad"
// p.templateVisibleIf: "Template visible if" => "Sjabloon zichtbaar als"
// p.copyDisplayValue: "Copy display value" => "Weergavewaarde kopiëren"
// theme.--background: "Background color" => "Achtergrondkleur"
// theme.--background-dim-light: "Background dim light color" => "Achtergrond dim licht kleur"
// theme.--primary-foreground: "Primary foreground color" => "Primaire voorgrondkleur"
// theme.--foreground: "Foreground color" => "Voorgrondkleur"
// theme.--base-unit: "Base unit" => "Basiseenheid"
// theme.groupGeneral: "General" => "Algemeen"
// theme.groupAdvanced: "Advanced" => "Geavanceerd"
// theme.themeName: "Theme" => "Thema"
// theme.themeMode: "Question appearance" => "Uiterlijk van de vraag"
// theme.themeModePanels: "Default" => "Verstek"
// theme.themeModeLightweight: "Without Panels" => "Zonder panelen"
// theme.themePaletteLight: "Light" => "Licht"
// theme.themePaletteDark: "Dark" => "Donker"
// theme.primaryColor: "Accent color" => "Accentkleur"
// theme.primaryDefaultColor: "Default" => "Verstek"
// theme.primaryDarkColor: "Hover" => "Zweven"
// theme.primaryLightColor: "Selected" => "Uitverkoren"
// theme.backgroundDimColor: "Background color" => "Achtergrondkleur"
// theme.backgroundImage: "Background image" => "Achtergrondafbeelding"
// theme.backgroundImageFitAuto: "Auto" => "Auto"
// theme.backgroundImageFitCover: "Cover" => "Bedekken"
// theme.backgroundImageFitContain: "Contain" => "Bevatten"
// theme.backgroundOpacity: "Opacity" => "Dekking"
// theme.backgroundImageAttachmentFixed: "Fixed" => "Vast"
// theme.backgroundImageAttachmentScroll: "Scroll" => "Scrollen"
// theme.panelBackgroundTransparency: "Panel background opacity" => "Dekking van de achtergrond van het deelvenster"
// theme.questionBackgroundTransparency: "Question background opacity" => "Ondoorzichtigheid van de vraagachtergrond"
// theme.questionPanel: "Panel background and corner radius" => "Achtergrond van het deelvenster en hoekradius"
// theme.questionTitle: "Question title font" => "Lettertype voor de titel van de vraag"
// theme.questionDescription: "Question description font" => "Lettertype voor vraagbeschrijving"
// theme.editorPanel: "Input element" => "Invoerelement"
// theme.editorFont: "Input element font" => "Lettertype van invoerelement"
// theme.backcolor: "Default background" => "Standaard achtergrond"
// theme.hovercolor: "Hover background" => "Achtergrond aanwijzen"
// theme.borderDecoration: "Border decoration" => "Randdecoratie"
// theme.accentBackground: "Accent background" => "Accentachtergrond"
// theme.accentForeground: "Accent foreground" => "Accent voorgrond"
// theme.primaryForecolor: "Default color" => "Standaardkleur"
// theme.primaryForecolorLight: "Disabled color" => "Uitgeschakelde kleur"
// theme.linesColors: "Minor line colors" => "Kleine lijnkleuren"
// theme.borderDefault: "Darker" => "Donkerder"
// theme.borderLight: "Lighter" => "Aansteker"
// theme.fontFamily: "Font family" => "Lettertypefamilie"
// theme.fontSize: "Font size" => "Tekengrootte"
// theme.color: "Color" => "Kleur"
// theme.size: "Size" => "Grootte"
// theme.fontWeightRegular: "Regular" => "Regelmatig"
// theme.fontWeightHeavy: "Heavy" => "Zwaar"
// theme.fontWeightSemiBold: "Semi-bold" => "Semi-vet"
// theme.fontWeightBold: "Bold" => "Brutaal"
// theme.scale: "Scale" => "Schub"
// theme.cornerRadius: "Corner radius" => "Hoekradius"
// theme.surveyTitle: "Survey title font" => "Lettertype voor enquêtetitel"
// theme.pageTitle: "Page title font" => "Lettertype voor paginatitel"
// theme.pageDescription: "Page description font" => "Lettertype paginabeschrijving"
// theme.boxShadowX: "X" => "X"
// theme.boxShadowY: "Y" => "Y"
// theme.boxShadowAddRule: "Add Shadow Effect" => "Schaduweffect toevoegen"
// theme.opacity: "Opacity" => "Dekking"
// theme.boxShadowBlur: "Blur" => "Vervagen"
// theme.boxShadowSpread: "Spread" => "Verspreiden"
// theme.boxShadowDrop: "Drop" => "Druppel"
// theme.boxShadowInner: "Inner" => "Binnenste"
// theme.questionShadow: "Shadow effects" => "Schaduweffecten"
// theme.editorShadow: "Input element shadow effects" => "Schaduweffecten van invoerelementen"
// names.default: "Default" => "Verstek"
// names.contrast: "Contrast" => "Tegenstelling"
// names.plain: "Plain" => "Vlakte"
// names.simple: "Simple" => "Eenvoudig"
// names.blank: "Blank" => "Blanco"
// names.double: "Double" => "Dubbel"
// names.bulk: "Bulk" => "Omvang"
// names.pseudo-3d: "Pseudo 3D" => "Pseudo-3D"
// names.playful: "Playful" => "Dartel"
// names.ultra: "Ultra" => "Ultra"
// colors.teal: "Teal" => "Taling"
// colors.blue: "Blue" => "Blauw"
// colors.purple: "Purple" => "Paars"
// colors.orchid: "Orchid" => "Orchidee"
// colors.tulip: "Tulip" => "Tulp"
// colors.brown: "Brown" => "Bruin"
// colors.green: "Green" => "Groen"
// lg.expressionSetup: "" => ""
// lg.actionsSetup: "" => ""
// names.sharp: "Sharp" => "Scherp"
// names.borderless: "Borderless" => "Grenzeloos"
// names.flat: "Flat" => "Plat"
// names.doubleborder: "Double Border" => "Dubbele rand"
// names.layered: "Layered" => "Gelaagd"
// names.solid: "Solid" => "Degelijk"
// names.threedimensional: "3D" => ".3D"
// ed.translationDeleteLanguage: "Are you certain you wish to delete all strings for this language?" => "Weet u zeker dat u alle tekenreeksen voor deze taal wilt verwijderen?"
// ed.themeResetButton: "Reset theme settings to default" => "Thema-instellingen terugzetten op de standaardinstellingen"
// lg.expressionSetup: "" => ""
// lg.actionsSetup: "" => ""
// theme.placeholderColor: "Placeholder color" => "Kleur van tijdelijke aanduiding"