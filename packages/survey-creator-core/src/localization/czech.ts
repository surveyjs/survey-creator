import { editorLocalization } from "survey-creator-core";

export var czStrings = {
  // survey templates
  survey: {
    edit: "Upravit",
    externalHelpLink: "Podívejte se a naučte se vytvářet průzkumy",
    externalHelpLinkUrl: "https://www.youtube.com/channel/UCH2ru9okIcooNZfpIbyq4qQ?view_as=subscriber",
    dropQuestion: "Sem napište otázku ze sady nástrojů.",
    addLogicItem: "Vytvořte pravidlo pro přizpůsobení průběhu průzkumu.",
    copy: "Kopírovat",
    duplicate: "Duplikovat",
    addToToolbox: "Přidat do sady nástrojů",
    deletePanel: "Odstranit panel",
    deleteQuestion: "Odstranit otázku",
    convertTo: "Převést na",
    drag: "Přetáhnout prvek",
  },
  // Question types
  qt: {
    default: "Výchozí",
    checkbox: "Zaškrtávací pole",
    comment: "Komentář",
    imagepicker: "Nástroj pro výběr obrázku",
    ranking: "Pořadí",
    image: "Obrázek",
    dropdown: "Rozbalovací nabídka",
    tagbox: "Vícevýběrová rozbalovací nabídka",
    file: "Soubor",
    html: "HTML",
    matrix: "Matice (jedna volba)",
    matrixdropdown: "Matice (výběr z více možností)",
    matrixdynamic: "Matice (dynamické řádky)",
    multipletext: "Více textů",
    panel: "Panel",
    paneldynamic: "Panel (dynamické panely)",
    radiogroup: "Přepínač",
    rating: "Hodnocení",
    text: "Jeden vstup",
    boolean: "Přepínač (Ano/Ne)",
    expression: "Výraz (pouze pro čtení)",
    signaturepad: "Podpisová podložka",
    buttongroup: "Skupina tlačítek"
  },
  // Strings in SurveyJS Creator
  ed: {
    defaultLocale: "Výchozí ({0})",
    survey: "Průzkum",
    settings: "Nastavení průzkumu",
    settingsTooltip: "Otevřít nastavení průzkumu",
    surveySettings: "Nastavení průzkumu",
    surveySettingsTooltip: "Otevřít nastavení průzkumu",
    themeSettings: "Nastavení motivu",
    themeSettingsTooltip: "Otevření nastavení motivu",
    showPanel: "Zobrazit panel",
    hidePanel: "Skrýt panel",
    prevSelected: "Vybrat předchozí",
    nextSelected: "Vybrat další",
    prevFocus: "Zaostřeno předchozí",
    nextFocus: "Zaostřit na další",
    surveyTypeName: "Průzkum",
    pageTypeName: "Stránka",
    panelTypeName: "Panel",
    questionTypeName: "Otázka",
    columnTypeName: "Sloupec",
    addNewPage: "Přidat novou stránku",
    moveRight: "Přejděte doprava",
    moveLeft: "Přejděte doleva",
    deletePage: "Smazat stránku",
    editPage: "Upravit stránku",
    edit: "Upravit",
    newPageName: "stránka",
    newQuestionName: "otázka",
    newPanelName: "panel",
    newTextItemName: "text",
    testSurvey: "Otestovat průzkum",
    themeSurvey: "Motivy",
    defaultV2Theme: "Výchozí",
    modernTheme: "Moderní",
    defaultTheme: "Výchozí (původní)",
    testSurveyAgain: "Znovu otestovat průzkum",
    testSurveyWidth: "Šířka průzkumu: ",
    navigateToMsg: "Museli jste přejít na:",
    logic: "Logika průzkumu",
    embedSurvey: "Vložit průzkum",
    translation: "Překlad",
    saveSurvey: "Uložit průzkum",
    saveSurveyTooltip: "Uložit průzkum",
    saveTheme: "Uložit motiv",
    saveThemeTooltip: "Uložit motiv",
    designer: "Návrhář průzkumů",
    jsonEditor: "Editor JSON",
    jsonHideErrors: "Skrýt chyby",
    jsonShowErrors: "Zobrazit chyby",
    undo: "Zrušit",
    redo: "Opětovně vrátit",
    undoTooltip: "Vrátit poslední změnu",
    redoTooltip: "Znovu provést změnu",
    showMoreChoices: "Zobrazit více",
    showLessChoices: "Zobrazit méně",
    copy: "Kopírovat",
    cut: "Vyjmout",
    paste: "Vložit",
    copyTooltip: "Zkopírovat výběr do schránky",
    cutTooltip: "Vyjmout výběr do schránky",
    pasteTooltip: "Vložit ze schránky",
    options: "Možnosti",
    generateValidJSON: "Generovat platný JSON",
    generateReadableJSON: "Generovat čitelný JSON",
    toolbox: "Sada nástrojů",
    "property-grid": "Vlastnosti",
    propertyGridFilteredTextPlaceholder: "Zadejte hledaný text...",
    toolboxGeneralCategory: "Obecné",
    toolboxChoiceCategory: "Výběrové otázky",
    toolboxTextCategory: "Textové otázky",
    toolboxContainersCategory: "Kontejnery",
    toolboxMatrixCategory: "Maticové otázky",
    toolboxMiscCategory: "Ostatní",
    correctJSON: "Opravte JSON.",
    surveyResults: "Výsledek průzkumu: ",
    surveyResultsTable: "Jako tabulka",
    surveyResultsJson: "Jako JSON",
    resultsTitle: "Nadpis otázky",
    resultsName: "Název otázky",
    resultsValue: "Hodnota odpovědi",
    resultsDisplayValue: "Hodnota zobrazení",
    modified: "Upraveno",
    saving: "Ukládání",
    saved: "Uloženo",
    propertyEditorError: "Chyba:",
    saveError: "Chyba! Obsah editoru není uložen.",
    translationPropertyGridTitle: "Nastavení jazyka",
    themePropertyGridTitle: "Nastavení motivu",
    translationLanguages: "Jazyky",
    translationDeleteLanguage: "Jste si jisti, že chcete odstranit všechny řetězce pro tento jazyk?",
    translationAddLanguage: "Vyberte jazyk pro překlad",
    translationShowAllStrings: "Zobrazit všechny řetězce",
    translationShowUsedStringsOnly: "Pouze použité řetězce",
    translationShowAllPages: "Zobrazit všechny stránky",
    translationNoStrings: "Žádné řetězce k překladu. Změňte filtr.",
    translationExportToSCVButton: "Export do CSV",
    translationImportFromSCVButton: "Import z CSV",
    translateUsigAI: "Automatický překlad Vše",
    translationDialogTitle: "Nepřeložené řetězce",
    translationMergeLocaleWithDefault: "Sloučit {0} s výchozím lokálem",
    translationPlaceHolder: "Překlad...",
    themeExportButton: "Vývoz",
    themeImportButton: "Dovoz",
    surveyJsonExportButton: "Vývoz",
    surveyJsonImportButton: "Dovoz",
    surveyJsonCopyButton: "Zkopírovat do schránky",
    themeResetButton: "Obnovení výchozího nastavení motivu",
    themeResetConfirmation: "Opravdu chcete resetovat motiv? Všechna vaše přizpůsobení budou ztracena.",
    themeResetConfirmationOk: "Ano, resetovat motiv",
    bold: "Tučně",
    italic: "Kurzíva",
    underline: "Podtržení",
    addNewQuestion: "Přidat otázku",
    selectPage: "Vyberte stránku...",
    carryForwardChoicesCopied: "Volby jsou zkopírovány z",
    htmlPlaceHolder: "Zde bude HTML obsah.",
    panelPlaceHolder: "Sem přetáhněte otázku z panelu nástrojů.",
    surveyPlaceHolder: "Průzkum je prázdný. Přetáhněte prvek z panelu nástrojů nebo klikněte na tlačítko níže.",
    imagePlaceHolder: "Obrázek můžete vložit jeho přetažením na toto místo nebo kliknutím na tlačítko níže",
    imageChooseImage: "Vybrat obrázek",
    addNewTypeQuestion: "Přidat {0}", //{0} is localizable question type
    chooseLogoPlaceholder: "[LOGO]",
    auto: "automaticky",
    choices_Item: "Položka ",
    lg: {
      addNewItem: "Přidat nové pravidlo",
      empty_tab: "Vytvořte pravidlo pro přizpůsobení průběhu průzkumu.",
      page_visibilityName: "Viditelnost stránky",
      page_enableName: "Zapnutí (vypnutí) stránky",
      page_requireName: "Nastavit stránku jako povinné",
      panel_visibilityName: "Viditelnost panelu",
      panel_enableName: "Zapnutí/vypnutí panelu",
      panel_requireName: "Nastavit stránku jako povinné",
      question_visibilityName: "Viditelnost otázky",
      question_enableName: "Zapnutí/vypnutí otázky",
      question_requireName: "Povinné vyplnění otázky",
      question_resetValueName: "Obnovit hodnotu otázky",
      question_setValueName: "Nastavit hodnotu otázky",
      column_visibilityName: "Zobrazit (skrýt) sloupec",
      column_enableName: "Zapnout (vypnout) sloupec",
      column_requireName: "Povinný sloupec",
      column_resetValueName: "Obnovit hodnotu sloupce",
      column_setValueName: "Nastavit hodnotu sloupce",
      trigger_completeName: "Dokončení průzkumu",
      trigger_setvalueName: "Nastavení hodnoty otázky",
      trigger_copyvalueName: "Kopírovat hodnotu otázky",
      trigger_skipName: "Přeskočit na otázku",
      trigger_runExpressionName: "Spuštění vlastního výrazu",
      completedHtmlOnConditionName: "Vlastní text stránky s poděkováním",
      page_visibilityDescription: "Zobrazení stránky, když se logický výraz vrátí jako true. V opačném případě zůstane neviditelná.",
      panel_visibilityDescription: "Zobrazení panel, když se logický výraz vrátí jako true. V opačném případě zůstane neviditelný.",
      panel_enableDescription: "Panel a všechny prvky v něm se aktivují, když logický výraz vrátí hodnotu true. V opačném případě je nechte vypnuté.",
      question_visibilityDescription: "Zobrazit otázku, když logický výraz vrátí hodnotu true. V opačném případě zůstane neviditelná.",
      question_enableDescription: "Povolit otázku, když logický výraz vrátí hodnotu true. V opačném případě zůstane neviditelná.",
      question_requireDescription: "Otázka se stává povinnou, když logický výraz vrátí hodnotu true.",
      trigger_completeDescription: "Když logický výraz vrátí hodnotu true, průzkum je dokončen a koncovému uživateli se zobrazí stránka s poděkováním.",
      trigger_setvalueDescription: "Pokud se změní hodnoty otázek, které jsou použity v logickém výrazu, a logický výraz vrátí hodnotu true, nastaví se hodnota na vybranou otázku.",
      trigger_copyvalueDescription: "Pokud se změní hodnoty otázek, které jsou použity v logickém výrazu, a logický výraz vrátí hodnotu true, pak se hodnota jedné vybrané otázky zkopíruje do jiné vybrané otázky.",
      trigger_skipDescription: "Pokud logický výraz vrátí hodnotu true, průzkum přejde na vybranou otázku/zaměří se na ni.",
      trigger_runExpressionDescription: "Pokud logický výraz vrátí hodnotu true, provede se vlastní výraz. Výsledek tohoto výrazu můžete volitelně nastavit do vybrané otázky.",
      completedHtmlOnConditionDescription: "Pokud logický výraz vrátí hodnotu true, změní se výchozí text stránky s poděkováním na zadaný text.",
      itemExpressionText: "Pokud výraz „{0}“ vrátí hodnotu true:", //{0} - the expression
      itemEmptyExpressionText: "Nové pravidlo",
      page_visibilityText: "Zobrazit stránku {0}", //{0} page name
      panel_visibilityText: "Zobrazit panel {0}", //{0} panel name
      panel_enableText: "Povolit panel {0}", //{0} panel name
      question_visibilityText: "Zobrazit otázku {0}", //{0} question name
      question_enableText: "Povolit otázku {0}", //{0} question name
      question_requireText: "Otázka {0} je povinná", //{0} question name
      question_resetValueText: "Resetovat hodnotu pro otázku: {0}",
      question_setValueText: "přiřadit hodnotu: {1} na otázku: {0}",
      column_visibilityText: "zviditelnit sloupec {0} úlohy {1}", //{0} column name, {1} question name
      column_enableText: "povolit sloupec {0} otázky {1}", //{0} column name, {1} question name
      column_requireText: "povinný sloupec {0} otázky {1}", //{0} column name, {1} question name
      column_resetValueText: "Obnovit hodnotu buňky pro sloupec: {0}",
      column_setValueText: "Přiřaďte hodnotu buňky: {1} sloupci: {0}",
      setValueExpressionPlaceholder: " Výraz, jehož výsledek bude přiřazen cílové otázce.",
      trigger_completeText: "Průzkum se stává dokončeným",
      trigger_setvalueText: "Zpochybnit: {0} hodnota {1}", //{0} question name, {1} setValue
      trigger_setvalueEmptyText: "Jasná hodnota otázky: {0}", //{0} question name
      trigger_copyvalueText: "Kopírovat do otázky: {0} hodnota z otázky {1}", //{0} and {1} question names
      trigger_skipText: "Průzkum přeskočí na otázku {0}", //{0} question name
      trigger_runExpressionText1: "Spustit výraz: „{0}“", //{0} the expression
      trigger_runExpressionText2: " a zpochybnit jeho výsledek: {0}", //{0} question name
      completedHtmlOnConditionText: "Zobrazit vlastní text pro stránku s poděkováním.",
      showAllQuestions: "Všechny otázky",
      showAllActionTypes: "Všechny typy akcí",
      conditions: "Podmínky",
      actions: "Akce",
      expressionEditorTitle: "Definovat podmínky",
      actionsEditorTitle: "Definovat akce",
      deleteAction: "Smazat akci",
      addNewAction: "Přidat novou akci",
      selectedActionCaption: "Vyberte akci, kterou chcete přidat...",
      expressionInvalid: "Logický výraz je prázdný nebo neplatný. Opravte jej.",
      noActionError: "Přidejte alespoň jednu akci.",
      actionInvalid: "Opravte prosím problémy v akcích.",
      uncompletedRule_title: "Opustit záložku?",
      uncompletedRule_text: "Jedno nebo více logických pravidel není dokončeno. Opuštěním záložky dojde ke ztrátě všech neaplikovatelných změn. Jste si jisti, že chcete odejít?",
      uncompletedRule_apply: "Ano",
      uncompletedRule_cancel: "Ne, chci pravidla dokončit"
    }
  },
  // Property Editors
  pe: {
    apply: "Použít",
    ok: "OK",
    save: "Uložit",
    clear: "Vymazat",
    saveTooltip: "Uložit",
    cancel: "Zrušit",
    set: "Nastavit",
    reset: "Resetovat",
    change: "Změnit",
    refresh: "Obnovit",
    close: "Zavřít",
    delete: "Smazat",
    add: "Přidat",
    addNew: "Přidat novou",
    addItem: "Kliknutím přidáte položku...",
    removeItem: "Kliknutím odstraníte položku...",
    dragItem: "Přetáhněte položku",
    addOther: "Ostatní",
    addSelectAll: "Vybrat vše",
    addNone: "Žádné",
    removeAll: "Odstranit vše",
    edit: "Upravit",
    back: "Návrat bez uložení",
    backTooltip: "Návrat bez uložení",
    saveAndBack: "Uložit a vrátit",
    saveAndBackTooltip: "Uložit a vrátit",
    doneEditing: "Hotovo",
    editChoices: "Upravit volby",
    showChoices: "Zobrazit volby",
    move: "Přesunout",
    empty: "<prázdné>",
    emptyValue: "Hodnota je prázdná",
    fastEntry: "Rychlý vstup",
    fastEntryNonUniqueError: "Hodnota \"{0}\" není unikátní",
    fastEntryChoicesCountError: "Prosím, omezte počet položek od {0} do {1}",
    fastEntryChoicesMinCountError: "Zadejte alespoň {0} položek",
    fastEntryPlaceholder: "Data můžete nastavit v následujícím formátu:\nhodnota1|text\nhodnota2",
    formEntry: "Vstupní formulář",
    testService: "Testování služby",
    itemSelectorEmpty: "Vyberte prvek",
    conditionActionEmpty: "Vyberte akci",
    conditionSelectQuestion: "Vyberte otázku...",
    conditionSelectPage: "Vyberte stránku...",
    conditionSelectPanel: "Vyberte panel...",
    conditionValueQuestionTitle: "Zadejte/vyberte hodnotu",
    expressionHelp: "Pro přístup k hodnotám otázek můžete použít složené závorky: {otázka1} + {otázka2}, ({cena}*{množství}) * (100 - {sleva}). Můžete použít funkce jako: iif(), today(), age(), min(), max(), count(), avg() a další.",
    aceEditorHelp: "Stisknutím kláves ctrl+mezerník získáte nápovědu k dokončení výrazu",
    aceEditorRowTitle: "Aktuální řádek",
    aceEditorPanelTitle: "Aktuální panel",
    showMore: "Další podrobnosti naleznete v dokumentaci",
    assistantTitle: "Dostupné otázky:",
    cellsEmptyRowsColumns: "Měl by existovat alespoň jeden sloupec nebo řádek.",
    showPreviewBeforeComplete: "Zobrazit náhled odpovědí před odesláním průzkumu",
    overridingPropertyPrefix: "Nastavit podle ",
    resetToDefaultCaption: "Resetovat",
    propertyIsEmpty: "Zadejte hodnotu",
    propertyIsNoUnique: "Zadejte jedinečnou hodnotu",
    propertyNameIsNotUnique: "Zadejte jedinečný název",
    propertyNameIsIncorrect: "Nepoužívejte vyhrazená slova: \"položka\", \"volba\", \"panel\", \"řádek\".",
    listIsEmpty: "Přidat novou položku",
    "listIsEmpty@choices": "Zatím nebyly přidány žádné volby",
    "addNew@choices": "Přidat volbu",
    expressionIsEmpty: "Výraz je prázdný",
    value: "Hodnota",
    text: "Text",
    rowid: "ID řady",
    imageLink: "Odkaz na obrázek",
    columnEdit: "Upravit sloupec: {0}",
    itemEdit: "Upravit položku: {0}",
    url: "URL",
    path: "Cesta",
    valueName: "Název hodnoty",
    choicesbyurl: {
      valueName: "Získat hodnoty z následujícího JSON pole"
    },
    titleName: "Získat texty z následujícího JSON pole",
    imageLinkName: "Získat URL obrázku z následujícího JSON pole",
    allowEmptyResponse: "Povolit prázdnou odpověď",
    titlePlaceholder: "Sem zadejte název",
    surveyTitlePlaceholder: "Sem zadejte název průzkumu",
    pageTitlePlaceholder: "Sem zadejte název stránky",
    descriptionPlaceholder: "Zadejte popis",
    surveyDescriptionPlaceholder: "Zadejte popis průzkumu",
    pageDescriptionPlaceholder: "Zadejte popis stránky",
    showOtherItem: "Má jinou položku",
    otherText: "Další text položky",
    showNoneItem: "Nemá žádnou položku",
    noneText: "Žádný text položky",
    showSelectAllItem: "Vybral/a všechny položky",
    selectAllText: "Vyberte veškerý text položky",
    choicesMin: "Minimální hodnota pro automaticky generované položky",
    choicesMax: "Maximální hodnota pro automaticky generované položky",
    choicesStep: "Rozdíl mezi automaticky generovanými položkami",
    name: "Název",
    title: "Nadpis",
    cellType: "Typ buňky",
    colCount: "Počet sloupců",
    choicesOrder: "Vyberte pořadí voleb",
    visible: "Viditelná?",
    isRequired: "Povinná?",
    markRequired: "Označit podle potřeby",
    removeRequiredMark: "Odstraňte požadovanou značku",
    isAllRowRequired: "Povinná odpověď pro všechny řádky",
    requiredErrorText: "Text chyby pro povinnou otázku",
    startWithNewLine: "Začátek s novým řádkem?",
    rows: "Počet řádků",
    cols: "Počet sloupců",
    placeholder: "Vstupní zástupný text",
    showPreview: "Zobrazit oblast náhledu",
    storeDataAsText: "Uložit obsah souboru ve výsledku JSON jako text",
    maxSize: "Maximální velikost souboru v bajtech",
    imageHeight: "Výška obrázku",
    imageWidth: "Šířka obrázku",
    rowCount: "Počet řádků",
    columnLayout: "Rozložení sloupců",
    addRowLocation: "Přidat umístění tlačítka řádku",
    addRowText: "Přidat text tlačítka řádku",
    removeRowText: "Odebrat text tlačítka řádku",
    rateMin: "Minimální frekvence",
    rateMax: "Maximální frekvence",
    rateStep: "Krok frekvence",
    minRateDescription: "Popis minimální frekvence",
    maxRateDescription: "Popis maximální sazby",
    inputType: "Typ vstupu",
    optionsCaption: "Popisek možností",
    defaultValue: "Výchozí hodnota",
    cellsDefaultRow: "Výchozí texty buněk",
    surveyEditorTitle: "Upravit nastavení průzkumu",
    qEditorTitle: "Upravit: {0}",
    maxLength: "Maximální délka",
    buildExpression: "Vytvořit",
    editExpression: "Upravit",
    and: "a zároveň",
    or: "nebo",
    remove: "Odebrat",
    addCondition: "Přidat podmínku",
    emptyLogicPopupMessage: "Pro zahájení konfigurace podmínek vyberte otázku.",
    if: "Pokud",
    then: "pak",
    setToName: "Cílová otázka",
    fromName: "Otázka, ze které bude zkopírována odpověď",
    gotoName: "Přeskočit na otázku",
    ruleIsNotSet: "Pravidlo je chybné",
    includeIntoResult: "Zahrnout do výsledků průzkumu",
    showTitle: "Zobrazit/skrýt název",
    expandCollapseTitle: "Rozbalit/sbalit název",
    locale: "Výchozí jazyk",
    simulator: "Vybrat zařízení",
    landscapeOrientation: "Na šířku",
    portraitOrientation: "Přepnout orientaci na výšku",
    mode: "Režim (pouze pro úpravy/čtení)",
    clearInvisibleValues: "Vymazat neviditelné hodnoty",
    cookieName: "Název souboru cookie (pro zakázání dvojího lokálního spuštění průzkumu)",
    sendResultOnPageNext: "Odeslání výsledků průzkumu na další straně",
    storeOthersAsComment: "Uložení hodnoty „others“ do samostatného pole",
    showPageTitles: "Zobrazit názvy stránek",
    showPageNumbers: "Zobrazit čísla stránek",
    pagePrevText: "Text tlačítka předchozí stránky",
    pageNextText: "Text tlačítka další stránky",
    completeText: "Úplný text tlačítka",
    previewText: "Text tlačítka náhledu",
    editText: "Text tlačítka úpravy",
    startSurveyText: "Text tlačítka zahájení",
    showNavigationButtons: "Zobrazit navigační tlačítka (výchozí navigace)",
    showPrevButton: "Zobrazit předchozí tlačítko (uživatel se může vrátit na předchozí stránku)",
    firstPageIsStarted: "První stránka průzkumu je úvodní stránka.",
    showCompletedPage: "Zobrazení dokončené stránky na konci (completedHtml)",
    goNextPageAutomatic: "Po zodpovězení všech otázek automaticky přejít na další stránku",
    showProgressBar: "Zobrazit ukazatel průběhu",
    questionTitleLocation: "Umístění názvu otázky",
    requiredText: "Povinné symboly otázky",
    questionStartIndex: "Index začátku otázky (1, 2 nebo A, a)",
    showQuestionNumbers: "Zobrazit čísla otázek",
    questionTitleTemplate: "Šablona názvu otázky, výchozí je: „{no}. {require} {title}“",
    questionErrorLocation: "Umístění chyby v otázce",
    focusFirstQuestionAutomatic: "Zaměřte se na první otázku týkající se změny stránky",
    questionsOrder: "Pořadí prvků na stránce",
    maxTimeToFinish: "Maximální doba pro dokončení průzkumu",
    maxTimeToFinishPage: "Maximální doba pro dokončení stránky v průzkumu",
    image: {
      imageHeight: "Výška obrázku (v hodnotách akceptovaných CSS)",
      imageWidth: "Výška obrázku (v hodnotách akceptovaných CSS)"
    },
    // survey templates
    survey: {
      title: "Titul"
    },
    page: {
      title: "Titul",
      maxTimeToFinish: "Časový limit pro dokončení stránky (v sekundách)"
    },
    question: {
      page: "Nadřazená stránka"
    },
    showTimerPanel: "Zobrazit panel časovače",
    showTimerPanelMode: "Zobrazit režim panelu časovače",
    renderMode: "Režim vykreslování",
    allowAddPanel: "Povolit přidání panelu",
    allowRemovePanel: "Povolit odstranění panelu",
    noEntriesText: "Text prázdných položek",
    panelAddText: "Přidávání textu na panel",
    panelRemoveText: "Odstraňování textu panelu",
    isSinglePage: "Zobrazit všechny prvky na jedné stránce",
    html: "HTML",
    expression: "Výraz",
    setValue: "Odpověď",
    dataFormat: "Formát obrázku",
    allowAddRows: "Povolit přidání řádků",
    allowRemoveRows: "Povolit odstranění řádků",
    allowRowsDragAndDrop: "Povolit přetahování řádků",
    responsiveImageSizeHelp: "Nepoužije se, pokud specifikujete přesnou šířku nebo výšku obrázku.",
    minImageWidth: "Minimální šířka obrázku",
    maxImageWidth: "Maximální šířka obrázku",
    minImageHeight: "Minimální výška obrázku",
    maxImageHeight: "Maximální výška obrázku",
    minValue: "Minimální hodnota",
    maxValue: "Maximální hodnota",
    minLength: "Minimální délka",
    allowDigits: "Povolit číslice",
    minCount: "Minimální počet",
    maxCount: "Maximální počet",
    regex: "Pravidelný výraz",
    surveyvalidator: {
      text: "Chybová zpráva",
      expression: "Ověřovací výraz"
    },
    totalText: "Celkový text",
    totalType: "Celkový typ",
    totalExpression: "Celkový výraz",
    totalDisplayStyle: "Celkový styl zobrazení",
    totalCurrency: "Celková měna",
    totalFormat: "Celkový formát",
    logo: "Logo (URL nebo base64-kódovaný řetězec)",
    questionsOnPageMode: "Struktura průzkumu",
    maxTextLength: "Maximální délka odpovědi (v počtu znaků)",
    maxOthersLength: "Maximální délka komentáře (v počtu znaků)",
    autoGrowComment: "V případě potřeby automaticky rozbalit komentář",
    allowResizeComment: "Povolit uživatelům změnit velikost textových polí",
    textUpdateMode: "Aktualizovat hodnotu textové otázky",
    focusOnFirstError: "Zvýraznit první neplatnou odpověď",
    checkErrorsMode: "Spustit ověření",
    navigateToUrl: "Přejít na URL",
    navigateToUrlOnCondition: "Dynamická URL",
    completedBeforeHtml: "Text, který se uživateli zobrazí v případě, kdy má již průzkum vyplněný",
    completedHtml: "Text, který se uživateli zobrazí po vyplnění průzkumu",
    completedHtmlOnCondition: "Dynamický text, který se uživateli zobrazí po vyplnění průzkumu",
    loadingHtml: "Text, který se zobrazí během načítání průzkumu",
    commentText: "Text komentáře",
    autocomplete: "Typ automatického vyplňování",
    labelTrue: "Popisek \"pravdivé\" hodnoty",
    labelFalse: "Popisek \"nepravdivé\" hodnoty",
    allowClear: "Zobrazit popisek možností",
    displayStyle: "Styl zobrazení hodnoty",
    format: "Formátovaný řetězec",
    maximumFractionDigits: "Maximální počet desetinných míst",
    minimumFractionDigits: "Minimální počet desetinných míst",
    useGrouping: "Zobrazit oddělovač tisíců",
    allowMultiple: "Povolit více souborů",
    allowImagesPreview: "Náhled obrázků",
    acceptedTypes: "Povolené typy souborů",
    waitForUpload: "Počkejte na dokončení nahrávání",
    needConfirmRemoveFile: "Potvrdit smazání souboru",
    detailPanelMode: "Umístění detailního panelu",
    minRowCount: "Minimální počet řádků",
    maxRowCount: "Maximální počet řádků",
    confirmDelete: "Potvrdit smazání řádku",
    confirmDeleteText: "Potvrzovací zpráva",
    paneldynamic: {
      confirmDelete: "Potvrdit smazání panelu"
    },
    panelCount: "Počáteční počet panelů",
    minPanelCount: "Minimální počet panelů",
    maxPanelCount: "Maximální počet panelů",
    panelsState: "Stav rozbalení vnitřního panelu",
    templateDescription: "Šablona pro popis",
    templateTitle: "Šablona pro nadpis",
    panelPrevText: "Nápověda pro tlačítko \"Předchozí panel\"",
    panelNextText: "Nápověda pro tlačítko \"Další panel\"",
    showRangeInProgress: "Zobrazit ukazatel postupu",
    templateTitleLocation: "Umístění nadpisu otázky",
    panelRemoveButtonLocation: "Umístění tlačítka \"Odstranit panel\"",
    hideIfRowsEmpty: "Skrýt otázku, pokud neexistují žádné řádky",
    hideColumnsIfEmpty: "Skrýt sloupce, pokud neexistují žádné řádky",
    rateValues: "Vlastní hodnoty kurzu",
    rateCount: "Počet kurzů",
    autoGenerate: "Jak určit hodnoty kurzu?",
    hideIfChoicesEmpty: "Skrýt otázku, pokud neobsahuje žádné volby",
    hideNumber: "Skrýt číslo otázky",
    minWidth: "Minimální šířka (v hodnotách akceptovaných CSS)",
    maxWidth: "Maximální šířka (v hodnotách akceptovaných CSS)",
    width: "Šířka (v hodnotách akceptovaných CSS)",
    showHeader: "Zobrazit záhlaví sloupce",
    horizontalScroll: "Zobrazit horizontální posuvník",
    columnMinWidth: "Minimální šířka sloupce (v hodnotách akceptovaných CSS)",
    rowTitleWidth: "Šířka záhlaví řádku (v hodnotách akceptovaných CSS)",
    valueTrue: "\"Pravdivá\" hodnota",
    valueFalse: "\"Nepravdivá\" hodnota",
    minErrorText: "Zpráva pro chybu \"Hodnota je nižší než minimální\"",
    maxErrorText: "Zpráva pro chybu \"Hodnota překračuje maximum\"",
    otherErrorText: "Zpráva pro chybu \"Prázdný komentář\"",
    keyDuplicationError: "Zpráva pro chybu \"Klíč není unikátní\"",
    minSelectedChoices: "Minimální vybrané volby",
    maxSelectedChoices: "Maximální počet vybraných možností",
    showClearButton: "Zobrazit tlačítko \"Vymazat\"",
    showNumber: "Zobrazit číslo panelu",
    logoWidth: "Šířka loga (v hodnotách akceptovaných CSS)",
    logoHeight: "Výška loga (v hodnotách akceptovaných CSS)",
    readOnly: "Pouze pro čtení",
    enableIf: "Upravitelná pokud",
    emptyRowsText: "Zpráva \"Žádné řádky\"",
    size: "Velikost vstupu (v počtu znaků)",
    separateSpecialChoices: "Oddělit speciální volby (žádná, ostatní, vybrat vše)",
    choicesFromQuestion: "Kopírovat volby z následující otázky",
    choicesFromQuestionMode: "Které volby zkopírovat?",
    showCommentArea: "Zobrazit komentář",
    commentPlaceholder: "Zástupný text komentáře",
    displayRateDescriptionsAsExtremeItems: "Zobrazit popisy kurzů jako extrémní hodnoty",
    rowsOrder: "Pořadí řádků",
    columnsLayout: "Rozložení sloupce",
    columnColCount: "Počet vnořených sloupců",
    state: "Stav rozbalení panelu",
    correctAnswer: "Správná odpověď",
    defaultPanelValue: "Výchozí hodnoty",
    cells: "Texty buněk",
    keyName: "Klíčový sloupec",
    itemvalue: {
      text: "Alternativní text"
    },
    logoPosition: "Pozice loga",
    addLogo: "Přidat logo...",
    changeLogo: "Změnit logo...",
    logoPositions: {
      none: "Odstranit logo",
      left: "Vlevo",
      right: "Vpravo",
      top: "Nahoře",
      bottom: "Dole"
    },
    tabs: {
      general: "Obecné",
      fileOptions: "Možnosti",
      html: "Editor HTML",
      columns: "Sloupce",
      rows: "Řádky",
      choices: "Volby",
      items: "Položky",
      visibleIf: "Viditelná, pokud",
      enableIf: "Povolená, pokud",
      requiredIf: "Povinná, pokud",
      rateValues: "Hodnoty sazeb",
      choicesByUrl: "Volby z webu",
      matrixChoices: "Výchozí volby",
      multipleTextItems: "Textové vstupy",
      numbering: "Číslování",
      validators: "Validátory",
      navigation: "Navigace",
      question: "Otázka",
      pages: "Stránky",
      timer: "Časovač/kvíz",
      calculatedValues: "Vypočítané hodnoty",
      triggers: "Spouštěče",
      templateTitle: "Název šablony",
      totals: "Součty",
      logic: "Logika",
      layout: "Rozložení",
      data: "Data",
      validation: "Ověřování",
      cells: "Buňky",
      showOnCompleted: "Zobrazit na stránce Dokončeno",
      logo: "Logo v názvu průzkumu",
      slider: "Posuvník",
      expression: "Výraz",
      others: "Ostatní"
    },
    editProperty: "Upravit vlastnost „{0}“",
    items: "[ Položky: {0} ]",
    choicesVisibleIf: "Volby jsou viditelné, pokud",
    choicesEnableIf: "Volby jsou volitelné, pokud",
    columnsEnableIf: "Sloupce jsou viditelné, pokud",
    rowsEnableIf: "Řádky jsou viditelné, pokud",
    indent: "Přidat odsazení",
    panel: {
      indent: "Přidat vnější odsazení"
    },
    innerIndent: "Přidat vnitřní odsazení",
    defaultValueFromLastRow: "Vzít výchozí hodnoty z posledního řádku",
    defaultValueFromLastPanel: "Vzít výchozí hodnoty z posledního panelu",
    enterNewValue: "Zadejte hodnotu.",
    noquestions: "V průzkumu není žádná otázka.",
    createtrigger: "Vytvořte spouštěč",
    titleKeyboardAdornerTip: "Zadejte tlačítko k úpravě",
    keyboardAdornerTip: "Stisknutím klávesy enter upravíte položku, stisknutím klávesy delete položku odstraníte, stisknutím klávesy alt plus šipky nahoru nebo šipky dolů položku přesunete.",
    triggerOn: "Zapnout ",
    triggerMakePagesVisible: "Zobrazit stránky:",
    triggerMakeQuestionsVisible: "Zobrazit prvky:",
    triggerCompleteText: "Vyplňte průzkum, pokud se vám to podaří.",
    triggerNotSet: "Spouštěč není nastaven",
    triggerRunIf: "Spustit, pokud",
    triggerSetToName: "Změnit hodnotu: ",
    triggerFromName: "Zkopírovat hodnotu z: ",
    triggerRunExpression: "Spustit tento výraz:",
    triggerSetValue: "do: ",
    triggerGotoName: "Přejít na otázku:",
    triggerIsVariable: "Nevkládejte proměnnou do výsledku průzkumu.",
    triggerRunExpressionEmpty: "Zadejte platný výraz",
    emptyExpressionPlaceHolder: "Zde napište výraz...",
    noFile: "Nebyl vybrán žádný soubor",
    clearIfInvisible: "Vymazat hodnotu, pokud se otázka skryje",
    valuePropertyName: "Název hodnotové vlastnosti",
    searchEnabled: "Povolit vyhledávání",
    hideSelectedItems: "Skrýt vybrané položky",
    closeOnSelect: "Po výběru zavřít rozbalovací nabídku",
    signatureWidth: "Šířka podpisu",
    signatureHeight: "Výška podpisu",
    verticalAlign: "Vertikální zarovnání",
    alternateRows: "Alternativní řádky",
    columnsVisibleIf: "Sloupce jsou viditelné, pokud",
    rowsVisibleIf: "Řádky jsou viditelné, pokud",
    otherPlaceholder: "Zástupný text komentáře",
    signaturepad: {
      showPlaceholder: "Zobrazení zástupného symbolu",
      placeholder: "Zástupný text",
      signatureWidth: "Šířka oblasti podpisu",
      signatureHeight: "Výška signatury",
      signatureAutoScaleEnabled: "Automatické škálování oblasti podpisu",
      penMinWidth: "Minimální šířka pera",
      penMaxWidth: "Maximální šířka pera"
    },
    filePlaceholder: "Text zástupného symbolu souboru",
    photoPlaceholder: "Text zástupného symbolu fotografie",
    fileOrPhotoPlaceholder: "Zástupný text souboru nebo fotografie",
    rateType: "Typ sazby"
  },
  // Property values
  pv: {
    "true": "pravda",
    "false": "nepravda",
    file: "Místní soubory",
    camera: "Fotoaparát",
    "file-camera": "Místní soubory nebo fotoaparát",
    inherit: "zdědit",
    show: "zobrazit",
    hide: "skrýt",
    default: "výchozí",
    initial: "úvodní",
    random: "náhodný",
    collapsed: "sbalený",
    expanded: "rozbalený",
    none: "žádný",
    asc: "vzestupný",
    desc: "sestupný",
    indeterminate: "neurčitý",
    decimal: "desetinné číslo",
    currency: "měna",
    percent: "procento",
    firstExpanded: "firstExpanded",
    off: "vypnout",
    onpanel: "Spustit na každém panelu",
    onPanel: "onPanel",
    onSurvey: "onSurvey",
    list: "seznam",
    progressTop: "progressTop",
    progressBottom: "progressBottom",
    progressTopBottom: "progressTopBottom",
    tab: "Záložky",
    horizontal: "horizontální",
    vertical: "vertikální",
    top: "nahoře",
    bottom: "dole",
    topBottom: "nahoře a dole",
    both: "obě",
    left: "vlevo",
    right: "Pravá",
    color: "barva",
    date: "datum",
    datetime: "datum a čas",
    "datetime-local": "datum a čas - lokální",
    email: "email",
    month: "měsíc",
    number: "číslo",
    password: "heslo",
    range: "rozsah",
    tel: "tel",
    text: "text",
    time: "čas",
    url: "url",
    week: "týden",
    hidden: "skrytý",
    on: "zapnout",
    onPage: "onPage",
    edit: "upravit",
    display: "zobrazit",
    onComplete: "onComplete",
    onHidden: "onHidden",
    onHiddenContainer: "Když se otázka nebo její panel/stránka skryje",
    clearInvisibleValues: {
      none: "Nikdy"
    },
    inputType: {
      color: "Barva",
      date: "Datum",
      "datetime-local": "Datum a čas",
      email: "Email",
      month: "Měsíc",
      number: "Číslo",
      password: "Heslo",
      range: "Rozsah",
      tel: "Telefon",
      text: "Text",
      time: "Čas",
      url: "URL",
      week: "Týden"
    },
    all: "vše",
    page: "stránka",
    survey: "průzkum",
    onNextPage: "onNextPage",
    onValueChanged: "onValueChanged",
    onValueChanging: "onValueChanging",
    standard: "standardní",
    singlePage: "jedna stránka",
    questionPerPage: "otázka na stránku",
    noPreview: "bez náhledu",
    showAllQuestions: "zobrazit náhled se všemi otázkami",
    showAnsweredQuestions: "zobrazit náhled se zodpovězenými otázkami",
    pages: "stránky",
    questions: "otázky",
    requiredQuestions: "Odpovězené povinné otázky",
    correctQuestions: "správné otázky",
    buttons: "tlačítka",
    underInput: "pod vstupem",
    underTitle: "pod nadpisem",
    onBlur: "Při ztrátě zvýraznění",
    onTyping: "Během psaní",
    underRow: "Pod řádkem",
    underRowSingle: "Pod řádkem, pouze jeden panel je viditelný",
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
      all: "Obě"
    },
    detailPanelMode: {
      none: "Skrytý"
    },
    addRowLocation: {
      default: "Závisí na rozložení matice"
    },
    panelsState: {
      default: "Uživatelé nemohou rozbalit nebo sbalit panely",
      collapsed: "Všechny panely jsou sbaleny",
      expanded: "Všechny panely jsou rozbaleny"
    },
    widthMode: {
      auto: "Auto",
      static: "Statický",
      responsive: "Responzivní"
    },
    imageFit: {
      none: "Žádný",
      contain: "Obsahuje",
      cover: "Pokrýt",
      fill: "Vyplnit"
    },
    contentMode: {
      auto: "Auto",
      image: "Obrázek",
      video: "Video",
      youtube: "YouTube"
    },
    displayMode: {
      auto: "Auto",
      buttons: "Tlačítka",
      dropdown: "Rozbalovací nabídka"
    },
    rateColorMode: {
      default: "Výchozí"
    },
    autoGenerate: {
      "true": "Generovat",
      "false": "Vložit ručně"
    },
    rateType: {
      labels: "Popisky",
      stars: "Hvězdy",
      smileys: "Smajlíci"
    }
  },
  // Operators
  op: {
    empty: "je prázdný",
    notempty: "není prázdný",
    equal: "se rovná",
    notequal: "se nerovná",
    contains: "obsahuje",
    notcontains: "neobsahuje",
    anyof: "žádný z",
    allof: "všechny",
    greater: "větší",
    less: "nižší",
    greaterorequal: "větší nebo se rovná",
    lessorequal: "nižší nebo se rovná",
    and: "a zároveň",
    or: "nebo"
  },
  // Embed window
  ew: {
    angular: "Použít verzi Angular",
    jquery: "Použít verzi jQuery",
    knockout: "Použít verzi Knockout",
    react: "Použít verzi React",
    vue: "Použít verzi Vue",
    bootstrap: "Pro framework bootstrap",
    modern: "Moderní motiv",
    default: "Výchozí motiv",
    orange: "Oranžový motiv",
    darkblue: "Tmavěmodrý motiv",
    darkrose: "Tmavěrůžový motiv",
    stone: "Kamenný motiv",
    winter: "Zimní motiv",
    winterstone: "Téma zima-kámen",
    showOnPage: "Zobrazit průzkum na stránce",
    showInWindow: "Zobrazit průzkum v okně",
    loadFromServer: "Načíst průzkum JSON ze serveru",
    titleScript: "Skripty a styly",
    titleHtml: "HTML",
    titleJavaScript: "JavaScript"
  },
  // Preview (Survey)
  ts: {
    selectPage: "Vyberte stránku a otestujte ji:",
    showInvisibleElements: "Zobrazit neviditelné prvky",
    hideInvisibleElements: "Skrýt neviditelné prvky"
  },
  validators: {
    answercountvalidator: "počet odpovědí",
    emailvalidator: "e-mail",
    expressionvalidator: "výraz",
    numericvalidator: "Číslo",
    regexvalidator: "regex",
    textvalidator: "text"
  },
  triggers: {
    completetrigger: "dokončit průzkum",
    setvaluetrigger: "nastavit hodnotu",
    copyvaluetrigger: "zkopírovat hodnotu",
    skiptrigger: "přeskočit na otázku",
    runexpressiontrigger: "spustit výraz",
    visibletrigger: "změnit viditelnost (zastaralé)"
  },
  pehelp: {
    cookieName: "Cookies brání uživatelům vyplnit průzkum vícekrát.",
    size: "Změní velikost viditelné oblasti vstupního pole. <b>Použijte nastavení Ověření → Maximální délka</b> pro omezení vstupní délky.",
    format: "Použít {0} jako zástupný text pro skutečnou hodnotu.",
    totalText: "Viditelné pouze v případě, že alespoň jeden sloupec je typu suma nebo obsahuje sumarizační výraz.",
    acceptedTypes: "Pro více informací viz [accept](https://www.w3schools.com/tags/att_input_accept.asp).",
    columnColCount: "Vztahuje se pouze na typy přepínač a zaškrtávací políčka.",
    autocomplete: "Pro více informací viz [autocomplete](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete).",
    valueName: "Pokud tuto vlastnost nenastavíte, odpověď bude uložena v poli specifikovaném názvem otázky.",
    choicesbyurl: {
      valueName: " "
    },
    keyName: "Pokud zadaný sloupec obsahuje totožné hodnoty, průzkum vyhodí chybu „Klíč není unikátní“.",
    filePlaceholder: "Platí, když je \"Typ zdroje\" nastaven na \"Místní soubory\" nebo když je kamera nedostupná",
    photoPlaceholder: "Platí, když je \"Typ zdroje\" nastaven na \"Fotoaparát\".",
    fileOrPhotoPlaceholder: "Platí, když \"Typ zdroje\" je \"Místní soubory nebo kamera\"."
  },
  // Properties
  p: {
    title: {
      name: "nadpis",
      title: "Nechte pole prázdné, pokud je stejné jako „Název”"
    },
    multiSelect: "Povolit výběr více položek",
    showLabel: "Zobrazit popisky obrázku",
    value: "Hodnota",
    tabAlign: "Zarovnání záložek",
    description: "Popis",
    logoFit: "Přizpůsobit logo",
    pages: "Stránky",
    questions: "Otázky",
    triggers: "Spouštěče",
    calculatedValues: "Vypočítané hodnoty",
    surveyId: "Id průzkumu",
    surveyPostId: "Id příspěvku průzkumu",
    surveyShowDataSaving: "Zobrazit hlášku pro ukládání dat",
    questionDescriptionLocation: "Umístění popisu otázky",
    progressBarType: "Typ ukazatele postupu",
    showTOC: "Zobrazit TOC",
    tocLocation: "Umístění Toc",
    questionTitlePattern: "Vzor pro nadpis otázky",
    widthMode: "Režim šířky",
    showBrandInfo: "Zobrazit informace o značce",
    useDisplayValuesInDynamicTexts: "Použít hodnoty zobrazení v dynamických textech",
    visibleIf: "Viditelná, pokud",
    titleLocation: "Umístění nadpisu",
    descriptionLocation: "Umístění popisku",
    defaultValueExpression: "Výraz pro výchozí hodnotu",
    requiredIf: "Povinná, pokud",
    resetValueIf: "Resetovat hodnotu, pokud",
    setValueIf: "Nastavte hodnotu, pokud",
    validators: "Validátory",
    bindings: "Vazby",
    renderAs: "Vykreslit jako",
    attachOriginalItems: "Připojit původní položky",
    choices: "Volby",
    choicesByUrl: "Volby podle Url",
    currency: "Měna",
    cellHint: "Nápověda buňky",
    isUnique: "Je unikátní",
    showInMultipleColumns: "Zobrazit ve více sloupcích",
    totalMaximumFractionDigits: "Maximální počet desetinných míst",
    totalMinimumFractionDigits: "Minimální počet desetinných míst",
    columns: "Sloupce",
    detailElements: "Podrobné prvky",
    allowAdaptiveActions: "Povolit adaptivní akce",
    defaultRowValue: "Výchozí hodnota řádku",
    detailPanelShowOnAdding: "Detailní zobrazení panelu při přidání",
    choicesLazyLoadEnabled: "Povolit lazy loading voleb",
    choicesLazyLoadPageSize: "Počet voleb na jednu stránku",
    inputFieldComponent: "Komponenta vstupního pole",
    itemComponent: "Komponenty položky",
    min: "Min",
    max: "Max",
    minValueExpression: "Minimální hodnota výrazu",
    maxValueExpression: "Maximální hodnota výrazu",
    step: "Krok",
    dataList: "Datový list",
    itemSize: "Velikost položky",
    elements: "Prvky",
    content: "Obsah",
    navigationButtonsVisibility: "Viditelnost navigačních tlačítek",
    navigationTitle: "Napids navigace",
    navigationDescription: "Popis navigace",
    longTap: "Dlouhé poklepání",
    autoGrow: "Automatický růst",
    allowResize: "Povolit změnu velikosti",
    acceptCarriageReturn: "Povolit znak pro \"návrat vozíku\"",
    displayMode: "Režim zobrazení",
    rateType: "Typ kurzu",
    label: "Popisek",
    contentMode: "Režim obsahu",
    imageFit: "Přizpůsobení obrázku",
    altText: "Alternativní text",
    height: "Výška",
    penColor: "Barva pera",
    backgroundColor: "Barva pozadí",
    templateElements: "Prvky šablony",
    operator: "Operátor",
    isVariable: "Je proměnná",
    runExpression: "Spustit výraz",
    showCaption: "Zobrazit popis",
    iconName: "Název ikony",
    iconSize: "Velikost ikony",
    precision: "Přesnost",
    matrixDragHandleArea: "Oblast úchytu pro přetažení matice",
    backgroundImage: "Obrázek na pozadí",
    backgroundImageFit: "Přizpůsobení obrázku na pozadí",
    backgroundImageAttachment: "Příloha obrázku na pozadí",
    backgroundOpacity: "Neprůhlednost pozadí",
    selectToRankEnabled: "Vyberte pro hodnocení povoleno",
    selectToRankAreasLayout: "Výběrem seřadíte rozvržení oblastí",
    allowCameraAccess: "Povolit přístup ke kameře",
    scaleColorMode: "Barevný režim měřítka",
    rateColorMode: "Barevný režim s ohodnocením",
    templateTabTitle: "Název karty šablony",
    templateVisibleIf: "Šablona viditelná, pokud",
    copyDisplayValue: "Kopírovat zobrazovanou hodnotu"
  },
  theme: {
    "--background": "Barva pozadí",
    "--background-dim-light": "Světlejší odstín tlumené barvy pozadí",
    "--primary-foreground": "Hlavní barva popředí",
    "--foreground": "Barva popředí",
    "--base-unit": "Základní jednotka",
    groupGeneral: "Obecné",
    groupAdvanced: "Pokročilé",
    groupHeader: "Záhlaví",
    groupBackground: "Pozadí",
    groupAppearance: "Vzhled",
    themeName: "Motivy",
    themeMode: "Režimy",
    themeModePanels: "Panely",
    themeModeLightweight: "Lehký",
    themePaletteLight: "Světlý",
    themePaletteDark: "Tmavý",
    primaryColor: "Barva zvýraznění",
    primaryDefaultColor: "Výchozí",
    primaryDarkColor: "Hover",
    primaryLightColor: "Vybraný",
    coverTitleForecolor: "Nadpis křestní barvy",
    coverDescriptionForecolor: "Popis předbarvení",
    coverOverlapEnabled: "Překrytí",
    backgroundDimColor: "Barva pozadí",
    backgroundImage: "Obrázek na pozadí",
    backgroundImageFitAuto: "Auto",
    backgroundImageFitCover: "Pokrýt",
    backgroundImageFitContain: "Obsahuje",
    backgroundImageFitFill: "Natáhnout",
    backgroundImageFitTile: "Dlaždice",
    backgroundOpacity: "Průhlednost",
    backgroundImageAttachmentFixed: "Stabilní",
    backgroundImageAttachmentScroll: "Svitek",
    panelBackgroundTransparency: "Průhlednost pozadí panelu",
    questionBackgroundTransparency: "Průhlednost pozadí otázek",
    questionPanel: "Panel otázek",
    questionTitle: "Font nadpisu otázky",
    questionDescription: "Font popisu otázky",
    editorPanel: "Editor",
    editorFont: "Font editoru",
    backcolor: "Výchozí pozadí",
    hovercolor: "Pozadí při přejetí myší",
    borderDecoration: "Dekorace hran",
    accentBackground: "Pozadí zvýraznění",
    accentForeground: "Zvýraznění popředí",
    primaryForecolor: "Výchozí barva",
    primaryForecolorLight: "Barva vypnutého pole",
    linesColors: "Linky",
    borderDefault: "Hlavní",
    borderLight: "Vedlejší",
    fontFamily: "Font",
    fontSize: "Velikost fontu",
    color: "Barva",
    placeholderColor: "Zástupná barva",
    size: "Velikost",
    fontWeightRegular: "Běžný",
    fontWeightHeavy: "Těžký",
    fontWeightSemiBold: "Semi-Bold",
    fontWeightBold: "Bold",
    scale: "Škála",
    cornerRadius: "Poloměr rohu",
    surveyTitle: "Font nadpisu průzkumu",
    surveyDescription: "Písmo popisu průzkumu",
    pageTitle: "Font nadpisu stránky",
    pageDescription: "Font popisu stránky",
    boxShadowX: "X",
    boxShadowY: "Y",
    boxShadowAddRule: "Přidat stínový efekt",
    opacity: "Průhlednost",
    boxShadowBlur: "Blur",
    boxShadowSpread: "Rozšíření",
    boxShadowDrop: "Kapka",
    boxShadowInner: "Vnitřní",
    questionShadow: "Hrany / stíny panelu",
    editorShadow: "Hrany / stíny editoru",
    headerView: "Pohled",
    headerViewBasic: "Základní",
    headerViewAdvanced: "Pokročilý",
    coverInheritWidthFrom: "Šířka oblasti obsahu",
    coverInheritWidthFromSurvey: "Stejné jako průzkum",
    coverInheritWidthFromContainer: "Vhodné pro kontejner",
    coverTextAreaWidth: "Šířka textu",
    coverBackgroundColorSwitch: "Barva pozadí",
    coverBackgroundColorNone: "Žádný",
    coverBackgroundColorAccentColor: "Barva zvýraznění",
    coverBackgroundColorCustom: "Zvyk",
    horizontalAlignmentLeft: "Vlevo",
    horizontalAlignmentCenter: "Střed",
    horizontalAlignmentRight: "Vpravo",
    verticalAlignmentTop: "Vrchol",
    verticalAlignmentMiddle: "Prostřední",
    verticalAlignmentBottom: "Dno",
    logoPosition: "Pozice loga",
    coverTitlePosition: "Titulní pozice",
    coverDescriptionPosition: "Popis pozice",
    names: {
      default: "Výchozí",
      sharp: "Ostrý",
      borderless: "Bez okrajů",
      flat: "Byt",
      plain: "Planina",
      doubleborder: "Dvojitý okraj",
      layered: "Vrstvený",
      solid: "Solidní",
      threedimensional: ".3D",
      contrast: "Kontrast"
    },
    colors: {
      teal: "Modrozelený",
      blue: "Modrý",
      purple: "Nachový",
      orchid: "Orchidea",
      tulip: "Tulipán",
      brown: "Hnědý",
      green: "Zelený"
    }
  }
};

