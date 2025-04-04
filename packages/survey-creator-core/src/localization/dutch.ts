import { setupLocale } from "survey-creator-core";

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
  // Creator tabs
  tabs: {
    preview: "Test de enquête",
    theme: "Thema 's",
    translation: "Vertaling",
    designer: "Enquête-ontwerper",
    json: "JSON-editor",
    logic: "Onderzoekslogica"
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
  toolboxCategories: {
    general: "Algemeen",
    choice: "Keuzevragen",
    text: "Vragen over tekstinvoer",
    containers: "Containers",
    matrix: "Matrix vragen",
    misc: "MISC"
  },
  // Strings in SurveyJS Creator
  ed: {
    defaultLocale: "Standaard ({0})",
    survey: "Enquête",
    settings: "Enquête-instellingen",
    settingsTooltip: "Open enquête-instellingen",
    surveySettings: "Enquête-instellingen",
    surveySettingsTooltip: "Enquête instellingen",
    themeSettings: "Thema-instellingen",
    themeSettingsTooltip: "Thema-instellingen",
    creatorSettingTitle: "Creator-instellingen",
    showPanel: "Toon paneel",
    hidePanel: "Verberg paneel",
    prevSelected: "Selecteer vorige",
    nextSelected: "Selecteer volgende",
    prevFocus: "Focus vorige",
    nextFocus: "Focus volgende",
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
    defaultV2Theme: "Verstek",
    modernTheme: "Modern",
    defaultTheme: "Standaard (verouderd)",
    testSurveyAgain: "Test de enquête opnieuw",
    testSurveyWidth: "Onderzoeksbreedte: ",
    navigateToMsg: "Je moest navigeren naar:",
    saveSurvey: "Enquête opslaan",
    saveSurveyTooltip: "Enquête opslaan",
    saveTheme: "Thema opslaan",
    saveThemeTooltip: "Thema opslaan",
    jsonHideErrors: "Fouten verbergen",
    jsonShowErrors: "Toon fouten",
    undo: "Ongedaan maken",
    redo: "Opnieuw uitvoeren",
    undoTooltip: "Maak de laatste wijziging ongedaan",
    redoTooltip: "Voer de wijziging opnieuw uit",
    expandTooltip: "Uitbreiden",
    collapseTooltip: "Instorting",
    expandAllTooltip: "Alles uitvouwen",
    collapseAllTooltip: "Alles inklappen",
    zoomInTooltip: "Inzoomen",
    zoom100Tooltip: "Inzoomen tot 100%",
    zoomOutTooltip: "Uitzoomen",
    lockQuestionsTooltip: "Vergrendel de uitvouw-/samenvouwstatus voor vragen",
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
    toolboxFilteredTextPlaceholder: "Typ om te zoeken...",
    toolboxNoResultsFound: "Geen resultaten gevonden",
    propertyGridFilteredTextPlaceholder: "Typ om te zoeken...",
    propertyGridNoResultsFound: "Geen resultaten gevonden",
    propertyGridPlaceholderTitle: "Begin met het configureren van uw formulier",
    propertyGridPlaceholderDescription: "Klik op een categoriepictogram om de enquête-instellingen te verkennen. Aanvullende instellingen worden beschikbaar zodra u een enquête-element aan het ontwerpoppervlak toevoegt.",
    correctJSON: "Corrigeer JSON.",
    surveyResults: "Enquêteresultaat: ",
    surveyResultsTable: "Als tabel",
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
    addLanguageTooltip: "Taal toevoegen",
    translationLanguages: "Talen",
    translationDeleteLanguage: "Weet u zeker dat u alle tekenreeksen voor deze taal wilt verwijderen?",
    translationAddLanguage: "Selecteer de taal om te vertalen",
    translationShowAllStrings: "Toon alle snaren",
    translationShowUsedStringsOnly: "Alleen gebruikte tekenreeksen",
    translationShowAllPages: "Toon alle paginas",
    translationNoStrings: "Geen verplichtingen om te vertalen. Vervang alstublieft het filter.",
    translationExportToSCVButton: "Exporteren naar CSV",
    translationImportFromSCVButton: "Importeren vanuit CSV",
    translateUsigAI: "Alles automatisch vertalen",
    translateUsigAIFrom: "Vertalen van: ",
    translationDialogTitle: "Onvertaalde tekenreeksen",
    translationMergeLocaleWithDefault: "Voeg {0} samen met de standaardlandinstelling",
    translationPlaceHolder: "Vertaling...",
    translationSource: "Bron: ",
    translationTarget: "Doel: ",
    translationYouTubeNotSupported: "YouTube-links worden niet ondersteund.",
    themeExportButton: "Exporteren",
    themeImportButton: "Importeren",
    surveyJsonExportButton: "Exporteren",
    surveyJsonImportButton: "Importeren",
    surveyJsonCopyButton: "Naar klembord kopiëren",
    themeResetButton: "Thema-instellingen terugzetten op de standaardinstellingen",
    themeResetConfirmation: "Wil je het thema echt resetten? Al uw aanpassingen gaan verloren.",
    themeResetConfirmationOk: "Ja, reset het thema",
    bold: "Vetgedrukt",
    italic: "Cursief",
    underline: "Onderstrepen",
    addNewQuestion: "Vraag toevoegen",
    selectPage: "Selecteer pagina...",
    carryForwardChoicesCopied: "Keuzes worden gekopieerd van",
    choicesLoadedFromWebText: "Keuzes worden geladen vanuit een webservice.",
    choicesLoadedFromWebLinkText: "Ga naar instellingen",
    choicesLoadedFromWebPreviewTitle: "Voorbeeld van geladen keuzeopties",
    htmlPlaceHolder: "HTML-inhoud zal hier zijn.",
    panelPlaceHolder: "Drop hier een vraag uit de toolbox.",
    surveyPlaceHolder: "De enquête is leeg. Sleep een element uit de gereedschapskist of klik op de onderstaande knop.",
    pagePlaceHolder: "De pagina is leeg. Sleep een element uit de gereedschapskist of klik op de knop hieronder.",
    imagePlaceHolder: "Sleep een afbeelding hierheen of klik op de onderstaande knop en kies een afbeelding om te uploaden",
    surveyPlaceHolderMobile: "Klik hieronder op de knop \"Vraag toevoegen\" om te beginnen met het maken van uw formulier.",
    surveyPlaceholderTitle: "Uw formulier is leeg",
    surveyPlaceholderTitleMobile: "Uw formulier is leeg",
    surveyPlaceholderDescription: "Sleep een element uit de gereedschapskist of klik op de knop hieronder.",
    surveyPlaceholderDescriptionMobile: "Sleep een element uit de gereedschapskist of klik op de knop hieronder.",
    previewPlaceholderTitle: "Geen voorbeeld",
    previewPlaceholderTitleMobile: "Geen voorbeeld",
    previewPlaceholderDescription: "De enquête bevat geen zichtbare elementen.",
    previewPlaceholderDescriptionMobile: "De enquête bevat geen zichtbare elementen.",
    translationsPlaceholderTitle: "Geen verplichtingen om te vertalen",
    translationsPlaceholderTitleMobile: "Geen verplichtingen om te vertalen",
    translationsPlaceholderDescription: "Voeg elementen toe aan uw formulier of wijzig het tekenreeksfilter in de werkbalk.",
    translationsPlaceholderDescriptionMobile: "Voeg elementen toe aan uw formulier of wijzig het tekenreeksfilter in de werkbalk.",
    pagePlaceHolderMobile: "Klik op de knop \"Vraag toevoegen\" hieronder om een nieuw element aan de pagina toe te voegen.",
    panelPlaceHolderMobile: "Klik op de knop \"Vraag toevoegen\" hieronder om een nieuw element aan het paneel toe te voegen.",
    imagePlaceHolderMobile: "Klik op de onderstaande knop en kies een afbeelding om te uploaden",
    imageChooseImage: "Kies afbeelding",
    addNewTypeQuestion: "Voeg {0} toe", //{0} is localizable question type
    chooseLogoPlaceholder: "[LOGO]",
    choices_Item: "Item ",
    selectFile: "Selecteer een bestand",
    removeFile: "Verwijder het bestand",
    lg: {
      addNewItem: "Nieuwe regel toevoegen",
      empty_tab: "Maak een regel om de stroom van de enquête aan te passen.",
      logicPlaceholderTitle: "Geen logische regels",
      logicPlaceholderTitleMobile: "Geen logische regels",
      logicPlaceholderDescription: "Maak een regel om de stroom van de enquête aan te passen.",
      logicPlaceholderDescriptionMobile: "Maak een regel om de stroom van de enquête aan te passen.",
      page_visibilityName: "Pagina zichtbaarheid",
      page_enableName: "Pagina inschakelen (uitschakelen)",
      page_requireName: "Pagina verplicht maken",
      panel_visibilityName: "Paneel zichtbaarheid",
      panel_enableName: "Paneel inschakelen/uitschakelen",
      panel_requireName: "Pagina verplicht maken",
      question_visibilityName: "Vraag zichtbaarheid",
      question_enableName: "Vraag inschakelen/uitschakelen",
      question_requireName: "Vraag optioneel vereist",
      question_resetValueName: "Vraagwaarde opnieuw instellen",
      question_setValueName: "Vraagwaarde instellen",
      column_visibilityName: "Kolom weergeven (verbergen)",
      column_enableName: "Kolom Inschakelen (uitschakelen)",
      column_requireName: "Kolom verplicht maken",
      column_resetValueName: "Kolomwaarde opnieuw instellen",
      column_setValueName: "Kolomwaarde instellen",
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
      question_resetValueText: "Resetwaarde voor vraag: {0}", //{0} question name.
      question_setValueText: "Waarde: {1} toewijzen aan vraag: {0}",
      column_visibilityText: "Kolom {0} van vraag {1} zichtbaar maken", //{0} column name, {1} question name
      column_enableText: "Kolom {0} van vraag maken {1} inschakelen", //{0} column name, {1} question name
      column_requireText: "Kolom {0} met vraag {1} verplicht maken", //{0} column name, {1} question name
      column_resetValueText: "Celwaarde voor kolom opnieuw instellen: {0}", //{0} column name
      column_setValueText: "Celwaarde: {1} toewijzen aan kolom: {0}", //{0} column name and {1} setValueExpression
      setValueExpressionPlaceholder: " Een expressie waarvan het resultaat wordt toegewezen aan de doelvraag.",
      trigger_completeText: "Enquête wordt voltooid",
      trigger_setvalueText: "Stel de vraag: {0} waarde {1}", //{0} question name, {1} setValue
      trigger_setvalueEmptyText: "verwijder vraagwaarde: {0}", //{0} question name
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
      uncompletedRule_cancel: "Nee, ik wil de regels invullen"
    }
  },
  // Property Editors
  pe: {
    panel: {
      name: "Naam van het paneel",
      title: "Titel van het paneel",
      description: "Beschrijving van het paneel",
      visibleIf: "Maak het paneel zichtbaar als",
      requiredIf: "Maak het paneel vereist als",
      questionOrder: "Volgorde van de vragen binnen het panel",
      page: "Bovenliggende pagina",
      startWithNewLine: "Het paneel op een nieuwe regel weergeven",
      state: "Status van paneel samenvouwen",
      width: "Inline paneelbreedte",
      minWidth: "Minimale paneelbreedte",
      maxWidth: "Maximale paneelbreedte",
      showNumber: "Nummer dit paneel"
    },
    panellayoutcolumn: {
      effectiveWidth: "Effectieve breedte, %",
      questionTitleWidth: "Breedte vraagtitel, px"
    },
    paneldynamic: {
      name: "Naam van het paneel",
      title: "Titel van het paneel",
      description: "Beschrijving van het paneel",
      visibleIf: "Maak het paneel zichtbaar als",
      requiredIf: "Maak het paneel vereist als",
      page: "Het deelvenster naar pagina verplaatsen",
      startWithNewLine: "Het paneel op een nieuwe regel weergeven",
      state: "Status van paneel samenvouwen",
      width: "Inline paneelbreedte",
      minWidth: "Minimale paneelbreedte",
      maxWidth: "Maximale paneelbreedte",
      confirmDelete: "Het verwijderen van het deelvenster bevestigen",
      templateDescription: "Patroon van paneelbeschrijving",
      templateTitle: "Patroon voor paneeltitel",
      noEntriesText: "Lege paneeltekst",
      templateTabTitle: "Patroon voor tabbladtitel",
      tabTitlePlaceholder: "Tijdelijke aanduiding voor tabtitel",
      templateVisibleIf: "Maak een afzonderlijk paneel zichtbaar als",
      showNumber: "Nummer het paneel",
      titleLocation: "Uitlijning van paneeltitels",
      descriptionLocation: "Uitlijning van paneelbeschrijving",
      templateQuestionTitleLocation: "Uitlijning van vraagtitels",
      templateQuestionTitleWidth: "Breedte van de vraagtitel",
      templateErrorLocation: "Uitlijning van foutmeldingen",
      newPanelPosition: "Nieuwe paneellocatie",
      showRangeInProgress: "De voortgangsbalk weergeven",
      keyName: "Voorkom dubbele antwoorden in de volgende vraag"
    },
    question: {
      name: "Naam van de vraag",
      title: "Titel van de vraag",
      description: "Beschrijving van de vraag",
      visibleIf: "Maak de vraag zichtbaar als",
      requiredIf: "Maak de vraag verplicht als",
      page: "Bovenliggende pagina",
      state: "Samenvouwen van vragenvak",
      showNumber: "Nummer deze vraag",
      titleLocation: "Uitlijning van vraagtitels",
      descriptionLocation: "Uitlijning van vraagbeschrijvingen",
      errorLocation: "Uitlijning van foutmeldingen",
      indent: "Vergroot de binnenste inspringing",
      width: "Breedte inline vraag",
      minWidth: "Minimale vraagbreedte",
      maxWidth: "Maximale vraagbreedte",
      textUpdateMode: "Invoerveldwaarde bijwerken"
    },
    signaturepad: {
      signatureWidth: "Breedte van het handtekeninggebied",
      signatureHeight: "Hoogte van het handtekeninggebied",
      signatureAutoScaleEnabled: "Het handtekeninggebied automatisch schalen",
      showPlaceholder: "De tijdelijke aanduiding weergeven",
      placeholder: "Tijdelijke aanduiding voor tekst",
      placeholderReadOnly: "Tijdelijke tekst in de modus Alleen-lezen of voorvertoning",
      allowClear: "De knop Wissen weergeven in het handtekeninggebied",
      penMinWidth: "Minimale penbreedte",
      penMaxWidth: "Maximale breedte van het hok",
      penColor: "Kleur van de lijn"
    },
    comment: {
      rows: "Hoogte invoerveld (in lijnen)"
    },
    showQuestionNumbers: "Toon vraagnummers",
    questionStartIndex: "Eerste vraag (1, 2 or 'A', 'a')",
    expression: {
      name: "Naam van expressie",
      title: "Titel van expressie",
      description: "Beschrijving van expressie",
      expression: "Uitdrukking"
    },
    trigger: {
      expression: "Uitdrukking"
    },
    calculatedvalue: {
      expression: "Uitdrukking"
    },
    // survey templates
    survey: {
      title: "Titel",
      description: "Beschrijving van de enquête",
      readOnly: "De enquête alleen-lezen maken"
    },
    page: {
      name: "Paginanaam",
      title: "Titel",
      description: "Pagina beschrijving",
      visibleIf: "Maak de pagina zichtbaar als",
      requiredIf: "Maak de pagina vereist als",
      timeLimit: "Tijdslimiet om de pagina te voltooien (in seconden)",
      questionOrder: "Volgorde van vragen op de pagina"
    },
    matrixdropdowncolumn: {
      name: "Naam van de kolom",
      title: "Titel van de kolom",
      isUnique: "Voorkom dubbele reacties",
      width: "Kolombreedte",
      minWidth: "Minimale kolombreedte",
      rows: "Hoogte invoerveld (in lijnen)",
      visibleIf: "Maak de kolom zichtbaar als",
      requiredIf: "Maak de kolom verplicht als",
      showInMultipleColumns: "Elke optie in een aparte kolom"
    },
    multipletextitem: {
      name: "Naam",
      title: "Titel"
    },
    masksettings: {
      saveMaskedValue: "Gemaskeerde waarde opslaan in enquêteresultaten"
    },
    patternmask: {
      pattern: "Waardepatroon"
    },
    datetimemask: {
      min: "Minimumwaarde",
      max: "Maximale waarde"
    },
    numericmask: {
      allowNegativeValues: "Negatieve waarden toestaan",
      thousandsSeparator: "Scheidingsteken voor duizendtallen",
      decimalSeparator: "Decimaalteken",
      precision: "Waarde precisie",
      min: "Minimumwaarde",
      max: "Maximale waarde"
    },
    currencymask: {
      prefix: "Valuta voorvoegsel",
      suffix: "Valuta achtervoegsel"
    },
    imageHeight: "Afbeelding hoogte",
    imageWidth: "Afbeelding breedte",
    valueName: "Waardenaam",
    defaultDisplayValue: "Standaardweergavewaarde voor dynamische teksten",
    rateDescriptionLocation: "Etiket uitlijnen",
    size: "Breedte invoerveld (in tekens)",
    cellErrorLocation: "Uitlijning van celfoutmeldingen",
    enabled: "Ingeschakeld",
    disabled: "Invalide",
    inherit: "Erven",
    apply: "Van toepassing zijn",
    ok: "OK",
    save: "Opslaan",
    clear: "Verwijder alles",
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
    fastEntryChoicesMinCountError: "Voer ten minste {0} objecten in",
    fastEntryPlaceholder: "U kunt gegevens instellen in de volgende indeling:\nwaarde1|tekst\nwaarde2",
    formEntry: "Formulierinvoer",
    testService: "Test de service",
    itemSelectorEmpty: "Selecteer het element",
    conditionActionEmpty: "Selecteer de actie",
    conditionSelectQuestion: "Selecteer vraag...",
    conditionSelectPage: "Selecteer pagina...",
    conditionSelectPanel: "Selecteer paneel...",
    conditionValueQuestionTitle: "Voer/selecteer de waarde",
    aceEditorHelp: "Druk op Ctrl+spatiebalk om een hint voor het voltooien van een uitdrukking te krijgen",
    aceEditorRowTitle: "Huidige rij",
    aceEditorPanelTitle: "Huidig paneel",
    showMore: "Raadpleeg de documentatie voor meer details",
    assistantTitle: "Beschikbare vragen:",
    cellsEmptyRowsColumns: "Er moet minimaal één kolom of rij zijn",
    showPreviewBeforeComplete: "Voorbeeldweergave voor afronden",
    overridingPropertyPrefix: "Ingesteld door ",
    resetToDefaultCaption: "Terugstellen",
    propertyIsEmpty: "Voer alstublieft een waarde in",
    propertyIsNoUnique: "Voer een unieke waarde in",
    propertyNameIsNotUnique: "Voer een unieke naam in",
    propertyNameIsIncorrect: "Gebruik geen gereserveerde woorden: \"item\", \"keuze\", \"paneel\", \"rij\".",
    listIsEmpty: "Voeg een nieuw item toe",
    "listIsEmpty@choices": "Er zijn nog geen keuzes toegevoegd",
    "listIsEmpty@columns": "Je hebt nog geen kolommen",
    "listIsEmpty@gridLayoutColumns": "Je hebt nog geen lay-outkolommen",
    "listIsEmpty@rows": "Je hebt nog geen rijen",
    "listIsEmpty@validators": "Je hebt nog geen validatieregels",
    "listIsEmpty@calculatedValues": "Je hebt nog geen aangepaste variabelen",
    "listIsEmpty@triggers": "Je hebt nog geen triggers",
    "listIsEmpty@navigateToUrlOnCondition": "Je hebt nog geen links",
    "listIsEmpty@pages": "Je hebt nog geen pagina's",
    "addNew@choices": "Een keuze toevoegen",
    "addNew@columns": "Nieuwe kolom toevoegen",
    "addNew@rows": "Nieuwe rij toevoegen",
    "addNew@validators": "Nieuwe regel toevoegen",
    "addNew@calculatedValues": "Nieuwe variabele toevoegen",
    "addNew@triggers": "Nieuwe trigger toevoegen",
    "addNew@navigateToUrlOnCondition": "Nieuwe URL toevoegen",
    "addNew@pages": "Nieuwe pagina toevoegen",
    expressionIsEmpty: "Expressie is leeg",
    value: "Waarde",
    text: "Tekst",
    rowid: "Rij-ID",
    imageLink: "Afbeeldingslink",
    columnEdit: "Kolom bewerken: {0}",
    itemEdit: "Bewerk item: {0}",
    url: "URL",
    path: "Pad",
    choicesbyurl: {
      url: "URL van de webservice",
      valueName: "Haal waarden op uit het volgende JSON-veld"
    },
    titleName: "Titel",
    imageLinkName: "Afbeeldings-URL's ophalen uit het volgende JSON-veld",
    allowEmptyResponse: "Leeg respons toestaan",
    titlePlaceholder: "Voer hier de titel in",
    surveyTitlePlaceholder: "Voer de enquêtetitel hier in",
    pageTitlePlaceholder: "Voer hier de paginatitel in",
    startPageTitlePlaceholder: "Startpagina",
    descriptionPlaceholder: "Voer een omschrijving in",
    surveyDescriptionPlaceholder: "Voer een onderzoeksbeschrijving in",
    pageDescriptionPlaceholder: "Voer een paginabeschrijving in",
    textWrapEnabled: "Wrap-keuzes",
    showOtherItem: "De optie 'Anders' tonen",
    otherText: "Titel 'Anders:'-optie",
    showNoneItem: "De optie 'Geen' tonen",
    showRefuseItem: "De optie Weigeren om te antwoorden toestaan",
    showDontKnowItem: "De optie 'Weet niet' toestaan",
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
    allowCustomChoices: "Aangepaste keuzes toestaan",
    visible: "Is zichtbaar?",
    isRequired: "Is verplicht?",
    markRequired: "Markeren zoals vereist",
    removeRequiredMark: "Verwijder de vereiste markering",
    eachRowRequired: "Antwoord vereisen voor alle rijen",
    eachRowUnique: "Voorkom dubbele antwoorden in rijen",
    requiredErrorText: "Tekst bij niet-ingevulde verplichte vraag",
    startWithNewLine: "Beginnen met een nieuwe regel?",
    rows: "Aantal rijen",
    cols: "Kolom tellen",
    placeholder: "Hulptekst",
    showPreview: "Toon voorbeeldgebied",
    storeDataAsText: "Bewaar bestandsinhoud in JSON-resultaat als tekst",
    maxSize: "Maximale bestandsgrootte in bytes",
    rowCount: "Aantal rijen",
    columnLayout: "Kolommen layout",
    addRowButtonLocation: "Voeg de locatie van de rijknop toe",
    transposeData: "Rijen transponeren naar kolommen",
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
    clearInvisibleValues: "Wis onzichtbare waarden",
    cookieName: "Cookienaam (zodat enquête slechts éénmalig wordt ingevuld)",
    partialSendEnabled: "Antwoorden opslaan bij pagina-overgang",
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
    navigationButtonsLocation: "Uitlijning van navigatieknoppen",
    showPrevButton: "Toon knop 'Vorige pagina' (gebruiker kan terugkeren)",
    firstPageIsStartPage: "De eerste pagina in de enquête is een startpagina",
    showCompletePage: "Toon bij afronden deze HTML-code",
    autoAdvanceEnabled: "Na alle vragen automatisch naar volgende pagina gaan",
    autoAdvanceAllowComplete: "Vul de enquête automatisch in",
    showProgressBar: "Toon voortgangsbalk",
    progressBarLocation: "Uitlijning van de voortgangsbalk",
    questionTitleLocation: "Plek vraagtitel",
    questionTitleWidth: "Breedte van de vraagtitel",
    requiredMark: "Symbool(en) verplichte vraag",
    questionTitleTemplate: "Vraagtitelsjabloon, standaard is: '{no}. {vereisen} {titel}'",
    questionErrorLocation: "Plek vraagfoutmelding",
    autoFocusFirstQuestion: "Op volgende pagina focus op de eerste vraag zetten",
    questionOrder: "Volgorde elementen op pagina",
    timeLimit: "Maximale tijd om de enquête te voltooien",
    timeLimitPerPage: "Maximale tijd om een pagina in de enquête te voltooien",
    showTimer: "Gebruik een timer",
    timerLocation: "Toon timerpaneel",
    timerInfoMode: "Modus timerpaneel",
    renderMode: "Render-modus",
    allowAddPanel: "Sta het toevoegen van een paneel toe",
    allowRemovePanel: "Laat het verwijderen van het paneel toe",
    addPanelText: "Paneeltekst toevoegen",
    removePanelText: "Paneeltekst verwijderen",
    isSinglePage: "Toon alle elementen op één pagina",
    html: "Html",
    setValue: "Antwoorden",
    dataFormat: "Beeldformaat",
    allowAddRows: "Het toevoegen van rijen toestaan",
    allowRemoveRows: "Het verwijderen van rijen toestaan",
    allowRowReorder: "Rij slepen en neerzetten toestaan",
    responsiveImageSizeHelp: "Is niet van toepassing als u de exacte breedte of hoogte van de afbeelding opgeeft.",
    minImageWidth: "Minimale afbeeldingsbreedte",
    maxImageWidth: "Maximale afbeeldingsbreedte",
    minImageHeight: "Minimale beeldhoogte",
    maxImageHeight: "Maximale beeldhoogte",
    minValue: "Minimale waarde",
    maxValue: "Maximale waarde",
    caseInsensitive: "Hoofdlettergevoelig",
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
    maxCommentLength: "Maximale tekstlengte optie 'Anders:'",
    commentAreaRows: "Hoogte commentaargebied (in lijnen)",
    autoGrowComment: "Commentaargebied indien nodig automatisch uitvouwen",
    allowResizeComment: "Gebruikers toestaan het formaat van tekstgebieden te wijzigen",
    textUpdateMode: "Modus tekstvernieuwing",
    maskType: "Type invoermasker",
    autoFocusFirstError: "Focus op eerste fout zetten",
    checkErrorsMode: "Validatie uitvoeren",
    validateVisitedEmptyFields: "Lege velden valideren bij verloren focus",
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
    searchMode: "Zoekmodus",
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
    panelCount: "Initiële paneeltelling",
    minPanelCount: "Minimaal aantal panelen",
    maxPanelCount: "Maximaal aantal panelen",
    panelsState: "Uitvouwstatus binnenpaneel",
    prevPanelText: "Knopinfo vorige deelvensterknop",
    nextPanelText: "knopinfo voor het volgende deelvenster",
    removePanelButtonLocation: "Locatie van de knop Deelvenster verwijderen",
    hideIfRowsEmpty: "Verberg de vraag als er geen rijen zijn",
    hideColumnsIfEmpty: "Kolommen verbergen als er geen rijen zijn",
    rateValues: "Aangepaste tariefwaarden",
    rateCount: "Aantal tarieven",
    autoGenerate: "Hoe geef ik tariefwaarden op?",
    hideIfChoicesEmpty: "Verberg de vraag als deze geen keuzes bevat",
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
    logoWidth: "Breedte logo",
    logoHeight: "Hoogte logo",
    readOnly: "Alleen-lezen",
    enableIf: "Bewerkbaar als",
    noRowsText: "Bericht 'Geen rijen'",
    separateSpecialChoices: "Speciale keuzes afzonderlijk (Geen, Overig, Alles selecteren)",
    choicesFromQuestion: "Kopieer keuzes uit de volgende vraag",
    choicesFromQuestionMode: "Welke keuzes kopiëren?",
    choiceValuesFromQuestion: "Gebruik waarden uit de volgende matrixkolom of paneelvraag als keuze-ID's",
    choiceTextsFromQuestion: "Gebruik waarden uit de volgende matrixkolom of paneelvraag als keuzeteksten",
    progressBarShowPageTitles: "Paginatitels weergeven in de voortgangsbalk",
    progressBarShowPageNumbers: "Paginanummers weergeven in de voortgangsbalk",
    showCommentArea: "Het opmerkingenveld weergeven",
    commentPlaceholder: "Tijdelijke aanduiding voor het opmerkingengebied",
    displayRateDescriptionsAsExtremeItems: "Beschrijvingen van tarieven weergeven als extreme waarden",
    rowOrder: "Rijvolgorde",
    columnsLayout: "Kolomindeling",
    columnColCount: "Aantal geneste kolommen",
    correctAnswer: "Juist antwoord",
    defaultPanelValue: "Standaardwaarden",
    cells: "Celteksten",
    fileInputPlaceholder: "Selecteer een bestand of plak een bestandslink...",
    keyName: "Sleutelkolom",
    itemvalue: {
      visibleIf: "Maak de optie zichtbaar als",
      enableIf: "Maak de optie selecteerbaar als"
    },
    "itemvalue@rows": {
      visibleIf: "Maak de rij zichtbaar als",
      enableIf: "De rij bewerkbaar maken als:"
    },
    imageitemvalue: {
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
    previewMode: "Preview-modus",
    gridLayoutEnabled: "De rasterlay-out inschakelen",
    gridLayoutColumns: "Kolommen voor rasterlay-out",
    maskSettings: "Masker-instellingen",
    detailErrorLocation: "Uitlijning van foutmeldingen bij rijuitbreiding",
    // Creator tabs
    tabs: {
      panel: {
        layout: "Paneel Lay-out"
      },
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
      mask: "Instellingen voor invoermasker",
      layout: {
        panel: "Indeling",
        question: "Indeling",
        base: "Indeling"
      },
      data: "Gegevens",
      validation: "Validatie",
      cells: "Cellen",
      showOnCompleted: "Weergeven bij afronden",
      logo: "Logo in enquêtetitel",
      slider: "Schuifregelaar",
      expression: "Uitdrukking",
      questionSettings: "Vraag-instellingen",
      header: "Rubriek",
      background: "Achtergrond",
      appearance: "Uiterlijk",
      accentColors: "Accent kleuren",
      surfaceBackground: "Oppervlakte Achtergrond",
      scaling: "Schalen",
      others: "Anderen"
    },
    editProperty: "Eigenschap '{0}' bewerken",
    items: "Items",
    choicesVisibleIf: "Keuzes zijn zichtbaar als",
    choicesEnableIf: "Keuzes kunnen worden geselecteerd als",
    columnsEnableIf: "Kolommen zijn zichtbaar als",
    rowsEnableIf: "Rijen zijn zichtbaar als",
    innerIndent: "Binnenste inspringingen toevoegen",
    copyDefaultValueFromLastEntry: "Gebruik antwoorden van de laatste invoer als standaard",
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
    verticalAlign: "Verticale uitlijning",
    alternateRows: "Alternatieve rijen",
    columnsVisibleIf: "Kolommen zijn zichtbaar als",
    rowsVisibleIf: "Rijen zijn zichtbaar als",
    otherPlaceholder: "Plaatshouder tekst voor het invulveld",
    filePlaceholder: "Plaatshouder tekst voor bestanden",
    photoPlaceholder: "Plaatshouder tekst voor foto's",
    fileOrPhotoPlaceholder: "Plaatshouder tekst voor bestanden of foto's",
    rateType: "Type tarief",
    url_placeholder: "Vb.: https://api.example.com/books",
    path_placeholder: "Vb.: categories.fiction",
    questionStartIndex_placeholder: "Vb.: a)",
    width_placeholder: "Bijv.: 6in",
    minWidth_placeholder: "Bijv.: 600px",
    maxWidth_placeholder: "Vb.: 50%",
    imageHeight_placeholder: "Auto",
    imageWidth_placeholder: "Auto",
    itemTitleWidth_placeholder: "Bijv.: 100px",
    theme: {
      themeName: "Thema",
      isPanelless: "Weergave van de vraag",
      editorPanel: "Achtergrond en hoekradius",
      questionPanel: "Achtergrond en hoekradius",
      primaryColor: "Accent kleur",
      panelBackgroundTransparency: "Dekking van de achtergrond van het deelvenster",
      questionBackgroundTransparency: "Ondoorzichtigheid van de achtergrond van de vraag",
      fontSize: "Tekengrootte",
      scale: "Schub",
      cornerRadius: "De straal van de hoek",
      advancedMode: "Geavanceerde modus",
      pageTitle: "Titel lettertype",
      pageDescription: "Beschrijving lettertype",
      questionTitle: "Titel lettertype",
      questionDescription: "Beschrijving lettertype",
      editorFont: "Lettertype",
      backgroundOpacity: "Dekking",
      "--sjs-font-family": "Lettertype familie",
      "--sjs-general-backcolor-dim": "Achtergrondkleur",
      "--sjs-primary-backcolor": "De achtergrond van het accent",
      "--sjs-primary-forecolor": "Accent voorgrond",
      "--sjs-special-red": "Foutberichten",
      "--sjs-shadow-small": "Schaduweffecten",
      "--sjs-shadow-inner": "Schaduweffecten",
      "--sjs-border-default": "Kleuren"
    },
    "header@header": {
      headerView: "Bekijken",
      logoPosition: "Positie van het logo",
      surveyTitle: "Lettertype van de titel van de enquête",
      surveyDescription: "Lettertype voor enquêtebeschrijving",
      headerTitle: "Lettertype van de titel van de enquête",
      headerDescription: "Lettertype voor enquêtebeschrijving",
      inheritWidthFrom: "Breedte inhoudsgebied",
      textAreaWidth: "Breedte van de tekst",
      backgroundColorSwitch: "Achtergrondkleur",
      backgroundImage: "Achtergrondafbeelding",
      backgroundImageOpacity: "Dekking",
      overlapEnabled: "Overlappen",
      logoPositionX: "Positie van het logo",
      titlePositionX: "Titel positie",
      descriptionPositionX: "Beschrijving positie"
    }
  },
  // Property values
  pv: {
    "true": "waar",
    "false": "vals",
    file: "Lokale bestanden",
    camera: "Fototoestel",
    "file-camera": "Lokale bestanden of camera",
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
    selected: "Uitverkoren",
    unselected: "Geselecteerd",
    decimal: "decimaal",
    currency: "valuta",
    percent: "procent",
    firstExpanded: "Eerste uitgevouwen",
    off: "Uit",
    list: "Lijst",
    carousel: "Carrousel",
    tab: "Tabs",
    progressTop: "Voortgang top",
    progressBottom: "Voortgang bodem",
    progressTopBottom: "Voortgang top bodem",
    horizontal: "Horizontaal",
    vertical: "Verticaal",
    top: "Top",
    bottom: "Beneden",
    topBottom: "Top en beneden",
    both: "Beide",
    left: "Links",
    right: "Rechts",
    center: "Middelpunt",
    leftRight: "Links en rechts",
    middle: "Midden",
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
    text: "Text",
    time: "Tijd",
    url: "Url",
    week: "week",
    hidden: "Verborgen",
    edit: "Bewerk",
    display: "Scherm",
    contain: "Bevatten",
    cover: "Bedekken",
    fill: "Vullen",
    next: "Volgend",
    last: "Laatste",
    onComplete: "Bij afronden",
    onHidden: "Bij verbergen",
    onHiddenContainer: "Wanneer de vraag of het bijbehorende paneel/de bijbehorende pagina verborgen raakt",
    clearInvisibleValues: {
      none: "Nooit"
    },
    clearIfInvisible: {
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
      text: "Text",
      time: "Tijd",
      url: "Url",
      week: "Week"
    },
    autocomplete: {
      name: "Voor- en achternaam",
      "honorific-prefix": "Voorvoegsel",
      "given-name": "Voornaam",
      "additional-name": "Middelste naam",
      "family-name": "Achternaam",
      "honorific-suffix": "Achtervoegsel",
      nickname: "Bijnaam",
      "organization-title": "Functietitel",
      username: "Gebruikersnaam",
      "new-password": "Nieuw wachtwoord",
      "current-password": "Huidig wachtwoord",
      organization: "Naam van de organisatie",
      "street-address": "Volledig adres",
      "address-line1": "Adres Regel 1",
      "address-line2": "Adres Regel 2",
      "address-line3": "Adres Regel 3",
      "address-level4": "Niveau 4 Adres",
      "address-level3": "Niveau 3 Adres",
      "address-level2": "Niveau 2 Adres",
      "address-level1": "Niveau 1 Adres",
      country: "Landcode",
      "country-name": "Naam van het land",
      "postal-code": "Postcode",
      "cc-name": "Naam kaarthouder",
      "cc-given-name": "Voornaam kaarthouder",
      "cc-additional-name": "Middelste naam kaarthouder",
      "cc-family-name": "Achternaam kaarthouder",
      "cc-number": "Creditcardnummer",
      "cc-exp": "Vervaldatum",
      "cc-exp-month": "Vervaldatum maand",
      "cc-exp-year": "Vervaldatum jaar",
      "cc-csc": "Beveiligingscode van de kaart",
      "cc-type": "Type creditcard",
      "transaction-currency": "Valuta van de transactie",
      "transaction-amount": "Transactiebedrag",
      language: "Voorkeurstaal",
      bday: "Verjaardag",
      "bday-day": "Verjaardag Dag",
      "bday-month": "Verjaardag Maand",
      "bday-year": "Verjaardag Jaar",
      sex: "Geslacht",
      url: "Website URL",
      photo: "Profielfoto",
      tel: "Telefoonnummer",
      "tel-country-code": "Landcode voor telefoon",
      "tel-national": "Nationaal telefoonnummer",
      "tel-area-code": "Netnummer",
      "tel-local": "Lokaal telefoonnummer",
      "tel-local-prefix": "Lokaal telefoonvoorvoegsel",
      "tel-local-suffix": "Lokaal telefoonnummer achtervoegsel",
      "tel-extension": "Telefoon extensie",
      email: "E-mailadres",
      impp: "Instant Messaging Protocol"
    },
    maskType: {
      none: "Geen",
      pattern: "Patroon",
      numeric: "Numeriek",
      datetime: "Datum en tijd",
      currency: "Valuta"
    },
    inputTextAlignment: {
      auto: "Auto",
      left: "Links",
      right: "Rechts"
    },
    all: "Alle",
    page: "Pagina",
    survey: "Enquête",
    onNextPage: "Bij pagina-overgang",
    onValueChanged: "Bij waardeverandering",
    onValueChanging: "Voordat een antwoord wordt gewijzigd",
    questionsOnPageMode: {
      standard: "Oorspronkelijke structuur",
      singlePage: "Toon alle vragen op één pagina",
      questionPerPage: "Toon één vraag per pagina"
    },
    noPreview: "Geen preview",
    showAllQuestions: "Toon voorbeeld met alle vragen",
    showAnsweredQuestions: "Toon voorbeeld met beantwoorde vragen",
    allQuestions: "Toon alle vragen",
    answeredQuestions: "Alleen beantwoorde vragen weergeven",
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
    auto: "Auto",
    showNavigationButtons: {
      none: "Verborgen"
    },
    timerInfoMode: {
      combined: "Beide"
    },
    addRowButtonLocation: {
      default: "Afhankelijk van de matrixindeling"
    },
    panelsState: {
      default: "Gebruikers kunnen deelvensters niet uitvouwen of samenvouwen",
      collapsed: "Alle panelen zijn samengevouwen",
      expanded: "Alle panelen zijn uitgebreid",
      firstExpanded: "Eerst uitgebreid"
    },
    widthMode: {
      static: "Statisch",
      responsive: "Responsieve"
    },
    contentMode: {
      image: "Beeld",
      video: "Video",
      youtube: "YouTube"
    },
    displayMode: {
      buttons: "Knopen",
      dropdown: "Vervolgkeuzemenu"
    },
    rateColorMode: {
      default: "Verstek",
      scale: "Schub"
    },
    scaleColorMode: {
      monochrome: "Monochroom",
      colored: "Gekleurd"
    },
    autoGenerate: {
      "true": "Genereren",
      "false": "Handmatig invoeren"
    },
    rateType: {
      labels: "Etiketten",
      stars: "Sterren",
      smileys: "Smileys"
    },
    state: {
      default: "Op slot"
    },
    showQuestionNumbers: {
      default: "Automatische nummering",
      on: "Automatische nummering",
      onPage: "Reset op elke pagina",
      onpanel: "Reset op elk paneel",
      onPanel: "Reset op elk paneel",
      recursive: "Recursieve nummering",
      onSurvey: "Doorgaan in de enquête",
      off: "Geen nummering"
    },
    descriptionLocation: {
      underTitle: "Onder de titel van de vraag",
      underInput: "Onder het invoerveld"
    },
    selectToRankAreasLayout: {
      horizontal: "Naast keuzes",
      vertical: "Bovenstaande keuzes"
    },
    displayStyle: {
      decimal: "Decimaal",
      currency: "Valuta",
      percent: "Percentage",
      date: "Datum"
    },
    totalDisplayStyle: {
      decimal: "Decimaal",
      currency: "Valuta",
      percent: "Percentage",
      date: "Datum"
    },
    rowOrder: {
      initial: "Origineel"
    },
    questionOrder: {
      initial: "Origineel"
    },
    progressBarLocation: {
      top: "Boven",
      bottom: "Bodem",
      topbottom: "Boven en onder",
      aboveheader: "Boven de koptekst",
      belowheader: "Onder de kop",
      off: "Verborgen"
    },
    sum: "Som",
    count: "Tellen",
    min: "Min",
    max: "Max",
    avg: "Avg",
    searchMode: {
      contains: "Bevat",
      startsWith: "Begint met"
    },
    backgroundImageFit: {
      auto: "Auto",
      cover: "Bedekken",
      contain: "Bevatten",
      fill: "Strekken",
      tile: "Tegel"
    },
    backgroundImageAttachment: {
      fixed: "Vast",
      scroll: "Scrollen"
    },
    headerView: {
      basic: "Basisch",
      advanced: "Geavanceerd"
    },
    inheritWidthFrom: {
      survey: "Zelfde als enquête",
      container: "Aanpassen aan container"
    },
    backgroundColorSwitch: {
      none: "Geen",
      accentColor: "Accent kleur",
      custom: "Gewoonte"
    },
    colorPalette: {
      light: "Licht",
      dark: "Donker"
    },
    isPanelless: {
      "false": "Verstek",
      "true": "Zonder panelen"
    },
    progressBarInheritWidthFrom: {
      survey: "Zelfde als enquête",
      container: "Zelfde als container"
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
  peplaceholder: {
    patternmask: {
      pattern: "Vb.: +1(999)-999-99-99"
    },
    datetimemask: {
      pattern: "Bijv.: mm/dd/jjjj"
    },
    currencymask: {
      prefix: "Bijv.: $",
      suffix: "Bijv.: USD"
    },
    panelbase: {
      questionTitleWidth: "Bijv.: 200px"
    },
    panellayoutcolumn: {
      effectiveWidth: "Excl.: 30%",
      questionTitleWidth: "Bijv.: 200px"
    }
  },
  pehelp: {
    panel: {
      name: "Een panel-ID die niet zichtbaar is voor respondenten.",
      description: "Typ een ondertitel in het deelvenster.",
      visibleIf: "Gebruik het pictogram van de toverstaf om een voorwaardelijke regel in te stellen die de zichtbaarheid van het deelvenster bepaalt.",
      enableIf: "Gebruik het pictogram van de toverstaf om een voorwaardelijke regel in te stellen die de alleen-lezen modus voor het deelvenster uitschakelt.",
      requiredIf: "Gebruik het toverstafpictogram om een voorwaardelijke regel in te stellen die het verzenden van enquêtes verhindert, tenzij ten minste één geneste vraag een antwoord heeft.",
      questionTitleLocation: "Geldt voor alle vragen binnen dit panel. Als u deze instelling wilt overschrijven, definieert u regels voor titeluitlijning voor afzonderlijke vragen. De optie \"Overnemen\" past de instelling op paginaniveau (indien ingesteld) of enquêteniveau (\"Standaard bovenaan\") toe.",
      questionTitleWidth: "Hiermee stelt u een consistente breedte in voor vraagtitels wanneer deze links van de vraagvakken zijn uitgelijnd. Accepteert CSS-waarden (px, %, in, pt, enz.).",
      questionErrorLocation: "Hiermee stelt u de locatie van een foutmelding in met betrekking tot alle vragen in het panel. De optie \"Overnemen\" past de instelling op paginaniveau (indien ingesteld) of enquêteniveau toe.",
      questionOrder: "Behoudt de oorspronkelijke volgorde van vragen of maakt ze willekeurig. De optie \"Overnemen\" past de instelling op paginaniveau (indien ingesteld) of enquêteniveau toe.",
      page: "Hiermee verplaatst u het deelvenster naar het einde van een geselecteerde pagina.",
      innerIndent: "Hiermee voegt u ruimte of marge toe tussen de inhoud van het deelvenster en de linkerrand van het deelvenstervak.",
      startWithNewLine: "Schakel de optie uit om het deelvenster op één regel weer te geven met de vorige vraag of het vorige deelvenster. De instelling is niet van toepassing als het deelvenster het eerste element in uw formulier is.",
      state: "Kies uit: \"Uitgevouwen\" - het paneel wordt volledig weergegeven en kan worden ingeklapt; \"Samengevouwen\" - het paneel toont alleen de titel en beschrijving en kan worden uitgevouwen; \"Vergrendeld\" - het paneel wordt volledig weergegeven en kan niet worden ingeklapt.",
      width: "Hiermee stelt u de breedte van het paneel in verhouding tot andere enquête-elementen in dezelfde lijn. Accepteert CSS-waarden (px, %, in, pt, enz.).",
      showQuestionNumbers: "Wijst nummers toe aan vragen die in dit deelvenster zijn genest.",
      effectiveColSpan: "Hiermee geeft u aan hoeveel kolommen dit deelvenster beslaat binnen de rasterlay-out.",
      gridLayoutColumns: "Met deze tabel kunt u elke rasterkolom in het deelvenster configureren. Het stelt automatisch het breedtepercentage voor elke kolom in op basis van het maximale aantal elementen in een rij. Als u de rasterlay-out wilt aanpassen, past u deze waarden handmatig aan en definieert u de titelbreedte voor alle vragen in elke kolom."
    },
    paneldynamic: {
      name: "Een panel-ID die niet zichtbaar is voor respondenten.",
      description: "Typ een ondertitel in het deelvenster.",
      visibleIf: "Gebruik het pictogram van de toverstaf om een voorwaardelijke regel in te stellen die de zichtbaarheid van het deelvenster bepaalt.",
      enableIf: "Gebruik het pictogram van de toverstaf om een voorwaardelijke regel in te stellen die de alleen-lezen modus voor het deelvenster uitschakelt.",
      requiredIf: "Gebruik het toverstafpictogram om een voorwaardelijke regel in te stellen die het verzenden van enquêtes verhindert, tenzij ten minste één geneste vraag een antwoord heeft.",
      templateQuestionTitleLocation: "Geldt voor alle vragen binnen dit panel. Als u deze instelling wilt overschrijven, definieert u regels voor titeluitlijning voor afzonderlijke vragen. De optie \"Overnemen\" past de instelling op paginaniveau (indien ingesteld) of enquêteniveau (\"Standaard bovenaan\") toe.",
      templateQuestionTitleWidth: "Hiermee stelt u een consistente breedte in voor vraagtitels wanneer deze links van de vraagvakken zijn uitgelijnd. Accepteert CSS-waarden (px, %, %, in, pt, enz.).",
      templateErrorLocation: "Hiermee stelt u de locatie in van een foutmelding met betrekking tot een vraag met ongeldige invoer. Kies tussen: \"Top\" - er wordt een fouttekst bovenaan het vraagvak geplaatst; \"Onderaan\" - er wordt een fouttekst onderaan het vraagvak geplaatst. De optie \"Overnemen\" past de instelling op paginaniveau (indien ingesteld) of enquêteniveau (\"Standaard bovenaan\") toe.",
      errorLocation: "Hiermee stelt u de locatie van een foutmelding in met betrekking tot alle vragen in het panel. De optie \"Overnemen\" past de instelling op paginaniveau (indien ingesteld) of enquêteniveau toe.",
      page: "Hiermee verplaatst u het deelvenster naar het einde van een geselecteerde pagina.",
      innerIndent: "Hiermee voegt u ruimte of marge toe tussen de inhoud van het deelvenster en de linkerrand van het deelvenstervak.",
      startWithNewLine: "Schakel de optie uit om het deelvenster op één regel weer te geven met de vorige vraag of het vorige deelvenster. De instelling is niet van toepassing als het deelvenster het eerste element in uw formulier is.",
      state: "Kies uit: \"Uitgevouwen\" - het paneel wordt volledig weergegeven en kan worden ingeklapt; \"Samengevouwen\" - het paneel toont alleen de titel en beschrijving en kan worden uitgevouwen; \"Vergrendeld\" - het paneel wordt volledig weergegeven en kan niet worden ingeklapt.",
      width: "Hiermee stelt u de breedte van het paneel in verhouding tot andere enquête-elementen in dezelfde lijn. Accepteert CSS-waarden (px, %, in, pt, enz.).",
      templateTitle: "Typ een sjabloon voor dynamische paneeltitels. Gebruik {panelIndex} voor de algemene positie van het paneel en {visiblePanelIndex} voor de volgorde tussen de zichtbare panelen. Voeg deze tijdelijke aanduidingen toe aan het patroon om automatische nummering toe te voegen.",
      templateTabTitle: "Typ een sjabloon voor tabbladtitels. Gebruik {panelIndex} voor de algemene positie van een paneel en {visiblePanelIndex} voor de volgorde tussen zichtbare panelen. Voeg deze tijdelijke aanduidingen toe aan het patroon om automatische nummering toe te voegen.",
      tabTitlePlaceholder: "Een terugvaltekst voor tabbladtitels die van toepassing is wanneer het patroon van de tabbladtitel geen zinvolle waarde oplevert.",
      templateVisibleIf: "Met deze instelling kunt u de zichtbaarheid van afzonderlijke panelen binnen het dynamische paneel regelen. Gebruik de tijdelijke aanduiding '{panel}' om te verwijzen naar het huidige deelvenster in uw expressie.",
      titleLocation: "Deze instelling wordt automatisch overgenomen door alle vragen in dit paneel. Als u deze instelling wilt overschrijven, definieert u regels voor titeluitlijning voor afzonderlijke vragen. De optie \"Overnemen\" past de instelling op paginaniveau (indien ingesteld) of enquêteniveau (\"Standaard bovenaan\") toe.",
      descriptionLocation: "De optie \"Overnemen\" past de instelling op paginaniveau (indien ingesteld) of enquêteniveau toe (\"Standaard onder de paneeltitel\").",
      newPanelPosition: "Definieert de positie van een nieuw toegevoegd deelvenster. Standaard worden er nieuwe panelen aan het einde toegevoegd. Selecteer \"Volgende\" om een nieuw paneel in te voegen na het huidige.",
      copyDefaultValueFromLastEntry: "Dupliceert antwoorden uit het laatste deelvenster en wijst ze toe aan het volgende toegevoegde dynamische deelvenster.",
      keyName: "Verwijs naar een vraagnaam om te vereisen dat een gebruiker in elk deelvenster een uniek antwoord geeft op deze vraag."
    },
    copyDefaultValueFromLastEntry: "Dupliceert antwoorden uit de laatste rij en wijst ze toe aan de volgende toegevoegde dynamische rij.",
    defaultValueExpression: "Met deze instelling kunt u een standaardantwoordwaarde toewijzen op basis van een expressie. De expressie kan basisberekeningen bevatten - '{q1_id} + {q2_id}', Booleaanse expressies, zoals '{age} > 60', en functies: 'iif()', 'today()', 'age()', 'min()', 'max()', 'avg()', enz. De waarde die door deze expressie wordt bepaald, dient als de oorspronkelijke standaardwaarde die kan worden overschreven door de handmatige invoer van een respondent.",
    resetValueIf: "Gebruik het toverstafpictogram om een voorwaardelijke regel in te stellen die bepaalt wanneer de invoer van een respondent wordt teruggezet naar de waarde op basis van de \"Standaardwaarde-expressie\" of \"Waarde-expressie instellen\" of naar de waarde \"Standaardantwoord\" (als een van beide is ingesteld).",
    setValueIf: "Gebruik het pictogram van de toverstaf om een voorwaardelijke regel in te stellen die bepaalt wanneer de expressie 'Waarde instellen' moet worden uitgevoerd en wijs de resulterende waarde dynamisch toe als antwoord.",
    setValueExpression: "Geef een expressie op die de waarde definieert die moet worden ingesteld wanneer aan de voorwaarden in de regel 'Waarde instellen als' wordt voldaan. De expressie kan basisberekeningen bevatten - '{q1_id} + {q2_id}', Booleaanse expressies, zoals '{age} > 60', en functies: 'iif()', 'today()', 'age()', 'min()', 'max()', 'avg()', enz. De waarde die door deze expressie wordt bepaald, kan worden overschreven door de handmatige invoer van een respondent.",
    gridLayoutEnabled: "Met Survey Creator kunt u de inlinebreedtes van formulierelementen handmatig aanpassen om de lay-out te beheren. Als dit niet het gewenste resultaat oplevert, kunt u de rasterlay-out inschakelen, waarvan de structuren elementen vormen met behulp van een op kolommen gebaseerd systeem. Om lay-outkolommen te configureren, selecteer je een pagina of paneel en gebruik je de tabel \"Vraaginstellingen\" → \"Rasterkolommen\". Om aan te passen hoeveel kolommen een vraag beslaat, selecteer je deze en stel je de gewenste waarde in in het veld \"Lay-out\" → \"Kolomspanwijdte\".",
    question: {
      name: "Een vraag-ID die niet zichtbaar is voor respondenten.",
      description: "Typ de ondertitel van een vraag.",
      visibleIf: "Gebruik het toverstafpictogram om een voorwaardelijke regel in te stellen die de zichtbaarheid van de vraag bepaalt.",
      enableIf: "Gebruik het toverstafpictogram om een voorwaardelijke regel in te stellen die de alleen-lezen modus voor de vraag uitschakelt.",
      requiredIf: "Gebruik het toverstafpictogram om een voorwaardelijke regel in te stellen die voorkomt dat de enquête wordt voortgezet of verzonden, tenzij de vraag een antwoord heeft gekregen.",
      startWithNewLine: "Schakel de optie uit om de vraag op één regel weer te geven met de vorige vraag of het vorige deelvenster. De instelling is niet van toepassing als de vraag het eerste element in uw formulier is.",
      page: "Hiermee verplaatst u de vraag naar het einde van een geselecteerde pagina.",
      state: "Kies uit: \"Uitgevouwen\" - het vraagvak wordt volledig weergegeven en kan worden ingeklapt; \"Samengevouwen\" - het vraagvak toont alleen de titel en beschrijving en kan worden uitgevouwen; \"Vergrendeld\" - het vraagvak wordt volledig weergegeven en kan niet worden ingeklapt.",
      titleLocation: "Hiermee worden regels voor titeluitlijning overschreven die zijn gedefinieerd op paneel-, pagina- of enquêteniveau. De optie \"Overnemen\" past alle instellingen op een hoger niveau (indien ingesteld) of instellingen op enquêteniveau (\"Top\" standaard) toe.",
      descriptionLocation: "De optie \"Overnemen\" past de instelling op enquêteniveau toe (\"Standaard onder de vraagtitel\").",
      errorLocation: "Hiermee stelt u de locatie van een foutmelding in ten opzichte van de vraag met ongeldige invoer. Kies tussen: \"Top\" - er wordt een fouttekst bovenaan het vraagvak geplaatst; \"Onderaan\" - er wordt een fouttekst onderaan het vraagvak geplaatst. De optie \"Overnemen\" past de instelling op enquêteniveau toe (\"Top\" standaard).",
      indent: "Hiermee voegt u ruimte of marge toe tussen de inhoud van de vraag en de linkerrand van het vraagvak.",
      width: "Hiermee stelt u de breedte van de vraag in verhouding tot andere enquête-elementen in dezelfde regel. Accepteert CSS-waarden (px, %, in, pt, enz.).",
      surveyvalidator: {
        expression: "Gebruik het toverstafpictogram om een validatieregel voor de vraag in te stellen."
      },
      textUpdateMode: "Kies uit: \"Bij verloren focus\" - de waarde wordt bijgewerkt wanneer het invoerveld de focus verliest; \"Tijdens het typen\" - de waarde wordt in realtime bijgewerkt, terwijl gebruikers typen. Met de optie \"Overerven\" wordt de instelling op enquêteniveau toegepast (\"Standaard bij verloren focus\").",
      url: "U kunt elke webservice gebruiken als gegevensbron voor meerkeuzevragen. Als u keuzewaarden wilt invullen, voert u de URL in van de service die de gegevens levert.",
      searchMode: "Een vergelijkingsbewerking die wordt gebruikt om de vervolgkeuzelijst te filteren.",
      textWrapEnabled: "Lange teksten in keuze-opties genereren automatisch regeleinden die in het vervolgkeuzemenu passen. Schakel de selectie uit als u wilt dat de teksten worden afgekapt.",
      effectiveColSpan: "Hiermee geeft u aan hoeveel kolommen deze vraag beslaat binnen de rasterlay-out."
    },
    signaturepad: {
      signatureWidth: "Hiermee stelt u de breedte van het weergegeven handtekeninggebied en de resulterende afbeelding in.",
      signatureHeight: "Hiermee stelt u de hoogte in van het weergegeven handtekeninggebied en de resulterende afbeelding.",
      signatureAutoScaleEnabled: "Selecteer of u wilt dat het handtekeninggebied alle beschikbare ruimte in het vraagvak vult met behoud van de standaardverhouding van 3:2. Wanneer aangepaste breedte- en hoogtewaarden zijn ingesteld, blijft de hoogte-breedteverhouding van deze afmetingen behouden."
    },
    file: {
      imageHeight: "Hiermee past u de hoogte van de afbeelding in de enquêteresultaten aan.",
      imageWidth: "Hiermee past u de breedte van de afbeelding in de enquêteresultaten aan.",
      allowImagesPreview: "Geeft indien mogelijk miniatuurvoorbeelden weer voor geüploade bestanden. Schakel de selectie uit als u in plaats daarvan bestandspictogrammen wilt weergeven."
    },
    image: {
      contentMode: "De optie \"Auto\" bepaalt automatisch de geschikte modus voor weergave - Afbeelding, Video of YouTube - op basis van de opgegeven bron-URL."
    },
    imagepicker: {
      imageHeight: "Hiermee worden de minimum- en maximumhoogtewaarden overschreven.",
      imageWidth: "Hiermee worden de waarden voor de minimum- en maximumbreedte overschreven.",
      choices: "\"Waarde\" dient als een item-ID die wordt gebruikt in voorwaardelijke regels; \"Tekst\" wordt getoond aan respondenten.",
      contentMode: "Kies tussen \"Afbeelding\" en \"Video\" om de inhoudsmodus van de mediakiezer in te stellen. Als \"Afbeelding\" is geselecteerd, zorg er dan voor dat alle beschikbare opties afbeeldingsbestanden zijn in de volgende formaten: JPEG, GIF, PNG, APNG, SVG, BMP, ICO. Evenzo, als \"Video\" is geselecteerd, zorg er dan voor dat alle opties directe links zijn naar videobestanden in de volgende formaten: MP4, MOV, WMV, FLV, AVI, MKV. Houd er rekening mee dat YouTube-links niet worden ondersteund voor video-opties."
    },
    text: {
      size: "Deze instelling wijzigt alleen de grootte van het invoerveld en heeft geen invloed op de breedte van het vraagvak. Als u de geaccepteerde invoerlengte wilt beperken, gaat u naar <b>Validatie → Maximale tekenlimiet</b>."
    },
    comment: {
      rows: "Hiermee stelt u het aantal weergegeven regels in het invoerveld in. Als de invoer meer regels in beslag neemt, verschijnt de schuifbalk."
    },
    // survey templates
    survey: {
      readOnly: "Selecteer deze optie als u wilt voorkomen dat respondenten uw enquête invullen.",
      progressBarLocation: "Hiermee stelt u de locatie van de voortgangsbalk in. De waarde \"Auto\" geeft de voortgangsbalk boven of onder de kop van de enquête weer."
    },
    matrixdropdowncolumn: {
      name: "Een kolom-id die niet zichtbaar is voor respondenten.",
      isUnique: "Als deze optie is ingeschakeld voor een kolom, moet een respondent een uniek antwoord geven voor elke vraag in deze kolom.",
      rows: "Hiermee stelt u het aantal weergegeven regels in het invoerveld in. Als de invoer meer regels in beslag neemt, verschijnt de schuifbalk.",
      visibleIf: "Gebruik het pictogram van de toverstaf om een voorwaardelijke regel in te stellen die de zichtbaarheid van de kolom bepaalt.",
      enableIf: "Gebruik het pictogram van de toverstaf om een voorwaardelijke regel in te stellen waarmee de alleen-lezen modus voor de kolom wordt uitgeschakeld.",
      requiredIf: "Gebruik het toverstafpictogram om een voorwaardelijke regel in te stellen die het verzenden van enquêtes verhindert, tenzij ten minste één geneste vraag een antwoord heeft.",
      showInMultipleColumns: "Als deze optie is geselecteerd, wordt er een afzonderlijke kolom gemaakt voor elke keuzeoptie.",
      colCount: "Rangschikt keuzeopties in een lay-out met meerdere kolommen. Als deze optie op 0 staat, worden ze op één regel weergegeven. Wanneer deze is ingesteld op -1, wordt de werkelijke waarde overgenomen van de eigenschap \"Aantal geneste kolommen\" van de bovenliggende matrix."
    },
    caseInsensitive: "Selecteer of hoofdletters en kleine letters in de reguliere expressie als gelijkwaardig moeten worden behandeld.",
    widthMode: "Kies uit: \"Statisch\" - stelt een vaste breedte in; \"Responsief\" - zorgt ervoor dat de enquête de volledige breedte van het scherm in beslag neemt; \"Auto\" - past een van de twee toe, afhankelijk van de gebruikte vraagtypen.",
    cookieName: "Cookies voorkomen dat gebruikers dezelfde enquête twee keer invullen.",
    logo: "Plak een afbeeldingslink (geen maximale grootte) of klik op het mappictogram om door een bestand vanaf uw computer te bladeren (maximaal 64 KB).",
    logoWidth: "Hiermee stelt u de breedte van het logo in CSS-eenheden in (px, %, in, pt, enz.).",
    logoHeight: "Hiermee stelt u de hoogte van een logo in CSS-eenheden in (px, %, in, pt, enz.).",
    logoFit: "Kies uit: \"Geen\" - afbeelding behoudt zijn oorspronkelijke grootte; \"Bevatten\" - het formaat van de afbeelding wordt aangepast aan de beeldverhouding met behoud van de beeldverhouding; \"Omslag\" - afbeelding vult het hele vak met behoud van de beeldverhouding; \"Vullen\" - de afbeelding wordt uitgerekt om het vak te vullen zonder de beeldverhouding te behouden.",
    autoAdvanceEnabled: "Selecteer of u wilt dat de enquête automatisch naar de volgende pagina gaat zodra een respondent alle vragen op de huidige pagina heeft beantwoord. Deze functie is niet van toepassing als de laatste vraag op de pagina een open einde heeft of meerdere antwoorden toestaat.",
    autoAdvanceAllowComplete: "Selecteer of u wilt dat de enquête automatisch wordt ingevuld nadat een respondent alle vragen heeft beantwoord.",
    showNavigationButtons: "Hiermee stelt u de zichtbaarheid en locatie van navigatieknoppen op een pagina in.",
    navigationButtonsLocation: "Hiermee stelt u de locatie van navigatieknoppen op een pagina in.",
    showPreviewBeforeComplete: "Schakel de voorbeeldpagina in met alleen alle of beantwoorde vragen.",
    questionTitleLocation: "Geldt voor alle vragen in de enquête. Deze instelling kan worden overschreven door regels voor titeluitlijning op lagere niveaus: deelvenster, pagina of vraag. Een instelling op een lager niveau heeft voorrang op die op een hoger niveau.",
    requiredMark: "Een symbool of een reeks symbolen die aangeven dat een antwoord vereist is.",
    questionStartIndex: "Voer een cijfer of letter in waarmee u wilt beginnen met nummeren.",
    questionErrorLocation: "Hiermee stelt u de locatie van een foutmelding in ten opzichte van de vraag met ongeldige invoer. Kies tussen: \"Top\" - er wordt een fouttekst bovenaan het vraagvak geplaatst; \"Onderaan\" - er wordt een fouttekst onderaan het vraagvak geplaatst.",
    autoFocusFirstQuestion: "Selecteer of u het eerste invoerveld op elke pagina klaar wilt maken voor tekstinvoer.",
    questionOrder: "Behoudt de oorspronkelijke volgorde van vragen of maakt ze willekeurig. Het effect van deze instelling is alleen zichtbaar op het tabblad Voorbeeld.",
    maxTextLength: "Alleen voor vragen over tekstinvoer.",
    maxCommentLength: "Alleen voor opmerkingen over vragen.",
    commentAreaRows: "Hiermee stelt u het aantal weergegeven regels in tekstgebieden in voor opmerkingen bij vragen. Als de invoer meer regels in beslag neemt, wordt de schuifbalk weergegeven.",
    autoGrowComment: "Selecteer of u wilt dat vraagopmerkingen en lange tekstvragen automatisch in hoogte groeien op basis van de ingevoerde tekstlengte.",
    allowResizeComment: "Alleen voor vraagopmerkingen en lange tekstvragen.",
    calculatedValues: "Aangepaste variabelen dienen als tussenliggende of hulpvariabelen die worden gebruikt in formulierberekeningen. Ze nemen de input van respondenten als bronwaarden. Elke aangepaste variabele heeft een unieke naam en een expressie waarop deze is gebaseerd.",
    includeIntoResult: "Selecteer of u wilt dat de berekende waarde van de expressie samen met de enquêteresultaten wordt opgeslagen.",
    triggers: "Een trigger is een gebeurtenis of voorwaarde die is gebaseerd op een expressie. Zodra de expressie is geëvalueerd naar 'waar', wordt een actie geactiveerd door een trigger. Zo'n actie kan optioneel een doelvraag hebben die het beïnvloedt.",
    clearInvisibleValues: "Kies of u de waarden wilt wissen voor vragen die verborgen zijn door voorwaardelijke logica en wanneer u dit wilt doen.",
    textUpdateMode: "Kies uit: \"Bij verloren focus\" - de waarde wordt bijgewerkt wanneer het invoerveld de focus verliest; \"Tijdens het typen\" - de waarde wordt in realtime bijgewerkt, terwijl gebruikers typen.",
    columns: "De linkerwaarde dient als een kolom-ID die wordt gebruikt in voorwaardelijke regels, de rechterwaarde wordt weergegeven aan respondenten.",
    rows: "De linkerwaarde dient als een rij-ID die wordt gebruikt in voorwaardelijke regels, de rechterwaarde wordt weergegeven aan respondenten.",
    columnMinWidth: "Accepteert CSS-waarden (px, %, in, pt, enz.).",
    rowTitleWidth: "Accepteert CSS-waarden (px, %, in, pt, enz.).",
    totalText: "Alleen zichtbaar als ten minste één kolom het type Totaal of de expressie Totaal heeft.",
    cellErrorLocation: "Hiermee stelt u de locatie van een foutbericht in ten opzichte van een cel met ongeldige invoer. Met de optie 'Overerven' wordt de instelling van de eigenschap 'Uitlijning van foutberichten' toegepast.",
    detailErrorLocation: "Hiermee stelt u de locatie in van foutmeldingen voor vragen die zijn genest in detailsecties. De optie \"Overerven\" past de instelling van de eigenschap \"Uitlijning van foutmeldingen\" toe.",
    keyDuplicationError: "Wanneer de eigenschap 'Dubbele antwoorden voorkomen' is ingeschakeld, ontvangt een respondent die een dubbele vermelding probeert in te dienen, het volgende foutbericht.",
    totalExpression: "Hiermee kunt u totale waarden berekenen op basis van een expressie. De expressie kan basisberekeningen ('{q1_id} + {q2_id}'), Booleaanse expressies ('{age} > 60') en functies ('iif()', 'today()', 'age()', 'min()', 'max()', 'avg()', etc.) bevatten.",
    confirmDelete: "Hiermee wordt gevraagd om het verwijderen van de rij te bevestigen.",
    keyName: "Als de opgegeven kolom identieke waarden bevat, genereert de enquête de fout 'Niet-unieke sleutelwaarde'.",
    description: "Typ een ondertitel.",
    locale: "Kies een taal om te beginnen met het maken van uw enquête. Als u een vertaling wilt toevoegen, schakelt u over naar een nieuwe taal en vertaalt u de originele tekst hier of op het tabblad Vertalingen.",
    detailPanelMode: "Hiermee stelt u de locatie van een detailsectie ten opzichte van een rij in. Kies uit: \"Geen\" - er wordt geen uitbreiding toegevoegd; \"Onder de rij\" - onder elke rij van de matrix wordt een rij-uitbreiding geplaatst; \"Onder de rij, slechts één rij-uitbreiding weergeven\" - een uitbreiding wordt alleen onder een enkele rij weergegeven, de resterende rij-uitbreidingen zijn samengevouwen.",
    imageFit: "Kies uit: \"Geen\" - afbeelding behoudt zijn oorspronkelijke grootte; \"Bevatten\" - het formaat van de afbeelding wordt aangepast aan de beeldverhouding met behoud van de beeldverhouding; \"Omslag\" - afbeelding vult het hele vak met behoud van de beeldverhouding; \"Vullen\" - de afbeelding wordt uitgerekt om het vak te vullen zonder de beeldverhouding te behouden.",
    autoGrow: "Verhoogt geleidelijk de hoogte van het invoerveld terwijl gegevens worden ingevoerd. Hiermee wordt de instelling \"Invoerveldhoogte (in lijnen)\" overschreven.",
    allowResize: "De formaatgreep (of greep) verschijnt in de hoek en kan worden gesleept om de grootte van het invoerveld te wijzigen.",
    timeLimit: "Een tijdsinterval in seconden, waarna de enquête automatisch doorgaat naar de bedankpagina.",
    timeLimitPerPage: "Een tijdsinterval in seconden, waarna de enquête automatisch doorgaat naar de volgende pagina.",
    validateVisitedEmptyFields: "Schakel deze optie in om validatie te activeren wanneer een gebruiker zich richt op een leeg invoerveld en dit vervolgens verlaat zonder wijzigingen aan te brengen.",
    page: {
      name: "Een pagina-ID die niet zichtbaar is voor respondenten.",
      description: "Typ een pagina-ondertitel.",
      navigationTitle: "Een bijschrift dat wordt weergegeven op een navigatieknop in de voortgangsbalk of inhoudsopgave (TOC). Als u dit veld leeg laat, gebruikt de navigatieknop de paginatitel of paginanaam. Om de voortgangsbalk of inhoudsopgave in te schakelen, ga je naar \"Enquête\" → \"Navigatie\".",
      timeLimit: "Een tijdsinterval in seconden, waarna de enquête automatisch doorgaat naar de volgende pagina.",
      visibleIf: "Gebruik het toverstafpictogram om een voorwaardelijke regel in te stellen die de zichtbaarheid van de pagina bepaalt.",
      enableIf: "Gebruik het pictogram van de toverstaf om een voorwaardelijke regel in te stellen waarmee de alleen-lezen modus voor de pagina wordt uitgeschakeld.",
      requiredIf: "Gebruik het toverstafpictogram om een voorwaardelijke regel in te stellen die het verzenden van enquêtes verhindert, tenzij ten minste één geneste vraag een antwoord heeft.",
      questionTitleLocation: "Geldt voor alle vragen op deze pagina. Als je deze instelling wilt overschrijven, definieer je regels voor titeluitlijning voor afzonderlijke vragen of panelen. De optie \"Overnemen\" past de instelling op enquêteniveau toe (\"Top\" standaard).",
      questionTitleWidth: "Hiermee stelt u een consistente breedte in voor vraagtitels wanneer deze links van de vraagvakken zijn uitgelijnd. Accepteert CSS-waarden (px, %, in, pt, enz.).",
      questionErrorLocation: "Hiermee stelt u de locatie van een foutmelding in ten opzichte van de vraag met ongeldige invoer. Kies tussen: \"Top\" - er wordt een fouttekst bovenaan het vraagvak geplaatst; \"Onderaan\" - er wordt een fouttekst onderaan het vraagvak geplaatst. De optie \"Overnemen\" past de instelling op enquêteniveau toe (\"Top\" standaard).",
      questionOrder: "Behoudt de oorspronkelijke volgorde van vragen of maakt ze willekeurig. De optie \"Overerven\" past de instelling op enquêteniveau toe (\"Standaard Origineel\"). Het effect van deze instelling is alleen zichtbaar op het tabblad Voorbeeld.",
      showNavigationButtons: "Hiermee stelt u de zichtbaarheid van navigatieknoppen op de pagina in. De optie \"Overerven\" past de instelling op enquêteniveau toe, die standaard op \"Zichtbaar\" staat.",
      gridLayoutColumns: "Met deze tabel kunt u elke rasterkolom op de pagina configureren. Het stelt automatisch het breedtepercentage voor elke kolom in op basis van het maximale aantal elementen in een rij. Als u de rasterlay-out wilt aanpassen, past u deze waarden handmatig aan en definieert u de titelbreedte voor alle vragen in elke kolom."
    },
    timerLocation: "Hiermee stelt u de locatie van een timer op een pagina in.",
    panelsState: "Kies uit: \"Vergrendeld\" - gebruikers kunnen panelen niet uitvouwen of samenvouwen; \"Alles samenvouwen\" - alle deelvensters beginnen in een samengevouwen toestand; \"Alles uitvouwen\" - alle deelvensters beginnen in een uitgevouwen staat; \"Eerst uitgevouwen\" - alleen het eerste paneel wordt in eerste instantie uitgevouwen.",
    imageLinkName: "Voer de naam van een gedeelde eigenschap in binnen de matrix met objecten die de URL's van afbeeldings- of videobestanden bevat die u in de keuzelijst wilt weergeven.",
    choices: "De linkerwaarde dient als een item-ID die wordt gebruikt in voorwaardelijke regels, de rechterwaarde wordt weergegeven aan respondenten.",
    title: "Typ een gebruiksvriendelijke titel om weer te geven.",
    waitForUpload: "Zorgt ervoor dat gebruikers de enquête pas invullen als de bestanden zijn geüpload.",
    minWidth: "Accepteert CSS-waarden (px, %, in, pt, enz.).",
    maxWidth: "Accepteert CSS-waarden (px, %, in, pt, enz.).",
    width: "Accepteert CSS-waarden (px, %, in, pt, enz.).",
    valueName: "Als u deze eigenschap niet instelt, wordt het antwoord opgeslagen in een veld dat is opgegeven door de eigenschap Name.",
    defaultDisplayValue: "Een waarde die wordt weergegeven in HTML-vragen en in de dynamische titels en beschrijvingen van enquête-elementen wanneer de vraagwaarde leeg is.",
    useDisplayValuesInDynamicTexts: "In vraagtypen met enkelvoudige en meervoudige selectie heeft elke keuzeoptie een ID en weergavewaarde. Als deze instelling is geselecteerd, wordt een weergavewaarde weergegeven in plaats van een ID-waarde in HTML-vragen en dynamische titels en beschrijvingen van enquête-elementen.",
    clearIfInvisible: "Kies of vraagwaarden die verborgen zijn door voorwaardelijke logica al dan niet moeten worden gewist en wanneer u dit wilt doen. Met de optie \"Overnemen\" wordt de instelling op enquêteniveau toegepast (\"Na voltooiing van de enquête\" standaard).",
    choicesFromQuestionMode: "Kies uit: \"Alle\" - kopieert alle keuzemogelijkheden van de geselecteerde vraag; \"Geselecteerd\" - kopieert dynamisch alleen geselecteerde keuzeopties; \"Niet geselecteerd\" - kopieert dynamisch alleen niet-geselecteerde keuzeopties. De opties \"Geen\" en \"Overig\" worden standaard gekopieerd als deze zijn ingeschakeld in de bronvraag.",
    choiceValuesFromQuestion: "In vraagtypen met enkelvoudige en meervoudige selectie heeft elke keuzeoptie een ID en weergavewaarde. Deze instelling geeft aan welke matrixkolom of paneelvraag de ID's moeten bevatten.",
    choiceTextsFromQuestion: "In vraagtypen met enkelvoudige en meervoudige selectie heeft elke keuzeoptie een ID en weergavewaarde. Deze instelling geeft aan welke matrixkolom of paneelvraag de weergaveteksten moet opleveren.",
    allowCustomChoices: "Selecteer deze optie om respondenten hun eigen keuzes te laten toevoegen als de gewenste optie niet beschikbaar is in de vervolgkeuzelijst. Aangepaste keuzes worden slechts tijdelijk opgeslagen voor de duur van de huidige browsersessie.",
    showOtherItem: "Als deze optie is geselecteerd, kunnen gebruikers extra invoer invullen in een apart invulveld.",
    separateSpecialChoices: "Geeft elke speciale keuzeoptie ('Geen', 'Overig', 'Alles selecteren') weer op een nieuwe regel, zelfs bij gebruik van een lay-out met meerdere kolommen.",
    path: "Geef de locatie binnen de servicegegevensset op waar de doelmatrix met objecten zich bevindt. Laat leeg als de URL al naar de array verwijst.",
    choicesbyurl: {
      valueName: " "
    },
    titleName: "Voer een uniforme eigenschapsnaam in binnen de matrix met objecten die de waarden bevat die u in de keuzelijst wilt weergeven.",
    allowEmptyResponse: "Selecteer deze optie om toe te staan dat de service een leeg antwoord of een lege matrix retourneert.",
    choicesVisibleIf: "Gebruik het toverstafpictogram om een voorwaardelijke regel in te stellen die de zichtbaarheid van alle keuzeopties bepaalt.",
    rateValues: "De linkerwaarde dient als een item-ID die wordt gebruikt in voorwaardelijke regels, de rechterwaarde wordt weergegeven aan respondenten.",
    rating: {
      displayMode: "\"Auto\" kiest tussen de modi \"Knoppen\" en \"Dropdown\" op basis van de beschikbare breedte. Wanneer de breedte onvoldoende is om knoppen weer te geven, wordt er een dropdown weergegeven in de vraag."
    },
    valuePropertyName: "Hiermee kunt u vragen verbinden die resultaten opleveren in verschillende formaten. Wanneer dergelijke vragen aan elkaar zijn gekoppeld met behulp van een join-id, worden in deze gedeelde eigenschap geselecteerde vraagwaarden opgeslagen.",
    searchEnabled: "Selecteer of u de inhoud van het vervolgkeuzemenu wilt bijwerken zodat deze overeenkomt met de zoekopdracht die een gebruiker in het invoerveld typt.",
    valueTrue: "Een waarde die moet worden opgeslagen in enquêteresultaten wanneer respondenten een positief antwoord geven.",
    valueFalse: "Een waarde die moet worden opgeslagen in enquêteresultaten wanneer respondenten een negatief antwoord geven.",
    showPreview: "Het wordt niet aanbevolen om deze optie uit te schakelen, omdat deze de voorbeeldafbeelding overschrijft en het voor een gebruiker moeilijk maakt om te begrijpen of de bestanden zijn geüpload.",
    needConfirmRemoveFile: "Hiermee wordt een prompt geactiveerd waarin wordt gevraagd om het verwijderen van het bestand te bevestigen.",
    selectToRankEnabled: "Schakel in om alleen geselecteerde keuzes te rangschikken. Gebruikers slepen geselecteerde items uit de keuzelijst om ze binnen het rangschikkingsgebied te rangschikken.",
    dataList: "Voer een lijst met keuzes in die tijdens de invoer aan de respondent worden voorgesteld.",
    inputSize: "De instelling wijzigt alleen de grootte van de invoervelden en heeft geen invloed op de breedte van het vraagvak.",
    itemTitleWidth: "Hiermee stelt u een consistente breedte in voor alle artikellabels. Accepteert CSS-waarden (px, %, in, pt, enz.).",
    inputTextAlignment: "Selecteer hoe u de invoerwaarde binnen het veld wilt uitlijnen. De standaardinstelling \"Auto\" lijnt de invoerwaarde uit aan de rechterkant als valuta- of numerieke maskering wordt toegepast en aan de linkerkant als dat niet het geval is.",
    altText: "Dient als vervanging wanneer de afbeelding niet kan worden weergegeven op het apparaat van een gebruiker en voor toegankelijkheidsdoeleinden.",
    rateColorMode: "Definieert de kleur van de geselecteerde emoji wanneer het type Beoordelingspictogram is ingesteld op \"Smileys\". Kies tussen: \"Standaard\" - de geselecteerde emoji verschijnt in de standaard enquêtekleur; \"Schaal\" - de geselecteerde emoji erft de kleur van de beoordelingsschaal.",
    expression: {
      name: "Een expressie-ID die niet zichtbaar is voor respondenten.",
      description: "Typ de ondertitel van een expressie.",
      expression: "Een expressie kan basisberekeningen ('{q1_id} + {q2_id}'), voorwaarden ('{leeftijd} > 60') en functies ('iif()', 'vandaag()', 'leeftijd()', 'min()', 'max()', 'gem()', enz.) bevatten."
    },
    storeOthersAsComment: "Selecteer deze optie om de waarde van de optie 'Overig' op te slaan als een afzonderlijke eigenschap in enquêteresultaten.",
    format: "Gebruik {0} als tijdelijke aanduiding voor de werkelijke waarde.",
    acceptedTypes: "Raadpleeg de beschrijving van het kenmerk [accepteren](https://www.w3schools.com/tags/att_input_accept.asp) voor meer informatie.",
    columnColCount: "Alleen van toepassing op de celtypen Radiogroep en selectievakje.",
    autocomplete: "Raadpleeg de [autocomplete](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete) kenmerkbeschrijving voor meer informatie.",
    filePlaceholder: "Van toepassing wanneer \"Brontype\" \"Lokale bestanden\" is of wanneer de camera niet beschikbaar is",
    photoPlaceholder: "Van toepassing wanneer \"Brontype\" \"Camera\" is.",
    fileOrPhotoPlaceholder: "Van toepassing wanneer \"Brontype\" \"Lokale bestanden of camera\" is.",
    colCount: "Rangschikt keuzeopties in een lay-out met meerdere kolommen. Als de optie op 0 staat, worden de opties op één regel weergegeven.",
    masksettings: {
      saveMaskedValue: "Selecteer of u de vraagwaarde met een toegepast masker wilt opslaan in enquêteresultaten."
    },
    patternmask: {
      pattern: "Het patroon kan letterlijke tekenreeksen en de volgende tijdelijke aanduidingen bevatten: '9' - voor een cijfer; \"a\" - voor een hoofdletter of kleine letter; '#' - voor een cijfer of een hoofdletter of kleine letter. Gebruik backslash '\\' om een teken te escapen."
    },
    datetimemask: {
      pattern: "Het patroon kan scheidingstekens en de volgende tijdelijke aanduidingen bevatten:<br>'m' - Maandnummer.<br>'mm' - Maandnummer, met voorloopnul voor eencijferige waarden. <br>'d' - Dag van de maand. <br>'dd' - Dag van de maand, met voorloopnul voor eencijferige waarden. <br>'yy' - De laatste twee cijfers van het jaar. <br>'yyyy' - Viercijferig jaartal. <br>'H' - Uren in 24-uursnotatie. <br>'HH' - Uren in 24-uursnotatie, met voorloopnul voor eencijferige waarden. <br>'h' - Uren in 12-uurs notatie. <br>'hh' - Uren in 12-uursnotatie, met voorloopnul voor eencijferige waarden. <br>\"MM\" - Notulen. <br>'ss' - Seconden. <br>'TT' - 12-uurs kloktijd in hoofdletters (AM/PM). <br>'tt' - 12-uurs kloktijd in kleine letters (am/pm)."
    },
    numericmask: {
      decimalSeparator: "Een symbool dat wordt gebruikt om het fractionele deel te scheiden van het gehele deel van een weergegeven getal.",
      thousandsSeparator: "Een symbool dat wordt gebruikt om de cijfers van een groot getal in groepen van drie te scheiden.",
      precision: "Hiermee beperkt u het aantal cijfers dat moet worden behouden na de komma voor een weergegeven getal."
    },
    currencymask: {
      prefix: "Een of meer symbolen die vóór de waarde moeten worden weergegeven.",
      suffix: "Een of meer symbolen die na de waarde moeten worden weergegeven."
    },
    theme: {
      isPanelless: "Deze instelling is alleen van toepassing op vragen buiten een panel.",
      primaryColor: "Hiermee stelt u een extra kleur in die de belangrijkste enquête-elementen markeert.",
      panelBackgroundTransparency: "Hiermee past u de transparantie van deelvensters en vraagvakken aan ten opzichte van de achtergrond van de enquête.",
      questionBackgroundTransparency: "Hiermee past u de transparantie van invoerelementen aan ten opzichte van de achtergrond van de enquête.",
      cornerRadius: "Hiermee stelt u de hoekradius in voor alle rechthoekige elementen. Schakel de geavanceerde modus in als u afzonderlijke hoekradiuswaarden wilt instellen voor invoerelementen of deelvensters en vraagvakken.",
      "--sjs-general-backcolor-dim": "Hiermee stelt u de hoofdachtergrondkleur van de enquête in."
    },
    header: {
      inheritWidthFrom: "Met de optie \"Zelfde als container\" wordt de breedte van het inhoudsgebied van de koptekst automatisch aangepast aan het HTML-element waarin de enquête wordt geplaatst.",
      textAreaWidth: "De breedte van het koptekstgebied dat de titel en beschrijving van de enquête bevat, gemeten in pixels.",
      overlapEnabled: "Als deze optie is ingeschakeld, overlapt de bovenkant van de enquête de onderkant van de koptekst.",
      mobileHeight: "Als deze optie is ingesteld op 0, wordt de hoogte automatisch berekend om de inhoud van de koptekst te accommoderen."
    },
    progressBarInheritWidthFrom: "Met de optie \"Zelfde als container\" wordt de breedte van het gebied van de voortgangsbalk automatisch aangepast aan het HTML-element waarin de enquête is geplaatst."
  },
  // Properties
  p: {
    title: {
      name: "Titel",
      title: "Laat het leeg als het hetzelfde is als 'Naam'"
    },
    multiSelect: "Meerdere selecties toestaan",
    showLabel: "Afbeeldingsbijschriften weergeven",
    swapOrder: "Verwissel de volgorde van Ja en Nee",
    value: "Waarde",
    tabAlign: "Uitlijning van tabbladen",
    sourceType: "Type bron",
    fitToContainer: "Aanpassen aan container",
    setValueExpression: "Expressie van ingestelde waarde",
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
    defaultValueExpression: "Standaardwaarde-expressie",
    requiredIf: "Vereist als",
    resetValueIf: "Waarde opnieuw instellen als",
    setValueIf: "Stel de waarde in als",
    validators: "Validators",
    bindings: "Bindings",
    renderAs: "Renderen als",
    attachOriginalItems: "Voeg originele items toe",
    choices: "Keuzes",
    choicesByUrl: "Keuzes per url",
    currency: "Valuta",
    cellHint: "Hint voor cel",
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
    inputSize: "Item grootte",
    itemTitleWidth: "Breedte artikellabel (in px)",
    inputTextAlignment: "Uitlijning van invoerwaarden",
    elements: "Elementen",
    content: "Tevreden",
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
    mobileHeight: "Hoogte op smartphones",
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
    selectToRankEmptyRankedAreaText: "Tekst om aan te geven of alle opties zijn geselecteerd",
    selectToRankEmptyUnrankedAreaText: "Tijdelijke tekst voor het rangschikkingsgebied",
    allowCameraAccess: "Toegang tot de camera toestaan",
    scaleColorMode: "Kleurmodus schalen",
    rateColorMode: "Kleurmodus beoordelen",
    copyDisplayValue: "Weergavewaarde kopiëren",
    effectiveColSpan: "Kolom spanwijdte",
    progressBarInheritWidthFrom: "Breedte van het voortgangsbalkgebied"
  },
  theme: {
    advancedMode: "Geavanceerde modus",
    pageTitle: "Lettertype voor paginatitel",
    questionTitle: "Lettertype voor de titel van de vraag",
    editorPanel: "Invoerelement",
    lines: "Lijnen",
    primaryDefaultColor: "Verstek",
    primaryDarkColor: "Zweven",
    primaryLightColor: "Uitverkoren",
    backgroundDimColor: "Achtergrondkleur",
    cornerRadius: "De straal van de hoek",
    backcolor: "Standaard achtergrond",
    hovercolor: "Achtergrond aanwijzen",
    borderDecoration: "Randdecoratie",
    fontColor: "Tekstkleur",
    backgroundColor: "Achtergrondkleur",
    primaryForecolor: "Standaardkleur",
    primaryForecolorLight: "Uitgeschakelde kleur",
    font: "Lettertype",
    borderDefault: "Donkerder",
    borderLight: "Aansteker",
    fontFamily: "Lettertype familie",
    fontWeightRegular: "Regelmatig",
    fontWeightHeavy: "Zwaar",
    fontWeightSemiBold: "Semi-vet",
    fontWeightBold: "Brutaal",
    color: "Kleur",
    placeholderColor: "Tijdelijke aanduiding voor kleur",
    size: "Grootte",
    opacity: "Dekking",
    boxShadowX: "X",
    boxShadowY: "Y",
    boxShadowAddRule: "Schaduweffect toevoegen",
    boxShadowBlur: "Vervagen",
    boxShadowSpread: "Verspreiden",
    boxShadowDrop: "Druppel",
    boxShadowInner: "Binnenste",
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
      green: "Groen",
      gray: "Grijs"
    }
  },
  creatortheme: {
    "--sjs-special-background": "Oppervlakte achtergrond",
    "--sjs-primary-background-500": "Primair",
    "--sjs-secondary-background-500": "Secundair",
    surfaceScale: "Oppervlak",
    userInterfaceBaseUnit: "Gebruikersinterface",
    fontScale: "Lettertype",
    names: {
      sc2020: "Enquête maken 2020",
      "default-light": "Licht",
      "default-dark": "Donker",
      "default-contrast": "Tegenstelling"
    }
  }
};
setupLocale({ localeCode: "nl", strings: nlStrings });

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
// lg.trigger_setvalueEmptyText: "clear question value: {0}" => "verwijder vraagwaarde: {0}"
// lg.showAllQuestions: "All Questions" => "Alle vragen"
// lg.showAllActionTypes: "All Action Types" => "Alle actietypen"
// lg.uncompletedRule_title: "Logical rules are incomplete" => "Logische regels zijn onvolledig"
// lg.uncompletedRule_text: "You have not completed some of the logical rules. If you leave the tab now, the changes will be lost. Do you still want to leave the tab without completing the changes?" => "U hebt een aantal van de logische regels niet voltooid. Als u het tabblad nu verlaat, gaan de wijzigingen verloren. Wilt u het tabblad nog steeds verlaten zonder de wijzigingen te voltooien?"
// lg.uncompletedRule_apply: "Yes" => "Ja"
// lg.uncompletedRule_cancel: "No, I want to complete the rules" => "Nee, ik wil de regels invullen"
// pe.clear: "Clear" => "Verwijder alles"
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
// page.timeLimit: "Time limit to finish the page (in seconds)" => "Tijdslimiet om de pagina te voltooien (in seconden)"
// question.page: "Parent page" => "Bovenliggende pagina"
// pe.noEntriesText: "Empty entries text" => "Lege invoertekst"
// pe.setValue: "Answer" => "Antwoorden"
// pe.dataFormat: "Image format" => "Beeldformaat"
// pe.allowAddRows: "Allow adding rows" => "Het toevoegen van rijen toestaan"
// pe.allowRemoveRows: "Allow removing rows" => "Het verwijderen van rijen toestaan"
// pe.allowRowReorder: "Allow row drag and drop" => "Rij slepen en neerzetten toestaan"
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
// pe.prevPanelText: "Previous Panel button tooltip" => "Knopinfo vorige deelvensterknop"
// pe.nextPanelText: "Next Panel button tooltip" => "knopinfo voor het volgende deelvenster"
// pe.showRangeInProgress: "Show progress bar" => "Voortgangsbalk weergeven"
// pe.templateQuestionTitleLocation: "Question title location" => "Locatie van de vraagtitel"
// pe.removePanelButtonLocation: "Remove Panel button location" => "Locatie van de knop Deelvenster verwijderen"
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
// pe.showNumber: "Show panel number" => "Toon paneelnummer"
// pe.readOnly: "Read-only" => "Alleen-lezen"
// pe.enableIf: "Editable if" => "Bewerkbaar als"
// pe.noRowsText: "\"No rows\" message" => "Bericht 'Geen rijen'"
// pe.size: "Input field size (in characters)" => "Grootte invoerveld (in tekens)"
// pe.separateSpecialChoices: "Separate special choices (None, Other, Select All)" => "Speciale keuzes afzonderlijk (Geen, Overig, Alles selecteren)"
// pe.choicesFromQuestion: "Copy choices from the following question" => "Kopieer keuzes uit de volgende vraag"
// pe.choicesFromQuestionMode: "Which choices to copy?" => "Welke keuzes kopiëren?"
// pe.showCommentArea: "Show the comment area" => "Het opmerkingenveld weergeven"
// pe.commentPlaceholder: "Comment area placeholder" => "Tijdelijke aanduiding voor het opmerkingengebied"
// pe.displayRateDescriptionsAsExtremeItems: "Display rate descriptions as extreme values" => "Beschrijvingen van tarieven weergeven als extreme waarden"
// pe.rowOrder: "Row order" => "Rijvolgorde"
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
// addRowButtonLocation.default: "Depends on matrix layout" => "Afhankelijk van de matrixindeling"
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
// theme.groupAdvanced: "Advanced" => "Geavanceerd"
// theme.themeName: "Theme" => "Thema"
// theme.isPanellessss: "Question appearance" => "Uiterlijk van de vraag"
// theme.isPanellessPanels: "Default" => "Verstek"
// theme.isPanellessLightweight: "Without Panels" => "Zonder panelen"
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
// theme.surveyTitleFont: "Survey title font" => "Lettertype voor enquêtetitel"
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
// names.sharp: "Sharp" => "Scherp"
// names.borderless: "Borderless" => "Grenzeloos"
// names.flat: "Flat" => "Plat"
// names.doubleborder: "Double Border" => "Dubbele rand"
// names.layered: "Layered" => "Gelaagd"
// names.solid: "Solid" => "Degelijk"
// names.threedimensional: "3D" => ".3D"
// ed.translationDeleteLanguage: "Are you certain you wish to delete all strings for this language?" => "Weet u zeker dat u alle tekenreeksen voor deze taal wilt verwijderen?"
// ed.themeResetButton: "Reset theme settings to default" => "Thema-instellingen terugzetten op de standaardinstellingen"
// theme.placeholderColor: "Placeholder color" => "Kleur van tijdelijke aanduiding"
// ed.themeSettings: "Theme Settings" => "Thema-instellingen"
// ed.themeSettingsTooltip: "Open theme settings" => "Thema-instellingen openen"
// pe.resetToDefaultCaption: "Reset" => "Terugstellen"
// pv.file: "Local files" => "Lokale bestanden"
// pv.camera: "Camera" => "Fototoestel"
// pv.file-camera: "Local files or camera" => "Lokale bestanden of camera"
// ed.translateUsigAI: "Auto-translate All" => "Alles automatisch vertalen"
// ed.translationDialogTitle: "Untranslated strings" => "Onvertaalde tekenreeksen"
// pe.fastEntryChoicesMinCountError: "Please enter at least {0} items" => "Voer ten minste {0} objecten in"
// lg.question_resetValueName: "Reset question value" => "Vraagwaarde opnieuw instellen"
// lg.column_resetValue: "Reset column value" => "Kolomwaarde opnieuw instellen"
// pe.markRequired: "Mark as required" => "Markeren zoals vereist"
// pe.removeRequiredMark: "Remove the required mark" => "Verwijder de vereiste markering"
// p.resetValueIf: "Reset value if" => "Waarde opnieuw instellen als"
// lg.question_setValueName: "Set question value" => "Vraagwaarde instellen"
// lg.column_resetValueName: "Reset column value" => "Kolomwaarde opnieuw instellen"
// lg.column_setValueName: "Set column value" => "Kolomwaarde instellen"
// lg.setValueExpressionPlaceholder: " An expression whose result will be assigned to the target question." => " Een expressie waarvan het resultaat wordt toegewezen aan de doelvraag."
// survey.title: "Title" => "Titel"
// page.title: "Title" => "Titel"
// p.setValueIf: "Set value if" => "Stel de waarde in als"
// theme.header: "Header" => "Rubriek"
// theme.backgroundImageFitFill: "Stretch" => "Strekken"
// theme.backgroundImageFitTile: "Tile" => "Tegel"
// theme.headerView: "View" => "Bekijken"
// theme.headerViewBasic: "Basic" => "Basisch"
// theme.headerViewAdvanced: "Advanced" => "Geavanceerd"
// theme.headerInheritWidthFrom: "Content area width" => "Breedte van het inhoudsgebied"
// theme.headerInheritWidthFromSurvey: "Same as survey" => "Hetzelfde als enquête"
// theme.headerInheritWidthFromPage: "Fit to page" => "Aanpassen aan pagina"
// theme.headerTextAreaWidth: "Text width" => "Tekstbreedte"
// theme.headerBackgroundColorSwitch: "Background color" => "Achtergrondkleur"
// theme.headerBackgroundColorNone: "None" => "Geen"
// theme.headerBackgroundColorAccentColor: "Accent color" => "Accentkleur"
// theme.headerBackgroundColorCustom: "Custom" => "Gewoonte"
// theme.horizontalAlignmentLeft: "Left" => "Links"
// theme.horizontalAlignmentCenter: "Center" => "Middelpunt"
// theme.horizontalAlignmentRight: "Right" => "Rechts"
// theme.verticalAlignmentTop: "Top" => "Boven"
// theme.verticalAlignmentMiddle: "Middle" => "Midden"
// theme.verticalAlignmentBottom: "Bottom" => "Bodem"
// theme.logoPosition: "Logo Position" => "Logo positie"
// theme.headerTitlePosition: "Title Position" => "Titel positie"
// lg.question_resetValueText: "reset value for question: {0}" => "Resetwaarde voor vraag: {0}"
// lg.question_setValueText: "assign value: {1} to question: {0}" => "Waarde: {1} toewijzen aan vraag: {0}"
// lg.column_resetValueText: "reset cell value for column: {0}" => "Celwaarde voor kolom opnieuw instellen: {0}"
// lg.column_setValueText: "assign cell value: {1} to column: {0}" => "Celwaarde: {1} toewijzen aan kolom: {0}"
// ed.surveyJsonExportButton: "Export" => "Exporteren"
// ed.surveyJsonImportButton: "Import" => "Importeren"
// ed.surveyJsonCopyButton: "Copy to clipboard" => "Naar klembord kopiëren"
// pe.filePlaceholder: "File placeholder text" => "Tijdelijke tekst voor bestanden"
// pe.photoPlaceholder: "Photo placeholder text" => "Tijdelijke tekst voor foto's"
// pe.fileOrPhotoPlaceholder: "File or photo placeholder text" => "Tijdelijke tekst voor bestanden of foto's"
// pehelp.filePlaceholder: "Applies when \"Source type\" is \"Local files\" or when camera is unavailable" => "Van toepassing wanneer \"Brontype\" \"Lokale bestanden\" is of wanneer de camera niet beschikbaar is"
// pehelp.photoPlaceholder: "Applies when \"Source type\" is \"Camera\"." => "Van toepassing wanneer \"Brontype\" \"Camera\" is."
// pehelp.fileOrPhotoPlaceholder: "Applies when \"Source type\" is \"Local files or camera\"." => "Van toepassing wanneer \"Brontype\" \"Lokale bestanden of camera\" is."
// theme.background: "Background" => "Achtergrond"
// theme.appearance: "Appearance" => "Uiterlijk"
// ed.themeResetConfirmation: "Do you really want to reset the theme? All your customizations will be lost." => "Wil je het thema echt resetten? Al uw aanpassingen gaan verloren."
// ed.themeResetConfirmationOk: "Yes, reset the theme" => "Ja, reset het thema"
// theme.headerInheritWidthFromContainer: "Fit to container" => "Geschikt voor containers"
// signaturepad.showPlaceholder: "Show the placeholder" => "De tijdelijke aanduiding weergeven"
// signaturepad.placeholder: "Placeholder text" => "Tijdelijke aanduiding voor tekst"
// theme.surveyDescriptionFont: "Survey description font" => "Lettertype met enquêtebeschrijving"

// ed.prevFocus: "Focus previous" => "Focus vorige"
// ed.nextFocus: "Focus next" => "Focus volgende"
// ed.saveTheme: "Save Theme" => "Thema opslaan"
// ed.saveThemeTooltip: "Save Theme" => "Thema opslaan"
// lg.page_requireName: "Make page required" => "Pagina verplicht maken"
// lg.panel_requireName: "Make page required" => "Pagina verplicht maken"
// signaturepad.signatureWidth: "Signature area width" => "Breedte van het handtekeninggebied"
// signaturepad.signatureHeight: "Signature area height" => "Hoogte van het handtekeninggebied"
// signaturepad.signatureAutoScaleEnabled: "Auto-scale the signature area" => "Het handtekeninggebied automatisch schalen"
// signaturepad.penMinWidth: "Minimum pen width" => "Minimale penbreedte"
// signaturepad.penMaxWidth: "Maximum pen width" => "Maximale breedte van het hok"
// theme.headerDescriptionPosition: "Description position" => "Beschrijving positie"
// ed.propertyGridNoResultsFound: "No results found" => "Geen resultaten gevonden"
// pv.leftRight: "Left and right" => "Links en rechts"
// p.sourceType: "Source type" => "Type bron"
// p.fitToContainer: "Fit to container" => "Aanpassen aan container"
// p.setValueExpression: "Set value expression" => "Expressie van ingestelde waarde"
// ed.choicesLoadedFromWebText: "Choices are loaded from a web service." => "Keuzes worden geladen vanuit een webservice."
// ed.choicesLoadedFromWebLinkText: "Go to settings" => "Ga naar instellingen"
// ed.choicesLoadedFromWebPreviewTitle: "Preview of loaded choice options" => "Voorbeeld van geladen keuzeopties"
// pe.eachRowUnique: "Prevent duplicate responses in rows" => "Voorkom dubbele antwoorden in rijen"
// theme.advancedMode: "Advanced mode" => "Geavanceerde modus"
// theme.backgroundCornerRadius: "Background and corner radius" => "Achtergrond en hoekradius"
// theme.colorsTitle: "Colors" => "Kleuren"
// theme.font: "Font" => "Lettertype"
// theme.lines: "Lines" => "Lijnen"
// theme.titleFont: "Title font" => "Titel lettertype"
// theme.descriptionFont: "Description font" => "Beschrijving lettertype"
// theme.shadow: "Shadow effects" => "Schaduweffecten"
// ed.translateUsigAIFrom: "Translate from: " => "Vertalen van: "
// pe.showRefuseItem: "Allow the Refuse to Answer option" => "De optie Weigeren om te antwoorden toestaan"
// pe.showDontKnowItem: "Allow the Don't Know option" => "De optie 'Weet niet' toestaan"
// pe.showRefuseItem: "Allow the Refuse to Answer option" => "De optie Weigeren om te antwoorden toestaan"
// pe.showDontKnowItem: "Allow the Don't Know option" => "De optie 'Weet niet' toestaan"
// pv.contain: "Contain" => "Bevatten"
// pv.cover: "Cover" => "Bedekken"
// pv.fill: "Fill" => "Vullen"

// pe.transposeData: "Transpose rows to columns" => "Rijen transponeren naar kolommen"
// layout.panel: "Layout" => "Indeling"
// layout.question: "Layout" => "Indeling"
// layout.base: "Layout" => "Indeling"
// panel.name: "Panel name" => "Naam van het paneel"
// panel.title: "Panel title" => "Titel van het paneel"
// panel.description: "Panel description" => "Beschrijving van het paneel"
// panel.visibleIf: "Make the panel visible if" => "Maak het paneel zichtbaar als"
// panel.requiredIf: "Make the panel required if" => "Maak het paneel vereist als"
// panel.questionOrder: "Question order within the panel" => "Volgorde van de vragen binnen het panel"
// panel.startWithNewLine: "Display the panel on a new line" => "Het paneel op een nieuwe regel weergeven"
// panel.state: "Panel collapse state" => "Status van paneel samenvouwen"
// panel.width: "Inline panel width" => "Inline paneelbreedte"
// panel.minWidth: "Minimum panel width" => "Minimale paneelbreedte"
// panel.maxWidth: "Maximum panel width" => "Maximale paneelbreedte"
// paneldynamic.name: "Panel name" => "Naam van het paneel"
// paneldynamic.title: "Panel title" => "Titel van het paneel"
// paneldynamic.description: "Panel description" => "Beschrijving van het paneel"
// paneldynamic.visibleIf: "Make the panel visible if" => "Maak het paneel zichtbaar als"
// paneldynamic.requiredIf: "Make the panel required if" => "Maak het paneel vereist als"
// paneldynamic.page: "Move the panel to page" => "Het deelvenster naar pagina verplaatsen"
// paneldynamic.startWithNewLine: "Display the panel on a new line" => "Het paneel op een nieuwe regel weergeven"
// paneldynamic.state: "Panel collapse state" => "Status van paneel samenvouwen"
// paneldynamic.width: "Inline panel width" => "Inline paneelbreedte"
// paneldynamic.minWidth: "Minimum panel width" => "Minimale paneelbreedte"
// paneldynamic.maxWidth: "Maximum panel width" => "Maximale paneelbreedte"
// paneldynamic.templateDescription: "Panel description pattern" => "Patroon van paneelbeschrijving"
// paneldynamic.templateTitle: "Panel title pattern" => "Patroon voor paneeltitel"
// paneldynamic.noEntriesText: "Empty panel text" => "Lege paneeltekst"
// paneldynamic.templateTabTitle: "Tab title pattern" => "Patroon voor tabbladtitel"
// paneldynamic.templateVisibleIf: "Make an individual panel visible if" => "Maak een afzonderlijk paneel zichtbaar als"
// paneldynamic.hideNumber: "Hide the panel number" => "Het paneelnummer verbergen"
// paneldynamic.titleLocation: "Panel title alignment" => "Uitlijning van paneeltitels"
// paneldynamic.descriptionLocation: "Panel description alignment" => "Uitlijning van paneelbeschrijving"
// paneldynamic.templateQuestionTitleLocation: "Question title alignment" => "Uitlijning van vraagtitels"
// paneldynamic.templateErrorLocation: "Error message alignment" => "Uitlijning van foutmeldingen"
// paneldynamic.newPanelPosition: "New panel location" => "Nieuwe paneellocatie"
// paneldynamic.keyName: "Prevent duplicate responses in the following question" => "Voorkom dubbele antwoorden in de volgende vraag"
// question.name: "Question name" => "Naam van de vraag"
// question.title: "Question title" => "Titel van de vraag"
// question.description: "Question description" => "Beschrijving van de vraag"
// question.visibleIf: "Make the question visible if" => "Maak de vraag zichtbaar als"
// question.requiredIf: "Make the question required if" => "Maak de vraag verplicht als"
// question.state: "Question box collapse state" => "Samenvouwen van vragenvak"
// question.hideNumber: "Hide the question number" => "Verberg het vraagnummer"
// question.titleLocation: "Question title alignment" => "Uitlijning van vraagtitels"
// question.descriptionLocation: "Question description alignment" => "Uitlijning van vraagbeschrijvingen"
// question.errorLocation: "Error message alignment" => "Uitlijning van foutmeldingen"
// question.indent: "Increase the inner indent" => "Vergroot de binnenste inspringing"
// question.width: "Inline question width" => "Breedte inline vraag"
// question.minWidth: "Minimum question width" => "Minimale vraagbreedte"
// question.maxWidth: "Maximum question width" => "Maximale vraagbreedte"
// question.textUpdateMode: "Update input field value" => "Invoerveldwaarde bijwerken"
// signaturepad.allowClear: "Show the Clear button within signature area" => "De knop Wissen weergeven in het handtekeninggebied"
// signaturepad.penColor: "Stroke color" => "Kleur van de lijn"
// comment.rows: "Input field height (in lines)" => "Hoogte invoerveld (in lijnen)"
// expression.name: "Expression name" => "Naam van expressie"
// expression.title: "Expression title" => "Titel van expressie"
// expression.description: "Expression description" => "Beschrijving van expressie"
// expression.expression: "Expression" => "Uitdrukking"
// trigger.expression: "Expression" => "Uitdrukking"
// calculatedvalue.expression: "Expression" => "Uitdrukking"
// survey.description: "Survey description" => "Beschrijving van de enquête"
// page.name: "Page name" => "Paginanaam"
// page.description: "Page description" => "Pagina beschrijving"
// page.visibleIf: "Make the page visible if" => "Maak de pagina zichtbaar als"
// page.requiredIf: "Make the page required if" => "Maak de pagina vereist als"
// page.questionOrder: "Question order on the page" => "Volgorde van vragen op de pagina"
// matrixdropdowncolumn.name: "Column name" => "Naam van de kolom"
// matrixdropdowncolumn.title: "Column title" => "Titel van de kolom"
// matrixdropdowncolumn.isUnique: "Prevent duplicate responses" => "Voorkom dubbele reacties"
// matrixdropdowncolumn.width: "Column width" => "Kolombreedte"
// matrixdropdowncolumn.minWidth: "Minimum column width" => "Minimale kolombreedte"
// matrixdropdowncolumn.rows: "Input field height (in lines)" => "Hoogte invoerveld (in lijnen)"
// matrixdropdowncolumn.visibleIf: "Make the column visible if" => "Maak de kolom zichtbaar als"
// matrixdropdowncolumn.requiredIf: "Make the column required if" => "Maak de kolom verplicht als"
// matrixdropdowncolumn.showInMultipleColumns: "Each option in a separate column" => "Elke optie in een aparte kolom"
// multipletextitem.name: "Name" => "Naam"
// multipletextitem.title: "Title" => "Titel"
// pe.rateDescriptionLocation: "Label alignment" => "Etiket uitlijnen"
// pe.cellErrorLocation: "Cell error message alignment" => "Uitlijning van celfoutmeldingen"
// pe.listIsEmpty@columns: "You don't have any columns yet" => "Je hebt nog geen kolommen"
// pe.listIsEmpty@rows: "You don't have any rows yet" => "Je hebt nog geen rijen"
// pe.listIsEmpty@validators: "You don't have any validation rules yet" => "Je hebt nog geen validatieregels"
// pe.listIsEmpty@calculatedValues: "You don't have any custom variables yet" => "Je hebt nog geen aangepaste variabelen"
// pe.listIsEmpty@triggers: "You don't have any triggers yet" => "Je hebt nog geen triggers"
// pe.listIsEmpty@navigateToUrlOnCondition: "You don't have any links yet" => "Je hebt nog geen links"
// pe.addNew@columns: "Add new column" => "Nieuwe kolom toevoegen"
// pe.addNew@rows: "Add new row" => "Nieuwe rij toevoegen"
// pe.addNew@validators: "Add new rule" => "Nieuwe regel toevoegen"
// pe.addNew@calculatedValues: "Add new variable" => "Nieuwe variabele toevoegen"
// pe.addNew@triggers: "Add new trigger" => "Nieuwe trigger toevoegen"
// pe.addNew@navigateToUrlOnCondition: "Add new URL" => "Nieuwe URL toevoegen"
// choicesbyurl.url: "Web service's URL" => "URL van de webservice"
// pe.progressBarShowPageTitles: "Display page titles in progress bar" => "Paginatitels weergeven in de voortgangsbalk"
// pe.progressBarShowPageNumbers: "Display page numbers in progress bar" => "Paginanummers weergeven in de voortgangsbalk"
// itemvalue.visibleIf: "Make the option visible if" => "Maak de optie zichtbaar als"
// itemvalue.enableIf: "Make the option selectable if" => "Maak de optie selecteerbaar als"
// panel.layout: "Panel Layout" => "Paneel Lay-out"
// tabs.questionSettings: "Question Settings" => "Vraag-instellingen"
// pe.url_placeholder: "Ex.: https://api.example.com/books" => "Vb.: https://api.example.com/books"
// pe.path_placeholder: "Ex.: categories.fiction" => "Vb.: categories.fiction"
// pe.questionStartIndex_placeholder: "Ex.: a)" => "Vb.: a)"
// pe.width_placeholder: "Ex.: 6in" => "Bijv.: 6in"
// pe.minWidth_placeholder: "Ex.: 600px" => "Bijv.: 600px"
// pe.maxWidth_placeholder: "Ex.: 50%" => "Vb.: 50%"
// pv.selected: "Selected" => "Uitverkoren"
// pv.unselected: "Unselected" => "Geselecteerd"
// pv.center: "Center" => "Middelpunt"
// pv.middle: "Middle" => "Midden"
// pv.next: "Next" => "Volgend"
// pv.last: "Last" => "Laatste"
// clearIfInvisible.none: "Never" => "Nooit"
// questionsOnPageMode.standard: "Original structure" => "Oorspronkelijke structuur"
// questionsOnPageMode.singlePage: "Show all questions on one page" => "Toon alle vragen op één pagina"
// questionsOnPageMode.questionPerPage: "Show single question per page" => "Toon één vraag per pagina"
// pv.auto: "Auto" => "Auto"
// panelsState.firstExpanded: "First expanded" => "Eerst uitgebreid"
// rateColorMode.scale: "Scale" => "Schub"
// scaleColorMode.monochrome: "Monochrome" => "Monochroom"
// scaleColorMode.colored: "Colored" => "Gekleurd"
// state.default: "Locked" => "Op slot"
// showQuestionNumbers.default: "Auto-numbering" => "Automatische nummering"
// showQuestionNumbers.on: "Auto-numbering" => "Automatische nummering"
// showQuestionNumbers.onPage: "Reset on each page" => "Reset op elke pagina"
// showQuestionNumbers.onpanel: "Reset on each panel" => "Reset op elk paneel"
// showQuestionNumbers.onPanel: "Reset on each panel" => "Reset op elk paneel"
// showQuestionNumbers.onSurvey: "Continue across the survey" => "Doorgaan in de enquête"
// showQuestionNumbers.off: "No numbering" => "Geen nummering"
// descriptionLocation.underTitle: "Under the question title" => "Onder de titel van de vraag"
// descriptionLocation.underInput: "Under the input field" => "Onder het invoerveld"
// selectToRankAreasLayout.horizontal: "Next to choices" => "Naast keuzes"
// selectToRankAreasLayout.vertical: "Above choices" => "Bovenstaande keuzes"
// displayStyle.decimal: "Decimal" => "Decimaal"
// displayStyle.currency: "Currency" => "Valuta"
// displayStyle.percent: "Percentage" => "Percentage"
// displayStyle.date: "Date" => "Datum"
// totalDisplayStyle.decimal: "Decimal" => "Decimaal"
// totalDisplayStyle.currency: "Currency" => "Valuta"
// totalDisplayStyle.percent: "Percentage" => "Percentage"
// totalDisplayStyle.date: "Date" => "Datum"
// rowOrder.initial: "Original" => "Origineel"
// questionOrder.initial: "Original" => "Origineel"
// showProgressBar.aboveheader: "Above the header" => "Boven de koptekst"
// showProgressBar.belowheader: "Below the header" => "Onder de kop"
// pv.sum: "Sum" => "Som"
// pv.count: "Count" => "Tellen"
// pv.min: "Min" => "Min"
// pv.max: "Max" => "Max"
// pv.avg: "Avg" => "Avg"
// searchMode.contains: "Contains" => "Bevat"
// searchMode.startsWith: "Starts with" => "Begint met"
// panel.name: "A panel ID that is not visible to respondents." => "Een panel-ID die niet zichtbaar is voor respondenten."
// panel.description: "Type a panel subtitle." => "Typ een ondertitel in het deelvenster."
// panel.visibleIf: "Use the magic wand icon to set a conditional rule that determines panel visibility." => "Gebruik het pictogram van de toverstaf om een voorwaardelijke regel in te stellen die de zichtbaarheid van het deelvenster bepaalt."
// panel.enableIf: "Use the magic wand icon to set a conditional rule that disables the read-only mode for the panel." => "Gebruik het pictogram van de toverstaf om een voorwaardelijke regel in te stellen die de alleen-lezen modus voor het deelvenster uitschakelt."
// panel.requiredIf: "Use the magic wand icon to set a conditional rule that prevents survey submission unless at least one nested question has an answer." => "Gebruik het toverstafpictogram om een voorwaardelijke regel in te stellen die het verzenden van enquêtes verhindert, tenzij ten minste één geneste vraag een antwoord heeft."
// panel.questionTitleLocation: "Applies to all questions within this panel. If you want to override this setting, define title alignment rules for individual questions. The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Top\" by default)." => "Geldt voor alle vragen binnen dit panel. Als u deze instelling wilt overschrijven, definieert u regels voor titeluitlijning voor afzonderlijke vragen. De optie \"Overnemen\" past de instelling op paginaniveau (indien ingesteld) of enquêteniveau (\"Standaard bovenaan\") toe."
// panel.questionErrorLocation: "Sets the location of an error message in relation to all questions within the panel. The \"Inherit\" option applies the page-level (if set) or survey-level setting." => "Hiermee stelt u de locatie van een foutmelding in met betrekking tot alle vragen in het panel. De optie \"Overnemen\" past de instelling op paginaniveau (indien ingesteld) of enquêteniveau toe."
// panel.questionOrder: "Keeps the original order of questions or randomizes them. The \"Inherit\" option applies the page-level (if set) or survey-level setting." => "Behoudt de oorspronkelijke volgorde van vragen of maakt ze willekeurig. De optie \"Overnemen\" past de instelling op paginaniveau (indien ingesteld) of enquêteniveau toe."
// panel.page: "Repositions the panel to the end of a selected page." => "Hiermee verplaatst u het deelvenster naar het einde van een geselecteerde pagina."
// panel.innerIndent: "Adds space or margin between the panel content and the left border of the panel box." => "Hiermee voegt u ruimte of marge toe tussen de inhoud van het deelvenster en de linkerrand van het deelvenstervak."
// panel.startWithNewLine: "Unselect to display the panel in one line with the previous question or panel. The setting doesn't apply if the panel is the first element in your form." => "Schakel de optie uit om het deelvenster op één regel weer te geven met de vorige vraag of het vorige deelvenster. De instelling is niet van toepassing als het deelvenster het eerste element in uw formulier is."
// panel.state: "Choose from: \"Expanded\" - the panel is displayed in full and can be collapsed; \"Collapsed\" - the panel displays only the title and description and can be expanded; \"Locked\" - the panel is displayed in full and cannot be collapsed." => "Kies uit: \"Uitgevouwen\" - het paneel wordt volledig weergegeven en kan worden ingeklapt; \"Samengevouwen\" - het paneel toont alleen de titel en beschrijving en kan worden uitgevouwen; \"Vergrendeld\" - het paneel wordt volledig weergegeven en kan niet worden ingeklapt."
// panel.width: "Sets the width of the panel in proportion to other survey elements in the same line. Accepts CSS values (px, %, in, pt, etc.)." => "Hiermee stelt u de breedte van het paneel in verhouding tot andere enquête-elementen in dezelfde lijn. Accepteert CSS-waarden (px, %, in, pt, enz.)."
// paneldynamic.name: "A panel ID that is not visible to respondents." => "Een panel-ID die niet zichtbaar is voor respondenten."
// paneldynamic.description: "Type a panel subtitle." => "Typ een ondertitel in het deelvenster."
// paneldynamic.visibleIf: "Use the magic wand icon to set a conditional rule that determines panel visibility." => "Gebruik het pictogram van de toverstaf om een voorwaardelijke regel in te stellen die de zichtbaarheid van het deelvenster bepaalt."
// paneldynamic.enableIf: "Use the magic wand icon to set a conditional rule that disables the read-only mode for the panel." => "Gebruik het pictogram van de toverstaf om een voorwaardelijke regel in te stellen die de alleen-lezen modus voor het deelvenster uitschakelt."
// paneldynamic.requiredIf: "Use the magic wand icon to set a conditional rule that prevents survey submission unless at least one nested question has an answer." => "Gebruik het toverstafpictogram om een voorwaardelijke regel in te stellen die het verzenden van enquêtes verhindert, tenzij ten minste één geneste vraag een antwoord heeft."
// paneldynamic.templateQuestionTitleLocation: "Applies to all questions within this panel. If you want to override this setting, define title alignment rules for individual questions. The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Top\" by default)." => "Geldt voor alle vragen binnen dit panel. Als u deze instelling wilt overschrijven, definieert u regels voor titeluitlijning voor afzonderlijke vragen. De optie \"Overnemen\" past de instelling op paginaniveau (indien ingesteld) of enquêteniveau (\"Standaard bovenaan\") toe."
// paneldynamic.templateErrorLocation: "Sets the location of an error message in relation to a question with invalid input. Choose between: \"Top\" - an error text is placed at the top of the question box; \"Bottom\" - an error text is placed at the bottom of the question box. The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Top\" by default)." => "Hiermee stelt u de locatie in van een foutmelding met betrekking tot een vraag met ongeldige invoer. Kies tussen: \"Top\" - er wordt een fouttekst bovenaan het vraagvak geplaatst; \"Onderaan\" - er wordt een fouttekst onderaan het vraagvak geplaatst. De optie \"Overnemen\" past de instelling op paginaniveau (indien ingesteld) of enquêteniveau (\"Standaard bovenaan\") toe."
// paneldynamic.errorLocation: "Sets the location of an error message in relation to all questions within the panel. The \"Inherit\" option applies the page-level (if set) or survey-level setting." => "Hiermee stelt u de locatie van een foutmelding in met betrekking tot alle vragen in het panel. De optie \"Overnemen\" past de instelling op paginaniveau (indien ingesteld) of enquêteniveau toe."
// paneldynamic.page: "Repositions the panel to the end of a selected page." => "Hiermee verplaatst u het deelvenster naar het einde van een geselecteerde pagina."
// paneldynamic.innerIndent: "Adds space or margin between the panel content and the left border of the panel box." => "Hiermee voegt u ruimte of marge toe tussen de inhoud van het deelvenster en de linkerrand van het deelvenstervak."
// paneldynamic.startWithNewLine: "Unselect to display the panel in one line with the previous question or panel. The setting doesn't apply if the panel is the first element in your form." => "Schakel de optie uit om het deelvenster op één regel weer te geven met de vorige vraag of het vorige deelvenster. De instelling is niet van toepassing als het deelvenster het eerste element in uw formulier is."
// paneldynamic.state: "Choose from: \"Expanded\" - the panel is displayed in full and can be collapsed; \"Collapsed\" - the panel displays only the title and description and can be expanded; \"Locked\" - the panel is displayed in full and cannot be collapsed." => "Kies uit: \"Uitgevouwen\" - het paneel wordt volledig weergegeven en kan worden ingeklapt; \"Samengevouwen\" - het paneel toont alleen de titel en beschrijving en kan worden uitgevouwen; \"Vergrendeld\" - het paneel wordt volledig weergegeven en kan niet worden ingeklapt."
// paneldynamic.width: "Sets the width of the panel in proportion to other survey elements in the same line. Accepts CSS values (px, %, in, pt, etc.)." => "Hiermee stelt u de breedte van het paneel in verhouding tot andere enquête-elementen in dezelfde lijn. Accepteert CSS-waarden (px, %, in, pt, enz.)."
// paneldynamic.templateTitle: "Type in a template for dynamic panel titles. Use {panelIndex} for the panel's general position and {visiblePanelIndex} for its order among visible panels. Insert these placeholders into the pattern to add automatic numbering." => "Typ een sjabloon voor dynamische paneeltitels. Gebruik {panelIndex} voor de algemene positie van het paneel en {visiblePanelIndex} voor de volgorde tussen de zichtbare panelen. Voeg deze tijdelijke aanduidingen toe aan het patroon om automatische nummering toe te voegen."
// paneldynamic.templateTabTitle: "Type in a template for tab titles. Use {panelIndex} for a panel's general position and {visiblePanelIndex} for its order among visible panels. Insert these placeholders into the pattern to add automatic numbering." => "Typ een sjabloon voor tabbladtitels. Gebruik {panelIndex} voor de algemene positie van een paneel en {visiblePanelIndex} voor de volgorde tussen zichtbare panelen. Voeg deze tijdelijke aanduidingen toe aan het patroon om automatische nummering toe te voegen."
// paneldynamic.templateVisibleIf: "This setting allows you to control the visibility of individual panels within the dynamic panel. Use the `{panel}` placeholder to reference the current panel in your expression." => "Met deze instelling kunt u de zichtbaarheid van afzonderlijke panelen binnen het dynamische paneel regelen. Gebruik de tijdelijke aanduiding '{panel}' om te verwijzen naar het huidige deelvenster in uw expressie."
// paneldynamic.titleLocation: "This setting is automatically inherited by all questions within this panel. If you want to override this setting, define title alignment rules for individual questions. The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Top\" by default)." => "Deze instelling wordt automatisch overgenomen door alle vragen in dit paneel. Als u deze instelling wilt overschrijven, definieert u regels voor titeluitlijning voor afzonderlijke vragen. De optie \"Overnemen\" past de instelling op paginaniveau (indien ingesteld) of enquêteniveau (\"Standaard bovenaan\") toe."
// paneldynamic.descriptionLocation: "The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Under the panel title\" by default)." => "De optie \"Overnemen\" past de instelling op paginaniveau (indien ingesteld) of enquêteniveau toe (\"Standaard onder de paneeltitel\")."
// paneldynamic.newPanelPosition: "Defines the position of a newly added panel. By default, new panels are added to the end. Select \"Next\" to insert a new panel after the current one." => "Definieert de positie van een nieuw toegevoegd deelvenster. Standaard worden er nieuwe panelen aan het einde toegevoegd. Selecteer \"Volgende\" om een nieuw paneel in te voegen na het huidige."
// paneldynamic.copyDefaultValueFromLastEntry: "Duplicates answers from the last panel and assigns them to the next added dynamic panel." => "Dupliceert antwoorden uit het laatste deelvenster en wijst ze toe aan het volgende toegevoegde dynamische deelvenster."
// paneldynamic.keyName: "Reference a question name to require a user to provide a unique response for this question in each panel." => "Verwijs naar een vraagnaam om te vereisen dat een gebruiker in elk deelvenster een uniek antwoord geeft op deze vraag."
// pehelp.defaultValueExpression: "This setting allows you to assign a default answer value based on an expression. The expression can include basic calculations - `{q1_id} + {q2_id}`, Boolean expressions, such as `{age} > 60`, and functions: `iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, etc. The value determined by this expression serves as the initial default value that can be overridden by a respondent's manual input." => "Met deze instelling kunt u een standaardantwoordwaarde toewijzen op basis van een expressie. De expressie kan basisberekeningen bevatten - '{q1_id} + {q2_id}', Booleaanse expressies, zoals '{age} > 60', en functies: 'iif()', 'today()', 'age()', 'min()', 'max()', 'avg()', enz. De waarde die door deze expressie wordt bepaald, dient als de oorspronkelijke standaardwaarde die kan worden overschreven door de handmatige invoer van een respondent."
// pehelp.resetValueIf: "Use the magic wand icon to set a conditional rule that determines when a respondent's input is reset to the value based on the \"Default value expression\" or \"Set value expression\" or to the \"Default answer\" value (if either is set)." => "Gebruik het toverstafpictogram om een voorwaardelijke regel in te stellen die bepaalt wanneer de invoer van een respondent wordt teruggezet naar de waarde op basis van de \"Standaardwaarde-expressie\" of \"Waarde-expressie instellen\" of naar de waarde \"Standaardantwoord\" (als een van beide is ingesteld)."
// pehelp.setValueIf: "Use the magic wand icon to set a conditional rule that determines when to run the \"Set value expression\" and dynamically assign the resulting value as a response." => "Gebruik het pictogram van de toverstaf om een voorwaardelijke regel in te stellen die bepaalt wanneer de expressie 'Waarde instellen' moet worden uitgevoerd en wijs de resulterende waarde dynamisch toe als antwoord."
// pehelp.setValueExpression: "Specify an expression that defines the value to be set when the conditions in the \"Set value if\" rule are met. The expression can include basic calculations - `{q1_id} + {q2_id}`, Boolean expressions, such as `{age} > 60`, and functions: `iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, etc. The value determined by this expression can be overridden by a respondent's manual input." => "Geef een expressie op die de waarde definieert die moet worden ingesteld wanneer aan de voorwaarden in de regel 'Waarde instellen als' wordt voldaan. De expressie kan basisberekeningen bevatten - '{q1_id} + {q2_id}', Booleaanse expressies, zoals '{age} > 60', en functies: 'iif()', 'today()', 'age()', 'min()', 'max()', 'avg()', enz. De waarde die door deze expressie wordt bepaald, kan worden overschreven door de handmatige invoer van een respondent."
// question.name: "A question ID that is not visible to respondents." => "Een vraag-ID die niet zichtbaar is voor respondenten."
// question.description: "Type a question subtitle." => "Typ de ondertitel van een vraag."
// question.visibleIf: "Use the magic wand icon to set a conditional rule that determines question visibility." => "Gebruik het toverstafpictogram om een voorwaardelijke regel in te stellen die de zichtbaarheid van de vraag bepaalt."
// question.enableIf: "Use the magic wand icon to set a conditional rule that disables the read-only mode for the question." => "Gebruik het toverstafpictogram om een voorwaardelijke regel in te stellen die de alleen-lezen modus voor de vraag uitschakelt."
// question.requiredIf: "Use the magic wand icon to set a conditional rule that prevents survey advancing or submission unless the question received an answer." => "Gebruik het toverstafpictogram om een voorwaardelijke regel in te stellen die voorkomt dat de enquête wordt voortgezet of verzonden, tenzij de vraag een antwoord heeft gekregen."
// question.startWithNewLine: "Unselect to display the question in one line with the previous question or panel. The setting doesn't apply if the question is the first element in your form." => "Schakel de optie uit om de vraag op één regel weer te geven met de vorige vraag of het vorige deelvenster. De instelling is niet van toepassing als de vraag het eerste element in uw formulier is."
// question.page: "Repositions the question to the end of a selected page." => "Hiermee verplaatst u de vraag naar het einde van een geselecteerde pagina."
// question.state: "Choose from: \"Expanded\" - the question box is displayed in full and can be collapsed; \"Collapsed\" - the question box displays only the title and description and can be expanded; \"Locked\" - the question box is displayed in full and cannot be collapsed." => "Kies uit: \"Uitgevouwen\" - het vraagvak wordt volledig weergegeven en kan worden ingeklapt; \"Samengevouwen\" - het vraagvak toont alleen de titel en beschrijving en kan worden uitgevouwen; \"Vergrendeld\" - het vraagvak wordt volledig weergegeven en kan niet worden ingeklapt."
// question.titleLocation: "Overrides title alignment rules defined on a panel, page or survey level. The \"Inherit\" option applies any higher-level settings (if set) or survey-level setting (\"Top\" by default)." => "Hiermee worden regels voor titeluitlijning overschreven die zijn gedefinieerd op paneel-, pagina- of enquêteniveau. De optie \"Overnemen\" past alle instellingen op een hoger niveau (indien ingesteld) of instellingen op enquêteniveau (\"Top\" standaard) toe."
// question.descriptionLocation: "The \"Inherit\" option applies the survey-level setting (\"Under the question title\" by default)." => "De optie \"Overnemen\" past de instelling op enquêteniveau toe (\"Standaard onder de vraagtitel\")."
// question.errorLocation: "Sets the location of an error message in relation to the question with invalid input. Choose between: \"Top\" - an error text is placed at the top of the question box; \"Bottom\" - an error text is placed at the bottom of the question box. The \"Inherit\" option applies the survey-level setting (\"Top\" by default)." => "Hiermee stelt u de locatie van een foutmelding in ten opzichte van de vraag met ongeldige invoer. Kies tussen: \"Top\" - er wordt een fouttekst bovenaan het vraagvak geplaatst; \"Onderaan\" - er wordt een fouttekst onderaan het vraagvak geplaatst. De optie \"Overnemen\" past de instelling op enquêteniveau toe (\"Top\" standaard)."
// question.indent: "Adds space or margin between the question content and the left border of the question box." => "Hiermee voegt u ruimte of marge toe tussen de inhoud van de vraag en de linkerrand van het vraagvak."
// question.width: "Sets the width of the question in proportion to other survey elements in the same line. Accepts CSS values (px, %, in, pt, etc.)." => "Hiermee stelt u de breedte van de vraag in verhouding tot andere enquête-elementen in dezelfde regel. Accepteert CSS-waarden (px, %, in, pt, enz.)."
// surveyvalidator.expression: "Use the magic wand icon to set a validation rule for the question." => "Gebruik het toverstafpictogram om een validatieregel voor de vraag in te stellen."
// question.textUpdateMode: "Choose from: \"On lost focus\" - the value is updated when the input field loses focus; \"While typing\" - the value is updated in real-time, as users are typing. The \"Inherit\" option applies the survey-level setting (\"On lost focus\" by default)." => "Kies uit: \"Bij verloren focus\" - de waarde wordt bijgewerkt wanneer het invoerveld de focus verliest; \"Tijdens het typen\" - de waarde wordt in realtime bijgewerkt, terwijl gebruikers typen. Met de optie \"Overerven\" wordt de instelling op enquêteniveau toegepast (\"Standaard bij verloren focus\")."
// question.url: "You can use any web service as a data source for multiple-choice questions. To populate choice values, enter the URL of the service providing the data." => "U kunt elke webservice gebruiken als gegevensbron voor meerkeuzevragen. Als u keuzewaarden wilt invullen, voert u de URL in van de service die de gegevens levert."
// question.searchMode: "A comparison operation used to filter the drop-down list." => "Een vergelijkingsbewerking die wordt gebruikt om de vervolgkeuzelijst te filteren."
// signaturepad.signatureWidth: "Sets the width of the displayed signature area and the resulting image." => "Hiermee stelt u de breedte van het weergegeven handtekeninggebied en de resulterende afbeelding in."
// signaturepad.signatureHeight: "Sets the height of the displayed signature area and the resulting image." => "Hiermee stelt u de hoogte in van het weergegeven handtekeninggebied en de resulterende afbeelding."
// signaturepad.signatureAutoScaleEnabled: "Select if you want the signature area to fill all available space within the question box while maintaining the default 3:2 aspect ratio. When custom width and height values are set, the setting will keep the aspect ratio of these dimensions." => "Selecteer of u wilt dat het handtekeninggebied alle beschikbare ruimte in het vraagvak vult met behoud van de standaardverhouding van 3:2. Wanneer aangepaste breedte- en hoogtewaarden zijn ingesteld, blijft de hoogte-breedteverhouding van deze afmetingen behouden."
// file.imageHeight: "Adjusts the height of the image in the survey results." => "Hiermee past u de hoogte van de afbeelding in de enquêteresultaten aan."
// file.imageWidth: "Adjusts the width of the image in the survey results." => "Hiermee past u de breedte van de afbeelding in de enquêteresultaten aan."
// imagepicker.imageHeight: "Overrides the minimum and maximum height values." => "Hiermee worden de minimum- en maximumhoogtewaarden overschreven."
// imagepicker.imageWidth: "Overrides the minimum and maximum width values." => "Hiermee worden de waarden voor de minimum- en maximumbreedte overschreven."
// imagepicker.choices: "\"Value\" serves as an item ID used in conditional rules; \"Text\" is displayed to respondents." => "\"Waarde\" dient als een item-ID die wordt gebruikt in voorwaardelijke regels; \"Tekst\" wordt getoond aan respondenten."
// text.size: "This setting only resizes the input field and doesn't affect the width of the question box. To limit the accepted input length, go to <b>Validation → Maximum character limit</b>." => "Deze instelling wijzigt alleen de grootte van het invoerveld en heeft geen invloed op de breedte van het vraagvak. Als u de geaccepteerde invoerlengte wilt beperken, gaat u naar <b>Validatie → Maximale tekenlimiet</b>."
// comment.rows: "Sets the number of displayed lines in the input field. If the input takes up more lines, the scroll bar will appear." => "Hiermee stelt u het aantal weergegeven regels in het invoerveld in. Als de invoer meer regels in beslag neemt, verschijnt de schuifbalk."
// survey.mode: "Choose between: \"Editable\" - enables respondents to fill out your survey; \"Read-only\" - disables form editing." => "Kies tussen: \"Bewerkbaar\" - stelt respondenten in staat uw enquête in te vullen; \"Alleen-lezen\" - schakelt het bewerken van formulieren uit."
// matrixdropdowncolumn.name: "A column ID that is not visible to respondents." => "Een kolom-id die niet zichtbaar is voor respondenten."
// matrixdropdowncolumn.isUnique: "When enabled for a column, a respondent is required to provide a unique response for each question within this column." => "Als deze optie is ingeschakeld voor een kolom, moet een respondent een uniek antwoord geven voor elke vraag in deze kolom."
// matrixdropdowncolumn.rows: "Sets the number of displayed lines in the input field. If the input takes up more lines, the scroll bar will appear." => "Hiermee stelt u het aantal weergegeven regels in het invoerveld in. Als de invoer meer regels in beslag neemt, verschijnt de schuifbalk."
// matrixdropdowncolumn.visibleIf: "Use the magic wand icon to set a conditional rule that determines column visibility." => "Gebruik het pictogram van de toverstaf om een voorwaardelijke regel in te stellen die de zichtbaarheid van de kolom bepaalt."
// matrixdropdowncolumn.enableIf: "Use the magic wand icon to set a conditional rule that disables the read-only mode for the column." => "Gebruik het pictogram van de toverstaf om een voorwaardelijke regel in te stellen waarmee de alleen-lezen modus voor de kolom wordt uitgeschakeld."
// matrixdropdowncolumn.requiredIf: "Use the magic wand icon to set a conditional rule that prevents survey submission unless at least one nested question has an answer." => "Gebruik het toverstafpictogram om een voorwaardelijke regel in te stellen die het verzenden van enquêtes verhindert, tenzij ten minste één geneste vraag een antwoord heeft."
// matrixdropdowncolumn.showInMultipleColumns: "When selected, creates an individual column for each choice option." => "Als deze optie is geselecteerd, wordt er een afzonderlijke kolom gemaakt voor elke keuzeoptie."
// pehelp.widthMode: "Choose from: \"Static\" - sets a fixed width; \"Responsive\" - makes the survey occupy the full width of the screen; \"Auto\" - applies either of the two depending on the question types used." => "Kies uit: \"Statisch\" - stelt een vaste breedte in; \"Responsief\" - zorgt ervoor dat de enquête de volledige breedte van het scherm in beslag neemt; \"Auto\" - past een van de twee toe, afhankelijk van de gebruikte vraagtypen."
// pehelp.logo: "Paste an image link (no size limits) or click the folder icon to browse a file from your computer (up to 64KB)." => "Plak een afbeeldingslink (geen maximale grootte) of klik op het mappictogram om door een bestand vanaf uw computer te bladeren (maximaal 64 KB)."
// pehelp.logoWidth: "Sets a logo width in CSS units (px, %, in, pt, etc.)." => "Hiermee stelt u de breedte van het logo in CSS-eenheden in (px, %, in, pt, enz.)."
// pehelp.logoHeight: "Sets a logo height in CSS units (px, %, in, pt, etc.)." => "Hiermee stelt u de hoogte van een logo in CSS-eenheden in (px, %, in, pt, enz.)."
// pehelp.logoFit: "Choose from: \"None\" - image maintains its original size; \"Contain\" - image is resized to fit while maintaining its aspect ratio; \"Cover\" - image fills the entire box while maintaining its aspect ratio; \"Fill\" - image is stretched to fill the box without maintaining its aspect ratio." => "Kies uit: \"Geen\" - afbeelding behoudt zijn oorspronkelijke grootte; \"Bevatten\" - het formaat van de afbeelding wordt aangepast aan de beeldverhouding met behoud van de beeldverhouding; \"Omslag\" - afbeelding vult het hele vak met behoud van de beeldverhouding; \"Vullen\" - de afbeelding wordt uitgerekt om het vak te vullen zonder de beeldverhouding te behouden."
// pehelp.showNavigationButtons: "Sets the visibility and location of navigation buttons on a page." => "Hiermee stelt u de zichtbaarheid en locatie van navigatieknoppen op een pagina in."
// pehelp.showProgressBar: "Sets the visibility and location of a progress bar. The \"Auto\" value displays the progress bar above or below the survey header." => "Hiermee stelt u de zichtbaarheid en locatie van een voortgangsbalk in. De waarde \"Auto\" geeft de voortgangsbalk boven of onder de kop van de enquête weer."
// pehelp.showPreviewBeforeComplete: "Enable the preview page with all or answered questions only." => "Schakel de voorbeeldpagina in met alleen alle of beantwoorde vragen."
// pehelp.questionTitleLocation: "Applies to all questions within the survey. This setting can be overridden by title alignment rules at lower levels: panel, page, or question. A lower-level setting will override those on a higher level." => "Geldt voor alle vragen in de enquête. Deze instelling kan worden overschreven door regels voor titeluitlijning op lagere niveaus: deelvenster, pagina of vraag. Een instelling op een lager niveau heeft voorrang op die op een hoger niveau."
// pehelp.requiredMark: "A symbol or a sequence of symbols indicating that an answer is required." => "Een symbool of een reeks symbolen die aangeven dat een antwoord vereist is."
// pehelp.questionStartIndex: "Enter a number or letter with which you want to start numbering." => "Voer een cijfer of letter in waarmee u wilt beginnen met nummeren."
// pehelp.questionErrorLocation: "Sets the location of an error message in relation to the question with invalid input. Choose between: \"Top\" - an error text is placed at the top of the question box; \"Bottom\" - an error text is placed at the bottom of the question box." => "Hiermee stelt u de locatie van een foutmelding in ten opzichte van de vraag met ongeldige invoer. Kies tussen: \"Top\" - er wordt een fouttekst bovenaan het vraagvak geplaatst; \"Onderaan\" - er wordt een fouttekst onderaan het vraagvak geplaatst."
// pehelp.autoFocusFirstQuestion: "Select if you want the first input field on each page ready for text entry." => "Selecteer of u het eerste invoerveld op elke pagina klaar wilt maken voor tekstinvoer."
// pehelp.questionOrder: "Keeps the original order of questions or randomizes them. The effect of this setting is only visible in the Preview tab." => "Behoudt de oorspronkelijke volgorde van vragen of maakt ze willekeurig. Het effect van deze instelling is alleen zichtbaar op het tabblad Voorbeeld."
// pehelp.maxTextLength: "For text entry questions only." => "Alleen voor vragen over tekstinvoer."
// pehelp.maxCommentLength: "For question comments only." => "Alleen voor opmerkingen over vragen."
// pehelp.autoGrowComment: "Select if you want question comments and Long Text questions to auto-grow in height based on the entered text length." => "Selecteer of u wilt dat vraagopmerkingen en lange tekstvragen automatisch in hoogte groeien op basis van de ingevoerde tekstlengte."
// pehelp.allowResizeComment: "For question comments and Long Text questions only." => "Alleen voor vraagopmerkingen en lange tekstvragen."
// pehelp.calculatedValues: "Custom variables serve as intermediate or auxiliary variables used in form calculations. They take respondent inputs as source values. Each custom variable has a unique name and an expression it's based on." => "Aangepaste variabelen dienen als tussenliggende of hulpvariabelen die worden gebruikt in formulierberekeningen. Ze nemen de input van respondenten als bronwaarden. Elke aangepaste variabele heeft een unieke naam en een expressie waarop deze is gebaseerd."
// pehelp.includeIntoResult: "Select if you wish the calculated value of the expression to be saved along with survey results." => "Selecteer of u wilt dat de berekende waarde van de expressie samen met de enquêteresultaten wordt opgeslagen."
// pehelp.triggers: "A trigger is an event or condition that is based on an expression. Once the expression is evaluated to \"true\", a trigger sets off an action. Such an action can optionally have a target question it affects." => "Een trigger is een gebeurtenis of voorwaarde die is gebaseerd op een expressie. Zodra de expressie is geëvalueerd naar 'waar', wordt een actie geactiveerd door een trigger. Zo'n actie kan optioneel een doelvraag hebben die het beïnvloedt."
// pehelp.clearInvisibleValues: "Choose whether or not to clear values for questions hidden by conditional logic and when to do it." => "Kies of u de waarden wilt wissen voor vragen die verborgen zijn door voorwaardelijke logica en wanneer u dit wilt doen."
// pehelp.textUpdateMode: "Choose from: \"On lost focus\" - the value is updated when the input field loses focus; \"While typing\" - the value is updated in real-time, as users are typing." => "Kies uit: \"Bij verloren focus\" - de waarde wordt bijgewerkt wanneer het invoerveld de focus verliest; \"Tijdens het typen\" - de waarde wordt in realtime bijgewerkt, terwijl gebruikers typen."
// pehelp.columns: "The left value serves as a column ID used in conditional rules, the right value is displayed to respondents." => "De linkerwaarde dient als een kolom-ID die wordt gebruikt in voorwaardelijke regels, de rechterwaarde wordt weergegeven aan respondenten."
// pehelp.rows: "The left value serves as a row ID used in conditional rules, the right value is displayed to respondents." => "De linkerwaarde dient als een rij-ID die wordt gebruikt in voorwaardelijke regels, de rechterwaarde wordt weergegeven aan respondenten."
// pehelp.columnMinWidth: "Accepts CSS values (px, %, in, pt, etc.)." => "Accepteert CSS-waarden (px, %, in, pt, enz.)."
// pehelp.rowTitleWidth: "Accepts CSS values (px, %, in, pt, etc.)." => "Accepteert CSS-waarden (px, %, in, pt, enz.)."
// pehelp.cellErrorLocation: "Sets the location of an error message in relation to a cell with invalid input. The \"Inherit\" option applies the setting from the \"Error message alignment\" property." => "Hiermee stelt u de locatie van een foutbericht in ten opzichte van een cel met ongeldige invoer. Met de optie 'Overerven' wordt de instelling van de eigenschap 'Uitlijning van foutberichten' toegepast."
// pehelp.keyDuplicationError: "When the \"Prevent duplicate responses\" property is enabled, a respondent attempting to submit a duplicate entry will receive the following error message." => "Wanneer de eigenschap 'Dubbele antwoorden voorkomen' is ingeschakeld, ontvangt een respondent die een dubbele vermelding probeert in te dienen, het volgende foutbericht."
// pehelp.totalExpression: "Allows you to calculate total values based on an expression. The expression can include basic calculations (`{q1_id} + {q2_id}`), Boolean expressions (`{age} > 60`) and functions ('iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, etc.)." => "Hiermee kunt u totale waarden berekenen op basis van een expressie. De expressie kan basisberekeningen ('{q1_id} + {q2_id}'), Booleaanse expressies ('{age} > 60') en functies ('iif()', 'today()', 'age()', 'min()', 'max()', 'avg()', etc.) bevatten."
// pehelp.confirmDelete: "Triggers a prompt asking to confirm the row deletion." => "Hiermee wordt gevraagd om het verwijderen van de rij te bevestigen."
// pehelp.copyDefaultValueFromLastEntry: "Duplicates answers from the last row and assigns them to the next added dynamic row." => "Dupliceert antwoorden uit de laatste rij en wijst ze toe aan de volgende toegevoegde dynamische rij."
// pehelp.description: "Type a subtitle." => "Typ een ondertitel."
// pehelp.locale: "Choose a language to begin creating your survey. To add a translation, switch to a new language and translate the original text here or in the Translations tab." => "Kies een taal om te beginnen met het maken van uw enquête. Als u een vertaling wilt toevoegen, schakelt u over naar een nieuwe taal en vertaalt u de originele tekst hier of op het tabblad Vertalingen."
// pehelp.detailPanelMode: "Sets the location of a details section in relation to a row. Choose from: \"None\" - no expansion is added; \"Under the row\" - a row expansion is placed under each row of the matrix; \"Under the row, display one row expansion only\" - an expansion is displayed under a single row only, the remaining row expansions are collapsed." => "Hiermee stelt u de locatie van een detailsectie ten opzichte van een rij in. Kies uit: \"Geen\" - er wordt geen uitbreiding toegevoegd; \"Onder de rij\" - onder elke rij van de matrix wordt een rij-uitbreiding geplaatst; \"Onder de rij, slechts één rij-uitbreiding weergeven\" - een uitbreiding wordt alleen onder een enkele rij weergegeven, de resterende rij-uitbreidingen zijn samengevouwen."
// pehelp.imageFit: "Choose from: \"None\" - image maintains its original size; \"Contain\" - image is resized to fit while maintaining its aspect ratio; \"Cover\" - image fills the entire box while maintaining its aspect ratio; \"Fill\" - image is stretched to fill the box without maintaining its aspect ratio." => "Kies uit: \"Geen\" - afbeelding behoudt zijn oorspronkelijke grootte; \"Bevatten\" - het formaat van de afbeelding wordt aangepast aan de beeldverhouding met behoud van de beeldverhouding; \"Omslag\" - afbeelding vult het hele vak met behoud van de beeldverhouding; \"Vullen\" - de afbeelding wordt uitgerekt om het vak te vullen zonder de beeldverhouding te behouden."
// pehelp.autoGrow: "Gradually increases the height of the input field as data is being entered. Overrides the \"Input field height (in lines)\" setting." => "Verhoogt geleidelijk de hoogte van het invoerveld terwijl gegevens worden ingevoerd. Hiermee wordt de instelling \"Invoerveldhoogte (in lijnen)\" overschreven."
// pehelp.allowResize: "The resize handle (or grip) appears in the corner and can be dragged to alter the size of the input field." => "De formaatgreep (of greep) verschijnt in de hoek en kan worden gesleept om de grootte van het invoerveld te wijzigen."
// pehelp.timeLimit: "A time interval in seconds after which the survey auto-advances to the Thank You page." => "Een tijdsinterval in seconden, waarna de enquête automatisch doorgaat naar de bedankpagina."
// pehelp.timeLimitPerPage: "A time interval in seconds after which the survey auto-advances to the next page." => "Een tijdsinterval in seconden, waarna de enquête automatisch doorgaat naar de volgende pagina."
// page.timeLimit: "A time interval in seconds after which the survey auto-advances to the next page." => "Een tijdsinterval in seconden, waarna de enquête automatisch doorgaat naar de volgende pagina."
// page.visibleIf: "Use the magic wand icon to set a conditional rule that determines page visibility." => "Gebruik het toverstafpictogram om een voorwaardelijke regel in te stellen die de zichtbaarheid van de pagina bepaalt."
// page.enableIf: "Use the magic wand icon to set a conditional rule that disables the read-only mode for the page." => "Gebruik het pictogram van de toverstaf om een voorwaardelijke regel in te stellen waarmee de alleen-lezen modus voor de pagina wordt uitgeschakeld."
// page.requiredIf: "Use the magic wand icon to set a conditional rule that prevents survey submission unless at least one nested question has an answer." => "Gebruik het toverstafpictogram om een voorwaardelijke regel in te stellen die het verzenden van enquêtes verhindert, tenzij ten minste één geneste vraag een antwoord heeft."
// page.questionTitleLocation: "Applies to all questions within this page. If you want to override this setting, define title alignment rules for individual questions or panels. The \"Inherit\" option applies the survey-level setting (\"Top\" by default)." => "Geldt voor alle vragen op deze pagina. Als je deze instelling wilt overschrijven, definieer je regels voor titeluitlijning voor afzonderlijke vragen of panelen. De optie \"Overnemen\" past de instelling op enquêteniveau toe (\"Top\" standaard)."
// page.questionErrorLocation: "Sets the location of an error message in relation to the question with invalid input. Choose between: \"Top\" - an error text is placed at the top of the question box; \"Bottom\" - an error text is placed at the bottom of the question box. The \"Inherit\" option applies the survey-level setting (\"Top\" by default)." => "Hiermee stelt u de locatie van een foutmelding in ten opzichte van de vraag met ongeldige invoer. Kies tussen: \"Top\" - er wordt een fouttekst bovenaan het vraagvak geplaatst; \"Onderaan\" - er wordt een fouttekst onderaan het vraagvak geplaatst. De optie \"Overnemen\" past de instelling op enquêteniveau toe (\"Top\" standaard)."
// page.questionOrder: "Keeps the original order of questions or randomizes them. The \"Inherit\" option applies the survey-level setting (\"Original\" by default). The effect of this setting is only visible in the Preview tab." => "Behoudt de oorspronkelijke volgorde van vragen of maakt ze willekeurig. De optie \"Overerven\" past de instelling op enquêteniveau toe (\"Standaard Origineel\"). Het effect van deze instelling is alleen zichtbaar op het tabblad Voorbeeld."
// page.showNavigationButtons: "Sets the visibility of navigation buttons on the page. The \"Inherit\" option applies the survey-level setting, which defaults to \"Visible\"." => "Hiermee stelt u de zichtbaarheid van navigatieknoppen op de pagina in. De optie \"Overerven\" past de instelling op enquêteniveau toe, die standaard op \"Zichtbaar\" staat."
// pehelp.panelsState: "Choose from: \"Locked\" - users cannot expand or collapse panels; \"Collapse all\" - all panels start in a collapsed state; \"Expand all\" - all panels start in an expanded state; \"First expanded\" - only the first panel is initially expanded." => "Kies uit: \"Vergrendeld\" - gebruikers kunnen panelen niet uitvouwen of samenvouwen; \"Alles samenvouwen\" - alle deelvensters beginnen in een samengevouwen toestand; \"Alles uitvouwen\" - alle deelvensters beginnen in een uitgevouwen staat; \"Eerst uitgevouwen\" - alleen het eerste paneel wordt in eerste instantie uitgevouwen."
// pehelp.imageLinkName: "Enter a shared property name within the array of objects that contains the image or video file URLs you want to display in the choice list." => "Voer de naam van een gedeelde eigenschap in binnen de matrix met objecten die de URL's van afbeeldings- of videobestanden bevat die u in de keuzelijst wilt weergeven."
// pehelp.choices: "The left value serves as an item ID used in conditional rules, the right value is displayed to respondents." => "De linkerwaarde dient als een item-ID die wordt gebruikt in voorwaardelijke regels, de rechterwaarde wordt weergegeven aan respondenten."
// pehelp.title: "Type a user-friendly title to display." => "Typ een gebruiksvriendelijke titel om weer te geven."
// pehelp.waitForUpload: "Ensures that users won't complete the survey until files are uploaded." => "Zorgt ervoor dat gebruikers de enquête pas invullen als de bestanden zijn geüpload."
// pehelp.minWidth: "Accepts CSS values (px, %, in, pt, etc.)." => "Accepteert CSS-waarden (px, %, in, pt, enz.)."
// pehelp.maxWidth: "Accepts CSS values (px, %, in, pt, etc.)." => "Accepteert CSS-waarden (px, %, in, pt, enz.)."
// pehelp.width: "Accepts CSS values (px, %, in, pt, etc.)." => "Accepteert CSS-waarden (px, %, in, pt, enz.)."
// pehelp.useDisplayValuesInDynamicTexts: "In single- and multiple-selection question types, each choice option has an ID and display value. When selected, this setting shows a display value instead of an ID value in HTML questions and dynamic titles and descriptions of survey elements." => "In vraagtypen met enkelvoudige en meervoudige selectie heeft elke keuzeoptie een ID en weergavewaarde. Als deze instelling is geselecteerd, wordt een weergavewaarde weergegeven in plaats van een ID-waarde in HTML-vragen en dynamische titels en beschrijvingen van enquête-elementen."
// pehelp.clearIfInvisible: "Choose whether or not to clear question values hidden by conditional logic and when to do it. The \"Inherit\" option applies the survey-level setting (\"Upon survey completion\" by default)." => "Kies of vraagwaarden die verborgen zijn door voorwaardelijke logica al dan niet moeten worden gewist en wanneer u dit wilt doen. Met de optie \"Overnemen\" wordt de instelling op enquêteniveau toegepast (\"Na voltooiing van de enquête\" standaard)."
// pehelp.choicesFromQuestionMode: "Choose from: \"All\" - copies all choice options from the selected question; \"Selected\" - dynamically copies only selected choice options; \"Unselected\" - dynamically copies only unselected choice options. The \"None\" and \"Other\" options are copied by default if enabled in the source question." => "Kies uit: \"Alle\" - kopieert alle keuzemogelijkheden van de geselecteerde vraag; \"Geselecteerd\" - kopieert dynamisch alleen geselecteerde keuzeopties; \"Niet geselecteerd\" - kopieert dynamisch alleen niet-geselecteerde keuzeopties. De opties \"Geen\" en \"Overig\" worden standaard gekopieerd als deze zijn ingeschakeld in de bronvraag."
// pehelp.showOtherItem: "When selected, users can include additional input in a separate comment box." => "Als deze optie is geselecteerd, kunnen gebruikers extra invoer invullen in een apart invulveld."
// pehelp.separateSpecialChoices: "Displays each special choice option (\"None\", \"Other\", \"Select All\") on a new line, even when using a multiple-column layout." => "Geeft elke speciale keuzeoptie ('Geen', 'Overig', 'Alles selecteren') weer op een nieuwe regel, zelfs bij gebruik van een lay-out met meerdere kolommen."
// pehelp.path: "Specify the location within the service dataset where the target array of objects is located. Leave empty if the URL already points to the array." => "Geef de locatie binnen de servicegegevensset op waar de doelmatrix met objecten zich bevindt. Laat leeg als de URL al naar de array verwijst."
// pehelp.titleName: "Enter a uniform property name within the array of objects that contains the values you want to display in the choice list." => "Voer een uniforme eigenschapsnaam in binnen de matrix met objecten die de waarden bevat die u in de keuzelijst wilt weergeven."
// pehelp.allowEmptyResponse: "Select to allow the service to return an empty response or array." => "Selecteer deze optie om toe te staan dat de service een leeg antwoord of een lege matrix retourneert."
// pehelp.choicesVisibleIf: "Use the magic wand icon to set a conditional rule that determines the visibility of all choice options." => "Gebruik het toverstafpictogram om een voorwaardelijke regel in te stellen die de zichtbaarheid van alle keuzeopties bepaalt."
// pehelp.rateValues: "The left value serves as an item ID used in conditional rules, the right value is displayed to respondents." => "De linkerwaarde dient als een item-ID die wordt gebruikt in voorwaardelijke regels, de rechterwaarde wordt weergegeven aan respondenten."
// rating.displayMode: "\"Auto\" selects between the \"Buttons\" and \"Dropdown\" modes based on the available width. When the width is insufficient to display buttons, the question displays a dropdown." => "\"Auto\" kiest tussen de modi \"Knoppen\" en \"Dropdown\" op basis van de beschikbare breedte. Wanneer de breedte onvoldoende is om knoppen weer te geven, wordt er een dropdown weergegeven in de vraag."
// pehelp.valuePropertyName: "Allows you to connect questions that produce results in different formats. When such questions are linked together using a join identifier, this shared property stores selected question values." => "Hiermee kunt u vragen verbinden die resultaten opleveren in verschillende formaten. Wanneer dergelijke vragen aan elkaar zijn gekoppeld met behulp van een join-id, worden in deze gedeelde eigenschap geselecteerde vraagwaarden opgeslagen."
// pehelp.searchEnabled: "Select if you want to update the drop-down menu contents to match the search query that a user is typing in the input field." => "Selecteer of u de inhoud van het vervolgkeuzemenu wilt bijwerken zodat deze overeenkomt met de zoekopdracht die een gebruiker in het invoerveld typt."
// pehelp.valueTrue: "A value to save in survey results when respondents give a positive answer." => "Een waarde die moet worden opgeslagen in enquêteresultaten wanneer respondenten een positief antwoord geven."
// pehelp.valueFalse: "A value to save in survey results when respondents give a negative answer." => "Een waarde die moet worden opgeslagen in enquêteresultaten wanneer respondenten een negatief antwoord geven."
// pehelp.showPreview: "It's not recommended to disable this option as it overrides the Preview image and makes it hard for a user to understand whether the files have been uploaded." => "Het wordt niet aanbevolen om deze optie uit te schakelen, omdat deze de voorbeeldafbeelding overschrijft en het voor een gebruiker moeilijk maakt om te begrijpen of de bestanden zijn geüpload."
// pehelp.needConfirmRemoveFile: "Triggers a prompt asking to confirm the file deletion." => "Hiermee wordt een prompt geactiveerd waarin wordt gevraagd om het verwijderen van het bestand te bevestigen."
// pehelp.selectToRankEnabled: "Enable to rank only selected choices. Users will drag selected items from the choice list to order them within the ranking area." => "Schakel in om alleen geselecteerde keuzes te rangschikken. Gebruikers slepen geselecteerde items uit de keuzelijst om ze binnen het rangschikkingsgebied te rangschikken."
// pehelp.dataList: "Enter a list of choices that will be suggested to the respondent during input." => "Voer een lijst met keuzes in die tijdens de invoer aan de respondent worden voorgesteld."
// pehelp.inputSize: "The setting only resizes the input fields and doesn't affect the width of the question box." => "De instelling wijzigt alleen de grootte van de invoervelden en heeft geen invloed op de breedte van het vraagvak."
// pehelp.itemTitleWidth: "Sets consistent width for all item labels in pixels" => "Hiermee stelt u een consistente breedte in voor alle artikellabels in pixels"
// pehelp.contentMode: "The \"Auto\" option automatically determines the suitable mode for display - Image, Video, or YouTube - based on the source URL provided." => "De optie \"Auto\" bepaalt automatisch de geschikte modus voor weergave - Afbeelding, Video of YouTube - op basis van de opgegeven bron-URL."
// pehelp.altText: "Serves as a substitute when the image cannot be displayed on a user's device and for accessibility purposes." => "Dient als vervanging wanneer de afbeelding niet kan worden weergegeven op het apparaat van een gebruiker en voor toegankelijkheidsdoeleinden."
// pehelp.rateColorMode: "Defines the color of the selected emoji when the Rating icon type is set to \"Smileys\". Choose between: \"Default\" - the selected emoji appears in default survey color; \"Scale\" - the selected emoji inherits color from the rating scale." => "Definieert de kleur van de geselecteerde emoji wanneer het type Beoordelingspictogram is ingesteld op \"Smileys\". Kies tussen: \"Standaard\" - de geselecteerde emoji verschijnt in de standaard enquêtekleur; \"Schaal\" - de geselecteerde emoji erft de kleur van de beoordelingsschaal."
// expression.name: "An expression ID that is not visible to respondents." => "Een expressie-ID die niet zichtbaar is voor respondenten."
// expression.description: "Type an expression subtitle." => "Typ de ondertitel van een expressie."
// expression.expression: "An expression can include basic calculations (`{q1_id} + {q2_id}`), conditions (`{age} > 60`), and functions ('iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, etc.)." => "Een expressie kan basisberekeningen ('{q1_id} + {q2_id}'), voorwaarden ('{leeftijd} > 60') en functies ('iif()', 'vandaag()', 'leeftijd()', 'min()', 'max()', 'gem()', enz.) bevatten."
// pehelp.storeOthersAsComment: "Select to store the \"Other\" option value as a separate property in survey results." => "Selecteer deze optie om de waarde van de optie 'Overig' op te slaan als een afzonderlijke eigenschap in enquêteresultaten."
// p.swapOrder: "Swap the order of Yes and No" => "Verwissel de volgorde van Ja en Nee"
// p.itemTitleWidth: "Item label width (in px)" => "Breedte artikellabel (in px)"
// p.selectToRankEmptyRankedAreaText: "Text to show if all options are selected" => "Tekst om aan te geven of alle opties zijn geselecteerd"
// p.selectToRankEmptyUnrankedAreaText: "Placeholder text for the ranking area" => "Tijdelijke tekst voor het rangschikkingsgebied"
// pe.autoAdvanceAllowComplete: "Complete the survey automatically" => "Vul de enquête automatisch in"
// pehelp.autoAdvanceAllowComplete: "Select if you want the survey to complete automatically after a respondent answers all questions." => "Selecteer of u wilt dat de enquête automatisch wordt ingevuld nadat een respondent alle vragen heeft beantwoord."
// masksettings.saveMaskedValue: "Save masked value in survey results" => "Gemaskeerde waarde opslaan in enquêteresultaten"
// patternmask.pattern: "Value pattern" => "Waardepatroon"
// datetimemask.min: "Minimum value" => "Minimumwaarde"
// datetimemask.max: "Maximum value" => "Maximale waarde"
// numericmask.allowNegativeValues: "Allow negative values" => "Negatieve waarden toestaan"
// numericmask.thousandsSeparator: "Thousands separator" => "Scheidingsteken voor duizendtallen"
// numericmask.decimalSeparator: "Decimal separator" => "Decimaalteken"
// numericmask.precision: "Value precision" => "Waarde precisie"
// numericmask.min: "Minimum value" => "Minimumwaarde"
// numericmask.max: "Maximum value" => "Maximale waarde"
// currencymask.prefix: "Currency prefix" => "Valuta voorvoegsel"
// currencymask.suffix: "Currency suffix" => "Valuta achtervoegsel"
// pe.maskType: "Input mask type" => "Type invoermasker"
// maskTypes.patternmask: "Pattern" => "Patroon"
// maskTypes.numericmask: "Numeric" => "Numeriek"
// maskTypes.datetimemask: "Date and Time" => "Datum en tijd"
// maskTypes.currencymask: "Currency" => "Valuta"
// tabs.mask: "Input Mask Settings" => "Instellingen voor invoermasker"
// pe.pattern_placeholder: "Ex.: +1(999)-999-99-99" => "Vb.: +1(999)-999-99-99"
// pe.datetimepattern_placeholder: "Ex.: mm/dd/yyyy" => "Bijv.: mm/dd/jjjj"
// pe.currencyprefix_placeholder: "Ex.: $" => "Bijv.: $"
// pe.currencysuffix_placeholder: "Ex.: USD" => "Bijv.: USD"
// pv.textWrapEnabled: "Wrap choices" => "Wrap-keuzes"
// question.textWrapEnabled: "Long texts in choice options will automatically generate line breaks to fit within the drop-down menu. Unselect if you want the texts to clip." => "Lange teksten in keuze-opties genereren automatisch regeleinden die in het vervolgkeuzemenu passen. Schakel de selectie uit als u wilt dat de teksten worden afgekapt."
// masksettings.saveMaskedValue: "Select if you want to store the question value with an applied mask in survey results." => "Selecteer of u de vraagwaarde met een toegepast masker wilt opslaan in enquêteresultaten."
// patternmask.pattern: "The pattern can contain string literals and the following placeholders: `9` - for a digit; `a` - for an upper- or lower-case letter; `#` - for a digit or an upper- or lower-case letter. Use backslash `\\` to escape a character." => "Het patroon kan letterlijke tekenreeksen en de volgende tijdelijke aanduidingen bevatten: '9' - voor een cijfer; \"a\" - voor een hoofdletter of kleine letter; '#' - voor een cijfer of een hoofdletter of kleine letter. Gebruik backslash '\\' om een teken te escapen."
// datetimemask.pattern: "The pattern can contain separator characters and the following placeholders: `m` - for month number; `mm` - for month number, with leading zero for single-digit values; `d` - for day of the month; `dd` - for day of the month, with leading zero for single-digit values; `yy` - for the last two digits of the year; `yyyy` - for a four-digit year." => "Het patroon kan scheidingstekens en de volgende tijdelijke aanduidingen bevatten: 'm' - voor maandnummer; 'mm' - voor maandnummer, met voorloopnul voor eencijferige waarden; 'd' - voor dag van de maand; 'dd' - voor dag van de maand, met voorloopnul voor eencijferige waarden; \"yy\" - voor de laatste twee cijfers van het jaar; 'yyyy' - voor een jaar van vier cijfers."
// numericmask.decimalSeparator: "A symbol used to separate the fractional part from the integer part of a displayed number." => "Een symbool dat wordt gebruikt om het fractionele deel te scheiden van het gehele deel van een weergegeven getal."
// numericmask.thousandsSeparator: "A symbol used to separate the digits of a large number into groups of three." => "Een symbool dat wordt gebruikt om de cijfers van een groot getal in groepen van drie te scheiden."
// numericmask.precision: "Limits how many digits to retain after the decimal point for a displayed number." => "Hiermee beperkt u het aantal cijfers dat moet worden behouden na de komma voor een weergegeven getal."
// currencymask.prefix: "One or several symbols to be displayed before the value." => "Een of meer symbolen die vóór de waarde moeten worden weergegeven."
// currencymask.suffix: "One or several symbols to be displayed after the value." => "Een of meer symbolen die na de waarde moeten worden weergegeven."
// ed.translationSource: "Source: " => "Bron: "
// ed.translationTarget: "Target: " => "Doel: "
// ed.pagePlaceHolder: "The page is empty. Drag an element from the toolbox or click the button below." => "De pagina is leeg. Sleep een element uit de gereedschapskist of klik op de knop hieronder."
// maskTypes.none: "None" => "Geen"
// itemvalue@rows.visibleIf: "Make the row visible if" => "Maak de rij zichtbaar als"
// itemvalue@rows.enableIf: "Make the row editable if" => "De rij bewerkbaar maken als:"
// signaturepad.placeholderReadOnly: "Placeholder text in read-only or preview mode" => "Tijdelijke tekst in de modus Alleen-lezen of voorvertoning"
// pe.textWrapEnabled: "Wrap choices" => "Wrap-keuzes"
// image.contentMode: "The \"Auto\" option automatically determines the suitable mode for display - Image, Video, or YouTube - based on the source URL provided." => "De optie \"Auto\" bepaalt automatisch de geschikte modus voor weergave - Afbeelding, Video of YouTube - op basis van de opgegeven bron-URL."
// imagepicker.contentMode: "Choose between \"Image\" and \"Video\" to set the content mode of the media selector. If \"Image\" is selected, ensure that all options provided are image files in the following formats: JPEG, GIF, PNG, APNG, SVG, BMP, ICO. Similarly, if \"Video\" is selected, ensure that all options are direct links to video files in the following formats: MP4, MOV, WMV, FLV, AVI, MKV. Please note that YouTube links are not supported for video options." => "Kies tussen \"Afbeelding\" en \"Video\" om de inhoudsmodus van de mediakiezer in te stellen. Als \"Afbeelding\" is geselecteerd, zorg er dan voor dat alle beschikbare opties afbeeldingsbestanden zijn in de volgende formaten: JPEG, GIF, PNG, APNG, SVG, BMP, ICO. Evenzo, als \"Video\" is geselecteerd, zorg er dan voor dat alle opties directe links zijn naar videobestanden in de volgende formaten: MP4, MOV, WMV, FLV, AVI, MKV. Houd er rekening mee dat YouTube-links niet worden ondersteund voor video-opties."
// ed.selectFile: "Select a file" => "Selecteer een bestand"
// ed.removeFile: "Remove the file" => "Verwijder het bestand"
// pe.searchMode: "Search Mode" => "Zoekmodus"

// ed.surveyPlaceHolderMobile: "Click the \"Add Question\" button below to start creating your form." => "Klik hieronder op de knop \"Vraag toevoegen\" om te beginnen met het maken van uw formulier."
// ed.pagePlaceHolderMobile: "Click the \"Add Question\" button below to add a new element to the page." => "Klik op de knop \"Vraag toevoegen\" hieronder om een nieuw element aan de pagina toe te voegen."
// ed.panelPlaceHolderMobile: "Click the \"Add Question\" button below to add a new element to the panel." => "Klik op de knop \"Vraag toevoegen\" hieronder om een nieuw element aan het paneel toe te voegen."
// ed.imagePlaceHolderMobile: "Click the button below and choose an image to upload" => "Klik op de onderstaande knop en kies een afbeelding om te uploaden"
// coloralpha.opacity: "Opacity" => "Dekking"
// font.family: "Font family" => "Lettertype familie"
// font.color: "Color" => "Kleur"
// font.placeholderColor: "Placeholder color" => "Tijdelijke aanduiding voor kleur"
// font.size: "Size" => "Grootte"
// theme.themeName: "Theme" => "Thema"
// theme.isPanelless: "Question appearance" => "Weergave van de vraag"
// theme.editorPanel: "Background and corner radius" => "Achtergrond en hoekradius"
// theme.questionPanel: "Background and corner radius" => "Achtergrond en hoekradius"
// theme.primaryColor: "Accent color" => "Accent kleur"
// theme.panelBackgroundTransparency: "Panel background opacity" => "Dekking van de achtergrond van het deelvenster"
// theme.questionBackgroundTransparency: "Question background opacity" => "Ondoorzichtigheid van de achtergrond van de vraag"
// theme.fontSize: "Font size" => "Tekengrootte"
// theme.scale: "Scale" => "Schub"
// theme.cornerRadius: "Corner radius" => "De straal van de hoek"
// theme.pageTitle: "Title font" => "Titel lettertype"
// theme.pageDescription: "Description font" => "Beschrijving lettertype"
// theme.questionTitle: "Title font" => "Titel lettertype"
// theme.questionDescription: "Description font" => "Beschrijving lettertype"
// theme.editorFont: "Font" => "Lettertype"
// theme.backgroundOpacity: "Opacity" => "Dekking"
// theme.--sjs-font-family: "Font family" => "Lettertype familie"
// theme.--sjs-general-backcolor-dim: "Background color" => "Achtergrondkleur"
// theme.--sjs-primary-backcolor: "Accent background" => "De achtergrond van het accent"
// theme.--sjs-primary-forecolor: "Accent foreground" => "Accent voorgrond"
// theme.--sjs-shadow-small: "Shadow effects" => "Schaduweffecten"
// theme.--sjs-shadow-inner: "Shadow effects" => "Schaduweffecten"
// theme.--sjs-border-default: "Colors" => "Kleuren"
// header@header.headerView: "View" => "Bekijken"
// header@header.logoPosition: "Logo position" => "Positie van het logo"
// header@header.surveyTitle: "Survey title font" => "Lettertype van de titel van de enquête"
// header@header.surveyDescription: "Survey description font" => "Lettertype voor enquêtebeschrijving"
// header@header.headerTitle: "Survey title font" => "Lettertype van de titel van de enquête"
// header@header.headerDescription: "Survey description font" => "Lettertype voor enquêtebeschrijving"
// header@header.inheritWidthFrom: "Content area width" => "Breedte inhoudsgebied"
// header@header.textAreaWidth: "Text width" => "Breedte van de tekst"
// header@header.backgroundColorSwitch: "Background color" => "Achtergrondkleur"
// header@header.backgroundImage: "Background image" => "Achtergrondafbeelding"
// header@header.backgroundImageOpacity: "Opacity" => "Dekking"
// header@header.overlapEnabled: "Overlap" => "Overlappen"
// header@header.logoPositionX: "Logo position" => "Positie van het logo"
// header@header.titlePositionX: "Title position" => "Titel positie"
// header@header.descriptionPositionX: "Description position" => "Beschrijving positie"
// weight.400: "Regular" => "Regelmatig"
// weight.600: "Heavy" => "Zwaar"
// weight.700: "Semi-bold" => "Semi-vet"
// weight.800: "Bold" => "Brutaal"
// backgroundImageFit.auto: "Auto" => "Auto"
// backgroundImageFit.cover: "Cover" => "Bedekken"
// backgroundImageFit.contain: "Contain" => "Bevatten"
// backgroundImageFit.fill: "Stretch" => "Strekken"
// backgroundImageFit.tile: "Tile" => "Tegel"
// backgroundImageAttachment.fixed: "Fixed" => "Vast"
// backgroundImageAttachment.scroll: "Scroll" => "Scrollen"
// headerView.basic: "Basic" => "Basisch"
// headerView.advanced: "Advanced" => "Geavanceerd"
// inheritWidthFrom.survey: "Same as survey" => "Zelfde als enquête"
// inheritWidthFrom.container: "Fit to container" => "Aanpassen aan container"
// backgroundColorSwitch.none: "None" => "Geen"
// backgroundColorSwitch.accentColor: "Accent color" => "Accent kleur"
// backgroundColorSwitch.custom: "Custom" => "Gewoonte"
// colorPalette.light: "Light" => "Licht"
// colorPalette.dark: "Dark" => "Donker"
// isPanelless.false: "Default" => "Verstek"
// isPanelless.true: "Without Panels" => "Zonder panelen"
// theme.cornerRadius: "Corner radius" => "De straal van de hoek"
// theme.fontFamily: "Font family" => "Lettertype familie"
// theme.fontWeightRegular: "Regular" => "Regelmatig"
// theme.fontWeightHeavy: "Heavy" => "Zwaar"
// theme.fontWeightSemiBold: "Semi-bold" => "Semi-vet"
// theme.fontWeightBold: "Bold" => "Brutaal"
// theme.color: "Color" => "Kleur"
// theme.placeholderColor: "Placeholder color" => "Tijdelijke aanduiding voor kleur"
// theme.size: "Size" => "Grootte"
// theme.opacity: "Opacity" => "Dekking"
// ed.toolboxFilteredTextPlaceholder: "Type to search..." => "Typ om te zoeken..."
// ed.toolboxNoResultsFound: "No results found" => "Geen resultaten gevonden"
// paneldynamic.tabTitlePlaceholder: "Tab title placeholder" => "Tijdelijke aanduiding voor tabtitel"
// theme.--sjs-special-red: "Error messages" => "Foutberichten"
// paneldynamic.tabTitlePlaceholder: "A fallback text for tab titles that applies when the tab title pattern doesn't produce a meaningful value." => "Een terugvaltekst voor tabbladtitels die van toepassing is wanneer het patroon van de tabbladtitel geen zinvolle waarde oplevert."
// theme.fontColor: "Font color" => "Tekstkleur"
// theme.backgroundColor: "Background color" => "Achtergrondkleur"
// pe.questionTitleWidth: "Question title width" => "Breedte van de vraagtitel"
// pe.fileInputPlaceholder: "Select a file or paste a file link..." => "Selecteer een bestand of plak een bestandslink..."
// panelbase.questionTitleWidth: "Ex.: 200px" => "Bijv.: 200px"
// panel.questionTitleWidth: "Sets consistent width for question titles when they are aligned to the left of their question boxes. Accepts CSS values (px, %, in, pt, etc.)." => "Hiermee stelt u een consistente breedte in voor vraagtitels wanneer deze links van de vraagvakken zijn uitgelijnd. Accepteert CSS-waarden (px, %, in, pt, enz.)."
// page.questionTitleWidth: "Sets consistent width for question titles when they are aligned to the left of their question boxes. Accepts CSS values (px, %, in, pt, etc.)." => "Hiermee stelt u een consistente breedte in voor vraagtitels wanneer deze links van de vraagvakken zijn uitgelijnd. Accepteert CSS-waarden (px, %, in, pt, enz.)."
// pe.commentAreaRows: "Comment area height (in lines)" => "Hoogte commentaargebied (in lijnen)"
// pehelp.commentAreaRows: "Sets the number of displayed lines in text areas for question comments. In the input takes up more lines, the scroll bar appears." => "Hiermee stelt u het aantal weergegeven regels in tekstgebieden in voor opmerkingen bij vragen. In de invoer neemt meer regels in beslag, de schuifbalk verschijnt."
// pe.enabled: "Enabled" => "Ingeschakeld"
// pe.disabled: "Disabled" => "Invalide"
// pe.inherit: "Inherit" => "Erven"
// pe.validateVisitedEmptyFields: "Validate empty fields on lost focus" => "Lege velden valideren bij verloren focus"
// panellayoutcolumn.effectiveWidth: "Ex.: 30%" => "Excl.: 30%"
// panellayoutcolumn.questionTitleWidth: "Ex.: 200px" => "Bijv.: 200px"
// pehelp.validateVisitedEmptyFields: "Enable this option to trigger validation when a user focuses on an empty input field and then leaves it without making any changes." => "Schakel deze optie in om validatie te activeren wanneer een gebruiker zich richt op een leeg invoerveld en dit vervolgens verlaat zonder wijzigingen aan te brengen."
// pehelp.colCount: "Arranges choice options in a multi-column layout. When set to 0, the options are displayed in a single line." => "Rangschikt keuzeopties in een lay-out met meerdere kolommen. Als de optie op 0 staat, worden de opties op één regel weergegeven."
// theme.isPanelless: "This setting applies only to questions outside of a panel." => "Deze instelling is alleen van toepassing op vragen buiten een panel."
// theme.primaryColor: "Sets a supplementary color that highlights key survey elements." => "Hiermee stelt u een extra kleur in die de belangrijkste enquête-elementen markeert."
// theme.panelBackgroundTransparency: "Adjusts the transparency of panels and question boxes relative to the survey background." => "Hiermee past u de transparantie van deelvensters en vraagvakken aan ten opzichte van de achtergrond van de enquête."
// theme.questionBackgroundTransparency: "Adjusts the transparency of input elements relative to the survey background." => "Hiermee past u de transparantie van invoerelementen aan ten opzichte van de achtergrond van de enquête."
// theme.cornerRadius: "Sets the corner radius for all rectangular elements. Enable the Advanced Mode if you want to set individual corner radius values for input elements or panels and question boxes." => "Hiermee stelt u de hoekradius in voor alle rechthoekige elementen. Schakel de geavanceerde modus in als u afzonderlijke hoekradiuswaarden wilt instellen voor invoerelementen of deelvensters en vraagvakken."
// theme.--sjs-general-backcolor-dim: "Sets the main background color of the survey." => "Hiermee stelt u de hoofdachtergrondkleur van de enquête in."
// header.inheritWidthFrom: "The \"Same as container\" option auto-adjusts the header content area width to fit into the HTML element the survey is placed in." => "Met de optie \"Zelfde als container\" wordt de breedte van het inhoudsgebied van de koptekst automatisch aangepast aan het HTML-element waarin de enquête wordt geplaatst."
// header.textAreaWidth: "The width of the header area that contains the survey title and description, measured in pixels." => "De breedte van het koptekstgebied dat de titel en beschrijving van de enquête bevat, gemeten in pixels."
// panellayoutcolumn.effectiveWidth: "Accepts values %." => "Accepteert waarden %."
// panellayoutcolumn.questionTitleWidth: "Accepts values px." => "Accepteert waarden px."
// p.effectiveColSpan: "Column span" => "Kolom spanwijdte"
// progressBarInheritWidthFrom.survey: "Same as survey" => "Zelfde als enquête"
// progressBarInheritWidthFrom.container: "Same as container" => "Zelfde als container"
// file.allowImagesPreview: "Displays thumbnail previews for uploaded files when possible. Unselect if you want to show file icons instead." => "Geeft indien mogelijk miniatuurvoorbeelden weer voor geüploade bestanden. Schakel de selectie uit als u in plaats daarvan bestandspictogrammen wilt weergeven."
// pehelp.progressBarInheritWidthFrom: "The \"Same as container\" option auto-adjusts the progress bar area width to fit into the HTML element the survey is placed in." => "Met de optie \"Zelfde als container\" wordt de breedte van het gebied van de voortgangsbalk automatisch aangepast aan het HTML-element waarin de enquête is geplaatst."
// p.progressBarInheritWidthFrom: "Progress bar area width" => "Breedte van het voortgangsbalkgebied"
// maskType.none: "None" => "Geen"
// maskType.pattern: "Pattern" => "Patroon"
// maskType.numeric: "Numeric" => "Numeriek"
// maskType.datetime: "Date and Time" => "Datum en tijd"
// maskType.currency: "Currency" => "Valuta"

// inputTextAlignment.auto: "Auto" => "Auto"
// inputTextAlignment.left: "Left" => "Links"
// inputTextAlignment.right: "Right" => "Rechts"
// pehelp.inputTextAlignment: "Select how to align input value within the field. The default setting \"Auto\" aligns the input value to the right if currency or numeric masking is applied and to the left if not." => "Selecteer hoe u de invoerwaarde binnen het veld wilt uitlijnen. De standaardinstelling \"Auto\" lijnt de invoerwaarde uit aan de rechterkant als valuta- of numerieke maskering wordt toegepast en aan de linkerkant als dat niet het geval is."
// p.inputTextAlignment: "Input value alignment" => "Uitlijning van invoerwaarden"
// paneldynamic.showRangeInProgress: "Show the progress bar" => "De voortgangsbalk weergeven"
// paneldynamic.showProgressBar: "Show the progress bar" => "De voortgangsbalk weergeven"
// paneldynamic.progressBarLocation: "Progress bar alignment" => "Uitlijning van de voortgangsbalk"
// pv.carousel: "Carousel" => "Carrousel"
// progressBarLocation.top: "Top" => "Boven"
// progressBarLocation.bottom: "Bottom" => "Bodem"
// progressBarLocation.topBottom: "Top and bottom" => "Boven en onder"
// matrixdropdowncolumn.colCount: "Arranges choice options in a multi-column layout. When set to 0, the options are displayed in a single line. When set to -1, the actual value is inherited from the \"Nested column count\" property of the parent matrix." => "Rangschikt keuzeopties in een lay-out met meerdere kolommen. Als deze optie op 0 staat, worden ze op één regel weergegeven. Wanneer deze is ingesteld op -1, wordt de werkelijke waarde overgenomen van de eigenschap \"Aantal geneste kolommen\" van de bovenliggende matrix."
// ed.translationYouTubeNotSupported: "YouTube links are not supported." => "YouTube-links worden niet ondersteund."
// ed.propertyGridPlaceholderTitle: "Start configuring your form" => "Begin met het configureren van uw formulier"
// ed.propertyGridPlaceholderDescription: "Click any category icon to explore survey settings. Additional settings will become available once you add a survey element to the design surface." => "Klik op een categoriepictogram om de enquête-instellingen te verkennen. Aanvullende instellingen worden beschikbaar zodra u een enquête-element aan het ontwerpoppervlak toevoegt."
// pe.caseInsensitive: "Case insensitive" => "Hoofdlettergevoelig"
// pehelp.caseInsensitive: "Select if uppercase and lowercase letters in the regular expression must be treated as equivalent." => "Selecteer of hoofdletters en kleine letters in de reguliere expressie als gelijkwaardig moeten worden behandeld."

// ed.surveyPlaceholderTitle: "Your form is empty" => "Uw formulier is leeg"
// ed.surveyPlaceholderTitleMobile: "Your form is empty" => "Uw formulier is leeg"
// ed.surveyPlaceholderDescription: "Drag an element from the toolbox or click the button below." => "Sleep een element uit de gereedschapskist of klik op de knop hieronder."
// ed.surveyPlaceholderDescriptionMobile: "Drag an element from the toolbox or click the button below." => "Sleep een element uit de gereedschapskist of klik op de knop hieronder."
// ed.previewPlaceholderTitle: "No preview" => "Geen voorbeeld"
// ed.previewPlaceholderTitleMobile: "No preview" => "Geen voorbeeld"
// ed.previewPlaceholderDescription: "The survey doesn't contain any visible elements." => "De enquête bevat geen zichtbare elementen."
// ed.previewPlaceholderDescriptionMobile: "The survey doesn't contain any visible elements." => "De enquête bevat geen zichtbare elementen."
// ed.translationsPlaceholderTitle: "No strings to translate" => "Geen verplichtingen om te vertalen"
// ed.translationsPlaceholderTitleMobile: "No strings to translate" => "Geen verplichtingen om te vertalen"
// ed.translationsPlaceholderDescription: "Add elements to your form or change the strings filter in the toolbar." => "Voeg elementen toe aan uw formulier of wijzig het tekenreeksfilter in de werkbalk."
// ed.translationsPlaceholderDescriptionMobile: "Add elements to your form or change the strings filter in the toolbar." => "Voeg elementen toe aan uw formulier of wijzig het tekenreeksfilter in de werkbalk."
// lg.logicPlaceholderTitle: "No logical rules" => "Geen logische regels"
// lg.logicPlaceholderTitleMobile: "No logical rules" => "Geen logische regels"
// lg.logicPlaceholderDescription: "Create a rule to customize the flow of the survey." => "Maak een regel om de stroom van de enquête aan te passen."
// lg.logicPlaceholderDescriptionMobile: "Create a rule to customize the flow of the survey." => "Maak een regel om de stroom van de enquête aan te passen."
// pe.showTimer: "Use a timer" => "Gebruik een timer"
// theme.advancedMode: "Advanced mode" => "Geavanceerde modus"
// pehelp.timerLocation: "Sets the location of a timer on a page." => "Hiermee stelt u de locatie van een timer op een pagina in."
// header.mobileHeight: "When set to 0, the height is calculated automatically to accommodate the header's content." => "Als deze optie is ingesteld op 0, wordt de hoogte automatisch berekend om de inhoud van de koptekst te accommoderen."
// p.mobileHeight: "Height on smartphones" => "Hoogte op smartphones"
// header.overlapEnabled: "When enabled, the top of the survey overlays the bottom of the header." => "Als deze optie is ingeschakeld, overlapt de bovenkant van de enquête de onderkant van de koptekst."
// ed.creatorSettingTitle: "Creator Settings" => "Creator-instellingen"
// tabs.accentColors: "Accent colors" => "Accent kleuren"
// tabs.scaling: "Scaling" => "Schalen"
// panel.showQuestionNumbers: "Assigns numbers to questions nested within this panel." => "Wijst nummers toe aan vragen die in dit deelvenster zijn genest."
// creatortheme.--sjs-special-background: "Surface background" => "Oppervlakte achtergrond"
// creatortheme.--sjs-primary-background-500: "Primary" => "Primair"
// creatortheme.--sjs-secondary-background-500: "Secondary" => "Secundair"
// creatortheme.surfaceScale: "Surface" => "Oppervlak"
// creatortheme.userInterfaceBaseUnit: "User interface" => "Gebruikersinterface"
// creatortheme.fontScale: "Font" => "Lettertype"
// names.sc2020: "Survey Creator 2020" => "Enquête maken 2020"
// names.default-light: "Light" => "Licht"
// names.default-dark: "Dark" => "Donker"
// names.default-contrast: "Contrast" => "Tegenstelling"
// panel.showNumber: "Number this panel" => "Nummer dit paneel"
// pehelp.autoAdvanceEnabled: "Select if you want the survey to auto-advance to the next page once a respondent has answered all questions on the current page. This feature won't apply if the last question on the page is open-ended or allows multiple answers." => "Selecteer of u wilt dat de enquête automatisch naar de volgende pagina gaat zodra een respondent alle vragen op de huidige pagina heeft beantwoord. Deze functie is niet van toepassing als de laatste vraag op de pagina een open einde heeft of meerdere antwoorden toestaat."
// autocomplete.name: "Full Name" => "Voor- en achternaam"
// autocomplete.honorific-prefix: "Prefix" => "Voorvoegsel"
// autocomplete.given-name: "First Name" => "Voornaam"
// autocomplete.additional-name: "Middle Name" => "Middelste naam"
// autocomplete.family-name: "Last Name" => "Achternaam"
// autocomplete.honorific-suffix: "Suffix" => "Achtervoegsel"
// autocomplete.nickname: "Nickname" => "Bijnaam"
// autocomplete.organization-title: "Job Title" => "Functietitel"
// autocomplete.username: "User Name" => "Gebruikersnaam"
// autocomplete.new-password: "New Password" => "Nieuw wachtwoord"
// autocomplete.current-password: "Current Password" => "Huidig wachtwoord"
// autocomplete.organization: "Organization Name" => "Naam van de organisatie"
// autocomplete.street-address: "Full Street Address" => "Volledig adres"
// autocomplete.address-line1: "Address Line 1" => "Adres Regel 1"
// autocomplete.address-line2: "Address Line 2" => "Adres Regel 2"
// autocomplete.address-line3: "Address Line 3" => "Adres Regel 3"
// autocomplete.address-level4: "Level 4 Address" => "Niveau 4 Adres"
// autocomplete.address-level3: "Level 3 Address" => "Niveau 3 Adres"
// autocomplete.address-level2: "Level 2 Address" => "Niveau 2 Adres"
// autocomplete.address-level1: "Level 1 Address" => "Niveau 1 Adres"
// autocomplete.country: "Country Code" => "Landcode"
// autocomplete.country-name: "Country Name" => "Naam van het land"
// autocomplete.postal-code: "Postal Code" => "Postcode"
// autocomplete.cc-name: "Cardholder Name" => "Naam kaarthouder"
// autocomplete.cc-given-name: "Cardholder First Name" => "Voornaam kaarthouder"
// autocomplete.cc-additional-name: "Cardholder Middle Name" => "Middelste naam kaarthouder"
// autocomplete.cc-family-name: "Cardholder Last Name" => "Achternaam kaarthouder"
// autocomplete.cc-number: "Credit Card Number" => "Creditcardnummer"
// autocomplete.cc-exp: "Expiration Date" => "Vervaldatum"
// autocomplete.cc-exp-month: "Expiration Month" => "Vervaldatum maand"
// autocomplete.cc-exp-year: "Expiration Year" => "Vervaldatum jaar"
// autocomplete.cc-csc: "Card Security Code" => "Beveiligingscode van de kaart"
// autocomplete.cc-type: "Credit Card Type" => "Type creditcard"
// autocomplete.transaction-currency: "Transaction Currency" => "Valuta van de transactie"
// autocomplete.transaction-amount: "Transaction Amount" => "Transactiebedrag"
// autocomplete.language: "Preferred Language" => "Voorkeurstaal"
// autocomplete.bday: "Birthday" => "Verjaardag"
// autocomplete.bday-day: "Birthday Day" => "Verjaardag Dag"
// autocomplete.bday-month: "Birthday Month" => "Verjaardag Maand"
// autocomplete.bday-year: "Birthday Year" => "Verjaardag Jaar"
// autocomplete.sex: "Gender" => "Geslacht"
// autocomplete.url: "Website URL" => "Website URL"
// autocomplete.photo: "Profile Photo" => "Profielfoto"
// autocomplete.tel: "Telephone Number" => "Telefoonnummer"
// autocomplete.tel-country-code: "Country Code for Phone" => "Landcode voor telefoon"
// autocomplete.tel-national: "National Telephone Number" => "Nationaal telefoonnummer"
// autocomplete.tel-area-code: "Area Code" => "Netnummer"
// autocomplete.tel-local: "Local Phone Number" => "Lokaal telefoonnummer"
// autocomplete.tel-local-prefix: "Local Phone Prefix" => "Lokaal telefoonvoorvoegsel"
// autocomplete.tel-local-suffix: "Local Phone Suffix" => "Lokaal telefoonnummer achtervoegsel"
// autocomplete.tel-extension: "Phone Extension" => "Telefoon extensie"
// autocomplete.email: "Email Address" => "E-mailadres"
// autocomplete.impp: "Instant Messaging Protocol" => "Instant Messaging Protocol"
// ed.lockQuestionsTooltip: "Lock expand/collapse state for questions" => "Vergrendel de uitvouw-/samenvouwstatus voor vragen"
// pe.listIsEmpty@pages: "You don't have any pages yet" => "Je hebt nog geen pagina's"
// pe.addNew@pages: "Add new page" => "Nieuwe pagina toevoegen"
// ed.zoomInTooltip: "Zoom In" => "Inzoomen"
// ed.zoomOutTooltip: "Zoom Out" => "Uitzoomen"
// tabs.surfaceBackground: "Surface Background" => "Oppervlakte Achtergrond"
// pe.copyDefaultValueFromLastEntry: "Use answers from the last entry as default" => "Gebruik antwoorden van de laatste invoer als standaard"
// colors.gray: "Gray" => "Grijs"
// pe.navigationButtonsLocation: "Navigation buttons alignment" => "Uitlijning van navigatieknoppen"
// pv.allQuestions: "Show all questions" => "Toon alle vragen"
// pv.answeredQuestions: "Show answered questions only" => "Alleen beantwoorde vragen weergeven"
// pehelp.navigationButtonsLocation: "Sets the location of navigation buttons on a page." => "Hiermee stelt u de locatie van navigatieknoppen op een pagina in."
// pe.size: "Input field width (in characters)" => "Breedte invoerveld (in tekens)"
// pe.choiceValuesFromQuestion: "Use values from the following matrix column or panel question as choice IDs" => "Gebruik waarden uit de volgende matrixkolom of paneelvraag als keuze-ID's"
// pe.choiceTextsFromQuestion: "Use values from the following matrix column or panel question as choice texts" => "Gebruik waarden uit de volgende matrixkolom of paneelvraag als keuzeteksten"
// pehelp.choiceValuesFromQuestion: "In single- and multiple-selection question types, each choice option has an ID and display value. This setting specifies which matrix column or panel question should provide the IDs." => "In vraagtypen met enkelvoudige en meervoudige selectie heeft elke keuzeoptie een ID en weergavewaarde. Deze instelling geeft aan welke matrixkolom of paneelvraag de ID's moeten bevatten."
// pehelp.choiceTextsFromQuestion: "In single- and multiple-selection question types, each choice option has an ID and display value. This setting specifies which matrix column or panel question should provide the display texts." => "In vraagtypen met enkelvoudige en meervoudige selectie heeft elke keuzeoptie een ID en weergavewaarde. Deze instelling geeft aan welke matrixkolom of paneelvraag de weergaveteksten moet opleveren."
// pe.progressBarLocation: "Progress bar alignment" => "Uitlijning van de voortgangsbalk"
// progressBarLocation.topbottom: "Top and bottom" => "Boven en onder"
// progressBarLocation.aboveheader: "Above the header" => "Boven de koptekst"
// progressBarLocation.belowheader: "Below the header" => "Onder de kop"
// progressBarLocation.off: "Hidden" => "Verborgen"
// survey.progressBarLocation: "Sets the location of the progress bar. The \"Auto\" value displays the progress bar above or below the survey header." => "Hiermee stelt u de locatie van de voortgangsbalk in. De waarde \"Auto\" geeft de voortgangsbalk boven of onder de kop van de enquête weer."
// survey.readOnly: "Make the survey read-only" => "De enquête alleen-lezen maken"
// survey.readOnly: "Select if you want to prevent respondents from filling out your survey." => "Selecteer deze optie als u wilt voorkomen dat respondenten uw enquête invullen."
// paneldynamic.showNumber: "Number the panel" => "Nummer het paneel"
// question.showNumber: "Number this question" => "Nummer deze vraag"
// pe.previewMode: "Preview mode" => "Preview-modus"
// pe.gridLayoutEnabled: "Enable the grid layout" => "De rasterlay-out inschakelen"
// pe.maskSettings: "Mask settings" => "Masker-instellingen"
// pe.detailErrorLocation: "Row expansion error message alignment" => "Uitlijning van foutmeldingen bij rijuitbreiding"
// pehelp.detailErrorLocation: "Sets the location of error messages for questions nested in detail sections. The \"Inherit\" option applies the setting from the \"Error message alignment\" property." => "Hiermee stelt u de locatie in van foutmeldingen voor vragen die zijn genest in detailsecties. De optie \"Overerven\" past de instelling van de eigenschap \"Uitlijning van foutmeldingen\" toe."
// pe.gridLayoutColumns: "Grid layout columns" => "Kolommen voor rasterlay-out"
// pe.startPageTitlePlaceholder: "Start Page" => "Startpagina"
// panellayoutcolumn.effectiveWidth: "Effective width, %" => "Effectieve breedte, %"
// panellayoutcolumn.questionTitleWidth: "Question title width, px" => "Breedte vraagtitel, px"
// pe.listIsEmpty@gridLayoutColumns: "You don't have layout columns yet" => "Je hebt nog geen lay-outkolommen"
// panel.effectiveColSpan: "Specifies how many columns this panel spans within the grid layout." => "Hiermee geeft u aan hoeveel kolommen dit deelvenster beslaat binnen de rasterlay-out."
// panel.gridLayoutColumns: "This table lets you configure each grid column within the panel. It automatically sets the width percentage for each column based on the maximum number of elements in a row. To customize the grid layout, manually adjust these values and define the title width for all questions in each column." => "Met deze tabel kunt u elke rasterkolom in het deelvenster configureren. Het stelt automatisch het breedtepercentage voor elke kolom in op basis van het maximale aantal elementen in een rij. Als u de rasterlay-out wilt aanpassen, past u deze waarden handmatig aan en definieert u de titelbreedte voor alle vragen in elke kolom."
// pehelp.gridLayoutEnabled: "Survey Creator allows you to manually adjust the inline widths of form elements to control the layout. If this doesn't produce the desired outcome, you can enable the grid layout, which structures form elements using a column-based system. To configure layout columns, select a page or panel and use the \"Question Settings\" → \"Grid columns\" table. To adjust how many columns a question spans, select it and set the desired value in the \"Layout\" → \"Column span\" field." => "Met Survey Creator kunt u de inlinebreedtes van formulierelementen handmatig aanpassen om de lay-out te beheren. Als dit niet het gewenste resultaat oplevert, kunt u de rasterlay-out inschakelen, waarvan de structuren elementen vormen met behulp van een op kolommen gebaseerd systeem. Om lay-outkolommen te configureren, selecteer je een pagina of paneel en gebruik je de tabel \"Vraaginstellingen\" → \"Rasterkolommen\". Om aan te passen hoeveel kolommen een vraag beslaat, selecteer je deze en stel je de gewenste waarde in in het veld \"Lay-out\" → \"Kolomspanwijdte\"."
// question.effectiveColSpan: "Specifies how many columns this question spans within the grid layout." => "Hiermee geeft u aan hoeveel kolommen deze vraag beslaat binnen de rasterlay-out."
// page.gridLayoutColumns: "This table lets you configure each grid column on the page. It automatically sets the width percentage for each column based on the maximum number of elements in a row. To customize the grid layout, manually adjust these values and define the title width for all questions in each column." => "Met deze tabel kunt u elke rasterkolom op de pagina configureren. Het stelt automatisch het breedtepercentage voor elke kolom in op basis van het maximale aantal elementen in een rij. Als u de rasterlay-out wilt aanpassen, past u deze waarden handmatig aan en definieert u de titelbreedte voor alle vragen in elke kolom."

// ed.expandTooltip: "Expand" => "Uitbreiden"
// ed.collapseTooltip: "Collapse" => "Instorting"
// pe.itemTitleWidth_placeholder: "Ex.: 100px" => "Bijv.: 100px"
// pehelp.itemTitleWidth: "Sets consistent width for all item labels. Accepts CSS values (px, %, in, pt, etc.)." => "Hiermee stelt u een consistente breedte in voor alle artikellabels. Accepteert CSS-waarden (px, %, in, pt, enz.)."
// ed.zoom100Tooltip: "Zoom to 100%" => "Inzoomen tot 100%"
// ed.addLanguageTooltip: "Add Language" => "Taal toevoegen"
// pehelp.commentAreaRows: "Sets the number of displayed lines in text areas for question comments. If the input takes up more lines, the scroll bar appears." => "Hiermee stelt u het aantal weergegeven regels in tekstgebieden in voor opmerkingen bij vragen. Als de invoer meer regels in beslag neemt, wordt de schuifbalk weergegeven."
// pe.defaultDisplayValue: "Default display value for dynamic texts" => "Standaardweergavewaarde voor dynamische teksten"
// pehelp.defaultDisplayValue: "A value displayed in HTML questions and in the dynamic titles and descriptions of survey elements when the question value is empty." => "Een waarde die wordt weergegeven in HTML-vragen en in de dynamische titels en beschrijvingen van enquête-elementen wanneer de vraagwaarde leeg is."
// showQuestionNumbers.recursive: "Recursive numbering" => "Recursieve nummering"
// paneldynamic.templateQuestionTitleWidth: "Question title width" => "Breedte van de vraagtitel"
// pe.allowCustomChoices: "Allow custom choices" => "Aangepaste keuzes toestaan"
// paneldynamic.templateQuestionTitleWidth: "Sets consistent width for question titles when they are aligned to the left of their question boxes. Accepts CSS values (px, %, in, pt, etc.)." => "Hiermee stelt u een consistente breedte in voor vraagtitels wanneer deze links van de vraagvakken zijn uitgelijnd. Accepteert CSS-waarden (px, %, %, in, pt, enz.)."
// page.name: "A page ID that is not visible to respondents." => "Een pagina-ID die niet zichtbaar is voor respondenten."
// page.description: "Type a page subtitle." => "Typ een pagina-ondertitel."
// page.navigationTitle: "A caption displayed on a navigation button in the progress bar or table of contents (TOC). If you leave this field empty, the navigation button will use the page title or page name. To enable the progress bar or TOC, go to \"Survey\" → \"Navigation\"." => "Een bijschrift dat wordt weergegeven op een navigatieknop in de voortgangsbalk of inhoudsopgave (TOC). Als u dit veld leeg laat, gebruikt de navigatieknop de paginatitel of paginanaam. Om de voortgangsbalk of inhoudsopgave in te schakelen, ga je naar \"Enquête\" → \"Navigatie\"."
// pehelp.allowCustomChoices: "Select to let respondents add their own choices if the desired option isn't available in the dropdown. Custom choices will only be stored temporarily for the duration of the current browser session." => "Selecteer deze optie om respondenten hun eigen keuzes te laten toevoegen als de gewenste optie niet beschikbaar is in de vervolgkeuzelijst. Aangepaste keuzes worden slechts tijdelijk opgeslagen voor de duur van de huidige browsersessie."