import { editorLocalization } from "survey-creator-core";

export var skStrings = {
  // survey templates
  survey: {
    edit: "Upraviť",
    externalHelpLink: "Sledovať a zistiť, ako vytvárať prieskumy",
    externalHelpLinkUrl: "https://www.youtube.com/channel/UCH2ru9okIcooNZfpIbyq4qQ?view_as=subscriber",
    dropQuestion: "Sem zadajte otázku zo súpravy nástrojov.",
    addLogicItem: "Vytvoriť pravidlo prispôsobenia priebehu prieskumu.",
    copy: "Kopírovať",
    duplicate: "Duplikovať",
    addToToolbox: "Pridať do súpravy nástrojov",
    deletePanel: "Odstrániť panel",
    deleteQuestion: "Odstrániť otázku",
    convertTo: "Konvertovať na",
    drag: "Presunúť prvok",
  },
  // Question types
  qt: {
    default: "Predvolené",
    checkbox: "Začiarkavacie políčko",
    comment: "Komentár",
    imagepicker: "Nástroj na výber obrázkov",
    ranking: "Hodnotenie",
    image: "Obrázok",
    dropdown: "Rozbaľovací zoznam",
    tagbox: "Rozbaľovacia ponuka viacerých výberov",
    file: "Súbor",
    html: "Html",
    matrix: "Matica (jedna možnosť)",
    matrixdropdown: "Matica (viacero možností)",
    matrixdynamic: "Matica (dynamické riadky)",
    multipletext: "Text pri viacerých možnostiach",
    panel: "Panel",
    paneldynamic: "Panel (dynamické panely)",
    radiogroup: "Skupina tlačidiel",
    rating: "Hodnotenie",
    text: "Jeden vstup",
    boolean: "Yes/No (Boolean)",
    expression: "Výraz (iba na čítanie)",
    signaturepad: "Priestor na podpis",
    buttongroup: "Skupina tlačidiel"
  },
  // Strings in SurveyJS Creator
  ed: {
    defaultLocale: "Predvolené ({0})",
    survey: "Prieskum",
    settings: "Nastavenia prieskumu",
    settingsTooltip: "Otvoriť nastavenia prieskumu",
    surveySettings: "Nastavenia prieskumu",
    surveySettingsTooltip: "Nastavenia prieskumu",
    themeSettings: "Nastavenia motívu",
    themeSettingsTooltip: "Nastavenia motívu",
    showPanel: "Zobraziť panel",
    hidePanel: "Skryť panel",
    prevSelected: "Výber predchádzajúceho",
    nextSelected: "Vyberte položku Ďalej",
    prevFocus: "Zameranie predchádzajúce",
    nextFocus: "Zameranie ďalej",
    surveyTypeName: "Prieskum",
    pageTypeName: "Strana",
    panelTypeName: "Bledý.",
    questionTypeName: "Otázka",
    columnTypeName: "Stĺpec",
    addNewPage: "Pridať novú stranu",
    moveRight: "Prejsť vpravo",
    moveLeft: "Prejsť vľavo",
    deletePage: "Odstrániť stranu",
    editPage: "Upraviť stranu",
    edit: "Upraviť",
    newPageName: "stránka",
    newQuestionName: "otázka",
    newPanelName: "panel",
    newTextItemName: "text",
    testSurvey: "Textový prieskum",
    themeSurvey: "Témy",
    defaultV2Theme: "Predvolený",
    modernTheme: "Moderný",
    defaultTheme: "Predvolené nastavenie (staršia verzia)",
    testSurveyAgain: "Ďalší textový prieskum",
    testSurveyWidth: "Šírka prieskumu: ",
    navigateToMsg: "Museli ste prejsť na:",
    logic: "Logika prieskumu",
    embedSurvey: "Začleniť prieskum",
    translation: "Preklad",
    saveSurvey: "Uložiť prieskum",
    saveSurveyTooltip: "Uložiť prieskum",
    saveTheme: "Uložiť motív",
    saveThemeTooltip: "Uložiť motív",
    designer: "Návrhár prieskumov",
    jsonEditor: "Editor JSON",
    jsonHideErrors: "Skryť chyby",
    jsonShowErrors: "Zobraziť chyby",
    undo: "Späť",
    redo: "Opakovať",
    undoTooltip: "Zrušiť poslednú zmenu",
    redoTooltip: "Opakovať zmenu",
    showMoreChoices: "Zobraziť viac",
    showLessChoices: "Zobraziť menej",
    copy: "Kopírovať",
    cut: "Vystrihnúť",
    paste: "Prilepiť",
    copyTooltip: "Kopírovať výber do schránky",
    cutTooltip: "Vystrihnúť výber do schránky",
    pasteTooltip: "Prilepiť zo schránky",
    options: "Možnosti",
    generateValidJSON: "Vygenerovať platný JSON",
    generateReadableJSON: "Vygenerovať načítateľný JSON",
    toolbox: "Súprava nástrojov",
    "property-grid": "Vlastnosti",
    propertyGridFilteredTextPlaceholder: "Zadajte reťazec pre vyhľadávanie...",
    propertyGridNoResultsFound: "Nenašli sa žiadne výsledky",
    toolboxGeneralCategory: "Všeobecné",
    toolboxChoiceCategory: "Voľba Otázky",
    toolboxTextCategory: "Otázky na zadávanie textu",
    toolboxContainersCategory: "Kontajnery",
    toolboxMatrixCategory: "Maticové otázky",
    toolboxMiscCategory: "Misc",
    correctJSON: "Opravte JSON.",
    surveyResults: "Výsledok prieskumu: ",
    surveyResultsTable: "Ako tabuľku",
    surveyResultsJson: "Ako JSON",
    resultsTitle: "Titul otázky",
    resultsName: "Názov otázky",
    resultsValue: "Hodnota odpovede",
    resultsDisplayValue: "Zobraziť hodnotu",
    modified: "Upravené",
    saving: "Ukladanie",
    saved: "Uložené",
    propertyEditorError: "Chyba:",
    saveError: "Chyba! Obsah editora sa neuložil.",
    translationPropertyGridTitle: "Nastavenia jazyka",
    themePropertyGridTitle: "Nastavenia motívu",
    translationLanguages: "Jazyky",
    translationDeleteLanguage: "Ste si istý, že chcete odstrániť všetky reťazce pre tento jazyk?",
    translationAddLanguage: "Výber jazyka na preklad",
    translationShowAllStrings: "Zobraziť všetky reťazce",
    translationShowUsedStringsOnly: "Iba použité reťazce",
    translationShowAllPages: "Zobraziť všetky stránky",
    translationNoStrings: "Žiadne reťazce na preklad. Zmeňte filter.",
    translationExportToSCVButton: "Exportovať do CSV",
    translationImportFromSCVButton: "Importovať z CSV",
    translateUsigAI: "Automatický preklad všetkého",
    translateUsigAIFrom: "Preložiť z: ",
    translationDialogTitle: "Nepreložené reťazce",
    translationMergeLocaleWithDefault: "Zlúčiť {0} s predvoleným miestnym nastavením",
    translationPlaceHolder: "Preklad...",
    themeExportButton: "Vývoz",
    themeImportButton: "Import",
    surveyJsonExportButton: "Vývoz",
    surveyJsonImportButton: "Import",
    surveyJsonCopyButton: "Kopírovanie do schránky",
    themeResetButton: "Obnovenie predvolených nastavení motívu",
    themeResetConfirmation: "Naozaj chcete resetovať tému? Všetky vaše prispôsobenia sa stratia.",
    themeResetConfirmationOk: "Áno, obnoviť motív",
    bold: "Tučné",
    italic: "Kurzíva",
    underline: "Podčiarknutie",
    addNewQuestion: "Pridať otázku",
    selectPage: "Vybrať stránku...",
    carryForwardChoicesCopied: "Voľby sa kopírujú z",
    choicesLoadedFromWebText: "Možnosti sa načítavajú z webovej služby.",
    choicesLoadedFromWebLinkText: "Prejdite na nastavenia",
    choicesLoadedFromWebPreviewTitle: "Ukážka načítaných možností výberu",
    htmlPlaceHolder: "Obsah HTML bude tu.",
    panelPlaceHolder: "Tu položte otázku z panela nástrojov.",
    surveyPlaceHolder: "Prieskum je prázdny. Potiahnite prvok z panela s nástrojmi alebo kliknite na tlačidlo nižšie.",
    imagePlaceHolder: "Presuňte obrázok sem alebo kliknite na tlačidlo nižšie a vyberte obrázok, ktorý chcete nahrať",
    imageChooseImage: "Vyberte obrázok",
    addNewTypeQuestion: "Pridať {0}", //{0} is localizable question type
    chooseLogoPlaceholder: "[LOGO]",
    auto: "auto",
    choices_Item: "Položka ",
    lg: {
      addNewItem: "Pridať nové pravidlo",
      empty_tab: "Vytvorte pravidlo na prispôsobenie toku prieskumu.",
      page_visibilityName: "Viditeľnosť strany",
      page_enableName: "Povoliť (zakázať) stránku",
      page_requireName: "Nastavenie požadovanej strany",
      panel_visibilityName: "Viditeľnosť panela",
      panel_enableName: "Panel povoliť/zakázať",
      panel_requireName: "Nastavenie požadovanej strany",
      question_visibilityName: "Viditeľnosť otázky",
      question_enableName: "Otázku povoliť/zakázať",
      question_requireName: "Vyžaduje sa voliteľná otázka",
      question_resetValueName: "Obnoviť hodnotu otázky",
      question_setValueName: "Nastavenie hodnoty otázky",
      column_visibilityName: "Zobraziť (skryť) stĺpec",
      column_enableName: "Povoliť (zakázať) stĺpec",
      column_requireName: "Nastavenie povinného stĺpca",
      column_resetValueName: "Obnovenie hodnoty stĺpca",
      column_setValueName: "Nastavenie hodnoty stĺpca",
      trigger_completeName: "Dokončiť prieskum",
      trigger_setvalueName: "Nastaviť hodnotu otázky",
      trigger_copyvalueName: "Kopírovať hodnotu otázky",
      trigger_skipName: "Prejsť na otázku",
      trigger_runExpressionName: "Spustiť vlastný výraz",
      completedHtmlOnConditionName: "Vlastný text stránky s poďakovaním",
      page_visibilityDescription: "Stránka bude viditeľná, keď logický výraz vráti hodnotu true. V opačnom prípade sa nebude zobrazovať.",
      panel_visibilityDescription: "Panel bude viditeľný, keď logický výraz vráti hodnotu true. V opačnom prípade sa nebude zobrazovať.",
      panel_enableDescription: "Panel a všetky jeho prvky sa povolia, keď logický výraz vráti hodnotu true. V opačnom prípade budú zakázané.",
      question_visibilityDescription: "Otázka bude viditeľná, keď logický výraz vráti hodnotu true. V opačnom prípade sa nebude zobrazovať.",
      question_enableDescription: "Otázka sa povolí, keď logický výraz vráti hodnotu true. V opačnom prípade zostane zakázaná.",
      question_requireDescription: "Otázka bude povinná, keď logický výraz vráti hodnotu true.",
      trigger_completeDescription: "Keď logický výraz vráti hodnotu true, prieskum bude dokončený a používateľovi sa zobrazí stránka s poďakovaním.",
      trigger_setvalueDescription: "V prípade, že sa zmenia hodnoty, ktoré sa používajú v rámci logického výrazu, a logický výraz vráti hodnotu true, pre vybratú otázku sa nastaví daná hodnota.",
      trigger_copyvalueDescription: "V prípade, že sa zmenia hodnoty otázok, ktoré sa používajú v rámci logického výrazu, a logický výraz vráti hodnotu true, hodnota jednej vybratej otázky sa skopíruje na ďalšiu vybratú otázku.",
      trigger_skipDescription: "Keď logický výraz vráti hodnotu true, prieskum prejde/nastaví sa na vybratú otázku.",
      trigger_runExpressionDescription: "Keď logický výraz vráti hodnotu true, vykoná sa vlastný výraz. Voliteľne môžete nastaviť tento výraz na vybratú otázku.",
      completedHtmlOnConditionDescription: "Keď logický výraz vráti hodnotu true, predvolený text na stránke s poďakovaním sa zmení na zadaný text.",
      itemExpressionText: "Keď výraz: „{0}“ vráti hodnotu true:", //{0} - the expression
      itemEmptyExpressionText: "Nové pravidlo",
      page_visibilityText: "Stránka {0} bude viditeľná", //{0} page name
      panel_visibilityText: "Panel {0} bude viditeľný", //{0} panel name
      panel_enableText: "Panel {0} bude povolený", //{0} panel name
      question_visibilityText: "Otázka {0} bude viditeľná", //{0} question name
      question_enableText: "Otázka {0} bude povolená", //{0} question name
      question_requireText: "Otázka {0} sa bude vyžadovať", //{0} question name
      question_resetValueText: "Resetovať hodnotu pre otázku: {0}",
      question_setValueText: "Priradiť hodnotu: {1} otázku: {0}",
      column_visibilityText: "Zviditeľnenie stĺpcových {0} otázok {1}", //{0} column name, {1} question name
      column_enableText: "Nastavenie {0}  otázky {1} povolenie", //{0} column name, {1} question name
      column_requireText: "Urobiť stĺpec {0} otázky {1} povinné", //{0} column name, {1} question name
      column_resetValueText: "Obnoviť hodnotu bunky pre stĺpec: {0}",
      column_setValueText: "Priradenie hodnoty bunky: {1} do stĺpca: {0}",
      setValueExpressionPlaceholder: " Výraz, ktorého výsledok bude priradený k cieľovej otázke.",
      trigger_completeText: "Prieskum bude dokončený",
      trigger_setvalueText: "Nastaviť v otázke: {0} hodnotu {1}", //{0} question name, {1} setValue
      trigger_setvalueEmptyText: "jasná hodnota otázky: {0}", //{0} question name
      trigger_copyvalueText: "Kopírovať do otázky: {0} hodnotu z otázky {1}", //{0} and {1} question names
      trigger_skipText: "V prieskume prejsť na otázku {0}", //{0} question name
      trigger_runExpressionText1: "Spustiť výraz: „{0}“", //{0} the expression
      trigger_runExpressionText2: " a nastaviť výsledok v otázke: {0}", //{0} question name
      completedHtmlOnConditionText: "Zobraziť vlastný text pre stránku s poďakovaním.",
      showAllQuestions: "Všetky otázky",
      showAllActionTypes: "Všetky typy akcií",
      conditions: "Podmienka(-y)",
      actions: "Akcia(-e)",
      expressionEditorTitle: "Definovať podmienku(-y)",
      actionsEditorTitle: "Definovať akciu(-e)",
      deleteAction: "Odstrániť akciu",
      addNewAction: "Pridať novú akciu",
      selectedActionCaption: "Vybrať akciu na pridanie...",
      expressionInvalid: "Logický výraz je prázdny alebo neplatný. Opravte ho.",
      noActionError: "Pridajte aspoň jednu akciu.",
      actionInvalid: "Odstráňte problémy v akcii(-ách).",
      uncompletedRule_title: "Logické pravidlá sú neúplné",
      uncompletedRule_text: "Nedokončili ste niektoré logické pravidlá. Ak kartu teraz opustíte, zmeny sa stratia. Stále chcete opustiť kartu bez dokončenia zmien?",
      uncompletedRule_apply: "Áno",
      uncompletedRule_cancel: "Nie, chcem dokončiť pravidlá"
    }
  },
  // Property Editors
  pe: {
    apply: "Použiť",
    ok: "OK",
    save: "Uložiť",
    clear: "Jasný",
    saveTooltip: "Uložiť",
    cancel: "Zrušiť",
    set: "Množina",
    reset: "Obnovenie pôvodného nastavenia",
    change: "Zmeniť",
    refresh: "Obnoviť",
    close: "Zavrieť",
    delete: "Vymazať",
    add: "Pridať",
    addNew: "Pridať nové",
    addItem: "Kliknutím pridať položku...",
    removeItem: "Kliknutím položku odstránite...",
    dragItem: "Potiahnite položku",
    addOther: "Iné",
    addSelectAll: "Vybrať všetky",
    addNone: "Žiadne",
    removeAll: "Odstrániť všetko",
    edit: "Upraviť",
    back: "Návrat bez uloženia",
    backTooltip: "Návrat bez uloženia",
    saveAndBack: "Uložiť a vrátiť sa",
    saveAndBackTooltip: "Uložiť a vrátiť sa",
    doneEditing: "Robené",
    editChoices: "Upraviť možnosti",
    showChoices: "Zobraziť možnosti",
    move: "Presunúť",
    empty: "<empty>",
    emptyValue: "Hodnota je prázdna",
    fastEntry: "Rýchle zadanie",
    fastEntryNonUniqueError: "Hodnota \"{0}\" nie je jedinečná",
    fastEntryChoicesCountError: "Obmedzte počet položiek od {0} do {1}",
    fastEntryChoicesMinCountError: "Zadajte aspoň {0} položiek",
    fastEntryPlaceholder: "Údaje môžete nastaviť v nasledujúcom formáte:\nhodnota1|text\nhodnota2",
    formEntry: "Zadanie formulára",
    testService: "Test služby",
    itemSelectorEmpty: "Vyberte prvok",
    conditionActionEmpty: "Vyberte akciu",
    conditionSelectQuestion: "Vybrať otázku...",
    conditionSelectPage: "Vybrať stránku...",
    conditionSelectPanel: "Vybrať panel...",
    conditionValueQuestionTitle: "Zadajte/vyberte hodnotu",
    expressionHelp: "Pomocou zložených zátvoriek môžete získať prístup k hodnotám otázok: {question1} + {question2}, ({price}*{quantity}) * (100 - {discount}). Môžete používať funkcie ako: iif(), today(), age(), min(), max(), count(), avg() a iné.",
    aceEditorHelp: "Klávesovou skratkou ctrl+space získate tip na dokončenie výrazu",
    aceEditorRowTitle: "Aktuálny riadok",
    aceEditorPanelTitle: "Aktuálny panel",
    showMore: "Ďalšie podrobnosti nájdete v dokumentácii",
    assistantTitle: "Dostupné otázky:",
    cellsEmptyRowsColumns: "K dispozícii má byť aspoň jeden stĺpec alebo riadok",
    showPreviewBeforeComplete: "Pozrite si ukážku odpovedí pred odoslaním prieskumu",
    overridingPropertyPrefix: "Nastaviť ",
    resetToDefaultCaption: "Vynulovanie",
    propertyIsEmpty: "Zadajte hodnotu",
    propertyIsNoUnique: "Zadajte jedinečnú hodnotu",
    propertyNameIsNotUnique: "Zadajte jedinečný názov",
    propertyNameIsIncorrect: "Nepoužívajte vyhradené slová: \"položka\", \"výber\", \"panel\", \"riadok\".",
    listIsEmpty: "Pridajte novú položku",
    "listIsEmpty@choices": "Zatiaľ neboli pridané žiadne možnosti",
    "addNew@choices": "Pridať výber",
    expressionIsEmpty: "Výraz je prázdny",
    value: "Hodnota",
    text: "Text",
    rowid: "ID riadka",
    imageLink: "Odkaz na obrázok",
    columnEdit: "Upraviť stĺpec: {0}",
    itemEdit: "Upraviť položku: {0}",
    url: "URL",
    path: "Cesta",
    valueName: "Názov hodnoty",
    choicesbyurl: {
      valueName: "Získanie hodnôt z nasledujúceho poľa JSON"
    },
    titleName: "Titulný názov",
    imageLinkName: "Získanie webových adries obrázkov z nasledujúceho poľa JSON",
    allowEmptyResponse: "Povoliť prázdnu odozvu",
    titlePlaceholder: "Sem zadajte titul",
    surveyTitlePlaceholder: "Sem vložte titul prieskumu",
    pageTitlePlaceholder: "Sem zadajte titul stránky",
    descriptionPlaceholder: "Zadať opis",
    surveyDescriptionPlaceholder: "Zadať opis prieskumu",
    pageDescriptionPlaceholder: "Zadať opis stránky",
    showOtherItem: "Obsahuje inú položku",
    otherText: "Text inej položky",
    showNoneItem: "Neobsahuje žiadnu položku",
    showRefuseItem: "Povoliť možnosť Odmietnuť odpovedať",
    showDontKnowItem: "Povoliť možnosť Neviem",
    noneText: "Text pri žiadnej položke",
    showSelectAllItem: "Obsahuje vybraté všetky položky",
    selectAllText: "Text pri výbere všetkých položiek",
    choicesMin: "Minimálna hodnota pre automaticky vygenerované položky",
    choicesMax: "Maximálna hodnota pre automaticky vygenerované položky",
    choicesStep: "Rozdiel medzi automaticky vygenerovanými položkami",
    name: "Názov",
    title: "Titul",
    cellType: "Typ bunky",
    colCount: "Počet stĺpcov",
    choicesOrder: "Poradie vybratých možností",
    visible: "Je viditeľné?",
    isRequired: "Vyžaduje sa?",
    markRequired: "Označiť podľa potreby",
    removeRequiredMark: "Odstráňte požadovanú značku",
    isAllRowRequired: "Vyžadovať odpoveď pre všetky riadky",
    eachRowUnique: "Zabráňte duplicitným odpovediam v riadkoch",
    requiredErrorText: "Text chyby pri povinných položkách",
    startWithNewLine: "Začína sa novým riadkom?",
    rows: "Počet riadkov",
    cols: "Počet stĺpcov",
    placeholder: "Vložiť zástupný symbol",
    showPreview: "Zobraziť oblasť náhľadu",
    storeDataAsText: "Uložiť obsahu súboru vo výsledku JSON ako text",
    maxSize: "Maximálna veľkosť súboru v bajtoch",
    imageHeight: "Výška obrázka",
    imageWidth: "Šírka obrázka",
    rowCount: "Počet riadkov",
    columnLayout: "Rozloženie stĺpcov",
    addRowLocation: "Poloha tlačidla na pridanie riadka",
    addRowText: "Text tlačidla na pridanie riadka",
    removeRowText: "Text tlačidla na odstránenie riadka",
    rateMin: "Minimálne hodnotenie",
    rateMax: "Maximálne hodnotenie",
    rateStep: "Krok hodnotenia",
    minRateDescription: "Opis minimálneho hodnotenia",
    maxRateDescription: "opis maximálneho hodnotenia",
    inputType: "Typ vstupu",
    optionsCaption: "Titulok možností",
    defaultValue: "Predvolená hodnota",
    cellsDefaultRow: "Predvolené texty buniek",
    surveyEditorTitle: "Upraviť nastavenia prieskumu",
    qEditorTitle: "Upraviť: {0}",
    maxLength: "Maximálna dĺžka",
    buildExpression: "Zostaviť",
    editExpression: "Upraviť",
    and: "a",
    or: "alebo",
    remove: "Odstrániť",
    addCondition: "Pridať podmienku",
    emptyLogicPopupMessage: "Vyberte otázku a začnite konfigurovať podmienky.",
    if: "Ak",
    then: "potom",
    setToName: "Cieľová otázka",
    fromName: "Otázka na kopírovanie odpovede",
    gotoName: "Otázka na preskočenie",
    ruleIsNotSet: "Pravidlo je nesprávne",
    includeIntoResult: "Zahrňte do výsledkov prieskumu",
    showTitle: "Zobraziť/skryť titul",
    expandCollapseTitle: "Rozbaliť/zbaliť titul",
    locale: "Predvolený jazyk",
    simulator: "Vybrať zariadenie",
    landscapeOrientation: "Na šírku",
    portraitOrientation: "Prepnutie na orientáciu na výšku",
    mode: "Režim (upraviť/iba na čítanie)",
    clearInvisibleValues: "Odstrániť neviditeľné hodnoty",
    cookieName: "Názov súboru cookie (na zabránenie lokálneho spustenia prieskumu dvakrát)",
    sendResultOnPageNext: "Odoslať výsledky prieskumu na ďalšiu stránku",
    storeOthersAsComment: "Uložiť hodnotu „iné“ v samostatnom poli",
    showPageTitles: "Zobraziť tituly stránok",
    showPageNumbers: "Zobraziť čísla stránok",
    pagePrevText: "Text tlačidla pre predchádzajúcu stránku",
    pageNextText: "Text tlačidla pre ďalšiu stránku",
    completeText: "Text tlačidla dokončenia",
    previewText: "Text tlačidla ukážky",
    editText: "Text tlačidla úpravy",
    startSurveyText: "Text tlačidla spustenia",
    showNavigationButtons: "Zobraziť navigačné tlačidlá (predvolená navigácia)",
    showPrevButton: "Zobraziť tlačidlo predchádzajúce (používateľ sa môže vráiť na predchádzajúcu stránku)",
    firstPageIsStarted: "Prvá stránka v prieskume je úvodná stránka.",
    showCompletedPage: "Na konci zobraziť stránku s dokončením (completedHtml)",
    goNextPageAutomatic: "Po zodpovedaní všetkých otázok prejsť na ďalšiu stránku automaticky",
    showProgressBar: "Zobraziť indikátor priebehu",
    questionTitleLocation: "Poloha titulu otázky",
    requiredText: "Povinný symbol(-y) otázok",
    questionStartIndex: "Otázka sa začína indexom (1, 2 alebo „A“, „a“)",
    showQuestionNumbers: "Zobraziť čísla otázok",
    questionTitleTemplate: "Šablóna titulu otázky, predvolená je:  „{no}. {require} {title}“",
    questionErrorLocation: "Poloha chyby otázky",
    focusFirstQuestionAutomatic: "Prechod na prvú otázku pri zmene stránky",
    questionsOrder: "Poradie prvkov na stránke",
    maxTimeToFinish: "Maximálny čas na dokončenie prieskumu",
    maxTimeToFinishPage: "Maximálny čas na dokončenie stránky v rámci prieskumu",
    image: {
      imageHeight: "Výška snímky (v hodnotách akceptovaných šablónou CSS)",
      imageWidth: "Šírka obrázka (v akceptovaných hodnotách CSS)"
    },
    // survey templates
    survey: {
      title: "Titul"
    },
    page: {
      title: "Titul",
      maxTimeToFinish: "Časový limit na dokončenie stránky (v sekundách)"
    },
    question: {
      page: "Nadradená stránka"
    },
    showTimerPanel: "Zobraziť panel s časovačom",
    showTimerPanelMode: "Zobraziť režim panela s časovačom",
    renderMode: "Režim vykresľovania",
    allowAddPanel: "Povoliť pridanie panela",
    allowRemovePanel: "Povoliť odstránenie panela",
    noEntriesText: "Text prázdnych položiek",
    panelAddText: "Text pri pridaní panela",
    panelRemoveText: "Text pri odstránení panela",
    isSinglePage: "Zobraziť všetky prvky na jednej stránke",
    html: "Html",
    expression: "Výraz",
    setValue: "Odpoveď",
    dataFormat: "Formát obrázka",
    allowAddRows: "Povoliť pridávanie riadkov",
    allowRemoveRows: "Povoliť odstránenie riadkov",
    allowRowsDragAndDrop: "Povoliť presúvanie riadkov",
    responsiveImageSizeHelp: "Neuplatňuje sa, ak zadáte presnú šírku alebo výšku obrázka.",
    minImageWidth: "Minimálna šírka obrázka",
    maxImageWidth: "Maximálna šírka obrázka",
    minImageHeight: "Minimálna výška obrázka",
    maxImageHeight: "Maximálna výška obrázka",
    minValue: "Minimálna hodnota",
    maxValue: "Maximálna hodnota",
    minLength: "Minimálna dĺžka",
    allowDigits: "Povoliť čísla",
    minCount: "Minimálny počet",
    maxCount: "Maximálny počet",
    regex: "Regulárny výraz",
    surveyvalidator: {
      text: "Chybové hlásenie",
      expression: "Overovací výraz"
    },
    totalText: "Celkom – text",
    totalType: "Celkom – typ",
    totalExpression: "Celkom – výraz",
    totalDisplayStyle: "Celkom – štýl zobrazenia",
    totalCurrency: "Celkom – mena",
    totalFormat: "Celkom – formát",
    logo: "Logo (reťazec s kódovaním URL alebo base64)",
    questionsOnPageMode: "Štruktúra prieskumu",
    maxTextLength: "Maximálna dĺžka odpovede (v znakoch)",
    maxOthersLength: "Maximálna dĺžka komentára (v znakoch)",
    autoGrowComment: "V prípade potreby automaticky rozbaľte oblasť komentárov",
    allowResizeComment: "Povolenie používateľom meniť veľkosť textových oblastí",
    textUpdateMode: "Aktualizácia hodnoty textovej otázky",
    focusOnFirstError: "Zameranie na prvú neplatnú odpoveď",
    checkErrorsMode: "Spustenie overenia pravosti",
    navigateToUrl: "Prejsť na adresu URL",
    navigateToUrlOnCondition: "Dynamická webová adresa",
    completedBeforeHtml: "Značky na zobrazenie, či používateľ už vyplnil tento prieskum",
    completedHtml: "Značenie stránky dokončenia prieskumu",
    completedHtmlOnCondition: "Dynamický prieskum Kompletné značenie stránky",
    loadingHtml: "Značenie, ktoré sa zobrazí počas načítavania modelu prieskumu",
    commentText: "Text oblasti komentárov",
    autocomplete: "Typ automatického dokončovania",
    labelTrue: "Označenie \"Pravda\"",
    labelFalse: "Označenie \"False\"",
    allowClear: "Zobraziť titulok možností",
    displayStyle: "Štýl zobrazenia hodnoty",
    format: "Formátovaný reťazec",
    maximumFractionDigits: "Maximálny zlomkový počet číslic",
    minimumFractionDigits: "Minimálne zlomkové číslice",
    useGrouping: "Oddeľovače zoskupení zobrazení",
    allowMultiple: "Povolenie viacerých súborov",
    allowImagesPreview: "Ukážka obrázkov",
    acceptedTypes: "Akceptované typy súborov",
    waitForUpload: "Počkajte na dokončenie nahrávania",
    needConfirmRemoveFile: "Potvrďte odstránenie súboru",
    detailPanelMode: "Umiestnenie panela s podrobnosťami",
    minRowCount: "Minimálny počet riadkov",
    maxRowCount: "Maximálny počet riadkov",
    confirmDelete: "Potvrdenie odstránenia riadka",
    confirmDeleteText: "Potvrdzovacia správa",
    paneldynamic: {
      confirmDelete: "Potvrdenie odstránenia panela"
    },
    panelCount: "Počiatočný počet panelov",
    minPanelCount: "Minimálny počet panelov",
    maxPanelCount: "Maximálny počet panelov",
    panelsState: "Stav rozbalenia vnútorného panela",
    templateDescription: "Šablóna popisu",
    templateTitle: "Šablóna názvu",
    panelPrevText: "Popis tlačidla Predchádzajúci panel",
    panelNextText: "Popis tlačidla Nasledujúci panel",
    showRangeInProgress: "Zobraziť indikátor priebehu",
    templateTitleLocation: "Otázka, názov, umiestnenie:",
    panelRemoveButtonLocation: "Odstrániť umiestnenie tlačidla panela",
    hideIfRowsEmpty: "Skryť otázku, ak nie sú žiadne riadky",
    hideColumnsIfEmpty: "Skryť stĺpce, ak nie sú k dispozícii žiadne riadky",
    rateValues: "Vlastné hodnoty sadzieb",
    rateCount: "Počet sadzieb",
    autoGenerate: "Ako určiť hodnoty sadzieb?",
    hideIfChoicesEmpty: "Skryť otázku, ak neobsahuje žiadne možnosti",
    hideNumber: "Skryť číslo otázky",
    minWidth: "Minimálna šírka (v hodnotách akceptovaných CSS)",
    maxWidth: "Maximálna šírka (v hodnotách akceptovaných CSS)",
    width: "Šírka (v akceptovaných hodnotách CSS)",
    showHeader: "Zobrazenie hlavičiek stĺpcov",
    horizontalScroll: "Zobraziť vodorovný posúvač",
    columnMinWidth: "Minimálna šírka stĺpca (v hodnotách akceptovaných CSS)",
    rowTitleWidth: "Šírka hlavičky riadka (v hodnotách akceptovaných CSS)",
    valueTrue: "Hodnota \"True\"",
    valueFalse: "Hodnota \"False\"",
    minErrorText: "Chybové hlásenie \"Hodnota je nižšia ako minimum\"",
    maxErrorText: "Chybové hlásenie \"Hodnota prekračuje maximum\"",
    otherErrorText: "Chybové hlásenie \"Prázdny komentár\"",
    keyDuplicationError: "Chybové hlásenie \"Nejedinečná kľúčová hodnota\"",
    minSelectedChoices: "Minimálny počet vybraných možností",
    maxSelectedChoices: "Maximálny počet vybraných možností",
    showClearButton: "Zobrazenie tlačidla Vymazať",
    showNumber: "Zobraziť číslo panela",
    logoWidth: "Šírka loga (v akceptovaných hodnotách CSS)",
    logoHeight: "Výška loga (v hodnotách akceptovaných CSS)",
    readOnly: "Iba na čítanie",
    enableIf: "Upraviteľné, ak",
    emptyRowsText: "Správa \"Žiadne riadky\"",
    size: "Veľkosť vstupného poľa (v znakoch)",
    separateSpecialChoices: "Samostatné špeciálne možnosti (Žiadne, Iné, Vybrať všetko)",
    choicesFromQuestion: "Skopírujte voľby z nasledujúcej otázky",
    choicesFromQuestionMode: "Aké možnosti kopírovať?",
    showCommentArea: "Zobrazenie oblasti komentárov",
    commentPlaceholder: "Zástupný symbol oblasti komentárov",
    displayRateDescriptionsAsExtremeItems: "Popisy rýchlosti zobrazenia ako extrémnych hodnôt",
    rowsOrder: "Poradie riadkov",
    columnsLayout: "Rozloženie stĺpcov",
    columnColCount: "Vnorený počet stĺpcov",
    state: "Stav rozbalenia panela",
    correctAnswer: "Správna odpoveď",
    defaultPanelValue: "Predvolené hodnoty",
    cells: "Texty buniek",
    keyName: "Stĺpec kľúča",
    itemvalue: {
      text: "Alternatívny text"
    },
    logoPosition: "Poloha loga",
    addLogo: "Pridať logo...",
    changeLogo: "Zmeniť logo...",
    logoPositions: {
      none: "Odstrániť logo",
      left: "Vľavo",
      right: "Vpravo",
      top: "V hornej časti",
      bottom: "V spodnej časti"
    },
    tabs: {
      general: "Všeobecné",
      fileOptions: "Možnosti",
      html: "Editor Html",
      columns: "Stĺpce",
      rows: "Riadky",
      choices: "Možnosti",
      items: "Položky",
      visibleIf: "Viditeľné ak",
      enableIf: "Povoliť ak",
      requiredIf: "Povinné ak",
      rateValues: "Hodnoty hodnotenia",
      choicesByUrl: "Možnosti z webu",
      matrixChoices: "Predvolené možnosti",
      multipleTextItems: "Zadania textu",
      numbering: "Číslovanie",
      validators: "Overovatelia",
      navigation: "Navigácia",
      question: "Otázka",
      pages: "Stránky",
      timer: "Časovač/kvíz",
      calculatedValues: "Vypočítané hodnoty",
      triggers: "Aktivátory",
      templateTitle: "Titul šablóny",
      totals: "Celkové hodnoty",
      logic: "Logický výraz",
      layout: "Rozloženie",
      data: "Údaje",
      validation: "Overenie",
      cells: "Bunky",
      showOnCompleted: "Zobraziť pri dokončení",
      logo: "Logo v titule prieskumu",
      slider: "Jazdec",
      expression: "Výraz",
      others: "Iné"
    },
    editProperty: "Upraviť vlastnosť „{0}“",
    items: "[ Položky: {0} ]",
    choicesVisibleIf: "Voľby sú viditeľné, ak",
    choicesEnableIf: "Možnosti výberu sú voliteľné, ak",
    columnsEnableIf: "Stĺpce sú viditeľné, ak",
    rowsEnableIf: "Riadky sú viditeľné, ak",
    indent: "Pridanie zarážok",
    panel: {
      indent: "Pridanie vonkajších zarážok"
    },
    innerIndent: "Pridanie vnútorných zarážok",
    defaultValueFromLastRow: "Prevzatie predvolených hodnôt z posledného riadka",
    defaultValueFromLastPanel: "Prevzatie predvolených hodnôt z posledného panela",
    enterNewValue: "Zadajte hodnotu.",
    noquestions: "V prieskume nie je žiadna otázka.",
    createtrigger: "Vytvorte aktivátor",
    titleKeyboardAdornerTip: "Upraviť stlačením tlačidla Enter",
    keyboardAdornerTip: "Stlačením tlačidla Enter položku upravíte, stlačením tlačidla Odstrániť položku odstránite, stlačením tlačidla Alt a šípky nahor alebo šípky nadol položku presuniete",
    triggerOn: "Zap. ",
    triggerMakePagesVisible: "Viditeľnosť stránok:",
    triggerMakeQuestionsVisible: "Viditeľnosť prvkov:",
    triggerCompleteText: "V prípade úspechu prieskum dokočniť.",
    triggerNotSet: "Aktivátor nie je nastavený",
    triggerRunIf: "Spustiť ak",
    triggerSetToName: "Zmeniť hodnotu: ",
    triggerFromName: "Kopírovať hodnotu z: ",
    triggerRunExpression: "Spustiť tento výraz:",
    triggerSetValue: "na: ",
    triggerGotoName: "Prejsť na otázku:",
    triggerIsVariable: "Nezaraďujte premennú do výsledku prieskumu.",
    triggerRunExpressionEmpty: "Zadajte platný výraz",
    emptyExpressionPlaceHolder: "Sem zadajte výraz...",
    noFile: "Nevybratý žiadny súbor",
    clearIfInvisible: "Ak sa otázka skryje, vymažte hodnotu",
    valuePropertyName: "Názov vlastnosti Value",
    searchEnabled: "Povoliť vyhľadávanie",
    hideSelectedItems: "Skryť vybraté položky",
    closeOnSelect: "Zatvorenie rozbaľovacieho zoznamu po výbere",
    signatureWidth: "Šírka podpisu",
    signatureHeight: "Výška podpisu",
    verticalAlign: "Vertikálne zarovnanie",
    alternateRows: "Alternatívne riadky",
    columnsVisibleIf: "Stĺpce sú viditeľné, ak",
    rowsVisibleIf: "Riadky sú viditeľné, ak",
    otherPlaceholder: "Zástupný symbol oblasti komentárov",
    signaturepad: {
      showPlaceholder: "Zobrazenie zástupného symbolu",
      placeholder: "Zástupný text",
      signatureWidth: "Šírka oblasti podpisu",
      signatureHeight: "Výška oblasti podpisu",
      signatureAutoScaleEnabled: "Automatická zmena mierky oblasti podpisu",
      penMinWidth: "Minimálna šírka pera",
      penMaxWidth: "Maximálna šírka pera"
    },
    filePlaceholder: "Zástupný text súboru",
    photoPlaceholder: "Zástupný text fotografie",
    fileOrPhotoPlaceholder: "Zástupný text súboru alebo fotografie",
    rateType: "Typ sadzby"
  },
  // Property values
  pv: {
    "true": "pravdivý",
    "false": "nepravdivé",
    file: "Lokálne súbory",
    camera: "Fotoaparát",
    "file-camera": "Lokálne súbory alebo fotoaparát",
    inherit: "prevziať",
    show: "zobraziť",
    hide: "skryť",
    default: "predvolené",
    initial: "počiatočné",
    random: "náhodné",
    collapsed: "zbalené",
    expanded: "rozbalené",
    none: "žiadne",
    asc: "vzostupne",
    desc: "zostupne",
    indeterminate: "nestanovené",
    decimal: "desatinný",
    currency: "mena",
    percent: "percento",
    firstExpanded: "prvý rozbalený",
    off: "vyp.",
    onpanel: "Začnite na každom paneli",
    onPanel: "na paneli",
    onSurvey: "v prieskume",
    list: "zoznam",
    progressTop: "horná časť priebehu",
    progressBottom: "spodná časť priebehu",
    progressTopBottom: "priebeh –​ horná a spodná časť",
    tab: "Karty",
    horizontal: "vodorovné",
    vertical: "zvislé",
    top: "hore",
    bottom: "dolu",
    topBottom: "hore a dolu",
    both: "obidva",
    left: "vľavo",
    right: "Doprava",
    leftRight: "Vľavo a vpravo",
    color: "farba",
    date: "dátum",
    datetime: "dátum a čas",
    "datetime-local": "dátum a čas miestny",
    email: "E-mail",
    month: "mesiac",
    number: "číslo",
    password: "heslo",
    range: "rozsah",
    tel: "Tel",
    text: "Text",
    time: "Čas",
    url: "URL adresa",
    week: "týždeň",
    hidden: "skryté",
    on: "na",
    onPage: "na stránke",
    edit: "upraviť",
    display: "zobraziť",
    onComplete: "pri dokončení",
    onHidden: "pri skrytí",
    onHiddenContainer: "Keď sa otázka alebo jej panel/stránka skryje",
    contain: "Obsahovať",
    cover: "Prikryť",
    fill: "Vyplniť",
    clearInvisibleValues: {
      none: "Nikdy"
    },
    inputType: {
      color: "Farba",
      date: "Dátum",
      "datetime-local": "Dátum a čas",
      email: "E-mail",
      month: "Mesiac",
      number: "Číslo",
      password: "Heslo",
      range: "Rozsah",
      tel: "Telefónne číslo",
      text: "Text",
      time: "Čas",
      url: "URL adresa",
      week: "Týždeň"
    },
    all: "všetko",
    page: "stránka",
    survey: "prieskum",
    onNextPage: "na ďalšej stránke",
    onValueChanged: "pri zmene hodnoty",
    onValueChanging: "Pred zmenou odpovede",
    standard: "štandard",
    singlePage: "jedna stránka",
    questionPerPage: "otázka na stránku",
    noPreview: "žiadna ukážka",
    showAllQuestions: "zobraziť ukážku so všetkými otázkami",
    showAnsweredQuestions: "zobraziť ukážku so zodpovedanými otázkami",
    pages: "stránky",
    questions: "otázky",
    requiredQuestions: "povinné otázky",
    correctQuestions: "správne otázky",
    buttons: "tlačidlá",
    underInput: "v rámci vstupu",
    underTitle: "v rámci titulu",
    onBlur: "Pri rozmazaní",
    onTyping: "Počas písania",
    underRow: "Pod riadkom",
    underRowSingle: "Pod riadkom je viditeľný iba jeden panel",
    showNavigationButtons: {
      none: "Skrytý"
    },
    showProgressBar: {
      off: "Skrytý"
    },
    showTimerPanel: {
      none: "Skrytý"
    },
    showTimerPanelMode: {
      all: "Obidva"
    },
    detailPanelMode: {
      none: "Skrytý"
    },
    addRowLocation: {
      default: "Závisí od rozloženia matice"
    },
    panelsState: {
      default: "Používatelia nemôžu rozbaliť alebo zbaliť panely",
      collapsed: "Všetky panely sú zbalené",
      expanded: "Všetky panely sú rozšírené"
    },
    widthMode: {
      auto: "Auto",
      static: "Statický",
      responsive: "Citlivý"
    },
    imageFit: {
      none: "Žiadny",
      contain: "Obsahovať",
      cover: "Prikryť",
      fill: "Vyplniť"
    },
    contentMode: {
      auto: "Auto",
      image: "Obraz",
      video: "Video",
      youtube: "YouTube"
    },
    displayMode: {
      auto: "Auto",
      buttons: "Tlačidlá",
      dropdown: "Rozbaľovací zoznam"
    },
    rateColorMode: {
      default: "Predvolený"
    },
    autoGenerate: {
      "true": "Generovať",
      "false": "Manuálne zadanie"
    },
    rateType: {
      labels: "Menovky",
      stars: "Hviezdy",
      smileys: "Smajlíky"
    }
  },
  // Operators
  op: {
    empty: "je prázdne",
    notempty: "nie je prázdne",
    equal: "rovná sa",
    notequal: "nerovná sa",
    contains: "obsahuje",
    notcontains: "neobsahuje",
    anyof: "ktorákoľvek",
    allof: "všetky",
    greater: "väčšie",
    less: "menšie",
    greaterorequal: "väčšie alebo rovné",
    lessorequal: "menšie alebo rovné",
    and: "a",
    or: "alebo"
  },
  // Embed window
  ew: {
    angular: "Použiť verziu Angular",
    jquery: "Použiť verziu jQuery",
    knockout: "Použiť verziu Knockout",
    react: "Použiť verziu React",
    vue: "Použiť verziu Vue",
    bootstrap: "Pre rámec bootstrap",
    modern: "Moderný motív",
    default: "Predvolený motív",
    orange: "Oranžový motív",
    darkblue: "Tmavomodrý motív",
    darkrose: "Motív Darkrose",
    stone: "Motív Stone",
    winter: "Motív Winter",
    winterstone: "Motív Winter-Stone",
    showOnPage: "Zobraziť prieskum na stránke",
    showInWindow: "Zobraziť prieskum v okne",
    loadFromServer: "Načítať JSON prieskumu zo servera",
    titleScript: "Skripty a štýly",
    titleHtml: "HTML",
    titleJavaScript: "JavaScript"
  },
  // Preview (Survey)
  ts: {
    selectPage: "Vybrať stránku na testovanie:",
    showInvisibleElements: "Zobraziť neviditeľné prvky",
    hideInvisibleElements: "Skryť neviditeľné prvky"
  },
  validators: {
    answercountvalidator: "počet odpovedí",
    emailvalidator: "e-mail",
    expressionvalidator: "výraz",
    numericvalidator: "číslo",
    regexvalidator: "regex",
    textvalidator: "text"
  },
  triggers: {
    completetrigger: "dokončiť prieskum",
    setvaluetrigger: "nastaviť hodnotu",
    copyvaluetrigger: "kopírovať hodnotu",
    skiptrigger: "prejsť na otázku",
    runexpressiontrigger: "spustiť výraz",
    visibletrigger: "zmeniť viditeľnosť (zastarané)"
  },
  pehelp: {
    cookieName: "Súbory cookie zabraňujú používateľom vyplniť ten istý prieskum dvakrát.",
    size: "Zmení veľkosť viditeľnej oblasti vstupného poľa. Na obmedzenie vstupnej dĺžky použite nastavenie <b>Validation → Maximum length (Overovacia maximálna dĺžka</b>).",
    format: "Použite {0} ako zástupný symbol skutočnej hodnoty.",
    totalText: "Viditeľné len vtedy, ak aspoň jeden stĺpec obsahuje výraz Typ celkom alebo Celkom.",
    acceptedTypes: "Ďalšie informácie nájdete v popise atribútu [accept](https://www.w3schools.com/tags/att_input_accept.asp).",
    columnColCount: "Vzťahuje sa len na typy buniek rádioskupiny a začiarkavacích políčok.",
    autocomplete: "Ďalšie informácie nájdete v popise atribútu [automatické dopĺňanie](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete).",
    valueName: "Ak túto vlastnosť nenastavíte, odpoveď sa uloží do poľa určeného vlastnosťou Názov.",
    choicesbyurl: {
      valueName: " "
    },
    keyName: "Ak zadaný stĺpec obsahuje rovnaké hodnoty, prieskum vyhodí chybu \"Nejedinečná hodnota kľúča\".",
    filePlaceholder: "Použije, keď \"Typ zdroja\" je \"Lokálne súbory\" alebo keď fotoaparát nie je k dispozícii",
    photoPlaceholder: "Používa sa, keď \"Typ zdroja\" je \"Fotoaparát\".",
    fileOrPhotoPlaceholder: "Použije, keď \"Typ zdroja\" je \"Lokálne súbory alebo fotoaparát\"."
  },
  // Properties
  p: {
    title: {
      name: "titul",
      title: "Nechajte prázdne, ak sa zhoduje s menom"
    },
    multiSelect: "Výber viacerých možností",
    showLabel: "Zobraziť štítok",
    value: "Hodnota",
    tabAlign: "Zarovnanie tabulátora",
    sourceType: "Typ zdroja",
    fitToContainer: "Vhodné na kontajner",
    setValueExpression: "Nastavenie výrazu hodnoty",
    description: "opis",
    logoFit: "umiestnenie loga",
    pages: "stránky",
    questions: "Otázky",
    triggers: "aktivátory",
    calculatedValues: "vypočítané hodnoty",
    surveyId: "ID prieskumu",
    surveyPostId: "ID príspevku prieskumu",
    surveyShowDataSaving: "Prieskum ukazuje ukladanie údajov",
    questionDescriptionLocation: "otázka – poloha opisu",
    progressBarType: "typ indikátora priebehu",
    showTOC: "Zobraziť obsah",
    tocLocation: "Umiestnenie TOC",
    questionTitlePattern: "otázka – vzor titulu",
    widthMode: "šírka režimu",
    showBrandInfo: "Zobraziť informácie o značke",
    useDisplayValuesInDynamicTexts: "Použiť zobrazené hodnoty v titule",
    visibleIf: "Viditeľné ak",
    titleLocation: "Poloha titulu",
    descriptionLocation: "poloha opisu",
    defaultValueExpression: "predvolený výraz hodnoty",
    requiredIf: "Povinné ak",
    resetValueIf: "Obnoviť hodnotu, ak",
    setValueIf: "Nastaviť hodnotu, ak",
    validators: "overovatelia",
    bindings: "väzby",
    renderAs: "Vykresliť ako",
    attachOriginalItems: "Priloženie originálnych položiek",
    choices: "možnosti",
    choicesByUrl: "Možnosti podľa URL",
    currency: "mena",
    cellHint: "Pomôcka buniek",
    isUnique: "Je jedinečný",
    showInMultipleColumns: "Zobraziť vo viacerých stĺpcoch",
    totalMaximumFractionDigits: "Celkové maximálne číslice zlomkov",
    totalMinimumFractionDigits: "Celkové minimálne zlomkové číslice",
    columns: "stĺpce",
    detailElements: "Detailné prvky",
    allowAdaptiveActions: "Povolenie adaptívnych akcií",
    defaultRowValue: "Predvolená hodnota riadka",
    detailPanelShowOnAdding: "panel s podrobnosťami – zobrazenie pri pridávaní",
    choicesLazyLoadEnabled: "Možnosti lenivého zaťaženia povolené",
    choicesLazyLoadPageSize: "Možnosti lenivé načítať veľkosť stránky",
    inputFieldComponent: "Súčasť vstupného poľa",
    itemComponent: "Súčasť položky",
    min: "min.",
    max: "max.",
    minValueExpression: "výraz minimálnej hodnoty",
    maxValueExpression: "výraz maximálnej hodnoty",
    step: "krok",
    dataList: "zoznam údajov",
    itemSize: "Veľkosť položky",
    elements: "Prvky",
    content: "Obsah",
    navigationButtonsVisibility: "Viditeľnosť navigačných tlačidiel",
    navigationTitle: "Navigácia –​ titul",
    navigationDescription: "Navigácia – opis",
    longTap: "Dlhé klepnutie",
    autoGrow: "automatické rozšírenie",
    allowResize: "Povoliť zmenu veľkosti",
    acceptCarriageReturn: "Akceptovať vrátenie prepravy",
    displayMode: "Režim zobrazenia",
    rateType: "Typ sadzby",
    label: "štítok",
    contentMode: "režim obsahu",
    imageFit: "umiestnenie obrázka",
    altText: "Alternatívny text",
    height: "výška",
    penColor: "farba pera",
    backgroundColor: "farba pozadia",
    templateElements: "Prvky šablóny",
    operator: "Operátor",
    isVariable: "Je variabilný",
    runExpression: "Spustiť výraz",
    showCaption: "zobraziť titulok",
    iconName: "názov ikony",
    iconSize: "veľkosť ikony",
    precision: "Presnosť",
    matrixDragHandleArea: "Oblasť ťahacej rukoväte matice",
    backgroundImage: "Obrázok na pozadí",
    backgroundImageFit: "Prispôsobenie obrázku na pozadí",
    backgroundImageAttachment: "Príloha obrázka na pozadí",
    backgroundOpacity: "Nepriehľadnosť pozadia",
    selectToRankEnabled: "Vyberte na povolené hodnotenie",
    selectToRankAreasLayout: "Rozloženie Vyberte na hodnotenie oblastí",
    allowCameraAccess: "Povolenie prístupu ku kamere",
    scaleColorMode: "Farebný režim mierky",
    rateColorMode: "Režim hodnotenia farieb",
    templateTabTitle: "Názov karty šablóny",
    templateVisibleIf: "Šablóna viditeľná, ak",
    copyDisplayValue: "Kopírovať zobrazenú hodnotu"
  },
  theme: {
    "--background": "Farba pozadia",
    "--background-dim-light": "Tlmená farba svetla pozadia",
    "--primary-foreground": "Primárna farba popredia",
    "--foreground": "Farba popredia",
    "--base-unit": "Základná jednotka",
    advancedMode: "Rozšírený režim",
    groupGeneral: "Všeobecné",
    groupHeader: "Hlavička",
    groupBackground: "Pozadie",
    groupAppearance: "Vzhľad",
    themeName: "Téma",
    themeMode: "Vzhľad otázky",
    themeModePanels: "Predvolený",
    themeModeLightweight: "Bez panelov",
    themePaletteLight: "Svetlo",
    themePaletteDark: "Tmavý",
    primaryColor: "Farba akcentu",
    primaryDefaultColor: "Predvolený",
    primaryDarkColor: "Hover",
    primaryLightColor: "Vybraný",
    coverTitleForecolor: "Predná farba názvu",
    coverDescriptionForecolor: "Popis predná farba",
    coverOverlapEnabled: "Presahovať",
    backgroundDimColor: "Farba pozadia",
    backgroundImage: "Obrázok na pozadí",
    backgroundImageFitAuto: "Auto",
    backgroundImageFitCover: "Prikryť",
    backgroundImageFitContain: "Obsahovať",
    backgroundImageFitFill: "Natiahnuť",
    backgroundImageFitTile: "Dlaždica",
    backgroundOpacity: "Neprehľadnosť",
    backgroundImageAttachmentFixed: "Stabilný",
    backgroundImageAttachmentScroll: "Zvitok",
    panelBackgroundTransparency: "Nepriehľadnosť pozadia panela",
    questionBackgroundTransparency: "Nepriehľadnosť pozadia otázky",
    questionTitle: "Písmo názvu otázky",
    editorPanel: "Vstupný prvok",
    backgroundCornerRadius: "Pozadie a polomer rohov",
    backcolor: "Predvolené pozadie",
    hovercolor: "Ukázanie na pozadie",
    borderDecoration: "Dekorácia okrajov",
    accentBackground: "Zvýraznenie pozadia",
    accentForeground: "Zvýraznenie v popredí",
    primaryForecolor: "Predvolená farba",
    primaryForecolorLight: "Zakázaná farba",
    colorsTitle: "Farby",
    font: "Písmo",
    lines: "Riadky",
    borderDefault: "Tmavšie",
    borderLight: "Zapaľovač",
    fontFamily: "Skupina písiem",
    fontSize: "Veľkosť písma",
    color: "Farba",
    placeholderColor: "Farba zástupného symbolu",
    size: "Veľkosť",
    fontWeightRegular: "Pravidelný",
    fontWeightHeavy: "Ťažký",
    fontWeightSemiBold: "Polotučné",
    fontWeightBold: "Smelý",
    scale: "Stupnica",
    cornerRadius: "Polomer rohov",
    surveyTitle: "Písmo názvu prieskumu",
    surveyDescription: "Písmo popisu prieskumu",
    pageTitle: "Písmo názvu stránky",
    titleFont: "Písmo názvu",
    descriptionFont: "Popisné písmo",
    boxShadowX: "X",
    boxShadowY: "Y",
    boxShadowAddRule: "Pridanie efektu tieňa",
    opacity: "Neprehľadnosť",
    boxShadowBlur: "Rozmazať",
    boxShadowSpread: "Nátierka",
    boxShadowDrop: "Kvapka",
    boxShadowInner: "Vnútorný",
    shadow: "Efekty tieňov",
    headerView: "Pohľad",
    headerViewBasic: "Základný",
    headerViewAdvanced: "Pokročilý",
    coverInheritWidthFrom: "Šírka oblasti obsahu",
    coverInheritWidthFromSurvey: "Rovnaké ako prieskum",
    coverInheritWidthFromContainer: "Vhodné na kontajner",
    coverTextAreaWidth: "Šírka textu",
    coverBackgroundColorSwitch: "Farba pozadia",
    coverBackgroundColorNone: "Žiadny",
    coverBackgroundColorAccentColor: "Farba akcentu",
    coverBackgroundColorCustom: "Zvyk",
    horizontalAlignmentLeft: "Vľavo",
    horizontalAlignmentCenter: "Centrum",
    horizontalAlignmentRight: "Doprava",
    verticalAlignmentTop: "Vrchol",
    verticalAlignmentMiddle: "Stred",
    verticalAlignmentBottom: "Dno",
    logoPosition: "Umiestnenie loga",
    coverTitlePosition: "Titulná pozícia",
    coverDescriptionPosition: "Popisná pozícia",
    names: {
      default: "Predvolený",
      sharp: "Ostrý",
      borderless: "Bez okrajov",
      flat: "Plochý",
      plain: "Obyčajný",
      doubleborder: "Dvojité ohraničenie",
      layered: "Vrstvené",
      solid: "Pevný",
      threedimensional: ".3D",
      contrast: "Kontrast"
    },
    colors: {
      teal: "Šedozelená",
      blue: "Modrý",
      purple: "Purpurový",
      orchid: "Orchidea",
      tulip: "Tulipán",
      brown: "Hnedý",
      green: "Zelený"
    }
  }
};