editorLocalization.locales["cs"] = czStrings;

// The following strings have been translated by a machine translation service
// Remove those strings that you have corrected manually
// ed.themePropertyGridTitle: "Theme Settings" => "Nastavení motivu"
// ed.themeExportButton: "Export" => "Vývoz"
// ed.themeImportButton: "Import" => "Dovoz"
// ed.carryForwardChoicesCopied: "Choices are copied from" => "Volby jsou zkopírovány z"
// lg.trigger_setvalueEmptyText: "clear question value: {0}" => "Jasná hodnota otázky: {0}"
// pe.overridingPropertyPrefix: "Set by " => "Nastavit podle "
// pe.minSelectedChoices: "Minimum selected choices" => "Minimální vybrané volby"
// pe.rateType: "Rate type" => "Typ sazby"
// pehelp.size: "Resizes the visible area of the input field. Please use the <b>Validation → Maximum length</b> setting to limit the input length." => "Změní velikost viditelné oblasti vstupního pole. <b>Použijte nastavení Ověření → Maximální délka</b> pro omezení vstupní délky."
// p.precision: "Precision" => "Přesnost"
// p.matrixDragHandleArea: "Matrix drag handle area" => "Oblast úchytu pro přetažení matice"
// p.backgroundImage: "Background image" => "Obrázek na pozadí"
// p.backgroundImageFit: "Background image fit" => "Přizpůsobení obrázku na pozadí"
// p.backgroundImageAttachment: "Background image attachment" => "Příloha obrázku na pozadí"
// p.backgroundOpacity: "Background opacity" => "Neprůhlednost pozadí"
// p.selectToRankEnabled: "Select to rank enabled" => "Vyberte pro hodnocení povoleno"
// p.selectToRankAreasLayout: "Select to rank areas layout" => "Výběrem seřadíte rozvržení oblastí"
// p.allowCameraAccess: "Allow camera access" => "Povolit přístup ke kameře"
// p.scaleColorMode: "Scale color mode" => "Barevný režim měřítka"
// p.rateColorMode: "Rate color mode" => "Barevný režim s ohodnocením"
// p.templateTabTitle: "Template tab title" => "Název karty šablony"
// p.templateVisibleIf: "Template visible if" => "Šablona viditelná, pokud"
// p.copyDisplayValue: "Copy display value" => "Kopírovat zobrazovanou hodnotu"
// theme.backgroundImageAttachmentFixed: "Fixed" => "Stabilní"
// theme.backgroundImageAttachmentScroll: "Scroll" => "Svitek"
// theme.boxShadowAddRule: "Add Shadow Effect" => "Přidat stínový efekt"
// theme.boxShadowDrop: "Drop" => "Kapka"
// theme.boxShadowInner: "Inner" => "Vnitřní"
// names.default: "Default" => "Výchozí"
// names.contrast: "Contrast" => "Kontrast"
// names.plain: "Plain" => "Planina"
// names.simple: "Simple" => "Jednoduchý"
// names.blank: "Blank" => "Bianko"
// names.double: "Double" => "Dvojitý"
// names.bulk: "Bulk" => "Množství"
// names.pseudo-3d: "Pseudo 3D" => "Pseudo 3D"
// names.playful: "Playful" => "Hravý"
// names.ultra: "Ultra" => "Ultra"
// colors.teal: "Teal" => "Modrozelený"
// colors.blue: "Blue" => "Modrý"
// colors.purple: "Purple" => "Nachový"
// colors.orchid: "Orchid" => "Orchidea"
// colors.tulip: "Tulip" => "Tulipán"
// colors.brown: "Brown" => "Hnědý"
// colors.green: "Green" => "Zelený"
// names.sharp: "Sharp" => "Ostrý"
// names.borderless: "Borderless" => "Bez okrajů"
// names.flat: "Flat" => "Byt"
// names.doubleborder: "Double Border" => "Dvojitý okraj"
// names.layered: "Layered" => "Vrstvený"
// names.solid: "Solid" => "Solidní"
// names.threedimensional: "3D" => ".3D"
// ed.translationDeleteLanguage: "Are you certain you wish to delete all strings for this language?" => "Jste si jisti, že chcete odstranit všechny řetězce pro tento jazyk?"
// ed.themeResetButton: "Reset theme settings to default" => "Obnovení výchozího nastavení motivu"
// theme.placeholderColor: "Placeholder color" => "Zástupná barva"
// ed.themeSettings: "Theme Settings" => "Nastavení motivu"
// ed.themeSettingsTooltip: "Open theme settings" => "Otevření nastavení motivu"
// pe.resetToDefaultCaption: "Reset" => "Resetovat"
// pv.file: "Local files" => "Místní soubory"
// pv.camera: "Camera" => "Fotoaparát"
// pv.file-camera: "Local files or camera" => "Místní soubory nebo fotoaparát"
// ed.translationDialogTitle: "Untranslated strings" => "Nepřeložené řetězce"
// pe.fastEntryChoicesMinCountError: "Please enter at least {0} items" => "Zadejte alespoň {0} položek"
// lg.question_resetValueName: "Reset question value" => "Obnovit hodnotu otázky"
// lg.column_resetValue: "Reset column value" => "Obnovit hodnotu sloupce"
// pe.markRequired: "Mark as required" => "Označit podle potřeby"
// pe.removeRequiredMark: "Remove the required mark" => "Odstraňte požadovanou značku"
// p.resetValueIf: "Reset value if" => "Resetovat hodnotu, pokud"

