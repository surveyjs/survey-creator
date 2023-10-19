import { editorLocalization } from "survey-creator-core";

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
  // Strings in SurveyJS Creator
  ed: {
    defaultLocale: "Alapértelmezett ({0})",
    survey: "Kérdőív",
    settings: "Kérdőívbeállítások",
    settingsTooltip: "Nyissa meg a beállításokat",
    surveySettings: "Földmérési beállítások",
    surveySettingsTooltip: "Nyissa meg a felmérési beállításokat",
    themeSettings: "Téma beállítások",
    themeSettingsTooltip: "Nyissa meg a témabeállításokat",
    showPanel: "Panel megjelenítése",
    hidePanel: "Panel elrejtése",
    prevSelected: "Előző kiválasztása",
    nextSelected: "Válassza a következőt",
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
    testSurvey: "Próba",
    themeSurvey: "Témák",
    defaultV2Theme: "Alapértelmezett",
    modernTheme: "Modern",
    defaultTheme: "Alapértelmezett (örökölt)",
    testSurveyAgain: "Próba ismét",
    testSurveyWidth: "Kérdőív szélessége: ",
    navigateToMsg: "Navigálnia kellett",
    logic: "Logika",
    embedSurvey: "Kérdőív beágyazása",
    translation: "Fordítás",
    saveSurvey: "Kérdőív mentése",
    saveSurveyTooltip: "Felmérés mentése",
    designer: "Kérdőívtervező",
    jsonEditor: "JSON szerkesztő",
    jsonHideErrors: "Hibák elrejtése",
    jsonShowErrors: "Hibák megjelenítése",
    undo: "Mégse",
    redo: "Ismét",
    undoTooltip: "Utolsó módosítás visszavonása",
    redoTooltip: "Ismételje meg a módosítást",
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
    propertyGridFilteredTextPlaceholder: "Írja be a kereséshez...",
    toolboxGeneralCategory: "Általános",
    toolboxChoiceCategory: "Választási kérdések",
    toolboxTextCategory: "Szövegbeviteli kérdések",
    toolboxContainersCategory: "Konténerek",
    toolboxMatrixCategory: "Mátrix kérdések",
    toolboxMiscCategory: "Misc",
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
    translationDialogTitle: "Lefordítatlan karakterláncok",
    translationMergeLocaleWithDefault: "{0} összefűzése az alapértelmezett szöveggel.",
    translationPlaceHolder: "Fordítás...",
    themeExportButton: "Kivitel",
    themeImportButton: "Importál",
    surveyJsonExportButton: "Kivitel",
    surveyJsonImportButton: "Importál",
    surveyJsonCopyButton: "Másolás a vágólapra",
    themeResetButton: "Témabeállítások visszaállítása alapértelmezettre",
    bold: "Félkövér",
    italic: "Dőlt",
    underline: "Aláhúzott",
    addNewQuestion: "Kérdés felvétele",
    selectPage: "Válasszon oldalt...",
    carryForwardChoicesCopied: "A választási lehetőségek másolása innen történik",
    htmlPlaceHolder: "A HTML tartalom itt lesz.",
    panelPlaceHolder: "Itt dobjon el egy kérdést az eszköztárból.",
    surveyPlaceHolder: "A felmérés üres. Húzzon egy elemet az eszköztárról, vagy kattintson az alábbi gombra.",
    imagePlaceHolder: "Húzzon ide egy képet, vagy kattintson az alábbi gombra, és válassza ki a feltölteni kívánt képet",
    imageChooseImage: "Válassza a Kép lehetőséget",
    addNewTypeQuestion: "{0} hozzáadása", //{0} is localizable question type
    chooseLogoPlaceholder: "[LOGÓ]",
    auto: "kocsi",
    choices_Item: "Cikk ",
    lg: {
      addNewItem: "Új szabály hozzáadása",
      empty_tab: "Hozzon létre egy szabályt a felmérés folyamatának testreszabásához.",
      page_visibilityName: "Oldal megjelenítése (elrejtése)",
      page_enableName: "Oldal engedélyezése (letiltása)",
      panel_visibilityName: "Panel megjelenítése (elrejtése)",
      panel_enableName: "Panel engedélyezése (letiltása)",
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
      question_resetValueText: "Kérdés visszaállítási értéke: {0}",
      question_setValueText: "Érték hozzárendelése: {1} a kérdéshez: {0}",
      column_visibilityText: "A {1}. kérdés {0} oszlopának láthatóvá tétele", //{0} column name, {1} question name
      column_enableText: "A kérdés {0} oszlopának engedélyezése {1} engedélyezése", //{0} column name, {1} question name
      column_requireText: "Tegye kötelezővé a kérdés {0} oszlopát {1}", //{0} column name, {1} question name
      column_resetValueText: "Az oszlop cellaértékének visszaállítása: {0}",
      column_setValueText: "Cellaérték hozzárendelése: {1} oszlophoz: {0}",
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
      uncompletedRule_cancel: "Nem, szeretném kiegészíteni a szabályokat",
      // expressionSetup: "",
      // actionsSetup: ""
    }
  },
  // Property Editors
  pe: {
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
    expressionHelp: "Kérem adjon meg egy kifejezést. Használjon kapcsos zárójeleket, hogy elérje a kérdések aktuális értékét. Például: '{question1} + {question2}', '({price}*{quantity}) * (100 - {discount})'",
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
    "addNew@choices": "Választási lehetőség hozzáadása",
    expressionIsEmpty: "A kifejezés üres",
    value: "Érték",
    text: "Szöveg",
    rowid: "Sor ID",
    imageLink: "Kép URL",
    columnEdit: "Oszlop szerkesztése: {0}",
    itemEdit: "Elem szerkesztése: {0}",
    url: "URL",
    path: "Útvonal",
    valueName: "Érték megnevezése",
    choicesbyurl: {
      valueName: "Értékek beolvasása a következő JSON-mezőből"
    },
    titleName: "Cím megnevezése",
    imageLinkName: "Képek URL-címének beolvasása a következő JSON-mezőből",
    allowEmptyResponse: "Üres válasz engedélyezése",
    titlePlaceholder: "Cím",
    surveyTitlePlaceholder: "Felmérés címe",
    pageTitlePlaceholder: "Oldal {num}",
    descriptionPlaceholder: "Leírás: __________",
    surveyDescriptionPlaceholder: "Leírás: __________",
    pageDescriptionPlaceholder: "Leírás: __________",
    showOtherItem: "Rendelkezik egyéb értékkel",
    otherText: "Az egyéb érték szövege",
    showNoneItem: "A Nincs lehetőség engedélyezése",
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
    visible: "Látható?",
    isRequired: "Kötelező?",
    markRequired: "Megjelölés kötelezőként",
    removeRequiredMark: "Távolítsa el a szükséges jelet",
    isAllRowRequired: "Válasz kérése minden sorhoz",
    requiredErrorText: "\"Kötelező\" hibaüzenet",
    startWithNewLine: "Új sorban kezdődik?",
    rows: "Sorok száma",
    cols: "Oszlopok",
    placeholder: "Mező kitöltőszövege",
    showPreview: "A kép előnézete látható?",
    storeDataAsText: "Az állomány tartalmát tárolja a JSON-ben, szövegként",
    maxSize: "Maximális állományméret byte-ban",
    imageHeight: "Kép magassága",
    imageWidth: "Kép szélessége",
    rowCount: "Sorok száma",
    columnLayout: "Oszlopok elrendezése",
    addRowLocation: "'Új sor felvétele' gomb elhelyezése",
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
    mode: "Mód (szerkesztés/megtekintés)",
    clearInvisibleValues: "Nemlátható értékek törlése",
    cookieName: "Süti megnevezése (a kérdőív csak egyszer kitölthető)",
    sendResultOnPageNext: "Kérdőív értékének küldése a következő lapra lépéskor",
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
    showPrevButton: "'Előző lap' gomb mutatása",
    firstPageIsStarted: "Az megkezdett lap a kérdőív első oldala.",
    showCompletedPage: "Befejező szöveg mutatása a kérdőív befejezésekor",
    goNextPageAutomatic: "Minden kérdés megválaszolásakor automatikusan a következő lapra lépés",
    showProgressBar: "Előrehaladás-mutató megjelenítése",
    questionTitleLocation: "Kérdés címének helye",
    requiredText: "Kötelező szimbólum",
    questionStartIndex: "Kérdés kezdőindexe (1, 2 vagy 'A', 'a')",
    showQuestionNumbers: "Kérdés számának mutatása",
    questionTitleTemplate: "Kérdés címének sablonja: '{szám}. {kötelező} {cím}'",
    questionErrorLocation: "Kérdés hibaüzenetének helyzete",
    focusFirstQuestionAutomatic: "Első kérdés automatikus kijelölése lapváltás esetén",
    questionsOrder: "Elemek rendezése a lapon",
    maxTimeToFinish: "A kérdőív kitöltésére fordítható maximális idő",
    maxTimeToFinishPage: "Egy lap kitöltésére fordítható maximális idő",
    image: {
      imageHeight: "Képmagasság (CSS által elfogadott értékekben)",
      imageWidth: "Képszélesség (CSS által elfogadott értékekben)"
    },
    // survey templates
    survey: {
      title: "Cím"
    },
    page: {
      title: "Cím",
      maxTimeToFinish: "Az oldal befejezésének határideje (másodpercben)"
    },
    question: {
      page: "Szülőoldal"
    },
    showTimerPanel: "Időzító mutatása",
    showTimerPanelMode: "Időzító módja",
    renderMode: "Megjelenítés módja",
    allowAddPanel: "Új panel hozzáadásának engedélyezése",
    allowRemovePanel: "Panel eltávolításának engedélyezése",
    noEntriesText: "Üres bejegyzések szövege",
    panelAddText: "'Új panel felvétele' gomb szövege",
    panelRemoveText: "'Panel eltávolítása' gomb szövege",
    isSinglePage: "Minden elem mutatása egy lapon",
    html: "HTML",
    expression: "Kifejezés",
    setValue: "Válasz",
    dataFormat: "Képformátum",
    allowAddRows: "Sorok hozzáadásának engedélyezése",
    allowRemoveRows: "Sorok eltávolításának engedélyezése",
    allowRowsDragAndDrop: "Sorhúzás engedélyezése",
    responsiveImageSizeHelp: "Nem érvényes, ha megadja a kép pontos szélességét vagy magasságát.",
    minImageWidth: "Minimális képszélesség",
    maxImageWidth: "Maximális képszélesség",
    minImageHeight: "Minimális képmagasság",
    maxImageHeight: "Maximális képmagasság",
    minValue: "Minimális érték",
    maxValue: "Maximális érték",
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
    maxOthersLength: "Megjegyzés maximális hossza (karakterben)",
    autoGrowComment: "Szükség esetén automatikusan bontsa ki a megjegyzésterületet",
    allowResizeComment: "A szövegterületek átméretezésének engedélyezése a felhasználók számára",
    textUpdateMode: "Szöveges kérdés értékének frissítése",
    focusOnFirstError: "Fókusz beállítása az első érvénytelen válaszra",
    checkErrorsMode: "Érvényesítés futtatása",
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
    paneldynamic: {
      confirmDelete: "Panel törlésének megerősítése"
    },
    panelCount: "Kezdeti panelszám",
    minPanelCount: "Panelek minimális száma",
    maxPanelCount: "Panelek maximális száma",
    panelsState: "Belső panel kibontási állapota",
    templateDescription: "Leíró sablon",
    templateTitle: "Cím sablon",
    panelPrevText: "Előző Panel gomb eszköztipp",
    panelNextText: "Következő Panel gomb elemleírása",
    showRangeInProgress: "Folyamatjelző sáv megjelenítése",
    templateTitleLocation: "Kérdés címének helye",
    panelRemoveButtonLocation: "A Panel gomb helyének eltávolítása",
    hideIfRowsEmpty: "A kérdés elrejtése, ha nincsenek sorok",
    hideColumnsIfEmpty: "Oszlopok elrejtése, ha nincsenek sorok",
    rateValues: "Egyéni díjértékek",
    rateCount: "Árak száma",
    autoGenerate: "Hogyan lehet megadni a díjértékeket?",
    hideIfChoicesEmpty: "A kérdés elrejtése, ha nem tartalmaz választási lehetőségeket",
    hideNumber: "Kérdés számának elrejtése",
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
    showClearButton: "A Törlés gomb megjelenítése",
    showNumber: "Panelszám megjelenítése",
    logoWidth: "Embléma szélessége (CSS által elfogadott értékekben)",
    logoHeight: "Logó magassága (CSS által elfogadott értékekben)",
    readOnly: "Csak olvasható",
    enableIf: "Szerkeszthető, ha",
    emptyRowsText: "\"Nincsenek sorok\" üzenet",
    size: "Beviteli mező mérete (karakterben)",
    separateSpecialChoices: "Külön speciális választási lehetőségek (Nincs, Egyéb, Összes kijelölése)",
    choicesFromQuestion: "Másolja ki a következő kérdés választási lehetőségeit",
    choicesFromQuestionMode: "Milyen lehetőségeket másoljon?",
    showCommentArea: "A megjegyzésterület megjelenítése",
    commentPlaceholder: "Megjegyzés terület helyőrzője",
    displayRateDescriptionsAsExtremeItems: "Sebességleírások megjelenítése extrém értékként",
    rowsOrder: "Sorsorrend",
    columnsLayout: "Oszlopelrendezés",
    columnColCount: "Beágyazott oszlopok száma",
    state: "Panel kibontási állapota",
    correctAnswer: "Helyes válasz",
    defaultPanelValue: "Alapértelmezett értékek",
    cells: "Cella szövegek",
    keyName: "Fő oszlop",
    itemvalue: {
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
    tabs: {
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
      layout: "Elrendezés",
      data: "Adat",
      validation: "Érvényesítés",
      cells: "Cella szövegek",
      showOnCompleted: "Felmérés kész",
      logo: "Embléma a felmérés címében",
      slider: "Csúszka",
      expression: "Kifejezés",
      others: "Mások"
    },
    editProperty: "Tulajdonság szerkesztése '{0}'",
    items: "[ Elemek: {0} ]",
    choicesVisibleIf: "A választási lehetőségek akkor láthatók, ha",
    choicesEnableIf: "A választási lehetőségek akkor választhatók ki, ha",
    columnsEnableIf: "Az oszlopok akkor láthatók, ha",
    rowsEnableIf: "A sorok akkor láthatók, ha",
    indent: "Behúzások hozzáadása",
    panel: {
      indent: "Külső behúzások hozzáadása"
    },
    innerIndent: "Belső behúzások hozzáadása",
    defaultValueFromLastRow: "Alapértelmezett értékek felvétele az utolsó sorból",
    defaultValueFromLastPanel: "Alapértelmezett értékek felvétele az utolsó panelről",
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
    signatureWidth: "Aláírás szélessége",
    signatureHeight: "Aláírási magasság",
    verticalAlign: "Függőleges igazítás",
    alternateRows: "Alternatív sorok",
    columnsVisibleIf: "Az oszlopok akkor láthatók, ha",
    rowsVisibleIf: "A sorok akkor láthatók, ha",
    otherPlaceholder: "Megjegyzés terület helyőrzője",
    filePlaceholder: "Fájl helyőrző szövege",
    photoPlaceholder: "Fénykép helyőrző szövege",
    fileOrPhotoPlaceholder: "Fájl vagy fénykép helyőrző szövege",
    rateType: "Ár típusa"
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
    decimal: "tizedes",
    currency: "valuta",
    percent: "százalék",
    firstExpanded: "első nyitva",
    off: "ki",
    onpanel: "Kezdés az egyes paneleken",
    onPanel: "a panelen",
    onSurvey: "a kérdőíven",
    list: "lista",
    progressTop: "felül",
    progressBottom: "alul",
    progressTopBottom: "alül és felül",
    tab: "Lapfülek",
    horizontal: "horizontális",
    vertical: "vertikális",
    top: "fent",
    bottom: "lent",
    topBottom: "fent és lent",
    both: "Mindkettő",
    left: "bal",
    right: "Jobbra",
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
    text: "SMS",
    time: "Idő",
    url: "URL-cím",
    week: "hét",
    hidden: "rejtett",
    on: "be",
    onPage: "a lapon",
    edit: "szerkesztés",
    display: "mutatás",
    onComplete: "befejezéskor",
    onHidden: "eltűnéskor",
    onHiddenContainer: "Amikor a kérdés vagy annak panelje/oldala rejtetté válik",
    clearInvisibleValues: {
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
      text: "SMS",
      time: "Idő",
      url: "URL",
      week: "Hét"
    },
    all: "összes",
    page: "lap",
    survey: "kérdőív",
    onNextPage: "a következő lapra lépéskor",
    onValueChanged: "az érték változásakor",
    onValueChanging: "A válasz módosítása előtt",
    standard: "Eredeti szerkezet",
    singlePage: "Minden kérdés egyetlen oldalon",
    questionPerPage: "Minden kérdés egy adott oldalon",
    noPreview: "Nincs előnézet",
    showAllQuestions: "Az összes kérdés megjelenítése",
    showAnsweredQuestions: "Csak a megválaszolt kérdések megjelenítése",
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
    showNavigationButtons: {
      none: "Rejtett"
    },
    showProgressBar: {
      off: "Rejtett"
    },
    showTimerPanel: {
      none: "Rejtett"
    },
    showTimerPanelMode: {
      all: "Mindkettő"
    },
    detailPanelMode: {
      none: "Rejtett"
    },
    addRowLocation: {
      default: "A mátrix elrendezésétől függ"
    },
    panelsState: {
      default: "A felhasználók nem bonthatják ki és nem csukhatják össze a paneleket",
      collapsed: "Minden panel össze van csukva",
      expanded: "Minden panel ki van bontva"
    },
    widthMode: {
      auto: "Kocsi",
      static: "Statikus",
      responsive: "Fogékony"
    },
    imageFit: {
      none: "Egyik sem",
      contain: "Tartalmaz",
      cover: "Fedő",
      fill: "Tölt"
    },
    contentMode: {
      auto: "Kocsi",
      image: "Kép",
      video: "Video",
      youtube: "Youtube-videók"
    },
    displayMode: {
      auto: "Kocsi",
      buttons: "Gombok",
      dropdown: "Legördülő menü"
    },
    rateColorMode: {
      default: "Alapértelmezett"
    },
    autoGenerate: {
      "true": "Létrehoz",
      "false": "Manuális bevitel"
    },
    rateType: {
      labels: "Címkék",
      stars: "Csillagok",
      smileys: "Hangulatjelek"
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
  pehelp: {
    cookieName: "A cookie-k megakadályozzák, hogy a felhasználók kétszer töltsék ki ugyanazt a felmérést.",
    size: "Átméretezi a beviteli mező látható területét. Kérjük, használja a <b>Validation → Maximum length</b> beállítást a bemeneti hossz korlátozásához.",
    format: "Használja {0} a tényleges érték helyőrzőjeként.",
    totalText: "Csak akkor látható, ha legalább egy oszlop Összeg típusú vagy Összeg kifejezéssel rendelkezik.",
    acceptedTypes: "További információt az [accept](https://www.w3schools.com/tags/att_input_accept.asp) attribútum leírásában talál.",
    columnColCount: "Csak a Radiogroup és a Checkbox cellatípusokra vonatkozik.",
    autocomplete: "További információkért tekintse meg az [autocomplete](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete) attribútum leírását.",
    valueName: "Ha nem állítja be ezt a tulajdonságot, a válasz a Name tulajdonságban megadott mezőben lesz tárolva.",
    choicesbyurl: {
      valueName: " "
    },
    keyName: "Ha a megadott oszlop azonos értékeket tartalmaz, a felmérés a \"Nem egyedi kulcsérték\" hibát adja vissza.",
    filePlaceholder: "Akkor érvényes, ha a \"Forrás típusa\" \"Helyi fájlok\", vagy ha a kamera nem érhető el",
    photoPlaceholder: "Akkor érvényes, ha a \"Forrás típusa\" a \"Kamera\".",
    fileOrPhotoPlaceholder: "Akkor érvényes, ha a \"Forrás típusa\" értéke \"Helyi fájlok vagy kamera\"."
  },
  // Properties
  p: {
    title: {
      name: "Cím",
      title: "Hagyja üresen, ha megegyezik a 'Megnevezés'-el"
    },
    multiSelect: "Többszörös kijelölés engedélyezése",
    showLabel: "Képfeliratok megjelenítése",
    value: "Érték",
    tabAlign: "Tabulátorigazítás",
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
    titleLocation: "Cím elhelyezése",
    descriptionLocation: "Leírás, hely",
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
    isUnique: "Egyedülálló",
    showInMultipleColumns: "Megjelenítés több oszlopban",
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
    itemSize: "Elem mérete",
    elements: "Elemek",
    content: "Tartalom",
    navigationButtonsVisibility: "Navigációs gombok láthatósága",
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
    allowCameraAccess: "Kamera-hozzáférés engedélyezése",
    scaleColorMode: "Színmód méretezése",
    rateColorMode: "Értékelje a színmódot",
    templateTabTitle: "Sablon lap címe",
    templateVisibleIf: "A sablon akkor látható, ha",
    copyDisplayValue: "Megjelenített érték másolása"
  },
  theme: {
    "--background": "Háttérszín",
    "--background-dim-light": "Háttér halvány világos színe",
    "--primary-foreground": "Elsődleges festőszín",
    "--foreground": "Festőszín",
    "--base-unit": "Alapegység",
    groupGeneral: "Általános",
    groupAdvanced: "Haladó",
    groupHeader: "Fejléc",
    groupBackground: "Háttér",
    groupAppearance: "Megjelenés",
    themeName: "Téma",
    themeMode: "Kérdés megjelenése",
    themeModePanels: "Alapértelmezett",
    themeModeLightweight: "Panelek nélkül",
    themePaletteLight: "Fény",
    themePaletteDark: "Sötét",
    primaryColor: "Kiemelő szín",
    primaryDefaultColor: "Alapértelmezett",
    primaryDarkColor: "Lebeg",
    primaryLightColor: "Kiválasztott",
    coverTitleForecolor: "Cím előszíne",
    coverDescriptionForecolor: "Leírás előszín",
    coverOverlapEnabled: "Átfed",
    backgroundDimColor: "Háttérszín",
    backgroundImage: "Háttérkép",
    backgroundImageFitAuto: "Kocsi",
    backgroundImageFitCover: "Fedő",
    backgroundImageFitContain: "Tartalmaz",
    backgroundImageFitFill: "Nyúlik",
    backgroundImageFitTile: "Cserép",
    backgroundOpacity: "Átlátszatlanság",
    backgroundImageAttachmentFixed: "Fix",
    backgroundImageAttachmentScroll: "Kézirattekercs",
    panelBackgroundTransparency: "Panel hátterének átlátszatlansága",
    questionBackgroundTransparency: "Kérdés hátterének átlátszatlansága",
    questionPanel: "Panel háttere és saroksugara",
    questionTitle: "Kérdés címének betűtípusa",
    questionDescription: "Kérdés leíró betűtípus",
    editorPanel: "Bemeneti elem",
    editorFont: "Bemeneti elem betűtípusa",
    backcolor: "Alapértelmezett háttér",
    hovercolor: "Háttér rámutatása",
    borderDecoration: "Szegély dekoráció",
    accentBackground: "Ékezetes háttér",
    accentForeground: "Hangsúlyos előtér",
    primaryForecolor: "Alapértelmezett szín",
    primaryForecolorLight: "Letiltott szín",
    linesColors: "Alvonalszínek",
    borderDefault: "Sötétebb",
    borderLight: "Öngyújtó",
    fontFamily: "Betűcsalád",
    fontSize: "Betűméret",
    color: "Szín",
    placeholderColor: "Helyőrző színe",
    size: "Méret",
    fontWeightRegular: "Rendszeres",
    fontWeightHeavy: "Nehéz",
    fontWeightSemiBold: "Félig félkövér",
    fontWeightBold: "Merész",
    scale: "Hangsor",
    cornerRadius: "Sarok sugara",
    surveyTitle: "Felmérés címének betűtípusa",
    pageTitle: "Oldalcím betűtípusa",
    pageDescription: "Oldalleíró betűtípus",
    boxShadowX: "X",
    boxShadowY: "Y",
    boxShadowAddRule: "Árnyékhatás hozzáadása",
    opacity: "Átlátszatlanság",
    boxShadowBlur: "Elken",
    boxShadowSpread: "Terjedés",
    boxShadowDrop: "Csepp",
    boxShadowInner: "Belső",
    questionShadow: "Árnyék effektusok",
    editorShadow: "Bemeneti elem árnyékeffektusai",
    headerView: "Nézet",
    headerViewBasic: "Alapvető",
    headerViewAdvanced: "Haladó",
    coverInheritWidthFrom: "Tartalomterület szélessége",
    coverInheritWidthFromSurvey: "Ugyanaz, mint a felmérés",
    coverInheritWidthFromPage: "Laphoz igazítás",
    coverTextAreaWidth: "Szöveg szélessége",
    coverBackgroundColorSwitch: "Háttérszín",
    coverBackgroundColorNone: "Egyik sem",
    coverBackgroundColorAccentColor: "Kiemelő szín",
    coverBackgroundColorCustom: "Szokás",
    horizontalAlignmentLeft: "Balra",
    horizontalAlignmentCenter: "Központ",
    horizontalAlignmentRight: "Jobbra",
    verticalAlignmentTop: "Felső",
    verticalAlignmentMiddle: "Középső",
    verticalAlignmentBottom: "Fenék",
    logoPosition: "Logó pozíciója",
    coverTitlePosition: "Cím pozíciója",
    coverDescriptionPosition: "Leírás Pozíció",
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
      green: "Zöld"
    }
  }
};
editorLocalization.locales["hu"] = huStrings;

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
// lg.expressionSetup: "" => ""
// lg.actionsSetup: "" => ""
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
// pe.isAllRowRequired: "Require answer for all rows" => "Válasz kérése minden sorhoz"
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
// page.maxTimeToFinish: "Time limit to finish the page (in seconds)" => "Az oldal befejezésének határideje (másodpercben)"
// question.page: "Parent page" => "Szülőoldal"
// pe.noEntriesText: "Empty entries text" => "Üres bejegyzések szövege"
// pe.setValue: "Answer" => "Válasz"
// pe.dataFormat: "Image format" => "Képformátum"
// pe.allowAddRows: "Allow adding rows" => "Sorok hozzáadásának engedélyezése"
// pe.allowRemoveRows: "Allow removing rows" => "Sorok eltávolításának engedélyezése"
// pe.allowRowsDragAndDrop: "Allow row drag and drop" => "Sorhúzás engedélyezése"
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
// pe.maxOthersLength: "Maximum comment length (in characters)" => "Megjegyzés maximális hossza (karakterben)"
// pe.autoGrowComment: "Auto-expand comment area if necessary" => "Szükség esetén automatikusan bontsa ki a megjegyzésterületet"
// pe.allowResizeComment: "Allow users to resize text areas" => "A szövegterületek átméretezésének engedélyezése a felhasználók számára"
// pe.textUpdateMode: "Update text question value" => "Szöveges kérdés értékének frissítése"
// pe.focusOnFirstError: "Set focus on the first invalid answer" => "Fókusz beállítása az első érvénytelen válaszra"
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
// pe.panelPrevText: "Previous Panel button tooltip" => "Előző Panel gomb eszköztipp"
// pe.panelNextText: "Next Panel button tooltip" => "Következő Panel gomb elemleírása"
// pe.showRangeInProgress: "Show progress bar" => "Folyamatjelző sáv megjelenítése"
// pe.templateTitleLocation: "Question title location" => "Kérdés címének helye"
// pe.panelRemoveButtonLocation: "Remove Panel button location" => "A Panel gomb helyének eltávolítása"
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
// pe.showClearButton: "Show the Clear button" => "A Törlés gomb megjelenítése"
// pe.showNumber: "Show panel number" => "Panelszám megjelenítése"
// pe.logoWidth: "Logo width (in CSS-accepted values)" => "Embléma szélessége (CSS által elfogadott értékekben)"
// pe.logoHeight: "Logo height (in CSS-accepted values)" => "Logó magassága (CSS által elfogadott értékekben)"
// pe.readOnly: "Read-only" => "Csak olvasható"
// pe.enableIf: "Editable if" => "Szerkeszthető, ha"
// pe.emptyRowsText: "\"No rows\" message" => "\"Nincsenek sorok\" üzenet"
// pe.size: "Input field size (in characters)" => "Beviteli mező mérete (karakterben)"
// pe.separateSpecialChoices: "Separate special choices (None, Other, Select All)" => "Külön speciális választási lehetőségek (Nincs, Egyéb, Összes kijelölése)"
// pe.choicesFromQuestion: "Copy choices from the following question" => "Másolja ki a következő kérdés választási lehetőségeit"
// pe.choicesFromQuestionMode: "Which choices to copy?" => "Milyen lehetőségeket másoljon?"
// pe.showCommentArea: "Show the comment area" => "A megjegyzésterület megjelenítése"
// pe.commentPlaceholder: "Comment area placeholder" => "Megjegyzés terület helyőrzője"
// pe.displayRateDescriptionsAsExtremeItems: "Display rate descriptions as extreme values" => "Sebességleírások megjelenítése extrém értékként"
// pe.rowsOrder: "Row order" => "Sorsorrend"
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
// pe.defaultValueFromLastRow: "Take default values from the last row" => "Alapértelmezett értékek felvétele az utolsó sorból"
// pe.defaultValueFromLastPanel: "Take default values from the last panel" => "Alapértelmezett értékek felvétele az utolsó panelről"
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
// pv.text: "text" => "SMS"
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
// inputType.text: "Text" => "SMS"
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
// addRowLocation.default: "Depends on matrix layout" => "A mátrix elrendezésétől függ"
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
// theme.groupGeneral: "General" => "Általános"
// theme.groupAdvanced: "Advanced" => "Haladó"
// theme.themeName: "Theme" => "Téma"
// theme.themeMode: "Question appearance" => "Kérdés megjelenése"
// theme.themeModePanels: "Default" => "Alapértelmezett"
// theme.themeModeLightweight: "Without Panels" => "Panelek nélkül"
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
// theme.surveyTitle: "Survey title font" => "Felmérés címének betűtípusa"
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
// lg.expressionSetup: "" => ""
// lg.actionsSetup: "" => ""
// names.sharp: "Sharp" => "Éles"
// names.borderless: "Borderless" => "Szegély nélküli"
// names.flat: "Flat" => "Lapos"
// names.doubleborder: "Double Border" => "Dupla szegély"
// names.layered: "Layered" => "Rakott"
// names.solid: "Solid" => "Szilárd"
// names.threedimensional: "3D" => ".3D"
// ed.translationDeleteLanguage: "Are you certain you wish to delete all strings for this language?" => "Biztos benne, hogy törölni szeretné az összes karakterláncot ehhez a nyelvhez?"
// ed.themeResetButton: "Reset theme settings to default" => "Témabeállítások visszaállítása alapértelmezettre"
// lg.expressionSetup: "" => ""
// lg.actionsSetup: "" => ""
// theme.placeholderColor: "Placeholder color" => "Helyőrző színe"
// ed.themeSettings: "Theme Settings" => "Téma beállítások"
// ed.themeSettingsTooltip: "Open theme settings" => "Nyissa meg a témabeállításokat"
// lg.expressionSetup: "" => ""
// lg.actionsSetup: "" => ""
// pe.resetToDefaultCaption: "Reset" => "Átszed"
// pv.file: "Local files" => "Helyi fájlok"
// pv.camera: "Camera" => "Fényképezőgép"
// pv.file-camera: "Local files or camera" => "Helyi fájlok vagy kamera"
// ed.translateUsigAI: "Auto-translate All" => "Összes automatikus fordítása"
// ed.translationDialogTitle: "Untranslated strings" => "Lefordítatlan karakterláncok"
// pe.fastEntryChoicesMinCountError: "Please enter at least {0} items" => "Kérjük, adjon meg legalább {0} elemet"
// lg.question_resetValueName: "Reset question value" => "Kérdés értékének visszaállítása"
// lg.column_resetValue: "Reset column value" => "Oszlopérték visszaállítása"
// lg.expressionSetup: "" => ""
// lg.actionsSetup: "" => ""
// pe.markRequired: "Mark as required" => "Megjelölés kötelezőként"
// pe.removeRequiredMark: "Remove the required mark" => "Távolítsa el a szükséges jelet"
// p.resetValueIf: "Reset value if" => "Érték visszaállítása, ha"
// lg.question_setValueName: "Set question value" => "Kérdésérték beállítása"
// lg.column_resetValueName: "Reset column value" => "Oszlopérték visszaállítása"
// lg.column_setValueName: "Set column value" => "Oszlopérték beállítása"
// lg.setValueExpressionPlaceholder: " An expression whose result will be assigned to the target question." => " Olyan kifejezés, amelynek eredménye a célkérdéshez lesz rendelve."
// lg.expressionSetup: "" => ""
// lg.actionsSetup: "" => ""
// survey.title: "Title" => "Cím"
// page.title: "Title" => "Cím"
// p.setValueIf: "Set value if" => "Érték beállítása, ha"
// theme.groupHeader: "Header" => "Fejléc"
// theme.coverTitleForecolor: "Title forecolor" => "Cím előszíne"
// theme.coverOverlapEnabled: "Overlap" => "Átfed"
// theme.backgroundImageFitFill: "Stretch" => "Nyúlik"
// theme.backgroundImageFitTile: "Tile" => "Cserép"
// theme.headerView: "View" => "Nézet"
// theme.headerViewBasic: "Basic" => "Alapvető"
// theme.headerViewAdvanced: "Advanced" => "Haladó"
// theme.coverInheritWidthFrom: "Content area width" => "Tartalomterület szélessége"
// theme.coverInheritWidthFromSurvey: "Same as survey" => "Ugyanaz, mint a felmérés"
// theme.coverInheritWidthFromPage: "Fit to page" => "Laphoz igazítás"
// theme.coverTextAreaWidth: "Text width" => "Szöveg szélessége"
// theme.coverBackgroundColorSwitch: "Background color" => "Háttérszín"
// theme.coverBackgroundColorNone: "None" => "Egyik sem"
// theme.coverBackgroundColorAccentColor: "Accent color" => "Kiemelő szín"
// theme.coverBackgroundColorCustom: "Custom" => "Szokás"
// theme.horizontalAlignmentLeft: "Left" => "Balra"
// theme.horizontalAlignmentCenter: "Center" => "Központ"
// theme.horizontalAlignmentRight: "Right" => "Jobbra"
// theme.verticalAlignmentTop: "Top" => "Felső"
// theme.verticalAlignmentMiddle: "Middle" => "Középső"
// theme.verticalAlignmentBottom: "Bottom" => "Fenék"
// theme.logoPosition: "Logo Position" => "Logó pozíciója"
// theme.coverTitlePosition: "Title Position" => "Cím pozíciója"
// theme.coverDescriptionPosition: "Description Position" => "Leírás Pozíció"
// lg.question_resetValueText: "reset value for question: {0}" => "Kérdés visszaállítási értéke: {0}"
// lg.question_setValueText: "assign value: {1} to question: {0}" => "Érték hozzárendelése: {1} a kérdéshez: {0}"
// lg.column_resetValueText: "reset cell value for column: {0}" => "Az oszlop cellaértékének visszaállítása: {0}"
// lg.column_setValueText: "assign cell value: {1} to column: {0}" => "Cellaérték hozzárendelése: {1} oszlophoz: {0}"
// lg.expressionSetup: "" => ""
// lg.actionsSetup: "" => ""
// ed.surveyJsonExportButton: "Export" => "Kivitel"
// ed.surveyJsonImportButton: "Import" => "Importál"
// ed.surveyJsonCopyButton: "Copy to clipboard" => "Másolás a vágólapra"
// lg.expressionSetup: "" => ""
// lg.actionsSetup: "" => ""
// pe.filePlaceholder: "File placeholder text" => "Fájl helyőrző szövege"
// pe.photoPlaceholder: "Photo placeholder text" => "Fénykép helyőrző szövege"
// pe.fileOrPhotoPlaceholder: "File or photo placeholder text" => "Fájl vagy fénykép helyőrző szövege"
// pehelp.filePlaceholder: "Applies when \"Source type\" is \"Local files\" or when camera is unavailable" => "Akkor érvényes, ha a \"Forrás típusa\" \"Helyi fájlok\", vagy ha a kamera nem érhető el"
// pehelp.photoPlaceholder: "Applies when \"Source type\" is \"Camera\"." => "Akkor érvényes, ha a \"Forrás típusa\" a \"Kamera\"."
// pehelp.fileOrPhotoPlaceholder: "Applies when \"Source type\" is \"Local files or camera\"." => "Akkor érvényes, ha a \"Forrás típusa\" értéke \"Helyi fájlok vagy kamera\"."
// theme.groupBackground: "Background" => "Háttér"
// theme.groupAppearance: "Appearance" => "Megjelenés"
// theme.coverDescriptionForecolor: "Description forecolor" => "Leírás előszín"