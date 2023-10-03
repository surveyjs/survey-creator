import { editorLocalization } from "survey-creator-core";

export let svStrings = {
  // survey templates
  survey: {
    edit: "Redigera",
    externalHelpLink: "Se och lär dig hur du skapar enkäter",
    externalHelpLinkUrl: "https://www.youtube.com/channel/UCH2ru9okIcooNZfpIbyq4qQ?view_as=subscriber",
    dropQuestion: "Dra och släpp en fråga från Verktygslistan till vänster.",
    addLogicItem: "Skapa en regel för att anpassa undersökningens flöde.",
    copy: "Kopiera",
    duplicate: "Duplicera",
    addToToolbox: "Lägg till Verktygslistan",
    deletePanel: "Radera Panel",
    deleteQuestion: "Radera Fråga",
    convertTo: "Konvertera till",
    drag: "Dra element",
  },
  // Question types
  qt: {
    default: "Standard",
    checkbox: "Checkboxes",
    comment: "Kommentar",
    imagepicker: "Bild-väljare",
    ranking: "Rankning",
    image: "Bild",
    dropdown: "Rullgardinsmeny",
    tagbox: "Listruta med flerval",
    file: "Fil",
    html: "Html",
    matrix: "Matris (enkel val)",
    matrixdropdown: "Matris(flera val)",
    matrixdynamic: "Matris (dynamiska rader)",
    multipletext: "Flera texter",
    panel: "Panel",
    paneldynamic: "Panel (dynamisk panel)",
    radiogroup: "Radiogrupper",
    rating: "Rankning",
    text: "Enkel text",
    boolean: "Yes/No (Boolean)",
    expression: "Formel",
    signaturepad: "Underskrift",
    buttongroup: "Knappgrupp"
  },
  // Strings in SurveyJS Creator
  ed: {
    defaultLocale: "Standard ({0})",
    survey: "Enkät",
    settings: "Enkät inställningar",
    settingsTooltip: "Öppna inställningar",
    surveySettings: "Inställningar för undersökning",
    surveySettingsTooltip: "Öppna undersökningsinställningar",
    themeSettings: "Tema Inställningar",
    themeSettingsTooltip: "Öppna temainställningar",
    showPanel: "Visa panel",
    hidePanel: "Dölj panel",
    prevSelected: "Välj föregående",
    nextSelected: "Välj nästa",
    surveyTypeName: "Undersökning",
    pageTypeName: "Sida",
    panelTypeName: "Panel",
    questionTypeName: "Fråga",
    columnTypeName: "Spalt",
    addNewPage: "Lägg till en ny sida",
    moveRight: "Scrolla till höger",
    moveLeft: "Scrolla till vänster",
    deletePage: "Radera sida",
    editPage: "Redigera sida",
    edit: "Redigera",
    newPageName: "sida",
    newQuestionName: "fråga",
    newPanelName: "panel",
    newTextItemName: "SMS",
    testSurvey: "Test enkät",
    themeSurvey: "Teman",
    defaultV2Theme: "Standard",
    modernTheme: "Modern",
    defaultTheme: "Standard (äldre)",
    testSurveyAgain: "Testa enkät igen",
    testSurveyWidth: "Enkät bredd: ",
    navigateToMsg: "Du var tvungen att navigera till",
    logic: "Logik",
    embedSurvey: "Integrerad Enkät",
    translation: "Översättning",
    saveSurvey: "Spara Enkät",
    saveSurveyTooltip: "Spara undersökning",
    designer: "Enkät Designer",
    jsonEditor: "JSON Redigering",
    jsonHideErrors: "Dölj fel",
    jsonShowErrors: "Visa fel",
    undo: "Ångra",
    redo: "Göra om",
    undoTooltip: "Ångra senaste ändring",
    redoTooltip: "Gör om ändringen",
    showMoreChoices: "Visa mer",
    showLessChoices: "Visa mindre",
    copy: "Kopia",
    cut: "Skära",
    paste: "Klistra",
    copyTooltip: "Kopiera markering till Urklipp",
    cutTooltip: "Klipp markering till Urklipp",
    pasteTooltip: "Klistra in från Urklipp",
    options: "Alternativ",
    generateValidJSON: "Generera giltig JSON",
    generateReadableJSON: "Generera läsbar JSON",
    toolbox: "Verktygslista",
    "property-grid": "Egenskaper",
    propertyGridFilteredTextPlaceholder: "Skriv för att söka...",
    toolboxGeneralCategory: "Generellt",
    toolboxChoiceCategory: "Frågor om val",
    toolboxTextCategory: "Frågor om textinmatning",
    toolboxContainersCategory: "Behållare",
    toolboxMatrixCategory: "Matris frågor",
    toolboxMiscCategory: "Misc",
    correctJSON: "Var vänligen korrigera JSON.",
    surveyResults: "Enkät resultat: ",
    surveyResultsTable: "Som tabell",
    surveyResultsJson: "Som JSON",
    resultsTitle: "Frågetitel",
    resultsName: "Frågenamn",
    resultsValue: "Resultat värde",
    resultsDisplayValue: "Visnings värde",
    modified: "Ändrat",
    saving: "Sparar",
    saved: "Sparat",
    propertyEditorError: "Fel",
    saveError: "Fel! Innehållet i enkäten är inte sparat.",
    translationPropertyGridTitle: "Språkinställningar",
    themePropertyGridTitle: "Tema Inställningar",
    translationLanguages: "Språk",
    translationDeleteLanguage: "Är du säker på att du vill ta bort alla strängar för det här språket?",
    translationAddLanguage: "Välj språk för oversättning",
    translationShowAllStrings: "Visa alla strängar",
    translationShowUsedStringsOnly: "Endast använda strängar",
    translationShowAllPages: "Visa alla sidor",
    translationNoStrings: "Inga strängar är översatta. Vänligen ändra filtret.",
    translationExportToSCVButton: "Exportera till CSV",
    translationImportFromSCVButton: "Importera från CSV",
    translateUsigAI: "Översätt alla automatiskt",
    translationDialogTitle: "Oöversatta strängar",
    translationMergeLocaleWithDefault: "Mergea {0} med standard språk",
    translationPlaceHolder: "Översättning...",
    themeExportButton: "Export",
    themeImportButton: "Import",
    themeResetButton: "Återställ temainställningarna till standard",
    bold: "Djärv",
    italic: "Kursiv",
    underline: "Understryka",
    addNewQuestion: "Lägg till fråga",
    selectPage: "Välj sida...",
    carryForwardChoicesCopied: "Alternativen kopieras från",
    htmlPlaceHolder: "HTML-innehåll kommer att finnas här.",
    panelPlaceHolder: "Släpp en fråga från verktygslådan här.",
    surveyPlaceHolder: "Enkäten är tom. Dra ett element från verktygslådan eller klicka på knappen nedan.",
    imagePlaceHolder: "Dra och släpp en bild här eller klicka på knappen nedan och välj en bild att ladda upp",
    imageChooseImage: "Välj bild",
    addNewTypeQuestion: "Lägg till {0}", //{0} is localizable question type
    chooseLogoPlaceholder: "[LOGOTYP]",
    auto: "bil",
    choices_Item: "Sak ",
    lg: {
      addNewItem: "Lägg till ny regel",
      empty_tab: "Skapa en regel för att anpassa undersökningens flöde.",
      page_visibilityName: "Visa (dölj) sida",
      page_enableName: "Aktivera (inaktivera) sida",
      panel_visibilityName: "Visa (dölj) panelen",
      panel_enableName: "Aktivera (inaktivera) panelen",
      question_visibilityName: "Visa (dölj) fråga",
      question_enableName: "Aktivera (inaktivera) fråga",
      question_requireName: "Gör frågan obligatorisk",
      column_visibilityName: "Visa (dölj) kolumn",
      column_enableName: "Aktivera (inaktivera) kolumn",
      column_requireName: "Gör kolumnen obligatorisk",
      trigger_completeName: "Fullständig undersökning",
      trigger_setvalueName: "Ställ in svar",
      trigger_copyvalueName: "Kopiera svar",
      trigger_skipName: "Hoppa till fråga",
      trigger_runExpressionName: "Kör uttryck",
      completedHtmlOnConditionName: "Ställ in sidmarkeringen \"Undersökningen slutförd\"",
      page_visibilityDescription: "Gör sidan synlig när logikuttrycket returnerar true. Håll den annars osynlig.",
      panel_visibilityDescription: "Gör panelen synlig när logikuttrycket returnerar true. Håll den annars osynlig.",
      panel_enableDescription: "Aktivera panelen och alla element inuti den när logikuttrycket returnerar true. Håll dem annars inaktiverade.",
      question_visibilityDescription: "Gör frågan synlig när logikuttrycket returnerar true. Håll den annars osynlig.",
      question_enableDescription: "Aktivera frågan när logikuttrycket returnerar true. Annars ska du hålla den inaktiverad.",
      question_requireDescription: "Frågan blir obligatorisk när logikuttrycket returnerar true.",
      trigger_completeDescription: "När logikuttrycket returnerar true slutförs undersökningen och en slutanvändare ser tacksidan.",
      trigger_setvalueDescription: "När frågevärden, som används i logikuttrycket, ändras och logikuttrycket returnerar true, anges värdet till den valda frågan.",
      trigger_copyvalueDescription: "När frågevärden, som används i logikuttrycket, ändras och logikuttrycket returnerar true, kopieras värdet för en markerad fråga till en annan markerad fråga.",
      trigger_skipDescription: "När logikuttrycket returnerar true hoppar undersökningen till / fokuserar den valda frågan.",
      trigger_runExpressionDescription: "När logikuttrycket returnerar true utförs det anpassade uttrycket. Om du vill kan du ange detta uttrycksresultat i den valda frågan",
      completedHtmlOnConditionDescription: "Om logikuttrycket returnerar true ändras standardtexten för tacksidan till den angivna.",
      itemExpressionText: "När uttryck: \"{0}\" returnerar true", //{0} - the expression
      itemEmptyExpressionText: "Ny regel",
      page_visibilityText: "Gör sidan {0} synlig", //{0} page name
      panel_visibilityText: "Gör panelen {0} synlig", //{0} panel name
      panel_enableText: "Gör panelen {0} aktivera", //{0} panel name
      question_visibilityText: "Gör frågan {0} synlig", //{0} question name
      question_enableText: "Gör frågan {0} aktivera", //{0} question name
      question_requireText: "Gör frågan {0} krävs", //{0} question name
      column_visibilityText: "Synliggör kolumn {0} av fråga {1}", //{0} column name, {1} question name
      column_enableText: "Gör kolumn {0} av fråga {1} aktivera", //{0} column name, {1} question name
      column_requireText: "Gör kolumn {0} av fråga {1} krävs", //{0} column name, {1} question name
      trigger_completeText: "Undersökningen blir slutförd",
      trigger_setvalueText: "ifrågasätts: {0} värde {1}", //{0} question name, {1} setValue
      trigger_setvalueEmptyText: "Tydligt frågevärde: {0}", //{0} question name
      trigger_copyvalueText: "Kopiera till fråga: {0} värde från fråga {1}", //{0} and {1} question names
      trigger_skipText: "Enkät hoppa till frågan {0}", //{0} question name
      trigger_runExpressionText1: "kör uttryck: '{0}'", //{0} the expression
      trigger_runExpressionText2: " och ifrågasatte resultatet: {0}", //{0} question name
      completedHtmlOnConditionText: "visa anpassad text för tacksidan.",
      showAllQuestions: "Alla frågor",
      showAllActionTypes: "Alla åtgärdstyper",
      conditions: "Skick",
      actions: "Åtgärd(er)",
      expressionEditorTitle: "Definiera villkor",
      actionsEditorTitle: "Definiera åtgärder",
      deleteAction: "Ta bort åtgärd",
      addNewAction: "Lägg till åtgärd",
      selectedActionCaption: "Välj åtgärd...",
      expressionInvalid: "Logikuttrycket är tomt eller ogiltigt. Var snäll och rätta till det.",
      noActionError: "Lägg till minst en åtgärd.",
      actionInvalid: "Snälla, åtgärda problem i dina åtgärder.",
      uncompletedRule_title: "Logiska regler är ofullständiga",
      uncompletedRule_text: "Du har inte slutfört några av de logiska reglerna. Om du lämnar fliken nu kommer ändringarna att gå förlorade. Vill du fortfarande lämna fliken utan att slutföra ändringarna?",
      uncompletedRule_apply: "Ja",
      uncompletedRule_cancel: "Nej, jag vill komplettera reglerna",
      // expressionSetup: "",
      // actionsSetup: ""
    }
  },
  // Property Editors
  pe: {
    apply: "Faställ",
    ok: "OK",
    save: "Spara",
    clear: "Klar",
    saveTooltip: "Spara",
    cancel: "Avbryt",
    set: "Ställa",
    reset: "Återställ",
    change: "Förändring",
    refresh: "Svalka",
    close: "Stäng",
    delete: "Radera",
    add: "Addera",
    addNew: "Lägg till ny",
    addItem: "Klicka för att lägga till...",
    removeItem: "Klicka för att ta bort objektet...",
    dragItem: "Dra objektet",
    addOther: "Annan",
    addSelectAll: "Markera alla",
    addNone: "Ingen",
    removeAll: "Ta bort allt",
    edit: "Redigera",
    back: "Returnera utan att spara",
    backTooltip: "Returnera utan att spara",
    saveAndBack: "Spara och returnera",
    saveAndBackTooltip: "Spara och returnera",
    doneEditing: "Färdig",
    editChoices: "Redigera val",
    showChoices: "Visa alternativ",
    move: "Flytta",
    empty: "<tom>",
    emptyValue: "Värdet är tomt",
    fastEntry: "Snabb ifyllning",
    fastEntryNonUniqueError: "Värdet \"{0}\" är inte unikt",
    fastEntryChoicesCountError: "Begränsa antalet artiklar från {0} till {1}",
    fastEntryChoicesMinCountError: "Ange minst {0} artiklar",
    fastEntryPlaceholder: "Du kan ange data i följande format:\nvärde1|text\nvärde2",
    formEntry: "Ifyllning i enkäten",
    testService: "Testa tjänsten",
    itemSelectorEmpty: "Välj elementet",
    conditionActionEmpty: "Välj åtgärd",
    conditionSelectQuestion: "Välj fråga...",
    conditionSelectPage: "Välj sida...",
    conditionSelectPanel: "Välj panel...",
    conditionValueQuestionTitle: "Vänligen skriv in/välj värdet",
    expressionHelp: "Var vänligen skriv in ett uttryck.  Du kan använda måsvingar för att få tillgång till det sparade värdet: '{question1} + {question2}', '({price}*{quantity}) * (100 - {discount})'",
    aceEditorHelp: "Tryck ctrl+mellanslag för att få en ledtråd",
    aceEditorRowTitle: "Nuvarande rad",
    aceEditorPanelTitle: "Nuvarande panel",
    showMore: "För mer detaljer - se dokumentationen",
    assistantTitle: "Tillgängliga frågor:",
    cellsEmptyRowsColumns: "Det bör vara minst 1 kolumn eller rad",
    showPreviewBeforeComplete: "Förhandsgranska svar innan du skickar in undersökningen",
    overridingPropertyPrefix: "Inställd av ",
    resetToDefaultCaption: "Nollställa",
    propertyIsEmpty: "Vänligen fyll i ett värde",
    propertyIsNoUnique: "Ange ett unikt värde",
    propertyNameIsNotUnique: "Ange ett unikt namn",
    propertyNameIsIncorrect: "Använd inte reserverade ord: \"objekt\", \"val\", \"panel\", \"rad\".",
    listIsEmpty: "Inga objekt har lagts till ännu",
    "listIsEmpty@choices": "Inga alternativ har lagts till ännu",
    "addNew@choices": "Lägg till ett val",
    expressionIsEmpty: "Uttrycket är tomt",
    value: "Värde",
    text: "Text",
    rowid: "Rad ID",
    imageLink: "Bild länk",
    columnEdit: "Redigera kolumn: {0}",
    itemEdit: "Redigera element: {0}",
    url: "URL",
    path: "Sökväg",
    valueName: "Värde namn",
    choicesbyurl: {
      valueName: "Hämta värden från följande JSON-fält"
    },
    titleName: "Titel namn",
    imageLinkName: "Hämta bild-URL:er från följande JSON-fält",
    allowEmptyResponse: "Tillåt tomt svar",
    titlePlaceholder: "Titel",
    surveyTitlePlaceholder: "Undersökningens titel",
    pageTitlePlaceholder: "Sida {num}",
    descriptionPlaceholder: "Beskrivning",
    surveyDescriptionPlaceholder: "Beskrivning",
    pageDescriptionPlaceholder: "Beskrivning",
    showOtherItem: "Har annat element",
    otherText: "Annat",
    showNoneItem: "Tillåt alternativet Ingen",
    noneText: "Alternativtext för Ingen",
    showSelectAllItem: "Tillåt alternativet Markera allt",
    selectAllText: "Markera all alternativtext",
    choicesMin: "Minimivärde för automatiskt genererade objekt",
    choicesMax: "Maximalt värde för automatiskt genererade objekt",
    choicesStep: "Steg för automatiskt genererade objekt",
    name: "Namn",
    title: "Titel",
    cellType: "Cell typ",
    colCount: "Antal kolumner",
    choicesOrder: "Välj ordning på valet",
    visible: "Synlig?",
    isRequired: "Nödvändig?",
    markRequired: "Markera efter behov",
    removeRequiredMark: "Ta bort det obligatoriska märket",
    isAllRowRequired: "Kräv svar för alla rader",
    requiredErrorText: "Felmeddelandet \"Obligatoriskt\"",
    startWithNewLine: "Starta på en ny rad?",
    rows: "Antal rader",
    cols: "Kolumner",
    placeholder: "Mata in i fältet",
    showPreview: "Förhandsvinsning av bild?",
    storeDataAsText: "Lagra filinnehållet i JSON som text",
    maxSize: "Max filstorlek i bytes",
    imageHeight: "Bild höjd",
    imageWidth: "Bild bredd",
    rowCount: "Antal rader",
    columnLayout: "Stil på kolumn",
    addRowLocation: "Lägg till radknapp plats",
    addRowText: "Lägg till knapp text",
    removeRowText: "Ta bort rad knapp text",
    rateMin: "Minsta räntevärde",
    rateMax: "Högsta taxa",
    rateStep: "Betygsätt steg",
    minRateDescription: "Minsta betyg beskrivning",
    maxRateDescription: "Maximala betyg beskrivning",
    inputType: "Indata typ",
    optionsCaption: "Text för alternativ",
    defaultValue: "Standard värde",
    cellsDefaultRow: "Standard cell texter",
    surveyEditorTitle: "Redigera schema inställningar",
    qEditorTitle: "Redigera: {0}",
    maxLength: "Max längd",
    buildExpression: "Bygga",
    editExpression: "Redigera",
    and: "och",
    or: "eller",
    remove: "Avlägsna",
    addCondition: "Lägg till villkor",
    emptyLogicPopupMessage: "Välj en fråga för att börja konfigurera villkor.",
    if: "Om",
    then: "då",
    setToName: "Målfråga",
    fromName: "Fråga att kopiera svar från",
    gotoName: "Fråga att hoppa till",
    ruleIsNotSet: "Regeln är felaktig",
    includeIntoResult: "Inkludera i undersökningsresultat",
    showTitle: "Visa/dölj titel",
    expandCollapseTitle: "Expandera/komprimera titel",
    locale: "Standard språk",
    simulator: "Välj enhetstyp",
    landscapeOrientation: "Växla till liggande orientering",
    portraitOrientation: "Växla till stående orientering",
    mode: "Läge (redigera/läsa enbart)",
    clearInvisibleValues: "Rensa osynliga värden",
    cookieName: "Kaknamn (för att inaktivera kör enkäten två gånger lokalt)",
    sendResultOnPageNext: "Skicka enkät resultatet till nästa sida",
    storeOthersAsComment: "Lagra 'andra' värden i ett separat fält",
    showPageTitles: "Visa sidtitel",
    showPageNumbers: "Visa sidnummer",
    pagePrevText: "Föregående",
    pageNextText: "Nästa",
    completeText: "Färdig",
    previewText: "Text för knappen Förhandsgranska svar",
    editText: "Text för knappen Redigera svar",
    startSurveyText: "Start knapp text",
    showNavigationButtons: "Visa navigationsknappar (standard navigering)",
    showPrevButton: "Visa föregående knapp (användaren kan gå återgå till föregående sida)",
    firstPageIsStarted: "Den första sidan i enkäten är startsidan.",
    showCompletedPage: "Visa den slutförda sidan på slutet (completedHtml)",
    goNextPageAutomatic: "Vid besvarande av alla frågor, gå till nästa sida automatiskt",
    showProgressBar: "Visa händelsförlopp",
    questionTitleLocation: "Fråga titel placering",
    requiredText: "Var vänlig skriv en text",
    questionStartIndex: "Fråga start index (1, 2 eller 'A', 'a')",
    showQuestionNumbers: "Visa frågenummer",
    questionTitleTemplate: "Fråga titel mall, standard är: '{no}. {require} {title}'",
    questionErrorLocation: "Fråga fel placerad",
    focusFirstQuestionAutomatic: "Fokusera på första frågan vid ändring av sidan",
    questionsOrder: "Element ordning på sidan",
    maxTimeToFinish: "Max tid för att slutföra enkäten",
    maxTimeToFinishPage: "Max tid för att göra färdigt en sida i enkäten",
    image: {
      imageHeight: "Bildhöjd (i CSS-accepterade värden)",
      imageWidth: "Bildbredd (i CSS-godkända värden)"
    },
    page: {
      maxTimeToFinish: "Tidsgräns för att avsluta sidan (i sekunder)"
    },
    question: {
      page: "Överordnad sida"
    },
    showTimerPanel: "Visa tidtagning",
    showTimerPanelMode: "Visa tidtagning läge",
    renderMode: "Rendering läge",
    allowAddPanel: "Tillåt att lägga till panel",
    allowRemovePanel: "Tillåt att ta bort panel",
    noEntriesText: "Tomma poster text",
    panelAddText: "Lägg till panel text",
    panelRemoveText: "Ta bort panel text",
    isSinglePage: "Visa alla element på en sida",
    html: "HTML-kod",
    expression: "Uttryck",
    setValue: "Svar",
    dataFormat: "Bildformat",
    allowAddRows: "Tillåt att rader läggs till",
    allowRemoveRows: "Tillåt borttagning av rader",
    allowRowsDragAndDrop: "Tillåt dra och släpp rader",
    responsiveImageSizeHelp: "Gäller inte om du anger bildens exakta bredd eller höjd.",
    minImageWidth: "Minsta bildbredd",
    maxImageWidth: "Maximal bildbredd",
    minImageHeight: "Minsta bildhöjd",
    maxImageHeight: "Maximal bildhöjd",
    minValue: "Minsta värde",
    maxValue: "Maximalt värde",
    minLength: "Minsta längd (i tecken)",
    allowDigits: "Tillåt siffror",
    minCount: "Minsta antal",
    maxCount: "Maximalt antal",
    regex: "Reguljärt uttryck",
    surveyvalidator: {
      text: "Felmeddelande",
      expression: "Uttryck för validering"
    },
    totalText: "Text för summarad",
    totalType: "Total typ",
    totalExpression: "Totalt uttryck",
    totalDisplayStyle: "Visningsformat för totalt värde",
    totalCurrency: "Valuta",
    totalFormat: "Formaterad sträng",
    logo: "Logotyp (URL eller base64-kodad sträng)",
    questionsOnPageMode: "Undersökningens struktur",
    maxTextLength: "Maximal svarslängd (i tecken)",
    maxOthersLength: "Maximal kommentarslängd (i tecken)",
    autoGrowComment: "Expandera kommentarsområdet automatiskt om det behövs",
    allowResizeComment: "Tillåt användare att ändra storlek på textområden",
    textUpdateMode: "Uppdatera textfrågevärde",
    focusOnFirstError: "Ställ in fokus på det första ogiltiga svaret",
    checkErrorsMode: "Kör validering",
    navigateToUrl: "Navigera till URL",
    navigateToUrlOnCondition: "Dynamisk URL",
    completedBeforeHtml: "Markering för att visa om användaren redan har fyllt i undersökningen",
    completedHtml: "Undersökning slutförd sidmarkering",
    completedHtmlOnCondition: "Dynamisk undersökning Fullständig sidmarkering",
    loadingHtml: "Markering som ska visas medan undersökningsmodellen läses in",
    commentText: "Text i kommentarsområdet",
    autocomplete: "Typ av komplettera automatiskt",
    labelTrue: "Etiketten \"Sant\"",
    labelFalse: "Etiketten \"Falskt\"",
    allowClear: "Visa knappen Rensa",
    displayStyle: "Visningsformat för värde",
    format: "Formaterad sträng",
    maximumFractionDigits: "Maximala bråktal",
    minimumFractionDigits: "Minsta bråktal",
    useGrouping: "Visa grupperingsavgränsare",
    allowMultiple: "Tillåt flera filer",
    allowImagesPreview: "Förhandsgranska bilder",
    acceptedTypes: "Godkända filtyper",
    waitForUpload: "Vänta tills uppladdningen är klar",
    needConfirmRemoveFile: "Bekräfta borttagning av fil",
    detailPanelMode: "Placering på detaljpanelen",
    minRowCount: "Minsta antal rader",
    maxRowCount: "Maximalt antal rader",
    confirmDelete: "Bekräfta borttagning av rad",
    confirmDeleteText: "Bekräftelsemeddelande",
    paneldynamic: {
      confirmDelete: "Bekräfta borttagning av panelen"
    },
    panelCount: "Inledande panelantal",
    minPanelCount: "Minsta antal paneler",
    maxPanelCount: "Maximalt antal paneler",
    panelsState: "Expanderingsläge för innerpanelen",
    templateDescription: "Beskrivning mall",
    templateTitle: "Mall för titel",
    panelPrevText: "Knappbeskrivning för föregående panel",
    panelNextText: "Knappbeskrivning för knappen Nästa panel",
    showRangeInProgress: "Visa förloppsindikator",
    templateTitleLocation: "Plats för frågerubrik",
    panelRemoveButtonLocation: "Ta bort panelknappens placering",
    hideIfRowsEmpty: "Dölj frågan om det inte finns några rader",
    hideColumnsIfEmpty: "Dölj kolumner om det inte finns några rader",
    rateValues: "Anpassade prisvärden",
    rateCount: "Antal priser",
    autoGenerate: "Hur anger jag hastighetsvärden?",
    hideIfChoicesEmpty: "Dölj frågan om den inte innehåller några alternativ",
    hideNumber: "Dölj frågenummer",
    minWidth: "Minsta bredd (i CSS-godkända värden)",
    maxWidth: "Maximal bredd (i CSS-godkända värden)",
    width: "Bredd (i CSS-accepterade värden)",
    showHeader: "Visa kolumnrubriker",
    horizontalScroll: "Visa vågrät rullningslist",
    columnMinWidth: "Minsta kolumnbredd (i CSS-godkända värden)",
    rowTitleWidth: "Radrubrikbredd (i CSS-godkända värden)",
    valueTrue: "\"Sant\" värde",
    valueFalse: "\"Falskt\" värde",
    minErrorText: "Felmeddelandet \"Värdet är under minimum\"",
    maxErrorText: "Felmeddelandet \"Värdet överskrider max\"",
    otherErrorText: "Felmeddelandet \"Tom kommentar\"",
    keyDuplicationError: "Felmeddelandet \"Icke-unikt nyckelvärde\"",
    minSelectedChoices: "Minsta valda val",
    maxSelectedChoices: "Maximalt antal valda val",
    showClearButton: "Visa knappen Rensa",
    showNumber: "Visa panelnummer",
    logoWidth: "Logotypbredd (i CSS-godkända värden)",
    logoHeight: "Logotypens höjd (i CSS-godkända värden)",
    readOnly: "Skrivskyddad",
    enableIf: "Redigerbar om",
    emptyRowsText: "Meddelandet \"Inga rader\"",
    size: "Inmatningsfältets storlek (i tecken)",
    separateSpecialChoices: "Avgränsa specialval (Ingen, Annat, Markera alla)",
    choicesFromQuestion: "Kopiera alternativ från följande fråga",
    choicesFromQuestionMode: "Vilka val ska du kopiera?",
    showCommentArea: "Visa kommentarsområdet",
    commentPlaceholder: "Platshållare för kommentarsområde",
    displayRateDescriptionsAsExtremeItems: "Visa hastighetsbeskrivningar som extremvärden",
    rowsOrder: "Radordning",
    columnsLayout: "Kolumnlayout",
    columnColCount: "Kapslat antal kolumner",
    state: "Panelens expanderingsläge",
    correctAnswer: "Rätt svar",
    defaultPanelValue: "Standardvärden",
    cells: "Cell texter",
    keyName: "Kolumnen Nyckel",
    itemvalue: {
      text: "Alt-text"
    },
    logoPosition: "Logotypens placering",
    addLogo: "Lägg till logotyp...",
    changeLogo: "Ändra logotyp...",
    logoPositions: {
      none: "Ta bort logotyp",
      left: "Vänster",
      right: "Höger",
      top: "På toppen",
      bottom: "I botten"
    },
    tabs: {
      general: "Generellt",
      fileOptions: "Alternativ",
      html: "Html-editor",
      columns: "Kolumner",
      rows: "Rader",
      choices: "Välj",
      items: "Element",
      visibleIf: "Synlig",
      enableIf: "Tillgänlig",
      requiredIf: "Obligatoriskt om",
      rateValues: "Ordna värden",
      choicesByUrl: "Välj från webben",
      matrixChoices: "Standard val",
      multipleTextItems: "Text indata",
      numbering: "Numrering",
      validators: "Valideringar",
      navigation: "Navigering",
      question: "Fråga",
      pages: "Sidor",
      timer: "Tidtagare/Quiz",
      calculatedValues: "Beräknade värden",
      triggers: "Triggare",
      templateTitle: "Mall titel",
      totals: "Summor",
      logic: "Logik",
      layout: "Layout",
      data: "Data",
      validation: "Validering",
      cells: "Cell texter",
      showOnCompleted: "Undersökningen slutförd",
      logo: "Logotyp i undersökningens titel",
      slider: "Skjutreglage",
      expression: "Uttryck",
      others: "Andra"
    },
    editProperty: "Redigera egenskap '{0}'",
    items: "[ Element: {0} ]",
    choicesVisibleIf: "Alternativen är synliga om",
    choicesEnableIf: "Alternativen kan väljas om",
    columnsEnableIf: "Kolumner visas om",
    rowsEnableIf: "Raderna visas om",
    indent: "Lägga till indrag",
    panel: {
      indent: "Lägga till yttre indrag"
    },
    innerIndent: "Lägga till inre indrag",
    defaultValueFromLastRow: "Ta standardvärden från den sista raden",
    defaultValueFromLastPanel: "Ta standardvärden från den sista panelen",
    enterNewValue: "Vänligen skriv in ett värde.",
    noquestions: "Det finns ingen fråga i enkäten.",
    createtrigger: "Vänligen skapa en trigger",
    titleKeyboardAdornerTip: "Tryck på enter-knappen för att redigera",
    keyboardAdornerTip: "Tryck på enter-knappen för att redigera objektet, tryck på raderingsknappen för att radera objektet, tryck på alt plus pil uppåt eller pil nedåt för att flytta objektet",
    triggerOn: "På ",
    triggerMakePagesVisible: "Synligör sidor:",
    triggerMakeQuestionsVisible: "Synligör element:",
    triggerCompleteText: "Avsluta enkät vid verkställ.",
    triggerNotSet: "Trigger är inte satt",
    triggerRunIf: "Kör ",
    triggerSetToName: "Ändra värden av: ",
    triggerFromName: "Kopiera värden från: ",
    triggerRunExpression: "Kör detta uttryck:",
    triggerSetValue: "till: ",
    triggerGotoName: "Gå till frågan",
    triggerIsVariable: "Var vänligen skriv ett giltigt uttryck.",
    triggerRunExpressionEmpty: "Ange ett giltigt uttryck",
    emptyExpressionPlaceHolder: "Skriv uttryck här...",
    noFile: "Ingen fil har valts",
    clearIfInvisible: "Rensa värdet om frågan döljs",
    valuePropertyName: "Egenskapsnamn för värde",
    searchEnabled: "Aktivera sökning",
    hideSelectedItems: "Dölja markerade objekt",
    closeOnSelect: "Stäng listrutan efter val",
    signatureWidth: "Signaturens bredd",
    signatureHeight: "Signaturens höjd",
    verticalAlign: "Vertikal inriktning",
    alternateRows: "Varannan rad",
    columnsVisibleIf: "Kolumner visas om",
    rowsVisibleIf: "Raderna visas om",
    otherPlaceholder: "Platshållare för kommentarsområde",
    rateType: "Typ av hastighet"
  },
  // Property values
  pv: {
    "true": "sann",
    "false": "falsk",
    file: "Lokala filer",
    camera: "Kamera",
    "file-camera": "Lokala filer eller kamera",
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
    onpanel: "Börja på varje panel",
    onPanel: "onPanel",
    onSurvey: "onSurvey",
    list: "list",
    progressTop: "progressTop",
    progressBottom: "progressBottom",
    progressTopBottom: "progressTopBottom",
    tab: "Flikar",
    horizontal: "horizontal",
    vertical: "vertical",
    top: "top",
    bottom: "bottom",
    topBottom: "top and bottom",
    both: "Båda",
    left: "left",
    right: "Höger",
    color: "färg",
    date: "datum",
    datetime: "datetime",
    "datetime-local": "datetime-lokal",
    email: "E-post",
    month: "månad",
    number: "nummer",
    password: "lösenord",
    range: "sortiment",
    tel: "Tel",
    text: "SMS",
    time: "Tid",
    url: "URL",
    week: "vecka",
    hidden: "hidden",
    on: "on",
    onPage: "onPage",
    edit: "edit",
    display: "display",
    onComplete: "onComplete",
    onHidden: "onHidden",
    onHiddenContainer: "När frågan eller dess panel/sida döljs",
    clearInvisibleValues: {
      none: "Aldrig"
    },
    inputType: {
      color: "Färg",
      date: "Datum",
      "datetime-local": "Datum och tid",
      email: "E-post",
      month: "Månad",
      number: "Nummer",
      password: "Lösenord",
      range: "Sortiment",
      tel: "Telefonnummer",
      text: "SMS",
      time: "Tid",
      url: "URL",
      week: "Vecka"
    },
    all: "all",
    page: "page",
    survey: "survey",
    onNextPage: "onNextPage",
    onValueChanged: "onValueChanged",
    onValueChanging: "Innan ett svar ändras",
    standard: "Ursprunglig struktur",
    singlePage: "Alla frågor på en sida",
    questionPerPage: "Varje fråga på en enskild sida",
    noPreview: "Ingen förhandsgranskning",
    showAllQuestions: "Visa alla frågor",
    showAnsweredQuestions: "Visa endast besvarade frågor",
    pages: "Avslutade sidor",
    questions: "Besvarade frågor",
    requiredQuestions: "Besvarade obligatoriska frågor",
    correctQuestions: "Giltiga svar",
    buttons: "Slutförda sidor (knappgränssnitt)",
    underInput: "Under ingången",
    underTitle: "Under rubriken",
    onBlur: "Vid oskärpa",
    onTyping: "Medan du skriver",
    underRow: "Under raden",
    underRowSingle: "Under raden syns bara en panel",
    showNavigationButtons: {
      none: "Dold"
    },
    showProgressBar: {
      off: "Dold"
    },
    showTimerPanel: {
      none: "Dold"
    },
    showTimerPanelMode: {
      all: "Båda"
    },
    detailPanelMode: {
      none: "Dold"
    },
    addRowLocation: {
      default: "Beror på matrislayout"
    },
    panelsState: {
      default: "Användare kan inte expandera eller komprimera paneler",
      collapsed: "Alla paneler är komprimerade",
      expanded: "Alla paneler är expanderade"
    },
    widthMode: {
      auto: "Bil",
      static: "Statisk",
      responsive: "Responsiv"
    },
    imageFit: {
      none: "Ingen",
      contain: "Innehålla",
      cover: "Täcka",
      fill: "Fylla"
    },
    contentMode: {
      auto: "Bil",
      image: "Bild",
      video: "Video",
      youtube: "YouTube"
    },
    displayMode: {
      auto: "Bil",
      buttons: "Knappar",
      dropdown: "Rullgardinsmeny"
    },
    rateColorMode: {
      default: "Standard"
    },
    autoGenerate: {
      "true": "Generera",
      "false": "Ange manuellt"
    },
    rateType: {
      labels: "Etiketter",
      stars: "Stjärnor",
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
    anyof: "Någon av",
    allof: "Alla",
    greater: "greater",
    less: "less",
    greaterorequal: "greater or equals",
    lessorequal: "less or equals",
    and: "och",
    or: "eller"
  },
  // Embed window
  ew: {
    angular: "Använd Angular version",
    jquery: "Använd jQuery version",
    knockout: "Använd Knockout version",
    react: "Använd React version",
    vue: "Använd Vue version",
    bootstrap: "För bootstrap framework",
    modern: "Modernt tema",
    default: "Standardtema",
    orange: "Orange tema",
    darkblue: "Mörkblått tema",
    darkrose: "Darkrose-tema",
    stone: "Sten tema",
    winter: "Vinter tema",
    winterstone: "Vintersten, tema",
    showOnPage: "Visa enkät på en sida",
    showInWindow: "Visa enkäten i ett nytt fönster",
    loadFromServer: "Hämta enkäten som JSON från servern",
    titleScript: "Scripts och styles",
    titleHtml: "HTML",
    titleJavaScript: "JavaScript"
  },
  // Preview (Survey)
  ts: {
    selectPage: "Välj sida för att testa den:",
    showInvisibleElements: "Visa osynliga element",
    hideInvisibleElements: "Dölj osynliga element"
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
    completetrigger: "Enkät slutförd",
    setvaluetrigger: "Sätt värde",
    copyvaluetrigger: "Kopiera värde",
    skiptrigger: "Hoppa till fråga",
    runexpressiontrigger: "Kör uttryck",
    visibletrigger: "Ändra synlighet"
  },
  pehelp: {
    cookieName: "Cookies hindrar användare från att fylla i samma undersökning två gånger.",
    size: "Ändrar storlek på det synliga området i inmatningsfältet. Använd inställningen <b>Validering → Maximal längd</b> för att begränsa inmatningslängden.",
    format: "Använd {0} som platshållare för det faktiska värdet.",
    totalText: "Visas bara när minst en kolumn har Total type eller Total uttryck.",
    acceptedTypes: "Mer information finns i attributbeskrivningen [accept](https://www.w3schools.com/tags/att_input_accept.asp).",
    columnColCount: "Gäller endast för Radiogroup- och Checkbox-celltyper.",
    autocomplete: "Mer information finns i attributbeskrivningen [autocomplete](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete).",
    valueName: "Om du inte anger den här egenskapen lagras svaret i ett fält som anges av egenskapen Name.",
    choicesbyurl: {
      valueName: " "
    },
    keyName: "Om den angivna kolumnen innehåller identiska värden genereras felet \"Icke-unikt nyckelvärde\"."
  },
  // Properties
  p: {
    title: {
      name: "title",
      title: "Lämna den tom, ifall det är samma som 'Name'"
    },
    multiSelect: "Tillåt flera val",
    showLabel: "Visa bildtexter",
    value: "Värde",
    tabAlign: "Justering av tabb",
    description: "description",
    logoFit: "Logotyp passform",
    pages: "Sidor",
    questions: "Frågor",
    triggers: "triggers",
    calculatedValues: "Beräknade värden",
    surveyId: "Undersöknings-id",
    surveyPostId: "Post-id för undersökning",
    surveyShowDataSaving: "Undersökning visar datasparande",
    questionDescriptionLocation: "Plats för frågebeskrivning",
    progressBarType: "Typ av förloppsindikator",
    showTOC: "Visa innehållsförteckning",
    tocLocation: "Toc-plats",
    questionTitlePattern: "Mönster för frågerubrik",
    widthMode: "Bredd, läge",
    showBrandInfo: "Visa varumärkesinformation",
    useDisplayValuesInDynamicTexts: "Använda visningsvärden i dynamiska texter",
    visibleIf: "visibleIf",
    titleLocation: "titleLocation",
    descriptionLocation: "Beskrivning plats",
    defaultValueExpression: "Uttryck för standardvärde",
    requiredIf: "Obligatoriskt om",
    validators: "validators",
    bindings: "Bindningar",
    renderAs: "Återge som",
    attachOriginalItems: "Bifoga originalföremål",
    choices: "choices",
    choicesByUrl: "choicesByUrl",
    currency: "currency",
    cellHint: "Cell tips",
    isUnique: "Är unik",
    showInMultipleColumns: "Visa i flera kolumner",
    totalMaximumFractionDigits: "Totalt antal maximala bråksiffror",
    totalMinimumFractionDigits: "Totala minsta bråksiffror",
    columns: "columns",
    detailElements: "Detaljelement",
    allowAdaptiveActions: "Tillåt anpassningsbara åtgärder",
    defaultRowValue: "defaultRowValue",
    detailPanelShowOnAdding: "Detaljpanel visar när du lägger till",
    choicesLazyLoadEnabled: "Val lat belastning aktiverad",
    choicesLazyLoadPageSize: "Val lat ladda sidstorlek",
    inputFieldComponent: "Komponent för inmatningsfält",
    itemComponent: "Komponent för objekt",
    min: "Min",
    max: "Max",
    minValueExpression: "Minsta värdeuttryck",
    maxValueExpression: "Uttryck för maximalt värde",
    step: "Steg",
    dataList: "Lista över uppgifter",
    itemSize: "itemSize",
    elements: "Element",
    content: "Innehåll",
    navigationButtonsVisibility: "navigationButtonsVisibility",
    navigationTitle: "Navigering titel",
    navigationDescription: "Beskrivning av navigering",
    longTap: "Långt tryck",
    autoGrow: "Väx automatiskt",
    allowResize: "Tillåt storleksändring",
    acceptCarriageReturn: "Acceptera retur av transport",
    displayMode: "Visningsläge",
    rateType: "Typ av hastighet",
    label: "label",
    contentMode: "Innehållsläge",
    imageFit: "Bildens anpassning",
    altText: "Alt-text",
    height: "Höjd",
    penColor: "Pennans färg",
    backgroundColor: "Bakgrundsfärg",
    templateElements: "Mallelement",
    operator: "Operatör",
    isVariable: "Är variabel",
    runExpression: "Kör uttryck",
    showCaption: "Visa bildtext",
    iconName: "Ikonens namn",
    iconSize: "Ikonens storlek",
    precision: "Precision",
    matrixDragHandleArea: "Matrisens draghandtagsområde",
    backgroundImage: "Bakgrundsbild",
    backgroundImageFit: "Anpassa bakgrundsbild",
    backgroundImageAttachment: "Bilaga till bakgrundsbild",
    backgroundOpacity: "Bakgrunds opacitet",
    selectToRankEnabled: "Välj att rangordna aktiverad",
    selectToRankAreasLayout: "Välj för att rangordna områdeslayout",
    allowCameraAccess: "Tillåt kameraåtkomst",
    scaleColorMode: "Färgläge för skala",
    rateColorMode: "Betygsätt färgläge",
    templateTabTitle: "Rubrik på mallfliken",
    templateVisibleIf: "Mallen visas om",
    copyDisplayValue: "Kopiera visningsvärde"
  },
  theme: {
    "--background": "Bakgrundsfärg",
    "--background-dim-light": "Bakgrund svag ljusfärg",
    "--primary-foreground": "Primär förgrundsfärg",
    "--foreground": "Förgrundsfärg",
    "--base-unit": "Basenhet",
    groupGeneral: "Allmänt",
    groupAdvanced: "Avancerad",
    themeName: "Tema",
    themeMode: "Fråga utseende",
    themeModePanels: "Standard",
    themeModeLightweight: "Utan paneler",
    themePaletteLight: "Ljus",
    themePaletteDark: "Mörk",
    primaryColor: "Accentfärg",
    primaryDefaultColor: "Standard",
    primaryDarkColor: "Sväva",
    primaryLightColor: "Vald",
    backgroundDimColor: "Bakgrundsfärg",
    backgroundImage: "Bakgrundsbild",
    backgroundImageFitAuto: "Bil",
    backgroundImageFitCover: "Täcka",
    backgroundImageFitContain: "Innehålla",
    backgroundOpacity: "Ogenomskinlighet",
    backgroundImageAttachmentFixed: "Fast",
    backgroundImageAttachmentScroll: "Rulla",
    panelBackgroundTransparency: "Opacitet för panelbakgrund",
    questionBackgroundTransparency: "Frågans bakgrundsopacitet",
    questionPanel: "Panelbakgrund och hörnradie",
    questionTitle: "Teckensnitt för frågerubrik",
    questionDescription: "Typsnitt för frågebeskrivning",
    editorPanel: "Inmatningselement",
    editorFont: "Teckensnitt för inmatningselement",
    backcolor: "Standardbakgrund",
    hovercolor: "Håll muspekaren bakgrund",
    borderDecoration: "Border dekoration",
    accentBackground: "Accent bakgrund",
    accentForeground: "Accent förgrund",
    primaryForecolor: "Standardfärg",
    primaryForecolorLight: "Inaktiverad färg",
    linesColors: "Mindre linjefärger",
    borderDefault: "Mörkare",
    borderLight: "Tändare",
    fontFamily: "Teckensnitt familj",
    fontSize: "Teckenstorlek",
    color: "Färg",
    placeholderColor: "Färg på platshållare",
    size: "Storlek",
    fontWeightRegular: "Ordinarie",
    fontWeightHeavy: "Tung",
    fontWeightSemiBold: "Halvfet",
    fontWeightBold: "Djärv",
    scale: "Skala",
    cornerRadius: "Hörnradie",
    surveyTitle: "Teckensnitt för undersökningstitel",
    pageTitle: "Teckensnitt för sidtitel",
    pageDescription: "Teckensnitt för sidbeskrivning",
    boxShadowX: "X",
    boxShadowY: "Y",
    boxShadowAddRule: "Lägg till skuggeffekt",
    opacity: "Ogenomskinlighet",
    boxShadowBlur: "Oskärpa",
    boxShadowSpread: "Sprida",
    boxShadowDrop: "Droppe",
    boxShadowInner: "Inre",
    questionShadow: "Skuggeffekter",
    editorShadow: "Skuggeffekter för indataelement",
    names: {
      default: "Standard",
      sharp: "Skarp",
      borderless: "Marginalfri",
      flat: "Flat",
      plain: "Slätt",
      doubleborder: "Dubbel kantlinje",
      layered: "Lager",
      solid: "Solid",
      threedimensional: ".3D",
      contrast: "Kontrast"
    },
    colors: {
      teal: "Kricka",
      blue: "Blå",
      purple: "Lila",
      orchid: "Orkidé",
      tulip: "Tulpan",
      brown: "Brun",
      green: "Grön"
    }
  }
};
editorLocalization.locales["sv"] = svStrings;

// The following strings have been translated by a machine translation service
// Remove those strings that you have corrected manually
// survey.externalHelpLink: "Watch and learn how to create surveys" => "Se och lär dig hur du skapar enkäter"
// survey.externalHelpLinkUrl: "https://www.youtube.com/channel/UCH2ru9okIcooNZfpIbyq4qQ?view_as=subscriber" => "https://www.youtube.com/channel/UCH2ru9okIcooNZfpIbyq4qQ?view_as=subscriber"
// survey.addLogicItem: "Create a rule to customize the flow of the survey." => "Skapa en regel för att anpassa undersökningens flöde."
// survey.duplicate: "Duplicate" => "Duplicera"
// qt.ranking: "Ranking" => "Rankning"
// qt.image: "Image" => "Bild"
// qt.tagbox: "Multi-Select Dropdown" => "Listruta med flerval"
// qt.signaturepad: "Signature" => "Underskrift"
// qt.buttongroup: "Button Group" => "Knappgrupp"
// ed.settingsTooltip: "Open settings" => "Öppna inställningar"
// ed.surveySettings: "Survey Settings" => "Inställningar för undersökning"
// ed.surveySettingsTooltip: "Open survey settings" => "Öppna undersökningsinställningar"
// ed.showPanel: "Show Panel" => "Visa panel"
// ed.hidePanel: "Hide Panel" => "Dölj panel"
// ed.prevSelected: "Select previous" => "Välj föregående"
// ed.nextSelected: "Select next" => "Välj nästa"
// ed.surveyTypeName: "Survey" => "Undersökning"
// ed.pageTypeName: "Page" => "Sida"
// ed.panelTypeName: "Panel" => "Panel"
// ed.questionTypeName: "Question" => "Fråga"
// ed.columnTypeName: "Column" => "Spalt"
// ed.newTextItemName: "text" => "SMS"
// ed.themeSurvey: "Themes" => "Teman"
// ed.defaultV2Theme: "Default" => "Standard"
// ed.modernTheme: "Modern" => "Modern"
// ed.defaultTheme: "Default (legacy)" => "Standard (äldre)"
// ed.navigateToMsg: "You had to navigate to" => "Du var tvungen att navigera till"
// ed.logic: "Logic" => "Logik"
// ed.saveSurveyTooltip: "Save Survey" => "Spara undersökning"
// ed.jsonHideErrors: "Hide errors" => "Dölj fel"
// ed.jsonShowErrors: "Show errors" => "Visa fel"
// ed.undoTooltip: "Undo last change" => "Ångra senaste ändring"
// ed.redoTooltip: "Redo the change" => "Gör om ändringen"
// ed.showMoreChoices: "Show more" => "Visa mer"
// ed.showLessChoices: "Show less" => "Visa mindre"
// ed.copy: "Copy" => "Kopia"
// ed.cut: "Cut" => "Skära"
// ed.paste: "Paste" => "Klistra"
// ed.copyTooltip: "Copy selection to clipboard" => "Kopiera markering till Urklipp"
// ed.cutTooltip: "Cut selection to clipboard" => "Klipp markering till Urklipp"
// ed.pasteTooltip: "Paste from clipboard" => "Klistra in från Urklipp"
// ed.property-grid: "Properties" => "Egenskaper"
// ed.propertyGridFilteredTextPlaceholder: "Type to search..." => "Skriv för att söka..."
// ed.toolboxChoiceCategory: "Choice Questions" => "Frågor om val"
// ed.toolboxTextCategory: "Text Input Questions" => "Frågor om textinmatning"
// ed.toolboxContainersCategory: "Containers" => "Behållare"
// ed.toolboxMatrixCategory: "Matrix Questions" => "Matris frågor"
// ed.toolboxMiscCategory: "Misc" => "Misc"
// ed.propertyEditorError: "Error" => "Fel"
// ed.translationPropertyGridTitle: "Language Settings" => "Språkinställningar"
// ed.themePropertyGridTitle: "Theme Settings" => "Tema Inställningar"
// ed.translationLanguages: "Languages" => "Språk"
// ed.translationShowUsedStringsOnly: "Used Strings Only" => "Endast använda strängar"
// ed.translationPlaceHolder: "Translation..." => "Översättning..."
// ed.themeExportButton: "Export" => "Export"
// ed.themeImportButton: "Import" => "Import"
// ed.bold: "Bold" => "Djärv"
// ed.italic: "Italic" => "Kursiv"
// ed.underline: "Underline" => "Understryka"
// ed.addNewQuestion: "Add Question" => "Lägg till fråga"
// ed.selectPage: "Select page..." => "Välj sida..."
// ed.carryForwardChoicesCopied: "Choices are copied from" => "Alternativen kopieras från"
// ed.htmlPlaceHolder: "HTML content will be here." => "HTML-innehåll kommer att finnas här."
// ed.panelPlaceHolder: "Drop a question from the toolbox here." => "Släpp en fråga från verktygslådan här."
// ed.surveyPlaceHolder: "The survey is empty. Drag an element from the toolbox or click the button below." => "Enkäten är tom. Dra ett element från verktygslådan eller klicka på knappen nedan."
// ed.imagePlaceHolder: "Drag and drop an image here or click the button below and choose an image to upload" => "Dra och släpp en bild här eller klicka på knappen nedan och välj en bild att ladda upp"
// ed.imageChooseImage: "Choose Image" => "Välj bild"
// ed.addNewTypeQuestion: "Add {0}" => "Lägg till {0}"
// ed.chooseLogoPlaceholder: "[LOGO]" => "[LOGOTYP]"
// ed.auto: "auto" => "bil"
// ed.choices_Item: "Item " => "Sak "
// lg.addNewItem: "Add New Rule" => "Lägg till ny regel"
// lg.empty_tab: "Create a rule to customize the flow of the survey." => "Skapa en regel för att anpassa undersökningens flöde."
// lg.page_visibilityName: "Show (hide) page" => "Visa (dölj) sida"
// lg.page_enableName: "Enable (disable) page" => "Aktivera (inaktivera) sida"
// lg.panel_visibilityName: "Show (hide) panel" => "Visa (dölj) panelen"
// lg.panel_enableName: "Enable (disable) panel" => "Aktivera (inaktivera) panelen"
// lg.question_visibilityName: "Show (hide) question" => "Visa (dölj) fråga"
// lg.question_enableName: "Enable (disable) question" => "Aktivera (inaktivera) fråga"
// lg.question_requireName: "Make question required" => "Gör frågan obligatorisk"
// lg.column_visibilityName: "Show (hide) column" => "Visa (dölj) kolumn"
// lg.column_enableName: "Enable (disable) column" => "Aktivera (inaktivera) kolumn"
// lg.column_requireName: "Make column required" => "Gör kolumnen obligatorisk"
// lg.trigger_completeName: "Complete survey" => "Fullständig undersökning"
// lg.trigger_setvalueName: "Set answer" => "Ställ in svar"
// lg.trigger_copyvalueName: "Copy answer" => "Kopiera svar"
// lg.trigger_skipName: "Skip to question" => "Hoppa till fråga"
// lg.trigger_runExpressionName: "Run expression" => "Kör uttryck"
// lg.completedHtmlOnConditionName: "Set \"Survey Complete\" page markup" => "Ställ in sidmarkeringen \"Undersökningen slutförd\""
// lg.page_visibilityDescription: "Make the page visible when the logic expression returns true. Otherwise keep it invisible." => "Gör sidan synlig när logikuttrycket returnerar true. Håll den annars osynlig."
// lg.panel_visibilityDescription: "Make the panel visible when the logic expression returns true. Otherwise keep it invisible." => "Gör panelen synlig när logikuttrycket returnerar true. Håll den annars osynlig."
// lg.panel_enableDescription: "Make the panel, and all elements inside it, enable when the logic expression returns true. Otherwise keep them disabled." => "Aktivera panelen och alla element inuti den när logikuttrycket returnerar true. Håll dem annars inaktiverade."
// lg.question_visibilityDescription: "Make the question visible when the logic expression returns true. Otherwise keep it invisible." => "Gör frågan synlig när logikuttrycket returnerar true. Håll den annars osynlig."
// lg.question_enableDescription: "Make the question enable when the logic expression returns true. Otherwise keep it disabled." => "Aktivera frågan när logikuttrycket returnerar true. Annars ska du hålla den inaktiverad."
// lg.question_requireDescription: "Question becomes required when the logic expression returns true." => "Frågan blir obligatorisk när logikuttrycket returnerar true."
// lg.trigger_completeDescription: "When the logic expression returns true then the survey becomes completed and an end-user see the 'Thank you page'." => "När logikuttrycket returnerar true slutförs undersökningen och en slutanvändare ser tacksidan."
// lg.trigger_setvalueDescription: "When question values, that are used in the logic expression, are changed and the logic expression returns true, then the value is set to the selected question." => "När frågevärden, som används i logikuttrycket, ändras och logikuttrycket returnerar true, anges värdet till den valda frågan."
// lg.trigger_copyvalueDescription: "When question values, that are used in the logic expression, are changed and the logic expression returns true, then the value of one selected question is copied to another selected question." => "När frågevärden, som används i logikuttrycket, ändras och logikuttrycket returnerar true, kopieras värdet för en markerad fråga till en annan markerad fråga."
// lg.trigger_skipDescription: "When the logic expression returns true then the survey skip to / focus the selected question." => "När logikuttrycket returnerar true hoppar undersökningen till / fokuserar den valda frågan."
// lg.trigger_runExpressionDescription: "When the logic expression returns true, then the custom expression is performed. You may optionally set this expression result into the selected question" => "När logikuttrycket returnerar true utförs det anpassade uttrycket. Om du vill kan du ange detta uttrycksresultat i den valda frågan"
// lg.completedHtmlOnConditionDescription: "If the logic expression returns true, then the default text for the 'Thank you page' is changed to the given one." => "Om logikuttrycket returnerar true ändras standardtexten för tacksidan till den angivna."
// lg.itemExpressionText: "When expression: '{0}' returns true" => "När uttryck: \"{0}\" returnerar true"
// lg.itemEmptyExpressionText: "New rule" => "Ny regel"
// lg.page_visibilityText: "make page {0} visible" => "Gör sidan {0} synlig"
// lg.panel_visibilityText: "make panel {0} visible" => "Gör panelen {0} synlig"
// lg.panel_enableText: "make panel {0} enable" => "Gör panelen {0} aktivera"
// lg.question_visibilityText: "make question {0} visible" => "Gör frågan {0} synlig"
// lg.question_enableText: "make question {0} enable" => "Gör frågan {0} aktivera"
// lg.question_requireText: "make question {0} required" => "Gör frågan {0} krävs"
// lg.column_visibilityText: "make column {0} of question {1} visible" => "Synliggör kolumn {0} av fråga {1}"
// lg.column_enableText: "make column {0} of question {1} enable" => "Gör kolumn {0} av fråga {1} aktivera"
// lg.column_requireText: "make column {0} of question {1} required" => "Gör kolumn {0} av fråga {1} krävs"
// lg.trigger_completeText: "survey becomes completed" => "Undersökningen blir slutförd"
// lg.trigger_setvalueText: "set into question: {0} value {1}" => "ifrågasätts: {0} värde {1}"
// lg.trigger_setvalueEmptyText: "clear question value: {0}" => "Tydligt frågevärde: {0}"
// lg.trigger_copyvalueText: "copy into question: {0} value from question {1}" => "Kopiera till fråga: {0} värde från fråga {1}"
// lg.trigger_skipText: "survey skip to the question {0}" => "Enkät hoppa till frågan {0}"
// lg.trigger_runExpressionText1: "run expression: '{0}'" => "kör uttryck: '{0}'"
// lg.trigger_runExpressionText2: " and set its result into question: {0}" => " och ifrågasatte resultatet: {0}"
// lg.completedHtmlOnConditionText: "show custom text for the 'Thank you page'." => "visa anpassad text för tacksidan."
// lg.showAllQuestions: "All Questions" => "Alla frågor"
// lg.showAllActionTypes: "All Action Types" => "Alla åtgärdstyper"
// lg.conditions: "Condition(s)" => "Skick"
// lg.actions: "Action(s)" => "Åtgärd(er)"
// lg.expressionEditorTitle: "Define condition(s)" => "Definiera villkor"
// lg.actionsEditorTitle: "Define action(s)" => "Definiera åtgärder"
// lg.deleteAction: "Delete Action" => "Ta bort åtgärd"
// lg.addNewAction: "Add Action" => "Lägg till åtgärd"
// lg.selectedActionCaption: "Select action..." => "Välj åtgärd..."
// lg.expressionInvalid: "The logic expression is empty or invalid. Please correct it." => "Logikuttrycket är tomt eller ogiltigt. Var snäll och rätta till det."
// lg.noActionError: "Please, add at least one action." => "Lägg till minst en åtgärd."
// lg.actionInvalid: "Please, fix problems in your action(s)." => "Snälla, åtgärda problem i dina åtgärder."
// lg.uncompletedRule_title: "Logical rules are incomplete" => "Logiska regler är ofullständiga"
// lg.uncompletedRule_text: "You have not completed some of the logical rules. If you leave the tab now, the changes will be lost. Do you still want to leave the tab without completing the changes?" => "Du har inte slutfört några av de logiska reglerna. Om du lämnar fliken nu kommer ändringarna att gå förlorade. Vill du fortfarande lämna fliken utan att slutföra ändringarna?"
// lg.uncompletedRule_apply: "Yes" => "Ja"
// lg.uncompletedRule_cancel: "No, I want to complete the rules" => "Nej, jag vill komplettera reglerna"
// lg.expressionSetup: "" => ""
// lg.actionsSetup: "" => ""
// pe.save: "Save" => "Spara"
// pe.clear: "Clear" => "Klar"
// pe.saveTooltip: "Save" => "Spara"
// pe.set: "Set" => "Ställa"
// pe.change: "Change" => "Förändring"
// pe.refresh: "Refresh" => "Svalka"
// pe.add: "Add" => "Addera"
// pe.removeItem: "Click to remove the item..." => "Klicka för att ta bort objektet..."
// pe.dragItem: "Drag the item" => "Dra objektet"
// pe.addOther: "Other" => "Annan"
// pe.addSelectAll: "Select All" => "Markera alla"
// pe.addNone: "None" => "Ingen"
// pe.back: "Return without saving" => "Returnera utan att spara"
// pe.backTooltip: "Return without saving" => "Returnera utan att spara"
// pe.saveAndBack: "Save and return" => "Spara och returnera"
// pe.saveAndBackTooltip: "Save and return" => "Spara och returnera"
// pe.doneEditing: "Done" => "Färdig"
// pe.showChoices: "Show Choices" => "Visa alternativ"
// pe.emptyValue: "Value is empty" => "Värdet är tomt"
// pe.fastEntryNonUniqueError: "Value '{0}' is not unique" => "Värdet \"{0}\" är inte unikt"
// pe.fastEntryChoicesCountError: "Please limit the number of items from {0} to {1}" => "Begränsa antalet artiklar från {0} till {1}"
// pe.fastEntryPlaceholder: "You can set data in the following format:\nvalue1|text\nvalue2" => "Du kan ange data i följande format:\nvärde1|text\nvärde2"
// pe.itemSelectorEmpty: "Please select the element" => "Välj elementet"
// pe.conditionActionEmpty: "Please select the action" => "Välj åtgärd"
// pe.conditionSelectPage: "Select page..." => "Välj sida..."
// pe.conditionSelectPanel: "Select panel..." => "Välj panel..."
// pe.showPreviewBeforeComplete: "Preview answers before submitting the survey" => "Förhandsgranska svar innan du skickar in undersökningen"
// pe.overridingPropertyPrefix: "Set by " => "Inställd av "
// pe.propertyIsNoUnique: "Please enter a unique value" => "Ange ett unikt värde"
// pe.propertyNameIsNotUnique: "Please enter a unique name" => "Ange ett unikt namn"
// pe.propertyNameIsIncorrect: "Do not use reserved words: \"item\", \"choice\", \"panel\", \"row\"." => "Använd inte reserverade ord: \"objekt\", \"val\", \"panel\", \"rad\"."
// pe.listIsEmpty: "No items have been added yet" => "Inga objekt har lagts till ännu"
// pe.listIsEmpty@choices: "No choices have been added yet" => "Inga alternativ har lagts till ännu"
// pe.addNew@choices: "Add a choice" => "Lägg till ett val"
// pe.expressionIsEmpty: "Expression is empty" => "Uttrycket är tomt"
// choicesbyurl.valueName: "Get values from the following JSON field" => "Hämta värden från följande JSON-fält"
// pe.imageLinkName: "Get image URLs from the following JSON field" => "Hämta bild-URL:er från följande JSON-fält"
// pe.allowEmptyResponse: "Allow empty response" => "Tillåt tomt svar"
// pe.titlePlaceholder: "Title" => "Titel"
// pe.surveyTitlePlaceholder: "Survey Title" => "Undersökningens titel"
// pe.pageTitlePlaceholder: "Page {num}" => "Sida {num}"
// pe.descriptionPlaceholder: "Description" => "Beskrivning"
// pe.surveyDescriptionPlaceholder: "Description" => "Beskrivning"
// pe.pageDescriptionPlaceholder: "Description" => "Beskrivning"
// pe.showNoneItem: "Allow the None option" => "Tillåt alternativet Ingen"
// pe.noneText: "None option text" => "Alternativtext för Ingen"
// pe.showSelectAllItem: "Allow the Select All option" => "Tillåt alternativet Markera allt"
// pe.selectAllText: "Select All option text" => "Markera all alternativtext"
// pe.choicesMin: "Minimum value for auto-generated items" => "Minimivärde för automatiskt genererade objekt"
// pe.choicesMax: "Maximum value for auto-generated items" => "Maximalt värde för automatiskt genererade objekt"
// pe.choicesStep: "Step for auto-generated items" => "Steg för automatiskt genererade objekt"
// pe.isAllRowRequired: "Require answer for all rows" => "Kräv svar för alla rader"
// pe.requiredErrorText: "\"Required\" error message" => "Felmeddelandet \"Obligatoriskt\""
// pe.cols: "Columns" => "Kolumner"
// pe.rateMin: "Minimum rate value" => "Minsta räntevärde"
// pe.rateMax: "Maximum rate value" => "Högsta taxa"
// pe.rateStep: "Rate step" => "Betygsätt steg"
// pe.buildExpression: "Build" => "Bygga"
// pe.editExpression: "Edit" => "Redigera"
// pe.and: "and" => "och"
// pe.or: "or" => "eller"
// pe.remove: "Remove" => "Avlägsna"
// pe.addCondition: "Add Condition" => "Lägg till villkor"
// pe.emptyLogicPopupMessage: "Select a question to start configuring conditions." => "Välj en fråga för att börja konfigurera villkor."
// pe.if: "If" => "Om"
// pe.then: "then" => "då"
// pe.setToName: "Target question" => "Målfråga"
// pe.fromName: "Question to copy answer from" => "Fråga att kopiera svar från"
// pe.gotoName: "Question to skip to" => "Fråga att hoppa till"
// pe.ruleIsNotSet: "Rule is incorrect" => "Regeln är felaktig"
// pe.includeIntoResult: "Include into survey results" => "Inkludera i undersökningsresultat"
// pe.expandCollapseTitle: "Expand/collapse title" => "Expandera/komprimera titel"
// pe.simulator: "Select device type" => "Välj enhetstyp"
// pe.landscapeOrientation: "Switch to landscape orientation" => "Växla till liggande orientering"
// pe.portraitOrientation: "Switch to portrait orientation" => "Växla till stående orientering"
// pe.previewText: "Preview Answers button text" => "Text för knappen Förhandsgranska svar"
// pe.editText: "Edit Answer button text" => "Text för knappen Redigera svar"
// image.imageHeight: "Image height (in CSS-accepted values)" => "Bildhöjd (i CSS-accepterade värden)"
// image.imageWidth: "Image width (in CSS-accepted values)" => "Bildbredd (i CSS-godkända värden)"
// page.maxTimeToFinish: "Time limit to finish the page (in seconds)" => "Tidsgräns för att avsluta sidan (i sekunder)"
// question.page: "Parent page" => "Överordnad sida"
// pe.noEntriesText: "Empty entries text" => "Tomma poster text"
// pe.html: "HTML markup" => "HTML-kod"
// pe.expression: "Expression" => "Uttryck"
// pe.setValue: "Answer" => "Svar"
// pe.dataFormat: "Image format" => "Bildformat"
// pe.allowAddRows: "Allow adding rows" => "Tillåt att rader läggs till"
// pe.allowRemoveRows: "Allow removing rows" => "Tillåt borttagning av rader"
// pe.allowRowsDragAndDrop: "Allow row drag and drop" => "Tillåt dra och släpp rader"
// pe.responsiveImageSizeHelp: "Does not apply if you specify the exact image width or height." => "Gäller inte om du anger bildens exakta bredd eller höjd."
// pe.minImageWidth: "Minimum image width" => "Minsta bildbredd"
// pe.maxImageWidth: "Maximum image width" => "Maximal bildbredd"
// pe.minImageHeight: "Minimum image height" => "Minsta bildhöjd"
// pe.maxImageHeight: "Maximum image height" => "Maximal bildhöjd"
// pe.minValue: "Minimum value" => "Minsta värde"
// pe.maxValue: "Maximum value" => "Maximalt värde"
// pe.minLength: "Minimum length (in characters)" => "Minsta längd (i tecken)"
// pe.allowDigits: "Allow digits" => "Tillåt siffror"
// pe.minCount: "Minimum count" => "Minsta antal"
// pe.maxCount: "Maximum count" => "Maximalt antal"
// pe.regex: "Regular expression" => "Reguljärt uttryck"
// surveyvalidator.text: "Error message" => "Felmeddelande"
// surveyvalidator.expression: "Validation expression" => "Uttryck för validering"
// pe.totalText: "Total row text" => "Text för summarad"
// pe.totalType: "Total type" => "Total typ"
// pe.totalExpression: "Total expression" => "Totalt uttryck"
// pe.totalDisplayStyle: "Total value display style" => "Visningsformat för totalt värde"
// pe.totalCurrency: "Currency" => "Valuta"
// pe.totalFormat: "Formatted string" => "Formaterad sträng"
// pe.logo: "Logo (URL or base64-encoded string)" => "Logotyp (URL eller base64-kodad sträng)"
// pe.questionsOnPageMode: "Survey structure" => "Undersökningens struktur"
// pe.maxTextLength: "Maximum answer length (in characters)" => "Maximal svarslängd (i tecken)"
// pe.maxOthersLength: "Maximum comment length (in characters)" => "Maximal kommentarslängd (i tecken)"
// pe.autoGrowComment: "Auto-expand comment area if necessary" => "Expandera kommentarsområdet automatiskt om det behövs"
// pe.allowResizeComment: "Allow users to resize text areas" => "Tillåt användare att ändra storlek på textområden"
// pe.textUpdateMode: "Update text question value" => "Uppdatera textfrågevärde"
// pe.focusOnFirstError: "Set focus on the first invalid answer" => "Ställ in fokus på det första ogiltiga svaret"
// pe.checkErrorsMode: "Run validation" => "Kör validering"
// pe.navigateToUrl: "Navigate to URL" => "Navigera till URL"
// pe.navigateToUrlOnCondition: "Dynamic URL" => "Dynamisk URL"
// pe.completedBeforeHtml: "Markup to show if the user already filled out this survey" => "Markering för att visa om användaren redan har fyllt i undersökningen"
// pe.completedHtml: "Survey Complete page markup" => "Undersökning slutförd sidmarkering"
// pe.completedHtmlOnCondition: "Dynamic Survey Complete page markup" => "Dynamisk undersökning Fullständig sidmarkering"
// pe.loadingHtml: "Markup to show while survey model is loading" => "Markering som ska visas medan undersökningsmodellen läses in"
// pe.commentText: "Comment area text" => "Text i kommentarsområdet"
// pe.autocomplete: "Autocomplete type" => "Typ av komplettera automatiskt"
// pe.labelTrue: "\"True\" label" => "Etiketten \"Sant\""
// pe.labelFalse: "\"False\" label" => "Etiketten \"Falskt\""
// pe.allowClear: "Show the Clear button" => "Visa knappen Rensa"
// pe.displayStyle: "Value display style" => "Visningsformat för värde"
// pe.format: "Formatted string" => "Formaterad sträng"
// pe.maximumFractionDigits: "Maximum fractional digits" => "Maximala bråktal"
// pe.minimumFractionDigits: "Minimum fractional digits" => "Minsta bråktal"
// pe.useGrouping: "Display grouping separators" => "Visa grupperingsavgränsare"
// pe.allowMultiple: "Allow multiple files" => "Tillåt flera filer"
// pe.allowImagesPreview: "Preview images" => "Förhandsgranska bilder"
// pe.acceptedTypes: "Accepted file types" => "Godkända filtyper"
// pe.waitForUpload: "Wait for the upload to complete" => "Vänta tills uppladdningen är klar"
// pe.needConfirmRemoveFile: "Confirm file deletion" => "Bekräfta borttagning av fil"
// pe.detailPanelMode: "Detail panel location" => "Placering på detaljpanelen"
// pe.minRowCount: "Minimum row count" => "Minsta antal rader"
// pe.maxRowCount: "Maximum row count" => "Maximalt antal rader"
// pe.confirmDelete: "Confirm row deletion" => "Bekräfta borttagning av rad"
// pe.confirmDeleteText: "Confirmation message" => "Bekräftelsemeddelande"
// paneldynamic.confirmDelete: "Confirm panel deletion" => "Bekräfta borttagning av panelen"
// pe.panelCount: "Initial panel count" => "Inledande panelantal"
// pe.minPanelCount: "Minimum panel count" => "Minsta antal paneler"
// pe.maxPanelCount: "Maximum panel count" => "Maximalt antal paneler"
// pe.panelsState: "Inner panel expand state" => "Expanderingsläge för innerpanelen"
// pe.templateDescription: "Description template" => "Beskrivning mall"
// pe.templateTitle: "Title template" => "Mall för titel"
// pe.panelPrevText: "Previous Panel button tooltip" => "Knappbeskrivning för föregående panel"
// pe.panelNextText: "Next Panel button tooltip" => "Knappbeskrivning för knappen Nästa panel"
// pe.showRangeInProgress: "Show progress bar" => "Visa förloppsindikator"
// pe.templateTitleLocation: "Question title location" => "Plats för frågerubrik"
// pe.panelRemoveButtonLocation: "Remove Panel button location" => "Ta bort panelknappens placering"
// pe.hideIfRowsEmpty: "Hide the question if there are no rows" => "Dölj frågan om det inte finns några rader"
// pe.hideColumnsIfEmpty: "Hide columns if there are no rows" => "Dölj kolumner om det inte finns några rader"
// pe.rateValues: "Custom rate values" => "Anpassade prisvärden"
// pe.rateCount: "Rate count" => "Antal priser"
// pe.autoGenerate: "How to specify rate values?" => "Hur anger jag hastighetsvärden?"
// pe.hideIfChoicesEmpty: "Hide the question if it contains no choices" => "Dölj frågan om den inte innehåller några alternativ"
// pe.hideNumber: "Hide question number" => "Dölj frågenummer"
// pe.minWidth: "Minimum width (in CSS-accepted values)" => "Minsta bredd (i CSS-godkända värden)"
// pe.maxWidth: "Maximum width (in CSS-accepted values)" => "Maximal bredd (i CSS-godkända värden)"
// pe.width: "Width (in CSS-accepted values)" => "Bredd (i CSS-accepterade värden)"
// pe.showHeader: "Show column headers" => "Visa kolumnrubriker"
// pe.horizontalScroll: "Show horizontal scrollbar" => "Visa vågrät rullningslist"
// pe.columnMinWidth: "Minimum column width (in CSS-accepted values)" => "Minsta kolumnbredd (i CSS-godkända värden)"
// pe.rowTitleWidth: "Row header width (in CSS-accepted values)" => "Radrubrikbredd (i CSS-godkända värden)"
// pe.valueTrue: "\"True\" value" => "\"Sant\" värde"
// pe.valueFalse: "\"False\" value" => "\"Falskt\" värde"
// pe.minErrorText: "\"Value is below minimum\" error message" => "Felmeddelandet \"Värdet är under minimum\""
// pe.maxErrorText: "\"Value exceeds maximum\" error message" => "Felmeddelandet \"Värdet överskrider max\""
// pe.otherErrorText: "\"Empty comment\" error message" => "Felmeddelandet \"Tom kommentar\""
// pe.keyDuplicationError: "\"Non-unique key value\" error message" => "Felmeddelandet \"Icke-unikt nyckelvärde\""
// pe.minSelectedChoices: "Minimum selected choices" => "Minsta valda val"
// pe.maxSelectedChoices: "Maximum selected choices" => "Maximalt antal valda val"
// pe.showClearButton: "Show the Clear button" => "Visa knappen Rensa"
// pe.showNumber: "Show panel number" => "Visa panelnummer"
// pe.logoWidth: "Logo width (in CSS-accepted values)" => "Logotypbredd (i CSS-godkända värden)"
// pe.logoHeight: "Logo height (in CSS-accepted values)" => "Logotypens höjd (i CSS-godkända värden)"
// pe.readOnly: "Read-only" => "Skrivskyddad"
// pe.enableIf: "Editable if" => "Redigerbar om"
// pe.emptyRowsText: "\"No rows\" message" => "Meddelandet \"Inga rader\""
// pe.size: "Input field size (in characters)" => "Inmatningsfältets storlek (i tecken)"
// pe.separateSpecialChoices: "Separate special choices (None, Other, Select All)" => "Avgränsa specialval (Ingen, Annat, Markera alla)"
// pe.choicesFromQuestion: "Copy choices from the following question" => "Kopiera alternativ från följande fråga"
// pe.choicesFromQuestionMode: "Which choices to copy?" => "Vilka val ska du kopiera?"
// pe.showCommentArea: "Show the comment area" => "Visa kommentarsområdet"
// pe.commentPlaceholder: "Comment area placeholder" => "Platshållare för kommentarsområde"
// pe.displayRateDescriptionsAsExtremeItems: "Display rate descriptions as extreme values" => "Visa hastighetsbeskrivningar som extremvärden"
// pe.rowsOrder: "Row order" => "Radordning"
// pe.columnsLayout: "Column layout" => "Kolumnlayout"
// pe.columnColCount: "Nested column count" => "Kapslat antal kolumner"
// pe.state: "Panel expand state" => "Panelens expanderingsläge"
// pe.correctAnswer: "Correct Answer" => "Rätt svar"
// pe.defaultPanelValue: "Default Values" => "Standardvärden"
// pe.cells: "Cell Texts" => "Cell texter"
// pe.keyName: "Key column" => "Kolumnen Nyckel"
// itemvalue.text: "Alt text" => "Alt-text"
// pe.logoPosition: "Logo position" => "Logotypens placering"
// pe.addLogo: "Add logo..." => "Lägg till logotyp..."
// pe.changeLogo: "Change logo..." => "Ändra logotyp..."
// logoPositions.none: "Remove logo" => "Ta bort logotyp"
// logoPositions.left: "Left" => "Vänster"
// logoPositions.right: "Right" => "Höger"
// logoPositions.top: "On the top" => "På toppen"
// logoPositions.bottom: "In the bottom" => "I botten"
// tabs.requiredIf: "Required If" => "Obligatoriskt om"
// tabs.numbering: "Numbering" => "Numrering"
// tabs.pages: "Pages" => "Sidor"
// tabs.calculatedValues: "Calculated Values" => "Beräknade värden"
// tabs.totals: "Totals" => "Summor"
// tabs.logic: "Logic" => "Logik"
// tabs.layout: "Layout" => "Layout"
// tabs.data: "Data" => "Data"
// tabs.validation: "Validation" => "Validering"
// tabs.cells: "Cell Texts" => "Cell texter"
// tabs.showOnCompleted: "Survey Complete" => "Undersökningen slutförd"
// tabs.logo: "Logo in Survey Title" => "Logotyp i undersökningens titel"
// tabs.slider: "Slider" => "Skjutreglage"
// tabs.expression: "Expression" => "Uttryck"
// tabs.others: "Others" => "Andra"
// pe.choicesVisibleIf: "Choices are visible if" => "Alternativen är synliga om"
// pe.choicesEnableIf: "Choices are selectable if" => "Alternativen kan väljas om"
// pe.columnsEnableIf: "Columns are visible if" => "Kolumner visas om"
// pe.rowsEnableIf: "Rows are visible if" => "Raderna visas om"
// pe.indent: "Add indents" => "Lägga till indrag"
// panel.indent: "Add outer indents" => "Lägga till yttre indrag"
// pe.innerIndent: "Add inner indents" => "Lägga till inre indrag"
// pe.defaultValueFromLastRow: "Take default values from the last row" => "Ta standardvärden från den sista raden"
// pe.defaultValueFromLastPanel: "Take default values from the last panel" => "Ta standardvärden från den sista panelen"
// pe.titleKeyboardAdornerTip: "Press enter button to edit" => "Tryck på enter-knappen för att redigera"
// pe.keyboardAdornerTip: "Press enter button to edit item, press delete button to delete item, press alt plus arrow up or arrow down to move item" => "Tryck på enter-knappen för att redigera objektet, tryck på raderingsknappen för att radera objektet, tryck på alt plus pil uppåt eller pil nedåt för att flytta objektet"
// pe.triggerGotoName: "Go to the question" => "Gå till frågan"
// pe.triggerRunExpressionEmpty: "Please enter a valid expression" => "Ange ett giltigt uttryck"
// pe.emptyExpressionPlaceHolder: "Type expression here..." => "Skriv uttryck här..."
// pe.noFile: "No file choosen" => "Ingen fil har valts"
// pe.clearIfInvisible: "Clear the value if the question becomes hidden" => "Rensa värdet om frågan döljs"
// pe.valuePropertyName: "Value property name" => "Egenskapsnamn för värde"
// pe.searchEnabled: "Enable search" => "Aktivera sökning"
// pe.hideSelectedItems: "Hide selected items" => "Dölja markerade objekt"
// pe.closeOnSelect: "Close the dropdown after selection" => "Stäng listrutan efter val"
// pe.signatureWidth: "Signature width" => "Signaturens bredd"
// pe.signatureHeight: "Signature height" => "Signaturens höjd"
// pe.verticalAlign: "Vertical alignment" => "Vertikal inriktning"
// pe.alternateRows: "Alternate rows" => "Varannan rad"
// pe.columnsVisibleIf: "Columns are visible if" => "Kolumner visas om"
// pe.rowsVisibleIf: "Rows are visible if" => "Raderna visas om"
// pe.otherPlaceholder: "Comment area placeholder" => "Platshållare för kommentarsområde"
// pe.rateType: "Rate type" => "Typ av hastighet"
// pv.true: "true" => "sann"
// pv.false: "false" => "falsk"
// pv.decimal: "decimal" => "decimal"
// pv.currency: "currency" => "valuta"
// pv.percent: "percent" => "procent"
// pv.onpanel: "Start on each panel" => "Börja på varje panel"
// pv.tab: "Tabs" => "Flikar"
// pv.both: "Both" => "Båda"
// pv.right: "Right" => "Höger"
// pv.color: "color" => "färg"
// pv.date: "date" => "datum"
// pv.datetime: "datetime" => "datetime"
// pv.datetime-local: "datetime-local" => "datetime-lokal"
// pv.email: "email" => "E-post"
// pv.month: "month" => "månad"
// pv.number: "number" => "nummer"
// pv.password: "password" => "lösenord"
// pv.range: "range" => "sortiment"
// pv.tel: "tel" => "Tel"
// pv.text: "text" => "SMS"
// pv.time: "time" => "Tid"
// pv.url: "url" => "URL"
// pv.week: "week" => "vecka"
// pv.onHiddenContainer: "When the question or its panel/page becomes hidden" => "När frågan eller dess panel/sida döljs"
// clearInvisibleValues.none: "Never" => "Aldrig"
// inputType.color: "Color" => "Färg"
// inputType.date: "Date" => "Datum"
// inputType.datetime-local: "Date and Time" => "Datum och tid"
// inputType.email: "Email" => "E-post"
// inputType.month: "Month" => "Månad"
// inputType.number: "Number" => "Nummer"
// inputType.password: "Password" => "Lösenord"
// inputType.range: "Range" => "Sortiment"
// inputType.tel: "Phone Number" => "Telefonnummer"
// inputType.text: "Text" => "SMS"
// inputType.time: "Time" => "Tid"
// inputType.url: "URL" => "URL"
// inputType.week: "Week" => "Vecka"
// pv.onValueChanging: "Before an answer is changed" => "Innan ett svar ändras"
// pv.standard: "Original structure" => "Ursprunglig struktur"
// pv.singlePage: "All questions on a single page" => "Alla frågor på en sida"
// pv.questionPerPage: "Each question on an individual page" => "Varje fråga på en enskild sida"
// pv.noPreview: "No preview" => "Ingen förhandsgranskning"
// pv.showAllQuestions: "Show all questions" => "Visa alla frågor"
// pv.showAnsweredQuestions: "Show answered questions only" => "Visa endast besvarade frågor"
// pv.pages: "Completed pages" => "Avslutade sidor"
// pv.questions: "Answered questions" => "Besvarade frågor"
// pv.requiredQuestions: "Answered required questions" => "Besvarade obligatoriska frågor"
// pv.correctQuestions: "Valid answers" => "Giltiga svar"
// pv.buttons: "Completed pages (button UI)" => "Slutförda sidor (knappgränssnitt)"
// pv.underInput: "Under the input" => "Under ingången"
// pv.underTitle: "Under the title" => "Under rubriken"
// pv.onBlur: "On blur" => "Vid oskärpa"
// pv.onTyping: "While typing" => "Medan du skriver"
// pv.underRow: "Under the row" => "Under raden"
// pv.underRowSingle: "Under the row, only one panel is visible" => "Under raden syns bara en panel"
// showNavigationButtons.none: "Hidden" => "Dold"
// showProgressBar.off: "Hidden" => "Dold"
// showTimerPanel.none: "Hidden" => "Dold"
// showTimerPanelMode.all: "Both" => "Båda"
// detailPanelMode.none: "Hidden" => "Dold"
// addRowLocation.default: "Depends on matrix layout" => "Beror på matrislayout"
// panelsState.default: "Users cannot expand or collapse panels" => "Användare kan inte expandera eller komprimera paneler"
// panelsState.collapsed: "All panels are collapsed" => "Alla paneler är komprimerade"
// panelsState.expanded: "All panels are expanded" => "Alla paneler är expanderade"
// widthMode.auto: "Auto" => "Bil"
// widthMode.static: "Static" => "Statisk"
// widthMode.responsive: "Responsive" => "Responsiv"
// imageFit.none: "None" => "Ingen"
// imageFit.contain: "Contain" => "Innehålla"
// imageFit.cover: "Cover" => "Täcka"
// imageFit.fill: "Fill" => "Fylla"
// contentMode.auto: "Auto" => "Bil"
// contentMode.image: "Image" => "Bild"
// contentMode.video: "Video" => "Video"
// contentMode.youtube: "YouTube" => "YouTube"
// displayMode.auto: "Auto" => "Bil"
// displayMode.buttons: "Buttons" => "Knappar"
// displayMode.dropdown: "Dropdown" => "Rullgardinsmeny"
// rateColorMode.default: "Default" => "Standard"
// autoGenerate.true: "Generate" => "Generera"
// autoGenerate.false: "Enter manually" => "Ange manuellt"
// rateType.labels: "Labels" => "Etiketter"
// rateType.stars: "Stars" => "Stjärnor"
// rateType.smileys: "Smileys" => "Smileys"
// op.anyof: "Any of" => "Någon av"
// op.allof: "All of" => "Alla"
// op.and: "and" => "och"
// op.or: "or" => "eller"
// ew.modern: "Modern theme" => "Modernt tema"
// ew.default: "Default theme" => "Standardtema"
// ew.orange: "Orange theme" => "Orange tema"
// ew.darkblue: "Darkblue theme" => "Mörkblått tema"
// ew.darkrose: "Darkrose theme" => "Darkrose-tema"
// ew.stone: "Stone theme" => "Sten tema"
// ew.winter: "Winter theme" => "Vinter tema"
// ew.winterstone: "Winter-Stone theme" => "Vintersten, tema"
// ts.hideInvisibleElements: "Hide invisible elements" => "Dölj osynliga element"
// triggers.skiptrigger: "Skip to question" => "Hoppa till fråga"
// pehelp.cookieName: "Cookies prevent users from filling out the same survey twice." => "Cookies hindrar användare från att fylla i samma undersökning två gånger."
// pehelp.size: "Resizes the visible area of the input field. Please use the <b>Validation → Maximum length</b> setting to limit the input length." => "Ändrar storlek på det synliga området i inmatningsfältet. Använd inställningen <b>Validering → Maximal längd</b> för att begränsa inmatningslängden."
// pehelp.format: "Use {0} as a placeholder for the actual value." => "Använd {0} som platshållare för det faktiska värdet."
// pehelp.totalText: "Visible only when at least one column has Total type or Total expression." => "Visas bara när minst en kolumn har Total type eller Total uttryck."
// pehelp.acceptedTypes: "Refer to the [accept](https://www.w3schools.com/tags/att_input_accept.asp) attribute description for more information." => "Mer information finns i attributbeskrivningen [accept](https://www.w3schools.com/tags/att_input_accept.asp)."
// pehelp.columnColCount: "Applicable only to Radiogroup and Checkbox cell types." => "Gäller endast för Radiogroup- och Checkbox-celltyper."
// pehelp.autocomplete: "Refer to the [autocomplete](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete) attribute description for more information." => "Mer information finns i attributbeskrivningen [autocomplete](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete)."
// pehelp.valueName: "If you do not set this property, the answer will be stored in a field specified by the Name property." => "Om du inte anger den här egenskapen lagras svaret i ett fält som anges av egenskapen Name."
// choicesbyurl.valueName: " " => " "
// pehelp.keyName: "If the specified column contains identical values, the survey throws the \"Non-unique key value\" error." => "Om den angivna kolumnen innehåller identiska värden genereras felet \"Icke-unikt nyckelvärde\"."
// p.multiSelect: "Allow multiple selection" => "Tillåt flera val"
// p.showLabel: "Show image captions" => "Visa bildtexter"
// p.value: "Value" => "Värde"
// p.tabAlign: "Tab alignment" => "Justering av tabb"
// p.logoFit: "Logo fit" => "Logotyp passform"
// p.pages: "Pages" => "Sidor"
// p.questions: "Questions" => "Frågor"
// p.calculatedValues: "Calculated values" => "Beräknade värden"
// p.surveyId: "Survey id" => "Undersöknings-id"
// p.surveyPostId: "Survey post id" => "Post-id för undersökning"
// p.surveyShowDataSaving: "Survey show data saving" => "Undersökning visar datasparande"
// p.questionDescriptionLocation: "Question description location" => "Plats för frågebeskrivning"
// p.progressBarType: "Progress bar type" => "Typ av förloppsindikator"
// p.showTOC: "Show TOC" => "Visa innehållsförteckning"
// p.tocLocation: "Toc location" => "Toc-plats"
// p.questionTitlePattern: "Question title pattern" => "Mönster för frågerubrik"
// p.widthMode: "Width mode" => "Bredd, läge"
// p.showBrandInfo: "Show brand info" => "Visa varumärkesinformation"
// p.useDisplayValuesInDynamicTexts: "Use display values in dynamic texts" => "Använda visningsvärden i dynamiska texter"
// p.descriptionLocation: "Description location" => "Beskrivning plats"
// p.defaultValueExpression: "Default value expression" => "Uttryck för standardvärde"
// p.requiredIf: "Required if" => "Obligatoriskt om"
// p.bindings: "Bindings" => "Bindningar"
// p.renderAs: "Render as" => "Återge som"
// p.attachOriginalItems: "Attach original items" => "Bifoga originalföremål"
// p.cellHint: "Cell hint" => "Cell tips"
// p.isUnique: "Is unique" => "Är unik"
// p.showInMultipleColumns: "Show in multiple columns" => "Visa i flera kolumner"
// p.totalMaximumFractionDigits: "Total maximum fraction digits" => "Totalt antal maximala bråksiffror"
// p.totalMinimumFractionDigits: "Total minimum fraction digits" => "Totala minsta bråksiffror"
// p.detailElements: "Detail elements" => "Detaljelement"
// p.allowAdaptiveActions: "Allow adaptive actions" => "Tillåt anpassningsbara åtgärder"
// p.detailPanelShowOnAdding: "Detail panel show on adding" => "Detaljpanel visar när du lägger till"
// p.choicesLazyLoadEnabled: "Choices lazy load enabled" => "Val lat belastning aktiverad"
// p.choicesLazyLoadPageSize: "Choices lazy load page size" => "Val lat ladda sidstorlek"
// p.inputFieldComponent: "Input field component" => "Komponent för inmatningsfält"
// p.itemComponent: "Item component" => "Komponent för objekt"
// p.min: "Min" => "Min"
// p.max: "Max" => "Max"
// p.minValueExpression: "Min value expression" => "Minsta värdeuttryck"
// p.maxValueExpression: "Max value expression" => "Uttryck för maximalt värde"
// p.step: "Step" => "Steg"
// p.dataList: "Data list" => "Lista över uppgifter"
// p.elements: "Elements" => "Element"
// p.content: "Content" => "Innehåll"
// p.navigationTitle: "Navigation title" => "Navigering titel"
// p.navigationDescription: "Navigation description" => "Beskrivning av navigering"
// p.longTap: "Long tap" => "Långt tryck"
// p.autoGrow: "Auto grow" => "Väx automatiskt"
// p.allowResize: "Allow resizing" => "Tillåt storleksändring"
// p.acceptCarriageReturn: "Accept carriage return" => "Acceptera retur av transport"
// p.displayMode: "Display mode" => "Visningsläge"
// p.rateType: "Rate type" => "Typ av hastighet"
// p.contentMode: "Content mode" => "Innehållsläge"
// p.imageFit: "Image fit" => "Bildens anpassning"
// p.altText: "Alt text" => "Alt-text"
// p.height: "Height" => "Höjd"
// p.penColor: "Pen color" => "Pennans färg"
// p.backgroundColor: "Background color" => "Bakgrundsfärg"
// p.templateElements: "Template elements" => "Mallelement"
// p.operator: "Operator" => "Operatör"
// p.isVariable: "Is variable" => "Är variabel"
// p.runExpression: "Run expression" => "Kör uttryck"
// p.showCaption: "Show caption" => "Visa bildtext"
// p.iconName: "Icon name" => "Ikonens namn"
// p.iconSize: "Icon size" => "Ikonens storlek"
// p.precision: "Precision" => "Precision"
// p.matrixDragHandleArea: "Matrix drag handle area" => "Matrisens draghandtagsområde"
// p.backgroundImage: "Background image" => "Bakgrundsbild"
// p.backgroundImageFit: "Background image fit" => "Anpassa bakgrundsbild"
// p.backgroundImageAttachment: "Background image attachment" => "Bilaga till bakgrundsbild"
// p.backgroundOpacity: "Background opacity" => "Bakgrunds opacitet"
// p.selectToRankEnabled: "Select to rank enabled" => "Välj att rangordna aktiverad"
// p.selectToRankAreasLayout: "Select to rank areas layout" => "Välj för att rangordna områdeslayout"
// p.allowCameraAccess: "Allow camera access" => "Tillåt kameraåtkomst"
// p.scaleColorMode: "Scale color mode" => "Färgläge för skala"
// p.rateColorMode: "Rate color mode" => "Betygsätt färgläge"
// p.templateTabTitle: "Template tab title" => "Rubrik på mallfliken"
// p.templateVisibleIf: "Template visible if" => "Mallen visas om"
// p.copyDisplayValue: "Copy display value" => "Kopiera visningsvärde"
// theme.--background: "Background color" => "Bakgrundsfärg"
// theme.--background-dim-light: "Background dim light color" => "Bakgrund svag ljusfärg"
// theme.--primary-foreground: "Primary foreground color" => "Primär förgrundsfärg"
// theme.--foreground: "Foreground color" => "Förgrundsfärg"
// theme.--base-unit: "Base unit" => "Basenhet"
// theme.groupGeneral: "General" => "Allmänt"
// theme.groupAdvanced: "Advanced" => "Avancerad"
// theme.themeName: "Theme" => "Tema"
// theme.themeMode: "Question appearance" => "Fråga utseende"
// theme.themeModePanels: "Default" => "Standard"
// theme.themeModeLightweight: "Without Panels" => "Utan paneler"
// theme.themePaletteLight: "Light" => "Ljus"
// theme.themePaletteDark: "Dark" => "Mörk"
// theme.primaryColor: "Accent color" => "Accentfärg"
// theme.primaryDefaultColor: "Default" => "Standard"
// theme.primaryDarkColor: "Hover" => "Sväva"
// theme.primaryLightColor: "Selected" => "Vald"
// theme.backgroundDimColor: "Background color" => "Bakgrundsfärg"
// theme.backgroundImage: "Background image" => "Bakgrundsbild"
// theme.backgroundImageFitAuto: "Auto" => "Bil"
// theme.backgroundImageFitCover: "Cover" => "Täcka"
// theme.backgroundImageFitContain: "Contain" => "Innehålla"
// theme.backgroundOpacity: "Opacity" => "Ogenomskinlighet"
// theme.backgroundImageAttachmentFixed: "Fixed" => "Fast"
// theme.backgroundImageAttachmentScroll: "Scroll" => "Rulla"
// theme.panelBackgroundTransparency: "Panel background opacity" => "Opacitet för panelbakgrund"
// theme.questionBackgroundTransparency: "Question background opacity" => "Frågans bakgrundsopacitet"
// theme.questionPanel: "Panel background and corner radius" => "Panelbakgrund och hörnradie"
// theme.questionTitle: "Question title font" => "Teckensnitt för frågerubrik"
// theme.questionDescription: "Question description font" => "Typsnitt för frågebeskrivning"
// theme.editorPanel: "Input element" => "Inmatningselement"
// theme.editorFont: "Input element font" => "Teckensnitt för inmatningselement"
// theme.backcolor: "Default background" => "Standardbakgrund"
// theme.hovercolor: "Hover background" => "Håll muspekaren bakgrund"
// theme.borderDecoration: "Border decoration" => "Border dekoration"
// theme.accentBackground: "Accent background" => "Accent bakgrund"
// theme.accentForeground: "Accent foreground" => "Accent förgrund"
// theme.primaryForecolor: "Default color" => "Standardfärg"
// theme.primaryForecolorLight: "Disabled color" => "Inaktiverad färg"
// theme.linesColors: "Minor line colors" => "Mindre linjefärger"
// theme.borderDefault: "Darker" => "Mörkare"
// theme.borderLight: "Lighter" => "Tändare"
// theme.fontFamily: "Font family" => "Teckensnitt familj"
// theme.fontSize: "Font size" => "Teckenstorlek"
// theme.color: "Color" => "Färg"
// theme.size: "Size" => "Storlek"
// theme.fontWeightRegular: "Regular" => "Ordinarie"
// theme.fontWeightHeavy: "Heavy" => "Tung"
// theme.fontWeightSemiBold: "Semi-bold" => "Halvfet"
// theme.fontWeightBold: "Bold" => "Djärv"
// theme.scale: "Scale" => "Skala"
// theme.cornerRadius: "Corner radius" => "Hörnradie"
// theme.surveyTitle: "Survey title font" => "Teckensnitt för undersökningstitel"
// theme.pageTitle: "Page title font" => "Teckensnitt för sidtitel"
// theme.pageDescription: "Page description font" => "Teckensnitt för sidbeskrivning"
// theme.boxShadowX: "X" => "X"
// theme.boxShadowY: "Y" => "Y"
// theme.boxShadowAddRule: "Add Shadow Effect" => "Lägg till skuggeffekt"
// theme.opacity: "Opacity" => "Ogenomskinlighet"
// theme.boxShadowBlur: "Blur" => "Oskärpa"
// theme.boxShadowSpread: "Spread" => "Sprida"
// theme.boxShadowDrop: "Drop" => "Droppe"
// theme.boxShadowInner: "Inner" => "Inre"
// theme.questionShadow: "Shadow effects" => "Skuggeffekter"
// theme.editorShadow: "Input element shadow effects" => "Skuggeffekter för indataelement"
// names.default: "Default" => "Standard"
// names.contrast: "Contrast" => "Kontrast"
// names.plain: "Plain" => "Slätt"
// names.simple: "Simple" => "Enkel"
// names.blank: "Blank" => "Blank"
// names.double: "Double" => "Dubbel"
// names.bulk: "Bulk" => "Omfång"
// names.pseudo-3d: "Pseudo 3D" => "Pseudo 3D"
// names.playful: "Playful" => "Lekfull"
// names.ultra: "Ultra" => "Ultra"
// colors.teal: "Teal" => "Kricka"
// colors.blue: "Blue" => "Blå"
// colors.purple: "Purple" => "Lila"
// colors.orchid: "Orchid" => "Orkidé"
// colors.tulip: "Tulip" => "Tulpan"
// colors.brown: "Brown" => "Brun"
// colors.green: "Green" => "Grön"
// lg.expressionSetup: "" => ""
// lg.actionsSetup: "" => ""
// names.sharp: "Sharp" => "Skarp"
// names.borderless: "Borderless" => "Marginalfri"
// names.flat: "Flat" => "Flat"
// names.doubleborder: "Double Border" => "Dubbel kantlinje"
// names.layered: "Layered" => "Lager"
// names.solid: "Solid" => "Solid"
// names.threedimensional: "3D" => ".3D"
// ed.translationDeleteLanguage: "Are you certain you wish to delete all strings for this language?" => "Är du säker på att du vill ta bort alla strängar för det här språket?"
// ed.themeResetButton: "Reset theme settings to default" => "Återställ temainställningarna till standard"
// lg.expressionSetup: "" => ""
// lg.actionsSetup: "" => ""
// theme.placeholderColor: "Placeholder color" => "Färg på platshållare"
// ed.themeSettings: "Theme Settings" => "Tema Inställningar"
// ed.themeSettingsTooltip: "Open theme settings" => "Öppna temainställningar"
// lg.expressionSetup: "" => ""
// lg.actionsSetup: "" => ""
// pe.resetToDefaultCaption: "Reset" => "Nollställa"
// pv.file: "Local files" => "Lokala filer"
// pv.camera: "Camera" => "Kamera"
// pv.file-camera: "Local files or camera" => "Lokala filer eller kamera"
// ed.translateUsigAI: "Auto-translate All" => "Översätt alla automatiskt"
// ed.translationDialogTitle: "Untranslated strings" => "Oöversatta strängar"
// lg.expressionSetup: "" => ""
// lg.actionsSetup: "" => ""
// pe.fastEntryChoicesMinCountError: "Please enter at least {0} items" => "Ange minst {0} artiklar"
// pe.markRequired: "Mark as required" => "Markera efter behov"
// pe.removeRequiredMark: "Remove the required mark" => "Ta bort det obligatoriska märket"