// lg.question_setValueName: "Set question value" => "Nastavit hodnotu otázky"
// lg.column_resetValueName: "Reset column value" => "Obnovit hodnotu sloupce"
// lg.column_setValueName: "Set column value" => "Nastavit hodnotu sloupce"
// lg.setValueExpressionPlaceholder: " An expression whose result will be assigned to the target question." => " Výraz, jehož výsledek bude přiřazen cílové otázce."
// survey.title: "Title" => "Titul"
// page.title: "Title" => "Titul"
// p.setValueIf: "Set value if" => "Nastavte hodnotu, pokud"
// theme.groupHeader: "Header" => "Záhlaví"
// theme.coverTitleForecolor: "Title forecolor" => "Nadpis křestní barvy"
// theme.coverOverlapEnabled: "Overlap" => "Překrytí"
// theme.backgroundImageFitFill: "Stretch" => "Natáhnout"
// theme.backgroundImageFitTile: "Tile" => "Dlaždice"
// theme.headerView: "View" => "Pohled"
// theme.headerViewBasic: "Basic" => "Základní"
// theme.headerViewAdvanced: "Advanced" => "Pokročilý"
// theme.coverInheritWidthFrom: "Content area width" => "Šířka oblasti obsahu"
// theme.coverInheritWidthFromSurvey: "Same as survey" => "Stejné jako průzkum"
// theme.coverInheritWidthFromPage: "Fit to page" => "Přizpůsobit stránce"
// theme.coverTextAreaWidth: "Text width" => "Šířka textu"
// theme.coverBackgroundColorSwitch: "Background color" => "Barva pozadí"
// theme.coverBackgroundColorNone: "None" => "Žádný"
// theme.coverBackgroundColorAccentColor: "Accent color" => "Barva zvýraznění"
// theme.coverBackgroundColorCustom: "Custom" => "Zvyk"
// theme.horizontalAlignmentLeft: "Left" => "Vlevo"
// theme.horizontalAlignmentCenter: "Center" => "Střed"
// theme.horizontalAlignmentRight: "Right" => "Vpravo"
// theme.verticalAlignmentTop: "Top" => "Vrchol"
// theme.verticalAlignmentMiddle: "Middle" => "Prostřední"
// theme.verticalAlignmentBottom: "Bottom" => "Dno"
// theme.logoPosition: "Logo Position" => "Pozice loga"
// theme.coverTitlePosition: "Title Position" => "Titulní pozice"
// lg.question_resetValueText: "reset value for question: {0}" => "Resetovat hodnotu pro otázku: {0}"
// lg.question_setValueText: "assign value: {1} to question: {0}" => "přiřadit hodnotu: {1} na otázku: {0}"
// lg.column_resetValueText: "reset cell value for column: {0}" => "Obnovit hodnotu buňky pro sloupec: {0}"
// lg.column_setValueText: "assign cell value: {1} to column: {0}" => "Přiřaďte hodnotu buňky: {1} sloupci: {0}"
// ed.surveyJsonExportButton: "Export" => "Vývoz"
// ed.surveyJsonImportButton: "Import" => "Dovoz"
// ed.surveyJsonCopyButton: "Copy to clipboard" => "Zkopírovat do schránky"
// pe.filePlaceholder: "File placeholder text" => "Text zástupného symbolu souboru"
// pe.photoPlaceholder: "Photo placeholder text" => "Text zástupného symbolu fotografie"
// pe.fileOrPhotoPlaceholder: "File or photo placeholder text" => "Zástupný text souboru nebo fotografie"
// pehelp.filePlaceholder: "Applies when \"Source type\" is \"Local files\" or when camera is unavailable" => "Platí, když je \"Typ zdroje\" nastaven na \"Místní soubory\" nebo když je kamera nedostupná"
// pehelp.photoPlaceholder: "Applies when \"Source type\" is \"Camera\"." => "Platí, když je \"Typ zdroje\" nastaven na \"Fotoaparát\"."
// pehelp.fileOrPhotoPlaceholder: "Applies when \"Source type\" is \"Local files or camera\"." => "Platí, když \"Typ zdroje\" je \"Místní soubory nebo kamera\"."
// theme.groupBackground: "Background" => "Pozadí"
// theme.groupAppearance: "Appearance" => "Vzhled"
// theme.coverDescriptionForecolor: "Description forecolor" => "Popis předbarvení"
// ed.themeResetConfirmation: "Do you really want to reset the theme? All your customizations will be lost." => "Opravdu chcete resetovat motiv? Všechna vaše přizpůsobení budou ztracena."
// ed.themeResetConfirmationOk: "Yes, reset the theme" => "Ano, resetovat motiv"
// theme.groupBackground: "Background" => "Pozadí"
// theme.groupAppearance: "Appearance" => "Vzhled"
// theme.coverDescriptionForecolor: "Description forecolor" => "Popis předbarvení"
// theme.coverInheritWidthFromContainer: "Fit to container" => "Vhodné pro kontejner"
// signaturepad.showPlaceholder: "Show the placeholder" => "Zobrazení zástupného symbolu"
// signaturepad.placeholder: "Placeholder text" => "Zástupný text"
// theme.surveyDescription: "Survey description font" => "Písmo popisu průzkumu"
// ed.prevFocus: "Focus previous" => "Zaostřeno předchozí"
// ed.nextFocus: "Focus next" => "Zaostřit na další"
// ed.saveTheme: "Save Theme" => "Uložit motiv"
// ed.saveThemeTooltip: "Save Theme" => "Uložit motiv"
// lg.page_requireName: "Make page required" => "Nastavit stránku jako povinné"
// lg.panel_requireName: "Make page required" => "Nastavit stránku jako povinné"
// signaturepad.signatureWidth: "Signature area width" => "Šířka oblasti podpisu"
// signaturepad.signatureHeight: "Signature area height" => "Výška signatury"
// signaturepad.signatureAutoScaleEnabled: "Auto-scale the signature area" => "Automatické škálování oblasti podpisu"
// signaturepad.penMinWidth: "Minimum pen width" => "Minimální šířka pera"
// signaturepad.penMaxWidth: "Maximum pen width" => "Maximální šířka pera"
// theme.coverDescriptionPosition: "Description position" => "Popis pozice"