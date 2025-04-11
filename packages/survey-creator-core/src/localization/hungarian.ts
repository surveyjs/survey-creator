import { setupLocale } from "survey-creator-core";

export var huStrings = {
  // survey templates
  survey: {
    edit: "Szerkesztés",
    externalHelpLink: "Nézze meg, hogyan kell kérdőíveket készíteni.",
    externalHelpLinkUrl: "https://www.youtube.com/channel/UCH2ru9okIcooNZfpIbyq4qQ?view_as=subscriber",
    dropQuestion: "Kérem dobjon ide egy kérdést a bal oldali menüből.",
    addLogicItem: "Hozzon létre egy szabályt a felmérés folyamatának testreszabásához.",
    copy: "Másolás",
    duplicate: "Ismétlődő",
    addToToolbox: "Hozzáadás az eszköztárhoz",
    deletePanel: "Panel eltávolítása",
    deleteQuestion: "Kérdés eltávolítása",
    convertTo: "Konvertálás",
    drag: "Elem mozgatása",
  },
  // Creator tabs
  tabs: {
    preview: "Próba",
    theme: "Témák",
    translation: "Fordítás",
    designer: "Kérdőívtervező",
    json: "JSON szerkesztő",
    logic: "Logika"
  },
  // Question types
  qt: {
    default: "Alapértelmezett",
    checkbox: "Jelölőnégyzet",
    comment: "Megjegyzés",
    imagepicker: "Képválasztó",
    ranking: "Rangú",
    image: "Kép",
    dropdown: "Legördülő",
    tagbox: "Többszörös kijelölés legördülő menü",
    file: "Állomány",
    html: "HTML",
    matrix: "Mátrix (egyválasztós)",
    matrixdropdown: "Mátrix (többválasztós)",
    matrixdynamic: "Mátrix (dinamikus)",
    multipletext: "Többsoros szöveg",
    panel: "Panel",
    paneldynamic: "Panel (dinamikus)",
    radiogroup: "Választógomb",
    rating: "Értékelés",
    text: "Egysoros szöveg",
    boolean: "Igaz-hamis",
    expression: "Kifejezés (csak olvasható)",
    signaturepad: "Aláírás",
    buttongroup: "Gombcsoport"
  },
  toolboxCategories: {
    general: "Általános",
    choice: "Választási kérdések",
    text: "Szövegbeviteli kérdések",
    containers: "Konténerek",
    matrix: "Mátrix kérdések",
    misc: "Misc"
  },
  // Strings in SurveyJS Creator
  ed: {
    defaultLocale: "Alapértelmezett ({0})",
    survey: "Kérdőív",
    settings: "Kérdőívbeállítások",
    settingsTooltip: "Nyissa meg a beállításokat",
    surveySettings: "Földmérési beállítások",
    surveySettingsTooltip: "Földmérési beállítások",
    themeSettings: "Téma beállítások",
    themeSettingsTooltip: "Téma beállításai",
    creatorSettingTitle: "Alkotói beállítások",
    showPanel: "Panel megjelenítése",
    hidePanel: "Panel elrejtése",
    prevSelected: "Előző kiválasztása",
    nextSelected: "Válassza a következőt",
    prevFocus: "Fókusz előző",
    nextFocus: "Fókusz következő",
    surveyTypeName: "Felmérés",
    pageTypeName: "Oldal",
    panelTypeName: "Panel",
    questionTypeName: "Kérdés",
    columnTypeName: "Oszlop",
    addNewPage: "Új lap felvétele",
    moveRight: "Görgetés jobbra",
    moveLeft: "Görgetés balra",
    deletePage: "Lap eltávolítása",
    editPage: "Lap szerkesztése",
    edit: "Szerkesztés",
    newPageName: "lap",
    newQuestionName: "kérdés",
    newPanelName: "panel",
    newTextItemName: "szöveg",
    defaultV2Theme: "Alapértelmezett",
    modernTheme: "Modern",
    defaultTheme: "Alapértelmezett (örökölt)",
    testSurveyAgain: "Próba ismét",
    testSurveyWidth: "Kérdőív szélessége: ",
    navigateToMsg: "Navigálnia kellett",
    saveSurvey: "Kérdőív mentése",
    saveSurveyTooltip: "Felmérés mentése",
    saveTheme: "Téma mentése",
    saveThemeTooltip: "Téma mentése",
    jsonHideErrors: "Hibák elrejtése",
    jsonShowErrors: "Hibák megjelenítése",
    undo: "Mégse",
    redo: "Ismét",
    undoTooltip: "Utolsó módosítás visszavonása",
    redoTooltip: "Ismételje meg a módosítást",
    expandTooltip: "Kibővít",
    collapseTooltip: "Összeomlás",
    expandAllTooltip: "Összes kibontása",
    collapseAllTooltip: "Az összes összecsukása",
    zoomInTooltip: "Nagyítás",
    zoom100Tooltip: "Nagyítás 100%-ra",
    zoomOutTooltip: "Kicsinyítés",
    lockQuestionsTooltip: "Kibontási/összecsukási állapot zárolása kérdések esetén",
    showMoreChoices: "Bővebben",
    showLessChoices: "Rövidebben",
    copy: "Másolat",
    cut: "Vág",
    paste: "Paszta",
    copyTooltip: "Kijelölés másolása a vágólapra",
    cutTooltip: "Kijelölés kivágása a vágólapra",
    pasteTooltip: "Beillesztés vágólapról",
    options: "Beállítások",
    generateValidJSON: "Érvényes JSON generálása",
    generateReadableJSON: "Olvasható JSON generálása",
    toolbox: "Eszköztár",
    "property-grid": "Kellékek",
    toolboxFilteredTextPlaceholder: "Írja be a kereséshez...",
    toolboxNoResultsFound: "Nincs találat",
    propertyGridFilteredTextPlaceholder: "Írja be a kereséshez...",
    propertyGridNoResultsFound: "Nincs találat",
    propertyGridPlaceholderTitle: "Kezdje el konfigurálni az űrlapot",
    propertyGridPlaceholderDescription: "Kattintson bármelyik kategória ikonjára a felmérési beállítások felfedezéséhez. További beállítások válnak elérhetővé, ha hozzáad egy földmérési elemet a tervezési felülethez.",
    correctJSON: "Kérem javítsa a JSON-t.",
    surveyResults: "Kérdőív eredménye: ",
    surveyResultsTable: "Táblaként",
    surveyResultsJson: "JSON-ként",
    resultsTitle: "Kérdés címe",
    resultsName: "Kérdés megnevezése",
    resultsValue: "Válasz értéke",
    resultsDisplayValue: "Kijelzett értéke",
    modified: "Módosított",
    saving: "Mentés folyamatban",
    saved: "Mentve",
    propertyEditorError: "Hiba",
    saveError: "Hiba! A szerkesztő értéke nem került mentésre.",
    translationPropertyGridTitle: "Nyelvi beállítások",
    themePropertyGridTitle: "Téma beállítások",
    addLanguageTooltip: "Nyelv hozzáadása",
    translationLanguages: "Nyelvek",
    translationDeleteLanguage: "Biztos benne, hogy törölni szeretné az összes karakterláncot ehhez a nyelvhez?",
    translationAddLanguage: "Válasszon egy nyelvet a fordításhoz.",
    translationShowAllStrings: "Összes szöveg mutatása",
    translationShowUsedStringsOnly: "Csak használt karakterláncok",
    translationShowAllPages: "Összes lap mutatása",
    translationNoStrings: "Nincs fordítható szöveg. Kérem változtasson a szűrési feltételeken.",
    translationExportToSCVButton: "Mentés CSV-ként",
    translationImportFromSCVButton: "Betöltés CSV-ből.",
    translateUsigAI: "Összes automatikus fordítása",
    translateUsigAIFrom: "Fordítás: ",
    translationDialogTitle: "Lefordítatlan karakterláncok",
    translationMergeLocaleWithDefault: "{0} összefűzése az alapértelmezett szöveggel.",
    translationPlaceHolder: "Fordítás...",
    translationSource: "Forrás: ",
    translationTarget: "Cél: ",
    translationYouTubeNotSupported: "A YouTube-linkek nem támogatottak.",
    themeExportButton: "Kivitel",
    themeImportButton: "Importál",
    surveyJsonExportButton: "Kivitel",
    surveyJsonImportButton: "Importál",
    surveyJsonCopyButton: "Másolás a vágólapra",
    themeResetButton: "Témabeállítások visszaállítása alapértelmezettre",
    themeResetConfirmation: "Tényleg vissza akarja állítani a témát? Az összes testreszabás elvész.",
    themeResetConfirmationOk: "Igen, állítsa vissza a témát",
    bold: "Félkövér",
    italic: "Dőlt",
    underline: "Aláhúzott",
    addNewQuestion: "Kérdés felvétele",
    selectPage: "Válasszon oldalt...",
    carryForwardChoicesCopied: "A választási lehetőségek másolása innen történik",
    choicesLoadedFromWebText: "A választási lehetőségek egy webszolgáltatásból töltődnek be.",
    choicesLoadedFromWebLinkText: "Válassza a beállítások",
    choicesLoadedFromWebPreviewTitle: "A betöltött választási lehetőségek előnézete",
    htmlPlaceHolder: "A HTML tartalom itt lesz.",
    panelPlaceHolder: "Itt dobjon el egy kérdést az eszköztárból.",
    surveyPlaceHolder: "A felmérés üres. Húzzon egy elemet az eszköztárról, vagy kattintson az alábbi gombra.",
    pagePlaceHolder: "Az oldal üres. Húzzon egy elemet az eszköztárról, vagy kattintson az alábbi gombra.",
    imagePlaceHolder: "Húzzon ide egy képet, vagy kattintson az alábbi gombra, és válassza ki a feltölteni kívánt képet",
    surveyPlaceHolderMobile: "Kattintson az alábbi \"Kérdés hozzáadása\" gombra az űrlap létrehozásának megkezdéséhez.",
    surveyPlaceholderTitle: "Az űrlap üres",
    surveyPlaceholderTitleMobile: "Az űrlap üres",
    surveyPlaceholderDescription: "Húzzon egy elemet az eszköztárról, vagy kattintson az alábbi gombra.",
    surveyPlaceholderDescriptionMobile: "Húzzon egy elemet az eszköztárról, vagy kattintson az alábbi gombra.",
    previewPlaceholderTitle: "Nincs előnézet",
    previewPlaceholderTitleMobile: "Nincs előnézet",
    previewPlaceholderDescription: "A felmérés nem tartalmaz látható elemeket.",
    previewPlaceholderDescriptionMobile: "A felmérés nem tartalmaz látható elemeket.",
    translationsPlaceholderTitle: "Nincsenek lefordítandó karakterláncok",
    translationsPlaceholderTitleMobile: "Nincsenek lefordítandó karakterláncok",
    translationsPlaceholderDescription: "Adjon hozzá elemeket az űrlaphoz, vagy módosítsa a karakterláncszűrő szűrőjét az eszköztáron.",
    translationsPlaceholderDescriptionMobile: "Adjon hozzá elemeket az űrlaphoz, vagy módosítsa a karakterláncszűrő szűrőjét az eszköztáron.",
    pagePlaceHolderMobile: "Kattintson az alábbi \"Kérdés hozzáadása\" gombra, hogy új elemet adjon az oldalhoz.",
    panelPlaceHolderMobile: "Kattintson az alábbi \"Kérdés hozzáadása\" gombra, hogy új elemet adjon a panelhez.",
    imagePlaceHolderMobile: "Kattintson az alábbi gombra, és válassza ki a feltölteni kívánt képet",
    imageChooseImage: "Válassza a Kép lehetőséget",
    addNewTypeQuestion: "{0} hozzáadása", //{0} is localizable question type
    chooseLogoPlaceholder: "[LOGÓ]",
    choices_Item: "Cikk ",
    selectFile: "Válasszon ki egy fájlt",
    removeFile: "A fájl eltávolítása",
    lg: {
      addNewItem: "Új szabály hozzáadása",
      empty_tab: "Hozzon létre egy szabályt a felmérés folyamatának testreszabásához.",
      logicPlaceholderTitle: "Nincsenek logikai szabályok",
      logicPlaceholderTitleMobile: "Nincsenek logikai szabályok",
      logicPlaceholderDescription: "Hozzon létre egy szabályt a felmérés folyamatának testreszabásához.",
      logicPlaceholderDescriptionMobile: "Hozzon létre egy szabályt a felmérés folyamatának testreszabásához.",
      page_visibilityName: "Oldal megjelenítése (elrejtése)",
      page_enableName: "Oldal engedélyezése (letiltása)",
      page_requireName: "Az oldal kötelezővé tétele",
      panel_visibilityName: "Panel megjelenítése (elrejtése)",
      panel_enableName: "Panel engedélyezése (letiltása)",
      panel_requireName: "Az oldal kötelezővé tétele",
      question_visibilityName: "Kérdés megjelenítése (elrejtése)",
      question_enableName: "Kérdés engedélyezése (letiltása)",
      question_requireName: "Kérdés feltevése kötelező",
      question_resetValueName: "Kérdés értékének visszaállítása",
      question_setValueName: "Kérdésérték beállítása",
      column_visibilityName: "Oszlop megjelenítése (elrejtése)",
      column_enableName: "Oszlop engedélyezése (letiltása)",
      column_requireName: "Oszlop kötelezővé tétele",
      column_resetValueName: "Oszlopérték visszaállítása",
      column_setValueName: "Oszlopérték beállítása",
      trigger_completeName: "Teljes felmérés",
      trigger_setvalueName: "Válasz beállítása",
      trigger_copyvalueName: "Válasz másolása",
      trigger_skipName: "Ugrás a kérdésre",
      trigger_runExpressionName: "Kifejezés futtatása",
      completedHtmlOnConditionName: "A \"Felmérés kész\" oldaljelölés beállítása",
      page_visibilityDescription: "Tegye láthatóvá az oldalt, ha a logikai kifejezés igaz értéket ad vissza. Ellenkező esetben tartsa láthatatlanul.",
      panel_visibilityDescription: "Tegye láthatóvá a panelt, ha a logikai kifejezés igaz értéket ad vissza. Ellenkező esetben tartsa láthatatlanul.",
      panel_enableDescription: "Engedélyezze a panelt és a benne lévő összes elemet, ha a logikai kifejezés igaz értéket ad vissza. Ellenkező esetben tartsa őket letiltva.",
      question_visibilityDescription: "Tegye láthatóvá a kérdést, ha a logikai kifejezés igaz értéket ad vissza. Ellenkező esetben tartsa láthatatlanul.",
      question_enableDescription: "Engedélyezze a kérdést, ha a logikai kifejezés igaz értéket ad vissza. Ellenkező esetben tartsa letiltva.",
      question_requireDescription: "A kérdés akkor válik kötelezővé, ha a logikai kifejezés igaz értéket ad vissza.",
      trigger_completeDescription: "Amikor a logikai kifejezés igaz értéket ad vissza, a felmérés befejeződik, és a végfelhasználó a \"Köszönöm oldalt\" látja.",
      trigger_setvalueDescription: "Ha a logikai kifejezésben használt kérdésértékek megváltoznak, és a logikai kifejezés igaz értéket ad vissza, akkor az érték a kiválasztott kérdésre lesz beállítva.",
      trigger_copyvalueDescription: "Ha a logikai kifejezésben használt kérdésértékek megváltoznak, és a logikai kifejezés igaz értéket ad vissza, akkor az egyik kiválasztott kérdés értéke átmásolódik egy másik kijelölt kérdésbe.",
      trigger_skipDescription: "Ha a logikai kifejezés igaz értéket ad vissza, akkor a felmérés a kiválasztott kérdésre ugrik/fókuszál.",
      trigger_runExpressionDescription: "Ha a logikai kifejezés igaz értéket ad vissza, a rendszer végrehajtja az egyéni kifejezést. Ezt a kifejezéseredményt opcionálisan beállíthatja a kiválasztott kérdésbe",
      completedHtmlOnConditionDescription: "Ha a logikai kifejezés igaz értéket ad vissza, akkor a \"Köszönöm oldal\" alapértelmezett szövege a megadott szövegre változik.",
      itemExpressionText: "Amikor a kifejezés: \"{0}\" igaz értéket ad vissza", //{0} - the expression
      itemEmptyExpressionText: "Új szabály",
      page_visibilityText: "Az oldal {0} láthatóvá tétele", //{0} page name
      panel_visibilityText: "A panel {0} láthatóvá tétele", //{0} panel name
      panel_enableText: "A panel {0} engedélyezése", //{0} panel name
      question_visibilityText: "tegye láthatóvá a {0} kérdést", //{0} question name
      question_enableText: "Kérdés {0} engedélyezése", //{0} question name
      question_requireText: "Tegye fel a kérdést {0} szükséges", //{0} question name
      question_resetValueText: "Kérdés visszaállítási értéke: {0}", //{0} question name.
      question_setValueText: "Érték hozzárendelése: {1} a kérdéshez: {0}",
      column_visibilityText: "A {1}. kérdés {0} oszlopának láthatóvá tétele", //{0} column name, {1} question name
      column_enableText: "A kérdés {0} oszlopának engedélyezése {1} engedélyezése", //{0} column name, {1} question name
      column_requireText: "Tegye kötelezővé a kérdés {0} oszlopát {1}", //{0} column name, {1} question name
      column_resetValueText: "Az oszlop cellaértékének visszaállítása: {0}", //{0} column name
      column_setValueText: "Cellaérték hozzárendelése: {1} oszlophoz: {0}", //{0} column name and {1} setValueExpression
      setValueExpressionPlaceholder: " Olyan kifejezés, amelynek eredménye a célkérdéshez lesz rendelve.",
      trigger_completeText: "A felmérés befejeződött",
      trigger_setvalueText: "Kérdéses érték: {0} érték {1}", //{0} question name, {1} setValue
      trigger_setvalueEmptyText: "Egyértelmű kérdésérték: {0}", //{0} question name
      trigger_copyvalueText: "Másolás kérdésbe: {0} kérdés értéke {1}", //{0} and {1} question names
      trigger_skipText: "felmérés ugrás a kérdésre {0}", //{0} question name
      trigger_runExpressionText1: "Run kifejezés: '{0}'", //{0} the expression
      trigger_runExpressionText2: " és megkérdőjelezi annak eredményét: {0}", //{0} question name
      completedHtmlOnConditionText: "egyéni szöveg megjelenítése a \"Köszönöm oldalhoz\".",
      showAllQuestions: "Minden kérdés",
      showAllActionTypes: "Minden művelettípus",
      conditions: "Állapot(ok)",
      actions: "Művelet(ek)",
      expressionEditorTitle: "Feltétel(ek) meghatározása",
      actionsEditorTitle: "Művelet(ek) meghatározása",
      deleteAction: "Művelet törlése",
      addNewAction: "Művelet hozzáadása",
      selectedActionCaption: "Válassza ki a műveletet...",
      expressionInvalid: "A logikai kifejezés üres vagy érvénytelen. Kérjük, javítsa ki.",
      noActionError: "Kérjük, adjon hozzá legalább egy műveletet.",
      actionInvalid: "Kérjük, javítsa ki a problémákat a művelet(ek)ben.",
      uncompletedRule_title: "A logikai szabályok hiányosak",
      uncompletedRule_text: "Nem teljesített néhány logikai szabályt. Ha most elhagyja a lapot, a módosítások elvesznek. Továbbra is el akarja hagyni a lapot a módosítások végrehajtása nélkül?",
      uncompletedRule_apply: "Igen",
      uncompletedRule_cancel: "Nem, szeretném kiegészíteni a szabályokat"
    }
  },
  // Property Editors
  pe: {
    panel: {
      name: "Panel neve",
      title: "Panel címe",
      description: "Panel leírása",
      visibleIf: "A panel láthatóvá tétele, ha",
      requiredIf: "Tegye szükségessé a panelt, ha",
      questionOrder: "Kérdések sorrendje a panelen belül",
      page: "Szülőoldal",
      startWithNewLine: "A panel megjelenítése új sorban",
      state: "Panel összecsukási állapota",
      width: "Szövegközi panel szélessége",
      minWidth: "Minimális panelszélesség",
      maxWidth: "Maximális panelszélesség",
      showNumber: "A panel számozása"
    },
    panellayoutcolumn: {
      effectiveWidth: "Effektív szélesség, %",
      questionTitleWidth: "Kérdés címének szélessége, px"
    },
    paneldynamic: {
      name: "Panel neve",
      title: "Panel címe",
      description: "Panel leírása",
      visibleIf: "A panel láthatóvá tétele, ha",
      requiredIf: "Tegye szükségessé a panelt, ha",
      page: "A panel áthelyezése oldalra",
      startWithNewLine: "A panel megjelenítése új sorban",
      state: "Panel összecsukási állapota",
      width: "Szövegközi panel szélessége",
      minWidth: "Minimális panelszélesség",
      maxWidth: "Maximális panelszélesség",
      confirmDelete: "Panel törlésének megerősítése",
      templateDescription: "Panel leírási minta",
      templateTitle: "Panel címmintája",
      noEntriesText: "Üres panelszöveg",
      templateTabTitle: "Lapcím mintája",
      tabTitlePlaceholder: "Lapcím helyőrzője",
      templateVisibleIf: "Egy adott panel láthatóvá tétele, ha",
      showNumber: "A panel számozása",
      titleLocation: "Panelcím igazítása",
      descriptionLocation: "Panel leírás igazítása",
      templateQuestionTitleLocation: "Kérdés címének igazítása",
      templateQuestionTitleWidth: "Kérdés címének szélessége",
      templateErrorLocation: "Hibaüzenetek igazítása",
      newPanelPosition: "Új panel helye",
      showRangeInProgress: "A folyamatjelző sáv megjelenítése",
      keyName: "Az ismétlődő válaszok elkerülése a következő kérdésben"
    },
    question: {
      name: "Kérdés neve",
      title: "Kérdés címe",
      description: "Kérdés leírása",
      visibleIf: "Tegye láthatóvá a kérdést, ha",
      requiredIf: "Tegye kötelezővé a kérdést, ha",
      page: "Szülőoldal",
      state: "Kérdésmező összecsukási állapota",
      showNumber: "Számozza meg ezt a kérdést",
      titleLocation: "Kérdés címének igazítása",
      descriptionLocation: "Kérdés leírás igazítása",
      errorLocation: "Hibaüzenetek igazítása",
      indent: "A belső behúzás növelése",
      width: "Szövegközi kérdés szélessége",
      minWidth: "Minimális kérdésszélesség",
      maxWidth: "Maximális kérdésszélesség",
      textUpdateMode: "Beviteli mező értékének frissítése"
    },
    signaturepad: {
      signatureWidth: "Aláírási terület szélessége",
      signatureHeight: "Aláírási terület magassága",
      signatureAutoScaleEnabled: "Az aláírási terület automatikus méretezése",
      showPlaceholder: "A helyőrző megjelenítése",
      placeholder: "Helyőrző szöveg",
      placeholderReadOnly: "Helyőrző szöveg írásvédett vagy előnézeti módban",
      allowClear: "A Törlés gomb megjelenítése az aláírási területen belül",
      penMinWidth: "Tollszélesség minimális",
      penMaxWidth: "Maximális tollszélesség",
      penColor: "Körvonal színe"
    },
    comment: {
      rows: "Beviteli mező magassága (sorokban)"
    },
    showQuestionNumbers: "Kérdés számának mutatása",
    questionStartIndex: "Kérdés kezdőindexe (1, 2 vagy 'A', 'a')",
    expression: {
      name: "Kifejezés neve",
      title: "Kifejezés címe",
      description: "Kifejezés leírása",
      expression: "Kifejezés"
    },
    trigger: {
      expression: "Kifejezés"
    },
    calculatedvalue: {
      expression: "Kifejezés"
    },
    // survey templates
    survey: {
      title: "Cím",
      description: "A felmérés leírása",
      readOnly: "A felmérés írásvédetté tétele"
    },
    page: {
      name: "Oldal neve",
      title: "Cím",
      description: "Oldal leírása",
      visibleIf: "Tegye láthatóvá az oldalt, ha",
      requiredIf: "Az oldal kötelezővé tétele, ha",
      timeLimit: "Az oldal befejezésének határideje (másodpercben)",
      questionOrder: "Kérdések sorrendje az oldalon"
    },
    matrixdropdowncolumn: {
      name: "Oszlop neve",
      title: "Oszlop címe",
      isUnique: "Az ismétlődő válaszok megakadályozása",
      width: "Oszlopszélesség",
      minWidth: "Minimális oszlopszélesség",
      rows: "Beviteli mező magassága (sorokban)",
      visibleIf: "Tegye láthatóvá az oszlopot, ha",
      requiredIf: "Tegye kötelezővé az oszlopot, ha",
      showInMultipleColumns: "Minden beállítás külön oszlopban"
    },
    multipletextitem: {
      name: "Név",
      title: "Cím"
    },
    masksettings: {
      saveMaskedValue: "Maszkolt érték mentése a felmérés eredményeiben"
    },
    patternmask: {
      pattern: "Értékminta"
    },
    datetimemask: {
      min: "Minimális érték",
      max: "Maximális érték"
    },
    numericmask: {
      allowNegativeValues: "Negatív értékek engedélyezése",
      thousandsSeparator: "Több ezer szeparátor",
      decimalSeparator: "Tizedeselválasztó",
      precision: "Érték pontossága",
      min: "Minimális érték",
      max: "Maximális érték"
    },
    currencymask: {
      prefix: "Pénznem előtag",
      suffix: "Pénznem utótagja"
    },
    imageHeight: "Kép magassága",
    imageWidth: "Kép szélessége",
    valueName: "Érték megnevezése",
    defaultDisplayValue: "Dinamikus szövegek alapértelmezett megjelenítési értéke",
    rateDescriptionLocation: "Feliratigazítás",
    size: "Beviteli mező szélessége (karakterben)",
    cellErrorLocation: "Cellahibaüzenet igazítása",
    enabled: "Engedélyezve",
    disabled: "Fogyatékos",
    inherit: "Örököl",
    apply: "Alkalmaz",
    ok: "OK",
    save: "Megment",
    clear: "Világos",
    saveTooltip: "Megment",
    cancel: "Mégsem",
    set: "Beállít",
    reset: "Visszaállítás",
    change: "Változás",
    refresh: "Felfrissít",
    close: "Bezárás",
    delete: "Eltávolítás",
    add: "Hozzáad",
    addNew: "Új felvétele",
    addItem: "Kattintson egy elem felvételéhez...",
    removeItem: "Kattintson az elem eltávolításához...",
    dragItem: "Húzza az elemet",
    addOther: "Egyéb",
    addSelectAll: "Összes kijelölése",
    addNone: "Semmi",
    removeAll: "Összes eltávolítása",
    edit: "Szerkesztés",
    back: "Visszaküldés mentés nélkül",
    backTooltip: "Visszaküldés mentés nélkül",
    saveAndBack: "Mentés és visszaküldés",
    saveAndBackTooltip: "Mentés és visszaküldés",
    doneEditing: "Kész",
    editChoices: "Lehetőségek szerkesztése",
    showChoices: "Választási lehetőségek megjelenítése",
    move: "Mozgatás",
    empty: "<üres>",
    emptyValue: "Az érték üres",
    fastEntry: "Gyors felvétel",
    fastEntryNonUniqueError: "A \"{0}\" érték nem egyedi",
    fastEntryChoicesCountError: "Kérjük, korlátozza a tételek számát {0} és {1} között",
    fastEntryChoicesMinCountError: "Kérjük, adjon meg legalább {0} elemet",
    fastEntryPlaceholder: "Az adatokat a következő formátumban állíthatja be:\nérték1|szöveg\nérték2",
    formEntry: "Felvétel űrlappal",
    testService: "Szolgáltatás tesztelése",
    itemSelectorEmpty: "Kérjük, válassza ki az elemet",
    conditionActionEmpty: "Kérjük, válassza ki a műveletet",
    conditionSelectQuestion: "Válasszon kérdést...",
    conditionSelectPage: "Válasszon oldalt...",
    conditionSelectPanel: "Panel kiválasztása...",
    conditionValueQuestionTitle: "Kérem adjon meg, vagy válasszon értéket",
    aceEditorHelp: "Nyomja meg a ctrl+space billentyűkombinációt a kifejezés befejezésére vonatkozó segítségért.",
    aceEditorRowTitle: "Jelenlegi sor",
    aceEditorPanelTitle: "Jelenlegi panel",
    showMore: "További információért kérem tekintse meg a dokumentációt",
    assistantTitle: "Elérhető kérdések:",
    cellsEmptyRowsColumns: "Legalább egy sornak vagy egy oszlopnak lennie kell",
    showPreviewBeforeComplete: "A válaszok előnézete a felmérés elküldése előtt",
    overridingPropertyPrefix: "Állítsa be ",
    resetToDefaultCaption: "Átszed",
    propertyIsEmpty: "Kérem adjon meg egy értéket",
    propertyIsNoUnique: "Kérjük, adjon meg egy egyedi értéket",
    propertyNameIsNotUnique: "Kérjük, adjon meg egy egyedi nevet",
    propertyNameIsIncorrect: "Ne használjon fenntartott szavakat: \"elem\", \"választás\", \"panel\", \"sor\".",
    listIsEmpty: "Még nincsenek hozzáadott elemek",
    "listIsEmpty@choices": "Még nincsenek választási lehetőségek hozzáadva",
    "listIsEmpty@columns": "Még nincsenek oszlopai",
    "listIsEmpty@gridLayoutColumns": "Még nincsenek elrendezésoszlopok",
    "listIsEmpty@rows": "Még nincsenek sorai",
    "listIsEmpty@validators": "Még nincsenek érvényességi szabályai",
    "listIsEmpty@calculatedValues": "Még nincsenek egyéni változói",
    "listIsEmpty@triggers": "Még nincsenek triggerek",
    "listIsEmpty@navigateToUrlOnCondition": "Még nincsenek linkek",
    "listIsEmpty@pages": "Még nincsenek oldalai",
    "addNew@choices": "Választási lehetőség hozzáadása",
    "addNew@columns": "Új oszlop hozzáadása",
    "addNew@rows": "Új sor hozzáadása",
    "addNew@validators": "Új szabály hozzáadása",
    "addNew@calculatedValues": "Új változó hozzáadása",
    "addNew@triggers": "Új eseményindító hozzáadása",
    "addNew@navigateToUrlOnCondition": "Új URL hozzáadása",
    "addNew@pages": "Új oldal hozzáadása",
    expressionIsEmpty: "A kifejezés üres",
    value: "Érték",
    text: "Szöveg",
    rowid: "Sor ID",
    imageLink: "Kép URL",
    columnEdit: "Oszlop szerkesztése: {0}",
    itemEdit: "Elem szerkesztése: {0}",
    url: "URL",
    path: "Útvonal",
    choicesbyurl: {
      url: "Webszolgáltatás URL-címe",
      valueName: "Értékek beolvasása a következő JSON-mezőből"
    },
    titleName: "Cím megnevezése",
    imageLinkName: "Képek URL-címének beolvasása a következő JSON-mezőből",
    allowEmptyResponse: "Üres válasz engedélyezése",
    titlePlaceholder: "Cím",
    surveyTitlePlaceholder: "Felmérés címe",
    pageTitlePlaceholder: "Oldal {num}",
    startPageTitlePlaceholder: "Kezdőlap",
    descriptionPlaceholder: "Leírás: __________",
    surveyDescriptionPlaceholder: "Leírás: __________",
    pageDescriptionPlaceholder: "Leírás: __________",
    textWrapEnabled: "Tördelési lehetőségek",
    showOtherItem: "Rendelkezik egyéb értékkel",
    otherText: "Az egyéb érték szövege",
    showNoneItem: "A Nincs lehetőség engedélyezése",
    showRefuseItem: "A Válasz megtagadása lehetőség engedélyezése",
    showDontKnowItem: "A Nem tudom lehetőség engedélyezése",
    noneText: "Nincs opció szövege",
    showSelectAllItem: "Az összes kijelölése lehetőség engedélyezése",
    selectAllText: "Az Összes kijelölése opció szövege",
    choicesMin: "Az automatikusan létrehozott elemek minimális értéke",
    choicesMax: "Az automatikusan létrehozott elemek maximális értéke",
    choicesStep: "Az automatikusan létrehozott elemek lépése",
    name: "Megnevezés",
    title: "Cím",
    cellType: "Cellatípus",
    colCount: "Oszlopok száma",
    choicesOrder: "Válassza ki a lehetőséget rendezését",
    allowCustomChoices: "Egyéni választások engedélyezése",
    visible: "Látható?",
    isRequired: "Kötelező?",
    markRequired: "Megjelölés kötelezőként",
    removeRequiredMark: "Távolítsa el a szükséges jelet",
    eachRowRequired: "Válasz kérése minden sorhoz",
    eachRowUnique: "A sorokban ismétlődő válaszok megakadályozása",
    requiredErrorText: "\"Kötelező\" hibaüzenet",
    startWithNewLine: "Új sorban kezdődik?",
    rows: "Sorok száma",
    cols: "Oszlopok",
    placeholder: "Mező kitöltőszövege",
    showPreview: "A kép előnézete látható?",
    storeDataAsText: "Az állomány tartalmát tárolja a JSON-ben, szövegként",
    maxSize: "Maximális állományméret byte-ban",
    rowCount: "Sorok száma",
    columnLayout: "Oszlopok elrendezése",
    addRowButtonLocation: "'Új sor felvétele' gomb elhelyezése",
    transposeData: "Sorok átültetése oszlopokba",
    addRowText: "'Új sor felvétele' gomb szövege",
    removeRowText: "'Sor eltávolítása' gomb szövege",
    rateMin: "Legkisebb szorzó",
    rateMax: "Legnagyobb szorzó",
    rateStep: "Szorzó lépésköze",
    minRateDescription: "Legkisebb szorzó leírása",
    maxRateDescription: "Legnagyobb szorzó leírása",
    inputType: "Mező típusa",
    optionsCaption: "Beállítások felirata",
    defaultValue: "Alapértelmezett érték",
    cellsDefaultRow: "Cellák alapértelmezett szövege",
    surveyEditorTitle: "Kérdőív beállításainak módosítása",
    qEditorTitle: "Szerkesztés: {0}",
    maxLength: "Maximális hossz",
    buildExpression: "Épít",
    editExpression: "Szerkeszt",
    and: "és",
    or: "vagy",
    remove: "Eltávolít",
    addCondition: "Feltétel hozzáadása",
    emptyLogicPopupMessage: "Válasszon ki egy kérdést a feltételek konfigurálásának megkezdéséhez.",
    if: "Ha",
    then: "akkor",
    setToName: "Célkérdés",
    fromName: "Másolandó kérdés innen: válasz",
    gotoName: "Kérdés, amelyre ugrani kell",
    ruleIsNotSet: "A szabály helytelen",
    includeIntoResult: "Felvétel a felmérés eredményeibe",
    showTitle: "Cím mutatása/elrejtése",
    expandCollapseTitle: "Cím kibontása/összecsukása",
    locale: "Alapértelmezett nyelv",
    simulator: "Válassza ki az eszköz típusát",
    landscapeOrientation: "Váltás fekvő tájolásra",
    portraitOrientation: "Váltás álló tájolásra",
    clearInvisibleValues: "Nemlátható értékek törlése",
    cookieName: "Süti megnevezése (a kérdőív csak egyszer kitölthető)",
    partialSendEnabled: "Kérdőív értékének küldése a következő lapra lépéskor",
    storeOthersAsComment: "Az 'egyéb' mező értékének tárolása külön mezőben",
    showPageTitles: "Lapok címének mutatása",
    showPageNumbers: "Lapok számának mutatása",
    pagePrevText: "'Előző lap' gomb felirata",
    pageNextText: "'Következő lap' gomb felirata",
    completeText: "'Befejezés' gomb felirata",
    previewText: "A Válaszok előnézete gomb szövege",
    editText: "A Válasz gomb szövegének szerkesztése",
    startSurveyText: "'Kezdés' gomb felirata",
    showNavigationButtons: "Navigációs gombok mutatása (alapértelmezett navigáció)",
    navigationButtonsLocation: "Navigációs gombok igazítása",
    showPrevButton: "'Előző lap' gomb mutatása",
    firstPageIsStartPage: "Az megkezdett lap a kérdőív első oldala.",
    showCompletePage: "Befejező szöveg mutatása a kérdőív befejezésekor",
    autoAdvanceEnabled: "Minden kérdés megválaszolásakor automatikusan a következő lapra lépés",
    autoAdvanceAllowComplete: "A felmérés automatikus kitöltése",
    showProgressBar: "Előrehaladás-mutató megjelenítése",
    progressBarLocation: "Folyamatjelző sáv igazítása",
    questionTitleLocation: "Kérdés címének helye",
    questionTitleWidth: "Kérdés címének szélessége",
    requiredMark: "Kötelező szimbólum",
    questionTitleTemplate: "Kérdés címének sablonja: '{szám}. {kötelező} {cím}'",
    questionErrorLocation: "Kérdés hibaüzenetének helyzete",
    autoFocusFirstQuestion: "Első kérdés automatikus kijelölése lapváltás esetén",
    questionOrder: "Elemek rendezése a lapon",
    timeLimit: "A kérdőív kitöltésére fordítható maximális idő",
    timeLimitPerPage: "Egy lap kitöltésére fordítható maximális idő",
    showTimer: "Időzítő használata",
    timerLocation: "Időzító mutatása",
    timerInfoMode: "Időzító módja",
    renderMode: "Megjelenítés módja",
    allowAddPanel: "Új panel hozzáadásának engedélyezése",
    allowRemovePanel: "Panel eltávolításának engedélyezése",
    addPanelText: "'Új panel felvétele' gomb szövege",
    removePanelText: "'Panel eltávolítása' gomb szövege",
    isSinglePage: "Minden elem mutatása egy lapon",
    html: "HTML",
    setValue: "Válasz",
    dataFormat: "Képformátum",
    allowAddRows: "Sorok hozzáadásának engedélyezése",
    allowRemoveRows: "Sorok eltávolításának engedélyezése",
    allowRowReorder: "Sorhúzás engedélyezése",
    responsiveImageSizeHelp: "Nem érvényes, ha megadja a kép pontos szélességét vagy magasságát.",
    minImageWidth: "Minimális képszélesség",
    maxImageWidth: "Maximális képszélesség",
    minImageHeight: "Minimális képmagasság",
    maxImageHeight: "Maximális képmagasság",
    minValue: "Minimális érték",
    maxValue: "Maximális érték",
    caseInsensitive: "Kis- és nagybetűk megkülönböztetése",
    minLength: "Minimális hossz",
    allowDigits: "Számjegyek engedélyezése",
    minCount: "Minimális darabszám",
    maxCount: "Maximális darabszám",
    regex: "Reguláris kifejezés",
    surveyvalidator: {
      text: "Hibaüzenet",
      expression: "Érvényesítési kifejezés"
    },
    totalText: "Sorszöveg összesen",
    totalType: "Teljes típus",
    totalExpression: "Teljes kifejezés",
    totalDisplayStyle: "Teljes érték megjelenítési stílusa",
    totalCurrency: "Valuta",
    totalFormat: "Formázott karakterlánc",
    logo: "Embléma (URL vagy base64 kódolású karakterlánc)",
    questionsOnPageMode: "Felmérési struktúra",
    maxTextLength: "Válasz maximális hossza (karakterben)",
    maxCommentLength: "Megjegyzés maximális hossza (karakterben)",
    commentAreaRows: "Megjegyzés területének magassága (sorokban)",
    autoGrowComment: "Szükség esetén automatikusan bontsa ki a megjegyzésterületet",
    allowResizeComment: "A szövegterületek átméretezésének engedélyezése a felhasználók számára",
    textUpdateMode: "Szöveges kérdés értékének frissítése",
    maskType: "Beviteli maszk típusa",
    autoFocusFirstError: "Fókusz beállítása az első érvénytelen válaszra",
    checkErrorsMode: "Érvényesítés futtatása",
    validateVisitedEmptyFields: "Üres mezők ellenőrzése elveszett fókusz esetén",
    navigateToUrl: "Navigálás az URL-hez",
    navigateToUrlOnCondition: "Dinamikus URL",
    completedBeforeHtml: "Jelölés annak jelzésére, hogy a felhasználó kitöltötte-e már ezt a felmérést",
    completedHtml: "Felmérés teljes oldaljelölése",
    completedHtmlOnCondition: "Dinamikus felmérés teljes oldaljelölése",
    loadingHtml: "A földmérési modell betöltése közben megjelenítendő jelölés",
    commentText: "Megjegyzés terület szövege",
    autocomplete: "Automatikus kiegészítés típusa",
    labelTrue: "\"Igaz\" címke",
    labelFalse: "\"Hamis\" címke",
    allowClear: "A Törlés gomb megjelenítése",
    searchMode: "Keresési mód",
    displayStyle: "Értékmegjelenítési stílus",
    format: "Formázott karakterlánc",
    maximumFractionDigits: "Tört számjegyek maximális száma",
    minimumFractionDigits: "Minimális tört számjegyek",
    useGrouping: "Csoportosítási elválasztók megjelenítése",
    allowMultiple: "Több fájl engedélyezése",
    allowImagesPreview: "Képek előnézete",
    acceptedTypes: "Elfogadott fájltípusok",
    waitForUpload: "Várja meg, amíg a feltöltés befejeződik",
    needConfirmRemoveFile: "Fájltörlés megerősítése",
    detailPanelMode: "A részletek panel helye",
    minRowCount: "Sorszám minimális száma",
    maxRowCount: "Sorszám maximális száma",
    confirmDelete: "Sor törlésének megerősítése",
    confirmDeleteText: "Megerősítő üzenet",
    panelCount: "Kezdeti panelszám",
    minPanelCount: "Panelek minimális száma",
    maxPanelCount: "Panelek maximális száma",
    panelsState: "Belső panel kibontási állapota",
    prevPanelText: "Előző Panel gomb eszköztipp",
    nextPanelText: "Következő Panel gomb elemleírása",
    removePanelButtonLocation: "A Panel gomb helyének eltávolítása",
    hideIfRowsEmpty: "A kérdés elrejtése, ha nincsenek sorok",
    hideColumnsIfEmpty: "Oszlopok elrejtése, ha nincsenek sorok",
    rateValues: "Egyéni díjértékek",
    rateCount: "Árak száma",
    autoGenerate: "Hogyan lehet megadni a díjértékeket?",
    hideIfChoicesEmpty: "A kérdés elrejtése, ha nem tartalmaz választási lehetőségeket",
    minWidth: "Minimális szélesség (CSS által elfogadott értékekben)",
    maxWidth: "Maximális szélesség (CSS által elfogadott értékekben)",
    width: "Szélesség (CSS által elfogadott értékekben)",
    showHeader: "Oszlopfejlécek megjelenítése",
    horizontalScroll: "Vízszintes görgetősáv megjelenítése",
    columnMinWidth: "Minimális oszlopszélesség (CSS által elfogadott értékekben)",
    rowTitleWidth: "Sorfejléc szélessége (CSS által elfogadott értékekben)",
    valueTrue: "\"Igaz\" érték",
    valueFalse: "\"Hamis\" érték",
    minErrorText: "\"Az érték a minimális érték alatt van\" hibaüzenet",
    maxErrorText: "\"Az érték meghaladja a maximumot\" hibaüzenet",
    otherErrorText: "\"Üres megjegyzés\" hibaüzenet",
    keyDuplicationError: "\"Nem egyedi kulcsérték\" hibaüzenet",
    minSelectedChoices: "Minimálisan kiválasztott választási lehetőségek",
    maxSelectedChoices: "Maximális kijelölt választási lehetőségek",
    logoWidth: "Embléma szélessége (CSS által elfogadott értékekben)",
    logoHeight: "Logó magassága (CSS által elfogadott értékekben)",
    readOnly: "Csak olvasható",
    enableIf: "Szerkeszthető, ha",
    noRowsText: "\"Nincsenek sorok\" üzenet",
    separateSpecialChoices: "Külön speciális választási lehetőségek (Nincs, Egyéb, Összes kijelölése)",
    choicesFromQuestion: "Másolja ki a következő kérdés választási lehetőségeit",
    choicesFromQuestionMode: "Milyen lehetőségeket másoljon?",
    choiceValuesFromQuestion: "Használja a következő mátrixoszlop vagy panelkérdés értékeit választási lehetőség-azonosítóként:",
    choiceTextsFromQuestion: "Használja a következő mátrixoszlop vagy panelkérdés értékeit választási szövegként:",
    progressBarShowPageTitles: "Oldalcímek megjelenítése a folyamatjelző sávon",
    progressBarShowPageNumbers: "Oldalszámok megjelenítése a folyamatjelző sávon",
    showCommentArea: "A megjegyzésterület megjelenítése",
    commentPlaceholder: "Megjegyzés terület helyőrzője",
    displayRateDescriptionsAsExtremeItems: "Sebességleírások megjelenítése extrém értékként",
    rowOrder: "Sorsorrend",
    columnsLayout: "Oszlopelrendezés",
    columnColCount: "Beágyazott oszlopok száma",
    correctAnswer: "Helyes válasz",
    defaultPanelValue: "Alapértelmezett értékek",
    cells: "Cella szövegek",
    fileInputPlaceholder: "Válasszon ki egy fájlt, vagy illesszen be egy fájlhivatkozást...",
    keyName: "Fő oszlop",
    itemvalue: {
      visibleIf: "Tegye láthatóvá a beállítást, ha",
      enableIf: "Tegye kiválaszthatóvá a beállítást, ha"
    },
    "itemvalue@rows": {
      visibleIf: "Tegye láthatóvá a sort, ha",
      enableIf: "Tegye szerkeszthetővé a sort, ha:"
    },
    imageitemvalue: {
      text: "Helyettesítő szöveg"
    },
    logoPosition: "Logó pozíciója",
    addLogo: "Logó hozzáadása...",
    changeLogo: "Logó módosítása...",
    logoPositions: {
      none: "Embléma eltávolítása",
      left: "Balra",
      right: "Jobbra",
      top: "A tetején",
      bottom: "Alul"
    },
    previewMode: "Előnézeti mód",
    gridLayoutEnabled: "A rácselrendezés engedélyezése",
    gridLayoutColumns: "Rácsos elrendezés oszlopai",
    maskSettings: "Maszk beállításai",
    detailErrorLocation: "Sorbővítési hibaüzenet igazítása",
    // Creator tabs
    tabs: {
      panel: {
        layout: "Panel elrendezése"
      },
      general: "Általános",
      fileOptions: "Beállítások",
      html: "HTML szerkesztő",
      columns: "Oszlopok",
      rows: "Sorok",
      choices: "Lehetőségek",
      items: "Elemek",
      visibleIf: "Látható ha",
      enableIf: "Engedélyezve ha",
      requiredIf: "Kötelező ha",
      rateValues: "Szorzó értékek",
      choicesByUrl: "Lehetőségek a webről",
      matrixChoices: "Alapértelmezett lehetőségek",
      multipleTextItems: "Szövegmezők",
      numbering: "Számozás",
      validators: "Validátorok",
      navigation: "Navigáció",
      question: "Kérdés",
      pages: "Oldalak",
      timer: "Időzítő/Kvíz",
      calculatedValues: "Számított értékek",
      triggers: "Eseményvezérlők",
      templateTitle: "Sablon címe",
      totals: "Összegek",
      logic: "Logika",
      mask: "Beviteli maszk beállításai",
      layout: {
        panel: "Elrendezés",
        question: "Elrendezés",
        base: "Elrendezés"
      },
      data: "Adat",
      validation: "Érvényesítés",
      cells: "Cella szövegek",
      showOnCompleted: "Felmérés kész",
      logo: "Embléma a felmérés címében",
      slider: "Csúszka",
      expression: "Kifejezés",
      questionSettings: "Kérdés beállítások",
      header: "Fejléc",
      background: "Háttér",
      appearance: "Megjelenés",
      accentColors: "Kiemelő színek",
      surfaceBackground: "Felület háttér",
      scaling: "Rétegképződés",
      others: "Mások"
    },
    editProperty: "Tulajdonság szerkesztése '{0}'",
    items: "[ Elemek: {0} ]",
    choicesVisibleIf: "A választási lehetőségek akkor láthatók, ha",
    choicesEnableIf: "A választási lehetőségek akkor választhatók ki, ha",
    columnsEnableIf: "Az oszlopok akkor láthatók, ha",
    rowsEnableIf: "A sorok akkor láthatók, ha",
    innerIndent: "Belső behúzások hozzáadása",
    copyDefaultValueFromLastEntry: "Az utolsó bejegyzés válaszainak használata alapértelmezettként",
    enterNewValue: "Kérem, adja meg az értéket.",
    noquestions: "Nincsenek kérdések a kérdőívben.",
    createtrigger: "Kérem hozzon létre egy eseményvezérlőt",
    titleKeyboardAdornerTip: "Nyomja meg az Enter gombot a szerkesztéshez",
    keyboardAdornerTip: "Nyomja meg az Enter gombot az elem szerkesztéséhez, nyomja meg a törlés gombot az elem törléséhez, nyomja meg az alt plusz felfelé vagy lefelé mutató nyilat az elem áthelyezéséhez",
    triggerOn: "Be ",
    triggerMakePagesVisible: "Lapok láthatóvá tétele:",
    triggerMakeQuestionsVisible: "Elemek láthatóvá tétele:",
    triggerCompleteText: "Kérdőív befejezése, ha sikeres.",
    triggerNotSet: "Nincs eseménykezelő beállítva",
    triggerRunIf: "Futtatás ha",
    triggerSetToName: "A következő értékének cseréje: ",
    triggerFromName: "A következő értékének másolása: ",
    triggerRunExpression: "A következő kifejezés futtatása:",
    triggerSetValue: "erre: ",
    triggerGotoName: "Tovább a kérdéshez",
    triggerIsVariable: "Ne mentse az eredményt a kérdőív eredményébe.",
    triggerRunExpressionEmpty: "Kérjük, adjon meg egy érvényes kifejezést",
    emptyExpressionPlaceHolder: "Írja be ide a kifejezést...",
    noFile: "Nincs kiválasztott fájl",
    clearIfInvisible: "Az érték törlése, ha a kérdés rejtetté válik",
    valuePropertyName: "Értéktulajdonság neve",
    searchEnabled: "Keresés engedélyezése",
    hideSelectedItems: "A kijelölt elemek elrejtése",
    closeOnSelect: "A legördülő menü bezárása a kiválasztás után",
    verticalAlign: "Függőleges igazítás",
    alternateRows: "Alternatív sorok",
    columnsVisibleIf: "Az oszlopok akkor láthatók, ha",
    rowsVisibleIf: "A sorok akkor láthatók, ha",
    otherPlaceholder: "Megjegyzés terület helyőrzője",
    filePlaceholder: "Fájl helyőrző szövege",
    photoPlaceholder: "Fénykép helyőrző szövege",
    fileOrPhotoPlaceholder: "Fájl vagy fénykép helyőrző szövege",
    rateType: "Ár típusa",
    url_placeholder: "Pl.: https://api.example.com/books",
    path_placeholder: "Pl.: kategóriák.fikció",
    questionStartIndex_placeholder: "Pl.: a)",
    width_placeholder: "Pl.: 6 hüvelyk",
    minWidth_placeholder: "Pl.: 600px",
    maxWidth_placeholder: "Pl.: 50%",
    imageHeight_placeholder: "kocsi",
    imageWidth_placeholder: "kocsi",
    itemTitleWidth_placeholder: "Pl.: 100px",
    theme: {
      themeName: "Téma",
      isPanelless: "Kérdés megjelenése",
      editorPanel: "Háttér és saroksugár",
      questionPanel: "Háttér és saroksugár",
      primaryColor: "Kiemelő szín",
      panelBackgroundTransparency: "Panel hátterének átlátszatlansága",
      questionBackgroundTransparency: "Kérdés hátterének átlátszatlansága",
      fontSize: "Betűméret",
      scale: "Hangsor",
      cornerRadius: "Sarok sugara",
      advancedMode: "Speciális mód",
      pageTitle: "Cím betűtípusa",
      pageDescription: "Leírás betűtípus",
      questionTitle: "Cím betűtípusa",
      questionDescription: "Leírás betűtípus",
      editorFont: "Betűkészlet",
      backgroundOpacity: "Átlátszatlanság",
      "--sjs-font-family": "Betűcsalád",
      "--sjs-general-backcolor-dim": "Háttérszín",
      "--sjs-primary-backcolor": "Ékezetes háttér",
      "--sjs-primary-forecolor": "Hangsúlyos előtér",
      "--sjs-special-red": "Hibaüzenetek",
      "--sjs-shadow-small": "Árnyék effektusok",
      "--sjs-shadow-inner": "Árnyék effektusok",
      "--sjs-border-default": "Színek"
    },
    "header@header": {
      headerView: "Nézet",
      logoPosition: "Logó pozíciója",
      surveyTitle: "Felmérés címének betűtípusa",
      surveyDescription: "Felmérés leírásának betűtípusa",
      headerTitle: "Felmérés címének betűtípusa",
      headerDescription: "Felmérés leírásának betűtípusa",
      inheritWidthFrom: "Tartalomterület szélessége",
      textAreaWidth: "Szöveg szélessége",
      backgroundColorSwitch: "Háttérszín",
      backgroundImage: "Háttérkép",
      backgroundImageOpacity: "Átlátszatlanság",
      overlapEnabled: "Átfed",
      logoPositionX: "Logó pozíciója",
      titlePositionX: "Cím pozíciója",
      descriptionPositionX: "Leírás pozíciója"
    }
  },
  // Property values
  pv: {
    "true": "igaz",
    "false": "téves",
    file: "Helyi fájlok",
    camera: "Fényképezőgép",
    "file-camera": "Helyi fájlok vagy kamera",
    inherit: "öröklött",
    show: "mutatás",
    hide: "elrejtés",
    default: "alapértelmezett",
    initial: "kezdeti",
    random: "véletlen",
    collapsed: "csukott",
    expanded: "nyitott",
    none: "semmi",
    asc: "növekvő",
    desc: "csökkenő",
    indeterminate: "határozatlan",
    selected: "Kiválasztott",
    unselected: "Kijelöletlen",
    decimal: "tizedes",
    currency: "valuta",
    percent: "százalék",
    firstExpanded: "első nyitva",
    off: "ki",
    list: "lista",
    carousel: "Körhinta",
    tab: "Lapfülek",
    progressTop: "felül",
    progressBottom: "alul",
    progressTopBottom: "alül és felül",
    horizontal: "horizontális",
    vertical: "vertikális",
    top: "fent",
    bottom: "lent",
    topBottom: "fent és lent",
    both: "Mindkettő",
    left: "bal",
    right: "Jobbra",
    center: "Központ",
    leftRight: "Balra és jobbra",
    middle: "Középső",
    color: "szín",
    date: "dátum",
    datetime: "Dátum/idő",
    "datetime-local": "datetime-local",
    email: "E-mail",
    month: "hónap",
    number: "szám",
    password: "jelszó",
    range: "tartomány",
    tel: "Tel",
    text: "Text",
    time: "Idő",
    url: "URL-cím",
    week: "hét",
    hidden: "rejtett",
    edit: "szerkesztés",
    display: "mutatás",
    contain: "Tartalmaz",
    cover: "Fedő",
    fill: "Tölt",
    next: "Következő",
    last: "Utolsó",
    onComplete: "befejezéskor",
    onHidden: "eltűnéskor",
    onHiddenContainer: "Amikor a kérdés vagy annak panelje/oldala rejtetté válik",
    clearInvisibleValues: {
      none: "Soha"
    },
    clearIfInvisible: {
      none: "Soha"
    },
    inputType: {
      color: "Szín",
      date: "Dátum",
      "datetime-local": "Dátum és idő",
      email: "E-mail",
      month: "Hónap",
      number: "Szám",
      password: "Jelszó",
      range: "Tartomány",
      tel: "Telefonszám",
      text: "Text",
      time: "Idő",
      url: "URL",
      week: "Hét"
    },
    autocomplete: {
      name: "Teljes név",
      "honorific-prefix": "Előképző",
      "given-name": "Keresztnév",
      "additional-name": "Középső név",
      "family-name": "Vezetéknév",
      "honorific-suffix": "Toldalék",
      nickname: "Becenév",
      "organization-title": "Beosztás",
      username: "Felhasználónév",
      "new-password": "Új jelszó",
      "current-password": "Jelenlegi jelszó",
      organization: "Szervezet neve",
      "street-address": "Teljes utca és házszám",
      "address-line1": "Címsor 1",
      "address-line2": "Címsor 2",
      "address-line3": "Címsor 3",
      "address-level4": "4. szintű cím",
      "address-level3": "3. szintű cím",
      "address-level2": "2. szintű cím",
      "address-level1": "1. szintű cím",
      country: "Országkód",
      "country-name": "Ország neve",
      "postal-code": "Irányítószám",
      "cc-name": "Kártyatulajdonos neve",
      "cc-given-name": "Kártyabirtokos keresztneve",
      "cc-additional-name": "Kártyabirtokos középső neve",
      "cc-family-name": "Kártyabirtokos vezetékneve",
      "cc-number": "Bankkártya száma",
      "cc-exp": "Lejárati dátum",
      "cc-exp-month": "Lejárati hónap",
      "cc-exp-year": "Lejárati év",
      "cc-csc": "Kártya biztonsági kód",
      "cc-type": "Hitelkártya típusa",
      "transaction-currency": "Tranzakció pénzneme",
      "transaction-amount": "Tranzakció összege",
      language: "Választott nyelv",
      bday: "Születésnap",
      "bday-day": "Születésnap napja",
      "bday-month": "Születésnapi hónap",
      "bday-year": "Születésnapi év",
      sex: "Nem",
      url: "Webhely URL-címe",
      photo: "Profilkép",
      tel: "Telefonszám",
      "tel-country-code": "Telefonszám országkódja",
      "tel-national": "Nemzeti telefonszám",
      "tel-area-code": "Körzetszám",
      "tel-local": "Helyi telefonszám",
      "tel-local-prefix": "Helyi telefon előhívószáma",
      "tel-local-suffix": "Helyi telefon utótag",
      "tel-extension": "Telefonbővítmény",
      email: "E-mail cím",
      impp: "Azonnali üzenetküldési protokoll"
    },
    maskType: {
      none: "Egyik sem",
      pattern: "Minta",
      numeric: "Numerikus",
      datetime: "Dátum és idő",
      currency: "Valuta"
    },
    inputTextAlignment: {
      auto: "Kocsi",
      left: "Balra",
      right: "Jobbra"
    },
    all: "összes",
    page: "lap",
    survey: "kérdőív",
    onNextPage: "a következő lapra lépéskor",
    onValueChanged: "az érték változásakor",
    onValueChanging: "A válasz módosítása előtt",
    questionsOnPageMode: {
      standard: "Eredeti szerkezet",
      singlePage: "Az összes kérdés megjelenítése egy oldalon",
      questionPerPage: "Egyetlen kérdés megjelenítése oldalanként"
    },
    noPreview: "Nincs előnézet",
    showAllQuestions: "Az összes kérdés megjelenítése",
    showAnsweredQuestions: "Csak a megválaszolt kérdések megjelenítése",
    allQuestions: "Az összes kérdés megjelenítése",
    answeredQuestions: "Csak a megválaszolt kérdések megjelenítése",
    pages: "Befejezett oldalak",
    questions: "Megválaszolt kérdések",
    requiredQuestions: "Megválaszolt kötelező kérdések",
    correctQuestions: "Érvényes válaszok",
    buttons: "Befejezett oldalak (gombos felhasználói felület)",
    underInput: "A bemenet alatt",
    underTitle: "A cím alatt",
    onBlur: "Elmosódáskor",
    onTyping: "Gépelés közben",
    underRow: "A sor alatt",
    underRowSingle: "A sor alatt csak egy panel látható",
    auto: "Kocsi",
    showNavigationButtons: {
      none: "Rejtett"
    },
    timerInfoMode: {
      combined: "Mindkettő"
    },
    addRowButtonLocation: {
      default: "A mátrix elrendezésétől függ"
    },
    panelsState: {
      default: "A felhasználók nem bonthatják ki és nem csukhatják össze a paneleket",
      collapsed: "Minden panel össze van csukva",
      expanded: "Minden panel ki van bontva",
      firstExpanded: "Először bővített"
    },
    widthMode: {
      static: "Statikus",
      responsive: "Fogékony"
    },
    contentMode: {
      image: "Kép",
      video: "Video",
      youtube: "Youtube-videók"
    },
    displayMode: {
      buttons: "Gombok",
      dropdown: "Legördülő menü"
    },
    rateColorMode: {
      default: "Alapértelmezett",
      scale: "Hangsor"
    },
    scaleColorMode: {
      monochrome: "Monokróm",
      colored: "Színes"
    },
    autoGenerate: {
      "true": "Létrehoz",
      "false": "Manuális bevitel"
    },
    rateType: {
      labels: "Címkék",
      stars: "Csillagok",
      smileys: "Hangulatjelek"
    },
    state: {
      default: "Zárolt"
    },
    showQuestionNumbers: {
      default: "Automatikus számozás",
      on: "Automatikus számozás",
      onPage: "Visszaállítás minden oldalon",
      onpanel: "Visszaállítás az egyes paneleken",
      onPanel: "Visszaállítás az egyes paneleken",
      recursive: "Rekurzív számozás",
      onSurvey: "Folytassa a felmérést",
      off: "Nincs számozás"
    },
    descriptionLocation: {
      underTitle: "A kérdés címe alatt",
      underInput: "A beviteli mező alatt"
    },
    selectToRankAreasLayout: {
      horizontal: "A választási lehetőségek mellett",
      vertical: "A fenti választási lehetőségek"
    },
    displayStyle: {
      decimal: "Tizedes",
      currency: "Valuta",
      percent: "Százalék",
      date: "Dátum"
    },
    totalDisplayStyle: {
      decimal: "Tizedes",
      currency: "Valuta",
      percent: "Százalék",
      date: "Dátum"
    },
    rowOrder: {
      initial: "Eredeti"
    },
    questionOrder: {
      initial: "Eredeti"
    },
    progressBarLocation: {
      top: "Felső",
      bottom: "Fenék",
      topbottom: "Felső és alsó",
      aboveheader: "A fejléc felett",
      belowheader: "A fejléc alatt",
      off: "Rejtett"
    },
    sum: "Összeg",
    count: "Gróf",
    min: "Min",
    max: "Max",
    avg: "Avg",
    searchMode: {
      contains: "Tartalmaz",
      startsWith: "Ezzel kezdődik"
    },
    backgroundImageFit: {
      auto: "Kocsi",
      cover: "Fedő",
      contain: "Tartalmaz",
      fill: "Nyúlik",
      tile: "Cserép"
    },
    backgroundImageAttachment: {
      fixed: "Fix",
      scroll: "Kézirattekercs"
    },
    headerView: {
      basic: "Alapvető",
      advanced: "Haladó"
    },
    inheritWidthFrom: {
      survey: "Ugyanaz, mint a felmérés",
      container: "Tárolóhoz igazítás"
    },
    backgroundColorSwitch: {
      none: "Egyik sem",
      accentColor: "Kiemelő szín",
      custom: "Szokás"
    },
    colorPalette: {
      light: "Fény",
      dark: "Sötét"
    },
    isPanelless: {
      "false": "Alapértelmezett",
      "true": "Panelek nélkül"
    },
    progressBarInheritWidthFrom: {
      survey: "Ugyanaz, mint a felmérés",
      container: "Ugyanaz, mint a konténer"
    }
  },
  // Operators
  op: {
    empty: "üres",
    notempty: "nem üres",
    equal: "megegyezik",
    notequal: "nem egyezik meg",
    contains: "tartalmazza",
    notcontains: "nem tartalmazza",
    anyof: "Bármelyike",
    allof: "Az összes",
    greater: "nagyobb mint",
    less: "kisebb mint",
    greaterorequal: "nagyobb vagy egyenlő",
    lessorequal: "kisebb vagy egyenlő",
    and: "és",
    or: "vagy"
  },
  // Embed window
  ew: {
    angular: "Angular verzió használata",
    jquery: "jQuery verzió használata",
    knockout: "Knockout verzió használata",
    react: "React verzió használata",
    vue: "Vue verzió használata",
    bootstrap: "Használat Bootstrap frameworkkel",
    modern: "Modern téma",
    default: "Alapértelmezett téma",
    orange: "Narancssárga téma",
    darkblue: "Sötétkék téma",
    darkrose: "Darkrose téma",
    stone: "Kő téma",
    winter: "Téli téma",
    winterstone: "Téli-kő téma",
    showOnPage: "Kérdőív mutatása a lapon",
    showInWindow: "Kérdőív mutatása egy ablakban",
    loadFromServer: "Kérdőív JSON betöltése a szerverről",
    titleScript: "Szkriptek és stíluslapok",
    titleHtml: "HTML",
    titleJavaScript: "JavaScript"
  },
  // Preview (Survey)
  ts: {
    selectPage: "Válassza ki a tesztelni kívánt lapot:",
    showInvisibleElements: "Nemlátható elemek megjelnítése",
    hideInvisibleElements: "Láthatatlan elemek elrejtése"
  },
  validators: {
    answercountvalidator: "válaszok száma",
    emailvalidator: "e-mail",
    expressionvalidator: "kifejezés",
    numericvalidator: "szám",
    regexvalidator: "reguláris kifejezés",
    textvalidator: "szöveg"
  },
  triggers: {
    completetrigger: "kérdőív befejezése",
    setvaluetrigger: "érték beállítása",
    copyvaluetrigger: "érték másolása",
    skiptrigger: "Ugrás a kérdésre",
    runexpressiontrigger: "kifejezés futtatása",
    visibletrigger: "láthatóság megváltoztatása (már nincs használatban)"
  },
  peplaceholder: {
    patternmask: {
      pattern: "Pl.: +1(999)-999-99-99"
    },
    datetimemask: {
      pattern: "Pl.: éééé/hh/nn"
    },
    currencymask: {
      prefix: "Pl.: $",
      suffix: "Pl.: USD"
    },
    panelbase: {
      questionTitleWidth: "Pl.: 200px"
    },
    panellayoutcolumn: {
      effectiveWidth: "Pl.: 30%",
      questionTitleWidth: "Pl.: 200px"
    }
  },
  pehelp: {
    panel: {
      name: "Olyan panelazonosító, amely nem látható a válaszadók számára.",
      description: "Írja be a panel feliratát.",
      visibleIf: "A varázspálca ikonnal feltételes szabályt állíthat be, amely meghatározza a panel láthatóságát.",
      enableIf: "A varázspálca ikonnal állítson be egy feltételes szabályt, amely letiltja a panel írásvédett módját.",
      requiredIf: "A varázspálca ikonnal állítson be egy feltételes szabályt, amely megakadályozza a felmérés elküldését, kivéve, ha legalább egy beágyazott kérdésre van válasz.",
      questionTitleLocation: "A panelen található összes kérdésre vonatkozik. Ha felül szeretné bírálni ezt a beállítást, határozzon meg címigazítási szabályokat az egyes kérdésekhez. Az \"Öröklés\" opció az oldalszintű (ha be van állítva) vagy a felmérés szintű beállítást (\"Alapértelmezetten felül\") alkalmazza.",
      questionTitleWidth: "Egységes szélességet állít be a kérdéscímekhez, ha azok a kérdésmezőktől balra vannak igazítva. CSS-értékeket fogad el (px, %, in, pt stb.).",
      questionErrorLocation: "Beállítja a hibaüzenet helyét a panelen belüli összes kérdéssel kapcsolatban. Az \"Öröklés\" opció az oldalszintű (ha be van állítva) vagy a felmérés szintű beállítást alkalmazza.",
      questionOrder: "Megtartja a kérdések eredeti sorrendjét, vagy véletlenszerűvé teszi őket. Az \"Öröklés\" opció az oldalszintű (ha be van állítva) vagy a felmérés szintű beállítást alkalmazza.",
      page: "A kijelölt oldal végére helyezi a panelt.",
      innerIndent: "Térközt vagy margót ad a panel tartalma és a paneldoboz bal szegélye közé.",
      startWithNewLine: "Törölje a jelölést, ha a panel egy sorban jelenik meg az előző kérdéssel vagy panellel. A beállítás nem érvényes, ha a panel az űrlap első eleme.",
      state: "Válasszon a következők közül: \"Kibontott\" - a panel teljes egészében megjelenik és összecsukható; \"Összecsukott\" - a panel csak a címet és a leírást jeleníti meg, és bővíthető; \"Zárolva\" - a panel teljes egészében megjelenik, és nem csukható össze.",
      width: "A panel szélességét az ugyanabban a sorban lévő többi földmérési elemhez viszonyítva állítja be. CSS-értékeket fogad el (px, %, in, pt stb.).",
      showQuestionNumbers: "Számokat rendel a panelbe ágyazott kérdésekhez.",
      effectiveColSpan: "Megadja, hogy ez a panel hány oszlopot ölel fel a rácselrendezésen belül.",
      gridLayoutColumns: "Ez a táblázat lehetővé teszi az egyes rácsoszlopok konfigurálását a panelen. Automatikusan beállítja az egyes oszlopok szélességének százalékos arányát a sorban lévő elemek maximális száma alapján. A rácsos elrendezés testreszabásához manuálisan állítsa be ezeket az értékeket, és határozza meg az egyes oszlopokban lévő összes kérdés címszélességét."
    },
    paneldynamic: {
      name: "Olyan panelazonosító, amely nem látható a válaszadók számára.",
      description: "Írja be a panel feliratát.",
      visibleIf: "A varázspálca ikonnal feltételes szabályt állíthat be, amely meghatározza a panel láthatóságát.",
      enableIf: "A varázspálca ikonnal állítson be egy feltételes szabályt, amely letiltja a panel írásvédett módját.",
      requiredIf: "A varázspálca ikonnal állítson be egy feltételes szabályt, amely megakadályozza a felmérés elküldését, kivéve, ha legalább egy beágyazott kérdésre van válasz.",
      templateQuestionTitleLocation: "A panelen található összes kérdésre vonatkozik. Ha felül szeretné bírálni ezt a beállítást, határozzon meg címigazítási szabályokat az egyes kérdésekhez. Az \"Öröklés\" opció az oldalszintű (ha be van állítva) vagy a felmérés szintű beállítást (\"Alapértelmezetten felül\") alkalmazza.",
      templateQuestionTitleWidth: "Egységes szélességet állít be a kérdéscímekhez, ha azok a kérdésmezők bal oldalához vannak igazítva. Elfogadja a CSS értékeket (px, %, in, pt stb.).",
      templateErrorLocation: "Beállítja egy érvénytelen bevitelű kérdéssel kapcsolatos hibaüzenet helyét. Válasszon a következők közül: \"Felső\" - egy hibaüzenet kerül a kérdésmező tetejére; \"Alsó\" - egy hibaüzenet kerül a kérdésmező aljára. Az \"Öröklés\" opció az oldalszintű (ha be van állítva) vagy a felmérés szintű beállítást (\"Alapértelmezetten felül\") alkalmazza.",
      errorLocation: "Beállítja a hibaüzenet helyét a panelen belüli összes kérdéssel kapcsolatban. Az \"Öröklés\" opció az oldalszintű (ha be van állítva) vagy a felmérés szintű beállítást alkalmazza.",
      page: "A kijelölt oldal végére helyezi a panelt.",
      innerIndent: "Térközt vagy margót ad a panel tartalma és a paneldoboz bal szegélye közé.",
      startWithNewLine: "Törölje a jelölést, ha a panel egy sorban jelenik meg az előző kérdéssel vagy panellel. A beállítás nem érvényes, ha a panel az űrlap első eleme.",
      state: "Válasszon a következők közül: \"Kibontott\" - a panel teljes egészében megjelenik és összecsukható; \"Összecsukott\" - a panel csak a címet és a leírást jeleníti meg, és bővíthető; \"Zárolva\" - a panel teljes egészében megjelenik, és nem csukható össze.",
      width: "A panel szélességét az ugyanabban a sorban lévő többi földmérési elemhez viszonyítva állítja be. CSS-értékeket fogad el (px, %, in, pt stb.).",
      templateTitle: "Írjon be egy sablont a dinamikus panelcímekhez. Használja a {panelIndex} elemet a panel általános pozíciójához, a {visiblePanelIndex} értéket pedig a látható panelek közötti sorrendjéhez. Szúrja be ezeket a helyőrzőket a mintába az automatikus számozás hozzáadásához.",
      templateTabTitle: "Írjon be egy sablont a lapcímekhez. Használja a {panelIndex} elemet a panel általános pozíciójához, a {visiblePanelIndex} sablont pedig a látható panelek közötti sorrendjéhez. Szúrja be ezeket a helyőrzőket a mintába az automatikus számozás hozzáadásához.",
      tabTitlePlaceholder: "A lapcímek alapszövege, amely akkor érvényes, ha a lap címmintája nem ad értelmes értéket.",
      templateVisibleIf: "Ezzel a beállítással szabályozhatja az egyes panelek láthatóságát a dinamikus panelen. A \"{panel}\" helyőrzővel hivatkozhat a kifejezés aktuális paneljére.",
      titleLocation: "Ezt a beállítást a panelen található összes kérdés automatikusan örökli. Ha felül szeretné bírálni ezt a beállítást, határozzon meg címigazítási szabályokat az egyes kérdésekhez. Az \"Öröklés\" opció az oldalszintű (ha be van állítva) vagy a felmérés szintű beállítást (\"Alapértelmezetten felül\") alkalmazza.",
      descriptionLocation: "Az \"Öröklés\" opció az oldalszintű (ha be van állítva) vagy a felmérés szintű beállítást alkalmazza (\"Alapértelmezés szerint a panel címe alatt\").",
      newPanelPosition: "Az újonnan hozzáadott panel helyét határozza meg. Alapértelmezés szerint az új panelek hozzáadódnak a végéhez. Válassza a \"Tovább\" lehetőséget, ha új panelt szeretne beilleszteni az aktuális után.",
      copyDefaultValueFromLastEntry: "Megkettőzi a válaszokat az utolsó panelről, és hozzárendeli őket a következő hozzáadott dinamikus panelhez.",
      keyName: "Hivatkozzon egy kérdés nevére, hogy a felhasználónak egyedi választ kell adnia erre a kérdésre minden panelen."
    },
    copyDefaultValueFromLastEntry: "Megkettőzi a válaszokat az utolsó sorból, és hozzárendeli őket a következő hozzáadott dinamikus sorhoz.",
    defaultValueExpression: "Ezzel a beállítással alapértelmezett válaszértéket rendelhet hozzá egy kifejezés alapján. A kifejezés tartalmazhat alapvető számításokat - '{q1_id} + {q2_id}', logikai kifejezéseket, például \"{age} > 60\" és függvényeket: 'iif()', 'today()', 'age()', 'min()', 'max()', 'avg()' stb. A kifejezés által meghatározott érték a kezdeti alapértelmezett érték, amelyet a válaszadó kézi bevitele felülbírálhat.",
    resetValueIf: "A varázspálca ikonnal feltételes szabályt állíthat be, amely meghatározza, hogy a válaszadó bemenete mikor áll vissza az \"Alapértelmezett érték kifejezés\" vagy az \"Értékkifejezés beállítása\" vagy az \"Alapértelmezett válasz\" érték alapján (ha bármelyik be van állítva).",
    setValueIf: "A varázspálca ikonnal beállíthat egy feltételes szabályt, amely meghatározza, hogy mikor kell futtatni az \"Érték beállítása kifejezést\", és dinamikusan hozzárendelni az eredményül kapott értéket válaszként.",
    setValueExpression: "Adjon meg egy kifejezést, amely meghatározza az \"Érték beállítása, ha\" szabály feltételeinek teljesülése esetén beállítandó értéket. A kifejezés tartalmazhat alapvető számításokat - '{q1_id} + {q2_id}', logikai kifejezéseket, például \"{age} > 60\" és függvényeket: 'iif()', 'today()', 'age()', 'min()', 'max()', 'avg()' stb. A kifejezés által meghatározott értéket felülbírálhatja a válaszadó kézi bevitele.",
    gridLayoutEnabled: "A Survey Creator lehetővé teszi az űrlapelemek szövegközi szélességének manuális beállítását az elrendezés vezérléséhez. Ha ez nem hozza meg a kívánt eredményt, engedélyezheti a rácselrendezést, amely oszlopalapú rendszer használatával struktúrákat alkot elemeket. Az elrendezésoszlopok konfigurálásához válasszon ki egy oldalt vagy panelt, és használja a \"Kérdésbeállítások\" → a \"Rácsoszlopok\" táblázatot. Annak beállításához, hogy egy kérdés hány oszlopra terjed ki, válassza ki azt, és állítsa be a kívánt értéket az \"Elrendezés\" → az \"Oszloptartomány\" mezőben.",
    question: {
      name: "A válaszadók számára nem látható kérdésazonosító.",
      description: "Írja be a kérdés alcímét.",
      visibleIf: "A varázspálca ikonnal állítson be egy feltételes szabályt, amely meghatározza a kérdések láthatóságát.",
      enableIf: "A varázspálca ikonnal állítson be egy feltételes szabályt, amely letiltja a kérdés írásvédett módját.",
      requiredIf: "A varázspálca ikonnal állítson be egy feltételes szabályt, amely megakadályozza a felmérés előrehaladását vagy elküldését, kivéve, ha a kérdésre választ kapott.",
      startWithNewLine: "Törölje a jelölést, ha a kérdést egy sorban szeretné megjeleníteni az előző kérdéssel vagy panellel. A beállítás nem érvényes, ha a kérdés az űrlap első eleme.",
      page: "A kérdést a kijelölt oldal végére helyezi.",
      state: "Válasszon a következők közül: \"Kibontott\" - a kérdésmező teljes egészében megjelenik és összecsukható; \"Összecsukott\" - a kérdésmező csak a címet és a leírást jeleníti meg, és kibontható; \"Zárolva\" - a kérdésmező teljes egészében megjelenik, és nem csukható össze.",
      titleLocation: "Felülbírálja a panel-, oldal- vagy felmérésszinten definiált címigazítási szabályokat. Az \"Öröklés\" opció minden magasabb szintű beállítást (ha be van állítva) vagy felmérésszintű beállítást (\"Alapértelmezetten Felül\") alkalmaz.",
      descriptionLocation: "Az \"Öröklés\" opció a felmérés szintű beállítást alkalmazza (\"Alapértelmezés szerint a kérdés címe alatt\").",
      errorLocation: "Beállítja az érvénytelen bevitelű kérdéssel kapcsolatos hibaüzenet helyét. Válasszon a következők közül: \"Felső\" - egy hibaüzenet kerül a kérdésmező tetejére; \"Alsó\" - egy hibaüzenet kerül a kérdésmező aljára. Az \"Öröklés\" opció a felmérés szintű beállítást alkalmazza (\"Felül\" alapértelmezés szerint).",
      indent: "Térközt vagy margót ad a kérdés tartalma és a kérdésmező bal szegélye közé.",
      width: "A kérdés szélességét az ugyanabban a sorban lévő többi földmérési elemhez viszonyítva állítja be. CSS-értékeket fogad el (px, %, in, pt stb.).",
      surveyvalidator: {
        expression: "A varázspálca ikonnal állítson be érvényességi szabályt a kérdéshez."
      },
      textUpdateMode: "Válasszon a következők közül: \"Elveszett fókuszban\" - az érték frissül, amikor a beviteli mező elveszíti a fókuszt; \"Gépelés közben\" - az érték valós időben frissül, ahogy a felhasználók gépelnek. Az \"Öröklés\" opció a felmérés szintű beállítást alkalmazza (\"Alapértelmezés szerint elveszett fókuszban\").",
      url: "Bármely webszolgáltatást használhat adatforrásként feleletválasztós kérdésekhez. A választási lehetőségek értékeinek feltöltéséhez adja meg az adatokat szolgáltató szolgáltatás URL-címét.",
      searchMode: "A legördülő lista szűrésére szolgáló összehasonlító művelet.",
      textWrapEnabled: "A választási lehetőségekben szereplő hosszú szövegek automatikusan sortöréseket generálnak, hogy elférjenek a legördülő menüben. Törölje a jelet a jelölőnégyzetből, ha le szeretné vágni a szövegeket.",
      effectiveColSpan: "Megadja, hogy ez a kérdés hány oszlopra terjed ki a rácsos elrendezésen belül."
    },
    signaturepad: {
      signatureWidth: "Beállítja a megjelenített aláírási terület szélességét és az eredményül kapott képet.",
      signatureHeight: "Beállítja a megjelenített aláírási terület magasságát és az eredményül kapott képet.",
      signatureAutoScaleEnabled: "Jelölje be, ha azt szeretné, hogy az aláírási terület kitöltse a kérdésmezőben rendelkezésre álló összes helyet, miközben megtartja az alapértelmezett 3:2 képarányt. Egyéni szélességi és magassági értékek beállításakor a beállítás megtartja ezeknek a méreteknek a méretarányát."
    },
    file: {
      imageHeight: "Beállítja a kép magasságát a felmérés eredményeiben.",
      imageWidth: "Beállítja a kép szélességét a felmérés eredményeiben.",
      allowImagesPreview: "Ha lehetséges, miniatűr előnézeteket jelenít meg a feltöltött fájlokhoz. Törölje a jelölést, ha inkább fájlikonokat szeretne megjeleníteni."
    },
    image: {
      contentMode: "Az \"Automatikus\" opció automatikusan meghatározza a megjelenítéshez megfelelő módot - Kép, Videó vagy YouTube - a megadott forrás URL alapján."
    },
    imagepicker: {
      imageHeight: "Felülbírálja a minimális és maximális magassági értékeket.",
      imageWidth: "Felülbírálja a minimális és maximális szélességi értékeket.",
      choices: "Az \"érték\" a feltételes szabályokban használt elemazonosítóként szolgál; A \"Szöveg\" felirat jelenik meg a válaszadók számára.",
      contentMode: "Válasszon a \"Kép\" és a \"Videó\" között a médiaválasztó tartalommódjának beállításához. Ha a \"Kép\" van kiválasztva, győződjön meg arról, hogy az összes rendelkezésre álló opció a következő formátumú képfájlok: JPEG, GIF, PNG, APNG, SVG, BMP, ICO. Hasonlóképpen, ha a \"Video\" van kiválasztva, győződjön meg arról, hogy az összes opció közvetlen link a következő formátumú videofájlokhoz: MP4, MOV, WMV, FLV, AVI, MKV. Felhívjuk figyelmét, hogy a YouTube-linkek nem támogatottak a videóbeállításoknál."
    },
    text: {
      size: "Ez a beállítás csak a beviteli mezőt méretezi át, és nincs hatással a kérdésmező szélességére. Az elfogadott bemeneti hossz korlátozásához lépjen az <b>Érvényesítés → Maximális karakterkorlát</b> elemre."
    },
    comment: {
      rows: "Beállítja a beviteli mezőben megjelenített sorok számát. Ha a bemenet több sort foglal el, megjelenik a görgetősáv."
    },
    // survey templates
    survey: {
      readOnly: "Válassza ki, ha meg szeretné akadályozni, hogy a válaszadók kitöltsék a felmérést.",
      progressBarLocation: "Beállítja a folyamatjelző sáv helyét. Az \"Automatikus\" érték megjeleníti a folyamatjelző sávot a felmérés fejléce felett vagy alatt."
    },
    matrixdropdowncolumn: {
      name: "A válaszadók számára nem látható oszlopazonosító.",
      isUnique: "Ha engedélyezve van egy oszlophoz, a válaszadónak egyedi választ kell adnia az oszlop minden kérdésére.",
      rows: "Beállítja a beviteli mezőben megjelenített sorok számát. Ha a bemenet több sort foglal el, megjelenik a görgetősáv.",
      visibleIf: "A varázspálca ikonnal feltételes szabályt állíthat be, amely meghatározza az oszlop láthatóságát.",
      enableIf: "A varázspálca ikonnal állítson be egy feltételes szabályt, amely letiltja az oszlop írásvédett módját.",
      requiredIf: "A varázspálca ikonnal állítson be egy feltételes szabályt, amely megakadályozza a felmérés elküldését, kivéve, ha legalább egy beágyazott kérdésre van válasz.",
      showInMultipleColumns: "Ha be van jelölve, minden választási lehetőséghez külön oszlopot hoz létre.",
      colCount: "Az adatválaszték-beállításokat többoszlopos elrendezésbe rendezi. Ha 0-ra van állítva, a beállítások egyetlen sorban jelennek meg. Ha -1 értékre van állítva, a tényleges érték a szülőmátrix \"Beágyazott oszlopok száma\" tulajdonságából öröklődik."
    },
    caseInsensitive: "Válassza ki, hogy a reguláris kifejezés kis- és nagybetűit egyenértékűként kell-e kezelni.",
    widthMode: "Válasszon a következők közül: \"Statikus\" - rögzített szélességet állít be; \"Reszponzív\" - a felmérés a képernyő teljes szélességét elfoglalja; \"Automatikus\" - a használt kérdéstípusoktól függően a kettő egyikét alkalmazza.",
    cookieName: "A cookie-k megakadályozzák, hogy a felhasználók kétszer töltsék ki ugyanazt a felmérést.",
    logo: "Illesszen be egy képhivatkozást (méretkorlátozás nélkül), vagy kattintson a mappa ikonra egy fájl böngészéséhez a számítógépről (legfeljebb 64 KB).",
    logoWidth: "Beállítja az embléma szélességét CSS egységekben (px, %, in, pt stb.).",
    logoHeight: "Beállítja az embléma magasságát CSS egységekben (px, %, in, pt stb.).",
    logoFit: "Válasszon a következők közül: \"Nincs\" - a kép megőrzi eredeti méretét; \"Tartalmaz\" - a kép átméreteződik, hogy illeszkedjen, miközben megtartja képarányát; \"Borító\" - a kép kitölti az egész dobozt, miközben megtartja képarányát; \"Kitöltés\" - a kép a doboz kitöltéséhez nyúlik a képarány megtartása nélkül.",
    autoAdvanceEnabled: "Válassza ki, hogy szeretné-e, hogy a felmérés automatikusan továbblépjen a következő oldalra, miután a válaszadó megválaszolta az aktuális oldalon található összes kérdést. Ez a funkció nem érvényes, ha az oldal utolsó kérdése nyitott végű, vagy több választ is lehetővé tesz.",
    autoAdvanceAllowComplete: "Válassza ki, hogy szeretné-e, hogy a felmérés automatikusan kitöltődjön, miután a válaszadó megválaszolta az összes kérdést.",
    showNavigationButtons: "Beállítja a navigációs gombok láthatóságát és helyét az oldalon.",
    navigationButtonsLocation: "Beállítja a navigációs gombok helyét az oldalon.",
    showPreviewBeforeComplete: "Engedélyezze az előnézeti oldalt csak az összes vagy megválaszolt kérdéssel.",
    questionTitleLocation: "A felmérésben szereplő összes kérdésre vonatkozik. Ezt a beállítást felülbírálhatják az alacsonyabb szinteken lévő címigazítási szabályok: panel, oldal vagy kérdés. Az alacsonyabb szintű beállítás felülírja a magasabb szinten lévőket.",
    requiredMark: "Egy szimbólum vagy szimbólumsorozat, amely jelzi, hogy válaszolni kell.",
    questionStartIndex: "Írja be azt a számot vagy betűt, amellyel a számozást kezdeni szeretné.",
    questionErrorLocation: "Beállítja az érvénytelen bevitelű kérdéssel kapcsolatos hibaüzenet helyét. Válasszon a következők közül: \"Felső\" - egy hibaüzenet kerül a kérdésmező tetejére; \"Alsó\" - egy hibaüzenet kerül a kérdésmező aljára.",
    autoFocusFirstQuestion: "Válassza ki, ha azt szeretné, hogy az egyes oldalak első beviteli mezője készen álljon a szövegbevitelre.",
    questionOrder: "Megtartja a kérdések eredeti sorrendjét, vagy véletlenszerűvé teszi őket. A beállítás hatása csak az Előnézet lapon látható.",
    maxTextLength: "Csak szövegbeviteli kérdések esetén.",
    maxCommentLength: "Csak kérdésekhez fűzött megjegyzésekhez.",
    commentAreaRows: "Beállítja a szövegterületeken megjelenített sorok számát a kérdésmegjegyzésekhez. Ha a bevitel több sort foglal el, megjelenik a görgetősáv.",
    autoGrowComment: "Válassza ki, ha azt szeretné, hogy a kérdésmegjegyzések és a hosszú szöveges kérdések magassága automatikusan növekedjen a beírt szöveg hossza alapján.",
    allowResizeComment: "Csak kérdésekhez és hosszú szöveges kérdésekhez.",
    calculatedValues: "Az egyéni változók köztes vagy kiegészítő változókként szolgálnak az űrlapszámításokban. A válaszadó bemeneteit forrásértékként veszik fel. Minden egyéni változónak egyedi neve és egy kifejezése van, amelyen alapul.",
    includeIntoResult: "Válassza ezt a lehetőséget, ha a kifejezés számított értékét a felmérés eredményeivel együtt szeretné menteni.",
    triggers: "Az eseményindító egy kifejezésen alapuló esemény vagy feltétel. Miután a kifejezés \"true\" (igaz) értékre lett kiértékelve, az eseményindító elindít egy műveletet. Egy ilyen műveletnek opcionálisan lehet egy célkérdése, amelyet érint.",
    clearInvisibleValues: "Válassza ki, hogy törli-e a feltételes logika által elrejtett kérdések értékeit, és mikor tegye meg.",
    textUpdateMode: "Válasszon a következők közül: \"Elveszett fókuszban\" - az érték frissül, amikor a beviteli mező elveszíti a fókuszt; \"Gépelés közben\" - az érték valós időben frissül, ahogy a felhasználók gépelnek.",
    columns: "A bal oldali érték a feltételes szabályokban használt oszlopazonosítóként szolgál, a jobb oldali érték pedig a válaszadók számára jelenik meg.",
    rows: "A bal oldali érték a feltételes szabályokban használt sorazonosítóként szolgál, a jobb oldali érték a válaszadók számára jelenik meg.",
    columnMinWidth: "CSS-értékeket fogad el (px, %, in, pt stb.).",
    rowTitleWidth: "CSS-értékeket fogad el (px, %, in, pt stb.).",
    totalText: "Csak akkor látható, ha legalább egy oszlop Összeg típusú vagy Összeg kifejezéssel rendelkezik.",
    cellErrorLocation: "Beállítja a hibaüzenet helyét egy érvénytelen bevitelű cellával kapcsolatban. Az \"Öröklés\" opció a \"Hibaüzenetek igazítása\" tulajdonság beállítását alkalmazza.",
    detailErrorLocation: "Beállítja a hibaüzenetek helyét a részletes szakaszokba ágyazott kérdésekhez. Az \"Öröklés\" opció a \"Hibaüzenetek igazítása\" tulajdonság beállítását alkalmazza.",
    keyDuplicationError: "Ha az \"Ismétlődő válaszok megakadályozása\" tulajdonság engedélyezve van, az ismétlődő bejegyzést beküldeni próbáló válaszadó a következő hibaüzenetet kapja.",
    totalExpression: "Lehetővé teszi az összesített értékek kiszámítását egy kifejezés alapján. A kifejezés tartalmazhat alapvető számításokat ('{q1_id} + {q2_id}'), logikai kifejezéseket ('{age} > 60') és függvényeket ('iif()', 'today()', 'age()', 'min()', 'max()', 'avg()' stb.).",
    confirmDelete: "Elindít egy kérést, amely a sor törlésének megerősítését kéri.",
    keyName: "Ha a megadott oszlop azonos értékeket tartalmaz, a felmérés a \"Nem egyedi kulcsérték\" hibát adja vissza.",
    description: "Írjon be egy feliratot.",
    locale: "Válassza ki a nyelvet a felmérés létrehozásának megkezdéséhez. Fordítás hozzáadásához váltson új nyelvre, és fordítsa le az eredeti szöveget itt vagy a Fordítások lapon.",
    detailPanelMode: "Beállítja a részletszakasz helyét egy sorhoz képest. Válasszon a következők közül: \"Nincs\" - nincs bővítés; \"A sor alatt\" - a mátrix minden sora alá sorbővítés kerül; \"A sor alatt csak egy sor bővítés megjelenítése\" - a bővítés csak egyetlen sor alatt jelenik meg, a fennmaradó sorbővítések összecsukódnak.",
    imageFit: "Válasszon a következők közül: \"Nincs\" - a kép megőrzi eredeti méretét; \"Tartalmaz\" - a kép átméreteződik, hogy illeszkedjen, miközben megtartja képarányát; \"Borító\" - a kép kitölti az egész dobozt, miközben megtartja képarányát; \"Kitöltés\" - a kép a doboz kitöltéséhez nyúlik a képarány megtartása nélkül.",
    autoGrow: "Fokozatosan növeli a beviteli mező magasságát az adatok bevitele közben. Felülbírálja a \"Beviteli mező magassága (sorokban)\" beállítást.",
    allowResize: "Az átméretező fogópont (vagy fogópont) megjelenik a sarokban, és húzással módosítható a beviteli mező mérete.",
    timeLimit: "Az az időintervallum másodpercben, amely után a felmérés automatikusan továbblép a Köszönet oldalra.",
    timeLimitPerPage: "Az az időintervallum másodpercben, amely után a felmérés automatikusan továbblép a következő oldalra.",
    validateVisitedEmptyFields: "Engedélyezze ezt a beállítást, ha érvényesítést indít el, amikor a felhasználó egy üres beviteli mezőre összpontosít, majd módosítás nélkül elhagyja azt.",
    page: {
      name: "A válaszadók számára nem látható oldalazonosító.",
      description: "Írjon be egy oldalfeliratot.",
      navigationTitle: "A folyamatjelző sáv vagy a tartalomjegyzék navigációs gombján megjelenő felirat. Ha üresen hagyja ezt a mezőt, a navigációs gomb az oldal címét vagy nevét fogja használni. A folyamatjelző sáv vagy a tartalomjegyzék engedélyezéséhez lépjen a \"Felmérés\" → a \"Navigáció\" menüpontra.",
      timeLimit: "Az az időintervallum másodpercben, amely után a felmérés automatikusan továbblép a következő oldalra.",
      visibleIf: "A varázspálca ikonnal állítson be egy feltételes szabályt, amely meghatározza az oldal láthatóságát.",
      enableIf: "A varázspálca ikonnal állítson be egy feltételes szabályt, amely letiltja az oldal írásvédett módját.",
      requiredIf: "A varázspálca ikonnal állítson be egy feltételes szabályt, amely megakadályozza a felmérés elküldését, kivéve, ha legalább egy beágyazott kérdésre van válasz.",
      questionTitleLocation: "Az ezen az oldalon található összes kérdésre vonatkozik. Ha felül szeretné bírálni ezt a beállítást, határozzon meg címigazítási szabályokat az egyes kérdésekhez vagy panelekhez. Az \"Öröklés\" opció a felmérés szintű beállítást alkalmazza (\"Felül\" alapértelmezés szerint).",
      questionTitleWidth: "Egységes szélességet állít be a kérdéscímekhez, ha azok a kérdésmezőktől balra vannak igazítva. CSS-értékeket fogad el (px, %, in, pt stb.).",
      questionErrorLocation: "Beállítja az érvénytelen bevitelű kérdéssel kapcsolatos hibaüzenet helyét. Válasszon a következők közül: \"Felső\" - egy hibaüzenet kerül a kérdésmező tetejére; \"Alsó\" - egy hibaüzenet kerül a kérdésmező aljára. Az \"Öröklés\" opció a felmérés szintű beállítást alkalmazza (\"Felül\" alapértelmezés szerint).",
      questionOrder: "Megtartja a kérdések eredeti sorrendjét, vagy véletlenszerűvé teszi őket. Az \"Öröklés\" opció a felmérési szintű beállítást alkalmazza (\"Eredeti\" alapértelmezés szerint). A beállítás hatása csak az Előnézet lapon látható.",
      showNavigationButtons: "Beállítja a navigációs gombok láthatóságát az oldalon. Az \"Öröklés\" opció a felmérés szintű beállítást alkalmazza, amely alapértelmezés szerint \"Látható\".",
      gridLayoutColumns: "Ez a táblázat lehetővé teszi az oldal egyes rácsoszlopainak konfigurálását. Automatikusan beállítja az egyes oszlopok szélességének százalékos arányát a sorban lévő elemek maximális száma alapján. A rácsos elrendezés testreszabásához manuálisan állítsa be ezeket az értékeket, és határozza meg az egyes oszlopokban lévő összes kérdés címszélességét."
    },
    timerLocation: "Beállítja az időzítő helyét az oldalon.",
    panelsState: "Válasszon a következők közül: \"Zárolt\" - a felhasználók nem bonthatják ki vagy csukhatják össze a paneleket; \"Az összes összecsukása\" - minden panel összecsukott állapotban indul; \"Összes kibontása\" - minden panel kibővített állapotban indul; \"Először bővített\" - csak az első panel bővül.",
    imageLinkName: "Adjon meg egy megosztott tulajdonságnevet az objektumok tömbjében, amely tartalmazza az adatválaszték-listában megjeleníteni kívánt kép- vagy videofájl URL-címeit.",
    choices: "A bal oldali érték a feltételes szabályokban használt elemazonosítóként szolgál, a jobb oldali érték megjelenik a válaszadók számára.",
    title: "Írja be a megjelenítendő felhasználóbarát címet.",
    waitForUpload: "Biztosítja, hogy a felhasználók ne töltsék ki a felmérést a fájlok feltöltéséig.",
    minWidth: "CSS-értékeket fogad el (px, %, in, pt stb.).",
    maxWidth: "CSS-értékeket fogad el (px, %, in, pt stb.).",
    width: "CSS-értékeket fogad el (px, %, in, pt stb.).",
    valueName: "Ha nem állítja be ezt a tulajdonságot, a válasz a Name tulajdonságban megadott mezőben lesz tárolva.",
    defaultDisplayValue: "A HTML-kérdésekben, valamint a felmérési elemek dinamikus címeiben és leírásaiban megjelenő érték, ha a kérdés értéke üres.",
    useDisplayValuesInDynamicTexts: "Az egyszeres és többszörös kijelölésű kérdéstípusokban minden választási lehetőség rendelkezik azonosítóval és megjelenített értékkel. Ha be van jelölve, ez a beállítás azonosító érték helyett megjelenítési értéket jelenít meg a HTML-kérdésekben, valamint a dinamikus címekben és a földmérési elemek leírásában.",
    clearIfInvisible: "Válassza ki, hogy törli-e a feltételes logika által elrejtett kérdésértékeket, és mikor tegye meg. Az \"Öröklés\" opció a felmérési szintű beállítást alkalmazza (\"Felmérés befejezésekor\" alapértelmezés szerint).",
    choicesFromQuestionMode: "Válasszon a következők közül: \"Összes\" - átmásolja az összes választási lehetőséget a kiválasztott kérdésből; \"Kiválasztott\" - dinamikusan másolja csak a kiválasztott választási lehetőségeket; \"Nem kiválasztott\" - dinamikusan csak a nem kiválasztott választási lehetőségeket másolja. A \"Nincs\" és az \"Egyéb\" opciók alapértelmezés szerint másolásra kerülnek, ha engedélyezve vannak a forráskérdésben.",
    choiceValuesFromQuestion: "Az egyszeres és többszörös kijelölésű kérdéstípusokban minden választási lehetőség rendelkezik azonosítóval és megjelenített értékkel. Ez a beállítás határozza meg, hogy melyik mátrixoszlop vagy panelkérdés adja meg az azonosítókat.",
    choiceTextsFromQuestion: "Az egyszeres és többszörös kijelölésű kérdéstípusokban minden választási lehetőség rendelkezik azonosítóval és megjelenített értékkel. Ez a beállítás határozza meg, hogy melyik mátrixoszlop vagy panelkérdés jelenítse meg a megjelenített szövegeket.",
    allowCustomChoices: "Válassza ki, ha a válaszadók hozzáadhatják saját választási lehetőségeiket, ha a kívánt beállítás nem érhető el a legördülő menüben. Az egyéni beállításokat csak ideiglenesen tárolja a rendszer az aktuális böngésző munkamenet időtartamára.",
    showOtherItem: "Ha be van jelölve, a felhasználók további bevitelt adhatnak meg egy külön megjegyzésmezőben.",
    separateSpecialChoices: "Minden speciális választási lehetőséget (\"Nincs\", \"Egyéb\", \"Összes kijelölése\") új sorban jelenít meg, még akkor is, ha többoszlopos elrendezést használ.",
    path: "Adja meg azt a helyet a szolgáltatás adatkészletén belül, ahol az objektumok céltömbje található. Hagyja üresen, ha az URL-cím már a tömbre mutat.",
    choicesbyurl: {
      valueName: " "
    },
    titleName: "Adjon meg egy egységes tulajdonságnevet az adatválaszték-listában megjeleníteni kívánt értékeket tartalmazó objektumtömbben.",
    allowEmptyResponse: "Jelölje be, ha engedélyezni szeretné, hogy a szolgáltatás üres választ vagy tömböt adjon vissza.",
    choicesVisibleIf: "A varázspálca ikonnal feltételes szabályt állíthat be, amely meghatározza az összes választási lehetőség láthatóságát.",
    rateValues: "A bal oldali érték a feltételes szabályokban használt elemazonosítóként szolgál, a jobb oldali érték megjelenik a válaszadók számára.",
    rating: {
      displayMode: "Az \"Automatikus\" a rendelkezésre álló szélesség alapján választ a \"Gombok\" és a \"Legördülő menü\" módok között. Ha a szélesség nem elegendő a gombok megjelenítéséhez, a kérdés legördülő menüt jelenít meg."
    },
    valuePropertyName: "Lehetővé teszi olyan kérdések összekapcsolását, amelyek különböző formátumú eredményeket hoznak. Ha az ilyen kérdések illesztési azonosítóval vannak összekapcsolva, ez a megosztott tulajdonság tárolja a kiválasztott kérdésértékeket.",
    searchEnabled: "Válassza ki, ha frissíteni szeretné a legördülő menü tartalmát, hogy megfeleljen a felhasználó által a beviteli mezőbe beírt keresési lekérdezésnek.",
    valueTrue: "Olyan érték, amelyet meg kell menteni a felmérés eredményeiben, amikor a válaszadók pozitív választ adnak.",
    valueFalse: "A felmérés eredményeiben mentendő érték, ha a válaszadók negatív választ adnak.",
    showPreview: "Nem ajánlott letiltani ezt a beállítást, mivel felülbírálja az előnézeti képet, és megnehezíti a felhasználó számára annak megértését, hogy a fájlok fel lettek-e töltve.",
    needConfirmRemoveFile: "A fájl törlésének megerősítését kérő üzenet jelenik meg.",
    selectToRankEnabled: "Engedélyezésével csak a kiválasztott választásokat rangsorolhatja. A felhasználók a kiválasztott elemeket az adatválaszték-listából húzzák, hogy a rangsorolási területen belül rendezzék őket.",
    dataList: "Adja meg azoknak a választási lehetőségeknek a listáját, amelyeket a rendszer javasolni fog a válaszadónak a bevitel során.",
    inputSize: "A beállítás csak a beviteli mezőket méretezi át, és nincs hatással a kérdésmező szélességére.",
    itemTitleWidth: "Egységes szélességet állít be az összes cikkfelirathoz. CSS-értékeket fogad el (px, %, in, pt stb.).",
    inputTextAlignment: "Válassza ki, hogyan szeretné igazítani a bemeneti értéket a mezőn belül. Az alapértelmezett \"Automatikus\" beállítás a bemeneti értéket jobbra igazítja, ha pénznem vagy numerikus maszkolás van alkalmazva, és balra, ha nem.",
    altText: "Helyettesítőként szolgál, ha a kép nem jeleníthető meg a felhasználó eszközén, valamint kisegítő lehetőségek céljából.",
    rateColorMode: "Meghatározza a kiválasztott hangulatjel színét, ha az Értékelés ikon típusa \"Hangulatjelek\". Válasszon a következők közül: \"Alapértelmezett\" - a kiválasztott hangulatjel alapértelmezett felmérési színben jelenik meg; \"Skála\" - a kiválasztott hangulatjel örökli a színt a minősítési skálától.",
    expression: {
      name: "Olyan kifejezésazonosító, amely nem látható a válaszadók számára.",
      description: "Írja be a kifejezés alcímét.",
      expression: "A kifejezések tartalmazhatnak alapvető számításokat ('{q1_id} + {q2_id}'), feltételeket ('{age} > 60') és függvényeket ('iif()', 'today()', 'age()', 'min()', 'max()', 'avg()' stb.)."
    },
    storeOthersAsComment: "Válassza ezt a lehetőséget, ha az \"Egyéb\" beállítás értékét külön tulajdonságként szeretné tárolni a felmérés eredményeiben.",
    format: "Használja {0} a tényleges érték helyőrzőjeként.",
    acceptedTypes: "További információt az [accept](https://www.w3schools.com/tags/att_input_accept.asp) attribútum leírásában talál.",
    columnColCount: "Csak a Radiogroup és a Checkbox cellatípusokra vonatkozik.",
    autocomplete: "További információkért tekintse meg az [autocomplete](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete) attribútum leírását.",
    filePlaceholder: "Akkor érvényes, ha a \"Forrás típusa\" \"Helyi fájlok\", vagy ha a kamera nem érhető el",
    photoPlaceholder: "Akkor érvényes, ha a \"Forrás típusa\" a \"Kamera\".",
    fileOrPhotoPlaceholder: "Akkor érvényes, ha a \"Forrás típusa\" értéke \"Helyi fájlok vagy kamera\".",
    colCount: "Az adatválaszték-beállításokat többoszlopos elrendezésbe rendezi. Ha 0-ra van állítva, a beállítások egyetlen sorban jelennek meg.",
    masksettings: {
      saveMaskedValue: "Válassza ki, ha a kérdés értékét alkalmazott maszkkal szeretné tárolni a felmérés eredményeiben."
    },
    patternmask: {
      pattern: "A minta karakterlánc-konstansokat és a következő helyőrzőket tartalmazhatja: \"9\" - egy számjegyhez; \"a\" - kis- vagy nagybetű esetében; '#' - számjegy vagy kis- vagy nagybetű. A fordított perjel használata \"\\\" a karakter elhagyásához."
    },
    datetimemask: {
      pattern: "A minta elválasztó karaktereket és a következő helyőrzőket tartalmazhatja:<br>'m' - Hónap száma.<br>\"mm\" – A hónap száma, az első nullával az egyjegyű értékek esetében. <br>'d' - a hónap napja. <br>'dd' – A hónap napja, az első nullával az egyjegyű értékek esetében. <br>\"yy\" – Az év utolsó két számjegye. <br>\"yyyy\" – négy számjegyű évszám. <br>\"H\" – órák száma 24 órás formátumban. <br>'HH' – Órák 24 órás formátumban, az első nullával az egyjegyű értékek esetében. <br>\"h\" – órák száma 12 órás formátumban. <br>'hh' – Órák 12 órás formátumban, az első nullával az egyjegyű értékek esetében. <br>\"MM\" - perc. <br>'ss' - másodperc. <br>\"TT\" – 12 órás időszámítás nagybetűvel (AM/PM). <br>\"tt\" - 12 órás időtartam kisbetűvel (am/pm)."
    },
    numericmask: {
      decimalSeparator: "A törtrész és a megjelenített szám egész részének elválasztására szolgáló szimbólum.",
      thousandsSeparator: "Egy szimbólum, amely nagy szám számjegyeit három csoportba sorolja.",
      precision: "Korlátozza, hogy hány számjegy maradjon meg a megjelenített szám tizedesvesszője után."
    },
    currencymask: {
      prefix: "Egy vagy több szimbólum jelenik meg az érték előtt.",
      suffix: "Egy vagy több szimbólum jelenik meg az érték után."
    },
    theme: {
      isPanelless: "Ez a beállítás csak a panelen kívüli kérdésekre vonatkozik.",
      primaryColor: "Beállít egy kiegészítő színt, amely kiemeli a földmérés legfontosabb elemeit.",
      panelBackgroundTransparency: "Beállítja a panelek és kérdésmezők átlátszóságát a felmérés hátteréhez képest.",
      questionBackgroundTransparency: "Beállítja a bemeneti elemek átlátszóságát a földmérési háttérhez képest.",
      cornerRadius: "Beállítja az összes téglalap alakú elem saroksugarát. Engedélyezze a Speciális módot, ha egyedi sarokrádiuszértékeket szeretne beállítani a bemeneti elemekhez vagy panelekhez és kérdésmezőkhöz.",
      "--sjs-general-backcolor-dim": "Beállítja a felmérés fő háttérszínét."
    },
    header: {
      inheritWidthFrom: "Az \"Ugyanaz, mint a tároló\" beállítás automatikusan beállítja a fejléc tartalomterületének szélességét, hogy illeszkedjen ahhoz a HTML-elemhez, amelybe a felmérés kerül.",
      textAreaWidth: "A felmérés címét és leírását tartalmazó fejlécterület szélessége képpontban mérve.",
      overlapEnabled: "Ha engedélyezve van, a felmérés teteje átfedi a fejléc alját.",
      mobileHeight: "Ha 0-ra van állítva, a magasság automatikusan kiszámításra kerül, hogy elférjen a fejléc tartalma."
    },
    progressBarInheritWidthFrom: "Az \"Ugyanaz, mint a tároló\" opció automatikusan beállítja a folyamatjelző sáv területének szélességét, hogy illeszkedjen ahhoz a HTML-elemhez, amelybe a felmérés kerül."
  },
  // Properties
  p: {
    title: {
      name: "Cím",
      title: "Hagyja üresen, ha megegyezik a 'Megnevezés'-el"
    },
    multiSelect: "Többszörös kijelölés engedélyezése",
    showLabel: "Képfeliratok megjelenítése",
    swapOrder: "Az Igen és a Nem sorrendjének felcserélése",
    value: "Érték",
    tabAlign: "Tabulátorigazítás",
    sourceType: "Forrás típusa",
    fitToContainer: "Tárolóhoz igazítás",
    setValueExpression: "Értékkifejezés beállítása",
    description: "Leírás",
    logoFit: "Logó illeszkedés",
    pages: "Oldalak",
    questions: "Kérdések",
    triggers: "Eseményvezérlők",
    calculatedValues: "Számított értékek",
    surveyId: "Felmérés azonosítója",
    surveyPostId: "Felmérés bejegyzésének azonosítója",
    surveyShowDataSaving: "A felmérés adatmentést mutat",
    questionDescriptionLocation: "Kérdés leírása, helye",
    progressBarType: "Folyamatjelző sáv típusa",
    showTOC: "Tartalomjegyzék megjelenítése",
    tocLocation: "Tartalomjegyzék helye",
    questionTitlePattern: "Kérdés címének mintája",
    widthMode: "Szélesség mód",
    showBrandInfo: "Márkainformációk megjelenítése",
    useDisplayValuesInDynamicTexts: "Megjelenítési értékek használata dinamikus szövegekben",
    visibleIf: "Látható ha",
    defaultValueExpression: "Alapértelmezett értékkifejezés",
    requiredIf: "Kötelező ha",
    resetValueIf: "Érték visszaállítása, ha",
    setValueIf: "Érték beállítása, ha",
    validators: "Validátorok",
    bindings: "Kötések",
    renderAs: "Renderelés mint",
    attachOriginalItems: "Eredeti elemek csatolása",
    choices: "Lehetőségek",
    choicesByUrl: "Lehetőségek a webről",
    currency: "Pénz",
    cellHint: "Cella-tipp",
    totalMaximumFractionDigits: "Törtszámjegyek teljes száma",
    totalMinimumFractionDigits: "Minimális törtszámjegyek összesen",
    columns: "Oszlopok",
    detailElements: "Részletelemek",
    allowAdaptiveActions: "Adaptív műveletek engedélyezése",
    defaultRowValue: "Sor alapértelmezett értéke",
    detailPanelShowOnAdding: "A részletek panel megjelenítése hozzáadáskor",
    choicesLazyLoadEnabled: "Választási lehetőségek lusta betöltés engedélyezve",
    choicesLazyLoadPageSize: "Választási lehetőségek lusta betöltési oldalméret",
    inputFieldComponent: "Beviteli mező összetevő",
    itemComponent: "Elem összetevő",
    min: "Min",
    max: "Max",
    minValueExpression: "Minimális érték kifejezése",
    maxValueExpression: "Max. érték kifejezés",
    step: "Lépés",
    dataList: "Adatlista",
    inputSize: "Elem mérete",
    itemTitleWidth: "Elemcímke szélessége (képpontban)",
    inputTextAlignment: "Bemeneti érték igazítása",
    elements: "Elemek",
    content: "Tartalom",
    navigationTitle: "Navigációs cím",
    navigationDescription: "Navigáció leírása",
    longTap: "Hosszú koppintás",
    autoGrow: "Automatikus növekedés",
    allowResize: "Átméretezés engedélyezése",
    acceptCarriageReturn: "Kocsivissza elfogadása",
    displayMode: "Megjelenítési mód",
    rateType: "Ár típusa",
    label: "Cimke",
    contentMode: "Tartalom mód",
    imageFit: "Kép illeszkedése",
    altText: "Helyettesítő szöveg",
    height: "Magasság",
    mobileHeight: "Magasság az okostelefonokon",
    penColor: "Toll színe",
    backgroundColor: "Háttérszín",
    templateElements: "Sablon elemek",
    operator: "Operátor",
    isVariable: "Változó",
    runExpression: "Kifejezés futtatása",
    showCaption: "Felirat megjelenítése",
    iconName: "Ikon neve",
    iconSize: "Ikon mérete",
    precision: "Precizitás",
    matrixDragHandleArea: "Mátrix húzófogantyújának területe",
    backgroundImage: "Háttérkép",
    backgroundImageFit: "Háttérkép illesztése",
    backgroundImageAttachment: "Háttérkép melléklet",
    backgroundOpacity: "Háttér átlátszatlansága",
    selectToRankEnabled: "Válassza ki a rangsorolás engedélyezéséhez",
    selectToRankAreasLayout: "Válassza ki a területek elrendezésének rangsorolásához",
    selectToRankEmptyRankedAreaText: "Megjelenítendő szöveg, ha az összes beállítás ki van jelölve",
    selectToRankEmptyUnrankedAreaText: "A rangsorolási terület helyőrző szövege",
    allowCameraAccess: "Kamera-hozzáférés engedélyezése",
    scaleColorMode: "Színmód méretezése",
    rateColorMode: "Értékelje a színmódot",
    copyDisplayValue: "Megjelenített érték másolása",
    effectiveColSpan: "Oszlop fesztávolsága",
    progressBarInheritWidthFrom: "A folyamatjelző sáv területének szélessége"
  },
  theme: {
    advancedMode: "Speciális mód",
    pageTitle: "Oldalcím betűtípusa",
    questionTitle: "Kérdés címének betűtípusa",
    editorPanel: "Bemeneti elem",
    lines: "Sorok",
    primaryDefaultColor: "Alapértelmezett",
    primaryDarkColor: "Lebeg",
    primaryLightColor: "Kiválasztott",
    backgroundDimColor: "Háttérszín",
    cornerRadius: "Sarok sugara",
    backcolor: "Alapértelmezett háttér",
    hovercolor: "Háttér rámutatása",
    borderDecoration: "Szegély dekoráció",
    fontColor: "Betűszín",
    backgroundColor: "Háttérszín",
    primaryForecolor: "Alapértelmezett szín",
    primaryForecolorLight: "Letiltott szín",
    font: "Betűkészlet",
    borderDefault: "Sötétebb",
    borderLight: "Öngyújtó",
    fontFamily: "Betűcsalád",
    fontWeightRegular: "Rendszeres",
    fontWeightHeavy: "Nehéz",
    fontWeightSemiBold: "Félig félkövér",
    fontWeightBold: "Merész",
    color: "Szín",
    placeholderColor: "Helyőrző színe",
    size: "Méret",
    opacity: "Átlátszatlanság",
    boxShadowX: "X",
    boxShadowY: "Y",
    boxShadowAddRule: "Árnyékhatás hozzáadása",
    boxShadowBlur: "Elken",
    boxShadowSpread: "Terjedés",
    boxShadowDrop: "Csepp",
    boxShadowInner: "Belső",
    names: {
      default: "Alapértelmezett",
      sharp: "Éles",
      borderless: "Szegély nélküli",
      flat: "Lapos",
      plain: "Síkság",
      doubleborder: "Dupla szegély",
      layered: "Rakott",
      solid: "Szilárd",
      threedimensional: ".3D",
      contrast: "Kontraszt"
    },
    colors: {
      teal: "Kékeszöld",
      blue: "Kék",
      purple: "Lila",
      orchid: "Orchidea",
      tulip: "Tulipán",
      brown: "Barna",
      green: "Zöld",
      gray: "Szürke"
    }
  },
  creatortheme: {
    "--sjs-special-background": "Felület háttér",
    "--sjs-primary-background-500": "Elsődleges",
    "--sjs-secondary-background-500": "Másodlagos",
    surfaceScale: "Felület",
    userInterfaceBaseUnit: "Felhasználói felület",
    fontScale: "Betűkészlet",
    names: {
      sc2020: "Felmérés készítője 2020",
      "default-light": "Fény",
      "default-dark": "Sötét",
      "default-contrast": "Kontraszt"
    }
  }
};
setupLocale({ localeCode: "hu", strings: huStrings });

