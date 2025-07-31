import { setupLocale } from "survey-creator-core";

export let svStrings = {
  // survey templates
  survey: {
    // "Edit"
    edit: "Redigera",
    // [Auto-translated] "Watch and learn how to create surveys"
    externalHelpLink: "Se och lär dig hur du skapar enkäter",
    // [Auto-translated] "https://www.youtube.com/channel/UCH2ru9okIcooNZfpIbyq4qQ?view_as=subscriber"
    externalHelpLinkUrl: "https://www.youtube.com/channel/UCH2ru9okIcooNZfpIbyq4qQ?view_as=subscriber",
    // "Please drop a question here from the Toolbox."
    dropQuestion: "Dra och släpp en fråga från Verktygslistan till vänster.",
    // [Auto-translated] "Create a rule to customize the flow of the survey."
    addLogicItem: "Skapa en regel för att anpassa undersökningens flöde.",
    // "Copy"
    copy: "Kopiera",
    // [Auto-translated] "Duplicate"
    duplicate: "Duplicera",
    // "Add to toolbox"
    addToToolbox: "Lägg till Verktygslistan",
    // "Delete Panel"
    deletePanel: "Radera Panel",
    // "Delete Question"
    deleteQuestion: "Radera Fråga",
    // "Convert to"
    convertTo: "Konvertera till",
    // "Drag element"
    drag: "Dra element"
  },
  // Creator tabs
  tabs: {
    // "Preview"
    preview: "Testa enkät",
    // "Themes"
    theme: "Teman",
    // "Translations"
    translation: "Översättning",
    // "Designer"
    designer: "Enkät Designer",
    // "JSON Editor"
    json: "JSON Redigering",
    // [Auto-translated] "Logic"
    logic: "Logik"
  },
  // Question types
  qt: {
    // "Default"
    default: "Standard",
    // "Checkboxes"
    checkbox: "Checkboxes",
    // "Long Text"
    comment: "Kommentar",
    // "Image Picker"
    imagepicker: "Bild-väljare",
    // [Auto-translated] "Ranking"
    ranking: "Rankning",
    // [Auto-translated] "Image"
    image: "Bild",
    // "Dropdown"
    dropdown: "Rullgardinsmeny",
    // [Auto-translated] "Multi-Select Dropdown"
    tagbox: "Listruta med flerval",
    // "File Upload"
    file: "Fil",
    // "HTML"
    html: "Html",
    // "Single-Select Matrix"
    matrix: "Matris (enkel val)",
    // "Multi-Select Matrix"
    matrixdropdown: "Matris(flera val)",
    // "Dynamic Matrix"
    matrixdynamic: "Matris (dynamiska rader)",
    // "Multiple Textboxes"
    multipletext: "Flera texter",
    // "Panel"
    panel: "Panel",
    // "Dynamic Panel"
    paneldynamic: "Panel (dynamisk panel)",
    // "Radio Button Group"
    radiogroup: "Radiogrupper",
    // "Rating Scale"
    rating: "Rankning",
    // [Auto-translated] "Slider"
    slider: "Skjutreglage",
    // "Single-Line Input"
    text: "Enkel text",
    // "Yes/No (Boolean)"
    boolean: "Yes/No (Boolean)",
    // "Expression (read-only)"
    expression: "Formel",
    // [Auto-translated] "Signature"
    signaturepad: "Underskrift",
    // [Auto-translated] "Button Group"
    buttongroup: "Knappgrupp"
  },
  toolboxCategories: {
    // "General"
    general: "Generellt",
    // "Choice Questions"
    choice: "Frågor om val",
    // "Text Input Questions"
    text: "Frågor om textinmatning",
    // "Containers"
    containers: "Behållare",
    // "Matrix Questions"
    matrix: "Matris frågor",
    // "Misc"
    misc: "Misc"
  },
  // Strings in SurveyJS Creator
  ed: {
    // "Default ({0})"
    defaultLocale: "Standard ({0})",
    // "Survey"
    survey: "Enkät",
    // "Settings"
    settings: "Enkät inställningar",
    // [Auto-translated] "Open settings"
    settingsTooltip: "Öppna inställningar",
    // [Auto-translated] "Survey Settings"
    surveySettings: "Inställningar för undersökning",
    // [Auto-translated] "Open survey settings"
    surveySettingsTooltip: "Inställningar för undersökning",
    // [Auto-translated] "Theme Settings"
    themeSettings: "Tema Inställningar",
    // [Auto-translated] "Open theme settings"
    themeSettingsTooltip: "Inställningar för tema",
    // [Auto-translated] "Creator Settings"
    creatorSettingTitle: "Inställningar för kreatör",
    // [Auto-translated] "Show Panel"
    showPanel: "Visa panel",
    // [Auto-translated] "Hide Panel"
    hidePanel: "Dölj panel",
    // [Auto-translated] "Select previous"
    prevSelected: "Välj föregående",
    // [Auto-translated] "Select next"
    nextSelected: "Välj nästa",
    // [Auto-translated] "Focus previous"
    prevFocus: "Fokus föregående",
    // [Auto-translated] "Focus next"
    nextFocus: "Fokus nästa",
    // [Auto-translated] "Survey"
    surveyTypeName: "Undersökning",
    // [Auto-translated] "Page"
    pageTypeName: "Sida",
    // [Auto-translated] "Panel"
    panelTypeName: "Panel",
    // [Auto-translated] "Question"
    questionTypeName: "Fråga",
    // [Auto-translated] "Column"
    columnTypeName: "Spalt",
    // "Add New Page"
    addNewPage: "Lägg till en ny sida",
    // "Scroll to the Right"
    moveRight: "Scrolla till höger",
    // "Scroll to the Left"
    moveLeft: "Scrolla till vänster",
    // "Delete Page"
    deletePage: "Radera sida",
    // "Edit Page"
    editPage: "Redigera sida",
    // "Edit"
    edit: "Redigera",
    // "page"
    newPageName: "sida",
    // "question"
    newQuestionName: "fråga",
    // "panel"
    newPanelName: "panel",
    // "text"
    newTextItemName: "text",
    // [Auto-translated] "Default"
    defaultV2Theme: "Standard",
    // [Auto-translated] "Modern"
    modernTheme: "Modern",
    // [Auto-translated] "Default (legacy)"
    defaultTheme: "Standard (äldre)",
    // "Preview Survey Again"
    testSurveyAgain: "Testa enkät igen",
    // "Survey width: "
    testSurveyWidth: "Enkät bredd: ",
    // [Auto-translated] "You had to navigate to"
    navigateToMsg: "Du var tvungen att navigera till",
    // "Save Survey"
    saveSurvey: "Spara Enkät",
    // [Auto-translated] "Save Survey"
    saveSurveyTooltip: "Spara undersökning",
    // [Auto-translated] "Save Theme"
    saveTheme: "Spara tema",
    // [Auto-translated] "Save Theme"
    saveThemeTooltip: "Spara tema",
    // [Auto-translated] "Hide errors"
    jsonHideErrors: "Dölj fel",
    // [Auto-translated] "Show errors"
    jsonShowErrors: "Visa fel",
    // "Undo"
    undo: "Ångra",
    // "Redo"
    redo: "Göra om",
    // [Auto-translated] "Undo last change"
    undoTooltip: "Ångra senaste ändring",
    // [Auto-translated] "Redo the change"
    redoTooltip: "Gör om ändringen",
    // [Auto-translated] "Expand"
    expandTooltip: "Expandera",
    // [Auto-translated] "Collapse"
    collapseTooltip: "Kollaps",
    // "Expand All"
    expandAllTooltip: "Expandera alla",
    // "Collapse All"
    collapseAllTooltip: "Komprimera alla",
    // [Auto-translated] "Zoom In"
    zoomInTooltip: "Zooma in",
    // [Auto-translated] "Zoom to 100%"
    zoom100Tooltip: "Zooma till 100 %",
    // [Auto-translated] "Zoom Out"
    zoomOutTooltip: "Zooma ut",
    // [Auto-translated] "Lock expand/collapse state for questions"
    lockQuestionsTooltip: "Lås expandera/komprimera tillstånd för frågor",
    // [Auto-translated] "Show more"
    showMoreChoices: "Visa mer",
    // [Auto-translated] "Show less"
    showLessChoices: "Visa mindre",
    // [Auto-translated] "Copy"
    copy: "Kopia",
    // [Auto-translated] "Cut"
    cut: "Skära",
    // [Auto-translated] "Paste"
    paste: "Klistra",
    // [Auto-translated] "Copy selection to clipboard"
    copyTooltip: "Kopiera markering till Urklipp",
    // [Auto-translated] "Cut selection to clipboard"
    cutTooltip: "Klipp markering till Urklipp",
    // [Auto-translated] "Paste from clipboard"
    pasteTooltip: "Klistra in från Urklipp",
    // "Options"
    options: "Alternativ",
    // "Generate Valid JSON"
    generateValidJSON: "Generera giltig JSON",
    // "Generate Readable JSON"
    generateReadableJSON: "Generera läsbar JSON",
    // "Toolbox"
    toolbox: "Verktygslista",
    // [Auto-translated] "Properties"
    "property-grid": "Egenskaper",
    // [Auto-translated] "Search"
    toolboxSearch: "Söka",
    // [Auto-translated] "Type to search..."
    toolboxFilteredTextPlaceholder: "Skriv för att söka...",
    // [Auto-translated] "No results found"
    toolboxNoResultsFound: "Inga resultat hittades",
    // [Auto-translated] "Type to search..."
    propertyGridFilteredTextPlaceholder: "Skriv för att söka...",
    // [Auto-translated] "No results found"
    propertyGridNoResultsFound: "Inga resultat hittades",
    // [Auto-translated] "Start configuring your form"
    propertyGridPlaceholderTitle: "Börja konfigurera formuläret",
    // [Auto-translated] "Click any category icon to explore survey settings. Additional settings will become available once you add a survey element to the design surface."
    propertyGridPlaceholderDescription: "Klicka på en kategoriikon för att utforska undersökningsinställningarna. Ytterligare inställningar blir tillgängliga när du lägger till ett undersökningselement på designytan.",
    // "Please correct JSON."
    correctJSON: "Var vänligen korrigera JSON.",
    // "Survey Results "
    surveyResults: "Enkät resultat: ",
    // "As Table"
    surveyResultsTable: "Som tabell",
    // "As JSON"
    surveyResultsJson: "Som JSON",
    // "Question Title"
    resultsTitle: "Frågetitel",
    // "Question Name"
    resultsName: "Frågenamn",
    // "Answer Value"
    resultsValue: "Resultat värde",
    // "Display Value"
    resultsDisplayValue: "Visnings värde",
    // "Modified"
    modified: "Ändrat",
    // "Saving"
    saving: "Sparar",
    // "Saved"
    saved: "Sparat",
    // [Auto-translated] "Error"
    propertyEditorError: "Fel",
    // "Error! Editor content is not saved."
    saveError: "Fel! Innehållet i enkäten är inte sparat.",
    // [Auto-translated] "Language Settings"
    translationPropertyGridTitle: "Språkinställningar",
    // [Auto-translated] "Theme Settings"
    themePropertyGridTitle: "Tema Inställningar",
    // [Auto-translated] "Add Language"
    addLanguageTooltip: "Lägg till språk",
    // [Auto-translated] "Languages"
    translationLanguages: "Språk",
    // [Auto-translated] "Are you certain you wish to delete all strings for this language?"
    translationDeleteLanguage: "Är du säker på att du vill ta bort alla strängar för det här språket?",
    // "Select language to translate"
    translationAddLanguage: "Välj språk för oversättning",
    // "All Strings"
    translationShowAllStrings: "Visa alla strängar",
    // [Auto-translated] "Used Strings Only"
    translationShowUsedStringsOnly: "Endast använda strängar",
    // "All Pages"
    translationShowAllPages: "Visa alla sidor",
    // "No strings to translate. Please change the filter."
    translationNoStrings: "Inga strängar är översatta. Vänligen ändra filtret.",
    // "Export to CSV"
    translationExportToSCVButton: "Exportera till CSV",
    // "Import from CSV"
    translationImportFromSCVButton: "Importera från CSV",
    // [Auto-translated] "Auto-translate All"
    translateUsigAI: "Översätt alla automatiskt",
    // [Auto-translated] "Translate from: "
    translateUsigAIFrom: "Översätt från: ",
    // [Auto-translated] "Untranslated strings"
    translationDialogTitle: "Oöversatta strängar",
    // "Merge {0} with default locale"
    translationMergeLocaleWithDefault: "Mergea {0} med standard språk",
    // [Auto-translated] "Translation..."
    translationPlaceHolder: "Översättning...",
    // [Auto-translated] "Source: "
    translationSource: "Källa: ",
    // [Auto-translated] "Target: "
    translationTarget: "Mål: ",
    // [Auto-translated] "YouTube links are not supported."
    translationYouTubeNotSupported: "YouTube-länkar stöds inte.",
    // [Auto-translated] "Export"
    themeExportButton: "Export",
    // [Auto-translated] "Import"
    themeImportButton: "Import",
    // [Auto-translated] "Export"
    surveyJsonExportButton: "Export",
    // [Auto-translated] "Import"
    surveyJsonImportButton: "Import",
    // [Auto-translated] "Copy to clipboard"
    surveyJsonCopyButton: "Kopiera till Urklipp",
    // [Auto-translated] "Reset theme settings to default"
    themeResetButton: "Återställ temainställningarna till standard",
    // [Auto-translated] "Do you really want to reset the theme? All your customizations will be lost."
    themeResetConfirmation: "Vill du verkligen återställa temat? Alla dina anpassningar kommer att gå förlorade.",
    // [Auto-translated] "Yes, reset the theme"
    themeResetConfirmationOk: "Ja, återställ temat",
    // [Auto-translated] "Bold"
    bold: "Djärv",
    // [Auto-translated] "Italic"
    italic: "Kursiv",
    // [Auto-translated] "Underline"
    underline: "Understryka",
    // [Auto-translated] "Add Question"
    addNewQuestion: "Lägg till fråga",
    // [Auto-translated] "Select page..."
    selectPage: "Välj sida...",
    // [Auto-translated] "Choices are copied from"
    carryForwardChoicesCopied: "Alternativen kopieras från",
    // [Auto-translated] "Choices are loaded from a web service."
    choicesLoadedFromWebText: "Alternativen läses in från en webbtjänst.",
    // [Auto-translated] "Go to settings"
    choicesLoadedFromWebLinkText: "Gå till inställningar",
    // [Auto-translated] "Preview of loaded choice options"
    choicesLoadedFromWebPreviewTitle: "Förhandsgranskning av inlästa alternativalternativ",
    // [Auto-translated] "HTML content will be here."
    htmlPlaceHolder: "HTML-innehåll kommer att finnas här.",
    // [Auto-translated] "Drop a question from the toolbox here."
    panelPlaceHolder: "Släpp en fråga från verktygslådan här.",
    // [Auto-translated] "The survey is empty. Drag an element from the toolbox or click the button below."
    surveyPlaceHolder: "Enkäten är tom. Dra ett element från verktygslådan eller klicka på knappen nedan.",
    // [Auto-translated] "The page is empty. Drag an element from the toolbox or click the button below."
    pagePlaceHolder: "Sidan är tom. Dra ett element från verktygslådan eller klicka på knappen nedan.",
    // [Auto-translated] "Drag and drop an image here or click the button below and choose an image to upload"
    imagePlaceHolder: "Dra och släpp en bild här eller klicka på knappen nedan och välj en bild att ladda upp",
    // "Click the \"Add Question\" button below to start creating your form."
    surveyPlaceHolderMobile: "Klicka på knappen \"Lägg till fråga\" nedan för att börja skapa ditt formulär.",
    // [Auto-translated] "Your form is empty"
    surveyPlaceholderTitle: "Formuläret är tomt",
    // [Auto-translated] "Your form is empty"
    surveyPlaceholderTitleMobile: "Formuläret är tomt",
    // [Auto-translated] "Drag an element from the toolbox or click the button below."
    surveyPlaceholderDescription: "Dra ett element från verktygslådan eller klicka på knappen nedan.",
    // [Auto-translated] "Drag an element from the toolbox or click the button below."
    surveyPlaceholderDescriptionMobile: "Dra ett element från verktygslådan eller klicka på knappen nedan.",
    // [Auto-translated] "No preview"
    previewPlaceholderTitle: "Ingen förhandsgranskning",
    // [Auto-translated] "No preview"
    previewPlaceholderTitleMobile: "Ingen förhandsgranskning",
    // [Auto-translated] "The survey doesn't contain any visible elements."
    previewPlaceholderDescription: "Undersökningen innehåller inga synliga element.",
    // [Auto-translated] "The survey doesn't contain any visible elements."
    previewPlaceholderDescriptionMobile: "Undersökningen innehåller inga synliga element.",
    // [Auto-translated] "No strings to translate"
    translationsPlaceholderTitle: "Inga strängar att översätta",
    // [Auto-translated] "No strings to translate"
    translationsPlaceholderTitleMobile: "Inga strängar att översätta",
    // [Auto-translated] "Add elements to your form or change the strings filter in the toolbar."
    translationsPlaceholderDescription: "Lägg till element i formuläret eller ändra strängfiltret i verktygsfältet.",
    // [Auto-translated] "Add elements to your form or change the strings filter in the toolbar."
    translationsPlaceholderDescriptionMobile: "Lägg till element i formuläret eller ändra strängfiltret i verktygsfältet.",
    // "Click the \"Add Question\" button below to add a new element to the page."
    pagePlaceHolderMobile: "Klicka på knappen \"Lägg till fråga\" nedan för att lägga till ett nytt element på sidan.",
    // "Click the \"Add Question\" button below to add a new element to the panel."
    panelPlaceHolderMobile: "Klicka på knappen \"Lägg till fråga\" nedan för att lägga till ett nytt element i panelen.",
    // [Auto-translated] "Click the button below and choose an image to upload"
    imagePlaceHolderMobile: "Klicka på knappen nedan och välj en bild att ladda upp",
    // [Auto-translated] "Choose Image"
    imageChooseImage: "Välj bild",
    // [Auto-translated] "Add {0}"
    addNewTypeQuestion: "Lägg till {0}", // {0} is localizable question type
    // [Auto-translated] "[LOGO]"
    chooseLogoPlaceholder: "[LOGOTYP]",
    // [Auto-translated] "Item "
    choices_Item: "Sak ",
    // [Auto-translated] "Select a file"
    selectFile: "Välj en fil",
    // [Auto-translated] "Remove the file"
    removeFile: "Ta bort filen",
    lg: {
      // [Auto-translated] "Add New Rule"
      addNewItem: "Lägg till ny regel",
      // [Auto-translated] "Create a rule to customize the flow of the survey."
      empty_tab: "Skapa en regel för att anpassa undersökningens flöde.",
      // [Auto-translated] "No logical rules"
      logicPlaceholderTitle: "Inga logiska regler",
      // [Auto-translated] "No logical rules"
      logicPlaceholderTitleMobile: "Inga logiska regler",
      // [Auto-translated] "Create a rule to customize the flow of the survey."
      logicPlaceholderDescription: "Skapa en regel för att anpassa flödet i undersökningen.",
      // [Auto-translated] "Create a rule to customize the flow of the survey."
      logicPlaceholderDescriptionMobile: "Skapa en regel för att anpassa flödet i undersökningen.",
      // [Auto-translated] "Show (hide) page"
      page_visibilityName: "Visa (dölj) sida",
      // [Auto-translated] "Enable (disable) page"
      page_enableName: "Aktivera (inaktivera) sida",
      // [Auto-translated] "Make page required"
      page_requireName: "Gör sidan obligatorisk",
      // [Auto-translated] "Show (hide) panel"
      panel_visibilityName: "Visa (dölj) panelen",
      // [Auto-translated] "Enable (disable) panel"
      panel_enableName: "Aktivera (inaktivera) panelen",
      // [Auto-translated] "Make page required"
      panel_requireName: "Gör sidan obligatorisk",
      // [Auto-translated] "Show (hide) question"
      question_visibilityName: "Visa (dölj) fråga",
      // [Auto-translated] "Enable (disable) question"
      question_enableName: "Aktivera (inaktivera) fråga",
      // [Auto-translated] "Make question required"
      question_requireName: "Gör frågan obligatorisk",
      // [Auto-translated] "Reset question value"
      question_resetValueName: "Återställ frågevärde",
      // [Auto-translated] "Set question value"
      question_setValueName: "Ange frågevärde",
      // [Auto-translated] "Show (hide) column"
      column_visibilityName: "Visa (dölj) kolumn",
      // [Auto-translated] "Enable (disable) column"
      column_enableName: "Aktivera (inaktivera) kolumn",
      // [Auto-translated] "Make column required"
      column_requireName: "Gör kolumnen obligatorisk",
      // [Auto-translated] "Reset column value"
      column_resetValueName: "Återställ kolumnvärde",
      // [Auto-translated] "Set column value"
      column_setValueName: "Ange kolumnvärde",
      // [Auto-translated] "Complete survey"
      trigger_completeName: "Fullständig undersökning",
      // [Auto-translated] "Set answer"
      trigger_setvalueName: "Ställ in svar",
      // [Auto-translated] "Copy answer"
      trigger_copyvalueName: "Kopiera svar",
      // [Auto-translated] "Skip to question"
      trigger_skipName: "Hoppa till fråga",
      // [Auto-translated] "Run expression"
      trigger_runExpressionName: "Kör uttryck",
      // "Set \"Thank You\" page markup"
      completedHtmlOnConditionName: "Ställ in sidmarkeringen \"Undersökningen slutförd\"",
      // [Auto-translated] "Make the page visible when the logic expression returns true. Otherwise keep it invisible."
      page_visibilityDescription: "Gör sidan synlig när logikuttrycket returnerar true. Håll den annars osynlig.",
      // [Auto-translated] "Make the panel visible when the logic expression returns true. Otherwise keep it invisible."
      panel_visibilityDescription: "Gör panelen synlig när logikuttrycket returnerar true. Håll den annars osynlig.",
      // [Auto-translated] "Make the panel, and all elements inside it, enable when the logic expression returns true. Otherwise keep them disabled."
      panel_enableDescription: "Aktivera panelen och alla element inuti den när logikuttrycket returnerar true. Håll dem annars inaktiverade.",
      // [Auto-translated] "Make the question visible when the logic expression returns true. Otherwise keep it invisible."
      question_visibilityDescription: "Gör frågan synlig när logikuttrycket returnerar true. Håll den annars osynlig.",
      // [Auto-translated] "Make the question enable when the logic expression returns true. Otherwise keep it disabled."
      question_enableDescription: "Aktivera frågan när logikuttrycket returnerar true. Annars ska du hålla den inaktiverad.",
      // [Auto-translated] "Question becomes required when the logic expression returns true."
      question_requireDescription: "Frågan blir obligatorisk när logikuttrycket returnerar true.",
      // [Auto-translated] "When the logic expression returns true then the survey becomes completed and an end-user see the 'Thank you page'."
      trigger_completeDescription: "När logikuttrycket returnerar true slutförs undersökningen och en slutanvändare ser tacksidan.",
      // [Auto-translated] "When question values, that are used in the logic expression, are changed and the logic expression returns true, then the value is set to the selected question."
      trigger_setvalueDescription: "När frågevärden, som används i logikuttrycket, ändras och logikuttrycket returnerar true, anges värdet till den valda frågan.",
      // [Auto-translated] "When question values, that are used in the logic expression, are changed and the logic expression returns true, then the value of one selected question is copied to another selected question."
      trigger_copyvalueDescription: "När frågevärden, som används i logikuttrycket, ändras och logikuttrycket returnerar true, kopieras värdet för en markerad fråga till en annan markerad fråga.",
      // [Auto-translated] "When the logic expression returns true then the survey skip to / focus the selected question."
      trigger_skipDescription: "När logikuttrycket returnerar true hoppar undersökningen till / fokuserar den valda frågan.",
      // [Auto-translated] "When the logic expression returns true, then the custom expression is performed. You may optionally set this expression result into the selected question"
      trigger_runExpressionDescription: "När logikuttrycket returnerar true utförs det anpassade uttrycket. Om du vill kan du ange detta uttrycksresultat i den valda frågan",
      // [Auto-translated] "If the logic expression returns true, then the default text for the 'Thank you page' is changed to the given one."
      completedHtmlOnConditionDescription: "Om logikuttrycket returnerar true ändras standardtexten för tacksidan till den angivna.",
      // "When expression: '{0}' returns true"
      itemExpressionText: "När uttryck: \"{0}\" returnerar true", // {0} - the expression
      // [Auto-translated] "New rule"
      itemEmptyExpressionText: "Ny regel",
      // [Auto-translated] "make page {0} visible"
      page_visibilityText: "Gör sidan {0} synlig", // {0} page name
      // [Auto-translated] "make panel {0} visible"
      panel_visibilityText: "Gör panelen {0} synlig", // {0} panel name
      // [Auto-translated] "make panel {0} enable"
      panel_enableText: "Gör panelen {0} aktivera", // {0} panel name
      // [Auto-translated] "make question {0} visible"
      question_visibilityText: "Gör frågan {0} synlig", // {0} question name
      // [Auto-translated] "make question {0} enable"
      question_enableText: "Gör frågan {0} aktivera", // {0} question name
      // [Auto-translated] "make question {0} required"
      question_requireText: "Gör frågan {0} krävs", // {0} question name
      // [Auto-translated] "reset value for question: {0}"
      question_resetValueText: "Återställ värde för fråga: {0}", // {0} question name.
      // [Auto-translated] "assign value: {1} to question: {0}"
      question_setValueText: "Tilldela värde: {1} till fråga: {0}",
      // [Auto-translated] "make column {0} of question {1} visible"
      column_visibilityText: "Synliggör kolumn {0} av fråga {1}", // {0} column name, {1} question name
      // [Auto-translated] "make column {0} of question {1} enable"
      column_enableText: "Gör kolumn {0} av fråga {1} aktivera", // {0} column name, {1} question name
      // [Auto-translated] "make column {0} of question {1} required"
      column_requireText: "Gör kolumn {0} av fråga {1} krävs", // {0} column name, {1} question name
      // [Auto-translated] "reset cell value for column: {0}"
      column_resetValueText: "Återställ cellvärde för kolumn: {0}", // {0} column name
      // [Auto-translated] "assign cell value: {1} to column: {0}"
      column_setValueText: "Tilldela cellvärde: {1} till kolumn: {0}", // {0} column name and {1} setValueExpression
      // [Auto-translated] " An expression whose result will be assigned to the target question."
      setValueExpressionPlaceholder: " Ett uttryck vars resultat kommer att tilldelas målfrågan.",
      // [Auto-translated] "survey becomes completed"
      trigger_completeText: "Undersökningen blir slutförd",
      // [Auto-translated] "set into question: {0} value {1}"
      trigger_setvalueText: "ifrågasätts: {0} värde {1}", // {0} question name, {1} setValue
      // [Auto-translated] "clear question value: {0}"
      trigger_setvalueEmptyText: "Tydligt frågevärde: {0}", // {0} question name
      // [Auto-translated] "copy into question: {0} value from question {1}"
      trigger_copyvalueText: "Kopiera till fråga: {0} värde från fråga {1}", // {0} and {1} question names
      // [Auto-translated] "survey skip to the question {0}"
      trigger_skipText: "Enkät hoppa till frågan {0}", // {0} question name
      // [Auto-translated] "run expression: '{0}'"
      trigger_runExpressionText1: "kör uttryck: '{0}'", // {0} the expression
      // [Auto-translated] " and set its result into question: {0}"
      trigger_runExpressionText2: " och ifrågasatte resultatet: {0}", // {0} question name
      // [Auto-translated] "show custom text for the 'Thank you page'."
      completedHtmlOnConditionText: "visa anpassad text för tacksidan.",
      // [Auto-translated] "All Questions"
      showAllQuestions: "Alla frågor",
      // [Auto-translated] "All Action Types"
      showAllActionTypes: "Alla åtgärdstyper",
      // [Auto-translated] "Condition(s)"
      conditions: "Skick",
      // [Auto-translated] "Action(s)"
      actions: "Åtgärd(er)",
      // [Auto-translated] "Define condition(s)"
      expressionEditorTitle: "Definiera villkor",
      // [Auto-translated] "Define action(s)"
      actionsEditorTitle: "Definiera åtgärder",
      // [Auto-translated] "Delete Action"
      deleteAction: "Ta bort åtgärd",
      // [Auto-translated] "Add Action"
      addNewAction: "Lägg till åtgärd",
      // [Auto-translated] "Select action..."
      selectedActionCaption: "Välj åtgärd...",
      // [Auto-translated] "The logic expression is empty or invalid. Please correct it."
      expressionInvalid: "Logikuttrycket är tomt eller ogiltigt. Var snäll och rätta till det.",
      // [Auto-translated] "Please, add at least one action."
      noActionError: "Lägg till minst en åtgärd.",
      // [Auto-translated] "Please, fix problems in your action(s)."
      actionInvalid: "Snälla, åtgärda problem i dina åtgärder.",
      // [Auto-translated] "Logical rules are incomplete"
      uncompletedRule_title: "Logiska regler är ofullständiga",
      // [Auto-translated] "You have not completed some of the logical rules. If you leave the tab now, the changes will be lost. Do you still want to leave the tab without completing the changes?"
      uncompletedRule_text: "Du har inte slutfört några av de logiska reglerna. Om du lämnar fliken nu kommer ändringarna att gå förlorade. Vill du fortfarande lämna fliken utan att slutföra ändringarna?",
      // [Auto-translated] "Yes"
      uncompletedRule_apply: "Ja",
      // [Auto-translated] "No, I want to complete the rules"
      uncompletedRule_cancel: "Nej, jag vill komplettera reglerna"
    }
  },
  // Property Editors
  pe: {
    panel: {
      // [Auto-translated] "Panel name"
      name: "Panelens namn",
      // [Auto-translated] "Panel title"
      title: "Panelens titel",
      // [Auto-translated] "Panel description"
      description: "Beskrivning av panelen",
      // [Auto-translated] "Make the panel visible if"
      visibleIf: "Gör panelen synlig om",
      // [Auto-translated] "Make the panel required if"
      requiredIf: "Gör panelen obligatorisk om",
      // [Auto-translated] "Question order within the panel"
      questionOrder: "Frågeordning i panelen",
      // [Auto-translated] "Repositions the panel to the end of a selected page."
      page: "Överordnad sida",
      // [Auto-translated] "Display the panel on a new line"
      startWithNewLine: "Visa panelen på en ny rad",
      // [Auto-translated] "Panel expand state"
      state: "Panelens komprimerade tillstånd",
      // [Auto-translated] "Width (in CSS-accepted values)"
      width: "Bredd på infogad panel",
      // [Auto-translated] "Minimum width (in CSS-accepted values)"
      minWidth: "Minsta panelbredd",
      // [Auto-translated] "Maximum width (in CSS-accepted values)"
      maxWidth: "Maximal panelbredd",
      // [Auto-translated] "Show panel number"
      showNumber: "Numrera den här panelen"
    },
    panellayoutcolumn: {
      // [Auto-translated] "Ex.: 30%"
      effectiveWidth: "Effektiv bredd, %",
      // [Auto-translated] "Question title width"
      questionTitleWidth: "Frågans titelbredd, px"
    },
    paneldynamic: {
      // [Auto-translated] "Panel name"
      name: "Panelens namn",
      // [Auto-translated] "Panel title"
      title: "Panelens titel",
      // [Auto-translated] "Panel description"
      description: "Beskrivning av panelen",
      // [Auto-translated] "Entry display mode"
      displayMode: "Visningsläge för inmatning",
      // [Auto-translated] "Make the panel visible if"
      visibleIf: "Gör panelen synlig om",
      // [Auto-translated] "Make the panel required if"
      requiredIf: "Gör panelen obligatorisk om",
      // [Auto-translated] "Move the panel to page"
      page: "Flytta panelen till sidan",
      // [Auto-translated] "Display the panel on a new line"
      startWithNewLine: "Visa panelen på en ny rad",
      // [Auto-translated] "Panel collapse state"
      state: "Panelens komprimerade tillstånd",
      // [Auto-translated] "Inline panel width"
      width: "Bredd på infogad panel",
      // [Auto-translated] "Minimum panel width"
      minWidth: "Minsta panelbredd",
      // [Auto-translated] "Maximum panel width"
      maxWidth: "Maximal panelbredd",
      // [Auto-translated] "Confirm row removal"
      confirmDelete: "Bekräfta borttagning av panelen",
      // [Auto-translated] "Description template"
      templateDescription: "Mönster för panelbeskrivning",
      // [Auto-translated] "Title template"
      templateTitle: "Mönster för panelrubrik",
      // [Auto-translated] "Empty entries text"
      noEntriesText: "Tom paneltext",
      // [Auto-translated] "Tab title pattern"
      templateTabTitle: "Mönster för flikrubrik",
      // [Auto-translated] "Tab title placeholder"
      tabTitlePlaceholder: "Platshållare för flikrubrik",
      // [Auto-translated] "Make an individual panel visible if"
      templateVisibleIf: "Gör en enskild panel synlig om",
      // [Auto-translated] "Number the panel"
      showNumber: "Numrera panelen",
      // [Auto-translated] "Panel title alignment"
      titleLocation: "Justering av panelrubrik",
      // [Auto-translated] "Panel description alignment"
      descriptionLocation: "Justering av panelbeskrivning",
      // [Auto-translated] "Question title location"
      templateQuestionTitleLocation: "Justering av frågerubrik",
      // [Auto-translated] "Question title width"
      templateQuestionTitleWidth: "Bredd på frågetitel",
      // [Auto-translated] "Error message alignment"
      templateErrorLocation: "Justering av felmeddelande",
      // [Auto-translated] "New panel location"
      newPanelPosition: "Ny panelplats",
      // [Auto-translated] "Show progress bar"
      showRangeInProgress: "Visa förloppsindikatorn",
      // [Auto-translated] "Key column"
      keyName: "Förhindra dubbletter av svar i följande fråga"
    },
    question: {
      // [Auto-translated] "Question name"
      name: "Frågans namn",
      // [Auto-translated] "Question title"
      title: "Frågans rubrik",
      // [Auto-translated] "Question description"
      description: "Beskrivning av frågan",
      // [Auto-translated] "Show the title and description"
      showTitle: "Visa titel och beskrivning",
      // [Auto-translated] "Make the question visible if"
      visibleIf: "Gör frågan synlig om",
      // [Auto-translated] "Make the question required if"
      requiredIf: "Gör frågan obligatorisk om",
      // [Auto-translated] "Parent page"
      page: "Överordnad sida",
      // [Auto-translated] "Question box collapse state"
      state: "Komprimeringstillstånd för frågeruta",
      // [Auto-translated] "Number this question"
      showNumber: "Numrera den här frågan",
      // [Auto-translated] "Question title alignment"
      titleLocation: "Justering av frågerubrik",
      // [Auto-translated] "Question description alignment"
      descriptionLocation: "Justering av frågebeskrivning",
      // [Auto-translated] "Error message alignment"
      errorLocation: "Justering av felmeddelande",
      // [Auto-translated] "Add indents"
      indent: "Öka det inre indraget",
      // [Auto-translated] "Inline question width"
      width: "Bredd på infogade frågor",
      // [Auto-translated] "Minimum question width"
      minWidth: "Minsta frågebredd",
      // [Auto-translated] "Maximum question width"
      maxWidth: "Maximal frågebredd",
      // [Auto-translated] "Update text question value"
      textUpdateMode: "Uppdatera indatafältsvärde"
    },
    signaturepad: {
      // [Auto-translated] "Signature width"
      signatureWidth: "Signaturområdets bredd",
      // [Auto-translated] "Signature height"
      signatureHeight: "Signaturområdets höjd",
      // [Auto-translated] "Auto-scale the signature area"
      signatureAutoScaleEnabled: "Skala signaturområdet automatiskt",
      // [Auto-translated] "Show the placeholder"
      showPlaceholder: "Visa platshållaren",
      // [Auto-translated] "Placeholder text"
      placeholder: "Platshållartext",
      // [Auto-translated] "Placeholder text in read-only or preview mode"
      placeholderReadOnly: "Platshållartext i skrivskyddat läge eller förhandsgranskningsläge",
      // [Auto-translated] "Show the Clear button"
      allowClear: "Visa knappen Rensa i signaturområdet",
      // [Auto-translated] "Minimum pen width"
      penMinWidth: "Minsta pennbredd",
      // [Auto-translated] "Maximum pen width"
      penMaxWidth: "Maximal pennbredd",
      // [Auto-translated] "Stroke color"
      penColor: "Linjefärg"
    },
    comment: {
      // [Auto-translated] "Input field height (in lines)"
      rows: "Inmatningsfältets höjd (i rader)"
    },
    // "Question numbering"
    showQuestionNumbers: "Visa frågenummer",
    // "Question indexing type"
    questionStartIndex: "Fråga start index (1, 2 eller 'A', 'a')",
    // [Auto-translated] "Expression"
    expression: {
      // [Auto-translated] "Expression name"
      name: "Namn på uttryck",
      // [Auto-translated] "Expression title"
      title: "Uttryckets titel",
      // [Auto-translated] "Expression description"
      description: "Beskrivning av uttryck",
      // [Auto-translated] "Expression"
      expression: "Uttryck"
    },
    trigger: {
      // [Auto-translated] "Expression"
      expression: "Uttryck"
    },
    calculatedvalue: {
      // [Auto-translated] "Expression"
      expression: "Uttryck"
    },
    // survey templates
    survey: {
      // [Auto-translated] "Title"
      title: "Titel",
      // [Auto-translated] "Survey description"
      description: "Beskrivning av undersökningen",
      // [Auto-translated] "Read-only"
      readOnly: "Gör undersökningen skrivskyddad"
    },
    page: {
      // [Auto-translated] "Page name"
      name: "Sidans namn",
      // [Auto-translated] "Title"
      title: "Titel",
      // [Auto-translated] "Page description"
      description: "Beskrivning av sidan",
      // [Auto-translated] "Make the page visible if"
      visibleIf: "Gör sidan synlig om",
      // [Auto-translated] "Make the page required if"
      requiredIf: "Gör sidan obligatorisk om",
      // [Auto-translated] "Time limit to finish the page (in seconds)"
      timeLimit: "Tidsgräns för att avsluta sidan (i sekunder)",
      // [Auto-translated] "Question order on the page"
      questionOrder: "Frågeordning på sidan"
    },
    matrixdropdowncolumn: {
      // [Auto-translated] "Column name"
      name: "Kolumnens namn",
      // [Auto-translated] "Column title"
      title: "Kolumnens rubrik",
      // [Auto-translated] "Prevent duplicate responses"
      isUnique: "Förhindra dubbletter av svar",
      // [Auto-translated] "Column width"
      width: "Kolumnbredd",
      // [Auto-translated] "Minimum column width"
      minWidth: "Minsta kolumnbredd",
      // [Auto-translated] "Input field height (in lines)"
      rows: "Inmatningsfältets höjd (i rader)",
      // [Auto-translated] "Make the column visible if"
      visibleIf: "Gör kolumnen synlig om",
      // [Auto-translated] "Make the column required if"
      requiredIf: "Gör kolumnen obligatorisk om",
      // [Auto-translated] "Each option in a separate column"
      showInMultipleColumns: "Varje alternativ i en separat kolumn"
    },
    multipletextitem: {
      // [Auto-translated] "Name"
      name: "Namn",
      // [Auto-translated] "Title"
      title: "Titel"
    },
    masksettings: {
      // [Auto-translated] "Save masked value in survey results"
      saveMaskedValue: "Spara maskerat värde i undersökningsresultat"
    },
    patternmask: {
      // [Auto-translated] "Value pattern"
      pattern: "Värdemönster"
    },
    datetimemask: {
      // [Auto-translated] "Minimum value"
      min: "Minsta värde",
      // [Auto-translated] "Maximum value"
      max: "Maximalt värde"
    },
    numericmask: {
      // [Auto-translated] "Allow negative values"
      allowNegativeValues: "Tillåt negativa värden",
      // [Auto-translated] "Thousands separator"
      thousandsSeparator: "Avgränsare för tusental",
      // [Auto-translated] "Decimal separator"
      decimalSeparator: "Decimaltecknet",
      // [Auto-translated] "Value precision"
      precision: "Värde precision",
      // [Auto-translated] "Minimum value"
      min: "Minsta värde",
      // [Auto-translated] "Maximum value"
      max: "Maximalt värde"
    },
    currencymask: {
      // [Auto-translated] "Currency prefix"
      prefix: "Prefix för valuta",
      // [Auto-translated] "Currency suffix"
      suffix: "Valutasuffix"
    },
    // [Auto-translated] "Clear others when selected"
    isExclusive: "Rensa andra när du väljer det här alternativet",
    // [Auto-translated] "Require user to enter a comment"
    isCommentRequired: "Kräv att användaren anger en kommentar",
    // "Display area height"
    imageHeight: "Bild höjd",
    // "Display area width"
    imageWidth: "Bild bredd",
    // "Join identifier"
    valueName: "Värde namn",
    // [Auto-translated] "Default display value for dynamic texts"
    defaultDisplayValue: "Standardvisningsvärde för dynamiska texter",
    // [Auto-translated] "Label alignment"
    rateDescriptionLocation: "Justering av etiketter",
    // [Auto-translated] "Input field size (in characters)"
    size: "Inmatningsfältets storlek (i tecken)",
    // [Auto-translated] "Cell error message alignment"
    cellErrorLocation: "Justering av cellfelmeddelande",
    // [Auto-translated] "Enabled"
    enabled: "Aktiverat",
    // [Auto-translated] "Disabled"
    disabled: "Inaktiverad",
    // [Auto-translated] "Inherit"
    inherit: "Ärva",
    // "Apply"
    apply: "Faställ",
    // "OK"
    ok: "OK",
    // [Auto-translated] "Save"
    save: "Spara",
    // [Auto-translated] "Clear"
    clear: "Klar",
    // [Auto-translated] "Save"
    saveTooltip: "Spara",
    // "Cancel"
    cancel: "Avbryt",
    // [Auto-translated] "Set"
    set: "Ställa",
    // "Reset"
    reset: "Återställ",
    // [Auto-translated] "Change"
    change: "Förändring",
    // [Auto-translated] "Refresh"
    refresh: "Svalka",
    // "Close"
    close: "Stäng",
    // "Delete"
    delete: "Radera",
    // [Auto-translated] "Add"
    add: "Addera",
    // "Add New"
    addNew: "Lägg till ny",
    // "Click to add an item..."
    addItem: "Klicka för att lägga till...",
    // [Auto-translated] "Click to remove the item..."
    removeItem: "Klicka för att ta bort objektet...",
    // [Auto-translated] "Drag the item"
    dragItem: "Dra objektet",
    // [Auto-translated] "Other"
    addOther: "Annan",
    // [Auto-translated] "Select All"
    addSelectAll: "Markera alla",
    // [Auto-translated] "None"
    addNone: "Ingen",
    // "Remove All"
    removeAll: "Ta bort allt",
    // "Edit"
    edit: "Redigera",
    // [Auto-translated] "Return without saving"
    back: "Returnera utan att spara",
    // [Auto-translated] "Return without saving"
    backTooltip: "Returnera utan att spara",
    // [Auto-translated] "Save and return"
    saveAndBack: "Spara och returnera",
    // [Auto-translated] "Save and return"
    saveAndBackTooltip: "Spara och returnera",
    // [Auto-translated] "Done"
    doneEditing: "Färdig",
    // "Edit Choices"
    editChoices: "Redigera val",
    // [Auto-translated] "Show Choices"
    showChoices: "Visa alternativ",
    // "Move"
    move: "Flytta",
    // "<empty>"
    empty: "<tom>",
    // [Auto-translated] "Value is empty"
    emptyValue: "Värdet är tomt",
    // "Manual Entry"
    fastEntry: "Snabb ifyllning",
    // "Value '{0}' is not unique"
    fastEntryNonUniqueError: "Värdet \"{0}\" är inte unikt",
    // [Auto-translated] "Please limit the number of items from {0} to {1}"
    fastEntryChoicesCountError: "Begränsa antalet artiklar från {0} till {1}",
    // [Auto-translated] "Please enter at least {0} items"
    fastEntryChoicesMinCountError: "Ange minst {0} artiklar",
    // [Auto-translated] "You can set data in the following format:\nvalue1|text\nvalue2"
    fastEntryPlaceholder: "Du kan ange data i följande format:\nvärde1|text\nvärde2",
    // "Form Entry"
    formEntry: "Ifyllning i enkäten",
    // "Test the service"
    testService: "Testa tjänsten",
    // [Auto-translated] "Please select the element"
    itemSelectorEmpty: "Välj elementet",
    // [Auto-translated] "Please select the action"
    conditionActionEmpty: "Välj åtgärd",
    // "Select a question..."
    conditionSelectQuestion: "Välj fråga...",
    // [Auto-translated] "Select page..."
    conditionSelectPage: "Välj sida...",
    // [Auto-translated] "Select panel..."
    conditionSelectPanel: "Välj panel...",
    // "Please enter/select the value"
    conditionValueQuestionTitle: "Vänligen skriv in/välj värdet",
    // "Press ctrl+space to get expression completion hint"
    aceEditorHelp: "Tryck ctrl+mellanslag för att få en ledtråd",
    // "Current row"
    aceEditorRowTitle: "Nuvarande rad",
    // "Current panel"
    aceEditorPanelTitle: "Nuvarande panel",
    // "For more details please check the documentation"
    showMore: "För mer detaljer - se dokumentationen",
    // "Available questions"
    assistantTitle: "Tillgängliga frågor:",
    // "There is should be at least one column or row"
    cellsEmptyRowsColumns: "Det bör vara minst 1 kolumn eller rad",
    // [Auto-translated] "Preview answers before submitting the survey"
    showPreviewBeforeComplete: "Förhandsgranska svar innan du skickar in undersökningen",
    // [Auto-translated] "Set by "
    overridingPropertyPrefix: "Inställd av ",
    // [Auto-translated] "Reset"
    resetToDefaultCaption: "Nollställa",
    // "Please enter a value"
    propertyIsEmpty: "Vänligen fyll i ett värde",
    // [Auto-translated] "Please enter a unique value"
    propertyIsNoUnique: "Ange ett unikt värde",
    // [Auto-translated] "Please enter a unique name"
    propertyNameIsNotUnique: "Ange ett unikt namn",
    // "Do not use reserved words: \"item\", \"choice\", \"panel\", \"row\"."
    propertyNameIsIncorrect: "Använd inte reserverade ord: \"objekt\", \"val\", \"panel\", \"rad\".",
    // [Auto-translated] "No items have been added yet"
    listIsEmpty: "Inga objekt har lagts till ännu",
    // [Auto-translated] "No choices have been added yet"
    "listIsEmpty@choices": "Inga alternativ har lagts till ännu",
    // [Auto-translated] "You don't have any columns yet"
    "listIsEmpty@columns": "Du har inga kolumner ännu",
    // [Auto-translated] "You don't have layout columns yet"
    "listIsEmpty@gridLayoutColumns": "Du har inga layoutkolumner ännu",
    // [Auto-translated] "You don't have any rows yet"
    "listIsEmpty@rows": "Du har inga rader ännu",
    // [Auto-translated] "You don't have any validation rules yet"
    "listIsEmpty@validators": "Du har inga valideringsregler ännu",
    // [Auto-translated] "You don't have any custom variables yet"
    "listIsEmpty@calculatedValues": "Du har inga anpassade variabler ännu",
    // [Auto-translated] "You don't have any triggers yet"
    "listIsEmpty@triggers": "Du har inga utlösare ännu",
    // [Auto-translated] "You don't have any links yet"
    "listIsEmpty@navigateToUrlOnCondition": "Du har inga länkar ännu",
    // [Auto-translated] "You don't have any pages yet"
    "listIsEmpty@pages": "Du har inga sidor ännu",
    // [Auto-translated] "Add a choice"
    "addNew@choices": "Lägg till ett val",
    // [Auto-translated] "Add new column"
    "addNew@columns": "Lägg till ny kolumn",
    // [Auto-translated] "Add new row"
    "addNew@rows": "Lägg till ny rad",
    // [Auto-translated] "Add new rule"
    "addNew@validators": "Lägg till ny regel",
    // [Auto-translated] "Add new variable"
    "addNew@calculatedValues": "Lägg till ny variabel",
    // [Auto-translated] "Add new trigger"
    "addNew@triggers": "Lägga till ny utlösare",
    // [Auto-translated] "Add new URL"
    "addNew@navigateToUrlOnCondition": "Lägg till ny URL",
    // [Auto-translated] "Add new page"
    "addNew@pages": "Lägg till ny sida",
    // [Auto-translated] "Expression is empty"
    expressionIsEmpty: "Uttrycket är tomt",
    // "Value"
    value: "Värde",
    // "Text"
    text: "Text",
    // "Row ID"
    rowid: "Rad ID",
    // "Image or video file URL"
    imageLink: "Bild länk",
    // "Edit column: {0}"
    columnEdit: "Redigera kolumn: {0}",
    // "Edit item: {0}"
    itemEdit: "Redigera element: {0}",
    // "URL"
    url: "URL",
    // "Path to data"
    path: "Sökväg",
    choicesbyurl: {
      // [Auto-translated] "Web service's URL"
      url: "Webbtjänstens URL",
      // [Auto-translated] "Get values from the following JSON field"
      valueName: "Hämta värden från följande JSON-fält"
    },
    // "Get value to display from the following property"
    titleName: "Titel namn",
    // [Auto-translated] "Get image URLs from the following JSON field"
    imageLinkName: "Hämta bild-URL:er från följande JSON-fält",
    // [Auto-translated] "Allow empty response"
    allowEmptyResponse: "Tillåt tomt svar",
    // [Auto-translated] "Title"
    titlePlaceholder: "Titel",
    // [Auto-translated] "Survey Title"
    surveyTitlePlaceholder: "Undersökningens titel",
    // [Auto-translated] "Page {num}"
    pageTitlePlaceholder: "Sida {num}",
    // [Auto-translated] "Start Page"
    startPageTitlePlaceholder: "Startsida",
    // [Auto-translated] "Description"
    descriptionPlaceholder: "Beskrivning",
    // [Auto-translated] "Description"
    surveyDescriptionPlaceholder: "Beskrivning",
    // [Auto-translated] "Description"
    pageDescriptionPlaceholder: "Beskrivning",
    // [Auto-translated] "Wrap choices"
    textWrapEnabled: "Radbryt val",
    // "Enable the \"Other\" option"
    showOtherItem: "Har annat element",
    // "Rename the \"Other\" option"
    otherText: "Annat",
    // [Auto-translated] "Allow the None option"
    showNoneItem: "Tillåt alternativet Ingen",
    // [Auto-translated] "Allow the Refuse to Answer option"
    showRefuseItem: "Tillåt alternativet Vägra svara",
    // [Auto-translated] "Allow the Don't Know option"
    showDontKnowItem: "Tillåt alternativet Vet ej",
    // [Auto-translated] "None option text"
    noneText: "Alternativtext för Ingen",
    // [Auto-translated] "Allow the Select All option"
    showSelectAllItem: "Tillåt alternativet Markera allt",
    // [Auto-translated] "Select All option text"
    selectAllText: "Markera all alternativtext",
    // [Auto-translated] "Minimum value for auto-generated items"
    choicesMin: "Minimivärde för automatiskt genererade objekt",
    // [Auto-translated] "Maximum value for auto-generated items"
    choicesMax: "Maximalt värde för automatiskt genererade objekt",
    // [Auto-translated] "Step for auto-generated items"
    choicesStep: "Steg för automatiskt genererade objekt",
    // "Name"
    name: "Namn",
    // "Title"
    title: "Titel",
    // "Cell input type"
    cellType: "Cell typ",
    // "Column count"
    colCount: "Antal kolumner",
    // "Choice order"
    choicesOrder: "Välj ordning på valet",
    // [Auto-translated] "Allow custom choices"
    allowCustomChoices: "Tillåt anpassade val",
    // "Visible"
    visible: "Synlig?",
    // "Required"
    isRequired: "Nödvändig?",
    // [Auto-translated] "Mark as required"
    markRequired: "Markera efter behov",
    // [Auto-translated] "Remove the required mark"
    removeRequiredMark: "Ta bort det obligatoriska märket",
    // [Auto-translated] "Require answer for all rows"
    eachRowRequired: "Kräv svar för alla rader",
    // [Auto-translated] "Prevent duplicate responses in rows"
    eachRowUnique: "Förhindra dubbletter av svar i rader",
    // "Error message for required questions"
    requiredErrorText: "Felmeddelandet \"Obligatoriskt\"",
    // "Display the question on a new line"
    startWithNewLine: "Starta på en ny rad?",
    // "Rows"
    rows: "Antal rader",
    // [Auto-translated] "Columns"
    cols: "Kolumner",
    // "Placeholder text within input field"
    placeholder: "Mata in i fältet",
    // "Show preview area"
    showPreview: "Förhandsvinsning av bild?",
    // "Store file content in JSON result as text"
    storeDataAsText: "Lagra filinnehållet i JSON som text",
    // "Maximum file size (in bytes)"
    maxSize: "Max filstorlek i bytes",
    // "Row count"
    rowCount: "Antal rader",
    // "Columns layout"
    columnLayout: "Stil på kolumn",
    // "\"Add Row\" button alignment"
    addRowButtonLocation: "Lägg till radknapp plats",
    // [Auto-translated] "Transpose rows to columns"
    transposeData: "Transponera rader till kolumner",
    // "\"Add Row\" button text"
    addRowText: "Lägg till knapp text",
    // "\"Remove Row\" button text"
    removeRowText: "Ta bort rad knapp text",
    // [Auto-translated] "Input field title pattern"
    singleInputTitleTemplate: "Titelmönster för inmatningsfält",
    // [Auto-translated] "Minimum rate value"
    rateMin: "Minsta räntevärde",
    // [Auto-translated] "Maximum rate value"
    rateMax: "Högsta taxa",
    // [Auto-translated] "Rate step"
    rateStep: "Betygsätt steg",
    // "Minimum value label"
    minRateDescription: "Minsta betyg beskrivning",
    // "Maximum value label"
    maxRateDescription: "Maximala betyg beskrivning",
    // "Input type"
    inputType: "Indata typ",
    // "Option placeholder"
    optionsCaption: "Text för alternativ",
    // "Default Answer"
    defaultValue: "Standard värde",
    // "Default texts"
    cellsDefaultRow: "Standard cell texter",
    // "Edit survey settings"
    surveyEditorTitle: "Redigera schema inställningar",
    // "Edit: {0}"
    qEditorTitle: "Redigera: {0}",
    // "Maximum character limit"
    maxLength: "Max längd",
    // [Auto-translated] "Build"
    buildExpression: "Bygga",
    // [Auto-translated] "Edit"
    editExpression: "Redigera",
    // [Auto-translated] "and"
    and: "och",
    // [Auto-translated] "or"
    or: "eller",
    // [Auto-translated] "Remove"
    remove: "Avlägsna",
    // [Auto-translated] "Add Condition"
    addCondition: "Lägg till villkor",
    // [Auto-translated] "Select a question to start configuring conditions."
    emptyLogicPopupMessage: "Välj en fråga för att börja konfigurera villkor.",
    // [Auto-translated] "If"
    if: "Om",
    // [Auto-translated] "then"
    then: "då",
    // [Auto-translated] "Target question"
    setToName: "Målfråga",
    // [Auto-translated] "Question to copy answer from"
    fromName: "Fråga att kopiera svar från",
    // [Auto-translated] "Question to skip to"
    gotoName: "Fråga att hoppa till",
    // [Auto-translated] "Rule is incorrect"
    ruleIsNotSet: "Regeln är felaktig",
    // [Auto-translated] "Include into survey results"
    includeIntoResult: "Inkludera i undersökningsresultat",
    // "Make the title and description visible"
    showTitle: "Visa/dölj titel",
    // [Auto-translated] "Expand/collapse title"
    expandCollapseTitle: "Expandera/komprimera titel",
    // "Select a survey language"
    locale: "Standard språk",
    // [Auto-translated] "Select device type"
    simulator: "Välj enhetstyp",
    // [Auto-translated] "Switch to landscape orientation"
    landscapeOrientation: "Växla till liggande orientering",
    // [Auto-translated] "Switch to portrait orientation"
    portraitOrientation: "Växla till stående orientering",
    // "Clear hidden question values"
    clearInvisibleValues: "Rensa osynliga värden",
    // "Limit to one response"
    cookieName: "Kaknamn (för att inaktivera kör enkäten två gånger lokalt)",
    // "Auto-save survey progress on page change"
    partialSendEnabled: "Skicka enkät resultatet till nästa sida",
    // "Save the \"Other\" option value as a separate property"
    storeOthersAsComment: "Lagra 'andra' värden i ett separat fält",
    // "Show page titles"
    showPageTitles: "Visa sidtitel",
    // "Show page numbers"
    showPageNumbers: "Visa sidnummer",
    // "\"Previous Page\" button text"
    pagePrevText: "Föregående",
    // "\"Next Page\" button text"
    pageNextText: "Nästa",
    // "\"Complete Survey\" button text"
    completeText: "Färdig",
    // [Auto-translated] "Preview Answers button text"
    previewText: "Text för knappen Förhandsgranska svar",
    // [Auto-translated] "Edit Answer button text"
    editText: "Text för knappen Redigera svar",
    // "\"Start Survey\" button text"
    startSurveyText: "Start knapp text",
    // "Show navigation buttons"
    showNavigationButtons: "Visa navigationsknappar (standard navigering)",
    // [Auto-translated] "Navigation buttons alignment"
    navigationButtonsLocation: "Justering av navigeringsknappar",
    // "Show the \"Previous Page\" button"
    showPrevButton: "Visa föregående knapp (användaren kan gå återgå till föregående sida)",
    // "First page is a start page"
    firstPageIsStartPage: "Den första sidan i enkäten är startsidan.",
    // "Show the \"Thank You\" page"
    showCompletePage: "Visa den slutförda sidan på slutet (completedHtml)",
    // "Auto-advance to the next page"
    autoAdvanceEnabled: "Vid besvarande av alla frågor, gå till nästa sida automatiskt",
    // [Auto-translated] "Complete the survey automatically"
    autoAdvanceAllowComplete: "Fyll i enkäten automatiskt",
    // "Show the progress bar"
    showProgressBar: "Visa händelsförlopp",
    // [Auto-translated] "Progress bar alignment"
    progressBarLocation: "Justering av förloppsindikator",
    // "Question title alignment"
    questionTitleLocation: "Fråga titel placering",
    // "Question title width"
    questionTitleWidth: "Bredd på frågerubrik",
    // "Required symbol(s)"
    requiredMark: "Var vänlig skriv en text",
    // "Question title template, default is: '{no}. {require} {title}'"
    questionTitleTemplate: "Fråga titel mall, standard är: '{no}. {require} {title}'",
    // "Error message alignment"
    questionErrorLocation: "Fråga fel placerad",
    // "Focus first question on a new page"
    autoFocusFirstQuestion: "Fokusera på första frågan vid ändring av sidan",
    // "Question order"
    questionOrder: "Element ordning på sidan",
    // "Time limit to complete the survey"
    timeLimit: "Max tid för att slutföra enkäten",
    // "Time limit to complete one page"
    timeLimitPerPage: "Max tid för att göra färdigt en sida i enkäten",
    // [Auto-translated] "Use a timer"
    showTimer: "Använd en timer",
    // "Timer alignment"
    timerLocation: "Visa tidtagning",
    // "Timer mode"
    timerInfoMode: "Visa tidtagning läge",
    // "Panel display mode"
    renderMode: "Rendering läge",
    // "Enable entry addition"
    allowAddPanel: "Tillåt att lägga till panel",
    // "Enable entry removal"
    allowRemovePanel: "Tillåt att ta bort panel",
    // "\"Add Entry\" button text"
    addPanelText: "Lägg till panel text",
    // "\"Remove Entry\" button text"
    removePanelText: "Ta bort panel text",
    // "Show all elements on one page"
    isSinglePage: "Visa alla element på en sida",
    // [Auto-translated] "HTML markup"
    html: "HTML-kod",
    // [Auto-translated] "Answer"
    setValue: "Svar",
    // [Auto-translated] "Image format"
    dataFormat: "Bildformat",
    // [Auto-translated] "Allow adding rows"
    allowAddRows: "Tillåt att rader läggs till",
    // [Auto-translated] "Allow removing rows"
    allowRemoveRows: "Tillåt borttagning av rader",
    // [Auto-translated] "Allow row drag and drop"
    allowRowReorder: "Tillåt dra och släpp rader",
    // [Auto-translated] "Does not apply if you specify the exact image width or height."
    responsiveImageSizeHelp: "Gäller inte om du anger bildens exakta bredd eller höjd.",
    // [Auto-translated] "Minimum image width"
    minImageWidth: "Minsta bildbredd",
    // [Auto-translated] "Maximum image width"
    maxImageWidth: "Maximal bildbredd",
    // [Auto-translated] "Minimum image height"
    minImageHeight: "Minsta bildhöjd",
    // [Auto-translated] "Maximum image height"
    maxImageHeight: "Maximal bildhöjd",
    // [Auto-translated] "Minimum value"
    minValue: "Minsta värde",
    // [Auto-translated] "Maximum value"
    maxValue: "Maximalt värde",
    // [Auto-translated] "Case insensitive"
    caseInsensitive: "Skiftlägesokänsligt",
    // [Auto-translated] "Minimum length (in characters)"
    minLength: "Minsta längd (i tecken)",
    // [Auto-translated] "Allow digits"
    allowDigits: "Tillåt siffror",
    // [Auto-translated] "Minimum count"
    minCount: "Minsta antal",
    // [Auto-translated] "Maximum count"
    maxCount: "Maximalt antal",
    // [Auto-translated] "Regular expression"
    regex: "Reguljärt uttryck",
    surveyvalidator: {
      // [Auto-translated] "Error message"
      text: "Felmeddelande",
      // [Auto-translated] "Validation expression"
      expression: "Uttryck för validering"
    },
    // [Auto-translated] "Total row text"
    totalText: "Text för summarad",
    // [Auto-translated] "Total type"
    totalType: "Total typ",
    // [Auto-translated] "Total expression"
    totalExpression: "Totalt uttryck",
    // [Auto-translated] "Total value display style"
    totalDisplayStyle: "Visningsformat för totalt värde",
    // [Auto-translated] "Currency"
    totalCurrency: "Valuta",
    // [Auto-translated] "Formatted string"
    totalFormat: "Formaterad sträng",
    // [Auto-translated] "Logo (URL or base64-encoded string)"
    logo: "Logotyp (URL eller base64-kodad sträng)",
    // [Auto-translated] "Survey structure"
    questionsOnPageMode: "Undersökningens struktur",
    // [Auto-translated] "Maximum answer length (in characters)"
    maxTextLength: "Maximal svarslängd (i tecken)",
    // [Auto-translated] "Maximum comment length (in characters)"
    maxCommentLength: "Maximal kommentarslängd (i tecken)",
    // [Auto-translated] "Comment area height (in lines)"
    commentAreaRows: "Kommentarsfältets höjd (i rader)",
    // [Auto-translated] "Auto-expand comment area if necessary"
    autoGrowComment: "Expandera kommentarsområdet automatiskt om det behövs",
    // [Auto-translated] "Allow users to resize text areas"
    allowResizeComment: "Tillåt användare att ändra storlek på textområden",
    // "Update input field values"
    textUpdateMode: "Uppdatera textfrågevärde",
    // [Auto-translated] "Input mask type"
    maskType: "Typ av indatamask",
    // [Auto-translated] "Set focus on the first invalid answer"
    autoFocusFirstError: "Ställ in fokus på det första ogiltiga svaret",
    // [Auto-translated] "Run validation"
    checkErrorsMode: "Kör validering",
    // [Auto-translated] "Validate empty fields on lost focus"
    validateVisitedEmptyFields: "Validera tomma fält vid förlorat fokus",
    // [Auto-translated] "Navigate to URL"
    navigateToUrl: "Navigera till URL",
    // [Auto-translated] "Dynamic URL"
    navigateToUrlOnCondition: "Dynamisk URL",
    // [Auto-translated] "Markup to show if the user already filled out this survey"
    completedBeforeHtml: "Markering för att visa om användaren redan har fyllt i undersökningen",
    // [Auto-translated] "Survey Complete page markup"
    completedHtml: "Undersökning slutförd sidmarkering",
    // [Auto-translated] "Dynamic Survey Complete page markup"
    completedHtmlOnCondition: "Dynamisk undersökning Fullständig sidmarkering",
    // [Auto-translated] "Markup to show while survey model is loading"
    loadingHtml: "Markering som ska visas medan undersökningsmodellen läses in",
    // [Auto-translated] "Comment area text"
    commentText: "Text i kommentarsområdet",
    // [Auto-translated] "Autocomplete type"
    autocomplete: "Typ av komplettera automatiskt",
    // "Label for \"True\""
    labelTrue: "Etiketten \"Sant\"",
    // "Label for \"False\""
    labelFalse: "Etiketten \"Falskt\"",
    // "Show the Clear button"
    allowClear: "Visa knappen Rensa",
    // [Auto-translated] "Search Mode"
    searchMode: "Sökläge",
    // [Auto-translated] "Value display style"
    displayStyle: "Visningsformat för värde",
    // [Auto-translated] "Formatted string"
    format: "Formaterad sträng",
    // [Auto-translated] "Maximum fractional digits"
    maximumFractionDigits: "Maximala bråktal",
    // [Auto-translated] "Minimum fractional digits"
    minimumFractionDigits: "Minsta bråktal",
    // [Auto-translated] "Display grouping separators"
    useGrouping: "Visa grupperingsavgränsare",
    // [Auto-translated] "Allow multiple files"
    allowMultiple: "Tillåt flera filer",
    // [Auto-translated] "Preview images"
    allowImagesPreview: "Förhandsgranska bilder",
    // [Auto-translated] "Accepted file types"
    acceptedTypes: "Godkända filtyper",
    // [Auto-translated] "Wait for the upload to complete"
    waitForUpload: "Vänta tills uppladdningen är klar",
    // [Auto-translated] "Confirm file deletion"
    needConfirmRemoveFile: "Bekräfta borttagning av fil",
    // [Auto-translated] "Detail panel location"
    detailPanelMode: "Placering på detaljpanelen",
    // [Auto-translated] "Minimum row count"
    minRowCount: "Minsta antal rader",
    // [Auto-translated] "Maximum row count"
    maxRowCount: "Maximalt antal rader",
    // "Confirm row removal"
    confirmDelete: "Bekräfta borttagning av rad",
    // [Auto-translated] "Confirmation message"
    confirmDeleteText: "Bekräftelsemeddelande",
    // [Auto-translated] "Initial panel count"
    panelCount: "Inledande panelantal",
    // [Auto-translated] "Minimum panel count"
    minPanelCount: "Minsta antal paneler",
    // [Auto-translated] "Maximum panel count"
    maxPanelCount: "Maximalt antal paneler",
    // [Auto-translated] "Inner panel expand state"
    panelsState: "Expanderingsläge för innerpanelen",
    // [Auto-translated] "Previous Panel button tooltip"
    prevPanelText: "Knappbeskrivning för föregående panel",
    // [Auto-translated] "Next Panel button tooltip"
    nextPanelText: "Knappbeskrivning för knappen Nästa panel",
    // [Auto-translated] "Remove Panel button location"
    removePanelButtonLocation: "Ta bort panelknappens placering",
    // [Auto-translated] "Hide the question if there are no rows"
    hideIfRowsEmpty: "Dölj frågan om det inte finns några rader",
    // [Auto-translated] "Hide columns if there are no rows"
    hideColumnsIfEmpty: "Dölj kolumner om det inte finns några rader",
    // [Auto-translated] "Custom rate values"
    rateValues: "Anpassade prisvärden",
    // [Auto-translated] "Rate count"
    rateCount: "Antal priser",
    // [Auto-translated] "How to specify rate values?"
    autoGenerate: "Hur anger jag hastighetsvärden?",
    slider: {
      // [Auto-translated] "Min value"
      min: "Minsta värde",
      // [Auto-translated] "Max value"
      max: "Max värde",
      // [Auto-translated] "Step value"
      step: "Steg-värde",
      // [Auto-translated] "Show scale labels"
      showLabels: "Visa skaletiketter",
      // [Auto-translated] "Show tooltips"
      tooltipVisibilityPG: "Visa verktygstips",
      // [Auto-translated] "Allow thumb crossing"
      allowSwap: "Tillåt tumkorsning",
      // [Auto-translated] "Number of auto-generated labels"
      labelCount: "Antal automatiskt genererade etiketter",
      // [Auto-translated] "Min value expression"
      minValueExpression: "Uttryck för minsta värde",
      // [Auto-translated] "Max value expression"
      maxValueExpression: "Uttryck för maximalt värde",
      // [Auto-translated] "Scale labels configuration"
      autoGenerate: "Konfiguration av skalningsetiketter",
      // [Auto-translated] "Slider type"
      sliderType: "Typ av skjutreglage",
      // [Auto-translated] "The minimum distance between the slider thumbs a user can set."
      minRangeLength: "Minsta räckviddslängd",
      // [Auto-translated] "The maximum distance between the slider thumbs a user can set."
      maxRangeLength: "Maximal räckviddslängd",
      // [Auto-translated] "Custom labels"
      customLabels: "Anpassade etiketter",
      // [Auto-translated] "Label format"
      labelFormat: "Etikettens format",
      // [Auto-translated] "Tooltip format"
      tooltipFormat: "Format för knappbeskrivningar"
    },
    file: {
      // [Auto-translated] "Adjusts the height of the image in the survey results."
      imageHeight: "Bildens höjd",
      // [Auto-translated] "Adjusts the width of the image in the survey results."
      imageWidth: "Bildens bredd"
    },
    // [Auto-translated] "Hide the question if it contains no choices"
    hideIfChoicesEmpty: "Dölj frågan om den inte innehåller några alternativ",
    // "Minimum width"
    minWidth: "Minsta bredd (i CSS-godkända värden)",
    // "Maximum width"
    maxWidth: "Maximal bredd (i CSS-godkända värden)",
    // "Width"
    width: "Bredd (i CSS-accepterade värden)",
    // [Auto-translated] "Show column headers"
    showHeader: "Visa kolumnrubriker",
    // [Auto-translated] "Show horizontal scrollbar"
    horizontalScroll: "Visa vågrät rullningslist",
    // [Auto-translated] "Minimum column width (in CSS-accepted values)"
    columnMinWidth: "Minsta kolumnbredd (i CSS-godkända värden)",
    // [Auto-translated] "Row header width (in CSS-accepted values)"
    rowTitleWidth: "Radrubrikbredd (i CSS-godkända värden)",
    // "Value to store when \"True\" is selected"
    valueTrue: "\"Sant\" värde",
    // "Value to store when \"False\" is selected"
    valueFalse: "\"Falskt\" värde",
    // "\"Value is below minimum\" error message"
    minErrorText: "Felmeddelandet \"Värdet är under minimum\"",
    // "\"Value exceeds maximum\" error message"
    maxErrorText: "Felmeddelandet \"Värdet överskrider max\"",
    // "\"Empty comment\" error message"
    otherErrorText: "Felmeddelandet \"Tom kommentar\"",
    // "Error message for duplicate responses"
    keyDuplicationError: "Felmeddelandet \"Icke-unikt nyckelvärde\"",
    // [Auto-translated] "Minimum selected choices"
    minSelectedChoices: "Minsta valda val",
    // [Auto-translated] "Maximum selected choices"
    maxSelectedChoices: "Maximalt antal valda val",
    // [Auto-translated] "Logo width (in CSS-accepted values)"
    logoWidth: "Logotypbredd (i CSS-godkända värden)",
    // [Auto-translated] "Logo height (in CSS-accepted values)"
    logoHeight: "Logotypens höjd (i CSS-godkända värden)",
    // "Read-only"
    readOnly: "Skrivskyddad",
    // [Auto-translated] "Editable if"
    enableIf: "Redigerbar om",
    // "\"No rows\" message"
    noRowsText: "Meddelandet \"Inga rader\"",
    // [Auto-translated] "Separate special choices (None, Other, Select All)"
    separateSpecialChoices: "Avgränsa specialval (Ingen, Annat, Markera alla)",
    // [Auto-translated] "Copy choices from the following question"
    choicesFromQuestion: "Kopiera alternativ från följande fråga",
    // [Auto-translated] "Which choices to copy?"
    choicesFromQuestionMode: "Vilka val ska du kopiera?",
    // [Auto-translated] "Use values from the following matrix column or panel question as choice IDs"
    choiceValuesFromQuestion: "Använd värden från följande matriskolumn eller panelfråga som val-ID:t",
    // [Auto-translated] "Use values from the following matrix column or panel question as choice texts"
    choiceTextsFromQuestion: "Använd värden från följande matriskolumn eller panelfråga som valtexter",
    // [Auto-translated] "Display page titles in progress bar"
    progressBarShowPageTitles: "Visa sidrubriker i förloppsindikatorn",
    // [Auto-translated] "Display page numbers in progress bar"
    progressBarShowPageNumbers: "Visa sidnummer i förloppsindikatorn",
    // [Auto-translated] "Show the comment area"
    showCommentArea: "Visa kommentarsområdet",
    // [Auto-translated] "Comment area placeholder"
    commentPlaceholder: "Platshållare för kommentarsområde",
    // [Auto-translated] "Display rate descriptions as extreme values"
    displayRateDescriptionsAsExtremeItems: "Visa hastighetsbeskrivningar som extremvärden",
    // [Auto-translated] "Row order"
    rowOrder: "Radordning",
    // [Auto-translated] "Column layout"
    columnsLayout: "Kolumnlayout",
    // [Auto-translated] "Nested column count"
    columnColCount: "Kapslat antal kolumner",
    // [Auto-translated] "Correct Answer"
    correctAnswer: "Rätt svar",
    // [Auto-translated] "Default Values"
    defaultPanelValue: "Standardvärden",
    // [Auto-translated] "Cell Texts"
    cells: "Cell texter",
    // [Auto-translated] "Select a file or paste a file link..."
    fileInputPlaceholder: "Välj en fil eller klistra in en fillänk...",
    // "Prevent duplicate responses in the following column"
    keyName: "Kolumnen Nyckel",
    itemvalue: {
      // [Auto-translated] "Make the option visible if"
      visibleIf: "Gör alternativet synligt om",
      // [Auto-translated] "Make the option selectable if"
      enableIf: "Gör alternativet valbart om"
    },
    "itemvalue@rows": {
      // [Auto-translated] "Make the row visible if"
      visibleIf: "Gör raden synlig om",
      // [Auto-translated] "Make the row editable if"
      enableIf: "Gör raden redigerbar om"
    },
    imageitemvalue: {
      // "Alt text"
      text: "Alt-text"
    },
    // [Auto-translated] "Logo position"
    logoPosition: "Logotypens placering",
    // [Auto-translated] "Add logo..."
    addLogo: "Lägg till logotyp...",
    // [Auto-translated] "Change logo..."
    changeLogo: "Ändra logotyp...",
    logoPositions: {
      // [Auto-translated] "Remove logo"
      none: "Ta bort logotyp",
      // [Auto-translated] "Left"
      left: "Vänster",
      // [Auto-translated] "Right"
      right: "Höger",
      // [Auto-translated] "On the top"
      top: "På toppen",
      // [Auto-translated] "In the bottom"
      bottom: "I botten"
    },
    // [Auto-translated] "Preview mode"
    previewMode: "Förhandsgranska läge",
    // [Auto-translated] "Enable the grid layout"
    gridLayoutEnabled: "Aktivera rutnätslayouten",
    // [Auto-translated] "Grid layout columns"
    gridLayoutColumns: "Kolumner för rutnätslayout",
    // [Auto-translated] "Mask settings"
    maskSettings: "Inställningar för mask",
    // [Auto-translated] "Row expansion error message alignment"
    detailErrorLocation: "Felmeddelande om radexpansion",
    // Creator tabs
    tabs: {
      panel: {
        // [Auto-translated] "Layout"
        layout: "Panelens layout"
      },
      // "General"
      general: "Generellt",
      // "Options"
      fileOptions: "Alternativ",
      // "HTML Editor"
      html: "Html-editor",
      // "Columns"
      columns: "Kolumner",
      // "Rows"
      rows: "Rader",
      // "Choice Options"
      choices: "Välj",
      // "Items"
      items: "Element",
      // "Visible If"
      visibleIf: "Synlig",
      // "Editable If"
      enableIf: "Tillgänlig",
      // [Auto-translated] "Required If"
      requiredIf: "Obligatoriskt om",
      // "Rating Values"
      rateValues: "Ordna värden",
      // [Auto-translated] "Slider Settings"
      sliderSettings: "Inställningar för skjutreglage",
      // "Choices from a Web Service"
      choicesByUrl: "Välj från webben",
      // "Default Choices"
      matrixChoices: "Standard val",
      // "Text Inputs"
      multipleTextItems: "Text indata",
      // [Auto-translated] "Numbering"
      numbering: "Numrering",
      // "Validators"
      validators: "Valideringar",
      // "Navigation"
      navigation: "Navigering",
      // "Question Settings"
      question: "Fråga",
      // [Auto-translated] "Pages"
      pages: "Sidor",
      // "Quiz Mode"
      timer: "Tidtagare/Quiz",
      // [Auto-translated] "Calculated Values"
      calculatedValues: "Beräknade värden",
      // "Triggers"
      triggers: "Triggare",
      // "Title template"
      templateTitle: "Mall titel",
      // [Auto-translated] "Totals"
      totals: "Summor",
      // "Conditions"
      logic: "Logik",
      // [Auto-translated] "Input Mask Settings"
      mask: "Inställningar för inmatningsmask",
      layout: {
        // [Auto-translated] "Layout"
        panel: "Layout",
        // [Auto-translated] "Layout"
        question: "Layout",
        // [Auto-translated] "Layout"
        base: "Layout"
      },
      // [Auto-translated] "Data"
      data: "Data",
      // [Auto-translated] "Validation"
      validation: "Validering",
      // [Auto-translated] "Cell Texts"
      cells: "Cell texter",
      // [Auto-translated] "Survey Complete"
      showOnCompleted: "Undersökningen slutförd",
      // [Auto-translated] "Logo in Survey Title"
      logo: "Logotyp i undersökningens titel",
      // [Auto-translated] "Slider"
      slider: "Skjutreglage",
      // [Auto-translated] "Expression"
      expression: "Uttryck",
      // [Auto-translated] "Question Settings"
      questionSettings: "Inställningar för frågor",
      // "Header"
      header: "Rubrik",
      // "Background"
      background: "Bakgrund",
      // "Appearance"
      appearance: "Utseende",
      // [Auto-translated] "Accent colors"
      accentColors: "Accentfärger",
      // [Auto-translated] "Surface Background"
      surfaceBackground: "Yta Bakgrund",
      // [Auto-translated] "Scaling"
      scaling: "Skalning",
      // [Auto-translated] "Others"
      others: "Andra"
    },
    // "Edit property '{0}'"
    editProperty: "Redigera egenskap '{0}'",
    // "Items"
    items: "[ Element: {0} ]",
    // [Auto-translated] "Choices are visible if"
    choicesVisibleIf: "Alternativen är synliga om",
    // [Auto-translated] "Choices are selectable if"
    choicesEnableIf: "Alternativen kan väljas om",
    // [Auto-translated] "Columns are visible if"
    columnsEnableIf: "Kolumner visas om",
    // [Auto-translated] "Rows are visible if"
    rowsEnableIf: "Raderna visas om",
    // [Auto-translated] "Add inner indents"
    innerIndent: "Lägga till inre indrag",
    // [Auto-translated] "Use answers from the last entry as default"
    copyDefaultValueFromLastEntry: "Använd svar från den senaste posten som standard",
    // "Please enter a value."
    enterNewValue: "Vänligen skriv in ett värde.",
    // "There are no questions in the survey."
    noquestions: "Det finns ingen fråga i enkäten.",
    // "Please create a trigger"
    createtrigger: "Vänligen skapa en trigger",
    // [Auto-translated] "Press enter button to edit"
    titleKeyboardAdornerTip: "Tryck på enter-knappen för att redigera",
    // [Auto-translated] "Press enter button to edit item, press delete button to delete item, press alt plus arrow up or arrow down to move item"
    keyboardAdornerTip: "Tryck på enter-knappen för att redigera objektet, tryck på raderingsknappen för att radera objektet, tryck på alt plus pil uppåt eller pil nedåt för att flytta objektet",
    // "On "
    triggerOn: "På ",
    // "Make pages visible"
    triggerMakePagesVisible: "Synligör sidor:",
    // "Make elements visible"
    triggerMakeQuestionsVisible: "Synligör element:",
    // "Complete the survey if successful."
    triggerCompleteText: "Avsluta enkät vid verkställ.",
    // "The trigger is not set"
    triggerNotSet: "Trigger är inte satt",
    // "Run if"
    triggerRunIf: "Kör ",
    // "Change value of: "
    triggerSetToName: "Ändra värden av: ",
    // "Copy value from: "
    triggerFromName: "Kopiera värden från: ",
    // "Run this Expression"
    triggerRunExpression: "Kör detta uttryck:",
    // "to: "
    triggerSetValue: "till: ",
    // [Auto-translated] "Go to the question"
    triggerGotoName: "Gå till frågan",
    // "Do not put the variable into the survey result."
    triggerIsVariable: "Var vänligen skriv ett giltigt uttryck.",
    // [Auto-translated] "Please enter a valid expression"
    triggerRunExpressionEmpty: "Ange ett giltigt uttryck",
    // [Auto-translated] "Type expression here..."
    emptyExpressionPlaceHolder: "Skriv uttryck här...",
    // [Auto-translated] "No file choosen"
    noFile: "Ingen fil har valts",
    // [Auto-translated] "Clear the value if the question becomes hidden"
    clearIfInvisible: "Rensa värdet om frågan döljs",
    // [Auto-translated] "Value property name"
    valuePropertyName: "Egenskapsnamn för värde",
    // [Auto-translated] "Enable search"
    searchEnabled: "Aktivera sökning",
    // [Auto-translated] "Hide selected items"
    hideSelectedItems: "Dölja markerade objekt",
    // [Auto-translated] "Close the dropdown after selection"
    closeOnSelect: "Stäng listrutan efter val",
    // [Auto-translated] "Vertical alignment"
    verticalAlign: "Vertikal inriktning",
    // [Auto-translated] "Alternate rows"
    alternateRows: "Varannan rad",
    // [Auto-translated] "Columns are visible if"
    columnsVisibleIf: "Kolumner visas om",
    // [Auto-translated] "Rows are visible if"
    rowsVisibleIf: "Raderna visas om",
    // [Auto-translated] "Comment area placeholder"
    otherPlaceholder: "Platshållare för kommentarsområde",
    // [Auto-translated] "File placeholder text"
    filePlaceholder: "Text för filplatshållare",
    // [Auto-translated] "Photo placeholder text"
    photoPlaceholder: "Text för platshållare för foton",
    // [Auto-translated] "File or photo placeholder text"
    fileOrPhotoPlaceholder: "Platshållartext för fil eller foto",
    // [Auto-translated] "Rate type"
    rateType: "Typ av hastighet",
    // [Auto-translated] "Ex.: https://api.example.com/books"
    url_placeholder: "Ex.: https://api.example.com/books",
    // [Auto-translated] "Ex.: categories.fiction"
    path_placeholder: "Ex.: kategorier.skönlitteratur",
    // [Auto-translated] "Ex.: a)"
    questionStartIndex_placeholder: "Ex.: a)",
    // [Auto-translated] "Ex.: 6in"
    width_placeholder: "Ex.: 6 tum",
    // [Auto-translated] "Ex.: 600px"
    minWidth_placeholder: "Ex.: 600px",
    // [Auto-translated] "Ex.: 50%"
    maxWidth_placeholder: "Ex.: 50%",
    // "auto"
    imageHeight_placeholder: "bil",
    // "auto"
    imageWidth_placeholder: "bil",
    // [Auto-translated] "Ex.: 100px"
    itemTitleWidth_placeholder: "Ex.: 100px",
    theme: {
      // [Auto-translated] "Theme"
      themeName: "Tema",
      // [Auto-translated] "Question appearance"
      isPanelless: "Frågans utseende",
      // [Auto-translated] "Input element"
      editorPanel: "Bakgrund och hörnradie",
      // [Auto-translated] "Panel background and corner radius"
      questionPanel: "Bakgrund och hörnradie",
      // [Auto-translated] "Accent color"
      primaryColor: "Accentfärg",
      // [Auto-translated] "Panel background opacity"
      panelBackgroundTransparency: "Opacitet för panelbakgrund",
      // [Auto-translated] "Question background opacity"
      questionBackgroundTransparency: "Opacitet för frågebakgrund",
      // [Auto-translated] "Font size"
      fontSize: "Teckenstorlek",
      // [Auto-translated] "Scale"
      scale: "Skala",
      // [Auto-translated] "Corner radius"
      cornerRadius: "Hörn radie",
      // [Auto-translated] "Advanced mode"
      advancedMode: "Avancerat läge",
      // [Auto-translated] "Page title font"
      pageTitle: "Titel typsnitt",
      // [Auto-translated] "Page description font"
      pageDescription: "Beskrivning teckensnitt",
      // [Auto-translated] "Question title font"
      questionTitle: "Titel typsnitt",
      // [Auto-translated] "Question description font"
      questionDescription: "Beskrivning teckensnitt",
      // [Auto-translated] "Input element font"
      editorFont: "Teckensnitt",
      // [Auto-translated] "Opacity"
      backgroundOpacity: "Ogenomskinlighet",
      // [Auto-translated] "Font family"
      "--sjs-font-family": "Teckensnitt familj",
      // [Auto-translated] "Background color"
      "--sjs-general-backcolor-dim": "Bakgrundsfärg",
      // [Auto-translated] "Accent background"
      "--sjs-primary-backcolor": "Accent bakgrund",
      // [Auto-translated] "Accent foreground"
      "--sjs-primary-forecolor": "Accent förgrund",
      // [Auto-translated] "Error messages"
      "--sjs-special-red": "Felmeddelanden",
      // [Auto-translated] "Shadow effects"
      "--sjs-shadow-small": "Skugga effekter",
      // [Auto-translated] "Shadow effects"
      "--sjs-shadow-inner": "Skugga effekter",
      // [Auto-translated] "Colors"
      "--sjs-border-default": "Färger"
    },
    "header@header": {
      // [Auto-translated] "View"
      headerView: "Utsikt",
      // [Auto-translated] "Logo position"
      logoPosition: "Logotypens placering",
      // [Auto-translated] "Survey title font"
      surveyTitle: "Teckensnitt för undersökningens titel",
      // [Auto-translated] "Survey description font"
      surveyDescription: "Teckensnitt för undersökningsbeskrivning",
      // [Auto-translated] "Survey title font"
      headerTitle: "Teckensnitt för undersökningens titel",
      // [Auto-translated] "Survey description font"
      headerDescription: "Teckensnitt för undersökningsbeskrivning",
      // [Auto-translated] "Content area width"
      inheritWidthFrom: "Bredd på innehållsområdet",
      // [Auto-translated] "Text width"
      textAreaWidth: "Textens bredd",
      // [Auto-translated] "Background color"
      backgroundColorSwitch: "Bakgrundsfärg",
      // [Auto-translated] "Background image"
      backgroundImage: "Bakgrundsbild",
      // [Auto-translated] "Opacity"
      backgroundImageOpacity: "Ogenomskinlighet",
      // [Auto-translated] "Overlap"
      overlapEnabled: "Överlappa",
      // [Auto-translated] "Logo position"
      logoPositionX: "Logotypens placering",
      // [Auto-translated] "Title position"
      titlePositionX: "Titel position",
      // [Auto-translated] "Description position"
      descriptionPositionX: "Beskrivning position"
    }
  },
  // Property values
  pv: {
    // [Auto-translated] "true"
    "true": "sann",
    // [Auto-translated] "false"
    "false": "falsk",
    // [Auto-translated] "Local files"
    file: "Lokala filer",
    // [Auto-translated] "Camera"
    camera: "Kamera",
    // [Auto-translated] "Local files or camera"
    "file-camera": "Lokala filer eller kamera",
    // "Inherit"
    inherit: "inherit",
    // "Visible"
    show: "show",
    // "Hidden"
    hide: "hide",
    // "Inherit"
    default: "default",
    // "Initial"
    initial: "initial",
    // "Random"
    random: "random",
    // "Collapsed"
    collapsed: "collapsed",
    // "Expanded"
    expanded: "expanded",
    // "None"
    none: "none",
    // "Ascending"
    asc: "ascending",
    // "Descending"
    desc: "descending",
    // "Indeterminate"
    indeterminate: "indeterminate",
    // [Auto-translated] "Selected"
    selected: "Vald",
    // [Auto-translated] "Unselected"
    unselected: "Omarkerade",
    // [Auto-translated] "decimal"
    decimal: "decimal",
    // [Auto-translated] "currency"
    currency: "valuta",
    // [Auto-translated] "percent"
    percent: "procent",
    // "First panel is expanded"
    firstExpanded: "firstExpanded",
    // "Hide question numbers"
    off: "off",
    // "List"
    list: "list",
    // [Auto-translated] "Carousel"
    carousel: "Karusell",
    // [Auto-translated] "Tabs"
    tab: "Flikar",
    // "Panel navigator + Progress bar at the top"
    progressTop: "progressTop",
    // "Panel navigator + Progress bar at the bottom"
    progressBottom: "progressBottom",
    // "Panel navigator + Progress bar at the top and bottom"
    progressTopBottom: "progressTopBottom",
    // "Horizontal"
    horizontal: "horizontal",
    // "Vertical"
    vertical: "vertical",
    // "Top"
    top: "top",
    // "Bottom"
    bottom: "bottom",
    // "Top and bottom"
    topBottom: "top and bottom",
    // [Auto-translated] "Both"
    both: "Båda",
    // "Left"
    left: "left",
    // [Auto-translated] "Right"
    right: "Höger",
    // [Auto-translated] "Center"
    center: "Centrum",
    // [Auto-translated] "Left and right"
    leftRight: "Vänster och höger",
    // [Auto-translated] "Middle"
    middle: "Mitt",
    // [Auto-translated] "color"
    color: "färg",
    // [Auto-translated] "date"
    date: "datum",
    // [Auto-translated] "datetime"
    datetime: "datetime",
    // [Auto-translated] "datetime-local"
    "datetime-local": "datetime-lokal",
    // [Auto-translated] "email"
    email: "E-post",
    // [Auto-translated] "month"
    month: "månad",
    // [Auto-translated] "number"
    number: "nummer",
    // [Auto-translated] "password"
    password: "lösenord",
    // [Auto-translated] "range"
    range: "sortiment",
    // [Auto-translated] "tel"
    tel: "Tel",
    // "text"
    text: "Text",
    // [Auto-translated] "time"
    time: "Tid",
    // [Auto-translated] "url"
    url: "URL",
    // [Auto-translated] "week"
    week: "vecka",
    // "Hidden"
    hidden: "hidden",
    // "Editable"
    edit: "edit",
    // "Read-only"
    display: "display",
    // [Auto-translated] "Contain"
    contain: "Innehålla",
    // [Auto-translated] "Cover"
    cover: "Täcka",
    // [Auto-translated] "Fill"
    fill: "Fylla",
    // [Auto-translated] "Next"
    next: "Nästa",
    // [Auto-translated] "Last"
    last: "Sist",
    // "Upon survey completion"
    onComplete: "onComplete",
    // "When question gets hidden"
    onHidden: "onHidden",
    // [Auto-translated] "When the question or its panel/page becomes hidden"
    onHiddenContainer: "När frågan eller dess panel/sida döljs",
    clearInvisibleValues: {
      // [Auto-translated] "Never"
      none: "Aldrig"
    },
    clearIfInvisible: {
      // [Auto-translated] "Never"
      none: "Aldrig"
    },
    // [Auto-translated] "Radio Buttons"
    radio: "Alternativknappar",
    inputType: {
      // [Auto-translated] "Color"
      color: "Färg",
      // [Auto-translated] "Date"
      date: "Datum",
      // [Auto-translated] "Date and Time"
      "datetime-local": "Datum och tid",
      // [Auto-translated] "Email"
      email: "E-post",
      // [Auto-translated] "Month"
      month: "Månad",
      // [Auto-translated] "Number"
      number: "Nummer",
      // [Auto-translated] "Password"
      password: "Lösenord",
      // [Auto-translated] "Range"
      range: "Sortiment",
      // [Auto-translated] "Phone Number"
      tel: "Telefonnummer",
      // "Text"
      text: "Text",
      // [Auto-translated] "Time"
      time: "Tid",
      // [Auto-translated] "URL"
      url: "URL",
      // [Auto-translated] "Week"
      week: "Vecka"
    },
    sliderType: {
      // [Auto-translated] "Single-Value"
      single: "Enkelt värde",
      // [Auto-translated] "Range"
      range: "Sortiment"
    },
    autocomplete: {
      // [Auto-translated] "Full Name"
      name: "Fullständigt namn",
      // [Auto-translated] "Prefix"
      "honorific-prefix": "Prefix",
      // [Auto-translated] "First Name"
      "given-name": "Förnamn",
      // [Auto-translated] "Middle Name"
      "additional-name": "Mellannamn",
      // [Auto-translated] "Last Name"
      "family-name": "Efternamn",
      // [Auto-translated] "Suffix"
      "honorific-suffix": "Suffix",
      // [Auto-translated] "Nickname"
      nickname: "Smeknamn",
      // [Auto-translated] "Job Title"
      "organization-title": "Befattning",
      // [Auto-translated] "User Name"
      username: "Användarnamn",
      // [Auto-translated] "New Password"
      "new-password": "Nytt lösenord",
      // [Auto-translated] "Current Password"
      "current-password": "Aktuellt lösenord",
      // [Auto-translated] "Organization Name"
      organization: "Organisationens namn",
      // [Auto-translated] "Full Street Address"
      "street-address": "Fullständig gatuadress",
      // [Auto-translated] "Address Line 1"
      "address-line1": "Adress, rad 1",
      // [Auto-translated] "Address Line 2"
      "address-line2": "Adress Rad 2",
      // [Auto-translated] "Address Line 3"
      "address-line3": "Adress: Rad 3",
      // [Auto-translated] "Level 4 Address"
      "address-level4": "Nivå 4 Adress",
      // [Auto-translated] "Level 3 Address"
      "address-level3": "Nivå 3 Adress",
      // [Auto-translated] "Level 2 Address"
      "address-level2": "Nivå 2 Adress",
      // [Auto-translated] "Level 1 Address"
      "address-level1": "Nivå 1 Adress",
      // [Auto-translated] "Country Code"
      country: "Landskod",
      // [Auto-translated] "Country Name"
      "country-name": "Landets namn",
      // [Auto-translated] "Postal Code"
      "postal-code": "Postnummer",
      // [Auto-translated] "Cardholder Name"
      "cc-name": "Kortinnehavarens namn",
      // [Auto-translated] "Cardholder First Name"
      "cc-given-name": "Kortinnehavarens förnamn",
      // [Auto-translated] "Cardholder Middle Name"
      "cc-additional-name": "Kortinnehavarens mellannamn",
      // [Auto-translated] "Cardholder Last Name"
      "cc-family-name": "Kortinnehavarens efternamn",
      // [Auto-translated] "Credit Card Number"
      "cc-number": "Kreditkortsnummer",
      // [Auto-translated] "Expiration Date"
      "cc-exp": "Utgångsdatum",
      // [Auto-translated] "Expiration Month"
      "cc-exp-month": "Förfallomånad",
      // [Auto-translated] "Expiration Year"
      "cc-exp-year": "Utgångsdatum",
      // [Auto-translated] "Card Security Code"
      "cc-csc": "Kortets säkerhetskod",
      // [Auto-translated] "Credit Card Type"
      "cc-type": "Typ av kreditkort",
      // [Auto-translated] "Transaction Currency"
      "transaction-currency": "Transaktionsvalutan",
      // [Auto-translated] "Transaction Amount"
      "transaction-amount": "Transaktionens belopp",
      // [Auto-translated] "Preferred Language"
      language: "Önskat språk",
      // [Auto-translated] "Birthday"
      bday: "Födelsedag",
      // [Auto-translated] "Birthday Day"
      "bday-day": "Födelsedag",
      // [Auto-translated] "Birthday Month"
      "bday-month": "Födelsedag Månad",
      // [Auto-translated] "Birthday Year"
      "bday-year": "Födelsedag År",
      // [Auto-translated] "Gender"
      sex: "Genus",
      // [Auto-translated] "Website URL"
      url: "Webbadress",
      // [Auto-translated] "Profile Photo"
      photo: "Profilbild",
      // [Auto-translated] "Telephone Number"
      tel: "Telefonnummer",
      // [Auto-translated] "Country Code for Phone"
      "tel-country-code": "Landskod för telefon",
      // [Auto-translated] "National Telephone Number"
      "tel-national": "Nationellt telefonnummer",
      // [Auto-translated] "Area Code"
      "tel-area-code": "Riktnummer",
      // [Auto-translated] "Local Phone Number"
      "tel-local": "Lokalt telefonnummer",
      // [Auto-translated] "Local Phone Prefix"
      "tel-local-prefix": "Prefix för lokal telefon",
      // [Auto-translated] "Local Phone Suffix"
      "tel-local-suffix": "Suffix för lokal telefon",
      // [Auto-translated] "Phone Extension"
      "tel-extension": "Telefonanknytning",
      // [Auto-translated] "Email Address"
      email: "E-postadress",
      // [Auto-translated] "Instant Messaging Protocol"
      impp: "Protokoll för snabbmeddelanden"
    },
    maskType: {
      // [Auto-translated] "None"
      none: "Ingen",
      // [Auto-translated] "Pattern"
      pattern: "Mönster",
      // [Auto-translated] "Numeric"
      numeric: "Numerisk",
      // [Auto-translated] "Date and Time"
      datetime: "Datum och tid",
      // [Auto-translated] "Currency"
      currency: "Valuta"
    },
    inputTextAlignment: {
      // [Auto-translated] "Auto"
      auto: "Automatisk",
      // [Auto-translated] "Left"
      left: "Vänster",
      // [Auto-translated] "Right"
      right: "Höger"
    },
    // "All"
    all: "Alla",
    // "Page"
    page: "Sidan",
    // "Survey"
    survey: "Enkät",
    // "When switching to the next page"
    onNextPage: "På nästa sida",
    // "After an answer is changed"
    onValueChanged: "På värdeförändring",
    // [Auto-translated] "Before an answer is changed"
    onValueChanging: "Innan ett svar ändras",
    questionsOnPageMode: {
      // [Auto-translated] "Original structure"
      standard: "Ursprunglig struktur",
      // [Auto-translated] "All questions on a single page"
      singlePage: "Visa alla frågor på en sida",
      // [Auto-translated] "Each question on an individual page"
      questionPerPage: "Visa en fråga per sida",
      // [Auto-translated] "Show single input field per page"
      inputPerPage: "Visa ett enskilt inmatningsfält per sida"
    },
    // [Auto-translated] "No preview"
    noPreview: "Ingen förhandsgranskning",
    // [Auto-translated] "Show all questions"
    showAllQuestions: "Visa alla frågor",
    // [Auto-translated] "Show answered questions only"
    showAnsweredQuestions: "Visa endast besvarade frågor",
    // [Auto-translated] "Show all questions"
    allQuestions: "Visa alla frågor",
    // [Auto-translated] "Show answered questions only"
    answeredQuestions: "Visa endast besvarade frågor",
    // [Auto-translated] "Completed pages"
    pages: "Avslutade sidor",
    // [Auto-translated] "Answered questions"
    questions: "Besvarade frågor",
    // [Auto-translated] "Answered required questions"
    requiredQuestions: "Besvarade obligatoriska frågor",
    // [Auto-translated] "Valid answers"
    correctQuestions: "Giltiga svar",
    // [Auto-translated] "Completed pages (button UI)"
    buttons: "Slutförda sidor (knappgränssnitt)",
    // [Auto-translated] "Under the input"
    underInput: "Under ingången",
    // [Auto-translated] "Under the title"
    underTitle: "Under rubriken",
    // [Auto-translated] "On blur"
    onBlur: "Vid oskärpa",
    // [Auto-translated] "While typing"
    onTyping: "Medan du skriver",
    // [Auto-translated] "Under the row"
    underRow: "Under raden",
    // [Auto-translated] "Under the row, only one panel is visible"
    underRowSingle: "Under raden syns bara en panel",
    // "Auto"
    auto: "Automatisk",
    showNavigationButtons: {
      // [Auto-translated] "Hidden"
      none: "Dold"
    },
    timerInfoMode: {
      // "Both"
      combined: "Båda"
    },
    addRowButtonLocation: {
      // [Auto-translated] "Depends on matrix layout"
      default: "Beror på matrislayout"
    },
    panelsState: {
      // [Auto-translated] "Users cannot expand or collapse panels"
      default: "Användare kan inte expandera eller komprimera paneler",
      // [Auto-translated] "All panels are collapsed"
      collapsed: "Alla paneler är komprimerade",
      // [Auto-translated] "All panels are expanded"
      expanded: "Alla paneler är expanderade",
      // [Auto-translated] "First expanded"
      firstExpanded: "Först utökad"
    },
    widthMode: {
      // [Auto-translated] "Static"
      static: "Statisk",
      // [Auto-translated] "Responsive"
      responsive: "Responsiv"
    },
    contentMode: {
      // [Auto-translated] "Image"
      image: "Bild",
      // [Auto-translated] "Video"
      video: "Video",
      // [Auto-translated] "YouTube"
      youtube: "YouTube"
    },
    displayMode: {
      // [Auto-translated] "Buttons"
      buttons: "Knappar",
      // [Auto-translated] "Dropdown"
      dropdown: "Rullgardinsmeny"
    },
    rateColorMode: {
      // [Auto-translated] "Default"
      default: "Standard",
      // [Auto-translated] "Scale"
      scale: "Skala"
    },
    scaleColorMode: {
      // [Auto-translated] "Monochrome"
      monochrome: "Monokrom",
      // [Auto-translated] "Colored"
      colored: "Färgad"
    },
    autoGenerate: {
      // [Auto-translated] "Generate"
      "true": "Generera",
      // [Auto-translated] "Enter manually"
      "false": "Ange manuellt"
    },
    rateType: {
      // [Auto-translated] "Labels"
      labels: "Etiketter",
      // [Auto-translated] "Stars"
      stars: "Stjärnor",
      // [Auto-translated] "Smileys"
      smileys: "Smileys"
    },
    state: {
      // [Auto-translated] "Locked"
      default: "Låst"
    },
    showQuestionNumbers: {
      // [Auto-translated] "Auto-numbering"
      default: "Automatisk numrering",
      // [Auto-translated] "Auto-numbering"
      on: "Automatisk numrering",
      // [Auto-translated] "Reset on each page"
      onPage: "Återställ på varje sida",
      // [Auto-translated] "Start on each panel"
      onpanel: "Återställ på varje panel",
      // [Auto-translated] "Reset on each panel"
      onPanel: "Återställ på varje panel",
      // [Auto-translated] "Recursive numbering"
      recursive: "Rekursiv numrering",
      // [Auto-translated] "Continue across the survey"
      onSurvey: "Fortsätt genom undersökningen",
      // [Auto-translated] "No numbering"
      off: "Ingen numrering"
    },
    descriptionLocation: {
      // [Auto-translated] "Under the question title"
      underTitle: "Under frågans rubrik",
      // [Auto-translated] "Under the input field"
      underInput: "Under inmatningsfältet"
    },
    selectToRankAreasLayout: {
      // [Auto-translated] "Next to choices"
      horizontal: "Bredvid alternativ",
      // [Auto-translated] "Above choices"
      vertical: "Ovanstående val"
    },
    displayStyle: {
      // [Auto-translated] "Decimal"
      decimal: "Decimal",
      // [Auto-translated] "Currency"
      currency: "Valuta",
      // [Auto-translated] "Percentage"
      percent: "Procent",
      // [Auto-translated] "Date"
      date: "Datum"
    },
    totalDisplayStyle: {
      // [Auto-translated] "Decimal"
      decimal: "Decimal",
      // [Auto-translated] "Currency"
      currency: "Valuta",
      // [Auto-translated] "Percentage"
      percent: "Procent",
      // [Auto-translated] "Date"
      date: "Datum"
    },
    rowOrder: {
      // [Auto-translated] "Original"
      initial: "Original"
    },
    questionOrder: {
      // [Auto-translated] "Original"
      initial: "Original"
    },
    progressBarLocation: {
      // [Auto-translated] "Top"
      top: "Topp",
      // [Auto-translated] "Bottom"
      bottom: "Botten",
      // [Auto-translated] "Top and bottom"
      topbottom: "Topp och botten",
      // [Auto-translated] "Above the header"
      aboveheader: "Ovanför sidhuvudet",
      // [Auto-translated] "Below the header"
      belowheader: "Nedanför sidhuvudet",
      // [Auto-translated] "Hidden"
      off: "Dold"
    },
    // [Auto-translated] "Sum"
    sum: "Summa",
    // [Auto-translated] "Count"
    count: "Räkna",
    // [Auto-translated] "Min"
    min: "Min",
    // [Auto-translated] "Max"
    max: "Max",
    // [Auto-translated] "Avg"
    avg: "Avg",
    searchMode: {
      // [Auto-translated] "Contains"
      contains: "Innehåller",
      // [Auto-translated] "Starts with"
      startsWith: "Börjar med"
    },
    backgroundImageFit: {
      // [Auto-translated] "Auto"
      auto: "Automatisk",
      // [Auto-translated] "Cover"
      cover: "Täcka",
      // [Auto-translated] "Contain"
      contain: "Innehålla",
      // [Auto-translated] "Stretch"
      fill: "Tänja",
      // [Auto-translated] "Tile"
      tile: "Kakel"
    },
    backgroundImageAttachment: {
      // [Auto-translated] "Fixed"
      fixed: "Fast",
      // [Auto-translated] "Scroll"
      scroll: "Rulla"
    },
    headerView: {
      // [Auto-translated] "Basic"
      basic: "Grundläggande",
      // [Auto-translated] "Advanced"
      advanced: "Avancerad"
    },
    inheritWidthFrom: {
      // [Auto-translated] "Same as survey"
      survey: "Samma som enkät",
      // [Auto-translated] "Fit to container"
      container: "Passa till behållare"
    },
    backgroundColorSwitch: {
      // [Auto-translated] "None"
      none: "Ingen",
      // [Auto-translated] "Accent color"
      accentColor: "Accentfärg",
      // [Auto-translated] "Custom"
      custom: "Sed"
    },
    colorPalette: {
      // [Auto-translated] "Light"
      light: "Ljus",
      // [Auto-translated] "Dark"
      dark: "Mörk"
    },
    isPanelless: {
      // [Auto-translated] "Default"
      "false": "Standard",
      // [Auto-translated] "Without Panels"
      "true": "Utan paneler"
    },
    progressBarInheritWidthFrom: {
      // [Auto-translated] "Same as survey"
      survey: "Samma som undersökning",
      // [Auto-translated] "Same as container"
      container: "Samma som behållare"
    }
  },
  // Operators
  op: {
    // "Empty"
    empty: "is empty",
    // "Not empty"
    notempty: "is not empty",
    // "Equals"
    equal: "equals",
    // "Does not equal"
    notequal: "not equals",
    // "Contains"
    contains: "contains",
    // "Does not contain"
    notcontains: "not contains",
    // [Auto-translated] "Any of"
    anyof: "Någon av",
    // [Auto-translated] "All of"
    allof: "Alla",
    // "Greater than"
    greater: "greater",
    // "Less than"
    less: "less",
    // "Greater than or equal to"
    greaterorequal: "greater or equals",
    // "Less than or equal to"
    lessorequal: "less or equals",
    // [Auto-translated] "and"
    and: "och",
    // [Auto-translated] "or"
    or: "eller"
  },
  // Embed window
  ew: {
    // "Use Angular version"
    angular: "Använd Angular version",
    // "Use jQuery version"
    jquery: "Använd jQuery version",
    // "Use Knockout version"
    knockout: "Använd Knockout version",
    // "Use React version"
    react: "Använd React version",
    // "Use Vue version"
    vue: "Använd Vue version",
    // "For bootstrap framework"
    bootstrap: "För bootstrap framework",
    // [Auto-translated] "Modern theme"
    modern: "Modernt tema",
    // [Auto-translated] "Default theme"
    default: "Standardtema",
    // [Auto-translated] "Orange theme"
    orange: "Orange tema",
    // [Auto-translated] "Darkblue theme"
    darkblue: "Mörkblått tema",
    // [Auto-translated] "Darkrose theme"
    darkrose: "Darkrose-tema",
    // [Auto-translated] "Stone theme"
    stone: "Sten tema",
    // [Auto-translated] "Winter theme"
    winter: "Vinter tema",
    // [Auto-translated] "Winter-Stone theme"
    winterstone: "Vintersten, tema",
    // "Show survey on a page"
    showOnPage: "Visa enkät på en sida",
    // "Show survey in a window"
    showInWindow: "Visa enkäten i ett nytt fönster",
    // "Load Survey JSON from server"
    loadFromServer: "Hämta enkäten som JSON från servern",
    // "Scripts and styles"
    titleScript: "Scripts och styles",
    // "HTML"
    titleHtml: "HTML",
    // "JavaScript"
    titleJavaScript: "JavaScript"
  },
  // Preview (Survey)
  ts: {
    // "Select the page to test it"
    selectPage: "Välj sida för att testa den:",
    // "Show invisible elements"
    showInvisibleElements: "Visa osynliga element",
    // [Auto-translated] "Hide invisible elements"
    hideInvisibleElements: "Dölj osynliga element",
    // [Auto-translated] "Previous"
    prevPage: "Föregående",
    // [Auto-translated] "Next"
    nextPage: "Nästa"
  },
  validators: {
    // "Answer count"
    answercountvalidator: "answer count",
    // "Email"
    emailvalidator: "e-mail",
    // "Expression"
    expressionvalidator: "expression",
    // "Number"
    numericvalidator: "numeric",
    // "Regex"
    regexvalidator: "regex",
    // "Text"
    textvalidator: "text"
  },
  triggers: {
    // "Complete survey"
    completetrigger: "Enkät slutförd",
    // "Set answer"
    setvaluetrigger: "Sätt värde",
    // "Copy answer"
    copyvaluetrigger: "Kopiera värde",
    // [Auto-translated] "Skip to question"
    skiptrigger: "Hoppa till fråga",
    // "Run expression"
    runexpressiontrigger: "Kör uttryck",
    // "change visibility (deprecated)"
    visibletrigger: "Ändra synlighet"
  },
  peplaceholder: {
    patternmask: {
      // "Ex.: +1(999)-999-99-99"
      pattern: "Ex.: +1(999)-999-99-99"
    },
    datetimemask: {
      // "Ex.: mm/dd/yyyy HH:MM:ss"
      pattern: "Ex.: mm/dd/åååå"
    },
    currencymask: {
      // "Ex.: $"
      prefix: "Ex.: $",
      // "Ex.: USD"
      suffix: "Ex.: USD"
    },
    panelbase: {
      // [Auto-translated] "Ex.: 200px"
      questionTitleWidth: "Ex.: 200px"
    },
    panellayoutcolumn: {
      // "Ex.: 30%"
      effectiveWidth: "Ex.: 30%",
      // "Ex.: 200px"
      questionTitleWidth: "Ex.: 200px"
    }
  },
  pehelp: {
    panel: {
      // "A panel ID that is not visible to respondents."
      name: "Ett panel-ID som inte är synligt för svarande.",
      // [Auto-translated] "Type a subtitle."
      description: "Skriv en panelundertext.",
      // "Use the magic wand icon to set a conditional rule that determines panel visibility."
      visibleIf: "Använd trollstavsikonen för att ställa in en villkorsregel som bestämmer panelens synlighet.",
      // [Auto-translated] "Use the magic wand icon to set a conditional rule that disables the read-only mode for the panel."
      enableIf: "Använd trollstavsikonen för att ställa in en villkorsregel som inaktiverar det skrivskyddade läget för panelen.",
      // "Use the magic wand icon to set a conditional rule that prevents survey submission unless at least one nested question has an answer."
      requiredIf: "Använd trollstavsikonen för att ställa in en villkorsregel som förhindrar att undersökningen skickas in om inte minst en kapslad fråga har ett svar.",
      // [Auto-translated] "Applies to all questions within the survey. This setting can be overridden by title alignment rules at lower levels: panel, page, or question. A lower-level setting will override those on a higher level."
      questionTitleLocation: "Gäller alla frågor i den här panelen. Om du vill åsidosätta den här inställningen definierar du regler för rubrikjustering för enskilda frågor. Alternativet \"Ärv\" tillämpar inställningen på sidnivå (om den är inställd) eller på undersökningsnivå (\"Topp\" som standard).",
      // [Auto-translated] "Sets consistent width for question titles when they are aligned to the left of their question boxes. Accepts CSS values (px, %, in, pt, etc.)."
      questionTitleWidth: "Anger konsekvent bredd för frågerubriker när de är justerade till vänster om frågerutorna. Accepterar CSS-värden (px, %, in, pt, etc.).",
      // "Sets the location of an error message in relation to all questions within the panel. The \"Inherit\" option applies the page-level (if set) or survey-level setting."
      questionErrorLocation: "Anger platsen för ett felmeddelande i förhållande till alla frågor i panelen. Alternativet \"Ärv\" tillämpar inställningen på sidnivå (om den är inställd) eller på undersökningsnivå.",
      // [Auto-translated] "Keeps the original order of questions or randomizes them. The effect of this setting is only visible in the Preview tab."
      questionOrder: "Behåller den ursprungliga ordningen på frågorna eller slumpar dem. Alternativet \"Ärv\" tillämpar inställningen på sidnivå (om den är inställd) eller på undersökningsnivå.",
      // "Repositions the panel to the end of a selected page."
      page: "Flyttar panelen till slutet av en markerad sida.",
      // [Auto-translated] "Adds space or margin between the panel content and the left border of the panel box."
      innerIndent: "Lägger till utrymme eller marginal mellan panelinnehållet och panelrutans vänstra kant.",
      // "Unselect to display the panel in one line with the previous question or panel. The setting doesn't apply if the panel is the first element in your form."
      startWithNewLine: "Avmarkera om du vill visa panelen på en rad med föregående fråga eller panel. Inställningen gäller inte om panelen är det första elementet i formuläret.",
      // "Choose from: \"Expanded\" - the panel is displayed in full and can be collapsed; \"Collapsed\" - the panel displays only the title and description and can be expanded; \"Locked\" - the panel is displayed in full and cannot be collapsed."
      state: "Välj mellan: \"Expanderad\" - panelen visas i sin helhet och kan fällas ihop; \"Komprimerad\" - panelen visar endast titel och beskrivning och kan expanderas; \"Låst\" - panelen visas i sin helhet och kan inte fällas ihop.",
      // [Auto-translated] "Accepts CSS values (px, %, in, pt, etc.)."
      width: "Ställer in panelens bredd i proportion till andra undersökningselement på samma rad. Accepterar CSS-värden (px, %, in, pt, etc.).",
      // [Auto-translated] "Assigns numbers to questions nested within this panel."
      showQuestionNumbers: "Tilldelar nummer till frågor som är kapslade i den här panelen.",
      // [Auto-translated] "Specifies how many columns this panel spans within the grid layout."
      effectiveColSpan: "Anger hur många kolumner den här panelen sträcker sig över i rutnätslayouten.",
      // [Auto-translated] "This table lets you configure each grid column within the panel. It automatically sets the width percentage for each column based on the maximum number of elements in a row. To customize the grid layout, manually adjust these values and define the title width for all questions in each column."
      gridLayoutColumns: "I den här tabellen kan du konfigurera varje rutnätskolumn i panelen. Den ställer automatiskt in breddprocenten för varje kolumn baserat på det maximala antalet element i en rad. Om du vill anpassa rutnätslayouten justerar du dessa värden manuellt och definierar rubrikbredden för alla frågor i varje kolumn."
    },
    paneldynamic: {
      // "A panel ID that is not visible to respondents."
      name: "Ett panel-ID som inte är synligt för svarande.",
      // "Type a panel subtitle."
      description: "Skriv en panelundertext.",
      // "Use the magic wand icon to set a conditional rule that determines panel visibility."
      visibleIf: "Använd trollstavsikonen för att ställa in en villkorsregel som bestämmer panelens synlighet.",
      // [Auto-translated] "Use the magic wand icon to set a conditional rule that disables the read-only mode for the panel."
      enableIf: "Använd trollstavsikonen för att ställa in en villkorsregel som inaktiverar det skrivskyddade läget för panelen.",
      // "Use the magic wand icon to set a conditional rule that prevents survey submission unless at least one nested question has an answer."
      requiredIf: "Använd trollstavsikonen för att ställa in en villkorsregel som förhindrar att undersökningen skickas in om inte minst en kapslad fråga har ett svar.",
      // "Applies to all questions within this dynamic panel. If you want to override this setting, define title alignment rules for individual questions. The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Top\" by default)."
      templateQuestionTitleLocation: "Gäller alla frågor i den här panelen. Om du vill åsidosätta den här inställningen definierar du regler för rubrikjustering för enskilda frågor. Alternativet \"Ärv\" tillämpar inställningen på sidnivå (om den är inställd) eller på undersökningsnivå (\"Topp\" som standard).",
      // "Sets consistent width for question titles when they are aligned to the left of their question boxes. Accepts CSS values (px, %, in, pt, etc.)."
      templateQuestionTitleWidth: "Ställer in konsekvent bredd för frågetitlar när de är justerade till vänster om sina frågerutor. Accepterar CSS-värden (px, %, in, pt, etc.).",
      // "Sets the location of an error message in relation to a question with invalid input. Choose between: \"Top\" - an error text is placed at the top of the question box; \"Bottom\" - an error text is placed at the bottom of the question box. The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Top\" by default)."
      templateErrorLocation: "Anger platsen för ett felmeddelande i förhållande till en fråga med ogiltiga indata. Välj mellan: \"Överst\" - en feltext placeras högst upp i frågerutan; \"Nederst\" - en feltext placeras längst ner i frågerutan. Alternativet \"Ärv\" tillämpar inställningen på sidnivå (om den är inställd) eller på undersökningsnivå (\"Topp\" som standard).",
      // "Sets the location of an error message in relation to all questions within the panel. The \"Inherit\" option applies the page-level (if set) or survey-level setting."
      errorLocation: "Anger platsen för ett felmeddelande i förhållande till alla frågor i panelen. Alternativet \"Ärv\" tillämpar inställningen på sidnivå (om den är inställd) eller på undersökningsnivå.",
      // "Repositions the panel to the end of a selected page."
      page: "Flyttar panelen till slutet av en markerad sida.",
      // [Auto-translated] "Adds space or margin between the panel content and the left border of the panel box."
      indent: "Lägger till utrymme eller marginal mellan panelinnehållet och panelrutans vänstra kant.",
      // "Unselect to display the panel in one line with the previous question or panel. The setting doesn't apply if the panel is the first element in your form."
      startWithNewLine: "Avmarkera om du vill visa panelen på en rad med föregående fråga eller panel. Inställningen gäller inte om panelen är det första elementet i formuläret.",
      // "Choose from: \"Expanded\" - the panel is displayed in full and can be collapsed; \"Collapsed\" - the panel displays only the title and description and can be expanded; \"Locked\" - the panel is displayed in full and cannot be collapsed."
      state: "Välj mellan: \"Expanderad\" - panelen visas i sin helhet och kan fällas ihop; \"Komprimerad\" - panelen visar endast titel och beskrivning och kan expanderas; \"Låst\" - panelen visas i sin helhet och kan inte fällas ihop.",
      // "Sets the width of the panel in proportion to other survey elements in the same line. Accepts CSS values (px, %, in, pt, etc.)."
      width: "Ställer in panelens bredd i proportion till andra undersökningselement på samma rad. Accepterar CSS-värden (px, %, in, pt, etc.).",
      // "Type in a template for entry titles. Use {panelIndex} for the entry's general position and {visiblePanelIndex} for its order among visible entries. Insert these placeholders into the pattern to add automatic numbering."
      templateTitle: "Skriv in en mall för dynamiska panelrubriker. Använd {panelIndex} för panelens allmänna position och {visiblePanelIndex} för dess ordning bland de synliga panelerna. Infoga dessa platshållare i mönstret för att lägga till automatisk numrering.",
      // "Type in a template for tab titles. Use {panelIndex} for an entry's general position and {visiblePanelIndex} for its order among visible entries. Insert these placeholders into the pattern to add automatic numbering."
      templateTabTitle: "Skriv in en mall för flikrubriker. Använd {panelIndex} för en panels allmänna position och {visiblePanelIndex} för dess ordning bland synliga paneler. Infoga dessa platshållare i mönstret för att lägga till automatisk numrering.",
      // "A fallback text for tab titles that applies when the tab title pattern doesn't produce a meaningful value."
      tabTitlePlaceholder: "En reservtext för flikrubriker som gäller när flikrubrikmönstret inte ger ett meningsfullt värde.",
      // "This setting allows you to control the visibility of individual entries within the dynamic panel. Use the `{panel}` placeholder to reference the current entry in your expression."
      templateVisibleIf: "Med den här inställningen kan du styra synligheten för enskilda paneler i den dynamiska panelen. Använd platshållaren {panel} för att referera till den aktuella panelen i uttrycket.",
      // "This setting is automatically inherited by all questions within this dynamic panel. If you want to override this setting, define title alignment rules for individual questions. The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Top\" by default)."
      titleLocation: "Den här inställningen ärvs automatiskt av alla frågor i den här panelen. Om du vill åsidosätta den här inställningen definierar du regler för rubrikjustering för enskilda frågor. Alternativet \"Ärv\" tillämpar inställningen på sidnivå (om den är inställd) eller på undersökningsnivå (\"Topp\" som standard).",
      // "The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Under the panel title\" by default)."
      descriptionLocation: "Alternativet \"Ärv\" tillämpar inställningen på sidnivå (om den är inställd) eller på undersökningsnivå (\"Under panelrubriken\" som standard).",
      // "Defines the position of a newly added entry. By default, new entries are added to the end. Select \"Next\" to insert a new entry after the current one."
      newPanelPosition: "Definierar placeringen av en nyligen tillagd panel. Som standard läggs nya paneler till i slutet. Välj \"Nästa\" för att infoga en ny panel efter den nuvarande.",
      // [Auto-translated] "Duplicates answers from the last panel and assigns them to the next added dynamic panel."
      copyDefaultValueFromLastEntry: "Duplicerar svar från den sista panelen och tilldelar dem till nästa tillagda dynamiska panel.",
      // "Reference a question name to require a user to provide a unique response for this question in each entry."
      keyName: "Referera till ett frågenamn för att kräva att en användare anger ett unikt svar för den här frågan i varje panel.",
      // [Auto-translated] "Triggers a prompt asking to confirm the row removal."
      confirmDelete: "Utlöser en bekräftelseprompt innan en panel tas bort."
    },
    matrixdynamic: {
      // [Auto-translated] "Triggers a confirmation prompt before removing a row."
      confirmDelete: "Utlöser en bekräftelseprompt innan en rad tas bort.",
      // [Auto-translated] "Automatically expands the detail section when a new row is added to the matrix."
      detailPanelShowOnAdding: "Expanderar automatiskt detaljavsnittet när en ny rad läggs till i matrisen."
    },
    // "Duplicates answers from the last row and assigns them to the next added dynamic row."
    copyDefaultValueFromLastEntry: "Duplicerar svar från den sista raden och tilldelar dem till nästa tillagda dynamiska rad.",
    // [Auto-translated] "This setting allows you to assign a default answer value based on an expression. The expression can include basic calculations - `{q1_id} + {q2_id}`, Boolean expressions, such as `{age} > 60`, and functions: `iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, etc. The value determined by this expression serves as the initial default value that can be overridden by a respondent's manual input."
    defaultValueExpression: "Med den här inställningen kan du tilldela ett standardsvarsvärde baserat på ett uttryck. Uttrycket kan innehålla grundläggande beräkningar – {q1_id} + {q2_id}, booleska uttryck, till exempel {age} > 60 och funktioner: 'iif()', 'today()', 'age()', 'min()', 'max()', 'avg()' osv. Värdet som bestäms av detta uttryck fungerar som det initiala standardvärdet som kan åsidosättas av en svarandes manuella inmatning.",
    // "Use the magic wand icon to set a conditional rule that determines when a respondent's input is reset to the value based on the \"Default value expression\" or \"Set value expression\" or to the \"Default answer\" value (if either is set)."
    resetValueIf: "Använd trollstavsikonen för att ställa in en villkorsregel som avgör när en respondents inmatning återställs till värdet baserat på \"Standardvärdesuttryck\" eller \"Ange värdeuttryck\" eller till värdet \"Standardsvar\" (om något av dem är inställt).",
    // "Use the magic wand icon to set a conditional rule that determines when to run the \"Set value expression\" and dynamically assign the resulting value as a response."
    setValueIf: "Använd trollstavsikonen för att ställa in en villkorsregel som avgör när \"Ange värdeuttryck\" ska köras och dynamiskt tilldela det resulterande värdet som ett svar.",
    // "Specify an expression that defines the value to be set when the conditions in the \"Set value if\" rule are met. The expression can include basic calculations - `{q1_id} + {q2_id}`, Boolean expressions, such as `{age} > 60`, and functions: `iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, etc. The value determined by this expression can be overridden by a respondent's manual input."
    setValueExpression: "Ange ett uttryck som definierar det värde som ska anges när villkoren i regeln \"Ange värde om\" uppfylls. Uttrycket kan innehålla grundläggande beräkningar – {q1_id} + {q2_id}, booleska uttryck, till exempel {age} > 60 och funktioner: 'iif()', 'today()', 'age()', 'min()', 'max()', 'avg()' osv. Värdet som bestäms av detta uttryck kan åsidosättas av en svarandes manuella inmatning.",
    // "Survey Creator allows you to manually adjust the inline widths of form elements to control the layout. If this doesn't produce the desired outcome, you can enable the grid layout, which structures form elements using a column-based system. To configure layout columns, select a page or panel and use the \"Question Settings\" → \"Grid columns\" table. To adjust how many columns a question spans, select it and set the desired value in the \"Layout\" → \"Column span\" field."
    gridLayoutEnabled: "Med Survey Creator kan du manuellt justera de infogade bredderna på formulärelement för att styra layouten. Om detta inte ger önskat resultat kan du aktivera rutnätslayouten, som strukturerar bildelement med hjälp av ett kolumnbaserat system. För att konfigurera layoutkolumner, välj en sida eller panel och använd tabellen \"Frågeinställningar\" → \"Rutnätskolumner\". För att justera hur många kolumner en fråga sträcker sig över, markera den och ställ in önskat värde i fältet \"Layout\" → \"Kolumnintervall\".",
    question: {
      // "A question ID that is not visible to respondents."
      name: "Ett fråge-ID som inte är synligt för svarande.",
      // "Type a question subtitle."
      description: "Skriv en underrubrik för frågan.",
      // "Use the magic wand icon to set a conditional rule that determines question visibility."
      visibleIf: "Använd trollstavsikonen för att ställa in en villkorsregel som avgör frågans synlighet.",
      // [Auto-translated] "Use the magic wand icon to set a conditional rule that disables the read-only mode for the question."
      enableIf: "Använd trollstavsikonen för att ställa in en villkorsregel som inaktiverar det skrivskyddade läget för frågan.",
      // "Use the magic wand icon to set a conditional rule that prevents survey advancing or submission unless the question received an answer."
      requiredIf: "Använd trollstavsikonen för att ställa in en villkorsregel som förhindrar att undersökningen går vidare eller skickas in om inte frågan har fått ett svar.",
      // [Auto-translated] "Unselect to display the question in one line with the previous question or panel. The setting doesn't apply if the question is the first element in your form."
      startWithNewLine: "Avmarkera om du vill visa frågan på en rad med föregående fråga eller panel. Inställningen gäller inte om frågan är det första elementet i formuläret.",
      // "Repositions the question to the end of a selected page."
      page: "Flyttar frågan till slutet av en markerad sida.",
      // "Choose from: \"Expanded\" - the question box is displayed in full and can be collapsed; \"Collapsed\" - the question box displays only the title and description and can be expanded; \"Locked\" - the question box is displayed in full and cannot be collapsed."
      state: "Välj mellan: \"Expanderad\" - frågerutan visas i sin helhet och kan fällas ihop; \"Komprimerad\" - frågerutan visar endast titel och beskrivning och kan expanderas; \"Låst\" - frågerutan visas i sin helhet och kan inte fällas ihop.",
      // "Overrides title alignment rules defined on a panel, page, or survey level. When set to \"Hidden\", it also hides question descriptions. The \"Inherit\" option applies any higher-level settings (if set) or survey-level setting (\"Top\" by default)."
      titleLocation: "Åsidosätter regler för justering av titlar som definierats på panel-, sid- eller undersökningsnivå. Alternativet \"Ärv\" tillämpar alla inställningar på högre nivå (om de är inställda) eller inställningar på undersökningsnivå (\"Överst\" som standard).",
      // "The \"Inherit\" option applies the survey-level setting (\"Under the question title\" by default)."
      descriptionLocation: "Alternativet \"Ärv\" tillämpar inställningen på undersökningsnivå (\"Under frågans titel\" som standard).",
      // "Sets the location of an error message in relation to the question with invalid input. Choose between: \"Top\" - an error text is placed at the top of the question box; \"Bottom\" - an error text is placed at the bottom of the question box. The \"Inherit\" option applies the survey-level setting (\"Top\" by default)."
      errorLocation: "Anger platsen för ett felmeddelande i förhållande till frågan med ogiltig inmatning. Välj mellan: \"Överst\" - en feltext placeras högst upp i frågerutan; \"Nederst\" - en feltext placeras längst ner i frågerutan. Alternativet \"Ärv\" tillämpar inställningen på undersökningsnivå (\"Topp\" som standard).",
      // "Adds space or margin between the question content and the left border of the question box."
      indent: "Lägger till utrymme eller marginal mellan frågeinnehållet och frågerutans vänstra kant.",
      // "Sets the width of the question in proportion to other survey elements in the same line. Accepts CSS values (px, %, in, pt, etc.)."
      width: "Anger frågans bredd i proportion till andra undersökningselement på samma rad. Accepterar CSS-värden (px, %, in, pt, etc.).",
      // "Choose from: \"On lost focus\" - the value is updated when the input field loses focus; \"While typing\" - the value is updated in real-time, as users are typing. The \"Inherit\" option applies the survey-level setting (\"On lost focus\" by default)."
      textUpdateMode: "Välj mellan: \"Vid förlorat fokus\" - värdet uppdateras när inmatningsfältet tappar fokus; \"Medan du skriver\" - värdet uppdateras i realtid när användarna skriver. Alternativet \"Ärv\" tillämpar inställningen på undersökningsnivå (\"Vid förlorat fokus\" som standard).",
      // [Auto-translated] "You can use any web service as a data source for multiple-choice questions. To populate choice values, enter the URL of the service providing the data."
      url: "Du kan använda valfri webbtjänst som datakälla för flervalsfrågor. Om du vill fylla i alternativvärden anger du URL:en för den tjänst som tillhandahåller data.",
      // [Auto-translated] "A comparison operation used to filter the drop-down list."
      searchMode: "En jämförelseåtgärd som används för att filtrera listrutan.",
      // [Auto-translated] "Long texts in choice options will automatically generate line breaks to fit within the drop-down menu. Unselect if you want the texts to clip."
      textWrapEnabled: "Långa texter i valalternativ genererar automatiskt radbrytningar för att passa in i rullgardinsmenyn. Avmarkera om du vill att texterna ska klippas.",
      // [Auto-translated] "Specifies how many columns this question spans within the grid layout."
      effectiveColSpan: "Anger hur många kolumner den här frågan sträcker sig över i rutnätslayouten."
    },
    surveyvalidator: {
      // "Use the magic wand icon to define when the question's value is considered valid."
      expression: "Använd trollstavsikonen för att definiera när frågans värde anses vara giltigt."
    },
    signaturepad: {
      // "Sets the width of the displayed signature area and the resulting image."
      signatureWidth: "Anger bredden på det visade signaturområdet och den resulterande bilden.",
      // "Sets the height of the displayed signature area and the resulting image."
      signatureHeight: "Anger höjden på det visade signaturområdet och den resulterande bilden.",
      // "Select if you want the signature area to fill all available space within the question box while maintaining the default 3:2 aspect ratio. When custom width and height values are set, the setting will keep the aspect ratio of these dimensions."
      signatureAutoScaleEnabled: "Välj om du vill att signaturområdet ska fylla allt tillgängligt utrymme i frågerutan samtidigt som standardproportionerna 3:2 bibehålls. När anpassade bredd- och höjdvärden anges behåller inställningen proportionerna för dessa dimensioner."
    },
    file: {
      // "Specifies the display height of uploaded images in the preview and the actual height of images taken with the camera. In single file upload mode, the display height is limited by the preview area; in multiple file upload mode, it is limited by the thumbnail area."
      imageHeight: "Anger visningshöjden för överförda bilder i förhandsgranskningen och den faktiska höjden för bilder som tagits med kameran. I läget för uppladdning av en fil begränsas visningshöjden av förhandsgranskningsområdet. I läget för uppladdning av flera filer begränsas den av miniatyrbildsområdet.",
      // "Specifies the display width of uploaded images in the preview and the actual width of images taken with the camera. In single file upload mode, the display width is limited by the preview area; in multiple file upload mode, it is limited by the thumbnail area."
      imageWidth: "Anger visningsbredden för överförda bilder i förhandsgranskningen och den faktiska bredden för bilder som tagits med kameran. I läget för uppladdning av en fil begränsas visningsbredden av förhandsgranskningsområdet. I läget för uppladdning av flera filer begränsas den av miniatyrbildsområdet.",
      // [Auto-translated] "Displays thumbnail previews for uploaded files when possible. Unselect if you want to show file icons instead."
      allowImagesPreview: "Visar miniatyrbilder av uppladdade filer när det är möjligt. Avmarkera om du vill visa filikoner i stället."
    },
    image: {
      // "The \"Auto\" option automatically determines the suitable mode for display - Image, Video, or YouTube - based on the source URL provided."
      contentMode: "Alternativet \"Auto\" bestämmer automatiskt vilket läge som är lämpligt för visning - bild, video eller YouTube - baserat på den angivna källadressen."
    },
    imagepicker: {
      // [Auto-translated] "Overrides the minimum and maximum height values."
      imageHeight: "Åsidosätter värdena för lägsta och högsta höjd.",
      // [Auto-translated] "Overrides the minimum and maximum width values."
      imageWidth: "Åsidosätter värdena för minsta och största bredd.",
      // [Auto-translated] "The left value serves as an item ID used in conditional rules, the right value is displayed to respondents."
      choices: "\"Värde\" fungerar som ett objekt-ID som används i villkorsregler. \"Text\" visas för respondenterna.",
      // "Choose between \"Image\" and \"Video\" to set the content mode of the media selector. If \"Image\" is selected, ensure that all options provided are image files in the following formats: JPEG, GIF, PNG, APNG, SVG, BMP, ICO. Similarly, if \"Video\" is selected, ensure that all options are direct links to video files in the following formats: MP4, MOV, WMV, FLV, AVI, MKV. Please note that YouTube links are not supported for video options."
      contentMode: "Välj mellan \"Bild\" och \"Video\" för att ställa in innehållsläget för medieväljaren. Om \"Bild\" är valt, se till att alla alternativ som tillhandahålls är bildfiler i följande format: JPEG, GIF, PNG, APNG, SVG, BMP, ICO. På samma sätt, om \"Video\" är valt, se till att alla alternativ är direktlänkar till videofiler i följande format: MP4, MOV, WMV, FLV, AVI, MKV. Observera att YouTube-länkar inte stöds för videoalternativ."
    },
    text: {
      // [Auto-translated] "Resizes the visible area of the input field. Please use the <b>Validation → Maximum length</b> setting to limit the input length."
      size: "Den här inställningen ändrar bara storleken på inmatningsfältet och påverkar inte frågerutans bredd. Om du vill begränsa den godkända indatalängden går du till <b>Validering → Maximal teckengräns</b>."
    },
    comment: {
      // [Auto-translated] "The left value serves as a row ID used in conditional rules, the right value is displayed to respondents."
      rows: "Ställer in antalet rader som visas i inmatningsfältet. Om inmatningen tar upp fler rader visas rullningslisten."
    },
    // survey templates
    survey: {
      // "Select if you want to prevent respondents from filling out your survey."
      readOnly: "Välj om du vill hindra respondenterna från att fylla i din undersökning.",
      // "Sets the location of the progress bar. The \"Auto\" value displays the progress bar above or below the survey header."
      progressBarLocation: "Ställer in platsen för förloppsindikatorn. Värdet \"Auto\" visar förloppsindikatorn ovanför eller under undersökningshuvudet."
    },
    matrixdropdowncolumn: {
      // "A column ID that is not visible to respondents."
      name: "Ett kolumn-ID som inte är synligt för svarande.",
      // "When enabled for a column, a respondent is required to provide a unique response for each question within this column."
      isUnique: "När den är aktiverad för en kolumn måste en svarande ange ett unikt svar för varje fråga i den här kolumnen.",
      // "Sets the number of displayed lines in the input field. If the input takes up more lines, the scroll bar will appear."
      rows: "Ställer in antalet rader som visas i inmatningsfältet. Om inmatningen tar upp fler rader visas rullningslisten.",
      // "Use the magic wand icon to set a conditional rule that determines column visibility."
      visibleIf: "Använd trollstavsikonen för att ange en villkorsregel som bestämmer kolumnens synlighet.",
      // [Auto-translated] "Use the magic wand icon to set a conditional rule that disables the read-only mode for the column."
      enableIf: "Använd trollstavsikonen för att ange en villkorsregel som inaktiverar skrivskyddat läge för kolumnen.",
      // "Use the magic wand icon to set a conditional rule that prevents survey submission unless at least one nested question has an answer."
      requiredIf: "Använd trollstavsikonen för att ställa in en villkorsregel som förhindrar att undersökningen skickas in om inte minst en kapslad fråga har ett svar.",
      // "When selected, creates an individual column for each choice option."
      showInMultipleColumns: "När du väljer det här alternativet skapas en enskild kolumn för varje alternativ.",
      // [Auto-translated] "Arranges choice options in a multi-column layout. When set to 0, the options are displayed in a single line."
      colCount: "Ordnar valalternativ i en layout med flera kolumner. När värdet är 0 visas alternativen på en enda rad. När värdet är -1 ärvs det faktiska värdet från egenskapen \"Kapslad kolumnantal\" i den överordnade matrisen."
    },
    slider: {
      // "The lowest number that users can select."
      min: "Det lägsta tal som användarna kan välja.",
      // "The highest number that users can select."
      max: "Det högsta tal som användarna kan välja.",
      // "The interval between selectable scale values. For example, a step of 5 will allow users to select 0, 5, 10, etc."
      step: "Intervallet mellan valbara skalvärden. Till exempel kommer ett steg på 5 att tillåta användare att välja 0, 5, 10 osv.",
      // "The minimum distance between the slider thumbs a user can set."
      minRangeLength: "Det minsta avståndet mellan skjutreglagets tummar som en användare kan ställa in.",
      // "The maximum distance between the slider thumbs a user can set."
      maxRangeLength: "Det maximala avståndet mellan skjutreglagets tummar som en användare kan ställa in.",
      // "Specifies how many scale labels to generate. A value of -1 means the number is calculated automatically based on the Min value and Max value."
      labelCount: "Anger hur många skalningsetiketter som ska genereras. Värdet -1 innebär att talet beräknas automatiskt baserat på Min-värdet och Max-värdet.",
      // "Use `{0}` as a placeholder for the actual value."
      labelFormat: "Använd \"{0}\" som platshållare för det faktiska värdet.",
      // "Allows you to define custom labels at specific values and optionally assign corresponding text to them (e.g., 0 = \"Poor\", 100 = \"Excellent\")."
      customLabels: "Gör att du kan definiera anpassade etiketter med specifika värden och eventuellt tilldela motsvarande text till dem (t.ex. 0 = \"Dålig\", 100 = \"Utmärkt\").",
      // "Use `{0}` as a placeholder for the actual value."
      tooltipFormat: "Använd \"{0}\" som platshållare för det faktiska värdet.",
      // "Allows users to move one thumb past the other."
      allowSwap: "Gör det möjligt för användare att flytta en tumme förbi den andra.",
      // [Auto-translated] "Displays a button that clears the selected slider value and sets it to undefined."
      allowClear: "Visar en knapp som rensar det valda skjutreglagets värde och ställer in det på odefinierat.",
      // "Defines the slider's minimum value dynamically using an expression. Supports basic calculations (e.g, `{q1_id} + {q2_id}`), Boolean logic (e.g., `{age} > 60`), and functions like `iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, and more."
      minValueExpression: "Definierar skjutreglagets minimivärde dynamiskt med hjälp av ett uttryck. Stöder grundläggande beräkningar (t.ex. {q1_id} + {q2_id}), boolesk logik (t.ex. {age} > 60') och funktioner som 'iif()', 'today()', 'age()', 'min()', 'max()', 'avg()' med mera.",
      // "Defines the slider's maximum value dynamically using an expression. Supports basic calculations (e.g, `{q1_id} + {q2_id}`), Boolean logic (e.g., `{age} > 60`), and functions like `iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, and more."
      maxValueExpression: "Definierar skjutreglagets maximala värde dynamiskt med hjälp av ett uttryck. Stöder grundläggande beräkningar (t.ex. {q1_id} + {q2_id}), boolesk logik (t.ex. {age} > 60') och funktioner som 'iif()', 'today()', 'age()', 'min()', 'max()', 'avg()' med mera."
    },
    // [Auto-translated] "Makes this choice exclusive. When selected by a user, it will automatically deselect all other options in the question."
    isExclusive: "Gör detta val exklusivt. När den väljs av en användare kommer den automatiskt att avmarkera alla andra alternativ i frågan.",
    // [Auto-translated] "Select if uppercase and lowercase letters in the regular expression must be treated as equivalent."
    caseInsensitive: "Välj om versaler och gemener i det reguljära uttrycket ska behandlas som likvärdiga.",
    // "Choose from: \"Static\" - sets a fixed width; \"Responsive\" - makes the survey occupy the full width of the screen; \"Auto\" - applies either of the two depending on the question types used."
    widthMode: "Välj mellan: \"Statisk\" - ställer in en fast bredd; \"Responsiv\" - gör att undersökningen upptar hela skärmens bredd; \"Auto\" - gäller någon av de två beroende på vilka frågetyper som används.",
    // [Auto-translated] "Cookies prevent users from filling out the same survey twice."
    cookieName: "Cookies hindrar användare från att fylla i samma undersökning två gånger.",
    // [Auto-translated] "Paste an image link (no size limits) or click the folder icon to browse a file from your computer (up to 64KB)."
    logo: "Klistra in en bildlänk (inga storleksbegränsningar) eller klicka på mappikonen för att bläddra i en fil från din dator (upp till 64 kB).",
    // [Auto-translated] "Sets a logo width in CSS units (px, %, in, pt, etc.)."
    logoWidth: "Anger en logotypbredd i CSS-enheter (px, %, in, pt, etc.).",
    // [Auto-translated] "Sets a logo height in CSS units (px, %, in, pt, etc.)."
    logoHeight: "Anger en logotyphöjd i CSS-enheter (px, %, in, pt, etc.).",
    // "Choose from: \"None\" - image maintains its original size; \"Contain\" - image is resized to fit while maintaining its aspect ratio; \"Cover\" - image fills the entire box while maintaining its aspect ratio; \"Fill\" - image is stretched to fill the box without maintaining its aspect ratio."
    logoFit: "Välj mellan: \"Ingen\" - bilden behåller sin ursprungliga storlek; \"Innehåll\" - bildens storlek ändras så att den passar samtidigt som bildförhållandet bibehålls. \"Cover\" - bilden fyller hela rutan samtidigt som bildförhållandet bibehålls; \"Fyll\" - bilden sträcks ut för att fylla rutan utan att behålla bildförhållandet.",
    // [Auto-translated] "Select if you want the survey to auto-advance to the next page once a respondent has answered all questions on the current page. This feature won't apply if the last question on the page is open-ended or allows multiple answers."
    autoAdvanceEnabled: "Välj om du vill att undersökningen automatiskt ska gå vidare till nästa sida när en svarande har svarat på alla frågor på den aktuella sidan. Den här funktionen gäller inte om den sista frågan på sidan är öppen eller tillåter flera svar.",
    // [Auto-translated] "Select if you want the survey to complete automatically after a respondent answers all questions."
    autoAdvanceAllowComplete: "Välj om du vill att undersökningen ska slutföras automatiskt efter att en svarande har svarat på alla frågor.",
    // [Auto-translated] "Sets the visibility and location of navigation buttons on a page."
    showNavigationButtons: "Anger synlighet och placering av navigeringsknappar på en sida.",
    // [Auto-translated] "Sets the location of navigation buttons on a page."
    navigationButtonsLocation: "Anger placeringen av navigeringsknapparna på en sida.",
    // [Auto-translated] "Enable the preview page with all or answered questions only."
    showPreviewBeforeComplete: "Aktivera förhandsgranskningssidan med alla eller endast besvarade frågor.",
    // "Applies to all questions within the survey. This setting can be overridden by title alignment rules at lower levels: panel, page, or question. A lower-level setting will override those on a higher level."
    questionTitleLocation: "Gäller alla frågor i undersökningen. Den här inställningen kan åsidosättas av regler för justering av rubriker på lägre nivåer: panel, sida eller fråga. En inställning på lägre nivå åsidosätter de på en högre nivå.",
    // [Auto-translated] "A symbol or a sequence of symbols indicating that an answer is required."
    requiredMark: "En symbol eller en sekvens av symboler som anger att ett svar krävs.",
    // [Auto-translated] "Enter a number or letter with which you want to start numbering."
    questionStartIndex: "Ange en siffra eller bokstav som du vill börja numrera med.",
    // "Sets the location of an error message in relation to the question with invalid input. Choose between: \"Top\" - an error text is placed at the top of the question box; \"Bottom\" - an error text is placed at the bottom of the question box."
    questionErrorLocation: "Anger platsen för ett felmeddelande i förhållande till frågan med ogiltig inmatning. Välj mellan: \"Överst\" - en feltext placeras högst upp i frågerutan; \"Nederst\" - en feltext placeras längst ner i frågerutan.",
    // [Auto-translated] "Select if you want the first input field on each page ready for text entry."
    autoFocusFirstQuestion: "Välj om du vill att det första inmatningsfältet på varje sida ska vara klart för textinmatning.",
    // "Keeps the original order of questions or randomizes them. The effect of this setting is only visible in the Preview tab."
    questionOrder: "Behåller den ursprungliga ordningen på frågorna eller slumpar dem. Effekten av den här inställningen visas bara på fliken Förhandsgranska.",
    // [Auto-translated] "For text entry questions only."
    maxTextLength: "Endast för textinmatningsfrågor.",
    // [Auto-translated] "For question comments only."
    maxCommentLength: "Endast för frågekommentarer.",
    // [Auto-translated] "Sets the number of displayed lines in text areas for question comments. In the input takes up more lines, the scroll bar appears."
    commentAreaRows: "Ställer in antalet rader som visas i textområden för frågekommentarer. Om inmatningen tar upp fler rader visas rullningslisten.",
    // [Auto-translated] "Select if you want question comments and Long Text questions to auto-grow in height based on the entered text length."
    autoGrowComment: "Välj om du vill att frågekommentarer och långa textfrågor automatiskt ska öka i höjd baserat på den angivna textlängden.",
    // [Auto-translated] "For question comments and Long Text questions only."
    allowResizeComment: "Endast för frågekommentarer och långa textfrågor.",
    // [Auto-translated] "Custom variables serve as intermediate or auxiliary variables used in form calculations. They take respondent inputs as source values. Each custom variable has a unique name and an expression it's based on."
    calculatedValues: "Anpassade variabler fungerar som mellanliggande variabler eller hjälpvariabler som används i formulärberäkningar. De tar svarandes indata som källvärden. Varje anpassad variabel har ett unikt namn och ett uttryck som den baseras på.",
    // [Auto-translated] "Select if you wish the calculated value of the expression to be saved along with survey results."
    includeIntoResult: "Välj om du vill att det beräknade värdet av uttrycket ska sparas tillsammans med undersökningsresultaten.",
    // "A trigger is an event or condition that is based on an expression. Once the expression is evaluated to \"true\", a trigger sets off an action. Such an action can optionally have a target question it affects."
    triggers: "En utlösare är en händelse eller ett villkor som baseras på ett uttryck. När uttrycket har utvärderats till \"true\" utlöser en utlösare en åtgärd. En sådan åtgärd kan valfritt ha en målfråga som den påverkar.",
    // [Auto-translated] "Choose whether or not to clear values for questions hidden by conditional logic and when to do it."
    clearInvisibleValues: "Välj om du vill rensa värden för frågor som döljs av villkorsstyrd logik och när du vill göra det.",
    // "Choose from: \"On lost focus\" - the value is updated when the input field loses focus; \"While typing\" - the value is updated in real-time, as users are typing."
    textUpdateMode: "Välj mellan: \"Vid förlorat fokus\" - värdet uppdateras när inmatningsfältet tappar fokus; \"Medan du skriver\" - värdet uppdateras i realtid när användarna skriver.",
    // [Auto-translated] "The left value serves as a column ID used in conditional rules, the right value is displayed to respondents."
    columns: "Det vänstra värdet fungerar som ett kolumn-ID som används i villkorsregler, det högra värdet visas för respondenterna.",
    // "The left value serves as a row ID used in conditional rules, the right value is displayed to respondents."
    rows: "Det vänstra värdet fungerar som ett rad-ID som används i villkorsregler, det högra värdet visas för respondenterna.",
    // [Auto-translated] "Accepts CSS values (px, %, in, pt, etc.)."
    columnMinWidth: "Accepterar CSS-värden (px, %, in, pt, etc.).",
    // [Auto-translated] "Accepts CSS values (px, %, in, pt, etc.)."
    rowTitleWidth: "Accepterar CSS-värden (px, %, in, pt, etc.).",
    // [Auto-translated] "Visible only when at least one column has Total type or Total expression."
    totalText: "Visas bara när minst en kolumn har Total type eller Total uttryck.",
    // "Sets the location of an error message in relation to a cell with invalid input. The \"Inherit\" option applies the setting from the \"Error message alignment\" property."
    cellErrorLocation: "Anger platsen för ett felmeddelande i förhållande till en cell med ogiltiga indata. Alternativet \"Ärv\" tillämpar inställningen från egenskapen \"Justering av felmeddelande\".",
    // "Sets the location of error messages for questions nested in detail sections. The \"Inherit\" option applies the setting from the \"Error message alignment\" property."
    detailErrorLocation: "Anger platsen för felmeddelanden för frågor som är kapslade i detaljavsnitt. Alternativet \"Ärv\" tillämpar inställningen från egenskapen \"Justering av felmeddelande\".",
    // "When the \"Prevent duplicate responses\" property is enabled, a respondent attempting to submit a duplicate entry will receive the following error message."
    keyDuplicationError: "När egenskapen \"Förhindra dubblettsvar\" är aktiverad kommer en svarande som försöker skicka in en dubblett att få följande felmeddelande.",
    // [Auto-translated] "Allows you to calculate total values based on an expression. The expression can include basic calculations (`{q1_id} + {q2_id}`), Boolean expressions (`{age} > 60`) and functions ('iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, etc.)."
    totalExpression: "Gör att du kan beräkna totalvärden baserat på ett uttryck. Uttrycket kan innehålla grundläggande beräkningar ('{q1_id} + {q2_id}'), booleska uttryck ('{age} > 60') och funktioner ('iif()', 'today()', 'age()', 'min()', 'max()', 'avg()', etc.).",
    // "Reference a column ID to require a user to provide a unique response for each question within the specified column."
    keyName: "Om den angivna kolumnen innehåller identiska värden genereras felet \"Icke-unikt nyckelvärde\".",
    // "Type a subtitle."
    description: "Skriv en undertext.",
    // [Auto-translated] "Choose a language to begin creating your survey. To add a translation, switch to a new language and translate the original text here or in the Translations tab."
    locale: "Välj ett språk för att börja skapa din undersökning. Om du vill lägga till en översättning byter du till ett nytt språk och översätter originaltexten här eller på fliken Översättningar.",
    // "Sets the location of a detail section in relation to a row. Choose from: \"None\" - no detail section is added; \"Under the row\" - a detail section is placed under each row of the matrix; \"Under the row, display one detail section only\" - a detail section is displayed under a single row only, the remaining sections are collapsed."
    detailPanelMode: "Anger platsen för ett detaljavsnitt i förhållande till en rad. Välj mellan: \"Ingen\" - ingen expansion läggs till; \"Under raden\" - en radexpansion placeras under varje rad i matrisen; \"Visa endast en radexpansion under raden\" - en expansion visas endast under en enda rad, de återstående radexpansionerna är komprimerade.",
    // "Choose from: \"None\" - image maintains its original size; \"Contain\" - image is resized to fit while maintaining its aspect ratio; \"Cover\" - image fills the entire box while maintaining its aspect ratio; \"Fill\" - image is stretched to fill the box without maintaining its aspect ratio."
    imageFit: "Välj mellan: \"Ingen\" - bilden behåller sin ursprungliga storlek; \"Innehåll\" - bildens storlek ändras så att den passar samtidigt som bildförhållandet bibehålls. \"Cover\" - bilden fyller hela rutan samtidigt som bildförhållandet bibehålls; \"Fyll\" - bilden sträcks ut för att fylla rutan utan att behålla bildförhållandet.",
    // "The \"Inherit\" option applies a survey-level setting (\"Disabled\" by default)."
    autoGrow: "Ökar gradvis höjden på inmatningsfältet när data matas in. Åsidosätter inställningen \"Inmatningsfältets höjd (i rader)\".",
    // [Auto-translated] "The resize handle (or grip) appears in the corner and can be dragged to alter the size of the input field."
    allowResize: "Storlekshandtaget (eller greppet) visas i hörnet och kan dras för att ändra storleken på inmatningsfältet.",
    // [Auto-translated] "A time interval in seconds after which the survey auto-advances to the Thank You page."
    timeLimit: "Ett tidsintervall i sekunder varefter undersökningen automatiskt går vidare till Tack-sidan.",
    // [Auto-translated] "A time interval in seconds after which the survey auto-advances to the next page."
    timeLimitPerPage: "Ett tidsintervall i sekunder varefter undersökningen automatiskt går vidare till nästa sida.",
    // [Auto-translated] "Enable this option to trigger validation when a user focuses on an empty input field and then leaves it without making any changes."
    validateVisitedEmptyFields: "Aktivera det här alternativet för att utlösa validering när en användare fokuserar på ett tomt inmatningsfält och sedan lämnar det utan att göra några ändringar.",
    page: {
      // "A page ID that is not visible to respondents."
      name: "Ett sid-ID som inte är synligt för svarande.",
      // "Type a page subtitle."
      description: "Skriv en underrubrik på sidan.",
      // "A caption displayed on a navigation button in the progress bar or table of contents (TOC). If you leave this field empty, the navigation button will use the page title or page name. To enable the progress bar or TOC, go to \"Survey\" → \"Navigation\"."
      navigationTitle: "En bildtext som visas på en navigeringsknapp i förloppsindikatorn eller innehållsförteckningen. Om du lämnar det här fältet tomt kommer navigeringsknappen att använda sidans titel eller sidnamn. För att aktivera förloppsindikatorn eller innehållsförteckningen, gå till \"Undersökning\" → \"Navigering\".",
      // "A time interval in seconds after which the survey auto-advances to the next page. Hides the \"Previous\" navigation button. When set to 0, counts the time spent on the current page."
      timeLimit: "Ett tidsintervall i sekunder varefter undersökningen automatiskt går vidare till nästa sida.",
      // "Use the magic wand icon to set a conditional rule that determines page visibility."
      visibleIf: "Använd trollstavsikonen för att ställa in en villkorsregel som bestämmer sidans synlighet.",
      // [Auto-translated] "Use the magic wand icon to set a conditional rule that disables the read-only mode for the page."
      enableIf: "Använd trollstavsikonen för att ställa in en villkorsregel som inaktiverar det skrivskyddade läget för sidan.",
      // "Use the magic wand icon to set a conditional rule that prevents survey submission unless at least one nested question has an answer."
      requiredIf: "Använd trollstavsikonen för att ställa in en villkorsregel som förhindrar att undersökningen skickas in om inte minst en kapslad fråga har ett svar.",
      // "Applies to all questions within this page. When set to \"Hidden\", it also hides question descriptions. If you want to override this setting, define title alignment rules for individual questions or panels. The \"Inherit\" option applies the survey-level setting (\"Top\" by default)."
      questionTitleLocation: "Gäller alla frågor på denna sida. Om du vill åsidosätta den här inställningen definierar du regler för titeljustering för enskilda frågor eller paneler. Alternativet \"Ärv\" tillämpar inställningen på undersökningsnivå (\"Topp\" som standard).",
      // [Auto-translated] "Sets consistent width for question titles when they are aligned to the left of their question boxes. Accepts CSS values (px, %, in, pt, etc.)."
      questionTitleWidth: "Anger konsekvent bredd för frågerubriker när de är justerade till vänster om frågerutorna. Accepterar CSS-värden (px, %, in, pt, etc.).",
      // "Sets the location of an error message in relation to the question with invalid input. Choose between: \"Top\" - an error text is placed at the top of the question box; \"Bottom\" - an error text is placed at the bottom of the question box. The \"Inherit\" option applies the survey-level setting (\"Top\" by default)."
      questionErrorLocation: "Anger platsen för ett felmeddelande i förhållande till frågan med ogiltig inmatning. Välj mellan: \"Överst\" - en feltext placeras högst upp i frågerutan; \"Nederst\" - en feltext placeras längst ner i frågerutan. Alternativet \"Ärv\" tillämpar inställningen på undersökningsnivå (\"Topp\" som standard).",
      // "Keeps the original order of questions or randomizes them. The \"Inherit\" option applies the survey-level setting (\"Original\" by default). The effect of this setting is only visible in the Preview tab."
      questionOrder: "Behåller den ursprungliga ordningen på frågorna eller slumpar dem. Alternativet \"Ärv\" tillämpar inställningen på undersökningsnivå (\"Original\" som standard). Effekten av den här inställningen visas bara på fliken Förhandsgranska.",
      // "Sets the visibility of navigation buttons on the page. The \"Inherit\" option applies the survey-level setting, which defaults to \"Visible\"."
      showNavigationButtons: "Ställer in synligheten för navigeringsknapparna på sidan. Alternativet \"Ärv\" tillämpar inställningen på undersökningsnivå, som standard är \"Synlig\".",
      // [Auto-translated] "This table lets you configure each grid column on the page. It automatically sets the width percentage for each column based on the maximum number of elements in a row. To customize the grid layout, manually adjust these values and define the title width for all questions in each column."
      gridLayoutColumns: "I den här tabellen kan du konfigurera varje rutnätskolumn på sidan. Den ställer automatiskt in breddprocenten för varje kolumn baserat på det maximala antalet element i en rad. Om du vill anpassa rutnätslayouten justerar du dessa värden manuellt och definierar rubrikbredden för alla frågor i varje kolumn."
    },
    // [Auto-translated] "Sets the location of a timer on a page."
    timerLocation: "Ställer in platsen för en timer på en sida.",
    // "Choose from: \"Locked\" - users cannot expand or collapse entries; \"Collapse all\" - all entries start in a collapsed state; \"Expand all\" - all entries start in an expanded state; \"First expanded\" - only the first entry is initially expanded. Applies if \"Entry display mode\" is set to \"List\" and the \"Entry title pattern\" property is specified."
    panelsState: "Välj mellan: \"Låst\" - användare kan inte expandera eller komprimera paneler; \"Komprimera alla\" - alla paneler börjar i ett komprimerat tillstånd; \"Expandera alla\" - alla paneler börjar i ett expanderat tillstånd; \"Först expanderad\" - endast den första panelen expanderas initialt.",
    // [Auto-translated] "Enter a shared property name within the array of objects that contains the image or video file URLs you want to display in the choice list."
    imageLinkName: "Ange ett delat egenskapsnamn i matrisen med objekt som innehåller de bild- eller videofils-URL:er som du vill visa i alternativlistan.",
    // "The left value serves as an item ID used in conditional rules, the right value is displayed to respondents."
    choices: "Det vänstra värdet fungerar som ett objekt-ID som används i villkorsregler, det högra värdet visas för respondenterna.",
    // [Auto-translated] "Type a user-friendly title to display."
    title: "Skriv en användarvänlig titel som ska visas.",
    // [Auto-translated] "Ensures that users won't complete the survey until files are uploaded."
    waitForUpload: "Säkerställer att användarna inte slutför undersökningen förrän filerna har laddats upp.",
    // [Auto-translated] "Accepts CSS values (px, %, in, pt, etc.)."
    minWidth: "Accepterar CSS-värden (px, %, in, pt, etc.).",
    // [Auto-translated] "Accepts CSS values (px, %, in, pt, etc.)."
    maxWidth: "Accepterar CSS-värden (px, %, in, pt, etc.).",
    // "Accepts CSS values (px, %, in, pt, etc.)."
    width: "Accepterar CSS-värden (px, %, in, pt, etc.).",
    // [Auto-translated] "If you do not set this property, the answer will be stored in a field specified by the Name property."
    valueName: "Om du inte anger den här egenskapen lagras svaret i ett fält som anges av egenskapen Name.",
    // [Auto-translated] "A value displayed in HTML questions and in the dynamic titles and descriptions of survey elements when the question value is empty."
    defaultDisplayValue: "Ett värde som visas i HTML-frågor och i dynamiska titlar och beskrivningar av undersökningselement när frågevärdet är tomt.",
    // [Auto-translated] "In single- and multiple-selection question types, each choice option has an ID and display value. When selected, this setting shows a display value instead of an ID value in HTML questions and dynamic titles and descriptions of survey elements."
    useDisplayValuesInDynamicTexts: "I frågetyperna med ett eller flera val har varje alternativ ett ID och ett visningsvärde. När du väljer det här alternativet visar den här inställningen ett visningsvärde i stället för ett ID-värde i HTML-frågor och dynamiska rubriker och beskrivningar av undersökningselement.",
    // "Choose whether or not to clear question values hidden by conditional logic and when to do it. The \"Inherit\" option applies the survey-level setting (\"Upon survey completion\" by default)."
    clearIfInvisible: "Välj om du vill rensa frågevärden som döljs av villkorslogik och när du vill göra det. Alternativet \"Ärv\" tillämpar inställningen på undersökningsnivå (\"När undersökningen är klar\" som standard).",
    // "Choose from: \"All\" - copies all choice options from the selected question; \"Selected\" - dynamically copies only selected choice options; \"Unselected\" - dynamically copies only unselected choice options. The \"None\" and \"Other\" options are copied by default if enabled in the source question."
    choicesFromQuestionMode: "Välj mellan: \"Alla\" - kopierar alla valalternativ från den valda frågan; \"Markerad\" - kopierar dynamiskt endast valda alternativ; \"Omarkerad\" - kopierar endast omarkerade alternativ dynamiskt. Alternativen \"Ingen\" och \"Annat\" kopieras som standard om de är aktiverade i källfrågan.",
    // [Auto-translated] "In single- and multiple-selection question types, each choice option has an ID and display value. This setting specifies which matrix column or panel question should provide the IDs."
    choiceValuesFromQuestion: "I frågetyper med ett eller flera val har varje alternativ ett ID och ett visningsvärde. Den här inställningen anger vilken matriskolumn eller panelfråga som ska ange ID:n.",
    // [Auto-translated] "In single- and multiple-selection question types, each choice option has an ID and display value. This setting specifies which matrix column or panel question should provide the display texts."
    choiceTextsFromQuestion: "I frågetyper med ett eller flera val har varje alternativ ett ID och ett visningsvärde. Den här inställningen anger vilken matris-, kolumn- eller panelfråga som ska tillhandahålla visningstexterna.",
    // [Auto-translated] "Select to let respondents add their own choices if the desired option isn't available in the dropdown. Custom choices will only be stored temporarily for the duration of the current browser session."
    allowCustomChoices: "Välj om du vill att de svarande ska kunna lägga till sina egna alternativ om det önskade alternativet inte är tillgängligt i rullgardinsmenyn. Anpassade val kommer endast att lagras tillfälligt under den aktuella webbläsarsessionen.",
    // [Auto-translated] "When selected, users can include additional input in a separate comment box."
    showOtherItem: "När du väljer det här alternativet kan användarna inkludera ytterligare indata i en separat kommentarsruta.",
    // "Displays each special choice option (\"None\", \"Other\", \"Select All\") on a new line, even when using a multiple-column layout."
    separateSpecialChoices: "Visar varje specialalternativ (\"Ingen\", \"Annan\", \"Markera alla\") på en ny rad, även när du använder en layout med flera kolumner.",
    // [Auto-translated] "Specify the location within the service dataset where the target array of objects is located. Leave empty if the URL already points to the array."
    path: "Ange den plats i tjänstdatauppsättningen där målmatrisen med objekt finns. Lämna tomt om URL:en redan pekar på matrisen.",
    choicesbyurl: {
      // "Enter a uniform property name within the array of objects whose value will be stored as a response in survey results."
      valueName: " "
    },
    // [Auto-translated] "Enter a uniform property name within the array of objects that contains the values you want to display in the choice list."
    titleName: "Ange ett enhetligt egenskapsnamn i den objektmatris som innehåller de värden som du vill visa i urvalslistan.",
    // [Auto-translated] "Select to allow the service to return an empty response or array."
    allowEmptyResponse: "Välj det här alternativet om du vill tillåta att tjänsten returnerar ett tomt svar eller en tom matris.",
    // [Auto-translated] "Use the magic wand icon to set a conditional rule that determines the visibility of all choice options."
    choicesVisibleIf: "Använd trollstavsikonen för att ställa in en villkorsregel som bestämmer synligheten för alla alternativ.",
    // [Auto-translated] "The left value serves as an item ID used in conditional rules, the right value is displayed to respondents."
    rateValues: "Det vänstra värdet fungerar som ett objekt-ID som används i villkorsregler, det högra värdet visas för respondenterna.",
    rating: {
      // "\"Auto\" selects between the \"Buttons\" and \"Dropdown\" modes based on the available width. When the width is insufficient to display buttons, the question displays a dropdown."
      displayMode: "\"Auto\" väljer mellan lägena \"Knappar\" och \"Rullgardinsmeny\" baserat på den tillgängliga bredden. När bredden inte räcker till för att visa knappar visas en listruta i frågan."
    },
    // [Auto-translated] "Allows you to connect questions that produce results in different formats. When such questions are linked together using a join identifier, this shared property stores selected question values."
    valuePropertyName: "Gör att du kan koppla ihop frågor som ger resultat i olika format. När sådana frågor länkas samman med hjälp av en kopplingsidentifierare lagrar den här delade egenskapen valda frågevärden.",
    // [Auto-translated] "Select if you want to update the drop-down menu contents to match the search query that a user is typing in the input field."
    searchEnabled: "Välj det här alternativet om du vill uppdatera innehållet i den nedrullningsbara menyn så att det matchar den sökfråga som användaren skriver i inmatningsfältet.",
    // [Auto-translated] "A value to save in survey results when respondents give a positive answer."
    valueTrue: "Ett värde att spara i undersökningsresultaten när respondenterna ger ett positivt svar.",
    // [Auto-translated] "A value to save in survey results when respondents give a negative answer."
    valueFalse: "Ett värde att spara i undersökningsresultaten när respondenterna ger ett negativt svar.",
    // [Auto-translated] "It's not recommended to disable this option as it overrides the Preview image and makes it hard for a user to understand whether the files have been uploaded."
    showPreview: "Vi rekommenderar inte att du inaktiverar det här alternativet eftersom det åsidosätter förhandsgranskningsbilden och gör det svårt för en användare att förstå om filerna har laddats upp.",
    // [Auto-translated] "Triggers a prompt asking to confirm the file deletion."
    needConfirmRemoveFile: "Utlöser en uppmaning om att bekräfta borttagningen av filen.",
    // [Auto-translated] "Enable to rank only selected choices. Users will drag selected items from the choice list to order them within the ranking area."
    selectToRankEnabled: "Aktivera för att endast rangordna valda alternativ. Användarna drar de valda objekten från urvalslistan för att ordna dem i rangordningsområdet.",
    // [Auto-translated] "Enter a list of choices that will be suggested to the respondent during input."
    dataList: "Ange en lista med alternativ som kommer att föreslås för respondenten under inmatningen.",
    // [Auto-translated] "The setting only resizes the input fields and doesn't affect the width of the question box."
    inputSize: "Inställningen ändrar bara storleken på inmatningsfälten och påverkar inte frågerutans bredd.",
    // [Auto-translated] "Sets consistent width for all item labels in pixels"
    itemTitleWidth: "Ställer in konsekvent bredd för alla objektetiketter. Accepterar CSS-värden (px, %, in, pt, etc.).",
    // "Select how to align input value within the field. The default setting \"Auto\" aligns the input value to the right if currency or numeric masking is applied and to the left if not."
    inputTextAlignment: "Välj hur du vill justera indatavärdet i fältet. Standardinställningen \"Auto\" justerar indatavärdet till höger om valutamaskering eller numerisk maskering används och till vänster om inte.",
    // [Auto-translated] "Serves as a substitute when the image cannot be displayed on a user's device and for accessibility purposes."
    altText: "Fungerar som ersättning när bilden inte kan visas på en användares enhet och i tillgänglighetssyfte.",
    // "Defines the color of the selected emoji when the Rating icon type is set to \"Smileys\". Choose between: \"Default\" - the selected emoji appears in default survey color; \"Scale\" - the selected emoji inherits color from the rating scale."
    rateColorMode: "Definierar färgen på den valda emojin när typen av betygsikon är inställd på \"Smileys\". Välj mellan: \"Standard\" - den valda emojin visas i standardundersökningsfärgen; \"Skala\" - den valda emojin ärver färg från betygsskalan.",
    expression: {
      // "An expression ID that is not visible to respondents."
      name: "Ett uttrycks-ID som inte är synligt för svarande.",
      // "Type an expression subtitle."
      description: "Skriv en underrubrik för uttrycket.",
      // "An expression can include basic calculations (`{q1_id} + {q2_id}`), conditions (`{age} > 60`), and functions ('iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, etc.)."
      expression: "Ett uttryck kan innehålla grundläggande beräkningar ('{q1_id} + {q2_id}'), villkor ('{age} > 60') och funktioner ('iif()', 'today()', 'age()', 'min()', 'max()', 'avg()', etc.)."
    },
    // "Select to store the \"Other\" option value as a separate property in survey results."
    storeOthersAsComment: "Välj det här alternativet om du vill lagra alternativvärdet \"Annat\" som en separat egenskap i undersökningsresultaten.",
    // [Auto-translated] "Use {0} as a placeholder for the actual value."
    format: "Använd {0} som platshållare för det faktiska värdet.",
    // [Auto-translated] "Refer to the [accept](https://www.w3schools.com/tags/att_input_accept.asp) attribute description for more information."
    acceptedTypes: "Mer information finns i attributbeskrivningen [accept](https://www.w3schools.com/tags/att_input_accept.asp).",
    // [Auto-translated] "Applicable only to Radiogroup and Checkbox cell types."
    columnColCount: "Gäller endast för Radiogroup- och Checkbox-celltyper.",
    // [Auto-translated] "Refer to the [autocomplete](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete) attribute description for more information."
    autocomplete: "Mer information finns i attributbeskrivningen [autocomplete](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete).",
    // "Applies when \"File source type\" is \"Local file\" or when camera is unavailable"
    filePlaceholder: "Gäller när \"Källtyp\" är \"Lokala filer\" eller när kameran inte är tillgänglig",
    // "Applies when \"File source type\" is \"Camera\"."
    photoPlaceholder: "Gäller när \"Källtyp\" är \"Kamera\".",
    // "Applies when \"File source type\" is \"Local file or camera\"."
    fileOrPhotoPlaceholder: "Gäller när \"Källtyp\" är \"Lokala filer eller kamera\".",
    // "Arranges choice options in a multi-column layout. When set to 0, the options are displayed in a single line."
    colCount: "Ordnar valalternativ i en layout med flera kolumner. När värdet är 0 visas alternativen på en enda rad.",
    masksettings: {
      // "Select if you want to store the question value with an applied mask in survey results."
      saveMaskedValue: "Välj om du vill lagra frågevärdet med en tillämpad mask i undersökningsresultaten."
    },
    patternmask: {
      // "The pattern can contain string literals and the following placeholders: `9` - for a digit; `a` - for an upper- or lower-case letter; `#` - for a digit or an upper- or lower-case letter. Use backslash `\\` to escape a character."
      pattern: "Mönstret kan innehålla strängliteraler och följande platshållare: \"9\" – för en siffra; \"a\" - för en stor eller liten bokstav; \"#\" – för en siffra eller en stor eller liten bokstav. Använd omvänt snedstreck \"\\\" för att undvika ett tecken."
    },
    datetimemask: {
      // "The pattern can contain separator characters and the following placeholders:<br>`m` - Month number.<br>`mm` - Month number, with leading zero for single-digit values.<br>`d` - Day of the month.<br>`dd` - Day of the month, with leading zero for single-digit values.<br>`yy` - The last two digits of the year.<br>`yyyy` - Four-digit year.<br>`H` - Hours in 24-hour format.<br>`HH` - Hours in 24-hour format, with leading zero for single-digit values.<br>`h` - Hours in 12-hour format.<br>`hh` - Hours in 12-hour format, with leading zero for single-digit values.<br>`MM` - Minutes.<br>`ss` - Seconds.<br>`TT` - 12-hour clock period in upper case (AM/PM).<br>`tt` - 12-hour clock period in lower case (am/pm)."
      pattern: "Mönstret kan innehålla avgränsningstecken och följande platshållare:<br>'m' – Månadsnummer.<br>\"mm\" – Månadsnummer, med inledande nolla för ensiffriga värden. <br>\"d\" – Dag i månaden. <br>\"dd\" – Dag i månaden, med inledande noll för ensiffriga värden. <br>\"yy\" – De två sista siffrorna i årtalet. <br>\"yyyy\" – Fyrsiffrigt årtal. <br>\"H\" – Timmar i 24-timmarsformat. <br>\"HH\" – Timmar i 24-timmarsformat, med inledande nolla för ensiffriga värden. <br>\"h\" – Timmar i 12-timmarsformat. <br>\"hh\" – Timmar i 12-timmarsformat, med inledande nolla för ensiffriga värden. <br>\"MM\" - Minuter. <br>\"ss\" – sekunder. <br>\"TT\" - 12-timmars klockperiod med versaler (AM/PM). <br>\"tt\" - 12-timmars klockperiod med gemener (am/pm)."
    },
    numericmask: {
      // "A symbol used to separate the fractional part from the integer part of a displayed number."
      decimalSeparator: "En symbol som används för att skilja bråkdelen från heltalsdelen av ett visat tal.",
      // "A symbol used to separate the digits of a large number into groups of three."
      thousandsSeparator: "En symbol som används för att dela upp siffrorna i ett stort tal i grupper om tre.",
      // "Limits how many digits to retain after the decimal point for a displayed number."
      precision: "Begränsar hur många siffror som ska behållas efter decimaltecknet för ett tal som visas."
    },
    currencymask: {
      // "One or several symbols to be displayed before the value."
      prefix: "En eller flera symboler som ska visas före värdet.",
      // "One or several symbols to be displayed after the value."
      suffix: "En eller flera symboler som ska visas efter värdet."
    },
    theme: {
      // "This setting applies only to questions outside of a panel."
      isPanelless: "Den här inställningen gäller endast för frågor utanför en panel.",
      // "Sets a supplementary color that highlights key survey elements."
      primaryColor: "Ställer in en extra färg som framhäver viktiga undersökningselement.",
      // "Adjusts the transparency of panels and question boxes relative to the survey background."
      panelBackgroundTransparency: "Justerar transparensen för paneler och frågerutor i förhållande till undersökningens bakgrund.",
      // "Adjusts the transparency of input elements relative to the survey background."
      questionBackgroundTransparency: "Justerar transparensen för indataelement i förhållande till undersökningens bakgrund.",
      // "Sets the corner radius for all rectangular elements. Enable the Advanced Mode if you want to set individual corner radius values for input elements or panels and question boxes."
      cornerRadius: "Anger hörnradien för alla rektangulära element. Aktivera Avancerat läge om du vill ställa in individuella hörnradievärden för inmatningselement eller paneler och frågerutor.",
      // "Sets the main background color of the survey."
      "--sjs-general-backcolor-dim": "Ställer in undersökningens huvudsakliga bakgrundsfärg."
    },
    header: {
      // "The \"Same as container\" option auto-adjusts the header content area width to fit into the HTML element the survey is placed in."
      inheritWidthFrom: "Alternativet \"Samma som behållare\" justerar automatiskt bredden på rubrikens innehållsområde så att det passar in i HTML-elementet som undersökningen placeras i.",
      // [Auto-translated] "The width of the header area that contains the survey title and description, measured in pixels."
      textAreaWidth: "Bredden på rubrikområdet som innehåller undersökningens titel och beskrivning, mätt i pixlar.",
      // [Auto-translated] "When enabled, the top of the survey overlays the bottom of the header."
      overlapEnabled: "När det här alternativet är aktiverat täcker den övre delen av undersökningen den nedre delen av sidhuvudet.",
      // [Auto-translated] "When set to 0, the height is calculated automatically to accommodate the header's content."
      mobileHeight: "När värdet är 0 beräknas höjden automatiskt för att passa rubrikens innehåll."
    },
    // "The \"Same as container\" option auto-adjusts the progress bar area width to fit into the HTML element the survey is placed in."
    progressBarInheritWidthFrom: "Alternativet \"Samma som behållare\" justerar automatiskt förloppsindikatorns bredd så att den passar in i HTML-elementet som undersökningen är placerad i.",
    // [Auto-translated] "Used when the 'Survey layout' is set to 'Single input field per page'. In this layout, the matrix is split so that each input field appears on a separate page. Use the {rowIndex} placeholder to insert auto numbering, {rowTitle} or {rowName} to reference the row's title or ID, and {row.columnid} to include the value of a specific matrix column."
    singleInputTitleTemplate: "Används när 'Undersökningslayout' är inställt på 'Enskilt inmatningsfält per sida'. I den här layouten är matrisen uppdelad så att varje inmatningsfält visas på en separat sida. Använd platshållaren {rowIndex} för att infoga automatisk numrering, {rowTitle} eller {rowName} för att referera till radens rubrik eller ID och {row.columnid} för att inkludera värdet för en specifik matriskolumn."
  },
  // Properties
  p: {
    title: {
      // "title"
      name: "title",
      // "Leave it empty, if it is the same as 'Name'"
      title: "Lämna den tom, ifall det är samma som 'Name'"
    },
    // [Auto-translated] "Allow multiple selection"
    multiSelect: "Tillåt flera val",
    // [Auto-translated] "Show image captions"
    showLabel: "Visa bildtexter",
    // [Auto-translated] "Swap the order of Yes and No"
    swapOrder: "Byt ordning på Ja och Nej",
    // [Auto-translated] "Value"
    value: "Värde",
    // [Auto-translated] "Tab alignment"
    tabAlign: "Justering av tabb",
    // [Auto-translated] "Source type"
    sourceType: "Typ av källa",
    // [Auto-translated] "Fit to container"
    fitToContainer: "Passa till behållare",
    // [Auto-translated] "Set value expression"
    setValueExpression: "Ange värde-uttryck",
    // "Description"
    description: "description",
    // [Auto-translated] "Logo fit"
    logoFit: "Logotyp passform",
    // [Auto-translated] "Pages"
    pages: "Sidor",
    // [Auto-translated] "Questions"
    questions: "Frågor",
    // "Triggers"
    triggers: "triggers",
    // [Auto-translated] "Calculated values"
    calculatedValues: "Beräknade värden",
    // [Auto-translated] "Survey id"
    surveyId: "Undersöknings-id",
    // [Auto-translated] "Survey post id"
    surveyPostId: "Post-id för undersökning",
    // [Auto-translated] "Survey show data saving"
    surveyShowDataSaving: "Undersökning visar datasparande",
    // [Auto-translated] "Question description location"
    questionDescriptionLocation: "Plats för frågebeskrivning",
    // [Auto-translated] "Progress bar type"
    progressBarType: "Typ av förloppsindikator",
    // [Auto-translated] "Show TOC"
    showTOC: "Visa innehållsförteckning",
    // [Auto-translated] "Toc location"
    tocLocation: "Toc-plats",
    // [Auto-translated] "Question title pattern"
    questionTitlePattern: "Mönster för frågerubrik",
    // [Auto-translated] "Width mode"
    widthMode: "Bredd, läge",
    // [Auto-translated] "Show brand info"
    showBrandInfo: "Visa varumärkesinformation",
    // [Auto-translated] "Use display values in dynamic texts"
    useDisplayValuesInDynamicTexts: "Använda visningsvärden i dynamiska texter",
    // "Visible if"
    visibleIf: "visibleIf",
    // [Auto-translated] "Default value expression"
    defaultValueExpression: "Uttryck för standardvärde",
    // [Auto-translated] "Required if"
    requiredIf: "Obligatoriskt om",
    // [Auto-translated] "Reset value if"
    resetValueIf: "Återställ värde om",
    // [Auto-translated] "Set value if"
    setValueIf: "Ange värde om",
    // "Validation rules"
    validators: "validators",
    // [Auto-translated] "Bindings"
    bindings: "Bindningar",
    // [Auto-translated] "Render as"
    renderAs: "Återge som",
    // [Auto-translated] "Attach original items"
    attachOriginalItems: "Bifoga originalföremål",
    // "Choices"
    choices: "choices",
    // "Choices by url"
    choicesByUrl: "choicesByUrl",
    // "Currency"
    currency: "currency",
    // [Auto-translated] "Cell hint"
    cellHint: "Cell tips",
    // [Auto-translated] "Total maximum fraction digits"
    totalMaximumFractionDigits: "Totalt antal maximala bråksiffror",
    // [Auto-translated] "Total minimum fraction digits"
    totalMinimumFractionDigits: "Totala minsta bråksiffror",
    // "Columns"
    columns: "columns",
    // [Auto-translated] "Detail elements"
    detailElements: "Detaljelement",
    // [Auto-translated] "Allow adaptive actions"
    allowAdaptiveActions: "Tillåt anpassningsbara åtgärder",
    // "Default row value"
    defaultRowValue: "defaultRowValue",
    // [Auto-translated] "Detail panel show on adding"
    detailPanelShowOnAdding: "Expandera automatiskt information om ny rad",
    // [Auto-translated] "Choices lazy load enabled"
    choicesLazyLoadEnabled: "Val lat belastning aktiverad",
    // [Auto-translated] "Choices lazy load page size"
    choicesLazyLoadPageSize: "Val lat ladda sidstorlek",
    // [Auto-translated] "Input field component"
    inputFieldComponent: "Komponent för inmatningsfält",
    // [Auto-translated] "Item component"
    itemComponent: "Komponent för objekt",
    // [Auto-translated] "Min"
    min: "Min",
    // [Auto-translated] "Max"
    max: "Max",
    // [Auto-translated] "Min value expression"
    minValueExpression: "Minsta värdeuttryck",
    // [Auto-translated] "Max value expression"
    maxValueExpression: "Uttryck för maximalt värde",
    // [Auto-translated] "Step"
    step: "Steg",
    // [Auto-translated] "Data list"
    dataList: "Lista över uppgifter",
    // "Input field width (in characters)"
    inputSize: "inputSize",
    // [Auto-translated] "Item label width (in px)"
    itemTitleWidth: "Bredd på objektetikett (i px)",
    // [Auto-translated] "Input value alignment"
    inputTextAlignment: "Justering av indatavärde",
    // [Auto-translated] "Elements"
    elements: "Element",
    // [Auto-translated] "Content"
    content: "Innehåll",
    // [Auto-translated] "Navigation title"
    navigationTitle: "Navigering titel",
    // [Auto-translated] "Navigation description"
    navigationDescription: "Beskrivning av navigering",
    // [Auto-translated] "Long tap"
    longTap: "Långt tryck",
    // [Auto-translated] "Auto grow"
    autoGrow: "Väx automatiskt",
    // [Auto-translated] "Allow resizing"
    allowResize: "Tillåt storleksändring",
    // [Auto-translated] "Accept carriage return"
    acceptCarriageReturn: "Acceptera retur av transport",
    // [Auto-translated] "Display mode"
    displayMode: "Visningsläge",
    // [Auto-translated] "Rate type"
    rateType: "Typ av hastighet",
    // "Label"
    label: "label",
    // [Auto-translated] "Content mode"
    contentMode: "Innehållsläge",
    // [Auto-translated] "Image fit"
    imageFit: "Bildens anpassning",
    // [Auto-translated] "Alt text"
    altText: "Alt-text",
    // [Auto-translated] "Height"
    height: "Höjd",
    // [Auto-translated] "Height on smartphones"
    mobileHeight: "Höjd på smartphones",
    // [Auto-translated] "Pen color"
    penColor: "Pennans färg",
    // [Auto-translated] "Background color"
    backgroundColor: "Bakgrundsfärg",
    // [Auto-translated] "Template elements"
    templateElements: "Mallelement",
    // [Auto-translated] "Operator"
    operator: "Operatör",
    // [Auto-translated] "Is variable"
    isVariable: "Är variabel",
    // [Auto-translated] "Run expression"
    runExpression: "Kör uttryck",
    // [Auto-translated] "Show caption"
    showCaption: "Visa bildtext",
    // [Auto-translated] "Icon name"
    iconName: "Ikonens namn",
    // [Auto-translated] "Icon size"
    iconSize: "Ikonens storlek",
    // [Auto-translated] "Precision"
    precision: "Precision",
    // [Auto-translated] "Matrix drag handle area"
    matrixDragHandleArea: "Matrisens draghandtagsområde",
    // [Auto-translated] "Background image"
    backgroundImage: "Bakgrundsbild",
    // [Auto-translated] "Background image fit"
    backgroundImageFit: "Anpassa bakgrundsbild",
    // [Auto-translated] "Background image attachment"
    backgroundImageAttachment: "Bilaga till bakgrundsbild",
    // [Auto-translated] "Background opacity"
    backgroundOpacity: "Bakgrunds opacitet",
    // [Auto-translated] "Select to rank enabled"
    selectToRankEnabled: "Välj att rangordna aktiverad",
    // [Auto-translated] "Select to rank areas layout"
    selectToRankAreasLayout: "Välj för att rangordna områdeslayout",
    // [Auto-translated] "Text to show if all options are selected"
    selectToRankEmptyRankedAreaText: "Text som ska visas om alla alternativ är markerade",
    // [Auto-translated] "Placeholder text for the ranking area"
    selectToRankEmptyUnrankedAreaText: "Platshållartext för rangordningsområdet",
    // [Auto-translated] "Allow camera access"
    allowCameraAccess: "Tillåt kameraåtkomst",
    // [Auto-translated] "Scale color mode"
    scaleColorMode: "Färgläge för skala",
    // [Auto-translated] "Rate color mode"
    rateColorMode: "Betygsätt färgläge",
    // [Auto-translated] "Copy display value"
    copyDisplayValue: "Kopiera visningsvärde",
    // [Auto-translated] "Column span"
    effectiveColSpan: "Kolumn spännvidd",
    // [Auto-translated] "Progress bar area width"
    progressBarInheritWidthFrom: "Bredd på förloppsindikatorns area"
  },
  theme: {
    // "Advanced mode"
    advancedMode: "Avancerat läge",
    // "Page"
    pageTitle: "Teckensnitt för sidtitel",
    // "Question box"
    questionTitle: "Teckensnitt för frågerubrik",
    // "Input element"
    editorPanel: "Inmatningselement",
    // [Auto-translated] "Lines"
    lines: "Linjer",
    // [Auto-translated] "Default"
    primaryDefaultColor: "Standard",
    // [Auto-translated] "Hover"
    primaryDarkColor: "Sväva",
    // [Auto-translated] "Selected"
    primaryLightColor: "Vald",
    // [Auto-translated] "Background color"
    backgroundDimColor: "Bakgrundsfärg",
    // "Corner radius"
    cornerRadius: "Hörn radie",
    // [Auto-translated] "Default background"
    backcolor: "Standardbakgrund",
    // [Auto-translated] "Hover background"
    hovercolor: "Håll muspekaren bakgrund",
    // [Auto-translated] "Border decoration"
    borderDecoration: "Border dekoration",
    // [Auto-translated] "Font color"
    fontColor: "Teckenfärg",
    // [Auto-translated] "Background color"
    backgroundColor: "Bakgrundsfärg",
    // [Auto-translated] "Default color"
    primaryForecolor: "Standardfärg",
    // [Auto-translated] "Disabled color"
    primaryForecolorLight: "Inaktiverad färg",
    // [Auto-translated] "Font"
    font: "Teckensnitt",
    // [Auto-translated] "Darker"
    borderDefault: "Mörkare",
    // [Auto-translated] "Lighter"
    borderLight: "Tändare",
    // [Auto-translated] "Font family"
    fontFamily: "Teckensnitt familj",
    // [Auto-translated] "Regular"
    fontWeightRegular: "Ordinarie",
    // [Auto-translated] "Heavy"
    fontWeightHeavy: "Tung",
    // [Auto-translated] "Semi-bold"
    fontWeightSemiBold: "Halvfet stil",
    // [Auto-translated] "Bold"
    fontWeightBold: "Djärv",
    // [Auto-translated] "Color"
    color: "Färg",
    // [Auto-translated] "Placeholder color"
    placeholderColor: "Platshållarens färg",
    // [Auto-translated] "Size"
    size: "Storlek",
    // [Auto-translated] "Opacity"
    opacity: "Ogenomskinlighet",
    // [Auto-translated] "X"
    boxShadowX: "X",
    // [Auto-translated] "Y"
    boxShadowY: "Y",
    // [Auto-translated] "Add Shadow Effect"
    boxShadowAddRule: "Lägg till skuggeffekt",
    // [Auto-translated] "Blur"
    boxShadowBlur: "Oskärpa",
    // [Auto-translated] "Spread"
    boxShadowSpread: "Sprida",
    // [Auto-translated] "Drop"
    boxShadowDrop: "Droppe",
    // [Auto-translated] "Inner"
    boxShadowInner: "Inre",
    names: {
      // [Auto-translated] "Default"
      default: "Standard",
      // [Auto-translated] "Sharp"
      sharp: "Skarp",
      // [Auto-translated] "Borderless"
      borderless: "Marginalfri",
      // [Auto-translated] "Flat"
      flat: "Flat",
      // [Auto-translated] "Plain"
      plain: "Slätt",
      // [Auto-translated] "Double Border"
      doubleborder: "Dubbel kantlinje",
      // [Auto-translated] "Layered"
      layered: "Lager",
      // [Auto-translated] "Solid"
      solid: "Solid",
      // [Auto-translated] "3D"
      threedimensional: ".3D",
      // [Auto-translated] "Contrast"
      contrast: "Kontrast"
    },
    colors: {
      // [Auto-translated] "Teal"
      teal: "Turkos",
      // [Auto-translated] "Blue"
      blue: "Blå",
      // [Auto-translated] "Purple"
      purple: "Lila",
      // [Auto-translated] "Orchid"
      orchid: "Orkidé",
      // [Auto-translated] "Tulip"
      tulip: "Tulpan",
      // [Auto-translated] "Brown"
      brown: "Brun",
      // [Auto-translated] "Green"
      green: "Grön",
      // [Auto-translated] "Gray"
      gray: "Grå"
    }
  },
  creatortheme: {
    // [Auto-translated] "Surface background"
    "--sjs-special-background": "Bakgrund på ytan",
    // [Auto-translated] "Primary"
    "--sjs-primary-background-500": "Primär",
    // [Auto-translated] "Secondary"
    "--sjs-secondary-background-500": "Sekundär",
    // [Auto-translated] "Surface"
    surfaceScale: "Yta",
    // [Auto-translated] "User interface"
    userInterfaceBaseUnit: "Användargränssnitt",
    // [Auto-translated] "Font"
    fontScale: "Teckensnitt",
    names: {
      // [Auto-translated] "Survey Creator 2020"
      sc2020: "Enkät skapare 2020",
      // [Auto-translated] "Light"
      "default-light": "Ljus",
      // [Auto-translated] "Dark"
      "default-dark": "Mörk",
      // [Auto-translated] "Contrast"
      "default-contrast": "Kontrast"
    }
  }
};

setupLocale({ localeCode: "sv", strings: svStrings });