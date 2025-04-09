import { setupLocale } from "survey-creator-core";

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
  // Creator tabs
  tabs: {
    preview: "Otestovat průzkum",
    theme: "Motivy",
    translation: "Překlad",
    designer: "Návrhář průzkumů",
    json: "Editor JSON",
    logic: "Logika průzkumu"
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
  toolboxCategories: {
    general: "Obecné",
    choice: "Výběrové otázky",
    text: "Textové otázky",
    containers: "Kontejnery",
    matrix: "Maticové otázky",
    misc: "Ostatní"
  },
  // Strings in SurveyJS Creator
  ed: {
    defaultLocale: "Výchozí ({0})",
    survey: "Průzkum",
    settings: "Nastavení průzkumu",
    settingsTooltip: "Otevřít nastavení průzkumu",
    surveySettings: "Nastavení průzkumu",
    surveySettingsTooltip: "Nastavení průzkumu",
    themeSettings: "Nastavení motivu",
    themeSettingsTooltip: "Nastavení motivu",
    creatorSettingTitle: "Nastavení tvůrce",
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
    defaultV2Theme: "Výchozí",
    modernTheme: "Moderní",
    defaultTheme: "Výchozí (původní)",
    testSurveyAgain: "Znovu otestovat průzkum",
    testSurveyWidth: "Šířka průzkumu: ",
    navigateToMsg: "Museli jste přejít na:",
    saveSurvey: "Uložit průzkum",
    saveSurveyTooltip: "Uložit průzkum",
    saveTheme: "Uložit motiv",
    saveThemeTooltip: "Uložit motiv",
    jsonHideErrors: "Skrýt chyby",
    jsonShowErrors: "Zobrazit chyby",
    undo: "Zrušit",
    redo: "Opětovně vrátit",
    undoTooltip: "Vrátit poslední změnu",
    redoTooltip: "Znovu provést změnu",
    expandTooltip: "Expandovat",
    collapseTooltip: "Zhroucení",
    expandAllTooltip: "Rozbalit vše",
    collapseAllTooltip: "Sbalit vše",
    zoomInTooltip: "Přiblížit",
    zoom100Tooltip: "Zvětšení na 100 %",
    zoomOutTooltip: "Oddálit",
    lockQuestionsTooltip: "Uzamknout stav rozbalení/sbalení pro otázky",
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
    toolboxFilteredTextPlaceholder: "Chcete-li hledat, zadejte jej...",
    toolboxNoResultsFound: "Nebyly nalezeny žádné výsledky",
    propertyGridFilteredTextPlaceholder: "Zadejte hledaný text...",
    propertyGridNoResultsFound: "Nebyly nalezeny žádné výsledky",
    propertyGridPlaceholderTitle: "Začněte konfigurovat formulář",
    propertyGridPlaceholderDescription: "Kliknutím na libovolnou ikonu kategorie můžete prozkoumat nastavení průzkumu. Další nastavení budou k dispozici, jakmile přidáte element survey na návrhovou plochu.",
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
    addLanguageTooltip: "Přidat jazyk",
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
    translateUsigAIFrom: "Přeložit z: ",
    translationDialogTitle: "Nepřeložené řetězce",
    translationMergeLocaleWithDefault: "Sloučit {0} s výchozím lokálem",
    translationPlaceHolder: "Překlad...",
    translationSource: "Zdroj: ",
    translationTarget: "Cíl: ",
    translationYouTubeNotSupported: "Odkazy na YouTube nejsou podporovány.",
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
    choicesLoadedFromWebText: "Volby se načítají z webové služby.",
    choicesLoadedFromWebLinkText: "Přejděte do nastavení",
    choicesLoadedFromWebPreviewTitle: "Náhled načtených voleb",
    htmlPlaceHolder: "Zde bude HTML obsah.",
    panelPlaceHolder: "Sem přetáhněte otázku z panelu nástrojů.",
    surveyPlaceHolder: "Průzkum je prázdný. Přetáhněte prvek z panelu nástrojů nebo klikněte na tlačítko níže.",
    pagePlaceHolder: "Stránka je prázdná. Přetáhněte prvek z palety nástrojů nebo klikněte na tlačítko níže.",
    imagePlaceHolder: "Obrázek můžete vložit jeho přetažením na toto místo nebo kliknutím na tlačítko níže",
    surveyPlaceHolderMobile: "Kliknutím na tlačítko \"Přidat otázku\" níže zahájíte vytváření formuláře.",
    surveyPlaceholderTitle: "Váš formulář je prázdný",
    surveyPlaceholderTitleMobile: "Váš formulář je prázdný",
    surveyPlaceholderDescription: "Přetáhněte prvek z panelu nástrojů nebo klikněte na tlačítko níže.",
    surveyPlaceholderDescriptionMobile: "Přetáhněte prvek z panelu nástrojů nebo klikněte na tlačítko níže.",
    previewPlaceholderTitle: "Žádný náhled",
    previewPlaceholderTitleMobile: "Žádný náhled",
    previewPlaceholderDescription: "Průzkum neobsahuje žádné viditelné prvky.",
    previewPlaceholderDescriptionMobile: "Průzkum neobsahuje žádné viditelné prvky.",
    translationsPlaceholderTitle: "Žádné řetězce k překladu",
    translationsPlaceholderTitleMobile: "Žádné řetězce k překladu",
    translationsPlaceholderDescription: "Přidejte do formuláře prvky nebo změňte filtr řetězců na panelu nástrojů.",
    translationsPlaceholderDescriptionMobile: "Přidejte do formuláře prvky nebo změňte filtr řetězců na panelu nástrojů.",
    pagePlaceHolderMobile: "Kliknutím na tlačítko \"Přidat otázku\" níže přidáte na stránku nový prvek.",
    panelPlaceHolderMobile: "Kliknutím na tlačítko \"Přidat otázku\" níže přidáte do panelu nový prvek.",
    imagePlaceHolderMobile: "Klikněte na tlačítko níže a vyberte obrázek, který chcete nahrát",
    imageChooseImage: "Vybrat obrázek",
    addNewTypeQuestion: "Přidat {0}", //{0} is localizable question type
    chooseLogoPlaceholder: "[LOGO]",
    choices_Item: "Položka ",
    selectFile: "Vyberte soubor",
    removeFile: "Odebrání souboru",
    lg: {
      addNewItem: "Přidat nové pravidlo",
      empty_tab: "Vytvořte pravidlo pro přizpůsobení průběhu průzkumu.",
      logicPlaceholderTitle: "Žádná logická pravidla",
      logicPlaceholderTitleMobile: "Žádná logická pravidla",
      logicPlaceholderDescription: "Vytvořte pravidlo pro přizpůsobení toku průzkumu.",
      logicPlaceholderDescriptionMobile: "Vytvořte pravidlo pro přizpůsobení toku průzkumu.",
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
      question_resetValueText: "Resetovat hodnotu pro otázku: {0}", //{0} question name.
      question_setValueText: "přiřadit hodnotu: {1} na otázku: {0}",
      column_visibilityText: "zviditelnit sloupec {0} úlohy {1}", //{0} column name, {1} question name
      column_enableText: "povolit sloupec {0} otázky {1}", //{0} column name, {1} question name
      column_requireText: "povinný sloupec {0} otázky {1}", //{0} column name, {1} question name
      column_resetValueText: "Obnovit hodnotu buňky pro sloupec: {0}", //{0} column name
      column_setValueText: "Přiřaďte hodnotu buňky: {1} sloupci: {0}", //{0} column name and {1} setValueExpression
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
    panel: {
      name: "Název panelu",
      title: "Název panelu",
      description: "Popis panelu",
      visibleIf: "Zviditelněte panel, pokud",
      requiredIf: "Zajistěte, aby byl panel povinný, pokud",
      questionOrder: "Pořadí otázek v rámci panelu",
      page: "Nadřazená stránka",
      startWithNewLine: "Zobrazení obrazu na novém řádku",
      state: "Stav sbalení panelu",
      width: "Šířka vloženého panelu",
      minWidth: "Minimální šířka panelu",
      maxWidth: "Maximální šířka panelu",
      showNumber: "Očíslujte tento panel"
    },
    panellayoutcolumn: {
      effectiveWidth: "Efektivní šířka, %",
      questionTitleWidth: "Šířka názvu otázky, px"
    },
    paneldynamic: {
      name: "Název panelu",
      title: "Název panelu",
      description: "Popis panelu",
      visibleIf: "Zviditelněte panel, pokud",
      requiredIf: "Zajistěte, aby byl panel povinný, pokud",
      page: "Přesunutí panelu na stránku",
      startWithNewLine: "Zobrazení obrazu na novém řádku",
      state: "Stav sbalení panelu",
      width: "Šířka vloženého panelu",
      minWidth: "Minimální šířka panelu",
      maxWidth: "Maximální šířka panelu",
      confirmDelete: "Potvrdit smazání panelu",
      templateDescription: "Vzor popisu panelu",
      templateTitle: "Vzor titulku panelu",
      noEntriesText: "Prázdný text panelu",
      templateTabTitle: "Vzor názvu tabulátoru",
      tabTitlePlaceholder: "Zástupný symbol názvu tabulátoru",
      templateVisibleIf: "Zviditelněte jednotlivý panel, pokud",
      showNumber: "Očíslujte panel",
      titleLocation: "Zarovnání názvu panelu",
      descriptionLocation: "Zarovnání popisu panelu",
      templateQuestionTitleLocation: "Zarovnání názvu otázky",
      templateQuestionTitleWidth: "Šířka názvu otázky",
      templateErrorLocation: "Zarovnání chybové zprávy",
      newPanelPosition: "Nové umístění panelu",
      showRangeInProgress: "Zobrazení ukazatele průběhu",
      keyName: "Zabraňte duplicitním odpovědím v následující otázce"
    },
    question: {
      name: "Název otázky",
      title: "Název otázky",
      description: "Popis otázky",
      visibleIf: "Zviditelněte otázku, pokud",
      requiredIf: "Otázku povinně zjišťte, pokud",
      page: "Nadřazená stránka",
      state: "Stav sbalení pole otázek",
      showNumber: "Číslo této otázky",
      titleLocation: "Zarovnání názvu otázky",
      descriptionLocation: "Zarovnání popisu otázky",
      errorLocation: "Zarovnání chybové zprávy",
      indent: "Zvětšete vnitřní odsazení",
      width: "Vložená šířka otázky",
      minWidth: "Minimální šířka otázky",
      maxWidth: "Maximální šířka otázky",
      textUpdateMode: "Aktualizovat hodnotu vstupního pole"
    },
    signaturepad: {
      signatureWidth: "Šířka oblasti podpisu",
      signatureHeight: "Výška signatury",
      signatureAutoScaleEnabled: "Automatické škálování oblasti podpisu",
      showPlaceholder: "Zobrazení zástupného symbolu",
      placeholder: "Zástupný text",
      placeholderReadOnly: "Zástupný text v režimu jen pro čtení nebo v režimu náhledu",
      allowClear: "Zobrazení tlačítka Vymazat v oblasti podpisu",
      penMinWidth: "Minimální šířka pera",
      penMaxWidth: "Maximální šířka pera",
      penColor: "Barva tahu"
    },
    comment: {
      rows: "Výška vstupního pole (v řádcích)"
    },
    showQuestionNumbers: "Zobrazit čísla otázek",
    questionStartIndex: "Index začátku otázky (1, 2 nebo A, a)",
    expression: {
      name: "Název výrazu",
      title: "Název výrazu",
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
      description: "Popis průzkumu",
      readOnly: "Nastavení průzkumu pouze ke čtení"
    },
    page: {
      name: "Název stránky",
      title: "Titul",
      description: "Popis stránky",
      visibleIf: "Zviditelněte stránku, pokud",
      requiredIf: "Zajistěte, aby stránka byla povinná, pokud",
      timeLimit: "Časový limit pro dokončení stránky (v sekundách)",
      questionOrder: "Pořadí otázek na stránce"
    },
    matrixdropdowncolumn: {
      name: "Název sloupce",
      title: "Název sloupce",
      isUnique: "Zabraňte duplicitním odpovědím",
      width: "Šířka sloupce",
      minWidth: "Minimální šířka sloupce",
      rows: "Výška vstupního pole (v řádcích)",
      visibleIf: "Zviditelněte sloupec, pokud",
      requiredIf: "Vytvořte sloupec jako povinný, pokud",
      showInMultipleColumns: "Každá možnost v samostatném sloupci"
    },
    multipletextitem: {
      name: "Jméno",
      title: "Titul"
    },
    masksettings: {
      saveMaskedValue: "Uložit maskovanou hodnotu ve výsledcích průzkumu"
    },
    patternmask: {
      pattern: "Vzor hodnoty"
    },
    datetimemask: {
      min: "Minimální hodnota",
      max: "Maximální hodnota"
    },
    numericmask: {
      allowNegativeValues: "Povolit záporné hodnoty",
      thousandsSeparator: "Oddělovač tisíců",
      decimalSeparator: "Oddělovač desetinných míst",
      precision: "Přesnost hodnoty",
      min: "Minimální hodnota",
      max: "Maximální hodnota"
    },
    currencymask: {
      prefix: "Předpona měny",
      suffix: "Přípona měny"
    },
    imageHeight: "Výška obrázku",
    imageWidth: "Šířka obrázku",
    valueName: "Název hodnoty",
    defaultDisplayValue: "Výchozí zobrazovaná hodnota pro dynamické texty",
    rateDescriptionLocation: "Zarovnání štítků",
    size: "Šířka vstupního pole (ve znacích)",
    cellErrorLocation: "Zarovnání chybové zprávy buňky",
    enabled: "Zpřístupněný",
    disabled: "Invalidní",
    inherit: "Zdědit",
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
    "listIsEmpty@columns": "Zatím nemáte žádné sloupce.",
    "listIsEmpty@gridLayoutColumns": "Sloupce rozložení ještě nemáte",
    "listIsEmpty@rows": "Zatím nemáte žádné řádky",
    "listIsEmpty@validators": "Zatím nemáte žádná ověřovací pravidla.",
    "listIsEmpty@calculatedValues": "Zatím nemáte žádné vlastní proměnné.",
    "listIsEmpty@triggers": "Zatím nemáte žádné spouštěče",
    "listIsEmpty@navigateToUrlOnCondition": "Zatím nemáte žádné odkazy",
    "listIsEmpty@pages": "Zatím nemáte žádné stránky",
    "addNew@choices": "Přidat volbu",
    "addNew@columns": "Přidat nový sloupec",
    "addNew@rows": "Přidat nový řádek",
    "addNew@validators": "Přidat nové pravidlo",
    "addNew@calculatedValues": "Přidat novou proměnnou",
    "addNew@triggers": "Přidání nového triggeru",
    "addNew@navigateToUrlOnCondition": "Přidat novou adresu URL",
    "addNew@pages": "Přidat novou stránku",
    expressionIsEmpty: "Výraz je prázdný",
    value: "Hodnota",
    text: "Text",
    rowid: "ID řady",
    imageLink: "Odkaz na obrázek",
    columnEdit: "Upravit sloupec: {0}",
    itemEdit: "Upravit položku: {0}",
    url: "URL",
    path: "Cesta",
    choicesbyurl: {
      url: "Adresa URL webové služby",
      valueName: "Získat hodnoty z následujícího JSON pole"
    },
    titleName: "Získat texty z následujícího JSON pole",
    imageLinkName: "Získat URL obrázku z následujícího JSON pole",
    allowEmptyResponse: "Povolit prázdnou odpověď",
    titlePlaceholder: "Sem zadejte název",
    surveyTitlePlaceholder: "Sem zadejte název průzkumu",
    pageTitlePlaceholder: "Sem zadejte název stránky",
    startPageTitlePlaceholder: "Úvodní stránka",
    descriptionPlaceholder: "Zadejte popis",
    surveyDescriptionPlaceholder: "Zadejte popis průzkumu",
    pageDescriptionPlaceholder: "Zadejte popis stránky",
    textWrapEnabled: "Možnosti obtékání",
    showOtherItem: "Má jinou položku",
    otherText: "Další text položky",
    showNoneItem: "Nemá žádnou položku",
    showRefuseItem: "Povolte možnost Odmítnout odpověď",
    showDontKnowItem: "Povolit možnost Nevím",
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
    allowCustomChoices: "Povolit vlastní volby",
    visible: "Viditelná?",
    isRequired: "Povinná?",
    markRequired: "Označit podle potřeby",
    removeRequiredMark: "Odstraňte požadovanou značku",
    eachRowRequired: "Povinná odpověď pro všechny řádky",
    eachRowUnique: "Zabránění duplicitním odpovědím v řádcích",
    requiredErrorText: "Text chyby pro povinnou otázku",
    startWithNewLine: "Začátek s novým řádkem?",
    rows: "Počet řádků",
    cols: "Počet sloupců",
    placeholder: "Vstupní zástupný text",
    showPreview: "Zobrazit oblast náhledu",
    storeDataAsText: "Uložit obsah souboru ve výsledku JSON jako text",
    maxSize: "Maximální velikost souboru v bajtech",
    rowCount: "Počet řádků",
    columnLayout: "Rozložení sloupců",
    addRowButtonLocation: "Přidat umístění tlačítka řádku",
    transposeData: "Transponování řádků do sloupců",
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
    clearInvisibleValues: "Vymazat neviditelné hodnoty",
    cookieName: "Název souboru cookie (pro zakázání dvojího lokálního spuštění průzkumu)",
    partialSendEnabled: "Odeslání výsledků průzkumu na další straně",
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
    navigationButtonsLocation: "Zarovnání navigačních tlačítek",
    showPrevButton: "Zobrazit předchozí tlačítko (uživatel se může vrátit na předchozí stránku)",
    firstPageIsStartPage: "První stránka průzkumu je úvodní stránka.",
    showCompletePage: "Zobrazení dokončené stránky na konci (completedHtml)",
    autoAdvanceEnabled: "Po zodpovězení všech otázek automaticky přejít na další stránku",
    autoAdvanceAllowComplete: "Automatické vyplnění dotazníku",
    showProgressBar: "Zobrazit ukazatel průběhu",
    progressBarLocation: "Zarovnání indikátoru průběhu",
    questionTitleLocation: "Umístění názvu otázky",
    questionTitleWidth: "Šířka názvu otázky",
    requiredMark: "Povinné symboly otázky",
    questionTitleTemplate: "Šablona názvu otázky, výchozí je: „{no}. {require} {title}“",
    questionErrorLocation: "Umístění chyby v otázce",
    autoFocusFirstQuestion: "Zaměřte se na první otázku týkající se změny stránky",
    questionOrder: "Pořadí prvků na stránce",
    timeLimit: "Maximální doba pro dokončení průzkumu",
    timeLimitPerPage: "Maximální doba pro dokončení stránky v průzkumu",
    showTimer: "Použití časovače",
    timerLocation: "Zobrazit panel časovače",
    timerInfoMode: "Zobrazit režim panelu časovače",
    renderMode: "Režim vykreslování",
    allowAddPanel: "Povolit přidání panelu",
    allowRemovePanel: "Povolit odstranění panelu",
    addPanelText: "Přidávání textu na panel",
    removePanelText: "Odstraňování textu panelu",
    isSinglePage: "Zobrazit všechny prvky na jedné stránce",
    html: "HTML",
    setValue: "Odpověď",
    dataFormat: "Formát obrázku",
    allowAddRows: "Povolit přidání řádků",
    allowRemoveRows: "Povolit odstranění řádků",
    allowRowReorder: "Povolit přetahování řádků",
    responsiveImageSizeHelp: "Nepoužije se, pokud specifikujete přesnou šířku nebo výšku obrázku.",
    minImageWidth: "Minimální šířka obrázku",
    maxImageWidth: "Maximální šířka obrázku",
    minImageHeight: "Minimální výška obrázku",
    maxImageHeight: "Maximální výška obrázku",
    minValue: "Minimální hodnota",
    maxValue: "Maximální hodnota",
    caseInsensitive: "Nerozlišuje malá a velká písmena",
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
    maxCommentLength: "Maximální délka komentáře (v počtu znaků)",
    commentAreaRows: "Výška oblasti komentářů (v řádcích)",
    autoGrowComment: "V případě potřeby automaticky rozbalit komentář",
    allowResizeComment: "Povolit uživatelům změnit velikost textových polí",
    textUpdateMode: "Aktualizovat hodnotu textové otázky",
    maskType: "Typ vstupní masky",
    autoFocusFirstError: "Zvýraznit první neplatnou odpověď",
    checkErrorsMode: "Spustit ověření",
    validateVisitedEmptyFields: "Ověření prázdných polí při ztrátě fokusu",
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
    searchMode: "Režim vyhledávání",
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
    panelCount: "Počáteční počet panelů",
    minPanelCount: "Minimální počet panelů",
    maxPanelCount: "Maximální počet panelů",
    panelsState: "Stav rozbalení vnitřního panelu",
    prevPanelText: "Nápověda pro tlačítko \"Předchozí panel\"",
    nextPanelText: "Nápověda pro tlačítko \"Další panel\"",
    removePanelButtonLocation: "Umístění tlačítka \"Odstranit panel\"",
    hideIfRowsEmpty: "Skrýt otázku, pokud neexistují žádné řádky",
    hideColumnsIfEmpty: "Skrýt sloupce, pokud neexistují žádné řádky",
    rateValues: "Vlastní hodnoty kurzu",
    rateCount: "Počet kurzů",
    autoGenerate: "Jak určit hodnoty kurzu?",
    hideIfChoicesEmpty: "Skrýt otázku, pokud neobsahuje žádné volby",
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
    logoWidth: "Šířka loga (v hodnotách akceptovaných CSS)",
    logoHeight: "Výška loga (v hodnotách akceptovaných CSS)",
    readOnly: "Pouze pro čtení",
    enableIf: "Upravitelná pokud",
    noRowsText: "Zpráva \"Žádné řádky\"",
    separateSpecialChoices: "Oddělit speciální volby (žádná, ostatní, vybrat vše)",
    choicesFromQuestion: "Kopírovat volby z následující otázky",
    choicesFromQuestionMode: "Které volby zkopírovat?",
    choiceValuesFromQuestion: "Jako ID voleb použijte hodnoty z následujícího sloupce matice nebo otázky panelu",
    choiceTextsFromQuestion: "Jako texty voleb použijte hodnoty z následujícího sloupce matice nebo otázky panelu",
    progressBarShowPageTitles: "Zobrazení názvů stránek na ukazateli průběhu",
    progressBarShowPageNumbers: "Zobrazení čísel stránek na indikátoru průběhu",
    showCommentArea: "Zobrazit komentář",
    commentPlaceholder: "Zástupný text komentáře",
    displayRateDescriptionsAsExtremeItems: "Zobrazit popisy kurzů jako extrémní hodnoty",
    rowOrder: "Pořadí řádků",
    columnsLayout: "Rozložení sloupce",
    columnColCount: "Počet vnořených sloupců",
    correctAnswer: "Správná odpověď",
    defaultPanelValue: "Výchozí hodnoty",
    cells: "Texty buněk",
    fileInputPlaceholder: "Vyberte soubor nebo vložte odkaz na soubor...",
    keyName: "Klíčový sloupec",
    itemvalue: {
      visibleIf: "Zviditelněte tuto možnost, pokud",
      enableIf: "Zajistěte, aby byla možnost vybratelná, pokud"
    },
    "itemvalue@rows": {
      visibleIf: "Zviditelněte řádek, pokud",
      enableIf: "Zajistěte, aby byl řádek upravitelný, pokud"
    },
    imageitemvalue: {
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
    previewMode: "Režim náhledu",
    gridLayoutEnabled: "Povolte rozvržení mřížky",
    gridLayoutColumns: "Sloupce rozvržení mřížky",
    maskSettings: "Nastavení masky",
    detailErrorLocation: "Chybová zpráva Zarovnání rozšíření řádku",
    // Creator tabs
    tabs: {
      panel: {
        layout: "Rozvržení panelu"
      },
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
      mask: "Nastavení vstupní masky",
      layout: {
        panel: "Rozložení",
        question: "Rozložení",
        base: "Rozložení"
      },
      data: "Data",
      validation: "Ověřování",
      cells: "Buňky",
      showOnCompleted: "Zobrazit na stránce Dokončeno",
      logo: "Logo v názvu průzkumu",
      slider: "Posuvník",
      expression: "Výraz",
      questionSettings: "Nastavení otázek",
      header: "Záhlaví",
      background: "Pozadí",
      appearance: "Vzhled",
      accentColors: "Zvýraznění barev",
      surfaceBackground: "Pozadí povrchu",
      scaling: "Změna velikosti",
      others: "Ostatní"
    },
    editProperty: "Upravit vlastnost „{0}“",
    items: "[ Položky: {0} ]",
    choicesVisibleIf: "Volby jsou viditelné, pokud",
    choicesEnableIf: "Volby jsou volitelné, pokud",
    columnsEnableIf: "Sloupce jsou viditelné, pokud",
    rowsEnableIf: "Řádky jsou viditelné, pokud",
    innerIndent: "Přidat vnitřní odsazení",
    copyDefaultValueFromLastEntry: "Použít odpovědi z posledního záznamu jako výchozí",
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
    verticalAlign: "Vertikální zarovnání",
    alternateRows: "Alternativní řádky",
    columnsVisibleIf: "Sloupce jsou viditelné, pokud",
    rowsVisibleIf: "Řádky jsou viditelné, pokud",
    otherPlaceholder: "Zástupný text komentáře",
    filePlaceholder: "Text zástupného symbolu souboru",
    photoPlaceholder: "Text zástupného symbolu fotografie",
    fileOrPhotoPlaceholder: "Zástupný text souboru nebo fotografie",
    rateType: "Typ sazby",
    url_placeholder: "Př.: https://api.example.com/books",
    path_placeholder: "Př.: categories.fiction",
    questionStartIndex_placeholder: "Př.: a)",
    width_placeholder: "Př.: 6in",
    minWidth_placeholder: "Př.: 600px",
    maxWidth_placeholder: "Př.: 50%",
    imageHeight_placeholder: "automaticky",
    imageWidth_placeholder: "automaticky",
    itemTitleWidth_placeholder: "Příklad: 100px",
    theme: {
      themeName: "Téma",
      isPanelless: "Vzhled otázky",
      editorPanel: "Pozadí a poloměr rohů",
      questionPanel: "Pozadí a poloměr rohů",
      primaryColor: "Barva zvýraznění",
      panelBackgroundTransparency: "Neprůhlednost pozadí panelu",
      questionBackgroundTransparency: "Neprůhlednost pozadí otázky",
      fontSize: "Velikost písma",
      scale: "Škála",
      cornerRadius: "Poloměr rohu",
      advancedMode: "Pokročilý režim",
      pageTitle: "Písmo nadpisu",
      pageDescription: "Popisné písmo",
      questionTitle: "Písmo nadpisu",
      questionDescription: "Popisné písmo",
      editorFont: "Písmo",
      backgroundOpacity: "Neprůhlednost",
      "--sjs-font-family": "Rodina písem",
      "--sjs-general-backcolor-dim": "Barva pozadí",
      "--sjs-primary-backcolor": "Zvýraznění pozadí",
      "--sjs-primary-forecolor": "Zvýraznění popředí",
      "--sjs-special-red": "Chybové zprávy",
      "--sjs-shadow-small": "Stínové efekty",
      "--sjs-shadow-inner": "Stínové efekty",
      "--sjs-border-default": "Barvy"
    },
    "header@header": {
      headerView: "Pohled",
      logoPosition: "Umístění loga",
      surveyTitle: "Písmo názvu průzkumu",
      surveyDescription: "Písmo popisu průzkumu",
      headerTitle: "Písmo názvu průzkumu",
      headerDescription: "Písmo popisu průzkumu",
      inheritWidthFrom: "Šířka oblasti obsahu",
      textAreaWidth: "Šířka textu",
      backgroundColorSwitch: "Barva pozadí",
      backgroundImage: "Obrázek na pozadí",
      backgroundImageOpacity: "Neprůhlednost",
      overlapEnabled: "Překrytí",
      logoPositionX: "Umístění loga",
      titlePositionX: "Pozice v titulu",
      descriptionPositionX: "Popis pozice"
    }
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
    selected: "Vybraný",
    unselected: "Nezvolený",
    decimal: "desetinné číslo",
    currency: "měna",
    percent: "procento",
    firstExpanded: "firstExpanded",
    off: "vypnout",
    list: "seznam",
    carousel: "Kolotoč",
    tab: "Záložky",
    progressTop: "progressTop",
    progressBottom: "progressBottom",
    progressTopBottom: "progressTopBottom",
    horizontal: "horizontální",
    vertical: "vertikální",
    top: "nahoře",
    bottom: "dole",
    topBottom: "nahoře a dole",
    both: "obě",
    left: "vlevo",
    right: "Pravá",
    center: "Střed",
    leftRight: "Vlevo a vpravo",
    middle: "Prostřední",
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
    edit: "upravit",
    display: "zobrazit",
    contain: "Obsahovat",
    cover: "Krýt",
    fill: "Vyplnit",
    next: "Další",
    last: "Poslední",
    onComplete: "onComplete",
    onHidden: "onHidden",
    onHiddenContainer: "Když se otázka nebo její panel/stránka skryje",
    clearInvisibleValues: {
      none: "Nikdy"
    },
    clearIfInvisible: {
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
    autocomplete: {
      name: "Celé jméno",
      "honorific-prefix": "Předpona",
      "given-name": "Křestní jméno",
      "additional-name": "Druhé jméno",
      "family-name": "Příjmení",
      "honorific-suffix": "Přípona",
      nickname: "Přezdívka",
      "organization-title": "Pracovní pozice",
      username: "Uživatelské jméno",
      "new-password": "Nové heslo",
      "current-password": "Aktuální heslo",
      organization: "Název organizace",
      "street-address": "Úplná adresa",
      "address-line1": "Řádek adresy 1",
      "address-line2": "Řádek adresy 2",
      "address-line3": "Řádek adresy 3",
      "address-level4": "Adresa úrovně 4",
      "address-level3": "Adresa úrovně 3",
      "address-level2": "Adresa úrovně 2",
      "address-level1": "Adresa úrovně 1",
      country: "Kód země",
      "country-name": "Název země",
      "postal-code": "Psč",
      "cc-name": "Jméno držitele karty",
      "cc-given-name": "Křestní jméno držitele karty",
      "cc-additional-name": "Prostřední jméno držitele karty",
      "cc-family-name": "Příjmení držitele karty",
      "cc-number": "Číslo kreditní karty",
      "cc-exp": "Datum vypršení",
      "cc-exp-month": "Měsíc vypršení platnosti",
      "cc-exp-year": "Rok vypršení platnosti",
      "cc-csc": "Bezpečnostní kód karty",
      "cc-type": "Typ kreditní karty",
      "transaction-currency": "Měna transakce",
      "transaction-amount": "Částka transakce",
      language: "Preferovaný jazyk",
      bday: "Narozeniny",
      "bday-day": "Den narozenin",
      "bday-month": "Měsíc narozenin",
      "bday-year": "Narozeniny Rok",
      sex: "Pohlaví",
      url: "Adresa URL webu",
      photo: "Profilová fotografie",
      tel: "Telefonní číslo",
      "tel-country-code": "Předvolba země pro telefon",
      "tel-national": "Národní telefonní číslo",
      "tel-area-code": "Směrové číslo",
      "tel-local": "Místní telefonní číslo",
      "tel-local-prefix": "Předvolba místního telefonu",
      "tel-local-suffix": "Přípona místního telefonu",
      "tel-extension": "Telefonní linka",
      email: "E-mailová adresa",
      impp: "Protokol pro rychlé zasílání zpráv"
    },
    maskType: {
      none: "Žádný",
      pattern: "Vzor",
      numeric: "Číselný",
      datetime: "Datum a čas",
      currency: "Měna"
    },
    inputTextAlignment: {
      auto: "Auto",
      left: "Vlevo",
      right: "Vpravo"
    },
    all: "vše",
    page: "stránka",
    survey: "průzkum",
    onNextPage: "onNextPage",
    onValueChanged: "onValueChanged",
    onValueChanging: "onValueChanging",
    questionsOnPageMode: {
      standard: "Původní struktura",
      singlePage: "Zobrazit všechny otázky na jedné stránce",
      questionPerPage: "Zobrazit jednu otázku na stránku"
    },
    noPreview: "bez náhledu",
    showAllQuestions: "zobrazit náhled se všemi otázkami",
    showAnsweredQuestions: "zobrazit náhled se zodpovězenými otázkami",
    allQuestions: "Zobrazit všechny otázky",
    answeredQuestions: "Zobrazit pouze zodpovězené otázky",
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
    auto: "Auto",
    showNavigationButtons: {
      none: "Skrytý"
    },
    timerInfoMode: {
      combined: "Obě"
    },
    addRowButtonLocation: {
      default: "Závisí na rozložení matice"
    },
    panelsState: {
      default: "Uživatelé nemohou rozbalit nebo sbalit panely",
      collapsed: "Všechny panely jsou sbaleny",
      expanded: "Všechny panely jsou rozbaleny",
      firstExpanded: "První rozšířeno"
    },
    widthMode: {
      static: "Statický",
      responsive: "Responzivní"
    },
    contentMode: {
      image: "Obrázek",
      video: "Video",
      youtube: "YouTube"
    },
    displayMode: {
      buttons: "Tlačítka",
      dropdown: "Rozbalovací nabídka"
    },
    rateColorMode: {
      default: "Výchozí",
      scale: "Škála"
    },
    scaleColorMode: {
      monochrome: "Monochromatický",
      colored: "Barevný"
    },
    autoGenerate: {
      "true": "Generovat",
      "false": "Vložit ručně"
    },
    rateType: {
      labels: "Popisky",
      stars: "Hvězdy",
      smileys: "Smajlíci"
    },
    state: {
      default: "Zamčený"
    },
    showQuestionNumbers: {
      default: "Automatické číslování",
      on: "Automatické číslování",
      onPage: "Resetovat na každé stránce",
      onpanel: "Resetovat na každém panelu",
      onPanel: "Resetovat na každém panelu",
      recursive: "Rekurzivní číslování",
      onSurvey: "Pokračovat v průzkumu",
      off: "Žádné číslování"
    },
    descriptionLocation: {
      underTitle: "Pod nadpisem otázky",
      underInput: "Pod vstupním polem"
    },
    selectToRankAreasLayout: {
      horizontal: "Vedle voleb",
      vertical: "Výše uvedené možnosti"
    },
    displayStyle: {
      decimal: "Desetinný",
      currency: "Měna",
      percent: "Procento",
      date: "Rande"
    },
    totalDisplayStyle: {
      decimal: "Desetinný",
      currency: "Měna",
      percent: "Procento",
      date: "Rande"
    },
    rowOrder: {
      initial: "Původní"
    },
    questionOrder: {
      initial: "Původní"
    },
    progressBarLocation: {
      top: "Vrchol",
      bottom: "Dno",
      topbottom: "Nahoře a dole",
      aboveheader: "Nad záhlavím",
      belowheader: "Pod záhlavím",
      off: "Schovaný"
    },
    sum: "Součet",
    count: "Počítat",
    min: "Min",
    max: "Max",
    avg: "Průměr",
    searchMode: {
      contains: "Obsahuje",
      startsWith: "Začíná na"
    },
    backgroundImageFit: {
      auto: "Auto",
      cover: "Krýt",
      contain: "Obsahovat",
      fill: "Natáhnout",
      tile: "Dlaždice"
    },
    backgroundImageAttachment: {
      fixed: "Stabilní",
      scroll: "Svitek"
    },
    headerView: {
      basic: "Základní",
      advanced: "Pokročilý"
    },
    inheritWidthFrom: {
      survey: "Stejné jako průzkum",
      container: "Vhodné pro kontejner"
    },
    backgroundColorSwitch: {
      none: "Žádný",
      accentColor: "Barva zvýraznění",
      custom: "Zvyk"
    },
    colorPalette: {
      light: "Světlo",
      dark: "Temný"
    },
    isPanelless: {
      "false": "Výchozí",
      "true": "Bez panelů"
    },
    progressBarInheritWidthFrom: {
      survey: "Stejné jako v průzkumu",
      container: "Stejné jako u kontejneru"
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
  peplaceholder: {
    patternmask: {
      pattern: "Př.: +1(999)-999-99-99"
    },
    datetimemask: {
      pattern: "Př.: dd/mm/rrrr"
    },
    currencymask: {
      prefix: "Př.: $",
      suffix: "Př.: USD"
    },
    panelbase: {
      questionTitleWidth: "Př.: 200px"
    },
    panellayoutcolumn: {
      effectiveWidth: "Př.: 30%",
      questionTitleWidth: "Př.: 200px"
    }
  },
  pehelp: {
    panel: {
      name: "ID panelu, které není viditelné pro respondenty.",
      description: "Zadejte titulky panelu.",
      visibleIf: "Pomocí ikony kouzelné hůlky můžete nastavit podmíněné pravidlo, které určuje viditelnost panelu.",
      enableIf: "Pomocí ikony kouzelné hůlky nastavte podmíněné pravidlo, které pro panel zakáže režim jen pro čtení.",
      requiredIf: "Pomocí ikony kouzelné hůlky nastavte podmíněné pravidlo, které zabrání odeslání průzkumu, pokud alespoň jedna vnořená otázka nemá odpověď.",
      questionTitleLocation: "Platí pro všechny otázky v rámci tohoto panelu. Chcete-li toto nastavení přepsat, definujte pravidla zarovnání nadpisů pro jednotlivé otázky. Možnost \"Zdědit\" použije nastavení na úrovni stránky (pokud je nastaveno) nebo na úrovni průzkumu (ve výchozím nastavení \"Nahoře\").",
      questionTitleWidth: "Nastaví konzistentní šířku názvů otázek, pokud jsou zarovnány nalevo od polí s otázkami. Přijímá hodnoty CSS (px, %, in, pt atd.).",
      questionErrorLocation: "Nastaví umístění chybové zprávy ve vztahu ke všem otázkám v panelu. Možnost \"Zdědit\" použije nastavení na úrovni stránky (pokud je nastaveno) nebo na úrovni průzkumu.",
      questionOrder: "Zachová původní pořadí otázek nebo je náhodně vybere. Možnost \"Zdědit\" použije nastavení na úrovni stránky (pokud je nastaveno) nebo na úrovni průzkumu.",
      page: "Přemístí panel na konec vybrané stránky.",
      innerIndent: "Přidá mezeru nebo okraj mezi obsah panelu a levý okraj rámečku panelu.",
      startWithNewLine: "Zrušte výběr, chcete-li panel zobrazit v jednom řádku s předchozí otázkou nebo panelem. Nastavení se nepoužije, pokud je panel prvním prvkem ve formuláři.",
      state: "Vyberte si z: \"Rozbalený\" - panel se zobrazí celý a lze jej sbalit; \"Sbaleno\" - panel zobrazuje pouze název a popis a lze jej rozbalit; \"Zamčeno\" - obraz je zobrazen celý a nelze jej sbalit.",
      width: "Nastaví šířku panelu v poměru k ostatním prvkům zaměření ve stejném řádku. Přijímá hodnoty CSS (px, %, in, pt atd.).",
      showQuestionNumbers: "Přiřadí čísla otázkám vnořeným v tomto panelu.",
      effectiveColSpan: "Určuje, kolik sloupců se tento panel rozprostírá v rozvržení mřížky.",
      gridLayoutColumns: "Tato tabulka umožňuje konfigurovat jednotlivé sloupce mřížky v panelu. Automaticky nastaví procentuální šířku pro každý sloupec na základě maximálního počtu prvků v řádku. Chcete-li přizpůsobit rozvržení mřížky, upravte tyto hodnoty ručně a definujte šířku nadpisu pro všechny otázky v každém sloupci."
    },
    paneldynamic: {
      name: "ID panelu, které není viditelné pro respondenty.",
      description: "Zadejte titulky panelu.",
      visibleIf: "Pomocí ikony kouzelné hůlky můžete nastavit podmíněné pravidlo, které určuje viditelnost panelu.",
      enableIf: "Pomocí ikony kouzelné hůlky nastavte podmíněné pravidlo, které pro panel zakáže režim jen pro čtení.",
      requiredIf: "Pomocí ikony kouzelné hůlky nastavte podmíněné pravidlo, které zabrání odeslání průzkumu, pokud alespoň jedna vnořená otázka nemá odpověď.",
      templateQuestionTitleLocation: "Platí pro všechny otázky v rámci tohoto panelu. Chcete-li toto nastavení přepsat, definujte pravidla zarovnání nadpisů pro jednotlivé otázky. Možnost \"Zdědit\" použije nastavení na úrovni stránky (pokud je nastaveno) nebo na úrovni průzkumu (ve výchozím nastavení \"Nahoře\").",
      templateQuestionTitleWidth: "Nastaví konzistentní šířku názvů otázek, pokud jsou zarovnány vlevo od polí otázek. Přijímá hodnoty CSS (px, %, in, pt, atd.).",
      templateErrorLocation: "Nastaví umístění chybové zprávy ve vztahu k otázce s neplatným vstupem. Vyberte si mezi: \"Nahoře\" - text chyby je umístěn v horní části pole s otázkou; \"Bottom\" - text chyby je umístěn ve spodní části pole s otázkou. Možnost \"Zdědit\" použije nastavení na úrovni stránky (pokud je nastaveno) nebo na úrovni průzkumu (ve výchozím nastavení \"Nahoře\").",
      errorLocation: "Nastaví umístění chybové zprávy ve vztahu ke všem otázkám v panelu. Možnost \"Zdědit\" použije nastavení na úrovni stránky (pokud je nastaveno) nebo na úrovni průzkumu.",
      page: "Přemístí panel na konec vybrané stránky.",
      innerIndent: "Přidá mezeru nebo okraj mezi obsah panelu a levý okraj rámečku panelu.",
      startWithNewLine: "Zrušte výběr, chcete-li panel zobrazit v jednom řádku s předchozí otázkou nebo panelem. Nastavení se nepoužije, pokud je panel prvním prvkem ve formuláři.",
      state: "Vyberte si z: \"Rozbalený\" - panel se zobrazí celý a lze jej sbalit; \"Sbaleno\" - panel zobrazuje pouze název a popis a lze jej rozbalit; \"Zamčeno\" - obraz je zobrazen celý a nelze jej sbalit.",
      width: "Nastaví šířku panelu v poměru k ostatním prvkům zaměření ve stejném řádku. Přijímá hodnoty CSS (px, %, in, pt atd.).",
      templateTitle: "Zadejte šablonu pro dynamické názvy panelů. Použijte {panelIndex} pro obecnou pozici panelu a {visiblePanelIndex} pro jeho pořadí mezi viditelnými panely. Vložením těchto zástupných symbolů do vzorku přidáte automatické číslování.",
      templateTabTitle: "Zadejte šablonu pro názvy karet. Použijte {panelIndex} pro obecnou pozici panelu a {visiblePanelIndex} pro jeho pořadí mezi viditelnými panely. Vložením těchto zástupných symbolů do vzorku přidáte automatické číslování.",
      tabTitlePlaceholder: "Záložní text pro názvy karet, který se použije, když vzor názvu karty nevytváří smysluplnou hodnotu.",
      templateVisibleIf: "Toto nastavení umožňuje řídit viditelnost jednotlivých panelů v rámci dynamického panelu. Pomocí zástupného symbolu {panel} můžete odkazovat na aktuální panel ve výrazu.",
      titleLocation: "Toto nastavení je automaticky převzato všemi otázkami v tomto panelu. Chcete-li toto nastavení přepsat, definujte pravidla zarovnání nadpisů pro jednotlivé otázky. Možnost \"Zdědit\" použije nastavení na úrovni stránky (pokud je nastaveno) nebo na úrovni průzkumu (ve výchozím nastavení \"Nahoře\").",
      descriptionLocation: "Možnost \"Zdědit\" použije nastavení na úrovni stránky (pokud je nastaveno) nebo na úrovni průzkumu (ve výchozím nastavení \"Pod názvem panelu\").",
      newPanelPosition: "Definuje polohu nově přidaného panelu. Ve výchozím nastavení se nové panely přidávají na konec. Výběrem možnosti \"Další\" vložíte nový panel za aktuální.",
      copyDefaultValueFromLastEntry: "Duplikuje odpovědi z posledního panelu a přiřadí je dalšímu přidanému dynamickému panelu.",
      keyName: "Odkazujte na název otázky, chcete-li vyžadovat, aby uživatel na tuto otázku v každém panelu poskytl jedinečnou odpověď."
    },
    copyDefaultValueFromLastEntry: "Duplikuje odpovědi z posledního řádku a přiřadí je k dalšímu přidanému dynamickému řádku.",
    defaultValueExpression: "Toto nastavení umožňuje přiřadit výchozí hodnotu odpovědi na základě výrazu. Výraz může obsahovat základní výpočty - '{q1_id} + {q2_id}', logické výrazy, například '{age} > 60', a funkce: 'iif()', 'today()', 'age()', 'min()', 'max()', 'avg()' atd. Hodnota určená tímto výrazem slouží jako počáteční výchozí hodnota, kterou lze přepsat ručním zadáním respondenta.",
    resetValueIf: "Pomocí ikony kouzelné hůlky můžete nastavit podmíněné pravidlo, které určuje, kdy se vstup respondenta resetuje na hodnotu na základě \"Výrazu výchozí hodnoty\" nebo \"Výrazu nastavit hodnotu\" nebo na hodnotu \"Výchozí odpověď\" (pokud je nastavena kterákoli z nich).",
    setValueIf: "Pomocí ikony kouzelné hůlky můžete nastavit podmíněné pravidlo, které určuje, kdy se má spustit výraz \"Nastavit hodnotu\", a dynamicky přiřadit výslednou hodnotu jako odpověď.",
    setValueExpression: "Zadejte výraz, který definuje hodnotu, která má být nastavena, když jsou splněny podmínky v pravidle \"Nastavit hodnotu, pokud\". Výraz může obsahovat základní výpočty - '{q1_id} + {q2_id}', logické výrazy, například '{age} > 60', a funkce: 'iif()', 'today()', 'age()', 'min()', 'max()', 'avg()' atd. Hodnota určená tímto výrazem může být přepsána ručním zadáním respondenta.",
    gridLayoutEnabled: "Aplikace Survey Creator umožňuje ručně upravit šířky vložených prvků formuláře a řídit tak rozvržení. Pokud to nevede k požadovanému výsledku, můžete zapnout rozvržení mřížky, které struktury tvoří elementy pomocí sloupcového systému. Chcete-li konfigurovat sloupce rozvržení, vyberte stránku nebo panel a použijte tabulku \"Nastavení otázek\" → \"Sloupce mřížky\". Chcete-li upravit, kolik sloupců otázka zabírá, vyberte ji a nastavte požadovanou hodnotu v poli \"Rozvržení\" → \"Rozpětí sloupců\".",
    question: {
      name: "ID otázky, které respondenti nevidí.",
      description: "Zadejte podnadpis otázky.",
      visibleIf: "Pomocí ikony kouzelné hůlky můžete nastavit podmíněné pravidlo, které určuje viditelnost otázky.",
      enableIf: "Pomocí ikony kouzelné hůlky nastavte podmíněné pravidlo, které pro otázku zakáže režim jen pro čtení.",
      requiredIf: "Pomocí ikony kouzelné hůlky můžete nastavit podmíněné pravidlo, které zabrání postupu nebo odeslání průzkumu, pokud otázka neobdržela odpověď.",
      startWithNewLine: "Zrušte výběr, chcete-li otázku zobrazit v jednom řádku s předchozí otázkou nebo panelem. Nastavení se nepoužije, pokud je otázka prvním prvkem ve formuláři.",
      page: "Přemístí otázku na konec vybrané stránky.",
      state: "Vyberte si z: \"Rozbalené\" - pole s otázkou se zobrazí celé a lze jej sbalit; \"Sbaleno\" - pole s otázkou zobrazuje pouze název a popis a lze jej rozbalit; \"Zamčeno\" - pole s otázkou je zobrazeno celé a nelze jej sbalit.",
      titleLocation: "Přepíše pravidla zarovnání nadpisů definovaná na úrovni panelu, stránky nebo průzkumu. Možnost \"Zdědit\" použije všechna nastavení vyšší úrovně (pokud je nastavena) nebo nastavení na úrovni průzkumu (ve výchozím nastavení \"Nahoře\").",
      descriptionLocation: "Možnost \"Zdědit\" použije nastavení na úrovni průzkumu (ve výchozím nastavení \"Pod názvem otázky\").",
      errorLocation: "Nastaví umístění chybové zprávy ve vztahu k otázce s neplatným vstupem. Vyberte si mezi: \"Nahoře\" - text chyby je umístěn v horní části pole s otázkou; \"Bottom\" - text chyby je umístěn ve spodní části pole s otázkou. Možnost \"Zdědit\" použije nastavení na úrovni průzkumu (ve výchozím nastavení \"Nahoře\").",
      indent: "Přidá mezeru nebo okraj mezi obsah otázky a levý okraj pole otázky.",
      width: "Nastaví šířku otázky v poměru k ostatním prvkům průzkumu ve stejném řádku. Přijímá hodnoty CSS (px, %, in, pt atd.).",
      surveyvalidator: {
        expression: "Pomocí ikony kouzelné hůlky nastavte ověřovací pravidlo pro otázku."
      },
      textUpdateMode: "Vyberte si z těchto možností: \"Při ztrátě fokusu\" - hodnota se aktualizuje, když vstupní pole ztratí fokus; \"Při psaní\" - hodnota se aktualizuje v reálném čase, jak uživatelé píší. Možnost \"Zdědit\" použije nastavení na úrovni průzkumu (ve výchozím nastavení \"Při ztrátě fokusu\").",
      url: "Jako zdroj dat pro otázky s výběrem odpovědí můžete použít libovolnou webovou službu. Pokud chcete naplnit hodnoty voleb, zadejte adresu URL služby, která data poskytuje.",
      searchMode: "Operace porovnání, která se používá k filtrování rozevíracího seznamu.",
      textWrapEnabled: "Dlouhé texty v možnostech volby automaticky vygenerují zalomení řádků, aby se vešly do rozbalovací nabídky. Odznačte, pokud chcete, aby se texty ořízly.",
      effectiveColSpan: "Určuje, kolik sloupců tato otázka zabírá v rozvržení mřížky."
    },
    signaturepad: {
      signatureWidth: "Nastaví šířku zobrazené oblasti podpisu a výsledného obrazu.",
      signatureHeight: "Nastaví výšku zobrazené oblasti podpisu a výsledného obrazu.",
      signatureAutoScaleEnabled: "Vyberte, zda chcete, aby oblast podpisu vyplnila veškerý dostupný prostor v poli pro otázky při zachování výchozího poměru stran 3:2. Pokud jsou nastaveny vlastní hodnoty šířky a výšky, nastavení zachová poměr stran těchto rozměrů."
    },
    file: {
      imageHeight: "Upraví výšku obrázku ve výsledcích měření.",
      imageWidth: "Upraví šířku obrázku ve výsledcích měření.",
      allowImagesPreview: "Pokud je to možné, zobrazuje náhledy miniatur pro nahrané soubory. Zrušte výběr, pokud chcete místo toho zobrazit ikony souborů."
    },
    image: {
      contentMode: "Možnost \"Auto\" automaticky určí vhodný režim pro zobrazení – Obrázek, Video nebo YouTube – na základě zadané zdrojové adresy URL."
    },
    imagepicker: {
      imageHeight: "Přepíše minimální a maximální hodnoty výšky.",
      imageWidth: "Přepíše minimální a maximální hodnoty šířky.",
      choices: "\"Hodnota\" slouží jako ID položky používané v podmíněných pravidlech; Respondentům se zobrazí \"Text\".",
      contentMode: "Vyberte si mezi \"Obrazem\" a \"Video\" a nastavte režim obsahu voliče médií. Pokud je vybrána možnost \"Obrázek\", ujistěte se, že všechny nabízené možnosti jsou obrazové soubory v následujících formátech: JPEG, GIF, PNG, APNG, SVG, BMP, ICO. Podobně, pokud je vybráno \"Video\", ujistěte se, že všechny možnosti jsou přímými odkazy na video soubory v následujících formátech: MP4, MOV, WMV, FLV, AVI, MKV. Upozorňujeme, že odkazy na YouTube nejsou podporovány u možností videa."
    },
    text: {
      size: "Toto nastavení pouze mění velikost vstupního pole a nemá vliv na šířku pole s otázkou. Chcete-li omezit přijatelnou délku vstupu, přejděte na <b>Ověření → Maximální limit znaků</b>."
    },
    comment: {
      rows: "Nastaví počet zobrazených řádků ve vstupním poli. Pokud vstup zabírá více řádků, zobrazí se posuvník."
    },
    // survey templates
    survey: {
      readOnly: "Vyberte, zda chcete respondentům zabránit ve vyplnění průzkumu.",
      progressBarLocation: "Nastaví umístění indikátoru průběhu. Hodnota \"Auto\" zobrazuje indikátor průběhu nad nebo pod záhlavím průzkumu."
    },
    matrixdropdowncolumn: {
      name: "ID sloupce, které není viditelné pro respondenty.",
      isUnique: "Pokud je tato možnost povolena pro sloupec, respondent musí poskytnout jedinečnou odpověď na každou otázku v tomto sloupci.",
      rows: "Nastaví počet zobrazených řádků ve vstupním poli. Pokud vstup zabírá více řádků, zobrazí se posuvník.",
      visibleIf: "Pomocí ikony kouzelné hůlky můžete nastavit podmíněné pravidlo, které určuje viditelnost sloupce.",
      enableIf: "Pomocí ikony kouzelné hůlky nastavte podmíněné pravidlo, které zakáže režim jen pro čtení pro sloupec.",
      requiredIf: "Pomocí ikony kouzelné hůlky nastavte podmíněné pravidlo, které zabrání odeslání průzkumu, pokud alespoň jedna vnořená otázka nemá odpověď.",
      showInMultipleColumns: "Pokud je tato možnost vybraná, vytvoří samostatný sloupec pro každou možnost volby.",
      colCount: "Uspořádá volby voleb ve vícesloupcovém rozvržení. Když je nastavená hodnota 0, volby se zobrazí na jednom řádku. Pokud je nastavena hodnota -1, skutečná hodnota je zděděna z vlastnosti \"Počet vnořených sloupců\" nadřazené matice."
    },
    caseInsensitive: "Vyberte, zda mají být velká a malá písmena v regulárním výrazu považována za ekvivalentní.",
    widthMode: "Vyberte si z: \"Statické\" - nastaví pevnou šířku; \"Responzivní\" - způsobí, že průzkum bude zabírat celou šířku obrazovky; \"Auto\" – použije jednu z těchto dvou možností v závislosti na použitých typech otázek.",
    cookieName: "Cookies brání uživatelům vyplnit průzkum vícekrát.",
    logo: "Vložte odkaz na obrázek (bez omezení velikosti) nebo klikněte na ikonu složky a procházejte soubor z počítače (až 64 kB).",
    logoWidth: "Nastaví šířku loga v jednotkách CSS (px, %, in, pt atd.).",
    logoHeight: "Nastaví výšku loga v jednotkách CSS (px, %, in, pt atd.).",
    logoFit: "Vyberte si z těchto možností: \"Žádné\" - obrázek si zachová svou původní velikost; \"Obsahovat\" - velikost obrázku se změní tak, aby se vešel při zachování poměru stran; \"Obálka\" - obrázek vyplní celý rámeček při zachování poměru stran; \"Výplň\" - obrázek je roztažen tak, aby vyplnil rámeček bez zachování poměru stran.",
    autoAdvanceEnabled: "Vyberte, zda chcete, aby průzkum automaticky přešel na další stránku, jakmile respondent odpoví na všechny otázky na aktuální stránce. Tato funkce se nepoužije, pokud je poslední otázka na stránce otevřená nebo umožňuje více odpovědí.",
    autoAdvanceAllowComplete: "Vyberte, zda chcete, aby se průzkum vyplnil automaticky poté, co respondent odpoví na všechny otázky.",
    showNavigationButtons: "Nastaví viditelnost a umístění navigačních tlačítek na stránce.",
    navigationButtonsLocation: "Nastaví umístění navigačních tlačítek na stránce.",
    showPreviewBeforeComplete: "Povolte stránku náhledu pouze se všemi nebo zodpovězenými otázkami.",
    questionTitleLocation: "Platí pro všechny otázky v rámci průzkumu. Toto nastavení lze přepsat pravidly zarovnání nadpisů na nižších úrovních: panel, stránka nebo otázka. Nastavení nižší úrovně přepíše nastavení na vyšší úrovni.",
    requiredMark: "Symbol nebo posloupnost symbolů označující, že je vyžadována odpověď.",
    questionStartIndex: "Zadejte číslo nebo písmeno, kterým chcete začít číslovat.",
    questionErrorLocation: "Nastaví umístění chybové zprávy ve vztahu k otázce s neplatným vstupem. Vyberte si mezi: \"Nahoře\" - text chyby je umístěn v horní části pole s otázkou; \"Bottom\" - text chyby je umístěn ve spodní části pole s otázkou.",
    autoFocusFirstQuestion: "Vyberte, zda chcete, aby první vstupní pole na každé stránce bylo připraveno pro zadání textu.",
    questionOrder: "Zachová původní pořadí otázek nebo je náhodně vybere. Účinek tohoto nastavení je viditelný pouze na kartě Náhled.",
    maxTextLength: "Pouze pro otázky pro zadávání textu.",
    maxCommentLength: "Pouze pro komentáře k otázkám.",
    commentAreaRows: "Nastaví počet zobrazených řádků v textových oblastech pro komentáře k otázkám. Pokud vstup zabírá více řádků, zobrazí se posuvník.",
    autoGrowComment: "Vyberte, zda chcete, aby se komentáře k otázkám a otázky s dlouhým textem automaticky zvětšovaly na výšku podle zadané délky textu.",
    allowResizeComment: "Pouze pro komentáře k otázkám a otázky s dlouhým textem.",
    calculatedValues: "Vlastní proměnné slouží jako mezilehlé nebo pomocné proměnné používané při výpočtech formulářů. Jako zdrojové hodnoty berou vstupy respondentů. Každá vlastní proměnná má jedinečný název a výraz, na kterém je založena.",
    includeIntoResult: "Vyberte, zda chcete, aby byla vypočtená hodnota výrazu uložena spolu s výsledky průzkumu.",
    triggers: "Aktivační událost je událost nebo podmínka, která je založena na výrazu. Jakmile je výraz vyhodnocen jako \"true\", trigger spustí akci. Taková akce může mít volitelně cílovou otázku, kterou ovlivňuje.",
    clearInvisibleValues: "Zvolte, zda chcete vymazat hodnoty otázek skrytých podmíněnou logikou a kdy to udělat.",
    textUpdateMode: "Vyberte si z těchto možností: \"Při ztrátě fokusu\" - hodnota se aktualizuje, když vstupní pole ztratí fokus; \"Při psaní\" - hodnota se aktualizuje v reálném čase, jak uživatelé píší.",
    columns: "Levá hodnota slouží jako ID sloupce používané v podmíněných pravidlech, pravá hodnota se zobrazuje respondentům.",
    rows: "Levá hodnota slouží jako ID řádku používané v podmíněných pravidlech, pravá hodnota se zobrazuje respondentům.",
    columnMinWidth: "Přijímá hodnoty CSS (px, %, in, pt atd.).",
    rowTitleWidth: "Přijímá hodnoty CSS (px, %, in, pt atd.).",
    totalText: "Viditelné pouze v případě, že alespoň jeden sloupec je typu suma nebo obsahuje sumarizační výraz.",
    cellErrorLocation: "Nastaví umístění chybové zprávy ve vztahu k buňce s neplatným vstupem. Možnost \"Zdědit\" použije nastavení z vlastnosti \"Zarovnání chybové zprávy\".",
    detailErrorLocation: "Nastavuje umístění chybových zpráv pro otázky vnořené do podrobných oddílů. Volba \"Zdědit\" aplikuje nastavení z vlastnosti \"Zarovnání chybové zprávy\".",
    keyDuplicationError: "Pokud je povolena vlastnost \"Zabránit duplicitním odpovědím\", respondentovi, který se pokouší odeslat duplicitní záznam, se zobrazí následující chybová zpráva.",
    totalExpression: "Umožňuje vypočítat celkové hodnoty na základě výrazu. Výraz může obsahovat základní výpočty ('{q1_id} + {q2_id}'), logické výrazy ('{age} > 60') a funkce ('iif()', 'today()', 'age()', 'min()', 'max()', 'avg()' atd.).",
    confirmDelete: "Spustí výzvu s žádostí o potvrzení odstranění řádku.",
    keyName: "Pokud zadaný sloupec obsahuje totožné hodnoty, průzkum vyhodí chybu „Klíč není unikátní“.",
    description: "Zadejte titulky.",
    locale: "Vyberte jazyk a začněte vytvářet průzkum. Chcete-li přidat překlad, přepněte do nového jazyka a přeložte původní text zde nebo na kartě Překlady.",
    detailPanelMode: "Nastaví umístění oddílu podrobností ve vztahu k řádku. Vyberte si z těchto možností: \"Žádné\" - není přidáno žádné rozšíření; \"Pod řádkem\" - pod každým řádkem matice je umístěno rozšíření řádku; \"Pod řádkem zobrazit pouze jedno rozšíření řádku\" - rozšíření je zobrazeno pouze pod jedním řádkem, zbývající rozšíření řádků jsou sbalena.",
    imageFit: "Vyberte si z těchto možností: \"Žádné\" - obrázek si zachová svou původní velikost; \"Obsahovat\" - velikost obrázku se změní tak, aby se vešel při zachování poměru stran; \"Obálka\" - obrázek vyplní celý rámeček při zachování poměru stran; \"Výplň\" - obrázek je roztažen tak, aby vyplnil rámeček bez zachování poměru stran.",
    autoGrow: "Postupně zvětšuje výšku vstupního pole při zadávání dat. Přepíše nastavení \"Výška vstupního pole (v řádcích)\".",
    allowResize: "Úchyt pro změnu velikosti (nebo uzel) se zobrazí v rohu a lze jej přetáhnout a změnit tak velikost vstupního pole.",
    timeLimit: "Časový interval v sekundách, po jehož uplynutí se průzkum automaticky přesune na stránku s poděkováním.",
    timeLimitPerPage: "Časový interval v sekundách, po jehož uplynutí se průzkum automaticky přesune na další stránku.",
    validateVisitedEmptyFields: "Tuto možnost povolte, chcete-li spustit ověření, když se uživatel zaměří na prázdné vstupní pole a poté ho opustí, aniž by provedl jakékoli změny.",
    page: {
      name: "ID stránky, které není viditelné pro respondenty.",
      description: "Zadejte podnadpis stránky.",
      navigationTitle: "Titulek zobrazený na navigačním tlačítku na ukazateli průběhu nebo v obsahu. Pokud toto pole ponecháte prázdné, navigační tlačítko použije název stránky nebo název stránky. Chcete-li aktivovat ukazatel průběhu nebo obsah, přejděte na \"Průzkum\" → \"Navigace\".",
      timeLimit: "Časový interval v sekundách, po jehož uplynutí se průzkum automaticky přesune na další stránku.",
      visibleIf: "Pomocí ikony kouzelné hůlky můžete nastavit podmíněné pravidlo, které určuje viditelnost stránky.",
      enableIf: "Pomocí ikony kouzelné hůlky nastavte podmíněné pravidlo, které zakáže režim pouze pro čtení stránky.",
      requiredIf: "Pomocí ikony kouzelné hůlky nastavte podmíněné pravidlo, které zabrání odeslání průzkumu, pokud alespoň jedna vnořená otázka nemá odpověď.",
      questionTitleLocation: "Platí pro všechny otázky na této stránce. Chcete-li toto nastavení přepsat, definujte pravidla zarovnání nadpisů pro jednotlivé otázky nebo panely. Možnost \"Zdědit\" použije nastavení na úrovni průzkumu (ve výchozím nastavení \"Nahoře\").",
      questionTitleWidth: "Nastaví konzistentní šířku názvů otázek, pokud jsou zarovnány nalevo od polí s otázkami. Přijímá hodnoty CSS (px, %, in, pt atd.).",
      questionErrorLocation: "Nastaví umístění chybové zprávy ve vztahu k otázce s neplatným vstupem. Vyberte si mezi: \"Nahoře\" - text chyby je umístěn v horní části pole s otázkou; \"Bottom\" - text chyby je umístěn ve spodní části pole s otázkou. Možnost \"Zdědit\" použije nastavení na úrovni průzkumu (ve výchozím nastavení \"Nahoře\").",
      questionOrder: "Zachová původní pořadí otázek nebo je náhodně vybere. Možnost \"Zdědit\" použije nastavení na úrovni průzkumu (ve výchozím nastavení \"Původní\"). Účinek tohoto nastavení je viditelný pouze na kartě Náhled.",
      showNavigationButtons: "Nastaví viditelnost navigačních tlačítek na stránce. Možnost \"Zdědit\" použije nastavení na úrovni průzkumu, které je ve výchozím nastavení \"Viditelné\".",
      gridLayoutColumns: "Tato tabulka umožňuje konfigurovat jednotlivé sloupce mřížky na stránce. Automaticky nastaví procentuální šířku pro každý sloupec na základě maximálního počtu prvků v řádku. Chcete-li přizpůsobit rozvržení mřížky, upravte tyto hodnoty ručně a definujte šířku nadpisu pro všechny otázky v každém sloupci."
    },
    timerLocation: "Nastaví umístění časovače na stránce.",
    panelsState: "Vyberte si z těchto možností: \"Uzamčeno\" - uživatelé nemohou rozbalit nebo sbalit panely; \"Sbalit vše\" - všechny panely začínají ve sbaleném stavu; \"Rozbalit vše\" - všechny panely začínají v rozbaleném stavu; \"První rozbalený\" - zpočátku se rozbalí pouze první panel.",
    imageLinkName: "Zadejte název sdílené vlastnosti v poli objektů, které obsahuje adresy URL souborů obrázků nebo videí, které chcete zobrazit v seznamu voleb.",
    choices: "Levá hodnota slouží jako ID položky používané v podmíněných pravidlech, pravá hodnota se zobrazuje respondentům.",
    title: "Zadejte uživatelsky přívětivý název, který chcete zobrazit.",
    waitForUpload: "Zajistí, že uživatelé nedokončí průzkum, dokud nebudou soubory nahrány.",
    minWidth: "Přijímá hodnoty CSS (px, %, in, pt atd.).",
    maxWidth: "Přijímá hodnoty CSS (px, %, in, pt atd.).",
    width: "Přijímá hodnoty CSS (px, %, in, pt atd.).",
    valueName: "Pokud tuto vlastnost nenastavíte, odpověď bude uložena v poli specifikovaném názvem otázky.",
    defaultDisplayValue: "Hodnota zobrazená v otázkách HTML a v dynamických názvech a popisech prvků průzkumu, když je hodnota otázky prázdná.",
    useDisplayValuesInDynamicTexts: "V typech otázek s jedním a vícenásobným výběrem má každá možnost volby ID a zobrazovanou hodnotu. Pokud je tato možnost vybrána, zobrazí se v otázkách HTML a dynamických názvech a popisech prvků průzkumu zobrazená hodnota místo hodnoty ID.",
    clearIfInvisible: "Zvolte, zda chcete vymazat hodnoty otázek skryté podmíněnou logikou a kdy to udělat. Možnost \"Zdědit\" použije nastavení na úrovni průzkumu (ve výchozím nastavení \"Po dokončení průzkumu\").",
    choicesFromQuestionMode: "Vyberte si z: \"Vše\" - zkopíruje všechny možnosti výběru z vybrané otázky; \"Vybrané\" - dynamicky kopíruje pouze vybrané možnosti volby; \"Nevybráno\" - dynamicky zkopíruje pouze nevybrané možnosti výběru. Možnosti \"Žádné\" a \"Jiné\" jsou ve výchozím nastavení zkopírovány, pokud jsou povoleny ve zdrojové otázce.",
    choiceValuesFromQuestion: "U otázek s jedním a více výběry má každá možnost volby ID a zobrazovanou hodnotu. Toto nastavení určuje, která matice, sloupec nebo otázka panelu by měla ID poskytovat.",
    choiceTextsFromQuestion: "U otázek s jedním a více výběry má každá možnost volby ID a zobrazovanou hodnotu. Toto nastavení určuje, který sloupec matice nebo otázka panelu by měla poskytovat zobrazované texty.",
    allowCustomChoices: "Zaškrtnutím umožníte respondentům přidat vlastní volby, pokud požadovaná možnost není v rozbalovací nabídce k dispozici. Vlastní volby budou uloženy pouze dočasně po dobu trvání aktuální relace prohlížeče.",
    showOtherItem: "Pokud je tato možnost vybraná, mohou uživatelé zahrnout další vstup do samostatného pole pro komentář.",
    separateSpecialChoices: "Zobrazí každou speciální volbu (\"Žádná\", \"Jiné\", \"Vybrat vše\") na novém řádku, a to i při použití rozložení s více sloupci.",
    path: "Zadejte umístění v datové sadě služby, kde se nachází cílové pole objektů. Ponechte prázdné, pokud adresa URL již odkazuje na pole.",
    choicesbyurl: {
      valueName: " "
    },
    titleName: "Zadejte jednotný název vlastnosti v poli objektů, které obsahuje hodnoty, které chcete zobrazit v seznamu voleb.",
    allowEmptyResponse: "Tuto možnost vyberte, pokud chcete, aby služba vracela prázdnou odpověď nebo pole.",
    choicesVisibleIf: "Pomocí ikony kouzelné hůlky můžete nastavit podmíněné pravidlo, které určuje viditelnost všech voleb.",
    rateValues: "Levá hodnota slouží jako ID položky používané v podmíněných pravidlech, pravá hodnota se zobrazuje respondentům.",
    rating: {
      displayMode: "\"Auto\" vybírá mezi režimy \"Tlačítka\" a \"Rozbalovací nabídka\" na základě dostupné šířky. Pokud šířka není dostatečná k zobrazení tlačítek, zobrazí se v otázce rozevírací seznam."
    },
    valuePropertyName: "Umožňuje propojit otázky, které poskytují výsledky v různých formátech. Pokud jsou takové otázky propojeny pomocí identifikátoru spojení, tato sdílená vlastnost ukládá vybrané hodnoty otázek.",
    searchEnabled: "Vyberte, zda chcete aktualizovat obsah rozevírací nabídky tak, aby odpovídal vyhledávacímu dotazu, který uživatel zadává do vstupního pole.",
    valueTrue: "Hodnota, která se uloží do výsledků průzkumu, když respondenti odpoví kladně.",
    valueFalse: "Hodnota, která se má uložit do výsledků průzkumu, když respondenti odpoví záporně.",
    showPreview: "Tuto možnost se nedoporučuje zakazovat, protože přepíše obrázek náhledu a uživateli ztíží pochopení, jestli byly soubory nahrány.",
    needConfirmRemoveFile: "Spustí výzvu s žádostí o potvrzení odstranění souboru.",
    selectToRankEnabled: "Povolením seřadíte pouze vybrané volby. Uživatelé přetáhnou vybrané položky ze seznamu voleb a seřadí je v oblasti hodnocení.",
    dataList: "Zadejte seznam možností, které budou respondentovi navrženy během vstupu.",
    inputSize: "Nastavení mění pouze velikost vstupních polí a nemá vliv na šířku pole pro otázky.",
    itemTitleWidth: "Nastaví konzistentní šířku pro všechny popisky položek. Přijímá hodnoty CSS (px, %, in, pt, atd.).",
    inputTextAlignment: "Vyberte, jak chcete zarovnat vstupní hodnotu v poli. Výchozí nastavení \"Auto\" zarovná vstupní hodnotu doprava, pokud je použito maskování měny nebo čísel, a doleva, pokud ne.",
    altText: "Slouží jako náhrada v případě, že obrázek nelze zobrazit na zařízení uživatele, a pro účely usnadnění.",
    rateColorMode: "Definuje barvu vybraného emotikonu, když je typ ikony Hodnocení nastaven na \"Smajlíky\". Vyberte si mezi: \"Výchozí\" - vybraný emotikon se zobrazí ve výchozí barvě průzkumu; \"Měřítko\" - vybraný emotikon zdědí barvu ze stupnice hodnocení.",
    expression: {
      name: "ID výrazu, které není viditelné pro respondenty.",
      description: "Zadejte výraz subtitle.",
      expression: "Výraz může obsahovat základní výpočty ('{q1_id} + {q2_id}'), podmínky ('{age} > 60') a funkce ('iif()', 'today()', 'age()', 'min()', 'max()', 'avg()' atd.)."
    },
    storeOthersAsComment: "Tuto možnost vyberte, chcete-li uložit hodnotu možnosti \"Jiné\" jako samostatnou vlastnost ve výsledcích průzkumu.",
    format: "Použít {0} jako zástupný text pro skutečnou hodnotu.",
    acceptedTypes: "Pro více informací viz [accept](https://www.w3schools.com/tags/att_input_accept.asp).",
    columnColCount: "Vztahuje se pouze na typy přepínač a zaškrtávací políčka.",
    autocomplete: "Pro více informací viz [autocomplete](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete).",
    filePlaceholder: "Platí, když je \"Typ zdroje\" nastaven na \"Místní soubory\" nebo když je kamera nedostupná",
    photoPlaceholder: "Platí, když je \"Typ zdroje\" nastaven na \"Fotoaparát\".",
    fileOrPhotoPlaceholder: "Platí, když \"Typ zdroje\" je \"Místní soubory nebo kamera\".",
    colCount: "Uspořádá možnosti voleb v rozložení s více sloupci. Při nastavení na 0 se možnosti zobrazí na jednom řádku.",
    masksettings: {
      saveMaskedValue: "Vyberte, zda chcete uložit hodnotu otázky s použitou maskou do výsledků průzkumu."
    },
    patternmask: {
      pattern: "Vzor může obsahovat řetězcové literály a následující zástupné symboly: \"9\" - pro číslici; \"a\" - pro velké nebo malé písmeno; '#' - pro číslici nebo velké či malé písmeno. Pomocí zpětného lomítka \\ můžete znak uvozovat."
    },
    datetimemask: {
      pattern: "Vzor může obsahovat oddělovací znaky a následující zástupné symboly:<br>'m' - Číslo měsíce.<br>'mm' - Číslo měsíce s úvodní nulou pro jednociferné hodnoty. <br>\"d\" - Den v měsíci. <br>'dd' - Den v měsíci, s úvodní nulou pro jednociferné hodnoty. <br>\"yy\" – poslední dvě číslice roku. <br>\"yyyy\" – čtyřmístný rok. <br>\"H\" – hodiny ve 24hodinovém formátu. <br>\"HH\" – hodiny ve 24hodinovém formátu, s úvodní nulou pro jednociferné hodnoty. <br>\"h\" – hodiny ve 12hodinovém formátu. <br>'hh' - Hodiny ve 12hodinovém formátu, s úvodní nulou pro jednociferné hodnoty. <br>'MM' - Zápisy. <br>'ss' - Sekundy. <br>\"TT\" – 12hodinový časový interval psaný velkými písmeny (AM/PM). <br>'tt' - 12hodinový časový interval psaný malými písmeny (am/pm)."
    },
    numericmask: {
      decimalSeparator: "Symbol používaný k oddělení zlomkové části od celočíselné části zobrazeného čísla.",
      thousandsSeparator: "Symbol používaný k oddělení číslic velkého čísla do skupin po třech.",
      precision: "Omezuje, kolik číslic se má zachovat za desetinnou čárkou zobrazeného čísla."
    },
    currencymask: {
      prefix: "Jeden nebo více symbolů, které mají být zobrazeny před hodnotou.",
      suffix: "Jeden nebo více symbolů, které se zobrazí za hodnotou."
    },
    theme: {
      isPanelless: "Toto nastavení platí pouze pro otázky mimo panel.",
      primaryColor: "Nastaví doplňkovou barvu, která zvýrazní klíčové prvky průzkumu.",
      panelBackgroundTransparency: "Upraví průhlednost panelů a polí s otázkami vzhledem k pozadí průzkumu.",
      questionBackgroundTransparency: "Upraví průhlednost vstupních prvků vzhledem k pozadí průzkumu.",
      cornerRadius: "Nastaví poloměr rohů pro všechny obdélníkové prvky. Rozšířený režim povolte, pokud chcete nastavit jednotlivé hodnoty poloměru rohů pro vstupní prvky nebo panely a pole s otázkami.",
      "--sjs-general-backcolor-dim": "Nastaví hlavní barvu pozadí průzkumu."
    },
    header: {
      inheritWidthFrom: "Možnost \"Stejné jako kontejner\" automaticky upraví šířku oblasti obsahu záhlaví tak, aby se vešla do prvku HTML, do kterého je průzkum umístěn.",
      textAreaWidth: "Šířka oblasti záhlaví, která obsahuje název a popis průzkumu, měřená v pixelech.",
      overlapEnabled: "Pokud je tato možnost povolena, horní část průzkumu překrývá spodní část záhlaví.",
      mobileHeight: "Při nastavení na 0 se výška vypočítá automaticky tak, aby se přizpůsobila obsahu záhlaví."
    },
    progressBarInheritWidthFrom: "Možnost \"Stejné jako kontejner\" automaticky upraví šířku oblasti indikátoru průběhu tak, aby se vešla do prvku HTML, do kterého je průzkum umístěn."
  },
  // Properties
  p: {
    title: {
      name: "nadpis",
      title: "Nechte pole prázdné, pokud je stejné jako „Název”"
    },
    multiSelect: "Povolit výběr více položek",
    showLabel: "Zobrazit popisky obrázku",
    swapOrder: "Prohození pořadí Ano a Ne",
    value: "Hodnota",
    tabAlign: "Zarovnání záložek",
    sourceType: "Typ zdroje",
    fitToContainer: "Vhodné pro kontejner",
    setValueExpression: "Nastavit výraz hodnoty",
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
    inputSize: "Velikost položky",
    itemTitleWidth: "Šířka popisku položky (v px)",
    inputTextAlignment: "Zarovnání vstupní hodnoty",
    elements: "Prvky",
    content: "Obsah",
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
    mobileHeight: "Výška na chytrých telefonech",
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
    selectToRankEmptyRankedAreaText: "Text, který se zobrazí, pokud jsou vybrány všechny možnosti",
    selectToRankEmptyUnrankedAreaText: "Zástupný text pro oblast hodnocení",
    allowCameraAccess: "Povolit přístup ke kameře",
    scaleColorMode: "Barevný režim měřítka",
    rateColorMode: "Barevný režim s ohodnocením",
    copyDisplayValue: "Kopírovat zobrazovanou hodnotu",
    effectiveColSpan: "Rozpětí sloupců",
    progressBarInheritWidthFrom: "Šířka oblasti indikátoru průběhu"
  },
  theme: {
    advancedMode: "Pokročilý režim",
    pageTitle: "Font nadpisu stránky",
    questionTitle: "Font nadpisu otázky",
    editorPanel: "Editor",
    lines: "Řádky",
    primaryDefaultColor: "Výchozí",
    primaryDarkColor: "Hover",
    primaryLightColor: "Vybraný",
    backgroundDimColor: "Barva pozadí",
    cornerRadius: "Poloměr rohu",
    backcolor: "Výchozí pozadí",
    hovercolor: "Pozadí při přejetí myší",
    borderDecoration: "Dekorace hran",
    fontColor: "Barva písma",
    backgroundColor: "Barva pozadí",
    primaryForecolor: "Výchozí barva",
    primaryForecolorLight: "Barva vypnutého pole",
    font: "Písmo",
    borderDefault: "Hlavní",
    borderLight: "Vedlejší",
    fontFamily: "Rodina písem",
    fontWeightRegular: "Pravidelný",
    fontWeightHeavy: "Těžký",
    fontWeightSemiBold: "Polotučné písmo",
    fontWeightBold: "Tučný",
    color: "Barva",
    placeholderColor: "Barva zástupného symbolu",
    size: "Velikost",
    opacity: "Neprůhlednost",
    boxShadowX: "X",
    boxShadowY: "Y",
    boxShadowAddRule: "Přidat stínový efekt",
    boxShadowBlur: "Blur",
    boxShadowSpread: "Rozšíření",
    boxShadowDrop: "Kapka",
    boxShadowInner: "Vnitřní",
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
      green: "Zelený",
      gray: "Šedý"
    }
  },
  creatortheme: {
    "--sjs-special-background": "Pozadí Surface",
    "--sjs-primary-background-500": "Primární",
    "--sjs-secondary-background-500": "Sekundární",
    surfaceScale: "Povrch",
    userInterfaceBaseUnit: "Uživatelské rozhraní",
    fontScale: "Písmo",
    names: {
      sc2020: "Tvůrce průzkumu 2020",
      "default-light": "Světlo",
      "default-dark": "Temný",
      "default-contrast": "Kontrast"
    }
  }
};

setupLocale({ localeCode: "cs", strings: czStrings });

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
// theme.header: "Header" => "Záhlaví"
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
// theme.headerInheritWidthFrom: "Content area width" => "Šířka oblasti obsahu"
// theme.headerInheritWidthFromSurvey: "Same as survey" => "Stejné jako průzkum"
// theme.headerInheritWidthFromPage: "Fit to page" => "Přizpůsobit stránce"
// theme.headerTextAreaWidth: "Text width" => "Šířka textu"
// theme.headerBackgroundColorSwitch: "Background color" => "Barva pozadí"
// theme.headerBackgroundColorNone: "None" => "Žádný"
// theme.headerBackgroundColorAccentColor: "Accent color" => "Barva zvýraznění"
// theme.headerBackgroundColorCustom: "Custom" => "Zvyk"
// theme.horizontalAlignmentLeft: "Left" => "Vlevo"
// theme.horizontalAlignmentCenter: "Center" => "Střed"
// theme.horizontalAlignmentRight: "Right" => "Vpravo"
// theme.verticalAlignmentTop: "Top" => "Vrchol"
// theme.verticalAlignmentMiddle: "Middle" => "Prostřední"
// theme.verticalAlignmentBottom: "Bottom" => "Dno"
// theme.logoPosition: "Logo Position" => "Pozice loga"
// theme.coverTitlePosition: "Title Position" => "Titulní pozice"
// theme.headerTitlePosition: "Title Position" => "Titulní pozice"
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
// theme.background: "Background" => "Pozadí"
// theme.appearance: "Appearance" => "Vzhled"
// ed.themeResetConfirmation: "Do you really want to reset the theme? All your customizations will be lost." => "Opravdu chcete resetovat motiv? Všechna vaše přizpůsobení budou ztracena."
// ed.themeResetConfirmationOk: "Yes, reset the theme" => "Ano, resetovat motiv"
// theme.headerInheritWidthFromContainer: "Fit to container" => "Vhodné pro kontejner"
// signaturepad.showPlaceholder: "Show the placeholder" => "Zobrazení zástupného symbolu"
// signaturepad.placeholder: "Placeholder text" => "Zástupný text"
// theme.surveyDescriptionFont: "Survey description font" => "Písmo popisu průzkumu"
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
// theme.headerDescriptionPosition: "Description position" => "Popis pozice"
// ed.propertyGridNoResultsFound: "No results found" => "Nebyly nalezeny žádné výsledky"
// pv.leftRight: "Left and right" => "Vlevo a vpravo"
// p.sourceType: "Source type" => "Typ zdroje"
// p.fitToContainer: "Fit to container" => "Vhodné pro kontejner"
// p.setValueExpression: "Set value expression" => "Nastavit výraz hodnoty"
// ed.choicesLoadedFromWebText: "Choices are loaded from a web service." => "Volby se načítají z webové služby."
// ed.choicesLoadedFromWebLinkText: "Go to settings" => "Přejděte do nastavení"
// ed.choicesLoadedFromWebPreviewTitle: "Preview of loaded choice options" => "Náhled načtených voleb"
// pe.eachRowUnique: "Prevent duplicate responses in rows" => "Zabránění duplicitním odpovědím v řádcích"
// theme.advancedMode: "Advanced mode" => "Pokročilý režim"
// theme.backgroundCornerRadius: "Background and corner radius" => "Pozadí a poloměr rohů"
// theme.colorsTitle: "Colors" => "Barvy"
// theme.font: "Font" => "Písmo"
// theme.lines: "Lines" => "Řádky"
// theme.titleFont: "Title font" => "Písmo nadpisu"
// theme.descriptionFont: "Description font" => "Popisné písmo"
// theme.shadow: "Shadow effects" => "Stínové efekty"
// ed.translateUsigAIFrom: "Translate from: " => "Přeložit z: "
// pe.showRefuseItem: "Allow the Refuse to Answer option" => "Povolte možnost Odmítnout odpověď"
// pe.showDontKnowItem: "Allow the Don't Know option" => "Povolit možnost Nevím"
// pe.showRefuseItem: "Allow the Refuse to Answer option" => "Povolte možnost Odmítnout odpověď"
// pe.showDontKnowItem: "Allow the Don't Know option" => "Povolit možnost Nevím"
// pv.contain: "Contain" => "Obsahovat"
// pv.cover: "Cover" => "Krýt"
// pv.fill: "Fill" => "Vyplnit"

// pe.transposeData: "Transpose rows to columns" => "Transponování řádků do sloupců"
// layout.panel: "Layout" => "Rozložení"
// layout.question: "Layout" => "Rozložení"
// layout.base: "Layout" => "Rozložení"
// panel.name: "Panel name" => "Název panelu"
// panel.title: "Panel title" => "Název panelu"
// panel.description: "Panel description" => "Popis panelu"
// panel.visibleIf: "Make the panel visible if" => "Zviditelněte panel, pokud"
// panel.requiredIf: "Make the panel required if" => "Zajistěte, aby byl panel povinný, pokud"
// panel.questionOrder: "Question order within the panel" => "Pořadí otázek v rámci panelu"
// panel.startWithNewLine: "Display the panel on a new line" => "Zobrazení obrazu na novém řádku"
// panel.state: "Panel collapse state" => "Stav sbalení panelu"
// panel.width: "Inline panel width" => "Šířka vloženého panelu"
// panel.minWidth: "Minimum panel width" => "Minimální šířka panelu"
// panel.maxWidth: "Maximum panel width" => "Maximální šířka panelu"
// paneldynamic.name: "Panel name" => "Název panelu"
// paneldynamic.title: "Panel title" => "Název panelu"
// paneldynamic.description: "Panel description" => "Popis panelu"
// paneldynamic.visibleIf: "Make the panel visible if" => "Zviditelněte panel, pokud"
// paneldynamic.requiredIf: "Make the panel required if" => "Zajistěte, aby byl panel povinný, pokud"
// paneldynamic.page: "Move the panel to page" => "Přesunutí panelu na stránku"
// paneldynamic.startWithNewLine: "Display the panel on a new line" => "Zobrazení obrazu na novém řádku"
// paneldynamic.state: "Panel collapse state" => "Stav sbalení panelu"
// paneldynamic.width: "Inline panel width" => "Šířka vloženého panelu"
// paneldynamic.minWidth: "Minimum panel width" => "Minimální šířka panelu"
// paneldynamic.maxWidth: "Maximum panel width" => "Maximální šířka panelu"
// paneldynamic.templateDescription: "Panel description pattern" => "Vzor popisu panelu"
// paneldynamic.templateTitle: "Panel title pattern" => "Vzor titulku panelu"
// paneldynamic.noEntriesText: "Empty panel text" => "Prázdný text panelu"
// paneldynamic.templateTabTitle: "Tab title pattern" => "Vzor názvu tabulátoru"
// paneldynamic.templateVisibleIf: "Make an individual panel visible if" => "Zviditelněte jednotlivý panel, pokud"
// paneldynamic.hideNumber: "Hide the panel number" => "Skrýt číslo panelu"
// paneldynamic.titleLocation: "Panel title alignment" => "Zarovnání názvu panelu"
// paneldynamic.descriptionLocation: "Panel description alignment" => "Zarovnání popisu panelu"
// paneldynamic.templateQuestionTitleLocation: "Question title alignment" => "Zarovnání názvu otázky"
// paneldynamic.templateErrorLocation: "Error message alignment" => "Zarovnání chybové zprávy"
// paneldynamic.newPanelPosition: "New panel location" => "Nové umístění panelu"
// paneldynamic.keyName: "Prevent duplicate responses in the following question" => "Zabraňte duplicitním odpovědím v následující otázce"
// question.name: "Question name" => "Název otázky"
// question.title: "Question title" => "Název otázky"
// question.description: "Question description" => "Popis otázky"
// question.visibleIf: "Make the question visible if" => "Zviditelněte otázku, pokud"
// question.requiredIf: "Make the question required if" => "Otázku povinně zjišťte, pokud"
// question.state: "Question box collapse state" => "Stav sbalení pole otázek"
// question.hideNumber: "Hide the question number" => "Skrýt číslo otázky"
// question.titleLocation: "Question title alignment" => "Zarovnání názvu otázky"
// question.descriptionLocation: "Question description alignment" => "Zarovnání popisu otázky"
// question.errorLocation: "Error message alignment" => "Zarovnání chybové zprávy"
// question.indent: "Increase the inner indent" => "Zvětšete vnitřní odsazení"
// question.width: "Inline question width" => "Vložená šířka otázky"
// question.minWidth: "Minimum question width" => "Minimální šířka otázky"
// question.maxWidth: "Maximum question width" => "Maximální šířka otázky"
// question.textUpdateMode: "Update input field value" => "Aktualizovat hodnotu vstupního pole"
// signaturepad.allowClear: "Show the Clear button within signature area" => "Zobrazení tlačítka Vymazat v oblasti podpisu"
// signaturepad.penColor: "Stroke color" => "Barva tahu"
// comment.rows: "Input field height (in lines)" => "Výška vstupního pole (v řádcích)"
// expression.name: "Expression name" => "Název výrazu"
// expression.title: "Expression title" => "Název výrazu"
// expression.description: "Expression description" => "Popis výrazu"
// expression.expression: "Expression" => "Výraz"
// trigger.expression: "Expression" => "Výraz"
// calculatedvalue.expression: "Expression" => "Výraz"
// survey.description: "Survey description" => "Popis průzkumu"
// page.name: "Page name" => "Název stránky"
// page.description: "Page description" => "Popis stránky"
// page.visibleIf: "Make the page visible if" => "Zviditelněte stránku, pokud"
// page.requiredIf: "Make the page required if" => "Zajistěte, aby stránka byla povinná, pokud"
// page.questionOrder: "Question order on the page" => "Pořadí otázek na stránce"
// matrixdropdowncolumn.name: "Column name" => "Název sloupce"
// matrixdropdowncolumn.title: "Column title" => "Název sloupce"
// matrixdropdowncolumn.isUnique: "Prevent duplicate responses" => "Zabraňte duplicitním odpovědím"
// matrixdropdowncolumn.width: "Column width" => "Šířka sloupce"
// matrixdropdowncolumn.minWidth: "Minimum column width" => "Minimální šířka sloupce"
// matrixdropdowncolumn.rows: "Input field height (in lines)" => "Výška vstupního pole (v řádcích)"
// matrixdropdowncolumn.visibleIf: "Make the column visible if" => "Zviditelněte sloupec, pokud"
// matrixdropdowncolumn.requiredIf: "Make the column required if" => "Vytvořte sloupec jako povinný, pokud"
// matrixdropdowncolumn.showInMultipleColumns: "Each option in a separate column" => "Každá možnost v samostatném sloupci"
// multipletextitem.name: "Name" => "Jméno"
// multipletextitem.title: "Title" => "Titul"
// pe.rateDescriptionLocation: "Label alignment" => "Zarovnání štítků"
// pe.cellErrorLocation: "Cell error message alignment" => "Zarovnání chybové zprávy buňky"
// pe.listIsEmpty@columns: "You don't have any columns yet" => "Zatím nemáte žádné sloupce."
// pe.listIsEmpty@rows: "You don't have any rows yet" => "Zatím nemáte žádné řádky"
// pe.listIsEmpty@validators: "You don't have any validation rules yet" => "Zatím nemáte žádná ověřovací pravidla."
// pe.listIsEmpty@calculatedValues: "You don't have any custom variables yet" => "Zatím nemáte žádné vlastní proměnné."
// pe.listIsEmpty@triggers: "You don't have any triggers yet" => "Zatím nemáte žádné spouštěče"
// pe.listIsEmpty@navigateToUrlOnCondition: "You don't have any links yet" => "Zatím nemáte žádné odkazy"
// pe.addNew@columns: "Add new column" => "Přidat nový sloupec"
// pe.addNew@rows: "Add new row" => "Přidat nový řádek"
// pe.addNew@validators: "Add new rule" => "Přidat nové pravidlo"
// pe.addNew@calculatedValues: "Add new variable" => "Přidat novou proměnnou"
// pe.addNew@triggers: "Add new trigger" => "Přidání nového triggeru"
// pe.addNew@navigateToUrlOnCondition: "Add new URL" => "Přidat novou adresu URL"
// choicesbyurl.url: "Web service's URL" => "Adresa URL webové služby"
// pe.progressBarShowPageTitles: "Display page titles in progress bar" => "Zobrazení názvů stránek na ukazateli průběhu"
// pe.progressBarShowPageNumbers: "Display page numbers in progress bar" => "Zobrazení čísel stránek na indikátoru průběhu"
// itemvalue.visibleIf: "Make the option visible if" => "Zviditelněte tuto možnost, pokud"
// itemvalue.enableIf: "Make the option selectable if" => "Zajistěte, aby byla možnost vybratelná, pokud"
// panel.layout: "Panel Layout" => "Rozvržení panelu"
// tabs.questionSettings: "Question Settings" => "Nastavení otázek"
// pe.url_placeholder: "Ex.: https://api.example.com/books" => "Př.: https://api.example.com/books"
// pe.path_placeholder: "Ex.: categories.fiction" => "Př.: categories.fiction"
// pe.questionStartIndex_placeholder: "Ex.: a)" => "Př.: a)"
// pe.width_placeholder: "Ex.: 6in" => "Př.: 6in"
// pe.minWidth_placeholder: "Ex.: 600px" => "Př.: 600px"
// pe.maxWidth_placeholder: "Ex.: 50%" => "Př.: 50%"
// pv.selected: "Selected" => "Vybraný"
// pv.unselected: "Unselected" => "Nezvolený"
// pv.center: "Center" => "Střed"
// pv.middle: "Middle" => "Prostřední"
// pv.next: "Next" => "Další"
// pv.last: "Last" => "Poslední"
// clearIfInvisible.none: "Never" => "Nikdy"
// questionsOnPageMode.standard: "Original structure" => "Původní struktura"
// questionsOnPageMode.singlePage: "Show all questions on one page" => "Zobrazit všechny otázky na jedné stránce"
// questionsOnPageMode.questionPerPage: "Show single question per page" => "Zobrazit jednu otázku na stránku"
// pv.auto: "Auto" => "Auto"
// panelsState.firstExpanded: "First expanded" => "První rozšířeno"
// rateColorMode.scale: "Scale" => "Škála"
// scaleColorMode.monochrome: "Monochrome" => "Monochromatický"
// scaleColorMode.colored: "Colored" => "Barevný"
// state.default: "Locked" => "Zamčený"
// showQuestionNumbers.default: "Auto-numbering" => "Automatické číslování"
// showQuestionNumbers.on: "Auto-numbering" => "Automatické číslování"
// showQuestionNumbers.onPage: "Reset on each page" => "Resetovat na každé stránce"
// showQuestionNumbers.onpanel: "Reset on each panel" => "Resetovat na každém panelu"
// showQuestionNumbers.onPanel: "Reset on each panel" => "Resetovat na každém panelu"
// showQuestionNumbers.onSurvey: "Continue across the survey" => "Pokračovat v průzkumu"
// showQuestionNumbers.off: "No numbering" => "Žádné číslování"
// descriptionLocation.underTitle: "Under the question title" => "Pod nadpisem otázky"
// descriptionLocation.underInput: "Under the input field" => "Pod vstupním polem"
// selectToRankAreasLayout.horizontal: "Next to choices" => "Vedle voleb"
// selectToRankAreasLayout.vertical: "Above choices" => "Výše uvedené možnosti"
// displayStyle.decimal: "Decimal" => "Desetinný"
// displayStyle.currency: "Currency" => "Měna"
// displayStyle.percent: "Percentage" => "Procento"
// displayStyle.date: "Date" => "Rande"
// totalDisplayStyle.decimal: "Decimal" => "Desetinný"
// totalDisplayStyle.currency: "Currency" => "Měna"
// totalDisplayStyle.percent: "Percentage" => "Procento"
// totalDisplayStyle.date: "Date" => "Rande"
// rowOrder.initial: "Original" => "Původní"
// questionOrder.initial: "Original" => "Původní"
// showProgressBar.aboveheader: "Above the header" => "Nad záhlavím"
// showProgressBar.belowheader: "Below the header" => "Pod záhlavím"
// pv.sum: "Sum" => "Součet"
// pv.count: "Count" => "Počítat"
// pv.min: "Min" => "Min"
// pv.max: "Max" => "Max"
// pv.avg: "Avg" => "Průměr"
// searchMode.contains: "Contains" => "Obsahuje"
// searchMode.startsWith: "Starts with" => "Začíná na"
// panel.name: "A panel ID that is not visible to respondents." => "ID panelu, které není viditelné pro respondenty."
// panel.description: "Type a panel subtitle." => "Zadejte titulky panelu."
// panel.visibleIf: "Use the magic wand icon to set a conditional rule that determines panel visibility." => "Pomocí ikony kouzelné hůlky můžete nastavit podmíněné pravidlo, které určuje viditelnost panelu."
// panel.enableIf: "Use the magic wand icon to set a conditional rule that disables the read-only mode for the panel." => "Pomocí ikony kouzelné hůlky nastavte podmíněné pravidlo, které pro panel zakáže režim jen pro čtení."
// panel.requiredIf: "Use the magic wand icon to set a conditional rule that prevents survey submission unless at least one nested question has an answer." => "Pomocí ikony kouzelné hůlky nastavte podmíněné pravidlo, které zabrání odeslání průzkumu, pokud alespoň jedna vnořená otázka nemá odpověď."
// panel.questionTitleLocation: "Applies to all questions within this panel. If you want to override this setting, define title alignment rules for individual questions. The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Top\" by default)." => "Platí pro všechny otázky v rámci tohoto panelu. Chcete-li toto nastavení přepsat, definujte pravidla zarovnání nadpisů pro jednotlivé otázky. Možnost \"Zdědit\" použije nastavení na úrovni stránky (pokud je nastaveno) nebo na úrovni průzkumu (ve výchozím nastavení \"Nahoře\")."
// panel.questionErrorLocation: "Sets the location of an error message in relation to all questions within the panel. The \"Inherit\" option applies the page-level (if set) or survey-level setting." => "Nastaví umístění chybové zprávy ve vztahu ke všem otázkám v panelu. Možnost \"Zdědit\" použije nastavení na úrovni stránky (pokud je nastaveno) nebo na úrovni průzkumu."
// panel.questionOrder: "Keeps the original order of questions or randomizes them. The \"Inherit\" option applies the page-level (if set) or survey-level setting." => "Zachová původní pořadí otázek nebo je náhodně vybere. Možnost \"Zdědit\" použije nastavení na úrovni stránky (pokud je nastaveno) nebo na úrovni průzkumu."
// panel.page: "Repositions the panel to the end of a selected page." => "Přemístí panel na konec vybrané stránky."
// panel.innerIndent: "Adds space or margin between the panel content and the left border of the panel box." => "Přidá mezeru nebo okraj mezi obsah panelu a levý okraj rámečku panelu."
// panel.startWithNewLine: "Unselect to display the panel in one line with the previous question or panel. The setting doesn't apply if the panel is the first element in your form." => "Zrušte výběr, chcete-li panel zobrazit v jednom řádku s předchozí otázkou nebo panelem. Nastavení se nepoužije, pokud je panel prvním prvkem ve formuláři."
// panel.state: "Choose from: \"Expanded\" - the panel is displayed in full and can be collapsed; \"Collapsed\" - the panel displays only the title and description and can be expanded; \"Locked\" - the panel is displayed in full and cannot be collapsed." => "Vyberte si z: \"Rozbalený\" - panel se zobrazí celý a lze jej sbalit; \"Sbaleno\" - panel zobrazuje pouze název a popis a lze jej rozbalit; \"Zamčeno\" - obraz je zobrazen celý a nelze jej sbalit."
// panel.width: "Sets the width of the panel in proportion to other survey elements in the same line. Accepts CSS values (px, %, in, pt, etc.)." => "Nastaví šířku panelu v poměru k ostatním prvkům zaměření ve stejném řádku. Přijímá hodnoty CSS (px, %, in, pt atd.)."
// paneldynamic.name: "A panel ID that is not visible to respondents." => "ID panelu, které není viditelné pro respondenty."
// paneldynamic.description: "Type a panel subtitle." => "Zadejte titulky panelu."
// paneldynamic.visibleIf: "Use the magic wand icon to set a conditional rule that determines panel visibility." => "Pomocí ikony kouzelné hůlky můžete nastavit podmíněné pravidlo, které určuje viditelnost panelu."
// paneldynamic.enableIf: "Use the magic wand icon to set a conditional rule that disables the read-only mode for the panel." => "Pomocí ikony kouzelné hůlky nastavte podmíněné pravidlo, které pro panel zakáže režim jen pro čtení."
// paneldynamic.requiredIf: "Use the magic wand icon to set a conditional rule that prevents survey submission unless at least one nested question has an answer." => "Pomocí ikony kouzelné hůlky nastavte podmíněné pravidlo, které zabrání odeslání průzkumu, pokud alespoň jedna vnořená otázka nemá odpověď."
// paneldynamic.templateQuestionTitleLocation: "Applies to all questions within this panel. If you want to override this setting, define title alignment rules for individual questions. The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Top\" by default)." => "Platí pro všechny otázky v rámci tohoto panelu. Chcete-li toto nastavení přepsat, definujte pravidla zarovnání nadpisů pro jednotlivé otázky. Možnost \"Zdědit\" použije nastavení na úrovni stránky (pokud je nastaveno) nebo na úrovni průzkumu (ve výchozím nastavení \"Nahoře\")."
// paneldynamic.templateErrorLocation: "Sets the location of an error message in relation to a question with invalid input. Choose between: \"Top\" - an error text is placed at the top of the question box; \"Bottom\" - an error text is placed at the bottom of the question box. The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Top\" by default)." => "Nastaví umístění chybové zprávy ve vztahu k otázce s neplatným vstupem. Vyberte si mezi: \"Nahoře\" - text chyby je umístěn v horní části pole s otázkou; \"Bottom\" - text chyby je umístěn ve spodní části pole s otázkou. Možnost \"Zdědit\" použije nastavení na úrovni stránky (pokud je nastaveno) nebo na úrovni průzkumu (ve výchozím nastavení \"Nahoře\")."
// paneldynamic.errorLocation: "Sets the location of an error message in relation to all questions within the panel. The \"Inherit\" option applies the page-level (if set) or survey-level setting." => "Nastaví umístění chybové zprávy ve vztahu ke všem otázkám v panelu. Možnost \"Zdědit\" použije nastavení na úrovni stránky (pokud je nastaveno) nebo na úrovni průzkumu."
// paneldynamic.page: "Repositions the panel to the end of a selected page." => "Přemístí panel na konec vybrané stránky."
// paneldynamic.innerIndent: "Adds space or margin between the panel content and the left border of the panel box." => "Přidá mezeru nebo okraj mezi obsah panelu a levý okraj rámečku panelu."
// paneldynamic.startWithNewLine: "Unselect to display the panel in one line with the previous question or panel. The setting doesn't apply if the panel is the first element in your form." => "Zrušte výběr, chcete-li panel zobrazit v jednom řádku s předchozí otázkou nebo panelem. Nastavení se nepoužije, pokud je panel prvním prvkem ve formuláři."
// paneldynamic.state: "Choose from: \"Expanded\" - the panel is displayed in full and can be collapsed; \"Collapsed\" - the panel displays only the title and description and can be expanded; \"Locked\" - the panel is displayed in full and cannot be collapsed." => "Vyberte si z: \"Rozbalený\" - panel se zobrazí celý a lze jej sbalit; \"Sbaleno\" - panel zobrazuje pouze název a popis a lze jej rozbalit; \"Zamčeno\" - obraz je zobrazen celý a nelze jej sbalit."
// paneldynamic.width: "Sets the width of the panel in proportion to other survey elements in the same line. Accepts CSS values (px, %, in, pt, etc.)." => "Nastaví šířku panelu v poměru k ostatním prvkům zaměření ve stejném řádku. Přijímá hodnoty CSS (px, %, in, pt atd.)."
// paneldynamic.templateTitle: "Type in a template for dynamic panel titles. Use {panelIndex} for the panel's general position and {visiblePanelIndex} for its order among visible panels. Insert these placeholders into the pattern to add automatic numbering." => "Zadejte šablonu pro dynamické názvy panelů. Použijte {panelIndex} pro obecnou pozici panelu a {visiblePanelIndex} pro jeho pořadí mezi viditelnými panely. Vložením těchto zástupných symbolů do vzorku přidáte automatické číslování."
// paneldynamic.templateTabTitle: "Type in a template for tab titles. Use {panelIndex} for a panel's general position and {visiblePanelIndex} for its order among visible panels. Insert these placeholders into the pattern to add automatic numbering." => "Zadejte šablonu pro názvy karet. Použijte {panelIndex} pro obecnou pozici panelu a {visiblePanelIndex} pro jeho pořadí mezi viditelnými panely. Vložením těchto zástupných symbolů do vzorku přidáte automatické číslování."
// paneldynamic.templateVisibleIf: "This setting allows you to control the visibility of individual panels within the dynamic panel. Use the `{panel}` placeholder to reference the current panel in your expression." => "Toto nastavení umožňuje řídit viditelnost jednotlivých panelů v rámci dynamického panelu. Pomocí zástupného symbolu {panel} můžete odkazovat na aktuální panel ve výrazu."
// paneldynamic.titleLocation: "This setting is automatically inherited by all questions within this panel. If you want to override this setting, define title alignment rules for individual questions. The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Top\" by default)." => "Toto nastavení je automaticky převzato všemi otázkami v tomto panelu. Chcete-li toto nastavení přepsat, definujte pravidla zarovnání nadpisů pro jednotlivé otázky. Možnost \"Zdědit\" použije nastavení na úrovni stránky (pokud je nastaveno) nebo na úrovni průzkumu (ve výchozím nastavení \"Nahoře\")."
// paneldynamic.descriptionLocation: "The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Under the panel title\" by default)." => "Možnost \"Zdědit\" použije nastavení na úrovni stránky (pokud je nastaveno) nebo na úrovni průzkumu (ve výchozím nastavení \"Pod názvem panelu\")."
// paneldynamic.newPanelPosition: "Defines the position of a newly added panel. By default, new panels are added to the end. Select \"Next\" to insert a new panel after the current one." => "Definuje polohu nově přidaného panelu. Ve výchozím nastavení se nové panely přidávají na konec. Výběrem možnosti \"Další\" vložíte nový panel za aktuální."
// paneldynamic.copyDefaultValueFromLastEntry: "Duplicates answers from the last panel and assigns them to the next added dynamic panel." => "Duplikuje odpovědi z posledního panelu a přiřadí je dalšímu přidanému dynamickému panelu."
// paneldynamic.keyName: "Reference a question name to require a user to provide a unique response for this question in each panel." => "Odkazujte na název otázky, chcete-li vyžadovat, aby uživatel na tuto otázku v každém panelu poskytl jedinečnou odpověď."
// pehelp.defaultValueExpression: "This setting allows you to assign a default answer value based on an expression. The expression can include basic calculations - `{q1_id} + {q2_id}`, Boolean expressions, such as `{age} > 60`, and functions: `iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, etc. The value determined by this expression serves as the initial default value that can be overridden by a respondent's manual input." => "Toto nastavení umožňuje přiřadit výchozí hodnotu odpovědi na základě výrazu. Výraz může obsahovat základní výpočty - '{q1_id} + {q2_id}', logické výrazy, například '{age} > 60', a funkce: 'iif()', 'today()', 'age()', 'min()', 'max()', 'avg()' atd. Hodnota určená tímto výrazem slouží jako počáteční výchozí hodnota, kterou lze přepsat ručním zadáním respondenta."
// pehelp.resetValueIf: "Use the magic wand icon to set a conditional rule that determines when a respondent's input is reset to the value based on the \"Default value expression\" or \"Set value expression\" or to the \"Default answer\" value (if either is set)." => "Pomocí ikony kouzelné hůlky můžete nastavit podmíněné pravidlo, které určuje, kdy se vstup respondenta resetuje na hodnotu na základě \"Výrazu výchozí hodnoty\" nebo \"Výrazu nastavit hodnotu\" nebo na hodnotu \"Výchozí odpověď\" (pokud je nastavena kterákoli z nich)."
// pehelp.setValueIf: "Use the magic wand icon to set a conditional rule that determines when to run the \"Set value expression\" and dynamically assign the resulting value as a response." => "Pomocí ikony kouzelné hůlky můžete nastavit podmíněné pravidlo, které určuje, kdy se má spustit výraz \"Nastavit hodnotu\", a dynamicky přiřadit výslednou hodnotu jako odpověď."
// pehelp.setValueExpression: "Specify an expression that defines the value to be set when the conditions in the \"Set value if\" rule are met. The expression can include basic calculations - `{q1_id} + {q2_id}`, Boolean expressions, such as `{age} > 60`, and functions: `iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, etc. The value determined by this expression can be overridden by a respondent's manual input." => "Zadejte výraz, který definuje hodnotu, která má být nastavena, když jsou splněny podmínky v pravidle \"Nastavit hodnotu, pokud\". Výraz může obsahovat základní výpočty - '{q1_id} + {q2_id}', logické výrazy, například '{age} > 60', a funkce: 'iif()', 'today()', 'age()', 'min()', 'max()', 'avg()' atd. Hodnota určená tímto výrazem může být přepsána ručním zadáním respondenta."
// question.name: "A question ID that is not visible to respondents." => "ID otázky, které respondenti nevidí."
// question.description: "Type a question subtitle." => "Zadejte podnadpis otázky."
// question.visibleIf: "Use the magic wand icon to set a conditional rule that determines question visibility." => "Pomocí ikony kouzelné hůlky můžete nastavit podmíněné pravidlo, které určuje viditelnost otázky."
// question.enableIf: "Use the magic wand icon to set a conditional rule that disables the read-only mode for the question." => "Pomocí ikony kouzelné hůlky nastavte podmíněné pravidlo, které pro otázku zakáže režim jen pro čtení."
// question.requiredIf: "Use the magic wand icon to set a conditional rule that prevents survey advancing or submission unless the question received an answer." => "Pomocí ikony kouzelné hůlky můžete nastavit podmíněné pravidlo, které zabrání postupu nebo odeslání průzkumu, pokud otázka neobdržela odpověď."
// question.startWithNewLine: "Unselect to display the question in one line with the previous question or panel. The setting doesn't apply if the question is the first element in your form." => "Zrušte výběr, chcete-li otázku zobrazit v jednom řádku s předchozí otázkou nebo panelem. Nastavení se nepoužije, pokud je otázka prvním prvkem ve formuláři."
// question.page: "Repositions the question to the end of a selected page." => "Přemístí otázku na konec vybrané stránky."
// question.state: "Choose from: \"Expanded\" - the question box is displayed in full and can be collapsed; \"Collapsed\" - the question box displays only the title and description and can be expanded; \"Locked\" - the question box is displayed in full and cannot be collapsed." => "Vyberte si z: \"Rozbalené\" - pole s otázkou se zobrazí celé a lze jej sbalit; \"Sbaleno\" - pole s otázkou zobrazuje pouze název a popis a lze jej rozbalit; \"Zamčeno\" - pole s otázkou je zobrazeno celé a nelze jej sbalit."
// question.titleLocation: "Overrides title alignment rules defined on a panel, page or survey level. The \"Inherit\" option applies any higher-level settings (if set) or survey-level setting (\"Top\" by default)." => "Přepíše pravidla zarovnání nadpisů definovaná na úrovni panelu, stránky nebo průzkumu. Možnost \"Zdědit\" použije všechna nastavení vyšší úrovně (pokud je nastavena) nebo nastavení na úrovni průzkumu (ve výchozím nastavení \"Nahoře\")."
// question.descriptionLocation: "The \"Inherit\" option applies the survey-level setting (\"Under the question title\" by default)." => "Možnost \"Zdědit\" použije nastavení na úrovni průzkumu (ve výchozím nastavení \"Pod názvem otázky\")."
// question.errorLocation: "Sets the location of an error message in relation to the question with invalid input. Choose between: \"Top\" - an error text is placed at the top of the question box; \"Bottom\" - an error text is placed at the bottom of the question box. The \"Inherit\" option applies the survey-level setting (\"Top\" by default)." => "Nastaví umístění chybové zprávy ve vztahu k otázce s neplatným vstupem. Vyberte si mezi: \"Nahoře\" - text chyby je umístěn v horní části pole s otázkou; \"Bottom\" - text chyby je umístěn ve spodní části pole s otázkou. Možnost \"Zdědit\" použije nastavení na úrovni průzkumu (ve výchozím nastavení \"Nahoře\")."
// question.indent: "Adds space or margin between the question content and the left border of the question box." => "Přidá mezeru nebo okraj mezi obsah otázky a levý okraj pole otázky."
// question.width: "Sets the width of the question in proportion to other survey elements in the same line. Accepts CSS values (px, %, in, pt, etc.)." => "Nastaví šířku otázky v poměru k ostatním prvkům průzkumu ve stejném řádku. Přijímá hodnoty CSS (px, %, in, pt atd.)."
// surveyvalidator.expression: "Use the magic wand icon to set a validation rule for the question." => "Pomocí ikony kouzelné hůlky nastavte ověřovací pravidlo pro otázku."
// question.textUpdateMode: "Choose from: \"On lost focus\" - the value is updated when the input field loses focus; \"While typing\" - the value is updated in real-time, as users are typing. The \"Inherit\" option applies the survey-level setting (\"On lost focus\" by default)." => "Vyberte si z těchto možností: \"Při ztrátě fokusu\" - hodnota se aktualizuje, když vstupní pole ztratí fokus; \"Při psaní\" - hodnota se aktualizuje v reálném čase, jak uživatelé píší. Možnost \"Zdědit\" použije nastavení na úrovni průzkumu (ve výchozím nastavení \"Při ztrátě fokusu\")."
// question.url: "You can use any web service as a data source for multiple-choice questions. To populate choice values, enter the URL of the service providing the data." => "Jako zdroj dat pro otázky s výběrem odpovědí můžete použít libovolnou webovou službu. Pokud chcete naplnit hodnoty voleb, zadejte adresu URL služby, která data poskytuje."
// question.searchMode: "A comparison operation used to filter the drop-down list." => "Operace porovnání, která se používá k filtrování rozevíracího seznamu."
// signaturepad.signatureWidth: "Sets the width of the displayed signature area and the resulting image." => "Nastaví šířku zobrazené oblasti podpisu a výsledného obrazu."
// signaturepad.signatureHeight: "Sets the height of the displayed signature area and the resulting image." => "Nastaví výšku zobrazené oblasti podpisu a výsledného obrazu."
// signaturepad.signatureAutoScaleEnabled: "Select if you want the signature area to fill all available space within the question box while maintaining the default 3:2 aspect ratio. When custom width and height values are set, the setting will keep the aspect ratio of these dimensions." => "Vyberte, zda chcete, aby oblast podpisu vyplnila veškerý dostupný prostor v poli pro otázky při zachování výchozího poměru stran 3:2. Pokud jsou nastaveny vlastní hodnoty šířky a výšky, nastavení zachová poměr stran těchto rozměrů."
// file.imageHeight: "Adjusts the height of the image in the survey results." => "Upraví výšku obrázku ve výsledcích měření."
// file.imageWidth: "Adjusts the width of the image in the survey results." => "Upraví šířku obrázku ve výsledcích měření."
// imagepicker.imageHeight: "Overrides the minimum and maximum height values." => "Přepíše minimální a maximální hodnoty výšky."
// imagepicker.imageWidth: "Overrides the minimum and maximum width values." => "Přepíše minimální a maximální hodnoty šířky."
// imagepicker.choices: "\"Value\" serves as an item ID used in conditional rules; \"Text\" is displayed to respondents." => "\"Hodnota\" slouží jako ID položky používané v podmíněných pravidlech; Respondentům se zobrazí \"Text\"."
// text.size: "This setting only resizes the input field and doesn't affect the width of the question box. To limit the accepted input length, go to <b>Validation → Maximum character limit</b>." => "Toto nastavení pouze mění velikost vstupního pole a nemá vliv na šířku pole s otázkou. Chcete-li omezit přijatelnou délku vstupu, přejděte na <b>Ověření → Maximální limit znaků</b>."
// comment.rows: "Sets the number of displayed lines in the input field. If the input takes up more lines, the scroll bar will appear." => "Nastaví počet zobrazených řádků ve vstupním poli. Pokud vstup zabírá více řádků, zobrazí se posuvník."
// survey.mode: "Choose between: \"Editable\" - enables respondents to fill out your survey; \"Read-only\" - disables form editing." => "Vyberte si mezi: \"Upravitelné\" - umožňuje respondentům vyplnit váš průzkum; \"Read-only\" - zakáže editaci formulářů."
// matrixdropdowncolumn.name: "A column ID that is not visible to respondents." => "ID sloupce, které není viditelné pro respondenty."
// matrixdropdowncolumn.isUnique: "When enabled for a column, a respondent is required to provide a unique response for each question within this column." => "Pokud je tato možnost povolena pro sloupec, respondent musí poskytnout jedinečnou odpověď na každou otázku v tomto sloupci."
// matrixdropdowncolumn.rows: "Sets the number of displayed lines in the input field. If the input takes up more lines, the scroll bar will appear." => "Nastaví počet zobrazených řádků ve vstupním poli. Pokud vstup zabírá více řádků, zobrazí se posuvník."
// matrixdropdowncolumn.visibleIf: "Use the magic wand icon to set a conditional rule that determines column visibility." => "Pomocí ikony kouzelné hůlky můžete nastavit podmíněné pravidlo, které určuje viditelnost sloupce."
// matrixdropdowncolumn.enableIf: "Use the magic wand icon to set a conditional rule that disables the read-only mode for the column." => "Pomocí ikony kouzelné hůlky nastavte podmíněné pravidlo, které zakáže režim jen pro čtení pro sloupec."
// matrixdropdowncolumn.requiredIf: "Use the magic wand icon to set a conditional rule that prevents survey submission unless at least one nested question has an answer." => "Pomocí ikony kouzelné hůlky nastavte podmíněné pravidlo, které zabrání odeslání průzkumu, pokud alespoň jedna vnořená otázka nemá odpověď."
// matrixdropdowncolumn.showInMultipleColumns: "When selected, creates an individual column for each choice option." => "Pokud je tato možnost vybraná, vytvoří samostatný sloupec pro každou možnost volby."
// pehelp.widthMode: "Choose from: \"Static\" - sets a fixed width; \"Responsive\" - makes the survey occupy the full width of the screen; \"Auto\" - applies either of the two depending on the question types used." => "Vyberte si z: \"Statické\" - nastaví pevnou šířku; \"Responzivní\" - způsobí, že průzkum bude zabírat celou šířku obrazovky; \"Auto\" – použije jednu z těchto dvou možností v závislosti na použitých typech otázek."
// pehelp.logo: "Paste an image link (no size limits) or click the folder icon to browse a file from your computer (up to 64KB)." => "Vložte odkaz na obrázek (bez omezení velikosti) nebo klikněte na ikonu složky a procházejte soubor z počítače (až 64 kB)."
// pehelp.logoWidth: "Sets a logo width in CSS units (px, %, in, pt, etc.)." => "Nastaví šířku loga v jednotkách CSS (px, %, in, pt atd.)."
// pehelp.logoHeight: "Sets a logo height in CSS units (px, %, in, pt, etc.)." => "Nastaví výšku loga v jednotkách CSS (px, %, in, pt atd.)."
// pehelp.logoFit: "Choose from: \"None\" - image maintains its original size; \"Contain\" - image is resized to fit while maintaining its aspect ratio; \"Cover\" - image fills the entire box while maintaining its aspect ratio; \"Fill\" - image is stretched to fill the box without maintaining its aspect ratio." => "Vyberte si z těchto možností: \"Žádné\" - obrázek si zachová svou původní velikost; \"Obsahovat\" - velikost obrázku se změní tak, aby se vešel při zachování poměru stran; \"Obálka\" - obrázek vyplní celý rámeček při zachování poměru stran; \"Výplň\" - obrázek je roztažen tak, aby vyplnil rámeček bez zachování poměru stran."
// pehelp.showNavigationButtons: "Sets the visibility and location of navigation buttons on a page." => "Nastaví viditelnost a umístění navigačních tlačítek na stránce."
// pehelp.showProgressBar: "Sets the visibility and location of a progress bar. The \"Auto\" value displays the progress bar above or below the survey header." => "Nastaví viditelnost a umístění indikátoru průběhu. Hodnota \"Auto\" zobrazuje indikátor průběhu nad nebo pod záhlavím průzkumu."
// pehelp.showPreviewBeforeComplete: "Enable the preview page with all or answered questions only." => "Povolte stránku náhledu pouze se všemi nebo zodpovězenými otázkami."
// pehelp.questionTitleLocation: "Applies to all questions within the survey. This setting can be overridden by title alignment rules at lower levels: panel, page, or question. A lower-level setting will override those on a higher level." => "Platí pro všechny otázky v rámci průzkumu. Toto nastavení lze přepsat pravidly zarovnání nadpisů na nižších úrovních: panel, stránka nebo otázka. Nastavení nižší úrovně přepíše nastavení na vyšší úrovni."
// pehelp.requiredMark: "A symbol or a sequence of symbols indicating that an answer is required." => "Symbol nebo posloupnost symbolů označující, že je vyžadována odpověď."
// pehelp.questionStartIndex: "Enter a number or letter with which you want to start numbering." => "Zadejte číslo nebo písmeno, kterým chcete začít číslovat."
// pehelp.questionErrorLocation: "Sets the location of an error message in relation to the question with invalid input. Choose between: \"Top\" - an error text is placed at the top of the question box; \"Bottom\" - an error text is placed at the bottom of the question box." => "Nastaví umístění chybové zprávy ve vztahu k otázce s neplatným vstupem. Vyberte si mezi: \"Nahoře\" - text chyby je umístěn v horní části pole s otázkou; \"Bottom\" - text chyby je umístěn ve spodní části pole s otázkou."
// pehelp.autoFocusFirstQuestion: "Select if you want the first input field on each page ready for text entry." => "Vyberte, zda chcete, aby první vstupní pole na každé stránce bylo připraveno pro zadání textu."
// pehelp.questionOrder: "Keeps the original order of questions or randomizes them. The effect of this setting is only visible in the Preview tab." => "Zachová původní pořadí otázek nebo je náhodně vybere. Účinek tohoto nastavení je viditelný pouze na kartě Náhled."
// pehelp.maxTextLength: "For text entry questions only." => "Pouze pro otázky pro zadávání textu."
// pehelp.maxCommentLength: "For question comments only." => "Pouze pro komentáře k otázkám."
// pehelp.autoGrowComment: "Select if you want question comments and Long Text questions to auto-grow in height based on the entered text length." => "Vyberte, zda chcete, aby se komentáře k otázkám a otázky s dlouhým textem automaticky zvětšovaly na výšku podle zadané délky textu."
// pehelp.allowResizeComment: "For question comments and Long Text questions only." => "Pouze pro komentáře k otázkám a otázky s dlouhým textem."
// pehelp.calculatedValues: "Custom variables serve as intermediate or auxiliary variables used in form calculations. They take respondent inputs as source values. Each custom variable has a unique name and an expression it's based on." => "Vlastní proměnné slouží jako mezilehlé nebo pomocné proměnné používané při výpočtech formulářů. Jako zdrojové hodnoty berou vstupy respondentů. Každá vlastní proměnná má jedinečný název a výraz, na kterém je založena."
// pehelp.includeIntoResult: "Select if you wish the calculated value of the expression to be saved along with survey results." => "Vyberte, zda chcete, aby byla vypočtená hodnota výrazu uložena spolu s výsledky průzkumu."
// pehelp.triggers: "A trigger is an event or condition that is based on an expression. Once the expression is evaluated to \"true\", a trigger sets off an action. Such an action can optionally have a target question it affects." => "Aktivační událost je událost nebo podmínka, která je založena na výrazu. Jakmile je výraz vyhodnocen jako \"true\", trigger spustí akci. Taková akce může mít volitelně cílovou otázku, kterou ovlivňuje."
// pehelp.clearInvisibleValues: "Choose whether or not to clear values for questions hidden by conditional logic and when to do it." => "Zvolte, zda chcete vymazat hodnoty otázek skrytých podmíněnou logikou a kdy to udělat."
// pehelp.textUpdateMode: "Choose from: \"On lost focus\" - the value is updated when the input field loses focus; \"While typing\" - the value is updated in real-time, as users are typing." => "Vyberte si z těchto možností: \"Při ztrátě fokusu\" - hodnota se aktualizuje, když vstupní pole ztratí fokus; \"Při psaní\" - hodnota se aktualizuje v reálném čase, jak uživatelé píší."
// pehelp.columns: "The left value serves as a column ID used in conditional rules, the right value is displayed to respondents." => "Levá hodnota slouží jako ID sloupce používané v podmíněných pravidlech, pravá hodnota se zobrazuje respondentům."
// pehelp.rows: "The left value serves as a row ID used in conditional rules, the right value is displayed to respondents." => "Levá hodnota slouží jako ID řádku používané v podmíněných pravidlech, pravá hodnota se zobrazuje respondentům."
// pehelp.columnMinWidth: "Accepts CSS values (px, %, in, pt, etc.)." => "Přijímá hodnoty CSS (px, %, in, pt atd.)."
// pehelp.rowTitleWidth: "Accepts CSS values (px, %, in, pt, etc.)." => "Přijímá hodnoty CSS (px, %, in, pt atd.)."
// pehelp.cellErrorLocation: "Sets the location of an error message in relation to a cell with invalid input. The \"Inherit\" option applies the setting from the \"Error message alignment\" property." => "Nastaví umístění chybové zprávy ve vztahu k buňce s neplatným vstupem. Možnost \"Zdědit\" použije nastavení z vlastnosti \"Zarovnání chybové zprávy\"."
// pehelp.keyDuplicationError: "When the \"Prevent duplicate responses\" property is enabled, a respondent attempting to submit a duplicate entry will receive the following error message." => "Pokud je povolena vlastnost \"Zabránit duplicitním odpovědím\", respondentovi, který se pokouší odeslat duplicitní záznam, se zobrazí následující chybová zpráva."
// pehelp.totalExpression: "Allows you to calculate total values based on an expression. The expression can include basic calculations (`{q1_id} + {q2_id}`), Boolean expressions (`{age} > 60`) and functions ('iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, etc.)." => "Umožňuje vypočítat celkové hodnoty na základě výrazu. Výraz může obsahovat základní výpočty ('{q1_id} + {q2_id}'), logické výrazy ('{age} > 60') a funkce ('iif()', 'today()', 'age()', 'min()', 'max()', 'avg()' atd.)."
// pehelp.confirmDelete: "Triggers a prompt asking to confirm the row deletion." => "Spustí výzvu s žádostí o potvrzení odstranění řádku."
// pehelp.copyDefaultValueFromLastEntry: "Duplicates answers from the last row and assigns them to the next added dynamic row." => "Duplikuje odpovědi z posledního řádku a přiřadí je k dalšímu přidanému dynamickému řádku."
// pehelp.description: "Type a subtitle." => "Zadejte titulky."
// pehelp.locale: "Choose a language to begin creating your survey. To add a translation, switch to a new language and translate the original text here or in the Translations tab." => "Vyberte jazyk a začněte vytvářet průzkum. Chcete-li přidat překlad, přepněte do nového jazyka a přeložte původní text zde nebo na kartě Překlady."
// pehelp.detailPanelMode: "Sets the location of a details section in relation to a row. Choose from: \"None\" - no expansion is added; \"Under the row\" - a row expansion is placed under each row of the matrix; \"Under the row, display one row expansion only\" - an expansion is displayed under a single row only, the remaining row expansions are collapsed." => "Nastaví umístění oddílu podrobností ve vztahu k řádku. Vyberte si z těchto možností: \"Žádné\" - není přidáno žádné rozšíření; \"Pod řádkem\" - pod každým řádkem matice je umístěno rozšíření řádku; \"Pod řádkem zobrazit pouze jedno rozšíření řádku\" - rozšíření je zobrazeno pouze pod jedním řádkem, zbývající rozšíření řádků jsou sbalena."
// pehelp.imageFit: "Choose from: \"None\" - image maintains its original size; \"Contain\" - image is resized to fit while maintaining its aspect ratio; \"Cover\" - image fills the entire box while maintaining its aspect ratio; \"Fill\" - image is stretched to fill the box without maintaining its aspect ratio." => "Vyberte si z těchto možností: \"Žádné\" - obrázek si zachová svou původní velikost; \"Obsahovat\" - velikost obrázku se změní tak, aby se vešel při zachování poměru stran; \"Obálka\" - obrázek vyplní celý rámeček při zachování poměru stran; \"Výplň\" - obrázek je roztažen tak, aby vyplnil rámeček bez zachování poměru stran."
// pehelp.autoGrow: "Gradually increases the height of the input field as data is being entered. Overrides the \"Input field height (in lines)\" setting." => "Postupně zvětšuje výšku vstupního pole při zadávání dat. Přepíše nastavení \"Výška vstupního pole (v řádcích)\"."
// pehelp.allowResize: "The resize handle (or grip) appears in the corner and can be dragged to alter the size of the input field." => "Úchyt pro změnu velikosti (nebo uzel) se zobrazí v rohu a lze jej přetáhnout a změnit tak velikost vstupního pole."
// pehelp.timeLimit: "A time interval in seconds after which the survey auto-advances to the Thank You page." => "Časový interval v sekundách, po jehož uplynutí se průzkum automaticky přesune na stránku s poděkováním."
// pehelp.timeLimitPerPage: "A time interval in seconds after which the survey auto-advances to the next page." => "Časový interval v sekundách, po jehož uplynutí se průzkum automaticky přesune na další stránku."
// page.timeLimit: "A time interval in seconds after which the survey auto-advances to the next page." => "Časový interval v sekundách, po jehož uplynutí se průzkum automaticky přesune na další stránku."
// page.visibleIf: "Use the magic wand icon to set a conditional rule that determines page visibility." => "Pomocí ikony kouzelné hůlky můžete nastavit podmíněné pravidlo, které určuje viditelnost stránky."
// page.enableIf: "Use the magic wand icon to set a conditional rule that disables the read-only mode for the page." => "Pomocí ikony kouzelné hůlky nastavte podmíněné pravidlo, které zakáže režim pouze pro čtení stránky."
// page.requiredIf: "Use the magic wand icon to set a conditional rule that prevents survey submission unless at least one nested question has an answer." => "Pomocí ikony kouzelné hůlky nastavte podmíněné pravidlo, které zabrání odeslání průzkumu, pokud alespoň jedna vnořená otázka nemá odpověď."
// page.questionTitleLocation: "Applies to all questions within this page. If you want to override this setting, define title alignment rules for individual questions or panels. The \"Inherit\" option applies the survey-level setting (\"Top\" by default)." => "Platí pro všechny otázky na této stránce. Chcete-li toto nastavení přepsat, definujte pravidla zarovnání nadpisů pro jednotlivé otázky nebo panely. Možnost \"Zdědit\" použije nastavení na úrovni průzkumu (ve výchozím nastavení \"Nahoře\")."
// page.questionErrorLocation: "Sets the location of an error message in relation to the question with invalid input. Choose between: \"Top\" - an error text is placed at the top of the question box; \"Bottom\" - an error text is placed at the bottom of the question box. The \"Inherit\" option applies the survey-level setting (\"Top\" by default)." => "Nastaví umístění chybové zprávy ve vztahu k otázce s neplatným vstupem. Vyberte si mezi: \"Nahoře\" - text chyby je umístěn v horní části pole s otázkou; \"Bottom\" - text chyby je umístěn ve spodní části pole s otázkou. Možnost \"Zdědit\" použije nastavení na úrovni průzkumu (ve výchozím nastavení \"Nahoře\")."
// page.questionOrder: "Keeps the original order of questions or randomizes them. The \"Inherit\" option applies the survey-level setting (\"Original\" by default). The effect of this setting is only visible in the Preview tab." => "Zachová původní pořadí otázek nebo je náhodně vybere. Možnost \"Zdědit\" použije nastavení na úrovni průzkumu (ve výchozím nastavení \"Původní\"). Účinek tohoto nastavení je viditelný pouze na kartě Náhled."
// page.showNavigationButtons: "Sets the visibility of navigation buttons on the page. The \"Inherit\" option applies the survey-level setting, which defaults to \"Visible\"." => "Nastaví viditelnost navigačních tlačítek na stránce. Možnost \"Zdědit\" použije nastavení na úrovni průzkumu, které je ve výchozím nastavení \"Viditelné\"."
// pehelp.panelsState: "Choose from: \"Locked\" - users cannot expand or collapse panels; \"Collapse all\" - all panels start in a collapsed state; \"Expand all\" - all panels start in an expanded state; \"First expanded\" - only the first panel is initially expanded." => "Vyberte si z těchto možností: \"Uzamčeno\" - uživatelé nemohou rozbalit nebo sbalit panely; \"Sbalit vše\" - všechny panely začínají ve sbaleném stavu; \"Rozbalit vše\" - všechny panely začínají v rozbaleném stavu; \"První rozbalený\" - zpočátku se rozbalí pouze první panel."
// pehelp.imageLinkName: "Enter a shared property name within the array of objects that contains the image or video file URLs you want to display in the choice list." => "Zadejte název sdílené vlastnosti v poli objektů, které obsahuje adresy URL souborů obrázků nebo videí, které chcete zobrazit v seznamu voleb."
// pehelp.choices: "The left value serves as an item ID used in conditional rules, the right value is displayed to respondents." => "Levá hodnota slouží jako ID položky používané v podmíněných pravidlech, pravá hodnota se zobrazuje respondentům."
// pehelp.title: "Type a user-friendly title to display." => "Zadejte uživatelsky přívětivý název, který chcete zobrazit."
// pehelp.waitForUpload: "Ensures that users won't complete the survey until files are uploaded." => "Zajistí, že uživatelé nedokončí průzkum, dokud nebudou soubory nahrány."
// pehelp.minWidth: "Accepts CSS values (px, %, in, pt, etc.)." => "Přijímá hodnoty CSS (px, %, in, pt atd.)."
// pehelp.maxWidth: "Accepts CSS values (px, %, in, pt, etc.)." => "Přijímá hodnoty CSS (px, %, in, pt atd.)."
// pehelp.width: "Accepts CSS values (px, %, in, pt, etc.)." => "Přijímá hodnoty CSS (px, %, in, pt atd.)."
// pehelp.useDisplayValuesInDynamicTexts: "In single- and multiple-selection question types, each choice option has an ID and display value. When selected, this setting shows a display value instead of an ID value in HTML questions and dynamic titles and descriptions of survey elements." => "V typech otázek s jedním a vícenásobným výběrem má každá možnost volby ID a zobrazovanou hodnotu. Pokud je tato možnost vybrána, zobrazí se v otázkách HTML a dynamických názvech a popisech prvků průzkumu zobrazená hodnota místo hodnoty ID."
// pehelp.clearIfInvisible: "Choose whether or not to clear question values hidden by conditional logic and when to do it. The \"Inherit\" option applies the survey-level setting (\"Upon survey completion\" by default)." => "Zvolte, zda chcete vymazat hodnoty otázek skryté podmíněnou logikou a kdy to udělat. Možnost \"Zdědit\" použije nastavení na úrovni průzkumu (ve výchozím nastavení \"Po dokončení průzkumu\")."
// pehelp.choicesFromQuestionMode: "Choose from: \"All\" - copies all choice options from the selected question; \"Selected\" - dynamically copies only selected choice options; \"Unselected\" - dynamically copies only unselected choice options. The \"None\" and \"Other\" options are copied by default if enabled in the source question." => "Vyberte si z: \"Vše\" - zkopíruje všechny možnosti výběru z vybrané otázky; \"Vybrané\" - dynamicky kopíruje pouze vybrané možnosti volby; \"Nevybráno\" - dynamicky zkopíruje pouze nevybrané možnosti výběru. Možnosti \"Žádné\" a \"Jiné\" jsou ve výchozím nastavení zkopírovány, pokud jsou povoleny ve zdrojové otázce."
// pehelp.showOtherItem: "When selected, users can include additional input in a separate comment box." => "Pokud je tato možnost vybraná, mohou uživatelé zahrnout další vstup do samostatného pole pro komentář."
// pehelp.separateSpecialChoices: "Displays each special choice option (\"None\", \"Other\", \"Select All\") on a new line, even when using a multiple-column layout." => "Zobrazí každou speciální volbu (\"Žádná\", \"Jiné\", \"Vybrat vše\") na novém řádku, a to i při použití rozložení s více sloupci."
// pehelp.path: "Specify the location within the service dataset where the target array of objects is located. Leave empty if the URL already points to the array." => "Zadejte umístění v datové sadě služby, kde se nachází cílové pole objektů. Ponechte prázdné, pokud adresa URL již odkazuje na pole."
// pehelp.titleName: "Enter a uniform property name within the array of objects that contains the values you want to display in the choice list." => "Zadejte jednotný název vlastnosti v poli objektů, které obsahuje hodnoty, které chcete zobrazit v seznamu voleb."
// pehelp.allowEmptyResponse: "Select to allow the service to return an empty response or array." => "Tuto možnost vyberte, pokud chcete, aby služba vracela prázdnou odpověď nebo pole."
// pehelp.choicesVisibleIf: "Use the magic wand icon to set a conditional rule that determines the visibility of all choice options." => "Pomocí ikony kouzelné hůlky můžete nastavit podmíněné pravidlo, které určuje viditelnost všech voleb."
// pehelp.rateValues: "The left value serves as an item ID used in conditional rules, the right value is displayed to respondents." => "Levá hodnota slouží jako ID položky používané v podmíněných pravidlech, pravá hodnota se zobrazuje respondentům."
// rating.displayMode: "\"Auto\" selects between the \"Buttons\" and \"Dropdown\" modes based on the available width. When the width is insufficient to display buttons, the question displays a dropdown." => "\"Auto\" vybírá mezi režimy \"Tlačítka\" a \"Rozbalovací nabídka\" na základě dostupné šířky. Pokud šířka není dostatečná k zobrazení tlačítek, zobrazí se v otázce rozevírací seznam."
// pehelp.valuePropertyName: "Allows you to connect questions that produce results in different formats. When such questions are linked together using a join identifier, this shared property stores selected question values." => "Umožňuje propojit otázky, které poskytují výsledky v různých formátech. Pokud jsou takové otázky propojeny pomocí identifikátoru spojení, tato sdílená vlastnost ukládá vybrané hodnoty otázek."
// pehelp.searchEnabled: "Select if you want to update the drop-down menu contents to match the search query that a user is typing in the input field." => "Vyberte, zda chcete aktualizovat obsah rozevírací nabídky tak, aby odpovídal vyhledávacímu dotazu, který uživatel zadává do vstupního pole."
// pehelp.valueTrue: "A value to save in survey results when respondents give a positive answer." => "Hodnota, která se uloží do výsledků průzkumu, když respondenti odpoví kladně."
// pehelp.valueFalse: "A value to save in survey results when respondents give a negative answer." => "Hodnota, která se má uložit do výsledků průzkumu, když respondenti odpoví záporně."
// pehelp.showPreview: "It's not recommended to disable this option as it overrides the Preview image and makes it hard for a user to understand whether the files have been uploaded." => "Tuto možnost se nedoporučuje zakazovat, protože přepíše obrázek náhledu a uživateli ztíží pochopení, jestli byly soubory nahrány."
// pehelp.needConfirmRemoveFile: "Triggers a prompt asking to confirm the file deletion." => "Spustí výzvu s žádostí o potvrzení odstranění souboru."
// pehelp.selectToRankEnabled: "Enable to rank only selected choices. Users will drag selected items from the choice list to order them within the ranking area." => "Povolením seřadíte pouze vybrané volby. Uživatelé přetáhnou vybrané položky ze seznamu voleb a seřadí je v oblasti hodnocení."
// pehelp.dataList: "Enter a list of choices that will be suggested to the respondent during input." => "Zadejte seznam možností, které budou respondentovi navrženy během vstupu."
// pehelp.inputSize: "The setting only resizes the input fields and doesn't affect the width of the question box." => "Nastavení mění pouze velikost vstupních polí a nemá vliv na šířku pole pro otázky."
// pehelp.itemTitleWidth: "Sets consistent width for all item labels in pixels" => "Nastaví konzistentní šířku pro všechny popisky položek v pixelech"
// pehelp.contentMode: "The \"Auto\" option automatically determines the suitable mode for display - Image, Video, or YouTube - based on the source URL provided." => "Možnost \"Auto\" automaticky určí vhodný režim pro zobrazení – Obrázek, Video nebo YouTube – na základě zadané zdrojové adresy URL."
// pehelp.altText: "Serves as a substitute when the image cannot be displayed on a user's device and for accessibility purposes." => "Slouží jako náhrada v případě, že obrázek nelze zobrazit na zařízení uživatele, a pro účely usnadnění."
// pehelp.rateColorMode: "Defines the color of the selected emoji when the Rating icon type is set to \"Smileys\". Choose between: \"Default\" - the selected emoji appears in default survey color; \"Scale\" - the selected emoji inherits color from the rating scale." => "Definuje barvu vybraného emotikonu, když je typ ikony Hodnocení nastaven na \"Smajlíky\". Vyberte si mezi: \"Výchozí\" - vybraný emotikon se zobrazí ve výchozí barvě průzkumu; \"Měřítko\" - vybraný emotikon zdědí barvu ze stupnice hodnocení."
// expression.name: "An expression ID that is not visible to respondents." => "ID výrazu, které není viditelné pro respondenty."
// expression.description: "Type an expression subtitle." => "Zadejte výraz subtitle."
// expression.expression: "An expression can include basic calculations (`{q1_id} + {q2_id}`), conditions (`{age} > 60`), and functions ('iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, etc.)." => "Výraz může obsahovat základní výpočty ('{q1_id} + {q2_id}'), podmínky ('{age} > 60') a funkce ('iif()', 'today()', 'age()', 'min()', 'max()', 'avg()' atd.)."
// pehelp.storeOthersAsComment: "Select to store the \"Other\" option value as a separate property in survey results." => "Tuto možnost vyberte, chcete-li uložit hodnotu možnosti \"Jiné\" jako samostatnou vlastnost ve výsledcích průzkumu."
// p.swapOrder: "Swap the order of Yes and No" => "Prohození pořadí Ano a Ne"
// p.itemTitleWidth: "Item label width (in px)" => "Šířka popisku položky (v px)"
// p.selectToRankEmptyRankedAreaText: "Text to show if all options are selected" => "Text, který se zobrazí, pokud jsou vybrány všechny možnosti"
// p.selectToRankEmptyUnrankedAreaText: "Placeholder text for the ranking area" => "Zástupný text pro oblast hodnocení"
// pe.autoAdvanceAllowComplete: "Complete the survey automatically" => "Automatické vyplnění dotazníku"
// pehelp.autoAdvanceAllowComplete: "Select if you want the survey to complete automatically after a respondent answers all questions." => "Vyberte, zda chcete, aby se průzkum vyplnil automaticky poté, co respondent odpoví na všechny otázky."
// masksettings.saveMaskedValue: "Save masked value in survey results" => "Uložit maskovanou hodnotu ve výsledcích průzkumu"
// patternmask.pattern: "Value pattern" => "Vzor hodnoty"
// datetimemask.min: "Minimum value" => "Minimální hodnota"
// datetimemask.max: "Maximum value" => "Maximální hodnota"
// numericmask.allowNegativeValues: "Allow negative values" => "Povolit záporné hodnoty"
// numericmask.thousandsSeparator: "Thousands separator" => "Oddělovač tisíců"
// numericmask.decimalSeparator: "Decimal separator" => "Oddělovač desetinných míst"
// numericmask.precision: "Value precision" => "Přesnost hodnoty"
// numericmask.min: "Minimum value" => "Minimální hodnota"
// numericmask.max: "Maximum value" => "Maximální hodnota"
// currencymask.prefix: "Currency prefix" => "Předpona měny"
// currencymask.suffix: "Currency suffix" => "Přípona měny"
// pe.maskType: "Input mask type" => "Typ vstupní masky"
// maskTypes.patternmask: "Pattern" => "Vzor"
// maskTypes.numericmask: "Numeric" => "Číselný"
// maskTypes.datetimemask: "Date and Time" => "Datum a čas"
// maskTypes.currencymask: "Currency" => "Měna"
// tabs.mask: "Input Mask Settings" => "Nastavení vstupní masky"
// pe.pattern_placeholder: "Ex.: +1(999)-999-99-99" => "Př.: +1(999)-999-99-99"
// pe.datetimepattern_placeholder: "Ex.: mm/dd/yyyy" => "Př.: dd/mm/rrrr"
// pe.currencyprefix_placeholder: "Ex.: $" => "Př.: $"
// pe.currencysuffix_placeholder: "Ex.: USD" => "Př.: USD"
// pv.textWrapEnabled: "Wrap choices" => "Možnosti obtékání"
// question.textWrapEnabled: "Long texts in choice options will automatically generate line breaks to fit within the drop-down menu. Unselect if you want the texts to clip." => "Dlouhé texty v možnostech volby automaticky vygenerují zalomení řádků, aby se vešly do rozbalovací nabídky. Odznačte, pokud chcete, aby se texty ořízly."
// masksettings.saveMaskedValue: "Select if you want to store the question value with an applied mask in survey results." => "Vyberte, zda chcete uložit hodnotu otázky s použitou maskou do výsledků průzkumu."
// patternmask.pattern: "The pattern can contain string literals and the following placeholders: `9` - for a digit; `a` - for an upper- or lower-case letter; `#` - for a digit or an upper- or lower-case letter. Use backslash `\\` to escape a character." => "Vzor může obsahovat řetězcové literály a následující zástupné symboly: \"9\" - pro číslici; \"a\" - pro velké nebo malé písmeno; '#' - pro číslici nebo velké či malé písmeno. Pomocí zpětného lomítka \\ můžete znak uvozovat."
// datetimemask.pattern: "The pattern can contain separator characters and the following placeholders: `m` - for month number; `mm` - for month number, with leading zero for single-digit values; `d` - for day of the month; `dd` - for day of the month, with leading zero for single-digit values; `yy` - for the last two digits of the year; `yyyy` - for a four-digit year." => "Vzor může obsahovat oddělovací znaky a následující zástupné symboly: 'm' - pro číslo měsíce; 'mm' - pro číslo měsíce, s úvodní nulou pro jednociferné hodnoty; \"d\" - pro den v měsíci; 'dd' - pro den v měsíci, s úvodní nulou pro jednociferné hodnoty; \"yy\" – pro poslední dvě číslice roku; \"rrrr\" – pro čtyřmístný rok."
// numericmask.decimalSeparator: "A symbol used to separate the fractional part from the integer part of a displayed number." => "Symbol používaný k oddělení zlomkové části od celočíselné části zobrazeného čísla."
// numericmask.thousandsSeparator: "A symbol used to separate the digits of a large number into groups of three." => "Symbol používaný k oddělení číslic velkého čísla do skupin po třech."
// numericmask.precision: "Limits how many digits to retain after the decimal point for a displayed number." => "Omezuje, kolik číslic se má zachovat za desetinnou čárkou zobrazeného čísla."
// currencymask.prefix: "One or several symbols to be displayed before the value." => "Jeden nebo více symbolů, které mají být zobrazeny před hodnotou."
// currencymask.suffix: "One or several symbols to be displayed after the value." => "Jeden nebo více symbolů, které se zobrazí za hodnotou."
// ed.translationSource: "Source: " => "Zdroj: "
// ed.translationTarget: "Target: " => "Cíl: "
// ed.pagePlaceHolder: "The page is empty. Drag an element from the toolbox or click the button below." => "Stránka je prázdná. Přetáhněte prvek z palety nástrojů nebo klikněte na tlačítko níže."
// maskTypes.none: "None" => "Žádný"
// itemvalue@rows.visibleIf: "Make the row visible if" => "Zviditelněte řádek, pokud"
// itemvalue@rows.enableIf: "Make the row editable if" => "Zajistěte, aby byl řádek upravitelný, pokud"
// signaturepad.placeholderReadOnly: "Placeholder text in read-only or preview mode" => "Zástupný text v režimu jen pro čtení nebo v režimu náhledu"
// pe.textWrapEnabled: "Wrap choices" => "Možnosti obtékání"
// image.contentMode: "The \"Auto\" option automatically determines the suitable mode for display - Image, Video, or YouTube - based on the source URL provided." => "Možnost \"Auto\" automaticky určí vhodný režim pro zobrazení – Obrázek, Video nebo YouTube – na základě zadané zdrojové adresy URL."
// imagepicker.contentMode: "Choose between \"Image\" and \"Video\" to set the content mode of the media selector. If \"Image\" is selected, ensure that all options provided are image files in the following formats: JPEG, GIF, PNG, APNG, SVG, BMP, ICO. Similarly, if \"Video\" is selected, ensure that all options are direct links to video files in the following formats: MP4, MOV, WMV, FLV, AVI, MKV. Please note that YouTube links are not supported for video options." => "Vyberte si mezi \"Obrazem\" a \"Video\" a nastavte režim obsahu voliče médií. Pokud je vybrána možnost \"Obrázek\", ujistěte se, že všechny nabízené možnosti jsou obrazové soubory v následujících formátech: JPEG, GIF, PNG, APNG, SVG, BMP, ICO. Podobně, pokud je vybráno \"Video\", ujistěte se, že všechny možnosti jsou přímými odkazy na video soubory v následujících formátech: MP4, MOV, WMV, FLV, AVI, MKV. Upozorňujeme, že odkazy na YouTube nejsou podporovány u možností videa."
// ed.selectFile: "Select a file" => "Vyberte soubor"
// ed.removeFile: "Remove the file" => "Odebrání souboru"
// pe.searchMode: "Search Mode" => "Režim vyhledávání"
// ed.surveyPlaceHolderMobile: "Click the \"Add Question\" button below to start creating your form." => "Kliknutím na tlačítko \"Přidat otázku\" níže zahájíte vytváření formuláře."
// ed.pagePlaceHolderMobile: "Click the \"Add Question\" button below to add a new element to the page." => "Kliknutím na tlačítko \"Přidat otázku\" níže přidáte na stránku nový prvek."
// ed.panelPlaceHolderMobile: "Click the \"Add Question\" button below to add a new element to the panel." => "Kliknutím na tlačítko \"Přidat otázku\" níže přidáte do panelu nový prvek."
// ed.imagePlaceHolderMobile: "Click the button below and choose an image to upload" => "Klikněte na tlačítko níže a vyberte obrázek, který chcete nahrát"
// coloralpha.opacity: "Opacity" => "Neprůhlednost"
// font.family: "Font family" => "Rodina písem"
// font.color: "Color" => "Barva"
// font.placeholderColor: "Placeholder color" => "Barva zástupného symbolu"
// font.size: "Size" => "Velikost"
// theme.themeName: "Theme" => "Téma"
// theme.isPanelless: "Question appearance" => "Vzhled otázky"
// theme.editorPanel: "Background and corner radius" => "Pozadí a poloměr rohů"
// theme.questionPanel: "Background and corner radius" => "Pozadí a poloměr rohů"
// theme.primaryColor: "Accent color" => "Barva zvýraznění"
// theme.panelBackgroundTransparency: "Panel background opacity" => "Neprůhlednost pozadí panelu"
// theme.questionBackgroundTransparency: "Question background opacity" => "Neprůhlednost pozadí otázky"
// theme.fontSize: "Font size" => "Velikost písma"
// theme.scale: "Scale" => "Škála"
// theme.cornerRadius: "Corner radius" => "Poloměr rohu"
// theme.pageTitle: "Title font" => "Písmo nadpisu"
// theme.pageDescription: "Description font" => "Popisné písmo"
// theme.questionTitle: "Title font" => "Písmo nadpisu"
// theme.questionDescription: "Description font" => "Popisné písmo"
// theme.editorFont: "Font" => "Písmo"
// theme.backgroundOpacity: "Opacity" => "Neprůhlednost"
// theme.--sjs-font-family: "Font family" => "Rodina písem"
// theme.--sjs-general-backcolor-dim: "Background color" => "Barva pozadí"
// theme.--sjs-primary-backcolor: "Accent background" => "Zvýraznění pozadí"
// theme.--sjs-primary-forecolor: "Accent foreground" => "Zvýraznění popředí"
// theme.--sjs-shadow-small: "Shadow effects" => "Stínové efekty"
// theme.--sjs-shadow-inner: "Shadow effects" => "Stínové efekty"
// theme.--sjs-border-default: "Colors" => "Barvy"
// header@header.headerView: "View" => "Pohled"
// header@header.logoPosition: "Logo position" => "Umístění loga"
// header@header.surveyTitle: "Survey title font" => "Písmo názvu průzkumu"
// header@header.surveyDescription: "Survey description font" => "Písmo popisu průzkumu"
// header@header.headerTitle: "Survey title font" => "Písmo názvu průzkumu"
// header@header.headerDescription: "Survey description font" => "Písmo popisu průzkumu"
// header@header.inheritWidthFrom: "Content area width" => "Šířka oblasti obsahu"
// header@header.textAreaWidth: "Text width" => "Šířka textu"
// header@header.backgroundColorSwitch: "Background color" => "Barva pozadí"
// header@header.backgroundImage: "Background image" => "Obrázek na pozadí"
// header@header.backgroundImageOpacity: "Opacity" => "Neprůhlednost"
// header@header.overlapEnabled: "Overlap" => "Překrytí"
// header@header.logoPositionX: "Logo position" => "Umístění loga"
// header@header.titlePositionX: "Title position" => "Pozice v titulu"
// header@header.descriptionPositionX: "Description position" => "Popis pozice"
// weight.400: "Regular" => "Pravidelný"
// weight.600: "Heavy" => "Těžký"
// weight.700: "Semi-bold" => "Polotučné písmo"
// weight.800: "Bold" => "Tučný"
// backgroundImageFit.auto: "Auto" => "Auto"
// backgroundImageFit.cover: "Cover" => "Krýt"
// backgroundImageFit.contain: "Contain" => "Obsahovat"
// backgroundImageFit.fill: "Stretch" => "Natáhnout"
// backgroundImageFit.tile: "Tile" => "Dlaždice"
// backgroundImageAttachment.fixed: "Fixed" => "Stabilní"
// backgroundImageAttachment.scroll: "Scroll" => "Svitek"
// headerView.basic: "Basic" => "Základní"
// headerView.advanced: "Advanced" => "Pokročilý"
// inheritWidthFrom.survey: "Same as survey" => "Stejné jako průzkum"
// inheritWidthFrom.container: "Fit to container" => "Vhodné pro kontejner"
// backgroundColorSwitch.none: "None" => "Žádný"
// backgroundColorSwitch.accentColor: "Accent color" => "Barva zvýraznění"
// backgroundColorSwitch.custom: "Custom" => "Zvyk"
// colorPalette.light: "Light" => "Světlo"
// colorPalette.dark: "Dark" => "Temný"
// isPanelless.false: "Default" => "Výchozí"
// isPanelless.true: "Without Panels" => "Bez panelů"
// theme.cornerRadius: "Corner radius" => "Poloměr rohu"
// theme.fontFamily: "Font family" => "Rodina písem"
// theme.fontWeightRegular: "Regular" => "Pravidelný"
// theme.fontWeightHeavy: "Heavy" => "Těžký"
// theme.fontWeightSemiBold: "Semi-bold" => "Polotučné písmo"
// theme.fontWeightBold: "Bold" => "Tučný"
// theme.color: "Color" => "Barva"
// theme.placeholderColor: "Placeholder color" => "Barva zástupného symbolu"
// theme.size: "Size" => "Velikost"
// theme.opacity: "Opacity" => "Neprůhlednost"
// ed.toolboxFilteredTextPlaceholder: "Type to search..." => "Chcete-li hledat, zadejte jej..."
// ed.toolboxNoResultsFound: "No results found" => "Nebyly nalezeny žádné výsledky"
// paneldynamic.tabTitlePlaceholder: "Tab title placeholder" => "Zástupný symbol názvu tabulátoru"
// theme.--sjs-special-red: "Error messages" => "Chybové zprávy"
// paneldynamic.tabTitlePlaceholder: "A fallback text for tab titles that applies when the tab title pattern doesn't produce a meaningful value." => "Záložní text pro názvy karet, který se použije, když vzor názvu karty nevytváří smysluplnou hodnotu."
// theme.fontColor: "Font color" => "Barva písma"
// theme.backgroundColor: "Background color" => "Barva pozadí"
// pe.questionTitleWidth: "Question title width" => "Šířka názvu otázky"
// pe.fileInputPlaceholder: "Select a file or paste a file link..." => "Vyberte soubor nebo vložte odkaz na soubor..."
// panelbase.questionTitleWidth: "Ex.: 200px" => "Př.: 200px"
// panel.questionTitleWidth: "Sets consistent width for question titles when they are aligned to the left of their question boxes. Accepts CSS values (px, %, in, pt, etc.)." => "Nastaví konzistentní šířku názvů otázek, pokud jsou zarovnány nalevo od polí s otázkami. Přijímá hodnoty CSS (px, %, in, pt atd.)."
// page.questionTitleWidth: "Sets consistent width for question titles when they are aligned to the left of their question boxes. Accepts CSS values (px, %, in, pt, etc.)." => "Nastaví konzistentní šířku názvů otázek, pokud jsou zarovnány nalevo od polí s otázkami. Přijímá hodnoty CSS (px, %, in, pt atd.)."
// pe.commentAreaRows: "Comment area height (in lines)" => "Výška oblasti komentářů (v řádcích)"
// pehelp.commentAreaRows: "Sets the number of displayed lines in text areas for question comments. In the input takes up more lines, the scroll bar appears." => "Nastaví počet zobrazených řádků v textových oblastech pro komentáře k otázkám. V případě, že vstup zabírá více řádků, zobrazí se posuvník."
// pe.enabled: "Enabled" => "Zpřístupněný"
// pe.disabled: "Disabled" => "Invalidní"
// pe.inherit: "Inherit" => "Zdědit"
// pe.validateVisitedEmptyFields: "Validate empty fields on lost focus" => "Ověření prázdných polí při ztrátě fokusu"
// panellayoutcolumn.effectiveWidth: "Ex.: 30%" => "Př.: 30%"
// panellayoutcolumn.questionTitleWidth: "Ex.: 200px" => "Př.: 200px"
// pehelp.validateVisitedEmptyFields: "Enable this option to trigger validation when a user focuses on an empty input field and then leaves it without making any changes." => "Tuto možnost povolte, chcete-li spustit ověření, když se uživatel zaměří na prázdné vstupní pole a poté ho opustí, aniž by provedl jakékoli změny."
// pehelp.colCount: "Arranges choice options in a multi-column layout. When set to 0, the options are displayed in a single line." => "Uspořádá možnosti voleb v rozložení s více sloupci. Při nastavení na 0 se možnosti zobrazí na jednom řádku."
// theme.isPanelless: "This setting applies only to questions outside of a panel." => "Toto nastavení platí pouze pro otázky mimo panel."
// theme.primaryColor: "Sets a supplementary color that highlights key survey elements." => "Nastaví doplňkovou barvu, která zvýrazní klíčové prvky průzkumu."
// theme.panelBackgroundTransparency: "Adjusts the transparency of panels and question boxes relative to the survey background." => "Upraví průhlednost panelů a polí s otázkami vzhledem k pozadí průzkumu."
// theme.questionBackgroundTransparency: "Adjusts the transparency of input elements relative to the survey background." => "Upraví průhlednost vstupních prvků vzhledem k pozadí průzkumu."
// theme.cornerRadius: "Sets the corner radius for all rectangular elements. Enable the Advanced Mode if you want to set individual corner radius values for input elements or panels and question boxes." => "Nastaví poloměr rohů pro všechny obdélníkové prvky. Rozšířený režim povolte, pokud chcete nastavit jednotlivé hodnoty poloměru rohů pro vstupní prvky nebo panely a pole s otázkami."
// theme.--sjs-general-backcolor-dim: "Sets the main background color of the survey." => "Nastaví hlavní barvu pozadí průzkumu."
// header.inheritWidthFrom: "The \"Same as container\" option auto-adjusts the header content area width to fit into the HTML element the survey is placed in." => "Možnost \"Stejné jako kontejner\" automaticky upraví šířku oblasti obsahu záhlaví tak, aby se vešla do prvku HTML, do kterého je průzkum umístěn."
// header.textAreaWidth: "The width of the header area that contains the survey title and description, measured in pixels." => "Šířka oblasti záhlaví, která obsahuje název a popis průzkumu, měřená v pixelech."
// panellayoutcolumn.effectiveWidth: "Accepts values %." => "Přijímá hodnoty %."
// panellayoutcolumn.questionTitleWidth: "Accepts values px." => "Přijímá hodnoty px."
// p.effectiveColSpan: "Column span" => "Rozpětí sloupců"
// progressBarInheritWidthFrom.survey: "Same as survey" => "Stejné jako v průzkumu"
// progressBarInheritWidthFrom.container: "Same as container" => "Stejné jako u kontejneru"
// file.allowImagesPreview: "Displays thumbnail previews for uploaded files when possible. Unselect if you want to show file icons instead." => "Pokud je to možné, zobrazuje náhledy miniatur pro nahrané soubory. Zrušte výběr, pokud chcete místo toho zobrazit ikony souborů."
// pehelp.progressBarInheritWidthFrom: "The \"Same as container\" option auto-adjusts the progress bar area width to fit into the HTML element the survey is placed in." => "Možnost \"Stejné jako kontejner\" automaticky upraví šířku oblasti indikátoru průběhu tak, aby se vešla do prvku HTML, do kterého je průzkum umístěn."
// p.progressBarInheritWidthFrom: "Progress bar area width" => "Šířka oblasti indikátoru průběhu"
// maskType.none: "None" => "Žádný"
// maskType.pattern: "Pattern" => "Vzor"
// maskType.numeric: "Numeric" => "Číselný"
// maskType.datetime: "Date and Time" => "Datum a čas"
// maskType.currency: "Currency" => "Měna"

// inputTextAlignment.auto: "Auto" => "Auto"
// inputTextAlignment.left: "Left" => "Vlevo"
// inputTextAlignment.right: "Right" => "Vpravo"
// pehelp.inputTextAlignment: "Select how to align input value within the field. The default setting \"Auto\" aligns the input value to the right if currency or numeric masking is applied and to the left if not." => "Vyberte, jak chcete zarovnat vstupní hodnotu v poli. Výchozí nastavení \"Auto\" zarovná vstupní hodnotu doprava, pokud je použito maskování měny nebo čísel, a doleva, pokud ne."
// p.inputTextAlignment: "Input value alignment" => "Zarovnání vstupní hodnoty"
// paneldynamic.showRangeInProgress: "Show the progress bar" => "Zobrazení ukazatele průběhu"
// paneldynamic.showProgressBar: "Show the progress bar" => "Zobrazení ukazatele průběhu"
// paneldynamic.progressBarLocation: "Progress bar alignment" => "Zarovnání indikátoru průběhu"
// pv.carousel: "Carousel" => "Kolotoč"
// progressBarLocation.top: "Top" => "Vrchol"
// progressBarLocation.bottom: "Bottom" => "Dno"
// progressBarLocation.topBottom: "Top and bottom" => "Nahoře a dole"
// matrixdropdowncolumn.colCount: "Arranges choice options in a multi-column layout. When set to 0, the options are displayed in a single line. When set to -1, the actual value is inherited from the \"Nested column count\" property of the parent matrix." => "Uspořádá volby voleb ve vícesloupcovém rozvržení. Když je nastavená hodnota 0, volby se zobrazí na jednom řádku. Pokud je nastavena hodnota -1, skutečná hodnota je zděděna z vlastnosti \"Počet vnořených sloupců\" nadřazené matice."
// ed.translationYouTubeNotSupported: "YouTube links are not supported." => "Odkazy na YouTube nejsou podporovány."
// ed.propertyGridPlaceholderTitle: "Start configuring your form" => "Začněte konfigurovat formulář"
// ed.propertyGridPlaceholderDescription: "Click any category icon to explore survey settings. Additional settings will become available once you add a survey element to the design surface." => "Kliknutím na libovolnou ikonu kategorie můžete prozkoumat nastavení průzkumu. Další nastavení budou k dispozici, jakmile přidáte element survey na návrhovou plochu."
// pe.caseInsensitive: "Case insensitive" => "Nerozlišuje malá a velká písmena"
// pehelp.caseInsensitive: "Select if uppercase and lowercase letters in the regular expression must be treated as equivalent." => "Vyberte, zda mají být velká a malá písmena v regulárním výrazu považována za ekvivalentní."

// ed.surveyPlaceholderTitle: "Your form is empty" => "Váš formulář je prázdný"
// ed.surveyPlaceholderTitleMobile: "Your form is empty" => "Váš formulář je prázdný"
// ed.surveyPlaceholderDescription: "Drag an element from the toolbox or click the button below." => "Přetáhněte prvek z panelu nástrojů nebo klikněte na tlačítko níže."
// ed.surveyPlaceholderDescriptionMobile: "Drag an element from the toolbox or click the button below." => "Přetáhněte prvek z panelu nástrojů nebo klikněte na tlačítko níže."
// ed.previewPlaceholderTitle: "No preview" => "Žádný náhled"
// ed.previewPlaceholderTitleMobile: "No preview" => "Žádný náhled"
// ed.previewPlaceholderDescription: "The survey doesn't contain any visible elements." => "Průzkum neobsahuje žádné viditelné prvky."
// ed.previewPlaceholderDescriptionMobile: "The survey doesn't contain any visible elements." => "Průzkum neobsahuje žádné viditelné prvky."
// ed.translationsPlaceholderTitle: "No strings to translate" => "Žádné řetězce k překladu"
// ed.translationsPlaceholderTitleMobile: "No strings to translate" => "Žádné řetězce k překladu"
// ed.translationsPlaceholderDescription: "Add elements to your form or change the strings filter in the toolbar." => "Přidejte do formuláře prvky nebo změňte filtr řetězců na panelu nástrojů."
// ed.translationsPlaceholderDescriptionMobile: "Add elements to your form or change the strings filter in the toolbar." => "Přidejte do formuláře prvky nebo změňte filtr řetězců na panelu nástrojů."
// lg.logicPlaceholderTitle: "No logical rules" => "Žádná logická pravidla"
// lg.logicPlaceholderTitleMobile: "No logical rules" => "Žádná logická pravidla"
// lg.logicPlaceholderDescription: "Create a rule to customize the flow of the survey." => "Vytvořte pravidlo pro přizpůsobení toku průzkumu."
// lg.logicPlaceholderDescriptionMobile: "Create a rule to customize the flow of the survey." => "Vytvořte pravidlo pro přizpůsobení toku průzkumu."
// pe.showTimer: "Use a timer" => "Použití časovače"
// theme.advancedMode: "Advanced mode" => "Pokročilý režim"
// pehelp.timerLocation: "Sets the location of a timer on a page." => "Nastaví umístění časovače na stránce."
// header.mobileHeight: "When set to 0, the height is calculated automatically to accommodate the header's content." => "Při nastavení na 0 se výška vypočítá automaticky tak, aby se přizpůsobila obsahu záhlaví."
// p.mobileHeight: "Height on smartphones" => "Výška na chytrých telefonech"
// header.overlapEnabled: "When enabled, the top of the survey overlays the bottom of the header." => "Pokud je tato možnost povolena, horní část průzkumu překrývá spodní část záhlaví."
// ed.creatorSettingTitle: "Creator Settings" => "Nastavení tvůrce"
// tabs.accentColors: "Accent colors" => "Zvýraznění barev"
// tabs.scaling: "Scaling" => "Změna velikosti"
// panel.showQuestionNumbers: "Assigns numbers to questions nested within this panel." => "Přiřadí čísla otázkám vnořeným v tomto panelu."
// creatortheme.--sjs-special-background: "Surface background" => "Pozadí Surface"
// creatortheme.--sjs-primary-background-500: "Primary" => "Primární"
// creatortheme.--sjs-secondary-background-500: "Secondary" => "Sekundární"
// creatortheme.surfaceScale: "Surface" => "Povrch"
// creatortheme.userInterfaceBaseUnit: "User interface" => "Uživatelské rozhraní"
// creatortheme.fontScale: "Font" => "Písmo"
// names.sc2020: "Survey Creator 2020" => "Tvůrce průzkumu 2020"
// names.default-light: "Light" => "Světlo"
// names.default-dark: "Dark" => "Temný"
// names.default-contrast: "Contrast" => "Kontrast"
// panel.showNumber: "Number this panel" => "Očíslujte tento panel"
// pehelp.autoAdvanceEnabled: "Select if you want the survey to auto-advance to the next page once a respondent has answered all questions on the current page. This feature won't apply if the last question on the page is open-ended or allows multiple answers." => "Vyberte, zda chcete, aby průzkum automaticky přešel na další stránku, jakmile respondent odpoví na všechny otázky na aktuální stránce. Tato funkce se nepoužije, pokud je poslední otázka na stránce otevřená nebo umožňuje více odpovědí."
// autocomplete.name: "Full Name" => "Celé jméno"
// autocomplete.honorific-prefix: "Prefix" => "Předpona"
// autocomplete.given-name: "First Name" => "Křestní jméno"
// autocomplete.additional-name: "Middle Name" => "Druhé jméno"
// autocomplete.family-name: "Last Name" => "Příjmení"
// autocomplete.honorific-suffix: "Suffix" => "Přípona"
// autocomplete.nickname: "Nickname" => "Přezdívka"
// autocomplete.organization-title: "Job Title" => "Pracovní pozice"
// autocomplete.username: "User Name" => "Uživatelské jméno"
// autocomplete.new-password: "New Password" => "Nové heslo"
// autocomplete.current-password: "Current Password" => "Aktuální heslo"
// autocomplete.organization: "Organization Name" => "Název organizace"
// autocomplete.street-address: "Full Street Address" => "Úplná adresa"
// autocomplete.address-line1: "Address Line 1" => "Řádek adresy 1"
// autocomplete.address-line2: "Address Line 2" => "Řádek adresy 2"
// autocomplete.address-line3: "Address Line 3" => "Řádek adresy 3"
// autocomplete.address-level4: "Level 4 Address" => "Adresa úrovně 4"
// autocomplete.address-level3: "Level 3 Address" => "Adresa úrovně 3"
// autocomplete.address-level2: "Level 2 Address" => "Adresa úrovně 2"
// autocomplete.address-level1: "Level 1 Address" => "Adresa úrovně 1"
// autocomplete.country: "Country Code" => "Kód země"
// autocomplete.country-name: "Country Name" => "Název země"
// autocomplete.postal-code: "Postal Code" => "Psč"
// autocomplete.cc-name: "Cardholder Name" => "Jméno držitele karty"
// autocomplete.cc-given-name: "Cardholder First Name" => "Křestní jméno držitele karty"
// autocomplete.cc-additional-name: "Cardholder Middle Name" => "Prostřední jméno držitele karty"
// autocomplete.cc-family-name: "Cardholder Last Name" => "Příjmení držitele karty"
// autocomplete.cc-number: "Credit Card Number" => "Číslo kreditní karty"
// autocomplete.cc-exp: "Expiration Date" => "Datum vypršení"
// autocomplete.cc-exp-month: "Expiration Month" => "Měsíc vypršení platnosti"
// autocomplete.cc-exp-year: "Expiration Year" => "Rok vypršení platnosti"
// autocomplete.cc-csc: "Card Security Code" => "Bezpečnostní kód karty"
// autocomplete.cc-type: "Credit Card Type" => "Typ kreditní karty"
// autocomplete.transaction-currency: "Transaction Currency" => "Měna transakce"
// autocomplete.transaction-amount: "Transaction Amount" => "Částka transakce"
// autocomplete.language: "Preferred Language" => "Preferovaný jazyk"
// autocomplete.bday: "Birthday" => "Narozeniny"
// autocomplete.bday-day: "Birthday Day" => "Den narozenin"
// autocomplete.bday-month: "Birthday Month" => "Měsíc narozenin"
// autocomplete.bday-year: "Birthday Year" => "Narozeniny Rok"
// autocomplete.sex: "Gender" => "Pohlaví"
// autocomplete.url: "Website URL" => "Adresa URL webu"
// autocomplete.photo: "Profile Photo" => "Profilová fotografie"
// autocomplete.tel: "Telephone Number" => "Telefonní číslo"
// autocomplete.tel-country-code: "Country Code for Phone" => "Předvolba země pro telefon"
// autocomplete.tel-national: "National Telephone Number" => "Národní telefonní číslo"
// autocomplete.tel-area-code: "Area Code" => "Směrové číslo"
// autocomplete.tel-local: "Local Phone Number" => "Místní telefonní číslo"
// autocomplete.tel-local-prefix: "Local Phone Prefix" => "Předvolba místního telefonu"
// autocomplete.tel-local-suffix: "Local Phone Suffix" => "Přípona místního telefonu"
// autocomplete.tel-extension: "Phone Extension" => "Telefonní linka"
// autocomplete.email: "Email Address" => "E-mailová adresa"
// autocomplete.impp: "Instant Messaging Protocol" => "Protokol pro rychlé zasílání zpráv"
// ed.lockQuestionsTooltip: "Lock expand/collapse state for questions" => "Uzamknout stav rozbalení/sbalení pro otázky"
// pe.listIsEmpty@pages: "You don't have any pages yet" => "Zatím nemáte žádné stránky"
// pe.addNew@pages: "Add new page" => "Přidat novou stránku"
// ed.zoomInTooltip: "Zoom In" => "Přiblížit"
// ed.zoomOutTooltip: "Zoom Out" => "Oddálit"
// tabs.surfaceBackground: "Surface Background" => "Pozadí povrchu"
// pe.copyDefaultValueFromLastEntry: "Use answers from the last entry as default" => "Použít odpovědi z posledního záznamu jako výchozí"
// colors.gray: "Gray" => "Šedý"
// pe.navigationButtonsLocation: "Navigation buttons alignment" => "Zarovnání navigačních tlačítek"
// pv.allQuestions: "Show all questions" => "Zobrazit všechny otázky"
// pv.answeredQuestions: "Show answered questions only" => "Zobrazit pouze zodpovězené otázky"
// pehelp.navigationButtonsLocation: "Sets the location of navigation buttons on a page." => "Nastaví umístění navigačních tlačítek na stránce."
// pe.size: "Input field width (in characters)" => "Šířka vstupního pole (ve znacích)"
// pe.choiceValuesFromQuestion: "Use values from the following matrix column or panel question as choice IDs" => "Jako ID voleb použijte hodnoty z následujícího sloupce matice nebo otázky panelu"
// pe.choiceTextsFromQuestion: "Use values from the following matrix column or panel question as choice texts" => "Jako texty voleb použijte hodnoty z následujícího sloupce matice nebo otázky panelu"
// pehelp.choiceValuesFromQuestion: "In single- and multiple-selection question types, each choice option has an ID and display value. This setting specifies which matrix column or panel question should provide the IDs." => "U otázek s jedním a více výběry má každá možnost volby ID a zobrazovanou hodnotu. Toto nastavení určuje, která matice, sloupec nebo otázka panelu by měla ID poskytovat."
// pehelp.choiceTextsFromQuestion: "In single- and multiple-selection question types, each choice option has an ID and display value. This setting specifies which matrix column or panel question should provide the display texts." => "U otázek s jedním a více výběry má každá možnost volby ID a zobrazovanou hodnotu. Toto nastavení určuje, který sloupec matice nebo otázka panelu by měla poskytovat zobrazované texty."
// pe.progressBarLocation: "Progress bar alignment" => "Zarovnání indikátoru průběhu"
// progressBarLocation.topbottom: "Top and bottom" => "Nahoře a dole"
// progressBarLocation.aboveheader: "Above the header" => "Nad záhlavím"
// progressBarLocation.belowheader: "Below the header" => "Pod záhlavím"
// progressBarLocation.off: "Hidden" => "Schovaný"
// survey.progressBarLocation: "Sets the location of the progress bar. The \"Auto\" value displays the progress bar above or below the survey header." => "Nastaví umístění indikátoru průběhu. Hodnota \"Auto\" zobrazuje indikátor průběhu nad nebo pod záhlavím průzkumu."
// survey.readOnly: "Make the survey read-only" => "Nastavení průzkumu pouze ke čtení"
// survey.readOnly: "Select if you want to prevent respondents from filling out your survey." => "Vyberte, zda chcete respondentům zabránit ve vyplnění průzkumu."
// paneldynamic.showNumber: "Number the panel" => "Očíslujte panel"
// question.showNumber: "Number this question" => "Číslo této otázky"
// pe.previewMode: "Preview mode" => "Režim náhledu"
// pe.gridLayoutEnabled: "Enable the grid layout" => "Povolte rozvržení mřížky"
// pe.maskSettings: "Mask settings" => "Nastavení masky"
// pe.detailErrorLocation: "Row expansion error message alignment" => "Chybová zpráva Zarovnání rozšíření řádku"
// pehelp.detailErrorLocation: "Sets the location of error messages for questions nested in detail sections. The \"Inherit\" option applies the setting from the \"Error message alignment\" property." => "Nastavuje umístění chybových zpráv pro otázky vnořené do podrobných oddílů. Volba \"Zdědit\" aplikuje nastavení z vlastnosti \"Zarovnání chybové zprávy\"."
// pe.gridLayoutColumns: "Grid layout columns" => "Sloupce rozvržení mřížky"
// pe.startPageTitlePlaceholder: "Start Page" => "Úvodní stránka"
// panellayoutcolumn.effectiveWidth: "Effective width, %" => "Efektivní šířka, %"
// panellayoutcolumn.questionTitleWidth: "Question title width, px" => "Šířka názvu otázky, px"
// pe.listIsEmpty@gridLayoutColumns: "You don't have layout columns yet" => "Sloupce rozložení ještě nemáte"
// panel.effectiveColSpan: "Specifies how many columns this panel spans within the grid layout." => "Určuje, kolik sloupců se tento panel rozprostírá v rozvržení mřížky."
// panel.gridLayoutColumns: "This table lets you configure each grid column within the panel. It automatically sets the width percentage for each column based on the maximum number of elements in a row. To customize the grid layout, manually adjust these values and define the title width for all questions in each column." => "Tato tabulka umožňuje konfigurovat jednotlivé sloupce mřížky v panelu. Automaticky nastaví procentuální šířku pro každý sloupec na základě maximálního počtu prvků v řádku. Chcete-li přizpůsobit rozvržení mřížky, upravte tyto hodnoty ručně a definujte šířku nadpisu pro všechny otázky v každém sloupci."
// pehelp.gridLayoutEnabled: "Survey Creator allows you to manually adjust the inline widths of form elements to control the layout. If this doesn't produce the desired outcome, you can enable the grid layout, which structures form elements using a column-based system. To configure layout columns, select a page or panel and use the \"Question Settings\" → \"Grid columns\" table. To adjust how many columns a question spans, select it and set the desired value in the \"Layout\" → \"Column span\" field." => "Aplikace Survey Creator umožňuje ručně upravit šířky vložených prvků formuláře a řídit tak rozvržení. Pokud to nevede k požadovanému výsledku, můžete zapnout rozvržení mřížky, které struktury tvoří elementy pomocí sloupcového systému. Chcete-li konfigurovat sloupce rozvržení, vyberte stránku nebo panel a použijte tabulku \"Nastavení otázek\" → \"Sloupce mřížky\". Chcete-li upravit, kolik sloupců otázka zabírá, vyberte ji a nastavte požadovanou hodnotu v poli \"Rozvržení\" → \"Rozpětí sloupců\"."
// question.effectiveColSpan: "Specifies how many columns this question spans within the grid layout." => "Určuje, kolik sloupců tato otázka zabírá v rozvržení mřížky."
// page.gridLayoutColumns: "This table lets you configure each grid column on the page. It automatically sets the width percentage for each column based on the maximum number of elements in a row. To customize the grid layout, manually adjust these values and define the title width for all questions in each column." => "Tato tabulka umožňuje konfigurovat jednotlivé sloupce mřížky na stránce. Automaticky nastaví procentuální šířku pro každý sloupec na základě maximálního počtu prvků v řádku. Chcete-li přizpůsobit rozvržení mřížky, upravte tyto hodnoty ručně a definujte šířku nadpisu pro všechny otázky v každém sloupci."

// ed.expandTooltip: "Expand" => "Expandovat"
// ed.collapseTooltip: "Collapse" => "Zhroucení"
// pe.itemTitleWidth_placeholder: "Ex.: 100px" => "Příklad: 100px"
// pehelp.itemTitleWidth: "Sets consistent width for all item labels. Accepts CSS values (px, %, in, pt, etc.)." => "Nastaví konzistentní šířku pro všechny popisky položek. Přijímá hodnoty CSS (px, %, in, pt, atd.)."
// ed.zoom100Tooltip: "Zoom to 100%" => "Zvětšení na 100 %"
// ed.addLanguageTooltip: "Add Language" => "Přidat jazyk"
// pehelp.commentAreaRows: "Sets the number of displayed lines in text areas for question comments. If the input takes up more lines, the scroll bar appears." => "Nastaví počet zobrazených řádků v textových oblastech pro komentáře k otázkám. Pokud vstup zabírá více řádků, zobrazí se posuvník."
// pe.defaultDisplayValue: "Default display value for dynamic texts" => "Výchozí zobrazovaná hodnota pro dynamické texty"
// pehelp.defaultDisplayValue: "A value displayed in HTML questions and in the dynamic titles and descriptions of survey elements when the question value is empty." => "Hodnota zobrazená v otázkách HTML a v dynamických názvech a popisech prvků průzkumu, když je hodnota otázky prázdná."
// showQuestionNumbers.recursive: "Recursive numbering" => "Rekurzivní číslování"
// paneldynamic.templateQuestionTitleWidth: "Question title width" => "Šířka názvu otázky"
// pe.allowCustomChoices: "Allow custom choices" => "Povolit vlastní volby"
// paneldynamic.templateQuestionTitleWidth: "Sets consistent width for question titles when they are aligned to the left of their question boxes. Accepts CSS values (px, %, in, pt, etc.)." => "Nastaví konzistentní šířku názvů otázek, pokud jsou zarovnány vlevo od polí otázek. Přijímá hodnoty CSS (px, %, in, pt, atd.)."
// page.name: "A page ID that is not visible to respondents." => "ID stránky, které není viditelné pro respondenty."
// page.description: "Type a page subtitle." => "Zadejte podnadpis stránky."
// page.navigationTitle: "A caption displayed on a navigation button in the progress bar or table of contents (TOC). If you leave this field empty, the navigation button will use the page title or page name. To enable the progress bar or TOC, go to \"Survey\" → \"Navigation\"." => "Titulek zobrazený na navigačním tlačítku na ukazateli průběhu nebo v obsahu. Pokud toto pole ponecháte prázdné, navigační tlačítko použije název stránky nebo název stránky. Chcete-li aktivovat ukazatel průběhu nebo obsah, přejděte na \"Průzkum\" → \"Navigace\"."
// pehelp.allowCustomChoices: "Select to let respondents add their own choices if the desired option isn't available in the dropdown. Custom choices will only be stored temporarily for the duration of the current browser session." => "Zaškrtnutím umožníte respondentům přidat vlastní volby, pokud požadovaná možnost není v rozbalovací nabídce k dispozici. Vlastní volby budou uloženy pouze dočasně po dobu trvání aktuální relace prohlížeče."