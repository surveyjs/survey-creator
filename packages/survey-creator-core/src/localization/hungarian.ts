import { setupLocale } from "survey-creator-core";

export var huStrings = {
  // survey templates
  survey: {
    // "Edit"
    edit: "Szerkesztés",
    // "Watch and learn how to create surveys"
    externalHelpLink: "Nézze meg, hogyan kell kérdőíveket készíteni.",
    // "https://www.youtube.com/channel/UCH2ru9okIcooNZfpIbyq4qQ?view_as=subscriber"
    externalHelpLinkUrl: "https://www.youtube.com/channel/UCH2ru9okIcooNZfpIbyq4qQ?view_as=subscriber",
    // "Please drop a question here from the Toolbox."
    dropQuestion: "Kérem dobjon ide egy kérdést a bal oldali menüből.",
    // [Auto-translated] "Create a rule to customize the flow of the survey."
    addLogicItem: "Hozzon létre egy szabályt a felmérés folyamatának testreszabásához.",
    // "Copy"
    copy: "Másolás",
    // [Auto-translated] "Duplicate"
    duplicate: "Ismétlődő",
    // "Add to toolbox"
    addToToolbox: "Hozzáadás az eszköztárhoz",
    // "Delete Panel"
    deletePanel: "Panel eltávolítása",
    // "Delete Question"
    deleteQuestion: "Kérdés eltávolítása",
    // "Convert to"
    convertTo: "Konvertálás",
    // "Drag element"
    drag: "Elem mozgatása"
  },
  // Creator tabs
  tabs: {
    // "Preview"
    preview: "Próba",
    // "Themes"
    theme: "Témák",
    // "Translations"
    translation: "Fordítás",
    // "Designer"
    designer: "Kérdőívtervező",
    // "JSON Editor"
    json: "JSON szerkesztő",
    // [Auto-translated] "Logic"
    logic: "Logika"
  },
  // Question types
  qt: {
    // "Default"
    default: "Alapértelmezett",
    // "Checkboxes"
    checkbox: "Jelölőnégyzet",
    // "Long Text"
    comment: "Megjegyzés",
    // "Image Picker"
    imagepicker: "Képválasztó",
    // [Auto-translated] "Ranking"
    ranking: "Rangú",
    // [Auto-translated] "Image"
    image: "Kép",
    // "Dropdown"
    dropdown: "Legördülő",
    // [Auto-translated] "Multi-Select Dropdown"
    tagbox: "Többszörös kijelölés legördülő menü",
    // "File Upload"
    file: "Állomány",
    // "HTML"
    html: "HTML",
    // "Single-Select Matrix"
    matrix: "Mátrix (egyválasztós)",
    // "Multi-Select Matrix"
    matrixdropdown: "Mátrix (többválasztós)",
    // "Dynamic Matrix"
    matrixdynamic: "Mátrix (dinamikus)",
    // "Multiple Textboxes"
    multipletext: "Többsoros szöveg",
    // "Panel"
    panel: "Panel",
    // "Dynamic Panel"
    paneldynamic: "Panel (dinamikus)",
    // "Radio Button Group"
    radiogroup: "Választógomb",
    // "Rating Scale"
    rating: "Értékelés",
    // [Auto-translated] "Slider"
    slider: "Csúszka",
    // "Single-Line Input"
    text: "Egysoros szöveg",
    // "Yes/No (Boolean)"
    boolean: "Igaz-hamis",
    // "Expression (read-only)"
    expression: "Kifejezés (csak olvasható)",
    // [Auto-translated] "Signature"
    signaturepad: "Aláírás",
    // [Auto-translated] "Button Group"
    buttongroup: "Gombcsoport"
  },
  toolboxCategories: {
    // "General"
    general: "Általános",
    // "Choice Questions"
    choice: "Választási kérdések",
    // "Text Input Questions"
    text: "Szövegbeviteli kérdések",
    // "Containers"
    containers: "Konténerek",
    // "Matrix Questions"
    matrix: "Mátrix kérdések",
    // "Misc"
    misc: "Misc"
  },
  // Strings in SurveyJS Creator
  ed: {
    // "Default ({0})"
    defaultLocale: "Alapértelmezett ({0})",
    // "Survey"
    survey: "Kérdőív",
    // "Settings"
    settings: "Kérdőívbeállítások",
    // [Auto-translated] "Open settings"
    settingsTooltip: "Nyissa meg a beállításokat",
    // [Auto-translated] "Survey Settings"
    surveySettings: "Földmérési beállítások",
    // [Auto-translated] "Survey settings"
    surveySettingsTooltip: "Felmérési beállítások",
    // [Auto-translated] "Theme Settings"
    themeSettings: "Téma beállítások",
    // [Auto-translated] "Theme settings"
    themeSettingsTooltip: "Téma beállításai",
    // [Auto-translated] "Creator Settings"
    creatorSettingTitle: "Alkotói beállítások",
    // [Auto-translated] "Show Panel"
    showPanel: "Panel megjelenítése",
    // [Auto-translated] "Hide Panel"
    hidePanel: "Panel elrejtése",
    // [Auto-translated] "Select previous"
    prevSelected: "Előző kiválasztása",
    // [Auto-translated] "Select next"
    nextSelected: "Válassza a következőt",
    // [Auto-translated] "Focus previous"
    prevFocus: "Fókusz előző",
    // [Auto-translated] "Focus next"
    nextFocus: "Fókusz következő",
    // [Auto-translated] "Survey"
    surveyTypeName: "Felmérés",
    // [Auto-translated] "Page"
    pageTypeName: "Oldal",
    // [Auto-translated] "Panel"
    panelTypeName: "Panel",
    // [Auto-translated] "Question"
    questionTypeName: "Kérdés",
    // [Auto-translated] "Column"
    columnTypeName: "Oszlop",
    // "Add New Page"
    addNewPage: "Új lap felvétele",
    // "Scroll to the Right"
    moveRight: "Görgetés jobbra",
    // "Scroll to the Left"
    moveLeft: "Görgetés balra",
    // "Delete Page"
    deletePage: "Lap eltávolítása",
    // "Edit Page"
    editPage: "Lap szerkesztése",
    // "Edit"
    edit: "Szerkesztés",
    // "page"
    newPageName: "lap",
    // "question"
    newQuestionName: "kérdés",
    // "panel"
    newPanelName: "panel",
    // "text"
    newTextItemName: "szöveg",
    // [Auto-translated] "Default"
    defaultV2Theme: "Alapértelmezett",
    // [Auto-translated] "Modern"
    modernTheme: "Modern",
    // [Auto-translated] "Default (legacy)"
    defaultTheme: "Alapértelmezett (örökölt)",
    // "Preview Survey Again"
    testSurveyAgain: "Próba ismét",
    // "Survey width: "
    testSurveyWidth: "Kérdőív szélessége: ",
    // [Auto-translated] "You had to navigate to"
    navigateToMsg: "Navigálnia kellett",
    // "Save Survey"
    saveSurvey: "Kérdőív mentése",
    // [Auto-translated] "Save Survey"
    saveSurveyTooltip: "Felmérés mentése",
    // [Auto-translated] "Save Theme"
    saveTheme: "Téma mentése",
    // [Auto-translated] "Save Theme"
    saveThemeTooltip: "Téma mentése",
    // [Auto-translated] "Hide errors"
    jsonHideErrors: "Hibák elrejtése",
    // [Auto-translated] "Show errors"
    jsonShowErrors: "Hibák megjelenítése",
    // "Undo"
    undo: "Mégse",
    // "Redo"
    redo: "Ismét",
    // [Auto-translated] "Undo last change"
    undoTooltip: "Utolsó módosítás visszavonása",
    // [Auto-translated] "Redo the change"
    redoTooltip: "Ismételje meg a módosítást",
    // [Auto-translated] "Expand"
    expandTooltip: "Kibővít",
    // [Auto-translated] "Collapse"
    collapseTooltip: "Összeomlás",
    // "Expand All"
    expandAllTooltip: "Összes kibontása",
    // "Collapse All"
    collapseAllTooltip: "Az összes összecsukása",
    // [Auto-translated] "Zoom In"
    zoomInTooltip: "Nagyítás",
    // [Auto-translated] "Zoom to 100%"
    zoom100Tooltip: "Nagyítás 100%-ra",
    // [Auto-translated] "Zoom Out"
    zoomOutTooltip: "Kicsinyítés",
    // [Auto-translated] "Lock expand/collapse state for questions"
    lockQuestionsTooltip: "Kibontási/összecsukási állapot zárolása kérdések esetén",
    // [Auto-translated] "Show more"
    showMoreChoices: "Bővebben",
    // [Auto-translated] "Show less"
    showLessChoices: "Rövidebben",
    // [Auto-translated] "Copy"
    copy: "Másolat",
    // [Auto-translated] "Cut"
    cut: "Vág",
    // [Auto-translated] "Paste"
    paste: "Paszta",
    // [Auto-translated] "Copy selection to clipboard"
    copyTooltip: "Kijelölés másolása a vágólapra",
    // [Auto-translated] "Cut selection to clipboard"
    cutTooltip: "Kijelölés kivágása a vágólapra",
    // [Auto-translated] "Paste from clipboard"
    pasteTooltip: "Beillesztés vágólapról",
    // "Options"
    options: "Beállítások",
    // "Generate Valid JSON"
    generateValidJSON: "Érvényes JSON generálása",
    // "Generate Readable JSON"
    generateReadableJSON: "Olvasható JSON generálása",
    // "Toolbox"
    toolbox: "Eszköztár",
    // [Auto-translated] "Properties"
    "property-grid": "Kellékek",
    // [Auto-translated] "Search"
    toolboxSearch: "Keresés",
    // [Auto-translated] "Type to search..."
    toolboxFilteredTextPlaceholder: "Írja be a kereséshez...",
    // [Auto-translated] "No results found"
    toolboxNoResultsFound: "Nincs találat",
    // [Auto-translated] "Type to search..."
    propertyGridFilteredTextPlaceholder: "Írja be a kereséshez...",
    // [Auto-translated] "No results found"
    propertyGridNoResultsFound: "Nincs találat",
    // [Auto-translated] "Start configuring your form"
    propertyGridPlaceholderTitle: "Kezdje el konfigurálni az űrlapot",
    // [Auto-translated] "Click any category icon to explore survey settings. Additional settings will become available once you add a survey element to the design surface."
    propertyGridPlaceholderDescription: "Kattintson bármelyik kategória ikonjára a felmérési beállítások felfedezéséhez. További beállítások válnak elérhetővé, ha hozzáad egy földmérési elemet a tervezési felülethez.",
    // "Please correct JSON."
    correctJSON: "Kérem javítsa a JSON-t.",
    // "Survey Results "
    surveyResults: "Kérdőív eredménye: ",
    // "As Table"
    surveyResultsTable: "Táblaként",
    // "As JSON"
    surveyResultsJson: "JSON-ként",
    // "Question Title"
    resultsTitle: "Kérdés címe",
    // "Question Name"
    resultsName: "Kérdés megnevezése",
    // "Answer Value"
    resultsValue: "Válasz értéke",
    // "Display Value"
    resultsDisplayValue: "Kijelzett értéke",
    // "Modified"
    modified: "Módosított",
    // "Saving"
    saving: "Mentés folyamatban",
    // "Saved"
    saved: "Mentve",
    // [Auto-translated] "Error"
    propertyEditorError: "Hiba",
    // "Error! Editor content is not saved."
    saveError: "Hiba! A szerkesztő értéke nem került mentésre.",
    // [Auto-translated] "Language Settings"
    translationPropertyGridTitle: "Nyelvi beállítások",
    // [Auto-translated] "Theme Settings"
    themePropertyGridTitle: "Téma beállítások",
    // [Auto-translated] "Add Language"
    addLanguageTooltip: "Nyelv hozzáadása",
    // [Auto-translated] "Languages"
    translationLanguages: "Nyelvek",
    // [Auto-translated] "Are you certain you wish to delete all strings for this language?"
    translationDeleteLanguage: "Biztos benne, hogy törölni szeretné az összes karakterláncot ehhez a nyelvhez?",
    // "Select language to translate"
    translationAddLanguage: "Válasszon egy nyelvet a fordításhoz.",
    // "All Strings"
    translationShowAllStrings: "Összes szöveg mutatása",
    // [Auto-translated] "Used Strings Only"
    translationShowUsedStringsOnly: "Csak használt karakterláncok",
    // "All Pages"
    translationShowAllPages: "Összes lap mutatása",
    // "No strings to translate. Please change the filter."
    translationNoStrings: "Nincs fordítható szöveg. Kérem változtasson a szűrési feltételeken.",
    // "Export to CSV"
    translationExportToSCVButton: "Mentés CSV-ként",
    // "Import from CSV"
    translationImportFromSCVButton: "Betöltés CSV-ből.",
    // [Auto-translated] "Auto-translate All"
    translateUsigAI: "Összes automatikus fordítása",
    // [Auto-translated] "Translate from: "
    translateUsigAIFrom: "Fordítás: ",
    // [Auto-translated] "Untranslated strings"
    translationDialogTitle: "Lefordítatlan karakterláncok",
    // "Merge {0} with default locale"
    translationMergeLocaleWithDefault: "{0} összefűzése az alapértelmezett szöveggel.",
    // [Auto-translated] "Translation..."
    translationPlaceHolder: "Fordítás...",
    // [Auto-translated] "Source: "
    translationSource: "Forrás: ",
    // [Auto-translated] "Target: "
    translationTarget: "Cél: ",
    // [Auto-translated] "YouTube links are not supported."
    translationYouTubeNotSupported: "A YouTube-linkek nem támogatottak.",
    // [Auto-translated] "Export"
    themeExportButton: "Kivitel",
    // [Auto-translated] "Import"
    themeImportButton: "Importál",
    // [Auto-translated] "Export"
    surveyJsonExportButton: "Kivitel",
    // [Auto-translated] "Import"
    surveyJsonImportButton: "Importál",
    // [Auto-translated] "Copy to clipboard"
    surveyJsonCopyButton: "Másolás a vágólapra",
    // [Auto-translated] "Reset theme settings to default"
    themeResetButton: "Témabeállítások visszaállítása alapértelmezettre",
    // [Auto-translated] "Do you really want to reset the theme? All your customizations will be lost."
    themeResetConfirmation: "Tényleg vissza akarja állítani a témát? Az összes testreszabás elvész.",
    // [Auto-translated] "Yes, reset the theme"
    themeResetConfirmationOk: "Igen, állítsa vissza a témát",
    // "Bold"
    bold: "Félkövér",
    // "Italic"
    italic: "Dőlt",
    // "Underline"
    underline: "Aláhúzott",
    // "Add Question"
    addNewQuestion: "Kérdés felvétele",
    // [Auto-translated] "Select page..."
    selectPage: "Válasszon oldalt...",
    // [Auto-translated] "Choices are copied from"
    carryForwardChoicesCopied: "A választási lehetőségek másolása innen történik",
    // [Auto-translated] "Choices are loaded from a web service."
    choicesLoadedFromWebText: "A választási lehetőségek egy webszolgáltatásból töltődnek be.",
    // [Auto-translated] "Go to settings"
    choicesLoadedFromWebLinkText: "Válassza a beállítások",
    // [Auto-translated] "Preview of loaded choice options"
    choicesLoadedFromWebPreviewTitle: "A betöltött választási lehetőségek előnézete",
    // [Auto-translated] "HTML content will be here."
    htmlPlaceHolder: "A HTML tartalom itt lesz.",
    // [Auto-translated] "Drop a question from the toolbox here."
    panelPlaceHolder: "Itt dobjon el egy kérdést az eszköztárból.",
    // [Auto-translated] "The survey is empty. Drag an element from the toolbox or click the button below."
    surveyPlaceHolder: "A felmérés üres. Húzzon egy elemet az eszköztárról, vagy kattintson az alábbi gombra.",
    // [Auto-translated] "The page is empty. Drag an element from the toolbox or click the button below."
    pagePlaceHolder: "Az oldal üres. Húzzon egy elemet az eszköztárról, vagy kattintson az alábbi gombra.",
    // [Auto-translated] "Drag and drop an image here or click the button below and choose an image to upload"
    imagePlaceHolder: "Húzzon ide egy képet, vagy kattintson az alábbi gombra, és válassza ki a feltölteni kívánt képet",
    // "Click the \"Add Question\" button below to start creating your form."
    surveyPlaceHolderMobile: "Kattintson az alábbi \"Kérdés hozzáadása\" gombra az űrlap létrehozásának megkezdéséhez.",
    // [Auto-translated] "Your form is empty"
    surveyPlaceholderTitle: "Az űrlap üres",
    // [Auto-translated] "Your form is empty"
    surveyPlaceholderTitleMobile: "Az űrlap üres",
    // [Auto-translated] "Drag an element from the toolbox or click the button below."
    surveyPlaceholderDescription: "Húzzon egy elemet az eszköztárról, vagy kattintson az alábbi gombra.",
    // [Auto-translated] "Drag an element from the toolbox or click the button below."
    surveyPlaceholderDescriptionMobile: "Húzzon egy elemet az eszköztárról, vagy kattintson az alábbi gombra.",
    // [Auto-translated] "No preview"
    previewPlaceholderTitle: "Nincs előnézet",
    // [Auto-translated] "No preview"
    previewPlaceholderTitleMobile: "Nincs előnézet",
    // [Auto-translated] "The survey doesn't contain any visible elements."
    previewPlaceholderDescription: "A felmérés nem tartalmaz látható elemeket.",
    // [Auto-translated] "The survey doesn't contain any visible elements."
    previewPlaceholderDescriptionMobile: "A felmérés nem tartalmaz látható elemeket.",
    // [Auto-translated] "No strings to translate"
    translationsPlaceholderTitle: "Nincsenek lefordítandó karakterláncok",
    // [Auto-translated] "No strings to translate"
    translationsPlaceholderTitleMobile: "Nincsenek lefordítandó karakterláncok",
    // [Auto-translated] "Add elements to your form or change the strings filter in the toolbar."
    translationsPlaceholderDescription: "Adjon hozzá elemeket az űrlaphoz, vagy módosítsa a karakterláncszűrő szűrőjét az eszköztáron.",
    // [Auto-translated] "Add elements to your form or change the strings filter in the toolbar."
    translationsPlaceholderDescriptionMobile: "Adjon hozzá elemeket az űrlaphoz, vagy módosítsa a karakterláncszűrő szűrőjét az eszköztáron.",
    // "Click the \"Add Question\" button below to add a new element to the page."
    pagePlaceHolderMobile: "Kattintson az alábbi \"Kérdés hozzáadása\" gombra, hogy új elemet adjon az oldalhoz.",
    // "Click the \"Add Question\" button below to add a new element to the panel."
    panelPlaceHolderMobile: "Kattintson az alábbi \"Kérdés hozzáadása\" gombra, hogy új elemet adjon a panelhez.",
    // [Auto-translated] "Click the button below and choose an image to upload"
    imagePlaceHolderMobile: "Kattintson az alábbi gombra, és válassza ki a feltölteni kívánt képet",
    // [Auto-translated] "Choose Image"
    imageChooseImage: "Válassza a Kép lehetőséget",
    // [Auto-translated] "Add {0}"
    addNewTypeQuestion: "{0} hozzáadása", // {0} is localizable question type
    // [Auto-translated] "[LOGO]"
    chooseLogoPlaceholder: "[LOGÓ]",
    // [Auto-translated] "Item "
    choices_Item: "Cikk ",
    // [Auto-translated] "Select a file"
    selectFile: "Válasszon ki egy fájlt",
    // [Auto-translated] "Remove the file"
    removeFile: "A fájl eltávolítása",
    lg: {
      // [Auto-translated] "Add New Rule"
      addNewItem: "Új szabály hozzáadása",
      // [Auto-translated] "Create a rule to customize the flow of the survey."
      empty_tab: "Hozzon létre egy szabályt a felmérés folyamatának testreszabásához.",
      // [Auto-translated] "No logical rules"
      logicPlaceholderTitle: "Nincsenek logikai szabályok",
      // [Auto-translated] "No logical rules"
      logicPlaceholderTitleMobile: "Nincsenek logikai szabályok",
      // [Auto-translated] "Create a rule to customize the flow of the survey."
      logicPlaceholderDescription: "Hozzon létre egy szabályt a felmérés folyamatának testreszabásához.",
      // [Auto-translated] "Create a rule to customize the flow of the survey."
      logicPlaceholderDescriptionMobile: "Hozzon létre egy szabályt a felmérés folyamatának testreszabásához.",
      // [Auto-translated] "Show/hide page"
      page_visibilityName: "Oldal megjelenítése/elrejtése",
      // [Auto-translated] "Enable/disable page"
      page_enableName: "Oldal engedélyezése/letiltása",
      // [Auto-translated] "Make page required"
      page_requireName: "Az oldal kötelezővé tétele",
      // [Auto-translated] "Show/hide panel"
      panel_visibilityName: "Megjelenítés/elrejtés panel",
      // [Auto-translated] "Enable/disable panel"
      panel_enableName: "Panel engedélyezése/letiltása",
      // [Auto-translated] "Make panel required"
      panel_requireName: "Tegye kötelezővé a panelt",
      // [Auto-translated] "Show/hide question"
      question_visibilityName: "Kérdés megjelenítése/elrejtése",
      // [Auto-translated] "Enable/disable question"
      question_enableName: "Kérdés engedélyezése/letiltása",
      // [Auto-translated] "Make question required"
      question_requireName: "Kérdés feltevése kötelező",
      // [Auto-translated] "Reset question value"
      question_resetValueName: "Kérdés értékének visszaállítása",
      // [Auto-translated] "Set question value"
      question_setValueName: "Kérdésérték beállítása",
      // [Auto-translated] "Show/hide column"
      column_visibilityName: "Oszlop megjelenítése/elrejtése",
      // [Auto-translated] "Enable/disable column"
      column_enableName: "Oszlop engedélyezése/letiltása",
      // [Auto-translated] "Make column required"
      column_requireName: "Oszlop kötelezővé tétele",
      // [Auto-translated] "Reset column value"
      column_resetValueName: "Oszlopérték visszaállítása",
      // [Auto-translated] "Set column value"
      column_setValueName: "Oszlopérték beállítása",
      // [Auto-translated] "Complete survey"
      trigger_completeName: "Teljes felmérés",
      // [Auto-translated] "Set answer"
      trigger_setvalueName: "Válasz beállítása",
      // [Auto-translated] "Copy answer"
      trigger_copyvalueName: "Válasz másolása",
      // [Auto-translated] "Skip to question"
      trigger_skipName: "Ugrás a kérdésre",
      // [Auto-translated] "Run expression"
      trigger_runExpressionName: "Kifejezés futtatása",
      // "Set \"Thank You\" page markup"
      completedHtmlOnConditionName: "A \"Felmérés kész\" oldaljelölés beállítása",
      // [Auto-translated] "Make the page visible when the logical expression evaluates to true. Otherwise, keep the page invisible."
      page_visibilityDescription: "Tegye láthatóvá az oldalt, ha a logikai kifejezés igaz értéket ad vissza. Ellenkező esetben tartsa láthatatlanná az oldalt.",
      // [Auto-translated] "Make the page visible when the logical expression evaluates to true. Otherwise, keep the panel invisible."
      panel_visibilityDescription: "Tegye láthatóvá az oldalt, ha a logikai kifejezés igaz értéket ad vissza. Ellenkező esetben tartsa láthatatlanul a panelt.",
      // [Auto-translated] "Make the panel and all elements inside it enabled when the logical expression evaluates to true. Otherwise, keep them disabled."
      panel_enableDescription: "Engedélyezze a panelt és a benne lévő összes elemet, ha a logikai kifejezés igaz értéket ad vissza. Ellenkező esetben tartsa letiltva őket.",
      // [Auto-translated] "Make the question visible when the logical expression evaluates to true. Otherwise, keep the question invisible."
      question_visibilityDescription: "Tegye láthatóvá a kérdést, amikor a logikai kifejezés igaz értéket ad vissza. Ellenkező esetben tartsa láthatatlanul a kérdést.",
      // [Auto-translated] "Make the question enabled when the logical expression evaluates to true. Otherwise, keep the question disabled."
      question_enableDescription: "Engedélyezze a kérdést, amikor a logikai kifejezés igaz értéket ad vissza. Ellenkező esetben tartsa letiltva a kérdést.",
      // [Auto-translated] "Question becomes required when the logical expression evaluates to true."
      question_requireDescription: "A kérdés akkor válik kötelezővé, ha a logikai kifejezés igaz értéket ad vissza.",
      // "When the logical expression evaluates to true, the survey ends, and the respondent sees the \"Thank you\" page."
      trigger_completeDescription: "Amikor a logikai kifejezés igaz értéket ad vissza, a felmérés befejeződik, és a végfelhasználó a \"Köszönöm oldalt\" látja.",
      // [Auto-translated] "When question values used in the logical expression are changed, and the expression evaluates to true, the specified value is assigned to the selected question."
      trigger_setvalueDescription: "Ha a logikai kifejezésben használt kérdésértékek módosulnak, és a kifejezés igaz értéket ad vissza, a megadott érték lesz hozzárendelve a kiválasztott kérdéshez.",
      // [Auto-translated] "When question values used in the logical expression are changed, and the expression evaluates to true, the value of the selected question is copied to another question."
      trigger_copyvalueDescription: "Ha a logikai kifejezésben használt kérdésértékek módosulnak, és a kifejezés igaz értéket ad vissza, a kiválasztott kérdés értékét a rendszer átmásolja egy másik kérdésbe.",
      // [Auto-translated] "When the logical expression evaluates to true, the survey focuses/jumps to the selected question."
      trigger_skipDescription: "Amikor a logikai kifejezés igaz értéket ad vissza, a felmérés a kiválasztott kérdésre fókuszál/ugrik.",
      // [Auto-translated] "When the logical expression evaluates to true, the survey evaluates another expression. Optionally, the result of the latter expression can be assigned as a value to the selected question"
      trigger_runExpressionDescription: "Amikor a logikai kifejezés eredménye igaz, a felmérés egy másik kifejezést értékel ki. Opcionálisan az utóbbi kifejezés eredménye értékként rendelhető hozzá a kiválasztott kérdéshez",
      // "If the logical expression evaluates to true, the \"Thank You\" page displays the specified content."
      completedHtmlOnConditionDescription: "Ha a logikai kifejezés igaz értéket ad vissza, akkor a \"Köszönöm oldal\" alapértelmezett szövege a megadott szövegre változik.",
      // "When expression: '{0}' returns true"
      itemExpressionText: "Amikor a kifejezés: \"{0}\" igaz értéket ad vissza", // {0} - the expression
      // [Auto-translated] "New rule"
      itemEmptyExpressionText: "Új szabály",
      // [Auto-translated] "make page {0} visible"
      page_visibilityText: "Az oldal {0} láthatóvá tétele", // {0} page name
      // [Auto-translated] "make panel {0} visible"
      panel_visibilityText: "A panel {0} láthatóvá tétele", // {0} panel name
      // [Auto-translated] "make panel {0} enable"
      panel_enableText: "A panel {0} engedélyezése", // {0} panel name
      // [Auto-translated] "make question {0} visible"
      question_visibilityText: "tegye láthatóvá a {0} kérdést", // {0} question name
      // [Auto-translated] "make question {0} enable"
      question_enableText: "Kérdés {0} engedélyezése", // {0} question name
      // [Auto-translated] "make question {0} required"
      question_requireText: "Tegye fel a kérdést {0} szükséges", // {0} question name
      // [Auto-translated] "reset value for question: {0}"
      question_resetValueText: "Kérdés visszaállítási értéke: {0}", // {0} question name.
      // [Auto-translated] "assign value: {1} to question: {0}"
      question_setValueText: "Érték hozzárendelése: {1} a kérdéshez: {0}", // {0} question name and {1} setValueExpression
      // [Auto-translated] "make column {0} of question {1} visible"
      column_visibilityText: "A {1}. kérdés {0} oszlopának láthatóvá tétele", // {0} column name, {1} question name
      // [Auto-translated] "make column {0} of question {1} enable"
      column_enableText: "A kérdés {0} oszlopának engedélyezése {1} engedélyezése", // {0} column name, {1} question name
      // [Auto-translated] "make column {0} of question {1} required"
      column_requireText: "Tegye kötelezővé a kérdés {0} oszlopát {1}", // {0} column name, {1} question name
      // [Auto-translated] "reset cell value for column: {0}"
      column_resetValueText: "Az oszlop cellaértékének visszaállítása: {0}", // {0} column name
      // [Auto-translated] "assign cell value: {1} to column: {0}"
      column_setValueText: "Cellaérték hozzárendelése: {1} oszlophoz: {0}", // {0} column name and {1} setValueExpression
      // [Auto-translated] "An expression whose result will be assigned to the target question."
      setValueExpressionPlaceholder: "Olyan kifejezés, amelynek eredménye a célkérdéshez lesz rendelve.",
      // [Auto-translated] "survey becomes completed"
      trigger_completeText: "A felmérés befejeződött",
      // [Auto-translated] "set into question: {0} value {1}"
      trigger_setvalueText: "Kérdéses érték: {0} érték {1}", // {0} question name, {1} setValue
      // "clear question value: {0}"
      trigger_setvalueEmptyText: "Kérdésérték törlése: {0}", // {0} question name
      // [Auto-translated] "copy into question: {0} value from question {1}"
      trigger_copyvalueText: "Másolás kérdésbe: {0} kérdés értéke {1}", // {0} and {1} question names
      // [Auto-translated] "survey skip to the question {0}"
      trigger_skipText: "felmérés ugrás a kérdésre {0}", // {0} question name
      // [Auto-translated] "run expression: '{0}'"
      trigger_runExpressionText1: "Run kifejezés: '{0}'", // {0} the expression
      // [Auto-translated] " and set its result into question: {0}"
      trigger_runExpressionText2: " és megkérdőjelezi annak eredményét: {0}", // {0} question name
      // "show custom text for the \"Thank You\" page."
      completedHtmlOnConditionText: "egyéni szöveg megjelenítése a \"Köszönöm oldalhoz\".",
      // [Auto-translated] "All Questions"
      showAllQuestions: "Minden kérdés",
      // [Auto-translated] "All Action Types"
      showAllActionTypes: "Minden művelettípus",
      // [Auto-translated] "Condition(s)"
      conditions: "Állapot(ok)",
      // [Auto-translated] "Action(s)"
      actions: "Művelet(ek)",
      // [Auto-translated] "Define condition(s)"
      expressionEditorTitle: "Feltétel(ek) meghatározása",
      // [Auto-translated] "Define action(s)"
      actionsEditorTitle: "Művelet(ek) meghatározása",
      // [Auto-translated] "Delete Action"
      deleteAction: "Művelet törlése",
      // [Auto-translated] "Add Action"
      addNewAction: "Művelet hozzáadása",
      // [Auto-translated] "Select action..."
      selectedActionCaption: "Válassza ki a műveletet...",
      // [Auto-translated] "The logic expression is empty or invalid. Please correct it."
      expressionInvalid: "A logikai kifejezés üres vagy érvénytelen. Kérjük, javítsa ki.",
      // [Auto-translated] "Please add at least one action."
      noActionError: "Kérjük, adjon hozzá legalább egy műveletet.",
      // [Auto-translated] "Please fix issues in your action(s)."
      actionInvalid: "Kérjük, javítsa ki a problémákat a művelet(ek)ben.",
      // [Auto-translated] "Logical rules are incomplete"
      uncompletedRule_title: "A logikai szabályok hiányosak",
      // [Auto-translated] "You have not completed some of the logical rules. If you leave the tab now, the changes will be lost. Do you still want to leave the tab without completing the changes?"
      uncompletedRule_text: "Nem teljesített néhány logikai szabályt. Ha most elhagyja a lapot, a módosítások elvesznek. Továbbra is el akarja hagyni a lapot a módosítások végrehajtása nélkül?",
      // [Auto-translated] "Yes"
      uncompletedRule_apply: "Igen",
      // [Auto-translated] "No, I want to complete the rules"
      uncompletedRule_cancel: "Nem, szeretném kiegészíteni a szabályokat"
    }
  },
  // Property Editors
  pe: {
    panel: {
      // [Auto-translated] "Panel name"
      name: "Panel neve",
      // [Auto-translated] "Panel title"
      title: "Panel címe",
      // [Auto-translated] "Panel description"
      description: "Panel leírása",
      // [Auto-translated] "Make the panel visible if"
      visibleIf: "A panel láthatóvá tétele, ha",
      // [Auto-translated] "Make the panel required if"
      requiredIf: "Tegye szükségessé a panelt, ha",
      // [Auto-translated] "Question order within the panel"
      questionOrder: "Kérdések sorrendje a panelen belül",
      // [Auto-translated] "Move the panel to page"
      page: "A panel áthelyezése oldalra",
      // [Auto-translated] "Display the panel on a new line"
      startWithNewLine: "A panel megjelenítése új sorban",
      // [Auto-translated] "Panel collapse state"
      state: "Panel összecsukási állapota",
      // [Auto-translated] "Inline panel width"
      width: "Soros panel szélessége",
      // [Auto-translated] "Minimum panel width"
      minWidth: "Minimális panelszélesség",
      // [Auto-translated] "Maximum panel width"
      maxWidth: "Maximális panelszélesség",
      // [Auto-translated] "Number this panel"
      showNumber: "Számozza ezt a panelt"
    },
    panellayoutcolumn: {
      // [Auto-translated] "Effective width, %"
      effectiveWidth: "Effektív szélesség, %",
      // [Auto-translated] "Question title width, px"
      questionTitleWidth: "Kérdés címének szélessége, px"
    },
    paneldynamic: {
      // [Auto-translated] "Panel name"
      name: "Panel neve",
      // [Auto-translated] "Panel title"
      title: "Panel címe",
      // [Auto-translated] "Panel description"
      description: "Panel leírása",
      // [Auto-translated] "Entry display mode"
      displayMode: "Belépési megjelenítési mód",
      // [Auto-translated] "Make the panel visible if"
      visibleIf: "A panel láthatóvá tétele, ha",
      // [Auto-translated] "Make the panel required if"
      requiredIf: "Tegye szükségessé a panelt, ha",
      // [Auto-translated] "Move the panel to page"
      page: "A panel áthelyezése oldalra",
      // [Auto-translated] "Display the panel on a new line"
      startWithNewLine: "A panel megjelenítése új sorban",
      // [Auto-translated] "Panel collapse state"
      state: "Panel összecsukási állapota",
      // [Auto-translated] "Inline panel width"
      width: "Szövegközi panel szélessége",
      // [Auto-translated] "Minimum panel width"
      minWidth: "Minimális panelszélesség",
      // [Auto-translated] "Maximum panel width"
      maxWidth: "Maximális panelszélesség",
      // [Auto-translated] "Confirm entry removal"
      confirmDelete: "Bejegyzés eltávolításának megerősítése",
      // [Auto-translated] "Entry description pattern"
      templateDescription: "Bejegyzés leírási mintája",
      // [Auto-translated] "Entry title pattern"
      templateTitle: "Bejegyzés címmintája",
      // [Auto-translated] "Empty panel text"
      noEntriesText: "Üres panelszöveg",
      // [Auto-translated] "Tab title pattern"
      templateTabTitle: "Lapcím mintája",
      // [Auto-translated] "Tab title placeholder"
      tabTitlePlaceholder: "Lapcím helyőrzője",
      // [Auto-translated] "Make an individual entry visible if"
      templateVisibleIf: "Tegye láthatóvá az egyes bejegyzéseket, ha",
      // [Auto-translated] "Number the panel"
      showNumber: "A panel számozása",
      // [Auto-translated] "Panel title alignment"
      titleLocation: "Panelcím igazítása",
      // [Auto-translated] "Panel description alignment"
      descriptionLocation: "Panel leírás igazítása",
      // [Auto-translated] "Question title alignment"
      templateQuestionTitleLocation: "Kérdés címének igazítása",
      // [Auto-translated] "Question title width"
      templateQuestionTitleWidth: "Kérdés címének szélessége",
      // [Auto-translated] "Error message alignment"
      templateErrorLocation: "Hibaüzenetek igazítása",
      // [Auto-translated] "New entry location"
      newPanelPosition: "Új belépési hely",
      // [Auto-translated] "Prevent duplicate responses in the following question"
      keyName: "Ismétlődő válaszok elkerülése a következő kérdésben"
    },
    question: {
      // [Auto-translated] "Question name"
      name: "Kérdés neve",
      // [Auto-translated] "Question title"
      title: "Kérdés címe",
      // [Auto-translated] "Question description"
      description: "Kérdés leírása",
      // [Auto-translated] "Show the title and description"
      showTitle: "A cím és a leírás megjelenítése",
      // [Auto-translated] "Make the question visible if"
      visibleIf: "Tegye láthatóvá a kérdést, ha",
      // [Auto-translated] "Make the question required if"
      requiredIf: "Tegye kötelezővé a kérdést, ha",
      // [Auto-translated] "Move the question to page"
      page: "A kérdés áthelyezése az oldalra",
      // [Auto-translated] "Question box collapse state"
      state: "Kérdésmező összecsukási állapota",
      // [Auto-translated] "Number this question"
      showNumber: "Számozza meg ezt a kérdést",
      // [Auto-translated] "Question title alignment"
      titleLocation: "Kérdés címének igazítása",
      // [Auto-translated] "Question description alignment"
      descriptionLocation: "Kérdés leírás igazítása",
      // [Auto-translated] "Error message alignment"
      errorLocation: "Hibaüzenetek igazítása",
      // [Auto-translated] "Increase the inner indent"
      indent: "A belső behúzás növelése",
      // [Auto-translated] "Inline question width"
      width: "Szövegközi kérdés szélessége",
      // [Auto-translated] "Minimum question width"
      minWidth: "Minimális kérdésszélesség",
      // [Auto-translated] "Maximum question width"
      maxWidth: "Maximális kérdésszélesség",
      // [Auto-translated] "Update input field value"
      textUpdateMode: "Beviteli mező értékének frissítése"
    },
    signaturepad: {
      // [Auto-translated] "Signature area width"
      signatureWidth: "Aláírási terület szélessége",
      // [Auto-translated] "Signature area height"
      signatureHeight: "Aláírási terület magassága",
      // [Auto-translated] "Auto-scale the signature area"
      signatureAutoScaleEnabled: "Az aláírási terület automatikus méretezése",
      // [Auto-translated] "Show a placeholder within signature area"
      showPlaceholder: "Helyőrző megjelenítése az aláírási területen belül",
      // [Auto-translated] "Placeholder text"
      placeholder: "Helyőrző szöveg",
      // [Auto-translated] "Placeholder text in read-only or preview mode"
      placeholderReadOnly: "Helyőrző szöveg írásvédett vagy előnézeti módban",
      // [Auto-translated] "Show the Clear button within signature area"
      allowClear: "A Törlés gomb megjelenítése az aláírási területen belül",
      // [Auto-translated] "Minimum stroke width"
      penMinWidth: "Minimális körvonalszélesség",
      // [Auto-translated] "Maximum stroke width"
      penMaxWidth: "Maximális körvonalszélesség",
      // [Auto-translated] "Stroke color"
      penColor: "Körvonal színe"
    },
    comment: {
      // [Auto-translated] "Input field height (in lines)"
      rows: "Beviteli mező magassága (sorokban)"
    },
    // "Question numbering"
    showQuestionNumbers: "Kérdés számának mutatása",
    // "Question indexing type"
    questionStartIndex: "Kérdés kezdőindexe (1, 2 vagy 'A', 'a')",
    expression: {
      // [Auto-translated] "Expression name"
      name: "Kifejezés neve",
      // [Auto-translated] "Expression title"
      title: "Kifejezés címe",
      // [Auto-translated] "Expression description"
      description: "Kifejezés leírása",
      // [Auto-translated] "Expression"
      expression: "Kifejezés"
    },
    trigger: {
      // [Auto-translated] "Expression"
      expression: "Kifejezés"
    },
    calculatedvalue: {
      // [Auto-translated] "Expression"
      expression: "Kifejezés"
    },
    // survey templates
    survey: {
      // [Auto-translated] "Survey title"
      title: "Felmérés címe",
      // [Auto-translated] "Survey description"
      description: "A felmérés leírása",
      // [Auto-translated] "Make the survey read-only"
      readOnly: "A felmérés írásvédetté tétele"
    },
    page: {
      // [Auto-translated] "Page name"
      name: "Oldal neve",
      // [Auto-translated] "Page title"
      title: "Oldal címe",
      // [Auto-translated] "Page description"
      description: "Oldal leírása",
      // [Auto-translated] "Make the page visible if"
      visibleIf: "Tegye láthatóvá az oldalt, ha",
      // [Auto-translated] "Make the page required if"
      requiredIf: "Az oldal kötelezővé tétele, ha",
      // [Auto-translated] "Time limit to complete the page"
      timeLimit: "Az oldal befejezésének határideje",
      // [Auto-translated] "Question order on the page"
      questionOrder: "Kérdések sorrendje az oldalon"
    },
    matrixdropdowncolumn: {
      // [Auto-translated] "Column name"
      name: "Oszlop neve",
      // [Auto-translated] "Column title"
      title: "Oszlop címe",
      // [Auto-translated] "Prevent duplicate responses"
      isUnique: "Az ismétlődő válaszok megakadályozása",
      // [Auto-translated] "Column width"
      width: "Oszlopszélesség",
      // [Auto-translated] "Minimum column width"
      minWidth: "Minimális oszlopszélesség",
      // [Auto-translated] "Input field height (in lines)"
      rows: "Beviteli mező magassága (sorokban)",
      // [Auto-translated] "Make the column visible if"
      visibleIf: "Tegye láthatóvá az oszlopot, ha",
      // [Auto-translated] "Make the column required if"
      requiredIf: "Tegye kötelezővé az oszlopot, ha",
      // [Auto-translated] "Each option in a separate column"
      showInMultipleColumns: "Minden beállítás külön oszlopban"
    },
    matrixcolumn: {
      // [Auto-translated] "Clear others in the same row"
      isExclusive: "Törölje az ugyanabban a sorban lévő többi elemet"
    },
    multipletextitem: {
      // [Auto-translated] "Name"
      name: "Név",
      // [Auto-translated] "Title"
      title: "Cím"
    },
    masksettings: {
      // [Auto-translated] "Save masked value in survey results"
      saveMaskedValue: "Maszkolt érték mentése a felmérés eredményeiben"
    },
    patternmask: {
      // [Auto-translated] "Value pattern"
      pattern: "Értékminta"
    },
    datetimemask: {
      // [Auto-translated] "Minimum value"
      min: "Minimális érték",
      // [Auto-translated] "Maximum value"
      max: "Maximális érték"
    },
    numericmask: {
      // [Auto-translated] "Allow negative values"
      allowNegativeValues: "Negatív értékek engedélyezése",
      // [Auto-translated] "Thousands separator"
      thousandsSeparator: "Több ezer szeparátor",
      // [Auto-translated] "Decimal separator"
      decimalSeparator: "Tizedeselválasztó",
      // [Auto-translated] "Value precision"
      precision: "Érték pontossága",
      // [Auto-translated] "Minimum value"
      min: "Minimális érték",
      // [Auto-translated] "Maximum value"
      max: "Maximális érték"
    },
    currencymask: {
      // [Auto-translated] "Currency prefix"
      prefix: "Pénznem előtag",
      // [Auto-translated] "Currency suffix"
      suffix: "Pénznem utótagja"
    },
    // [Auto-translated] "Clear others when selected"
    isExclusive: "Mások törlése, ha ki van jelölve",
    // [Auto-translated] "Display both text and value"
    showValue: "Szöveg és érték megjelenítése",
    // [Auto-translated] "Require user to enter a comment"
    isCommentRequired: "Megjegyzés megadásának megkövetelése a felhasználótól",
    // "Display area height"
    imageHeight: "Kép magassága",
    // "Display area width"
    imageWidth: "Kép szélessége",
    // "Join identifier"
    valueName: "Érték megnevezése",
    // [Auto-translated] "Default display value for dynamic texts"
    defaultDisplayValue: "Dinamikus szövegek alapértelmezett megjelenítési értéke",
    // [Auto-translated] "Label alignment"
    rateDescriptionLocation: "Feliratigazítás",
    // [Auto-translated] "Input field width (in characters)"
    size: "Beviteli mező szélessége (karakterben)",
    // [Auto-translated] "Cell error message alignment"
    cellErrorLocation: "Cellahibaüzenet igazítása",
    // [Auto-translated] "Enabled"
    enabled: "Engedélyezve",
    // [Auto-translated] "Disabled"
    disabled: "Fogyatékos",
    // [Auto-translated] "Inherit"
    inherit: "Örököl",
    // "Apply"
    apply: "Alkalmaz",
    // "OK"
    ok: "OK",
    // [Auto-translated] "Save"
    save: "Megment",
    // [Auto-translated] "Clear"
    clear: "Világos",
    // [Auto-translated] "Save"
    saveTooltip: "Megment",
    // "Cancel"
    cancel: "Mégsem",
    // [Auto-translated] "Set"
    set: "Beállít",
    // "Reset"
    reset: "Visszaállítás",
    // [Auto-translated] "Change"
    change: "Változás",
    // [Auto-translated] "Refresh"
    refresh: "Felfrissít",
    // "Close"
    close: "Bezárás",
    // "Delete"
    delete: "Eltávolítás",
    // [Auto-translated] "Add"
    add: "Hozzáad",
    // "Add New"
    addNew: "Új felvétele",
    // "Click to add an item..."
    addItem: "Kattintson egy elem felvételéhez...",
    // [Auto-translated] "Click to remove the item..."
    removeItem: "Kattintson az elem eltávolításához...",
    // [Auto-translated] "Drag the item"
    dragItem: "Húzza az elemet",
    // "Other"
    addOther: "Egyéb",
    // "Select All"
    addSelectAll: "Összes kijelölése",
    // "None"
    addNone: "Semmi",
    // "Remove All"
    removeAll: "Összes eltávolítása",
    // "Edit"
    edit: "Szerkesztés",
    // [Auto-translated] "Return without saving"
    back: "Visszaküldés mentés nélkül",
    // [Auto-translated] "Return without saving"
    backTooltip: "Visszaküldés mentés nélkül",
    // [Auto-translated] "Save and return"
    saveAndBack: "Mentés és visszaküldés",
    // [Auto-translated] "Save and return"
    saveAndBackTooltip: "Mentés és visszaküldés",
    // [Auto-translated] "Done"
    doneEditing: "Kész",
    // "Edit Choices"
    editChoices: "Lehetőségek szerkesztése",
    // [Auto-translated] "Show Choices"
    showChoices: "Választási lehetőségek megjelenítése",
    // "Move"
    move: "Mozgatás",
    // "<empty>"
    empty: "<üres>",
    // [Auto-translated] "Value is empty"
    emptyValue: "Az érték üres",
    // "Manual Entry"
    fastEntry: "Gyors felvétel",
    // "Value '{0}' is not unique"
    fastEntryNonUniqueError: "A \"{0}\" érték nem egyedi",
    // [Auto-translated] "Please limit the number of items from {0} to {1}"
    fastEntryChoicesCountError: "Kérjük, korlátozza a tételek számát {0} és {1} között",
    // [Auto-translated] "Please enter at least {0} items"
    fastEntryChoicesMinCountError: "Kérjük, adjon meg legalább {0} elemet",
    // [Auto-translated] "Enter the list of choice options and their IDs in the following format:\n\nid|option\n\nA choice option ID is not visible to respondents and can be used in conditional rules."
    fastEntryPlaceholder: "Adja meg a választási lehetőségek listáját és azonosítóit a következő formátumban:\n\nid|opció\n\nA választási lehetőség azonosítója nem látható a válaszadók számára, és feltételes szabályokban használható.",
    // "Form Entry"
    formEntry: "Felvétel űrlappal",
    // "Test the service"
    testService: "Szolgáltatás tesztelése",
    // [Auto-translated] "Please select the element"
    itemSelectorEmpty: "Kérjük, válassza ki az elemet",
    // [Auto-translated] "Please select the action"
    conditionActionEmpty: "Kérjük, válassza ki a műveletet",
    // "Select a question..."
    conditionSelectQuestion: "Válasszon kérdést...",
    // [Auto-translated] "Select a page..."
    conditionSelectPage: "Válasszon ki egy oldalt...",
    // [Auto-translated] "Select a panel..."
    conditionSelectPanel: "Válasszon egy panelt...",
    // "Please enter/select the value"
    conditionValueQuestionTitle: "Kérem adjon meg, vagy válasszon értéket",
    // "Press ctrl+space to get expression completion hint"
    aceEditorHelp: "Nyomja meg a ctrl+space billentyűkombinációt a kifejezés befejezésére vonatkozó segítségért.",
    // "Current row"
    aceEditorRowTitle: "Jelenlegi sor",
    // "Current panel"
    aceEditorPanelTitle: "Jelenlegi panel",
    // "For more details please check the documentation"
    showMore: "További információért kérem tekintse meg a dokumentációt",
    // "Available questions"
    assistantTitle: "Elérhető kérdések:",
    // "There is should be at least one column or row"
    cellsEmptyRowsColumns: "Legalább egy sornak vagy egy oszlopnak lennie kell",
    // [Auto-translated] "Review before submit"
    showPreviewBeforeComplete: "Áttekintés beküldés előtt",
    // [Auto-translated] "Enabled by a condition"
    overridingPropertyPrefix: "Feltétel által engedélyezve",
    // [Auto-translated] "Reset"
    resetToDefaultCaption: "Átszed",
    // "Please enter a value"
    propertyIsEmpty: "Kérem adjon meg egy értéket",
    // [Auto-translated] "Please enter a unique value"
    propertyIsNoUnique: "Kérjük, adjon meg egy egyedi értéket",
    // [Auto-translated] "Please enter a unique name"
    propertyNameIsNotUnique: "Kérjük, adjon meg egy egyedi nevet",
    // "Do not use reserved words: \"item\", \"choice\", \"panel\", \"row\"."
    propertyNameIsIncorrect: "Ne használjon fenntartott szavakat: \"elem\", \"választás\", \"panel\", \"sor\".",
    // [Auto-translated] "You don't have any items yet"
    listIsEmpty: "Még nincs tárgya",
    // [Auto-translated] "You don't have any choices yet"
    "listIsEmpty@choices": "Még nincs választásod",
    // [Auto-translated] "You don't have any columns yet"
    "listIsEmpty@columns": "Még nincsenek oszlopai",
    // [Auto-translated] "You don't have layout columns yet"
    "listIsEmpty@gridLayoutColumns": "Még nincsenek elrendezésoszlopok",
    // [Auto-translated] "You don't have any rows yet"
    "listIsEmpty@rows": "Még nincsenek sorai",
    // [Auto-translated] "You don't have any validation rules yet"
    "listIsEmpty@validators": "Még nincsenek érvényességi szabályai",
    // [Auto-translated] "You don't have any custom variables yet"
    "listIsEmpty@calculatedValues": "Még nincsenek egyéni változói",
    // [Auto-translated] "You don't have any triggers yet"
    "listIsEmpty@triggers": "Még nincsenek triggerek",
    // [Auto-translated] "You don't have any links yet"
    "listIsEmpty@navigateToUrlOnCondition": "Még nincsenek linkek",
    // [Auto-translated] "You don't have any pages yet"
    "listIsEmpty@pages": "Még nincsenek oldalai",
    // [Auto-translated] "Add new choice"
    "addNew@choices": "Új választás hozzáadása",
    // [Auto-translated] "Add new column"
    "addNew@columns": "Új oszlop hozzáadása",
    // [Auto-translated] "Add new row"
    "addNew@rows": "Új sor hozzáadása",
    // [Auto-translated] "Add new rule"
    "addNew@validators": "Új szabály hozzáadása",
    // [Auto-translated] "Add new variable"
    "addNew@calculatedValues": "Új változó hozzáadása",
    // [Auto-translated] "Add new trigger"
    "addNew@triggers": "Új eseményindító hozzáadása",
    // [Auto-translated] "Add new URL"
    "addNew@navigateToUrlOnCondition": "Új URL hozzáadása",
    // [Auto-translated] "Add new page"
    "addNew@pages": "Új oldal hozzáadása",
    // [Auto-translated] "Expression is empty"
    expressionIsEmpty: "A kifejezés üres",
    // "Value"
    value: "Érték",
    // "Text"
    text: "Szöveg",
    // "Row ID"
    rowid: "Sor ID",
    // "Image or video file URL"
    imageLink: "Kép URL",
    // "Edit column: {0}"
    columnEdit: "Oszlop szerkesztése: {0}",
    // "Edit item: {0}"
    itemEdit: "Elem szerkesztése: {0}",
    // "URL"
    url: "URL",
    // "Path to data"
    path: "Útvonal",
    choicesbyurl: {
      // [Auto-translated] "Web service URL"
      url: "Webszolgáltatás URL-címe",
      // [Auto-translated] "Get value to store from the following property"
      valueName: "Tárolandó érték lekérése a következő tulajdonságból"
    },
    // "Get value to display from the following property"
    titleName: "Cím megnevezése",
    // [Auto-translated] "Get file URLs from the following property"
    imageLinkName: "Fájl URL-címek lekérése a következő tulajdonból",
    // [Auto-translated] "Accept empty response"
    allowEmptyResponse: "Üres válasz elfogadása",
    // [Auto-translated] "Title"
    titlePlaceholder: "Cím",
    // [Auto-translated] "Survey Title"
    surveyTitlePlaceholder: "Felmérés címe",
    // [Auto-translated] "Page {num}"
    pageTitlePlaceholder: "Oldal {num}",
    // [Auto-translated] "Start Page"
    startPageTitlePlaceholder: "Kezdőlap",
    // [Auto-translated] "Description"
    descriptionPlaceholder: "Leírás: __________",
    // [Auto-translated] "Description"
    surveyDescriptionPlaceholder: "Leírás: __________",
    // [Auto-translated] "Description"
    pageDescriptionPlaceholder: "Leírás: __________",
    // [Auto-translated] "Wrap choices"
    textWrapEnabled: "Tördelési lehetőségek",
    // "Enable the \"Other\" option"
    showOtherItem: "Rendelkezik egyéb értékkel",
    // "Rename the \"Other\" option"
    otherText: "Az egyéb érték szövege",
    // [Auto-translated] "Enable the \"None\" option"
    showNoneItem: "Engedélyezze a \"Nincs\" opciót",
    // [Auto-translated] "Enable the \"Refuse to Answer\" option"
    showRefuseItem: "Engedélyezze a \"Válaszadás megtagadása\" opciót",
    // [Auto-translated] "Enable the \"Don't Know\" option"
    showDontKnowItem: "Engedélyezze a \"Nem tudom\" opciót",
    // [Auto-translated] "Rename the \"None\" option"
    noneText: "Nevezze át a \"Nincs\" opciót",
    // [Auto-translated] "Enable the \"Select All\" option"
    showSelectAllItem: "Engedélyezze az \"Összes kijelölése\" opciót",
    // [Auto-translated] "Rename the \"Select All\" option"
    selectAllText: "Nevezze át az \"Összes kijelölése\" opciót",
    // [Auto-translated] "Minimum value for auto-generated items"
    choicesMin: "Az automatikusan létrehozott elemek minimális értéke",
    // [Auto-translated] "Maximum value for auto-generated items"
    choicesMax: "Az automatikusan létrehozott elemek maximális értéke",
    // [Auto-translated] "Step value for auto-generated items"
    choicesStep: "Lépés értéke az automatikusan létrehozott elemekhez",
    // "Name"
    name: "Megnevezés",
    // "Title"
    title: "Cím",
    // "Cell input type"
    cellType: "Cellatípus",
    // "Column count"
    colCount: "Oszlopok száma",
    // "Choice order"
    choicesOrder: "Válassza ki a lehetőséget rendezését",
    // [Auto-translated] "Allow custom choices"
    allowCustomChoices: "Egyéni választások engedélyezése",
    // "Visible"
    visible: "Látható?",
    // "Required"
    isRequired: "Kötelező?",
    // [Auto-translated] "Mark as required"
    markRequired: "Megjelölés kötelezőként",
    // [Auto-translated] "Remove the required mark"
    removeRequiredMark: "Távolítsa el a szükséges jelet",
    // [Auto-translated] "Require an answer in each row"
    eachRowRequired: "Válasz megkövetelése minden sorban",
    // [Auto-translated] "Prevent duplicate responses in rows"
    eachRowUnique: "A sorokban ismétlődő válaszok megakadályozása",
    // "Error message for required questions"
    requiredErrorText: "\"Kötelező\" hibaüzenet",
    // "Display the question on a new line"
    startWithNewLine: "Új sorban kezdődik?",
    // "Rows"
    rows: "Sorok száma",
    // [Auto-translated] "Columns"
    cols: "Oszlopok",
    // "Placeholder text within input field"
    placeholder: "Mező kitöltőszövege",
    // "Show preview area"
    showPreview: "A kép előnézete látható?",
    // "Store file content in JSON result as text"
    storeDataAsText: "Az állomány tartalmát tárolja a JSON-ben, szövegként",
    // "Maximum file size (in bytes)"
    maxSize: "Maximális állományméret byte-ban",
    // "Row count"
    rowCount: "Sorok száma",
    // "Columns layout"
    columnLayout: "Oszlopok elrendezése",
    // "\"Add Row\" button alignment"
    addRowButtonLocation: "'Új sor felvétele' gomb elhelyezése",
    // [Auto-translated] "Transpose rows to columns"
    transposeData: "Sorok átültetése oszlopokba",
    // "\"Add Row\" button text"
    addRowText: "'Új sor felvétele' gomb szövege",
    // "\"Remove Row\" button text"
    removeRowText: "'Sor eltávolítása' gomb szövege",
    // [Auto-translated] "Input field title pattern"
    singleInputTitleTemplate: "Beviteli mező címmintája",
    // "Minimum rating value"
    rateMin: "Legkisebb szorzó",
    // "Maximum rating value"
    rateMax: "Legnagyobb szorzó",
    // "Step value"
    rateStep: "Szorzó lépésköze",
    // "Minimum value label"
    minRateDescription: "Legkisebb szorzó leírása",
    // "Maximum value label"
    maxRateDescription: "Legnagyobb szorzó leírása",
    // "Input type"
    inputType: "Mező típusa",
    // "Default Answer"
    defaultValue: "Alapértelmezett érték",
    // "Default texts"
    cellsDefaultRow: "Cellák alapértelmezett szövege",
    // "Edit survey settings"
    surveyEditorTitle: "Kérdőív beállításainak módosítása",
    // "Edit: {0}"
    qEditorTitle: "Szerkesztés: {0}",
    // "Maximum character limit"
    maxLength: "Maximális hossz",
    // [Auto-translated] "Build"
    buildExpression: "Épít",
    // [Auto-translated] "Edit"
    editExpression: "Szerkeszt",
    // [Auto-translated] "and"
    and: "és",
    // [Auto-translated] "or"
    or: "vagy",
    // [Auto-translated] "Remove"
    remove: "Eltávolít",
    // [Auto-translated] "Add Condition"
    addCondition: "Feltétel hozzáadása",
    // [Auto-translated] "Select a question to start configuring conditions."
    emptyLogicPopupMessage: "Válasszon ki egy kérdést a feltételek konfigurálásának megkezdéséhez.",
    // [Auto-translated] "If"
    if: "Ha",
    // [Auto-translated] "then"
    then: "akkor",
    // [Auto-translated] "Target question"
    setToName: "Célkérdés",
    // [Auto-translated] "Question to copy answer from"
    fromName: "Másolandó kérdés innen: válasz",
    // [Auto-translated] "Question to skip to"
    gotoName: "Kérdés, amelyre ugrani kell",
    // [Auto-translated] "Rule is incorrect"
    ruleIsNotSet: "A szabály helytelen",
    // [Auto-translated] "Add to the survey results"
    includeIntoResult: "Hozzáadás a felmérés eredményeihez",
    // "Make the title and description visible"
    showTitle: "Cím mutatása/elrejtése",
    // [Auto-translated] "Expand/collapse title"
    expandCollapseTitle: "Cím kibontása/összecsukása",
    // "Select a survey language"
    locale: "Alapértelmezett nyelv",
    // [Auto-translated] "Select device type"
    simulator: "Válassza ki az eszköz típusát",
    // [Auto-translated] "Switch to landscape orientation"
    landscapeOrientation: "Váltás fekvő tájolásra",
    // [Auto-translated] "Switch to portrait orientation"
    portraitOrientation: "Váltás álló tájolásra",
    // "Clear hidden question values"
    clearInvisibleValues: "Nemlátható értékek törlése",
    // "Limit to one response"
    cookieName: "Süti megnevezése (a kérdőív csak egyszer kitölthető)",
    // "Auto-save survey progress on page change"
    partialSendEnabled: "Kérdőív értékének küldése a következő lapra lépéskor",
    // "Save the \"Other\" option value as a separate property"
    storeOthersAsComment: "Az 'egyéb' mező értékének tárolása külön mezőben",
    // "Show page titles"
    showPageTitles: "Lapok címének mutatása",
    // "Show page numbers"
    showPageNumbers: "Lapok számának mutatása",
    // "\"Previous Page\" button text"
    pagePrevText: "'Előző lap' gomb felirata",
    // "\"Next Page\" button text"
    pageNextText: "'Következő lap' gomb felirata",
    // "\"Complete Survey\" button text"
    completeText: "'Befejezés' gomb felirata",
    // [Auto-translated] "\"Review Answers\" button text"
    previewText: "\"Válaszok áttekintése\" gomb szövege",
    // [Auto-translated] "\"Edit Answer\" button text"
    editText: "\"Válasz szerkesztése\" gomb szövege",
    // "\"Start Survey\" button text"
    startSurveyText: "'Kezdés' gomb felirata",
    // "Show navigation buttons"
    showNavigationButtons: "Navigációs gombok mutatása (alapértelmezett navigáció)",
    // [Auto-translated] "Navigation buttons alignment"
    navigationButtonsLocation: "Navigációs gombok igazítása",
    // "Show the \"Previous Page\" button"
    showPrevButton: "'Előző lap' gomb mutatása",
    // "First page is a start page"
    firstPageIsStartPage: "Az megkezdett lap a kérdőív első oldala.",
    // "Show the \"Thank You\" page"
    showCompletePage: "Befejező szöveg mutatása a kérdőív befejezésekor",
    // "Auto-advance to the next page"
    autoAdvanceEnabled: "Minden kérdés megválaszolásakor automatikusan a következő lapra lépés",
    // [Auto-translated] "Complete the survey automatically"
    autoAdvanceAllowComplete: "A felmérés automatikus kitöltése",
    // "Show the progress bar"
    showProgressBar: "Előrehaladás-mutató megjelenítése",
    // [Auto-translated] "Progress bar alignment"
    progressBarLocation: "Folyamatjelző sáv igazítása",
    // "Question title alignment"
    questionTitleLocation: "Kérdés címének helye",
    // "Question title width"
    questionTitleWidth: "Kérdés címének szélessége",
    // "Required symbol(s)"
    requiredMark: "Kötelező szimbólum",
    // "Question title template, default is: '{no}. {require} {title}'"
    questionTitleTemplate: "Kérdés címének sablonja: '{szám}. {kötelező} {cím}'",
    // "Error message alignment"
    questionErrorLocation: "Kérdés hibaüzenetének helyzete",
    // "Focus first question on a new page"
    autoFocusFirstQuestion: "Első kérdés automatikus kijelölése lapváltás esetén",
    // "Question order"
    questionOrder: "Elemek rendezése a lapon",
    // "Time limit to complete the survey"
    timeLimit: "A kérdőív kitöltésére fordítható maximális idő",
    // "Time limit to complete one page"
    timeLimitPerPage: "Egy lap kitöltésére fordítható maximális idő",
    // [Auto-translated] "Use a timer"
    showTimer: "Időzítő használata",
    // "Timer alignment"
    timerLocation: "Időzító mutatása",
    // "Timer mode"
    timerInfoMode: "Időzító módja",
    // "Enable entry addition"
    allowAddPanel: "Új panel hozzáadásának engedélyezése",
    // "Enable entry removal"
    allowRemovePanel: "Panel eltávolításának engedélyezése",
    // "\"Add Entry\" button text"
    addPanelText: "'Új panel felvétele' gomb szövege",
    // "\"Remove Entry\" button text"
    removePanelText: "'Panel eltávolítása' gomb szövege",
    // "Show all elements on one page"
    isSinglePage: "Minden elem mutatása egy lapon",
    // "HTML markup"
    html: "HTML",
    // [Auto-translated] "Answer"
    setValue: "Válasz",
    // [Auto-translated] "Storage format"
    dataFormat: "Tárolási formátum",
    // [Auto-translated] "Enable row addition"
    allowAddRows: "Sorhozzáadás engedélyezése",
    // [Auto-translated] "Enable row removal"
    allowRemoveRows: "Soreltávolítás engedélyezése",
    // [Auto-translated] "Enable row reordering"
    allowRowReorder: "Sorok átrendezésének engedélyezése",
    // [Auto-translated] "Does not apply if you specify the exact display area width or height."
    responsiveImageSizeHelp: "Nem érvényes, ha megadja a megjelenítési terület pontos szélességét vagy magasságát.",
    // [Auto-translated] "Minimum display area width"
    minImageWidth: "Minimális megjelenítési terület szélessége",
    // [Auto-translated] "Maximum display area width"
    maxImageWidth: "Maximális megjelenítési terület szélessége",
    // [Auto-translated] "Minimum display area height"
    minImageHeight: "Minimális megjelenítési terület magassága",
    // [Auto-translated] "Maximum display area height"
    maxImageHeight: "Maximális megjelenítési terület magassága",
    // "Minimum value"
    minValue: "Minimális érték",
    // "Maximum value"
    maxValue: "Maximális érték",
    // [Auto-translated] "Case insensitive"
    caseInsensitive: "Kis- és nagybetűk megkülönböztetése",
    // "Minimum length (in characters)"
    minLength: "Minimális hossz",
    // "Allow digits"
    allowDigits: "Számjegyek engedélyezése",
    // "Minimum count"
    minCount: "Minimális darabszám",
    // "Maximum count"
    maxCount: "Maximális darabszám",
    // "Regular expression"
    regex: "Reguláris kifejezés",
    surveyvalidator: {
      // [Auto-translated] "Validation message"
      text: "Érvényesítési üzenet",
      // [Auto-translated] "Validation expression"
      expression: "Érvényesítési kifejezés",
      // [Auto-translated] "Notification type"
      notificationType: "Értesítés típusa",
      // [Auto-translated] "Maximum length (in characters)"
      maxLength: "Maximális hossz (karakterben)"
    },
    // [Auto-translated] "Total row header"
    totalText: "Teljes sorfejléc",
    // [Auto-translated] "Aggregation method"
    totalType: "Összesítési módszer",
    // [Auto-translated] "Total value expression"
    totalExpression: "Teljes érték kifejezés",
    // [Auto-translated] "Total value display format"
    totalDisplayStyle: "Teljes érték megjelenítési formátuma",
    // [Auto-translated] "Currency"
    totalCurrency: "Valuta",
    // [Auto-translated] "Formatted string"
    totalFormat: "Formázott karakterlánc",
    // [Auto-translated] "Survey logo"
    logo: "Felmérés logója",
    // [Auto-translated] "Survey layout"
    questionsOnPageMode: "Földmérés elrendezése",
    // [Auto-translated] "Restrict answer length"
    maxTextLength: "Válasz hosszának korlátozása",
    // [Auto-translated] "Restrict comment length"
    maxCommentLength: "Megjegyzések hosszának korlátozása",
    // [Auto-translated] "Comment area height (in lines)"
    commentAreaRows: "Megjegyzés területének magassága (sorokban)",
    // [Auto-translated] "Auto-expand text areas"
    autoGrowComment: "Szövegterületek automatikus kibontása",
    // [Auto-translated] "Allow users to resize text areas"
    allowResizeComment: "A szövegterületek átméretezésének engedélyezése a felhasználók számára",
    // "Update input field values"
    textUpdateMode: "Szöveges kérdés értékének frissítése",
    // [Auto-translated] "Input mask type"
    maskType: "Beviteli maszk típusa",
    // [Auto-translated] "Set focus on the first invalid answer"
    autoFocusFirstError: "Fókusz beállítása az első érvénytelen válaszra",
    // [Auto-translated] "Run validation"
    checkErrorsMode: "Érvényesítés futtatása",
    // [Auto-translated] "Validate empty fields on lost focus"
    validateVisitedEmptyFields: "Üres mezők ellenőrzése elveszett fókusz esetén",
    // [Auto-translated] "Redirect to an external link after submission"
    navigateToUrl: "Átirányítás külső hivatkozásra a beküldés után",
    // [Auto-translated] "Dynamic external link"
    navigateToUrlOnCondition: "Dinamikus külső hivatkozás",
    // [Auto-translated] "Markup to show if the user already filled out this survey"
    completedBeforeHtml: "Jelölés annak jelzésére, hogy a felhasználó kitöltötte-e már ezt a felmérést",
    // [Auto-translated] "\"Thank You\" page markup"
    completedHtml: "\"Köszönöm\" oldaljelölés",
    // [Auto-translated] "Dynamic \"Thank You\" page markup"
    completedHtmlOnCondition: "Dinamikus \"Köszönöm\" oldaljelölés",
    // [Auto-translated] "Markup to show while survey model is loading"
    loadingHtml: "A földmérési modell betöltése közben megjelenítendő jelölés",
    // [Auto-translated] "Comment area text"
    commentText: "Megjegyzés terület szövege",
    // [Auto-translated] "Autocomplete type"
    autocomplete: "Automatikus kiegészítés típusa",
    // "Label for \"True\""
    labelTrue: "\"Igaz\" címke",
    // "Label for \"False\""
    labelFalse: "\"Hamis\" címke",
    // "Show the Clear button"
    allowClear: "A Törlés gomb megjelenítése",
    // [Auto-translated] "Search mode"
    searchMode: "Keresési mód",
    // [Auto-translated] "Display format"
    displayStyle: "Megjelenítési formátum",
    // [Auto-translated] "Formatted string"
    format: "Formázott karakterlánc",
    // [Auto-translated] "Maximum fractional digits"
    maximumFractionDigits: "Tört számjegyek maximális száma",
    // [Auto-translated] "Minimum fractional digits"
    minimumFractionDigits: "Minimális tört számjegyek",
    // [Auto-translated] "Display grouping separators"
    useGrouping: "Csoportosítási elválasztók megjelenítése",
    // [Auto-translated] "Enable multiple file upload"
    allowMultiple: "Több fájl feltöltésének engedélyezése",
    // [Auto-translated] "Preview uploaded images"
    allowImagesPreview: "A feltöltött képek előnézete",
    // [Auto-translated] "Accepted file types"
    acceptedTypes: "Elfogadott fájltípusok",
    // [Auto-translated] "Wait for upload to complete"
    waitForUpload: "Várja meg, amíg a feltöltés befejeződik",
    // [Auto-translated] "Confirm file deletion"
    needConfirmRemoveFile: "Fájltörlés megerősítése",
    // [Auto-translated] "Row details alignment"
    detailPanelMode: "Sorrészletek igazítása",
    // [Auto-translated] "Minimum row count"
    minRowCount: "Sorszám minimális száma",
    // [Auto-translated] "Maximum row count"
    maxRowCount: "Sorszám maximális száma",
    // "Confirm row removal"
    confirmDelete: "Sor törlésének megerősítése",
    // [Auto-translated] "Confirmation message"
    confirmDeleteText: "Megerősítő üzenet",
    // [Auto-translated] "Initial number of entries"
    panelCount: "Kezdeti bejegyzések száma",
    // [Auto-translated] "Minimum number of entries"
    minPanelCount: "Minimális nevezési szám",
    // [Auto-translated] "Maximum number of entries"
    maxPanelCount: "Bejegyzések maximális száma",
    // [Auto-translated] "Initial entry state"
    panelsState: "Kezdeti belépési állapot",
    // [Auto-translated] "\"Previous Entry\" button text"
    prevPanelText: "\"Előző bejegyzés\" gomb szövege",
    // [Auto-translated] "\"Next Entry\" button text"
    nextPanelText: "\"Következő bejegyzés\" gomb szövege",
    // [Auto-translated] "\"Remove Entry\" button alignment"
    removePanelButtonLocation: "\"Bejegyzés eltávolítása\" gombigazítás",
    // [Auto-translated] "Hide the question if it has no rows"
    hideIfRowsEmpty: "A kérdés elrejtése, ha nincsenek sorai",
    // [Auto-translated] "Hide columns if there are no rows"
    hideColumnsIfEmpty: "Oszlopok elrejtése, ha nincsenek sorok",
    // [Auto-translated] "Custom rating values"
    rateValues: "Egyéni értékelési értékek",
    // [Auto-translated] "Rating count"
    rateCount: "Értékelések száma",
    // [Auto-translated] "Rating configuration"
    autoGenerate: "Minősítés konfigurációja",
    slider: {
      // [Auto-translated] "Min value"
      min: "Minimális érték",
      // [Auto-translated] "Max value"
      max: "Maximális érték",
      // [Auto-translated] "Step value"
      step: "Lépés értéke",
      // [Auto-translated] "Show scale labels"
      showLabels: "Léptékfeliratok megjelenítése",
      // [Auto-translated] "Show tooltips"
      tooltipVisibility: "Eszköztippek megjelenítése",
      // [Auto-translated] "Allow thumb crossing"
      allowSwap: "Hüvelykujj keresztezésének engedélyezése",
      // [Auto-translated] "Number of auto-generated labels"
      labelCount: "Automatikusan generált címkék száma",
      // [Auto-translated] "Min value expression"
      minValueExpression: "Minimális érték kifejezés",
      // [Auto-translated] "Max value expression"
      maxValueExpression: "Maximális érték kifejezés",
      // [Auto-translated] "Scale labels configuration"
      autoGenerate: "Méretezési címkék konfigurálása",
      // [Auto-translated] "Slider type"
      sliderType: "Csúszka típusa",
      // [Auto-translated] "Min range length"
      minRangeLength: "Minimális tartomány hossza",
      // [Auto-translated] "Max range length"
      maxRangeLength: "Maximális hatótávolság",
      // [Auto-translated] "Custom labels"
      customLabels: "Egyéni címkék",
      // [Auto-translated] "Label format"
      labelFormat: "Címke formátuma",
      // [Auto-translated] "Tooltip format"
      tooltipFormat: "Elemleírás formátuma"
    },
    file: {
      // [Auto-translated] "Image height"
      imageHeight: "Kép magassága",
      // [Auto-translated] "Image width"
      imageWidth: "Kép szélessége"
    },
    // [Auto-translated] "Hide the question if it has no choices"
    hideIfChoicesEmpty: "Rejtse el a kérdést, ha nincs más választása",
    // "Minimum width"
    minWidth: "Minimális szélesség (CSS által elfogadott értékekben)",
    // "Maximum width"
    maxWidth: "Maximális szélesség (CSS által elfogadott értékekben)",
    // "Width"
    width: "Szélesség (CSS által elfogadott értékekben)",
    // [Auto-translated] "Show column headers"
    showHeader: "Oszlopfejlécek megjelenítése",
    // [Auto-translated] "Show horizontal scrollbar"
    horizontalScroll: "Vízszintes görgetősáv megjelenítése",
    // [Auto-translated] "Minimum column width"
    columnMinWidth: "Minimális oszlopszélesség",
    // [Auto-translated] "Row header width"
    rowTitleWidth: "Sorfejléc szélessége",
    // "Value to store when \"True\" is selected"
    valueTrue: "\"Igaz\" érték",
    // "Value to store when \"False\" is selected"
    valueFalse: "\"Hamis\" érték",
    // "\"Value is below minimum\" error message"
    minErrorText: "\"Az érték a minimális érték alatt van\" hibaüzenet",
    // "\"Value exceeds maximum\" error message"
    maxErrorText: "\"Az érték meghaladja a maximumot\" hibaüzenet",
    // "\"Empty comment\" error message"
    otherErrorText: "\"Üres megjegyzés\" hibaüzenet",
    // "Error message for duplicate responses"
    keyDuplicationError: "\"Nem egyedi kulcsérték\" hibaüzenet",
    // [Auto-translated] "Minimum choices to select"
    minSelectedChoices: "Minimális választási lehetőségek",
    // [Auto-translated] "Maximum choices to select"
    maxSelectedChoices: "Maximális választási lehetőségek",
    // [Auto-translated] "Logo width"
    logoWidth: "Embléma szélessége",
    // [Auto-translated] "Logo height"
    logoHeight: "Embléma magassága",
    // "Read-only"
    readOnly: "Csak olvasható",
    // [Auto-translated] "Disable the read-only mode if"
    enableIf: "Tiltsa le a csak olvasható módot, ha",
    // "\"No rows\" message"
    noRowsText: "\"Nincsenek sorok\" üzenet",
    // [Auto-translated] "Separate special choices"
    separateSpecialChoices: "Külön speciális választási lehetőségek",
    // [Auto-translated] "Copy choices from the following question"
    choicesFromQuestion: "Másolja ki a következő kérdés választási lehetőségeit",
    // [Auto-translated] "Which choice options to copy"
    choicesFromQuestionMode: "Mely választási lehetőségeket kell másolni",
    // [Auto-translated] "Use values from the following matrix column or panel question as choice IDs"
    choiceValuesFromQuestion: "Használja a következő mátrixoszlop vagy panelkérdés értékeit választási lehetőség-azonosítóként:",
    // [Auto-translated] "Use values from the following matrix column or panel question as choice texts"
    choiceTextsFromQuestion: "Használja a következő mátrixoszlop vagy panelkérdés értékeit választási szövegként:",
    // [Auto-translated] "Display page titles in the progress bar"
    progressBarShowPageTitles: "Oldalcímek megjelenítése a folyamatjelző sávon",
    // [Auto-translated] "Display page numbers in the progress bar"
    progressBarShowPageNumbers: "Oldalszámok megjelenítése a folyamatjelző sávon",
    // [Auto-translated] "Add a comment box"
    showCommentArea: "Megjegyzésmező hozzáadása",
    // [Auto-translated] "Placeholder text for the comment box"
    commentPlaceholder: "A megjegyzésmező helyőrző szövege",
    // [Auto-translated] "Show the labels as extreme values"
    displayRateDescriptionsAsExtremeItems: "A címkék megjelenítése szélsőséges értékekként",
    // [Auto-translated] "Row order"
    rowOrder: "Sorsorrend",
    // [Auto-translated] "Column layout"
    columnsLayout: "Oszlopelrendezés",
    // [Auto-translated] "Nested column count"
    columnColCount: "Beágyazott oszlopok száma",
    // [Auto-translated] "Correct Answer"
    correctAnswer: "Helyes válasz",
    // [Auto-translated] "Default Values"
    defaultPanelValue: "Alapértelmezett értékek",
    // [Auto-translated] "Cell Texts"
    cells: "Cella szövegek",
    // [Auto-translated] "Select a file or paste a file link..."
    fileInputPlaceholder: "Válasszon ki egy fájlt, vagy illesszen be egy fájlhivatkozást...",
    // "Prevent duplicate responses in the following column"
    keyName: "Fő oszlop",
    itemvalue: {
      // [Auto-translated] "Make the option visible if"
      visibleIf: "Tegye láthatóvá a beállítást, ha",
      // [Auto-translated] "Make the option selectable if"
      enableIf: "Tegye kiválaszthatóvá a beállítást, ha"
    },
    "itemvalue@rows": {
      // [Auto-translated] "Make the row visible if"
      visibleIf: "Tegye láthatóvá a sort, ha",
      // [Auto-translated] "Make the row editable if"
      enableIf: "Tegye szerkeszthetővé a sort, ha:"
    },
    imageitemvalue: {
      // "Alt text"
      text: "Helyettesítő szöveg"
    },
    // [Auto-translated] "Logo alignment"
    logoPosition: "Logó igazítása",
    // [Auto-translated] "Add logo..."
    addLogo: "Logó hozzáadása...",
    // [Auto-translated] "Change logo..."
    changeLogo: "Logó módosítása...",
    logoPositions: {
      // [Auto-translated] "Remove logo"
      none: "Embléma eltávolítása",
      // [Auto-translated] "Left"
      left: "Balra",
      // [Auto-translated] "Right"
      right: "Jobbra",
      // [Auto-translated] "On the top"
      top: "A tetején",
      // [Auto-translated] "In the bottom"
      bottom: "Alul"
    },
    // [Auto-translated] "Preview mode"
    previewMode: "Előnézeti mód",
    // [Auto-translated] "Enable grid layout"
    gridLayoutEnabled: "Rácselrendezés engedélyezése",
    // [Auto-translated] "Grid columns"
    gridLayoutColumns: "Rács oszlopok",
    // [Auto-translated] "Mask settings"
    maskSettings: "Maszk beállításai",
    // [Auto-translated] "Row details error message alignment"
    detailErrorLocation: "Soradatok hibaüzenet-igazítása",
    // Creator tabs
    tabs: {
      panel: {
        // [Auto-translated] "Panel Layout"
        layout: "Panel elrendezése"
      },
      // "General"
      general: "Általános",
      // "Options"
      fileOptions: "Beállítások",
      // "HTML Editor"
      html: "HTML szerkesztő",
      // "Columns"
      columns: "Oszlopok",
      // "Rows"
      rows: "Sorok",
      // "Choice Options"
      choices: "Lehetőségek",
      // "Items"
      items: "Elemek",
      // "Visible If"
      visibleIf: "Látható ha",
      // "Editable If"
      enableIf: "Engedélyezve ha",
      // "Required If"
      requiredIf: "Kötelező ha",
      // "Rating Values"
      rateValues: "Szorzó értékek",
      // [Auto-translated] "Slider Settings"
      sliderSettings: "Csúszka beállításai",
      // "Choices from a Web Service"
      choicesByUrl: "Lehetőségek a webről",
      // "Default Choices"
      matrixChoices: "Alapértelmezett lehetőségek",
      // "Text Inputs"
      multipleTextItems: "Szövegmezők",
      // [Auto-translated] "Numbering"
      numbering: "Számozás",
      // "Validators"
      validators: "Validátorok",
      // "Navigation"
      navigation: "Navigáció",
      // "Question Settings"
      question: "Kérdés",
      // [Auto-translated] "Pages"
      pages: "Oldalak",
      // "Quiz Mode"
      timer: "Időzítő/Kvíz",
      // [Auto-translated] "Calculated Values"
      calculatedValues: "Számított értékek",
      // "Triggers"
      triggers: "Eseményvezérlők",
      // "Title template"
      templateTitle: "Sablon címe",
      // [Auto-translated] "Totals"
      totals: "Összegek",
      // "Conditions"
      logic: "Logika",
      // [Auto-translated] "Input Mask Settings"
      mask: "Beviteli maszk beállításai",
      layout: {
        // [Auto-translated] "Panel Layout"
        panel: "Panel elrendezése",
        // [Auto-translated] "Layout"
        question: "Elrendezés",
        // [Auto-translated] "Layout"
        base: "Elrendezés"
      },
      // [Auto-translated] "Data"
      data: "Adat",
      // [Auto-translated] "Validation"
      validation: "Érvényesítés",
      // [Auto-translated] "Individual Cell Texts"
      cells: "Egyedi cellaszövegek",
      // [Auto-translated] "\"Thank You\" Page"
      showOnCompleted: "\"Köszönöm\" oldal",
      // [Auto-translated] "Logo in the Survey Header"
      logo: "Embléma a földmérés fejlécében",
      // [Auto-translated] "Slider"
      slider: "Csúszka",
      // [Auto-translated] "Expression"
      expression: "Kifejezés",
      // [Auto-translated] "Question Settings"
      questionSettings: "Kérdés beállítások",
      // "Header"
      header: "Fejléc",
      // "Background"
      background: "Háttér",
      // "Appearance"
      appearance: "Megjelenés",
      // [Auto-translated] "Accent colors"
      accentColors: "Kiemelő színek",
      // [Auto-translated] "Surface background"
      surfaceBackground: "Felületi háttér",
      // [Auto-translated] "Scaling"
      scaling: "Rétegképződés",
      // [Auto-translated] "Others"
      others: "Mások"
    },
    // "Edit property '{0}'"
    editProperty: "Tulajdonság szerkesztése '{0}'",
    // "Items"
    items: "[ Elemek: {0} ]",
    // [Auto-translated] "Make choices visible if"
    choicesVisibleIf: "Tegye láthatóvá a választásokat, ha",
    // [Auto-translated] "Make choices selectable if"
    choicesEnableIf: "Tegye a választásokat választhatóvá, ha",
    // [Auto-translated] "Make columns visible if"
    columnsEnableIf: "Oszlopok láthatóvá tétele, ha",
    // [Auto-translated] "Make rows visible if"
    rowsEnableIf: "Tegye láthatóvá a sorokat, ha",
    // [Auto-translated] "Increase the inner indent"
    innerIndent: "A belső behúzás növelése",
    // [Auto-translated] "Use answers from the last entry as default"
    copyDefaultValueFromLastEntry: "Az utolsó bejegyzés válaszainak használata alapértelmezettként",
    // "Please enter a value."
    enterNewValue: "Kérem, adja meg az értéket.",
    // "There are no questions in the survey."
    noquestions: "Nincsenek kérdések a kérdőívben.",
    // "Please create a trigger"
    createtrigger: "Kérem hozzon létre egy eseményvezérlőt",
    // [Auto-translated] "Press enter button to edit"
    titleKeyboardAdornerTip: "Nyomja meg az Enter gombot a szerkesztéshez",
    // [Auto-translated] "Press enter button to edit item, press delete button to delete item, press alt plus arrow up or arrow down to move item"
    keyboardAdornerTip: "Nyomja meg az Enter gombot az elem szerkesztéséhez, nyomja meg a törlés gombot az elem törléséhez, nyomja meg az alt plusz felfelé vagy lefelé mutató nyilat az elem áthelyezéséhez",
    // "On "
    triggerOn: "Be ",
    // "Make pages visible"
    triggerMakePagesVisible: "Lapok láthatóvá tétele:",
    // "Make elements visible"
    triggerMakeQuestionsVisible: "Elemek láthatóvá tétele:",
    // "Complete the survey if successful."
    triggerCompleteText: "Kérdőív befejezése, ha sikeres.",
    // "The trigger is not set"
    triggerNotSet: "Nincs eseménykezelő beállítva",
    // "Run if"
    triggerRunIf: "Futtatás ha",
    // "Change value of: "
    triggerSetToName: "A következő értékének cseréje: ",
    // "Copy value from: "
    triggerFromName: "A következő értékének másolása: ",
    // "Run this Expression"
    triggerRunExpression: "A következő kifejezés futtatása:",
    // "to: "
    triggerSetValue: "erre: ",
    // [Auto-translated] "Go to the question"
    triggerGotoName: "Tovább a kérdéshez",
    // "Do not put the variable into the survey result."
    triggerIsVariable: "Ne mentse az eredményt a kérdőív eredményébe.",
    // [Auto-translated] "Please enter a valid expression"
    triggerRunExpressionEmpty: "Kérjük, adjon meg egy érvényes kifejezést",
    // [Auto-translated] "Type expression here..."
    emptyExpressionPlaceHolder: "Írja be ide a kifejezést...",
    // [Auto-translated] "No file chosen"
    noFile: "Nincs kiválasztott fájl",
    // [Auto-translated] "Clear hidden question values"
    clearIfInvisible: "Rejtett kérdésértékek törlése",
    // [Auto-translated] "Store values in the following property"
    valuePropertyName: "Értékek tárolása a következő tulajdonságban",
    // [Auto-translated] "Enable search-as-you-type"
    searchEnabled: "Gépelési keresés engedélyezése",
    // [Auto-translated] "Hide selected items"
    hideSelectedItems: "A kijelölt elemek elrejtése",
    // [Auto-translated] "Collapse the dropdown upon selection"
    closeOnSelect: "A legördülő menü összecsukása kijelöléskor",
    // [Auto-translated] "Vertical alignment within cells"
    verticalAlign: "Függőleges igazítás a cellákon belül",
    // [Auto-translated] "Alternate row colors"
    alternateRows: "Sorszínek váltakozása",
    // [Auto-translated] "Make columns visible if"
    columnsVisibleIf: "Oszlopok láthatóvá tétele, ha",
    // [Auto-translated] "Make rows visible if"
    rowsVisibleIf: "Tegye láthatóvá a sorokat, ha",
    // [Auto-translated] "Placeholder text for the comment box"
    otherPlaceholder: "A megjegyzésmező helyőrző szövege",
    // [Auto-translated] "Placeholder text for Local file"
    filePlaceholder: "Helyőrző szöveg a helyi fájlhoz",
    // [Auto-translated] "Placeholder text for Camera"
    photoPlaceholder: "Helyőrző szöveg a Kamerához",
    // [Auto-translated] "Placeholder text for Local file or Camera"
    fileOrPhotoPlaceholder: "Helyőrző szöveg a Helyi fájlhoz vagy a Kamerához",
    // [Auto-translated] "Rating icon"
    rateType: "Értékelés ikon",
    // [Auto-translated] "Ex.: https://api.example.com/books"
    url_placeholder: "Pl.: https://api.example.com/books",
    // [Auto-translated] "Ex.: categories.fiction"
    path_placeholder: "Pl.: kategóriák.fikció",
    // [Auto-translated] "Ex.: a)"
    questionStartIndex_placeholder: "Pl.: a)",
    // [Auto-translated] "Ex.: 6in"
    width_placeholder: "Pl.: 6 hüvelyk",
    // [Auto-translated] "Ex.: 600px"
    minWidth_placeholder: "Pl.: 600px",
    // [Auto-translated] "Ex.: 50%"
    maxWidth_placeholder: "Pl.: 50%",
    // "auto"
    imageHeight_placeholder: "kocsi",
    // "auto"
    imageWidth_placeholder: "kocsi",
    // [Auto-translated] "Ex.: 100px"
    itemTitleWidth_placeholder: "Pl.: 100px",
    theme: {
      // [Auto-translated] "Theme"
      themeName: "Téma",
      // [Auto-translated] "Question appearance"
      isPanelless: "Kérdés megjelenése",
      // [Auto-translated] "Background and corner radius"
      editorPanel: "Háttér és saroksugár",
      // [Auto-translated] "Background and corner radius"
      questionPanel: "Háttér és saroksugár",
      // [Auto-translated] "Accent color"
      primaryColor: "Kiemelő szín",
      // [Auto-translated] "Panel and question box opacity"
      panelBackgroundTransparency: "Panel és kérdőív átlátszatlansága",
      // [Auto-translated] "Input element opacity"
      questionBackgroundTransparency: "Bemeneti elem átlátszatlansága",
      // [Auto-translated] "Survey font size"
      fontSize: "Felmérés betűmérete",
      // [Auto-translated] "Survey scale factor"
      scale: "Felmérés léptéktényezője",
      // [Auto-translated] "Corner radius"
      cornerRadius: "Sarok sugara",
      // [Auto-translated] "Advanced mode"
      advancedMode: "Speciális mód",
      // [Auto-translated] "Title font"
      pageTitle: "Cím betűtípus",
      // [Auto-translated] "Description font"
      pageDescription: "Leírás betűtípus",
      // [Auto-translated] "Title font"
      questionTitle: "Cím betűtípus",
      // [Auto-translated] "Description font"
      questionDescription: "Leírás betűtípus",
      // [Auto-translated] "Font"
      editorFont: "Betűkészlet",
      // [Auto-translated] "Opacity"
      backgroundOpacity: "Átlátszatlanság", // Auto-generated string
      // [Auto-translated] "Survey font family"
      "--sjs-font-family": "Földmérési betűcsalád",
      // [Auto-translated] "Background color"
      "--sjs-general-backcolor-dim": "Háttérszín",
      // [Auto-translated] "Accent background colors"
      "--sjs-primary-backcolor": "Kiemelő háttérszínek",
      // [Auto-translated] "Accent foreground colors"
      "--sjs-primary-forecolor": "Kiemelő előtérszínek",
      // [Auto-translated] "Error message colors"
      "--sjs-special-red": "A hibaüzenetek színei",
      // [Auto-translated] "Shadow effects"
      "--sjs-shadow-small": "Árnyék effektusok",
      // [Auto-translated] "Shadow effects"
      "--sjs-shadow-inner": "Árnyék effektusok",
      // [Auto-translated] "Colors"
      "--sjs-border-default": "Színek"
    },
    "header@header": {
      // [Auto-translated] "View"
      headerView: "Nézet",
      // [Auto-translated] "Logo alignment"
      logoPosition: "Logó igazítása",
      // [Auto-translated] "Survey title font"
      surveyTitle: "Felmérés címének betűtípusa",
      // [Auto-translated] "Survey description font"
      surveyDescription: "Felmérés leírásának betűtípusa",
      // [Auto-translated] "Survey title font"
      headerTitle: "Felmérés címének betűtípusa",
      // [Auto-translated] "Survey description font"
      headerDescription: "Felmérés leírásának betűtípusa",
      // [Auto-translated] "Content area width"
      inheritWidthFrom: "Tartalomterület szélessége",
      // [Auto-translated] "Text width"
      textAreaWidth: "Szöveg szélessége",
      // [Auto-translated] "Background color"
      backgroundColorSwitch: "Háttérszín",
      // [Auto-translated] "Background image"
      backgroundImage: "Háttérkép",
      // [Auto-translated] "Opacity"
      backgroundImageOpacity: "Átlátszatlanság",
      // [Auto-translated] "Overlap"
      overlapEnabled: "Átfed",
      // [Auto-translated] "Logo alignment"
      logoPositionX: "Logó igazítása",
      // [Auto-translated] "Survey title alignment"
      titlePositionX: "Földmérési cím igazítása",
      // [Auto-translated] "Survey description alignment"
      descriptionPositionX: "Földmérési leírás igazítása"
    }
  },
  // Property values
  pv: {
    // [Auto-translated] "true"
    "true": "igaz",
    // [Auto-translated] "false"
    "false": "téves",
    // [Auto-translated] "Local file"
    file: "Helyi fájl",
    // [Auto-translated] "Camera"
    camera: "Fényképezőgép",
    // [Auto-translated] "Local file or Camera"
    "file-camera": "Helyi fájl vagy kamera",
    // "Inherit"
    inherit: "öröklött",
    // "Visible"
    show: "mutatás",
    // "Hidden"
    hide: "elrejtés",
    // "Inherit"
    default: "alapértelmezett",
    // "Initial"
    initial: "kezdeti",
    // "Random"
    random: "véletlen",
    // "Collapsed"
    collapsed: "csukott",
    // "Expanded"
    expanded: "nyitott",
    // "None"
    none: "semmi",
    // "Ascending"
    asc: "növekvő",
    // "Descending"
    desc: "csökkenő",
    // "Indeterminate"
    indeterminate: "határozatlan",
    // [Auto-translated] "Selected"
    selected: "Kiválasztott",
    // [Auto-translated] "Unselected"
    unselected: "Kijelöletlen",
    // [Auto-translated] "decimal"
    decimal: "tizedes",
    // [Auto-translated] "currency"
    currency: "valuta",
    // [Auto-translated] "percent"
    percent: "százalék",
    // "First panel is expanded"
    firstExpanded: "első nyitva",
    // "Hide question numbers"
    off: "ki",
    // "List"
    list: "lista",
    // [Auto-translated] "Carousel"
    carousel: "Körhinta",
    // [Auto-translated] "Tabs"
    tab: "Lapfülek",
    // "Panel navigator + Progress bar at the top"
    progressTop: "felül",
    // "Panel navigator + Progress bar at the bottom"
    progressBottom: "alul",
    // "Panel navigator + Progress bar at the top and bottom"
    progressTopBottom: "alül és felül",
    // "Horizontal"
    horizontal: "horizontális",
    // "Vertical"
    vertical: "vertikális",
    // "Top"
    top: "fent",
    // "Bottom"
    bottom: "lent",
    // "Top and bottom"
    topBottom: "fent és lent",
    // [Auto-translated] "Both"
    both: "Mindkettő",
    // "Left"
    left: "bal",
    // [Auto-translated] "Right"
    right: "Jobbra",
    // [Auto-translated] "Center"
    center: "Központ",
    // [Auto-translated] "Left and right"
    leftRight: "Balra és jobbra",
    // [Auto-translated] "Middle"
    middle: "Középső",
    // [Auto-translated] "color"
    color: "szín",
    // [Auto-translated] "date"
    date: "dátum",
    // [Auto-translated] "datetime"
    datetime: "Dátum/idő",
    // [Auto-translated] "datetime-local"
    "datetime-local": "datetime-local",
    // [Auto-translated] "email"
    email: "E-mail",
    // [Auto-translated] "month"
    month: "hónap",
    // [Auto-translated] "number"
    number: "szám",
    // [Auto-translated] "password"
    password: "jelszó",
    // [Auto-translated] "range"
    range: "tartomány",
    // [Auto-translated] "tel"
    tel: "Tel",
    // "text"
    text: "Text",
    // [Auto-translated] "time"
    time: "Idő",
    // [Auto-translated] "url"
    url: "URL-cím",
    // [Auto-translated] "week"
    week: "hét",
    // "Hidden"
    hidden: "rejtett",
    // "Editable"
    edit: "szerkesztés",
    // "Read-only"
    display: "mutatás",
    // [Auto-translated] "Contain"
    contain: "Tartalmaz",
    // [Auto-translated] "Cover"
    cover: "Fedő",
    // [Auto-translated] "Fill"
    fill: "Tölt",
    // [Auto-translated] "Next"
    next: "Következő",
    // [Auto-translated] "Last"
    last: "Utolsó",
    // "Upon survey completion"
    onComplete: "befejezéskor",
    // "When question gets hidden"
    onHidden: "eltűnéskor",
    // [Auto-translated] "When question or its panel/page gets hidden"
    onHiddenContainer: "Amikor a kérdés vagy annak panelje/oldala el lesz rejtve",
    clearInvisibleValues: {
      // [Auto-translated] "Never"
      none: "Soha"
    },
    clearIfInvisible: {
      // [Auto-translated] "Never"
      none: "Soha"
    },
    // [Auto-translated] "Radio Buttons"
    radio: "Választógombokkal",
    inputType: {
      // [Auto-translated] "Color"
      color: "Szín",
      // [Auto-translated] "Date"
      date: "Dátum",
      // [Auto-translated] "Date and Time"
      "datetime-local": "Dátum és idő",
      // [Auto-translated] "Email"
      email: "E-mail",
      // [Auto-translated] "Month"
      month: "Hónap",
      // [Auto-translated] "Number"
      number: "Szám",
      // [Auto-translated] "Password"
      password: "Jelszó",
      // [Auto-translated] "Range"
      range: "Tartomány",
      // [Auto-translated] "Phone Number"
      tel: "Telefonszám",
      // "Text"
      text: "Text",
      // [Auto-translated] "Time"
      time: "Idő",
      // [Auto-translated] "URL"
      url: "URL",
      // [Auto-translated] "Week"
      week: "Hét"
    },
    sliderType: {
      // [Auto-translated] "Single-Value"
      single: "Egyértékű",
      // [Auto-translated] "Range"
      range: "Tartomány"
    },
    tooltipVisibility: {
      // [Auto-translated] "Auto"
      auto: "Kocsi",
      // [Auto-translated] "Always"
      always: "Mindig",
      // [Auto-translated] "Never"
      never: "Soha"
    },
    notificationType: {
      // [Auto-translated] "Error"
      error: "Hiba",
      // [Auto-translated] "Warning"
      warning: "Figyelmeztetés",
      // [Auto-translated] "Informational"
      info: "Információs"
    },
    autocomplete: {
      // [Auto-translated] "Full Name"
      name: "Teljes név",
      // [Auto-translated] "Prefix"
      "honorific-prefix": "Előképző",
      // [Auto-translated] "First Name"
      "given-name": "Keresztnév",
      // [Auto-translated] "Middle Name"
      "additional-name": "Középső név",
      // [Auto-translated] "Last Name"
      "family-name": "Vezetéknév",
      // [Auto-translated] "Suffix"
      "honorific-suffix": "Toldalék",
      // [Auto-translated] "Nickname"
      nickname: "Becenév",
      // [Auto-translated] "Job Title"
      "organization-title": "Beosztás",
      // [Auto-translated] "User Name"
      username: "Felhasználónév",
      // [Auto-translated] "New Password"
      "new-password": "Új jelszó",
      // [Auto-translated] "Current Password"
      "current-password": "Jelenlegi jelszó",
      // [Auto-translated] "Organization Name"
      organization: "Szervezet neve",
      // [Auto-translated] "Full Street Address"
      "street-address": "Teljes utca és házszám",
      // [Auto-translated] "Address Line 1"
      "address-line1": "Címsor 1",
      // [Auto-translated] "Address Line 2"
      "address-line2": "Címsor 2",
      // [Auto-translated] "Address Line 3"
      "address-line3": "Címsor 3",
      // [Auto-translated] "Level 4 Address"
      "address-level4": "4. szintű cím",
      // [Auto-translated] "Level 3 Address"
      "address-level3": "3. szintű cím",
      // [Auto-translated] "Level 2 Address"
      "address-level2": "2. szintű cím",
      // [Auto-translated] "Level 1 Address"
      "address-level1": "1. szintű cím",
      // [Auto-translated] "Country Code"
      country: "Országkód",
      // [Auto-translated] "Country Name"
      "country-name": "Ország neve",
      // [Auto-translated] "Postal Code"
      "postal-code": "Irányítószám",
      // [Auto-translated] "Cardholder Name"
      "cc-name": "Kártyatulajdonos neve",
      // [Auto-translated] "Cardholder First Name"
      "cc-given-name": "Kártyabirtokos keresztneve",
      // [Auto-translated] "Cardholder Middle Name"
      "cc-additional-name": "Kártyabirtokos középső neve",
      // [Auto-translated] "Cardholder Last Name"
      "cc-family-name": "Kártyabirtokos vezetékneve",
      // [Auto-translated] "Credit Card Number"
      "cc-number": "Bankkártya száma",
      // [Auto-translated] "Expiration Date"
      "cc-exp": "Lejárati dátum",
      // [Auto-translated] "Expiration Month"
      "cc-exp-month": "Lejárati hónap",
      // [Auto-translated] "Expiration Year"
      "cc-exp-year": "Lejárati év",
      // [Auto-translated] "Card Security Code"
      "cc-csc": "Kártya biztonsági kód",
      // [Auto-translated] "Credit Card Type"
      "cc-type": "Hitelkártya típusa",
      // [Auto-translated] "Transaction Currency"
      "transaction-currency": "Tranzakció pénzneme",
      // [Auto-translated] "Transaction Amount"
      "transaction-amount": "Tranzakció összege",
      // [Auto-translated] "Preferred Language"
      language: "Választott nyelv",
      // [Auto-translated] "Birthday"
      bday: "Születésnap",
      // [Auto-translated] "Birthday Day"
      "bday-day": "Születésnap napja",
      // [Auto-translated] "Birthday Month"
      "bday-month": "Születésnapi hónap",
      // [Auto-translated] "Birthday Year"
      "bday-year": "Születésnapi év",
      // [Auto-translated] "Gender"
      sex: "Nem",
      // [Auto-translated] "Website URL"
      url: "Webhely URL-címe",
      // [Auto-translated] "Profile Photo"
      photo: "Profilkép",
      // [Auto-translated] "Telephone Number"
      tel: "Telefonszám",
      // [Auto-translated] "Country Code for Phone"
      "tel-country-code": "Telefonszám országkódja",
      // [Auto-translated] "National Telephone Number"
      "tel-national": "Nemzeti telefonszám",
      // [Auto-translated] "Area Code"
      "tel-area-code": "Körzetszám",
      // [Auto-translated] "Local Phone Number"
      "tel-local": "Helyi telefonszám",
      // [Auto-translated] "Local Phone Prefix"
      "tel-local-prefix": "Helyi telefon előhívószáma",
      // [Auto-translated] "Local Phone Suffix"
      "tel-local-suffix": "Helyi telefon utótag",
      // [Auto-translated] "Phone Extension"
      "tel-extension": "Telefonbővítmény",
      // [Auto-translated] "Email Address"
      email: "E-mail cím",
      // [Auto-translated] "Instant Messaging Protocol"
      impp: "Azonnali üzenetküldési protokoll"
    },
    maskType: {
      // [Auto-translated] "None"
      none: "Egyik sem",
      // [Auto-translated] "Pattern"
      pattern: "Minta",
      // [Auto-translated] "Numeric"
      numeric: "Numerikus",
      // [Auto-translated] "Date and Time"
      datetime: "Dátum és idő",
      // [Auto-translated] "Currency"
      currency: "Valuta"
    },
    inputTextAlignment: {
      // [Auto-translated] "Auto"
      auto: "Kocsi",
      // [Auto-translated] "Left"
      left: "Balra",
      // [Auto-translated] "Right"
      right: "Jobbra"
    },
    // "All"
    all: "összes",
    // "Page"
    page: "lap",
    // "Survey"
    survey: "kérdőív",
    // "When switching to the next page"
    onNextPage: "a következő lapra lépéskor",
    // "After an answer is changed"
    onValueChanged: "az érték változásakor",
    // [Auto-translated] "Before an answer is changed"
    onValueChanging: "A válasz módosítása előtt",
    questionsOnPageMode: {
      // [Auto-translated] "Original structure"
      standard: "Eredeti szerkezet",
      // [Auto-translated] "Show all questions on one page"
      singlePage: "Az összes kérdés megjelenítése egy oldalon",
      // [Auto-translated] "Show single question per page"
      questionPerPage: "Egyetlen kérdés megjelenítése oldalanként",
      // [Auto-translated] "Show single input field per page"
      inputPerPage: "Egyetlen beviteli mező megjelenítése oldalanként"
    },
    // [Auto-translated] "No preview"
    noPreview: "Nincs előnézet",
    // [Auto-translated] "Show all questions"
    showAllQuestions: "Az összes kérdés megjelenítése",
    // [Auto-translated] "Show answered questions only"
    showAnsweredQuestions: "Csak a megválaszolt kérdések megjelenítése",
    // [Auto-translated] "Show all questions"
    allQuestions: "Az összes kérdés megjelenítése",
    // [Auto-translated] "Show answered questions only"
    answeredQuestions: "Csak a megválaszolt kérdések megjelenítése",
    // [Auto-translated] "Completed pages"
    pages: "Befejezett oldalak",
    // [Auto-translated] "Answered questions"
    questions: "Megválaszolt kérdések",
    // [Auto-translated] "Answered required questions"
    requiredQuestions: "Megválaszolt kötelező kérdések",
    // [Auto-translated] "Valid answers"
    correctQuestions: "Érvényes válaszok",
    // [Auto-translated] "Completed pages (button UI)"
    buttons: "Befejezett oldalak (gombos felhasználói felület)",
    // [Auto-translated] "Under the input field"
    underInput: "A beviteli mező alatt",
    // [Auto-translated] "Under the question title"
    underTitle: "A kérdés címe alatt",
    // [Auto-translated] "On lost focus"
    onBlur: "Elvesztette a fókuszt",
    // [Auto-translated] "While typing"
    onTyping: "Gépelés közben",
    // [Auto-translated] "Under the row"
    underRow: "A sor alatt",
    // [Auto-translated] "Under the row, display one section only"
    underRowSingle: "A sor alatt csak egy szakasz megjelenítése",
    // "Auto"
    auto: "Kocsi",
    timerInfoMode: {
      // "Both"
      combined: "Mindkettő"
    },
    addRowButtonLocation: {
      // [Auto-translated] "Based on matrix layout"
      default: "Mátrix elrendezés alapján"
    },
    panelsState: {
      // [Auto-translated] "Locked"
      default: "Zárolt",
      // [Auto-translated] "Collapse all"
      collapsed: "Az összes összecsukása",
      // [Auto-translated] "Expand all"
      expanded: "Az összes megjelenítése",
      // [Auto-translated] "First expanded"
      firstExpanded: "Először bővített"
    },
    widthMode: {
      // [Auto-translated] "Static"
      static: "Statikus",
      // [Auto-translated] "Responsive"
      responsive: "Fogékony"
    },
    contentMode: {
      // [Auto-translated] "Image"
      image: "Kép",
      // [Auto-translated] "Video"
      video: "Video",
      // [Auto-translated] "YouTube"
      youtube: "Youtube-videók"
    },
    displayMode: {
      // [Auto-translated] "Buttons"
      buttons: "Gombok",
      // [Auto-translated] "Dropdown"
      dropdown: "Legördülő menü"
    },
    rateColorMode: {
      // [Auto-translated] "Default"
      default: "Alapértelmezett",
      // [Auto-translated] "Scale"
      scale: "Hangsor"
    },
    scaleColorMode: {
      // [Auto-translated] "Monochrome"
      monochrome: "Monokróm",
      // [Auto-translated] "Colored"
      colored: "Színes"
    },
    autoGenerate: {
      // [Auto-translated] "Auto-generate"
      "true": "Automatikus generálás",
      // [Auto-translated] "Manual"
      "false": "Kézikönyv"
    },
    rateType: {
      // [Auto-translated] "Labels"
      labels: "Címkék",
      // [Auto-translated] "Stars"
      stars: "Csillagok",
      // [Auto-translated] "Smileys"
      smileys: "Hangulatjelek"
    },
    state: {
      // [Auto-translated] "Locked"
      default: "Zárolt"
    },
    showQuestionNumbers: {
      // [Auto-translated] "Auto-numbering"
      default: "Automatikus számozás",
      // [Auto-translated] "Auto-numbering"
      on: "Automatikus számozás",
      // [Auto-translated] "Reset on each page"
      onPage: "Visszaállítás minden oldalon",
      // [Auto-translated] "Reset on each panel"
      onpanel: "Visszaállítás minden panelen",
      // [Auto-translated] "Reset on each panel"
      onPanel: "Visszaállítás az egyes paneleken",
      // [Auto-translated] "Recursive numbering"
      recursive: "Rekurzív számozás",
      // [Auto-translated] "Continue across the survey"
      onSurvey: "Folytassa a felmérést",
      // [Auto-translated] "No numbering"
      off: "Nincs számozás"
    },
    descriptionLocation: {
      // [Auto-translated] "Under the question title"
      underTitle: "A kérdés címe alatt",
      // [Auto-translated] "Under the input field"
      underInput: "A beviteli mező alatt"
    },
    selectToRankAreasLayout: {
      // [Auto-translated] "Next to choices"
      horizontal: "A választási lehetőségek mellett",
      // [Auto-translated] "Above choices"
      vertical: "A fenti választási lehetőségek"
    },
    displayStyle: {
      // [Auto-translated] "Decimal"
      decimal: "Tizedes",
      // [Auto-translated] "Currency"
      currency: "Valuta",
      // [Auto-translated] "Percentage"
      percent: "Százalék",
      // [Auto-translated] "Date"
      date: "Dátum"
    },
    totalDisplayStyle: {
      // [Auto-translated] "Decimal"
      decimal: "Tizedes",
      // [Auto-translated] "Currency"
      currency: "Valuta",
      // [Auto-translated] "Percentage"
      percent: "Százalék",
      // [Auto-translated] "Date"
      date: "Dátum"
    },
    rowOrder: {
      // [Auto-translated] "Original"
      initial: "Eredeti"
    },
    questionOrder: {
      // [Auto-translated] "Original"
      initial: "Eredeti"
    },
    progressBarLocation: {
      // [Auto-translated] "Top"
      top: "Felső",
      // [Auto-translated] "Bottom"
      bottom: "Fenék",
      // [Auto-translated] "Top and bottom"
      topbottom: "Felső és alsó",
      // [Auto-translated] "Above the header"
      aboveheader: "A fejléc felett",
      // [Auto-translated] "Below the header"
      belowheader: "A fejléc alatt",
      // [Auto-translated] "Hidden"
      off: "Rejtett"
    },
    // [Auto-translated] "Sum"
    sum: "Összeg",
    // [Auto-translated] "Count"
    count: "Gróf",
    // [Auto-translated] "Min"
    min: "Min",
    // [Auto-translated] "Max"
    max: "Max",
    // [Auto-translated] "Avg"
    avg: "Avg",
    searchMode: {
      // [Auto-translated] "Contains"
      contains: "Tartalmaz",
      // [Auto-translated] "Starts with"
      startsWith: "Ezzel kezdődik"
    },
    backgroundImageFit: {
      // [Auto-translated] "Auto"
      auto: "Kocsi",
      // [Auto-translated] "Cover"
      cover: "Fedő",
      // [Auto-translated] "Contain"
      contain: "Tartalmaz",
      // [Auto-translated] "Stretch"
      fill: "Nyúlik",
      // [Auto-translated] "Tile"
      tile: "Cserép"
    },
    backgroundImageAttachment: {
      // [Auto-translated] "Fixed"
      fixed: "Fix",
      // [Auto-translated] "Scroll"
      scroll: "Kézirattekercs"
    },
    headerView: {
      // [Auto-translated] "Basic"
      basic: "Alapvető",
      // [Auto-translated] "Advanced"
      advanced: "Haladó"
    },
    inheritWidthFrom: {
      // [Auto-translated] "Same as survey"
      survey: "Ugyanaz, mint a felmérés",
      // [Auto-translated] "Same as container"
      container: "Ugyanaz, mint a konténer"
    },
    backgroundColorSwitch: {
      // [Auto-translated] "None"
      none: "Egyik sem",
      // [Auto-translated] "Accent color"
      accentColor: "Kiemelő szín",
      // [Auto-translated] "Custom"
      custom: "Szokás"
    },
    colorPalette: {
      // [Auto-translated] "Light"
      light: "Fény",
      // [Auto-translated] "Dark"
      dark: "Sötét"
    },
    isPanelless: {
      // [Auto-translated] "Default"
      "false": "Alapértelmezett",
      // [Auto-translated] "Without Panels"
      "true": "Panelek nélkül"
    },
    progressBarInheritWidthFrom: {
      // [Auto-translated] "Same as survey"
      survey: "Ugyanaz, mint a felmérés",
      // [Auto-translated] "Same as container"
      container: "Ugyanaz, mint a konténer"
    }
  },
  // Operators
  op: {
    // "Empty"
    empty: "üres",
    // "Not empty"
    notempty: "nem üres",
    // "Equals"
    equal: "megegyezik",
    // "Does not equal"
    notequal: "nem egyezik meg",
    // "Contains"
    contains: "tartalmazza",
    // "Does not contain"
    notcontains: "nem tartalmazza",
    // [Auto-translated] "Any of"
    anyof: "Bármelyike",
    // [Auto-translated] "All of"
    allof: "Az összes",
    // "Greater than"
    greater: "nagyobb mint",
    // "Less than"
    less: "kisebb mint",
    // "Greater than or equal to"
    greaterorequal: "nagyobb vagy egyenlő",
    // "Less than or equal to"
    lessorequal: "kisebb vagy egyenlő",
    // [Auto-translated] "and"
    and: "és",
    // [Auto-translated] "or"
    or: "vagy"
  },
  // Embed window
  ew: {
    // "Use Angular version"
    angular: "Angular verzió használata",
    // "Use jQuery version"
    jquery: "jQuery verzió használata",
    // "Use Knockout version"
    knockout: "Knockout verzió használata",
    // "Use React version"
    react: "React verzió használata",
    // "Use Vue version"
    vue: "Vue verzió használata",
    // "For bootstrap framework"
    bootstrap: "Használat Bootstrap frameworkkel",
    // [Auto-translated] "Modern theme"
    modern: "Modern téma",
    // [Auto-translated] "Default theme"
    default: "Alapértelmezett téma",
    // [Auto-translated] "Orange theme"
    orange: "Narancssárga téma",
    // [Auto-translated] "Darkblue theme"
    darkblue: "Sötétkék téma",
    // [Auto-translated] "Darkrose theme"
    darkrose: "Darkrose téma",
    // [Auto-translated] "Stone theme"
    stone: "Kő téma",
    // [Auto-translated] "Winter theme"
    winter: "Téli téma",
    // [Auto-translated] "Winter-Stone theme"
    winterstone: "Téli-kő téma",
    // "Show survey on a page"
    showOnPage: "Kérdőív mutatása a lapon",
    // "Show survey in a window"
    showInWindow: "Kérdőív mutatása egy ablakban",
    // "Load Survey JSON from server"
    loadFromServer: "Kérdőív JSON betöltése a szerverről",
    // "Scripts and styles"
    titleScript: "Szkriptek és stíluslapok",
    // "HTML"
    titleHtml: "HTML",
    // "JavaScript"
    titleJavaScript: "JavaScript"
  },
  // Preview (Survey)
  ts: {
    // "Select the page to test it"
    selectPage: "Válassza ki a tesztelni kívánt lapot:",
    // "Show invisible elements"
    showInvisibleElements: "Nemlátható elemek megjelnítése",
    // [Auto-translated] "Hide invisible elements"
    hideInvisibleElements: "Láthatatlan elemek elrejtése",
    // [Auto-translated] "Previous"
    prevPage: "Előző",
    // [Auto-translated] "Next"
    nextPage: "Következő"
  },
  validators: {
    // "Answer count"
    answercountvalidator: "válaszok száma",
    // "Email"
    emailvalidator: "e-mail",
    // "Expression"
    expressionvalidator: "kifejezés",
    // "Number"
    numericvalidator: "szám",
    // "Regex"
    regexvalidator: "reguláris kifejezés",
    // "Text"
    textvalidator: "szöveg"
  },
  triggers: {
    // "Complete survey"
    completetrigger: "kérdőív befejezése",
    // "Set answer"
    setvaluetrigger: "érték beállítása",
    // "Copy answer"
    copyvaluetrigger: "érték másolása",
    // [Auto-translated] "Skip to question"
    skiptrigger: "Ugrás a kérdésre",
    // "Run expression"
    runexpressiontrigger: "kifejezés futtatása",
    // "change visibility (deprecated)"
    visibletrigger: "láthatóság megváltoztatása (már nincs használatban)"
  },
  peplaceholder: {
    patternmask: {
      // "Ex.: +1(999)-999-99-99"
      pattern: "Pl.: +1(999)-999-99-99"
    },
    datetimemask: {
      // "Ex.: mm/dd/yyyy HH:MM:ss"
      pattern: "Pl.: éééé/hh/nn"
    },
    currencymask: {
      // "Ex.: $"
      prefix: "Pl.: $",
      // "Ex.: USD"
      suffix: "Pl.: USD"
    },
    panelbase: {
      // [Auto-translated] "Ex.: 200px"
      questionTitleWidth: "Pl.: 200px"
    },
    panellayoutcolumn: {
      // "Ex.: 30%"
      effectiveWidth: "Pl.: 30%",
      // "Ex.: 200px"
      questionTitleWidth: "Pl.: 200px"
    }
  },
  pehelp: {
    panel: {
      // "A panel ID that is not visible to respondents."
      name: "Olyan panelazonosító, amely nem látható a válaszadók számára.",
      // [Auto-translated] "Type a panel subtitle."
      description: "Írjon be egy panel feliratát.",
      // "Use the magic wand icon to set a conditional rule that determines panel visibility."
      visibleIf: "A varázspálca ikonnal feltételes szabályt állíthat be, amely meghatározza a panel láthatóságát.",
      // [Auto-translated] "Use the magic wand icon to set a conditional rule that disables the read-only mode for the panel."
      enableIf: "A varázspálca ikonnal állítson be egy feltételes szabályt, amely letiltja a panel írásvédett módját.",
      // "Use the magic wand icon to set a conditional rule that prevents survey submission unless at least one nested question has an answer."
      requiredIf: "A varázspálca ikonnal állítson be egy feltételes szabályt, amely megakadályozza a felmérés elküldését, kivéve, ha legalább egy beágyazott kérdésre van válasz.",
      // [Auto-translated] "Applies to all questions within this panel. When set to \"Hidden\", it also hides question descriptions. If you want to override this setting, define title alignment rules for individual questions. The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Top\" by default). "
      questionTitleLocation: "A panel összes kérdésére vonatkozik. Ha \"Rejtett\" értékre van állítva, akkor a kérdések leírását is elrejti. Ha felül szeretné bírálni ezt a beállítást, határozzon meg címigazítási szabályokat az egyes kérdésekhez. Az \"Öröklés\" opció az oldalszintű (ha be van állítva) vagy a felmérési szintű beállítást alkalmazza (\"Top\" alapértelmezés szerint). ",
      // [Auto-translated] "Sets consistent width for question titles when they are aligned to the left of their question boxes. Accepts CSS values (px, %, in, pt, etc.)."
      questionTitleWidth: "Egységes szélességet állít be a kérdéscímekhez, ha azok a kérdésmezőktől balra vannak igazítva. CSS-értékeket fogad el (px, %, in, pt stb.).",
      // "Sets the location of an error message in relation to all questions within the panel. The \"Inherit\" option applies the page-level (if set) or survey-level setting."
      questionErrorLocation: "Beállítja a hibaüzenet helyét a panelen belüli összes kérdéssel kapcsolatban. Az \"Öröklés\" opció az oldalszintű (ha be van állítva) vagy a felmérés szintű beállítást alkalmazza.",
      // [Auto-translated] "Keeps the original order of questions or randomizes them. The \"Inherit\" option applies the page-level (if set) or survey-level setting."
      questionOrder: "Megtartja a kérdések eredeti sorrendjét, vagy véletlenszerűen választja őket. Az \"Öröklés\" opció az oldalszintű (ha be van állítva) vagy a felmérési szintű beállítást alkalmazza.",
      // "Repositions the panel to the end of a selected page."
      page: "A kijelölt oldal végére helyezi a panelt.",
      // [Auto-translated] "Adds space or margin between the panel content and the left border of the panel box."
      innerIndent: "Térközt vagy margót ad a panel tartalma és a paneldoboz bal szegélye közé.",
      // "Unselect to display the panel in one line with the previous question or panel. The setting doesn't apply if the panel is the first element in your form."
      startWithNewLine: "Törölje a jelölést, ha a panel egy sorban jelenik meg az előző kérdéssel vagy panellel. A beállítás nem érvényes, ha a panel az űrlap első eleme.",
      // "Choose from: \"Expanded\" - the panel is displayed in full and can be collapsed; \"Collapsed\" - the panel displays only the title and description and can be expanded; \"Locked\" - the panel is displayed in full and cannot be collapsed."
      state: "Válasszon a következők közül: \"Kibontott\" - a panel teljes egészében megjelenik és összecsukható; \"Összecsukott\" - a panel csak a címet és a leírást jeleníti meg, és bővíthető; \"Zárolva\" - a panel teljes egészében megjelenik, és nem csukható össze.",
      // [Auto-translated] "Sets the width of the panel in proportion to other survey elements in the same line. Accepts CSS values (px, %, in, pt, etc.)."
      width: "A panel szélességét az ugyanazon a vonalon lévő többi földmérési elemhez viszonyítva állítja be. Elfogadja a CSS értékeket (px, %, in, pt stb.).",
      // [Auto-translated] "Assigns numbers to questions nested within this panel."
      showQuestionNumbers: "Számokat rendel a panelbe ágyazott kérdésekhez.",
      // [Auto-translated] "Specifies how many columns this panel spans within the grid layout."
      effectiveColSpan: "Megadja, hogy ez a panel hány oszlopot ölel fel a rácselrendezésen belül.",
      // [Auto-translated] "This table lets you configure each grid column within the panel. It automatically sets the width percentage for each column based on the maximum number of elements in a row. To customize the grid layout, manually adjust these values and define the title width for all questions in each column."
      gridLayoutColumns: "Ez a táblázat lehetővé teszi az egyes rácsoszlopok konfigurálását a panelen. Automatikusan beállítja az egyes oszlopok szélességének százalékos arányát a sorban lévő elemek maximális száma alapján. A rácsos elrendezés testreszabásához manuálisan állítsa be ezeket az értékeket, és határozza meg az egyes oszlopokban lévő összes kérdés címszélességét."
    },
    paneldynamic: {
      // "A panel ID that is not visible to respondents."
      name: "Olyan panelazonosító, amely nem látható a válaszadók számára.",
      // "Type a panel subtitle."
      description: "Írja be a panel feliratát.",
      // "Use the magic wand icon to set a conditional rule that determines panel visibility."
      visibleIf: "A varázspálca ikonnal feltételes szabályt állíthat be, amely meghatározza a panel láthatóságát.",
      // [Auto-translated] "Use the magic wand icon to set a conditional rule that disables the read-only mode for the panel."
      enableIf: "A varázspálca ikonnal állítson be egy feltételes szabályt, amely letiltja a panel írásvédett módját.",
      // "Use the magic wand icon to set a conditional rule that prevents survey submission unless at least one nested question has an answer."
      requiredIf: "A varázspálca ikonnal állítson be egy feltételes szabályt, amely megakadályozza a felmérés elküldését, kivéve, ha legalább egy beágyazott kérdésre van válasz.",
      // "Applies to all questions within this dynamic panel. If you want to override this setting, define title alignment rules for individual questions. The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Top\" by default)."
      templateQuestionTitleLocation: "A panelen található összes kérdésre vonatkozik. Ha felül szeretné bírálni ezt a beállítást, határozzon meg címigazítási szabályokat az egyes kérdésekhez. Az \"Öröklés\" opció az oldalszintű (ha be van állítva) vagy a felmérés szintű beállítást (\"Alapértelmezetten felül\") alkalmazza.",
      // "Sets consistent width for question titles when they are aligned to the left of their question boxes. Accepts CSS values (px, %, in, pt, etc.)."
      templateQuestionTitleWidth: "Egységes szélességet állít be a kérdéscímekhez, ha azok a kérdésmezők bal oldalához vannak igazítva. Elfogadja a CSS értékeket (px, %, in, pt stb.).",
      // "Sets the location of an error message in relation to a question with invalid input. Choose between: \"Top\" - an error text is placed at the top of the question box; \"Bottom\" - an error text is placed at the bottom of the question box. The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Top\" by default)."
      templateErrorLocation: "Beállítja egy érvénytelen bevitelű kérdéssel kapcsolatos hibaüzenet helyét. Válasszon a következők közül: \"Felső\" - egy hibaüzenet kerül a kérdésmező tetejére; \"Alsó\" - egy hibaüzenet kerül a kérdésmező aljára. Az \"Öröklés\" opció az oldalszintű (ha be van állítva) vagy a felmérés szintű beállítást (\"Alapértelmezetten felül\") alkalmazza.",
      // "Sets the location of an error message in relation to all questions within the panel. The \"Inherit\" option applies the page-level (if set) or survey-level setting."
      errorLocation: "Beállítja a hibaüzenet helyét a panelen belüli összes kérdéssel kapcsolatban. Az \"Öröklés\" opció az oldalszintű (ha be van állítva) vagy a felmérés szintű beállítást alkalmazza.",
      // "Repositions the panel to the end of a selected page."
      page: "A kijelölt oldal végére helyezi a panelt.",
      // [Auto-translated] "Adds space or margin between the panel content and the left border of the panel box."
      indent: "Helyet vagy margót ad a panel tartalma és a paneldoboz bal szegélye közé.",
      // "Unselect to display the panel in one line with the previous question or panel. The setting doesn't apply if the panel is the first element in your form."
      startWithNewLine: "Törölje a jelölést, ha a panel egy sorban jelenik meg az előző kérdéssel vagy panellel. A beállítás nem érvényes, ha a panel az űrlap első eleme.",
      // "Choose from: \"Expanded\" - the panel is displayed in full and can be collapsed; \"Collapsed\" - the panel displays only the title and description and can be expanded; \"Locked\" - the panel is displayed in full and cannot be collapsed."
      state: "Válasszon a következők közül: \"Kibontott\" - a panel teljes egészében megjelenik és összecsukható; \"Összecsukott\" - a panel csak a címet és a leírást jeleníti meg, és bővíthető; \"Zárolva\" - a panel teljes egészében megjelenik, és nem csukható össze.",
      // "Sets the width of the panel in proportion to other survey elements in the same line. Accepts CSS values (px, %, in, pt, etc.)."
      width: "A panel szélességét az ugyanabban a sorban lévő többi földmérési elemhez viszonyítva állítja be. CSS-értékeket fogad el (px, %, in, pt stb.).",
      // "Type in a template for entry titles. Use {panelIndex} for the entry's general position and {visiblePanelIndex} for its order among visible entries. Insert these placeholders into the pattern to add automatic numbering."
      templateTitle: "Írjon be egy sablont a dinamikus panelcímekhez. Használja a {panelIndex} elemet a panel általános pozíciójához, a {visiblePanelIndex} értéket pedig a látható panelek közötti sorrendjéhez. Szúrja be ezeket a helyőrzőket a mintába az automatikus számozás hozzáadásához.",
      // "Type in a template for tab titles. Use {panelIndex} for an entry's general position and {visiblePanelIndex} for its order among visible entries. Insert these placeholders into the pattern to add automatic numbering."
      templateTabTitle: "Írjon be egy sablont a lapcímekhez. Használja a {panelIndex} elemet a panel általános pozíciójához, a {visiblePanelIndex} sablont pedig a látható panelek közötti sorrendjéhez. Szúrja be ezeket a helyőrzőket a mintába az automatikus számozás hozzáadásához.",
      // "A fallback text for tab titles that applies when the tab title pattern doesn't produce a meaningful value."
      tabTitlePlaceholder: "A lapcímek alapszövege, amely akkor érvényes, ha a lap címmintája nem ad értelmes értéket.",
      // "This setting allows you to control the visibility of individual entries within the dynamic panel. Use the `{panel}` placeholder to reference the current entry in your expression."
      templateVisibleIf: "Ezzel a beállítással szabályozhatja az egyes panelek láthatóságát a dinamikus panelen. A \"{panel}\" helyőrzővel hivatkozhat a kifejezés aktuális paneljére.",
      // "This setting is automatically inherited by all questions within this dynamic panel. If you want to override this setting, define title alignment rules for individual questions. The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Top\" by default)."
      titleLocation: "Ezt a beállítást a panelen található összes kérdés automatikusan örökli. Ha felül szeretné bírálni ezt a beállítást, határozzon meg címigazítási szabályokat az egyes kérdésekhez. Az \"Öröklés\" opció az oldalszintű (ha be van állítva) vagy a felmérés szintű beállítást (\"Alapértelmezetten felül\") alkalmazza.",
      // "The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Under the panel title\" by default)."
      descriptionLocation: "Az \"Öröklés\" opció az oldalszintű (ha be van állítva) vagy a felmérés szintű beállítást alkalmazza (\"Alapértelmezés szerint a panel címe alatt\").",
      // "Defines the position of a newly added entry. By default, new entries are added to the end. Select \"Next\" to insert a new entry after the current one."
      newPanelPosition: "Az újonnan hozzáadott panel helyét határozza meg. Alapértelmezés szerint az új panelek hozzáadódnak a végéhez. Válassza a \"Tovább\" lehetőséget, ha új panelt szeretne beilleszteni az aktuális után.",
      // [Auto-translated] "Duplicates answers from the last entry and assigns them to the next added entry."
      copyDefaultValueFromLastEntry: "Megkettőzi az utolsó bejegyzés válaszait, és hozzárendeli őket a következő hozzáadott bejegyzéshez.",
      // "Reference a question name to require a user to provide a unique response for this question in each entry."
      keyName: "Hivatkozzon egy kérdés nevére, hogy a felhasználónak egyedi választ kell adnia erre a kérdésre minden panelen.",
      // [Auto-translated] "Triggers a confirmation prompt before removing an entry."
      confirmDelete: "Megerősítő üzenetet indít el a bejegyzés eltávolítása előtt.",
      // [Auto-translated] "Assigns numbers to questions nested within the dynamic panel."
      showQuestionNumbers: "Számokat rendel a dinamikus panelbe ágyazott kérdésekhez."
    },
    matrixdynamic: {
      // [Auto-translated] "Triggers a confirmation prompt before removing a row."
      confirmDelete: "Megerősítő kérést indít el a sor eltávolítása előtt.",
      // [Auto-translated] "Automatically expands the detail section when a new row is added to the matrix."
      detailPanelShowOnAdding: "Automatikusan kibontja a részletszakaszt, amikor új sort ad hozzá a mátrixhoz."
    },
    // "Duplicates answers from the last row and assigns them to the next added dynamic row."
    copyDefaultValueFromLastEntry: "Megkettőzi a válaszokat az utolsó sorból, és hozzárendeli őket a következő hozzáadott dinamikus sorhoz.",
    // "This setting allows you to assign a default answer value based on an expression. The expression can include basic calculations - `{q1_id} + {q2_id}`, Boolean expressions, such as `{age} > 60`, and functions: `iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, etc. The value determined by this expression serves as the initial default value that can be overridden by a respondent's manual input."
    defaultValueExpression: "Ezzel a beállítással alapértelmezett válaszértéket rendelhet hozzá egy kifejezés alapján. A kifejezés tartalmazhat alapvető számításokat - '{q1_id} + {q2_id}', logikai kifejezéseket, például \"{age} > 60\" és függvényeket: 'iif()', 'today()', 'age()', 'min()', 'max()', 'avg()' stb. A kifejezés által meghatározott érték a kezdeti alapértelmezett érték, amelyet a válaszadó kézi bevitele felülbírálhat.",
    // "Use the magic wand icon to set a conditional rule that determines when a respondent's input is reset to the value based on the \"Default value expression\" or \"Set value expression\" or to the \"Default answer\" value (if either is set)."
    resetValueIf: "A varázspálca ikonnal feltételes szabályt állíthat be, amely meghatározza, hogy a válaszadó bemenete mikor áll vissza az \"Alapértelmezett érték kifejezés\" vagy az \"Értékkifejezés beállítása\" vagy az \"Alapértelmezett válasz\" érték alapján (ha bármelyik be van állítva).",
    // "Use the magic wand icon to set a conditional rule that determines when to run the \"Set value expression\" and dynamically assign the resulting value as a response."
    setValueIf: "A varázspálca ikonnal beállíthat egy feltételes szabályt, amely meghatározza, hogy mikor kell futtatni az \"Érték beállítása kifejezést\", és dinamikusan hozzárendelni az eredményül kapott értéket válaszként.",
    // "Specify an expression that defines the value to be set when the conditions in the \"Set value if\" rule are met. The expression can include basic calculations - `{q1_id} + {q2_id}`, Boolean expressions, such as `{age} > 60`, and functions: `iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, etc. The value determined by this expression can be overridden by a respondent's manual input."
    setValueExpression: "Adjon meg egy kifejezést, amely meghatározza az \"Érték beállítása, ha\" szabály feltételeinek teljesülése esetén beállítandó értéket. A kifejezés tartalmazhat alapvető számításokat - '{q1_id} + {q2_id}', logikai kifejezéseket, például \"{age} > 60\" és függvényeket: 'iif()', 'today()', 'age()', 'min()', 'max()', 'avg()' stb. A kifejezés által meghatározott értéket felülbírálhatja a válaszadó kézi bevitele.",
    // "Survey Creator allows you to manually adjust the inline widths of form elements to control the layout. If this doesn't produce the desired outcome, you can enable the grid layout, which structures form elements using a column-based system. To configure layout columns, select a page or panel and use the \"Question Settings\" → \"Grid columns\" table. To adjust how many columns a question spans, select it and set the desired value in the \"Layout\" → \"Column span\" field."
    gridLayoutEnabled: "A Survey Creator lehetővé teszi az űrlapelemek szövegközi szélességének manuális beállítását az elrendezés vezérléséhez. Ha ez nem hozza meg a kívánt eredményt, engedélyezheti a rácselrendezést, amely oszlopalapú rendszer használatával struktúrákat alkot elemeket. Az elrendezésoszlopok konfigurálásához válasszon ki egy oldalt vagy panelt, és használja a \"Kérdésbeállítások\" → a \"Rácsoszlopok\" táblázatot. Annak beállításához, hogy egy kérdés hány oszlopra terjed ki, válassza ki azt, és állítsa be a kívánt értéket az \"Elrendezés\" → az \"Oszloptartomány\" mezőben.",
    question: {
      // "A question ID that is not visible to respondents."
      name: "A válaszadók számára nem látható kérdésazonosító.",
      // "Type a question subtitle."
      description: "Írja be a kérdés alcímét.",
      // "Use the magic wand icon to set a conditional rule that determines question visibility."
      visibleIf: "A varázspálca ikonnal állítson be egy feltételes szabályt, amely meghatározza a kérdések láthatóságát.",
      // [Auto-translated] "Use the magic wand icon to set a conditional rule that disables the read-only mode for the question."
      enableIf: "A varázspálca ikonnal állítson be egy feltételes szabályt, amely letiltja a kérdés írásvédett módját.",
      // "Use the magic wand icon to set a conditional rule that prevents survey advancing or submission unless the question received an answer."
      requiredIf: "A varázspálca ikonnal állítson be egy feltételes szabályt, amely megakadályozza a felmérés előrehaladását vagy elküldését, kivéve, ha a kérdésre választ kapott.",
      // [Auto-translated] "Unselect to display the question in one line with the previous question or panel. The setting doesn't apply if the question is the first element in your form."
      startWithNewLine: "Törölje a jelölést, ha a kérdést egy sorban szeretné megjeleníteni az előző kérdéssel vagy panellel. A beállítás nem érvényes, ha a kérdés az űrlap első eleme.",
      // "Repositions the question to the end of a selected page."
      page: "A kérdést a kijelölt oldal végére helyezi.",
      // "Choose from: \"Expanded\" - the question box is displayed in full and can be collapsed; \"Collapsed\" - the question box displays only the title and description and can be expanded; \"Locked\" - the question box is displayed in full and cannot be collapsed."
      state: "Válasszon a következők közül: \"Kibontott\" - a kérdésmező teljes egészében megjelenik és összecsukható; \"Összecsukott\" - a kérdésmező csak a címet és a leírást jeleníti meg, és kibontható; \"Zárolva\" - a kérdésmező teljes egészében megjelenik, és nem csukható össze.",
      // "Overrides title alignment rules defined on a panel, page, or survey level. When set to \"Hidden\", it also hides question descriptions. The \"Inherit\" option applies any higher-level settings (if set) or survey-level setting (\"Top\" by default)."
      titleLocation: "Felülbírálja a panel-, oldal- vagy felmérésszinten definiált címigazítási szabályokat. Az \"Öröklés\" opció minden magasabb szintű beállítást (ha be van állítva) vagy felmérésszintű beállítást (\"Alapértelmezetten Felül\") alkalmaz.",
      // "The \"Inherit\" option applies the survey-level setting (\"Under the question title\" by default)."
      descriptionLocation: "Az \"Öröklés\" opció a felmérés szintű beállítást alkalmazza (\"Alapértelmezés szerint a kérdés címe alatt\").",
      // "Sets the location of an error message in relation to the question with invalid input. Choose between: \"Top\" - an error text is placed at the top of the question box; \"Bottom\" - an error text is placed at the bottom of the question box. The \"Inherit\" option applies the survey-level setting (\"Top\" by default)."
      errorLocation: "Beállítja az érvénytelen bevitelű kérdéssel kapcsolatos hibaüzenet helyét. Válasszon a következők közül: \"Felső\" - egy hibaüzenet kerül a kérdésmező tetejére; \"Alsó\" - egy hibaüzenet kerül a kérdésmező aljára. Az \"Öröklés\" opció a felmérés szintű beállítást alkalmazza (\"Felül\" alapértelmezés szerint).",
      // "Adds space or margin between the question content and the left border of the question box."
      indent: "Térközt vagy margót ad a kérdés tartalma és a kérdésmező bal szegélye közé.",
      // "Sets the width of the question in proportion to other survey elements in the same line. Accepts CSS values (px, %, in, pt, etc.)."
      width: "A kérdés szélességét az ugyanabban a sorban lévő többi földmérési elemhez viszonyítva állítja be. CSS-értékeket fogad el (px, %, in, pt stb.).",
      // "Choose from: \"On lost focus\" - the value is updated when the input field loses focus; \"While typing\" - the value is updated in real-time, as users are typing. The \"Inherit\" option applies the survey-level setting (\"On lost focus\" by default)."
      textUpdateMode: "Válasszon a következők közül: \"Elveszett fókuszban\" - az érték frissül, amikor a beviteli mező elveszíti a fókuszt; \"Gépelés közben\" - az érték valós időben frissül, ahogy a felhasználók gépelnek. Az \"Öröklés\" opció a felmérés szintű beállítást alkalmazza (\"Alapértelmezés szerint elveszett fókuszban\").",
      // [Auto-translated] "You can use any web service as a data source for multiple-choice questions. To populate choice values, enter the URL of the service providing the data."
      url: "Bármely webszolgáltatást használhat adatforrásként feleletválasztós kérdésekhez. A választási lehetőségek értékeinek feltöltéséhez adja meg az adatokat szolgáltató szolgáltatás URL-címét.",
      // [Auto-translated] "A comparison operation used to filter the drop-down list."
      searchMode: "A legördülő lista szűrésére szolgáló összehasonlító művelet.",
      // [Auto-translated] "Long texts in choice options will automatically generate line breaks to fit within the drop-down menu. Unselect if you want the texts to clip."
      textWrapEnabled: "A választási lehetőségekben szereplő hosszú szövegek automatikusan sortöréseket generálnak, hogy elférjenek a legördülő menüben. Törölje a jelet a jelölőnégyzetből, ha le szeretné vágni a szövegeket.",
      // [Auto-translated] "Specifies how many columns this question spans within the grid layout."
      effectiveColSpan: "Megadja, hogy ez a kérdés hány oszlopra terjed ki a rácsos elrendezésen belül."
    },
    surveyvalidator: {
      // "Use the magic wand icon to define when the question's value is considered valid."
      expression: "A varázspálca ikonnal meghatározhatja, hogy a kérdés értéke mikor tekinthető érvényesnek.",
      // [Auto-translated] "Errors block progress until resolved. Warnings highlight issues but allow to continue. Informational notes offer additional context or neutral guidance. When using warnings or informational notes, we recommend enabling immediate validation: \"Survey\" → \"Validation\" → \"Run validation\" → \"After an answer has changed\"."
      notificationType: "A hibák blokkolják a folyamatot, amíg meg nem oldják. A figyelmeztetések kiemelik a problémákat, de lehetővé teszik a folytatást. A tájékoztató megjegyzések további kontextust vagy semleges útmutatást nyújtanak. Figyelmeztetések vagy tájékoztató megjegyzések használata esetén javasoljuk, hogy engedélyezze az azonnali ellenőrzést: \"Felmérés\" → \"Ellenőrzés\" → \"Ellenőrzés futtatása\" → \"A válasz megváltozása után\"."
    },
    signaturepad: {
      // "Sets the width of the displayed signature area and the resulting image."
      signatureWidth: "Beállítja a megjelenített aláírási terület szélességét és az eredményül kapott képet.",
      // "Sets the height of the displayed signature area and the resulting image."
      signatureHeight: "Beállítja a megjelenített aláírási terület magasságát és az eredményül kapott képet.",
      // "Select if you want the signature area to fill all available space within the question box while maintaining the default 3:2 aspect ratio. When custom width and height values are set, the setting will keep the aspect ratio of these dimensions."
      signatureAutoScaleEnabled: "Jelölje be, ha azt szeretné, hogy az aláírási terület kitöltse a kérdésmezőben rendelkezésre álló összes helyet, miközben megtartja az alapértelmezett 3:2 képarányt. Egyéni szélességi és magassági értékek beállításakor a beállítás megtartja ezeknek a méreteknek a méretarányát."
    },
    file: {
      // "Specifies the display height of uploaded images in the preview and the actual height of images taken with the camera. In single file upload mode, the display height is limited by the preview area; in multiple file upload mode, it is limited by the thumbnail area."
      imageHeight: "Megadja a feltöltött képek megjelenítési magasságát az előnézetben és a fényképezőgéppel készített képek tényleges magasságát. Egyfájlfeltöltési módban a megjelenítési magasságot az előnézeti terület korlátozza; Több fájl feltöltési módban a miniatűr terület korlátozza.",
      // "Specifies the display width of uploaded images in the preview and the actual width of images taken with the camera. In single file upload mode, the display width is limited by the preview area; in multiple file upload mode, it is limited by the thumbnail area."
      imageWidth: "Megadja a feltöltött képek megjelenítési szélességét az előnézetben és a fényképezőgéppel készített képek tényleges szélességét. Egyfájlfeltöltési módban a megjelenítési szélességet az előnézeti terület korlátozza; Több fájl feltöltési módban a miniatűr terület korlátozza.",
      // [Auto-translated] "Displays thumbnail previews for uploaded files when possible. Unselect if you want to show file icons instead."
      allowImagesPreview: "Ha lehetséges, miniatűr előnézeteket jelenít meg a feltöltött fájlokhoz. Törölje a jelölést, ha inkább fájlikonokat szeretne megjeleníteni."
    },
    image: {
      // "The \"Auto\" option automatically determines the suitable mode for display - Image, Video, or YouTube - based on the source URL provided."
      contentMode: "Az \"Automatikus\" opció automatikusan meghatározza a megjelenítéshez megfelelő módot - Kép, Videó vagy YouTube - a megadott forrás URL alapján."
    },
    imagepicker: {
      // [Auto-translated] "Overrides the minimum and maximum height values."
      imageHeight: "Felülbírálja a minimális és maximális magassági értékeket.",
      // [Auto-translated] "Overrides the minimum and maximum width values."
      imageWidth: "Felülbírálja a minimális és maximális szélességi értékeket.",
      // [Auto-translated] "\"Value\" serves as an item ID used in conditional rules; \"Text\" is displayed to respondents."
      choices: "Az \"Érték\" a feltételes szabályokban használt elemazonosítóként szolgál; A válaszadók számára a \"Szöveg\" jelenik meg.",
      // "Choose between \"Image\" and \"Video\" to set the content mode of the media selector. If \"Image\" is selected, ensure that all options provided are image files in the following formats: JPEG, GIF, PNG, APNG, SVG, BMP, ICO. Similarly, if \"Video\" is selected, ensure that all options are direct links to video files in the following formats: MP4, MOV, WMV, FLV, AVI, MKV. Please note that YouTube links are not supported for video options."
      contentMode: "Válasszon a \"Kép\" és a \"Videó\" között a médiaválasztó tartalommódjának beállításához. Ha a \"Kép\" van kiválasztva, győződjön meg arról, hogy az összes rendelkezésre álló opció a következő formátumú képfájlok: JPEG, GIF, PNG, APNG, SVG, BMP, ICO. Hasonlóképpen, ha a \"Video\" van kiválasztva, győződjön meg arról, hogy az összes opció közvetlen link a következő formátumú videofájlokhoz: MP4, MOV, WMV, FLV, AVI, MKV. Felhívjuk figyelmét, hogy a YouTube-linkek nem támogatottak a videóbeállításoknál."
    },
    text: {
      // [Auto-translated] "This setting only resizes the input field and doesn't affect the width of the question box. To limit the accepted input length, go to \"Validation\" → \"Maximum character limit\"."
      size: "Ez a beállítás csak a beviteli mezőt méretezi át, és nem befolyásolja a kérdésmező szélességét. Az elfogadott beviteli hossz korlátozásához lépjen az \"Ellenőrzés\" → a \"Maximális karakterkorlát\" menüpontra."
    },
    comment: {
      // [Auto-translated] "Sets the number of displayed lines in the input field. If the input takes up more lines, the scroll bar will appear."
      rows: "Beállítja a beviteli mezőben megjelenített sorok számát. Ha a bemenet több sort foglal el, megjelenik a görgetősáv."
    },
    // survey templates
    survey: {
      // "Select if you want to prevent respondents from filling out your survey."
      readOnly: "Válassza ki, ha meg szeretné akadályozni, hogy a válaszadók kitöltsék a felmérést.",
      // "Sets the location of the progress bar. The \"Auto\" value displays the progress bar above or below the survey header."
      progressBarLocation: "Beállítja a folyamatjelző sáv helyét. Az \"Automatikus\" érték megjeleníti a folyamatjelző sávot a felmérés fejléce felett vagy alatt."
    },
    matrixdropdowncolumn: {
      // "A column ID that is not visible to respondents."
      name: "A válaszadók számára nem látható oszlopazonosító.",
      // "When enabled for a column, a respondent is required to provide a unique response for each question within this column."
      isUnique: "Ha engedélyezve van egy oszlophoz, a válaszadónak egyedi választ kell adnia az oszlop minden kérdésére.",
      // "Sets the number of displayed lines in the input field. If the input takes up more lines, the scroll bar will appear."
      rows: "Beállítja a beviteli mezőben megjelenített sorok számát. Ha a bemenet több sort foglal el, megjelenik a görgetősáv.",
      // "Use the magic wand icon to set a conditional rule that determines column visibility."
      visibleIf: "A varázspálca ikonnal feltételes szabályt állíthat be, amely meghatározza az oszlop láthatóságát.",
      // [Auto-translated] "Use the magic wand icon to set a conditional rule that disables the read-only mode for the column."
      enableIf: "A varázspálca ikonnal állítson be egy feltételes szabályt, amely letiltja az oszlop írásvédett módját.",
      // "Use the magic wand icon to set a conditional rule that prevents survey submission unless at least one nested question has an answer."
      requiredIf: "A varázspálca ikonnal állítson be egy feltételes szabályt, amely megakadályozza a felmérés elküldését, kivéve, ha legalább egy beágyazott kérdésre van válasz.",
      // "When selected, creates an individual column for each choice option."
      showInMultipleColumns: "Ha be van jelölve, minden választási lehetőséghez külön oszlopot hoz létre.",
      // [Auto-translated] "Arranges choice options in a multi-column layout. When set to 0, the options are displayed in a single line. When set to -1, the actual value is inherited from the \"Nested column count\" property of the parent matrix."
      colCount: "Többoszlopos elrendezésben rendezi a választási lehetőségeket. Ha 0-ra van állítva, a beállítások egyetlen sorban jelennek meg. Ha -1-re van állítva, a tényleges érték a szülőmátrix \"Beágyazott oszlopok száma\" tulajdonságából öröklődik."
    },
    slider: {
      // "The lowest number that users can select."
      min: "A felhasználók által választható legalacsonyabb szám.",
      // "The highest number that users can select."
      max: "A felhasználók által választható legnagyobb szám.",
      // "The interval between selectable scale values. For example, a step of 5 will allow users to select 0, 5, 10, etc."
      step: "A választható skálaértékek közötti intervallum. Például egy 5-ös lépés lehetővé teszi a felhasználók számára, hogy 0, 5, 10 stb.",
      // "The minimum distance between the slider thumbs a user can set."
      minRangeLength: "A felhasználó által beállítható csúszka hüvelykujjak közötti minimális távolság.",
      // "The maximum distance between the slider thumbs a user can set."
      maxRangeLength: "A felhasználó által beállítható csúszka hüvelykujjak közötti maximális távolság.",
      // "Specifies how many scale labels to generate. A value of -1 means the number is calculated automatically based on the Min value and Max value."
      labelCount: "Megadja, hogy hány léptékcímkét kell létrehozni. A -1 érték azt jelenti, hogy a szám kiszámítása automatikusan megtörténik a Min érték és a Max érték alapján.",
      // "Use `{0}` as a placeholder for the actual value."
      labelFormat: "Használja a \"{0}\" szót a tényleges érték helyőrzőjeként.",
      // "Allows you to define custom labels at specific values and optionally assign corresponding text to them (e.g., 0 = \"Poor\", 100 = \"Excellent\")."
      customLabels: "Lehetővé teszi egyéni címkék meghatározását adott értékeken, és opcionálisan hozzájuk rendelheti a megfelelő szöveget (pl. 0 = \"Gyenge\", 100 = \"Kiváló\").",
      // "Use `{0}` as a placeholder for the actual value."
      tooltipFormat: "Használja a \"{0}\" szót a tényleges érték helyőrzőjeként.",
      // "Allows users to move one thumb past the other."
      allowSwap: "Lehetővé teszi a felhasználók számára, hogy egyik hüvelykujjukat a másik mellett mozgassa.",
      // [Auto-translated] "Displays a button that clears the selected slider value and sets it to undefined."
      allowClear: "Megjelenít egy gombot, amely törli a kijelölt csúszka értékét, és nem definiált értékre állítja.",
      // "Defines the slider's minimum value dynamically using an expression. Supports basic calculations (e.g, `{q1_id} + {q2_id}`), Boolean logic (e.g., `{age} > 60`), and functions like `iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, and more."
      minValueExpression: "Dinamikusan határozza meg a csúszka minimális értékét egy kifejezés segítségével. Támogatja az alapvető számításokat (pl. '{q1_id} + {q2_id}'), a logikai logikát (pl. '{age} > 60'), valamint az olyan függvényeket, mint 'iif()', 'today()', 'age()', 'min()', 'max()', 'avg()' és még sok más.",
      // "Defines the slider's maximum value dynamically using an expression. Supports basic calculations (e.g, `{q1_id} + {q2_id}`), Boolean logic (e.g., `{age} > 60`), and functions like `iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, and more."
      maxValueExpression: "Dinamikusan határozza meg a csúszka maximális értékét egy kifejezés segítségével. Támogatja az alapvető számításokat (pl. '{q1_id} + {q2_id}'), a logikai logikát (pl. '{age} > 60'), valamint az olyan függvényeket, mint 'iif()', 'today()', 'age()', 'min()', 'max()', 'avg()' és még sok más."
    },
    // [Auto-translated] "Makes this choice exclusive. When selected by a user, it will automatically deselect all other options in the question."
    isExclusive: "Kizárólagossá teszi ezt a választást. Ha egy felhasználó kiválasztja, automatikusan törli a kérdés összes többi beállításának kijelölését.",
    matrixcolumn: {
      // [Auto-translated] "Makes checkboxes in this column exclusive. When selected by a user, they will automatically deselect all other checkboxes in the same row."
      isExclusive: "Az oszlopban lévő jelölőnégyzetek kizárólagossá válnak. Ha a felhasználó kiválasztja, automatikusan törli az összes többi jelölőnégyzet jelölését ugyanabban a sorban."
    },
    // [Auto-translated] "Select if uppercase and lowercase letters in the regular expression must be treated as equivalent."
    caseInsensitive: "Válassza ki, hogy a reguláris kifejezés kis- és nagybetűit egyenértékűként kell-e kezelni.",
    // "Choose from: \"Static\" - sets a fixed width; \"Responsive\" - makes the survey occupy the full width of the screen; \"Auto\" - applies either of the two depending on the question types used."
    widthMode: "Válasszon a következők közül: \"Statikus\" - rögzített szélességet állít be; \"Reszponzív\" - a felmérés a képernyő teljes szélességét elfoglalja; \"Automatikus\" - a használt kérdéstípusoktól függően a kettő egyikét alkalmazza.",
    // [Auto-translated] "Assign a unique cookie value for your survey. The cookie will be set in a respondent's browser upon survey completion to prevent repetitive survey submissions."
    cookieName: "Rendeljen egyedi cookie-értéket a felméréshez. A cookie a felmérés kitöltése után a válaszadó böngészőjében kerül beállításra, hogy megakadályozza az ismétlődő felmérések beküldését.",
    // [Auto-translated] "Paste an image link (no size limits) or click the folder icon to browse a file from your computer (up to 64KB)."
    logo: "Illesszen be egy képhivatkozást (méretkorlátozás nélkül), vagy kattintson a mappa ikonra egy fájl böngészéséhez a számítógépről (legfeljebb 64 KB).",
    // [Auto-translated] "Sets a logo width in CSS units (px, %, in, pt, etc.)."
    logoWidth: "Beállítja az embléma szélességét CSS egységekben (px, %, in, pt stb.).",
    // [Auto-translated] "Sets a logo height in CSS units (px, %, in, pt, etc.)."
    logoHeight: "Beállítja az embléma magasságát CSS egységekben (px, %, in, pt stb.).",
    // "Choose from: \"None\" - image maintains its original size; \"Contain\" - image is resized to fit while maintaining its aspect ratio; \"Cover\" - image fills the entire box while maintaining its aspect ratio; \"Fill\" - image is stretched to fill the box without maintaining its aspect ratio."
    logoFit: "Válasszon a következők közül: \"Nincs\" - a kép megőrzi eredeti méretét; \"Tartalmaz\" - a kép átméreteződik, hogy illeszkedjen, miközben megtartja képarányát; \"Borító\" - a kép kitölti az egész dobozt, miközben megtartja képarányát; \"Kitöltés\" - a kép a doboz kitöltéséhez nyúlik a képarány megtartása nélkül.",
    // [Auto-translated] "Select if you want the survey to auto-advance to the next page once a respondent has answered all questions on the current page. This feature won't apply if the last question on the page is open-ended or allows multiple answers."
    autoAdvanceEnabled: "Válassza ki, hogy szeretné-e, hogy a felmérés automatikusan továbblépjen a következő oldalra, miután a válaszadó megválaszolta az aktuális oldalon található összes kérdést. Ez a funkció nem érvényes, ha az oldal utolsó kérdése nyitott végű, vagy több választ is lehetővé tesz.",
    // [Auto-translated] "Select if you want the survey to complete automatically after a respondent answers all questions."
    autoAdvanceAllowComplete: "Válassza ki, hogy szeretné-e, hogy a felmérés automatikusan kitöltődjön, miután a válaszadó megválaszolta az összes kérdést.",
    // [Auto-translated] "Sets the visibility of navigation buttons on a page."
    showNavigationButtons: "Beállítja a navigációs gombok láthatóságát az oldalon.",
    // [Auto-translated] "Sets the location of navigation buttons on a page."
    navigationButtonsLocation: "Beállítja a navigációs gombok helyét az oldalon.",
    // [Auto-translated] "Enable the preview page with all or answered questions only."
    showPreviewBeforeComplete: "Engedélyezze az előnézeti oldalt csak az összes vagy megválaszolt kérdéssel.",
    // "Applies to all questions within the survey. This setting can be overridden by title alignment rules at lower levels: panel, page, or question. A lower-level setting will override those on a higher level."
    questionTitleLocation: "A felmérésben szereplő összes kérdésre vonatkozik. Ezt a beállítást felülbírálhatják az alacsonyabb szinteken lévő címigazítási szabályok: panel, oldal vagy kérdés. Az alacsonyabb szintű beállítás felülírja a magasabb szinten lévőket.",
    // [Auto-translated] "A symbol or a sequence of symbols indicating that an answer is required."
    requiredMark: "Egy szimbólum vagy szimbólumsorozat, amely jelzi, hogy válaszolni kell.",
    // [Auto-translated] "Enter a number or letter with which you want to start numbering."
    questionStartIndex: "Írja be azt a számot vagy betűt, amellyel a számozást kezdeni szeretné.",
    // "Sets the location of an error message in relation to the question with invalid input. Choose between: \"Top\" - an error text is placed at the top of the question box; \"Bottom\" - an error text is placed at the bottom of the question box."
    questionErrorLocation: "Beállítja az érvénytelen bevitelű kérdéssel kapcsolatos hibaüzenet helyét. Válasszon a következők közül: \"Felső\" - egy hibaüzenet kerül a kérdésmező tetejére; \"Alsó\" - egy hibaüzenet kerül a kérdésmező aljára.",
    // [Auto-translated] "Select if you want the first input field on each page ready for text entry."
    autoFocusFirstQuestion: "Válassza ki, ha azt szeretné, hogy az egyes oldalak első beviteli mezője készen álljon a szövegbevitelre.",
    // "Keeps the original order of questions or randomizes them. The effect of this setting is only visible in the Preview tab."
    questionOrder: "Megtartja a kérdések eredeti sorrendjét, vagy véletlenszerűvé teszi őket. A beállítás hatása csak az Előnézet lapon látható.",
    // [Auto-translated] "For text entry questions only."
    maxTextLength: "Csak szövegbeviteli kérdések esetén.",
    // [Auto-translated] "For question comments only."
    maxCommentLength: "Csak kérdésekhez fűzött megjegyzésekhez.",
    // [Auto-translated] "Sets the number of displayed lines in text areas for question comments. If the input takes up more lines, the scroll bar appears."
    commentAreaRows: "Beállítja a szövegterületeken megjelenített sorok számát a kérdésmegjegyzésekhez. Ha a bevitel több sort foglal el, megjelenik a görgetősáv.",
    // [Auto-translated] "Select if you want question comments and Long Text questions to auto-grow in height based on the entered text length."
    autoGrowComment: "Válassza ki, ha azt szeretné, hogy a kérdésmegjegyzések és a hosszú szöveges kérdések magassága automatikusan növekedjen a beírt szöveg hossza alapján.",
    // [Auto-translated] "For question comments and Long Text questions only."
    allowResizeComment: "Csak kérdésekhez és hosszú szöveges kérdésekhez.",
    // [Auto-translated] "Custom variables serve as intermediate or auxiliary variables used in form calculations. They take respondent inputs as source values. Each custom variable has a unique name and an expression it's based on."
    calculatedValues: "Az egyéni változók köztes vagy kiegészítő változókként szolgálnak az űrlapszámításokban. A válaszadó bemeneteit forrásértékként veszik fel. Minden egyéni változónak egyedi neve és egy kifejezése van, amelyen alapul.",
    // [Auto-translated] "Select if you wish the calculated value of the expression to be saved along with survey results."
    includeIntoResult: "Válassza ezt a lehetőséget, ha a kifejezés számított értékét a felmérés eredményeivel együtt szeretné menteni.",
    // "A trigger is an event or condition that is based on an expression. Once the expression is evaluated to \"true\", a trigger sets off an action. Such an action can optionally have a target question it affects."
    triggers: "Az eseményindító egy kifejezésen alapuló esemény vagy feltétel. Miután a kifejezés \"true\" (igaz) értékre lett kiértékelve, az eseményindító elindít egy műveletet. Egy ilyen műveletnek opcionálisan lehet egy célkérdése, amelyet érint.",
    // [Auto-translated] "Choose whether or not to clear values for questions hidden by conditional logic and when to do it."
    clearInvisibleValues: "Válassza ki, hogy törli-e a feltételes logika által elrejtett kérdések értékeit, és mikor tegye meg.",
    // "Choose from: \"On lost focus\" - the value is updated when the input field loses focus; \"While typing\" - the value is updated in real-time, as users are typing."
    textUpdateMode: "Válasszon a következők közül: \"Elveszett fókuszban\" - az érték frissül, amikor a beviteli mező elveszíti a fókuszt; \"Gépelés közben\" - az érték valós időben frissül, ahogy a felhasználók gépelnek.",
    // [Auto-translated] "The left value serves as a column ID used in conditional rules, the right value is displayed to respondents."
    columns: "A bal oldali érték a feltételes szabályokban használt oszlopazonosítóként szolgál, a jobb oldali érték pedig a válaszadók számára jelenik meg.",
    // "The left value serves as a row ID used in conditional rules, the right value is displayed to respondents."
    rows: "A bal oldali érték a feltételes szabályokban használt sorazonosítóként szolgál, a jobb oldali érték a válaszadók számára jelenik meg.",
    // [Auto-translated] "Accepts CSS values (px, %, in, pt, etc.)."
    columnMinWidth: "CSS-értékeket fogad el (px, %, in, pt stb.).",
    // [Auto-translated] "Accepts CSS values (px, %, in, pt, etc.)."
    rowTitleWidth: "CSS-értékeket fogad el (px, %, in, pt stb.).",
    // [Auto-translated] "Visible only if at least one column displays total values set with \"Aggregation method\" or \"Total value expression\"."
    totalText: "Csak akkor látható, ha legalább egy oszlopban az \"Összesítési módszer\" vagy az \"Összesített érték kifejezés\" értékkel beállított összes érték jelenik meg.",
    // "Sets the location of an error message in relation to a cell with invalid input. The \"Inherit\" option applies the setting from the \"Error message alignment\" property."
    cellErrorLocation: "Beállítja a hibaüzenet helyét egy érvénytelen bevitelű cellával kapcsolatban. Az \"Öröklés\" opció a \"Hibaüzenetek igazítása\" tulajdonság beállítását alkalmazza.",
    // "Sets the location of error messages for questions nested in detail sections. The \"Inherit\" option applies the setting from the \"Error message alignment\" property."
    detailErrorLocation: "Beállítja a hibaüzenetek helyét a részletes szakaszokba ágyazott kérdésekhez. Az \"Öröklés\" opció a \"Hibaüzenetek igazítása\" tulajdonság beállítását alkalmazza.",
    // "When the \"Prevent duplicate responses\" property is enabled, a respondent attempting to submit a duplicate entry will receive the following error message."
    keyDuplicationError: "Ha az \"Ismétlődő válaszok megakadályozása\" tulajdonság engedélyezve van, az ismétlődő bejegyzést beküldeni próbáló válaszadó a következő hibaüzenetet kapja.",
    matrixdropdown: {
      // [Auto-translated] "When the \"Prevent duplicate responses\" property is enabled for a matrix column, a respondent attempting to submit a duplicate entry will receive the following error message."
      keyDuplicationError: "Ha az \"Ismétlődő válaszok megakadályozása\" tulajdonság engedélyezve van egy mátrixoszlophoz, az ismétlődő bejegyzést beküldeni próbáló válaszadó a következő hibaüzenetet kapja."
    },
    // [Auto-translated] "Allows you to calculate total values based on an expression. The expression can include basic calculations (`{q1_id} + {q2_id}`), Boolean expressions (`{age} > 60`) and functions ('iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, etc.)."
    totalExpression: "Lehetővé teszi az összesített értékek kiszámítását egy kifejezés alapján. A kifejezés tartalmazhat alapvető számításokat ('{q1_id} + {q2_id}'), logikai kifejezéseket ('{age} > 60') és függvényeket ('iif()', 'today()', 'age()', 'min()', 'max()', 'avg()' stb.).",
    // "Reference a column ID to require a user to provide a unique response for each question within the specified column."
    keyName: "Ha a megadott oszlop azonos értékeket tartalmaz, a felmérés a \"Nem egyedi kulcsérték\" hibát adja vissza.",
    // "Type a subtitle."
    description: "Írjon be egy feliratot.",
    // [Auto-translated] "Choose a language to begin creating your survey. To add a translation, switch to a new language and translate the original text here or in the Translations tab."
    locale: "Válassza ki a nyelvet a felmérés létrehozásának megkezdéséhez. Fordítás hozzáadásához váltson új nyelvre, és fordítsa le az eredeti szöveget itt vagy a Fordítások lapon.",
    // "Sets the location of a detail section in relation to a row. Choose from: \"None\" - no detail section is added; \"Under the row\" - a detail section is placed under each row of the matrix; \"Under the row, display one detail section only\" - a detail section is displayed under a single row only, the remaining sections are collapsed."
    detailPanelMode: "Beállítja a részletszakasz helyét egy sorhoz képest. Válasszon a következők közül: \"Nincs\" - nincs bővítés; \"A sor alatt\" - a mátrix minden sora alá sorbővítés kerül; \"A sor alatt csak egy sor bővítés megjelenítése\" - a bővítés csak egyetlen sor alatt jelenik meg, a fennmaradó sorbővítések összecsukódnak.",
    // "Choose from: \"None\" - image maintains its original size; \"Contain\" - image is resized to fit while maintaining its aspect ratio; \"Cover\" - image fills the entire box while maintaining its aspect ratio; \"Fill\" - image is stretched to fill the box without maintaining its aspect ratio."
    imageFit: "Válasszon a következők közül: \"Nincs\" - a kép megőrzi eredeti méretét; \"Tartalmaz\" - a kép átméreteződik, hogy illeszkedjen, miközben megtartja képarányát; \"Borító\" - a kép kitölti az egész dobozt, miközben megtartja képarányát; \"Kitöltés\" - a kép a doboz kitöltéséhez nyúlik a képarány megtartása nélkül.",
    // "The \"Inherit\" option applies a survey-level setting (\"Disabled\" by default)."
    autoGrow: "Fokozatosan növeli a beviteli mező magasságát az adatok bevitele közben. Felülbírálja a \"Beviteli mező magassága (sorokban)\" beállítást.",
    // [Auto-translated] "The \"Inherit\" option applies a survey-level setting (\"Enabled\" by default)."
    allowResize: "Az \"Öröklés\" opció felmérési szintű beállítást alkalmaz (\"Alapértelmezés szerint engedélyezve\").",
    // [Auto-translated] "A time interval in seconds after which the survey auto-advances to the \"Thank You\" page. When set to 0, counts the time spent on the survey."
    timeLimit: "Egy időintervallum másodpercben, amely után a felmérés automatikusan a \"Köszönöm\" oldalra lép. Ha 0-ra van állítva, a felméréssel töltött időt számolja.",
    // [Auto-translated] "A time interval in seconds after which the survey auto-advances to the next page. Hides the \"Previous\" navigation button. When set to 0, counts the time spent on the current page."
    timeLimitPerPage: "Időintervallum másodpercben, amely után a felmérés automatikusan a következő oldalra lép. Elrejti az \"Előző\" navigációs gombot. Ha 0-ra van állítva, az aktuális oldalon töltött időt számolja.",
    // [Auto-translated] "Enable this option to trigger validation when a user focuses on an empty input field and then leaves it without making any changes."
    validateVisitedEmptyFields: "Engedélyezze ezt a beállítást, ha érvényesítést indít el, amikor a felhasználó egy üres beviteli mezőre összpontosít, majd módosítás nélkül elhagyja azt.",
    page: {
      // "A page ID that is not visible to respondents."
      name: "A válaszadók számára nem látható oldalazonosító.",
      // "Type a page subtitle."
      description: "Írjon be egy oldalfeliratot.",
      // "A caption displayed on a navigation button in the progress bar or table of contents (TOC). If you leave this field empty, the navigation button will use the page title or page name. To enable the progress bar or TOC, go to \"Survey\" → \"Navigation\"."
      navigationTitle: "A folyamatjelző sáv vagy a tartalomjegyzék navigációs gombján megjelenő felirat. Ha üresen hagyja ezt a mezőt, a navigációs gomb az oldal címét vagy nevét fogja használni. A folyamatjelző sáv vagy a tartalomjegyzék engedélyezéséhez lépjen a \"Felmérés\" → a \"Navigáció\" menüpontra.",
      // "A time interval in seconds after which the survey auto-advances to the next page. Hides the \"Previous\" navigation button. When set to 0, counts the time spent on the current page."
      timeLimit: "Az az időintervallum másodpercben, amely után a felmérés automatikusan továbblép a következő oldalra.",
      // "Use the magic wand icon to set a conditional rule that determines page visibility."
      visibleIf: "A varázspálca ikonnal állítson be egy feltételes szabályt, amely meghatározza az oldal láthatóságát.",
      // [Auto-translated] "Use the magic wand icon to set a conditional rule that disables the read-only mode for the page."
      enableIf: "A varázspálca ikonnal állítson be egy feltételes szabályt, amely letiltja az oldal írásvédett módját.",
      // "Use the magic wand icon to set a conditional rule that prevents survey submission unless at least one nested question has an answer."
      requiredIf: "A varázspálca ikonnal állítson be egy feltételes szabályt, amely megakadályozza a felmérés elküldését, kivéve, ha legalább egy beágyazott kérdésre van válasz.",
      // "Applies to all questions within this page. When set to \"Hidden\", it also hides question descriptions. If you want to override this setting, define title alignment rules for individual questions or panels. The \"Inherit\" option applies the survey-level setting (\"Top\" by default)."
      questionTitleLocation: "Az ezen az oldalon található összes kérdésre vonatkozik. Ha felül szeretné bírálni ezt a beállítást, határozzon meg címigazítási szabályokat az egyes kérdésekhez vagy panelekhez. Az \"Öröklés\" opció a felmérés szintű beállítást alkalmazza (\"Felül\" alapértelmezés szerint).",
      // [Auto-translated] "Sets consistent width for question titles when they are aligned to the left of their question boxes. Accepts CSS values (px, %, in, pt, etc.)."
      questionTitleWidth: "Egységes szélességet állít be a kérdéscímekhez, ha azok a kérdésmezőktől balra vannak igazítva. CSS-értékeket fogad el (px, %, in, pt stb.).",
      // "Sets the location of an error message in relation to the question with invalid input. Choose between: \"Top\" - an error text is placed at the top of the question box; \"Bottom\" - an error text is placed at the bottom of the question box. The \"Inherit\" option applies the survey-level setting (\"Top\" by default)."
      questionErrorLocation: "Beállítja az érvénytelen bevitelű kérdéssel kapcsolatos hibaüzenet helyét. Válasszon a következők közül: \"Felső\" - egy hibaüzenet kerül a kérdésmező tetejére; \"Alsó\" - egy hibaüzenet kerül a kérdésmező aljára. Az \"Öröklés\" opció a felmérés szintű beállítást alkalmazza (\"Felül\" alapértelmezés szerint).",
      // "Keeps the original order of questions or randomizes them. The \"Inherit\" option applies the survey-level setting (\"Original\" by default). The effect of this setting is only visible in the Preview tab."
      questionOrder: "Megtartja a kérdések eredeti sorrendjét, vagy véletlenszerűvé teszi őket. Az \"Öröklés\" opció a felmérési szintű beállítást alkalmazza (\"Eredeti\" alapértelmezés szerint). A beállítás hatása csak az Előnézet lapon látható.",
      // "Sets the visibility of navigation buttons on the page. The \"Inherit\" option applies the survey-level setting, which defaults to \"Visible\"."
      showNavigationButtons: "Beállítja a navigációs gombok láthatóságát az oldalon. Az \"Öröklés\" opció a felmérés szintű beállítást alkalmazza, amely alapértelmezés szerint \"Látható\".",
      // [Auto-translated] "This table lets you configure each grid column on the page. It automatically sets the width percentage for each column based on the maximum number of elements in a row. To customize the grid layout, manually adjust these values and define the title width for all questions in each column."
      gridLayoutColumns: "Ez a táblázat lehetővé teszi az oldal egyes rácsoszlopainak konfigurálását. Automatikusan beállítja az egyes oszlopok szélességének százalékos arányát a sorban lévő elemek maximális száma alapján. A rácsos elrendezés testreszabásához manuálisan állítsa be ezeket az értékeket, és határozza meg az egyes oszlopokban lévő összes kérdés címszélességét."
    },
    // [Auto-translated] "Sets the location of a timer on a page."
    timerLocation: "Beállítja az időzítő helyét az oldalon.",
    // "Choose from: \"Locked\" - users cannot expand or collapse entries; \"Collapse all\" - all entries start in a collapsed state; \"Expand all\" - all entries start in an expanded state; \"First expanded\" - only the first entry is initially expanded. Applies if \"Entry display mode\" is set to \"List\" and the \"Entry title pattern\" property is specified."
    panelsState: "Válasszon a következők közül: \"Zárolt\" - a felhasználók nem bonthatják ki vagy csukhatják össze a paneleket; \"Az összes összecsukása\" - minden panel összecsukott állapotban indul; \"Összes kibontása\" - minden panel kibővített állapotban indul; \"Először bővített\" - csak az első panel bővül.",
    // [Auto-translated] "Enter a shared property name within the array of objects that contains the image or video file URLs you want to display in the choice list."
    imageLinkName: "Adjon meg egy megosztott tulajdonságnevet az objektumok tömbjében, amely tartalmazza az adatválaszték-listában megjeleníteni kívánt kép- vagy videofájl URL-címeit.",
    // "The left value serves as an item ID used in conditional rules, the right value is displayed to respondents."
    choices: "A bal oldali érték a feltételes szabályokban használt elemazonosítóként szolgál, a jobb oldali érték megjelenik a válaszadók számára.",
    // [Auto-translated] "Type a user-friendly title to display."
    title: "Írja be a megjelenítendő felhasználóbarát címet.",
    // [Auto-translated] "Ensures that users won't complete the survey until files are uploaded."
    waitForUpload: "Biztosítja, hogy a felhasználók ne töltsék ki a felmérést a fájlok feltöltéséig.",
    // [Auto-translated] "Accepts CSS values (px, %, in, pt, etc.)."
    minWidth: "CSS-értékeket fogad el (px, %, in, pt stb.).",
    // [Auto-translated] "Accepts CSS values (px, %, in, pt, etc.)."
    maxWidth: "CSS-értékeket fogad el (px, %, in, pt stb.).",
    // "Accepts CSS values (px, %, in, pt, etc.)."
    width: "CSS-értékeket fogad el (px, %, in, pt stb.).",
    // [Auto-translated] "A join identifier is a custom key that you can assign to several questions to link them together and sync their values. These values will be merged into a single array or object and stored in survey results using the key as the property name."
    valueName: "Az illesztési azonosító egy egyéni kulcs, amelyet több kérdéshez rendelhet hozzá, hogy összekapcsolja őket, és szinkronizálja az értékeiket. Ezek az értékek egyetlen tömbbe vagy objektumba lesznek egyesítve, és a földmérési eredményekben tárolódnak, a kulcsot használva tulajdonságnévként.",
    // [Auto-translated] "A value displayed in HTML questions and in the dynamic titles and descriptions of survey elements when the question value is empty."
    defaultDisplayValue: "A HTML-kérdésekben, valamint a felmérési elemek dinamikus címeiben és leírásaiban megjelenő érték, ha a kérdés értéke üres.",
    // [Auto-translated] "In single- and multiple-selection question types, each choice option has an ID and display value. When selected, this setting shows a display value instead of an ID value in HTML questions and dynamic titles and descriptions of survey elements."
    useDisplayValuesInDynamicTexts: "Az egyszeres és többszörös kijelölésű kérdéstípusokban minden választási lehetőség rendelkezik azonosítóval és megjelenített értékkel. Ha be van jelölve, ez a beállítás azonosító érték helyett megjelenítési értéket jelenít meg a HTML-kérdésekben, valamint a dinamikus címekben és a földmérési elemek leírásában.",
    // "Choose whether or not to clear question values hidden by conditional logic and when to do it. The \"Inherit\" option applies the survey-level setting (\"Upon survey completion\" by default)."
    clearIfInvisible: "Válassza ki, hogy törli-e a feltételes logika által elrejtett kérdésértékeket, és mikor tegye meg. Az \"Öröklés\" opció a felmérési szintű beállítást alkalmazza (\"Felmérés befejezésekor\" alapértelmezés szerint).",
    // "Choose from: \"All\" - copies all choice options from the selected question; \"Selected\" - dynamically copies only selected choice options; \"Unselected\" - dynamically copies only unselected choice options. The \"None\" and \"Other\" options are copied by default if enabled in the source question."
    choicesFromQuestionMode: "Válasszon a következők közül: \"Összes\" - átmásolja az összes választási lehetőséget a kiválasztott kérdésből; \"Kiválasztott\" - dinamikusan másolja csak a kiválasztott választási lehetőségeket; \"Nem kiválasztott\" - dinamikusan csak a nem kiválasztott választási lehetőségeket másolja. A \"Nincs\" és az \"Egyéb\" opciók alapértelmezés szerint másolásra kerülnek, ha engedélyezve vannak a forráskérdésben.",
    // [Auto-translated] "In single- and multiple-selection question types, each choice option has an ID and display value. This setting specifies which matrix column or panel question should provide the IDs."
    choiceValuesFromQuestion: "Az egyszeres és többszörös kijelölésű kérdéstípusokban minden választási lehetőség rendelkezik azonosítóval és megjelenített értékkel. Ez a beállítás határozza meg, hogy melyik mátrixoszlop vagy panelkérdés adja meg az azonosítókat.",
    // [Auto-translated] "In single- and multiple-selection question types, each choice option has an ID and display value. This setting specifies which matrix column or panel question should provide the display texts."
    choiceTextsFromQuestion: "Az egyszeres és többszörös kijelölésű kérdéstípusokban minden választási lehetőség rendelkezik azonosítóval és megjelenített értékkel. Ez a beállítás határozza meg, hogy melyik mátrixoszlop vagy panelkérdés jelenítse meg a megjelenített szövegeket.",
    // [Auto-translated] "Select to let respondents add their own choices if the desired option isn't available in the dropdown. Custom choices will only be stored temporarily for the duration of the current browser session."
    allowCustomChoices: "Válassza ki, ha a válaszadók hozzáadhatják saját választási lehetőségeiket, ha a kívánt beállítás nem érhető el a legördülő menüben. Az egyéni beállításokat csak ideiglenesen tárolja a rendszer az aktuális böngésző munkamenet időtartamára.",
    // [Auto-translated] "When selected, users can include additional input in a separate comment box."
    showOtherItem: "Ha be van jelölve, a felhasználók további bevitelt adhatnak meg egy külön megjegyzésmezőben.",
    // "Displays each special choice option (\"None\", \"Other\", \"Select All\") on a new line, even when using a multiple-column layout."
    separateSpecialChoices: "Minden speciális választási lehetőséget (\"Nincs\", \"Egyéb\", \"Összes kijelölése\") új sorban jelenít meg, még akkor is, ha többoszlopos elrendezést használ.",
    // [Auto-translated] "Specify the location within the service dataset where the target array of objects is located. Leave empty if the URL already points to the array."
    path: "Adja meg azt a helyet a szolgáltatás adatkészletén belül, ahol az objektumok céltömbje található. Hagyja üresen, ha az URL-cím már a tömbre mutat.",
    choicesbyurl: {
      // "Enter a uniform property name within the array of objects whose value will be stored as a response in survey results."
      valueName: " "
    },
    // [Auto-translated] "Enter a uniform property name within the array of objects that contains the values you want to display in the choice list."
    titleName: "Adjon meg egy egységes tulajdonságnevet az adatválaszték-listában megjeleníteni kívánt értékeket tartalmazó objektumtömbben.",
    // [Auto-translated] "Select to allow the service to return an empty response or array."
    allowEmptyResponse: "Jelölje be, ha engedélyezni szeretné, hogy a szolgáltatás üres választ vagy tömböt adjon vissza.",
    // [Auto-translated] "Use the magic wand icon to set a conditional rule that determines the visibility of all choice options."
    choicesVisibleIf: "A varázspálca ikonnal feltételes szabályt állíthat be, amely meghatározza az összes választási lehetőség láthatóságát.",
    // [Auto-translated] "The left value serves as an item ID used in conditional rules, the right value is displayed to respondents."
    rateValues: "A bal oldali érték a feltételes szabályokban használt elemazonosítóként szolgál, a jobb oldali érték megjelenik a válaszadók számára.",
    rating: {
      // "\"Auto\" selects between the \"Buttons\" and \"Dropdown\" modes based on the available width. When the width is insufficient to display buttons, the question displays a dropdown."
      displayMode: "Az \"Automatikus\" a rendelkezésre álló szélesség alapján választ a \"Gombok\" és a \"Legördülő menü\" módok között. Ha a szélesség nem elegendő a gombok megjelenítéséhez, a kérdés legördülő menüt jelenít meg."
    },
    // [Auto-translated] "Allows you to connect questions that produce results in different formats. When such questions are linked together using a join identifier, this shared property stores selected question values."
    valuePropertyName: "Lehetővé teszi olyan kérdések összekapcsolását, amelyek különböző formátumú eredményeket hoznak. Ha az ilyen kérdések illesztési azonosítóval vannak összekapcsolva, ez a megosztott tulajdonság tárolja a kiválasztott kérdésértékeket.",
    // [Auto-translated] "Select if you want to update the drop-down menu contents to match the search query that a user is typing in the input field."
    searchEnabled: "Válassza ki, ha frissíteni szeretné a legördülő menü tartalmát, hogy megfeleljen a felhasználó által a beviteli mezőbe beírt keresési lekérdezésnek.",
    // [Auto-translated] "A value to save in survey results when respondents give a positive answer."
    valueTrue: "Olyan érték, amelyet meg kell menteni a felmérés eredményeiben, amikor a válaszadók pozitív választ adnak.",
    // [Auto-translated] "A value to save in survey results when respondents give a negative answer."
    valueFalse: "A felmérés eredményeiben mentendő érték, ha a válaszadók negatív választ adnak.",
    // [Auto-translated] "It's not recommended that you disable this option as it overrides the Preview image and makes it hard for a user to understand whether the files have been uploaded."
    showPreview: "Nem ajánlott letiltani ezt a beállítást, mivel felülbírálja az előnézeti képet, és megnehezíti a felhasználó számára annak megértését, hogy a fájlok fel vannak-e töltve.",
    // [Auto-translated] "Triggers a prompt asking to confirm the file deletion."
    needConfirmRemoveFile: "A fájl törlésének megerősítését kérő üzenet jelenik meg.",
    // [Auto-translated] "Enable to rank only selected choices. Users will drag selected items from the choice list to order them within the ranking area."
    selectToRankEnabled: "Engedélyezésével csak a kiválasztott választásokat rangsorolhatja. A felhasználók a kiválasztott elemeket az adatválaszték-listából húzzák, hogy a rangsorolási területen belül rendezzék őket.",
    // [Auto-translated] "Enter a list of choices that will be suggested to the respondent during input."
    dataList: "Adja meg azoknak a választási lehetőségeknek a listáját, amelyeket a rendszer javasolni fog a válaszadónak a bevitel során.",
    // [Auto-translated] "The setting only resizes the input fields and doesn't affect the width of the question box."
    inputSize: "A beállítás csak a beviteli mezőket méretezi át, és nincs hatással a kérdésmező szélességére.",
    // [Auto-translated] "Sets consistent width for all item labels. Accepts CSS values (px, %, in, pt, etc.)."
    itemTitleWidth: "Egységes szélességet állít be az összes elemcímkéhez. Elfogadja a CSS értékeket (px, %, in, pt stb.).",
    // "Select how to align input value within the field. The default setting \"Auto\" aligns the input value to the right if currency or numeric masking is applied and to the left if not."
    inputTextAlignment: "Válassza ki, hogyan szeretné igazítani a bemeneti értéket a mezőn belül. Az alapértelmezett \"Automatikus\" beállítás a bemeneti értéket jobbra igazítja, ha pénznem vagy numerikus maszkolás van alkalmazva, és balra, ha nem.",
    // [Auto-translated] "Serves as a substitute when the image cannot be displayed on a user's device and for accessibility purposes."
    altText: "Helyettesítőként szolgál, ha a kép nem jeleníthető meg a felhasználó eszközén, valamint kisegítő lehetőségek céljából.",
    // "Defines the color of the selected emoji when the Rating icon type is set to \"Smileys\". Choose between: \"Default\" - the selected emoji appears in default survey color; \"Scale\" - the selected emoji inherits color from the rating scale."
    rateColorMode: "Meghatározza a kiválasztott hangulatjel színét, ha az Értékelés ikon típusa \"Hangulatjelek\". Válasszon a következők közül: \"Alapértelmezett\" - a kiválasztott hangulatjel alapértelmezett felmérési színben jelenik meg; \"Skála\" - a kiválasztott hangulatjel örökli a színt a minősítési skálától.",
    expression: {
      // "An expression ID that is not visible to respondents."
      name: "Olyan kifejezésazonosító, amely nem látható a válaszadók számára.",
      // "Type an expression subtitle."
      description: "Írja be a kifejezés alcímét.",
      // "An expression can include basic calculations (`{q1_id} + {q2_id}`), conditions (`{age} > 60`), and functions ('iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, etc.)."
      expression: "A kifejezések tartalmazhatnak alapvető számításokat ('{q1_id} + {q2_id}'), feltételeket ('{age} > 60') és függvényeket ('iif()', 'today()', 'age()', 'min()', 'max()', 'avg()' stb.)."
    },
    // "Select to store the \"Other\" option value as a separate property in survey results."
    storeOthersAsComment: "Válassza ezt a lehetőséget, ha az \"Egyéb\" beállítás értékét külön tulajdonságként szeretné tárolni a felmérés eredményeiben.",
    // [Auto-translated] "Use {0} as a placeholder for the actual value."
    format: "Használja {0} a tényleges érték helyőrzőjeként.",
    // [Auto-translated] "Refer to the [accept](https://www.w3schools.com/tags/att_input_accept.asp) attribute description for more information."
    acceptedTypes: "További információt az [accept](https://www.w3schools.com/tags/att_input_accept.asp) attribútum leírásában talál.",
    // [Auto-translated] "Arranges choice options in a multi-column layout. When set to 0, the options are displayed in a single line. Applies only to columns with \"Cell input type\" set to Radio Button Group or Checkboxes."
    columnColCount: "Többoszlopos elrendezésben rendezi a választási lehetőségeket. Ha 0-ra van állítva, a beállítások egyetlen sorban jelennek meg. Csak azokra az oszlopokra vonatkozik, amelyeknél a \"Cellabevitel típusa\" beállítása Választógomb-csoport vagy Jelölőnégyzetek.",
    // [Auto-translated] "Select the data type that the user's browser can retrieve. This data is sourced either from past values entered by the user or from pre-configured values if any have been saved by the user for autocompletion."
    autocomplete: "Válassza ki azt az adattípust, amelyet a felhasználó böng��szője lekérhet. Ezek az adatok vagy a felhasználó által megadott korábbi értékekből, vagy előre konfigurált értékekből származnak, ha a felhasználó mentett ilyeneket az automatikus kiegészítéshez.",
    // "Applies when \"File source type\" is \"Local file\" or when camera is unavailable"
    filePlaceholder: "Akkor érvényes, ha a \"Forrás típusa\" \"Helyi fájlok\", vagy ha a kamera nem érhető el",
    // "Applies when \"File source type\" is \"Camera\"."
    photoPlaceholder: "Akkor érvényes, ha a \"Forrás típusa\" a \"Kamera\".",
    // "Applies when \"File source type\" is \"Local file or camera\"."
    fileOrPhotoPlaceholder: "Akkor érvényes, ha a \"Forrás típusa\" értéke \"Helyi fájlok vagy kamera\".",
    // "Arranges choice options in a multi-column layout. When set to 0, the options are displayed in a single line."
    colCount: "Az adatválaszték-beállításokat többoszlopos elrendezésbe rendezi. Ha 0-ra van állítva, a beállítások egyetlen sorban jelennek meg.",
    multipletext: {
      // [Auto-translated] "Arranges text boxes in a multi-column layout."
      colCount: "Szövegdobozokat rendez többoszlopos elrendezésben."
    },
    masksettings: {
      // "Select if you want to store the question value with an applied mask in survey results."
      saveMaskedValue: "Válassza ki, ha a kérdés értékét alkalmazott maszkkal szeretné tárolni a felmérés eredményeiben."
    },
    patternmask: {
      // "The pattern can contain string literals and the following placeholders: `9` - for a digit; `a` - for an upper- or lower-case letter; `#` - for a digit or an upper- or lower-case letter. Use backslash `\\` to escape a character."
      pattern: "A minta karakterlánc-konstansokat és a következő helyőrzőket tartalmazhatja: \"9\" - egy számjegyhez; \"a\" - kis- vagy nagybetű esetében; '#' - számjegy vagy kis- vagy nagybetű. A fordított perjel használata \"\\\" a karakter elhagyásához."
    },
    datetimemask: {
      // "The pattern can contain separator characters and the following placeholders:<br>`m` - Month number.<br>`mm` - Month number, with leading zero for single-digit values.<br>`d` - Day of the month.<br>`dd` - Day of the month, with leading zero for single-digit values.<br>`yy` - The last two digits of the year.<br>`yyyy` - Four-digit year.<br>`H` - Hours in 24-hour format.<br>`HH` - Hours in 24-hour format, with leading zero for single-digit values.<br>`h` - Hours in 12-hour format.<br>`hh` - Hours in 12-hour format, with leading zero for single-digit values.<br>`MM` - Minutes.<br>`ss` - Seconds.<br>`TT` - 12-hour clock period in upper case (AM/PM).<br>`tt` - 12-hour clock period in lower case (am/pm)."
      pattern: "A minta elválasztó karaktereket és a következő helyőrzőket tartalmazhatja:<br>'m' - Hónap száma.<br>\"mm\" – A hónap száma, az első nullával az egyjegyű értékek esetében. <br>'d' - a hónap napja. <br>'dd' – A hónap napja, az első nullával az egyjegyű értékek esetében. <br>\"yy\" – Az év utolsó két számjegye. <br>\"yyyy\" – négy számjegyű évszám. <br>\"H\" – órák száma 24 órás formátumban. <br>'HH' – Órák 24 órás formátumban, az első nullával az egyjegyű értékek esetében. <br>\"h\" – órák száma 12 órás formátumban. <br>'hh' – Órák 12 órás formátumban, az első nullával az egyjegyű értékek esetében. <br>\"MM\" - perc. <br>'ss' - másodperc. <br>\"TT\" – 12 órás időszámítás nagybetűvel (AM/PM). <br>\"tt\" - 12 órás időtartam kisbetűvel (am/pm)."
    },
    numericmask: {
      // "A symbol used to separate the fractional part from the integer part of a displayed number."
      decimalSeparator: "A törtrész és a megjelenített szám egész részének elválasztására szolgáló szimbólum.",
      // "A symbol used to separate the digits of a large number into groups of three."
      thousandsSeparator: "Egy szimbólum, amely nagy szám számjegyeit három csoportba sorolja.",
      // "Limits how many digits to retain after the decimal point for a displayed number."
      precision: "Korlátozza, hogy hány számjegy maradjon meg a megjelenített szám tizedesvesszője után."
    },
    currencymask: {
      // "One or several symbols to be displayed before the value."
      prefix: "Egy vagy több szimbólum jelenik meg az érték előtt.",
      // "One or several symbols to be displayed after the value."
      suffix: "Egy vagy több szimbólum jelenik meg az érték után."
    },
    theme: {
      // "This setting applies only to questions outside of a panel."
      isPanelless: "Ez a beállítás csak a panelen kívüli kérdésekre vonatkozik.",
      // "Sets a supplementary color that highlights key survey elements."
      primaryColor: "Beállít egy kiegészítő színt, amely kiemeli a földmérés legfontosabb elemeit.",
      // "Adjusts the transparency of panels and question boxes relative to the survey background."
      panelBackgroundTransparency: "Beállítja a panelek és kérdésmezők átlátszóságát a felmérés hátteréhez képest.",
      // "Adjusts the transparency of input elements relative to the survey background."
      questionBackgroundTransparency: "Beállítja a bemeneti elemek átlátszóságát a földmérési háttérhez képest.",
      // "Sets the corner radius for all rectangular elements. Enable the Advanced Mode if you want to set individual corner radius values for input elements or panels and question boxes."
      cornerRadius: "Beállítja az összes téglalap alakú elem saroksugarát. Engedélyezze a Speciális módot, ha egyedi sarokrádiuszértékeket szeretne beállítani a bemeneti elemekhez vagy panelekhez és kérdésmezőkhöz.",
      // "Sets the main background color of the survey."
      "--sjs-general-backcolor-dim": "Beállítja a felmérés fő háttérszínét."
    },
    header: {
      // "The \"Same as container\" option auto-adjusts the header content area width to fit into the HTML element the survey is placed in."
      inheritWidthFrom: "Az \"Ugyanaz, mint a tároló\" beállítás automatikusan beállítja a fejléc tartalomterületének szélességét, hogy illeszkedjen ahhoz a HTML-elemhez, amelybe a felmérés kerül.",
      // [Auto-translated] "The width of the header area that contains the survey title and description, measured in pixels."
      textAreaWidth: "A felmérés címét és leírását tartalmazó fejlécterület szélessége képpontban mérve.",
      // [Auto-translated] "When enabled, the top of the survey overlays the bottom of the header."
      overlapEnabled: "Ha engedélyezve van, a felmérés teteje átfedi a fejléc alját.",
      // [Auto-translated] "When set to 0, the height is calculated automatically to accommodate the header's content."
      mobileHeight: "Ha 0-ra van állítva, a magasság automatikusan kiszámításra kerül, hogy elférjen a fejléc tartalma."
    },
    // "The \"Same as container\" option auto-adjusts the progress bar area width to fit into the HTML element the survey is placed in."
    progressBarInheritWidthFrom: "Az \"Ugyanaz, mint a tároló\" opció automatikusan beállítja a folyamatjelző sáv területének szélességét, hogy illeszkedjen ahhoz a HTML-elemhez, amelybe a felmérés kerül.",
    // "Used when the 'Survey layout' is set to 'Single input field per page'. In this layout, the matrix is split so that each input field appears on a separate page. Use the {rowIndex} placeholder to insert auto numbering, {rowTitle} or {rowName} to reference the row's title or ID, and {row.columnid} to include the value of a specific matrix column."
    singleInputTitleTemplate: "Akkor használatos, ha a \"Felmérés elrendezése\" beállítása \"Egyetlen beviteli mező oldalanként\". Ebben az elrendezésben a mátrix fel van osztva, így minden beviteli mező külön oldalon jelenik meg. A {rowIndex} helyőrzővel szúrja be az automatikus számozást, a {rowTitle} vagy a {rowName} használatával hivatkozzon a sor címére vagy azonosítójára, a {row.columnid} pedig egy adott mátrixoszlop értékét foglalja bele."
  },
  // Properties
  p: {
    title: {
      // "title"
      name: "Cím",
      // "Leave it empty, if it is the same as 'Name'"
      title: "Hagyja üresen, ha megegyezik a 'Megnevezés'-el"
    },
    // [Auto-translated] "Allow multiple selection"
    multiSelect: "Többszörös kijelölés engedélyezése",
    // [Auto-translated] "Show image and video captions"
    showLabel: "Kép- és videófeliratok megjelenítése",
    // [Auto-translated] "Swap the order of Yes and No"
    swapOrder: "Az Igen és a Nem sorrendjének felcserélése",
    // [Auto-translated] "Value"
    value: "Érték",
    // [Auto-translated] "Tab alignment"
    tabAlign: "Tabulátorigazítás",
    // [Auto-translated] "File source type"
    sourceType: "Fájlforrás típusa",
    // [Auto-translated] "Fit to container"
    fitToContainer: "Tárolóhoz igazítás",
    // [Auto-translated] "Set value expression"
    setValueExpression: "Értékkifejezés beállítása",
    // "Description"
    description: "Leírás", // Auto-generated string
    // [Auto-translated] "Logo fit"
    logoFit: "Logó illeszkedés",
    // [Auto-translated] "Pages"
    pages: "Oldalak", // Auto-generated string
    // [Auto-translated] "Questions"
    questions: "Kérdések", // Auto-generated string
    // "Triggers"
    triggers: "Eseményvezérlők",
    // [Auto-translated] "Custom variables"
    calculatedValues: "Egyéni változók",
    // [Auto-translated] "Survey id"
    surveyId: "Felmérés azonosítója", // Auto-generated string
    // [Auto-translated] "Survey post id"
    surveyPostId: "Felmérés bejegyzésének azonosítója", // Auto-generated string
    // [Auto-translated] "Survey show data saving"
    surveyShowDataSaving: "A felmérés adatmentést mutat", // Auto-generated string
    // [Auto-translated] "Question description alignment"
    questionDescriptionLocation: "Kérdésleírás igazítása",
    // [Auto-translated] "Progress bar type"
    progressBarType: "Folyamatjelző sáv típusa", // Auto-generated string
    // [Auto-translated] "Show table of contents (TOC)"
    showTOC: "Tartalomjegyzék megjelenítése (TOC)",
    // [Auto-translated] "TOC alignment"
    tocLocation: "TOC igazítás",
    // [Auto-translated] "Question title pattern"
    questionTitlePattern: "Kérdés címének mintája", // Auto-generated string
    // [Auto-translated] "Survey width mode"
    widthMode: "Földmérési szélesség mód",
    // [Auto-translated] "Show brand info"
    showBrandInfo: "Márkainformációk megjelenítése", // Auto-generated string
    // [Auto-translated] "Use display values in dynamic texts"
    useDisplayValuesInDynamicTexts: "Megjelenítési értékek használata dinamikus szövegekben",
    // "Visible if"
    visibleIf: "Látható ha", // Auto-generated string
    // [Auto-translated] "Default value expression"
    defaultValueExpression: "Alapértelmezett értékkifejezés",
    // "Required if"
    requiredIf: "Kötelező ha", // Auto-generated string
    // [Auto-translated] "Reset value if"
    resetValueIf: "Érték visszaállítása, ha",
    // [Auto-translated] "Set value if"
    setValueIf: "Érték beállítása, ha",
    // "Validation rules"
    validators: "Validátorok",
    // [Auto-translated] "Bindings"
    bindings: "Kötések", // Auto-generated string
    // [Auto-translated] "Render as"
    renderAs: "Renderelés mint", // Auto-generated string
    // [Auto-translated] "Attach original items"
    attachData: "Eredeti elemek csatolása", // Auto-generated string
    // "Choices"
    choices: "Lehetőségek",
    // "Choices by url"
    choicesByUrl: "Lehetőségek a webről", // Auto-generated string
    // "Currency"
    currency: "Pénz", // Auto-generated string
    // [Auto-translated] "Cell hint"
    cellHint: "Cella-tipp", // Auto-generated string
    // [Auto-translated] "Total maximum fraction digits"
    totalMaximumFractionDigits: "Törtszámjegyek teljes száma", // Auto-generated string
    // [Auto-translated] "Total minimum fraction digits"
    totalMinimumFractionDigits: "Minimális törtszámjegyek összesen", // Auto-generated string
    // "Columns"
    columns: "Oszlopok", // Auto-generated string
    // [Auto-translated] "Detail elements"
    detailElements: "Részletelemek", // Auto-generated string
    // [Auto-translated] "Allow adaptive actions"
    allowAdaptiveActions: "Adaptív műveletek engedélyezése", // Auto-generated string
    // "Default row value"
    defaultRowValue: "Sor alapértelmezett értéke", // Auto-generated string
    // [Auto-translated] "Auto-expand new row details"
    detailPanelShowOnAdding: "Új sor részleteinek automatikus kibontása",
    // [Auto-translated] "Choices lazy load enabled"
    choicesLazyLoadEnabled: "Választási lehetőségek lusta betöltés engedélyezve", // Auto-generated string
    // [Auto-translated] "Choices lazy load page size"
    choicesLazyLoadPageSize: "Választási lehetőségek lusta betöltési oldalméret", // Auto-generated string
    // [Auto-translated] "Input field component"
    inputFieldComponent: "Beviteli mező összetevő", // Auto-generated string
    // [Auto-translated] "Item component"
    itemComponent: "Elem összetevő", // Auto-generated string
    // [Auto-translated] "Min"
    min: "Min", // Auto-generated string
    // [Auto-translated] "Max"
    max: "Max", // Auto-generated string
    // [Auto-translated] "Min value expression"
    minValueExpression: "Minimális érték kifejezése", // Auto-generated string
    // [Auto-translated] "Max value expression"
    maxValueExpression: "Max. érték kifejezés", // Auto-generated string
    // [Auto-translated] "Step"
    step: "Lépés", // Auto-generated string
    // [Auto-translated] "Items for auto-suggest"
    dataList: "Automatikus javaslatra szánt elemek",
    // "Input field width (in characters)"
    inputSize: "Elem mérete",
    // [Auto-translated] "Item label width"
    itemTitleWidth: "Elemcímke szélessége",
    // [Auto-translated] "Input value alignment"
    inputTextAlignment: "Bemeneti érték igazítása",
    // [Auto-translated] "Elements"
    elements: "Elemek", // Auto-generated string
    // [Auto-translated] "Content"
    content: "Tartalom", // Auto-generated string
    // [Auto-translated] "Navigation title"
    navigationTitle: "Navigációs cím", // Auto-generated string
    // [Auto-translated] "Navigation description"
    navigationDescription: "Navigáció leírása", // Auto-generated string
    // [Auto-translated] "Long tap"
    longTap: "Hosszú koppintás", // Auto-generated string
    // [Auto-translated] "Expand input field dynamically"
    autoGrow: "Beviteli mező dinamikus kibontása",
    // [Auto-translated] "Enable resize handle"
    allowResize: "Átméretező fogantyú engedélyezése",
    // [Auto-translated] "Accept carriage return"
    acceptCarriageReturn: "Kocsivissza elfogadása", // Auto-generated string
    // [Auto-translated] "Display mode"
    displayMode: "Megjelenítési mód",
    // [Auto-translated] "Rate type"
    rateType: "Ár típusa", // Auto-generated string
    // "Label"
    label: "Cimke", // Auto-generated string
    // [Auto-translated] "Content mode"
    contentMode: "Tartalom mód",
    // [Auto-translated] "Image and thumbnail fit"
    imageFit: "Kép és miniatűr illesztés",
    // [Auto-translated] "Alt text"
    altText: "Helyettesítő szöveg",
    // [Auto-translated] "Height"
    height: "Magasság", // Auto-generated string
    // [Auto-translated] "Height on smartphones"
    mobileHeight: "Magasság az okostelefonokon",
    // [Auto-translated] "Pen color"
    penColor: "Toll színe", // Auto-generated string
    // [Auto-translated] "Background color"
    backgroundColor: "Háttérszín",
    // [Auto-translated] "Template elements"
    templateElements: "Sablon elemek", // Auto-generated string
    // [Auto-translated] "Operator"
    operator: "Operátor", // Auto-generated string
    // [Auto-translated] "Is variable"
    isVariable: "Változó", // Auto-generated string
    // [Auto-translated] "Run expression"
    runExpression: "Kifejezés futtatása", // Auto-generated string
    // [Auto-translated] "Show caption"
    showCaption: "Felirat megjelenítése", // Auto-generated string
    // [Auto-translated] "Icon name"
    iconName: "Ikon neve", // Auto-generated string
    // [Auto-translated] "Icon size"
    iconSize: "Ikon mérete", // Auto-generated string
    // [Auto-translated] "Precision"
    precision: "Precizitás", // Auto-generated string
    // [Auto-translated] "Matrix drag handle area"
    matrixDragHandleArea: "Mátrix húzófogantyújának területe", // Auto-generated string
    // [Auto-translated] "Background image"
    backgroundImage: "Háttérkép",
    // [Auto-translated] "Background image fit"
    backgroundImageFit: "Háttérkép illesztése", // Auto-generated string
    // [Auto-translated] "Background image attachment"
    backgroundImageAttachment: "Háttérkép melléklet", // Auto-generated string
    // [Auto-translated] "Background opacity"
    backgroundOpacity: "Háttér átlátszatlansága", // Auto-generated string
    // [Auto-translated] "Allow selective ranking"
    selectToRankEnabled: "Szelektív rangsorolás engedélyezése",
    // [Auto-translated] "Ranking area alignment"
    selectToRankAreasLayout: "Rangsorolási terület igazítása",
    // [Auto-translated] "Text to show if all options are selected"
    selectToRankEmptyRankedAreaText: "Megjelenítendő szöveg, ha az összes beállítás ki van jelölve",
    // [Auto-translated] "Placeholder text for the ranking area"
    selectToRankEmptyUnrankedAreaText: "A rangsorolási terület helyőrző szövege",
    // [Auto-translated] "Allow camera access"
    allowCameraAccess: "Kamera-hozzáférés engedélyezése", // Auto-generated string
    // [Auto-translated] "Rating icon color mode"
    scaleColorMode: "Értékelés ikon színmód",
    // [Auto-translated] "Smileys color scheme"
    rateColorMode: "Smileys színséma",
    // [Auto-translated] "Copy display value"
    copyDisplayValue: "Megjelenített érték másolása", // Auto-generated string
    // [Auto-translated] "Column span"
    effectiveColSpan: "Oszlop fesztávolsága",
    // [Auto-translated] "Progress bar area width"
    progressBarInheritWidthFrom: "A folyamatjelző sáv területének szélessége",
    // [Auto-translated] "Theme name"
    themeName: "Téma neve"
  },
  theme: {
    // "Advanced mode"
    advancedMode: "Speciális mód",
    // "Page"
    pageTitle: "Oldalcím betűtípusa",
    // "Question box"
    questionTitle: "Kérdés címének betűtípusa",
    // "Input element"
    editorPanel: "Bemeneti elem",
    // [Auto-translated] "Lines"
    lines: "Sorok",
    // [Auto-translated] "Default"
    primaryDefaultColor: "Alapértelmezett",
    // [Auto-translated] "Hover"
    primaryDarkColor: "Lebeg",
    // [Auto-translated] "Selected"
    primaryLightColor: "Kiválasztott",
    // [Auto-translated] "Background color"
    backgroundDimColor: "Háttérszín",
    // "Corner radius"
    cornerRadius: "Sarok sugara",
    // [Auto-translated] "Default background"
    backcolor: "Alapértelmezett háttér",
    // [Auto-translated] "Hover background"
    hovercolor: "Háttér rámutatása",
    // [Auto-translated] "Border decoration"
    borderDecoration: "Szegély dekoráció",
    // [Auto-translated] "Font color"
    fontColor: "Betűszín",
    // [Auto-translated] "Background color"
    backgroundColor: "Háttérszín",
    // [Auto-translated] "Default color"
    primaryForecolor: "Alapértelmezett szín",
    // [Auto-translated] "Disabled color"
    primaryForecolorLight: "Letiltott szín",
    // [Auto-translated] "Font"
    font: "Betűkészlet",
    // [Auto-translated] "Darker"
    borderDefault: "Sötétebb",
    // [Auto-translated] "Lighter"
    borderLight: "Öngyújtó",
    // [Auto-translated] "Font family"
    fontFamily: "Betűcsalád",
    // [Auto-translated] "Regular"
    fontWeightRegular: "Rendszeres",
    // [Auto-translated] "Heavy"
    fontWeightHeavy: "Nehéz",
    // [Auto-translated] "Semi-bold"
    fontWeightSemiBold: "Félig félkövér",
    // [Auto-translated] "Bold"
    fontWeightBold: "Merész",
    // [Auto-translated] "Color"
    color: "Szín",
    // [Auto-translated] "Placeholder color"
    placeholderColor: "Helyőrző színe",
    // [Auto-translated] "Size"
    size: "Méret",
    // [Auto-translated] "Opacity"
    opacity: "Átlátszatlanság",
    // [Auto-translated] "X"
    boxShadowX: "X",
    // [Auto-translated] "Y"
    boxShadowY: "Y",
    // [Auto-translated] "Add Shadow Effect"
    boxShadowAddRule: "Árnyékhatás hozzáadása",
    // [Auto-translated] "Blur"
    boxShadowBlur: "Elken",
    // [Auto-translated] "Spread"
    boxShadowSpread: "Terjedés",
    // [Auto-translated] "Drop"
    boxShadowDrop: "Csepp",
    // [Auto-translated] "Inner"
    boxShadowInner: "Belső",
    names: {
      // [Auto-translated] "Default"
      default: "Alapértelmezett",
      // [Auto-translated] "Sharp"
      sharp: "Éles",
      // [Auto-translated] "Borderless"
      borderless: "Szegély nélküli",
      // [Auto-translated] "Flat"
      flat: "Lapos",
      // [Auto-translated] "Plain"
      plain: "Síkság",
      // [Auto-translated] "Double Border"
      doubleborder: "Dupla szegély",
      // [Auto-translated] "Layered"
      layered: "Rakott",
      // [Auto-translated] "Solid"
      solid: "Szilárd",
      // [Auto-translated] "3D"
      threedimensional: ".3D",
      // [Auto-translated] "Contrast"
      contrast: "Kontraszt"
    },
    colors: {
      // [Auto-translated] "Teal"
      teal: "Kékeszöld",
      // [Auto-translated] "Blue"
      blue: "Kék",
      // [Auto-translated] "Purple"
      purple: "Lila",
      // [Auto-translated] "Orchid"
      orchid: "Orchidea",
      // [Auto-translated] "Tulip"
      tulip: "Tulipán",
      // [Auto-translated] "Brown"
      brown: "Barna",
      // [Auto-translated] "Green"
      green: "Zöld",
      // [Auto-translated] "Gray"
      gray: "Szürke"
    }
  },
  creatortheme: {
    // [Auto-translated] "Surface background"
    "--sjs-special-background": "Felület háttér",
    // [Auto-translated] "Primary"
    "--sjs-primary-background-500": "Elsődleges",
    // [Auto-translated] "Secondary"
    "--sjs-secondary-background-500": "Másodlagos",
    // [Auto-translated] "Surface"
    surfaceScale: "Felület",
    // [Auto-translated] "UI elements"
    userInterfaceBaseUnit: "Felhasználói felület elemei",
    // [Auto-translated] "Font"
    fontScale: "Betűkészlet",
    names: {
      // [Auto-translated] "Survey Creator 2020"
      sc2020: "Felmérés készítője 2020",
      // [Auto-translated] "Light"
      "default-light": "Fény",
      // [Auto-translated] "Dark"
      "default-dark": "Sötét",
      // [Auto-translated] "Contrast"
      "default-contrast": "Kontraszt"
    }
  }
};
setupLocale({ localeCode: "hu", strings: huStrings });