// The following strings have been translated by a machine translation service
// Remove those strings that you have corrected manually
// survey.addLogicItem: "Create a rule to customize the flow of the survey." => "Hozzon létre egy szabályt a felmérés folyamatának testreszabásához."
// survey.duplicate: "Duplicate" => "Ismétlődő"
// qt.ranking: "Ranking" => "Rangú"
// qt.image: "Image" => "Kép"
// qt.tagbox: "Multi-Select Dropdown" => "Többszörös kijelölés legördülő menü"
// qt.signaturepad: "Signature" => "Aláírás"
// qt.buttongroup: "Button Group" => "Gombcsoport"
// ed.settingsTooltip: "Open settings" => "Nyissa meg a beállításokat"
// ed.surveySettings: "Survey Settings" => "Földmérési beállítások"
// ed.surveySettingsTooltip: "Open survey settings" => "Nyissa meg a felmérési beállításokat"
// ed.showPanel: "Show Panel" => "Panel megjelenítése"
// ed.hidePanel: "Hide Panel" => "Panel elrejtése"
// ed.prevSelected: "Select previous" => "Előző kiválasztása"
// ed.nextSelected: "Select next" => "Válassza a következőt"
// ed.surveyTypeName: "Survey" => "Felmérés"
// ed.pageTypeName: "Page" => "Oldal"
// ed.panelTypeName: "Panel" => "Panel"
// ed.questionTypeName: "Question" => "Kérdés"
// ed.columnTypeName: "Column" => "Oszlop"
// ed.themeSurvey: "Themes" => "Témák"
// ed.defaultV2Theme: "Default" => "Alapértelmezett"
// ed.modernTheme: "Modern" => "Modern"
// ed.defaultTheme: "Default (legacy)" => "Alapértelmezett (örökölt)"
// ed.navigateToMsg: "You had to navigate to" => "Navigálnia kellett"
// ed.logic: "Logic" => "Logika"
// ed.saveSurveyTooltip: "Save Survey" => "Felmérés mentése"
// ed.jsonHideErrors: "Hide errors" => "Hibák elrejtése"
// ed.jsonShowErrors: "Show errors" => "Hibák megjelenítése"
// ed.undoTooltip: "Undo last change" => "Utolsó módosítás visszavonása"
// ed.redoTooltip: "Redo the change" => "Ismételje meg a módosítást"
// ed.showMoreChoices: "Show more" => "Bővebben"
// ed.showLessChoices: "Show less" => "Rövidebben"
// ed.copy: "Copy" => "Másolat"
// ed.cut: "Cut" => "Vág"
// ed.paste: "Paste" => "Paszta"
// ed.copyTooltip: "Copy selection to clipboard" => "Kijelölés másolása a vágólapra"
// ed.cutTooltip: "Cut selection to clipboard" => "Kijelölés kivágása a vágólapra"
// ed.pasteTooltip: "Paste from clipboard" => "Beillesztés vágólapról"
// ed.property-grid: "Properties" => "Kellékek"
// ed.propertyGridFilteredTextPlaceholder: "Type to search..." => "Írja be a kereséshez..."
// ed.toolboxChoiceCategory: "Choice Questions" => "Választási kérdések"
// ed.toolboxTextCategory: "Text Input Questions" => "Szövegbeviteli kérdések"
// ed.toolboxContainersCategory: "Containers" => "Konténerek"
// ed.toolboxMatrixCategory: "Matrix Questions" => "Mátrix kérdések"
// ed.toolboxMiscCategory: "Misc" => "Misc"
// ed.propertyEditorError: "Error" => "Hiba"
// ed.translationPropertyGridTitle: "Language Settings" => "Nyelvi beállítások"
// ed.themePropertyGridTitle: "Theme Settings" => "Téma beállítások"
// ed.translationLanguages: "Languages" => "Nyelvek"
// ed.translationShowUsedStringsOnly: "Used Strings Only" => "Csak használt karakterláncok"
// ed.translationPlaceHolder: "Translation..." => "Fordítás..."
// ed.themeExportButton: "Export" => "Kivitel"
// ed.themeImportButton: "Import" => "Importál"
// ed.selectPage: "Select page..." => "Válasszon oldalt..."
// ed.carryForwardChoicesCopied: "Choices are copied from" => "A választási lehetőségek másolása innen történik"
// ed.htmlPlaceHolder: "HTML content will be here." => "A HTML tartalom itt lesz."
// ed.panelPlaceHolder: "Drop a question from the toolbox here." => "Itt dobjon el egy kérdést az eszköztárból."
// ed.surveyPlaceHolder: "The survey is empty. Drag an element from the toolbox or click the button below." => "A felmérés üres. Húzzon egy elemet az eszköztárról, vagy kattintson az alábbi gombra."
// ed.imagePlaceHolder: "Drag and drop an image here or click the button below and choose an image to upload" => "Húzzon ide egy képet, vagy kattintson az alábbi gombra, és válassza ki a feltölteni kívánt képet"
// ed.imageChooseImage: "Choose Image" => "Válassza a Kép lehetőséget"
// ed.addNewTypeQuestion: "Add {0}" => "{0} hozzáadása"
// ed.chooseLogoPlaceholder: "[LOGO]" => "[LOGÓ]"
// ed.auto: "auto" => "kocsi"
// ed.choices_Item: "Item " => "Cikk "
// lg.addNewItem: "Add New Rule" => "Új szabály hozzáadása"
// lg.empty_tab: "Create a rule to customize the flow of the survey." => "Hozzon létre egy szabályt a felmérés folyamatának testreszabásához."
// lg.page_visibilityName: "Show (hide) page" => "Oldal megjelenítése (elrejtése)"
// lg.page_enableName: "Enable (disable) page" => "Oldal engedélyezése (letiltása)"
// lg.panel_visibilityName: "Show (hide) panel" => "Panel megjelenítése (elrejtése)"
// lg.panel_enableName: "Enable (disable) panel" => "Panel engedélyezése (letiltása)"
// lg.question_visibilityName: "Show (hide) question" => "Kérdés megjelenítése (elrejtése)"
// lg.question_enableName: "Enable (disable) question" => "Kérdés engedélyezése (letiltása)"
// lg.question_requireName: "Make question required" => "Kérdés feltevése kötelező"
// lg.column_visibilityName: "Show (hide) column" => "Oszlop megjelenítése (elrejtése)"
// lg.column_enableName: "Enable (disable) column" => "Oszlop engedélyezése (letiltása)"
// lg.column_requireName: "Make column required" => "Oszlop kötelezővé tétele"
// lg.trigger_completeName: "Complete survey" => "Teljes felmérés"
// lg.trigger_setvalueName: "Set answer" => "Válasz beállítása"
// lg.trigger_copyvalueName: "Copy answer" => "Válasz másolása"
// lg.trigger_skipName: "Skip to question" => "Ugrás a kérdésre"
// lg.trigger_runExpressionName: "Run expression" => "Kifejezés futtatása"
// lg.completedHtmlOnConditionName: "Set \"Survey Complete\" page markup" => "A \"Felmérés kész\" oldaljelölés beállítása"
// lg.page_visibilityDescription: "Make the page visible when the logic expression returns true. Otherwise keep it invisible." => "Tegye láthatóvá az oldalt, ha a logikai kifejezés igaz értéket ad vissza. Ellenkező esetben tartsa láthatatlanul."
// lg.panel_visibilityDescription: "Make the panel visible when the logic expression returns true. Otherwise keep it invisible." => "Tegye láthatóvá a panelt, ha a logikai kifejezés igaz értéket ad vissza. Ellenkező esetben tartsa láthatatlanul."
// lg.panel_enableDescription: "Make the panel, and all elements inside it, enable when the logic expression returns true. Otherwise keep them disabled." => "Engedélyezze a panelt és a benne lévő összes elemet, ha a logikai kifejezés igaz értéket ad vissza. Ellenkező esetben tartsa őket letiltva."
// lg.question_visibilityDescription: "Make the question visible when the logic expression returns true. Otherwise keep it invisible." => "Tegye láthatóvá a kérdést, ha a logikai kifejezés igaz értéket ad vissza. Ellenkező esetben tartsa láthatatlanul."
// lg.question_enableDescription: "Make the question enable when the logic expression returns true. Otherwise keep it disabled." => "Engedélyezze a kérdést, ha a logikai kifejezés igaz értéket ad vissza. Ellenkező esetben tartsa letiltva."
// lg.question_requireDescription: "Question becomes required when the logic expression returns true." => "A kérdés akkor válik kötelezővé, ha a logikai kifejezés igaz értéket ad vissza."
// lg.trigger_completeDescription: "When the logic expression returns true then the survey becomes completed and an end-user see the 'Thank you page'." => "Amikor a logikai kifejezés igaz értéket ad vissza, a felmérés befejeződik, és a végfelhasználó a \"Köszönöm oldalt\" látja."
// lg.trigger_setvalueDescription: "When question values, that are used in the logic expression, are changed and the logic expression returns true, then the value is set to the selected question." => "Ha a logikai kifejezésben használt kérdésértékek megváltoznak, és a logikai kifejezés igaz értéket ad vissza, akkor az érték a kiválasztott kérdésre lesz beállítva."
// lg.trigger_copyvalueDescription: "When question values, that are used in the logic expression, are changed and the logic expression returns true, then the value of one selected question is copied to another selected question." => "Ha a logikai kifejezésben használt kérdésértékek megváltoznak, és a logikai kifejezés igaz értéket ad vissza, akkor az egyik kiválasztott kérdés értéke átmásolódik egy másik kijelölt kérdésbe."
// lg.trigger_skipDescription: "When the logic expression returns true then the survey skip to / focus the selected question." => "Ha a logikai kifejezés igaz értéket ad vissza, akkor a felmérés a kiválasztott kérdésre ugrik/fókuszál."
// lg.trigger_runExpressionDescription: "When the logic expression returns true, then the custom expression is performed. You may optionally set this expression result into the selected question" => "Ha a logikai kifejezés igaz értéket ad vissza, a rendszer végrehajtja az egyéni kifejezést. Ezt a kifejezéseredményt opcionálisan beállíthatja a kiválasztott kérdésbe"
// lg.completedHtmlOnConditionDescription: "If the logic expression returns true, then the default text for the 'Thank you page' is changed to the given one." => "Ha a logikai kifejezés igaz értéket ad vissza, akkor a \"Köszönöm oldal\" alapértelmezett szövege a megadott szövegre változik."
// lg.itemExpressionText: "When expression: '{0}' returns true" => "Amikor a kifejezés: \"{0}\" igaz értéket ad vissza"
// lg.itemEmptyExpressionText: "New rule" => "Új szabály"
// lg.page_visibilityText: "make page {0} visible" => "Az oldal {0} láthatóvá tétele"
// lg.panel_visibilityText: "make panel {0} visible" => "A panel {0} láthatóvá tétele"
// lg.panel_enableText: "make panel {0} enable" => "A panel {0} engedélyezése"
// lg.question_visibilityText: "make question {0} visible" => "tegye láthatóvá a {0} kérdést"
// lg.question_enableText: "make question {0} enable" => "Kérdés {0} engedélyezése"
// lg.question_requireText: "make question {0} required" => "Tegye fel a kérdést {0} szükséges"
// lg.column_visibilityText: "make column {0} of question {1} visible" => "A {1}. kérdés {0} oszlopának láthatóvá tétele"
// lg.column_enableText: "make column {0} of question {1} enable" => "A kérdés {0} oszlopának engedélyezése {1} engedélyezése"
// lg.column_requireText: "make column {0} of question {1} required" => "Tegye kötelezővé a kérdés {0} oszlopát {1}"
// lg.trigger_completeText: "survey becomes completed" => "A felmérés befejeződött"
// lg.trigger_setvalueText: "set into question: {0} value {1}" => "Kérdéses érték: {0} érték {1}"
// lg.trigger_setvalueEmptyText: "clear question value: {0}" => "Egyértelmű kérdésérték: {0}"
// lg.trigger_copyvalueText: "copy into question: {0} value from question {1}" => "Másolás kérdésbe: {0} kérdés értéke {1}"
// lg.trigger_skipText: "survey skip to the question {0}" => "felmérés ugrás a kérdésre {0}"
// lg.trigger_runExpressionText1: "run expression: '{0}'" => "Run kifejezés: '{0}'"
// lg.trigger_runExpressionText2: " and set its result into question: {0}" => " és megkérdőjelezi annak eredményét: {0}"
// lg.completedHtmlOnConditionText: "show custom text for the 'Thank you page'." => "egyéni szöveg megjelenítése a \"Köszönöm oldalhoz\"."
// lg.showAllQuestions: "All Questions" => "Minden kérdés"
// lg.showAllActionTypes: "All Action Types" => "Minden művelettípus"
// lg.conditions: "Condition(s)" => "Állapot(ok)"
// lg.actions: "Action(s)" => "Művelet(ek)"
// lg.expressionEditorTitle: "Define condition(s)" => "Feltétel(ek) meghatározása"
// lg.actionsEditorTitle: "Define action(s)" => "Művelet(ek) meghatározása"
// lg.deleteAction: "Delete Action" => "Művelet törlése"
// lg.addNewAction: "Add Action" => "Művelet hozzáadása"
// lg.selectedActionCaption: "Select action..." => "Válassza ki a műveletet..."
// lg.expressionInvalid: "The logic expression is empty or invalid. Please correct it." => "A logikai kifejezés üres vagy érvénytelen. Kérjük, javítsa ki."
// lg.noActionError: "Please, add at least one action." => "Kérjük, adjon hozzá legalább egy műveletet."
// lg.actionInvalid: "Please, fix problems in your action(s)." => "Kérjük, javítsa ki a problémákat a művelet(ek)ben."
// lg.uncompletedRule_title: "Logical rules are incomplete" => "A logikai szabályok hiányosak"
// lg.uncompletedRule_text: "You have not completed some of the logical rules. If you leave the tab now, the changes will be lost. Do you still want to leave the tab without completing the changes?" => "Nem teljesített néhány logikai szabályt. Ha most elhagyja a lapot, a módosítások elvesznek. Továbbra is el akarja hagyni a lapot a módosítások végrehajtása nélkül?"
// lg.uncompletedRule_apply: "Yes" => "Igen"
// lg.uncompletedRule_cancel: "No, I want to complete the rules" => "Nem, szeretném kiegészíteni a szabályokat"
// pe.save: "Save" => "Megment"
// pe.clear: "Clear" => "Világos"
// pe.saveTooltip: "Save" => "Megment"
// pe.set: "Set" => "Beállít"
// pe.change: "Change" => "Változás"
// pe.refresh: "Refresh" => "Felfrissít"
// pe.add: "Add" => "Hozzáad"
// pe.removeItem: "Click to remove the item..." => "Kattintson az elem eltávolításához..."
// pe.dragItem: "Drag the item" => "Húzza az elemet"
// pe.back: "Return without saving" => "Visszaküldés mentés nélkül"
// pe.backTooltip: "Return without saving" => "Visszaküldés mentés nélkül"
// pe.saveAndBack: "Save and return" => "Mentés és visszaküldés"
// pe.saveAndBackTooltip: "Save and return" => "Mentés és visszaküldés"
// pe.doneEditing: "Done" => "Kész"
// pe.showChoices: "Show Choices" => "Választási lehetőségek megjelenítése"
// pe.emptyValue: "Value is empty" => "Az érték üres"
// pe.fastEntryNonUniqueError: "Value '{0}' is not unique" => "A \"{0}\" érték nem egyedi"
// pe.fastEntryChoicesCountError: "Please limit the number of items from {0} to {1}" => "Kérjük, korlátozza a tételek számát {0} és {1} között"
// pe.fastEntryPlaceholder: "You can set data in the following format:\nvalue1|text\nvalue2" => "Az adatokat a következő formátumban állíthatja be:\nérték1|szöveg\nérték2"
// pe.itemSelectorEmpty: "Please select the element" => "Kérjük, válassza ki az elemet"
// pe.conditionActionEmpty: "Please select the action" => "Kérjük, válassza ki a műveletet"
// pe.conditionSelectPage: "Select page..." => "Válasszon oldalt..."
// pe.conditionSelectPanel: "Select panel..." => "Panel kiválasztása..."
// pe.showPreviewBeforeComplete: "Preview answers before submitting the survey" => "A válaszok előnézete a felmérés elküldése előtt"
// pe.overridingPropertyPrefix: "Set by " => "Állítsa be "
// pe.propertyIsNoUnique: "Please enter a unique value" => "Kérjük, adjon meg egy egyedi értéket"
// pe.propertyNameIsNotUnique: "Please enter a unique name" => "Kérjük, adjon meg egy egyedi nevet"
// pe.propertyNameIsIncorrect: "Do not use reserved words: \"item\", \"choice\", \"panel\", \"row\"." => "Ne használjon fenntartott szavakat: \"elem\", \"választás\", \"panel\", \"sor\"."
// pe.listIsEmpty: "No items have been added yet" => "Még nincsenek hozzáadott elemek"
// pe.listIsEmpty@choices: "No choices have been added yet" => "Még nincsenek választási lehetőségek hozzáadva"
// pe.addNew@choices: "Add a choice" => "Választási lehetőség hozzáadása"
// pe.expressionIsEmpty: "Expression is empty" => "A kifejezés üres"
// choicesbyurl.valueName: "Get values from the following JSON field" => "Értékek beolvasása a következő JSON-mezőből"
// pe.imageLinkName: "Get image URLs from the following JSON field" => "Képek URL-címének beolvasása a következő JSON-mezőből"
// pe.allowEmptyResponse: "Allow empty response" => "Üres válasz engedélyezése"
// pe.titlePlaceholder: "Title" => "Cím"
// pe.surveyTitlePlaceholder: "Survey Title" => "Felmérés címe"
// pe.pageTitlePlaceholder: "Page {num}" => "Oldal {num}"
// pe.descriptionPlaceholder: "Description" => "Leírás: __________"
// pe.surveyDescriptionPlaceholder: "Description" => "Leírás: __________"
// pe.pageDescriptionPlaceholder: "Description" => "Leírás: __________"
// pe.showNoneItem: "Allow the None option" => "A Nincs lehetőség engedélyezése"
// pe.noneText: "None option text" => "Nincs opció szövege"
// pe.showSelectAllItem: "Allow the Select All option" => "Az összes kijelölése lehetőség engedélyezése"
// pe.selectAllText: "Select All option text" => "Az Összes kijelölése opció szövege"
// pe.choicesMin: "Minimum value for auto-generated items" => "Az automatikusan létrehozott elemek minimális értéke"
// pe.choicesMax: "Maximum value for auto-generated items" => "Az automatikusan létrehozott elemek maximális értéke"
// pe.choicesStep: "Step for auto-generated items" => "Az automatikusan létrehozott elemek lépése"
// pe.eachRowRequired: "Require answer for all rows" => "Válasz kérése minden sorhoz"
// pe.requiredErrorText: "\"Required\" error message" => "\"Kötelező\" hibaüzenet"
// pe.cols: "Columns" => "Oszlopok"
// pe.buildExpression: "Build" => "Épít"
// pe.editExpression: "Edit" => "Szerkeszt"
// pe.and: "and" => "és"
// pe.or: "or" => "vagy"
// pe.remove: "Remove" => "Eltávolít"
// pe.addCondition: "Add Condition" => "Feltétel hozzáadása"
// pe.emptyLogicPopupMessage: "Select a question to start configuring conditions." => "Válasszon ki egy kérdést a feltételek konfigurálásának megkezdéséhez."
// pe.if: "If" => "Ha"
// pe.then: "then" => "akkor"
// pe.setToName: "Target question" => "Célkérdés"
// pe.fromName: "Question to copy answer from" => "Másolandó kérdés innen: válasz"
// pe.gotoName: "Question to skip to" => "Kérdés, amelyre ugrani kell"
// pe.ruleIsNotSet: "Rule is incorrect" => "A szabály helytelen"
// pe.includeIntoResult: "Include into survey results" => "Felvétel a felmérés eredményeibe"
// pe.expandCollapseTitle: "Expand/collapse title" => "Cím kibontása/összecsukása"
// pe.simulator: "Select device type" => "Válassza ki az eszköz típusát"
// pe.landscapeOrientation: "Switch to landscape orientation" => "Váltás fekvő tájolásra"
// pe.portraitOrientation: "Switch to portrait orientation" => "Váltás álló tájolásra"
// pe.previewText: "Preview Answers button text" => "A Válaszok előnézete gomb szövege"
// pe.editText: "Edit Answer button text" => "A Válasz gomb szövegének szerkesztése"
// image.imageHeight: "Image height (in CSS-accepted values)" => "Képmagasság (CSS által elfogadott értékekben)"
// image.imageWidth: "Image width (in CSS-accepted values)" => "Képszélesség (CSS által elfogadott értékekben)"
// page.timeLimit: "Time limit to finish the page (in seconds)" => "Az oldal befejezésének határideje (másodpercben)"
// question.page: "Parent page" => "Szülőoldal"
// pe.noEntriesText: "Empty entries text" => "Üres bejegyzések szövege"
// pe.setValue: "Answer" => "Válasz"
// pe.dataFormat: "Image format" => "Képformátum"
// pe.allowAddRows: "Allow adding rows" => "Sorok hozzáadásának engedélyezése"
// pe.allowRemoveRows: "Allow removing rows" => "Sorok eltávolításának engedélyezése"
// pe.allowRowReorder: "Allow row drag and drop" => "Sorhúzás engedélyezése"
// pe.responsiveImageSizeHelp: "Does not apply if you specify the exact image width or height." => "Nem érvényes, ha megadja a kép pontos szélességét vagy magasságát."
// pe.minImageWidth: "Minimum image width" => "Minimális képszélesség"
// pe.maxImageWidth: "Maximum image width" => "Maximális képszélesség"
// pe.minImageHeight: "Minimum image height" => "Minimális képmagasság"
// pe.maxImageHeight: "Maximum image height" => "Maximális képmagasság"
// surveyvalidator.text: "Error message" => "Hibaüzenet"
// surveyvalidator.expression: "Validation expression" => "Érvényesítési kifejezés"
// pe.totalText: "Total row text" => "Sorszöveg összesen"
// pe.totalType: "Total type" => "Teljes típus"
// pe.totalExpression: "Total expression" => "Teljes kifejezés"
// pe.totalDisplayStyle: "Total value display style" => "Teljes érték megjelenítési stílusa"
// pe.totalCurrency: "Currency" => "Valuta"
// pe.totalFormat: "Formatted string" => "Formázott karakterlánc"
// pe.logo: "Logo (URL or base64-encoded string)" => "Embléma (URL vagy base64 kódolású karakterlánc)"
// pe.questionsOnPageMode: "Survey structure" => "Felmérési struktúra"
// pe.maxTextLength: "Maximum answer length (in characters)" => "Válasz maximális hossza (karakterben)"
// pe.maxCommentLength: "Maximum comment length (in characters)" => "Megjegyzés maximális hossza (karakterben)"
// pe.autoGrowComment: "Auto-expand comment area if necessary" => "Szükség esetén automatikusan bontsa ki a megjegyzésterületet"
// pe.allowResizeComment: "Allow users to resize text areas" => "A szövegterületek átméretezésének engedélyezése a felhasználók számára"
// pe.textUpdateMode: "Update text question value" => "Szöveges kérdés értékének frissítése"
// pe.autoFocusFirstError: "Set focus on the first invalid answer" => "Fókusz beállítása az első érvénytelen válaszra"
// pe.checkErrorsMode: "Run validation" => "Érvényesítés futtatása"
// pe.navigateToUrl: "Navigate to URL" => "Navigálás az URL-hez"
// pe.navigateToUrlOnCondition: "Dynamic URL" => "Dinamikus URL"
// pe.completedBeforeHtml: "Markup to show if the user already filled out this survey" => "Jelölés annak jelzésére, hogy a felhasználó kitöltötte-e már ezt a felmérést"
// pe.completedHtml: "Survey Complete page markup" => "Felmérés teljes oldaljelölése"
// pe.completedHtmlOnCondition: "Dynamic Survey Complete page markup" => "Dinamikus felmérés teljes oldaljelölése"
// pe.loadingHtml: "Markup to show while survey model is loading" => "A földmérési modell betöltése közben megjelenítendő jelölés"
// pe.commentText: "Comment area text" => "Megjegyzés terület szövege"
// pe.autocomplete: "Autocomplete type" => "Automatikus kiegészítés típusa"
// pe.labelTrue: "\"True\" label" => "\"Igaz\" címke"
// pe.labelFalse: "\"False\" label" => "\"Hamis\" címke"
// pe.allowClear: "Show the Clear button" => "A Törlés gomb megjelenítése"
// pe.displayStyle: "Value display style" => "Értékmegjelenítési stílus"
// pe.format: "Formatted string" => "Formázott karakterlánc"
// pe.maximumFractionDigits: "Maximum fractional digits" => "Tört számjegyek maximális száma"
// pe.minimumFractionDigits: "Minimum fractional digits" => "Minimális tört számjegyek"
// pe.useGrouping: "Display grouping separators" => "Csoportosítási elválasztók megjelenítése"
// pe.allowMultiple: "Allow multiple files" => "Több fájl engedélyezése"
// pe.allowImagesPreview: "Preview images" => "Képek előnézete"
// pe.acceptedTypes: "Accepted file types" => "Elfogadott fájltípusok"
// pe.waitForUpload: "Wait for the upload to complete" => "Várja meg, amíg a feltöltés befejeződik"
// pe.needConfirmRemoveFile: "Confirm file deletion" => "Fájltörlés megerősítése"
// pe.detailPanelMode: "Detail panel location" => "A részletek panel helye"
// pe.minRowCount: "Minimum row count" => "Sorszám minimális száma"
// pe.maxRowCount: "Maximum row count" => "Sorszám maximális száma"
// pe.confirmDelete: "Confirm row deletion" => "Sor törlésének megerősítése"
// pe.confirmDeleteText: "Confirmation message" => "Megerősítő üzenet"
// paneldynamic.confirmDelete: "Confirm panel deletion" => "Panel törlésének megerősítése"
// pe.panelCount: "Initial panel count" => "Kezdeti panelszám"
// pe.minPanelCount: "Minimum panel count" => "Panelek minimális száma"
// pe.maxPanelCount: "Maximum panel count" => "Panelek maximális száma"
// pe.panelsState: "Inner panel expand state" => "Belső panel kibontási állapota"
// pe.templateDescription: "Description template" => "Leíró sablon"
// pe.templateTitle: "Title template" => "Cím sablon"
// pe.prevPanelText: "Previous Panel button tooltip" => "Előző Panel gomb eszköztipp"
// pe.nextPanelText: "Next Panel button tooltip" => "Következő Panel gomb elemleírása"
// pe.showRangeInProgress: "Show progress bar" => "Folyamatjelző sáv megjelenítése"
// pe.templateQuestionTitleLocation: "Question title location" => "Kérdés címének helye"
// pe.removePanelButtonLocation: "Remove Panel button location" => "A Panel gomb helyének eltávolítása"
// pe.hideIfRowsEmpty: "Hide the question if there are no rows" => "A kérdés elrejtése, ha nincsenek sorok"
// pe.hideColumnsIfEmpty: "Hide columns if there are no rows" => "Oszlopok elrejtése, ha nincsenek sorok"
// pe.rateValues: "Custom rate values" => "Egyéni díjértékek"
// pe.rateCount: "Rate count" => "Árak száma"
// pe.autoGenerate: "How to specify rate values?" => "Hogyan lehet megadni a díjértékeket?"
// pe.hideIfChoicesEmpty: "Hide the question if it contains no choices" => "A kérdés elrejtése, ha nem tartalmaz választási lehetőségeket"
// pe.hideNumber: "Hide question number" => "Kérdés számának elrejtése"
// pe.minWidth: "Minimum width (in CSS-accepted values)" => "Minimális szélesség (CSS által elfogadott értékekben)"
// pe.maxWidth: "Maximum width (in CSS-accepted values)" => "Maximális szélesség (CSS által elfogadott értékekben)"
// pe.width: "Width (in CSS-accepted values)" => "Szélesség (CSS által elfogadott értékekben)"
// pe.showHeader: "Show column headers" => "Oszlopfejlécek megjelenítése"
// pe.horizontalScroll: "Show horizontal scrollbar" => "Vízszintes görgetősáv megjelenítése"
// pe.columnMinWidth: "Minimum column width (in CSS-accepted values)" => "Minimális oszlopszélesség (CSS által elfogadott értékekben)"
// pe.rowTitleWidth: "Row header width (in CSS-accepted values)" => "Sorfejléc szélessége (CSS által elfogadott értékekben)"
// pe.valueTrue: "\"True\" value" => "\"Igaz\" érték"
// pe.valueFalse: "\"False\" value" => "\"Hamis\" érték"
// pe.minErrorText: "\"Value is below minimum\" error message" => "\"Az érték a minimális érték alatt van\" hibaüzenet"
// pe.maxErrorText: "\"Value exceeds maximum\" error message" => "\"Az érték meghaladja a maximumot\" hibaüzenet"
// pe.otherErrorText: "\"Empty comment\" error message" => "\"Üres megjegyzés\" hibaüzenet"
// pe.keyDuplicationError: "\"Non-unique key value\" error message" => "\"Nem egyedi kulcsérték\" hibaüzenet"
// pe.minSelectedChoices: "Minimum selected choices" => "Minimálisan kiválasztott választási lehetőségek"
// pe.maxSelectedChoices: "Maximum selected choices" => "Maximális kijelölt választási lehetőségek"
// pe.showNumber: "Show panel number" => "Panelszám megjelenítése"
// pe.logoWidth: "Logo width (in CSS-accepted values)" => "Embléma szélessége (CSS által elfogadott értékekben)"
// pe.logoHeight: "Logo height (in CSS-accepted values)" => "Logó magassága (CSS által elfogadott értékekben)"
// pe.readOnly: "Read-only" => "Csak olvasható"
// pe.enableIf: "Editable if" => "Szerkeszthető, ha"
// pe.noRowsText: "\"No rows\" message" => "\"Nincsenek sorok\" üzenet"
// pe.size: "Input field size (in characters)" => "Beviteli mező mérete (karakterben)"
// pe.separateSpecialChoices: "Separate special choices (None, Other, Select All)" => "Külön speciális választási lehetőségek (Nincs, Egyéb, Összes kijelölése)"
// pe.choicesFromQuestion: "Copy choices from the following question" => "Másolja ki a következő kérdés választási lehetőségeit"
// pe.choicesFromQuestionMode: "Which choices to copy?" => "Milyen lehetőségeket másoljon?"
// pe.showCommentArea: "Show the comment area" => "A megjegyzésterület megjelenítése"
// pe.commentPlaceholder: "Comment area placeholder" => "Megjegyzés terület helyőrzője"
// pe.displayRateDescriptionsAsExtremeItems: "Display rate descriptions as extreme values" => "Sebességleírások megjelenítése extrém értékként"
// pe.rowOrder: "Row order" => "Sorsorrend"
// pe.columnsLayout: "Column layout" => "Oszlopelrendezés"
// pe.columnColCount: "Nested column count" => "Beágyazott oszlopok száma"
// pe.state: "Panel expand state" => "Panel kibontási állapota"
// pe.correctAnswer: "Correct Answer" => "Helyes válasz"
// pe.defaultPanelValue: "Default Values" => "Alapértelmezett értékek"
// pe.cells: "Cell Texts" => "Cella szövegek"
// pe.keyName: "Key column" => "Fő oszlop"
// itemvalue.text: "Alt text" => "Helyettesítő szöveg"
// pe.logoPosition: "Logo position" => "Logó pozíciója"
// pe.addLogo: "Add logo..." => "Logó hozzáadása..."
// pe.changeLogo: "Change logo..." => "Logó módosítása..."
// logoPositions.none: "Remove logo" => "Embléma eltávolítása"
// logoPositions.left: "Left" => "Balra"
// logoPositions.right: "Right" => "Jobbra"
// logoPositions.top: "On the top" => "A tetején"
// logoPositions.bottom: "In the bottom" => "Alul"
// tabs.numbering: "Numbering" => "Számozás"
// tabs.pages: "Pages" => "Oldalak"
// tabs.calculatedValues: "Calculated Values" => "Számított értékek"
// tabs.totals: "Totals" => "Összegek"
// tabs.logic: "Logic" => "Logika"
// tabs.layout: "Layout" => "Elrendezés"
// tabs.data: "Data" => "Adat"
// tabs.validation: "Validation" => "Érvényesítés"
// tabs.cells: "Cell Texts" => "Cella szövegek"
// tabs.showOnCompleted: "Survey Complete" => "Felmérés kész"
// tabs.logo: "Logo in Survey Title" => "Embléma a felmérés címében"
// tabs.slider: "Slider" => "Csúszka"
// tabs.expression: "Expression" => "Kifejezés"
// tabs.others: "Others" => "Mások"
// pe.choicesVisibleIf: "Choices are visible if" => "A választási lehetőségek akkor láthatók, ha"
// pe.choicesEnableIf: "Choices are selectable if" => "A választási lehetőségek akkor választhatók ki, ha"
// pe.columnsEnableIf: "Columns are visible if" => "Az oszlopok akkor láthatók, ha"
// pe.rowsEnableIf: "Rows are visible if" => "A sorok akkor láthatók, ha"
// pe.indent: "Add indents" => "Behúzások hozzáadása"
// panel.indent: "Add outer indents" => "Külső behúzások hozzáadása"
// pe.innerIndent: "Add inner indents" => "Belső behúzások hozzáadása"
// pe.titleKeyboardAdornerTip: "Press enter button to edit" => "Nyomja meg az Enter gombot a szerkesztéshez"
// pe.keyboardAdornerTip: "Press enter button to edit item, press delete button to delete item, press alt plus arrow up or arrow down to move item" => "Nyomja meg az Enter gombot az elem szerkesztéséhez, nyomja meg a törlés gombot az elem törléséhez, nyomja meg az alt plusz felfelé vagy lefelé mutató nyilat az elem áthelyezéséhez"
// pe.triggerGotoName: "Go to the question" => "Tovább a kérdéshez"
// pe.triggerRunExpressionEmpty: "Please enter a valid expression" => "Kérjük, adjon meg egy érvényes kifejezést"
// pe.emptyExpressionPlaceHolder: "Type expression here..." => "Írja be ide a kifejezést..."
// pe.noFile: "No file choosen" => "Nincs kiválasztott fájl"
// pe.clearIfInvisible: "Clear the value if the question becomes hidden" => "Az érték törlése, ha a kérdés rejtetté válik"
// pe.valuePropertyName: "Value property name" => "Értéktulajdonság neve"
// pe.searchEnabled: "Enable search" => "Keresés engedélyezése"
// pe.hideSelectedItems: "Hide selected items" => "A kijelölt elemek elrejtése"
// pe.closeOnSelect: "Close the dropdown after selection" => "A legördülő menü bezárása a kiválasztás után"
// pe.signatureWidth: "Signature width" => "Aláírás szélessége"
// pe.signatureHeight: "Signature height" => "Aláírási magasság"
// pe.verticalAlign: "Vertical alignment" => "Függőleges igazítás"
// pe.alternateRows: "Alternate rows" => "Alternatív sorok"
// pe.columnsVisibleIf: "Columns are visible if" => "Az oszlopok akkor láthatók, ha"
// pe.rowsVisibleIf: "Rows are visible if" => "A sorok akkor láthatók, ha"
// pe.otherPlaceholder: "Comment area placeholder" => "Megjegyzés terület helyőrzője"
// pe.rateType: "Rate type" => "Ár típusa"
// pv.true: "true" => "igaz"
// pv.false: "false" => "téves"
// pv.decimal: "decimal" => "tizedes"
// pv.currency: "currency" => "valuta"
// pv.percent: "percent" => "százalék"
// pv.onpanel: "Start on each panel" => "Kezdés az egyes paneleken"
// pv.tab: "Tabs" => "Lapfülek"
// pv.both: "Both" => "Mindkettő"
// pv.right: "Right" => "Jobbra"
// pv.color: "color" => "szín"
// pv.date: "date" => "dátum"
// pv.datetime: "datetime" => "Dátum/idő"
// pv.datetime-local: "datetime-local" => "datetime-local"
// pv.email: "email" => "E-mail"
// pv.month: "month" => "hónap"
// pv.number: "number" => "szám"
// pv.password: "password" => "jelszó"
// pv.range: "range" => "tartomány"
// pv.tel: "tel" => "Tel"
// pv.time: "time" => "Idő"
// pv.url: "url" => "URL-cím"
// pv.week: "week" => "hét"
// pv.onHiddenContainer: "When the question or its panel/page becomes hidden" => "Amikor a kérdés vagy annak panelje/oldala rejtetté válik"
// clearInvisibleValues.none: "Never" => "Soha"
// inputType.color: "Color" => "Szín"
// inputType.date: "Date" => "Dátum"
// inputType.datetime-local: "Date and Time" => "Dátum és idő"
// inputType.email: "Email" => "E-mail"
// inputType.month: "Month" => "Hónap"
// inputType.number: "Number" => "Szám"
// inputType.password: "Password" => "Jelszó"
// inputType.range: "Range" => "Tartomány"
// inputType.tel: "Phone Number" => "Telefonszám"
// inputType.time: "Time" => "Idő"
// inputType.url: "URL" => "URL"
// inputType.week: "Week" => "Hét"
// pv.onValueChanging: "Before an answer is changed" => "A válasz módosítása előtt"
// pv.standard: "Original structure" => "Eredeti szerkezet"
// pv.singlePage: "All questions on a single page" => "Minden kérdés egyetlen oldalon"
// pv.questionPerPage: "Each question on an individual page" => "Minden kérdés egy adott oldalon"
// pv.noPreview: "No preview" => "Nincs előnézet"
// pv.showAllQuestions: "Show all questions" => "Az összes kérdés megjelenítése"
// pv.showAnsweredQuestions: "Show answered questions only" => "Csak a megválaszolt kérdések megjelenítése"
// pv.pages: "Completed pages" => "Befejezett oldalak"
// pv.questions: "Answered questions" => "Megválaszolt kérdések"
// pv.requiredQuestions: "Answered required questions" => "Megválaszolt kötelező kérdések"
// pv.correctQuestions: "Valid answers" => "Érvényes válaszok"
// pv.buttons: "Completed pages (button UI)" => "Befejezett oldalak (gombos felhasználói felület)"
// pv.underInput: "Under the input" => "A bemenet alatt"
// pv.underTitle: "Under the title" => "A cím alatt"
// pv.onBlur: "On blur" => "Elmosódáskor"
// pv.onTyping: "While typing" => "Gépelés közben"
// pv.underRow: "Under the row" => "A sor alatt"
// pv.underRowSingle: "Under the row, only one panel is visible" => "A sor alatt csak egy panel látható"
// showNavigationButtons.none: "Hidden" => "Rejtett"
// showProgressBar.off: "Hidden" => "Rejtett"
// showTimerPanel.none: "Hidden" => "Rejtett"
// showTimerPanelMode.all: "Both" => "Mindkettő"
// detailPanelMode.none: "Hidden" => "Rejtett"
// addRowButtonLocation.default: "Depends on matrix layout" => "A mátrix elrendezésétől függ"
// panelsState.default: "Users cannot expand or collapse panels" => "A felhasználók nem bonthatják ki és nem csukhatják össze a paneleket"
// panelsState.collapsed: "All panels are collapsed" => "Minden panel össze van csukva"
// panelsState.expanded: "All panels are expanded" => "Minden panel ki van bontva"
// widthMode.auto: "Auto" => "Kocsi"
// widthMode.static: "Static" => "Statikus"
// widthMode.responsive: "Responsive" => "Fogékony"
// imageFit.none: "None" => "Egyik sem"
// imageFit.contain: "Contain" => "Tartalmaz"
// imageFit.cover: "Cover" => "Fedő"
// imageFit.fill: "Fill" => "Tölt"
// contentMode.auto: "Auto" => "Kocsi"
// contentMode.image: "Image" => "Kép"
// contentMode.video: "Video" => "Video"
// contentMode.youtube: "YouTube" => "Youtube-videók"
// displayMode.auto: "Auto" => "Kocsi"
// displayMode.buttons: "Buttons" => "Gombok"
// displayMode.dropdown: "Dropdown" => "Legördülő menü"
// rateColorMode.default: "Default" => "Alapértelmezett"
// autoGenerate.true: "Generate" => "Létrehoz"
// autoGenerate.false: "Enter manually" => "Manuális bevitel"
// rateType.labels: "Labels" => "Címkék"
// rateType.stars: "Stars" => "Csillagok"
// rateType.smileys: "Smileys" => "Hangulatjelek"
// op.anyof: "Any of" => "Bármelyike"
// op.allof: "All of" => "Az összes"
// op.and: "and" => "és"
// op.or: "or" => "vagy"
// ew.modern: "Modern theme" => "Modern téma"
// ew.default: "Default theme" => "Alapértelmezett téma"
// ew.orange: "Orange theme" => "Narancssárga téma"
// ew.darkblue: "Darkblue theme" => "Sötétkék téma"
// ew.darkrose: "Darkrose theme" => "Darkrose téma"
// ew.stone: "Stone theme" => "Kő téma"
// ew.winter: "Winter theme" => "Téli téma"
// ew.winterstone: "Winter-Stone theme" => "Téli-kő téma"
// ts.hideInvisibleElements: "Hide invisible elements" => "Láthatatlan elemek elrejtése"
// triggers.skiptrigger: "Skip to question" => "Ugrás a kérdésre"
// pehelp.cookieName: "Cookies prevent users from filling out the same survey twice." => "A cookie-k megakadályozzák, hogy a felhasználók kétszer töltsék ki ugyanazt a felmérést."
// pehelp.size: "Resizes the visible area of the input field. Please use the <b>Validation → Maximum length</b> setting to limit the input length." => "Átméretezi a beviteli mező látható területét. Kérjük, használja a <b>Validation → Maximum length</b> beállítást a bemeneti hossz korlátozásához."
// pehelp.format: "Use {0} as a placeholder for the actual value." => "Használja {0} a tényleges érték helyőrzőjeként."
// pehelp.totalText: "Visible only when at least one column has Total type or Total expression." => "Csak akkor látható, ha legalább egy oszlop Összeg típusú vagy Összeg kifejezéssel rendelkezik."
// pehelp.acceptedTypes: "Refer to the [accept](https://www.w3schools.com/tags/att_input_accept.asp) attribute description for more information." => "További információt az [accept](https://www.w3schools.com/tags/att_input_accept.asp) attribútum leírásában talál."
// pehelp.columnColCount: "Applicable only to Radiogroup and Checkbox cell types." => "Csak a Radiogroup és a Checkbox cellatípusokra vonatkozik."
// pehelp.autocomplete: "Refer to the [autocomplete](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete) attribute description for more information." => "További információkért tekintse meg az [autocomplete](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete) attribútum leírását."
// pehelp.valueName: "If you do not set this property, the answer will be stored in a field specified by the Name property." => "Ha nem állítja be ezt a tulajdonságot, a válasz a Name tulajdonságban megadott mezőben lesz tárolva."
// choicesbyurl.valueName: " " => " "
// pehelp.keyName: "If the specified column contains identical values, the survey throws the \"Non-unique key value\" error." => "Ha a megadott oszlop azonos értékeket tartalmaz, a felmérés a \"Nem egyedi kulcsérték\" hibát adja vissza."
// p.multiSelect: "Allow multiple selection" => "Többszörös kijelölés engedélyezése"
// p.showLabel: "Show image captions" => "Képfeliratok megjelenítése"
// p.value: "Value" => "Érték"
// p.tabAlign: "Tab alignment" => "Tabulátorigazítás"
// p.logoFit: "Logo fit" => "Logó illeszkedés"
// p.pages: "Pages" => "Oldalak"
// p.questions: "Questions" => "Kérdések"
// p.calculatedValues: "Calculated values" => "Számított értékek"
// p.surveyId: "Survey id" => "Felmérés azonosítója"
// p.surveyPostId: "Survey post id" => "Felmérés bejegyzésének azonosítója"
// p.surveyShowDataSaving: "Survey show data saving" => "A felmérés adatmentést mutat"
// p.questionDescriptionLocation: "Question description location" => "Kérdés leírása, helye"
// p.progressBarType: "Progress bar type" => "Folyamatjelző sáv típusa"
// p.showTOC: "Show TOC" => "Tartalomjegyzék megjelenítése"
// p.tocLocation: "Toc location" => "Tartalomjegyzék helye"
// p.questionTitlePattern: "Question title pattern" => "Kérdés címének mintája"
// p.widthMode: "Width mode" => "Szélesség mód"
// p.showBrandInfo: "Show brand info" => "Márkainformációk megjelenítése"
// p.useDisplayValuesInDynamicTexts: "Use display values in dynamic texts" => "Megjelenítési értékek használata dinamikus szövegekben"
// p.descriptionLocation: "Description location" => "Leírás, hely"
// p.defaultValueExpression: "Default value expression" => "Alapértelmezett értékkifejezés"
// p.bindings: "Bindings" => "Kötések"
// p.renderAs: "Render as" => "Renderelés mint"
// p.attachOriginalItems: "Attach original items" => "Eredeti elemek csatolása"
// p.cellHint: "Cell hint" => "Cella-tipp"
// p.isUnique: "Is unique" => "Egyedülálló"
// p.showInMultipleColumns: "Show in multiple columns" => "Megjelenítés több oszlopban"
// p.totalMaximumFractionDigits: "Total maximum fraction digits" => "Törtszámjegyek teljes száma"
// p.totalMinimumFractionDigits: "Total minimum fraction digits" => "Minimális törtszámjegyek összesen"
// p.detailElements: "Detail elements" => "Részletelemek"
// p.allowAdaptiveActions: "Allow adaptive actions" => "Adaptív műveletek engedélyezése"
// p.detailPanelShowOnAdding: "Detail panel show on adding" => "A részletek panel megjelenítése hozzáadáskor"
// p.choicesLazyLoadEnabled: "Choices lazy load enabled" => "Választási lehetőségek lusta betöltés engedélyezve"
// p.choicesLazyLoadPageSize: "Choices lazy load page size" => "Választási lehetőségek lusta betöltési oldalméret"
// p.inputFieldComponent: "Input field component" => "Beviteli mező összetevő"
// p.itemComponent: "Item component" => "Elem összetevő"
// p.min: "Min" => "Min"
// p.max: "Max" => "Max"
// p.minValueExpression: "Min value expression" => "Minimális érték kifejezése"
// p.maxValueExpression: "Max value expression" => "Max. érték kifejezés"
// p.step: "Step" => "Lépés"
// p.dataList: "Data list" => "Adatlista"
// p.elements: "Elements" => "Elemek"
// p.content: "Content" => "Tartalom"
// p.navigationTitle: "Navigation title" => "Navigációs cím"
// p.navigationDescription: "Navigation description" => "Navigáció leírása"
// p.longTap: "Long tap" => "Hosszú koppintás"
// p.autoGrow: "Auto grow" => "Automatikus növekedés"
// p.allowResize: "Allow resizing" => "Átméretezés engedélyezése"
// p.acceptCarriageReturn: "Accept carriage return" => "Kocsivissza elfogadása"
// p.displayMode: "Display mode" => "Megjelenítési mód"
// p.rateType: "Rate type" => "Ár típusa"
// p.contentMode: "Content mode" => "Tartalom mód"
// p.imageFit: "Image fit" => "Kép illeszkedése"
// p.altText: "Alt text" => "Helyettesítő szöveg"
// p.height: "Height" => "Magasság"
// p.penColor: "Pen color" => "Toll színe"
// p.backgroundColor: "Background color" => "Háttérszín"
// p.templateElements: "Template elements" => "Sablon elemek"
// p.operator: "Operator" => "Operátor"
// p.isVariable: "Is variable" => "Változó"
// p.runExpression: "Run expression" => "Kifejezés futtatása"
// p.showCaption: "Show caption" => "Felirat megjelenítése"
// p.iconName: "Icon name" => "Ikon neve"
// p.iconSize: "Icon size" => "Ikon mérete"
// p.precision: "Precision" => "Precizitás"
// p.matrixDragHandleArea: "Matrix drag handle area" => "Mátrix húzófogantyújának területe"
// p.backgroundImage: "Background image" => "Háttérkép"
// p.backgroundImageFit: "Background image fit" => "Háttérkép illesztése"
// p.backgroundImageAttachment: "Background image attachment" => "Háttérkép melléklet"
// p.backgroundOpacity: "Background opacity" => "Háttér átlátszatlansága"
// p.selectToRankEnabled: "Select to rank enabled" => "Válassza ki a rangsorolás engedélyezéséhez"
// p.selectToRankAreasLayout: "Select to rank areas layout" => "Válassza ki a területek elrendezésének rangsorolásához"
// p.allowCameraAccess: "Allow camera access" => "Kamera-hozzáférés engedélyezése"
// p.scaleColorMode: "Scale color mode" => "Színmód méretezése"
// p.rateColorMode: "Rate color mode" => "Értékelje a színmódot"
// p.templateTabTitle: "Template tab title" => "Sablon lap címe"
// p.templateVisibleIf: "Template visible if" => "A sablon akkor látható, ha"
// p.copyDisplayValue: "Copy display value" => "Megjelenített érték másolása"
// theme.--background: "Background color" => "Háttérszín"
// theme.--background-dim-light: "Background dim light color" => "Háttér halvány világos színe"
// theme.--primary-foreground: "Primary foreground color" => "Elsődleges festőszín"
// theme.--foreground: "Foreground color" => "Festőszín"
// theme.--base-unit: "Base unit" => "Alapegység"
// theme.groupAdvanced: "Advanced" => "Haladó"
// theme.themeName: "Theme" => "Téma"
// theme.isPanellessss: "Question appearance" => "Kérdés megjelenése"
// theme.isPanellessPanels: "Default" => "Alapértelmezett"
// theme.isPanellessLightweight: "Without Panels" => "Panelek nélkül"
// theme.themePaletteLight: "Light" => "Fény"
// theme.themePaletteDark: "Dark" => "Sötét"
// theme.primaryColor: "Accent color" => "Kiemelő szín"
// theme.primaryDefaultColor: "Default" => "Alapértelmezett"
// theme.primaryDarkColor: "Hover" => "Lebeg"
// theme.primaryLightColor: "Selected" => "Kiválasztott"
// theme.backgroundDimColor: "Background color" => "Háttérszín"
// theme.backgroundImage: "Background image" => "Háttérkép"
// theme.backgroundImageFitAuto: "Auto" => "Kocsi"
// theme.backgroundImageFitCover: "Cover" => "Fedő"
// theme.backgroundImageFitContain: "Contain" => "Tartalmaz"
// theme.backgroundOpacity: "Opacity" => "Átlátszatlanság"
// theme.backgroundImageAttachmentFixed: "Fixed" => "Fix"
// theme.backgroundImageAttachmentScroll: "Scroll" => "Kézirattekercs"
// theme.panelBackgroundTransparency: "Panel background opacity" => "Panel hátterének átlátszatlansága"
// theme.questionBackgroundTransparency: "Question background opacity" => "Kérdés hátterének átlátszatlansága"
// theme.questionPanel: "Panel background and corner radius" => "Panel háttere és saroksugara"
// theme.questionTitle: "Question title font" => "Kérdés címének betűtípusa"
// theme.questionDescription: "Question description font" => "Kérdés leíró betűtípus"
// theme.editorPanel: "Input element" => "Bemeneti elem"
// theme.editorFont: "Input element font" => "Bemeneti elem betűtípusa"
// theme.backcolor: "Default background" => "Alapértelmezett háttér"
// theme.hovercolor: "Hover background" => "Háttér rámutatása"
// theme.borderDecoration: "Border decoration" => "Szegély dekoráció"
// theme.accentBackground: "Accent background" => "Ékezetes háttér"
// theme.accentForeground: "Accent foreground" => "Hangsúlyos előtér"
// theme.primaryForecolor: "Default color" => "Alapértelmezett szín"
// theme.primaryForecolorLight: "Disabled color" => "Letiltott szín"
// theme.linesColors: "Minor line colors" => "Alvonalszínek"
// theme.borderDefault: "Darker" => "Sötétebb"
// theme.borderLight: "Lighter" => "Öngyújtó"
// theme.fontFamily: "Font family" => "Betűcsalád"
// theme.fontSize: "Font size" => "Betűméret"
// theme.color: "Color" => "Szín"
// theme.size: "Size" => "Méret"
// theme.fontWeightRegular: "Regular" => "Rendszeres"
// theme.fontWeightHeavy: "Heavy" => "Nehéz"
// theme.fontWeightSemiBold: "Semi-bold" => "Félig félkövér"
// theme.fontWeightBold: "Bold" => "Merész"
// theme.scale: "Scale" => "Hangsor"
// theme.cornerRadius: "Corner radius" => "Sarok sugara"
// theme.surveyTitleFont: "Survey title font" => "Felmérés címének betűtípusa"
// theme.pageTitle: "Page title font" => "Oldalcím betűtípusa"
// theme.pageDescription: "Page description font" => "Oldalleíró betűtípus"
// theme.boxShadowX: "X" => "X"
// theme.boxShadowY: "Y" => "Y"
// theme.boxShadowAddRule: "Add Shadow Effect" => "Árnyékhatás hozzáadása"
// theme.opacity: "Opacity" => "Átlátszatlanság"
// theme.boxShadowBlur: "Blur" => "Elken"
// theme.boxShadowSpread: "Spread" => "Terjedés"
// theme.boxShadowDrop: "Drop" => "Csepp"
// theme.boxShadowInner: "Inner" => "Belső"
// theme.questionShadow: "Shadow effects" => "Árnyék effektusok"
// theme.editorShadow: "Input element shadow effects" => "Bemeneti elem árnyékeffektusai"
// names.default: "Default" => "Alapértelmezett"
// names.contrast: "Contrast" => "Kontraszt"
// names.plain: "Plain" => "Síkság"
// names.simple: "Simple" => "Egyszerű"
// names.blank: "Blank" => "Üres"
// names.double: "Double" => "Dupla"
// names.bulk: "Bulk" => "Terjedelem"
// names.pseudo-3d: "Pseudo 3D" => "Pszeudo 3D"
// names.playful: "Playful" => "Játékos"
// names.ultra: "Ultra" => "Ultra"
// colors.teal: "Teal" => "Kékeszöld"
// colors.blue: "Blue" => "Kék"
// colors.purple: "Purple" => "Lila"
// colors.orchid: "Orchid" => "Orchidea"
// colors.tulip: "Tulip" => "Tulipán"
// colors.brown: "Brown" => "Barna"
// colors.green: "Green" => "Zöld"
// names.sharp: "Sharp" => "Éles"
// names.borderless: "Borderless" => "Szegély nélküli"
// names.flat: "Flat" => "Lapos"
// names.doubleborder: "Double Border" => "Dupla szegély"
// names.layered: "Layered" => "Rakott"
// names.solid: "Solid" => "Szilárd"
// names.threedimensional: "3D" => ".3D"
// ed.translationDeleteLanguage: "Are you certain you wish to delete all strings for this language?" => "Biztos benne, hogy törölni szeretné az összes karakterláncot ehhez a nyelvhez?"
// ed.themeResetButton: "Reset theme settings to default" => "Témabeállítások visszaállítása alapértelmezettre"
// theme.placeholderColor: "Placeholder color" => "Helyőrző színe"
// ed.themeSettings: "Theme Settings" => "Téma beállítások"
// ed.themeSettingsTooltip: "Open theme settings" => "Nyissa meg a témabeállításokat"
// pe.resetToDefaultCaption: "Reset" => "Átszed"
// pv.file: "Local files" => "Helyi fájlok"
// pv.camera: "Camera" => "Fényképezőgép"
// pv.file-camera: "Local files or camera" => "Helyi fájlok vagy kamera"
// ed.translateUsigAI: "Auto-translate All" => "Összes automatikus fordítása"
// ed.translationDialogTitle: "Untranslated strings" => "Lefordítatlan karakterláncok"
// pe.fastEntryChoicesMinCountError: "Please enter at least {0} items" => "Kérjük, adjon meg legalább {0} elemet"
// lg.question_resetValueName: "Reset question value" => "Kérdés értékének visszaállítása"
// lg.column_resetValue: "Reset column value" => "Oszlopérték visszaállítása"
// pe.markRequired: "Mark as required" => "Megjelölés kötelezőként"
// pe.removeRequiredMark: "Remove the required mark" => "Távolítsa el a szükséges jelet"
// p.resetValueIf: "Reset value if" => "Érték visszaállítása, ha"
// lg.question_setValueName: "Set question value" => "Kérdésérték beállítása"
// lg.column_resetValueName: "Reset column value" => "Oszlopérték visszaállítása"
// lg.column_setValueName: "Set column value" => "Oszlopérték beállítása"
// lg.setValueExpressionPlaceholder: " An expression whose result will be assigned to the target question." => " Olyan kifejezés, amelynek eredménye a célkérdéshez lesz rendelve."
// survey.title: "Title" => "Cím"
// page.title: "Title" => "Cím"
// p.setValueIf: "Set value if" => "Érték beállítása, ha"
// theme.header: "Header" => "Fejléc"
// theme.backgroundImageFitFill: "Stretch" => "Nyúlik"
// theme.backgroundImageFitTile: "Tile" => "Cserép"
// theme.headerView: "View" => "Nézet"
// theme.headerViewBasic: "Basic" => "Alapvető"
// theme.headerViewAdvanced: "Advanced" => "Haladó"
// theme.headerInheritWidthFrom: "Content area width" => "Tartalomterület szélessége"
// theme.headerInheritWidthFromSurvey: "Same as survey" => "Ugyanaz, mint a felmérés"
// theme.headerInheritWidthFromPage: "Fit to page" => "Laphoz igazítás"
// theme.headerTextAreaWidth: "Text width" => "Szöveg szélessége"
// theme.headerBackgroundColorSwitch: "Background color" => "Háttérszín"
// theme.headerBackgroundColorNone: "None" => "Egyik sem"
// theme.headerBackgroundColorAccentColor: "Accent color" => "Kiemelő szín"
// theme.headerBackgroundColorCustom: "Custom" => "Szokás"
// theme.horizontalAlignmentLeft: "Left" => "Balra"
// theme.horizontalAlignmentCenter: "Center" => "Központ"
// theme.horizontalAlignmentRight: "Right" => "Jobbra"
// theme.verticalAlignmentTop: "Top" => "Felső"
// theme.verticalAlignmentMiddle: "Middle" => "Középső"
// theme.verticalAlignmentBottom: "Bottom" => "Fenék"
// theme.logoPosition: "Logo Position" => "Logó pozíciója"
// theme.headerTitlePosition: "Title Position" => "Cím pozíciója"
// lg.question_resetValueText: "reset value for question: {0}" => "Kérdés visszaállítási értéke: {0}"
// lg.question_setValueText: "assign value: {1} to question: {0}" => "Érték hozzárendelése: {1} a kérdéshez: {0}"
// lg.column_resetValueText: "reset cell value for column: {0}" => "Az oszlop cellaértékének visszaállítása: {0}"
// lg.column_setValueText: "assign cell value: {1} to column: {0}" => "Cellaérték hozzárendelése: {1} oszlophoz: {0}"
// ed.surveyJsonExportButton: "Export" => "Kivitel"
// ed.surveyJsonImportButton: "Import" => "Importál"
// ed.surveyJsonCopyButton: "Copy to clipboard" => "Másolás a vágólapra"
// pe.filePlaceholder: "File placeholder text" => "Fájl helyőrző szövege"
// pe.photoPlaceholder: "Photo placeholder text" => "Fénykép helyőrző szövege"
// pe.fileOrPhotoPlaceholder: "File or photo placeholder text" => "Fájl vagy fénykép helyőrző szövege"
// pehelp.filePlaceholder: "Applies when \"Source type\" is \"Local files\" or when camera is unavailable" => "Akkor érvényes, ha a \"Forrás típusa\" \"Helyi fájlok\", vagy ha a kamera nem érhető el"
// pehelp.photoPlaceholder: "Applies when \"Source type\" is \"Camera\"." => "Akkor érvényes, ha a \"Forrás típusa\" a \"Kamera\"."
// pehelp.fileOrPhotoPlaceholder: "Applies when \"Source type\" is \"Local files or camera\"." => "Akkor érvényes, ha a \"Forrás típusa\" értéke \"Helyi fájlok vagy kamera\"."
// ed.themeResetConfirmation: "Do you really want to reset the theme? All your customizations will be lost." => "Tényleg vissza akarja állítani a témát? Az összes testreszabás elvész."
// ed.themeResetConfirmationOk: "Yes, reset the theme" => "Igen, állítsa vissza a témát"
// theme.background: "Background" => "Háttér"
// theme.appearance: "Appearance" => "Megjelenés"
// theme.headerInheritWidthFromContainer: "Fit to container" => "Tárolóhoz igazítás"
// signaturepad.showPlaceholder: "Show the placeholder" => "A helyőrző megjelenítése"
// signaturepad.placeholder: "Placeholder text" => "Helyőrző szöveg"
// theme.surveyDescriptionFont: "Survey description font" => "Felmérés leírásának betűtípusa"
// ed.prevFocus: "Focus previous" => "Fókusz előző"
// ed.nextFocus: "Focus next" => "Fókusz következő"
// ed.saveTheme: "Save Theme" => "Téma mentése"
// ed.saveThemeTooltip: "Save Theme" => "Téma mentése"
// lg.page_requireName: "Make page required" => "Az oldal kötelezővé tétele"
// lg.panel_requireName: "Make page required" => "Az oldal kötelezővé tétele"
// signaturepad.signatureWidth: "Signature area width" => "Aláírási terület szélessége"
// signaturepad.signatureHeight: "Signature area height" => "Aláírási terület magassága"
// signaturepad.signatureAutoScaleEnabled: "Auto-scale the signature area" => "Az aláírási terület automatikus méretezése"
// signaturepad.penMinWidth: "Minimum pen width" => "Tollszélesség minimális"
// signaturepad.penMaxWidth: "Maximum pen width" => "Maximális tollszélesség"
// theme.headerDescriptionPosition: "Description position" => "Leírás pozíciója"
// ed.propertyGridNoResultsFound: "No results found" => "Nincs találat"
// pv.leftRight: "Left and right" => "Balra és jobbra"
// p.sourceType: "Source type" => "Forrás típusa"
// p.fitToContainer: "Fit to container" => "Tárolóhoz igazítás"
// p.setValueExpression: "Set value expression" => "Értékkifejezés beállítása"
// ed.choicesLoadedFromWebText: "Choices are loaded from a web service." => "A választási lehetőségek egy webszolgáltatásból töltődnek be."
// ed.choicesLoadedFromWebLinkText: "Go to settings" => "Válassza a beállítások"
// ed.choicesLoadedFromWebPreviewTitle: "Preview of loaded choice options" => "A betöltött választási lehetőségek előnézete"
// pe.eachRowUnique: "Prevent duplicate responses in rows" => "A sorokban ismétlődő válaszok megakadályozása"
// theme.advancedMode: "Advanced mode" => "Speciális mód"
// theme.backgroundCornerRadius: "Background and corner radius" => "Háttér és saroksugár"
// theme.colorsTitle: "Colors" => "Színek"
// theme.font: "Font" => "Betűkészlet"
// theme.lines: "Lines" => "Sorok"
// theme.titleFont: "Title font" => "Cím betűtípusa"
// theme.descriptionFont: "Description font" => "Leírás betűtípus"
// theme.shadow: "Shadow effects" => "Árnyék effektusok"
// ed.translateUsigAIFrom: "Translate from: " => "Fordítás: "
// pe.showRefuseItem: "Allow the Refuse to Answer option" => "A Válasz megtagadása lehetőség engedélyezése"
// pe.showDontKnowItem: "Allow the Don't Know option" => "A Nem tudom lehetőség engedélyezése"
// pe.showRefuseItem: "Allow the Refuse to Answer option" => "A Válasz megtagadása lehetőség engedélyezése"
// pe.showDontKnowItem: "Allow the Don't Know option" => "A Nem tudom lehetőség engedélyezése"
// pv.contain: "Contain" => "Tartalmaz"
// pv.cover: "Cover" => "Fedő"
// pv.fill: "Fill" => "Tölt"

