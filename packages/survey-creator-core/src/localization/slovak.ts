import { setupLocale } from "survey-creator-core";

export var skStrings = {
  // survey templates
  survey: {
    // "Edit"
    edit: "Upraviť",
    // "Watch and learn how to create surveys"
    externalHelpLink: "Sledovať a zistiť, ako vytvárať prieskumy",
    // "https://www.youtube.com/channel/UCH2ru9okIcooNZfpIbyq4qQ?view_as=subscriber"
    externalHelpLinkUrl: "https://www.youtube.com/channel/UCH2ru9okIcooNZfpIbyq4qQ?view_as=subscriber",
    // "Please drop a question here from the Toolbox."
    dropQuestion: "Sem zadajte otázku zo súpravy nástrojov.",
    // "Create a rule to customize the flow of the survey."
    addLogicItem: "Vytvoriť pravidlo prispôsobenia priebehu prieskumu.",
    // "Copy"
    copy: "Kopírovať",
    // "Duplicate"
    duplicate: "Duplikovať",
    // "Add to toolbox"
    addToToolbox: "Pridať do súpravy nástrojov",
    // "Delete Panel"
    deletePanel: "Odstrániť panel",
    // "Delete Question"
    deleteQuestion: "Odstrániť otázku",
    // "Convert to"
    convertTo: "Konvertovať na",
    // "Drag element"
    drag: "Presunúť prvok"
  },
  // Creator tabs
  tabs: {
    // "Preview"
    preview: "Textový prieskum",
    // "Themes"
    theme: "Témy",
    // "Translations"
    translation: "Preklad",
    // "Designer"
    designer: "Návrhár prieskumov",
    // "JSON Editor"
    json: "Editor JSON",
    // "Logic"
    logic: "Logika prieskumu"
  },
  // Question types
  qt: {
    // "Default"
    default: "Predvolené",
    // "Checkboxes"
    checkbox: "Začiarkavacie políčko",
    // "Long Text"
    comment: "Komentár",
    // "Image Picker"
    imagepicker: "Nástroj na výber obrázkov",
    // "Ranking"
    ranking: "Hodnotenie",
    // "Image"
    image: "Obrázok",
    // "Dropdown"
    dropdown: "Rozbaľovací zoznam",
    // [Auto-translated] "Multi-Select Dropdown"
    tagbox: "Rozbaľovacia ponuka viacerých výberov",
    // "File Upload"
    file: "Súbor",
    // "HTML"
    html: "Html",
    // "Single-Select Matrix"
    matrix: "Matica (jedna možnosť)",
    // "Multi-Select Matrix"
    matrixdropdown: "Matica (viacero možností)",
    // "Dynamic Matrix"
    matrixdynamic: "Matica (dynamické riadky)",
    // "Multiple Textboxes"
    multipletext: "Text pri viacerých možnostiach",
    // "Panel"
    panel: "Panel",
    // "Dynamic Panel"
    paneldynamic: "Panel (dynamické panely)",
    // "Radio Button Group"
    radiogroup: "Skupina tlačidiel",
    // "Rating Scale"
    rating: "Hodnotenie",
    // [Auto-translated] "Slider"
    slider: "Jazdec",
    // "Single-Line Input"
    text: "Jeden vstup",
    // "Yes/No (Boolean)"
    boolean: "Yes/No (Boolean)",
    // "Expression (read-only)"
    expression: "Výraz (iba na čítanie)",
    // "Signature"
    signaturepad: "Priestor na podpis",
    // [Auto-translated] "Button Group"
    buttongroup: "Skupina tlačidiel"
  },
  toolboxCategories: {
    // "General"
    general: "Všeobecné",
    // "Choice Questions"
    choice: "Voľba Otázky",
    // "Text Input Questions"
    text: "Otázky na zadávanie textu",
    // "Containers"
    containers: "Kontajnery",
    // "Matrix Questions"
    matrix: "Maticové otázky",
    // "Misc"
    misc: "Misc"
  },
  // Strings in SurveyJS Creator
  ed: {
    // "Default ({0})"
    defaultLocale: "Predvolené ({0})",
    // "Survey"
    survey: "Prieskum",
    // "Settings"
    settings: "Nastavenia prieskumu",
    // "Open settings"
    settingsTooltip: "Otvoriť nastavenia prieskumu",
    // [Auto-translated] "Survey Settings"
    surveySettings: "Nastavenia prieskumu",
    // [Auto-translated] "Survey settings"
    surveySettingsTooltip: "Nastavenia prieskumu",
    // [Auto-translated] "Theme Settings"
    themeSettings: "Nastavenia motívu",
    // [Auto-translated] "Theme settings"
    themeSettingsTooltip: "Nastavenia motívu",
    // [Auto-translated] "Creator Settings"
    creatorSettingTitle: "Nastavenia tvorcu",
    // "Show Panel"
    showPanel: "Zobraziť panel",
    // "Hide Panel"
    hidePanel: "Skryť panel",
    // [Auto-translated] "Select previous"
    prevSelected: "Výber predchádzajúceho",
    // [Auto-translated] "Select next"
    nextSelected: "Vyberte položku Ďalej",
    // [Auto-translated] "Focus previous"
    prevFocus: "Zameranie predchádzajúce",
    // [Auto-translated] "Focus next"
    nextFocus: "Zameranie ďalej",
    // [Auto-translated] "Survey"
    surveyTypeName: "Prieskum",
    // [Auto-translated] "Page"
    pageTypeName: "Strana",
    // [Auto-translated] "Panel"
    panelTypeName: "Bledý.",
    // [Auto-translated] "Question"
    questionTypeName: "Otázka",
    // [Auto-translated] "Column"
    columnTypeName: "Stĺpec",
    // "Add New Page"
    addNewPage: "Pridať novú stranu",
    // "Scroll to the Right"
    moveRight: "Prejsť vpravo",
    // "Scroll to the Left"
    moveLeft: "Prejsť vľavo",
    // "Delete Page"
    deletePage: "Odstrániť stranu",
    // "Edit Page"
    editPage: "Upraviť stranu",
    // "Edit"
    edit: "Upraviť",
    // "page"
    newPageName: "stránka",
    // "question"
    newQuestionName: "otázka",
    // "panel"
    newPanelName: "panel",
    // "text"
    newTextItemName: "text",
    // [Auto-translated] "Default"
    defaultV2Theme: "Predvolený",
    // [Auto-translated] "Modern"
    modernTheme: "Moderný",
    // [Auto-translated] "Default (legacy)"
    defaultTheme: "Predvolené nastavenie (staršia verzia)",
    // "Preview Survey Again"
    testSurveyAgain: "Ďalší textový prieskum",
    // "Survey width: "
    testSurveyWidth: "Šírka prieskumu: ",
    // "You had to navigate to"
    navigateToMsg: "Museli ste prejsť na:",
    // "Save Survey"
    saveSurvey: "Uložiť prieskum",
    // "Save Survey"
    saveSurveyTooltip: "Uložiť prieskum",
    // [Auto-translated] "Save Theme"
    saveTheme: "Uložiť motív",
    // [Auto-translated] "Save Theme"
    saveThemeTooltip: "Uložiť motív",
    // [Auto-translated] "Hide errors"
    jsonHideErrors: "Skryť chyby",
    // [Auto-translated] "Show errors"
    jsonShowErrors: "Zobraziť chyby",
    // "Undo"
    undo: "Späť",
    // "Redo"
    redo: "Opakovať",
    // "Undo last change"
    undoTooltip: "Zrušiť poslednú zmenu",
    // "Redo the change"
    redoTooltip: "Opakovať zmenu",
    // [Auto-translated] "Expand"
    expandTooltip: "Rozšíriť",
    // [Auto-translated] "Collapse"
    collapseTooltip: "Kolaps",
    // "Expand All"
    expandAllTooltip: "Rozbaliť všetko",
    // "Collapse All"
    collapseAllTooltip: "Zbaliť všetko",
    // [Auto-translated] "Zoom In"
    zoomInTooltip: "Priblížiť",
    // [Auto-translated] "Zoom to 100%"
    zoom100Tooltip: "Priblíženie na 100 %",
    // [Auto-translated] "Zoom Out"
    zoomOutTooltip: "Oddialiť",
    // [Auto-translated] "Lock expand/collapse state for questions"
    lockQuestionsTooltip: "Uzamknutie stavu rozbalenia/zbalenia otázok",
    // [Auto-translated] "Show more"
    showMoreChoices: "Zobraziť viac",
    // [Auto-translated] "Show less"
    showLessChoices: "Zobraziť menej",
    // "Copy"
    copy: "Kopírovať",
    // "Cut"
    cut: "Vystrihnúť",
    // "Paste"
    paste: "Prilepiť",
    // "Copy selection to clipboard"
    copyTooltip: "Kopírovať výber do schránky",
    // "Cut selection to clipboard"
    cutTooltip: "Vystrihnúť výber do schránky",
    // "Paste from clipboard"
    pasteTooltip: "Prilepiť zo schránky",
    // "Options"
    options: "Možnosti",
    // "Generate Valid JSON"
    generateValidJSON: "Vygenerovať platný JSON",
    // "Generate Readable JSON"
    generateReadableJSON: "Vygenerovať načítateľný JSON",
    // "Toolbox"
    toolbox: "Súprava nástrojov",
    // "Properties"
    "property-grid": "Vlastnosti",
    // [Auto-translated] "Search"
    toolboxSearch: "Hľadať",
    // [Auto-translated] "Type to search..."
    toolboxFilteredTextPlaceholder: "Zadajte reťazec pre vyhľadávanie...",
    // [Auto-translated] "No results found"
    toolboxNoResultsFound: "Nenašli sa žiadne výsledky",
    // [Auto-translated] "Type to search..."
    propertyGridFilteredTextPlaceholder: "Zadajte reťazec pre vyhľadávanie...",
    // [Auto-translated] "No results found"
    propertyGridNoResultsFound: "Nenašli sa žiadne výsledky",
    // [Auto-translated] "Start configuring your form"
    propertyGridPlaceholderTitle: "Začnite konfigurovať formulár",
    // [Auto-translated] "Click any category icon to explore survey settings. Additional settings will become available once you add a survey element to the design surface."
    propertyGridPlaceholderDescription: "Kliknutím na ikonu ľubovoľnej kategórie preskúmate nastavenia prieskumu. Ďalšie nastavenia budú k dispozícii po pridaní prvku prieskumu na návrhovú plochu.",
    // "Please correct JSON."
    correctJSON: "Opravte JSON.",
    // "Survey Results "
    surveyResults: "Výsledok prieskumu: ",
    // "As Table"
    surveyResultsTable: "Ako tabuľku",
    // "As JSON"
    surveyResultsJson: "Ako JSON",
    // "Question Title"
    resultsTitle: "Titul otázky",
    // "Question Name"
    resultsName: "Názov otázky",
    // "Answer Value"
    resultsValue: "Hodnota odpovede",
    // "Display Value"
    resultsDisplayValue: "Zobraziť hodnotu",
    // "Modified"
    modified: "Upravené",
    // "Saving"
    saving: "Ukladanie",
    // "Saved"
    saved: "Uložené",
    // "Error"
    propertyEditorError: "Chyba:",
    // "Error! Editor content is not saved."
    saveError: "Chyba! Obsah editora sa neuložil.",
    // [Auto-translated] "Language Settings"
    translationPropertyGridTitle: "Nastavenia jazyka",
    // [Auto-translated] "Theme Settings"
    themePropertyGridTitle: "Nastavenia motívu",
    // [Auto-translated] "Add Language"
    addLanguageTooltip: "Pridať jazyk",
    // [Auto-translated] "Languages"
    translationLanguages: "Jazyky",
    // [Auto-translated] "Are you certain you wish to delete all strings for this language?"
    translationDeleteLanguage: "Ste si istý, že chcete odstrániť všetky reťazce pre tento jazyk?",
    // "Select language to translate"
    translationAddLanguage: "Výber jazyka na preklad",
    // "All Strings"
    translationShowAllStrings: "Zobraziť všetky reťazce",
    // [Auto-translated] "Used Strings Only"
    translationShowUsedStringsOnly: "Iba použité reťazce",
    // "All Pages"
    translationShowAllPages: "Zobraziť všetky stránky",
    // "No strings to translate. Please change the filter."
    translationNoStrings: "Žiadne reťazce na preklad. Zmeňte filter.",
    // "Export to CSV"
    translationExportToSCVButton: "Exportovať do CSV",
    // "Import from CSV"
    translationImportFromSCVButton: "Importovať z CSV",
    // [Auto-translated] "Auto-translate All"
    translateUsigAI: "Automatický preklad všetkého",
    // [Auto-translated] "Translate from: "
    translateUsigAIFrom: "Preložiť z: ",
    // [Auto-translated] "Untranslated strings"
    translationDialogTitle: "Nepreložené reťazce",
    // "Merge {0} with default locale"
    translationMergeLocaleWithDefault: "Zlúčiť {0} s predvoleným miestnym nastavením",
    // [Auto-translated] "Translation..."
    translationPlaceHolder: "Preklad...",
    // [Auto-translated] "Source: "
    translationSource: "Zdroj: ",
    // [Auto-translated] "Target: "
    translationTarget: "Cieľ: ",
    // [Auto-translated] "YouTube links are not supported."
    translationYouTubeNotSupported: "Odkazy na YouTube nie sú podporované.",
    // [Auto-translated] "Export"
    themeExportButton: "Vývoz",
    // [Auto-translated] "Import"
    themeImportButton: "Import",
    // [Auto-translated] "Export"
    surveyJsonExportButton: "Vývoz",
    // [Auto-translated] "Import"
    surveyJsonImportButton: "Import",
    // [Auto-translated] "Copy to clipboard"
    surveyJsonCopyButton: "Kopírovanie do schránky",
    // [Auto-translated] "Reset theme settings to default"
    themeResetButton: "Obnovenie predvolených nastavení motívu",
    // [Auto-translated] "Do you really want to reset the theme? All your customizations will be lost."
    themeResetConfirmation: "Naozaj chcete resetovať tému? Všetky vaše prispôsobenia sa stratia.",
    // [Auto-translated] "Yes, reset the theme"
    themeResetConfirmationOk: "Áno, obnoviť motív",
    // "Bold"
    bold: "Tučné",
    // "Italic"
    italic: "Kurzíva",
    // "Underline"
    underline: "Podčiarknutie",
    // "Add Question"
    addNewQuestion: "Pridať otázku",
    // "Select page..."
    selectPage: "Vybrať stránku...",
    // [Auto-translated] "Choices are copied from"
    carryForwardChoicesCopied: "Voľby sa kopírujú z",
    // [Auto-translated] "Choices are loaded from a web service."
    choicesLoadedFromWebText: "Možnosti sa načítavajú z webovej služby.",
    // [Auto-translated] "Go to settings"
    choicesLoadedFromWebLinkText: "Prejdite na nastavenia",
    // [Auto-translated] "Preview of loaded choice options"
    choicesLoadedFromWebPreviewTitle: "Ukážka načítaných možností výberu",
    // [Auto-translated] "HTML content will be here."
    htmlPlaceHolder: "Obsah HTML bude tu.",
    // [Auto-translated] "Drop a question from the toolbox here."
    panelPlaceHolder: "Tu položte otázku z panela nástrojov.",
    // [Auto-translated] "The survey is empty. Drag an element from the toolbox or click the button below."
    surveyPlaceHolder: "Prieskum je prázdny. Potiahnite prvok z panela s nástrojmi alebo kliknite na tlačidlo nižšie.",
    // [Auto-translated] "The page is empty. Drag an element from the toolbox or click the button below."
    pagePlaceHolder: "Stránka je prázdna. Potiahnite prvok z panela s nástrojmi alebo kliknite na tlačidlo nižšie.",
    // [Auto-translated] "Drag and drop an image here or click the button below and choose an image to upload"
    imagePlaceHolder: "Presuňte obrázok sem alebo kliknite na tlačidlo nižšie a vyberte obrázok, ktorý chcete nahrať",
    // "Click the \"Add Question\" button below to start creating your form."
    surveyPlaceHolderMobile: "Kliknite na tlačidlo \"Pridať otázku\" nižšie a začnite vytvárať formulár.",
    // [Auto-translated] "Your form is empty"
    surveyPlaceholderTitle: "Formulár je prázdny",
    // [Auto-translated] "Your form is empty"
    surveyPlaceholderTitleMobile: "Formulár je prázdny",
    // [Auto-translated] "Drag an element from the toolbox or click the button below."
    surveyPlaceholderDescription: "Presuňte prvok z panela s nástrojmi alebo kliknite na tlačidlo nižšie.",
    // [Auto-translated] "Drag an element from the toolbox or click the button below."
    surveyPlaceholderDescriptionMobile: "Presuňte prvok z panela s nástrojmi alebo kliknite na tlačidlo nižšie.",
    // [Auto-translated] "No preview"
    previewPlaceholderTitle: "Žiadny náhľad",
    // [Auto-translated] "No preview"
    previewPlaceholderTitleMobile: "Žiadny náhľad",
    // [Auto-translated] "The survey doesn't contain any visible elements."
    previewPlaceholderDescription: "Prieskum neobsahuje žiadne viditeľné prvky.",
    // [Auto-translated] "The survey doesn't contain any visible elements."
    previewPlaceholderDescriptionMobile: "Prieskum neobsahuje žiadne viditeľné prvky.",
    // [Auto-translated] "No strings to translate"
    translationsPlaceholderTitle: "Žiadne reťazce na preklad",
    // [Auto-translated] "No strings to translate"
    translationsPlaceholderTitleMobile: "Žiadne reťazce na preklad",
    // [Auto-translated] "Add elements to your form or change the strings filter in the toolbar."
    translationsPlaceholderDescription: "Pridajte prvky do formulára alebo zmeňte filter reťazcov na paneli s nástrojmi.",
    // [Auto-translated] "Add elements to your form or change the strings filter in the toolbar."
    translationsPlaceholderDescriptionMobile: "Pridajte prvky do formulára alebo zmeňte filter reťazcov na paneli s nástrojmi.",
    // "Click the \"Add Question\" button below to add a new element to the page."
    pagePlaceHolderMobile: "Kliknite na tlačidlo \"Pridať otázku\" nižšie a pridajte na stránku nový prvok.",
    // "Click the \"Add Question\" button below to add a new element to the panel."
    panelPlaceHolderMobile: "Kliknite na tlačidlo \"Pridať otázku\" nižšie a pridajte na panel nový prvok.",
    // [Auto-translated] "Click the button below and choose an image to upload"
    imagePlaceHolderMobile: "Kliknite na tlačidlo nižšie a vyberte obrázok, ktorý chcete nahrať",
    // [Auto-translated] "Choose Image"
    imageChooseImage: "Vyberte obrázok",
    // [Auto-translated] "Add {0}"
    addNewTypeQuestion: "Pridať {0}", // {0} is localizable question type
    // [Auto-translated] "[LOGO]"
    chooseLogoPlaceholder: "[LOGO]",
    // [Auto-translated] "Item "
    choices_Item: "Položka ",
    // [Auto-translated] "Select a file"
    selectFile: "Vyberte súbor",
    // [Auto-translated] "Remove the file"
    removeFile: "Odstránenie súboru",
    lg: {
      // [Auto-translated] "Add New Rule"
      addNewItem: "Pridať nové pravidlo",
      // [Auto-translated] "Create a rule to customize the flow of the survey."
      empty_tab: "Vytvorte pravidlo na prispôsobenie toku prieskumu.",
      // [Auto-translated] "No logical rules"
      logicPlaceholderTitle: "Žiadne logické pravidlá",
      // [Auto-translated] "No logical rules"
      logicPlaceholderTitleMobile: "Žiadne logické pravidlá",
      // [Auto-translated] "Create a rule to customize the flow of the survey."
      logicPlaceholderDescription: "Vytvorte pravidlo na prispôsobenie toku prieskumu.",
      // [Auto-translated] "Create a rule to customize the flow of the survey."
      logicPlaceholderDescriptionMobile: "Vytvorte pravidlo na prispôsobenie toku prieskumu.",
      // "Show/hide page"
      page_visibilityName: "Viditeľnosť strany",
      // [Auto-translated] "Enable/disable page"
      page_enableName: "Povoliť/zakázať stránku",
      // [Auto-translated] "Make page required"
      page_requireName: "Nastavenie požadovanej strany",
      // "Show/hide panel"
      panel_visibilityName: "Viditeľnosť panela",
      // "Enable/disable panel"
      panel_enableName: "Panel povoliť/zakázať",
      // [Auto-translated] "Make panel required"
      panel_requireName: "Vyžaduje sa panel",
      // "Show/hide question"
      question_visibilityName: "Viditeľnosť otázky",
      // "Enable/disable question"
      question_enableName: "Otázku povoliť/zakázať",
      // "Make question required"
      question_requireName: "Vyžaduje sa voliteľná otázka",
      // [Auto-translated] "Reset question value"
      question_resetValueName: "Obnoviť hodnotu otázky",
      // [Auto-translated] "Set question value"
      question_setValueName: "Nastavenie hodnoty otázky",
      // [Auto-translated] "Show/hide column"
      column_visibilityName: "Zobraziť/skryť stĺpec",
      // [Auto-translated] "Enable/disable column"
      column_enableName: "Stĺpec Povoliť/zakázať",
      // [Auto-translated] "Make column required"
      column_requireName: "Nastavenie povinného stĺpca",
      // [Auto-translated] "Reset column value"
      column_resetValueName: "Obnovenie hodnoty stĺpca",
      // [Auto-translated] "Set column value"
      column_setValueName: "Nastavenie hodnoty stĺpca",
      // "Complete survey"
      trigger_completeName: "Dokončiť prieskum",
      // "Set answer"
      trigger_setvalueName: "Nastaviť hodnotu otázky",
      // "Copy answer"
      trigger_copyvalueName: "Kopírovať hodnotu otázky",
      // "Skip to question"
      trigger_skipName: "Prejsť na otázku",
      // "Run expression"
      trigger_runExpressionName: "Spustiť vlastný výraz",
      // "Set \"Thank You\" page markup"
      completedHtmlOnConditionName: "Vlastný text stránky s poďakovaním",
      // "Make the page visible when the logical expression evaluates to true. Otherwise, keep the page invisible."
      page_visibilityDescription: "Stránka bude viditeľná, keď logický výraz vráti hodnotu true. V opačnom prípade sa nebude zobrazovať.",
      // "Make the page visible when the logical expression evaluates to true. Otherwise, keep the panel invisible."
      panel_visibilityDescription: "Panel bude viditeľný, keď logický výraz vráti hodnotu true. V opačnom prípade sa nebude zobrazovať.",
      // "Make the panel and all elements inside it enabled when the logical expression evaluates to true. Otherwise, keep them disabled."
      panel_enableDescription: "Panel a všetky jeho prvky sa povolia, keď logický výraz vráti hodnotu true. V opačnom prípade budú zakázané.",
      // "Make the question visible when the logical expression evaluates to true. Otherwise, keep the question invisible."
      question_visibilityDescription: "Otázka bude viditeľná, keď logický výraz vráti hodnotu true. V opačnom prípade sa nebude zobrazovať.",
      // "Make the question enabled when the logical expression evaluates to true. Otherwise, keep the question disabled."
      question_enableDescription: "Otázka sa povolí, keď logický výraz vráti hodnotu true. V opačnom prípade zostane zakázaná.",
      // "Question becomes required when the logical expression evaluates to true."
      question_requireDescription: "Otázka bude povinná, keď logický výraz vráti hodnotu true.",
      // "When the logical expression evaluates to true, the survey ends, and the respondent sees the \"Thank you\" page."
      trigger_completeDescription: "Keď logický výraz vráti hodnotu true, prieskum bude dokončený a používateľovi sa zobrazí stránka s poďakovaním.",
      // "When question values used in the logical expression are changed, and the expression evaluates to true, the specified value is assigned to the selected question."
      trigger_setvalueDescription: "V prípade, že sa zmenia hodnoty, ktoré sa používajú v rámci logického výrazu, a logický výraz vráti hodnotu true, pre vybratú otázku sa nastaví daná hodnota.",
      // "When question values used in the logical expression are changed, and the expression evaluates to true, the value of the selected question is copied to another question."
      trigger_copyvalueDescription: "V prípade, že sa zmenia hodnoty otázok, ktoré sa používajú v rámci logického výrazu, a logický výraz vráti hodnotu true, hodnota jednej vybratej otázky sa skopíruje na ďalšiu vybratú otázku.",
      // "When the logical expression evaluates to true, the survey focuses/jumps to the selected question."
      trigger_skipDescription: "Keď logický výraz vráti hodnotu true, prieskum prejde/nastaví sa na vybratú otázku.",
      // "When the logical expression evaluates to true, the survey evaluates another expression. Optionally, the result of the latter expression can be assigned as a value to the selected question"
      trigger_runExpressionDescription: "Keď logický výraz vráti hodnotu true, vykoná sa vlastný výraz. Voliteľne môžete nastaviť tento výraz na vybratú otázku.",
      // "If the logical expression evaluates to true, the \"Thank You\" page displays the specified content."
      completedHtmlOnConditionDescription: "Keď logický výraz vráti hodnotu true, predvolený text na stránke s poďakovaním sa zmení na zadaný text.",
      // "When expression: '{0}' returns true"
      itemExpressionText: "Keď výraz: „{0}“ vráti hodnotu true:", // {0} - the expression
      // [Auto-translated] "New rule"
      itemEmptyExpressionText: "Nové pravidlo",
      // "make page {0} visible"
      page_visibilityText: "Stránka {0} bude viditeľná", // {0} page name
      // "make panel {0} visible"
      panel_visibilityText: "Panel {0} bude viditeľný", // {0} panel name
      // "make panel {0} enable"
      panel_enableText: "Panel {0} bude povolený", // {0} panel name
      // "make question {0} visible"
      question_visibilityText: "Otázka {0} bude viditeľná", // {0} question name
      // "make question {0} enable"
      question_enableText: "Otázka {0} bude povolená", // {0} question name
      // "make question {0} required"
      question_requireText: "Otázka {0} sa bude vyžadovať", // {0} question name
      // [Auto-translated] "reset value for question: {0}"
      question_resetValueText: "Resetovať hodnotu pre otázku: {0}", // {0} question name.
      // [Auto-translated] "assign value: {1} to question: {0}"
      question_setValueText: "Priradiť hodnotu: {1} otázku: {0}", // {0} question name and {1} setValueExpression
      // [Auto-translated] "make column {0} of question {1} visible"
      column_visibilityText: "Zviditeľnenie stĺpcových {0} otázok {1}", // {0} column name, {1} question name
      // [Auto-translated] "make column {0} of question {1} enable"
      column_enableText: "Nastavenie {0}  otázky {1} povolenie", // {0} column name, {1} question name
      // [Auto-translated] "make column {0} of question {1} required"
      column_requireText: "Urobiť stĺpec {0} otázky {1} povinné", // {0} column name, {1} question name
      // [Auto-translated] "reset cell value for column: {0}"
      column_resetValueText: "Obnoviť hodnotu bunky pre stĺpec: {0}", // {0} column name
      // [Auto-translated] "assign cell value: {1} to column: {0}"
      column_setValueText: "Priradenie hodnoty bunky: {1} do stĺpca: {0}", // {0} column name and {1} setValueExpression
      // [Auto-translated] "An expression whose result will be assigned to the target question."
      setValueExpressionPlaceholder: "Výraz, ktorého výsledok bude priradený k cieľovej otázke.",
      // "survey becomes completed"
      trigger_completeText: "Prieskum bude dokončený",
      // "set into question: {0} value {1}"
      trigger_setvalueText: "Nastaviť v otázke: {0} hodnotu {1}", // {0} question name, {1} setValue
      // [Auto-translated] "clear question value: {0}"
      trigger_setvalueEmptyText: "jasná hodnota otázky: {0}", // {0} question name
      // "copy into question: {0} value from question {1}"
      trigger_copyvalueText: "Kopírovať do otázky: {0} hodnotu z otázky {1}", // {0} and {1} question names
      // "survey skip to the question {0}"
      trigger_skipText: "V prieskume prejsť na otázku {0}", // {0} question name
      // "run expression: '{0}'"
      trigger_runExpressionText1: "Spustiť výraz: „{0}“", // {0} the expression
      // " and set its result into question: {0}"
      trigger_runExpressionText2: " a nastaviť výsledok v otázke: {0}", // {0} question name
      // "show custom text for the \"Thank You\" page."
      completedHtmlOnConditionText: "Zobraziť vlastný text pre stránku s poďakovaním.",
      // [Auto-translated] "All Questions"
      showAllQuestions: "Všetky otázky",
      // [Auto-translated] "All Action Types"
      showAllActionTypes: "Všetky typy akcií",
      // "Condition(s)"
      conditions: "Podmienka(-y)",
      // "Action(s)"
      actions: "Akcia(-e)",
      // "Define condition(s)"
      expressionEditorTitle: "Definovať podmienku(-y)",
      // "Define action(s)"
      actionsEditorTitle: "Definovať akciu(-e)",
      // "Delete Action"
      deleteAction: "Odstrániť akciu",
      // "Add Action"
      addNewAction: "Pridať novú akciu",
      // "Select action..."
      selectedActionCaption: "Vybrať akciu na pridanie...",
      // "The logic expression is empty or invalid. Please correct it."
      expressionInvalid: "Logický výraz je prázdny alebo neplatný. Opravte ho.",
      // "Please add at least one action."
      noActionError: "Pridajte aspoň jednu akciu.",
      // "Please fix issues in your action(s)."
      actionInvalid: "Odstráňte problémy v akcii(-ách).",
      // [Auto-translated] "Logical rules are incomplete"
      uncompletedRule_title: "Logické pravidlá sú neúplné",
      // [Auto-translated] "You have not completed some of the logical rules. If you leave the tab now, the changes will be lost. Do you still want to leave the tab without completing the changes?"
      uncompletedRule_text: "Nedokončili ste niektoré logické pravidlá. Ak kartu teraz opustíte, zmeny sa stratia. Stále chcete opustiť kartu bez dokončenia zmien?",
      // [Auto-translated] "Yes"
      uncompletedRule_apply: "Áno",
      // [Auto-translated] "No, I want to complete the rules"
      uncompletedRule_cancel: "Nie, chcem dokončiť pravidlá"
    }
  },
  // Property Editors
  pe: {
    panel: {
      // [Auto-translated] "Panel name"
      name: "Názov panela",
      // [Auto-translated] "Panel title"
      title: "Názov panelu",
      // [Auto-translated] "Panel description"
      description: "Popis panelu",
      // [Auto-translated] "Make the panel visible if"
      visibleIf: "Zviditeľnite panel, ak",
      // [Auto-translated] "Make the panel required if"
      requiredIf: "Nastavte panel tak, aby bol povinný, ak",
      // [Auto-translated] "Question order within the panel"
      questionOrder: "Poradie otázok v rámci panelu",
      // [Auto-translated] "Move the panel to page"
      page: "Presunutie panela na stranu",
      // [Auto-translated] "Display the panel on a new line"
      startWithNewLine: "Zobrazenie panela na novom riadku",
      // [Auto-translated] "Panel collapse state"
      state: "Stav zbalenia panela",
      // [Auto-translated] "Inline panel width"
      width: "Šírka vnoreného panela",
      // [Auto-translated] "Minimum panel width"
      minWidth: "Minimálna šírka panelu",
      // [Auto-translated] "Maximum panel width"
      maxWidth: "Maximálna šírka panelu",
      // [Auto-translated] "Number this panel"
      showNumber: "Očíslujte tento panel"
    },
    panellayoutcolumn: {
      // [Auto-translated] "Effective width, %"
      effectiveWidth: "Efektívna šírka, %",
      // [Auto-translated] "Question title width, px"
      questionTitleWidth: "Šírka názvu otázky, px"
    },
    paneldynamic: {
      // [Auto-translated] "Panel name"
      name: "Názov panela",
      // [Auto-translated] "Panel title"
      title: "Názov panelu",
      // [Auto-translated] "Panel description"
      description: "Popis panelu",
      // [Auto-translated] "Entry display mode"
      displayMode: "Režim vstupného zobrazenia",
      // [Auto-translated] "Make the panel visible if"
      visibleIf: "Zviditeľnite panel, ak",
      // [Auto-translated] "Make the panel required if"
      requiredIf: "Nastavte panel tak, aby bol povinný, ak",
      // [Auto-translated] "Move the panel to page"
      page: "Presunutie panela na stranu",
      // [Auto-translated] "Display the panel on a new line"
      startWithNewLine: "Zobrazenie panela na novom riadku",
      // [Auto-translated] "Panel collapse state"
      state: "Stav zbalenia panela",
      // [Auto-translated] "Inline panel width"
      width: "Šírka vnoreného panela",
      // [Auto-translated] "Minimum panel width"
      minWidth: "Minimálna šírka panela",
      // [Auto-translated] "Maximum panel width"
      maxWidth: "Maximálna šírka panela",
      // [Auto-translated] "Confirm entry removal"
      confirmDelete: "Potvrdiť odstránenie záznamu",
      // [Auto-translated] "Entry description pattern"
      templateDescription: "Vzor popisu záznamu",
      // [Auto-translated] "Entry title pattern"
      templateTitle: "Vzor názvu záznamu",
      // [Auto-translated] "Empty panel text"
      noEntriesText: "Prázdny text panela",
      // [Auto-translated] "Tab title pattern"
      templateTabTitle: "Vzor názvu tabulátora",
      // [Auto-translated] "Tab title placeholder"
      tabTitlePlaceholder: "Zástupný symbol názvu tabulátora",
      // [Auto-translated] "Make an individual entry visible if"
      templateVisibleIf: "Zviditeľnenie jednotlivého záznamu, ak",
      // [Auto-translated] "Number the panel"
      showNumber: "Očíslujte panel",
      // [Auto-translated] "Panel title alignment"
      titleLocation: "Zarovnanie názvu panela",
      // [Auto-translated] "Panel description alignment"
      descriptionLocation: "Zarovnanie popisu panela",
      // [Auto-translated] "Question title alignment"
      templateQuestionTitleLocation: "Zarovnanie názvu otázky",
      // [Auto-translated] "Question title width"
      templateQuestionTitleWidth: "Šírka názvu otázky",
      // [Auto-translated] "Error message alignment"
      templateErrorLocation: "Zarovnanie chybových hlásení",
      // [Auto-translated] "New entry location"
      newPanelPosition: "Nové miesto vstupu",
      // [Auto-translated] "Prevent duplicate responses in the following question"
      keyName: "Zabránenie duplicitným odpovediam v nasledujúcej otázke"
    },
    question: {
      // [Auto-translated] "Question name"
      name: "Názov otázky",
      // [Auto-translated] "Question title"
      title: "Názov otázky",
      // [Auto-translated] "Question description"
      description: "Opis otázky",
      // [Auto-translated] "Show the title and description"
      showTitle: "Zobraziť názov a popis",
      // [Auto-translated] "Make the question visible if"
      visibleIf: "Zviditeľnite otázku, ak",
      // [Auto-translated] "Make the question required if"
      requiredIf: "Urobte otázku povinnou, ak",
      // [Auto-translated] "Move the question to page"
      page: "Presunutie otázky na stránku",
      // [Auto-translated] "Question box collapse state"
      state: "Stav zbalenia poľa otázok",
      // [Auto-translated] "Number this question"
      showNumber: "Číslo tejto otázky",
      // [Auto-translated] "Question title alignment"
      titleLocation: "Zarovnanie názvu otázky",
      // [Auto-translated] "Question description alignment"
      descriptionLocation: "Zarovnanie popisu otázky",
      // [Auto-translated] "Error message alignment"
      errorLocation: "Zarovnanie chybových hlásení",
      // [Auto-translated] "Increase the inner indent"
      indent: "Zväčšenie vnútornej zarážky",
      // [Auto-translated] "Inline question width"
      width: "Vnorená šírka otázky",
      // [Auto-translated] "Minimum question width"
      minWidth: "Minimálna šírka otázky",
      // [Auto-translated] "Maximum question width"
      maxWidth: "Maximálna šírka otázky",
      // [Auto-translated] "Update input field value"
      textUpdateMode: "Aktualizácia hodnoty vstupného poľa"
    },
    signaturepad: {
      // [Auto-translated] "Signature area width"
      signatureWidth: "Šírka oblasti podpisu",
      // [Auto-translated] "Signature area height"
      signatureHeight: "Výška oblasti podpisu",
      // [Auto-translated] "Auto-scale the signature area"
      signatureAutoScaleEnabled: "Automatická zmena mierky oblasti podpisu",
      // [Auto-translated] "Show a placeholder within signature area"
      showPlaceholder: "Zobrazenie zástupného objektu v oblasti podpisu",
      // [Auto-translated] "Placeholder text"
      placeholder: "Zástupný text",
      // [Auto-translated] "Placeholder text in read-only or preview mode"
      placeholderReadOnly: "Zástupný text v režime iba na čítanie alebo v režime ukážky",
      // [Auto-translated] "Show the Clear button within signature area"
      allowClear: "Zobrazenie tlačidla Vymazať v oblasti podpisu",
      // [Auto-translated] "Minimum stroke width"
      penMinWidth: "Minimálna šírka zdvihu",
      // [Auto-translated] "Maximum stroke width"
      penMaxWidth: "Maximálna šírka zdvihu",
      // [Auto-translated] "Stroke color"
      penColor: "Farba ťahu"
    },
    comment: {
      // [Auto-translated] "Input field height (in lines)"
      rows: "Výška vstupného poľa (v riadkoch)"
    },
    // "Question numbering"
    showQuestionNumbers: "Zobraziť čísla otázok",
    // "Question indexing type"
    questionStartIndex: "Otázka sa začína indexom (1, 2 alebo „A“, „a“)",
    expression: {
      // [Auto-translated] "Expression name"
      name: "Názov výrazu",
      // [Auto-translated] "Expression title"
      title: "Názov výrazu",
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
      title: "Názov prieskumu",
      // [Auto-translated] "Survey description"
      description: "Opis prieskumu",
      // [Auto-translated] "Make the survey read-only"
      readOnly: "Nastavenie prieskumu iba na čítanie"
    },
    page: {
      // [Auto-translated] "Page name"
      name: "Názov stránky",
      // [Auto-translated] "Page title"
      title: "Názov stránky",
      // [Auto-translated] "Page description"
      description: "Popis stránky",
      // [Auto-translated] "Make the page visible if"
      visibleIf: "Zviditeľniť stránku, ak",
      // [Auto-translated] "Make the page required if"
      requiredIf: "Nastavte stránku ako povinnú, ak",
      // [Auto-translated] "Time limit to complete the page"
      timeLimit: "Časový limit na dokončenie stránky",
      // [Auto-translated] "Question order on the page"
      questionOrder: "Poradie otázok na stránke"
    },
    matrixdropdowncolumn: {
      // [Auto-translated] "Column name"
      name: "Názov stĺpca",
      // [Auto-translated] "Column title"
      title: "Názov stĺpca",
      // [Auto-translated] "Prevent duplicate responses"
      isUnique: "Zabráňte duplicitným odpovediam",
      // [Auto-translated] "Column width"
      width: "Šírka stĺpca",
      // [Auto-translated] "Minimum column width"
      minWidth: "Minimálna šírka stĺpca",
      // [Auto-translated] "Input field height (in lines)"
      rows: "Výška vstupného poľa (v riadkoch)",
      // [Auto-translated] "Make the column visible if"
      visibleIf: "Zviditeľnite stĺpec, ak",
      // [Auto-translated] "Make the column required if"
      requiredIf: "Nastavte stĺpec ako povinný, ak",
      // [Auto-translated] "Each option in a separate column"
      showInMultipleColumns: "Každá možnosť v samostatnom stĺpci"
    },
    matrixcolumn: {
      // [Auto-translated] "Clear others in the same row"
      isExclusive: "Vymazanie ostatných v rovnakom riadku"
    },
    multipletextitem: {
      // [Auto-translated] "Name"
      name: "Meno",
      // [Auto-translated] "Title"
      title: "Titul"
    },
    masksettings: {
      // [Auto-translated] "Save masked value in survey results"
      saveMaskedValue: "Uložte maskovanú hodnotu do výsledkov prieskumu"
    },
    patternmask: {
      // [Auto-translated] "Value pattern"
      pattern: "Hodnotový vzor"
    },
    datetimemask: {
      // [Auto-translated] "Minimum value"
      min: "Minimálna hodnota",
      // [Auto-translated] "Maximum value"
      max: "Maximálna hodnota"
    },
    numericmask: {
      // [Auto-translated] "Allow negative values"
      allowNegativeValues: "Povolenie záporných hodnôt",
      // [Auto-translated] "Thousands separator"
      thousandsSeparator: "Oddeľovač tisícov",
      // [Auto-translated] "Decimal separator"
      decimalSeparator: "Oddeľovač desatinných miest",
      // [Auto-translated] "Value precision"
      precision: "Presnosť hodnoty",
      // [Auto-translated] "Minimum value"
      min: "Minimálna hodnota",
      // [Auto-translated] "Maximum value"
      max: "Maximálna hodnota"
    },
    currencymask: {
      // [Auto-translated] "Currency prefix"
      prefix: "Predčíslievanie meny",
      // [Auto-translated] "Currency suffix"
      suffix: "Prípona meny"
    },
    // [Auto-translated] "Clear others when selected"
    isExclusive: "Vymažte ostatné, keď sú vybraté",
    // [Auto-translated] "Display both text and value"
    showValue: "Zobrazenie textu aj hodnoty",
    // [Auto-translated] "Require user to enter a comment"
    isCommentRequired: "Vyžadovať od používateľa zadanie komentára",
    // "Display area height"
    imageHeight: "Výška obrázka",
    // "Display area width"
    imageWidth: "Šírka obrázka",
    // "Join identifier"
    valueName: "Názov hodnoty",
    // [Auto-translated] "Default display value for dynamic texts"
    defaultDisplayValue: "Predvolená zobrazená hodnota pre dynamické texty",
    // [Auto-translated] "Label alignment"
    rateDescriptionLocation: "Zarovnanie štítkov",
    // [Auto-translated] "Input field width (in characters)"
    size: "Šírka vstupného poľa (v znakoch)",
    // [Auto-translated] "Cell error message alignment"
    cellErrorLocation: "Zarovnanie chybového hlásenia bunky",
    // [Auto-translated] "Enabled"
    enabled: "Povolené",
    // [Auto-translated] "Disabled"
    disabled: "Invalidný",
    // [Auto-translated] "Inherit"
    inherit: "Zdediť",
    // "Apply"
    apply: "Použiť",
    // "OK"
    ok: "OK",
    // "Save"
    save: "Uložiť",
    // [Auto-translated] "Clear"
    clear: "Jasný",
    // "Save"
    saveTooltip: "Uložiť",
    // "Cancel"
    cancel: "Zrušiť",
    // [Auto-translated] "Set"
    set: "Množina",
    // "Reset"
    reset: "Obnovenie pôvodného nastavenia",
    // [Auto-translated] "Change"
    change: "Zmeniť",
    // "Refresh"
    refresh: "Obnoviť",
    // [Auto-translated] "Close"
    close: "Zavrieť",
    // "Delete"
    delete: "Vymazať",
    // "Add"
    add: "Pridať",
    // "Add New"
    addNew: "Pridať nové",
    // "Click to add an item..."
    addItem: "Kliknutím pridať položku...",
    // [Auto-translated] "Click to remove the item..."
    removeItem: "Kliknutím položku odstránite...",
    // [Auto-translated] "Drag the item"
    dragItem: "Potiahnite položku",
    // "Other"
    addOther: "Iné",
    // "Select All"
    addSelectAll: "Vybrať všetky",
    // "None"
    addNone: "Žiadne",
    // "Remove All"
    removeAll: "Odstrániť všetko",
    // "Edit"
    edit: "Upraviť",
    // "Return without saving"
    back: "Návrat bez uloženia",
    // "Return without saving"
    backTooltip: "Návrat bez uloženia",
    // "Save and return"
    saveAndBack: "Uložiť a vrátiť sa",
    // "Save and return"
    saveAndBackTooltip: "Uložiť a vrátiť sa",
    // [Auto-translated] "Done"
    doneEditing: "Robené",
    // "Edit Choices"
    editChoices: "Upraviť možnosti",
    // "Show Choices"
    showChoices: "Zobraziť možnosti",
    // "Move"
    move: "Presunúť",
    // "<empty>"
    empty: "<empty>",
    // [Auto-translated] "Value is empty"
    emptyValue: "Hodnota je prázdna",
    // "Manual Entry"
    fastEntry: "Rýchle zadanie",
    // "Value '{0}' is not unique"
    fastEntryNonUniqueError: "Hodnota \"{0}\" nie je jedinečná",
    // [Auto-translated] "Please limit the number of items from {0} to {1}"
    fastEntryChoicesCountError: "Obmedzte počet položiek od {0} do {1}",
    // [Auto-translated] "Please enter at least {0} items"
    fastEntryChoicesMinCountError: "Zadajte aspoň {0} položiek",
    // [Auto-translated] "Enter the list of choice options and their IDs in the following format:\n\nid|option\n\nA choice option ID is not visible to respondents and can be used in conditional rules."
    fastEntryPlaceholder: "Zadajte zoznam možností výberu a ich ID v nasledujúcom formáte:\n\nid|možnosť\n\nID možnosti voľby nie je viditeľné pre respondentov a môže byť použité v podmienených pravidlách.",
    // "Form Entry"
    formEntry: "Zadanie formulára",
    // "Test the service"
    testService: "Test služby",
    // "Please select the element"
    itemSelectorEmpty: "Vyberte prvok",
    // "Please select the action"
    conditionActionEmpty: "Vyberte akciu",
    // "Select a question..."
    conditionSelectQuestion: "Vybrať otázku...",
    // "Select a page..."
    conditionSelectPage: "Vybrať stránku...",
    // "Select a panel..."
    conditionSelectPanel: "Vybrať panel...",
    // "Please enter/select the value"
    conditionValueQuestionTitle: "Zadajte/vyberte hodnotu",
    // "Press ctrl+space to get expression completion hint"
    aceEditorHelp: "Klávesovou skratkou ctrl+space získate tip na dokončenie výrazu",
    // "Current row"
    aceEditorRowTitle: "Aktuálny riadok",
    // "Current panel"
    aceEditorPanelTitle: "Aktuálny panel",
    // "For more details please check the documentation"
    showMore: "Ďalšie podrobnosti nájdete v dokumentácii",
    // "Available questions"
    assistantTitle: "Dostupné otázky:",
    // "There is should be at least one column or row"
    cellsEmptyRowsColumns: "K dispozícii má byť aspoň jeden stĺpec alebo riadok",
    // [Auto-translated] "Review before submit"
    showPreviewBeforeComplete: "Kontrola pred odoslaním",
    // [Auto-translated] "Enabled by a condition"
    overridingPropertyPrefix: "Povolené podmienečnou podmienkou",
    // [Auto-translated] "Reset"
    resetToDefaultCaption: "Vynulovanie",
    // "Please enter a value"
    propertyIsEmpty: "Zadajte hodnotu",
    // "Please enter a unique value"
    propertyIsNoUnique: "Zadajte jedinečnú hodnotu",
    // "Please enter a unique name"
    propertyNameIsNotUnique: "Zadajte jedinečný názov",
    // "Do not use reserved words: \"item\", \"choice\", \"panel\", \"row\"."
    propertyNameIsIncorrect: "Nepoužívajte vyhradené slová: \"položka\", \"výber\", \"panel\", \"riadok\".",
    // "You don't have any items yet"
    listIsEmpty: "Pridajte novú položku",
    // [Auto-translated] "You don't have any choices yet"
    "listIsEmpty@choices": "Zatiaľ nemáte na výber",
    // [Auto-translated] "You don't have any columns yet"
    "listIsEmpty@columns": "Zatiaľ nemáte žiadne stĺpce",
    // [Auto-translated] "You don't have layout columns yet"
    "listIsEmpty@gridLayoutColumns": "Ešte nemáte stĺpce rozloženia",
    // [Auto-translated] "You don't have any rows yet"
    "listIsEmpty@rows": "Zatiaľ nemáte žiadne riadky",
    // [Auto-translated] "You don't have any validation rules yet"
    "listIsEmpty@validators": "Zatiaľ nemáte žiadne overovacie pravidlá",
    // [Auto-translated] "You don't have any custom variables yet"
    "listIsEmpty@calculatedValues": "Zatiaľ nemáte žiadne vlastné premenné",
    // [Auto-translated] "You don't have any triggers yet"
    "listIsEmpty@triggers": "Zatiaľ nemáte žiadne spúšťače",
    // [Auto-translated] "You don't have any links yet"
    "listIsEmpty@navigateToUrlOnCondition": "Zatiaľ nemáte žiadne odkazy",
    // [Auto-translated] "You don't have any pages yet"
    "listIsEmpty@pages": "Zatiaľ nemáte žiadne stránky",
    // [Auto-translated] "Add new choice"
    "addNew@choices": "Pridanie novej možnosti",
    // [Auto-translated] "Add new column"
    "addNew@columns": "Pridať nový stĺpec",
    // [Auto-translated] "Add new row"
    "addNew@rows": "Pridať nový riadok",
    // [Auto-translated] "Add new rule"
    "addNew@validators": "Pridať nové pravidlo",
    // [Auto-translated] "Add new variable"
    "addNew@calculatedValues": "Pridanie novej premennej",
    // [Auto-translated] "Add new trigger"
    "addNew@triggers": "Pridať nový spúšťač",
    // [Auto-translated] "Add new URL"
    "addNew@navigateToUrlOnCondition": "Pridať novú URL adresu",
    // [Auto-translated] "Add new page"
    "addNew@pages": "Pridať novú stránku",
    // "Expression is empty"
    expressionIsEmpty: "Výraz je prázdny",
    // "Value"
    value: "Hodnota",
    // "Text"
    text: "Text",
    // "Row ID"
    rowid: "ID riadka",
    // "Image or video file URL"
    imageLink: "Odkaz na obrázok",
    // "Edit column: {0}"
    columnEdit: "Upraviť stĺpec: {0}",
    // "Edit item: {0}"
    itemEdit: "Upraviť položku: {0}",
    // "URL"
    url: "URL",
    // "Path to data"
    path: "Cesta",
    choicesbyurl: {
      // [Auto-translated] "Web service URL"
      url: "URL adresa webovej služby",
      // [Auto-translated] "Get value to store from the following property"
      valueName: "Získanie hodnoty na uloženie z nasledujúcej vlastnosti"
    },
    // "Get value to display from the following property"
    titleName: "Titulný názov",
    // [Auto-translated] "Get file URLs from the following property"
    imageLinkName: "Získanie URL adries súborov z nasledujúcej vlastnosti",
    // "Accept empty response"
    allowEmptyResponse: "Povoliť prázdnu odozvu",
    // "Title"
    titlePlaceholder: "Sem zadajte titul",
    // "Survey Title"
    surveyTitlePlaceholder: "Sem vložte titul prieskumu",
    // "Page {num}"
    pageTitlePlaceholder: "Sem zadajte titul stránky",
    // [Auto-translated] "Start Page"
    startPageTitlePlaceholder: "Úvodná stránka",
    // "Description"
    descriptionPlaceholder: "Zadať opis",
    // "Description"
    surveyDescriptionPlaceholder: "Zadať opis prieskumu",
    // "Description"
    pageDescriptionPlaceholder: "Zadať opis stránky",
    // [Auto-translated] "Wrap choices"
    textWrapEnabled: "Možnosti zabalenia",
    // "Enable the \"Other\" option"
    showOtherItem: "Obsahuje inú položku",
    // "Rename the \"Other\" option"
    otherText: "Text inej položky",
    // "Enable the \"None\" option"
    showNoneItem: "Neobsahuje žiadnu položku",
    // [Auto-translated] "Enable the \"Refuse to Answer\" option"
    showRefuseItem: "Povoľte možnosť \"Odmietnuť odpoveď\"",
    // [Auto-translated] "Enable the \"Don't Know\" option"
    showDontKnowItem: "Povoľte možnosť \"Neviem\"",
    // "Rename the \"None\" option"
    noneText: "Text pri žiadnej položke",
    // "Enable the \"Select All\" option"
    showSelectAllItem: "Obsahuje vybraté všetky položky",
    // "Rename the \"Select All\" option"
    selectAllText: "Text pri výbere všetkých položiek",
    // "Minimum value for auto-generated items"
    choicesMin: "Minimálna hodnota pre automaticky vygenerované položky",
    // "Maximum value for auto-generated items"
    choicesMax: "Maximálna hodnota pre automaticky vygenerované položky",
    // "Step value for auto-generated items"
    choicesStep: "Rozdiel medzi automaticky vygenerovanými položkami",
    // "Name"
    name: "Názov",
    // "Title"
    title: "Titul",
    // "Cell input type"
    cellType: "Typ bunky",
    // "Column count"
    colCount: "Počet stĺpcov",
    // "Choice order"
    choicesOrder: "Poradie vybratých možností",
    // [Auto-translated] "Allow custom choices"
    allowCustomChoices: "Povolenie vlastných volieb",
    // "Visible"
    visible: "Je viditeľné?",
    // "Required"
    isRequired: "Vyžaduje sa?",
    // [Auto-translated] "Mark as required"
    markRequired: "Označiť podľa potreby",
    // [Auto-translated] "Remove the required mark"
    removeRequiredMark: "Odstráňte požadovanú značku",
    // "Require an answer in each row"
    eachRowRequired: "Vyžadovať odpoveď pre všetky riadky",
    // [Auto-translated] "Prevent duplicate responses in rows"
    eachRowUnique: "Zabráňte duplicitným odpovediam v riadkoch",
    // "Error message for required questions"
    requiredErrorText: "Text chyby pri povinných položkách",
    // "Display the question on a new line"
    startWithNewLine: "Začína sa novým riadkom?",
    // "Rows"
    rows: "Počet riadkov",
    // "Columns"
    cols: "Počet stĺpcov",
    // "Placeholder text within input field"
    placeholder: "Vložiť zástupný symbol",
    // "Show preview area"
    showPreview: "Zobraziť oblasť náhľadu",
    // "Store file content in JSON result as text"
    storeDataAsText: "Uložiť obsahu súboru vo výsledku JSON ako text",
    // "Maximum file size (in bytes)"
    maxSize: "Maximálna veľkosť súboru v bajtoch",
    // [Auto-translated] "Maximum number of files"
    maxFiles: "Maximálny počet súborov",
    // "Row count"
    rowCount: "Počet riadkov",
    // "Columns layout"
    columnLayout: "Rozloženie stĺpcov",
    // "\"Add Row\" button alignment"
    addRowButtonLocation: "Poloha tlačidla na pridanie riadka",
    // [Auto-translated] "Transpose rows to columns"
    transposeData: "Transponovanie riadkov do stĺpcov",
    // "\"Add Row\" button text"
    addRowText: "Text tlačidla na pridanie riadka",
    // "\"Remove Row\" button text"
    removeRowText: "Text tlačidla na odstránenie riadka",
    // [Auto-translated] "Input field title pattern"
    singleInputTitleTemplate: "Vzor názvu vstupného poľa",
    // "Minimum rating value"
    rateMin: "Minimálne hodnotenie",
    // "Maximum rating value"
    rateMax: "Maximálne hodnotenie",
    // "Step value"
    rateStep: "Krok hodnotenia",
    // "Minimum value label"
    minRateDescription: "Opis minimálneho hodnotenia",
    // "Maximum value label"
    maxRateDescription: "opis maximálneho hodnotenia",
    // "Input type"
    inputType: "Typ vstupu",
    // "Default Answer"
    defaultValue: "Predvolená hodnota",
    // "Default texts"
    cellsDefaultRow: "Predvolené texty buniek",
    // "Edit survey settings"
    surveyEditorTitle: "Upraviť nastavenia prieskumu",
    // "Edit: {0}"
    qEditorTitle: "Upraviť: {0}",
    // "Maximum character limit"
    maxLength: "Maximálna dĺžka",
    // "Build"
    buildExpression: "Zostaviť",
    // "Edit"
    editExpression: "Upraviť",
    // [Auto-translated] "and"
    and: "a",
    // [Auto-translated] "or"
    or: "alebo",
    // "Remove"
    remove: "Odstrániť",
    // "Add Condition"
    addCondition: "Pridať podmienku",
    // [Auto-translated] "Select a question to start configuring conditions."
    emptyLogicPopupMessage: "Vyberte otázku a začnite konfigurovať podmienky.",
    // [Auto-translated] "If"
    if: "Ak",
    // [Auto-translated] "then"
    then: "potom",
    // [Auto-translated] "Target question"
    setToName: "Cieľová otázka",
    // [Auto-translated] "Question to copy answer from"
    fromName: "Otázka na kopírovanie odpovede",
    // [Auto-translated] "Question to skip to"
    gotoName: "Otázka na preskočenie",
    // [Auto-translated] "Rule is incorrect"
    ruleIsNotSet: "Pravidlo je nesprávne",
    // [Auto-translated] "Add to the survey results"
    includeIntoResult: "Pridanie k výsledkom prieskumu",
    // "Make the title and description visible"
    showTitle: "Zobraziť/skryť titul",
    // "Expand/collapse title"
    expandCollapseTitle: "Rozbaliť/zbaliť titul",
    // "Select a survey language"
    locale: "Predvolený jazyk",
    // "Select device type"
    simulator: "Vybrať zariadenie",
    // "Switch to landscape orientation"
    landscapeOrientation: "Na šírku",
    // [Auto-translated] "Switch to portrait orientation"
    portraitOrientation: "Prepnutie na orientáciu na výšku",
    // "Clear hidden question values"
    clearInvisibleValues: "Odstrániť neviditeľné hodnoty",
    // "Limit to one response"
    cookieName: "Názov súboru cookie (na zabránenie lokálneho spustenia prieskumu dvakrát)",
    // "Auto-save survey progress on page change"
    partialSendEnabled: "Odoslať výsledky prieskumu na ďalšiu stránku",
    // "Save the \"Other\" option value as a separate property"
    storeOthersAsComment: "Uložiť hodnotu „iné“ v samostatnom poli",
    // "Show page titles"
    showPageTitles: "Zobraziť tituly stránok",
    // "Show page numbers"
    showPageNumbers: "Zobraziť čísla stránok",
    // "\"Previous Page\" button text"
    pagePrevText: "Text tlačidla pre predchádzajúcu stránku",
    // "\"Next Page\" button text"
    pageNextText: "Text tlačidla pre ďalšiu stránku",
    // "\"Complete Survey\" button text"
    completeText: "Text tlačidla dokončenia",
    // "\"Review Answers\" button text"
    previewText: "Text tlačidla ukážky",
    // "\"Edit Answer\" button text"
    editText: "Text tlačidla úpravy",
    // "\"Start Survey\" button text"
    startSurveyText: "Text tlačidla spustenia",
    // "Show navigation buttons"
    showNavigationButtons: "Zobraziť navigačné tlačidlá (predvolená navigácia)",
    // [Auto-translated] "Navigation buttons alignment"
    navigationButtonsLocation: "Zarovnanie navigačných tlačidiel",
    // "Show the \"Previous Page\" button"
    showPrevButton: "Zobraziť tlačidlo predchádzajúce (používateľ sa môže vráiť na predchádzajúcu stránku)",
    // "First page is a start page"
    firstPageIsStartPage: "Prvá stránka v prieskume je úvodná stránka.",
    // "Show the \"Thank You\" page"
    showCompletePage: "Na konci zobraziť stránku s dokončením (completedHtml)",
    // "Auto-advance to the next page"
    autoAdvanceEnabled: "Po zodpovedaní všetkých otázok prejsť na ďalšiu stránku automaticky",
    // [Auto-translated] "Complete the survey automatically"
    autoAdvanceAllowComplete: "Vyplňte prieskum automaticky",
    // "Show the progress bar"
    showProgressBar: "Zobraziť indikátor priebehu",
    // [Auto-translated] "Progress bar alignment"
    progressBarLocation: "Zarovnanie indikátora priebehu",
    // "Question title alignment"
    questionTitleLocation: "Poloha titulu otázky",
    // "Question title width"
    questionTitleWidth: "Šírka názvu otázky",
    // "Required symbol(s)"
    requiredMark: "Povinný symbol(-y) otázok",
    // "Question title template, default is: '{no}. {require} {title}'"
    questionTitleTemplate: "Šablóna titulu otázky, predvolená je:  „{no}. {require} {title}“",
    // "Error message alignment"
    questionErrorLocation: "Poloha chyby otázky",
    // "Focus first question on a new page"
    autoFocusFirstQuestion: "Prechod na prvú otázku pri zmene stránky",
    // "Question order"
    questionOrder: "Poradie prvkov na stránke",
    // "Time limit to complete the survey"
    timeLimit: "Maximálny čas na dokončenie prieskumu",
    // "Time limit to complete one page"
    timeLimitPerPage: "Maximálny čas na dokončenie stránky v rámci prieskumu",
    // [Auto-translated] "Use a timer"
    showTimer: "Použitie časovača",
    // "Timer alignment"
    timerLocation: "Zobraziť panel s časovačom",
    // "Timer mode"
    timerInfoMode: "Zobraziť režim panela s časovačom",
    // "Enable entry addition"
    allowAddPanel: "Povoliť pridanie panela",
    // "Enable entry removal"
    allowRemovePanel: "Povoliť odstránenie panela",
    // "\"Add Entry\" button text"
    addPanelText: "Text pri pridaní panela",
    // "\"Remove Entry\" button text"
    removePanelText: "Text pri odstránení panela",
    // "Show all elements on one page"
    isSinglePage: "Zobraziť všetky prvky na jednej stránke",
    // "HTML markup"
    html: "Html",
    // [Auto-translated] "Answer"
    setValue: "Odpoveď",
    // [Auto-translated] "Storage format"
    dataFormat: "Formát úložiska",
    // [Auto-translated] "Enable row addition"
    allowAddRows: "Povoliť pridávanie riadkov",
    // [Auto-translated] "Enable row removal"
    allowRemoveRows: "Povoliť odstránenie riadkov",
    // [Auto-translated] "Enable row reordering"
    allowRowReorder: "Povolenie zmeny poradia riadkov",
    // [Auto-translated] "Does not apply if you specify the exact display area width or height."
    responsiveImageSizeHelp: "Nepoužije sa, ak zadáte presnú šírku alebo výšku oblasti zobrazenia.",
    // [Auto-translated] "Minimum display area width"
    minImageWidth: "Minimálna šírka zobrazovacej plochy",
    // [Auto-translated] "Maximum display area width"
    maxImageWidth: "Maximálna šírka zobrazovacej plochy",
    // [Auto-translated] "Minimum display area height"
    minImageHeight: "Minimálna výška zobrazovacej plochy",
    // [Auto-translated] "Maximum display area height"
    maxImageHeight: "Maximálna výška zobrazovacej plochy",
    // "Minimum value"
    minValue: "Minimálna hodnota",
    // "Maximum value"
    maxValue: "Maximálna hodnota",
    // [Auto-translated] "Case insensitive"
    caseInsensitive: "Nerozlišujú sa veľké a malé písmená",
    // "Minimum length (in characters)"
    minLength: "Minimálna dĺžka",
    // "Allow digits"
    allowDigits: "Povoliť čísla",
    // "Minimum count"
    minCount: "Minimálny počet",
    // "Maximum count"
    maxCount: "Maximálny počet",
    // "Regular expression"
    regex: "Regulárny výraz",
    surveyvalidator: {
      // [Auto-translated] "Validation message"
      text: "Overovacia správa",
      // [Auto-translated] "Validation expression"
      expression: "Overovací výraz",
      // [Auto-translated] "Notification type"
      notificationType: "Typ oznámenia",
      // [Auto-translated] "Maximum length (in characters)"
      maxLength: "Maximálna dĺžka (v znakoch)"
    },
    // "Total row header"
    totalText: "Celkom – text",
    // "Aggregation method"
    totalType: "Celkom – typ",
    // "Total value expression"
    totalExpression: "Celkom – výraz",
    // "Total value display format"
    totalDisplayStyle: "Celkom – štýl zobrazenia",
    // "Currency"
    totalCurrency: "Celkom – mena",
    // "Formatted string"
    totalFormat: "Celkom – formát",
    // [Auto-translated] "Survey logo"
    logo: "Logo prieskumu",
    // [Auto-translated] "Survey layout"
    questionsOnPageMode: "Rozloženie prieskumu",
    // [Auto-translated] "Restrict answer length"
    maxTextLength: "Obmedzenie dĺžky odpovede",
    // [Auto-translated] "Restrict comment length"
    maxCommentLength: "Obmedzenie dĺžky komentára",
    // [Auto-translated] "Comment area height (in lines)"
    commentAreaRows: "Výška oblasti komentárov (v riadkoch)",
    // [Auto-translated] "Auto-expand text areas"
    autoGrowComment: "Automatické rozbalenie textových oblastí",
    // [Auto-translated] "Allow users to resize text areas"
    allowResizeComment: "Povolenie používateľom meniť veľkosť textových oblastí",
    // "Update input field values"
    textUpdateMode: "Aktualizácia hodnoty textovej otázky",
    // [Auto-translated] "Input mask type"
    maskType: "Typ vstupnej masky",
    // [Auto-translated] "Set focus on the first invalid answer"
    autoFocusFirstError: "Zameranie na prvú neplatnú odpoveď",
    // [Auto-translated] "Run validation"
    checkErrorsMode: "Spustenie overenia pravosti",
    // [Auto-translated] "Validate empty fields on lost focus"
    validateVisitedEmptyFields: "Overenie prázdnych polí pri strate zamerania",
    // [Auto-translated] "Redirect to an external link after submission"
    navigateToUrl: "Presmerovanie na externý odkaz po odoslaní",
    // [Auto-translated] "Dynamic external link"
    navigateToUrlOnCondition: "Dynamické externé prepojenie",
    // [Auto-translated] "Markup to show if the user already filled out this survey"
    completedBeforeHtml: "Značky na zobrazenie, či používateľ už vyplnil tento prieskum",
    // [Auto-translated] "\"Thank You\" page markup"
    completedHtml: "Označenie stránky s poďakovaním",
    // [Auto-translated] "Dynamic \"Thank You\" page markup"
    completedHtmlOnCondition: "Dynamické označenie stránky s poďakovaním",
    // [Auto-translated] "Markup to show while survey model is loading"
    loadingHtml: "Značenie, ktoré sa zobrazí počas načítavania modelu prieskumu",
    // [Auto-translated] "Comment area text"
    commentText: "Text oblasti komentárov",
    // [Auto-translated] "Autocomplete type"
    autocomplete: "Typ automatického dokončovania",
    // "Label for \"True\""
    labelTrue: "Označenie \"Pravda\"",
    // "Label for \"False\""
    labelFalse: "Označenie \"False\"",
    // "Show the Clear button"
    allowClear: "Zobraziť titulok možností",
    // [Auto-translated] "Search mode"
    searchMode: "Režim vyhľadávania",
    // [Auto-translated] "Display format"
    displayStyle: "Formát zobrazenia",
    // [Auto-translated] "Formatted string"
    format: "Formátovaný reťazec",
    // [Auto-translated] "Maximum fractional digits"
    maximumFractionDigits: "Maximálny zlomkový počet číslic",
    // [Auto-translated] "Minimum fractional digits"
    minimumFractionDigits: "Minimálne zlomkové číslice",
    // [Auto-translated] "Display grouping separators"
    useGrouping: "Oddeľovače zoskupení zobrazení",
    // [Auto-translated] "Enable multiple file upload"
    allowMultiple: "Povolenie nahrávania viacerých súborov",
    // [Auto-translated] "Preview uploaded images"
    allowImagesPreview: "Náhľad nahraných obrázkov",
    // [Auto-translated] "Accepted file types"
    acceptedTypes: "Akceptované typy súborov",
    // [Auto-translated] "Wait for upload to complete"
    waitForUpload: "Počkajte na dokončenie nahrávania",
    // [Auto-translated] "Confirm file deletion"
    needConfirmRemoveFile: "Potvrďte odstránenie súboru",
    // [Auto-translated] "Row details alignment"
    detailPanelMode: "Zarovnanie detailov riadkov",
    // [Auto-translated] "Minimum row count"
    minRowCount: "Minimálny počet riadkov",
    // [Auto-translated] "Maximum row count"
    maxRowCount: "Maximálny počet riadkov",
    // "Confirm row removal"
    confirmDelete: "Potvrdenie odstránenia riadka",
    // [Auto-translated] "Confirmation message"
    confirmDeleteText: "Potvrdzovacia správa",
    // [Auto-translated] "Initial number of entries"
    panelCount: "Počiatočný počet záznamov",
    // [Auto-translated] "Minimum number of entries"
    minPanelCount: "Minimálny počet záznamov",
    // [Auto-translated] "Maximum number of entries"
    maxPanelCount: "Maximálny počet záznamov",
    // [Auto-translated] "Initial entry state"
    panelsState: "Počiatočný stav zadania",
    // [Auto-translated] "\"Previous Entry\" button text"
    prevPanelText: "Text tlačidla \"Predchádzajúci záznam\"",
    // [Auto-translated] "\"Next Entry\" button text"
    nextPanelText: "Text tlačidla \"Ďalšia položka\"",
    // [Auto-translated] "\"Remove Entry\" button alignment"
    removePanelButtonLocation: "Zarovnanie tlačidla \"Odstrániť položku\"",
    // [Auto-translated] "Hide the question if it has no rows"
    hideIfRowsEmpty: "Skrytie otázky, ak nemá žiadne riadky",
    // [Auto-translated] "Hide columns if there are no rows"
    hideColumnsIfEmpty: "Skryť stĺpce, ak nie sú k dispozícii žiadne riadky",
    // [Auto-translated] "Custom rating values"
    rateValues: "Vlastné hodnoty hodnotenia",
    // [Auto-translated] "Rating count"
    rateCount: "Počet hodnotení",
    // [Auto-translated] "Rating configuration"
    autoGenerate: "Konfigurácia hodnotenia",
    slider: {
      // [Auto-translated] "Min value"
      min: "Minimálna hodnota",
      // [Auto-translated] "Max value"
      max: "Maximálna hodnota",
      // [Auto-translated] "Step value"
      step: "Hodnota kroku",
      // [Auto-translated] "Show scale labels"
      showLabels: "Zobrazenie štítkov mierky",
      // [Auto-translated] "Show tooltips"
      tooltipVisibility: "Zobraziť popisy",
      // [Auto-translated] "Allow thumb crossing"
      allowSwap: "Povoliť prekríženie palca",
      // [Auto-translated] "Number of auto-generated labels"
      labelCount: "Počet automaticky vygenerovaných štítkov",
      // [Auto-translated] "Min value expression"
      minValueExpression: "Výraz minimálnej hodnoty",
      // [Auto-translated] "Max value expression"
      maxValueExpression: "Vyjadrenie maximálnej hodnoty",
      // [Auto-translated] "Scale labels configuration"
      autoGenerate: "Konfigurácia štítkov váhy",
      // [Auto-translated] "Slider type"
      sliderType: "Typ posúvača",
      // [Auto-translated] "Min range length"
      minRangeLength: "Minimálna dĺžka rozsahu",
      // [Auto-translated] "Max range length"
      maxRangeLength: "Maximálna dĺžka dosahu",
      // [Auto-translated] "Custom labels"
      customLabels: "Vlastné štítky",
      // [Auto-translated] "Label format"
      labelFormat: "Formát štítku",
      // [Auto-translated] "Tooltip format"
      tooltipFormat: "Formát popisu"
    },
    file: {
      // [Auto-translated] "Image height"
      imageHeight: "Výška obrázka",
      // [Auto-translated] "Image width"
      imageWidth: "Šírka obrázka"
    },
    // [Auto-translated] "Hide the question if it has no choices"
    hideIfChoicesEmpty: "Skryť otázku, ak nemá na výber",
    // "Minimum width"
    minWidth: "Minimálna šírka (v hodnotách akceptovaných CSS)",
    // "Maximum width"
    maxWidth: "Maximálna šírka (v hodnotách akceptovaných CSS)",
    // "Width"
    width: "Šírka (v akceptovaných hodnotách CSS)",
    // [Auto-translated] "Show column headers"
    showHeader: "Zobrazenie hlavičiek stĺpcov",
    // [Auto-translated] "Show horizontal scrollbar"
    horizontalScroll: "Zobraziť vodorovný posúvač",
    // [Auto-translated] "Minimum column width"
    columnMinWidth: "Minimálna šírka stĺpca",
    // [Auto-translated] "Row header width"
    rowTitleWidth: "Šírka záhlavia riadka",
    // "Value to store when \"True\" is selected"
    valueTrue: "Hodnota \"True\"",
    // "Value to store when \"False\" is selected"
    valueFalse: "Hodnota \"False\"",
    // "\"Value is below minimum\" error message"
    minErrorText: "Chybové hlásenie \"Hodnota je nižšia ako minimum\"",
    // "\"Value exceeds maximum\" error message"
    maxErrorText: "Chybové hlásenie \"Hodnota prekračuje maximum\"",
    // "\"Empty comment\" error message"
    otherErrorText: "Chybové hlásenie \"Prázdny komentár\"",
    // "Error message for duplicate responses"
    keyDuplicationError: "Chybové hlásenie \"Nejedinečná kľúčová hodnota\"",
    // [Auto-translated] "Minimum choices to select"
    minSelectedChoices: "Minimálne možnosti výberu",
    // [Auto-translated] "Maximum choices to select"
    maxSelectedChoices: "Maximálne možnosti výberu",
    // [Auto-translated] "Logo width"
    logoWidth: "Šírka loga",
    // [Auto-translated] "Logo height"
    logoHeight: "Výška loga",
    // "Read-only"
    readOnly: "Iba na čítanie",
    // [Auto-translated] "Disable the read-only mode if"
    enableIf: "Vypnite režim iba na čítanie, ak",
    // "\"No rows\" message"
    noRowsText: "Správa \"Žiadne riadky\"",
    // [Auto-translated] "Separate special choices"
    separateSpecialChoices: "Samostatné špeciálne možnosti",
    // [Auto-translated] "Copy choices from the following question"
    choicesFromQuestion: "Skopírujte voľby z nasledujúcej otázky",
    // [Auto-translated] "Which choice options to copy"
    choicesFromQuestionMode: "Ktoré možnosti výberu skopírovať",
    // [Auto-translated] "Use values from the following matrix column or panel question as choice IDs"
    choiceValuesFromQuestion: "Použite hodnoty z nasledujúceho stĺpca matice alebo panelovej otázky ako ID výberu",
    // [Auto-translated] "Use values from the following matrix column or panel question as choice texts"
    choiceTextsFromQuestion: "Ako texty výberu použite hodnoty z nasledujúceho stĺpca matice alebo panelovej otázky",
    // [Auto-translated] "Display page titles in the progress bar"
    progressBarShowPageTitles: "Zobrazenie názvov strán na indikátore priebehu",
    // [Auto-translated] "Display page numbers in the progress bar"
    progressBarShowPageNumbers: "Zobrazenie čísel strán na indikátore priebehu",
    // [Auto-translated] "Add a comment box"
    showCommentArea: "Pridanie poľa komentára",
    // [Auto-translated] "Placeholder text for the comment box"
    commentPlaceholder: "Zástupný text pre pole poznámky",
    // [Auto-translated] "Show the labels as extreme values"
    displayRateDescriptionsAsExtremeItems: "Zobrazenie označení ako extrémnych hodnôt",
    // [Auto-translated] "Row order"
    rowOrder: "Poradie riadkov",
    // [Auto-translated] "Column layout"
    columnsLayout: "Rozloženie stĺpcov",
    // [Auto-translated] "Nested column count"
    columnColCount: "Vnorený počet stĺpcov",
    // [Auto-translated] "Correct Answer"
    correctAnswer: "Správna odpoveď",
    // [Auto-translated] "Default Values"
    defaultPanelValue: "Predvolené hodnoty",
    // [Auto-translated] "Cell Texts"
    cells: "Texty buniek",
    // [Auto-translated] "Select a file or paste a file link..."
    fileInputPlaceholder: "Vyberte súbor alebo prilepte odkaz na súbor...",
    // "Prevent duplicate responses in the following column"
    keyName: "Stĺpec kľúča",
    itemvalue: {
      // [Auto-translated] "Make the option visible if"
      visibleIf: "Možnosť zobraziť, ak",
      // [Auto-translated] "Make the option selectable if"
      enableIf: "Túto možnosť nastavte tak, aby sa dala vybrať, ak"
    },
    "itemvalue@rows": {
      // [Auto-translated] "Make the row visible if"
      visibleIf: "Nastavenie riadka ako viditeľného, ak",
      // [Auto-translated] "Make the row editable if"
      enableIf: "Nastavte riadok tak, aby ho bolo možné upravovať, ak"
    },
    imageitemvalue: {
      // "Alt text"
      text: "Alternatívny text"
    },
    // "Logo alignment"
    logoPosition: "Poloha loga",
    // "Add logo..."
    addLogo: "Pridať logo...",
    // "Change logo..."
    changeLogo: "Zmeniť logo...",
    logoPositions: {
      // "Remove logo"
      none: "Odstrániť logo",
      // "Left"
      left: "Vľavo",
      // "Right"
      right: "Vpravo",
      // "On the top"
      top: "V hornej časti",
      // "In the bottom"
      bottom: "V spodnej časti"
    },
    // [Auto-translated] "Preview mode"
    previewMode: "Režim náhľadu",
    // [Auto-translated] "Enable grid layout"
    gridLayoutEnabled: "Povoliť rozloženie mriežky",
    // [Auto-translated] "Grid columns"
    gridLayoutColumns: "Stĺpce mriežky",
    // [Auto-translated] "Mask settings"
    maskSettings: "Nastavenia masky",
    // [Auto-translated] "Row details error message alignment"
    detailErrorLocation: "Zarovnanie chybového hlásenia s podrobnosťami riadka",
    // Creator tabs
    tabs: {
      panel: {
        // [Auto-translated] "Panel Layout"
        layout: "Rozloženie panela"
      },
      // "General"
      general: "Všeobecné",
      // "Options"
      fileOptions: "Možnosti",
      // "HTML Editor"
      html: "Editor Html",
      // "Columns"
      columns: "Stĺpce",
      // "Rows"
      rows: "Riadky",
      // "Choice Options"
      choices: "Možnosti",
      // "Items"
      items: "Položky",
      // "Visible If"
      visibleIf: "Viditeľné ak",
      // "Editable If"
      enableIf: "Povoliť ak",
      // "Required If"
      requiredIf: "Povinné ak",
      // "Rating Values"
      rateValues: "Hodnoty hodnotenia",
      // [Auto-translated] "Slider Settings"
      sliderSettings: "Nastavenia posuvníka",
      // "Choices from a Web Service"
      choicesByUrl: "Možnosti z webu",
      // "Default Choices"
      matrixChoices: "Predvolené možnosti",
      // "Text Inputs"
      multipleTextItems: "Zadania textu",
      // "Numbering"
      numbering: "Číslovanie",
      // "Validators"
      validators: "Overovatelia",
      // "Navigation"
      navigation: "Navigácia",
      // "Question Settings"
      question: "Otázka",
      // "Pages"
      pages: "Stránky",
      // "Quiz Mode"
      timer: "Časovač/kvíz",
      // "Calculated Values"
      calculatedValues: "Vypočítané hodnoty",
      // "Triggers"
      triggers: "Aktivátory",
      // "Title template"
      templateTitle: "Titul šablóny",
      // "Totals"
      totals: "Celkové hodnoty",
      // "Conditions"
      logic: "Logický výraz",
      // [Auto-translated] "Input Mask Settings"
      mask: "Nastavenia vstupnej masky",
      layout: {
        // [Auto-translated] "Panel Layout"
        panel: "Rozloženie panela",
        // [Auto-translated] "Layout"
        question: "Rozloženie",
        // [Auto-translated] "Layout"
        base: "Rozloženie"
      },
      // "Data"
      data: "Údaje",
      // "Validation"
      validation: "Overenie",
      // "Individual Cell Texts"
      cells: "Bunky",
      // "\"Thank You\" Page"
      showOnCompleted: "Zobraziť pri dokončení",
      // "Logo in the Survey Header"
      logo: "Logo v titule prieskumu",
      // "Slider"
      slider: "Jazdec",
      // [Auto-translated] "Expression"
      expression: "Výraz",
      // [Auto-translated] "Question Settings"
      questionSettings: "Nastavenia otázok",
      // "Header"
      header: "Hlavička",
      // "Background"
      background: "Pozadie",
      // "Appearance"
      appearance: "Vzhľad",
      // [Auto-translated] "Accent colors"
      accentColors: "Akcentové farby",
      // [Auto-translated] "Surface background"
      surfaceBackground: "Povrchové pozadie",
      // [Auto-translated] "Scaling"
      scaling: "Škálovanie",
      // "Others"
      others: "Iné"
    },
    // "Edit property '{0}'"
    editProperty: "Upraviť vlastnosť „{0}“",
    // "Items"
    items: "[ Položky: {0} ]",
    // [Auto-translated] "Make choices visible if"
    choicesVisibleIf: "Zviditeľnenie výberu, ak",
    // [Auto-translated] "Make choices selectable if"
    choicesEnableIf: "Výber výberu, ak",
    // [Auto-translated] "Make columns visible if"
    columnsEnableIf: "Zviditeľnenie stĺpcov, ak",
    // [Auto-translated] "Make rows visible if"
    rowsEnableIf: "Zviditeľnenie riadkov, ak",
    // [Auto-translated] "Increase the inner indent"
    innerIndent: "Zväčšenie vnútornej zarážky",
    // [Auto-translated] "Use answers from the last entry as default"
    copyDefaultValueFromLastEntry: "Predvolené použitie odpovedí z posledného záznamu",
    // "Please enter a value."
    enterNewValue: "Zadajte hodnotu.",
    // "There are no questions in the survey."
    noquestions: "V prieskume nie je žiadna otázka.",
    // "Please create a trigger"
    createtrigger: "Vytvorte aktivátor",
    // "Press enter button to edit"
    titleKeyboardAdornerTip: "Upraviť stlačením tlačidla Enter",
    // "Press enter button to edit item, press delete button to delete item, press alt plus arrow up or arrow down to move item"
    keyboardAdornerTip: "Stlačením tlačidla Enter položku upravíte, stlačením tlačidla Odstrániť položku odstránite, stlačením tlačidla Alt a šípky nahor alebo šípky nadol položku presuniete",
    // "On "
    triggerOn: "Zap. ",
    // "Make pages visible"
    triggerMakePagesVisible: "Viditeľnosť stránok:",
    // "Make elements visible"
    triggerMakeQuestionsVisible: "Viditeľnosť prvkov:",
    // "Complete the survey if successful."
    triggerCompleteText: "V prípade úspechu prieskum dokočniť.",
    // "The trigger is not set"
    triggerNotSet: "Aktivátor nie je nastavený",
    // "Run if"
    triggerRunIf: "Spustiť ak",
    // "Change value of: "
    triggerSetToName: "Zmeniť hodnotu: ",
    // "Copy value from: "
    triggerFromName: "Kopírovať hodnotu z: ",
    // "Run this Expression"
    triggerRunExpression: "Spustiť tento výraz:",
    // "to: "
    triggerSetValue: "na: ",
    // "Go to the question"
    triggerGotoName: "Prejsť na otázku:",
    // "Do not put the variable into the survey result."
    triggerIsVariable: "Nezaraďujte premennú do výsledku prieskumu.",
    // "Please enter a valid expression"
    triggerRunExpressionEmpty: "Zadajte platný výraz",
    // [Auto-translated] "Type expression here..."
    emptyExpressionPlaceHolder: "Sem zadajte výraz...",
    // "No file chosen"
    noFile: "Nevybratý žiadny súbor",
    // [Auto-translated] "Clear hidden question values"
    clearIfInvisible: "Vymazanie skrytých hodnôt otázok",
    // [Auto-translated] "Store values in the following property"
    valuePropertyName: "Hodnoty ukladania do nasledujúcej vlastnosti",
    // [Auto-translated] "Enable search-as-you-type"
    searchEnabled: "Povolenie vyhľadávania počas písania",
    // [Auto-translated] "Hide selected items"
    hideSelectedItems: "Skryť vybraté položky",
    // [Auto-translated] "Collapse the dropdown upon selection"
    closeOnSelect: "Zbalenie rozbaľovacej ponuky po výbere",
    // [Auto-translated] "Vertical alignment within cells"
    verticalAlign: "Vertikálne zarovnanie v bunkách",
    // [Auto-translated] "Alternate row colors"
    alternateRows: "Alternatívne farby riadkov",
    // [Auto-translated] "Make columns visible if"
    columnsVisibleIf: "Zviditeľnenie stĺpcov, ak",
    // [Auto-translated] "Make rows visible if"
    rowsVisibleIf: "Zviditeľnenie riadkov, ak",
    // [Auto-translated] "Placeholder text for the comment box"
    otherPlaceholder: "Zástupný text pre pole poznámky",
    // [Auto-translated] "Placeholder text for Local file"
    filePlaceholder: "Zástupný text pre lokálny súbor",
    // [Auto-translated] "Placeholder text for Camera"
    photoPlaceholder: "Zástupný text pre apku Kamera",
    // [Auto-translated] "Placeholder text for Local file or Camera"
    fileOrPhotoPlaceholder: "Zástupný text pre lokálny súbor alebo fotoaparát",
    // [Auto-translated] "Rating icon"
    rateType: "Ikona hodnotenia",
    // [Auto-translated] "Ex.: https://api.example.com/books"
    url_placeholder: "Napríklad: https://api.example.com/books",
    // [Auto-translated] "Ex.: categories.fiction"
    path_placeholder: "Napr.: kategórie.fikcia",
    // [Auto-translated] "Ex.: a)"
    questionStartIndex_placeholder: "Napr.: a)",
    // [Auto-translated] "Ex.: 6in"
    width_placeholder: "Napr.: 6in",
    // [Auto-translated] "Ex.: 600px"
    minWidth_placeholder: "Napríklad: 600px",
    // [Auto-translated] "Ex.: 50%"
    maxWidth_placeholder: "Napríklad: 50%",
    // "auto"
    imageHeight_placeholder: "auto",
    // "auto"
    imageWidth_placeholder: "auto",
    // [Auto-translated] "Ex.: 100px"
    itemTitleWidth_placeholder: "Príklad: 100px",
    theme: {
      // [Auto-translated] "Theme"
      themeName: "Téma",
      // [Auto-translated] "Question appearance"
      isPanelless: "Vzhľad otázky",
      // [Auto-translated] "Background and corner radius"
      editorPanel: "Pozadie a polomer rohu",
      // [Auto-translated] "Background and corner radius"
      questionPanel: "Pozadie a polomer rohu",
      // [Auto-translated] "Accent color"
      primaryColor: "Farba akcentu",
      // [Auto-translated] "Panel and question box opacity"
      panelBackgroundTransparency: "Nepriehľadnosť panelu a schránky otázok",
      // [Auto-translated] "Input element opacity"
      questionBackgroundTransparency: "Nepriehľadnosť vstupného prvku",
      // [Auto-translated] "Survey font size"
      fontSize: "Veľkosť písma prieskumu",
      // [Auto-translated] "Survey scale factor"
      scale: "Faktor mierky prieskumu",
      // [Auto-translated] "Corner radius"
      cornerRadius: "Polomer rohov",
      // [Auto-translated] "Advanced mode"
      advancedMode: "Pokročilý režim",
      // [Auto-translated] "Title font"
      pageTitle: "Písmo názvu",
      // [Auto-translated] "Description font"
      pageDescription: "Písmo popisu",
      // [Auto-translated] "Title font"
      questionTitle: "Písmo názvu",
      // [Auto-translated] "Description font"
      questionDescription: "Písmo popisu",
      // [Auto-translated] "Font"
      editorFont: "Písmo",
      // [Auto-translated] "Opacity"
      backgroundOpacity: "Neprehľadnosť", // Auto-generated string
      // [Auto-translated] "Survey font family"
      "--sjs-font-family": "Skupina písiem prieskumu",
      // [Auto-translated] "Background color"
      "--sjs-general-backcolor-dim": "Farba pozadia",
      // [Auto-translated] "Accent background colors"
      "--sjs-primary-backcolor": "Farby zvýraznenia pozadia",
      // [Auto-translated] "Accent foreground colors"
      "--sjs-primary-forecolor": "Akcentové farby popredia",
      // [Auto-translated] "Error message colors"
      "--sjs-special-red": "Farby chybových hlásení",
      // [Auto-translated] "Shadow effects"
      "--sjs-shadow-small": "Efekty tieňov",
      // [Auto-translated] "Shadow effects"
      "--sjs-shadow-inner": "Efekty tieňov",
      // [Auto-translated] "Colors"
      "--sjs-border-default": "Farby"
    },
    "header@header": {
      // [Auto-translated] "View"
      headerView: "Pohľad",
      // [Auto-translated] "Logo alignment"
      logoPosition: "Zarovnanie loga",
      // [Auto-translated] "Survey title font"
      surveyTitle: "Písmo názvu prieskumu",
      // [Auto-translated] "Survey description font"
      surveyDescription: "Písmo popisu prieskumu",
      // [Auto-translated] "Survey title font"
      headerTitle: "Písmo názvu prieskumu",
      // [Auto-translated] "Survey description font"
      headerDescription: "Písmo popisu prieskumu",
      // [Auto-translated] "Content area width"
      inheritWidthFrom: "Šírka oblasti obsahu",
      // [Auto-translated] "Text width"
      textAreaWidth: "Šírka textu",
      // [Auto-translated] "Background color"
      backgroundColorSwitch: "Farba pozadia",
      // [Auto-translated] "Background image"
      backgroundImage: "Obrázok na pozadí",
      // [Auto-translated] "Opacity"
      backgroundImageOpacity: "Neprehľadnosť",
      // [Auto-translated] "Overlap"
      overlapEnabled: "Presahovať",
      // [Auto-translated] "Logo alignment"
      logoPositionX: "Zarovnanie loga",
      // [Auto-translated] "Survey title alignment"
      titlePositionX: "Zarovnanie názvu prieskumu",
      // [Auto-translated] "Survey description alignment"
      descriptionPositionX: "Zarovnanie popisu prieskumu"
    }
  },
  // Property values
  pv: {
    // [Auto-translated] "true"
    "true": "pravdivý",
    // [Auto-translated] "false"
    "false": "nepravdivé",
    // [Auto-translated] "Local file"
    file: "Lokálny súbor",
    // [Auto-translated] "Camera"
    camera: "Fotoaparát",
    // [Auto-translated] "Local file or Camera"
    "file-camera": "Lokálny súbor alebo fotoaparát",
    // "Inherit"
    inherit: "prevziať",
    // "Visible"
    show: "zobraziť",
    // "Hidden"
    hide: "skryť",
    // "Inherit"
    default: "predvolené",
    // "Initial"
    initial: "počiatočné",
    // "Random"
    random: "náhodné",
    // "Collapsed"
    collapsed: "zbalené",
    // "Expanded"
    expanded: "rozbalené",
    // "None"
    none: "žiadne",
    // "Ascending"
    asc: "vzostupne",
    // "Descending"
    desc: "zostupne",
    // "Indeterminate"
    indeterminate: "nestanovené",
    // [Auto-translated] "Selected"
    selected: "Vybraný",
    // [Auto-translated] "Unselected"
    unselected: "Nevybratý",
    // [Auto-translated] "decimal"
    decimal: "desatinný",
    // [Auto-translated] "currency"
    currency: "mena",
    // [Auto-translated] "percent"
    percent: "percento",
    // "First panel is expanded"
    firstExpanded: "prvý rozbalený",
    // "Hide question numbers"
    off: "vyp.",
    // "List"
    list: "zoznam",
    // [Auto-translated] "Carousel"
    carousel: "Kolotoč",
    // [Auto-translated] "Tabs"
    tab: "Karty",
    // "Panel navigator + Progress bar at the top"
    progressTop: "horná časť priebehu",
    // "Panel navigator + Progress bar at the bottom"
    progressBottom: "spodná časť priebehu",
    // "Panel navigator + Progress bar at the top and bottom"
    progressTopBottom: "priebeh –​ horná a spodná časť",
    // "Horizontal"
    horizontal: "vodorovné",
    // "Vertical"
    vertical: "zvislé",
    // "Top"
    top: "hore",
    // "Bottom"
    bottom: "dolu",
    // "Top and bottom"
    topBottom: "hore a dolu",
    // "Both"
    both: "obidva",
    // "Left"
    left: "vľavo",
    // [Auto-translated] "Right"
    right: "Doprava",
    // [Auto-translated] "Center"
    center: "Centrum",
    // [Auto-translated] "Left and right"
    leftRight: "Vľavo a vpravo",
    // [Auto-translated] "Middle"
    middle: "Stred",
    // [Auto-translated] "color"
    color: "farba",
    // [Auto-translated] "date"
    date: "dátum",
    // [Auto-translated] "datetime"
    datetime: "dátum a čas",
    // [Auto-translated] "datetime-local"
    "datetime-local": "dátum a čas miestny",
    // [Auto-translated] "email"
    email: "E-mail",
    // [Auto-translated] "month"
    month: "mesiac",
    // [Auto-translated] "number"
    number: "číslo",
    // [Auto-translated] "password"
    password: "heslo",
    // [Auto-translated] "range"
    range: "rozsah",
    // [Auto-translated] "tel"
    tel: "Tel",
    // [Auto-translated] "text"
    text: "Text",
    // [Auto-translated] "time"
    time: "Čas",
    // [Auto-translated] "url"
    url: "URL adresa",
    // [Auto-translated] "week"
    week: "týždeň",
    // "Hidden"
    hidden: "skryté",
    // "Editable"
    edit: "upraviť",
    // "Read-only"
    display: "zobraziť",
    // [Auto-translated] "Contain"
    contain: "Obsahovať",
    // [Auto-translated] "Cover"
    cover: "Prikryť",
    // [Auto-translated] "Fill"
    fill: "Vyplniť",
    // [Auto-translated] "Next"
    next: "Budúci",
    // [Auto-translated] "Last"
    last: "Minulý",
    // "Upon survey completion"
    onComplete: "pri dokončení",
    // "When question gets hidden"
    onHidden: "pri skrytí",
    // [Auto-translated] "When question or its panel/page gets hidden"
    onHiddenContainer: "Keď sa otázka alebo jej panel/stránka skryje",
    clearInvisibleValues: {
      // [Auto-translated] "Never"
      none: "Nikdy"
    },
    clearIfInvisible: {
      // [Auto-translated] "Never"
      none: "Nikdy"
    },
    // [Auto-translated] "Radio Buttons"
    radio: "Prepínače",
    inputType: {
      // [Auto-translated] "Color"
      color: "Farba",
      // [Auto-translated] "Date"
      date: "Dátum",
      // [Auto-translated] "Date and Time"
      "datetime-local": "Dátum a čas",
      // [Auto-translated] "Email"
      email: "E-mail",
      // [Auto-translated] "Month"
      month: "Mesiac",
      // [Auto-translated] "Number"
      number: "Číslo",
      // [Auto-translated] "Password"
      password: "Heslo",
      // [Auto-translated] "Range"
      range: "Rozsah",
      // [Auto-translated] "Phone Number"
      tel: "Telefónne číslo",
      // [Auto-translated] "Text"
      text: "Text",
      // [Auto-translated] "Time"
      time: "Čas",
      // [Auto-translated] "URL"
      url: "URL adresa",
      // [Auto-translated] "Week"
      week: "Týždeň"
    },
    sliderType: {
      // [Auto-translated] "Single-Value"
      single: "Jedna hodnota",
      // [Auto-translated] "Range"
      range: "Rozsah"
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
      warning: "Varovanie",
      // [Auto-translated] "Informational"
      info: "Informačné"
    },
    autocomplete: {
      // [Auto-translated] "Full Name"
      name: "Celé meno",
      // [Auto-translated] "Prefix"
      "honorific-prefix": "Predpona",
      // [Auto-translated] "First Name"
      "given-name": "Krstné meno",
      // [Auto-translated] "Middle Name"
      "additional-name": "Stredné meno",
      // [Auto-translated] "Last Name"
      "family-name": "Priezvisko",
      // [Auto-translated] "Suffix"
      "honorific-suffix": "Prípona",
      // [Auto-translated] "Nickname"
      nickname: "Prezývka",
      // [Auto-translated] "Job Title"
      "organization-title": "Pracovná pozícia",
      // [Auto-translated] "User Name"
      username: "Používateľské meno",
      // [Auto-translated] "New Password"
      "new-password": "Nové heslo",
      // [Auto-translated] "Current Password"
      "current-password": "Aktuálne heslo",
      // [Auto-translated] "Organization Name"
      organization: "Názov organizácie",
      // [Auto-translated] "Full Street Address"
      "street-address": "Celá adresa",
      // [Auto-translated] "Address Line 1"
      "address-line1": "Riadok adresy 1",
      // [Auto-translated] "Address Line 2"
      "address-line2": "Riadok adresy 2",
      // [Auto-translated] "Address Line 3"
      "address-line3": "Riadok adresy 3",
      // [Auto-translated] "Level 4 Address"
      "address-level4": "Adresa úrovne 4",
      // [Auto-translated] "Level 3 Address"
      "address-level3": "Adresa úrovne 3",
      // [Auto-translated] "Level 2 Address"
      "address-level2": "Adresa úrovne 2",
      // [Auto-translated] "Level 1 Address"
      "address-level1": "Adresa úrovne 1",
      // [Auto-translated] "Country Code"
      country: "Kód krajiny",
      // [Auto-translated] "Country Name"
      "country-name": "Názov krajiny",
      // [Auto-translated] "Postal Code"
      "postal-code": "Psč",
      // [Auto-translated] "Cardholder Name"
      "cc-name": "Meno držiteľa karty",
      // [Auto-translated] "Cardholder First Name"
      "cc-given-name": "Krstné meno držiteľa karty",
      // [Auto-translated] "Cardholder Middle Name"
      "cc-additional-name": "Stredné meno držiteľa karty",
      // [Auto-translated] "Cardholder Last Name"
      "cc-family-name": "Priezvisko držiteľa karty",
      // [Auto-translated] "Credit Card Number"
      "cc-number": "Číslo kreditnej karty",
      // [Auto-translated] "Expiration Date"
      "cc-exp": "Dátum vypršania platnosti",
      // [Auto-translated] "Expiration Month"
      "cc-exp-month": "Mesiac vypršania platnosti",
      // [Auto-translated] "Expiration Year"
      "cc-exp-year": "Rok vypršania platnosti",
      // [Auto-translated] "Card Security Code"
      "cc-csc": "Bezpečnostný kód karty",
      // [Auto-translated] "Credit Card Type"
      "cc-type": "Typ kreditnej karty",
      // [Auto-translated] "Transaction Currency"
      "transaction-currency": "Mena transakcie",
      // [Auto-translated] "Transaction Amount"
      "transaction-amount": "Suma transakcie",
      // [Auto-translated] "Preferred Language"
      language: "Preferovaný jazyk",
      // [Auto-translated] "Birthday"
      bday: "Narodeniny",
      // [Auto-translated] "Birthday Day"
      "bday-day": "Deň narodenín",
      // [Auto-translated] "Birthday Month"
      "bday-month": "Mesiac narodenín",
      // [Auto-translated] "Birthday Year"
      "bday-year": "Rok narodenín",
      // [Auto-translated] "Gender"
      sex: "Pohlavie",
      // [Auto-translated] "Website URL"
      url: "URL adresa webovej stránky",
      // [Auto-translated] "Profile Photo"
      photo: "Profilová fotka",
      // [Auto-translated] "Telephone Number"
      tel: "Telefónne číslo",
      // [Auto-translated] "Country Code for Phone"
      "tel-country-code": "Kód krajiny pre telefón",
      // [Auto-translated] "National Telephone Number"
      "tel-national": "Národné telefónne číslo",
      // [Auto-translated] "Area Code"
      "tel-area-code": "Telefónna Predvoľba",
      // [Auto-translated] "Local Phone Number"
      "tel-local": "Miestne telefónne číslo",
      // [Auto-translated] "Local Phone Prefix"
      "tel-local-prefix": "Lokálna predvoľba telefónu",
      // [Auto-translated] "Local Phone Suffix"
      "tel-local-suffix": "Prípona miestneho telefónu",
      // [Auto-translated] "Phone Extension"
      "tel-extension": "Rozšírenie telefónu",
      // [Auto-translated] "Email Address"
      email: "E-mailová adresa",
      // [Auto-translated] "Instant Messaging Protocol"
      impp: "Protokol okamžitých správ"
    },
    maskType: {
      // [Auto-translated] "None"
      none: "Žiadny",
      // [Auto-translated] "Pattern"
      pattern: "Vzorka",
      // [Auto-translated] "Numeric"
      numeric: "Numerický",
      // [Auto-translated] "Date and Time"
      datetime: "Dátum a čas",
      // [Auto-translated] "Currency"
      currency: "Mena"
    },
    inputTextAlignment: {
      // [Auto-translated] "Auto"
      auto: "Auto",
      // [Auto-translated] "Left"
      left: "Vľavo",
      // [Auto-translated] "Right"
      right: "Doprava"
    },
    // "All"
    all: "všetko",
    // "Page"
    page: "stránka",
    // "Survey"
    survey: "prieskum",
    // "When switching to the next page"
    onNextPage: "na ďalšej stránke",
    // "After an answer is changed"
    onValueChanged: "pri zmene hodnoty",
    // [Auto-translated] "Before an answer is changed"
    onValueChanging: "Pred zmenou odpovede",
    questionsOnPageMode: {
      // [Auto-translated] "Original structure"
      standard: "Pôvodná štruktúra",
      // [Auto-translated] "Show all questions on one page"
      singlePage: "Zobraziť všetky otázky na jednej stránke",
      // [Auto-translated] "Show single question per page"
      questionPerPage: "Zobraziť jednu otázku na stránku",
      // [Auto-translated] "Show single input field per page"
      inputPerPage: "Zobraziť jedno vstupné pole na stranu"
    },
    // "No preview"
    noPreview: "žiadna ukážka",
    // "Show all questions"
    showAllQuestions: "zobraziť ukážku so všetkými otázkami",
    // "Show answered questions only"
    showAnsweredQuestions: "zobraziť ukážku so zodpovedanými otázkami",
    // [Auto-translated] "Show all questions"
    allQuestions: "Zobraziť všetky otázky",
    // [Auto-translated] "Show answered questions only"
    answeredQuestions: "Zobraziť len zodpovedané otázky",
    // "Completed pages"
    pages: "stránky",
    // "Answered questions"
    questions: "otázky",
    // "Answered required questions"
    requiredQuestions: "povinné otázky",
    // "Valid answers"
    correctQuestions: "správne otázky",
    // "Completed pages (button UI)"
    buttons: "tlačidlá",
    // "Under the input field"
    underInput: "v rámci vstupu",
    // "Under the question title"
    underTitle: "v rámci titulu",
    // [Auto-translated] "On lost focus"
    onBlur: "O strate zaostrenia",
    // [Auto-translated] "While typing"
    onTyping: "Počas písania",
    // [Auto-translated] "Under the row"
    underRow: "Pod riadkom",
    // [Auto-translated] "Under the row, display one section only"
    underRowSingle: "Pod riadkom zobrazte iba jednu sekciu",
    // "Auto"
    auto: "Auto",
    timerInfoMode: {
      // "Both"
      combined: "Obidva"
    },
    addRowButtonLocation: {
      // [Auto-translated] "Based on matrix layout"
      default: "Na základe maticového rozloženia"
    },
    panelsState: {
      // [Auto-translated] "Locked"
      default: "Zamknutý",
      // [Auto-translated] "Collapse all"
      collapsed: "Zbaliť všetko",
      // [Auto-translated] "Expand all"
      expanded: "Rozbaliť všetko",
      // [Auto-translated] "First expanded"
      firstExpanded: "Prvé rozšírenie"
    },
    widthMode: {
      // [Auto-translated] "Static"
      static: "Statický",
      // [Auto-translated] "Responsive"
      responsive: "Citlivý"
    },
    contentMode: {
      // [Auto-translated] "Image"
      image: "Obraz",
      // [Auto-translated] "Video"
      video: "Video",
      // [Auto-translated] "YouTube"
      youtube: "YouTube"
    },
    displayMode: {
      // [Auto-translated] "Buttons"
      buttons: "Tlačidlá",
      // [Auto-translated] "Dropdown"
      dropdown: "Rozbaľovací zoznam"
    },
    rateColorMode: {
      // [Auto-translated] "Default"
      default: "Predvolený",
      // [Auto-translated] "Scale"
      scale: "Stupnica"
    },
    scaleColorMode: {
      // [Auto-translated] "Monochrome"
      monochrome: "Jednofarebný",
      // [Auto-translated] "Colored"
      colored: "Farebný"
    },
    autoGenerate: {
      // [Auto-translated] "Auto-generate"
      "true": "Automatické generovanie",
      // [Auto-translated] "Manual"
      "false": "Manuálny"
    },
    rateType: {
      // [Auto-translated] "Labels"
      labels: "Menovky",
      // [Auto-translated] "Stars"
      stars: "Hviezdy",
      // [Auto-translated] "Smileys"
      smileys: "Smajlíky"
    },
    state: {
      // [Auto-translated] "Locked"
      default: "Zamknutý"
    },
    showQuestionNumbers: {
      // [Auto-translated] "Auto-numbering"
      default: "Automatické číslovanie",
      // [Auto-translated] "Auto-numbering"
      on: "Automatické číslovanie",
      // [Auto-translated] "Reset on each page"
      onPage: "Obnoviť na každej stránke",
      // [Auto-translated] "Reset on each panel"
      onpanel: "Reset na každom paneli",
      // [Auto-translated] "Reset on each panel"
      onPanel: "Resetovať na každom paneli",
      // [Auto-translated] "Recursive numbering"
      recursive: "Rekurzívne číslovanie",
      // [Auto-translated] "Continue across the survey"
      onSurvey: "Pokračujte v prieskume",
      // [Auto-translated] "No numbering"
      off: "Bez číslovania"
    },
    descriptionLocation: {
      // [Auto-translated] "Under the question title"
      underTitle: "Pod názvom otázky",
      // [Auto-translated] "Under the input field"
      underInput: "Pod vstupným poľom"
    },
    selectToRankAreasLayout: {
      // [Auto-translated] "Next to choices"
      horizontal: "Vedľa možností",
      // [Auto-translated] "Above choices"
      vertical: "Vyššie uvedené možnosti"
    },
    displayStyle: {
      // [Auto-translated] "Decimal"
      decimal: "Desatinný",
      // [Auto-translated] "Currency"
      currency: "Mena",
      // [Auto-translated] "Percentage"
      percent: "Percento",
      // [Auto-translated] "Date"
      date: "Dátum"
    },
    totalDisplayStyle: {
      // [Auto-translated] "Decimal"
      decimal: "Desatinný",
      // [Auto-translated] "Currency"
      currency: "Mena",
      // [Auto-translated] "Percentage"
      percent: "Percento",
      // [Auto-translated] "Date"
      date: "Dátum"
    },
    rowOrder: {
      // [Auto-translated] "Original"
      initial: "Originál"
    },
    questionOrder: {
      // [Auto-translated] "Original"
      initial: "Originál"
    },
    progressBarLocation: {
      // [Auto-translated] "Top"
      top: "Vrchol",
      // [Auto-translated] "Bottom"
      bottom: "Dno",
      // [Auto-translated] "Top and bottom"
      topbottom: "Hore a dole",
      // [Auto-translated] "Above the header"
      aboveheader: "Nad hlavičkou",
      // [Auto-translated] "Below the header"
      belowheader: "Pod hlavičkou",
      // [Auto-translated] "Hidden"
      off: "Skrytý"
    },
    // [Auto-translated] "Sum"
    sum: "Súčet",
    // [Auto-translated] "Count"
    count: "Počítať",
    // [Auto-translated] "Min"
    min: "Min",
    // [Auto-translated] "Max"
    max: "Max",
    // [Auto-translated] "Avg"
    avg: "Avg",
    searchMode: {
      // [Auto-translated] "Contains"
      contains: "Obsahuje",
      // [Auto-translated] "Starts with"
      startsWith: "Začína sa"
    },
    backgroundImageFit: {
      // [Auto-translated] "Auto"
      auto: "Auto",
      // [Auto-translated] "Cover"
      cover: "Prikryť",
      // [Auto-translated] "Contain"
      contain: "Obsahovať",
      // [Auto-translated] "Stretch"
      fill: "Natiahnuť",
      // [Auto-translated] "Tile"
      tile: "Dlaždica"
    },
    backgroundImageAttachment: {
      // [Auto-translated] "Fixed"
      fixed: "Stabilný",
      // [Auto-translated] "Scroll"
      scroll: "Zvitok"
    },
    headerView: {
      // [Auto-translated] "Basic"
      basic: "Základný",
      // [Auto-translated] "Advanced"
      advanced: "Pokročilý"
    },
    inheritWidthFrom: {
      // [Auto-translated] "Same as survey"
      survey: "Rovnaké ako prieskum",
      // [Auto-translated] "Same as container"
      container: "Rovnaké ako kontajner"
    },
    backgroundColorSwitch: {
      // [Auto-translated] "None"
      none: "Žiadny",
      // [Auto-translated] "Accent color"
      accentColor: "Farba akcentu",
      // [Auto-translated] "Custom"
      custom: "Zvyk"
    },
    colorPalette: {
      // [Auto-translated] "Light"
      light: "Svetlo",
      // [Auto-translated] "Dark"
      dark: "Tmavý"
    },
    isPanelless: {
      // [Auto-translated] "Default"
      "false": "Predvolený",
      // [Auto-translated] "Without Panels"
      "true": "Bez panelov"
    },
    progressBarInheritWidthFrom: {
      // [Auto-translated] "Same as survey"
      survey: "Rovnaké ako prieskum",
      // [Auto-translated] "Same as container"
      container: "Rovnaké ako kontajner"
    }
  },
  // Operators
  op: {
    // "Empty"
    empty: "je prázdne",
    // "Not empty"
    notempty: "nie je prázdne",
    // "Equals"
    equal: "rovná sa",
    // "Does not equal"
    notequal: "nerovná sa",
    // "Contains"
    contains: "obsahuje",
    // "Does not contain"
    notcontains: "neobsahuje",
    // "Any of"
    anyof: "ktorákoľvek",
    // "All of"
    allof: "všetky",
    // "Greater than"
    greater: "väčšie",
    // "Less than"
    less: "menšie",
    // "Greater than or equal to"
    greaterorequal: "väčšie alebo rovné",
    // "Less than or equal to"
    lessorequal: "menšie alebo rovné",
    // [Auto-translated] "and"
    and: "a",
    // [Auto-translated] "or"
    or: "alebo"
  },
  // Embed window
  ew: {
    // "Use Angular version"
    angular: "Použiť verziu Angular",
    // "Use jQuery version"
    jquery: "Použiť verziu jQuery",
    // "Use Knockout version"
    knockout: "Použiť verziu Knockout",
    // "Use React version"
    react: "Použiť verziu React",
    // "Use Vue version"
    vue: "Použiť verziu Vue",
    // "For bootstrap framework"
    bootstrap: "Pre rámec bootstrap",
    // "Modern theme"
    modern: "Moderný motív",
    // "Default theme"
    default: "Predvolený motív",
    // "Orange theme"
    orange: "Oranžový motív",
    // "Darkblue theme"
    darkblue: "Tmavomodrý motív",
    // "Darkrose theme"
    darkrose: "Motív Darkrose",
    // "Stone theme"
    stone: "Motív Stone",
    // "Winter theme"
    winter: "Motív Winter",
    // "Winter-Stone theme"
    winterstone: "Motív Winter-Stone",
    // "Show survey on a page"
    showOnPage: "Zobraziť prieskum na stránke",
    // "Show survey in a window"
    showInWindow: "Zobraziť prieskum v okne",
    // "Load Survey JSON from server"
    loadFromServer: "Načítať JSON prieskumu zo servera",
    // "Scripts and styles"
    titleScript: "Skripty a štýly",
    // "HTML"
    titleHtml: "HTML",
    // "JavaScript"
    titleJavaScript: "JavaScript"
  },
  // Preview (Survey)
  ts: {
    // "Select the page to test it"
    selectPage: "Vybrať stránku na testovanie:",
    // "Show invisible elements"
    showInvisibleElements: "Zobraziť neviditeľné prvky",
    // [Auto-translated] "Hide invisible elements"
    hideInvisibleElements: "Skryť neviditeľné prvky",
    // [Auto-translated] "Previous"
    prevPage: "Predchádzajúci",
    // [Auto-translated] "Next"
    nextPage: "Budúci"
  },
  validators: {
    // "Answer count"
    answercountvalidator: "počet odpovedí",
    // "Email"
    emailvalidator: "e-mail",
    // "Expression"
    expressionvalidator: "výraz",
    // "Number"
    numericvalidator: "číslo",
    // "Regex"
    regexvalidator: "regex",
    // "Text"
    textvalidator: "text"
  },
  triggers: {
    // "Complete survey"
    completetrigger: "dokončiť prieskum",
    // "Set answer"
    setvaluetrigger: "nastaviť hodnotu",
    // "Copy answer"
    copyvaluetrigger: "kopírovať hodnotu",
    // "Skip to question"
    skiptrigger: "prejsť na otázku",
    // "Run expression"
    runexpressiontrigger: "spustiť výraz",
    // "change visibility (deprecated)"
    visibletrigger: "zmeniť viditeľnosť (zastarané)"
  },
  peplaceholder: {
    patternmask: {
      // "Ex.: +1(999)-999-99-99"
      pattern: "Napríklad: +1(999)-999-99-99"
    },
    datetimemask: {
      // "Ex.: mm/dd/yyyy HH:MM:ss"
      pattern: "Napr.: mm/dd/rrrr"
    },
    currencymask: {
      // "Ex.: $"
      prefix: "Napr.: $",
      // "Ex.: USD"
      suffix: "Napríklad: USD"
    },
    panelbase: {
      // [Auto-translated] "Ex.: 200px"
      questionTitleWidth: "Napríklad: 200px"
    },
    panellayoutcolumn: {
      // "Ex.: 30%"
      effectiveWidth: "Príklad: 30 %",
      // "Ex.: 200px"
      questionTitleWidth: "Príklad: 200 pixelov"
    }
  },
  pehelp: {
    panel: {
      // "A panel ID that is not visible to respondents."
      name: "ID panela, ktoré respondenti nevidia.",
      // [Auto-translated] "Type a panel subtitle."
      description: "Zadajte titulok panela.",
      // "Use the magic wand icon to set a conditional rule that determines panel visibility."
      visibleIf: "Pomocou ikony čarovného prútika nastavte podmienené pravidlo, ktoré určuje viditeľnosť panela.",
      // [Auto-translated] "Use the magic wand icon to set a conditional rule that disables the read-only mode for the panel."
      enableIf: "Pomocou ikony čarovnej paličky nastavte podmienené pravidlo, ktoré vypne režim iba na čítanie pre panel.",
      // "Use the magic wand icon to set a conditional rule that prevents survey submission unless at least one nested question has an answer."
      requiredIf: "Pomocou ikony čarovného prútika nastavte podmienené pravidlo, ktoré zabráni odoslaniu prieskumu, pokiaľ aspoň jedna vnorená otázka nemá odpoveď.",
      // [Auto-translated] "Applies to all questions within this panel. When set to \"Hidden\", it also hides question descriptions. If you want to override this setting, define title alignment rules for individual questions. The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Top\" by default). "
      questionTitleLocation: "Vzťahuje sa na všetky otázky v rámci tohto panela. Keď je nastavené na \"Skryté\", skryje aj popisy otázok. Ak chcete toto nastavenie prepísať, definujte pravidlá zarovnania názvov pre jednotlivé otázky. Možnosť \"Zdediť\" použije nastavenie na úrovni stránky (ak je nastavené) alebo na úrovni prieskumu (predvolene \"Hore\"). ",
      // [Auto-translated] "Sets consistent width for question titles when they are aligned to the left of their question boxes. Accepts CSS values (px, %, in, pt, etc.)."
      questionTitleWidth: "Nastavuje konzistentnú šírku názvov otázok, keď sú zarovnané naľavo od polí otázok. Akceptuje hodnoty CSS (px, %, in, pt atď.).",
      // "Sets the location of an error message in relation to all questions within the panel. The \"Inherit\" option applies the page-level (if set) or survey-level setting."
      questionErrorLocation: "Nastaví umiestnenie chybového hlásenia vo vzťahu ku všetkým otázkam v paneli. Možnosť Zdediť použije nastavenie na úrovni stránky (ak je nastavená) alebo na úrovni prieskumu.",
      // [Auto-translated] "Keeps the original order of questions or randomizes them. The \"Inherit\" option applies the page-level (if set) or survey-level setting."
      questionOrder: "Zachová pôvodné poradie otázok alebo ich náhodne vyberie. Možnosť Zdediť použije nastavenie na úrovni stránky (ak je nastavené) alebo na úrovni prieskumu.",
      // "Repositions the panel to the end of a selected page."
      page: "Premiestni panel na koniec vybratej strany.",
      // [Auto-translated] "Adds space or margin between the panel content and the left border of the panel box."
      innerIndent: "Pridá medzeru alebo okraj medzi obsah panela a ľavý okraj panela.",
      // "Unselect to display the panel in one line with the previous question or panel. The setting doesn't apply if the panel is the first element in your form."
      startWithNewLine: "Zrušte výber výberu, ak chcete panel zobraziť v jednom riadku s predchádzajúcou otázkou alebo panelom. Toto nastavenie sa neuplatňuje, ak je panel prvým prvkom vo formulári.",
      // "Choose from: \"Expanded\" - the panel is displayed in full and can be collapsed; \"Collapsed\" - the panel displays only the title and description and can be expanded; \"Locked\" - the panel is displayed in full and cannot be collapsed."
      state: "Vyberte si z: \"Rozšírené\" - panel je zobrazený v plnom rozsahu a môže byť zbalený; \"Zbalené\" - panel zobrazuje iba názov a popis a je možné ho rozšíriť; \"Zamknutý\" - panel sa zobrazuje v plnom rozsahu a nedá sa zbaliť.",
      // [Auto-translated] "Sets the width of the panel in proportion to other survey elements in the same line. Accepts CSS values (px, %, in, pt, etc.)."
      width: "Nastaví šírku panela v pomere k ostatným prvkom prieskumu v rovnakom riadku. Akceptuje hodnoty CSS (px, %, in, pt atď.).",
      // [Auto-translated] "Assigns numbers to questions nested within this panel."
      showQuestionNumbers: "Priradí čísla otázkam vnoreným do tohto panela.",
      // [Auto-translated] "Specifies how many columns this panel spans within the grid layout."
      effectiveColSpan: "Určuje, koľko stĺpcov má tento panel v rozložení mriežky.",
      // [Auto-translated] "This table lets you configure each grid column within the panel. It automatically sets the width percentage for each column based on the maximum number of elements in a row. To customize the grid layout, manually adjust these values and define the title width for all questions in each column."
      gridLayoutColumns: "Táto tabuľka umožňuje nakonfigurovať každý stĺpec mriežky v paneli. Automaticky nastaví percentuálnu šírku pre každý stĺpec na základe maximálneho počtu prvkov v riadku. Ak chcete prispôsobiť rozloženie mriežky, manuálne upravte tieto hodnoty a definujte šírku názvu pre všetky otázky v každom stĺpci."
    },
    paneldynamic: {
      // "A panel ID that is not visible to respondents."
      name: "ID panela, ktoré respondenti nevidia.",
      // "Type a panel subtitle."
      description: "Zadajte podnadpis panela.",
      // "Use the magic wand icon to set a conditional rule that determines panel visibility."
      visibleIf: "Pomocou ikony čarovného prútika nastavte podmienené pravidlo, ktoré určuje viditeľnosť panela.",
      // [Auto-translated] "Use the magic wand icon to set a conditional rule that disables the read-only mode for the panel."
      enableIf: "Pomocou ikony čarovnej paličky nastavte podmienené pravidlo, ktoré vypne režim iba na čítanie pre panel.",
      // "Use the magic wand icon to set a conditional rule that prevents survey submission unless at least one nested question has an answer."
      requiredIf: "Pomocou ikony čarovného prútika nastavte podmienené pravidlo, ktoré zabráni odoslaniu prieskumu, pokiaľ aspoň jedna vnorená otázka nemá odpoveď.",
      // "Applies to all questions within this dynamic panel. If you want to override this setting, define title alignment rules for individual questions. The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Top\" by default)."
      templateQuestionTitleLocation: "Vzťahuje sa na všetky otázky v tomto paneli. Ak chcete toto nastavenie prepísať, definujte pravidlá zarovnania názvu pre jednotlivé otázky. Možnosť Dediť použije nastavenie na úrovni stránky (ak je nastavená) alebo na úrovni prieskumu (\"Predvolene navrchu\").",
      // "Sets consistent width for question titles when they are aligned to the left of their question boxes. Accepts CSS values (px, %, in, pt, etc.)."
      templateQuestionTitleWidth: "Nastaví konzistentnú šírku názvov otázok, keď sú zarovnané naľavo od polí otázok. Akceptuje hodnoty CSS (px, %, in, pt atď.).",
      // "Sets the location of an error message in relation to a question with invalid input. Choose between: \"Top\" - an error text is placed at the top of the question box; \"Bottom\" - an error text is placed at the bottom of the question box. The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Top\" by default)."
      templateErrorLocation: "Nastaví umiestnenie chybového hlásenia vo vzťahu k otázke s neplatným zadaním. Vyberte si medzi: \"Hore\" - v hornej časti poľa otázok sa umiestni chybový text; \"Dole\" - v dolnej časti poľa otázok je umiestnený chybový text. Možnosť Dediť použije nastavenie na úrovni stránky (ak je nastavená) alebo na úrovni prieskumu (\"Predvolene navrchu\").",
      // "Sets the location of an error message in relation to all questions within the panel. The \"Inherit\" option applies the page-level (if set) or survey-level setting."
      errorLocation: "Nastaví umiestnenie chybového hlásenia vo vzťahu ku všetkým otázkam v paneli. Možnosť Zdediť použije nastavenie na úrovni stránky (ak je nastavená) alebo na úrovni prieskumu.",
      // "Repositions the panel to the end of a selected page."
      page: "Premiestni panel na koniec vybratej strany.",
      // [Auto-translated] "Adds space or margin between the panel content and the left border of the panel box."
      indent: "Pridá medzeru alebo okraj medzi obsah panela a ľavý okraj rámčeka panela.",
      // "Unselect to display the panel in one line with the previous question or panel. The setting doesn't apply if the panel is the first element in your form."
      startWithNewLine: "Zrušte výber výberu, ak chcete panel zobraziť v jednom riadku s predchádzajúcou otázkou alebo panelom. Toto nastavenie sa neuplatňuje, ak je panel prvým prvkom vo formulári.",
      // "Choose from: \"Expanded\" - the panel is displayed in full and can be collapsed; \"Collapsed\" - the panel displays only the title and description and can be expanded; \"Locked\" - the panel is displayed in full and cannot be collapsed."
      state: "Vyberte si z: \"Rozšírené\" - panel je zobrazený v plnom rozsahu a môže byť zbalený; \"Zbalené\" - panel zobrazuje iba názov a popis a je možné ho rozšíriť; \"Zamknutý\" - panel sa zobrazuje v plnom rozsahu a nedá sa zbaliť.",
      // "Sets the width of the panel in proportion to other survey elements in the same line. Accepts CSS values (px, %, in, pt, etc.)."
      width: "Nastaví šírku panela v pomere k ostatným prvkom prieskumu v tej istej čiare. Akceptuje hodnoty CSS (px, %, in, pt atď.).",
      // "Type in a template for entry titles. Use {panelIndex} for the entry's general position and {visiblePanelIndex} for its order among visible entries. Insert these placeholders into the pattern to add automatic numbering."
      templateTitle: "Zadajte šablónu pre názvy dynamických panelov. Použite {panelIndex} pre všeobecnú pozíciu panela a {visiblePanelIndex} pre jeho poradie medzi viditeľnými panelmi. Vložením týchto zástupných symbolov do vzoru pridáte automatické číslovanie.",
      // "Type in a template for tab titles. Use {panelIndex} for an entry's general position and {visiblePanelIndex} for its order among visible entries. Insert these placeholders into the pattern to add automatic numbering."
      templateTabTitle: "Zadajte šablónu pre názvy kariet. Použite {panelIndex} pre všeobecnú pozíciu panela a {visiblePanelIndex} pre jeho poradie medzi viditeľnými panelmi. Vložením týchto zástupných symbolov do vzoru pridáte automatické číslovanie.",
      // "A fallback text for tab titles that applies when the tab title pattern doesn't produce a meaningful value."
      tabTitlePlaceholder: "Záložný text pre názvy kariet, ktorý sa použije, keď vzor názvu tabulátora nevytvára zmysluplnú hodnotu.",
      // "This setting allows you to control the visibility of individual entries within the dynamic panel. Use the `{panel}` placeholder to reference the current entry in your expression."
      templateVisibleIf: "Toto nastavenie umožňuje ovládať viditeľnosť jednotlivých panelov v dynamickom paneli. Použite zástupný symbol {panel} na odkaz na aktuálny panel vo svojom výraze.",
      // "This setting is automatically inherited by all questions within this dynamic panel. If you want to override this setting, define title alignment rules for individual questions. The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Top\" by default)."
      titleLocation: "Toto nastavenie sa automaticky dedí všetkými otázkami na tomto paneli. Ak chcete toto nastavenie prepísať, definujte pravidlá zarovnania názvu pre jednotlivé otázky. Možnosť Dediť použije nastavenie na úrovni stránky (ak je nastavená) alebo na úrovni prieskumu (\"Predvolene navrchu\").",
      // "The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Under the panel title\" by default)."
      descriptionLocation: "Možnosť \"Dediť\" použije nastavenie na úrovni stránky (ak je nastavená) alebo na úrovni prieskumu (\"Predvolene pod názvom panela\").",
      // "Defines the position of a newly added entry. By default, new entries are added to the end. Select \"Next\" to insert a new entry after the current one."
      newPanelPosition: "Definuje pozíciu novo pridaného panela. V predvolenom nastavení sa na koniec pridávajú nové panely. Výberom položky \"Ďalej\" vložíte nový panel za aktuálny.",
      // [Auto-translated] "Duplicates answers from the last entry and assigns them to the next added entry."
      copyDefaultValueFromLastEntry: "Duplikuje odpovede z posledného záznamu a priradí ich k ďalšej pridanej položke.",
      // "Reference a question name to require a user to provide a unique response for this question in each entry."
      keyName: "Odkážte na názov otázky, ak chcete, aby používateľ poskytol jedinečnú odpoveď na túto otázku na každom paneli.",
      // [Auto-translated] "Triggers a confirmation prompt before removing an entry."
      confirmDelete: "Spustí výzvu na potvrdenie pred odstránením položky.",
      // [Auto-translated] "Assigns numbers to questions nested within the dynamic panel."
      showQuestionNumbers: "Priraďuje čísla otázkam vnoreným do dynamického panela."
    },
    matrixdynamic: {
      // [Auto-translated] "Triggers a confirmation prompt before removing a row."
      confirmDelete: "Spustí výzvu na potvrdenie pred odstránením riadka.",
      // [Auto-translated] "Automatically expands the detail section when a new row is added to the matrix."
      detailPanelShowOnAdding: "Automaticky rozbalí sekciu podrobností, keď sa do matice pridá nový riadok."
    },
    // "Duplicates answers from the last row and assigns them to the next added dynamic row."
    copyDefaultValueFromLastEntry: "Duplikuje odpovede z posledného riadka a priradí ich k ďalšiemu pridanému dynamickému riadku.",
    // [Auto-translated] "This setting allows you to assign a default answer value based on an expression. The expression can include basic calculations - `{q1_id} + {q2_id}`, Boolean expressions, such as `{age} > 60`, and functions: `iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, etc. The value determined by this expression serves as the initial default value that can be overridden by a respondent's manual input."
    defaultValueExpression: "Toto nastavenie vám umožňuje priradiť predvolenú hodnotu odpovede na základe výrazu. Výraz môže obsahovať základné výpočty - '{q1_id} + {q2_id}', boolovské výrazy, ako napríklad '{age} > 60', a funkcie: 'iif()', 'today()', 'age()', 'min()', 'max()', 'avg()' atď. Hodnota určená týmto výrazom slúži ako počiatočná predvolená hodnota, ktorú je možné prepísať manuálnym vstupom respondenta.",
    // "Use the magic wand icon to set a conditional rule that determines when a respondent's input is reset to the value based on the \"Default value expression\" or \"Set value expression\" or to the \"Default answer\" value (if either is set)."
    resetValueIf: "Pomocou ikony čarovného prútika nastavte podmienené pravidlo, ktoré určuje, kedy sa vstup respondenta obnoví na hodnotu na základe hodnoty \"Výraz predvolenej hodnoty\" alebo \"Výraz nastavenej hodnoty\" alebo hodnoty \"Predvolená odpoveď\" (ak je nastavená).",
    // "Use the magic wand icon to set a conditional rule that determines when to run the \"Set value expression\" and dynamically assign the resulting value as a response."
    setValueIf: "Pomocou ikony čarovného prútika nastavte podmienené pravidlo, ktoré určuje, kedy spustiť \"Nastaviť výraz hodnoty\" a dynamicky priradiť výslednú hodnotu ako odpoveď.",
    // "Specify an expression that defines the value to be set when the conditions in the \"Set value if\" rule are met. The expression can include basic calculations - `{q1_id} + {q2_id}`, Boolean expressions, such as `{age} > 60`, and functions: `iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, etc. The value determined by this expression can be overridden by a respondent's manual input."
    setValueExpression: "Zadajte výraz, ktorý definuje hodnotu, ktorá sa má nastaviť, keď sú splnené podmienky pravidla \"Nastaviť hodnotu ak\". Výraz môže obsahovať základné výpočty - '{q1_id} + {q2_id}', boolovské výrazy, ako napríklad '{age} > 60', a funkcie: 'iif()', 'today()', 'age()', 'min()', 'max()', 'avg()' atď. Hodnota určená týmto výrazom môže byť prepísaná manuálnym vstupom respondenta.",
    // "Survey Creator allows you to manually adjust the inline widths of form elements to control the layout. If this doesn't produce the desired outcome, you can enable the grid layout, which structures form elements using a column-based system. To configure layout columns, select a page or panel and use the \"Question Settings\" → \"Grid columns\" table. To adjust how many columns a question spans, select it and set the desired value in the \"Layout\" → \"Column span\" field."
    gridLayoutEnabled: "Aplikácia Survey Creator umožňuje manuálne upraviť vnorené šírky prvkov formulára na ovládanie rozloženia. Ak to neprinesie požadovaný výsledok, môžete povoliť rozloženie mriežky, ktoré štruktúry tvoria prvky pomocou systému založeného na stĺpcoch. Ak chcete nakonfigurovať stĺpce rozloženia, vyberte stránku alebo panel a použite tabuľku \"Nastavenia otázky\" → \"Stĺpce mriežky\". Ak chcete upraviť, koľko stĺpcov otázka zahŕňa, vyberte ju a nastavte požadovanú hodnotu v poli \"Rozloženie\" → \"Rozsah stĺpcov\".",
    question: {
      // "A question ID that is not visible to respondents."
      name: "ID otázky, ktoré respondenti nevidia.",
      // "Type a question subtitle."
      description: "Zadajte podnadpis otázky.",
      // "Use the magic wand icon to set a conditional rule that determines question visibility."
      visibleIf: "Pomocou ikony čarovného prútika nastavte podmienené pravidlo, ktoré určuje viditeľnosť otázky.",
      // [Auto-translated] "Use the magic wand icon to set a conditional rule that disables the read-only mode for the question."
      enableIf: "Pomocou ikony čarovnej paličky nastavte podmienené pravidlo, ktoré vypne režim iba na čítanie pre otázku.",
      // "Use the magic wand icon to set a conditional rule that prevents survey advancing or submission unless the question received an answer."
      requiredIf: "Pomocou ikony čarovného prútika nastavte podmienené pravidlo, ktoré zabráni postupu alebo odoslaniu prieskumu, pokiaľ otázka nedostala odpoveď.",
      // [Auto-translated] "Unselect to display the question in one line with the previous question or panel. The setting doesn't apply if the question is the first element in your form."
      startWithNewLine: "Zrušte výber výberu, ak chcete otázku zobraziť v jednom riadku s predchádzajúcou otázkou alebo panelom. Toto nastavenie sa neuplatňuje, ak je otázka prvým prvkom vo formulári.",
      // "Repositions the question to the end of a selected page."
      page: "Premiestni otázku na koniec vybratej strany.",
      // "Choose from: \"Expanded\" - the question box is displayed in full and can be collapsed; \"Collapsed\" - the question box displays only the title and description and can be expanded; \"Locked\" - the question box is displayed in full and cannot be collapsed."
      state: "Vyberte si z: \"Rozšírené\" - pole otázky sa zobrazí v plnom rozsahu a dá sa zbaliť; \"Zbalené\" - pole otázky zobrazuje iba názov a popis a je možné ho rozbaliť; \"Zamknuté\" - pole otázok sa zobrazí v plnom rozsahu a nedá sa zbaliť.",
      // "Overrides title alignment rules defined on a panel, page, or survey level. When set to \"Hidden\", it also hides question descriptions. The \"Inherit\" option applies any higher-level settings (if set) or survey-level setting (\"Top\" by default)."
      titleLocation: "Prepíše pravidlá zarovnania názvu definované na úrovni panela, stránky alebo prieskumu. Možnosť \"Dediť\" použije akékoľvek nastavenia vyššej úrovne (ak sú nastavené) alebo nastavenia na úrovni prieskumu (\"Predvolene hore\").",
      // "The \"Inherit\" option applies the survey-level setting (\"Under the question title\" by default)."
      descriptionLocation: "Možnosť \"Zdediť\" použije nastavenie na úrovni prieskumu (\"Predvolene pod názvom otázky\").",
      // "Sets the location of an error message in relation to the question with invalid input. Choose between: \"Top\" - an error text is placed at the top of the question box; \"Bottom\" - an error text is placed at the bottom of the question box. The \"Inherit\" option applies the survey-level setting (\"Top\" by default)."
      errorLocation: "Nastaví umiestnenie chybového hlásenia vo vzťahu k otázke s neplatným zadaním. Vyberte si medzi: \"Hore\" - v hornej časti poľa otázok sa umiestni chybový text; \"Dole\" - v dolnej časti poľa otázok je umiestnený chybový text. Možnosť \"Zdediť\" použije nastavenie na úrovni prieskumu (\"Predvolene hore\").",
      // "Adds space or margin between the question content and the left border of the question box."
      indent: "Pridá medzeru alebo okraj medzi obsah otázky a ľavý okraj poľa otázok.",
      // "Sets the width of the question in proportion to other survey elements in the same line. Accepts CSS values (px, %, in, pt, etc.)."
      width: "Nastaví šírku otázky v pomere k ostatným prvkom prieskumu v tom istom riadku. Akceptuje hodnoty CSS (px, %, in, pt atď.).",
      // "Choose from: \"On lost focus\" - the value is updated when the input field loses focus; \"While typing\" - the value is updated in real-time, as users are typing. The \"Inherit\" option applies the survey-level setting (\"On lost focus\" by default)."
      textUpdateMode: "Vyberte si z: \"Pri strate zaostrenia\" - hodnota sa aktualizuje, keď vstupné pole stratí zaostrenie; \"Počas písania\" - hodnota sa aktualizuje v reálnom čase, keď používatelia píšu. Možnosť \"Zdediť\" použije nastavenie na úrovni prieskumu (\"Predvolene stratené zameranie\").",
      // [Auto-translated] "You can use any web service as a data source for multiple-choice questions. To populate choice values, enter the URL of the service providing the data."
      url: "Ako zdroj údajov môžete použiť ľubovoľnú webovú službu na otázky s voliteľnými odpoveďami. Ak chcete vyplniť hodnoty možností, zadajte adresu URL služby poskytujúcej údaje.",
      // [Auto-translated] "A comparison operation used to filter the drop-down list."
      searchMode: "Porovnávacia operácia použitá na filtrovanie rozbaľovacieho zoznamu.",
      // [Auto-translated] "Long texts in choice options will automatically generate line breaks to fit within the drop-down menu. Unselect if you want the texts to clip."
      textWrapEnabled: "Dlhé texty v možnostiach výberu automaticky vygenerujú zlomy riadkov, aby sa zmestili do rozbaľovacej ponuky. Zrušte výber, či chcete texty vystrihnúť.",
      // [Auto-translated] "Specifies how many columns this question spans within the grid layout."
      effectiveColSpan: "Určuje, koľko stĺpcov táto otázka zahŕňa v rozložení mriežky."
    },
    surveyvalidator: {
      // "Use the magic wand icon to define when the question's value is considered valid."
      expression: "Pomocou ikony čarovného prútika definujte, kedy sa hodnota otázky považuje za platnú.",
      // [Auto-translated] "Errors block progress until resolved. Warnings highlight issues but allow to continue. Informational notes offer additional context or neutral guidance. When using warnings or informational notes, we recommend enabling immediate validation: \"Survey\" → \"Validation\" → \"Run validation\" → \"After an answer has changed\"."
      notificationType: "Chyby blokujú priebeh, kým sa nevyriešia. Upozornenia upozorňujú na problémy, ale umožňujú pokračovanie. Informačné poznámky ponúkajú ďalší kontext alebo neutrálne usmernenie. Pri používaní upozornení alebo informačných poznámok odporúčame povoliť okamžité overenie: \"Prieskum\" → \"Overenie\" → \"Spustiť overenie\" → \"Po zmene odpovede\"."
    },
    signaturepad: {
      // "Sets the width of the displayed signature area and the resulting image."
      signatureWidth: "Nastaví šírku zobrazenej oblasti podpisu a výsledného obrázka.",
      // "Sets the height of the displayed signature area and the resulting image."
      signatureHeight: "Nastaví výšku zobrazenej oblasti podpisu a výsledného obrázka.",
      // "Select if you want the signature area to fill all available space within the question box while maintaining the default 3:2 aspect ratio. When custom width and height values are set, the setting will keep the aspect ratio of these dimensions."
      signatureAutoScaleEnabled: "Vyberte, či chcete, aby oblasť podpisu vyplnila všetok dostupný priestor v poli otázky pri zachovaní predvoleného pomeru strán 3:2. Keď sú nastavené vlastné hodnoty šírky a výšky, nastavenie zachová pomer strán týchto rozmerov."
    },
    file: {
      // "Specifies the display height of uploaded images in the preview and the actual height of images taken with the camera. In single file upload mode, the display height is limited by the preview area; in multiple file upload mode, it is limited by the thumbnail area."
      imageHeight: "Určuje výšku zobrazenia nahraných snímok v náhľade a skutočnú výšku snímok zhotovených fotoaparátom. V režime nahrávania jedného súboru je výška zobrazenia obmedzená oblasťou ukážky. V režime nahrávania viacerých súborov je obmedzený oblasťou miniatúr.",
      // "Specifies the display width of uploaded images in the preview and the actual width of images taken with the camera. In single file upload mode, the display width is limited by the preview area; in multiple file upload mode, it is limited by the thumbnail area."
      imageWidth: "Určuje šírku zobrazenia nahraných snímok v náhľade a skutočnú šírku snímok zhotovených fotoaparátom. V režime nahrávania jedného súboru je šírka zobrazenia obmedzená oblasťou ukážky. V režime nahrávania viacerých súborov je obmedzený oblasťou miniatúr.",
      // [Auto-translated] "Displays thumbnail previews for uploaded files when possible. Unselect if you want to show file icons instead."
      allowImagesPreview: "Ak je to možné, zobrazí náhľady miniatúr nahraných súborov. Zrušte výber, ak chcete namiesto toho zobraziť ikony súborov."
    },
    image: {
      // "The \"Auto\" option automatically determines the suitable mode for display - Image, Video, or YouTube - based on the source URL provided."
      contentMode: "Možnosť \"Auto\" automaticky určuje vhodný režim zobrazenia - obrázok, video alebo YouTube - na základe poskytnutej zdrojovej adresy URL."
    },
    imagepicker: {
      // [Auto-translated] "Overrides the minimum and maximum height values."
      imageHeight: "Prepíše hodnoty minimálnej a maximálnej výšky.",
      // [Auto-translated] "Overrides the minimum and maximum width values."
      imageWidth: "Prepíše hodnoty minimálnej a maximálnej šírky.",
      // [Auto-translated] "\"Value\" serves as an item ID used in conditional rules; \"Text\" is displayed to respondents."
      choices: "\"Hodnota\" slúži ako ID položky používané v podmienených pravidlách; Respondentom sa zobrazí \"Text\".",
      // "Choose between \"Image\" and \"Video\" to set the content mode of the media selector. If \"Image\" is selected, ensure that all options provided are image files in the following formats: JPEG, GIF, PNG, APNG, SVG, BMP, ICO. Similarly, if \"Video\" is selected, ensure that all options are direct links to video files in the following formats: MP4, MOV, WMV, FLV, AVI, MKV. Please note that YouTube links are not supported for video options."
      contentMode: "Vyberte si medzi \"Obrázok\" a \"Video\" a nastavte režim obsahu výberu médií. Ak je vybratá možnosť \"Obrázok\", uistite sa, že všetky poskytnuté možnosti sú obrazové súbory v nasledujúcich formátoch: JPEG, GIF, PNG, APNG, SVG, BMP, ICO. Podobne, ak je vybratá možnosť \"Video\", uistite sa, že všetky možnosti sú priamymi odkazmi na video súbory v nasledujúcich formátoch: MP4, MOV, WMV, FLV, AVI, MKV. Upozorňujeme, že možnosti videí nie sú podporované odkazmi na YouTube."
    },
    text: {
      // [Auto-translated] "This setting only resizes the input field and doesn't affect the width of the question box. To limit the accepted input length, go to \"Validation\" → \"Maximum character limit\"."
      size: "Toto nastavenie iba zmení veľkosť vstupného poľa a neovplyvní šírku poľa otázok. Ak chcete obmedziť akceptovanú dĺžku vstupu, prejdite na \"Overenie\" → \"Maximálny limit znakov\"."
    },
    comment: {
      // [Auto-translated] "Sets the number of displayed lines in the input field. If the input takes up more lines, the scroll bar will appear."
      rows: "Nastaví počet zobrazených riadkov vo vstupnom poli. Ak vstup zaberie viac riadkov, zobrazí sa posúvač."
    },
    // survey templates
    survey: {
      // "Select if you want to prevent respondents from filling out your survey."
      readOnly: "Vyberte, či chcete respondentom zabrániť vo vypĺňaní prieskumu.",
      // "Sets the location of the progress bar. The \"Auto\" value displays the progress bar above or below the survey header."
      progressBarLocation: "Nastaví umiestnenie indikátora priebehu. Hodnota \"Auto\" zobrazuje indikátor priebehu nad alebo pod hlavičkou prieskumu."
    },
    matrixdropdowncolumn: {
      // "A column ID that is not visible to respondents."
      name: "ID stĺpca, ktoré respondenti nevidia.",
      // "When enabled for a column, a respondent is required to provide a unique response for each question within this column."
      isUnique: "Ak je pre stĺpec povolené, respondent je povinný poskytnúť jedinečnú odpoveď na každú otázku v tomto stĺpci.",
      // "Sets the number of displayed lines in the input field. If the input takes up more lines, the scroll bar will appear."
      rows: "Nastaví počet zobrazených riadkov vo vstupnom poli. Ak vstup zaberá viac riadkov, zobrazí sa posúvač.",
      // "Use the magic wand icon to set a conditional rule that determines column visibility."
      visibleIf: "Pomocou ikony čarovného prútika nastavte podmienené pravidlo, ktoré určuje viditeľnosť stĺpca.",
      // [Auto-translated] "Use the magic wand icon to set a conditional rule that disables the read-only mode for the column."
      enableIf: "Pomocou ikony čarovnej paličky nastavte podmienené pravidlo, ktoré vypne režim iba na čítanie pre stĺpec.",
      // "Use the magic wand icon to set a conditional rule that prevents survey submission unless at least one nested question has an answer."
      requiredIf: "Pomocou ikony čarovného prútika nastavte podmienené pravidlo, ktoré zabráni odoslaniu prieskumu, pokiaľ aspoň jedna vnorená otázka nemá odpoveď.",
      // "When selected, creates an individual column for each choice option."
      showInMultipleColumns: "Ak je táto voľba vybratá, vytvorí samostatný stĺpec pre každú možnosť výberu.",
      // [Auto-translated] "Arranges choice options in a multi-column layout. When set to 0, the options are displayed in a single line. When set to -1, the actual value is inherited from the \"Nested column count\" property of the parent matrix."
      colCount: "Usporiada možnosti výberu vo viacstĺpcovom rozložení. Ak je nastavená hodnota 0, možnosti sa zobrazia v jednom riadku. Ak je nastavená na -1, skutočná hodnota sa zdedí z vlastnosti \"Počet vnorených stĺpcov\" nadradenej matice."
    },
    slider: {
      // "The lowest number that users can select."
      min: "Najnižšie číslo, ktoré môžu používatelia vybrať.",
      // "The highest number that users can select."
      max: "Najvyššie číslo, ktoré môžu používatelia vybrať.",
      // "The interval between selectable scale values. For example, a step of 5 will allow users to select 0, 5, 10, etc."
      step: "Interval medzi voliteľnými hodnotami stupnice. Napríklad krok 5 umožní používateľom vybrať 0, 5, 10 atď.",
      // "The minimum distance between the slider thumbs a user can set."
      minRangeLength: "Minimálna vzdialenosť medzi posuvnými palcami, ktorú môže používateľ nastaviť.",
      // "The maximum distance between the slider thumbs a user can set."
      maxRangeLength: "Maximálna vzdialenosť medzi palcami posúvača, ktorú môže používateľ nastaviť.",
      // "Specifies how many scale labels to generate. A value of -1 means the number is calculated automatically based on the Min value and Max value."
      labelCount: "Určuje, koľko označení mierky sa má vygenerovať. Hodnota -1 znamená, že číslo sa vypočíta automaticky na základe hodnoty Min a Max. hodnoty.",
      // "Use `{0}` as a placeholder for the actual value."
      labelFormat: "Použite \"{0}\" ako zástupný symbol pre skutočnú hodnotu.",
      // "Allows you to define custom labels at specific values and optionally assign corresponding text to them (e.g., 0 = \"Poor\", 100 = \"Excellent\")."
      customLabels: "Umožňuje definovať vlastné štítky pri konkrétnych hodnotách a voliteľne im priradiť zodpovedajúci text (napr. 0 = \"Slabý\", 100 = \"Vynikajúci\").",
      // "Use `{0}` as a placeholder for the actual value."
      tooltipFormat: "Použite \"{0}\" ako zástupný symbol pre skutočnú hodnotu.",
      // "Allows users to move one thumb past the other."
      allowSwap: "Umožňuje používateľom pohybovať jedným palcom za druhým.",
      // [Auto-translated] "Displays a button that clears the selected slider value and sets it to undefined."
      allowClear: "Zobrazí tlačidlo, ktoré vymaže vybratú hodnotu jazdca a nastaví ju na nedefinované.",
      // "Defines the slider's minimum value dynamically using an expression. Supports basic calculations (e.g, `{q1_id} + {q2_id}`), Boolean logic (e.g., `{age} > 60`), and functions like `iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, and more."
      minValueExpression: "Definuje minimálnu hodnotu jazdca dynamicky pomocou výrazu. Podporuje základné výpočty (napr. '{q1_id} + {q2_id}'), booleovskú logiku (napr. '{age} > 60') a funkcie ako 'iif()', 'today()', 'age()', 'min()', 'max()', 'avg()' a ďalšie.",
      // "Defines the slider's maximum value dynamically using an expression. Supports basic calculations (e.g, `{q1_id} + {q2_id}`), Boolean logic (e.g., `{age} > 60`), and functions like `iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, and more."
      maxValueExpression: "Dynamicky definuje maximálnu hodnotu jazdca pomocou výrazu. Podporuje základné výpočty (napr. '{q1_id} + {q2_id}'), booleovskú logiku (napr. '{age} > 60') a funkcie ako 'iif()', 'today()', 'age()', 'min()', 'max()', 'avg()' a ďalšie."
    },
    // [Auto-translated] "Makes this choice exclusive. When selected by a user, it will automatically deselect all other options in the question."
    isExclusive: "Vďaka tomu je táto voľba exkluzívna. Keď používateľ vyberie, automaticky zruší výber všetkých ostatných možností v otázke.",
    matrixcolumn: {
      // [Auto-translated] "Makes checkboxes in this column exclusive. When selected by a user, they will automatically deselect all other checkboxes in the same row."
      isExclusive: "Začiarkavacie políčka v tomto stĺpci sú exkluzívne. Keď používateľ vyberie, automaticky zruší začiarknutie všetkých ostatných políčok v rovnakom riadku."
    },
    // [Auto-translated] "Select if uppercase and lowercase letters in the regular expression must be treated as equivalent."
    caseInsensitive: "Vyberte, či sa veľké a malé písmená v regulárnom výraze musia považovať za ekvivalentné.",
    // "Choose from: \"Static\" - sets a fixed width; \"Responsive\" - makes the survey occupy the full width of the screen; \"Auto\" - applies either of the two depending on the question types used."
    widthMode: "Vyberte si z: \"Statický\" - nastavuje pevnú šírku; \"Responzívny\" - spôsobuje, že prieskum zaberá celú šírku obrazovky; \"Auto\" - použije ktorýkoľvek z týchto dvoch v závislosti od použitých typov otázok.",
    // [Auto-translated] "Assign a unique cookie value for your survey. The cookie will be set in a respondent's browser upon survey completion to prevent repetitive survey submissions."
    cookieName: "Priraďte svojmu prieskumu jedinečnú hodnotu súboru cookie. Súbor cookie sa po dokončení prieskumu nastaví v prehliadači respondenta, aby sa zabránilo opakovanému odosielaniu prieskumov.",
    // [Auto-translated] "Paste an image link (no size limits) or click the folder icon to browse a file from your computer (up to 64KB)."
    logo: "Prilepte odkaz na obrázok (bez obmedzenia veľkosti) alebo kliknite na ikonu priečinka a prehľadávajte súbor z počítača (až 64 kB).",
    // [Auto-translated] "Sets a logo width in CSS units (px, %, in, pt, etc.)."
    logoWidth: "Nastavuje šírku loga v jednotkách CSS (px, %, in, pt atď.).",
    // [Auto-translated] "Sets a logo height in CSS units (px, %, in, pt, etc.)."
    logoHeight: "Nastavuje výšku loga v jednotkách CSS (px, %, in, pt atď.).",
    // "Choose from: \"None\" - image maintains its original size; \"Contain\" - image is resized to fit while maintaining its aspect ratio; \"Cover\" - image fills the entire box while maintaining its aspect ratio; \"Fill\" - image is stretched to fill the box without maintaining its aspect ratio."
    logoFit: "Vyberte si z: \"Žiadne\" - obrázok si zachováva svoju pôvodnú veľkosť; \"Obsahovať\" - veľkosť obrázka sa zmení tak, aby sa zmestil pri zachovaní pomeru strán; \"Obal\" - obrázok vyplní celé pole pri zachovaní pomeru strán; \"Vyplniť\" - obrázok je natiahnutý tak, aby vyplnil pole bez zachovania pomeru strán.",
    // [Auto-translated] "Select if you want the survey to auto-advance to the next page once a respondent has answered all questions on the current page. This feature won't apply if the last question on the page is open-ended or allows multiple answers."
    autoAdvanceEnabled: "Vyberte, či chcete, aby sa prieskum automaticky posunul na ďalšiu stránku, keď respondent odpovie na všetky otázky na aktuálnej stránke. Táto funkcia sa nepoužije, ak je posledná otázka na stránke otvorená alebo umožňuje viacero odpovedí.",
    // [Auto-translated] "Select if you want the survey to complete automatically after a respondent answers all questions."
    autoAdvanceAllowComplete: "Vyberte, či chcete, aby sa prieskum dokončil automaticky po tom, čo respondent odpovie na všetky otázky.",
    // [Auto-translated] "Sets the visibility of navigation buttons on a page."
    showNavigationButtons: "Nastaví viditeľnosť navigačných tlačidiel na stránke.",
    // [Auto-translated] "Sets the location of navigation buttons on a page."
    navigationButtonsLocation: "Nastaví umiestnenie navigačných tlačidiel na stránke.",
    // [Auto-translated] "Enable the preview page with all or answered questions only."
    showPreviewBeforeComplete: "Povoľte stránku ukážky so všetkými alebo iba zodpovedanými otázkami.",
    // "Applies to all questions within the survey. This setting can be overridden by title alignment rules at lower levels: panel, page, or question. A lower-level setting will override those on a higher level."
    questionTitleLocation: "Vzťahuje sa na všetky otázky v rámci prieskumu. Toto nastavenie je možné prepísať pravidlami zarovnania názvov na nižších úrovniach: panel, stránka alebo otázka. Nastavenie nižšej úrovne prepíše nastavenia na vyššej úrovni.",
    // [Auto-translated] "A symbol or a sequence of symbols indicating that an answer is required."
    requiredMark: "Symbol alebo postupnosť symbolov označujúcich, že sa vyžaduje odpoveď.",
    // [Auto-translated] "Enter a number or letter with which you want to start numbering."
    questionStartIndex: "Zadajte číslo alebo písmeno, ktorým chcete začať číslovanie.",
    // "Sets the location of an error message in relation to the question with invalid input. Choose between: \"Top\" - an error text is placed at the top of the question box; \"Bottom\" - an error text is placed at the bottom of the question box."
    questionErrorLocation: "Nastaví umiestnenie chybového hlásenia vo vzťahu k otázke s neplatným zadaním. Vyberte si medzi: \"Hore\" - v hornej časti poľa otázok sa umiestni chybový text; \"Dole\" - v dolnej časti poľa otázok je umiestnený chybový text.",
    // [Auto-translated] "Select if you want the first input field on each page ready for text entry."
    autoFocusFirstQuestion: "Vyberte, či chcete prvé vstupné pole na každej strane pripraviť na zadávanie textu.",
    // "Keeps the original order of questions or randomizes them. The effect of this setting is only visible in the Preview tab."
    questionOrder: "Zachová pôvodné poradie otázok alebo ich náhodne vyberie. Efekt tohto nastavenia je viditeľný iba na karte Ukážka.",
    // [Auto-translated] "For text entry questions only."
    maxTextLength: "Len pre otázky týkajúce sa zadávania textu.",
    // [Auto-translated] "For question comments only."
    maxCommentLength: "Len pre komentáre k otázkam.",
    // [Auto-translated] "Sets the number of displayed lines in text areas for question comments. If the input takes up more lines, the scroll bar appears."
    commentAreaRows: "Nastaví počet zobrazených riadkov v textových oblastiach pre komentáre k otázkam. Ak vstup zaberie viac riadkov, zobrazí sa posúvač.",
    // [Auto-translated] "Select if you want question comments and Long Text questions to auto-grow in height based on the entered text length."
    autoGrowComment: "Vyberte, či chcete, aby komentáre otázok a otázky s dlhým textom automaticky narástli na výšku na základe zadanej dĺžky textu.",
    // [Auto-translated] "For question comments and Long Text questions only."
    allowResizeComment: "Iba pre komentáre k otázkam a otázky s dlhým textom.",
    // [Auto-translated] "Custom variables serve as intermediate or auxiliary variables used in form calculations. They take respondent inputs as source values. Each custom variable has a unique name and an expression it's based on."
    calculatedValues: "Vlastné premenné slúžia ako medziľahlé alebo pomocné premenné používané vo výpočtoch formulárov. Vstupy respondentov berú ako zdrojové hodnoty. Každá vlastná premenná má jedinečný názov a výraz, na ktorom je založená.",
    // [Auto-translated] "Select if you wish the calculated value of the expression to be saved along with survey results."
    includeIntoResult: "Vyberte, či chcete, aby sa vypočítaná hodnota výrazu uložila spolu s výsledkami prieskumu.",
    // "A trigger is an event or condition that is based on an expression. Once the expression is evaluated to \"true\", a trigger sets off an action. Such an action can optionally have a target question it affects."
    triggers: "Spúšťač je udalosť alebo podmienka, ktorá je založená na výraze. Keď je výraz vyhodnotený ako \"true\", spúšťač spustí akciu. Takáto akcia môže mať voliteľne cieľovú otázku, ktorú ovplyvňuje.",
    // [Auto-translated] "Choose whether or not to clear values for questions hidden by conditional logic and when to do it."
    clearInvisibleValues: "Vyberte, či chcete vymazať hodnoty pre otázky skryté podmienenou logikou a kedy to urobiť.",
    // "Choose from: \"On lost focus\" - the value is updated when the input field loses focus; \"While typing\" - the value is updated in real-time, as users are typing."
    textUpdateMode: "Vyberte si z: \"Pri strate zaostrenia\" - hodnota sa aktualizuje, keď vstupné pole stratí zaostrenie; \"Počas písania\" - hodnota sa aktualizuje v reálnom čase, keď používatelia píšu.",
    // [Auto-translated] "The left value serves as a column ID used in conditional rules, the right value is displayed to respondents."
    columns: "Ľavá hodnota slúži ako ID stĺpca používaného v podmienených pravidlách, pravá hodnota sa zobrazuje respondentom.",
    // "The left value serves as a row ID used in conditional rules, the right value is displayed to respondents."
    rows: "Ľavá hodnota slúži ako ID riadka používaného v podmienených pravidlách, pravá hodnota sa zobrazuje respondentom.",
    // [Auto-translated] "Accepts CSS values (px, %, in, pt, etc.)."
    columnMinWidth: "Akceptuje hodnoty CSS (px, %, in, pt atď.).",
    // [Auto-translated] "Accepts CSS values (px, %, in, pt, etc.)."
    rowTitleWidth: "Akceptuje hodnoty CSS (px, %, in, pt atď.).",
    // [Auto-translated] "Visible only if at least one column displays total values set with \"Aggregation method\" or \"Total value expression\"."
    totalText: "Viditeľné iba vtedy, ak aspoň v jednom stĺpci sa zobrazujú celkové hodnoty nastavené pomocou \"Metóda agregácie\" alebo \"Výraz celkovej hodnoty\".",
    // "Sets the location of an error message in relation to a cell with invalid input. The \"Inherit\" option applies the setting from the \"Error message alignment\" property."
    cellErrorLocation: "Nastaví umiestnenie chybového hlásenia vo vzťahu k bunke s neplatným vstupom. Možnosť Zdediť použije nastavenie z vlastnosti Zarovnanie chybového hlásenia.",
    // "Sets the location of error messages for questions nested in detail sections. The \"Inherit\" option applies the setting from the \"Error message alignment\" property."
    detailErrorLocation: "Nastaví umiestnenie chybových hlásení pre otázky vnorené do podrobných sekcií. Možnosť \"Zdediť\" použije nastavenie z vlastnosti \"Zarovnanie chybového hlásenia\".",
    // "When the \"Prevent duplicate responses\" property is enabled, a respondent attempting to submit a duplicate entry will receive the following error message."
    keyDuplicationError: "Keď je povolená vlastnosť Zabrániť duplicitným odpovediam, respondentovi, ktorý sa pokúša odoslať duplicitný záznam, sa zobrazí nasledujúce chybové hlásenie.",
    matrixdropdown: {
      // [Auto-translated] "When the \"Prevent duplicate responses\" property is enabled for a matrix column, a respondent attempting to submit a duplicate entry will receive the following error message."
      keyDuplicationError: "Keď je pre stĺpec matice povolená vlastnosť Zabrániť duplicitným odpovediam, respondent, ktorý sa pokúša odoslať duplicitný záznam, dostane nasledujúce chybové hlásenie."
    },
    // "Allows you to calculate total values based on an expression. The expression can include basic calculations (`{q1_id} + {q2_id}`), Boolean expressions (`{age} > 60`) and functions ('iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, etc.)."
    totalExpression: "Umožňuje vypočítať celkové hodnoty na základe výrazu. Výraz môže obsahovať základné výpočty (\"{q1_id} + {q2_id}\"), boolovské výrazy (\"{age} > 60') a funkcie (\"iif()\", \"today()\", \"age()\", \"min()\", \"max()\", \"avg()\" atď.).",
    // "Reference a column ID to require a user to provide a unique response for each question within the specified column."
    keyName: "Ak zadaný stĺpec obsahuje rovnaké hodnoty, prieskum vyhodí chybu \"Nejedinečná hodnota kľúča\".",
    // "Type a subtitle."
    description: "Zadajte podnadpis.",
    // [Auto-translated] "Choose a language to begin creating your survey. To add a translation, switch to a new language and translate the original text here or in the Translations tab."
    locale: "Vyberte jazyk a začnite vytvárať prieskum. Ak chcete pridať preklad, prepnite na nový jazyk a preložte pôvodný text tu alebo na karte Preklady.",
    // "Sets the location of a detail section in relation to a row. Choose from: \"None\" - no detail section is added; \"Under the row\" - a detail section is placed under each row of the matrix; \"Under the row, display one detail section only\" - a detail section is displayed under a single row only, the remaining sections are collapsed."
    detailPanelMode: "Nastaví umiestnenie sekcie podrobností vo vzťahu k riadku. Vyberte si z: \"Žiadne\" - nie je pridané žiadne rozšírenie; \"Pod riadkom\" - pod každým riadkom matice je umiestnené rozšírenie riadku; \"Pod riadkom zobraziť iba rozšírenie jedného riadka\" - rozšírenie sa zobrazí iba pod jedným riadkom, zvyšné rozšírenia riadkov sa zbalia.",
    // "Choose from: \"None\" - image maintains its original size; \"Contain\" - image is resized to fit while maintaining its aspect ratio; \"Cover\" - image fills the entire box while maintaining its aspect ratio; \"Fill\" - image is stretched to fill the box without maintaining its aspect ratio."
    imageFit: "Vyberte si z: \"Žiadne\" - obrázok si zachováva svoju pôvodnú veľkosť; \"Obsahovať\" - veľkosť obrázka sa zmení tak, aby sa zmestil pri zachovaní pomeru strán; \"Obal\" - obrázok vyplní celé pole pri zachovaní pomeru strán; \"Vyplniť\" - obrázok je natiahnutý tak, aby vyplnil pole bez zachovania pomeru strán.",
    // "The \"Inherit\" option applies a survey-level setting (\"Disabled\" by default)."
    autoGrow: "Postupne zvyšuje výšku vstupného poľa pri zadávaní údajov. Prepíše nastavenie Výška vstupného poľa (v riadkoch).",
    // [Auto-translated] "The \"Inherit\" option applies a survey-level setting (\"Enabled\" by default)."
    allowResize: "Možnosť \"Zdediť\" použije nastavenie na úrovni prieskumu (\"predvolene povolené\").",
    // [Auto-translated] "A time interval in seconds after which the survey auto-advances to the \"Thank You\" page. When set to 0, counts the time spent on the survey."
    timeLimit: "Časový interval v sekundách, po ktorom prieskum automaticky prejde na stránku \"Ďakujem\". Ak je nastavená na hodnotu 0, počíta čas strávený v prieskume.",
    // [Auto-translated] "A time interval in seconds after which the survey auto-advances to the next page. Hides the \"Previous\" navigation button. When set to 0, counts the time spent on the current page."
    timeLimitPerPage: "Časový interval v sekundách, po ktorom prieskum automaticky prejde na ďalšiu stranu. Skryje navigačné tlačidlo \"Predchádzajúce\". Ak je nastavená hodnota 0, počíta čas strávený na aktuálnej stránke.",
    // [Auto-translated] "Enable this option to trigger validation when a user focuses on an empty input field and then leaves it without making any changes."
    validateVisitedEmptyFields: "Povoľte túto možnosť, ak chcete spustiť overenie, keď sa používateľ zameria na prázdne vstupné pole a potom ho opustí bez vykonania akýchkoľvek zmien.",
    page: {
      // "A page ID that is not visible to respondents."
      name: "Identifikátor stránky, ktorý nie je viditeľný pre respondentov.",
      // "Type a page subtitle."
      description: "Zadajte podnadpis strany.",
      // "A caption displayed on a navigation button in the progress bar or table of contents (TOC). If you leave this field empty, the navigation button will use the page title or page name. To enable the progress bar or TOC, go to \"Survey\" → \"Navigation\"."
      navigationTitle: "Titulok zobrazený na navigačnom tlačidle na indikátore priebehu alebo obsahu. Ak toto pole necháte prázdne, navigačné tlačidlo použije názov stránky alebo názov stránky. Ak chcete povoliť indikátor priebehu alebo obsah, prejdite na \"Prieskum\" → \"Navigácia\".",
      // "A time interval in seconds after which the survey auto-advances to the next page. Hides the \"Previous\" navigation button. When set to 0, counts the time spent on the current page."
      timeLimit: "Časový interval v sekundách, po ktorom prieskum automaticky prejde na ďalšiu stránku.",
      // "Use the magic wand icon to set a conditional rule that determines page visibility."
      visibleIf: "Pomocou ikony čarovnej paličky nastavte podmienené pravidlo, ktoré určuje viditeľnosť stránky.",
      // [Auto-translated] "Use the magic wand icon to set a conditional rule that disables the read-only mode for the page."
      enableIf: "Pomocou ikony čarovného prútika nastavte podmienené pravidlo, ktoré vypne režim iba na čítanie pre stránku.",
      // "Use the magic wand icon to set a conditional rule that prevents survey submission unless at least one nested question has an answer."
      requiredIf: "Pomocou ikony čarovného prútika nastavte podmienené pravidlo, ktoré zabráni odoslaniu prieskumu, pokiaľ aspoň jedna vnorená otázka nemá odpoveď.",
      // "Applies to all questions within this page. When set to \"Hidden\", it also hides question descriptions. If you want to override this setting, define title alignment rules for individual questions or panels. The \"Inherit\" option applies the survey-level setting (\"Top\" by default)."
      questionTitleLocation: "Vzťahuje sa na všetky otázky na tejto stránke. Ak chcete toto nastavenie prepísať, definujte pravidlá zarovnania názvu pre jednotlivé otázky alebo panely. Možnosť \"Zdediť\" použije nastavenie na úrovni prieskumu (\"Predvolene hore\").",
      // [Auto-translated] "Sets consistent width for question titles when they are aligned to the left of their question boxes. Accepts CSS values (px, %, in, pt, etc.)."
      questionTitleWidth: "Nastavuje konzistentnú šírku názvov otázok, keď sú zarovnané naľavo od polí otázok. Akceptuje hodnoty CSS (px, %, in, pt atď.).",
      // "Sets the location of an error message in relation to the question with invalid input. Choose between: \"Top\" - an error text is placed at the top of the question box; \"Bottom\" - an error text is placed at the bottom of the question box. The \"Inherit\" option applies the survey-level setting (\"Top\" by default)."
      questionErrorLocation: "Nastaví umiestnenie chybového hlásenia vo vzťahu k otázke s neplatným zadaním. Vyberte si medzi: \"Hore\" - v hornej časti poľa otázok sa umiestni chybový text; \"Dole\" - v dolnej časti poľa otázok je umiestnený chybový text. Možnosť \"Zdediť\" použije nastavenie na úrovni prieskumu (\"Predvolene hore\").",
      // "Keeps the original order of questions or randomizes them. The \"Inherit\" option applies the survey-level setting (\"Original\" by default). The effect of this setting is only visible in the Preview tab."
      questionOrder: "Zachová pôvodné poradie otázok alebo ich náhodne vyberie. Možnosť \"Zdediť\" použije nastavenie na úrovni prieskumu (\"Originál\" v predvolenom nastavení). Efekt tohto nastavenia je viditeľný iba na karte Ukážka.",
      // "Sets the visibility of navigation buttons on the page. The \"Inherit\" option applies the survey-level setting, which defaults to \"Visible\"."
      showNavigationButtons: "Nastavuje viditeľnosť navigačných tlačidiel na stránke. Možnosť Zdediť použije nastavenie na úrovni prieskumu, ktoré je predvolene nastavené na \"Viditeľné\".",
      // [Auto-translated] "This table lets you configure each grid column on the page. It automatically sets the width percentage for each column based on the maximum number of elements in a row. To customize the grid layout, manually adjust these values and define the title width for all questions in each column."
      gridLayoutColumns: "Táto tabuľka umožňuje nakonfigurovať každý stĺpec mriežky na strane. Automaticky nastaví percentuálnu šírku pre každý stĺpec na základe maximálneho počtu prvkov v riadku. Ak chcete prispôsobiť rozloženie mriežky, manuálne upravte tieto hodnoty a definujte šírku názvu pre všetky otázky v každom stĺpci."
    },
    // [Auto-translated] "Sets the location of a timer on a page."
    timerLocation: "Nastaví umiestnenie časovača na strane.",
    // "Choose from: \"Locked\" - users cannot expand or collapse entries; \"Collapse all\" - all entries start in a collapsed state; \"Expand all\" - all entries start in an expanded state; \"First expanded\" - only the first entry is initially expanded. Applies if \"Entry display mode\" is set to \"List\" and the \"Entry title pattern\" property is specified."
    panelsState: "Vyberte si z: \"Zamknuté\" - používatelia nemôžu rozširovať ani zbaliť panely; \"Zbaliť všetko\" - všetky panely začínajú v zbalenom stave; \"Rozbaliť všetko\" - všetky panely začínajú v rozšírenom stave; \"Prvý rozšírený\" - pôvodne sa rozšíril iba prvý panel.",
    // [Auto-translated] "Enter a shared property name within the array of objects that contains the image or video file URLs you want to display in the choice list."
    imageLinkName: "Zadajte zdieľaný názov vlastnosti do poľa objektov obsahujúceho URL adresy obrázkov alebo videosúborov, ktoré chcete zobraziť v zozname výberu.",
    // "The left value serves as an item ID used in conditional rules, the right value is displayed to respondents."
    choices: "Ľavá hodnota slúži ako ID položky používané v podmienených pravidlách, pravá hodnota sa zobrazuje respondentom.",
    // [Auto-translated] "Type a user-friendly title to display."
    title: "Zadajte používateľsky prívetivý názov, ktorý chcete zobraziť.",
    // [Auto-translated] "Ensures that users won't complete the survey until files are uploaded."
    waitForUpload: "Zabezpečuje, že používatelia prieskum nevyplnia, kým sa nenahrajú súbory.",
    // [Auto-translated] "Accepts CSS values (px, %, in, pt, etc.)."
    minWidth: "Akceptuje hodnoty CSS (px, %, in, pt atď.).",
    // [Auto-translated] "Accepts CSS values (px, %, in, pt, etc.)."
    maxWidth: "Akceptuje hodnoty CSS (px, %, in, pt atď.).",
    // "Accepts CSS values (px, %, in, pt, etc.)."
    width: "Akceptuje hodnoty CSS (px, %, in, pt atď.).",
    // [Auto-translated] "A join identifier is a custom key that you can assign to several questions to link them together and sync their values. These values will be merged into a single array or object and stored in survey results using the key as the property name."
    valueName: "Identifikátor spojenia je vlastný kľúč, ktorý môžete priradiť niekoľkým otázkam, aby ste ich prepojili a synchronizovali ich hodnoty. Tieto hodnoty sa zlúčia do jedného poľa alebo objektu a uložia sa do výsledkov prieskumu pomocou kľúča ako názvu vlastnosti.",
    // [Auto-translated] "A value displayed in HTML questions and in the dynamic titles and descriptions of survey elements when the question value is empty."
    defaultDisplayValue: "Hodnota zobrazená v otázkach HTML a v dynamických názvoch a popisoch prvkov prieskumu, keď je hodnota otázky prázdna.",
    // [Auto-translated] "In single- and multiple-selection question types, each choice option has an ID and display value. When selected, this setting shows a display value instead of an ID value in HTML questions and dynamic titles and descriptions of survey elements."
    useDisplayValuesInDynamicTexts: "V prípade otázok s jedným a viacerými výbermi má každá možnosť výberu identifikátor a zobrazenú hodnotu. Ak je táto voľba vybratá, toto nastavenie zobrazuje zobrazenú hodnotu namiesto hodnoty ID v otázkach HTML a dynamických názvoch a popisoch prvkov prieskumu.",
    // "Choose whether or not to clear question values hidden by conditional logic and when to do it. The \"Inherit\" option applies the survey-level setting (\"Upon survey completion\" by default)."
    clearIfInvisible: "Vyberte, či chcete vymazať hodnoty otázok skryté podmienenou logikou a kedy to chcete urobiť. Možnosť \"Dediť\" použije nastavenie na úrovni prieskumu (\"Po dokončení prieskumu predvolene\").",
    // "Choose from: \"All\" - copies all choice options from the selected question; \"Selected\" - dynamically copies only selected choice options; \"Unselected\" - dynamically copies only unselected choice options. The \"None\" and \"Other\" options are copied by default if enabled in the source question."
    choicesFromQuestionMode: "Vyberte si z: \"Všetko\" - skopíruje všetky možnosti výberu z vybranej otázky; \"Vybraté\" - dynamicky kopíruje iba vybrané možnosti výberu; \"Nevybraté\" - dynamicky kopíruje iba nevybraté možnosti výberu. Možnosti \"Žiadne\" a \"Iné\" sa predvolene kopírujú, ak sú povolené v otázke zdroja.",
    // [Auto-translated] "In single- and multiple-selection question types, each choice option has an ID and display value. This setting specifies which matrix column or panel question should provide the IDs."
    choiceValuesFromQuestion: "V typoch otázok s jedným a viacerými výbermi má každá možnosť výberu ID a zobrazenú hodnotu. Toto nastavenie určuje, ktorý stĺpec matice alebo panelová otázka má poskytnúť ID.",
    // [Auto-translated] "In single- and multiple-selection question types, each choice option has an ID and display value. This setting specifies which matrix column or panel question should provide the display texts."
    choiceTextsFromQuestion: "V typoch otázok s jedným a viacerými výbermi má každá možnosť výberu ID a zobrazenú hodnotu. Toto nastavenie určuje, ktorý stĺpec matice alebo otázka panela by mala poskytovať zobrazované texty.",
    // [Auto-translated] "Select to let respondents add their own choices if the desired option isn't available in the dropdown. Custom choices will only be stored temporarily for the duration of the current browser session."
    allowCustomChoices: "Vyberte, ak chcete respondentom umožniť pridať vlastné možnosti, ak požadovaná možnosť nie je k dispozícii v rozbaľovacej ponuke. Vlastné voľby sa budú ukladať iba dočasne počas trvania aktuálnej relácie prehliadača.",
    // [Auto-translated] "When selected, users can include additional input in a separate comment box."
    showOtherItem: "Ak je táto voľba vybratá, používatelia môžu zahrnúť ďalšie vstupy do samostatného poľa komentára.",
    // "Displays each special choice option (\"None\", \"Other\", \"Select All\") on a new line, even when using a multiple-column layout."
    separateSpecialChoices: "Zobrazí každú možnosť špeciálnej voľby (\"Žiadne\", \"Iné\", \"Vybrať všetko\") na novom riadku, a to aj pri použití rozloženia s viacerými stĺpcami.",
    // [Auto-translated] "Specify the location within the service dataset where the target array of objects is located. Leave empty if the URL already points to the array."
    path: "Zadajte umiestnenie v množine údajov služby, kde sa nachádza cieľové pole objektov. Ak URL adresa už odkazuje na pole, nechajte prázdne.",
    choicesbyurl: {
      // "Enter a uniform property name within the array of objects whose value will be stored as a response in survey results."
      valueName: " "
    },
    // [Auto-translated] "Enter a uniform property name within the array of objects that contains the values you want to display in the choice list."
    titleName: "Zadajte jednotný názov vlastnosti do poľa objektov obsahujúceho hodnoty, ktoré chcete zobraziť v zozname možností.",
    // [Auto-translated] "Select to allow the service to return an empty response or array."
    allowEmptyResponse: "Túto voľbu vyberte, ak chcete, aby služba vrátila prázdnu odpoveď alebo pole.",
    // [Auto-translated] "Use the magic wand icon to set a conditional rule that determines the visibility of all choice options."
    choicesVisibleIf: "Pomocou ikony čarovného prútika nastavte podmienené pravidlo, ktoré určuje viditeľnosť všetkých možností výberu.",
    // [Auto-translated] "The left value serves as an item ID used in conditional rules, the right value is displayed to respondents."
    rateValues: "Ľavá hodnota slúži ako ID položky používané v podmienených pravidlách, pravá hodnota sa zobrazuje respondentom.",
    rating: {
      // "\"Auto\" selects between the \"Buttons\" and \"Dropdown\" modes based on the available width. When the width is insufficient to display buttons, the question displays a dropdown."
      displayMode: "\"Auto\" si vyberá medzi režimami \"Tlačidlá\" a \"Rozbaľovacia ponuka\" na základe dostupnej šírky. Ak šírka nie je dostatočná na zobrazenie tlačidiel, v otázke sa zobrazí rozbaľovací zoznam."
    },
    // [Auto-translated] "Allows you to connect questions that produce results in different formats. When such questions are linked together using a join identifier, this shared property stores selected question values."
    valuePropertyName: "Umožňuje prepojiť otázky, ktoré vytvárajú výsledky v rôznych formátoch. Keď sú takéto otázky prepojené pomocou identifikátora spojenia, v tomto zdieľanom vlastníctve sa uložia vybraté hodnoty otázok.",
    // [Auto-translated] "Select if you want to update the drop-down menu contents to match the search query that a user is typing in the input field."
    searchEnabled: "Vyberte, či chcete aktualizovať obsah rozbaľovacej ponuky tak, aby zodpovedal vyhľadávaciemu dotazu, ktorý používateľ zadáva do vstupného poľa.",
    // [Auto-translated] "A value to save in survey results when respondents give a positive answer."
    valueTrue: "Hodnota, ktorú treba uložiť do výsledkov prieskumu, keď respondenti poskytnú kladnú odpoveď.",
    // [Auto-translated] "A value to save in survey results when respondents give a negative answer."
    valueFalse: "Hodnota, ktorú je potrebné uložiť do výsledkov prieskumu, keď respondenti poskytnú zápornú odpoveď.",
    // [Auto-translated] "It's not recommended that you disable this option as it overrides the Preview image and makes it hard for a user to understand whether the files have been uploaded."
    showPreview: "Neodporúča sa vypnúť túto možnosť, pretože prepíše obrázok ukážky a používateľovi sťaží pochopenie, či boli súbory nahrané.",
    // [Auto-translated] "Triggers a prompt asking to confirm the file deletion."
    needConfirmRemoveFile: "Spustí výzvu na potvrdenie odstránenia súboru.",
    // [Auto-translated] "Enable to rank only selected choices. Users will drag selected items from the choice list to order them within the ranking area."
    selectToRankEnabled: "Povoľte zoradiť iba vybrané možnosti. Používatelia presunú vybrané položky zo zoznamu možností a zoradia ich v oblasti poradia.",
    // [Auto-translated] "Enter a list of choices that will be suggested to the respondent during input."
    dataList: "Zadajte zoznam možností, ktoré budú respondentovi navrhnuté počas vstupu.",
    // [Auto-translated] "The setting only resizes the input fields and doesn't affect the width of the question box."
    inputSize: "Toto nastavenie zmení iba veľkosť vstupných polí a neovplyvní šírku poľa otázok.",
    // [Auto-translated] "Sets consistent width for all item labels. Accepts CSS values (px, %, in, pt, etc.)."
    itemTitleWidth: "Nastaví konzistentnú šírku pre všetky štítky položiek. Akceptuje hodnoty CSS (px, %, in, pt atď.).",
    // "Select how to align input value within the field. The default setting \"Auto\" aligns the input value to the right if currency or numeric masking is applied and to the left if not."
    inputTextAlignment: "Vyberte, ako chcete zarovnať vstupnú hodnotu v poli. Predvolené nastavenie \"Auto\" zarovná vstupnú hodnotu doprava, ak je použité maskovanie meny alebo čísel, a doľava, ak nie.",
    // [Auto-translated] "Serves as a substitute when the image cannot be displayed on a user's device and for accessibility purposes."
    altText: "Slúži ako náhrada, keď obrázok nie je možné zobraziť na zariadení používateľa a na účely prístupnosti.",
    // "Defines the color of the selected emoji when the Rating icon type is set to \"Smileys\". Choose between: \"Default\" - the selected emoji appears in default survey color; \"Scale\" - the selected emoji inherits color from the rating scale."
    rateColorMode: "Definuje farbu vybraných emodži, keď je typ ikony hodnotenia nastavený na \"Smajlíky\". Vyberte si medzi: \"Predvolené\" - vybrané emodži sa zobrazia v predvolenej farbe prieskumu; \"Mierka\" - vybrané emodži zdedí farbu z hodnotiacej stupnice.",
    expression: {
      // "An expression ID that is not visible to respondents."
      name: "ID výrazu, ktoré respondenti nevidia.",
      // "Type an expression subtitle."
      description: "Zadajte podnadpis výrazu.",
      // "An expression can include basic calculations (`{q1_id} + {q2_id}`), conditions (`{age} > 60`), and functions ('iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, etc.)."
      expression: "Výraz môže obsahovať základné výpočty (\"{q1_id} + {q2_id}\"), podmienky (\"{vek} > 60\") a funkcie (\"iif()\", \"today()\", \"age()\", \"min()\", \"max()\", \"avg()\" atď.)."
    },
    // "Select to store the \"Other\" option value as a separate property in survey results."
    storeOthersAsComment: "Túto voľbu vyberte, ak chcete uložiť hodnotu možnosti \"Iné\" ako samostatnú vlastnosť vo výsledkoch prieskumu.",
    // [Auto-translated] "Use {0} as a placeholder for the actual value."
    format: "Použite {0} ako zástupný symbol skutočnej hodnoty.",
    // [Auto-translated] "Refer to the [accept](https://www.w3schools.com/tags/att_input_accept.asp) attribute description for more information."
    acceptedTypes: "Ďalšie informácie nájdete v popise atribútu [accept](https://www.w3schools.com/tags/att_input_accept.asp).",
    // [Auto-translated] "Arranges choice options in a multi-column layout. When set to 0, the options are displayed in a single line. Applies only to columns with \"Cell input type\" set to Radio Button Group or Checkboxes."
    columnColCount: "Usporiada možnosti výberu vo viacstĺpcovom rozložení. Ak je nastavená hodnota 0, možnosti sa zobrazia v jednom riadku. Vzťahuje sa len na stĺpce s možnosťou \"Typ vstupu bunky\" nastavenou na Skupina prepínacích tlačidiel alebo Začiarkavacie políčka.",
    // [Auto-translated] "Select the data type that the user's browser can retrieve. This data is sourced either from past values entered by the user or from pre-configured values if any have been saved by the user for autocompletion."
    autocomplete: "Vyberte typ údajov, ktoré môže prehliadač používateľa načítať. Tieto údaje pochádzajú buď z minulých hodnôt zadaných používateľom, alebo z vopred nakonfigurovaných hodnôt, ak ich používateľ uložil na automatické dopĺňanie.",
    // "Applies when \"File source type\" is \"Local file\" or when camera is unavailable"
    filePlaceholder: "Použije, keď \"Typ zdroja\" je \"Lokálne súbory\" alebo keď fotoaparát nie je k dispozícii",
    // "Applies when \"File source type\" is \"Camera\"."
    photoPlaceholder: "Používa sa, keď \"Typ zdroja\" je \"Fotoaparát\".",
    // "Applies when \"File source type\" is \"Local file or camera\"."
    fileOrPhotoPlaceholder: "Použije, keď \"Typ zdroja\" je \"Lokálne súbory alebo fotoaparát\".",
    // "Arranges choice options in a multi-column layout. When set to 0, the options are displayed in a single line."
    colCount: "Usporiada možnosti výberu vo viacstĺpcovom rozložení. Ak je nastavená hodnota 0, možnosti sa zobrazia v jednom riadku.",
    multipletext: {
      // [Auto-translated] "Arranges text boxes in a multi-column layout."
      colCount: "Usporiada textové polia do rozloženia s viacerými stĺpcami."
    },
    masksettings: {
      // "Select if you want to store the question value with an applied mask in survey results."
      saveMaskedValue: "Vyberte, či chcete do výsledkov prieskumu uložiť hodnotu otázky s použitou maskou."
    },
    patternmask: {
      // "The pattern can contain string literals and the following placeholders: `9` - for a digit; `a` - for an upper- or lower-case letter; `#` - for a digit or an upper- or lower-case letter. Use backslash `\\` to escape a character."
      pattern: "Vzor môže obsahovať reťazcové literály a nasledujúce zástupné symboly: \"9\" - pre číslicu; \"a\" - pre veľké alebo malé písmeno; '#' - pre číslicu alebo veľké alebo malé písmeno. Použite opačné lomítko \"\\\" na únik z postavy."
    },
    datetimemask: {
      // "The pattern can contain separator characters and the following placeholders:<br>`m` - Month number.<br>`mm` - Month number, with leading zero for single-digit values.<br>`d` - Day of the month.<br>`dd` - Day of the month, with leading zero for single-digit values.<br>`yy` - The last two digits of the year.<br>`yyyy` - Four-digit year.<br>`H` - Hours in 24-hour format.<br>`HH` - Hours in 24-hour format, with leading zero for single-digit values.<br>`h` - Hours in 12-hour format.<br>`hh` - Hours in 12-hour format, with leading zero for single-digit values.<br>`MM` - Minutes.<br>`ss` - Seconds.<br>`TT` - 12-hour clock period in upper case (AM/PM).<br>`tt` - 12-hour clock period in lower case (am/pm)."
      pattern: "Vzor môže obsahovať oddeľovacie znaky a nasledujúce zástupné symboly:<br>\"m\" - číslo mesiaca.<br>′mm′ — číslo mesiaca s nulou na začiatku pre jednociferné hodnoty. <br>\"d\" - Deň v mesiaci. <br>\"dd\" - Deň v mesiaci s počiatočnou nulou pre jednociferné hodnoty. <br>\"yy\" - posledné dve číslice roka. <br>\"rrrr\" - štvormiestny rok. <br>\"H\" - hodiny v 24-hodinovom formáte. <br>\"HH\" - hodiny v 24-hodinovom formáte s úvodnou nulou pre jednociferné hodnoty. <br>\"h\" - hodiny v 12-hodinovom formáte. <br>\"hh\" - hodiny v 12-hodinovom formáte s úvodnou nulou pre jednociferné hodnoty. <br>\"MM\" - minúty. <br>\"ss\" - sekundy. <br>\"TT\" - 12-hodinový časový úsek veľkými písmenami (AM/PM). <br>\"TT\" - 12-hodinová perióda malých písmen (dopoludnia/popoludní)."
    },
    numericmask: {
      // "A symbol used to separate the fractional part from the integer part of a displayed number."
      decimalSeparator: "Symbol používaný na oddelenie zlomkovej časti od celočíselnej časti zobrazeného čísla.",
      // "A symbol used to separate the digits of a large number into groups of three."
      thousandsSeparator: "Symbol používaný na oddelenie číslic veľkého čísla do skupín po troch.",
      // "Limits how many digits to retain after the decimal point for a displayed number."
      precision: "Obmedzuje, koľko číslic sa má zachovať za desatinnou čiarkou pre zobrazené číslo."
    },
    currencymask: {
      // "One or several symbols to be displayed before the value."
      prefix: "Jeden alebo niekoľko symbolov, ktoré sa majú zobraziť pred hodnotou.",
      // "One or several symbols to be displayed after the value."
      suffix: "Jeden alebo viac symbolov, ktoré sa zobrazia za hodnotou."
    },
    theme: {
      // "This setting applies only to questions outside of a panel."
      isPanelless: "Toto nastavenie sa vzťahuje len na otázky mimo panela.",
      // "Sets a supplementary color that highlights key survey elements."
      primaryColor: "Nastaví doplnkovú farbu, ktorá zvýrazní kľúčové prvky prieskumu.",
      // "Adjusts the transparency of panels and question boxes relative to the survey background."
      panelBackgroundTransparency: "Upravuje priehľadnosť panelov a polí otázok vzhľadom na pozadie prieskumu.",
      // "Adjusts the transparency of input elements relative to the survey background."
      questionBackgroundTransparency: "Upraví priehľadnosť vstupných prvkov vzhľadom na pozadie prieskumu.",
      // "Sets the corner radius for all rectangular elements. Enable the Advanced Mode if you want to set individual corner radius values for input elements or panels and question boxes."
      cornerRadius: "Nastaví polomer rohu pre všetky obdĺžnikové prvky. Povoľte Rozšírený režim, ak chcete nastaviť jednotlivé hodnoty polomeru rohu pre vstupné prvky alebo panely a polia otázok.",
      // "Sets the main background color of the survey."
      "--sjs-general-backcolor-dim": "Nastaví hlavnú farbu pozadia prieskumu."
    },
    header: {
      // "The \"Same as container\" option auto-adjusts the header content area width to fit into the HTML element the survey is placed in."
      inheritWidthFrom: "Možnosť \"Rovnaké ako kontajner\" automaticky upraví šírku oblasti obsahu hlavičky tak, aby sa zmestila do prvku HTML, do ktorého je prieskum umiestnený.",
      // [Auto-translated] "The width of the header area that contains the survey title and description, measured in pixels."
      textAreaWidth: "Šírka oblasti hlavičky, ktorá obsahuje názov a popis prieskumu, meraná v pixeloch.",
      // [Auto-translated] "When enabled, the top of the survey overlays the bottom of the header."
      overlapEnabled: "Ak je táto možnosť povolená, horná časť prieskumu prekrýva spodnú časť hlavičky.",
      // [Auto-translated] "When set to 0, the height is calculated automatically to accommodate the header's content."
      mobileHeight: "Ak je nastavená hodnota 0, výška sa vypočíta automaticky, aby sa prispôsobila obsahu hlavičky."
    },
    // "The \"Same as container\" option auto-adjusts the progress bar area width to fit into the HTML element the survey is placed in."
    progressBarInheritWidthFrom: "Možnosť \"Rovnaké ako kontajner\" automaticky upraví šírku oblasti indikátora priebehu tak, aby sa zmestila do prvku HTML, v ktorom je prieskum umiestnený.",
    // "Used when the 'Survey layout' is set to 'Single input field per page'. In this layout, the matrix is split so that each input field appears on a separate page. Use the {rowIndex} placeholder to insert auto numbering, {rowTitle} or {rowName} to reference the row's title or ID, and {row.columnid} to include the value of a specific matrix column."
    singleInputTitleTemplate: "Používa sa, keď je \"Rozloženie prieskumu\" nastavené na \"Jedno vstupné pole na stranu\". V tomto rozložení je matica rozdelená tak, aby sa každé vstupné pole zobrazilo na samostatnej strane. Zástupný symbol {rowIndex} použite na vloženie automatického číslovania, {rowTitle} alebo {rowName} na odkazovanie na názov alebo ID riadka a {row.columnid} na zahrnutie hodnoty konkrétneho stĺpca matice."
  },
  // Properties
  p: {
    title: {
      // "title"
      name: "titul",
      // "Leave it empty, if it is the same as 'Name'"
      title: "Nechajte prázdne, ak sa zhoduje s menom"
    },
    // "Allow multiple selection"
    multiSelect: "Výber viacerých možností",
    // "Show image and video captions"
    showLabel: "Zobraziť štítok",
    // [Auto-translated] "Swap the order of Yes and No"
    swapOrder: "Zámena poradia Áno a Nie",
    // [Auto-translated] "Value"
    value: "Hodnota",
    // [Auto-translated] "Tab alignment"
    tabAlign: "Zarovnanie tabulátora",
    // [Auto-translated] "File source type"
    sourceType: "Typ zdroja súboru",
    // [Auto-translated] "Fit to container"
    fitToContainer: "Vhodné na kontajner",
    // [Auto-translated] "Set value expression"
    setValueExpression: "Nastavenie výrazu hodnoty",
    // "Description"
    description: "opis", // Auto-generated string
    // "Logo fit"
    logoFit: "umiestnenie loga",
    // "Pages"
    pages: "stránky", // Auto-generated string
    // [Auto-translated] "Questions"
    questions: "Otázky", // Auto-generated string
    // "Triggers"
    triggers: "aktivátory",
    // "Custom variables"
    calculatedValues: "vypočítané hodnoty",
    // [Auto-translated] "Survey id"
    surveyId: "ID prieskumu", // Auto-generated string
    // [Auto-translated] "Survey post id"
    surveyPostId: "ID príspevku prieskumu", // Auto-generated string
    // [Auto-translated] "Survey show data saving"
    surveyShowDataSaving: "Prieskum ukazuje ukladanie údajov", // Auto-generated string
    // "Question description alignment"
    questionDescriptionLocation: "otázka – poloha opisu",
    // "Progress bar type"
    progressBarType: "typ indikátora priebehu", // Auto-generated string
    // [Auto-translated] "Show table of contents (TOC)"
    showTOC: "Zobraziť obsah (TOC)",
    // [Auto-translated] "TOC alignment"
    tocLocation: "Zosúladenie TOC",
    // "Question title pattern"
    questionTitlePattern: "otázka – vzor titulu", // Auto-generated string
    // "Survey width mode"
    widthMode: "šírka režimu",
    // [Auto-translated] "Show brand info"
    showBrandInfo: "Zobraziť informácie o značke", // Auto-generated string
    // "Use display values in dynamic texts"
    useDisplayValuesInDynamicTexts: "Použiť zobrazené hodnoty v titule",
    // "Visible if"
    visibleIf: "Viditeľné ak", // Auto-generated string
    // "Default value expression"
    defaultValueExpression: "predvolený výraz hodnoty",
    // "Required if"
    requiredIf: "Povinné ak", // Auto-generated string
    // [Auto-translated] "Reset value if"
    resetValueIf: "Obnoviť hodnotu, ak",
    // [Auto-translated] "Set value if"
    setValueIf: "Nastaviť hodnotu, ak",
    // "Validation rules"
    validators: "overovatelia",
    // "Bindings"
    bindings: "väzby", // Auto-generated string
    // [Auto-translated] "Render as"
    renderAs: "Vykresliť ako", // Auto-generated string
    // [Auto-translated] "Attach original items"
    attachData: "Priloženie originálnych položiek", // Auto-generated string
    // "Choices"
    choices: "možnosti",
    // "Choices by url"
    choicesByUrl: "Možnosti podľa URL", // Auto-generated string
    // "Currency"
    currency: "mena", // Auto-generated string
    // [Auto-translated] "Cell hint"
    cellHint: "Pomôcka buniek", // Auto-generated string
    // [Auto-translated] "Total maximum fraction digits"
    totalMaximumFractionDigits: "Celkové maximálne číslice zlomkov", // Auto-generated string
    // [Auto-translated] "Total minimum fraction digits"
    totalMinimumFractionDigits: "Celkové minimálne zlomkové číslice", // Auto-generated string
    // "Columns"
    columns: "stĺpce", // Auto-generated string
    // [Auto-translated] "Detail elements"
    detailElements: "Detailné prvky", // Auto-generated string
    // [Auto-translated] "Allow adaptive actions"
    allowAdaptiveActions: "Povolenie adaptívnych akcií", // Auto-generated string
    // "Default row value"
    defaultRowValue: "Predvolená hodnota riadka", // Auto-generated string
    // [Auto-translated] "Auto-expand new row details"
    detailPanelShowOnAdding: "Automatické rozbalenie podrobností nového riadka",
    // [Auto-translated] "Choices lazy load enabled"
    choicesLazyLoadEnabled: "Možnosti lenivého zaťaženia povolené", // Auto-generated string
    // [Auto-translated] "Choices lazy load page size"
    choicesLazyLoadPageSize: "Možnosti lenivé načítať veľkosť stránky", // Auto-generated string
    // [Auto-translated] "Input field component"
    inputFieldComponent: "Súčasť vstupného poľa", // Auto-generated string
    // [Auto-translated] "Item component"
    itemComponent: "Súčasť položky", // Auto-generated string
    // "Min"
    min: "min.", // Auto-generated string
    // "Max"
    max: "max.", // Auto-generated string
    // "Min value expression"
    minValueExpression: "výraz minimálnej hodnoty", // Auto-generated string
    // "Max value expression"
    maxValueExpression: "výraz maximálnej hodnoty", // Auto-generated string
    // "Step"
    step: "krok", // Auto-generated string
    // "Items for auto-suggest"
    dataList: "zoznam údajov",
    // "Input field width (in characters)"
    inputSize: "Veľkosť položky",
    // [Auto-translated] "Item label width"
    itemTitleWidth: "Šírka štítku položky",
    // [Auto-translated] "Input value alignment"
    inputTextAlignment: "Zarovnanie vstupných hodnôt",
    // [Auto-translated] "Elements"
    elements: "Prvky", // Auto-generated string
    // [Auto-translated] "Content"
    content: "Obsah", // Auto-generated string
    // "Navigation title"
    navigationTitle: "Navigácia –​ titul", // Auto-generated string
    // "Navigation description"
    navigationDescription: "Navigácia – opis", // Auto-generated string
    // [Auto-translated] "Long tap"
    longTap: "Dlhé klepnutie", // Auto-generated string
    // "Expand input field dynamically"
    autoGrow: "automatické rozšírenie",
    // [Auto-translated] "Enable resize handle"
    allowResize: "Povoliť rukoväť na zmenu veľkosti",
    // [Auto-translated] "Accept carriage return"
    acceptCarriageReturn: "Akceptovať vrátenie prepravy", // Auto-generated string
    // [Auto-translated] "Display mode"
    displayMode: "Režim zobrazenia",
    // [Auto-translated] "Rate type"
    rateType: "Typ sadzby", // Auto-generated string
    // "Label"
    label: "štítok", // Auto-generated string
    // "Content mode"
    contentMode: "režim obsahu",
    // "Image and thumbnail fit"
    imageFit: "umiestnenie obrázka",
    // [Auto-translated] "Alt text"
    altText: "Alternatívny text",
    // "Height"
    height: "výška", // Auto-generated string
    // [Auto-translated] "Height on smartphones"
    mobileHeight: "Výška na smartfónoch",
    // "Pen color"
    penColor: "farba pera", // Auto-generated string
    // "Background color"
    backgroundColor: "farba pozadia",
    // [Auto-translated] "Template elements"
    templateElements: "Prvky šablóny", // Auto-generated string
    // [Auto-translated] "Operator"
    operator: "Operátor", // Auto-generated string
    // [Auto-translated] "Is variable"
    isVariable: "Je variabilný", // Auto-generated string
    // [Auto-translated] "Run expression"
    runExpression: "Spustiť výraz", // Auto-generated string
    // "Show caption"
    showCaption: "zobraziť titulok", // Auto-generated string
    // "Icon name"
    iconName: "názov ikony", // Auto-generated string
    // "Icon size"
    iconSize: "veľkosť ikony", // Auto-generated string
    // [Auto-translated] "Precision"
    precision: "Presnosť", // Auto-generated string
    // [Auto-translated] "Matrix drag handle area"
    matrixDragHandleArea: "Oblasť ťahacej rukoväte matice", // Auto-generated string
    // [Auto-translated] "Background image"
    backgroundImage: "Obrázok na pozadí",
    // [Auto-translated] "Background image fit"
    backgroundImageFit: "Prispôsobenie obrázku na pozadí", // Auto-generated string
    // [Auto-translated] "Background image attachment"
    backgroundImageAttachment: "Príloha obrázka na pozadí", // Auto-generated string
    // [Auto-translated] "Background opacity"
    backgroundOpacity: "Nepriehľadnosť pozadia", // Auto-generated string
    // [Auto-translated] "Allow selective ranking"
    selectToRankEnabled: "Povoliť selektívne poradie",
    // [Auto-translated] "Ranking area alignment"
    selectToRankAreasLayout: "Zarovnanie oblasti hodnotenia",
    // [Auto-translated] "Text to show if all options are selected"
    selectToRankEmptyRankedAreaText: "Text, ktorý zobrazuje, či sú vybraté všetky možnosti",
    // [Auto-translated] "Placeholder text for the ranking area"
    selectToRankEmptyUnrankedAreaText: "Zástupný text pre oblasť hodnotenia",
    // [Auto-translated] "Allow camera access"
    allowCameraAccess: "Povolenie prístupu ku kamere", // Auto-generated string
    // [Auto-translated] "Rating icon color mode"
    scaleColorMode: "Farebný režim ikony hodnotenia",
    // [Auto-translated] "Smileys color scheme"
    rateColorMode: "Farebná schéma smajlíkov",
    // [Auto-translated] "Copy display value"
    copyDisplayValue: "Kopírovať zobrazenú hodnotu", // Auto-generated string
    // [Auto-translated] "Column span"
    effectiveColSpan: "Rozpätie stĺpca",
    // [Auto-translated] "Progress bar area width"
    progressBarInheritWidthFrom: "Šírka oblasti indikátora priebehu",
    // [Auto-translated] "Theme name"
    themeName: "Názov témy"
  },
  theme: {
    // "Advanced mode"
    advancedMode: "Rozšírený režim",
    // "Page"
    pageTitle: "Písmo názvu stránky",
    // "Question box"
    questionTitle: "Písmo názvu otázky",
    // "Input element"
    editorPanel: "Vstupný prvok",
    // [Auto-translated] "Lines"
    lines: "Riadky",
    // [Auto-translated] "Default"
    primaryDefaultColor: "Predvolený",
    // [Auto-translated] "Hover"
    primaryDarkColor: "Hover",
    // [Auto-translated] "Selected"
    primaryLightColor: "Vybraný",
    // [Auto-translated] "Background color"
    backgroundDimColor: "Farba pozadia",
    // "Corner radius"
    cornerRadius: "Polomer rohov",
    // [Auto-translated] "Default background"
    backcolor: "Predvolené pozadie",
    // [Auto-translated] "Hover background"
    hovercolor: "Ukázanie na pozadie",
    // [Auto-translated] "Border decoration"
    borderDecoration: "Dekorácia okrajov",
    // [Auto-translated] "Font color"
    fontColor: "Farba písma",
    // [Auto-translated] "Background color"
    backgroundColor: "Farba pozadia",
    // [Auto-translated] "Default color"
    primaryForecolor: "Predvolená farba",
    // [Auto-translated] "Disabled color"
    primaryForecolorLight: "Zakázaná farba",
    // [Auto-translated] "Font"
    font: "Písmo",
    // [Auto-translated] "Darker"
    borderDefault: "Tmavšie",
    // [Auto-translated] "Lighter"
    borderLight: "Zapaľovač",
    // [Auto-translated] "Font family"
    fontFamily: "Skupina písiem",
    // [Auto-translated] "Regular"
    fontWeightRegular: "Pravidelný",
    // [Auto-translated] "Heavy"
    fontWeightHeavy: "Ťažký",
    // [Auto-translated] "Semi-bold"
    fontWeightSemiBold: "Polotučné",
    // [Auto-translated] "Bold"
    fontWeightBold: "Smelý",
    // [Auto-translated] "Color"
    color: "Farba",
    // [Auto-translated] "Placeholder color"
    placeholderColor: "Farba zástupného symbolu",
    // [Auto-translated] "Size"
    size: "Veľkosť",
    // [Auto-translated] "Opacity"
    opacity: "Neprehľadnosť",
    // [Auto-translated] "X"
    boxShadowX: "X",
    // [Auto-translated] "Y"
    boxShadowY: "Y",
    // [Auto-translated] "Add Shadow Effect"
    boxShadowAddRule: "Pridanie efektu tieňa",
    // [Auto-translated] "Blur"
    boxShadowBlur: "Rozmazať",
    // [Auto-translated] "Spread"
    boxShadowSpread: "Nátierka",
    // [Auto-translated] "Drop"
    boxShadowDrop: "Kvapka",
    // [Auto-translated] "Inner"
    boxShadowInner: "Vnútorný",
    names: {
      // [Auto-translated] "Default"
      default: "Predvolený",
      // [Auto-translated] "Sharp"
      sharp: "Ostrý",
      // [Auto-translated] "Borderless"
      borderless: "Bez okrajov",
      // [Auto-translated] "Flat"
      flat: "Plochý",
      // [Auto-translated] "Plain"
      plain: "Obyčajný",
      // [Auto-translated] "Double Border"
      doubleborder: "Dvojité ohraničenie",
      // [Auto-translated] "Layered"
      layered: "Vrstvené",
      // [Auto-translated] "Solid"
      solid: "Pevný",
      // [Auto-translated] "3D"
      threedimensional: ".3D",
      // [Auto-translated] "Contrast"
      contrast: "Kontrast"
    },
    colors: {
      // [Auto-translated] "Teal"
      teal: "Šedozelená",
      // [Auto-translated] "Blue"
      blue: "Modrý",
      // [Auto-translated] "Purple"
      purple: "Purpurový",
      // [Auto-translated] "Orchid"
      orchid: "Orchidea",
      // [Auto-translated] "Tulip"
      tulip: "Tulipán",
      // [Auto-translated] "Brown"
      brown: "Hnedý",
      // [Auto-translated] "Green"
      green: "Zelený",
      // [Auto-translated] "Gray"
      gray: "Sivý"
    }
  },
  creatortheme: {
    // [Auto-translated] "Surface background"
    "--sjs-special-background": "Povrchové pozadie",
    // [Auto-translated] "Primary"
    "--sjs-primary-background-500": "Prvotný",
    // [Auto-translated] "Secondary"
    "--sjs-secondary-background-500": "Sekundárny",
    // [Auto-translated] "Surface"
    surfaceScale: "Povrch",
    // [Auto-translated] "UI elements"
    userInterfaceBaseUnit: "Prvky používateľského rozhrania",
    // [Auto-translated] "Font"
    fontScale: "Písmo",
    names: {
      // [Auto-translated] "Survey Creator 2020"
      sc2020: "Tvorca prieskumu 2020",
      // [Auto-translated] "Light"
      "default-light": "Svetlo",
      // [Auto-translated] "Dark"
      "default-dark": "Tmavý",
      // [Auto-translated] "Contrast"
      "default-contrast": "Kontrast"
    }
  }
};

setupLocale({ localeCode: "sk", strings: skStrings });