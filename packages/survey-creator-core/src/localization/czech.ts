import { setupLocale } from "survey-creator-core";

export var czStrings = {
  // survey templates
  survey: {
    // "Edit"
    edit: "Upravit",
    // "Watch and learn how to create surveys"
    externalHelpLink: "Podívejte se a naučte se vytvářet průzkumy",
    // "https://www.youtube.com/channel/UCH2ru9okIcooNZfpIbyq4qQ?view_as=subscriber"
    externalHelpLinkUrl: "https://www.youtube.com/channel/UCH2ru9okIcooNZfpIbyq4qQ?view_as=subscriber",
    // "Please drop a question here from the Toolbox."
    dropQuestion: "Sem napište otázku ze sady nástrojů.",
    // "Create a rule to customize the flow of the survey."
    addLogicItem: "Vytvořte pravidlo pro přizpůsobení průběhu průzkumu.",
    // "Copy"
    copy: "Kopírovat",
    // "Duplicate"
    duplicate: "Duplikovat",
    // "Add to toolbox"
    addToToolbox: "Přidat do sady nástrojů",
    // "Delete Panel"
    deletePanel: "Odstranit panel",
    // "Delete Question"
    deleteQuestion: "Odstranit otázku",
    // "Convert to"
    convertTo: "Převést na",
    // "Drag element"
    drag: "Přetáhnout prvek"
  },
  // Creator tabs
  tabs: {
    // "Preview"
    preview: "Otestovat průzkum",
    // "Themes"
    theme: "Motivy",
    // "Translations"
    translation: "Překlad",
    // "Designer"
    designer: "Návrhář průzkumů",
    // "JSON Editor"
    json: "Editor JSON",
    // "Logic"
    logic: "Logika průzkumu"
  },
  // Question types
  qt: {
    // "Default"
    default: "Výchozí",
    // "Checkboxes"
    checkbox: "Zaškrtávací pole",
    // "Long Text"
    comment: "Komentář",
    // "Image Picker"
    imagepicker: "Nástroj pro výběr obrázku",
    // "Ranking"
    ranking: "Pořadí",
    // "Image"
    image: "Obrázek",
    // "Dropdown"
    dropdown: "Rozbalovací nabídka",
    // "Multi-Select Dropdown"
    tagbox: "Vícevýběrová rozbalovací nabídka",
    // "File Upload"
    file: "Soubor",
    // "HTML"
    html: "HTML",
    // "Single-Select Matrix"
    matrix: "Matice (jedna volba)",
    // "Multi-Select Matrix"
    matrixdropdown: "Matice (výběr z více možností)",
    // "Dynamic Matrix"
    matrixdynamic: "Matice (dynamické řádky)",
    // "Multiple Textboxes"
    multipletext: "Více textů",
    // "Panel"
    panel: "Panel",
    // "Dynamic Panel"
    paneldynamic: "Panel (dynamické panely)",
    // "Radio Button Group"
    radiogroup: "Přepínač",
    // "Rating Scale"
    rating: "Hodnocení",
    // [Auto-translated] "Slider"
    slider: "Běhoun",
    // "Single-Line Input"
    text: "Jeden vstup",
    // "Yes/No (Boolean)"
    boolean: "Přepínač (Ano/Ne)",
    // "Expression (read-only)"
    expression: "Výraz (pouze pro čtení)",
    // "Signature"
    signaturepad: "Podpisová podložka",
    // "Button Group"
    buttongroup: "Skupina tlačítek"
  },
  toolboxCategories: {
    // "General"
    general: "Obecné",
    // "Choice Questions"
    choice: "Výběrové otázky",
    // "Text Input Questions"
    text: "Textové otázky",
    // "Containers"
    containers: "Kontejnery",
    // "Matrix Questions"
    matrix: "Maticové otázky",
    // "Misc"
    misc: "Ostatní"
  },
  // Strings in SurveyJS Creator
  ed: {
    // "Default ({0})"
    defaultLocale: "Výchozí ({0})",
    // "Survey"
    survey: "Průzkum",
    // "Settings"
    settings: "Nastavení průzkumu",
    // "Open settings"
    settingsTooltip: "Otevřít nastavení průzkumu",
    // "Survey Settings"
    surveySettings: "Nastavení průzkumu",
    // "Survey settings"
    surveySettingsTooltip: "Nastavení průzkumu",
    // [Auto-translated] "Theme Settings"
    themeSettings: "Nastavení motivu",
    // [Auto-translated] "Theme settings"
    themeSettingsTooltip: "Nastavení motivu",
    // [Auto-translated] "Creator Settings"
    creatorSettingTitle: "Nastavení tvůrce",
    // "Show Panel"
    showPanel: "Zobrazit panel",
    // "Hide Panel"
    hidePanel: "Skrýt panel",
    // "Select previous"
    prevSelected: "Vybrat předchozí",
    // "Select next"
    nextSelected: "Vybrat další",
    // [Auto-translated] "Focus previous"
    prevFocus: "Zaostřeno předchozí",
    // [Auto-translated] "Focus next"
    nextFocus: "Zaostřit na další",
    // "Survey"
    surveyTypeName: "Průzkum",
    // "Page"
    pageTypeName: "Stránka",
    // "Panel"
    panelTypeName: "Panel",
    // "Question"
    questionTypeName: "Otázka",
    // "Column"
    columnTypeName: "Sloupec",
    // "Add New Page"
    addNewPage: "Přidat novou stránku",
    // "Scroll to the Right"
    moveRight: "Přejděte doprava",
    // "Scroll to the Left"
    moveLeft: "Přejděte doleva",
    // "Delete Page"
    deletePage: "Smazat stránku",
    // "Edit Page"
    editPage: "Upravit stránku",
    // "Edit"
    edit: "Upravit",
    // "page"
    newPageName: "stránka",
    // "question"
    newQuestionName: "otázka",
    // "panel"
    newPanelName: "panel",
    // "text"
    newTextItemName: "text",
    // "Default"
    defaultV2Theme: "Výchozí",
    // "Modern"
    modernTheme: "Moderní",
    // "Default (legacy)"
    defaultTheme: "Výchozí (původní)",
    // "Preview Survey Again"
    testSurveyAgain: "Znovu otestovat průzkum",
    // "Survey width: "
    testSurveyWidth: "Šířka průzkumu: ",
    // "You had to navigate to"
    navigateToMsg: "Museli jste přejít na:",
    // "Save Survey"
    saveSurvey: "Uložit průzkum",
    // "Save Survey"
    saveSurveyTooltip: "Uložit průzkum",
    // [Auto-translated] "Save Theme"
    saveTheme: "Uložit motiv",
    // [Auto-translated] "Save Theme"
    saveThemeTooltip: "Uložit motiv",
    // "Hide errors"
    jsonHideErrors: "Skrýt chyby",
    // "Show errors"
    jsonShowErrors: "Zobrazit chyby",
    // "Undo"
    undo: "Zrušit",
    // "Redo"
    redo: "Opětovně vrátit",
    // "Undo last change"
    undoTooltip: "Vrátit poslední změnu",
    // "Redo the change"
    redoTooltip: "Znovu provést změnu",
    // [Auto-translated] "Expand"
    expandTooltip: "Expandovat",
    // [Auto-translated] "Collapse"
    collapseTooltip: "Zhroucení",
    // "Expand All"
    expandAllTooltip: "Rozbalit vše",
    // "Collapse All"
    collapseAllTooltip: "Sbalit vše",
    // [Auto-translated] "Zoom In"
    zoomInTooltip: "Přiblížit",
    // [Auto-translated] "Zoom to 100%"
    zoom100Tooltip: "Zvětšení na 100 %",
    // [Auto-translated] "Zoom Out"
    zoomOutTooltip: "Oddálit",
    // [Auto-translated] "Lock expand/collapse state for questions"
    lockQuestionsTooltip: "Uzamknout stav rozbalení/sbalení pro otázky",
    // "Show more"
    showMoreChoices: "Zobrazit více",
    // "Show less"
    showLessChoices: "Zobrazit méně",
    // "Copy"
    copy: "Kopírovat",
    // "Cut"
    cut: "Vyjmout",
    // "Paste"
    paste: "Vložit",
    // "Copy selection to clipboard"
    copyTooltip: "Zkopírovat výběr do schránky",
    // "Cut selection to clipboard"
    cutTooltip: "Vyjmout výběr do schránky",
    // "Paste from clipboard"
    pasteTooltip: "Vložit ze schránky",
    // "Options"
    options: "Možnosti",
    // "Generate Valid JSON"
    generateValidJSON: "Generovat platný JSON",
    // "Generate Readable JSON"
    generateReadableJSON: "Generovat čitelný JSON",
    // "Toolbox"
    toolbox: "Sada nástrojů",
    // "Properties"
    "property-grid": "Vlastnosti",
    // [Auto-translated] "Search"
    toolboxSearch: "Hledání",
    // [Auto-translated] "Type to search..."
    toolboxFilteredTextPlaceholder: "Chcete-li hledat, zadejte jej...",
    // [Auto-translated] "No results found"
    toolboxNoResultsFound: "Nebyly nalezeny žádné výsledky",
    // "Type to search..."
    propertyGridFilteredTextPlaceholder: "Zadejte hledaný text...",
    // [Auto-translated] "No results found"
    propertyGridNoResultsFound: "Nebyly nalezeny žádné výsledky",
    // [Auto-translated] "Start configuring your form"
    propertyGridPlaceholderTitle: "Začněte konfigurovat formulář",
    // [Auto-translated] "Click any category icon to explore survey settings. Additional settings will become available once you add a survey element to the design surface."
    propertyGridPlaceholderDescription: "Kliknutím na libovolnou ikonu kategorie můžete prozkoumat nastavení průzkumu. Další nastavení budou k dispozici, jakmile přidáte element survey na návrhovou plochu.",
    // "Please correct JSON."
    correctJSON: "Opravte JSON.",
    // "Survey Results "
    surveyResults: "Výsledek průzkumu: ",
    // "As Table"
    surveyResultsTable: "Jako tabulka",
    // "As JSON"
    surveyResultsJson: "Jako JSON",
    // "Question Title"
    resultsTitle: "Nadpis otázky",
    // "Question Name"
    resultsName: "Název otázky",
    // "Answer Value"
    resultsValue: "Hodnota odpovědi",
    // "Display Value"
    resultsDisplayValue: "Hodnota zobrazení",
    // "Modified"
    modified: "Upraveno",
    // "Saving"
    saving: "Ukládání",
    // "Saved"
    saved: "Uloženo",
    // "Error"
    propertyEditorError: "Chyba:",
    // "Error! Editor content is not saved."
    saveError: "Chyba! Obsah editoru není uložen.",
    // "Language Settings"
    translationPropertyGridTitle: "Nastavení jazyka",
    // [Auto-translated] "Theme Settings"
    themePropertyGridTitle: "Nastavení motivu",
    // [Auto-translated] "Add Language"
    addLanguageTooltip: "Přidat jazyk",
    // "Languages"
    translationLanguages: "Jazyky",
    // [Auto-translated] "Are you certain you wish to delete all strings for this language?"
    translationDeleteLanguage: "Jste si jisti, že chcete odstranit všechny řetězce pro tento jazyk?",
    // "Select language to translate"
    translationAddLanguage: "Vyberte jazyk pro překlad",
    // "All Strings"
    translationShowAllStrings: "Zobrazit všechny řetězce",
    // "Used Strings Only"
    translationShowUsedStringsOnly: "Pouze použité řetězce",
    // "All Pages"
    translationShowAllPages: "Zobrazit všechny stránky",
    // "No strings to translate. Please change the filter."
    translationNoStrings: "Žádné řetězce k překladu. Změňte filtr.",
    // "Export to CSV"
    translationExportToSCVButton: "Export do CSV",
    // "Import from CSV"
    translationImportFromSCVButton: "Import z CSV",
    // "Auto-translate All"
    translateUsigAI: "Automatický překlad Vše",
    // [Auto-translated] "Translate from: "
    translateUsigAIFrom: "Přeložit z: ",
    // [Auto-translated] "Untranslated strings"
    translationDialogTitle: "Nepřeložené řetězce",
    // "Merge {0} with default locale"
    translationMergeLocaleWithDefault: "Sloučit {0} s výchozím lokálem",
    // "Translation..."
    translationPlaceHolder: "Překlad...",
    // [Auto-translated] "Source: "
    translationSource: "Zdroj: ",
    // [Auto-translated] "Target: "
    translationTarget: "Cíl: ",
    // [Auto-translated] "YouTube links are not supported."
    translationYouTubeNotSupported: "Odkazy na YouTube nejsou podporovány.",
    // [Auto-translated] "Export"
    themeExportButton: "Vývoz",
    // [Auto-translated] "Import"
    themeImportButton: "Dovoz",
    // [Auto-translated] "Export"
    surveyJsonExportButton: "Vývoz",
    // [Auto-translated] "Import"
    surveyJsonImportButton: "Dovoz",
    // [Auto-translated] "Copy to clipboard"
    surveyJsonCopyButton: "Zkopírovat do schránky",
    // [Auto-translated] "Reset theme settings to default"
    themeResetButton: "Obnovení výchozího nastavení motivu",
    // [Auto-translated] "Do you really want to reset the theme? All your customizations will be lost."
    themeResetConfirmation: "Opravdu chcete resetovat motiv? Všechna vaše přizpůsobení budou ztracena.",
    // [Auto-translated] "Yes, reset the theme"
    themeResetConfirmationOk: "Ano, resetovat motiv",
    // "Bold"
    bold: "Tučně",
    // "Italic"
    italic: "Kurzíva",
    // "Underline"
    underline: "Podtržení",
    // "Add Question"
    addNewQuestion: "Přidat otázku",
    // "Select page..."
    selectPage: "Vyberte stránku...",
    // [Auto-translated] "Choices are copied from"
    carryForwardChoicesCopied: "Volby jsou zkopírovány z",
    // [Auto-translated] "Choices are loaded from a web service."
    choicesLoadedFromWebText: "Volby se načítají z webové služby.",
    // [Auto-translated] "Go to settings"
    choicesLoadedFromWebLinkText: "Přejděte do nastavení",
    // [Auto-translated] "Preview of loaded choice options"
    choicesLoadedFromWebPreviewTitle: "Náhled načtených voleb",
    // "HTML content will be here."
    htmlPlaceHolder: "Zde bude HTML obsah.",
    // "Drop a question from the toolbox here."
    panelPlaceHolder: "Sem přetáhněte otázku z panelu nástrojů.",
    // "The survey is empty. Drag an element from the toolbox or click the button below."
    surveyPlaceHolder: "Průzkum je prázdný. Přetáhněte prvek z panelu nástrojů nebo klikněte na tlačítko níže.",
    // [Auto-translated] "The page is empty. Drag an element from the toolbox or click the button below."
    pagePlaceHolder: "Stránka je prázdná. Přetáhněte prvek z palety nástrojů nebo klikněte na tlačítko níže.",
    // "Drag and drop an image here or click the button below and choose an image to upload"
    imagePlaceHolder: "Obrázek můžete vložit jeho přetažením na toto místo nebo kliknutím na tlačítko níže",
    // "Click the \"Add Question\" button below to start creating your form."
    surveyPlaceHolderMobile: "Kliknutím na tlačítko \"Přidat otázku\" níže zahájíte vytváření formuláře.",
    // [Auto-translated] "Your form is empty"
    surveyPlaceholderTitle: "Váš formulář je prázdný",
    // [Auto-translated] "Your form is empty"
    surveyPlaceholderTitleMobile: "Váš formulář je prázdný",
    // [Auto-translated] "Drag an element from the toolbox or click the button below."
    surveyPlaceholderDescription: "Přetáhněte prvek z panelu nástrojů nebo klikněte na tlačítko níže.",
    // [Auto-translated] "Drag an element from the toolbox or click the button below."
    surveyPlaceholderDescriptionMobile: "Přetáhněte prvek z panelu nástrojů nebo klikněte na tlačítko níže.",
    // [Auto-translated] "No preview"
    previewPlaceholderTitle: "Žádný náhled",
    // [Auto-translated] "No preview"
    previewPlaceholderTitleMobile: "Žádný náhled",
    // [Auto-translated] "The survey doesn't contain any visible elements."
    previewPlaceholderDescription: "Průzkum neobsahuje žádné viditelné prvky.",
    // [Auto-translated] "The survey doesn't contain any visible elements."
    previewPlaceholderDescriptionMobile: "Průzkum neobsahuje žádné viditelné prvky.",
    // [Auto-translated] "No strings to translate"
    translationsPlaceholderTitle: "Žádné řetězce k překladu",
    // [Auto-translated] "No strings to translate"
    translationsPlaceholderTitleMobile: "Žádné řetězce k překladu",
    // [Auto-translated] "Add elements to your form or change the strings filter in the toolbar."
    translationsPlaceholderDescription: "Přidejte do formuláře prvky nebo změňte filtr řetězců na panelu nástrojů.",
    // [Auto-translated] "Add elements to your form or change the strings filter in the toolbar."
    translationsPlaceholderDescriptionMobile: "Přidejte do formuláře prvky nebo změňte filtr řetězců na panelu nástrojů.",
    // "Click the \"Add Question\" button below to add a new element to the page."
    pagePlaceHolderMobile: "Kliknutím na tlačítko \"Přidat otázku\" níže přidáte na stránku nový prvek.",
    // "Click the \"Add Question\" button below to add a new element to the panel."
    panelPlaceHolderMobile: "Kliknutím na tlačítko \"Přidat otázku\" níže přidáte do panelu nový prvek.",
    // [Auto-translated] "Click the button below and choose an image to upload"
    imagePlaceHolderMobile: "Klikněte na tlačítko níže a vyberte obrázek, který chcete nahrát",
    // "Choose Image"
    imageChooseImage: "Vybrat obrázek",
    // "Add {0}"
    addNewTypeQuestion: "Přidat {0}", // {0} is localizable question type
    // "[LOGO]"
    chooseLogoPlaceholder: "[LOGO]",
    // "Item "
    choices_Item: "Položka ",
    // [Auto-translated] "Select a file"
    selectFile: "Vyberte soubor",
    // [Auto-translated] "Remove the file"
    removeFile: "Odebrání souboru",
    lg: {
      // "Add New Rule"
      addNewItem: "Přidat nové pravidlo",
      // "Create a rule to customize the flow of the survey."
      empty_tab: "Vytvořte pravidlo pro přizpůsobení průběhu průzkumu.",
      // [Auto-translated] "No logical rules"
      logicPlaceholderTitle: "Žádná logická pravidla",
      // [Auto-translated] "No logical rules"
      logicPlaceholderTitleMobile: "Žádná logická pravidla",
      // [Auto-translated] "Create a rule to customize the flow of the survey."
      logicPlaceholderDescription: "Vytvořte pravidlo pro přizpůsobení toku průzkumu.",
      // [Auto-translated] "Create a rule to customize the flow of the survey."
      logicPlaceholderDescriptionMobile: "Vytvořte pravidlo pro přizpůsobení toku průzkumu.",
      // "Show/hide page"
      page_visibilityName: "Viditelnost stránky",
      // "Enable/disable page"
      page_enableName: "Zapnutí (vypnutí) stránky",
      // [Auto-translated] "Make page required"
      page_requireName: "Nastavit stránku jako povinné",
      // "Show/hide panel"
      panel_visibilityName: "Viditelnost panelu",
      // "Enable/disable panel"
      panel_enableName: "Zapnutí/vypnutí panelu",
      // [Auto-translated] "Make panel required"
      panel_requireName: "Povinný panel Nastavení",
      // "Show/hide question"
      question_visibilityName: "Viditelnost otázky",
      // "Enable/disable question"
      question_enableName: "Zapnutí/vypnutí otázky",
      // "Make question required"
      question_requireName: "Povinné vyplnění otázky",
      // [Auto-translated] "Reset question value"
      question_resetValueName: "Obnovit hodnotu otázky",
      // [Auto-translated] "Set question value"
      question_setValueName: "Nastavit hodnotu otázky",
      // "Show/hide column"
      column_visibilityName: "Zobrazit (skrýt) sloupec",
      // "Enable/disable column"
      column_enableName: "Zapnout (vypnout) sloupec",
      // "Make column required"
      column_requireName: "Povinný sloupec",
      // [Auto-translated] "Reset column value"
      column_resetValueName: "Obnovit hodnotu sloupce",
      // [Auto-translated] "Set column value"
      column_setValueName: "Nastavit hodnotu sloupce",
      // "Complete survey"
      trigger_completeName: "Dokončení průzkumu",
      // "Set answer"
      trigger_setvalueName: "Nastavení hodnoty otázky",
      // "Copy answer"
      trigger_copyvalueName: "Kopírovat hodnotu otázky",
      // "Skip to question"
      trigger_skipName: "Přeskočit na otázku",
      // "Run expression"
      trigger_runExpressionName: "Spuštění vlastního výrazu",
      // "Set \"Thank You\" page markup"
      completedHtmlOnConditionName: "Vlastní text stránky s poděkováním",
      // "Make the page visible when the logical expression evaluates to true. Otherwise, keep the page invisible."
      page_visibilityDescription: "Zobrazení stránky, když se logický výraz vrátí jako true. V opačném případě zůstane neviditelná.",
      // "Make the page visible when the logical expression evaluates to true. Otherwise, keep the panel invisible."
      panel_visibilityDescription: "Zobrazení panel, když se logický výraz vrátí jako true. V opačném případě zůstane neviditelný.",
      // "Make the panel and all elements inside it enabled when the logical expression evaluates to true. Otherwise, keep them disabled."
      panel_enableDescription: "Panel a všechny prvky v něm se aktivují, když logický výraz vrátí hodnotu true. V opačném případě je nechte vypnuté.",
      // "Make the question visible when the logical expression evaluates to true. Otherwise, keep the question invisible."
      question_visibilityDescription: "Zobrazit otázku, když logický výraz vrátí hodnotu true. V opačném případě zůstane neviditelná.",
      // "Make the question enabled when the logical expression evaluates to true. Otherwise, keep the question disabled."
      question_enableDescription: "Povolit otázku, když logický výraz vrátí hodnotu true. V opačném případě zůstane neviditelná.",
      // "Question becomes required when the logical expression evaluates to true."
      question_requireDescription: "Otázka se stává povinnou, když logický výraz vrátí hodnotu true.",
      // "When the logical expression evaluates to true, the survey ends, and the respondent sees the \"Thank you\" page."
      trigger_completeDescription: "Když logický výraz vrátí hodnotu true, průzkum je dokončen a koncovému uživateli se zobrazí stránka s poděkováním.",
      // "When question values used in the logical expression are changed, and the expression evaluates to true, the specified value is assigned to the selected question."
      trigger_setvalueDescription: "Pokud se změní hodnoty otázek, které jsou použity v logickém výrazu, a logický výraz vrátí hodnotu true, nastaví se hodnota na vybranou otázku.",
      // "When question values used in the logical expression are changed, and the expression evaluates to true, the value of the selected question is copied to another question."
      trigger_copyvalueDescription: "Pokud se změní hodnoty otázek, které jsou použity v logickém výrazu, a logický výraz vrátí hodnotu true, pak se hodnota jedné vybrané otázky zkopíruje do jiné vybrané otázky.",
      // "When the logical expression evaluates to true, the survey focuses/jumps to the selected question."
      trigger_skipDescription: "Pokud logický výraz vrátí hodnotu true, průzkum přejde na vybranou otázku/zaměří se na ni.",
      // "When the logical expression evaluates to true, the survey evaluates another expression. Optionally, the result of the latter expression can be assigned as a value to the selected question"
      trigger_runExpressionDescription: "Pokud logický výraz vrátí hodnotu true, provede se vlastní výraz. Výsledek tohoto výrazu můžete volitelně nastavit do vybrané otázky.",
      // "If the logical expression evaluates to true, the \"Thank You\" page displays the specified content."
      completedHtmlOnConditionDescription: "Pokud logický výraz vrátí hodnotu true, změní se výchozí text stránky s poděkováním na zadaný text.",
      // "When expression: '{0}' returns true"
      itemExpressionText: "Pokud výraz „{0}“ vrátí hodnotu true:", // {0} - the expression
      // "New rule"
      itemEmptyExpressionText: "Nové pravidlo",
      // "make page {0} visible"
      page_visibilityText: "Zobrazit stránku {0}", // {0} page name
      // "make panel {0} visible"
      panel_visibilityText: "Zobrazit panel {0}", // {0} panel name
      // "make panel {0} enable"
      panel_enableText: "Povolit panel {0}", // {0} panel name
      // "make question {0} visible"
      question_visibilityText: "Zobrazit otázku {0}", // {0} question name
      // "make question {0} enable"
      question_enableText: "Povolit otázku {0}", // {0} question name
      // "make question {0} required"
      question_requireText: "Otázka {0} je povinná", // {0} question name
      // [Auto-translated] "reset value for question: {0}"
      question_resetValueText: "Resetovat hodnotu pro otázku: {0}", // {0} question name.
      // [Auto-translated] "assign value: {1} to question: {0}"
      question_setValueText: "přiřadit hodnotu: {1} na otázku: {0}", // {0} question name and {1} setValueExpression
      // "make column {0} of question {1} visible"
      column_visibilityText: "zviditelnit sloupec {0} úlohy {1}", // {0} column name, {1} question name
      // "make column {0} of question {1} enable"
      column_enableText: "povolit sloupec {0} otázky {1}", // {0} column name, {1} question name
      // "make column {0} of question {1} required"
      column_requireText: "povinný sloupec {0} otázky {1}", // {0} column name, {1} question name
      // [Auto-translated] "reset cell value for column: {0}"
      column_resetValueText: "Obnovit hodnotu buňky pro sloupec: {0}", // {0} column name
      // [Auto-translated] "assign cell value: {1} to column: {0}"
      column_setValueText: "Přiřaďte hodnotu buňky: {1} sloupci: {0}", // {0} column name and {1} setValueExpression
      // [Auto-translated] "An expression whose result will be assigned to the target question."
      setValueExpressionPlaceholder: "Výraz, jehož výsledek bude přiřazen k cílové otázce.",
      // "survey becomes completed"
      trigger_completeText: "Průzkum se stává dokončeným",
      // "set into question: {0} value {1}"
      trigger_setvalueText: "Zpochybnit: {0} hodnota {1}", // {0} question name, {1} setValue
      // [Auto-translated] "clear question value: {0}"
      trigger_setvalueEmptyText: "Jasná hodnota otázky: {0}", // {0} question name
      // "copy into question: {0} value from question {1}"
      trigger_copyvalueText: "Kopírovat do otázky: {0} hodnota z otázky {1}", // {0} and {1} question names
      // "survey skip to the question {0}"
      trigger_skipText: "Průzkum přeskočí na otázku {0}", // {0} question name
      // "run expression: '{0}'"
      trigger_runExpressionText1: "Spustit výraz: „{0}“", // {0} the expression
      // " and set its result into question: {0}"
      trigger_runExpressionText2: " a zpochybnit jeho výsledek: {0}", // {0} question name
      // "show custom text for the \"Thank You\" page."
      completedHtmlOnConditionText: "Zobrazit vlastní text pro stránku s poděkováním.",
      // "All Questions"
      showAllQuestions: "Všechny otázky",
      // "All Action Types"
      showAllActionTypes: "Všechny typy akcí",
      // "Condition(s)"
      conditions: "Podmínky",
      // "Action(s)"
      actions: "Akce",
      // "Define condition(s)"
      expressionEditorTitle: "Definovat podmínky",
      // "Define action(s)"
      actionsEditorTitle: "Definovat akce",
      // "Delete Action"
      deleteAction: "Smazat akci",
      // "Add Action"
      addNewAction: "Přidat novou akci",
      // "Select action..."
      selectedActionCaption: "Vyberte akci, kterou chcete přidat...",
      // "The logic expression is empty or invalid. Please correct it."
      expressionInvalid: "Logický výraz je prázdný nebo neplatný. Opravte jej.",
      // "Please add at least one action."
      noActionError: "Přidejte alespoň jednu akci.",
      // "Please fix issues in your action(s)."
      actionInvalid: "Opravte prosím problémy v akcích.",
      // "Logical rules are incomplete"
      uncompletedRule_title: "Opustit záložku?",
      // "You have not completed some of the logical rules. If you leave the tab now, the changes will be lost. Do you still want to leave the tab without completing the changes?"
      uncompletedRule_text: "Jedno nebo více logických pravidel není dokončeno. Opuštěním záložky dojde ke ztrátě všech neaplikovatelných změn. Jste si jisti, že chcete odejít?",
      // "Yes"
      uncompletedRule_apply: "Ano",
      // "No, I want to complete the rules"
      uncompletedRule_cancel: "Ne, chci pravidla dokončit"
    }
  },
  // Property Editors
  pe: {
    panel: {
      // [Auto-translated] "Panel name"
      name: "Název panelu",
      // [Auto-translated] "Panel title"
      title: "Název panelu",
      // [Auto-translated] "Panel description"
      description: "Popis panelu",
      // [Auto-translated] "Make the panel visible if"
      visibleIf: "Zviditelněte panel, pokud",
      // [Auto-translated] "Make the panel required if"
      requiredIf: "Zajistěte, aby byl panel povinný, pokud",
      // [Auto-translated] "Question order within the panel"
      questionOrder: "Pořadí otázek v rámci panelu",
      // [Auto-translated] "Move the panel to page"
      page: "Přemístění panelu na stránku",
      // [Auto-translated] "Display the panel on a new line"
      startWithNewLine: "Zobrazení obrazu na novém řádku",
      // [Auto-translated] "Panel collapse state"
      state: "Stav sbalení panelu",
      // [Auto-translated] "Inline panel width"
      width: "Šířka vloženého panelu",
      // [Auto-translated] "Minimum panel width"
      minWidth: "Minimální šířka panelu",
      // [Auto-translated] "Maximum panel width"
      maxWidth: "Maximální šířka panelu",
      // [Auto-translated] "Number this panel"
      showNumber: "Očíslujte tento panel"
    },
    panellayoutcolumn: {
      // [Auto-translated] "Effective width, %"
      effectiveWidth: "Efektivní šířka, %",
      // [Auto-translated] "Question title width, px"
      questionTitleWidth: "Šířka názvu otázky, px"
    },
    paneldynamic: {
      // [Auto-translated] "Panel name"
      name: "Název panelu",
      // [Auto-translated] "Panel title"
      title: "Název panelu",
      // [Auto-translated] "Panel description"
      description: "Popis panelu",
      // [Auto-translated] "Entry display mode"
      displayMode: "Režim zobrazení vstupu",
      // [Auto-translated] "Make the panel visible if"
      visibleIf: "Zviditelněte panel, pokud",
      // [Auto-translated] "Make the panel required if"
      requiredIf: "Zajistěte, aby byl panel povinný, pokud",
      // [Auto-translated] "Move the panel to page"
      page: "Přesunutí panelu na stránku",
      // [Auto-translated] "Display the panel on a new line"
      startWithNewLine: "Zobrazení obrazu na novém řádku",
      // [Auto-translated] "Panel collapse state"
      state: "Stav sbalení panelu",
      // [Auto-translated] "Inline panel width"
      width: "Šířka vloženého panelu",
      // [Auto-translated] "Minimum panel width"
      minWidth: "Minimální šířka panelu",
      // [Auto-translated] "Maximum panel width"
      maxWidth: "Maximální šířka panelu",
      // [Auto-translated] "Confirm entry removal"
      confirmDelete: "Potvrdit odstranění záznamu",
      // [Auto-translated] "Entry description pattern"
      templateDescription: "Vzor popisu položky",
      // [Auto-translated] "Entry title pattern"
      templateTitle: "Vzor názvu položky",
      // [Auto-translated] "Empty panel text"
      noEntriesText: "Prázdný text panelu",
      // [Auto-translated] "Tab title pattern"
      templateTabTitle: "Vzor názvu tabulátoru",
      // [Auto-translated] "Tab title placeholder"
      tabTitlePlaceholder: "Zástupný symbol názvu tabulátoru",
      // [Auto-translated] "Make an individual entry visible if"
      templateVisibleIf: "Zviditelnit jednotlivý záznam, pokud",
      // [Auto-translated] "Number the panel"
      showNumber: "Očíslujte panel",
      // [Auto-translated] "Panel title alignment"
      titleLocation: "Zarovnání názvu panelu",
      // [Auto-translated] "Panel description alignment"
      descriptionLocation: "Zarovnání popisu panelu",
      // [Auto-translated] "Question title alignment"
      templateQuestionTitleLocation: "Zarovnání názvu otázky",
      // [Auto-translated] "Question title width"
      templateQuestionTitleWidth: "Šířka názvu otázky",
      // [Auto-translated] "Error message alignment"
      templateErrorLocation: "Zarovnání chybové zprávy",
      // [Auto-translated] "New entry location"
      newPanelPosition: "Nová vstupní lokace",
      // [Auto-translated] "Show the progress bar"
      showRangeInProgress: "Zobrazení ukazatele průběhu",
      // [Auto-translated] "Prevent duplicate responses in the following question"
      keyName: "Zabraňte duplicitním odpovědím v následující otázce"
    },
    question: {
      // [Auto-translated] "Question name"
      name: "Název otázky",
      // [Auto-translated] "Question title"
      title: "Název otázky",
      // [Auto-translated] "Question description"
      description: "Popis otázky",
      // [Auto-translated] "Show the title and description"
      showTitle: "Zobrazit název a popis",
      // [Auto-translated] "Make the question visible if"
      visibleIf: "Zviditelněte otázku, pokud",
      // [Auto-translated] "Make the question required if"
      requiredIf: "Otázku povinně zjišťte, pokud",
      // [Auto-translated] "Move the question to page"
      page: "Přesunutí dotazu na stránku",
      // [Auto-translated] "Question box collapse state"
      state: "Stav sbalení pole otázek",
      // [Auto-translated] "Number this question"
      showNumber: "Číslo této otázky",
      // [Auto-translated] "Question title alignment"
      titleLocation: "Zarovnání názvu otázky",
      // [Auto-translated] "Question description alignment"
      descriptionLocation: "Zarovnání popisu otázky",
      // [Auto-translated] "Error message alignment"
      errorLocation: "Zarovnání chybové zprávy",
      // [Auto-translated] "Increase the inner indent"
      indent: "Zvětšete vnitřní odsazení",
      // [Auto-translated] "Inline question width"
      width: "Vložená šířka otázky",
      // [Auto-translated] "Minimum question width"
      minWidth: "Minimální šířka otázky",
      // [Auto-translated] "Maximum question width"
      maxWidth: "Maximální šířka otázky",
      // [Auto-translated] "Update input field value"
      textUpdateMode: "Aktualizovat hodnotu vstupního pole"
    },
    signaturepad: {
      // [Auto-translated] "Signature area width"
      signatureWidth: "Šířka oblasti podpisu",
      // [Auto-translated] "Signature area height"
      signatureHeight: "Výška signatury",
      // [Auto-translated] "Auto-scale the signature area"
      signatureAutoScaleEnabled: "Automatické škálování oblasti podpisu",
      // [Auto-translated] "Show a placeholder within signature area"
      showPlaceholder: "Zobrazení vyhrazeného místa v oblasti podpisu",
      // [Auto-translated] "Placeholder text"
      placeholder: "Zástupný text",
      // [Auto-translated] "Placeholder text in read-only or preview mode"
      placeholderReadOnly: "Zástupný text v režimu jen pro čtení nebo v režimu náhledu",
      // [Auto-translated] "Show the Clear button within signature area"
      allowClear: "Zobrazení tlačítka Vymazat v oblasti podpisu",
      // [Auto-translated] "Minimum stroke width"
      penMinWidth: "Minimální šířka tahu",
      // [Auto-translated] "Maximum stroke width"
      penMaxWidth: "Maximální šířka tahu",
      // [Auto-translated] "Stroke color"
      penColor: "Barva tahu"
    },
    comment: {
      // [Auto-translated] "Input field height (in lines)"
      rows: "Výška vstupního pole (v řádcích)"
    },
    // "Question numbering"
    showQuestionNumbers: "Zobrazit čísla otázek",
    // "Question indexing type"
    questionStartIndex: "Index začátku otázky (1, 2 nebo A, a)",
    expression: {
      // [Auto-translated] "Expression name"
      name: "Název výrazu",
      // [Auto-translated] "Expression title"
      title: "Název výrazu",
      // [Auto-translated] "Expression description"
      description: "Popis výrazu",
      // [Auto-translated] "Expression"
      expression: "Výraz"
    },
    trigger: {
      // [Auto-translated] "Expression"
      expression: "Výraz"
    },
    calculatedvalue: {
      // [Auto-translated] "Expression"
      expression: "Výraz"
    },
    // survey templates
    survey: {
      // [Auto-translated] "Survey title"
      title: "Název průzkumu",
      // [Auto-translated] "Survey description"
      description: "Popis průzkumu",
      // [Auto-translated] "Make the survey read-only"
      readOnly: "Nastavení průzkumu pouze ke čtení"
    },
    page: {
      // [Auto-translated] "Page name"
      name: "Název stránky",
      // [Auto-translated] "Page title"
      title: "Název stránky",
      // [Auto-translated] "Page description"
      description: "Popis stránky",
      // [Auto-translated] "Make the page visible if"
      visibleIf: "Zviditelněte stránku, pokud",
      // [Auto-translated] "Make the page required if"
      requiredIf: "Zajistěte, aby stránka byla povinná, pokud",
      // [Auto-translated] "Time limit to complete the page"
      timeLimit: "Časový limit pro dokončení stránky",
      // [Auto-translated] "Question order on the page"
      questionOrder: "Pořadí otázek na stránce"
    },
    matrixdropdowncolumn: {
      // [Auto-translated] "Column name"
      name: "Název sloupce",
      // [Auto-translated] "Column title"
      title: "Název sloupce",
      // [Auto-translated] "Prevent duplicate responses"
      isUnique: "Zabraňte duplicitním odpovědím",
      // [Auto-translated] "Column width"
      width: "Šířka sloupce",
      // [Auto-translated] "Minimum column width"
      minWidth: "Minimální šířka sloupce",
      // [Auto-translated] "Input field height (in lines)"
      rows: "Výška vstupního pole (v řádcích)",
      // [Auto-translated] "Make the column visible if"
      visibleIf: "Zviditelněte sloupec, pokud",
      // [Auto-translated] "Make the column required if"
      requiredIf: "Vytvořte sloupec jako povinný, pokud",
      // [Auto-translated] "Each option in a separate column"
      showInMultipleColumns: "Každá možnost v samostatném sloupci"
    },
    matrixcolumn: {
      // [Auto-translated] "Clear others in the same row"
      isExclusive: "Vymazání ostatních ve stejném řádku"
    },
    multipletextitem: {
      // [Auto-translated] "Name"
      name: "Jméno",
      // [Auto-translated] "Title"
      title: "Titul"
    },
    masksettings: {
      // [Auto-translated] "Save masked value in survey results"
      saveMaskedValue: "Uložit maskovanou hodnotu ve výsledcích průzkumu"
    },
    patternmask: {
      // [Auto-translated] "Value pattern"
      pattern: "Vzor hodnoty"
    },
    datetimemask: {
      // [Auto-translated] "Minimum value"
      min: "Minimální hodnota",
      // [Auto-translated] "Maximum value"
      max: "Maximální hodnota"
    },
    numericmask: {
      // [Auto-translated] "Allow negative values"
      allowNegativeValues: "Povolit záporné hodnoty",
      // [Auto-translated] "Thousands separator"
      thousandsSeparator: "Oddělovač tisíců",
      // [Auto-translated] "Decimal separator"
      decimalSeparator: "Oddělovač desetinných míst",
      // [Auto-translated] "Value precision"
      precision: "Přesnost hodnoty",
      // [Auto-translated] "Minimum value"
      min: "Minimální hodnota",
      // [Auto-translated] "Maximum value"
      max: "Maximální hodnota"
    },
    currencymask: {
      // [Auto-translated] "Currency prefix"
      prefix: "Předpona měny",
      // [Auto-translated] "Currency suffix"
      suffix: "Přípona měny"
    },
    // [Auto-translated] "Clear others when selected"
    isExclusive: "Vymazat ostatní při výběru",
    // [Auto-translated] "Require user to enter a comment"
    isCommentRequired: "Požadovat po uživateli zadání komentáře",
    // "Display area height"
    imageHeight: "Výška obrázku",
    // "Display area width"
    imageWidth: "Šířka obrázku",
    // "Join identifier"
    valueName: "Název hodnoty",
    // [Auto-translated] "Default display value for dynamic texts"
    defaultDisplayValue: "Výchozí zobrazovaná hodnota pro dynamické texty",
    // [Auto-translated] "Label alignment"
    rateDescriptionLocation: "Zarovnání štítků",
    // [Auto-translated] "Input field width (in characters)"
    size: "Šířka vstupního pole (ve znacích)",
    // [Auto-translated] "Cell error message alignment"
    cellErrorLocation: "Zarovnání chybové zprávy buňky",
    // [Auto-translated] "Enabled"
    enabled: "Zpřístupněný",
    // [Auto-translated] "Disabled"
    disabled: "Invalidní",
    // [Auto-translated] "Inherit"
    inherit: "Zdědit",
    // "Apply"
    apply: "Použít",
    // "OK"
    ok: "OK",
    // "Save"
    save: "Uložit",
    // "Clear"
    clear: "Vymazat",
    // "Save"
    saveTooltip: "Uložit",
    // "Cancel"
    cancel: "Zrušit",
    // "Set"
    set: "Nastavit",
    // "Reset"
    reset: "Resetovat",
    // "Change"
    change: "Změnit",
    // "Refresh"
    refresh: "Obnovit",
    // "Close"
    close: "Zavřít",
    // "Delete"
    delete: "Smazat",
    // "Add"
    add: "Přidat",
    // "Add New"
    addNew: "Přidat novou",
    // "Click to add an item..."
    addItem: "Kliknutím přidáte položku...",
    // "Click to remove the item..."
    removeItem: "Kliknutím odstraníte položku...",
    // "Drag the item"
    dragItem: "Přetáhněte položku",
    // "Other"
    addOther: "Ostatní",
    // "Select All"
    addSelectAll: "Vybrat vše",
    // "None"
    addNone: "Žádné",
    // "Remove All"
    removeAll: "Odstranit vše",
    // "Edit"
    edit: "Upravit",
    // "Return without saving"
    back: "Návrat bez uložení",
    // "Return without saving"
    backTooltip: "Návrat bez uložení",
    // "Save and return"
    saveAndBack: "Uložit a vrátit",
    // "Save and return"
    saveAndBackTooltip: "Uložit a vrátit",
    // "Done"
    doneEditing: "Hotovo",
    // "Edit Choices"
    editChoices: "Upravit volby",
    // "Show Choices"
    showChoices: "Zobrazit volby",
    // "Move"
    move: "Přesunout",
    // "<empty>"
    empty: "<prázdné>",
    // "Value is empty"
    emptyValue: "Hodnota je prázdná",
    // "Manual Entry"
    fastEntry: "Rychlý vstup",
    // "Value '{0}' is not unique"
    fastEntryNonUniqueError: "Hodnota \"{0}\" není unikátní",
    // "Please limit the number of items from {0} to {1}"
    fastEntryChoicesCountError: "Prosím, omezte počet položek od {0} do {1}",
    // [Auto-translated] "Please enter at least {0} items"
    fastEntryChoicesMinCountError: "Zadejte alespoň {0} položek",
    // "Enter the list of choice options and their IDs in the following format:\n\nid|option\n\nA choice option ID is not visible to respondents and can be used in conditional rules."
    fastEntryPlaceholder: "Data můžete nastavit v následujícím formátu:\nhodnota1|text\nhodnota2",
    // "Form Entry"
    formEntry: "Vstupní formulář",
    // "Test the service"
    testService: "Testování služby",
    // "Please select the element"
    itemSelectorEmpty: "Vyberte prvek",
    // "Please select the action"
    conditionActionEmpty: "Vyberte akci",
    // "Select a question..."
    conditionSelectQuestion: "Vyberte otázku...",
    // "Select a page..."
    conditionSelectPage: "Vyberte stránku...",
    // "Select a panel..."
    conditionSelectPanel: "Vyberte panel...",
    // "Please enter/select the value"
    conditionValueQuestionTitle: "Zadejte/vyberte hodnotu",
    // "Press ctrl+space to get expression completion hint"
    aceEditorHelp: "Stisknutím kláves ctrl+mezerník získáte nápovědu k dokončení výrazu",
    // "Current row"
    aceEditorRowTitle: "Aktuální řádek",
    // "Current panel"
    aceEditorPanelTitle: "Aktuální panel",
    // "For more details please check the documentation"
    showMore: "Další podrobnosti naleznete v dokumentaci",
    // "Available questions"
    assistantTitle: "Dostupné otázky:",
    // "There is should be at least one column or row"
    cellsEmptyRowsColumns: "Měl by existovat alespoň jeden sloupec nebo řádek.",
    // "Review before submit"
    showPreviewBeforeComplete: "Zobrazit náhled odpovědí před odesláním průzkumu",
    // [Auto-translated] "Enabled by a condition"
    overridingPropertyPrefix: "Povoleno podmínkou",
    // [Auto-translated] "Reset"
    resetToDefaultCaption: "Resetovat",
    // "Please enter a value"
    propertyIsEmpty: "Zadejte hodnotu",
    // "Please enter a unique value"
    propertyIsNoUnique: "Zadejte jedinečnou hodnotu",
    // "Please enter a unique name"
    propertyNameIsNotUnique: "Zadejte jedinečný název",
    // "Do not use reserved words: \"item\", \"choice\", \"panel\", \"row\"."
    propertyNameIsIncorrect: "Nepoužívejte vyhrazená slova: \"položka\", \"volba\", \"panel\", \"řádek\".",
    // "You don't have any items yet"
    listIsEmpty: "Přidat novou položku",
    // "You don't have any choices yet"
    "listIsEmpty@choices": "Zatím nebyly přidány žádné volby",
    // [Auto-translated] "You don't have any columns yet"
    "listIsEmpty@columns": "Zatím nemáte žádné sloupce.",
    // [Auto-translated] "You don't have layout columns yet"
    "listIsEmpty@gridLayoutColumns": "Sloupce rozložení ještě nemáte",
    // [Auto-translated] "You don't have any rows yet"
    "listIsEmpty@rows": "Zatím nemáte žádné řádky",
    // [Auto-translated] "You don't have any validation rules yet"
    "listIsEmpty@validators": "Zatím nemáte žádná ověřovací pravidla.",
    // [Auto-translated] "You don't have any custom variables yet"
    "listIsEmpty@calculatedValues": "Zatím nemáte žádné vlastní proměnné.",
    // [Auto-translated] "You don't have any triggers yet"
    "listIsEmpty@triggers": "Zatím nemáte žádné spouštěče",
    // [Auto-translated] "You don't have any links yet"
    "listIsEmpty@navigateToUrlOnCondition": "Zatím nemáte žádné odkazy",
    // [Auto-translated] "You don't have any pages yet"
    "listIsEmpty@pages": "Zatím nemáte žádné stránky",
    // "Add new choice"
    "addNew@choices": "Přidat volbu",
    // [Auto-translated] "Add new column"
    "addNew@columns": "Přidat nový sloupec",
    // [Auto-translated] "Add new row"
    "addNew@rows": "Přidat nový řádek",
    // [Auto-translated] "Add new rule"
    "addNew@validators": "Přidat nové pravidlo",
    // [Auto-translated] "Add new variable"
    "addNew@calculatedValues": "Přidat novou proměnnou",
    // [Auto-translated] "Add new trigger"
    "addNew@triggers": "Přidání nového triggeru",
    // [Auto-translated] "Add new URL"
    "addNew@navigateToUrlOnCondition": "Přidat novou adresu URL",
    // [Auto-translated] "Add new page"
    "addNew@pages": "Přidat novou stránku",
    // "Expression is empty"
    expressionIsEmpty: "Výraz je prázdný",
    // "Value"
    value: "Hodnota",
    // "Text"
    text: "Text",
    // "Row ID"
    rowid: "ID řady",
    // "Image or video file URL"
    imageLink: "Odkaz na obrázek",
    // "Edit column: {0}"
    columnEdit: "Upravit sloupec: {0}",
    // "Edit item: {0}"
    itemEdit: "Upravit položku: {0}",
    // "URL"
    url: "URL",
    // "Path to data"
    path: "Cesta",
    choicesbyurl: {
      // [Auto-translated] "Web service URL"
      url: "Adresa URL webové služby",
      // "Get value to store from the following property"
      valueName: "Získat hodnoty z následujícího JSON pole"
    },
    // "Get value to display from the following property"
    titleName: "Získat texty z následujícího JSON pole",
    // "Get file URLs from the following property"
    imageLinkName: "Získat URL obrázku z následujícího JSON pole",
    // "Accept empty response"
    allowEmptyResponse: "Povolit prázdnou odpověď",
    // "Title"
    titlePlaceholder: "Sem zadejte název",
    // "Survey Title"
    surveyTitlePlaceholder: "Sem zadejte název průzkumu",
    // "Page {num}"
    pageTitlePlaceholder: "Sem zadejte název stránky",
    // [Auto-translated] "Start Page"
    startPageTitlePlaceholder: "Úvodní stránka",
    // "Description"
    descriptionPlaceholder: "Zadejte popis",
    // "Description"
    surveyDescriptionPlaceholder: "Zadejte popis průzkumu",
    // "Description"
    pageDescriptionPlaceholder: "Zadejte popis stránky",
    // [Auto-translated] "Wrap choices"
    textWrapEnabled: "Možnosti obtékání",
    // "Enable the \"Other\" option"
    showOtherItem: "Má jinou položku",
    // "Rename the \"Other\" option"
    otherText: "Další text položky",
    // "Enable the \"None\" option"
    showNoneItem: "Nemá žádnou položku",
    // [Auto-translated] "Enable the \"Refuse to Answer\" option"
    showRefuseItem: "Povolte možnost \"Odmítnout odpovědět\"",
    // [Auto-translated] "Enable the \"Don't Know\" option"
    showDontKnowItem: "Povolte možnost \"Nevím\"",
    // "Rename the \"None\" option"
    noneText: "Žádný text položky",
    // "Enable the \"Select All\" option"
    showSelectAllItem: "Vybral/a všechny položky",
    // "Rename the \"Select All\" option"
    selectAllText: "Vyberte veškerý text položky",
    // "Minimum value for auto-generated items"
    choicesMin: "Minimální hodnota pro automaticky generované položky",
    // "Maximum value for auto-generated items"
    choicesMax: "Maximální hodnota pro automaticky generované položky",
    // "Step value for auto-generated items"
    choicesStep: "Rozdíl mezi automaticky generovanými položkami",
    // "Name"
    name: "Název",
    // "Title"
    title: "Nadpis",
    // "Cell input type"
    cellType: "Typ buňky",
    // "Column count"
    colCount: "Počet sloupců",
    // "Choice order"
    choicesOrder: "Vyberte pořadí voleb",
    // [Auto-translated] "Allow custom choices"
    allowCustomChoices: "Povolit vlastní volby",
    // "Visible"
    visible: "Viditelná?",
    // "Required"
    isRequired: "Povinná?",
    // [Auto-translated] "Mark as required"
    markRequired: "Označit podle potřeby",
    // [Auto-translated] "Remove the required mark"
    removeRequiredMark: "Odstraňte požadovanou značku",
    // "Require an answer in each row"
    eachRowRequired: "Povinná odpověď pro všechny řádky",
    // [Auto-translated] "Prevent duplicate responses in rows"
    eachRowUnique: "Zabránění duplicitním odpovědím v řádcích",
    // "Error message for required questions"
    requiredErrorText: "Text chyby pro povinnou otázku",
    // "Display the question on a new line"
    startWithNewLine: "Začátek s novým řádkem?",
    // "Rows"
    rows: "Počet řádků",
    // "Columns"
    cols: "Počet sloupců",
    // "Placeholder text within input field"
    placeholder: "Vstupní zástupný text",
    // "Show preview area"
    showPreview: "Zobrazit oblast náhledu",
    // "Store file content in JSON result as text"
    storeDataAsText: "Uložit obsah souboru ve výsledku JSON jako text",
    // "Maximum file size (in bytes)"
    maxSize: "Maximální velikost souboru v bajtech",
    // "Row count"
    rowCount: "Počet řádků",
    // "Columns layout"
    columnLayout: "Rozložení sloupců",
    // "\"Add Row\" button alignment"
    addRowButtonLocation: "Přidat umístění tlačítka řádku",
    // [Auto-translated] "Transpose rows to columns"
    transposeData: "Transponování řádků do sloupců",
    // "\"Add Row\" button text"
    addRowText: "Přidat text tlačítka řádku",
    // "\"Remove Row\" button text"
    removeRowText: "Odebrat text tlačítka řádku",
    // [Auto-translated] "Input field title pattern"
    singleInputTitleTemplate: "Vzor názvu vstupního pole",
    // "Minimum rating value"
    rateMin: "Minimální frekvence",
    // "Maximum rating value"
    rateMax: "Maximální frekvence",
    // "Step value"
    rateStep: "Krok frekvence",
    // "Minimum value label"
    minRateDescription: "Popis minimální frekvence",
    // "Maximum value label"
    maxRateDescription: "Popis maximální sazby",
    // "Input type"
    inputType: "Typ vstupu",
    // "Option placeholder"
    optionsCaption: "Popisek možností",
    // "Default Answer"
    defaultValue: "Výchozí hodnota",
    // "Default texts"
    cellsDefaultRow: "Výchozí texty buněk",
    // "Edit survey settings"
    surveyEditorTitle: "Upravit nastavení průzkumu",
    // "Edit: {0}"
    qEditorTitle: "Upravit: {0}",
    // "Maximum character limit"
    maxLength: "Maximální délka",
    // "Build"
    buildExpression: "Vytvořit",
    // "Edit"
    editExpression: "Upravit",
    // "and"
    and: "a zároveň",
    // "or"
    or: "nebo",
    // "Remove"
    remove: "Odebrat",
    // "Add Condition"
    addCondition: "Přidat podmínku",
    // "Select a question to start configuring conditions."
    emptyLogicPopupMessage: "Pro zahájení konfigurace podmínek vyberte otázku.",
    // "If"
    if: "Pokud",
    // "then"
    then: "pak",
    // "Target question"
    setToName: "Cílová otázka",
    // "Question to copy answer from"
    fromName: "Otázka, ze které bude zkopírována odpověď",
    // "Question to skip to"
    gotoName: "Přeskočit na otázku",
    // "Rule is incorrect"
    ruleIsNotSet: "Pravidlo je chybné",
    // "Add to the survey results"
    includeIntoResult: "Zahrnout do výsledků průzkumu",
    // "Make the title and description visible"
    showTitle: "Zobrazit/skrýt název",
    // "Expand/collapse title"
    expandCollapseTitle: "Rozbalit/sbalit název",
    // "Select a survey language"
    locale: "Výchozí jazyk",
    // "Select device type"
    simulator: "Vybrat zařízení",
    // "Switch to landscape orientation"
    landscapeOrientation: "Na šířku",
    // "Switch to portrait orientation"
    portraitOrientation: "Přepnout orientaci na výšku",
    // "Clear hidden question values"
    clearInvisibleValues: "Vymazat neviditelné hodnoty",
    // "Limit to one response"
    cookieName: "Název souboru cookie (pro zakázání dvojího lokálního spuštění průzkumu)",
    // "Auto-save survey progress on page change"
    partialSendEnabled: "Odeslání výsledků průzkumu na další straně",
    // "Save the \"Other\" option value as a separate property"
    storeOthersAsComment: "Uložení hodnoty „others“ do samostatného pole",
    // "Show page titles"
    showPageTitles: "Zobrazit názvy stránek",
    // "Show page numbers"
    showPageNumbers: "Zobrazit čísla stránek",
    // "\"Previous Page\" button text"
    pagePrevText: "Text tlačítka předchozí stránky",
    // "\"Next Page\" button text"
    pageNextText: "Text tlačítka další stránky",
    // "\"Complete Survey\" button text"
    completeText: "Úplný text tlačítka",
    // "\"Review Answers\" button text"
    previewText: "Text tlačítka náhledu",
    // "\"Edit Answer\" button text"
    editText: "Text tlačítka úpravy",
    // "\"Start Survey\" button text"
    startSurveyText: "Text tlačítka zahájení",
    // "Show navigation buttons"
    showNavigationButtons: "Zobrazit navigační tlačítka (výchozí navigace)",
    // [Auto-translated] "Navigation buttons alignment"
    navigationButtonsLocation: "Zarovnání navigačních tlačítek",
    // "Show the \"Previous Page\" button"
    showPrevButton: "Zobrazit předchozí tlačítko (uživatel se může vrátit na předchozí stránku)",
    // "First page is a start page"
    firstPageIsStartPage: "První stránka průzkumu je úvodní stránka.",
    // "Show the \"Thank You\" page"
    showCompletePage: "Zobrazení dokončené stránky na konci (completedHtml)",
    // "Auto-advance to the next page"
    autoAdvanceEnabled: "Po zodpovězení všech otázek automaticky přejít na další stránku",
    // [Auto-translated] "Complete the survey automatically"
    autoAdvanceAllowComplete: "Automatické vyplnění dotazníku",
    // "Show the progress bar"
    showProgressBar: "Zobrazit ukazatel průběhu",
    // [Auto-translated] "Progress bar alignment"
    progressBarLocation: "Zarovnání indikátoru průběhu",
    // "Question title alignment"
    questionTitleLocation: "Umístění názvu otázky",
    // "Question title width"
    questionTitleWidth: "Šířka názvu otázky",
    // "Required symbol(s)"
    requiredMark: "Povinné symboly otázky",
    // "Question title template, default is: '{no}. {require} {title}'"
    questionTitleTemplate: "Šablona názvu otázky, výchozí je: „{no}. {require} {title}“",
    // "Error message alignment"
    questionErrorLocation: "Umístění chyby v otázce",
    // "Focus first question on a new page"
    autoFocusFirstQuestion: "Zaměřte se na první otázku týkající se změny stránky",
    // "Question order"
    questionOrder: "Pořadí prvků na stránce",
    // "Time limit to complete the survey"
    timeLimit: "Maximální doba pro dokončení průzkumu",
    // "Time limit to complete one page"
    timeLimitPerPage: "Maximální doba pro dokončení stránky v průzkumu",
    // [Auto-translated] "Use a timer"
    showTimer: "Použití časovače",
    // "Timer alignment"
    timerLocation: "Zobrazit panel časovače",
    // "Timer mode"
    timerInfoMode: "Zobrazit režim panelu časovače",
    // "Panel display mode"
    renderMode: "Režim vykreslování",
    // "Enable entry addition"
    allowAddPanel: "Povolit přidání panelu",
    // "Enable entry removal"
    allowRemovePanel: "Povolit odstranění panelu",
    // "\"Add Entry\" button text"
    addPanelText: "Přidávání textu na panel",
    // "\"Remove Entry\" button text"
    removePanelText: "Odstraňování textu panelu",
    // "Show all elements on one page"
    isSinglePage: "Zobrazit všechny prvky na jedné stránce",
    // "HTML markup"
    html: "HTML",
    // "Answer"
    setValue: "Odpověď",
    // "Storage format"
    dataFormat: "Formát obrázku",
    // "Enable row addition"
    allowAddRows: "Povolit přidání řádků",
    // "Enable row removal"
    allowRemoveRows: "Povolit odstranění řádků",
    // "Enable row reordering"
    allowRowReorder: "Povolit přetahování řádků",
    // "Does not apply if you specify the exact display area width or height."
    responsiveImageSizeHelp: "Nepoužije se, pokud specifikujete přesnou šířku nebo výšku obrázku.",
    // "Minimum display area width"
    minImageWidth: "Minimální šířka obrázku",
    // "Maximum display area width"
    maxImageWidth: "Maximální šířka obrázku",
    // "Minimum display area height"
    minImageHeight: "Minimální výška obrázku",
    // "Maximum display area height"
    maxImageHeight: "Maximální výška obrázku",
    // "Minimum value"
    minValue: "Minimální hodnota",
    // "Maximum value"
    maxValue: "Maximální hodnota",
    // [Auto-translated] "Case insensitive"
    caseInsensitive: "Nerozlišuje malá a velká písmena",
    // "Minimum length (in characters)"
    minLength: "Minimální délka",
    // "Allow digits"
    allowDigits: "Povolit číslice",
    // "Minimum count"
    minCount: "Minimální počet",
    // "Maximum count"
    maxCount: "Maximální počet",
    // "Regular expression"
    regex: "Pravidelný výraz",
    surveyvalidator: {
      // [Auto-translated] "Validation message"
      text: "Ověřovací zpráva",
      // [Auto-translated] "Validation expression"
      expression: "Ověřovací výraz",
      // [Auto-translated] "Notification type"
      notificationType: "Typ oznámení",
      // [Auto-translated] "Maximum length (in characters)"
      maxLength: "Maximální délka (ve znacích)"
    },
    // "Total row header"
    totalText: "Celkový text",
    // "Aggregation method"
    totalType: "Celkový typ",
    // "Total value expression"
    totalExpression: "Celkový výraz",
    // "Total value display format"
    totalDisplayStyle: "Celkový styl zobrazení",
    // "Currency"
    totalCurrency: "Celková měna",
    // "Formatted string"
    totalFormat: "Celkový formát",
    // "Survey logo"
    logo: "Logo (URL nebo base64-kódovaný řetězec)",
    // "Survey layout"
    questionsOnPageMode: "Struktura průzkumu",
    // "Restrict answer length"
    maxTextLength: "Maximální délka odpovědi (v počtu znaků)",
    // "Restrict comment length"
    maxCommentLength: "Maximální délka komentáře (v počtu znaků)",
    // [Auto-translated] "Comment area height (in lines)"
    commentAreaRows: "Výška oblasti komentářů (v řádcích)",
    // "Auto-expand text areas"
    autoGrowComment: "V případě potřeby automaticky rozbalit komentář",
    // "Allow users to resize text areas"
    allowResizeComment: "Povolit uživatelům změnit velikost textových polí",
    // "Update input field values"
    textUpdateMode: "Aktualizovat hodnotu textové otázky",
    // [Auto-translated] "Input mask type"
    maskType: "Typ vstupní masky",
    // "Set focus on the first invalid answer"
    autoFocusFirstError: "Zvýraznit první neplatnou odpověď",
    // "Run validation"
    checkErrorsMode: "Spustit ověření",
    // [Auto-translated] "Validate empty fields on lost focus"
    validateVisitedEmptyFields: "Ověření prázdných polí při ztrátě fokusu",
    // "Redirect to an external link after submission"
    navigateToUrl: "Přejít na URL",
    // "Dynamic external link"
    navigateToUrlOnCondition: "Dynamická URL",
    // "Markup to show if the user already filled out this survey"
    completedBeforeHtml: "Text, který se uživateli zobrazí v případě, kdy má již průzkum vyplněný",
    // "\"Thank You\" page markup"
    completedHtml: "Text, který se uživateli zobrazí po vyplnění průzkumu",
    // "Dynamic \"Thank You\" page markup"
    completedHtmlOnCondition: "Dynamický text, který se uživateli zobrazí po vyplnění průzkumu",
    // "Markup to show while survey model is loading"
    loadingHtml: "Text, který se zobrazí během načítání průzkumu",
    // "Comment area text"
    commentText: "Text komentáře",
    // "Autocomplete type"
    autocomplete: "Typ automatického vyplňování",
    // "Label for \"True\""
    labelTrue: "Popisek \"pravdivé\" hodnoty",
    // "Label for \"False\""
    labelFalse: "Popisek \"nepravdivé\" hodnoty",
    // "Show the Clear button"
    allowClear: "Zobrazit popisek možností",
    // [Auto-translated] "Search Mode"
    searchMode: "Režim vyhledávání",
    // "Display format"
    displayStyle: "Styl zobrazení hodnoty",
    // "Formatted string"
    format: "Formátovaný řetězec",
    // "Maximum fractional digits"
    maximumFractionDigits: "Maximální počet desetinných míst",
    // "Minimum fractional digits"
    minimumFractionDigits: "Minimální počet desetinných míst",
    // "Display grouping separators"
    useGrouping: "Zobrazit oddělovač tisíců",
    // "Enable multiple file upload"
    allowMultiple: "Povolit více souborů",
    // "Preview uploaded images"
    allowImagesPreview: "Náhled obrázků",
    // "Accepted file types"
    acceptedTypes: "Povolené typy souborů",
    // "Wait for upload to complete"
    waitForUpload: "Počkejte na dokončení nahrávání",
    // "Confirm file deletion"
    needConfirmRemoveFile: "Potvrdit smazání souboru",
    // "Row details alignment"
    detailPanelMode: "Umístění detailního panelu",
    // "Minimum row count"
    minRowCount: "Minimální počet řádků",
    // "Maximum row count"
    maxRowCount: "Maximální počet řádků",
    // "Confirm row removal"
    confirmDelete: "Potvrdit smazání řádku",
    // "Confirmation message"
    confirmDeleteText: "Potvrzovací zpráva",
    // "Initial number of entries"
    panelCount: "Počáteční počet panelů",
    // "Minimum number of entries"
    minPanelCount: "Minimální počet panelů",
    // "Maximum number of entries"
    maxPanelCount: "Maximální počet panelů",
    // "Initial entry state"
    panelsState: "Stav rozbalení vnitřního panelu",
    // "\"Previous Entry\" button text"
    prevPanelText: "Nápověda pro tlačítko \"Předchozí panel\"",
    // "\"Next Entry\" button text"
    nextPanelText: "Nápověda pro tlačítko \"Další panel\"",
    // "\"Remove Entry\" button alignment"
    removePanelButtonLocation: "Umístění tlačítka \"Odstranit panel\"",
    // "Hide the question if it has no rows"
    hideIfRowsEmpty: "Skrýt otázku, pokud neexistují žádné řádky",
    // "Hide columns if there are no rows"
    hideColumnsIfEmpty: "Skrýt sloupce, pokud neexistují žádné řádky",
    // "Custom rating values"
    rateValues: "Vlastní hodnoty kurzu",
    // "Rating count"
    rateCount: "Počet kurzů",
    // "Rating configuration"
    autoGenerate: "Jak určit hodnoty kurzu?",
    slider: {
      // [Auto-translated] "Min value"
      min: "Min hodnota",
      // [Auto-translated] "Max value"
      max: "Maximální hodnota",
      // [Auto-translated] "Step value"
      step: "Hodnota kroku",
      // [Auto-translated] "Show scale labels"
      showLabels: "Zobrazit štítky měřítka",
      // [Auto-translated] "Show tooltips"
      tooltipVisibility: "Zobrazit popisky nástrojů",
      // [Auto-translated] "Allow thumb crossing"
      allowSwap: "Povolit křížení palců",
      // [Auto-translated] "Number of auto-generated labels"
      labelCount: "Počet automaticky generovaných štítků",
      // [Auto-translated] "Min value expression"
      minValueExpression: "Výraz minimální hodnoty",
      // [Auto-translated] "Max value expression"
      maxValueExpression: "Výraz maximální hodnoty",
      // [Auto-translated] "Scale labels configuration"
      autoGenerate: "Konfigurace popisků měřítka",
      // [Auto-translated] "Slider type"
      sliderType: "Typ jezdce",
      // [Auto-translated] "Min range length"
      minRangeLength: "Minimální délka rozsahu",
      // [Auto-translated] "Max range length"
      maxRangeLength: "Maximální délka dosahu",
      // [Auto-translated] "Custom labels"
      customLabels: "Vlastní štítky",
      // [Auto-translated] "Label format"
      labelFormat: "Formát štítku",
      // [Auto-translated] "Tooltip format"
      tooltipFormat: "Formát popisku nástroje"
    },
    file: {
      // [Auto-translated] "Image height"
      imageHeight: "Výška obrazu",
      // [Auto-translated] "Image width"
      imageWidth: "Šířka obrazu"
    },
    // "Hide the question if it has no choices"
    hideIfChoicesEmpty: "Skrýt otázku, pokud neobsahuje žádné volby",
    // "Minimum width"
    minWidth: "Minimální šířka (v hodnotách akceptovaných CSS)",
    // "Maximum width"
    maxWidth: "Maximální šířka (v hodnotách akceptovaných CSS)",
    // "Width"
    width: "Šířka (v hodnotách akceptovaných CSS)",
    // "Show column headers"
    showHeader: "Zobrazit záhlaví sloupce",
    // "Show horizontal scrollbar"
    horizontalScroll: "Zobrazit horizontální posuvník",
    // "Minimum column width"
    columnMinWidth: "Minimální šířka sloupce (v hodnotách akceptovaných CSS)",
    // "Row header width"
    rowTitleWidth: "Šířka záhlaví řádku (v hodnotách akceptovaných CSS)",
    // "Value to store when \"True\" is selected"
    valueTrue: "\"Pravdivá\" hodnota",
    // "Value to store when \"False\" is selected"
    valueFalse: "\"Nepravdivá\" hodnota",
    // "\"Value is below minimum\" error message"
    minErrorText: "Zpráva pro chybu \"Hodnota je nižší než minimální\"",
    // "\"Value exceeds maximum\" error message"
    maxErrorText: "Zpráva pro chybu \"Hodnota překračuje maximum\"",
    // "\"Empty comment\" error message"
    otherErrorText: "Zpráva pro chybu \"Prázdný komentář\"",
    // "Error message for duplicate responses"
    keyDuplicationError: "Zpráva pro chybu \"Klíč není unikátní\"",
    // [Auto-translated] "Minimum choices to select"
    minSelectedChoices: "Minimální možnosti výběru",
    // "Maximum choices to select"
    maxSelectedChoices: "Maximální počet vybraných možností",
    // "Logo width"
    logoWidth: "Šířka loga (v hodnotách akceptovaných CSS)",
    // "Logo height"
    logoHeight: "Výška loga (v hodnotách akceptovaných CSS)",
    // "Read-only"
    readOnly: "Pouze pro čtení",
    // "Disable the read-only mode if"
    enableIf: "Upravitelná pokud",
    // "\"No rows\" message"
    noRowsText: "Zpráva \"Žádné řádky\"",
    // "Separate special choices"
    separateSpecialChoices: "Oddělit speciální volby (žádná, ostatní, vybrat vše)",
    // "Copy choices from the following question"
    choicesFromQuestion: "Kopírovat volby z následující otázky",
    // "Which choice options to copy"
    choicesFromQuestionMode: "Které volby zkopírovat?",
    // [Auto-translated] "Use values from the following matrix column or panel question as choice IDs"
    choiceValuesFromQuestion: "Jako ID voleb použijte hodnoty z následujícího sloupce matice nebo otázky panelu",
    // [Auto-translated] "Use values from the following matrix column or panel question as choice texts"
    choiceTextsFromQuestion: "Jako texty voleb použijte hodnoty z následujícího sloupce matice nebo otázky panelu",
    // [Auto-translated] "Display page titles in the progress bar"
    progressBarShowPageTitles: "Zobrazení názvů stránek v pruhu průběhu",
    // [Auto-translated] "Display page numbers in the progress bar"
    progressBarShowPageNumbers: "Zobrazení čísel stránek v pruhu průběhu",
    // "Add a comment box"
    showCommentArea: "Zobrazit komentář",
    // "Placeholder text for the comment box"
    commentPlaceholder: "Zástupný text komentáře",
    // "Show the labels as extreme values"
    displayRateDescriptionsAsExtremeItems: "Zobrazit popisy kurzů jako extrémní hodnoty",
    // "Row order"
    rowOrder: "Pořadí řádků",
    // "Column layout"
    columnsLayout: "Rozložení sloupce",
    // "Nested column count"
    columnColCount: "Počet vnořených sloupců",
    // "Correct Answer"
    correctAnswer: "Správná odpověď",
    // "Default Values"
    defaultPanelValue: "Výchozí hodnoty",
    // "Cell Texts"
    cells: "Texty buněk",
    // [Auto-translated] "Select a file or paste a file link..."
    fileInputPlaceholder: "Vyberte soubor nebo vložte odkaz na soubor...",
    // "Prevent duplicate responses in the following column"
    keyName: "Klíčový sloupec",
    itemvalue: {
      // [Auto-translated] "Make the option visible if"
      visibleIf: "Zviditelněte tuto možnost, pokud",
      // [Auto-translated] "Make the option selectable if"
      enableIf: "Zajistěte, aby byla možnost vybratelná, pokud"
    },
    "itemvalue@rows": {
      // [Auto-translated] "Make the row visible if"
      visibleIf: "Zviditelněte řádek, pokud",
      // [Auto-translated] "Make the row editable if"
      enableIf: "Zajistěte, aby byl řádek upravitelný, pokud"
    },
    imageitemvalue: {
      // "Alt text"
      text: "Alternativní text"
    },
    // "Logo alignment"
    logoPosition: "Pozice loga",
    // "Add logo..."
    addLogo: "Přidat logo...",
    // "Change logo..."
    changeLogo: "Změnit logo...",
    logoPositions: {
      // "Remove logo"
      none: "Odstranit logo",
      // "Left"
      left: "Vlevo",
      // "Right"
      right: "Vpravo",
      // "On the top"
      top: "Nahoře",
      // "In the bottom"
      bottom: "Dole"
    },
    // [Auto-translated] "Preview mode"
    previewMode: "Režim náhledu",
    // [Auto-translated] "Enable grid layout"
    gridLayoutEnabled: "Povolit rozvržení mřížky",
    // [Auto-translated] "Grid columns"
    gridLayoutColumns: "Sloupce mřížky",
    // [Auto-translated] "Mask settings"
    maskSettings: "Nastavení masky",
    // [Auto-translated] "Row details error message alignment"
    detailErrorLocation: "Zarovnání chybové zprávy podrobností řádku",
    // Creator tabs
    tabs: {
      panel: {
        // [Auto-translated] "Panel Layout"
        layout: "Rozvržení panelu"
      },
      // "General"
      general: "Obecné",
      // "Options"
      fileOptions: "Možnosti",
      // "HTML Editor"
      html: "Editor HTML",
      // "Columns"
      columns: "Sloupce",
      // "Rows"
      rows: "Řádky",
      // "Choice Options"
      choices: "Volby",
      // "Items"
      items: "Položky",
      // "Visible If"
      visibleIf: "Viditelná, pokud",
      // "Editable If"
      enableIf: "Povolená, pokud",
      // "Required If"
      requiredIf: "Povinná, pokud",
      // "Rating Values"
      rateValues: "Hodnoty sazeb",
      // [Auto-translated] "Slider Settings"
      sliderSettings: "Nastavení posuvníku",
      // "Choices from a Web Service"
      choicesByUrl: "Volby z webu",
      // "Default Choices"
      matrixChoices: "Výchozí volby",
      // "Text Inputs"
      multipleTextItems: "Textové vstupy",
      // "Numbering"
      numbering: "Číslování",
      // "Validators"
      validators: "Validátory",
      // "Navigation"
      navigation: "Navigace",
      // "Question Settings"
      question: "Otázka",
      // "Pages"
      pages: "Stránky",
      // "Quiz Mode"
      timer: "Časovač/kvíz",
      // "Calculated Values"
      calculatedValues: "Vypočítané hodnoty",
      // "Triggers"
      triggers: "Spouštěče",
      // "Title template"
      templateTitle: "Název šablony",
      // "Totals"
      totals: "Součty",
      // "Conditions"
      logic: "Logika",
      // [Auto-translated] "Input Mask Settings"
      mask: "Nastavení vstupní masky",
      layout: {
        // [Auto-translated] "Panel Layout"
        panel: "Rozvržení panelu",
        // [Auto-translated] "Layout"
        question: "Rozložení",
        // [Auto-translated] "Layout"
        base: "Rozložení"
      },
      // "Data"
      data: "Data",
      // "Validation"
      validation: "Ověřování",
      // "Individual Cell Texts"
      cells: "Buňky",
      // "\"Thank You\" Page"
      showOnCompleted: "Zobrazit na stránce Dokončeno",
      // "Logo in the Survey Header"
      logo: "Logo v názvu průzkumu",
      // "Slider"
      slider: "Posuvník",
      // "Expression"
      expression: "Výraz",
      // [Auto-translated] "Question Settings"
      questionSettings: "Nastavení otázek",
      // "Header"
      header: "Záhlaví",
      // "Background"
      background: "Pozadí",
      // "Appearance"
      appearance: "Vzhled",
      // [Auto-translated] "Accent colors"
      accentColors: "Zvýraznění barev",
      // [Auto-translated] "Surface background"
      surfaceBackground: "Pozadí Surface",
      // [Auto-translated] "Scaling"
      scaling: "Změna velikosti",
      // "Others"
      others: "Ostatní"
    },
    // "Edit property '{0}'"
    editProperty: "Upravit vlastnost „{0}“",
    // "Items"
    items: "[ Položky: {0} ]",
    // "Make choices visible if"
    choicesVisibleIf: "Volby jsou viditelné, pokud",
    // "Make choices selectable if"
    choicesEnableIf: "Volby jsou volitelné, pokud",
    // "Make columns visible if"
    columnsEnableIf: "Sloupce jsou viditelné, pokud",
    // "Make rows visible if"
    rowsEnableIf: "Řádky jsou viditelné, pokud",
    // "Increase the inner indent"
    innerIndent: "Přidat vnitřní odsazení",
    // [Auto-translated] "Use answers from the last entry as default"
    copyDefaultValueFromLastEntry: "Použít odpovědi z posledního záznamu jako výchozí",
    // "Please enter a value."
    enterNewValue: "Zadejte hodnotu.",
    // "There are no questions in the survey."
    noquestions: "V průzkumu není žádná otázka.",
    // "Please create a trigger"
    createtrigger: "Vytvořte spouštěč",
    // "Press enter button to edit"
    titleKeyboardAdornerTip: "Zadejte tlačítko k úpravě",
    // "Press enter button to edit item, press delete button to delete item, press alt plus arrow up or arrow down to move item"
    keyboardAdornerTip: "Stisknutím klávesy enter upravíte položku, stisknutím klávesy delete položku odstraníte, stisknutím klávesy alt plus šipky nahoru nebo šipky dolů položku přesunete.",
    // "On "
    triggerOn: "Zapnout ",
    // "Make pages visible"
    triggerMakePagesVisible: "Zobrazit stránky:",
    // "Make elements visible"
    triggerMakeQuestionsVisible: "Zobrazit prvky:",
    // "Complete the survey if successful."
    triggerCompleteText: "Vyplňte průzkum, pokud se vám to podaří.",
    // "The trigger is not set"
    triggerNotSet: "Spouštěč není nastaven",
    // "Run if"
    triggerRunIf: "Spustit, pokud",
    // "Change value of: "
    triggerSetToName: "Změnit hodnotu: ",
    // "Copy value from: "
    triggerFromName: "Zkopírovat hodnotu z: ",
    // "Run this Expression"
    triggerRunExpression: "Spustit tento výraz:",
    // "to: "
    triggerSetValue: "do: ",
    // "Go to the question"
    triggerGotoName: "Přejít na otázku:",
    // "Do not put the variable into the survey result."
    triggerIsVariable: "Nevkládejte proměnnou do výsledku průzkumu.",
    // "Please enter a valid expression"
    triggerRunExpressionEmpty: "Zadejte platný výraz",
    // "Type expression here..."
    emptyExpressionPlaceHolder: "Zde napište výraz...",
    // "No file chosen"
    noFile: "Nebyl vybrán žádný soubor",
    // "Clear hidden question values"
    clearIfInvisible: "Vymazat hodnotu, pokud se otázka skryje",
    // "Store values in the following property"
    valuePropertyName: "Název hodnotové vlastnosti",
    // "Enable search-as-you-type"
    searchEnabled: "Povolit vyhledávání",
    // "Hide selected items"
    hideSelectedItems: "Skrýt vybrané položky",
    // "Collapse the dropdown upon selection"
    closeOnSelect: "Po výběru zavřít rozbalovací nabídku",
    // "Vertical alignment within cells"
    verticalAlign: "Vertikální zarovnání",
    // "Alternate row colors"
    alternateRows: "Alternativní řádky",
    // "Make columns visible if"
    columnsVisibleIf: "Sloupce jsou viditelné, pokud",
    // "Make rows visible if"
    rowsVisibleIf: "Řádky jsou viditelné, pokud",
    // "Placeholder text for the comment box"
    otherPlaceholder: "Zástupný text komentáře",
    // [Auto-translated] "Placeholder text for Local file"
    filePlaceholder: "Zástupný text pro lokální soubor",
    // [Auto-translated] "Placeholder text for Camera"
    photoPlaceholder: "Zástupný text pro aplikaci Fotoaparát",
    // [Auto-translated] "Placeholder text for Local file or Camera"
    fileOrPhotoPlaceholder: "Zástupný text pro místní soubor nebo fotoaparát",
    // [Auto-translated] "Rating icon"
    rateType: "Ikona hodnocení",
    // [Auto-translated] "Ex.: https://api.example.com/books"
    url_placeholder: "Př.: https://api.example.com/books",
    // [Auto-translated] "Ex.: categories.fiction"
    path_placeholder: "Př.: categories.fiction",
    // [Auto-translated] "Ex.: a)"
    questionStartIndex_placeholder: "Př.: a)",
    // [Auto-translated] "Ex.: 6in"
    width_placeholder: "Př.: 6in",
    // [Auto-translated] "Ex.: 600px"
    minWidth_placeholder: "Př.: 600px",
    // [Auto-translated] "Ex.: 50%"
    maxWidth_placeholder: "Př.: 50%",
    // "auto"
    imageHeight_placeholder: "automaticky",
    // "auto"
    imageWidth_placeholder: "automaticky",
    // [Auto-translated] "Ex.: 100px"
    itemTitleWidth_placeholder: "Příklad: 100px",
    theme: {
      // [Auto-translated] "Theme"
      themeName: "Téma",
      // [Auto-translated] "Question appearance"
      isPanelless: "Vzhled otázky",
      // [Auto-translated] "Background and corner radius"
      editorPanel: "Pozadí a poloměr rohů",
      // [Auto-translated] "Background and corner radius"
      questionPanel: "Pozadí a poloměr rohů",
      // [Auto-translated] "Accent color"
      primaryColor: "Barva zvýraznění",
      // [Auto-translated] "Panel and question box opacity"
      panelBackgroundTransparency: "Neprůhlednost panelu a přihrádky na otázky",
      // [Auto-translated] "Input element opacity"
      questionBackgroundTransparency: "Krytí vstupního prvku",
      // [Auto-translated] "Survey font size"
      fontSize: "Velikost písma průzkumu",
      // [Auto-translated] "Survey scale factor"
      scale: "Faktor měřítka průzkumu",
      // [Auto-translated] "Corner radius"
      cornerRadius: "Poloměr rohu",
      // [Auto-translated] "Advanced mode"
      advancedMode: "Pokročilý režim",
      // [Auto-translated] "Title font"
      pageTitle: "Písmo nadpisu",
      // [Auto-translated] "Description font"
      pageDescription: "Popisné písmo",
      // [Auto-translated] "Title font"
      questionTitle: "Písmo nadpisu",
      // [Auto-translated] "Description font"
      questionDescription: "Popisné písmo",
      // [Auto-translated] "Font"
      editorFont: "Písmo",
      // [Auto-translated] "Opacity"
      backgroundOpacity: "Neprůhlednost", // Auto-generated string
      // [Auto-translated] "Survey font family"
      "--sjs-font-family": "Rodina písma Survey",
      // [Auto-translated] "Background color"
      "--sjs-general-backcolor-dim": "Barva pozadí",
      // [Auto-translated] "Accent background colors"
      "--sjs-primary-backcolor": "Zvýraznění barev pozadí",
      // [Auto-translated] "Accent foreground colors"
      "--sjs-primary-forecolor": "Zvýraznění barev popředí",
      // [Auto-translated] "Error message colors"
      "--sjs-special-red": "Barvy chybové zprávy",
      // [Auto-translated] "Shadow effects"
      "--sjs-shadow-small": "Stínové efekty",
      // [Auto-translated] "Shadow effects"
      "--sjs-shadow-inner": "Stínové efekty",
      // [Auto-translated] "Colors"
      "--sjs-border-default": "Barvy"
    },
    "header@header": {
      // [Auto-translated] "View"
      headerView: "Pohled",
      // [Auto-translated] "Logo alignment"
      logoPosition: "Zarovnání loga",
      // [Auto-translated] "Survey title font"
      surveyTitle: "Písmo názvu průzkumu",
      // [Auto-translated] "Survey description font"
      surveyDescription: "Písmo popisu průzkumu",
      // [Auto-translated] "Survey title font"
      headerTitle: "Písmo názvu průzkumu",
      // [Auto-translated] "Survey description font"
      headerDescription: "Písmo popisu průzkumu",
      // [Auto-translated] "Content area width"
      inheritWidthFrom: "Šířka oblasti obsahu",
      // [Auto-translated] "Text width"
      textAreaWidth: "Šířka textu",
      // [Auto-translated] "Background color"
      backgroundColorSwitch: "Barva pozadí",
      // [Auto-translated] "Background image"
      backgroundImage: "Obrázek na pozadí",
      // [Auto-translated] "Opacity"
      backgroundImageOpacity: "Neprůhlednost",
      // [Auto-translated] "Overlap"
      overlapEnabled: "Překrytí",
      // [Auto-translated] "Logo alignment"
      logoPositionX: "Zarovnání loga",
      // [Auto-translated] "Survey title alignment"
      titlePositionX: "Zarovnání názvu průzkumu",
      // [Auto-translated] "Survey description alignment"
      descriptionPositionX: "Zarovnání popisu průzkumu"
    }
  },
  // Property values
  pv: {
    // "true"
    "true": "pravda",
    // "false"
    "false": "nepravda",
    // [Auto-translated] "Local file"
    file: "Místní soubor",
    // [Auto-translated] "Camera"
    camera: "Fotoaparát",
    // [Auto-translated] "Local file or Camera"
    "file-camera": "Místní soubor nebo fotoaparát",
    // "Inherit"
    inherit: "zdědit",
    // "Visible"
    show: "zobrazit",
    // "Hidden"
    hide: "skrýt",
    // "Inherit"
    default: "výchozí",
    // "Initial"
    initial: "úvodní",
    // "Random"
    random: "náhodný",
    // "Collapsed"
    collapsed: "sbalený",
    // "Expanded"
    expanded: "rozbalený",
    // "None"
    none: "žádný",
    // "Ascending"
    asc: "vzestupný",
    // "Descending"
    desc: "sestupný",
    // "Indeterminate"
    indeterminate: "neurčitý",
    // [Auto-translated] "Selected"
    selected: "Vybraný",
    // [Auto-translated] "Unselected"
    unselected: "Nezvolený",
    // "decimal"
    decimal: "desetinné číslo",
    // "currency"
    currency: "měna",
    // "percent"
    percent: "procento",
    // "First panel is expanded"
    firstExpanded: "firstExpanded",
    // "Hide question numbers"
    off: "vypnout",
    // "List"
    list: "seznam",
    // [Auto-translated] "Carousel"
    carousel: "Kolotoč",
    // "Tabs"
    tab: "Záložky",
    // "Panel navigator + Progress bar at the top"
    progressTop: "progressTop",
    // "Panel navigator + Progress bar at the bottom"
    progressBottom: "progressBottom",
    // "Panel navigator + Progress bar at the top and bottom"
    progressTopBottom: "progressTopBottom",
    // "Horizontal"
    horizontal: "horizontální",
    // "Vertical"
    vertical: "vertikální",
    // "Top"
    top: "nahoře",
    // "Bottom"
    bottom: "dole",
    // "Top and bottom"
    topBottom: "nahoře a dole",
    // "Both"
    both: "obě",
    // "Left"
    left: "vlevo",
    // "Right"
    right: "Pravá",
    // [Auto-translated] "Center"
    center: "Střed",
    // [Auto-translated] "Left and right"
    leftRight: "Vlevo a vpravo",
    // [Auto-translated] "Middle"
    middle: "Prostřední",
    // "color"
    color: "barva",
    // "date"
    date: "datum",
    // "datetime"
    datetime: "datum a čas",
    // "datetime-local"
    "datetime-local": "datum a čas - lokální",
    // "email"
    email: "email",
    // "month"
    month: "měsíc",
    // "number"
    number: "číslo",
    // "password"
    password: "heslo",
    // "range"
    range: "rozsah",
    // "tel"
    tel: "tel",
    // "text"
    text: "text",
    // "time"
    time: "čas",
    // "url"
    url: "url",
    // "week"
    week: "týden",
    // "Hidden"
    hidden: "skrytý",
    // "Editable"
    edit: "upravit",
    // "Read-only"
    display: "zobrazit",
    // [Auto-translated] "Contain"
    contain: "Obsahovat",
    // [Auto-translated] "Cover"
    cover: "Krýt",
    // [Auto-translated] "Fill"
    fill: "Vyplnit",
    // [Auto-translated] "Next"
    next: "Další",
    // [Auto-translated] "Last"
    last: "Poslední",
    // "Upon survey completion"
    onComplete: "onComplete",
    // "When question gets hidden"
    onHidden: "onHidden",
    // "When question or its panel/page gets hidden"
    onHiddenContainer: "Když se otázka nebo její panel/stránka skryje",
    clearInvisibleValues: {
      // "Never"
      none: "Nikdy"
    },
    clearIfInvisible: {
      // [Auto-translated] "Never"
      none: "Nikdy"
    },
    // [Auto-translated] "Radio Buttons"
    radio: "Přepínače",
    inputType: {
      // "Color"
      color: "Barva",
      // "Date"
      date: "Datum",
      // "Date and Time"
      "datetime-local": "Datum a čas",
      // "Email"
      email: "Email",
      // "Month"
      month: "Měsíc",
      // "Number"
      number: "Číslo",
      // "Password"
      password: "Heslo",
      // "Range"
      range: "Rozsah",
      // "Phone Number"
      tel: "Telefon",
      // "Text"
      text: "Text",
      // "Time"
      time: "Čas",
      // "URL"
      url: "URL",
      // "Week"
      week: "Týden"
    },
    sliderType: {
      // [Auto-translated] "Single-Value"
      single: "Jedna hodnota",
      // [Auto-translated] "Range"
      range: "Rozmezí"
    },
    tooltipVisibility: {
      // [Auto-translated] "Auto"
      auto: "Auto",
      // [Auto-translated] "Always"
      always: "Vždy",
      // [Auto-translated] "Never"
      never: "Nikdy"
    },
    notificationType: {
      // [Auto-translated] "Error"
      error: "Chyba",
      // [Auto-translated] "Warning"
      warning: "Varování",
      // [Auto-translated] "Informational"
      info: "Informační"
    },
    autocomplete: {
      // [Auto-translated] "Full Name"
      name: "Celé jméno",
      // [Auto-translated] "Prefix"
      "honorific-prefix": "Předpona",
      // [Auto-translated] "First Name"
      "given-name": "Křestní jméno",
      // [Auto-translated] "Middle Name"
      "additional-name": "Druhé jméno",
      // [Auto-translated] "Last Name"
      "family-name": "Příjmení",
      // [Auto-translated] "Suffix"
      "honorific-suffix": "Přípona",
      // [Auto-translated] "Nickname"
      nickname: "Přezdívka",
      // [Auto-translated] "Job Title"
      "organization-title": "Pracovní pozice",
      // [Auto-translated] "User Name"
      username: "Uživatelské jméno",
      // [Auto-translated] "New Password"
      "new-password": "Nové heslo",
      // [Auto-translated] "Current Password"
      "current-password": "Aktuální heslo",
      // [Auto-translated] "Organization Name"
      organization: "Název organizace",
      // [Auto-translated] "Full Street Address"
      "street-address": "Úplná adresa",
      // [Auto-translated] "Address Line 1"
      "address-line1": "Řádek adresy 1",
      // [Auto-translated] "Address Line 2"
      "address-line2": "Řádek adresy 2",
      // [Auto-translated] "Address Line 3"
      "address-line3": "Řádek adresy 3",
      // [Auto-translated] "Level 4 Address"
      "address-level4": "Adresa úrovně 4",
      // [Auto-translated] "Level 3 Address"
      "address-level3": "Adresa úrovně 3",
      // [Auto-translated] "Level 2 Address"
      "address-level2": "Adresa úrovně 2",
      // [Auto-translated] "Level 1 Address"
      "address-level1": "Adresa úrovně 1",
      // [Auto-translated] "Country Code"
      country: "Kód země",
      // [Auto-translated] "Country Name"
      "country-name": "Název země",
      // [Auto-translated] "Postal Code"
      "postal-code": "Psč",
      // [Auto-translated] "Cardholder Name"
      "cc-name": "Jméno držitele karty",
      // [Auto-translated] "Cardholder First Name"
      "cc-given-name": "Křestní jméno držitele karty",
      // [Auto-translated] "Cardholder Middle Name"
      "cc-additional-name": "Prostřední jméno držitele karty",
      // [Auto-translated] "Cardholder Last Name"
      "cc-family-name": "Příjmení držitele karty",
      // [Auto-translated] "Credit Card Number"
      "cc-number": "Číslo kreditní karty",
      // [Auto-translated] "Expiration Date"
      "cc-exp": "Datum vypršení",
      // [Auto-translated] "Expiration Month"
      "cc-exp-month": "Měsíc vypršení platnosti",
      // [Auto-translated] "Expiration Year"
      "cc-exp-year": "Rok vypršení platnosti",
      // [Auto-translated] "Card Security Code"
      "cc-csc": "Bezpečnostní kód karty",
      // [Auto-translated] "Credit Card Type"
      "cc-type": "Typ kreditní karty",
      // [Auto-translated] "Transaction Currency"
      "transaction-currency": "Měna transakce",
      // [Auto-translated] "Transaction Amount"
      "transaction-amount": "Částka transakce",
      // [Auto-translated] "Preferred Language"
      language: "Preferovaný jazyk",
      // [Auto-translated] "Birthday"
      bday: "Narozeniny",
      // [Auto-translated] "Birthday Day"
      "bday-day": "Den narozenin",
      // [Auto-translated] "Birthday Month"
      "bday-month": "Měsíc narozenin",
      // [Auto-translated] "Birthday Year"
      "bday-year": "Narozeniny Rok",
      // [Auto-translated] "Gender"
      sex: "Pohlaví",
      // [Auto-translated] "Website URL"
      url: "Adresa URL webu",
      // [Auto-translated] "Profile Photo"
      photo: "Profilová fotografie",
      // [Auto-translated] "Telephone Number"
      tel: "Telefonní číslo",
      // [Auto-translated] "Country Code for Phone"
      "tel-country-code": "Předvolba země pro telefon",
      // [Auto-translated] "National Telephone Number"
      "tel-national": "Národní telefonní číslo",
      // [Auto-translated] "Area Code"
      "tel-area-code": "Směrové číslo",
      // [Auto-translated] "Local Phone Number"
      "tel-local": "Místní telefonní číslo",
      // [Auto-translated] "Local Phone Prefix"
      "tel-local-prefix": "Předvolba místního telefonu",
      // [Auto-translated] "Local Phone Suffix"
      "tel-local-suffix": "Přípona místního telefonu",
      // [Auto-translated] "Phone Extension"
      "tel-extension": "Telefonní linka",
      // [Auto-translated] "Email Address"
      email: "E-mailová adresa",
      // [Auto-translated] "Instant Messaging Protocol"
      impp: "Protokol pro rychlé zasílání zpráv"
    },
    maskType: {
      // [Auto-translated] "None"
      none: "Žádný",
      // [Auto-translated] "Pattern"
      pattern: "Vzor",
      // [Auto-translated] "Numeric"
      numeric: "Číselný",
      // [Auto-translated] "Date and Time"
      datetime: "Datum a čas",
      // [Auto-translated] "Currency"
      currency: "Měna"
    },
    inputTextAlignment: {
      // [Auto-translated] "Auto"
      auto: "Auto",
      // [Auto-translated] "Left"
      left: "Vlevo",
      // [Auto-translated] "Right"
      right: "Vpravo"
    },
    // "All"
    all: "vše",
    // "Page"
    page: "stránka",
    // "Survey"
    survey: "průzkum",
    // "When switching to the next page"
    onNextPage: "onNextPage",
    // "After an answer is changed"
    onValueChanged: "onValueChanged",
    // "Before an answer is changed"
    onValueChanging: "onValueChanging",
    questionsOnPageMode: {
      // [Auto-translated] "Original structure"
      standard: "Původní struktura",
      // [Auto-translated] "Show all questions on one page"
      singlePage: "Zobrazit všechny otázky na jedné stránce",
      // [Auto-translated] "Show single question per page"
      questionPerPage: "Zobrazit jednu otázku na stránku",
      // [Auto-translated] "Show single input field per page"
      inputPerPage: "Zobrazit jedno vstupní pole na stránku"
    },
    // "No preview"
    noPreview: "bez náhledu",
    // "Show all questions"
    showAllQuestions: "zobrazit náhled se všemi otázkami",
    // "Show answered questions only"
    showAnsweredQuestions: "zobrazit náhled se zodpovězenými otázkami",
    // [Auto-translated] "Show all questions"
    allQuestions: "Zobrazit všechny otázky",
    // [Auto-translated] "Show answered questions only"
    answeredQuestions: "Zobrazit pouze zodpovězené otázky",
    // "Completed pages"
    pages: "stránky",
    // "Answered questions"
    questions: "otázky",
    // "Answered required questions"
    requiredQuestions: "Odpovězené povinné otázky",
    // "Valid answers"
    correctQuestions: "správné otázky",
    // "Completed pages (button UI)"
    buttons: "tlačítka",
    // "Under the input field"
    underInput: "pod vstupem",
    // "Under the question title"
    underTitle: "pod nadpisem",
    // "On lost focus"
    onBlur: "Při ztrátě zvýraznění",
    // "While typing"
    onTyping: "Během psaní",
    // "Under the row"
    underRow: "Pod řádkem",
    // "Under the row, display one section only"
    underRowSingle: "Pod řádkem, pouze jeden panel je viditelný",
    // "Auto"
    auto: "Auto",
    showNavigationButtons: {
      // "Hidden"
      none: "Skrytý"
    },
    timerInfoMode: {
      // "Both"
      combined: "Obě"
    },
    addRowButtonLocation: {
      // "Based on matrix layout"
      default: "Závisí na rozložení matice"
    },
    panelsState: {
      // "Locked"
      default: "Uživatelé nemohou rozbalit nebo sbalit panely",
      // "Collapse all"
      collapsed: "Všechny panely jsou sbaleny",
      // "Expand all"
      expanded: "Všechny panely jsou rozbaleny",
      // [Auto-translated] "First expanded"
      firstExpanded: "První rozšířeno"
    },
    widthMode: {
      // "Static"
      static: "Statický",
      // "Responsive"
      responsive: "Responzivní"
    },
    contentMode: {
      // "Image"
      image: "Obrázek",
      // "Video"
      video: "Video",
      // "YouTube"
      youtube: "YouTube"
    },
    displayMode: {
      // "Buttons"
      buttons: "Tlačítka",
      // "Dropdown"
      dropdown: "Rozbalovací nabídka"
    },
    rateColorMode: {
      // "Default"
      default: "Výchozí",
      // [Auto-translated] "Scale"
      scale: "Škála"
    },
    scaleColorMode: {
      // [Auto-translated] "Monochrome"
      monochrome: "Monochromatický",
      // [Auto-translated] "Colored"
      colored: "Barevný"
    },
    autoGenerate: {
      // "Auto-generate"
      "true": "Generovat",
      // "Manual"
      "false": "Vložit ručně"
    },
    rateType: {
      // "Labels"
      labels: "Popisky",
      // "Stars"
      stars: "Hvězdy",
      // "Smileys"
      smileys: "Smajlíci"
    },
    state: {
      // [Auto-translated] "Locked"
      default: "Zamčený"
    },
    showQuestionNumbers: {
      // [Auto-translated] "Auto-numbering"
      default: "Automatické číslování",
      // [Auto-translated] "Auto-numbering"
      on: "Automatické číslování",
      // [Auto-translated] "Reset on each page"
      onPage: "Resetovat na každé stránce",
      // [Auto-translated] "Reset on each panel"
      onpanel: "Resetovat na každém panelu",
      // [Auto-translated] "Reset on each panel"
      onPanel: "Resetovat na každém panelu",
      // [Auto-translated] "Recursive numbering"
      recursive: "Rekurzivní číslování",
      // [Auto-translated] "Continue across the survey"
      onSurvey: "Pokračovat v průzkumu",
      // [Auto-translated] "No numbering"
      off: "Žádné číslování"
    },
    descriptionLocation: {
      // [Auto-translated] "Under the question title"
      underTitle: "Pod nadpisem otázky",
      // [Auto-translated] "Under the input field"
      underInput: "Pod vstupním polem"
    },
    selectToRankAreasLayout: {
      // [Auto-translated] "Next to choices"
      horizontal: "Vedle voleb",
      // [Auto-translated] "Above choices"
      vertical: "Výše uvedené možnosti"
    },
    displayStyle: {
      // [Auto-translated] "Decimal"
      decimal: "Desetinný",
      // [Auto-translated] "Currency"
      currency: "Měna",
      // [Auto-translated] "Percentage"
      percent: "Procento",
      // [Auto-translated] "Date"
      date: "Rande"
    },
    totalDisplayStyle: {
      // [Auto-translated] "Decimal"
      decimal: "Desetinný",
      // [Auto-translated] "Currency"
      currency: "Měna",
      // [Auto-translated] "Percentage"
      percent: "Procento",
      // [Auto-translated] "Date"
      date: "Rande"
    },
    rowOrder: {
      // [Auto-translated] "Original"
      initial: "Původní"
    },
    questionOrder: {
      // [Auto-translated] "Original"
      initial: "Původní"
    },
    progressBarLocation: {
      // [Auto-translated] "Top"
      top: "Vrchol",
      // [Auto-translated] "Bottom"
      bottom: "Dno",
      // [Auto-translated] "Top and bottom"
      topbottom: "Nahoře a dole",
      // [Auto-translated] "Above the header"
      aboveheader: "Nad záhlavím",
      // [Auto-translated] "Below the header"
      belowheader: "Pod záhlavím",
      // [Auto-translated] "Hidden"
      off: "Schovaný"
    },
    // [Auto-translated] "Sum"
    sum: "Součet",
    // [Auto-translated] "Count"
    count: "Počítat",
    // [Auto-translated] "Min"
    min: "Min",
    // [Auto-translated] "Max"
    max: "Max",
    // [Auto-translated] "Avg"
    avg: "Průměr",
    searchMode: {
      // [Auto-translated] "Contains"
      contains: "Obsahuje",
      // [Auto-translated] "Starts with"
      startsWith: "Začíná na"
    },
    backgroundImageFit: {
      // [Auto-translated] "Auto"
      auto: "Auto",
      // [Auto-translated] "Cover"
      cover: "Krýt",
      // [Auto-translated] "Contain"
      contain: "Obsahovat",
      // [Auto-translated] "Stretch"
      fill: "Natáhnout",
      // [Auto-translated] "Tile"
      tile: "Dlaždice"
    },
    backgroundImageAttachment: {
      // [Auto-translated] "Fixed"
      fixed: "Stabilní",
      // [Auto-translated] "Scroll"
      scroll: "Svitek"
    },
    headerView: {
      // [Auto-translated] "Basic"
      basic: "Základní",
      // [Auto-translated] "Advanced"
      advanced: "Pokročilý"
    },
    inheritWidthFrom: {
      // [Auto-translated] "Same as survey"
      survey: "Stejné jako průzkum",
      // [Auto-translated] "Same as container"
      container: "Stejné jako kontejner"
    },
    backgroundColorSwitch: {
      // [Auto-translated] "None"
      none: "Žádný",
      // [Auto-translated] "Accent color"
      accentColor: "Barva zvýraznění",
      // [Auto-translated] "Custom"
      custom: "Zvyk"
    },
    colorPalette: {
      // [Auto-translated] "Light"
      light: "Světlo",
      // [Auto-translated] "Dark"
      dark: "Temný"
    },
    isPanelless: {
      // [Auto-translated] "Default"
      "false": "Výchozí",
      // [Auto-translated] "Without Panels"
      "true": "Bez panelů"
    },
    progressBarInheritWidthFrom: {
      // [Auto-translated] "Same as survey"
      survey: "Stejné jako v průzkumu",
      // [Auto-translated] "Same as container"
      container: "Stejné jako u kontejneru"
    }
  },
  // Operators
  op: {
    // "Empty"
    empty: "je prázdný",
    // "Not empty"
    notempty: "není prázdný",
    // "Equals"
    equal: "se rovná",
    // "Does not equal"
    notequal: "se nerovná",
    // "Contains"
    contains: "obsahuje",
    // "Does not contain"
    notcontains: "neobsahuje",
    // "Any of"
    anyof: "žádný z",
    // "All of"
    allof: "všechny",
    // "Greater than"
    greater: "větší",
    // "Less than"
    less: "nižší",
    // "Greater than or equal to"
    greaterorequal: "větší nebo se rovná",
    // "Less than or equal to"
    lessorequal: "nižší nebo se rovná",
    // "and"
    and: "a zároveň",
    // "or"
    or: "nebo"
  },
  // Embed window
  ew: {
    // "Use Angular version"
    angular: "Použít verzi Angular",
    // "Use jQuery version"
    jquery: "Použít verzi jQuery",
    // "Use Knockout version"
    knockout: "Použít verzi Knockout",
    // "Use React version"
    react: "Použít verzi React",
    // "Use Vue version"
    vue: "Použít verzi Vue",
    // "For bootstrap framework"
    bootstrap: "Pro framework bootstrap",
    // "Modern theme"
    modern: "Moderní motiv",
    // "Default theme"
    default: "Výchozí motiv",
    // "Orange theme"
    orange: "Oranžový motiv",
    // "Darkblue theme"
    darkblue: "Tmavěmodrý motiv",
    // "Darkrose theme"
    darkrose: "Tmavěrůžový motiv",
    // "Stone theme"
    stone: "Kamenný motiv",
    // "Winter theme"
    winter: "Zimní motiv",
    // "Winter-Stone theme"
    winterstone: "Téma zima-kámen",
    // "Show survey on a page"
    showOnPage: "Zobrazit průzkum na stránce",
    // "Show survey in a window"
    showInWindow: "Zobrazit průzkum v okně",
    // "Load Survey JSON from server"
    loadFromServer: "Načíst průzkum JSON ze serveru",
    // "Scripts and styles"
    titleScript: "Skripty a styly",
    // "HTML"
    titleHtml: "HTML",
    // "JavaScript"
    titleJavaScript: "JavaScript"
  },
  // Preview (Survey)
  ts: {
    // "Select the page to test it"
    selectPage: "Vyberte stránku a otestujte ji:",
    // "Show invisible elements"
    showInvisibleElements: "Zobrazit neviditelné prvky",
    // "Hide invisible elements"
    hideInvisibleElements: "Skrýt neviditelné prvky",
    // [Auto-translated] "Previous"
    prevPage: "Předchozí",
    // [Auto-translated] "Next"
    nextPage: "Další"
  },
  validators: {
    // "Answer count"
    answercountvalidator: "počet odpovědí",
    // "Email"
    emailvalidator: "e-mail",
    // "Expression"
    expressionvalidator: "výraz",
    // "Number"
    numericvalidator: "Číslo",
    // "Regex"
    regexvalidator: "regex",
    // "Text"
    textvalidator: "text"
  },
  triggers: {
    // "Complete survey"
    completetrigger: "dokončit průzkum",
    // "Set answer"
    setvaluetrigger: "nastavit hodnotu",
    // "Copy answer"
    copyvaluetrigger: "zkopírovat hodnotu",
    // "Skip to question"
    skiptrigger: "přeskočit na otázku",
    // "Run expression"
    runexpressiontrigger: "spustit výraz",
    // "change visibility (deprecated)"
    visibletrigger: "změnit viditelnost (zastaralé)"
  },
  peplaceholder: {
    patternmask: {
      // "Ex.: +1(999)-999-99-99"
      pattern: "Př.: +1(999)-999-99-99"
    },
    datetimemask: {
      // "Ex.: mm/dd/yyyy HH:MM:ss"
      pattern: "Př.: dd/mm/rrrr"
    },
    currencymask: {
      // "Ex.: $"
      prefix: "Př.: $",
      // "Ex.: USD"
      suffix: "Př.: USD"
    },
    panelbase: {
      // [Auto-translated] "Ex.: 200px"
      questionTitleWidth: "Př.: 200px"
    },
    panellayoutcolumn: {
      // "Ex.: 30%"
      effectiveWidth: "Př.: 30%",
      // "Ex.: 200px"
      questionTitleWidth: "Př.: 200px"
    }
  },
  pehelp: {
    panel: {
      // "A panel ID that is not visible to respondents."
      name: "ID panelu, které není viditelné pro respondenty.",
      // [Auto-translated] "Type a panel subtitle."
      description: "Zadejte podnadpis panelu.",
      // "Use the magic wand icon to set a conditional rule that determines panel visibility."
      visibleIf: "Pomocí ikony kouzelné hůlky můžete nastavit podmíněné pravidlo, které určuje viditelnost panelu.",
      // [Auto-translated] "Use the magic wand icon to set a conditional rule that disables the read-only mode for the panel."
      enableIf: "Pomocí ikony kouzelné hůlky nastavte podmíněné pravidlo, které pro panel zakáže režim jen pro čtení.",
      // "Use the magic wand icon to set a conditional rule that prevents survey submission unless at least one nested question has an answer."
      requiredIf: "Pomocí ikony kouzelné hůlky nastavte podmíněné pravidlo, které zabrání odeslání průzkumu, pokud alespoň jedna vnořená otázka nemá odpověď.",
      // [Auto-translated] "Applies to all questions within this panel. When set to \"Hidden\", it also hides question descriptions. If you want to override this setting, define title alignment rules for individual questions. The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Top\" by default). "
      questionTitleLocation: "Platí pro všechny otázky v tomto panelu. Pokud je nastavena možnost \"Skrytá\", skryje také popisy otázek. Pokud chcete toto nastavení přepsat, definujte pravidla zarovnání nadpisů pro jednotlivé otázky. Volba \"Zdědit\" použije nastavení na úrovni stránky (pokud je nastaveno) nebo na úrovni průzkumu (ve výchozím nastavení \"nahoře\"). ",
      // [Auto-translated] "Sets consistent width for question titles when they are aligned to the left of their question boxes. Accepts CSS values (px, %, in, pt, etc.)."
      questionTitleWidth: "Nastaví konzistentní šířku názvů otázek, pokud jsou zarovnány nalevo od polí s otázkami. Přijímá hodnoty CSS (px, %, in, pt atd.).",
      // "Sets the location of an error message in relation to all questions within the panel. The \"Inherit\" option applies the page-level (if set) or survey-level setting."
      questionErrorLocation: "Nastaví umístění chybové zprávy ve vztahu ke všem otázkám v panelu. Možnost \"Zdědit\" použije nastavení na úrovni stránky (pokud je nastaveno) nebo na úrovni průzkumu.",
      // [Auto-translated] "Keeps the original order of questions or randomizes them. The \"Inherit\" option applies the page-level (if set) or survey-level setting."
      questionOrder: "Zachová původní pořadí otázek nebo je náhodně rozdělí. Volba \"Zdědit\" použije nastavení na úrovni stránky (pokud je nastaveno) nebo na úrovni průzkumu.",
      // "Repositions the panel to the end of a selected page."
      page: "Přemístí panel na konec vybrané stránky.",
      // [Auto-translated] "Adds space or margin between the panel content and the left border of the panel box."
      innerIndent: "Přidá mezeru nebo okraj mezi obsah panelu a levý okraj rámečku panelu.",
      // "Unselect to display the panel in one line with the previous question or panel. The setting doesn't apply if the panel is the first element in your form."
      startWithNewLine: "Zrušte výběr, chcete-li panel zobrazit v jednom řádku s předchozí otázkou nebo panelem. Nastavení se nepoužije, pokud je panel prvním prvkem ve formuláři.",
      // "Choose from: \"Expanded\" - the panel is displayed in full and can be collapsed; \"Collapsed\" - the panel displays only the title and description and can be expanded; \"Locked\" - the panel is displayed in full and cannot be collapsed."
      state: "Vyberte si z: \"Rozbalený\" - panel se zobrazí celý a lze jej sbalit; \"Sbaleno\" - panel zobrazuje pouze název a popis a lze jej rozbalit; \"Zamčeno\" - obraz je zobrazen celý a nelze jej sbalit.",
      // [Auto-translated] "Sets the width of the panel in proportion to other survey elements in the same line. Accepts CSS values (px, %, in, pt, etc.)."
      width: "Nastaví šířku panelu v poměru k ostatním elementům zaměření ve stejné linii. Přijímá hodnoty CSS (px, %, in, pt, atd.).",
      // [Auto-translated] "Assigns numbers to questions nested within this panel."
      showQuestionNumbers: "Přiřadí čísla otázkám vnořeným v tomto panelu.",
      // [Auto-translated] "Specifies how many columns this panel spans within the grid layout."
      effectiveColSpan: "Určuje, kolik sloupců se tento panel rozprostírá v rozvržení mřížky.",
      // [Auto-translated] "This table lets you configure each grid column within the panel. It automatically sets the width percentage for each column based on the maximum number of elements in a row. To customize the grid layout, manually adjust these values and define the title width for all questions in each column."
      gridLayoutColumns: "Tato tabulka umožňuje konfigurovat jednotlivé sloupce mřížky v panelu. Automaticky nastaví procentuální šířku pro každý sloupec na základě maximálního počtu prvků v řádku. Chcete-li přizpůsobit rozvržení mřížky, upravte tyto hodnoty ručně a definujte šířku nadpisu pro všechny otázky v každém sloupci."
    },
    paneldynamic: {
      // "A panel ID that is not visible to respondents."
      name: "ID panelu, které není viditelné pro respondenty.",
      // "Type a panel subtitle."
      description: "Zadejte titulky panelu.",
      // "Use the magic wand icon to set a conditional rule that determines panel visibility."
      visibleIf: "Pomocí ikony kouzelné hůlky můžete nastavit podmíněné pravidlo, které určuje viditelnost panelu.",
      // [Auto-translated] "Use the magic wand icon to set a conditional rule that disables the read-only mode for the panel."
      enableIf: "Pomocí ikony kouzelné hůlky nastavte podmíněné pravidlo, které pro panel zakáže režim jen pro čtení.",
      // "Use the magic wand icon to set a conditional rule that prevents survey submission unless at least one nested question has an answer."
      requiredIf: "Pomocí ikony kouzelné hůlky nastavte podmíněné pravidlo, které zabrání odeslání průzkumu, pokud alespoň jedna vnořená otázka nemá odpověď.",
      // "Applies to all questions within this dynamic panel. If you want to override this setting, define title alignment rules for individual questions. The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Top\" by default)."
      templateQuestionTitleLocation: "Platí pro všechny otázky v rámci tohoto panelu. Chcete-li toto nastavení přepsat, definujte pravidla zarovnání nadpisů pro jednotlivé otázky. Možnost \"Zdědit\" použije nastavení na úrovni stránky (pokud je nastaveno) nebo na úrovni průzkumu (ve výchozím nastavení \"Nahoře\").",
      // "Sets consistent width for question titles when they are aligned to the left of their question boxes. Accepts CSS values (px, %, in, pt, etc.)."
      templateQuestionTitleWidth: "Nastaví konzistentní šířku názvů otázek, pokud jsou zarovnány vlevo od polí otázek. Přijímá hodnoty CSS (px, %, in, pt, atd.).",
      // "Sets the location of an error message in relation to a question with invalid input. Choose between: \"Top\" - an error text is placed at the top of the question box; \"Bottom\" - an error text is placed at the bottom of the question box. The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Top\" by default)."
      templateErrorLocation: "Nastaví umístění chybové zprávy ve vztahu k otázce s neplatným vstupem. Vyberte si mezi: \"Nahoře\" - text chyby je umístěn v horní části pole s otázkou; \"Bottom\" - text chyby je umístěn ve spodní části pole s otázkou. Možnost \"Zdědit\" použije nastavení na úrovni stránky (pokud je nastaveno) nebo na úrovni průzkumu (ve výchozím nastavení \"Nahoře\").",
      // "Sets the location of an error message in relation to all questions within the panel. The \"Inherit\" option applies the page-level (if set) or survey-level setting."
      errorLocation: "Nastaví umístění chybové zprávy ve vztahu ke všem otázkám v panelu. Možnost \"Zdědit\" použije nastavení na úrovni stránky (pokud je nastaveno) nebo na úrovni průzkumu.",
      // "Repositions the panel to the end of a selected page."
      page: "Přemístí panel na konec vybrané stránky.",
      // [Auto-translated] "Adds space or margin between the panel content and the left border of the panel box."
      indent: "Přidá mezeru nebo okraj mezi obsah panelu a levý okraj rámečku panelu.",
      // "Unselect to display the panel in one line with the previous question or panel. The setting doesn't apply if the panel is the first element in your form."
      startWithNewLine: "Zrušte výběr, chcete-li panel zobrazit v jednom řádku s předchozí otázkou nebo panelem. Nastavení se nepoužije, pokud je panel prvním prvkem ve formuláři.",
      // "Choose from: \"Expanded\" - the panel is displayed in full and can be collapsed; \"Collapsed\" - the panel displays only the title and description and can be expanded; \"Locked\" - the panel is displayed in full and cannot be collapsed."
      state: "Vyberte si z: \"Rozbalený\" - panel se zobrazí celý a lze jej sbalit; \"Sbaleno\" - panel zobrazuje pouze název a popis a lze jej rozbalit; \"Zamčeno\" - obraz je zobrazen celý a nelze jej sbalit.",
      // "Sets the width of the panel in proportion to other survey elements in the same line. Accepts CSS values (px, %, in, pt, etc.)."
      width: "Nastaví šířku panelu v poměru k ostatním prvkům zaměření ve stejném řádku. Přijímá hodnoty CSS (px, %, in, pt atd.).",
      // "Type in a template for entry titles. Use {panelIndex} for the entry's general position and {visiblePanelIndex} for its order among visible entries. Insert these placeholders into the pattern to add automatic numbering."
      templateTitle: "Zadejte šablonu pro dynamické názvy panelů. Použijte {panelIndex} pro obecnou pozici panelu a {visiblePanelIndex} pro jeho pořadí mezi viditelnými panely. Vložením těchto zástupných symbolů do vzorku přidáte automatické číslování.",
      // "Type in a template for tab titles. Use {panelIndex} for an entry's general position and {visiblePanelIndex} for its order among visible entries. Insert these placeholders into the pattern to add automatic numbering."
      templateTabTitle: "Zadejte šablonu pro názvy karet. Použijte {panelIndex} pro obecnou pozici panelu a {visiblePanelIndex} pro jeho pořadí mezi viditelnými panely. Vložením těchto zástupných symbolů do vzorku přidáte automatické číslování.",
      // "A fallback text for tab titles that applies when the tab title pattern doesn't produce a meaningful value."
      tabTitlePlaceholder: "Záložní text pro názvy karet, který se použije, když vzor názvu karty nevytváří smysluplnou hodnotu.",
      // "This setting allows you to control the visibility of individual entries within the dynamic panel. Use the `{panel}` placeholder to reference the current entry in your expression."
      templateVisibleIf: "Toto nastavení umožňuje řídit viditelnost jednotlivých panelů v rámci dynamického panelu. Pomocí zástupného symbolu {panel} můžete odkazovat na aktuální panel ve výrazu.",
      // "This setting is automatically inherited by all questions within this dynamic panel. If you want to override this setting, define title alignment rules for individual questions. The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Top\" by default)."
      titleLocation: "Toto nastavení je automaticky převzato všemi otázkami v tomto panelu. Chcete-li toto nastavení přepsat, definujte pravidla zarovnání nadpisů pro jednotlivé otázky. Možnost \"Zdědit\" použije nastavení na úrovni stránky (pokud je nastaveno) nebo na úrovni průzkumu (ve výchozím nastavení \"Nahoře\").",
      // "The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Under the panel title\" by default)."
      descriptionLocation: "Možnost \"Zdědit\" použije nastavení na úrovni stránky (pokud je nastaveno) nebo na úrovni průzkumu (ve výchozím nastavení \"Pod názvem panelu\").",
      // "Defines the position of a newly added entry. By default, new entries are added to the end. Select \"Next\" to insert a new entry after the current one."
      newPanelPosition: "Definuje polohu nově přidaného panelu. Ve výchozím nastavení se nové panely přidávají na konec. Výběrem možnosti \"Další\" vložíte nový panel za aktuální.",
      // [Auto-translated] "Duplicates answers from the last entry and assigns them to the next added entry."
      copyDefaultValueFromLastEntry: "Duplikuje odpovědi z poslední položky a přiřadí je k další přidané položce.",
      // "Reference a question name to require a user to provide a unique response for this question in each entry."
      keyName: "Odkazujte na název otázky, chcete-li vyžadovat, aby uživatel na tuto otázku v každém panelu poskytl jedinečnou odpověď.",
      // [Auto-translated] "Triggers a confirmation prompt before removing an entry."
      confirmDelete: "Spustí výzvu k potvrzení před odstraněním položky."
    },
    matrixdynamic: {
      // [Auto-translated] "Triggers a confirmation prompt before removing a row."
      confirmDelete: "Spustí výzvu k potvrzení před odstraněním řádku.",
      // [Auto-translated] "Automatically expands the detail section when a new row is added to the matrix."
      detailPanelShowOnAdding: "Automaticky rozbalí podrobnou část, když je do matice přidán nový řádek."
    },
    // "Duplicates answers from the last row and assigns them to the next added dynamic row."
    copyDefaultValueFromLastEntry: "Duplikuje odpovědi z posledního řádku a přiřadí je k dalšímu přidanému dynamickému řádku.",
    // [Auto-translated] "This setting allows you to assign a default answer value based on an expression. The expression can include basic calculations - `{q1_id} + {q2_id}`, Boolean expressions, such as `{age} > 60`, and functions: `iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, etc. The value determined by this expression serves as the initial default value that can be overridden by a respondent's manual input."
    defaultValueExpression: "Toto nastavení umožňuje přiřadit výchozí hodnotu odpovědi na základě výrazu. Výraz může obsahovat základní výpočty - '{q1_id} + {q2_id}', logické výrazy, například '{age} > 60', a funkce: 'iif()', 'today()', 'age()', 'min()', 'max()', 'avg()' atd. Hodnota určená tímto výrazem slouží jako počáteční výchozí hodnota, kterou lze přepsat ručním zadáním respondenta.",
    // "Use the magic wand icon to set a conditional rule that determines when a respondent's input is reset to the value based on the \"Default value expression\" or \"Set value expression\" or to the \"Default answer\" value (if either is set)."
    resetValueIf: "Pomocí ikony kouzelné hůlky můžete nastavit podmíněné pravidlo, které určuje, kdy se vstup respondenta resetuje na hodnotu na základě \"Výrazu výchozí hodnoty\" nebo \"Výrazu nastavit hodnotu\" nebo na hodnotu \"Výchozí odpověď\" (pokud je nastavena kterákoli z nich).",
    // "Use the magic wand icon to set a conditional rule that determines when to run the \"Set value expression\" and dynamically assign the resulting value as a response."
    setValueIf: "Pomocí ikony kouzelné hůlky můžete nastavit podmíněné pravidlo, které určuje, kdy se má spustit výraz \"Nastavit hodnotu\", a dynamicky přiřadit výslednou hodnotu jako odpověď.",
    // "Specify an expression that defines the value to be set when the conditions in the \"Set value if\" rule are met. The expression can include basic calculations - `{q1_id} + {q2_id}`, Boolean expressions, such as `{age} > 60`, and functions: `iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, etc. The value determined by this expression can be overridden by a respondent's manual input."
    setValueExpression: "Zadejte výraz, který definuje hodnotu, která má být nastavena, když jsou splněny podmínky v pravidle \"Nastavit hodnotu, pokud\". Výraz může obsahovat základní výpočty - '{q1_id} + {q2_id}', logické výrazy, například '{age} > 60', a funkce: 'iif()', 'today()', 'age()', 'min()', 'max()', 'avg()' atd. Hodnota určená tímto výrazem může být přepsána ručním zadáním respondenta.",
    // "Survey Creator allows you to manually adjust the inline widths of form elements to control the layout. If this doesn't produce the desired outcome, you can enable the grid layout, which structures form elements using a column-based system. To configure layout columns, select a page or panel and use the \"Question Settings\" → \"Grid columns\" table. To adjust how many columns a question spans, select it and set the desired value in the \"Layout\" → \"Column span\" field."
    gridLayoutEnabled: "Aplikace Survey Creator umožňuje ručně upravit šířky vložených prvků formuláře a řídit tak rozvržení. Pokud to nevede k požadovanému výsledku, můžete zapnout rozvržení mřížky, které struktury tvoří elementy pomocí sloupcového systému. Chcete-li konfigurovat sloupce rozvržení, vyberte stránku nebo panel a použijte tabulku \"Nastavení otázek\" → \"Sloupce mřížky\". Chcete-li upravit, kolik sloupců otázka zabírá, vyberte ji a nastavte požadovanou hodnotu v poli \"Rozvržení\" → \"Rozpětí sloupců\".",
    question: {
      // "A question ID that is not visible to respondents."
      name: "ID otázky, které respondenti nevidí.",
      // "Type a question subtitle."
      description: "Zadejte podnadpis otázky.",
      // "Use the magic wand icon to set a conditional rule that determines question visibility."
      visibleIf: "Pomocí ikony kouzelné hůlky můžete nastavit podmíněné pravidlo, které určuje viditelnost otázky.",
      // [Auto-translated] "Use the magic wand icon to set a conditional rule that disables the read-only mode for the question."
      enableIf: "Pomocí ikony kouzelné hůlky nastavte podmíněné pravidlo, které pro otázku zakáže režim jen pro čtení.",
      // "Use the magic wand icon to set a conditional rule that prevents survey advancing or submission unless the question received an answer."
      requiredIf: "Pomocí ikony kouzelné hůlky můžete nastavit podmíněné pravidlo, které zabrání postupu nebo odeslání průzkumu, pokud otázka neobdržela odpověď.",
      // [Auto-translated] "Unselect to display the question in one line with the previous question or panel. The setting doesn't apply if the question is the first element in your form."
      startWithNewLine: "Zrušte výběr, chcete-li otázku zobrazit v jednom řádku s předchozí otázkou nebo panelem. Nastavení se nepoužije, pokud je otázka prvním prvkem ve formuláři.",
      // "Repositions the question to the end of a selected page."
      page: "Přemístí otázku na konec vybrané stránky.",
      // "Choose from: \"Expanded\" - the question box is displayed in full and can be collapsed; \"Collapsed\" - the question box displays only the title and description and can be expanded; \"Locked\" - the question box is displayed in full and cannot be collapsed."
      state: "Vyberte si z: \"Rozbalené\" - pole s otázkou se zobrazí celé a lze jej sbalit; \"Sbaleno\" - pole s otázkou zobrazuje pouze název a popis a lze jej rozbalit; \"Zamčeno\" - pole s otázkou je zobrazeno celé a nelze jej sbalit.",
      // "Overrides title alignment rules defined on a panel, page, or survey level. When set to \"Hidden\", it also hides question descriptions. The \"Inherit\" option applies any higher-level settings (if set) or survey-level setting (\"Top\" by default)."
      titleLocation: "Přepíše pravidla zarovnání nadpisů definovaná na úrovni panelu, stránky nebo průzkumu. Možnost \"Zdědit\" použije všechna nastavení vyšší úrovně (pokud je nastavena) nebo nastavení na úrovni průzkumu (ve výchozím nastavení \"Nahoře\").",
      // "The \"Inherit\" option applies the survey-level setting (\"Under the question title\" by default)."
      descriptionLocation: "Možnost \"Zdědit\" použije nastavení na úrovni průzkumu (ve výchozím nastavení \"Pod názvem otázky\").",
      // "Sets the location of an error message in relation to the question with invalid input. Choose between: \"Top\" - an error text is placed at the top of the question box; \"Bottom\" - an error text is placed at the bottom of the question box. The \"Inherit\" option applies the survey-level setting (\"Top\" by default)."
      errorLocation: "Nastaví umístění chybové zprávy ve vztahu k otázce s neplatným vstupem. Vyberte si mezi: \"Nahoře\" - text chyby je umístěn v horní části pole s otázkou; \"Bottom\" - text chyby je umístěn ve spodní části pole s otázkou. Možnost \"Zdědit\" použije nastavení na úrovni průzkumu (ve výchozím nastavení \"Nahoře\").",
      // "Adds space or margin between the question content and the left border of the question box."
      indent: "Přidá mezeru nebo okraj mezi obsah otázky a levý okraj pole otázky.",
      // "Sets the width of the question in proportion to other survey elements in the same line. Accepts CSS values (px, %, in, pt, etc.)."
      width: "Nastaví šířku otázky v poměru k ostatním prvkům průzkumu ve stejném řádku. Přijímá hodnoty CSS (px, %, in, pt atd.).",
      // "Choose from: \"On lost focus\" - the value is updated when the input field loses focus; \"While typing\" - the value is updated in real-time, as users are typing. The \"Inherit\" option applies the survey-level setting (\"On lost focus\" by default)."
      textUpdateMode: "Vyberte si z těchto možností: \"Při ztrátě fokusu\" - hodnota se aktualizuje, když vstupní pole ztratí fokus; \"Při psaní\" - hodnota se aktualizuje v reálném čase, jak uživatelé píší. Možnost \"Zdědit\" použije nastavení na úrovni průzkumu (ve výchozím nastavení \"Při ztrátě fokusu\").",
      // [Auto-translated] "You can use any web service as a data source for multiple-choice questions. To populate choice values, enter the URL of the service providing the data."
      url: "Jako zdroj dat pro otázky s výběrem odpovědí můžete použít libovolnou webovou službu. Pokud chcete naplnit hodnoty voleb, zadejte adresu URL služby, která data poskytuje.",
      // [Auto-translated] "A comparison operation used to filter the drop-down list."
      searchMode: "Operace porovnání, která se používá k filtrování rozevíracího seznamu.",
      // [Auto-translated] "Long texts in choice options will automatically generate line breaks to fit within the drop-down menu. Unselect if you want the texts to clip."
      textWrapEnabled: "Dlouhé texty v možnostech volby automaticky vygenerují zalomení řádků, aby se vešly do rozbalovací nabídky. Odznačte, pokud chcete, aby se texty ořízly.",
      // [Auto-translated] "Specifies how many columns this question spans within the grid layout."
      effectiveColSpan: "Určuje, kolik sloupců tato otázka zabírá v rozvržení mřížky."
    },
    surveyvalidator: {
      // "Use the magic wand icon to define when the question's value is considered valid."
      expression: "Pomocí ikony kouzelné hůlky definujte, kdy je hodnota otázky považována za platnou.",
      // [Auto-translated] "Errors block progress until resolved. Warnings highlight issues but allow to continue. Informational notes offer additional context or neutral guidance. When using warnings or informational notes, we recommend enabling immediate validation: \"Survey\" → \"Validation\" → \"Run validation\" → \"After an answer has changed\"."
      notificationType: "Chyby blokují průběh, dokud nejsou vyřešeny. Varování upozorňují na problémy, ale umožňují pokračovat. Informační poznámky nabízejí další kontext nebo neutrální pokyny. Při používání varování nebo informačních poznámek doporučujeme povolit okamžitou validaci: \"Survey\" → \"Validation\" → \"Run validation\" → \"After an answer has changed\"."
    },
    signaturepad: {
      // "Sets the width of the displayed signature area and the resulting image."
      signatureWidth: "Nastaví šířku zobrazené oblasti podpisu a výsledného obrazu.",
      // "Sets the height of the displayed signature area and the resulting image."
      signatureHeight: "Nastaví výšku zobrazené oblasti podpisu a výsledného obrazu.",
      // "Select if you want the signature area to fill all available space within the question box while maintaining the default 3:2 aspect ratio. When custom width and height values are set, the setting will keep the aspect ratio of these dimensions."
      signatureAutoScaleEnabled: "Vyberte, zda chcete, aby oblast podpisu vyplnila veškerý dostupný prostor v poli pro otázky při zachování výchozího poměru stran 3:2. Pokud jsou nastaveny vlastní hodnoty šířky a výšky, nastavení zachová poměr stran těchto rozměrů."
    },
    file: {
      // "Specifies the display height of uploaded images in the preview and the actual height of images taken with the camera. In single file upload mode, the display height is limited by the preview area; in multiple file upload mode, it is limited by the thumbnail area."
      imageHeight: "Určuje výšku zobrazení odeslaných obrazů v náhledu a skutečnou výšku obrazů pořízených fotoaparátem. V režimu odesílání jednoho souboru je výška zobrazení omezena oblastí náhledu; V režimu odesílání více souborů je omezena oblastí miniatur.",
      // "Specifies the display width of uploaded images in the preview and the actual width of images taken with the camera. In single file upload mode, the display width is limited by the preview area; in multiple file upload mode, it is limited by the thumbnail area."
      imageWidth: "Určuje šířku zobrazení odeslaných obrazů v náhledu a skutečnou šířku obrazů pořízených fotoaparátem. V režimu odesílání jednoho souboru je šířka zobrazení omezena oblastí náhledu; V režimu odesílání více souborů je omezena oblastí miniatur.",
      // [Auto-translated] "Displays thumbnail previews for uploaded files when possible. Unselect if you want to show file icons instead."
      allowImagesPreview: "Pokud je to možné, zobrazuje náhledy miniatur pro nahrané soubory. Zrušte výběr, pokud chcete místo toho zobrazit ikony souborů."
    },
    image: {
      // "The \"Auto\" option automatically determines the suitable mode for display - Image, Video, or YouTube - based on the source URL provided."
      contentMode: "Možnost \"Auto\" automaticky určí vhodný režim pro zobrazení – Obrázek, Video nebo YouTube – na základě zadané zdrojové adresy URL."
    },
    imagepicker: {
      // [Auto-translated] "Overrides the minimum and maximum height values."
      imageHeight: "Přepíše minimální a maximální hodnoty výšky.",
      // [Auto-translated] "Overrides the minimum and maximum width values."
      imageWidth: "Přepíše minimální a maximální hodnoty šířky.",
      // [Auto-translated] "\"Value\" serves as an item ID used in conditional rules; \"Text\" is displayed to respondents."
      choices: "\"Hodnota\" slouží jako ID položky používané v podmíněných pravidlech; Respondentům se zobrazuje \"Text\".",
      // "Choose between \"Image\" and \"Video\" to set the content mode of the media selector. If \"Image\" is selected, ensure that all options provided are image files in the following formats: JPEG, GIF, PNG, APNG, SVG, BMP, ICO. Similarly, if \"Video\" is selected, ensure that all options are direct links to video files in the following formats: MP4, MOV, WMV, FLV, AVI, MKV. Please note that YouTube links are not supported for video options."
      contentMode: "Vyberte si mezi \"Obrazem\" a \"Video\" a nastavte režim obsahu voliče médií. Pokud je vybrána možnost \"Obrázek\", ujistěte se, že všechny nabízené možnosti jsou obrazové soubory v následujících formátech: JPEG, GIF, PNG, APNG, SVG, BMP, ICO. Podobně, pokud je vybráno \"Video\", ujistěte se, že všechny možnosti jsou přímými odkazy na video soubory v následujících formátech: MP4, MOV, WMV, FLV, AVI, MKV. Upozorňujeme, že odkazy na YouTube nejsou podporovány u možností videa."
    },
    text: {
      // [Auto-translated] "This setting only resizes the input field and doesn't affect the width of the question box. To limit the accepted input length, go to \"Validation\" → \"Maximum character limit\"."
      size: "Toto nastavení pouze mění velikost vstupního pole a nemá vliv na šířku pole pro otázky. Chcete-li omezit přijatelnou délku vstupu, přejděte na \"Ověření\" → \"Maximální limit znaků\"."
    },
    comment: {
      // [Auto-translated] "Sets the number of displayed lines in the input field. If the input takes up more lines, the scroll bar will appear."
      rows: "Nastavuje počet zobrazených řádků ve vstupním poli. Pokud vstup zabírá více řádků, zobrazí se posuvník."
    },
    // survey templates
    survey: {
      // "Select if you want to prevent respondents from filling out your survey."
      readOnly: "Vyberte, zda chcete respondentům zabránit ve vyplnění průzkumu.",
      // "Sets the location of the progress bar. The \"Auto\" value displays the progress bar above or below the survey header."
      progressBarLocation: "Nastaví umístění indikátoru průběhu. Hodnota \"Auto\" zobrazuje indikátor průběhu nad nebo pod záhlavím průzkumu."
    },
    matrixdropdowncolumn: {
      // "A column ID that is not visible to respondents."
      name: "ID sloupce, které není viditelné pro respondenty.",
      // "When enabled for a column, a respondent is required to provide a unique response for each question within this column."
      isUnique: "Pokud je tato možnost povolena pro sloupec, respondent musí poskytnout jedinečnou odpověď na každou otázku v tomto sloupci.",
      // "Sets the number of displayed lines in the input field. If the input takes up more lines, the scroll bar will appear."
      rows: "Nastaví počet zobrazených řádků ve vstupním poli. Pokud vstup zabírá více řádků, zobrazí se posuvník.",
      // "Use the magic wand icon to set a conditional rule that determines column visibility."
      visibleIf: "Pomocí ikony kouzelné hůlky můžete nastavit podmíněné pravidlo, které určuje viditelnost sloupce.",
      // [Auto-translated] "Use the magic wand icon to set a conditional rule that disables the read-only mode for the column."
      enableIf: "Pomocí ikony kouzelné hůlky nastavte podmíněné pravidlo, které zakáže režim jen pro čtení pro sloupec.",
      // "Use the magic wand icon to set a conditional rule that prevents survey submission unless at least one nested question has an answer."
      requiredIf: "Pomocí ikony kouzelné hůlky nastavte podmíněné pravidlo, které zabrání odeslání průzkumu, pokud alespoň jedna vnořená otázka nemá odpověď.",
      // "When selected, creates an individual column for each choice option."
      showInMultipleColumns: "Pokud je tato možnost vybraná, vytvoří samostatný sloupec pro každou možnost volby.",
      // [Auto-translated] "Arranges choice options in a multi-column layout. When set to 0, the options are displayed in a single line. When set to -1, the actual value is inherited from the \"Nested column count\" property of the parent matrix."
      colCount: "Uspořádá volby voleb ve vícesloupcovém rozvržení. Když je nastavená hodnota 0, volby se zobrazí na jednom řádku. Pokud je nastavena hodnota -1, skutečná hodnota je zděděna z vlastnosti \"Počet vnořených sloupců\" nadřazené matice."
    },
    slider: {
      // "The lowest number that users can select."
      min: "Nejnižší číslo, které mohou uživatelé vybrat.",
      // "The highest number that users can select."
      max: "Nejvyšší číslo, které mohou uživatelé vybrat.",
      // "The interval between selectable scale values. For example, a step of 5 will allow users to select 0, 5, 10, etc."
      step: "Interval mezi volitelnými hodnotami stupnice. Například krok 5 umožní uživatelům vybrat 0, 5, 10 atd.",
      // "The minimum distance between the slider thumbs a user can set."
      minRangeLength: "Minimální vzdálenost mezi palci posuvníku, kterou může uživatel nastavit.",
      // "The maximum distance between the slider thumbs a user can set."
      maxRangeLength: "Maximální vzdálenost mezi palci posuvníku, kterou může uživatel nastavit.",
      // "Specifies how many scale labels to generate. A value of -1 means the number is calculated automatically based on the Min value and Max value."
      labelCount: "Určuje, kolik popisů stupnice se má vygenerovat. Hodnota -1 znamená, že číslo se vypočítá automaticky na základě minimální hodnoty a maximální hodnoty.",
      // "Use `{0}` as a placeholder for the actual value."
      labelFormat: "Použijte '{0}' jako zástupný symbol pro skutečnou hodnotu.",
      // "Allows you to define custom labels at specific values and optionally assign corresponding text to them (e.g., 0 = \"Poor\", 100 = \"Excellent\")."
      customLabels: "Umožňuje definovat vlastní popisky na konkrétních hodnotách a volitelně k nim přiřadit odpovídající text (např. 0 = \"Špatný\", 100 = \"Vynikající\").",
      // "Use `{0}` as a placeholder for the actual value."
      tooltipFormat: "Použijte '{0}' jako zástupný symbol pro skutečnou hodnotu.",
      // "Allows users to move one thumb past the other."
      allowSwap: "Umožňuje uživatelům posouvat jeden palec přes druhý.",
      // [Auto-translated] "Displays a button that clears the selected slider value and sets it to undefined."
      allowClear: "Zobrazí tlačítko, které vymaže vybranou hodnotu jezdce a nastaví ji na nedefinovanou.",
      // "Defines the slider's minimum value dynamically using an expression. Supports basic calculations (e.g, `{q1_id} + {q2_id}`), Boolean logic (e.g., `{age} > 60`), and functions like `iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, and more."
      minValueExpression: "Dynamicky definuje minimální hodnotu jezdce pomocí výrazu. Podporuje základní výpočty (např. '{q1_id} + {q2_id}'), booleovskou logiku (např. '{age} > 60') a funkce jako 'iif()', 'today()', 'age()', 'min()', 'max()', 'avg()' a další.",
      // "Defines the slider's maximum value dynamically using an expression. Supports basic calculations (e.g, `{q1_id} + {q2_id}`), Boolean logic (e.g., `{age} > 60`), and functions like `iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, and more."
      maxValueExpression: "Dynamicky definuje maximální hodnotu jezdce pomocí výrazu. Podporuje základní výpočty (např. '{q1_id} + {q2_id}'), booleovskou logiku (např. '{age} > 60') a funkce jako 'iif()', 'today()', 'age()', 'min()', 'max()', 'avg()' a další."
    },
    // [Auto-translated] "Makes this choice exclusive. When selected by a user, it will automatically deselect all other options in the question."
    isExclusive: "Díky tomu je tato volba exkluzivní. Když je vybrán uživatelem, automaticky zruší výběr všech ostatních možností v otázce.",
    matrixcolumn: {
      // [Auto-translated] "Makes checkboxes in this column exclusive. When selected by a user, they will automatically deselect all other checkboxes in the same row."
      isExclusive: "Nastaví zaškrtávací políčka v tomto sloupci jako výhradní. Když je uživatel vybere, automaticky zruší zaškrtnutí všech ostatních políček ve stejném řádku."
    },
    // [Auto-translated] "Select if uppercase and lowercase letters in the regular expression must be treated as equivalent."
    caseInsensitive: "Vyberte, zda mají být velká a malá písmena v regulárním výrazu považována za ekvivalentní.",
    // "Choose from: \"Static\" - sets a fixed width; \"Responsive\" - makes the survey occupy the full width of the screen; \"Auto\" - applies either of the two depending on the question types used."
    widthMode: "Vyberte si z: \"Statické\" - nastaví pevnou šířku; \"Responzivní\" - způsobí, že průzkum bude zabírat celou šířku obrazovky; \"Auto\" – použije jednu z těchto dvou možností v závislosti na použitých typech otázek.",
    // "Assign a unique cookie value for your survey. The cookie will be set in a respondent's browser upon survey completion to prevent repetitive survey submissions."
    cookieName: "Cookies brání uživatelům vyplnit průzkum vícekrát.",
    // [Auto-translated] "Paste an image link (no size limits) or click the folder icon to browse a file from your computer (up to 64KB)."
    logo: "Vložte odkaz na obrázek (bez omezení velikosti) nebo klikněte na ikonu složky a procházejte soubor z počítače (až 64 kB).",
    // [Auto-translated] "Sets a logo width in CSS units (px, %, in, pt, etc.)."
    logoWidth: "Nastaví šířku loga v jednotkách CSS (px, %, in, pt atd.).",
    // [Auto-translated] "Sets a logo height in CSS units (px, %, in, pt, etc.)."
    logoHeight: "Nastaví výšku loga v jednotkách CSS (px, %, in, pt atd.).",
    // "Choose from: \"None\" - image maintains its original size; \"Contain\" - image is resized to fit while maintaining its aspect ratio; \"Cover\" - image fills the entire box while maintaining its aspect ratio; \"Fill\" - image is stretched to fill the box without maintaining its aspect ratio."
    logoFit: "Vyberte si z těchto možností: \"Žádné\" - obrázek si zachová svou původní velikost; \"Obsahovat\" - velikost obrázku se změní tak, aby se vešel při zachování poměru stran; \"Obálka\" - obrázek vyplní celý rámeček při zachování poměru stran; \"Výplň\" - obrázek je roztažen tak, aby vyplnil rámeček bez zachování poměru stran.",
    // [Auto-translated] "Select if you want the survey to auto-advance to the next page once a respondent has answered all questions on the current page. This feature won't apply if the last question on the page is open-ended or allows multiple answers."
    autoAdvanceEnabled: "Vyberte, zda chcete, aby průzkum automaticky přešel na další stránku, jakmile respondent odpoví na všechny otázky na aktuální stránce. Tato funkce se nepoužije, pokud je poslední otázka na stránce otevřená nebo umožňuje více odpovědí.",
    // [Auto-translated] "Select if you want the survey to complete automatically after a respondent answers all questions."
    autoAdvanceAllowComplete: "Vyberte, zda chcete, aby se průzkum vyplnil automaticky poté, co respondent odpoví na všechny otázky.",
    // [Auto-translated] "Sets the visibility of navigation buttons on a page."
    showNavigationButtons: "Nastaví viditelnost navigačních tlačítek na stránce.",
    // [Auto-translated] "Sets the location of navigation buttons on a page."
    navigationButtonsLocation: "Nastaví umístění navigačních tlačítek na stránce.",
    // [Auto-translated] "Enable the preview page with all or answered questions only."
    showPreviewBeforeComplete: "Povolte stránku náhledu pouze se všemi nebo zodpovězenými otázkami.",
    // "Applies to all questions within the survey. This setting can be overridden by title alignment rules at lower levels: panel, page, or question. A lower-level setting will override those on a higher level."
    questionTitleLocation: "Platí pro všechny otázky v rámci průzkumu. Toto nastavení lze přepsat pravidly zarovnání nadpisů na nižších úrovních: panel, stránka nebo otázka. Nastavení nižší úrovně přepíše nastavení na vyšší úrovni.",
    // [Auto-translated] "A symbol or a sequence of symbols indicating that an answer is required."
    requiredMark: "Symbol nebo posloupnost symbolů označující, že je vyžadována odpověď.",
    // [Auto-translated] "Enter a number or letter with which you want to start numbering."
    questionStartIndex: "Zadejte číslo nebo písmeno, kterým chcete začít číslovat.",
    // "Sets the location of an error message in relation to the question with invalid input. Choose between: \"Top\" - an error text is placed at the top of the question box; \"Bottom\" - an error text is placed at the bottom of the question box."
    questionErrorLocation: "Nastaví umístění chybové zprávy ve vztahu k otázce s neplatným vstupem. Vyberte si mezi: \"Nahoře\" - text chyby je umístěn v horní části pole s otázkou; \"Bottom\" - text chyby je umístěn ve spodní části pole s otázkou.",
    // [Auto-translated] "Select if you want the first input field on each page ready for text entry."
    autoFocusFirstQuestion: "Vyberte, zda chcete, aby první vstupní pole na každé stránce bylo připraveno pro zadání textu.",
    // "Keeps the original order of questions or randomizes them. The effect of this setting is only visible in the Preview tab."
    questionOrder: "Zachová původní pořadí otázek nebo je náhodně vybere. Účinek tohoto nastavení je viditelný pouze na kartě Náhled.",
    // [Auto-translated] "For text entry questions only."
    maxTextLength: "Pouze pro otázky pro zadávání textu.",
    // [Auto-translated] "For question comments only."
    maxCommentLength: "Pouze pro komentáře k otázkám.",
    // [Auto-translated] "Sets the number of displayed lines in text areas for question comments. If the input takes up more lines, the scroll bar appears."
    commentAreaRows: "Nastaví počet zobrazených řádků v textových oblastech pro komentáře k otázkám. Pokud vstup zabírá více řádků, zobrazí se posuvník.",
    // [Auto-translated] "Select if you want question comments and Long Text questions to auto-grow in height based on the entered text length."
    autoGrowComment: "Vyberte, zda chcete, aby se komentáře k otázkám a otázky s dlouhým textem automaticky zvětšovaly na výšku podle zadané délky textu.",
    // [Auto-translated] "For question comments and Long Text questions only."
    allowResizeComment: "Pouze pro komentáře k otázkám a otázky s dlouhým textem.",
    // [Auto-translated] "Custom variables serve as intermediate or auxiliary variables used in form calculations. They take respondent inputs as source values. Each custom variable has a unique name and an expression it's based on."
    calculatedValues: "Vlastní proměnné slouží jako mezilehlé nebo pomocné proměnné používané při výpočtech formulářů. Jako zdrojové hodnoty berou vstupy respondentů. Každá vlastní proměnná má jedinečný název a výraz, na kterém je založena.",
    // [Auto-translated] "Select if you wish the calculated value of the expression to be saved along with survey results."
    includeIntoResult: "Vyberte, zda chcete, aby byla vypočtená hodnota výrazu uložena spolu s výsledky průzkumu.",
    // "A trigger is an event or condition that is based on an expression. Once the expression is evaluated to \"true\", a trigger sets off an action. Such an action can optionally have a target question it affects."
    triggers: "Aktivační událost je událost nebo podmínka, která je založena na výrazu. Jakmile je výraz vyhodnocen jako \"true\", trigger spustí akci. Taková akce může mít volitelně cílovou otázku, kterou ovlivňuje.",
    // [Auto-translated] "Choose whether or not to clear values for questions hidden by conditional logic and when to do it."
    clearInvisibleValues: "Zvolte, zda chcete vymazat hodnoty otázek skrytých podmíněnou logikou a kdy to udělat.",
    // "Choose from: \"On lost focus\" - the value is updated when the input field loses focus; \"While typing\" - the value is updated in real-time, as users are typing."
    textUpdateMode: "Vyberte si z těchto možností: \"Při ztrátě fokusu\" - hodnota se aktualizuje, když vstupní pole ztratí fokus; \"Při psaní\" - hodnota se aktualizuje v reálném čase, jak uživatelé píší.",
    // [Auto-translated] "The left value serves as a column ID used in conditional rules, the right value is displayed to respondents."
    columns: "Levá hodnota slouží jako ID sloupce používané v podmíněných pravidlech, pravá hodnota se zobrazuje respondentům.",
    // "The left value serves as a row ID used in conditional rules, the right value is displayed to respondents."
    rows: "Levá hodnota slouží jako ID řádku používané v podmíněných pravidlech, pravá hodnota se zobrazuje respondentům.",
    // [Auto-translated] "Accepts CSS values (px, %, in, pt, etc.)."
    columnMinWidth: "Přijímá hodnoty CSS (px, %, in, pt atd.).",
    // [Auto-translated] "Accepts CSS values (px, %, in, pt, etc.)."
    rowTitleWidth: "Přijímá hodnoty CSS (px, %, in, pt atd.).",
    // "Visible only if at least one column displays total values set with \"Aggregation method\" or \"Total value expression\"."
    totalText: "Viditelné pouze v případě, že alespoň jeden sloupec je typu suma nebo obsahuje sumarizační výraz.",
    // "Sets the location of an error message in relation to a cell with invalid input. The \"Inherit\" option applies the setting from the \"Error message alignment\" property."
    cellErrorLocation: "Nastaví umístění chybové zprávy ve vztahu k buňce s neplatným vstupem. Možnost \"Zdědit\" použije nastavení z vlastnosti \"Zarovnání chybové zprávy\".",
    // "Sets the location of error messages for questions nested in detail sections. The \"Inherit\" option applies the setting from the \"Error message alignment\" property."
    detailErrorLocation: "Nastavuje umístění chybových zpráv pro otázky vnořené do podrobných oddílů. Volba \"Zdědit\" aplikuje nastavení z vlastnosti \"Zarovnání chybové zprávy\".",
    // "When the \"Prevent duplicate responses\" property is enabled, a respondent attempting to submit a duplicate entry will receive the following error message."
    keyDuplicationError: "Pokud je povolena vlastnost \"Zabránit duplicitním odpovědím\", respondentovi, který se pokouší odeslat duplicitní záznam, se zobrazí následující chybová zpráva.",
    // [Auto-translated] "Allows you to calculate total values based on an expression. The expression can include basic calculations (`{q1_id} + {q2_id}`), Boolean expressions (`{age} > 60`) and functions ('iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, etc.)."
    totalExpression: "Umožňuje vypočítat celkové hodnoty na základě výrazu. Výraz může obsahovat základní výpočty ('{q1_id} + {q2_id}'), logické výrazy ('{age} > 60') a funkce ('iif()', 'today()', 'age()', 'min()', 'max()', 'avg()' atd.).",
    // "Reference a column ID to require a user to provide a unique response for each question within the specified column."
    keyName: "Pokud zadaný sloupec obsahuje totožné hodnoty, průzkum vyhodí chybu „Klíč není unikátní“.",
    // "Type a subtitle."
    description: "Zadejte titulky.",
    // [Auto-translated] "Choose a language to begin creating your survey. To add a translation, switch to a new language and translate the original text here or in the Translations tab."
    locale: "Vyberte jazyk a začněte vytvářet průzkum. Chcete-li přidat překlad, přepněte do nového jazyka a přeložte původní text zde nebo na kartě Překlady.",
    // "Sets the location of a detail section in relation to a row. Choose from: \"None\" - no detail section is added; \"Under the row\" - a detail section is placed under each row of the matrix; \"Under the row, display one detail section only\" - a detail section is displayed under a single row only, the remaining sections are collapsed."
    detailPanelMode: "Nastaví umístění oddílu podrobností ve vztahu k řádku. Vyberte si z těchto možností: \"Žádné\" - není přidáno žádné rozšíření; \"Pod řádkem\" - pod každým řádkem matice je umístěno rozšíření řádku; \"Pod řádkem zobrazit pouze jedno rozšíření řádku\" - rozšíření je zobrazeno pouze pod jedním řádkem, zbývající rozšíření řádků jsou sbalena.",
    // "Choose from: \"None\" - image maintains its original size; \"Contain\" - image is resized to fit while maintaining its aspect ratio; \"Cover\" - image fills the entire box while maintaining its aspect ratio; \"Fill\" - image is stretched to fill the box without maintaining its aspect ratio."
    imageFit: "Vyberte si z těchto možností: \"Žádné\" - obrázek si zachová svou původní velikost; \"Obsahovat\" - velikost obrázku se změní tak, aby se vešel při zachování poměru stran; \"Obálka\" - obrázek vyplní celý rámeček při zachování poměru stran; \"Výplň\" - obrázek je roztažen tak, aby vyplnil rámeček bez zachování poměru stran.",
    // "The \"Inherit\" option applies a survey-level setting (\"Disabled\" by default)."
    autoGrow: "Postupně zvětšuje výšku vstupního pole při zadávání dat. Přepíše nastavení \"Výška vstupního pole (v řádcích)\".",
    // [Auto-translated] "The \"Inherit\" option applies a survey-level setting (\"Enabled\" by default)."
    allowResize: "Možnost \"Zdědit\" použije nastavení na úrovni průzkumu (ve výchozím nastavení \"Povoleno\").",
    // [Auto-translated] "A time interval in seconds after which the survey auto-advances to the \"Thank You\" page. When set to 0, counts the time spent on the survey."
    timeLimit: "Časový interval v sekundách, po jehož uplynutí se průzkum automaticky přesune na stránku \"Děkuji\". Pokud je nastavena na 0, spočítá čas strávený na průzkumu.",
    // [Auto-translated] "A time interval in seconds after which the survey auto-advances to the next page. Hides the \"Previous\" navigation button. When set to 0, counts the time spent on the current page."
    timeLimitPerPage: "Časový interval v sekundách, po jehož uplynutí se průzkum automaticky přesune na další stránku. Skryje navigační tlačítko \"Předchozí\". Při nastavení na 0 se počítá čas strávený na aktuální stránce.",
    // [Auto-translated] "Enable this option to trigger validation when a user focuses on an empty input field and then leaves it without making any changes."
    validateVisitedEmptyFields: "Tuto možnost povolte, chcete-li spustit ověření, když se uživatel zaměří na prázdné vstupní pole a poté ho opustí, aniž by provedl jakékoli změny.",
    page: {
      // "A page ID that is not visible to respondents."
      name: "ID stránky, které není viditelné pro respondenty.",
      // "Type a page subtitle."
      description: "Zadejte podnadpis stránky.",
      // "A caption displayed on a navigation button in the progress bar or table of contents (TOC). If you leave this field empty, the navigation button will use the page title or page name. To enable the progress bar or TOC, go to \"Survey\" → \"Navigation\"."
      navigationTitle: "Titulek zobrazený na navigačním tlačítku na ukazateli průběhu nebo v obsahu. Pokud toto pole ponecháte prázdné, navigační tlačítko použije název stránky nebo název stránky. Chcete-li aktivovat ukazatel průběhu nebo obsah, přejděte na \"Průzkum\" → \"Navigace\".",
      // "A time interval in seconds after which the survey auto-advances to the next page. Hides the \"Previous\" navigation button. When set to 0, counts the time spent on the current page."
      timeLimit: "Časový interval v sekundách, po jehož uplynutí se průzkum automaticky přesune na další stránku.",
      // "Use the magic wand icon to set a conditional rule that determines page visibility."
      visibleIf: "Pomocí ikony kouzelné hůlky můžete nastavit podmíněné pravidlo, které určuje viditelnost stránky.",
      // [Auto-translated] "Use the magic wand icon to set a conditional rule that disables the read-only mode for the page."
      enableIf: "Pomocí ikony kouzelné hůlky nastavte podmíněné pravidlo, které zakáže režim pouze pro čtení stránky.",
      // "Use the magic wand icon to set a conditional rule that prevents survey submission unless at least one nested question has an answer."
      requiredIf: "Pomocí ikony kouzelné hůlky nastavte podmíněné pravidlo, které zabrání odeslání průzkumu, pokud alespoň jedna vnořená otázka nemá odpověď.",
      // "Applies to all questions within this page. When set to \"Hidden\", it also hides question descriptions. If you want to override this setting, define title alignment rules for individual questions or panels. The \"Inherit\" option applies the survey-level setting (\"Top\" by default)."
      questionTitleLocation: "Platí pro všechny otázky na této stránce. Chcete-li toto nastavení přepsat, definujte pravidla zarovnání nadpisů pro jednotlivé otázky nebo panely. Možnost \"Zdědit\" použije nastavení na úrovni průzkumu (ve výchozím nastavení \"Nahoře\").",
      // [Auto-translated] "Sets consistent width for question titles when they are aligned to the left of their question boxes. Accepts CSS values (px, %, in, pt, etc.)."
      questionTitleWidth: "Nastaví konzistentní šířku názvů otázek, pokud jsou zarovnány nalevo od polí s otázkami. Přijímá hodnoty CSS (px, %, in, pt atd.).",
      // "Sets the location of an error message in relation to the question with invalid input. Choose between: \"Top\" - an error text is placed at the top of the question box; \"Bottom\" - an error text is placed at the bottom of the question box. The \"Inherit\" option applies the survey-level setting (\"Top\" by default)."
      questionErrorLocation: "Nastaví umístění chybové zprávy ve vztahu k otázce s neplatným vstupem. Vyberte si mezi: \"Nahoře\" - text chyby je umístěn v horní části pole s otázkou; \"Bottom\" - text chyby je umístěn ve spodní části pole s otázkou. Možnost \"Zdědit\" použije nastavení na úrovni průzkumu (ve výchozím nastavení \"Nahoře\").",
      // "Keeps the original order of questions or randomizes them. The \"Inherit\" option applies the survey-level setting (\"Original\" by default). The effect of this setting is only visible in the Preview tab."
      questionOrder: "Zachová původní pořadí otázek nebo je náhodně vybere. Možnost \"Zdědit\" použije nastavení na úrovni průzkumu (ve výchozím nastavení \"Původní\"). Účinek tohoto nastavení je viditelný pouze na kartě Náhled.",
      // "Sets the visibility of navigation buttons on the page. The \"Inherit\" option applies the survey-level setting, which defaults to \"Visible\"."
      showNavigationButtons: "Nastaví viditelnost navigačních tlačítek na stránce. Možnost \"Zdědit\" použije nastavení na úrovni průzkumu, které je ve výchozím nastavení \"Viditelné\".",
      // [Auto-translated] "This table lets you configure each grid column on the page. It automatically sets the width percentage for each column based on the maximum number of elements in a row. To customize the grid layout, manually adjust these values and define the title width for all questions in each column."
      gridLayoutColumns: "Tato tabulka umožňuje konfigurovat jednotlivé sloupce mřížky na stránce. Automaticky nastaví procentuální šířku pro každý sloupec na základě maximálního počtu prvků v řádku. Chcete-li přizpůsobit rozvržení mřížky, upravte tyto hodnoty ručně a definujte šířku nadpisu pro všechny otázky v každém sloupci."
    },
    // [Auto-translated] "Sets the location of a timer on a page."
    timerLocation: "Nastaví umístění časovače na stránce.",
    // "Choose from: \"Locked\" - users cannot expand or collapse entries; \"Collapse all\" - all entries start in a collapsed state; \"Expand all\" - all entries start in an expanded state; \"First expanded\" - only the first entry is initially expanded. Applies if \"Entry display mode\" is set to \"List\" and the \"Entry title pattern\" property is specified."
    panelsState: "Vyberte si z těchto možností: \"Uzamčeno\" - uživatelé nemohou rozbalit nebo sbalit panely; \"Sbalit vše\" - všechny panely začínají ve sbaleném stavu; \"Rozbalit vše\" - všechny panely začínají v rozbaleném stavu; \"První rozbalený\" - zpočátku se rozbalí pouze první panel.",
    // [Auto-translated] "Enter a shared property name within the array of objects that contains the image or video file URLs you want to display in the choice list."
    imageLinkName: "Zadejte název sdílené vlastnosti v poli objektů, které obsahuje adresy URL souborů obrázků nebo videí, které chcete zobrazit v seznamu voleb.",
    // "The left value serves as an item ID used in conditional rules, the right value is displayed to respondents."
    choices: "Levá hodnota slouží jako ID položky používané v podmíněných pravidlech, pravá hodnota se zobrazuje respondentům.",
    // [Auto-translated] "Type a user-friendly title to display."
    title: "Zadejte uživatelsky přívětivý název, který chcete zobrazit.",
    // [Auto-translated] "Ensures that users won't complete the survey until files are uploaded."
    waitForUpload: "Zajistí, že uživatelé nedokončí průzkum, dokud nebudou soubory nahrány.",
    // [Auto-translated] "Accepts CSS values (px, %, in, pt, etc.)."
    minWidth: "Přijímá hodnoty CSS (px, %, in, pt atd.).",
    // [Auto-translated] "Accepts CSS values (px, %, in, pt, etc.)."
    maxWidth: "Přijímá hodnoty CSS (px, %, in, pt atd.).",
    // "Accepts CSS values (px, %, in, pt, etc.)."
    width: "Přijímá hodnoty CSS (px, %, in, pt atd.).",
    // "A join identifier is a custom key that you can assign to several questions to link them together and sync their values. These values will be merged into a single array or object and stored in survey results using the key as the property name."
    valueName: "Pokud tuto vlastnost nenastavíte, odpověď bude uložena v poli specifikovaném názvem otázky.",
    // [Auto-translated] "A value displayed in HTML questions and in the dynamic titles and descriptions of survey elements when the question value is empty."
    defaultDisplayValue: "Hodnota zobrazená v otázkách HTML a v dynamických názvech a popisech prvků průzkumu, když je hodnota otázky prázdná.",
    // [Auto-translated] "In single- and multiple-selection question types, each choice option has an ID and display value. When selected, this setting shows a display value instead of an ID value in HTML questions and dynamic titles and descriptions of survey elements."
    useDisplayValuesInDynamicTexts: "V typech otázek s jedním a vícenásobným výběrem má každá možnost volby ID a zobrazovanou hodnotu. Pokud je tato možnost vybrána, zobrazí se v otázkách HTML a dynamických názvech a popisech prvků průzkumu zobrazená hodnota místo hodnoty ID.",
    // "Choose whether or not to clear question values hidden by conditional logic and when to do it. The \"Inherit\" option applies the survey-level setting (\"Upon survey completion\" by default)."
    clearIfInvisible: "Zvolte, zda chcete vymazat hodnoty otázek skryté podmíněnou logikou a kdy to udělat. Možnost \"Zdědit\" použije nastavení na úrovni průzkumu (ve výchozím nastavení \"Po dokončení průzkumu\").",
    // "Choose from: \"All\" - copies all choice options from the selected question; \"Selected\" - dynamically copies only selected choice options; \"Unselected\" - dynamically copies only unselected choice options. The \"None\" and \"Other\" options are copied by default if enabled in the source question."
    choicesFromQuestionMode: "Vyberte si z: \"Vše\" - zkopíruje všechny možnosti výběru z vybrané otázky; \"Vybrané\" - dynamicky kopíruje pouze vybrané možnosti volby; \"Nevybráno\" - dynamicky zkopíruje pouze nevybrané možnosti výběru. Možnosti \"Žádné\" a \"Jiné\" jsou ve výchozím nastavení zkopírovány, pokud jsou povoleny ve zdrojové otázce.",
    // [Auto-translated] "In single- and multiple-selection question types, each choice option has an ID and display value. This setting specifies which matrix column or panel question should provide the IDs."
    choiceValuesFromQuestion: "U otázek s jedním a více výběry má každá možnost volby ID a zobrazovanou hodnotu. Toto nastavení určuje, která matice, sloupec nebo otázka panelu by měla ID poskytovat.",
    // [Auto-translated] "In single- and multiple-selection question types, each choice option has an ID and display value. This setting specifies which matrix column or panel question should provide the display texts."
    choiceTextsFromQuestion: "U otázek s jedním a více výběry má každá možnost volby ID a zobrazovanou hodnotu. Toto nastavení určuje, který sloupec matice nebo otázka panelu by měla poskytovat zobrazované texty.",
    // [Auto-translated] "Select to let respondents add their own choices if the desired option isn't available in the dropdown. Custom choices will only be stored temporarily for the duration of the current browser session."
    allowCustomChoices: "Zaškrtnutím umožníte respondentům přidat vlastní volby, pokud požadovaná možnost není v rozbalovací nabídce k dispozici. Vlastní volby budou uloženy pouze dočasně po dobu trvání aktuální relace prohlížeče.",
    // [Auto-translated] "When selected, users can include additional input in a separate comment box."
    showOtherItem: "Pokud je tato možnost vybraná, mohou uživatelé zahrnout další vstup do samostatného pole pro komentář.",
    // "Displays each special choice option (\"None\", \"Other\", \"Select All\") on a new line, even when using a multiple-column layout."
    separateSpecialChoices: "Zobrazí každou speciální volbu (\"Žádná\", \"Jiné\", \"Vybrat vše\") na novém řádku, a to i při použití rozložení s více sloupci.",
    // [Auto-translated] "Specify the location within the service dataset where the target array of objects is located. Leave empty if the URL already points to the array."
    path: "Zadejte umístění v datové sadě služby, kde se nachází cílové pole objektů. Ponechte prázdné, pokud adresa URL již odkazuje na pole.",
    choicesbyurl: {
      // "Enter a uniform property name within the array of objects whose value will be stored as a response in survey results."
      valueName: " "
    },
    // [Auto-translated] "Enter a uniform property name within the array of objects that contains the values you want to display in the choice list."
    titleName: "Zadejte jednotný název vlastnosti v poli objektů, které obsahuje hodnoty, které chcete zobrazit v seznamu voleb.",
    // [Auto-translated] "Select to allow the service to return an empty response or array."
    allowEmptyResponse: "Tuto možnost vyberte, pokud chcete, aby služba vracela prázdnou odpověď nebo pole.",
    // [Auto-translated] "Use the magic wand icon to set a conditional rule that determines the visibility of all choice options."
    choicesVisibleIf: "Pomocí ikony kouzelné hůlky můžete nastavit podmíněné pravidlo, které určuje viditelnost všech voleb.",
    // [Auto-translated] "The left value serves as an item ID used in conditional rules, the right value is displayed to respondents."
    rateValues: "Levá hodnota slouží jako ID položky používané v podmíněných pravidlech, pravá hodnota se zobrazuje respondentům.",
    rating: {
      // "\"Auto\" selects between the \"Buttons\" and \"Dropdown\" modes based on the available width. When the width is insufficient to display buttons, the question displays a dropdown."
      displayMode: "\"Auto\" vybírá mezi režimy \"Tlačítka\" a \"Rozbalovací nabídka\" na základě dostupné šířky. Pokud šířka není dostatečná k zobrazení tlačítek, zobrazí se v otázce rozevírací seznam."
    },
    // [Auto-translated] "Allows you to connect questions that produce results in different formats. When such questions are linked together using a join identifier, this shared property stores selected question values."
    valuePropertyName: "Umožňuje propojit otázky, které poskytují výsledky v různých formátech. Pokud jsou takové otázky propojeny pomocí identifikátoru spojení, tato sdílená vlastnost ukládá vybrané hodnoty otázek.",
    // [Auto-translated] "Select if you want to update the drop-down menu contents to match the search query that a user is typing in the input field."
    searchEnabled: "Vyberte, zda chcete aktualizovat obsah rozevírací nabídky tak, aby odpovídal vyhledávacímu dotazu, který uživatel zadává do vstupního pole.",
    // [Auto-translated] "A value to save in survey results when respondents give a positive answer."
    valueTrue: "Hodnota, která se uloží do výsledků průzkumu, když respondenti odpoví kladně.",
    // [Auto-translated] "A value to save in survey results when respondents give a negative answer."
    valueFalse: "Hodnota, která se má uložit do výsledků průzkumu, když respondenti odpoví záporně.",
    // [Auto-translated] "It's not recommended that you disable this option as it overrides the Preview image and makes it hard for a user to understand whether the files have been uploaded."
    showPreview: "Nedoporučujeme tuto volbu vypínat, protože přepíše obraz náhledu a uživateli ztíží pochopení, zda byly soubory odeslány.",
    // [Auto-translated] "Triggers a prompt asking to confirm the file deletion."
    needConfirmRemoveFile: "Spustí výzvu s žádostí o potvrzení odstranění souboru.",
    // [Auto-translated] "Enable to rank only selected choices. Users will drag selected items from the choice list to order them within the ranking area."
    selectToRankEnabled: "Povolením seřadíte pouze vybrané volby. Uživatelé přetáhnou vybrané položky ze seznamu voleb a seřadí je v oblasti hodnocení.",
    // [Auto-translated] "Enter a list of choices that will be suggested to the respondent during input."
    dataList: "Zadejte seznam možností, které budou respondentovi navrženy během vstupu.",
    // [Auto-translated] "The setting only resizes the input fields and doesn't affect the width of the question box."
    inputSize: "Nastavení mění pouze velikost vstupních polí a nemá vliv na šířku pole pro otázky.",
    // [Auto-translated] "Sets consistent width for all item labels. Accepts CSS values (px, %, in, pt, etc.)."
    itemTitleWidth: "Nastaví konzistentní šířku pro všechny popisky položek. Přijímá hodnoty CSS (px, %, in, pt, atd.).",
    // "Select how to align input value within the field. The default setting \"Auto\" aligns the input value to the right if currency or numeric masking is applied and to the left if not."
    inputTextAlignment: "Vyberte, jak chcete zarovnat vstupní hodnotu v poli. Výchozí nastavení \"Auto\" zarovná vstupní hodnotu doprava, pokud je použito maskování měny nebo čísel, a doleva, pokud ne.",
    // [Auto-translated] "Serves as a substitute when the image cannot be displayed on a user's device and for accessibility purposes."
    altText: "Slouží jako náhrada v případě, že obrázek nelze zobrazit na zařízení uživatele, a pro účely usnadnění.",
    // "Defines the color of the selected emoji when the Rating icon type is set to \"Smileys\". Choose between: \"Default\" - the selected emoji appears in default survey color; \"Scale\" - the selected emoji inherits color from the rating scale."
    rateColorMode: "Definuje barvu vybraného emotikonu, když je typ ikony Hodnocení nastaven na \"Smajlíky\". Vyberte si mezi: \"Výchozí\" - vybraný emotikon se zobrazí ve výchozí barvě průzkumu; \"Měřítko\" - vybraný emotikon zdědí barvu ze stupnice hodnocení.",
    expression: {
      // "An expression ID that is not visible to respondents."
      name: "ID výrazu, které není viditelné pro respondenty.",
      // "Type an expression subtitle."
      description: "Zadejte výraz subtitle.",
      // "An expression can include basic calculations (`{q1_id} + {q2_id}`), conditions (`{age} > 60`), and functions ('iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, etc.)."
      expression: "Výraz může obsahovat základní výpočty ('{q1_id} + {q2_id}'), podmínky ('{age} > 60') a funkce ('iif()', 'today()', 'age()', 'min()', 'max()', 'avg()' atd.)."
    },
    // "Select to store the \"Other\" option value as a separate property in survey results."
    storeOthersAsComment: "Tuto možnost vyberte, chcete-li uložit hodnotu možnosti \"Jiné\" jako samostatnou vlastnost ve výsledcích průzkumu.",
    // "Use {0} as a placeholder for the actual value."
    format: "Použít {0} jako zástupný text pro skutečnou hodnotu.",
    // "Refer to the [accept](https://www.w3schools.com/tags/att_input_accept.asp) attribute description for more information."
    acceptedTypes: "Pro více informací viz [accept](https://www.w3schools.com/tags/att_input_accept.asp).",
    // "Arranges choice options in a multi-column layout. When set to 0, the options are displayed in a single line. Applies only to columns with \"Cell input type\" set to Radio Button Group or Checkboxes."
    columnColCount: "Vztahuje se pouze na typy přepínač a zaškrtávací políčka.",
    // "Select the data type that the user's browser can retrieve. This data is sourced either from past values entered by the user or from pre-configured values if any have been saved by the user for autocompletion."
    autocomplete: "Pro více informací viz [autocomplete](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete).",
    // "Applies when \"File source type\" is \"Local file\" or when camera is unavailable"
    filePlaceholder: "Platí, když je \"Typ zdroje\" nastaven na \"Místní soubory\" nebo když je kamera nedostupná",
    // "Applies when \"File source type\" is \"Camera\"."
    photoPlaceholder: "Platí, když je \"Typ zdroje\" nastaven na \"Fotoaparát\".",
    // "Applies when \"File source type\" is \"Local file or camera\"."
    fileOrPhotoPlaceholder: "Platí, když \"Typ zdroje\" je \"Místní soubory nebo kamera\".",
    // "Arranges choice options in a multi-column layout. When set to 0, the options are displayed in a single line."
    colCount: "Uspořádá možnosti voleb v rozložení s více sloupci. Při nastavení na 0 se možnosti zobrazí na jednom řádku.",
    masksettings: {
      // "Select if you want to store the question value with an applied mask in survey results."
      saveMaskedValue: "Vyberte, zda chcete uložit hodnotu otázky s použitou maskou do výsledků průzkumu."
    },
    patternmask: {
      // "The pattern can contain string literals and the following placeholders: `9` - for a digit; `a` - for an upper- or lower-case letter; `#` - for a digit or an upper- or lower-case letter. Use backslash `\\` to escape a character."
      pattern: "Vzor může obsahovat řetězcové literály a následující zástupné symboly: \"9\" - pro číslici; \"a\" - pro velké nebo malé písmeno; '#' - pro číslici nebo velké či malé písmeno. Pomocí zpětného lomítka \\ můžete znak uvozovat."
    },
    datetimemask: {
      // "The pattern can contain separator characters and the following placeholders:<br>`m` - Month number.<br>`mm` - Month number, with leading zero for single-digit values.<br>`d` - Day of the month.<br>`dd` - Day of the month, with leading zero for single-digit values.<br>`yy` - The last two digits of the year.<br>`yyyy` - Four-digit year.<br>`H` - Hours in 24-hour format.<br>`HH` - Hours in 24-hour format, with leading zero for single-digit values.<br>`h` - Hours in 12-hour format.<br>`hh` - Hours in 12-hour format, with leading zero for single-digit values.<br>`MM` - Minutes.<br>`ss` - Seconds.<br>`TT` - 12-hour clock period in upper case (AM/PM).<br>`tt` - 12-hour clock period in lower case (am/pm)."
      pattern: "Vzor může obsahovat oddělovací znaky a následující zástupné symboly:<br>'m' - Číslo měsíce.<br>'mm' - Číslo měsíce s úvodní nulou pro jednociferné hodnoty. <br>\"d\" - Den v měsíci. <br>'dd' - Den v měsíci, s úvodní nulou pro jednociferné hodnoty. <br>\"yy\" – poslední dvě číslice roku. <br>\"yyyy\" – čtyřmístný rok. <br>\"H\" – hodiny ve 24hodinovém formátu. <br>\"HH\" – hodiny ve 24hodinovém formátu, s úvodní nulou pro jednociferné hodnoty. <br>\"h\" – hodiny ve 12hodinovém formátu. <br>'hh' - Hodiny ve 12hodinovém formátu, s úvodní nulou pro jednociferné hodnoty. <br>'MM' - Zápisy. <br>'ss' - Sekundy. <br>\"TT\" – 12hodinový časový interval psaný velkými písmeny (AM/PM). <br>'tt' - 12hodinový časový interval psaný malými písmeny (am/pm)."
    },
    numericmask: {
      // "A symbol used to separate the fractional part from the integer part of a displayed number."
      decimalSeparator: "Symbol používaný k oddělení zlomkové části od celočíselné části zobrazeného čísla.",
      // "A symbol used to separate the digits of a large number into groups of three."
      thousandsSeparator: "Symbol používaný k oddělení číslic velkého čísla do skupin po třech.",
      // "Limits how many digits to retain after the decimal point for a displayed number."
      precision: "Omezuje, kolik číslic se má zachovat za desetinnou čárkou zobrazeného čísla."
    },
    currencymask: {
      // "One or several symbols to be displayed before the value."
      prefix: "Jeden nebo více symbolů, které mají být zobrazeny před hodnotou.",
      // "One or several symbols to be displayed after the value."
      suffix: "Jeden nebo více symbolů, které se zobrazí za hodnotou."
    },
    theme: {
      // "This setting applies only to questions outside of a panel."
      isPanelless: "Toto nastavení platí pouze pro otázky mimo panel.",
      // "Sets a supplementary color that highlights key survey elements."
      primaryColor: "Nastaví doplňkovou barvu, která zvýrazní klíčové prvky průzkumu.",
      // "Adjusts the transparency of panels and question boxes relative to the survey background."
      panelBackgroundTransparency: "Upraví průhlednost panelů a polí s otázkami vzhledem k pozadí průzkumu.",
      // "Adjusts the transparency of input elements relative to the survey background."
      questionBackgroundTransparency: "Upraví průhlednost vstupních prvků vzhledem k pozadí průzkumu.",
      // "Sets the corner radius for all rectangular elements. Enable the Advanced Mode if you want to set individual corner radius values for input elements or panels and question boxes."
      cornerRadius: "Nastaví poloměr rohů pro všechny obdélníkové prvky. Rozšířený režim povolte, pokud chcete nastavit jednotlivé hodnoty poloměru rohů pro vstupní prvky nebo panely a pole s otázkami.",
      // "Sets the main background color of the survey."
      "--sjs-general-backcolor-dim": "Nastaví hlavní barvu pozadí průzkumu."
    },
    header: {
      // "The \"Same as container\" option auto-adjusts the header content area width to fit into the HTML element the survey is placed in."
      inheritWidthFrom: "Možnost \"Stejné jako kontejner\" automaticky upraví šířku oblasti obsahu záhlaví tak, aby se vešla do prvku HTML, do kterého je průzkum umístěn.",
      // [Auto-translated] "The width of the header area that contains the survey title and description, measured in pixels."
      textAreaWidth: "Šířka oblasti záhlaví, která obsahuje název a popis průzkumu, měřená v pixelech.",
      // [Auto-translated] "When enabled, the top of the survey overlays the bottom of the header."
      overlapEnabled: "Pokud je tato možnost povolena, horní část průzkumu překrývá spodní část záhlaví.",
      // [Auto-translated] "When set to 0, the height is calculated automatically to accommodate the header's content."
      mobileHeight: "Při nastavení na 0 se výška vypočítá automaticky tak, aby se přizpůsobila obsahu záhlaví."
    },
    // "The \"Same as container\" option auto-adjusts the progress bar area width to fit into the HTML element the survey is placed in."
    progressBarInheritWidthFrom: "Možnost \"Stejné jako kontejner\" automaticky upraví šířku oblasti indikátoru průběhu tak, aby se vešla do prvku HTML, do kterého je průzkum umístěn.",
    // "Used when the 'Survey layout' is set to 'Single input field per page'. In this layout, the matrix is split so that each input field appears on a separate page. Use the {rowIndex} placeholder to insert auto numbering, {rowTitle} or {rowName} to reference the row's title or ID, and {row.columnid} to include the value of a specific matrix column."
    singleInputTitleTemplate: "Používá se, když je \"Rozvržení průzkumu\" nastaveno na \"Jedno vstupní pole na stránku\". V tomto rozvržení je matice rozdělena tak, aby se každé vstupní pole zobrazilo na samostatné stránce. Pomocí zástupného symbolu {rowIndex} vložte automatické číslování, pomocí {rowTitle} nebo {rowName} odkazujte na název nebo ID řádku a pomocí {row.columnid} zahrňte hodnotu konkrétního sloupce matice."
  },
  // Properties
  p: {
    title: {
      // "title"
      name: "nadpis",
      // "Leave it empty, if it is the same as 'Name'"
      title: "Nechte pole prázdné, pokud je stejné jako „Název”"
    },
    // "Allow multiple selection"
    multiSelect: "Povolit výběr více položek",
    // "Show image and video captions"
    showLabel: "Zobrazit popisky obrázku",
    // [Auto-translated] "Swap the order of Yes and No"
    swapOrder: "Prohození pořadí Ano a Ne",
    // "Value"
    value: "Hodnota",
    // "Tab alignment"
    tabAlign: "Zarovnání záložek",
    // [Auto-translated] "File source type"
    sourceType: "Typ zdroje souboru",
    // [Auto-translated] "Fit to container"
    fitToContainer: "Vhodné pro kontejner",
    // [Auto-translated] "Set value expression"
    setValueExpression: "Nastavit výraz hodnoty",
    // "Description"
    description: "Popis", // Auto-generated string
    // "Logo fit"
    logoFit: "Přizpůsobit logo",
    // "Pages"
    pages: "Stránky", // Auto-generated string
    // "Questions"
    questions: "Otázky", // Auto-generated string
    // "Triggers"
    triggers: "Spouštěče",
    // "Custom variables"
    calculatedValues: "Vypočítané hodnoty",
    // "Survey id"
    surveyId: "Id průzkumu", // Auto-generated string
    // "Survey post id"
    surveyPostId: "Id příspěvku průzkumu", // Auto-generated string
    // "Survey show data saving"
    surveyShowDataSaving: "Zobrazit hlášku pro ukládání dat", // Auto-generated string
    // "Question description alignment"
    questionDescriptionLocation: "Umístění popisu otázky",
    // "Progress bar type"
    progressBarType: "Typ ukazatele postupu", // Auto-generated string
    // "Show table of contents (TOC)"
    showTOC: "Zobrazit TOC",
    // "TOC alignment"
    tocLocation: "Umístění Toc",
    // "Question title pattern"
    questionTitlePattern: "Vzor pro nadpis otázky", // Auto-generated string
    // "Survey width mode"
    widthMode: "Režim šířky",
    // "Show brand info"
    showBrandInfo: "Zobrazit informace o značce", // Auto-generated string
    // "Use display values in dynamic texts"
    useDisplayValuesInDynamicTexts: "Použít hodnoty zobrazení v dynamických textech",
    // "Visible if"
    visibleIf: "Viditelná, pokud", // Auto-generated string
    // "Default value expression"
    defaultValueExpression: "Výraz pro výchozí hodnotu",
    // "Required if"
    requiredIf: "Povinná, pokud", // Auto-generated string
    // [Auto-translated] "Reset value if"
    resetValueIf: "Resetovat hodnotu, pokud",
    // [Auto-translated] "Set value if"
    setValueIf: "Nastavte hodnotu, pokud",
    // "Validation rules"
    validators: "Validátory",
    // "Bindings"
    bindings: "Vazby", // Auto-generated string
    // "Render as"
    renderAs: "Vykreslit jako", // Auto-generated string
    // "Attach original items"
    attachOriginalItems: "Připojit původní položky", // Auto-generated string
    // "Choices"
    choices: "Volby",
    // "Choices by url"
    choicesByUrl: "Volby podle Url", // Auto-generated string
    // "Currency"
    currency: "Měna", // Auto-generated string
    // "Cell hint"
    cellHint: "Nápověda buňky", // Auto-generated string
    // "Total maximum fraction digits"
    totalMaximumFractionDigits: "Maximální počet desetinných míst", // Auto-generated string
    // "Total minimum fraction digits"
    totalMinimumFractionDigits: "Minimální počet desetinných míst", // Auto-generated string
    // "Columns"
    columns: "Sloupce", // Auto-generated string
    // "Detail elements"
    detailElements: "Podrobné prvky", // Auto-generated string
    // "Allow adaptive actions"
    allowAdaptiveActions: "Povolit adaptivní akce", // Auto-generated string
    // "Default row value"
    defaultRowValue: "Výchozí hodnota řádku", // Auto-generated string
    // [Auto-translated] "Auto-expand new row details"
    detailPanelShowOnAdding: "Automatické rozbalení podrobností o novém řádku",
    // "Choices lazy load enabled"
    choicesLazyLoadEnabled: "Povolit lazy loading voleb", // Auto-generated string
    // "Choices lazy load page size"
    choicesLazyLoadPageSize: "Počet voleb na jednu stránku", // Auto-generated string
    // "Input field component"
    inputFieldComponent: "Komponenta vstupního pole", // Auto-generated string
    // "Item component"
    itemComponent: "Komponenty položky", // Auto-generated string
    // "Min"
    min: "Min", // Auto-generated string
    // "Max"
    max: "Max", // Auto-generated string
    // "Min value expression"
    minValueExpression: "Minimální hodnota výrazu", // Auto-generated string
    // "Max value expression"
    maxValueExpression: "Maximální hodnota výrazu", // Auto-generated string
    // "Step"
    step: "Krok", // Auto-generated string
    // "Items for auto-suggest"
    dataList: "Datový list",
    // "Input field width (in characters)"
    inputSize: "Velikost položky",
    // [Auto-translated] "Item label width"
    itemTitleWidth: "Šířka popisku položky",
    // [Auto-translated] "Input value alignment"
    inputTextAlignment: "Zarovnání vstupní hodnoty",
    // "Elements"
    elements: "Prvky", // Auto-generated string
    // "Content"
    content: "Obsah", // Auto-generated string
    // "Navigation title"
    navigationTitle: "Napids navigace", // Auto-generated string
    // "Navigation description"
    navigationDescription: "Popis navigace", // Auto-generated string
    // "Long tap"
    longTap: "Dlouhé poklepání", // Auto-generated string
    // "Expand input field dynamically"
    autoGrow: "Automatický růst",
    // "Enable resize handle"
    allowResize: "Povolit změnu velikosti",
    // "Accept carriage return"
    acceptCarriageReturn: "Povolit znak pro \"návrat vozíku\"", // Auto-generated string
    // "Display mode"
    displayMode: "Režim zobrazení",
    // "Rate type"
    rateType: "Typ kurzu", // Auto-generated string
    // "Label"
    label: "Popisek", // Auto-generated string
    // "Content mode"
    contentMode: "Režim obsahu",
    // "Image and thumbnail fit"
    imageFit: "Přizpůsobení obrázku",
    // "Alt text"
    altText: "Alternativní text",
    // "Height"
    height: "Výška", // Auto-generated string
    // [Auto-translated] "Height on smartphones"
    mobileHeight: "Výška na chytrých telefonech",
    // "Pen color"
    penColor: "Barva pera", // Auto-generated string
    // "Background color"
    backgroundColor: "Barva pozadí",
    // "Template elements"
    templateElements: "Prvky šablony", // Auto-generated string
    // "Operator"
    operator: "Operátor", // Auto-generated string
    // "Is variable"
    isVariable: "Je proměnná", // Auto-generated string
    // "Run expression"
    runExpression: "Spustit výraz", // Auto-generated string
    // "Show caption"
    showCaption: "Zobrazit popis", // Auto-generated string
    // "Icon name"
    iconName: "Název ikony", // Auto-generated string
    // "Icon size"
    iconSize: "Velikost ikony", // Auto-generated string
    // [Auto-translated] "Precision"
    precision: "Přesnost", // Auto-generated string
    // [Auto-translated] "Matrix drag handle area"
    matrixDragHandleArea: "Oblast úchytu pro přetažení matice", // Auto-generated string
    // [Auto-translated] "Background image"
    backgroundImage: "Obrázek na pozadí",
    // [Auto-translated] "Background image fit"
    backgroundImageFit: "Přizpůsobení obrázku na pozadí", // Auto-generated string
    // [Auto-translated] "Background image attachment"
    backgroundImageAttachment: "Příloha obrázku na pozadí", // Auto-generated string
    // [Auto-translated] "Background opacity"
    backgroundOpacity: "Neprůhlednost pozadí", // Auto-generated string
    // [Auto-translated] "Allow selective ranking"
    selectToRankEnabled: "Povolit selektivní řazení",
    // [Auto-translated] "Ranking area alignment"
    selectToRankAreasLayout: "Zarovnání oblasti hodnocení",
    // [Auto-translated] "Text to show if all options are selected"
    selectToRankEmptyRankedAreaText: "Text, který se zobrazí, pokud jsou vybrány všechny možnosti",
    // [Auto-translated] "Placeholder text for the ranking area"
    selectToRankEmptyUnrankedAreaText: "Zástupný text pro oblast hodnocení",
    // [Auto-translated] "Allow camera access"
    allowCameraAccess: "Povolit přístup ke kameře", // Auto-generated string
    // [Auto-translated] "Rating icon color mode"
    scaleColorMode: "Barevný režim ikony hodnocení",
    // [Auto-translated] "Smileys color scheme"
    rateColorMode: "Barevné schéma smajlíků",
    // [Auto-translated] "Copy display value"
    copyDisplayValue: "Kopírovat zobrazovanou hodnotu", // Auto-generated string
    // [Auto-translated] "Column span"
    effectiveColSpan: "Rozpětí sloupců",
    // [Auto-translated] "Progress bar area width"
    progressBarInheritWidthFrom: "Šířka oblasti indikátoru průběhu",
    // [Auto-translated] "Theme name"
    themeName: "Název motivu"
  },
  theme: {
    // "Advanced mode"
    advancedMode: "Pokročilý režim",
    // "Page"
    pageTitle: "Font nadpisu stránky",
    // "Question box"
    questionTitle: "Font nadpisu otázky",
    // "Input element"
    editorPanel: "Editor",
    // [Auto-translated] "Lines"
    lines: "Řádky",
    // "Default"
    primaryDefaultColor: "Výchozí",
    // "Hover"
    primaryDarkColor: "Hover",
    // "Selected"
    primaryLightColor: "Vybraný",
    // "Background color"
    backgroundDimColor: "Barva pozadí",
    // "Corner radius"
    cornerRadius: "Poloměr rohu",
    // "Default background"
    backcolor: "Výchozí pozadí",
    // "Hover background"
    hovercolor: "Pozadí při přejetí myší",
    // "Border decoration"
    borderDecoration: "Dekorace hran",
    // [Auto-translated] "Font color"
    fontColor: "Barva písma",
    // [Auto-translated] "Background color"
    backgroundColor: "Barva pozadí",
    // "Default color"
    primaryForecolor: "Výchozí barva",
    // "Disabled color"
    primaryForecolorLight: "Barva vypnutého pole",
    // [Auto-translated] "Font"
    font: "Písmo",
    // "Darker"
    borderDefault: "Hlavní",
    // "Lighter"
    borderLight: "Vedlejší",
    // [Auto-translated] "Font family"
    fontFamily: "Rodina písem",
    // [Auto-translated] "Regular"
    fontWeightRegular: "Pravidelný",
    // [Auto-translated] "Heavy"
    fontWeightHeavy: "Těžký",
    // [Auto-translated] "Semi-bold"
    fontWeightSemiBold: "Polotučné písmo",
    // [Auto-translated] "Bold"
    fontWeightBold: "Tučný",
    // [Auto-translated] "Color"
    color: "Barva",
    // [Auto-translated] "Placeholder color"
    placeholderColor: "Barva zástupného symbolu",
    // [Auto-translated] "Size"
    size: "Velikost",
    // [Auto-translated] "Opacity"
    opacity: "Neprůhlednost",
    // "X"
    boxShadowX: "X",
    // "Y"
    boxShadowY: "Y",
    // [Auto-translated] "Add Shadow Effect"
    boxShadowAddRule: "Přidat stínový efekt",
    // "Blur"
    boxShadowBlur: "Blur",
    // "Spread"
    boxShadowSpread: "Rozšíření",
    // [Auto-translated] "Drop"
    boxShadowDrop: "Kapka",
    // [Auto-translated] "Inner"
    boxShadowInner: "Vnitřní",
    names: {
      // [Auto-translated] "Default"
      default: "Výchozí",
      // [Auto-translated] "Sharp"
      sharp: "Ostrý",
      // [Auto-translated] "Borderless"
      borderless: "Bez okrajů",
      // [Auto-translated] "Flat"
      flat: "Byt",
      // [Auto-translated] "Plain"
      plain: "Planina",
      // [Auto-translated] "Double Border"
      doubleborder: "Dvojitý okraj",
      // [Auto-translated] "Layered"
      layered: "Vrstvený",
      // [Auto-translated] "Solid"
      solid: "Solidní",
      // [Auto-translated] "3D"
      threedimensional: ".3D",
      // [Auto-translated] "Contrast"
      contrast: "Kontrast"
    },
    colors: {
      // [Auto-translated] "Teal"
      teal: "Modrozelený",
      // [Auto-translated] "Blue"
      blue: "Modrý",
      // [Auto-translated] "Purple"
      purple: "Nachový",
      // [Auto-translated] "Orchid"
      orchid: "Orchidea",
      // [Auto-translated] "Tulip"
      tulip: "Tulipán",
      // [Auto-translated] "Brown"
      brown: "Hnědý",
      // [Auto-translated] "Green"
      green: "Zelený",
      // [Auto-translated] "Gray"
      gray: "Šedý"
    }
  },
  creatortheme: {
    // [Auto-translated] "Surface background"
    "--sjs-special-background": "Pozadí Surface",
    // [Auto-translated] "Primary"
    "--sjs-primary-background-500": "Primární",
    // [Auto-translated] "Secondary"
    "--sjs-secondary-background-500": "Sekundární",
    // [Auto-translated] "Surface"
    surfaceScale: "Povrch",
    // [Auto-translated] "UI elements"
    userInterfaceBaseUnit: "Prvky uživatelského rozhraní",
    // [Auto-translated] "Font"
    fontScale: "Písmo",
    names: {
      // [Auto-translated] "Survey Creator 2020"
      sc2020: "Tvůrce průzkumu 2020",
      // [Auto-translated] "Light"
      "default-light": "Světlo",
      // [Auto-translated] "Dark"
      "default-dark": "Temný",
      // [Auto-translated] "Contrast"
      "default-contrast": "Kontrast"
    }
  }
};

setupLocale({ localeCode: "cs", strings: czStrings });