// pe.transposeData: "Transpose rows to columns" => "Sorok átültetése oszlopokba"
// layout.panel: "Layout" => "Elrendezés"
// layout.question: "Layout" => "Elrendezés"
// layout.base: "Layout" => "Elrendezés"
// panel.name: "Panel name" => "Panel neve"
// panel.title: "Panel title" => "Panel címe"
// panel.description: "Panel description" => "Panel leírása"
// panel.visibleIf: "Make the panel visible if" => "A panel láthatóvá tétele, ha"
// panel.requiredIf: "Make the panel required if" => "Tegye szükségessé a panelt, ha"
// panel.questionOrder: "Question order within the panel" => "Kérdések sorrendje a panelen belül"
// panel.startWithNewLine: "Display the panel on a new line" => "A panel megjelenítése új sorban"
// panel.state: "Panel collapse state" => "Panel összecsukási állapota"
// panel.width: "Inline panel width" => "Szövegközi panel szélessége"
// panel.minWidth: "Minimum panel width" => "Minimális panelszélesség"
// panel.maxWidth: "Maximum panel width" => "Maximális panelszélesség"
// paneldynamic.name: "Panel name" => "Panel neve"
// paneldynamic.title: "Panel title" => "Panel címe"
// paneldynamic.description: "Panel description" => "Panel leírása"
// paneldynamic.visibleIf: "Make the panel visible if" => "A panel láthatóvá tétele, ha"
// paneldynamic.requiredIf: "Make the panel required if" => "Tegye szükségessé a panelt, ha"
// paneldynamic.page: "Move the panel to page" => "A panel áthelyezése oldalra"
// paneldynamic.startWithNewLine: "Display the panel on a new line" => "A panel megjelenítése új sorban"
// paneldynamic.state: "Panel collapse state" => "Panel összecsukási állapota"
// paneldynamic.width: "Inline panel width" => "Szövegközi panel szélessége"
// paneldynamic.minWidth: "Minimum panel width" => "Minimális panelszélesség"
// paneldynamic.maxWidth: "Maximum panel width" => "Maximális panelszélesség"
// paneldynamic.templateDescription: "Panel description pattern" => "Panel leírási minta"
// paneldynamic.templateTitle: "Panel title pattern" => "Panel címmintája"
// paneldynamic.noEntriesText: "Empty panel text" => "Üres panelszöveg"
// paneldynamic.templateTabTitle: "Tab title pattern" => "Lapcím mintája"
// paneldynamic.templateVisibleIf: "Make an individual panel visible if" => "Egy adott panel láthatóvá tétele, ha"
// paneldynamic.hideNumber: "Hide the panel number" => "A panel számának elrejtése"
// paneldynamic.titleLocation: "Panel title alignment" => "Panelcím igazítása"
// paneldynamic.descriptionLocation: "Panel description alignment" => "Panel leírás igazítása"
// paneldynamic.templateQuestionTitleLocation: "Question title alignment" => "Kérdés címének igazítása"
// paneldynamic.templateErrorLocation: "Error message alignment" => "Hibaüzenetek igazítása"
// paneldynamic.newPanelPosition: "New panel location" => "Új panel helye"
// paneldynamic.keyName: "Prevent duplicate responses in the following question" => "Az ismétlődő válaszok elkerülése a következő kérdésben"
// question.name: "Question name" => "Kérdés neve"
// question.title: "Question title" => "Kérdés címe"
// question.description: "Question description" => "Kérdés leírása"
// question.visibleIf: "Make the question visible if" => "Tegye láthatóvá a kérdést, ha"
// question.requiredIf: "Make the question required if" => "Tegye kötelezővé a kérdést, ha"
// question.state: "Question box collapse state" => "Kérdésmező összecsukási állapota"
// question.hideNumber: "Hide the question number" => "A kérdés számának elrejtése"
// question.titleLocation: "Question title alignment" => "Kérdés címének igazítása"
// question.descriptionLocation: "Question description alignment" => "Kérdés leírás igazítása"
// question.errorLocation: "Error message alignment" => "Hibaüzenetek igazítása"
// question.indent: "Increase the inner indent" => "A belső behúzás növelése"
// question.width: "Inline question width" => "Szövegközi kérdés szélessége"
// question.minWidth: "Minimum question width" => "Minimális kérdésszélesség"
// question.maxWidth: "Maximum question width" => "Maximális kérdésszélesség"
// question.textUpdateMode: "Update input field value" => "Beviteli mező értékének frissítése"
// signaturepad.allowClear: "Show the Clear button within signature area" => "A Törlés gomb megjelenítése az aláírási területen belül"
// signaturepad.penColor: "Stroke color" => "Körvonal színe"
// comment.rows: "Input field height (in lines)" => "Beviteli mező magassága (sorokban)"
// expression.name: "Expression name" => "Kifejezés neve"
// expression.title: "Expression title" => "Kifejezés címe"
// expression.description: "Expression description" => "Kifejezés leírása"
// expression.expression: "Expression" => "Kifejezés"
// trigger.expression: "Expression" => "Kifejezés"
// calculatedvalue.expression: "Expression" => "Kifejezés"
// survey.description: "Survey description" => "A felmérés leírása"
// page.name: "Page name" => "Oldal neve"
// page.description: "Page description" => "Oldal leírása"
// page.visibleIf: "Make the page visible if" => "Tegye láthatóvá az oldalt, ha"
// page.requiredIf: "Make the page required if" => "Az oldal kötelezővé tétele, ha"
// page.questionOrder: "Question order on the page" => "Kérdések sorrendje az oldalon"
// matrixdropdowncolumn.name: "Column name" => "Oszlop neve"
// matrixdropdowncolumn.title: "Column title" => "Oszlop címe"
// matrixdropdowncolumn.isUnique: "Prevent duplicate responses" => "Az ismétlődő válaszok megakadályozása"
// matrixdropdowncolumn.width: "Column width" => "Oszlopszélesség"
// matrixdropdowncolumn.minWidth: "Minimum column width" => "Minimális oszlopszélesség"
// matrixdropdowncolumn.rows: "Input field height (in lines)" => "Beviteli mező magassága (sorokban)"
// matrixdropdowncolumn.visibleIf: "Make the column visible if" => "Tegye láthatóvá az oszlopot, ha"
// matrixdropdowncolumn.requiredIf: "Make the column required if" => "Tegye kötelezővé az oszlopot, ha"
// matrixdropdowncolumn.showInMultipleColumns: "Each option in a separate column" => "Minden beállítás külön oszlopban"
// multipletextitem.name: "Name" => "Név"
// multipletextitem.title: "Title" => "Cím"
// pe.rateDescriptionLocation: "Label alignment" => "Feliratigazítás"
// pe.cellErrorLocation: "Cell error message alignment" => "Cellahibaüzenet igazítása"
// pe.listIsEmpty@columns: "You don't have any columns yet" => "Még nincsenek oszlopai"
// pe.listIsEmpty@rows: "You don't have any rows yet" => "Még nincsenek sorai"
// pe.listIsEmpty@validators: "You don't have any validation rules yet" => "Még nincsenek érvényességi szabályai"
// pe.listIsEmpty@calculatedValues: "You don't have any custom variables yet" => "Még nincsenek egyéni változói"
// pe.listIsEmpty@triggers: "You don't have any triggers yet" => "Még nincsenek triggerek"
// pe.listIsEmpty@navigateToUrlOnCondition: "You don't have any links yet" => "Még nincsenek linkek"
// pe.addNew@columns: "Add new column" => "Új oszlop hozzáadása"
// pe.addNew@rows: "Add new row" => "Új sor hozzáadása"
// pe.addNew@validators: "Add new rule" => "Új szabály hozzáadása"
// pe.addNew@calculatedValues: "Add new variable" => "Új változó hozzáadása"
// pe.addNew@triggers: "Add new trigger" => "Új eseményindító hozzáadása"
// pe.addNew@navigateToUrlOnCondition: "Add new URL" => "Új URL hozzáadása"
// choicesbyurl.url: "Web service's URL" => "Webszolgáltatás URL-címe"
// pe.progressBarShowPageTitles: "Display page titles in progress bar" => "Oldalcímek megjelenítése a folyamatjelző sávon"
// pe.progressBarShowPageNumbers: "Display page numbers in progress bar" => "Oldalszámok megjelenítése a folyamatjelző sávon"
// itemvalue.visibleIf: "Make the option visible if" => "Tegye láthatóvá a beállítást, ha"
// itemvalue.enableIf: "Make the option selectable if" => "Tegye kiválaszthatóvá a beállítást, ha"
// panel.layout: "Panel Layout" => "Panel elrendezése"
// tabs.questionSettings: "Question Settings" => "Kérdés beállítások"
// pe.url_placeholder: "Ex.: https://api.example.com/books" => "Pl.: https://api.example.com/books"
// pe.path_placeholder: "Ex.: categories.fiction" => "Pl.: kategóriák.fikció"
// pe.questionStartIndex_placeholder: "Ex.: a)" => "Pl.: a)"
// pe.width_placeholder: "Ex.: 6in" => "Pl.: 6 hüvelyk"
// pe.minWidth_placeholder: "Ex.: 600px" => "Pl.: 600px"
// pe.maxWidth_placeholder: "Ex.: 50%" => "Pl.: 50%"
// pv.selected: "Selected" => "Kiválasztott"
// pv.unselected: "Unselected" => "Kijelöletlen"
// pv.center: "Center" => "Központ"
// pv.middle: "Middle" => "Középső"
// pv.next: "Next" => "Következő"
// pv.last: "Last" => "Utolsó"
// clearIfInvisible.none: "Never" => "Soha"
// questionsOnPageMode.standard: "Original structure" => "Eredeti szerkezet"
// questionsOnPageMode.singlePage: "Show all questions on one page" => "Az összes kérdés megjelenítése egy oldalon"
// questionsOnPageMode.questionPerPage: "Show single question per page" => "Egyetlen kérdés megjelenítése oldalanként"
// pv.auto: "Auto" => "Kocsi"
// panelsState.firstExpanded: "First expanded" => "Először bővített"
// rateColorMode.scale: "Scale" => "Hangsor"
// scaleColorMode.monochrome: "Monochrome" => "Monokróm"
// scaleColorMode.colored: "Colored" => "Színes"
// state.default: "Locked" => "Zárolt"
// showQuestionNumbers.default: "Auto-numbering" => "Automatikus számozás"
// showQuestionNumbers.on: "Auto-numbering" => "Automatikus számozás"
// showQuestionNumbers.onPage: "Reset on each page" => "Visszaállítás minden oldalon"
// showQuestionNumbers.onpanel: "Reset on each panel" => "Visszaállítás az egyes paneleken"
// showQuestionNumbers.onPanel: "Reset on each panel" => "Visszaállítás az egyes paneleken"
// showQuestionNumbers.onSurvey: "Continue across the survey" => "Folytassa a felmérést"
// showQuestionNumbers.off: "No numbering" => "Nincs számozás"
// descriptionLocation.underTitle: "Under the question title" => "A kérdés címe alatt"
// descriptionLocation.underInput: "Under the input field" => "A beviteli mező alatt"
// selectToRankAreasLayout.horizontal: "Next to choices" => "A választási lehetőségek mellett"
// selectToRankAreasLayout.vertical: "Above choices" => "A fenti választási lehetőségek"
// displayStyle.decimal: "Decimal" => "Tizedes"
// displayStyle.currency: "Currency" => "Valuta"
// displayStyle.percent: "Percentage" => "Százalék"
// displayStyle.date: "Date" => "Dátum"
// totalDisplayStyle.decimal: "Decimal" => "Tizedes"
// totalDisplayStyle.currency: "Currency" => "Valuta"
// totalDisplayStyle.percent: "Percentage" => "Százalék"
// totalDisplayStyle.date: "Date" => "Dátum"
// rowOrder.initial: "Original" => "Eredeti"
// questionOrder.initial: "Original" => "Eredeti"
// showProgressBar.aboveheader: "Above the header" => "A fejléc felett"
// showProgressBar.belowheader: "Below the header" => "A fejléc alatt"
// pv.sum: "Sum" => "Összeg"
// pv.count: "Count" => "Gróf"
// pv.min: "Min" => "Min"
// pv.max: "Max" => "Max"
// pv.avg: "Avg" => "Avg"
// searchMode.contains: "Contains" => "Tartalmaz"
// searchMode.startsWith: "Starts with" => "Ezzel kezdődik"
// panel.name: "A panel ID that is not visible to respondents." => "Olyan panelazonosító, amely nem látható a válaszadók számára."
// panel.description: "Type a panel subtitle." => "Írja be a panel feliratát."
// panel.visibleIf: "Use the magic wand icon to set a conditional rule that determines panel visibility." => "A varázspálca ikonnal feltételes szabályt állíthat be, amely meghatározza a panel láthatóságát."
// panel.enableIf: "Use the magic wand icon to set a conditional rule that disables the read-only mode for the panel." => "A varázspálca ikonnal állítson be egy feltételes szabályt, amely letiltja a panel írásvédett módját."
// panel.requiredIf: "Use the magic wand icon to set a conditional rule that prevents survey submission unless at least one nested question has an answer." => "A varázspálca ikonnal állítson be egy feltételes szabályt, amely megakadályozza a felmérés elküldését, kivéve, ha legalább egy beágyazott kérdésre van válasz."
// panel.questionTitleLocation: "Applies to all questions within this panel. If you want to override this setting, define title alignment rules for individual questions. The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Top\" by default)." => "A panelen található összes kérdésre vonatkozik. Ha felül szeretné bírálni ezt a beállítást, határozzon meg címigazítási szabályokat az egyes kérdésekhez. Az \"Öröklés\" opció az oldalszintű (ha be van állítva) vagy a felmérés szintű beállítást (\"Alapértelmezetten felül\") alkalmazza."
// panel.questionErrorLocation: "Sets the location of an error message in relation to all questions within the panel. The \"Inherit\" option applies the page-level (if set) or survey-level setting." => "Beállítja a hibaüzenet helyét a panelen belüli összes kérdéssel kapcsolatban. Az \"Öröklés\" opció az oldalszintű (ha be van állítva) vagy a felmérés szintű beállítást alkalmazza."
// panel.questionOrder: "Keeps the original order of questions or randomizes them. The \"Inherit\" option applies the page-level (if set) or survey-level setting." => "Megtartja a kérdések eredeti sorrendjét, vagy véletlenszerűvé teszi őket. Az \"Öröklés\" opció az oldalszintű (ha be van állítva) vagy a felmérés szintű beállítást alkalmazza."
// panel.page: "Repositions the panel to the end of a selected page." => "A kijelölt oldal végére helyezi a panelt."
// panel.innerIndent: "Adds space or margin between the panel content and the left border of the panel box." => "Térközt vagy margót ad a panel tartalma és a paneldoboz bal szegélye közé."
// panel.startWithNewLine: "Unselect to display the panel in one line with the previous question or panel. The setting doesn't apply if the panel is the first element in your form." => "Törölje a jelölést, ha a panel egy sorban jelenik meg az előző kérdéssel vagy panellel. A beállítás nem érvényes, ha a panel az űrlap első eleme."
// panel.state: "Choose from: \"Expanded\" - the panel is displayed in full and can be collapsed; \"Collapsed\" - the panel displays only the title and description and can be expanded; \"Locked\" - the panel is displayed in full and cannot be collapsed." => "Válasszon a következők közül: \"Kibontott\" - a panel teljes egészében megjelenik és összecsukható; \"Összecsukott\" - a panel csak a címet és a leírást jeleníti meg, és bővíthető; \"Zárolva\" - a panel teljes egészében megjelenik, és nem csukható össze."
// panel.width: "Sets the width of the panel in proportion to other survey elements in the same line. Accepts CSS values (px, %, in, pt, etc.)." => "A panel szélességét az ugyanabban a sorban lévő többi földmérési elemhez viszonyítva állítja be. CSS-értékeket fogad el (px, %, in, pt stb.)."
// paneldynamic.name: "A panel ID that is not visible to respondents." => "Olyan panelazonosító, amely nem látható a válaszadók számára."
// paneldynamic.description: "Type a panel subtitle." => "Írja be a panel feliratát."
// paneldynamic.visibleIf: "Use the magic wand icon to set a conditional rule that determines panel visibility." => "A varázspálca ikonnal feltételes szabályt állíthat be, amely meghatározza a panel láthatóságát."
// paneldynamic.enableIf: "Use the magic wand icon to set a conditional rule that disables the read-only mode for the panel." => "A varázspálca ikonnal állítson be egy feltételes szabályt, amely letiltja a panel írásvédett módját."
// paneldynamic.requiredIf: "Use the magic wand icon to set a conditional rule that prevents survey submission unless at least one nested question has an answer." => "A varázspálca ikonnal állítson be egy feltételes szabályt, amely megakadályozza a felmérés elküldését, kivéve, ha legalább egy beágyazott kérdésre van válasz."
// paneldynamic.templateQuestionTitleLocation: "Applies to all questions within this panel. If you want to override this setting, define title alignment rules for individual questions. The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Top\" by default)." => "A panelen található összes kérdésre vonatkozik. Ha felül szeretné bírálni ezt a beállítást, határozzon meg címigazítási szabályokat az egyes kérdésekhez. Az \"Öröklés\" opció az oldalszintű (ha be van állítva) vagy a felmérés szintű beállítást (\"Alapértelmezetten felül\") alkalmazza."
// paneldynamic.templateErrorLocation: "Sets the location of an error message in relation to a question with invalid input. Choose between: \"Top\" - an error text is placed at the top of the question box; \"Bottom\" - an error text is placed at the bottom of the question box. The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Top\" by default)." => "Beállítja egy érvénytelen bevitelű kérdéssel kapcsolatos hibaüzenet helyét. Válasszon a következők közül: \"Felső\" - egy hibaüzenet kerül a kérdésmező tetejére; \"Alsó\" - egy hibaüzenet kerül a kérdésmező aljára. Az \"Öröklés\" opció az oldalszintű (ha be van állítva) vagy a felmérés szintű beállítást (\"Alapértelmezetten felül\") alkalmazza."
// paneldynamic.errorLocation: "Sets the location of an error message in relation to all questions within the panel. The \"Inherit\" option applies the page-level (if set) or survey-level setting." => "Beállítja a hibaüzenet helyét a panelen belüli összes kérdéssel kapcsolatban. Az \"Öröklés\" opció az oldalszintű (ha be van állítva) vagy a felmérés szintű beállítást alkalmazza."
// paneldynamic.page: "Repositions the panel to the end of a selected page." => "A kijelölt oldal végére helyezi a panelt."
// paneldynamic.innerIndent: "Adds space or margin between the panel content and the left border of the panel box." => "Térközt vagy margót ad a panel tartalma és a paneldoboz bal szegélye közé."
// paneldynamic.startWithNewLine: "Unselect to display the panel in one line with the previous question or panel. The setting doesn't apply if the panel is the first element in your form." => "Törölje a jelölést, ha a panel egy sorban jelenik meg az előző kérdéssel vagy panellel. A beállítás nem érvényes, ha a panel az űrlap első eleme."
// paneldynamic.state: "Choose from: \"Expanded\" - the panel is displayed in full and can be collapsed; \"Collapsed\" - the panel displays only the title and description and can be expanded; \"Locked\" - the panel is displayed in full and cannot be collapsed." => "Válasszon a következők közül: \"Kibontott\" - a panel teljes egészében megjelenik és összecsukható; \"Összecsukott\" - a panel csak a címet és a leírást jeleníti meg, és bővíthető; \"Zárolva\" - a panel teljes egészében megjelenik, és nem csukható össze."
// paneldynamic.width: "Sets the width of the panel in proportion to other survey elements in the same line. Accepts CSS values (px, %, in, pt, etc.)." => "A panel szélességét az ugyanabban a sorban lévő többi földmérési elemhez viszonyítva állítja be. CSS-értékeket fogad el (px, %, in, pt stb.)."
// paneldynamic.templateTitle: "Type in a template for dynamic panel titles. Use {panelIndex} for the panel's general position and {visiblePanelIndex} for its order among visible panels. Insert these placeholders into the pattern to add automatic numbering." => "Írjon be egy sablont a dinamikus panelcímekhez. Használja a {panelIndex} elemet a panel általános pozíciójához, a {visiblePanelIndex} értéket pedig a látható panelek közötti sorrendjéhez. Szúrja be ezeket a helyőrzőket a mintába az automatikus számozás hozzáadásához."
// paneldynamic.templateTabTitle: "Type in a template for tab titles. Use {panelIndex} for a panel's general position and {visiblePanelIndex} for its order among visible panels. Insert these placeholders into the pattern to add automatic numbering." => "Írjon be egy sablont a lapcímekhez. Használja a {panelIndex} elemet a panel általános pozíciójához, a {visiblePanelIndex} sablont pedig a látható panelek közötti sorrendjéhez. Szúrja be ezeket a helyőrzőket a mintába az automatikus számozás hozzáadásához."
// paneldynamic.templateVisibleIf: "This setting allows you to control the visibility of individual panels within the dynamic panel. Use the `{panel}` placeholder to reference the current panel in your expression." => "Ezzel a beállítással szabályozhatja az egyes panelek láthatóságát a dinamikus panelen. A \"{panel}\" helyőrzővel hivatkozhat a kifejezés aktuális paneljére."
// paneldynamic.titleLocation: "This setting is automatically inherited by all questions within this panel. If you want to override this setting, define title alignment rules for individual questions. The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Top\" by default)." => "Ezt a beállítást a panelen található összes kérdés automatikusan örökli. Ha felül szeretné bírálni ezt a beállítást, határozzon meg címigazítási szabályokat az egyes kérdésekhez. Az \"Öröklés\" opció az oldalszintű (ha be van állítva) vagy a felmérés szintű beállítást (\"Alapértelmezetten felül\") alkalmazza."
// paneldynamic.descriptionLocation: "The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Under the panel title\" by default)." => "Az \"Öröklés\" opció az oldalszintű (ha be van állítva) vagy a felmérés szintű beállítást alkalmazza (\"Alapértelmezés szerint a panel címe alatt\")."
// paneldynamic.newPanelPosition: "Defines the position of a newly added panel. By default, new panels are added to the end. Select \"Next\" to insert a new panel after the current one." => "Az újonnan hozzáadott panel helyét határozza meg. Alapértelmezés szerint az új panelek hozzáadódnak a végéhez. Válassza a \"Tovább\" lehetőséget, ha új panelt szeretne beilleszteni az aktuális után."
// paneldynamic.copyDefaultValueFromLastEntry: "Duplicates answers from the last panel and assigns them to the next added dynamic panel." => "Megkettőzi a válaszokat az utolsó panelről, és hozzárendeli őket a következő hozzáadott dinamikus panelhez."
// paneldynamic.keyName: "Reference a question name to require a user to provide a unique response for this question in each panel." => "Hivatkozzon egy kérdés nevére, hogy a felhasználónak egyedi választ kell adnia erre a kérdésre minden panelen."
// pehelp.defaultValueExpression: "This setting allows you to assign a default answer value based on an expression. The expression can include basic calculations - `{q1_id} + {q2_id}`, Boolean expressions, such as `{age} > 60`, and functions: `iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, etc. The value determined by this expression serves as the initial default value that can be overridden by a respondent's manual input." => "Ezzel a beállítással alapértelmezett válaszértéket rendelhet hozzá egy kifejezés alapján. A kifejezés tartalmazhat alapvető számításokat - '{q1_id} + {q2_id}', logikai kifejezéseket, például \"{age} > 60\" és függvényeket: 'iif()', 'today()', 'age()', 'min()', 'max()', 'avg()' stb. A kifejezés által meghatározott érték a kezdeti alapértelmezett érték, amelyet a válaszadó kézi bevitele felülbírálhat."
// pehelp.resetValueIf: "Use the magic wand icon to set a conditional rule that determines when a respondent's input is reset to the value based on the \"Default value expression\" or \"Set value expression\" or to the \"Default answer\" value (if either is set)." => "A varázspálca ikonnal feltételes szabályt állíthat be, amely meghatározza, hogy a válaszadó bemenete mikor áll vissza az \"Alapértelmezett érték kifejezés\" vagy az \"Értékkifejezés beállítása\" vagy az \"Alapértelmezett válasz\" érték alapján (ha bármelyik be van állítva)."
// pehelp.setValueIf: "Use the magic wand icon to set a conditional rule that determines when to run the \"Set value expression\" and dynamically assign the resulting value as a response." => "A varázspálca ikonnal beállíthat egy feltételes szabályt, amely meghatározza, hogy mikor kell futtatni az \"Érték beállítása kifejezést\", és dinamikusan hozzárendelni az eredményül kapott értéket válaszként."
// pehelp.setValueExpression: "Specify an expression that defines the value to be set when the conditions in the \"Set value if\" rule are met. The expression can include basic calculations - `{q1_id} + {q2_id}`, Boolean expressions, such as `{age} > 60`, and functions: `iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, etc. The value determined by this expression can be overridden by a respondent's manual input." => "Adjon meg egy kifejezést, amely meghatározza az \"Érték beállítása, ha\" szabály feltételeinek teljesülése esetén beállítandó értéket. A kifejezés tartalmazhat alapvető számításokat - '{q1_id} + {q2_id}', logikai kifejezéseket, például \"{age} > 60\" és függvényeket: 'iif()', 'today()', 'age()', 'min()', 'max()', 'avg()' stb. A kifejezés által meghatározott értéket felülbírálhatja a válaszadó kézi bevitele."
// question.name: "A question ID that is not visible to respondents." => "A válaszadók számára nem látható kérdésazonosító."
// question.description: "Type a question subtitle." => "Írja be a kérdés alcímét."
// question.visibleIf: "Use the magic wand icon to set a conditional rule that determines question visibility." => "A varázspálca ikonnal állítson be egy feltételes szabályt, amely meghatározza a kérdések láthatóságát."
// question.enableIf: "Use the magic wand icon to set a conditional rule that disables the read-only mode for the question." => "A varázspálca ikonnal állítson be egy feltételes szabályt, amely letiltja a kérdés írásvédett módját."
// question.requiredIf: "Use the magic wand icon to set a conditional rule that prevents survey advancing or submission unless the question received an answer." => "A varázspálca ikonnal állítson be egy feltételes szabályt, amely megakadályozza a felmérés előrehaladását vagy elküldését, kivéve, ha a kérdésre választ kapott."
// question.startWithNewLine: "Unselect to display the question in one line with the previous question or panel. The setting doesn't apply if the question is the first element in your form." => "Törölje a jelölést, ha a kérdést egy sorban szeretné megjeleníteni az előző kérdéssel vagy panellel. A beállítás nem érvényes, ha a kérdés az űrlap első eleme."
// question.page: "Repositions the question to the end of a selected page." => "A kérdést a kijelölt oldal végére helyezi."
// question.state: "Choose from: \"Expanded\" - the question box is displayed in full and can be collapsed; \"Collapsed\" - the question box displays only the title and description and can be expanded; \"Locked\" - the question box is displayed in full and cannot be collapsed." => "Válasszon a következők közül: \"Kibontott\" - a kérdésmező teljes egészében megjelenik és összecsukható; \"Összecsukott\" - a kérdésmező csak a címet és a leírást jeleníti meg, és kibontható; \"Zárolva\" - a kérdésmező teljes egészében megjelenik, és nem csukható össze."
// question.titleLocation: "Overrides title alignment rules defined on a panel, page or survey level. The \"Inherit\" option applies any higher-level settings (if set) or survey-level setting (\"Top\" by default)." => "Felülbírálja a panel-, oldal- vagy felmérésszinten definiált címigazítási szabályokat. Az \"Öröklés\" opció minden magasabb szintű beállítást (ha be van állítva) vagy felmérésszintű beállítást (\"Alapértelmezetten Felül\") alkalmaz."
// question.descriptionLocation: "The \"Inherit\" option applies the survey-level setting (\"Under the question title\" by default)." => "Az \"Öröklés\" opció a felmérés szintű beállítást alkalmazza (\"Alapértelmezés szerint a kérdés címe alatt\")."
// question.errorLocation: "Sets the location of an error message in relation to the question with invalid input. Choose between: \"Top\" - an error text is placed at the top of the question box; \"Bottom\" - an error text is placed at the bottom of the question box. The \"Inherit\" option applies the survey-level setting (\"Top\" by default)." => "Beállítja az érvénytelen bevitelű kérdéssel kapcsolatos hibaüzenet helyét. Válasszon a következők közül: \"Felső\" - egy hibaüzenet kerül a kérdésmező tetejére; \"Alsó\" - egy hibaüzenet kerül a kérdésmező aljára. Az \"Öröklés\" opció a felmérés szintű beállítást alkalmazza (\"Felül\" alapértelmezés szerint)."
// question.indent: "Adds space or margin between the question content and the left border of the question box." => "Térközt vagy margót ad a kérdés tartalma és a kérdésmező bal szegélye közé."
// question.width: "Sets the width of the question in proportion to other survey elements in the same line. Accepts CSS values (px, %, in, pt, etc.)." => "A kérdés szélességét az ugyanabban a sorban lévő többi földmérési elemhez viszonyítva állítja be. CSS-értékeket fogad el (px, %, in, pt stb.)."
// surveyvalidator.expression: "Use the magic wand icon to set a validation rule for the question." => "A varázspálca ikonnal állítson be érvényességi szabályt a kérdéshez."
// question.textUpdateMode: "Choose from: \"On lost focus\" - the value is updated when the input field loses focus; \"While typing\" - the value is updated in real-time, as users are typing. The \"Inherit\" option applies the survey-level setting (\"On lost focus\" by default)." => "Válasszon a következők közül: \"Elveszett fókuszban\" - az érték frissül, amikor a beviteli mező elveszíti a fókuszt; \"Gépelés közben\" - az érték valós időben frissül, ahogy a felhasználók gépelnek. Az \"Öröklés\" opció a felmérés szintű beállítást alkalmazza (\"Alapértelmezés szerint elveszett fókuszban\")."
// question.url: "You can use any web service as a data source for multiple-choice questions. To populate choice values, enter the URL of the service providing the data." => "Bármely webszolgáltatást használhat adatforrásként feleletválasztós kérdésekhez. A választási lehetőségek értékeinek feltöltéséhez adja meg az adatokat szolgáltató szolgáltatás URL-címét."
// question.searchMode: "A comparison operation used to filter the drop-down list." => "A legördülő lista szűrésére szolgáló összehasonlító művelet."
// signaturepad.signatureWidth: "Sets the width of the displayed signature area and the resulting image." => "Beállítja a megjelenített aláírási terület szélességét és az eredményül kapott képet."
// signaturepad.signatureHeight: "Sets the height of the displayed signature area and the resulting image." => "Beállítja a megjelenített aláírási terület magasságát és az eredményül kapott képet."
// signaturepad.signatureAutoScaleEnabled: "Select if you want the signature area to fill all available space within the question box while maintaining the default 3:2 aspect ratio. When custom width and height values are set, the setting will keep the aspect ratio of these dimensions." => "Jelölje be, ha azt szeretné, hogy az aláírási terület kitöltse a kérdésmezőben rendelkezésre álló összes helyet, miközben megtartja az alapértelmezett 3:2 képarányt. Egyéni szélességi és magassági értékek beállításakor a beállítás megtartja ezeknek a méreteknek a méretarányát."
// file.imageHeight: "Adjusts the height of the image in the survey results." => "Beállítja a kép magasságát a felmérés eredményeiben."
// file.imageWidth: "Adjusts the width of the image in the survey results." => "Beállítja a kép szélességét a felmérés eredményeiben."
// imagepicker.imageHeight: "Overrides the minimum and maximum height values." => "Felülbírálja a minimális és maximális magassági értékeket."
// imagepicker.imageWidth: "Overrides the minimum and maximum width values." => "Felülbírálja a minimális és maximális szélességi értékeket."
// imagepicker.choices: "\"Value\" serves as an item ID used in conditional rules; \"Text\" is displayed to respondents." => "Az \"érték\" a feltételes szabályokban használt elemazonosítóként szolgál; A \"Szöveg\" felirat jelenik meg a válaszadók számára."
// text.size: "This setting only resizes the input field and doesn't affect the width of the question box. To limit the accepted input length, go to <b>Validation → Maximum character limit</b>." => "Ez a beállítás csak a beviteli mezőt méretezi át, és nincs hatással a kérdésmező szélességére. Az elfogadott bemeneti hossz korlátozásához lépjen az <b>Érvényesítés → Maximális karakterkorlát</b> elemre."
// comment.rows: "Sets the number of displayed lines in the input field. If the input takes up more lines, the scroll bar will appear." => "Beállítja a beviteli mezőben megjelenített sorok számát. Ha a bemenet több sort foglal el, megjelenik a görgetősáv."
// survey.mode: "Choose between: \"Editable\" - enables respondents to fill out your survey; \"Read-only\" - disables form editing." => "Válasszon a következők közül: \"Szerkeszthető\" - lehetővé teszi a válaszadók számára a felmérés kitöltését; \"Csak olvasható\" - letiltja az űrlapszerkesztést."
// matrixdropdowncolumn.name: "A column ID that is not visible to respondents." => "A válaszadók számára nem látható oszlopazonosító."
// matrixdropdowncolumn.isUnique: "When enabled for a column, a respondent is required to provide a unique response for each question within this column." => "Ha engedélyezve van egy oszlophoz, a válaszadónak egyedi választ kell adnia az oszlop minden kérdésére."
// matrixdropdowncolumn.rows: "Sets the number of displayed lines in the input field. If the input takes up more lines, the scroll bar will appear." => "Beállítja a beviteli mezőben megjelenített sorok számát. Ha a bemenet több sort foglal el, megjelenik a görgetősáv."
// matrixdropdowncolumn.visibleIf: "Use the magic wand icon to set a conditional rule that determines column visibility." => "A varázspálca ikonnal feltételes szabályt állíthat be, amely meghatározza az oszlop láthatóságát."
// matrixdropdowncolumn.enableIf: "Use the magic wand icon to set a conditional rule that disables the read-only mode for the column." => "A varázspálca ikonnal állítson be egy feltételes szabályt, amely letiltja az oszlop írásvédett módját."
// matrixdropdowncolumn.requiredIf: "Use the magic wand icon to set a conditional rule that prevents survey submission unless at least one nested question has an answer." => "A varázspálca ikonnal állítson be egy feltételes szabályt, amely megakadályozza a felmérés elküldését, kivéve, ha legalább egy beágyazott kérdésre van válasz."
// matrixdropdowncolumn.showInMultipleColumns: "When selected, creates an individual column for each choice option." => "Ha be van jelölve, minden választási lehetőséghez külön oszlopot hoz létre."
// pehelp.widthMode: "Choose from: \"Static\" - sets a fixed width; \"Responsive\" - makes the survey occupy the full width of the screen; \"Auto\" - applies either of the two depending on the question types used." => "Válasszon a következők közül: \"Statikus\" - rögzített szélességet állít be; \"Reszponzív\" - a felmérés a képernyő teljes szélességét elfoglalja; \"Automatikus\" - a használt kérdéstípusoktól függően a kettő egyikét alkalmazza."
// pehelp.logo: "Paste an image link (no size limits) or click the folder icon to browse a file from your computer (up to 64KB)." => "Illesszen be egy képhivatkozást (méretkorlátozás nélkül), vagy kattintson a mappa ikonra egy fájl böngészéséhez a számítógépről (legfeljebb 64 KB)."
// pehelp.logoWidth: "Sets a logo width in CSS units (px, %, in, pt, etc.)." => "Beállítja az embléma szélességét CSS egységekben (px, %, in, pt stb.)."
// pehelp.logoHeight: "Sets a logo height in CSS units (px, %, in, pt, etc.)." => "Beállítja az embléma magasságát CSS egységekben (px, %, in, pt stb.)."
// pehelp.logoFit: "Choose from: \"None\" - image maintains its original size; \"Contain\" - image is resized to fit while maintaining its aspect ratio; \"Cover\" - image fills the entire box while maintaining its aspect ratio; \"Fill\" - image is stretched to fill the box without maintaining its aspect ratio." => "Válasszon a következők közül: \"Nincs\" - a kép megőrzi eredeti méretét; \"Tartalmaz\" - a kép átméreteződik, hogy illeszkedjen, miközben megtartja képarányát; \"Borító\" - a kép kitölti az egész dobozt, miközben megtartja képarányát; \"Kitöltés\" - a kép a doboz kitöltéséhez nyúlik a képarány megtartása nélkül."
// pehelp.showNavigationButtons: "Sets the visibility and location of navigation buttons on a page." => "Beállítja a navigációs gombok láthatóságát és helyét az oldalon."
// pehelp.showProgressBar: "Sets the visibility and location of a progress bar. The \"Auto\" value displays the progress bar above or below the survey header." => "Beállítja a folyamatjelző sáv láthatóságát és helyét. Az \"Automatikus\" érték megjeleníti a folyamatjelző sávot a felmérés fejléce felett vagy alatt."
// pehelp.showPreviewBeforeComplete: "Enable the preview page with all or answered questions only." => "Engedélyezze az előnézeti oldalt csak az összes vagy megválaszolt kérdéssel."
// pehelp.questionTitleLocation: "Applies to all questions within the survey. This setting can be overridden by title alignment rules at lower levels: panel, page, or question. A lower-level setting will override those on a higher level." => "A felmérésben szereplő összes kérdésre vonatkozik. Ezt a beállítást felülbírálhatják az alacsonyabb szinteken lévő címigazítási szabályok: panel, oldal vagy kérdés. Az alacsonyabb szintű beállítás felülírja a magasabb szinten lévőket."
// pehelp.requiredMark: "A symbol or a sequence of symbols indicating that an answer is required." => "Egy szimbólum vagy szimbólumsorozat, amely jelzi, hogy válaszolni kell."
// pehelp.questionStartIndex: "Enter a number or letter with which you want to start numbering." => "Írja be azt a számot vagy betűt, amellyel a számozást kezdeni szeretné."
// pehelp.questionErrorLocation: "Sets the location of an error message in relation to the question with invalid input. Choose between: \"Top\" - an error text is placed at the top of the question box; \"Bottom\" - an error text is placed at the bottom of the question box." => "Beállítja az érvénytelen bevitelű kérdéssel kapcsolatos hibaüzenet helyét. Válasszon a következők közül: \"Felső\" - egy hibaüzenet kerül a kérdésmező tetejére; \"Alsó\" - egy hibaüzenet kerül a kérdésmező aljára."
// pehelp.autoFocusFirstQuestion: "Select if you want the first input field on each page ready for text entry." => "Válassza ki, ha azt szeretné, hogy az egyes oldalak első beviteli mezője készen álljon a szövegbevitelre."
// pehelp.questionOrder: "Keeps the original order of questions or randomizes them. The effect of this setting is only visible in the Preview tab." => "Megtartja a kérdések eredeti sorrendjét, vagy véletlenszerűvé teszi őket. A beállítás hatása csak az Előnézet lapon látható."
// pehelp.maxTextLength: "For text entry questions only." => "Csak szövegbeviteli kérdések esetén."
// pehelp.maxCommentLength: "For question comments only." => "Csak kérdésekhez fűzött megjegyzésekhez."
// pehelp.autoGrowComment: "Select if you want question comments and Long Text questions to auto-grow in height based on the entered text length." => "Válassza ki, ha azt szeretné, hogy a kérdésmegjegyzések és a hosszú szöveges kérdések magassága automatikusan növekedjen a beírt szöveg hossza alapján."
// pehelp.allowResizeComment: "For question comments and Long Text questions only." => "Csak kérdésekhez és hosszú szöveges kérdésekhez."
// pehelp.calculatedValues: "Custom variables serve as intermediate or auxiliary variables used in form calculations. They take respondent inputs as source values. Each custom variable has a unique name and an expression it's based on." => "Az egyéni változók köztes vagy kiegészítő változókként szolgálnak az űrlapszámításokban. A válaszadó bemeneteit forrásértékként veszik fel. Minden egyéni változónak egyedi neve és egy kifejezése van, amelyen alapul."
// pehelp.includeIntoResult: "Select if you wish the calculated value of the expression to be saved along with survey results." => "Válassza ezt a lehetőséget, ha a kifejezés számított értékét a felmérés eredményeivel együtt szeretné menteni."
// pehelp.triggers: "A trigger is an event or condition that is based on an expression. Once the expression is evaluated to \"true\", a trigger sets off an action. Such an action can optionally have a target question it affects." => "Az eseményindító egy kifejezésen alapuló esemény vagy feltétel. Miután a kifejezés \"true\" (igaz) értékre lett kiértékelve, az eseményindító elindít egy műveletet. Egy ilyen műveletnek opcionálisan lehet egy célkérdése, amelyet érint."
// pehelp.clearInvisibleValues: "Choose whether or not to clear values for questions hidden by conditional logic and when to do it." => "Válassza ki, hogy törli-e a feltételes logika által elrejtett kérdések értékeit, és mikor tegye meg."
// pehelp.textUpdateMode: "Choose from: \"On lost focus\" - the value is updated when the input field loses focus; \"While typing\" - the value is updated in real-time, as users are typing." => "Válasszon a következők közül: \"Elveszett fókuszban\" - az érték frissül, amikor a beviteli mező elveszíti a fókuszt; \"Gépelés közben\" - az érték valós időben frissül, ahogy a felhasználók gépelnek."
// pehelp.columns: "The left value serves as a column ID used in conditional rules, the right value is displayed to respondents." => "A bal oldali érték a feltételes szabályokban használt oszlopazonosítóként szolgál, a jobb oldali érték pedig a válaszadók számára jelenik meg."
// pehelp.rows: "The left value serves as a row ID used in conditional rules, the right value is displayed to respondents." => "A bal oldali érték a feltételes szabályokban használt sorazonosítóként szolgál, a jobb oldali érték a válaszadók számára jelenik meg."
// pehelp.columnMinWidth: "Accepts CSS values (px, %, in, pt, etc.)." => "CSS-értékeket fogad el (px, %, in, pt stb.)."
// pehelp.rowTitleWidth: "Accepts CSS values (px, %, in, pt, etc.)." => "CSS-értékeket fogad el (px, %, in, pt stb.)."
// pehelp.cellErrorLocation: "Sets the location of an error message in relation to a cell with invalid input. The \"Inherit\" option applies the setting from the \"Error message alignment\" property." => "Beállítja a hibaüzenet helyét egy érvénytelen bevitelű cellával kapcsolatban. Az \"Öröklés\" opció a \"Hibaüzenetek igazítása\" tulajdonság beállítását alkalmazza."
// pehelp.keyDuplicationError: "When the \"Prevent duplicate responses\" property is enabled, a respondent attempting to submit a duplicate entry will receive the following error message." => "Ha az \"Ismétlődő válaszok megakadályozása\" tulajdonság engedélyezve van, az ismétlődő bejegyzést beküldeni próbáló válaszadó a következő hibaüzenetet kapja."
// pehelp.totalExpression: "Allows you to calculate total values based on an expression. The expression can include basic calculations (`{q1_id} + {q2_id}`), Boolean expressions (`{age} > 60`) and functions ('iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, etc.)." => "Lehetővé teszi az összesített értékek kiszámítását egy kifejezés alapján. A kifejezés tartalmazhat alapvető számításokat ('{q1_id} + {q2_id}'), logikai kifejezéseket ('{age} > 60') és függvényeket ('iif()', 'today()', 'age()', 'min()', 'max()', 'avg()' stb.)."
// pehelp.confirmDelete: "Triggers a prompt asking to confirm the row deletion." => "Elindít egy kérést, amely a sor törlésének megerősítését kéri."
// pehelp.copyDefaultValueFromLastEntry: "Duplicates answers from the last row and assigns them to the next added dynamic row." => "Megkettőzi a válaszokat az utolsó sorból, és hozzárendeli őket a következő hozzáadott dinamikus sorhoz."
// pehelp.description: "Type a subtitle." => "Írjon be egy feliratot."
// pehelp.locale: "Choose a language to begin creating your survey. To add a translation, switch to a new language and translate the original text here or in the Translations tab." => "Válassza ki a nyelvet a felmérés létrehozásának megkezdéséhez. Fordítás hozzáadásához váltson új nyelvre, és fordítsa le az eredeti szöveget itt vagy a Fordítások lapon."
// pehelp.detailPanelMode: "Sets the location of a details section in relation to a row. Choose from: \"None\" - no expansion is added; \"Under the row\" - a row expansion is placed under each row of the matrix; \"Under the row, display one row expansion only\" - an expansion is displayed under a single row only, the remaining row expansions are collapsed." => "Beállítja a részletszakasz helyét egy sorhoz képest. Válasszon a következők közül: \"Nincs\" - nincs bővítés; \"A sor alatt\" - a mátrix minden sora alá sorbővítés kerül; \"A sor alatt csak egy sor bővítés megjelenítése\" - a bővítés csak egyetlen sor alatt jelenik meg, a fennmaradó sorbővítések összecsukódnak."
// pehelp.imageFit: "Choose from: \"None\" - image maintains its original size; \"Contain\" - image is resized to fit while maintaining its aspect ratio; \"Cover\" - image fills the entire box while maintaining its aspect ratio; \"Fill\" - image is stretched to fill the box without maintaining its aspect ratio." => "Válasszon a következők közül: \"Nincs\" - a kép megőrzi eredeti méretét; \"Tartalmaz\" - a kép átméreteződik, hogy illeszkedjen, miközben megtartja képarányát; \"Borító\" - a kép kitölti az egész dobozt, miközben megtartja képarányát; \"Kitöltés\" - a kép a doboz kitöltéséhez nyúlik a képarány megtartása nélkül."
// pehelp.autoGrow: "Gradually increases the height of the input field as data is being entered. Overrides the \"Input field height (in lines)\" setting." => "Fokozatosan növeli a beviteli mező magasságát az adatok bevitele közben. Felülbírálja a \"Beviteli mező magassága (sorokban)\" beállítást."
// pehelp.allowResize: "The resize handle (or grip) appears in the corner and can be dragged to alter the size of the input field." => "Az átméretező fogópont (vagy fogópont) megjelenik a sarokban, és húzással módosítható a beviteli mező mérete."
// pehelp.timeLimit: "A time interval in seconds after which the survey auto-advances to the Thank You page." => "Az az időintervallum másodpercben, amely után a felmérés automatikusan továbblép a Köszönet oldalra."
// pehelp.timeLimitPerPage: "A time interval in seconds after which the survey auto-advances to the next page." => "Az az időintervallum másodpercben, amely után a felmérés automatikusan továbblép a következő oldalra."
// page.timeLimit: "A time interval in seconds after which the survey auto-advances to the next page." => "Az az időintervallum másodpercben, amely után a felmérés automatikusan továbblép a következő oldalra."
// page.visibleIf: "Use the magic wand icon to set a conditional rule that determines page visibility." => "A varázspálca ikonnal állítson be egy feltételes szabályt, amely meghatározza az oldal láthatóságát."
// page.enableIf: "Use the magic wand icon to set a conditional rule that disables the read-only mode for the page." => "A varázspálca ikonnal állítson be egy feltételes szabályt, amely letiltja az oldal írásvédett módját."
// page.requiredIf: "Use the magic wand icon to set a conditional rule that prevents survey submission unless at least one nested question has an answer." => "A varázspálca ikonnal állítson be egy feltételes szabályt, amely megakadályozza a felmérés elküldését, kivéve, ha legalább egy beágyazott kérdésre van válasz."
// page.questionTitleLocation: "Applies to all questions within this page. If you want to override this setting, define title alignment rules for individual questions or panels. The \"Inherit\" option applies the survey-level setting (\"Top\" by default)." => "Az ezen az oldalon található összes kérdésre vonatkozik. Ha felül szeretné bírálni ezt a beállítást, határozzon meg címigazítási szabályokat az egyes kérdésekhez vagy panelekhez. Az \"Öröklés\" opció a felmérés szintű beállítást alkalmazza (\"Felül\" alapértelmezés szerint)."
// page.questionErrorLocation: "Sets the location of an error message in relation to the question with invalid input. Choose between: \"Top\" - an error text is placed at the top of the question box; \"Bottom\" - an error text is placed at the bottom of the question box. The \"Inherit\" option applies the survey-level setting (\"Top\" by default)." => "Beállítja az érvénytelen bevitelű kérdéssel kapcsolatos hibaüzenet helyét. Válasszon a következők közül: \"Felső\" - egy hibaüzenet kerül a kérdésmező tetejére; \"Alsó\" - egy hibaüzenet kerül a kérdésmező aljára. Az \"Öröklés\" opció a felmérés szintű beállítást alkalmazza (\"Felül\" alapértelmezés szerint)."
// page.questionOrder: "Keeps the original order of questions or randomizes them. The \"Inherit\" option applies the survey-level setting (\"Original\" by default). The effect of this setting is only visible in the Preview tab." => "Megtartja a kérdések eredeti sorrendjét, vagy véletlenszerűvé teszi őket. Az \"Öröklés\" opció a felmérési szintű beállítást alkalmazza (\"Eredeti\" alapértelmezés szerint). A beállítás hatása csak az Előnézet lapon látható."
// page.showNavigationButtons: "Sets the visibility of navigation buttons on the page. The \"Inherit\" option applies the survey-level setting, which defaults to \"Visible\"." => "Beállítja a navigációs gombok láthatóságát az oldalon. Az \"Öröklés\" opció a felmérés szintű beállítást alkalmazza, amely alapértelmezés szerint \"Látható\"."
// pehelp.panelsState: "Choose from: \"Locked\" - users cannot expand or collapse panels; \"Collapse all\" - all panels start in a collapsed state; \"Expand all\" - all panels start in an expanded state; \"First expanded\" - only the first panel is initially expanded." => "Válasszon a következők közül: \"Zárolt\" - a felhasználók nem bonthatják ki vagy csukhatják össze a paneleket; \"Az összes összecsukása\" - minden panel összecsukott állapotban indul; \"Összes kibontása\" - minden panel kibővített állapotban indul; \"Először bővített\" - csak az első panel bővül."
// pehelp.imageLinkName: "Enter a shared property name within the array of objects that contains the image or video file URLs you want to display in the choice list." => "Adjon meg egy megosztott tulajdonságnevet az objektumok tömbjében, amely tartalmazza az adatválaszték-listában megjeleníteni kívánt kép- vagy videofájl URL-címeit."
// pehelp.choices: "The left value serves as an item ID used in conditional rules, the right value is displayed to respondents." => "A bal oldali érték a feltételes szabályokban használt elemazonosítóként szolgál, a jobb oldali érték megjelenik a válaszadók számára."
// pehelp.title: "Type a user-friendly title to display." => "Írja be a megjelenítendő felhasználóbarát címet."
// pehelp.waitForUpload: "Ensures that users won't complete the survey until files are uploaded." => "Biztosítja, hogy a felhasználók ne töltsék ki a felmérést a fájlok feltöltéséig."
// pehelp.minWidth: "Accepts CSS values (px, %, in, pt, etc.)." => "CSS-értékeket fogad el (px, %, in, pt stb.)."
// pehelp.maxWidth: "Accepts CSS values (px, %, in, pt, etc.)." => "CSS-értékeket fogad el (px, %, in, pt stb.)."
// pehelp.width: "Accepts CSS values (px, %, in, pt, etc.)." => "CSS-értékeket fogad el (px, %, in, pt stb.)."
// pehelp.useDisplayValuesInDynamicTexts: "In single- and multiple-selection question types, each choice option has an ID and display value. When selected, this setting shows a display value instead of an ID value in HTML questions and dynamic titles and descriptions of survey elements." => "Az egyszeres és többszörös kijelölésű kérdéstípusokban minden választási lehetőség rendelkezik azonosítóval és megjelenített értékkel. Ha be van jelölve, ez a beállítás azonosító érték helyett megjelenítési értéket jelenít meg a HTML-kérdésekben, valamint a dinamikus címekben és a földmérési elemek leírásában."
// pehelp.clearIfInvisible: "Choose whether or not to clear question values hidden by conditional logic and when to do it. The \"Inherit\" option applies the survey-level setting (\"Upon survey completion\" by default)." => "Válassza ki, hogy törli-e a feltételes logika által elrejtett kérdésértékeket, és mikor tegye meg. Az \"Öröklés\" opció a felmérési szintű beállítást alkalmazza (\"Felmérés befejezésekor\" alapértelmezés szerint)."
// pehelp.choicesFromQuestionMode: "Choose from: \"All\" - copies all choice options from the selected question; \"Selected\" - dynamically copies only selected choice options; \"Unselected\" - dynamically copies only unselected choice options. The \"None\" and \"Other\" options are copied by default if enabled in the source question." => "Válasszon a következők közül: \"Összes\" - átmásolja az összes választási lehetőséget a kiválasztott kérdésből; \"Kiválasztott\" - dinamikusan másolja csak a kiválasztott választási lehetőségeket; \"Nem kiválasztott\" - dinamikusan csak a nem kiválasztott választási lehetőségeket másolja. A \"Nincs\" és az \"Egyéb\" opciók alapértelmezés szerint másolásra kerülnek, ha engedélyezve vannak a forráskérdésben."
// pehelp.showOtherItem: "When selected, users can include additional input in a separate comment box." => "Ha be van jelölve, a felhasználók további bevitelt adhatnak meg egy külön megjegyzésmezőben."
// pehelp.separateSpecialChoices: "Displays each special choice option (\"None\", \"Other\", \"Select All\") on a new line, even when using a multiple-column layout." => "Minden speciális választási lehetőséget (\"Nincs\", \"Egyéb\", \"Összes kijelölése\") új sorban jelenít meg, még akkor is, ha többoszlopos elrendezést használ."
// pehelp.path: "Specify the location within the service dataset where the target array of objects is located. Leave empty if the URL already points to the array." => "Adja meg azt a helyet a szolgáltatás adatkészletén belül, ahol az objektumok céltömbje található. Hagyja üresen, ha az URL-cím már a tömbre mutat."
// pehelp.titleName: "Enter a uniform property name within the array of objects that contains the values you want to display in the choice list." => "Adjon meg egy egységes tulajdonságnevet az adatválaszték-listában megjeleníteni kívánt értékeket tartalmazó objektumtömbben."
// pehelp.allowEmptyResponse: "Select to allow the service to return an empty response or array." => "Jelölje be, ha engedélyezni szeretné, hogy a szolgáltatás üres választ vagy tömböt adjon vissza."
// pehelp.choicesVisibleIf: "Use the magic wand icon to set a conditional rule that determines the visibility of all choice options." => "A varázspálca ikonnal feltételes szabályt állíthat be, amely meghatározza az összes választási lehetőség láthatóságát."
// pehelp.rateValues: "The left value serves as an item ID used in conditional rules, the right value is displayed to respondents." => "A bal oldali érték a feltételes szabályokban használt elemazonosítóként szolgál, a jobb oldali érték megjelenik a válaszadók számára."
// rating.displayMode: "\"Auto\" selects between the \"Buttons\" and \"Dropdown\" modes based on the available width. When the width is insufficient to display buttons, the question displays a dropdown." => "Az \"Automatikus\" a rendelkezésre álló szélesség alapján választ a \"Gombok\" és a \"Legördülő menü\" módok között. Ha a szélesség nem elegendő a gombok megjelenítéséhez, a kérdés legördülő menüt jelenít meg."
// pehelp.valuePropertyName: "Allows you to connect questions that produce results in different formats. When such questions are linked together using a join identifier, this shared property stores selected question values." => "Lehetővé teszi olyan kérdések összekapcsolását, amelyek különböző formátumú eredményeket hoznak. Ha az ilyen kérdések illesztési azonosítóval vannak összekapcsolva, ez a megosztott tulajdonság tárolja a kiválasztott kérdésértékeket."
// pehelp.searchEnabled: "Select if you want to update the drop-down menu contents to match the search query that a user is typing in the input field." => "Válassza ki, ha frissíteni szeretné a legördülő menü tartalmát, hogy megfeleljen a felhasználó által a beviteli mezőbe beírt keresési lekérdezésnek."
// pehelp.valueTrue: "A value to save in survey results when respondents give a positive answer." => "Olyan érték, amelyet meg kell menteni a felmérés eredményeiben, amikor a válaszadók pozitív választ adnak."
// pehelp.valueFalse: "A value to save in survey results when respondents give a negative answer." => "A felmérés eredményeiben mentendő érték, ha a válaszadók negatív választ adnak."
// pehelp.showPreview: "It's not recommended to disable this option as it overrides the Preview image and makes it hard for a user to understand whether the files have been uploaded." => "Nem ajánlott letiltani ezt a beállítást, mivel felülbírálja az előnézeti képet, és megnehezíti a felhasználó számára annak megértését, hogy a fájlok fel lettek-e töltve."
// pehelp.needConfirmRemoveFile: "Triggers a prompt asking to confirm the file deletion." => "A fájl törlésének megerősítését kérő üzenet jelenik meg."
// pehelp.selectToRankEnabled: "Enable to rank only selected choices. Users will drag selected items from the choice list to order them within the ranking area." => "Engedélyezésével csak a kiválasztott választásokat rangsorolhatja. A felhasználók a kiválasztott elemeket az adatválaszték-listából húzzák, hogy a rangsorolási területen belül rendezzék őket."
// pehelp.dataList: "Enter a list of choices that will be suggested to the respondent during input." => "Adja meg azoknak a választási lehetőségeknek a listáját, amelyeket a rendszer javasolni fog a válaszadónak a bevitel során."
// pehelp.inputSize: "The setting only resizes the input fields and doesn't affect the width of the question box." => "A beállítás csak a beviteli mezőket méretezi át, és nincs hatással a kérdésmező szélességére."
// pehelp.itemTitleWidth: "Sets consistent width for all item labels in pixels" => "Konzisztens szélességet állít be az összes elemfelirathoz képpontban"
// pehelp.contentMode: "The \"Auto\" option automatically determines the suitable mode for display - Image, Video, or YouTube - based on the source URL provided." => "Az \"Automatikus\" opció automatikusan meghatározza a megjelenítéshez megfelelő módot - Kép, Videó vagy YouTube - a megadott forrás URL alapján."
// pehelp.altText: "Serves as a substitute when the image cannot be displayed on a user's device and for accessibility purposes." => "Helyettesítőként szolgál, ha a kép nem jeleníthető meg a felhasználó eszközén, valamint kisegítő lehetőségek céljából."
// pehelp.rateColorMode: "Defines the color of the selected emoji when the Rating icon type is set to \"Smileys\". Choose between: \"Default\" - the selected emoji appears in default survey color; \"Scale\" - the selected emoji inherits color from the rating scale." => "Meghatározza a kiválasztott hangulatjel színét, ha az Értékelés ikon típusa \"Hangulatjelek\". Válasszon a következők közül: \"Alapértelmezett\" - a kiválasztott hangulatjel alapértelmezett felmérési színben jelenik meg; \"Skála\" - a kiválasztott hangulatjel örökli a színt a minősítési skálától."
// expression.name: "An expression ID that is not visible to respondents." => "Olyan kifejezésazonosító, amely nem látható a válaszadók számára."
// expression.description: "Type an expression subtitle." => "Írja be a kifejezés alcímét."
// expression.expression: "An expression can include basic calculations (`{q1_id} + {q2_id}`), conditions (`{age} > 60`), and functions ('iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, etc.)." => "A kifejezések tartalmazhatnak alapvető számításokat ('{q1_id} + {q2_id}'), feltételeket ('{age} > 60') és függvényeket ('iif()', 'today()', 'age()', 'min()', 'max()', 'avg()' stb.)."
// pehelp.storeOthersAsComment: "Select to store the \"Other\" option value as a separate property in survey results." => "Válassza ezt a lehetőséget, ha az \"Egyéb\" beállítás értékét külön tulajdonságként szeretné tárolni a felmérés eredményeiben."
// p.swapOrder: "Swap the order of Yes and No" => "Az Igen és a Nem sorrendjének felcserélése"
// p.itemTitleWidth: "Item label width (in px)" => "Elemcímke szélessége (képpontban)"
// p.selectToRankEmptyRankedAreaText: "Text to show if all options are selected" => "Megjelenítendő szöveg, ha az összes beállítás ki van jelölve"
// p.selectToRankEmptyUnrankedAreaText: "Placeholder text for the ranking area" => "A rangsorolási terület helyőrző szövege"
// pe.autoAdvanceAllowComplete: "Complete the survey automatically" => "A felmérés automatikus kitöltése"
// pehelp.autoAdvanceAllowComplete: "Select if you want the survey to complete automatically after a respondent answers all questions." => "Válassza ki, hogy szeretné-e, hogy a felmérés automatikusan kitöltődjön, miután a válaszadó megválaszolta az összes kérdést."
// masksettings.saveMaskedValue: "Save masked value in survey results" => "Maszkolt érték mentése a felmérés eredményeiben"
// patternmask.pattern: "Value pattern" => "Értékminta"
// datetimemask.min: "Minimum value" => "Minimális érték"
// datetimemask.max: "Maximum value" => "Maximális érték"
// numericmask.allowNegativeValues: "Allow negative values" => "Negatív értékek engedélyezése"
// numericmask.thousandsSeparator: "Thousands separator" => "Több ezer szeparátor"
// numericmask.decimalSeparator: "Decimal separator" => "Tizedeselválasztó"
// numericmask.precision: "Value precision" => "Érték pontossága"
// numericmask.min: "Minimum value" => "Minimális érték"
// numericmask.max: "Maximum value" => "Maximális érték"
// currencymask.prefix: "Currency prefix" => "Pénznem előtag"
// currencymask.suffix: "Currency suffix" => "Pénznem utótagja"
// pe.maskType: "Input mask type" => "Beviteli maszk típusa"
// maskTypes.patternmask: "Pattern" => "Minta"
// maskTypes.numericmask: "Numeric" => "Numerikus"
// maskTypes.datetimemask: "Date and Time" => "Dátum és idő"
// maskTypes.currencymask: "Currency" => "Valuta"
// tabs.mask: "Input Mask Settings" => "Beviteli maszk beállításai"
// pe.pattern_placeholder: "Ex.: +1(999)-999-99-99" => "Pl.: +1(999)-999-99-99"
// pe.datetimepattern_placeholder: "Ex.: mm/dd/yyyy" => "Pl.: éééé/hh/nn"
// pe.currencyprefix_placeholder: "Ex.: $" => "Pl.: $"
// pe.currencysuffix_placeholder: "Ex.: USD" => "Pl.: USD"
// pv.textWrapEnabled: "Wrap choices" => "Tördelési lehetőségek"
// question.textWrapEnabled: "Long texts in choice options will automatically generate line breaks to fit within the drop-down menu. Unselect if you want the texts to clip." => "A választási lehetőségekben szereplő hosszú szövegek automatikusan sortöréseket generálnak, hogy elférjenek a legördülő menüben. Törölje a jelet a jelölőnégyzetből, ha le szeretné vágni a szövegeket."
// masksettings.saveMaskedValue: "Select if you want to store the question value with an applied mask in survey results." => "Válassza ki, ha a kérdés értékét alkalmazott maszkkal szeretné tárolni a felmérés eredményeiben."
// patternmask.pattern: "The pattern can contain string literals and the following placeholders: `9` - for a digit; `a` - for an upper- or lower-case letter; `#` - for a digit or an upper- or lower-case letter. Use backslash `\\` to escape a character." => "A minta karakterlánc-konstansokat és a következő helyőrzőket tartalmazhatja: \"9\" - egy számjegyhez; \"a\" - kis- vagy nagybetű esetében; '#' - számjegy vagy kis- vagy nagybetű. A fordított perjel használata \"\\\" a karakter elhagyásához."
// datetimemask.pattern: "The pattern can contain separator characters and the following placeholders: `m` - for month number; `mm` - for month number, with leading zero for single-digit values; `d` - for day of the month; `dd` - for day of the month, with leading zero for single-digit values; `yy` - for the last two digits of the year; `yyyy` - for a four-digit year." => "A minta elválasztó karaktereket és a következő helyőrzőket tartalmazhatja: \"m\" - a hónap száma; \"mm\" – a hónap száma, az első nullával az egyjegyű értékek esetében; \"d\" - a hónap napja; \"dd\" – a hónap napja, az első nullával az egyjegyű értékek esetében; \"yy\" – az év utolsó két számjegye; \"yyyy\" – négy számjegyű évre."
// numericmask.decimalSeparator: "A symbol used to separate the fractional part from the integer part of a displayed number." => "A törtrész és a megjelenített szám egész részének elválasztására szolgáló szimbólum."
// numericmask.thousandsSeparator: "A symbol used to separate the digits of a large number into groups of three." => "Egy szimbólum, amely nagy szám számjegyeit három csoportba sorolja."
// numericmask.precision: "Limits how many digits to retain after the decimal point for a displayed number." => "Korlátozza, hogy hány számjegy maradjon meg a megjelenített szám tizedesvesszője után."
// currencymask.prefix: "One or several symbols to be displayed before the value." => "Egy vagy több szimbólum jelenik meg az érték előtt."
// currencymask.suffix: "One or several symbols to be displayed after the value." => "Egy vagy több szimbólum jelenik meg az érték után."
// ed.translationSource: "Source: " => "Forrás: "
// ed.translationTarget: "Target: " => "Cél: "
// ed.pagePlaceHolder: "The page is empty. Drag an element from the toolbox or click the button below." => "Az oldal üres. Húzzon egy elemet az eszköztárról, vagy kattintson az alábbi gombra."
// maskTypes.none: "None" => "Egyik sem"
// itemvalue@rows.visibleIf: "Make the row visible if" => "Tegye láthatóvá a sort, ha"
// itemvalue@rows.enableIf: "Make the row editable if" => "Tegye szerkeszthetővé a sort, ha:"
// signaturepad.placeholderReadOnly: "Placeholder text in read-only or preview mode" => "Helyőrző szöveg írásvédett vagy előnézeti módban"
// pe.textWrapEnabled: "Wrap choices" => "Tördelési lehetőségek"
// image.contentMode: "The \"Auto\" option automatically determines the suitable mode for display - Image, Video, or YouTube - based on the source URL provided." => "Az \"Automatikus\" opció automatikusan meghatározza a megjelenítéshez megfelelő módot - Kép, Videó vagy YouTube - a megadott forrás URL alapján."
// imagepicker.contentMode: "Choose between \"Image\" and \"Video\" to set the content mode of the media selector. If \"Image\" is selected, ensure that all options provided are image files in the following formats: JPEG, GIF, PNG, APNG, SVG, BMP, ICO. Similarly, if \"Video\" is selected, ensure that all options are direct links to video files in the following formats: MP4, MOV, WMV, FLV, AVI, MKV. Please note that YouTube links are not supported for video options." => "Válasszon a \"Kép\" és a \"Videó\" között a médiaválasztó tartalommódjának beállításához. Ha a \"Kép\" van kiválasztva, győződjön meg arról, hogy az összes rendelkezésre álló opció a következő formátumú képfájlok: JPEG, GIF, PNG, APNG, SVG, BMP, ICO. Hasonlóképpen, ha a \"Video\" van kiválasztva, győződjön meg arról, hogy az összes opció közvetlen link a következő formátumú videofájlokhoz: MP4, MOV, WMV, FLV, AVI, MKV. Felhívjuk figyelmét, hogy a YouTube-linkek nem támogatottak a videóbeállításoknál."
// ed.selectFile: "Select a file" => "Válasszon ki egy fájlt"
// ed.removeFile: "Remove the file" => "A fájl eltávolítása"
// pe.searchMode: "Search Mode" => "Keresési mód"
// ed.surveyPlaceHolderMobile: "Click the \"Add Question\" button below to start creating your form." => "Kattintson az alábbi \"Kérdés hozzáadása\" gombra az űrlap létrehozásának megkezdéséhez."
// ed.pagePlaceHolderMobile: "Click the \"Add Question\" button below to add a new element to the page." => "Kattintson az alábbi \"Kérdés hozzáadása\" gombra, hogy új elemet adjon az oldalhoz."
// ed.panelPlaceHolderMobile: "Click the \"Add Question\" button below to add a new element to the panel." => "Kattintson az alábbi \"Kérdés hozzáadása\" gombra, hogy új elemet adjon a panelhez."
// ed.imagePlaceHolderMobile: "Click the button below and choose an image to upload" => "Kattintson az alábbi gombra, és válassza ki a feltölteni kívánt képet"
// coloralpha.opacity: "Opacity" => "Átlátszatlanság"
// font.family: "Font family" => "Betűcsalád"
// font.color: "Color" => "Szín"
// font.placeholderColor: "Placeholder color" => "Helyőrző színe"
// font.size: "Size" => "Méret"
// theme.themeName: "Theme" => "Téma"
// theme.isPanelless: "Question appearance" => "Kérdés megjelenése"
// theme.editorPanel: "Background and corner radius" => "Háttér és saroksugár"
// theme.questionPanel: "Background and corner radius" => "Háttér és saroksugár"
// theme.primaryColor: "Accent color" => "Kiemelő szín"
// theme.panelBackgroundTransparency: "Panel background opacity" => "Panel hátterének átlátszatlansága"
// theme.questionBackgroundTransparency: "Question background opacity" => "Kérdés hátterének átlátszatlansága"
// theme.fontSize: "Font size" => "Betűméret"
// theme.scale: "Scale" => "Hangsor"
// theme.cornerRadius: "Corner radius" => "Sarok sugara"
// theme.pageTitle: "Title font" => "Cím betűtípusa"
// theme.pageDescription: "Description font" => "Leírás betűtípus"
// theme.questionTitle: "Title font" => "Cím betűtípusa"
// theme.questionDescription: "Description font" => "Leírás betűtípus"
// theme.editorFont: "Font" => "Betűkészlet"
// theme.backgroundOpacity: "Opacity" => "Átlátszatlanság"
// theme.--sjs-font-family: "Font family" => "Betűcsalád"
// theme.--sjs-general-backcolor-dim: "Background color" => "Háttérszín"
// theme.--sjs-primary-backcolor: "Accent background" => "Ékezetes háttér"
// theme.--sjs-primary-forecolor: "Accent foreground" => "Hangsúlyos előtér"
// theme.--sjs-shadow-small: "Shadow effects" => "Árnyék effektusok"
// theme.--sjs-shadow-inner: "Shadow effects" => "Árnyék effektusok"
// theme.--sjs-border-default: "Colors" => "Színek"
// header@header.headerView: "View" => "Nézet"
// header@header.logoPosition: "Logo position" => "Logó pozíciója"
// header@header.surveyTitle: "Survey title font" => "Felmérés címének betűtípusa"
// header@header.surveyDescription: "Survey description font" => "Felmérés leírásának betűtípusa"
// header@header.headerTitle: "Survey title font" => "Felmérés címének betűtípusa"
// header@header.headerDescription: "Survey description font" => "Felmérés leírásának betűtípusa"
// header@header.inheritWidthFrom: "Content area width" => "Tartalomterület szélessége"
// header@header.textAreaWidth: "Text width" => "Szöveg szélessége"
// header@header.backgroundColorSwitch: "Background color" => "Háttérszín"
// header@header.backgroundImage: "Background image" => "Háttérkép"
// header@header.backgroundImageOpacity: "Opacity" => "Átlátszatlanság"
// header@header.overlapEnabled: "Overlap" => "Átfed"
// header@header.logoPositionX: "Logo position" => "Logó pozíciója"
// header@header.titlePositionX: "Title position" => "Cím pozíciója"
// header@header.descriptionPositionX: "Description position" => "Leírás pozíciója"
// weight.400: "Regular" => "Rendszeres"
// weight.600: "Heavy" => "Nehéz"
// weight.700: "Semi-bold" => "Félig félkövér"
// weight.800: "Bold" => "Merész"
// backgroundImageFit.auto: "Auto" => "Kocsi"
// backgroundImageFit.cover: "Cover" => "Fedő"
// backgroundImageFit.contain: "Contain" => "Tartalmaz"
// backgroundImageFit.fill: "Stretch" => "Nyúlik"
// backgroundImageFit.tile: "Tile" => "Cserép"
// backgroundImageAttachment.fixed: "Fixed" => "Fix"
// backgroundImageAttachment.scroll: "Scroll" => "Kézirattekercs"
// headerView.basic: "Basic" => "Alapvető"
// headerView.advanced: "Advanced" => "Haladó"
// inheritWidthFrom.survey: "Same as survey" => "Ugyanaz, mint a felmérés"
// inheritWidthFrom.container: "Fit to container" => "Tárolóhoz igazítás"
// backgroundColorSwitch.none: "None" => "Egyik sem"
// backgroundColorSwitch.accentColor: "Accent color" => "Kiemelő szín"
// backgroundColorSwitch.custom: "Custom" => "Szokás"
// colorPalette.light: "Light" => "Fény"
// colorPalette.dark: "Dark" => "Sötét"
// isPanelless.false: "Default" => "Alapértelmezett"
// isPanelless.true: "Without Panels" => "Panelek nélkül"
// theme.cornerRadius: "Corner radius" => "Sarok sugara"
// theme.fontFamily: "Font family" => "Betűcsalád"
// theme.fontWeightRegular: "Regular" => "Rendszeres"
// theme.fontWeightHeavy: "Heavy" => "Nehéz"
// theme.fontWeightSemiBold: "Semi-bold" => "Félig félkövér"
// theme.fontWeightBold: "Bold" => "Merész"
// theme.color: "Color" => "Szín"
// theme.placeholderColor: "Placeholder color" => "Helyőrző színe"
// theme.size: "Size" => "Méret"
// theme.opacity: "Opacity" => "Átlátszatlanság"
// ed.toolboxFilteredTextPlaceholder: "Type to search..." => "Írja be a kereséshez..."
// ed.toolboxNoResultsFound: "No results found" => "Nincs találat"
// paneldynamic.tabTitlePlaceholder: "Tab title placeholder" => "Lapcím helyőrzője"
// theme.--sjs-special-red: "Error messages" => "Hibaüzenetek"
// paneldynamic.tabTitlePlaceholder: "A fallback text for tab titles that applies when the tab title pattern doesn't produce a meaningful value." => "A lapcímek alapszövege, amely akkor érvényes, ha a lap címmintája nem ad értelmes értéket."
// theme.fontColor: "Font color" => "Betűszín"
// theme.backgroundColor: "Background color" => "Háttérszín"
// pe.questionTitleWidth: "Question title width" => "Kérdés címének szélessége"
// pe.fileInputPlaceholder: "Select a file or paste a file link..." => "Válasszon ki egy fájlt, vagy illesszen be egy fájlhivatkozást..."
// panelbase.questionTitleWidth: "Ex.: 200px" => "Pl.: 200px"
// panel.questionTitleWidth: "Sets consistent width for question titles when they are aligned to the left of their question boxes. Accepts CSS values (px, %, in, pt, etc.)." => "Egységes szélességet állít be a kérdéscímekhez, ha azok a kérdésmezőktől balra vannak igazítva. CSS-értékeket fogad el (px, %, in, pt stb.)."
// page.questionTitleWidth: "Sets consistent width for question titles when they are aligned to the left of their question boxes. Accepts CSS values (px, %, in, pt, etc.)." => "Egységes szélességet állít be a kérdéscímekhez, ha azok a kérdésmezőktől balra vannak igazítva. CSS-értékeket fogad el (px, %, in, pt stb.)."
// pe.commentAreaRows: "Comment area height (in lines)" => "Megjegyzés területének magassága (sorokban)"
// pehelp.commentAreaRows: "Sets the number of displayed lines in text areas for question comments. In the input takes up more lines, the scroll bar appears." => "Beállítja a kérdésmegjegyzések szövegterületein megjelenített sorok számát. A bemenet több sort foglal el, megjelenik a görgetősáv."
// pe.enabled: "Enabled" => "Engedélyezve"
// pe.disabled: "Disabled" => "Fogyatékos"
// pe.inherit: "Inherit" => "Örököl"
// pe.validateVisitedEmptyFields: "Validate empty fields on lost focus" => "Üres mezők ellenőrzése elveszett fókusz esetén"
// panellayoutcolumn.effectiveWidth: "Ex.: 30%" => "Pl.: 30%"
// panellayoutcolumn.questionTitleWidth: "Ex.: 200px" => "Pl.: 200px"
// pehelp.validateVisitedEmptyFields: "Enable this option to trigger validation when a user focuses on an empty input field and then leaves it without making any changes." => "Engedélyezze ezt a beállítást, ha érvényesítést indít el, amikor a felhasználó egy üres beviteli mezőre összpontosít, majd módosítás nélkül elhagyja azt."
// pehelp.colCount: "Arranges choice options in a multi-column layout. When set to 0, the options are displayed in a single line." => "Az adatválaszték-beállításokat többoszlopos elrendezésbe rendezi. Ha 0-ra van állítva, a beállítások egyetlen sorban jelennek meg."
// theme.isPanelless: "This setting applies only to questions outside of a panel." => "Ez a beállítás csak a panelen kívüli kérdésekre vonatkozik."
// theme.primaryColor: "Sets a supplementary color that highlights key survey elements." => "Beállít egy kiegészítő színt, amely kiemeli a földmérés legfontosabb elemeit."
// theme.panelBackgroundTransparency: "Adjusts the transparency of panels and question boxes relative to the survey background." => "Beállítja a panelek és kérdésmezők átlátszóságát a felmérés hátteréhez képest."
// theme.questionBackgroundTransparency: "Adjusts the transparency of input elements relative to the survey background." => "Beállítja a bemeneti elemek átlátszóságát a földmérési háttérhez képest."
// theme.cornerRadius: "Sets the corner radius for all rectangular elements. Enable the Advanced Mode if you want to set individual corner radius values for input elements or panels and question boxes." => "Beállítja az összes téglalap alakú elem saroksugarát. Engedélyezze a Speciális módot, ha egyedi sarokrádiuszértékeket szeretne beállítani a bemeneti elemekhez vagy panelekhez és kérdésmezőkhöz."
// theme.--sjs-general-backcolor-dim: "Sets the main background color of the survey." => "Beállítja a felmérés fő háttérszínét."
// header.inheritWidthFrom: "The \"Same as container\" option auto-adjusts the header content area width to fit into the HTML element the survey is placed in." => "Az \"Ugyanaz, mint a tároló\" beállítás automatikusan beállítja a fejléc tartalomterületének szélességét, hogy illeszkedjen ahhoz a HTML-elemhez, amelybe a felmérés kerül."
// header.textAreaWidth: "The width of the header area that contains the survey title and description, measured in pixels." => "A felmérés címét és leírását tartalmazó fejlécterület szélessége képpontban mérve."
// panellayoutcolumn.effectiveWidth: "Accepts values %." => "Elfogadja a % értékeket"
// panellayoutcolumn.questionTitleWidth: "Accepts values px." => "Elfogadja a px értékeket."
// p.effectiveColSpan: "Column span" => "Oszlop fesztávolsága"
// progressBarInheritWidthFrom.survey: "Same as survey" => "Ugyanaz, mint a felmérés"
// progressBarInheritWidthFrom.container: "Same as container" => "Ugyanaz, mint a konténer"
// file.allowImagesPreview: "Displays thumbnail previews for uploaded files when possible. Unselect if you want to show file icons instead." => "Ha lehetséges, miniatűr előnézeteket jelenít meg a feltöltött fájlokhoz. Törölje a jelölést, ha inkább fájlikonokat szeretne megjeleníteni."
// pehelp.progressBarInheritWidthFrom: "The \"Same as container\" option auto-adjusts the progress bar area width to fit into the HTML element the survey is placed in." => "Az \"Ugyanaz, mint a tároló\" opció automatikusan beállítja a folyamatjelző sáv területének szélességét, hogy illeszkedjen ahhoz a HTML-elemhez, amelybe a felmérés kerül."
// p.progressBarInheritWidthFrom: "Progress bar area width" => "A folyamatjelző sáv területének szélessége"
// maskType.none: "None" => "Egyik sem"
// maskType.pattern: "Pattern" => "Minta"
// maskType.numeric: "Numeric" => "Numerikus"
// maskType.datetime: "Date and Time" => "Dátum és idő"
// maskType.currency: "Currency" => "Valuta"

