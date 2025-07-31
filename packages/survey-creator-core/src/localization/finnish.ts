import { setupLocale } from "survey-creator-core";

export var fiStrings = {
  // survey templates
  survey: {
    // "Edit"
    edit: "Muokkaa",
    // "Watch and learn how to create surveys"
    externalHelpLink: "Katso ja opi luomaan kyselyjä",
    // "https://www.youtube.com/channel/UCH2ru9okIcooNZfpIbyq4qQ?view_as=subscriber"
    externalHelpLinkUrl: "https://www.youtube.com/channel/UCH2ru9okIcooNZfpIbyq4qQ?view_as=subscriber",
    // "Please drop a question here from the Toolbox."
    dropQuestion: "Pudota kysymys Työkalupakista tähän.",
    // "Create a rule to customize the flow of the survey."
    addLogicItem: "Luo sääntö mukauttamaan kyselyn kulkua.",
    // "Copy"
    copy: "Kopioi",
    // "Duplicate"
    duplicate: "Monista",
    // "Add to toolbox"
    addToToolbox: "Lisää Työkalupakkiin",
    // "Delete Panel"
    deletePanel: "Poista Paneeli",
    // "Delete Question"
    deleteQuestion: "Poista Kysymys",
    // "Convert to"
    convertTo: "Konvertoi",
    // "Drag element"
    drag: "Vedä elementtiä"
  },
  // Creator tabs
  tabs: {
    // "Preview"
    preview: "Testaa kysely",
    // "Themes"
    theme: "Teemat",
    // "Translations"
    translation: "Käännökset",
    // "Designer"
    designer: "Kyselyn suunnittelija",
    // [Auto-translated] "JSON Editor"
    json: "JSON-editori",
    // "Logic"
    logic: "Kyselyn säännöstö"
  },
  // Question types
  qt: {
    // "Default"
    default: "Oletusarvo",
    // "Checkboxes"
    checkbox: "Valintaruutu",
    // "Long Text"
    comment: "Kommentti",
    // "Image Picker"
    imagepicker: "Kuvanvalitsin",
    // "Ranking"
    ranking: "Sijoitus",
    // "Image"
    image: "Kuva",
    // "Dropdown"
    dropdown: "Pudotusvalikko",
    // [Auto-translated] "Multi-Select Dropdown"
    tagbox: "Avattava monivalintavalikko",
    // "File Upload"
    file: "Tiedosto",
    // "HTML"
    html: "Html",
    // "Single-Select Matrix"
    matrix: "Matriisi (yksi valinta)",
    // "Multi-Select Matrix"
    matrixdropdown: "Matriisi (monivalinta)",
    // "Dynamic Matrix"
    matrixdynamic: "Matriisi (dynaamiset rivit)",
    // "Multiple Textboxes"
    multipletext: "Useita tekstejä",
    // "Panel"
    panel: "Paneeli",
    // "Dynamic Panel"
    paneldynamic: "Paneeli (dynaamiset paneelit)",
    // "Radio Button Group"
    radiogroup: "Radiopainikeryhmä",
    // "Rating Scale"
    rating: "Luokitus",
    // [Auto-translated] "Slider"
    slider: "Liukusäädin",
    // "Single-Line Input"
    text: "Teksti",
    // "Yes/No (Boolean)"
    boolean: "Totuusarvomuuttuja",
    // "Expression (read-only)"
    expression: "Lauseke(vain luku)",
    // "Signature"
    signaturepad: "Allekirjoitusalusta",
    // [Auto-translated] "Button Group"
    buttongroup: "Painike-ryhmä"
  },
  toolboxCategories: {
    // "General"
    general: "Yleinen",
    // "Choice Questions"
    choice: "Valintaa koskevat kysymykset",
    // "Text Input Questions"
    text: "Tekstinsyöttökysymykset",
    // "Containers"
    containers: "Säiliöt",
    // "Matrix Questions"
    matrix: "Matriisin kysymykset",
    // "Misc"
    misc: "Muut"
  },
  // Strings in SurveyJS Creator
  ed: {
    // "Default ({0})"
    defaultLocale: "Vakio ({0})",
    // "Survey"
    survey: "Kysely",
    // "Settings"
    settings: "Kyselyn asetukset",
    // "Open settings"
    settingsTooltip: "Avaa kyselyn asetukset",
    // [Auto-translated] "Survey Settings"
    surveySettings: "Kyselyn asetukset",
    // [Auto-translated] "Open survey settings"
    surveySettingsTooltip: "Kyselyn asetukset",
    // [Auto-translated] "Theme Settings"
    themeSettings: "Teeman asetukset",
    // [Auto-translated] "Open theme settings"
    themeSettingsTooltip: "Teeman asetukset",
    // [Auto-translated] "Creator Settings"
    creatorSettingTitle: "Luontiasetukset",
    // "Show Panel"
    showPanel: "Näytä Paneeli",
    // "Hide Panel"
    hidePanel: "Piilota Paneeli",
    // [Auto-translated] "Select previous"
    prevSelected: "Valitse edellinen",
    // [Auto-translated] "Select next"
    nextSelected: "Valitse seuraava",
    // [Auto-translated] "Focus previous"
    prevFocus: "Keskity edelliseen",
    // [Auto-translated] "Focus next"
    nextFocus: "Keskity seuraavaksi",
    // "Survey"
    surveyTypeName: "Kysely",
    // [Auto-translated] "Page"
    pageTypeName: "Sivu",
    // [Auto-translated] "Panel"
    panelTypeName: "Paneeli",
    // [Auto-translated] "Question"
    questionTypeName: "Kysymys",
    // [Auto-translated] "Column"
    columnTypeName: "Sarake",
    // "Add New Page"
    addNewPage: "Lisää uusi sivu",
    // "Scroll to the Right"
    moveRight: "Selaa oikealle",
    // "Scroll to the Left"
    moveLeft: "Selaa vasemmalle",
    // "Delete Page"
    deletePage: "Poista sivu",
    // "Edit Page"
    editPage: "Muokkaa sivua",
    // "Edit"
    edit: "Muokkaa",
    // "page"
    newPageName: "sivu",
    // "question"
    newQuestionName: "kysymys",
    // "panel"
    newPanelName: "paneeli",
    // "text"
    newTextItemName: "teksti",
    // "Default"
    defaultV2Theme: "Oletus",
    // [Auto-translated] "Modern"
    modernTheme: "Moderni",
    // [Auto-translated] "Default (legacy)"
    defaultTheme: "Oletus (vanha)",
    // "Preview Survey Again"
    testSurveyAgain: "Testaa kysely uudestaan",
    // "Survey width: "
    testSurveyWidth: "Kyselyn laajuus: ",
    // "You had to navigate to"
    navigateToMsg: "Sinun piti navigoida:",
    // "Save Survey"
    saveSurvey: "Tallenna kysely",
    // "Save Survey"
    saveSurveyTooltip: "Tallenna kysely",
    // [Auto-translated] "Save Theme"
    saveTheme: "Tallenna teema",
    // [Auto-translated] "Save Theme"
    saveThemeTooltip: "Tallenna teema",
    // [Auto-translated] "Hide errors"
    jsonHideErrors: "Piilota virheet",
    // [Auto-translated] "Show errors"
    jsonShowErrors: "Näytä virheet",
    // "Undo"
    undo: "Kumoa",
    // "Redo"
    redo: "Tee uudelleen",
    // "Undo last change"
    undoTooltip: "Kumoa viimeinen muutos",
    // "Redo the change"
    redoTooltip: "Tee muutos uudelleen",
    // [Auto-translated] "Expand"
    expandTooltip: "Laajenna",
    // [Auto-translated] "Collapse"
    collapseTooltip: "Tiivistä",
    // "Expand All"
    expandAllTooltip: "Laajenna kaikki",
    // "Collapse All"
    collapseAllTooltip: "Kutista kaikki",
    // [Auto-translated] "Zoom In"
    zoomInTooltip: "Lähennä",
    // [Auto-translated] "Zoom to 100%"
    zoom100Tooltip: "100% kokoon",
    // [Auto-translated] "Zoom Out"
    zoomOutTooltip: "Loitonna",
    // [Auto-translated] "Lock expand/collapse state for questions"
    lockQuestionsTooltip: "Lukitse laajenna/kutista tila kysymyksiä varten",
    // [Auto-translated] "Show more"
    showMoreChoices: "Näytä lisää",
    // [Auto-translated] "Show less"
    showLessChoices: "Näytä vähemmän",
    // "Copy"
    copy: "Kopioi",
    // "Cut"
    cut: "Leikkaa",
    // "Paste"
    paste: "Liitä",
    // "Copy selection to clipboard"
    copyTooltip: "Kopioi valinta leikepöydälle",
    // "Cut selection to clipboard"
    cutTooltip: "Leikkaa valinta leikepöydälle",
    // "Paste from clipboard"
    pasteTooltip: "Liitä leikepöydältä",
    // "Options"
    options: "Vaihtoehdot",
    // "Generate Valid JSON"
    generateValidJSON: "Luo kelvollinen JSON",
    // "Generate Readable JSON"
    generateReadableJSON: "Luo luettava JSON",
    // "Toolbox"
    toolbox: "Työkalupakki",
    // "Properties"
    "property-grid": "Ominaisuudet",
    // [Auto-translated] "Search"
    toolboxSearch: "Etsiä",
    // [Auto-translated] "Type to search..."
    toolboxFilteredTextPlaceholder: "Kirjoita etsiäksesi...",
    // [Auto-translated] "No results found"
    toolboxNoResultsFound: "Tuloksia ei löytynyt",
    // [Auto-translated] "Type to search..."
    propertyGridFilteredTextPlaceholder: "Kirjoita etsiäksesi...",
    // [Auto-translated] "No results found"
    propertyGridNoResultsFound: "Tuloksia ei löytynyt",
    // [Auto-translated] "Start configuring your form"
    propertyGridPlaceholderTitle: "Aloita lomakkeen määrittäminen",
    // [Auto-translated] "Click any category icon to explore survey settings. Additional settings will become available once you add a survey element to the design surface."
    propertyGridPlaceholderDescription: "Napsauta mitä tahansa luokkakuvaketta tutustuaksesi kyselyn asetuksiin. Lisäasetukset ovat käytettävissä, kun lisäät mittauselementin suunnittelupintaan.",
    // "Please correct JSON."
    correctJSON: "Korjaa JSON.",
    // "Survey Results "
    surveyResults: "Kyselyn tulos:",
    // "As Table"
    surveyResultsTable: "Taulukossa",
    // "As JSON"
    surveyResultsJson: "JSON:ssa",
    // "Question Title"
    resultsTitle: "Kysymyksen otsikko",
    // "Question Name"
    resultsName: "Kysymyksen nimi",
    // "Answer Value"
    resultsValue: "Vastauksen arvo",
    // "Display Value"
    resultsDisplayValue: "Näytä arvo",
    // "Modified"
    modified: "Muokattu",
    // "Saving"
    saving: "Tallentaa",
    // "Saved"
    saved: "Tallennettu",
    // "Error"
    propertyEditorError: "Virhe:",
    // "Error! Editor content is not saved."
    saveError: "Virhe! Editorin sisältöä ei ole tallennettu.",
    // [Auto-translated] "Language Settings"
    translationPropertyGridTitle: "Kieliasetukset",
    // [Auto-translated] "Theme Settings"
    themePropertyGridTitle: "Teeman asetukset",
    // [Auto-translated] "Add Language"
    addLanguageTooltip: "Lisää kieli",
    // [Auto-translated] "Languages"
    translationLanguages: "Kielet",
    // [Auto-translated] "Are you certain you wish to delete all strings for this language?"
    translationDeleteLanguage: "Oletko varma, että haluat poistaa kaikki merkkijonot tältä kieleltä?",
    // "Select language to translate"
    translationAddLanguage: "Valitse käännettävä kieli",
    // "All Strings"
    translationShowAllStrings: "Näytä kaikki merkkijonot",
    // [Auto-translated] "Used Strings Only"
    translationShowUsedStringsOnly: "Vain käytetyt merkkijonot",
    // "All Pages"
    translationShowAllPages: "Näytä kaikki sivut",
    // "No strings to translate. Please change the filter."
    translationNoStrings: "Ei merkkijonoja käännettäväksi. Vaihda suodatin.",
    // "Export to CSV"
    translationExportToSCVButton: "Vie (CSV)",
    // "Import from CSV"
    translationImportFromSCVButton: "Tuo (CSV)",
    // [Auto-translated] "Auto-translate All"
    translateUsigAI: "Käännä kaikki automaattisesti",
    // [Auto-translated] "Translate from: "
    translateUsigAIFrom: "Käännös: ",
    // [Auto-translated] "Untranslated strings"
    translationDialogTitle: "Kääntämättömät merkkijonot",
    // "Merge {0} with default locale"
    translationMergeLocaleWithDefault: "Yhdistä {0} oletuskielellä",
    // [Auto-translated] "Translation..."
    translationPlaceHolder: "Käännös...",
    // [Auto-translated] "Source: "
    translationSource: "Lähde: ",
    // [Auto-translated] "Target: "
    translationTarget: "Kohde: ",
    // [Auto-translated] "YouTube links are not supported."
    translationYouTubeNotSupported: "YouTube-linkkejä ei tueta.",
    // [Auto-translated] "Export"
    themeExportButton: "Vie",
    // [Auto-translated] "Import"
    themeImportButton: "Tuo",
    // [Auto-translated] "Export"
    surveyJsonExportButton: "Vie",
    // [Auto-translated] "Import"
    surveyJsonImportButton: "Tuo",
    // [Auto-translated] "Copy to clipboard"
    surveyJsonCopyButton: "Kopioi leikepöydälle",
    // [Auto-translated] "Reset theme settings to default"
    themeResetButton: "Palauta teema-asetukset oletusasetuksiin",
    // [Auto-translated] "Do you really want to reset the theme? All your customizations will be lost."
    themeResetConfirmation: "Haluatko todella nollata teeman? Kaikki mukautuksesi menetetään.",
    // [Auto-translated] "Yes, reset the theme"
    themeResetConfirmationOk: "Kyllä, nollaa teema",
    // "Bold"
    bold: "Lihavoitu",
    // "Italic"
    italic: "Kursiivi",
    // "Underline"
    underline: "Alleviivaa",
    // "Add Question"
    addNewQuestion: "Lisää kysymys",
    // "Select page..."
    selectPage: "Valitse sivu...",
    // [Auto-translated] "Choices are copied from"
    carryForwardChoicesCopied: "Valinnat kopioidaan kohteesta",
    // [Auto-translated] "Choices are loaded from a web service."
    choicesLoadedFromWebText: "Valinnat ladataan verkkopalvelusta.",
    // [Auto-translated] "Go to settings"
    choicesLoadedFromWebLinkText: "Siirry asetuksiin",
    // [Auto-translated] "Preview of loaded choice options"
    choicesLoadedFromWebPreviewTitle: "Ladattujen valintavaihtoehtojen esikatselu",
    // [Auto-translated] "HTML content will be here."
    htmlPlaceHolder: "HTML-sisältö on täällä.",
    // [Auto-translated] "Drop a question from the toolbox here."
    panelPlaceHolder: "Pudota kysymys työkalupakista tähän.",
    // [Auto-translated] "The survey is empty. Drag an element from the toolbox or click the button below."
    surveyPlaceHolder: "Kysely on tyhjä. Vedä elementti työkalupakista tai napsauta alla olevaa painiketta.",
    // [Auto-translated] "The page is empty. Drag an element from the toolbox or click the button below."
    pagePlaceHolder: "Sivu on tyhjä. Vedä elementti työkalupakista tai napsauta alla olevaa painiketta.",
    // [Auto-translated] "Drag and drop an image here or click the button below and choose an image to upload"
    imagePlaceHolder: "Vedä ja pudota kuva tähän tai napsauta alla olevaa painiketta ja valitse ladattava kuva",
    // "Click the \"Add Question\" button below to start creating your form."
    surveyPlaceHolderMobile: "Napsauta alla olevaa Lisää kysymys -painiketta aloittaaksesi lomakkeen luomisen.",
    // [Auto-translated] "Your form is empty"
    surveyPlaceholderTitle: "Lomake on tyhjä",
    // [Auto-translated] "Your form is empty"
    surveyPlaceholderTitleMobile: "Lomake on tyhjä",
    // [Auto-translated] "Drag an element from the toolbox or click the button below."
    surveyPlaceholderDescription: "Vedä elementti työkalupakista tai napsauta alla olevaa painiketta.",
    // [Auto-translated] "Drag an element from the toolbox or click the button below."
    surveyPlaceholderDescriptionMobile: "Vedä elementti työkalupakista tai napsauta alla olevaa painiketta.",
    // [Auto-translated] "No preview"
    previewPlaceholderTitle: "Ei esikatselua",
    // [Auto-translated] "No preview"
    previewPlaceholderTitleMobile: "Ei esikatselua",
    // [Auto-translated] "The survey doesn't contain any visible elements."
    previewPlaceholderDescription: "Kysely ei sisällä näkyviä elementtejä.",
    // [Auto-translated] "The survey doesn't contain any visible elements."
    previewPlaceholderDescriptionMobile: "Kysely ei sisällä näkyviä elementtejä.",
    // [Auto-translated] "No strings to translate"
    translationsPlaceholderTitle: "Ei käännettäviä merkkijonoja",
    // [Auto-translated] "No strings to translate"
    translationsPlaceholderTitleMobile: "Ei käännettäviä merkkijonoja",
    // [Auto-translated] "Add elements to your form or change the strings filter in the toolbar."
    translationsPlaceholderDescription: "Lisää elementtejä lomakkeeseen tai muuta työkalurivin merkkijonosuodatinta.",
    // [Auto-translated] "Add elements to your form or change the strings filter in the toolbar."
    translationsPlaceholderDescriptionMobile: "Lisää elementtejä lomakkeeseen tai muuta työkalurivin merkkijonosuodatinta.",
    // "Click the \"Add Question\" button below to add a new element to the page."
    pagePlaceHolderMobile: "Napsauta alla olevaa Lisää kysymys -painiketta lisätäksesi sivulle uuden elementin.",
    // "Click the \"Add Question\" button below to add a new element to the panel."
    panelPlaceHolderMobile: "Napsauta alla olevaa Lisää kysymys -painiketta lisätäksesi uuden elementin paneeliin.",
    // [Auto-translated] "Click the button below and choose an image to upload"
    imagePlaceHolderMobile: "Klikkaa alla olevaa painiketta ja valitse ladattava kuva",
    // [Auto-translated] "Choose Image"
    imageChooseImage: "Valitse kuva",
    // [Auto-translated] "Add {0}"
    addNewTypeQuestion: "Lisää {0}", // {0} is localizable question type
    // [Auto-translated] "[LOGO]"
    chooseLogoPlaceholder: "[LOGO]",
    // [Auto-translated] "Item "
    choices_Item: "Kohta ",
    // [Auto-translated] "Select a file"
    selectFile: "Valitse tiedosto",
    // [Auto-translated] "Remove the file"
    removeFile: "Poista tiedosto",
    lg: {
      // [Auto-translated] "Add New Rule"
      addNewItem: "Lisää uusi sääntö",
      // [Auto-translated] "Create a rule to customize the flow of the survey."
      empty_tab: "Luo sääntö kyselyn kulun mukauttamista varten.",
      // [Auto-translated] "No logical rules"
      logicPlaceholderTitle: "Ei loogisia sääntöjä",
      // [Auto-translated] "No logical rules"
      logicPlaceholderTitleMobile: "Ei loogisia sääntöjä",
      // [Auto-translated] "Create a rule to customize the flow of the survey."
      logicPlaceholderDescription: "Luo sääntö kyselyn kulun mukauttamista varten.",
      // [Auto-translated] "Create a rule to customize the flow of the survey."
      logicPlaceholderDescriptionMobile: "Luo sääntö kyselyn kulun mukauttamista varten.",
      // "Show/hide page"
      page_visibilityName: "Sivun näkyvyys",
      // [Auto-translated] "Enable (disable) page"
      page_enableName: "Ota käyttöön (poista käytöstä) sivu",
      // [Auto-translated] "Make page required"
      page_requireName: "Tee sivusta pakollinen",
      // "Show/hide panel"
      panel_visibilityName: "Paneelin näkyvyys",
      // "Enable/disable panel"
      panel_enableName: "Paneeli käytössä/Ei käytössä",
      // [Auto-translated] "Make page required"
      panel_requireName: "Tee sivusta pakollinen",
      // "Show/hide question"
      question_visibilityName: "Kysymyksen näkyvyys",
      // "Enable/disable question"
      question_enableName: "Kysymys käytössä/Ei käytössä",
      // "Make question required"
      question_requireName: "Kysymys valinnainen vaaditaan",
      // [Auto-translated] "Reset question value"
      question_resetValueName: "Palauta kysymyksen arvo",
      // [Auto-translated] "Set question value"
      question_setValueName: "Aseta kysymyksen arvo",
      // [Auto-translated] "Show (hide) column"
      column_visibilityName: "Näytä (piilota) -sarake",
      // [Auto-translated] "Enable (disable) column"
      column_enableName: "Ota käyttöön (poista käytöstä) sarake",
      // [Auto-translated] "Make column required"
      column_requireName: "Tee sarakkeesta pakollinen",
      // [Auto-translated] "Reset column value"
      column_resetValueName: "Palauta sarakkeen arvo",
      // [Auto-translated] "Set column value"
      column_setValueName: "Sarakkeen arvon määrittäminen",
      // "Complete survey"
      trigger_completeName: "Valmis kysely",
      // "Set answer"
      trigger_setvalueName: "Aseta kysymyksen arvo",
      // "Copy answer"
      trigger_copyvalueName: "Kopioi kysymyksen arvo",
      // "Skip to question"
      trigger_skipName: "Ohita kysymys",
      // "Run expression"
      trigger_runExpressionName: "Suorita mukautettu lauseke",
      // "Set \"Thank You\" page markup"
      completedHtmlOnConditionName: "Mukautettu Kiitos -sivuteksti",
      // "Make the page visible when the logical expression evaluates to true. Otherwise, keep the page invisible."
      page_visibilityDescription: "Tee sivusta näkyvä, kun looginen lauseke palauttaa arvon tosi. Muuten pidä se näkymättömänä.",
      // "Make the page visible when the logical expression evaluates to true. Otherwise, keep the panel invisible."
      panel_visibilityDescription: "Tee paneelista näkyvä, kun looginen lauseke palauttaa arvon tosi. Muuten pidä se näkymättömänä.",
      // "Make the panel and all elements inside it enabled when the logical expression evaluates to true. Otherwise, keep them disabled."
      panel_enableDescription: "Ota paneeli ja kaikki sen sisällä olevat elementit käyttöön, kun looginen lauseke palauttaa arvon tosi. Muuten pidä ne poissa käytöstä.",
      // "Make the question visible when the logical expression evaluates to true. Otherwise, keep the question invisible."
      question_visibilityDescription: "Tee kysymyksestä näkyvä, kun looginen lauseke palauttaa arvon tosi. Muuten pidä se näkymättömänä.",
      // "Make the question enabled when the logical expression evaluates to true. Otherwise, keep the question disabled."
      question_enableDescription: "Ota kysymys käyttöön, kun looginen lauseke palauttaa arvon tosi. Muussa tapauksessa pidä se poissa käytöstä.",
      // "Question becomes required when the logical expression evaluates to true."
      question_requireDescription: "Kysymys tulee pakolliseksi, kun looginen lauseke palauttaa arvon tosi.",
      // "When the logical expression evaluates to true, the survey ends, and the respondent sees the \"Thank you\" page."
      trigger_completeDescription: "Kun looginen lauseke palauttaa arvon tosi, kysely valmistuu ja loppukäyttäjä näkee Kiitos -sivun.",
      // "When question values used in the logical expression are changed, and the expression evaluates to true, the specified value is assigned to the selected question."
      trigger_setvalueDescription: "Kun loogisessa lausekkeessa käytettyjä kysymysarvoja muutetaan ja looginen lauseke palauttaa arvon tosi, arvo asetetaan valitulle kysymykselle.",
      // "When question values used in the logical expression are changed, and the expression evaluates to true, the value of the selected question is copied to another question."
      trigger_copyvalueDescription: "Kun loogisessa lausekkeessa käytettyjä kysymysarvoja muutetaan ja looginen lauseke palauttaa arvon tosi, yhden valitun kysymyksen arvo kopioidaan toiseen valittuun kysymykseen.",
      // "When the logical expression evaluates to true, the survey focuses/jumps to the selected question."
      trigger_skipDescription: "Kun looginen lauseke palauttaa arvon tosi, kysely siirtyy valittuun kysymykseen / kohdista valittu kysymys.",
      // "When the logical expression evaluates to true, the survey evaluates another expression. Optionally, the result of the latter expression can be assigned as a value to the selected question"
      trigger_runExpressionDescription: "Kun looginen lauseke palauttaa arvon tosi, mukautettu lauseke suoritetaan. Voit valinnaisesti asettaa tämän lausekkeen tuloksen valittuun kysymykseen.",
      // "If the logical expression evaluates to true, the \"Thank You\" page displays the specified content."
      completedHtmlOnConditionDescription: "Jos looginen lauseke palauttaa arvon tosi, 'Kiitos-sivun' oletusteksti muutetaan annetuksi tekstiksi.",
      // "When expression: '{0}' returns true"
      itemExpressionText: "Kun lauseke: '{0}' palauttaa arvon tosi:", // {0} - the expression
      // [Auto-translated] "New rule"
      itemEmptyExpressionText: "Uusi sääntö",
      // "make page {0} visible"
      page_visibilityText: "Tee sivu {0} näkyväksi", // {0} page name
      // "make panel {0} visible"
      panel_visibilityText: "Tee paneelista {0} näkyvä", // {0} panel name
      // "make panel {0} enable"
      panel_enableText: "Ota paneeli {0} käyttöön", // {0} panel name
      // "make question {0} visible"
      question_visibilityText: "Tee kysymys {0} näkyväksi", // {0} question name
      // "make question {0} enable"
      question_enableText: "Ota kysymys {0} käyttöön", // {0} question name
      // "make question {0} required"
      question_requireText: "Tee kysymyksestä {0} pakollinen", // {0} question name
      // [Auto-translated] "reset value for question: {0}"
      question_resetValueText: "Nollaa kysymyksen arvo: {0}", // {0} question name.
      // [Auto-translated] "assign value: {1} to question: {0}"
      question_setValueText: "Määritä arvo: {1} kysymykseen: {0}",
      // [Auto-translated] "make column {0} of question {1} visible"
      column_visibilityText: "Tee kysymyksen {1} sarakkeesta {0} näkyvä", // {0} column name, {1} question name
      // [Auto-translated] "make column {0} of question {1} enable"
      column_enableText: "Ota kysymyksen sarake {0} {1} käyttöön", // {0} column name, {1} question name
      // [Auto-translated] "make column {0} of question {1} required"
      column_requireText: "Tee kysymyksen sarake {0} {1} pakollinen", // {0} column name, {1} question name
      // [Auto-translated] "reset cell value for column: {0}"
      column_resetValueText: "Palauta sarakkeen soluarvo: {0}", // {0} column name
      // [Auto-translated] "assign cell value: {1} to column: {0}"
      column_setValueText: "Määritä solun arvo: {1} sarakkeeseen: {0}", // {0} column name and {1} setValueExpression
      // [Auto-translated] " An expression whose result will be assigned to the target question."
      setValueExpressionPlaceholder: " Lauseke, jonka tulos määritetään kohdekysymykselle.",
      // "survey becomes completed"
      trigger_completeText: "Kyselystä tulee täytetty",
      // "set into question: {0} value {1}"
      trigger_setvalueText: "Laita arvo {1} kysymykseen {0}", // {0} question name, {1} setValue
      // [Auto-translated] "clear question value: {0}"
      trigger_setvalueEmptyText: "Selkeän kysymyksen arvo: {0}", // {0} question name
      // "copy into question: {0} value from question {1}"
      trigger_copyvalueText: "Kopioi kysymykseen: {0} arvo kysymyksestä {1}", // {0} and {1} question names
      // "survey skip to the question {0}"
      trigger_skipText: "Siirry kyselyn kysymykseen {0}", // {0} question name
      // "run expression: '{0}'"
      trigger_runExpressionText1: "Suorita lauseke: '{0}'", // {0} the expression
      // " and set its result into question: {0}"
      trigger_runExpressionText2: " ja aseta sen tulos kysymykseen: {0}", // {0} question name
      // "show custom text for the \"Thank You\" page."
      completedHtmlOnConditionText: "Näytä mukautettu teksti Kiitos -sivulle.",
      // [Auto-translated] "All Questions"
      showAllQuestions: "Kaikki kysymykset",
      // [Auto-translated] "All Action Types"
      showAllActionTypes: "Kaikki toimintotyypit",
      // "Condition(s)"
      conditions: "Ehdot",
      // "Action(s)"
      actions: "Toiminnot",
      // "Define condition(s)"
      expressionEditorTitle: "Määritä olosuhteet",
      // "Define action(s)"
      actionsEditorTitle: "Määritä toiminnot",
      // "Delete Action"
      deleteAction: "Poista toiminto",
      // "Add Action"
      addNewAction: "Lisää uusi toiminto",
      // "Select action..."
      selectedActionCaption: "Valitse lisättävä toiminto ...",
      // "The logic expression is empty or invalid. Please correct it."
      expressionInvalid: "Looginen lauseke on tyhjä tai virheellinen. Korjaa se.",
      // "Please add at least one action."
      noActionError: "Lisää ainakin yksi toiminto.",
      // "Please fix issues in your action(s)."
      actionInvalid: "Korjaa ongelmat toiminnoissa.",
      // [Auto-translated] "Logical rules are incomplete"
      uncompletedRule_title: "Loogiset säännöt ovat epätäydellisiä",
      // [Auto-translated] "You have not completed some of the logical rules. If you leave the tab now, the changes will be lost. Do you still want to leave the tab without completing the changes?"
      uncompletedRule_text: "Et ole suorittanut joitakin loogisia sääntöjä. Jos poistut välilehdestä nyt, muutokset menetetään. Haluatko silti poistua välilehdeltä suorittamatta muutoksia?",
      // [Auto-translated] "Yes"
      uncompletedRule_apply: "Kyllä",
      // [Auto-translated] "No, I want to complete the rules"
      uncompletedRule_cancel: "Ei, haluan täyttää säännöt"
    }
  },
  // Property Editors
  pe: {
    panel: {
      // [Auto-translated] "Panel name"
      name: "Paneelin nimi",
      // [Auto-translated] "Panel title"
      title: "Paneelin otsikko",
      // [Auto-translated] "Panel description"
      description: "Paneelin kuvaus",
      // [Auto-translated] "Make the panel visible if"
      visibleIf: "Tee paneeli näkyväksi, jos",
      // [Auto-translated] "Make the panel required if"
      requiredIf: "Tee paneeli pakolliseksi, jos",
      // [Auto-translated] "Question order within the panel"
      questionOrder: "Kysymysjärjestys paneelissa",
      // [Auto-translated] "Repositions the panel to the end of a selected page."
      page: "Pääsivu",
      // [Auto-translated] "Display the panel on a new line"
      startWithNewLine: "Näytä paneeli uudella rivillä",
      // [Auto-translated] "Panel expand state"
      state: "Paneelin tiivistystila",
      // [Auto-translated] "Width (in CSS-accepted values)"
      width: "Tekstiin sidotun paneelin leveys",
      // [Auto-translated] "Minimum width (in CSS-accepted values)"
      minWidth: "Paneelin vähimmäisleveys",
      // [Auto-translated] "Maximum width (in CSS-accepted values)"
      maxWidth: "Paneelin enimmäisleveys",
      // [Auto-translated] "Show panel number"
      showNumber: "Numeroi tämä paneeli"
    },
    panellayoutcolumn: {
      // [Auto-translated] "Ex.: 30%"
      effectiveWidth: "Tehollinen leveys, %",
      // [Auto-translated] "Question title width"
      questionTitleWidth: "Kysymyksen otsikon leveys, px"
    },
    paneldynamic: {
      // [Auto-translated] "Panel name"
      name: "Paneelin nimi",
      // [Auto-translated] "Panel title"
      title: "Paneelin otsikko",
      // [Auto-translated] "Panel description"
      description: "Paneelin kuvaus",
      // [Auto-translated] "Entry display mode"
      displayMode: "Sisääntulon näyttötila",
      // [Auto-translated] "Make the panel visible if"
      visibleIf: "Tee paneeli näkyväksi, jos",
      // [Auto-translated] "Make the panel required if"
      requiredIf: "Tee paneeli pakolliseksi, jos",
      // [Auto-translated] "Move the panel to page"
      page: "Paneelin siirtäminen sivulle",
      // [Auto-translated] "Display the panel on a new line"
      startWithNewLine: "Näytä paneeli uudella rivillä",
      // [Auto-translated] "Panel collapse state"
      state: "Paneelin tiivistystila",
      // [Auto-translated] "Inline panel width"
      width: "Tekstiin sidotun paneelin leveys",
      // [Auto-translated] "Minimum panel width"
      minWidth: "Paneelin vähimmäisleveys",
      // [Auto-translated] "Maximum panel width"
      maxWidth: "Paneelin enimmäisleveys",
      // [Auto-translated] "Confirm row removal"
      confirmDelete: "Vahvista paneelin poisto",
      // [Auto-translated] "Description template"
      templateDescription: "Paneelin kuvauskuvio",
      // [Auto-translated] "Title template"
      templateTitle: "Paneelin otsikkomalli",
      // [Auto-translated] "Empty entries text"
      noEntriesText: "Tyhjä paneelin teksti",
      // [Auto-translated] "Tab title pattern"
      templateTabTitle: "Välilehden otsikkomalli",
      // [Auto-translated] "Tab title placeholder"
      tabTitlePlaceholder: "Välilehden otsikon paikkamerkki",
      // [Auto-translated] "Make an individual panel visible if"
      templateVisibleIf: "Tee yksittäinen paneeli näkyväksi, jos",
      // [Auto-translated] "Number the panel"
      showNumber: "Paneelin numerointi",
      // [Auto-translated] "Panel title alignment"
      titleLocation: "Paneelin otsikon tasaus",
      // [Auto-translated] "Panel description alignment"
      descriptionLocation: "Paneelin kuvauksen tasaus",
      // [Auto-translated] "Question title location"
      templateQuestionTitleLocation: "Kysymyksen otsikon tasaus",
      // [Auto-translated] "Question title width"
      templateQuestionTitleWidth: "Kysymyksen otsikon leveys",
      // [Auto-translated] "Error message alignment"
      templateErrorLocation: "Virhesanoman tasaus",
      // [Auto-translated] "New panel location"
      newPanelPosition: "Uusi paneelin sijainti",
      // [Auto-translated] "Show progress bar"
      showRangeInProgress: "Edistymispalkin näyttäminen",
      // [Auto-translated] "Key column"
      keyName: "Päällekkäisten vastausten estäminen seuraavassa kysymyksessä"
    },
    question: {
      // [Auto-translated] "Question name"
      name: "Kysymyksen nimi",
      // [Auto-translated] "Question title"
      title: "Kysymyksen otsikko",
      // [Auto-translated] "Question description"
      description: "Kysymyksen kuvaus",
      // [Auto-translated] "Show the title and description"
      showTitle: "Näytä otsikko ja kuvaus",
      // [Auto-translated] "Make the question visible if"
      visibleIf: "Tee kysymys näkyväksi, jos",
      // [Auto-translated] "Make the question required if"
      requiredIf: "Tee kysymys pakolliseksi, jos",
      // [Auto-translated] "Parent page"
      page: "Pääsivu",
      // [Auto-translated] "Question box collapse state"
      state: "Kysymysruudun tiivistystila",
      // [Auto-translated] "Number this question"
      showNumber: "Numeroi tämä kysymys",
      // [Auto-translated] "Question title alignment"
      titleLocation: "Kysymyksen otsikon tasaus",
      // [Auto-translated] "Question description alignment"
      descriptionLocation: "Kysymyksen kuvauksen tasaus",
      // [Auto-translated] "Error message alignment"
      errorLocation: "Virhesanoman tasaus",
      // [Auto-translated] "Add indents"
      indent: "Suurentaa sisintä sisennystä",
      // [Auto-translated] "Inline question width"
      width: "Tekstiin sitoutuvan kysymyksen leveys",
      // [Auto-translated] "Minimum question width"
      minWidth: "Kysymyksen vähimmäisleveys",
      // [Auto-translated] "Maximum question width"
      maxWidth: "Kysymyksen enimmäisleveys",
      // [Auto-translated] "Update text question value"
      textUpdateMode: "Päivitä syöttökentän arvo"
    },
    signaturepad: {
      // [Auto-translated] "Signature width"
      signatureWidth: "Allekirjoitusalueen leveys",
      // [Auto-translated] "Signature height"
      signatureHeight: "Allekirjoitusalueen korkeus",
      // [Auto-translated] "Auto-scale the signature area"
      signatureAutoScaleEnabled: "Allekirjoitusalueen automaattinen skaalaus",
      // [Auto-translated] "Show the placeholder"
      showPlaceholder: "Paikkamerkin näyttäminen",
      // [Auto-translated] "Placeholder text"
      placeholder: "Paikkamerkkiteksti",
      // [Auto-translated] "Placeholder text in read-only or preview mode"
      placeholderReadOnly: "Paikkamerkkiteksti vain luku -tilassa tai esikatselutilassa",
      // [Auto-translated] "Show the Clear button"
      allowClear: "Näytä Tyhjennä-painike allekirjoitusalueella",
      // [Auto-translated] "Minimum pen width"
      penMinWidth: "Kynän vähimmäisleveys",
      // [Auto-translated] "Maximum pen width"
      penMaxWidth: "Kynän enimmäisleveys",
      // [Auto-translated] "Stroke color"
      penColor: "Kynän väri"
    },
    comment: {
      // [Auto-translated] "Input field height (in lines)"
      rows: "Syöttökentän korkeus (viivoina)"
    },
    // "Question numbering"
    showQuestionNumbers: "Näytä kysymysnumerot",
    // "Question indexing type"
    questionStartIndex: "Kysymyksen aloitus indeksi (1, 2 or 'A', 'a')",
    expression: {
      // [Auto-translated] "Expression name"
      name: "Lausekkeen nimi",
      // [Auto-translated] "Expression title"
      title: "Lausekkeen otsikko",
      // [Auto-translated] "Expression description"
      description: "Lausekkeen kuvaus",
      // [Auto-translated] "Expression"
      expression: "Lauseke"
    },
    trigger: {
      // [Auto-translated] "Expression"
      expression: "Lauseke"
    },
    calculatedvalue: {
      // [Auto-translated] "Expression"
      expression: "Lauseke"
    },
    // survey templates
    survey: {
      // [Auto-translated] "Title"
      title: "Kyselyn otsikko",
      // [Auto-translated] "Survey description"
      description: "Kyselyn kuvaus",
      // [Auto-translated] "Read-only"
      readOnly: "Tee kyselystä vain luku -muotoinen"
    },
    page: {
      // [Auto-translated] "Page name"
      name: "Sivun nimi",
      // [Auto-translated] "Title"
      title: "Sivun otsikko",
      // [Auto-translated] "Page description"
      description: "Sivun kuvaus",
      // [Auto-translated] "Make the page visible if"
      visibleIf: "Tee sivusta näkyvä, jos",
      // [Auto-translated] "Make the page required if"
      requiredIf: "Tee sivusta pakollinen, jos",
      // [Auto-translated] "Time limit to finish the page (in seconds)"
      timeLimit: "Sivun viimeistelyn aikaraja (sekunteina)",
      // [Auto-translated] "Question order on the page"
      questionOrder: "Kysymysjärjestys sivulla"
    },
    matrixdropdowncolumn: {
      // [Auto-translated] "Column name"
      name: "Sarakkeen nimi",
      // [Auto-translated] "Column title"
      title: "Sarakkeen otsikko",
      // [Auto-translated] "Prevent duplicate responses"
      isUnique: "Päällekkäisten vastausten estäminen",
      // [Auto-translated] "Column width"
      width: "Sarakeleveys",
      // [Auto-translated] "Minimum column width"
      minWidth: "Sarakkeen vähimmäisleveys",
      // [Auto-translated] "Input field height (in lines)"
      rows: "Syöttökentän korkeus (viivoina)",
      // [Auto-translated] "Make the column visible if"
      visibleIf: "Tee sarakkeesta näkyvä, jos",
      // [Auto-translated] "Make the column required if"
      requiredIf: "Tee sarakkeesta pakollinen, jos",
      // [Auto-translated] "Each option in a separate column"
      showInMultipleColumns: "Jokainen vaihtoehto erillisessä sarakkeessa"
    },
    multipletextitem: {
      // [Auto-translated] "Name"
      name: "Nimi",
      // [Auto-translated] "Title"
      title: "Otsikko"
    },
    masksettings: {
      // [Auto-translated] "Save masked value in survey results"
      saveMaskedValue: "Peitetyn arvon tallentaminen kyselyn tuloksiin"
    },
    patternmask: {
      // [Auto-translated] "Value pattern"
      pattern: "Arvon kuvio"
    },
    datetimemask: {
      // [Auto-translated] "Minimum value"
      min: "Pienin arvo",
      // [Auto-translated] "Maximum value"
      max: "Suurin arvo"
    },
    numericmask: {
      // [Auto-translated] "Allow negative values"
      allowNegativeValues: "Salli negatiiviset arvot",
      // [Auto-translated] "Thousands separator"
      thousandsSeparator: "Tuhansien erotin",
      // [Auto-translated] "Decimal separator"
      decimalSeparator: "Desimaalierotin",
      // [Auto-translated] "Value precision"
      precision: "Arvon tarkkuus",
      // [Auto-translated] "Minimum value"
      min: "Pienin arvo",
      // [Auto-translated] "Maximum value"
      max: "Suurin arvo"
    },
    currencymask: {
      // [Auto-translated] "Currency prefix"
      prefix: "Valuutan etuliite",
      // [Auto-translated] "Currency suffix"
      suffix: "Valuutan jälkiliite"
    },
    // [Auto-translated] "Clear others when selected"
    isExclusive: "Poista muut, kun se on valittuna",
    // [Auto-translated] "Require user to enter a comment"
    isCommentRequired: "Vaadi käyttäjää kirjoittamaan kommentti",
    // "Display area height"
    imageHeight: "Kuvan korkeus",
    // "Display area width"
    imageWidth: "Kuvan leveys",
    // "Join identifier"
    valueName: "Arvon nimi",
    // [Auto-translated] "Default display value for dynamic texts"
    defaultDisplayValue: "Dynaamisten tekstien oletusnäyttöarvo",
    // [Auto-translated] "Label alignment"
    rateDescriptionLocation: "Otsikon tasaus",
    // [Auto-translated] "Input field size (in characters)"
    size: "Syöttökentän leveys (merkkeinä)",
    // [Auto-translated] "Cell error message alignment"
    cellErrorLocation: "Solun virhesanoman tasaus",
    // [Auto-translated] "Enabled"
    enabled: "Käytössä",
    // "Disabled"
    disabled: "Pois käytöstä",
    // [Auto-translated] "Inherit"
    inherit: "Peri",
    // "Apply"
    apply: "Käytä",
    // "OK"
    ok: "OK",
    // "Save"
    save: "Tallenna",
    // [Auto-translated] "Clear"
    clear: "Tyhjennä",
    // "Save"
    saveTooltip: "Tallenna",
    // "Cancel"
    cancel: "Peruuta",
    // [Auto-translated] "Set"
    set: "Aseta",
    // "Reset"
    reset: "Nollaa",
    // [Auto-translated] "Change"
    change: "Muuttaa",
    // "Refresh"
    refresh: "Päivitä",
    // [Auto-translated] "Close"
    close: "Sulje",
    // "Delete"
    delete: "Poista",
    // "Add"
    add: "Lisää",
    // "Add New"
    addNew: "Lisää uusi",
    // "Click to add an item..."
    addItem: "Klikkaa lisätäksesi uusi kohde...",
    // [Auto-translated] "Click to remove the item..."
    removeItem: "Poista kohde napsauttamalla...",
    // [Auto-translated] "Drag the item"
    dragItem: "Kohteen vetäminen",
    // "Other"
    addOther: "Muu",
    // "Select All"
    addSelectAll: "Valitse kaikki",
    // "None"
    addNone: "Ei mitään",
    // "Remove All"
    removeAll: "Poista kaikki",
    // "Edit"
    edit: "Muokkaa",
    // "Return without saving"
    back: "Palaa tallentamatta",
    // "Return without saving"
    backTooltip: "Palaa tallentamatta",
    // "Save and return"
    saveAndBack: "Tallenna ja palaa",
    // "Save and return"
    saveAndBackTooltip: "Tallenna ja palaa",
    // [Auto-translated] "Done"
    doneEditing: "Valmis",
    // "Edit Choices"
    editChoices: "Muokkaa valintoja",
    // "Show Choices"
    showChoices: "Näytä valinnat",
    // "Move"
    move: "Siirrä",
    // "<empty>"
    empty: "<tyhjä>",
    // [Auto-translated] "Value is empty"
    emptyValue: "Arvo on tyhjä",
    // "Manual Entry"
    fastEntry: "Nopea pääsy",
    // "Value '{0}' is not unique"
    fastEntryNonUniqueError: "Arvo \"{0}\" ei ole ainutkertainen",
    // [Auto-translated] "Please limit the number of items from {0} to {1}"
    fastEntryChoicesCountError: "Rajoita tuotteiden määrä {0} {1}",
    // [Auto-translated] "Please enter at least {0} items"
    fastEntryChoicesMinCountError: "Anna vähintään {0} kohdetta",
    // [Auto-translated] "You can set data in the following format:\nvalue1|text\nvalue2"
    fastEntryPlaceholder: "Voit asettaa tiedot seuraavassa muodossa:\narvo1|teksti\narvo2",
    // "Form Entry"
    formEntry: "Lomakkeen pääsy",
    // "Test the service"
    testService: "Testaa palvelu",
    // "Please select the element"
    itemSelectorEmpty: "Valitse elementti",
    // "Please select the action"
    conditionActionEmpty: "Valitse toiminto",
    // "Select a question..."
    conditionSelectQuestion: "Valitse kysymys...",
    // "Select a page..."
    conditionSelectPage: "Valitse sivu...",
    // "Select a panel..."
    conditionSelectPanel: "Valitse paneeli...",
    // "Please enter/select the value"
    conditionValueQuestionTitle: "Syötä / valitse arvo",
    // "Press ctrl+space to get expression completion hint"
    aceEditorHelp: "Paina ctrl + välilyönti saadaksesi lausekkeen täydennysvihje",
    // "Current row"
    aceEditorRowTitle: "Nykyinen rivi",
    // "Current panel"
    aceEditorPanelTitle: "Nykyinen paneeli",
    // "For more details please check the documentation"
    showMore: "Katso lisätietoja dokumentaatiosta",
    // "Available questions"
    assistantTitle: "Saatavilla olevat kysymykset:",
    // "There is should be at least one column or row"
    cellsEmptyRowsColumns: "Sarakkeita tai rivejä on oltava vähintään yksi",
    // [Auto-translated] "Preview answers before submitting the survey"
    showPreviewBeforeComplete: "Esikatsele vastauksia ennen kyselyn lähettämistä",
    // [Auto-translated] "Set by "
    overridingPropertyPrefix: "Asettaja ",
    // [Auto-translated] "Reset"
    resetToDefaultCaption: "Nollata",
    // "Please enter a value"
    propertyIsEmpty: "Anna arvo",
    // "Please enter a unique value"
    propertyIsNoUnique: "Anna yksilöllinen arvo",
    // "Please enter a unique name"
    propertyNameIsNotUnique: "Anna yksilöllinen nimi",
    // "Do not use reserved words: \"item\", \"choice\", \"panel\", \"row\"."
    propertyNameIsIncorrect: "Älä käytä varattuja sanoja: \"kohde\", \"valinta\", \"paneeli\", \"rivi\".",
    // "You don't have any items yet"
    listIsEmpty: "Lisää uusi kohde",
    // [Auto-translated] "No choices have been added yet"
    "listIsEmpty@choices": "Vaihtoehtoja ei ole vielä lisätty",
    // [Auto-translated] "You don't have any columns yet"
    "listIsEmpty@columns": "Sinulla ei ole vielä sarakkeita",
    // [Auto-translated] "You don't have layout columns yet"
    "listIsEmpty@gridLayoutColumns": "Sinulla ei vielä ole asettelusarakkeita",
    // [Auto-translated] "You don't have any rows yet"
    "listIsEmpty@rows": "Sinulla ei ole vielä rivejä",
    // [Auto-translated] "You don't have any validation rules yet"
    "listIsEmpty@validators": "Sinulla ei ole vielä vahvistussääntöjä",
    // [Auto-translated] "You don't have any custom variables yet"
    "listIsEmpty@calculatedValues": "Sinulla ei ole vielä mukautettuja muuttujia",
    // [Auto-translated] "You don't have any triggers yet"
    "listIsEmpty@triggers": "Sinulla ei ole vielä käynnistimiä",
    // [Auto-translated] "You don't have any links yet"
    "listIsEmpty@navigateToUrlOnCondition": "Sinulla ei ole vielä linkkejä",
    // [Auto-translated] "You don't have any pages yet"
    "listIsEmpty@pages": "Sinulla ei ole vielä sivuja",
    // [Auto-translated] "Add a choice"
    "addNew@choices": "Lisää vaihtoehto",
    // [Auto-translated] "Add new column"
    "addNew@columns": "Lisää uusi sarake",
    // [Auto-translated] "Add new row"
    "addNew@rows": "Lisää uusi rivi",
    // [Auto-translated] "Add new rule"
    "addNew@validators": "Lisää uusi sääntö",
    // [Auto-translated] "Add new variable"
    "addNew@calculatedValues": "Lisää uusi muuttuja",
    // [Auto-translated] "Add new trigger"
    "addNew@triggers": "Lisää uusi käynnistin",
    // [Auto-translated] "Add new URL"
    "addNew@navigateToUrlOnCondition": "Lisää uusi URL-osoite",
    // [Auto-translated] "Add new page"
    "addNew@pages": "Lisää uusi sivu",
    // "Expression is empty"
    expressionIsEmpty: "Lauseke on tyhjä",
    // "Value"
    value: "Arvo",
    // "Text"
    text: "Teksti",
    // "Row ID"
    rowid: "Rivin ID",
    // "Image or video file URL"
    imageLink: "Kuvalinkki",
    // "Edit column: {0}"
    columnEdit: "Muokkaa saraketta: {0}",
    // "Edit item: {0}"
    itemEdit: "Muokkaa kohdetta: {0}",
    // "URL"
    url: "URL",
    // "Path to data"
    path: "Polku",
    choicesbyurl: {
      // [Auto-translated] "Web service's URL"
      url: "Verkkopalvelun URL-osoite",
      // [Auto-translated] "Get values from the following JSON field"
      valueName: "Hae arvot seuraavasta JSON-kentästä"
    },
    // "Get value to display from the following property"
    titleName: "Otsikon nimi",
    // [Auto-translated] "Get image URLs from the following JSON field"
    imageLinkName: "Hae kuvien URL-osoitteet seuraavasta JSON-kentästä",
    // [Auto-translated] "Allow empty response"
    allowEmptyResponse: "Salli tyhjä vastaus",
    // "Title"
    titlePlaceholder: "Syötä otsikko tähän",
    // "Survey Title"
    surveyTitlePlaceholder: "Syötä kyselyn otsikko tähän",
    // "Page {num}"
    pageTitlePlaceholder: "Syötä sivun otsikko tähän",
    // [Auto-translated] "Start Page"
    startPageTitlePlaceholder: "Aloitussivu",
    // "Description"
    descriptionPlaceholder: "Lisää kuvaus",
    // "Description"
    surveyDescriptionPlaceholder: "Lisää kyselyn kuvaus",
    // "Description"
    pageDescriptionPlaceholder: "Lisää sivun kuvaus",
    // [Auto-translated] "Wrap choices"
    textWrapEnabled: "Kääri valinnat",
    // "Enable the \"Other\" option"
    showOtherItem: "On muu",
    // "Rename the \"Other\" option"
    otherText: "Muu teksti",
    // "Enable the \"None\" option"
    showNoneItem: "Ei mitään",
    // [Auto-translated] "Allow the Refuse to Answer option"
    showRefuseItem: "Salli Kieltäydy vastaamasta -vaihtoehto",
    // [Auto-translated] "Allow the Don't Know option"
    showDontKnowItem: "Salli En tiedä -vaihtoehto",
    // "Rename the \"None\" option"
    noneText: "Ei mitään tekstiä",
    // "Enable the \"Select All\" option"
    showSelectAllItem: "On valinnut kaikki",
    // "Rename the \"Select All\" option"
    selectAllText: "Valitse kaikki tekstit",
    // "Minimum value for auto-generated items"
    choicesMin: "Automaattisesti luotujen valintojen vähimmäisarvo",
    // "Maximum value for auto-generated items"
    choicesMax: "Automaattisesti luotujen valintojen enimmäisarvo",
    // "Step value for auto-generated items"
    choicesStep: "Automaattisesti luotujen valintojen ero",
    // "Name"
    name: "Nimi",
    // "Title"
    title: "Otsikko",
    // "Cell input type"
    cellType: "Solutyyppi",
    // "Column count"
    colCount: "Sarakemäärä",
    // "Choice order"
    choicesOrder: "Valitse valintojen järjestys",
    // [Auto-translated] "Allow custom choices"
    allowCustomChoices: "Salli mukautetut valinnat",
    // "Visible"
    visible: "Näkyvissä",
    // "Required"
    isRequired: "Pakollinen",
    // [Auto-translated] "Mark as required"
    markRequired: "Merkitse pakollisesti",
    // [Auto-translated] "Remove the required mark"
    removeRequiredMark: "Poista pakollisuusmerkintä",
    // "Require an answer in each row"
    eachRowRequired: "Vaadi vastaus kaikille riveille",
    // [Auto-translated] "Prevent duplicate responses in rows"
    eachRowUnique: "Estä päällekkäiset vastaukset riveillä",
    // "Error message for required questions"
    requiredErrorText: "Vaadittu virheteksti",
    // "Display the question on a new line"
    startWithNewLine: "Onko aloitus uudella rivillä?",
    // "Rows"
    rows: "Rivit",
    // "Columns"
    cols: "Sarakeet",
    // "Placeholder text within input field"
    placeholder: "Syötä paikkamerkintä",
    // "Show preview area"
    showPreview: "Näytä esikatselu",
    // "Store file content in JSON result as text"
    storeDataAsText: "Tallenna tiedostosisältö JSON-tulokseen tekstinä",
    // "Maximum file size (in bytes)"
    maxSize: "Tiedoston enimmäiskoko tavuina",
    // "Row count"
    rowCount: "Rivien määrä",
    // "Columns layout"
    columnLayout: "Sarakkeiden asettelu",
    // "\"Add Row\" button alignment"
    addRowButtonLocation: "Lisää rivipainikkeen sijainti",
    // [Auto-translated] "Transpose rows to columns"
    transposeData: "Rivien transponointi sarakkeisiin",
    // "\"Add Row\" button text"
    addRowText: "Lisää rivipainikkeen teksti",
    // "\"Remove Row\" button text"
    removeRowText: "Poista rivipainikkeen teksti",
    // [Auto-translated] "Input field title pattern"
    singleInputTitleTemplate: "Syöttökentän otsikkomalli",
    // "Minimum rating value"
    rateMin: "Vähimmäismäärä",
    // "Maximum rating value"
    rateMax: "Enimmäismäärä",
    // "Step value"
    rateStep: "Arvostele askel",
    // "Minimum value label"
    minRateDescription: "Vähimmäismäärän kuvaus",
    // "Maximum value label"
    maxRateDescription: "Enimmäismäärän kuvaus",
    // "Input type"
    inputType: "Syötä tyyppi",
    // "Option placeholder"
    optionsCaption: "Vaihtoehdot kuvateksti",
    // "Default Answer"
    defaultValue: "Oletusarvo",
    // "Default texts"
    cellsDefaultRow: "Oletussolutekstit",
    // "Edit survey settings"
    surveyEditorTitle: "Muokkaa kyselyn asetuksia",
    // "Edit: {0}"
    qEditorTitle: "Muokkaa: {0}",
    // "Maximum character limit"
    maxLength: "Enimmäispituus",
    // "Build"
    buildExpression: "Luo",
    // "Edit"
    editExpression: "Muokkaa",
    // [Auto-translated] "and"
    and: "ja",
    // [Auto-translated] "or"
    or: "tai",
    // "Remove"
    remove: "Poista",
    // "Add Condition"
    addCondition: "Lisää ehto",
    // [Auto-translated] "Select a question to start configuring conditions."
    emptyLogicPopupMessage: "Aloita ehtojen määrittäminen valitsemalla kysymys.",
    // [Auto-translated] "If"
    if: "Jos",
    // [Auto-translated] "then"
    then: "sitten",
    // [Auto-translated] "Target question"
    setToName: "Kohteen kysymys",
    // [Auto-translated] "Question to copy answer from"
    fromName: "Kysymys, josta vastaus kopioidaan",
    // [Auto-translated] "Question to skip to"
    gotoName: "Kysymys, johon kannattaa siirtyä",
    // [Auto-translated] "Rule is incorrect"
    ruleIsNotSet: "Sääntö on virheellinen",
    // [Auto-translated] "Include into survey results"
    includeIntoResult: "Sisällytä kyselyn tuloksiin",
    // "Make the title and description visible"
    showTitle: "Näytä/piilota otsikko",
    // "Expand/collapse title"
    expandCollapseTitle: "Laajenna / tiivistä otsikkoa",
    // "Select a survey language"
    locale: "Oletus kieli",
    // "Select device type"
    simulator: "Valitse laite",
    // "Switch to landscape orientation"
    landscapeOrientation: "Vaakasuunta",
    // [Auto-translated] "Switch to portrait orientation"
    portraitOrientation: "Pystysuuntaan vaihtaminen",
    // "Clear hidden question values"
    clearInvisibleValues: "Tyhjennä näkymättömät arvot",
    // "Limit to one response"
    cookieName: "Evästeen nimi (poistaaksesi kysely käytöstä suorita kysely kaksi kertaa paikallisesti)",
    // "Auto-save survey progress on page change"
    partialSendEnabled: "Lähetä kyselyn tulokset seuraavalla sivulla",
    // "Save the \"Other\" option value as a separate property"
    storeOthersAsComment: "Tallenna 'muut' arvo erilliseen kenttään",
    // "Show page titles"
    showPageTitles: "Näytä sivun otsikot",
    // "Show page numbers"
    showPageNumbers: "Näytä sivunumerot",
    // "\"Previous Page\" button text"
    pagePrevText: "Edellinen sivu -painikkeen teksti",
    // "\"Next Page\" button text"
    pageNextText: "Seuraava sivu -painikkeen teksti",
    // "\"Complete Survey\" button text"
    completeText: "Valmis -painikkeen teksti",
    // "\"Review Answers\" button text"
    previewText: "Esikatsele -painikkeen teksti",
    // "\"Edit Answer\" button text"
    editText: "Muokkaa -painikkeen teksti",
    // "\"Start Survey\" button text"
    startSurveyText: "Aloita -painikkeen teksti",
    // "Show navigation buttons"
    showNavigationButtons: "Näytä navigointipainikkeet (oletusnavigointi)",
    // [Auto-translated] "Navigation buttons alignment"
    navigationButtonsLocation: "Siirtymispainikkeiden tasaus",
    // "Show the \"Previous Page\" button"
    showPrevButton: "Näytä edellinen -painike (käyttäjä voi palata edelliselle sivulle)",
    // "First page is a start page"
    firstPageIsStartPage: "Kyselyn ensimmäinen sivu on aloitussivu.",
    // "Show the \"Thank You\" page"
    showCompletePage: "Näytä valmis sivu lopussa (completeHtml)",
    // "Auto-advance to the next page"
    autoAdvanceEnabled: "Kun vastaat kaikkiin kysymyksiin, siirryt seuraavalle sivulle automaattisesti",
    // [Auto-translated] "Complete the survey automatically"
    autoAdvanceAllowComplete: "Vastaa kyselyyn automaattisesti",
    // "Show the progress bar"
    showProgressBar: "Näytä edistymispalkki",
    // [Auto-translated] "Progress bar alignment"
    progressBarLocation: "Edistymispalkin sijainti",
    // "Question title alignment"
    questionTitleLocation: "Kysymyksen otsikon sijainti",
    // "Question title width"
    questionTitleWidth: "Kysymyksen otsikon leveys",
    // "Required symbol(s)"
    requiredMark: "Kysymys vaadittu symboli(t)",
    // "Question title template, default is: '{no}. {require} {title}'"
    questionTitleTemplate: "Kysymyksen otsikkomalli, oletusarvo: '{no}. {require} {title}'",
    // "Error message alignment"
    questionErrorLocation: "Kysymyksen virheen sijainti",
    // "Focus first question on a new page"
    autoFocusFirstQuestion: "Fokusoi ensimmäiseen kysymykseen sivun vaihtuessa",
    // "Question order"
    questionOrder: "Kysymysten järjestys sivulla",
    // "Time limit to complete the survey"
    timeLimit: "Enimmäisaika saada kysely täytettyä",
    // "Time limit to complete one page"
    timeLimitPerPage: "Enimmäisaika kyselyn sivun täyttämiseen",
    // [Auto-translated] "Use a timer"
    showTimer: "Käytä ajastinta",
    // "Timer alignment"
    timerLocation: "Näytä ajastus -paneeli",
    // "Timer mode"
    timerInfoMode: "Näytä ajastus -paneelin tila",
    // "Panel display mode"
    renderMode: "Renderöinnin tila",
    // "Enable entry addition"
    allowAddPanel: "Salli paneelin lisääminen",
    // "Enable entry removal"
    allowRemovePanel: "Salli paneelin poistaminen",
    // "\"Add Entry\" button text"
    addPanelText: "Paneelin tekstin lisääminen",
    // "\"Remove Entry\" button text"
    removePanelText: "Paneelin tekstin poistaminen",
    // "Show all elements on one page"
    isSinglePage: "Näytä kaikki elementit yhdellä sivulla",
    // "HTML markup"
    html: "Html",
    // [Auto-translated] "Answer"
    setValue: "Vastata",
    // [Auto-translated] "Image format"
    dataFormat: "Kuvan muoto",
    // [Auto-translated] "Allow adding rows"
    allowAddRows: "Salli rivien lisääminen",
    // [Auto-translated] "Allow removing rows"
    allowRemoveRows: "Salli rivien poistaminen",
    // [Auto-translated] "Allow row drag and drop"
    allowRowReorder: "Salli rivin siirtäminen ja pudottaminen",
    // [Auto-translated] "Does not apply if you specify the exact image width or height."
    responsiveImageSizeHelp: "Ei sovelleta, jos määrität kuvan tarkan leveyden tai korkeuden.",
    // [Auto-translated] "Minimum image width"
    minImageWidth: "Kuvan vähimmäisleveys",
    // [Auto-translated] "Maximum image width"
    maxImageWidth: "Kuvan enimmäisleveys",
    // [Auto-translated] "Minimum image height"
    minImageHeight: "Kuvan vähimmäiskorkeus",
    // [Auto-translated] "Maximum image height"
    maxImageHeight: "Kuvan enimmäiskorkeus",
    // "Minimum value"
    minValue: "Vähimmäisarvo",
    // "Maximum value"
    maxValue: "Suurin arvo",
    // [Auto-translated] "Case insensitive"
    caseInsensitive: "Isot ja pienet kirjaimet eivät ole merkitseviä",
    // "Minimum length (in characters)"
    minLength: "Vähimmäispituus",
    // "Allow digits"
    allowDigits: "Salli numerot",
    // "Minimum count"
    minCount: "Vähimmäismäärä",
    // "Maximum count"
    maxCount: "Enimmäismäärä",
    // "Regular expression"
    regex: "Säännöllinen lauseke",
    surveyvalidator: {
      // [Auto-translated] "Error message"
      text: "Virheviesti",
      // [Auto-translated] "Validation expression"
      expression: "Vahvistuksen lauseke"
    },
    // [Auto-translated] "Total row text"
    totalText: "Rivin teksti yhteensä",
    // [Auto-translated] "Total type"
    totalType: "Tyyppi yhteensä",
    // [Auto-translated] "Total expression"
    totalExpression: "Kokonaislauseke",
    // [Auto-translated] "Total value display style"
    totalDisplayStyle: "Kokonaisarvon näyttötyyli",
    // [Auto-translated] "Currency"
    totalCurrency: "Valuutta",
    // [Auto-translated] "Formatted string"
    totalFormat: "Muotoiltu merkkijono",
    // [Auto-translated] "Logo (URL or base64-encoded string)"
    logo: "Logo (URL-osoite tai base64-koodattu merkkijono)",
    // [Auto-translated] "Survey structure"
    questionsOnPageMode: "Kyselyn rakenne",
    // [Auto-translated] "Maximum answer length (in characters)"
    maxTextLength: "Vastauksen enimmäispituus (merkkeinä)",
    // [Auto-translated] "Maximum comment length (in characters)"
    maxCommentLength: "Kommentin enimmäispituus (merkkeinä)",
    // [Auto-translated] "Comment area height (in lines)"
    commentAreaRows: "Kommenttialueen korkeus (riveinä)",
    // [Auto-translated] "Auto-expand comment area if necessary"
    autoGrowComment: "Laajenna kommenttialue tarvittaessa automaattisesti",
    // [Auto-translated] "Allow users to resize text areas"
    allowResizeComment: "Salli käyttäjien muuttaa tekstialueiden kokoa",
    // "Update input field values"
    textUpdateMode: "Tekstikysymyksen arvon päivittäminen",
    // [Auto-translated] "Input mask type"
    maskType: "Syöttörajoitteen tyyppi",
    // [Auto-translated] "Set focus on the first invalid answer"
    autoFocusFirstError: "Aseta kohdistus ensimmäiseen virheelliseen vastaukseen",
    // [Auto-translated] "Run validation"
    checkErrorsMode: "Suorita vahvistus",
    // [Auto-translated] "Validate empty fields on lost focus"
    validateVisitedEmptyFields: "Vahvista tyhjät kentät, kun kohdistus on kadonnut",
    // [Auto-translated] "Navigate to URL"
    navigateToUrl: "Siirry URL-osoitteeseen",
    // [Auto-translated] "Dynamic URL"
    navigateToUrlOnCondition: "Dynaaminen URL-osoite",
    // [Auto-translated] "Markup to show if the user already filled out this survey"
    completedBeforeHtml: "Merkintä, joka osoittaa, onko käyttäjä jo täyttänyt tämän kyselyn",
    // [Auto-translated] "Survey Complete page markup"
    completedHtml: "Kyselyn sivujen merkinnät suoritettu",
    // [Auto-translated] "Dynamic Survey Complete page markup"
    completedHtmlOnCondition: "Dynaaminen kysely viimeistelee sivun merkinnät",
    // [Auto-translated] "Markup to show while survey model is loading"
    loadingHtml: "Merkintä, joka näkyy, kun kyselymalli latautuu",
    // [Auto-translated] "Comment area text"
    commentText: "Kommenttialueen teksti",
    // [Auto-translated] "Autocomplete type"
    autocomplete: "Automaattisen täydennyksen tyyppi",
    // "Label for \"True\""
    labelTrue: "Tosi-merkintä",
    // "Label for \"False\""
    labelFalse: "Epätosi-merkintä",
    // "Show the Clear button"
    allowClear: "Näytä Tyhjennä-painike",
    // [Auto-translated] "Search Mode"
    searchMode: "Hakutila",
    // [Auto-translated] "Value display style"
    displayStyle: "Arvon näyttötyyli",
    // [Auto-translated] "Formatted string"
    format: "Muotoiltu merkkijono",
    // [Auto-translated] "Maximum fractional digits"
    maximumFractionDigits: "Murtolukujen enimmäismäärä",
    // [Auto-translated] "Minimum fractional digits"
    minimumFractionDigits: "Murtolukujen vähimmäismäärä",
    // [Auto-translated] "Display grouping separators"
    useGrouping: "Näytä ryhmittelyerottimet",
    // [Auto-translated] "Allow multiple files"
    allowMultiple: "Salli useita tiedostoja",
    // [Auto-translated] "Preview images"
    allowImagesPreview: "Esikatsele kuvia",
    // [Auto-translated] "Accepted file types"
    acceptedTypes: "Hyväksytyt tiedostotyypit",
    // [Auto-translated] "Wait for the upload to complete"
    waitForUpload: "Odota, että lataus on valmis",
    // [Auto-translated] "Confirm file deletion"
    needConfirmRemoveFile: "Vahvista tiedoston poistaminen",
    // [Auto-translated] "Detail panel location"
    detailPanelMode: "Yksityiskohtapaneelin sijainti",
    // [Auto-translated] "Minimum row count"
    minRowCount: "Rivien vähimmäismäärä",
    // [Auto-translated] "Maximum row count"
    maxRowCount: "Rivien enimmäismäärä",
    // "Confirm row removal"
    confirmDelete: "Vahvista rivin poisto",
    // [Auto-translated] "Confirmation message"
    confirmDeleteText: "Vahvistussanoma",
    // [Auto-translated] "Initial panel count"
    panelCount: "Paneelien alkuperäinen määrä",
    // [Auto-translated] "Minimum panel count"
    minPanelCount: "Paneelien vähimmäismäärä",
    // [Auto-translated] "Maximum panel count"
    maxPanelCount: "Paneelien enimmäismäärä",
    // [Auto-translated] "Inner panel expand state"
    panelsState: "Paneelin tila",
    // [Auto-translated] "Previous Panel button tooltip"
    prevPanelText: "Edellinen paneeli-painikkeen teksti",
    // [Auto-translated] "Next Panel button tooltip"
    nextPanelText: "Seuraava paneeli-painikkeen teksti",
    // [Auto-translated] "Remove Panel button location"
    removePanelButtonLocation: "Poista paneelipainikkeen sijainti",
    // [Auto-translated] "Hide the question if there are no rows"
    hideIfRowsEmpty: "Piilota kysymys, jos rivejä ei ole",
    // [Auto-translated] "Hide columns if there are no rows"
    hideColumnsIfEmpty: "Piilota sarakkeet, jos rivejä ei ole",
    // [Auto-translated] "Custom rate values"
    rateValues: "Muokatut vastausarvot",
    // [Auto-translated] "Rate count"
    rateCount: "Valintojen määrä",
    // [Auto-translated] "How to specify rate values?"
    autoGenerate: "Miten vastausvaihtoehtojen arvot määritetään?",
    slider: {
      // [Auto-translated] "Min value"
      min: "Minimiarvo",
      // [Auto-translated] "Max value"
      max: "Suurin arvo",
      // [Auto-translated] "Step value"
      step: "Vaiheen arvo",
      // [Auto-translated] "Show scale labels"
      showLabels: "Näytä asteikon otsikot",
      // [Auto-translated] "Show tooltips"
      tooltipVisibilityPG: "Näytä työkaluvihjeet",
      // [Auto-translated] "Allow thumb crossing"
      allowSwap: "Salli peukalon ylitys",
      // [Auto-translated] "Number of auto-generated labels"
      labelCount: "Automaattisesti luotujen tarrojen määrä",
      // [Auto-translated] "Min value expression"
      minValueExpression: "Minimiarvon lauseke",
      // [Auto-translated] "Max value expression"
      maxValueExpression: "Maksimiarvon lauseke",
      // [Auto-translated] "Scale labels configuration"
      autoGenerate: "Skaalausotsikoiden määritys",
      // [Auto-translated] "Slider type"
      sliderType: "Liukusäätimen tyyppi",
      // [Auto-translated] "The minimum distance between the slider thumbs a user can set."
      minRangeLength: "Alueen vähimmäispituus",
      // [Auto-translated] "The maximum distance between the slider thumbs a user can set."
      maxRangeLength: "Suurin kantaman pituus",
      // [Auto-translated] "Custom labels"
      customLabels: "Mukautetut tunnisteet",
      // [Auto-translated] "Label format"
      labelFormat: "Etiketin muoto",
      // [Auto-translated] "Tooltip format"
      tooltipFormat: "Työkaluvihjeen muoto"
    },
    file: {
      // [Auto-translated] "Adjusts the height of the image in the survey results."
      imageHeight: "Kuvan korkeus",
      // [Auto-translated] "Adjusts the width of the image in the survey results."
      imageWidth: "Kuvan leveys"
    },
    // [Auto-translated] "Hide the question if it contains no choices"
    hideIfChoicesEmpty: "Piilota kysymys, jos se ei sisällä vaihtoehtoja",
    // "Minimum width"
    minWidth: "Vähimmäisleveys (CSS-hyväksyttyinä arvoina)",
    // "Maximum width"
    maxWidth: "Suurin leveys (CSS-hyväksytyissä arvoissa)",
    // "Width"
    width: "Leveys (CSS-hyväksytyissä arvoissa)",
    // [Auto-translated] "Show column headers"
    showHeader: "Näytä sarakeotsikot",
    // [Auto-translated] "Show horizontal scrollbar"
    horizontalScroll: "Näytä vaakasuora vierityspalkki",
    // [Auto-translated] "Minimum column width (in CSS-accepted values)"
    columnMinWidth: "Sarakkeen vähimmäisleveys (CSS-hyväksytyissä arvoissa)",
    // [Auto-translated] "Row header width (in CSS-accepted values)"
    rowTitleWidth: "Riviotsikon leveys (CSS-hyväksytyissä arvoissa)",
    // "Value to store when \"True\" is selected"
    valueTrue: "Tosi-arvo",
    // "Value to store when \"False\" is selected"
    valueFalse: "Epätosi-arvo",
    // "\"Value is below minimum\" error message"
    minErrorText: "Arvo on alle minimin -virhesanoma",
    // "\"Value exceeds maximum\" error message"
    maxErrorText: "\"Arvo ylittää maksimin\" -virhesanoma",
    // "\"Empty comment\" error message"
    otherErrorText: "Tyhjä kommentti -virhesanoma",
    // "Error message for duplicate responses"
    keyDuplicationError: "Ei-yksilöllinen avainarvo -virhesanoma",
    // [Auto-translated] "Minimum selected choices"
    minSelectedChoices: "Valitut valinnat vähintään:",
    // [Auto-translated] "Maximum selected choices"
    maxSelectedChoices: "Valittujen vaihtoehtojen enimmäismäärä",
    // [Auto-translated] "Logo width (in CSS-accepted values)"
    logoWidth: "Logon leveys (CSS-hyväksytyissä arvoissa)",
    // [Auto-translated] "Logo height (in CSS-accepted values)"
    logoHeight: "Logon korkeus (CSS:n hyväksymissä arvoissa)",
    // "Read-only"
    readOnly: "Vain luku -tilassa",
    // [Auto-translated] "Editable if"
    enableIf: "Muokattavissa, jos",
    // "\"No rows\" message"
    noRowsText: "Ei rivejä -viesti",
    // [Auto-translated] "Separate special choices (None, Other, Select All)"
    separateSpecialChoices: "Erilliset erikoisvalinnat (Ei mitään, Muu, Valitse kaikki)",
    // [Auto-translated] "Copy choices from the following question"
    choicesFromQuestion: "Kopioi valinnat seuraavasta kysymyksestä",
    // [Auto-translated] "Which choices to copy?"
    choicesFromQuestionMode: "Mitkä vaihtoehdot kopioidaan?",
    // [Auto-translated] "Use values from the following matrix column or panel question as choice IDs"
    choiceValuesFromQuestion: "Käytä seuraavan matriisin sarakkeen tai paneelikysymyksen arvoja valintatunnuksina",
    // [Auto-translated] "Use values from the following matrix column or panel question as choice texts"
    choiceTextsFromQuestion: "Käytä seuraavan matriisin sarakkeen tai paneelikysymyksen arvoja valintateksteinä",
    // [Auto-translated] "Display page titles in progress bar"
    progressBarShowPageTitles: "Sivujen otsikoiden näyttäminen edistymispalkissa",
    // [Auto-translated] "Display page numbers in progress bar"
    progressBarShowPageNumbers: "Sivunumeroiden näyttäminen edistymispalkissa",
    // [Auto-translated] "Show the comment area"
    showCommentArea: "Näytä kommenttialue",
    // [Auto-translated] "Comment area placeholder"
    commentPlaceholder: "Kommenttialueen paikkamerkki",
    // [Auto-translated] "Display rate descriptions as extreme values"
    displayRateDescriptionsAsExtremeItems: "Näytä nopeuskuvaukset ääriarvoina",
    // [Auto-translated] "Row order"
    rowOrder: "Rivien järjestys",
    // [Auto-translated] "Column layout"
    columnsLayout: "Sarakkeen asettelu",
    // [Auto-translated] "Nested column count"
    columnColCount: "Sisäkkäisten sarakkeiden määrä",
    // [Auto-translated] "Correct Answer"
    correctAnswer: "Oikea vastaus",
    // [Auto-translated] "Default Values"
    defaultPanelValue: "Oletusarvot",
    // [Auto-translated] "Cell Texts"
    cells: "Solujen tekstit",
    // [Auto-translated] "Select a file or paste a file link..."
    fileInputPlaceholder: "Valitse tiedosto tai liitä tiedostolinkki...",
    // "Prevent duplicate responses in the following column"
    keyName: "Avainsarake",
    itemvalue: {
      // [Auto-translated] "Make the option visible if"
      visibleIf: "Tee vaihtoehto näkyväksi, jos",
      // [Auto-translated] "Make the option selectable if"
      enableIf: "Tee vaihtoehdosta valittava, jos"
    },
    "itemvalue@rows": {
      // [Auto-translated] "Make the row visible if"
      visibleIf: "Tee rivistä näkyvä, jos",
      // [Auto-translated] "Make the row editable if"
      enableIf: "Tee rivistä muokattava, jos"
    },
    imageitemvalue: {
      // "Alt text"
      text: "Vaihtoehtoinen teksti"
    },
    // "Logo alignment"
    logoPosition: "Logo sijainti",
    // "Add logo..."
    addLogo: "Lisää logo...",
    // "Change logo..."
    changeLogo: "Muuta logo...",
    logoPositions: {
      // "Remove logo"
      none: "Poista logo",
      // "Left"
      left: "Vasen",
      // "Right"
      right: "Oikea",
      // "On the top"
      top: "Päällä",
      // "In the bottom"
      bottom: "Alla"
    },
    // [Auto-translated] "Preview mode"
    previewMode: "Esikatselu-tila",
    // [Auto-translated] "Enable the grid layout"
    gridLayoutEnabled: "Ota ruudukkoasettelu käyttöön",
    // [Auto-translated] "Grid layout columns"
    gridLayoutColumns: "Ruudukkoasettelun sarakkeet",
    // [Auto-translated] "Mask settings"
    maskSettings: "Maskin asetukset",
    // [Auto-translated] "Row expansion error message alignment"
    detailErrorLocation: "Rivin laajennuksen virhesanoman tasaus",
    // Creator tabs
    tabs: {
      panel: {
        // [Auto-translated] "Panel Layout"
        layout: "Paneelin asettelu"
      },
      // "General"
      general: "Yleinen",
      // "Options"
      fileOptions: "Vaihtoehdot",
      // "HTML Editor"
      html: "Html Editori",
      // "Columns"
      columns: "Sarakkeet",
      // "Rows"
      rows: "Rivit",
      // "Choice Options"
      choices: "Valinnat",
      // "Items"
      items: "Kohteet",
      // "Visible If"
      visibleIf: "Näkyvä jos",
      // "Editable If"
      enableIf: "Käytössä jos",
      // "Required If"
      requiredIf: "Vaadittu jos",
      // "Rating Values"
      rateValues: "Järjestä arvot",
      // [Auto-translated] "Slider Settings"
      sliderSettings: "Liukusäätimen asetukset",
      // "Choices from a Web Service"
      choicesByUrl: "Valintoja verkosta",
      // "Default Choices"
      matrixChoices: "Oletusvalinnat",
      // "Text Inputs"
      multipleTextItems: "Tekstinsyötöt",
      // "Numbering"
      numbering: "Numerointi",
      // "Validators"
      validators: "Validattorit",
      // "Navigation"
      navigation: "Navigointi",
      // "Question Settings"
      question: "Kysymys",
      // "Pages"
      pages: "Sivut",
      // "Quiz Mode"
      timer: "Ajastin / tietovisa",
      // "Calculated Values"
      calculatedValues: "Lasketut arvot",
      // "Triggers"
      triggers: "Triggerit",
      // "Title template"
      templateTitle: "Mallin otsikko",
      // "Totals"
      totals: "Yhteensä",
      // "Conditions"
      logic: "Logiikka",
      // [Auto-translated] "Input Mask Settings"
      mask: "Syöttörajoitteen asetukset",
      layout: {
        // [Auto-translated] "Layout"
        panel: "Asettelu",
        // [Auto-translated] "Layout"
        question: "Asettelu",
        // [Auto-translated] "Layout"
        base: "Asettelu"
      },
      // "Data"
      data: "Data",
      // "Validation"
      validation: "Validointi",
      // "Individual Cell Texts"
      cells: "Solut",
      // "\"Thank You\" Page"
      showOnCompleted: "Näytä kun valmis",
      // "Logo in the Survey Header"
      logo: "Logo kyselyn otsikossa",
      // "Slider"
      slider: "Liukusäädin",
      // [Auto-translated] "Expression"
      expression: "Lauseke",
      // [Auto-translated] "Question Settings"
      questionSettings: "Kysymyksen asetukset",
      // "Header"
      header: "Otsikko",
      // "Background"
      background: "Tausta",
      // "Appearance"
      appearance: "Ulkonäkö",
      // [Auto-translated] "Accent colors"
      accentColors: "Korostusvärit",
      // [Auto-translated] "Surface Background"
      surfaceBackground: "Surfacen tausta",
      // [Auto-translated] "Scaling"
      scaling: "Skaalaus",
      // "Others"
      others: "Muut"
    },
    // "Edit property '{0}'"
    editProperty: "Muokkaa ominaisuutta'{0}'",
    // "Items"
    items: "[ Kohteet: {0} ]",
    // [Auto-translated] "Choices are visible if"
    choicesVisibleIf: "Valinnat näkyvät, jos",
    // [Auto-translated] "Choices are selectable if"
    choicesEnableIf: "Valinnat ovat valittavissa, jos",
    // [Auto-translated] "Columns are visible if"
    columnsEnableIf: "Sarakkeet ovat näkyvissä, jos",
    // [Auto-translated] "Rows are visible if"
    rowsEnableIf: "Rivit ovat näkyvissä, jos",
    // [Auto-translated] "Add inner indents"
    innerIndent: "Sisäisten sisennysten lisääminen",
    // [Auto-translated] "Use answers from the last entry as default"
    copyDefaultValueFromLastEntry: "Käytä viimeisimmän merkinnän arvoja oletuksena",
    // "Please enter a value."
    enterNewValue: "Anna arvo.",
    // "There are no questions in the survey."
    noquestions: "Kyselyssä ei ole yhtään kysymystä.",
    // "Please create a trigger"
    createtrigger: "Luo triggeri",
    // "Press enter button to edit"
    titleKeyboardAdornerTip: "Paina Enter -painiketta muokataksesi",
    // "Press enter button to edit item, press delete button to delete item, press alt plus arrow up or arrow down to move item"
    keyboardAdornerTip: "Voit muokata kohdetta painamalla Enter -painiketta, poistaa kohteen painamalla poistopainiketta, siirtää kohdetta painamalla Alt plus nuoli ylös tai nuoli alas",
    // "On "
    triggerOn: "Päällä ",
    // "Make pages visible"
    triggerMakePagesVisible: "Tee sivuista näkyviä:",
    // "Make elements visible"
    triggerMakeQuestionsVisible: "Tee elementit näkyviksi:",
    // "Complete the survey if successful."
    triggerCompleteText: "Valmista kysely, jos se on onnistunut.",
    // "The trigger is not set"
    triggerNotSet: "Triggeriä ei ole asetettu",
    // "Run if"
    triggerRunIf: "Suorita jos",
    // "Change value of: "
    triggerSetToName: "Muuta arvoa: ",
    // "Copy value from: "
    triggerFromName: "Kopioi arvo kohteesta: ",
    // "Run this Expression"
    triggerRunExpression: "Suorita tämä lauseke:",
    // "to: "
    triggerSetValue: "kohtaan: ",
    // "Go to the question"
    triggerGotoName: "Siirry kysymykseen:",
    // "Do not put the variable into the survey result."
    triggerIsVariable: "Älä lisää muuttujaa kyselyn tulokseen.",
    // "Please enter a valid expression"
    triggerRunExpressionEmpty: "Anna kelvollinen lauseke",
    // [Auto-translated] "Type expression here..."
    emptyExpressionPlaceHolder: "Kirjoita lauseke tähän...",
    // "No file chosen"
    noFile: "Tiedostoa ei ole valittuna",
    // [Auto-translated] "Clear the value if the question becomes hidden"
    clearIfInvisible: "Poista arvo, jos kysymys piilotetaan",
    // [Auto-translated] "Value property name"
    valuePropertyName: "Arvo-ominaisuuden nimi",
    // [Auto-translated] "Enable search"
    searchEnabled: "Ota haku käyttöön",
    // [Auto-translated] "Hide selected items"
    hideSelectedItems: "Piilota valitut kohteet",
    // [Auto-translated] "Close the dropdown after selection"
    closeOnSelect: "Sulkee valinnan jälkeisen avattavan valikon.",
    // [Auto-translated] "Vertical alignment"
    verticalAlign: "Pystysuuntainen tasaus",
    // [Auto-translated] "Alternate rows"
    alternateRows: "Vaihtoehtoiset rivit",
    // [Auto-translated] "Columns are visible if"
    columnsVisibleIf: "Sarakkeet ovat näkyvissä, jos",
    // [Auto-translated] "Rows are visible if"
    rowsVisibleIf: "Rivit ovat näkyvissä, jos",
    // [Auto-translated] "Comment area placeholder"
    otherPlaceholder: "Kommenttialueen paikkamerkki",
    // [Auto-translated] "File placeholder text"
    filePlaceholder: "Tiedoston paikkamerkkiteksti",
    // [Auto-translated] "Photo placeholder text"
    photoPlaceholder: "Valokuvan paikkamerkkiteksti",
    // [Auto-translated] "File or photo placeholder text"
    fileOrPhotoPlaceholder: "Tiedoston tai valokuvan paikkamerkkiteksti",
    // [Auto-translated] "Rate type"
    rateType: "Hinnan tyyppi",
    // [Auto-translated] "Ex.: https://api.example.com/books"
    url_placeholder: "Esimerkki: https://api.example.com/books",
    // [Auto-translated] "Ex.: categories.fiction"
    path_placeholder: "Esimerkki: categories.fiction",
    // [Auto-translated] "Ex.: a)"
    questionStartIndex_placeholder: "Esim.: a)",
    // [Auto-translated] "Ex.: 6in"
    width_placeholder: "Esimerkki: 6 tuumaa",
    // [Auto-translated] "Ex.: 600px"
    minWidth_placeholder: "Esimerkki: 600 pikseliä",
    // [Auto-translated] "Ex.: 50%"
    maxWidth_placeholder: "Esimerkki: 50 %",
    // "auto"
    imageHeight_placeholder: "auto",
    // "auto"
    imageWidth_placeholder: "auto",
    // [Auto-translated] "Ex.: 100px"
    itemTitleWidth_placeholder: "Esimerkki: 100px",
    theme: {
      // [Auto-translated] "Theme"
      themeName: "Teema",
      // [Auto-translated] "Question appearance"
      isPanelless: "Kysymyksen ulkonäkö",
      // [Auto-translated] "Input element"
      editorPanel: "Taustan ja kulman säde",
      // [Auto-translated] "Panel background and corner radius"
      questionPanel: "Taustan ja kulman säde",
      // [Auto-translated] "Accent color"
      primaryColor: "Korostusväri",
      // [Auto-translated] "Panel background opacity"
      panelBackgroundTransparency: "Paneelin taustan peittävyys",
      // [Auto-translated] "Question background opacity"
      questionBackgroundTransparency: "Taustan peittävyyden kyseenalaistaminen",
      // [Auto-translated] "Font size"
      fontSize: "Kirjasinkoko",
      // [Auto-translated] "Scale"
      scale: "Mittakaava",
      // [Auto-translated] "Corner radius"
      cornerRadius: "Kulman säde",
      // [Auto-translated] "Advanced mode"
      advancedMode: "Edistynyt tila",
      // [Auto-translated] "Page title font"
      pageTitle: "Otsikon fontti",
      // [Auto-translated] "Page description font"
      pageDescription: "Kuvauksen fontti",
      // [Auto-translated] "Question title font"
      questionTitle: "Otsikon fontti",
      // [Auto-translated] "Question description font"
      questionDescription: "Kuvauksen fontti",
      // [Auto-translated] "Input element font"
      editorFont: "Fontti",
      // [Auto-translated] "Opacity"
      backgroundOpacity: "Läpikuultamattomuus",
      // [Auto-translated] "Font family"
      "--sjs-font-family": "Fonttiperhe",
      // [Auto-translated] "Background color"
      "--sjs-general-backcolor-dim": "Taustaväri",
      // [Auto-translated] "Accent background"
      "--sjs-primary-backcolor": "Aksentti tausta",
      // [Auto-translated] "Accent foreground"
      "--sjs-primary-forecolor": "Aksentti etualalla",
      // [Auto-translated] "Error messages"
      "--sjs-special-red": "Virhesanomista",
      // [Auto-translated] "Shadow effects"
      "--sjs-shadow-small": "Varjo-tehosteet",
      // [Auto-translated] "Shadow effects"
      "--sjs-shadow-inner": "Varjo-tehosteet",
      // [Auto-translated] "Colors"
      "--sjs-border-default": "Värit"
    },
    "header@header": {
      // [Auto-translated] "View"
      headerView: "Näkymä",
      // [Auto-translated] "Logo position"
      logoPosition: "Logon sijainti",
      // [Auto-translated] "Survey title font"
      surveyTitle: "Kyselyn otsikon fontti",
      // [Auto-translated] "Survey description font"
      surveyDescription: "Kyselyn kuvauksen fontti",
      // [Auto-translated] "Survey title font"
      headerTitle: "Kyselyn otsikon fontti",
      // [Auto-translated] "Survey description font"
      headerDescription: "Kyselyn kuvauksen fontti",
      // [Auto-translated] "Content area width"
      inheritWidthFrom: "Sisältöalueen leveys",
      // [Auto-translated] "Text width"
      textAreaWidth: "Tekstin leveys",
      // [Auto-translated] "Background color"
      backgroundColorSwitch: "Taustaväri",
      // [Auto-translated] "Background image"
      backgroundImage: "Taustakuvan",
      // [Auto-translated] "Opacity"
      backgroundImageOpacity: "Läpikuultamattomuus",
      // [Auto-translated] "Overlap"
      overlapEnabled: "Limittyä",
      // [Auto-translated] "Logo position"
      logoPositionX: "Logon sijainti",
      // [Auto-translated] "Title position"
      titlePositionX: "Otsikon sijainti",
      // [Auto-translated] "Description position"
      descriptionPositionX: "Kuvauksen sijainti"
    }
  },
  // Property values
  pv: {
    // [Auto-translated] "true"
    "true": "tosi",
    // [Auto-translated] "false"
    "false": "epätosi",
    // [Auto-translated] "Local files"
    file: "Paikalliset tiedostot",
    // [Auto-translated] "Camera"
    camera: "Kamera",
    // [Auto-translated] "Local files or camera"
    "file-camera": "Paikalliset tiedostot tai kamera",
    // "Inherit"
    inherit: "Peri",
    // "Visible"
    show: "Näytä",
    // "Hidden"
    hide: "Piilota",
    // "Inherit"
    default: "Oletusarvo",
    // "Initial"
    initial: "Alkuarvo",
    // "Random"
    random: "Satunnainen",
    // "Collapsed"
    collapsed: "Tiivistä",
    // "Expanded"
    expanded: "Laajenna",
    // "None"
    none: "Ei mikään",
    // "Ascending"
    asc: "Nouseva",
    // "Descending"
    desc: "Laskeva",
    // "Indeterminate"
    indeterminate: "Ei määritelty",
    // [Auto-translated] "Selected"
    selected: "Valittu",
    // [Auto-translated] "Unselected"
    unselected: "Valitsematta",
    // [Auto-translated] "decimal"
    decimal: "desimaali",
    // [Auto-translated] "currency"
    currency: "valuutta",
    // [Auto-translated] "percent"
    percent: "prosentti",
    // "First panel is expanded"
    firstExpanded: "Ensimmäinen laajennettu",
    // "Hide question numbers"
    off: "Pois päältä",
    // "List"
    list: "Lista",
    // [Auto-translated] "Carousel"
    carousel: "Karuselli",
    // [Auto-translated] "Tabs"
    tab: "Välilehdet",
    // "Panel navigator + Progress bar at the top"
    progressTop: "Edistyminen ylhäällä",
    // "Panel navigator + Progress bar at the bottom"
    progressBottom: "Edistyminen alhaalla",
    // "Panel navigator + Progress bar at the top and bottom"
    progressTopBottom: "Edistyminen ylhäällä ja alhaalla",
    // "Horizontal"
    horizontal: "Vaaka",
    // "Vertical"
    vertical: "Pysty",
    // "Top"
    top: "Ylhäällä",
    // "Bottom"
    bottom: "Alhaalla",
    // "Top and bottom"
    topBottom: "Ylhäällä ja alhaalla",
    // "Both"
    both: "Molemmat",
    // "Left"
    left: "Vasen",
    // [Auto-translated] "Right"
    right: "Oikea",
    // [Auto-translated] "Center"
    center: "Keskitetty",
    // [Auto-translated] "Left and right"
    leftRight: "Vasen ja oikea",
    // [Auto-translated] "Middle"
    middle: "Keskellä",
    // [Auto-translated] "color"
    color: "Väri",
    // [Auto-translated] "date"
    date: "Päivämäärä",
    // [Auto-translated] "datetime"
    datetime: "Päivämäärä ja aika",
    // [Auto-translated] "datetime-local"
    "datetime-local": "datetime-local",
    // [Auto-translated] "email"
    email: "Sähköposti",
    // [Auto-translated] "month"
    month: "Kuukausi",
    // [Auto-translated] "number"
    number: "Numero",
    // [Auto-translated] "password"
    password: "Salasana",
    // [Auto-translated] "range"
    range: "Etäisyys",
    // [Auto-translated] "tel"
    tel: "Puh",
    // [Auto-translated] "text"
    text: "Tekstiviesti",
    // [Auto-translated] "time"
    time: "Aika",
    // [Auto-translated] "url"
    url: "URL",
    // [Auto-translated] "week"
    week: "viikko",
    // "Hidden"
    hidden: "Piilotettu",
    // "Editable"
    edit: "Muokkaa",
    // "Read-only"
    display: "Näytä",
    // [Auto-translated] "Contain"
    contain: "Sisältää",
    // [Auto-translated] "Cover"
    cover: "Peittää",
    // [Auto-translated] "Fill"
    fill: "Täyttää",
    // [Auto-translated] "Next"
    next: "Seuraava",
    // "Last"
    last: "Viimeinen",
    // "Upon survey completion"
    onComplete: "Valmistuessa",
    // "When question gets hidden"
    onHidden: "Piilotettaessa",
    // [Auto-translated] "When the question or its panel/page becomes hidden"
    onHiddenContainer: "Kun kysymys tai sen paneeli/sivu piilotetaan",
    clearInvisibleValues: {
      // [Auto-translated] "Never"
      none: "Ei koskaan"
    },
    clearIfInvisible: {
      // [Auto-translated] "Never"
      none: "Ei koskaan"
    },
    // [Auto-translated] "Radio Buttons"
    radio: "Valintanapit",
    inputType: {
      // [Auto-translated] "Color"
      color: "Väri",
      // [Auto-translated] "Date"
      date: "Päivämäärä",
      // [Auto-translated] "Date and Time"
      "datetime-local": "Päivämäärä ja kellonaika",
      // [Auto-translated] "Email"
      email: "Sähköposti",
      // [Auto-translated] "Month"
      month: "Kuukausi",
      // [Auto-translated] "Number"
      number: "Numero",
      // [Auto-translated] "Password"
      password: "Salasana",
      // [Auto-translated] "Range"
      range: "Etäisyys",
      // [Auto-translated] "Phone Number"
      tel: "Puhelinnumero",
      // [Auto-translated] "Text"
      text: "Tekstiviesti",
      // [Auto-translated] "Time"
      time: "Aika",
      // [Auto-translated] "URL"
      url: "URL",
      // [Auto-translated] "Week"
      week: "Viikko"
    },
    sliderType: {
      // [Auto-translated] "Single-Value"
      single: "Yksittäinen arvo",
      // [Auto-translated] "Range"
      range: "Etäisyys"
    },
    autocomplete: {
      // [Auto-translated] "Full Name"
      name: "Koko nimi",
      // [Auto-translated] "Prefix"
      "honorific-prefix": "Etuliite",
      // [Auto-translated] "First Name"
      "given-name": "Etunimi",
      // [Auto-translated] "Middle Name"
      "additional-name": "Toinen nimi",
      // [Auto-translated] "Last Name"
      "family-name": "Sukunimi",
      // [Auto-translated] "Suffix"
      "honorific-suffix": "Suffiksi",
      // [Auto-translated] "Nickname"
      nickname: "Lempinimi",
      // [Auto-translated] "Job Title"
      "organization-title": "Tehtävänimike",
      // [Auto-translated] "User Name"
      username: "Käyttäjänimi",
      // [Auto-translated] "New Password"
      "new-password": "Uusi salasana",
      // [Auto-translated] "Current Password"
      "current-password": "Nykyinen salasana",
      // [Auto-translated] "Organization Name"
      organization: "Organisaation nimi",
      // [Auto-translated] "Full Street Address"
      "street-address": "Koko kadun osoite",
      // [Auto-translated] "Address Line 1"
      "address-line1": "Osoite, rivi 1",
      // [Auto-translated] "Address Line 2"
      "address-line2": "Osoite, rivi 2",
      // [Auto-translated] "Address Line 3"
      "address-line3": "Osoite, rivi 3",
      // [Auto-translated] "Level 4 Address"
      "address-level4": "Tason 4 osoite",
      // [Auto-translated] "Level 3 Address"
      "address-level3": "Tason 3 osoite",
      // [Auto-translated] "Level 2 Address"
      "address-level2": "Tason 2 osoite",
      // [Auto-translated] "Level 1 Address"
      "address-level1": "Tason 1 osoite",
      // [Auto-translated] "Country Code"
      country: "Maakoodi",
      // [Auto-translated] "Country Name"
      "country-name": "Maan nimi",
      // [Auto-translated] "Postal Code"
      "postal-code": "Postinumero",
      // [Auto-translated] "Cardholder Name"
      "cc-name": "Kortinhaltijan nimi",
      // [Auto-translated] "Cardholder First Name"
      "cc-given-name": "Kortinhaltijan etunimi",
      // [Auto-translated] "Cardholder Middle Name"
      "cc-additional-name": "Kortinhaltijan toinen nimi",
      // [Auto-translated] "Cardholder Last Name"
      "cc-family-name": "Kortinhaltijan sukunimi",
      // [Auto-translated] "Credit Card Number"
      "cc-number": "Luottokortin numero",
      // [Auto-translated] "Expiration Date"
      "cc-exp": "Vanhentumispäivä",
      // [Auto-translated] "Expiration Month"
      "cc-exp-month": "Viimeinen voimassaolokuukausi",
      // [Auto-translated] "Expiration Year"
      "cc-exp-year": "Vanhentumisvuosi",
      // [Auto-translated] "Card Security Code"
      "cc-csc": "Kortin turvakoodi",
      // [Auto-translated] "Credit Card Type"
      "cc-type": "Luottokortin tyyppi",
      // [Auto-translated] "Transaction Currency"
      "transaction-currency": "Tapahtuman valuutta",
      // [Auto-translated] "Transaction Amount"
      "transaction-amount": "Tapahtuman summa",
      // [Auto-translated] "Preferred Language"
      language: "Ensisijainen kieli",
      // [Auto-translated] "Birthday"
      bday: "Syntymäpäivä",
      // [Auto-translated] "Birthday Day"
      "bday-day": "Syntymäpäivä",
      // [Auto-translated] "Birthday Month"
      "bday-month": "Syntymäpäivä kuukausi",
      // [Auto-translated] "Birthday Year"
      "bday-year": "Syntymäpäivä vuosi",
      // [Auto-translated] "Gender"
      sex: "Sukupuoli",
      // [Auto-translated] "Website URL"
      url: "Verkkosivuston URL-osoite",
      // [Auto-translated] "Profile Photo"
      photo: "Profiilikuva",
      // [Auto-translated] "Telephone Number"
      tel: "Puhelinnumero",
      // [Auto-translated] "Country Code for Phone"
      "tel-country-code": "Puhelimen maakoodi",
      // [Auto-translated] "National Telephone Number"
      "tel-national": "Kansallinen puhelinnumero",
      // [Auto-translated] "Area Code"
      "tel-area-code": "Suuntanumero",
      // [Auto-translated] "Local Phone Number"
      "tel-local": "Paikallinen puhelinnumero",
      // [Auto-translated] "Local Phone Prefix"
      "tel-local-prefix": "Paikallisen puhelimen etuliite",
      // [Auto-translated] "Local Phone Suffix"
      "tel-local-suffix": "Paikallisen puhelimen pääte",
      // [Auto-translated] "Phone Extension"
      "tel-extension": "Puhelimen laajennus",
      // [Auto-translated] "Email Address"
      email: "Sähköpostiosoite",
      // [Auto-translated] "Instant Messaging Protocol"
      impp: "Pikaviestiprotokolla"
    },
    maskType: {
      // [Auto-translated] "None"
      none: "Ei mitään",
      // [Auto-translated] "Pattern"
      pattern: "Kuvio",
      // [Auto-translated] "Numeric"
      numeric: "Numeerinen",
      // [Auto-translated] "Date and Time"
      datetime: "Päivämäärä ja kellonaika",
      // [Auto-translated] "Currency"
      currency: "Valuutta"
    },
    inputTextAlignment: {
      // [Auto-translated] "Auto"
      auto: "Automaattinen",
      // [Auto-translated] "Left"
      left: "Vasen",
      // [Auto-translated] "Right"
      right: "Oikea"
    },
    // "All"
    all: "Kaikki",
    // "Page"
    page: "Sivu",
    // "Survey"
    survey: "Kysely",
    // "When switching to the next page"
    onNextPage: "Seuraavalla sivulla",
    // "After an answer is changed"
    onValueChanged: "Vastauksen muuttuessa",
    // [Auto-translated] "Before an answer is changed"
    onValueChanging: "Ennen vastauksen muuttamista",
    questionsOnPageMode: {
      // [Auto-translated] "Original structure"
      standard: "Alkuperäinen rakenne",
      // [Auto-translated] "Show all questions on one page"
      singlePage: "Näytä kaikki kysymykset yhdellä sivulla",
      // [Auto-translated] "Show single question per page"
      questionPerPage: "Näytä yksittäinen kysymys sivua kohden",
      // [Auto-translated] "Show single input field per page"
      inputPerPage: "Näytä yksi syöttökenttä sivua kohden"
    },
    // "No preview"
    noPreview: "Ei esikatselua",
    // "Show all questions"
    showAllQuestions: "Näytä esikatselu kaikilla kysymyksillä",
    // "Show answered questions only"
    showAnsweredQuestions: "Näytä esikatselu vastatuilla kysymyksillä",
    // [Auto-translated] "Show all questions"
    allQuestions: "Näytä kaikki kysymykset",
    // [Auto-translated] "Show answered questions only"
    answeredQuestions: "Näytä vain vastatut kysymykset",
    // [Auto-translated] "Completed pages"
    pages: "Valmiit sivut",
    // [Auto-translated] "Answered questions"
    questions: "Vastatut kysymykset",
    // [Auto-translated] "Answered required questions"
    requiredQuestions: "Vastatut vaaditut kysymykset",
    // [Auto-translated] "Valid answers"
    correctQuestions: "Oikeat vastaukset",
    // [Auto-translated] "Completed pages (button UI)"
    buttons: "Valmiit sivut (painike Käyttöliittymä)",
    // [Auto-translated] "Under the input"
    underInput: "Tulon alla",
    // [Auto-translated] "Under the title"
    underTitle: "Otsikon alla",
    // [Auto-translated] "On blur"
    onBlur: "Sumennuksessa",
    // [Auto-translated] "While typing"
    onTyping: "Kirjoittamisen aikana",
    // [Auto-translated] "Under the row"
    underRow: "Rivin alla",
    // [Auto-translated] "Under the row, only one panel is visible"
    underRowSingle: "Rivin alla näkyy vain yksi paneeli",
    // "Auto"
    auto: "Automaattinen",
    showNavigationButtons: {
      // [Auto-translated] "Hidden"
      none: "Piilotettu"
    },
    timerInfoMode: {
      // "Both"
      combined: "Molemmat"
    },
    addRowButtonLocation: {
      // [Auto-translated] "Depends on matrix layout"
      default: "Riippuu matriisin asettelusta"
    },
    panelsState: {
      // [Auto-translated] "Users cannot expand or collapse panels"
      default: "Käyttäjät eivät voi laajentaa tai kutistaa paneeleja",
      // [Auto-translated] "All panels are collapsed"
      collapsed: "Kaikki paneelit on tiivistetty",
      // [Auto-translated] "All panels are expanded"
      expanded: "Kaikki paneelit on laajennettu",
      // [Auto-translated] "First expanded"
      firstExpanded: "Ensimmäinen laajennettu"
    },
    widthMode: {
      // [Auto-translated] "Static"
      static: "Staattinen",
      // [Auto-translated] "Responsive"
      responsive: "Responsiivinen"
    },
    contentMode: {
      // [Auto-translated] "Image"
      image: "Kuva",
      // [Auto-translated] "Video"
      video: "Video",
      // [Auto-translated] "YouTube"
      youtube: "YouTubessa"
    },
    displayMode: {
      // [Auto-translated] "Buttons"
      buttons: "Painikkeet",
      // [Auto-translated] "Dropdown"
      dropdown: "Avattava valikko"
    },
    rateColorMode: {
      // "Default"
      default: "Oletus",
      // [Auto-translated] "Scale"
      scale: "Mittakaava"
    },
    scaleColorMode: {
      // [Auto-translated] "Monochrome"
      monochrome: "Yksivärinen",
      // [Auto-translated] "Colored"
      colored: "Värillinen"
    },
    autoGenerate: {
      // "Auto-generate"
      "true": "Luo automaattisesti",
      // [Auto-translated] "Enter manually"
      "false": "Kirjoita manuaalisesti"
    },
    rateType: {
      // [Auto-translated] "Labels"
      labels: "Otsikot",
      // "Stars"
      stars: "Tähdet",
      // [Auto-translated] "Smileys"
      smileys: "Hymiöt"
    },
    state: {
      // [Auto-translated] "Locked"
      default: "Lukittu"
    },
    showQuestionNumbers: {
      // [Auto-translated] "Auto-numbering"
      default: "Automaattinen numerointi",
      // [Auto-translated] "Auto-numbering"
      on: "Automaattinen numerointi",
      // [Auto-translated] "Reset on each page"
      onPage: "Nollaa jokaisella sivulla",
      // [Auto-translated] "Start on each panel"
      onpanel: "Nollaa jokaisessa paneelissa",
      // [Auto-translated] "Reset on each panel"
      onPanel: "Nollaa jokaisessa paneelissa",
      // [Auto-translated] "Recursive numbering"
      recursive: "Rekursiivinen numerointi",
      // [Auto-translated] "Continue across the survey"
      onSurvey: "Jatka kyselyssä",
      // [Auto-translated] "No numbering"
      off: "Ei numerointia"
    },
    descriptionLocation: {
      // [Auto-translated] "Under the question title"
      underTitle: "Kysymyksen otsikon alla",
      // [Auto-translated] "Under the input field"
      underInput: "Syöttökentän alla"
    },
    selectToRankAreasLayout: {
      // [Auto-translated] "Next to choices"
      horizontal: "Valintojen vieressä",
      // [Auto-translated] "Above choices"
      vertical: "Yllä olevat valinnat"
    },
    displayStyle: {
      // [Auto-translated] "Decimal"
      decimal: "Desimaali",
      // [Auto-translated] "Currency"
      currency: "Valuutta",
      // [Auto-translated] "Percentage"
      percent: "Prosenttiosuus",
      // [Auto-translated] "Date"
      date: "Päivämäärä"
    },
    totalDisplayStyle: {
      // [Auto-translated] "Decimal"
      decimal: "Desimaali",
      // [Auto-translated] "Currency"
      currency: "Valuutta",
      // [Auto-translated] "Percentage"
      percent: "Prosenttiosuus",
      // [Auto-translated] "Date"
      date: "Päivämäärä"
    },
    rowOrder: {
      // [Auto-translated] "Original"
      initial: "Alkuperäinen"
    },
    questionOrder: {
      // [Auto-translated] "Original"
      initial: "Alkuperäinen"
    },
    progressBarLocation: {
      // [Auto-translated] "Top"
      top: "Huippu",
      // [Auto-translated] "Bottom"
      bottom: "Pohja",
      // [Auto-translated] "Top and bottom"
      topbottom: "Ylhäällä ja alhaalla",
      // [Auto-translated] "Above the header"
      aboveheader: "Otsikon yläpuolella",
      // [Auto-translated] "Below the header"
      belowheader: "Otsikon alapuolella",
      // [Auto-translated] "Hidden"
      off: "Piilotettu"
    },
    // [Auto-translated] "Sum"
    sum: "Summa",
    // "Count"
    count: "Lukumäärä",
    // [Auto-translated] "Min"
    min: "Min.",
    // [Auto-translated] "Max"
    max: "Maks.",
    // [Auto-translated] "Avg"
    avg: "Keskiarvo",
    searchMode: {
      // [Auto-translated] "Contains"
      contains: "Sisältää",
      // [Auto-translated] "Starts with"
      startsWith: "Alkaa"
    },
    backgroundImageFit: {
      // [Auto-translated] "Auto"
      auto: "Automaattinen",
      // [Auto-translated] "Cover"
      cover: "Peittää",
      // [Auto-translated] "Contain"
      contain: "Sisältää",
      // [Auto-translated] "Stretch"
      fill: "Venyy",
      // [Auto-translated] "Tile"
      tile: "Laatta"
    },
    backgroundImageAttachment: {
      // [Auto-translated] "Fixed"
      fixed: "Kiinteä",
      // [Auto-translated] "Scroll"
      scroll: "Vieritetty"
    },
    headerView: {
      // "Basic"
      basic: "Perus",
      // [Auto-translated] "Advanced"
      advanced: "Edistynyt"
    },
    inheritWidthFrom: {
      // [Auto-translated] "Same as survey"
      survey: "Sama kuin kyselyssä",
      // [Auto-translated] "Fit to container"
      container: "Sovita säiliöön"
    },
    backgroundColorSwitch: {
      // [Auto-translated] "None"
      none: "Ei lainkaan",
      // [Auto-translated] "Accent color"
      accentColor: "Korostusväri",
      // [Auto-translated] "Custom"
      custom: "Kustomoitu"
    },
    colorPalette: {
      // [Auto-translated] "Light"
      light: "Vaalea",
      // [Auto-translated] "Dark"
      dark: "Tumma"
    },
    isPanelless: {
      // "Default"
      "false": "Paneelit",
      // [Auto-translated] "Without Panels"
      "true": "Ilman paneeleja"
    },
    progressBarInheritWidthFrom: {
      // [Auto-translated] "Same as survey"
      survey: "Sama kuin kyselyssä",
      // [Auto-translated] "Same as container"
      container: "Sama kuin kontti"
    }
  },
  // Operators
  op: {
    // "Empty"
    empty: "on tyhjä",
    // "Not empty"
    notempty: "ei ole tyhjä",
    // "Equals"
    equal: "yhtä suuri kuin",
    // "Does not equal"
    notequal: "ei ole yhtä suuri kuin",
    // "Contains"
    contains: "sisältää",
    // "Does not contain"
    notcontains: "ei sisällä",
    // "Any of"
    anyof: "mikä tahansa",
    // "All of"
    allof: "kaikki",
    // "Greater than"
    greater: "suurempi",
    // "Less than"
    less: "vähemmän",
    // "Greater than or equal to"
    greaterorequal: "suurempi tai yhtä suuri kuin",
    // "Less than or equal to"
    lessorequal: "vähemmän tai yhtä suuri kuin",
    // [Auto-translated] "and"
    and: "ja",
    // [Auto-translated] "or"
    or: "tai"
  },
  // Embed window
  ew: {
    // "Use Angular version"
    angular: "Käytä Angular versiota",
    // "Use jQuery version"
    jquery: "Käytä jQuery versiota",
    // "Use Knockout version"
    knockout: "Käytä Knockout versiota",
    // "Use React version"
    react: "Käytä React versiota",
    // "Use Vue version"
    vue: "Käytä Vue versiota",
    // "For bootstrap framework"
    bootstrap: "Bootstrap työkalulle",
    // "Modern theme"
    modern: "Moderni teema",
    // "Default theme"
    default: "Oletus teema",
    // "Orange theme"
    orange: "Oranssi teema",
    // "Darkblue theme"
    darkblue: "Tummansininen teema",
    // "Darkrose theme"
    darkrose: "Tumma ruusu teema",
    // "Stone theme"
    stone: "Kiviteema",
    // "Winter theme"
    winter: "Talvi teema",
    // "Winter-Stone theme"
    winterstone: "Talvi-kivi-teema",
    // "Show survey on a page"
    showOnPage: "Näytä kysely sivulla",
    // "Show survey in a window"
    showInWindow: "Näytä kysely ikkunassa",
    // "Load Survey JSON from server"
    loadFromServer: "Lataa kysely palvelimelta JSON muodossa",
    // "Scripts and styles"
    titleScript: "Skriptit ja tyylit",
    // "HTML"
    titleHtml: "HTML",
    // "JavaScript"
    titleJavaScript: "JavaScript"
  },
  // Preview (Survey)
  ts: {
    // "Select the page to test it"
    selectPage: "Valitse sivu testataksesi sitä:",
    // "Show invisible elements"
    showInvisibleElements: "Näytä näkymätön elementti",
    // [Auto-translated] "Hide invisible elements"
    hideInvisibleElements: "Piilota näkymättömät elementit",
    // [Auto-translated] "Previous"
    prevPage: "Edellinen",
    // [Auto-translated] "Next"
    nextPage: "Seuraava"
  },
  validators: {
    // "Answer count"
    answercountvalidator: "vastausten määrä",
    // "Email"
    emailvalidator: "sähköposti",
    // "Expression"
    expressionvalidator: "lauseke",
    // "Number"
    numericvalidator: "lukumääräinen",
    // "Regex"
    regexvalidator: "säännöllinen lauseke",
    // "Text"
    textvalidator: "teksti"
  },
  triggers: {
    // "Complete survey"
    completetrigger: "valmis kysely",
    // "Set answer"
    setvaluetrigger: "aseta arvo",
    // "Copy answer"
    copyvaluetrigger: "kopioi arvo",
    // "Skip to question"
    skiptrigger: "siirry kysymykseen",
    // "Run expression"
    runexpressiontrigger: "suorita lauseke",
    // "change visibility (deprecated)"
    visibletrigger: "muuta näkyvyyttä (vanhentunut)"
  },
  peplaceholder: {
    patternmask: {
      // "Ex.: +1(999)-999-99-99"
      pattern: "Esimerkki: +1(999)-999-99-99"
    },
    datetimemask: {
      // "Ex.: mm/dd/yyyy HH:MM:ss"
      pattern: "Esimerkki: kk/pp/v"
    },
    currencymask: {
      // "Ex.: $"
      prefix: "Esimerkki: €",
      // "Ex.: USD"
      suffix: "Esimerkki: EUR"
    },
    panelbase: {
      // [Auto-translated] "Ex.: 200px"
      questionTitleWidth: "Esimerkki: 200px"
    },
    panellayoutcolumn: {
      // "Ex.: 30%"
      effectiveWidth: "Esimerkki: 30 %",
      // "Ex.: 200px"
      questionTitleWidth: "Esimerkki: 200px"
    }
  },
  pehelp: {
    panel: {
      // "A panel ID that is not visible to respondents."
      name: "Paneelin tunnus, joka ei näy vastaajille.",
      // [Auto-translated] "Type a subtitle."
      description: "Kirjoita paneelin tekstitys.",
      // "Use the magic wand icon to set a conditional rule that determines panel visibility."
      visibleIf: "Käytä taikasauvakuvaketta asettaaksesi ehdollisen säännön, joka määrittää paneelin näkyvyyden.",
      // [Auto-translated] "Use the magic wand icon to set a conditional rule that disables the read-only mode for the panel."
      enableIf: "Määritä taikasauvakuvakkeen avulla ehdollinen sääntö, joka poistaa paneelin vain luku -tilan käytöstä.",
      // "Use the magic wand icon to set a conditional rule that prevents survey submission unless at least one nested question has an answer."
      requiredIf: "Määritä taikasauvakuvakkeen avulla ehdollinen sääntö, joka estää kyselyn lähettämisen, ellei vähintään yhteen sisäkkäiseen kysymykseen ole vastausta.",
      // [Auto-translated] "Applies to all questions within the survey. This setting can be overridden by title alignment rules at lower levels: panel, page, or question. A lower-level setting will override those on a higher level."
      questionTitleLocation: "Koskee kaikkia tämän paneelin kysymyksiä. Jos haluat ohittaa tämän asetuksen, määritä otsikon tasaussäännöt yksittäisille kysymyksille. Peri-vaihtoehto käyttää sivutason (jos määritetty) tai kyselytason asetusta (\"Ylin\" oletuksena).",
      // [Auto-translated] "Sets consistent width for question titles when they are aligned to the left of their question boxes. Accepts CSS values (px, %, in, pt, etc.)."
      questionTitleWidth: "Määrittää kysymysten otsikoiden tasaisen leveyden, kun ne tasataan kysymysruutujen vasemmalle puolelle. Hyväksyy CSS-arvot (px, %, in, pt jne.).",
      // "Sets the location of an error message in relation to all questions within the panel. The \"Inherit\" option applies the page-level (if set) or survey-level setting."
      questionErrorLocation: "Määrittää virhesanoman sijainnin suhteessa kaikkiin paneelin kysymyksiin. Peri-vaihtoehto käyttää sivutason (jos määritetty) tai kyselytason asetusta.",
      // [Auto-translated] "Keeps the original order of questions or randomizes them. The effect of this setting is only visible in the Preview tab."
      questionOrder: "Säilyttää kysymysten alkuperäisen järjestyksen tai satunnaistaa ne. Peri-vaihtoehto käyttää sivutason (jos määritetty) tai kyselytason asetusta.",
      // "Repositions the panel to the end of a selected page."
      page: "Siirtää paneelin valitun sivun loppuun.",
      // [Auto-translated] "Adds space or margin between the panel content and the left border of the panel box."
      innerIndent: "Lisää tilaa tai reunuksen paneelin sisällön ja paneeliruudun vasemman reunan väliin.",
      // "Unselect to display the panel in one line with the previous question or panel. The setting doesn't apply if the panel is the first element in your form."
      startWithNewLine: "Poista valinta, jos haluat näyttää paneelin yhdellä rivillä edellisen kysymyksen tai paneelin kanssa. Asetusta ei käytetä, jos paneeli on lomakkeen ensimmäinen elementti.",
      // "Choose from: \"Expanded\" - the panel is displayed in full and can be collapsed; \"Collapsed\" - the panel displays only the title and description and can be expanded; \"Locked\" - the panel is displayed in full and cannot be collapsed."
      state: "Valitse seuraavista: \"Laajennettu\" - paneeli näytetään kokonaisuudessaan ja se voidaan kutistaa; \"Tiivistetty\" - paneeli näyttää vain otsikon ja kuvauksen ja sitä voidaan laajentaa; \"Lukittu\" - paneeli näkyy kokonaisuudessaan eikä sitä voi kutistaa.",
      // [Auto-translated] "Accepts CSS values (px, %, in, pt, etc.)."
      width: "Asettaa paneelin leveyden suhteessa muihin saman rivin mittauselementteihin. Hyväksyy CSS-arvot (px, %, in, pt jne.).",
      // [Auto-translated] "Assigns numbers to questions nested within this panel."
      showQuestionNumbers: "Määrittää numerot tässä paneelissa sisäkkäisille kysymyksille.",
      // [Auto-translated] "Specifies how many columns this panel spans within the grid layout."
      effectiveColSpan: "Määrittää, kuinka monta saraketta tämä paneeli kattaa ruudukkoasettelussa.",
      // [Auto-translated] "This table lets you configure each grid column within the panel. It automatically sets the width percentage for each column based on the maximum number of elements in a row. To customize the grid layout, manually adjust these values and define the title width for all questions in each column."
      gridLayoutColumns: "Tämän taulukon avulla voit määrittää paneelin jokaisen ruudukkosarakkeen. Se määrittää automaattisesti kunkin sarakkeen leveysprosentin rivin elementtien enimmäismäärän perusteella. Jos haluat mukauttaa ruudukon asettelua, säädä näitä arvoja manuaalisesti ja määritä otsikon leveys kunkin sarakkeen kaikille kysymyksille."
    },
    paneldynamic: {
      // "A panel ID that is not visible to respondents."
      name: "Paneelin tunnus, joka ei näy vastaajille.",
      // "Type a panel subtitle."
      description: "Kirjoita paneelin tekstitys.",
      // "Use the magic wand icon to set a conditional rule that determines panel visibility."
      visibleIf: "Käytä taikasauvakuvaketta asettaaksesi ehdollisen säännön, joka määrittää paneelin näkyvyyden.",
      // [Auto-translated] "Use the magic wand icon to set a conditional rule that disables the read-only mode for the panel."
      enableIf: "Määritä taikasauvakuvakkeen avulla ehdollinen sääntö, joka poistaa paneelin vain luku -tilan käytöstä.",
      // "Use the magic wand icon to set a conditional rule that prevents survey submission unless at least one nested question has an answer."
      requiredIf: "Määritä taikasauvakuvakkeen avulla ehdollinen sääntö, joka estää kyselyn lähettämisen, ellei vähintään yhteen sisäkkäiseen kysymykseen ole vastausta.",
      // "Applies to all questions within this dynamic panel. If you want to override this setting, define title alignment rules for individual questions. The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Top\" by default)."
      templateQuestionTitleLocation: "Koskee kaikkia tämän paneelin kysymyksiä. Jos haluat ohittaa tämän asetuksen, määritä otsikon tasaussäännöt yksittäisille kysymyksille. Peri-vaihtoehto käyttää sivutason (jos määritetty) tai kyselytason asetusta (\"Ylin\" oletuksena).",
      // "Sets consistent width for question titles when they are aligned to the left of their question boxes. Accepts CSS values (px, %, in, pt, etc.)."
      templateQuestionTitleWidth: "Määrittää kysymysotsikoille yhtenäisen leveyden, kun ne on tasattu kysymysruutujen vasemmalle puolelle. Hyväksyy CSS-arvot (px, %, in, pt jne.).",
      // "Sets the location of an error message in relation to a question with invalid input. Choose between: \"Top\" - an error text is placed at the top of the question box; \"Bottom\" - an error text is placed at the bottom of the question box. The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Top\" by default)."
      templateErrorLocation: "Määrittää virhesanoman sijainnin suhteessa kysymykseen, jonka syöte on virheellinen. Valitse seuraavista: \"Top\" - virheteksti sijoitetaan kysymysruudun yläosaan; \"Pohja\" - virheteksti sijoitetaan kysymysruudun alaosaan. Peri-vaihtoehto käyttää sivutason (jos määritetty) tai kyselytason asetusta (\"Ylin\" oletuksena).",
      // "Sets the location of an error message in relation to all questions within the panel. The \"Inherit\" option applies the page-level (if set) or survey-level setting."
      errorLocation: "Määrittää virhesanoman sijainnin suhteessa kaikkiin paneelin kysymyksiin. Peri-vaihtoehto käyttää sivutason (jos määritetty) tai kyselytason asetusta.",
      // "Repositions the panel to the end of a selected page."
      page: "Siirtää paneelin valitun sivun loppuun.",
      // [Auto-translated] "Adds space or margin between the panel content and the left border of the panel box."
      indent: "Lisää tilaa tai marginaalia paneelin sisällön ja paneeliruudun vasemman reunan väliin.",
      // "Unselect to display the panel in one line with the previous question or panel. The setting doesn't apply if the panel is the first element in your form."
      startWithNewLine: "Poista valinta, jos haluat näyttää paneelin yhdellä rivillä edellisen kysymyksen tai paneelin kanssa. Asetusta ei käytetä, jos paneeli on lomakkeen ensimmäinen elementti.",
      // "Choose from: \"Expanded\" - the panel is displayed in full and can be collapsed; \"Collapsed\" - the panel displays only the title and description and can be expanded; \"Locked\" - the panel is displayed in full and cannot be collapsed."
      state: "Valitse seuraavista: \"Laajennettu\" - paneeli näytetään kokonaisuudessaan ja se voidaan kutistaa; \"Tiivistetty\" - paneeli näyttää vain otsikon ja kuvauksen ja sitä voidaan laajentaa; \"Lukittu\" - paneeli näkyy kokonaisuudessaan eikä sitä voi kutistaa.",
      // "Sets the width of the panel in proportion to other survey elements in the same line. Accepts CSS values (px, %, in, pt, etc.)."
      width: "Asettaa paneelin leveyden suhteessa muihin saman rivin mittauselementteihin. Hyväksyy CSS-arvot (px, %, in, pt jne.).",
      // "Type in a template for entry titles. Use {panelIndex} for the entry's general position and {visiblePanelIndex} for its order among visible entries. Insert these placeholders into the pattern to add automatic numbering."
      templateTitle: "Kirjoita malli dynaamisten paneelien otsikoille. Käytä {panelIndex} paneelin yleistä sijaintia ja {visiblePanelIndex} sen järjestystä näkyvien paneelien joukossa. Lisää nämä paikkamerkit kuvioon lisätäksesi automaattisen numeroinnin.",
      // "Type in a template for tab titles. Use {panelIndex} for an entry's general position and {visiblePanelIndex} for its order among visible entries. Insert these placeholders into the pattern to add automatic numbering."
      templateTabTitle: "Kirjoita välilehtien otsikoiden malli. Käytä {panelIndex} paneelin yleistä sijaintia ja {visiblePanelIndex} sen järjestystä näkyvien paneelien joukossa. Lisää nämä paikkamerkit kuvioon lisätäksesi automaattisen numeroinnin.",
      // "A fallback text for tab titles that applies when the tab title pattern doesn't produce a meaningful value."
      tabTitlePlaceholder: "Välilehtien otsikoiden varateksti, jota käytetään, kun välilehden otsikkomalli ei tuota merkityksellistä arvoa.",
      // "This setting allows you to control the visibility of individual entries within the dynamic panel. Use the `{panel}` placeholder to reference the current entry in your expression."
      templateVisibleIf: "Tämän asetuksen avulla voit hallita yksittäisten paneelien näkyvyyttä dynaamisessa paneelissa. {panel}-paikkamerkin avulla voit viitata lausekkeen nykyiseen paneeliin.",
      // "This setting is automatically inherited by all questions within this dynamic panel. If you want to override this setting, define title alignment rules for individual questions. The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Top\" by default)."
      titleLocation: "Tämä asetus periytyy automaattisesti kaikkiin tämän paneelin kysymyksiin. Jos haluat ohittaa tämän asetuksen, määritä otsikon tasaussäännöt yksittäisille kysymyksille. Peri-vaihtoehto käyttää sivutason (jos määritetty) tai kyselytason asetusta (\"Ylin\" oletuksena).",
      // "The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Under the panel title\" by default)."
      descriptionLocation: "\"Peri\" -vaihtoehto käyttää sivutason (jos määritetty) tai kyselytason asetusta (\"Paneelin otsikon alla\" oletuksena).",
      // "Defines the position of a newly added entry. By default, new entries are added to the end. Select \"Next\" to insert a new entry after the current one."
      newPanelPosition: "Määrittää juuri lisätyn paneelin sijainnin. Oletuksena uudet paneelit lisätään loppuun. Valitse \"Seuraava\" lisätäksesi uuden paneelin nykyisen jälkeen.",
      // [Auto-translated] "Duplicates answers from the last panel and assigns them to the next added dynamic panel."
      copyDefaultValueFromLastEntry: "Monistaa edellisen paneelin vastaukset ja määrittää ne seuraavaan lisättyyn dynaamiseen paneeliin.",
      // "Reference a question name to require a user to provide a unique response for this question in each entry."
      keyName: "Viittaa kysymyksen nimeen, jos haluat edellyttää, että käyttäjä antaa yksilöllisen vastauksen tähän kysymykseen kussakin paneelissa.",
      // [Auto-translated] "Triggers a prompt asking to confirm the row removal."
      confirmDelete: "Käynnistää vahvistuskehotteen ennen paneelin poistamista."
    },
    matrixdynamic: {
      // [Auto-translated] "Triggers a confirmation prompt before removing a row."
      confirmDelete: "Käynnistää vahvistuskehotteen ennen rivin poistamista.",
      // [Auto-translated] "Automatically expands the detail section when a new row is added to the matrix."
      detailPanelShowOnAdding: "Laajentaa tieto-osan automaattisesti, kun matriisiin lisätään uusi rivi."
    },
    // "Duplicates answers from the last row and assigns them to the next added dynamic row."
    copyDefaultValueFromLastEntry: "Monistaa vastaukset viimeiseltä riviltä ja määrittää ne seuraavalle lisätylle dynaamiselle riville.",
    // [Auto-translated] "This setting allows you to assign a default answer value based on an expression. The expression can include basic calculations - `{q1_id} + {q2_id}`, Boolean expressions, such as `{age} > 60`, and functions: `iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, etc. The value determined by this expression serves as the initial default value that can be overridden by a respondent's manual input."
    defaultValueExpression: "Tämän asetuksen avulla voit määrittää oletusarvoisen vastausarvon lausekkeen perusteella. Lauseke voi sisältää peruslaskutoimituksia - '{q1_id} + {q2_id}', totuusarvolausekkeita, kuten '{age} > 60', ja funktioita: 'iif()', 'today()', 'age()', 'min()', 'max()', 'avg()' jne. Tämän lausekkeen määrittämä arvo toimii alkuperäisenä oletusarvona, jonka vastaajan manuaalinen syöttö voi ohittaa.",
    // "Use the magic wand icon to set a conditional rule that determines when a respondent's input is reset to the value based on the \"Default value expression\" or \"Set value expression\" or to the \"Default answer\" value (if either is set)."
    resetValueIf: "Käytä taikasauvakuvaketta asettaaksesi ehdollisen säännön, joka määrittää, milloin vastaajan syöte palautetaan arvoon \"Oletusarvolauseke\" tai \"Aseta arvolauseke\" tai \"Oletusvastaus\" -arvoon (jos jompikumpi on asetettu).",
    // "Use the magic wand icon to set a conditional rule that determines when to run the \"Set value expression\" and dynamically assign the resulting value as a response."
    setValueIf: "Käytä taikasauvakuvaketta asettaaksesi ehdollisen säännön, joka määrittää, milloin \"Aseta arvolauseke\" suoritetaan, ja määritä tuloksena oleva arvo dynaamisesti vastauksena.",
    // "Specify an expression that defines the value to be set when the conditions in the \"Set value if\" rule are met. The expression can include basic calculations - `{q1_id} + {q2_id}`, Boolean expressions, such as `{age} > 60`, and functions: `iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, etc. The value determined by this expression can be overridden by a respondent's manual input."
    setValueExpression: "Määritä lauseke, joka määrittää arvon, joka määritetään, kun Aseta arvo jos -säännön ehdot täyttyvät. Lauseke voi sisältää peruslaskutoimituksia - '{q1_id} + {q2_id}', totuusarvolausekkeita, kuten '{age} > 60', ja funktioita: 'iif()', 'today()', 'age()', 'min()', 'max()', 'avg()' jne. Tämän lausekkeen määrittämä arvo voidaan ohittaa vastaajan manuaalisella syötöllä.",
    // "Survey Creator allows you to manually adjust the inline widths of form elements to control the layout. If this doesn't produce the desired outcome, you can enable the grid layout, which structures form elements using a column-based system. To configure layout columns, select a page or panel and use the \"Question Settings\" → \"Grid columns\" table. To adjust how many columns a question spans, select it and set the desired value in the \"Layout\" → \"Column span\" field."
    gridLayoutEnabled: "Survey Creatorin avulla voit manuaalisesti säätää lomake-elementtien sisäisiä leveyksiä asettelun hallitsemiseksi. Jos tämä ei tuota toivottua tulosta, voit ottaa käyttöön ruudukkoasettelun, joka jäsentää elementtejä sarakepohjaisen järjestelmän avulla. Määritä asettelusarakkeet valitsemalla sivu tai paneeli ja käyttämällä \"Kysymysasetukset\" → \"Ruudukkosarakkeet\" -taulukkoa. Jos haluat säätää, kuinka monta saraketta kysymys kattaa, valitse se ja aseta haluamasi arvo \"Asettelu\" → \"Sarakeväli\" -kenttään.",
    question: {
      // "A question ID that is not visible to respondents."
      name: "Kysymystunnus, joka ei näy vastaajille.",
      // "Type a question subtitle."
      description: "Kirjoita kysymyksen alaotsikko.",
      // "Use the magic wand icon to set a conditional rule that determines question visibility."
      visibleIf: "Käytä taikasauvakuvaketta asettaaksesi ehdollisen säännön, joka määrittää kysymyksen näkyvyyden.",
      // [Auto-translated] "Use the magic wand icon to set a conditional rule that disables the read-only mode for the question."
      enableIf: "Määritä taikasauvakuvakkeen avulla ehdollinen sääntö, joka poistaa kysymyksen vain luku -tilan käytöstä.",
      // "Use the magic wand icon to set a conditional rule that prevents survey advancing or submission unless the question received an answer."
      requiredIf: "Määritä taikasauvakuvakkeen avulla ehdollinen sääntö, joka estää kyselyn etenemisen tai lähettämisen, ellei kysymykseen ole vastattu.",
      // [Auto-translated] "Unselect to display the question in one line with the previous question or panel. The setting doesn't apply if the question is the first element in your form."
      startWithNewLine: "Poista valinta, jos haluat näyttää kysymyksen yhdellä rivillä edellisen kysymyksen tai paneelin kanssa. Asetusta ei käytetä, jos kysymys on lomakkeen ensimmäinen elementti.",
      // "Repositions the question to the end of a selected page."
      page: "Sijoittaa kysymyksen uudelleen valitun sivun loppuun.",
      // "Choose from: \"Expanded\" - the question box is displayed in full and can be collapsed; \"Collapsed\" - the question box displays only the title and description and can be expanded; \"Locked\" - the question box is displayed in full and cannot be collapsed."
      state: "Valitse seuraavista: \"Laajennettu\" - kysymysruutu näytetään kokonaisuudessaan ja se voidaan kutistaa; \"Tiivistetty\" - kysymysruutu näyttää vain otsikon ja kuvauksen ja sitä voidaan laajentaa; \"Lukittu\" - kysymysruutu näkyy kokonaisuudessaan eikä sitä voi kutistaa.",
      // "Overrides title alignment rules defined on a panel, page, or survey level. When set to \"Hidden\", it also hides question descriptions. The \"Inherit\" option applies any higher-level settings (if set) or survey-level setting (\"Top\" by default)."
      titleLocation: "Ohittaa paneeli-, sivu- tai kyselytasolla määritetyt otsikon tasaussäännöt. \"Peri\"-vaihtoehto käyttää kaikkia ylemmän tason asetuksia (jos määritetty) tai kyselytason asetuksia (\"Ylin\" oletuksena).",
      // "The \"Inherit\" option applies the survey-level setting (\"Under the question title\" by default)."
      descriptionLocation: "\"Peri\"-vaihtoehto käyttää kyselytason asetusta (\"Kysymyksen otsikon alla\" oletuksena).",
      // "Sets the location of an error message in relation to the question with invalid input. Choose between: \"Top\" - an error text is placed at the top of the question box; \"Bottom\" - an error text is placed at the bottom of the question box. The \"Inherit\" option applies the survey-level setting (\"Top\" by default)."
      errorLocation: "Määrittää virhesanoman sijainnin suhteessa kysymykseen, jonka syöte on virheellinen. Valitse seuraavista: \"Top\" - virheteksti sijoitetaan kysymysruudun yläosaan; \"Pohja\" - virheteksti sijoitetaan kysymysruudun alaosaan. \"Peri\"-vaihtoehto käyttää kyselytason asetusta (\"Ylin\" oletuksena).",
      // "Adds space or margin between the question content and the left border of the question box."
      indent: "Lisää välilyönnin tai reunuksen kysymyksen sisällön ja kysymysruudun vasemman reunan väliin.",
      // "Sets the width of the question in proportion to other survey elements in the same line. Accepts CSS values (px, %, in, pt, etc.)."
      width: "Määrittää kysymyksen leveyden suhteessa saman rivin muihin kyselyelementteihin. Hyväksyy CSS-arvot (px, %, in, pt jne.).",
      // "Choose from: \"On lost focus\" - the value is updated when the input field loses focus; \"While typing\" - the value is updated in real-time, as users are typing. The \"Inherit\" option applies the survey-level setting (\"On lost focus\" by default)."
      textUpdateMode: "Valitse seuraavista: \"Kadonneessa tarkennuksessa\" - arvo päivitetään, kun syöttökenttä menettää tarkennuksen; \"Kirjoitettaessa\" - arvo päivitetään reaaliajassa, kun käyttäjät kirjoittavat. \"Peri\"-vaihtoehto käyttää kyselytason asetusta (\"Oletusarvoisesti menetetty kohdistus\").",
      // [Auto-translated] "You can use any web service as a data source for multiple-choice questions. To populate choice values, enter the URL of the service providing the data."
      url: "Voit käyttää mitä tahansa verkkopalvelua tietolähteenä monivalintakysymyksissä. Voit täyttää valinta-arvot antamalla tiedot tarjoavan palvelun URL-osoitteen.",
      // [Auto-translated] "A comparison operation used to filter the drop-down list."
      searchMode: "Vertailutoiminto, jota käytetään avattavan luettelon suodattamiseen.",
      // [Auto-translated] "Long texts in choice options will automatically generate line breaks to fit within the drop-down menu. Unselect if you want the texts to clip."
      textWrapEnabled: "Valintavaihtoehtojen pitkät tekstit luovat automaattisesti rivinvaihdot, jotka mahtuvat avattavaan valikkoon. Poista valinta, jos haluat leikata tekstit.",
      // [Auto-translated] "Specifies how many columns this question spans within the grid layout."
      effectiveColSpan: "Määrittää, kuinka monta saraketta tämä kysymys kattaa ruudukkoasettelussa."
    },
    surveyvalidator: {
      // "Use the magic wand icon to define when the question's value is considered valid."
      expression: "Käytä taikasauvakuvaketta määrittääksesi, milloin kysymyksen arvoa pidetään kelvollisena"
    },
    signaturepad: {
      // "Sets the width of the displayed signature area and the resulting image."
      signatureWidth: "Määrittää näytettävän allekirjoitusalueen ja tuloksena olevan kuvan leveyden.",
      // "Sets the height of the displayed signature area and the resulting image."
      signatureHeight: "Määrittää näytettävän allekirjoitusalueen ja tuloksena olevan kuvan korkeuden.",
      // "Select if you want the signature area to fill all available space within the question box while maintaining the default 3:2 aspect ratio. When custom width and height values are set, the setting will keep the aspect ratio of these dimensions."
      signatureAutoScaleEnabled: "Valitse tämä, jos haluat, että allekirjoitusalue täyttää kaiken kysymysruudussa käytettävissä olevan tilan säilyttäen oletusarvoisen 3:2-kuvasuhteen. Kun mukautetut leveys- ja korkeusarvot on määritetty, asetus säilyttää näiden mittojen kuvasuhteen."
    },
    file: {
      // "Specifies the display height of uploaded images in the preview and the actual height of images taken with the camera. In single file upload mode, the display height is limited by the preview area; in multiple file upload mode, it is limited by the thumbnail area."
      imageHeight: "Määrittää ladattujen kuvien näyttökorkeuden esikatselussa ja kameralla otettujen kuvien todellisen korkeuden. Yhden tiedoston lataustilassa esikatselualue rajoittaa näytön korkeutta. Usean tiedoston lataustilassa sitä rajoittaa pikkukuva-alue.",
      // "Specifies the display width of uploaded images in the preview and the actual width of images taken with the camera. In single file upload mode, the display width is limited by the preview area; in multiple file upload mode, it is limited by the thumbnail area."
      imageWidth: "Määrittää ladattujen kuvien näyttöleveyden esikatselussa ja kameralla otettujen kuvien todellisen leveyden. Yhden tiedoston lataustilassa esikatselualue rajoittaa näytön leveyttä. Usean tiedoston lataustilassa sitä rajoittaa pikkukuva-alue.",
      // [Auto-translated] "Displays thumbnail previews for uploaded files when possible. Unselect if you want to show file icons instead."
      allowImagesPreview: "Näyttää ladattujen tiedostojen pikkukuvien esikatselut, kun mahdollista. Poista valinta, jos haluat näyttää tiedostokuvakkeet sen sijaan."
    },
    image: {
      // "The \"Auto\" option automatically determines the suitable mode for display - Image, Video, or YouTube - based on the source URL provided."
      contentMode: "\"Auto\" -vaihtoehto määrittää automaattisesti sopivan näyttötilan - Kuva, Video tai YouTube - annetun lähde-URL-osoitteen perusteella."
    },
    imagepicker: {
      // [Auto-translated] "Overrides the minimum and maximum height values."
      imageHeight: "Ohittaa vähimmäis- ja enimmäiskorkeusarvot.",
      // [Auto-translated] "Overrides the minimum and maximum width values."
      imageWidth: "Ohittaa vähimmäis- ja enimmäisleveysarvot.",
      // [Auto-translated] "The left value serves as an item ID used in conditional rules, the right value is displayed to respondents."
      choices: "\"Arvo\" toimii ehdollisissa säännöissä käytettynä tuotetunnuksena; \"Teksti\" näkyy vastaajille.",
      // "Choose between \"Image\" and \"Video\" to set the content mode of the media selector. If \"Image\" is selected, ensure that all options provided are image files in the following formats: JPEG, GIF, PNG, APNG, SVG, BMP, ICO. Similarly, if \"Video\" is selected, ensure that all options are direct links to video files in the following formats: MP4, MOV, WMV, FLV, AVI, MKV. Please note that YouTube links are not supported for video options."
      contentMode: "Valitse \"Kuva\" tai \"Video\" asettaaksesi mediavalitsimen sisältötilan. Jos \"Kuva\" on valittuna, varmista, että kaikki annetut vaihtoehdot ovat kuvatiedostoja seuraavissa muodoissa: JPEG, GIF, PNG, APNG, SVG, BMP, ICO. Samoin, jos \"Video\" on valittuna, varmista, että kaikki vaihtoehdot ovat suoria linkkejä videotiedostoihin seuraavissa muodoissa: MP4, MOV, WMV, FLV, AVI, MKV. Huomaa, että YouTube-linkkejä ei tueta videoasetuksissa."
    },
    text: {
      // [Auto-translated] "Resizes the visible area of the input field. Please use the <b>Validation → Maximum length</b> setting to limit the input length."
      size: "Tämä asetus muuttaa vain syöttökentän kokoa eikä vaikuta kysymysruudun leveyteen. Jos haluat rajoittaa hyväksyttyä syötteen pituutta, siirry kohtaan <b>Vahvistus → merkkien enimmäismäärä</b>."
    },
    comment: {
      // [Auto-translated] "The left value serves as a row ID used in conditional rules, the right value is displayed to respondents."
      rows: "Määrittää syöttökentässä näytettävien rivien määrän. Jos tulo vie enemmän rivejä, vierityspalkki tulee näkyviin."
    },
    // survey templates
    survey: {
      // "Select if you want to prevent respondents from filling out your survey."
      readOnly: "Valitse tämä, jos haluat estää vastaajia vastaamasta kyselyyn.",
      // "Sets the location of the progress bar. The \"Auto\" value displays the progress bar above or below the survey header."
      progressBarLocation: "Määrittää edistymispalkin sijainnin. \"Auto\"-arvo näyttää edistymispalkin kyselyn otsikon ylä- tai alapuolella."
    },
    matrixdropdowncolumn: {
      // "A column ID that is not visible to respondents."
      name: "Sarakkeen tunnus, joka ei näy vastaajille.",
      // "When enabled for a column, a respondent is required to provide a unique response for each question within this column."
      isUnique: "Kun sarake on otettu käyttöön, vastaajan on annettava yksilöllinen vastaus jokaiseen tämän sarakkeen kysymykseen.",
      // "Sets the number of displayed lines in the input field. If the input takes up more lines, the scroll bar will appear."
      rows: "Määrittää syöttökentässä näytettävien rivien määrän. Jos tulo vie enemmän rivejä, vierityspalkki tulee näkyviin.",
      // "Use the magic wand icon to set a conditional rule that determines column visibility."
      visibleIf: "Määritä taikasauvakuvakkeen avulla ehdollinen sääntö, joka määrittää sarakkeen näkyvyyden.",
      // [Auto-translated] "Use the magic wand icon to set a conditional rule that disables the read-only mode for the column."
      enableIf: "Määritä taikasauvakuvakkeen avulla ehdollinen sääntö, joka poistaa sarakkeen vain luku -tilan käytöstä.",
      // "Use the magic wand icon to set a conditional rule that prevents survey submission unless at least one nested question has an answer."
      requiredIf: "Määritä taikasauvakuvakkeen avulla ehdollinen sääntö, joka estää kyselyn lähettämisen, ellei vähintään yhteen sisäkkäiseen kysymykseen ole vastausta.",
      // "When selected, creates an individual column for each choice option."
      showInMultipleColumns: "Kun tämä asetus on valittuna, kullekin vaihtoehdolle luodaan oma sarake.",
      // [Auto-translated] "Arranges choice options in a multi-column layout. When set to 0, the options are displayed in a single line."
      colCount: "Järjestää valintavaihtoehdot monisarakkeiseen asetteluun. Kun asetuksena on 0, asetukset näytetään yhdellä rivillä. Kun arvoksi on määritetty -1, todellinen arvo periytyy päämatriisin sisäkkäisten sarakkeiden määrä -ominaisuudesta."
    },
    slider: {
      // "The lowest number that users can select."
      min: "Pienin luku, jonka käyttäjät voivat valita.",
      // "The highest number that users can select."
      max: "Suurin luku, jonka käyttäjät voivat valita.",
      // "The interval between selectable scale values. For example, a step of 5 will allow users to select 0, 5, 10, etc."
      step: "Valittavissa olevien asteikkoarvojen välinen aikaväli. Esimerkiksi vaihe 5 antaa käyttäjille mahdollisuuden valita 0, 5, 10 jne.",
      // "The minimum distance between the slider thumbs a user can set."
      minRangeLength: "Liukusäätimen peukaoiden välinen vähimmäisetäisyys, jonka käyttäjä voi asettaa.",
      // "The maximum distance between the slider thumbs a user can set."
      maxRangeLength: "Käyttäjän asettamien liukusäätimien peukaloiden välinen enimmäisetäisyys.",
      // "Specifies how many scale labels to generate. A value of -1 means the number is calculated automatically based on the Min value and Max value."
      labelCount: "Määrittää, kuinka monta asteikon otsikkoa luodaan. Arvo -1 tarkoittaa, että luku lasketaan automaattisesti minimi- ja maksimiarvojen perusteella.",
      // "Use `{0}` as a placeholder for the actual value."
      labelFormat: "Käytä \"{0}\" todellisen arvon paikkamerkkinä.",
      // "Allows you to define custom labels at specific values and optionally assign corresponding text to them (e.g., 0 = \"Poor\", 100 = \"Excellent\")."
      customLabels: "Voit määrittää mukautettuja otsikoita tietyillä arvoilla ja halutessasi määrittää niille vastaavan tekstin (esim. 0 = \"Huono\", 100 = \"Erinomainen\").",
      // "Use `{0}` as a placeholder for the actual value."
      tooltipFormat: "Käytä \"{0}\" todellisen arvon paikkamerkkinä.",
      // "Allows users to move one thumb past the other."
      allowSwap: "Antaa käyttäjien siirtää peukalon toisen ohi.",
      // [Auto-translated] "Displays a button that clears the selected slider value and sets it to undefined."
      allowClear: "Näyttää painikkeen, joka tyhjentää valitun liukusäätimen arvon ja asettaa sen määrittämättömäksi.",
      // "Defines the slider's minimum value dynamically using an expression. Supports basic calculations (e.g, `{q1_id} + {q2_id}`), Boolean logic (e.g., `{age} > 60`), and functions like `iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, and more."
      minValueExpression: "Määrittää liukusäätimen vähimmäisarvon dynaamisesti lausekkeen avulla. Tukee peruslaskutoimituksia (esim. '{q1_id} + {q2_id}'), Boolen logiikkaa (esim. '{age} > 60') ja funktioita, kuten 'iif()', 'today()', 'age()', 'min()', 'max()', 'avg()' ja paljon muuta.",
      // "Defines the slider's maximum value dynamically using an expression. Supports basic calculations (e.g, `{q1_id} + {q2_id}`), Boolean logic (e.g., `{age} > 60`), and functions like `iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, and more."
      maxValueExpression: "Määrittää liukusäätimen enimmäisarvon dynaamisesti lausekkeen avulla. Tukee peruslaskutoimituksia (esim. '{q1_id} + {q2_id}'), Boolen logiikkaa (esim. '{age} > 60') ja funktioita, kuten 'iif()', 'today()', 'age()', 'min()', 'max()', 'avg()' ja paljon muuta."
    },
    // [Auto-translated] "Makes this choice exclusive. When selected by a user, it will automatically deselect all other options in the question."
    isExclusive: "Tekee tästä valinnasta eksklusiivisen. Kun käyttäjä valitsee sen, se poistaa automaattisesti kaikkien muiden kysymyksen vaihtoehtojen valinnan.",
    // [Auto-translated] "Select if uppercase and lowercase letters in the regular expression must be treated as equivalent."
    caseInsensitive: "Valitse, onko säännöllisen lausekkeen isoja ja pieniä kirjaimia käsiteltävä vastaavina.",
    // "Choose from: \"Static\" - sets a fixed width; \"Responsive\" - makes the survey occupy the full width of the screen; \"Auto\" - applies either of the two depending on the question types used."
    widthMode: "Valitse seuraavista: \"Staattinen\" - asettaa kiinteän leveyden; \"Reagoiva\" - tekee kyselystä koko näytön leveyden; \"Auto\" - soveltaa jompaakumpaa näistä kahdesta riippuen käytetyistä kysymystyypeistä.",
    // [Auto-translated] "Cookies prevent users from filling out the same survey twice."
    cookieName: "Evästeet estävät käyttäjiä täyttämästä samaa kyselyä kahdesti.",
    // [Auto-translated] "Paste an image link (no size limits) or click the folder icon to browse a file from your computer (up to 64KB)."
    logo: "Liitä kuvalinkki (ei kokorajoituksia) tai napsauta kansiokuvaketta selataksesi tiedostoa tietokoneeltasi (enintään 64 kt).",
    // [Auto-translated] "Sets a logo width in CSS units (px, %, in, pt, etc.)."
    logoWidth: "Määrittää logon leveyden CSS-yksiköissä (px, %, in, pt jne.).",
    // [Auto-translated] "Sets a logo height in CSS units (px, %, in, pt, etc.)."
    logoHeight: "Asettaa logon korkeuden CSS-yksiköinä (px, %, in, pt jne.).",
    // "Choose from: \"None\" - image maintains its original size; \"Contain\" - image is resized to fit while maintaining its aspect ratio; \"Cover\" - image fills the entire box while maintaining its aspect ratio; \"Fill\" - image is stretched to fill the box without maintaining its aspect ratio."
    logoFit: "Valitse seuraavista: \"Ei mitään\" - kuva säilyttää alkuperäisen kokonsa; \"Sisältää\" - kuvan kokoa muutetaan sopivaksi säilyttäen samalla kuvasuhteensa; \"Kansi\" - kuva täyttää koko laatikon säilyttäen samalla kuvasuhteensa; \"Täytä\" - kuva venytetään täyttämään laatikko säilyttämättä sen kuvasuhdetta.",
    // [Auto-translated] "Select if you want the survey to auto-advance to the next page once a respondent has answered all questions on the current page. This feature won't apply if the last question on the page is open-ended or allows multiple answers."
    autoAdvanceEnabled: "Valitse tämä, jos haluat, että kysely siirtyy automaattisesti seuraavalle sivulle, kun vastaaja on vastannut kaikkiin nykyisen sivun kysymyksiin. Tätä ominaisuutta ei käytetä, jos sivun viimeinen kysymys on avoin tai sallii useita vastauksia.",
    // [Auto-translated] "Select if you want the survey to complete automatically after a respondent answers all questions."
    autoAdvanceAllowComplete: "Valitse, haluatko kyselyn täyttyvän automaattisesti, kun vastaaja on vastannut kaikkiin kysymyksiin.",
    // [Auto-translated] "Sets the visibility and location of navigation buttons on a page."
    showNavigationButtons: "Määrittää sivun navigointipainikkeiden näkyvyyden ja sijainnin.",
    // [Auto-translated] "Sets the location of navigation buttons on a page."
    navigationButtonsLocation: "Määrittää navigointipainikkeiden sijainnin sivulla.",
    // [Auto-translated] "Enable the preview page with all or answered questions only."
    showPreviewBeforeComplete: "Ota esikatselusivu käyttöön vain kaikilla kysymyksillä tai vastatuilla kysymyksillä.",
    // "Applies to all questions within the survey. This setting can be overridden by title alignment rules at lower levels: panel, page, or question. A lower-level setting will override those on a higher level."
    questionTitleLocation: "Koskee kaikkia kyselyn kysymyksiä. Tämä asetus voidaan ohittaa otsikon tasaussäännöillä alemmilla tasoilla: paneeli, sivu tai kysymys. Alemman tason asetus ohittaa korkeammalla tasolla olevat.",
    // [Auto-translated] "A symbol or a sequence of symbols indicating that an answer is required."
    requiredMark: "Symboli tai symbolisarja, joka osoittaa, että vastaus vaaditaan.",
    // [Auto-translated] "Enter a number or letter with which you want to start numbering."
    questionStartIndex: "Kirjoita numero tai kirjain, jolla haluat aloittaa numeroinnin.",
    // "Sets the location of an error message in relation to the question with invalid input. Choose between: \"Top\" - an error text is placed at the top of the question box; \"Bottom\" - an error text is placed at the bottom of the question box."
    questionErrorLocation: "Määrittää virhesanoman sijainnin suhteessa kysymykseen, jonka syöte on virheellinen. Valitse seuraavista: \"Top\" - virheteksti sijoitetaan kysymysruudun yläosaan; \"Pohja\" - virheteksti sijoitetaan kysymysruudun alaosaan.",
    // [Auto-translated] "Select if you want the first input field on each page ready for text entry."
    autoFocusFirstQuestion: "Valitse tämä, jos haluat, että kunkin sivun ensimmäinen syöttökenttä on valmis tekstinsyöttöä varten.",
    // "Keeps the original order of questions or randomizes them. The effect of this setting is only visible in the Preview tab."
    questionOrder: "Säilyttää kysymysten alkuperäisen järjestyksen tai satunnaistaa ne. Tämän asetuksen vaikutus näkyy vain Esikatselu-välilehdessä.",
    // [Auto-translated] "For text entry questions only."
    maxTextLength: "Vain tekstinsyöttökysymykset.",
    // [Auto-translated] "For question comments only."
    maxCommentLength: "Vain kysymysten kommentit.",
    // [Auto-translated] "Sets the number of displayed lines in text areas for question comments. In the input takes up more lines, the scroll bar appears."
    commentAreaRows: "Määrittää kysymyskommenttien tekstialueilla näytettävien rivien määrän. Jos syöttö vie enemmän rivejä, vierityspalkki tulee näkyviin.",
    // [Auto-translated] "Select if you want question comments and Long Text questions to auto-grow in height based on the entered text length."
    autoGrowComment: "Valitse tämä, jos haluat, että kysymysten kommentit ja pitkät tekstit -kysymykset kasvavat automaattisesti syötetyn tekstin pituuden perusteella.",
    // [Auto-translated] "For question comments and Long Text questions only."
    allowResizeComment: "Vain kysymyskommentit ja pitkän tekstin kysymykset.",
    // [Auto-translated] "Custom variables serve as intermediate or auxiliary variables used in form calculations. They take respondent inputs as source values. Each custom variable has a unique name and an expression it's based on."
    calculatedValues: "Mukautetut muuttujat toimivat väli- tai apumuuttujina, joita käytetään lomakelaskelmissa. He ottavat vastaajan syötteet lähdearvoina. Jokaisella mukautetulla muuttujalla on yksilöllinen nimi ja lauseke, johon se perustuu.",
    // [Auto-translated] "Select if you wish the calculated value of the expression to be saved along with survey results."
    includeIntoResult: "Valitse tämä, jos haluat, että lausekkeen laskettu arvo tallennetaan yhdessä kyselyn tulosten kanssa.",
    // "A trigger is an event or condition that is based on an expression. Once the expression is evaluated to \"true\", a trigger sets off an action. Such an action can optionally have a target question it affects."
    triggers: "Käynnistin on tapahtuma tai ehto, joka perustuu lausekkeeseen. Kun lausekkeen arvoksi on arvioitu \"tosi\", käynnistin käynnistää toiminnon. Tällaisella toiminnalla voi valinnaisesti olla kohdekysymys, johon se vaikuttaa.",
    // [Auto-translated] "Choose whether or not to clear values for questions hidden by conditional logic and when to do it."
    clearInvisibleValues: "Valitse, tyhjennetäänkö ehdollisen logiikan piilottamien kysymysten arvot ja milloin se tehdään.",
    // "Choose from: \"On lost focus\" - the value is updated when the input field loses focus; \"While typing\" - the value is updated in real-time, as users are typing."
    textUpdateMode: "Valitse seuraavista: \"Kadonneessa tarkennuksessa\" - arvo päivitetään, kun syöttökenttä menettää tarkennuksen; \"Kirjoitettaessa\" - arvo päivitetään reaaliajassa, kun käyttäjät kirjoittavat.",
    // [Auto-translated] "The left value serves as a column ID used in conditional rules, the right value is displayed to respondents."
    columns: "Vasen arvo toimii ehdollisissa säännöissä käytettynä saraketunnuksena, oikea arvo näkyy vastaajille.",
    // "The left value serves as a row ID used in conditional rules, the right value is displayed to respondents."
    rows: "Vasen arvo toimii rivitunnuksena, jota käytetään ehdollisissa säännöissä, oikea arvo näytetään vastaajille.",
    // [Auto-translated] "Accepts CSS values (px, %, in, pt, etc.)."
    columnMinWidth: "Hyväksyy CSS-arvot (px, %, in, pt jne.).",
    // [Auto-translated] "Accepts CSS values (px, %, in, pt, etc.)."
    rowTitleWidth: "Hyväksyy CSS-arvot (px, %, in, pt jne.).",
    // [Auto-translated] "Visible only when at least one column has Total type or Total expression."
    totalText: "Näkyy vain, kun vähintään yhdessä sarakkeessa on Summa-tyyppi tai Summa-lauseke.",
    // "Sets the location of an error message in relation to a cell with invalid input. The \"Inherit\" option applies the setting from the \"Error message alignment\" property."
    cellErrorLocation: "Määrittää virhesanoman sijainnin suhteessa soluun, jonka syöte on virheellinen. \"Peri\" -vaihtoehto käyttää asetusta \"Virheilmoituksen kohdistus\" -ominaisuudesta.",
    // "Sets the location of error messages for questions nested in detail sections. The \"Inherit\" option applies the setting from the \"Error message alignment\" property."
    detailErrorLocation: "Määrittää tieto-osiin sisältyvien kysymysten virhesanomien sijainnin. \"Peri\" -vaihtoehto käyttää asetusta \"Virheilmoituksen kohdistus\" -ominaisuudesta.",
    // "When the \"Prevent duplicate responses\" property is enabled, a respondent attempting to submit a duplicate entry will receive the following error message."
    keyDuplicationError: "Kun Estä päällekkäiset vastaukset -ominaisuus on käytössä, vastaaja, joka yrittää lähettää merkinnän kaksoiskappaleen, saa seuraavan virhesanoman.",
    // [Auto-translated] "Allows you to calculate total values based on an expression. The expression can include basic calculations (`{q1_id} + {q2_id}`), Boolean expressions (`{age} > 60`) and functions ('iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, etc.)."
    totalExpression: "Voit laskea kokonaisarvot lausekkeen perusteella. Lauseke voi sisältää peruslaskutoimituksia ('{q1_id} + {q2_id}'), totuusarvolausekkeita ('{age} > 60') ja funktioita ('iif()', 'today()', 'age()', 'min()', 'max()', 'avg()' jne.).",
    // "Reference a column ID to require a user to provide a unique response for each question within the specified column."
    keyName: "Jos määritetty sarake sisältää samat arvot, kysely heittää \"Ei-yksilöllinen avainarvo\" -virheen.",
    // "Type a subtitle."
    description: "Kirjoita tekstitys.",
    // [Auto-translated] "Choose a language to begin creating your survey. To add a translation, switch to a new language and translate the original text here or in the Translations tab."
    locale: "Aloita kyselyn luominen valitsemalla kieli. Jos haluat lisätä käännöksen, vaihda uuteen kieleen ja käännä alkuperäinen teksti täällä tai Käännökset-välilehdessä.",
    // "Sets the location of a detail section in relation to a row. Choose from: \"None\" - no detail section is added; \"Under the row\" - a detail section is placed under each row of the matrix; \"Under the row, display one detail section only\" - a detail section is displayed under a single row only, the remaining sections are collapsed."
    detailPanelMode: "Määrittää tieto-osan sijainnin suhteessa riviin. Valitse seuraavista: \"Ei mitään\" - laajennusta ei lisätä; \"Rivin alla\" - matriisin jokaisen rivin alle sijoitetaan rivilaajennus; \"Näytä rivin alla vain yhden rivin laajennus\" - laajennus näkyy vain yhden rivin alla, loput rivilaajennukset kutistetaan.",
    // "Choose from: \"None\" - image maintains its original size; \"Contain\" - image is resized to fit while maintaining its aspect ratio; \"Cover\" - image fills the entire box while maintaining its aspect ratio; \"Fill\" - image is stretched to fill the box without maintaining its aspect ratio."
    imageFit: "Valitse seuraavista: \"Ei mitään\" - kuva säilyttää alkuperäisen kokonsa; \"Sisältää\" - kuvan kokoa muutetaan sopivaksi säilyttäen samalla kuvasuhteensa; \"Kansi\" - kuva täyttää koko laatikon säilyttäen samalla kuvasuhteensa; \"Täytä\" - kuva venytetään täyttämään laatikko säilyttämättä sen kuvasuhdetta.",
    // "The \"Inherit\" option applies a survey-level setting (\"Disabled\" by default)."
    autoGrow: "Lisää vähitellen syöttökentän korkeutta, kun tietoja syötetään. Ohittaa \"Syöttökentän korkeus (viivoina)\" -asetuksen.",
    // [Auto-translated] "The resize handle (or grip) appears in the corner and can be dragged to alter the size of the input field."
    allowResize: "Koonmuuttokahva (tai kahva) tulee näkyviin kulmaan, ja sitä vetämällä voit muuttaa syöttökentän kokoa.",
    // [Auto-translated] "A time interval in seconds after which the survey auto-advances to the Thank You page."
    timeLimit: "Sekunteina oleva aikaväli, jonka jälkeen kysely etenee automaattisesti Kiitos-sivulle.",
    // [Auto-translated] "A time interval in seconds after which the survey auto-advances to the next page."
    timeLimitPerPage: "Sekunteina ilmaistu aikaväli, jonka jälkeen kysely siirtyy automaattisesti seuraavalle sivulle.",
    // [Auto-translated] "Enable this option to trigger validation when a user focuses on an empty input field and then leaves it without making any changes."
    validateVisitedEmptyFields: "Ota tämä asetus käyttöön, jos haluat käynnistää vahvistuksen, kun käyttäjä keskittyy tyhjään syöttökenttään ja poistuu siitä tekemättä muutoksia.",
    page: {
      // "A page ID that is not visible to respondents."
      name: "Sivun tunnus, joka ei näy vastaajille.",
      // "Type a page subtitle."
      description: "Kirjoita sivun alaotsikko.",
      // "A caption displayed on a navigation button in the progress bar or table of contents (TOC). If you leave this field empty, the navigation button will use the page title or page name. To enable the progress bar or TOC, go to \"Survey\" → \"Navigation\"."
      navigationTitle: "Kuvateksti, joka näkyy edistymispalkin tai sisällysluettelon siirtymispainikkeessa. Jos jätät tämän kentän tyhjäksi, navigointipainike käyttää sivun otsikkoa tai nimeä. Ota edistymispalkki tai sisällysluettelo käyttöön siirtymällä kohtaan \"Kysely\" → \"Navigointi\".",
      // "A time interval in seconds after which the survey auto-advances to the next page. Hides the \"Previous\" navigation button. When set to 0, counts the time spent on the current page."
      timeLimit: "Sekunteina ilmaistu aikaväli, jonka jälkeen kysely siirtyy automaattisesti seuraavalle sivulle.",
      // "Use the magic wand icon to set a conditional rule that determines page visibility."
      visibleIf: "Käytä taikasauvakuvaketta asettaaksesi ehdollisen säännön, joka määrittää sivun näkyvyyden.",
      // [Auto-translated] "Use the magic wand icon to set a conditional rule that disables the read-only mode for the page."
      enableIf: "Määritä taikasauvakuvakkeen avulla ehdollinen sääntö, joka poistaa sivun vain luku -tilan käytöstä.",
      // "Use the magic wand icon to set a conditional rule that prevents survey submission unless at least one nested question has an answer."
      requiredIf: "Määritä taikasauvakuvakkeen avulla ehdollinen sääntö, joka estää kyselyn lähettämisen, ellei vähintään yhteen sisäkkäiseen kysymykseen ole vastausta.",
      // "Applies to all questions within this page. When set to \"Hidden\", it also hides question descriptions. If you want to override this setting, define title alignment rules for individual questions or panels. The \"Inherit\" option applies the survey-level setting (\"Top\" by default)."
      questionTitleLocation: "Koskee kaikkia tämän sivun kysymyksiä. Jos haluat ohittaa tämän asetuksen, määritä otsikon tasaussäännöt yksittäisille kysymyksille tai paneeleille. \"Peri\"-vaihtoehto käyttää kyselytason asetusta (\"Ylin\" oletuksena).",
      // [Auto-translated] "Sets consistent width for question titles when they are aligned to the left of their question boxes. Accepts CSS values (px, %, in, pt, etc.)."
      questionTitleWidth: "Määrittää kysymysten otsikoiden tasaisen leveyden, kun ne tasataan kysymysruutujen vasemmalle puolelle. Hyväksyy CSS-arvot (px, %, in, pt jne.).",
      // "Sets the location of an error message in relation to the question with invalid input. Choose between: \"Top\" - an error text is placed at the top of the question box; \"Bottom\" - an error text is placed at the bottom of the question box. The \"Inherit\" option applies the survey-level setting (\"Top\" by default)."
      questionErrorLocation: "Määrittää virhesanoman sijainnin suhteessa kysymykseen, jonka syöte on virheellinen. Valitse seuraavista: \"Top\" - virheteksti sijoitetaan kysymysruudun yläosaan; \"Pohja\" - virheteksti sijoitetaan kysymysruudun alaosaan. \"Peri\"-vaihtoehto käyttää kyselytason asetusta (\"Ylin\" oletuksena).",
      // "Keeps the original order of questions or randomizes them. The \"Inherit\" option applies the survey-level setting (\"Original\" by default). The effect of this setting is only visible in the Preview tab."
      questionOrder: "Säilyttää kysymysten alkuperäisen järjestyksen tai satunnaistaa ne. \"Peri\" -vaihtoehto käyttää kyselytason asetusta (\"Alkuperäinen\" oletuksena). Tämän asetuksen vaikutus näkyy vain Esikatselu-välilehdessä.",
      // "Sets the visibility of navigation buttons on the page. The \"Inherit\" option applies the survey-level setting, which defaults to \"Visible\"."
      showNavigationButtons: "Määrittää navigointipainikkeiden näkyvyyden sivulla. \"Peri\" -vaihtoehto käyttää kyselytason asetusta, jonka oletusarvo on \"Näkyvä\".",
      // [Auto-translated] "This table lets you configure each grid column on the page. It automatically sets the width percentage for each column based on the maximum number of elements in a row. To customize the grid layout, manually adjust these values and define the title width for all questions in each column."
      gridLayoutColumns: "Tämän taulukon avulla voit määrittää sivun jokaisen ruudukkosarakkeen. Se määrittää automaattisesti kunkin sarakkeen leveysprosentin rivin elementtien enimmäismäärän perusteella. Jos haluat mukauttaa ruudukon asettelua, säädä näitä arvoja manuaalisesti ja määritä otsikon leveys kunkin sarakkeen kaikille kysymyksille."
    },
    // [Auto-translated] "Sets the location of a timer on a page."
    timerLocation: "Määrittää ajastimen sijainnin sivulla.",
    // "Choose from: \"Locked\" - users cannot expand or collapse entries; \"Collapse all\" - all entries start in a collapsed state; \"Expand all\" - all entries start in an expanded state; \"First expanded\" - only the first entry is initially expanded. Applies if \"Entry display mode\" is set to \"List\" and the \"Entry title pattern\" property is specified."
    panelsState: "Valitse seuraavista: \"Lukittu\" - käyttäjät eivät voi laajentaa tai kutistaa paneeleja; \"Kutista kaikki\" - kaikki paneelit alkavat romahtaneessa tilassa; \"Laajenna kaikki\" - kaikki paneelit alkavat laajennetussa tilassa; \"Ensimmäinen laajennettu\" - vain ensimmäistä paneelia laajennetaan aluksi.",
    // [Auto-translated] "Enter a shared property name within the array of objects that contains the image or video file URLs you want to display in the choice list."
    imageLinkName: "Kirjoita jaetun ominaisuuden nimi objektiryhmään, joka sisältää valintaluettelossa näytettävät kuvan tai videotiedoston URL-osoitteet.",
    // "The left value serves as an item ID used in conditional rules, the right value is displayed to respondents."
    choices: "Vasen arvo toimii ehdollisissa säännöissä käytettynä kohteen tunnuksena, oikea arvo näytetään vastaajille.",
    // [Auto-translated] "Type a user-friendly title to display."
    title: "Kirjoita käyttäjäystävällinen otsikko näytettäväksi.",
    // [Auto-translated] "Ensures that users won't complete the survey until files are uploaded."
    waitForUpload: "Varmistaa, että käyttäjät eivät vastaa kyselyyn, ennen kuin tiedostot on ladattu.",
    // [Auto-translated] "Accepts CSS values (px, %, in, pt, etc.)."
    minWidth: "Hyväksyy CSS-arvot (px, %, in, pt jne.).",
    // [Auto-translated] "Accepts CSS values (px, %, in, pt, etc.)."
    maxWidth: "Hyväksyy CSS-arvot (px, %, in, pt jne.).",
    // "Accepts CSS values (px, %, in, pt, etc.)."
    width: "Hyväksyy CSS-arvot (px, %, in, pt jne.).",
    // [Auto-translated] "If you do not set this property, the answer will be stored in a field specified by the Name property."
    valueName: "Jos et määritä tätä ominaisuutta, vastaus tallennetaan Name-ominaisuuden määrittämään kenttään.",
    // [Auto-translated] "A value displayed in HTML questions and in the dynamic titles and descriptions of survey elements when the question value is empty."
    defaultDisplayValue: "Arvo, joka näkyy HTML-kysymyksissä ja kyselyn elementtien dynaamisissa otsikoissa ja kuvauksissa, kun kysymyksen arvo on tyhjä.",
    // [Auto-translated] "In single- and multiple-selection question types, each choice option has an ID and display value. When selected, this setting shows a display value instead of an ID value in HTML questions and dynamic titles and descriptions of survey elements."
    useDisplayValuesInDynamicTexts: "Yksi- ja monivalintakysymystyypeissä kullakin valintavaihtoehdolla on tunnus ja näyttöarvo. Kun tämä asetus on valittuna, se näyttää tunnusarvon sijaan HTML-kysymyksissä ja kyselyelementtien dynaamisissa otsikoissa ja kuvauksissa.",
    // "Choose whether or not to clear question values hidden by conditional logic and when to do it. The \"Inherit\" option applies the survey-level setting (\"Upon survey completion\" by default)."
    clearIfInvisible: "Valitse, poistetaanko ehdollisen logiikan piilottamat kysymysarvot ja milloin se tehdään. \"Peri\"-vaihtoehto käyttää kyselytason asetusta (\"Kyselyn valmistuttua\" oletuksena).",
    // "Choose from: \"All\" - copies all choice options from the selected question; \"Selected\" - dynamically copies only selected choice options; \"Unselected\" - dynamically copies only unselected choice options. The \"None\" and \"Other\" options are copied by default if enabled in the source question."
    choicesFromQuestionMode: "Valitse seuraavista: \"Kaikki\" - kopioi kaikki valintavaihtoehdot valitusta kysymyksestä; \"Valittu\" - kopioi dynaamisesti vain valitut valintavaihtoehdot; \"Ei valittu\" - kopioi dynaamisesti vain valitsemattomat valintavaihtoehdot. Vaihtoehdot \"Ei mitään\" ja \"Muut\" kopioidaan oletusarvoisesti, jos ne on otettu käyttöön lähdekysymyksessä.",
    // [Auto-translated] "In single- and multiple-selection question types, each choice option has an ID and display value. This setting specifies which matrix column or panel question should provide the IDs."
    choiceValuesFromQuestion: "Yksi- ja monivalintakysymystyypeissä kullakin valintavaihtoehdolla on tunnus ja näyttöarvo. Tämä asetus määrittää, mikä matriisisarake tai paneelikysymys antaa tunnukset.",
    // [Auto-translated] "In single- and multiple-selection question types, each choice option has an ID and display value. This setting specifies which matrix column or panel question should provide the display texts."
    choiceTextsFromQuestion: "Yksi- ja monivalintakysymystyypeissä kullakin valintavaihtoehdolla on tunnus ja näyttöarvo. Tämä asetus määrittää, mikä matriisisarake tai paneelikysymys sisältää näyttötekstit.",
    // [Auto-translated] "Select to let respondents add their own choices if the desired option isn't available in the dropdown. Custom choices will only be stored temporarily for the duration of the current browser session."
    allowCustomChoices: "Valitse tämä, jos haluat, että vastaajat voivat lisätä omia vaihtoehtojaan, jos haluttu vaihtoehto ei ole käytettävissä avattavassa valikossa. Mukautetut valinnat tallennetaan vain väliaikaisesti nykyisen selainistunnon ajaksi.",
    // [Auto-translated] "When selected, users can include additional input in a separate comment box."
    showOtherItem: "Kun tämä on valittuna, käyttäjät voivat lisätä lisätietoja erilliseen kommenttiruutuun.",
    // "Displays each special choice option (\"None\", \"Other\", \"Select All\") on a new line, even when using a multiple-column layout."
    separateSpecialChoices: "Näyttää jokaisen erityisen valintavaihtoehdon (\"Ei mitään\", \"Muu\", \"Valitse kaikki\") uudella rivillä, vaikka käytettäisiin monisarakkeista asettelua.",
    // [Auto-translated] "Specify the location within the service dataset where the target array of objects is located. Leave empty if the URL already points to the array."
    path: "Määritä palvelutietojoukon sijainti, jossa objektien kohderyhmä sijaitsee. Jätä tyhjäksi, jos URL-osoite osoittaa jo matriisiin.",
    choicesbyurl: {
      // "Enter a uniform property name within the array of objects whose value will be stored as a response in survey results."
      valueName: " "
    },
    // [Auto-translated] "Enter a uniform property name within the array of objects that contains the values you want to display in the choice list."
    titleName: "Kirjoita objektimatriisiin yhtenäinen ominaisuuden nimi, joka sisältää valintaluettelossa näytettävät arvot.",
    // [Auto-translated] "Select to allow the service to return an empty response or array."
    allowEmptyResponse: "Valitse tämä, jos haluat, että palvelu palauttaa tyhjän vastauksen tai matriisin.",
    // [Auto-translated] "Use the magic wand icon to set a conditional rule that determines the visibility of all choice options."
    choicesVisibleIf: "Taikasauvakuvakkeen avulla voit määrittää ehdollisen säännön, joka määrittää kaikkien valintavaihtoehtojen näkyvyyden.",
    // [Auto-translated] "The left value serves as an item ID used in conditional rules, the right value is displayed to respondents."
    rateValues: "Vasen arvo toimii ehdollisissa säännöissä käytettynä kohteen tunnuksena, oikea arvo näytetään vastaajille.",
    rating: {
      // "\"Auto\" selects between the \"Buttons\" and \"Dropdown\" modes based on the available width. When the width is insufficient to display buttons, the question displays a dropdown."
      displayMode: "\"Auto\" valitsee \"Painikkeet\" ja \"Avattava\" -tilojen välillä käytettävissä olevan leveyden perusteella. Kun leveys ei riitä painikkeiden näyttämiseen, kysymyksessä näkyy avattava valikko."
    },
    // [Auto-translated] "Allows you to connect questions that produce results in different formats. When such questions are linked together using a join identifier, this shared property stores selected question values."
    valuePropertyName: "Voit yhdistää kysymyksiä, jotka tuottavat tuloksia eri muodoissa. Kun tällaiset kysymykset linkitetään toisiinsa liitostunnuksen avulla, tähän jaettuun ominaisuuteen tallennetaan valitut kysymysarvot.",
    // [Auto-translated] "Select if you want to update the drop-down menu contents to match the search query that a user is typing in the input field."
    searchEnabled: "Valitse tämä, jos haluat päivittää avattavan valikon sisällön vastaamaan hakukyselyä, jonka käyttäjä kirjoittaa syöttökenttään.",
    // [Auto-translated] "A value to save in survey results when respondents give a positive answer."
    valueTrue: "Arvo, joka tallennetaan kyselyn tuloksiin, kun vastaajat antavat myönteisen vastauksen.",
    // [Auto-translated] "A value to save in survey results when respondents give a negative answer."
    valueFalse: "Arvo, joka tallennetaan kyselyn tuloksiin, kun vastaajat antavat kielteisen vastauksen.",
    // [Auto-translated] "It's not recommended to disable this option as it overrides the Preview image and makes it hard for a user to understand whether the files have been uploaded."
    showPreview: "Tätä asetusta ei suositella poistamaan käytöstä, koska se ohittaa esikatselukuvan ja vaikeuttaa käyttäjän ymmärtämistä, onko tiedostot ladattu.",
    // [Auto-translated] "Triggers a prompt asking to confirm the file deletion."
    needConfirmRemoveFile: "Käynnistää kehotteen, jossa pyydetään vahvistamaan tiedoston poistaminen.",
    // [Auto-translated] "Enable to rank only selected choices. Users will drag selected items from the choice list to order them within the ranking area."
    selectToRankEnabled: "Ota käyttöön, jos haluat luokitella vain valitut vaihtoehdot. Käyttäjät vetävät valitut kohteet valintaluettelosta järjestääkseen ne sijoitusalueella.",
    // [Auto-translated] "Enter a list of choices that will be suggested to the respondent during input."
    dataList: "Kirjoita luettelo vaihtoehdoista, joita vastaajalle ehdotetaan syötteen aikana.",
    // [Auto-translated] "The setting only resizes the input fields and doesn't affect the width of the question box."
    inputSize: "Asetus muuttaa vain syöttökenttien kokoa eikä vaikuta kysymysruudun leveyteen.",
    // [Auto-translated] "Sets consistent width for all item labels in pixels"
    itemTitleWidth: "Määrittää yhdenmukaisen leveyden kaikille nimikeotsikoille. Hyväksyy CSS-arvot (px, %, in, pt jne.).",
    // "Select how to align input value within the field. The default setting \"Auto\" aligns the input value to the right if currency or numeric masking is applied and to the left if not."
    inputTextAlignment: "Valitse, miten syötteen arvo tasataan kenttään. Oletusasetus \"Auto\" kohdistaa syöttöarvon oikealle, jos valuuttaa tai numeerista peittoa käytetään, ja vasemmalle, jos ei.",
    // [Auto-translated] "Serves as a substitute when the image cannot be displayed on a user's device and for accessibility purposes."
    altText: "Toimii korvikkeena, kun kuvaa ei voida näyttää käyttäjän laitteella, ja esteettömyyssyistä.",
    // "Defines the color of the selected emoji when the Rating icon type is set to \"Smileys\". Choose between: \"Default\" - the selected emoji appears in default survey color; \"Scale\" - the selected emoji inherits color from the rating scale."
    rateColorMode: "Määrittää valitun emojin värin, kun luokituskuvakkeen tyypiksi on asetettu \"Hymiöt\". Valitse seuraavista: \"Oletus\" - valittu emoji näkyy kyselyn oletusvärillä; \"Scale\" - valittu emoji perii värin luokitusasteikolta.",
    expression: {
      // "An expression ID that is not visible to respondents."
      name: "Lausekkeen tunnus, joka ei näy vastaajille.",
      // "Type an expression subtitle."
      description: "Kirjoita lausekkeen alaotsikko.",
      // "An expression can include basic calculations (`{q1_id} + {q2_id}`), conditions (`{age} > 60`), and functions ('iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, etc.)."
      expression: "Lauseke voi sisältää peruslaskutoimituksia ('{q1_id} + {q2_id}'), ehtoja ('{age} > 60') ja funktioita ('iif()', 'today()', 'age()', 'min()', 'max()', 'avg()' jne.)."
    },
    // "Select to store the \"Other\" option value as a separate property in survey results."
    storeOthersAsComment: "Valitse tämä, jos haluat tallentaa Muu-vaihtoehdon arvon erillisenä ominaisuutena kyselyn tuloksiin.",
    // [Auto-translated] "Use {0} as a placeholder for the actual value."
    format: "Käytä {0} todellisen arvon paikkamerkkinä.",
    // [Auto-translated] "Refer to the [accept](https://www.w3schools.com/tags/att_input_accept.asp) attribute description for more information."
    acceptedTypes: "Katso lisätietoja määritteen [accept](https://www.w3schools.com/tags/att_input_accept.asp) kuvauksesta.",
    // [Auto-translated] "Applicable only to Radiogroup and Checkbox cell types."
    columnColCount: "Koskee vain radioryhmä- ja valintaruutusolutyyppejä.",
    // [Auto-translated] "Refer to the [autocomplete](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete) attribute description for more information."
    autocomplete: "Lisätietoja on [autocomplete](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete) -määritteen kuvauksessa.",
    // "Applies when \"File source type\" is \"Local file\" or when camera is unavailable"
    filePlaceholder: "Käytetään, kun \"Lähdetyyppi\" on \"Paikalliset tiedostot\" tai kun kamera ei ole käytettävissä",
    // "Applies when \"File source type\" is \"Camera\"."
    photoPlaceholder: "Käytetään, kun \"Lähdetyyppi\" on \"Kamera\".",
    // "Applies when \"File source type\" is \"Local file or camera\"."
    fileOrPhotoPlaceholder: "Käytetään, kun \"Lähdetyyppi\" on \"Paikalliset tiedostot tai kamera\".",
    // "Arranges choice options in a multi-column layout. When set to 0, the options are displayed in a single line."
    colCount: "Järjestää valintavaihtoehdot monisarakkeiseen asetteluun. Kun asetuksena on 0, asetukset näytetään yhdellä rivillä.",
    masksettings: {
      // "Select if you want to store the question value with an applied mask in survey results."
      saveMaskedValue: "Valitse, haluatko tallentaa kyselyn tuloksiin kysymyksen arvon käyttämällä maskia."
    },
    patternmask: {
      // "The pattern can contain string literals and the following placeholders: `9` - for a digit; `a` - for an upper- or lower-case letter; `#` - for a digit or an upper- or lower-case letter. Use backslash `\\` to escape a character."
      pattern: "Kuvio voi sisältää merkkijonoliteraaleja ja seuraavia paikkamerkkejä: '9' - numerolle; \"a\" - isoille tai pienille kirjaimille; '#' - numerolle tai isolle tai pienelle kirjaimelle. Käytä kenoviivaa '\\' paetaksesi hahmoa."
    },
    datetimemask: {
      // "The pattern can contain separator characters and the following placeholders:<br>`m` - Month number.<br>`mm` - Month number, with leading zero for single-digit values.<br>`d` - Day of the month.<br>`dd` - Day of the month, with leading zero for single-digit values.<br>`yy` - The last two digits of the year.<br>`yyyy` - Four-digit year.<br>`H` - Hours in 24-hour format.<br>`HH` - Hours in 24-hour format, with leading zero for single-digit values.<br>`h` - Hours in 12-hour format.<br>`hh` - Hours in 12-hour format, with leading zero for single-digit values.<br>`MM` - Minutes.<br>`ss` - Seconds.<br>`TT` - 12-hour clock period in upper case (AM/PM).<br>`tt` - 12-hour clock period in lower case (am/pm)."
      pattern: "Kuvio voi sisältää erotinmerkkejä ja seuraavia paikkamerkkejä:<br>'m' - Kuukauden numero.<br>'mm' - Kuukauden numero, jonka alussa on nolla yksinumeroisille arvoille. <br>'d' - kuukauden päivä. <br>'dd' - kuukauden päivä, jonka alussa on nolla yksinumeroisille arvoille. <br>'yy' - Vuoden kaksi viimeistä numeroa. <br>\"yyyy\" - nelinumeroinen vuosi. <br>'H' - Tunnit 24 tunnin muodossa. <br>\"HH\" - Tunnit 24 tunnin muodossa, jonka alussa on nolla yksinumeroisille arvoille. <br>'h' - Tunnit 12 tunnin muodossa. <br>\"hh\" - Tunnit 12 tunnin muodossa, jonka alussa on nolla yksinumeroisille arvoille. <br>'MM' - Pöytäkirja. <br>'ss' - sekuntia. <br>\"TT\" - 12 tunnin kellojakso isoilla kirjaimilla (AM/PM). <br>'TT' - 12 tunnin kellonaika pienillä kirjaimilla (am/pm)."
    },
    numericmask: {
      // "A symbol used to separate the fractional part from the integer part of a displayed number."
      decimalSeparator: "Symboli, jota käytetään erottamaan murto-osa näytetyn luvun kokonaislukuosasta.",
      // "A symbol used to separate the digits of a large number into groups of three."
      thousandsSeparator: "Symboli, jota käytetään erottamaan suuren luvun numerot kolmen ryhmiin.",
      // "Limits how many digits to retain after the decimal point for a displayed number."
      precision: "Rajoittaa näytettävän luvun desimaalipilkun jälkeen säilytettävien numeroiden määrää."
    },
    currencymask: {
      // "One or several symbols to be displayed before the value."
      prefix: "Yksi tai useampi symboli, joka näytetään ennen arvoa.",
      // "One or several symbols to be displayed after the value."
      suffix: "Yksi tai useampi symboli, joka näytetään arvon jälkeen."
    },
    theme: {
      // "This setting applies only to questions outside of a panel."
      isPanelless: "Tämä asetus koskee vain paneelin ulkopuolisia kysymyksiä.",
      // "Sets a supplementary color that highlights key survey elements."
      primaryColor: "Määrittää lisävärin, joka korostaa kyselyn tärkeimmät elementit.",
      // "Adjusts the transparency of panels and question boxes relative to the survey background."
      panelBackgroundTransparency: "Säätää paneelien ja kysymysruutujen läpinäkyvyyttä suhteessa kyselyn taustaan.",
      // "Adjusts the transparency of input elements relative to the survey background."
      questionBackgroundTransparency: "Säätää syöttöelementtien läpinäkyvyyttä suhteessa kyselyn taustaan.",
      // "Sets the corner radius for all rectangular elements. Enable the Advanced Mode if you want to set individual corner radius values for input elements or panels and question boxes."
      cornerRadius: "Asettaa kulmasäteen kaikille suorakaiteen muotoisille elementeille. Ota edistynyt tila käyttöön, jos haluat määrittää syöttöelementtien tai paneelien ja kysymysruutujen yksittäiset kulmasäteen arvot.",
      // "Sets the main background color of the survey."
      "--sjs-general-backcolor-dim": "Määrittää kyselyn päätaustavärin."
    },
    header: {
      // "The \"Same as container\" option auto-adjusts the header content area width to fit into the HTML element the survey is placed in."
      inheritWidthFrom: "Sama kuin säilö -vaihtoehto säätää automaattisesti otsikon sisältöalueen leveyttä sopimaan HTML-elementtiin, johon kysely sijoitetaan.",
      // [Auto-translated] "The width of the header area that contains the survey title and description, measured in pixels."
      textAreaWidth: "Kyselyn otsikon ja kuvauksen sisältävän otsikkoalueen leveys pikseleinä mitattuna.",
      // [Auto-translated] "When enabled, the top of the survey overlays the bottom of the header."
      overlapEnabled: "Kun tämä asetus on käytössä, kyselyn yläosa peittää otsikon alaosan.",
      // [Auto-translated] "When set to 0, the height is calculated automatically to accommodate the header's content."
      mobileHeight: "Kun arvoksi on määritetty 0, korkeus lasketaan automaattisesti otsikon sisällön mukaan."
    },
    // "The \"Same as container\" option auto-adjusts the progress bar area width to fit into the HTML element the survey is placed in."
    progressBarInheritWidthFrom: "Sama kuin säilö -vaihtoehto säätää edistymispalkin alueen leveyttä automaattisesti sopimaan HTML-elementtiin, johon kysely sijoitetaan.",
    // "Used when the 'Survey layout' is set to 'Single input field per page'. In this layout, the matrix is split so that each input field appears on a separate page. Use the {rowIndex} placeholder to insert auto numbering, {rowTitle} or {rowName} to reference the row's title or ID, and {row.columnid} to include the value of a specific matrix column."
    singleInputTitleTemplate: "Käytetään, kun \"Kyselyn asettelu\" -asetuksena on \"Yksi syöttökenttä sivulla\". Tässä asettelussa matriisi on jaettu siten, että jokainen syöttökenttä näkyy erillisellä sivulla. Käytä {rowIndex}-paikkamerkkiä automaattisen numeroinnin lisäämiseen, {rowTitle} tai {rowName} viittaamaan rivin otsikkoon tai tunnukseen ja {row.columnid} sisällyttääksesi tietyn matriisisarakkeen arvon."
  },
  // Properties
  p: {
    title: {
      // "title"
      name: "otsikko",
      // "Leave it empty, if it is the same as 'Name'"
      title: "Jätä se tyhjäksi, jos se on sama kuin 'Nimi'"
    },
    // [Auto-translated] "Allow multiple selection"
    multiSelect: "Salli monivalinta",
    // [Auto-translated] "Show image captions"
    showLabel: "Näytä kuvatekstit",
    // [Auto-translated] "Swap the order of Yes and No"
    swapOrder: "Kyllä- ja Ei-järjestyksen vaihtaminen",
    // [Auto-translated] "Value"
    value: "Arvo",
    // [Auto-translated] "Tab alignment"
    tabAlign: "Sarkaimen tasaus",
    // [Auto-translated] "Source type"
    sourceType: "Lähteen tyyppi",
    // [Auto-translated] "Fit to container"
    fitToContainer: "Sovita konttiin",
    // [Auto-translated] "Set value expression"
    setValueExpression: "Arvolausekkeen määrittäminen",
    // "Description"
    description: "Kuvaus",
    // [Auto-translated] "Logo fit"
    logoFit: "Logon sopivuus",
    // [Auto-translated] "Pages"
    pages: "Sivut",
    // [Auto-translated] "Questions"
    questions: "Kysymyksiä",
    // "Triggers"
    triggers: "Triggerit",
    // [Auto-translated] "Calculated values"
    calculatedValues: "Lasketut arvot",
    // [Auto-translated] "Survey id"
    surveyId: "Kyselyn tunnus",
    // [Auto-translated] "Survey post id"
    surveyPostId: "Kyselyn viestin tunnus",
    // [Auto-translated] "Survey show data saving"
    surveyShowDataSaving: "Kysely näyttää tietojen tallennuksen",
    // [Auto-translated] "Question description location"
    questionDescriptionLocation: "Kysymyksen kuvauksen sijainti",
    // [Auto-translated] "Progress bar type"
    progressBarType: "Edistymispalkin tyyppi",
    // [Auto-translated] "Show TOC"
    showTOC: "Näytä sisällysluettelo",
    // [Auto-translated] "Toc location"
    tocLocation: "Sisällysluettelon sijainti",
    // [Auto-translated] "Question title pattern"
    questionTitlePattern: "Kysymyksen otsikkomalli",
    // [Auto-translated] "Width mode"
    widthMode: "Leveys-tila",
    // [Auto-translated] "Show brand info"
    showBrandInfo: "Näytä brändin tiedot",
    // [Auto-translated] "Use display values in dynamic texts"
    useDisplayValuesInDynamicTexts: "Näyttöarvojen käyttäminen dynaamisissa teksteissä",
    // "Visible if"
    visibleIf: "Näkyvissä jos",
    // [Auto-translated] "Default value expression"
    defaultValueExpression: "Oletusarvon lauseke",
    // "Required if"
    requiredIf: "Vaadittu jos",
    // [Auto-translated] "Reset value if"
    resetValueIf: "Nollaa arvo, jos",
    // [Auto-translated] "Set value if"
    setValueIf: "Aseta arvo, jos",
    // "Validation rules"
    validators: "Validoijat",
    // [Auto-translated] "Bindings"
    bindings: "Siteet",
    // [Auto-translated] "Render as"
    renderAs: "Hahmonna muodossa",
    // [Auto-translated] "Attach original items"
    attachOriginalItems: "Alkuperäisten kohteiden liittäminen",
    // "Choices"
    choices: "Valinnat",
    // "Choices by url"
    choicesByUrl: "Valintoja verkosta",
    // "Currency"
    currency: "Valuutta",
    // [Auto-translated] "Cell hint"
    cellHint: "Solun vihje",
    // [Auto-translated] "Total maximum fraction digits"
    totalMaximumFractionDigits: "Murtolukujen enimmäismäärä yhteensä",
    // [Auto-translated] "Total minimum fraction digits"
    totalMinimumFractionDigits: "Murtolukujen vähimmäismäärä",
    // "Columns"
    columns: "Sarakkeet",
    // [Auto-translated] "Detail elements"
    detailElements: "Yksityiskohtaiset elementit",
    // [Auto-translated] "Allow adaptive actions"
    allowAdaptiveActions: "Salli mukautuvat toiminnot",
    // "Default row value"
    defaultRowValue: "Rivin oletusarvo",
    // [Auto-translated] "Detail panel show on adding"
    detailPanelShowOnAdding: "Laajenna uuden rivin tiedot automaattisesti",
    // [Auto-translated] "Choices lazy load enabled"
    choicesLazyLoadEnabled: "Valinnat laiska kuorma käytössä",
    // [Auto-translated] "Choices lazy load page size"
    choicesLazyLoadPageSize: "Valinnat laiska lataussivun koko",
    // [Auto-translated] "Input field component"
    inputFieldComponent: "Syöttökentän komponentti",
    // [Auto-translated] "Item component"
    itemComponent: "Kohteen osa",
    // [Auto-translated] "Min"
    min: "Min.",
    // [Auto-translated] "Max"
    max: "Maks.",
    // [Auto-translated] "Min value expression"
    minValueExpression: "Pienin arvon lauseke",
    // [Auto-translated] "Max value expression"
    maxValueExpression: "Enimmäisarvon lauseke",
    // [Auto-translated] "Step"
    step: "Askel",
    // [Auto-translated] "Data list"
    dataList: "Tietoluettelo",
    // "Input field width (in characters)"
    inputSize: "Kohteen koko",
    // [Auto-translated] "Item label width (in px)"
    itemTitleWidth: "Kohteen otsikon leveys (px)",
    // [Auto-translated] "Input value alignment"
    inputTextAlignment: "Syöttöarvon tasaus",
    // [Auto-translated] "Elements"
    elements: "Elementit",
    // [Auto-translated] "Content"
    content: "Sisältö",
    // [Auto-translated] "Navigation title"
    navigationTitle: "Navigoinnin otsikko",
    // [Auto-translated] "Navigation description"
    navigationDescription: "Navigoinnin kuvaus",
    // [Auto-translated] "Long tap"
    longTap: "Pitkä napautus",
    // [Auto-translated] "Auto grow"
    autoGrow: "Automaattinen kasvu",
    // [Auto-translated] "Allow resizing"
    allowResize: "Salli koon muuttaminen",
    // [Auto-translated] "Accept carriage return"
    acceptCarriageReturn: "Hyväksy kursorin palautus",
    // [Auto-translated] "Display mode"
    displayMode: "Näyttötila",
    // [Auto-translated] "Rate type"
    rateType: "Hinnan tyyppi",
    // "Label"
    label: "Merkintä",
    // [Auto-translated] "Content mode"
    contentMode: "Sisältö-tila",
    // [Auto-translated] "Image fit"
    imageFit: "Kuva sopii",
    // [Auto-translated] "Alt text"
    altText: "Vaihtoehtoinen teksti",
    // [Auto-translated] "Height"
    height: "Korkeus",
    // [Auto-translated] "Height on smartphones"
    mobileHeight: "Korkeus älypuhelimissa",
    // [Auto-translated] "Pen color"
    penColor: "Kynän väri",
    // [Auto-translated] "Background color"
    backgroundColor: "Taustaväri",
    // [Auto-translated] "Template elements"
    templateElements: "Mallin elementit",
    // [Auto-translated] "Operator"
    operator: "Operaattori",
    // [Auto-translated] "Is variable"
    isVariable: "On vaihteleva",
    // [Auto-translated] "Run expression"
    runExpression: "Suorita lauseke",
    // [Auto-translated] "Show caption"
    showCaption: "Näytä kuvateksti",
    // [Auto-translated] "Icon name"
    iconName: "Kuvakkeen nimi",
    // [Auto-translated] "Icon size"
    iconSize: "Kuvakkeen koko",
    // [Auto-translated] "Precision"
    precision: "Tarkkuus",
    // [Auto-translated] "Matrix drag handle area"
    matrixDragHandleArea: "Matriisin vetokahva-alue",
    // [Auto-translated] "Background image"
    backgroundImage: "Taustakuvan",
    // [Auto-translated] "Background image fit"
    backgroundImageFit: "Taustakuvan sovitus",
    // [Auto-translated] "Background image attachment"
    backgroundImageAttachment: "Taustakuvan liite",
    // [Auto-translated] "Background opacity"
    backgroundOpacity: "Taustan peittävyys",
    // [Auto-translated] "Select to rank enabled"
    selectToRankEnabled: "Valitse sijoitus käytössä",
    // [Auto-translated] "Select to rank areas layout"
    selectToRankAreasLayout: "Valitse alueiden asettelu",
    // [Auto-translated] "Text to show if all options are selected"
    selectToRankEmptyRankedAreaText: "Teksti, joka näyttää, onko kaikki asetukset valittu",
    // [Auto-translated] "Placeholder text for the ranking area"
    selectToRankEmptyUnrankedAreaText: "Sijoitusalueen paikkamerkkiteksti",
    // [Auto-translated] "Allow camera access"
    allowCameraAccess: "Salli kameran käyttö",
    // [Auto-translated] "Scale color mode"
    scaleColorMode: "Skaalaa väriä -tila",
    // [Auto-translated] "Rate color mode"
    rateColorMode: "Arvioi väritila",
    // [Auto-translated] "Copy display value"
    copyDisplayValue: "Kopioi näyttöarvo",
    // [Auto-translated] "Column span"
    effectiveColSpan: "Sarakkeen jänneväli",
    // [Auto-translated] "Progress bar area width"
    progressBarInheritWidthFrom: "Edistymispalkin alueen leveys"
  },
  theme: {
    // "Advanced mode"
    advancedMode: "Edistynyt tila",
    // "Page"
    pageTitle: "Sivun otsikon fontti",
    // "Question box"
    questionTitle: "Kysymyksen otsikon fontti",
    // "Input element"
    editorPanel: "Syötä elementti",
    // [Auto-translated] "Lines"
    lines: "Rivit",
    // "Default"
    primaryDefaultColor: "Oletusväri",
    // "Hover"
    primaryDarkColor: "Tumma väri",
    // "Selected"
    primaryLightColor: "Vaalea väri",
    // "Background color"
    backgroundDimColor: "Taustan himmennysväri",
    // "Corner radius"
    cornerRadius: "Kulman säde",
    // "Default background"
    backcolor: "Taustan väri",
    // [Auto-translated] "Hover background"
    hovercolor: "Vie hiiri taustalle",
    // [Auto-translated] "Border decoration"
    borderDecoration: "Reunusten koristelu",
    // [Auto-translated] "Font color"
    fontColor: "Fontin väri",
    // [Auto-translated] "Background color"
    backgroundColor: "Taustaväri",
    // "Default color"
    primaryForecolor: "Etuosan väri",
    // "Disabled color"
    primaryForecolorLight: "Vaalea etuosan väri",
    // [Auto-translated] "Font"
    font: "Fontti",
    // "Darker"
    borderDefault: "Oletus",
    // "Lighter"
    borderLight: "Ohut",
    // [Auto-translated] "Font family"
    fontFamily: "Fonttiperhe",
    // [Auto-translated] "Regular"
    fontWeightRegular: "Normaali",
    // [Auto-translated] "Heavy"
    fontWeightHeavy: "Voimakas",
    // [Auto-translated] "Semi-bold"
    fontWeightSemiBold: "Puoliksi lihavoitu",
    // [Auto-translated] "Bold"
    fontWeightBold: "Lihavoitu",
    // [Auto-translated] "Color"
    color: "Väri",
    // [Auto-translated] "Placeholder color"
    placeholderColor: "Paikkamerkin väri",
    // [Auto-translated] "Size"
    size: "Koko",
    // [Auto-translated] "Opacity"
    opacity: "Läpikuultavuus",
    // [Auto-translated] "X"
    boxShadowX: "X",
    // [Auto-translated] "Y"
    boxShadowY: "Y",
    // [Auto-translated] "Add Shadow Effect"
    boxShadowAddRule: "Lisää varjotehoste",
    // [Auto-translated] "Blur"
    boxShadowBlur: "Hämärtyä",
    // [Auto-translated] "Spread"
    boxShadowSpread: "Leviäminen",
    // [Auto-translated] "Drop"
    boxShadowDrop: "Pisara",
    // [Auto-translated] "Inner"
    boxShadowInner: "Sisäinen",
    names: {
      // "Default"
      default: "Oletus",
      // [Auto-translated] "Sharp"
      sharp: "Terävä",
      // [Auto-translated] "Borderless"
      borderless: "Reunukseton",
      // [Auto-translated] "Flat"
      flat: "Tasainen",
      // "Plain"
      plain: "Yksinkertainen",
      // [Auto-translated] "Double Border"
      doubleborder: "Kaksinkertainen reunus",
      // [Auto-translated] "Layered"
      layered: "Kerroksellinen",
      // [Auto-translated] "Solid"
      solid: "Kiinteä",
      // [Auto-translated] "3D"
      threedimensional: ".3D",
      // [Auto-translated] "Contrast"
      contrast: "Kontrasti"
    },
    colors: {
      // "Teal"
      teal: "Turkoosi",
      // [Auto-translated] "Blue"
      blue: "Sininen",
      // [Auto-translated] "Purple"
      purple: "Purppura",
      // [Auto-translated] "Orchid"
      orchid: "Orkidea",
      // [Auto-translated] "Tulip"
      tulip: "Tulppaani",
      // [Auto-translated] "Brown"
      brown: "Ruskea",
      // [Auto-translated] "Green"
      green: "Vihreä",
      // [Auto-translated] "Gray"
      gray: "Harmaa"
    }
  },
  creatortheme: {
    // [Auto-translated] "Surface background"
    "--sjs-special-background": "Pinnan tausta",
    // [Auto-translated] "Primary"
    "--sjs-primary-background-500": "Ensisijainen",
    // [Auto-translated] "Secondary"
    "--sjs-secondary-background-500": "Toissijainen",
    // [Auto-translated] "Surface"
    surfaceScale: "Pinta",
    // [Auto-translated] "User interface"
    userInterfaceBaseUnit: "Käyttöliittymä",
    // [Auto-translated] "Font"
    fontScale: "Fontti",
    names: {
      // [Auto-translated] "Survey Creator 2020"
      sc2020: "Kyselyn laatija 2020",
      // [Auto-translated] "Light"
      "default-light": "Valo",
      // [Auto-translated] "Dark"
      "default-dark": "Tumma",
      // [Auto-translated] "Contrast"
      "default-contrast": "Kontrasti"
    }
  }
};
setupLocale({ localeCode: "fi", strings: fiStrings });