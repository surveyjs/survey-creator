import { setupLocale } from "survey-creator-core";

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
  // Creator tabs
  tabs: {
    preview: "Textový prieskum",
    theme: "Témy",
    translation: "Preklad",
    designer: "Návrhár prieskumov",
    json: "Editor JSON",
    logic: "Logika prieskumu"
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
  toolboxCategories: {
    general: "Všeobecné",
    choice: "Voľba Otázky",
    text: "Otázky na zadávanie textu",
    containers: "Kontajnery",
    matrix: "Maticové otázky",
    misc: "Misc"
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
    creatorSettingTitle: "Nastavenia tvorcu",
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
    defaultV2Theme: "Predvolený",
    modernTheme: "Moderný",
    defaultTheme: "Predvolené nastavenie (staršia verzia)",
    testSurveyAgain: "Ďalší textový prieskum",
    testSurveyWidth: "Šírka prieskumu: ",
    navigateToMsg: "Museli ste prejsť na:",
    saveSurvey: "Uložiť prieskum",
    saveSurveyTooltip: "Uložiť prieskum",
    saveTheme: "Uložiť motív",
    saveThemeTooltip: "Uložiť motív",
    jsonHideErrors: "Skryť chyby",
    jsonShowErrors: "Zobraziť chyby",
    undo: "Späť",
    redo: "Opakovať",
    undoTooltip: "Zrušiť poslednú zmenu",
    redoTooltip: "Opakovať zmenu",
    expandTooltip: "Rozšíriť",
    collapseTooltip: "Kolaps",
    expandAllTooltip: "Rozbaliť všetko",
    collapseAllTooltip: "Zbaliť všetko",
    zoomInTooltip: "Priblížiť",
    zoom100Tooltip: "Priblíženie na 100 %",
    zoomOutTooltip: "Oddialiť",
    lockQuestionsTooltip: "Uzamknutie stavu rozbalenia/zbalenia otázok",
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
    toolboxFilteredTextPlaceholder: "Zadajte reťazec pre vyhľadávanie...",
    toolboxNoResultsFound: "Nenašli sa žiadne výsledky",
    propertyGridFilteredTextPlaceholder: "Zadajte reťazec pre vyhľadávanie...",
    propertyGridNoResultsFound: "Nenašli sa žiadne výsledky",
    propertyGridPlaceholderTitle: "Začnite konfigurovať formulár",
    propertyGridPlaceholderDescription: "Kliknutím na ikonu ľubovoľnej kategórie preskúmate nastavenia prieskumu. Ďalšie nastavenia budú k dispozícii po pridaní prvku prieskumu na návrhovú plochu.",
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
    addLanguageTooltip: "Pridať jazyk",
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
    translationSource: "Zdroj: ",
    translationTarget: "Cieľ: ",
    translationYouTubeNotSupported: "Odkazy na YouTube nie sú podporované.",
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
    pagePlaceHolder: "Stránka je prázdna. Potiahnite prvok z panela s nástrojmi alebo kliknite na tlačidlo nižšie.",
    imagePlaceHolder: "Presuňte obrázok sem alebo kliknite na tlačidlo nižšie a vyberte obrázok, ktorý chcete nahrať",
    surveyPlaceHolderMobile: "Kliknite na tlačidlo \"Pridať otázku\" nižšie a začnite vytvárať formulár.",
    surveyPlaceholderTitle: "Formulár je prázdny",
    surveyPlaceholderTitleMobile: "Formulár je prázdny",
    surveyPlaceholderDescription: "Presuňte prvok z panela s nástrojmi alebo kliknite na tlačidlo nižšie.",
    surveyPlaceholderDescriptionMobile: "Presuňte prvok z panela s nástrojmi alebo kliknite na tlačidlo nižšie.",
    previewPlaceholderTitle: "Žiadny náhľad",
    previewPlaceholderTitleMobile: "Žiadny náhľad",
    previewPlaceholderDescription: "Prieskum neobsahuje žiadne viditeľné prvky.",
    previewPlaceholderDescriptionMobile: "Prieskum neobsahuje žiadne viditeľné prvky.",
    translationsPlaceholderTitle: "Žiadne reťazce na preklad",
    translationsPlaceholderTitleMobile: "Žiadne reťazce na preklad",
    translationsPlaceholderDescription: "Pridajte prvky do formulára alebo zmeňte filter reťazcov na paneli s nástrojmi.",
    translationsPlaceholderDescriptionMobile: "Pridajte prvky do formulára alebo zmeňte filter reťazcov na paneli s nástrojmi.",
    pagePlaceHolderMobile: "Kliknite na tlačidlo \"Pridať otázku\" nižšie a pridajte na stránku nový prvok.",
    panelPlaceHolderMobile: "Kliknite na tlačidlo \"Pridať otázku\" nižšie a pridajte na panel nový prvok.",
    imagePlaceHolderMobile: "Kliknite na tlačidlo nižšie a vyberte obrázok, ktorý chcete nahrať",
    imageChooseImage: "Vyberte obrázok",
    addNewTypeQuestion: "Pridať {0}", //{0} is localizable question type
    chooseLogoPlaceholder: "[LOGO]",
    choices_Item: "Položka ",
    selectFile: "Vyberte súbor",
    removeFile: "Odstránenie súboru",
    lg: {
      addNewItem: "Pridať nové pravidlo",
      empty_tab: "Vytvorte pravidlo na prispôsobenie toku prieskumu.",
      logicPlaceholderTitle: "Žiadne logické pravidlá",
      logicPlaceholderTitleMobile: "Žiadne logické pravidlá",
      logicPlaceholderDescription: "Vytvorte pravidlo na prispôsobenie toku prieskumu.",
      logicPlaceholderDescriptionMobile: "Vytvorte pravidlo na prispôsobenie toku prieskumu.",
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
      question_resetValueText: "Resetovať hodnotu pre otázku: {0}", //{0} question name.
      question_setValueText: "Priradiť hodnotu: {1} otázku: {0}",
      column_visibilityText: "Zviditeľnenie stĺpcových {0} otázok {1}", //{0} column name, {1} question name
      column_enableText: "Nastavenie {0}  otázky {1} povolenie", //{0} column name, {1} question name
      column_requireText: "Urobiť stĺpec {0} otázky {1} povinné", //{0} column name, {1} question name
      column_resetValueText: "Obnoviť hodnotu bunky pre stĺpec: {0}", //{0} column name
      column_setValueText: "Priradenie hodnoty bunky: {1} do stĺpca: {0}", //{0} column name and {1} setValueExpression
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
    panel: {
      name: "Názov panela",
      title: "Názov panelu",
      description: "Popis panelu",
      visibleIf: "Zviditeľnite panel, ak",
      requiredIf: "Nastavte panel tak, aby bol povinný, ak",
      questionOrder: "Poradie otázok v rámci panelu",
      page: "Nadradená stránka",
      startWithNewLine: "Zobrazenie panela na novom riadku",
      state: "Stav zbalenia panela",
      width: "Šírka vnoreného panela",
      minWidth: "Minimálna šírka panela",
      maxWidth: "Maximálna šírka panela",
      showNumber: "Očíslujte tento panel"
    },
    panellayoutcolumn: {
      effectiveWidth: "Efektívna šírka, %",
      questionTitleWidth: "Šírka názvu otázky, px"
    },
    paneldynamic: {
      name: "Názov panela",
      title: "Názov panelu",
      description: "Popis panelu",
      visibleIf: "Zviditeľnite panel, ak",
      requiredIf: "Nastavte panel tak, aby bol povinný, ak",
      page: "Presunutie panela na stranu",
      startWithNewLine: "Zobrazenie panela na novom riadku",
      state: "Stav zbalenia panela",
      width: "Šírka vnoreného panela",
      minWidth: "Minimálna šírka panela",
      maxWidth: "Maximálna šírka panela",
      confirmDelete: "Potvrdenie odstránenia panela",
      templateDescription: "Vzor popisu panela",
      templateTitle: "Vzor názvu panela",
      noEntriesText: "Prázdny text panela",
      templateTabTitle: "Vzor názvu tabulátora",
      tabTitlePlaceholder: "Zástupný symbol názvu tabulátora",
      templateVisibleIf: "Zviditeľniť samostatný panel, ak",
      showNumber: "Očíslujte panel",
      titleLocation: "Zarovnanie názvu panela",
      descriptionLocation: "Zarovnanie popisu panela",
      templateQuestionTitleLocation: "Zarovnanie názvu otázky",
      templateQuestionTitleWidth: "Šírka názvu otázky",
      templateErrorLocation: "Zarovnanie chybových hlásení",
      newPanelPosition: "Nové umiestnenie panela",
      showRangeInProgress: "Zobrazenie indikátora priebehu",
      keyName: "Zabránenie duplicitným odpovediam v nasledujúcej otázke"
    },
    question: {
      name: "Názov otázky",
      title: "Názov otázky",
      description: "Opis otázky",
      visibleIf: "Zviditeľnite otázku, ak",
      requiredIf: "Urobte otázku povinnou, ak",
      page: "Nadradená stránka",
      state: "Stav zbalenia poľa otázok",
      showNumber: "Číslo tejto otázky",
      titleLocation: "Zarovnanie názvu otázky",
      descriptionLocation: "Zarovnanie popisu otázky",
      errorLocation: "Zarovnanie chybových hlásení",
      indent: "Zväčšite vnútornú zarážku",
      width: "Vnorená šírka otázky",
      minWidth: "Minimálna šírka otázky",
      maxWidth: "Maximálna šírka otázky",
      textUpdateMode: "Aktualizácia hodnoty vstupného poľa"
    },
    signaturepad: {
      signatureWidth: "Šírka oblasti podpisu",
      signatureHeight: "Výška oblasti podpisu",
      signatureAutoScaleEnabled: "Automatická zmena mierky oblasti podpisu",
      showPlaceholder: "Zobrazenie zástupného symbolu",
      placeholder: "Zástupný text",
      placeholderReadOnly: "Zástupný text v režime iba na čítanie alebo v režime ukážky",
      allowClear: "Zobrazenie tlačidla Vymazať v oblasti podpisu",
      penMinWidth: "Minimálna šírka pera",
      penMaxWidth: "Maximálna šírka pera",
      penColor: "Farba ťahu"
    },
    comment: {
      rows: "Výška vstupného poľa (v riadkoch)"
    },
    showQuestionNumbers: "Zobraziť čísla otázok",
    questionStartIndex: "Otázka sa začína indexom (1, 2 alebo „A“, „a“)",
    expression: {
      name: "Názov výrazu",
      title: "Názov výrazu",
      description: "Popis výrazu",
      expression: "Výraz"
    },
    trigger: {
      expression: "Výraz"
    },
    calculatedvalue: {
      expression: "Výraz"
    },
    // survey templates
    survey: {
      title: "Titul",
      description: "Opis prieskumu",
      readOnly: "Nastavenie prieskumu iba na čítanie"
    },
    page: {
      name: "Názov stránky",
      title: "Titul",
      description: "Popis stránky",
      visibleIf: "Zviditeľniť stránku, ak",
      requiredIf: "Nastavte stránku ako povinnú, ak",
      timeLimit: "Časový limit na dokončenie stránky (v sekundách)",
      questionOrder: "Poradie otázok na stránke"
    },
    matrixdropdowncolumn: {
      name: "Názov stĺpca",
      title: "Názov stĺpca",
      isUnique: "Zabráňte duplicitným odpovediam",
      width: "Šírka stĺpca",
      minWidth: "Minimálna šírka stĺpca",
      rows: "Výška vstupného poľa (v riadkoch)",
      visibleIf: "Zviditeľnite stĺpec, ak",
      requiredIf: "Nastavte stĺpec ako povinný, ak",
      showInMultipleColumns: "Každá možnosť v samostatnom stĺpci"
    },
    multipletextitem: {
      name: "Meno",
      title: "Titul"
    },
    masksettings: {
      saveMaskedValue: "Uložte maskovanú hodnotu do výsledkov prieskumu"
    },
    patternmask: {
      pattern: "Hodnotový vzor"
    },
    datetimemask: {
      min: "Minimálna hodnota",
      max: "Maximálna hodnota"
    },
    numericmask: {
      allowNegativeValues: "Povolenie záporných hodnôt",
      thousandsSeparator: "Oddeľovač tisícov",
      decimalSeparator: "Oddeľovač desatinných miest",
      precision: "Presnosť hodnoty",
      min: "Minimálna hodnota",
      max: "Maximálna hodnota"
    },
    currencymask: {
      prefix: "Predčíslievanie meny",
      suffix: "Prípona meny"
    },
    imageHeight: "Výška obrázka",
    imageWidth: "Šírka obrázka",
    valueName: "Názov hodnoty",
    defaultDisplayValue: "Predvolená zobrazená hodnota pre dynamické texty",
    rateDescriptionLocation: "Zarovnanie štítkov",
    size: "Veľkosť vstupného poľa (v znakoch)",
    cellErrorLocation: "Zarovnanie chybového hlásenia bunky",
    enabled: "Povolené",
    disabled: "Invalidný",
    inherit: "Zdediť",
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
    "listIsEmpty@columns": "Zatiaľ nemáte žiadne stĺpce",
    "listIsEmpty@gridLayoutColumns": "Ešte nemáte stĺpce rozloženia",
    "listIsEmpty@rows": "Zatiaľ nemáte žiadne riadky",
    "listIsEmpty@validators": "Zatiaľ nemáte žiadne overovacie pravidlá",
    "listIsEmpty@calculatedValues": "Zatiaľ nemáte žiadne vlastné premenné",
    "listIsEmpty@triggers": "Zatiaľ nemáte žiadne spúšťače",
    "listIsEmpty@navigateToUrlOnCondition": "Zatiaľ nemáte žiadne odkazy",
    "listIsEmpty@pages": "Zatiaľ nemáte žiadne stránky",
    "addNew@choices": "Pridať výber",
    "addNew@columns": "Pridať nový stĺpec",
    "addNew@rows": "Pridať nový riadok",
    "addNew@validators": "Pridať nové pravidlo",
    "addNew@calculatedValues": "Pridanie novej premennej",
    "addNew@triggers": "Pridať nový spúšťač",
    "addNew@navigateToUrlOnCondition": "Pridať novú URL adresu",
    "addNew@pages": "Pridať novú stránku",
    expressionIsEmpty: "Výraz je prázdny",
    value: "Hodnota",
    text: "Text",
    rowid: "ID riadka",
    imageLink: "Odkaz na obrázok",
    columnEdit: "Upraviť stĺpec: {0}",
    itemEdit: "Upraviť položku: {0}",
    url: "URL",
    path: "Cesta",
    choicesbyurl: {
      url: "URL adresa webovej služby",
      valueName: "Získanie hodnôt z nasledujúceho poľa JSON"
    },
    titleName: "Titulný názov",
    imageLinkName: "Získanie webových adries obrázkov z nasledujúceho poľa JSON",
    allowEmptyResponse: "Povoliť prázdnu odozvu",
    titlePlaceholder: "Sem zadajte titul",
    surveyTitlePlaceholder: "Sem vložte titul prieskumu",
    pageTitlePlaceholder: "Sem zadajte titul stránky",
    startPageTitlePlaceholder: "Úvodná stránka",
    descriptionPlaceholder: "Zadať opis",
    surveyDescriptionPlaceholder: "Zadať opis prieskumu",
    pageDescriptionPlaceholder: "Zadať opis stránky",
    textWrapEnabled: "Možnosti zabalenia",
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
    allowCustomChoices: "Povolenie vlastných volieb",
    visible: "Je viditeľné?",
    isRequired: "Vyžaduje sa?",
    markRequired: "Označiť podľa potreby",
    removeRequiredMark: "Odstráňte požadovanú značku",
    eachRowRequired: "Vyžadovať odpoveď pre všetky riadky",
    eachRowUnique: "Zabráňte duplicitným odpovediam v riadkoch",
    requiredErrorText: "Text chyby pri povinných položkách",
    startWithNewLine: "Začína sa novým riadkom?",
    rows: "Počet riadkov",
    cols: "Počet stĺpcov",
    placeholder: "Vložiť zástupný symbol",
    showPreview: "Zobraziť oblasť náhľadu",
    storeDataAsText: "Uložiť obsahu súboru vo výsledku JSON ako text",
    maxSize: "Maximálna veľkosť súboru v bajtoch",
    rowCount: "Počet riadkov",
    columnLayout: "Rozloženie stĺpcov",
    addRowButtonLocation: "Poloha tlačidla na pridanie riadka",
    transposeData: "Transponovanie riadkov do stĺpcov",
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
    clearInvisibleValues: "Odstrániť neviditeľné hodnoty",
    cookieName: "Názov súboru cookie (na zabránenie lokálneho spustenia prieskumu dvakrát)",
    partialSendEnabled: "Odoslať výsledky prieskumu na ďalšiu stránku",
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
    navigationButtonsLocation: "Zarovnanie navigačných tlačidiel",
    showPrevButton: "Zobraziť tlačidlo predchádzajúce (používateľ sa môže vráiť na predchádzajúcu stránku)",
    firstPageIsStartPage: "Prvá stránka v prieskume je úvodná stránka.",
    showCompletePage: "Na konci zobraziť stránku s dokončením (completedHtml)",
    autoAdvanceEnabled: "Po zodpovedaní všetkých otázok prejsť na ďalšiu stránku automaticky",
    autoAdvanceAllowComplete: "Vyplňte prieskum automaticky",
    showProgressBar: "Zobraziť indikátor priebehu",
    progressBarLocation: "Zarovnanie indikátora priebehu",
    questionTitleLocation: "Poloha titulu otázky",
    questionTitleWidth: "Šírka názvu otázky",
    requiredMark: "Povinný symbol(-y) otázok",
    questionTitleTemplate: "Šablóna titulu otázky, predvolená je:  „{no}. {require} {title}“",
    questionErrorLocation: "Poloha chyby otázky",
    autoFocusFirstQuestion: "Prechod na prvú otázku pri zmene stránky",
    questionOrder: "Poradie prvkov na stránke",
    timeLimit: "Maximálny čas na dokončenie prieskumu",
    timeLimitPerPage: "Maximálny čas na dokončenie stránky v rámci prieskumu",
    showTimer: "Použitie časovača",
    timerLocation: "Zobraziť panel s časovačom",
    timerInfoMode: "Zobraziť režim panela s časovačom",
    renderMode: "Režim vykresľovania",
    allowAddPanel: "Povoliť pridanie panela",
    allowRemovePanel: "Povoliť odstránenie panela",
    addPanelText: "Text pri pridaní panela",
    removePanelText: "Text pri odstránení panela",
    isSinglePage: "Zobraziť všetky prvky na jednej stránke",
    html: "Html",
    setValue: "Odpoveď",
    dataFormat: "Formát obrázka",
    allowAddRows: "Povoliť pridávanie riadkov",
    allowRemoveRows: "Povoliť odstránenie riadkov",
    allowRowReorder: "Povoliť presúvanie riadkov",
    responsiveImageSizeHelp: "Neuplatňuje sa, ak zadáte presnú šírku alebo výšku obrázka.",
    minImageWidth: "Minimálna šírka obrázka",
    maxImageWidth: "Maximálna šírka obrázka",
    minImageHeight: "Minimálna výška obrázka",
    maxImageHeight: "Maximálna výška obrázka",
    minValue: "Minimálna hodnota",
    maxValue: "Maximálna hodnota",
    caseInsensitive: "Nerozlišujú sa veľké a malé písmená",
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
    maxCommentLength: "Maximálna dĺžka komentára (v znakoch)",
    commentAreaRows: "Výška oblasti komentárov (v riadkoch)",
    autoGrowComment: "V prípade potreby automaticky rozbaľte oblasť komentárov",
    allowResizeComment: "Povolenie používateľom meniť veľkosť textových oblastí",
    textUpdateMode: "Aktualizácia hodnoty textovej otázky",
    maskType: "Typ vstupnej masky",
    autoFocusFirstError: "Zameranie na prvú neplatnú odpoveď",
    checkErrorsMode: "Spustenie overenia pravosti",
    validateVisitedEmptyFields: "Overenie prázdnych polí pri strate zamerania",
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
    searchMode: "Režim vyhľadávania",
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
    panelCount: "Počiatočný počet panelov",
    minPanelCount: "Minimálny počet panelov",
    maxPanelCount: "Maximálny počet panelov",
    panelsState: "Stav rozbalenia vnútorného panela",
    prevPanelText: "Popis tlačidla Predchádzajúci panel",
    nextPanelText: "Popis tlačidla Nasledujúci panel",
    removePanelButtonLocation: "Odstrániť umiestnenie tlačidla panela",
    hideIfRowsEmpty: "Skryť otázku, ak nie sú žiadne riadky",
    hideColumnsIfEmpty: "Skryť stĺpce, ak nie sú k dispozícii žiadne riadky",
    rateValues: "Vlastné hodnoty sadzieb",
    rateCount: "Počet sadzieb",
    autoGenerate: "Ako určiť hodnoty sadzieb?",
    hideIfChoicesEmpty: "Skryť otázku, ak neobsahuje žiadne možnosti",
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
    logoWidth: "Šírka loga (v akceptovaných hodnotách CSS)",
    logoHeight: "Výška loga (v hodnotách akceptovaných CSS)",
    readOnly: "Iba na čítanie",
    enableIf: "Upraviteľné, ak",
    noRowsText: "Správa \"Žiadne riadky\"",
    separateSpecialChoices: "Samostatné špeciálne možnosti (Žiadne, Iné, Vybrať všetko)",
    choicesFromQuestion: "Skopírujte voľby z nasledujúcej otázky",
    choicesFromQuestionMode: "Aké možnosti kopírovať?",
    choiceValuesFromQuestion: "Použite hodnoty z nasledujúceho stĺpca matice alebo panelovej otázky ako ID výberu",
    choiceTextsFromQuestion: "Ako texty výberu použite hodnoty z nasledujúceho stĺpca matice alebo panelovej otázky",
    progressBarShowPageTitles: "Zobrazenie prebiehajúcich názvov stránok",
    progressBarShowPageNumbers: "Zobrazenie prebiehajúcich čísel strán",
    showCommentArea: "Zobrazenie oblasti komentárov",
    commentPlaceholder: "Zástupný symbol oblasti komentárov",
    displayRateDescriptionsAsExtremeItems: "Popisy rýchlosti zobrazenia ako extrémnych hodnôt",
    rowOrder: "Poradie riadkov",
    columnsLayout: "Rozloženie stĺpcov",
    columnColCount: "Vnorený počet stĺpcov",
    correctAnswer: "Správna odpoveď",
    defaultPanelValue: "Predvolené hodnoty",
    cells: "Texty buniek",
    fileInputPlaceholder: "Vyberte súbor alebo prilepte odkaz na súbor...",
    keyName: "Stĺpec kľúča",
    itemvalue: {
      visibleIf: "Možnosť zobraziť, ak",
      enableIf: "Túto možnosť nastavte tak, aby sa dala vybrať, ak"
    },
    "itemvalue@rows": {
      visibleIf: "Nastavenie riadka ako viditeľného, ak",
      enableIf: "Nastavte riadok tak, aby ho bolo možné upravovať, ak"
    },
    imageitemvalue: {
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
    previewMode: "Režim náhľadu",
    gridLayoutEnabled: "Povolenie rozloženia mriežky",
    gridLayoutColumns: "Stĺpce rozloženia mriežky",
    maskSettings: "Nastavenia masky",
    detailErrorLocation: "Zarovnanie chybového hlásenia o rozšírení riadka",
    // Creator tabs
    tabs: {
      panel: {
        layout: "Rozloženie panela"
      },
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
      mask: "Nastavenia vstupnej masky",
      layout: {
        panel: "Rozloženie",
        question: "Rozloženie",
        base: "Rozloženie"
      },
      data: "Údaje",
      validation: "Overenie",
      cells: "Bunky",
      showOnCompleted: "Zobraziť pri dokončení",
      logo: "Logo v titule prieskumu",
      slider: "Jazdec",
      expression: "Výraz",
      questionSettings: "Nastavenia otázok",
      header: "Hlavička",
      background: "Pozadie",
      appearance: "Vzhľad",
      accentColors: "Akcentové farby",
      surfaceBackground: "Pozadie povrchu",
      scaling: "Škálovanie",
      others: "Iné"
    },
    editProperty: "Upraviť vlastnosť „{0}“",
    items: "[ Položky: {0} ]",
    choicesVisibleIf: "Voľby sú viditeľné, ak",
    choicesEnableIf: "Možnosti výberu sú voliteľné, ak",
    columnsEnableIf: "Stĺpce sú viditeľné, ak",
    rowsEnableIf: "Riadky sú viditeľné, ak",
    innerIndent: "Pridanie vnútorných zarážok",
    copyDefaultValueFromLastEntry: "Predvolené použitie odpovedí z posledného záznamu",
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
    verticalAlign: "Vertikálne zarovnanie",
    alternateRows: "Alternatívne riadky",
    columnsVisibleIf: "Stĺpce sú viditeľné, ak",
    rowsVisibleIf: "Riadky sú viditeľné, ak",
    otherPlaceholder: "Zástupný symbol oblasti komentárov",
    filePlaceholder: "Zástupný text súboru",
    photoPlaceholder: "Zástupný text fotografie",
    fileOrPhotoPlaceholder: "Zástupný text súboru alebo fotografie",
    rateType: "Typ sadzby",
    url_placeholder: "Napríklad: https://api.example.com/books",
    path_placeholder: "Napr.: kategórie.fikcia",
    questionStartIndex_placeholder: "Napr.: a)",
    width_placeholder: "Napr.: 6in",
    minWidth_placeholder: "Napríklad: 600px",
    maxWidth_placeholder: "Napríklad: 50%",
    imageHeight_placeholder: "auto",
    imageWidth_placeholder: "auto",
    itemTitleWidth_placeholder: "Príklad: 100px",
    theme: {
      themeName: "Téma",
      isPanelless: "Vzhľad otázky",
      editorPanel: "Pozadie a polomer rohov",
      questionPanel: "Pozadie a polomer rohov",
      primaryColor: "Farba akcentu",
      panelBackgroundTransparency: "Nepriehľadnosť pozadia panela",
      questionBackgroundTransparency: "Nepriehľadnosť pozadia otázky",
      fontSize: "Veľkosť písma",
      scale: "Stupnica",
      cornerRadius: "Polomer rohov",
      advancedMode: "Pokročilý režim",
      pageTitle: "Písmo názvu",
      pageDescription: "Popisné písmo",
      questionTitle: "Písmo názvu",
      questionDescription: "Popisné písmo",
      editorFont: "Písmo",
      backgroundOpacity: "Neprehľadnosť",
      "--sjs-font-family": "Skupina písiem",
      "--sjs-general-backcolor-dim": "Farba pozadia",
      "--sjs-primary-backcolor": "Zvýraznenie pozadia",
      "--sjs-primary-forecolor": "Zvýraznenie v popredí",
      "--sjs-special-red": "Chybové hlásenia",
      "--sjs-shadow-small": "Efekty tieňov",
      "--sjs-shadow-inner": "Efekty tieňov",
      "--sjs-border-default": "Farby"
    },
    "header@header": {
      headerView: "Pohľad",
      logoPosition: "Umiestnenie loga",
      surveyTitle: "Písmo názvu prieskumu",
      surveyDescription: "Písmo popisu prieskumu",
      headerTitle: "Písmo názvu prieskumu",
      headerDescription: "Písmo popisu prieskumu",
      inheritWidthFrom: "Šírka oblasti obsahu",
      textAreaWidth: "Šírka textu",
      backgroundColorSwitch: "Farba pozadia",
      backgroundImage: "Obrázok na pozadí",
      backgroundImageOpacity: "Neprehľadnosť",
      overlapEnabled: "Presahovať",
      logoPositionX: "Umiestnenie loga",
      titlePositionX: "Pozícia názvu",
      descriptionPositionX: "Popisná poloha"
    }
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
    selected: "Vybraný",
    unselected: "Nevybratý",
    decimal: "desatinný",
    currency: "mena",
    percent: "percento",
    firstExpanded: "prvý rozbalený",
    off: "vyp.",
    list: "zoznam",
    carousel: "Kolotoč",
    tab: "Karty",
    progressTop: "horná časť priebehu",
    progressBottom: "spodná časť priebehu",
    progressTopBottom: "priebeh –​ horná a spodná časť",
    horizontal: "vodorovné",
    vertical: "zvislé",
    top: "hore",
    bottom: "dolu",
    topBottom: "hore a dolu",
    both: "obidva",
    left: "vľavo",
    right: "Doprava",
    center: "Centrum",
    leftRight: "Vľavo a vpravo",
    middle: "Stred",
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
    edit: "upraviť",
    display: "zobraziť",
    contain: "Obsahovať",
    cover: "Prikryť",
    fill: "Vyplniť",
    next: "Budúci",
    last: "Minulý",
    onComplete: "pri dokončení",
    onHidden: "pri skrytí",
    onHiddenContainer: "Keď sa otázka alebo jej panel/stránka skryje",
    clearInvisibleValues: {
      none: "Nikdy"
    },
    clearIfInvisible: {
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
    autocomplete: {
      name: "Celé meno",
      "honorific-prefix": "Predpona",
      "given-name": "Krstné meno",
      "additional-name": "Stredné meno",
      "family-name": "Priezvisko",
      "honorific-suffix": "Prípona",
      nickname: "Prezývka",
      "organization-title": "Pracovná pozícia",
      username: "Používateľské meno",
      "new-password": "Nové heslo",
      "current-password": "Aktuálne heslo",
      organization: "Názov organizácie",
      "street-address": "Celá adresa",
      "address-line1": "Riadok adresy 1",
      "address-line2": "Riadok adresy 2",
      "address-line3": "Riadok adresy 3",
      "address-level4": "Adresa úrovne 4",
      "address-level3": "Adresa úrovne 3",
      "address-level2": "Adresa úrovne 2",
      "address-level1": "Adresa úrovne 1",
      country: "Kód krajiny",
      "country-name": "Názov krajiny",
      "postal-code": "Psč",
      "cc-name": "Meno držiteľa karty",
      "cc-given-name": "Krstné meno držiteľa karty",
      "cc-additional-name": "Stredné meno držiteľa karty",
      "cc-family-name": "Priezvisko držiteľa karty",
      "cc-number": "Číslo kreditnej karty",
      "cc-exp": "Dátum vypršania platnosti",
      "cc-exp-month": "Mesiac vypršania platnosti",
      "cc-exp-year": "Rok vypršania platnosti",
      "cc-csc": "Bezpečnostný kód karty",
      "cc-type": "Typ kreditnej karty",
      "transaction-currency": "Mena transakcie",
      "transaction-amount": "Suma transakcie",
      language: "Preferovaný jazyk",
      bday: "Narodeniny",
      "bday-day": "Deň narodenín",
      "bday-month": "Mesiac narodenín",
      "bday-year": "Rok narodenín",
      sex: "Pohlavie",
      url: "URL adresa webovej stránky",
      photo: "Profilová fotka",
      tel: "Telefónne číslo",
      "tel-country-code": "Kód krajiny pre telefón",
      "tel-national": "Národné telefónne číslo",
      "tel-area-code": "Telefónna Predvoľba",
      "tel-local": "Miestne telefónne číslo",
      "tel-local-prefix": "Lokálna predvoľba telefónu",
      "tel-local-suffix": "Prípona miestneho telefónu",
      "tel-extension": "Rozšírenie telefónu",
      email: "E-mailová adresa",
      impp: "Protokol okamžitých správ"
    },
    maskType: {
      none: "Žiadny",
      pattern: "Vzorka",
      numeric: "Numerický",
      datetime: "Dátum a čas",
      currency: "Mena"
    },
    inputTextAlignment: {
      auto: "Auto",
      left: "Vľavo",
      right: "Doprava"
    },
    all: "všetko",
    page: "stránka",
    survey: "prieskum",
    onNextPage: "na ďalšej stránke",
    onValueChanged: "pri zmene hodnoty",
    onValueChanging: "Pred zmenou odpovede",
    questionsOnPageMode: {
      standard: "Pôvodná štruktúra",
      singlePage: "Zobraziť všetky otázky na jednej stránke",
      questionPerPage: "Zobraziť jednu otázku na stránku"
    },
    noPreview: "žiadna ukážka",
    showAllQuestions: "zobraziť ukážku so všetkými otázkami",
    showAnsweredQuestions: "zobraziť ukážku so zodpovedanými otázkami",
    allQuestions: "Zobraziť všetky otázky",
    answeredQuestions: "Zobraziť len zodpovedané otázky",
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
    auto: "Auto",
    showNavigationButtons: {
      none: "Skrytý"
    },
    timerInfoMode: {
      combined: "Obidva"
    },
    addRowButtonLocation: {
      default: "Závisí od rozloženia matice"
    },
    panelsState: {
      default: "Používatelia nemôžu rozbaliť alebo zbaliť panely",
      collapsed: "Všetky panely sú zbalené",
      expanded: "Všetky panely sú rozšírené",
      firstExpanded: "Prvé rozšírenie"
    },
    widthMode: {
      static: "Statický",
      responsive: "Citlivý"
    },
    contentMode: {
      image: "Obraz",
      video: "Video",
      youtube: "YouTube"
    },
    displayMode: {
      buttons: "Tlačidlá",
      dropdown: "Rozbaľovací zoznam"
    },
    rateColorMode: {
      default: "Predvolený",
      scale: "Stupnica"
    },
    scaleColorMode: {
      monochrome: "Jednofarebný",
      colored: "Farebný"
    },
    autoGenerate: {
      "true": "Generovať",
      "false": "Manuálne zadanie"
    },
    rateType: {
      labels: "Menovky",
      stars: "Hviezdy",
      smileys: "Smajlíky"
    },
    state: {
      default: "Zamknutý"
    },
    showQuestionNumbers: {
      default: "Automatické číslovanie",
      on: "Automatické číslovanie",
      onPage: "Obnoviť na každej stránke",
      onpanel: "Resetovať na každom paneli",
      onPanel: "Resetovať na každom paneli",
      recursive: "Rekurzívne číslovanie",
      onSurvey: "Pokračujte v prieskume",
      off: "Bez číslovania"
    },
    descriptionLocation: {
      underTitle: "Pod názvom otázky",
      underInput: "Pod vstupným poľom"
    },
    selectToRankAreasLayout: {
      horizontal: "Vedľa možností",
      vertical: "Vyššie uvedené možnosti"
    },
    displayStyle: {
      decimal: "Desatinný",
      currency: "Mena",
      percent: "Percento",
      date: "Dátum"
    },
    totalDisplayStyle: {
      decimal: "Desatinný",
      currency: "Mena",
      percent: "Percento",
      date: "Dátum"
    },
    rowOrder: {
      initial: "Originál"
    },
    questionOrder: {
      initial: "Originál"
    },
    progressBarLocation: {
      top: "Vrchol",
      bottom: "Dno",
      topbottom: "Hore a dole",
      aboveheader: "Nad hlavičkou",
      belowheader: "Pod hlavičkou",
      off: "Skrytý"
    },
    sum: "Súčet",
    count: "Počítať",
    min: "Min",
    max: "Max",
    avg: "Avg",
    searchMode: {
      contains: "Obsahuje",
      startsWith: "Začína sa"
    },
    backgroundImageFit: {
      auto: "Auto",
      cover: "Prikryť",
      contain: "Obsahovať",
      fill: "Natiahnuť",
      tile: "Dlaždica"
    },
    backgroundImageAttachment: {
      fixed: "Stabilný",
      scroll: "Zvitok"
    },
    headerView: {
      basic: "Základný",
      advanced: "Pokročilý"
    },
    inheritWidthFrom: {
      survey: "Rovnaké ako prieskum",
      container: "Vhodné na kontajner"
    },
    backgroundColorSwitch: {
      none: "Žiadny",
      accentColor: "Farba akcentu",
      custom: "Zvyk"
    },
    colorPalette: {
      light: "Svetlo",
      dark: "Tmavý"
    },
    isPanelless: {
      "false": "Predvolený",
      "true": "Bez panelov"
    },
    progressBarInheritWidthFrom: {
      survey: "Rovnaké ako prieskum",
      container: "Rovnaké ako kontajner"
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
  peplaceholder: {
    patternmask: {
      pattern: "Napríklad: +1(999)-999-99-99"
    },
    datetimemask: {
      pattern: "Napr.: mm/dd/rrrr"
    },
    currencymask: {
      prefix: "Napr.: $",
      suffix: "Napríklad: USD"
    },
    panelbase: {
      questionTitleWidth: "Napríklad: 200px"
    },
    panellayoutcolumn: {
      effectiveWidth: "Príklad: 30 %",
      questionTitleWidth: "Príklad: 200 pixelov"
    }
  },
  pehelp: {
    panel: {
      name: "ID panela, ktoré respondenti nevidia.",
      description: "Zadajte podnadpis panela.",
      visibleIf: "Pomocou ikony čarovného prútika nastavte podmienené pravidlo, ktoré určuje viditeľnosť panela.",
      enableIf: "Pomocou ikony čarovnej paličky nastavte podmienené pravidlo, ktoré vypne režim iba na čítanie pre panel.",
      requiredIf: "Pomocou ikony čarovného prútika nastavte podmienené pravidlo, ktoré zabráni odoslaniu prieskumu, pokiaľ aspoň jedna vnorená otázka nemá odpoveď.",
      questionTitleLocation: "Vzťahuje sa na všetky otázky v tomto paneli. Ak chcete toto nastavenie prepísať, definujte pravidlá zarovnania názvu pre jednotlivé otázky. Možnosť Dediť použije nastavenie na úrovni stránky (ak je nastavená) alebo na úrovni prieskumu (\"Predvolene navrchu\").",
      questionTitleWidth: "Nastavuje konzistentnú šírku názvov otázok, keď sú zarovnané naľavo od polí otázok. Akceptuje hodnoty CSS (px, %, in, pt atď.).",
      questionErrorLocation: "Nastaví umiestnenie chybového hlásenia vo vzťahu ku všetkým otázkam v paneli. Možnosť Zdediť použije nastavenie na úrovni stránky (ak je nastavená) alebo na úrovni prieskumu.",
      questionOrder: "Zachová pôvodné poradie otázok alebo ich náhodne vyberie. Možnosť Zdediť použije nastavenie na úrovni stránky (ak je nastavená) alebo na úrovni prieskumu.",
      page: "Premiestni panel na koniec vybratej strany.",
      innerIndent: "Pridá medzeru alebo okraj medzi obsah panela a ľavý okraj panela.",
      startWithNewLine: "Zrušte výber výberu, ak chcete panel zobraziť v jednom riadku s predchádzajúcou otázkou alebo panelom. Toto nastavenie sa neuplatňuje, ak je panel prvým prvkom vo formulári.",
      state: "Vyberte si z: \"Rozšírené\" - panel je zobrazený v plnom rozsahu a môže byť zbalený; \"Zbalené\" - panel zobrazuje iba názov a popis a je možné ho rozšíriť; \"Zamknutý\" - panel sa zobrazuje v plnom rozsahu a nedá sa zbaliť.",
      width: "Nastaví šírku panela v pomere k ostatným prvkom prieskumu v tej istej čiare. Akceptuje hodnoty CSS (px, %, in, pt atď.).",
      showQuestionNumbers: "Priradí čísla otázkam vnoreným do tohto panela.",
      effectiveColSpan: "Určuje, koľko stĺpcov má tento panel v rozložení mriežky.",
      gridLayoutColumns: "Táto tabuľka umožňuje nakonfigurovať každý stĺpec mriežky v paneli. Automaticky nastaví percentuálnu šírku pre každý stĺpec na základe maximálneho počtu prvkov v riadku. Ak chcete prispôsobiť rozloženie mriežky, manuálne upravte tieto hodnoty a definujte šírku názvu pre všetky otázky v každom stĺpci."
    },
    paneldynamic: {
      name: "ID panela, ktoré respondenti nevidia.",
      description: "Zadajte podnadpis panela.",
      visibleIf: "Pomocou ikony čarovného prútika nastavte podmienené pravidlo, ktoré určuje viditeľnosť panela.",
      enableIf: "Pomocou ikony čarovnej paličky nastavte podmienené pravidlo, ktoré vypne režim iba na čítanie pre panel.",
      requiredIf: "Pomocou ikony čarovného prútika nastavte podmienené pravidlo, ktoré zabráni odoslaniu prieskumu, pokiaľ aspoň jedna vnorená otázka nemá odpoveď.",
      templateQuestionTitleLocation: "Vzťahuje sa na všetky otázky v tomto paneli. Ak chcete toto nastavenie prepísať, definujte pravidlá zarovnania názvu pre jednotlivé otázky. Možnosť Dediť použije nastavenie na úrovni stránky (ak je nastavená) alebo na úrovni prieskumu (\"Predvolene navrchu\").",
      templateQuestionTitleWidth: "Nastaví konzistentnú šírku názvov otázok, keď sú zarovnané naľavo od polí otázok. Akceptuje hodnoty CSS (px, %, in, pt atď.).",
      templateErrorLocation: "Nastaví umiestnenie chybového hlásenia vo vzťahu k otázke s neplatným zadaním. Vyberte si medzi: \"Hore\" - v hornej časti poľa otázok sa umiestni chybový text; \"Dole\" - v dolnej časti poľa otázok je umiestnený chybový text. Možnosť Dediť použije nastavenie na úrovni stránky (ak je nastavená) alebo na úrovni prieskumu (\"Predvolene navrchu\").",
      errorLocation: "Nastaví umiestnenie chybového hlásenia vo vzťahu ku všetkým otázkam v paneli. Možnosť Zdediť použije nastavenie na úrovni stránky (ak je nastavená) alebo na úrovni prieskumu.",
      page: "Premiestni panel na koniec vybratej strany.",
      innerIndent: "Pridá medzeru alebo okraj medzi obsah panela a ľavý okraj panela.",
      startWithNewLine: "Zrušte výber výberu, ak chcete panel zobraziť v jednom riadku s predchádzajúcou otázkou alebo panelom. Toto nastavenie sa neuplatňuje, ak je panel prvým prvkom vo formulári.",
      state: "Vyberte si z: \"Rozšírené\" - panel je zobrazený v plnom rozsahu a môže byť zbalený; \"Zbalené\" - panel zobrazuje iba názov a popis a je možné ho rozšíriť; \"Zamknutý\" - panel sa zobrazuje v plnom rozsahu a nedá sa zbaliť.",
      width: "Nastaví šírku panela v pomere k ostatným prvkom prieskumu v tej istej čiare. Akceptuje hodnoty CSS (px, %, in, pt atď.).",
      templateTitle: "Zadajte šablónu pre názvy dynamických panelov. Použite {panelIndex} pre všeobecnú pozíciu panela a {visiblePanelIndex} pre jeho poradie medzi viditeľnými panelmi. Vložením týchto zástupných symbolov do vzoru pridáte automatické číslovanie.",
      templateTabTitle: "Zadajte šablónu pre názvy kariet. Použite {panelIndex} pre všeobecnú pozíciu panela a {visiblePanelIndex} pre jeho poradie medzi viditeľnými panelmi. Vložením týchto zástupných symbolov do vzoru pridáte automatické číslovanie.",
      tabTitlePlaceholder: "Záložný text pre názvy kariet, ktorý sa použije, keď vzor názvu tabulátora nevytvára zmysluplnú hodnotu.",
      templateVisibleIf: "Toto nastavenie umožňuje ovládať viditeľnosť jednotlivých panelov v dynamickom paneli. Použite zástupný symbol {panel} na odkaz na aktuálny panel vo svojom výraze.",
      titleLocation: "Toto nastavenie sa automaticky dedí všetkými otázkami na tomto paneli. Ak chcete toto nastavenie prepísať, definujte pravidlá zarovnania názvu pre jednotlivé otázky. Možnosť Dediť použije nastavenie na úrovni stránky (ak je nastavená) alebo na úrovni prieskumu (\"Predvolene navrchu\").",
      descriptionLocation: "Možnosť \"Dediť\" použije nastavenie na úrovni stránky (ak je nastavená) alebo na úrovni prieskumu (\"Predvolene pod názvom panela\").",
      newPanelPosition: "Definuje pozíciu novo pridaného panela. V predvolenom nastavení sa na koniec pridávajú nové panely. Výberom položky \"Ďalej\" vložíte nový panel za aktuálny.",
      copyDefaultValueFromLastEntry: "Duplikuje odpovede z posledného panela a priradí ich ďalšiemu pridanému dynamickému panelu.",
      keyName: "Odkážte na názov otázky, ak chcete, aby používateľ poskytol jedinečnú odpoveď na túto otázku na každom paneli."
    },
    copyDefaultValueFromLastEntry: "Duplikuje odpovede z posledného riadka a priradí ich k ďalšiemu pridanému dynamickému riadku.",
    defaultValueExpression: "Toto nastavenie vám umožňuje priradiť predvolenú hodnotu odpovede na základe výrazu. Výraz môže obsahovať základné výpočty - '{q1_id} + {q2_id}', boolovské výrazy, ako napríklad '{age} > 60', a funkcie: 'iif()', 'today()', 'age()', 'min()', 'max()', 'avg()' atď. Hodnota určená týmto výrazom slúži ako počiatočná predvolená hodnota, ktorú je možné prepísať manuálnym vstupom respondenta.",
    resetValueIf: "Pomocou ikony čarovného prútika nastavte podmienené pravidlo, ktoré určuje, kedy sa vstup respondenta obnoví na hodnotu na základe hodnoty \"Výraz predvolenej hodnoty\" alebo \"Výraz nastavenej hodnoty\" alebo hodnoty \"Predvolená odpoveď\" (ak je nastavená).",
    setValueIf: "Pomocou ikony čarovného prútika nastavte podmienené pravidlo, ktoré určuje, kedy spustiť \"Nastaviť výraz hodnoty\" a dynamicky priradiť výslednú hodnotu ako odpoveď.",
    setValueExpression: "Zadajte výraz, ktorý definuje hodnotu, ktorá sa má nastaviť, keď sú splnené podmienky pravidla \"Nastaviť hodnotu ak\". Výraz môže obsahovať základné výpočty - '{q1_id} + {q2_id}', boolovské výrazy, ako napríklad '{age} > 60', a funkcie: 'iif()', 'today()', 'age()', 'min()', 'max()', 'avg()' atď. Hodnota určená týmto výrazom môže byť prepísaná manuálnym vstupom respondenta.",
    gridLayoutEnabled: "Aplikácia Survey Creator umožňuje manuálne upraviť vnorené šírky prvkov formulára na ovládanie rozloženia. Ak to neprinesie požadovaný výsledok, môžete povoliť rozloženie mriežky, ktoré štruktúry tvoria prvky pomocou systému založeného na stĺpcoch. Ak chcete nakonfigurovať stĺpce rozloženia, vyberte stránku alebo panel a použite tabuľku \"Nastavenia otázky\" → \"Stĺpce mriežky\". Ak chcete upraviť, koľko stĺpcov otázka zahŕňa, vyberte ju a nastavte požadovanú hodnotu v poli \"Rozloženie\" → \"Rozsah stĺpcov\".",
    question: {
      name: "ID otázky, ktoré respondenti nevidia.",
      description: "Zadajte podnadpis otázky.",
      visibleIf: "Pomocou ikony čarovného prútika nastavte podmienené pravidlo, ktoré určuje viditeľnosť otázky.",
      enableIf: "Pomocou ikony čarovnej paličky nastavte podmienené pravidlo, ktoré vypne režim iba na čítanie pre otázku.",
      requiredIf: "Pomocou ikony čarovného prútika nastavte podmienené pravidlo, ktoré zabráni postupu alebo odoslaniu prieskumu, pokiaľ otázka nedostala odpoveď.",
      startWithNewLine: "Zrušte výber výberu, ak chcete otázku zobraziť v jednom riadku s predchádzajúcou otázkou alebo panelom. Toto nastavenie sa neuplatňuje, ak je otázka prvým prvkom vo formulári.",
      page: "Premiestni otázku na koniec vybratej strany.",
      state: "Vyberte si z: \"Rozšírené\" - pole otázky sa zobrazí v plnom rozsahu a dá sa zbaliť; \"Zbalené\" - pole otázky zobrazuje iba názov a popis a je možné ho rozbaliť; \"Zamknuté\" - pole otázok sa zobrazí v plnom rozsahu a nedá sa zbaliť.",
      titleLocation: "Prepíše pravidlá zarovnania názvu definované na úrovni panela, stránky alebo prieskumu. Možnosť \"Dediť\" použije akékoľvek nastavenia vyššej úrovne (ak sú nastavené) alebo nastavenia na úrovni prieskumu (\"Predvolene hore\").",
      descriptionLocation: "Možnosť \"Zdediť\" použije nastavenie na úrovni prieskumu (\"Predvolene pod názvom otázky\").",
      errorLocation: "Nastaví umiestnenie chybového hlásenia vo vzťahu k otázke s neplatným zadaním. Vyberte si medzi: \"Hore\" - v hornej časti poľa otázok sa umiestni chybový text; \"Dole\" - v dolnej časti poľa otázok je umiestnený chybový text. Možnosť \"Zdediť\" použije nastavenie na úrovni prieskumu (\"Predvolene hore\").",
      indent: "Pridá medzeru alebo okraj medzi obsah otázky a ľavý okraj poľa otázok.",
      width: "Nastaví šírku otázky v pomere k ostatným prvkom prieskumu v tom istom riadku. Akceptuje hodnoty CSS (px, %, in, pt atď.).",
      surveyvalidator: {
        expression: "Pomocou ikony čarovného prútika nastavte overovacie pravidlo pre otázku."
      },
      textUpdateMode: "Vyberte si z: \"Pri strate zaostrenia\" - hodnota sa aktualizuje, keď vstupné pole stratí zaostrenie; \"Počas písania\" - hodnota sa aktualizuje v reálnom čase, keď používatelia píšu. Možnosť \"Zdediť\" použije nastavenie na úrovni prieskumu (\"Predvolene stratené zameranie\").",
      url: "Ako zdroj údajov môžete použiť ľubovoľnú webovú službu na otázky s voliteľnými odpoveďami. Ak chcete vyplniť hodnoty možností, zadajte adresu URL služby poskytujúcej údaje.",
      searchMode: "Porovnávacia operácia použitá na filtrovanie rozbaľovacieho zoznamu.",
      textWrapEnabled: "Dlhé texty v možnostiach výberu automaticky vygenerujú zlomy riadkov, aby sa zmestili do rozbaľovacej ponuky. Zrušte výber, či chcete texty vystrihnúť.",
      effectiveColSpan: "Určuje, koľko stĺpcov táto otázka zahŕňa v rozložení mriežky."
    },
    signaturepad: {
      signatureWidth: "Nastaví šírku zobrazenej oblasti podpisu a výsledného obrázka.",
      signatureHeight: "Nastaví výšku zobrazenej oblasti podpisu a výsledného obrázka.",
      signatureAutoScaleEnabled: "Vyberte, či chcete, aby oblasť podpisu vyplnila všetok dostupný priestor v poli otázky pri zachovaní predvoleného pomeru strán 3:2. Keď sú nastavené vlastné hodnoty šírky a výšky, nastavenie zachová pomer strán týchto rozmerov."
    },
    file: {
      imageHeight: "Upraví výšku obrázka vo výsledkoch prieskumu.",
      imageWidth: "Upraví šírku obrázka vo výsledkoch prieskumu.",
      allowImagesPreview: "Ak je to možné, zobrazí náhľady miniatúr nahraných súborov. Zrušte výber, ak chcete namiesto toho zobraziť ikony súborov."
    },
    image: {
      contentMode: "Možnosť \"Auto\" automaticky určuje vhodný režim zobrazenia - obrázok, video alebo YouTube - na základe poskytnutej zdrojovej adresy URL."
    },
    imagepicker: {
      imageHeight: "Prepíše hodnoty minimálnej a maximálnej výšky.",
      imageWidth: "Prepíše hodnoty minimálnej a maximálnej šírky.",
      choices: "\"Hodnota\" slúži ako ID položky používané v podmienených pravidlách; \"Text\" sa zobrazuje respondentom.",
      contentMode: "Vyberte si medzi \"Obrázok\" a \"Video\" a nastavte režim obsahu výberu médií. Ak je vybratá možnosť \"Obrázok\", uistite sa, že všetky poskytnuté možnosti sú obrazové súbory v nasledujúcich formátoch: JPEG, GIF, PNG, APNG, SVG, BMP, ICO. Podobne, ak je vybratá možnosť \"Video\", uistite sa, že všetky možnosti sú priamymi odkazmi na video súbory v nasledujúcich formátoch: MP4, MOV, WMV, FLV, AVI, MKV. Upozorňujeme, že možnosti videí nie sú podporované odkazmi na YouTube."
    },
    text: {
      size: "Toto nastavenie zmení iba veľkosť vstupného poľa a neovplyvní šírku poľa otázky. Ak chcete obmedziť akceptovanú vstupnú dĺžku, prejdite na <b>Overenie → Maximálny počet znakov</b>."
    },
    comment: {
      rows: "Nastaví počet zobrazených riadkov vo vstupnom poli. Ak vstup zaberá viac riadkov, zobrazí sa posúvač."
    },
    // survey templates
    survey: {
      readOnly: "Vyberte, či chcete respondentom zabrániť vo vypĺňaní prieskumu.",
      progressBarLocation: "Nastaví umiestnenie indikátora priebehu. Hodnota \"Auto\" zobrazuje indikátor priebehu nad alebo pod hlavičkou prieskumu."
    },
    matrixdropdowncolumn: {
      name: "ID stĺpca, ktoré respondenti nevidia.",
      isUnique: "Ak je pre stĺpec povolené, respondent je povinný poskytnúť jedinečnú odpoveď na každú otázku v tomto stĺpci.",
      rows: "Nastaví počet zobrazených riadkov vo vstupnom poli. Ak vstup zaberá viac riadkov, zobrazí sa posúvač.",
      visibleIf: "Pomocou ikony čarovného prútika nastavte podmienené pravidlo, ktoré určuje viditeľnosť stĺpca.",
      enableIf: "Pomocou ikony čarovnej paličky nastavte podmienené pravidlo, ktoré vypne režim iba na čítanie pre stĺpec.",
      requiredIf: "Pomocou ikony čarovného prútika nastavte podmienené pravidlo, ktoré zabráni odoslaniu prieskumu, pokiaľ aspoň jedna vnorená otázka nemá odpoveď.",
      showInMultipleColumns: "Ak je táto voľba vybratá, vytvorí samostatný stĺpec pre každú možnosť výberu.",
      colCount: "Usporiada možnosti výberu vo viacstĺpcovom rozložení. Ak je nastavená hodnota 0, možnosti sa zobrazia v jednom riadku. Ak je nastavená na -1, skutočná hodnota sa zdedí z vlastnosti \"Počet vnorených stĺpcov\" nadradenej matice."
    },
    caseInsensitive: "Vyberte, či sa veľké a malé písmená v regulárnom výraze musia považovať za ekvivalentné.",
    widthMode: "Vyberte si z: \"Statický\" - nastavuje pevnú šírku; \"Responzívny\" - spôsobuje, že prieskum zaberá celú šírku obrazovky; \"Auto\" - použije ktorýkoľvek z týchto dvoch v závislosti od použitých typov otázok.",
    cookieName: "Súbory cookie zabraňujú používateľom vyplniť ten istý prieskum dvakrát.",
    logo: "Prilepte odkaz na obrázok (bez obmedzenia veľkosti) alebo kliknite na ikonu priečinka a prehľadávajte súbor z počítača (až 64 kB).",
    logoWidth: "Nastavuje šírku loga v jednotkách CSS (px, %, in, pt atď.).",
    logoHeight: "Nastavuje výšku loga v jednotkách CSS (px, %, in, pt atď.).",
    logoFit: "Vyberte si z: \"Žiadne\" - obrázok si zachováva svoju pôvodnú veľkosť; \"Obsahovať\" - veľkosť obrázka sa zmení tak, aby sa zmestil pri zachovaní pomeru strán; \"Obal\" - obrázok vyplní celé pole pri zachovaní pomeru strán; \"Vyplniť\" - obrázok je natiahnutý tak, aby vyplnil pole bez zachovania pomeru strán.",
    autoAdvanceEnabled: "Vyberte, či chcete, aby sa prieskum automaticky posunul na ďalšiu stránku, keď respondent odpovie na všetky otázky na aktuálnej stránke. Táto funkcia sa nepoužije, ak je posledná otázka na stránke otvorená alebo umožňuje viacero odpovedí.",
    autoAdvanceAllowComplete: "Vyberte, či chcete, aby sa prieskum dokončil automaticky po tom, čo respondent odpovie na všetky otázky.",
    showNavigationButtons: "Nastavuje viditeľnosť a umiestnenie navigačných tlačidiel na stránke.",
    navigationButtonsLocation: "Nastaví umiestnenie navigačných tlačidiel na stránke.",
    showPreviewBeforeComplete: "Povoľte stránku ukážky so všetkými alebo iba zodpovedanými otázkami.",
    questionTitleLocation: "Vzťahuje sa na všetky otázky v rámci prieskumu. Toto nastavenie je možné prepísať pravidlami zarovnania názvov na nižších úrovniach: panel, stránka alebo otázka. Nastavenie nižšej úrovne prepíše nastavenia na vyššej úrovni.",
    requiredMark: "Symbol alebo postupnosť symbolov označujúcich, že sa vyžaduje odpoveď.",
    questionStartIndex: "Zadajte číslo alebo písmeno, ktorým chcete začať číslovanie.",
    questionErrorLocation: "Nastaví umiestnenie chybového hlásenia vo vzťahu k otázke s neplatným zadaním. Vyberte si medzi: \"Hore\" - v hornej časti poľa otázok sa umiestni chybový text; \"Dole\" - v dolnej časti poľa otázok je umiestnený chybový text.",
    autoFocusFirstQuestion: "Vyberte, či chcete prvé vstupné pole na každej strane pripraviť na zadávanie textu.",
    questionOrder: "Zachová pôvodné poradie otázok alebo ich náhodne vyberie. Efekt tohto nastavenia je viditeľný iba na karte Ukážka.",
    maxTextLength: "Len pre otázky týkajúce sa zadávania textu.",
    maxCommentLength: "Len pre komentáre k otázkam.",
    commentAreaRows: "Nastaví počet zobrazených riadkov v textových oblastiach pre komentáre k otázkam. Ak vstup zaberie viac riadkov, zobrazí sa posúvač.",
    autoGrowComment: "Vyberte, či chcete, aby komentáre otázok a otázky s dlhým textom automaticky narástli na výšku na základe zadanej dĺžky textu.",
    allowResizeComment: "Iba pre komentáre k otázkam a otázky s dlhým textom.",
    calculatedValues: "Vlastné premenné slúžia ako medziľahlé alebo pomocné premenné používané vo výpočtoch formulárov. Vstupy respondentov berú ako zdrojové hodnoty. Každá vlastná premenná má jedinečný názov a výraz, na ktorom je založená.",
    includeIntoResult: "Vyberte, či chcete, aby sa vypočítaná hodnota výrazu uložila spolu s výsledkami prieskumu.",
    triggers: "Spúšťač je udalosť alebo podmienka, ktorá je založená na výraze. Keď je výraz vyhodnotený ako \"true\", spúšťač spustí akciu. Takáto akcia môže mať voliteľne cieľovú otázku, ktorú ovplyvňuje.",
    clearInvisibleValues: "Vyberte, či chcete vymazať hodnoty pre otázky skryté podmienenou logikou a kedy to urobiť.",
    textUpdateMode: "Vyberte si z: \"Pri strate zaostrenia\" - hodnota sa aktualizuje, keď vstupné pole stratí zaostrenie; \"Počas písania\" - hodnota sa aktualizuje v reálnom čase, keď používatelia píšu.",
    columns: "Ľavá hodnota slúži ako ID stĺpca používaného v podmienených pravidlách, pravá hodnota sa zobrazuje respondentom.",
    rows: "Ľavá hodnota slúži ako ID riadka používaného v podmienených pravidlách, pravá hodnota sa zobrazuje respondentom.",
    columnMinWidth: "Akceptuje hodnoty CSS (px, %, in, pt atď.).",
    rowTitleWidth: "Akceptuje hodnoty CSS (px, %, in, pt atď.).",
    totalText: "Viditeľné len vtedy, ak aspoň jeden stĺpec obsahuje výraz Typ celkom alebo Celkom.",
    cellErrorLocation: "Nastaví umiestnenie chybového hlásenia vo vzťahu k bunke s neplatným vstupom. Možnosť Zdediť použije nastavenie z vlastnosti Zarovnanie chybového hlásenia.",
    detailErrorLocation: "Nastaví umiestnenie chybových hlásení pre otázky vnorené do podrobných sekcií. Možnosť \"Zdediť\" použije nastavenie z vlastnosti \"Zarovnanie chybového hlásenia\".",
    keyDuplicationError: "Keď je povolená vlastnosť Zabrániť duplicitným odpovediam, respondentovi, ktorý sa pokúša odoslať duplicitný záznam, sa zobrazí nasledujúce chybové hlásenie.",
    totalExpression: "Umožňuje vypočítať celkové hodnoty na základe výrazu. Výraz môže obsahovať základné výpočty (\"{q1_id} + {q2_id}\"), boolovské výrazy (\"{age} > 60') a funkcie (\"iif()\", \"today()\", \"age()\", \"min()\", \"max()\", \"avg()\" atď.).",
    confirmDelete: "Spustí výzvu so žiadosťou o potvrdenie odstránenia riadka.",
    keyName: "Ak zadaný stĺpec obsahuje rovnaké hodnoty, prieskum vyhodí chybu \"Nejedinečná hodnota kľúča\".",
    description: "Zadajte podnadpis.",
    locale: "Vyberte jazyk a začnite vytvárať prieskum. Ak chcete pridať preklad, prepnite na nový jazyk a preložte pôvodný text tu alebo na karte Preklady.",
    detailPanelMode: "Nastaví umiestnenie sekcie podrobností vo vzťahu k riadku. Vyberte si z: \"Žiadne\" - nie je pridané žiadne rozšírenie; \"Pod riadkom\" - pod každým riadkom matice je umiestnené rozšírenie riadku; \"Pod riadkom zobraziť iba rozšírenie jedného riadka\" - rozšírenie sa zobrazí iba pod jedným riadkom, zvyšné rozšírenia riadkov sa zbalia.",
    imageFit: "Vyberte si z: \"Žiadne\" - obrázok si zachováva svoju pôvodnú veľkosť; \"Obsahovať\" - veľkosť obrázka sa zmení tak, aby sa zmestil pri zachovaní pomeru strán; \"Obal\" - obrázok vyplní celé pole pri zachovaní pomeru strán; \"Vyplniť\" - obrázok je natiahnutý tak, aby vyplnil pole bez zachovania pomeru strán.",
    autoGrow: "Postupne zvyšuje výšku vstupného poľa pri zadávaní údajov. Prepíše nastavenie Výška vstupného poľa (v riadkoch).",
    allowResize: "Rukoväť na zmenu veľkosti (alebo uchopenie) sa zobrazí v rohu a potiahnutím môžete zmeniť veľkosť vstupného poľa.",
    timeLimit: "Časový interval v sekundách, po ktorom prieskum automaticky prejde na stránku s poďakovaním.",
    timeLimitPerPage: "Časový interval v sekundách, po ktorom prieskum automaticky prejde na ďalšiu stránku.",
    validateVisitedEmptyFields: "Povoľte túto možnosť, ak chcete spustiť overenie, keď sa používateľ zameria na prázdne vstupné pole a potom ho opustí bez vykonania akýchkoľvek zmien.",
    page: {
      name: "Identifikátor stránky, ktorý nie je viditeľný pre respondentov.",
      description: "Zadajte podnadpis strany.",
      navigationTitle: "Titulok zobrazený na navigačnom tlačidle na indikátore priebehu alebo obsahu. Ak toto pole necháte prázdne, navigačné tlačidlo použije názov stránky alebo názov stránky. Ak chcete povoliť indikátor priebehu alebo obsah, prejdite na \"Prieskum\" → \"Navigácia\".",
      timeLimit: "Časový interval v sekundách, po ktorom prieskum automaticky prejde na ďalšiu stránku.",
      visibleIf: "Pomocou ikony čarovnej paličky nastavte podmienené pravidlo, ktoré určuje viditeľnosť stránky.",
      enableIf: "Pomocou ikony čarovného prútika nastavte podmienené pravidlo, ktoré vypne režim iba na čítanie pre stránku.",
      requiredIf: "Pomocou ikony čarovného prútika nastavte podmienené pravidlo, ktoré zabráni odoslaniu prieskumu, pokiaľ aspoň jedna vnorená otázka nemá odpoveď.",
      questionTitleLocation: "Vzťahuje sa na všetky otázky na tejto stránke. Ak chcete toto nastavenie prepísať, definujte pravidlá zarovnania názvu pre jednotlivé otázky alebo panely. Možnosť \"Zdediť\" použije nastavenie na úrovni prieskumu (\"Predvolene hore\").",
      questionTitleWidth: "Nastavuje konzistentnú šírku názvov otázok, keď sú zarovnané naľavo od polí otázok. Akceptuje hodnoty CSS (px, %, in, pt atď.).",
      questionErrorLocation: "Nastaví umiestnenie chybového hlásenia vo vzťahu k otázke s neplatným zadaním. Vyberte si medzi: \"Hore\" - v hornej časti poľa otázok sa umiestni chybový text; \"Dole\" - v dolnej časti poľa otázok je umiestnený chybový text. Možnosť \"Zdediť\" použije nastavenie na úrovni prieskumu (\"Predvolene hore\").",
      questionOrder: "Zachová pôvodné poradie otázok alebo ich náhodne vyberie. Možnosť \"Zdediť\" použije nastavenie na úrovni prieskumu (\"Originál\" v predvolenom nastavení). Efekt tohto nastavenia je viditeľný iba na karte Ukážka.",
      showNavigationButtons: "Nastavuje viditeľnosť navigačných tlačidiel na stránke. Možnosť Zdediť použije nastavenie na úrovni prieskumu, ktoré je predvolene nastavené na \"Viditeľné\".",
      gridLayoutColumns: "Táto tabuľka umožňuje nakonfigurovať každý stĺpec mriežky na strane. Automaticky nastaví percentuálnu šírku pre každý stĺpec na základe maximálneho počtu prvkov v riadku. Ak chcete prispôsobiť rozloženie mriežky, manuálne upravte tieto hodnoty a definujte šírku názvu pre všetky otázky v každom stĺpci."
    },
    timerLocation: "Nastaví umiestnenie časovača na strane.",
    panelsState: "Vyberte si z: \"Zamknuté\" - používatelia nemôžu rozširovať ani zbaliť panely; \"Zbaliť všetko\" - všetky panely začínajú v zbalenom stave; \"Rozbaliť všetko\" - všetky panely začínajú v rozšírenom stave; \"Prvý rozšírený\" - pôvodne sa rozšíril iba prvý panel.",
    imageLinkName: "Zadajte zdieľaný názov vlastnosti do poľa objektov obsahujúceho URL adresy obrázkov alebo videosúborov, ktoré chcete zobraziť v zozname výberu.",
    choices: "Ľavá hodnota slúži ako ID položky používané v podmienených pravidlách, pravá hodnota sa zobrazuje respondentom.",
    title: "Zadajte používateľsky prívetivý názov, ktorý chcete zobraziť.",
    waitForUpload: "Zabezpečuje, že používatelia prieskum nevyplnia, kým sa nenahrajú súbory.",
    minWidth: "Akceptuje hodnoty CSS (px, %, in, pt atď.).",
    maxWidth: "Akceptuje hodnoty CSS (px, %, in, pt atď.).",
    width: "Akceptuje hodnoty CSS (px, %, in, pt atď.).",
    valueName: "Ak túto vlastnosť nenastavíte, odpoveď sa uloží do poľa určeného vlastnosťou Názov.",
    defaultDisplayValue: "Hodnota zobrazená v otázkach HTML a v dynamických názvoch a popisoch prvkov prieskumu, keď je hodnota otázky prázdna.",
    useDisplayValuesInDynamicTexts: "V prípade otázok s jedným a viacerými výbermi má každá možnosť výberu identifikátor a zobrazenú hodnotu. Ak je táto voľba vybratá, toto nastavenie zobrazuje zobrazenú hodnotu namiesto hodnoty ID v otázkach HTML a dynamických názvoch a popisoch prvkov prieskumu.",
    clearIfInvisible: "Vyberte, či chcete vymazať hodnoty otázok skryté podmienenou logikou a kedy to chcete urobiť. Možnosť \"Dediť\" použije nastavenie na úrovni prieskumu (\"Po dokončení prieskumu predvolene\").",
    choicesFromQuestionMode: "Vyberte si z: \"Všetko\" - skopíruje všetky možnosti výberu z vybranej otázky; \"Vybraté\" - dynamicky kopíruje iba vybrané možnosti výberu; \"Nevybraté\" - dynamicky kopíruje iba nevybraté možnosti výberu. Možnosti \"Žiadne\" a \"Iné\" sa predvolene kopírujú, ak sú povolené v otázke zdroja.",
    choiceValuesFromQuestion: "V typoch otázok s jedným a viacerými výbermi má každá možnosť výberu ID a zobrazenú hodnotu. Toto nastavenie určuje, ktorý stĺpec matice alebo panelová otázka má poskytnúť ID.",
    choiceTextsFromQuestion: "V typoch otázok s jedným a viacerými výbermi má každá možnosť výberu ID a zobrazenú hodnotu. Toto nastavenie určuje, ktorý stĺpec matice alebo otázka panela by mala poskytovať zobrazované texty.",
    allowCustomChoices: "Vyberte, ak chcete respondentom umožniť pridať vlastné možnosti, ak požadovaná možnosť nie je k dispozícii v rozbaľovacej ponuke. Vlastné voľby sa budú ukladať iba dočasne počas trvania aktuálnej relácie prehliadača.",
    showOtherItem: "Ak je táto voľba vybratá, používatelia môžu zahrnúť ďalšie vstupy do samostatného poľa komentára.",
    separateSpecialChoices: "Zobrazí každú možnosť špeciálnej voľby (\"Žiadne\", \"Iné\", \"Vybrať všetko\") na novom riadku, a to aj pri použití rozloženia s viacerými stĺpcami.",
    path: "Zadajte umiestnenie v množine údajov služby, kde sa nachádza cieľové pole objektov. Ak URL adresa už odkazuje na pole, nechajte prázdne.",
    choicesbyurl: {
      valueName: " "
    },
    titleName: "Zadajte jednotný názov vlastnosti do poľa objektov obsahujúceho hodnoty, ktoré chcete zobraziť v zozname možností.",
    allowEmptyResponse: "Túto voľbu vyberte, ak chcete, aby služba vrátila prázdnu odpoveď alebo pole.",
    choicesVisibleIf: "Pomocou ikony čarovného prútika nastavte podmienené pravidlo, ktoré určuje viditeľnosť všetkých možností výberu.",
    rateValues: "Ľavá hodnota slúži ako ID položky používané v podmienených pravidlách, pravá hodnota sa zobrazuje respondentom.",
    rating: {
      displayMode: "\"Auto\" si vyberá medzi režimami \"Tlačidlá\" a \"Rozbaľovacia ponuka\" na základe dostupnej šírky. Ak šírka nie je dostatočná na zobrazenie tlačidiel, v otázke sa zobrazí rozbaľovací zoznam."
    },
    valuePropertyName: "Umožňuje prepojiť otázky, ktoré vytvárajú výsledky v rôznych formátoch. Keď sú takéto otázky prepojené pomocou identifikátora spojenia, v tomto zdieľanom vlastníctve sa uložia vybraté hodnoty otázok.",
    searchEnabled: "Vyberte, či chcete aktualizovať obsah rozbaľovacej ponuky tak, aby zodpovedal vyhľadávaciemu dotazu, ktorý používateľ zadáva do vstupného poľa.",
    valueTrue: "Hodnota, ktorú treba uložiť do výsledkov prieskumu, keď respondenti poskytnú kladnú odpoveď.",
    valueFalse: "Hodnota, ktorú je potrebné uložiť do výsledkov prieskumu, keď respondenti poskytnú zápornú odpoveď.",
    showPreview: "Túto možnosť sa neodporúča zakázať, pretože prepíše obrázok ukážky a sťažuje používateľovi pochopiť, či boli súbory nahrané.",
    needConfirmRemoveFile: "Spustí výzvu na potvrdenie odstránenia súboru.",
    selectToRankEnabled: "Povoľte zoradiť iba vybrané možnosti. Používatelia presunú vybrané položky zo zoznamu možností a zoradia ich v oblasti poradia.",
    dataList: "Zadajte zoznam možností, ktoré budú respondentovi navrhnuté počas vstupu.",
    inputSize: "Toto nastavenie zmení iba veľkosť vstupných polí a neovplyvní šírku poľa otázok.",
    itemTitleWidth: "Nastaví konzistentnú šírku pre všetky štítky položiek. Akceptuje hodnoty CSS (px, %, in, pt atď.).",
    inputTextAlignment: "Vyberte, ako chcete zarovnať vstupnú hodnotu v poli. Predvolené nastavenie \"Auto\" zarovná vstupnú hodnotu doprava, ak je použité maskovanie meny alebo čísel, a doľava, ak nie.",
    altText: "Slúži ako náhrada, keď obrázok nie je možné zobraziť na zariadení používateľa a na účely prístupnosti.",
    rateColorMode: "Definuje farbu vybraných emodži, keď je typ ikony hodnotenia nastavený na \"Smajlíky\". Vyberte si medzi: \"Predvolené\" - vybrané emodži sa zobrazia v predvolenej farbe prieskumu; \"Mierka\" - vybrané emodži zdedí farbu z hodnotiacej stupnice.",
    expression: {
      name: "ID výrazu, ktoré respondenti nevidia.",
      description: "Zadajte podnadpis výrazu.",
      expression: "Výraz môže obsahovať základné výpočty (\"{q1_id} + {q2_id}\"), podmienky (\"{vek} > 60\") a funkcie (\"iif()\", \"today()\", \"age()\", \"min()\", \"max()\", \"avg()\" atď.)."
    },
    storeOthersAsComment: "Túto voľbu vyberte, ak chcete uložiť hodnotu možnosti \"Iné\" ako samostatnú vlastnosť vo výsledkoch prieskumu.",
    format: "Použite {0} ako zástupný symbol skutočnej hodnoty.",
    acceptedTypes: "Ďalšie informácie nájdete v popise atribútu [accept](https://www.w3schools.com/tags/att_input_accept.asp).",
    columnColCount: "Vzťahuje sa len na typy buniek rádioskupiny a začiarkavacích políčok.",
    autocomplete: "Ďalšie informácie nájdete v popise atribútu [automatické dopĺňanie](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete).",
    filePlaceholder: "Použije, keď \"Typ zdroja\" je \"Lokálne súbory\" alebo keď fotoaparát nie je k dispozícii",
    photoPlaceholder: "Používa sa, keď \"Typ zdroja\" je \"Fotoaparát\".",
    fileOrPhotoPlaceholder: "Použije, keď \"Typ zdroja\" je \"Lokálne súbory alebo fotoaparát\".",
    colCount: "Usporiada možnosti výberu vo viacstĺpcovom rozložení. Ak je nastavená hodnota 0, možnosti sa zobrazia v jednom riadku.",
    masksettings: {
      saveMaskedValue: "Vyberte, či chcete do výsledkov prieskumu uložiť hodnotu otázky s použitou maskou."
    },
    patternmask: {
      pattern: "Vzor môže obsahovať reťazcové literály a nasledujúce zástupné symboly: \"9\" - pre číslicu; \"a\" - pre veľké alebo malé písmeno; '#' - pre číslicu alebo veľké alebo malé písmeno. Použite opačné lomítko \"\\\" na únik z postavy."
    },
    datetimemask: {
      pattern: "Vzor môže obsahovať oddeľovacie znaky a nasledujúce zástupné symboly:<br>\"m\" - číslo mesiaca.<br>′mm′ — číslo mesiaca s nulou na začiatku pre jednociferné hodnoty. <br>\"d\" - Deň v mesiaci. <br>\"dd\" - Deň v mesiaci s počiatočnou nulou pre jednociferné hodnoty. <br>\"yy\" - posledné dve číslice roka. <br>\"rrrr\" - štvormiestny rok. <br>\"H\" - hodiny v 24-hodinovom formáte. <br>\"HH\" - hodiny v 24-hodinovom formáte s úvodnou nulou pre jednociferné hodnoty. <br>\"h\" - hodiny v 12-hodinovom formáte. <br>\"hh\" - hodiny v 12-hodinovom formáte s úvodnou nulou pre jednociferné hodnoty. <br>\"MM\" - minúty. <br>\"ss\" - sekundy. <br>\"TT\" - 12-hodinový časový úsek veľkými písmenami (AM/PM). <br>\"TT\" - 12-hodinová perióda malých písmen (dopoludnia/popoludní)."
    },
    numericmask: {
      decimalSeparator: "Symbol používaný na oddelenie zlomkovej časti od celočíselnej časti zobrazeného čísla.",
      thousandsSeparator: "Symbol používaný na oddelenie číslic veľkého čísla do skupín po troch.",
      precision: "Obmedzuje, koľko číslic sa má zachovať za desatinnou čiarkou pre zobrazené číslo."
    },
    currencymask: {
      prefix: "Jeden alebo niekoľko symbolov, ktoré sa majú zobraziť pred hodnotou.",
      suffix: "Jeden alebo viac symbolov, ktoré sa zobrazia za hodnotou."
    },
    theme: {
      isPanelless: "Toto nastavenie sa vzťahuje len na otázky mimo panela.",
      primaryColor: "Nastaví doplnkovú farbu, ktorá zvýrazní kľúčové prvky prieskumu.",
      panelBackgroundTransparency: "Upravuje priehľadnosť panelov a polí otázok vzhľadom na pozadie prieskumu.",
      questionBackgroundTransparency: "Upraví priehľadnosť vstupných prvkov vzhľadom na pozadie prieskumu.",
      cornerRadius: "Nastaví polomer rohu pre všetky obdĺžnikové prvky. Povoľte Rozšírený režim, ak chcete nastaviť jednotlivé hodnoty polomeru rohu pre vstupné prvky alebo panely a polia otázok.",
      "--sjs-general-backcolor-dim": "Nastaví hlavnú farbu pozadia prieskumu."
    },
    header: {
      inheritWidthFrom: "Možnosť \"Rovnaké ako kontajner\" automaticky upraví šírku oblasti obsahu hlavičky tak, aby sa zmestila do prvku HTML, do ktorého je prieskum umiestnený.",
      textAreaWidth: "Šírka oblasti hlavičky, ktorá obsahuje názov a popis prieskumu, meraná v pixeloch.",
      overlapEnabled: "Ak je táto možnosť povolená, horná časť prieskumu prekrýva spodnú časť hlavičky.",
      mobileHeight: "Ak je nastavená hodnota 0, výška sa vypočíta automaticky, aby sa prispôsobila obsahu hlavičky."
    },
    progressBarInheritWidthFrom: "Možnosť \"Rovnaké ako kontajner\" automaticky upraví šírku oblasti indikátora priebehu tak, aby sa zmestila do prvku HTML, v ktorom je prieskum umiestnený."
  },
  // Properties
  p: {
    title: {
      name: "titul",
      title: "Nechajte prázdne, ak sa zhoduje s menom"
    },
    multiSelect: "Výber viacerých možností",
    showLabel: "Zobraziť štítok",
    swapOrder: "Zámena poradia Áno a Nie",
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
    inputSize: "Veľkosť položky",
    itemTitleWidth: "Šírka označenia položky (v px)",
    inputTextAlignment: "Zarovnanie vstupných hodnôt",
    elements: "Prvky",
    content: "Obsah",
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
    mobileHeight: "Výška na smartfónoch",
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
    selectToRankEmptyRankedAreaText: "Text, ktorý zobrazuje, či sú vybraté všetky možnosti",
    selectToRankEmptyUnrankedAreaText: "Zástupný text pre oblasť hodnotenia",
    allowCameraAccess: "Povolenie prístupu ku kamere",
    scaleColorMode: "Farebný režim mierky",
    rateColorMode: "Režim hodnotenia farieb",
    copyDisplayValue: "Kopírovať zobrazenú hodnotu",
    effectiveColSpan: "Rozpätie stĺpca",
    progressBarInheritWidthFrom: "Šírka oblasti indikátora priebehu"
  },
  theme: {
    advancedMode: "Rozšírený režim",
    pageTitle: "Písmo názvu stránky",
    questionTitle: "Písmo názvu otázky",
    editorPanel: "Vstupný prvok",
    lines: "Riadky",
    primaryDefaultColor: "Predvolený",
    primaryDarkColor: "Hover",
    primaryLightColor: "Vybraný",
    backgroundDimColor: "Farba pozadia",
    cornerRadius: "Polomer rohov",
    backcolor: "Predvolené pozadie",
    hovercolor: "Ukázanie na pozadie",
    borderDecoration: "Dekorácia okrajov",
    fontColor: "Farba písma",
    backgroundColor: "Farba pozadia",
    primaryForecolor: "Predvolená farba",
    primaryForecolorLight: "Zakázaná farba",
    font: "Písmo",
    borderDefault: "Tmavšie",
    borderLight: "Zapaľovač",
    fontFamily: "Skupina písiem",
    fontWeightRegular: "Pravidelný",
    fontWeightHeavy: "Ťažký",
    fontWeightSemiBold: "Polotučné",
    fontWeightBold: "Smelý",
    color: "Farba",
    placeholderColor: "Farba zástupného symbolu",
    size: "Veľkosť",
    opacity: "Neprehľadnosť",
    boxShadowX: "X",
    boxShadowY: "Y",
    boxShadowAddRule: "Pridanie efektu tieňa",
    boxShadowBlur: "Rozmazať",
    boxShadowSpread: "Nátierka",
    boxShadowDrop: "Kvapka",
    boxShadowInner: "Vnútorný",
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
      green: "Zelený",
      gray: "Sivý"
    }
  },
  creatortheme: {
    "--sjs-special-background": "Povrchové pozadie",
    "--sjs-primary-background-500": "Prvotný",
    "--sjs-secondary-background-500": "Sekundárny",
    surfaceScale: "Povrch",
    userInterfaceBaseUnit: "Používateľské rozhranie",
    fontScale: "Písmo",
    names: {
      sc2020: "Tvorca prieskumu 2020",
      "default-light": "Svetlo",
      "default-dark": "Tmavý",
      "default-contrast": "Kontrast"
    }
  }
};

setupLocale({ localeCode: "sk", strings: skStrings });

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
// page.timeLimit: "Time limit to finish the page (in seconds)" => "Časový limit na dokončenie stránky (v sekundách)"
// question.page: "Parent page" => "Nadradená stránka"
// pe.noEntriesText: "Empty entries text" => "Text prázdnych položiek"
// pe.setValue: "Answer" => "Odpoveď"
// pe.dataFormat: "Image format" => "Formát obrázka"
// pe.allowAddRows: "Allow adding rows" => "Povoliť pridávanie riadkov"
// pe.allowRemoveRows: "Allow removing rows" => "Povoliť odstránenie riadkov"
// pe.allowRowReorder: "Allow row drag and drop" => "Povoliť presúvanie riadkov"
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
// pe.maxCommentLength: "Maximum comment length (in characters)" => "Maximálna dĺžka komentára (v znakoch)"
// pe.autoGrowComment: "Auto-expand comment area if necessary" => "V prípade potreby automaticky rozbaľte oblasť komentárov"
// pe.allowResizeComment: "Allow users to resize text areas" => "Povolenie používateľom meniť veľkosť textových oblastí"
// pe.textUpdateMode: "Update text question value" => "Aktualizácia hodnoty textovej otázky"
// pe.autoFocusFirstError: "Set focus on the first invalid answer" => "Zameranie na prvú neplatnú odpoveď"
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
// pe.prevPanelText: "Previous Panel button tooltip" => "Popis tlačidla Predchádzajúci panel"
// pe.nextPanelText: "Next Panel button tooltip" => "Popis tlačidla Nasledujúci panel"
// pe.showRangeInProgress: "Show progress bar" => "Zobraziť indikátor priebehu"
// pe.templateQuestionTitleLocation: "Question title location" => "Otázka, názov, umiestnenie:"
// pe.removePanelButtonLocation: "Remove Panel button location" => "Odstrániť umiestnenie tlačidla panela"
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
// pe.allowClear: "Show the Clear button" => "Zobrazenie tlačidla Vymazať"
// pe.showNumber: "Show panel number" => "Zobraziť číslo panela"
// pe.logoWidth: "Logo width (in CSS-accepted values)" => "Šírka loga (v akceptovaných hodnotách CSS)"
// pe.logoHeight: "Logo height (in CSS-accepted values)" => "Výška loga (v hodnotách akceptovaných CSS)"
// pe.readOnly: "Read-only" => "Iba na čítanie"
// pe.enableIf: "Editable if" => "Upraviteľné, ak"
// pe.noRowsText: "\"No rows\" message" => "Správa \"Žiadne riadky\""
// pe.size: "Input field size (in characters)" => "Veľkosť vstupného poľa (v znakoch)"
// pe.separateSpecialChoices: "Separate special choices (None, Other, Select All)" => "Samostatné špeciálne možnosti (Žiadne, Iné, Vybrať všetko)"
// pe.choicesFromQuestion: "Copy choices from the following question" => "Skopírujte voľby z nasledujúcej otázky"
// pe.choicesFromQuestionMode: "Which choices to copy?" => "Aké možnosti kopírovať?"
// pe.showCommentArea: "Show the comment area" => "Zobrazenie oblasti komentárov"
// pe.commentPlaceholder: "Comment area placeholder" => "Zástupný symbol oblasti komentárov"
// pe.displayRateDescriptionsAsExtremeItems: "Display rate descriptions as extreme values" => "Popisy rýchlosti zobrazenia ako extrémnych hodnôt"
// pe.rowOrder: "Row order" => "Poradie riadkov"
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
// addRowButtonLocation.default: "Depends on matrix layout" => "Závisí od rozloženia matice"
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
// theme.groupAdvanced: "Advanced" => "Pokročilý"
// theme.themeName: "Theme" => "Téma"
// theme.isPanellessss: "Question appearance" => "Vzhľad otázky"
// theme.isPanellessPanels: "Default" => "Predvolený"
// theme.isPanellessLightweight: "Without Panels" => "Bez panelov"
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
// theme.surveyTitleFont: "Survey title font" => "Písmo názvu prieskumu"
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
// theme.header: "Header" => "Hlavička"
// theme.backgroundImageFitFill: "Stretch" => "Natiahnuť"
// theme.backgroundImageFitTile: "Tile" => "Dlaždica"
// theme.headerView: "View" => "Pohľad"
// theme.headerViewBasic: "Basic" => "Základný"
// theme.headerViewAdvanced: "Advanced" => "Pokročilý"
// theme.headerInheritWidthFrom: "Content area width" => "Šírka oblasti obsahu"
// theme.headerInheritWidthFromSurvey: "Same as survey" => "Rovnaké ako prieskum"
// theme.headerInheritWidthFromPage: "Fit to page" => "Prispôsobiť na stranu"
// theme.headerTextAreaWidth: "Text width" => "Šírka textu"
// theme.headerBackgroundColorSwitch: "Background color" => "Farba pozadia"
// theme.headerBackgroundColorNone: "None" => "Žiadny"
// theme.headerBackgroundColorAccentColor: "Accent color" => "Farba akcentu"
// theme.headerBackgroundColorCustom: "Custom" => "Zvyk"
// theme.horizontalAlignmentLeft: "Left" => "Vľavo"
// theme.horizontalAlignmentCenter: "Center" => "Centrum"
// theme.horizontalAlignmentRight: "Right" => "Doprava"
// theme.verticalAlignmentTop: "Top" => "Vrchol"
// theme.verticalAlignmentMiddle: "Middle" => "Stred"
// theme.verticalAlignmentBottom: "Bottom" => "Dno"
// theme.logoPosition: "Logo Position" => "Umiestnenie loga"
// theme.headerTitlePosition: "Title Position" => "Titulná pozícia"
// theme.headerDescriptionPosition: "Description Position" => "Popisná pozícia"
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
// theme.background: "Background" => "Pozadie"
// theme.appearance: "Appearance" => "Vzhľad"
// ed.themeResetConfirmation: "Do you really want to reset the theme? All your customizations will be lost." => "Naozaj chcete resetovať tému? Všetky vaše prispôsobenia sa stratia."
// ed.themeResetConfirmationOk: "Yes, reset the theme" => "Áno, obnoviť motív"
// theme.headerInheritWidthFromContainer: "Fit to container" => "Vhodné na kontajner"
// signaturepad.showPlaceholder: "Show the placeholder" => "Zobrazenie zástupného symbolu"
// signaturepad.placeholder: "Placeholder text" => "Zástupný text"
// theme.surveyDescriptionFont: "Survey description font" => "Písmo popisu prieskumu"
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

// pe.transposeData: "Transpose rows to columns" => "Transponovanie riadkov do stĺpcov"
// layout.panel: "Layout" => "Rozloženie"
// layout.question: "Layout" => "Rozloženie"
// layout.base: "Layout" => "Rozloženie"
// panel.name: "Panel name" => "Názov panela"
// panel.title: "Panel title" => "Názov panelu"
// panel.description: "Panel description" => "Popis panelu"
// panel.visibleIf: "Make the panel visible if" => "Zviditeľnite panel, ak"
// panel.requiredIf: "Make the panel required if" => "Nastavte panel tak, aby bol povinný, ak"
// panel.questionOrder: "Question order within the panel" => "Poradie otázok v rámci panelu"
// panel.startWithNewLine: "Display the panel on a new line" => "Zobrazenie panela na novom riadku"
// panel.state: "Panel collapse state" => "Stav zbalenia panela"
// panel.width: "Inline panel width" => "Šírka vnoreného panela"
// panel.minWidth: "Minimum panel width" => "Minimálna šírka panela"
// panel.maxWidth: "Maximum panel width" => "Maximálna šírka panela"
// paneldynamic.name: "Panel name" => "Názov panela"
// paneldynamic.title: "Panel title" => "Názov panelu"
// paneldynamic.description: "Panel description" => "Popis panelu"
// paneldynamic.visibleIf: "Make the panel visible if" => "Zviditeľnite panel, ak"
// paneldynamic.requiredIf: "Make the panel required if" => "Nastavte panel tak, aby bol povinný, ak"
// paneldynamic.page: "Move the panel to page" => "Presunutie panela na stranu"
// paneldynamic.startWithNewLine: "Display the panel on a new line" => "Zobrazenie panela na novom riadku"
// paneldynamic.state: "Panel collapse state" => "Stav zbalenia panela"
// paneldynamic.width: "Inline panel width" => "Šírka vnoreného panela"
// paneldynamic.minWidth: "Minimum panel width" => "Minimálna šírka panela"
// paneldynamic.maxWidth: "Maximum panel width" => "Maximálna šírka panela"
// paneldynamic.templateDescription: "Panel description pattern" => "Vzor popisu panela"
// paneldynamic.templateTitle: "Panel title pattern" => "Vzor názvu panela"
// paneldynamic.noEntriesText: "Empty panel text" => "Prázdny text panela"
// paneldynamic.templateTabTitle: "Tab title pattern" => "Vzor názvu tabulátora"
// paneldynamic.templateVisibleIf: "Make an individual panel visible if" => "Zviditeľniť samostatný panel, ak"
// paneldynamic.hideNumber: "Hide the panel number" => "Skrytie čísla panela"
// paneldynamic.titleLocation: "Panel title alignment" => "Zarovnanie názvu panela"
// paneldynamic.descriptionLocation: "Panel description alignment" => "Zarovnanie popisu panela"
// paneldynamic.templateQuestionTitleLocation: "Question title alignment" => "Zarovnanie názvu otázky"
// paneldynamic.templateErrorLocation: "Error message alignment" => "Zarovnanie chybových hlásení"
// paneldynamic.newPanelPosition: "New panel location" => "Nové umiestnenie panela"
// paneldynamic.keyName: "Prevent duplicate responses in the following question" => "Zabránenie duplicitným odpovediam v nasledujúcej otázke"
// question.name: "Question name" => "Názov otázky"
// question.title: "Question title" => "Názov otázky"
// question.description: "Question description" => "Opis otázky"
// question.visibleIf: "Make the question visible if" => "Zviditeľnite otázku, ak"
// question.requiredIf: "Make the question required if" => "Urobte otázku povinnou, ak"
// question.state: "Question box collapse state" => "Stav zbalenia poľa otázok"
// question.hideNumber: "Hide the question number" => "Skrytie čísla otázky"
// question.titleLocation: "Question title alignment" => "Zarovnanie názvu otázky"
// question.descriptionLocation: "Question description alignment" => "Zarovnanie popisu otázky"
// question.errorLocation: "Error message alignment" => "Zarovnanie chybových hlásení"
// question.indent: "Increase the inner indent" => "Zväčšite vnútornú zarážku"
// question.width: "Inline question width" => "Vnorená šírka otázky"
// question.minWidth: "Minimum question width" => "Minimálna šírka otázky"
// question.maxWidth: "Maximum question width" => "Maximálna šírka otázky"
// question.textUpdateMode: "Update input field value" => "Aktualizácia hodnoty vstupného poľa"
// signaturepad.allowClear: "Show the Clear button within signature area" => "Zobrazenie tlačidla Vymazať v oblasti podpisu"
// signaturepad.penColor: "Stroke color" => "Farba ťahu"
// comment.rows: "Input field height (in lines)" => "Výška vstupného poľa (v riadkoch)"
// expression.name: "Expression name" => "Názov výrazu"
// expression.title: "Expression title" => "Názov výrazu"
// expression.description: "Expression description" => "Popis výrazu"
// expression.expression: "Expression" => "Výraz"
// trigger.expression: "Expression" => "Výraz"
// calculatedvalue.expression: "Expression" => "Výraz"
// survey.description: "Survey description" => "Opis prieskumu"
// page.name: "Page name" => "Názov stránky"
// page.description: "Page description" => "Popis stránky"
// page.visibleIf: "Make the page visible if" => "Zviditeľniť stránku, ak"
// page.requiredIf: "Make the page required if" => "Nastavte stránku ako povinnú, ak"
// page.questionOrder: "Question order on the page" => "Poradie otázok na stránke"
// matrixdropdowncolumn.name: "Column name" => "Názov stĺpca"
// matrixdropdowncolumn.title: "Column title" => "Názov stĺpca"
// matrixdropdowncolumn.isUnique: "Prevent duplicate responses" => "Zabráňte duplicitným odpovediam"
// matrixdropdowncolumn.width: "Column width" => "Šírka stĺpca"
// matrixdropdowncolumn.minWidth: "Minimum column width" => "Minimálna šírka stĺpca"
// matrixdropdowncolumn.rows: "Input field height (in lines)" => "Výška vstupného poľa (v riadkoch)"
// matrixdropdowncolumn.visibleIf: "Make the column visible if" => "Zviditeľnite stĺpec, ak"
// matrixdropdowncolumn.requiredIf: "Make the column required if" => "Nastavte stĺpec ako povinný, ak"
// matrixdropdowncolumn.showInMultipleColumns: "Each option in a separate column" => "Každá možnosť v samostatnom stĺpci"
// multipletextitem.name: "Name" => "Meno"
// multipletextitem.title: "Title" => "Titul"
// pe.rateDescriptionLocation: "Label alignment" => "Zarovnanie štítkov"
// pe.cellErrorLocation: "Cell error message alignment" => "Zarovnanie chybového hlásenia bunky"
// pe.listIsEmpty@columns: "You don't have any columns yet" => "Zatiaľ nemáte žiadne stĺpce"
// pe.listIsEmpty@rows: "You don't have any rows yet" => "Zatiaľ nemáte žiadne riadky"
// pe.listIsEmpty@validators: "You don't have any validation rules yet" => "Zatiaľ nemáte žiadne overovacie pravidlá"
// pe.listIsEmpty@calculatedValues: "You don't have any custom variables yet" => "Zatiaľ nemáte žiadne vlastné premenné"
// pe.listIsEmpty@triggers: "You don't have any triggers yet" => "Zatiaľ nemáte žiadne spúšťače"
// pe.listIsEmpty@navigateToUrlOnCondition: "You don't have any links yet" => "Zatiaľ nemáte žiadne odkazy"
// pe.addNew@columns: "Add new column" => "Pridať nový stĺpec"
// pe.addNew@rows: "Add new row" => "Pridať nový riadok"
// pe.addNew@validators: "Add new rule" => "Pridať nové pravidlo"
// pe.addNew@calculatedValues: "Add new variable" => "Pridanie novej premennej"
// pe.addNew@triggers: "Add new trigger" => "Pridať nový spúšťač"
// pe.addNew@navigateToUrlOnCondition: "Add new URL" => "Pridať novú URL adresu"
// choicesbyurl.url: "Web service's URL" => "URL adresa webovej služby"
// pe.progressBarShowPageTitles: "Display page titles in progress bar" => "Zobrazenie prebiehajúcich názvov stránok"
// pe.progressBarShowPageNumbers: "Display page numbers in progress bar" => "Zobrazenie prebiehajúcich čísel strán"
// itemvalue.visibleIf: "Make the option visible if" => "Možnosť zobraziť, ak"
// itemvalue.enableIf: "Make the option selectable if" => "Túto možnosť nastavte tak, aby sa dala vybrať, ak"
// panel.layout: "Panel Layout" => "Rozloženie panela"
// tabs.questionSettings: "Question Settings" => "Nastavenia otázok"
// pe.url_placeholder: "Ex.: https://api.example.com/books" => "Napríklad: https://api.example.com/books"
// pe.path_placeholder: "Ex.: categories.fiction" => "Napr.: kategórie.fikcia"
// pe.questionStartIndex_placeholder: "Ex.: a)" => "Napr.: a)"
// pe.width_placeholder: "Ex.: 6in" => "Napr.: 6in"
// pe.minWidth_placeholder: "Ex.: 600px" => "Napríklad: 600px"
// pe.maxWidth_placeholder: "Ex.: 50%" => "Napríklad: 50%"
// pv.selected: "Selected" => "Vybraný"
// pv.unselected: "Unselected" => "Nevybratý"
// pv.center: "Center" => "Centrum"
// pv.middle: "Middle" => "Stred"
// pv.next: "Next" => "Budúci"
// pv.last: "Last" => "Minulý"
// clearIfInvisible.none: "Never" => "Nikdy"
// questionsOnPageMode.standard: "Original structure" => "Pôvodná štruktúra"
// questionsOnPageMode.singlePage: "Show all questions on one page" => "Zobraziť všetky otázky na jednej stránke"
// questionsOnPageMode.questionPerPage: "Show single question per page" => "Zobraziť jednu otázku na stránku"
// pv.auto: "Auto" => "Auto"
// panelsState.firstExpanded: "First expanded" => "Prvé rozšírenie"
// rateColorMode.scale: "Scale" => "Stupnica"
// scaleColorMode.monochrome: "Monochrome" => "Jednofarebný"
// scaleColorMode.colored: "Colored" => "Farebný"
// state.default: "Locked" => "Zamknutý"
// showQuestionNumbers.default: "Auto-numbering" => "Automatické číslovanie"
// showQuestionNumbers.on: "Auto-numbering" => "Automatické číslovanie"
// showQuestionNumbers.onPage: "Reset on each page" => "Obnoviť na každej stránke"
// showQuestionNumbers.onpanel: "Reset on each panel" => "Resetovať na každom paneli"
// showQuestionNumbers.onPanel: "Reset on each panel" => "Resetovať na každom paneli"
// showQuestionNumbers.onSurvey: "Continue across the survey" => "Pokračujte v prieskume"
// showQuestionNumbers.off: "No numbering" => "Bez číslovania"
// descriptionLocation.underTitle: "Under the question title" => "Pod názvom otázky"
// descriptionLocation.underInput: "Under the input field" => "Pod vstupným poľom"
// selectToRankAreasLayout.horizontal: "Next to choices" => "Vedľa možností"
// selectToRankAreasLayout.vertical: "Above choices" => "Vyššie uvedené možnosti"
// displayStyle.decimal: "Decimal" => "Desatinný"
// displayStyle.currency: "Currency" => "Mena"
// displayStyle.percent: "Percentage" => "Percento"
// displayStyle.date: "Date" => "Dátum"
// totalDisplayStyle.decimal: "Decimal" => "Desatinný"
// totalDisplayStyle.currency: "Currency" => "Mena"
// totalDisplayStyle.percent: "Percentage" => "Percento"
// totalDisplayStyle.date: "Date" => "Dátum"
// rowOrder.initial: "Original" => "Originál"
// questionOrder.initial: "Original" => "Originál"
// showProgressBar.aboveheader: "Above the header" => "Nad hlavičkou"
// showProgressBar.belowheader: "Below the header" => "Pod hlavičkou"
// pv.sum: "Sum" => "Súčet"
// pv.count: "Count" => "Počítať"
// pv.min: "Min" => "Min"
// pv.max: "Max" => "Max"
// pv.avg: "Avg" => "Avg"
// searchMode.contains: "Contains" => "Obsahuje"
// searchMode.startsWith: "Starts with" => "Začína sa"
// panel.name: "A panel ID that is not visible to respondents." => "ID panela, ktoré respondenti nevidia."
// panel.description: "Type a panel subtitle." => "Zadajte podnadpis panela."
// panel.visibleIf: "Use the magic wand icon to set a conditional rule that determines panel visibility." => "Pomocou ikony čarovného prútika nastavte podmienené pravidlo, ktoré určuje viditeľnosť panela."
// panel.enableIf: "Use the magic wand icon to set a conditional rule that disables the read-only mode for the panel." => "Pomocou ikony čarovnej paličky nastavte podmienené pravidlo, ktoré vypne režim iba na čítanie pre panel."
// panel.requiredIf: "Use the magic wand icon to set a conditional rule that prevents survey submission unless at least one nested question has an answer." => "Pomocou ikony čarovného prútika nastavte podmienené pravidlo, ktoré zabráni odoslaniu prieskumu, pokiaľ aspoň jedna vnorená otázka nemá odpoveď."
// panel.questionTitleLocation: "Applies to all questions within this panel. If you want to override this setting, define title alignment rules for individual questions. The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Top\" by default)." => "Vzťahuje sa na všetky otázky v tomto paneli. Ak chcete toto nastavenie prepísať, definujte pravidlá zarovnania názvu pre jednotlivé otázky. Možnosť Dediť použije nastavenie na úrovni stránky (ak je nastavená) alebo na úrovni prieskumu (\"Predvolene navrchu\")."
// panel.questionErrorLocation: "Sets the location of an error message in relation to all questions within the panel. The \"Inherit\" option applies the page-level (if set) or survey-level setting." => "Nastaví umiestnenie chybového hlásenia vo vzťahu ku všetkým otázkam v paneli. Možnosť Zdediť použije nastavenie na úrovni stránky (ak je nastavená) alebo na úrovni prieskumu."
// panel.questionOrder: "Keeps the original order of questions or randomizes them. The \"Inherit\" option applies the page-level (if set) or survey-level setting." => "Zachová pôvodné poradie otázok alebo ich náhodne vyberie. Možnosť Zdediť použije nastavenie na úrovni stránky (ak je nastavená) alebo na úrovni prieskumu."
// panel.page: "Repositions the panel to the end of a selected page." => "Premiestni panel na koniec vybratej strany."
// panel.innerIndent: "Adds space or margin between the panel content and the left border of the panel box." => "Pridá medzeru alebo okraj medzi obsah panela a ľavý okraj panela."
// panel.startWithNewLine: "Unselect to display the panel in one line with the previous question or panel. The setting doesn't apply if the panel is the first element in your form." => "Zrušte výber výberu, ak chcete panel zobraziť v jednom riadku s predchádzajúcou otázkou alebo panelom. Toto nastavenie sa neuplatňuje, ak je panel prvým prvkom vo formulári."
// panel.state: "Choose from: \"Expanded\" - the panel is displayed in full and can be collapsed; \"Collapsed\" - the panel displays only the title and description and can be expanded; \"Locked\" - the panel is displayed in full and cannot be collapsed." => "Vyberte si z: \"Rozšírené\" - panel je zobrazený v plnom rozsahu a môže byť zbalený; \"Zbalené\" - panel zobrazuje iba názov a popis a je možné ho rozšíriť; \"Zamknutý\" - panel sa zobrazuje v plnom rozsahu a nedá sa zbaliť."
// panel.width: "Sets the width of the panel in proportion to other survey elements in the same line. Accepts CSS values (px, %, in, pt, etc.)." => "Nastaví šírku panela v pomere k ostatným prvkom prieskumu v tej istej čiare. Akceptuje hodnoty CSS (px, %, in, pt atď.)."
// paneldynamic.name: "A panel ID that is not visible to respondents." => "ID panela, ktoré respondenti nevidia."
// paneldynamic.description: "Type a panel subtitle." => "Zadajte podnadpis panela."
// paneldynamic.visibleIf: "Use the magic wand icon to set a conditional rule that determines panel visibility." => "Pomocou ikony čarovného prútika nastavte podmienené pravidlo, ktoré určuje viditeľnosť panela."
// paneldynamic.enableIf: "Use the magic wand icon to set a conditional rule that disables the read-only mode for the panel." => "Pomocou ikony čarovnej paličky nastavte podmienené pravidlo, ktoré vypne režim iba na čítanie pre panel."
// paneldynamic.requiredIf: "Use the magic wand icon to set a conditional rule that prevents survey submission unless at least one nested question has an answer." => "Pomocou ikony čarovného prútika nastavte podmienené pravidlo, ktoré zabráni odoslaniu prieskumu, pokiaľ aspoň jedna vnorená otázka nemá odpoveď."
// paneldynamic.templateQuestionTitleLocation: "Applies to all questions within this panel. If you want to override this setting, define title alignment rules for individual questions. The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Top\" by default)." => "Vzťahuje sa na všetky otázky v tomto paneli. Ak chcete toto nastavenie prepísať, definujte pravidlá zarovnania názvu pre jednotlivé otázky. Možnosť Dediť použije nastavenie na úrovni stránky (ak je nastavená) alebo na úrovni prieskumu (\"Predvolene navrchu\")."
// paneldynamic.templateErrorLocation: "Sets the location of an error message in relation to a question with invalid input. Choose between: \"Top\" - an error text is placed at the top of the question box; \"Bottom\" - an error text is placed at the bottom of the question box. The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Top\" by default)." => "Nastaví umiestnenie chybového hlásenia vo vzťahu k otázke s neplatným zadaním. Vyberte si medzi: \"Hore\" - v hornej časti poľa otázok sa umiestni chybový text; \"Dole\" - v dolnej časti poľa otázok je umiestnený chybový text. Možnosť Dediť použije nastavenie na úrovni stránky (ak je nastavená) alebo na úrovni prieskumu (\"Predvolene navrchu\")."
// paneldynamic.errorLocation: "Sets the location of an error message in relation to all questions within the panel. The \"Inherit\" option applies the page-level (if set) or survey-level setting." => "Nastaví umiestnenie chybového hlásenia vo vzťahu ku všetkým otázkam v paneli. Možnosť Zdediť použije nastavenie na úrovni stránky (ak je nastavená) alebo na úrovni prieskumu."
// paneldynamic.page: "Repositions the panel to the end of a selected page." => "Premiestni panel na koniec vybratej strany."
// paneldynamic.innerIndent: "Adds space or margin between the panel content and the left border of the panel box." => "Pridá medzeru alebo okraj medzi obsah panela a ľavý okraj panela."
// paneldynamic.startWithNewLine: "Unselect to display the panel in one line with the previous question or panel. The setting doesn't apply if the panel is the first element in your form." => "Zrušte výber výberu, ak chcete panel zobraziť v jednom riadku s predchádzajúcou otázkou alebo panelom. Toto nastavenie sa neuplatňuje, ak je panel prvým prvkom vo formulári."
// paneldynamic.state: "Choose from: \"Expanded\" - the panel is displayed in full and can be collapsed; \"Collapsed\" - the panel displays only the title and description and can be expanded; \"Locked\" - the panel is displayed in full and cannot be collapsed." => "Vyberte si z: \"Rozšírené\" - panel je zobrazený v plnom rozsahu a môže byť zbalený; \"Zbalené\" - panel zobrazuje iba názov a popis a je možné ho rozšíriť; \"Zamknutý\" - panel sa zobrazuje v plnom rozsahu a nedá sa zbaliť."
// paneldynamic.width: "Sets the width of the panel in proportion to other survey elements in the same line. Accepts CSS values (px, %, in, pt, etc.)." => "Nastaví šírku panela v pomere k ostatným prvkom prieskumu v tej istej čiare. Akceptuje hodnoty CSS (px, %, in, pt atď.)."
// paneldynamic.templateTitle: "Type in a template for dynamic panel titles. Use {panelIndex} for the panel's general position and {visiblePanelIndex} for its order among visible panels. Insert these placeholders into the pattern to add automatic numbering." => "Zadajte šablónu pre názvy dynamických panelov. Použite {panelIndex} pre všeobecnú pozíciu panela a {visiblePanelIndex} pre jeho poradie medzi viditeľnými panelmi. Vložením týchto zástupných symbolov do vzoru pridáte automatické číslovanie."
// paneldynamic.templateTabTitle: "Type in a template for tab titles. Use {panelIndex} for a panel's general position and {visiblePanelIndex} for its order among visible panels. Insert these placeholders into the pattern to add automatic numbering." => "Zadajte šablónu pre názvy kariet. Použite {panelIndex} pre všeobecnú pozíciu panela a {visiblePanelIndex} pre jeho poradie medzi viditeľnými panelmi. Vložením týchto zástupných symbolov do vzoru pridáte automatické číslovanie."
// paneldynamic.templateVisibleIf: "This setting allows you to control the visibility of individual panels within the dynamic panel. Use the `{panel}` placeholder to reference the current panel in your expression." => "Toto nastavenie umožňuje ovládať viditeľnosť jednotlivých panelov v dynamickom paneli. Použite zástupný symbol {panel} na odkaz na aktuálny panel vo svojom výraze."
// paneldynamic.titleLocation: "This setting is automatically inherited by all questions within this panel. If you want to override this setting, define title alignment rules for individual questions. The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Top\" by default)." => "Toto nastavenie sa automaticky dedí všetkými otázkami na tomto paneli. Ak chcete toto nastavenie prepísať, definujte pravidlá zarovnania názvu pre jednotlivé otázky. Možnosť Dediť použije nastavenie na úrovni stránky (ak je nastavená) alebo na úrovni prieskumu (\"Predvolene navrchu\")."
// paneldynamic.descriptionLocation: "The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Under the panel title\" by default)." => "Možnosť \"Dediť\" použije nastavenie na úrovni stránky (ak je nastavená) alebo na úrovni prieskumu (\"Predvolene pod názvom panela\")."
// paneldynamic.newPanelPosition: "Defines the position of a newly added panel. By default, new panels are added to the end. Select \"Next\" to insert a new panel after the current one." => "Definuje pozíciu novo pridaného panela. V predvolenom nastavení sa na koniec pridávajú nové panely. Výberom položky \"Ďalej\" vložíte nový panel za aktuálny."
// paneldynamic.copyDefaultValueFromLastEntry: "Duplicates answers from the last panel and assigns them to the next added dynamic panel." => "Duplikuje odpovede z posledného panela a priradí ich ďalšiemu pridanému dynamickému panelu."
// paneldynamic.keyName: "Reference a question name to require a user to provide a unique response for this question in each panel." => "Odkážte na názov otázky, ak chcete, aby používateľ poskytol jedinečnú odpoveď na túto otázku na každom paneli."
// pehelp.defaultValueExpression: "This setting allows you to assign a default answer value based on an expression. The expression can include basic calculations - `{q1_id} + {q2_id}`, Boolean expressions, such as `{age} > 60`, and functions: `iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, etc. The value determined by this expression serves as the initial default value that can be overridden by a respondent's manual input." => "Toto nastavenie vám umožňuje priradiť predvolenú hodnotu odpovede na základe výrazu. Výraz môže obsahovať základné výpočty - '{q1_id} + {q2_id}', boolovské výrazy, ako napríklad '{age} > 60', a funkcie: 'iif()', 'today()', 'age()', 'min()', 'max()', 'avg()' atď. Hodnota určená týmto výrazom slúži ako počiatočná predvolená hodnota, ktorú je možné prepísať manuálnym vstupom respondenta."
// pehelp.resetValueIf: "Use the magic wand icon to set a conditional rule that determines when a respondent's input is reset to the value based on the \"Default value expression\" or \"Set value expression\" or to the \"Default answer\" value (if either is set)." => "Pomocou ikony čarovného prútika nastavte podmienené pravidlo, ktoré určuje, kedy sa vstup respondenta obnoví na hodnotu na základe hodnoty \"Výraz predvolenej hodnoty\" alebo \"Výraz nastavenej hodnoty\" alebo hodnoty \"Predvolená odpoveď\" (ak je nastavená)."
// pehelp.setValueIf: "Use the magic wand icon to set a conditional rule that determines when to run the \"Set value expression\" and dynamically assign the resulting value as a response." => "Pomocou ikony čarovného prútika nastavte podmienené pravidlo, ktoré určuje, kedy spustiť \"Nastaviť výraz hodnoty\" a dynamicky priradiť výslednú hodnotu ako odpoveď."
// pehelp.setValueExpression: "Specify an expression that defines the value to be set when the conditions in the \"Set value if\" rule are met. The expression can include basic calculations - `{q1_id} + {q2_id}`, Boolean expressions, such as `{age} > 60`, and functions: `iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, etc. The value determined by this expression can be overridden by a respondent's manual input." => "Zadajte výraz, ktorý definuje hodnotu, ktorá sa má nastaviť, keď sú splnené podmienky pravidla \"Nastaviť hodnotu ak\". Výraz môže obsahovať základné výpočty - '{q1_id} + {q2_id}', boolovské výrazy, ako napríklad '{age} > 60', a funkcie: 'iif()', 'today()', 'age()', 'min()', 'max()', 'avg()' atď. Hodnota určená týmto výrazom môže byť prepísaná manuálnym vstupom respondenta."
// question.name: "A question ID that is not visible to respondents." => "ID otázky, ktoré respondenti nevidia."
// question.description: "Type a question subtitle." => "Zadajte podnadpis otázky."
// question.visibleIf: "Use the magic wand icon to set a conditional rule that determines question visibility." => "Pomocou ikony čarovného prútika nastavte podmienené pravidlo, ktoré určuje viditeľnosť otázky."
// question.enableIf: "Use the magic wand icon to set a conditional rule that disables the read-only mode for the question." => "Pomocou ikony čarovnej paličky nastavte podmienené pravidlo, ktoré vypne režim iba na čítanie pre otázku."
// question.requiredIf: "Use the magic wand icon to set a conditional rule that prevents survey advancing or submission unless the question received an answer." => "Pomocou ikony čarovného prútika nastavte podmienené pravidlo, ktoré zabráni postupu alebo odoslaniu prieskumu, pokiaľ otázka nedostala odpoveď."
// question.startWithNewLine: "Unselect to display the question in one line with the previous question or panel. The setting doesn't apply if the question is the first element in your form." => "Zrušte výber výberu, ak chcete otázku zobraziť v jednom riadku s predchádzajúcou otázkou alebo panelom. Toto nastavenie sa neuplatňuje, ak je otázka prvým prvkom vo formulári."
// question.page: "Repositions the question to the end of a selected page." => "Premiestni otázku na koniec vybratej strany."
// question.state: "Choose from: \"Expanded\" - the question box is displayed in full and can be collapsed; \"Collapsed\" - the question box displays only the title and description and can be expanded; \"Locked\" - the question box is displayed in full and cannot be collapsed." => "Vyberte si z: \"Rozšírené\" - pole otázky sa zobrazí v plnom rozsahu a dá sa zbaliť; \"Zbalené\" - pole otázky zobrazuje iba názov a popis a je možné ho rozbaliť; \"Zamknuté\" - pole otázok sa zobrazí v plnom rozsahu a nedá sa zbaliť."
// question.titleLocation: "Overrides title alignment rules defined on a panel, page or survey level. The \"Inherit\" option applies any higher-level settings (if set) or survey-level setting (\"Top\" by default)." => "Prepíše pravidlá zarovnania názvu definované na úrovni panela, stránky alebo prieskumu. Možnosť \"Dediť\" použije akékoľvek nastavenia vyššej úrovne (ak sú nastavené) alebo nastavenia na úrovni prieskumu (\"Predvolene hore\")."
// question.descriptionLocation: "The \"Inherit\" option applies the survey-level setting (\"Under the question title\" by default)." => "Možnosť \"Zdediť\" použije nastavenie na úrovni prieskumu (\"Predvolene pod názvom otázky\")."
// question.errorLocation: "Sets the location of an error message in relation to the question with invalid input. Choose between: \"Top\" - an error text is placed at the top of the question box; \"Bottom\" - an error text is placed at the bottom of the question box. The \"Inherit\" option applies the survey-level setting (\"Top\" by default)." => "Nastaví umiestnenie chybového hlásenia vo vzťahu k otázke s neplatným zadaním. Vyberte si medzi: \"Hore\" - v hornej časti poľa otázok sa umiestni chybový text; \"Dole\" - v dolnej časti poľa otázok je umiestnený chybový text. Možnosť \"Zdediť\" použije nastavenie na úrovni prieskumu (\"Predvolene hore\")."
// question.indent: "Adds space or margin between the question content and the left border of the question box." => "Pridá medzeru alebo okraj medzi obsah otázky a ľavý okraj poľa otázok."
// question.width: "Sets the width of the question in proportion to other survey elements in the same line. Accepts CSS values (px, %, in, pt, etc.)." => "Nastaví šírku otázky v pomere k ostatným prvkom prieskumu v tom istom riadku. Akceptuje hodnoty CSS (px, %, in, pt atď.)."
// surveyvalidator.expression: "Use the magic wand icon to set a validation rule for the question." => "Pomocou ikony čarovného prútika nastavte overovacie pravidlo pre otázku."
// question.textUpdateMode: "Choose from: \"On lost focus\" - the value is updated when the input field loses focus; \"While typing\" - the value is updated in real-time, as users are typing. The \"Inherit\" option applies the survey-level setting (\"On lost focus\" by default)." => "Vyberte si z: \"Pri strate zaostrenia\" - hodnota sa aktualizuje, keď vstupné pole stratí zaostrenie; \"Počas písania\" - hodnota sa aktualizuje v reálnom čase, keď používatelia píšu. Možnosť \"Zdediť\" použije nastavenie na úrovni prieskumu (\"Predvolene stratené zameranie\")."
// question.url: "You can use any web service as a data source for multiple-choice questions. To populate choice values, enter the URL of the service providing the data." => "Ako zdroj údajov môžete použiť ľubovoľnú webovú službu na otázky s voliteľnými odpoveďami. Ak chcete vyplniť hodnoty možností, zadajte adresu URL služby poskytujúcej údaje."
// question.searchMode: "A comparison operation used to filter the drop-down list." => "Porovnávacia operácia použitá na filtrovanie rozbaľovacieho zoznamu."
// signaturepad.signatureWidth: "Sets the width of the displayed signature area and the resulting image." => "Nastaví šírku zobrazenej oblasti podpisu a výsledného obrázka."
// signaturepad.signatureHeight: "Sets the height of the displayed signature area and the resulting image." => "Nastaví výšku zobrazenej oblasti podpisu a výsledného obrázka."
// signaturepad.signatureAutoScaleEnabled: "Select if you want the signature area to fill all available space within the question box while maintaining the default 3:2 aspect ratio. When custom width and height values are set, the setting will keep the aspect ratio of these dimensions." => "Vyberte, či chcete, aby oblasť podpisu vyplnila všetok dostupný priestor v poli otázky pri zachovaní predvoleného pomeru strán 3:2. Keď sú nastavené vlastné hodnoty šírky a výšky, nastavenie zachová pomer strán týchto rozmerov."
// file.imageHeight: "Adjusts the height of the image in the survey results." => "Upraví výšku obrázka vo výsledkoch prieskumu."
// file.imageWidth: "Adjusts the width of the image in the survey results." => "Upraví šírku obrázka vo výsledkoch prieskumu."
// imagepicker.imageHeight: "Overrides the minimum and maximum height values." => "Prepíše hodnoty minimálnej a maximálnej výšky."
// imagepicker.imageWidth: "Overrides the minimum and maximum width values." => "Prepíše hodnoty minimálnej a maximálnej šírky."
// imagepicker.choices: "\"Value\" serves as an item ID used in conditional rules; \"Text\" is displayed to respondents." => "\"Hodnota\" slúži ako ID položky používané v podmienených pravidlách; \"Text\" sa zobrazuje respondentom."
// text.size: "This setting only resizes the input field and doesn't affect the width of the question box. To limit the accepted input length, go to <b>Validation → Maximum character limit</b>." => "Toto nastavenie zmení iba veľkosť vstupného poľa a neovplyvní šírku poľa otázky. Ak chcete obmedziť akceptovanú vstupnú dĺžku, prejdite na <b>Overenie → Maximálny počet znakov</b>."
// comment.rows: "Sets the number of displayed lines in the input field. If the input takes up more lines, the scroll bar will appear." => "Nastaví počet zobrazených riadkov vo vstupnom poli. Ak vstup zaberá viac riadkov, zobrazí sa posúvač."
// survey.mode: "Choose between: \"Editable\" - enables respondents to fill out your survey; \"Read-only\" - disables form editing." => "Vyberte si medzi: \"Upraviteľné\" - umožňuje respondentom vyplniť váš prieskum; \"Iba na čítanie\" - zakáže úpravu formulárov."
// matrixdropdowncolumn.name: "A column ID that is not visible to respondents." => "ID stĺpca, ktoré respondenti nevidia."
// matrixdropdowncolumn.isUnique: "When enabled for a column, a respondent is required to provide a unique response for each question within this column." => "Ak je pre stĺpec povolené, respondent je povinný poskytnúť jedinečnú odpoveď na každú otázku v tomto stĺpci."
// matrixdropdowncolumn.rows: "Sets the number of displayed lines in the input field. If the input takes up more lines, the scroll bar will appear." => "Nastaví počet zobrazených riadkov vo vstupnom poli. Ak vstup zaberá viac riadkov, zobrazí sa posúvač."
// matrixdropdowncolumn.visibleIf: "Use the magic wand icon to set a conditional rule that determines column visibility." => "Pomocou ikony čarovného prútika nastavte podmienené pravidlo, ktoré určuje viditeľnosť stĺpca."
// matrixdropdowncolumn.enableIf: "Use the magic wand icon to set a conditional rule that disables the read-only mode for the column." => "Pomocou ikony čarovnej paličky nastavte podmienené pravidlo, ktoré vypne režim iba na čítanie pre stĺpec."
// matrixdropdowncolumn.requiredIf: "Use the magic wand icon to set a conditional rule that prevents survey submission unless at least one nested question has an answer." => "Pomocou ikony čarovného prútika nastavte podmienené pravidlo, ktoré zabráni odoslaniu prieskumu, pokiaľ aspoň jedna vnorená otázka nemá odpoveď."
// matrixdropdowncolumn.showInMultipleColumns: "When selected, creates an individual column for each choice option." => "Ak je táto voľba vybratá, vytvorí samostatný stĺpec pre každú možnosť výberu."
// pehelp.widthMode: "Choose from: \"Static\" - sets a fixed width; \"Responsive\" - makes the survey occupy the full width of the screen; \"Auto\" - applies either of the two depending on the question types used." => "Vyberte si z: \"Statický\" - nastavuje pevnú šírku; \"Responzívny\" - spôsobuje, že prieskum zaberá celú šírku obrazovky; \"Auto\" - použije ktorýkoľvek z týchto dvoch v závislosti od použitých typov otázok."
// pehelp.logo: "Paste an image link (no size limits) or click the folder icon to browse a file from your computer (up to 64KB)." => "Prilepte odkaz na obrázok (bez obmedzenia veľkosti) alebo kliknite na ikonu priečinka a prehľadávajte súbor z počítača (až 64 kB)."
// pehelp.logoWidth: "Sets a logo width in CSS units (px, %, in, pt, etc.)." => "Nastavuje šírku loga v jednotkách CSS (px, %, in, pt atď.)."
// pehelp.logoHeight: "Sets a logo height in CSS units (px, %, in, pt, etc.)." => "Nastavuje výšku loga v jednotkách CSS (px, %, in, pt atď.)."
// pehelp.logoFit: "Choose from: \"None\" - image maintains its original size; \"Contain\" - image is resized to fit while maintaining its aspect ratio; \"Cover\" - image fills the entire box while maintaining its aspect ratio; \"Fill\" - image is stretched to fill the box without maintaining its aspect ratio." => "Vyberte si z: \"Žiadne\" - obrázok si zachováva svoju pôvodnú veľkosť; \"Obsahovať\" - veľkosť obrázka sa zmení tak, aby sa zmestil pri zachovaní pomeru strán; \"Obal\" - obrázok vyplní celé pole pri zachovaní pomeru strán; \"Vyplniť\" - obrázok je natiahnutý tak, aby vyplnil pole bez zachovania pomeru strán."
// pehelp.showNavigationButtons: "Sets the visibility and location of navigation buttons on a page." => "Nastavuje viditeľnosť a umiestnenie navigačných tlačidiel na stránke."
// pehelp.showProgressBar: "Sets the visibility and location of a progress bar. The \"Auto\" value displays the progress bar above or below the survey header." => "Nastavuje viditeľnosť a umiestnenie indikátora priebehu. Hodnota \"Auto\" zobrazuje indikátor priebehu nad alebo pod hlavičkou prieskumu."
// pehelp.showPreviewBeforeComplete: "Enable the preview page with all or answered questions only." => "Povoľte stránku ukážky so všetkými alebo iba zodpovedanými otázkami."
// pehelp.questionTitleLocation: "Applies to all questions within the survey. This setting can be overridden by title alignment rules at lower levels: panel, page, or question. A lower-level setting will override those on a higher level." => "Vzťahuje sa na všetky otázky v rámci prieskumu. Toto nastavenie je možné prepísať pravidlami zarovnania názvov na nižších úrovniach: panel, stránka alebo otázka. Nastavenie nižšej úrovne prepíše nastavenia na vyššej úrovni."
// pehelp.requiredMark: "A symbol or a sequence of symbols indicating that an answer is required." => "Symbol alebo postupnosť symbolov označujúcich, že sa vyžaduje odpoveď."
// pehelp.questionStartIndex: "Enter a number or letter with which you want to start numbering." => "Zadajte číslo alebo písmeno, ktorým chcete začať číslovanie."
// pehelp.questionErrorLocation: "Sets the location of an error message in relation to the question with invalid input. Choose between: \"Top\" - an error text is placed at the top of the question box; \"Bottom\" - an error text is placed at the bottom of the question box." => "Nastaví umiestnenie chybového hlásenia vo vzťahu k otázke s neplatným zadaním. Vyberte si medzi: \"Hore\" - v hornej časti poľa otázok sa umiestni chybový text; \"Dole\" - v dolnej časti poľa otázok je umiestnený chybový text."
// pehelp.autoFocusFirstQuestion: "Select if you want the first input field on each page ready for text entry." => "Vyberte, či chcete prvé vstupné pole na každej strane pripraviť na zadávanie textu."
// pehelp.questionOrder: "Keeps the original order of questions or randomizes them. The effect of this setting is only visible in the Preview tab." => "Zachová pôvodné poradie otázok alebo ich náhodne vyberie. Efekt tohto nastavenia je viditeľný iba na karte Ukážka."
// pehelp.maxTextLength: "For text entry questions only." => "Len pre otázky týkajúce sa zadávania textu."
// pehelp.maxCommentLength: "For question comments only." => "Len pre komentáre k otázkam."
// pehelp.autoGrowComment: "Select if you want question comments and Long Text questions to auto-grow in height based on the entered text length." => "Vyberte, či chcete, aby komentáre otázok a otázky s dlhým textom automaticky narástli na výšku na základe zadanej dĺžky textu."
// pehelp.allowResizeComment: "For question comments and Long Text questions only." => "Iba pre komentáre k otázkam a otázky s dlhým textom."
// pehelp.calculatedValues: "Custom variables serve as intermediate or auxiliary variables used in form calculations. They take respondent inputs as source values. Each custom variable has a unique name and an expression it's based on." => "Vlastné premenné slúžia ako medziľahlé alebo pomocné premenné používané vo výpočtoch formulárov. Vstupy respondentov berú ako zdrojové hodnoty. Každá vlastná premenná má jedinečný názov a výraz, na ktorom je založená."
// pehelp.includeIntoResult: "Select if you wish the calculated value of the expression to be saved along with survey results." => "Vyberte, či chcete, aby sa vypočítaná hodnota výrazu uložila spolu s výsledkami prieskumu."
// pehelp.triggers: "A trigger is an event or condition that is based on an expression. Once the expression is evaluated to \"true\", a trigger sets off an action. Such an action can optionally have a target question it affects." => "Spúšťač je udalosť alebo podmienka, ktorá je založená na výraze. Keď je výraz vyhodnotený ako \"true\", spúšťač spustí akciu. Takáto akcia môže mať voliteľne cieľovú otázku, ktorú ovplyvňuje."
// pehelp.clearInvisibleValues: "Choose whether or not to clear values for questions hidden by conditional logic and when to do it." => "Vyberte, či chcete vymazať hodnoty pre otázky skryté podmienenou logikou a kedy to urobiť."
// pehelp.textUpdateMode: "Choose from: \"On lost focus\" - the value is updated when the input field loses focus; \"While typing\" - the value is updated in real-time, as users are typing." => "Vyberte si z: \"Pri strate zaostrenia\" - hodnota sa aktualizuje, keď vstupné pole stratí zaostrenie; \"Počas písania\" - hodnota sa aktualizuje v reálnom čase, keď používatelia píšu."
// pehelp.columns: "The left value serves as a column ID used in conditional rules, the right value is displayed to respondents." => "Ľavá hodnota slúži ako ID stĺpca používaného v podmienených pravidlách, pravá hodnota sa zobrazuje respondentom."
// pehelp.rows: "The left value serves as a row ID used in conditional rules, the right value is displayed to respondents." => "Ľavá hodnota slúži ako ID riadka používaného v podmienených pravidlách, pravá hodnota sa zobrazuje respondentom."
// pehelp.columnMinWidth: "Accepts CSS values (px, %, in, pt, etc.)." => "Akceptuje hodnoty CSS (px, %, in, pt atď.)."
// pehelp.rowTitleWidth: "Accepts CSS values (px, %, in, pt, etc.)." => "Akceptuje hodnoty CSS (px, %, in, pt atď.)."
// pehelp.cellErrorLocation: "Sets the location of an error message in relation to a cell with invalid input. The \"Inherit\" option applies the setting from the \"Error message alignment\" property." => "Nastaví umiestnenie chybového hlásenia vo vzťahu k bunke s neplatným vstupom. Možnosť Zdediť použije nastavenie z vlastnosti Zarovnanie chybového hlásenia."
// pehelp.keyDuplicationError: "When the \"Prevent duplicate responses\" property is enabled, a respondent attempting to submit a duplicate entry will receive the following error message." => "Keď je povolená vlastnosť Zabrániť duplicitným odpovediam, respondentovi, ktorý sa pokúša odoslať duplicitný záznam, sa zobrazí nasledujúce chybové hlásenie."
// pehelp.totalExpression: "Allows you to calculate total values based on an expression. The expression can include basic calculations (`{q1_id} + {q2_id}`), Boolean expressions (`{age} > 60`) and functions ('iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, etc.)." => "Umožňuje vypočítať celkové hodnoty na základe výrazu. Výraz môže obsahovať základné výpočty (\"{q1_id} + {q2_id}\"), boolovské výrazy (\"{age} > 60') a funkcie (\"iif()\", \"today()\", \"age()\", \"min()\", \"max()\", \"avg()\" atď.)."
// pehelp.confirmDelete: "Triggers a prompt asking to confirm the row deletion." => "Spustí výzvu so žiadosťou o potvrdenie odstránenia riadka."
// pehelp.copyDefaultValueFromLastEntry: "Duplicates answers from the last row and assigns them to the next added dynamic row." => "Duplikuje odpovede z posledného riadka a priradí ich k ďalšiemu pridanému dynamickému riadku."
// pehelp.description: "Type a subtitle." => "Zadajte podnadpis."
// pehelp.locale: "Choose a language to begin creating your survey. To add a translation, switch to a new language and translate the original text here or in the Translations tab." => "Vyberte jazyk a začnite vytvárať prieskum. Ak chcete pridať preklad, prepnite na nový jazyk a preložte pôvodný text tu alebo na karte Preklady."
// pehelp.detailPanelMode: "Sets the location of a details section in relation to a row. Choose from: \"None\" - no expansion is added; \"Under the row\" - a row expansion is placed under each row of the matrix; \"Under the row, display one row expansion only\" - an expansion is displayed under a single row only, the remaining row expansions are collapsed." => "Nastaví umiestnenie sekcie podrobností vo vzťahu k riadku. Vyberte si z: \"Žiadne\" - nie je pridané žiadne rozšírenie; \"Pod riadkom\" - pod každým riadkom matice je umiestnené rozšírenie riadku; \"Pod riadkom zobraziť iba rozšírenie jedného riadka\" - rozšírenie sa zobrazí iba pod jedným riadkom, zvyšné rozšírenia riadkov sa zbalia."
// pehelp.imageFit: "Choose from: \"None\" - image maintains its original size; \"Contain\" - image is resized to fit while maintaining its aspect ratio; \"Cover\" - image fills the entire box while maintaining its aspect ratio; \"Fill\" - image is stretched to fill the box without maintaining its aspect ratio." => "Vyberte si z: \"Žiadne\" - obrázok si zachováva svoju pôvodnú veľkosť; \"Obsahovať\" - veľkosť obrázka sa zmení tak, aby sa zmestil pri zachovaní pomeru strán; \"Obal\" - obrázok vyplní celé pole pri zachovaní pomeru strán; \"Vyplniť\" - obrázok je natiahnutý tak, aby vyplnil pole bez zachovania pomeru strán."
// pehelp.autoGrow: "Gradually increases the height of the input field as data is being entered. Overrides the \"Input field height (in lines)\" setting." => "Postupne zvyšuje výšku vstupného poľa pri zadávaní údajov. Prepíše nastavenie Výška vstupného poľa (v riadkoch)."
// pehelp.allowResize: "The resize handle (or grip) appears in the corner and can be dragged to alter the size of the input field." => "Rukoväť na zmenu veľkosti (alebo uchopenie) sa zobrazí v rohu a potiahnutím môžete zmeniť veľkosť vstupného poľa."
// pehelp.timeLimit: "A time interval in seconds after which the survey auto-advances to the Thank You page." => "Časový interval v sekundách, po ktorom prieskum automaticky prejde na stránku s poďakovaním."
// pehelp.timeLimitPerPage: "A time interval in seconds after which the survey auto-advances to the next page." => "Časový interval v sekundách, po ktorom prieskum automaticky prejde na ďalšiu stránku."
// page.timeLimit: "A time interval in seconds after which the survey auto-advances to the next page." => "Časový interval v sekundách, po ktorom prieskum automaticky prejde na ďalšiu stránku."
// page.visibleIf: "Use the magic wand icon to set a conditional rule that determines page visibility." => "Pomocou ikony čarovnej paličky nastavte podmienené pravidlo, ktoré určuje viditeľnosť stránky."
// page.enableIf: "Use the magic wand icon to set a conditional rule that disables the read-only mode for the page." => "Pomocou ikony čarovného prútika nastavte podmienené pravidlo, ktoré vypne režim iba na čítanie pre stránku."
// page.requiredIf: "Use the magic wand icon to set a conditional rule that prevents survey submission unless at least one nested question has an answer." => "Pomocou ikony čarovného prútika nastavte podmienené pravidlo, ktoré zabráni odoslaniu prieskumu, pokiaľ aspoň jedna vnorená otázka nemá odpoveď."
// page.questionTitleLocation: "Applies to all questions within this page. If you want to override this setting, define title alignment rules for individual questions or panels. The \"Inherit\" option applies the survey-level setting (\"Top\" by default)." => "Vzťahuje sa na všetky otázky na tejto stránke. Ak chcete toto nastavenie prepísať, definujte pravidlá zarovnania názvu pre jednotlivé otázky alebo panely. Možnosť \"Zdediť\" použije nastavenie na úrovni prieskumu (\"Predvolene hore\")."
// page.questionErrorLocation: "Sets the location of an error message in relation to the question with invalid input. Choose between: \"Top\" - an error text is placed at the top of the question box; \"Bottom\" - an error text is placed at the bottom of the question box. The \"Inherit\" option applies the survey-level setting (\"Top\" by default)." => "Nastaví umiestnenie chybového hlásenia vo vzťahu k otázke s neplatným zadaním. Vyberte si medzi: \"Hore\" - v hornej časti poľa otázok sa umiestni chybový text; \"Dole\" - v dolnej časti poľa otázok je umiestnený chybový text. Možnosť \"Zdediť\" použije nastavenie na úrovni prieskumu (\"Predvolene hore\")."
// page.questionOrder: "Keeps the original order of questions or randomizes them. The \"Inherit\" option applies the survey-level setting (\"Original\" by default). The effect of this setting is only visible in the Preview tab." => "Zachová pôvodné poradie otázok alebo ich náhodne vyberie. Možnosť \"Zdediť\" použije nastavenie na úrovni prieskumu (\"Originál\" v predvolenom nastavení). Efekt tohto nastavenia je viditeľný iba na karte Ukážka."
// page.showNavigationButtons: "Sets the visibility of navigation buttons on the page. The \"Inherit\" option applies the survey-level setting, which defaults to \"Visible\"." => "Nastavuje viditeľnosť navigačných tlačidiel na stránke. Možnosť Zdediť použije nastavenie na úrovni prieskumu, ktoré je predvolene nastavené na \"Viditeľné\"."
// pehelp.panelsState: "Choose from: \"Locked\" - users cannot expand or collapse panels; \"Collapse all\" - all panels start in a collapsed state; \"Expand all\" - all panels start in an expanded state; \"First expanded\" - only the first panel is initially expanded." => "Vyberte si z: \"Zamknuté\" - používatelia nemôžu rozširovať ani zbaliť panely; \"Zbaliť všetko\" - všetky panely začínajú v zbalenom stave; \"Rozbaliť všetko\" - všetky panely začínajú v rozšírenom stave; \"Prvý rozšírený\" - pôvodne sa rozšíril iba prvý panel."
// pehelp.imageLinkName: "Enter a shared property name within the array of objects that contains the image or video file URLs you want to display in the choice list." => "Zadajte zdieľaný názov vlastnosti do poľa objektov obsahujúceho URL adresy obrázkov alebo videosúborov, ktoré chcete zobraziť v zozname výberu."
// pehelp.choices: "The left value serves as an item ID used in conditional rules, the right value is displayed to respondents." => "Ľavá hodnota slúži ako ID položky používané v podmienených pravidlách, pravá hodnota sa zobrazuje respondentom."
// pehelp.title: "Type a user-friendly title to display." => "Zadajte používateľsky prívetivý názov, ktorý chcete zobraziť."
// pehelp.waitForUpload: "Ensures that users won't complete the survey until files are uploaded." => "Zabezpečuje, že používatelia prieskum nevyplnia, kým sa nenahrajú súbory."
// pehelp.minWidth: "Accepts CSS values (px, %, in, pt, etc.)." => "Akceptuje hodnoty CSS (px, %, in, pt atď.)."
// pehelp.maxWidth: "Accepts CSS values (px, %, in, pt, etc.)." => "Akceptuje hodnoty CSS (px, %, in, pt atď.)."
// pehelp.width: "Accepts CSS values (px, %, in, pt, etc.)." => "Akceptuje hodnoty CSS (px, %, in, pt atď.)."
// pehelp.useDisplayValuesInDynamicTexts: "In single- and multiple-selection question types, each choice option has an ID and display value. When selected, this setting shows a display value instead of an ID value in HTML questions and dynamic titles and descriptions of survey elements." => "V prípade otázok s jedným a viacerými výbermi má každá možnosť výberu identifikátor a zobrazenú hodnotu. Ak je táto voľba vybratá, toto nastavenie zobrazuje zobrazenú hodnotu namiesto hodnoty ID v otázkach HTML a dynamických názvoch a popisoch prvkov prieskumu."
// pehelp.clearIfInvisible: "Choose whether or not to clear question values hidden by conditional logic and when to do it. The \"Inherit\" option applies the survey-level setting (\"Upon survey completion\" by default)." => "Vyberte, či chcete vymazať hodnoty otázok skryté podmienenou logikou a kedy to chcete urobiť. Možnosť \"Dediť\" použije nastavenie na úrovni prieskumu (\"Po dokončení prieskumu predvolene\")."
// pehelp.choicesFromQuestionMode: "Choose from: \"All\" - copies all choice options from the selected question; \"Selected\" - dynamically copies only selected choice options; \"Unselected\" - dynamically copies only unselected choice options. The \"None\" and \"Other\" options are copied by default if enabled in the source question." => "Vyberte si z: \"Všetko\" - skopíruje všetky možnosti výberu z vybranej otázky; \"Vybraté\" - dynamicky kopíruje iba vybrané možnosti výberu; \"Nevybraté\" - dynamicky kopíruje iba nevybraté možnosti výberu. Možnosti \"Žiadne\" a \"Iné\" sa predvolene kopírujú, ak sú povolené v otázke zdroja."
// pehelp.showOtherItem: "When selected, users can include additional input in a separate comment box." => "Ak je táto voľba vybratá, používatelia môžu zahrnúť ďalšie vstupy do samostatného poľa komentára."
// pehelp.separateSpecialChoices: "Displays each special choice option (\"None\", \"Other\", \"Select All\") on a new line, even when using a multiple-column layout." => "Zobrazí každú možnosť špeciálnej voľby (\"Žiadne\", \"Iné\", \"Vybrať všetko\") na novom riadku, a to aj pri použití rozloženia s viacerými stĺpcami."
// pehelp.path: "Specify the location within the service dataset where the target array of objects is located. Leave empty if the URL already points to the array." => "Zadajte umiestnenie v množine údajov služby, kde sa nachádza cieľové pole objektov. Ak URL adresa už odkazuje na pole, nechajte prázdne."
// pehelp.titleName: "Enter a uniform property name within the array of objects that contains the values you want to display in the choice list." => "Zadajte jednotný názov vlastnosti do poľa objektov obsahujúceho hodnoty, ktoré chcete zobraziť v zozname možností."
// pehelp.allowEmptyResponse: "Select to allow the service to return an empty response or array." => "Túto voľbu vyberte, ak chcete, aby služba vrátila prázdnu odpoveď alebo pole."
// pehelp.choicesVisibleIf: "Use the magic wand icon to set a conditional rule that determines the visibility of all choice options." => "Pomocou ikony čarovného prútika nastavte podmienené pravidlo, ktoré určuje viditeľnosť všetkých možností výberu."
// pehelp.rateValues: "The left value serves as an item ID used in conditional rules, the right value is displayed to respondents." => "Ľavá hodnota slúži ako ID položky používané v podmienených pravidlách, pravá hodnota sa zobrazuje respondentom."
// rating.displayMode: "\"Auto\" selects between the \"Buttons\" and \"Dropdown\" modes based on the available width. When the width is insufficient to display buttons, the question displays a dropdown." => "\"Auto\" si vyberá medzi režimami \"Tlačidlá\" a \"Rozbaľovacia ponuka\" na základe dostupnej šírky. Ak šírka nie je dostatočná na zobrazenie tlačidiel, v otázke sa zobrazí rozbaľovací zoznam."
// pehelp.valuePropertyName: "Allows you to connect questions that produce results in different formats. When such questions are linked together using a join identifier, this shared property stores selected question values." => "Umožňuje prepojiť otázky, ktoré vytvárajú výsledky v rôznych formátoch. Keď sú takéto otázky prepojené pomocou identifikátora spojenia, v tomto zdieľanom vlastníctve sa uložia vybraté hodnoty otázok."
// pehelp.searchEnabled: "Select if you want to update the drop-down menu contents to match the search query that a user is typing in the input field." => "Vyberte, či chcete aktualizovať obsah rozbaľovacej ponuky tak, aby zodpovedal vyhľadávaciemu dotazu, ktorý používateľ zadáva do vstupného poľa."
// pehelp.valueTrue: "A value to save in survey results when respondents give a positive answer." => "Hodnota, ktorú treba uložiť do výsledkov prieskumu, keď respondenti poskytnú kladnú odpoveď."
// pehelp.valueFalse: "A value to save in survey results when respondents give a negative answer." => "Hodnota, ktorú je potrebné uložiť do výsledkov prieskumu, keď respondenti poskytnú zápornú odpoveď."
// pehelp.showPreview: "It's not recommended to disable this option as it overrides the Preview image and makes it hard for a user to understand whether the files have been uploaded." => "Túto možnosť sa neodporúča zakázať, pretože prepíše obrázok ukážky a sťažuje používateľovi pochopiť, či boli súbory nahrané."
// pehelp.needConfirmRemoveFile: "Triggers a prompt asking to confirm the file deletion." => "Spustí výzvu na potvrdenie odstránenia súboru."
// pehelp.selectToRankEnabled: "Enable to rank only selected choices. Users will drag selected items from the choice list to order them within the ranking area." => "Povoľte zoradiť iba vybrané možnosti. Používatelia presunú vybrané položky zo zoznamu možností a zoradia ich v oblasti poradia."
// pehelp.dataList: "Enter a list of choices that will be suggested to the respondent during input." => "Zadajte zoznam možností, ktoré budú respondentovi navrhnuté počas vstupu."
// pehelp.inputSize: "The setting only resizes the input fields and doesn't affect the width of the question box." => "Toto nastavenie zmení iba veľkosť vstupných polí a neovplyvní šírku poľa otázok."
// pehelp.itemTitleWidth: "Sets consistent width for all item labels in pixels" => "Nastavuje konzistentnú šírku pre všetky štítky položiek v pixeloch"
// pehelp.contentMode: "The \"Auto\" option automatically determines the suitable mode for display - Image, Video, or YouTube - based on the source URL provided." => "Možnosť \"Auto\" automaticky určuje vhodný režim zobrazenia - obrázok, video alebo YouTube - na základe poskytnutej zdrojovej adresy URL."
// pehelp.altText: "Serves as a substitute when the image cannot be displayed on a user's device and for accessibility purposes." => "Slúži ako náhrada, keď obrázok nie je možné zobraziť na zariadení používateľa a na účely prístupnosti."
// pehelp.rateColorMode: "Defines the color of the selected emoji when the Rating icon type is set to \"Smileys\". Choose between: \"Default\" - the selected emoji appears in default survey color; \"Scale\" - the selected emoji inherits color from the rating scale." => "Definuje farbu vybraných emodži, keď je typ ikony hodnotenia nastavený na \"Smajlíky\". Vyberte si medzi: \"Predvolené\" - vybrané emodži sa zobrazia v predvolenej farbe prieskumu; \"Mierka\" - vybrané emodži zdedí farbu z hodnotiacej stupnice."
// expression.name: "An expression ID that is not visible to respondents." => "ID výrazu, ktoré respondenti nevidia."
// expression.description: "Type an expression subtitle." => "Zadajte podnadpis výrazu."
// expression.expression: "An expression can include basic calculations (`{q1_id} + {q2_id}`), conditions (`{age} > 60`), and functions ('iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, etc.)." => "Výraz môže obsahovať základné výpočty (\"{q1_id} + {q2_id}\"), podmienky (\"{vek} > 60\") a funkcie (\"iif()\", \"today()\", \"age()\", \"min()\", \"max()\", \"avg()\" atď.)."
// pehelp.storeOthersAsComment: "Select to store the \"Other\" option value as a separate property in survey results." => "Túto voľbu vyberte, ak chcete uložiť hodnotu možnosti \"Iné\" ako samostatnú vlastnosť vo výsledkoch prieskumu."
// p.swapOrder: "Swap the order of Yes and No" => "Zámena poradia Áno a Nie"
// p.itemTitleWidth: "Item label width (in px)" => "Šírka označenia položky (v px)"
// p.selectToRankEmptyRankedAreaText: "Text to show if all options are selected" => "Text, ktorý zobrazuje, či sú vybraté všetky možnosti"
// p.selectToRankEmptyUnrankedAreaText: "Placeholder text for the ranking area" => "Zástupný text pre oblasť hodnotenia"
// pe.autoAdvanceAllowComplete: "Complete the survey automatically" => "Vyplňte prieskum automaticky"
// pehelp.autoAdvanceAllowComplete: "Select if you want the survey to complete automatically after a respondent answers all questions." => "Vyberte, či chcete, aby sa prieskum dokončil automaticky po tom, čo respondent odpovie na všetky otázky."
// masksettings.saveMaskedValue: "Save masked value in survey results" => "Uložte maskovanú hodnotu do výsledkov prieskumu"
// patternmask.pattern: "Value pattern" => "Hodnotový vzor"
// datetimemask.min: "Minimum value" => "Minimálna hodnota"
// datetimemask.max: "Maximum value" => "Maximálna hodnota"
// numericmask.allowNegativeValues: "Allow negative values" => "Povolenie záporných hodnôt"
// numericmask.thousandsSeparator: "Thousands separator" => "Oddeľovač tisícov"
// numericmask.decimalSeparator: "Decimal separator" => "Oddeľovač desatinných miest"
// numericmask.precision: "Value precision" => "Presnosť hodnoty"
// numericmask.min: "Minimum value" => "Minimálna hodnota"
// numericmask.max: "Maximum value" => "Maximálna hodnota"
// currencymask.prefix: "Currency prefix" => "Predčíslievanie meny"
// currencymask.suffix: "Currency suffix" => "Prípona meny"
// pe.maskType: "Input mask type" => "Typ vstupnej masky"
// maskTypes.patternmask: "Pattern" => "Vzorka"
// maskTypes.numericmask: "Numeric" => "Numerický"
// maskTypes.datetimemask: "Date and Time" => "Dátum a čas"
// maskTypes.currencymask: "Currency" => "Mena"
// tabs.mask: "Input Mask Settings" => "Nastavenia vstupnej masky"
// pe.pattern_placeholder: "Ex.: +1(999)-999-99-99" => "Napríklad: +1(999)-999-99-99"
// pe.datetimepattern_placeholder: "Ex.: mm/dd/yyyy" => "Napr.: mm/dd/rrrr"
// pe.currencyprefix_placeholder: "Ex.: $" => "Napr.: $"
// pe.currencysuffix_placeholder: "Ex.: USD" => "Napríklad: USD"
// pv.textWrapEnabled: "Wrap choices" => "Možnosti zabalenia"
// question.textWrapEnabled: "Long texts in choice options will automatically generate line breaks to fit within the drop-down menu. Unselect if you want the texts to clip." => "Dlhé texty v možnostiach výberu automaticky vygenerujú zlomy riadkov, aby sa zmestili do rozbaľovacej ponuky. Zrušte výber, či chcete texty vystrihnúť."
// masksettings.saveMaskedValue: "Select if you want to store the question value with an applied mask in survey results." => "Vyberte, či chcete do výsledkov prieskumu uložiť hodnotu otázky s použitou maskou."
// patternmask.pattern: "The pattern can contain string literals and the following placeholders: `9` - for a digit; `a` - for an upper- or lower-case letter; `#` - for a digit or an upper- or lower-case letter. Use backslash `\\` to escape a character." => "Vzor môže obsahovať reťazcové literály a nasledujúce zástupné symboly: \"9\" - pre číslicu; \"a\" - pre veľké alebo malé písmeno; '#' - pre číslicu alebo veľké alebo malé písmeno. Použite opačné lomítko \"\\\" na únik z postavy."
// datetimemask.pattern: "The pattern can contain separator characters and the following placeholders: `m` - for month number; `mm` - for month number, with leading zero for single-digit values; `d` - for day of the month; `dd` - for day of the month, with leading zero for single-digit values; `yy` - for the last two digits of the year; `yyyy` - for a four-digit year." => "Vzor môže obsahovať oddeľovacie znaky a nasledujúce zástupné symboly: \"m\" - pre číslo mesiaca; \"mm\" - pre číslo mesiaca, s úvodnou nulou pre jednociferné hodnoty; \"d\" - pre deň v mesiaci; \"dd\" - pre deň v mesiaci s počiatočnou nulou pre jednociferné hodnoty; \"yy\" - pre posledné dve číslice roka; \"rrrr\" - na štvorciferný rok."
// numericmask.decimalSeparator: "A symbol used to separate the fractional part from the integer part of a displayed number." => "Symbol používaný na oddelenie zlomkovej časti od celočíselnej časti zobrazeného čísla."
// numericmask.thousandsSeparator: "A symbol used to separate the digits of a large number into groups of three." => "Symbol používaný na oddelenie číslic veľkého čísla do skupín po troch."
// numericmask.precision: "Limits how many digits to retain after the decimal point for a displayed number." => "Obmedzuje, koľko číslic sa má zachovať za desatinnou čiarkou pre zobrazené číslo."
// currencymask.prefix: "One or several symbols to be displayed before the value." => "Jeden alebo niekoľko symbolov, ktoré sa majú zobraziť pred hodnotou."
// currencymask.suffix: "One or several symbols to be displayed after the value." => "Jeden alebo viac symbolov, ktoré sa zobrazia za hodnotou."
// ed.translationSource: "Source: " => "Zdroj: "
// ed.translationTarget: "Target: " => "Cieľ: "
// ed.pagePlaceHolder: "The page is empty. Drag an element from the toolbox or click the button below." => "Stránka je prázdna. Potiahnite prvok z panela s nástrojmi alebo kliknite na tlačidlo nižšie."
// maskTypes.none: "None" => "Žiadny"
// itemvalue@rows.visibleIf: "Make the row visible if" => "Nastavenie riadka ako viditeľného, ak"
// itemvalue@rows.enableIf: "Make the row editable if" => "Nastavte riadok tak, aby ho bolo možné upravovať, ak"
// signaturepad.placeholderReadOnly: "Placeholder text in read-only or preview mode" => "Zástupný text v režime iba na čítanie alebo v režime ukážky"
// pe.textWrapEnabled: "Wrap choices" => "Možnosti zabalenia"
// image.contentMode: "The \"Auto\" option automatically determines the suitable mode for display - Image, Video, or YouTube - based on the source URL provided." => "Možnosť \"Auto\" automaticky určuje vhodný režim zobrazenia - obrázok, video alebo YouTube - na základe poskytnutej zdrojovej adresy URL."
// imagepicker.contentMode: "Choose between \"Image\" and \"Video\" to set the content mode of the media selector. If \"Image\" is selected, ensure that all options provided are image files in the following formats: JPEG, GIF, PNG, APNG, SVG, BMP, ICO. Similarly, if \"Video\" is selected, ensure that all options are direct links to video files in the following formats: MP4, MOV, WMV, FLV, AVI, MKV. Please note that YouTube links are not supported for video options." => "Vyberte si medzi \"Obrázok\" a \"Video\" a nastavte režim obsahu výberu médií. Ak je vybratá možnosť \"Obrázok\", uistite sa, že všetky poskytnuté možnosti sú obrazové súbory v nasledujúcich formátoch: JPEG, GIF, PNG, APNG, SVG, BMP, ICO. Podobne, ak je vybratá možnosť \"Video\", uistite sa, že všetky možnosti sú priamymi odkazmi na video súbory v nasledujúcich formátoch: MP4, MOV, WMV, FLV, AVI, MKV. Upozorňujeme, že možnosti videí nie sú podporované odkazmi na YouTube."
// ed.selectFile: "Select a file" => "Vyberte súbor"
// ed.removeFile: "Remove the file" => "Odstránenie súboru"
// pe.searchMode: "Search Mode" => "Režim vyhľadávania"
// ed.surveyPlaceHolderMobile: "Click the \"Add Question\" button below to start creating your form." => "Kliknite na tlačidlo \"Pridať otázku\" nižšie a začnite vytvárať formulár."
// ed.pagePlaceHolderMobile: "Click the \"Add Question\" button below to add a new element to the page." => "Kliknite na tlačidlo \"Pridať otázku\" nižšie a pridajte na stránku nový prvok."
// ed.panelPlaceHolderMobile: "Click the \"Add Question\" button below to add a new element to the panel." => "Kliknite na tlačidlo \"Pridať otázku\" nižšie a pridajte na panel nový prvok."
// ed.imagePlaceHolderMobile: "Click the button below and choose an image to upload" => "Kliknite na tlačidlo nižšie a vyberte obrázok, ktorý chcete nahrať"
// coloralpha.opacity: "Opacity" => "Neprehľadnosť"
// font.family: "Font family" => "Skupina písiem"
// font.color: "Color" => "Farba"
// font.placeholderColor: "Placeholder color" => "Farba zástupného symbolu"
// font.size: "Size" => "Veľkosť"
// theme.themeName: "Theme" => "Téma"
// theme.isPanelless: "Question appearance" => "Vzhľad otázky"
// theme.editorPanel: "Background and corner radius" => "Pozadie a polomer rohov"
// theme.questionPanel: "Background and corner radius" => "Pozadie a polomer rohov"
// theme.primaryColor: "Accent color" => "Farba akcentu"
// theme.panelBackgroundTransparency: "Panel background opacity" => "Nepriehľadnosť pozadia panela"
// theme.questionBackgroundTransparency: "Question background opacity" => "Nepriehľadnosť pozadia otázky"
// theme.fontSize: "Font size" => "Veľkosť písma"
// theme.scale: "Scale" => "Stupnica"
// theme.cornerRadius: "Corner radius" => "Polomer rohov"
// theme.pageTitle: "Title font" => "Písmo názvu"
// theme.pageDescription: "Description font" => "Popisné písmo"
// theme.questionTitle: "Title font" => "Písmo názvu"
// theme.questionDescription: "Description font" => "Popisné písmo"
// theme.editorFont: "Font" => "Písmo"
// theme.backgroundOpacity: "Opacity" => "Neprehľadnosť"
// theme.--sjs-font-family: "Font family" => "Skupina písiem"
// theme.--sjs-general-backcolor-dim: "Background color" => "Farba pozadia"
// theme.--sjs-primary-backcolor: "Accent background" => "Zvýraznenie pozadia"
// theme.--sjs-primary-forecolor: "Accent foreground" => "Zvýraznenie v popredí"
// theme.--sjs-shadow-small: "Shadow effects" => "Efekty tieňov"
// theme.--sjs-shadow-inner: "Shadow effects" => "Efekty tieňov"
// theme.--sjs-border-default: "Colors" => "Farby"
// header@header.headerView: "View" => "Pohľad"
// header@header.logoPosition: "Logo position" => "Umiestnenie loga"
// header@header.surveyTitle: "Survey title font" => "Písmo názvu prieskumu"
// header@header.surveyDescription: "Survey description font" => "Písmo popisu prieskumu"
// header@header.headerTitle: "Survey title font" => "Písmo názvu prieskumu"
// header@header.headerDescription: "Survey description font" => "Písmo popisu prieskumu"
// header@header.inheritWidthFrom: "Content area width" => "Šírka oblasti obsahu"
// header@header.textAreaWidth: "Text width" => "Šírka textu"
// header@header.backgroundColorSwitch: "Background color" => "Farba pozadia"
// header@header.backgroundImage: "Background image" => "Obrázok na pozadí"
// header@header.backgroundImageOpacity: "Opacity" => "Neprehľadnosť"
// header@header.overlapEnabled: "Overlap" => "Presahovať"
// header@header.logoPositionX: "Logo position" => "Umiestnenie loga"
// header@header.titlePositionX: "Title position" => "Pozícia názvu"
// header@header.descriptionPositionX: "Description position" => "Popisná poloha"
// weight.400: "Regular" => "Pravidelný"
// weight.600: "Heavy" => "Ťažký"
// weight.700: "Semi-bold" => "Polotučné"
// weight.800: "Bold" => "Smelý"
// backgroundImageFit.auto: "Auto" => "Auto"
// backgroundImageFit.cover: "Cover" => "Prikryť"
// backgroundImageFit.contain: "Contain" => "Obsahovať"
// backgroundImageFit.fill: "Stretch" => "Natiahnuť"
// backgroundImageFit.tile: "Tile" => "Dlaždica"
// backgroundImageAttachment.fixed: "Fixed" => "Stabilný"
// backgroundImageAttachment.scroll: "Scroll" => "Zvitok"
// headerView.basic: "Basic" => "Základný"
// headerView.advanced: "Advanced" => "Pokročilý"
// inheritWidthFrom.survey: "Same as survey" => "Rovnaké ako prieskum"
// inheritWidthFrom.container: "Fit to container" => "Vhodné na kontajner"
// backgroundColorSwitch.none: "None" => "Žiadny"
// backgroundColorSwitch.accentColor: "Accent color" => "Farba akcentu"
// backgroundColorSwitch.custom: "Custom" => "Zvyk"
// colorPalette.light: "Light" => "Svetlo"
// colorPalette.dark: "Dark" => "Tmavý"
// isPanelless.false: "Default" => "Predvolený"
// isPanelless.true: "Without Panels" => "Bez panelov"
// theme.cornerRadius: "Corner radius" => "Polomer rohov"
// theme.fontFamily: "Font family" => "Skupina písiem"
// theme.fontWeightRegular: "Regular" => "Pravidelný"
// theme.fontWeightHeavy: "Heavy" => "Ťažký"
// theme.fontWeightSemiBold: "Semi-bold" => "Polotučné"
// theme.fontWeightBold: "Bold" => "Smelý"
// theme.color: "Color" => "Farba"
// theme.placeholderColor: "Placeholder color" => "Farba zástupného symbolu"
// theme.size: "Size" => "Veľkosť"
// theme.opacity: "Opacity" => "Neprehľadnosť"
// ed.toolboxFilteredTextPlaceholder: "Type to search..." => "Zadajte reťazec pre vyhľadávanie..."
// ed.toolboxNoResultsFound: "No results found" => "Nenašli sa žiadne výsledky"
// paneldynamic.tabTitlePlaceholder: "Tab title placeholder" => "Zástupný symbol názvu tabulátora"
// theme.--sjs-special-red: "Error messages" => "Chybové hlásenia"
// paneldynamic.tabTitlePlaceholder: "A fallback text for tab titles that applies when the tab title pattern doesn't produce a meaningful value." => "Záložný text pre názvy kariet, ktorý sa použije, keď vzor názvu tabulátora nevytvára zmysluplnú hodnotu."
// theme.fontColor: "Font color" => "Farba písma"
// theme.backgroundColor: "Background color" => "Farba pozadia"
// pe.questionTitleWidth: "Question title width" => "Šírka názvu otázky"
// pe.fileInputPlaceholder: "Select a file or paste a file link..." => "Vyberte súbor alebo prilepte odkaz na súbor..."
// panelbase.questionTitleWidth: "Ex.: 200px" => "Napríklad: 200px"
// panel.questionTitleWidth: "Sets consistent width for question titles when they are aligned to the left of their question boxes. Accepts CSS values (px, %, in, pt, etc.)." => "Nastavuje konzistentnú šírku názvov otázok, keď sú zarovnané naľavo od polí otázok. Akceptuje hodnoty CSS (px, %, in, pt atď.)."
// page.questionTitleWidth: "Sets consistent width for question titles when they are aligned to the left of their question boxes. Accepts CSS values (px, %, in, pt, etc.)." => "Nastavuje konzistentnú šírku názvov otázok, keď sú zarovnané naľavo od polí otázok. Akceptuje hodnoty CSS (px, %, in, pt atď.)."
// pe.commentAreaRows: "Comment area height (in lines)" => "Výška oblasti komentárov (v riadkoch)"
// pehelp.commentAreaRows: "Sets the number of displayed lines in text areas for question comments. In the input takes up more lines, the scroll bar appears." => "Nastaví počet zobrazených riadkov v textových oblastiach pre komentáre otázok. Vo vstupe zaberá viac riadkov, zobrazí sa posúvač."
// pe.enabled: "Enabled" => "Povolené"
// pe.disabled: "Disabled" => "Invalidný"
// pe.inherit: "Inherit" => "Zdediť"
// pe.validateVisitedEmptyFields: "Validate empty fields on lost focus" => "Overenie prázdnych polí pri strate zamerania"
// panellayoutcolumn.effectiveWidth: "Ex.: 30%" => "Príklad: 30 %"
// panellayoutcolumn.questionTitleWidth: "Ex.: 200px" => "Príklad: 200 pixelov"
// pehelp.validateVisitedEmptyFields: "Enable this option to trigger validation when a user focuses on an empty input field and then leaves it without making any changes." => "Povoľte túto možnosť, ak chcete spustiť overenie, keď sa používateľ zameria na prázdne vstupné pole a potom ho opustí bez vykonania akýchkoľvek zmien."
// pehelp.colCount: "Arranges choice options in a multi-column layout. When set to 0, the options are displayed in a single line." => "Usporiada možnosti výberu vo viacstĺpcovom rozložení. Ak je nastavená hodnota 0, možnosti sa zobrazia v jednom riadku."
// theme.isPanelless: "This setting applies only to questions outside of a panel." => "Toto nastavenie sa vzťahuje len na otázky mimo panela."
// theme.primaryColor: "Sets a supplementary color that highlights key survey elements." => "Nastaví doplnkovú farbu, ktorá zvýrazní kľúčové prvky prieskumu."
// theme.panelBackgroundTransparency: "Adjusts the transparency of panels and question boxes relative to the survey background." => "Upravuje priehľadnosť panelov a polí otázok vzhľadom na pozadie prieskumu."
// theme.questionBackgroundTransparency: "Adjusts the transparency of input elements relative to the survey background." => "Upraví priehľadnosť vstupných prvkov vzhľadom na pozadie prieskumu."
// theme.cornerRadius: "Sets the corner radius for all rectangular elements. Enable the Advanced Mode if you want to set individual corner radius values for input elements or panels and question boxes." => "Nastaví polomer rohu pre všetky obdĺžnikové prvky. Povoľte Rozšírený režim, ak chcete nastaviť jednotlivé hodnoty polomeru rohu pre vstupné prvky alebo panely a polia otázok."
// theme.--sjs-general-backcolor-dim: "Sets the main background color of the survey." => "Nastaví hlavnú farbu pozadia prieskumu."
// header.inheritWidthFrom: "The \"Same as container\" option auto-adjusts the header content area width to fit into the HTML element the survey is placed in." => "Možnosť \"Rovnaké ako kontajner\" automaticky upraví šírku oblasti obsahu hlavičky tak, aby sa zmestila do prvku HTML, do ktorého je prieskum umiestnený."
// header.textAreaWidth: "The width of the header area that contains the survey title and description, measured in pixels." => "Šírka oblasti hlavičky, ktorá obsahuje názov a popis prieskumu, meraná v pixeloch."
// panellayoutcolumn.effectiveWidth: "Accepts values %." => "Akceptuje hodnoty %."
// panellayoutcolumn.questionTitleWidth: "Accepts values px." => "Akceptuje hodnoty px."
// p.effectiveColSpan: "Column span" => "Rozpätie stĺpca"
// progressBarInheritWidthFrom.survey: "Same as survey" => "Rovnaké ako prieskum"
// progressBarInheritWidthFrom.container: "Same as container" => "Rovnaké ako kontajner"
// file.allowImagesPreview: "Displays thumbnail previews for uploaded files when possible. Unselect if you want to show file icons instead." => "Ak je to možné, zobrazí náhľady miniatúr nahraných súborov. Zrušte výber, ak chcete namiesto toho zobraziť ikony súborov."
// pehelp.progressBarInheritWidthFrom: "The \"Same as container\" option auto-adjusts the progress bar area width to fit into the HTML element the survey is placed in." => "Možnosť \"Rovnaké ako kontajner\" automaticky upraví šírku oblasti indikátora priebehu tak, aby sa zmestila do prvku HTML, v ktorom je prieskum umiestnený."
// p.progressBarInheritWidthFrom: "Progress bar area width" => "Šírka oblasti indikátora priebehu"
// maskType.none: "None" => "Žiadny"
// maskType.pattern: "Pattern" => "Vzorka"
// maskType.numeric: "Numeric" => "Numerický"
// maskType.datetime: "Date and Time" => "Dátum a čas"
// maskType.currency: "Currency" => "Mena"

// inputTextAlignment.auto: "Auto" => "Auto"
// inputTextAlignment.left: "Left" => "Vľavo"
// inputTextAlignment.right: "Right" => "Doprava"
// pehelp.inputTextAlignment: "Select how to align input value within the field. The default setting \"Auto\" aligns the input value to the right if currency or numeric masking is applied and to the left if not." => "Vyberte, ako chcete zarovnať vstupnú hodnotu v poli. Predvolené nastavenie \"Auto\" zarovná vstupnú hodnotu doprava, ak je použité maskovanie meny alebo čísel, a doľava, ak nie."
// p.inputTextAlignment: "Input value alignment" => "Zarovnanie vstupných hodnôt"
// paneldynamic.showRangeInProgress: "Show the progress bar" => "Zobrazenie indikátora priebehu"
// paneldynamic.showProgressBar: "Show the progress bar" => "Zobrazenie indikátora priebehu"
// paneldynamic.progressBarLocation: "Progress bar alignment" => "Zarovnanie indikátora priebehu"
// pv.carousel: "Carousel" => "Kolotoč"
// progressBarLocation.top: "Top" => "Vrchol"
// progressBarLocation.bottom: "Bottom" => "Dno"
// progressBarLocation.topBottom: "Top and bottom" => "Hore a dole"
// matrixdropdowncolumn.colCount: "Arranges choice options in a multi-column layout. When set to 0, the options are displayed in a single line. When set to -1, the actual value is inherited from the \"Nested column count\" property of the parent matrix." => "Usporiada možnosti výberu vo viacstĺpcovom rozložení. Ak je nastavená hodnota 0, možnosti sa zobrazia v jednom riadku. Ak je nastavená na -1, skutočná hodnota sa zdedí z vlastnosti \"Počet vnorených stĺpcov\" nadradenej matice."
// ed.translationYouTubeNotSupported: "YouTube links are not supported." => "Odkazy na YouTube nie sú podporované."
// ed.propertyGridPlaceholderTitle: "Start configuring your form" => "Začnite konfigurovať formulár"
// ed.propertyGridPlaceholderDescription: "Click any category icon to explore survey settings. Additional settings will become available once you add a survey element to the design surface." => "Kliknutím na ikonu ľubovoľnej kategórie preskúmate nastavenia prieskumu. Ďalšie nastavenia budú k dispozícii po pridaní prvku prieskumu na návrhovú plochu."
// pe.caseInsensitive: "Case insensitive" => "Nerozlišujú sa veľké a malé písmená"
// pehelp.caseInsensitive: "Select if uppercase and lowercase letters in the regular expression must be treated as equivalent." => "Vyberte, či sa veľké a malé písmená v regulárnom výraze musia považovať za ekvivalentné."

// ed.surveyPlaceholderTitle: "Your form is empty" => "Formulár je prázdny"
// ed.surveyPlaceholderTitleMobile: "Your form is empty" => "Formulár je prázdny"
// ed.surveyPlaceholderDescription: "Drag an element from the toolbox or click the button below." => "Presuňte prvok z panela s nástrojmi alebo kliknite na tlačidlo nižšie."
// ed.surveyPlaceholderDescriptionMobile: "Drag an element from the toolbox or click the button below." => "Presuňte prvok z panela s nástrojmi alebo kliknite na tlačidlo nižšie."
// ed.previewPlaceholderTitle: "No preview" => "Žiadny náhľad"
// ed.previewPlaceholderTitleMobile: "No preview" => "Žiadny náhľad"
// ed.previewPlaceholderDescription: "The survey doesn't contain any visible elements." => "Prieskum neobsahuje žiadne viditeľné prvky."
// ed.previewPlaceholderDescriptionMobile: "The survey doesn't contain any visible elements." => "Prieskum neobsahuje žiadne viditeľné prvky."
// ed.translationsPlaceholderTitle: "No strings to translate" => "Žiadne reťazce na preklad"
// ed.translationsPlaceholderTitleMobile: "No strings to translate" => "Žiadne reťazce na preklad"
// ed.translationsPlaceholderDescription: "Add elements to your form or change the strings filter in the toolbar." => "Pridajte prvky do formulára alebo zmeňte filter reťazcov na paneli s nástrojmi."
// ed.translationsPlaceholderDescriptionMobile: "Add elements to your form or change the strings filter in the toolbar." => "Pridajte prvky do formulára alebo zmeňte filter reťazcov na paneli s nástrojmi."
// lg.logicPlaceholderTitle: "No logical rules" => "Žiadne logické pravidlá"
// lg.logicPlaceholderTitleMobile: "No logical rules" => "Žiadne logické pravidlá"
// lg.logicPlaceholderDescription: "Create a rule to customize the flow of the survey." => "Vytvorte pravidlo na prispôsobenie toku prieskumu."
// lg.logicPlaceholderDescriptionMobile: "Create a rule to customize the flow of the survey." => "Vytvorte pravidlo na prispôsobenie toku prieskumu."
// pe.showTimer: "Use a timer" => "Použitie časovača"
// theme.advancedMode: "Advanced mode" => "Pokročilý režim"
// pehelp.timerLocation: "Sets the location of a timer on a page." => "Nastaví umiestnenie časovača na strane."
// header.mobileHeight: "When set to 0, the height is calculated automatically to accommodate the header's content." => "Ak je nastavená hodnota 0, výška sa vypočíta automaticky, aby sa prispôsobila obsahu hlavičky."
// p.mobileHeight: "Height on smartphones" => "Výška na smartfónoch"
// header.overlapEnabled: "When enabled, the top of the survey overlays the bottom of the header." => "Ak je táto možnosť povolená, horná časť prieskumu prekrýva spodnú časť hlavičky."
// ed.creatorSettingTitle: "Creator Settings" => "Nastavenia tvorcu"
// tabs.accentColors: "Accent colors" => "Akcentové farby"
// tabs.scaling: "Scaling" => "Škálovanie"
// panel.showQuestionNumbers: "Assigns numbers to questions nested within this panel." => "Priradí čísla otázkam vnoreným do tohto panela."
// creatortheme.--sjs-special-background: "Surface background" => "Povrchové pozadie"
// creatortheme.--sjs-primary-background-500: "Primary" => "Prvotný"
// creatortheme.--sjs-secondary-background-500: "Secondary" => "Sekundárny"
// creatortheme.surfaceScale: "Surface" => "Povrch"
// creatortheme.userInterfaceBaseUnit: "User interface" => "Používateľské rozhranie"
// creatortheme.fontScale: "Font" => "Písmo"
// names.sc2020: "Survey Creator 2020" => "Tvorca prieskumu 2020"
// names.default-light: "Light" => "Svetlo"
// names.default-dark: "Dark" => "Tmavý"
// names.default-contrast: "Contrast" => "Kontrast"
// panel.showNumber: "Number this panel" => "Očíslujte tento panel"
// pehelp.autoAdvanceEnabled: "Select if you want the survey to auto-advance to the next page once a respondent has answered all questions on the current page. This feature won't apply if the last question on the page is open-ended or allows multiple answers." => "Vyberte, či chcete, aby sa prieskum automaticky posunul na ďalšiu stránku, keď respondent odpovie na všetky otázky na aktuálnej stránke. Táto funkcia sa nepoužije, ak je posledná otázka na stránke otvorená alebo umožňuje viacero odpovedí."
// autocomplete.name: "Full Name" => "Celé meno"
// autocomplete.honorific-prefix: "Prefix" => "Predpona"
// autocomplete.given-name: "First Name" => "Krstné meno"
// autocomplete.additional-name: "Middle Name" => "Stredné meno"
// autocomplete.family-name: "Last Name" => "Priezvisko"
// autocomplete.honorific-suffix: "Suffix" => "Prípona"
// autocomplete.nickname: "Nickname" => "Prezývka"
// autocomplete.organization-title: "Job Title" => "Pracovná pozícia"
// autocomplete.username: "User Name" => "Používateľské meno"
// autocomplete.new-password: "New Password" => "Nové heslo"
// autocomplete.current-password: "Current Password" => "Aktuálne heslo"
// autocomplete.organization: "Organization Name" => "Názov organizácie"
// autocomplete.street-address: "Full Street Address" => "Celá adresa"
// autocomplete.address-line1: "Address Line 1" => "Riadok adresy 1"
// autocomplete.address-line2: "Address Line 2" => "Riadok adresy 2"
// autocomplete.address-line3: "Address Line 3" => "Riadok adresy 3"
// autocomplete.address-level4: "Level 4 Address" => "Adresa úrovne 4"
// autocomplete.address-level3: "Level 3 Address" => "Adresa úrovne 3"
// autocomplete.address-level2: "Level 2 Address" => "Adresa úrovne 2"
// autocomplete.address-level1: "Level 1 Address" => "Adresa úrovne 1"
// autocomplete.country: "Country Code" => "Kód krajiny"
// autocomplete.country-name: "Country Name" => "Názov krajiny"
// autocomplete.postal-code: "Postal Code" => "Psč"
// autocomplete.cc-name: "Cardholder Name" => "Meno držiteľa karty"
// autocomplete.cc-given-name: "Cardholder First Name" => "Krstné meno držiteľa karty"
// autocomplete.cc-additional-name: "Cardholder Middle Name" => "Stredné meno držiteľa karty"
// autocomplete.cc-family-name: "Cardholder Last Name" => "Priezvisko držiteľa karty"
// autocomplete.cc-number: "Credit Card Number" => "Číslo kreditnej karty"
// autocomplete.cc-exp: "Expiration Date" => "Dátum vypršania platnosti"
// autocomplete.cc-exp-month: "Expiration Month" => "Mesiac vypršania platnosti"
// autocomplete.cc-exp-year: "Expiration Year" => "Rok vypršania platnosti"
// autocomplete.cc-csc: "Card Security Code" => "Bezpečnostný kód karty"
// autocomplete.cc-type: "Credit Card Type" => "Typ kreditnej karty"
// autocomplete.transaction-currency: "Transaction Currency" => "Mena transakcie"
// autocomplete.transaction-amount: "Transaction Amount" => "Suma transakcie"
// autocomplete.language: "Preferred Language" => "Preferovaný jazyk"
// autocomplete.bday: "Birthday" => "Narodeniny"
// autocomplete.bday-day: "Birthday Day" => "Deň narodenín"
// autocomplete.bday-month: "Birthday Month" => "Mesiac narodenín"
// autocomplete.bday-year: "Birthday Year" => "Rok narodenín"
// autocomplete.sex: "Gender" => "Pohlavie"
// autocomplete.url: "Website URL" => "URL adresa webovej stránky"
// autocomplete.photo: "Profile Photo" => "Profilová fotka"
// autocomplete.tel: "Telephone Number" => "Telefónne číslo"
// autocomplete.tel-country-code: "Country Code for Phone" => "Kód krajiny pre telefón"
// autocomplete.tel-national: "National Telephone Number" => "Národné telefónne číslo"
// autocomplete.tel-area-code: "Area Code" => "Telefónna Predvoľba"
// autocomplete.tel-local: "Local Phone Number" => "Miestne telefónne číslo"
// autocomplete.tel-local-prefix: "Local Phone Prefix" => "Lokálna predvoľba telefónu"
// autocomplete.tel-local-suffix: "Local Phone Suffix" => "Prípona miestneho telefónu"
// autocomplete.tel-extension: "Phone Extension" => "Rozšírenie telefónu"
// autocomplete.email: "Email Address" => "E-mailová adresa"
// autocomplete.impp: "Instant Messaging Protocol" => "Protokol okamžitých správ"
// ed.lockQuestionsTooltip: "Lock expand/collapse state for questions" => "Uzamknutie stavu rozbalenia/zbalenia otázok"
// pe.listIsEmpty@pages: "You don't have any pages yet" => "Zatiaľ nemáte žiadne stránky"
// pe.addNew@pages: "Add new page" => "Pridať novú stránku"
// ed.zoomInTooltip: "Zoom In" => "Priblížiť"
// ed.zoomOutTooltip: "Zoom Out" => "Oddialiť"
// tabs.surfaceBackground: "Surface Background" => "Pozadie povrchu"
// pe.copyDefaultValueFromLastEntry: "Use answers from the last entry as default" => "Predvolené použitie odpovedí z posledného záznamu"
// colors.gray: "Gray" => "Sivý"
// pe.navigationButtonsLocation: "Navigation buttons alignment" => "Zarovnanie navigačných tlačidiel"
// pv.allQuestions: "Show all questions" => "Zobraziť všetky otázky"
// pv.answeredQuestions: "Show answered questions only" => "Zobraziť len zodpovedané otázky"
// pehelp.navigationButtonsLocation: "Sets the location of navigation buttons on a page." => "Nastaví umiestnenie navigačných tlačidiel na stránke."
// pe.choiceValuesFromQuestion: "Use values from the following matrix column or panel question as choice IDs" => "Použite hodnoty z nasledujúceho stĺpca matice alebo panelovej otázky ako ID výberu"
// pe.choiceTextsFromQuestion: "Use values from the following matrix column or panel question as choice texts" => "Ako texty výberu použite hodnoty z nasledujúceho stĺpca matice alebo panelovej otázky"
// pehelp.choiceValuesFromQuestion: "In single- and multiple-selection question types, each choice option has an ID and display value. This setting specifies which matrix column or panel question should provide the IDs." => "V typoch otázok s jedným a viacerými výbermi má každá možnosť výberu ID a zobrazenú hodnotu. Toto nastavenie určuje, ktorý stĺpec matice alebo panelová otázka má poskytnúť ID."
// pehelp.choiceTextsFromQuestion: "In single- and multiple-selection question types, each choice option has an ID and display value. This setting specifies which matrix column or panel question should provide the display texts." => "V typoch otázok s jedným a viacerými výbermi má každá možnosť výberu ID a zobrazenú hodnotu. Toto nastavenie určuje, ktorý stĺpec matice alebo otázka panela by mala poskytovať zobrazované texty."
// pe.progressBarLocation: "Progress bar alignment" => "Zarovnanie indikátora priebehu"
// progressBarLocation.topbottom: "Top and bottom" => "Hore a dole"
// progressBarLocation.aboveheader: "Above the header" => "Nad hlavičkou"
// progressBarLocation.belowheader: "Below the header" => "Pod hlavičkou"
// progressBarLocation.off: "Hidden" => "Skrytý"
// survey.progressBarLocation: "Sets the location of the progress bar. The \"Auto\" value displays the progress bar above or below the survey header." => "Nastaví umiestnenie indikátora priebehu. Hodnota \"Auto\" zobrazuje indikátor priebehu nad alebo pod hlavičkou prieskumu."
// survey.readOnly: "Make the survey read-only" => "Nastavenie prieskumu iba na čítanie"
// survey.readOnly: "Select if you want to prevent respondents from filling out your survey." => "Vyberte, či chcete respondentom zabrániť vo vypĺňaní prieskumu."
// paneldynamic.showNumber: "Number the panel" => "Očíslujte panel"
// question.showNumber: "Number this question" => "Číslo tejto otázky"
// pe.previewMode: "Preview mode" => "Režim náhľadu"
// pe.gridLayoutEnabled: "Enable the grid layout" => "Povolenie rozloženia mriežky"
// pe.maskSettings: "Mask settings" => "Nastavenia masky"
// pe.detailErrorLocation: "Row expansion error message alignment" => "Zarovnanie chybového hlásenia o rozšírení riadka"
// pehelp.detailErrorLocation: "Sets the location of error messages for questions nested in detail sections. The \"Inherit\" option applies the setting from the \"Error message alignment\" property." => "Nastaví umiestnenie chybových hlásení pre otázky vnorené do podrobných sekcií. Možnosť \"Zdediť\" použije nastavenie z vlastnosti \"Zarovnanie chybového hlásenia\"."
// pe.gridLayoutColumns: "Grid layout columns" => "Stĺpce rozloženia mriežky"
// pe.startPageTitlePlaceholder: "Start Page" => "Úvodná stránka"
// panellayoutcolumn.effectiveWidth: "Effective width, %" => "Efektívna šírka, %"
// panellayoutcolumn.questionTitleWidth: "Question title width, px" => "Šírka názvu otázky, px"
// pe.listIsEmpty@gridLayoutColumns: "You don't have layout columns yet" => "Ešte nemáte stĺpce rozloženia"
// panel.effectiveColSpan: "Specifies how many columns this panel spans within the grid layout." => "Určuje, koľko stĺpcov má tento panel v rozložení mriežky."
// panel.gridLayoutColumns: "This table lets you configure each grid column within the panel. It automatically sets the width percentage for each column based on the maximum number of elements in a row. To customize the grid layout, manually adjust these values and define the title width for all questions in each column." => "Táto tabuľka umožňuje nakonfigurovať každý stĺpec mriežky v paneli. Automaticky nastaví percentuálnu šírku pre každý stĺpec na základe maximálneho počtu prvkov v riadku. Ak chcete prispôsobiť rozloženie mriežky, manuálne upravte tieto hodnoty a definujte šírku názvu pre všetky otázky v každom stĺpci."
// pehelp.gridLayoutEnabled: "Survey Creator allows you to manually adjust the inline widths of form elements to control the layout. If this doesn't produce the desired outcome, you can enable the grid layout, which structures form elements using a column-based system. To configure layout columns, select a page or panel and use the \"Question Settings\" → \"Grid columns\" table. To adjust how many columns a question spans, select it and set the desired value in the \"Layout\" → \"Column span\" field." => "Aplikácia Survey Creator umožňuje manuálne upraviť vnorené šírky prvkov formulára na ovládanie rozloženia. Ak to neprinesie požadovaný výsledok, môžete povoliť rozloženie mriežky, ktoré štruktúry tvoria prvky pomocou systému založeného na stĺpcoch. Ak chcete nakonfigurovať stĺpce rozloženia, vyberte stránku alebo panel a použite tabuľku \"Nastavenia otázky\" → \"Stĺpce mriežky\". Ak chcete upraviť, koľko stĺpcov otázka zahŕňa, vyberte ju a nastavte požadovanú hodnotu v poli \"Rozloženie\" → \"Rozsah stĺpcov\"."
// question.effectiveColSpan: "Specifies how many columns this question spans within the grid layout." => "Určuje, koľko stĺpcov táto otázka zahŕňa v rozložení mriežky."
// page.gridLayoutColumns: "This table lets you configure each grid column on the page. It automatically sets the width percentage for each column based on the maximum number of elements in a row. To customize the grid layout, manually adjust these values and define the title width for all questions in each column." => "Táto tabuľka umožňuje nakonfigurovať každý stĺpec mriežky na strane. Automaticky nastaví percentuálnu šírku pre každý stĺpec na základe maximálneho počtu prvkov v riadku. Ak chcete prispôsobiť rozloženie mriežky, manuálne upravte tieto hodnoty a definujte šírku názvu pre všetky otázky v každom stĺpci."

// ed.expandTooltip: "Expand" => "Rozšíriť"
// ed.collapseTooltip: "Collapse" => "Kolaps"
// pe.itemTitleWidth_placeholder: "Ex.: 100px" => "Príklad: 100px"
// pehelp.itemTitleWidth: "Sets consistent width for all item labels. Accepts CSS values (px, %, in, pt, etc.)." => "Nastaví konzistentnú šírku pre všetky štítky položiek. Akceptuje hodnoty CSS (px, %, in, pt atď.)."
// ed.zoom100Tooltip: "Zoom to 100%" => "Priblíženie na 100 %"
// ed.addLanguageTooltip: "Add Language" => "Pridať jazyk"
// pehelp.commentAreaRows: "Sets the number of displayed lines in text areas for question comments. If the input takes up more lines, the scroll bar appears." => "Nastaví počet zobrazených riadkov v textových oblastiach pre komentáre k otázkam. Ak vstup zaberie viac riadkov, zobrazí sa posúvač."
// pe.defaultDisplayValue: "Default display value for dynamic texts" => "Predvolená zobrazená hodnota pre dynamické texty"
// pehelp.defaultDisplayValue: "A value displayed in HTML questions and in the dynamic titles and descriptions of survey elements when the question value is empty." => "Hodnota zobrazená v otázkach HTML a v dynamických názvoch a popisoch prvkov prieskumu, keď je hodnota otázky prázdna."
// showQuestionNumbers.recursive: "Recursive numbering" => "Rekurzívne číslovanie"
// paneldynamic.templateQuestionTitleWidth: "Question title width" => "Šírka názvu otázky"
// pe.allowCustomChoices: "Allow custom choices" => "Povolenie vlastných volieb"
// paneldynamic.templateQuestionTitleWidth: "Sets consistent width for question titles when they are aligned to the left of their question boxes. Accepts CSS values (px, %, in, pt, etc.)." => "Nastaví konzistentnú šírku názvov otázok, keď sú zarovnané naľavo od polí otázok. Akceptuje hodnoty CSS (px, %, in, pt atď.)."
// page.name: "A page ID that is not visible to respondents." => "Identifikátor stránky, ktorý nie je viditeľný pre respondentov."
// page.description: "Type a page subtitle." => "Zadajte podnadpis strany."
// page.navigationTitle: "A caption displayed on a navigation button in the progress bar or table of contents (TOC). If you leave this field empty, the navigation button will use the page title or page name. To enable the progress bar or TOC, go to \"Survey\" → \"Navigation\"." => "Titulok zobrazený na navigačnom tlačidle na indikátore priebehu alebo obsahu. Ak toto pole necháte prázdne, navigačné tlačidlo použije názov stránky alebo názov stránky. Ak chcete povoliť indikátor priebehu alebo obsah, prejdite na \"Prieskum\" → \"Navigácia\"."
// pehelp.allowCustomChoices: "Select to let respondents add their own choices if the desired option isn't available in the dropdown. Custom choices will only be stored temporarily for the duration of the current browser session." => "Vyberte, ak chcete respondentom umožniť pridať vlastné možnosti, ak požadovaná možnosť nie je k dispozícii v rozbaľovacej ponuke. Vlastné voľby sa budú ukladať iba dočasne počas trvania aktuálnej relácie prehliadača."