// inputTextAlignment.auto: "Auto" => "Kocsi"
// inputTextAlignment.left: "Left" => "Balra"
// inputTextAlignment.right: "Right" => "Jobbra"
// pehelp.inputTextAlignment: "Select how to align input value within the field. The default setting \"Auto\" aligns the input value to the right if currency or numeric masking is applied and to the left if not." => "Válassza ki, hogyan szeretné igazítani a bemeneti értéket a mezőn belül. Az alapértelmezett \"Automatikus\" beállítás a bemeneti értéket jobbra igazítja, ha pénznem vagy numerikus maszkolás van alkalmazva, és balra, ha nem."
// p.inputTextAlignment: "Input value alignment" => "Bemeneti érték igazítása"
// paneldynamic.showRangeInProgress: "Show the progress bar" => "A folyamatjelző sáv megjelenítése"
// paneldynamic.showProgressBar: "Show the progress bar" => "A folyamatjelző sáv megjelenítése"
// paneldynamic.progressBarLocation: "Progress bar alignment" => "Folyamatjelző sáv igazítása"
// pv.carousel: "Carousel" => "Körhinta"
// progressBarLocation.top: "Top" => "Felső"
// progressBarLocation.bottom: "Bottom" => "Fenék"
// progressBarLocation.topBottom: "Top and bottom" => "Felső és alsó"
// matrixdropdowncolumn.colCount: "Arranges choice options in a multi-column layout. When set to 0, the options are displayed in a single line. When set to -1, the actual value is inherited from the \"Nested column count\" property of the parent matrix." => "Az adatválaszték-beállításokat többoszlopos elrendezésbe rendezi. Ha 0-ra van állítva, a beállítások egyetlen sorban jelennek meg. Ha -1 értékre van állítva, a tényleges érték a szülőmátrix \"Beágyazott oszlopok száma\" tulajdonságából öröklődik."
// ed.translationYouTubeNotSupported: "YouTube links are not supported." => "A YouTube-linkek nem támogatottak."
// ed.propertyGridPlaceholderTitle: "Start configuring your form" => "Kezdje el konfigurálni az űrlapot"
// ed.propertyGridPlaceholderDescription: "Click any category icon to explore survey settings. Additional settings will become available once you add a survey element to the design surface." => "Kattintson bármelyik kategória ikonjára a felmérési beállítások felfedezéséhez. További beállítások válnak elérhetővé, ha hozzáad egy földmérési elemet a tervezési felülethez."
// pe.caseInsensitive: "Case insensitive" => "Kis- és nagybetűk megkülönböztetése"
// pehelp.caseInsensitive: "Select if uppercase and lowercase letters in the regular expression must be treated as equivalent." => "Válassza ki, hogy a reguláris kifejezés kis- és nagybetűit egyenértékűként kell-e kezelni."

