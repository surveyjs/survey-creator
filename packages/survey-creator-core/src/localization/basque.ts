import { setupLocale } from "survey-creator-core";

export var euStrings = {
  // survey templates
  survey: {
    // "Duplicate"
    duplicate: "Bikoiztu",
    // "To use the Survey Creator library in your application, a <a href='https://surveyjs.io/licensing' target='_blank'>developer license</a> is required. If you have an active license, please <a href='https://surveyjs.io/remove-alert-banner' target='_blank'>set up your license key</a> and ensure you're using the <a href='https://surveyjs.io/stay-updated/release-notes' target='_blank'>latest version</a>."
    license: "Zure aplikazioan Survey Creator liburutegia erabiltzeko, <a href='https://surveyjs.io/licensing' target='_blank'>garatzaile-lizentzia</a> bat behar da. Lizentzia aktiboa baduzu, <a href='https://surveyjs.io/remove-alert-banner' target='_blank'>konfiguratu zure lizentzia-gakoa</a> eta ziurtatu <a href='https://surveyjs.io/stay-updated/release-notes' target='_blank'>azken bertsioa</a> erabiltzen ari zarela.",
    // "Your maintenance subscription expired on {date}. You may continue using all <a href='https://surveyjs.io/stay-updated/release-notes' target='_blank'>versions released up to that date</a>. To remove this banner in the latest version, please <a href='https://surveyjs.io/manage#license-manager' target='_blank'>renew your subscription</a> and <a href='https://surveyjs.io/remove-alert-banner' target='_blank'>set up a new license key</a>."
    license2: "Zure mantentze-harremanaren iraungitze-data {date} zen. <a href='https://surveyjs.io/stay-updated/release-notes' target='_blank'>Data horretara arte argitaratutako bertsio guztiak</a> erabiltzen jarrai dezakezu. Azken bertsioan abisu hau kentzeko, <a href='https://surveyjs.io/manage#license-manager' target='_blank'>berritu zure harremana</a> eta <a href='https://surveyjs.io/remove-alert-banner' target='_blank'>konfiguratu lizentzia-gako berria</a>."
  },
  // Creator tabs
  tabs: {
    // "Preview"
    preview: "Aurrebista",
    // "Themes"
    theme: "Gaiak",
    // "Translations"
    translation: "Itzulpenak",
    // "Designer"
    designer: "Diseinatzailea",
    // "JSON Editor"
    json: "JSON editorea",
    // "Logic"
    logic: "Logika"
  },
  // Question types
  qt: {
    // "Default"
    default: "Lehenetsia",
    // "Checkboxes"
    checkbox: "Kontrol-laukitxoak",
    // "Long Text"
    comment: "Testu luzea",
    // "Image Picker"
    imagepicker: "Irudi-hautatzailea",
    // "Ranking"
    ranking: "Sailkapena",
    // "Image"
    image: "Irudia",
    // "Dropdown"
    dropdown: "Goitibeherako zerrenda",
    // "Multi-Select Dropdown"
    tagbox: "Aukera anitzeko goitibeherakoa",
    // "File Upload"
    file: "Fitxategia igo",
    // [Auto-translated] "HTML"
    html: "HTML",
    // "Single-Select Matrix"
    matrix: "Hautapen bakarreko matrizea",
    // "Multi-Select Matrix"
    matrixdropdown: "Hautapen anitzeko matrizea",
    // "Dynamic Matrix"
    matrixdynamic: "Matrize dinamikoa",
    // "Multiple Textboxes"
    multipletext: "Testu-koadro anitz",
    // "Panel"
    panel: "Panela",
    // "Dynamic Panel"
    paneldynamic: "Panel dinamikoa",
    // "Radio Button Group"
    radiogroup: "Aukera-botoien taldea",
    // "Rating Scale"
    rating: "Balorazio-eskala",
    // "Slider"
    slider: "Gradutzailea",
    // "Single-Line Input"
    text: "Lerro bakarreko sarrera",
    // "Yes/No (Boolean)"
    boolean: "Bai/Ez (boolearra)",
    // "Expression (read-only)"
    expression: "Adierazpena (irakurtzeko soilik)",
    // "Signature"
    signaturepad: "Sinadura",
    // "Filter"
    filter: "Iragazkia",
    // "Button Group"
    buttongroup: "Botoi-taldea"
  },
  toolboxCategories: {
    // "General"
    general: "Orokorra",
    // "Choice Questions"
    choice: "Hautapen-galderak",
    // "Text Input Questions"
    text: "Testu-sarrerako galderak",
    // "Containers"
    containers: "Edukiontziak",
    // "Matrix Questions"
    matrix: "Matrize-galderak",
    // "Misc"
    misc: "Bestelakoak"
  },
  // Strings in SurveyJS Creator
  ed: {
    // "Default ({0})"
    defaultLocale: "Lehenetsia ({0})",
    // "Settings"
    settings: "Ezarpenak",
    // "Open settings"
    settingsTooltip: "Ireki ezarpenak",
    // "Survey Settings"
    surveySettings: "Inkestaren ezarpenak",
    // "Survey settings"
    surveySettingsTooltip: "Inkestaren ezarpenak",
    // "Theme Settings"
    themeSettings: "Gaiaren ezarpenak",
    // "Theme settings"
    themeSettingsTooltip: "Gaiaren ezarpenak",
    // "Creator Settings"
    creatorSettingTitle: "Sortzailearen ezarpenak",
    // "Show Panel"
    showPanel: "Erakutsi panela",
    // "Hide Panel"
    hidePanel: "Ezkutatu panela",
    // "Select previous"
    prevSelected: "Hautatu aurrekoa",
    // "Select next"
    nextSelected: "Hautatu hurrengoa",
    // "Focus previous"
    prevFocus: "Fokua aurrekoan",
    // "Focus next"
    nextFocus: "Fokua hurrengoan",
    // "Survey"
    surveyTypeName: "Inkesta",
    // "Page"
    pageTypeName: "Orrialdea",
    // "page"
    newPageName: "orrialdea",
    // "question"
    newQuestionName: "galdera",
    // "panel"
    newPanelName: "panela",
    // "Preview Survey Again"
    testSurveyAgain: "Aurrebista berriro",
    // "You had to navigate to"
    navigateToMsg: "Hona nabigatu behar zenuen",
    // "Save Survey"
    saveSurvey: "Gorde inkesta",
    // "Save Survey"
    saveSurveyTooltip: "Gorde inkesta",
    // "Save Theme"
    saveTheme: "Gorde gaia",
    // "Save Theme"
    saveThemeTooltip: "Gorde gaia",
    // "Hide errors"
    jsonHideErrors: "Ezkutatu erroreak",
    // "Show errors"
    jsonShowErrors: "Erakutsi erroreak",
    // "Fix error"
    jsonFixError: "Konpondu errorea",
    // "The survey JSON must be an object."
    jsonRootNotObject: "Inkestaren JSONak objektu bat izan behar du.",
    // "Undo"
    undo: "Desegin",
    // "Redo"
    redo: "Berregin",
    // "Expand"
    expandTooltip: "Zabaldu",
    // "Collapse"
    collapseTooltip: "Tolestu",
    // "Expand All"
    expandAllTooltip: "Zabaldu dena",
    // "Collapse All"
    collapseAllTooltip: "Tolestu dena",
    // "Zoom In"
    zoomInTooltip: "Handiagotu",
    // "Zoom to 100%"
    zoom100Tooltip: "Zooma %100ean",
    // "Zoom Out"
    zoomOutTooltip: "Txikiagotu",
    // "Lock expand/collapse state for questions"
    lockQuestionsTooltip: "Blokeatu galderen zabaltze/tolesteko egoera",
    // "Show more"
    showMoreChoices: "Erakutsi gehiago",
    // "Show less"
    showLessChoices: "Erakutsi gutxiago",
    // "Unknown function: \"{0}\"."
    expressionUnknownFunction: "Funtzio ezezaguna: \"{0}\".",
    // "Unknown functions: \"{0}\"."
    expressionUnknownFunctions: "Funtzio ezezagunak: \"{0}\".",
    // "Unknown variable: \"{0}\"."
    expressionUnknownVariable: "Aldagai ezezaguna: \"{0}\".",
    // "Unknown variables: \"{0}\"."
    expressionUnknownVariables: "Aldagai ezezagunak: \"{0}\".",
    // "Syntax error."
    expressionSyntaxError: "Sintaxi-errorea.",
    // "Semantic error."
    expressionSemanticsError: "Errore semantikoa.",
    // "Toolbox"
    toolbox: "Tresna-kutxa",
    // "Search"
    toolboxSearch: "Bilatu",
    // "Type to search..."
    toolboxFilteredTextPlaceholder: "Idatzi bilatzeko...",
    // "No results found"
    toolboxNoResultsFound: "Ez da emaitzarik aurkitu",
    // "No properties to display"
    propertyGridEmptySurveyText: "Ez dago erakusteko propietaterik",
    // "Type to search..."
    propertyGridFilteredTextPlaceholder: "Idatzi bilatzeko...",
    // "No results found"
    propertyGridNoResultsFound: "Ez da emaitzarik aurkitu",
    // "Start configuring your form"
    propertyGridPlaceholderTitle: "Hasi zure inprimakia konfiguratzen",
    // "Click any category icon to explore survey settings. Additional settings will become available once you add a survey element to the design surface."
    propertyGridPlaceholderDescription: "Egin klik edozein kategoria-ikonoan inkestaren ezarpenak aurkitzeko. Ezarpen gehigarriak erabilgarri egongo dira diseinu-gainean inkesta-elementu bat gehitu ondoren.",
    // "Survey Results "
    surveyResults: "Inkestaren emaitzak ",
    // "As Table"
    surveyResultsTable: "Taula gisa",
    // "As JSON"
    surveyResultsJson: "JSON gisa",
    // "Question Title"
    resultsTitle: "Galderaren izenburua",
    // "Question Name"
    resultsName: "Galderaren izena",
    // "Answer Value"
    resultsValue: "Erantzunaren balioa",
    // "Display Value"
    resultsDisplayValue: "Bistaratze-balioa",
    // "Modified"
    modified: "Aldatuta",
    // "Saving"
    saving: "Gordetzen",
    // "Saved"
    saved: "Gordeta",
    // "Error! Editor content is not saved."
    saveError: "Errorea! Editorearen edukia ez da gorde.",
    // "Language Settings"
    translationPropertyGridTitle: "Hizkuntza-ezarpenak",
    // "Theme Settings"
    themePropertyGridTitle: "Gaiaren ezarpenak",
    // "Add Language"
    addLanguageTooltip: "Gehitu hizkuntza",
    // "Languages"
    translationLanguages: "Hizkuntzak",
    // "Are you certain you wish to delete all strings for this language?"
    translationDeleteLanguage: "Ziur zaude hizkuntza honetako kate guztiak ezabatu nahi dituzula?",
    // "Select language to translate"
    translationAddLanguage: "Hautatu itzultzeko hizkuntza",
    // "All Strings"
    translationShowAllStrings: "Kate guztiak",
    // "Used Strings Only"
    translationShowUsedStringsOnly: "Erabilitako kateak soilik",
    // "All Pages"
    translationShowAllPages: "Orrialde guztiak",
    // "No strings to translate. Please change the filter."
    translationNoStrings: "Ez dago itzultzeko katerik. Aldatu iragazkia, mesedez.",
    // "Export to CSV"
    translationExportToSCVButton: "Esportatu CSVra",
    // "Import from CSV"
    translationImportFromSCVButton: "Inportatu CSVtik",
    // "Auto-translate All"
    translateUsigAI: "Itzuli dena automatikoki",
    // "Translate from: "
    translateUsigAIFrom: "Itzuli hemendik: ",
    // "Translate remaining strings"
    translateRemainingStrings: "Itzuli geratzen diren kateak",
    // "Untranslated strings"
    translationDialogTitle: "Itzuli gabeko kateak",
    // "Merge {0} with default locale"
    translationMergeLocaleWithDefault: "Bateratu {0} hizkuntza lehenetsiarekin",
    // "Translation..."
    translationPlaceHolder: "Itzulpena...",
    // "Source: "
    translationSource: "Iturria: ",
    // "Target: "
    translationTarget: "Helburua: ",
    // "Source language"
    translationSourceLanguage: "Iturburu-hizkuntza",
    // "Target language"
    translationTargetLanguage: "Helburu-hizkuntza",
    // "{0} of {1} strings translated"
    translationProgress: "{1} kateetatik {0} itzulita",
    // "Are you certain you wish to delete all translated strings for the selected language?"
    translationClearProgress: "Ziur zaude hautatutako hizkuntzako itzulitako kate guztiak ezabatu nahi dituzula?",
    // "Form View"
    translationSideBySideViewForm: "Inprimaki-ikuspegia",
    // "Grid View"
    translationSideBySideViewGrid: "Sare-ikuspegia",
    // "Translate strings"
    translateStrings: "Itzuli kateak",
    // "Survey Strings"
    translationSurveyStrings: "Inkestaren kateak",
    // "No strings to translate"
    translationStateNothingToTranslate: "Ez dago itzultzeko katerik",
    // "All strings are translated"
    translationStateAllTranslated: "Kate guztiak itzulita daude",
    // "{0} strings are not translated"
    translationStateUntranslated: "{0} kate ez daude itzulita",
    // "YouTube links are not supported."
    translationYouTubeNotSupported: "YouTube estekak ez dira onartzen.",
    // "Export"
    themeExportButton: "Esportatu",
    // "Import"
    themeImportButton: "Inportatu",
    // "Export"
    surveyJsonExportButton: "Esportatu",
    // "Import"
    surveyJsonImportButton: "Inportatu",
    // "Copy to clipboard"
    surveyJsonCopyButton: "Kopiatu arbelera",
    // "Reset theme settings to default"
    themeResetButton: "Berrezarri gaiaren ezarpenak lehenetsietara",
    // "Do you really want to reset the theme? All your customizations will be lost."
    themeResetConfirmation: "Ziur gaia berrezarri nahi duzula? Zure pertsonalizazio guztiak galduko dira.",
    // "Yes, reset the theme"
    themeResetConfirmationOk: "Bai, berrezarri gaia",
    // "Add Question"
    addNewQuestion: "Gehitu galdera",
    // "Select question type"
    selectQuestionType: "Hautatu galdera mota",
    // "Select page..."
    selectPage: "Hautatu orrialdea...",
    // "Choices are copied from"
    carryForwardChoicesCopied: "Aukerak hemendik kopiatzen dira",
    // "Choices are loaded from a web service."
    choicesLoadedFromWebText: "Aukerak web-zerbitzu batetik kargatzen dira.",
    // "Go to settings"
    choicesLoadedFromWebLinkText: "Joan ezarpenetara",
    // "Preview of loaded choice options"
    choicesLoadedFromWebPreviewTitle: "Kargatutako aukeren aurrebista",
    // "No expression set"
    expressionBannerPlaceholder: "Ez da adierazpenik ezarri",
    // "Edit expression"
    expressionBannerLinkText: "Editatu adierazpena",
    // "HTML content will be here."
    htmlPlaceHolder: "HTML edukia hemen egongo da.",
    // "Drop a question from the toolbox here."
    panelPlaceHolder: "Jaregin galdera bat tresna-kutxatik hemen.",
    // "The survey is empty. Drag an element from the toolbox or click the button below."
    surveyPlaceHolder: "Inkesta hutsik dago. Jaregin elementu bat tresna-kutxatik edo egin klik beheko botoian.",
    // "The page is empty. Drag an element from the toolbox or click the button below."
    pagePlaceHolder: "Orrialdea hutsik dago. Jaregin elementu bat tresna-kutxatik edo egin klik beheko botoian.",
    // "Drag and drop an image here or click the button below and choose an image to upload"
    imagePlaceHolder: "Jaregin irudi bat hemen edo egin klik beheko botoian eta hautatu igotzeko irudi bat",
    // "Click the \"Add Question\" button below to start creating your form."
    surveyPlaceHolderMobile: "Egin klik beheko \"Gehitu galdera\" botoian zure inprimakia sortzen hasteko.",
    // "Your form is empty"
    surveyPlaceholderTitle: "Zure inprimakia hutsik dago",
    // "Your form is empty"
    surveyPlaceholderTitleMobile: "Zure inprimakia hutsik dago",
    // "Drag an element from the toolbox or click the button below."
    surveyPlaceholderDescription: "Jaregin elementu bat tresna-kutxatik edo egin klik beheko botoian.",
    // "Drag an element from the toolbox or click the button below."
    surveyPlaceholderDescriptionMobile: "Jaregin elementu bat tresna-kutxatik edo egin klik beheko botoian.",
    // "No preview"
    previewPlaceholderTitle: "Ez dago aurrebisterik",
    // "No preview"
    previewPlaceholderTitleMobile: "Ez dago aurrebisterik",
    // "The survey doesn't contain any visible elements."
    previewPlaceholderDescription: "Inkestak ez du elementu ikusgairik.",
    // "The survey doesn't contain any visible elements."
    previewPlaceholderDescriptionMobile: "Inkestak ez du elementu ikusgairik.",
    // "No strings to translate"
    translationsPlaceholderTitle: "Ez dago itzultzeko katerik",
    // "No strings to translate"
    translationsPlaceholderTitleMobile: "Ez dago itzultzeko katerik",
    // "Add elements to your form or change the strings filter in the toolbar."
    translationsPlaceholderDescription: "Gehitu elementuak zure inprimakian edo aldatu kateen iragazkia tresna-barran.",
    // "Add elements to your form or change the strings filter in the toolbar."
    translationsPlaceholderDescriptionMobile: "Gehitu elementuak zure inprimakian edo aldatu kateen iragazkia tresna-barran.",
    // "Click the \"Add Question\" button below to add a new element to the page."
    pagePlaceHolderMobile: "Egin klik beheko \"Gehitu galdera\" botoian orrialdeari elementu berri bat gehitzeko.",
    // "Click the \"Add Question\" button below to add a new element to the panel."
    panelPlaceHolderMobile: "Egin klik beheko \"Gehitu galdera\" botoian panelari elementu berri bat gehitzeko.",
    // "Click the button below and choose an image to upload"
    imagePlaceHolderMobile: "Egin klik beheko botoian eta hautatu igotzeko irudi bat",
    // "Choose Image"
    imageChooseImage: "Hautatu irudia",
    // "Add {0}"
    addNewTypeQuestion: "Gehitu {0}", // {0} is localizable question type
    // "[LOGO]"
    chooseLogoPlaceholder: "[LOGOA]",
    // "Upload logo"
    chooseLogoAriaLabel: "Igo logotipoa",
    // "Item "
    choices_Item: "Elementua ",
    // "Select a file"
    selectFile: "Hautatu fitxategi bat",
    // "Remove the file"
    removeFile: "Kendu fitxategia",
    lg: {
      // "Add New Rule"
      addNewItem: "Gehitu arau berria",
      // "Create a rule to customize the flow of the survey."
      empty_tab: "Sortu arau bat inkestaren fluxua pertsonalizatzeko.",
      // "No logical rules"
      logicPlaceholderTitle: "Ez dago arau logikorik",
      // "No logical rules"
      logicPlaceholderTitleMobile: "Ez dago arau logikorik",
      // "Create a rule to customize the flow of the survey."
      logicPlaceholderDescription: "Sortu arau bat inkestaren fluxua pertsonalizatzeko.",
      // "Create a rule to customize the flow of the survey."
      logicPlaceholderDescriptionMobile: "Sortu arau bat inkestaren fluxua pertsonalizatzeko.",
      // "Show/hide page"
      page_visibilityName: "Erakutsi/ezkutatu orrialdea",
      // "Enable/disable page"
      page_enableName: "Gaitu/desgaitu orrialdea",
      // "Make page required"
      page_requireName: "Egin orrialdea derrigorrezkoa",
      // "Show/hide panel"
      panel_visibilityName: "Erakutsi/ezkutatu panela",
      // "Enable/disable panel"
      panel_enableName: "Gaitu/desgaitu panela",
      // "Make panel required"
      panel_requireName: "Egin panela derrigorrezkoa",
      // "Show/hide question"
      question_visibilityName: "Erakutsi/ezkutatu galdera",
      // "Enable/disable question"
      question_enableName: "Gaitu/desgaitu galdera",
      // "Make question required"
      question_requireName: "Egin galdera derrigorrezkoa",
      // "Reset question value"
      question_resetValueName: "Berrezarri galderaren balioa",
      // "Set question value"
      question_setValueName: "Ezarri galderaren balioa",
      // "Show/hide column"
      column_visibilityName: "Erakutsi/ezkutatu zutabea",
      // "Enable/disable column"
      column_enableName: "Gaitu/desgaitu zutabea",
      // "Make column required"
      column_requireName: "Egin zutabea derrigorrezkoa",
      // "Reset column value"
      column_resetValueName: "Berrezarri zutabearen balioa",
      // "Set column value"
      column_setValueName: "Ezarri zutabearen balioa",
      // "Complete survey"
      trigger_completeName: "Osatu inkesta",
      // "Set answer"
      trigger_setvalueName: "Ezarri erantzuna",
      // "Copy answer"
      trigger_copyvalueName: "Kopiatu erantzuna",
      // "Skip to question"
      trigger_skipName: "Egin jauzi galderara",
      // "Run expression"
      trigger_runExpressionName: "Exekutatu adierazpena",
      // "Set \"Thank You\" page markup"
      completedHtmlOnConditionName: "Ezarri \"Eskerrik asko\" orrialdearen markaketa",
      // "Make the page visible when the logical expression evaluates to true. Otherwise, keep the page invisible."
      page_visibilityDescription: "Egin orrialdea ikusgai adierazpen logikoak egia ematen duenean. Bestela, mantendu orrialdea ezkutatuta.",
      // "Make the page visible when the logical expression evaluates to true. Otherwise, keep the panel invisible."
      panel_visibilityDescription: "Egin panela ikusgai adierazpen logikoak egia ematen duenean. Bestela, mantendu panela ezkutatuta.",
      // "Make the panel and all elements inside it enabled when the logical expression evaluates to true. Otherwise, keep them disabled."
      panel_enableDescription: "Gaitu panela eta haren barruko elementu guztiak adierazpen logikoak egia ematen duenean. Bestela, mantendu desgaituta.",
      // "Make the question visible when the logical expression evaluates to true. Otherwise, keep the question invisible."
      question_visibilityDescription: "Egin galdera ikusgai adierazpen logikoak egia ematen duenean. Bestela, mantendu galdera ezkutatuta.",
      // "Make the question enabled when the logical expression evaluates to true. Otherwise, keep the question disabled."
      question_enableDescription: "Gaitu galdera adierazpen logikoak egia ematen duenean. Bestela, mantendu galdera desgaituta.",
      // "Question becomes required when the logical expression evaluates to true."
      question_requireDescription: "Galdera derrigorrezkoa bihurtzen da adierazpen logikoak egia ematen duenean.",
      // "When the logical expression evaluates to true, the survey ends, and the respondent sees the \"Thank you\" page."
      trigger_completeDescription: "Adierazpen logikoak egia ematen duenean, inkesta amaitzen da eta erantzuleak \"Eskerrik asko\" orrialdea ikusten du.",
      // "When question values used in the logical expression are changed, and the expression evaluates to true, the specified value is assigned to the selected question."
      trigger_setvalueDescription: "Adierazpen logikoan erabilitako galderen balioak aldatzen direnean eta adierazpenak egia ematen duenean, zehaztutako balioa hautatutako galderari esleitzen zaio.",
      // "When question values used in the logical expression are changed, and the expression evaluates to true, the value of the selected question is copied to another question."
      trigger_copyvalueDescription: "Adierazpen logikoan erabilitako galderen balioak aldatzen direnean eta adierazpenak egia ematen duenean, hautatutako galderaren balioa beste galdera batera kopiatzen da.",
      // "When the logical expression evaluates to true, the survey focuses/jumps to the selected question."
      trigger_skipDescription: "Adierazpen logikoak egia ematen duenean, inkestak hautatutako galderara egiten du foku/jauzi.",
      // "When the logical expression evaluates to true, the survey evaluates another expression. Optionally, the result of the latter expression can be assigned as a value to the selected question"
      trigger_runExpressionDescription: "Adierazpen logikoak egia ematen duenean, inkestak beste adierazpen bat ebaluatzen du. Aukeran, azken adierazpen horren emaitza hautatutako galderari balio gisa eslei dakioke",
      // "If the logical expression evaluates to true, the \"Thank You\" page displays the specified content."
      completedHtmlOnConditionDescription: "Adierazpen logikoak egia ematen badu, \"Eskerrik asko\" orrialdeak zehaztutako edukia bistaratzen du.",
      // "New rule"
      itemEmptyExpressionText: "Arau berria",
      // "make page {0} visible"
      page_visibilityText: "egin {0} orrialdea ikusgai", // {0} page name
      // "make panel {0} visible"
      panel_visibilityText: "egin {0} panela ikusgai", // {0} panel name
      // "make panel {0} enable"
      panel_enableText: "gaitu {0} panela", // {0} panel name
      // "make question {0} visible"
      question_visibilityText: "egin {0} galdera ikusgai", // {0} question name
      // "make question {0} enable"
      question_enableText: "gaitu {0} galdera", // {0} question name
      // "make question {0} required"
      question_requireText: "egin {0} galdera derrigorrezko", // {0} question name
      // "reset value for question: {0}"
      question_resetValueText: "berrezarri {0} galderaren balioa", // {0} question name.
      // "assign value: {1} to question: {0}"
      question_setValueText: "esleitu {1} balioa {0} galderari", // {0} question name and {1} setValueExpression
      // "make column {0} of question {1} visible"
      column_visibilityText: "egin {1} galderaren {0} zutabea ikusgai", // {0} column name, {1} question name
      // "make column {0} of question {1} enable"
      column_enableText: "gaitu {1} galderaren {0} zutabea", // {0} column name, {1} question name
      // "make column {0} of question {1} required"
      column_requireText: "egin {1} galderaren {0} zutabea derrigorrezko", // {0} column name, {1} question name
      // "reset cell value for column: {0}"
      column_resetValueText: "berrezarri {0} zutabearen gelaxka-balioa", // {0} column name
      // "assign cell value: {1} to column: {0}"
      column_setValueText: "esleitu {1} gelaxka-balioa {0} zutabeari", // {0} column name and {1} setValueExpression
      // "An expression whose result will be assigned to the target question."
      setValueExpressionPlaceholder: "Helburuko galderari esleituko zaion emaitza duen adierazpena.",
      // "Enter a value..."
      calculatedValuePlaceholder: "Sartu balio bat...",
      // "survey becomes completed"
      trigger_completeText: "inkesta osatuta geratuko da",
      // "set into question: {0} value {1}"
      trigger_setvalueText: "ezarri {0} galderan {1} balioa", // {0} question name, {1} setValue
      // "clear question value: {0}"
      trigger_setvalueEmptyText: "garbitu {0} galderaren balioa", // {0} question name
      // "copy into question: {0} value from question {1}"
      trigger_copyvalueText: "kopiatu {0} galderan {1} galderaren balioa", // {0} and {1} question names
      // "survey skip to the question {0}"
      trigger_skipText: "inkestak {0} galderara jauzi egiten du", // {0} question name
      // "run expression: '{0}'"
      trigger_runExpressionText1: "exekutatu adierazpena: '{0}'", // {0} the expression
      // " and set its result into question: {0}"
      trigger_runExpressionText2: " eta ezarri haren emaitza {0} galderan", // {0} question name
      // "show custom text for the \"Thank You\" page."
      completedHtmlOnConditionText: "erakutsi testu pertsonalizatua \"Eskerrik asko\" orrialdean.",
      // "All Questions"
      showAllQuestions: "Galdera guztiak",
      // "All Action Types"
      showAllActionTypes: "Ekintza mota guztiak",
      // "Condition(s)"
      conditions: "Baldintza(k)",
      // "Action(s)"
      actions: "Ekintza(k)",
      // "Define action(s)"
      actionsEditorTitle: "Definitu ekintza(k)",
      // "Delete Action"
      deleteAction: "Ezabatu ekintza",
      // "Add Action"
      addNewAction: "Gehitu ekintza",
      // "Select action..."
      selectedActionCaption: "Hautatu ekintza...",
      // "The logic expression is empty or invalid. Please correct it."
      expressionInvalid: "Logika-adierazpena hutsik edo baliogabea da. Zuzendu, mesedez.",
      // "Please fix issues in your action(s)."
      actionInvalid: "Konpondu zure ekintzetako arazoak, mesedez.",
      // "Logical rules are incomplete"
      uncompletedRule_title: "Arau logikoak osatu gabe daude",
      // "You have not completed some of the logical rules. If you leave the tab now, the changes will be lost. Do you still want to leave the tab without completing the changes?"
      uncompletedRule_text: "Arau logiko batzuk ez dituzu osatu. Orain fitxa uzten baduzu, aldaketak galduko dira. Ziur fitxa utzi nahi duzula aldaketak osatu gabe?",
      // "Yes"
      uncompletedRule_apply: "Bai",
      // "No, I want to complete the rules"
      uncompletedRule_cancel: "Ez, arauak osatu nahi ditut"
    }
  },
  // Host application variables
  vp: {
    // "Variable preset"
    selectorTitle: "Aldagai-aurrezarpena",
    // "None"
    noPreset: "Bat ere ez",
    // "View variable values"
    view: "Ikusi aldagaien balioak",
    // "Variable values"
    viewTitle: "Aldagaien balioak",
    // "Manage presets"
    edit: "Kudeatu aurrezarpenak",
    // "Variable Presets"
    editorTitle: "Aldagai-aurrezarpenak",
    // "Preset"
    presetName: "Aurrezarpena",
    // "Description"
    presetDescription: "Deskribapena",
    // "Add preset"
    addPreset: "Gehitu aurrezarpena",
    // "New preset"
    newPresetName: "Aurrezarpen berria",
    // "Delete preset"
    deletePreset: "Ezabatu aurrezarpena",
    // "Back"
    back: "Atzera",
    // "A preset with this name already exists"
    presetNameIsNotUnique: "Izen hori duen aurrezarpen bat badago lehendik",
    // "Enter a preset name"
    presetNameIsEmpty: "Sartu aurrezarpen-izen bat",
    // "Preset"
    listNameColumn: "Aurrezarpena",
    // "Description"
    listDescriptionColumn: "Deskribapena"
  },
  // AI assistant for expressions and conditions
  aiex: {
    // "Expression Assistant"
    title: "Adierazpen-laguntzailea",
    // "Write with AI"
    actionTitle: "Idatzi AIarekin",
    // "Describe what the expression should do"
    promptTitle: "Deskribatu zer egin behar duen adierazpenak",
    // "For example: show this question when the respondent is 18 or older"
    promptPlaceholder: "Adibidez: erakutsi galdera hau erantzuleak 18 urte edo gehiago dituenean",
    // "Describe the condition in words"
    promptLineTitle: "Deskribatu baldintza hitzez",
    // "Generate"
    generate: "Sortu",
    // "Refine"
    refine: "Findu",
    // "Explain"
    explain: "Azaldu",
    // "Stop"
    stop: "Gelditu",
    // "Accept"
    accept: "Onartu",
    // "Reject"
    reject: "Baztertu",
    // "Apply fix: {0}"
    applyFix: "Aplikatu konponketa: {0}",
    // "Current expression"
    currentExpression: "Uneko adierazpena",
    // "Suggested expression"
    newExpression: "Iradokitako adierazpena",
    // "Reads as"
    readsAs: "Honela irakurtzen da",
    // "The assistant's explanation"
    explanation: "Laguntzailearen azalpena",
    // "Check results"
    findings: "Egiaztapen-emaitzak",
    // "Error"
    severityError: "Errorea",
    // "Warning"
    severityWarning: "Abisua",
    // "Info"
    severityInfo: "Informazioa",
    // "in \"{0}\""
    inAction: "\"{0}\" ekintzan",
    // "Describe the expression and select Generate."
    statusReady: "Deskribatu adierazpena eta hautatu Sortu.",
    // "Waiting for the assistant..."
    statusLoading: "Laguntzailearen zain...",
    // "The request was cancelled."
    statusCancelled: "Eskaera bertan behera utzi da.",
    // "The assistant reported: {0}"
    statusError: "Laguntzaileak jakinarazi du: {0}",
    // "The assistant did not suggest an expression."
    statusEmpty: "Laguntzaileak ez zuen adierazpenik iradoki.",
    // "Review the suggested expression."
    statusReview: "Berrikusi iradokitako adierazpena.",
    // "The assistant explained the current expression."
    statusExplained: "Laguntzaileak uneko adierazpena azaldu du.",
    // "The suggested expression has errors and cannot be accepted."
    blockedByErrors: "Iradokitako adierazpenak erroreak ditu eta ezin da onartu.",
    // "The suggested expression could not be checked for every place it is written to, so it cannot be accepted."
    notChecked: "Ezin izan da egiaztatu iradokitako adierazpena idazten den leku guztietan, eta beraz ezin da onartu.",
    // "Add an action to the rule before asking the assistant."
    noActions: "Gehitu ekintza bat arauari laguntzaileari galdetu aurretik.",
    // "The first suggestion had errors and was corrected automatically."
    fixedAutomatically: "Lehen iradokizunak erroreak zituen eta automatikoki zuzendu da."
  },
  // Property Editors
  pe: {
    panel: {
      // "Panel name"
      name: "Panelaren izena",
      // "Panel title"
      title: "Panelaren izenburua",
      // "Panel description"
      description: "Panelaren deskribapena",
      // "Make the panel visible if"
      visibleIf: "Egin panela ikusgai baldin",
      // "Make the panel required if"
      requiredIf: "Egin panela derrigorrezko baldin",
      // "Question order within the panel"
      questionOrder: "Galderen ordena panelean",
      // "Move the panel to page"
      page: "Mugitu panela orrialdera",
      // "Display the panel on a new line"
      startWithNewLine: "Bistaratu panela lerro berri batean",
      // "Panel collapse state"
      state: "Panelaren tolestura-egoera",
      // "Inline panel width"
      width: "Panelaren zabalera linean",
      // "Minimum panel width"
      minWidth: "Panelaren gutxieneko zabalera",
      // "Maximum panel width"
      maxWidth: "Panelaren gehieneko zabalera",
      // "Number this panel"
      showNumber: "Zenbakitu panela"
    },
    panellayoutcolumn: {
      // "Effective width, %"
      effectiveWidth: "Zabalera eraginkorra, %",
      // "Question title width, px"
      questionTitleWidth: "Galderaren izenburuaren zabalera, px"
    },
    paneldynamic: {
      // "Panel name"
      name: "Panelaren izena",
      // "Panel title"
      title: "Panelaren izenburua",
      // "Panel description"
      description: "Panelaren deskribapena",
      // "Entry display mode"
      displayMode: "Sarreren bistaratze-modua",
      // "Make the panel visible if"
      visibleIf: "Egin panela ikusgai baldin",
      // "Make the panel required if"
      requiredIf: "Egin panela derrigorrezko baldin",
      // "Move the panel to page"
      page: "Mugitu panela orrialdera",
      // "Display the panel on a new line"
      startWithNewLine: "Bistaratu panela lerro berri batean",
      // "Panel collapse state"
      state: "Panelaren tolestura-egoera",
      // "Inline panel width"
      width: "Panelaren zabalera linean",
      // "Minimum panel width"
      minWidth: "Panelaren gutxieneko zabalera",
      // "Maximum panel width"
      maxWidth: "Panelaren gehieneko zabalera",
      // "Confirm entry removal"
      confirmDelete: "Berretsi sarrera kentzea",
      // "Entry description pattern"
      templateDescription: "Sarreren deskribapen-eredua",
      // "Entry title pattern"
      templateTitle: "Sarreren izenburu-eredua",
      // "Entry title placeholder"
      templateTitlePlaceholder: "Sarreren izenbururako leku-marka",
      // "Empty panel text"
      noEntriesText: "Panel hutsaren testua",
      // "Tab title pattern"
      templateTabTitle: "Fitxaren izenburu-eredua",
      // "Tab title placeholder"
      tabTitlePlaceholder: "Fitxaren izenbururako leku-marka",
      // "Make an individual entry visible if"
      templateVisibleIf: "Egin banakako sarrera bat ikusgai baldin",
      // "Number the panel"
      showNumber: "Zenbakitu panela",
      // "Panel title alignment"
      titleLocation: "Panelaren izenburuaren lerrokatzea",
      // "Panel description alignment"
      descriptionLocation: "Panelaren deskribapenaren lerrokatzea",
      // "Question title alignment"
      templateQuestionTitleLocation: "Galderaren izenburuaren lerrokatzea",
      // "Question title width"
      templateQuestionTitleWidth: "Galderaren izenburuaren zabalera",
      // "Error message alignment"
      templateErrorLocation: "Errore-mezuaren lerrokatzea",
      // "New entry location"
      newPanelPosition: "Sarrera berriaren kokapena",
      // "Entries per page"
      pageSize: "Sarrerak orrialde bakoitzeko",
      // "Allow users to sort entries"
      allowSort: "Baimendu erabiltzaileei sarrerak ordenatzen",
      // "Prevent duplicate responses in the following question"
      keyName: "Saihestu erantzun bikoiztuak ondoko galderan"
    },
    question: {
      // "Question name"
      name: "Galderaren izena",
      // "Question title"
      title: "Galderaren izenburua",
      // "Question description"
      description: "Galderaren deskribapena",
      // "Show the title and description"
      showTitle: "Erakutsi izenburua eta deskribapena",
      // "Make the question visible if"
      visibleIf: "Egin galdera ikusgai baldin",
      // "Make the question required if"
      requiredIf: "Egin galdera derrigorrezko baldin",
      // "Move the question to page"
      page: "Mugitu galdera orrialdera",
      // "Question box collapse state"
      state: "Galdera-koadroaren tolestura-egoera",
      // "Number this question"
      showNumber: "Zenbakitu galdera hau",
      // "Question title alignment"
      titleLocation: "Galderaren izenburuaren lerrokatzea",
      // "Question description alignment"
      descriptionLocation: "Galderaren deskribapenaren lerrokatzea",
      // "Error message alignment"
      errorLocation: "Errore-mezuaren lerrokatzea",
      // "Increase the inner indent"
      indent: "Handiagotu barneko koska",
      // "Inline question width"
      width: "Galderaren zabalera linean",
      // "Minimum question width"
      minWidth: "Galderaren gutxieneko zabalera",
      // "Maximum question width"
      maxWidth: "Galderaren gehieneko zabalera",
      // "Update input field value"
      textUpdateMode: "Eguneratu sarrera-eremuaren balioa"
    },
    signaturepad: {
      // "Signature area width"
      signatureWidth: "Sinadura-eremuaren zabalera",
      // "Signature area height"
      signatureHeight: "Sinadura-eremuaren altuera",
      // "Auto-scale the signature area"
      signatureAutoScaleEnabled: "Eskalatu automatikoki sinadura-eremua",
      // "Show a placeholder within signature area"
      showPlaceholder: "Erakutsi leku-marka sinadura-eremuan",
      // "Placeholder text"
      placeholder: "Leku-markaren testua",
      // "Placeholder text in read-only or preview mode"
      placeholderReadOnly: "Leku-markaren testua irakurtzeko soilik edo aurrebista moduan",
      // "Show the Clear button within signature area"
      allowClear: "Erakutsi Garbitu botoia sinadura-eremuan",
      // "Minimum stroke width"
      penMinWidth: "Trazuaren gutxieneko lodiera",
      // "Maximum stroke width"
      penMaxWidth: "Trazuaren gehieneko lodiera",
      // "Stroke color"
      penColor: "Trazuaren kolorea"
    },
    comment: {
      // "Input field height (in lines)"
      rows: "Sarrera-eremuaren altuera (lerrotan)"
    },
    // "Question numbering"
    showQuestionNumbers: "Galderen zenbakitzea",
    // "Question indexing type"
    questionStartIndex: "Galderen zenbakitze-mota",
    expression: {
      // "Expression name"
      name: "Adierazpenaren izena",
      // "Expression title"
      title: "Adierazpenaren izenburua",
      // "Expression description"
      description: "Adierazpenaren deskribapena",
      // "Expression"
      expression: "Adierazpena"
    },
    trigger: {
      // "Expression"
      expression: "Adierazpena"
    },
    calculatedvalue: {
      // "Expression"
      expression: "Adierazpena"
    },
    filter: {
      // "Data source"
      // "Show filter chips"
      // "Show the Filters button"
      // "Show search"
      // "Search in"
      searchFields: "Bilatu hemen",
      // "Presets"
      presets: "Aurrezarpenak",
      // "Default preset"
      defaultPreset: "Aurrezarpen lehenetsia",
      // "Allow multiple presets"
      // "Allow respondents to add presets"
      allowAddPresets: "Baimendu erantzuleei aurrezarpenak gehitzen"
    },
    filterpreset: {
      // "Preset name"
      name: "Aurrezarpenaren izena",
      // "Preset title"
      title: "Aurrezarpenaren izenburua",
      // "Filter expression"
      expression: "Iragazki-adierazpena",
      // "Allow editing"
      allowEdit: "Baimendu editatzea",
      // "Allow deleting"
      allowDelete: "Baimendu ezabatzea"
    },
    sortcriterion: {
      // "Sort by"
      field: "Ordenatu honen arabera",
      // "Order"
      direction: "Ordena"
    },
    urlconditionitem: {
      // "Expression"
      expression: "Adierazpena"
    },
    htmlconditionitem: {
      // "Expression"
      expression: "Adierazpena"
    },
    // survey templates
    survey: {
      // "Survey title"
      title: "Inkestaren izenburua",
      // "Survey description"
      description: "Inkestaren deskribapena",
      // "Make the survey read-only"
      readOnly: "Egin inkesta irakurtzeko soilik",
      // "Regional formats"
      regionalFormat: "Eskualdeko formatuak"
    },
    page: {
      // "Page name"
      name: "Orrialdearen izena",
      // "Page title"
      title: "Orrialdearen izenburua",
      // "Page description"
      description: "Orrialdearen deskribapena",
      // "Make the page visible if"
      visibleIf: "Egin orrialdea ikusgai baldin",
      // "Make the page required if"
      requiredIf: "Egin orrialdea derrigorrezko baldin",
      // "Time limit to complete the page"
      timeLimit: "Orrialdea osatzeko denbora-muga",
      // "Question order on the page"
      questionOrder: "Galderen ordena orrialdean"
    },
    matrixdropdowncolumn: {
      // "Column name"
      name: "Zutabearen izena",
      // "Column title"
      title: "Zutabearen izenburua",
      // "Prevent duplicate responses"
      isUnique: "Saihestu erantzun bikoiztuak",
      // "Column width"
      width: "Zutabearen zabalera",
      // "Minimum column width"
      minWidth: "Zutabearen gutxieneko zabalera",
      // "Input field height (in lines)"
      rows: "Sarrera-eremuaren altuera (lerrotan)",
      // "Make the column visible if"
      visibleIf: "Egin zutabea ikusgai baldin",
      // "Make the column required if"
      requiredIf: "Egin zutabea derrigorrezko baldin",
      // "Each option in a separate column"
      showInMultipleColumns: "Aukera bakoitza zutabe bereizi batean",
      // "Allow sorting by this column"
      allowSort: "Baimendu zutabe honen araberako ordenatzea",
      // "Allow filtering by this column"
      allowFiltering: "Baimendu zutabe honen araberako iragazketa"
    },
    matrixcolumn: {
      // "Clear others in the same row"
      isExclusive: "Garbitu besteak errenkada berean"
    },
    multipletextitem: {
      // "Name"
      name: "Izena",
      // "Title"
      title: "Izenburua"
    },
    masksettings: {
      // "Save masked value in survey results"
      saveMaskedValue: "Gorde maskaratutako balioa inkestaren emaitzetan"
    },
    regionalformat: {
      // "Region"
      locale: "Eskualdea",
      // "Date pattern"
      datePattern: "Data-eredua",
      // "Time pattern"
      timePattern: "Ordu-eredua",
      // "Decimal separator"
      decimalSeparator: "Hamartar bereizlea",
      // "Thousands separator"
      thousandsSeparator: "Milakoen bereizlea",
      // "Currency symbol"
      currencySymbol: "Moneta-ikurra",
      // "Currency pattern"
      currencyPattern: "Moneta-eredua"
    },
    patternmask: {
      // "Value pattern"
      pattern: "Balioaren eredua"
    },
    datetimemask: {
      // "Minimum value"
      min: "Gutxieneko balioa",
      // "Maximum value"
      max: "Gehieneko balioa"
    },
    numericmask: {
      // "Allow negative values"
      allowNegativeValues: "Baimendu balio negatiboak",
      // "Thousands separator"
      thousandsSeparator: "Milakoen bereizlea",
      // "Decimal separator"
      decimalSeparator: "Hamartar bereizlea",
      // "Value precision"
      precision: "Balioaren doitasuna",
      // "Show trailing zeros"
      showTrailingZeros: "Erakutsi amaierako zeroak",
      // "Minimum value"
      min: "Gutxieneko balioa",
      // "Maximum value"
      max: "Gehieneko balioa"
    },
    currencymask: {
      // "Currency symbol"
      currencySymbol: "Moneta-ikurra",
      // "Currency pattern"
      currencyPattern: "Moneta-eredua"
    },
    // "Clear others when selected"
    isExclusive: "Garbitu besteak hautatzean",
    // "Display both text and value"
    showValue: "Bistaratu testua eta balioa",
    // "Require user to enter a comment"
    isCommentRequired: "Eskatu erabiltzaileari iruzkin bat sartzeko",
    // "Display area height"
    imageHeight: "Bistaratze-arearen altuera",
    // "Display area width"
    imageWidth: "Bistaratze-arearen zabalera",
    // "Join identifier"
    valueName: "Elkartze-identifikatzailea",
    // "Default display value for dynamic texts"
    defaultDisplayValue: "Testu dinamikoen bistaratze-balio lehenetsia",
    // "Label alignment"
    rateDescriptionLocation: "Etiketen lerrokatzea",
    // "Cell error message alignment"
    cellErrorLocation: "Gelaxka-errorearen mezuaren lerrokatzea",
    // "Enabled"
    enabled: "Gaituta",
    // "Disabled"
    disabled: "Desgaituta",
    // "Inherit"
    inherit: "Heredatu",
    // "Clear"
    clear: "Garbitu",
    // "Set"
    set: "Ezarri",
    // "Change"
    change: "Aldatu",
    // "Close"
    close: "Itxi",
    // "Delete"
    delete: "Ezabatu",
    // "Add item"
    addNew: "Gehitu elementua",
    // "Click to add an item..."
    addItem: "Egin klik elementu bat gehitzeko...",
    // "Click to remove the item..."
    removeItem: "Egin klik elementua kentzeko...",
    // "Add {0}"
    addItemAriaLabel: "Gehitu {0}",
    // "Remove {0}"
    removeItemAriaLabel: "Kendu {0}",
    // "Drag the item"
    dragItem: "Arrastatu elementua",
    // "Expand nested choices"
    expandNestedChoices: "Zabaldu habiaratutako aukerak",
    // "Collapse nested choices"
    collapseNestedChoices: "Tolestu habiaratutako aukerak",
    // "Expand nested choices of {0}"
    expandNestedChoicesAriaLabel: "Zabaldu {0}(r)en habiaratutako aukerak",
    // "Collapse nested choices of {0}"
    collapseNestedChoicesAriaLabel: "Tolestu {0}(r)en habiaratutako aukerak",
    // "Show description"
    showDescription: "Erakutsi deskribapena",
    // "Hide description"
    hideDescription: "Ezkutatu deskribapena",
    // "Edit"
    edit: "Editatu",
    // "Done"
    doneEditing: "Eginda",
    // "Value is empty"
    emptyValue: "Balioa hutsik dago",
    // "Manual Entry"
    fastEntry: "Eskuzko sarrera",
    // "Value '{0}' is not unique"
    fastEntryNonUniqueError: "\"{0}\" balioa ez da bakarra",
    // "Please limit the number of items from {0} to {1}"
    fastEntryChoicesCountError: "Mugatu elementu-kopurua {0}(e)tik {1}(e)ra",
    // "Please enter at least {0} items"
    fastEntryChoicesMinCountError: "Sartu gutxienez {0} elementu",
    // "Enter the list of choice options and their IDs in the following format:\n\nid|option\n\nA choice option ID is not visible to respondents and can be used in conditional rules."
    fastEntryPlaceholder: "Sartu aukera-zerrenda eta haien IDak formatu honetan:\n\nid|aukera\n\nAukera baten IDa ez da erantzulearentzat ikusgai eta baldintza-arauetan erabil daiteke.",
    // "Please select the action"
    conditionActionEmpty: "Hautatu ekintza, mesedez",
    // "Select a question..."
    conditionSelectQuestion: "Hautatu galdera bat...",
    // "Select a page..."
    conditionSelectPage: "Hautatu orrialde bat...",
    // "Select a panel..."
    conditionSelectPanel: "Hautatu panel bat...",
    // "Press ctrl+space to get expression completion hint"
    aceEditorHelp: "Sakatu ctrl+space adierazpena osatzeko iradokizunak lortzeko",
    // "Review before submit"
    showPreviewBeforeComplete: "Berrikusi bidali aurretik",
    // "Enabled by a condition"
    overridingPropertyPrefix: "Baldintza batek gaituta",
    // "Reset"
    resetToDefaultCaption: "Berrezarri",
    // "Please enter a value"
    propertyIsEmpty: "Sartu balio bat, mesedez",
    // "Please enter a unique value"
    propertyIsNoUnique: "Sartu balio bakarra, mesedez",
    // "Please enter a unique name"
    propertyNameIsNotUnique: "Sartu izen bakarra, mesedez",
    // "Do not use reserved words: \"item\", \"choice\", \"panel\", \"row\"."
    propertyNameIsIncorrect: "Ez erabili erreserbatutako hitzak: \"item\", \"choice\", \"panel\", \"row\".",
    // "No items"
    listIsEmpty: "Ez dago elementurik",
    // "No choices"
    "listIsEmpty@choices": "Ez dago aukerarik",
    // "No custom rating values"
    "listIsEmpty@rateValues": "Ez dago balorazio-balio pertsonalizaturik",
    // "No custom labels"
    "listIsEmpty@customLabels": "Ez dago etiketa pertsonalizaturik",
    // "No areas"
    "listIsEmpty@areas": "Ez dago arearik",
    // "No columns"
    "listIsEmpty@columns": "Ez dago zutaberik",
    // "No layout columns"
    "listIsEmpty@gridLayoutColumns": "Ez dago diseinu-zutaberik",
    // "No rows"
    "listIsEmpty@rows": "Ez dago errenkadarik",
    // "No validation rules"
    "listIsEmpty@validators": "Ez dago balidazio-arauik",
    // "No custom variables"
    "listIsEmpty@calculatedValues": "Ez dago aldagai pertsonalizaturik",
    // "No triggers"
    "listIsEmpty@triggers": "Ez dago abiarazlerik",
    // "No conditional markup"
    "listIsEmpty@completedHtmlOnCondition": "Ez dago baldintzapeko markaketarik",
    // "No links"
    "listIsEmpty@navigateToUrlOnCondition": "Ez dago estekarik",
    // "No pages"
    "listIsEmpty@pages": "Ez dago orrialderik",
    // "No sort levels"
    "listIsEmpty@sortCriteria": "Ez dago ordenatze-mailarik",
    // "No presets"
    "listIsEmpty@filterPresets": "Ez dago aurrezarpenik",
    // "Add choice"
    "addNew@choices": "Gehitu aukera",
    // "Add rating value"
    "addNew@rateValues": "Gehitu balorazio-balioa",
    // "Add label"
    "addNew@customLabels": "Gehitu etiketa",
    // "Add area"
    "addNew@areas": "Gehitu area",
    // "Add column"
    "addNew@columns": "Gehitu zutabea",
    // "Add row"
    "addNew@rows": "Gehitu errenkada",
    // "Add rule"
    "addNew@validators": "Gehitu araua",
    // "Add variable"
    "addNew@calculatedValues": "Gehitu aldagaia",
    // "Add trigger"
    "addNew@triggers": "Gehitu abiarazlea",
    // "Add markup"
    "addNew@completedHtmlOnCondition": "Gehitu markaketa",
    // "Add link"
    "addNew@navigateToUrlOnCondition": "Gehitu esteka",
    // "Add page"
    "addNew@pages": "Gehitu orrialdea",
    // "Add sort level"
    "addNew@sortCriteria": "Gehitu ordenatze-maila",
    // "Add preset"
    "addNew@filterPresets": "Gehitu aurrezarpena",
    // "Value"
    value: "Balioa",
    // "Text"
    text: "Testua",
    // "Image or video file URL"
    imageLink: "Irudi edo bideo-fitxategiaren URLa",
    // "URL"
    url: "URLa",
    // "Path to data"
    path: "Datuen bidea",
    choicesbyurl: {
      // "Web service URL"
      url: "Web-zerbitzuaren URLa",
      // "Get value to store from the following property"
      valueName: "Lortu gordetzeko balioa ondoko propietatetik"
    },
    // "Get value to display from the following property"
    titleName: "Lortu bistaratzeko balioa ondoko propietatetik",
    // "Get file URLs from the following property"
    imageLinkName: "Lortu fitxategi-URLak ondoko propietatetik",
    // "Accept empty response"
    allowEmptyResponse: "Onartu erantzun hutsa",
    // "Survey Title"
    surveyTitlePlaceholder: "Inkestaren izenburua",
    // "Page {num}"
    pageTitlePlaceholder: "{num}. orrialdea",
    // "Panel Title"
    panelTitlePlaceholder: "Panelaren izenburua",
    // "Start Page"
    startPageTitlePlaceholder: "Hasierako orrialdea",
    // "Description"
    descriptionPlaceholder: "Deskribapena",
    // "Description"
    surveyDescriptionPlaceholder: "Deskribapena",
    // "Description"
    pageDescriptionPlaceholder: "Deskribapena",
    // "Wrap choices"
    textWrapEnabled: "Egokitu aukerak",
    // "Enable the \"Other\" option"
    showOtherItem: "Gaitu \"Beste\" aukera",
    // "Rename the \"Other\" option"
    otherText: "Berridatzi \"Beste\" aukera",
    // "Enable the \"None\" option"
    showNoneItem: "Gaitu \"Bat ere ez\" aukera",
    // "Enable the \"Refuse to Answer\" option"
    showRefuseItem: "Gaitu \"Uko egin erantzuteari\" aukera",
    // "Enable the \"Don't Know\" option"
    showDontKnowItem: "Gaitu \"Ez dakit\" aukera",
    // "Rename the \"None\" option"
    noneText: "Berridatzi \"Bat ere ez\" aukera",
    // "Enable the \"Select All\" option"
    showSelectAllItem: "Gaitu \"Hautatu dena\" aukera",
    // "Rename the \"Select All\" option"
    selectAllText: "Berridatzi \"Hautatu dena\" aukera",
    // "Minimum value for auto-generated items"
    choicesMin: "Automatikoki sortutako elementuen gutxieneko balioa",
    // "Maximum value for auto-generated items"
    choicesMax: "Automatikoki sortutako elementuen gehieneko balioa",
    // "Step value for auto-generated items"
    choicesStep: "Automatikoki sortutako elementuen urrats-balioa",
    // "Name"
    name: "Izena",
    // "Title"
    title: "Izenburua",
    // "Cell input type"
    cellType: "Gelaxkaren sarrera-mota",
    // "Column count"
    colCount: "Zutabe-kopurua",
    // "Choice order"
    choicesOrder: "Aukeren ordena",
    // "Allow custom choices"
    allowCustomChoices: "Baimendu aukera pertsonalizatuak",
    // "\"Create Custom Choice\" command text"
    createCustomChoiceText: "\"Sortu aukera pertsonalizatua\" komandoaren testua",
    // "Visible"
    visible: "Ikusgai",
    // "Required"
    isRequired: "Derrigorrezkoa",
    // "Require a positive answer"
    requireTrue: "Eskatu erantzun positiboa",
    // "Mark as required"
    markRequired: "Markatu derrigorrezko gisa",
    // "Remove the required mark"
    removeRequiredMark: "Kendu derrigorrezko marka",
    // "Require an answer in each row"
    eachRowRequired: "Eskatu erantzuna errenkada bakoitzean",
    // "Prevent duplicate responses in rows"
    eachRowUnique: "Saihestu erantzun bikoiztuak errenkadetan",
    // "Error message for required questions"
    requiredErrorText: "Derrigorrezko galderen errore-mezua",
    // "Error message when Yes is required"
    requireTrueErrorText: "Bai erantzuna behar denean erakusteko errore-mezua",
    // "Display the question on a new line"
    startWithNewLine: "Bistaratu galdera lerro berri batean",
    // "Rows"
    rows: "Errenkadak",
    // "Columns"
    cols: "Zutabeak",
    // "Placeholder text within input field"
    placeholder: "Sarrera-eremuaren leku-markaren testua",
    // "Show preview area"
    showPreview: "Erakutsi aurrebista-area",
    // "Store file content in JSON result as text"
    storeDataAsText: "Gorde fitxategiaren edukia JSON emaitzan testu gisa",
    // "Maximum file size (in bytes)"
    maxSize: "Fitxategiaren gehieneko tamaina (byteetan)",
    // "Maximum number of files"
    maxFiles: "Fitxategien gehieneko kopurua",
    // "Initial number of rows"
    rowCount: "Hasierako errenkada-kopurua",
    // "Rows per page"
    pageSize: "Errenkadak orrialde bakoitzeko",
    // "Allow users to sort rows"
    allowSort: "Baimendu erabiltzaileei errenkadak ordenatzen",
    // "Allow filtering by this question"
    allowFiltering: "Baimendu galdera honen araberako iragazketa",
    // "Filter operators"
    filterOperators: "Iragazki-eragileak",
    // "Maximum sort levels"
    maxSortLevel: "Gehieneko ordenatze-mailak",
    // "Default sort order"
    sortCriteria: "Ordenatze-ordena lehenetsia",
    // "Show sort bar"
    showSortBar: "Erakutsi ordenatze-barrak",
    // "Columns layout"
    columnLayout: "Zutabeen diseinua",
    // "\"Add Row\" button alignment"
    addRowButtonLocation: "\"Gehitu errenkada\" botoiaren lerrokatzea",
    // "Transpose rows to columns"
    transposeData: "Transposatu errenkadak zutabeetara",
    // "\"Add Row\" button text"
    addRowText: "\"Gehitu errenkada\" botoiaren testua",
    // "\"Remove Row\" button text"
    removeRowText: "\"Kendu errenkada\" botoiaren testua",
    // "Input field title pattern"
    singleInputTitleTemplate: "Sarrera-eremuaren izenburu-eredua",
    // "Minimum rating value"
    rateMin: "Gutxieneko balorazio-balioa",
    // "Maximum rating value"
    rateMax: "Gehieneko balorazio-balioa",
    // "Step value"
    rateStep: "Urrats-balioa",
    // "Minimum value label"
    minRateDescription: "Gutxieneko balioaren etiketa",
    // "Maximum value label"
    maxRateDescription: "Gehieneko balioaren etiketa",
    // "Input type"
    inputType: "Sarrera-mota",
    // "Default Answer"
    defaultValue: "Erantzun lehenetsia",
    // "Default texts"
    cellsDefaultRow: "Testu lehenetsiak",
    // "Maximum character limit"
    maxLength: "Gehieneko karaktere-kopurua",
    // "and"
    and: "eta",
    // "or"
    or: "edo",
    // "Remove"
    remove: "Kendu",
    // "Add Condition"
    addCondition: "Gehitu baldintza",
    // "Select a question to start configuring conditions."
    emptyLogicPopupMessage: "Hautatu galdera bat baldintzak konfiguratzen hasteko.",
    // "If"
    if: "Baldin",
    // "then"
    then: "orduan",
    // "Target question"
    setToName: "Helburuko galdera",
    // "Question to copy answer from"
    fromName: "Erantzuna kopiatzeko galdera",
    // "Question to skip to"
    gotoName: "Jauzi egiteko galdera",
    // "Rule is incorrect"
    ruleIsNotSet: "Araua okerra da",
    // "Add to the survey results"
    includeIntoResult: "Gehitu inkestaren emaitzetan",
    // "Make the title and description visible"
    showTitle: "Egin izenburua eta deskribapena ikusgai",
    // "Select a survey language"
    locale: "Hautatu inkesta-hizkuntza",
    // "Select device type"
    simulator: "Hautatu gailu mota",
    // "Switch to landscape orientation"
    landscapeOrientation: "Aldatu orientazio horizontala",
    // "Switch to portrait orientation"
    portraitOrientation: "Aldatu orientazio bertikala",
    // "Clear hidden question values"
    clearInvisibleValues: "Garbitu ezkutatutako galderen balioak",
    // "Limit to one response"
    cookieName: "Mugatu erantzun bakarrera",
    // "Auto-save survey progress on page change"
    partialSendEnabled: "Gorde automatikoki inkestaren aurrerapena orrialdez aldatzean",
    // "Save the \"Other\" option value as a separate property"
    storeOthersAsComment: "Gorde \"Beste\" aukeraren balioa propietate bereizi gisa",
    // "Show page titles"
    showPageTitles: "Erakutsi orrialdeen izenburuak",
    // "Show page numbers"
    showPageNumbers: "Erakutsi orrialde-zenbakiak",
    // "\"Previous Page\" button text"
    pagePrevText: "\"Aurreko orrialdea\" botoiaren testua",
    // "\"Next Page\" button text"
    pageNextText: "\"Hurrengo orrialdea\" botoiaren testua",
    // "\"Complete Survey\" button text"
    completeText: "\"Osatu inkesta\" botoiaren testua",
    // "\"Review Answers\" button text"
    previewText: "\"Berrikusi erantzunak\" botoiaren testua",
    // "\"Edit Answer\" button text"
    editText: "\"Editatu erantzuna\" botoiaren testua",
    // "\"Start Survey\" button text"
    startSurveyText: "\"Hasi inkesta\" botoiaren testua",
    // "Show navigation buttons"
    showNavigationButtons: "Erakutsi nabigazio-botoiak",
    // "Navigation buttons alignment"
    navigationButtonsLocation: "Nabigazio-botoien lerrokatzea",
    // "Show the \"Previous Page\" button"
    showPrevButton: "Erakutsi \"Aurreko orrialdea\" botoia",
    // "First page is a start page"
    firstPageIsStartPage: "Lehen orrialdea hasierako orrialdea da",
    // "Show the \"Thank You\" page"
    showCompletePage: "Erakutsi \"Eskerrik asko\" orrialdea",
    // "Auto-advance to the next page"
    autoAdvanceEnabled: "Joan automatikoki hurrengo orrialdera",
    // "Complete the survey automatically"
    autoAdvanceAllowComplete: "Osatu inkesta automatikoki",
    // "Show the progress bar"
    showProgressBar: "Erakutsi aurrerapen-barra",
    // "Progress bar alignment"
    progressBarLocation: "Aurrerapen-barraren lerrokatzea",
    // "Question title alignment"
    questionTitleLocation: "Galderaren izenburuaren lerrokatzea",
    // "Question title width"
    questionTitleWidth: "Galderaren izenburuaren zabalera",
    // "Required symbol(s)"
    requiredMark: "Derrigorrezko ikurra(k)",
    // "Question title template, default is: '{no}. {require} {title}'"
    questionTitleTemplate: "Galderaren izenburu-txantiloia; lehenetsia: '{no}. {require} {title}'",
    // "Error message alignment"
    questionErrorLocation: "Errore-mezuaren lerrokatzea",
    // "Focus first question on a new page"
    autoFocusFirstQuestion: "Fokua jarri orrialde berriko lehen galderan",
    // "Enable choice shortcuts"
    choiceShortcutsEnabled: "Gaitu aukera-lasterbideak",
    // "Show keyboard hints"
    showKeyboardHints: "Erakutsi teklatu-iradokizunak",
    // "Question order"
    questionOrder: "Galderen ordena",
    // "Time limit to complete the survey"
    timeLimit: "Inkesta osatzeko denbora-muga",
    // "Time limit to complete one page"
    timeLimitPerPage: "Orrialde bat osatzeko denbora-muga",
    // "Use a timer"
    showTimer: "Erabili tenporizadorea",
    // "Timer alignment"
    timerLocation: "Tenporizadorearen lerrokatzea",
    // "Timer mode"
    timerInfoMode: "Tenporizadore modua",
    // "Enable entry addition"
    allowAddPanel: "Gaitu sarrerak gehitzea",
    // "Enable entry removal"
    allowRemovePanel: "Gaitu sarrerak kentzea",
    // "\"Add Entry\" button text"
    addPanelText: "\"Gehitu sarrera\" botoiaren testua",
    // "\"Remove Entry\" button text"
    removePanelText: "\"Kendu sarrera\" botoiaren testua",
    // "Show all elements on one page"
    isSinglePage: "Erakutsi elementu guztiak orrialde bakarrean",
    // "HTML markup"
    html: "HTML markaketa",
    // "Answer"
    setValue: "Erantzuna",
    // "Storage format"
    dataFormat: "Gordetze-formatua",
    // "Enable row addition"
    allowAddRows: "Gaitu errenkadak gehitzea",
    // "Enable row removal"
    allowRemoveRows: "Gaitu errenkadak kentzea",
    // "Enable row reordering"
    allowRowReorder: "Gaitu errenkaden ordena aldatzea",
    // "Does not apply if you specify the exact display area width or height."
    responsiveImageSizeHelp: "Ez da aplikatzen bistaratze-arearen zabalera edo altuera zehatza ematen baduzu.",
    // "Minimum display area width"
    minImageWidth: "Bistaratze-arearen gutxieneko zabalera",
    // "Maximum display area width"
    maxImageWidth: "Bistaratze-arearen gehieneko zabalera",
    // "Minimum display area height"
    minImageHeight: "Bistaratze-arearen gutxieneko altuera",
    // "Maximum display area height"
    maxImageHeight: "Bistaratze-arearen gehieneko altuera",
    // "Minimum value"
    minValue: "Gutxieneko balioa",
    // "Maximum value"
    maxValue: "Gehieneko balioa",
    // "Case insensitive"
    caseInsensitive: "Maiuskulak eta minuskulak berdin tratatu",
    // "Minimum length (in characters)"
    minLength: "Gutxieneko luzera (karakteretan)",
    // "Allow digits"
    allowDigits: "Baimendu zifrak",
    // "Minimum count"
    minCount: "Gutxieneko kopurua",
    // "Maximum count"
    maxCount: "Gehieneko kopurua",
    // "Regular expression"
    regex: "Adierazpen erregularra",
    surveyvalidator: {
      // "Notification message for invalid input"
      text: "Sarrera baliogabearen jakinarazpen-mezua",
      // "Valid when"
      expression: "Baliozkoa noiz",
      // "Notification type"
      notificationType: "Jakinarazpen-mota",
      // "Maximum length (in characters)"
      maxLength: "Gehieneko luzera (karakteretan)"
    },
    // "Total row header"
    totalText: "Guztizkoaren errenkada-burua",
    // "Aggregation method"
    totalType: "Agregazio-metodoa",
    // "Total value expression"
    totalExpression: "Guztizko balioaren adierazpena",
    // "Total value display format"
    totalDisplayStyle: "Guztizko balioaren bistaratze-formatua",
    // "Currency"
    totalCurrency: "Moneta",
    // "Formatted string"
    totalFormat: "Kate formateatua",
    // "Survey logo"
    logo: "Inkestaren logotipoa",
    // "Survey layout"
    questionsOnPageMode: "Inkestaren diseinua",
    // "Restrict answer length"
    maxTextLength: "Mugatu erantzunaren luzera",
    // "Restrict comment length"
    maxCommentLength: "Mugatu iruzkinaren luzera",
    // "Comment area height (in lines)"
    commentAreaRows: "Iruzkin-arearen altuera (lerrotan)",
    // "Auto-expand text areas"
    autoGrowComment: "Zabaldu automatikoki testu-areak",
    // "Allow users to resize text areas"
    allowResizeComment: "Baimendu erabiltzaileei testu-areen tamaina aldatzen",
    // "Update input field values"
    textUpdateMode: "Eguneratu sarrera-eremuen balioak",
    // "Input mask type"
    maskType: "Sarrera-maskararen mota",
    // "Set focus on the first invalid answer"
    autoFocusFirstError: "Fokua jarri lehen erantzun baliogabean",
    // "Run validation"
    checkErrorsMode: "Exekutatu balidazioa",
    // "Validate empty fields on lost focus"
    validateVisitedEmptyFields: "Balidatu eremu hutsak fokua galtzean",
    // "Redirect to an external link after submission"
    navigateToUrl: "Berbideratu kanpoko esteka batera bidali ostean",
    // "Dynamic external link"
    navigateToUrlOnCondition: "Kanpoko esteka dinamikoa",
    // "Markup to show if the user already filled out this survey"
    completedBeforeHtml: "Erabiltzaileak inkesta hau bete duela adierazteko markaketa",
    // "\"Thank You\" page markup"
    completedHtml: "\"Eskerrik asko\" orrialdearen markaketa",
    // "Dynamic \"Thank You\" page markup"
    completedHtmlOnCondition: "\"Eskerrik asko\" orrialdearen markaketa dinamikoa",
    // "Markup to show while survey model is loading"
    loadingHtml: "Inkesta-modeloa kargatzen den bitartean erakusteko markaketa",
    // "Comment area text"
    commentText: "Iruzkin-arearen testua",
    // "Autocomplete type"
    autocomplete: "Automatikoki osatzeko mota",
    // "Label for \"True\""
    labelTrue: "\"Egia\"ren etiketa",
    // "Label for \"False\""
    labelFalse: "\"Gezurra\"ren etiketa",
    // "Show the Clear button"
    allowClear: "Erakutsi Garbitu botoia",
    // "Search mode"
    searchMode: "Bilaketa-modua",
    // "Display format"
    displayStyle: "Bistaratze-formatua",
    // "Formatted string"
    format: "Kate formateatua",
    // "Maximum fractional digits"
    maximumFractionDigits: "Gehieneko zifra hamartarrak",
    // "Minimum fractional digits"
    minimumFractionDigits: "Gutxieneko zifra hamartarrak",
    // "Display grouping separators"
    useGrouping: "Erakutsi taldekatze-bereizleak",
    // "Enable multiple file upload"
    allowMultiple: "Gaitu fitxategi anitz igotzea",
    // "Preview uploaded images"
    allowImagesPreview: "Aurreikusi igotako irudiak",
    // "Accepted file categories"
    acceptedCategories: "Onartutako fitxategi-kategoriak",
    // "Additional file extensions"
    acceptedTypes: "Fitxategi-luzapen gehigarriak",
    // "Wait for upload to complete"
    waitForUpload: "Itxaron igoera amaitzeko",
    // "Row details alignment"
    detailPanelMode: "Errenkadaren xehetasunen lerrokatzea",
    // "Minimum number of rows"
    minRowCount: "Gutxieneko errenkada-kopurua",
    // "Maximum number of rows"
    maxRowCount: "Gehieneko errenkada-kopurua",
    // "Row count expression"
    rowCountExpression: "Errenkada-kopuruaren adierazpena",
    // "Confirm row removal"
    confirmDelete: "Berretsi errenkada kentzea",
    // "Confirmation message"
    confirmDeleteText: "Berrespen-mezua",
    // "Initial number of entries"
    panelCount: "Hasierako sarrera-kopurua",
    // "Minimum number of entries"
    minPanelCount: "Gutxieneko sarrera-kopurua",
    // "Maximum number of entries"
    maxPanelCount: "Gehieneko sarrera-kopurua",
    // "Entry count expression"
    panelCountExpression: "Sarrera-kopuruaren adierazpena",
    // "Initial entry state"
    panelsState: "Hasierako sarrera-egoera",
    // "\"Previous Entry\" button text"
    prevPanelText: "\"Aurreko sarrera\" botoiaren testua",
    // "\"Next Entry\" button text"
    nextPanelText: "\"Hurrengo sarrera\" botoiaren testua",
    // "\"Remove Entry\" button alignment"
    removePanelButtonLocation: "\"Kendu sarrera\" botoiaren lerrokatzea",
    // "Hide the question if it has no rows"
    hideIfRowsEmpty: "Ezkutatu galdera errenkadarik ez badu",
    // "Hide columns if there are no rows"
    hideColumnsIfEmpty: "Ezkutatu zutabeak errenkadarik ez badago",
    // "Custom rating values"
    rateValues: "Balorazio-balio pertsonalizatuak",
    // "Rating count"
    rateCount: "Balorazio-kopurua",
    // "Rating configuration"
    autoGenerate: "Balorazioaren konfigurazioa",
    slider: {
      // "Min value"
      min: "Gutxieneko balioa",
      // "Max value"
      max: "Gehieneko balioa",
      // "Step value"
      step: "Urrats-balioa",
      // "Show scale labels"
      showLabels: "Erakutsi eskala-etiketak",
      // segmentCount: "Number of segments",
      tooltipVisibility: "Erakutsi tresna-iradokizunak",
      // "Allow thumb crossing"
      allowSwap: "Baimendu karratuek elkar gurutzatzea",
      // "Number of auto-generated labels"
      labelCount: "Automatikoki sortutako etiketa-kopurua",
      // "Min value expression"
      minValueExpression: "Gutxieneko balioaren adierazpena",
      // "Max value expression"
      maxValueExpression: "Gehieneko balioaren adierazpena",
      // "Scale labels configuration"
      autoGenerate: "Eskala-etiketen konfigurazioa",
      // "Slider type"
      sliderType: "Gradutzaile mota",
      // "Min range length"
      minRangeLength: "Gutxieneko tarte-luzera",
      // "Max range length"
      maxRangeLength: "Gehieneko tarte-luzera",
      // "Custom labels"
      customLabels: "Etiketa pertsonalizatuak",
      // "Label format"
      labelFormat: "Etiketa-formatua",
      // "Tooltip format"
      tooltipFormat: "Tresna-iradokizunaren formatua"
    },
    imagemap: {
      // "Image URL"
      imageLink: "Irudiaren URLa",
      // "Areas"
      areas: "Areak",
      // "Allow multiple selections"
      multiSelect: "Baimendu hautapen anitz",
      // "Value property name"
      valuePropertyName: "Balioaren propietate-izena",
      // "Shape"
      shape: "Forma",
      // "Idle fill color"
      idleFillColor: "Inaktibo dagoen betetze-kolorea",
      // "Idle stroke color"
      idleStrokeColor: "Inaktibo dagoen trazu-kolorea",
      // "Idle stroke width"
      idleStrokeWidth: "Inaktibo dagoen trazu-lodiera",
      // "Hover fill color"
      hoverFillColor: "Gainetik pasatzean betetze-kolorea",
      // "Hover stroke color"
      hoverStrokeColor: "Gainetik pasatzean trazu-kolorea",
      // "Hover stroke width"
      hoverStrokeWidth: "Gainetik pasatzean trazu-lodiera",
      // "Selected fill color"
      selectedFillColor: "Hautatuta dagoen betetze-kolorea",
      // "Selected stroke color"
      selectedStrokeColor: "Hautatuta dagoen trazu-kolorea",
      // "Selected stroke width"
      selectedStrokeWidth: "Hautatuta dagoen trazu-lodiera",
      // "Maximum selected areas"
      maxSelectedAreas: "Gehieneko area hautatuak",
      // "Minimum selected areas"
      minSelectedAreas: "Gutxieneko area hautatuak"
    },
    imagemaparea: {
      // "Value"
      value: "Balioa",
      // "Shape"
      shape: "Forma",
      // "Coordinates"
      coords: "Koordenatuak",
      // "Idle fill color"
      idleFillColor: "Inaktibo dagoen betetze-kolorea",
      // "Idle stroke color"
      idleStrokeColor: "Inaktibo dagoen trazu-kolorea",
      // "Idle stroke width"
      idleStrokeWidth: "Inaktibo dagoen trazu-lodiera",
      // "Hover fill color"
      hoverFillColor: "Gainetik pasatzean betetze-kolorea",
      // "Hover stroke color"
      hoverStrokeColor: "Gainetik pasatzean trazu-kolorea",
      // "Hover stroke width"
      hoverStrokeWidth: "Gainetik pasatzean trazu-lodiera",
      // "Selected fill color"
      selectedFillColor: "Hautatuta dagoen betetze-kolorea",
      // "Selected stroke color"
      selectedStrokeColor: "Hautatuta dagoen trazu-kolorea",
      // "Selected stroke width"
      selectedStrokeWidth: "Hautatuta dagoen trazu-lodiera"
    },
    file: {
      // "Image height"
      imageHeight: "Irudiaren altuera",
      // "Image width"
      imageWidth: "Irudiaren zabalera",
      // "Confirm file deletion"
      confirmDelete: "Berretsi fitxategia ezabatzea"
    },
    // "Hide the question if it has no choices"
    hideIfChoicesEmpty: "Ezkutatu galdera aukerarik ez badu",
    // "Minimum width"
    minWidth: "Gutxieneko zabalera",
    // "Maximum width"
    maxWidth: "Gehieneko zabalera",
    // "Width"
    width: "Zabalera",
    // "Show column headers"
    showHeader: "Erakutsi zutabeen goiburuak",
    // "Show horizontal scrollbar"
    horizontalScroll: "Erakutsi desplazamendu-barra horizontala",
    // "Minimum column width"
    columnMinWidth: "Zutabearen gutxieneko zabalera",
    // "Row header width"
    rowTitleWidth: "Errenkadaren goiburuaren zabalera",
    // "Value to store when \"True\" is selected"
    valueTrue: "\"Egia\" hautatzean gordetzeko balioa",
    // "Value to store when \"False\" is selected"
    valueFalse: "\"Gezurra\" hautatzean gordetzeko balioa",
    // "\"Value is below minimum\" error message"
    minErrorText: "\"Balioa gutxienekotik behera dago\" errore-mezua",
    // "\"Value exceeds maximum\" error message"
    maxErrorText: "\"Balioak gehienekoa gainditzen du\" errore-mezua",
    // "\"Value does not match step size\" error message"
    stepErrorText: "\"Balioak ez dator bat urrats-tamainarekin\" errore-mezua",
    // "\"Empty comment\" error message"
    otherErrorText: "\"Iruzkin hutsa\" errore-mezua",
    // "Error message for duplicate responses"
    keyDuplicationError: "Erantzun bikoiztuen errore-mezua",
    // "Minimum choices to select"
    minSelectedChoices: "Hautatzeko gutxieneko aukerak",
    // "Maximum choices to select"
    maxSelectedChoices: "Hautatzeko gehieneko aukerak",
    // "Logo width"
    logoWidth: "Logotipoaren zabalera",
    // "Logo height"
    logoHeight: "Logotipoaren altuera",
    // "Read-only"
    readOnly: "Irakurtzeko soilik",
    // "Read-only mode"
    readOnlyMode: "Irakurtzeko soilik modua",
    // "Disable the read-only mode if"
    enableIf: "Desgaitu irakurtzeko soilik modua baldin",
    // "\"No rows\" message"
    noRowsText: "\"Errenkadarik ez\" mezua",
    // "Separate special choices"
    separateSpecialChoices: "Bereizi aukera bereziak",
    // "Copy choices from the following question"
    choicesFromQuestion: "Kopiatu aukerak ondoko galderatik",
    // "Which choice options to copy"
    choicesFromQuestionMode: "Zein aukera kopiatu",
    // "Use values from the following matrix column or panel question as choice IDs"
    choiceValuesFromQuestion: "Erabili ondoko matrize-zutabe edo panel-galderaren balioak aukeren ID gisa",
    // "Use values from the following matrix column or panel question as choice texts"
    choiceTextsFromQuestion: "Erabili ondoko matrize-zutabe edo panel-galderaren balioak aukeren testu gisa",
    // "Display page titles in the progress bar"
    progressBarShowPageTitles: "Bistaratu orrialdeen izenburuak aurrerapen-barran",
    // "Display navigation text in the progress bar"
    progressBarShowNavigationText: "Bistaratu nabigazio-testua aurrerapen-barran",
    // "Navigation text alignment"
    progressBarNavigationTextLocation: "Nabigazio-testuaren lerrokatzea",
    // "Display page numbers in the progress bar"
    progressBarShowPageNumbers: "Bistaratu orrialde-zenbakiak aurrerapen-barran",
    // "Add a comment box"
    showCommentArea: "Gehitu iruzkin-koadro bat",
    // "Placeholder text for the comment box"
    commentPlaceholder: "Iruzkin-koadroaren leku-markaren testua",
    // "Show the labels as extreme values"
    displayRateDescriptionsAsExtremeItems: "Erakutsi etiketak muturreko balio gisa",
    // "Row order"
    rowOrder: "Errenkaden ordena",
    // "Nested column count"
    columnColCount: "Habiaratutako zutabe-kopurua",
    // "Correct Answer"
    correctAnswer: "Erantzun zuzena",
    // "Default Values"
    defaultPanelValue: "Balio lehenetsiak",
    // "Cell Texts"
    cells: "Gelaxka-testuak",
    // "Select a file or paste a file link..."
    fileInputPlaceholder: "Hautatu fitxategi bat edo itsatsi fitxategi-esteka bat...",
    // "Prevent duplicate responses in the following column"
    keyName: "Saihestu erantzun bikoiztuak ondoko zutabean",
    itemvalue: {
      // "Make the option visible if"
      visibleIf: "Egin aukera ikusgai baldin",
      // "Make the option selectable if"
      enableIf: "Egin aukera hautagarri baldin"
    },
    "itemvalue@rows": {
      // "Make the row visible if"
      visibleIf: "Egin errenkada ikusgai baldin",
      // "Make the row editable if"
      enableIf: "Egin errenkada editagarri baldin"
    },
    imageitemvalue: {
      // "Alt text"
      text: "Ordezko testua"
    },
    // "Logo alignment"
    logoPosition: "Logotipoaren lerrokatzea",
    // "Preview mode"
    previewMode: "Aurrebista modua",
    // "Enable grid layout"
    gridLayoutEnabled: "Gaitu sare-diseinua",
    // "Grid columns"
    gridLayoutColumns: "Sarearen zutabeak",
    // "Mask settings"
    maskSettings: "Maskararen ezarpenak",
    // "Row details error message alignment"
    detailErrorLocation: "Errenkadaren xehetasunen errore-mezuaren lerrokatzea",
    // Creator tabs
    tabs: {
      // "General"
      general: "Orokorra",
      // "HTML Editor"
      html: "HTML editorea",
      // "Columns"
      columns: "Zutabeak",
      // "Rows"
      rows: "Errenkadak",
      // "Entries"
      entries: "Sarrerak",
      // "Choice Options"
      choices: "Aukerak",
      // "Items"
      items: "Elementuak",
      // "Visible If"
      visibleIf: "Ikusgai baldin",
      // "Editable If"
      enableIf: "Editagarri baldin",
      // "Required If"
      requiredIf: "Derrigorrezko baldin",
      // "Rating Values"
      rateValues: "Balorazio-balioak",
      // "Slider Settings"
      sliderSettings: "Gradutzailearen ezarpenak",
      // "Filter Settings"
      filterSettings: "Iragazkiaren ezarpenak",
      // "Presets"
      presets: "Aurrezarpenak",
      // "Choices from a Web Service"
      choicesByUrl: "Aukerak web-zerbitzu batetik",
      // "Numbering"
      numbering: "Zenbakitzea",
      // "Validators"
      validators: "Balidatzaileak",
      // "Navigation"
      navigation: "Nabigazioa",
      // "Question Settings"
      question: "Galderaren ezarpenak",
      // "Pages"
      pages: "Orrialdeak",
      // "Regional Formats"
      regionalFormat: "Eskualdeko formatuak",
      // "Quiz Mode"
      timer: "Galdetegi-modua",
      // "Calculated Values"
      calculatedValues: "Balio kalkulatuak",
      // "Triggers"
      triggers: "Abiarazleak",
      // "Title template"
      templateTitle: "Izenburu-eredua",
      // "Totals"
      totals: "Guztira",
      // "Conditions"
      logic: "Baldintzak",
      // "Input Mask Settings"
      mask: "Sarrera-maskararen ezarpenak",
      layout: {
        // "Panel Layout"
        panel: "Panelaren diseinua",
        // "Layout"
        question: "Diseinua",
        // "Layout"
        base: "Diseinua"
      },
      // "Data"
      data: "Datuak",
      // "Validation"
      validation: "Balidazioa",
      // "Individual Cell Texts"
      cells: "Gelaxka bakoitzaren testuak",
      // "\"Thank You\" Page"
      showOnCompleted: "\"Eskerrik asko\" orrialdea",
      // "Logo in the Survey Header"
      logo: "Logotipoa inkestaren goiburuan",
      // "Expression"
      expression: "Adierazpena",
      // "Question Settings"
      questionSettings: "Galderaren ezarpenak",
      // "Header"
      header: "Goiburua",
      // "Background"
      background: "Atzeko planoa",
      // "Appearance"
      appearance: "Itxura",
      // "Accent colors"
      accentColors: "Azentu-koloreak",
      // "Surface background"
      surfaceBackground: "Azaleraren atzeko planoa",
      // "Scaling"
      scaling: "Eskalatzea",
      // "Others"
      others: "Beste batzuk"
    },
    // "Items"
    items: "Elementuak",
    // "Make choices visible if"
    choicesVisibleIf: "Egin aukerak ikusgai baldin",
    // "Make choices selectable if"
    choicesEnableIf: "Egin aukerak hautagarri baldin",
    // "Increase the inner indent"
    innerIndent: "Handiagotu barneko koska",
    // "Use answers from the last entry as default"
    copyDefaultValueFromLastEntry: "Erabili azken sarrerako erantzunak lehenetsi gisa",
    // "Type expression here..."
    emptyExpressionPlaceHolder: "Idatzi adierazpena hemen...",
    // "Clear hidden question values"
    clearIfInvisible: "Garbitu ezkutatutako galderen balioak",
    // "Store values in the following property"
    valuePropertyName: "Gorde balioak ondoko propietatean",
    // "Enable search-as-you-type"
    searchEnabled: "Gaitu idatzi ahala bilatzeko",
    // "Hide selected items"
    hideSelectedItems: "Ezkutatu hautatutako elementuak",
    // "Collapse the dropdown upon selection"
    closeOnSelect: "Tolestu goitibeherakoa hautatzean",
    // "Vertical alignment within cells"
    verticalAlign: "Lerrokatze bertikala gelaxketan",
    // "Alternate row colors"
    alternateRows: "Txandakatu errenkaden koloreak",
    // "Make columns visible if"
    columnsVisibleIf: "Egin zutabeak ikusgai baldin",
    // "Make rows visible if"
    rowsVisibleIf: "Egin errenkadak ikusgai baldin",
    // "Placeholder text for the comment box"
    otherPlaceholder: "Iruzkin-koadroaren leku-markaren testua",
    // "Placeholder text for Local file"
    filePlaceholder: "Fitxategi lokalaren leku-markaren testua",
    // "Placeholder text for Camera"
    photoPlaceholder: "Kameraren leku-markaren testua",
    // "Placeholder text for Local file or Camera"
    fileOrPhotoPlaceholder: "Fitxategi lokalaren edo kameraren leku-markaren testua",
    // "Rating icon"
    rateType: "Balorazio-ikonoa",
    // "Ex.: https://api.example.com/books"
    url_placeholder: "Adib.: https://api.example.com/books",
    // "Ex.: categories.fiction"
    path_placeholder: "Adib.: categories.fiction",
    // "Ex.: a)"
    questionStartIndex_placeholder: "Adib.: a)",
    // "Ex.: 6in"
    width_placeholder: "Adib.: 6in",
    // "Ex.: 600px"
    minWidth_placeholder: "Adib.: 600px",
    // "Ex.: 50%"
    maxWidth_placeholder: "Adib.: 50%",
    // "auto"
    imageHeight_placeholder: "automatikoa",
    // "auto"
    imageWidth_placeholder: "automatikoa",
    // "Ex.: 100px"
    itemTitleWidth_placeholder: "Adib.: 100px",
    theme: {
      // "Theme"
      themeName: "Gaia",
      // "Question appearance"
      isPanelless: "Galderen itxura",
      // "Background and corner radius"
      editorPanel: "Atzeko planoa eta ertzaren erradioa",
      // "Background and corner radius"
      questionPanel: "Atzeko planoa eta ertzaren erradioa",
      // "Accent color"
      primaryColor: "Azentu-kolorea",
      // "Panel and question box opacity"
      panelBackgroundTransparency: "Panelaren eta galdera-koadroaren opakutasuna",
      // "Input element opacity"
      questionBackgroundTransparency: "Sarrera-elementuaren opakutasuna",
      // "Survey font size"
      fontSize: "Inkestaren letra-tamaina",
      // "Survey scale factor"
      scale: "Inkestaren eskala-faktorea",
      // "Corner radius"
      cornerRadius: "Ertzaren erradioa",
      // "Advanced mode"
      advancedMode: "Modu aurreratua",
      // "Title font"
      pageTitle: "Izenburuaren letra-tipoa",
      // "Description font"
      pageDescription: "Deskribapenaren letra-tipoa",
      // "Title font"
      questionTitle: "Izenburuaren letra-tipoa",
      // "Description font"
      questionDescription: "Deskribapenaren letra-tipoa",
      // "Font"
      inputContent: "Letra-tipoa",
      // "Opacity"
      backgroundOpacity: "Opakutasuna", // Auto-generated string
      // "Survey font family"
      "--sjs2-typography-font-family-text": "Inkestaren letra-tipoaren familia",
      // "Background color"
      "--sjs2-color-utility-surface-survey": "Atzeko planoaren kolorea",
      // "Accent background colors"
      "--sjs2-color-project-brand-600": "Azentu-koloreen atzeko planoa",
      // "Accent foreground colors"
      "--sjs2-color-fg-brand-on-primary": "Azentu-koloreen aurreko planoa",
      // "Error message colors"
      "--sjs2-color-bg-alert-primary": "Errore-mezuen koloreak",
      // "Shadow effects"
      "--sjs2-border-effect-surface-default": "Itzal-efektuak",
      // "Shadow effects"
      "--sjs2-border-effect-component-formbox-default": "Itzal-efektuak",
      // "Colors"
      "--sjs2-color-component-input-default-line": "Koloreak"
    },
    "header@header": {
      // "View"
      headerView: "Ikuspegia",
      // "Logo alignment"
      logoPosition: "Logotipoaren lerrokatzea",
      // "Survey title font"
      surveyTitle: "Inkestaren izenburuaren letra-tipoa",
      // "Survey description font"
      surveyDescription: "Inkestaren deskribapenaren letra-tipoa",
      // "Survey title font"
      headerTitle: "Inkestaren izenburuaren letra-tipoa",
      // "Survey description font"
      headerDescription: "Inkestaren deskribapenaren letra-tipoa",
      // "Content area width"
      inheritWidthFrom: "Eduki-arearen zabalera",
      // "Text width"
      textAreaWidth: "Testuaren zabalera",
      // "Background color"
      backgroundColorSwitch: "Atzeko planoaren kolorea",
      // "Background image"
      backgroundImage: "Atzeko planoaren irudia",
      // "Opacity"
      backgroundImageOpacity: "Opakutasuna",
      // "Overlap"
      overlapEnabled: "Gainjartzea",
      // "Logo alignment"
      logoPositionX: "Logotipoaren lerrokatzea",
      // "Survey title alignment"
      titlePositionX: "Inkestaren izenburuaren lerrokatzea",
      // "Survey description alignment"
      descriptionPositionX: "Inkestaren deskribapenaren lerrokatzea"
    }
  },
  // Property values
  pv: {
    // "true"
    "true": "Bai",
    // "false"
    "false": "Ez",
    // "Local file"
    file: "Fitxategi lokala",
    // "Camera"
    camera: "Kamera",
    // "Local file or Camera"
    "file-camera": "Fitxategi lokala edo kamera",
    // "Inherit"
    inherit: "Heredatu",
    // "Inherit"
    default: "Heredatu",
    // "Initial"
    initial: "Hasierakoa",
    // "Random"
    random: "Ausazkoa",
    // "Collapsed"
    collapsed: "Tolestuta",
    // "Expanded"
    expanded: "Zabaldua",
    // "None"
    none: "Bat ere ez",
    // "Ascending"
    asc: "Goranzko ordena",
    // "Descending"
    desc: "Beheranzko ordena",
    // "Selected"
    selected: "Hautatuta",
    // "Unselected"
    unselected: "Hautatu gabe",
    // "decimal"
    decimal: "hamartarra",
    // "currency"
    currency: "moneta",
    // "percent"
    percent: "ehunekoa",
    // "First panel is expanded"
    firstExpanded: "Lehen panela zabalduta",
    // "Hide question numbers"
    off: "Ezkutatu galdera-zenbakiak",
    // "List"
    list: "Zerrenda",
    // "Carousel"
    carousel: "Karrusela",
    // "Tabs"
    tab: "Fitxak",
    // "Horizontal"
    horizontal: "Horizontala",
    // "Vertical"
    vertical: "Bertikala",
    // "Top"
    top: "Goian",
    // "Bottom"
    bottom: "Behean",
    // "Top and bottom"
    topBottom: "Goian eta behean",
    // "Left"
    left: "Ezkerrean",
    // "Right"
    right: "Eskuinean",
    // "Center"
    center: "Erdian",
    // "Left and right"
    leftRight: "Ezkerrean eta eskuinean",
    // "Middle"
    middle: "Erdian",
    // "color"
    color: "kolorea",
    // "date"
    date: "data",
    // "datetime"
    datetime: "data-ordua",
    // "datetime-local"
    "datetime-local": "data-ordu lokala",
    // "email"
    email: "helbide elektronikoa",
    // "month"
    month: "hilabetea",
    // "number"
    number: "zenbakia",
    // "password"
    password: "pasahitza",
    // "range"
    range: "tartea",
    // "tel"
    tel: "telefonoa",
    // "text"
    text: "testua",
    // "time"
    time: "ordua",
    // [Auto-translated] "url"
    url: "URL",
    // "week"
    week: "astea",
    // "Hidden"
    hidden: "Ezkutatuta",
    // "Contain"
    contain: "Eduki",
    // "Cover"
    cover: "Estali",
    // "Fill"
    fill: "Bete",
    // "Next"
    next: "Hurrengoa",
    // "Last"
    last: "Azkena",
    // "Upon survey completion"
    onComplete: "Inkesta amaitzean",
    // "When question gets hidden"
    onHidden: "Galdera ezkutatzen denean",
    // "When question or its panel/page gets hidden"
    onHiddenContainer: "Galdera edo haren panela/orrialdea ezkutatzen denean",
    clearInvisibleValues: {
      // "Never"
      none: "Inoiz ez"
    },
    clearIfInvisible: {
      // "Never"
      none: "Inoiz ez"
    },
    readOnlyMode: {
      // "Read-only"
      readonly: "Irakurtzeko soilik",
      // "View"
      view: "Ikusi"
    },
    // "Radio buttons"
    radio: "Aukera-botoiak",
    inputType: {
      // "Color"
      color: "Kolorea",
      // "Date"
      date: "Data",
      // "Date and Time"
      "datetime-local": "Data eta ordua",
      // "Email"
      email: "Helbide elektronikoa",
      // "Month"
      month: "Hilabetea",
      // "Number"
      number: "Zenbakia",
      // "Password"
      password: "Pasahitza",
      // "Range"
      range: "Tartea",
      // "Phone Number"
      tel: "Telefono-zenbakia",
      // "Text"
      text: "Testua",
      // "Time"
      time: "Ordua",
      // "URL"
      url: "URLa",
      // "Week"
      week: "Astea"
    },
    sliderType: {
      // "Single-Value"
      single: "Balio bakarra",
      // "Range"
      range: "Tartea"
    },
    tooltipVisibility: {
      // "Auto"
      auto: "Automatikoa",
      // "Always"
      always: "Beti",
      // "Never"
      never: "Inoiz ez"
    },
    notificationType: {
      // "Error"
      error: "Errorea",
      // "Warning"
      warning: "Abisua",
      // "Informational"
      info: "Informazioa"
    },
    cameraFacingMode: {
      // "Front"
      user: "Aurrealdea",
      // "Rear"
      environment: "Atzealdea"
    },
    acceptedCategories: {
      // "Images"
      image: "Irudiak",
      // "Videos"
      video: "Bideoak",
      // "Audio"
      audio: "Audioa",
      // "Documents"
      document: "Dokumentuak",
      // "Archives"
      archive: "Artxiboak",
      // "Custom"
      custom: "Pertsonalizatua"
    },
    autocomplete: {
      // "Full Name"
      name: "Izen-abizenak",
      // "Prefix"
      "honorific-prefix": "Aurrizkia",
      // "First Name"
      "given-name": "Izena",
      // "Middle Name"
      "additional-name": "Bigarren izena",
      // "Last Name"
      "family-name": "Abizena",
      // "Suffix"
      "honorific-suffix": "Atzizkia",
      // "Nickname"
      nickname: "Ezizena",
      // "Job Title"
      "organization-title": "Lanbidea",
      // "User Name"
      username: "Erabiltzaile-izena",
      // "New Password"
      "new-password": "Pasahitz berria",
      // "Current Password"
      "current-password": "Uneko pasahitza",
      // "Organization Name"
      organization: "Erakundearen izena",
      // "Full Street Address"
      "street-address": "Kale-helbide osoa",
      // "Address Line 1"
      "address-line1": "Helbidearen 1. lerroa",
      // "Address Line 2"
      "address-line2": "Helbidearen 2. lerroa",
      // "Address Line 3"
      "address-line3": "Helbidearen 3. lerroa",
      // "Level 4 Address"
      "address-level4": "4. mailako helbidea",
      // "Level 3 Address"
      "address-level3": "3. mailako helbidea",
      // "Level 2 Address"
      "address-level2": "2. mailako helbidea",
      // "Level 1 Address"
      "address-level1": "1. mailako helbidea",
      // "Country Code"
      country: "Herrialde-kodea",
      // "Country Name"
      "country-name": "Herrialdearen izena",
      // "Postal Code"
      "postal-code": "Posta-kodea",
      // "Cardholder Name"
      "cc-name": "Txartelaren titularraren izena",
      // "Cardholder First Name"
      "cc-given-name": "Titularraren izena",
      // "Cardholder Middle Name"
      "cc-additional-name": "Titularraren bigarren izena",
      // "Cardholder Last Name"
      "cc-family-name": "Titularraren abizena",
      // "Credit Card Number"
      "cc-number": "Kreditu-txartelaren zenbakia",
      // "Expiration Date"
      "cc-exp": "Iraungitze-data",
      // "Expiration Month"
      "cc-exp-month": "Iraungitze-hilabetea",
      // "Expiration Year"
      "cc-exp-year": "Iraungitze-urtea",
      // "Card Security Code"
      "cc-csc": "Txartelaren segurtasun-kodea",
      // "Credit Card Type"
      "cc-type": "Kreditu-txartel mota",
      // "Transaction Currency"
      "transaction-currency": "Transakzio-moneta",
      // "Transaction Amount"
      "transaction-amount": "Transakzio-zenbatekoa",
      // "Preferred Language"
      language: "Hizkuntza hobetsia",
      // "Birthday"
      bday: "Jaioteguna",
      // "Birthday Day"
      "bday-day": "Jaioteguneko eguna",
      // "Birthday Month"
      "bday-month": "Jaioteguneko hilabetea",
      // "Birthday Year"
      "bday-year": "Jaioteguneko urtea",
      // "Gender"
      sex: "Generoa",
      // "Website URL"
      url: "Webgunearen URLa",
      // "Profile Photo"
      photo: "Profil-argazkia",
      // "Telephone Number"
      tel: "Telefono-zenbakia",
      // "Country Code for Phone"
      "tel-country-code": "Telefonoaren herrialde-kodea",
      // "National Telephone Number"
      "tel-national": "Telefono-zenbaki nazionala",
      // "Area Code"
      "tel-area-code": "Arlo-kodea",
      // "Local Phone Number"
      "tel-local": "Tokiko telefono-zenbakia",
      // "Local Phone Prefix"
      "tel-local-prefix": "Tokiko telefono-aurrizkia",
      // "Local Phone Suffix"
      "tel-local-suffix": "Tokiko telefono-atzizkia",
      // "Phone Extension"
      "tel-extension": "Luzapena",
      // "Email Address"
      email: "Helbide elektronikoa",
      // "Instant Messaging Protocol"
      impp: "Berehalako mezularitza-protokoloa"
    },
    maskType: {
      // "None"
      none: "Bat ere ez",
      // "Pattern"
      pattern: "Eredua",
      // "Numeric"
      numeric: "Zenbakizkoa",
      // "Date and Time"
      datetime: "Data eta ordua",
      // "Currency"
      currency: "Moneta"
    },
    inputTextAlignment: {
      // "Auto"
      auto: "Automatikoa",
      // "Left"
      left: "Ezkerra",
      // "Right"
      right: "Eskuina"
    },
    // "All"
    all: "Guztiak",
    // "Page"
    page: "Orrialdea",
    // "Survey"
    survey: "Inkesta",
    // "When switching to the next page"
    onNextPage: "Hurrengo orrialdera aldatzean",
    // "After an answer is changed"
    onValueChanged: "Erantzun bat aldatu ondoren",
    questionsOnPageMode: {
      // "Original structure"
      standard: "Jatorrizko egitura",
      // "Show all questions on one page"
      singlePage: "Erakutsi galdera guztiak orrialde bakarrean",
      // "Show single question per page"
      questionPerPage: "Erakutsi galdera bakarra orrialde bakoitzeko",
      // "Show single input field per page"
      inputPerPage: "Erakutsi sarrera-eremu bakarra orrialde bakoitzeko"
    },
    // "Show all questions"
    allQuestions: "Erakutsi galdera guztiak",
    // "Show answered questions only"
    answeredQuestions: "Erakutsi erantzundako galderak soilik",
    // "Completed pages"
    pages: "Osatutako orrialdeak",
    // "Answered questions"
    questions: "Erantzundako galderak",
    // "Answered required questions"
    requiredQuestions: "Erantzundako derrigorrezko galderak",
    // "Valid answers"
    correctQuestions: "Erantzun baliodunak",
    // "Completed pages (button UI)"
    buttons: "Osatutako orrialdeak (botoien interfazea)",
    // "Under the input field"
    underInput: "Sarrera-eremuaren azpian",
    // "Under the question title"
    underTitle: "Galderaren izenburuaren azpian",
    // "On lost focus"
    onBlur: "Fokua galtzean",
    // "While typing"
    onTyping: "Idazten ari den bitartean",
    // "Under the row"
    underRow: "Errenkadaren azpian",
    // "Under the row, display one section only"
    underRowSingle: "Errenkadaren azpian, erakutsi atal bat soilik",
    // "Auto"
    auto: "Automatikoa",
    // "Always"
    always: "Beti",
    timerInfoMode: {
      // "Both"
      combined: "Biak"
    },
    addRowButtonLocation: {
      // "Based on matrix layout"
      default: "Matrizearen diseinuaren arabera"
    },
    panelsState: {
      // "Locked"
      default: "Blokeatuta",
      // "Collapse all"
      collapsed: "Tolestu dena",
      // "Expand all"
      expanded: "Zabaldu dena",
      // "First expanded"
      firstExpanded: "Lehena zabalduta"
    },
    widthMode: {
      // "Static"
      static: "Finkoa",
      // "Responsive"
      responsive: "Erantzunkorra"
    },
    contentMode: {
      // "Image"
      image: "Irudia",
      // "Video"
      video: "Bideoa",
      // [Auto-translated] "YouTube"
      youtube: "YouTube"
    },
    displayMode: {
      // "Buttons"
      buttons: "Botoiak",
      // "Dropdown"
      dropdown: "Goitibeherako zerrenda",
      // "Segmented toggle"
      segmented: "Segmentatutako etengailua",
      // "Radio buttons"
      radio: "Aukera-botoiak",
      // "Checkbox"
      checkbox: "Kontrol-laukitxoa",
      // "Switch"
      switch: "Etengailua",
      // "Custom"
      custom: "Pertsonalizatua"
    },
    rateColorMode: {
      // "Default"
      default: "Lehenetsia",
      // "Scale"
      scale: "Eskala"
    },
    scaleColorMode: {
      // "Monochrome"
      monochrome: "Monokromoa",
      // "Colored"
      colored: "Koloreduna"
    },
    autoGenerate: {
      // "Auto-generate"
      "true": "Sortu automatikoki",
      // "Manual"
      "false": "Eskuzkoa"
    },
    rateType: {
      // "Labels"
      labels: "Etiketak",
      // "Stars"
      stars: "Izarrak",
      // "Smileys"
      smileys: "Smileyak"
    },
    state: {
      // "Locked"
      default: "Blokeatuta"
    },
    showQuestionNumbers: {
      // "Auto-numbering"
      default: "Zenbakitze automatikoa",
      // "Auto-numbering"
      on: "Zenbakitze automatikoa",
      // "Reset on each page"
      onPage: "Berrezarri orrialde bakoitzean",
      // "Reset on each panel"
      onpanel: "Berrezarri panel bakoitzean",
      // "Recursive numbering"
      recursive: "Zenbakitze errekurtsiboa",
      // "No numbering"
      off: "Zenbakirik gabe"
    },
    descriptionLocation: {
      // "Under the question title"
      underTitle: "Galderaren izenburuaren azpian",
      // "Under the input field"
      underInput: "Sarrera-eremuaren azpian"
    },
    selectToRankAreasLayout: {
      // "Next to choices"
      horizontal: "Aukeren ondoan",
      // "Above choices"
      vertical: "Aukeren gainean"
    },
    displayStyle: {
      // "Decimal"
      decimal: "Hamartarra",
      // "Currency"
      currency: "Moneta",
      // "Percentage"
      percent: "Ehunekoa",
      // "Date"
      date: "Data"
    },
    totalDisplayStyle: {
      // "Decimal"
      decimal: "Hamartarra",
      // "Currency"
      currency: "Moneta",
      // "Percentage"
      percent: "Ehunekoa",
      // "Date"
      date: "Data"
    },
    rowOrder: {
      // "Original"
      initial: "Jatorrizkoa"
    },
    questionOrder: {
      // "Original"
      initial: "Jatorrizkoa"
    },
    progressBarLocation: {
      // "Top"
      top: "Goian",
      // "Bottom"
      bottom: "Behean",
      // "Top and bottom"
      topbottom: "Goian eta behean",
      // "Above the header"
      aboveheader: "Goiburuaren gainean",
      // "Below the header"
      belowheader: "Goiburuaren azpian",
      // "Hidden"
      off: "Ezkutatuta"
    },
    // "Sum"
    sum: "Batura",
    // "Count"
    count: "Kopurua",
    // [Auto-translated] "Min"
    min: "Min",
    // [Auto-translated] "Max"
    max: "Max",
    // "Avg"
    avg: "Batez bestekoa",
    searchMode: {
      // "Contains"
      contains: "Hau barne du",
      // "Starts with"
      startsWith: "Honekin hasten da"
    },
    backgroundImageFit: {
      // "Auto"
      auto: "Automatikoa",
      // "Cover"
      cover: "Estali",
      // "Contain"
      contain: "Eduki",
      // "Stretch"
      fill: "Luzatu",
      // "Tile"
      tile: "Lauzatu"
    },
    backgroundImageAttachment: {
      // "Fixed"
      fixed: "Finkoa",
      // "Scroll"
      scroll: "Desplazamendua"
    },
    headerView: {
      // "Basic"
      basic: "Oinarrizkoa",
      // "Advanced"
      advanced: "Aurreratua"
    },
    inheritWidthFrom: {
      // "Same as survey"
      survey: "Inkestaren berdina",
      // "Same as container"
      container: "Edukiontziaren berdina"
    },
    backgroundColorSwitch: {
      // "None"
      none: "Bat ere ez",
      // "Accent color"
      accentColor: "Azentu-kolorea",
      // "Custom"
      custom: "Pertsonalizatua"
    },
    colorPalette: {
      // "Light"
      light: "Argia",
      // "Dark"
      dark: "Iluna"
    },
    isPanelless: {
      // "Default"
      "false": "Lehenetsia",
      // "Without Panels"
      "true": "Panelik gabe"
    },
    progressBarInheritWidthFrom: {
      // "Same as survey"
      survey: "Inkestaren berdina",
      // "Same as container"
      container: "Edukiontziaren berdina"
    },
    showKeyboardHints: {
      // "Inherit"
      auto: "Heredatu",
      // "Hide"
      "false": "Ezkutatu",
      // "Show"
      "true": "Erakutsi"
    }
  },
  // Regions of the "Regional Formats" category. Unlike survey languages, a region can be
  regionLocales: {
    // "Arabic"
    ar: "Arabiera",
    // "Bulgarian"
    bg: "Bulgariera",
    // "Catalan"
    ca: "Katalana",
    // "Czech"
    cs: "Txekiera",
    // "Welsh"
    cy: "Galesera",
    // "Danish"
    da: "Daniera",
    // "German"
    de: "Alemana",
    // "Greek"
    el: "Grekera",
    // "English"
    en: "Ingelesa",
    // "English (Australia)"
    "en-AU": "Ingelesa (Australia)",
    // "English (Canada)"
    "en-CA": "Ingelesa (Kanada)",
    // "English (United Kingdom)"
    "en-GB": "Ingelesa (Erresuma Batua)",
    // "English (Ireland)"
    "en-IE": "Ingelesa (Irlanda)",
    // "English (India)"
    "en-IN": "Ingelesa (India)",
    // "English (New Zealand)"
    "en-NZ": "Ingelesa (Zeelanda Berria)",
    // "English (South Africa)"
    "en-ZA": "Ingelesa (Hegoafrika)",
    // "Spanish"
    es: "Gaztelania",
    // "Estonian"
    et: "Estoniera",
    // "Basque"
    eu: "Euskara",
    // "Persian"
    fa: "Persiera",
    // "Finnish"
    fi: "Finlandiera",
    // "Filipino"
    fil: "Filipinera",
    // "French"
    fr: "Frantsesa",
    // "French (Canada)"
    "fr-CA": "Frantsesa (Kanada)",
    // "French (Switzerland)"
    "fr-CH": "Frantsesa (Suitza)",
    // "Hebrew"
    he: "Hebreera",
    // "Hindi"
    hi: "Hindiera",
    // "Croatian"
    hr: "Kroaziera",
    // "Haitian Creole"
    ht: "Haitiko kreolera",
    // "Hungarian"
    hu: "Hungariera",
    // "Indonesian"
    id: "Indonesiera",
    // "Icelandic"
    is: "Islandiera",
    // "Italian"
    it: "Italiera",
    // "Japanese"
    ja: "Japoniera",
    // "Georgian"
    ka: "Georgiera",
    // "Kazakh"
    kk: "Kazakhera",
    // "Korean"
    ko: "Koreera",
    // "Lithuanian"
    lt: "Lituaniera",
    // "Latvian"
    lv: "Letoniera",
    // "Macedonian"
    mk: "Mazedoniera",
    // "Burmese"
    mm: "Birmaniera",
    // "Malay"
    ms: "Malaysiera",
    // "Dutch"
    nl: "Nederlandera",
    // "Dutch (Belgium)"
    "nl-BE": "Nederlandera (Belgika)",
    // "Norwegian"
    no: "Norvegiera",
    // "Polish"
    pl: "Poloniera",
    // "Portuguese"
    pt: "Portugesa",
    // "Portuguese (Brazil)"
    "pt-BR": "Portugesa (Brasil)",
    // "Romanian"
    ro: "Errumaniera",
    // "Russian"
    ru: "Errusiera",
    // "Slovak"
    sk: "Eslovakiera",
    // "Slovenian"
    sl: "Esloveniera",
    // "Serbian"
    sr: "Serbiera",
    // "Swedish"
    sv: "Suediera",
    // "Swahili"
    sw: "Swahilia",
    // "Telugu"
    tel: "Teluguera",
    // "Tajik"
    tg: "Tajikera",
    // "Thai"
    th: "Thailandiera",
    // "Turkish"
    tr: "Turkiera",
    // "Ukrainian"
    uk: "Ukrainera",
    // "Urdu"
    ur: "Urdua",
    // "Vietnamese"
    vi: "Vietnamera",
    // "Chinese"
    zh: "Txinera",
    // "Chinese (Simplified)"
    "zh-CN": "Txinera (sinplifikatua)",
    // "Chinese (Traditional)"
    "zh-TW": "Txinera (tradizionala)"
  },
  // Operators
  op: {
    // "Empty"
    empty: "Hutsa",
    // "Not empty"
    notempty: "Ez hutsa",
    // "Equals"
    equal: "Berdin",
    // "Does not equal"
    notequal: "Ez da berdin",
    // "Contains"
    contains: "Hau barne du",
    // "Does not contain"
    notcontains: "Ez du hau barne",
    // "Any of"
    anyof: "Hauetako edozein",
    // "None of"
    noneof: "Hauetako bat ere ez",
    // "All of"
    allof: "Hau guztiak",
    // "Greater than"
    greater: "Handiagoa",
    // "Less than"
    less: "Txikiagoa",
    // "Greater than or equal to"
    greaterorequal: "Handiagoa edo berdina",
    // "Less than or equal to"
    lessorequal: "Txikiagoa edo berdina",
    // "and"
    and: "eta",
    // "or"
    or: "edo"
  },
  // Preview (Survey)
  ts: {
    // "Select the page to test it"
    selectPage: "Hautatu probatzeko orrialdea",
    // "Show invisible elements"
    showInvisibleElements: "Erakutsi elementu ikusezinak",
    // "Hide invisible elements"
    hideInvisibleElements: "Ezkutatu elementu ikusezinak",
    // "Previous"
    prevPage: "Aurrekoa",
    // "Next"
    nextPage: "Hurrengoa"
  },
  validators: {
    // "Answer count"
    answercountvalidator: "Erantzun-kopurua",
    // "Email"
    emailvalidator: "Helbide elektronikoa",
    // "Expression"
    expressionvalidator: "Adierazpena",
    // "Number"
    numericvalidator: "Zenbakia",
    // "Regex"
    regexvalidator: "Adierazpen erregularra",
    // "Text"
    textvalidator: "Testua"
  },
  triggers: {
    // "Complete survey"
    completetrigger: "Osatu inkesta",
    // "Set answer"
    setvaluetrigger: "Ezarri erantzuna",
    // "Copy answer"
    copyvaluetrigger: "Kopiatu erantzuna",
    // "Skip to question"
    skiptrigger: "Egin jauzi galderara",
    // "Run expression"
    runexpressiontrigger: "Exekutatu adierazpena",
    // "change visibility (deprecated)"
    visibletrigger: "aldatu ikusgaitasuna (zaharkitua)"
  },
  peplaceholder: {
    regionalformat: {
      // "Same as survey language"
      locale: "Inkesta-hizkuntzaren berdina"
    },
    patternmask: {
      // "Ex.: +1(999)-999-99-99"
      pattern: "Adib.: +1(999)-999-99-99"
    },
    datetimemask: {
      // "Ex.: mm/dd/yyyy HH:MM:ss"
      pattern: "Adib.: mm/dd/yyyy HH:MM:ss"
    },
    panelbase: {
      // "Ex.: 200px"
      questionTitleWidth: "Adib.: 200px"
    },
    panellayoutcolumn: {
      // "Ex.: 30%"
      effectiveWidth: "Adib.: 30%",
      // "Ex.: 200px"
      questionTitleWidth: "Adib.: 200px"
    }
  },
  pehelp: {
    panel: {
      // "A panel ID that is not visible to respondents."
      name: "Erantzulearentzat ikusgai ez dagoen panel-ID bat.",
      // "Type a panel subtitle."
      description: "Idatzi panelaren azpititulu bat.",
      // isRequired: "Prevents survey submission unless at least one nested question has an answer.",
      visibleIf: "Erabili makila magikoaren ikonoa panelaren ikusgaitasuna zehazten duen baldintza-arau bat ezartzeko.",
      // "Use the magic wand icon to set a conditional rule that disables the read-only mode for the panel."
      enableIf: "Erabili makila magikoaren ikonoa panelaren irakurtzeko soilik modua desgaitzen duen baldintza-arau bat ezartzeko.",
      // "Use the magic wand icon to set a conditional rule that prevents survey submission unless at least one nested question has an answer."
      requiredIf: "Erabili makila magikoaren ikonoa inkesta bidaltzea eragozten duen baldintza-arau bat ezartzeko, barneko galdera batek gutxienez erantzun bat ez badu.",
      // "Applies to all questions within this panel. When set to \"Hidden\", it also hides question descriptions. If you want to override this setting, define title alignment rules for individual questions. The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Top\" by default). "
      questionTitleLocation: "Panel honetako galdera guztiei aplikatzen zaie. \"Ezkutatuta\" ezartzean, galderen deskribapenak ere ezkutatzen ditu. Ezarpen hau gainidatzi nahi baduzu, zehaztu izenburu-lerrokatze arauak galdera bakoitzeko. \"Heredatu\" aukerak orrialde-mailako ezarpena (ezarrita badago) edo inkesta-mailakoa (\"Goian\" lehenetsita) aplikatzen du. ",
      // "Sets consistent width for question titles when they are aligned to the left of their question boxes. Accepts CSS values (px, %, in, pt, etc.)."
      questionTitleWidth: "Zabalera koherentea ezartzen die galderen izenburuei, galdera-koadroen ezkerraldera lerrokatuta daudenean. CSS balioak onartzen ditu (px, %, in, pt, etab.).",
      // "Sets the location of an error message in relation to all questions within the panel. The \"Inherit\" option applies the page-level (if set) or survey-level setting."
      questionErrorLocation: "Errore-mezuaren kokapena ezartzen du panelaren barneko galdera guztiekiko. \"Heredatu\" aukerak orrialde-mailako ezarpena (ezarrita badago) edo inkesta-mailakoa aplikatzen du.",
      // "Keeps the original order of questions or randomizes them. The \"Inherit\" option applies the page-level (if set) or survey-level setting."
      questionOrder: "Galderen jatorrizko ordena mantentzen du edo ausaz aldatzen ditu. \"Heredatu\" aukerak orrialde-mailako ezarpena (ezarrita badago) edo inkesta-mailakoa aplikatzen du.",
      // "Repositions the panel to the end of a selected page."
      page: "Panela hautatutako orrialdearen amaieran kokatzen du.",
      // "Adds space or margin between the panel content and the left border of the panel box."
      innerIndent: "Tarte edo marjina gehitzen du panelaren edukia eta panel-koadroaren ezkerreko ertzaren artean.",
      // "Unselect to display the panel in one line with the previous question or panel. The setting doesn't apply if the panel is the first element in your form."
      startWithNewLine: "Deshautatu panela aurreko galderarekin edo panelarekin lerro berean bistaratzeko. Ezarpena ez da aplikatzen panela zure inprimakiko lehen elementua bada.",
      // "Choose from: \"Expanded\" - the panel is displayed in full and can be collapsed; \"Collapsed\" - the panel displays only the title and description and can be expanded; \"Locked\" - the panel is displayed in full and cannot be collapsed."
      state: "Aukeratu: \"Zabaldua\" - panela osoa bistaratzen da eta toles daiteke; \"Tolestuta\" - panelak izenburua eta deskribapena soilik bistaratzen ditu eta zabal daiteke; \"Blokeatuta\" - panela osoa bistaratzen da eta ezin da tolestu.",
      // "Sets the width of the panel in proportion to other survey elements in the same line. Accepts CSS values (px, %, in, pt, etc.)."
      width: "Panelaren zabalera ezartzen du, lerro bereko beste inkesta-elementuekiko proportzioan. CSS balioak onartzen ditu (px, %, in, pt, etab.).",
      // "Assigns numbers to questions nested within this panel."
      showQuestionNumbers: "Panel honetan habiaratutako galderak zenbakitzen ditu.",
      // "Specifies how many columns this panel spans within the grid layout."
      effectiveColSpan: "Panel honek sare-diseinuan zenbat zutabe hartzen dituen zehazten du.",
      // "This table lets you configure each grid column within the panel. It automatically sets the width percentage for each column based on the maximum number of elements in a row. To customize the grid layout, manually adjust these values and define the title width for all questions in each column."
      gridLayoutColumns: "Taula honek panelaren barneko sare-zutabe bakoitza konfiguratzeko aukera ematen dizu. Automatikoki ezartzen du zutabe bakoitzaren zabalera-ehunekoa, errenkada bateko elementu-kopuru handienaren arabera. Sare-diseinua pertsonalizatzeko, egokitu balio hauek eskuz eta zehaztu zutabe bakoitzeko galdera guztien izenburu-zabalera.",
      // "Specifies how questions inside this panel appear when they are read-only. \"Read-Only\" displays the questions with their usual input controls, but disabled for editing. \"View\" displays answers as text or other non-interactive elements. \"Inherit\" uses the mode set for the parent panel, page, or survey (\"Read-Only\" by default)."
      readOnlyMode: "Panel honetako galderak irakurtzeko soilik daudenean nola agertzen diren zehazten du. \"Irakurtzeko soilik\" aukerak galderak ohiko sarrera-kontrolekin bistaratzen ditu, baina editatzea desgaituta. \"Ikusi\" aukerak erantzunak testu edo elementu ez-interaktibo gisa bistaratzen ditu. \"Heredatu\" aukerak guraso-panel, orrialde edo inkestan ezarritako modua erabiltzen du (\"Irakurtzeko soilik\" lehenetsita)."
    },
    paneldynamic: {
      // "A panel ID that is not visible to respondents."
      name: "Erantzulearentzat ikusgai ez dagoen panel-ID bat.",
      // "Type a panel subtitle."
      description: "Idatzi panelaren azpititulu bat.",
      // isRequired: "Prevents survey submission unless at least one nested question has an answer.",
      visibleIf: "Erabili makila magikoaren ikonoa panelaren ikusgaitasuna zehazten duen baldintza-arau bat ezartzeko.",
      // "Use the magic wand icon to set a conditional rule that disables the read-only mode for the panel."
      enableIf: "Erabili makila magikoaren ikonoa panelaren irakurtzeko soilik modua desgaitzen duen baldintza-arau bat ezartzeko.",
      // "Use the magic wand icon to set a conditional rule that prevents survey submission unless at least one nested question has an answer."
      requiredIf: "Erabili makila magikoaren ikonoa inkesta bidaltzea eragozten duen baldintza-arau bat ezartzeko, barneko galdera batek gutxienez erantzun bat ez badu.",
      // "Applies to all questions within this dynamic panel. If you want to override this setting, define title alignment rules for individual questions. The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Top\" by default)."
      templateQuestionTitleLocation: "Panel dinamiko honetako galdera guztiei aplikatzen zaie. Ezarpen hau gainidatzi nahi baduzu, zehaztu izenburu-lerrokatze arauak galdera bakoitzeko. \"Heredatu\" aukerak orrialde-mailako ezarpena (ezarrita badago) edo inkesta-mailakoa (\"Goian\" lehenetsita) aplikatzen du.",
      // "Sets consistent width for question titles when they are aligned to the left of their question boxes. Accepts CSS values (px, %, in, pt, etc.)."
      templateQuestionTitleWidth: "Zabalera koherentea ezartzen die galderen izenburuei, galdera-koadroen ezkerraldera lerrokatuta daudenean. CSS balioak onartzen ditu (px, %, in, pt, etab.).",
      // "Sets the location of an error message in relation to a question with invalid input. Choose between: \"Top\" - an error text is placed at the top of the question box; \"Bottom\" - an error text is placed at the bottom of the question box. The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Top\" by default)."
      templateErrorLocation: "Errore-mezuaren kokapena ezartzen du sarrera baliogabea duen galdera batekiko. Aukeratu: \"Goian\" - errore-testua galdera-koadroaren goialdean jartzen da; \"Behean\" - errore-testua galdera-koadroaren behealdean jartzen da. \"Heredatu\" aukerak orrialde-mailako ezarpena (ezarrita badago) edo inkesta-mailakoa (\"Goian\" lehenetsita) aplikatzen du.",
      // "Sets the location of an error message in relation to all questions within the panel. The \"Inherit\" option applies the page-level (if set) or survey-level setting."
      errorLocation: "Errore-mezuaren kokapena ezartzen du panelaren barneko galdera guztiekiko. \"Heredatu\" aukerak orrialde-mailako ezarpena (ezarrita badago) edo inkesta-mailakoa aplikatzen du.",
      // questionOrder: "Keeps the original order of questions or randomizes them. The \"Inherit\" option applies the page-level (if set) or survey-level setting.",
      page: "Panela hautatutako orrialdearen amaieran kokatzen du.",
      // "Adds space or margin between the panel content and the left border of the panel box."
      indent: "Tarte edo marjina gehitzen du panelaren edukia eta panel-koadroaren ezkerreko ertzaren artean.",
      // "Unselect to display the panel in one line with the previous question or panel. The setting doesn't apply if the panel is the first element in your form."
      startWithNewLine: "Deshautatu panela aurreko galderarekin edo panelarekin lerro berean bistaratzeko. Ezarpena ez da aplikatzen panela zure inprimakiko lehen elementua bada.",
      // "Choose from: \"Expanded\" - the panel is displayed in full and can be collapsed; \"Collapsed\" - the panel displays only the title and description and can be expanded; \"Locked\" - the panel is displayed in full and cannot be collapsed."
      state: "Aukeratu: \"Zabaldua\" - panela osoa bistaratzen da eta toles daiteke; \"Tolestuta\" - panelak izenburua eta deskribapena soilik bistaratzen ditu eta zabal daiteke; \"Blokeatuta\" - panela osoa bistaratzen da eta ezin da tolestu.",
      // "Sets the width of the panel in proportion to other survey elements in the same line. Accepts CSS values (px, %, in, pt, etc.)."
      width: "Panelaren zabalera ezartzen du, lerro bereko beste inkesta-elementuekiko proportzioan. CSS balioak onartzen ditu (px, %, in, pt, etab.).",
      // "Type in a template for entry titles. Use {panelIndex} for the entry's general position and {visiblePanelIndex} for its order among visible entries. Insert these placeholders into the pattern to add automatic numbering."
      templateTitle: "Idatzi sarreren izenburuetarako txantiloi bat. Erabili {panelIndex} sarreraren kokapen orokorrerako eta {visiblePanelIndex} sarrera ikusgaien artean duen ordenarako. Txertatu leku-marka hauek ereduan zenbakitze automatikoa gehitzeko.",
      // "A fallback text for entry titles that applies when the entry title pattern doesn't produce a meaningful value. Use {panelIndex} for the entry's general position and {visiblePanelIndex} for its order among visible entries."
      templateTitlePlaceholder: "Sarreren izenburuetarako ordezko testua, izenburu-ereduak balio esanguratsurik sortzen ez duenean aplikatzen dena. Erabili {panelIndex} sarreraren kokapen orokorrerako eta {visiblePanelIndex} sarrera ikusgaien artean duen ordenarako.",
      // "Type in a template for tab titles. Use {panelIndex} for an entry's general position and {visiblePanelIndex} for its order among visible entries. Insert these placeholders into the pattern to add automatic numbering."
      templateTabTitle: "Idatzi fitxen izenburuetarako txantiloi bat. Erabili {panelIndex} sarrera baten kokapen orokorrerako eta {visiblePanelIndex} sarrera ikusgaien artean duen ordenarako. Txertatu leku-marka hauek ereduan zenbakitze automatikoa gehitzeko.",
      // "A fallback text for tab titles that applies when the tab title pattern doesn't produce a meaningful value."
      tabTitlePlaceholder: "Fitxen izenburuetarako ordezko testua, fitxaren izenburu-ereduak balio esanguratsurik sortzen ez duenean aplikatzen dena.",
      // "This setting allows you to control the visibility of individual entries within the dynamic panel. Use the `{panel}` placeholder to reference the current entry in your expression."
      templateVisibleIf: "Ezarpen honek panel dinamikoaren barneko sarrera bakoitzaren ikusgaitasuna kontrolatzeko aukera ematen du. Erabili `{panel}` leku-marka uneko sarrerari erreferentzia egiteko zure adierazpenean.",
      // "This setting is automatically inherited by all questions within this dynamic panel. If you want to override this setting, define title alignment rules for individual questions. The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Top\" by default)."
      titleLocation: "Ezarpen hau automatikoki heredatzen dute panel dinamiko honetako galdera guztiek. Ezarpen hau gainidatzi nahi baduzu, zehaztu izenburu-lerrokatze arauak galdera bakoitzeko. \"Heredatu\" aukerak orrialde-mailako ezarpena (ezarrita badago) edo inkesta-mailakoa (\"Goian\" lehenetsita) aplikatzen du.",
      // "The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Under the panel title\" by default)."
      descriptionLocation: "\"Heredatu\" aukerak orrialde-mailako ezarpena (ezarrita badago) edo inkesta-mailakoa (\"Panelaren izenburuaren azpian\" lehenetsita) aplikatzen du.",
      // "Defines the position of a newly added entry. By default, new entries are added to the end. Select \"Next\" to insert a new entry after the current one."
      newPanelPosition: "Gehitutako sarrera berriaren kokapena zehazten du. Lehenespenez, sarrera berriak amaieran gehitzen dira. Hautatu \"Hurrengoa\" sarrera berria unekoaren ondoren txertatzeko.",
      // "Duplicates answers from the last entry and assigns them to the next added entry."
      copyDefaultValueFromLastEntry: "Azken sarrerako erantzunak bikoiztu eta hurrengo sarrera gehituei esleitzen dizkie.",
      // "Reference a question name to require a user to provide a unique response for this question in each entry."
      keyName: "Erreferentzia ezazu galdera-izen bat, erabiltzaileari sarrera bakoitzean galdera honetarako erantzun bakarra ematea eskatzeko.",
      // "Triggers a confirmation prompt before removing an entry."
      confirmDelete: "Sarrera bat kendu aurretik berrespen-eskaera bat abiarazten du.",
      // "Specify an expression that calculates the number of entries. This expression overrides the \"Initial number of entries\" setting and is reevaluated whenever the values it references change. The result is limited by the \"Minimum number of entries\" and \"Maximum number of entries\" settings. While this expression is set, respondents cannot add or remove entries manually."
      panelCountExpression: "Zehaztu sarrera-kopurua kalkulatzen duen adierazpen bat. Adierazpen honek \"Hasierako sarrera-kopurua\" ezarpena gainidazten du eta berriro ebaluatzen da erreferentziatzen dituen balioak aldatzen diren bakoitzean. Emaitza \"Gutxieneko sarrera-kopurua\" eta \"Gehieneko sarrera-kopurua\" ezarpenek mugatzen dute. Adierazpen hau ezarrita dagoen bitartean, erantzuleek ezin dituzte sarrerak eskuz gehitu edo kendu.",
      // "Specifies the number of entries displayed on each page of the panel. `0` disables pagination and displays all entries."
      pageSize: "Panelaren orrialde bakoitzean bistaratzen den sarrera-kopurua zehazten du. `0` balioak orrialdeketa desgaitzen du eta sarrera guztiak bistaratzen ditu.",
      // "Allows respondents to sort entries using the sort bar."
      allowSort: "Erantzuleei sarrerak ordenatze-barrak erabiliz ordenatzeko aukera ematen die.",
      // "Defines the initial entry order. Respondents can change it if sorting is allowed. When sorting by multiple questions, each question sorts entries within the order established by the preceding question. Drag questions to change their priority."
      sortCriteria: "Sarreren hasierako ordena zehazten du. Erantzuleek aldatu dezakete ordenatzea baimenduta badago. Galdera anitzen arabera ordenatzean, galdera bakoitzak sarrerak aurreko galderak ezarritako ordenaren barruan ordenatzen ditu. Arrastatu galderak haien lehentasuna aldatzeko.",
      // "Assigns numbers to questions nested within the dynamic panel."
      showQuestionNumbers: "Panel dinamikoan habiaratutako galderak zenbakitzen ditu."
    },
    matrixdynamic: {
      // "Allows respondents to sort rows by clicking column headers or using the sort bar."
      allowSort: "Erantzuleei errenkadak ordenatzeko aukera ematen die, zutabeen goiburuetan klik eginez edo ordenatze-barra erabiliz.",
      // "Defines the initial row order. Respondents can change it if sorting is allowed. When sorting by multiple columns, each column sorts rows within the order established by the preceding column. Drag columns to change their priority."
      sortCriteria: "Errenkaden hasierako ordena zehazten du. Erantzuleek aldatu dezakete ordenatzea baimenduta badago. Zutabe anitzen arabera ordenatzean, zutabe bakoitzak errenkadak aurreko zutabeak ezarritako ordenaren barruan ordenatzen ditu. Arrastatu zutabeak haien lehentasuna aldatzeko.",
      // "\"Auto\" displays the sort bar only when the matrix has no sortable column headers: the headers are hidden, the matrix uses the mobile layout, or rows are transposed to columns. \"Always\" displays the sort bar even when sortable column headers are visible."
      showSortBar: "\"Automatikoa\" aukerak ordenatze-barra soilik bistaratzen du matrizeak ordena daitekeen zutabe-goibururik ez duenean: goiburuak ezkutatuta daude, matrizeak mugikorreko diseinua erabiltzen du, edo errenkadak zutabeetara transposatuta daude. \"Beti\" aukerak ordenatze-barra bistaratzen du ordena daitezkeen zutabe-goiburuak ikusgai daudenean ere.",
      // "Specify an expression that calculates the number of rows. This expression overrides the \"Initial number of rows\" setting and is reevaluated whenever the values it references change. The result is limited by the \"Minimum number of rows\" and \"Maximum number of rows\" settings. While this expression is set, respondents cannot add or remove rows manually."
      rowCountExpression: "Zehaztu errenkada-kopurua kalkulatzen duen adierazpen bat. Adierazpen honek \"Hasierako errenkada-kopurua\" ezarpena gainidazten du eta berriro ebaluatzen da erreferentziatzen dituen balioak aldatzen diren bakoitzean. Emaitza \"Gutxieneko errenkada-kopurua\" eta \"Gehieneko errenkada-kopurua\" ezarpenek mugatzen dute. Adierazpen hau ezarrita dagoen bitartean, erantzuleek ezin dituzte errenkadak eskuz gehitu edo kendu.",
      // "Triggers a confirmation prompt before removing a row."
      confirmDelete: "Errenkada bat kendu aurretik berrespen-eskaera bat abiarazten du.",
      // "Automatically expands the detail section when a new row is added to the matrix."
      detailPanelShowOnAdding: "Automatikoki zabaltzen du xehetasun-atala errenkada berri bat matrizean gehitzen denean."
    },
    // "Specifies the number of rows displayed on each page of the matrix. `0` disables pagination and displays all rows."
    pageSize: "Matrizearen orrialde bakoitzean bistaratzen den errenkada-kopurua zehazten du. `0` balioak orrialdeketa desgaitzen du eta errenkada guztiak bistaratzen ditu.",
    // "Specifies how many fields a respondent can sort by at once."
    maxSortLevel: "Erantzule batek aldi berean zenbat eremuren arabera ordena dezakeen zehazten du.",
    // "Duplicates answers from the last row and assigns them to the next added dynamic row."
    copyDefaultValueFromLastEntry: "Azken errenkadako erantzunak bikoiztu eta hurrengo errenkada dinamiko gehituei esleitzen dizkie.",
    // "This setting allows you to assign a default answer value based on an expression. The expression can include basic calculations - `{q1_id} + {q2_id}`, Boolean expressions, such as `{age} > 60`, and functions: `iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, etc. The value determined by this expression serves as the initial default value that can be overridden by a respondent's manual input."
    defaultValueExpression: "Ezarpen honek adierazpen batean oinarritutako erantzun-balio lehenetsia esleitzeko aukera ematen du. Adierazpenak oinarrizko kalkuluak izan ditzake - `{q1_id} + {q2_id}`, adierazpen boolearrak, hala nola `{age} > 60`, eta funtzioak: `iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, etab. Adierazpen honek zehazten duen balioa hasierako balio lehenetsia da, eta erantzulearen eskuzko sarrerak gainidatz dezake.",
    // "Use the magic wand icon to set a conditional rule that determines when a respondent's input is reset to the value based on the \"Default value expression\" or \"Set value expression\" or to the \"Default answer\" value (if either is set)."
    resetValueIf: "Erabili makila magikoaren ikonoa erantzulearen sarrera noiz berrezarriko den zehazten duen baldintza-arau bat ezartzeko: \"Balio lehenetsiaren adierazpena\" edo \"Balio-ezarpen adierazpena\" oinarri hartuta, edo \"Erantzun lehenetsia\" baliora (biak ezarrita badaude).",
    // "Use the magic wand icon to set a conditional rule that determines when to run the \"Set value expression\" and dynamically assign the resulting value as a response."
    setValueIf: "Erabili makila magikoaren ikonoa \"Balio-ezarpen adierazpena\" noiz exekutatuko den zehazten duen baldintza-arau bat ezartzeko eta lortutako balioa dinamikoki erantzun gisa esleitzeko.",
    // "Specify an expression that defines the value to be set when the conditions in the \"Set value if\" rule are met. The expression can include basic calculations - `{q1_id} + {q2_id}`, Boolean expressions, such as `{age} > 60`, and functions: `iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, etc. The value determined by this expression can be overridden by a respondent's manual input."
    setValueExpression: "Zehaztu \"Balioa ezarri baldin\" arauan baldintzak betetzen direnean ezarriko den balioa definitzen duen adierazpen bat. Adierazpenak oinarrizko kalkuluak izan ditzake - `{q1_id} + {q2_id}`, adierazpen boolearrak, hala nola `{age} > 60`, eta funtzioak: `iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, etab. Adierazpen honek zehazten duen balioa erantzulearen eskuzko sarrerak gainidatz dezake.",
    // "Survey Creator allows you to manually adjust the inline widths of form elements to control the layout. If this doesn't produce the desired outcome, you can enable the grid layout, which structures form elements using a column-based system. To configure layout columns, select a page or panel and use the \"Question Settings\" → \"Grid columns\" table. To adjust how many columns a question spans, select it and set the desired value in the \"Layout\" → \"Column span\" field."
    gridLayoutEnabled: "Survey Creator-ek inprimaki-elementuen lerro barneko zabalerak eskuz egokitzeko aukera ematen du diseinua kontrolatzeko. Horrek nahi duzun emaitza ematen ez badu, sare-diseinua gaitu dezakezu, inprimaki-elementuak zutabeetan oinarritutako sistema batekin egituratzen dituena. Diseinu-zutabeak konfiguratzeko, hautatu orrialde edo panel bat eta erabili \"Galderaren ezarpenak\" → \"Sarearen zutabeak\" taula. Galdera batek zenbat zutabe hartzen dituen egokitzeko, hautatu eta ezarri nahi duzun balioa \"Diseinua\" → \"Zutabe-zabalera\" eremuan.",
    question: {
      // "A question ID that is not visible to respondents."
      name: "Erantzulearentzat ikusgai ez dagoen galdera-ID bat.",
      // "Type a question subtitle."
      description: "Idatzi galderaren azpititulu bat.",
      // "Use the magic wand icon to set a conditional rule that determines question visibility."
      visibleIf: "Erabili makila magikoaren ikonoa galderaren ikusgaitasuna zehazten duen baldintza-arau bat ezartzeko.",
      // "Use the magic wand icon to set a conditional rule that disables the read-only mode for the question."
      enableIf: "Erabili makila magikoaren ikonoa galderaren irakurtzeko soilik modua desgaitzen duen baldintza-arau bat ezartzeko.",
      // "Use the magic wand icon to set a conditional rule that prevents survey advancing or submission unless the question received an answer."
      requiredIf: "Erabili makila magikoaren ikonoa inkestak aurrera egitea edo bidaltzea eragozten duen baldintza-arau bat ezartzeko, galderak erantzun bat jaso ezean.",
      // "Unselect to display the question in one line with the previous question or panel. The setting doesn't apply if the question is the first element in your form."
      startWithNewLine: "Deshautatu galdera aurreko galderarekin edo panelarekin lerro berean bistaratzeko. Ezarpena ez da aplikatzen galdera zure inprimakiko lehen elementua bada.",
      // "Repositions the question to the end of a selected page."
      page: "Galdera hautatutako orrialdearen amaieran kokatzen du.",
      // "Choose from: \"Expanded\" - the question box is displayed in full and can be collapsed; \"Collapsed\" - the question box displays only the title and description and can be expanded; \"Locked\" - the question box is displayed in full and cannot be collapsed."
      state: "Aukeratu: \"Zabaldua\" - galdera-koadroa osoa bistaratzen da eta toles daiteke; \"Tolestuta\" - galdera-koadroak izenburua eta deskribapena soilik bistaratzen ditu eta zabal daiteke; \"Blokeatuta\" - galdera-koadroa osoa bistaratzen da eta ezin da tolestu.",
      // "Overrides title alignment rules defined on a panel, page, or survey level. When set to \"Hidden\", it also hides question descriptions. The \"Inherit\" option applies any higher-level settings (if set) or survey-level setting (\"Top\" by default)."
      titleLocation: "Panel, orrialde edo inkesta mailan definitutako izenburu-lerrokatze arauak gainidazten ditu. \"Ezkutatuta\" ezartzean, galderen deskribapenak ere ezkutatzen ditu. \"Heredatu\" aukerak goi-mailako edozein ezarpen (ezarrita badago) edo inkesta-mailako ezarpena (\"Goian\" lehenetsita) aplikatzen du.",
      // "The \"Inherit\" option applies the survey-level setting (\"Under the question title\" by default)."
      descriptionLocation: "\"Heredatu\" aukerak inkesta-mailako ezarpena (\"Galderaren izenburuaren azpian\" lehenetsita) aplikatzen du.",
      // "Sets the location of an error message in relation to the question with invalid input. Choose between: \"Top\" - an error text is placed at the top of the question box; \"Bottom\" - an error text is placed at the bottom of the question box. The \"Inherit\" option applies the survey-level setting (\"Top\" by default)."
      errorLocation: "Errore-mezuaren kokapena ezartzen du sarrera baliogabea duen galderarekiko. Aukeratu: \"Goian\" - errore-testua galdera-koadroaren goialdean jartzen da; \"Behean\" - errore-testua galdera-koadroaren behealdean jartzen da. \"Heredatu\" aukerak inkesta-mailako ezarpena (\"Goian\" lehenetsita) aplikatzen du.",
      // "Adds space or margin between the question content and the left border of the question box."
      indent: "Tarte edo marjina gehitzen du galderaren edukia eta galdera-koadroaren ezkerreko ertzaren artean.",
      // "Sets the width of the question in proportion to other survey elements in the same line. Accepts CSS values (px, %, in, pt, etc.)."
      width: "Galderaren zabalera ezartzen du, lerro bereko beste inkesta-elementuekiko proportzioan. CSS balioak onartzen ditu (px, %, in, pt, etab.).",
      // "Choose from: \"On lost focus\" - the value is updated when the input field loses focus; \"While typing\" - the value is updated in real-time, as users are typing. The \"Inherit\" option applies the survey-level setting (\"On lost focus\" by default)."
      textUpdateMode: "Aukeratu: \"Fokua galtzean\" - balioa sarrera-eremuak fokua galtzen duenean eguneratzen da; \"Idazten ari den bitartean\" - balioa denbora errealean eguneratzen da, erabiltzaileak idazten duen heinean. \"Heredatu\" aukerak inkesta-mailako ezarpena (\"Fokua galtzean\" lehenetsita) aplikatzen du.",
      // "You can use any web service as a data source for multiple-choice questions. To populate choice values, enter the URL of the service providing the data."
      url: "Edozein web-zerbitzu erabil dezakezu aukera anitzeko galderen datu-iturri gisa. Aukera-balioak betetzeko, sartu datuak ematen dituen zerbitzuaren URLa.",
      // "A comparison operation used to filter the drop-down list."
      searchMode: "Goitibeherako zerrenda iragazteko erabiltzen den konparatze-eragiketa.",
      // "Long texts in choice options will automatically generate line breaks to fit within the drop-down menu. Unselect if you want the texts to clip."
      textWrapEnabled: "Aukeren testu luzeek automatikoki lerro-jauziak sortuko dituzte goitibeherako menuan sartzeko. Deshautatu testuak moztuta agertzea nahi baduzu.",
      // "Specifies how many columns this question spans within the grid layout."
      effectiveColSpan: "Galdera honek sare-diseinuan zenbat zutabe hartzen dituen zehazten du.",
      // "Specifies how the question appears when it is read-only. \"Read-Only\" displays the question with its usual input controls, but disabled for editing. \"View\" displays answers as text or other non-interactive elements. \"Inherit\" uses the mode set for the parent panel, page, or survey (\"Read-Only\" by default)."
      readOnlyMode: "Galdera irakurtzeko soilik dagoenean nola agertzen den zehazten du. \"Irakurtzeko soilik\" aukerak galdera ohiko sarrera-kontrolekin bistaratzen du, baina editatzea desgaituta. \"Ikusi\" aukerak erantzunak testu edo elementu ez-interaktibo gisa bistaratzen ditu. \"Heredatu\" aukerak guraso-panel, orrialde edo inkestan ezarritako modua erabiltzen du (\"Irakurtzeko soilik\" lehenetsita).",
      // "Displays hints for available keyboard actions below this question. The \"Inherit\" option applies the survey-level setting."
      showKeyboardHints: "Galdera honen azpian erabilgarri dauden teklatu-ekintzen iradokizunak bistaratzen ditu. \"Heredatu\" aukerak inkesta-mailako ezarpena aplikatzen du."
    },
    surveyvalidator: {
      // "Use the magic wand icon to define when the question's value is considered valid."
      expression: "Erabili makila magikoaren ikonoa galderaren balioa noiz hartzen den baliozkotzat zehazteko.",
      // "Errors block progress until resolved. Warnings highlight issues but allow to continue. Informational notes offer additional context or neutral guidance. When using warnings or informational notes, we recommend enabling immediate validation: \"Survey\" → \"Validation\" → \"Run validation\" → \"After an answer has changed\"."
      notificationType: "Erroreek aurrerapena blokeatzen dute konpondu arte. Abisuek arazoak nabarmentzen dituzte baina aurrera egiten uzten dute. Informazio-oharrek testuinguru gehigarria edo orientabide neutroa eskaintzen dute. Abisuak edo informazio-oharrak erabiltzean, balidazio berehalakoa gaitzea gomendatzen dugu: \"Inkesta\" → \"Balidazioa\" → \"Exekutatu balidazioa\" → \"Erantzun bat aldatu ondoren\"."
    },
    signaturepad: {
      // "Sets the width of the displayed signature area and the resulting image."
      signatureWidth: "Bistaratutako sinadura-eremuaren eta lortutako irudiaren zabalera ezartzen du.",
      // "Sets the height of the displayed signature area and the resulting image."
      signatureHeight: "Bistaratutako sinadura-eremuaren eta lortutako irudiaren altuera ezartzen du.",
      // "Select if you want the signature area to fill all available space within the question box while maintaining the default 3:2 aspect ratio. When custom width and height values are set, the setting will keep the aspect ratio of these dimensions."
      signatureAutoScaleEnabled: "Hautatu sinadura-eremuak galdera-koadroaren barneko espazio guztia betetzea nahi baduzu, 3:2ko itxura-proportzio lehenetsia mantenduz. Zabalera eta altuera pertsonalizatuak ezartzen direnean, ezarpenak dimentsio horien itxura-proportzioa mantenduko du."
    },
    file: {
      // "Specifies the display height of uploaded images in the preview and the actual height of images taken with the camera. In single file upload mode, the display height is limited by the preview area; in multiple file upload mode, it is limited by the thumbnail area."
      imageHeight: "Igotako irudien bistaratze-altuera zehazten du aurrebistan eta kamerarekin lortutako irudien benetako altuera. Fitxategi bakarra igotzeko moduan, bistaratze-altuera aurrebista-areak mugatzen du; fitxategi anitz igotzeko moduan, miniatura-areak mugatzen du.",
      // "Specifies the display width of uploaded images in the preview and the actual width of images taken with the camera. In single file upload mode, the display width is limited by the preview area; in multiple file upload mode, it is limited by the thumbnail area."
      imageWidth: "Igotako irudien bistaratze-zabalera zehazten du aurrebistan eta kamerarekin lortutako irudien benetako zabalera. Fitxategi bakarra igotzeko moduan, bistaratze-zabalera aurrebista-areak mugatzen du; fitxategi anitz igotzeko moduan, miniatura-areak mugatzen du.",
      // "Displays thumbnail previews for uploaded files when possible. Unselect if you want to show file icons instead."
      allowImagesPreview: "Igotako fitxategien miniaturak bistaratzen ditu, posible denean. Fitxategi-ikonoak erakustea nahi baduzu, deshautatu.",
      // "Triggers a prompt asking to confirm the file deletion."
      confirmDelete: "Fitxategia ezabatzea berresteko eskaera bat abiarazten du."
    },
    image: {
      // "The \"Auto\" option automatically determines the suitable mode for display - Image, Video, or YouTube - based on the source URL provided."
      contentMode: "\"Automatikoa\" aukerak bistaratze-modu egokia zehazten du automatikoki - Irudia, Bideoa edo YouTube - ematen den iturburu-URLaren arabera."
    },
    imagepicker: {
      // "Overrides the minimum and maximum height values."
      imageHeight: "Gutxieneko eta gehieneko altuera-balioak gainidazten ditu.",
      // "Overrides the minimum and maximum width values."
      imageWidth: "Gutxieneko eta gehieneko zabalera-balioak gainidazten ditu.",
      // "\"Value\" serves as an item ID used in conditional rules; \"Text\" is displayed to respondents."
      choices: "\"Balioa\" baldintza-arauetan erabiltzen den elementu-ID gisa erabiltzen da; \"Testua\" erantzuleei bistaratzen zaie.",
      // "Choose between \"Image\" and \"Video\" to set the content mode of the media selector. If \"Image\" is selected, ensure that all options provided are image files in the following formats: JPEG, GIF, PNG, APNG, SVG, BMP, ICO. Similarly, if \"Video\" is selected, ensure that all options are direct links to video files in the following formats: MP4, MOV, WMV, FLV, AVI, MKV. Please note that YouTube links are not supported for video options."
      contentMode: "Aukeratu \"Irudia\" eta \"Bideoa\" artean media-hautatzailearen eduki-modua ezartzeko. \"Irudia\" hautatzen bada, ziurtatu emandako aukera guztiak formato hauetako irudi-fitxategiak direla: JPEG, GIF, PNG, APNG, SVG, BMP, ICO. Era berean, \"Bideoa\" hautatzen bada, ziurtatu aukera guztiak formato hauetako bideo-fitxategien esteka zuzenak direla: MP4, MOV, WMV, FLV, AVI, MKV. Kontuan izan YouTube estekak ez direla onartzen bideo-aukeretarako."
    },
    comment: {
      // "Sets the number of displayed lines in the input field. If the input takes up more lines, the scroll bar will appear."
      rows: "Sarrera-eremuan bistaratzen den lerro-kopurua ezartzen du. Sarrerak lerro gehiago hartzen baditu, desplazamendu-barra agertuko da."
    },
    // survey templates
    survey: {
      // "Select if you want to prevent respondents from filling out your survey."
      readOnly: "Hautatu erantzuleei zure inkesta betetzea eragotzi nahi badiezu.",
      // "Specifies how read-only questions appear, including on the preview page. \"Read-Only\" (default) displays questions with their usual input controls, but disabled for editing. \"View\" displays answers as text or other non-interactive elements."
      readOnlyMode: "Irakurtzeko soilik galderak nola agertzen diren zehazten du, aurrebista-orrialdean barne. \"Irakurtzeko soilik\" (lehenetsia) aukerak galderak ohiko sarrera-kontrolekin bistaratzen ditu, baina editatzea desgaituta. \"Ikusi\" aukerak erantzunak testu edo elementu ez-interaktibo gisa bistaratzen ditu.",
      // "Sets the location of the progress bar. The \"Auto\" value displays the progress bar above or below the survey header."
      progressBarLocation: "Aurrerapen-barraren kokapena ezartzen du. \"Automatikoa\" balioak aurrerapen-barra inkestaren goiburuaren gainean edo azpian bistaratzen du."
    },
    filter: {
      // "Select a dynamic matrix, a dropdown matrix or a dynamic panel whose rows or panels the filter narrows down."
      targetQuestion: "Hautatu matrize dinamiko bat, goitibeherako matrize bat edo panel dinamiko bat, iragazkiak haien errenkadak edo panelak murrizteko.",
      // "The preset applied when the survey starts."
      defaultPreset: "Inkesta hastean aplikatzen den aurrezarpena."
    },
    filterpreset: {
      // "Use field names in curly brackets, for example: {price} < 20 and {category} anyof ['Beverages']."
      expression: "Erabili eremu-izenak giltzen artean, adibidez: {price} < 20 and {category} anyof ['Beverages']."
    },
    // "Limits the operators respondents can use to filter by this field. Leave empty to allow all operators that suit the field."
    filterOperators: "Erantzuleek eremu honen arabera iragazteko erabil ditzaketen eragileak mugatzen ditu. Utzi hutsik eremuari egokitzen zaizkion eragile guztiak baimentzeko.",
    matrixdropdowncolumn: {
      // "A column ID that is not visible to respondents."
      name: "Erantzulearentzat ikusgai ez dagoen zutabe-ID bat.",
      // "When enabled for a column, a respondent is required to provide a unique response for each question within this column."
      isUnique: "Zutabe baterako gaituta dagoenean, erantzuleak erantzun bakarra eman behar du zutabe honetako galdera bakoitzerako.",
      // "Sets the number of displayed lines in the input field. If the input takes up more lines, the scroll bar will appear."
      rows: "Sarrera-eremuan bistaratzen den lerro-kopurua ezartzen du. Sarrerak lerro gehiago hartzen baditu, desplazamendu-barra agertuko da.",
      // "Use the magic wand icon to set a conditional rule that determines column visibility."
      visibleIf: "Erabili makila magikoaren ikonoa zutabearen ikusgaitasuna zehazten duen baldintza-arau bat ezartzeko.",
      // "Use the magic wand icon to set a conditional rule that disables the read-only mode for the column."
      enableIf: "Erabili makila magikoaren ikonoa zutabearen irakurtzeko soilik modua desgaitzen duen baldintza-arau bat ezartzeko.",
      // "Use the magic wand icon to set a conditional rule that prevents survey submission unless at least one nested question has an answer."
      requiredIf: "Erabili makila magikoaren ikonoa inkesta bidaltzea eragozten duen baldintza-arau bat ezartzeko, barneko galdera batek gutxienez erantzun bat ez badu.",
      // "When selected, creates an individual column for each choice option."
      showInMultipleColumns: "Hautatzean, zutabe indibidual bat sortzen du aukera bakoitzeko.",
      // "Arranges choice options in a multi-column layout. When set to 0, the options are displayed in a single line. When set to -1, the actual value is inherited from the \"Nested column count\" property of the parent matrix."
      colCount: "Aukera-aukerak zutabe anitzeko diseinu batean antolatzen ditu. 0 ezartzean, aukerak lerro bakarrean bistaratzen dira. -1 ezartzean, benetako balioa guraso-matrizearen \"Habiaratutako zutabe-kopurua\" propietatetik heredatzen da.",
      // "Specifies how cells in this column appear when they are read-only. \"Read-Only\" displays the cells with their usual input controls, but disabled for editing. \"View\" displays answers as text or other non-interactive elements. \"Inherit\" uses the mode set for the matrix or survey (\"Read-Only\" by default)."
      readOnlyMode: "Zutabe honetako gelaxkak irakurtzeko soilik daudenean nola agertzen diren zehazten du. \"Irakurtzeko soilik\" aukerak gelaxkak ohiko sarrera-kontrolekin bistaratzen ditu, baina editatzea desgaituta. \"Ikusi\" aukerak erantzunak testu edo elementu ez-interaktibo gisa bistaratzen ditu. \"Heredatu\" aukerak matrize edo inkestan ezarritako modua erabiltzen du (\"Irakurtzeko soilik\" lehenetsita)."
    },
    slider: {
      // "The lowest number that users can select."
      min: "Erabiltzaileek hauta dezaketen zenbaki txikiena.",
      // "The highest number that users can select."
      max: "Erabiltzaileek hauta dezaketen zenbaki handiena.",
      // "The interval between selectable scale values. For example, a step of 5 will allow users to select 0, 5, 10, etc."
      step: "Hauta daitezkeen eskala-balioen arteko tartea. Adibidez, 5eko urrats batek erabiltzaileei 0, 5, 10, etab. hautatzeko aukera emango die.",
      // "The minimum distance between the slider thumbs a user can set."
      minRangeLength: "Erabiltzaileak ezar dezakeen gutxieneko distantzia gradutzailearen karratuen artean.",
      // "The maximum distance between the slider thumbs a user can set."
      maxRangeLength: "Erabiltzaileak ezar dezakeen gehieneko distantzia gradutzailearen karratuen artean.",
      // "Specifies how many scale labels to generate. A value of -1 means the number is calculated automatically based on the Min value and Max value."
      labelCount: "Zenbat eskala-etiketa sortu behar diren zehazten du. -1 balioak kopurua automatikoki kalkulatuko dela esan nahi du, Gutxieneko balioaren eta Gehieneko balioaren arabera.",
      // "Use `{0}` as a placeholder for the actual value."
      labelFormat: "Erabili `{0}` benetako balioaren leku-marka gisa.",
      // "Allows you to define custom labels at specific values and optionally assign corresponding text to them (e.g., 0 = \"Poor\", 100 = \"Excellent\")."
      customLabels: "Balio jakin batzuetan etiketa pertsonalizatuak definitzeko aukera ematen du eta, aukeran, dagokien testua esleitzeko (adibidez, 0 = \"Kaskarra\", 100 = \"Bikaina\").",
      // "Use `{0}` as a placeholder for the actual value."
      tooltipFormat: "Erabili `{0}` benetako balioaren leku-marka gisa.",
      // "Allows users to move one thumb past the other."
      allowSwap: "Erabiltzaileei karratu bat bestearen gainetik pasatzeko aukera ematen die.",
      // "Displays a button that clears the selected slider value and sets it to undefined."
      allowClear: "Hautatutako gradutzaile-balioa garbitzen duen eta undefined ezartzen duen botoia bistaratzen du.",
      // "Defines the slider's minimum value dynamically using an expression. Supports basic calculations (e.g, `{q1_id} + {q2_id}`), Boolean logic (e.g., `{age} > 60`), and functions like `iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, and more."
      minValueExpression: "Gradutzailearen gutxieneko balioa dinamikoki definitzen du adierazpen bat erabiliz. Oinarrizko kalkuluak onartzen ditu (adibidez, `{q1_id} + {q2_id}`), logika boolearra (adibidez, `{age} > 60`) eta `iif()`, `today()`, `age()`, `min()`, `max()`, `avg()` eta antzeko funtzioak.",
      // "Defines the slider's maximum value dynamically using an expression. Supports basic calculations (e.g, `{q1_id} + {q2_id}`), Boolean logic (e.g., `{age} > 60`), and functions like `iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, and more."
      maxValueExpression: "Gradutzailearen gehieneko balioa dinamikoki definitzen du adierazpen bat erabiliz. Oinarrizko kalkuluak onartzen ditu (adibidez, `{q1_id} + {q2_id}`), logika boolearra (adibidez, `{age} > 60`) eta `iif()`, `today()`, `age()`, `min()`, `max()`, `avg()` eta antzeko funtzioak."
    },
    // "Makes this choice exclusive. When selected by a user, it will automatically deselect all other options in the question."
    isExclusive: "Aukera hau esklusiboa bihurtzen du. Erabiltzaile batek hautatzean, galderako beste aukera guztiak automatikoki deshautatuko dira.",
    matrixcolumn: {
      // "Makes checkboxes in this column exclusive. When selected by a user, they will automatically deselect all other checkboxes in the same row."
      isExclusive: "Zutabe honetako kontrol-laukitxoak esklusibo bihurtzen ditu. Erabiltzaile batek hautatzean, errenkada bereko beste kontrol-laukitxo guztiak automatikoki deshautatuko dira."
    },
    // "Select if uppercase and lowercase letters in the regular expression must be treated as equivalent."
    caseInsensitive: "Hautatu adierazpen erregularreko maiuskulak eta minuskulak baliokidetzat hartu behar badira.",
    // "Choose from: \"Static\" - sets a fixed width; \"Responsive\" - makes the survey occupy the full width of the screen; \"Auto\" - applies either of the two depending on the question types used."
    widthMode: "Aukeratu: \"Finkoa\" - zabalera finkoa ezartzen du; \"Erantzunkorra\" - inkestak pantailaren zabalera osoa hartzen du; \"Automatikoa\" - bietako bat aplikatzen du erabilitako galdera-motaren arabera.",
    // "Assign a unique cookie value for your survey. The cookie will be set in a respondent's browser upon survey completion to prevent repetitive survey submissions."
    cookieName: "Esleitu cookie-balio bakarra zure inkestari. Cookiea erantzulearen nabigatzailean ezarriko da inkesta amaitzean, inkesta behin eta berriz ez bidaltzeko.",
    // "Paste an image link (no size limits) or click the folder icon to browse a file from your computer (up to 64KB)."
    logo: "Itsatsi irudi-esteka bat (tamaina-mugarik gabe) edo egin klik karpeta-ikonoan zure ordenagailuko fitxategi bat aurkitzeko (64 KB arte).",
    // "Sets a logo width in CSS units (px, %, in, pt, etc.)."
    logoWidth: "Logotipoaren zabalera ezartzen du CSS unitateetan (px, %, in, pt, etab.).",
    // "Sets a logo height in CSS units (px, %, in, pt, etc.)."
    logoHeight: "Logotipoaren altuera ezartzen du CSS unitateetan (px, %, in, pt, etab.).",
    // "Choose from: \"None\" - image maintains its original size; \"Contain\" - image is resized to fit while maintaining its aspect ratio; \"Cover\" - image fills the entire box while maintaining its aspect ratio; \"Fill\" - image is stretched to fill the box without maintaining its aspect ratio."
    logoFit: "Aukeratu: \"Bat ere ez\" - irudiak jatorrizko tamaina mantentzen du; \"Eduki\" - irudia egokitzeko tamainaz aldatzen da, itxura-proportzioa mantenduz; \"Estali\" - irudiak koadro osoa betetzen du, itxura-proportzioa mantenduz; \"Bete\" - irudia koadroa betetzeko luzatzen da, itxura-proportzioa mantendu gabe.",
    // "Select if you want the survey to auto-advance to the next page once a respondent has answered all questions on the current page. This feature won't apply if the last question on the page is open-ended or allows multiple answers."
    autoAdvanceEnabled: "Hautatu erantzule batek uneko orrialdeko galdera guztiak erantzun ondoren inkestak automatikoki hurrengo orrialdera jotzea nahi baduzu. Ezaugarri hau ez da aplikatuko orrialdeko azken galdera irekia bada edo erantzun anitz onartzen baditu.",
    // "Select if you want the survey to complete automatically after a respondent answers all questions."
    autoAdvanceAllowComplete: "Hautatu erantzule batek galdera guztiak erantzun ondoren inkesta automatikoki osatzea nahi baduzu.",
    // "Sets the visibility of navigation buttons on a page."
    showNavigationButtons: "Orrialde bateko nabigazio-botoien ikusgaitasuna ezartzen du.",
    // "Sets the location of navigation buttons on a page."
    navigationButtonsLocation: "Orrialde bateko nabigazio-botoien kokapena ezartzen du.",
    // "Enable the preview page with all or answered questions only."
    showPreviewBeforeComplete: "Gaitu aurrebista-orrialdea, galdera guztiekin edo erantzundakoekin soilik.",
    // "Applies to all questions within the survey. This setting can be overridden by title alignment rules at lower levels: panel, page, or question. A lower-level setting will override those on a higher level."
    questionTitleLocation: "Inkestako galdera guztiei aplikatzen zaie. Ezarpen hau maila baxuagoko izenburu-lerrokatze arauek gainidatz dezakete: panel, orrialde edo galdera. Maila baxuagoko ezarpen batek goi-mailakoak gainidatziko ditu.",
    // "A symbol or a sequence of symbols indicating that an answer is required."
    requiredMark: "Erantzun bat derrigorrezkoa dela adierazten duen ikurra edo ikur-sekuentzia.",
    // "Enter a number or letter with which you want to start numbering."
    questionStartIndex: "Sartu zenbakitzen hasi nahi duzun zenbakia edo letra.",
    // "Sets the location of an error message in relation to the question with invalid input. Choose between: \"Top\" - an error text is placed at the top of the question box; \"Bottom\" - an error text is placed at the bottom of the question box."
    questionErrorLocation: "Errore-mezuaren kokapena ezartzen du sarrera baliogabea duen galderarekiko. Aukeratu: \"Goian\" - errore-testua galdera-koadroaren goialdean jartzen da; \"Behean\" - errore-testua galdera-koadroaren behealdean jartzen da.",
    // "Select if you want the first input field on each page ready for text entry."
    autoFocusFirstQuestion: "Hautatu orrialde bakoitzeko lehen sarrera-eremua testua idazteko prest egotea nahi baduzu.",
    // "Displays letters (A, B, C, ...) next to choices in Radio Button Group, Checkboxes, and Image Picker questions. Respondents can select choices by pressing the corresponding letter keys. You can override this setting for individual questions."
    choiceShortcutsEnabled: "Letrak (A, B, C, ...) bistaratzen ditu aukeren ondoan Aukera-botoien taldea, Kontrol-laukitxoak eta Irudi-hautatzailea galderetan. Erantzuleek dagokien letra-teklak sakatuta har ditzakete aukerak. Ezarpen hau gainidatz dezakezu galdera bakoitzeko.",
    checkboxbase: {
      // "Displays letters (A, B, C, ...) next to choices and lets respondents select them by pressing the corresponding letter keys. The \"Inherit\" option uses the survey-level setting."
      choiceShortcutsEnabled: "Letrak (A, B, C, ...) bistaratzen ditu aukeren ondoan eta erantzuleei dagokien letra-teklak sakatuta hautatzeko aukera ematen die. \"Heredatu\" aukerak inkesta-mailako ezarpena erabiltzen du."
    },
    // "Displays hints for available keyboard actions below questions. You can override this setting for individual questions."
    showKeyboardHints: "Galderen azpian erabilgarri dauden teklatu-ekintzen iradokizunak bistaratzen ditu. Ezarpen hau gainidatz dezakezu galdera bakoitzeko.",
    // "Keeps the original order of questions or randomizes them. The effect of this setting is only visible in the Preview tab."
    questionOrder: "Galderen jatorrizko ordena mantentzen du edo ausaz aldatzen ditu. Ezarpen honen ondorioa aurrebista fitxan soilik ikus daiteke.",
    // "For text entry questions only."
    maxTextLength: "Testua sartzeko galderetarako soilik.",
    // "For question comments only."
    maxCommentLength: "Galderen iruzkinetarako soilik.",
    // "Sets the number of displayed lines in text areas for question comments. If the input takes up more lines, the scroll bar appears."
    commentAreaRows: "Galderen iruzkinetarako testu-areetan bistaratzen den lerro-kopurua ezartzen du. Sarrerak lerro gehiago hartzen baditu, desplazamendu-barra agertzen da.",
    // "Select if you want question comments and Long Text questions to auto-grow in height based on the entered text length."
    autoGrowComment: "Hautatu galderen iruzkinek eta Testu luzea galderak sartutako testuaren luzeraren arabera automatikoki altuera handitzea nahi baduzu.",
    // "For question comments and Long Text questions only."
    allowResizeComment: "Galderen iruzkinetarako eta Testu luzea galderetarako soilik.",
    // "Custom variables serve as intermediate or auxiliary variables used in form calculations. They take respondent inputs as source values. Each custom variable has a unique name and an expression it's based on."
    calculatedValues: "Aldagai pertsonalizatuak inprimakien kalkuluetan erabiltzen diren tarteko edo laguntza-aldaerak dira. Erantzuleen sarrerak hartzen dituzte iturburu-balio gisa. Aldagai pertsonalizatu bakoitzak izen bakarra eta oinarri duen adierazpen bat ditu.",
    // "Select if you wish the calculated value of the expression to be saved along with survey results."
    includeIntoResult: "Hautatu adierazpenaren kalkulatutako balioa inkestaren emaitzekin batera gordetzea nahi baduzu.",
    // "A trigger is an event or condition that is based on an expression. Once the expression is evaluated to \"true\", a trigger sets off an action. Such an action can optionally have a target question it affects."
    triggers: "Abiarazlea adierazpen batean oinarritutako gertaera edo baldintza bat da. Adierazpena \"egia\" ebaluatzen denean, abiarazleak ekintza bat abiatzen du. Ekintza horrek, aukeran, eragiten dion helburuko galdera bat izan dezake.",
    // "Choose whether or not to clear values for questions hidden by conditional logic and when to do it."
    clearInvisibleValues: "Aukeratu logika baldintzapean ezkutatutako galderen balioak garbitu ala ez eta noiz garbitu.",
    // "Choose from: \"On lost focus\" - the value is updated when the input field loses focus; \"While typing\" - the value is updated in real-time, as users are typing."
    textUpdateMode: "Aukeratu: \"Fokua galtzean\" - balioa sarrera-eremuak fokua galtzen duenean eguneratzen da; \"Idazten ari den bitartean\" - balioa denbora errealean eguneratzen da, erabiltzaileak idazten duen heinean.",
    // "The left value serves as a column ID used in conditional rules, the right value is displayed to respondents."
    columns: "Ezkerreko balioa baldintza-arauetan erabiltzen den zutabe-ID gisa erabiltzen da; eskuineko balioa erantzuleei bistaratzen zaie.",
    // "The left value serves as a row ID used in conditional rules, the right value is displayed to respondents."
    rows: "Ezkerreko balioa baldintza-arauetan erabiltzen den errenkada-ID gisa erabiltzen da; eskuineko balioa erantzuleei bistaratzen zaie.",
    // "Accepts CSS values (px, %, in, pt, etc.)."
    columnMinWidth: "CSS balioak onartzen ditu (px, %, in, pt, etab.).",
    // "Accepts CSS values (px, %, in, pt, etc.)."
    rowTitleWidth: "CSS balioak onartzen ditu (px, %, in, pt, etab.).",
    // "Visible only if at least one column displays total values set with \"Aggregation method\" or \"Total value expression\"."
    totalText: "Zutabe batek gutxienez \"Agregazio-metodoa\" edo \"Guztizko balioaren adierazpena\" bidez ezarritako guztizko balioak bistaratzen baditu soilik da ikusgai.",
    // "Sets the location of an error message in relation to a cell with invalid input. The \"Inherit\" option applies the setting from the \"Error message alignment\" property."
    cellErrorLocation: "Errore-mezuaren kokapena ezartzen du sarrera baliogabea duen gelaxka batekiko. \"Heredatu\" aukerak \"Errore-mezuaren lerrokatzea\" propietatearen ezarpena aplikatzen du.",
    // "Sets the location of error messages for questions nested in detail sections. The \"Inherit\" option applies the setting from the \"Error message alignment\" property."
    detailErrorLocation: "Xehetasun-ataletan habiaratutako galderen errore-mezuen kokapena ezartzen du. \"Heredatu\" aukerak \"Errore-mezuaren lerrokatzea\" propietatearen ezarpena aplikatzen du.",
    // "When the \"Prevent duplicate responses\" property is enabled, a respondent attempting to submit a duplicate entry will receive the following error message."
    keyDuplicationError: "\"Saihestu erantzun bikoiztuak\" propietatea gaituta dagoenean, sarrera bikoiztu bat bidaltzen saiatzen den erantzuleak hurrengo errore-mezua jasoko du.",
    matrixdropdown: {
      // "When the \"Prevent duplicate responses\" property is enabled for a matrix column, a respondent attempting to submit a duplicate entry will receive the following error message."
      keyDuplicationError: "Matrize-zutabe baterako \"Saihestu erantzun bikoiztuak\" propietatea gaituta dagoenean, sarrera bikoiztu bat bidaltzen saiatzen den erantzuleak hurrengo errore-mezua jasoko du."
    },
    // "Allows you to calculate total values based on an expression. The expression can include basic calculations (`{q1_id} + {q2_id}`), Boolean expressions (`{age} > 60`) and functions ('iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, etc.)."
    totalExpression: "Guztizko balioak adierazpen baten arabera kalkulatzeko aukera ematen du. Adierazpenak oinarrizko kalkuluak (`{q1_id} + {q2_id}`), adierazpen boolearrak (`{age} > 60`) eta funtzioak ('iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, etab.) izan ditzake.",
    // "Reference a column ID to require a user to provide a unique response for each question within the specified column."
    keyName: "Erreferentzia ezazu zutabe-ID bat, erabiltzaileari zehaztutako zutabeko galdera bakoitzerako erantzun bakarra ematea eskatzeko.",
    // "Type a subtitle."
    description: "Idatzi azpititulu bat.",
    // "Choose a language to begin creating your survey. To add a translation, switch to a new language and translate the original text here or in the Translations tab."
    locale: "Aukeratu hizkuntza bat zure inkesta sortzen hasteko. Itzulpen bat gehitzeko, aldatu hizkuntza berri batera eta itzuli jatorrizko testua hemen edo Itzulpenak fitxan.",
    // "Sets the location of a detail section in relation to a row. Choose from: \"None\" - no detail section is added; \"Under the row\" - a detail section is placed under each row of the matrix; \"Under the row, display one detail section only\" - a detail section is displayed under a single row only, the remaining sections are collapsed."
    detailPanelMode: "Xehetasun-atalaren kokapena ezartzen du errenkada batekiko. Aukeratu: \"Bat ere ez\" - ez da xehetasun-atalik gehitzen; \"Errenkadaren azpian\" - xehetasun-atala matrizearen errenkada bakoitzaren azpian jartzen da; \"Errenkadaren azpian, erakutsi xehetasun-atal bat soilik\" - xehetasun-atala errenkada bakarraren azpian bistaratzen da, gainerako atalak tolestuta daude.",
    // "Choose from: \"None\" - image maintains its original size; \"Contain\" - image is resized to fit while maintaining its aspect ratio; \"Cover\" - image fills the entire box while maintaining its aspect ratio; \"Fill\" - image is stretched to fill the box without maintaining its aspect ratio."
    imageFit: "Aukeratu: \"Bat ere ez\" - irudiak jatorrizko tamaina mantentzen du; \"Eduki\" - irudia egokitzeko tamainaz aldatzen da, itxura-proportzioa mantenduz; \"Estali\" - irudiak koadro osoa betetzen du, itxura-proportzioa mantenduz; \"Bete\" - irudia koadroa betetzeko luzatzen da, itxura-proportzioa mantendu gabe.",
    // "The \"Inherit\" option applies a survey-level setting (\"Disabled\" by default)."
    autoGrow: "\"Heredatu\" aukerak inkesta-mailako ezarpena aplikatzen du (\"Desgaituta\" lehenetsita).",
    // "The \"Inherit\" option applies a survey-level setting (\"Enabled\" by default)."
    allowResize: "\"Heredatu\" aukerak inkesta-mailako ezarpena aplikatzen du (\"Gaituta\" lehenetsita).",
    // "A time interval in seconds after which the survey auto-advances to the \"Thank You\" page. When set to 0, counts the time spent on the survey."
    timeLimit: "Denbora-tartea segundotan, ondoren inkesta automatikoki \"Eskerrik asko\" orrialdera igarotzen dena. 0 ezartzean, inkestan emandako denbora zenbatzen du.",
    // "A time interval in seconds after which the survey auto-advances to the next page. Hides the \"Previous\" navigation button. When set to 0, counts the time spent on the current page."
    timeLimitPerPage: "Denbora-tartea segundotan, ondoren inkesta automatikoki hurrengo orrialdera igarotzen dena. \"Aurrekoa\" nabigazio-botoia ezkutatzen du. 0 ezartzean, uneko orrialdean emandako denbora zenbatzen du.",
    // "Enable this option to trigger validation when a user focuses on an empty input field and then leaves it without making any changes."
    validateVisitedEmptyFields: "Gaitu aukera hau balidazioa abiarazteko erabiltzaileak sarrera-eremu huts batean fokua jartzen duenean eta gero aldaketarik egin gabe uzten duenean.",
    page: {
      // "A page ID that is not visible to respondents."
      name: "Erantzulearentzat ikusgai ez dagoen orrialde-ID bat.",
      // "Type a page subtitle."
      description: "Idatzi orrialdearen azpititulu bat.",
      // "A caption displayed on a navigation button in the progress bar or table of contents (TOC). If you leave this field empty, the navigation button will use the page title or page name. To enable the progress bar or TOC, go to \"Survey\" → \"Navigation\"."
      navigationTitle: "Aurrerapen-barran edo edukien aurkibidean (TOC) nabigazio-botoi batean bistaratzen den epigrafea. Eremu hau hutsik uzten baduzu, nabigazio-botoiak orrialdearen izenburua edo orrialdearen izena erabiliko du. Aurrerapen-barra edo edukien aurkibidea gaitzeko, joan \"Inkesta\" → \"Nabigazioa\" atalera.",
      // "A time interval in seconds after which the survey auto-advances to the next page. Hides the \"Previous\" navigation button. When set to 0, counts the time spent on the current page."
      timeLimit: "Denbora-tartea segundotan, ondoren inkesta automatikoki hurrengo orrialdera igarotzen dena. \"Aurrekoa\" nabigazio-botoia ezkutatzen du. 0 ezartzean, uneko orrialdean emandako denbora zenbatzen du.",
      // isRequired: "Prevents survey submission unless at least one nested question has an answer.",
      visibleIf: "Erabili makila magikoaren ikonoa orrialdearen ikusgaitasuna zehazten duen baldintza-arau bat ezartzeko.",
      // "Use the magic wand icon to set a conditional rule that disables the read-only mode for the page."
      enableIf: "Erabili makila magikoaren ikonoa orrialdearen irakurtzeko soilik modua desgaitzen duen baldintza-arau bat ezartzeko.",
      // "Use the magic wand icon to set a conditional rule that prevents survey submission unless at least one nested question has an answer."
      requiredIf: "Erabili makila magikoaren ikonoa inkesta bidaltzea eragozten duen baldintza-arau bat ezartzeko, barneko galdera batek gutxienez erantzun bat ez badu.",
      // "Applies to all questions within this page. When set to \"Hidden\", it also hides question descriptions. If you want to override this setting, define title alignment rules for individual questions or panels. The \"Inherit\" option applies the survey-level setting (\"Top\" by default)."
      questionTitleLocation: "Orrialde honetako galdera guztiei aplikatzen zaie. \"Ezkutatuta\" ezartzean, galderen deskribapenak ere ezkutatzen ditu. Ezarpen hau gainidatzi nahi baduzu, zehaztu izenburu-lerrokatze arauak galdera edo panel bakoitzeko. \"Heredatu\" aukerak inkesta-mailako ezarpena (\"Goian\" lehenetsita) aplikatzen du.",
      // "Sets consistent width for question titles when they are aligned to the left of their question boxes. Accepts CSS values (px, %, in, pt, etc.)."
      questionTitleWidth: "Zabalera koherentea ezartzen die galderen izenburuei, galdera-koadroen ezkerraldera lerrokatuta daudenean. CSS balioak onartzen ditu (px, %, in, pt, etab.).",
      // "Sets the location of an error message in relation to the question with invalid input. Choose between: \"Top\" - an error text is placed at the top of the question box; \"Bottom\" - an error text is placed at the bottom of the question box. The \"Inherit\" option applies the survey-level setting (\"Top\" by default)."
      questionErrorLocation: "Errore-mezuaren kokapena ezartzen du sarrera baliogabea duen galderarekiko. Aukeratu: \"Goian\" - errore-testua galdera-koadroaren goialdean jartzen da; \"Behean\" - errore-testua galdera-koadroaren behealdean jartzen da. \"Heredatu\" aukerak inkesta-mailako ezarpena (\"Goian\" lehenetsita) aplikatzen du.",
      // "Keeps the original order of questions or randomizes them. The \"Inherit\" option applies the survey-level setting (\"Original\" by default). The effect of this setting is only visible in the Preview tab."
      questionOrder: "Galderen jatorrizko ordena mantentzen du edo ausaz aldatzen ditu. \"Heredatu\" aukerak inkesta-mailako ezarpena (\"Jatorrizkoa\" lehenetsita) aplikatzen du. Ezarpen honen ondorioa aurrebista fitxan soilik ikus daiteke.",
      // "Sets the visibility of navigation buttons on the page. The \"Inherit\" option applies the survey-level setting, which defaults to \"Visible\"."
      showNavigationButtons: "Orrialdeko nabigazio-botoien ikusgaitasuna ezartzen du. \"Heredatu\" aukerak inkesta-mailako ezarpena aplikatzen du, eta hori \"Ikusgai\" da lehenespenez.",
      // "This table lets you configure each grid column on the page. It automatically sets the width percentage for each column based on the maximum number of elements in a row. To customize the grid layout, manually adjust these values and define the title width for all questions in each column."
      gridLayoutColumns: "Taula honek orrialdeko sare-zutabe bakoitza konfiguratzeko aukera ematen dizu. Automatikoki ezartzen du zutabe bakoitzaren zabalera-ehunekoa, errenkada bateko elementu-kopuru handienaren arabera. Sare-diseinua pertsonalizatzeko, egokitu balio hauek eskuz eta zehaztu zutabe bakoitzeko galdera guztien izenburu-zabalera.",
      // "Specifies how questions on this page appear when they are read-only. \"Read-Only\" displays the questions with their usual input controls, but disabled for editing. \"View\" displays answers as text or other non-interactive elements. \"Inherit\" uses the mode set for the survey (\"Read-Only\" by default)."
      readOnlyMode: "Orrialde honetako galderak irakurtzeko soilik daudenean nola agertzen diren zehazten du. \"Irakurtzeko soilik\" aukerak galderak ohiko sarrera-kontrolekin bistaratzen ditu, baina editatzea desgaituta. \"Ikusi\" aukerak erantzunak testu edo elementu ez-interaktibo gisa bistaratzen ditu. \"Heredatu\" aukerak inkestan ezarritako modua erabiltzen du (\"Irakurtzeko soilik\" lehenetsita)."
    },
    // "Sets the location of a timer on a page."
    timerLocation: "Orrialde bateko tenporizadorearen kokapena ezartzen du.",
    // "Choose from: \"Locked\" - users cannot expand or collapse entries; \"Collapse all\" - all entries start in a collapsed state; \"Expand all\" - all entries start in an expanded state; \"First expanded\" - only the first entry is initially expanded. Applies if \"Entry display mode\" is set to \"List\" and the \"Entry title pattern\" property is specified."
    panelsState: "Aukeratu: \"Blokeatuta\" - erabiltzaileek ezin dituzte sarrerak zabaldu edo tolestu; \"Tolestu dena\" - sarrera guztiak tolestuta hasten dira; \"Zabaldu dena\" - sarrera guztiak zabalduta hasten dira; \"Lehena zabalduta\" - hasieran lehen sarrera soilik dago zabalduta. Aplikatzen da \"Sarreren bistaratze-modua\" \"Zerrenda\" ezarrita badago eta \"Sarreren izenburu-eredua\" propietatea zehaztuta badago.",
    // "Enter a shared property name within the array of objects that contains the image or video file URLs you want to display in the choice list."
    imageLinkName: "Sartu irudi edo bideo-fitxategien URLak dituen objektu-matrizearen barneko propietate-izen partekatu bat, aukera-zerrendan erakutsi nahi dituzunak.",
    // "The left value serves as an item ID used in conditional rules, the right value is displayed to respondents."
    choices: "Ezkerreko balioa baldintza-arauetan erabiltzen den elementu-ID gisa erabiltzen da; eskuineko balioa erantzuleei bistaratzen zaie.",
    // "Type a user-friendly title to display."
    title: "Idatzi bistara dadin izenburu erabilerraz bat.",
    // "Ensures that users won't complete the survey until files are uploaded."
    waitForUpload: "Ziurtatzen du erabiltzaileek ez dutela inkesta osatuko fitxategiak igo arte.",
    // "Accepts CSS values (px, %, in, pt, etc.)."
    minWidth: "CSS balioak onartzen ditu (px, %, in, pt, etab.).",
    // "Accepts CSS values (px, %, in, pt, etc.)."
    maxWidth: "CSS balioak onartzen ditu (px, %, in, pt, etab.).",
    // "Accepts CSS values (px, %, in, pt, etc.)."
    width: "CSS balioak onartzen ditu (px, %, in, pt, etab.).",
    // "A join identifier is a custom key that you can assign to several questions to link them together and sync their values. These values will be merged into a single array or object and stored in survey results using the key as the property name."
    valueName: "Elkartze-identifikatzailea hainbat galderari eslei diezaiekezun gako pertsonalizatu bat da, elkarrekin lotzeko eta haien balioak sinkronizatzeko. Balio horiek matrize edo objektu bakar batean bateratuko dira eta inkestaren emaitzetan gordeko dira, gakoa propietate-izen gisa erabiliz.",
    // "A value displayed in HTML questions and in the dynamic titles and descriptions of survey elements when the question value is empty."
    defaultDisplayValue: "HTML galderetan eta inkesta-elementuen izenburu eta deskribapen dinamikoetan bistaratzen den balioa, galderaren balioa hutsik dagoenean.",
    // "In single- and multiple-selection question types, each choice option has an ID and display value. When selected, this setting shows a display value instead of an ID value in HTML questions and dynamic titles and descriptions of survey elements."
    useDisplayValuesInDynamicTexts: "Hautapen bakarreko eta anitzeko galdera-motetan, aukera bakoitzak ID bat eta bistaratze-balio bat ditu. Hautatzean, ezarpen honek bistaratze-balioa erakusten du ID-balioaren ordez, HTML galderetan eta inkesta-elementuen izenburu eta deskribapen dinamikoetan.",
    // "Choose whether or not to clear question values hidden by conditional logic and when to do it. The \"Inherit\" option applies the survey-level setting (\"Upon survey completion\" by default)."
    clearIfInvisible: "Aukeratu logika baldintzapean ezkutatutako galderen balioak garbitu ala ez eta noiz garbitu. \"Heredatu\" aukerak inkesta-mailako ezarpena aplikatzen du (\"Inkesta amaitzean\" lehenetsita).",
    // "Choose from: \"All\" - copies all choice options from the selected question; \"Selected\" - dynamically copies only selected choice options; \"Unselected\" - dynamically copies only unselected choice options. The \"None\" and \"Other\" options are copied by default if enabled in the source question."
    choicesFromQuestionMode: "Aukeratu: \"Guztiak\" - hautatutako galderako aukera guztiak kopiatzen ditu; \"Hautatuak\" - hautatutako aukerak soilik kopiatzen ditu dinamikoki; \"Hautatu gabeak\" - hautatu gabeko aukerak soilik kopiatzen ditu dinamikoki. \"Bat ere ez\" eta \"Beste\" aukerak lehenespenez kopiatzen dira iturburu-galderan gaituta badaude.",
    // "In single- and multiple-selection question types, each choice option has an ID and display value. This setting specifies which matrix column or panel question should provide the IDs."
    choiceValuesFromQuestion: "Hautapen bakarreko eta anitzeko galdera-motetan, aukera bakoitzak ID bat eta bistaratze-balio bat ditu. Ezarpen honek zehazten du zein matrize-zutabek edo panel-galderak eman behar dituen IDak.",
    // "In single- and multiple-selection question types, each choice option has an ID and display value. This setting specifies which matrix column or panel question should provide the display texts."
    choiceTextsFromQuestion: "Hautapen bakarreko eta anitzeko galdera-motetan, aukera bakoitzak ID bat eta bistaratze-balio bat ditu. Ezarpen honek zehazten du zein matrize-zutabek edo panel-galderak eman behar dituen bistaratze-testuak.",
    // "Select to let respondents add their own choices if the desired option isn't available in the dropdown. Custom choices will only be stored temporarily for the duration of the current browser session."
    allowCustomChoices: "Hautatu erantzuleei beren aukerak gehitzea ahalbidetzeko, nahi duten aukera goitibeherako zerrendan ez badago. Aukera pertsonalizatuak uneko nabigatze-saioaren iraupenerako soilik gordeko dira aldi baterako.",
    // "When selected, users can include additional input in a separate comment box."
    showOtherItem: "Hautatzean, erabiltzaileek sarrera gehigarria sartu dezakete iruzkin-koadro bereizi batean.",
    // "Displays each special choice option (\"None\", \"Other\", \"Select All\") on a new line, even when using a multiple-column layout."
    separateSpecialChoices: "Aukera berezi bakoitza (\"Bat ere ez\", \"Beste\", \"Hautatu dena\") lerro berri batean bistaratzen du, zutabe anitzeko diseinua erabiltzean ere.",
    // "Specify the location within the service dataset where the target array of objects is located. Leave empty if the URL already points to the array."
    path: "Zehaztu zerbitzuaren datu-multzoan helmugako objektu-matrizea non dagoen. Utzi hutsik URLa dagoeneko matrize horretara zuzentzen bada.",
    choicesbyurl: {
      // "Enter a uniform property name within the array of objects whose value will be stored as a response in survey results."
      valueName: "Sartu objektu-matrizearen barneko propietate-izen uniforme bat, haren balioa erantzun gisa gordeko dena inkestaren emaitzetan."
    },
    // "Enter a uniform property name within the array of objects that contains the values you want to display in the choice list."
    titleName: "Sartu objektu-matrizearen barneko propietate-izen uniforme bat, aukera-zerrendan erakutsi nahi dituzun balioak dituena.",
    // "Select to allow the service to return an empty response or array."
    allowEmptyResponse: "Hautatu zerbitzuak erantzun edo matrize hutsa itzultzea onartzeko.",
    // "Use the magic wand icon to set a conditional rule that determines the visibility of all choice options."
    choicesVisibleIf: "Erabili makila magikoaren ikonoa aukera guztien ikusgaitasuna zehazten duen baldintza-arau bat ezartzeko.",
    // "The left value serves as an item ID used in conditional rules, the right value is displayed to respondents."
    rateValues: "Ezkerreko balioa baldintza-arauetan erabiltzen den elementu-ID gisa erabiltzen da; eskuineko balioa erantzuleei bistaratzen zaie.",
    rating: {
      // "\"Auto\" selects between the \"Buttons\" and \"Dropdown\" modes based on the available width. When the width is insufficient to display buttons, the question displays a dropdown."
      displayMode: "\"Automatikoa\" aukerak \"Botoiak\" eta \"Goitibeherako zerrenda\" moduen artean hautatzen du, erabilgarri dagoen zabaleraren arabera. Zabalera nahikoa ez denean botoiak bistaratzeko, galderak goitibeherako zerrenda bat bistaratzen du."
    },
    // "Allows you to connect questions that produce results in different formats. When such questions are linked together using a join identifier, this shared property stores selected question values."
    valuePropertyName: "Formatu desberdinetan emaitzak sortzen dituzten galderak lotzeko aukera ematen du. Galdera horiek elkartze-identifikatzaile baten bidez lotzen direnean, propietate partekatu honek hautatutako galderen balioak gordetzen ditu.",
    // "Select if you want to update the drop-down menu contents to match the search query that a user is typing in the input field."
    searchEnabled: "Hautatu goitibeherako menuaren edukia erabiltzaileak sarrera-eremuan idazten ari den bilaketa-kontsultarekin bat etor dadin eguneratzea nahi baduzu.",
    // "A value to save in survey results when respondents give a positive answer."
    valueTrue: "Erantzuleek erantzun positiboa ematen dutenean inkestaren emaitzetan gordetzeko balioa.",
    // "A value to save in survey results when respondents give a negative answer."
    valueFalse: "Erantzuleek erantzun negatiboa ematen dutenean inkestaren emaitzetan gordetzeko balioa.",
    // "It's not recommended that you disable this option as it overrides the Preview image and makes it hard for a user to understand whether the files have been uploaded."
    showPreview: "Ez da gomendatzen aukera hau desgaitatzea, aurrebista-irudia gainidazten baitu eta erabiltzaileak zail du ulertzea fitxategiak igo diren ala ez.",
    // "Enable to rank only selected choices. Users will drag selected items from the choice list to order them within the ranking area."
    selectToRankEnabled: "Gaitu hautatutako aukerak soilik ordenatzeko. Erabiltzaileek hautatutako elementuak aukera-zerrendatik arrastatuko dituzte, ordena-arearen barruan ordenatzeko.",
    // "Enter a list of choices that will be suggested to the respondent during input."
    dataList: "Sartu erantzuleari sarreran zehar iradokiko zaizkion aukeren zerrenda bat.",
    // "The setting only resizes the input fields and doesn't affect the width of the question box."
    inputSize: "Ezarpenak sarrera-eremuak soilik tamainaz aldatzen ditu eta ez du galdera-koadroaren zabaleran eragiten.",
    // "Sets consistent width for all item labels. Accepts CSS values (px, %, in, pt, etc.)."
    itemTitleWidth: "Zabalera koherentea ezartzen die elementu-etiketa guztiei. CSS balioak onartzen ditu (px, %, in, pt, etab.).",
    // "Select how to align input value within the field. The default setting \"Auto\" aligns the input value to the right if currency or numeric masking is applied and to the left if not."
    inputTextAlignment: "Hautatu nola lerrokatu sarrera-balioa eremuaren barruan. \"Automatikoa\" ezarpen lehenetsiak sarrera-balioa eskuinera lerrokatzen du moneta edo zenbakizko maskara aplikatzen bada, eta ezkerrera bestela.",
    // "Serves as a substitute when the image cannot be displayed on a user's device and for accessibility purposes."
    altText: "Irudia erabiltzailearen gailuan ezin denean bistaratu ordezko gisa eta irisgarritasunerako erabiltzen da.",
    // "Defines the color of the selected emoji when the Rating icon type is set to \"Smileys\". Choose between: \"Default\" - the selected emoji appears in default survey color; \"Scale\" - the selected emoji inherits color from the rating scale."
    rateColorMode: "Hautatutako emojiaren kolorea zehazten du Balorazio-ikono mota \"Smileyak\" ezarrita dagoenean. Aukeratu: \"Lehenetsia\" - hautatutako emojia inkestaren kolore lehenetsian agertzen da; \"Eskala\" - hautatutako emojiak balorazio-eskalaren kolorea heredatzen du.",
    expression: {
      // "An expression ID that is not visible to respondents."
      name: "Erantzulearentzat ikusgai ez dagoen adierazpen-ID bat.",
      // "Type an expression subtitle."
      description: "Idatzi adierazpenaren azpititulu bat.",
      // "An expression can include basic calculations (`{q1_id} + {q2_id}`), conditions (`{age} > 60`), and functions ('iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, etc.)."
      expression: "Adierazpenak oinarrizko kalkuluak (`{q1_id} + {q2_id}`), baldintzak (`{age} > 60`) eta funtzioak ('iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, etab.) izan ditzake."
    },
    // "Select to store the \"Other\" option value as a separate property in survey results."
    storeOthersAsComment: "Hautatu \"Beste\" aukeraren balioa propietate bereizi gisa gordetzeko inkestaren emaitzetan.",
    // "Use {0} as a placeholder for the actual value."
    format: "Erabili {0} benetako balioaren leku-marka gisa.",
    // "Select \"Custom\" to add your own file extensions on top of the predefined categories."
    acceptedCategories: "Hautatu \"Pertsonalizatua\" zeure fitxategi-luzapenak gehitzeko aurrez definitutako kategoriei.",
    // "Enter file extensions separated by commas (e.g., .csv, .xml)."
    acceptedTypes: "Sartu fitxategi-luzapenak komaz bereizita (adibidez, .csv, .xml).",
    // "Arranges choice options in a multi-column layout. When set to 0, the options are displayed in a single line. Applies only to columns with \"Cell input type\" set to Radio Button Group or Checkboxes."
    columnColCount: "Aukera-aukerak zutabe anitzeko diseinu batean antolatzen ditu. 0 ezartzean, aukerak lerro bakarrean bistaratzen dira. \"Gelaxkaren sarrera-mota\" Aukera-botoien taldea edo Kontrol-laukitxoak ezarrita duten zutabeei soilik aplikatzen zaie.",
    // "Select the data type that the user's browser can retrieve. This data is sourced either from past values entered by the user or from pre-configured values if any have been saved by the user for autocompletion."
    autocomplete: "Hautatu erabiltzailearen nabigatzaileak berreskura dezakeen datu-mota. Datu hauek erabiltzaileak lehenago sartutako balioetatik edo erabiltzaileak automatiko osatzeko gordetako balio aurrekonfiguratuetatik datoz.",
    // "Applies when \"File source type\" is \"Local file\" or when camera is unavailable"
    filePlaceholder: "\"Fitxategi-iturri mota\" \"Fitxategi lokala\" denean edo kamera erabilgarri ez dagoenean aplikatzen da",
    // "Applies when \"File source type\" is \"Camera\"."
    photoPlaceholder: "\"Fitxategi-iturri mota\" \"Kamera\" denean aplikatzen da.",
    // "Applies when \"File source type\" is \"Local file or camera\"."
    fileOrPhotoPlaceholder: "\"Fitxategi-iturri mota\" \"Fitxategi lokala edo kamera\" denean aplikatzen da.",
    // "Arranges choice options in a multi-column layout. When set to 0, the options are displayed in a single line."
    colCount: "Aukera-aukerak zutabe anitzeko diseinu batean antolatzen ditu. 0 ezartzean, aukerak lerro bakarrean bistaratzen dira.",
    multipletext: {
      // "Arranges text boxes in a multi-column layout."
      colCount: "Testu-koadroak zutabe anitzeko diseinu batean antolatzen ditu."
    },
    masksettings: {
      // "Select if you want to store the question value with an applied mask in survey results."
      saveMaskedValue: "Hautatu galderaren balioa maskara aplikatuta gorde nahi baduzu inkestaren emaitzetan."
    },
    regionalformat: {
      // "A region whose formats apply to date-time, numeric, and currency input masks. If not specified, the survey language is used."
      locale: "Data-ordu, zenbakizko eta moneta-sarreraren maskarei formatuak aplikatzen zaizkien eskualde bat. Zehazten ez bada, inkestaren hizkuntza erabiltzen da.",
      // "Overrides the region's date format used in input masks. The pattern can contain separator characters and the following placeholders:<br>`m` - Month number.<br>`mm` - Month number, with a leading zero for single-digit values.<br>`d` - Day of the month.<br>`dd` - Day of the month, with a leading zero for single-digit values.<br>`yy` - The last two digits of the year.<br>`yyyy` - Four-digit year."
      datePattern: "Sarrera-maskaretan erabilitako eskualdearen data-formatua gainidazten du. Ereduak bereizle-karaktereak eta leku-marka hauek izan ditzake:<br>`m` - Hilabete-zenbakia.<br>`mm` - Hilabete-zenbakia, zero bat hasieran zifra bakarreko balioetarako.<br>`d` - Hilabeteko eguna.<br>`dd` - Hilabeteko eguna, zero bat hasieran zifra bakarreko balioetarako.<br>`yy` - Urteko azken bi zifrak.<br>`yyyy` - Lau zifrako urtea.",
      // "Overrides the region's time format used in input masks. The pattern can contain separator characters and the following placeholders:<br>`H` - Hours in 24-hour format.<br>`HH` - Hours in 24-hour format, with a leading zero for single-digit values.<br>`h` - Hours in 12-hour format.<br>`hh` - Hours in 12-hour format, with a leading zero for single-digit values.<br>`MM` - Minutes.<br>`ss` - Seconds.<br>`TT` - 12-hour clock period in uppercase (AM/PM).<br>`tt` - 12-hour clock period in lowercase (am/pm)."
      timePattern: "Sarrera-maskaretan erabilitako eskualdearen ordu-formatua gainidazten du. Ereduak bereizle-karaktereak eta leku-marka hauek izan ditzake:<br>`H` - Orduak 24 orduko formatuan.<br>`HH` - Orduak 24 orduko formatuan, zero bat hasieran zifra bakarreko balioetarako.<br>`h` - Orduak 12 orduko formatuan.<br>`hh` - Orduak 12 orduko formatuan, zero bat hasieran zifra bakarreko balioetarako.<br>`MM` - Minutuak.<br>`ss` - Segunduak.<br>`TT` - 12 orduko erloju-periodoa maiuskulaz (AM/PM).<br>`tt` - 12 orduko erloju-periodoa minuskulaz (am/pm).",
      // "Overrides the symbol the region uses to separate the fractional part from the integer part of a displayed number in input masks."
      decimalSeparator: "Sarrera-maskaretan eskualdeak zenbaki baten zati hamartarra zenbaki osoaren zatitik bereizteko erabiltzen duen sinboloa gainidazten du.",
      // "Overrides the symbol the region uses to separate the digits of a large number into groups of three in input masks."
      thousandsSeparator: "Sarrera-maskaretan eskualdeak zenbaki handi baten zifrak hiruko taldetan bereizteko erabiltzen duen sinboloa gainidazten du.",
      // "Overrides the region's currency symbol or code used in input masks."
      currencySymbol: "Sarrera-maskaretan erabilitako eskualdearen moneta-ikurra edo kodea gainidazten du.",
      // "Overrides the region's currency pattern used in input masks. The pattern can contain the following placeholders:<br>`@` - Currency symbol or code.<br>`#` - Number.<br>`-` - Position of the minus sign in negative values (if omitted, the minus sign is placed at the beginning)."
      currencyPattern: "Sarrera-maskaretan erabilitako eskualdearen moneta-eredua gainidazten du. Ereduak leku-marka hauek izan ditzake:<br>`@` - Moneta-ikurra edo kodea.<br>`#` - Zenbakia.<br>`-` - Zeinu negatiboaren posizioa balio negatiboetan (ez bada, zeinu negatiboa hasieran jartzen da)."
    },
    patternmask: {
      // "The pattern can contain string literals and the following placeholders:<br>`9` - A digit.<br>`a` - An upper- or lowercase letter.<br>`#` - A digit or an upper- or lowercase letter.<br>Use backslash `\\` to escape a character."
      pattern: "Ereduak testu-literalak eta leku-marka hauek izan ditzake:<br>`9` - Zifra bat.<br>`a` - Letra maiuskula edo minuskula.<br>`#` - Zifra bat edo letra maiuskula zein minuskula.<br>Erabili alderantzizko barra `\\` karaktere bat ihes egiteko."
    },
    datetimemask: {
      // "Overrides the region's date and time formats. The pattern can contain separator characters and the following placeholders:<br>`m` - Month number.<br>`mm` - Month number, with leading zero for single-digit values.<br>`d` - Day of the month.<br>`dd` - Day of the month, with leading zero for single-digit values.<br>`yy` - The last two digits of the year.<br>`yyyy` - Four-digit year.<br>`H` - Hours in 24-hour format.<br>`HH` - Hours in 24-hour format, with leading zero for single-digit values.<br>`h` - Hours in 12-hour format.<br>`hh` - Hours in 12-hour format, with leading zero for single-digit values.<br>`MM` - Minutes.<br>`ss` - Seconds.<br>`TT` - 12-hour clock period in uppercase (AM/PM).<br>`tt` - 12-hour clock period in lowercase (am/pm)."
      pattern: "Eskualdearen data eta ordu formatuak gainidazten ditu. Ereduak bereizle-karaktereak eta leku-marka hauek izan ditzake:<br>`m` - Hilabete-zenbakia.<br>`mm` - Hilabete-zenbakia, zero bat hasieran zifra bakarreko balioetarako.<br>`d` - Hilabeteko eguna.<br>`dd` - Hilabeteko eguna, zero bat hasieran zifra bakarreko balioetarako.<br>`yy` - Urteko azken bi zifrak.<br>`yyyy` - Lau zifrako urtea.<br>`H` - Orduak 24 orduko formatuan.<br>`HH` - Orduak 24 orduko formatuan, zero bat hasieran zifra bakarreko balioetarako.<br>`h` - Orduak 12 orduko formatuan.<br>`hh` - Orduak 12 orduko formatuan, zero bat hasieran zifra bakarreko balioetarako.<br>`MM` - Minutuak.<br>`ss` - Segunduak.<br>`TT` - 12 orduko erloju-periodoa maiuskulaz (AM/PM).<br>`tt` - 12 orduko erloju-periodoa minuskulaz (am/pm)."
    },
    numericmask: {
      // "A symbol that separates the fractional part from the integer part of a displayed number. The region's symbol is used by default."
      decimalSeparator: "Zenbaki baten zati hamartarra zenbaki osoaren zatitik bereizten duen sinboloa. Eskualdearen sinboloa erabiltzen da lehenespenez.",
      // "A symbol that separates the digits of a large number into groups of three. The region's symbol is used by default."
      thousandsSeparator: "Zenbaki handi baten zifrak hiruko taldetan bereizten dituen sinboloa. Eskualdearen sinboloa erabiltzen da lehenespenez.",
      // "Limits how many digits to retain after the decimal point for a displayed number."
      precision: "Bistaratutako zenbaki baten hamartar puntuaren ondoren zenbat zifra mantendu mugatzen du.",
      // "Displays trailing zeros in the fractional part up to the specified precision. For example, with a precision of 2, an input value of 1.2 is displayed as 1.20."
      showTrailingZeros: "Zati hamartarreko amaierako zeroak bistaratzen ditu zehaztutako doitasunera arte. Adibidez, 2ko doitasunarekin, 1.2 sarrera-balioa 1.20 gisa bistaratzen da."
    },
    currencymask: {
      // "A currency symbol or code displayed with the value. The region's symbol is used by default. Clear this property to display no symbol."
      currencySymbol: "Balioarekin batera bistaratzen den moneta-ikurra edo kodea. Eskualdearen sinboloa erabiltzen da lehenespenez. Garbitu propietate hau ikurrik ez bistaratzeko.",
      // "Specifies the positions of the number, currency symbol, and minus sign. The pattern can contain the following placeholders:<br>`@` - Currency symbol or code.<br>`#` - Number.<br>`-` - Position of the minus sign in negative values (if omitted, the minus sign is placed at the beginning)."
      currencyPattern: "Zenbakiaren, moneta-ikurraren eta zeinu negatiboaren posizioak zehazten ditu. Ereduak leku-marka hauek izan ditzake:<br>`@` - Moneta-ikurra edo kodea.<br>`#` - Zenbakia.<br>`-` - Zeinu negatiboaren posizioa balio negatiboetan (ez bada, zeinu negatiboa hasieran jartzen da)."
    },
    theme: {
      // "This setting applies only to questions outside of a panel."
      isPanelless: "Ezarpen hau panel batetik kanpoko galderetan soilik aplikatzen da.",
      // "Sets a supplementary color that highlights key survey elements."
      primaryColor: "Inkestaren funtsezko elementuak nabarmentzen dituen kolore osagarri bat ezartzen du.",
      // "Adjusts the transparency of panels and question boxes relative to the survey background."
      panelBackgroundTransparency: "Panelen eta galdera-koadroen gardentasuna doitzen du, inkestaren atzeko planoarekiko.",
      // "Adjusts the transparency of input elements relative to the survey background."
      questionBackgroundTransparency: "Sarrera-elementuen gardentasuna doitzen du, inkestaren atzeko planoarekiko.",
      // "Sets the corner radius for all rectangular elements. Enable the Advanced Mode if you want to set individual corner radius values for input elements or panels and question boxes."
      cornerRadius: "Elementu angeluzuzen guztien ertz-erradioa ezartzen du. Gaitu Modu aurreratua sarrera-elementu edo panel eta galdera-koadroetarako ertz-erradio balio indibidualak ezarri nahi badituzu.",
      // "Sets the main background color of the survey."
      "--sjs2-color-utility-surface-survey": "Inkestaren atzeko planoaren kolore nagusia ezartzen du."
    },
    header: {
      // "The \"Same as container\" option auto-adjusts the header content area width to fit into the HTML element the survey is placed in."
      inheritWidthFrom: "\"Edukiontziaren berdina\" aukerak goiburuaren eduki-arearen zabalera automatikoki doitzen du, inkesta kokatuta dagoen HTML elementuan sartzeko.",
      // "The width of the header area that contains the survey title and description, measured in pixels."
      textAreaWidth: "Inkestaren izenburua eta deskribapena dituen goiburu-arearen zabalera, pixeletan neurtuta.",
      // "When enabled, the top of the survey overlays the bottom of the header."
      overlapEnabled: "Gaituta dagoenean, inkestaren goialdeak goiburuaren behealdea gainjartzen du.",
      // "When set to 0, the height is calculated automatically to accommodate the header's content."
      mobileHeight: "0 ezartzean, altuera automatikoki kalkulatzen da goiburuaren edukia sartzeko."
    },
    // "The \"Same as container\" option auto-adjusts the progress bar area width to fit into the HTML element the survey is placed in."
    progressBarInheritWidthFrom: "\"Edukiontziaren berdina\" aukerak aurrerapen-barraren arearen zabalera automatikoki doitzen du, inkesta kokatuta dagoen HTML elementuan sartzeko.",
    // "Used when the 'Survey layout' is set to 'Single input field per page'. In this layout, the matrix is split so that each input field appears on a separate page. Use the {rowIndex} placeholder to insert auto numbering, {rowTitle} or {rowName} to reference the row's title or ID, and {row.columnid} to include the value of a specific matrix column."
    singleInputTitleTemplate: "Inkestaren diseinua 'Sarrera-eremu bakarra orrialde bakoitzeko' ezarrita dagoenean erabiltzen da. Diseinu horretan, matrizea zatitzen da, sarrera-eremu bakoitza orrialde bereizi batean ager dadin. Erabili {rowIndex} leku-marka zenbakitze automatikoa txertatzeko, {rowTitle} edo {rowName} errenkadaren izenburuari edo IDari erreferentzia egiteko, eta {row.columnid} matrize-zutabe jakin baten balioa sartzeko."
  },
  // Properties
  p: {
    title: {
      // [Auto-translated] "title"
      name: "Izenburua",
      // "Leave it empty, if it is the same as 'Name'"
      title: "Utzi hutsik, 'Izena' berbera bada"
    },
    // "Allow multiple selection"
    multiSelect: "Baimendu hautapen anitza",
    // "Show image and video captions"
    showLabel: "Erakutsi irudi eta bideoen epigrafeak",
    // "Swap the order of Yes and No"
    swapOrder: "Trukatu Bai eta Ez ordena",
    // "Value"
    value: "Balioa",
    // "Tab alignment"
    tabAlign: "Fitxen lerrokatzea",
    // "File source type"
    sourceType: "Fitxategi-iturri mota",
    // "Default camera"
    cameraFacingMode: "Kamera lehenetsia",
    // "Fit to container"
    fitToContainer: "Egokitu edukiontzira",
    // "Set value expression"
    setValueExpression: "Balio-ezarpen adierazpena",
    // "Description"
    description: "Deskribapena", // Auto-generated string
    // "Logo fit"
    logoFit: "Logotipoaren egokitzapena",
    // "Pages"
    pages: "Orrialdeak", // Auto-generated string
    // "Questions"
    questions: "Galderak", // Auto-generated string
    // "Triggers"
    triggers: "Abiarazleak",
    // "Custom variables"
    calculatedValues: "Aldagai pertsonalizatuak",
    // "Survey id"
    surveyId: "Inkestaren id-a", // Auto-generated string
    // "Survey post id"
    surveyPostId: "Inkesta-bidalketaren id-a", // Auto-generated string
    // "Survey show data saving"
    surveyShowDataSaving: "Inkestak datuen gordetzea erakusten du", // Auto-generated string
    // "Question description alignment"
    questionDescriptionLocation: "Galderaren deskribapenaren lerrokatzea",
    // "Progress bar type"
    progressBarType: "Aurrerapen-barra mota", // Auto-generated string
    // "Show table of contents (TOC)"
    showTOC: "Erakutsi edukien aurkibidea (TOC)",
    // "TOC alignment"
    tocLocation: "Edukien aurkibidearen lerrokatzea",
    // "Question title pattern"
    questionTitlePattern: "Galderaren izenburu-eredua", // Auto-generated string
    // "Survey width mode"
    widthMode: "Inkestaren zabalera-modua",
    // "Show brand info"
    showBrandInfo: "Erakutsi markaren informazioa", // Auto-generated string
    // "Use display values in dynamic texts"
    useDisplayValuesInDynamicTexts: "Erabili bistaratze-balioak testu dinamikoetan",
    // "Visible if"
    visibleIf: "Ikusgai baldin", // Auto-generated string
    // "Default value expression"
    defaultValueExpression: "Balio lehenetsiaren adierazpena",
    // "Required if"
    requiredIf: "Derrigorrezko baldin", // Auto-generated string
    // "Reset value if"
    resetValueIf: "Berrezarri balioa baldin",
    // "Set value if"
    setValueIf: "Ezarri balioa baldin",
    // "Validation rules"
    validators: "Balidazio-arauak",
    // "Bindings"
    bindings: "Loturak", // Auto-generated string
    // "Render as"
    renderAs: "Errendatu honela", // Auto-generated string
    // "Attach original items"
    attachData: "Erantsi jatorrizko elementuak", // Auto-generated string
    // "Choices"
    choices: "Aukerak",
    // "Choices by url"
    choicesByUrl: "Aukerak URLaren arabera", // Auto-generated string
    // "Currency"
    currency: "Moneta", // Auto-generated string
    // "Cell hint"
    cellHint: "Gelaxka-iradokizuna", // Auto-generated string
    // "Total maximum fraction digits"
    totalMaximumFractionDigits: "Guztizkoaren gehieneko zifra hamartarrak", // Auto-generated string
    // "Total minimum fraction digits"
    totalMinimumFractionDigits: "Guztizkoaren gutxieneko zifra hamartarrak", // Auto-generated string
    // "Columns"
    columns: "Zutabeak", // Auto-generated string
    // "Detail elements"
    detailElements: "Xehetasun-elementuak", // Auto-generated string
    // "Allow adaptive actions"
    allowAdaptiveActions: "Baimendu ekintza moldagarriak", // Auto-generated string
    // "Default row value"
    defaultRowValue: "Errenkadaren balio lehenetsia", // Auto-generated string
    // "Auto-expand new row details"
    detailPanelShowOnAdding: "Zabaldu automatikoki errenkada berrien xehetasunak",
    // "Choices lazy load enabled"
    choicesLazyLoadEnabled: "Aukeren karga alferra gaituta", // Auto-generated string
    // "Choices lazy load page size"
    choicesLazyLoadPageSize: "Aukeren karga alferraren orrialde-tamaina", // Auto-generated string
    // "Input field component"
    inputFieldComponent: "Sarrera-eremuaren osagaia", // Auto-generated string
    // "Item component"
    itemComponent: "Elementuaren osagaia", // Auto-generated string
    // [Auto-translated] "Min"
    min: "Min", // Auto-generated string
    // [Auto-translated] "Max"
    max: "Max", // Auto-generated string
    // "Min value expression"
    minValueExpression: "Gutxieneko balioaren adierazpena", // Auto-generated string
    // "Max value expression"
    maxValueExpression: "Gehieneko balioaren adierazpena", // Auto-generated string
    // "Step"
    step: "Urratsa", // Auto-generated string
    // "Items for auto-suggest"
    dataList: "Automatikoki iradokitzeko elementuak",
    // "Input field width (in characters)"
    inputSize: "Sarrera-eremuaren zabalera (karakteretan)",
    // "Item label width"
    itemTitleWidth: "Elementu-etiketaren zabalera",
    // "Input value alignment"
    inputTextAlignment: "Sarrera-balioaren lerrokatzea",
    // "Elements"
    elements: "Elementuak", // Auto-generated string
    // "Content"
    content: "Edukia", // Auto-generated string
    // "Navigation title"
    navigationTitle: "Nabigazio-izenburua", // Auto-generated string
    // "Navigation description"
    navigationDescription: "Nabigazio-deskribapena", // Auto-generated string
    // "Long tap"
    longTap: "Ukitu luzea", // Auto-generated string
    // "Expand input field dynamically"
    autoGrow: "Zabaldu sarrera-eremua dinamikoki",
    // "Enable resize handle"
    allowResize: "Gaitu tamaina aldatzeko heldulekua",
    // "Accept carriage return"
    acceptCarriageReturn: "Onartu itzulera-karakterea", // Auto-generated string
    // "Display mode"
    displayMode: "Bistaratze-modua",
    // "Rate type"
    rateType: "Balorazio-mota", // Auto-generated string
    // "Label"
    label: "Etiketa", // Auto-generated string
    // "Content mode"
    contentMode: "Eduki-modua",
    // "Image and thumbnail fit"
    imageFit: "Irudiaren eta miniaturren egokitzapena",
    // "Alt text"
    altText: "Ordezko testua",
    // "Height"
    height: "Altuera", // Auto-generated string
    // "Height on smartphones"
    mobileHeight: "Altuera smartphoneetan",
    // "Pen color"
    penColor: "Lumaren kolorea", // Auto-generated string
    // "Background color"
    backgroundColor: "Atzeko planoaren kolorea",
    // "Template elements"
    templateElements: "Txantiloi-elementuak", // Auto-generated string
    // "Operator"
    operator: "Eragilea", // Auto-generated string
    // "Is variable"
    isVariable: "Aldagaia da", // Auto-generated string
    // "Run expression"
    runExpression: "Exekutatu adierazpena", // Auto-generated string
    // "Show caption"
    showCaption: "Erakutsi epigrafea", // Auto-generated string
    // "Icon name"
    iconName: "Ikonoaren izena", // Auto-generated string
    // "Icon size"
    iconSize: "Ikonoaren tamaina", // Auto-generated string
    // "Precision"
    precision: "Doitasuna", // Auto-generated string
    // "Matrix drag handle area"
    matrixDragHandleArea: "Matrizearen arraste-heldulekuaren area", // Auto-generated string
    // "Background image"
    backgroundImage: "Atzeko planoaren irudia",
    // "Background image fit"
    backgroundImageFit: "Atzeko planoaren irudiaren egokitzapena", // Auto-generated string
    // "Background image attachment"
    backgroundImageAttachment: "Atzeko planoaren irudiaren finkatzea", // Auto-generated string
    // "Background opacity"
    backgroundOpacity: "Atzeko planoaren opakutasuna", // Auto-generated string
    // "Allow selective ranking"
    selectToRankEnabled: "Baimendu hautapen bidezko ordenatzea",
    // "Ranking area alignment"
    selectToRankAreasLayout: "Ordena-arearen lerrokatzea",
    // "Text to show if all options are selected"
    selectToRankEmptyRankedAreaText: "Aukera guztiak hautatuta daudenean erakusteko testua",
    // "Placeholder text for the ranking area"
    selectToRankEmptyUnrankedAreaText: "Ordena-arearen leku-markaren testua",
    // "Allow camera access"
    allowCameraAccess: "Baimendu kamerarako sarbidea", // Auto-generated string
    // "Rating icon color mode"
    scaleColorMode: "Balorazio-ikonoaren kolore-modua",
    // "Smileys color scheme"
    rateColorMode: "Smileyen kolore-eskema",
    // "Copy display value"
    copyDisplayValue: "Kopiatu bistaratze-balioa", // Auto-generated string
    // "Column span"
    effectiveColSpan: "Zutabe-zabalera",
    // "Progress bar area width"
    progressBarInheritWidthFrom: "Aurrerapen-barraren arearen zabalera",
    // "Theme name"
    themeName: "Gaiaren izena"
  },
  theme: {
    // "Advanced mode"
    advancedMode: "Modu aurreratua",
    // "Page"
    pageTitle: "Orrialdea",
    // "Question box"
    questionTitle: "Galdera-koadroa",
    // "Input element"
    editorPanel: "Sarrera-elementua",
    // "Lines"
    lines: "Lerroak",
    // "Default"
    primaryDefaultColor: "Lehenetsia",
    // "Hover"
    primaryDarkColor: "Gainetik pasatzean",
    // "Selected"
    primaryLightColor: "Hautatuta",
    // "Corner radius"
    cornerRadius: "Ertzaren erradioa",
    // "Default background"
    backcolor: "Atzeko plano lehenetsia",
    // "Hover background"
    hovercolor: "Gainetik pasatzeko atzeko planoa",
    // "Font color"
    fontColor: "Letra-kolorea",
    // "Background color"
    backgroundColor: "Atzeko planoaren kolorea",
    // "Default color"
    primaryForecolor: "Kolore lehenetsia",
    // "Disabled color"
    primaryForecolorLight: "Kolore desgaituta",
    // "Darker"
    borderDefault: "Ilunagoa",
    // "Lighter"
    borderLight: "Argicagoa",
    // "Font family"
    fontFamily: "Letra-tipoaren familia",
    // "Regular"
    fontWeightRegular: "Normala",
    // "Heavy"
    fontWeightHeavy: "Astuna",
    // "Semi-bold"
    fontWeightSemiBold: "Erdi-lodia",
    // "Bold"
    fontWeightBold: "Lodia",
    // "Color"
    color: "Kolorea",
    // "Placeholder color"
    placeholderColor: "Leku-markaren kolorea",
    // "Size"
    size: "Tamaina",
    // "Line height"
    lineHeight: "Lerro-altuera",
    // "Opacity"
    opacity: "Opakutasuna",
    // [Auto-translated] "X"
    boxShadowX: "X",
    // [Auto-translated] "Y"
    boxShadowY: "Y",
    // "Add Shadow Effect"
    boxShadowAddRule: "Gehitu itzal-efektua",
    // "Blur"
    boxShadowBlur: "Lausotzea",
    // "Spread"
    boxShadowSpread: "Hedapena",
    // "Drop"
    boxShadowDrop: "Kanpokoa",
    // "Inner"
    boxShadowInner: "Barnekoa",
    names: {
      // "Default"
      default: "Lehenetsia",
      // "Contrast"
      contrast: "Kontrastea",
      // "Borderless"
      borderless: "Ertzik gabe",
      // "Flat"
      flat: "Laua",
      // "Plain"
      plain: "Sinplea",
      // "Soft"
      soft: "Biguna",
      // [Auto-translated] "3D"
      threedimensional: "3D",
      // "Monochrome"
      monochrome: "Monokromoa"
    },
    colors: {
      // "Teal"
      teal: "Urdin-berdea",
      // "Blue"
      blue: "Urdina",
      // "Purple"
      purple: "Morea",
      // "Orchid"
      orchid: "Orkidea",
      // "Tulip"
      tulip: "Tulipa",
      // "Brown"
      brown: "Marroia",
      // "Green"
      green: "Berdea",
      // "Gray"
      gray: "Grisa"
    }
  },
  creatortheme: {
    // "Primary"
    "--sjs-primary-background-500": "Primarioa",
    // "Secondary"
    "--sjs-secondary-background-500": "Sekundarioa",
    // "UI elements"
    userInterfaceBaseUnit: "Interfazeko elementuak",
    // "Font"
    fontScale: "Letra-tipoa",
    names: {

    }
  },
  preset: {
    names: {
      // "Basic"
      basic: "Oinarrizkoa",
      // "Advanced"
      advanced: "Aurreratua",
      // "Expert"
      expert: "Aditua"
    },
    // "Preset applied"
    presetApplied: "Aurrezarpena aplikatuta"
  },
  // Results of survey-core/linter, shown in the JSON tab. A message key is composed as
  linter: {
    // "Line: {0}. "
    lineNumber: "Lerroa: {0}. ", // {0} 1-based line number, prefixes an entry of the error list
    fixes: {
      "choices/dead-source": {
        // "Use the suggested name"
        setName: "Erabili iradokitako izena"
      },
      "choices/duplicate": {
        // "Remove the repeated item"
        removeItem: "Kendu errepikatutako elementua"
      },
      "element/unknown-type": {
        // "Use the suggested type"
        setType: "Erabili iradokitako mota"
      },
      "expression/unknown-function": {
        // "Use the suggested function"
        renameFunction: "Erabili iradokitako funtzioa"
      },
      "mask/mismatch": {
        // "Use the suggested mask"
        setMaskType: "Erabili iradokitako maskara"
      },
      "name/duplicate": {
        // "Give the element a free name"
        renameElement: "Eman elementuari izen libre bat"
      },
      "name/reserved": {
        // "Give the element a free name"
        renameElement: "Eman elementuari izen libre bat"
      },
      "property/dead": {
        // "Remove the property"
        removeKey: "Kendu propietatea"
      },
      "property/invalid-value": {
        // "Use the nearest allowed value"
        clampToRange: "Erabili baimendutako balio hurbilena",
        // "Remove the property"
        removeKey: "Kendu propietatea",
        // "Use the suggested value"
        useAllowedValue: "Erabili iradokitako balioa"
      },
      "property/not-an-array": {
        // "Turn the value into a list"
        wrapInArray: "Bihurtu balioa zerrenda"
      },
      "property/required": {
        // "Give the element a name"
        setName: "Eman elementuari izen bat"
      },
      "property/unknown": {
        // "Remove the property"
        removeKey: "Kendu propietatea",
        // "Rename the property"
        renameKey: "Aldatu propietatearen izena"
      },
      "reference/unknown": {
        // "Use the suggested name"
        renameReference: "Erabili iradokitako izena",
        // "Use the suggested name"
        setKeyName: "Erabili iradokitako izena"
      },
      "trigger/unknown-target": {
        // "Use the suggested name"
        setName: "Erabili iradokitako izena"
      },
      "trigger/unknown-type": {
        // "Use the suggested type"
        setType: "Erabili iradokitako mota"
      },
      "validator/unknown-type": {
        // "Use the suggested type"
        setType: "Erabili iradokitako mota"
      }
    },
    messages: {
      "expression/syntax": {
        // "The expression \"{expression}\" cannot be parsed."
        unparsable: "\"{expression}\" adierazpena ezin da analizatu."
      },
      "reference/unknown": {
        // "\"{name}\" is not found - no question, panel, page, calculated value, or variable with that name exists."
        notFound: "\"{name}\" ez da aurkitu - ez dago izen hori duen galderarik, panelik, orrialderik, balio kalkulaturik edo aldagairik.",
        // "\"{segment}\" is not found in {containerType} \"{root}\" (reference: {name})."
        inContainer: "\"{segment}\" ez da aurkitu {containerType} \"{root}\" barruan (erreferentzia: {name}).",
        // "\"{segment}\" is not found in the \"{scopePrefix}\" scope (reference: {name})."
        scopedUnknown: "\"{segment}\" ez da aurkitu \"{scopePrefix}\" esparruan (erreferentzia: {name}).",
        // "The keyName of \"{name}\" names \"{key}\" - \"{name}\" has no {keyNoun} with that name, so duplicate-key validation never runs."
        keyNameNotFound: "\"{name}\"(r)en keyName propietateak \"{key}\" izendatzen du - izen hori duen {keyNoun} ez dago \"{name}\"(e)n, beraz gako bikoiztuen balidazioa ez da inoiz exekutatzen.",
        // "\"{name}\" is not found."
        functionArgNotFound: "\"{name}\" ez da aurkitu."
      },
      "reference/self": {
        // "The {prop} of \"{name}\" references the element itself (reference: {reference})."
        selfReference: "\"{name}\"(r)en {prop} elementuak berari egiten dio erreferentzia (erreferentzia: {reference})."
      },
      "name/duplicate": {
        // "The name \"{name}\" is duplicated."
        elementNames: "«{name}» izena bikoiztuta dago.",
        // "The calculated value name \"{name}\" is already used by another calculated value."
        calculatedValueNames: "«{name}» balio kalkulatuaren izena beste balio kalkulatu batek erabiltzen du jada.",
        // "The calculated value \"{name}\" shares its name with another element, so one of them shadows the other."
        calculatedValueShadowsElement: "«{name}» balio kalkulatuak beste elementu batekin partekatzen du izena, beraz batek bestea estaltzen du."
      },
      "name/shadowing": {
        // "The {nameKindText} \"{name}\" of this {ownerText} is also the built-in survey variable {{builtIn}} - the survey answers {{name}} first, so this one is unreachable in expressions."
        builtInVariable: "{ownerText}(r)en {nameKindText} \"{name}\" inkestaren barneko {{builtIn}} aldagaia ere bada - inkestak {{name}} erantzuten du lehenengo, beraz hau ez da irisgarria adierazpenetan.",
        // "The valueName \"{valueName}\" of \"{name}\" shares the value of {otherType} \"{otherName}\", which has no valueName of its own - \"{otherName}\" treats the fields \"{name}\" adds as unknown, and clearIncorrectValues() deletes them. Set its valueName to \"{valueName}\" too."
        valueNameShadowsElement: "\"{name}\"(r)en valueName \"{valueName}\" propietateak {otherType} \"{otherName}\" elementuaren balioa partekatzen du, eta horrek ez du bere valueName propiorik - \"{otherName}\"(e)k \"{name}\"(e)k gehitutako eremuak ezezagun gisa tratatzen ditu, eta clearIncorrectValues()(e)k ezabatzen ditu. Ezarri haren valueName \"{valueName}\" gisa ere.",
        // "The row \"{key}\" of matrixdropdown \"{otherName}\" is also {sharedKeyText} \"{name}\" sharing its value - a cell object and a single value cannot both live under one key; the runtime keeps one and deletes the other."
        dropdownRowConflict: "matrixdropdown \"{otherName}\" elementuaren \"{key}\" errenkada {sharedKeyText} \"{name}\" ere bada, balioa partekatuz - gelaxka-objektu bat eta balio bakarra ezin dira gako beraren pean egon; exekuzio-denborak bat mantentzen du eta bestea ezabatzen du.",
        // "The {type} \"{name}\" shares the data key \"{dataKey}\" with {otherType} \"{otherName}\" - it keeps {shapeText} there, while \"{otherName}\" keeps {otherShapeText}; one cannot hold the other's value, so clearIncorrectValues() deletes it."
        valueShapeConflict: "{type} \"{name}\" elementuak \"{dataKey}\" datu-gakoa partekatzen du {otherType} \"{otherName}\" elementuarekin - hark {shapeText} gordetzen du han, eta \"{otherName}\"(e)k {otherShapeText}; batek ezin du bestearen balioa eduki, beraz clearIncorrectValues()(e)k ezabatzen du.",
        // "The data key \"{dataName}\" is also the comment key of \"{base}\" (its data key plus \"{suffix}\") - one write silently overwrites the other."
        commentKeyCollision: "\"{dataName}\" datu-gakoa \"{base}\"(r)en iruzkin-gakoa ere bada (haren datu-gakoa gehi \"{suffix}\") - idazketa batek isilpean gainidazten du bestea.",
        // "The data key \"{dataName}\" is also the totals key of \"{base}\" (its data key plus \"{suffix}\") - one write silently overwrites the other."
        totalKeyCollision: "\"{dataName}\" datu-gakoa \"{base}\"(r)en guztizkoen gakoa ere bada (haren datu-gakoa gehi \"{suffix}\") - idazketa batek isilpean gainidazten du bestea.",
        // "The {trigger} trigger sets the variable \"{name}\", which is also the data key of question \"{questionName}\" - the variable answers {{name}} from then on, not the question."
        variableShadowsQuestion: "{trigger} abiarazleak \"{name}\" aldagaia ezartzen du, \"{questionName}\" galderaren datu-gakoa ere badena - aldagaiak {{name}} erantzuten du ordutik aurrera, ez galderak."
      },
      "name/reserved": {
        // "The name \"{name}\" is reserved - a member of Object.prototype."
        questionName: "\"{name}\" izena erreserbatuta dago - Object.prototype-ren kidea da.",
        // "The valueName \"{valueName}\" of \"{name}\" is reserved - a member of Object.prototype."
        valueName: "\"{name}\"(r)en valueName \"{valueName}\" erreserbatuta dago - Object.prototype-ren kidea da.",
        // "The column \"{name}\" of \"{matrixName}\" is reserved - a member of Object.prototype."
        columnName: "\"{matrixName}\"(r)en \"{name}\" zutabea erreserbatuta dago - Object.prototype-ren kidea da.",
        // "The item \"{name}\" of \"{questionName}\" is reserved - a member of Object.prototype."
        itemName: "\"{questionName}\"(r)en \"{name}\" elementua erreserbatuta dago - Object.prototype-ren kidea da.",
        // "The row \"{rowValue}\" of \"{name}\" is reserved - a member of Object.prototype."
        rowValue: "\"{name}\"(r)en \"{rowValue}\" errenkada erreserbatuta dago - Object.prototype-ren kidea da.",
        // "The calculated value \"{name}\" is reserved - a member of Object.prototype."
        calculatedValueName: "\"{name}\" balio kalkulatua erreserbatuta dago - Object.prototype-ren kidea da."
      },
      "element/unknown-type": {
        // "\"{name}\" has an unknown type \"{type}\"."
        unknownType: "\"{name}\"(e)k \"{type}\" mota ezezaguna du.",
        // "\"{name}\" has no type - an element without a type is dropped."
        missingType: "\"{name}\"(e)k ez du motarik - motarik gabeko elementua baztertu egiten da."
      },
      "property/unknown": {
        // "\"{key}\" is not a property of {ownerText} ({className})."
        unknownProperty: "\"{key}\" ez da {ownerText}(r)en propietatea ({className})."
      },
      "property/dead": {
        // "\"{key}\" of {ownerText} is not serializable - it takes effect on load, and is dropped from the JSON whenever the survey is saved again."
        notSerializable: "\"{key}\" ({ownerText}) ezin da serializatu - kargatzean hartzen du eragina, eta JSONetik kentzen da inkesta berriro gordetzen den bakoitzean.",
        // "\"{key}\" and \"{aliasKey}\" of {ownerText} are two names of one property - the run time applies them in the order the JSON writes them, so \"{winner}\" wins."
        aliasDuplicate: "\"{key}\" eta \"{aliasKey}\" ({ownerText}) propietate baten bi izen dira - exekuzio-denborak JSONak idazten dituen ordenan aplikatzen ditu, beraz \"{winner}\" nagusitzen da.",
        // "\"{key}\" is set on \"{name}\", but inputType \"{inputType}\" has no bounds - the run time ignores it."
        inertMinMax: "\"{key}\" \"{name}\" elementuan ezarrita dago, baina inputType \"{inputType}\"(e)k ez du mugarik - exekuzio-denborak ez du kontuan hartzen."
      },
      "property/invalid-value": {
        // "The {key} of {ownerText} is {valueText} - not one of the allowed values ({allowedText})."
        notInChoices: "{ownerText}(r)en {key} {valueText} da - ez da baimendutako balioetako bat ({allowedText}).",
        // "The {key} of {ownerText} is {value}, outside its allowed range {rangeText}."
        outOfRange: "{ownerText}(r)en {key} {value} da, bere baimendutako {rangeText} tartetik kanpo.",
        // "The valueName \"{valueName}\" of \"{name}\" contains a \".\" - expressions read {{valueName}} as a path into \"{rootKey}\", so the data key itself can never be addressed."
        valueNameDotted: "\"{name}\"(r)en valueName \"{valueName}\" propietateak \".\" bat du - adierazpenek {{valueName}} \"{rootKey}\" barneko bide gisa irakurtzen dute, beraz datu-gakoa bera ezin da inoiz zuzendu."
      },
      "property/required": {
        // "{ownerText} has no \"{key}\" - the property is required for a {className}."
        missing: "{ownerText}(e)k ez du \"{key}\" - propietatea derrigorrezkoa da {className} baterako.",
        // "The name of the {className} is {valueText}, not a string - the survey cannot load it."
        notAString: "{className}(r)en izena {valueText} da, ez katea - inkestak ezin du kargatu."
      },
      "property/not-an-array": {
        // "The \"{key}\" of {ownerText} is not an array - the property holds a list, and the run time wraps the value into a one-item array."
        notAnArray: "{ownerText}(r)en \"{key}\" ez da matrize bat - propietateak zerrenda bat dauka, eta exekuzio-denborak balioa elementu bakarreko matrize bihurtzen du."
      },
      "variable/collision": {
        // "The variable definition declares \"{variable}\", which is also the data key of question \"{name}\" - setting the variable deletes the answer stored under that key, and {{name}} answers the host value from then on."
        questionShadowed: "Aldagai-definizioak \"{variable}\" deklaratzen du, \"{name}\" galderaren datu-gakoa ere badena - aldagaia ezartzeak gako horretan gordetako erantzuna ezabatzen du, eta {{name}}(e)k ostalari-balioa erantzuten du ordutik aurrera.",
        // "The variable definition declares \"{variable}\", which is also the name of calculated value \"{name}\" - both write the same slot, and whichever runs last wins."
        calculatedValueShadowed: "Aldagai-definizioak \"{variable}\" deklaratzen du, \"{name}\" balio kalkulatuaren izena ere badena - biek eremu bera idazten dute, eta azkena exekutatzen dena nagusitzen da."
      },
      "variable/preset": {
        // "variablePresets.definition is not a survey JSON object, so no variable is declared and no preset value can be checked."
        definitionNotAnObject: "variablePresets.definition ez da inkesta-JSON objektu bat, beraz ez da aldagairik deklaratzen eta ezin da aurrezarpen-baliorik egiaztatu.",
        // "variablePresets.presets is not an array, so no preset is declared."
        presetsNotAnArray: "variablePresets.presets ez da matrize bat, beraz ez da aurrezarpenik deklaratzen.",
        // "Preset #{index} is not an object."
        presetNotAnObject: "#{index} aurrezarpena ez da objektu bat.",
        // "Preset #{index} has no name, so nothing can reference it."
        presetNameMissing: "#{index} aurrezarpenak ez du izenik, beraz ezerk ezin du erreferentziatu.",
        // "Preset \"{preset}\" carries no variables object, so it sets nothing."
        presetVariablesNotAnObject: "\"{preset}\" aurrezarpenak ez du aldagai-objekturik, beraz ez du ezer ezartzen.",
        // "Preset \"{preset}\" is declared twice - a lookup by that name answers with the first one."
        duplicateName: "\"{preset}\" aurrezarpena bitan deklaratuta dago - izen horren bidezko bilaketak lehenengoa itzultzen du.",
        // "Preset \"{preset}\" sets \"{variable}\", which the variable definition does not declare."
        unknownVariable: "\"{preset}\" aurrezarpenak \"{variable}\" ezartzen du, aldagai-definizioak deklaratzen ez duena.",
        // "Preset \"{preset}\" sets \"{variable}\" to a value the variable definition rejects: {errors}"
        invalidValue: "\"{preset}\" aurrezarpenak \"{variable}\" balio bat ezartzen du aldagai-definizioak baztertzen duena: {errors}"
      },
      "expression/unknown-function": {
        // "The function \"{functionName}\" is not registered."
        notRegistered: "\"{functionName}\" funtzioa ez dago erregistratuta."
      },
      "cycle/calculated-value": {
        // "The calculated value \"{names}\" references itself in its own expression."
        self: "«{names}» balio kalkulatuak bere buruari egiten dio erreferentzia bere adierazpenean.",
        // "Calculated values {names} depend on each other."
        loop: "{names} balio kalkulatuek elkarren mende daude."
      },
      "cycle/trigger": {
        // "The trigger reacts to the value it sets itself (\"{setToName}\")."
        self: "Abiarazleak berak ezartzen duen balioari erantzuten dio (\"{setToName}\").",
        // "Triggers form a loop through the values they set: {setRoots}."
        loop: "Abiarazleek begizta bat osatzen dute ezartzen dituzten balioen bidez: {setRoots}."
      },
      "cycle/value-write": {
        // "The {label} reads the value it writes itself - it runs only when another value changes, so it never runs at all."
        self: "{label} berak idazten duen balioa irakurtzen du - beste balio bat aldatzean soilik exekutatzen da, beraz ez da inoiz exekutatzen.",
        // "Values are written in a loop: {chain}. Each write reruns the expressions that read it, so the final values depend on the order the questions are answered in."
        loop: "Balioak begizta batean idazten dira: {chain}. Idazketa bakoitzak hura irakurtzen duten adierazpenak berriro exekutatzen ditu, beraz azken balioak galderen erantzun-ordernaren araberakoak dira."
      },
      "expression/unknown-choice": {
        // "The condition compares \"{name}\" to {values} - not among its choices. Available: {available}."
        notAmongChoices: "Baldintzak \"{name}\" {values} balioekin konparatzen du - ez dago haren aukeren artean. Erabilgarri: {available}.",
        // "The condition compares \"{name}\" to {values} - no choice value contains it. Available: {available}."
        noChoiceContains: "Baldintzak \"{name}\" {values} balioekin konparatzen du - aukeraren balio batek ere ez du hura barne. Erabilgarri: {available}."
      },
      "expression/type-mismatch": {
        // "The condition applies \"{operator}\" to \"{name}\": \"{recordName}\" ({questionType}) has no value to compare."
        "no-value": "Baldintzak \"{operator}\" aplikatzen dio \"{name}\"(r)i: \"{recordName}\" ({questionType}) elementuak ez du konparatzeko baliorik.",
        // "The condition applies \"{operator}\" to \"{name}\": \"{recordName}\" holds {valueShapeText} - ordering and arithmetic operators do not apply to it."
        "non-scalar": "Baldintzak \"{operator}\" aplikatzen dio \"{name}\"(r)i: \"{recordName}\"(e)k {valueShapeText} dauka - ordenatze- eta aritmetika-eragileak ez zaizkio aplikatzen.",
        // "The condition applies \"{operator}\" to \"{name}\": \"{recordName}\" is a boolean question - ordering operators do not apply to it."
        "boolean-ordering": "Baldintzak \"{operator}\" aplikatzen dio \"{name}\"(r)i: \"{recordName}\" galdera boolearra da - ordenatze-eragileak ez zaizkio aplikatzen.",
        // "The condition applies \"{operator}\" to \"{name}\": \"{recordName}\" is a text question - its value is a string, so numeric comparison relies on implicit conversion."
        "text-ordering": "Baldintzak \"{operator}\" aplikatzen dio \"{name}\"(r)i: \"{recordName}\" testu-galdera da - haren balioa katea da, beraz zenbakizko konparaketak inplizituko bihurtzean oinarritzen da.",
        // "The condition applies \"{operator}\" to \"{name}\": \"{recordName}\" holds a date string - comparing it to the number {constValue} cannot hold."
        "date-vs-number": "Baldintzak \"{operator}\" aplikatzen dio \"{name}\"(r)i: \"{recordName}\"(e)k data-kate bat dauka - ezin da {constValue} zenbakiarekin konparatu.",
        // "The condition applies \"{operator}\" to \"{name}\": \"{recordName}\" is numeric - comparing it to the string \"{constValue}\" cannot hold."
        "number-vs-string": "Baldintzak \"{operator}\" aplikatzen dio \"{name}\"(r)i: \"{recordName}\" zenbakizkoa da - ezin da \"{constValue}\" katearekin konparatu.",
        // "The condition applies \"{operator}\" to \"{name}\": \"{recordName}\" holds an array of selected values, so \"=\" compares the whole array."
        "array-vs-scalar": "Baldintzak \"{operator}\" aplikatzen dio \"{name}\"(r)i: \"{recordName}\"(e)k hautatutako balioen matrize bat dauka, beraz \"=\"(e)k matrize osoa konparatzen du.",
        // "The condition applies \"{operator}\" to \"{name}\": \"{recordName}\" is a boolean question - comparing it to {constValue} cannot hold."
        "boolean-vs-const": "Baldintzak \"{operator}\" aplikatzen dio \"{name}\"(r)i: \"{recordName}\" galdera boolearra da - ezin da {constValue} balioarekin konparatu."
      },
      "expression/contradiction": {
        // "The {prop} \"{expression}\" is always false, so \"{name}\" is never shown."
        alwaysFalse: "{prop} \"{expression}\" beti da gezurrezkoa, beraz \"{name}\" ez da inoiz erakusten.",
        // "The {prop} \"{expression}\" never holds, because {facts}."
        alwaysFalseViaConstants: "{prop} \"{expression}\" ez da inoiz betetzen, {facts}.",
        // "The {prop} \"{expression}\" never holds - no allowed value satisfies it: {facts}."
        outOfRange: "{prop} \"{expression}\" ez da inoiz betetzen - inolako baimendutako baliok ez du asetzen: {facts}.",
        // "The {prop} \"{expression}\" contradicts itself: {facts}."
        unsatisfiable: "{prop} \"{expression}\" bere buruarekin kontraesanean dago: {facts}."
      },
      "expression/meaningless-condition": {
        // "The {prop} \"{expression}\" is always true, so it decides nothing."
        alwaysTrue: "{prop} \"{expression}\" beti da egiazkoa, beraz ez du ezer erabakitzen.",
        // "The {prop} \"{expression}\" is arithmetic, not a comparison, so it never gives a yes or no."
        notABoolean: "{prop} \"{expression}\" aritmetikoa da, ez konparaketa, beraz ez du inoiz bai edo ez ematen.",
        // "Part of the {prop} \"{expression}\" has a result that is known upfront."
        meaninglessFragment: "{prop} \"{expression}\" zati baten emaitza aldez aurretik ezaguna da.",
        // "The {prop} \"{expression}\" always holds, because {facts} - it decides nothing."
        alwaysTrueViaConstants: "{prop} \"{expression}\" beti betetzen da, {facts} - ez du ezer erabakitzen."
      },
      "expression/no-reference": {
        // "The {prop} \"{expression}\" does not read any question or variable."
        noReference: "{prop} \"{expression}\" ez du inolako galdera edo aldagairik irakurtzen."
      },
      "value/not-a-choice": {
        // "The default value of \"{name}\" is {valuesText}, which it can never hold. Allowed: {availableText}."
        defaultValue: "\"{name}\"(r)en balio lehenetsia {valuesText} da, eta ezin du inoiz balio hori hartu. Baimenduta: {availableText}.",
        // "The correct answer of \"{name}\" is {valuesText}, which it can never hold. Allowed: {availableText}."
        correctAnswer: "\"{name}\"(r)en erantzun zuzena {valuesText} da, eta ezin du inoiz balio hori hartu. Baimenduta: {availableText}.",
        // "The trigger sets \"{name}\" to {valuesText}, which it can never hold. Allowed: {availableText}."
        triggerSetValue: "Abiarazleak \"{name}\" {valuesText} baliora ezartzen du, eta ezin du inoiz balio hori hartu. Baimenduta: {availableText}.",
        // "The default row value sets \"{name}\" to {valuesText}, which it can never hold. Allowed: {availableText}."
        defaultRowValue: "Errenkadaren balio lehenetsiak \"{name}\" {valuesText} baliora ezartzen du, eta ezin du inoiz balio hori hartu. Baimenduta: {availableText}.",
        // "The default panel value sets \"{name}\" to {valuesText}, which it can never hold. Allowed: {availableText}."
        defaultPanelValue: "Panelaren balio lehenetsiak \"{name}\" {valuesText} baliora ezartzen du, eta ezin du inoiz balio hori hartu. Baimenduta: {availableText}.",
        // "The {prop} of \"{name}\" names \"{key}\" - no such row. Available: {availableText}."
        unknownRowKey: "\"{name}\"(r)en {prop} propietateak \"{key}\" izendatzen du - ez dago errenkada horretatik. Erabilgarri: {availableText}.",
        // "The {prop} of \"{name}\" names \"{key}\" - no such column. Available: {availableText}."
        unknownColumnKey: "\"{name}\"(r)en {prop} propietateak \"{key}\" izendatzen du - ez dago zutabe horretatik. Erabilgarri: {availableText}.",
        // "The {prop} of \"{name}\" names \"{key}\" - no such template question. Available: {availableText}."
        unknownQuestionKey: "\"{name}\"(r)en {prop} propietateak \"{key}\" izendatzen du - ez dago txantiloi-galdera horretatik. Erabilgarri: {availableText}.",
        // "The copyvalue trigger copies \"{fromName}\" into \"{setToName}\", but \"{fromName}\" holds {sourceShapeText} and \"{setToName}\" holds {targetShapeText}."
        copyValueShape: "copyvalue abiarazleak \"{fromName}\" \"{setToName}\" elementura kopiatzen du, baina \"{fromName}\"(e)k {sourceShapeText} dauka eta \"{setToName}\"(e)k {targetShapeText}.",
        // "The copyvalue trigger copies \"{fromName}\" into \"{setToName}\", but no value of \"{fromName}\" is among the values \"{setToName}\" can hold. Allowed: {availableText}."
        copyValueNoOverlap: "copyvalue abiarazleak \"{fromName}\" \"{setToName}\" elementura kopiatzen du, baina \"{fromName}\"(r)en balioetako bat ere ez dago \"{setToName}\"(e)k har ditzakeen balioen artean. Baimenduta: {availableText}."
      },
      "choices/dead-source": {
        // "\"{name}\" copies its choices from \"{source}\", but no question with that name exists."
        missing: "\"{name}\"(e)k \"{source}\" elementutik kopiatzen ditu aukerak, baina ez dago izen hori duen galderarik.",
        // "\"{name}\" copies its choices from itself."
        self: "\"{name}\"(e)k bere burutik kopiatzen ditu aukerak.",
        // "\"{name}\" copies its choices from \"{source}\" ({sourceType}), which provides neither choices nor an array of values."
        "not-a-source": "\"{name}\"(e)k \"{source}\" ({sourceType}) elementutik kopiatzen ditu aukerak, baina horrek ez du ez aukerarik ez balio-matrizerik ematen.",
        // "\"{name}\" reads {prop} \"{field}\" from \"{source}\", but {sourceType} \"{source}\" has no such {fieldNoun}."
        "missing-field": "\"{name}\"(e)k {prop} \"{field}\" irakurtzen du \"{source}\" elementutik, baina \"{field}\" {fieldNoun} ez da existitzen {sourceType} \"{source}\"(e)n."
      },
      "choices/duplicate": {
        // "Another item of the {prop} of \"{name}\" already has the value {valueText} - the run time keeps both items."
        duplicateValue: "\"{name}\"(r)en {prop} propietatearen beste elementu batek badu {valueText} balioa - exekuzio-denborak bi elementuak mantentzen ditu.",
        // "The choices of \"{name}\" contain {valueText} while {toggleProp} is on - it collides with the built-in {specialItemText} item."
        specialItemCollision: "\"{name}\"(r)en aukerek {valueText} dute, {toggleProp} gaituta dagoen bitartean - barneko {specialItemText} elementuarekin talka egiten du."
      },
      "trigger/unknown-target": {
        // "The {trigger} trigger targets page \"{name}\", which does not exist."
        pageNotFound: "{trigger} abiarazleak \"{name}\" orrialdea du helburu, baina ez da existitzen.",
        // "The {trigger} trigger targets \"{name}\", but {containerType} \"{root}\" has no {segmentNoun} \"{segment}\"."
        segmentNotFound: "{trigger} abiarazleak \"{name}\" du helburu, baina \"{segment}\" {segmentNoun} ez da existitzen {containerType} \"{root}\"(e)n.",
        // "The {trigger} trigger {verb} \"{name}\", but no {kindText} with that name exists."
        rootNotFound: "{trigger} abiarazleak \"{name}\" {verb}, baina ez da existitzen izen hori duen {kindText}."
      },
      "trigger/unknown-type": {
        // "The trigger type \"{type}\" is not known."
        unknownType: "\"{type}\" abiarazle mota ez da ezaguna.",
        // "The trigger has no type."
        noType: "Abiarazleak ez du motarik."
      },
      "validator/unknown-type": {
        // "The validator type \"{type}\" of \"{name}\" is not known."
        unknownType: "\"{name}\"(r)en \"{type}\" balidatzaile mota ez da ezaguna.",
        // "A validator of \"{name}\" has no type."
        noType: "\"{name}\"(r)en balidatzaile batek ez du motarik."
      },
      "validator/dead": {
        // "The {validatorType} validator of \"{name}\" {effectText}: {causeText} ({questionType})."
        wrongValueShape: "\"{name}\"(r)en {validatorType} balidatzaileak {effectText}: {causeText} ({questionType}).",
        // "The {validatorType} validator of \"{name}\" requires at least {min} and at most {max} - no answer satisfies it."
        minAboveMax: "\"{name}\"(r)en {validatorType} balidatzaileak gutxienez {min} eta gehienez {max} eskatzen ditu - erantzun batek ere ez du asetzen.",
        // "The answercount validator of \"{name}\" requires at least {minCount} answers, above the {selectable} choices that can be selected together."
        minCountAboveChoices: "\"{name}\"(r)en answercount balidatzaileak gutxienez {minCount} erantzun eskatzen ditu, elkarrekin hauta daitezkeen {selectable} aukeren gainetik.",
        // "The regex validator of \"{name}\" has a pattern the engine rejects: {error}."
        invalidRegex: "\"{name}\"(r)en regex balidatzaileak motorrak baztertzen duen eredu bat du: {error}.",
        // "The expression validator of \"{name}\" has no expression, so it always passes."
        emptyExpression: "\"{name}\"(r)en expression balidatzaileak ez du adierazpenik, beraz beti pasatzen da."
      },
      "element/count-contradiction": {
        // "The {minProp} of \"{name}\" is {min}, above its {maxProp} of {max} - the run time silently adjusts one of them."
        minAboveMax: "\"{name}\"(r)en {minProp} {min} da, bere {maxProp} ({max}) balioaren gainetik - exekuzio-denborak isilpean doitzen du bat.",
        // "The {countProp} of \"{name}\" is {count}, {direction} its {boundProp} of {bound} - the run time clamps it."
        countOutOfBounds: "\"{name}\"(r)en {countProp} {count} da, bere {boundProp} ({bound}) balioaren {direction} - exekuzio-denborak mugatu egiten du.",
        // "The {stepProp} of \"{name}\" is {step}, but the range it steps through ({minProp}..{maxProp}) spans only {range} - the run time clamps it."
        stepAboveRange: "\"{name}\"(r)en {stepProp} {step} da, baina zeharkatzen duen tartea ({minProp}..{maxProp}) {range} soilik da - exekuzio-denborak mugatu egiten du.",
        // "The minSelectedChoices of \"{name}\" is {min}, above the {selectable} choices that can be selected together - the question can never be answered."
        minAboveChoicesCount: "\"{name}\"(r)en minSelectedChoices {min} da, elkarrekin hauta daitezkeen {selectable} aukeren gainetik - galderari ezin zaio inoiz erantzun."
      },
      "element/never-visible": {
        // "\"{name}\" can never become visible: its visibleIf reads {reads}, which {deadClause}, so the condition never holds."
        dependsOnDeadValue: "\"{name}\" ezin da inoiz ikusgai bihurtu: haren visibleIf propietateak {reads} irakurtzen du, eta horrek {deadClause}, beraz baldintza ez da inoiz betetzen."
      },
      "mask/mismatch": {
        // "The maskType \"{maskType}\" of \"{name}\" is not a known mask - the run time falls back to no mask at all."
        unknownMaskType: "\"{name}\"(r)en maskType \"{maskType}\" ez da maskara ezagun bat - exekuzio-denborak maskararik ez erabiltzera jotzen du.",
        // "The maskSettings of \"{name}\" set \"{key}\", which is not a property of the \"{maskType}\" mask - the run time drops it silently."
        unknownSettingsKey: "\"{name}\"(r)en maskSettings-ek \"{key}\" ezartzen du, eta hori ez da \"{maskType}\" maskararen propietatea - exekuzio-denborak isilpean baztertzen du.",
        // "The maskSettings of \"{name}\" are set without a maskType - the run time keeps only \"saveMaskedValue\" and drops the rest."
        settingsWithoutMask: "\"{name}\"(r)en maskSettings maskType gabe ezarrita daude - exekuzio-denborak \"saveMaskedValue\" soilik mantentzen du eta gainerakoa baztertzen du.",
        // "The {maskType} mask of \"{name}\" applies to no input: inputType \"{inputType}\" is masked only for text and tel."
        maskInertForInputType: "\"{name}\"(r)en {maskType} maskarak ez dio inolako sarrerari aplikatzen: inputType \"{inputType}\" testua eta tel motetarako soilik maskaratzen da.",
        // "The datetime mask of \"{name}\" sets min/max without a pattern - the bounds apply to the pattern's date parts, so without one they do nothing."
        minMaxWithoutPattern: "\"{name}\"(r)en datetime maskarak min/max ezartzen ditu eredurik gabe - mugak ereduaren data-zatiei aplikatzen zaizkie, beraz bat gabe ez dute ezer egiten.",
        // "The {maskType} mask of \"{name}\" allows at least {min} and at most {max} - no value satisfies it."
        minAboveMax: "\"{name}\"(r)en {maskType} maskarak gutxienez {min} eta gehienez {max} baimentzen ditu - balio batek ere ez du asetzen."
      },
      "page/empty": {
        // "The dynamic panel \"{name}\" has an empty template - its panels have nothing to render."
        emptyTemplate: "\"{name}\" panel dinamikoak txantiloi hutsa du - haren panelek ez dute ezer errendatzeko.",
        // "The {kindText} \"{name}\" has no elements."
        noElements: "{kindText} \"{name}\"(e)k ez du elementurik.",
        // "The {kindText} \"{name}\" has no elements that can ever render - every element is hidden, guarded by a condition that never holds, or empty."
        noRenderableElements: "{kindText} \"{name}\"(e)k ez du inoiz errenda daitekeen elementurik - elementu guztiak ezkutatuta daude, inoiz betetzen ez den baldintza baten pean, edo hutsik.",
        // "The detail elements of \"{name}\" are never shown: its detailPanelMode is \"none\", which is the default."
        detailElementsHidden: "\"{name}\"(r)en xehetasun-elementuak ez dira inoiz erakusten: haren detailPanelMode \"none\" da, hau da, lehenetsia."
      }
    },
    // Clauses appended to a base message, in this order
    suffixes: {
      // "Position: {0}."
      atPosition: "Posizioa: {0}.", // {0} character offset
      // "It was built from the legacy name, operator and value properties of the trigger."
      fromLegacyTrigger: "Abiarazlearen name, operator eta value propietate zaharkituetatik eraiki da.",
      // "Inside: {0}."
      inScope: "Barruan: {0}.", // {0} name of the namespace
      // "Did you mean \"{0}\"?"
      didYouMean: "«{0}» esan nahi zenuen?",
      // "If it is a custom component, pass its definition to the linter to enable full analysis."
      customComponentHint: "Osagai pertsonalizatu bat bada, pasa haren definizioa linterrari analisi osoa gaitzeko.",
      // "Register the function before linting, or list it in the linter options."
      registerFunctionHint: "Erregistratu funtzioa linting egin aurretik, edo zerrendatu linterraren aukeretan.",
      // "A misspelled type is silently dropped at run time, and a custom trigger is not covered by the target and cycle checks."
      triggerTypeDroppedHint: "Oker idatzitako mota bat isilpean baztertzen da exekuzio-denboran, eta abiarazle pertsonalizatua ez dago helburu- eta begizta-egiaztapenek estalita.",
      // "If it is a variable set at run time, list it in the linter options."
      knownVariablesHint: "Exekuzio-denboran ezarritako aldagai bat bada, zerrendatu linterraren aukeretan.",
      // "The loop may be unreachable if the trigger conditions never hold together - verify the expressions."
      loopMayBeUnreachable: "Begizta iristezina izan daiteke abiarazle-baldintzak inoiz batera betetzen ez badira - egiaztatu adierazpenak.",
      // "A defaultValueExpression applies only until its question is answered."
      defaultValueExpressionNote: "defaultValueExpression batek haren galdera erantzun arte soilik aplikatzen du.",
      // "In expression: {0}"
      inExpression: "Adierazpen honetan: {0}", // {0} the expression the defect was found in
      // "Referenced in bindings."
      inBindings: "Loturetan erreferentziatua.",
      // "Referenced in the choicesByUrl {0}."
      inChoicesByUrl: "choicesByUrl {0} erreferentziatua.", // {0} the url or the path property
      // "Referenced in the \"{0}\" text."
      inText: "\"{0}\" testuan erreferentziatua.", // {0} the localizable property the text belongs to
      // the two branches of reference/unknown.functionArgNotFound: a name read from every entry
      functionArgInContainer: "{0}() funtzioak izen hori {1} \"{2}\"(r)en sarrera bakoitzetik irakurtzen du.",
      // "The {0}() argument names no question, panel or page."
      functionArgStandalone: "{0}() argumentuak ez du galdera, panel edo orrialderik izendatzen.",
      // "The deserializer drops a key it does not know."
      deserializerDropsKey: "Deserializatzaileak ezagutzen ez duen gako bat baztertzen du.",
      // "The deserializer drops a validator it cannot resolve, so nothing validates."
      validatorDroppedHint: "Deserializatzaileak ezin duen balidatzaile bat baztertzen du, beraz ezerk ez du balidatzen.",
      // "The inputType is \"{0}\"."
      validatorInputType: "inputType \"{0}\" da.",
      // "It is the data key of \"{0}\"."
      dataKeyOwner: "\"{0}\"(r)en datu-gakoa da." // {0} the element that answers under it
    },
    // The facts a contradiction rests on. {ref} is a reference as an expression writes it,
    facts: {
      // [Auto-translated] ", "
      separator: ",",
      // " and "
      and: " eta ",
      // "{ref} is always {value}"
      constant: "{ref} beti {value} da",
      // "{ref} is {bounds}"
      range: "{ref} {bounds} da",
      // "at least {0}"
      atLeast: "gutxienez {0}",
      // "at most {0}"
      atMost: "gehienez {0}",
      conflict: {
        // "{ref} cannot be both {values}"
        equalValues: "{ref} ezin da aldi berean {values} izan",
        // "{ref} cannot be {value} and not be it"
        equalAndNotEqual: "{ref} ezin da {value} izan eta aldi berean ez izan",
        // "{ref} cannot be empty and be {value}"
        emptyAndValue: "{ref} ezin da hutsik egon eta {value} izan",
        // "{ref} cannot be empty and not empty"
        emptyAndNotEmpty: "{ref} ezin da hutsik egon eta ez hutsik egon",
        // "{ref} cannot be above {min} and below {max}"
        impossibleBounds: "{ref} ezin da {min} gainetik eta {max} azpitik egon",
        // "{ref} is asked to be one of no value at all"
        emptySet: "{ref}(e)ri inolako baliorik ez izatea eskatzen zaio"
      }
    },
    // Scope hints of reference/unknown. {0} is the expression variable the hint is about.
    hints: {
      // "\"{0}.\" references are only available inside a matrix cell or a matrix detail panel."
      rowScopePrefix: "\"{0}.\" erreferentziak matrize-gelaxka edo matrize-xehetasunen panel baten barruan soilik daude erabilgarri.",
      // "\"{0}\" is only available inside a matrix cell or a matrix detail panel."
      rowScopeStandalone: "\"{0}\" matrize-gelaxka edo matrize-xehetasunen panel baten barruan soilik dago erabilgarri.",
      // "\"{0}.\" references are only available inside a dynamic panel or a panel container."
      panelScopePrefix: "\"{0}.\" erreferentziak panel dinamiko edo panel-edukiontzi baten barruan soilik daude erabilgarri.",
      // "\"{0}.\" references are only available inside a dynamic panel."
      panelSiblingPrefix: "\"{0}.\" erreferentziak panel dinamiko baten barruan soilik daude erabilgarri.",
      // "\"{0}\" is only available inside a dynamic panel."
      panelStandalone: "\"{0}\" panel dinamiko baten barruan soilik dago erabilgarri.",
      // "\"{0}\" is only available inside choice, row and column conditions."
      itemScope: "\"{0}\" aukera-, errenkada- eta zutabe-baldintzen barruan soilik dago erabilgarri.",
      // "\"{0}.\" references are only available inside a composite question."
      compositeScopePrefix: "\"{0}.\" erreferentziak galdera konposatu baten barruan soilik daude erabilgarri.",
      // "\"{0}\" is not available inside an inArray filter, which runs against the item and then the survey."
      inArrayFilterScope: "\"{0}\" ez dago erabilgarri inArray iragazki baten barruan; hori elementuaren aurka eta gero inkestaren aurka exekutatzen da.",
      // "\"{0}\" is a column of this matrix - reference it with the row prefix."
      matrixColumn: "\"{0}\" matrize honen zutabe bat da - erreferentzia egin errenkada-aurrizkiarekin.",
      // "\"{0}\" is a question of this dynamic panel - reference it with the panel prefix."
      panelQuestion: "\"{0}\" panel dinamiko honen galdera bat da - erreferentzia egin panel-aurrizkiarekin."
    },
    // Prose the linter reports as a "suggestion" instead of an identifier
    suggestions: {
      // "Set inputType: \"number\" on \"{0}\" if it collects numbers."
      setNumberInputType: "Ezarri inputType: \"number\" \"{0}\" elementuan, zenbakiak biltzen baditu.",
      // "Use \"contains\" or \"anyof\" for multi-select values."
      useContainsOrAnyof: "Erabili \"contains\" edo \"anyof\" hautapen anitzeko balioetarako."
    },
    // Terms the linter splices into a message as a raw code identifier
    terms: {
      containerKind: {
        // "page"
        page: "orrialdea",
        // "panel"
        panel: "panela"
      },
      // which of the three name properties shadows a built-in variable
      nameKind: {
        // "name"
        name: "izena",
        // [Auto-translated] "valueName"
        valueName: "valueName",
        // "name"
        calculatedValue: "izena"
      },
      // the owner of a shadowed name, when the finding carries no element type
      nameOwner: {
        // "calculated value"
        calculatedValue: "balio kalkulatua",
        // "element"
        default: "elementua"
      },
      // the owner of a property, when the JSON gives it no name of its own
      owner: {
        // "the survey"
        survey: "inkesta",
        // "the {0}"
        className: "{0}"
      },
      specialItem: {
        // "Other"
        other: "Beste",
        // "None"
        none: "Bat ere ez",
        // "Refuse to answer"
        refuse: "Uko egin erantzuteari",
        // "Don't know"
        dontknow: "Ez dakit"
      },
      deadValidatorEffect: {
        // "never fires"
        neverFires: "inoiz ez da abiarazten",
        // "rejects every answer"
        rejectsEveryAnswer: "erantzun guztiak baztertzen ditu",
        // "cannot validate"
        default: "ezin du balidatu"
      },
      // what the answer's shape does to the validator
      deadValidatorCause: {
        // "the question holds no answer to validate"
        noAnswer: "galderak ez du balidatzeko erantzunik",
        // "a length is read off a text value, and this answer has none"
        textLength: "luzera testu-balio batetik irakurtzen da, eta erantzun honek ez du halakorik",
        // "the answer is not a number and never can be"
        notANumber: "erantzuna ez da zenbaki bat eta ezin da inoiz izan",
        // "a number never matches an e-mail address"
        numberVsEmail: "zenbaki bat ez dator inoiz bat helbide elektroniko batekin",
        // "the answer is not a list of values"
        notAList: "erantzuna ez da balio-zerrenda bat",
        // "the answer is not a value it can check"
        default: "erantzuna ez da egiazta dezakeen balio bat"
      },
      valueShape: {
        // "an array"
        array: "matrize bat",
        // "an object"
        object: "objektu bat"
      },
      dropdownRowSharer: {
        // "a row of matrix"
        matrix: "matrize baten errenkada",
        // "an item of multipletext"
        multipletext: "multipletext baten elementua",
        // "a row or item of a question"
        default: "galdera baten errenkada edo elementua"
      },
      sharedValueShape: {
        // "an array of objects"
        records: "objektu-matrize bat",
        // "an object"
        object: "objektu bat",
        // "a plain value"
        plain: "balio arrunt bat",
        // "a value"
        default: "balio bat"
      },
      // the shapes the two ends of a copyvalue trigger hold
      copyShape: {
        // "an array of selected values"
        array: "hautatutako balioen matrize bat",
        // "a single value"
        scalar: "balio bakarra",
        // "a value"
        default: "balio bat"
      },
      // whether a row/panel count falls below its minimum or above its maximum
      countDirection: {
        // "below"
        below: "azpitik",
        // "above"
        above: "gainetik"
      },
      // the verb of element/never-visible, by the number of questions the condition reads
      deadValueClause: {
        // "is never visible and never receives a value"
        one: "ez da inoiz ikusgai eta ez du inoiz baliorik jasotzen",
        // "are never visible and never receive a value"
        many: "ez dira inoiz ikusgai eta ez dute inoiz baliorik jasotzen"
      },
      targetKind: {
        // "question"
        question: "galdera",
        // "question or variable"
        questionvalue: "galdera edo aldagaia",
        // "page"
        page: "orrialdea"
      },
      triggerVerb: {
        // "reads"
        fromName: "irakurtzen du",
        // "navigates to"
        gotoName: "helburu gisa du",
        // "sets"
        default: "ezartzen du"
      },
      // no "operator" table on purpose: an operator stays the identifier the JSON spells,
      sourceField: {
        // "template question"
        paneldynamic: "txantiloi-galdera",
        // "column"
        default: "zutabea"
      },
      // the noun for the container level an unknown trigger-target segment belongs to
      segmentNoun: {
        // "template question"
        paneldynamic: "txantiloi-galdera",
        // "column"
        matrixdynamic: "zutabea",
        // "item"
        multipletext: "elementua",
        // "row"
        matrix: "errenkada",
        // "row"
        matrixdropdownRow: "errenkada",
        // "column"
        matrixdropdownColumn: "zutabea",
        // "field"
        default: "eremua"
      }
    }
  },
  // Localized default JSON for new questions (see settings.toolbox.defaultJSON)
  defaultJson: {
    choices: [
      {
        value: "item1",
        // "Item 1"
        text: "1. elementua"
      },
      {
        value: "item2",
        // "Item 2"
        text: "2. elementua"
      },
      {
        value: "item3",
        // "Item 3"
        text: "3. elementua"
      }
    ],
    columns: [
      {
        value: "column1",
        // "Column 1"
        text: "1. zutabea"
      },
      {
        value: "column2",
        // "Column 2"
        text: "2. zutabea"
      },
      {
        value: "column3",
        // "Column 3"
        text: "3. zutabea"
      }
    ],
    rows: [
      {
        value: "row1",
        // "Row 1"
        text: "1. errenkada"
      },
      {
        value: "row2",
        // "Row 2"
        text: "2. errenkada"
      }
    ],
    matrixColumns: [
      {
        name: "column1",
        // "Column 1"
        title: "1. zutabea"
      },
      {
        name: "column2",
        // "Column 2"
        title: "2. zutabea"
      },
      {
        name: "column3",
        // "Column 3"
        title: "3. zutabea"
      }
    ]
  }
};

setupLocale({ localeCode: "eu", strings: euStrings });
