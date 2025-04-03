import { setupLocale } from "survey-creator-core";

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
  // Creator tabs
  tabs: {
    preview: "Testa enkät",
    theme: "Teman",
    translation: "Översättning",
    designer: "Enkät Designer",
    json: "JSON Redigering",
    logic: "Logik"
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
  toolboxCategories: {
    general: "Generellt",
    choice: "Frågor om val",
    text: "Frågor om textinmatning",
    containers: "Behållare",
    matrix: "Matris frågor",
    misc: "Misc"
  },
  // Strings in SurveyJS Creator
  ed: {
    defaultLocale: "Standard ({0})",
    survey: "Enkät",
    settings: "Enkät inställningar",
    settingsTooltip: "Öppna inställningar",
    surveySettings: "Inställningar för undersökning",
    surveySettingsTooltip: "Inställningar för undersökning",
    themeSettings: "Tema Inställningar",
    themeSettingsTooltip: "Inställningar för tema",
    creatorSettingTitle: "Inställningar för kreatör",
    showPanel: "Visa panel",
    hidePanel: "Dölj panel",
    prevSelected: "Välj föregående",
    nextSelected: "Välj nästa",
    prevFocus: "Fokus föregående",
    nextFocus: "Fokus nästa",
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
    newTextItemName: "text",
    defaultV2Theme: "Standard",
    modernTheme: "Modern",
    defaultTheme: "Standard (äldre)",
    testSurveyAgain: "Testa enkät igen",
    testSurveyWidth: "Enkät bredd: ",
    navigateToMsg: "Du var tvungen att navigera till",
    saveSurvey: "Spara Enkät",
    saveSurveyTooltip: "Spara undersökning",
    saveTheme: "Spara tema",
    saveThemeTooltip: "Spara tema",
    jsonHideErrors: "Dölj fel",
    jsonShowErrors: "Visa fel",
    undo: "Ångra",
    redo: "Göra om",
    undoTooltip: "Ångra senaste ändring",
    redoTooltip: "Gör om ändringen",
    expandTooltip: "Expandera",
    collapseTooltip: "Kollaps",
    expandAllTooltip: "Expandera alla",
    collapseAllTooltip: "Komprimera alla",
    zoomInTooltip: "Zooma in",
    zoom100Tooltip: "Zooma till 100 %",
    zoomOutTooltip: "Zooma ut",
    lockQuestionsTooltip: "Lås expandera/komprimera tillstånd för frågor",
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
    toolboxFilteredTextPlaceholder: "Skriv för att söka...",
    toolboxNoResultsFound: "Inga resultat hittades",
    propertyGridFilteredTextPlaceholder: "Skriv för att söka...",
    propertyGridNoResultsFound: "Inga resultat hittades",
    propertyGridPlaceholderTitle: "Börja konfigurera formuläret",
    propertyGridPlaceholderDescription: "Klicka på en kategoriikon för att utforska undersökningsinställningarna. Ytterligare inställningar blir tillgängliga när du lägger till ett undersökningselement på designytan.",
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
    addLanguageTooltip: "Lägg till språk",
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
    translateUsigAIFrom: "Översätt från: ",
    translationDialogTitle: "Oöversatta strängar",
    translationMergeLocaleWithDefault: "Mergea {0} med standard språk",
    translationPlaceHolder: "Översättning...",
    translationSource: "Källa: ",
    translationTarget: "Mål: ",
    translationYouTubeNotSupported: "YouTube-länkar stöds inte.",
    themeExportButton: "Export",
    themeImportButton: "Import",
    surveyJsonExportButton: "Export",
    surveyJsonImportButton: "Import",
    surveyJsonCopyButton: "Kopiera till Urklipp",
    themeResetButton: "Återställ temainställningarna till standard",
    themeResetConfirmation: "Vill du verkligen återställa temat? Alla dina anpassningar kommer att gå förlorade.",
    themeResetConfirmationOk: "Ja, återställ temat",
    bold: "Djärv",
    italic: "Kursiv",
    underline: "Understryka",
    addNewQuestion: "Lägg till fråga",
    selectPage: "Välj sida...",
    carryForwardChoicesCopied: "Alternativen kopieras från",
    choicesLoadedFromWebText: "Alternativen läses in från en webbtjänst.",
    choicesLoadedFromWebLinkText: "Gå till inställningar",
    choicesLoadedFromWebPreviewTitle: "Förhandsgranskning av inlästa alternativalternativ",
    htmlPlaceHolder: "HTML-innehåll kommer att finnas här.",
    panelPlaceHolder: "Släpp en fråga från verktygslådan här.",
    surveyPlaceHolder: "Enkäten är tom. Dra ett element från verktygslådan eller klicka på knappen nedan.",
    pagePlaceHolder: "Sidan är tom. Dra ett element från verktygslådan eller klicka på knappen nedan.",
    imagePlaceHolder: "Dra och släpp en bild här eller klicka på knappen nedan och välj en bild att ladda upp",
    surveyPlaceHolderMobile: "Klicka på knappen \"Lägg till fråga\" nedan för att börja skapa ditt formulär.",
    surveyPlaceholderTitle: "Formuläret är tomt",
    surveyPlaceholderTitleMobile: "Formuläret är tomt",
    surveyPlaceholderDescription: "Dra ett element från verktygslådan eller klicka på knappen nedan.",
    surveyPlaceholderDescriptionMobile: "Dra ett element från verktygslådan eller klicka på knappen nedan.",
    previewPlaceholderTitle: "Ingen förhandsgranskning",
    previewPlaceholderTitleMobile: "Ingen förhandsgranskning",
    previewPlaceholderDescription: "Undersökningen innehåller inga synliga element.",
    previewPlaceholderDescriptionMobile: "Undersökningen innehåller inga synliga element.",
    translationsPlaceholderTitle: "Inga strängar att översätta",
    translationsPlaceholderTitleMobile: "Inga strängar att översätta",
    translationsPlaceholderDescription: "Lägg till element i formuläret eller ändra strängfiltret i verktygsfältet.",
    translationsPlaceholderDescriptionMobile: "Lägg till element i formuläret eller ändra strängfiltret i verktygsfältet.",
    pagePlaceHolderMobile: "Klicka på knappen \"Lägg till fråga\" nedan för att lägga till ett nytt element på sidan.",
    panelPlaceHolderMobile: "Klicka på knappen \"Lägg till fråga\" nedan för att lägga till ett nytt element i panelen.",
    imagePlaceHolderMobile: "Klicka på knappen nedan och välj en bild att ladda upp",
    imageChooseImage: "Välj bild",
    addNewTypeQuestion: "Lägg till {0}", //{0} is localizable question type
    chooseLogoPlaceholder: "[LOGOTYP]",
    choices_Item: "Sak ",
    selectFile: "Välj en fil",
    removeFile: "Ta bort filen",
    lg: {
      addNewItem: "Lägg till ny regel",
      empty_tab: "Skapa en regel för att anpassa undersökningens flöde.",
      logicPlaceholderTitle: "Inga logiska regler",
      logicPlaceholderTitleMobile: "Inga logiska regler",
      logicPlaceholderDescription: "Skapa en regel för att anpassa flödet i undersökningen.",
      logicPlaceholderDescriptionMobile: "Skapa en regel för att anpassa flödet i undersökningen.",
      page_visibilityName: "Visa (dölj) sida",
      page_enableName: "Aktivera (inaktivera) sida",
      page_requireName: "Gör sidan obligatorisk",
      panel_visibilityName: "Visa (dölj) panelen",
      panel_enableName: "Aktivera (inaktivera) panelen",
      panel_requireName: "Gör sidan obligatorisk",
      question_visibilityName: "Visa (dölj) fråga",
      question_enableName: "Aktivera (inaktivera) fråga",
      question_requireName: "Gör frågan obligatorisk",
      question_resetValueName: "Återställ frågevärde",
      question_setValueName: "Ange frågevärde",
      column_visibilityName: "Visa (dölj) kolumn",
      column_enableName: "Aktivera (inaktivera) kolumn",
      column_requireName: "Gör kolumnen obligatorisk",
      column_resetValueName: "Återställ kolumnvärde",
      column_setValueName: "Ange kolumnvärde",
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
      question_resetValueText: "Återställ värde för fråga: {0}", //{0} question name.
      question_setValueText: "Tilldela värde: {1} till fråga: {0}",
      column_visibilityText: "Synliggör kolumn {0} av fråga {1}", //{0} column name, {1} question name
      column_enableText: "Gör kolumn {0} av fråga {1} aktivera", //{0} column name, {1} question name
      column_requireText: "Gör kolumn {0} av fråga {1} krävs", //{0} column name, {1} question name
      column_resetValueText: "Återställ cellvärde för kolumn: {0}", //{0} column name
      column_setValueText: "Tilldela cellvärde: {1} till kolumn: {0}", //{0} column name and {1} setValueExpression
      setValueExpressionPlaceholder: " Ett uttryck vars resultat kommer att tilldelas målfrågan.",
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
      uncompletedRule_cancel: "Nej, jag vill komplettera reglerna"
    }
  },
  // Property Editors
  pe: {
    panel: {
      name: "Panelens namn",
      title: "Panelens titel",
      description: "Beskrivning av panelen",
      visibleIf: "Gör panelen synlig om",
      requiredIf: "Gör panelen obligatorisk om",
      questionOrder: "Frågeordning i panelen",
      page: "Överordnad sida",
      startWithNewLine: "Visa panelen på en ny rad",
      state: "Panelens komprimerade tillstånd",
      width: "Bredd på infogad panel",
      minWidth: "Minsta panelbredd",
      maxWidth: "Maximal panelbredd",
      showNumber: "Numrera den här panelen"
    },
    panellayoutcolumn: {
      effectiveWidth: "Effektiv bredd, %",
      questionTitleWidth: "Frågans titelbredd, px"
    },
    paneldynamic: {
      name: "Panelens namn",
      title: "Panelens titel",
      description: "Beskrivning av panelen",
      visibleIf: "Gör panelen synlig om",
      requiredIf: "Gör panelen obligatorisk om",
      page: "Flytta panelen till sidan",
      startWithNewLine: "Visa panelen på en ny rad",
      state: "Panelens komprimerade tillstånd",
      width: "Bredd på infogad panel",
      minWidth: "Minsta panelbredd",
      maxWidth: "Maximal panelbredd",
      confirmDelete: "Bekräfta borttagning av panelen",
      templateDescription: "Mönster för panelbeskrivning",
      templateTitle: "Mönster för panelrubrik",
      noEntriesText: "Tom paneltext",
      templateTabTitle: "Mönster för flikrubrik",
      tabTitlePlaceholder: "Platshållare för flikrubrik",
      templateVisibleIf: "Gör en enskild panel synlig om",
      showNumber: "Numrera panelen",
      titleLocation: "Justering av panelrubrik",
      descriptionLocation: "Justering av panelbeskrivning",
      templateQuestionTitleLocation: "Justering av frågerubrik",
      templateQuestionTitleWidth: "Bredd på frågetitel",
      templateErrorLocation: "Justering av felmeddelande",
      newPanelPosition: "Ny panelplats",
      showRangeInProgress: "Visa förloppsindikatorn",
      keyName: "Förhindra dubbletter av svar i följande fråga"
    },
    question: {
      name: "Frågans namn",
      title: "Frågans rubrik",
      description: "Beskrivning av frågan",
      visibleIf: "Gör frågan synlig om",
      requiredIf: "Gör frågan obligatorisk om",
      page: "Överordnad sida",
      state: "Komprimeringstillstånd för frågeruta",
      showNumber: "Numrera den här frågan",
      titleLocation: "Justering av frågerubrik",
      descriptionLocation: "Justering av frågebeskrivning",
      errorLocation: "Justering av felmeddelande",
      indent: "Öka det inre indraget",
      width: "Bredd på infogade frågor",
      minWidth: "Minsta frågebredd",
      maxWidth: "Maximal frågebredd",
      textUpdateMode: "Uppdatera indatafältsvärde"
    },
    signaturepad: {
      signatureWidth: "Signaturområdets bredd",
      signatureHeight: "Signaturområdets höjd",
      signatureAutoScaleEnabled: "Skala signaturområdet automatiskt",
      showPlaceholder: "Visa platshållaren",
      placeholder: "Platshållartext",
      placeholderReadOnly: "Platshållartext i skrivskyddat läge eller förhandsgranskningsläge",
      allowClear: "Visa knappen Rensa i signaturområdet",
      penMinWidth: "Minsta pennbredd",
      penMaxWidth: "Maximal pennbredd",
      penColor: "Linjefärg"
    },
    comment: {
      rows: "Inmatningsfältets höjd (i rader)"
    },
    showQuestionNumbers: "Visa frågenummer",
    questionStartIndex: "Fråga start index (1, 2 eller 'A', 'a')",
    expression: {
      name: "Namn på uttryck",
      title: "Uttryckets titel",
      description: "Beskrivning av uttryck",
      expression: "Uttryck"
    },
    trigger: {
      expression: "Uttryck"
    },
    calculatedvalue: {
      expression: "Uttryck"
    },
    // survey templates
    survey: {
      title: "Titel",
      description: "Beskrivning av undersökningen",
      readOnly: "Gör undersökningen skrivskyddad"
    },
    page: {
      name: "Sidans namn",
      title: "Titel",
      description: "Beskrivning av sidan",
      visibleIf: "Gör sidan synlig om",
      requiredIf: "Gör sidan obligatorisk om",
      timeLimit: "Tidsgräns för att avsluta sidan (i sekunder)",
      questionOrder: "Frågeordning på sidan"
    },
    matrixdropdowncolumn: {
      name: "Kolumnens namn",
      title: "Kolumnens rubrik",
      isUnique: "Förhindra dubbletter av svar",
      width: "Kolumnbredd",
      minWidth: "Minsta kolumnbredd",
      rows: "Inmatningsfältets höjd (i rader)",
      visibleIf: "Gör kolumnen synlig om",
      requiredIf: "Gör kolumnen obligatorisk om",
      showInMultipleColumns: "Varje alternativ i en separat kolumn"
    },
    multipletextitem: {
      name: "Namn",
      title: "Titel"
    },
    masksettings: {
      saveMaskedValue: "Spara maskerat värde i undersökningsresultat"
    },
    patternmask: {
      pattern: "Värdemönster"
    },
    datetimemask: {
      min: "Minsta värde",
      max: "Maximalt värde"
    },
    numericmask: {
      allowNegativeValues: "Tillåt negativa värden",
      thousandsSeparator: "Avgränsare för tusental",
      decimalSeparator: "Decimaltecknet",
      precision: "Värde precision",
      min: "Minsta värde",
      max: "Maximalt värde"
    },
    currencymask: {
      prefix: "Prefix för valuta",
      suffix: "Valutasuffix"
    },
    imageHeight: "Bild höjd",
    imageWidth: "Bild bredd",
    valueName: "Värde namn",
    defaultDisplayValue: "Standardvisningsvärde för dynamiska texter",
    rateDescriptionLocation: "Justering av etiketter",
    size: "Inmatningsfältets storlek (i tecken)",
    cellErrorLocation: "Justering av cellfelmeddelande",
    enabled: "Aktiverat",
    disabled: "Inaktiverad",
    inherit: "Ärva",
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
    "listIsEmpty@columns": "Du har inga kolumner ännu",
    "listIsEmpty@gridLayoutColumns": "Du har inga layoutkolumner ännu",
    "listIsEmpty@rows": "Du har inga rader ännu",
    "listIsEmpty@validators": "Du har inga valideringsregler ännu",
    "listIsEmpty@calculatedValues": "Du har inga anpassade variabler ännu",
    "listIsEmpty@triggers": "Du har inga utlösare ännu",
    "listIsEmpty@navigateToUrlOnCondition": "Du har inga länkar ännu",
    "listIsEmpty@pages": "Du har inga sidor ännu",
    "addNew@choices": "Lägg till ett val",
    "addNew@columns": "Lägg till ny kolumn",
    "addNew@rows": "Lägg till ny rad",
    "addNew@validators": "Lägg till ny regel",
    "addNew@calculatedValues": "Lägg till ny variabel",
    "addNew@triggers": "Lägga till ny utlösare",
    "addNew@navigateToUrlOnCondition": "Lägg till ny URL",
    "addNew@pages": "Lägg till ny sida",
    expressionIsEmpty: "Uttrycket är tomt",
    value: "Värde",
    text: "Text",
    rowid: "Rad ID",
    imageLink: "Bild länk",
    columnEdit: "Redigera kolumn: {0}",
    itemEdit: "Redigera element: {0}",
    url: "URL",
    path: "Sökväg",
    choicesbyurl: {
      url: "Webbtjänstens URL",
      valueName: "Hämta värden från följande JSON-fält"
    },
    titleName: "Titel namn",
    imageLinkName: "Hämta bild-URL:er från följande JSON-fält",
    allowEmptyResponse: "Tillåt tomt svar",
    titlePlaceholder: "Titel",
    surveyTitlePlaceholder: "Undersökningens titel",
    pageTitlePlaceholder: "Sida {num}",
    startPageTitlePlaceholder: "Startsida",
    descriptionPlaceholder: "Beskrivning",
    surveyDescriptionPlaceholder: "Beskrivning",
    pageDescriptionPlaceholder: "Beskrivning",
    textWrapEnabled: "Radbryt val",
    showOtherItem: "Har annat element",
    otherText: "Annat",
    showNoneItem: "Tillåt alternativet Ingen",
    showRefuseItem: "Tillåt alternativet Vägra svara",
    showDontKnowItem: "Tillåt alternativet Vet ej",
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
    allowCustomChoices: "Tillåt anpassade val",
    visible: "Synlig?",
    isRequired: "Nödvändig?",
    markRequired: "Markera efter behov",
    removeRequiredMark: "Ta bort det obligatoriska märket",
    eachRowRequired: "Kräv svar för alla rader",
    eachRowUnique: "Förhindra dubbletter av svar i rader",
    requiredErrorText: "Felmeddelandet \"Obligatoriskt\"",
    startWithNewLine: "Starta på en ny rad?",
    rows: "Antal rader",
    cols: "Kolumner",
    placeholder: "Mata in i fältet",
    showPreview: "Förhandsvinsning av bild?",
    storeDataAsText: "Lagra filinnehållet i JSON som text",
    maxSize: "Max filstorlek i bytes",
    rowCount: "Antal rader",
    columnLayout: "Stil på kolumn",
    addRowButtonLocation: "Lägg till radknapp plats",
    transposeData: "Transponera rader till kolumner",
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
    clearInvisibleValues: "Rensa osynliga värden",
    cookieName: "Kaknamn (för att inaktivera kör enkäten två gånger lokalt)",
    partialSendEnabled: "Skicka enkät resultatet till nästa sida",
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
    navigationButtonsLocation: "Justering av navigeringsknappar",
    showPrevButton: "Visa föregående knapp (användaren kan gå återgå till föregående sida)",
    firstPageIsStartPage: "Den första sidan i enkäten är startsidan.",
    showCompletePage: "Visa den slutförda sidan på slutet (completedHtml)",
    autoAdvanceEnabled: "Vid besvarande av alla frågor, gå till nästa sida automatiskt",
    autoAdvanceAllowComplete: "Fyll i enkäten automatiskt",
    showProgressBar: "Visa händelsförlopp",
    progressBarLocation: "Justering av förloppsindikator",
    questionTitleLocation: "Fråga titel placering",
    questionTitleWidth: "Bredd på frågerubrik",
    requiredMark: "Var vänlig skriv en text",
    questionTitleTemplate: "Fråga titel mall, standard är: '{no}. {require} {title}'",
    questionErrorLocation: "Fråga fel placerad",
    autoFocusFirstQuestion: "Fokusera på första frågan vid ändring av sidan",
    questionOrder: "Element ordning på sidan",
    timeLimit: "Max tid för att slutföra enkäten",
    timeLimitPerPage: "Max tid för att göra färdigt en sida i enkäten",
    showTimer: "Använd en timer",
    timerLocation: "Visa tidtagning",
    timerInfoMode: "Visa tidtagning läge",
    renderMode: "Rendering läge",
    allowAddPanel: "Tillåt att lägga till panel",
    allowRemovePanel: "Tillåt att ta bort panel",
    addPanelText: "Lägg till panel text",
    removePanelText: "Ta bort panel text",
    isSinglePage: "Visa alla element på en sida",
    html: "HTML-kod",
    setValue: "Svar",
    dataFormat: "Bildformat",
    allowAddRows: "Tillåt att rader läggs till",
    allowRemoveRows: "Tillåt borttagning av rader",
    allowRowReorder: "Tillåt dra och släpp rader",
    responsiveImageSizeHelp: "Gäller inte om du anger bildens exakta bredd eller höjd.",
    minImageWidth: "Minsta bildbredd",
    maxImageWidth: "Maximal bildbredd",
    minImageHeight: "Minsta bildhöjd",
    maxImageHeight: "Maximal bildhöjd",
    minValue: "Minsta värde",
    maxValue: "Maximalt värde",
    caseInsensitive: "Skiftlägesokänsligt",
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
    maxCommentLength: "Maximal kommentarslängd (i tecken)",
    commentAreaRows: "Kommentarsfältets höjd (i rader)",
    autoGrowComment: "Expandera kommentarsområdet automatiskt om det behövs",
    allowResizeComment: "Tillåt användare att ändra storlek på textområden",
    textUpdateMode: "Uppdatera textfrågevärde",
    maskType: "Typ av indatamask",
    autoFocusFirstError: "Ställ in fokus på det första ogiltiga svaret",
    checkErrorsMode: "Kör validering",
    validateVisitedEmptyFields: "Validera tomma fält vid förlorat fokus",
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
    searchMode: "Sökläge",
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
    panelCount: "Inledande panelantal",
    minPanelCount: "Minsta antal paneler",
    maxPanelCount: "Maximalt antal paneler",
    panelsState: "Expanderingsläge för innerpanelen",
    prevPanelText: "Knappbeskrivning för föregående panel",
    nextPanelText: "Knappbeskrivning för knappen Nästa panel",
    removePanelButtonLocation: "Ta bort panelknappens placering",
    hideIfRowsEmpty: "Dölj frågan om det inte finns några rader",
    hideColumnsIfEmpty: "Dölj kolumner om det inte finns några rader",
    rateValues: "Anpassade prisvärden",
    rateCount: "Antal priser",
    autoGenerate: "Hur anger jag hastighetsvärden?",
    hideIfChoicesEmpty: "Dölj frågan om den inte innehåller några alternativ",
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
    logoWidth: "Logotypbredd (i CSS-godkända värden)",
    logoHeight: "Logotypens höjd (i CSS-godkända värden)",
    readOnly: "Skrivskyddad",
    enableIf: "Redigerbar om",
    noRowsText: "Meddelandet \"Inga rader\"",
    separateSpecialChoices: "Avgränsa specialval (Ingen, Annat, Markera alla)",
    choicesFromQuestion: "Kopiera alternativ från följande fråga",
    choicesFromQuestionMode: "Vilka val ska du kopiera?",
    choiceValuesFromQuestion: "Använd värden från följande matriskolumn eller panelfråga som val-ID:t",
    choiceTextsFromQuestion: "Använd värden från följande matriskolumn eller panelfråga som valtexter",
    progressBarShowPageTitles: "Visa sidrubriker i förloppsindikatorn",
    progressBarShowPageNumbers: "Visa sidnummer i förloppsindikatorn",
    showCommentArea: "Visa kommentarsområdet",
    commentPlaceholder: "Platshållare för kommentarsområde",
    displayRateDescriptionsAsExtremeItems: "Visa hastighetsbeskrivningar som extremvärden",
    rowOrder: "Radordning",
    columnsLayout: "Kolumnlayout",
    columnColCount: "Kapslat antal kolumner",
    correctAnswer: "Rätt svar",
    defaultPanelValue: "Standardvärden",
    cells: "Cell texter",
    fileInputPlaceholder: "Välj en fil eller klistra in en fillänk...",
    keyName: "Kolumnen Nyckel",
    itemvalue: {
      visibleIf: "Gör alternativet synligt om",
      enableIf: "Gör alternativet valbart om"
    },
    "itemvalue@rows": {
      visibleIf: "Gör raden synlig om",
      enableIf: "Gör raden redigerbar om"
    },
    imageitemvalue: {
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
    previewMode: "Förhandsgranska läge",
    gridLayoutEnabled: "Aktivera rutnätslayouten",
    gridLayoutColumns: "Kolumner för rutnätslayout",
    maskSettings: "Inställningar för mask",
    detailErrorLocation: "Felmeddelande om radexpansion",
    // Creator tabs
    tabs: {
      panel: {
        layout: "Panelens layout"
      },
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
      mask: "Inställningar för inmatningsmask",
      layout: {
        panel: "Layout",
        question: "Layout",
        base: "Layout"
      },
      data: "Data",
      validation: "Validering",
      cells: "Cell texter",
      showOnCompleted: "Undersökningen slutförd",
      logo: "Logotyp i undersökningens titel",
      slider: "Skjutreglage",
      expression: "Uttryck",
      questionSettings: "Inställningar för frågor",
      header: "Rubrik",
      background: "Bakgrund",
      appearance: "Utseende",
      accentColors: "Accentfärger",
      surfaceBackground: "Yta Bakgrund",
      scaling: "Skalning",
      others: "Andra"
    },
    editProperty: "Redigera egenskap '{0}'",
    items: "[ Element: {0} ]",
    choicesVisibleIf: "Alternativen är synliga om",
    choicesEnableIf: "Alternativen kan väljas om",
    columnsEnableIf: "Kolumner visas om",
    rowsEnableIf: "Raderna visas om",
    innerIndent: "Lägga till inre indrag",
    copyDefaultValueFromLastEntry: "Använd svar från den senaste posten som standard",
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
    verticalAlign: "Vertikal inriktning",
    alternateRows: "Varannan rad",
    columnsVisibleIf: "Kolumner visas om",
    rowsVisibleIf: "Raderna visas om",
    otherPlaceholder: "Platshållare för kommentarsområde",
    filePlaceholder: "Text för filplatshållare",
    photoPlaceholder: "Text för platshållare för foton",
    fileOrPhotoPlaceholder: "Platshållartext för fil eller foto",
    rateType: "Typ av hastighet",
    url_placeholder: "Ex.: https://api.example.com/books",
    path_placeholder: "Ex.: kategorier.skönlitteratur",
    questionStartIndex_placeholder: "Ex.: a)",
    width_placeholder: "Ex.: 6 tum",
    minWidth_placeholder: "Ex.: 600px",
    maxWidth_placeholder: "Ex.: 50%",
    imageHeight_placeholder: "bil",
    imageWidth_placeholder: "bil",
    itemTitleWidth_placeholder: "Ex.: 100px",
    theme: {
      themeName: "Tema",
      isPanelless: "Frågans utseende",
      editorPanel: "Bakgrund och hörnradie",
      questionPanel: "Bakgrund och hörnradie",
      primaryColor: "Accentfärg",
      panelBackgroundTransparency: "Opacitet för panelbakgrund",
      questionBackgroundTransparency: "Opacitet för frågebakgrund",
      fontSize: "Teckenstorlek",
      scale: "Skala",
      cornerRadius: "Hörn radie",
      advancedMode: "Avancerat läge",
      pageTitle: "Titel typsnitt",
      pageDescription: "Beskrivning teckensnitt",
      questionTitle: "Titel typsnitt",
      questionDescription: "Beskrivning teckensnitt",
      editorFont: "Teckensnitt",
      backgroundOpacity: "Ogenomskinlighet",
      "--sjs-font-family": "Teckensnitt familj",
      "--sjs-general-backcolor-dim": "Bakgrundsfärg",
      "--sjs-primary-backcolor": "Accent bakgrund",
      "--sjs-primary-forecolor": "Accent förgrund",
      "--sjs-special-red": "Felmeddelanden",
      "--sjs-shadow-small": "Skugga effekter",
      "--sjs-shadow-inner": "Skugga effekter",
      "--sjs-border-default": "Färger"
    },
    "header@header": {
      headerView: "Utsikt",
      logoPosition: "Logotypens placering",
      surveyTitle: "Teckensnitt för undersökningens titel",
      surveyDescription: "Teckensnitt för undersökningsbeskrivning",
      headerTitle: "Teckensnitt för undersökningens titel",
      headerDescription: "Teckensnitt för undersökningsbeskrivning",
      inheritWidthFrom: "Bredd på innehållsområdet",
      textAreaWidth: "Textens bredd",
      backgroundColorSwitch: "Bakgrundsfärg",
      backgroundImage: "Bakgrundsbild",
      backgroundImageOpacity: "Ogenomskinlighet",
      overlapEnabled: "Överlappa",
      logoPositionX: "Logotypens placering",
      titlePositionX: "Titel position",
      descriptionPositionX: "Beskrivning position"
    }
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
    selected: "Vald",
    unselected: "Omarkerade",
    decimal: "decimal",
    currency: "valuta",
    percent: "procent",
    firstExpanded: "firstExpanded",
    off: "off",
    list: "list",
    carousel: "Karusell",
    tab: "Flikar",
    progressTop: "progressTop",
    progressBottom: "progressBottom",
    progressTopBottom: "progressTopBottom",
    horizontal: "horizontal",
    vertical: "vertical",
    top: "top",
    bottom: "bottom",
    topBottom: "top and bottom",
    both: "Båda",
    left: "left",
    right: "Höger",
    center: "Centrum",
    leftRight: "Vänster och höger",
    middle: "Mitt",
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
    text: "Text",
    time: "Tid",
    url: "URL",
    week: "vecka",
    hidden: "hidden",
    edit: "edit",
    display: "display",
    contain: "Innehålla",
    cover: "Täcka",
    fill: "Fylla",
    next: "Nästa",
    last: "Sist",
    onComplete: "onComplete",
    onHidden: "onHidden",
    onHiddenContainer: "När frågan eller dess panel/sida döljs",
    clearInvisibleValues: {
      none: "Aldrig"
    },
    clearIfInvisible: {
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
      text: "Text",
      time: "Tid",
      url: "URL",
      week: "Vecka"
    },
    autocomplete: {
      name: "Fullständigt namn",
      "honorific-prefix": "Prefix",
      "given-name": "Förnamn",
      "additional-name": "Mellannamn",
      "family-name": "Efternamn",
      "honorific-suffix": "Suffix",
      nickname: "Smeknamn",
      "organization-title": "Befattning",
      username: "Användarnamn",
      "new-password": "Nytt lösenord",
      "current-password": "Aktuellt lösenord",
      organization: "Organisationens namn",
      "street-address": "Fullständig gatuadress",
      "address-line1": "Adress, rad 1",
      "address-line2": "Adress Rad 2",
      "address-line3": "Adress: Rad 3",
      "address-level4": "Nivå 4 Adress",
      "address-level3": "Nivå 3 Adress",
      "address-level2": "Nivå 2 Adress",
      "address-level1": "Nivå 1 Adress",
      country: "Landskod",
      "country-name": "Landets namn",
      "postal-code": "Postnummer",
      "cc-name": "Kortinnehavarens namn",
      "cc-given-name": "Kortinnehavarens förnamn",
      "cc-additional-name": "Kortinnehavarens mellannamn",
      "cc-family-name": "Kortinnehavarens efternamn",
      "cc-number": "Kreditkortsnummer",
      "cc-exp": "Utgångsdatum",
      "cc-exp-month": "Förfallomånad",
      "cc-exp-year": "Utgångsdatum",
      "cc-csc": "Kortets säkerhetskod",
      "cc-type": "Typ av kreditkort",
      "transaction-currency": "Transaktionsvalutan",
      "transaction-amount": "Transaktionens belopp",
      language: "Önskat språk",
      bday: "Födelsedag",
      "bday-day": "Födelsedag",
      "bday-month": "Födelsedag Månad",
      "bday-year": "Födelsedag År",
      sex: "Genus",
      url: "Webbadress",
      photo: "Profilbild",
      tel: "Telefonnummer",
      "tel-country-code": "Landskod för telefon",
      "tel-national": "Nationellt telefonnummer",
      "tel-area-code": "Riktnummer",
      "tel-local": "Lokalt telefonnummer",
      "tel-local-prefix": "Prefix för lokal telefon",
      "tel-local-suffix": "Suffix för lokal telefon",
      "tel-extension": "Telefonanknytning",
      email: "E-postadress",
      impp: "Protokoll för snabbmeddelanden"
    },
    maskType: {
      none: "Ingen",
      pattern: "Mönster",
      numeric: "Numerisk",
      datetime: "Datum och tid",
      currency: "Valuta"
    },
    inputTextAlignment: {
      auto: "Automatisk",
      left: "Vänster",
      right: "Höger"
    },
    all: "Alla",
    page: "Sidan",
    survey: "Enkät",
    onNextPage: "På nästa sida",
    onValueChanged: "På värdeförändring",
    onValueChanging: "Innan ett svar ändras",
    questionsOnPageMode: {
      standard: "Ursprunglig struktur",
      singlePage: "Visa alla frågor på en sida",
      questionPerPage: "Visa en fråga per sida"
    },
    noPreview: "Ingen förhandsgranskning",
    showAllQuestions: "Visa alla frågor",
    showAnsweredQuestions: "Visa endast besvarade frågor",
    allQuestions: "Visa alla frågor",
    answeredQuestions: "Visa endast besvarade frågor",
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
    auto: "Automatisk",
    showNavigationButtons: {
      none: "Dold"
    },
    timerInfoMode: {
      combined: "Båda"
    },
    addRowButtonLocation: {
      default: "Beror på matrislayout"
    },
    panelsState: {
      default: "Användare kan inte expandera eller komprimera paneler",
      collapsed: "Alla paneler är komprimerade",
      expanded: "Alla paneler är expanderade",
      firstExpanded: "Först utökad"
    },
    widthMode: {
      static: "Statisk",
      responsive: "Responsiv"
    },
    contentMode: {
      image: "Bild",
      video: "Video",
      youtube: "YouTube"
    },
    displayMode: {
      buttons: "Knappar",
      dropdown: "Rullgardinsmeny"
    },
    rateColorMode: {
      default: "Standard",
      scale: "Skala"
    },
    scaleColorMode: {
      monochrome: "Monokrom",
      colored: "Färgad"
    },
    autoGenerate: {
      "true": "Generera",
      "false": "Ange manuellt"
    },
    rateType: {
      labels: "Etiketter",
      stars: "Stjärnor",
      smileys: "Smileys"
    },
    state: {
      default: "Låst"
    },
    showQuestionNumbers: {
      default: "Automatisk numrering",
      on: "Automatisk numrering",
      onPage: "Återställ på varje sida",
      onpanel: "Återställ på varje panel",
      onPanel: "Återställ på varje panel",
      recursive: "Rekursiv numrering",
      onSurvey: "Fortsätt genom undersökningen",
      off: "Ingen numrering"
    },
    descriptionLocation: {
      underTitle: "Under frågans rubrik",
      underInput: "Under inmatningsfältet"
    },
    selectToRankAreasLayout: {
      horizontal: "Bredvid alternativ",
      vertical: "Ovanstående val"
    },
    displayStyle: {
      decimal: "Decimal",
      currency: "Valuta",
      percent: "Procent",
      date: "Datum"
    },
    totalDisplayStyle: {
      decimal: "Decimal",
      currency: "Valuta",
      percent: "Procent",
      date: "Datum"
    },
    rowOrder: {
      initial: "Original"
    },
    questionOrder: {
      initial: "Original"
    },
    progressBarLocation: {
      top: "Topp",
      bottom: "Botten",
      topbottom: "Topp och botten",
      aboveheader: "Ovanför sidhuvudet",
      belowheader: "Nedanför sidhuvudet",
      off: "Dold"
    },
    sum: "Summa",
    count: "Räkna",
    min: "Min",
    max: "Max",
    avg: "Avg",
    searchMode: {
      contains: "Innehåller",
      startsWith: "Börjar med"
    },
    backgroundImageFit: {
      auto: "Automatisk",
      cover: "Täcka",
      contain: "Innehålla",
      fill: "Tänja",
      tile: "Kakel"
    },
    backgroundImageAttachment: {
      fixed: "Fast",
      scroll: "Rulla"
    },
    headerView: {
      basic: "Grundläggande",
      advanced: "Avancerad"
    },
    inheritWidthFrom: {
      survey: "Samma som enkät",
      container: "Passa till behållare"
    },
    backgroundColorSwitch: {
      none: "Ingen",
      accentColor: "Accentfärg",
      custom: "Sed"
    },
    colorPalette: {
      light: "Ljus",
      dark: "Mörk"
    },
    isPanelless: {
      "false": "Standard",
      "true": "Utan paneler"
    },
    progressBarInheritWidthFrom: {
      survey: "Samma som undersökning",
      container: "Samma som behållare"
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
  peplaceholder: {
    patternmask: {
      pattern: "Ex.: +1(999)-999-99-99"
    },
    datetimemask: {
      pattern: "Ex.: mm/dd/åååå"
    },
    currencymask: {
      prefix: "Ex.: $",
      suffix: "Ex.: USD"
    },
    panelbase: {
      questionTitleWidth: "Ex.: 200px"
    },
    panellayoutcolumn: {
      effectiveWidth: "Ex.: 30%",
      questionTitleWidth: "Ex.: 200px"
    }
  },
  pehelp: {
    panel: {
      name: "Ett panel-ID som inte är synligt för svarande.",
      description: "Skriv en panelundertext.",
      visibleIf: "Använd trollstavsikonen för att ställa in en villkorsregel som bestämmer panelens synlighet.",
      enableIf: "Använd trollstavsikonen för att ställa in en villkorsregel som inaktiverar det skrivskyddade läget för panelen.",
      requiredIf: "Använd trollstavsikonen för att ställa in en villkorsregel som förhindrar att undersökningen skickas in om inte minst en kapslad fråga har ett svar.",
      questionTitleLocation: "Gäller alla frågor i den här panelen. Om du vill åsidosätta den här inställningen definierar du regler för rubrikjustering för enskilda frågor. Alternativet \"Ärv\" tillämpar inställningen på sidnivå (om den är inställd) eller på undersökningsnivå (\"Topp\" som standard).",
      questionTitleWidth: "Anger konsekvent bredd för frågerubriker när de är justerade till vänster om frågerutorna. Accepterar CSS-värden (px, %, in, pt, etc.).",
      questionErrorLocation: "Anger platsen för ett felmeddelande i förhållande till alla frågor i panelen. Alternativet \"Ärv\" tillämpar inställningen på sidnivå (om den är inställd) eller på undersökningsnivå.",
      questionOrder: "Behåller den ursprungliga ordningen på frågorna eller slumpar dem. Alternativet \"Ärv\" tillämpar inställningen på sidnivå (om den är inställd) eller på undersökningsnivå.",
      page: "Flyttar panelen till slutet av en markerad sida.",
      innerIndent: "Lägger till utrymme eller marginal mellan panelinnehållet och panelrutans vänstra kant.",
      startWithNewLine: "Avmarkera om du vill visa panelen på en rad med föregående fråga eller panel. Inställningen gäller inte om panelen är det första elementet i formuläret.",
      state: "Välj mellan: \"Expanderad\" - panelen visas i sin helhet och kan fällas ihop; \"Komprimerad\" - panelen visar endast titel och beskrivning och kan expanderas; \"Låst\" - panelen visas i sin helhet och kan inte fällas ihop.",
      width: "Ställer in panelens bredd i proportion till andra undersökningselement på samma rad. Accepterar CSS-värden (px, %, in, pt, etc.).",
      showQuestionNumbers: "Tilldelar nummer till frågor som är kapslade i den här panelen.",
      effectiveColSpan: "Anger hur många kolumner den här panelen sträcker sig över i rutnätslayouten.",
      gridLayoutColumns: "I den här tabellen kan du konfigurera varje rutnätskolumn i panelen. Den ställer automatiskt in breddprocenten för varje kolumn baserat på det maximala antalet element i en rad. Om du vill anpassa rutnätslayouten justerar du dessa värden manuellt och definierar rubrikbredden för alla frågor i varje kolumn."
    },
    paneldynamic: {
      name: "Ett panel-ID som inte är synligt för svarande.",
      description: "Skriv en panelundertext.",
      visibleIf: "Använd trollstavsikonen för att ställa in en villkorsregel som bestämmer panelens synlighet.",
      enableIf: "Använd trollstavsikonen för att ställa in en villkorsregel som inaktiverar det skrivskyddade läget för panelen.",
      requiredIf: "Använd trollstavsikonen för att ställa in en villkorsregel som förhindrar att undersökningen skickas in om inte minst en kapslad fråga har ett svar.",
      templateQuestionTitleLocation: "Gäller alla frågor i den här panelen. Om du vill åsidosätta den här inställningen definierar du regler för rubrikjustering för enskilda frågor. Alternativet \"Ärv\" tillämpar inställningen på sidnivå (om den är inställd) eller på undersökningsnivå (\"Topp\" som standard).",
      templateQuestionTitleWidth: "Ställer in konsekvent bredd för frågetitlar när de är justerade till vänster om sina frågerutor. Accepterar CSS-värden (px, %, in, pt, etc.).",
      templateErrorLocation: "Anger platsen för ett felmeddelande i förhållande till en fråga med ogiltiga indata. Välj mellan: \"Överst\" - en feltext placeras högst upp i frågerutan; \"Nederst\" - en feltext placeras längst ner i frågerutan. Alternativet \"Ärv\" tillämpar inställningen på sidnivå (om den är inställd) eller på undersökningsnivå (\"Topp\" som standard).",
      errorLocation: "Anger platsen för ett felmeddelande i förhållande till alla frågor i panelen. Alternativet \"Ärv\" tillämpar inställningen på sidnivå (om den är inställd) eller på undersökningsnivå.",
      page: "Flyttar panelen till slutet av en markerad sida.",
      innerIndent: "Lägger till utrymme eller marginal mellan panelinnehållet och panelrutans vänstra kant.",
      startWithNewLine: "Avmarkera om du vill visa panelen på en rad med föregående fråga eller panel. Inställningen gäller inte om panelen är det första elementet i formuläret.",
      state: "Välj mellan: \"Expanderad\" - panelen visas i sin helhet och kan fällas ihop; \"Komprimerad\" - panelen visar endast titel och beskrivning och kan expanderas; \"Låst\" - panelen visas i sin helhet och kan inte fällas ihop.",
      width: "Ställer in panelens bredd i proportion till andra undersökningselement på samma rad. Accepterar CSS-värden (px, %, in, pt, etc.).",
      templateTitle: "Skriv in en mall för dynamiska panelrubriker. Använd {panelIndex} för panelens allmänna position och {visiblePanelIndex} för dess ordning bland de synliga panelerna. Infoga dessa platshållare i mönstret för att lägga till automatisk numrering.",
      templateTabTitle: "Skriv in en mall för flikrubriker. Använd {panelIndex} för en panels allmänna position och {visiblePanelIndex} för dess ordning bland synliga paneler. Infoga dessa platshållare i mönstret för att lägga till automatisk numrering.",
      tabTitlePlaceholder: "En reservtext för flikrubriker som gäller när flikrubrikmönstret inte ger ett meningsfullt värde.",
      templateVisibleIf: "Med den här inställningen kan du styra synligheten för enskilda paneler i den dynamiska panelen. Använd platshållaren {panel} för att referera till den aktuella panelen i uttrycket.",
      titleLocation: "Den här inställningen ärvs automatiskt av alla frågor i den här panelen. Om du vill åsidosätta den här inställningen definierar du regler för rubrikjustering för enskilda frågor. Alternativet \"Ärv\" tillämpar inställningen på sidnivå (om den är inställd) eller på undersökningsnivå (\"Topp\" som standard).",
      descriptionLocation: "Alternativet \"Ärv\" tillämpar inställningen på sidnivå (om den är inställd) eller på undersökningsnivå (\"Under panelrubriken\" som standard).",
      newPanelPosition: "Definierar placeringen av en nyligen tillagd panel. Som standard läggs nya paneler till i slutet. Välj \"Nästa\" för att infoga en ny panel efter den nuvarande.",
      copyDefaultValueFromLastEntry: "Duplicerar svar från den sista panelen och tilldelar dem till nästa tillagda dynamiska panel.",
      keyName: "Referera till ett frågenamn för att kräva att en användare anger ett unikt svar för den här frågan i varje panel."
    },
    copyDefaultValueFromLastEntry: "Duplicerar svar från den sista raden och tilldelar dem till nästa tillagda dynamiska rad.",
    defaultValueExpression: "Med den här inställningen kan du tilldela ett standardsvarsvärde baserat på ett uttryck. Uttrycket kan innehålla grundläggande beräkningar – {q1_id} + {q2_id}, booleska uttryck, till exempel {age} > 60 och funktioner: 'iif()', 'today()', 'age()', 'min()', 'max()', 'avg()' osv. Värdet som bestäms av detta uttryck fungerar som det initiala standardvärdet som kan åsidosättas av en svarandes manuella inmatning.",
    resetValueIf: "Använd trollstavsikonen för att ställa in en villkorsregel som avgör när en respondents inmatning återställs till värdet baserat på \"Standardvärdesuttryck\" eller \"Ange värdeuttryck\" eller till värdet \"Standardsvar\" (om något av dem är inställt).",
    setValueIf: "Använd trollstavsikonen för att ställa in en villkorsregel som avgör när \"Ange värdeuttryck\" ska köras och dynamiskt tilldela det resulterande värdet som ett svar.",
    setValueExpression: "Ange ett uttryck som definierar det värde som ska anges när villkoren i regeln \"Ange värde om\" uppfylls. Uttrycket kan innehålla grundläggande beräkningar – {q1_id} + {q2_id}, booleska uttryck, till exempel {age} > 60 och funktioner: 'iif()', 'today()', 'age()', 'min()', 'max()', 'avg()' osv. Värdet som bestäms av detta uttryck kan åsidosättas av en svarandes manuella inmatning.",
    gridLayoutEnabled: "Med Survey Creator kan du manuellt justera de infogade bredderna på formulärelement för att styra layouten. Om detta inte ger önskat resultat kan du aktivera rutnätslayouten, som strukturerar bildelement med hjälp av ett kolumnbaserat system. För att konfigurera layoutkolumner, välj en sida eller panel och använd tabellen \"Frågeinställningar\" → \"Rutnätskolumner\". För att justera hur många kolumner en fråga sträcker sig över, markera den och ställ in önskat värde i fältet \"Layout\" → \"Kolumnintervall\".",
    question: {
      name: "Ett fråge-ID som inte är synligt för svarande.",
      description: "Skriv en underrubrik för frågan.",
      visibleIf: "Använd trollstavsikonen för att ställa in en villkorsregel som avgör frågans synlighet.",
      enableIf: "Använd trollstavsikonen för att ställa in en villkorsregel som inaktiverar det skrivskyddade läget för frågan.",
      requiredIf: "Använd trollstavsikonen för att ställa in en villkorsregel som förhindrar att undersökningen går vidare eller skickas in om inte frågan har fått ett svar.",
      startWithNewLine: "Avmarkera om du vill visa frågan på en rad med föregående fråga eller panel. Inställningen gäller inte om frågan är det första elementet i formuläret.",
      page: "Flyttar frågan till slutet av en markerad sida.",
      state: "Välj mellan: \"Expanderad\" - frågerutan visas i sin helhet och kan fällas ihop; \"Komprimerad\" - frågerutan visar endast titel och beskrivning och kan expanderas; \"Låst\" - frågerutan visas i sin helhet och kan inte fällas ihop.",
      titleLocation: "Åsidosätter regler för justering av titlar som definierats på panel-, sid- eller undersökningsnivå. Alternativet \"Ärv\" tillämpar alla inställningar på högre nivå (om de är inställda) eller inställningar på undersökningsnivå (\"Överst\" som standard).",
      descriptionLocation: "Alternativet \"Ärv\" tillämpar inställningen på undersökningsnivå (\"Under frågans titel\" som standard).",
      errorLocation: "Anger platsen för ett felmeddelande i förhållande till frågan med ogiltig inmatning. Välj mellan: \"Överst\" - en feltext placeras högst upp i frågerutan; \"Nederst\" - en feltext placeras längst ner i frågerutan. Alternativet \"Ärv\" tillämpar inställningen på undersökningsnivå (\"Topp\" som standard).",
      indent: "Lägger till utrymme eller marginal mellan frågeinnehållet och frågerutans vänstra kant.",
      width: "Anger frågans bredd i proportion till andra undersökningselement på samma rad. Accepterar CSS-värden (px, %, in, pt, etc.).",
      surveyvalidator: {
        expression: "Använd trollstavsikonen för att ställa in ett valideringsuttryck för frågan."
      },
      textUpdateMode: "Välj mellan: \"Vid förlorat fokus\" - värdet uppdateras när inmatningsfältet tappar fokus; \"Medan du skriver\" - värdet uppdateras i realtid när användarna skriver. Alternativet \"Ärv\" tillämpar inställningen på undersökningsnivå (\"Vid förlorat fokus\" som standard).",
      url: "Du kan använda valfri webbtjänst som datakälla för flervalsfrågor. Om du vill fylla i alternativvärden anger du URL:en för den tjänst som tillhandahåller data.",
      searchMode: "En jämförelseåtgärd som används för att filtrera listrutan.",
      textWrapEnabled: "Långa texter i valalternativ genererar automatiskt radbrytningar för att passa in i rullgardinsmenyn. Avmarkera om du vill att texterna ska klippas.",
      effectiveColSpan: "Anger hur många kolumner den här frågan sträcker sig över i rutnätslayouten."
    },
    signaturepad: {
      signatureWidth: "Anger bredden på det visade signaturområdet och den resulterande bilden.",
      signatureHeight: "Anger höjden på det visade signaturområdet och den resulterande bilden.",
      signatureAutoScaleEnabled: "Välj om du vill att signaturområdet ska fylla allt tillgängligt utrymme i frågerutan samtidigt som standardproportionerna 3:2 bibehålls. När anpassade bredd- och höjdvärden anges behåller inställningen proportionerna för dessa dimensioner."
    },
    file: {
      imageHeight: "Justerar höjden på bilden i undersökningsresultaten.",
      imageWidth: "Justerar bredden på bilden i undersökningsresultaten.",
      allowImagesPreview: "Visar miniatyrbilder av uppladdade filer när det är möjligt. Avmarkera om du vill visa filikoner i stället."
    },
    image: {
      contentMode: "Alternativet \"Auto\" bestämmer automatiskt vilket läge som är lämpligt för visning - bild, video eller YouTube - baserat på den angivna källadressen."
    },
    imagepicker: {
      imageHeight: "Åsidosätter värdena för lägsta och högsta höjd.",
      imageWidth: "Åsidosätter värdena för minsta och största bredd.",
      choices: "\"Värde\" fungerar som ett objekt-ID som används i villkorsregler. \"Text\" visas för respondenterna.",
      contentMode: "Välj mellan \"Bild\" och \"Video\" för att ställa in innehållsläget för medieväljaren. Om \"Bild\" är valt, se till att alla alternativ som tillhandahålls är bildfiler i följande format: JPEG, GIF, PNG, APNG, SVG, BMP, ICO. På samma sätt, om \"Video\" är valt, se till att alla alternativ är direktlänkar till videofiler i följande format: MP4, MOV, WMV, FLV, AVI, MKV. Observera att YouTube-länkar inte stöds för videoalternativ."
    },
    text: {
      size: "Den här inställningen ändrar bara storleken på inmatningsfältet och påverkar inte frågerutans bredd. Om du vill begränsa den godkända indatalängden går du till <b>Validering → Maximal teckengräns</b>."
    },
    comment: {
      rows: "Ställer in antalet rader som visas i inmatningsfältet. Om inmatningen tar upp fler rader visas rullningslisten."
    },
    // survey templates
    survey: {
      readOnly: "Välj om du vill hindra respondenterna från att fylla i din undersökning.",
      progressBarLocation: "Ställer in platsen för förloppsindikatorn. Värdet \"Auto\" visar förloppsindikatorn ovanför eller under undersökningshuvudet."
    },
    matrixdropdowncolumn: {
      name: "Ett kolumn-ID som inte är synligt för svarande.",
      isUnique: "När den är aktiverad för en kolumn måste en svarande ange ett unikt svar för varje fråga i den här kolumnen.",
      rows: "Ställer in antalet rader som visas i inmatningsfältet. Om inmatningen tar upp fler rader visas rullningslisten.",
      visibleIf: "Använd trollstavsikonen för att ange en villkorsregel som bestämmer kolumnens synlighet.",
      enableIf: "Använd trollstavsikonen för att ange en villkorsregel som inaktiverar skrivskyddat läge för kolumnen.",
      requiredIf: "Använd trollstavsikonen för att ställa in en villkorsregel som förhindrar att undersökningen skickas in om inte minst en kapslad fråga har ett svar.",
      showInMultipleColumns: "När du väljer det här alternativet skapas en enskild kolumn för varje alternativ.",
      colCount: "Ordnar valalternativ i en layout med flera kolumner. När värdet är 0 visas alternativen på en enda rad. När värdet är -1 ärvs det faktiska värdet från egenskapen \"Kapslad kolumnantal\" i den överordnade matrisen."
    },
    caseInsensitive: "Välj om versaler och gemener i det reguljära uttrycket ska behandlas som likvärdiga.",
    widthMode: "Välj mellan: \"Statisk\" - ställer in en fast bredd; \"Responsiv\" - gör att undersökningen upptar hela skärmens bredd; \"Auto\" - gäller någon av de två beroende på vilka frågetyper som används.",
    cookieName: "Cookies hindrar användare från att fylla i samma undersökning två gånger.",
    logo: "Klistra in en bildlänk (inga storleksbegränsningar) eller klicka på mappikonen för att bläddra i en fil från din dator (upp till 64 kB).",
    logoWidth: "Anger en logotypbredd i CSS-enheter (px, %, in, pt, etc.).",
    logoHeight: "Anger en logotyphöjd i CSS-enheter (px, %, in, pt, etc.).",
    logoFit: "Välj mellan: \"Ingen\" - bilden behåller sin ursprungliga storlek; \"Innehåll\" - bildens storlek ändras så att den passar samtidigt som bildförhållandet bibehålls. \"Cover\" - bilden fyller hela rutan samtidigt som bildförhållandet bibehålls; \"Fyll\" - bilden sträcks ut för att fylla rutan utan att behålla bildförhållandet.",
    autoAdvanceEnabled: "Välj om du vill att undersökningen automatiskt ska gå vidare till nästa sida när en svarande har svarat på alla frågor på den aktuella sidan. Den här funktionen gäller inte om den sista frågan på sidan är öppen eller tillåter flera svar.",
    autoAdvanceAllowComplete: "Välj om du vill att undersökningen ska slutföras automatiskt efter att en svarande har svarat på alla frågor.",
    showNavigationButtons: "Anger synlighet och placering av navigeringsknappar på en sida.",
    navigationButtonsLocation: "Anger placeringen av navigeringsknapparna på en sida.",
    showPreviewBeforeComplete: "Aktivera förhandsgranskningssidan med alla eller endast besvarade frågor.",
    questionTitleLocation: "Gäller alla frågor i undersökningen. Den här inställningen kan åsidosättas av regler för justering av rubriker på lägre nivåer: panel, sida eller fråga. En inställning på lägre nivå åsidosätter de på en högre nivå.",
    requiredMark: "En symbol eller en sekvens av symboler som anger att ett svar krävs.",
    questionStartIndex: "Ange en siffra eller bokstav som du vill börja numrera med.",
    questionErrorLocation: "Anger platsen för ett felmeddelande i förhållande till frågan med ogiltig inmatning. Välj mellan: \"Överst\" - en feltext placeras högst upp i frågerutan; \"Nederst\" - en feltext placeras längst ner i frågerutan.",
    autoFocusFirstQuestion: "Välj om du vill att det första inmatningsfältet på varje sida ska vara klart för textinmatning.",
    questionOrder: "Behåller den ursprungliga ordningen på frågorna eller slumpar dem. Effekten av den här inställningen visas bara på fliken Förhandsgranska.",
    maxTextLength: "Endast för textinmatningsfrågor.",
    maxCommentLength: "Endast för frågekommentarer.",
    commentAreaRows: "Ställer in antalet rader som visas i textområden för frågekommentarer. Om inmatningen tar upp fler rader visas rullningslisten.",
    autoGrowComment: "Välj om du vill att frågekommentarer och långa textfrågor automatiskt ska öka i höjd baserat på den angivna textlängden.",
    allowResizeComment: "Endast för frågekommentarer och långa textfrågor.",
    calculatedValues: "Anpassade variabler fungerar som mellanliggande variabler eller hjälpvariabler som används i formulärberäkningar. De tar svarandes indata som källvärden. Varje anpassad variabel har ett unikt namn och ett uttryck som den baseras på.",
    includeIntoResult: "Välj om du vill att det beräknade värdet av uttrycket ska sparas tillsammans med undersökningsresultaten.",
    triggers: "En utlösare är en händelse eller ett villkor som baseras på ett uttryck. När uttrycket har utvärderats till \"true\" utlöser en utlösare en åtgärd. En sådan åtgärd kan valfritt ha en målfråga som den påverkar.",
    clearInvisibleValues: "Välj om du vill rensa värden för frågor som döljs av villkorsstyrd logik och när du vill göra det.",
    textUpdateMode: "Välj mellan: \"Vid förlorat fokus\" - värdet uppdateras när inmatningsfältet tappar fokus; \"Medan du skriver\" - värdet uppdateras i realtid när användarna skriver.",
    columns: "Det vänstra värdet fungerar som ett kolumn-ID som används i villkorsregler, det högra värdet visas för respondenterna.",
    rows: "Det vänstra värdet fungerar som ett rad-ID som används i villkorsregler, det högra värdet visas för respondenterna.",
    columnMinWidth: "Accepterar CSS-värden (px, %, in, pt, etc.).",
    rowTitleWidth: "Accepterar CSS-värden (px, %, in, pt, etc.).",
    totalText: "Visas bara när minst en kolumn har Total type eller Total uttryck.",
    cellErrorLocation: "Anger platsen för ett felmeddelande i förhållande till en cell med ogiltiga indata. Alternativet \"Ärv\" tillämpar inställningen från egenskapen \"Justering av felmeddelande\".",
    detailErrorLocation: "Anger platsen för felmeddelanden för frågor som är kapslade i detaljavsnitt. Alternativet \"Ärv\" tillämpar inställningen från egenskapen \"Justering av felmeddelande\".",
    keyDuplicationError: "När egenskapen \"Förhindra dubblettsvar\" är aktiverad kommer en svarande som försöker skicka in en dubblett att få följande felmeddelande.",
    totalExpression: "Gör att du kan beräkna totalvärden baserat på ett uttryck. Uttrycket kan innehålla grundläggande beräkningar ('{q1_id} + {q2_id}'), booleska uttryck ('{age} > 60') och funktioner ('iif()', 'today()', 'age()', 'min()', 'max()', 'avg()', etc.).",
    confirmDelete: "Utlöser en uppmaning där du uppmanas att bekräfta borttagningen av raden.",
    keyName: "Om den angivna kolumnen innehåller identiska värden genereras felet \"Icke-unikt nyckelvärde\".",
    description: "Skriv en undertext.",
    locale: "Välj ett språk för att börja skapa din undersökning. Om du vill lägga till en översättning byter du till ett nytt språk och översätter originaltexten här eller på fliken Översättningar.",
    detailPanelMode: "Anger platsen för ett detaljavsnitt i förhållande till en rad. Välj mellan: \"Ingen\" - ingen expansion läggs till; \"Under raden\" - en radexpansion placeras under varje rad i matrisen; \"Visa endast en radexpansion under raden\" - en expansion visas endast under en enda rad, de återstående radexpansionerna är komprimerade.",
    imageFit: "Välj mellan: \"Ingen\" - bilden behåller sin ursprungliga storlek; \"Innehåll\" - bildens storlek ändras så att den passar samtidigt som bildförhållandet bibehålls. \"Cover\" - bilden fyller hela rutan samtidigt som bildförhållandet bibehålls; \"Fyll\" - bilden sträcks ut för att fylla rutan utan att behålla bildförhållandet.",
    autoGrow: "Ökar gradvis höjden på inmatningsfältet när data matas in. Åsidosätter inställningen \"Inmatningsfältets höjd (i rader)\".",
    allowResize: "Storlekshandtaget (eller greppet) visas i hörnet och kan dras för att ändra storleken på inmatningsfältet.",
    timeLimit: "Ett tidsintervall i sekunder varefter undersökningen automatiskt går vidare till Tack-sidan.",
    timeLimitPerPage: "Ett tidsintervall i sekunder varefter undersökningen automatiskt går vidare till nästa sida.",
    validateVisitedEmptyFields: "Aktivera det här alternativet för att utlösa validering när en användare fokuserar på ett tomt inmatningsfält och sedan lämnar det utan att göra några ändringar.",
    page: {
      name: "Ett sid-ID som inte är synligt för svarande.",
      description: "Skriv en underrubrik på sidan.",
      navigationTitle: "En bildtext som visas på en navigeringsknapp i förloppsindikatorn eller innehållsförteckningen. Om du lämnar det här fältet tomt kommer navigeringsknappen att använda sidans titel eller sidnamn. För att aktivera förloppsindikatorn eller innehållsförteckningen, gå till \"Undersökning\" → \"Navigering\".",
      timeLimit: "Ett tidsintervall i sekunder varefter undersökningen automatiskt går vidare till nästa sida.",
      visibleIf: "Använd trollstavsikonen för att ställa in en villkorsregel som bestämmer sidans synlighet.",
      enableIf: "Använd trollstavsikonen för att ställa in en villkorsregel som inaktiverar det skrivskyddade läget för sidan.",
      requiredIf: "Använd trollstavsikonen för att ställa in en villkorsregel som förhindrar att undersökningen skickas in om inte minst en kapslad fråga har ett svar.",
      questionTitleLocation: "Gäller alla frågor på denna sida. Om du vill åsidosätta den här inställningen definierar du regler för titeljustering för enskilda frågor eller paneler. Alternativet \"Ärv\" tillämpar inställningen på undersökningsnivå (\"Topp\" som standard).",
      questionTitleWidth: "Anger konsekvent bredd för frågerubriker när de är justerade till vänster om frågerutorna. Accepterar CSS-värden (px, %, in, pt, etc.).",
      questionErrorLocation: "Anger platsen för ett felmeddelande i förhållande till frågan med ogiltig inmatning. Välj mellan: \"Överst\" - en feltext placeras högst upp i frågerutan; \"Nederst\" - en feltext placeras längst ner i frågerutan. Alternativet \"Ärv\" tillämpar inställningen på undersökningsnivå (\"Topp\" som standard).",
      questionOrder: "Behåller den ursprungliga ordningen på frågorna eller slumpar dem. Alternativet \"Ärv\" tillämpar inställningen på undersökningsnivå (\"Original\" som standard). Effekten av den här inställningen visas bara på fliken Förhandsgranska.",
      showNavigationButtons: "Ställer in synligheten för navigeringsknapparna på sidan. Alternativet \"Ärv\" tillämpar inställningen på undersökningsnivå, som standard är \"Synlig\".",
      gridLayoutColumns: "I den här tabellen kan du konfigurera varje rutnätskolumn på sidan. Den ställer automatiskt in breddprocenten för varje kolumn baserat på det maximala antalet element i en rad. Om du vill anpassa rutnätslayouten justerar du dessa värden manuellt och definierar rubrikbredden för alla frågor i varje kolumn."
    },
    timerLocation: "Ställer in platsen för en timer på en sida.",
    panelsState: "Välj mellan: \"Låst\" - användare kan inte expandera eller komprimera paneler; \"Komprimera alla\" - alla paneler börjar i ett komprimerat tillstånd; \"Expandera alla\" - alla paneler börjar i ett expanderat tillstånd; \"Först expanderad\" - endast den första panelen expanderas initialt.",
    imageLinkName: "Ange ett delat egenskapsnamn i matrisen med objekt som innehåller de bild- eller videofils-URL:er som du vill visa i alternativlistan.",
    choices: "Det vänstra värdet fungerar som ett objekt-ID som används i villkorsregler, det högra värdet visas för respondenterna.",
    title: "Skriv en användarvänlig titel som ska visas.",
    waitForUpload: "Säkerställer att användarna inte slutför undersökningen förrän filerna har laddats upp.",
    minWidth: "Accepterar CSS-värden (px, %, in, pt, etc.).",
    maxWidth: "Accepterar CSS-värden (px, %, in, pt, etc.).",
    width: "Accepterar CSS-värden (px, %, in, pt, etc.).",
    valueName: "Om du inte anger den här egenskapen lagras svaret i ett fält som anges av egenskapen Name.",
    defaultDisplayValue: "Ett värde som visas i HTML-frågor och i dynamiska titlar och beskrivningar av undersökningselement när frågevärdet är tomt.",
    useDisplayValuesInDynamicTexts: "I frågetyperna med ett eller flera val har varje alternativ ett ID och ett visningsvärde. När du väljer det här alternativet visar den här inställningen ett visningsvärde i stället för ett ID-värde i HTML-frågor och dynamiska rubriker och beskrivningar av undersökningselement.",
    clearIfInvisible: "Välj om du vill rensa frågevärden som döljs av villkorslogik och när du vill göra det. Alternativet \"Ärv\" tillämpar inställningen på undersökningsnivå (\"När undersökningen är klar\" som standard).",
    choicesFromQuestionMode: "Välj mellan: \"Alla\" - kopierar alla valalternativ från den valda frågan; \"Markerad\" - kopierar dynamiskt endast valda alternativ; \"Omarkerad\" - kopierar endast omarkerade alternativ dynamiskt. Alternativen \"Ingen\" och \"Annat\" kopieras som standard om de är aktiverade i källfrågan.",
    choiceValuesFromQuestion: "I frågetyper med ett eller flera val har varje alternativ ett ID och ett visningsvärde. Den här inställningen anger vilken matriskolumn eller panelfråga som ska ange ID:n.",
    choiceTextsFromQuestion: "I frågetyper med ett eller flera val har varje alternativ ett ID och ett visningsvärde. Den här inställningen anger vilken matris-, kolumn- eller panelfråga som ska tillhandahålla visningstexterna.",
    allowCustomChoices: "Välj om du vill att de svarande ska kunna lägga till sina egna alternativ om det önskade alternativet inte är tillgängligt i rullgardinsmenyn. Anpassade val kommer endast att lagras tillfälligt under den aktuella webbläsarsessionen.",
    showOtherItem: "När du väljer det här alternativet kan användarna inkludera ytterligare indata i en separat kommentarsruta.",
    separateSpecialChoices: "Visar varje specialalternativ (\"Ingen\", \"Annan\", \"Markera alla\") på en ny rad, även när du använder en layout med flera kolumner.",
    path: "Ange den plats i tjänstdatauppsättningen där målmatrisen med objekt finns. Lämna tomt om URL:en redan pekar på matrisen.",
    choicesbyurl: {
      valueName: " "
    },
    titleName: "Ange ett enhetligt egenskapsnamn i den objektmatris som innehåller de värden som du vill visa i urvalslistan.",
    allowEmptyResponse: "Välj det här alternativet om du vill tillåta att tjänsten returnerar ett tomt svar eller en tom matris.",
    choicesVisibleIf: "Använd trollstavsikonen för att ställa in en villkorsregel som bestämmer synligheten för alla alternativ.",
    rateValues: "Det vänstra värdet fungerar som ett objekt-ID som används i villkorsregler, det högra värdet visas för respondenterna.",
    rating: {
      displayMode: "\"Auto\" väljer mellan lägena \"Knappar\" och \"Rullgardinsmeny\" baserat på den tillgängliga bredden. När bredden inte räcker till för att visa knappar visas en listruta i frågan."
    },
    valuePropertyName: "Gör att du kan koppla ihop frågor som ger resultat i olika format. När sådana frågor länkas samman med hjälp av en kopplingsidentifierare lagrar den här delade egenskapen valda frågevärden.",
    searchEnabled: "Välj det här alternativet om du vill uppdatera innehållet i den nedrullningsbara menyn så att det matchar den sökfråga som användaren skriver i inmatningsfältet.",
    valueTrue: "Ett värde att spara i undersökningsresultaten när respondenterna ger ett positivt svar.",
    valueFalse: "Ett värde att spara i undersökningsresultaten när respondenterna ger ett negativt svar.",
    showPreview: "Vi rekommenderar inte att du inaktiverar det här alternativet eftersom det åsidosätter förhandsgranskningsbilden och gör det svårt för en användare att förstå om filerna har laddats upp.",
    needConfirmRemoveFile: "Utlöser en uppmaning om att bekräfta borttagningen av filen.",
    selectToRankEnabled: "Aktivera för att endast rangordna valda alternativ. Användarna drar de valda objekten från urvalslistan för att ordna dem i rangordningsområdet.",
    dataList: "Ange en lista med alternativ som kommer att föreslås för respondenten under inmatningen.",
    inputSize: "Inställningen ändrar bara storleken på inmatningsfälten och påverkar inte frågerutans bredd.",
    itemTitleWidth: "Ställer in konsekvent bredd för alla objektetiketter. Accepterar CSS-värden (px, %, in, pt, etc.).",
    inputTextAlignment: "Välj hur du vill justera indatavärdet i fältet. Standardinställningen \"Auto\" justerar indatavärdet till höger om valutamaskering eller numerisk maskering används och till vänster om inte.",
    altText: "Fungerar som ersättning när bilden inte kan visas på en användares enhet och i tillgänglighetssyfte.",
    rateColorMode: "Definierar färgen på den valda emojin när typen av betygsikon är inställd på \"Smileys\". Välj mellan: \"Standard\" - den valda emojin visas i standardundersökningsfärgen; \"Skala\" - den valda emojin ärver färg från betygsskalan.",
    expression: {
      name: "Ett uttrycks-ID som inte är synligt för svarande.",
      description: "Skriv en underrubrik för uttrycket.",
      expression: "Ett uttryck kan innehålla grundläggande beräkningar ('{q1_id} + {q2_id}'), villkor ('{age} > 60') och funktioner ('iif()', 'today()', 'age()', 'min()', 'max()', 'avg()', etc.)."
    },
    storeOthersAsComment: "Välj det här alternativet om du vill lagra alternativvärdet \"Annat\" som en separat egenskap i undersökningsresultaten.",
    format: "Använd {0} som platshållare för det faktiska värdet.",
    acceptedTypes: "Mer information finns i attributbeskrivningen [accept](https://www.w3schools.com/tags/att_input_accept.asp).",
    columnColCount: "Gäller endast för Radiogroup- och Checkbox-celltyper.",
    autocomplete: "Mer information finns i attributbeskrivningen [autocomplete](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete).",
    filePlaceholder: "Gäller när \"Källtyp\" är \"Lokala filer\" eller när kameran inte är tillgänglig",
    photoPlaceholder: "Gäller när \"Källtyp\" är \"Kamera\".",
    fileOrPhotoPlaceholder: "Gäller när \"Källtyp\" är \"Lokala filer eller kamera\".",
    colCount: "Ordnar valalternativ i en layout med flera kolumner. När värdet är 0 visas alternativen på en enda rad.",
    masksettings: {
      saveMaskedValue: "Välj om du vill lagra frågevärdet med en tillämpad mask i undersökningsresultaten."
    },
    patternmask: {
      pattern: "Mönstret kan innehålla strängliteraler och följande platshållare: \"9\" – för en siffra; \"a\" - för en stor eller liten bokstav; \"#\" – för en siffra eller en stor eller liten bokstav. Använd omvänt snedstreck \"\\\" för att undvika ett tecken."
    },
    datetimemask: {
      pattern: "Mönstret kan innehålla avgränsningstecken och följande platshållare:<br>'m' – Månadsnummer.<br>\"mm\" – Månadsnummer, med inledande nolla för ensiffriga värden. <br>\"d\" – Dag i månaden. <br>\"dd\" – Dag i månaden, med inledande noll för ensiffriga värden. <br>\"yy\" – De två sista siffrorna i årtalet. <br>\"yyyy\" – Fyrsiffrigt årtal. <br>\"H\" – Timmar i 24-timmarsformat. <br>\"HH\" – Timmar i 24-timmarsformat, med inledande nolla för ensiffriga värden. <br>\"h\" – Timmar i 12-timmarsformat. <br>\"hh\" – Timmar i 12-timmarsformat, med inledande nolla för ensiffriga värden. <br>\"MM\" - Minuter. <br>\"ss\" – sekunder. <br>\"TT\" - 12-timmars klockperiod med versaler (AM/PM). <br>\"tt\" - 12-timmars klockperiod med gemener (am/pm)."
    },
    numericmask: {
      decimalSeparator: "En symbol som används för att skilja bråkdelen från heltalsdelen av ett visat tal.",
      thousandsSeparator: "En symbol som används för att dela upp siffrorna i ett stort tal i grupper om tre.",
      precision: "Begränsar hur många siffror som ska behållas efter decimaltecknet för ett tal som visas."
    },
    currencymask: {
      prefix: "En eller flera symboler som ska visas före värdet.",
      suffix: "En eller flera symboler som ska visas efter värdet."
    },
    theme: {
      isPanelless: "Den här inställningen gäller endast för frågor utanför en panel.",
      primaryColor: "Ställer in en extra färg som framhäver viktiga undersökningselement.",
      panelBackgroundTransparency: "Justerar transparensen för paneler och frågerutor i förhållande till undersökningens bakgrund.",
      questionBackgroundTransparency: "Justerar transparensen för indataelement i förhållande till undersökningens bakgrund.",
      cornerRadius: "Anger hörnradien för alla rektangulära element. Aktivera Avancerat läge om du vill ställa in individuella hörnradievärden för inmatningselement eller paneler och frågerutor.",
      "--sjs-general-backcolor-dim": "Ställer in undersökningens huvudsakliga bakgrundsfärg."
    },
    header: {
      inheritWidthFrom: "Alternativet \"Samma som behållare\" justerar automatiskt bredden på rubrikens innehållsområde så att det passar in i HTML-elementet som undersökningen placeras i.",
      textAreaWidth: "Bredden på rubrikområdet som innehåller undersökningens titel och beskrivning, mätt i pixlar.",
      overlapEnabled: "När det här alternativet är aktiverat täcker den övre delen av undersökningen den nedre delen av sidhuvudet.",
      mobileHeight: "När värdet är 0 beräknas höjden automatiskt för att passa rubrikens innehåll."
    },
    progressBarInheritWidthFrom: "Alternativet \"Samma som behållare\" justerar automatiskt förloppsindikatorns bredd så att den passar in i HTML-elementet som undersökningen är placerad i."
  },
  // Properties
  p: {
    title: {
      name: "title",
      title: "Lämna den tom, ifall det är samma som 'Name'"
    },
    multiSelect: "Tillåt flera val",
    showLabel: "Visa bildtexter",
    swapOrder: "Byt ordning på Ja och Nej",
    value: "Värde",
    tabAlign: "Justering av tabb",
    sourceType: "Typ av källa",
    fitToContainer: "Passa till behållare",
    setValueExpression: "Ange värde-uttryck",
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
    defaultValueExpression: "Uttryck för standardvärde",
    requiredIf: "Obligatoriskt om",
    resetValueIf: "Återställ värde om",
    setValueIf: "Ange värde om",
    validators: "validators",
    bindings: "Bindningar",
    renderAs: "Återge som",
    attachOriginalItems: "Bifoga originalföremål",
    choices: "choices",
    choicesByUrl: "choicesByUrl",
    currency: "currency",
    cellHint: "Cell tips",
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
    inputSize: "inputSize",
    itemTitleWidth: "Bredd på objektetikett (i px)",
    inputTextAlignment: "Justering av indatavärde",
    elements: "Element",
    content: "Innehåll",
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
    mobileHeight: "Höjd på smartphones",
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
    selectToRankEmptyRankedAreaText: "Text som ska visas om alla alternativ är markerade",
    selectToRankEmptyUnrankedAreaText: "Platshållartext för rangordningsområdet",
    allowCameraAccess: "Tillåt kameraåtkomst",
    scaleColorMode: "Färgläge för skala",
    rateColorMode: "Betygsätt färgläge",
    copyDisplayValue: "Kopiera visningsvärde",
    effectiveColSpan: "Kolumn spännvidd",
    progressBarInheritWidthFrom: "Bredd på förloppsindikatorns area"
  },
  theme: {
    advancedMode: "Avancerat läge",
    pageTitle: "Teckensnitt för sidtitel",
    questionTitle: "Teckensnitt för frågerubrik",
    editorPanel: "Inmatningselement",
    lines: "Linjer",
    primaryDefaultColor: "Standard",
    primaryDarkColor: "Sväva",
    primaryLightColor: "Vald",
    backgroundDimColor: "Bakgrundsfärg",
    cornerRadius: "Hörn radie",
    backcolor: "Standardbakgrund",
    hovercolor: "Håll muspekaren bakgrund",
    borderDecoration: "Border dekoration",
    fontColor: "Teckenfärg",
    backgroundColor: "Bakgrundsfärg",
    primaryForecolor: "Standardfärg",
    primaryForecolorLight: "Inaktiverad färg",
    font: "Teckensnitt",
    borderDefault: "Mörkare",
    borderLight: "Tändare",
    fontFamily: "Teckensnitt familj",
    fontWeightRegular: "Ordinarie",
    fontWeightHeavy: "Tung",
    fontWeightSemiBold: "Halvfet stil",
    fontWeightBold: "Djärv",
    color: "Färg",
    placeholderColor: "Platshållarens färg",
    size: "Storlek",
    opacity: "Ogenomskinlighet",
    boxShadowX: "X",
    boxShadowY: "Y",
    boxShadowAddRule: "Lägg till skuggeffekt",
    boxShadowBlur: "Oskärpa",
    boxShadowSpread: "Sprida",
    boxShadowDrop: "Droppe",
    boxShadowInner: "Inre",
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
      teal: "Turkos",
      blue: "Blå",
      purple: "Lila",
      orchid: "Orkidé",
      tulip: "Tulpan",
      brown: "Brun",
      green: "Grön",
      gray: "Grå"
    }
  },
  creatortheme: {
    "--sjs-special-background": "Bakgrund på ytan",
    "--sjs-primary-background-500": "Primär",
    "--sjs-secondary-background-500": "Sekundär",
    surfaceScale: "Yta",
    userInterfaceBaseUnit: "Användargränssnitt",
    fontScale: "Teckensnitt",
    names: {
      sc2020: "Enkät skapare 2020",
      "default-light": "Ljus",
      "default-dark": "Mörk",
      "default-contrast": "Kontrast"
    }
  }
};

setupLocale({ localeCode: "sv", strings: svStrings });

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
// pe.eachRowRequired: "Require answer for all rows" => "Kräv svar för alla rader"
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
// page.timeLimit: "Time limit to finish the page (in seconds)" => "Tidsgräns för att avsluta sidan (i sekunder)"
// question.page: "Parent page" => "Överordnad sida"
// pe.noEntriesText: "Empty entries text" => "Tomma poster text"
// pe.html: "HTML markup" => "HTML-kod"
// pe.expression: "Expression" => "Uttryck"
// pe.setValue: "Answer" => "Svar"
// pe.dataFormat: "Image format" => "Bildformat"
// pe.allowAddRows: "Allow adding rows" => "Tillåt att rader läggs till"
// pe.allowRemoveRows: "Allow removing rows" => "Tillåt borttagning av rader"
// pe.allowRowReorder: "Allow row drag and drop" => "Tillåt dra och släpp rader"
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
// pe.maxCommentLength: "Maximum comment length (in characters)" => "Maximal kommentarslängd (i tecken)"
// pe.autoGrowComment: "Auto-expand comment area if necessary" => "Expandera kommentarsområdet automatiskt om det behövs"
// pe.allowResizeComment: "Allow users to resize text areas" => "Tillåt användare att ändra storlek på textområden"
// pe.textUpdateMode: "Update text question value" => "Uppdatera textfrågevärde"
// pe.autoFocusFirstError: "Set focus on the first invalid answer" => "Ställ in fokus på det första ogiltiga svaret"
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
// pe.prevPanelText: "Previous Panel button tooltip" => "Knappbeskrivning för föregående panel"
// pe.nextPanelText: "Next Panel button tooltip" => "Knappbeskrivning för knappen Nästa panel"
// pe.showRangeInProgress: "Show progress bar" => "Visa förloppsindikator"
// pe.templateQuestionTitleLocation: "Question title location" => "Plats för frågerubrik"
// pe.removePanelButtonLocation: "Remove Panel button location" => "Ta bort panelknappens placering"
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
// pe.showNumber: "Show panel number" => "Visa panelnummer"
// pe.logoWidth: "Logo width (in CSS-accepted values)" => "Logotypbredd (i CSS-godkända värden)"
// pe.logoHeight: "Logo height (in CSS-accepted values)" => "Logotypens höjd (i CSS-godkända värden)"
// pe.readOnly: "Read-only" => "Skrivskyddad"
// pe.enableIf: "Editable if" => "Redigerbar om"
// pe.noRowsText: "\"No rows\" message" => "Meddelandet \"Inga rader\""
// pe.size: "Input field size (in characters)" => "Inmatningsfältets storlek (i tecken)"
// pe.separateSpecialChoices: "Separate special choices (None, Other, Select All)" => "Avgränsa specialval (Ingen, Annat, Markera alla)"
// pe.choicesFromQuestion: "Copy choices from the following question" => "Kopiera alternativ från följande fråga"
// pe.choicesFromQuestionMode: "Which choices to copy?" => "Vilka val ska du kopiera?"
// pe.showCommentArea: "Show the comment area" => "Visa kommentarsområdet"
// pe.commentPlaceholder: "Comment area placeholder" => "Platshållare för kommentarsområde"
// pe.displayRateDescriptionsAsExtremeItems: "Display rate descriptions as extreme values" => "Visa hastighetsbeskrivningar som extremvärden"
// pe.rowOrder: "Row order" => "Radordning"
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
// addRowButtonLocation.default: "Depends on matrix layout" => "Beror på matrislayout"
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
// theme.groupAdvanced: "Advanced" => "Avancerad"
// theme.themeName: "Theme" => "Tema"
// theme.isPanellessss: "Question appearance" => "Fråga utseende"
// theme.isPanellessPanels: "Default" => "Standard"
// theme.isPanellessLightweight: "Without Panels" => "Utan paneler"
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
// theme.surveyTitleFont: "Survey title font" => "Teckensnitt för undersökningstitel"
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
// names.sharp: "Sharp" => "Skarp"
// names.borderless: "Borderless" => "Marginalfri"
// names.flat: "Flat" => "Flat"
// names.doubleborder: "Double Border" => "Dubbel kantlinje"
// names.layered: "Layered" => "Lager"
// names.solid: "Solid" => "Solid"
// names.threedimensional: "3D" => ".3D"
// ed.translationDeleteLanguage: "Are you certain you wish to delete all strings for this language?" => "Är du säker på att du vill ta bort alla strängar för det här språket?"
// ed.themeResetButton: "Reset theme settings to default" => "Återställ temainställningarna till standard"
// theme.placeholderColor: "Placeholder color" => "Färg på platshållare"
// ed.themeSettings: "Theme Settings" => "Tema Inställningar"
// ed.themeSettingsTooltip: "Open theme settings" => "Öppna temainställningar"
// pe.resetToDefaultCaption: "Reset" => "Nollställa"
// pv.file: "Local files" => "Lokala filer"
// pv.camera: "Camera" => "Kamera"
// pv.file-camera: "Local files or camera" => "Lokala filer eller kamera"
// ed.translateUsigAI: "Auto-translate All" => "Översätt alla automatiskt"
// ed.translationDialogTitle: "Untranslated strings" => "Oöversatta strängar"
// pe.fastEntryChoicesMinCountError: "Please enter at least {0} items" => "Ange minst {0} artiklar"
// lg.question_resetValueName: "Reset question value" => "Återställ frågevärde"
// lg.column_resetValue: "Reset column value" => "Återställ kolumnvärde"
// pe.markRequired: "Mark as required" => "Markera efter behov"
// pe.removeRequiredMark: "Remove the required mark" => "Ta bort det obligatoriska märket"
// p.resetValueIf: "Reset value if" => "Återställ värde om"
// lg.question_setValueName: "Set question value" => "Ange frågevärde"
// lg.column_resetValueName: "Reset column value" => "Återställ kolumnvärde"
// lg.column_setValueName: "Set column value" => "Ange kolumnvärde"
// lg.setValueExpressionPlaceholder: " An expression whose result will be assigned to the target question." => " Ett uttryck vars resultat kommer att tilldelas målfrågan."
// survey.title: "Title" => "Titel"
// page.title: "Title" => "Titel"
// p.setValueIf: "Set value if" => "Ange värde om"
// theme.header: "Header" => "Rubrik"
// theme.backgroundImageFitFill: "Stretch" => "Tänja"
// theme.backgroundImageFitTile: "Tile" => "Kakel"
// theme.headerView: "View" => "Utsikt"
// theme.headerViewBasic: "Basic" => "Grundläggande"
// theme.headerViewAdvanced: "Advanced" => "Avancerad"
// theme.headerInheritWidthFrom: "Content area width" => "Innehållets bredd"
// theme.headerInheritWidthFromSurvey: "Same as survey" => "Samma som undersökning"
// theme.headerInheritWidthFromPage: "Fit to page" => "Anpassa till sida"
// theme.headerTextAreaWidth: "Text width" => "Textens bredd"
// theme.headerBackgroundColorSwitch: "Background color" => "Bakgrundsfärg"
// theme.headerBackgroundColorNone: "None" => "Ingen"
// theme.headerBackgroundColorAccentColor: "Accent color" => "Accentfärg"
// theme.headerBackgroundColorCustom: "Custom" => "Sed"
// theme.horizontalAlignmentLeft: "Left" => "Vänster"
// theme.horizontalAlignmentCenter: "Center" => "Centrum"
// theme.horizontalAlignmentRight: "Right" => "Höger"
// theme.verticalAlignmentTop: "Top" => "Topp"
// theme.verticalAlignmentMiddle: "Middle" => "Mitt"
// theme.verticalAlignmentBottom: "Bottom" => "Botten"
// theme.logoPosition: "Logo Position" => "Logotypens placering"
// lg.question_resetValueText: "reset value for question: {0}" => "Återställ värde för fråga: {0}"
// lg.question_setValueText: "assign value: {1} to question: {0}" => "Tilldela värde: {1} till fråga: {0}"
// lg.column_resetValueText: "reset cell value for column: {0}" => "Återställ cellvärde för kolumn: {0}"
// lg.column_setValueText: "assign cell value: {1} to column: {0}" => "Tilldela cellvärde: {1} till kolumn: {0}"
// ed.surveyJsonExportButton: "Export" => "Export"
// ed.surveyJsonImportButton: "Import" => "Import"
// ed.surveyJsonCopyButton: "Copy to clipboard" => "Kopiera till Urklipp"
// pe.filePlaceholder: "File placeholder text" => "Text för filplatshållare"
// pe.photoPlaceholder: "Photo placeholder text" => "Text för platshållare för foton"
// pe.fileOrPhotoPlaceholder: "File or photo placeholder text" => "Platshållartext för fil eller foto"
// pehelp.filePlaceholder: "Applies when \"Source type\" is \"Local files\" or when camera is unavailable" => "Gäller när \"Källtyp\" är \"Lokala filer\" eller när kameran inte är tillgänglig"
// pehelp.photoPlaceholder: "Applies when \"Source type\" is \"Camera\"." => "Gäller när \"Källtyp\" är \"Kamera\"."
// pehelp.fileOrPhotoPlaceholder: "Applies when \"Source type\" is \"Local files or camera\"." => "Gäller när \"Källtyp\" är \"Lokala filer eller kamera\"."
// theme.background: "Background" => "Bakgrund"
// theme.appearance: "Appearance" => "Utseende"
// ed.themeResetConfirmation: "Do you really want to reset the theme? All your customizations will be lost." => "Vill du verkligen återställa temat? Alla dina anpassningar kommer att gå förlorade."
// ed.themeResetConfirmationOk: "Yes, reset the theme" => "Ja, återställ temat"
// theme.headerInheritWidthFromContainer: "Fit to container" => "Passa till behållare"
// signaturepad.showPlaceholder: "Show the placeholder" => "Visa platshållaren"
// signaturepad.placeholder: "Placeholder text" => "Platshållartext"
// theme.surveyDescriptionFont: "Survey description font" => "Teckensnitt för undersökningsbeskrivning"
// ed.prevFocus: "Focus previous" => "Fokus föregående"
// ed.nextFocus: "Focus next" => "Fokus nästa"
// ed.saveTheme: "Save Theme" => "Spara tema"
// ed.saveThemeTooltip: "Save Theme" => "Spara tema"
// lg.page_requireName: "Make page required" => "Gör sidan obligatorisk"
// lg.panel_requireName: "Make page required" => "Gör sidan obligatorisk"
// signaturepad.signatureWidth: "Signature area width" => "Signaturområdets bredd"
// signaturepad.signatureHeight: "Signature area height" => "Signaturområdets höjd"
// signaturepad.signatureAutoScaleEnabled: "Auto-scale the signature area" => "Skala signaturområdet automatiskt"
// signaturepad.penMinWidth: "Minimum pen width" => "Minsta pennbredd"
// signaturepad.penMaxWidth: "Maximum pen width" => "Maximal pennbredd"
// theme.headerTitlePosition: "Title position" => "Titel position"
// theme.headerDescriptionPosition: "Description position" => "Beskrivning position"
// ed.propertyGridNoResultsFound: "No results found" => "Inga resultat hittades"
// pv.leftRight: "Left and right" => "Vänster och höger"
// p.sourceType: "Source type" => "Typ av källa"
// p.fitToContainer: "Fit to container" => "Passa till behållare"
// p.setValueExpression: "Set value expression" => "Ange värde-uttryck"
// ed.choicesLoadedFromWebText: "Choices are loaded from a web service." => "Alternativen läses in från en webbtjänst."
// ed.choicesLoadedFromWebLinkText: "Go to settings" => "Gå till inställningar"
// ed.choicesLoadedFromWebPreviewTitle: "Preview of loaded choice options" => "Förhandsgranskning av inlästa alternativalternativ"
// pe.eachRowUnique: "Prevent duplicate responses in rows" => "Förhindra dubbletter av svar i rader"
// theme.advancedMode: "Advanced mode" => "Avancerat läge"
// theme.backgroundCornerRadius: "Background and corner radius" => "Bakgrund och hörnradie"
// theme.colorsTitle: "Colors" => "Färger"
// theme.font: "Font" => "Teckensnitt"
// theme.lines: "Lines" => "Linjer"
// theme.titleFont: "Title font" => "Titel typsnitt"
// theme.descriptionFont: "Description font" => "Beskrivning teckensnitt"
// theme.shadow: "Shadow effects" => "Skugga effekter"
// ed.translateUsigAIFrom: "Translate from: " => "Översätt från: "
// pe.showRefuseItem: "Allow the Refuse to Answer option" => "Tillåt alternativet Vägra svara"
// pe.showDontKnowItem: "Allow the Don't Know option" => "Tillåt alternativet Vet ej"
// pe.showRefuseItem: "Allow the Refuse to Answer option" => "Tillåt alternativet Vägra svara"
// pe.showDontKnowItem: "Allow the Don't Know option" => "Tillåt alternativet Vet ej"
// pv.contain: "Contain" => "Innehålla"
// pv.cover: "Cover" => "Täcka"
// pv.fill: "Fill" => "Fylla"

// pe.transposeData: "Transpose rows to columns" => "Transponera rader till kolumner"
// layout.panel: "Layout" => "Layout"
// layout.question: "Layout" => "Layout"
// layout.base: "Layout" => "Layout"
// panel.name: "Panel name" => "Panelens namn"
// panel.title: "Panel title" => "Panelens titel"
// panel.description: "Panel description" => "Beskrivning av panelen"
// panel.visibleIf: "Make the panel visible if" => "Gör panelen synlig om"
// panel.requiredIf: "Make the panel required if" => "Gör panelen obligatorisk om"
// panel.questionOrder: "Question order within the panel" => "Frågeordning i panelen"
// panel.startWithNewLine: "Display the panel on a new line" => "Visa panelen på en ny rad"
// panel.state: "Panel collapse state" => "Panelens komprimerade tillstånd"
// panel.width: "Inline panel width" => "Bredd på infogad panel"
// panel.minWidth: "Minimum panel width" => "Minsta panelbredd"
// panel.maxWidth: "Maximum panel width" => "Maximal panelbredd"
// paneldynamic.name: "Panel name" => "Panelens namn"
// paneldynamic.title: "Panel title" => "Panelens titel"
// paneldynamic.description: "Panel description" => "Beskrivning av panelen"
// paneldynamic.visibleIf: "Make the panel visible if" => "Gör panelen synlig om"
// paneldynamic.requiredIf: "Make the panel required if" => "Gör panelen obligatorisk om"
// paneldynamic.page: "Move the panel to page" => "Flytta panelen till sidan"
// paneldynamic.startWithNewLine: "Display the panel on a new line" => "Visa panelen på en ny rad"
// paneldynamic.state: "Panel collapse state" => "Panelens komprimerade tillstånd"
// paneldynamic.width: "Inline panel width" => "Bredd på infogad panel"
// paneldynamic.minWidth: "Minimum panel width" => "Minsta panelbredd"
// paneldynamic.maxWidth: "Maximum panel width" => "Maximal panelbredd"
// paneldynamic.templateDescription: "Panel description pattern" => "Mönster för panelbeskrivning"
// paneldynamic.templateTitle: "Panel title pattern" => "Mönster för panelrubrik"
// paneldynamic.noEntriesText: "Empty panel text" => "Tom paneltext"
// paneldynamic.templateTabTitle: "Tab title pattern" => "Mönster för flikrubrik"
// paneldynamic.templateVisibleIf: "Make an individual panel visible if" => "Gör en enskild panel synlig om"
// paneldynamic.hideNumber: "Hide the panel number" => "Dölj panelnumret"
// paneldynamic.titleLocation: "Panel title alignment" => "Justering av panelrubrik"
// paneldynamic.descriptionLocation: "Panel description alignment" => "Justering av panelbeskrivning"
// paneldynamic.templateQuestionTitleLocation: "Question title alignment" => "Justering av frågerubrik"
// paneldynamic.templateErrorLocation: "Error message alignment" => "Justering av felmeddelande"
// paneldynamic.newPanelPosition: "New panel location" => "Ny panelplats"
// paneldynamic.keyName: "Prevent duplicate responses in the following question" => "Förhindra dubbletter av svar i följande fråga"
// question.name: "Question name" => "Frågans namn"
// question.title: "Question title" => "Frågans rubrik"
// question.description: "Question description" => "Beskrivning av frågan"
// question.visibleIf: "Make the question visible if" => "Gör frågan synlig om"
// question.requiredIf: "Make the question required if" => "Gör frågan obligatorisk om"
// question.state: "Question box collapse state" => "Komprimeringstillstånd för frågeruta"
// question.hideNumber: "Hide the question number" => "Dölj frågans nummer"
// question.titleLocation: "Question title alignment" => "Justering av frågerubrik"
// question.descriptionLocation: "Question description alignment" => "Justering av frågebeskrivning"
// question.errorLocation: "Error message alignment" => "Justering av felmeddelande"
// question.indent: "Increase the inner indent" => "Öka det inre indraget"
// question.width: "Inline question width" => "Bredd på infogade frågor"
// question.minWidth: "Minimum question width" => "Minsta frågebredd"
// question.maxWidth: "Maximum question width" => "Maximal frågebredd"
// question.textUpdateMode: "Update input field value" => "Uppdatera indatafältsvärde"
// signaturepad.allowClear: "Show the Clear button within signature area" => "Visa knappen Rensa i signaturområdet"
// signaturepad.penColor: "Stroke color" => "Linjefärg"
// comment.rows: "Input field height (in lines)" => "Inmatningsfältets höjd (i rader)"
// expression.name: "Expression name" => "Namn på uttryck"
// expression.title: "Expression title" => "Uttryckets titel"
// expression.description: "Expression description" => "Beskrivning av uttryck"
// expression.expression: "Expression" => "Uttryck"
// trigger.expression: "Expression" => "Uttryck"
// calculatedvalue.expression: "Expression" => "Uttryck"
// survey.description: "Survey description" => "Beskrivning av undersökningen"
// page.name: "Page name" => "Sidans namn"
// page.description: "Page description" => "Beskrivning av sidan"
// page.visibleIf: "Make the page visible if" => "Gör sidan synlig om"
// page.requiredIf: "Make the page required if" => "Gör sidan obligatorisk om"
// page.questionOrder: "Question order on the page" => "Frågeordning på sidan"
// matrixdropdowncolumn.name: "Column name" => "Kolumnens namn"
// matrixdropdowncolumn.title: "Column title" => "Kolumnens rubrik"
// matrixdropdowncolumn.isUnique: "Prevent duplicate responses" => "Förhindra dubbletter av svar"
// matrixdropdowncolumn.width: "Column width" => "Kolumnbredd"
// matrixdropdowncolumn.minWidth: "Minimum column width" => "Minsta kolumnbredd"
// matrixdropdowncolumn.rows: "Input field height (in lines)" => "Inmatningsfältets höjd (i rader)"
// matrixdropdowncolumn.visibleIf: "Make the column visible if" => "Gör kolumnen synlig om"
// matrixdropdowncolumn.requiredIf: "Make the column required if" => "Gör kolumnen obligatorisk om"
// matrixdropdowncolumn.showInMultipleColumns: "Each option in a separate column" => "Varje alternativ i en separat kolumn"
// multipletextitem.name: "Name" => "Namn"
// multipletextitem.title: "Title" => "Titel"
// pe.rateDescriptionLocation: "Label alignment" => "Justering av etiketter"
// pe.cellErrorLocation: "Cell error message alignment" => "Justering av cellfelmeddelande"
// pe.listIsEmpty@columns: "You don't have any columns yet" => "Du har inga kolumner ännu"
// pe.listIsEmpty@rows: "You don't have any rows yet" => "Du har inga rader ännu"
// pe.listIsEmpty@validators: "You don't have any validation rules yet" => "Du har inga valideringsregler ännu"
// pe.listIsEmpty@calculatedValues: "You don't have any custom variables yet" => "Du har inga anpassade variabler ännu"
// pe.listIsEmpty@triggers: "You don't have any triggers yet" => "Du har inga utlösare ännu"
// pe.listIsEmpty@navigateToUrlOnCondition: "You don't have any links yet" => "Du har inga länkar ännu"
// pe.addNew@columns: "Add new column" => "Lägg till ny kolumn"
// pe.addNew@rows: "Add new row" => "Lägg till ny rad"
// pe.addNew@validators: "Add new rule" => "Lägg till ny regel"
// pe.addNew@calculatedValues: "Add new variable" => "Lägg till ny variabel"
// pe.addNew@triggers: "Add new trigger" => "Lägga till ny utlösare"
// pe.addNew@navigateToUrlOnCondition: "Add new URL" => "Lägg till ny URL"
// choicesbyurl.url: "Web service's URL" => "Webbtjänstens URL"
// pe.progressBarShowPageTitles: "Display page titles in progress bar" => "Visa sidrubriker i förloppsindikatorn"
// pe.progressBarShowPageNumbers: "Display page numbers in progress bar" => "Visa sidnummer i förloppsindikatorn"
// itemvalue.visibleIf: "Make the option visible if" => "Gör alternativet synligt om"
// itemvalue.enableIf: "Make the option selectable if" => "Gör alternativet valbart om"
// panel.layout: "Panel Layout" => "Panelens layout"
// tabs.questionSettings: "Question Settings" => "Inställningar för frågor"
// pe.url_placeholder: "Ex.: https://api.example.com/books" => "Ex.: https://api.example.com/books"
// pe.path_placeholder: "Ex.: categories.fiction" => "Ex.: kategorier.skönlitteratur"
// pe.questionStartIndex_placeholder: "Ex.: a)" => "Ex.: a)"
// pe.width_placeholder: "Ex.: 6in" => "Ex.: 6 tum"
// pe.minWidth_placeholder: "Ex.: 600px" => "Ex.: 600px"
// pe.maxWidth_placeholder: "Ex.: 50%" => "Ex.: 50%"
// pv.selected: "Selected" => "Vald"
// pv.unselected: "Unselected" => "Omarkerade"
// pv.center: "Center" => "Centrum"
// pv.middle: "Middle" => "Mitt"
// pv.next: "Next" => "Nästa"
// pv.last: "Last" => "Sist"
// clearIfInvisible.none: "Never" => "Aldrig"
// questionsOnPageMode.standard: "Original structure" => "Ursprunglig struktur"
// questionsOnPageMode.singlePage: "Show all questions on one page" => "Visa alla frågor på en sida"
// questionsOnPageMode.questionPerPage: "Show single question per page" => "Visa en fråga per sida"
// pv.auto: "Auto" => "Bil"
// panelsState.firstExpanded: "First expanded" => "Först utökad"
// rateColorMode.scale: "Scale" => "Skala"
// scaleColorMode.monochrome: "Monochrome" => "Monokrom"
// scaleColorMode.colored: "Colored" => "Färgad"
// state.default: "Locked" => "Låst"
// showQuestionNumbers.default: "Auto-numbering" => "Automatisk numrering"
// showQuestionNumbers.on: "Auto-numbering" => "Automatisk numrering"
// showQuestionNumbers.onPage: "Reset on each page" => "Återställ på varje sida"
// showQuestionNumbers.onpanel: "Reset on each panel" => "Återställ på varje panel"
// showQuestionNumbers.onPanel: "Reset on each panel" => "Återställ på varje panel"
// showQuestionNumbers.onSurvey: "Continue across the survey" => "Fortsätt genom undersökningen"
// showQuestionNumbers.off: "No numbering" => "Ingen numrering"
// descriptionLocation.underTitle: "Under the question title" => "Under frågans rubrik"
// descriptionLocation.underInput: "Under the input field" => "Under inmatningsfältet"
// selectToRankAreasLayout.horizontal: "Next to choices" => "Bredvid alternativ"
// selectToRankAreasLayout.vertical: "Above choices" => "Ovanstående val"
// displayStyle.decimal: "Decimal" => "Decimal"
// displayStyle.currency: "Currency" => "Valuta"
// displayStyle.percent: "Percentage" => "Procent"
// displayStyle.date: "Date" => "Datum"
// totalDisplayStyle.decimal: "Decimal" => "Decimal"
// totalDisplayStyle.currency: "Currency" => "Valuta"
// totalDisplayStyle.percent: "Percentage" => "Procent"
// totalDisplayStyle.date: "Date" => "Datum"
// rowOrder.initial: "Original" => "Original"
// questionOrder.initial: "Original" => "Original"
// showProgressBar.aboveheader: "Above the header" => "Ovanför sidhuvudet"
// showProgressBar.belowheader: "Below the header" => "Nedanför rubriken"
// pv.sum: "Sum" => "Summa"
// pv.count: "Count" => "Räkna"
// pv.min: "Min" => "Min"
// pv.max: "Max" => "Max"
// pv.avg: "Avg" => "Avg"
// searchMode.contains: "Contains" => "Innehåller"
// searchMode.startsWith: "Starts with" => "Börjar med"
// panel.name: "A panel ID that is not visible to respondents." => "Ett panel-ID som inte är synligt för svarande."
// panel.description: "Type a panel subtitle." => "Skriv en panelundertext."
// panel.visibleIf: "Use the magic wand icon to set a conditional rule that determines panel visibility." => "Använd trollstavsikonen för att ställa in en villkorsregel som bestämmer panelens synlighet."
// panel.enableIf: "Use the magic wand icon to set a conditional rule that disables the read-only mode for the panel." => "Använd trollstavsikonen för att ställa in en villkorsregel som inaktiverar det skrivskyddade läget för panelen."
// panel.requiredIf: "Use the magic wand icon to set a conditional rule that prevents survey submission unless at least one nested question has an answer." => "Använd trollstavsikonen för att ställa in en villkorsregel som förhindrar att undersökningen skickas in om inte minst en kapslad fråga har ett svar."
// panel.questionTitleLocation: "Applies to all questions within this panel. If you want to override this setting, define title alignment rules for individual questions. The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Top\" by default)." => "Gäller alla frågor i den här panelen. Om du vill åsidosätta den här inställningen definierar du regler för rubrikjustering för enskilda frågor. Alternativet \"Ärv\" tillämpar inställningen på sidnivå (om den är inställd) eller på undersökningsnivå (\"Topp\" som standard)."
// panel.questionErrorLocation: "Sets the location of an error message in relation to all questions within the panel. The \"Inherit\" option applies the page-level (if set) or survey-level setting." => "Anger platsen för ett felmeddelande i förhållande till alla frågor i panelen. Alternativet \"Ärv\" tillämpar inställningen på sidnivå (om den är inställd) eller på undersökningsnivå."
// panel.questionOrder: "Keeps the original order of questions or randomizes them. The \"Inherit\" option applies the page-level (if set) or survey-level setting." => "Behåller den ursprungliga ordningen på frågorna eller slumpar dem. Alternativet \"Ärv\" tillämpar inställningen på sidnivå (om den är inställd) eller på undersökningsnivå."
// panel.page: "Repositions the panel to the end of a selected page." => "Flyttar panelen till slutet av en markerad sida."
// panel.innerIndent: "Adds space or margin between the panel content and the left border of the panel box." => "Lägger till utrymme eller marginal mellan panelinnehållet och panelrutans vänstra kant."
// panel.startWithNewLine: "Unselect to display the panel in one line with the previous question or panel. The setting doesn't apply if the panel is the first element in your form." => "Avmarkera om du vill visa panelen på en rad med föregående fråga eller panel. Inställningen gäller inte om panelen är det första elementet i formuläret."
// panel.state: "Choose from: \"Expanded\" - the panel is displayed in full and can be collapsed; \"Collapsed\" - the panel displays only the title and description and can be expanded; \"Locked\" - the panel is displayed in full and cannot be collapsed." => "Välj mellan: \"Expanderad\" - panelen visas i sin helhet och kan fällas ihop; \"Komprimerad\" - panelen visar endast titel och beskrivning och kan expanderas; \"Låst\" - panelen visas i sin helhet och kan inte fällas ihop."
// panel.width: "Sets the width of the panel in proportion to other survey elements in the same line. Accepts CSS values (px, %, in, pt, etc.)." => "Ställer in panelens bredd i proportion till andra undersökningselement på samma rad. Accepterar CSS-värden (px, %, in, pt, etc.)."
// paneldynamic.name: "A panel ID that is not visible to respondents." => "Ett panel-ID som inte är synligt för svarande."
// paneldynamic.description: "Type a panel subtitle." => "Skriv en panelundertext."
// paneldynamic.visibleIf: "Use the magic wand icon to set a conditional rule that determines panel visibility." => "Använd trollstavsikonen för att ställa in en villkorsregel som bestämmer panelens synlighet."
// paneldynamic.enableIf: "Use the magic wand icon to set a conditional rule that disables the read-only mode for the panel." => "Använd trollstavsikonen för att ställa in en villkorsregel som inaktiverar det skrivskyddade läget för panelen."
// paneldynamic.requiredIf: "Use the magic wand icon to set a conditional rule that prevents survey submission unless at least one nested question has an answer." => "Använd trollstavsikonen för att ställa in en villkorsregel som förhindrar att undersökningen skickas in om inte minst en kapslad fråga har ett svar."
// paneldynamic.templateQuestionTitleLocation: "Applies to all questions within this panel. If you want to override this setting, define title alignment rules for individual questions. The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Top\" by default)." => "Gäller alla frågor i den här panelen. Om du vill åsidosätta den här inställningen definierar du regler för rubrikjustering för enskilda frågor. Alternativet \"Ärv\" tillämpar inställningen på sidnivå (om den är inställd) eller på undersökningsnivå (\"Topp\" som standard)."
// paneldynamic.templateErrorLocation: "Sets the location of an error message in relation to a question with invalid input. Choose between: \"Top\" - an error text is placed at the top of the question box; \"Bottom\" - an error text is placed at the bottom of the question box. The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Top\" by default)." => "Anger platsen för ett felmeddelande i förhållande till en fråga med ogiltiga indata. Välj mellan: \"Överst\" - en feltext placeras högst upp i frågerutan; \"Nederst\" - en feltext placeras längst ner i frågerutan. Alternativet \"Ärv\" tillämpar inställningen på sidnivå (om den är inställd) eller på undersökningsnivå (\"Topp\" som standard)."
// paneldynamic.errorLocation: "Sets the location of an error message in relation to all questions within the panel. The \"Inherit\" option applies the page-level (if set) or survey-level setting." => "Anger platsen för ett felmeddelande i förhållande till alla frågor i panelen. Alternativet \"Ärv\" tillämpar inställningen på sidnivå (om den är inställd) eller på undersökningsnivå."
// paneldynamic.page: "Repositions the panel to the end of a selected page." => "Flyttar panelen till slutet av en markerad sida."
// paneldynamic.innerIndent: "Adds space or margin between the panel content and the left border of the panel box." => "Lägger till utrymme eller marginal mellan panelinnehållet och panelrutans vänstra kant."
// paneldynamic.startWithNewLine: "Unselect to display the panel in one line with the previous question or panel. The setting doesn't apply if the panel is the first element in your form." => "Avmarkera om du vill visa panelen på en rad med föregående fråga eller panel. Inställningen gäller inte om panelen är det första elementet i formuläret."
// paneldynamic.state: "Choose from: \"Expanded\" - the panel is displayed in full and can be collapsed; \"Collapsed\" - the panel displays only the title and description and can be expanded; \"Locked\" - the panel is displayed in full and cannot be collapsed." => "Välj mellan: \"Expanderad\" - panelen visas i sin helhet och kan fällas ihop; \"Komprimerad\" - panelen visar endast titel och beskrivning och kan expanderas; \"Låst\" - panelen visas i sin helhet och kan inte fällas ihop."
// paneldynamic.width: "Sets the width of the panel in proportion to other survey elements in the same line. Accepts CSS values (px, %, in, pt, etc.)." => "Ställer in panelens bredd i proportion till andra undersökningselement på samma rad. Accepterar CSS-värden (px, %, in, pt, etc.)."
// paneldynamic.templateTitle: "Type in a template for dynamic panel titles. Use {panelIndex} for the panel's general position and {visiblePanelIndex} for its order among visible panels. Insert these placeholders into the pattern to add automatic numbering." => "Skriv in en mall för dynamiska panelrubriker. Använd {panelIndex} för panelens allmänna position och {visiblePanelIndex} för dess ordning bland de synliga panelerna. Infoga dessa platshållare i mönstret för att lägga till automatisk numrering."
// paneldynamic.templateTabTitle: "Type in a template for tab titles. Use {panelIndex} for a panel's general position and {visiblePanelIndex} for its order among visible panels. Insert these placeholders into the pattern to add automatic numbering." => "Skriv in en mall för flikrubriker. Använd {panelIndex} för en panels allmänna position och {visiblePanelIndex} för dess ordning bland synliga paneler. Infoga dessa platshållare i mönstret för att lägga till automatisk numrering."
// paneldynamic.templateVisibleIf: "This setting allows you to control the visibility of individual panels within the dynamic panel. Use the `{panel}` placeholder to reference the current panel in your expression." => "Med den här inställningen kan du styra synligheten för enskilda paneler i den dynamiska panelen. Använd platshållaren {panel} för att referera till den aktuella panelen i uttrycket."
// paneldynamic.titleLocation: "This setting is automatically inherited by all questions within this panel. If you want to override this setting, define title alignment rules for individual questions. The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Top\" by default)." => "Den här inställningen ärvs automatiskt av alla frågor i den här panelen. Om du vill åsidosätta den här inställningen definierar du regler för rubrikjustering för enskilda frågor. Alternativet \"Ärv\" tillämpar inställningen på sidnivå (om den är inställd) eller på undersökningsnivå (\"Topp\" som standard)."
// paneldynamic.descriptionLocation: "The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Under the panel title\" by default)." => "Alternativet \"Ärv\" tillämpar inställningen på sidnivå (om den är inställd) eller på undersökningsnivå (\"Under panelrubriken\" som standard)."
// paneldynamic.newPanelPosition: "Defines the position of a newly added panel. By default, new panels are added to the end. Select \"Next\" to insert a new panel after the current one." => "Definierar placeringen av en nyligen tillagd panel. Som standard läggs nya paneler till i slutet. Välj \"Nästa\" för att infoga en ny panel efter den nuvarande."
// paneldynamic.copyDefaultValueFromLastEntry: "Duplicates answers from the last panel and assigns them to the next added dynamic panel." => "Duplicerar svar från den sista panelen och tilldelar dem till nästa tillagda dynamiska panel."
// paneldynamic.keyName: "Reference a question name to require a user to provide a unique response for this question in each panel." => "Referera till ett frågenamn för att kräva att en användare anger ett unikt svar för den här frågan i varje panel."
// pehelp.defaultValueExpression: "This setting allows you to assign a default answer value based on an expression. The expression can include basic calculations - `{q1_id} + {q2_id}`, Boolean expressions, such as `{age} > 60`, and functions: `iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, etc. The value determined by this expression serves as the initial default value that can be overridden by a respondent's manual input." => "Med den här inställningen kan du tilldela ett standardsvarsvärde baserat på ett uttryck. Uttrycket kan innehålla grundläggande beräkningar – {q1_id} + {q2_id}, booleska uttryck, till exempel {age} > 60 och funktioner: 'iif()', 'today()', 'age()', 'min()', 'max()', 'avg()' osv. Värdet som bestäms av detta uttryck fungerar som det initiala standardvärdet som kan åsidosättas av en svarandes manuella inmatning."
// pehelp.resetValueIf: "Use the magic wand icon to set a conditional rule that determines when a respondent's input is reset to the value based on the \"Default value expression\" or \"Set value expression\" or to the \"Default answer\" value (if either is set)." => "Använd trollstavsikonen för att ställa in en villkorsregel som avgör när en respondents inmatning återställs till värdet baserat på \"Standardvärdesuttryck\" eller \"Ange värdeuttryck\" eller till värdet \"Standardsvar\" (om något av dem är inställt)."
// pehelp.setValueIf: "Use the magic wand icon to set a conditional rule that determines when to run the \"Set value expression\" and dynamically assign the resulting value as a response." => "Använd trollstavsikonen för att ställa in en villkorsregel som avgör när \"Ange värdeuttryck\" ska köras och dynamiskt tilldela det resulterande värdet som ett svar."
// pehelp.setValueExpression: "Specify an expression that defines the value to be set when the conditions in the \"Set value if\" rule are met. The expression can include basic calculations - `{q1_id} + {q2_id}`, Boolean expressions, such as `{age} > 60`, and functions: `iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, etc. The value determined by this expression can be overridden by a respondent's manual input." => "Ange ett uttryck som definierar det värde som ska anges när villkoren i regeln \"Ange värde om\" uppfylls. Uttrycket kan innehålla grundläggande beräkningar – {q1_id} + {q2_id}, booleska uttryck, till exempel {age} > 60 och funktioner: 'iif()', 'today()', 'age()', 'min()', 'max()', 'avg()' osv. Värdet som bestäms av detta uttryck kan åsidosättas av en svarandes manuella inmatning."
// question.name: "A question ID that is not visible to respondents." => "Ett fråge-ID som inte är synligt för svarande."
// question.description: "Type a question subtitle." => "Skriv en underrubrik för frågan."
// question.visibleIf: "Use the magic wand icon to set a conditional rule that determines question visibility." => "Använd trollstavsikonen för att ställa in en villkorsregel som avgör frågans synlighet."
// question.enableIf: "Use the magic wand icon to set a conditional rule that disables the read-only mode for the question." => "Använd trollstavsikonen för att ställa in en villkorsregel som inaktiverar det skrivskyddade läget för frågan."
// question.requiredIf: "Use the magic wand icon to set a conditional rule that prevents survey advancing or submission unless the question received an answer." => "Använd trollstavsikonen för att ställa in en villkorsregel som förhindrar att undersökningen går vidare eller skickas in om inte frågan har fått ett svar."
// question.startWithNewLine: "Unselect to display the question in one line with the previous question or panel. The setting doesn't apply if the question is the first element in your form." => "Avmarkera om du vill visa frågan på en rad med föregående fråga eller panel. Inställningen gäller inte om frågan är det första elementet i formuläret."
// question.page: "Repositions the question to the end of a selected page." => "Flyttar frågan till slutet av en markerad sida."
// question.state: "Choose from: \"Expanded\" - the question box is displayed in full and can be collapsed; \"Collapsed\" - the question box displays only the title and description and can be expanded; \"Locked\" - the question box is displayed in full and cannot be collapsed." => "Välj mellan: \"Expanderad\" - frågerutan visas i sin helhet och kan fällas ihop; \"Komprimerad\" - frågerutan visar endast titel och beskrivning och kan expanderas; \"Låst\" - frågerutan visas i sin helhet och kan inte fällas ihop."
// question.titleLocation: "Overrides title alignment rules defined on a panel, page or survey level. The \"Inherit\" option applies any higher-level settings (if set) or survey-level setting (\"Top\" by default)." => "Åsidosätter regler för justering av titlar som definierats på panel-, sid- eller undersökningsnivå. Alternativet \"Ärv\" tillämpar alla inställningar på högre nivå (om de är inställda) eller inställningar på undersökningsnivå (\"Överst\" som standard)."
// question.descriptionLocation: "The \"Inherit\" option applies the survey-level setting (\"Under the question title\" by default)." => "Alternativet \"Ärv\" tillämpar inställningen på undersökningsnivå (\"Under frågans titel\" som standard)."
// question.errorLocation: "Sets the location of an error message in relation to the question with invalid input. Choose between: \"Top\" - an error text is placed at the top of the question box; \"Bottom\" - an error text is placed at the bottom of the question box. The \"Inherit\" option applies the survey-level setting (\"Top\" by default)." => "Anger platsen för ett felmeddelande i förhållande till frågan med ogiltig inmatning. Välj mellan: \"Överst\" - en feltext placeras högst upp i frågerutan; \"Nederst\" - en feltext placeras längst ner i frågerutan. Alternativet \"Ärv\" tillämpar inställningen på undersökningsnivå (\"Topp\" som standard)."
// question.indent: "Adds space or margin between the question content and the left border of the question box." => "Lägger till utrymme eller marginal mellan frågeinnehållet och frågerutans vänstra kant."
// question.width: "Sets the width of the question in proportion to other survey elements in the same line. Accepts CSS values (px, %, in, pt, etc.)." => "Anger frågans bredd i proportion till andra undersökningselement på samma rad. Accepterar CSS-värden (px, %, in, pt, etc.)."
// surveyvalidator.expression: "Use the magic wand icon to set a validation rule for the question." => "Använd trollstavsikonen för att ställa in ett valideringsuttryck för frågan."
// question.textUpdateMode: "Choose from: \"On lost focus\" - the value is updated when the input field loses focus; \"While typing\" - the value is updated in real-time, as users are typing. The \"Inherit\" option applies the survey-level setting (\"On lost focus\" by default)." => "Välj mellan: \"Vid förlorat fokus\" - värdet uppdateras när inmatningsfältet tappar fokus; \"Medan du skriver\" - värdet uppdateras i realtid när användarna skriver. Alternativet \"Ärv\" tillämpar inställningen på undersökningsnivå (\"Vid förlorat fokus\" som standard)."
// question.url: "You can use any web service as a data source for multiple-choice questions. To populate choice values, enter the URL of the service providing the data." => "Du kan använda valfri webbtjänst som datakälla för flervalsfrågor. Om du vill fylla i alternativvärden anger du URL:en för den tjänst som tillhandahåller data."
// question.searchMode: "A comparison operation used to filter the drop-down list." => "En jämförelseåtgärd som används för att filtrera listrutan."
// signaturepad.signatureWidth: "Sets the width of the displayed signature area and the resulting image." => "Anger bredden på det visade signaturområdet och den resulterande bilden."
// signaturepad.signatureHeight: "Sets the height of the displayed signature area and the resulting image." => "Anger höjden på det visade signaturområdet och den resulterande bilden."
// signaturepad.signatureAutoScaleEnabled: "Select if you want the signature area to fill all available space within the question box while maintaining the default 3:2 aspect ratio. When custom width and height values are set, the setting will keep the aspect ratio of these dimensions." => "Välj om du vill att signaturområdet ska fylla allt tillgängligt utrymme i frågerutan samtidigt som standardproportionerna 3:2 bibehålls. När anpassade bredd- och höjdvärden anges behåller inställningen proportionerna för dessa dimensioner."
// file.imageHeight: "Adjusts the height of the image in the survey results." => "Justerar höjden på bilden i undersökningsresultaten."
// file.imageWidth: "Adjusts the width of the image in the survey results." => "Justerar bredden på bilden i undersökningsresultaten."
// imagepicker.imageHeight: "Overrides the minimum and maximum height values." => "Åsidosätter värdena för lägsta och högsta höjd."
// imagepicker.imageWidth: "Overrides the minimum and maximum width values." => "Åsidosätter värdena för minsta och största bredd."
// imagepicker.choices: "\"Value\" serves as an item ID used in conditional rules; \"Text\" is displayed to respondents." => "\"Värde\" fungerar som ett objekt-ID som används i villkorsregler. \"Text\" visas för respondenterna."
// text.size: "This setting only resizes the input field and doesn't affect the width of the question box. To limit the accepted input length, go to <b>Validation → Maximum character limit</b>." => "Den här inställningen ändrar bara storleken på inmatningsfältet och påverkar inte frågerutans bredd. Om du vill begränsa den godkända indatalängden går du till <b>Validering → Maximal teckengräns</b>."
// comment.rows: "Sets the number of displayed lines in the input field. If the input takes up more lines, the scroll bar will appear." => "Ställer in antalet rader som visas i inmatningsfältet. Om inmatningen tar upp fler rader visas rullningslisten."
// survey.mode: "Choose between: \"Editable\" - enables respondents to fill out your survey; \"Read-only\" - disables form editing." => "Välj mellan: \"Redigerbar\" - gör det möjligt för respondenterna att fylla i din undersökning; \"Skrivskyddad\" - inaktiverar formulärredigering."
// matrixdropdowncolumn.name: "A column ID that is not visible to respondents." => "Ett kolumn-ID som inte är synligt för svarande."
// matrixdropdowncolumn.isUnique: "When enabled for a column, a respondent is required to provide a unique response for each question within this column." => "När den är aktiverad för en kolumn måste en svarande ange ett unikt svar för varje fråga i den här kolumnen."
// matrixdropdowncolumn.rows: "Sets the number of displayed lines in the input field. If the input takes up more lines, the scroll bar will appear." => "Ställer in antalet rader som visas i inmatningsfältet. Om inmatningen tar upp fler rader visas rullningslisten."
// matrixdropdowncolumn.visibleIf: "Use the magic wand icon to set a conditional rule that determines column visibility." => "Använd trollstavsikonen för att ange en villkorsregel som bestämmer kolumnens synlighet."
// matrixdropdowncolumn.enableIf: "Use the magic wand icon to set a conditional rule that disables the read-only mode for the column." => "Använd trollstavsikonen för att ange en villkorsregel som inaktiverar skrivskyddat läge för kolumnen."
// matrixdropdowncolumn.requiredIf: "Use the magic wand icon to set a conditional rule that prevents survey submission unless at least one nested question has an answer." => "Använd trollstavsikonen för att ställa in en villkorsregel som förhindrar att undersökningen skickas in om inte minst en kapslad fråga har ett svar."
// matrixdropdowncolumn.showInMultipleColumns: "When selected, creates an individual column for each choice option." => "När du väljer det här alternativet skapas en enskild kolumn för varje alternativ."
// pehelp.widthMode: "Choose from: \"Static\" - sets a fixed width; \"Responsive\" - makes the survey occupy the full width of the screen; \"Auto\" - applies either of the two depending on the question types used." => "Välj mellan: \"Statisk\" - ställer in en fast bredd; \"Responsiv\" - gör att undersökningen upptar hela skärmens bredd; \"Auto\" - gäller någon av de två beroende på vilka frågetyper som används."
// pehelp.logo: "Paste an image link (no size limits) or click the folder icon to browse a file from your computer (up to 64KB)." => "Klistra in en bildlänk (inga storleksbegränsningar) eller klicka på mappikonen för att bläddra i en fil från din dator (upp till 64 kB)."
// pehelp.logoWidth: "Sets a logo width in CSS units (px, %, in, pt, etc.)." => "Anger en logotypbredd i CSS-enheter (px, %, in, pt, etc.)."
// pehelp.logoHeight: "Sets a logo height in CSS units (px, %, in, pt, etc.)." => "Anger en logotyphöjd i CSS-enheter (px, %, in, pt, etc.)."
// pehelp.logoFit: "Choose from: \"None\" - image maintains its original size; \"Contain\" - image is resized to fit while maintaining its aspect ratio; \"Cover\" - image fills the entire box while maintaining its aspect ratio; \"Fill\" - image is stretched to fill the box without maintaining its aspect ratio." => "Välj mellan: \"Ingen\" - bilden behåller sin ursprungliga storlek; \"Innehåll\" - bildens storlek ändras så att den passar samtidigt som bildförhållandet bibehålls. \"Cover\" - bilden fyller hela rutan samtidigt som bildförhållandet bibehålls; \"Fyll\" - bilden sträcks ut för att fylla rutan utan att behålla bildförhållandet."
// pehelp.showNavigationButtons: "Sets the visibility and location of navigation buttons on a page." => "Anger synlighet och placering av navigeringsknappar på en sida."
// pehelp.showProgressBar: "Sets the visibility and location of a progress bar. The \"Auto\" value displays the progress bar above or below the survey header." => "Anger synlighet och plats för en förloppsindikator. Värdet \"Auto\" visar förloppsindikatorn ovanför eller under undersökningshuvudet."
// pehelp.showPreviewBeforeComplete: "Enable the preview page with all or answered questions only." => "Aktivera förhandsgranskningssidan med alla eller endast besvarade frågor."
// pehelp.questionTitleLocation: "Applies to all questions within the survey. This setting can be overridden by title alignment rules at lower levels: panel, page, or question. A lower-level setting will override those on a higher level." => "Gäller alla frågor i undersökningen. Den här inställningen kan åsidosättas av regler för justering av rubriker på lägre nivåer: panel, sida eller fråga. En inställning på lägre nivå åsidosätter de på en högre nivå."
// pehelp.requiredMark: "A symbol or a sequence of symbols indicating that an answer is required." => "En symbol eller en sekvens av symboler som anger att ett svar krävs."
// pehelp.questionStartIndex: "Enter a number or letter with which you want to start numbering." => "Ange en siffra eller bokstav som du vill börja numrera med."
// pehelp.questionErrorLocation: "Sets the location of an error message in relation to the question with invalid input. Choose between: \"Top\" - an error text is placed at the top of the question box; \"Bottom\" - an error text is placed at the bottom of the question box." => "Anger platsen för ett felmeddelande i förhållande till frågan med ogiltig inmatning. Välj mellan: \"Överst\" - en feltext placeras högst upp i frågerutan; \"Nederst\" - en feltext placeras längst ner i frågerutan."
// pehelp.autoFocusFirstQuestion: "Select if you want the first input field on each page ready for text entry." => "Välj om du vill att det första inmatningsfältet på varje sida ska vara klart för textinmatning."
// pehelp.questionOrder: "Keeps the original order of questions or randomizes them. The effect of this setting is only visible in the Preview tab." => "Behåller den ursprungliga ordningen på frågorna eller slumpar dem. Effekten av den här inställningen visas bara på fliken Förhandsgranska."
// pehelp.maxTextLength: "For text entry questions only." => "Endast för textinmatningsfrågor."
// pehelp.maxCommentLength: "For question comments only." => "Endast för frågekommentarer."
// pehelp.autoGrowComment: "Select if you want question comments and Long Text questions to auto-grow in height based on the entered text length." => "Välj om du vill att frågekommentarer och långa textfrågor automatiskt ska öka i höjd baserat på den angivna textlängden."
// pehelp.allowResizeComment: "For question comments and Long Text questions only." => "Endast för frågekommentarer och långa textfrågor."
// pehelp.calculatedValues: "Custom variables serve as intermediate or auxiliary variables used in form calculations. They take respondent inputs as source values. Each custom variable has a unique name and an expression it's based on." => "Anpassade variabler fungerar som mellanliggande variabler eller hjälpvariabler som används i formulärberäkningar. De tar svarandes indata som källvärden. Varje anpassad variabel har ett unikt namn och ett uttryck som den baseras på."
// pehelp.includeIntoResult: "Select if you wish the calculated value of the expression to be saved along with survey results." => "Välj om du vill att det beräknade värdet av uttrycket ska sparas tillsammans med undersökningsresultaten."
// pehelp.triggers: "A trigger is an event or condition that is based on an expression. Once the expression is evaluated to \"true\", a trigger sets off an action. Such an action can optionally have a target question it affects." => "En utlösare är en händelse eller ett villkor som baseras på ett uttryck. När uttrycket har utvärderats till \"true\" utlöser en utlösare en åtgärd. En sådan åtgärd kan valfritt ha en målfråga som den påverkar."
// pehelp.clearInvisibleValues: "Choose whether or not to clear values for questions hidden by conditional logic and when to do it." => "Välj om du vill rensa värden för frågor som döljs av villkorsstyrd logik och när du vill göra det."
// pehelp.textUpdateMode: "Choose from: \"On lost focus\" - the value is updated when the input field loses focus; \"While typing\" - the value is updated in real-time, as users are typing." => "Välj mellan: \"Vid förlorat fokus\" - värdet uppdateras när inmatningsfältet tappar fokus; \"Medan du skriver\" - värdet uppdateras i realtid när användarna skriver."
// pehelp.columns: "The left value serves as a column ID used in conditional rules, the right value is displayed to respondents." => "Det vänstra värdet fungerar som ett kolumn-ID som används i villkorsregler, det högra värdet visas för respondenterna."
// pehelp.rows: "The left value serves as a row ID used in conditional rules, the right value is displayed to respondents." => "Det vänstra värdet fungerar som ett rad-ID som används i villkorsregler, det högra värdet visas för respondenterna."
// pehelp.columnMinWidth: "Accepts CSS values (px, %, in, pt, etc.)." => "Accepterar CSS-värden (px, %, in, pt, etc.)."
// pehelp.rowTitleWidth: "Accepts CSS values (px, %, in, pt, etc.)." => "Accepterar CSS-värden (px, %, in, pt, etc.)."
// pehelp.cellErrorLocation: "Sets the location of an error message in relation to a cell with invalid input. The \"Inherit\" option applies the setting from the \"Error message alignment\" property." => "Anger platsen för ett felmeddelande i förhållande till en cell med ogiltiga indata. Alternativet \"Ärv\" tillämpar inställningen från egenskapen \"Justering av felmeddelande\"."
// pehelp.keyDuplicationError: "When the \"Prevent duplicate responses\" property is enabled, a respondent attempting to submit a duplicate entry will receive the following error message." => "När egenskapen \"Förhindra dubblettsvar\" är aktiverad kommer en svarande som försöker skicka in en dubblett att få följande felmeddelande."
// pehelp.totalExpression: "Allows you to calculate total values based on an expression. The expression can include basic calculations (`{q1_id} + {q2_id}`), Boolean expressions (`{age} > 60`) and functions ('iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, etc.)." => "Gör att du kan beräkna totalvärden baserat på ett uttryck. Uttrycket kan innehålla grundläggande beräkningar ('{q1_id} + {q2_id}'), booleska uttryck ('{age} > 60') och funktioner ('iif()', 'today()', 'age()', 'min()', 'max()', 'avg()', etc.)."
// pehelp.confirmDelete: "Triggers a prompt asking to confirm the row deletion." => "Utlöser en uppmaning där du uppmanas att bekräfta borttagningen av raden."
// pehelp.copyDefaultValueFromLastEntry: "Duplicates answers from the last row and assigns them to the next added dynamic row." => "Duplicerar svar från den sista raden och tilldelar dem till nästa tillagda dynamiska rad."
// pehelp.description: "Type a subtitle." => "Skriv en undertext."
// pehelp.locale: "Choose a language to begin creating your survey. To add a translation, switch to a new language and translate the original text here or in the Translations tab." => "Välj ett språk för att börja skapa din undersökning. Om du vill lägga till en översättning byter du till ett nytt språk och översätter originaltexten här eller på fliken Översättningar."
// pehelp.detailPanelMode: "Sets the location of a details section in relation to a row. Choose from: \"None\" - no expansion is added; \"Under the row\" - a row expansion is placed under each row of the matrix; \"Under the row, display one row expansion only\" - an expansion is displayed under a single row only, the remaining row expansions are collapsed." => "Anger platsen för ett detaljavsnitt i förhållande till en rad. Välj mellan: \"Ingen\" - ingen expansion läggs till; \"Under raden\" - en radexpansion placeras under varje rad i matrisen; \"Visa endast en radexpansion under raden\" - en expansion visas endast under en enda rad, de återstående radexpansionerna är komprimerade."
// pehelp.imageFit: "Choose from: \"None\" - image maintains its original size; \"Contain\" - image is resized to fit while maintaining its aspect ratio; \"Cover\" - image fills the entire box while maintaining its aspect ratio; \"Fill\" - image is stretched to fill the box without maintaining its aspect ratio." => "Välj mellan: \"Ingen\" - bilden behåller sin ursprungliga storlek; \"Innehåll\" - bildens storlek ändras så att den passar samtidigt som bildförhållandet bibehålls. \"Cover\" - bilden fyller hela rutan samtidigt som bildförhållandet bibehålls; \"Fyll\" - bilden sträcks ut för att fylla rutan utan att behålla bildförhållandet."
// pehelp.autoGrow: "Gradually increases the height of the input field as data is being entered. Overrides the \"Input field height (in lines)\" setting." => "Ökar gradvis höjden på inmatningsfältet när data matas in. Åsidosätter inställningen \"Inmatningsfältets höjd (i rader)\"."
// pehelp.allowResize: "The resize handle (or grip) appears in the corner and can be dragged to alter the size of the input field." => "Storlekshandtaget (eller greppet) visas i hörnet och kan dras för att ändra storleken på inmatningsfältet."
// pehelp.timeLimit: "A time interval in seconds after which the survey auto-advances to the Thank You page." => "Ett tidsintervall i sekunder varefter undersökningen automatiskt går vidare till Tack-sidan."
// pehelp.timeLimitPerPage: "A time interval in seconds after which the survey auto-advances to the next page." => "Ett tidsintervall i sekunder varefter undersökningen automatiskt går vidare till nästa sida."
// page.timeLimit: "A time interval in seconds after which the survey auto-advances to the next page." => "Ett tidsintervall i sekunder varefter undersökningen automatiskt går vidare till nästa sida."
// page.visibleIf: "Use the magic wand icon to set a conditional rule that determines page visibility." => "Använd trollstavsikonen för att ställa in en villkorsregel som bestämmer sidans synlighet."
// page.enableIf: "Use the magic wand icon to set a conditional rule that disables the read-only mode for the page." => "Använd trollstavsikonen för att ställa in en villkorsregel som inaktiverar det skrivskyddade läget för sidan."
// page.requiredIf: "Use the magic wand icon to set a conditional rule that prevents survey submission unless at least one nested question has an answer." => "Använd trollstavsikonen för att ställa in en villkorsregel som förhindrar att undersökningen skickas in om inte minst en kapslad fråga har ett svar."
// page.questionTitleLocation: "Applies to all questions within this page. If you want to override this setting, define title alignment rules for individual questions or panels. The \"Inherit\" option applies the survey-level setting (\"Top\" by default)." => "Gäller alla frågor på denna sida. Om du vill åsidosätta den här inställningen definierar du regler för titeljustering för enskilda frågor eller paneler. Alternativet \"Ärv\" tillämpar inställningen på undersökningsnivå (\"Topp\" som standard)."
// page.questionErrorLocation: "Sets the location of an error message in relation to the question with invalid input. Choose between: \"Top\" - an error text is placed at the top of the question box; \"Bottom\" - an error text is placed at the bottom of the question box. The \"Inherit\" option applies the survey-level setting (\"Top\" by default)." => "Anger platsen för ett felmeddelande i förhållande till frågan med ogiltig inmatning. Välj mellan: \"Överst\" - en feltext placeras högst upp i frågerutan; \"Nederst\" - en feltext placeras längst ner i frågerutan. Alternativet \"Ärv\" tillämpar inställningen på undersökningsnivå (\"Topp\" som standard)."
// page.questionOrder: "Keeps the original order of questions or randomizes them. The \"Inherit\" option applies the survey-level setting (\"Original\" by default). The effect of this setting is only visible in the Preview tab." => "Behåller den ursprungliga ordningen på frågorna eller slumpar dem. Alternativet \"Ärv\" tillämpar inställningen på undersökningsnivå (\"Original\" som standard). Effekten av den här inställningen visas bara på fliken Förhandsgranska."
// page.showNavigationButtons: "Sets the visibility of navigation buttons on the page. The \"Inherit\" option applies the survey-level setting, which defaults to \"Visible\"." => "Ställer in synligheten för navigeringsknapparna på sidan. Alternativet \"Ärv\" tillämpar inställningen på undersökningsnivå, som standard är \"Synlig\"."
// pehelp.panelsState: "Choose from: \"Locked\" - users cannot expand or collapse panels; \"Collapse all\" - all panels start in a collapsed state; \"Expand all\" - all panels start in an expanded state; \"First expanded\" - only the first panel is initially expanded." => "Välj mellan: \"Låst\" - användare kan inte expandera eller komprimera paneler; \"Komprimera alla\" - alla paneler börjar i ett komprimerat tillstånd; \"Expandera alla\" - alla paneler börjar i ett expanderat tillstånd; \"Först expanderad\" - endast den första panelen expanderas initialt."
// pehelp.imageLinkName: "Enter a shared property name within the array of objects that contains the image or video file URLs you want to display in the choice list." => "Ange ett delat egenskapsnamn i matrisen med objekt som innehåller de bild- eller videofils-URL:er som du vill visa i alternativlistan."
// pehelp.choices: "The left value serves as an item ID used in conditional rules, the right value is displayed to respondents." => "Det vänstra värdet fungerar som ett objekt-ID som används i villkorsregler, det högra värdet visas för respondenterna."
// pehelp.title: "Type a user-friendly title to display." => "Skriv en användarvänlig titel som ska visas."
// pehelp.waitForUpload: "Ensures that users won't complete the survey until files are uploaded." => "Säkerställer att användarna inte slutför undersökningen förrän filerna har laddats upp."
// pehelp.minWidth: "Accepts CSS values (px, %, in, pt, etc.)." => "Accepterar CSS-värden (px, %, in, pt, etc.)."
// pehelp.maxWidth: "Accepts CSS values (px, %, in, pt, etc.)." => "Accepterar CSS-värden (px, %, in, pt, etc.)."
// pehelp.width: "Accepts CSS values (px, %, in, pt, etc.)." => "Accepterar CSS-värden (px, %, in, pt, etc.)."
// pehelp.useDisplayValuesInDynamicTexts: "In single- and multiple-selection question types, each choice option has an ID and display value. When selected, this setting shows a display value instead of an ID value in HTML questions and dynamic titles and descriptions of survey elements." => "I frågetyperna med ett eller flera val har varje alternativ ett ID och ett visningsvärde. När du väljer det här alternativet visar den här inställningen ett visningsvärde i stället för ett ID-värde i HTML-frågor och dynamiska rubriker och beskrivningar av undersökningselement."
// pehelp.clearIfInvisible: "Choose whether or not to clear question values hidden by conditional logic and when to do it. The \"Inherit\" option applies the survey-level setting (\"Upon survey completion\" by default)." => "Välj om du vill rensa frågevärden som döljs av villkorslogik och när du vill göra det. Alternativet \"Ärv\" tillämpar inställningen på undersökningsnivå (\"När undersökningen är klar\" som standard)."
// pehelp.choicesFromQuestionMode: "Choose from: \"All\" - copies all choice options from the selected question; \"Selected\" - dynamically copies only selected choice options; \"Unselected\" - dynamically copies only unselected choice options. The \"None\" and \"Other\" options are copied by default if enabled in the source question." => "Välj mellan: \"Alla\" - kopierar alla valalternativ från den valda frågan; \"Markerad\" - kopierar dynamiskt endast valda alternativ; \"Omarkerad\" - kopierar endast omarkerade alternativ dynamiskt. Alternativen \"Ingen\" och \"Annat\" kopieras som standard om de är aktiverade i källfrågan."
// pehelp.showOtherItem: "When selected, users can include additional input in a separate comment box." => "När du väljer det här alternativet kan användarna inkludera ytterligare indata i en separat kommentarsruta."
// pehelp.separateSpecialChoices: "Displays each special choice option (\"None\", \"Other\", \"Select All\") on a new line, even when using a multiple-column layout." => "Visar varje specialalternativ (\"Ingen\", \"Annan\", \"Markera alla\") på en ny rad, även när du använder en layout med flera kolumner."
// pehelp.path: "Specify the location within the service dataset where the target array of objects is located. Leave empty if the URL already points to the array." => "Ange den plats i tjänstdatauppsättningen där målmatrisen med objekt finns. Lämna tomt om URL:en redan pekar på matrisen."
// pehelp.titleName: "Enter a uniform property name within the array of objects that contains the values you want to display in the choice list." => "Ange ett enhetligt egenskapsnamn i den objektmatris som innehåller de värden som du vill visa i urvalslistan."
// pehelp.allowEmptyResponse: "Select to allow the service to return an empty response or array." => "Välj det här alternativet om du vill tillåta att tjänsten returnerar ett tomt svar eller en tom matris."
// pehelp.choicesVisibleIf: "Use the magic wand icon to set a conditional rule that determines the visibility of all choice options." => "Använd trollstavsikonen för att ställa in en villkorsregel som bestämmer synligheten för alla alternativ."
// pehelp.rateValues: "The left value serves as an item ID used in conditional rules, the right value is displayed to respondents." => "Det vänstra värdet fungerar som ett objekt-ID som används i villkorsregler, det högra värdet visas för respondenterna."
// rating.displayMode: "\"Auto\" selects between the \"Buttons\" and \"Dropdown\" modes based on the available width. When the width is insufficient to display buttons, the question displays a dropdown." => "\"Auto\" väljer mellan lägena \"Knappar\" och \"Rullgardinsmeny\" baserat på den tillgängliga bredden. När bredden inte räcker till för att visa knappar visas en listruta i frågan."
// pehelp.valuePropertyName: "Allows you to connect questions that produce results in different formats. When such questions are linked together using a join identifier, this shared property stores selected question values." => "Gör att du kan koppla ihop frågor som ger resultat i olika format. När sådana frågor länkas samman med hjälp av en kopplingsidentifierare lagrar den här delade egenskapen valda frågevärden."
// pehelp.searchEnabled: "Select if you want to update the drop-down menu contents to match the search query that a user is typing in the input field." => "Välj det här alternativet om du vill uppdatera innehållet i den nedrullningsbara menyn så att det matchar den sökfråga som användaren skriver i inmatningsfältet."
// pehelp.valueTrue: "A value to save in survey results when respondents give a positive answer." => "Ett värde att spara i undersökningsresultaten när respondenterna ger ett positivt svar."
// pehelp.valueFalse: "A value to save in survey results when respondents give a negative answer." => "Ett värde att spara i undersökningsresultaten när respondenterna ger ett negativt svar."
// pehelp.showPreview: "It's not recommended to disable this option as it overrides the Preview image and makes it hard for a user to understand whether the files have been uploaded." => "Vi rekommenderar inte att du inaktiverar det här alternativet eftersom det åsidosätter förhandsgranskningsbilden och gör det svårt för en användare att förstå om filerna har laddats upp."
// pehelp.needConfirmRemoveFile: "Triggers a prompt asking to confirm the file deletion." => "Utlöser en uppmaning om att bekräfta borttagningen av filen."
// pehelp.selectToRankEnabled: "Enable to rank only selected choices. Users will drag selected items from the choice list to order them within the ranking area." => "Aktivera för att endast rangordna valda alternativ. Användarna drar de valda objekten från urvalslistan för att ordna dem i rangordningsområdet."
// pehelp.dataList: "Enter a list of choices that will be suggested to the respondent during input." => "Ange en lista med alternativ som kommer att föreslås för respondenten under inmatningen."
// pehelp.inputSize: "The setting only resizes the input fields and doesn't affect the width of the question box." => "Inställningen ändrar bara storleken på inmatningsfälten och påverkar inte frågerutans bredd."
// pehelp.itemTitleWidth: "Sets consistent width for all item labels in pixels" => "Anger konsekvent bredd för alla objektetiketter i pixlar"
// pehelp.contentMode: "The \"Auto\" option automatically determines the suitable mode for display - Image, Video, or YouTube - based on the source URL provided." => "Alternativet \"Auto\" bestämmer automatiskt vilket läge som är lämpligt för visning - bild, video eller YouTube - baserat på den angivna källadressen."
// pehelp.altText: "Serves as a substitute when the image cannot be displayed on a user's device and for accessibility purposes." => "Fungerar som ersättning när bilden inte kan visas på en användares enhet och i tillgänglighetssyfte."
// pehelp.rateColorMode: "Defines the color of the selected emoji when the Rating icon type is set to \"Smileys\". Choose between: \"Default\" - the selected emoji appears in default survey color; \"Scale\" - the selected emoji inherits color from the rating scale." => "Definierar färgen på den valda emojin när typen av betygsikon är inställd på \"Smileys\". Välj mellan: \"Standard\" - den valda emojin visas i standardundersökningsfärgen; \"Skala\" - den valda emojin ärver färg från betygsskalan."
// expression.name: "An expression ID that is not visible to respondents." => "Ett uttrycks-ID som inte är synligt för svarande."
// expression.description: "Type an expression subtitle." => "Skriv en underrubrik för uttrycket."
// expression.expression: "An expression can include basic calculations (`{q1_id} + {q2_id}`), conditions (`{age} > 60`), and functions ('iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, etc.)." => "Ett uttryck kan innehålla grundläggande beräkningar ('{q1_id} + {q2_id}'), villkor ('{age} > 60') och funktioner ('iif()', 'today()', 'age()', 'min()', 'max()', 'avg()', etc.)."
// pehelp.storeOthersAsComment: "Select to store the \"Other\" option value as a separate property in survey results." => "Välj det här alternativet om du vill lagra alternativvärdet \"Annat\" som en separat egenskap i undersökningsresultaten."
// p.swapOrder: "Swap the order of Yes and No" => "Byt ordning på Ja och Nej"
// p.itemTitleWidth: "Item label width (in px)" => "Bredd på objektetikett (i px)"
// p.selectToRankEmptyRankedAreaText: "Text to show if all options are selected" => "Text som ska visas om alla alternativ är markerade"
// p.selectToRankEmptyUnrankedAreaText: "Placeholder text for the ranking area" => "Platshållartext för rangordningsområdet"
// pe.autoAdvanceAllowComplete: "Complete the survey automatically" => "Fyll i enkäten automatiskt"
// pehelp.autoAdvanceAllowComplete: "Select if you want the survey to complete automatically after a respondent answers all questions." => "Välj om du vill att undersökningen ska slutföras automatiskt efter att en svarande har svarat på alla frågor."
// masksettings.saveMaskedValue: "Save masked value in survey results" => "Spara maskerat värde i undersökningsresultat"
// patternmask.pattern: "Value pattern" => "Värdemönster"
// datetimemask.min: "Minimum value" => "Minsta värde"
// datetimemask.max: "Maximum value" => "Maximalt värde"
// numericmask.allowNegativeValues: "Allow negative values" => "Tillåt negativa värden"
// numericmask.thousandsSeparator: "Thousands separator" => "Avgränsare för tusental"
// numericmask.decimalSeparator: "Decimal separator" => "Decimaltecknet"
// numericmask.precision: "Value precision" => "Värde precision"
// numericmask.min: "Minimum value" => "Minsta värde"
// numericmask.max: "Maximum value" => "Maximalt värde"
// currencymask.prefix: "Currency prefix" => "Prefix för valuta"
// currencymask.suffix: "Currency suffix" => "Valutasuffix"
// pe.maskType: "Input mask type" => "Typ av indatamask"
// maskTypes.patternmask: "Pattern" => "Mönster"
// maskTypes.numericmask: "Numeric" => "Numerisk"
// maskTypes.datetimemask: "Date and Time" => "Datum och tid"
// maskTypes.currencymask: "Currency" => "Valuta"
// tabs.mask: "Input Mask Settings" => "Inställningar för inmatningsmask"
// pe.pattern_placeholder: "Ex.: +1(999)-999-99-99" => "Ex.: +1(999)-999-99-99"
// pe.datetimepattern_placeholder: "Ex.: mm/dd/yyyy" => "Ex.: mm/dd/åååå"
// pe.currencyprefix_placeholder: "Ex.: $" => "Ex.: $"
// pe.currencysuffix_placeholder: "Ex.: USD" => "Ex.: USD"
// pv.textWrapEnabled: "Wrap choices" => "Radbryt val"
// question.textWrapEnabled: "Long texts in choice options will automatically generate line breaks to fit within the drop-down menu. Unselect if you want the texts to clip." => "Långa texter i valalternativ genererar automatiskt radbrytningar för att passa in i rullgardinsmenyn. Avmarkera om du vill att texterna ska klippas."
// masksettings.saveMaskedValue: "Select if you want to store the question value with an applied mask in survey results." => "Välj om du vill lagra frågevärdet med en tillämpad mask i undersökningsresultaten."
// patternmask.pattern: "The pattern can contain string literals and the following placeholders: `9` - for a digit; `a` - for an upper- or lower-case letter; `#` - for a digit or an upper- or lower-case letter. Use backslash `\\` to escape a character." => "Mönstret kan innehålla strängliteraler och följande platshållare: \"9\" – för en siffra; \"a\" - för en stor eller liten bokstav; \"#\" – för en siffra eller en stor eller liten bokstav. Använd omvänt snedstreck \"\\\" för att undvika ett tecken."
// datetimemask.pattern: "The pattern can contain separator characters and the following placeholders: `m` - for month number; `mm` - for month number, with leading zero for single-digit values; `d` - for day of the month; `dd` - for day of the month, with leading zero for single-digit values; `yy` - for the last two digits of the year; `yyyy` - for a four-digit year." => "Mönstret kan innehålla avgränsningstecken och följande platshållare: \"m\" – för månadsnummer; \"mm\" – för månadsnummer, med inledande nolla för ensiffriga värden. \"d\" - för dag i månaden; \"dd\" – för dag i månaden, med inledande nolla för ensiffriga värden. \"yy\" – för de två sista siffrorna i årtalet. \"yyyy\" – för ett fyrsiffrigt årtal."
// numericmask.decimalSeparator: "A symbol used to separate the fractional part from the integer part of a displayed number." => "En symbol som används för att skilja bråkdelen från heltalsdelen av ett visat tal."
// numericmask.thousandsSeparator: "A symbol used to separate the digits of a large number into groups of three." => "En symbol som används för att dela upp siffrorna i ett stort tal i grupper om tre."
// numericmask.precision: "Limits how many digits to retain after the decimal point for a displayed number." => "Begränsar hur många siffror som ska behållas efter decimaltecknet för ett tal som visas."
// currencymask.prefix: "One or several symbols to be displayed before the value." => "En eller flera symboler som ska visas före värdet."
// currencymask.suffix: "One or several symbols to be displayed after the value." => "En eller flera symboler som ska visas efter värdet."
// ed.translationSource: "Source: " => "Källa: "
// ed.translationTarget: "Target: " => "Mål: "
// ed.pagePlaceHolder: "The page is empty. Drag an element from the toolbox or click the button below." => "Sidan är tom. Dra ett element från verktygslådan eller klicka på knappen nedan."
// maskTypes.none: "None" => "Ingen"
// itemvalue@rows.visibleIf: "Make the row visible if" => "Gör raden synlig om"
// itemvalue@rows.enableIf: "Make the row editable if" => "Gör raden redigerbar om"
// signaturepad.placeholderReadOnly: "Placeholder text in read-only or preview mode" => "Platshållartext i skrivskyddat läge eller förhandsgranskningsläge"
// pe.textWrapEnabled: "Wrap choices" => "Radbryt val"
// image.contentMode: "The \"Auto\" option automatically determines the suitable mode for display - Image, Video, or YouTube - based on the source URL provided." => "Alternativet \"Auto\" bestämmer automatiskt vilket läge som är lämpligt för visning - bild, video eller YouTube - baserat på den angivna källadressen."
// imagepicker.contentMode: "Choose between \"Image\" and \"Video\" to set the content mode of the media selector. If \"Image\" is selected, ensure that all options provided are image files in the following formats: JPEG, GIF, PNG, APNG, SVG, BMP, ICO. Similarly, if \"Video\" is selected, ensure that all options are direct links to video files in the following formats: MP4, MOV, WMV, FLV, AVI, MKV. Please note that YouTube links are not supported for video options." => "Välj mellan \"Bild\" och \"Video\" för att ställa in innehållsläget för medieväljaren. Om \"Bild\" är valt, se till att alla alternativ som tillhandahålls är bildfiler i följande format: JPEG, GIF, PNG, APNG, SVG, BMP, ICO. På samma sätt, om \"Video\" är valt, se till att alla alternativ är direktlänkar till videofiler i följande format: MP4, MOV, WMV, FLV, AVI, MKV. Observera att YouTube-länkar inte stöds för videoalternativ."
// ed.selectFile: "Select a file" => "Välj en fil"
// ed.removeFile: "Remove the file" => "Ta bort filen"
// pe.searchMode: "Search Mode" => "Sökläge"
// ed.surveyPlaceHolderMobile: "Click the \"Add Question\" button below to start creating your form." => "Klicka på knappen \"Lägg till fråga\" nedan för att börja skapa ditt formulär."
// ed.pagePlaceHolderMobile: "Click the \"Add Question\" button below to add a new element to the page." => "Klicka på knappen \"Lägg till fråga\" nedan för att lägga till ett nytt element på sidan."
// ed.panelPlaceHolderMobile: "Click the \"Add Question\" button below to add a new element to the panel." => "Klicka på knappen \"Lägg till fråga\" nedan för att lägga till ett nytt element i panelen."
// ed.imagePlaceHolderMobile: "Click the button below and choose an image to upload" => "Klicka på knappen nedan och välj en bild att ladda upp"
// coloralpha.opacity: "Opacity" => "Ogenomskinlighet"
// font.family: "Font family" => "Teckensnitt familj"
// font.color: "Color" => "Färg"
// font.placeholderColor: "Placeholder color" => "Platshållarens färg"
// font.size: "Size" => "Storlek"
// theme.themeName: "Theme" => "Tema"
// theme.isPanelless: "Question appearance" => "Frågans utseende"
// theme.editorPanel: "Background and corner radius" => "Bakgrund och hörnradie"
// theme.questionPanel: "Background and corner radius" => "Bakgrund och hörnradie"
// theme.primaryColor: "Accent color" => "Accentfärg"
// theme.panelBackgroundTransparency: "Panel background opacity" => "Opacitet för panelbakgrund"
// theme.questionBackgroundTransparency: "Question background opacity" => "Opacitet för frågebakgrund"
// theme.fontSize: "Font size" => "Teckenstorlek"
// theme.scale: "Scale" => "Skala"
// theme.cornerRadius: "Corner radius" => "Hörn radie"
// theme.pageTitle: "Title font" => "Titel typsnitt"
// theme.pageDescription: "Description font" => "Beskrivning teckensnitt"
// theme.questionTitle: "Title font" => "Titel typsnitt"
// theme.questionDescription: "Description font" => "Beskrivning teckensnitt"
// theme.editorFont: "Font" => "Teckensnitt"
// theme.backgroundOpacity: "Opacity" => "Ogenomskinlighet"
// theme.--sjs-font-family: "Font family" => "Teckensnitt familj"
// theme.--sjs-general-backcolor-dim: "Background color" => "Bakgrundsfärg"
// theme.--sjs-primary-backcolor: "Accent background" => "Accent bakgrund"
// theme.--sjs-primary-forecolor: "Accent foreground" => "Accent förgrund"
// theme.--sjs-shadow-small: "Shadow effects" => "Skugga effekter"
// theme.--sjs-shadow-inner: "Shadow effects" => "Skugga effekter"
// theme.--sjs-border-default: "Colors" => "Färger"
// header@header.headerView: "View" => "Utsikt"
// header@header.logoPosition: "Logo position" => "Logotypens placering"
// header@header.surveyTitle: "Survey title font" => "Teckensnitt för undersökningens titel"
// header@header.surveyDescription: "Survey description font" => "Teckensnitt för undersökningsbeskrivning"
// header@header.headerTitle: "Survey title font" => "Teckensnitt för undersökningens titel"
// header@header.headerDescription: "Survey description font" => "Teckensnitt för undersökningsbeskrivning"
// header@header.inheritWidthFrom: "Content area width" => "Bredd på innehållsområdet"
// header@header.textAreaWidth: "Text width" => "Textens bredd"
// header@header.backgroundColorSwitch: "Background color" => "Bakgrundsfärg"
// header@header.backgroundImage: "Background image" => "Bakgrundsbild"
// header@header.backgroundImageOpacity: "Opacity" => "Ogenomskinlighet"
// header@header.overlapEnabled: "Overlap" => "Överlappa"
// header@header.logoPositionX: "Logo position" => "Logotypens placering"
// header@header.titlePositionX: "Title position" => "Titel position"
// header@header.descriptionPositionX: "Description position" => "Beskrivning position"
// weight.400: "Regular" => "Ordinarie"
// weight.600: "Heavy" => "Tung"
// weight.700: "Semi-bold" => "Halvfet stil"
// weight.800: "Bold" => "Djärv"
// backgroundImageFit.auto: "Auto" => "Bil"
// backgroundImageFit.cover: "Cover" => "Täcka"
// backgroundImageFit.contain: "Contain" => "Innehålla"
// backgroundImageFit.fill: "Stretch" => "Tänja"
// backgroundImageFit.tile: "Tile" => "Kakel"
// backgroundImageAttachment.fixed: "Fixed" => "Fast"
// backgroundImageAttachment.scroll: "Scroll" => "Rulla"
// headerView.basic: "Basic" => "Grundläggande"
// headerView.advanced: "Advanced" => "Avancerad"
// inheritWidthFrom.survey: "Same as survey" => "Samma som enkät"
// inheritWidthFrom.container: "Fit to container" => "Passa till behållare"
// backgroundColorSwitch.none: "None" => "Ingen"
// backgroundColorSwitch.accentColor: "Accent color" => "Accentfärg"
// backgroundColorSwitch.custom: "Custom" => "Sed"
// colorPalette.light: "Light" => "Ljus"
// colorPalette.dark: "Dark" => "Mörk"
// isPanelless.false: "Default" => "Standard"
// isPanelless.true: "Without Panels" => "Utan paneler"
// theme.cornerRadius: "Corner radius" => "Hörn radie"
// theme.fontFamily: "Font family" => "Teckensnitt familj"
// theme.fontWeightRegular: "Regular" => "Ordinarie"
// theme.fontWeightHeavy: "Heavy" => "Tung"
// theme.fontWeightSemiBold: "Semi-bold" => "Halvfet stil"
// theme.fontWeightBold: "Bold" => "Djärv"
// theme.color: "Color" => "Färg"
// theme.placeholderColor: "Placeholder color" => "Platshållarens färg"
// theme.size: "Size" => "Storlek"
// theme.opacity: "Opacity" => "Ogenomskinlighet"
// ed.toolboxFilteredTextPlaceholder: "Type to search..." => "Skriv för att söka..."
// ed.toolboxNoResultsFound: "No results found" => "Inga resultat hittades"
// paneldynamic.tabTitlePlaceholder: "Tab title placeholder" => "Platshållare för flikrubrik"
// theme.--sjs-special-red: "Error messages" => "Felmeddelanden"
// paneldynamic.tabTitlePlaceholder: "A fallback text for tab titles that applies when the tab title pattern doesn't produce a meaningful value." => "En reservtext för flikrubriker som gäller när flikrubrikmönstret inte ger ett meningsfullt värde."
// theme.fontColor: "Font color" => "Teckenfärg"
// theme.backgroundColor: "Background color" => "Bakgrundsfärg"
// pe.questionTitleWidth: "Question title width" => "Bredd på frågerubrik"
// pe.fileInputPlaceholder: "Select a file or paste a file link..." => "Välj en fil eller klistra in en fillänk..."
// panelbase.questionTitleWidth: "Ex.: 200px" => "Ex.: 200px"
// panel.questionTitleWidth: "Sets consistent width for question titles when they are aligned to the left of their question boxes. Accepts CSS values (px, %, in, pt, etc.)." => "Anger konsekvent bredd för frågerubriker när de är justerade till vänster om frågerutorna. Accepterar CSS-värden (px, %, in, pt, etc.)."
// page.questionTitleWidth: "Sets consistent width for question titles when they are aligned to the left of their question boxes. Accepts CSS values (px, %, in, pt, etc.)." => "Anger konsekvent bredd för frågerubriker när de är justerade till vänster om frågerutorna. Accepterar CSS-värden (px, %, in, pt, etc.)."
// pe.commentAreaRows: "Comment area height (in lines)" => "Kommentarsfältets höjd (i rader)"
// pehelp.commentAreaRows: "Sets the number of displayed lines in text areas for question comments. In the input takes up more lines, the scroll bar appears." => "Anger antalet rader som ska visas i textområden för frågekommentarer. I inmatningen tar upp fler rader visas rullningslisten."
// pe.enabled: "Enabled" => "Aktiverat"
// pe.disabled: "Disabled" => "Handikappad"
// pe.inherit: "Inherit" => "Ärva"
// pe.validateVisitedEmptyFields: "Validate empty fields on lost focus" => "Validera tomma fält vid förlorat fokus"
// panellayoutcolumn.effectiveWidth: "Ex.: 30%" => "Ex.: 30%"
// panellayoutcolumn.questionTitleWidth: "Ex.: 200px" => "Ex.: 200px"
// pehelp.validateVisitedEmptyFields: "Enable this option to trigger validation when a user focuses on an empty input field and then leaves it without making any changes." => "Aktivera det här alternativet för att utlösa validering när en användare fokuserar på ett tomt inmatningsfält och sedan lämnar det utan att göra några ändringar."
// pehelp.colCount: "Arranges choice options in a multi-column layout. When set to 0, the options are displayed in a single line." => "Ordnar valalternativ i en layout med flera kolumner. När värdet är 0 visas alternativen på en enda rad."
// theme.isPanelless: "This setting applies only to questions outside of a panel." => "Den här inställningen gäller endast för frågor utanför en panel."
// theme.primaryColor: "Sets a supplementary color that highlights key survey elements." => "Ställer in en extra färg som framhäver viktiga undersökningselement."
// theme.panelBackgroundTransparency: "Adjusts the transparency of panels and question boxes relative to the survey background." => "Justerar transparensen för paneler och frågerutor i förhållande till undersökningens bakgrund."
// theme.questionBackgroundTransparency: "Adjusts the transparency of input elements relative to the survey background." => "Justerar transparensen för indataelement i förhållande till undersökningens bakgrund."
// theme.cornerRadius: "Sets the corner radius for all rectangular elements. Enable the Advanced Mode if you want to set individual corner radius values for input elements or panels and question boxes." => "Anger hörnradien för alla rektangulära element. Aktivera Avancerat läge om du vill ställa in individuella hörnradievärden för inmatningselement eller paneler och frågerutor."
// theme.--sjs-general-backcolor-dim: "Sets the main background color of the survey." => "Ställer in undersökningens huvudsakliga bakgrundsfärg."
// header.inheritWidthFrom: "The \"Same as container\" option auto-adjusts the header content area width to fit into the HTML element the survey is placed in." => "Alternativet \"Samma som behållare\" justerar automatiskt bredden på rubrikens innehållsområde så att det passar in i HTML-elementet som undersökningen placeras i."
// header.textAreaWidth: "The width of the header area that contains the survey title and description, measured in pixels." => "Bredden på rubrikområdet som innehåller undersökningens titel och beskrivning, mätt i pixlar."
// panellayoutcolumn.effectiveWidth: "Accepts values %." => "Accepterar värden %."
// panellayoutcolumn.questionTitleWidth: "Accepts values px." => "Accepterar värdena px."
// p.effectiveColSpan: "Column span" => "Kolumn spännvidd"
// progressBarInheritWidthFrom.survey: "Same as survey" => "Samma som undersökning"
// progressBarInheritWidthFrom.container: "Same as container" => "Samma som behållare"
// file.allowImagesPreview: "Displays thumbnail previews for uploaded files when possible. Unselect if you want to show file icons instead." => "Visar miniatyrbilder av uppladdade filer när det är möjligt. Avmarkera om du vill visa filikoner i stället."
// pehelp.progressBarInheritWidthFrom: "The \"Same as container\" option auto-adjusts the progress bar area width to fit into the HTML element the survey is placed in." => "Alternativet \"Samma som behållare\" justerar automatiskt förloppsindikatorns bredd så att den passar in i HTML-elementet som undersökningen är placerad i."
// p.progressBarInheritWidthFrom: "Progress bar area width" => "Bredd på förloppsindikatorns area"
// maskType.none: "None" => "Ingen"
// maskType.pattern: "Pattern" => "Mönster"
// maskType.numeric: "Numeric" => "Numerisk"
// maskType.datetime: "Date and Time" => "Datum och tid"
// maskType.currency: "Currency" => "Valuta"

// inputTextAlignment.auto: "Auto" => "Bil"
// inputTextAlignment.left: "Left" => "Vänster"
// inputTextAlignment.right: "Right" => "Höger"
// pehelp.inputTextAlignment: "Select how to align input value within the field. The default setting \"Auto\" aligns the input value to the right if currency or numeric masking is applied and to the left if not." => "Välj hur du vill justera indatavärdet i fältet. Standardinställningen \"Auto\" justerar indatavärdet till höger om valutamaskering eller numerisk maskering används och till vänster om inte."
// p.inputTextAlignment: "Input value alignment" => "Justering av indatavärde"
// paneldynamic.showRangeInProgress: "Show the progress bar" => "Visa förloppsindikatorn"
// paneldynamic.showProgressBar: "Show the progress bar" => "Visa förloppsindikatorn"
// paneldynamic.progressBarLocation: "Progress bar alignment" => "Justering av förloppsindikator"
// pv.carousel: "Carousel" => "Karusell"
// progressBarLocation.top: "Top" => "Topp"
// progressBarLocation.bottom: "Bottom" => "Botten"
// progressBarLocation.topBottom: "Top and bottom" => "Topp och botten"
// matrixdropdowncolumn.colCount: "Arranges choice options in a multi-column layout. When set to 0, the options are displayed in a single line. When set to -1, the actual value is inherited from the \"Nested column count\" property of the parent matrix." => "Ordnar valalternativ i en layout med flera kolumner. När värdet är 0 visas alternativen på en enda rad. När värdet är -1 ärvs det faktiska värdet från egenskapen \"Kapslad kolumnantal\" i den överordnade matrisen."
// ed.translationYouTubeNotSupported: "YouTube links are not supported." => "YouTube-länkar stöds inte."
// ed.propertyGridPlaceholderTitle: "Start configuring your form" => "Börja konfigurera formuläret"
// ed.propertyGridPlaceholderDescription: "Click any category icon to explore survey settings. Additional settings will become available once you add a survey element to the design surface." => "Klicka på en kategoriikon för att utforska undersökningsinställningarna. Ytterligare inställningar blir tillgängliga när du lägger till ett undersökningselement på designytan."
// pe.caseInsensitive: "Case insensitive" => "Skiftlägesokänsligt"
// pehelp.caseInsensitive: "Select if uppercase and lowercase letters in the regular expression must be treated as equivalent." => "Välj om versaler och gemener i det reguljära uttrycket ska behandlas som likvärdiga."

// ed.surveyPlaceholderTitle: "Your form is empty" => "Formuläret är tomt"
// ed.surveyPlaceholderTitleMobile: "Your form is empty" => "Formuläret är tomt"
// ed.surveyPlaceholderDescription: "Drag an element from the toolbox or click the button below." => "Dra ett element från verktygslådan eller klicka på knappen nedan."
// ed.surveyPlaceholderDescriptionMobile: "Drag an element from the toolbox or click the button below." => "Dra ett element från verktygslådan eller klicka på knappen nedan."
// ed.previewPlaceholderTitle: "No preview" => "Ingen förhandsgranskning"
// ed.previewPlaceholderTitleMobile: "No preview" => "Ingen förhandsgranskning"
// ed.previewPlaceholderDescription: "The survey doesn't contain any visible elements." => "Undersökningen innehåller inga synliga element."
// ed.previewPlaceholderDescriptionMobile: "The survey doesn't contain any visible elements." => "Undersökningen innehåller inga synliga element."
// ed.translationsPlaceholderTitle: "No strings to translate" => "Inga strängar att översätta"
// ed.translationsPlaceholderTitleMobile: "No strings to translate" => "Inga strängar att översätta"
// ed.translationsPlaceholderDescription: "Add elements to your form or change the strings filter in the toolbar." => "Lägg till element i formuläret eller ändra strängfiltret i verktygsfältet."
// ed.translationsPlaceholderDescriptionMobile: "Add elements to your form or change the strings filter in the toolbar." => "Lägg till element i formuläret eller ändra strängfiltret i verktygsfältet."
// lg.logicPlaceholderTitle: "No logical rules" => "Inga logiska regler"
// lg.logicPlaceholderTitleMobile: "No logical rules" => "Inga logiska regler"
// lg.logicPlaceholderDescription: "Create a rule to customize the flow of the survey." => "Skapa en regel för att anpassa flödet i undersökningen."
// lg.logicPlaceholderDescriptionMobile: "Create a rule to customize the flow of the survey." => "Skapa en regel för att anpassa flödet i undersökningen."
// pe.showTimer: "Use a timer" => "Använd en timer"
// theme.advancedMode: "Advanced mode" => "Avancerat läge"
// pehelp.timerLocation: "Sets the location of a timer on a page." => "Ställer in platsen för en timer på en sida."
// header.mobileHeight: "When set to 0, the height is calculated automatically to accommodate the header's content." => "När värdet är 0 beräknas höjden automatiskt för att passa rubrikens innehåll."
// p.mobileHeight: "Height on smartphones" => "Höjd på smartphones"
// header.overlapEnabled: "When enabled, the top of the survey overlays the bottom of the header." => "När det här alternativet är aktiverat täcker den övre delen av undersökningen den nedre delen av sidhuvudet."
// ed.creatorSettingTitle: "Creator Settings" => "Inställningar för kreatör"
// tabs.accentColors: "Accent colors" => "Accentfärger"
// tabs.scaling: "Scaling" => "Skalning"
// panel.showQuestionNumbers: "Assigns numbers to questions nested within this panel." => "Tilldelar nummer till frågor som är kapslade i den här panelen."
// creatortheme.--sjs-special-background: "Surface background" => "Bakgrund på ytan"
// creatortheme.--sjs-primary-background-500: "Primary" => "Primär"
// creatortheme.--sjs-secondary-background-500: "Secondary" => "Sekundär"
// creatortheme.surfaceScale: "Surface" => "Yta"
// creatortheme.userInterfaceBaseUnit: "User interface" => "Användargränssnitt"
// creatortheme.fontScale: "Font" => "Teckensnitt"
// names.sc2020: "Survey Creator 2020" => "Enkät skapare 2020"
// names.default-light: "Light" => "Ljus"
// names.default-dark: "Dark" => "Mörk"
// names.default-contrast: "Contrast" => "Kontrast"
// panel.showNumber: "Number this panel" => "Numrera den här panelen"
// pehelp.autoAdvanceEnabled: "Select if you want the survey to auto-advance to the next page once a respondent has answered all questions on the current page. This feature won't apply if the last question on the page is open-ended or allows multiple answers." => "Välj om du vill att undersökningen automatiskt ska gå vidare till nästa sida när en svarande har svarat på alla frågor på den aktuella sidan. Den här funktionen gäller inte om den sista frågan på sidan är öppen eller tillåter flera svar."
// autocomplete.name: "Full Name" => "Fullständigt namn"
// autocomplete.honorific-prefix: "Prefix" => "Prefix"
// autocomplete.given-name: "First Name" => "Förnamn"
// autocomplete.additional-name: "Middle Name" => "Mellannamn"
// autocomplete.family-name: "Last Name" => "Efternamn"
// autocomplete.honorific-suffix: "Suffix" => "Suffix"
// autocomplete.nickname: "Nickname" => "Smeknamn"
// autocomplete.organization-title: "Job Title" => "Befattning"
// autocomplete.username: "User Name" => "Användarnamn"
// autocomplete.new-password: "New Password" => "Nytt lösenord"
// autocomplete.current-password: "Current Password" => "Aktuellt lösenord"
// autocomplete.organization: "Organization Name" => "Organisationens namn"
// autocomplete.street-address: "Full Street Address" => "Fullständig gatuadress"
// autocomplete.address-line1: "Address Line 1" => "Adress, rad 1"
// autocomplete.address-line2: "Address Line 2" => "Adress Rad 2"
// autocomplete.address-line3: "Address Line 3" => "Adress: Rad 3"
// autocomplete.address-level4: "Level 4 Address" => "Nivå 4 Adress"
// autocomplete.address-level3: "Level 3 Address" => "Nivå 3 Adress"
// autocomplete.address-level2: "Level 2 Address" => "Nivå 2 Adress"
// autocomplete.address-level1: "Level 1 Address" => "Nivå 1 Adress"
// autocomplete.country: "Country Code" => "Landskod"
// autocomplete.country-name: "Country Name" => "Landets namn"
// autocomplete.postal-code: "Postal Code" => "Postnummer"
// autocomplete.cc-name: "Cardholder Name" => "Kortinnehavarens namn"
// autocomplete.cc-given-name: "Cardholder First Name" => "Kortinnehavarens förnamn"
// autocomplete.cc-additional-name: "Cardholder Middle Name" => "Kortinnehavarens mellannamn"
// autocomplete.cc-family-name: "Cardholder Last Name" => "Kortinnehavarens efternamn"
// autocomplete.cc-number: "Credit Card Number" => "Kreditkortsnummer"
// autocomplete.cc-exp: "Expiration Date" => "Utgångsdatum"
// autocomplete.cc-exp-month: "Expiration Month" => "Förfallomånad"
// autocomplete.cc-exp-year: "Expiration Year" => "Utgångsdatum"
// autocomplete.cc-csc: "Card Security Code" => "Kortets säkerhetskod"
// autocomplete.cc-type: "Credit Card Type" => "Typ av kreditkort"
// autocomplete.transaction-currency: "Transaction Currency" => "Transaktionsvalutan"
// autocomplete.transaction-amount: "Transaction Amount" => "Transaktionens belopp"
// autocomplete.language: "Preferred Language" => "Önskat språk"
// autocomplete.bday: "Birthday" => "Födelsedag"
// autocomplete.bday-day: "Birthday Day" => "Födelsedag"
// autocomplete.bday-month: "Birthday Month" => "Födelsedag Månad"
// autocomplete.bday-year: "Birthday Year" => "Födelsedag År"
// autocomplete.sex: "Gender" => "Genus"
// autocomplete.url: "Website URL" => "Webbadress"
// autocomplete.photo: "Profile Photo" => "Profilbild"
// autocomplete.tel: "Telephone Number" => "Telefonnummer"
// autocomplete.tel-country-code: "Country Code for Phone" => "Landskod för telefon"
// autocomplete.tel-national: "National Telephone Number" => "Nationellt telefonnummer"
// autocomplete.tel-area-code: "Area Code" => "Riktnummer"
// autocomplete.tel-local: "Local Phone Number" => "Lokalt telefonnummer"
// autocomplete.tel-local-prefix: "Local Phone Prefix" => "Prefix för lokal telefon"
// autocomplete.tel-local-suffix: "Local Phone Suffix" => "Suffix för lokal telefon"
// autocomplete.tel-extension: "Phone Extension" => "Telefonanknytning"
// autocomplete.email: "Email Address" => "E-postadress"
// autocomplete.impp: "Instant Messaging Protocol" => "Protokoll för snabbmeddelanden"
// ed.lockQuestionsTooltip: "Lock expand/collapse state for questions" => "Lås expandera/komprimera tillstånd för frågor"
// pe.listIsEmpty@pages: "You don't have any pages yet" => "Du har inga sidor ännu"
// pe.addNew@pages: "Add new page" => "Lägg till ny sida"
// ed.zoomInTooltip: "Zoom In" => "Zooma in"
// ed.zoomOutTooltip: "Zoom Out" => "Zooma ut"
// tabs.surfaceBackground: "Surface Background" => "Yta Bakgrund"
// pe.copyDefaultValueFromLastEntry: "Use answers from the last entry as default" => "Använd svar från den senaste posten som standard"
// colors.gray: "Gray" => "Grå"
// pe.navigationButtonsLocation: "Navigation buttons alignment" => "Justering av navigeringsknappar"
// pv.allQuestions: "Show all questions" => "Visa alla frågor"
// pv.answeredQuestions: "Show answered questions only" => "Visa endast besvarade frågor"
// pehelp.navigationButtonsLocation: "Sets the location of navigation buttons on a page." => "Anger placeringen av navigeringsknapparna på en sida."
// pe.choiceValuesFromQuestion: "Use values from the following matrix column or panel question as choice IDs" => "Använd värden från följande matriskolumn eller panelfråga som val-ID:t"
// pe.choiceTextsFromQuestion: "Use values from the following matrix column or panel question as choice texts" => "Använd värden från följande matriskolumn eller panelfråga som valtexter"
// pehelp.choiceValuesFromQuestion: "In single- and multiple-selection question types, each choice option has an ID and display value. This setting specifies which matrix column or panel question should provide the IDs." => "I frågetyper med ett eller flera val har varje alternativ ett ID och ett visningsvärde. Den här inställningen anger vilken matriskolumn eller panelfråga som ska ange ID:n."
// pehelp.choiceTextsFromQuestion: "In single- and multiple-selection question types, each choice option has an ID and display value. This setting specifies which matrix column or panel question should provide the display texts." => "I frågetyper med ett eller flera val har varje alternativ ett ID och ett visningsvärde. Den här inställningen anger vilken matris-, kolumn- eller panelfråga som ska tillhandahålla visningstexterna."
// pe.progressBarLocation: "Progress bar alignment" => "Justering av förloppsindikator"
// progressBarLocation.topbottom: "Top and bottom" => "Topp och botten"
// progressBarLocation.aboveheader: "Above the header" => "Ovanför sidhuvudet"
// progressBarLocation.belowheader: "Below the header" => "Nedanför sidhuvudet"
// progressBarLocation.off: "Hidden" => "Dold"
// survey.progressBarLocation: "Sets the location of the progress bar. The \"Auto\" value displays the progress bar above or below the survey header." => "Ställer in platsen för förloppsindikatorn. Värdet \"Auto\" visar förloppsindikatorn ovanför eller under undersökningshuvudet."
// survey.readOnly: "Make the survey read-only" => "Gör undersökningen skrivskyddad"
// survey.readOnly: "Select if you want to prevent respondents from filling out your survey." => "Välj om du vill hindra respondenterna från att fylla i din undersökning."
// paneldynamic.showNumber: "Number the panel" => "Numrera panelen"
// question.showNumber: "Number this question" => "Numrera den här frågan"
// pe.previewMode: "Preview mode" => "Förhandsgranska läge"
// pe.gridLayoutEnabled: "Enable the grid layout" => "Aktivera rutnätslayouten"
// pe.maskSettings: "Mask settings" => "Inställningar för mask"
// pe.detailErrorLocation: "Row expansion error message alignment" => "Felmeddelande om radexpansion"
// pehelp.detailErrorLocation: "Sets the location of error messages for questions nested in detail sections. The \"Inherit\" option applies the setting from the \"Error message alignment\" property." => "Anger platsen för felmeddelanden för frågor som är kapslade i detaljavsnitt. Alternativet \"Ärv\" tillämpar inställningen från egenskapen \"Justering av felmeddelande\"."
// pe.gridLayoutColumns: "Grid layout columns" => "Kolumner för rutnätslayout"
// pe.startPageTitlePlaceholder: "Start Page" => "Startsida"
// panellayoutcolumn.effectiveWidth: "Effective width, %" => "Effektiv bredd, %"
// panellayoutcolumn.questionTitleWidth: "Question title width, px" => "Frågans titelbredd, px"
// pe.listIsEmpty@gridLayoutColumns: "You don't have layout columns yet" => "Du har inga layoutkolumner ännu"
// panel.effectiveColSpan: "Specifies how many columns this panel spans within the grid layout." => "Anger hur många kolumner den här panelen sträcker sig över i rutnätslayouten."
// panel.gridLayoutColumns: "This table lets you configure each grid column within the panel. It automatically sets the width percentage for each column based on the maximum number of elements in a row. To customize the grid layout, manually adjust these values and define the title width for all questions in each column." => "I den här tabellen kan du konfigurera varje rutnätskolumn i panelen. Den ställer automatiskt in breddprocenten för varje kolumn baserat på det maximala antalet element i en rad. Om du vill anpassa rutnätslayouten justerar du dessa värden manuellt och definierar rubrikbredden för alla frågor i varje kolumn."
// pehelp.gridLayoutEnabled: "Survey Creator allows you to manually adjust the inline widths of form elements to control the layout. If this doesn't produce the desired outcome, you can enable the grid layout, which structures form elements using a column-based system. To configure layout columns, select a page or panel and use the \"Question Settings\" → \"Grid columns\" table. To adjust how many columns a question spans, select it and set the desired value in the \"Layout\" → \"Column span\" field." => "Med Survey Creator kan du manuellt justera de infogade bredderna på formulärelement för att styra layouten. Om detta inte ger önskat resultat kan du aktivera rutnätslayouten, som strukturerar bildelement med hjälp av ett kolumnbaserat system. För att konfigurera layoutkolumner, välj en sida eller panel och använd tabellen \"Frågeinställningar\" → \"Rutnätskolumner\". För att justera hur många kolumner en fråga sträcker sig över, markera den och ställ in önskat värde i fältet \"Layout\" → \"Kolumnintervall\"."
// question.effectiveColSpan: "Specifies how many columns this question spans within the grid layout." => "Anger hur många kolumner den här frågan sträcker sig över i rutnätslayouten."
// page.gridLayoutColumns: "This table lets you configure each grid column on the page. It automatically sets the width percentage for each column based on the maximum number of elements in a row. To customize the grid layout, manually adjust these values and define the title width for all questions in each column." => "I den här tabellen kan du konfigurera varje rutnätskolumn på sidan. Den ställer automatiskt in breddprocenten för varje kolumn baserat på det maximala antalet element i en rad. Om du vill anpassa rutnätslayouten justerar du dessa värden manuellt och definierar rubrikbredden för alla frågor i varje kolumn."

// ed.expandTooltip: "Expand" => "Expandera"
// ed.collapseTooltip: "Collapse" => "Kollaps"
// pe.itemTitleWidth_placeholder: "Ex.: 100px" => "Ex.: 100px"
// pehelp.itemTitleWidth: "Sets consistent width for all item labels. Accepts CSS values (px, %, in, pt, etc.)." => "Ställer in konsekvent bredd för alla objektetiketter. Accepterar CSS-värden (px, %, in, pt, etc.)."
// ed.zoom100Tooltip: "Zoom to 100%" => "Zooma till 100 %"
// ed.addLanguageTooltip: "Add Language" => "Lägg till språk"
// pehelp.commentAreaRows: "Sets the number of displayed lines in text areas for question comments. If the input takes up more lines, the scroll bar appears." => "Ställer in antalet rader som visas i textområden för frågekommentarer. Om inmatningen tar upp fler rader visas rullningslisten."
// pe.defaultDisplayValue: "Default display value for dynamic texts" => "Standardvisningsvärde för dynamiska texter"
// pehelp.defaultDisplayValue: "A value displayed in HTML questions and in the dynamic titles and descriptions of survey elements when the question value is empty." => "Ett värde som visas i HTML-frågor och i dynamiska titlar och beskrivningar av undersökningselement när frågevärdet är tomt."
// showQuestionNumbers.recursive: "Recursive numbering" => "Rekursiv numrering"
// paneldynamic.templateQuestionTitleWidth: "Question title width" => "Bredd på frågetitel"
// pe.allowCustomChoices: "Allow custom choices" => "Tillåt anpassade val"
// paneldynamic.templateQuestionTitleWidth: "Sets consistent width for question titles when they are aligned to the left of their question boxes. Accepts CSS values (px, %, in, pt, etc.)." => "Ställer in konsekvent bredd för frågetitlar när de är justerade till vänster om sina frågerutor. Accepterar CSS-värden (px, %, in, pt, etc.)."
// page.name: "A page ID that is not visible to respondents." => "Ett sid-ID som inte är synligt för svarande."
// page.description: "Type a page subtitle." => "Skriv en underrubrik på sidan."
// page.navigationTitle: "A caption displayed on a navigation button in the progress bar or table of contents (TOC). If you leave this field empty, the navigation button will use the page title or page name. To enable the progress bar or TOC, go to \"Survey\" → \"Navigation\"." => "En bildtext som visas på en navigeringsknapp i förloppsindikatorn eller innehållsförteckningen. Om du lämnar det här fältet tomt kommer navigeringsknappen att använda sidans titel eller sidnamn. För att aktivera förloppsindikatorn eller innehållsförteckningen, gå till \"Undersökning\" → \"Navigering\"."
// pehelp.allowCustomChoices: "Select to let respondents add their own choices if the desired option isn't available in the dropdown. Custom choices will only be stored temporarily for the duration of the current browser session." => "Välj om du vill att de svarande ska kunna lägga till sina egna alternativ om det önskade alternativet inte är tillgängligt i rullgardinsmenyn. Anpassade val kommer endast att lagras tillfälligt under den aktuella webbläsarsessionen."