// ed.surveyPlaceholderTitle: "Your form is empty" => "Az űrlap üres"
// ed.surveyPlaceholderTitleMobile: "Your form is empty" => "Az űrlap üres"
// ed.surveyPlaceholderDescription: "Drag an element from the toolbox or click the button below." => "Húzzon egy elemet az eszköztárról, vagy kattintson az alábbi gombra."
// ed.surveyPlaceholderDescriptionMobile: "Drag an element from the toolbox or click the button below." => "Húzzon egy elemet az eszköztárról, vagy kattintson az alábbi gombra."
// ed.previewPlaceholderTitle: "No preview" => "Nincs előnézet"
// ed.previewPlaceholderTitleMobile: "No preview" => "Nincs előnézet"
// ed.previewPlaceholderDescription: "The survey doesn't contain any visible elements." => "A felmérés nem tartalmaz látható elemeket."
// ed.previewPlaceholderDescriptionMobile: "The survey doesn't contain any visible elements." => "A felmérés nem tartalmaz látható elemeket."
// ed.translationsPlaceholderTitle: "No strings to translate" => "Nincsenek lefordítandó karakterláncok"
// ed.translationsPlaceholderTitleMobile: "No strings to translate" => "Nincsenek lefordítandó karakterláncok"
// ed.translationsPlaceholderDescription: "Add elements to your form or change the strings filter in the toolbar." => "Adjon hozzá elemeket az űrlaphoz, vagy módosítsa a karakterláncszűrő szűrőjét az eszköztáron."
// ed.translationsPlaceholderDescriptionMobile: "Add elements to your form or change the strings filter in the toolbar." => "Adjon hozzá elemeket az űrlaphoz, vagy módosítsa a karakterláncszűrő szűrőjét az eszköztáron."
// lg.logicPlaceholderTitle: "No logical rules" => "Nincsenek logikai szabályok"
// lg.logicPlaceholderTitleMobile: "No logical rules" => "Nincsenek logikai szabályok"
// lg.logicPlaceholderDescription: "Create a rule to customize the flow of the survey." => "Hozzon létre egy szabályt a felmérés folyamatának testreszabásához."
// lg.logicPlaceholderDescriptionMobile: "Create a rule to customize the flow of the survey." => "Hozzon létre egy szabályt a felmérés folyamatának testreszabásához."
// pe.showTimer: "Use a timer" => "Időzítő használata"
// theme.advancedMode: "Advanced mode" => "Speciális mód"
// pehelp.timerLocation: "Sets the location of a timer on a page." => "Beállítja az időzítő helyét az oldalon."
// header.mobileHeight: "When set to 0, the height is calculated automatically to accommodate the header's content." => "Ha 0-ra van állítva, a magasság automatikusan kiszámításra kerül, hogy elférjen a fejléc tartalma."
// p.mobileHeight: "Height on smartphones" => "Magasság az okostelefonokon"
// header.overlapEnabled: "When enabled, the top of the survey overlays the bottom of the header." => "Ha engedélyezve van, a felmérés teteje átfedi a fejléc alját."
// ed.creatorSettingTitle: "Creator Settings" => "Alkotói beállítások"
// tabs.accentColors: "Accent colors" => "Kiemelő színek"
// tabs.scaling: "Scaling" => "Rétegképződés"
// panel.showQuestionNumbers: "Assigns numbers to questions nested within this panel." => "Számokat rendel a panelbe ágyazott kérdésekhez."
// creatortheme.--sjs-special-background: "Surface background" => "Felület háttér"
// creatortheme.--sjs-primary-background-500: "Primary" => "Elsődleges"
// creatortheme.--sjs-secondary-background-500: "Secondary" => "Másodlagos"
// creatortheme.surfaceScale: "Surface" => "Felület"
// creatortheme.userInterfaceBaseUnit: "User interface" => "Felhasználói felület"
// creatortheme.fontScale: "Font" => "Betűkészlet"
// names.sc2020: "Survey Creator 2020" => "Felmérés készítője 2020"
// names.default-light: "Light" => "Fény"
// names.default-dark: "Dark" => "Sötét"
// names.default-contrast: "Contrast" => "Kontraszt"
// panel.showNumber: "Number this panel" => "A panel számozása"
// pehelp.autoAdvanceEnabled: "Select if you want the survey to auto-advance to the next page once a respondent has answered all questions on the current page. This feature won't apply if the last question on the page is open-ended or allows multiple answers." => "Válassza ki, hogy szeretné-e, hogy a felmérés automatikusan továbblépjen a következő oldalra, miután a válaszadó megválaszolta az aktuális oldalon található összes kérdést. Ez a funkció nem érvényes, ha az oldal utolsó kérdése nyitott végű, vagy több választ is lehetővé tesz."
// autocomplete.name: "Full Name" => "Teljes név"
// autocomplete.honorific-prefix: "Prefix" => "Előképző"
// autocomplete.given-name: "First Name" => "Keresztnév"
// autocomplete.additional-name: "Middle Name" => "Középső név"
// autocomplete.family-name: "Last Name" => "Vezetéknév"
// autocomplete.honorific-suffix: "Suffix" => "Toldalék"
// autocomplete.nickname: "Nickname" => "Becenév"
// autocomplete.organization-title: "Job Title" => "Beosztás"
// autocomplete.username: "User Name" => "Felhasználónév"
// autocomplete.new-password: "New Password" => "Új jelszó"
// autocomplete.current-password: "Current Password" => "Jelenlegi jelszó"
// autocomplete.organization: "Organization Name" => "Szervezet neve"
// autocomplete.street-address: "Full Street Address" => "Teljes utca és házszám"
// autocomplete.address-line1: "Address Line 1" => "Címsor 1"
// autocomplete.address-line2: "Address Line 2" => "Címsor 2"
// autocomplete.address-line3: "Address Line 3" => "Címsor 3"
// autocomplete.address-level4: "Level 4 Address" => "4. szintű cím"
// autocomplete.address-level3: "Level 3 Address" => "3. szintű cím"
// autocomplete.address-level2: "Level 2 Address" => "2. szintű cím"
// autocomplete.address-level1: "Level 1 Address" => "1. szintű cím"
// autocomplete.country: "Country Code" => "Országkód"
// autocomplete.country-name: "Country Name" => "Ország neve"
// autocomplete.postal-code: "Postal Code" => "Irányítószám"
// autocomplete.cc-name: "Cardholder Name" => "Kártyatulajdonos neve"
// autocomplete.cc-given-name: "Cardholder First Name" => "Kártyabirtokos keresztneve"
// autocomplete.cc-additional-name: "Cardholder Middle Name" => "Kártyabirtokos középső neve"
// autocomplete.cc-family-name: "Cardholder Last Name" => "Kártyabirtokos vezetékneve"
// autocomplete.cc-number: "Credit Card Number" => "Bankkártya száma"
// autocomplete.cc-exp: "Expiration Date" => "Lejárati dátum"
// autocomplete.cc-exp-month: "Expiration Month" => "Lejárati hónap"
// autocomplete.cc-exp-year: "Expiration Year" => "Lejárati év"
// autocomplete.cc-csc: "Card Security Code" => "Kártya biztonsági kód"
// autocomplete.cc-type: "Credit Card Type" => "Hitelkártya típusa"
// autocomplete.transaction-currency: "Transaction Currency" => "Tranzakció pénzneme"
// autocomplete.transaction-amount: "Transaction Amount" => "Tranzakció összege"
// autocomplete.language: "Preferred Language" => "Választott nyelv"
// autocomplete.bday: "Birthday" => "Születésnap"
// autocomplete.bday-day: "Birthday Day" => "Születésnap napja"
// autocomplete.bday-month: "Birthday Month" => "Születésnapi hónap"
// autocomplete.bday-year: "Birthday Year" => "Születésnapi év"
// autocomplete.sex: "Gender" => "Nem"
// autocomplete.url: "Website URL" => "Webhely URL-címe"
// autocomplete.photo: "Profile Photo" => "Profilkép"
// autocomplete.tel: "Telephone Number" => "Telefonszám"
// autocomplete.tel-country-code: "Country Code for Phone" => "Telefonszám országkódja"
// autocomplete.tel-national: "National Telephone Number" => "Nemzeti telefonszám"
// autocomplete.tel-area-code: "Area Code" => "Körzetszám"
// autocomplete.tel-local: "Local Phone Number" => "Helyi telefonszám"
// autocomplete.tel-local-prefix: "Local Phone Prefix" => "Helyi telefon előhívószáma"
// autocomplete.tel-local-suffix: "Local Phone Suffix" => "Helyi telefon utótag"
// autocomplete.tel-extension: "Phone Extension" => "Telefonbővítmény"
// autocomplete.email: "Email Address" => "E-mail cím"
// autocomplete.impp: "Instant Messaging Protocol" => "Azonnali üzenetküldési protokoll"
// ed.lockQuestionsTooltip: "Lock expand/collapse state for questions" => "Kibontási/összecsukási állapot zárolása kérdések esetén"
// pe.listIsEmpty@pages: "You don't have any pages yet" => "Még nincsenek oldalai"
// pe.addNew@pages: "Add new page" => "Új oldal hozzáadása"
// ed.zoomInTooltip: "Zoom In" => "Nagyítás"
// ed.zoomOutTooltip: "Zoom Out" => "Kicsinyítés"
// tabs.surfaceBackground: "Surface Background" => "Felület háttér"
// pe.copyDefaultValueFromLastEntry: "Use answers from the last entry as default" => "Az utolsó bejegyzés válaszainak használata alapértelmezettként"
// colors.gray: "Gray" => "Szürke"
// pe.navigationButtonsLocation: "Navigation buttons alignment" => "Navigációs gombok igazítása"
// pv.allQuestions: "Show all questions" => "Az összes kérdés megjelenítése"
// pv.answeredQuestions: "Show answered questions only" => "Csak a megválaszolt kérdések megjelenítése"
// pehelp.navigationButtonsLocation: "Sets the location of navigation buttons on a page." => "Beállítja a navigációs gombok helyét az oldalon."
// pe.size: "Input field width (in characters)" => "Beviteli mező szélessége (karakterben)"
// pe.choiceValuesFromQuestion: "Use values from the following matrix column or panel question as choice IDs" => "Használja a következő mátrixoszlop vagy panelkérdés értékeit választási lehetőség-azonosítóként:"
// pe.choiceTextsFromQuestion: "Use values from the following matrix column or panel question as choice texts" => "Használja a következő mátrixoszlop vagy panelkérdés értékeit választási szövegként:"
// pehelp.choiceValuesFromQuestion: "In single- and multiple-selection question types, each choice option has an ID and display value. This setting specifies which matrix column or panel question should provide the IDs." => "Az egyszeres és többszörös kijelölésű kérdéstípusokban minden választási lehetőség rendelkezik azonosítóval és megjelenített értékkel. Ez a beállítás határozza meg, hogy melyik mátrixoszlop vagy panelkérdés adja meg az azonosítókat."
// pehelp.choiceTextsFromQuestion: "In single- and multiple-selection question types, each choice option has an ID and display value. This setting specifies which matrix column or panel question should provide the display texts." => "Az egyszeres és többszörös kijelölésű kérdéstípusokban minden választási lehetőség rendelkezik azonosítóval és megjelenített értékkel. Ez a beállítás határozza meg, hogy melyik mátrixoszlop vagy panelkérdés jelenítse meg a megjelenített szövegeket."
// pe.progressBarLocation: "Progress bar alignment" => "Folyamatjelző sáv igazítása"
// progressBarLocation.topbottom: "Top and bottom" => "Felső és alsó"
// progressBarLocation.aboveheader: "Above the header" => "A fejléc felett"
// progressBarLocation.belowheader: "Below the header" => "A fejléc alatt"
// progressBarLocation.off: "Hidden" => "Rejtett"
// survey.progressBarLocation: "Sets the location of the progress bar. The \"Auto\" value displays the progress bar above or below the survey header." => "Beállítja a folyamatjelző sáv helyét. Az \"Automatikus\" érték megjeleníti a folyamatjelző sávot a felmérés fejléce felett vagy alatt."
// survey.readOnly: "Make the survey read-only" => "A felmérés írásvédetté tétele"
// survey.readOnly: "Select if you want to prevent respondents from filling out your survey." => "Válassza ki, ha meg szeretné akadályozni, hogy a válaszadók kitöltsék a felmérést."
// paneldynamic.showNumber: "Number the panel" => "A panel számozása"
// question.showNumber: "Number this question" => "Számozza meg ezt a kérdést"
// pe.previewMode: "Preview mode" => "Előnézeti mód"
// pe.gridLayoutEnabled: "Enable the grid layout" => "A rácselrendezés engedélyezése"
// pe.maskSettings: "Mask settings" => "Maszk beállításai"
// pe.detailErrorLocation: "Row expansion error message alignment" => "Sorbővítési hibaüzenet igazítása"
// pehelp.detailErrorLocation: "Sets the location of error messages for questions nested in detail sections. The \"Inherit\" option applies the setting from the \"Error message alignment\" property." => "Beállítja a hibaüzenetek helyét a részletes szakaszokba ágyazott kérdésekhez. Az \"Öröklés\" opció a \"Hibaüzenetek igazítása\" tulajdonság beállítását alkalmazza."
// pe.gridLayoutColumns: "Grid layout columns" => "Rácsos elrendezés oszlopai"
// pe.startPageTitlePlaceholder: "Start Page" => "Kezdőlap"
// panellayoutcolumn.effectiveWidth: "Effective width, %" => "Effektív szélesség, %"
// panellayoutcolumn.questionTitleWidth: "Question title width, px" => "Kérdés címének szélessége, px"
// pe.listIsEmpty@gridLayoutColumns: "You don't have layout columns yet" => "Még nincsenek elrendezésoszlopok"
// panel.effectiveColSpan: "Specifies how many columns this panel spans within the grid layout." => "Megadja, hogy ez a panel hány oszlopot ölel fel a rácselrendezésen belül."
// panel.gridLayoutColumns: "This table lets you configure each grid column within the panel. It automatically sets the width percentage for each column based on the maximum number of elements in a row. To customize the grid layout, manually adjust these values and define the title width for all questions in each column." => "Ez a táblázat lehetővé teszi az egyes rácsoszlopok konfigurálását a panelen. Automatikusan beállítja az egyes oszlopok szélességének százalékos arányát a sorban lévő elemek maximális száma alapján. A rácsos elrendezés testreszabásához manuálisan állítsa be ezeket az értékeket, és határozza meg az egyes oszlopokban lévő összes kérdés címszélességét."
// pehelp.gridLayoutEnabled: "Survey Creator allows you to manually adjust the inline widths of form elements to control the layout. If this doesn't produce the desired outcome, you can enable the grid layout, which structures form elements using a column-based system. To configure layout columns, select a page or panel and use the \"Question Settings\" → \"Grid columns\" table. To adjust how many columns a question spans, select it and set the desired value in the \"Layout\" → \"Column span\" field." => "A Survey Creator lehetővé teszi az űrlapelemek szövegközi szélességének manuális beállítását az elrendezés vezérléséhez. Ha ez nem hozza meg a kívánt eredményt, engedélyezheti a rácselrendezést, amely oszlopalapú rendszer használatával struktúrákat alkot elemeket. Az elrendezésoszlopok konfigurálásához válasszon ki egy oldalt vagy panelt, és használja a \"Kérdésbeállítások\" → a \"Rácsoszlopok\" táblázatot. Annak beállításához, hogy egy kérdés hány oszlopra terjed ki, válassza ki azt, és állítsa be a kívánt értéket az \"Elrendezés\" → az \"Oszloptartomány\" mezőben."
// question.effectiveColSpan: "Specifies how many columns this question spans within the grid layout." => "Megadja, hogy ez a kérdés hány oszlopra terjed ki a rácsos elrendezésen belül."
// page.gridLayoutColumns: "This table lets you configure each grid column on the page. It automatically sets the width percentage for each column based on the maximum number of elements in a row. To customize the grid layout, manually adjust these values and define the title width for all questions in each column." => "Ez a táblázat lehetővé teszi az oldal egyes rácsoszlopainak konfigurálását. Automatikusan beállítja az egyes oszlopok szélességének százalékos arányát a sorban lévő elemek maximális száma alapján. A rácsos elrendezés testreszabásához manuálisan állítsa be ezeket az értékeket, és határozza meg az egyes oszlopokban lévő összes kérdés címszélességét."