editorLocalization.locales["sk"] = skStrings;

// The following strings have been translated by a machine translation service
// Remove those strings that you have corrected manually
// qt.tagbox: "Multi-Select Dropdown" => "Rozbaľovacia ponuka viacerých výberov"
// qt.buttongroup: "Button Group" => "Skupina tlačidiel"
// ed.surveySettings: "Survey Settings" => "Nastavenia prieskumu"
// ed.surveySettingsTooltip: "Open survey settings" => "Otvorenie nastavení prieskumu"
// ed.prevSelected: "Select previous" => "Výber predchádzajúceho"
// ed.nextSelected: "Select next" => "Vyberte položku Ďalej"
// ed.surveyTypeName: "Survey" => "Prieskum"
// ed.pageTypeName: "Page" => "Strana"
// ed.panelTypeName: "Panel" => "Bledý."
// ed.questionTypeName: "Question" => "Otázka"
// ed.columnTypeName: "Column" => "Stĺpec"
// ed.themeSurvey: "Themes" => "Témy"
// ed.defaultV2Theme: "Default" => "Predvolený"
// ed.modernTheme: "Modern" => "Moderný"
// ed.defaultTheme: "Default (legacy)" => "Predvolené nastavenie (staršia verzia)"
// ed.jsonHideErrors: "Hide errors" => "Skryť chyby"
// ed.jsonShowErrors: "Show errors" => "Zobraziť chyby"
// ed.showMoreChoices: "Show more" => "Zobraziť viac"
// ed.showLessChoices: "Show less" => "Zobraziť menej"
// ed.propertyGridFilteredTextPlaceholder: "Type to search..." => "Zadajte reťazec pre vyhľadávanie..."
// ed.toolboxChoiceCategory: "Choice Questions" => "Voľba Otázky"
// ed.toolboxTextCategory: "Text Input Questions" => "Otázky na zadávanie textu"
// ed.toolboxContainersCategory: "Containers" => "Kontajnery"
// ed.toolboxMatrixCategory: "Matrix Questions" => "Maticové otázky"
// ed.toolboxMiscCategory: "Misc" => "Misc"
// ed.translationPropertyGridTitle: "Language Settings" => "Nastavenia jazyka"
// ed.themePropertyGridTitle: "Theme Settings" => "Nastavenia motívu"
// ed.translationLanguages: "Languages" => "Jazyky"
// ed.translationShowUsedStringsOnly: "Used Strings Only" => "Iba použité reťazce"
// ed.translationPlaceHolder: "Translation..." => "Preklad..."
// ed.themeExportButton: "Export" => "Vývoz"
// ed.themeImportButton: "Import" => "Import"
// ed.carryForwardChoicesCopied: "Choices are copied from" => "Voľby sa kopírujú z"
// ed.htmlPlaceHolder: "HTML content will be here." => "Obsah HTML bude tu."
// ed.panelPlaceHolder: "Drop a question from the toolbox here." => "Tu položte otázku z panela nástrojov."
// ed.surveyPlaceHolder: "The survey is empty. Drag an element from the toolbox or click the button below." => "Prieskum je prázdny. Potiahnite prvok z panela s nástrojmi alebo kliknite na tlačidlo nižšie."
// ed.imagePlaceHolder: "Drag and drop an image here or click the button below and choose an image to upload" => "Presuňte obrázok sem alebo kliknite na tlačidlo nižšie a vyberte obrázok, ktorý chcete nahrať"
// ed.imageChooseImage: "Choose Image" => "Vyberte obrázok"
// ed.addNewTypeQuestion: "Add {0}" => "Pridať {0}"
// ed.chooseLogoPlaceholder: "[LOGO]" => "[LOGO]"
// ed.auto: "auto" => "auto"
// ed.choices_Item: "Item " => "Položka "
// lg.addNewItem: "Add New Rule" => "Pridať nové pravidlo"
// lg.empty_tab: "Create a rule to customize the flow of the survey." => "Vytvorte pravidlo na prispôsobenie toku prieskumu."
// lg.page_enableName: "Enable (disable) page" => "Povoliť (zakázať) stránku"
// lg.column_visibilityName: "Show (hide) column" => "Zobraziť (skryť) stĺpec"
// lg.column_enableName: "Enable (disable) column" => "Povoliť (zakázať) stĺpec"
// lg.column_requireName: "Make column required" => "Nastavenie povinného stĺpca"
// lg.itemEmptyExpressionText: "New rule" => "Nové pravidlo"
// lg.column_visibilityText: "make column {0} of question {1} visible" => "Zviditeľnenie stĺpcových {0} otázok {1}"
// lg.column_enableText: "make column {0} of question {1} enable" => "Nastavenie {0}  otázky {1} povolenie"
// lg.column_requireText: "make column {0} of question {1} required" => "Urobiť stĺpec {0} otázky {1} povinné"
// lg.trigger_setvalueEmptyText: "clear question value: {0}" => "jasná hodnota otázky: {0}"
// lg.showAllQuestions: "All Questions" => "Všetky otázky"
// lg.showAllActionTypes: "All Action Types" => "Všetky typy akcií"
// lg.uncompletedRule_title: "Logical rules are incomplete" => "Logické pravidlá sú neúplné"
// lg.uncompletedRule_text: "You have not completed some of the logical rules. If you leave the tab now, the changes will be lost. Do you still want to leave the tab without completing the changes?" => "Nedokončili ste niektoré logické pravidlá. Ak kartu teraz opustíte, zmeny sa stratia. Stále chcete opustiť kartu bez dokončenia zmien?"
// lg.uncompletedRule_apply: "Yes" => "Áno"
// lg.uncompletedRule_cancel: "No, I want to complete the rules" => "Nie, chcem dokončiť pravidlá"
// pe.clear: "Clear" => "Jasný"
// pe.set: "Set" => "Množina"
// pe.change: "Change" => "Zmeniť"
// pe.close: "Close" => "Zavrieť"
// pe.removeItem: "Click to remove the item..." => "Kliknutím položku odstránite..."
// pe.dragItem: "Drag the item" => "Potiahnite položku"
// pe.doneEditing: "Done" => "Robené"
// pe.emptyValue: "Value is empty" => "Hodnota je prázdna"
// pe.fastEntryNonUniqueError: "Value '{0}' is not unique" => "Hodnota \"{0}\" nie je jedinečná"
// pe.fastEntryChoicesCountError: "Please limit the number of items from {0} to {1}" => "Obmedzte počet položiek od {0} do {1}"
// pe.fastEntryPlaceholder: "You can set data in the following format:\nvalue1|text\nvalue2" => "Údaje môžete nastaviť v nasledujúcom formáte:\nhodnota1|text\nhodnota2"
// pe.showPreviewBeforeComplete: "Preview answers before submitting the survey" => "Pozrite si ukážku odpovedí pred odoslaním prieskumu"
// pe.overridingPropertyPrefix: "Set by " => "Nastaviť "
// pe.propertyNameIsIncorrect: "Do not use reserved words: \"item\", \"choice\", \"panel\", \"row\"." => "Nepoužívajte vyhradené slová: \"položka\", \"výber\", \"panel\", \"riadok\"."
// pe.listIsEmpty@choices: "No choices have been added yet" => "Zatiaľ neboli pridané žiadne možnosti"
// pe.addNew@choices: "Add a choice" => "Pridať výber"
// choicesbyurl.valueName: "Get values from the following JSON field" => "Získanie hodnôt z nasledujúceho poľa JSON"
// pe.imageLinkName: "Get image URLs from the following JSON field" => "Získanie webových adries obrázkov z nasledujúceho poľa JSON"
// pe.and: "and" => "a"
// pe.or: "or" => "alebo"
// pe.emptyLogicPopupMessage: "Select a question to start configuring conditions." => "Vyberte otázku a začnite konfigurovať podmienky."
// pe.if: "If" => "Ak"
// pe.then: "then" => "potom"
// pe.setToName: "Target question" => "Cieľová otázka"
// pe.fromName: "Question to copy answer from" => "Otázka na kopírovanie odpovede"
// pe.gotoName: "Question to skip to" => "Otázka na preskočenie"
// pe.ruleIsNotSet: "Rule is incorrect" => "Pravidlo je nesprávne"
// pe.includeIntoResult: "Include into survey results" => "Zahrňte do výsledkov prieskumu"
// pe.portraitOrientation: "Switch to portrait orientation" => "Prepnutie na orientáciu na výšku"
// image.imageHeight: "Image height (in CSS-accepted values)" => "Výška snímky (v hodnotách akceptovaných šablónou CSS)"
// image.imageWidth: "Image width (in CSS-accepted values)" => "Šírka obrázka (v akceptovaných hodnotách CSS)"
// page.maxTimeToFinish: "Time limit to finish the page (in seconds)" => "Časový limit na dokončenie stránky (v sekundách)"
// question.page: "Parent page" => "Nadradená stránka"
// pe.noEntriesText: "Empty entries text" => "Text prázdnych položiek"
// pe.setValue: "Answer" => "Odpoveď"
// pe.dataFormat: "Image format" => "Formát obrázka"
// pe.allowAddRows: "Allow adding rows" => "Povoliť pridávanie riadkov"
// pe.allowRemoveRows: "Allow removing rows" => "Povoliť odstránenie riadkov"
// pe.allowRowsDragAndDrop: "Allow row drag and drop" => "Povoliť presúvanie riadkov"
// pe.responsiveImageSizeHelp: "Does not apply if you specify the exact image width or height." => "Neuplatňuje sa, ak zadáte presnú šírku alebo výšku obrázka."
// pe.minImageWidth: "Minimum image width" => "Minimálna šírka obrázka"
// pe.maxImageWidth: "Maximum image width" => "Maximálna šírka obrázka"
// pe.minImageHeight: "Minimum image height" => "Minimálna výška obrázka"
// pe.maxImageHeight: "Maximum image height" => "Maximálna výška obrázka"
// surveyvalidator.text: "Error message" => "Chybové hlásenie"
// surveyvalidator.expression: "Validation expression" => "Overovací výraz"
// pe.logo: "Logo (URL or base64-encoded string)" => "Logo (reťazec s kódovaním URL alebo base64)"
// pe.questionsOnPageMode: "Survey structure" => "Štruktúra prieskumu"
// pe.maxTextLength: "Maximum answer length (in characters)" => "Maximálna dĺžka odpovede (v znakoch)"
// pe.maxOthersLength: "Maximum comment length (in characters)" => "Maximálna dĺžka komentára (v znakoch)"
// pe.autoGrowComment: "Auto-expand comment area if necessary" => "V prípade potreby automaticky rozbaľte oblasť komentárov"
// pe.allowResizeComment: "Allow users to resize text areas" => "Povolenie používateľom meniť veľkosť textových oblastí"
// pe.textUpdateMode: "Update text question value" => "Aktualizácia hodnoty textovej otázky"
// pe.focusOnFirstError: "Set focus on the first invalid answer" => "Zameranie na prvú neplatnú odpoveď"
// pe.checkErrorsMode: "Run validation" => "Spustenie overenia pravosti"
// pe.navigateToUrl: "Navigate to URL" => "Prejsť na adresu URL"
// pe.navigateToUrlOnCondition: "Dynamic URL" => "Dynamická webová adresa"
// pe.completedBeforeHtml: "Markup to show if the user already filled out this survey" => "Značky na zobrazenie, či používateľ už vyplnil tento prieskum"
// pe.completedHtml: "Survey Complete page markup" => "Značenie stránky dokončenia prieskumu"
// pe.completedHtmlOnCondition: "Dynamic Survey Complete page markup" => "Dynamický prieskum Kompletné značenie stránky"
// pe.loadingHtml: "Markup to show while survey model is loading" => "Značenie, ktoré sa zobrazí počas načítavania modelu prieskumu"
// pe.commentText: "Comment area text" => "Text oblasti komentárov"
// pe.autocomplete: "Autocomplete type" => "Typ automatického dokončovania"
// pe.labelTrue: "\"True\" label" => "Označenie \"Pravda\""
// pe.labelFalse: "\"False\" label" => "Označenie \"False\""
// pe.displayStyle: "Value display style" => "Štýl zobrazenia hodnoty"
// pe.format: "Formatted string" => "Formátovaný reťazec"
// pe.maximumFractionDigits: "Maximum fractional digits" => "Maximálny zlomkový počet číslic"
// pe.minimumFractionDigits: "Minimum fractional digits" => "Minimálne zlomkové číslice"
// pe.useGrouping: "Display grouping separators" => "Oddeľovače zoskupení zobrazení"
// pe.allowMultiple: "Allow multiple files" => "Povolenie viacerých súborov"
// pe.allowImagesPreview: "Preview images" => "Ukážka obrázkov"
// pe.acceptedTypes: "Accepted file types" => "Akceptované typy súborov"
// pe.waitForUpload: "Wait for the upload to complete" => "Počkajte na dokončenie nahrávania"
// pe.needConfirmRemoveFile: "Confirm file deletion" => "Potvrďte odstránenie súboru"
// pe.detailPanelMode: "Detail panel location" => "Umiestnenie panela s podrobnosťami"
// pe.minRowCount: "Minimum row count" => "Minimálny počet riadkov"
// pe.maxRowCount: "Maximum row count" => "Maximálny počet riadkov"
// pe.confirmDelete: "Confirm row deletion" => "Potvrdenie odstránenia riadka"
// pe.confirmDeleteText: "Confirmation message" => "Potvrdzovacia správa"
// paneldynamic.confirmDelete: "Confirm panel deletion" => "Potvrdenie odstránenia panela"
// pe.panelCount: "Initial panel count" => "Počiatočný počet panelov"
// pe.minPanelCount: "Minimum panel count" => "Minimálny počet panelov"
// pe.maxPanelCount: "Maximum panel count" => "Maximálny počet panelov"
// pe.panelsState: "Inner panel expand state" => "Stav rozbalenia vnútorného panela"
// pe.templateDescription: "Description template" => "Šablóna popisu"
// pe.templateTitle: "Title template" => "Šablóna názvu"
// pe.panelPrevText: "Previous Panel button tooltip" => "Popis tlačidla Predchádzajúci panel"
// pe.panelNextText: "Next Panel button tooltip" => "Popis tlačidla Nasledujúci panel"
// pe.showRangeInProgress: "Show progress bar" => "Zobraziť indikátor priebehu"
// pe.templateTitleLocation: "Question title location" => "Otázka, názov, umiestnenie:"
// pe.panelRemoveButtonLocation: "Remove Panel button location" => "Odstrániť umiestnenie tlačidla panela"
// pe.hideIfRowsEmpty: "Hide the question if there are no rows" => "Skryť otázku, ak nie sú žiadne riadky"
// pe.hideColumnsIfEmpty: "Hide columns if there are no rows" => "Skryť stĺpce, ak nie sú k dispozícii žiadne riadky"
// pe.rateValues: "Custom rate values" => "Vlastné hodnoty sadzieb"
// pe.rateCount: "Rate count" => "Počet sadzieb"
// pe.autoGenerate: "How to specify rate values?" => "Ako určiť hodnoty sadzieb?"
// pe.hideIfChoicesEmpty: "Hide the question if it contains no choices" => "Skryť otázku, ak neobsahuje žiadne možnosti"
// pe.hideNumber: "Hide question number" => "Skryť číslo otázky"
// pe.minWidth: "Minimum width (in CSS-accepted values)" => "Minimálna šírka (v hodnotách akceptovaných CSS)"
// pe.maxWidth: "Maximum width (in CSS-accepted values)" => "Maximálna šírka (v hodnotách akceptovaných CSS)"
// pe.width: "Width (in CSS-accepted values)" => "Šírka (v akceptovaných hodnotách CSS)"
// pe.showHeader: "Show column headers" => "Zobrazenie hlavičiek stĺpcov"
// pe.horizontalScroll: "Show horizontal scrollbar" => "Zobraziť vodorovný posúvač"
// pe.columnMinWidth: "Minimum column width (in CSS-accepted values)" => "Minimálna šírka stĺpca (v hodnotách akceptovaných CSS)"
// pe.rowTitleWidth: "Row header width (in CSS-accepted values)" => "Šírka hlavičky riadka (v hodnotách akceptovaných CSS)"
// pe.valueTrue: "\"True\" value" => "Hodnota \"True\""
// pe.valueFalse: "\"False\" value" => "Hodnota \"False\""
// pe.minErrorText: "\"Value is below minimum\" error message" => "Chybové hlásenie \"Hodnota je nižšia ako minimum\""
// pe.maxErrorText: "\"Value exceeds maximum\" error message" => "Chybové hlásenie \"Hodnota prekračuje maximum\""
// pe.otherErrorText: "\"Empty comment\" error message" => "Chybové hlásenie \"Prázdny komentár\""
// pe.keyDuplicationError: "\"Non-unique key value\" error message" => "Chybové hlásenie \"Nejedinečná kľúčová hodnota\""
// pe.minSelectedChoices: "Minimum selected choices" => "Minimálny počet vybraných možností"
// pe.maxSelectedChoices: "Maximum selected choices" => "Maximálny počet vybraných možností"
// pe.showClearButton: "Show the Clear button" => "Zobrazenie tlačidla Vymazať"
// pe.showNumber: "Show panel number" => "Zobraziť číslo panela"
// pe.logoWidth: "Logo width (in CSS-accepted values)" => "Šírka loga (v akceptovaných hodnotách CSS)"
// pe.logoHeight: "Logo height (in CSS-accepted values)" => "Výška loga (v hodnotách akceptovaných CSS)"
// pe.readOnly: "Read-only" => "Iba na čítanie"
// pe.enableIf: "Editable if" => "Upraviteľné, ak"
// pe.emptyRowsText: "\"No rows\" message" => "Správa \"Žiadne riadky\""
// pe.size: "Input field size (in characters)" => "Veľkosť vstupného poľa (v znakoch)"
// pe.separateSpecialChoices: "Separate special choices (None, Other, Select All)" => "Samostatné špeciálne možnosti (Žiadne, Iné, Vybrať všetko)"
// pe.choicesFromQuestion: "Copy choices from the following question" => "Skopírujte voľby z nasledujúcej otázky"
// pe.choicesFromQuestionMode: "Which choices to copy?" => "Aké možnosti kopírovať?"
// pe.showCommentArea: "Show the comment area" => "Zobrazenie oblasti komentárov"
// pe.commentPlaceholder: "Comment area placeholder" => "Zástupný symbol oblasti komentárov"
// pe.displayRateDescriptionsAsExtremeItems: "Display rate descriptions as extreme values" => "Popisy rýchlosti zobrazenia ako extrémnych hodnôt"
// pe.rowsOrder: "Row order" => "Poradie riadkov"
// pe.columnsLayout: "Column layout" => "Rozloženie stĺpcov"
// pe.columnColCount: "Nested column count" => "Vnorený počet stĺpcov"
// pe.state: "Panel expand state" => "Stav rozbalenia panela"
// pe.correctAnswer: "Correct Answer" => "Správna odpoveď"
// pe.defaultPanelValue: "Default Values" => "Predvolené hodnoty"
// pe.cells: "Cell Texts" => "Texty buniek"
// pe.keyName: "Key column" => "Stĺpec kľúča"
// itemvalue.text: "Alt text" => "Alternatívny text"
// tabs.expression: "Expression" => "Výraz"
// pe.choicesVisibleIf: "Choices are visible if" => "Voľby sú viditeľné, ak"
// pe.choicesEnableIf: "Choices are selectable if" => "Možnosti výberu sú voliteľné, ak"
// pe.columnsEnableIf: "Columns are visible if" => "Stĺpce sú viditeľné, ak"
// pe.rowsEnableIf: "Rows are visible if" => "Riadky sú viditeľné, ak"
// pe.indent: "Add indents" => "Pridanie zarážok"
// panel.indent: "Add outer indents" => "Pridanie vonkajších zarážok"
// pe.innerIndent: "Add inner indents" => "Pridanie vnútorných zarážok"
// pe.defaultValueFromLastRow: "Take default values from the last row" => "Prevzatie predvolených hodnôt z posledného riadka"
// pe.defaultValueFromLastPanel: "Take default values from the last panel" => "Prevzatie predvolených hodnôt z posledného panela"
// pe.emptyExpressionPlaceHolder: "Type expression here..." => "Sem zadajte výraz..."
// pe.clearIfInvisible: "Clear the value if the question becomes hidden" => "Ak sa otázka skryje, vymažte hodnotu"
// pe.valuePropertyName: "Value property name" => "Názov vlastnosti Value"
// pe.searchEnabled: "Enable search" => "Povoliť vyhľadávanie"
// pe.hideSelectedItems: "Hide selected items" => "Skryť vybraté položky"
// pe.closeOnSelect: "Close the dropdown after selection" => "Zatvorenie rozbaľovacieho zoznamu po výbere"
// pe.signatureWidth: "Signature width" => "Šírka podpisu"
// pe.signatureHeight: "Signature height" => "Výška podpisu"
// pe.verticalAlign: "Vertical alignment" => "Vertikálne zarovnanie"
// pe.alternateRows: "Alternate rows" => "Alternatívne riadky"
// pe.columnsVisibleIf: "Columns are visible if" => "Stĺpce sú viditeľné, ak"
// pe.rowsVisibleIf: "Rows are visible if" => "Riadky sú viditeľné, ak"
// pe.otherPlaceholder: "Comment area placeholder" => "Zástupný symbol oblasti komentárov"
// pe.rateType: "Rate type" => "Typ sadzby"
// pv.true: "true" => "pravdivý"
// pv.false: "false" => "nepravdivé"
// pv.decimal: "decimal" => "desatinný"
// pv.currency: "currency" => "mena"
// pv.percent: "percent" => "percento"
// pv.onpanel: "Start on each panel" => "Začnite na každom paneli"
// pv.tab: "Tabs" => "Karty"
// pv.right: "Right" => "Doprava"
// pv.color: "color" => "farba"
// pv.date: "date" => "dátum"
// pv.datetime: "datetime" => "dátum a čas"
// pv.datetime-local: "datetime-local" => "dátum a čas miestny"
// pv.email: "email" => "E-mail"
// pv.month: "month" => "mesiac"
// pv.number: "number" => "číslo"
// pv.password: "password" => "heslo"
// pv.range: "range" => "rozsah"
// pv.tel: "tel" => "Tel"
// pv.text: "text" => "Text"
// pv.time: "time" => "Čas"
// pv.url: "url" => "URL adresa"
// pv.week: "week" => "týždeň"
// pv.onHiddenContainer: "When the question or its panel/page becomes hidden" => "Keď sa otázka alebo jej panel/stránka skryje"
// clearInvisibleValues.none: "Never" => "Nikdy"
// inputType.color: "Color" => "Farba"
// inputType.date: "Date" => "Dátum"
// inputType.datetime-local: "Date and Time" => "Dátum a čas"
// inputType.email: "Email" => "E-mail"
// inputType.month: "Month" => "Mesiac"
// inputType.number: "Number" => "Číslo"
// inputType.password: "Password" => "Heslo"
// inputType.range: "Range" => "Rozsah"
// inputType.tel: "Phone Number" => "Telefónne číslo"
// inputType.text: "Text" => "Text"
// inputType.time: "Time" => "Čas"
// inputType.url: "URL" => "URL adresa"
// inputType.week: "Week" => "Týždeň"
// pv.onValueChanging: "Before an answer is changed" => "Pred zmenou odpovede"
// pv.onBlur: "On blur" => "Pri rozmazaní"
// pv.onTyping: "While typing" => "Počas písania"
// pv.underRow: "Under the row" => "Pod riadkom"
// pv.underRowSingle: "Under the row, only one panel is visible" => "Pod riadkom je viditeľný iba jeden panel"
// showNavigationButtons.none: "Hidden" => "Skrytý"
// showProgressBar.off: "Hidden" => "Skrytý"
// showTimerPanel.none: "Hidden" => "Skrytý"
// showTimerPanelMode.all: "Both" => "Obidva"
// detailPanelMode.none: "Hidden" => "Skrytý"
// addRowLocation.default: "Depends on matrix layout" => "Závisí od rozloženia matice"
// panelsState.default: "Users cannot expand or collapse panels" => "Používatelia nemôžu rozbaliť alebo zbaliť panely"
// panelsState.collapsed: "All panels are collapsed" => "Všetky panely sú zbalené"
// panelsState.expanded: "All panels are expanded" => "Všetky panely sú rozšírené"
// widthMode.auto: "Auto" => "Auto"
// widthMode.static: "Static" => "Statický"
// widthMode.responsive: "Responsive" => "Citlivý"
// imageFit.none: "None" => "Žiadny"
// imageFit.contain: "Contain" => "Obsahovať"
// imageFit.cover: "Cover" => "Prikryť"
// imageFit.fill: "Fill" => "Vyplniť"
// contentMode.auto: "Auto" => "Auto"
// contentMode.image: "Image" => "Obraz"
// contentMode.video: "Video" => "Video"
// contentMode.youtube: "YouTube" => "YouTube"
// displayMode.auto: "Auto" => "Auto"
// displayMode.buttons: "Buttons" => "Tlačidlá"
// displayMode.dropdown: "Dropdown" => "Rozbaľovací zoznam"
// rateColorMode.default: "Default" => "Predvolený"
// autoGenerate.true: "Generate" => "Generovať"
// autoGenerate.false: "Enter manually" => "Manuálne zadanie"
// rateType.labels: "Labels" => "Menovky"
// rateType.stars: "Stars" => "Hviezdy"
// rateType.smileys: "Smileys" => "Smajlíky"
// op.and: "and" => "a"
// op.or: "or" => "alebo"
// ts.hideInvisibleElements: "Hide invisible elements" => "Skryť neviditeľné prvky"
// pehelp.cookieName: "Cookies prevent users from filling out the same survey twice." => "Súbory cookie zabraňujú používateľom vyplniť ten istý prieskum dvakrát."
// pehelp.size: "Resizes the visible area of the input field. Please use the <b>Validation → Maximum length</b> setting to limit the input length." => "Zmení veľkosť viditeľnej oblasti vstupného poľa. Na obmedzenie vstupnej dĺžky použite nastavenie <b>Validation → Maximum length (Overovacia maximálna dĺžka</b>)."
// pehelp.format: "Use {0} as a placeholder for the actual value." => "Použite {0} ako zástupný symbol skutočnej hodnoty."
// pehelp.totalText: "Visible only when at least one column has Total type or Total expression." => "Viditeľné len vtedy, ak aspoň jeden stĺpec obsahuje výraz Typ celkom alebo Celkom."
// pehelp.acceptedTypes: "Refer to the [accept](https://www.w3schools.com/tags/att_input_accept.asp) attribute description for more information." => "Ďalšie informácie nájdete v popise atribútu [accept](https://www.w3schools.com/tags/att_input_accept.asp)."
// pehelp.columnColCount: "Applicable only to Radiogroup and Checkbox cell types." => "Vzťahuje sa len na typy buniek rádioskupiny a začiarkavacích políčok."
// pehelp.autocomplete: "Refer to the [autocomplete](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete) attribute description for more information." => "Ďalšie informácie nájdete v popise atribútu [automatické dopĺňanie](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete)."
// pehelp.valueName: "If you do not set this property, the answer will be stored in a field specified by the Name property." => "Ak túto vlastnosť nenastavíte, odpoveď sa uloží do poľa určeného vlastnosťou Názov."
// choicesbyurl.valueName: " " => " "
// pehelp.keyName: "If the specified column contains identical values, the survey throws the \"Non-unique key value\" error." => "Ak zadaný stĺpec obsahuje rovnaké hodnoty, prieskum vyhodí chybu \"Nejedinečná hodnota kľúča\"."
// p.value: "Value" => "Hodnota"
// p.tabAlign: "Tab alignment" => "Zarovnanie tabulátora"
// p.questions: "Questions" => "Otázky"
// p.surveyId: "Survey id" => "ID prieskumu"
// p.surveyPostId: "Survey post id" => "ID príspevku prieskumu"
// p.surveyShowDataSaving: "Survey show data saving" => "Prieskum ukazuje ukladanie údajov"
// p.showTOC: "Show TOC" => "Zobraziť obsah"
// p.tocLocation: "Toc location" => "Umiestnenie TOC"
// p.showBrandInfo: "Show brand info" => "Zobraziť informácie o značke"
// p.renderAs: "Render as" => "Vykresliť ako"
// p.attachOriginalItems: "Attach original items" => "Priloženie originálnych položiek"
// p.cellHint: "Cell hint" => "Pomôcka buniek"
// p.isUnique: "Is unique" => "Je jedinečný"
// p.showInMultipleColumns: "Show in multiple columns" => "Zobraziť vo viacerých stĺpcoch"
// p.totalMaximumFractionDigits: "Total maximum fraction digits" => "Celkové maximálne číslice zlomkov"
// p.totalMinimumFractionDigits: "Total minimum fraction digits" => "Celkové minimálne zlomkové číslice"
// p.detailElements: "Detail elements" => "Detailné prvky"
// p.allowAdaptiveActions: "Allow adaptive actions" => "Povolenie adaptívnych akcií"
// p.choicesLazyLoadEnabled: "Choices lazy load enabled" => "Možnosti lenivého zaťaženia povolené"
// p.choicesLazyLoadPageSize: "Choices lazy load page size" => "Možnosti lenivé načítať veľkosť stránky"
// p.inputFieldComponent: "Input field component" => "Súčasť vstupného poľa"
// p.itemComponent: "Item component" => "Súčasť položky"
// p.elements: "Elements" => "Prvky"
// p.content: "Content" => "Obsah"
// p.longTap: "Long tap" => "Dlhé klepnutie"
// p.allowResize: "Allow resizing" => "Povoliť zmenu veľkosti"
// p.acceptCarriageReturn: "Accept carriage return" => "Akceptovať vrátenie prepravy"
// p.displayMode: "Display mode" => "Režim zobrazenia"
// p.rateType: "Rate type" => "Typ sadzby"
// p.altText: "Alt text" => "Alternatívny text"
// p.templateElements: "Template elements" => "Prvky šablóny"
// p.operator: "Operator" => "Operátor"
// p.isVariable: "Is variable" => "Je variabilný"
// p.runExpression: "Run expression" => "Spustiť výraz"
// p.precision: "Precision" => "Presnosť"
// p.matrixDragHandleArea: "Matrix drag handle area" => "Oblasť ťahacej rukoväte matice"
// p.backgroundImage: "Background image" => "Obrázok na pozadí"
// p.backgroundImageFit: "Background image fit" => "Prispôsobenie obrázku na pozadí"
// p.backgroundImageAttachment: "Background image attachment" => "Príloha obrázka na pozadí"
// p.backgroundOpacity: "Background opacity" => "Nepriehľadnosť pozadia"
// p.selectToRankEnabled: "Select to rank enabled" => "Vyberte na povolené hodnotenie"
// p.selectToRankAreasLayout: "Select to rank areas layout" => "Rozloženie Vyberte na hodnotenie oblastí"
// p.allowCameraAccess: "Allow camera access" => "Povolenie prístupu ku kamere"
// p.scaleColorMode: "Scale color mode" => "Farebný režim mierky"
// p.rateColorMode: "Rate color mode" => "Režim hodnotenia farieb"
// p.templateTabTitle: "Template tab title" => "Názov karty šablóny"
// p.templateVisibleIf: "Template visible if" => "Šablóna viditeľná, ak"
// p.copyDisplayValue: "Copy display value" => "Kopírovať zobrazenú hodnotu"
// theme.--background: "Background color" => "Farba pozadia"
// theme.--background-dim-light: "Background dim light color" => "Tlmená farba svetla pozadia"
// theme.--primary-foreground: "Primary foreground color" => "Primárna farba popredia"
// theme.--foreground: "Foreground color" => "Farba popredia"
// theme.--base-unit: "Base unit" => "Základná jednotka"
// theme.groupGeneral: "General" => "Všeobecné"
// theme.groupAdvanced: "Advanced" => "Pokročilý"
// theme.themeName: "Theme" => "Téma"
// theme.themeMode: "Question appearance" => "Vzhľad otázky"
// theme.themeModePanels: "Default" => "Predvolený"
// theme.themeModeLightweight: "Without Panels" => "Bez panelov"
// theme.themePaletteLight: "Light" => "Svetlo"
// theme.themePaletteDark: "Dark" => "Tmavý"
// theme.primaryColor: "Accent color" => "Farba akcentu"
// theme.primaryDefaultColor: "Default" => "Predvolený"
// theme.primaryDarkColor: "Hover" => "Hover"
// theme.primaryLightColor: "Selected" => "Vybraný"
// theme.backgroundDimColor: "Background color" => "Farba pozadia"
// theme.backgroundImage: "Background image" => "Obrázok na pozadí"
// theme.backgroundImageFitAuto: "Auto" => "Auto"
// theme.backgroundImageFitCover: "Cover" => "Prikryť"
// theme.backgroundImageFitContain: "Contain" => "Obsahovať"
// theme.backgroundOpacity: "Opacity" => "Neprehľadnosť"
// theme.backgroundImageAttachmentFixed: "Fixed" => "Stabilný"
// theme.backgroundImageAttachmentScroll: "Scroll" => "Zvitok"
// theme.panelBackgroundTransparency: "Panel background opacity" => "Nepriehľadnosť pozadia panela"
// theme.questionBackgroundTransparency: "Question background opacity" => "Nepriehľadnosť pozadia otázky"
// theme.questionPanel: "Panel background and corner radius" => "Pozadie panela a polomer rohov"
// theme.questionTitle: "Question title font" => "Písmo názvu otázky"
// theme.questionDescription: "Question description font" => "Písmo popisu otázky"
// theme.editorPanel: "Input element" => "Vstupný prvok"
// theme.editorFont: "Input element font" => "Písmo vstupného prvku"
// theme.backcolor: "Default background" => "Predvolené pozadie"
// theme.hovercolor: "Hover background" => "Ukázanie na pozadie"
// theme.borderDecoration: "Border decoration" => "Dekorácia okrajov"
// theme.accentBackground: "Accent background" => "Zvýraznenie pozadia"
// theme.accentForeground: "Accent foreground" => "Zvýraznenie v popredí"
// theme.primaryForecolor: "Default color" => "Predvolená farba"
// theme.primaryForecolorLight: "Disabled color" => "Zakázaná farba"
// theme.linesColors: "Minor line colors" => "Vedľajšie farby čiar"
// theme.borderDefault: "Darker" => "Tmavšie"
// theme.borderLight: "Lighter" => "Zapaľovač"
// theme.fontFamily: "Font family" => "Skupina písiem"
// theme.fontSize: "Font size" => "Veľkosť písma"
// theme.color: "Color" => "Farba"
// theme.size: "Size" => "Veľkosť"
// theme.fontWeightRegular: "Regular" => "Pravidelný"
// theme.fontWeightHeavy: "Heavy" => "Ťažký"
// theme.fontWeightSemiBold: "Semi-bold" => "Polotučné"
// theme.fontWeightBold: "Bold" => "Smelý"
// theme.scale: "Scale" => "Stupnica"
// theme.cornerRadius: "Corner radius" => "Polomer rohov"
// theme.surveyTitle: "Survey title font" => "Písmo názvu prieskumu"
// theme.pageTitle: "Page title font" => "Písmo názvu stránky"
// theme.pageDescription: "Page description font" => "Písmo popisu stránky"
// theme.boxShadowX: "X" => "X"
// theme.boxShadowY: "Y" => "Y"
// theme.boxShadowAddRule: "Add Shadow Effect" => "Pridanie efektu tieňa"
// theme.opacity: "Opacity" => "Neprehľadnosť"
// theme.boxShadowBlur: "Blur" => "Rozmazať"
// theme.boxShadowSpread: "Spread" => "Nátierka"
// theme.boxShadowDrop: "Drop" => "Kvapka"
// theme.boxShadowInner: "Inner" => "Vnútorný"
// theme.questionShadow: "Shadow effects" => "Efekty tieňov"
// theme.editorShadow: "Input element shadow effects" => "Efekty tieňov vstupného prvku"
// names.default: "Default" => "Predvolený"
// names.contrast: "Contrast" => "Kontrast"
// names.plain: "Plain" => "Obyčajný"
// names.simple: "Simple" => "Jednoduchý"
// names.blank: "Blank" => "Prázdny"
// names.double: "Double" => "Dvojitý"
// names.bulk: "Bulk" => "Hromadný"
// names.pseudo-3d: "Pseudo 3D" => "Pseudo 3D"
// names.playful: "Playful" => "Hravý"
// names.ultra: "Ultra" => "Ultra"
// colors.teal: "Teal" => "Šedozelená"
// colors.blue: "Blue" => "Modrý"
// colors.purple: "Purple" => "Purpurový"
// colors.orchid: "Orchid" => "Orchidea"
// colors.tulip: "Tulip" => "Tulipán"
// colors.brown: "Brown" => "Hnedý"
// colors.green: "Green" => "Zelený"
// names.sharp: "Sharp" => "Ostrý"
// names.borderless: "Borderless" => "Bez okrajov"
// names.flat: "Flat" => "Plochý"
// names.doubleborder: "Double Border" => "Dvojité ohraničenie"
// names.layered: "Layered" => "Vrstvené"
// names.solid: "Solid" => "Pevný"
// names.threedimensional: "3D" => ".3D"
// ed.translationDeleteLanguage: "Are you certain you wish to delete all strings for this language?" => "Ste si istý, že chcete odstrániť všetky reťazce pre tento jazyk?"
// ed.themeResetButton: "Reset theme settings to default" => "Obnovenie predvolených nastavení motívu"
// theme.placeholderColor: "Placeholder color" => "Farba zástupného symbolu"
// ed.themeSettings: "Theme Settings" => "Nastavenia motívu"
// ed.themeSettingsTooltip: "Open theme settings" => "Otvorenie nastavení motívu"
// pe.resetToDefaultCaption: "Reset" => "Vynulovanie"
// pv.file: "Local files" => "Lokálne súbory"
// pv.camera: "Camera" => "Fotoaparát"
// pv.file-camera: "Local files or camera" => "Lokálne súbory alebo fotoaparát"
// ed.translateUsigAI: "Auto-translate All" => "Automatický preklad všetkého"
// ed.translationDialogTitle: "Untranslated strings" => "Nepreložené reťazce"
// pe.fastEntryChoicesMinCountError: "Please enter at least {0} items" => "Zadajte aspoň {0} položiek"
// lg.question_resetValueName: "Reset question value" => "Obnoviť hodnotu otázky"
// lg.column_resetValue: "Reset column value" => "Obnovenie hodnoty stĺpca"
// pe.markRequired: "Mark as required" => "Označiť podľa potreby"
// pe.removeRequiredMark: "Remove the required mark" => "Odstráňte požadovanú značku"
// p.resetValueIf: "Reset value if" => "Obnoviť hodnotu, ak"
// lg.question_setValueName: "Set question value" => "Nastavenie hodnoty otázky"
// lg.column_resetValueName: "Reset column value" => "Obnovenie hodnoty stĺpca"
// lg.column_setValueName: "Set column value" => "Nastavenie hodnoty stĺpca"
// lg.setValueExpressionPlaceholder: " An expression whose result will be assigned to the target question." => " Výraz, ktorého výsledok bude priradený k cieľovej otázke."
// survey.title: "Title" => "Titul"
// page.title: "Title" => "Titul"
// p.setValueIf: "Set value if" => "Nastaviť hodnotu, ak"
// theme.groupHeader: "Header" => "Hlavička"
// theme.coverTitleForecolor: "Title forecolor" => "Predná farba názvu"
// theme.coverOverlapEnabled: "Overlap" => "Presahovať"
// theme.backgroundImageFitFill: "Stretch" => "Natiahnuť"
// theme.backgroundImageFitTile: "Tile" => "Dlaždica"
// theme.headerView: "View" => "Pohľad"
// theme.headerViewBasic: "Basic" => "Základný"
// theme.headerViewAdvanced: "Advanced" => "Pokročilý"
// theme.coverInheritWidthFrom: "Content area width" => "Šírka oblasti obsahu"
// theme.coverInheritWidthFromSurvey: "Same as survey" => "Rovnaké ako prieskum"
// theme.coverInheritWidthFromPage: "Fit to page" => "Prispôsobiť na stranu"
// theme.coverTextAreaWidth: "Text width" => "Šírka textu"
// theme.coverBackgroundColorSwitch: "Background color" => "Farba pozadia"
// theme.coverBackgroundColorNone: "None" => "Žiadny"
// theme.coverBackgroundColorAccentColor: "Accent color" => "Farba akcentu"
// theme.coverBackgroundColorCustom: "Custom" => "Zvyk"
// theme.horizontalAlignmentLeft: "Left" => "Vľavo"
// theme.horizontalAlignmentCenter: "Center" => "Centrum"
// theme.horizontalAlignmentRight: "Right" => "Doprava"
// theme.verticalAlignmentTop: "Top" => "Vrchol"
// theme.verticalAlignmentMiddle: "Middle" => "Stred"
// theme.verticalAlignmentBottom: "Bottom" => "Dno"
// theme.logoPosition: "Logo Position" => "Umiestnenie loga"
// theme.coverTitlePosition: "Title Position" => "Titulná pozícia"
// theme.coverDescriptionPosition: "Description Position" => "Popisná pozícia"
// lg.question_resetValueText: "reset value for question: {0}" => "Resetovať hodnotu pre otázku: {0}"
// lg.question_setValueText: "assign value: {1} to question: {0}" => "Priradiť hodnotu: {1} otázku: {0}"
// lg.column_resetValueText: "reset cell value for column: {0}" => "Obnoviť hodnotu bunky pre stĺpec: {0}"
// lg.column_setValueText: "assign cell value: {1} to column: {0}" => "Priradenie hodnoty bunky: {1} do stĺpca: {0}"
// ed.surveyJsonExportButton: "Export" => "Vývoz"
// ed.surveyJsonImportButton: "Import" => "Import"
// ed.surveyJsonCopyButton: "Copy to clipboard" => "Kopírovanie do schránky"
// pe.filePlaceholder: "File placeholder text" => "Zástupný text súboru"
// pe.photoPlaceholder: "Photo placeholder text" => "Zástupný text fotografie"
// pe.fileOrPhotoPlaceholder: "File or photo placeholder text" => "Zástupný text súboru alebo fotografie"
// pehelp.filePlaceholder: "Applies when \"Source type\" is \"Local files\" or when camera is unavailable" => "Použije, keď \"Typ zdroja\" je \"Lokálne súbory\" alebo keď fotoaparát nie je k dispozícii"
// pehelp.photoPlaceholder: "Applies when \"Source type\" is \"Camera\"." => "Používa sa, keď \"Typ zdroja\" je \"Fotoaparát\"."
// pehelp.fileOrPhotoPlaceholder: "Applies when \"Source type\" is \"Local files or camera\"." => "Použije, keď \"Typ zdroja\" je \"Lokálne súbory alebo fotoaparát\"."
// theme.groupBackground: "Background" => "Pozadie"
// theme.groupAppearance: "Appearance" => "Vzhľad"
// theme.coverDescriptionForecolor: "Description forecolor" => "Popis predná farba"
// ed.themeResetConfirmation: "Do you really want to reset the theme? All your customizations will be lost." => "Naozaj chcete resetovať tému? Všetky vaše prispôsobenia sa stratia."
// ed.themeResetConfirmationOk: "Yes, reset the theme" => "Áno, obnoviť motív"
// theme.groupBackground: "Background" => "Pozadie"
// theme.groupAppearance: "Appearance" => "Vzhľad"
// theme.coverDescriptionForecolor: "Description forecolor" => "Popis predná farba"
// theme.coverInheritWidthFromContainer: "Fit to container" => "Vhodné na kontajner"
// signaturepad.showPlaceholder: "Show the placeholder" => "Zobrazenie zástupného symbolu"
// signaturepad.placeholder: "Placeholder text" => "Zástupný text"
// theme.surveyDescription: "Survey description font" => "Písmo popisu prieskumu"
// ed.prevFocus: "Focus previous" => "Zameranie predchádzajúce"
// ed.nextFocus: "Focus next" => "Zameranie ďalej"
// ed.saveTheme: "Save Theme" => "Uložiť motív"
// ed.saveThemeTooltip: "Save Theme" => "Uložiť motív"
// lg.page_requireName: "Make page required" => "Nastavenie požadovanej strany"
// lg.panel_requireName: "Make page required" => "Nastavenie požadovanej strany"
// signaturepad.signatureWidth: "Signature area width" => "Šírka oblasti podpisu"
// signaturepad.signatureHeight: "Signature area height" => "Výška oblasti podpisu"
// signaturepad.signatureAutoScaleEnabled: "Auto-scale the signature area" => "Automatická zmena mierky oblasti podpisu"
// signaturepad.penMinWidth: "Minimum pen width" => "Minimálna šírka pera"
// signaturepad.penMaxWidth: "Maximum pen width" => "Maximálna šírka pera"
// ed.propertyGridNoResultsFound: "No results found" => "Nenašli sa žiadne výsledky"
// pv.leftRight: "Left and right" => "Vľavo a vpravo"
// p.sourceType: "Source type" => "Typ zdroja"
// p.fitToContainer: "Fit to container" => "Vhodné na kontajner"
// p.setValueExpression: "Set value expression" => "Nastavenie výrazu hodnoty"
// ed.choicesLoadedFromWebText: "Choices are loaded from a web service." => "Možnosti sa načítavajú z webovej služby."
// ed.choicesLoadedFromWebLinkText: "Go to settings" => "Prejdite na nastavenia"
// ed.choicesLoadedFromWebPreviewTitle: "Preview of loaded choice options" => "Ukážka načítaných možností výberu"
// pe.eachRowUnique: "Prevent duplicate responses in rows" => "Zabráňte duplicitným odpovediam v riadkoch"
// theme.advancedMode: "Advanced mode" => "Rozšírený režim"
// theme.backgroundCornerRadius: "Background and corner radius" => "Pozadie a polomer rohov"
// theme.colorsTitle: "Colors" => "Farby"
// theme.font: "Font" => "Písmo"
// theme.lines: "Lines" => "Riadky"
// theme.titleFont: "Title font" => "Písmo názvu"
// theme.descriptionFont: "Description font" => "Popisné písmo"
// theme.shadow: "Shadow effects" => "Efekty tieňov"
// ed.translateUsigAIFrom: "Translate from: " => "Preložiť z: "
// pe.showRefuseItem: "Allow the Refuse to Answer option" => "Povoliť možnosť Odmietnuť odpovedať"
// pe.showDontKnowItem: "Allow the Don't Know option" => "Povoliť možnosť Neviem"
// pe.showRefuseItem: "Allow the Refuse to Answer option" => "Povoliť možnosť Odmietnuť odpovedať"
// pe.showDontKnowItem: "Allow the Don't Know option" => "Povoliť možnosť Neviem"
// pv.contain: "Contain" => "Obsahovať"
// pv.cover: "Cover" => "Prikryť"
// pv.fill: "Fill" => "Vyplniť"
