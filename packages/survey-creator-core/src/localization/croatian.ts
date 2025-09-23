import { setupLocale } from "survey-creator-core";

export var hrStrings = {
  // survey templates
  survey: {
    // "Edit"
    edit: "Uređivanje",
    // "Watch and learn how to create surveys"
    externalHelpLink: "Gledajte i saznajte kako stvoriti ankete",
    // "https://www.youtube.com/channel/UCH2ru9okIcooNZfpIbyq4qQ?view_as=subscriber"
    externalHelpLinkUrl: "https://www.youtube.com/channel/UCH2ru9okIcooNZfpIbyq4qQ?view_as=subscriber",
    // "Please drop a question here from the Toolbox."
    dropQuestion: "Molimo ispustite pitanje ovdje iz Toolbox.",
    // "Create a rule to customize the flow of the survey."
    addLogicItem: "Izradite pravilo za prilagodbu tijeka ankete.",
    // "Copy"
    copy: "Kopirati",
    // "Duplicate"
    duplicate: "Duplikata",
    // "Add to toolbox"
    addToToolbox: "Dodaj u Toolbox",
    // "Delete Panel"
    deletePanel: "Brisanje ploče",
    // "Delete Question"
    deleteQuestion: "Izbriši pitanje",
    // "Convert to"
    convertTo: "Pretvorite u",
    // "Drag element"
    drag: "Povucite element"
  },
  // Creator tabs
  tabs: {
    // "Preview"
    preview: "Ispitna anketa",
    // "Themes"
    theme: "Teme",
    // "Translations"
    translation: "Prijevod",
    // "Designer"
    designer: "Dizajner ankete",
    // "JSON Editor"
    json: "JSON urednik",
    // "Logic"
    logic: "Logika ankete"
  },
  // Question types
  qt: {
    // "Default"
    default: "Zadani",
    // "Checkboxes"
    checkbox: "Ček",
    // "Long Text"
    comment: "Komentar",
    // "Image Picker"
    imagepicker: "Berač slika",
    // [Auto-translated] "Ranking"
    ranking: "Rangiranje",
    // "Image"
    image: "Slike",
    // "Dropdown"
    dropdown: "Padajući",
    // [Auto-translated] "Multi-Select Dropdown"
    tagbox: "Padajući izbornik s višestrukim odabirom",
    // "File Upload"
    file: "Datoteku",
    // "HTML"
    html: "Html",
    // "Single-Select Matrix"
    matrix: "Matrica (jedan izbor)",
    // "Multi-Select Matrix"
    matrixdropdown: "Matrica (višestruki izbor)",
    // "Dynamic Matrix"
    matrixdynamic: "Matrica (dinamički redovi)",
    // "Multiple Textboxes"
    multipletext: "Više teksta",
    // "Panel"
    panel: "Ploča",
    // "Dynamic Panel"
    paneldynamic: "Ploča (dinamički paneli)",
    // "Radio Button Group"
    radiogroup: "Radiogrupa",
    // "Rating Scale"
    rating: "Ocjena",
    // [Auto-translated] "Slider"
    slider: "Klizač",
    // "Single-Line Input"
    text: "Jedan ulaz",
    // "Yes/No (Boolean)"
    boolean: "Booleova",
    // "Expression (read-only)"
    expression: "Izraz (samo za čitanje)",
    // "Signature"
    signaturepad: "Jastučić za potpis",
    // [Auto-translated] "Button Group"
    buttongroup: "Grupa gumba"
  },
  toolboxCategories: {
    // "General"
    general: "Općenito",
    // "Choice Questions"
    choice: "Pitanja o izboru",
    // "Text Input Questions"
    text: "Pitanja o unosu teksta",
    // "Containers"
    containers: "Kontejnere",
    // "Matrix Questions"
    matrix: "Matrična pitanja",
    // "Misc"
    misc: "Ostalo"
  },
  // Strings in SurveyJS Creator
  ed: {
    // "Default ({0})"
    defaultLocale: "Zadani ({0})",
    // "Survey"
    survey: "Anketa",
    // "Settings"
    settings: "Postavke ankete",
    // "Open settings"
    settingsTooltip: "Otvaranje postavki ankete",
    // [Auto-translated] "Survey Settings"
    surveySettings: "Postavke upitnika",
    // [Auto-translated] "Survey settings"
    surveySettingsTooltip: "Postavke upitnika",
    // [Auto-translated] "Theme Settings"
    themeSettings: "Postavke teme",
    // [Auto-translated] "Theme settings"
    themeSettingsTooltip: "Postavke teme",
    // [Auto-translated] "Creator Settings"
    creatorSettingTitle: "Postavke autora",
    // "Show Panel"
    showPanel: "Pokaži ploču",
    // "Hide Panel"
    hidePanel: "Sakrij ploču",
    // [Auto-translated] "Select previous"
    prevSelected: "Odaberi prethodno",
    // [Auto-translated] "Select next"
    nextSelected: "Odaberi sljedeće",
    // [Auto-translated] "Focus previous"
    prevFocus: "Fokusiraj prethodno",
    // [Auto-translated] "Focus next"
    nextFocus: "Usredotoči se sljedeće",
    // [Auto-translated] "Survey"
    surveyTypeName: "Anketa",
    // [Auto-translated] "Page"
    pageTypeName: "Stranica",
    // [Auto-translated] "Panel"
    panelTypeName: "Panel",
    // [Auto-translated] "Question"
    questionTypeName: "Pitanje",
    // [Auto-translated] "Column"
    columnTypeName: "Stupac",
    // "Add New Page"
    addNewPage: "Dodavanje nove stranice",
    // "Scroll to the Right"
    moveRight: "Pomicanje udesno",
    // "Scroll to the Left"
    moveLeft: "Pomicanje ulijevo",
    // "Delete Page"
    deletePage: "Brisanje stranice",
    // "Edit Page"
    editPage: "Uređivanje stranice",
    // "Edit"
    edit: "Uređivanje",
    // "page"
    newPageName: "stranica",
    // "question"
    newQuestionName: "pitanje",
    // "panel"
    newPanelName: "ploča",
    // "text"
    newTextItemName: "tekst",
    // [Auto-translated] "Default"
    defaultV2Theme: "Propust",
    // [Auto-translated] "Modern"
    modernTheme: "Moderan",
    // [Auto-translated] "Default (legacy)"
    defaultTheme: "Zadano (naslijeđeno)",
    // "Preview Survey Again"
    testSurveyAgain: "Ponovno probna anketa",
    // "Survey width: "
    testSurveyWidth: "Širina ankete: ",
    // "You had to navigate to"
    navigateToMsg: "Morao si navigirati do:",
    // "Save Survey"
    saveSurvey: "Spremi anketu",
    // "Save Survey"
    saveSurveyTooltip: "Spremi anketu",
    // [Auto-translated] "Save Theme"
    saveTheme: "Spremi temu",
    // [Auto-translated] "Save Theme"
    saveThemeTooltip: "Spremi temu",
    // [Auto-translated] "Hide errors"
    jsonHideErrors: "Sakrij pogreške",
    // [Auto-translated] "Show errors"
    jsonShowErrors: "Pokaži pogreške",
    // "Undo"
    undo: "Poništiti",
    // "Redo"
    redo: "Ponoviti",
    // "Undo last change"
    undoTooltip: "Poništi posljednju promjenu",
    // "Redo the change"
    redoTooltip: "Preusmjeti promjenu",
    // [Auto-translated] "Expand"
    expandTooltip: "Proširiti",
    // [Auto-translated] "Collapse"
    collapseTooltip: "Kolaps",
    // "Expand All"
    expandAllTooltip: "Proširi sve",
    // "Collapse All"
    collapseAllTooltip: "Sažmi sve",
    // [Auto-translated] "Zoom In"
    zoomInTooltip: "Zumiranje",
    // [Auto-translated] "Zoom to 100%"
    zoom100Tooltip: "Zumiranje na 100%",
    // [Auto-translated] "Zoom Out"
    zoomOutTooltip: "Smanji",
    // [Auto-translated] "Lock expand/collapse state for questions"
    lockQuestionsTooltip: "Zaključavanje stanja proširenja/sažimanja za pitanja",
    // [Auto-translated] "Show more"
    showMoreChoices: "Pokaži više",
    // [Auto-translated] "Show less"
    showLessChoices: "Pokaži manje",
    // "Copy"
    copy: "Kopirati",
    // "Cut"
    cut: "Izrezati",
    // "Paste"
    paste: "Zalijepite",
    // "Copy selection to clipboard"
    copyTooltip: "Kopiranje odabira u međuspremnik",
    // "Cut selection to clipboard"
    cutTooltip: "Izrežite odabir na međuspremnik",
    // "Paste from clipboard"
    pasteTooltip: "Pasta iz međuspremnika",
    // "Options"
    options: "Mogućnosti",
    // "Generate Valid JSON"
    generateValidJSON: "Generiranje valjanog JSON",
    // "Generate Readable JSON"
    generateReadableJSON: "Generiranje čitljivog JSON",
    // "Toolbox"
    toolbox: "Alatni okvir",
    // "Properties"
    "property-grid": "Svojstva",
    // [Auto-translated] "Search"
    toolboxSearch: "Pretraživanje",
    // [Auto-translated] "Type to search..."
    toolboxFilteredTextPlaceholder: "Upišite za pretraživanje...",
    // [Auto-translated] "No results found"
    toolboxNoResultsFound: "Nisu pronađeni rezultati",
    // [Auto-translated] "Type to search..."
    propertyGridFilteredTextPlaceholder: "Upišite za pretraživanje...",
    // [Auto-translated] "No results found"
    propertyGridNoResultsFound: "Nisu pronađeni rezultati",
    // [Auto-translated] "Start configuring your form"
    propertyGridPlaceholderTitle: "Počnite konfigurirati svoj obrazac",
    // [Auto-translated] "Click any category icon to explore survey settings. Additional settings will become available once you add a survey element to the design surface."
    propertyGridPlaceholderDescription: "Kliknite bilo koju ikonu kategorije da biste istražili postavke upitnika. Dodatne postavke postat će dostupne nakon što dodate element upitnika na površinu dizajna.",
    // "Please correct JSON."
    correctJSON: "Ispravite JSON.",
    // "Survey Results "
    surveyResults: "Rezultat ankete: ",
    // "As Table"
    surveyResultsTable: "Kao tablica",
    // "As JSON"
    surveyResultsJson: "Kao JSON",
    // "Question Title"
    resultsTitle: "Naslov pitanja",
    // "Question Name"
    resultsName: "Naziv pitanja",
    // "Answer Value"
    resultsValue: "Vrijednost odgovora",
    // "Display Value"
    resultsDisplayValue: "Vrijednost prikaza",
    // "Modified"
    modified: "Izmjena",
    // "Saving"
    saving: "Spremanje",
    // "Saved"
    saved: "Spremiti",
    // "Error"
    propertyEditorError: "Pogreška:",
    // "Error! Editor content is not saved."
    saveError: "Pogreška! Sadržaj urednika nije spremljen.",
    // [Auto-translated] "Language Settings"
    translationPropertyGridTitle: "Jezične postavke",
    // [Auto-translated] "Theme Settings"
    themePropertyGridTitle: "Postavke teme",
    // [Auto-translated] "Add Language"
    addLanguageTooltip: "Dodavanje jezika",
    // [Auto-translated] "Languages"
    translationLanguages: "Jezici",
    // [Auto-translated] "Are you certain you wish to delete all strings for this language?"
    translationDeleteLanguage: "Jeste li sigurni da želite izbrisati sve nizove za ovaj jezik?",
    // "Select language to translate"
    translationAddLanguage: "Odaberite jezik za prevođenje",
    // "All Strings"
    translationShowAllStrings: "Pokažite sve žice",
    // [Auto-translated] "Used Strings Only"
    translationShowUsedStringsOnly: "Samo korišteni nizovi",
    // "All Pages"
    translationShowAllPages: "Pokažite sve stranice",
    // "No strings to translate. Please change the filter."
    translationNoStrings: "Nema žica za prevođenje. Promijenite filtar.",
    // "Export to CSV"
    translationExportToSCVButton: "Izvoz u CSV",
    // "Import from CSV"
    translationImportFromSCVButton: "Uvoz iz CSV",
    // [Auto-translated] "Auto-translate All"
    translateUsigAI: "Automatski prevedi sve",
    // [Auto-translated] "Translate from: "
    translateUsigAIFrom: "Prevedi iz: ",
    // [Auto-translated] "Untranslated strings"
    translationDialogTitle: "Neprevedeni nizovi",
    // "Merge {0} with default locale"
    translationMergeLocaleWithDefault: "Spajanje {0} sa zadanim lokalomwith default locale.",
    // [Auto-translated] "Translation..."
    translationPlaceHolder: "Prevođenje...",
    // [Auto-translated] "Source: "
    translationSource: "Izvor: ",
    // [Auto-translated] "Target: "
    translationTarget: "Cilj: ",
    // [Auto-translated] "YouTube links are not supported."
    translationYouTubeNotSupported: "YouTube veze nisu podržane.",
    // [Auto-translated] "Export"
    themeExportButton: "Izvoz",
    // [Auto-translated] "Import"
    themeImportButton: "Uvoz",
    // [Auto-translated] "Export"
    surveyJsonExportButton: "Izvoz",
    // [Auto-translated] "Import"
    surveyJsonImportButton: "Uvoz",
    // [Auto-translated] "Copy to clipboard"
    surveyJsonCopyButton: "Kopiraj u međuspremnik",
    // [Auto-translated] "Reset theme settings to default"
    themeResetButton: "Vraćanje zadanih postavki teme na zadano",
    // [Auto-translated] "Do you really want to reset the theme? All your customizations will be lost."
    themeResetConfirmation: "Želite li zaista resetirati temu? Sve prilagodbe bit će izgubljene.",
    // [Auto-translated] "Yes, reset the theme"
    themeResetConfirmationOk: "Da, resetirajte temu",
    // "Bold"
    bold: "podebljano",
    // "Italic"
    italic: "kurziv",
    // "Underline"
    underline: "podcrtavanje",
    // "Add Question"
    addNewQuestion: "Dodaj pitanje",
    // "Select page..."
    selectPage: "Odaberite stranicu...",
    // [Auto-translated] "Choices are copied from"
    carryForwardChoicesCopied: "Odabiri se kopiraju iz",
    // [Auto-translated] "Choices are loaded from a web service."
    choicesLoadedFromWebText: "Izbori se učitavaju s web-usluge.",
    // [Auto-translated] "Go to settings"
    choicesLoadedFromWebLinkText: "Idi na postavke",
    // [Auto-translated] "Preview of loaded choice options"
    choicesLoadedFromWebPreviewTitle: "Pretpregled učitanih mogućnosti izbora",
    // [Auto-translated] "HTML content will be here."
    htmlPlaceHolder: "HTML sadržaj će biti ovdje.",
    // [Auto-translated] "Drop a question from the toolbox here."
    panelPlaceHolder: "Ovdje ispustite pitanje iz kutije s alatima.",
    // [Auto-translated] "The survey is empty. Drag an element from the toolbox or click the button below."
    surveyPlaceHolder: "Anketa je prazna. Povucite element iz alatnog okvira ili kliknite donji gumb.",
    // [Auto-translated] "The page is empty. Drag an element from the toolbox or click the button below."
    pagePlaceHolder: "Stranica je prazna. Povucite element iz alatnog okvira ili kliknite donji gumb.",
    // [Auto-translated] "Drag and drop an image here or click the button below and choose an image to upload"
    imagePlaceHolder: "Povucite i ispustite sliku ovdje ili kliknite donji gumb i odaberite sliku koju želite prenijeti",
    // "Click the \"Add Question\" button below to start creating your form."
    surveyPlaceHolderMobile: "Kliknite donji gumb \"Dodaj pitanje\" da biste započeli stvaranje obrasca.",
    // [Auto-translated] "Your form is empty"
    surveyPlaceholderTitle: "Obrazac je prazan",
    // [Auto-translated] "Your form is empty"
    surveyPlaceholderTitleMobile: "Obrazac je prazan",
    // [Auto-translated] "Drag an element from the toolbox or click the button below."
    surveyPlaceholderDescription: "Povucite element iz okvira s alatima ili kliknite gumb ispod.",
    // [Auto-translated] "Drag an element from the toolbox or click the button below."
    surveyPlaceholderDescriptionMobile: "Povucite element iz okvira s alatima ili kliknite gumb ispod.",
    // [Auto-translated] "No preview"
    previewPlaceholderTitle: "Nema pregleda",
    // [Auto-translated] "No preview"
    previewPlaceholderTitleMobile: "Nema pregleda",
    // [Auto-translated] "The survey doesn't contain any visible elements."
    previewPlaceholderDescription: "Anketa ne sadrži vidljive elemente.",
    // [Auto-translated] "The survey doesn't contain any visible elements."
    previewPlaceholderDescriptionMobile: "Anketa ne sadrži vidljive elemente.",
    // [Auto-translated] "No strings to translate"
    translationsPlaceholderTitle: "Nema obaveza za prevođenje",
    // [Auto-translated] "No strings to translate"
    translationsPlaceholderTitleMobile: "Nema obaveza za prevođenje",
    // [Auto-translated] "Add elements to your form or change the strings filter in the toolbar."
    translationsPlaceholderDescription: "Dodajte elemente u obrazac ili promijenite filtar nizova na alatnoj traci.",
    // [Auto-translated] "Add elements to your form or change the strings filter in the toolbar."
    translationsPlaceholderDescriptionMobile: "Dodajte elemente u obrazac ili promijenite filtar nizova na alatnoj traci.",
    // "Click the \"Add Question\" button below to add a new element to the page."
    pagePlaceHolderMobile: "Kliknite donji gumb \"Dodaj pitanje\" da biste na stranicu dodali novi element.",
    // "Click the \"Add Question\" button below to add a new element to the panel."
    panelPlaceHolderMobile: "Kliknite donji gumb \"Dodaj pitanje\" da biste na ploču dodali novi element.",
    // [Auto-translated] "Click the button below and choose an image to upload"
    imagePlaceHolderMobile: "Kliknite donji gumb i odaberite sliku koju želite prenijeti",
    // [Auto-translated] "Choose Image"
    imageChooseImage: "Odabir slike",
    // [Auto-translated] "Add {0}"
    addNewTypeQuestion: "Dodaj {0}", // {0} is localizable question type
    // [Auto-translated] "[LOGO]"
    chooseLogoPlaceholder: "[LOGO]",
    // [Auto-translated] "Item "
    choices_Item: "Stavka ",
    // [Auto-translated] "Select a file"
    selectFile: "Odabir datoteke",
    // [Auto-translated] "Remove the file"
    removeFile: "Uklanjanje datoteke",
    lg: {
      // [Auto-translated] "Add New Rule"
      addNewItem: "Dodaj novo pravilo",
      // [Auto-translated] "Create a rule to customize the flow of the survey."
      empty_tab: "Stvorite pravilo za prilagodbu tijeka upitnika.",
      // [Auto-translated] "No logical rules"
      logicPlaceholderTitle: "Nema logičkih pravila",
      // [Auto-translated] "No logical rules"
      logicPlaceholderTitleMobile: "Nema logičkih pravila",
      // [Auto-translated] "Create a rule to customize the flow of the survey."
      logicPlaceholderDescription: "Stvorite pravilo za prilagodbu tijeka upitnika.",
      // [Auto-translated] "Create a rule to customize the flow of the survey."
      logicPlaceholderDescriptionMobile: "Stvorite pravilo za prilagodbu tijeka upitnika.",
      // "Show/hide page"
      page_visibilityName: "Vidljivost stranice",
      // [Auto-translated] "Enable/disable page"
      page_enableName: "Omogući/onemogući stranicu",
      // [Auto-translated] "Make page required"
      page_requireName: "Učini stranicu obaveznom",
      // "Show/hide panel"
      panel_visibilityName: "Vidljivost panela",
      // "Enable/disable panel"
      panel_enableName: "Omogući/onemogući panel",
      // [Auto-translated] "Make panel required"
      panel_requireName: "Potrebna je ploča za izradu",
      // "Show/hide question"
      question_visibilityName: "Vidljivost pitanja",
      // "Enable/disable question"
      question_enableName: "Pitanje omogućuje/onesposobljava",
      // "Make question required"
      question_requireName: "Pitanje nije obavezno",
      // [Auto-translated] "Reset question value"
      question_resetValueName: "Vrati izvornu vrijednost pitanja",
      // [Auto-translated] "Set question value"
      question_setValueName: "Postavljanje vrijednosti pitanja",
      // [Auto-translated] "Show/hide column"
      column_visibilityName: "Prikaži/sakrij stupac",
      // [Auto-translated] "Enable/disable column"
      column_enableName: "Stupac Omogući/onemogući",
      // [Auto-translated] "Make column required"
      column_requireName: "Učini stupac obaveznim",
      // [Auto-translated] "Reset column value"
      column_resetValueName: "Vraćanje izvorne vrijednosti stupca",
      // [Auto-translated] "Set column value"
      column_setValueName: "Postavljanje vrijednosti stupca",
      // "Complete survey"
      trigger_completeName: "Potpuna anketa",
      // "Set answer"
      trigger_setvalueName: "Postavite vrijednost pitanja",
      // "Copy answer"
      trigger_copyvalueName: "Kopiranje vrijednosti pitanja",
      // "Skip to question"
      trigger_skipName: "Prijeđite na pitanje",
      // "Run expression"
      trigger_runExpressionName: "Pokretanje prilagođenog izraza",
      // "Set \"Thank You\" page markup"
      completedHtmlOnConditionName: "Prilagođeni 'Thank you page' tekst",
      // "Make the page visible when the logical expression evaluates to true. Otherwise, keep the page invisible."
      page_visibilityDescription: "Učinite stranicu vidljivom kada se logička ekspresija vrati istinitom. Inače neka bude nevidljivo.",
      // "Make the page visible when the logical expression evaluates to true. Otherwise, keep the panel invisible."
      panel_visibilityDescription: "Učinite ploču vidljivom kada se logička ekspresija vrati istinitom. Inače ga držati nevidljivim.",
      // "Make the panel and all elements inside it enabled when the logical expression evaluates to true. Otherwise, keep them disabled."
      panel_enableDescription: "Učinite ploču i sve elemente unutar nje omogućite kada se logička ekspresija vrati istinita. Inače ih držite onesposobljenima.",
      // "Make the question visible when the logical expression evaluates to true. Otherwise, keep the question invisible."
      question_visibilityDescription: "Učinite pitanje vidljivim kada se logička ekspresija vrati istinita. Inače ga držati nevidljivim.",
      // "Make the question enabled when the logical expression evaluates to true. Otherwise, keep the question disabled."
      question_enableDescription: "Omogućite pitanje kada se logička ekspresija vrati istinita. Inače ga držati onemogućen.",
      // "Question becomes required when the logical expression evaluates to true."
      question_requireDescription: "Pitanje postaje potrebno kada se logička ekspresija vrati istinita.",
      // "When the logical expression evaluates to true, the survey ends, and the respondent sees the \"Thank you\" page."
      trigger_completeDescription: "Kada se logička ekspresija vrati istinita, anketa postaje dovršena i krajnji korisnik vidi 'Thank you page'.",
      // "When question values used in the logical expression are changed, and the expression evaluates to true, the specified value is assigned to the selected question."
      trigger_setvalueDescription: "Kada se vrijednosti pitanja, koje se koriste u logičkom izrazu, mijenjaju i logička ekspresija se vraća istinita, tada se vrijednost postavlja na odabrano pitanje.",
      // "When question values used in the logical expression are changed, and the expression evaluates to true, the value of the selected question is copied to another question."
      trigger_copyvalueDescription: "Kada se vrijednosti pitanja, koje se koriste u logičkoj ekspresiji, mijenjaju i logička ekspresija se vraća istinita, tada se vrijednost jednog odabranog pitanja kopira na drugo odabrano pitanje.",
      // "When the logical expression evaluates to true, the survey focuses/jumps to the selected question."
      trigger_skipDescription: "Kada se logička ekspresija vrati istinita, anketa preskače na / fokusira odabrano pitanje.",
      // "When the logical expression evaluates to true, the survey evaluates another expression. Optionally, the result of the latter expression can be assigned as a value to the selected question"
      trigger_runExpressionDescription: "Kada se logička ekspresija vrati istinita, tada se izvodi prilagođeni izraz. Taj rezultat izraza možete neobavezno postaviti u odabrano pitanje.",
      // "If the logical expression evaluates to true, the \"Thank You\" page displays the specified content."
      completedHtmlOnConditionDescription: "Ako se logička ekspresija vrati istinita, zadani tekst za 'Thank you page' mijenja se u zadani.",
      // "When expression: '{0}' returns true"
      itemExpressionText: "Kada se izraz '{0}' vrati istinit", // {0} - the expression
      // [Auto-translated] "New rule"
      itemEmptyExpressionText: "Novo pravilo",
      // "make page {0} visible"
      page_visibilityText: "Učinite stranicu {0} vidljivom", // {0} page name
      // "make panel {0} visible"
      panel_visibilityText: "Učinite ploču {0} vidljivom", // {0} panel name
      // "make panel {0} enable"
      panel_enableText: "Omogući panel x {0}", // {0} panel name
      // "make question {0} visible"
      question_visibilityText: "Učinite pitanje {0} vidljivim", // {0} question name
      // "make question {0} enable"
      question_enableText: "Omogući pitanje {0}", // {0} question name
      // "make question {0} required"
      question_requireText: "Neka pitanje {0} bude potrebno", // {0} question name
      // [Auto-translated] "reset value for question: {0}"
      question_resetValueText: "Vrati izvornu vrijednost za pitanje: {0}", // {0} question name.
      // [Auto-translated] "assign value: {1} to question: {0}"
      question_setValueText: "Dodijeli vrijednost: {1} pitanje: {0}", // {0} question name and {1} setValueExpression
      // [Auto-translated] "make column {0} of question {1} visible"
      column_visibilityText: "učiniti stupac {0} pitanja vidljivim {1}", // {0} column name, {1} question name
      // [Auto-translated] "make column {0} of question {1} enable"
      column_enableText: "{1} omogućivanje stupca {0} pitanja", // {0} column name, {1} question name
      // [Auto-translated] "make column {0} of question {1} required"
      column_requireText: "Učinite stupac {0} pitanja {1} potrebnim", // {0} column name, {1} question name
      // [Auto-translated] "reset cell value for column: {0}"
      column_resetValueText: "Vrati izvornu vrijednost ćelije za stupac: {0}", // {0} column name
      // [Auto-translated] "assign cell value: {1} to column: {0}"
      column_setValueText: "Dodijeli vrijednost ćelije: {1} stupcu: {0}", // {0} column name and {1} setValueExpression
      // [Auto-translated] "An expression whose result will be assigned to the target question."
      setValueExpressionPlaceholder: "Izraz čiji će rezultat biti dodijeljen ciljnom pitanju.",
      // "survey becomes completed"
      trigger_completeText: "Anketa se dovrša",
      // "set into question: {0} value {1}"
      trigger_setvalueText: "Postavljeno u pitanje: {0} vrijednost {1}", // {0} question name, {1} setValue
      // [Auto-translated] "clear question value: {0}"
      trigger_setvalueEmptyText: "Očisti vrijednost pitanja: {0}", // {0} question name
      // "copy into question: {0} value from question {1}"
      trigger_copyvalueText: "Kopirajte u pitanje: {0} vrijednost od pitanja {1}", // {0} and {1} question names
      // "survey skip to the question {0}"
      trigger_skipText: "Anketa preskače na pitanje {0}", // {0} question name
      // "run expression: '{0}'"
      trigger_runExpressionText1: "Pokretanje izraza: '{0}'", // {0} the expression
      // " and set its result into question: {0}"
      trigger_runExpressionText2: " i dovela u pitanje svoj rezultat: {0}", // {0} question name
      // "show custom text for the \"Thank You\" page."
      completedHtmlOnConditionText: "Prikazati prilagođeni tekst za 'Thank you page'.",
      // [Auto-translated] "All Questions"
      showAllQuestions: "Sva pitanja",
      // [Auto-translated] "All Action Types"
      showAllActionTypes: "Sve vrste akcija",
      // "Condition(s)"
      conditions: "Stanje/Stanja",
      // "Action(s)"
      actions: "Akcije",
      // "Define condition(s)"
      expressionEditorTitle: "Definiranje uvjeta",
      // "Define action(s)"
      actionsEditorTitle: "Definiranje radnji",
      // "Delete Action"
      deleteAction: "Brisanje radnje",
      // "Add Action"
      addNewAction: "Dodavanje nove akcije",
      // "Select action..."
      selectedActionCaption: "Odaberite radnju za dodavanje...",
      // "The logic expression is empty or invalid. Please correct it."
      expressionInvalid: "Logička ekspresija je prazna ili nevažeća. Molim vas, ispravite to.",
      // "Please add at least one action."
      noActionError: "Molim vas, dodajte barem jednu akciju.",
      // "Please fix issues in your action(s)."
      actionInvalid: "Molimo vas da riješite probleme u svojoj akciji.",
      // [Auto-translated] "Logical rules are incomplete"
      uncompletedRule_title: "Logička pravila nisu potpuna",
      // [Auto-translated] "You have not completed some of the logical rules. If you leave the tab now, the changes will be lost. Do you still want to leave the tab without completing the changes?"
      uncompletedRule_text: "Niste dovršili neka logička pravila. Ako sada napustite karticu, promjene će se izgubiti. Želite li ipak napustiti karticu bez dovršetka promjena?",
      // [Auto-translated] "Yes"
      uncompletedRule_apply: "Da",
      // [Auto-translated] "No, I want to complete the rules"
      uncompletedRule_cancel: "Ne, želim ispuniti pravila."
    }
  },
  // Property Editors
  pe: {
    panel: {
      // [Auto-translated] "Panel name"
      name: "Naziv ploče",
      // [Auto-translated] "Panel title"
      title: "Naslov ploče",
      // [Auto-translated] "Panel description"
      description: "Opis ploče",
      // [Auto-translated] "Make the panel visible if"
      visibleIf: "Učini ploču vidljivom ako",
      // [Auto-translated] "Make the panel required if"
      requiredIf: "Učinite ploču potrebnom ako",
      // [Auto-translated] "Question order within the panel"
      questionOrder: "Redoslijed pitanja unutar ploče",
      // [Auto-translated] "Move the panel to page"
      page: "Premještanje ploče na stranicu",
      // [Auto-translated] "Display the panel on a new line"
      startWithNewLine: "Prikaz ploče na novom retku",
      // [Auto-translated] "Panel collapse state"
      state: "Stanje urušavanja ploče",
      // [Auto-translated] "Inline panel width"
      width: "Ugrađena širina ploče",
      // [Auto-translated] "Minimum panel width"
      minWidth: "Minimalna širina ploče",
      // [Auto-translated] "Maximum panel width"
      maxWidth: "Maksimalna širina panela",
      // [Auto-translated] "Number this panel"
      showNumber: "Numerirajte ovu ploču"
    },
    panellayoutcolumn: {
      // [Auto-translated] "Effective width, %"
      effectiveWidth: "Efektivna širina, %",
      // [Auto-translated] "Question title width, px"
      questionTitleWidth: "Širina naslova pitanja, px"
    },
    paneldynamic: {
      // [Auto-translated] "Panel name"
      name: "Naziv ploče",
      // [Auto-translated] "Panel title"
      title: "Naslov ploče",
      // [Auto-translated] "Panel description"
      description: "Opis ploče",
      // [Auto-translated] "Entry display mode"
      displayMode: "Način prikaza unosa",
      // [Auto-translated] "Make the panel visible if"
      visibleIf: "Učini ploču vidljivom ako",
      // [Auto-translated] "Make the panel required if"
      requiredIf: "Učinite ploču potrebnom ako",
      // [Auto-translated] "Move the panel to page"
      page: "Premještanje ploče na stranicu",
      // [Auto-translated] "Display the panel on a new line"
      startWithNewLine: "Prikaz ploče na novom retku",
      // [Auto-translated] "Panel collapse state"
      state: "Stanje sažimanja ploče",
      // [Auto-translated] "Inline panel width"
      width: "Širina umetnute ploče",
      // [Auto-translated] "Minimum panel width"
      minWidth: "Minimalna širina ploče",
      // [Auto-translated] "Maximum panel width"
      maxWidth: "Maksimalna širina ploče",
      // [Auto-translated] "Confirm entry removal"
      confirmDelete: "Potvrdite uklanjanje unosa",
      // [Auto-translated] "Entry description pattern"
      templateDescription: "Uzorak opisa unosa",
      // [Auto-translated] "Entry title pattern"
      templateTitle: "Uzorak naslova unosa",
      // [Auto-translated] "Empty panel text"
      noEntriesText: "Prazan tekst na ploči",
      // [Auto-translated] "Tab title pattern"
      templateTabTitle: "Uzorak naslova kartice",
      // [Auto-translated] "Tab title placeholder"
      tabTitlePlaceholder: "Rezervirano mjesto naslova tabulatora",
      // [Auto-translated] "Make an individual entry visible if"
      templateVisibleIf: "Učinite pojedinačni unos vidljivim ako",
      // [Auto-translated] "Number the panel"
      showNumber: "Numerirajte ploču",
      // [Auto-translated] "Panel title alignment"
      titleLocation: "Poravnanje naslova ploče",
      // [Auto-translated] "Panel description alignment"
      descriptionLocation: "Poravnanje opisa ploče",
      // [Auto-translated] "Question title alignment"
      templateQuestionTitleLocation: "Poravnanje naslova pitanja",
      // [Auto-translated] "Question title width"
      templateQuestionTitleWidth: "Širina naslova pitanja",
      // [Auto-translated] "Error message alignment"
      templateErrorLocation: "Poravnanje poruke o pogrešci",
      // [Auto-translated] "New entry location"
      newPanelPosition: "Nova lokacija ulaska",
      // [Auto-translated] "Show the progress bar"
      showRangeInProgress: "Prikaz trake napretka",
      // [Auto-translated] "Prevent duplicate responses in the following question"
      keyName: "Sprječavanje dupliciranih odgovora u sljedećem pitanju"
    },
    question: {
      // [Auto-translated] "Question name"
      name: "Naziv pitanja",
      // [Auto-translated] "Question title"
      title: "Naslov pitanja",
      // [Auto-translated] "Question description"
      description: "Opis pitanja",
      // [Auto-translated] "Show the title and description"
      showTitle: "Pokažite naslov i opis",
      // [Auto-translated] "Make the question visible if"
      visibleIf: "Učinite pitanje vidljivim ako",
      // [Auto-translated] "Make the question required if"
      requiredIf: "Neka pitanje bude potrebno ako:",
      // [Auto-translated] "Move the question to page"
      page: "Premještanje pitanja na stranicu",
      // [Auto-translated] "Question box collapse state"
      state: "Stanje sažimanja okvira pitanja",
      // [Auto-translated] "Number this question"
      showNumber: "Brojite ovo pitanje",
      // [Auto-translated] "Question title alignment"
      titleLocation: "Poravnanje naslova pitanja",
      // [Auto-translated] "Question description alignment"
      descriptionLocation: "Poravnanje opisa pitanja",
      // [Auto-translated] "Error message alignment"
      errorLocation: "Poravnanje poruke o pogrešci",
      // [Auto-translated] "Increase the inner indent"
      indent: "Povećajte unutarnju uvlaku",
      // [Auto-translated] "Inline question width"
      width: "Širina umetnutog pitanja",
      // [Auto-translated] "Minimum question width"
      minWidth: "Minimalna širina pitanja",
      // [Auto-translated] "Maximum question width"
      maxWidth: "Maksimalna širina pitanja",
      // [Auto-translated] "Update input field value"
      textUpdateMode: "Ažuriranje vrijednosti polja za unos"
    },
    signaturepad: {
      // [Auto-translated] "Signature area width"
      signatureWidth: "Širina područja potpisa",
      // [Auto-translated] "Signature area height"
      signatureHeight: "Visina područja potpisa",
      // [Auto-translated] "Auto-scale the signature area"
      signatureAutoScaleEnabled: "Automatsko mijenjanje područja potpisa",
      // [Auto-translated] "Show a placeholder within signature area"
      showPlaceholder: "Prikaz rezerviranog mjesta unutar područja za potpis",
      // [Auto-translated] "Placeholder text"
      placeholder: "Tekst rezerviranog mjesta",
      // [Auto-translated] "Placeholder text in read-only or preview mode"
      placeholderReadOnly: "Tekst rezerviranog mjesta u načinu samo za čitanje ili pretpregledu",
      // [Auto-translated] "Show the Clear button within signature area"
      allowClear: "Prikaz gumba Očisti unutar područja potpisa",
      // [Auto-translated] "Minimum stroke width"
      penMinWidth: "Minimalna širina hoda",
      // [Auto-translated] "Maximum stroke width"
      penMaxWidth: "Maksimalna širina hoda",
      // [Auto-translated] "Stroke color"
      penColor: "Boja poteza"
    },
    comment: {
      // [Auto-translated] "Input field height (in lines)"
      rows: "Visina polja unosa (u recima)"
    },
    // "Question numbering"
    showQuestionNumbers: "Prikazate brojeve pitanja",
    // "Question indexing type"
    questionStartIndex: "Indeks pokretanja pitanja (1, 2 ili 'A', 'a')",
    expression: {
      // [Auto-translated] "Expression name"
      name: "Naziv izraza",
      // [Auto-translated] "Expression title"
      title: "Naslov izraza",
      // [Auto-translated] "Expression description"
      description: "Opis izraza",
      // [Auto-translated] "Expression"
      expression: "Izraz"
    },
    trigger: {
      // [Auto-translated] "Expression"
      expression: "Izraz"
    },
    calculatedvalue: {
      // [Auto-translated] "Expression"
      expression: "Izraz"
    },
    // survey templates
    survey: {
      // [Auto-translated] "Survey title"
      title: "Naziv ankete",
      // [Auto-translated] "Survey description"
      description: "Opis upitnika",
      // [Auto-translated] "Make the survey read-only"
      readOnly: "Neka anketa bude samo za čitanje"
    },
    page: {
      // [Auto-translated] "Page name"
      name: "Naziv stranice",
      // [Auto-translated] "Page title"
      title: "Naslov stranice",
      // [Auto-translated] "Page description"
      description: "Opis stranice",
      // [Auto-translated] "Make the page visible if"
      visibleIf: "Učini stranicu vidljivom ako",
      // [Auto-translated] "Make the page required if"
      requiredIf: "Učini stranicu potrebnom ako",
      // [Auto-translated] "Time limit to complete the page"
      timeLimit: "Vremensko ograničenje za dovršetak stranice",
      // [Auto-translated] "Question order on the page"
      questionOrder: "Redoslijed pitanja na stranici"
    },
    matrixdropdowncolumn: {
      // [Auto-translated] "Column name"
      name: "Naziv stupca",
      // [Auto-translated] "Column title"
      title: "Naslov stupca",
      // [Auto-translated] "Prevent duplicate responses"
      isUnique: "Sprječavanje dvostrukih odgovora",
      // [Auto-translated] "Column width"
      width: "Širina stupca",
      // [Auto-translated] "Minimum column width"
      minWidth: "Minimalna širina stupca",
      // [Auto-translated] "Input field height (in lines)"
      rows: "Visina polja unosa (u recima)",
      // [Auto-translated] "Make the column visible if"
      visibleIf: "Učini stupac vidljivim ako",
      // [Auto-translated] "Make the column required if"
      requiredIf: "Učinite stupac potrebnim ako",
      // [Auto-translated] "Each option in a separate column"
      showInMultipleColumns: "Svaka mogućnost u zasebnom stupcu"
    },
    matrixcolumn: {
      // [Auto-translated] "Clear others in the same row"
      isExclusive: "Brisanje ostalih u istom retku"
    },
    multipletextitem: {
      // [Auto-translated] "Name"
      name: "Ime",
      // [Auto-translated] "Title"
      title: "Naslov"
    },
    masksettings: {
      // [Auto-translated] "Save masked value in survey results"
      saveMaskedValue: "Spremanje maskirane vrijednosti u rezultate upitnika"
    },
    patternmask: {
      // [Auto-translated] "Value pattern"
      pattern: "Uzorak vrijednosti"
    },
    datetimemask: {
      // [Auto-translated] "Minimum value"
      min: "Minimalna vrijednost",
      // [Auto-translated] "Maximum value"
      max: "Maksimalna vrijednost"
    },
    numericmask: {
      // [Auto-translated] "Allow negative values"
      allowNegativeValues: "Dopusti negativne vrijednosti",
      // [Auto-translated] "Thousands separator"
      thousandsSeparator: "Razdjelnik tisućica",
      // [Auto-translated] "Decimal separator"
      decimalSeparator: "Decimalni razdjelnik",
      // [Auto-translated] "Value precision"
      precision: "Preciznost vrijednosti",
      // [Auto-translated] "Minimum value"
      min: "Minimalna vrijednost",
      // [Auto-translated] "Maximum value"
      max: "Maksimalna vrijednost"
    },
    currencymask: {
      // [Auto-translated] "Currency prefix"
      prefix: "Prefiks valute",
      // [Auto-translated] "Currency suffix"
      suffix: "Sufiks valute"
    },
    // [Auto-translated] "Clear others when selected"
    isExclusive: "Brisanje drugih kada je odabrano",
    // [Auto-translated] "Require user to enter a comment"
    isCommentRequired: "Zahtijevanje od korisnika da unese komentar",
    // "Display area height"
    imageHeight: "Visina slike",
    // "Display area width"
    imageWidth: "Širina slike",
    // "Join identifier"
    valueName: "Naziv vrijednosti",
    // [Auto-translated] "Default display value for dynamic texts"
    defaultDisplayValue: "Zadana vrijednost prikaza za dinamičke tekstove",
    // [Auto-translated] "Label alignment"
    rateDescriptionLocation: "Poravnanje natpisa",
    // [Auto-translated] "Input field width (in characters)"
    size: "Širina polja za unos (u znakovima)",
    // [Auto-translated] "Cell error message alignment"
    cellErrorLocation: "Poravnanje poruke o pogrešci ćelije",
    // [Auto-translated] "Enabled"
    enabled: "Omogućen",
    // [Auto-translated] "Disabled"
    disabled: "Onemogućen",
    // [Auto-translated] "Inherit"
    inherit: "Naslijediti",
    // "Apply"
    apply: "Primijeniti",
    // "OK"
    ok: "OK",
    // "Save"
    save: "Spremiti",
    // [Auto-translated] "Clear"
    clear: "Jasan",
    // "Save"
    saveTooltip: "Spremiti",
    // "Cancel"
    cancel: "Otkazati",
    // [Auto-translated] "Set"
    set: "Skup",
    // "Reset"
    reset: "Resetirati",
    // [Auto-translated] "Change"
    change: "Mijenjati",
    // "Refresh"
    refresh: "Osvježi",
    // [Auto-translated] "Close"
    close: "Blizak",
    // "Delete"
    delete: "Izbrisati",
    // "Add"
    add: "Dodati",
    // "Add New"
    addNew: "Dodaj novo",
    // "Click to add an item..."
    addItem: "Kliknite da biste dodali stavku...",
    // [Auto-translated] "Click to remove the item..."
    removeItem: "Kliknite da biste uklonili stavku...",
    // [Auto-translated] "Drag the item"
    dragItem: "Vucite stavku",
    // "Other"
    addOther: "Drugih",
    // "Select All"
    addSelectAll: "Odaberite sve",
    // "None"
    addNone: "Nitko",
    // "Remove All"
    removeAll: "Uklonite sve",
    // "Edit"
    edit: "Uređivanje",
    // "Return without saving"
    back: "Povratak bez uštede",
    // "Return without saving"
    backTooltip: "Povratak bez uštede",
    // "Save and return"
    saveAndBack: "Spremanje i vraćanje",
    // "Save and return"
    saveAndBackTooltip: "Spremanje i vraćanje",
    // [Auto-translated] "Done"
    doneEditing: "Učinjeno",
    // "Edit Choices"
    editChoices: "Uređivanje izbora",
    // "Show Choices"
    showChoices: "Pokažite izbore",
    // "Move"
    move: "Premjestiti",
    // "<empty>"
    empty: "<empty>",
    // [Auto-translated] "Value is empty"
    emptyValue: "Vrijednost je prazna",
    // "Manual Entry"
    fastEntry: "Brzi unos",
    // [Auto-translated] "Value '{0}' is not unique"
    fastEntryNonUniqueError: "Vrijednost '{0}' nije jedinstvena",
    // [Auto-translated] "Please limit the number of items from {0} to {1}"
    fastEntryChoicesCountError: "Ograničite broj stavki s {0} na {1}",
    // [Auto-translated] "Please enter at least {0} items"
    fastEntryChoicesMinCountError: "Unesite najmanje {0} stavki",
    // [Auto-translated] "Enter the list of choice options and their IDs in the following format:\n\nid|option\n\nA choice option ID is not visible to respondents and can be used in conditional rules."
    fastEntryPlaceholder: "Unesite popis opcija izbora i njihove ID-ove u sljedećem formatu:\n\nid|opcija\n\nID opcije izbora nije vidljiv ispitanicima i može se koristiti u uvjetnim pravilima.",
    // "Form Entry"
    formEntry: "Unos obrasca",
    // "Test the service"
    testService: "Testirajte uslugu",
    // "Please select the element"
    itemSelectorEmpty: "Odaberite element",
    // "Please select the action"
    conditionActionEmpty: "Odaberite radnju",
    // "Select a question..."
    conditionSelectQuestion: "Odaberite pitanje...",
    // "Select a page..."
    conditionSelectPage: "Odaberite stranicu...",
    // "Select a panel..."
    conditionSelectPanel: "Odabir ploče...",
    // "Please enter/select the value"
    conditionValueQuestionTitle: "Unesite/odaberite vrijednost",
    // "Press ctrl+space to get expression completion hint"
    aceEditorHelp: "Pritisnite ctrl + prostor kako biste dobili savjet o završetku ekspresije",
    // "Current row"
    aceEditorRowTitle: "Trenutni redk",
    // "Current panel"
    aceEditorPanelTitle: "Trenutna ploča",
    // "For more details please check the documentation"
    showMore: "Više detalja potražite u dokumentaciji",
    // "Available questions"
    assistantTitle: "Dostupna pitanja:",
    // "There is should be at least one column or row"
    cellsEmptyRowsColumns: "Trebao bi postojati barem jedan stupac ili red",
    // [Auto-translated] "Review before submit"
    showPreviewBeforeComplete: "Pregledajte prije slanja",
    // [Auto-translated] "Enabled by a condition"
    overridingPropertyPrefix: "Omogućeno uvjetom",
    // [Auto-translated] "Reset"
    resetToDefaultCaption: "Brisanje",
    // "Please enter a value"
    propertyIsEmpty: "Unesite vrijednost",
    // "Please enter a unique value"
    propertyIsNoUnique: "Unesite jedinstvenu vrijednost",
    // "Please enter a unique name"
    propertyNameIsNotUnique: "Unesite jedinstveno ime",
    // "Do not use reserved words: \"item\", \"choice\", \"panel\", \"row\"."
    propertyNameIsIncorrect: "Nemojte koristiti rezervirane riječi: \"stavka\", \"izbor\", \"ploča\", \"red\".",
    // "You don't have any items yet"
    listIsEmpty: "Dodavanje nove stavke",
    // [Auto-translated] "You don't have any choices yet"
    "listIsEmpty@choices": "Još nemate izbora",
    // [Auto-translated] "You don't have any columns yet"
    "listIsEmpty@columns": "Još nemate kolumne",
    // [Auto-translated] "You don't have layout columns yet"
    "listIsEmpty@gridLayoutColumns": "Još nemate stupce izgleda",
    // [Auto-translated] "You don't have any rows yet"
    "listIsEmpty@rows": "Još nemate redaka",
    // [Auto-translated] "You don't have any validation rules yet"
    "listIsEmpty@validators": "Još nemate pravila provjere valjanosti",
    // [Auto-translated] "You don't have any custom variables yet"
    "listIsEmpty@calculatedValues": "Još nemate prilagođene varijable",
    // [Auto-translated] "You don't have any triggers yet"
    "listIsEmpty@triggers": "Još nemaš okidača",
    // [Auto-translated] "You don't have any links yet"
    "listIsEmpty@navigateToUrlOnCondition": "Još nemate poveznice",
    // [Auto-translated] "You don't have any pages yet"
    "listIsEmpty@pages": "Još nemate stranice",
    // [Auto-translated] "Add new choice"
    "addNew@choices": "Dodavanje novog izbora",
    // [Auto-translated] "Add new column"
    "addNew@columns": "Dodaj novi stupac",
    // [Auto-translated] "Add new row"
    "addNew@rows": "Dodaj novi redak",
    // [Auto-translated] "Add new rule"
    "addNew@validators": "Dodaj novo pravilo",
    // [Auto-translated] "Add new variable"
    "addNew@calculatedValues": "Dodaj novu varijablu",
    // [Auto-translated] "Add new trigger"
    "addNew@triggers": "Dodaj novi okidač",
    // [Auto-translated] "Add new URL"
    "addNew@navigateToUrlOnCondition": "Dodaj novi URL",
    // [Auto-translated] "Add new page"
    "addNew@pages": "Dodaj novu stranicu",
    // "Expression is empty"
    expressionIsEmpty: "Izraz je prazan",
    // "Value"
    value: "Vrijednost",
    // "Text"
    text: "tekst",
    // "Row ID"
    rowid: "ID redaka",
    // "Image or video file URL"
    imageLink: "Veza slike",
    // "Edit column: {0}"
    columnEdit: "Uređivanje stupca: {0}",
    // "Edit item: {0}"
    itemEdit: "Uređivanje stavke: {0}",
    // "URL"
    url: "Url",
    // "Path to data"
    path: "Put",
    choicesbyurl: {
      // [Auto-translated] "Web service URL"
      url: "URL web servisa",
      // [Auto-translated] "Get value to store from the following property"
      valueName: "Dobivanje vrijednosti za pohranu iz sljedećeg svojstva"
    },
    // "Get value to display from the following property"
    titleName: "Naziv naslova",
    // [Auto-translated] "Get file URLs from the following property"
    imageLinkName: "Dohvaćanje URL-ova datoteka iz sljedećeg entiteta",
    // [Auto-translated] "Accept empty response"
    allowEmptyResponse: "Prihvati prazan odgovor",
    // "Title"
    titlePlaceholder: "Ulazni naslov ovdje",
    // "Survey Title"
    surveyTitlePlaceholder: "Naslov ulazne ankete ovdje",
    // "Page {num}"
    pageTitlePlaceholder: "Naslov ulazne stranice ovdje",
    // [Auto-translated] "Start Page"
    startPageTitlePlaceholder: "Početna stranica",
    // "Description"
    descriptionPlaceholder: "Unesite opis",
    // "Description"
    surveyDescriptionPlaceholder: "Unesite opis ankete",
    // "Description"
    pageDescriptionPlaceholder: "Unesite opis stranice",
    // [Auto-translated] "Wrap choices"
    textWrapEnabled: "Prelamanje izbora",
    // "Enable the \"Other\" option"
    showOtherItem: "Ima i drugu stavku",
    // "Rename the \"Other\" option"
    otherText: "Tekst druge stavke",
    // "Enable the \"None\" option"
    showNoneItem: "Nema stavku",
    // [Auto-translated] "Enable the \"Refuse to Answer\" option"
    showRefuseItem: "Omogućite opciju \"Odbij odgovor\"",
    // [Auto-translated] "Enable the \"Don't Know\" option"
    showDontKnowItem: "Omogućite opciju \"Ne znam\"",
    // "Rename the \"None\" option"
    noneText: "Nijedan tekst stavke",
    // "Enable the \"Select All\" option"
    showSelectAllItem: "Sadrži odaberite sve stavke",
    // "Rename the \"Select All\" option"
    selectAllText: "Odaberite sve stavke tekst",
    // "Minimum value for auto-generated items"
    choicesMin: "Minimalna vrijednost za automatski generirane stavke",
    // "Maximum value for auto-generated items"
    choicesMax: "Maksimalna vrijednost za automatski generirane stavke",
    // "Step value for auto-generated items"
    choicesStep: "Razlika između automatski generiranih stavki",
    // "Name"
    name: "Ime",
    // "Title"
    title: "Naslov",
    // "Cell input type"
    cellType: "Vrsta ćelije",
    // "Column count"
    colCount: "Broj stupaca",
    // "Choice order"
    choicesOrder: "Odaberite redoslijed izbora",
    // [Auto-translated] "Allow custom choices"
    allowCustomChoices: "Dopusti prilagođene izbore",
    // "Visible"
    visible: "Je li vidljivo?",
    // "Required"
    isRequired: "Je potrebno?",
    // [Auto-translated] "Mark as required"
    markRequired: "Označi kao obavezno",
    // [Auto-translated] "Remove the required mark"
    removeRequiredMark: "Uklanjanje potrebne oznake",
    // "Require an answer in each row"
    eachRowRequired: "Zahtijevati odgovor za sve redove",
    // [Auto-translated] "Prevent duplicate responses in rows"
    eachRowUnique: "Sprječavanje dvostrukih odgovora u recima",
    // "Error message for required questions"
    requiredErrorText: "Potreban tekst pogreške",
    // "Display the question on a new line"
    startWithNewLine: "Počinje li s novom linijom?",
    // "Rows"
    rows: "Broj redaka",
    // "Columns"
    cols: "Broj stupaca",
    // "Placeholder text within input field"
    placeholder: "Držač ulaznog mjesta",
    // "Show preview area"
    showPreview: "Prikaz područja pretpregleda",
    // "Store file content in JSON result as text"
    storeDataAsText: "Pohranite sadržaj datoteke u rezultat JSON kao tekst",
    // "Maximum file size (in bytes)"
    maxSize: "Maksimalna veličina datoteke u bytes",
    // "Row count"
    rowCount: "Broj redaka",
    // "Columns layout"
    columnLayout: "Raspored stupaca",
    // "\"Add Row\" button alignment"
    addRowButtonLocation: "Dodavanje lokacije gumba redaka",
    // [Auto-translated] "Transpose rows to columns"
    transposeData: "Transponiranje redaka u stupce",
    // "\"Add Row\" button text"
    addRowText: "Dodavanje teksta gumba redak",
    // "\"Remove Row\" button text"
    removeRowText: "Uklanjanje teksta gumba redaka",
    // [Auto-translated] "Input field title pattern"
    singleInputTitleTemplate: "Uzorak naslova polja za unos",
    // "Minimum rating value"
    rateMin: "Minimalna stopa",
    // "Maximum rating value"
    rateMax: "Maksimalna stopa",
    // "Step value"
    rateStep: "Korak stope",
    // "Minimum value label"
    minRateDescription: "Opis minimalne stope",
    // "Maximum value label"
    maxRateDescription: "Opis maksimalne stope",
    // "Input type"
    inputType: "Vrsta unosa",
    // "Option placeholder"
    optionsCaption: "Opis opcija",
    // "Default Answer"
    defaultValue: "Zadana vrijednost",
    // "Default texts"
    cellsDefaultRow: "Zadani tekstovi ćelija",
    // "Edit survey settings"
    surveyEditorTitle: "Uređivanje postavki ankete",
    // "Edit: {0}"
    qEditorTitle: "Uređivanje: {0}",
    // "Maximum character limit"
    maxLength: "Maksimalna duljina",
    // "Build"
    buildExpression: "Graditi",
    // "Edit"
    editExpression: "Uređivanje",
    // [Auto-translated] "and"
    and: "i",
    // [Auto-translated] "or"
    or: "ili",
    // "Remove"
    remove: "Ukloniti",
    // "Add Condition"
    addCondition: "Dodavanje stanja",
    // [Auto-translated] "Select a question to start configuring conditions."
    emptyLogicPopupMessage: "Odaberite pitanje da biste započeli konfiguriranje uvjeta.",
    // [Auto-translated] "If"
    if: "Ako",
    // [Auto-translated] "then"
    then: "zatim",
    // [Auto-translated] "Target question"
    setToName: "Ciljno pitanje",
    // [Auto-translated] "Question to copy answer from"
    fromName: "Pitanje iz kojeg treba kopirati odgovor",
    // [Auto-translated] "Question to skip to"
    gotoName: "Pitanje na koje treba preskočiti",
    // [Auto-translated] "Rule is incorrect"
    ruleIsNotSet: "Pravilo nije ispravno",
    // [Auto-translated] "Add to the survey results"
    includeIntoResult: "Dodaj u rezultate ankete",
    // "Make the title and description visible"
    showTitle: "Pokaži/sakrij naslov",
    // "Expand/collapse title"
    expandCollapseTitle: "Naslov proširenja/kolapsa",
    // "Select a survey language"
    locale: "Zadani jezik",
    // "Select device type"
    simulator: "Odaberite uređaj",
    // "Switch to landscape orientation"
    landscapeOrientation: "Krajolik",
    // [Auto-translated] "Switch to portrait orientation"
    portraitOrientation: "Prebacivanje na okomito usmjerenje",
    // "Clear hidden question values"
    clearInvisibleValues: "Jasne nevidljive vrijednosti",
    // "Limit to one response"
    cookieName: "Naziv kolačića (onemogućiti anketu dva puta lokalno)",
    // "Auto-save survey progress on page change"
    partialSendEnabled: "Pošaljite rezultate ankete na sljedeću stranicu",
    // "Save the \"Other\" option value as a separate property"
    storeOthersAsComment: "Pohranite vrijednost 'others' u zasebnom polju",
    // "Show page titles"
    showPageTitles: "Prikazate naslove stranica",
    // "Show page numbers"
    showPageNumbers: "Prikazate brojeve stranica",
    // "\"Previous Page\" button text"
    pagePrevText: "Tekst prethodnog gumba stranice",
    // "\"Next Page\" button text"
    pageNextText: "Tekst sljedećeg gumba stranice",
    // "\"Complete Survey\" button text"
    completeText: "Complete button text",
    // "\"Review Answers\" button text"
    previewText: "Tekst gumba za pretpregled",
    // "\"Edit Answer\" button text"
    editText: "Uređivanje teksta gumba",
    // "\"Start Survey\" button text"
    startSurveyText: "Tekst gumba za pokretanje",
    // "Show navigation buttons"
    showNavigationButtons: "Prikakanje navigacijskih tipki (zadana navigacija)",
    // [Auto-translated] "Navigation buttons alignment"
    navigationButtonsLocation: "Poravnanje navigacijskih gumba",
    // "Show the \"Previous Page\" button"
    showPrevButton: "Prikagnite prethodni gumb (korisnik se može vratiti na prethodnu stranicu)",
    // "First page is a start page"
    firstPageIsStartPage: "Prva stranica u anketi je početna stranica.",
    // "Show the \"Thank You\" page"
    showCompletePage: "Prikagušite dovršenu stranicu na kraju (completedHtml)",
    // "Auto-advance to the next page"
    autoAdvanceEnabled: "Kada odgovarate na sva pitanja, idite automatski na sljedeću stranicu",
    // [Auto-translated] "Complete the survey automatically"
    autoAdvanceAllowComplete: "Automatsko ispunjavanje upitnika",
    // "Show the progress bar"
    showProgressBar: "Pokaži traku napretka",
    // [Auto-translated] "Progress bar alignment"
    progressBarLocation: "Poravnanje trake napretka",
    // "Question title alignment"
    questionTitleLocation: "Lokacija naslova pitanja",
    // "Question title width"
    questionTitleWidth: "Širina naslova pitanja",
    // "Required symbol(s)"
    requiredMark: "Pitanje je zahtijevalo simbole",
    // "Question title template, default is: '{no}. {require} {title}'"
    questionTitleTemplate: "Predložak naslova pitanja, zadano je: '{no}. {require} {title}'",
    // "Error message alignment"
    questionErrorLocation: "Mjesto pogreške u pitanju",
    // "Focus first question on a new page"
    autoFocusFirstQuestion: "Usredotočite prvo pitanje na promjenu stranice",
    // "Question order"
    questionOrder: "Redoslijed elemenata na stranici",
    // "Time limit to complete the survey"
    timeLimit: "Maksimalno vrijeme za dovršaje ankete",
    // "Time limit to complete one page"
    timeLimitPerPage: "Maksimalno vrijeme za dovršanje stranice u anketi",
    // [Auto-translated] "Use a timer"
    showTimer: "Koristite mjerač vremena",
    // "Timer alignment"
    timerLocation: "Pokaži ploču timera",
    // "Timer mode"
    timerInfoMode: "Prikazate način rada timer panela",
    // "Panel display mode"
    renderMode: "Način prikaza",
    // "Enable entry addition"
    allowAddPanel: "Dopustite dodavanje ploče",
    // "Enable entry removal"
    allowRemovePanel: "Dopustite uklanjanje ploče",
    // "\"Add Entry\" button text"
    addPanelText: "Dodavanje teksta panela",
    // "\"Remove Entry\" button text"
    removePanelText: "Removing panel text",
    // "Show all elements on one page"
    isSinglePage: "Uklanjanje teksta ploče",
    // "HTML markup"
    html: "Html",
    // [Auto-translated] "Answer"
    setValue: "Odgovor",
    // [Auto-translated] "Storage format"
    dataFormat: "Format pohrane",
    // [Auto-translated] "Enable row addition"
    allowAddRows: "Omogućivanje dodavanja redaka",
    // [Auto-translated] "Enable row removal"
    allowRemoveRows: "Omogućivanje uklanjanja redaka",
    // [Auto-translated] "Enable row reordering"
    allowRowReorder: "Omogućivanje promjene redoslijeda redaka",
    // [Auto-translated] "Does not apply if you specify the exact display area width or height."
    responsiveImageSizeHelp: "Ne primjenjuje se ako odredite točnu širinu ili visinu područja prikaza.",
    // [Auto-translated] "Minimum display area width"
    minImageWidth: "Minimalna širina područja prikaza",
    // [Auto-translated] "Maximum display area width"
    maxImageWidth: "Maksimalna širina područja prikaza",
    // [Auto-translated] "Minimum display area height"
    minImageHeight: "Minimalna visina površine prikaza",
    // [Auto-translated] "Maximum display area height"
    maxImageHeight: "Maksimalna visina površine prikaza",
    // "Minimum value"
    minValue: "Minimalna vrijednost",
    // "Maximum value"
    maxValue: "Maksimalna vrijednost",
    // [Auto-translated] "Case insensitive"
    caseInsensitive: "Bez osjetljivosti na velika i mala slova",
    // "Minimum length (in characters)"
    minLength: "Minimalna duljina",
    // "Allow digits"
    allowDigits: "Dopustite znamenke",
    // "Minimum count"
    minCount: "Minimalno brojanje",
    // "Maximum count"
    maxCount: "Maksimalni broj",
    // "Regular expression"
    regex: "Redoviti izraz",
    surveyvalidator: {
      // [Auto-translated] "Validation message"
      text: "Poruka o provjeri valjanosti",
      // [Auto-translated] "Validation expression"
      expression: "Izraz za provjeru valjanosti",
      // [Auto-translated] "Notification type"
      notificationType: "Vrsta obavijesti"
    },
    // "Total row header"
    totalText: "Ukupan tekst",
    // "Aggregation method"
    totalType: "Ukupna vrsta",
    // "Total value expression"
    totalExpression: "Ukupni izraz",
    // "Total value display format"
    totalDisplayStyle: "Ukupan stil prikaza",
    // "Currency"
    totalCurrency: "Ukupna valuta",
    // "Formatted string"
    totalFormat: "Ukupan format",
    // [Auto-translated] "Survey logo"
    logo: "Logotip ankete",
    // [Auto-translated] "Survey layout"
    questionsOnPageMode: "Izgled ankete",
    // [Auto-translated] "Restrict answer length"
    maxTextLength: "Ograničite duljinu odgovora",
    // [Auto-translated] "Restrict comment length"
    maxCommentLength: "Ograničite duljinu komentara",
    // [Auto-translated] "Comment area height (in lines)"
    commentAreaRows: "Visina područja komentara (u recima)",
    // [Auto-translated] "Auto-expand text areas"
    autoGrowComment: "Automatsko proširivanje područja teksta",
    // [Auto-translated] "Allow users to resize text areas"
    allowResizeComment: "Dopusti korisnicima promjenu veličine tekstnih područja",
    // "Update input field values"
    textUpdateMode: "Ažuriranje vrijednosti tekstnog pitanja",
    // [Auto-translated] "Input mask type"
    maskType: "Vrsta maske za unos",
    // [Auto-translated] "Set focus on the first invalid answer"
    autoFocusFirstError: "Postavljanje fokusa na prvi odgovor koji nije valjan",
    // [Auto-translated] "Run validation"
    checkErrorsMode: "Pokreni provjeru valjanosti",
    // [Auto-translated] "Validate empty fields on lost focus"
    validateVisitedEmptyFields: "Provjera valjanosti praznih polja pri izgubljenom fokusu",
    // [Auto-translated] "Redirect to an external link after submission"
    navigateToUrl: "Preusmjeravanje na vanjsku poveznicu nakon slanja",
    // [Auto-translated] "Dynamic external link"
    navigateToUrlOnCondition: "Dinamička vanjska poveznica",
    // [Auto-translated] "Markup to show if the user already filled out this survey"
    completedBeforeHtml: "Oznaka koja pokazuje je li korisnik već ispunio ovu anketu",
    // [Auto-translated] "\"Thank You\" page markup"
    completedHtml: "Oznaka stranice \"Hvala\"",
    // [Auto-translated] "Dynamic \"Thank You\" page markup"
    completedHtmlOnCondition: "Dinamička oznaka stranice \"Zahvala\"",
    // [Auto-translated] "Markup to show while survey model is loading"
    loadingHtml: "Oznaka za prikaz tijekom učitavanja modela upitnika",
    // [Auto-translated] "Comment area text"
    commentText: "Tekst područja komentara",
    // [Auto-translated] "Autocomplete type"
    autocomplete: "Vrsta samodovršetka",
    // "Label for \"True\""
    labelTrue: "Oznaka \"True\"",
    // "Label for \"False\""
    labelFalse: "Oznaka \"False\"",
    // "Show the Clear button"
    allowClear: "Prikaz gumba Očisti",
    // [Auto-translated] "Search Mode"
    searchMode: "Način pretraživanja",
    // [Auto-translated] "Display format"
    displayStyle: "Format prikaza",
    // [Auto-translated] "Formatted string"
    format: "Oblikovani niz",
    // [Auto-translated] "Maximum fractional digits"
    maximumFractionDigits: "Maksimalne djelomične znamenke",
    // [Auto-translated] "Minimum fractional digits"
    minimumFractionDigits: "Minimalne djelomične znamenke",
    // [Auto-translated] "Display grouping separators"
    useGrouping: "Prikaži razdjelnike grupiranja",
    // [Auto-translated] "Enable multiple file upload"
    allowMultiple: "Omogućivanje prijenosa više datoteka",
    // [Auto-translated] "Preview uploaded images"
    allowImagesPreview: "Pregled prenesenih slika",
    // [Auto-translated] "Accepted file types"
    acceptedTypes: "Prihvaćene vrste datoteka",
    // [Auto-translated] "Wait for upload to complete"
    waitForUpload: "Pričekajte da se prijenos dovrši",
    // [Auto-translated] "Confirm file deletion"
    needConfirmRemoveFile: "Potvrda brisanja datoteke",
    // [Auto-translated] "Row details alignment"
    detailPanelMode: "Poravnanje pojedinosti retka",
    // [Auto-translated] "Minimum row count"
    minRowCount: "Najmanji broj redaka",
    // [Auto-translated] "Maximum row count"
    maxRowCount: "Maksimalan broj redaka",
    // "Confirm row removal"
    confirmDelete: "Potvrda brisanja retka",
    // [Auto-translated] "Confirmation message"
    confirmDeleteText: "Potvrdna poruka",
    // [Auto-translated] "Initial number of entries"
    panelCount: "Početni broj unosa",
    // [Auto-translated] "Minimum number of entries"
    minPanelCount: "Najmanji broj unosa",
    // [Auto-translated] "Maximum number of entries"
    maxPanelCount: "Maksimalan broj unosa",
    // [Auto-translated] "Initial entry state"
    panelsState: "Početno stanje unosa",
    // [Auto-translated] "\"Previous Entry\" button text"
    prevPanelText: "Tekst gumba \"Prethodni unos\"",
    // [Auto-translated] "\"Next Entry\" button text"
    nextPanelText: "Tekst gumba \"Sljedeći unos\"",
    // [Auto-translated] "\"Remove Entry\" button alignment"
    removePanelButtonLocation: "Poravnanje gumba \"Ukloni unos\"",
    // [Auto-translated] "Hide the question if it has no rows"
    hideIfRowsEmpty: "Sakrij pitanje ako nema redaka",
    // [Auto-translated] "Hide columns if there are no rows"
    hideColumnsIfEmpty: "Sakrij stupce ako nema redaka",
    // [Auto-translated] "Custom rating values"
    rateValues: "Prilagođene vrijednosti ocjene",
    // [Auto-translated] "Rating count"
    rateCount: "Broj ocjena",
    // [Auto-translated] "Rating configuration"
    autoGenerate: "Konfiguracija ocjene",
    slider: {
      // [Auto-translated] "Min value"
      min: "Minimalna vrijednost",
      // [Auto-translated] "Max value"
      max: "Maksimalna vrijednost",
      // [Auto-translated] "Step value"
      step: "Vrijednost koraka",
      // [Auto-translated] "Show scale labels"
      showLabels: "Prikaz oznaka ljestvice",
      // [Auto-translated] "Show tooltips"
      tooltipVisibilityPG: "Prikaži opise alata",
      // [Auto-translated] "Allow thumb crossing"
      allowSwap: "Dopustite križanje palca",
      // [Auto-translated] "Number of auto-generated labels"
      labelCount: "Broj automatski generiranih naljepnica",
      // [Auto-translated] "Min value expression"
      minValueExpression: "Izraz minimalne vrijednosti",
      // [Auto-translated] "Max value expression"
      maxValueExpression: "Izraz maksimalne vrijednosti",
      // [Auto-translated] "Scale labels configuration"
      autoGenerate: "Konfiguracija naljepnica vage",
      // [Auto-translated] "Slider type"
      sliderType: "Vrsta klizača",
      // [Auto-translated] "Min range length"
      minRangeLength: "Minimalna duljina raspona",
      // [Auto-translated] "Max range length"
      maxRangeLength: "Maksimalna duljina dometa",
      // [Auto-translated] "Custom labels"
      customLabels: "Prilagođene naljepnice",
      // [Auto-translated] "Label format"
      labelFormat: "Format naljepnice",
      // [Auto-translated] "Tooltip format"
      tooltipFormat: "Format opisa alata"
    },
    file: {
      // [Auto-translated] "Image height"
      imageHeight: "Visina slike",
      // [Auto-translated] "Image width"
      imageWidth: "Širina slike"
    },
    // [Auto-translated] "Hide the question if it has no choices"
    hideIfChoicesEmpty: "Sakrij pitanje ako nema izbora",
    // "Minimum width"
    minWidth: "Minimalna širina (u CSS-prihvaćenim vrijednostima)",
    // "Maximum width"
    maxWidth: "Maksimalna širina (u CSS-prihvaćenim vrijednostima)",
    // "Width"
    width: "Širina (u CSS-prihvaćenim vrijednostima)",
    // [Auto-translated] "Show column headers"
    showHeader: "Pokaži zaglavlja stupaca",
    // [Auto-translated] "Show horizontal scrollbar"
    horizontalScroll: "Pokaži vodoravni klizač",
    // [Auto-translated] "Minimum column width"
    columnMinWidth: "Minimalna širina stupca",
    // [Auto-translated] "Row header width"
    rowTitleWidth: "Širina zaglavlja retka",
    // "Value to store when \"True\" is selected"
    valueTrue: "Vrijednost \"True\"",
    // "Value to store when \"False\" is selected"
    valueFalse: "Vrijednost \"False\"",
    // "\"Value is below minimum\" error message"
    minErrorText: "Poruka o pogrešci \"Vrijednost je ispod minimuma\"",
    // "\"Value exceeds maximum\" error message"
    maxErrorText: "Poruka o pogrešci \"Vrijednost premašuje maksimum\"",
    // "\"Empty comment\" error message"
    otherErrorText: "Poruka o pogrešci \"Prazan komentar\"",
    // "Error message for duplicate responses"
    keyDuplicationError: "Poruka o pogrešci \"Nejedinstvena vrijednost ključa\"",
    // [Auto-translated] "Minimum choices to select"
    minSelectedChoices: "Minimalni izbori za odabir",
    // [Auto-translated] "Maximum choices to select"
    maxSelectedChoices: "Maksimalan izbor za odabir",
    // [Auto-translated] "Logo width"
    logoWidth: "Širina logotipa",
    // [Auto-translated] "Logo height"
    logoHeight: "Visina logotipa",
    // "Read-only"
    readOnly: "Samo za čitanje",
    // [Auto-translated] "Disable the read-only mode if"
    enableIf: "Onemogućite način rada samo za čitanje ako",
    // "\"No rows\" message"
    noRowsText: "Poruka \"Bez redaka\"",
    // [Auto-translated] "Separate special choices"
    separateSpecialChoices: "Zasebni posebni izbori",
    // [Auto-translated] "Copy choices from the following question"
    choicesFromQuestion: "Kopiraj odabire iz sljedećeg pitanja",
    // [Auto-translated] "Which choice options to copy"
    choicesFromQuestionMode: "Koje opcije izbora kopirati",
    // [Auto-translated] "Use values from the following matrix column or panel question as choice IDs"
    choiceValuesFromQuestion: "Koristite vrijednosti iz sljedećeg stupca matrice ili pitanja panela kao ID-ove izbora",
    // [Auto-translated] "Use values from the following matrix column or panel question as choice texts"
    choiceTextsFromQuestion: "Koristite vrijednosti iz sljedećeg stupca matrice ili pitanja na ploči kao tekstove izbora",
    // [Auto-translated] "Display page titles in the progress bar"
    progressBarShowPageTitles: "Prikaz naslova stranica na traci napretka",
    // [Auto-translated] "Display page numbers in the progress bar"
    progressBarShowPageNumbers: "Prikaz brojeva stranica na traci napretka",
    // [Auto-translated] "Add a comment box"
    showCommentArea: "Dodavanje okvira za komentare",
    // [Auto-translated] "Placeholder text for the comment box"
    commentPlaceholder: "Tekst rezerviranog mjesta za okvir za komentare",
    // [Auto-translated] "Show the labels as extreme values"
    displayRateDescriptionsAsExtremeItems: "Prikaz oznaka kao ekstremnih vrijednosti",
    // [Auto-translated] "Row order"
    rowOrder: "Redoslijed redaka",
    // [Auto-translated] "Column layout"
    columnsLayout: "Izgled stupca",
    // [Auto-translated] "Nested column count"
    columnColCount: "Broj ugniježđenih stupaca",
    // [Auto-translated] "Correct Answer"
    correctAnswer: "Točan odgovor",
    // [Auto-translated] "Default Values"
    defaultPanelValue: "Zadane vrijednosti",
    // [Auto-translated] "Cell Texts"
    cells: "Tekstovi ćelija",
    // [Auto-translated] "Select a file or paste a file link..."
    fileInputPlaceholder: "Odabir datoteke ili lijepljenje veze na datoteku...",
    // "Prevent duplicate responses in the following column"
    keyName: "Stupac ključa",
    itemvalue: {
      // [Auto-translated] "Make the option visible if"
      visibleIf: "Učini mogućnost vidljivom ako",
      // [Auto-translated] "Make the option selectable if"
      enableIf: "Učini mogućnost odabranom ako"
    },
    "itemvalue@rows": {
      // [Auto-translated] "Make the row visible if"
      visibleIf: "Učini redak vidljivim ako",
      // [Auto-translated] "Make the row editable if"
      enableIf: "Učinite redak mogućim za uređivanje ako"
    },
    imageitemvalue: {
      // "Alt text"
      text: "Zamjenski tekst"
    },
    // "Logo alignment"
    logoPosition: "Položaj logotipa",
    // "Add logo..."
    addLogo: "Dodavanje logotipa...",
    // "Change logo..."
    changeLogo: "Promjena logotipa...",
    logoPositions: {
      // "Remove logo"
      none: "Uklanjanje logotipa",
      // "Left"
      left: "Lijevo",
      // "Right"
      right: "Desno",
      // "On the top"
      top: "Na vrhu",
      // "In the bottom"
      bottom: "Na dnu"
    },
    // [Auto-translated] "Preview mode"
    previewMode: "Način pregleda",
    // [Auto-translated] "Enable grid layout"
    gridLayoutEnabled: "Omogućivanje izgleda rešetke",
    // [Auto-translated] "Grid columns"
    gridLayoutColumns: "Stupci rešetke",
    // [Auto-translated] "Mask settings"
    maskSettings: "Postavke maske",
    // [Auto-translated] "Row details error message alignment"
    detailErrorLocation: "Poravnanje poruke o pogrešci s pojedinostima retka",
    // Creator tabs
    tabs: {
      panel: {
        // [Auto-translated] "Panel Layout"
        layout: "Izgled ploče"
      },
      // "General"
      general: "Općenito",
      // "Options"
      fileOptions: "Mogućnosti",
      // "HTML Editor"
      html: "Html Editor",
      // "Columns"
      columns: "Stupce",
      // "Rows"
      rows: "Redaka",
      // "Choice Options"
      choices: "Izbora",
      // "Items"
      items: "Stavke",
      // "Visible If"
      visibleIf: "Vidljivo ako",
      // "Editable If"
      enableIf: "Omogući ako",
      // "Required If"
      requiredIf: "Potrebno ako",
      // "Rating Values"
      rateValues: "Vrijednosti cijena",
      // [Auto-translated] "Slider Settings"
      sliderSettings: "Postavke klizača",
      // "Choices from a Web Service"
      choicesByUrl: "Izbori s weba",
      // "Default Choices"
      matrixChoices: "Zadani izbori",
      // "Text Inputs"
      multipleTextItems: "Unosi teksta",
      // "Numbering"
      numbering: "Numeriranje",
      // "Validators"
      validators: "Validatori",
      // "Navigation"
      navigation: "Navigacija",
      // "Question Settings"
      question: "Pitanje",
      // "Pages"
      pages: "Stranice",
      // "Quiz Mode"
      timer: "Timer/Kviz",
      // "Calculated Values"
      calculatedValues: "Izračunate vrijednosti",
      // "Triggers"
      triggers: "Aktivira",
      // "Title template"
      templateTitle: "Naslov predloška",
      // "Totals"
      totals: "Zbrojeve",
      // "Conditions"
      logic: "Logika",
      // [Auto-translated] "Input Mask Settings"
      mask: "Postavke maske za unos",
      layout: {
        // [Auto-translated] "Panel Layout"
        panel: "Izgled ploče",
        // [Auto-translated] "Layout"
        question: "Tlocrt",
        // [Auto-translated] "Layout"
        base: "Tlocrt"
      },
      // "Data"
      data: "Podataka",
      // "Validation"
      validation: "Provjera valjanosti",
      // "Individual Cell Texts"
      cells: "Ćelije",
      // "\"Thank You\" Page"
      showOnCompleted: "Prikazuje se na dovršenom",
      // "Logo in the Survey Header"
      logo: "Logotip u naslovu ankete",
      // "Slider"
      slider: "Klizač",
      // [Auto-translated] "Expression"
      expression: "Izraz",
      // [Auto-translated] "Question Settings"
      questionSettings: "Postavke pitanja",
      // "Header"
      header: "Zaglavlje",
      // "Background"
      background: "Pozadina",
      // "Appearance"
      appearance: "Izgled",
      // [Auto-translated] "Accent colors"
      accentColors: "Naglašavajuće boje",
      // [Auto-translated] "Surface background"
      surfaceBackground: "Pozadina površine",
      // [Auto-translated] "Scaling"
      scaling: "Skaliranje",
      // "Others"
      others: "Drugi"
    },
    // "Edit property '{0}'"
    editProperty: "Uređivanje objekta '{0}'",
    // "Items"
    items: "[ Stavke: {0} ]",
    // [Auto-translated] "Make choices visible if"
    choicesVisibleIf: "Učinite izbore vidljivima ako",
    // [Auto-translated] "Make choices selectable if"
    choicesEnableIf: "Mogućnost odabira odabira ako",
    // [Auto-translated] "Make columns visible if"
    columnsEnableIf: "Učinite stupce vidljivima ako",
    // [Auto-translated] "Make rows visible if"
    rowsEnableIf: "Učinite redove vidljivima ako",
    // [Auto-translated] "Increase the inner indent"
    innerIndent: "Povećajte unutarnju uvlaku",
    // [Auto-translated] "Use answers from the last entry as default"
    copyDefaultValueFromLastEntry: "Koristite odgovore iz posljednjeg unosa kao standardne",
    // "Please enter a value."
    enterNewValue: "Unesite vrijednost.",
    // "There are no questions in the survey."
    noquestions: "U anketi nema nikakvog pitanja.",
    // "Please create a trigger"
    createtrigger: "Izradite okidač",
    // "Press enter button to edit"
    titleKeyboardAdornerTip: "Pritisnite gumb za unos za uređivanje",
    // "Press enter button to edit item, press delete button to delete item, press alt plus arrow up or arrow down to move item"
    keyboardAdornerTip: "Pritisnite gumb enter za uređivanje stavke, pritisnite gumb za brisanje stavke, pritisnite alt plus strelica prema gore ili strelica prema dolje za pomicanje stavke.",
    // "On "
    triggerOn: "Na ",
    // "Make pages visible"
    triggerMakePagesVisible: "Učinite stranice vidljivima:",
    // "Make elements visible"
    triggerMakeQuestionsVisible: "Učinite elemente vidljivima:",
    // "Complete the survey if successful."
    triggerCompleteText: "Dovršite anketu ako uspijete.",
    // "The trigger is not set"
    triggerNotSet: "Okidač nije postavljen",
    // "Run if"
    triggerRunIf: "Trčanje ako",
    // "Change value of: "
    triggerSetToName: "Promjena vrijednosti: ",
    // "Copy value from: "
    triggerFromName: "Vrijednost kopiranja iz: ",
    // "Run this Expression"
    triggerRunExpression: "Postisni ovaj izraz:",
    // "to: "
    triggerSetValue: "za: ",
    // "Go to the question"
    triggerGotoName: "Idi na pitanje:",
    // "Do not put the variable into the survey result."
    triggerIsVariable: "Ne stavljajte varijablu u rezultat ankete.",
    // "Please enter a valid expression"
    triggerRunExpressionEmpty: "Unesite valjani izraz",
    // [Auto-translated] "Type expression here..."
    emptyExpressionPlaceHolder: "Ovdje upišite izraz...",
    // "No file chosen"
    noFile: "Nema odabira datoteke",
    // [Auto-translated] "Clear hidden question values"
    clearIfInvisible: "Brisanje skrivenih vrijednosti pitanja",
    // [Auto-translated] "Store values in the following property"
    valuePropertyName: "Pohranite vrijednosti u sljedeće svojstvo",
    // [Auto-translated] "Enable search-as-you-type"
    searchEnabled: "Omogućite pretraživanje dok upisujete",
    // [Auto-translated] "Hide selected items"
    hideSelectedItems: "Sakrij odabrane stavke",
    // [Auto-translated] "Collapse the dropdown upon selection"
    closeOnSelect: "Sažmi padajući izbornik nakon odabira",
    // [Auto-translated] "Vertical alignment within cells"
    verticalAlign: "Okomito poravnanje unutar ćelija",
    // [Auto-translated] "Alternate row colors"
    alternateRows: "Alternativne boje redaka",
    // [Auto-translated] "Make columns visible if"
    columnsVisibleIf: "Učinite stupce vidljivima ako",
    // [Auto-translated] "Make rows visible if"
    rowsVisibleIf: "Učinite redove vidljivima ako",
    // [Auto-translated] "Placeholder text for the comment box"
    otherPlaceholder: "Tekst rezerviranog mjesta za okvir za komentare",
    // [Auto-translated] "Placeholder text for Local file"
    filePlaceholder: "Rezervirano mjesto za tekst za lokalnu datoteku",
    // [Auto-translated] "Placeholder text for Camera"
    photoPlaceholder: "Rezervirano mjesto za tekst za kameru",
    // [Auto-translated] "Placeholder text for Local file or Camera"
    fileOrPhotoPlaceholder: "Tekst rezerviranog mjesta za lokalnu datoteku ili kameru",
    // [Auto-translated] "Rating icon"
    rateType: "Ikona ocjenjivanja",
    // [Auto-translated] "Ex.: https://api.example.com/books"
    url_placeholder: "Npr.: https://api.example.com/books",
    // [Auto-translated] "Ex.: categories.fiction"
    path_placeholder: "Ex.: kategorije.fiction",
    // [Auto-translated] "Ex.: a)"
    questionStartIndex_placeholder: "Npr.: a)",
    // [Auto-translated] "Ex.: 6in"
    width_placeholder: "Npr.: 6 inča",
    // [Auto-translated] "Ex.: 600px"
    minWidth_placeholder: "Npr.: 600px",
    // [Auto-translated] "Ex.: 50%"
    maxWidth_placeholder: "Npr.: 50%",
    // "auto"
    imageHeight_placeholder: "Автоматично",
    // "auto"
    imageWidth_placeholder: "Автоматично",
    // [Auto-translated] "Ex.: 100px"
    itemTitleWidth_placeholder: "Primjer: 100px",
    theme: {
      // [Auto-translated] "Theme"
      themeName: "Tema",
      // [Auto-translated] "Question appearance"
      isPanelless: "Izgled pitanja",
      // [Auto-translated] "Background and corner radius"
      editorPanel: "Polumjer pozadine i kuta",
      // [Auto-translated] "Background and corner radius"
      questionPanel: "Polumjer pozadine i kuta",
      // [Auto-translated] "Accent color"
      primaryColor: "Boja isticanja",
      // [Auto-translated] "Panel and question box opacity"
      panelBackgroundTransparency: "Neprozirnost panela i okvira za pitanja",
      // [Auto-translated] "Input element opacity"
      questionBackgroundTransparency: "Neprozirnost ulaznog elementa",
      // [Auto-translated] "Survey font size"
      fontSize: "Veličina fonta upitnika",
      // [Auto-translated] "Survey scale factor"
      scale: "Faktor skale ankete",
      // [Auto-translated] "Corner radius"
      cornerRadius: "Kutni radijus",
      // [Auto-translated] "Advanced mode"
      advancedMode: "Napredni način rada",
      // [Auto-translated] "Title font"
      pageTitle: "Font naslova",
      // [Auto-translated] "Description font"
      pageDescription: "Opisni font",
      // [Auto-translated] "Title font"
      questionTitle: "Font naslova",
      // [Auto-translated] "Description font"
      questionDescription: "Opisni font",
      // [Auto-translated] "Font"
      editorFont: "Krstionica",
      // [Auto-translated] "Opacity"
      backgroundOpacity: "Neprozirnost", // Auto-generated string
      // [Auto-translated] "Survey font family"
      "--sjs-font-family": "Obitelj fontova upitnika",
      // [Auto-translated] "Background color"
      "--sjs-general-backcolor-dim": "Boja pozadine",
      // [Auto-translated] "Accent background colors"
      "--sjs-primary-backcolor": "Naglašavajuće boje pozadine",
      // [Auto-translated] "Accent foreground colors"
      "--sjs-primary-forecolor": "Naglašene boje prednjeg plana",
      // [Auto-translated] "Error message colors"
      "--sjs-special-red": "Boje poruka o pogrešci",
      // [Auto-translated] "Shadow effects"
      "--sjs-shadow-small": "Efekti sjene",
      // [Auto-translated] "Shadow effects"
      "--sjs-shadow-inner": "Efekti sjene",
      // [Auto-translated] "Colors"
      "--sjs-border-default": "Boje"
    },
    "header@header": {
      // [Auto-translated] "View"
      headerView: "Pogled",
      // [Auto-translated] "Logo alignment"
      logoPosition: "Poravnanje logotipa",
      // [Auto-translated] "Survey title font"
      surveyTitle: "Font naslova upitnika",
      // [Auto-translated] "Survey description font"
      surveyDescription: "Font opisa upitnika",
      // [Auto-translated] "Survey title font"
      headerTitle: "Font naslova upitnika",
      // [Auto-translated] "Survey description font"
      headerDescription: "Font opisa upitnika",
      // [Auto-translated] "Content area width"
      inheritWidthFrom: "Širina područja sadržaja",
      // [Auto-translated] "Text width"
      textAreaWidth: "Širina teksta",
      // [Auto-translated] "Background color"
      backgroundColorSwitch: "Boja pozadine",
      // [Auto-translated] "Background image"
      backgroundImage: "Pozadinska slika",
      // [Auto-translated] "Opacity"
      backgroundImageOpacity: "Neprozirnost",
      // [Auto-translated] "Overlap"
      overlapEnabled: "Preklapanje",
      // [Auto-translated] "Logo alignment"
      logoPositionX: "Poravnanje logotipa",
      // [Auto-translated] "Survey title alignment"
      titlePositionX: "Poravnanje naslova upitnika",
      // [Auto-translated] "Survey description alignment"
      descriptionPositionX: "Poravnanje opisa upitnika"
    }
  },
  // Property values
  pv: {
    // [Auto-translated] "true"
    "true": "istinit",
    // [Auto-translated] "false"
    "false": "lažan",
    // [Auto-translated] "Local file"
    file: "Lokalna datoteka",
    // [Auto-translated] "Camera"
    camera: "Kamera",
    // [Auto-translated] "Local file or Camera"
    "file-camera": "Lokalna datoteka ili kamera",
    // "Inherit"
    inherit: "naslijediti",
    // "Visible"
    show: "pokazati",
    // "Hidden"
    hide: "sakrij",
    // "Inherit"
    default: "zadani",
    // "Initial"
    initial: "početni",
    // "Random"
    random: "slučajan",
    // "Collapsed"
    collapsed: "srušio",
    // "Expanded"
    expanded: "proširio",
    // "None"
    none: "nitko",
    // "Ascending"
    asc: "uzlazno",
    // "Descending"
    desc: "silazno",
    // "Indeterminate"
    indeterminate: "neodređeno",
    // [Auto-translated] "Selected"
    selected: "Odabrani",
    // [Auto-translated] "Unselected"
    unselected: "Neodabrano",
    // [Auto-translated] "decimal"
    decimal: "decimala",
    // [Auto-translated] "currency"
    currency: "valuta",
    // [Auto-translated] "percent"
    percent: "posto",
    // "First panel is expanded"
    firstExpanded: "firstExpanded",
    // "Hide question numbers"
    off: "isključeno",
    // "List"
    list: "popis",
    // [Auto-translated] "Carousel"
    carousel: "Vrtuljak",
    // [Auto-translated] "Tabs"
    tab: "Tabulatori",
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
    // "Both"
    both: "oba",
    // "Left"
    left: "lijevo",
    // [Auto-translated] "Right"
    right: "Desno",
    // [Auto-translated] "Center"
    center: "Središte",
    // [Auto-translated] "Left and right"
    leftRight: "Lijevo i desno",
    // [Auto-translated] "Middle"
    middle: "Sredina",
    // [Auto-translated] "color"
    color: "boja",
    // [Auto-translated] "date"
    date: "datum",
    // [Auto-translated] "datetime"
    datetime: "datum i vrijeme",
    // [Auto-translated] "datetime-local"
    "datetime-local": "datetime-local",
    // [Auto-translated] "email"
    email: "E-pošta",
    // [Auto-translated] "month"
    month: "mjesec",
    // [Auto-translated] "number"
    number: "broj",
    // [Auto-translated] "password"
    password: "lozinka",
    // [Auto-translated] "range"
    range: "domet",
    // [Auto-translated] "tel"
    tel: "Tel",
    // [Auto-translated] "text"
    text: "Tekstualna poruka",
    // [Auto-translated] "time"
    time: "Vrijeme",
    // [Auto-translated] "url"
    url: "URL",
    // [Auto-translated] "week"
    week: "tjedan",
    // "Hidden"
    hidden: "hidden",
    // "Editable"
    edit: "edit",
    // "Read-only"
    display: "display",
    // [Auto-translated] "Contain"
    contain: "Sadržavati",
    // [Auto-translated] "Cover"
    cover: "Pokriti",
    // [Auto-translated] "Fill"
    fill: "Ispuniti",
    // [Auto-translated] "Next"
    next: "Sljedeći",
    // [Auto-translated] "Last"
    last: "Trajati",
    // "Upon survey completion"
    onComplete: "onComplete",
    // "When question gets hidden"
    onHidden: "onHidden",
    // [Auto-translated] "When question or its panel/page gets hidden"
    onHiddenContainer: "Kada se pitanje ili njegova ploča/stranica sakrije",
    clearInvisibleValues: {
      // [Auto-translated] "Never"
      none: "Nikada"
    },
    clearIfInvisible: {
      // [Auto-translated] "Never"
      none: "Nikada"
    },
    // [Auto-translated] "Radio Buttons"
    radio: "Radio tipke",
    inputType: {
      // [Auto-translated] "Color"
      color: "Boja",
      // [Auto-translated] "Date"
      date: "Datum",
      // [Auto-translated] "Date and Time"
      "datetime-local": "Datum i vrijeme",
      // [Auto-translated] "Email"
      email: "E-pošta",
      // [Auto-translated] "Month"
      month: "Mjesec",
      // [Auto-translated] "Number"
      number: "Broj",
      // [Auto-translated] "Password"
      password: "Lozinka",
      // [Auto-translated] "Range"
      range: "Domet",
      // [Auto-translated] "Phone Number"
      tel: "Telefonski broj",
      // [Auto-translated] "Text"
      text: "Tekstualna poruka",
      // [Auto-translated] "Time"
      time: "Vrijeme",
      // [Auto-translated] "URL"
      url: "URL",
      // [Auto-translated] "Week"
      week: "Tjedan"
    },
    sliderType: {
      // [Auto-translated] "Single-Value"
      single: "Jedna vrijednost",
      // [Auto-translated] "Range"
      range: "Domet"
    },
    notificationType: {
      // [Auto-translated] "Error"
      error: "Greška",
      // [Auto-translated] "Warning"
      warning: "Upozorenje",
      // [Auto-translated] "Informational"
      info: "Informativan"
    },
    autocomplete: {
      // [Auto-translated] "Full Name"
      name: "Puno ime i prezime",
      // [Auto-translated] "Prefix"
      "honorific-prefix": "Prefiks",
      // [Auto-translated] "First Name"
      "given-name": "Ime",
      // [Auto-translated] "Middle Name"
      "additional-name": "Srednje ime",
      // [Auto-translated] "Last Name"
      "family-name": "Prezime",
      // [Auto-translated] "Suffix"
      "honorific-suffix": "Sufiks",
      // [Auto-translated] "Nickname"
      nickname: "Nadimak",
      // [Auto-translated] "Job Title"
      "organization-title": "Naziv radnog mjesta",
      // [Auto-translated] "User Name"
      username: "Korisničko ime",
      // [Auto-translated] "New Password"
      "new-password": "Nova lozinka",
      // [Auto-translated] "Current Password"
      "current-password": "Trenutna lozinka",
      // [Auto-translated] "Organization Name"
      organization: "Naziv tvrtke ili ustanove",
      // [Auto-translated] "Full Street Address"
      "street-address": "Puna adresa",
      // [Auto-translated] "Address Line 1"
      "address-line1": "Redak adrese 1",
      // [Auto-translated] "Address Line 2"
      "address-line2": "Redak adrese 2",
      // [Auto-translated] "Address Line 3"
      "address-line3": "Redak adrese 3",
      // [Auto-translated] "Level 4 Address"
      "address-level4": "Adresa razine 4",
      // [Auto-translated] "Level 3 Address"
      "address-level3": "Adresa razine 3",
      // [Auto-translated] "Level 2 Address"
      "address-level2": "Adresa razine 2",
      // [Auto-translated] "Level 1 Address"
      "address-level1": "Adresa razine 1",
      // [Auto-translated] "Country Code"
      country: "Pozivni broj zemlje",
      // [Auto-translated] "Country Name"
      "country-name": "Naziv zemlje",
      // [Auto-translated] "Postal Code"
      "postal-code": "Poštanski broj",
      // [Auto-translated] "Cardholder Name"
      "cc-name": "Ime vlasnika kartice",
      // [Auto-translated] "Cardholder First Name"
      "cc-given-name": "Ime vlasnika kartice",
      // [Auto-translated] "Cardholder Middle Name"
      "cc-additional-name": "Srednje ime vlasnika kartice",
      // [Auto-translated] "Cardholder Last Name"
      "cc-family-name": "Prezime vlasnika kartice",
      // [Auto-translated] "Credit Card Number"
      "cc-number": "Broj kreditne kartice",
      // [Auto-translated] "Expiration Date"
      "cc-exp": "Isteka",
      // [Auto-translated] "Expiration Month"
      "cc-exp-month": "Mjesec isteka",
      // [Auto-translated] "Expiration Year"
      "cc-exp-year": "Godina isteka",
      // [Auto-translated] "Card Security Code"
      "cc-csc": "Sigurnosni kod kartice",
      // [Auto-translated] "Credit Card Type"
      "cc-type": "Vrsta kreditne kartice",
      // [Auto-translated] "Transaction Currency"
      "transaction-currency": "Valuta transakcije",
      // [Auto-translated] "Transaction Amount"
      "transaction-amount": "Iznos transakcije",
      // [Auto-translated] "Preferred Language"
      language: "Preferirani jezik",
      // [Auto-translated] "Birthday"
      bday: "Rođendan",
      // [Auto-translated] "Birthday Day"
      "bday-day": "Rođendanski dan",
      // [Auto-translated] "Birthday Month"
      "bday-month": "Rođendanski mjesec",
      // [Auto-translated] "Birthday Year"
      "bday-year": "Godina rođenja",
      // [Auto-translated] "Gender"
      sex: "Spol",
      // [Auto-translated] "Website URL"
      url: "URL web stranice",
      // [Auto-translated] "Profile Photo"
      photo: "Profilna fotografija",
      // [Auto-translated] "Telephone Number"
      tel: "Telefonski broj",
      // [Auto-translated] "Country Code for Phone"
      "tel-country-code": "Pozivni broj za telefon",
      // [Auto-translated] "National Telephone Number"
      "tel-national": "Nacionalni telefonski broj",
      // [Auto-translated] "Area Code"
      "tel-area-code": "Pozivni broj",
      // [Auto-translated] "Local Phone Number"
      "tel-local": "Lokalni telefonski broj",
      // [Auto-translated] "Local Phone Prefix"
      "tel-local-prefix": "Prefiks lokalnog telefona",
      // [Auto-translated] "Local Phone Suffix"
      "tel-local-suffix": "Sufiks lokalnog telefona",
      // [Auto-translated] "Phone Extension"
      "tel-extension": "Proširenje telefona",
      // [Auto-translated] "Email Address"
      email: "Adresa e-pošte",
      // [Auto-translated] "Instant Messaging Protocol"
      impp: "Protokol za razmjenu izravnih poruka"
    },
    maskType: {
      // [Auto-translated] "None"
      none: "Nijedan",
      // [Auto-translated] "Pattern"
      pattern: "Uzorak",
      // [Auto-translated] "Numeric"
      numeric: "Brojčani",
      // [Auto-translated] "Date and Time"
      datetime: "Datum i vrijeme",
      // [Auto-translated] "Currency"
      currency: "Valuta"
    },
    inputTextAlignment: {
      // [Auto-translated] "Auto"
      auto: "Automobil",
      // [Auto-translated] "Left"
      left: "Lijevo",
      // [Auto-translated] "Right"
      right: "Desno"
    },
    // "All"
    all: "all",
    // "Page"
    page: "page",
    // "Survey"
    survey: "survey",
    // "When switching to the next page"
    onNextPage: "onNextPage",
    // "After an answer is changed"
    onValueChanged: "onValueChanged",
    // [Auto-translated] "Before an answer is changed"
    onValueChanging: "Prije promjene odgovora",
    questionsOnPageMode: {
      // [Auto-translated] "Original structure"
      standard: "Izvorna struktura",
      // [Auto-translated] "Show all questions on one page"
      singlePage: "Pokaži sva pitanja na jednoj stranici",
      // [Auto-translated] "Show single question per page"
      questionPerPage: "Pokaži jedno pitanje po stranici",
      // [Auto-translated] "Show single input field per page"
      inputPerPage: "Prikaz jednog polja za unos po stranici"
    },
    // "No preview"
    noPreview: "no preview",
    // "Show all questions"
    showAllQuestions: "show preview with all questions",
    // "Show answered questions only"
    showAnsweredQuestions: "show preview with answered questions",
    // [Auto-translated] "Show all questions"
    allQuestions: "Prikaži sva pitanja",
    // [Auto-translated] "Show answered questions only"
    answeredQuestions: "Prikaži samo odgovorena pitanja",
    // [Auto-translated] "Completed pages"
    pages: "Dovršene stranice",
    // [Auto-translated] "Answered questions"
    questions: "Odgovorena pitanja",
    // [Auto-translated] "Answered required questions"
    requiredQuestions: "Odgovoreno na obavezna pitanja",
    // [Auto-translated] "Valid answers"
    correctQuestions: "Valjani odgovori",
    // [Auto-translated] "Completed pages (button UI)"
    buttons: "Dovršene stranice (korisničko sučelje gumba)",
    // [Auto-translated] "Under the input field"
    underInput: "Ispod polja za unos",
    // [Auto-translated] "Under the question title"
    underTitle: "Pod naslovom pitanja",
    // [Auto-translated] "On lost focus"
    onBlur: "O izgubljenom fokusu",
    // [Auto-translated] "While typing"
    onTyping: "Tijekom tipkanja",
    // [Auto-translated] "Under the row"
    underRow: "Ispod retka",
    // [Auto-translated] "Under the row, display one section only"
    underRowSingle: "Ispod retka prikažite samo jedan odjeljak",
    // "Auto"
    auto: "Automobil",
    showNavigationButtons: {
      // [Auto-translated] "Hidden"
      none: "Skriven"
    },
    timerInfoMode: {
      // "Both"
      combined: "Oba"
    },
    addRowButtonLocation: {
      // [Auto-translated] "Based on matrix layout"
      default: "Na temelju matričnog izgleda"
    },
    panelsState: {
      // [Auto-translated] "Locked"
      default: "Zaključan",
      // [Auto-translated] "Collapse all"
      collapsed: "Sažmi sve",
      // [Auto-translated] "Expand all"
      expanded: "Proširi sve",
      // [Auto-translated] "First expanded"
      firstExpanded: "Prvo prošireno"
    },
    widthMode: {
      // [Auto-translated] "Static"
      static: "Statički",
      // [Auto-translated] "Responsive"
      responsive: "Odgovarajući"
    },
    contentMode: {
      // [Auto-translated] "Image"
      image: "Slika",
      // [Auto-translated] "Video"
      video: "Video",
      // [Auto-translated] "YouTube"
      youtube: "YouTube"
    },
    displayMode: {
      // [Auto-translated] "Buttons"
      buttons: "Gumbe",
      // [Auto-translated] "Dropdown"
      dropdown: "Padajući izbornik"
    },
    rateColorMode: {
      // [Auto-translated] "Default"
      default: "Propust",
      // [Auto-translated] "Scale"
      scale: "Vaga"
    },
    scaleColorMode: {
      // [Auto-translated] "Monochrome"
      monochrome: "Jednobojni",
      // [Auto-translated] "Colored"
      colored: "Boji"
    },
    autoGenerate: {
      // [Auto-translated] "Auto-generate"
      "true": "Automatsko generiranje",
      // [Auto-translated] "Manual"
      "false": "Priručnik"
    },
    rateType: {
      // [Auto-translated] "Labels"
      labels: "Natpise",
      // [Auto-translated] "Stars"
      stars: "Zvijezde",
      // [Auto-translated] "Smileys"
      smileys: "Smajlići"
    },
    state: {
      // [Auto-translated] "Locked"
      default: "Zaključan"
    },
    showQuestionNumbers: {
      // [Auto-translated] "Auto-numbering"
      default: "Automatsko numeriranje",
      // [Auto-translated] "Auto-numbering"
      on: "Automatsko numeriranje",
      // [Auto-translated] "Reset on each page"
      onPage: "Vrati izvorno na svaku stranicu",
      // [Auto-translated] "Reset on each panel"
      onpanel: "Resetirajte na svakoj ploči",
      // [Auto-translated] "Reset on each panel"
      onPanel: "Vrati izvorno na svaku ploču",
      // [Auto-translated] "Recursive numbering"
      recursive: "Rekurzivno numeriranje",
      // [Auto-translated] "Continue across the survey"
      onSurvey: "Nastavi kroz anketu",
      // [Auto-translated] "No numbering"
      off: "Bez numeriranja"
    },
    descriptionLocation: {
      // [Auto-translated] "Under the question title"
      underTitle: "Pod naslovom pitanja",
      // [Auto-translated] "Under the input field"
      underInput: "Ispod polja za unos"
    },
    selectToRankAreasLayout: {
      // [Auto-translated] "Next to choices"
      horizontal: "Pored izbora",
      // [Auto-translated] "Above choices"
      vertical: "Iznad izbora"
    },
    displayStyle: {
      // [Auto-translated] "Decimal"
      decimal: "Decimala",
      // [Auto-translated] "Currency"
      currency: "Valuta",
      // [Auto-translated] "Percentage"
      percent: "Postotak",
      // [Auto-translated] "Date"
      date: "Datum"
    },
    totalDisplayStyle: {
      // [Auto-translated] "Decimal"
      decimal: "Decimala",
      // [Auto-translated] "Currency"
      currency: "Valuta",
      // [Auto-translated] "Percentage"
      percent: "Postotak",
      // [Auto-translated] "Date"
      date: "Datum"
    },
    rowOrder: {
      // [Auto-translated] "Original"
      initial: "Originalan"
    },
    questionOrder: {
      // [Auto-translated] "Original"
      initial: "Originalan"
    },
    progressBarLocation: {
      // [Auto-translated] "Top"
      top: "Vrh",
      // [Auto-translated] "Bottom"
      bottom: "Dno",
      // [Auto-translated] "Top and bottom"
      topbottom: "Vrh i dno",
      // [Auto-translated] "Above the header"
      aboveheader: "Iznad zaglavlja",
      // [Auto-translated] "Below the header"
      belowheader: "Ispod zaglavlja",
      // [Auto-translated] "Hidden"
      off: "Skriven"
    },
    // [Auto-translated] "Sum"
    sum: "Suma",
    // [Auto-translated] "Count"
    count: "Brojati",
    // [Auto-translated] "Min"
    min: "Min",
    // [Auto-translated] "Max"
    max: "Max",
    // [Auto-translated] "Avg"
    avg: "Avg",
    searchMode: {
      // [Auto-translated] "Contains"
      contains: "Sadržava",
      // [Auto-translated] "Starts with"
      startsWith: "Počinje s"
    },
    backgroundImageFit: {
      // [Auto-translated] "Auto"
      auto: "Automobil",
      // [Auto-translated] "Cover"
      cover: "Pokriti",
      // [Auto-translated] "Contain"
      contain: "Sadržavati",
      // [Auto-translated] "Stretch"
      fill: "Parcela",
      // [Auto-translated] "Tile"
      tile: "Crijep"
    },
    backgroundImageAttachment: {
      // [Auto-translated] "Fixed"
      fixed: "Fiksirane",
      // [Auto-translated] "Scroll"
      scroll: "Svitak"
    },
    headerView: {
      // [Auto-translated] "Basic"
      basic: "Osnovni",
      // [Auto-translated] "Advanced"
      advanced: "Napredan"
    },
    inheritWidthFrom: {
      // [Auto-translated] "Same as survey"
      survey: "Isto kao i anketa",
      // [Auto-translated] "Same as container"
      container: "Isto kao spremnik"
    },
    backgroundColorSwitch: {
      // [Auto-translated] "None"
      none: "Nijedan",
      // [Auto-translated] "Accent color"
      accentColor: "Boja isticanja",
      // [Auto-translated] "Custom"
      custom: "Običaj"
    },
    colorPalette: {
      // [Auto-translated] "Light"
      light: "Svjetlo",
      // [Auto-translated] "Dark"
      dark: "Mračan"
    },
    isPanelless: {
      // [Auto-translated] "Default"
      "false": "Propust",
      // [Auto-translated] "Without Panels"
      "true": "Bez panela"
    },
    progressBarInheritWidthFrom: {
      // [Auto-translated] "Same as survey"
      survey: "Isto kao i anketa",
      // [Auto-translated] "Same as container"
      container: "Isto kao spremnik"
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
    // "Any of"
    anyof: "any of",
    // "All of"
    allof: "all of",
    // "Greater than"
    greater: "greater",
    // "Less than"
    less: "less",
    // "Greater than or equal to"
    greaterorequal: "greater or equals",
    // "Less than or equal to"
    lessorequal: "less or equals",
    // [Auto-translated] "and"
    and: "i",
    // [Auto-translated] "or"
    or: "ili"
  },
  // Embed window
  ew: {
    // "Use Angular version"
    angular: "Koristite kutnu verziju",
    // "Use jQuery version"
    jquery: "Koristite jQuery verziju",
    // "Use Knockout version"
    knockout: "Korištenje nokaut verzije",
    // "Use React version"
    react: "Korištenje verzije React",
    // "Use Vue version"
    vue: "Koristite Vue verziju",
    // "For bootstrap framework"
    bootstrap: "Za bootstrap okvir",
    // "Modern theme"
    modern: "Moderna tema",
    // "Default theme"
    default: "Zadana tema",
    // "Orange theme"
    orange: "Narančasta tema",
    // "Darkblue theme"
    darkblue: "Darkblue tema",
    // "Darkrose theme"
    darkrose: "Darkrose tema",
    // "Stone theme"
    stone: "Kamena tema",
    // "Winter theme"
    winter: "Zimska tema",
    // "Winter-Stone theme"
    winterstone: "Tema Zimsko-kamen",
    // "Show survey on a page"
    showOnPage: "Pokažite anketu na stranici",
    // "Show survey in a window"
    showInWindow: "Pokažite anketu u prozoru",
    // "Load Survey JSON from server"
    loadFromServer: "Učitavanje Survey JSON s poslužitelja",
    // "Scripts and styles"
    titleScript: "Skripte i stilovi",
    // "HTML"
    titleHtml: "HTML",
    // "JavaScript"
    titleJavaScript: "JavaScript"
  },
  // Preview (Survey)
  ts: {
    // "Select the page to test it"
    selectPage: "Odaberite stranicu da biste je testirali:",
    // "Show invisible elements"
    showInvisibleElements: "Pokaži nevidljive elemente",
    // [Auto-translated] "Hide invisible elements"
    hideInvisibleElements: "Sakrij nevidljive elemente",
    // [Auto-translated] "Previous"
    prevPage: "Prethodan",
    // [Auto-translated] "Next"
    nextPage: "Sljedeći"
  },
  validators: {
    // "Answer count"
    answercountvalidator: "broj odgovora",
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
    completetrigger: "potpuna anketa",
    // "Set answer"
    setvaluetrigger: "postavljena vrijednost",
    // "Copy answer"
    copyvaluetrigger: "vrijednost kopiranja",
    // "Skip to question"
    skiptrigger: "preskočiti na pitanje",
    // "Run expression"
    runexpressiontrigger: "pokrenuti izraz",
    // "change visibility (deprecated)"
    visibletrigger: "promjena vidljivosti (amortizirati)"
  },
  peplaceholder: {
    patternmask: {
      // "Ex.: +1(999)-999-99-99"
      pattern: "Npr.: +1(999)-999-99-99"
    },
    datetimemask: {
      // "Ex.: mm/dd/yyyy HH:MM:ss"
      pattern: "Npr.: mm/dd/gggg"
    },
    currencymask: {
      // "Ex.: $"
      prefix: "Npr.: $",
      // "Ex.: USD"
      suffix: "Npr.: USD"
    },
    panelbase: {
      // [Auto-translated] "Ex.: 200px"
      questionTitleWidth: "Npr.: 200px"
    },
    panellayoutcolumn: {
      // "Ex.: 30%"
      effectiveWidth: "Npr.: 30%",
      // "Ex.: 200px"
      questionTitleWidth: "Primjer: 200px"
    }
  },
  pehelp: {
    panel: {
      // "A panel ID that is not visible to respondents."
      name: "ID ploče koji nije vidljiv ispitanicima.",
      // [Auto-translated] "Type a panel subtitle."
      description: "Upišite podnaslov ploče.",
      // "Use the magic wand icon to set a conditional rule that determines panel visibility."
      visibleIf: "Pomoću ikone čarobnog štapića postavite uvjetno pravilo koje određuje vidljivost ploče.",
      // [Auto-translated] "Use the magic wand icon to set a conditional rule that disables the read-only mode for the panel."
      enableIf: "Pomoću ikone čarobnog štapića postavite uvjetno pravilo koje onemogućuje način samo za čitanje ploče.",
      // "Use the magic wand icon to set a conditional rule that prevents survey submission unless at least one nested question has an answer."
      requiredIf: "Pomoću ikone čarobnog štapića postavite uvjetno pravilo koje sprječava slanje upitnika, osim ako barem jedno ugniježđeno pitanje nema odgovor.",
      // [Auto-translated] "Applies to all questions within this panel. When set to \"Hidden\", it also hides question descriptions. If you want to override this setting, define title alignment rules for individual questions. The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Top\" by default). "
      questionTitleLocation: "Odnosi se na sva pitanja unutar ovog panela. Kada je postavljeno na \"Skriveno\", također skriva opise pitanja. Ako želite nadjačati ovu postavku, definirajte pravila poravnanja naslova za pojedinačna pitanja. Opcija \"Naslijedi\" primjenjuje postavku na razini stranice (ako je postavljena) ili na razini upitnika (\"Vrh\" prema zadanim postavkama). ",
      // [Auto-translated] "Sets consistent width for question titles when they are aligned to the left of their question boxes. Accepts CSS values (px, %, in, pt, etc.)."
      questionTitleWidth: "Postavlja dosljednu širinu za naslove pitanja kada su poravnati lijevo od okvira pitanja. Prihvaća CSS vrijednosti (px, %, in, pt itd.).",
      // "Sets the location of an error message in relation to all questions within the panel. The \"Inherit\" option applies the page-level (if set) or survey-level setting."
      questionErrorLocation: "Postavlja mjesto poruke o pogrešci u odnosu na sva pitanja unutar ploče. Opcija \"Naslijedi\" primjenjuje postavku na razini stranice (ako je postavljena) ili na razini upitnika.",
      // [Auto-translated] "Keeps the original order of questions or randomizes them. The \"Inherit\" option applies the page-level (if set) or survey-level setting."
      questionOrder: "Zadržava izvorni redoslijed pitanja ili ih nasumično razvrstava. Opcija \"Naslijedi\" primjenjuje postavku na razini stranice (ako je postavljena) ili na razini upitnika.",
      // "Repositions the panel to the end of a selected page."
      page: "Premješta ploču na kraj odabrane stranice.",
      // [Auto-translated] "Adds space or margin between the panel content and the left border of the panel box."
      innerIndent: "Dodaje razmak ili marginu između sadržaja ploče i lijevog obruba okvira ploče.",
      // "Unselect to display the panel in one line with the previous question or panel. The setting doesn't apply if the panel is the first element in your form."
      startWithNewLine: "Poništite odabir za prikaz ploče u jednom retku s prethodnim pitanjem ili pločom. Postavka se ne primjenjuje ako je ploča prvi element u obrascu.",
      // "Choose from: \"Expanded\" - the panel is displayed in full and can be collapsed; \"Collapsed\" - the panel displays only the title and description and can be expanded; \"Locked\" - the panel is displayed in full and cannot be collapsed."
      state: "Odaberite između: \"Prošireno\" - ploča je prikazana u cijelosti i može se sažeti; \"Sažeto\" - ploča prikazuje samo naslov i opis i može se proširiti; \"Zaključano\" - ploča je prikazana u cijelosti i ne može se sažeti.",
      // [Auto-translated] "Sets the width of the panel in proportion to other survey elements in the same line. Accepts CSS values (px, %, in, pt, etc.)."
      width: "Postavlja širinu ploče proporcionalno drugim elementima upitnika u istoj liniji. Prihvaća CSS vrijednosti (px, %, in, pt, itd.).",
      // [Auto-translated] "Assigns numbers to questions nested within this panel."
      showQuestionNumbers: "Dodjeljuje brojeve pitanjima ugniježđenim unutar ove ploče.",
      // [Auto-translated] "Specifies how many columns this panel spans within the grid layout."
      effectiveColSpan: "Određuje koliko stupaca ova ploča obuhvaća unutar rasporeda rešetke.",
      // [Auto-translated] "This table lets you configure each grid column within the panel. It automatically sets the width percentage for each column based on the maximum number of elements in a row. To customize the grid layout, manually adjust these values and define the title width for all questions in each column."
      gridLayoutColumns: "Ova tablica omogućuje konfiguriranje svakog stupca rešetke unutar ploče. Automatski postavlja postotak širine za svaki stupac na temelju maksimalnog broja elemenata u redu. Da biste prilagodili izgled rešetke, ručno prilagodite te vrijednosti i definirajte širinu naslova za sva pitanja u svakom stupcu."
    },
    paneldynamic: {
      // "A panel ID that is not visible to respondents."
      name: "ID ploče koji nije vidljiv ispitanicima.",
      // "Type a panel subtitle."
      description: "Upišite podnaslov ploče.",
      // "Use the magic wand icon to set a conditional rule that determines panel visibility."
      visibleIf: "Pomoću ikone čarobnog štapića postavite uvjetno pravilo koje određuje vidljivost ploče.",
      // [Auto-translated] "Use the magic wand icon to set a conditional rule that disables the read-only mode for the panel."
      enableIf: "Pomoću ikone čarobnog štapića postavite uvjetno pravilo koje onemogućuje način samo za čitanje ploče.",
      // "Use the magic wand icon to set a conditional rule that prevents survey submission unless at least one nested question has an answer."
      requiredIf: "Pomoću ikone čarobnog štapića postavite uvjetno pravilo koje sprječava slanje upitnika, osim ako barem jedno ugniježđeno pitanje nema odgovor.",
      // "Applies to all questions within this dynamic panel. If you want to override this setting, define title alignment rules for individual questions. The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Top\" by default)."
      templateQuestionTitleLocation: "Odnosi se na sva pitanja unutar ovog panela. Ako želite nadjačati ovu postavku, definirajte pravila poravnanja naslova za pojedinačna pitanja. Mogućnost \"Naslijedi\" primjenjuje postavku na razini stranice (ako je postavljena) ili na razini upitnika (\"Vrh\" prema zadanim postavkama).",
      // "Sets consistent width for question titles when they are aligned to the left of their question boxes. Accepts CSS values (px, %, in, pt, etc.)."
      templateQuestionTitleWidth: "Postavlja dosljednu širinu za naslove pitanja kada su poravnati s lijeve strane okvira za pitanja. Prihvaća CSS vrijednosti (px, %, in, pt, itd.).",
      // "Sets the location of an error message in relation to a question with invalid input. Choose between: \"Top\" - an error text is placed at the top of the question box; \"Bottom\" - an error text is placed at the bottom of the question box. The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Top\" by default)."
      templateErrorLocation: "Postavlja mjesto poruke o pogrešci u odnosu na pitanje s unosom koji nije valjan. Odaberite između: \"Vrh\" - tekst pogreške nalazi se na vrhu okvira pitanja; \"Dno\" - tekst pogreške nalazi se na dnu okvira pitanja. Mogućnost \"Naslijedi\" primjenjuje postavku na razini stranice (ako je postavljena) ili na razini upitnika (\"Vrh\" prema zadanim postavkama).",
      // "Sets the location of an error message in relation to all questions within the panel. The \"Inherit\" option applies the page-level (if set) or survey-level setting."
      errorLocation: "Postavlja mjesto poruke o pogrešci u odnosu na sva pitanja unutar ploče. Opcija \"Naslijedi\" primjenjuje postavku na razini stranice (ako je postavljena) ili na razini upitnika.",
      // "Repositions the panel to the end of a selected page."
      page: "Premješta ploču na kraj odabrane stranice.",
      // [Auto-translated] "Adds space or margin between the panel content and the left border of the panel box."
      indent: "Dodaje razmak ili marginu između sadržaja ploče i lijevog ruba okvira prozora.",
      // "Unselect to display the panel in one line with the previous question or panel. The setting doesn't apply if the panel is the first element in your form."
      startWithNewLine: "Poništite odabir za prikaz ploče u jednom retku s prethodnim pitanjem ili pločom. Postavka se ne primjenjuje ako je ploča prvi element u obrascu.",
      // "Choose from: \"Expanded\" - the panel is displayed in full and can be collapsed; \"Collapsed\" - the panel displays only the title and description and can be expanded; \"Locked\" - the panel is displayed in full and cannot be collapsed."
      state: "Odaberite između: \"Prošireno\" - ploča je prikazana u cijelosti i može se sažeti; \"Sažeto\" - ploča prikazuje samo naslov i opis i može se proširiti; \"Zaključano\" - ploča je prikazana u cijelosti i ne može se sažeti.",
      // "Sets the width of the panel in proportion to other survey elements in the same line. Accepts CSS values (px, %, in, pt, etc.)."
      width: "Postavlja širinu ploče proporcionalno ostalim elementima istraživanja u istoj liniji. Prihvaća CSS vrijednosti (px, %, in, pt itd.).",
      // "Type in a template for entry titles. Use {panelIndex} for the entry's general position and {visiblePanelIndex} for its order among visible entries. Insert these placeholders into the pattern to add automatic numbering."
      templateTitle: "Upišite predložak za dinamičke naslove ploča. Koristite {panelIndex} za opći položaj panela i {visiblePanelIndex} za njegov redoslijed među vidljivim pločama. Umetnite ova rezervirana mjesta u uzorak da biste dodali automatsko numeriranje.",
      // "Type in a template for tab titles. Use {panelIndex} for an entry's general position and {visiblePanelIndex} for its order among visible entries. Insert these placeholders into the pattern to add automatic numbering."
      templateTabTitle: "Upišite predložak za naslove kartica. Koristite {panelIndex} za opći položaj panela i {visiblePanelIndex} za njegov redoslijed među vidljivim pločama. Umetnite ova rezervirana mjesta u uzorak da biste dodali automatsko numeriranje.",
      // "A fallback text for tab titles that applies when the tab title pattern doesn't produce a meaningful value."
      tabTitlePlaceholder: "Rezervni tekst za naslove kartica koji se primjenjuje kada uzorak naslova kartice ne daje značajnu vrijednost.",
      // "This setting allows you to control the visibility of individual entries within the dynamic panel. Use the `{panel}` placeholder to reference the current entry in your expression."
      templateVisibleIf: "Ova postavka omogućuje kontrolu vidljivosti pojedinih ploča unutar dinamičke ploče. Koristite rezervirano mjesto '{panel}' za referenciranje trenutne ploče u izrazu.",
      // "This setting is automatically inherited by all questions within this dynamic panel. If you want to override this setting, define title alignment rules for individual questions. The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Top\" by default)."
      titleLocation: "Ovu postavku automatski nasljeđuju sva pitanja unutar ove ploče. Ako želite nadjačati ovu postavku, definirajte pravila poravnanja naslova za pojedinačna pitanja. Mogućnost \"Naslijedi\" primjenjuje postavku na razini stranice (ako je postavljena) ili na razini upitnika (\"Vrh\" prema zadanim postavkama).",
      // "The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Under the panel title\" by default)."
      descriptionLocation: "Opcija \"Naslijedi\" primjenjuje postavku na razini stranice (ako je postavljena) ili na razini upitnika (\"Pod naslovom ploče\" prema zadanim postavkama).",
      // "Defines the position of a newly added entry. By default, new entries are added to the end. Select \"Next\" to insert a new entry after the current one."
      newPanelPosition: "Definira položaj novododane ploče. Prema zadanim postavkama na kraj se dodaju nove ploče. Odaberite \"Dalje\" da biste umetnuli novu ploču nakon trenutne.",
      // [Auto-translated] "Duplicates answers from the last entry and assigns them to the next added entry."
      copyDefaultValueFromLastEntry: "Duplicira odgovore iz posljednjeg unosa i dodjeljuje ih sljedećem dodanom unosu.",
      // "Reference a question name to require a user to provide a unique response for this question in each entry."
      keyName: "Pogledajte naziv pitanja kako biste od korisnika zahtijevali da pruži jedinstven odgovor za ovo pitanje na svakoj ploči.",
      // [Auto-translated] "Triggers a confirmation prompt before removing an entry."
      confirmDelete: "Aktivira upit za potvrdu prije uklanjanja unosa."
    },
    matrixdynamic: {
      // [Auto-translated] "Triggers a confirmation prompt before removing a row."
      confirmDelete: "Aktivira upit za potvrdu prije uklanjanja retka.",
      // [Auto-translated] "Automatically expands the detail section when a new row is added to the matrix."
      detailPanelShowOnAdding: "Automatski proširuje odjeljak s detaljima kada se u matricu doda novi redak."
    },
    // "Duplicates answers from the last row and assigns them to the next added dynamic row."
    copyDefaultValueFromLastEntry: "Duplicira odgovore iz posljednjeg retka i dodjeljuje ih sljedećem dodanom dinamičkom retku.",
    // [Auto-translated] "This setting allows you to assign a default answer value based on an expression. The expression can include basic calculations - `{q1_id} + {q2_id}`, Boolean expressions, such as `{age} > 60`, and functions: `iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, etc. The value determined by this expression serves as the initial default value that can be overridden by a respondent's manual input."
    defaultValueExpression: "Ova postavka omogućuje dodjeljivanje zadane vrijednosti odgovora na temelju izraza. Izraz može uključivati osnovne izračune - '{q1_id} + {q2_id}', Booleove izraze, kao što su '{age} > 60', i funkcije: 'iif()', 'today()', 'age()', 'min()', 'max()', 'avg()', itd. Vrijednost određena ovim izrazom služi kao početna zadana vrijednost koja se može nadjačati ručnim unosom ispitanika.",
    // "Use the magic wand icon to set a conditional rule that determines when a respondent's input is reset to the value based on the \"Default value expression\" or \"Set value expression\" or to the \"Default answer\" value (if either is set)."
    resetValueIf: "Pomoću ikone čarobnog štapića postavite uvjetno pravilo koje određuje kada se unos ispitanika vraća na vrijednost na temelju \"Zadani izraz vrijednosti\" ili \"Postavi izraz vrijednosti\" ili na vrijednost \"Zadani odgovor\" (ako je postavljena).",
    // "Use the magic wand icon to set a conditional rule that determines when to run the \"Set value expression\" and dynamically assign the resulting value as a response."
    setValueIf: "Pomoću ikone čarobnog štapića postavite uvjetno pravilo koje određuje kada pokrenuti \"Postavi izraz vrijednosti\" i dinamički dodijelite dobivenu vrijednost kao odgovor.",
    // "Specify an expression that defines the value to be set when the conditions in the \"Set value if\" rule are met. The expression can include basic calculations - `{q1_id} + {q2_id}`, Boolean expressions, such as `{age} > 60`, and functions: `iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, etc. The value determined by this expression can be overridden by a respondent's manual input."
    setValueExpression: "Navedite izraz koji definira vrijednost koju treba postaviti kada se ispune uvjeti u pravilu \"Postavi vrijednost ako\". Izraz može uključivati osnovne izračune - '{q1_id} + {q2_id}', Booleove izraze, kao što su '{age} > 60', i funkcije: 'iif()', 'today()', 'age()', 'min()', 'max()', 'avg()', itd. Vrijednost određena ovim izrazom može se nadjačati ručnim unosom ispitanika.",
    // "Survey Creator allows you to manually adjust the inline widths of form elements to control the layout. If this doesn't produce the desired outcome, you can enable the grid layout, which structures form elements using a column-based system. To configure layout columns, select a page or panel and use the \"Question Settings\" → \"Grid columns\" table. To adjust how many columns a question spans, select it and set the desired value in the \"Layout\" → \"Column span\" field."
    gridLayoutEnabled: "Survey Creator omogućuje vam ručno podešavanje ugrađenih širina elemenata obrasca za kontrolu izgleda. Ako to ne daje željeni ishod, možete omogućiti raspored rešetke, čije strukture tvore elemente pomoću sustava temeljenog na stupcima. Da biste konfigurirali stupce izgleda, odaberite stranicu ili ploču i upotrijebite tablicu \"Postavke pitanja\" → \"Stupci rešetke\". Da biste prilagodili koliko stupaca obuhvaća pitanje, odaberite ga i postavite željenu vrijednost u polju \"Izgled\" → \"Raspon stupaca\".",
    question: {
      // "A question ID that is not visible to respondents."
      name: "ID pitanja koji nije vidljiv ispitanicima.",
      // "Type a question subtitle."
      description: "Upišite podnaslov pitanja.",
      // "Use the magic wand icon to set a conditional rule that determines question visibility."
      visibleIf: "Pomoću ikone čarobnog štapića postavite uvjetno pravilo koje određuje vidljivost pitanja.",
      // [Auto-translated] "Use the magic wand icon to set a conditional rule that disables the read-only mode for the question."
      enableIf: "Pomoću ikone čarobnog štapića postavite uvjetno pravilo koje onemogućuje način samo za čitanje za pitanje.",
      // "Use the magic wand icon to set a conditional rule that prevents survey advancing or submission unless the question received an answer."
      requiredIf: "Pomoću ikone čarobnog štapića postavite uvjetno pravilo koje sprječava napredovanje ili podnošenje upitnika, osim ako pitanje ne dobije odgovor.",
      // [Auto-translated] "Unselect to display the question in one line with the previous question or panel. The setting doesn't apply if the question is the first element in your form."
      startWithNewLine: "Poništite odabir za prikaz pitanja u jednom retku s prethodnim pitanjem ili pločom. Postavka se ne primjenjuje ako je pitanje prvi element u obrascu.",
      // "Repositions the question to the end of a selected page."
      page: "Premješta pitanje na kraj odabrane stranice.",
      // "Choose from: \"Expanded\" - the question box is displayed in full and can be collapsed; \"Collapsed\" - the question box displays only the title and description and can be expanded; \"Locked\" - the question box is displayed in full and cannot be collapsed."
      state: "Odaberite između: \"Prošireno\" - okvir pitanja prikazuje se u cijelosti i može se sažeti; \"Sažeto\" - okvir pitanja prikazuje samo naslov i opis i može se proširiti; \"Zaključano\" - okvir s pitanjima prikazuje se u cijelosti i ne može se sažeti.",
      // "Overrides title alignment rules defined on a panel, page, or survey level. When set to \"Hidden\", it also hides question descriptions. The \"Inherit\" option applies any higher-level settings (if set) or survey-level setting (\"Top\" by default)."
      titleLocation: "Nadjačava pravila poravnanja naslova definirana na razini ploče, stranice ili upitnika. Opcija \"Naslijedi\" primjenjuje sve postavke više razine (ako su postavljene) ili postavku na razini upitnika (\"Vrh\" prema zadanim postavkama).",
      // "The \"Inherit\" option applies the survey-level setting (\"Under the question title\" by default)."
      descriptionLocation: "Opcija \"Naslijedi\" primjenjuje postavku na razini upitnika (\"Pod naslovom pitanja\" prema zadanim postavkama).",
      // "Sets the location of an error message in relation to the question with invalid input. Choose between: \"Top\" - an error text is placed at the top of the question box; \"Bottom\" - an error text is placed at the bottom of the question box. The \"Inherit\" option applies the survey-level setting (\"Top\" by default)."
      errorLocation: "Postavlja mjesto poruke o pogrešci u odnosu na pitanje s unosom koji nije valjan. Odaberite između: \"Vrh\" - tekst pogreške nalazi se na vrhu okvira pitanja; \"Dno\" - tekst pogreške nalazi se na dnu okvira pitanja. Mogućnost \"Naslijedi\" primjenjuje postavku na razini upitnika (\"Vrh\" prema zadanim postavkama).",
      // "Adds space or margin between the question content and the left border of the question box."
      indent: "Dodaje razmak ili marginu između sadržaja pitanja i lijevog obruba okvira pitanja.",
      // "Sets the width of the question in proportion to other survey elements in the same line. Accepts CSS values (px, %, in, pt, etc.)."
      width: "Postavlja širinu pitanja proporcionalno drugim elementima upitnika u istom retku. Prihvaća CSS vrijednosti (px, %, in, pt itd.).",
      // "Choose from: \"On lost focus\" - the value is updated when the input field loses focus; \"While typing\" - the value is updated in real-time, as users are typing. The \"Inherit\" option applies the survey-level setting (\"On lost focus\" by default)."
      textUpdateMode: "Odaberite između: \"Na izgubljenom fokusu\" - vrijednost se ažurira kada polje za unos izgubi fokus; \"Tijekom tipkanja\" - vrijednost se ažurira u stvarnom vremenu, jer korisnici tipkaju. Opcija \"Naslijedi\" primjenjuje postavku na razini upitnika (\"Pri izgubljenom fokusu\" prema zadanim postavkama).",
      // [Auto-translated] "You can use any web service as a data source for multiple-choice questions. To populate choice values, enter the URL of the service providing the data."
      url: "Bilo koju web-uslugu možete koristiti kao izvor podataka za pitanja s višestrukim izborom odgovora. Da biste popunili vrijednosti izbora, unesite URL usluge koja pruža podatke.",
      // [Auto-translated] "A comparison operation used to filter the drop-down list."
      searchMode: "Operacija usporedbe koja se koristi za filtriranje padajućeg popisa.",
      // [Auto-translated] "Long texts in choice options will automatically generate line breaks to fit within the drop-down menu. Unselect if you want the texts to clip."
      textWrapEnabled: "Dugi tekstovi u mogućnostima izbora automatski će generirati prijelome redaka kako bi stali unutar padajućeg izbornika. Poništite odabir ako želite da se tekstovi izrežu.",
      // [Auto-translated] "Specifies how many columns this question spans within the grid layout."
      effectiveColSpan: "Određuje koliko stupaca ovo pitanje obuhvaća unutar rasporeda rešetke."
    },
    surveyvalidator: {
      // "Use the magic wand icon to define when the question's value is considered valid."
      expression: "Upotrijebite ikonu čarobnog štapića kako biste odredili kada se vrijednost pitanja smatra valjanom.",
      // [Auto-translated] "Specifies the type of notification shown to users. Errors block progress until resolved. Warnings highlight issues but allow to continue. Infornational notes provide additional context or neutral guidance."
      notificationType: "Određuje vrstu obavijesti koja se prikazuje korisnicima. Pogreške blokiraju napredak dok se ne riješe. Upozorenja ističu probleme, ali dopuštaju nastavak. Infornacionalne bilješke pružaju dodatni kontekst ili neutralne smjernice."
    },
    signaturepad: {
      // "Sets the width of the displayed signature area and the resulting image."
      signatureWidth: "Postavlja širinu prikazanog područja potpisa i rezultirajuću sliku.",
      // "Sets the height of the displayed signature area and the resulting image."
      signatureHeight: "Postavlja visinu prikazanog područja potpisa i rezultirajuću sliku.",
      // "Select if you want the signature area to fill all available space within the question box while maintaining the default 3:2 aspect ratio. When custom width and height values are set, the setting will keep the aspect ratio of these dimensions."
      signatureAutoScaleEnabled: "Odaberite želite li da područje potpisa ispuni sav raspoloživi prostor unutar okvira pitanja uz zadržavanje zadanog omjera slike 3:2. Kada su postavljene prilagođene vrijednosti širine i visine, postavka će zadržati omjer slike tih dimenzija."
    },
    file: {
      // "Specifies the display height of uploaded images in the preview and the actual height of images taken with the camera. In single file upload mode, the display height is limited by the preview area; in multiple file upload mode, it is limited by the thumbnail area."
      imageHeight: "Određuje visinu prikaza prenesenih slika u pregledu i stvarnu visinu slika snimljenih fotoaparatom. U načinu prijenosa jedne datoteke, visina prikaza ograničena je područjem pregleda; U načinu prijenosa više datoteka ograničen je područjem sličica.",
      // "Specifies the display width of uploaded images in the preview and the actual width of images taken with the camera. In single file upload mode, the display width is limited by the preview area; in multiple file upload mode, it is limited by the thumbnail area."
      imageWidth: "Određuje širinu prikaza prenesenih slika u pregledu i stvarnu širinu slika snimljenih fotoaparatom. U načinu prijenosa jedne datoteke, širina prikaza ograničena je područjem pregleda; U načinu prijenosa više datoteka ograničen je područjem sličica.",
      // [Auto-translated] "Displays thumbnail previews for uploaded files when possible. Unselect if you want to show file icons instead."
      allowImagesPreview: "Prikazuje pretpreglede minijatura za prenesene datoteke kada je to moguće. Poništite odabir želite li umjesto toga prikazati ikone datoteka."
    },
    image: {
      // "The \"Auto\" option automatically determines the suitable mode for display - Image, Video, or YouTube - based on the source URL provided."
      contentMode: "Opcija \"Automatski\" automatski određuje odgovarajući način prikaza - Slika, Videozapis ili YouTube - na temelju navedenog izvornog URL-a."
    },
    imagepicker: {
      // [Auto-translated] "Overrides the minimum and maximum height values."
      imageHeight: "Nadjačava vrijednosti minimalne i maksimalne visine.",
      // [Auto-translated] "Overrides the minimum and maximum width values."
      imageWidth: "Nadjačava vrijednosti minimalne i maksimalne širine.",
      // [Auto-translated] "\"Value\" serves as an item ID used in conditional rules; \"Text\" is displayed to respondents."
      choices: "\"Vrijednost\" služi kao ID stavke koji se koristi u uvjetnim pravilima; \"Tekst\" se prikazuje ispitanicima.",
      // "Choose between \"Image\" and \"Video\" to set the content mode of the media selector. If \"Image\" is selected, ensure that all options provided are image files in the following formats: JPEG, GIF, PNG, APNG, SVG, BMP, ICO. Similarly, if \"Video\" is selected, ensure that all options are direct links to video files in the following formats: MP4, MOV, WMV, FLV, AVI, MKV. Please note that YouTube links are not supported for video options."
      contentMode: "Odaberite između \"Slika\" i \"Videozapis\" da biste postavili način sadržaja birača medija. Ako je odabrana opcija \"Slika\", provjerite jesu li sve ponuđene opcije slikovne datoteke u sljedećim formatima: JPEG, GIF, PNG, APNG, SVG, BMP, ICO. Slično tome, ako je odabran \"Video\", provjerite jesu li sve opcije izravne veze na video datoteke u sljedećim formatima: MP4, MOV, WMV, FLV, AVI, MKV. Napominjemo da veze na YouTube nisu podržane za opcije videozapisa."
    },
    text: {
      // [Auto-translated] "This setting only resizes the input field and doesn't affect the width of the question box. To limit the accepted input length, go to \"Validation\" → \"Maximum character limit\"."
      size: "Ova postavka samo mijenja veličinu polja za unos i ne utječe na širinu okvira pitanja. Da biste ograničili prihvaćenu duljinu unosa, idite na \"Provjera valjanosti\" → \"Maksimalno ograničenje broja znakova\"."
    },
    comment: {
      // [Auto-translated] "Sets the number of displayed lines in the input field. If the input takes up more lines, the scroll bar will appear."
      rows: "Postavlja broj prikazanih redaka u polju za unos. Ako ulaz zauzima više linija, pojavit će se traka za pomicanje."
    },
    // survey templates
    survey: {
      // "Select if you want to prevent respondents from filling out your survey."
      readOnly: "Odaberite želite li ispitanicima onemogućiti ispunjavanje upitnika.",
      // "Sets the location of the progress bar. The \"Auto\" value displays the progress bar above or below the survey header."
      progressBarLocation: "Postavlja lokaciju trake napretka. Vrijednost \"Automatski\" prikazuje traku napretka iznad ili ispod zaglavlja ankete."
    },
    matrixdropdowncolumn: {
      // "A column ID that is not visible to respondents."
      name: "ID stupca koji nije vidljiv ispitanicima.",
      // "When enabled for a column, a respondent is required to provide a unique response for each question within this column."
      isUnique: "Kada je omogućen stupac, ispitanik mora dati jedinstven odgovor za svako pitanje unutar ovog stupca.",
      // "Sets the number of displayed lines in the input field. If the input takes up more lines, the scroll bar will appear."
      rows: "Postavlja broj prikazanih redaka u polju za unos. Ako ulaz zauzima više redaka, pojavit će se klizač.",
      // "Use the magic wand icon to set a conditional rule that determines column visibility."
      visibleIf: "Pomoću ikone čarobnog štapića postavite uvjetno pravilo koje određuje vidljivost stupca.",
      // [Auto-translated] "Use the magic wand icon to set a conditional rule that disables the read-only mode for the column."
      enableIf: "Pomoću ikone čarobnog štapića postavite uvjetno pravilo koje onemogućuje način samo za čitanje stupca.",
      // "Use the magic wand icon to set a conditional rule that prevents survey submission unless at least one nested question has an answer."
      requiredIf: "Pomoću ikone čarobnog štapića postavite uvjetno pravilo koje sprječava slanje upitnika, osim ako barem jedno ugniježđeno pitanje nema odgovor.",
      // "When selected, creates an individual column for each choice option."
      showInMultipleColumns: "Kada je odabrano, stvara pojedinačni stupac za svaku mogućnost izbora.",
      // [Auto-translated] "Arranges choice options in a multi-column layout. When set to 0, the options are displayed in a single line. When set to -1, the actual value is inherited from the \"Nested column count\" property of the parent matrix."
      colCount: "Raspoređuje opcije izbora u rasporedu s više stupaca. Kada je postavljena na 0, opcije se prikazuju u jednom retku. Kada je postavljena na -1, stvarna vrijednost nasljeđuje se iz svojstva \"Broj ugniježđenih stupaca\" nadređene matrice."
    },
    slider: {
      // "The lowest number that users can select."
      min: "Najniži broj koji korisnici mogu odabrati.",
      // "The highest number that users can select."
      max: "Najveći broj koji korisnici mogu odabrati.",
      // "The interval between selectable scale values. For example, a step of 5 will allow users to select 0, 5, 10, etc."
      step: "Interval između vrijednosti ljestvice koje se mogu odabrati. Na primjer, korak od 5 omogućit će korisnicima da odaberu 0, 5, 10 itd.",
      // "The minimum distance between the slider thumbs a user can set."
      minRangeLength: "Minimalna udaljenost između palčeva klizača koje korisnik može postaviti.",
      // "The maximum distance between the slider thumbs a user can set."
      maxRangeLength: "Maksimalna udaljenost između palčeva klizača koje korisnik može postaviti.",
      // "Specifies how many scale labels to generate. A value of -1 means the number is calculated automatically based on the Min value and Max value."
      labelCount: "Određuje koliko oznaka ljestvice treba generirati. Vrijednost -1 znači da se broj izračunava automatski na temelju vrijednosti Min i Max vrijednosti.",
      // "Use `{0}` as a placeholder for the actual value."
      labelFormat: "Upotrijebite '{0}' kao rezervirano mjesto za stvarnu vrijednost.",
      // "Allows you to define custom labels at specific values and optionally assign corresponding text to them (e.g., 0 = \"Poor\", 100 = \"Excellent\")."
      customLabels: "Omogućuje vam definiranje prilagođenih oznaka na određenim vrijednostima i opcionalno im dodijelite odgovarajući tekst (npr. 0 = \"Loše\", 100 = \"Izvrsno\").",
      // "Use `{0}` as a placeholder for the actual value."
      tooltipFormat: "Upotrijebite '{0}' kao rezervirano mjesto za stvarnu vrijednost.",
      // "Allows users to move one thumb past the other."
      allowSwap: "Omogućuje korisnicima pomicanje jednog palca preko drugog.",
      // [Auto-translated] "Displays a button that clears the selected slider value and sets it to undefined."
      allowClear: "Prikazuje gumb koji briše odabranu vrijednost klizača i postavlja je na nedefinirano.",
      // "Defines the slider's minimum value dynamically using an expression. Supports basic calculations (e.g, `{q1_id} + {q2_id}`), Boolean logic (e.g., `{age} > 60`), and functions like `iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, and more."
      minValueExpression: "Dinamički definira minimalnu vrijednost klizača pomoću izraza. Podržava osnovne izračune (npr. '{q1_id} + {q2_id}'), Booleovu logiku (npr. '{age} > 60') i funkcije kao što su 'iif()', 'today()', 'age()', 'min()', 'max()', 'avg()' i još mnogo toga.",
      // "Defines the slider's maximum value dynamically using an expression. Supports basic calculations (e.g, `{q1_id} + {q2_id}`), Boolean logic (e.g., `{age} > 60`), and functions like `iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, and more."
      maxValueExpression: "Dinamički definira maksimalnu vrijednost klizača pomoću izraza. Podržava osnovne izračune (npr. '{q1_id} + {q2_id}'), Booleovu logiku (npr. '{age} > 60') i funkcije kao što su 'iif()', 'today()', 'age()', 'min()', 'max()', 'avg()' i još mnogo toga."
    },
    // [Auto-translated] "Makes this choice exclusive. When selected by a user, it will automatically deselect all other options in the question."
    isExclusive: "Čini ovaj izbor ekskluzivnim. Kada korisnik odabere, automatski će poništiti odabir svih ostalih opcija u pitanju.",
    matrixcolumn: {
      // [Auto-translated] "Makes checkboxes in this column exclusive. When selected by a user, they will automatically deselect all other checkboxes in the same row."
      isExclusive: "Čini potvrdne okvire u ovom stupcu isključivim. Kada korisnik odabere, automatski će poništiti odabir svih ostalih potvrdnih okvira u istom retku."
    },
    // [Auto-translated] "Select if uppercase and lowercase letters in the regular expression must be treated as equivalent."
    caseInsensitive: "Odaberite ako se velika i mala slova u regularnom izrazu moraju tretirati kao ekvivalentna.",
    // "Choose from: \"Static\" - sets a fixed width; \"Responsive\" - makes the survey occupy the full width of the screen; \"Auto\" - applies either of the two depending on the question types used."
    widthMode: "Odaberite između: \"Statika\" - postavlja fiksnu širinu; \"Responsive\" - čini da anketa zauzima punu širinu zaslona; \"Auto\" - primjenjuje se bilo koji od dva ovisno o korištenim vrstama pitanja.",
    // [Auto-translated] "Assign a unique cookie value for your survey. The cookie will be set in a respondent's browser upon survey completion to prevent repetitive survey submissions."
    cookieName: "Dodijelite jedinstvenu vrijednost kolačića za svoju anketu. Kolačić će se postaviti u preglednik ispitanika nakon završetka ankete kako bi se spriječilo ponavljanje ankete.",
    // [Auto-translated] "Paste an image link (no size limits) or click the folder icon to browse a file from your computer (up to 64KB)."
    logo: "Zalijepite slikovnu vezu (bez ograničenja veličine) ili kliknite ikonu mape da biste pregledali datoteku s računala (do 64 KB).",
    // [Auto-translated] "Sets a logo width in CSS units (px, %, in, pt, etc.)."
    logoWidth: "Postavlja širinu logotipa u CSS jedinicama (px, %, in, pt itd.).",
    // [Auto-translated] "Sets a logo height in CSS units (px, %, in, pt, etc.)."
    logoHeight: "Postavlja visinu logotipa u CSS jedinicama (px, %, in, pt itd.).",
    // "Choose from: \"None\" - image maintains its original size; \"Contain\" - image is resized to fit while maintaining its aspect ratio; \"Cover\" - image fills the entire box while maintaining its aspect ratio; \"Fill\" - image is stretched to fill the box without maintaining its aspect ratio."
    logoFit: "Odaberite između: \"Nema\" - slika zadržava svoju izvornu veličinu; \"Sadrži\" - slika se mijenja kako bi stala uz zadržavanje omjera slike; \"Poklopac\" - slika ispunjava cijelu kutiju zadržavajući omjer slike; \"Ispuna\" - slika se rasteže kako bi ispunila kutiju bez zadržavanja omjera slike.",
    // [Auto-translated] "Select if you want the survey to auto-advance to the next page once a respondent has answered all questions on the current page. This feature won't apply if the last question on the page is open-ended or allows multiple answers."
    autoAdvanceEnabled: "Odaberite želite li da se upitnik automatski prijeđe na sljedeću stranicu nakon što ispitanik odgovori na sva pitanja na trenutnoj stranici. Ova se značajka neće primijeniti ako je posljednje pitanje na stranici otvoreno ili dopušta više odgovora.",
    // [Auto-translated] "Select if you want the survey to complete automatically after a respondent answers all questions."
    autoAdvanceAllowComplete: "Odaberite želite li da se anketa automatski dovrši nakon što ispitanik odgovori na sva pitanja.",
    // [Auto-translated] "Sets the visibility of navigation buttons on a page."
    showNavigationButtons: "Postavlja vidljivost navigacijskih gumba na stranici.",
    // [Auto-translated] "Sets the location of navigation buttons on a page."
    navigationButtonsLocation: "Postavlja mjesto navigacijskih gumba na stranici.",
    // [Auto-translated] "Enable the preview page with all or answered questions only."
    showPreviewBeforeComplete: "Omogućite stranicu pretpregleda samo sa svim ili odgovorenim pitanjima.",
    // "Applies to all questions within the survey. This setting can be overridden by title alignment rules at lower levels: panel, page, or question. A lower-level setting will override those on a higher level."
    questionTitleLocation: "Odnosi se na sva pitanja unutar ankete. Ova postavka može se nadjačati pravilima poravnanja naslova na nižim razinama: ploča, stranica ili pitanje. Postavka niže razine nadjačat će one na višoj razini.",
    // [Auto-translated] "A symbol or a sequence of symbols indicating that an answer is required."
    requiredMark: "Simbol ili niz simbola koji označavaju da je potreban odgovor.",
    // [Auto-translated] "Enter a number or letter with which you want to start numbering."
    questionStartIndex: "Unesite broj ili slovo s kojim želite započeti numeriranje.",
    // "Sets the location of an error message in relation to the question with invalid input. Choose between: \"Top\" - an error text is placed at the top of the question box; \"Bottom\" - an error text is placed at the bottom of the question box."
    questionErrorLocation: "Postavlja mjesto poruke o pogrešci u odnosu na pitanje s unosom koji nije valjan. Odaberite između: \"Vrh\" - tekst pogreške nalazi se na vrhu okvira pitanja; \"Dno\" - tekst pogreške nalazi se na dnu okvira pitanja.",
    // [Auto-translated] "Select if you want the first input field on each page ready for text entry."
    autoFocusFirstQuestion: "Odaberite želite li da prvo polje za unos na svakoj stranici bude spremno za unos teksta.",
    // "Keeps the original order of questions or randomizes them. The effect of this setting is only visible in the Preview tab."
    questionOrder: "Zadržava izvorni redoslijed pitanja ili ih randomizira. Efekt ove postavke vidljiv je samo na kartici Pretpregled.",
    // [Auto-translated] "For text entry questions only."
    maxTextLength: "Samo za pitanja o unosu teksta.",
    // [Auto-translated] "For question comments only."
    maxCommentLength: "Samo za komentare pitanja.",
    // [Auto-translated] "Sets the number of displayed lines in text areas for question comments. If the input takes up more lines, the scroll bar appears."
    commentAreaRows: "Postavlja broj prikazanih redaka u tekstnim područjima za komentare pitanja. Ako ulaz zauzima više linija, pojavit će se klizač.",
    // [Auto-translated] "Select if you want question comments and Long Text questions to auto-grow in height based on the entered text length."
    autoGrowComment: "Odaberite želite li da komentari pitanja i pitanja dugog teksta automatski rastu u visinu na temelju unesene duljine teksta.",
    // [Auto-translated] "For question comments and Long Text questions only."
    allowResizeComment: "Samo za komentare pitanja i pitanja dugog teksta.",
    // [Auto-translated] "Custom variables serve as intermediate or auxiliary variables used in form calculations. They take respondent inputs as source values. Each custom variable has a unique name and an expression it's based on."
    calculatedValues: "Prilagođene varijable služe kao srednje ili pomoćne varijable koje se koriste u izračunima obrazaca. Oni uzimaju unose ispitanika kao izvorne vrijednosti. Svaka prilagođena varijabla ima jedinstveni naziv i izraz na kojem se temelji.",
    // [Auto-translated] "Select if you wish the calculated value of the expression to be saved along with survey results."
    includeIntoResult: "Odaberite želite li spremiti izračunatu vrijednost izraza zajedno s rezultatima upitnika.",
    // "A trigger is an event or condition that is based on an expression. Once the expression is evaluated to \"true\", a trigger sets off an action. Such an action can optionally have a target question it affects."
    triggers: "Okidač je događaj ili uvjet koji se temelji na izrazu. Nakon što se izraz procijeni kao \"istinit\", okidač pokreće radnju. Takva radnja može po želji imati ciljano pitanje na koje utječe.",
    // [Auto-translated] "Choose whether or not to clear values for questions hidden by conditional logic and when to do it."
    clearInvisibleValues: "Odaberite želite li očistiti vrijednosti za pitanja skrivena uvjetnom logikom i kada to učiniti.",
    // "Choose from: \"On lost focus\" - the value is updated when the input field loses focus; \"While typing\" - the value is updated in real-time, as users are typing."
    textUpdateMode: "Odaberite između: \"Na izgubljenom fokusu\" - vrijednost se ažurira kada polje za unos izgubi fokus; \"Tijekom tipkanja\" - vrijednost se ažurira u stvarnom vremenu, jer korisnici tipkaju.",
    // [Auto-translated] "The left value serves as a column ID used in conditional rules, the right value is displayed to respondents."
    columns: "Lijeva vrijednost služi kao ID stupca koji se koristi u uvjetnim pravilima, a ispitanicima se prikazuje prava vrijednost.",
    // "The left value serves as a row ID used in conditional rules, the right value is displayed to respondents."
    rows: "Lijeva vrijednost služi kao ID retka koji se koristi u uvjetnim pravilima, a ispitanicima se prikazuje prava vrijednost.",
    // [Auto-translated] "Accepts CSS values (px, %, in, pt, etc.)."
    columnMinWidth: "Prihvaća CSS vrijednosti (px, %, in, pt itd.).",
    // [Auto-translated] "Accepts CSS values (px, %, in, pt, etc.)."
    rowTitleWidth: "Prihvaća CSS vrijednosti (px, %, in, pt itd.).",
    // [Auto-translated] "Visible only if at least one column displays total values set with \"Aggregation method\" or \"Total value expression\"."
    totalText: "Vidljivo samo ako barem jedan stupac prikazuje ukupne vrijednosti postavljene pomoću \"Metode agregacije\" ili \"Izraza ukupne vrijednosti\".",
    // "Sets the location of an error message in relation to a cell with invalid input. The \"Inherit\" option applies the setting from the \"Error message alignment\" property."
    cellErrorLocation: "Postavlja mjesto poruke o pogrešci u odnosu na ćeliju s unosom koji nije valjan. Mogućnost \"Naslijedi\" primjenjuje postavku iz svojstva \"Poravnanje poruke o pogrešci\".",
    // "Sets the location of error messages for questions nested in detail sections. The \"Inherit\" option applies the setting from the \"Error message alignment\" property."
    detailErrorLocation: "Postavlja mjesto poruka o pogreškama za pitanja ugniježđena u detaljnim odjeljcima. Mogućnost \"Naslijedi\" primjenjuje postavku iz svojstva \"Poravnanje poruke o pogrešci\".",
    // "When the \"Prevent duplicate responses\" property is enabled, a respondent attempting to submit a duplicate entry will receive the following error message."
    keyDuplicationError: "Kada je omogućeno svojstvo \"Spriječi duplicirane odgovore\", ispitanik koji pokuša poslati duplikat unosa primit će sljedeću poruku o pogrešci.",
    // [Auto-translated] "Allows you to calculate total values based on an expression. The expression can include basic calculations (`{q1_id} + {q2_id}`), Boolean expressions (`{age} > 60`) and functions ('iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, etc.)."
    totalExpression: "Omogućuje izračunavanje ukupnih vrijednosti na temelju izraza. Izraz može uključivati osnovne izračune ('{q1_id} + {q2_id}'), Booleove izraze ('{age} > 60') i funkcije ('iif()', 'today()', 'age()', 'min()', 'max()', 'avg()', itd.).",
    // "Reference a column ID to require a user to provide a unique response for each question within the specified column."
    keyName: "Ako navedeni stupac sadrži identične vrijednosti, anketa odbacuje pogrešku \"Nejedinstvena vrijednost ključa\".",
    // "Type a subtitle."
    description: "Upišite podnaslov.",
    // [Auto-translated] "Choose a language to begin creating your survey. To add a translation, switch to a new language and translate the original text here or in the Translations tab."
    locale: "Odaberite jezik za početak stvaranja upitnika. Da biste dodali prijevod, prijeđite na novi jezik i prevedite izvorni tekst ovdje ili na kartici Prijevodi.",
    // "Sets the location of a detail section in relation to a row. Choose from: \"None\" - no detail section is added; \"Under the row\" - a detail section is placed under each row of the matrix; \"Under the row, display one detail section only\" - a detail section is displayed under a single row only, the remaining sections are collapsed."
    detailPanelMode: "Postavlja mjesto sekcije s detaljima u odnosu na redak. Odaberite između: \"Nema\" - ne dodaje se proširenje; \"Ispod reda\" - proširenje retka nalazi se ispod svakog retka matrice; \"Ispod retka prikaži samo proširenje jednog retka\" - proširenje se prikazuje samo ispod jednog retka, preostala proširenja retka su sažeta.",
    // "Choose from: \"None\" - image maintains its original size; \"Contain\" - image is resized to fit while maintaining its aspect ratio; \"Cover\" - image fills the entire box while maintaining its aspect ratio; \"Fill\" - image is stretched to fill the box without maintaining its aspect ratio."
    imageFit: "Odaberite između: \"Nema\" - slika zadržava svoju izvornu veličinu; \"Sadrži\" - slika se mijenja kako bi stala uz zadržavanje omjera slike; \"Poklopac\" - slika ispunjava cijelu kutiju zadržavajući omjer slike; \"Ispuna\" - slika se rasteže kako bi ispunila kutiju bez zadržavanja omjera slike.",
    // "The \"Inherit\" option applies a survey-level setting (\"Disabled\" by default)."
    autoGrow: "Postupno povećava visinu polja unosa tijekom unosa podataka. Nadjačava postavku \"Visina polja unosa (u crtama)\".",
    // [Auto-translated] "The \"Inherit\" option applies a survey-level setting (\"Enabled\" by default)."
    allowResize: "Opcija \"Naslijedi\" primjenjuje postavku na razini upitnika (\"Omogućeno\" prema zadanim postavkama).",
    // [Auto-translated] "A time interval in seconds after which the survey auto-advances to the \"Thank You\" page. When set to 0, counts the time spent on the survey."
    timeLimit: "Vremenski interval u sekundama nakon kojeg anketa automatski prelazi na stranicu \"Zahvala\". Kada je postavljeno na 0, broji vrijeme provedeno u upitniku.",
    // [Auto-translated] "A time interval in seconds after which the survey auto-advances to the next page. Hides the \"Previous\" navigation button. When set to 0, counts the time spent on the current page."
    timeLimitPerPage: "Vremenski interval u sekundama nakon kojeg anketa automatski prelazi na sljedeću stranicu. Skriva navigacijski gumb \"Prethodna\". Kada je postavljen na 0, broji vrijeme provedeno na trenutnoj stranici.",
    // [Auto-translated] "Enable this option to trigger validation when a user focuses on an empty input field and then leaves it without making any changes."
    validateVisitedEmptyFields: "Omogućite ovu mogućnost da biste pokrenuli provjeru valjanosti kada se korisnik usredotoči na prazno polje za unos, a zatim ga napusti bez ikakvih promjena.",
    page: {
      // "A page ID that is not visible to respondents."
      name: "ID stranice koji nije vidljiv ispitanicima.",
      // "Type a page subtitle."
      description: "Upišite podnaslov stranice.",
      // "A caption displayed on a navigation button in the progress bar or table of contents (TOC). If you leave this field empty, the navigation button will use the page title or page name. To enable the progress bar or TOC, go to \"Survey\" → \"Navigation\"."
      navigationTitle: "Opis prikazan na navigacijskom gumbu na traci napretka ili kazalu sadržaja. Ako ovo polje ostavite prazno, navigacijski gumb koristit će naslov stranice ili naziv stranice. Da biste omogućili traku napretka ili sadržaj, idite na \"Anketa\" → \"Navigacija\".",
      // "A time interval in seconds after which the survey auto-advances to the next page. Hides the \"Previous\" navigation button. When set to 0, counts the time spent on the current page."
      timeLimit: "Vremenski interval u sekundama nakon kojeg anketa automatski prelazi na sljedeću stranicu.",
      // "Use the magic wand icon to set a conditional rule that determines page visibility."
      visibleIf: "Pomoću ikone čarobnog štapića postavite uvjetno pravilo koje određuje vidljivost stranice.",
      // [Auto-translated] "Use the magic wand icon to set a conditional rule that disables the read-only mode for the page."
      enableIf: "Pomoću ikone čarobnog štapića postavite uvjetno pravilo koje onemogućuje način samo za čitanje stranice.",
      // "Use the magic wand icon to set a conditional rule that prevents survey submission unless at least one nested question has an answer."
      requiredIf: "Pomoću ikone čarobnog štapića postavite uvjetno pravilo koje sprječava slanje upitnika, osim ako barem jedno ugniježđeno pitanje nema odgovor.",
      // "Applies to all questions within this page. When set to \"Hidden\", it also hides question descriptions. If you want to override this setting, define title alignment rules for individual questions or panels. The \"Inherit\" option applies the survey-level setting (\"Top\" by default)."
      questionTitleLocation: "Odnosi se na sva pitanja unutar ove stranice. Ako želite nadjačati ovu postavku, definirajte pravila poravnanja naslova za pojedinačna pitanja ili ploče. Mogućnost \"Naslijedi\" primjenjuje postavku na razini upitnika (\"Vrh\" prema zadanim postavkama).",
      // [Auto-translated] "Sets consistent width for question titles when they are aligned to the left of their question boxes. Accepts CSS values (px, %, in, pt, etc.)."
      questionTitleWidth: "Postavlja dosljednu širinu za naslove pitanja kada su poravnati lijevo od okvira pitanja. Prihvaća CSS vrijednosti (px, %, in, pt itd.).",
      // "Sets the location of an error message in relation to the question with invalid input. Choose between: \"Top\" - an error text is placed at the top of the question box; \"Bottom\" - an error text is placed at the bottom of the question box. The \"Inherit\" option applies the survey-level setting (\"Top\" by default)."
      questionErrorLocation: "Postavlja mjesto poruke o pogrešci u odnosu na pitanje s unosom koji nije valjan. Odaberite između: \"Vrh\" - tekst pogreške nalazi se na vrhu okvira pitanja; \"Dno\" - tekst pogreške nalazi se na dnu okvira pitanja. Mogućnost \"Naslijedi\" primjenjuje postavku na razini upitnika (\"Vrh\" prema zadanim postavkama).",
      // "Keeps the original order of questions or randomizes them. The \"Inherit\" option applies the survey-level setting (\"Original\" by default). The effect of this setting is only visible in the Preview tab."
      questionOrder: "Zadržava izvorni redoslijed pitanja ili ih randomizira. Mogućnost \"Naslijedi\" primjenjuje postavku na razini upitnika (\"Original\" prema zadanim postavkama). Efekt ove postavke vidljiv je samo na kartici Pretpregled.",
      // "Sets the visibility of navigation buttons on the page. The \"Inherit\" option applies the survey-level setting, which defaults to \"Visible\"."
      showNavigationButtons: "Postavlja vidljivost navigacijskih gumba na stranici. Opcija \"Naslijedi\" primjenjuje postavku na razini upitnika, koja je zadana kao \"Vidljivo\".",
      // [Auto-translated] "This table lets you configure each grid column on the page. It automatically sets the width percentage for each column based on the maximum number of elements in a row. To customize the grid layout, manually adjust these values and define the title width for all questions in each column."
      gridLayoutColumns: "Ova tablica omogućuje konfiguriranje svakog stupca rešetke na stranici. Automatski postavlja postotak širine za svaki stupac na temelju maksimalnog broja elemenata u redu. Da biste prilagodili izgled rešetke, ručno prilagodite te vrijednosti i definirajte širinu naslova za sva pitanja u svakom stupcu."
    },
    // [Auto-translated] "Sets the location of a timer on a page."
    timerLocation: "Postavlja lokaciju mjerača vremena na stranici.",
    // "Choose from: \"Locked\" - users cannot expand or collapse entries; \"Collapse all\" - all entries start in a collapsed state; \"Expand all\" - all entries start in an expanded state; \"First expanded\" - only the first entry is initially expanded. Applies if \"Entry display mode\" is set to \"List\" and the \"Entry title pattern\" property is specified."
    panelsState: "Odaberite između: \"Zaključano\" - korisnici ne mogu proširiti ili sažeti ploče; \"Sažmite sve\" - sve ploče počinju u urušenom stanju; \"Proširite sve\" - sve ploče počinju u proširenom stanju; \"Prvo prošireno\" - samo je prva ploča u početku proširena.",
    // [Auto-translated] "Enter a shared property name within the array of objects that contains the image or video file URLs you want to display in the choice list."
    imageLinkName: "Unesite naziv zajedničkog svojstva unutar polja objekata koje sadrži URL-ove slike ili videodatoteke koje želite prikazati na popisu izbora.",
    // "The left value serves as an item ID used in conditional rules, the right value is displayed to respondents."
    choices: "Lijeva vrijednost služi kao ID artikla koji se koristi u uvjetnim pravilima, a ispitanicima se prikazuje prava vrijednost.",
    // [Auto-translated] "Type a user-friendly title to display."
    title: "Upišite naslov prilagođen korisniku za prikaz.",
    // [Auto-translated] "Ensures that users won't complete the survey until files are uploaded."
    waitForUpload: "Osigurava da korisnici neće dovršiti anketu dok se datoteke ne prenesu.",
    // [Auto-translated] "Accepts CSS values (px, %, in, pt, etc.)."
    minWidth: "Prihvaća CSS vrijednosti (px, %, in, pt itd.).",
    // [Auto-translated] "Accepts CSS values (px, %, in, pt, etc.)."
    maxWidth: "Prihvaća CSS vrijednosti (px, %, in, pt itd.).",
    // "Accepts CSS values (px, %, in, pt, etc.)."
    width: "Prihvaća CSS vrijednosti (px, %, in, pt itd.).",
    // [Auto-translated] "A join identifier is a custom key that you can assign to several questions to link them together and sync their values. These values will be merged into a single array or object and stored in survey results using the key as the property name."
    valueName: "Identifikator spoja prilagođeni je ključ koji možete dodijeliti nekoliko pitanja da biste ih povezali i sinkronizirali njihove vrijednosti. Te će se vrijednosti spojiti u jedan niz ili objekt i pohraniti u rezultate ankete koristeći ključ kao naziv svojstva.",
    // [Auto-translated] "A value displayed in HTML questions and in the dynamic titles and descriptions of survey elements when the question value is empty."
    defaultDisplayValue: "Vrijednost koja se prikazuje u HTML pitanjima te u dinamičkim naslovima i opisima elemenata upitnika kada je vrijednost pitanja prazna.",
    // [Auto-translated] "In single- and multiple-selection question types, each choice option has an ID and display value. When selected, this setting shows a display value instead of an ID value in HTML questions and dynamic titles and descriptions of survey elements."
    useDisplayValuesInDynamicTexts: "U vrstama pitanja s jednim i višestrukim odabirom svaka mogućnost izbora ima ID i vrijednost prikaza. Kada je odabrana, ova postavka prikazuje prikazanu vrijednost umjesto ID vrijednosti u HTML pitanjima te dinamičke naslove i opise elemenata upitnika.",
    // "Choose whether or not to clear question values hidden by conditional logic and when to do it. The \"Inherit\" option applies the survey-level setting (\"Upon survey completion\" by default)."
    clearIfInvisible: "Odaberite želite li očistiti vrijednosti pitanja skrivene uvjetnom logikom i kada to učiniti. Opcija \"Naslijedi\" prema zadanim postavkama primjenjuje postavku na razini upitnika (\"Nakon završetka ankete\").",
    // "Choose from: \"All\" - copies all choice options from the selected question; \"Selected\" - dynamically copies only selected choice options; \"Unselected\" - dynamically copies only unselected choice options. The \"None\" and \"Other\" options are copied by default if enabled in the source question."
    choicesFromQuestionMode: "Odaberite između: \"Sve\" - kopira sve opcije izbora iz odabranog pitanja; \"Odabrano\" - dinamički kopira samo odabrane opcije izbora; \"Neodabrano\" - dinamički kopira samo neodabrane opcije izbora. Opcije \"Ništa\" i \"Ostalo\" kopiraju se prema zadanim postavkama ako su omogućene u izvornom pitanju.",
    // [Auto-translated] "In single- and multiple-selection question types, each choice option has an ID and display value. This setting specifies which matrix column or panel question should provide the IDs."
    choiceValuesFromQuestion: "U vrstama pitanja s jednim i višestrukim odabirom svaka opcija izbora ima ID i vrijednost prikaza. Ova postavka određuje koji stupac matrice ili pitanje na ploči treba dati ID-ove.",
    // [Auto-translated] "In single- and multiple-selection question types, each choice option has an ID and display value. This setting specifies which matrix column or panel question should provide the display texts."
    choiceTextsFromQuestion: "U vrstama pitanja s jednim i višestrukim odabirom svaka opcija izbora ima ID i vrijednost prikaza. Ova postavka određuje koji stupac matrice ili pitanje na ploči treba pružiti tekstove za prikaz.",
    // [Auto-translated] "Select to let respondents add their own choices if the desired option isn't available in the dropdown. Custom choices will only be stored temporarily for the duration of the current browser session."
    allowCustomChoices: "Odaberite da biste ispitanicima omogućili dodavanje vlastitih izbora ako željena opcija nije dostupna na padajućem izborniku. Prilagođeni odabiri bit će pohranjeni samo privremeno za vrijeme trajanja trenutne sesije preglednika.",
    // [Auto-translated] "When selected, users can include additional input in a separate comment box."
    showOtherItem: "Kada je odabrano, korisnici mogu uključiti dodatni unos u zaseban okvir za komentare.",
    // "Displays each special choice option (\"None\", \"Other\", \"Select All\") on a new line, even when using a multiple-column layout."
    separateSpecialChoices: "Prikazuje svaku mogućnost posebnog izbora (\"Nema\", \"Ostalo\", \"Odaberi sve\") u novom retku, čak i kada koristite izgled s više stupaca.",
    // [Auto-translated] "Specify the location within the service dataset where the target array of objects is located. Leave empty if the URL already points to the array."
    path: "Navedite mjesto unutar skupa podataka o usluzi na kojem se nalazi ciljno polje objekata. Ostavite prazno ako URL već pokazuje na polje.",
    choicesbyurl: {
      // "Enter a uniform property name within the array of objects whose value will be stored as a response in survey results."
      valueName: " "
    },
    // [Auto-translated] "Enter a uniform property name within the array of objects that contains the values you want to display in the choice list."
    titleName: "Unesite jedinstveni naziv svojstva unutar polja objekata koje sadrži vrijednosti koje želite prikazati na popisu izbora.",
    // [Auto-translated] "Select to allow the service to return an empty response or array."
    allowEmptyResponse: "Odaberite da biste servisu dopustili vraćanje praznog odgovora ili polja.",
    // [Auto-translated] "Use the magic wand icon to set a conditional rule that determines the visibility of all choice options."
    choicesVisibleIf: "Pomoću ikone čarobnog štapića postavite uvjetno pravilo koje određuje vidljivost svih opcija izbora.",
    // [Auto-translated] "The left value serves as an item ID used in conditional rules, the right value is displayed to respondents."
    rateValues: "Lijeva vrijednost služi kao ID artikla koji se koristi u uvjetnim pravilima, a ispitanicima se prikazuje prava vrijednost.",
    rating: {
      // "\"Auto\" selects between the \"Buttons\" and \"Dropdown\" modes based on the available width. When the width is insufficient to display buttons, the question displays a dropdown."
      displayMode: "\"Automatski\" odabire između načina rada \"Gumbi\" i \"Padajući izbornik\" na temelju dostupne širine. Kada širina nije dovoljna za prikaz gumba, pitanje prikazuje padajući izbornik."
    },
    // [Auto-translated] "Allows you to connect questions that produce results in different formats. When such questions are linked together using a join identifier, this shared property stores selected question values."
    valuePropertyName: "Omogućuje povezivanje pitanja koja daju rezultate u različitim formatima. Kada su takva pitanja povezana pomoću identifikatora spoja, ovo zajedničko svojstvo pohranjuje odabrane vrijednosti pitanja.",
    // [Auto-translated] "Select if you want to update the drop-down menu contents to match the search query that a user is typing in the input field."
    searchEnabled: "Odaberite želite li ažurirati sadržaj padajućeg izbornika tako da odgovara upitu za pretraživanje koji korisnik upisuje u polje za unos.",
    // [Auto-translated] "A value to save in survey results when respondents give a positive answer."
    valueTrue: "Vrijednost koju treba uštedjeti u rezultatima ankete kada ispitanici daju pozitivan odgovor.",
    // [Auto-translated] "A value to save in survey results when respondents give a negative answer."
    valueFalse: "Vrijednost koju treba spremiti u rezultatima ankete kada ispitanici daju negativan odgovor.",
    // [Auto-translated] "It's not recommended that you disable this option as it overrides the Preview image and makes it hard for a user to understand whether the files have been uploaded."
    showPreview: "Ne preporučuje se da onemogućite ovu opciju jer ona nadjačava sliku pretpregleda i otežava korisniku da shvati jesu li datoteke prenesene.",
    // [Auto-translated] "Triggers a prompt asking to confirm the file deletion."
    needConfirmRemoveFile: "Pokreće upit u kojem se traži potvrda brisanja datoteke.",
    // [Auto-translated] "Enable to rank only selected choices. Users will drag selected items from the choice list to order them within the ranking area."
    selectToRankEnabled: "Omogućite rangiranje samo odabranih odabira. Korisnici će povući odabrane stavke s popisa izbora kako bi ih naručili unutar područja rangiranja.",
    // [Auto-translated] "Enter a list of choices that will be suggested to the respondent during input."
    dataList: "Unesite popis izbora koji će se predložiti ispitaniku tijekom unosa.",
    // [Auto-translated] "The setting only resizes the input fields and doesn't affect the width of the question box."
    inputSize: "Postavka samo mijenja veličinu ulaznih polja i ne utječe na širinu okvira pitanja.",
    // [Auto-translated] "Sets consistent width for all item labels. Accepts CSS values (px, %, in, pt, etc.)."
    itemTitleWidth: "Postavlja dosljednu širinu za sve oznake stavki. Prihvaća CSS vrijednosti (px, %, in, pt, itd.).",
    // "Select how to align input value within the field. The default setting \"Auto\" aligns the input value to the right if currency or numeric masking is applied and to the left if not."
    inputTextAlignment: "Odaberite način poravnanja ulazne vrijednosti unutar polja. Zadana postavka \"Automatski\" poravnava ulaznu vrijednost udesno ako se primjenjuje valutno ili numeričko maskiranje i ulijevo ako nije.",
    // [Auto-translated] "Serves as a substitute when the image cannot be displayed on a user's device and for accessibility purposes."
    altText: "Služi kao zamjena kada se slika ne može prikazati na korisnikovom uređaju i u svrhu pristupačnosti.",
    // "Defines the color of the selected emoji when the Rating icon type is set to \"Smileys\". Choose between: \"Default\" - the selected emoji appears in default survey color; \"Scale\" - the selected emoji inherits color from the rating scale."
    rateColorMode: "Definira boju odabranog emojija kada je vrsta ikone Ocjena postavljena na \"Smajlići\". Odaberite između: \"Zadano\" - odabrani emoji pojavljuje se u zadanoj boji ankete; \"Skala\" - odabrani emoji nasljeđuje boju od ljestvice ocjenjivanja.",
    expression: {
      // "An expression ID that is not visible to respondents."
      name: "ID izraza koji nije vidljiv ispitanicima.",
      // "Type an expression subtitle."
      description: "Upišite podnaslov izraza.",
      // "An expression can include basic calculations (`{q1_id} + {q2_id}`), conditions (`{age} > 60`), and functions ('iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, etc.)."
      expression: "Izraz može uključivati osnovne izračune ('{q1_id} + {q2_id}'), uvjete ('{age} > 60') i funkcije ('iif()', 'today()', 'age()', 'min()', 'max()', 'avg()', itd.)."
    },
    // "Select to store the \"Other\" option value as a separate property in survey results."
    storeOthersAsComment: "Odaberite za spremanje vrijednosti mogućnosti \"Ostalo\" kao zasebnog svojstva u rezultatima upitnika.",
    // [Auto-translated] "Use {0} as a placeholder for the actual value."
    format: "Koristite {0} kao rezervirano mjesto za stvarnu vrijednost.",
    // [Auto-translated] "Refer to the [accept](https://www.w3schools.com/tags/att_input_accept.asp) attribute description for more information."
    acceptedTypes: "Dodatne informacije potražite u opisu atributa [accept](https://www.w3schools.com/tags/att_input_accept.asp).",
    // [Auto-translated] "Arranges choice options in a multi-column layout. When set to 0, the options are displayed in a single line. Applies only to columns with \"Cell input type\" set to Radio Button Group or Checkboxes."
    columnColCount: "Raspoređuje opcije izbora u rasporedu s više stupaca. Kada je postavljena na 0, opcije se prikazuju u jednom retku. Primjenjuje se samo na stupce s opcijom \"Vrsta unosa ćelije\" postavljenom na Grupa izbornih gumba ili Potvrdne okvire.",
    // [Auto-translated] "Select the data type that the user's browser can retrieve. This data is sourced either from past values entered by the user or from pre-configured values if any have been saved by the user for autocompletion."
    autocomplete: "Odaberite vrstu podataka koju korisnikov preglednik može dohvatiti. Ti se podaci dobivaju iz prošlih vrijednosti koje je unio korisnik ili iz unaprijed konfiguriranih vrijednosti ako ih je korisnik spremio za automatsko dovršavanje.",
    // "Applies when \"File source type\" is \"Local file\" or when camera is unavailable"
    filePlaceholder: "Primjenjuje se kada je \"Vrsta izvora\" \"Lokalne datoteke\" ili kada kamera nije dostupna",
    // "Applies when \"File source type\" is \"Camera\"."
    photoPlaceholder: "Primjenjuje se kada je \"Vrsta izvora\" \"Kamera\".",
    // "Applies when \"File source type\" is \"Local file or camera\"."
    fileOrPhotoPlaceholder: "Primjenjuje se kada je \"Vrsta izvora\" \"Lokalne datoteke ili kamera\".",
    // "Arranges choice options in a multi-column layout. When set to 0, the options are displayed in a single line."
    colCount: "Raspoređuje opcije izbora u rasporedu s više stupaca. Kada je postavljena na 0, opcije se prikazuju u jednom retku.",
    masksettings: {
      // "Select if you want to store the question value with an applied mask in survey results."
      saveMaskedValue: "Odaberite želite li spremiti vrijednost pitanja s primijenjenom maskom u rezultatima upitnika."
    },
    patternmask: {
      // "The pattern can contain string literals and the following placeholders: `9` - for a digit; `a` - for an upper- or lower-case letter; `#` - for a digit or an upper- or lower-case letter. Use backslash `\\` to escape a character."
      pattern: "Uzorak može sadržavati slovne dijelove niza i sljedeća rezervirana mjesta: '9' - za znamenku; \"a\" – za veliko ili malo slovo; '#' - za znamenku ili veliko ili malo slovo. Koristite obrnutu kosu crtu '\\' da biste izbjegli znak."
    },
    datetimemask: {
      // "The pattern can contain separator characters and the following placeholders:<br>`m` - Month number.<br>`mm` - Month number, with leading zero for single-digit values.<br>`d` - Day of the month.<br>`dd` - Day of the month, with leading zero for single-digit values.<br>`yy` - The last two digits of the year.<br>`yyyy` - Four-digit year.<br>`H` - Hours in 24-hour format.<br>`HH` - Hours in 24-hour format, with leading zero for single-digit values.<br>`h` - Hours in 12-hour format.<br>`hh` - Hours in 12-hour format, with leading zero for single-digit values.<br>`MM` - Minutes.<br>`ss` - Seconds.<br>`TT` - 12-hour clock period in upper case (AM/PM).<br>`tt` - 12-hour clock period in lower case (am/pm)."
      pattern: "Uzorak može sadržavati znakove razdjelnika i sljedeća rezervirana mjesta:<br>'m' - Broj mjeseca.<br>'mm' - Broj mjeseca, s početnom nulom za jednoznamenkaste vrijednosti. <br>'d' - Dan u mjesecu. <br>'dd' - Dan u mjesecu, s početnom nulom za jednoznamenkaste vrijednosti. <br>'yy' - Posljednje dvije znamenke godine. <br>'gggg' - Četveroznamenkasta godina. <br>'H' - Sati u 24-satnom formatu. <br>'HH' - Sati u 24-satnom formatu, s početnom nulom za jednoznamenkaste vrijednosti. <br>'h' - Sati u 12-satnom formatu. <br>'hh' - Sati u 12-satnom formatu, s početnom nulom za jednoznamenkaste vrijednosti. <br>'MM' - Minute. <br>'ss' - Sekunde. <br>\"TT\" – razdoblje od 12 sati velikim slovima (AM/PM). <br>\"TT\" – 12-satno razdoblje u malim slovima (am/pm)."
    },
    numericmask: {
      // "A symbol used to separate the fractional part from the integer part of a displayed number."
      decimalSeparator: "Simbol koji se koristi za odvajanje djelomičnog dijela od cijelog broja prikazanog broja.",
      // "A symbol used to separate the digits of a large number into groups of three."
      thousandsSeparator: "Simbol koji se koristi za odvajanje znamenki velikog broja u grupe od tri.",
      // "Limits how many digits to retain after the decimal point for a displayed number."
      precision: "Ograničava broj znamenki koje treba zadržati nakon decimalnog zareza za prikazani broj."
    },
    currencymask: {
      // "One or several symbols to be displayed before the value."
      prefix: "Jedan ili više simbola koji će se prikazati prije vrijednosti.",
      // "One or several symbols to be displayed after the value."
      suffix: "Jedan ili više simbola koji će se prikazati nakon vrijednosti."
    },
    theme: {
      // "This setting applies only to questions outside of a panel."
      isPanelless: "Ova se postavka primjenjuje samo na pitanja izvan ploče.",
      // "Sets a supplementary color that highlights key survey elements."
      primaryColor: "Postavlja dodatnu boju koja ističe ključne elemente upitnika.",
      // "Adjusts the transparency of panels and question boxes relative to the survey background."
      panelBackgroundTransparency: "Prilagođava prozirnost panela i okvira s pitanjima u odnosu na pozadinu ankete.",
      // "Adjusts the transparency of input elements relative to the survey background."
      questionBackgroundTransparency: "Prilagođava prozirnost ulaznih elemenata u odnosu na pozadinu upitnika.",
      // "Sets the corner radius for all rectangular elements. Enable the Advanced Mode if you want to set individual corner radius values for input elements or panels and question boxes."
      cornerRadius: "Postavlja polumjer kuta za sve pravokutne elemente. Omogućite napredni način rada ako želite postaviti pojedinačne vrijednosti radijusa kuta za ulazne elemente ili ploče i okvire s pitanjima.",
      // "Sets the main background color of the survey."
      "--sjs-general-backcolor-dim": "Postavlja glavnu boju pozadine upitnika."
    },
    header: {
      // "The \"Same as container\" option auto-adjusts the header content area width to fit into the HTML element the survey is placed in."
      inheritWidthFrom: "Opcija \"Isto kao spremnik\" automatski prilagođava širinu područja sadržaja zaglavlja kako bi se uklopila u HTML element u koji je upitnik postavljen.",
      // [Auto-translated] "The width of the header area that contains the survey title and description, measured in pixels."
      textAreaWidth: "Širina područja zaglavlja koje sadrži naslov i opis upitnika, mjerena u pikselima.",
      // [Auto-translated] "When enabled, the top of the survey overlays the bottom of the header."
      overlapEnabled: "Kada je omogućeno, vrh upitnika prekriva dno zaglavlja.",
      // [Auto-translated] "When set to 0, the height is calculated automatically to accommodate the header's content."
      mobileHeight: "Kada je postavljena na 0, visina se automatski izračunava kako bi se prilagodio sadržaju zaglavlja."
    },
    // "The \"Same as container\" option auto-adjusts the progress bar area width to fit into the HTML element the survey is placed in."
    progressBarInheritWidthFrom: "Opcija \"Isto kao spremnik\" automatski prilagođava širinu područja trake napretka kako bi se uklopila u HTML element u koji je upitnik postavljen.",
    // [Auto-translated] "Used when the 'Survey layout' is set to 'Single input field per page'. In this layout, the matrix is split so that each input field appears on a separate page. Use the {rowIndex} placeholder to insert auto numbering, {rowTitle} or {rowName} to reference the row's title or ID, and {row.columnid} to include the value of a specific matrix column."
    singleInputTitleTemplate: "Koristi se kada je 'Izgled upitnika' postavljen na 'Jedno polje za unos po stranici'. U ovom izgledu matrica je podijeljena tako da se svako polje za unos prikazuje na zasebnoj stranici. Upotrijebite rezervirano mjesto {rowIndex} za umetanje automatskog numeriranja, {rowTitle} ili {rowName} za referencu na naslov ili ID retka, a {row.columnid} za uključivanje vrijednosti određenog stupca matrice."
  },
  // Properties
  p: {
    title: {
      // "title"
      name: "title",
      // "Leave it empty, if it is the same as 'Name'"
      title: "Ostavite prazno, ako je isto kao 'Name'"
    },
    // [Auto-translated] "Allow multiple selection"
    multiSelect: "Dopusti višestruki odabir",
    // [Auto-translated] "Show image and video captions"
    showLabel: "Prikaz opisa slika i videozapisa",
    // [Auto-translated] "Swap the order of Yes and No"
    swapOrder: "Zamjena redoslijeda Da i Ne",
    // [Auto-translated] "Value"
    value: "Vrijednost",
    // [Auto-translated] "Tab alignment"
    tabAlign: "Poravnanje tabulatora",
    // [Auto-translated] "File source type"
    sourceType: "Vrsta izvora datoteke",
    // [Auto-translated] "Fit to container"
    fitToContainer: "Prilagodi spremniku",
    // [Auto-translated] "Set value expression"
    setValueExpression: "Postavljanje izraza vrijednosti",
    // "Description"
    description: "description", // Auto-generated string
    // [Auto-translated] "Logo fit"
    logoFit: "Prilagođavanje logotipa",
    // [Auto-translated] "Pages"
    pages: "Stranice", // Auto-generated string
    // [Auto-translated] "Questions"
    questions: "Pitanja", // Auto-generated string
    // "Triggers"
    triggers: "triggers",
    // [Auto-translated] "Custom variables"
    calculatedValues: "Prilagođene varijable",
    // [Auto-translated] "Survey id"
    surveyId: "ID upitnika", // Auto-generated string
    // [Auto-translated] "Survey post id"
    surveyPostId: "ID objave upitnika", // Auto-generated string
    // [Auto-translated] "Survey show data saving"
    surveyShowDataSaving: "Anketa pokazuje spremanje podataka", // Auto-generated string
    // [Auto-translated] "Question description alignment"
    questionDescriptionLocation: "Usklađivanje opisa pitanja",
    // [Auto-translated] "Progress bar type"
    progressBarType: "Vrsta trake napretka", // Auto-generated string
    // [Auto-translated] "Show table of contents (TOC)"
    showTOC: "Prikaži sadržaj (TOC)",
    // [Auto-translated] "TOC alignment"
    tocLocation: "Usklađivanje TOC-a",
    // [Auto-translated] "Question title pattern"
    questionTitlePattern: "Uzorak naslova pitanja", // Auto-generated string
    // [Auto-translated] "Survey width mode"
    widthMode: "Način prikaza širine",
    // [Auto-translated] "Show brand info"
    showBrandInfo: "Pokaži informacije o robnoj marki", // Auto-generated string
    // [Auto-translated] "Use display values in dynamic texts"
    useDisplayValuesInDynamicTexts: "Korištenje vrijednosti prikaza u dinamičkim tekstovima",
    // "Visible if"
    visibleIf: "visibleIf", // Auto-generated string
    // [Auto-translated] "Default value expression"
    defaultValueExpression: "Zadani izraz vrijednosti",
    // "Required if"
    requiredIf: "requiredIf", // Auto-generated string
    // [Auto-translated] "Reset value if"
    resetValueIf: "Vrati izvornu vrijednost ako",
    // [Auto-translated] "Set value if"
    setValueIf: "Postavi vrijednost ako",
    // "Validation rules"
    validators: "validators",
    // [Auto-translated] "Bindings"
    bindings: "Vezovi", // Auto-generated string
    // [Auto-translated] "Render as"
    renderAs: "Iscrtaj kao", // Auto-generated string
    // [Auto-translated] "Attach original items"
    attachOriginalItems: "Priloži izvorne stavke", // Auto-generated string
    // "Choices"
    choices: "choices",
    // "Choices by url"
    choicesByUrl: "choicesByUrl", // Auto-generated string
    // "Currency"
    currency: "currency", // Auto-generated string
    // [Auto-translated] "Cell hint"
    cellHint: "Savjet za ćeliju", // Auto-generated string
    // [Auto-translated] "Total maximum fraction digits"
    totalMaximumFractionDigits: "Ukupan maksimalni broj znamenki razlomka", // Auto-generated string
    // [Auto-translated] "Total minimum fraction digits"
    totalMinimumFractionDigits: "Ukupan minimum znamenki razlomka", // Auto-generated string
    // "Columns"
    columns: "columns", // Auto-generated string
    // [Auto-translated] "Detail elements"
    detailElements: "Elementi detalja", // Auto-generated string
    // [Auto-translated] "Allow adaptive actions"
    allowAdaptiveActions: "Dopusti prilagodljive radnje", // Auto-generated string
    // "Default row value"
    defaultRowValue: "defaultRowValue", // Auto-generated string
    // [Auto-translated] "Auto-expand new row details"
    detailPanelShowOnAdding: "Automatsko proširenje pojedinosti o novom retku",
    // [Auto-translated] "Choices lazy load enabled"
    choicesLazyLoadEnabled: "Omogućeno lijeno opterećenje izbora", // Auto-generated string
    // [Auto-translated] "Choices lazy load page size"
    choicesLazyLoadPageSize: "Odabiri lijeno učitavanje veličine stranice", // Auto-generated string
    // [Auto-translated] "Input field component"
    inputFieldComponent: "Komponenta polja za unos", // Auto-generated string
    // [Auto-translated] "Item component"
    itemComponent: "Komponenta artikla", // Auto-generated string
    // [Auto-translated] "Min"
    min: "Min", // Auto-generated string
    // [Auto-translated] "Max"
    max: "Max", // Auto-generated string
    // [Auto-translated] "Min value expression"
    minValueExpression: "Izraz minimalne vrijednosti", // Auto-generated string
    // [Auto-translated] "Max value expression"
    maxValueExpression: "Izraz maksimalne vrijednosti", // Auto-generated string
    // [Auto-translated] "Step"
    step: "Korak", // Auto-generated string
    // [Auto-translated] "Items for auto-suggest"
    dataList: "Stavke za automatsko predlaganje",
    // "Input field width (in characters)"
    inputSize: "inputSize",
    // [Auto-translated] "Item label width"
    itemTitleWidth: "Širina naljepnice artikla",
    // [Auto-translated] "Input value alignment"
    inputTextAlignment: "Usklađivanje ulaznih vrijednosti",
    // [Auto-translated] "Elements"
    elements: "Elemenata", // Auto-generated string
    // [Auto-translated] "Content"
    content: "Sadržaj", // Auto-generated string
    // [Auto-translated] "Navigation title"
    navigationTitle: "Naslov navigacije", // Auto-generated string
    // [Auto-translated] "Navigation description"
    navigationDescription: "Opis navigacije", // Auto-generated string
    // [Auto-translated] "Long tap"
    longTap: "Dugi dodir", // Auto-generated string
    // [Auto-translated] "Expand input field dynamically"
    autoGrow: "Dinamičko proširivanje polja za unos",
    // [Auto-translated] "Enable resize handle"
    allowResize: "Omogući ručicu za promjenu veličine",
    // [Auto-translated] "Accept carriage return"
    acceptCarriageReturn: "Prihvati povratak prijevoza", // Auto-generated string
    // [Auto-translated] "Display mode"
    displayMode: "Način prikaza",
    // [Auto-translated] "Rate type"
    rateType: "Vrsta stope", // Auto-generated string
    // "Label"
    label: "label", // Auto-generated string
    // [Auto-translated] "Content mode"
    contentMode: "Način sadržaja",
    // [Auto-translated] "Image and thumbnail fit"
    imageFit: "Slika i sličica se uklapaju",
    // [Auto-translated] "Alt text"
    altText: "Zamjenski tekst",
    // [Auto-translated] "Height"
    height: "Visina", // Auto-generated string
    // [Auto-translated] "Height on smartphones"
    mobileHeight: "Visina na pametnim telefonima",
    // [Auto-translated] "Pen color"
    penColor: "Boja olovke", // Auto-generated string
    // [Auto-translated] "Background color"
    backgroundColor: "Boja pozadine",
    // [Auto-translated] "Template elements"
    templateElements: "Elementi predloška", // Auto-generated string
    // [Auto-translated] "Operator"
    operator: "Operator", // Auto-generated string
    // [Auto-translated] "Is variable"
    isVariable: "Je promjenjivo", // Auto-generated string
    // [Auto-translated] "Run expression"
    runExpression: "Pokreni izraz", // Auto-generated string
    // [Auto-translated] "Show caption"
    showCaption: "Pokaži opis", // Auto-generated string
    // [Auto-translated] "Icon name"
    iconName: "Naziv ikone", // Auto-generated string
    // [Auto-translated] "Icon size"
    iconSize: "Veličina ikone", // Auto-generated string
    // [Auto-translated] "Precision"
    precision: "Preciznost", // Auto-generated string
    // [Auto-translated] "Matrix drag handle area"
    matrixDragHandleArea: "Područje držača za povlačenje matrice", // Auto-generated string
    // [Auto-translated] "Background image"
    backgroundImage: "Pozadinska slika",
    // [Auto-translated] "Background image fit"
    backgroundImageFit: "Prilagodba pozadinske slike", // Auto-generated string
    // [Auto-translated] "Background image attachment"
    backgroundImageAttachment: "Privitak pozadinske slike", // Auto-generated string
    // [Auto-translated] "Background opacity"
    backgroundOpacity: "Neprozirnost pozadine", // Auto-generated string
    // [Auto-translated] "Allow selective ranking"
    selectToRankEnabled: "Dopusti selektivno rangiranje",
    // [Auto-translated] "Ranking area alignment"
    selectToRankAreasLayout: "Poravnanje područja rangiranja",
    // [Auto-translated] "Text to show if all options are selected"
    selectToRankEmptyRankedAreaText: "Tekst koji prikazuje jesu li odabrane sve mogućnosti",
    // [Auto-translated] "Placeholder text for the ranking area"
    selectToRankEmptyUnrankedAreaText: "Tekst rezerviranog mjesta za područje rangiranja",
    // [Auto-translated] "Allow camera access"
    allowCameraAccess: "Dopusti pristup kameri", // Auto-generated string
    // [Auto-translated] "Rating icon color mode"
    scaleColorMode: "Način boje ikone ocjenjivanja",
    // [Auto-translated] "Smileys color scheme"
    rateColorMode: "Shema boja smajlića",
    // [Auto-translated] "Copy display value"
    copyDisplayValue: "Kopiraj vrijednost prikaza", // Auto-generated string
    // [Auto-translated] "Column span"
    effectiveColSpan: "Raspon stupaca",
    // [Auto-translated] "Progress bar area width"
    progressBarInheritWidthFrom: "Širina područja trake napretka",
    // [Auto-translated] "Theme name"
    themeName: "Naziv teme"
  },
  theme: {
    // "Advanced mode"
    advancedMode: "Napredni način rada",
    // "Page"
    pageTitle: "Font naslova stranice",
    // "Question box"
    questionTitle: "Font naslova pitanja",
    // "Input element"
    editorPanel: "Ulazni element",
    // [Auto-translated] "Lines"
    lines: "Linije",
    // [Auto-translated] "Default"
    primaryDefaultColor: "Propust",
    // [Auto-translated] "Hover"
    primaryDarkColor: "Lebdjeti",
    // [Auto-translated] "Selected"
    primaryLightColor: "Odabrani",
    // [Auto-translated] "Background color"
    backgroundDimColor: "Boja pozadine",
    // "Corner radius"
    cornerRadius: "Kutni radijus",
    // [Auto-translated] "Default background"
    backcolor: "Zadana pozadina",
    // [Auto-translated] "Hover background"
    hovercolor: "Pozadina držanja pokazivača miša",
    // [Auto-translated] "Border decoration"
    borderDecoration: "Uređenje obruba",
    // [Auto-translated] "Font color"
    fontColor: "Boja fonta",
    // [Auto-translated] "Background color"
    backgroundColor: "Boja pozadine",
    // [Auto-translated] "Default color"
    primaryForecolor: "Zadana boja",
    // [Auto-translated] "Disabled color"
    primaryForecolorLight: "Onemogućena boja",
    // [Auto-translated] "Font"
    font: "Krstionica",
    // [Auto-translated] "Darker"
    borderDefault: "Tamnije",
    // [Auto-translated] "Lighter"
    borderLight: "Upaljač",
    // [Auto-translated] "Font family"
    fontFamily: "Obitelj fontova",
    // [Auto-translated] "Regular"
    fontWeightRegular: "Redovan",
    // [Auto-translated] "Heavy"
    fontWeightHeavy: "Težak",
    // [Auto-translated] "Semi-bold"
    fontWeightSemiBold: "Polupodebljano",
    // [Auto-translated] "Bold"
    fontWeightBold: "Odvažan",
    // [Auto-translated] "Color"
    color: "Boja",
    // [Auto-translated] "Placeholder color"
    placeholderColor: "Boja rezerviranog mjesta",
    // [Auto-translated] "Size"
    size: "Veličina",
    // [Auto-translated] "Opacity"
    opacity: "Neprozirnost",
    // [Auto-translated] "X"
    boxShadowX: "X",
    // [Auto-translated] "Y"
    boxShadowY: "Y",
    // [Auto-translated] "Add Shadow Effect"
    boxShadowAddRule: "Dodaj efekt sjene",
    // [Auto-translated] "Blur"
    boxShadowBlur: "Mrlja",
    // [Auto-translated] "Spread"
    boxShadowSpread: "Širenje",
    // [Auto-translated] "Drop"
    boxShadowDrop: "Ispustiti",
    // [Auto-translated] "Inner"
    boxShadowInner: "Unutarnji",
    names: {
      // [Auto-translated] "Default"
      default: "Propust",
      // [Auto-translated] "Sharp"
      sharp: "Oštar",
      // [Auto-translated] "Borderless"
      borderless: "Bez obruba",
      // [Auto-translated] "Flat"
      flat: "Stan",
      // [Auto-translated] "Plain"
      plain: "Ravnica",
      // [Auto-translated] "Double Border"
      doubleborder: "Dvostruki obrub",
      // [Auto-translated] "Layered"
      layered: "Slojevita",
      // [Auto-translated] "Solid"
      solid: "Solidan",
      // [Auto-translated] "3D"
      threedimensional: ".3D",
      // [Auto-translated] "Contrast"
      contrast: "Razlika"
    },
    colors: {
      // [Auto-translated] "Teal"
      teal: "Teal",
      // [Auto-translated] "Blue"
      blue: "Plav",
      // [Auto-translated] "Purple"
      purple: "Ljubičast",
      // [Auto-translated] "Orchid"
      orchid: "Orhideja",
      // [Auto-translated] "Tulip"
      tulip: "Lala",
      // [Auto-translated] "Brown"
      brown: "Smeđ",
      // [Auto-translated] "Green"
      green: "Zelen",
      // [Auto-translated] "Gray"
      gray: "Siv"
    }
  },
  creatortheme: {
    // [Auto-translated] "Surface background"
    "--sjs-special-background": "Pozadina površine",
    // [Auto-translated] "Primary"
    "--sjs-primary-background-500": "Glavni",
    // [Auto-translated] "Secondary"
    "--sjs-secondary-background-500": "Sekundaran",
    // [Auto-translated] "Surface"
    surfaceScale: "Površina",
    // [Auto-translated] "UI elements"
    userInterfaceBaseUnit: "Elementi korisničkog sučelja",
    // [Auto-translated] "Font"
    fontScale: "Krstionica",
    names: {
      // [Auto-translated] "Survey Creator 2020"
      sc2020: "Kreator ankete 2020",
      // [Auto-translated] "Light"
      "default-light": "Svjetlo",
      // [Auto-translated] "Dark"
      "default-dark": "Mračan",
      // [Auto-translated] "Contrast"
      "default-contrast": "Razlika"
    }
  }
};
setupLocale({ localeCode: "hr", strings: hrStrings });