// ed.expandTooltip: "Expand" => "Kibővít"
// ed.collapseTooltip: "Collapse" => "Összeomlás"
// pe.itemTitleWidth_placeholder: "Ex.: 100px" => "Pl.: 100px"
// pehelp.itemTitleWidth: "Sets consistent width for all item labels. Accepts CSS values (px, %, in, pt, etc.)." => "Egységes szélességet állít be az összes cikkfelirathoz. CSS-értékeket fogad el (px, %, in, pt stb.)."
// ed.zoom100Tooltip: "Zoom to 100%" => "Nagyítás 100%-ra"
// ed.addLanguageTooltip: "Add Language" => "Nyelv hozzáadása"
// pehelp.commentAreaRows: "Sets the number of displayed lines in text areas for question comments. If the input takes up more lines, the scroll bar appears." => "Beállítja a szövegterületeken megjelenített sorok számát a kérdésmegjegyzésekhez. Ha a bevitel több sort foglal el, megjelenik a görgetősáv."
// pe.defaultDisplayValue: "Default display value for dynamic texts" => "Dinamikus szövegek alapértelmezett megjelenítési értéke"
// pehelp.defaultDisplayValue: "A value displayed in HTML questions and in the dynamic titles and descriptions of survey elements when the question value is empty." => "A HTML-kérdésekben, valamint a felmérési elemek dinamikus címeiben és leírásaiban megjelenő érték, ha a kérdés értéke üres."
// showQuestionNumbers.recursive: "Recursive numbering" => "Rekurzív számozás"
// paneldynamic.templateQuestionTitleWidth: "Question title width" => "Kérdés címének szélessége"
// pe.allowCustomChoices: "Allow custom choices" => "Egyéni választások engedélyezése"
// paneldynamic.templateQuestionTitleWidth: "Sets consistent width for question titles when they are aligned to the left of their question boxes. Accepts CSS values (px, %, in, pt, etc.)." => "Egységes szélességet állít be a kérdéscímekhez, ha azok a kérdésmezők bal oldalához vannak igazítva. Elfogadja a CSS értékeket (px, %, in, pt stb.)."
// page.name: "A page ID that is not visible to respondents." => "A válaszadók számára nem látható oldalazonosító."
// page.description: "Type a page subtitle." => "Írjon be egy oldalfeliratot."
// page.navigationTitle: "A caption displayed on a navigation button in the progress bar or table of contents (TOC). If you leave this field empty, the navigation button will use the page title or page name. To enable the progress bar or TOC, go to \"Survey\" → \"Navigation\"." => "A folyamatjelző sáv vagy a tartalomjegyzék navigációs gombján megjelenő felirat. Ha üresen hagyja ezt a mezőt, a navigációs gomb az oldal címét vagy nevét fogja használni. A folyamatjelző sáv vagy a tartalomjegyzék engedélyezéséhez lépjen a \"Felmérés\" → a \"Navigáció\" menüpontra."
// pehelp.allowCustomChoices: "Select to let respondents add their own choices if the desired option isn't available in the dropdown. Custom choices will only be stored temporarily for the duration of the current browser session." => "Válassza ki, ha a válaszadók hozzáadhatják saját választási lehetőségeiket, ha a kívánt beállítás nem érhető el a legördülő menüben. Az egyéni beállításokat csak ideiglenesen tárolja a rendszer az aktuális böngésző munkamenet időtartamára."