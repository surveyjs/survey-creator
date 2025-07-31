import { setupLocale } from "survey-creator-core";

export var polishStrings = {
  // survey templates
  survey: {
    // "Edit"
    edit: "Edytuj",
    // [Auto-translated] "Watch and learn how to create surveys"
    externalHelpLink: "Obejrzyj i dowiedz się, jak tworzyć ankiety",
    // [Auto-translated] "https://www.youtube.com/channel/UCH2ru9okIcooNZfpIbyq4qQ?view_as=subscriber"
    externalHelpLinkUrl: "https://www.youtube.com/channel/UCH2ru9okIcooNZfpIbyq4qQ?view_as=subscriber",
    // "Please drop a question here from the Toolbox."
    dropQuestion: "Przeciągnij pytanie.",
    // [Auto-translated] "Create a rule to customize the flow of the survey."
    addLogicItem: "Utwórz regułę, aby dostosować przepływ ankiety.",
    // "Copy"
    copy: "Kopiuj",
    // [Auto-translated] "Duplicate"
    duplicate: "Duplikat",
    // "Add to toolbox"
    addToToolbox: "Dodaj do palety",
    // "Delete Panel"
    deletePanel: "Usuń panel",
    // "Delete Question"
    deleteQuestion: "Usuń pytanie",
    // "Convert to"
    convertTo: "Konwertuj na",
    // [Auto-translated] "Drag element"
    drag: "Przeciągnij element"
  },
  // Creator tabs
  tabs: {
    // "Preview"
    preview: "Testuj ankietę",
    // "Themes"
    theme: "Tematy",
    // "Translations"
    translation: "Tłumaczenie",
    // "Designer"
    designer: "Projektant ankiety",
    // "JSON Editor"
    json: "JSON Editor",
    // [Auto-translated] "Logic"
    logic: "Logika"
  },
  // Question types
  qt: {
    // [Auto-translated] "Default"
    default: "Domyślny",
    // "Checkboxes"
    checkbox: "Wielokrotny wybór",
    // "Long Text"
    comment: "Komentarz",
    // [Auto-translated] "Image Picker"
    imagepicker: "Selektor obrazów",
    // [Auto-translated] "Ranking"
    ranking: "Ranking",
    // [Auto-translated] "Image"
    image: "Obraz",
    // "Dropdown"
    dropdown: "Lista wyboru",
    // [Auto-translated] "Multi-Select Dropdown"
    tagbox: "Lista rozwijana Multi-Select",
    // "File Upload"
    file: "Plik",
    // "HTML"
    html: "Html",
    // "Single-Select Matrix"
    matrix: "Macierz (jednokrotny wybór)",
    // "Multi-Select Matrix"
    matrixdropdown: "Matrix (wielokrotny wybór)",
    // "Dynamic Matrix"
    matrixdynamic: "Matrix (dynamiczne wiersze)",
    // "Multiple Textboxes"
    multipletext: "Wiele linii tekstu",
    // "Panel"
    panel: "Panel",
    // "Dynamic Panel"
    paneldynamic: "Panel (dynamiczne panele)",
    // "Radio Button Group"
    radiogroup: "Jednokrotny wybór",
    // "Rating Scale"
    rating: "Ocena",
    // [Auto-translated] "Slider"
    slider: "Suwak",
    // "Single-Line Input"
    text: "Pojedyncza odpowiedź",
    // "Yes/No (Boolean)"
    boolean: "Prawda/Fałsz",
    // "Expression (read-only)"
    expression: "Wyrażenie",
    // [Auto-translated] "Signature"
    signaturepad: "Podpis",
    // [Auto-translated] "Button Group"
    buttongroup: "Grupa przycisków"
  },
  toolboxCategories: {
    // "General"
    general: "Ogólne",
    // "Choice Questions"
    choice: "Pytania wyboru",
    // "Text Input Questions"
    text: "Pytania dotyczące wprowadzania tekstu",
    // "Containers"
    containers: "Pojemniki",
    // "Matrix Questions"
    matrix: "Pytania macierzowe",
    // "Misc"
    misc: "Różne"
  },
  // Strings in SurveyJS Creator
  ed: {
    // [Auto-translated] "Default ({0})"
    defaultLocale: "Domyślne ({0})",
    // "Survey"
    survey: "Ankieta",
    // [Auto-translated] "Settings"
    settings: "Ustawienia",
    // [Auto-translated] "Open settings"
    settingsTooltip: "Otwórz ustawienia",
    // [Auto-translated] "Survey Settings"
    surveySettings: "Ustawienia ankiety",
    // [Auto-translated] "Open survey settings"
    surveySettingsTooltip: "Ustawienia ankiety",
    // [Auto-translated] "Theme Settings"
    themeSettings: "Ustawienia motywu",
    // [Auto-translated] "Open theme settings"
    themeSettingsTooltip: "Ustawienia motywu",
    // [Auto-translated] "Creator Settings"
    creatorSettingTitle: "Ustawienia twórcy",
    // [Auto-translated] "Show Panel"
    showPanel: "Pokaż panel",
    // [Auto-translated] "Hide Panel"
    hidePanel: "Panel Ukryj",
    // [Auto-translated] "Select previous"
    prevSelected: "Wybierz poprzedni",
    // [Auto-translated] "Select next"
    nextSelected: "Wybierz następny",
    // [Auto-translated] "Focus previous"
    prevFocus: "Fokus poprzedni",
    // [Auto-translated] "Focus next"
    nextFocus: "Ostrość następna",
    // [Auto-translated] "Survey"
    surveyTypeName: "Sondaż",
    // [Auto-translated] "Page"
    pageTypeName: "Strona",
    // [Auto-translated] "Panel"
    panelTypeName: "Panel",
    // [Auto-translated] "Question"
    questionTypeName: "Pytanie",
    // [Auto-translated] "Column"
    columnTypeName: "Kolumna",
    // "Add New Page"
    addNewPage: "Dodaj nową sekcję",
    // [Auto-translated] "Scroll to the Right"
    moveRight: "Przewiń w prawo",
    // [Auto-translated] "Scroll to the Left"
    moveLeft: "Przewiń w lewo",
    // "Delete Page"
    deletePage: "Usuń sekcję",
    // "Edit Page"
    editPage: "Edytuj sekcję",
    // [Auto-translated] "Edit"
    edit: "Redagować",
    // "page"
    newPageName: "sekcja",
    // "question"
    newQuestionName: "pytanie",
    // "panel"
    newPanelName: "panel",
    // [Auto-translated] "text"
    newTextItemName: "Tekst",
    // [Auto-translated] "Default"
    defaultV2Theme: "Domyślny",
    // [Auto-translated] "Modern"
    modernTheme: "Nowoczesny",
    // [Auto-translated] "Default (legacy)"
    defaultTheme: "Domyślne (starsze)",
    // "Preview Survey Again"
    testSurveyAgain: "Testuj ponownie",
    // "Survey width: "
    testSurveyWidth: "Szerokość ankiety: ",
    // [Auto-translated] "You had to navigate to"
    navigateToMsg: "Trzeba było nawigować do",
    // "Save Survey"
    saveSurvey: "Zapisz ankietę",
    // [Auto-translated] "Save Survey"
    saveSurveyTooltip: "Zapisz ankietę",
    // [Auto-translated] "Save Theme"
    saveTheme: "Zapisz motyw",
    // [Auto-translated] "Save Theme"
    saveThemeTooltip: "Zapisz motyw",
    // [Auto-translated] "Hide errors"
    jsonHideErrors: "Ukryj błędy",
    // [Auto-translated] "Show errors"
    jsonShowErrors: "Pokaż błędy",
    // "Undo"
    undo: "Cofnij",
    // "Redo"
    redo: "Ponów",
    // [Auto-translated] "Undo last change"
    undoTooltip: "Cofanie ostatniej zmiany",
    // [Auto-translated] "Redo the change"
    redoTooltip: "Ponowne wprowadzanie zmian",
    // [Auto-translated] "Expand"
    expandTooltip: "Rozszerzać",
    // [Auto-translated] "Collapse"
    collapseTooltip: "Zapaść",
    // "Expand All"
    expandAllTooltip: "Rozwiń wszystko",
    // "Collapse All"
    collapseAllTooltip: "Zwiń wszystko",
    // [Auto-translated] "Zoom In"
    zoomInTooltip: "Powiększenie",
    // [Auto-translated] "Zoom to 100%"
    zoom100Tooltip: "Powiększenie do 100%",
    // [Auto-translated] "Zoom Out"
    zoomOutTooltip: "Pomniejszanie",
    // [Auto-translated] "Lock expand/collapse state for questions"
    lockQuestionsTooltip: "Zablokuj stan rozwijania/zwijania dla pytań",
    // [Auto-translated] "Show more"
    showMoreChoices: "Pokaż więcej",
    // [Auto-translated] "Show less"
    showLessChoices: "Pokaż mniej",
    // [Auto-translated] "Copy"
    copy: "Kopiować",
    // [Auto-translated] "Cut"
    cut: "Ciąć",
    // [Auto-translated] "Paste"
    paste: "Wklejać",
    // [Auto-translated] "Copy selection to clipboard"
    copyTooltip: "Kopiuj zaznaczenie do schowka",
    // [Auto-translated] "Cut selection to clipboard"
    cutTooltip: "Wytnij zaznaczenie do schowka",
    // [Auto-translated] "Paste from clipboard"
    pasteTooltip: "Wklejanie ze schowka",
    // "Options"
    options: "Opcje",
    // "Generate Valid JSON"
    generateValidJSON: "Generate Valid JSON",
    // "Generate Readable JSON"
    generateReadableJSON: "Generate Readable JSON",
    // "Toolbox"
    toolbox: "Paleta",
    // [Auto-translated] "Properties"
    "property-grid": "Właściwości",
    // [Auto-translated] "Search"
    toolboxSearch: "Szukać",
    // [Auto-translated] "Type to search..."
    toolboxFilteredTextPlaceholder: "Wpisz, aby wyszukać...",
    // [Auto-translated] "No results found"
    toolboxNoResultsFound: "Nie znaleziono wyników",
    // [Auto-translated] "Type to search..."
    propertyGridFilteredTextPlaceholder: "Wpisz, aby wyszukać...",
    // [Auto-translated] "No results found"
    propertyGridNoResultsFound: "Nie znaleziono wyników",
    // [Auto-translated] "Start configuring your form"
    propertyGridPlaceholderTitle: "Rozpocznij konfigurowanie formularza",
    // [Auto-translated] "Click any category icon to explore survey settings. Additional settings will become available once you add a survey element to the design surface."
    propertyGridPlaceholderDescription: "Kliknij dowolną ikonę kategorii, aby zapoznać się z ustawieniami ankiety. Dodatkowe ustawienia staną się dostępne po dodaniu elementu ankiety do powierzchni projektowej.",
    // "Please correct JSON."
    correctJSON: "Please correct JSON.",
    // "Survey Results "
    surveyResults: "Wynik ankiety: ",
    // [Auto-translated] "As Table"
    surveyResultsTable: "Jako tabela",
    // [Auto-translated] "As JSON"
    surveyResultsJson: "Jako JSON",
    // [Auto-translated] "Question Title"
    resultsTitle: "Tytuł pytania",
    // [Auto-translated] "Question Name"
    resultsName: "Nazwa pytania",
    // [Auto-translated] "Answer Value"
    resultsValue: "Wartość odpowiedzi",
    // [Auto-translated] "Display Value"
    resultsDisplayValue: "Wyświetl wartość",
    // "Modified"
    modified: "Zmodyfikowana",
    // "Saving"
    saving: "Trwa zapis",
    // "Saved"
    saved: "Zapisano",
    // [Auto-translated] "Error"
    propertyEditorError: "Błąd",
    // [Auto-translated] "Error! Editor content is not saved."
    saveError: "Błąd! Zawartość edytora nie jest zapisywana.",
    // [Auto-translated] "Language Settings"
    translationPropertyGridTitle: "Ustawienia językowe",
    // [Auto-translated] "Theme Settings"
    themePropertyGridTitle: "Ustawienia motywu",
    // [Auto-translated] "Add Language"
    addLanguageTooltip: "Dodaj język",
    // [Auto-translated] "Languages"
    translationLanguages: "Języki",
    // [Auto-translated] "Are you certain you wish to delete all strings for this language?"
    translationDeleteLanguage: "Czy na pewno chcesz usunąć wszystkie ciągi znaków dla tego języka?",
    // [Auto-translated] "Select language to translate"
    translationAddLanguage: "Wybierz język do przetłumaczenia",
    // [Auto-translated] "All Strings"
    translationShowAllStrings: "Wszystkie struny",
    // [Auto-translated] "Used Strings Only"
    translationShowUsedStringsOnly: "Tylko używane ciągi",
    // [Auto-translated] "All Pages"
    translationShowAllPages: "Wszystkie strony",
    // [Auto-translated] "No strings to translate. Please, change the filter."
    translationNoStrings: "Brak ciągów do przetłumaczenia. Proszę zmienić filtr.",
    // [Auto-translated] "Export to CSV"
    translationExportToSCVButton: "Eksport do pliku CSV",
    // [Auto-translated] "Import from CSV"
    translationImportFromSCVButton: "Importowanie z pliku CSV",
    // [Auto-translated] "Auto-translate All"
    translateUsigAI: "Automatycznie tłumacz wszystko",
    // [Auto-translated] "Translate from: "
    translateUsigAIFrom: "Przetłumacz z: ",
    // [Auto-translated] "Untranslated strings"
    translationDialogTitle: "Nieprzetłumaczone ciągi znaków",
    // [Auto-translated] "Merge {0} with default locale"
    translationMergeLocaleWithDefault: "Scalanie {0} z domyślnymi ustawieniami regionalnymi",
    // [Auto-translated] "Translation..."
    translationPlaceHolder: "Tłumaczenie...",
    // [Auto-translated] "Source: "
    translationSource: "Źródło: ",
    // [Auto-translated] "Target: "
    translationTarget: "Cel: ",
    // [Auto-translated] "YouTube links are not supported."
    translationYouTubeNotSupported: "Linki do YouTube nie są obsługiwane.",
    // [Auto-translated] "Export"
    themeExportButton: "Eksport",
    // [Auto-translated] "Import"
    themeImportButton: "Import",
    // [Auto-translated] "Export"
    surveyJsonExportButton: "Eksport",
    // [Auto-translated] "Import"
    surveyJsonImportButton: "Import",
    // [Auto-translated] "Copy to clipboard"
    surveyJsonCopyButton: "Kopiuj do schowka",
    // [Auto-translated] "Reset theme settings to default"
    themeResetButton: "Przywracanie domyślnych ustawień motywu",
    // [Auto-translated] "Do you really want to reset the theme? All your customizations will be lost."
    themeResetConfirmation: "Czy naprawdę chcesz zresetować motyw? Wszystkie Twoje dostosowania zostaną utracone.",
    // [Auto-translated] "Yes, reset the theme"
    themeResetConfirmationOk: "Tak, zresetuj motyw",
    // [Auto-translated] "Bold"
    bold: "Śmiały",
    // [Auto-translated] "Italic"
    italic: "Kursywa",
    // [Auto-translated] "Underline"
    underline: "Podkreślać",
    // [Auto-translated] "Add Question"
    addNewQuestion: "Dodaj pytanie",
    // [Auto-translated] "Select page..."
    selectPage: "Wybierz stronę...",
    // [Auto-translated] "Choices are copied from"
    carryForwardChoicesCopied: "Wybory są kopiowane z",
    // [Auto-translated] "Choices are loaded from a web service."
    choicesLoadedFromWebText: "Opcje są ładowane z usługi internetowej.",
    // [Auto-translated] "Go to settings"
    choicesLoadedFromWebLinkText: "Przejdź do ustawień",
    // [Auto-translated] "Preview of loaded choice options"
    choicesLoadedFromWebPreviewTitle: "Podgląd wczytanych opcji wyboru",
    // [Auto-translated] "HTML content will be here."
    htmlPlaceHolder: "Zawartość HTML będzie tutaj.",
    // [Auto-translated] "Drop a question from the toolbox here."
    panelPlaceHolder: "Upuść pytanie z przybornika tutaj.",
    // [Auto-translated] "The survey is empty. Drag an element from the toolbox or click the button below."
    surveyPlaceHolder: "Ankieta jest pusta. Przeciągnij element z przybornika lub kliknij przycisk poniżej.",
    // [Auto-translated] "The page is empty. Drag an element from the toolbox or click the button below."
    pagePlaceHolder: "Strona jest pusta. Przeciągnij element z przybornika lub kliknij przycisk poniżej.",
    // [Auto-translated] "Drag and drop an image here or click the button below and choose an image to upload"
    imagePlaceHolder: "Przeciągnij i upuść obraz tutaj lub kliknij przycisk poniżej i wybierz obraz do przesłania",
    // "Click the \"Add Question\" button below to start creating your form."
    surveyPlaceHolderMobile: "Kliknij przycisk \"Dodaj pytanie\" poniżej, aby rozpocząć tworzenie formularza.",
    // [Auto-translated] "Your form is empty"
    surveyPlaceholderTitle: "Twój formularz jest pusty",
    // [Auto-translated] "Your form is empty"
    surveyPlaceholderTitleMobile: "Twój formularz jest pusty",
    // [Auto-translated] "Drag an element from the toolbox or click the button below."
    surveyPlaceholderDescription: "Przeciągnij element z przybornika lub kliknij przycisk poniżej.",
    // [Auto-translated] "Drag an element from the toolbox or click the button below."
    surveyPlaceholderDescriptionMobile: "Przeciągnij element z przybornika lub kliknij przycisk poniżej.",
    // [Auto-translated] "No preview"
    previewPlaceholderTitle: "Brak podglądu",
    // [Auto-translated] "No preview"
    previewPlaceholderTitleMobile: "Brak podglądu",
    // [Auto-translated] "The survey doesn't contain any visible elements."
    previewPlaceholderDescription: "Ankieta nie zawiera żadnych widocznych elementów.",
    // [Auto-translated] "The survey doesn't contain any visible elements."
    previewPlaceholderDescriptionMobile: "Ankieta nie zawiera żadnych widocznych elementów.",
    // [Auto-translated] "No strings to translate"
    translationsPlaceholderTitle: "Brak ciągów do tłumaczenia",
    // [Auto-translated] "No strings to translate"
    translationsPlaceholderTitleMobile: "Brak ciągów do tłumaczenia",
    // [Auto-translated] "Add elements to your form or change the strings filter in the toolbar."
    translationsPlaceholderDescription: "Dodaj elementy do formularza lub zmień filtr ciągów na pasku narzędzi.",
    // [Auto-translated] "Add elements to your form or change the strings filter in the toolbar."
    translationsPlaceholderDescriptionMobile: "Dodaj elementy do formularza lub zmień filtr ciągów na pasku narzędzi.",
    // "Click the \"Add Question\" button below to add a new element to the page."
    pagePlaceHolderMobile: "Kliknij przycisk \"Dodaj pytanie\" poniżej, aby dodać nowy element do strony.",
    // "Click the \"Add Question\" button below to add a new element to the panel."
    panelPlaceHolderMobile: "Kliknij przycisk \"Dodaj pytanie\" poniżej, aby dodać nowy element do panelu.",
    // [Auto-translated] "Click the button below and choose an image to upload"
    imagePlaceHolderMobile: "Kliknij poniższy przycisk i wybierz obraz do przesłania",
    // [Auto-translated] "Choose Image"
    imageChooseImage: "Wybierz obraz",
    // [Auto-translated] "Add {0}"
    addNewTypeQuestion: "Dodaj {0}", // {0} is localizable question type
    // [Auto-translated] "[LOGO]"
    chooseLogoPlaceholder: "[LOGO]",
    // [Auto-translated] "Item "
    choices_Item: "Przedmiot ",
    // [Auto-translated] "Select a file"
    selectFile: "Wybierz plik",
    // [Auto-translated] "Remove the file"
    removeFile: "Usuń plik",
    lg: {
      // [Auto-translated] "Add New Rule"
      addNewItem: "Dodaj nową regułę",
      // [Auto-translated] "Create a rule to customize the flow of the survey."
      empty_tab: "Utwórz regułę, aby dostosować przepływ ankiety.",
      // [Auto-translated] "No logical rules"
      logicPlaceholderTitle: "Brak reguł logicznych",
      // [Auto-translated] "No logical rules"
      logicPlaceholderTitleMobile: "Brak reguł logicznych",
      // [Auto-translated] "Create a rule to customize the flow of the survey."
      logicPlaceholderDescription: "Utwórz regułę, aby dostosować przepływ ankiety.",
      // [Auto-translated] "Create a rule to customize the flow of the survey."
      logicPlaceholderDescriptionMobile: "Utwórz regułę, aby dostosować przepływ ankiety.",
      // [Auto-translated] "Show (hide) page"
      page_visibilityName: "Pokaż (ukryj) stronę",
      // [Auto-translated] "Enable (disable) page"
      page_enableName: "Włącz (wyłącz) stronę",
      // [Auto-translated] "Make page required"
      page_requireName: "Ustaw stronę jako wymaganą",
      // [Auto-translated] "Show (hide) panel"
      panel_visibilityName: "Pokaż (ukryj) panel",
      // [Auto-translated] "Enable (disable) panel"
      panel_enableName: "Włącz (wyłącz) panel",
      // [Auto-translated] "Make page required"
      panel_requireName: "Ustaw stronę jako wymaganą",
      // [Auto-translated] "Show (hide) question"
      question_visibilityName: "Pokaż (ukryj) pytanie",
      // [Auto-translated] "Enable (disable) question"
      question_enableName: "Włącz (wyłącz) pytanie",
      // [Auto-translated] "Make question required"
      question_requireName: "Zadbaj o pytanie wymagane",
      // [Auto-translated] "Reset question value"
      question_resetValueName: "Zresetuj wartość pytania",
      // [Auto-translated] "Set question value"
      question_setValueName: "Ustawianie wartości pytania",
      // [Auto-translated] "Show (hide) column"
      column_visibilityName: "Pokaż (ukryj) kolumnę",
      // [Auto-translated] "Enable (disable) column"
      column_enableName: "Włącz (wyłącz) kolumnę",
      // [Auto-translated] "Make column required"
      column_requireName: "Ustaw kolumnę jako wymaganą",
      // [Auto-translated] "Reset column value"
      column_resetValueName: "Resetowanie wartości kolumny",
      // [Auto-translated] "Set column value"
      column_setValueName: "Ustawianie wartości kolumny",
      // [Auto-translated] "Complete survey"
      trigger_completeName: "Wypełnij ankietę",
      // [Auto-translated] "Set answer"
      trigger_setvalueName: "Ustaw odpowiedź",
      // [Auto-translated] "Copy answer"
      trigger_copyvalueName: "Kopiuj odpowiedź",
      // [Auto-translated] "Skip to question"
      trigger_skipName: "Przejdź do pytania",
      // [Auto-translated] "Run expression"
      trigger_runExpressionName: "Uruchom wyrażenie",
      // "Set \"Thank You\" page markup"
      completedHtmlOnConditionName: "Ustaw znaczniki strony \"Ankieta ukończona\"",
      // [Auto-translated] "Make the page visible when the logic expression returns true. Otherwise keep it invisible."
      page_visibilityDescription: "Spraw, aby strona była widoczna, gdy wyrażenie logiczne zwróci wartość true. W przeciwnym razie zachowaj go niewidocznym.",
      // [Auto-translated] "Make the panel visible when the logic expression returns true. Otherwise keep it invisible."
      panel_visibilityDescription: "Uczyń panel widocznym, gdy wyrażenie logiczne zwróci wartość true. W przeciwnym razie zachowaj go niewidocznym.",
      // [Auto-translated] "Make the panel, and all elements inside it, enable when the logic expression returns true. Otherwise keep them disabled."
      panel_enableDescription: "Włącz panel i wszystkie znajdujące się w nim elementy, gdy wyrażenie logiczne zwróci wartość true. W przeciwnym razie pozostaw je wyłączone.",
      // [Auto-translated] "Make the question visible when the logic expression returns true. Otherwise keep it invisible."
      question_visibilityDescription: "Uczyń pytanie widocznym, gdy wyrażenie logiczne zwróci wartość true. W przeciwnym razie zachowaj go niewidocznym.",
      // [Auto-translated] "Make the question enable when the logic expression returns true. Otherwise keep it disabled."
      question_enableDescription: "Włącz pytanie, gdy wyrażenie logiczne zwróci wartość true. W przeciwnym razie pozostaw go wyłączonym.",
      // [Auto-translated] "Question becomes required when the logic expression returns true."
      question_requireDescription: "Pytanie staje się wymagane, gdy wyrażenie logiczne zwraca wartość true.",
      // "When the logical expression evaluates to true, the survey ends, and the respondent sees the \"Thank you\" page."
      trigger_completeDescription: "Gdy wyrażenie logiczne zwraca wartość true, ankieta zostaje wypełniona, a użytkownik końcowy zobaczy stronę \"Dziękuję\".",
      // [Auto-translated] "When question values, that are used in the logic expression, are changed and the logic expression returns true, then the value is set to the selected question."
      trigger_setvalueDescription: "Gdy wartości pytań, które są używane w wyrażeniu logicznym, zostaną zmienione, a wyrażenie logiczne zwróci wartość true, wartość zostanie ustawiona na wybrane pytanie.",
      // [Auto-translated] "When question values, that are used in the logic expression, are changed and the logic expression returns true, then the value of one selected question is copied to another selected question."
      trigger_copyvalueDescription: "Gdy wartości pytania, które są używane w wyrażeniu logicznym, zostaną zmienione, a wyrażenie logiczne zwróci wartość true, wartość jednego wybranego pytania zostanie skopiowana do innego wybranego pytania.",
      // [Auto-translated] "When the logic expression returns true then the survey skip to / focus the selected question."
      trigger_skipDescription: "Gdy wyrażenie logiczne zwraca wartość true, ankieta przechodzi do / fokus wybranego pytania.",
      // [Auto-translated] "When the logic expression returns true, then the custom expression is performed. You may optionally set this expression result into the selected question"
      trigger_runExpressionDescription: "Gdy wyrażenie logiczne zwraca wartość true, wykonywane jest wyrażenie niestandardowe. Opcjonalnie można ustawić wynik tego wyrażenia w wybranym pytaniu",
      // "If the logical expression evaluates to true, the \"Thank You\" page displays the specified content."
      completedHtmlOnConditionDescription: "Jeśli wyrażenie logiczne zwróci wartość true, domyślny tekst strony \"Dziękuję\" zostanie zmieniony na podany.",
      // "When expression: '{0}' returns true"
      itemExpressionText: "Gdy wyrażenie \"{0}\" zwraca wartość true", // {0} - the expression
      // [Auto-translated] "New rule"
      itemEmptyExpressionText: "Nowa reguła",
      // [Auto-translated] "make page {0} visible"
      page_visibilityText: "Ustawianie {0} strony", // {0} page name
      // [Auto-translated] "make panel {0} visible"
      panel_visibilityText: "Uwidocznienie {0} panelu", // {0} panel name
      // [Auto-translated] "make panel {0} enable"
      panel_enableText: "Włączanie {0} panelu", // {0} panel name
      // [Auto-translated] "make question {0} visible"
      question_visibilityText: "Uczyń {0} pytań widocznymi", // {0} question name
      // [Auto-translated] "make question {0} enable"
      question_enableText: "Utwórz pytanie {0} włącz", // {0} question name
      // [Auto-translated] "make question {0} required"
      question_requireText: "Pytanie {0} wymagane", // {0} question name
      // [Auto-translated] "reset value for question: {0}"
      question_resetValueText: "Zresetuj wartość dla pytania: {0}", // {0} question name.
      // [Auto-translated] "assign value: {1} to question: {0}"
      question_setValueText: "Przypisz wartość: {1} do pytania: {0}",
      // [Auto-translated] "make column {0} of question {1} visible"
      column_visibilityText: "Uwidocznienie {0}  {1}pytania", // {0} column name, {1} question name
      // [Auto-translated] "make column {0} of question {1} enable"
      column_enableText: "Ustaw kolumnę {0} pytania{1} włączyć", // {0} column name, {1} question name
      // [Auto-translated] "make column {0} of question {1} required"
      column_requireText: "Ustaw kolumnę {0} pytania {1} wymagane", // {0} column name, {1} question name
      // [Auto-translated] "reset cell value for column: {0}"
      column_resetValueText: "Zresetuj wartość komórki dla kolumny: {0}", // {0} column name
      // [Auto-translated] "assign cell value: {1} to column: {0}"
      column_setValueText: "Przypisz wartość komórki: {1} do kolumny: {0}", // {0} column name and {1} setValueExpression
      // [Auto-translated] " An expression whose result will be assigned to the target question."
      setValueExpressionPlaceholder: " Wyrażenie, którego wynik zostanie przypisany do pytania docelowego.",
      // [Auto-translated] "survey becomes completed"
      trigger_completeText: "Ankieta zostaje zakończona",
      // [Auto-translated] "set into question: {0} value {1}"
      trigger_setvalueText: "Ustaw pod znakiem zapytania: {0} wartość {1}", // {0} question name, {1} setValue
      // [Auto-translated] "clear question value: {0}"
      trigger_setvalueEmptyText: "Wyczyść wartość pytania: {0}", // {0} question name
      // [Auto-translated] "copy into question: {0} value from question {1}"
      trigger_copyvalueText: "Kopiuj do pytania: {0} wartość z pytania {1}", // {0} and {1} question names
      // [Auto-translated] "survey skip to the question {0}"
      trigger_skipText: "Przejdź do pytania {0}", // {0} question name
      // [Auto-translated] "run expression: '{0}'"
      trigger_runExpressionText1: "Uruchom wyrażenie: '{0}'", // {0} the expression
      // [Auto-translated] " and set its result into question: {0}"
      trigger_runExpressionText2: " i zakwestionować jego wynik: {0}", // {0} question name
      // "show custom text for the \"Thank You\" page."
      completedHtmlOnConditionText: "pokaż niestandardowy tekst dla strony \"Dziękuję\".",
      // [Auto-translated] "All Questions"
      showAllQuestions: "Wszystkie pytania",
      // [Auto-translated] "All Action Types"
      showAllActionTypes: "Wszystkie rodzaje akcji",
      // [Auto-translated] "Condition(s)"
      conditions: "Warunek (warunki)",
      // [Auto-translated] "Action(s)"
      actions: "Działania(e)",
      // [Auto-translated] "Define condition(s)"
      expressionEditorTitle: "Zdefiniuj warunki",
      // [Auto-translated] "Define action(s)"
      actionsEditorTitle: "Definiowanie akcji",
      // [Auto-translated] "Delete Action"
      deleteAction: "Akcja usuwania",
      // [Auto-translated] "Add Action"
      addNewAction: "Dodaj akcję",
      // [Auto-translated] "Select action..."
      selectedActionCaption: "Wybierz akcję...",
      // [Auto-translated] "The logic expression is empty or invalid. Please correct it."
      expressionInvalid: "Wyrażenie logiczne jest puste lub nieprawidłowe. Proszę to poprawić.",
      // [Auto-translated] "Please, add at least one action."
      noActionError: "Dodaj co najmniej jedną akcję.",
      // [Auto-translated] "Please, fix problems in your action(s)."
      actionInvalid: "Proszę, napraw problemy w swoich działaniach.",
      // [Auto-translated] "Logical rules are incomplete"
      uncompletedRule_title: "Reguły logiczne są niekompletne",
      // [Auto-translated] "You have not completed some of the logical rules. If you leave the tab now, the changes will be lost. Do you still want to leave the tab without completing the changes?"
      uncompletedRule_text: "Nie ukończyłeś niektórych reguł logicznych. Jeśli opuścisz kartę teraz, zmiany zostaną utracone. Czy nadal chcesz opuścić kartę bez dokończenia zmian?",
      // [Auto-translated] "Yes"
      uncompletedRule_apply: "Tak",
      // [Auto-translated] "No, I want to complete the rules"
      uncompletedRule_cancel: "Nie, chcę wypełnić zasady"
    }
  },
  // Property Editors
  pe: {
    panel: {
      // [Auto-translated] "Panel name"
      name: "Nazwa panelu",
      // [Auto-translated] "Panel title"
      title: "Tytuł panelu",
      // [Auto-translated] "Panel description"
      description: "Opis panelu",
      // [Auto-translated] "Make the panel visible if"
      visibleIf: "Uwidocznij panel, jeśli",
      // [Auto-translated] "Make the panel required if"
      requiredIf: "Ustaw panel jako wymagany, jeśli",
      // [Auto-translated] "Question order within the panel"
      questionOrder: "Kolejność pytań w panelu",
      // [Auto-translated] "Repositions the panel to the end of a selected page."
      page: "Strona nadrzędna",
      // [Auto-translated] "Display the panel on a new line"
      startWithNewLine: "Wyświetlanie panelu w nowym wierszu",
      // [Auto-translated] "Panel expand state"
      state: "Stan zwijania panelu",
      // [Auto-translated] "Width (in CSS-accepted values)"
      width: "Szerokość panelu w linii",
      // [Auto-translated] "Minimum width (in CSS-accepted values)"
      minWidth: "Minimalna szerokość panelu",
      // [Auto-translated] "Maximum width (in CSS-accepted values)"
      maxWidth: "Maksymalna szerokość panelu",
      // [Auto-translated] "Show panel number"
      showNumber: "Numeruj ten panel"
    },
    panellayoutcolumn: {
      // [Auto-translated] "Ex.: 30%"
      effectiveWidth: "Szerokość efektywna, %",
      // [Auto-translated] "Question title width"
      questionTitleWidth: "Szerokość tytułu pytania, px"
    },
    paneldynamic: {
      // [Auto-translated] "Panel name"
      name: "Nazwa panelu",
      // [Auto-translated] "Panel title"
      title: "Tytuł panelu",
      // [Auto-translated] "Panel description"
      description: "Opis panelu",
      // [Auto-translated] "Entry display mode"
      displayMode: "Podstawowy tryb wyświetlania",
      // [Auto-translated] "Make the panel visible if"
      visibleIf: "Uwidocznij panel, jeśli",
      // [Auto-translated] "Make the panel required if"
      requiredIf: "Ustaw panel jako wymagany, jeśli",
      // [Auto-translated] "Move the panel to page"
      page: "Przenieś panel na stronę",
      // [Auto-translated] "Display the panel on a new line"
      startWithNewLine: "Wyświetlanie panelu w nowym wierszu",
      // [Auto-translated] "Panel collapse state"
      state: "Stan zwijania panelu",
      // [Auto-translated] "Inline panel width"
      width: "Szerokość panelu w linii",
      // [Auto-translated] "Minimum panel width"
      minWidth: "Minimalna szerokość panelu",
      // [Auto-translated] "Maximum panel width"
      maxWidth: "Maksymalna szerokość panelu",
      // [Auto-translated] "Confirm row removal"
      confirmDelete: "Potwierdź usunięcie panelu",
      // [Auto-translated] "Description template"
      templateDescription: "Wzorzec opisu panelu",
      // [Auto-translated] "Title template"
      templateTitle: "Wzorzec tytułu panelu",
      // [Auto-translated] "Empty entries text"
      noEntriesText: "Pusty tekst panelu",
      // [Auto-translated] "Tab title pattern"
      templateTabTitle: "Wzorzec tytułu tabulatora",
      // [Auto-translated] "Tab title placeholder"
      tabTitlePlaceholder: "Symbol zastępczy tytułu tabulatora",
      // [Auto-translated] "Make an individual panel visible if"
      templateVisibleIf: "Uwidocznij pojedynczy panel, jeśli",
      // [Auto-translated] "Number the panel"
      showNumber: "Numerowanie panelu",
      // [Auto-translated] "Panel title alignment"
      titleLocation: "Wyrównanie tytułu panelu",
      // [Auto-translated] "Panel description alignment"
      descriptionLocation: "Wyrównanie opisu panelu",
      // [Auto-translated] "Question title location"
      templateQuestionTitleLocation: "Wyrównanie tytułu pytania",
      // [Auto-translated] "Question title width"
      templateQuestionTitleWidth: "Szerokość tytułu pytania",
      // [Auto-translated] "Error message alignment"
      templateErrorLocation: "Wyrównanie komunikatu o błędzie",
      // [Auto-translated] "New panel location"
      newPanelPosition: "Nowa lokalizacja panelu",
      // [Auto-translated] "Show progress bar"
      showRangeInProgress: "Pokazywanie paska postępu",
      // [Auto-translated] "Key column"
      keyName: "Zapobiegaj zduplikowanym odpowiedziom w następującym pytaniu"
    },
    question: {
      // [Auto-translated] "Question name"
      name: "Nazwa pytania",
      // [Auto-translated] "Question title"
      title: "Tytuł pytania",
      // [Auto-translated] "Question description"
      description: "Opis pytania",
      // [Auto-translated] "Show the title and description"
      showTitle: "Pokaż tytuł i opis",
      // [Auto-translated] "Make the question visible if"
      visibleIf: "Uwidocznij pytanie, jeśli",
      // [Auto-translated] "Make the question required if"
      requiredIf: "Zadbaj o to, aby pytanie było wymagane, jeśli",
      // [Auto-translated] "Parent page"
      page: "Strona nadrzędna",
      // [Auto-translated] "Question box collapse state"
      state: "Stan zwinięcia pola pytania",
      // [Auto-translated] "Number this question"
      showNumber: "Ponumeruj to pytanie",
      // [Auto-translated] "Question title alignment"
      titleLocation: "Wyrównanie tytułu pytania",
      // [Auto-translated] "Question description alignment"
      descriptionLocation: "Wyrównanie opisu pytania",
      // [Auto-translated] "Error message alignment"
      errorLocation: "Wyrównanie komunikatu o błędzie",
      // [Auto-translated] "Add indents"
      indent: "Zwiększ wcięcie wewnętrzne",
      // [Auto-translated] "Inline question width"
      width: "Szerokość pytania w tekście",
      // [Auto-translated] "Minimum question width"
      minWidth: "Minimalna szerokość pytania",
      // [Auto-translated] "Maximum question width"
      maxWidth: "Maksymalna szerokość pytania",
      // [Auto-translated] "Update text question value"
      textUpdateMode: "Aktualizowanie wartości pola wejściowego"
    },
    signaturepad: {
      // [Auto-translated] "Signature width"
      signatureWidth: "Szerokość obszaru podpisu",
      // [Auto-translated] "Signature height"
      signatureHeight: "Wysokość obszaru podpisu",
      // [Auto-translated] "Auto-scale the signature area"
      signatureAutoScaleEnabled: "Automatyczne skalowanie obszaru podpisu",
      // [Auto-translated] "Show the placeholder"
      showPlaceholder: "Pokazywanie symbolu zastępczego",
      // [Auto-translated] "Placeholder text"
      placeholder: "Tekst zastępczy",
      // [Auto-translated] "Placeholder text in read-only or preview mode"
      placeholderReadOnly: "Tekst zastępczy w trybie tylko do odczytu lub podglądu",
      // [Auto-translated] "Show the Clear button"
      allowClear: "Pokaż przycisk Wyczyść w obszarze podpisu",
      // [Auto-translated] "Minimum pen width"
      penMinWidth: "Minimalna szerokość pisaka",
      // [Auto-translated] "Maximum pen width"
      penMaxWidth: "Maksymalna szerokość pisaka",
      // [Auto-translated] "Stroke color"
      penColor: "Kolor obrysu"
    },
    comment: {
      // [Auto-translated] "Input field height (in lines)"
      rows: "Wysokość pola wejściowego (w wierszach)"
    },
    // "Question numbering"
    showQuestionNumbers: "Show question numbers",
    // "Question indexing type"
    questionStartIndex: "Question start index (1, 2 or 'A', 'a')",
    // [Auto-translated] "Expression"
    expression: {
      // [Auto-translated] "Expression name"
      name: "Nazwa wyrażenia",
      // [Auto-translated] "Expression title"
      title: "Tytuł wyrażenia",
      // [Auto-translated] "Expression description"
      description: "Opis wyrażenia",
      // [Auto-translated] "Expression"
      expression: "Wyrażenie"
    },
    trigger: {
      // [Auto-translated] "Expression"
      expression: "Wyrażenie"
    },
    calculatedvalue: {
      // [Auto-translated] "Expression"
      expression: "Wyrażenie"
    },
    // survey templates
    survey: {
      // [Auto-translated] "Title"
      title: "Tytuł",
      // [Auto-translated] "Survey description"
      description: "Opis ankiety",
      // [Auto-translated] "Read-only"
      readOnly: "Ustawianie ankiety jako tylko do odczytu"
    },
    page: {
      // [Auto-translated] "Page name"
      name: "Nazwa strony",
      // [Auto-translated] "Title"
      title: "Tytuł",
      // [Auto-translated] "Page description"
      description: "Opis strony",
      // [Auto-translated] "Make the page visible if"
      visibleIf: "Spraw, aby strona była widoczna, jeśli",
      // [Auto-translated] "Make the page required if"
      requiredIf: "Ustaw stronę jako wymaganą, jeśli",
      // [Auto-translated] "Time limit to finish the page (in seconds)"
      timeLimit: "Limit czasu na zakończenie strony (w sekundach)",
      // [Auto-translated] "Question order on the page"
      questionOrder: "Kolejność pytań na stronie"
    },
    matrixdropdowncolumn: {
      // [Auto-translated] "Column name"
      name: "Nazwa kolumny",
      // [Auto-translated] "Column title"
      title: "Tytuł kolumny",
      // [Auto-translated] "Prevent duplicate responses"
      isUnique: "Zapobieganie zduplikowanym odpowiedziom",
      // [Auto-translated] "Column width"
      width: "Szerokość kolumny",
      // [Auto-translated] "Minimum column width"
      minWidth: "Minimalna szerokość kolumny",
      // [Auto-translated] "Input field height (in lines)"
      rows: "Wysokość pola wejściowego (w wierszach)",
      // [Auto-translated] "Make the column visible if"
      visibleIf: "Ustaw kolumnę jako widoczną, jeśli",
      // [Auto-translated] "Make the column required if"
      requiredIf: "Ustaw kolumnę jako wymaganą, jeśli",
      // [Auto-translated] "Each option in a separate column"
      showInMultipleColumns: "Każda opcja w osobnej kolumnie"
    },
    multipletextitem: {
      // [Auto-translated] "Name"
      name: "Nazwa",
      // [Auto-translated] "Title"
      title: "Tytuł"
    },
    masksettings: {
      // [Auto-translated] "Save masked value in survey results"
      saveMaskedValue: "Zapisywanie zamaskowanej wartości w wynikach ankiety"
    },
    patternmask: {
      // [Auto-translated] "Value pattern"
      pattern: "Wzorzec wartości"
    },
    datetimemask: {
      // [Auto-translated] "Minimum value"
      min: "Wartość minimalna",
      // [Auto-translated] "Maximum value"
      max: "Wartość maksymalna"
    },
    numericmask: {
      // [Auto-translated] "Allow negative values"
      allowNegativeValues: "Zezwalaj na wartości ujemne",
      // [Auto-translated] "Thousands separator"
      thousandsSeparator: "Separator tysięcy",
      // [Auto-translated] "Decimal separator"
      decimalSeparator: "Separator dziesiętny",
      // [Auto-translated] "Value precision"
      precision: "Precyzja wartości",
      // [Auto-translated] "Minimum value"
      min: "Wartość minimalna",
      // [Auto-translated] "Maximum value"
      max: "Wartość maksymalna"
    },
    currencymask: {
      // [Auto-translated] "Currency prefix"
      prefix: "Prefiks waluty",
      // [Auto-translated] "Currency suffix"
      suffix: "Sufiks waluty"
    },
    // [Auto-translated] "Clear others when selected"
    isExclusive: "Wyczyść inne po wybraniu",
    // [Auto-translated] "Require user to enter a comment"
    isCommentRequired: "Wymagaj od użytkownika wprowadzenia komentarza",
    // "Display area height"
    imageHeight: "Image height",
    // "Display area width"
    imageWidth: "Image width",
    // "Join identifier"
    valueName: "Value name",
    // [Auto-translated] "Default display value for dynamic texts"
    defaultDisplayValue: "Domyślna wartość wyświetlana dla tekstów dynamicznych",
    // [Auto-translated] "Label alignment"
    rateDescriptionLocation: "Wyrównanie etykiety",
    // [Auto-translated] "Input field size (in characters)"
    size: "Rozmiar pola wejściowego (w znakach)",
    // [Auto-translated] "Cell error message alignment"
    cellErrorLocation: "Wyrównanie komunikatu o błędzie komórki",
    // [Auto-translated] "Enabled"
    enabled: "Włączone",
    // [Auto-translated] "Disabled"
    disabled: "Niepełnosprawny",
    // [Auto-translated] "Inherit"
    inherit: "Odziedziczyć",
    // "Apply"
    apply: "Zastosuj",
    // "OK"
    ok: "OK",
    // [Auto-translated] "Save"
    save: "Zapisać",
    // [Auto-translated] "Clear"
    clear: "Jasny",
    // [Auto-translated] "Save"
    saveTooltip: "Zapisać",
    // "Cancel"
    cancel: "Anuluj",
    // [Auto-translated] "Set"
    set: "Zbiór",
    // "Reset"
    reset: "Resetuj",
    // [Auto-translated] "Change"
    change: "Zmieniać",
    // [Auto-translated] "Refresh"
    refresh: "Odświeżyć",
    // "Close"
    close: "Zamknij",
    // "Delete"
    delete: "Usuń",
    // [Auto-translated] "Add"
    add: "Dodawać",
    // "Add New"
    addNew: "Dodaj nową",
    // [Auto-translated] "Click to add an item..."
    addItem: "Kliknij, aby dodać element...",
    // [Auto-translated] "Click to remove the item..."
    removeItem: "Kliknij, aby usunąć element...",
    // [Auto-translated] "Drag the item"
    dragItem: "Przeciągnij element",
    // [Auto-translated] "Other"
    addOther: "Inny",
    // [Auto-translated] "Select All"
    addSelectAll: "Zaznacz wszystko",
    // [Auto-translated] "None"
    addNone: "Żaden",
    // "Remove All"
    removeAll: "Usuń wszystkie",
    // "Edit"
    edit: "Edytuj",
    // [Auto-translated] "Return without saving"
    back: "Zwrot bez zapisywania",
    // [Auto-translated] "Return without saving"
    backTooltip: "Zwrot bez zapisywania",
    // [Auto-translated] "Save and return"
    saveAndBack: "Zapisz i zwróć",
    // [Auto-translated] "Save and return"
    saveAndBackTooltip: "Zapisz i zwróć",
    // [Auto-translated] "Done"
    doneEditing: "Gotowy",
    // [Auto-translated] "Edit Choices"
    editChoices: "Edytuj opcje",
    // [Auto-translated] "Show Choices"
    showChoices: "Pokaż wybór",
    // [Auto-translated] "Move"
    move: "Ruszać",
    // "<empty>"
    empty: "<pusty>",
    // [Auto-translated] "Value is empty"
    emptyValue: "Wartość jest pusta",
    // "Manual Entry"
    fastEntry: "Szybkie wprowadzanie",
    // "Value '{0}' is not unique"
    fastEntryNonUniqueError: "Wartość \"{0}\" nie jest unikalna",
    // [Auto-translated] "Please limit the number of items from {0} to {1}"
    fastEntryChoicesCountError: "Ogranicz liczbę przedmiotów od {0} do {1}",
    // [Auto-translated] "Please enter at least {0} items"
    fastEntryChoicesMinCountError: "Podaj co najmniej {0} przedmiotów",
    // [Auto-translated] "You can set data in the following format:\nvalue1|text\nvalue2"
    fastEntryPlaceholder: "Dane można ustawić w następującym formacie:\nwartość1|tekst\nwartość2",
    // "Form Entry"
    formEntry: "Formularz",
    // "Test the service"
    testService: "Testuj usługę",
    // [Auto-translated] "Please select the element"
    itemSelectorEmpty: "Proszę wybrać element",
    // [Auto-translated] "Please select the action"
    conditionActionEmpty: "Wybierz akcję",
    // [Auto-translated] "Select question..."
    conditionSelectQuestion: "Wybierz pytanie...",
    // [Auto-translated] "Select page..."
    conditionSelectPage: "Wybierz stronę...",
    // [Auto-translated] "Select panel..."
    conditionSelectPanel: "Wybierz panel...",
    // [Auto-translated] "Please enter/select the value"
    conditionValueQuestionTitle: "Wpisz/wybierz wartość",
    // "Press ctrl+space to get expression completion hint"
    aceEditorHelp: "Press ctrl+space to get expression completion hint",
    // "Current row"
    aceEditorRowTitle: "Current row",
    // "Current panel"
    aceEditorPanelTitle: "Current panel",
    // "For more details please check the documentation"
    showMore: "For more details please check the documentation",
    // "Available questions"
    assistantTitle: "Available questions:",
    // [Auto-translated] "There is should be at least one column or row"
    cellsEmptyRowsColumns: "Powinna istnieć co najmniej jedna kolumna lub wiersz",
    // [Auto-translated] "Preview answers before submitting the survey"
    showPreviewBeforeComplete: "Podgląd odpowiedzi przed wysłaniem ankiety",
    // [Auto-translated] "Set by "
    overridingPropertyPrefix: "Ustaw przez ",
    // [Auto-translated] "Reset"
    resetToDefaultCaption: "Resetować",
    // "Please enter a value"
    propertyIsEmpty: "Podaj wartość",
    // [Auto-translated] "Please enter a unique value"
    propertyIsNoUnique: "Podaj unikatową wartość",
    // [Auto-translated] "Please enter a unique name"
    propertyNameIsNotUnique: "Podaj unikalną nazwę",
    // "Do not use reserved words: \"item\", \"choice\", \"panel\", \"row\"."
    propertyNameIsIncorrect: "Nie używaj zastrzeżonych słów: \"element\", \"wybór\", \"panel\", \"wiersz\".",
    // [Auto-translated] "No items have been added yet"
    listIsEmpty: "Nie dodano jeszcze żadnych przedmiotów",
    // [Auto-translated] "No choices have been added yet"
    "listIsEmpty@choices": "Nie dodano jeszcze żadnych opcji",
    // [Auto-translated] "You don't have any columns yet"
    "listIsEmpty@columns": "Nie masz jeszcze żadnych kolumn",
    // [Auto-translated] "You don't have layout columns yet"
    "listIsEmpty@gridLayoutColumns": "Nie masz jeszcze kolumn układu",
    // [Auto-translated] "You don't have any rows yet"
    "listIsEmpty@rows": "Nie masz jeszcze żadnych wierszy",
    // [Auto-translated] "You don't have any validation rules yet"
    "listIsEmpty@validators": "Nie masz jeszcze żadnych reguł sprawdzania poprawności",
    // [Auto-translated] "You don't have any custom variables yet"
    "listIsEmpty@calculatedValues": "Nie masz jeszcze żadnych zmiennych niestandardowych",
    // [Auto-translated] "You don't have any triggers yet"
    "listIsEmpty@triggers": "Nie masz jeszcze żadnych wyzwalaczy",
    // [Auto-translated] "You don't have any links yet"
    "listIsEmpty@navigateToUrlOnCondition": "Nie masz jeszcze żadnych linków",
    // [Auto-translated] "You don't have any pages yet"
    "listIsEmpty@pages": "Nie masz jeszcze żadnych stron",
    // [Auto-translated] "Add a choice"
    "addNew@choices": "Dodaj wybór",
    // [Auto-translated] "Add new column"
    "addNew@columns": "Dodaj nową kolumnę",
    // [Auto-translated] "Add new row"
    "addNew@rows": "Dodaj nowy wiersz",
    // [Auto-translated] "Add new rule"
    "addNew@validators": "Dodaj nową regułę",
    // [Auto-translated] "Add new variable"
    "addNew@calculatedValues": "Dodaj nową zmienną",
    // [Auto-translated] "Add new trigger"
    "addNew@triggers": "Dodaj nowy wyzwalacz",
    // [Auto-translated] "Add new URL"
    "addNew@navigateToUrlOnCondition": "Dodaj nowy adres URL",
    // [Auto-translated] "Add new page"
    "addNew@pages": "Dodaj nową stronę",
    // [Auto-translated] "Expression is empty"
    expressionIsEmpty: "Wyrażenie jest puste",
    // "Value"
    value: "Wartość",
    // "Text"
    text: "Etykieta",
    // [Auto-translated] "Row ID"
    rowid: "Identyfikator wiersza",
    // [Auto-translated] "Image or video URL"
    imageLink: "Adres URL obrazu lub filmu",
    // "Edit column: {0}"
    columnEdit: "Edit column: {0}",
    // "Edit item: {0}"
    itemEdit: "Edit item: {0}",
    // "URL"
    url: "URL",
    // "Path to data"
    path: "Path",
    choicesbyurl: {
      // [Auto-translated] "Web service's URL"
      url: "Adres URL usługi sieci Web",
      // [Auto-translated] "Get values from the following JSON field"
      valueName: "Pobierz wartości z następującego pola JSON:"
    },
    // "Get value to display from the following property"
    titleName: "Title name",
    // [Auto-translated] "Get image URLs from the following JSON field"
    imageLinkName: "Pobierz adresy URL obrazów z następującego pola JSON:",
    // [Auto-translated] "Allow empty response"
    allowEmptyResponse: "Zezwalaj na pustą odpowiedź",
    // [Auto-translated] "Title"
    titlePlaceholder: "Tytuł",
    // [Auto-translated] "Survey Title"
    surveyTitlePlaceholder: "Tytuł ankiety",
    // [Auto-translated] "Page {num}"
    pageTitlePlaceholder: "Strona {num}",
    // [Auto-translated] "Start Page"
    startPageTitlePlaceholder: "Strona startowa",
    // [Auto-translated] "Description"
    descriptionPlaceholder: "Opis",
    // [Auto-translated] "Description"
    surveyDescriptionPlaceholder: "Opis",
    // [Auto-translated] "Description"
    pageDescriptionPlaceholder: "Opis",
    // [Auto-translated] "Wrap choices"
    textWrapEnabled: "Opcje zawijania",
    // "Enable the \"Other\" option"
    showOtherItem: "Czy możliwa własna odpowiedź",
    // "Rename the \"Other\" option"
    otherText: "Other item text",
    // [Auto-translated] "Allow the None option"
    showNoneItem: "Zezwalaj na opcję Brak",
    // [Auto-translated] "Allow the Refuse to Answer option"
    showRefuseItem: "Zezwól na opcję Odmów odpowiedzi",
    // [Auto-translated] "Allow the Don't Know option"
    showDontKnowItem: "Zezwól na opcję Nie wiem",
    // [Auto-translated] "None option text"
    noneText: "Tekst opcji Brak",
    // [Auto-translated] "Allow the Select All option"
    showSelectAllItem: "Zezwalaj na opcję Zaznacz wszystko",
    // [Auto-translated] "Select All option text"
    selectAllText: "Zaznacz tekst opcji Wszystkie",
    // [Auto-translated] "Minimum value for auto-generated items"
    choicesMin: "Minimalna wartość dla automatycznie wygenerowanych elementów",
    // [Auto-translated] "Maximum value for auto-generated items"
    choicesMax: "Maksymalna wartość dla automatycznie wygenerowanych elementów",
    // [Auto-translated] "Step for auto-generated items"
    choicesStep: "Krok dla automatycznie wygenerowanych elementów",
    // "Name"
    name: "Nazwa",
    // "Title"
    title: "Etykieta",
    // "Cell input type"
    cellType: "Typ komórki",
    // "Column count"
    colCount: "Liczba kolumn",
    // "Choice order"
    choicesOrder: "Kolejność odpowiedzi",
    // [Auto-translated] "Allow custom choices"
    allowCustomChoices: "Zezwalaj na niestandardowe wybory",
    // "Visible"
    visible: "Czy widoczne?",
    // "Required"
    isRequired: "Czy wymagalne?",
    // [Auto-translated] "Mark as required"
    markRequired: "Oznacz jako wymagane",
    // [Auto-translated] "Remove the required mark"
    removeRequiredMark: "Usuń wymagany znacznik",
    // [Auto-translated] "Require answer for all rows"
    eachRowRequired: "Wymagaj odpowiedzi dla wszystkich wierszy",
    // [Auto-translated] "Prevent duplicate responses in rows"
    eachRowUnique: "Zapobieganie zduplikowanym odpowiedziom w wierszach",
    // "Error message for required questions"
    requiredErrorText: "Komunikat o błędzie \"Wymagane\"",
    // "Display the question on a new line"
    startWithNewLine: "Czy rozpoczyna się nową linią?",
    // "Rows"
    rows: "Liczba wierszy",
    // [Auto-translated] "Columns"
    cols: "Kolumny",
    // "Placeholder text within input field"
    placeholder: "Input place holder",
    // "Show preview area"
    showPreview: "Show preview area",
    // "Store file content in JSON result as text"
    storeDataAsText: "Store file content in JSON result as text",
    // "Maximum file size (in bytes)"
    maxSize: "Maximum file size in bytes",
    // "Row count"
    rowCount: "Row count",
    // [Auto-translated] "Columns layout"
    columnLayout: "Układ kolumn",
    // [Auto-translated] "Add Row button location"
    addRowButtonLocation: "Lokalizacja przycisku Dodaj wiersz",
    // [Auto-translated] "Transpose rows to columns"
    transposeData: "Transponowanie wierszy do kolumn",
    // "\"Add Row\" button text"
    addRowText: "Add row button text",
    // "\"Remove Row\" button text"
    removeRowText: "Remove row button text",
    // [Auto-translated] "Input field title pattern"
    singleInputTitleTemplate: "Wzorzec tytułu pola wejściowego",
    // [Auto-translated] "Minimum rate value"
    rateMin: "Minimalna wartość stawki",
    // [Auto-translated] "Maximum rate value"
    rateMax: "Maksymalna wartość stawki",
    // [Auto-translated] "Rate step"
    rateStep: "Krok stawki",
    // "Minimum value label"
    minRateDescription: "Opis najniższej oceny",
    // "Maximum value label"
    maxRateDescription: "Opis najwyższej oceny",
    // "Input type"
    inputType: "Input type",
    // "Option placeholder"
    optionsCaption: "Options caption",
    // "Default Answer"
    defaultValue: "Default value",
    // [Auto-translated] "Default texts"
    cellsDefaultRow: "Teksty domyślne",
    // "Edit survey settings"
    surveyEditorTitle: "Edytuj ankietę",
    // "Edit: {0}"
    qEditorTitle: "Edytuj: {0}",
    // [Auto-translated] "Maximum length (in characters)"
    maxLength: "Maksymalna długość (w znakach)",
    // [Auto-translated] "Build"
    buildExpression: "Budować",
    // [Auto-translated] "Edit"
    editExpression: "Redagować",
    // [Auto-translated] "and"
    and: "i",
    // [Auto-translated] "or"
    or: "lub",
    // [Auto-translated] "Remove"
    remove: "Usunąć",
    // [Auto-translated] "Add Condition"
    addCondition: "Dodaj warunek",
    // [Auto-translated] "Select a question to start configuring conditions."
    emptyLogicPopupMessage: "Wybierz pytanie, aby rozpocząć konfigurowanie warunków.",
    // [Auto-translated] "If"
    if: "Jeśli",
    // [Auto-translated] "then"
    then: "wtedy",
    // [Auto-translated] "Target question"
    setToName: "Pytanie docelowe",
    // [Auto-translated] "Question to copy answer from"
    fromName: "Pytanie, z którego należy skopiować odpowiedź",
    // [Auto-translated] "Question to skip to"
    gotoName: "Pytanie, do którego należy przejść",
    // [Auto-translated] "Rule is incorrect"
    ruleIsNotSet: "Reguła jest nieprawidłowa",
    // [Auto-translated] "Include into survey results"
    includeIntoResult: "Uwzględnij w wynikach ankiety",
    // "Make the title and description visible"
    showTitle: "Pokaż/ukryj tytuł",
    // [Auto-translated] "Expand/collapse title"
    expandCollapseTitle: "Rozwiń/zwiń tytuł",
    // "Select a survey language"
    locale: "Domyślny język",
    // [Auto-translated] "Select device type"
    simulator: "Wybierz typ urządzenia",
    // [Auto-translated] "Switch to landscape orientation"
    landscapeOrientation: "Przełączanie na orientację poziomą",
    // [Auto-translated] "Switch to portrait orientation"
    portraitOrientation: "Przełączanie na orientację pionową",
    // "Clear hidden question values"
    clearInvisibleValues: "Usuń niewidoczne odpowiedzi",
    // "Limit to one response"
    cookieName: "Cookie name (to disable run survey two times locally)",
    // "Auto-save survey progress on page change"
    partialSendEnabled: "Send survey results on page next",
    // "Save the \"Other\" option value as a separate property"
    storeOthersAsComment: "Store 'others' value in separate field",
    // "Show page titles"
    showPageTitles: "Show page titles",
    // "Show page numbers"
    showPageNumbers: "Show page numbers",
    // "\"Previous Page\" button text"
    pagePrevText: "Page previous button text",
    // "\"Next Page\" button text"
    pageNextText: "Page next button text",
    // "\"Complete Survey\" button text"
    completeText: "Complete button text",
    // [Auto-translated] "Preview Answers button text"
    previewText: "Tekst przycisku Podgląd odpowiedzi",
    // [Auto-translated] "Edit Answer button text"
    editText: "Tekst przycisku Edytuj odpowiedź",
    // "\"Start Survey\" button text"
    startSurveyText: "Start button text",
    // "Show navigation buttons"
    showNavigationButtons: "Show navigation buttons (default navigation)",
    // [Auto-translated] "Navigation buttons alignment"
    navigationButtonsLocation: "Wyrównanie przycisków nawigacyjnych",
    // "Show the \"Previous Page\" button"
    showPrevButton: "Show previous button (user may return on previous page)",
    // "First page is a start page"
    firstPageIsStartPage: "The first page in the survey is a started page.",
    // "Show the \"Thank You\" page"
    showCompletePage: "Show the completed page at the end (completedHtml)",
    // "Auto-advance to the next page"
    autoAdvanceEnabled: "On answering all questions, go to the next page automatically",
    // [Auto-translated] "Complete the survey automatically"
    autoAdvanceAllowComplete: "Wypełnij ankietę automatycznie",
    // "Show the progress bar"
    showProgressBar: "Show progress bar",
    // [Auto-translated] "Progress bar alignment"
    progressBarLocation: "Wyrównanie paska postępu",
    // "Question title alignment"
    questionTitleLocation: "Question title location",
    // "Question title width"
    questionTitleWidth: "Szerokość tytułu pytania",
    // "Required symbol(s)"
    requiredMark: "The question required symbol(s)",
    // "Question title template, default is: '{no}. {require} {title}'"
    questionTitleTemplate: "Question title template, default is: '{no}. {require} {title}'",
    // "Error message alignment"
    questionErrorLocation: "Question error location",
    // "Focus first question on a new page"
    autoFocusFirstQuestion: "Focus first question on changing the page",
    // "Question order"
    questionOrder: "Elements order on the page",
    // "Time limit to complete the survey"
    timeLimit: "Maximum time to finish the survey",
    // "Time limit to complete one page"
    timeLimitPerPage: "Maximum time to finish a page in the survey",
    // [Auto-translated] "Use a timer"
    showTimer: "Korzystanie z minutnika",
    // "Timer alignment"
    timerLocation: "Show timer panel",
    // "Timer mode"
    timerInfoMode: "Show timer panel mode",
    // "Panel display mode"
    renderMode: "Render mode",
    // "Enable entry addition"
    allowAddPanel: "Allow adding a panel",
    // "Enable entry removal"
    allowRemovePanel: "Allow removing the panel",
    // "\"Add Entry\" button text"
    addPanelText: "Adding panel text",
    // "\"Remove Entry\" button text"
    removePanelText: "Removing panel text",
    // "Show all elements on one page"
    isSinglePage: "Show all elements on one page",
    // [Auto-translated] "HTML markup"
    html: "Znaczniki HTML",
    // [Auto-translated] "Answer"
    setValue: "Odpowiedź",
    // [Auto-translated] "Image format"
    dataFormat: "Format obrazu",
    // [Auto-translated] "Allow adding rows"
    allowAddRows: "Zezwalaj na dodawanie wierszy",
    // [Auto-translated] "Allow removing rows"
    allowRemoveRows: "Zezwalaj na usuwanie wierszy",
    // [Auto-translated] "Allow row drag and drop"
    allowRowReorder: "Zezwalaj na przeciąganie i upuszczanie wierszy",
    // [Auto-translated] "Does not apply if you specify the exact image width or height."
    responsiveImageSizeHelp: "Nie ma zastosowania, jeśli określisz dokładną szerokość lub wysokość obrazu.",
    // [Auto-translated] "Minimum image width"
    minImageWidth: "Minimalna szerokość obrazu",
    // [Auto-translated] "Maximum image width"
    maxImageWidth: "Maksymalna szerokość obrazu",
    // [Auto-translated] "Minimum image height"
    minImageHeight: "Minimalna wysokość obrazu",
    // [Auto-translated] "Maximum image height"
    maxImageHeight: "Maksymalna wysokość obrazu",
    // [Auto-translated] "Minimum value"
    minValue: "Wartość minimalna",
    // [Auto-translated] "Maximum value"
    maxValue: "Wartość maksymalna",
    // [Auto-translated] "Case insensitive"
    caseInsensitive: "Bez uwzględniania wielkości liter",
    // [Auto-translated] "Minimum length (in characters)"
    minLength: "Minimalna długość (w znakach)",
    // [Auto-translated] "Allow digits"
    allowDigits: "Zezwalaj na cyfry",
    // [Auto-translated] "Minimum count"
    minCount: "Minimalna liczba",
    // [Auto-translated] "Maximum count"
    maxCount: "Maksymalna liczba",
    // [Auto-translated] "Regular expression"
    regex: "Wyrażenie regularne",
    surveyvalidator: {
      // [Auto-translated] "Error message"
      text: "Komunikat o błędzie",
      // [Auto-translated] "Validation expression"
      expression: "Wyrażenie sprawdzania poprawności"
    },
    // [Auto-translated] "Total row text"
    totalText: "Tekst wiersza sumy",
    // [Auto-translated] "Total type"
    totalType: "Typ sumy",
    // [Auto-translated] "Total expression"
    totalExpression: "Wyrażenie całkowite",
    // [Auto-translated] "Total value display style"
    totalDisplayStyle: "Styl wyświetlania łącznej wartości",
    // [Auto-translated] "Currency"
    totalCurrency: "Waluta",
    // [Auto-translated] "Formatted string"
    totalFormat: "Sformatowany ciąg znaków",
    // [Auto-translated] "Logo (URL or base64-encoded string)"
    logo: "Logo (adres URL lub ciąg znaków zakodowany w formacie base64)",
    // [Auto-translated] "Survey structure"
    questionsOnPageMode: "Struktura badania",
    // [Auto-translated] "Maximum answer length (in characters)"
    maxTextLength: "Maksymalna długość odpowiedzi (w znakach)",
    // [Auto-translated] "Maximum comment length (in characters)"
    maxCommentLength: "Maksymalna długość komentarza (w znakach)",
    // [Auto-translated] "Comment area height (in lines)"
    commentAreaRows: "Wysokość obszaru komentarza (w wierszach)",
    // [Auto-translated] "Auto-expand comment area if necessary"
    autoGrowComment: "W razie potrzeby automatycznie rozwiń obszar komentarza",
    // [Auto-translated] "Allow users to resize text areas"
    allowResizeComment: "Zezwalaj użytkownikom na zmianę rozmiaru obszarów tekstu",
    // "Update input field values"
    textUpdateMode: "Aktualizowanie wartości pytania tekstowego",
    // [Auto-translated] "Input mask type"
    maskType: "Typ maski wprowadzania",
    // [Auto-translated] "Set focus on the first invalid answer"
    autoFocusFirstError: "Ustaw fokus na pierwszej nieprawidłowej odpowiedzi",
    // [Auto-translated] "Run validation"
    checkErrorsMode: "Sprawdzanie poprawności uruchamiania",
    // [Auto-translated] "Validate empty fields on lost focus"
    validateVisitedEmptyFields: "Weryfikowanie pustych pól w przypadku utraty fokusu",
    // [Auto-translated] "Navigate to URL"
    navigateToUrl: "Przejdź do adresu URL",
    // [Auto-translated] "Dynamic URL"
    navigateToUrlOnCondition: "Dynamiczny adres URL",
    // [Auto-translated] "Markup to show if the user already filled out this survey"
    completedBeforeHtml: "Znaczniki, aby pokazać, czy użytkownik już wypełnił tę ankietę",
    // [Auto-translated] "Survey Complete page markup"
    completedHtml: "Znaczniki strony Survey Complete",
    // [Auto-translated] "Dynamic Survey Complete page markup"
    completedHtmlOnCondition: "Znaczniki strony Dynamic Survey Complete",
    // [Auto-translated] "Markup to show while survey model is loading"
    loadingHtml: "Znaczniki do pokazania podczas ładowania modelu ankiety",
    // [Auto-translated] "Comment area text"
    commentText: "Tekst w obszarze komentarza",
    // [Auto-translated] "Autocomplete type"
    autocomplete: "Typ autouzupełniania",
    // "Label for \"True\""
    labelTrue: "Etykieta \"prawdziwa\"",
    // "Label for \"False\""
    labelFalse: "Etykieta \"Fałsz\"",
    // "Show the Clear button"
    allowClear: "Pokaż przycisk Wyczyść",
    // [Auto-translated] "Search Mode"
    searchMode: "Tryb wyszukiwania",
    // [Auto-translated] "Value display style"
    displayStyle: "Styl wyświetlania wartości",
    // [Auto-translated] "Formatted string"
    format: "Sformatowany ciąg znaków",
    // [Auto-translated] "Maximum fractional digits"
    maximumFractionDigits: "Maksymalna liczba cyfr ułamkowych",
    // [Auto-translated] "Minimum fractional digits"
    minimumFractionDigits: "Minimalne cyfry ułamkowe",
    // [Auto-translated] "Display grouping separators"
    useGrouping: "Wyświetlanie separatorów grupujących",
    // [Auto-translated] "Allow multiple files"
    allowMultiple: "Zezwalaj na wiele plików",
    // [Auto-translated] "Preview images"
    allowImagesPreview: "Podgląd obrazów",
    // [Auto-translated] "Accepted file types"
    acceptedTypes: "Akceptowane typy plików",
    // [Auto-translated] "Wait for the upload to complete"
    waitForUpload: "Poczekaj na zakończenie przesyłania",
    // [Auto-translated] "Confirm file deletion"
    needConfirmRemoveFile: "Potwierdź usunięcie pliku",
    // [Auto-translated] "Detail panel location"
    detailPanelMode: "Położenie panelu szczegółów",
    // [Auto-translated] "Minimum row count"
    minRowCount: "Minimalna liczba wierszy",
    // [Auto-translated] "Maximum row count"
    maxRowCount: "Maksymalna liczba wierszy",
    // "Confirm row removal"
    confirmDelete: "Potwierdź usunięcie wiersza",
    // [Auto-translated] "Confirmation message"
    confirmDeleteText: "Komunikat potwierdzenia",
    // [Auto-translated] "Initial panel count"
    panelCount: "Początkowa liczba paneli",
    // [Auto-translated] "Minimum panel count"
    minPanelCount: "Minimalna liczba paneli",
    // [Auto-translated] "Maximum panel count"
    maxPanelCount: "Maksymalna liczba paneli",
    // [Auto-translated] "Inner panel expand state"
    panelsState: "Stan rozwinięcia panelu wewnętrznego",
    // [Auto-translated] "Previous Panel button tooltip"
    prevPanelText: "Poprzednia etykietka przycisku panelu",
    // [Auto-translated] "Next Panel button tooltip"
    nextPanelText: "Przycisk Następny panel — etykietka narzędzia",
    // [Auto-translated] "Remove Panel button location"
    removePanelButtonLocation: "Usuń położenie przycisku panelu",
    // [Auto-translated] "Hide the question if there are no rows"
    hideIfRowsEmpty: "Ukryj pytanie, jeśli nie ma wierszy",
    // [Auto-translated] "Hide columns if there are no rows"
    hideColumnsIfEmpty: "Ukryj kolumny, jeśli nie ma wierszy",
    // [Auto-translated] "Custom rate values"
    rateValues: "Niestandardowe wartości stawek",
    // [Auto-translated] "Rate count"
    rateCount: "Liczba stawek",
    // [Auto-translated] "How to specify rate values?"
    autoGenerate: "Jak określić wartości stawek?",
    slider: {
      // [Auto-translated] "Min value"
      min: "Wartość minimalna",
      // [Auto-translated] "Max value"
      max: "Wartość maksymalna",
      // [Auto-translated] "Step value"
      step: "Wartość kroku",
      // [Auto-translated] "Show scale labels"
      showLabels: "Pokazywanie etykiet skali",
      // [Auto-translated] "Show tooltips"
      tooltipVisibilityPG: "Pokaż podpowiedzi",
      // [Auto-translated] "Allow thumb crossing"
      allowSwap: "Zezwalaj na krzyżowanie kciuka",
      // [Auto-translated] "Number of auto-generated labels"
      labelCount: "Liczba automatycznie wygenerowanych etykiet",
      // [Auto-translated] "Min value expression"
      minValueExpression: "Wyrażenie wartości minimalnej",
      // [Auto-translated] "Max value expression"
      maxValueExpression: "Wyrażenie wartości maksymalnej",
      // [Auto-translated] "Scale labels configuration"
      autoGenerate: "Konfiguracja etykiet skalowania",
      // [Auto-translated] "Slider type"
      sliderType: "Typ suwaka",
      // [Auto-translated] "The minimum distance between the slider thumbs a user can set."
      minRangeLength: "Minimalna długość zakresu",
      // [Auto-translated] "The maximum distance between the slider thumbs a user can set."
      maxRangeLength: "Maksymalna długość zasięgu",
      // [Auto-translated] "Custom labels"
      customLabels: "Etykiety niestandardowe",
      // [Auto-translated] "Label format"
      labelFormat: "Format etykiety",
      // [Auto-translated] "Tooltip format"
      tooltipFormat: "Format podpowiedzi"
    },
    file: {
      // [Auto-translated] "Adjusts the height of the image in the survey results."
      imageHeight: "Wysokość obrazu",
      // [Auto-translated] "Adjusts the width of the image in the survey results."
      imageWidth: "Szerokość obrazu"
    },
    // [Auto-translated] "Hide the question if it contains no choices"
    hideIfChoicesEmpty: "Ukryj pytanie, jeśli nie zawiera opcji wyboru",
    // "Minimum width"
    minWidth: "Minimalna szerokość (w wartościach akceptowanych przez CSS)",
    // "Maximum width"
    maxWidth: "Maksymalna szerokość (w wartościach akceptowanych przez CSS)",
    // "Width"
    width: "Szerokość (w wartościach akceptowanych przez CSS)",
    // [Auto-translated] "Show column headers"
    showHeader: "Pokaż nagłówki kolumn",
    // [Auto-translated] "Show horizontal scrollbar"
    horizontalScroll: "Pokaż poziomy pasek przewijania",
    // [Auto-translated] "Minimum column width (in CSS-accepted values)"
    columnMinWidth: "Minimalna szerokość kolumny (w wartościach akceptowanych przez CSS)",
    // [Auto-translated] "Row header width (in CSS-accepted values)"
    rowTitleWidth: "Szerokość nagłówka wiersza (w wartościach akceptowanych przez CSS)",
    // "Value to store when \"True\" is selected"
    valueTrue: "\"Prawdziwa\" wartość",
    // "Value to store when \"False\" is selected"
    valueFalse: "Wartość \"False\"",
    // "\"Value is below minimum\" error message"
    minErrorText: "Komunikat o błędzie \"Wartość jest niższa niż minimalna\"",
    // "\"Value exceeds maximum\" error message"
    maxErrorText: "Komunikat o błędzie \"Wartość przekracza maksimum\"",
    // "\"Empty comment\" error message"
    otherErrorText: "Komunikat o błędzie \"Pusty komentarz\"",
    // "Error message for duplicate responses"
    keyDuplicationError: "Komunikat o błędzie \"Nieunikalna wartość klucza\"",
    // [Auto-translated] "Minimum selected choices"
    minSelectedChoices: "Minimalna wybrana opcja",
    // [Auto-translated] "Maximum selected choices"
    maxSelectedChoices: "Maksymalna liczba wybranych opcji",
    // [Auto-translated] "Logo width (in CSS-accepted values)"
    logoWidth: "Szerokość logo (w wartościach akceptowanych przez CSS)",
    // [Auto-translated] "Logo height (in CSS-accepted values)"
    logoHeight: "Wysokość logo (w wartościach akceptowanych przez CSS)",
    // "Read-only"
    readOnly: "Tylko do odczytu",
    // [Auto-translated] "Editable if"
    enableIf: "Edytowalne, jeśli",
    // "\"No rows\" message"
    noRowsText: "Komunikat \"Brak wierszy\"",
    // [Auto-translated] "Separate special choices (None, Other, Select All)"
    separateSpecialChoices: "Oddzielne opcje specjalne (Brak, Inne, Wybierz wszystko)",
    // [Auto-translated] "Copy choices from the following question"
    choicesFromQuestion: "Kopiowanie opcji z następującego pytania",
    // [Auto-translated] "Which choices to copy?"
    choicesFromQuestionMode: "Które opcje skopiować?",
    // [Auto-translated] "Use values from the following matrix column or panel question as choice IDs"
    choiceValuesFromQuestion: "Użyj wartości z poniższego pytania typu matrix, kolumna lub pytanie panelowe jako identyfikatory wyborów",
    // [Auto-translated] "Use values from the following matrix column or panel question as choice texts"
    choiceTextsFromQuestion: "Użyj wartości z poniższego pytania macierzowego, kolumnowego lub panelowego jako tekstów wyboru",
    // [Auto-translated] "Display page titles in progress bar"
    progressBarShowPageTitles: "Wyświetlanie tytułów stron na pasku postępu",
    // [Auto-translated] "Display page numbers in progress bar"
    progressBarShowPageNumbers: "Wyświetlanie numerów stron na pasku postępu",
    // [Auto-translated] "Show the comment area"
    showCommentArea: "Pokaż obszar komentarza",
    // [Auto-translated] "Comment area placeholder"
    commentPlaceholder: "Symbol zastępczy obszaru komentarza",
    // [Auto-translated] "Display rate descriptions as extreme values"
    displayRateDescriptionsAsExtremeItems: "Wyświetlanie opisów szybkości jako wartości ekstremalnych",
    // [Auto-translated] "Row order"
    rowOrder: "Kolejność wierszy",
    // [Auto-translated] "Column layout"
    columnsLayout: "Układ kolumn",
    // [Auto-translated] "Nested column count"
    columnColCount: "Liczba kolumn zagnieżdżonych",
    // [Auto-translated] "Correct Answer"
    correctAnswer: "Prawidłowa odpowiedź",
    // [Auto-translated] "Default Values"
    defaultPanelValue: "Wartości domyślne",
    // [Auto-translated] "Cell Texts"
    cells: "Teksty komórek",
    // [Auto-translated] "Select a file or paste a file link..."
    fileInputPlaceholder: "Wybierz plik lub wklej link do pliku...",
    // "Prevent duplicate responses in the following column"
    keyName: "Kolumna klucza",
    itemvalue: {
      // [Auto-translated] "Make the option visible if"
      visibleIf: "Uwidocznij opcję, jeśli",
      // [Auto-translated] "Make the option selectable if"
      enableIf: "Spraw, aby opcja była wybieralna, jeśli"
    },
    "itemvalue@rows": {
      // [Auto-translated] "Make the row visible if"
      visibleIf: "Uwidocznij wiersz, jeśli",
      // [Auto-translated] "Make the row editable if"
      enableIf: "Umożliwia edycję wiersza, jeśli"
    },
    imageitemvalue: {
      // "Alt text"
      text: "Tekst alternatywny"
    },
    // [Auto-translated] "Logo position"
    logoPosition: "Pozycja logo",
    // [Auto-translated] "Add logo..."
    addLogo: "Dodaj logo...",
    // [Auto-translated] "Change logo..."
    changeLogo: "Zmień logo...",
    logoPositions: {
      // [Auto-translated] "Remove logo"
      none: "Usuń logo",
      // [Auto-translated] "Left"
      left: "Lewy",
      // [Auto-translated] "Right"
      right: "Prawy",
      // [Auto-translated] "On the top"
      top: "Na górze",
      // [Auto-translated] "In the bottom"
      bottom: "Na dole"
    },
    // [Auto-translated] "Preview mode"
    previewMode: "Tryb podglądu",
    // [Auto-translated] "Enable the grid layout"
    gridLayoutEnabled: "Włączanie układu siatki",
    // [Auto-translated] "Grid layout columns"
    gridLayoutColumns: "Kolumny układu siatki",
    // [Auto-translated] "Mask settings"
    maskSettings: "Ustawienia maski",
    // [Auto-translated] "Row expansion error message alignment"
    detailErrorLocation: "Wyrównanie komunikatu o błędzie rozwijania wiersza",
    // Creator tabs
    tabs: {
      panel: {
        // [Auto-translated] "Layout"
        layout: "Układ panelu"
      },
      // "General"
      general: "Ogólne",
      // "Options"
      fileOptions: "Options",
      // "HTML Editor"
      html: "Html Editor",
      // "Columns"
      columns: "Kolumny",
      // "Rows"
      rows: "Wiersze",
      // "Choice Options"
      choices: "Odpowiedzi",
      // [Auto-translated] "Items"
      items: "Elementy",
      // "Visible If"
      visibleIf: "Widoczne jeśli",
      // "Editable If"
      enableIf: "Enable If",
      // [Auto-translated] "Required If"
      requiredIf: "Wymagane, jeśli",
      // "Rating Values"
      rateValues: "Wartość oceny",
      // [Auto-translated] "Slider Settings"
      sliderSettings: "Ustawienia suwaka",
      // "Choices from a Web Service"
      choicesByUrl: "Odpowiedzi z webserwisu",
      // "Default Choices"
      matrixChoices: "Default Choices",
      // "Text Inputs"
      multipleTextItems: "Text Inputs",
      // [Auto-translated] "Numbering"
      numbering: "Numerowanie",
      // "Validators"
      validators: "Validators",
      // "Navigation"
      navigation: "Navigation",
      // "Question Settings"
      question: "Question",
      // [Auto-translated] "Pages"
      pages: "Stron",
      // "Quiz Mode"
      timer: "Timer/Quiz",
      // [Auto-translated] "Calculated Values"
      calculatedValues: "Obliczone wartości",
      // "Triggers"
      triggers: "Triggers",
      // "Title template"
      templateTitle: "Template title",
      // [Auto-translated] "Totals"
      totals: "Sumy",
      // "Conditions"
      logic: "Logika",
      // [Auto-translated] "Input Mask Settings"
      mask: "Ustawienia maski wprowadzania",
      layout: {
        // [Auto-translated] "Layout"
        panel: "Układ",
        // [Auto-translated] "Layout"
        question: "Układ",
        // [Auto-translated] "Layout"
        base: "Układ"
      },
      // [Auto-translated] "Data"
      data: "Dane",
      // [Auto-translated] "Validation"
      validation: "Walidacja",
      // [Auto-translated] "Cell Texts"
      cells: "Teksty komórek",
      // [Auto-translated] "Survey Complete"
      showOnCompleted: "Ankieta zakończona",
      // [Auto-translated] "Logo in Survey Title"
      logo: "Logo w tytule ankiety",
      // [Auto-translated] "Slider"
      slider: "Suwak",
      // [Auto-translated] "Expression"
      expression: "Wyrażenie",
      // [Auto-translated] "Question Settings"
      questionSettings: "Ustawienia pytań",
      // "Header"
      header: "Nagłówek",
      // "Background"
      background: "Tło",
      // "Appearance"
      appearance: "Wygląd",
      // [Auto-translated] "Accent colors"
      accentColors: "Akcenty kolorystyczne",
      // [Auto-translated] "Surface Background"
      surfaceBackground: "Tło powierzchni",
      // [Auto-translated] "Scaling"
      scaling: "Skalowanie",
      // [Auto-translated] "Others"
      others: "Inni"
    },
    // "Edit property '{0}'"
    editProperty: "Edit property '{0}'",
    // "Items"
    items: "Items",
    // [Auto-translated] "Choices are visible if"
    choicesVisibleIf: "Wybory są widoczne, jeśli",
    // [Auto-translated] "Choices are selectable if"
    choicesEnableIf: "Wybory można wybrać, jeśli:",
    // [Auto-translated] "Columns are visible if"
    columnsEnableIf: "Kolumny są widoczne, jeśli",
    // [Auto-translated] "Rows are visible if"
    rowsEnableIf: "Wiersze są widoczne, jeśli",
    // [Auto-translated] "Add inner indents"
    innerIndent: "Dodawanie wcięć wewnętrznych",
    // [Auto-translated] "Use answers from the last entry as default"
    copyDefaultValueFromLastEntry: "Domyślnie używaj odpowiedzi z ostatniego wpisu",
    // "Please enter a value."
    enterNewValue: "Please, enter the value.",
    // "There are no questions in the survey."
    noquestions: "There is no any question in the survey.",
    // "Please create a trigger"
    createtrigger: "Please create a trigger",
    // [Auto-translated] "Press enter button to edit"
    titleKeyboardAdornerTip: "Naciśnij przycisk Enter, aby edytować",
    // [Auto-translated] "Press enter button to edit item, press delete button to delete item, press alt plus arrow up or arrow down to move item"
    keyboardAdornerTip: "Naciśnij przycisk Enter, aby edytować element, naciśnij przycisk Delete, aby usunąć element, naciśnij Alt plus strzałka w górę lub strzałka w dół, aby przenieść element",
    // "On "
    triggerOn: "On ",
    // "Make pages visible"
    triggerMakePagesVisible: "Make pages visible:",
    // "Make elements visible"
    triggerMakeQuestionsVisible: "Make elements visible:",
    // "Complete the survey if successful."
    triggerCompleteText: "Complete the survey if succeed.",
    // "The trigger is not set"
    triggerNotSet: "The trigger is not set",
    // "Run if"
    triggerRunIf: "Run if",
    // "Change value of: "
    triggerSetToName: "Change value of: ",
    // [Auto-translated] "Copy value from: "
    triggerFromName: "Skopiuj wartość z: ",
    // [Auto-translated] "Run this Expression"
    triggerRunExpression: "Uruchom to wyrażenie",
    // "to: "
    triggerSetValue: "to: ",
    // [Auto-translated] "Go to the question"
    triggerGotoName: "Przejdź do pytania",
    // "Do not put the variable into the survey result."
    triggerIsVariable: "Do not put the variable into the survey result.",
    // [Auto-translated] "Please enter a valid expression"
    triggerRunExpressionEmpty: "Wpisz poprawne wyrażenie",
    // [Auto-translated] "Type expression here..."
    emptyExpressionPlaceHolder: "Wpisz wyrażenie tutaj...",
    // [Auto-translated] "No file choosen"
    noFile: "Nie wybrano pliku",
    // [Auto-translated] "Clear the value if the question becomes hidden"
    clearIfInvisible: "Wyczyść wartość, jeśli pytanie zostanie ukryte",
    // [Auto-translated] "Value property name"
    valuePropertyName: "Nazwa właściwości Value",
    // [Auto-translated] "Enable search"
    searchEnabled: "Włącz wyszukiwanie",
    // [Auto-translated] "Hide selected items"
    hideSelectedItems: "Ukrywanie zaznaczonych elementów",
    // [Auto-translated] "Close the dropdown after selection"
    closeOnSelect: "Zamknij listę rozwijaną po dokonaniu wyboru",
    // [Auto-translated] "Vertical alignment"
    verticalAlign: "Wyrównanie w pionie",
    // [Auto-translated] "Alternate rows"
    alternateRows: "Alternatywne wiersze",
    // [Auto-translated] "Columns are visible if"
    columnsVisibleIf: "Kolumny są widoczne, jeśli",
    // [Auto-translated] "Rows are visible if"
    rowsVisibleIf: "Wiersze są widoczne, jeśli",
    // [Auto-translated] "Comment area placeholder"
    otherPlaceholder: "Symbol zastępczy obszaru komentarza",
    // [Auto-translated] "File placeholder text"
    filePlaceholder: "Tekst zastępczy pliku",
    // [Auto-translated] "Photo placeholder text"
    photoPlaceholder: "Tekst zastępczy zdjęcia",
    // [Auto-translated] "File or photo placeholder text"
    fileOrPhotoPlaceholder: "Tekst zastępczy pliku lub zdjęcia",
    // [Auto-translated] "Rate type"
    rateType: "Rodzaj stawki",
    // [Auto-translated] "Ex.: https://api.example.com/books"
    url_placeholder: "Przykład: https://api.example.com/books",
    // [Auto-translated] "Ex.: categories.fiction"
    path_placeholder: "Np.: kategorie.beletrystyka",
    // [Auto-translated] "Ex.: a)"
    questionStartIndex_placeholder: "Np.: a)",
    // [Auto-translated] "Ex.: 6in"
    width_placeholder: "Np.: 6 cali",
    // [Auto-translated] "Ex.: 600px"
    minWidth_placeholder: "Przykład: 600 pikseli",
    // [Auto-translated] "Ex.: 50%"
    maxWidth_placeholder: "Przykład: 50%",
    // "auto"
    imageHeight_placeholder: "Automatycznie",
    // "auto"
    imageWidth_placeholder: "Automatycznie",
    // [Auto-translated] "Ex.: 100px"
    itemTitleWidth_placeholder: "Przykład: 100px",
    theme: {
      // [Auto-translated] "Theme"
      themeName: "Kompozycja",
      // [Auto-translated] "Question appearance"
      isPanelless: "Wygląd pytania",
      // [Auto-translated] "Input element"
      editorPanel: "Tło i promień narożnika",
      // [Auto-translated] "Panel background and corner radius"
      questionPanel: "Tło i promień narożnika",
      // [Auto-translated] "Accent color"
      primaryColor: "Kolor akcentujący",
      // [Auto-translated] "Panel background opacity"
      panelBackgroundTransparency: "Krycie tła panelu",
      // [Auto-translated] "Question background opacity"
      questionBackgroundTransparency: "Nieprzezroczystość tła pytania",
      // [Auto-translated] "Font size"
      fontSize: "Rozmiar czcionki",
      // [Auto-translated] "Scale"
      scale: "Skala",
      // [Auto-translated] "Corner radius"
      cornerRadius: "Promień naroża",
      // [Auto-translated] "Advanced mode"
      advancedMode: "Tryb zaawansowany",
      // [Auto-translated] "Page title font"
      pageTitle: "Czcionka tytułu",
      // [Auto-translated] "Page description font"
      pageDescription: "Czcionka opisu",
      // [Auto-translated] "Question title font"
      questionTitle: "Czcionka tytułu",
      // [Auto-translated] "Question description font"
      questionDescription: "Czcionka opisu",
      // [Auto-translated] "Input element font"
      editorFont: "Czcionka",
      // [Auto-translated] "Opacity"
      backgroundOpacity: "Nieprzezroczystość",
      // [Auto-translated] "Font family"
      "--sjs-font-family": "Rodzina czcionek",
      // [Auto-translated] "Background color"
      "--sjs-general-backcolor-dim": "Kolor tła",
      // [Auto-translated] "Accent background"
      "--sjs-primary-backcolor": "Tło akcentu",
      // [Auto-translated] "Accent foreground"
      "--sjs-primary-forecolor": "Akcent na pierwszym planie",
      // [Auto-translated] "Error messages"
      "--sjs-special-red": "Komunikaty o błędach",
      // [Auto-translated] "Shadow effects"
      "--sjs-shadow-small": "Efekty cienia",
      // [Auto-translated] "Shadow effects"
      "--sjs-shadow-inner": "Efekty cienia",
      // [Auto-translated] "Colors"
      "--sjs-border-default": "Kolory"
    },
    "header@header": {
      // [Auto-translated] "View"
      headerView: "Widok",
      // [Auto-translated] "Logo position"
      logoPosition: "Pozycja logo",
      // [Auto-translated] "Survey title font"
      surveyTitle: "Czcionka tytułu ankiety",
      // [Auto-translated] "Survey description font"
      surveyDescription: "Czcionka opisu ankiety",
      // [Auto-translated] "Survey title font"
      headerTitle: "Czcionka tytułu ankiety",
      // [Auto-translated] "Survey description font"
      headerDescription: "Czcionka opisu ankiety",
      // [Auto-translated] "Content area width"
      inheritWidthFrom: "Szerokość obszaru zawartości",
      // [Auto-translated] "Text width"
      textAreaWidth: "Szerokość tekstu",
      // [Auto-translated] "Background color"
      backgroundColorSwitch: "Kolor tła",
      // [Auto-translated] "Background image"
      backgroundImage: "Obraz w tle",
      // [Auto-translated] "Opacity"
      backgroundImageOpacity: "Nieprzezroczystość",
      // [Auto-translated] "Overlap"
      overlapEnabled: "Zachodzić na siebie",
      // [Auto-translated] "Logo position"
      logoPositionX: "Pozycja logo",
      // [Auto-translated] "Title position"
      titlePositionX: "Pozycja tytułu",
      // [Auto-translated] "Description position"
      descriptionPositionX: "Opis pozycja"
    }
  },
  // Property values
  pv: {
    // [Auto-translated] "true"
    "true": "prawdziwy",
    // [Auto-translated] "false"
    "false": "fałszywy",
    // [Auto-translated] "Local files"
    file: "Pliki lokalne",
    // [Auto-translated] "Camera"
    camera: "Kamera",
    // [Auto-translated] "Local files or camera"
    "file-camera": "Pliki lokalne lub aparat",
    // [Auto-translated] "Inherit"
    inherit: "Odziedziczyć",
    // [Auto-translated] "Visible"
    show: "Widoczny",
    // [Auto-translated] "Hidden"
    hide: "Ukryty",
    // [Auto-translated] "Inherit"
    default: "Odziedziczyć",
    // [Auto-translated] "Initial"
    initial: "Inicjał",
    // [Auto-translated] "Random"
    random: "Losowy",
    // [Auto-translated] "Collapsed"
    collapsed: "Zwinięty",
    // [Auto-translated] "Expanded"
    expanded: "Rozszerzony",
    // [Auto-translated] "None"
    none: "Żaden",
    // [Auto-translated] "Ascending"
    asc: "Rosnąco",
    // [Auto-translated] "Descending"
    desc: "Malejąco",
    // [Auto-translated] "Indeterminate"
    indeterminate: "Nieokreślony",
    // [Auto-translated] "Selected"
    selected: "Wybrany",
    // [Auto-translated] "Unselected"
    unselected: "Niezaznaczone",
    // [Auto-translated] "decimal"
    decimal: "dziesiętny",
    // [Auto-translated] "currency"
    currency: "waluta",
    // [Auto-translated] "percent"
    percent: "procent",
    // [Auto-translated] "First panel is expanded"
    firstExpanded: "Pierwszy panel jest rozwinięty",
    // [Auto-translated] "Hide question numbers"
    off: "Ukryj numery pytań",
    // [Auto-translated] "List"
    list: "Lista",
    // [Auto-translated] "Carousel"
    carousel: "Karuzela",
    // [Auto-translated] "Tabs"
    tab: "Karty",
    // [Auto-translated] "Panel navigator + Progress bar at the top"
    progressTop: "Nawigator paneli + pasek postępu u góry",
    // [Auto-translated] "Panel navigator + Progress bar at the bottom"
    progressBottom: "Nawigator panelu + pasek postępu u dołu",
    // [Auto-translated] "Panel navigator + Progress bar at the top and bottom"
    progressTopBottom: "Nawigator panelu + pasek postępu u góry i u dołu",
    // [Auto-translated] "Horizontal"
    horizontal: "Poziomy",
    // [Auto-translated] "Vertical"
    vertical: "Pionowy",
    // [Auto-translated] "Top"
    top: "Do góry",
    // [Auto-translated] "Bottom"
    bottom: "Dno",
    // [Auto-translated] "Top and bottom"
    topBottom: "Góra i dół",
    // [Auto-translated] "Both"
    both: "Obie",
    // [Auto-translated] "Left"
    left: "Lewy",
    // [Auto-translated] "Right"
    right: "Prawy",
    // [Auto-translated] "Center"
    center: "Centrum",
    // [Auto-translated] "Left and right"
    leftRight: "Lewy i prawy",
    // [Auto-translated] "Middle"
    middle: "Środek",
    // [Auto-translated] "color"
    color: "Kolor",
    // [Auto-translated] "date"
    date: "data",
    // [Auto-translated] "datetime"
    datetime: "datagodzina",
    // [Auto-translated] "datetime-local"
    "datetime-local": "datetime-local",
    // [Auto-translated] "email"
    email: "E-mail",
    // [Auto-translated] "month"
    month: "miesiąc",
    // [Auto-translated] "number"
    number: "numer",
    // [Auto-translated] "password"
    password: "hasło",
    // [Auto-translated] "range"
    range: "zakres",
    // [Auto-translated] "tel"
    tel: "Tel",
    // [Auto-translated] "text"
    text: "Tekst",
    // [Auto-translated] "time"
    time: "Godzina",
    // [Auto-translated] "url"
    url: "adres URL",
    // [Auto-translated] "week"
    week: "tydzień",
    // [Auto-translated] "Hidden"
    hidden: "Ukryty",
    // [Auto-translated] "Editable"
    edit: "Edytowalny",
    // [Auto-translated] "Read-only"
    display: "Tylko do odczytu",
    // [Auto-translated] "Contain"
    contain: "Zawierać",
    // [Auto-translated] "Cover"
    cover: "Pokryć",
    // [Auto-translated] "Fill"
    fill: "Wypełnić",
    // [Auto-translated] "Next"
    next: "Następny",
    // [Auto-translated] "Last"
    last: "Ostatni",
    // [Auto-translated] "When the survey is completed"
    onComplete: "Po zakończeniu ankiety",
    // [Auto-translated] "When the question becomes hidden"
    onHidden: "Gdy pytanie zostanie ukryte",
    // [Auto-translated] "When the question or its panel/page becomes hidden"
    onHiddenContainer: "Gdy pytanie lub jego panel/strona zostaną ukryte",
    clearInvisibleValues: {
      // [Auto-translated] "Never"
      none: "Nigdy"
    },
    clearIfInvisible: {
      // [Auto-translated] "Never"
      none: "Nigdy"
    },
    // [Auto-translated] "Radio Buttons"
    radio: "Przycisków",
    inputType: {
      // [Auto-translated] "Color"
      color: "Kolor",
      // [Auto-translated] "Date"
      date: "Data",
      // [Auto-translated] "Date and Time"
      "datetime-local": "Data i godzina",
      // [Auto-translated] "Email"
      email: "E-mail",
      // [Auto-translated] "Month"
      month: "Miesiąc",
      // [Auto-translated] "Number"
      number: "Numer",
      // [Auto-translated] "Password"
      password: "Hasło",
      // [Auto-translated] "Range"
      range: "Zakres",
      // [Auto-translated] "Phone Number"
      tel: "Numer",
      // [Auto-translated] "Text"
      text: "Tekst",
      // [Auto-translated] "Time"
      time: "Godzina",
      // [Auto-translated] "URL"
      url: "Adres URL",
      // [Auto-translated] "Week"
      week: "Tydzień"
    },
    sliderType: {
      // [Auto-translated] "Single-Value"
      single: "Pojedyncza wartość",
      // [Auto-translated] "Range"
      range: "Zakres"
    },
    autocomplete: {
      // [Auto-translated] "Full Name"
      name: "Imię i nazwisko",
      // [Auto-translated] "Prefix"
      "honorific-prefix": "Przedrostek",
      // [Auto-translated] "First Name"
      "given-name": "Imię",
      // [Auto-translated] "Middle Name"
      "additional-name": "Drugie imię",
      // [Auto-translated] "Last Name"
      "family-name": "Nazwisko",
      // [Auto-translated] "Suffix"
      "honorific-suffix": "Przyrostek",
      // [Auto-translated] "Nickname"
      nickname: "Przydomek",
      // [Auto-translated] "Job Title"
      "organization-title": "Stanowisko",
      // [Auto-translated] "User Name"
      username: "Nazwa użytkownika",
      // [Auto-translated] "New Password"
      "new-password": "Nowe hasło",
      // [Auto-translated] "Current Password"
      "current-password": "Aktualne hasło",
      // [Auto-translated] "Organization Name"
      organization: "Nazwa organizacji",
      // [Auto-translated] "Full Street Address"
      "street-address": "Pełna ulica i numer domu",
      // [Auto-translated] "Address Line 1"
      "address-line1": "Adres (wiersz 1)",
      // [Auto-translated] "Address Line 2"
      "address-line2": "Wiersz adresu 2",
      // [Auto-translated] "Address Line 3"
      "address-line3": "Adres (wiersz 3)",
      // [Auto-translated] "Level 4 Address"
      "address-level4": "Adres poziomu 4",
      // [Auto-translated] "Level 3 Address"
      "address-level3": "Adres poziomu 3",
      // [Auto-translated] "Level 2 Address"
      "address-level2": "Adres poziomu 2",
      // [Auto-translated] "Level 1 Address"
      "address-level1": "Adres poziomu 1",
      // [Auto-translated] "Country Code"
      country: "Kod kraju",
      // [Auto-translated] "Country Name"
      "country-name": "Nazwa kraju",
      // [Auto-translated] "Postal Code"
      "postal-code": "Kod pocztowy",
      // [Auto-translated] "Cardholder Name"
      "cc-name": "Imię i nazwisko posiadacza karty",
      // [Auto-translated] "Cardholder First Name"
      "cc-given-name": "Imię posiadacza karty",
      // [Auto-translated] "Cardholder Middle Name"
      "cc-additional-name": "Drugie imię posiadacza karty",
      // [Auto-translated] "Cardholder Last Name"
      "cc-family-name": "Nazwisko posiadacza karty",
      // [Auto-translated] "Credit Card Number"
      "cc-number": "Numer karty kredytowej",
      // [Auto-translated] "Expiration Date"
      "cc-exp": "Data ważności",
      // [Auto-translated] "Expiration Month"
      "cc-exp-month": "Miesiąc wygaśnięcia",
      // [Auto-translated] "Expiration Year"
      "cc-exp-year": "Rok wygaśnięcia",
      // [Auto-translated] "Card Security Code"
      "cc-csc": "Kod zabezpieczający karty",
      // [Auto-translated] "Credit Card Type"
      "cc-type": "Rodzaj karty kredytowej",
      // [Auto-translated] "Transaction Currency"
      "transaction-currency": "Waluta transakcji",
      // [Auto-translated] "Transaction Amount"
      "transaction-amount": "Kwota transakcji",
      // [Auto-translated] "Preferred Language"
      language: "Preferowany język",
      // [Auto-translated] "Birthday"
      bday: "Urodziny",
      // [Auto-translated] "Birthday Day"
      "bday-day": "Dzień urodzin",
      // [Auto-translated] "Birthday Month"
      "bday-month": "Miesiąc urodzin",
      // [Auto-translated] "Birthday Year"
      "bday-year": "Rok urodzin",
      // [Auto-translated] "Gender"
      sex: "Płeć",
      // [Auto-translated] "Website URL"
      url: "Adres URL strony internetowej",
      // [Auto-translated] "Profile Photo"
      photo: "Zdjęcie profilowe",
      // [Auto-translated] "Telephone Number"
      tel: "Numer telefonu",
      // [Auto-translated] "Country Code for Phone"
      "tel-country-code": "Numer kierunkowy kraju do telefonu",
      // [Auto-translated] "National Telephone Number"
      "tel-national": "Krajowy numer telefonu",
      // [Auto-translated] "Area Code"
      "tel-area-code": "Numer kierunkowy",
      // [Auto-translated] "Local Phone Number"
      "tel-local": "Lokalny numer telefonu",
      // [Auto-translated] "Local Phone Prefix"
      "tel-local-prefix": "Prefiks telefonu lokalnego",
      // [Auto-translated] "Local Phone Suffix"
      "tel-local-suffix": "Sufiks telefonu lokalnego",
      // [Auto-translated] "Phone Extension"
      "tel-extension": "Rozszerzenie telefonu",
      // [Auto-translated] "Email Address"
      email: "Adres e-mail",
      // [Auto-translated] "Instant Messaging Protocol"
      impp: "Protokół wiadomości błyskawicznych"
    },
    maskType: {
      // [Auto-translated] "None"
      none: "Żaden",
      // [Auto-translated] "Pattern"
      pattern: "Deseń",
      // [Auto-translated] "Numeric"
      numeric: "Numeryczny",
      // [Auto-translated] "Date and Time"
      datetime: "Data i godzina",
      // [Auto-translated] "Currency"
      currency: "Waluta"
    },
    inputTextAlignment: {
      // [Auto-translated] "Auto"
      auto: "Automatycznie",
      // [Auto-translated] "Left"
      left: "Lewy",
      // [Auto-translated] "Right"
      right: "Prawy"
    },
    // [Auto-translated] "All"
    all: "Cały",
    // [Auto-translated] "Page"
    page: "Strona",
    // [Auto-translated] "Survey"
    survey: "Sondaż",
    // [Auto-translated] "When switching to the next page"
    onNextPage: "Podczas przełączania do następnej strony",
    // [Auto-translated] "After an answer is changed"
    onValueChanged: "Po zmianie odpowiedzi",
    // [Auto-translated] "Before an answer is changed"
    onValueChanging: "Zanim odpowiedź zostanie zmieniona",
    questionsOnPageMode: {
      // [Auto-translated] "Original structure"
      standard: "Oryginalna struktura",
      // [Auto-translated] "All questions on a single page"
      singlePage: "Pokaż wszystkie pytania na jednej stronie",
      // [Auto-translated] "Each question on an individual page"
      questionPerPage: "Pokaż pojedyncze pytanie na stronie",
      // [Auto-translated] "Show single input field per page"
      inputPerPage: "Pokaż pojedyncze pole wejściowe na stronę"
    },
    // [Auto-translated] "No preview"
    noPreview: "Brak podglądu",
    // [Auto-translated] "Show all questions"
    showAllQuestions: "Pokaż wszystkie pytania",
    // [Auto-translated] "Show answered questions only"
    showAnsweredQuestions: "Pokaż tylko odpowiedzi na pytania",
    // [Auto-translated] "Show all questions"
    allQuestions: "Pokaż wszystkie pytania",
    // [Auto-translated] "Show answered questions only"
    answeredQuestions: "Pokaż tylko pytania, na które udzielono odpowiedzi",
    // [Auto-translated] "Completed pages"
    pages: "Ukończone strony",
    // [Auto-translated] "Answered questions"
    questions: "Odpowiedzi na pytania",
    // [Auto-translated] "Answered required questions"
    requiredQuestions: "Odpowiedzi na wymagane pytania",
    // [Auto-translated] "Valid answers"
    correctQuestions: "Prawidłowe odpowiedzi",
    // [Auto-translated] "Completed pages (button UI)"
    buttons: "Ukończone strony (interfejs użytkownika)",
    // [Auto-translated] "Under the input"
    underInput: "Pod wejściem",
    // [Auto-translated] "Under the title"
    underTitle: "Pod tytułem",
    // [Auto-translated] "On blur"
    onBlur: "Na rozmyciu",
    // [Auto-translated] "While typing"
    onTyping: "Podczas pisania",
    // [Auto-translated] "Under the row"
    underRow: "Pod rzędem",
    // [Auto-translated] "Under the row, only one panel is visible"
    underRowSingle: "Pod wierszem widoczny jest tylko jeden panel",
    // "Auto"
    auto: "Automatycznie",
    showNavigationButtons: {
      // [Auto-translated] "Hidden"
      none: "Ukryty"
    },
    timerInfoMode: {
      // "Both"
      combined: "Obie"
    },
    addRowButtonLocation: {
      // [Auto-translated] "Depends on matrix layout"
      default: "Zależy od układu macierzy"
    },
    panelsState: {
      // [Auto-translated] "Users cannot expand or collapse panels"
      default: "Użytkownicy nie mogą rozwijać ani zwijać paneli",
      // [Auto-translated] "All panels are collapsed"
      collapsed: "Wszystkie panele są zwinięte",
      // [Auto-translated] "All panels are expanded"
      expanded: "Wszystkie panele są rozszerzone",
      // [Auto-translated] "First expanded"
      firstExpanded: "Pierwsze rozszerzone"
    },
    widthMode: {
      // [Auto-translated] "Static"
      static: "Statyczny",
      // [Auto-translated] "Responsive"
      responsive: "Elastyczne"
    },
    contentMode: {
      // [Auto-translated] "Image"
      image: "Obraz",
      // [Auto-translated] "Video"
      video: "Wideo",
      // [Auto-translated] "YouTube"
      youtube: "Serwis YouTube"
    },
    displayMode: {
      // [Auto-translated] "Buttons"
      buttons: "Przyciski",
      // [Auto-translated] "Dropdown"
      dropdown: "Lista rozwijana"
    },
    rateColorMode: {
      // [Auto-translated] "Default"
      default: "Domyślny",
      // [Auto-translated] "Scale"
      scale: "Skala"
    },
    scaleColorMode: {
      // [Auto-translated] "Monochrome"
      monochrome: "Monochromatyczny",
      // [Auto-translated] "Colored"
      colored: "Kolorowe"
    },
    autoGenerate: {
      // [Auto-translated] "Generate"
      "true": "Stworzyć",
      // [Auto-translated] "Enter manually"
      "false": "Wprowadź ręcznie"
    },
    rateType: {
      // [Auto-translated] "Labels"
      labels: "Etykiety",
      // [Auto-translated] "Stars"
      stars: "Gwiazdy",
      // [Auto-translated] "Smileys"
      smileys: "Uśmieszki"
    },
    state: {
      // [Auto-translated] "Locked"
      default: "Zablokowany"
    },
    showQuestionNumbers: {
      // [Auto-translated] "Auto-numbering"
      default: "Automatyczne numerowanie",
      // [Auto-translated] "Continue from the previous page"
      on: "Automatyczne numerowanie",
      // [Auto-translated] "Start on each page"
      onPage: "Resetuj na każdej stronie",
      // [Auto-translated] "Start on each panel"
      onpanel: "Resetuj na każdym panelu",
      // [Auto-translated] "Start on each panel"
      onPanel: "Resetuj na każdym panelu",
      // [Auto-translated] "Recursive numbering"
      recursive: "Numeracja rekurencyjna",
      // [Auto-translated] "Continue throughout the survey"
      onSurvey: "Kontynuuj badanie",
      // [Auto-translated] "No numbering"
      off: "Brak numeracji"
    },
    descriptionLocation: {
      // [Auto-translated] "Under the question title"
      underTitle: "Pod tytułem pytania",
      // [Auto-translated] "Under the input field"
      underInput: "Pod polem wprowadzania danych"
    },
    selectToRankAreasLayout: {
      // [Auto-translated] "Next to choices"
      horizontal: "Obok opcji do wyboru",
      // [Auto-translated] "Above choices"
      vertical: "Powyższe wybory"
    },
    displayStyle: {
      // [Auto-translated] "Decimal"
      decimal: "Dziesiętny",
      // [Auto-translated] "Currency"
      currency: "Waluta",
      // [Auto-translated] "Percentage"
      percent: "Procent",
      // [Auto-translated] "Date"
      date: "Data"
    },
    totalDisplayStyle: {
      // [Auto-translated] "Decimal"
      decimal: "Dziesiętny",
      // [Auto-translated] "Currency"
      currency: "Waluta",
      // [Auto-translated] "Percentage"
      percent: "Procent",
      // [Auto-translated] "Date"
      date: "Data"
    },
    rowOrder: {
      // [Auto-translated] "Original"
      initial: "Oryginał"
    },
    questionOrder: {
      // [Auto-translated] "Original"
      initial: "Oryginał"
    },
    progressBarLocation: {
      // [Auto-translated] "Top"
      top: "Do góry",
      // [Auto-translated] "Bottom"
      bottom: "Dno",
      // [Auto-translated] "Top and bottom"
      topbottom: "Góra i dół",
      // [Auto-translated] "Above the header"
      aboveheader: "Nad nagłówkiem",
      // [Auto-translated] "Below the header"
      belowheader: "Pod nagłówkiem",
      // [Auto-translated] "Hidden"
      off: "Ukryty"
    },
    // [Auto-translated] "Sum"
    sum: "Suma",
    // [Auto-translated] "Count"
    count: "Hrabia",
    // [Auto-translated] "Min"
    min: "Min",
    // [Auto-translated] "Max"
    max: "Max",
    // [Auto-translated] "Avg"
    avg: "Avg",
    searchMode: {
      // [Auto-translated] "Contains"
      contains: "Contains",
      // [Auto-translated] "Starts with"
      startsWith: "Zaczyna się od"
    },
    backgroundImageFit: {
      // [Auto-translated] "Auto"
      auto: "Automatycznie",
      // [Auto-translated] "Cover"
      cover: "Pokryć",
      // [Auto-translated] "Contain"
      contain: "Zawierać",
      // [Auto-translated] "Stretch"
      fill: "Rozciągnąć",
      // [Auto-translated] "Tile"
      tile: "Kafelek"
    },
    backgroundImageAttachment: {
      // [Auto-translated] "Fixed"
      fixed: "Stały",
      // [Auto-translated] "Scroll"
      scroll: "Przewijać"
    },
    headerView: {
      // [Auto-translated] "Basic"
      basic: "Podstawowy",
      // [Auto-translated] "Advanced"
      advanced: "Zaawansowany"
    },
    inheritWidthFrom: {
      // [Auto-translated] "Same as survey"
      survey: "Tak samo jak ankieta",
      // [Auto-translated] "Fit to container"
      container: "Pasuje do pojemnika"
    },
    backgroundColorSwitch: {
      // [Auto-translated] "None"
      none: "Żaden",
      // [Auto-translated] "Accent color"
      accentColor: "Kolor akcentujący",
      // [Auto-translated] "Custom"
      custom: "Zwyczaj"
    },
    colorPalette: {
      // [Auto-translated] "Light"
      light: "Światło",
      // [Auto-translated] "Dark"
      dark: "Ciemny"
    },
    isPanelless: {
      // [Auto-translated] "Default"
      "false": "Domyślny",
      // [Auto-translated] "Without Panels"
      "true": "Bez paneli"
    },
    progressBarInheritWidthFrom: {
      // [Auto-translated] "Same as survey"
      survey: "Tak samo jak w przypadku ankiety",
      // [Auto-translated] "Same as container"
      container: "Tak samo jak kontener"
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
    anyof: "Dowolny z",
    // [Auto-translated] "All of"
    allof: "Wszystko z",
    // "Greater than"
    greater: "greater",
    // "Less than"
    less: "less",
    // "Greater than or equal to"
    greaterorequal: "greater or equals",
    // "Less than or equal to"
    lessorequal: "Less or Equals",
    // [Auto-translated] "and"
    and: "i",
    // [Auto-translated] "or"
    or: "lub"
  },
  // Embed window
  ew: {
    // "Use Angular version"
    angular: "Use Angular version",
    // "Use jQuery version"
    jquery: "Use jQuery version",
    // "Use Knockout version"
    knockout: "Use Knockout version",
    // "Use React version"
    react: "Use React version",
    // "Use Vue version"
    vue: "Use Vue version",
    // "For bootstrap framework"
    bootstrap: "For bootstrap framework",
    // [Auto-translated] "Modern theme"
    modern: "Nowoczesny motyw",
    // [Auto-translated] "Default theme"
    default: "Motyw domyślny",
    // [Auto-translated] "Orange theme"
    orange: "Kompozycja pomarańczowa",
    // [Auto-translated] "Darkblue theme"
    darkblue: "Kompozycja Ciemnoniebieski",
    // [Auto-translated] "Darkrose theme"
    darkrose: "Kompozycja Darkrose",
    // [Auto-translated] "Stone theme"
    stone: "Kompozycja Kamień",
    // [Auto-translated] "Winter theme"
    winter: "Kompozycja zimowa",
    // [Auto-translated] "Winter-Stone theme"
    winterstone: "Kompozycja Kamień zimowy",
    // "Show survey on a page"
    showOnPage: "Show survey on a page",
    // "Show survey in a window"
    showInWindow: "Show survey in a window",
    // "Load Survey JSON from server"
    loadFromServer: "Load Survey JSON from server",
    // "Scripts and styles"
    titleScript: "Scripts and styles",
    // "HTML"
    titleHtml: "HTML",
    // "JavaScript"
    titleJavaScript: "JavaScript"
  },
  // Preview (Survey)
  ts: {
    // "Select the page to test it"
    selectPage: "Wybierz stronę, aby ją przetestować:",
    // [Auto-translated] "Show invisible elements"
    showInvisibleElements: "Pokaż niewidoczne elementy",
    // [Auto-translated] "Hide invisible elements"
    hideInvisibleElements: "Ukryj niewidoczne elementy",
    // [Auto-translated] "Previous"
    prevPage: "Poprzedni",
    // [Auto-translated] "Next"
    nextPage: "Następny"
  },
  validators: {
    // "Answer count"
    answercountvalidator: "answer count",
    // "Email"
    emailvalidator: "e-mail",
    // [Auto-translated] "Expression"
    expressionvalidator: "Wyrażenie",
    // "Number"
    numericvalidator: "numeric",
    // "Regex"
    regexvalidator: "regex",
    // "Text"
    textvalidator: "text"
  },
  triggers: {
    // "Complete survey"
    completetrigger: "complete survey",
    // "Set answer"
    setvaluetrigger: "set value",
    // [Auto-translated] "Copy answer"
    copyvaluetrigger: "Kopiuj odpowiedź",
    // [Auto-translated] "Skip to question"
    skiptrigger: "Przejdź do pytania",
    // [Auto-translated] "Run expression"
    runexpressiontrigger: "Uruchom wyrażenie",
    // "change visibility (deprecated)"
    visibletrigger: "change visibility"
  },
  peplaceholder: {
    patternmask: {
      // "Ex.: +1(999)-999-99-99"
      pattern: "Np.: +1(999)-999-99-99"
    },
    datetimemask: {
      // "Ex.: mm/dd/yyyy HH:MM:ss"
      pattern: "Np.: mm/dd/rrrr"
    },
    currencymask: {
      // "Ex.: $"
      prefix: "Przykład: $",
      // "Ex.: USD"
      suffix: "Np.: USD"
    },
    panelbase: {
      // [Auto-translated] "Ex.: 200px"
      questionTitleWidth: "Przykład: 200 pikseli"
    },
    panellayoutcolumn: {
      // "Ex.: 30%"
      effectiveWidth: "Przykład: 30%",
      // "Ex.: 200px"
      questionTitleWidth: "Przykład: 200px"
    }
  },
  pehelp: {
    panel: {
      // "A panel ID that is not visible to respondents."
      name: "Identyfikator panelu, który nie jest widoczny dla respondentów.",
      // [Auto-translated] "Type a subtitle."
      description: "Wpisz podtytuł panelu.",
      // "Use the magic wand icon to set a conditional rule that determines panel visibility."
      visibleIf: "Użyj ikony magicznej różdżki, aby ustawić regułę warunkową, która określa widoczność panelu.",
      // [Auto-translated] "Use the magic wand icon to set a conditional rule that disables the read-only mode for the panel."
      enableIf: "Użyj ikony magicznej różdżki, aby ustawić regułę warunkową, która wyłącza tryb tylko do odczytu dla panelu.",
      // "Use the magic wand icon to set a conditional rule that prevents survey submission unless at least one nested question has an answer."
      requiredIf: "Użyj ikony magicznej różdżki, aby ustawić regułę warunkową, która uniemożliwia przesłanie ankiety, chyba że co najmniej jedno zagnieżdżone pytanie ma odpowiedź.",
      // [Auto-translated] "Applies to all questions within the survey. This setting can be overridden by title alignment rules at lower levels: panel, page, or question. A lower-level setting will override those on a higher level."
      questionTitleLocation: "Dotyczy wszystkich pytań w tym panelu. Jeśli chcesz zastąpić to ustawienie, zdefiniuj reguły wyrównania tytułów dla poszczególnych pytań. Opcja \"Dziedzicz\" stosuje ustawienie na poziomie strony (jeśli jest ustawione) lub na poziomie ankiety (domyślnie \"Góra\").",
      // [Auto-translated] "Sets consistent width for question titles when they are aligned to the left of their question boxes. Accepts CSS values (px, %, in, pt, etc.)."
      questionTitleWidth: "Ustawia spójną szerokość tytułów pytań, gdy są one wyrównane do lewej strony pól pytań. Akceptuje wartości CSS (px, %, in, pt itp.).",
      // "Sets the location of an error message in relation to all questions within the panel. The \"Inherit\" option applies the page-level (if set) or survey-level setting."
      questionErrorLocation: "Ustawia lokalizację komunikatu o błędzie w odniesieniu do wszystkich pytań w panelu. Opcja \"Dziedzicz\" stosuje ustawienie na poziomie strony (jeśli jest ustawione) lub na poziomie ankiety.",
      // [Auto-translated] "Keeps the original order of questions or randomizes them. The effect of this setting is only visible in the Preview tab."
      questionOrder: "Zachowuje pierwotną kolejność pytań lub losuje je. Opcja \"Dziedzicz\" stosuje ustawienie na poziomie strony (jeśli jest ustawione) lub na poziomie ankiety.",
      // "Repositions the panel to the end of a selected page."
      page: "Przesuwa panel na koniec zaznaczonej strony.",
      // [Auto-translated] "Adds space or margin between the panel content and the left border of the panel box."
      innerIndent: "Dodaje odstęp lub margines między zawartością panelu a lewą krawędzią ramki panelu.",
      // "Unselect to display the panel in one line with the previous question or panel. The setting doesn't apply if the panel is the first element in your form."
      startWithNewLine: "Usuń zaznaczenie, aby wyświetlić panel w jednym wierszu z poprzednim pytaniem lub panelem. To ustawienie nie ma zastosowania, jeśli panel jest pierwszym elementem formularza.",
      // "Choose from: \"Expanded\" - the panel is displayed in full and can be collapsed; \"Collapsed\" - the panel displays only the title and description and can be expanded; \"Locked\" - the panel is displayed in full and cannot be collapsed."
      state: "Do wyboru: \"Rozwinięty\" - panel wyświetla się w całości i można go zwinąć; \"Zwinięty\" - panel wyświetla tylko tytuł i opis i można go rozwinąć; \"Zablokowany\" - panel jest wyświetlany w całości i nie można go zwinąć.",
      // [Auto-translated] "Accepts CSS values (px, %, in, pt, etc.)."
      width: "Ustawia szerokość panelu proporcjonalnie do innych elementów pomiarowych w tej samej linii. Akceptuje wartości CSS (px, %, in, pt itp.).",
      // [Auto-translated] "Assigns numbers to questions nested within this panel."
      showQuestionNumbers: "Przypisuje numery pytaniom zagnieżdżonym w tym panelu.",
      // [Auto-translated] "Specifies how many columns this panel spans within the grid layout."
      effectiveColSpan: "Określa, ile kolumn w układzie siatki obejmuje ten panel.",
      // [Auto-translated] "This table lets you configure each grid column within the panel. It automatically sets the width percentage for each column based on the maximum number of elements in a row. To customize the grid layout, manually adjust these values and define the title width for all questions in each column."
      gridLayoutColumns: "Ta tabela umożliwia skonfigurowanie każdej kolumny siatki w panelu. Automatycznie ustawia procent szerokości dla każdej kolumny na podstawie maksymalnej liczby elementów w wierszu. Aby dostosować układ siatki, ręcznie dostosuj te wartości i zdefiniuj szerokość tytułu dla wszystkich pytań w każdej kolumnie."
    },
    paneldynamic: {
      // "A panel ID that is not visible to respondents."
      name: "Identyfikator panelu, który nie jest widoczny dla respondentów.",
      // "Type a panel subtitle."
      description: "Wpisz podtytuł panelu.",
      // "Use the magic wand icon to set a conditional rule that determines panel visibility."
      visibleIf: "Użyj ikony magicznej różdżki, aby ustawić regułę warunkową, która określa widoczność panelu.",
      // [Auto-translated] "Use the magic wand icon to set a conditional rule that disables the read-only mode for the panel."
      enableIf: "Użyj ikony magicznej różdżki, aby ustawić regułę warunkową, która wyłącza tryb tylko do odczytu dla panelu.",
      // "Use the magic wand icon to set a conditional rule that prevents survey submission unless at least one nested question has an answer."
      requiredIf: "Użyj ikony magicznej różdżki, aby ustawić regułę warunkową, która uniemożliwia przesłanie ankiety, chyba że co najmniej jedno zagnieżdżone pytanie ma odpowiedź.",
      // "Applies to all questions within this dynamic panel. If you want to override this setting, define title alignment rules for individual questions. The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Top\" by default)."
      templateQuestionTitleLocation: "Dotyczy wszystkich pytań w tym panelu. Jeśli chcesz zastąpić to ustawienie, zdefiniuj reguły wyrównania tytułów dla poszczególnych pytań. Opcja \"Dziedzicz\" stosuje ustawienie na poziomie strony (jeśli jest ustawione) lub na poziomie ankiety (domyślnie \"Góra\").",
      // "Sets consistent width for question titles when they are aligned to the left of their question boxes. Accepts CSS values (px, %, in, pt, etc.)."
      templateQuestionTitleWidth: "Ustawia stałą szerokość tytułów pytań, gdy są one wyrównane do lewej strony pól pytań. Akceptuje wartości CSS (px, %, in, pt itd.).",
      // "Sets the location of an error message in relation to a question with invalid input. Choose between: \"Top\" - an error text is placed at the top of the question box; \"Bottom\" - an error text is placed at the bottom of the question box. The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Top\" by default)."
      templateErrorLocation: "Ustawia lokalizację komunikatu o błędzie w odniesieniu do pytania z nieprawidłowymi danymi wejściowymi. Wybierz pomiędzy: \"Góra\" - tekst błędu jest umieszczany w górnej części pola pytania; \"Na dole\" — tekst błędu jest umieszczany u dołu pola pytania. Opcja \"Dziedzicz\" stosuje ustawienie na poziomie strony (jeśli jest ustawione) lub na poziomie ankiety (domyślnie \"Góra\").",
      // "Sets the location of an error message in relation to all questions within the panel. The \"Inherit\" option applies the page-level (if set) or survey-level setting."
      errorLocation: "Ustawia lokalizację komunikatu o błędzie w odniesieniu do wszystkich pytań w panelu. Opcja \"Dziedzicz\" stosuje ustawienie na poziomie strony (jeśli jest ustawione) lub na poziomie ankiety.",
      // "Repositions the panel to the end of a selected page."
      page: "Przesuwa panel na koniec zaznaczonej strony.",
      // [Auto-translated] "Adds space or margin between the panel content and the left border of the panel box."
      indent: "Dodaje odstęp lub margines między zawartością panelu a lewą krawędzią pola panelu.",
      // "Unselect to display the panel in one line with the previous question or panel. The setting doesn't apply if the panel is the first element in your form."
      startWithNewLine: "Usuń zaznaczenie, aby wyświetlić panel w jednym wierszu z poprzednim pytaniem lub panelem. To ustawienie nie ma zastosowania, jeśli panel jest pierwszym elementem formularza.",
      // "Choose from: \"Expanded\" - the panel is displayed in full and can be collapsed; \"Collapsed\" - the panel displays only the title and description and can be expanded; \"Locked\" - the panel is displayed in full and cannot be collapsed."
      state: "Do wyboru: \"Rozwinięty\" - panel wyświetla się w całości i można go zwinąć; \"Zwinięty\" - panel wyświetla tylko tytuł i opis i można go rozwinąć; \"Zablokowany\" - panel jest wyświetlany w całości i nie można go zwinąć.",
      // "Sets the width of the panel in proportion to other survey elements in the same line. Accepts CSS values (px, %, in, pt, etc.)."
      width: "Ustawia szerokość panelu proporcjonalnie do innych elementów pomiarowych w tej samej linii. Akceptuje wartości CSS (px, %, in, pt itp.).",
      // "Type in a template for entry titles. Use {panelIndex} for the entry's general position and {visiblePanelIndex} for its order among visible entries. Insert these placeholders into the pattern to add automatic numbering."
      templateTitle: "Wpisz szablon dynamicznych tytułów paneli. Użyj {panelIndex} dla ogólnego położenia panelu i {visiblePanelIndex} dla jego kolejności wśród widocznych paneli. Wstaw te symbole zastępcze do wzoru, aby dodać automatyczną numerację.",
      // "Type in a template for tab titles. Use {panelIndex} for an entry's general position and {visiblePanelIndex} for its order among visible entries. Insert these placeholders into the pattern to add automatic numbering."
      templateTabTitle: "Wpisz szablon tytułów kart. Użyj {panelIndex} dla ogólnego położenia panelu i {visiblePanelIndex} dla jego kolejności wśród widocznych paneli. Wstaw te symbole zastępcze do wzoru, aby dodać automatyczną numerację.",
      // "A fallback text for tab titles that applies when the tab title pattern doesn't produce a meaningful value."
      tabTitlePlaceholder: "Tekst zastępczy dla tytułów tabulatorów, który ma zastosowanie, gdy wzorzec tytułu tabulatora nie generuje znaczącej wartości.",
      // "This setting allows you to control the visibility of individual entries within the dynamic panel. Use the `{panel}` placeholder to reference the current entry in your expression."
      templateVisibleIf: "To ustawienie umożliwia sterowanie widocznością poszczególnych paneli w panelu dynamicznym. Użyj symbolu zastępczego \"{panel}\", aby odwołać się do bieżącego panelu w wyrażeniu.",
      // "This setting is automatically inherited by all questions within this dynamic panel. If you want to override this setting, define title alignment rules for individual questions. The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Top\" by default)."
      titleLocation: "To ustawienie jest automatycznie dziedziczone przez wszystkie pytania w tym panelu. Jeśli chcesz zastąpić to ustawienie, zdefiniuj reguły wyrównania tytułów dla poszczególnych pytań. Opcja \"Dziedzicz\" stosuje ustawienie na poziomie strony (jeśli jest ustawione) lub na poziomie ankiety (domyślnie \"Góra\").",
      // "The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Under the panel title\" by default)."
      descriptionLocation: "Opcja \"Dziedzicz\" stosuje ustawienie na poziomie strony (jeśli jest ustawione) lub na poziomie ankiety (domyślnie \"Pod tytułem panelu\").",
      // "Defines the position of a newly added entry. By default, new entries are added to the end. Select \"Next\" to insert a new entry after the current one."
      newPanelPosition: "Określa położenie nowo dodanego panelu. Domyślnie nowe panele są dodawane na końcu. Wybierz \"Dalej\", aby wstawić nowy panel po bieżącym.",
      // [Auto-translated] "Duplicates answers from the last panel and assigns them to the next added dynamic panel."
      copyDefaultValueFromLastEntry: "Duplikuje odpowiedzi z ostatniego panelu i przypisuje je do następnego dodanego panelu dynamicznego.",
      // "Reference a question name to require a user to provide a unique response for this question in each entry."
      keyName: "Odwołaj się do nazwy pytania, aby wymagać od użytkownika podania unikatowej odpowiedzi na to pytanie w każdym panelu.",
      // [Auto-translated] "Triggers a prompt asking to confirm the row removal."
      confirmDelete: "Powoduje wyświetlenie monitu o potwierdzenie przed usunięciem panelu."
    },
    matrixdynamic: {
      // [Auto-translated] "Triggers a confirmation prompt before removing a row."
      confirmDelete: "Powoduje wyzwolenie monitu o potwierdzenie przed usunięciem wiersza.",
      // [Auto-translated] "Automatically expands the detail section when a new row is added to the matrix."
      detailPanelShowOnAdding: "Automatycznie rozwija sekcję szczegółów po dodaniu nowego wiersza do macierzy."
    },
    // "Duplicates answers from the last row and assigns them to the next added dynamic row."
    copyDefaultValueFromLastEntry: "Duplikuje odpowiedzi z ostatniego wiersza i przypisuje je do następnego dodanego wiersza dynamicznego.",
    // [Auto-translated] "This setting allows you to assign a default answer value based on an expression. The expression can include basic calculations - `{q1_id} + {q2_id}`, Boolean expressions, such as `{age} > 60`, and functions: `iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, etc. The value determined by this expression serves as the initial default value that can be overridden by a respondent's manual input."
    defaultValueExpression: "To ustawienie umożliwia przypisanie domyślnej wartości odpowiedzi na podstawie wyrażenia. Wyrażenie może zawierać podstawowe obliczenia - '{q1_id} + {q2_id}', wyrażenia logiczne, takie jak '{wiek} > 60' oraz funkcje: 'iif()', 'today()', 'age()', 'min()', 'max()', 'avg()' itp. Wartość określona przez to wyrażenie służy jako początkowa wartość domyślna, która może zostać zastąpiona przez ręczne wprowadzanie danych przez respondenta.",
    // "Use the magic wand icon to set a conditional rule that determines when a respondent's input is reset to the value based on the \"Default value expression\" or \"Set value expression\" or to the \"Default answer\" value (if either is set)."
    resetValueIf: "Użyj ikony magicznej różdżki, aby ustawić regułę warunkową, która określa, kiedy dane wejściowe respondenta są resetowane do wartości na podstawie \"Wyrażenia wartości domyślnej\" lub \"Wyrażenia wartości domyślnej\" lub wartości \"Odpowiedź domyślna\" (jeśli którakolwiek z nich jest ustawiona).",
    // "Use the magic wand icon to set a conditional rule that determines when to run the \"Set value expression\" and dynamically assign the resulting value as a response."
    setValueIf: "Użyj ikony magicznej różdżki, aby ustawić regułę warunkową, która określa, kiedy uruchomić \"Wyrażenie wartości zestawu\" i dynamicznie przypisać wynikową wartość jako odpowiedź.",
    // "Specify an expression that defines the value to be set when the conditions in the \"Set value if\" rule are met. The expression can include basic calculations - `{q1_id} + {q2_id}`, Boolean expressions, such as `{age} > 60`, and functions: `iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, etc. The value determined by this expression can be overridden by a respondent's manual input."
    setValueExpression: "Określ wyrażenie definiujące wartość, która ma zostać ustawiona, gdy zostaną spełnione warunki reguły \"Ustaw wartość, jeśli\". Wyrażenie może zawierać podstawowe obliczenia - '{q1_id} + {q2_id}', wyrażenia logiczne, takie jak '{wiek} > 60' oraz funkcje: 'iif()', 'today()', 'age()', 'min()', 'max()', 'avg()' itp. Wartość określona przez to wyrażenie może zostać zastąpiona przez ręczne wprowadzenie danych przez respondenta.",
    // "Survey Creator allows you to manually adjust the inline widths of form elements to control the layout. If this doesn't produce the desired outcome, you can enable the grid layout, which structures form elements using a column-based system. To configure layout columns, select a page or panel and use the \"Question Settings\" → \"Grid columns\" table. To adjust how many columns a question spans, select it and set the desired value in the \"Layout\" → \"Column span\" field."
    gridLayoutEnabled: "Kreator ankiet umożliwia ręczne dostosowanie szerokości elementów formularza w tekście w celu kontrolowania układu. Jeśli nie przyniesie to pożądanego rezultatu, można włączyć układ siatki, w którym struktury tworzą elementy przy użyciu systemu opartego na kolumnach. Aby skonfigurować kolumny układu, wybierz stronę lub panel i użyj tabeli \"Ustawienia pytań\" → \"Kolumny siatki\". Aby dostosować liczbę kolumn obejmujących pytanie, zaznacz je i ustaw żądaną wartość w polu \"Układ\" → \"Zakres kolumn\".",
    question: {
      // "A question ID that is not visible to respondents."
      name: "Identyfikator pytania, który nie jest widoczny dla respondentów.",
      // "Type a question subtitle."
      description: "Wpisz podtytuł pytania.",
      // "Use the magic wand icon to set a conditional rule that determines question visibility."
      visibleIf: "Użyj ikony magicznej różdżki, aby ustawić regułę warunkową, która określa widoczność pytania.",
      // [Auto-translated] "Use the magic wand icon to set a conditional rule that disables the read-only mode for the question."
      enableIf: "Użyj ikony magicznej różdżki, aby ustawić regułę warunkową, która wyłącza tryb tylko do odczytu dla pytania.",
      // "Use the magic wand icon to set a conditional rule that prevents survey advancing or submission unless the question received an answer."
      requiredIf: "Użyj ikony magicznej różdżki, aby ustawić regułę warunkową, która uniemożliwia przejście do przodu lub przesłanie ankiety, chyba że na pytanie otrzymano odpowiedź.",
      // [Auto-translated] "Unselect to display the question in one line with the previous question or panel. The setting doesn't apply if the question is the first element in your form."
      startWithNewLine: "Usuń zaznaczenie, aby wyświetlić pytanie w jednym wierszu z poprzednim pytaniem lub panelem. To ustawienie nie ma zastosowania, jeśli pytanie jest pierwszym elementem formularza.",
      // "Repositions the question to the end of a selected page."
      page: "Zmienia położenie pytania na końcu zaznaczonej strony.",
      // "Choose from: \"Expanded\" - the question box is displayed in full and can be collapsed; \"Collapsed\" - the question box displays only the title and description and can be expanded; \"Locked\" - the question box is displayed in full and cannot be collapsed."
      state: "Do wyboru: \"Rozwinięte\" - pole pytania wyświetla się w całości i można je zwinąć; \"Zwinięte\" - pole pytania wyświetla tylko tytuł i opis i można je rozwinąć; \"Zablokowane\" - pole pytania jest wyświetlane w całości i nie można go zwinąć.",
      // "Overrides title alignment rules defined on a panel, page, or survey level. When set to \"Hidden\", it also hides question descriptions. The \"Inherit\" option applies any higher-level settings (if set) or survey-level setting (\"Top\" by default)."
      titleLocation: "Zastępuje reguły wyrównania tytułów zdefiniowane na poziomie panelu, strony lub ankiety. Opcja \"Dziedzicz\" stosuje wszystkie ustawienia wyższego poziomu (jeśli są ustawione) lub ustawienia na poziomie ankiety (domyślnie \"Góra\").",
      // "The \"Inherit\" option applies the survey-level setting (\"Under the question title\" by default)."
      descriptionLocation: "Opcja \"Dziedzicz\" stosuje ustawienie na poziomie ankiety (domyślnie \"Pod tytułem pytania\").",
      // "Sets the location of an error message in relation to the question with invalid input. Choose between: \"Top\" - an error text is placed at the top of the question box; \"Bottom\" - an error text is placed at the bottom of the question box. The \"Inherit\" option applies the survey-level setting (\"Top\" by default)."
      errorLocation: "Ustawia lokalizację komunikatu o błędzie w odniesieniu do pytania z nieprawidłowymi danymi wejściowymi. Wybierz pomiędzy: \"Góra\" - tekst błędu jest umieszczany w górnej części pola pytania; \"Na dole\" — tekst błędu jest umieszczany u dołu pola pytania. Opcja \"Dziedzicz\" stosuje ustawienie na poziomie ankiety (domyślnie \"Góra\").",
      // "Adds space or margin between the question content and the left border of the question box."
      indent: "Dodaje spację lub margines między treścią pytania a lewą krawędzią pola pytania.",
      // "Sets the width of the question in proportion to other survey elements in the same line. Accepts CSS values (px, %, in, pt, etc.)."
      width: "Ustawia szerokość pytania proporcjonalnie do innych elementów ankiety w tym samym wierszu. Akceptuje wartości CSS (px, %, in, pt itp.).",
      // "Choose from: \"On lost focus\" - the value is updated when the input field loses focus; \"While typing\" - the value is updated in real-time, as users are typing. The \"Inherit\" option applies the survey-level setting (\"On lost focus\" by default)."
      textUpdateMode: "Do wyboru: \"W przypadku utraty fokusu\" - wartość jest aktualizowana, gdy pole wejściowe traci fokus; \"Podczas pisania\" - wartość jest aktualizowana w czasie rzeczywistym, w miarę pisania przez użytkowników. Opcja \"Dziedzicz\" stosuje ustawienie na poziomie ankiety (domyślnie \"Po utracie fokusu\").",
      // [Auto-translated] "You can use any web service as a data source for multiple-choice questions. To populate choice values, enter the URL of the service providing the data."
      url: "Możesz użyć dowolnej usługi internetowej jako źródła danych dla pytań wielokrotnego wyboru. Aby wypełnić wartości wyborów, wprowadź adres URL usługi udostępniającej dane.",
      // [Auto-translated] "A comparison operation used to filter the drop-down list."
      searchMode: "Operacja porównania używana do filtrowania listy rozwijanej.",
      // [Auto-translated] "Long texts in choice options will automatically generate line breaks to fit within the drop-down menu. Unselect if you want the texts to clip."
      textWrapEnabled: "Długie teksty w opcjach wyboru automatycznie wygenerują podziały wierszy, aby zmieścić się w menu rozwijanym. Usuń zaznaczenie, jeśli chcesz, aby teksty zostały przycięte.",
      // [Auto-translated] "Specifies how many columns this question spans within the grid layout."
      effectiveColSpan: "Określa, ile kolumn obejmuje to pytanie w układzie siatki."
    },
    surveyvalidator: {
      // "Use the magic wand icon to define when the question's value is considered valid."
      expression: "Użyj ikony magicznej różdżki, aby określić, kiedy wartość pytania jest uznawana za prawidłową."
    },
    signaturepad: {
      // "Sets the width of the displayed signature area and the resulting image."
      signatureWidth: "Ustawia szerokość wyświetlanego obszaru podpisu i wynikowego obrazu.",
      // "Sets the height of the displayed signature area and the resulting image."
      signatureHeight: "Ustawia wysokość wyświetlanego obszaru podpisu i wynikowego obrazu.",
      // "Select if you want the signature area to fill all available space within the question box while maintaining the default 3:2 aspect ratio. When custom width and height values are set, the setting will keep the aspect ratio of these dimensions."
      signatureAutoScaleEnabled: "Wybierz, czy chcesz, aby obszar podpisu wypełniał całą dostępną przestrzeń w polu pytania, zachowując domyślny współczynnik proporcji 3:2. Po ustawieniu niestandardowych wartości szerokości i wysokości ustawienie zachowa proporcje tych wymiarów."
    },
    file: {
      // "Specifies the display height of uploaded images in the preview and the actual height of images taken with the camera. In single file upload mode, the display height is limited by the preview area; in multiple file upload mode, it is limited by the thumbnail area."
      imageHeight: "Określa wysokość wyświetlania przesyłanych obrazów w podglądzie oraz rzeczywistą wysokość zdjęć wykonanych aparatem. W trybie przesyłania pojedynczego pliku wysokość wyświetlania jest ograniczona przez obszar podglądu; W trybie przesyłania wielu plików jest on ograniczony przez obszar miniatur.",
      // "Specifies the display width of uploaded images in the preview and the actual width of images taken with the camera. In single file upload mode, the display width is limited by the preview area; in multiple file upload mode, it is limited by the thumbnail area."
      imageWidth: "Określa szerokość wyświetlania przesyłanych obrazów w podglądzie oraz rzeczywistą szerokość zdjęć wykonanych aparatem. W trybie przesyłania pojedynczego pliku szerokość wyświetlania jest ograniczona przez obszar podglądu; W trybie przesyłania wielu plików jest on ograniczony przez obszar miniatur.",
      // [Auto-translated] "Displays thumbnail previews for uploaded files when possible. Unselect if you want to show file icons instead."
      allowImagesPreview: "Wyświetla podgląd miniatur przesłanych plików, jeśli to możliwe. Usuń zaznaczenie, jeśli zamiast tego chcesz wyświetlać ikony plików."
    },
    image: {
      // "The \"Auto\" option automatically determines the suitable mode for display - Image, Video, or YouTube - based on the source URL provided."
      contentMode: "Opcja \"Auto\" automatycznie określa odpowiedni tryb wyświetlania - Obraz, Wideo lub YouTube - na podstawie podanego źródłowego adresu URL."
    },
    imagepicker: {
      // [Auto-translated] "Overrides the minimum and maximum height values."
      imageHeight: "Zastępuje minimalne i maksymalne wartości wysokości.",
      // [Auto-translated] "Overrides the minimum and maximum width values."
      imageWidth: "Zastępuje minimalne i maksymalne wartości szerokości.",
      // [Auto-translated] "The left value serves as an item ID used in conditional rules, the right value is displayed to respondents."
      choices: "\"Wartość\" służy jako identyfikator elementu używany w regułach warunkowych; Respondentom wyświetla się \"Tekst\".",
      // "Choose between \"Image\" and \"Video\" to set the content mode of the media selector. If \"Image\" is selected, ensure that all options provided are image files in the following formats: JPEG, GIF, PNG, APNG, SVG, BMP, ICO. Similarly, if \"Video\" is selected, ensure that all options are direct links to video files in the following formats: MP4, MOV, WMV, FLV, AVI, MKV. Please note that YouTube links are not supported for video options."
      contentMode: "Wybierz pomiędzy \"Obraz\" i \"Wideo\", aby ustawić tryb zawartości selektora multimediów. W przypadku wybrania opcji \"Obraz\" upewnij się, że wszystkie dostępne opcje są plikami graficznymi w następujących formatach: JPEG, GIF, PNG, APNG, SVG, BMP, ICO. Podobnie, jeśli wybrana jest opcja \"Wideo\", upewnij się, że wszystkie opcje są bezpośrednimi linkami do plików wideo w następujących formatach: MP4, MOV, WMV, FLV, AVI, MKV. Należy pamiętać, że linki do YouTube nie są obsługiwane w przypadku opcji wideo."
    },
    text: {
      // [Auto-translated] "Resizes the visible area of the input field. Please use the <b>Validation → Maximum length</b> setting to limit the input length."
      size: "To ustawienie zmienia tylko rozmiar pola wejściowego i nie wpływa na szerokość pola pytania. Aby ograniczyć akceptowaną długość danych wejściowych, przejdź do <b>sekcji Walidacja → Maksymalny limit znaków</b>."
    },
    comment: {
      // [Auto-translated] "The left value serves as a row ID used in conditional rules, the right value is displayed to respondents."
      rows: "Ustawia liczbę wyświetlanych wierszy w polu wprowadzania. Jeśli dane wejściowe zajmują więcej wierszy, pojawi się pasek przewijania."
    },
    // survey templates
    survey: {
      // "Select if you want to prevent respondents from filling out your survey."
      readOnly: "Wybierz, czy chcesz uniemożliwić respondentom wypełnianie ankiety.",
      // "Sets the location of the progress bar. The \"Auto\" value displays the progress bar above or below the survey header."
      progressBarLocation: "Ustawia położenie paska postępu. Wartość \"Auto\" wyświetla pasek postępu powyżej lub poniżej nagłówka ankiety."
    },
    matrixdropdowncolumn: {
      // "A column ID that is not visible to respondents."
      name: "Identyfikator kolumny, który nie jest widoczny dla respondentów.",
      // "When enabled for a column, a respondent is required to provide a unique response for each question within this column."
      isUnique: "Po włączeniu tej opcji dla kolumny respondent musi udzielić unikatowej odpowiedzi na każde pytanie w tej kolumnie.",
      // "Sets the number of displayed lines in the input field. If the input takes up more lines, the scroll bar will appear."
      rows: "Ustawia liczbę wyświetlanych wierszy w polu wprowadzania. Jeśli dane wejściowe zajmują więcej wierszy, pojawi się pasek przewijania.",
      // "Use the magic wand icon to set a conditional rule that determines column visibility."
      visibleIf: "Użyj ikony magicznej różdżki, aby ustawić regułę warunkową, która określa widoczność kolumny.",
      // [Auto-translated] "Use the magic wand icon to set a conditional rule that disables the read-only mode for the column."
      enableIf: "Użyj ikony magicznej różdżki, aby ustawić regułę warunkową, która wyłącza tryb tylko do odczytu dla kolumny.",
      // "Use the magic wand icon to set a conditional rule that prevents survey submission unless at least one nested question has an answer."
      requiredIf: "Użyj ikony magicznej różdżki, aby ustawić regułę warunkową, która uniemożliwia przesłanie ankiety, chyba że co najmniej jedno zagnieżdżone pytanie ma odpowiedź.",
      // "When selected, creates an individual column for each choice option."
      showInMultipleColumns: "Gdy ta opcja jest zaznaczona, tworzy osobną kolumnę dla każdej opcji wyboru.",
      // [Auto-translated] "Arranges choice options in a multi-column layout. When set to 0, the options are displayed in a single line."
      colCount: "Rozmieszcza opcje wyboru w układzie wielokolumnowym. Po ustawieniu wartości 0 opcje są wyświetlane w jednym wierszu. Po ustawieniu wartości -1 rzeczywista wartość jest dziedziczona z właściwości \"Liczba kolumn zagnieżdżonych\" macierzy nadrzędnej."
    },
    slider: {
      // "The lowest number that users can select."
      min: "Najniższa liczba, jaką mogą wybrać użytkownicy.",
      // "The highest number that users can select."
      max: "Najwyższa liczba, jaką mogą wybrać użytkownicy.",
      // "The interval between selectable scale values. For example, a step of 5 will allow users to select 0, 5, 10, etc."
      step: "Interwał między możliwymi do wybrania wartościami skali. Na przykład krok 5 pozwoli użytkownikom wybrać 0, 5, 10 itd.",
      // "The minimum distance between the slider thumbs a user can set."
      minRangeLength: "Minimalna odległość między kciukami suwaka, jaką może ustawić użytkownik.",
      // "The maximum distance between the slider thumbs a user can set."
      maxRangeLength: "Maksymalna odległość między kciukami suwaka, jaką może ustawić użytkownik.",
      // "Specifies how many scale labels to generate. A value of -1 means the number is calculated automatically based on the Min value and Max value."
      labelCount: "Określa, ile etykiet skali ma zostać wygenerowanych. Wartość -1 oznacza, że liczba jest obliczana automatycznie na podstawie wartości Min. i Wartości Max.",
      // "Use `{0}` as a placeholder for the actual value."
      labelFormat: "Użyj \"{0}\" jako symbolu zastępczego dla rzeczywistej wartości.",
      // "Allows you to define custom labels at specific values and optionally assign corresponding text to them (e.g., 0 = \"Poor\", 100 = \"Excellent\")."
      customLabels: "Umożliwia definiowanie etykiet niestandardowych o określonych wartościach i opcjonalnie przypisywanie do nich odpowiedniego tekstu (np. 0 = \"Słaby\", 100 = \"Doskonały\").",
      // "Use `{0}` as a placeholder for the actual value."
      tooltipFormat: "Użyj \"{0}\" jako symbolu zastępczego dla rzeczywistej wartości.",
      // "Allows users to move one thumb past the other."
      allowSwap: "Umożliwia użytkownikom przesuwanie jednego kciuka obok drugiego.",
      // [Auto-translated] "Displays a button that clears the selected slider value and sets it to undefined."
      allowClear: "Wyświetla przycisk, który czyści wybraną wartość suwaka i ustawia ją na niezdefiniowaną.",
      // "Defines the slider's minimum value dynamically using an expression. Supports basic calculations (e.g, `{q1_id} + {q2_id}`), Boolean logic (e.g., `{age} > 60`), and functions like `iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, and more."
      minValueExpression: "Dynamicznie definiuje minimalną wartość suwaka za pomocą wyrażenia. Obsługuje podstawowe obliczenia (np. '{q1_id} + {q2_id}'), logikę logiczną (np. '{wiek} > 60') oraz funkcje takie jak 'iif()', 'today()', 'age()', 'min()', 'max()', 'avg()' i inne.",
      // "Defines the slider's maximum value dynamically using an expression. Supports basic calculations (e.g, `{q1_id} + {q2_id}`), Boolean logic (e.g., `{age} > 60`), and functions like `iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, and more."
      maxValueExpression: "Dynamicznie definiuje maksymalną wartość suwaka za pomocą wyrażenia. Obsługuje podstawowe obliczenia (np. '{q1_id} + {q2_id}'), logikę logiczną (np. '{wiek} > 60') oraz funkcje takie jak 'iif()', 'today()', 'age()', 'min()', 'max()', 'avg()' i inne."
    },
    // [Auto-translated] "Makes this choice exclusive. When selected by a user, it will automatically deselect all other options in the question."
    isExclusive: "To sprawia, że ten wybór jest wyjątkowy. Po wybraniu przez użytkownika automatycznie odznaczy wszystkie inne opcje w pytaniu.",
    // [Auto-translated] "Select if uppercase and lowercase letters in the regular expression must be treated as equivalent."
    caseInsensitive: "Wybierz, czy wielkie i małe litery w wyrażeniu regularnym mają być traktowane jako równoważne.",
    // "Choose from: \"Static\" - sets a fixed width; \"Responsive\" - makes the survey occupy the full width of the screen; \"Auto\" - applies either of the two depending on the question types used."
    widthMode: "Do wyboru: \"Statyczny\" - ustawia stałą szerokość; \"Responsywny\" - sprawia, że ankieta zajmuje całą szerokość ekranu; \"Auto\" – stosuje jedną z tych dwóch opcji w zależności od użytych typów pytań.",
    // [Auto-translated] "Cookies prevent users from filling out the same survey twice."
    cookieName: "Pliki cookie uniemożliwiają użytkownikom dwukrotne wypełnienie tej samej ankiety.",
    // [Auto-translated] "Paste an image link (no size limits) or click the folder icon to browse a file from your computer (up to 64KB)."
    logo: "Wklej link do obrazu (bez ograniczeń rozmiaru) lub kliknij ikonę folderu, aby przeglądać plik z komputera (do 64 KB).",
    // [Auto-translated] "Sets a logo width in CSS units (px, %, in, pt, etc.)."
    logoWidth: "Ustawia szerokość logo w jednostkach CSS (px, %, in, pt itd.).",
    // [Auto-translated] "Sets a logo height in CSS units (px, %, in, pt, etc.)."
    logoHeight: "Ustawia wysokość logo w jednostkach CSS (px, %, in, pt itd.).",
    // "Choose from: \"None\" - image maintains its original size; \"Contain\" - image is resized to fit while maintaining its aspect ratio; \"Cover\" - image fills the entire box while maintaining its aspect ratio; \"Fill\" - image is stretched to fill the box without maintaining its aspect ratio."
    logoFit: "Do wyboru: \"Brak\" - obraz zachowuje swój oryginalny rozmiar; \"Zawieraj\" - rozmiar obrazu jest zmieniany tak, aby pasował przy zachowaniu proporcji; \"Okładka\" - obraz wypełnia całe pole z zachowaniem proporcji; \"Wypełnij\" - obraz jest rozciągany w celu wypełnienia pola bez zachowania jego proporcji.",
    // [Auto-translated] "Select if you want the survey to auto-advance to the next page once a respondent has answered all questions on the current page. This feature won't apply if the last question on the page is open-ended or allows multiple answers."
    autoAdvanceEnabled: "Wybierz, czy chcesz, aby ankieta automatycznie przechodziła do następnej strony, gdy respondent odpowie na wszystkie pytania na bieżącej stronie. Ta funkcja nie będzie miała zastosowania, jeśli ostatnie pytanie na stronie jest otwarte lub umożliwia udzielenie wielu odpowiedzi.",
    // [Auto-translated] "Select if you want the survey to complete automatically after a respondent answers all questions."
    autoAdvanceAllowComplete: "Wybierz, jeśli chcesz, aby ankieta była wypełniana automatycznie po udzieleniu odpowiedzi respondenta na wszystkie pytania.",
    // [Auto-translated] "Sets the visibility and location of navigation buttons on a page."
    showNavigationButtons: "Ustawia widoczność i położenie przycisków nawigacyjnych na stronie.",
    // [Auto-translated] "Sets the location of navigation buttons on a page."
    navigationButtonsLocation: "Określa położenie przycisków nawigacyjnych na stronie.",
    // [Auto-translated] "Enable the preview page with all or answered questions only."
    showPreviewBeforeComplete: "Włącz stronę podglądu ze wszystkimi pytaniami lub tylko odpowiedziami.",
    // "Applies to all questions within the survey. This setting can be overridden by title alignment rules at lower levels: panel, page, or question. A lower-level setting will override those on a higher level."
    questionTitleLocation: "Dotyczy wszystkich pytań w ankiecie. To ustawienie może zostać zastąpione przez reguły wyrównania tytułu na niższych poziomach: panelu, strony lub pytania. Ustawienie niższego poziomu zastąpi ustawienia wyższego poziomu.",
    // [Auto-translated] "A symbol or a sequence of symbols indicating that an answer is required."
    requiredMark: "Symbol lub sekwencja symboli wskazująca, że odpowiedź jest wymagana.",
    // [Auto-translated] "Enter a number or letter with which you want to start numbering."
    questionStartIndex: "Wprowadź cyfrę lub literę, od której chcesz rozpocząć numerację.",
    // "Sets the location of an error message in relation to the question with invalid input. Choose between: \"Top\" - an error text is placed at the top of the question box; \"Bottom\" - an error text is placed at the bottom of the question box."
    questionErrorLocation: "Ustawia lokalizację komunikatu o błędzie w odniesieniu do pytania z nieprawidłowymi danymi wejściowymi. Wybierz pomiędzy: \"Góra\" - tekst błędu jest umieszczany w górnej części pola pytania; \"Na dole\" — tekst błędu jest umieszczany u dołu pola pytania.",
    // [Auto-translated] "Select if you want the first input field on each page ready for text entry."
    autoFocusFirstQuestion: "Wybierz, jeśli chcesz, aby pierwsze pole wejściowe na każdej stronie było gotowe do wprowadzenia tekstu.",
    // "Keeps the original order of questions or randomizes them. The effect of this setting is only visible in the Preview tab."
    questionOrder: "Zachowuje pierwotną kolejność pytań lub losuje je. Efekt tego ustawienia jest widoczny tylko na karcie Podgląd.",
    // [Auto-translated] "For text entry questions only."
    maxTextLength: "Tylko w przypadku pytań tekstowych.",
    // [Auto-translated] "For question comments only."
    maxCommentLength: "Tylko w przypadku komentarzy do pytań.",
    // [Auto-translated] "Sets the number of displayed lines in text areas for question comments. In the input takes up more lines, the scroll bar appears."
    commentAreaRows: "Ustawia liczbę wierszy wyświetlanych w obszarach tekstowych dla komentarzy do pytań. Jeśli dane wejściowe zajmują więcej wierszy, pojawi się pasek przewijania.",
    // [Auto-translated] "Select if you want question comments and Long Text questions to auto-grow in height based on the entered text length."
    autoGrowComment: "Zaznacz, jeśli chcesz, aby komentarze do pytań i pytania z długim tekstem automatycznie zwiększały się na podstawie wprowadzonej długości tekstu.",
    // [Auto-translated] "For question comments and Long Text questions only."
    allowResizeComment: "Tylko w przypadku komentarzy do pytań i pytań z długim tekstem.",
    // [Auto-translated] "Custom variables serve as intermediate or auxiliary variables used in form calculations. They take respondent inputs as source values. Each custom variable has a unique name and an expression it's based on."
    calculatedValues: "Zmienne niestandardowe służą jako zmienne pośrednie lub pomocnicze używane w obliczeniach formularzy. Przyjmują dane wejściowe respondentów jako wartości źródłowe. Każda zmienna niestandardowa ma unikatową nazwę i wyrażenie, na którym jest oparta.",
    // [Auto-translated] "Select if you wish the calculated value of the expression to be saved along with survey results."
    includeIntoResult: "Wybierz, czy obliczona wartość wyrażenia ma być zapisywana wraz z wynikami ankiety.",
    // "A trigger is an event or condition that is based on an expression. Once the expression is evaluated to \"true\", a trigger sets off an action. Such an action can optionally have a target question it affects."
    triggers: "Wyzwalacz to zdarzenie lub warunek oparty na wyrażeniu. Gdy wyrażenie zostanie ocenione na wartość \"true\", wyzwalacz uruchamia akcję. Taka akcja może opcjonalnie mieć pytanie docelowe, na które wpływa.",
    // [Auto-translated] "Choose whether or not to clear values for questions hidden by conditional logic and when to do it."
    clearInvisibleValues: "Wybierz, czy chcesz wyczyścić wartości pytań ukrytych przez logikę warunkową i kiedy to zrobić.",
    // "Choose from: \"On lost focus\" - the value is updated when the input field loses focus; \"While typing\" - the value is updated in real-time, as users are typing."
    textUpdateMode: "Do wyboru: \"W przypadku utraty fokusu\" - wartość jest aktualizowana, gdy pole wejściowe traci fokus; \"Podczas pisania\" - wartość jest aktualizowana w czasie rzeczywistym, w miarę pisania przez użytkowników.",
    // [Auto-translated] "The left value serves as a column ID used in conditional rules, the right value is displayed to respondents."
    columns: "Lewa wartość służy jako identyfikator kolumny używany w regułach warunkowych, prawa wartość jest wyświetlana respondentom.",
    // "The left value serves as a row ID used in conditional rules, the right value is displayed to respondents."
    rows: "Lewa wartość służy jako identyfikator wiersza używany w regułach warunkowych, prawa wartość jest wyświetlana respondentom.",
    // [Auto-translated] "Accepts CSS values (px, %, in, pt, etc.)."
    columnMinWidth: "Akceptuje wartości CSS (px, %, in, pt itp.).",
    // [Auto-translated] "Accepts CSS values (px, %, in, pt, etc.)."
    rowTitleWidth: "Akceptuje wartości CSS (px, %, in, pt itp.).",
    // [Auto-translated] "Visible only when at least one column has Total type or Total expression."
    totalText: "Opcja widoczna tylko wtedy, gdy co najmniej jedna kolumna zawiera wyrażenie typu Total lub Total.",
    // "Sets the location of an error message in relation to a cell with invalid input. The \"Inherit\" option applies the setting from the \"Error message alignment\" property."
    cellErrorLocation: "Ustawia lokalizację komunikatu o błędzie w odniesieniu do komórki z nieprawidłowymi danymi wejściowymi. Opcja \"Dziedzicz\" stosuje ustawienie z właściwości \"Wyrównanie komunikatu o błędzie\".",
    // "Sets the location of error messages for questions nested in detail sections. The \"Inherit\" option applies the setting from the \"Error message alignment\" property."
    detailErrorLocation: "Ustawia lokalizację komunikatów o błędach dla pytań zagnieżdżonych w sekcjach szczegółowych. Opcja \"Dziedzicz\" stosuje ustawienie z właściwości \"Wyrównanie komunikatu o błędzie\".",
    // "When the \"Prevent duplicate responses\" property is enabled, a respondent attempting to submit a duplicate entry will receive the following error message."
    keyDuplicationError: "Gdy właściwość \"Zapobiegaj zduplikowanym odpowiedziom\" jest włączona, respondent próbujący przesłać zduplikowany wpis otrzyma następujący komunikat o błędzie.",
    // [Auto-translated] "Allows you to calculate total values based on an expression. The expression can include basic calculations (`{q1_id} + {q2_id}`), Boolean expressions (`{age} > 60`) and functions ('iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, etc.)."
    totalExpression: "Umożliwia obliczanie wartości całkowitych na podstawie wyrażenia. Wyrażenie może zawierać podstawowe obliczenia ('{q1_id} + {q2_id}'), wyrażenia logiczne ('{age} > 60') i funkcje ('iif()', 'today()', 'age()', 'min()', 'max()', 'avg()' itp.).",
    // "Reference a column ID to require a user to provide a unique response for each question within the specified column."
    keyName: "Jeśli określona kolumna zawiera identyczne wartości, ankieta zgłasza błąd \"Nieunikalna wartość klucza\".",
    // "Type a subtitle."
    description: "Wpisz napisy.",
    // [Auto-translated] "Choose a language to begin creating your survey. To add a translation, switch to a new language and translate the original text here or in the Translations tab."
    locale: "Wybierz język, aby rozpocząć tworzenie ankiety. Aby dodać tłumaczenie, przełącz się na nowy język i przetłumacz oryginalny tekst tutaj lub na karcie Tłumaczenia.",
    // "Sets the location of a detail section in relation to a row. Choose from: \"None\" - no detail section is added; \"Under the row\" - a detail section is placed under each row of the matrix; \"Under the row, display one detail section only\" - a detail section is displayed under a single row only, the remaining sections are collapsed."
    detailPanelMode: "Ustawia położenie sekcji szczegółów w odniesieniu do wiersza. Do wyboru: \"Brak\" - nie jest dodawane rozszerzenie; \"Pod wierszem\" - pod każdym rzędem macierzy umieszcza się rozwinięcie wiersza; \"Pod wierszem wyświetl tylko rozwinięcie jednego wiersza\" - rozwinięcie jest wyświetlane tylko pod jednym wierszem, pozostałe rozwinięcia wierszy są zwinięte.",
    // "Choose from: \"None\" - image maintains its original size; \"Contain\" - image is resized to fit while maintaining its aspect ratio; \"Cover\" - image fills the entire box while maintaining its aspect ratio; \"Fill\" - image is stretched to fill the box without maintaining its aspect ratio."
    imageFit: "Do wyboru: \"Brak\" - obraz zachowuje swój oryginalny rozmiar; \"Zawieraj\" - rozmiar obrazu jest zmieniany tak, aby pasował przy zachowaniu proporcji; \"Okładka\" - obraz wypełnia całe pole z zachowaniem proporcji; \"Wypełnij\" - obraz jest rozciągany w celu wypełnienia pola bez zachowania jego proporcji.",
    // "The \"Inherit\" option applies a survey-level setting (\"Disabled\" by default)."
    autoGrow: "Stopniowo zwiększa wysokość pola wprowadzania danych podczas wprowadzania danych. Zastępuje ustawienie \"Wysokość pola wprowadzania (w wierszach)\".",
    // [Auto-translated] "The resize handle (or grip) appears in the corner and can be dragged to alter the size of the input field."
    allowResize: "Uchwyt zmiany rozmiaru pojawi się w rogu i można go przeciągnąć, aby zmienić rozmiar pola wejściowego.",
    // [Auto-translated] "A time interval in seconds after which the survey auto-advances to the Thank You page."
    timeLimit: "Przedział czasu w sekundach, po przekroczeniu którego ankieta automatycznie przechodzi do strony z podziękowaniem.",
    // [Auto-translated] "A time interval in seconds after which the survey auto-advances to the next page."
    timeLimitPerPage: "Przedział czasu w sekundach, po którym ankieta automatycznie przechodzi do następnej strony.",
    // [Auto-translated] "Enable this option to trigger validation when a user focuses on an empty input field and then leaves it without making any changes."
    validateVisitedEmptyFields: "Włącz tę opcję, aby wyzwolić walidację, gdy użytkownik skupi się na pustym polu wejściowym, a następnie opuści je bez wprowadzania żadnych zmian.",
    page: {
      // "A page ID that is not visible to respondents."
      name: "Identyfikator strony, który nie jest widoczny dla respondentów.",
      // "Type a page subtitle."
      description: "Wpisz podtytuł strony.",
      // "A caption displayed on a navigation button in the progress bar or table of contents (TOC). If you leave this field empty, the navigation button will use the page title or page name. To enable the progress bar or TOC, go to \"Survey\" → \"Navigation\"."
      navigationTitle: "Podpis wyświetlany na przycisku nawigacyjnym na pasku postępu lub w spisie treści. Jeśli pozostawisz to pole puste, przycisk nawigacyjny użyje tytułu lub nazwy strony. Aby włączyć pasek postępu lub spis treści, przejdź do \"Ankieta\" → \"Nawigacja\".",
      // "A time interval in seconds after which the survey auto-advances to the next page. Hides the \"Previous\" navigation button. When set to 0, counts the time spent on the current page."
      timeLimit: "Przedział czasu w sekundach, po którym ankieta automatycznie przechodzi do następnej strony.",
      // "Use the magic wand icon to set a conditional rule that determines page visibility."
      visibleIf: "Użyj ikony magicznej różdżki, aby ustawić regułę warunkową, która określa widoczność strony.",
      // [Auto-translated] "Use the magic wand icon to set a conditional rule that disables the read-only mode for the page."
      enableIf: "Użyj ikony magicznej różdżki, aby ustawić regułę warunkową, która wyłącza tryb tylko do odczytu dla strony.",
      // "Use the magic wand icon to set a conditional rule that prevents survey submission unless at least one nested question has an answer."
      requiredIf: "Użyj ikony magicznej różdżki, aby ustawić regułę warunkową, która uniemożliwia przesłanie ankiety, chyba że co najmniej jedno zagnieżdżone pytanie ma odpowiedź.",
      // "Applies to all questions within this page. When set to \"Hidden\", it also hides question descriptions. If you want to override this setting, define title alignment rules for individual questions or panels. The \"Inherit\" option applies the survey-level setting (\"Top\" by default)."
      questionTitleLocation: "Dotyczy wszystkich pytań na tej stronie. Jeśli chcesz zastąpić to ustawienie, zdefiniuj reguły wyrównania tytułów dla poszczególnych pytań lub paneli. Opcja \"Dziedzicz\" stosuje ustawienie na poziomie ankiety (domyślnie \"Góra\").",
      // [Auto-translated] "Sets consistent width for question titles when they are aligned to the left of their question boxes. Accepts CSS values (px, %, in, pt, etc.)."
      questionTitleWidth: "Ustawia spójną szerokość tytułów pytań, gdy są one wyrównane do lewej strony pól pytań. Akceptuje wartości CSS (px, %, in, pt itp.).",
      // "Sets the location of an error message in relation to the question with invalid input. Choose between: \"Top\" - an error text is placed at the top of the question box; \"Bottom\" - an error text is placed at the bottom of the question box. The \"Inherit\" option applies the survey-level setting (\"Top\" by default)."
      questionErrorLocation: "Ustawia lokalizację komunikatu o błędzie w odniesieniu do pytania z nieprawidłowymi danymi wejściowymi. Wybierz pomiędzy: \"Góra\" - tekst błędu jest umieszczany w górnej części pola pytania; \"Na dole\" — tekst błędu jest umieszczany u dołu pola pytania. Opcja \"Dziedzicz\" stosuje ustawienie na poziomie ankiety (domyślnie \"Góra\").",
      // "Keeps the original order of questions or randomizes them. The \"Inherit\" option applies the survey-level setting (\"Original\" by default). The effect of this setting is only visible in the Preview tab."
      questionOrder: "Zachowuje pierwotną kolejność pytań lub losuje je. Opcja \"Dziedzicz\" stosuje ustawienie na poziomie ankiety (domyślnie \"Oryginalne\"). Efekt tego ustawienia jest widoczny tylko na karcie Podgląd.",
      // "Sets the visibility of navigation buttons on the page. The \"Inherit\" option applies the survey-level setting, which defaults to \"Visible\"."
      showNavigationButtons: "Ustawia widoczność przycisków nawigacyjnych na stronie. Opcja \"Dziedzicz\" stosuje ustawienie na poziomie ankiety, które domyślnie ma wartość \"Widoczny\".",
      // [Auto-translated] "This table lets you configure each grid column on the page. It automatically sets the width percentage for each column based on the maximum number of elements in a row. To customize the grid layout, manually adjust these values and define the title width for all questions in each column."
      gridLayoutColumns: "Ta tabela umożliwia skonfigurowanie każdej kolumny siatki na stronie. Automatycznie ustawia procent szerokości dla każdej kolumny na podstawie maksymalnej liczby elementów w wierszu. Aby dostosować układ siatki, ręcznie dostosuj te wartości i zdefiniuj szerokość tytułu dla wszystkich pytań w każdej kolumnie."
    },
    // [Auto-translated] "Sets the location of a timer on a page."
    timerLocation: "Ustawia położenie czasomierza na stronie.",
    // "Choose from: \"Locked\" - users cannot expand or collapse entries; \"Collapse all\" - all entries start in a collapsed state; \"Expand all\" - all entries start in an expanded state; \"First expanded\" - only the first entry is initially expanded. Applies if \"Entry display mode\" is set to \"List\" and the \"Entry title pattern\" property is specified."
    panelsState: "Do wyboru: \"Zablokowany\" - użytkownicy nie mogą rozwijać ani zwijać paneli; \"Zwiń wszystko\" - wszystkie panele rozpoczynają się w stanie zwiniętym; \"Rozwiń wszystko\" - wszystkie panele rozpoczynają się w stanie rozwiniętym; \"Pierwszy rozwinięty\" - początkowo rozwijany jest tylko pierwszy panel.",
    // [Auto-translated] "Enter a shared property name within the array of objects that contains the image or video file URLs you want to display in the choice list."
    imageLinkName: "Wprowadź nazwę właściwości współużytkowanej w tablicy obiektów zawierających adresy URL obrazów lub plików wideo, które mają być wyświetlane na liście wyborów.",
    // "The left value serves as an item ID used in conditional rules, the right value is displayed to respondents."
    choices: "Lewa wartość służy jako identyfikator elementu używany w regułach warunkowych, prawa wartość jest wyświetlana respondentom.",
    // [Auto-translated] "Type a user-friendly title to display."
    title: "Wpisz przyjazny dla użytkownika tytuł do wyświetlenia.",
    // [Auto-translated] "Ensures that users won't complete the survey until files are uploaded."
    waitForUpload: "Gwarantuje, że użytkownicy nie ukończą ankiety, dopóki pliki nie zostaną przekazane.",
    // [Auto-translated] "Accepts CSS values (px, %, in, pt, etc.)."
    minWidth: "Akceptuje wartości CSS (px, %, in, pt itp.).",
    // [Auto-translated] "Accepts CSS values (px, %, in, pt, etc.)."
    maxWidth: "Akceptuje wartości CSS (px, %, in, pt itp.).",
    // "Accepts CSS values (px, %, in, pt, etc.)."
    width: "Akceptuje wartości CSS (px, %, in, pt itp.).",
    // [Auto-translated] "If you do not set this property, the answer will be stored in a field specified by the Name property."
    valueName: "Jeśli ta właściwość nie zostanie ustawiona, odpowiedź będzie przechowywana w polu określonym przez właściwość Name.",
    // [Auto-translated] "A value displayed in HTML questions and in the dynamic titles and descriptions of survey elements when the question value is empty."
    defaultDisplayValue: "Wartość wyświetlana w pytaniach HTML oraz w dynamicznych tytułach i opisach elementów ankiety, gdy wartość pytania jest pusta.",
    // [Auto-translated] "In single- and multiple-selection question types, each choice option has an ID and display value. When selected, this setting shows a display value instead of an ID value in HTML questions and dynamic titles and descriptions of survey elements."
    useDisplayValuesInDynamicTexts: "W pytaniach typu jednokrotnego i wielokrotnego wyboru każda opcja wyboru ma identyfikator i wartość wyświetlaną. Po wybraniu tej opcji w pytaniach HTML oraz dynamicznych tytułach i opisach elementów ankiety wyświetlana jest wartość wyświetlana zamiast wartości identyfikatora.",
    // "Choose whether or not to clear question values hidden by conditional logic and when to do it. The \"Inherit\" option applies the survey-level setting (\"Upon survey completion\" by default)."
    clearIfInvisible: "Wybierz, czy chcesz wyczyścić wartości pytań ukryte przez logikę warunkową i kiedy to zrobić. Opcja \"Dziedzicz\" stosuje ustawienie na poziomie ankiety (domyślnie \"Po zakończeniu ankiety\").",
    // "Choose from: \"All\" - copies all choice options from the selected question; \"Selected\" - dynamically copies only selected choice options; \"Unselected\" - dynamically copies only unselected choice options. The \"None\" and \"Other\" options are copied by default if enabled in the source question."
    choicesFromQuestionMode: "Wybierz spośród: \"Wszystkie\" - kopiuje wszystkie opcje wyboru z wybranego pytania; \"Wybrane\" - dynamicznie kopiuje tylko wybrane opcje wyboru; \"Niewybrane\" - dynamicznie kopiuje tylko niezaznaczone opcje wyboru. Opcje \"Brak\" i \"Inne\" są domyślnie kopiowane, jeśli są włączone w pytaniu źródłowym.",
    // [Auto-translated] "In single- and multiple-selection question types, each choice option has an ID and display value. This setting specifies which matrix column or panel question should provide the IDs."
    choiceValuesFromQuestion: "W pytaniach jednokrotnego i wielokrotnego wyboru każda opcja wyboru ma identyfikator i wartość wyświetlaną. To ustawienie określa, która kolumna macierzy lub pytanie typu panel powinno zawierać identyfikatory.",
    // [Auto-translated] "In single- and multiple-selection question types, each choice option has an ID and display value. This setting specifies which matrix column or panel question should provide the display texts."
    choiceTextsFromQuestion: "W pytaniach jednokrotnego i wielokrotnego wyboru każda opcja wyboru ma identyfikator i wartość wyświetlaną. To ustawienie określa, która kolumna macierzy lub pytanie typu panel powinno zawierać tekst wyświetlany.",
    // [Auto-translated] "Select to let respondents add their own choices if the desired option isn't available in the dropdown. Custom choices will only be stored temporarily for the duration of the current browser session."
    allowCustomChoices: "Zaznacz, aby umożliwić respondentom dodawanie własnych wyborów, jeśli żądana opcja nie jest dostępna na liście rozwijanej. Niestandardowe wybory będą przechowywane tylko tymczasowo na czas trwania bieżącej sesji przeglądarki.",
    // [Auto-translated] "When selected, users can include additional input in a separate comment box."
    showOtherItem: "Po wybraniu tej opcji użytkownicy mogą uwzględnić dodatkowe dane wejściowe w osobnym polu komentarza.",
    // "Displays each special choice option (\"None\", \"Other\", \"Select All\") on a new line, even when using a multiple-column layout."
    separateSpecialChoices: "Wyświetla każdą opcję wyboru specjalnego (\"Brak\", \"Inne\", \"Zaznacz wszystko\") w nowym wierszu, nawet w przypadku korzystania z układu wielokolumnowego.",
    // [Auto-translated] "Specify the location within the service dataset where the target array of objects is located. Leave empty if the URL already points to the array."
    path: "Określ lokalizację w zestawie danych usługi, w której znajduje się docelowa tablica obiektów. Pozostaw puste, jeśli adres URL wskazuje już tablicę.",
    choicesbyurl: {
      // "Enter a uniform property name within the array of objects whose value will be stored as a response in survey results."
      valueName: " "
    },
    // [Auto-translated] "Enter a uniform property name within the array of objects that contains the values you want to display in the choice list."
    titleName: "Wprowadź jednolitą nazwę właściwości w tablicy obiektów, która zawiera wartości, które mają być wyświetlane na liście wyborów.",
    // [Auto-translated] "Select to allow the service to return an empty response or array."
    allowEmptyResponse: "Zaznacz, aby zezwolić usłudze na zwrócenie pustej odpowiedzi lub tablicy.",
    // [Auto-translated] "Use the magic wand icon to set a conditional rule that determines the visibility of all choice options."
    choicesVisibleIf: "Użyj ikony magicznej różdżki, aby ustawić regułę warunkową, która określa widoczność wszystkich opcji wyboru.",
    // [Auto-translated] "The left value serves as an item ID used in conditional rules, the right value is displayed to respondents."
    rateValues: "Lewa wartość służy jako identyfikator elementu używany w regułach warunkowych, prawa wartość jest wyświetlana respondentom.",
    rating: {
      // "\"Auto\" selects between the \"Buttons\" and \"Dropdown\" modes based on the available width. When the width is insufficient to display buttons, the question displays a dropdown."
      displayMode: "\"Auto\" wybiera między trybami \"Przyciski\" i \"Rozwijane\" w zależności od dostępnej szerokości. Gdy szerokość jest niewystarczająca do wyświetlenia przycisków, w pytaniu zostanie wyświetlona lista rozwijana."
    },
    // [Auto-translated] "Allows you to connect questions that produce results in different formats. When such questions are linked together using a join identifier, this shared property stores selected question values."
    valuePropertyName: "Umożliwia łączenie pytań, które dają wyniki w różnych formatach. Gdy takie pytania są połączone ze sobą za pomocą identyfikatora sprzężenia, ta właściwość współużytkowana przechowuje wybrane wartości pytań.",
    // [Auto-translated] "Select if you want to update the drop-down menu contents to match the search query that a user is typing in the input field."
    searchEnabled: "Wybierz, czy chcesz zaktualizować zawartość menu rozwijanego, aby pasowała do zapytania wyszukiwania wpisywanego przez użytkownika w polu wejściowym.",
    // [Auto-translated] "A value to save in survey results when respondents give a positive answer."
    valueTrue: "Wartość, którą należy zapisać w wynikach ankiety, gdy respondenci udzielą pozytywnej odpowiedzi.",
    // [Auto-translated] "A value to save in survey results when respondents give a negative answer."
    valueFalse: "Wartość, która ma zostać zapisana w wynikach ankiety, gdy respondenci udzielą odpowiedzi negatywnej.",
    // [Auto-translated] "It's not recommended to disable this option as it overrides the Preview image and makes it hard for a user to understand whether the files have been uploaded."
    showPreview: "Nie zaleca się wyłączania tej opcji, ponieważ zastępuje ona obraz podglądu i utrudnia użytkownikowi zrozumienie, czy pliki zostały przekazane.",
    // [Auto-translated] "Triggers a prompt asking to confirm the file deletion."
    needConfirmRemoveFile: "Uruchamia monit z prośbą o potwierdzenie usunięcia pliku.",
    // [Auto-translated] "Enable to rank only selected choices. Users will drag selected items from the choice list to order them within the ranking area."
    selectToRankEnabled: "Włącz, aby uszeregować tylko wybrane wybory. Użytkownicy będą przeciągać wybrane elementy z listy wyboru, aby uporządkować je w obszarze rankingu.",
    // [Auto-translated] "Enter a list of choices that will be suggested to the respondent during input."
    dataList: "Wprowadź listę opcji, które zostaną zasugerowane respondentowi podczas wprowadzania danych.",
    // [Auto-translated] "The setting only resizes the input fields and doesn't affect the width of the question box."
    inputSize: "To ustawienie zmienia tylko rozmiar pól wejściowych i nie wpływa na szerokość pola pytania.",
    // [Auto-translated] "Sets consistent width for all item labels in pixels"
    itemTitleWidth: "Ustawia spójną szerokość dla wszystkich etykiet elementów. Akceptuje wartości CSS (px, %, in, pt itd.).",
    // "Select how to align input value within the field. The default setting \"Auto\" aligns the input value to the right if currency or numeric masking is applied and to the left if not."
    inputTextAlignment: "Wybierz sposób wyrównania wartości wejściowej w polu. Ustawienie domyślne \"Auto\" wyrównuje wartość wejściową do prawej, jeśli stosowane jest maskowanie walutowe lub numeryczne, i do lewej, jeśli nie.",
    // [Auto-translated] "Serves as a substitute when the image cannot be displayed on a user's device and for accessibility purposes."
    altText: "Służy jako substytut, gdy obraz nie może być wyświetlany na urządzeniu użytkownika oraz w celu ułatwienia dostępu.",
    // "Defines the color of the selected emoji when the Rating icon type is set to \"Smileys\". Choose between: \"Default\" - the selected emoji appears in default survey color; \"Scale\" - the selected emoji inherits color from the rating scale."
    rateColorMode: "Określa kolor wybranego emoji, gdy typ ikony oceny jest ustawiony na \"Emotikony\". Wybierz pomiędzy: \"Domyślny\" - wybrany emoji pojawia się w domyślnym kolorze ankiety; \"Skala\" - wybrany emoji dziedziczy kolor ze skali ocen.",
    expression: {
      // "An expression ID that is not visible to respondents."
      name: "Identyfikator wyrażenia, który nie jest widoczny dla respondentów.",
      // "Type an expression subtitle."
      description: "Wpisz podtytuł wyrażenia.",
      // "An expression can include basic calculations (`{q1_id} + {q2_id}`), conditions (`{age} > 60`), and functions ('iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, etc.)."
      expression: "Wyrażenie może zawierać podstawowe obliczenia ('{q1_id} + {q2_id}'), warunki ('{wiek} > 60') i funkcje ('iif()', 'today()', 'age()', 'min()', 'max()', 'avg()' itp.)."
    },
    // "Select to store the \"Other\" option value as a separate property in survey results."
    storeOthersAsComment: "Wybierz, aby zapisać wartość opcji \"Inne\" jako oddzielną właściwość w wynikach ankiety.",
    // [Auto-translated] "Use {0} as a placeholder for the actual value."
    format: "Użyj {0} jako symbolu zastępczego dla rzeczywistej wartości.",
    // [Auto-translated] "Refer to the [accept](https://www.w3schools.com/tags/att_input_accept.asp) attribute description for more information."
    acceptedTypes: "Więcej informacji można znaleźć w opisie atrybutu [accept](https://www.w3schools.com/tags/att_input_accept.asp).",
    // [Auto-translated] "Applicable only to Radiogroup and Checkbox cell types."
    columnColCount: "Dotyczy tylko komórek typu Radiogroup i Checkbox.",
    // [Auto-translated] "Refer to the [autocomplete](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete) attribute description for more information."
    autocomplete: "Więcej informacji można znaleźć w opisie atrybutu [autocomplete](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete).",
    // "Applies when \"File source type\" is \"Local file\" or when camera is unavailable"
    filePlaceholder: "Ma zastosowanie, gdy \"Typ źródła\" to \"Pliki lokalne\" lub gdy kamera jest niedostępna",
    // "Applies when \"File source type\" is \"Camera\"."
    photoPlaceholder: "Ma zastosowanie, gdy \"Typ źródła\" to \"Kamera\".",
    // "Applies when \"File source type\" is \"Local file or camera\"."
    fileOrPhotoPlaceholder: "Ma zastosowanie, gdy \"Typ źródła\" to \"Pliki lokalne lub kamera\".",
    // "Arranges choice options in a multi-column layout. When set to 0, the options are displayed in a single line."
    colCount: "Rozmieszcza opcje wyboru w układzie wielokolumnowym. Po ustawieniu wartości 0 opcje są wyświetlane w jednym wierszu.",
    masksettings: {
      // "Select if you want to store the question value with an applied mask in survey results."
      saveMaskedValue: "Wybierz, czy chcesz przechowywać wartość pytania z zastosowaną maską w wynikach ankiety."
    },
    patternmask: {
      // "The pattern can contain string literals and the following placeholders: `9` - for a digit; `a` - for an upper- or lower-case letter; `#` - for a digit or an upper- or lower-case letter. Use backslash `\\` to escape a character."
      pattern: "Wzorzec może zawierać literały ciągu i następujące symbole zastępcze: \"9\" — dla cyfry; 'a' - dla wielkiej lub małej litery; '#' - dla cyfry lub wielkiej lub małej litery. Użyj ukośnika odwrotnego \"\\\", aby uciec od znaku."
    },
    datetimemask: {
      // "The pattern can contain separator characters and the following placeholders:<br>`m` - Month number.<br>`mm` - Month number, with leading zero for single-digit values.<br>`d` - Day of the month.<br>`dd` - Day of the month, with leading zero for single-digit values.<br>`yy` - The last two digits of the year.<br>`yyyy` - Four-digit year.<br>`H` - Hours in 24-hour format.<br>`HH` - Hours in 24-hour format, with leading zero for single-digit values.<br>`h` - Hours in 12-hour format.<br>`hh` - Hours in 12-hour format, with leading zero for single-digit values.<br>`MM` - Minutes.<br>`ss` - Seconds.<br>`TT` - 12-hour clock period in upper case (AM/PM).<br>`tt` - 12-hour clock period in lower case (am/pm)."
      pattern: "Wzorzec może zawierać znaki separatora i następujące symbole zastępcze:<br>'m' - Numer miesiąca.<br>'mm' - Numer miesiąca z zerem wiodącym dla wartości jednocyfrowych. <br>'d' - Dzień miesiąca. <br>'dd' — dzień miesiąca, z zerem wiodącym dla wartości jednocyfrowych. <br>'yy' - Dwie ostatnie cyfry roku. <br>'yyyy' - Rok czterocyfrowy. <br>\"H\" - Godziny w formacie 24-godzinnym. <br>\"HH\" — godziny w formacie 24-godzinnym, z zerem wiodącym dla wartości jednocyfrowych. <br>'h' - Godziny w formacie 12-godzinnym. <br>\"hh\" — godziny w formacie 12-godzinnym, z zerem wiodącym dla wartości jednocyfrowych. <br>'MM' - minuty. <br>'ss' - Sekundy. <br>\"TT\" - 12-godzinny okres zegara pisany wielkimi literami (AM/PM). <br>'tt' - 12-godzinny okres zegara pisany małymi literami (am/pm)."
    },
    numericmask: {
      // "A symbol used to separate the fractional part from the integer part of a displayed number."
      decimalSeparator: "Symbol używany do oddzielenia części ułamkowej od części całkowitej wyświetlanej liczby.",
      // "A symbol used to separate the digits of a large number into groups of three."
      thousandsSeparator: "Symbol używany do rozdzielania cyfr dużej liczby na grupy po trzy.",
      // "Limits how many digits to retain after the decimal point for a displayed number."
      precision: "Ogranicza liczbę cyfr, które mają być zachowywane po przecinku dziesiętnym wyświetlanej liczby."
    },
    currencymask: {
      // "One or several symbols to be displayed before the value."
      prefix: "Jeden lub kilka symboli, które mają być wyświetlane przed wartością.",
      // "One or several symbols to be displayed after the value."
      suffix: "Jeden lub kilka symboli, które mają być wyświetlane po wartości."
    },
    theme: {
      // "This setting applies only to questions outside of a panel."
      isPanelless: "To ustawienie ma zastosowanie tylko do pytań znajdujących się poza panelem.",
      // "Sets a supplementary color that highlights key survey elements."
      primaryColor: "Ustawia kolor dodatkowy, który wyróżnia kluczowe elementy ankiety.",
      // "Adjusts the transparency of panels and question boxes relative to the survey background."
      panelBackgroundTransparency: "Dostosowuje przezroczystość paneli i pól pytań względem tła ankiety.",
      // "Adjusts the transparency of input elements relative to the survey background."
      questionBackgroundTransparency: "Dostosowuje przezroczystość elementów wejściowych względem tła ankiety.",
      // "Sets the corner radius for all rectangular elements. Enable the Advanced Mode if you want to set individual corner radius values for input elements or panels and question boxes."
      cornerRadius: "Ustawia promień narożnika dla wszystkich elementów prostokątnych. Włącz tryb zaawansowany, jeśli chcesz ustawić indywidualne wartości promienia narożnika dla elementów wejściowych lub paneli i pól pytań.",
      // "Sets the main background color of the survey."
      "--sjs-general-backcolor-dim": "Ustawia główny kolor tła ankiety."
    },
    header: {
      // "The \"Same as container\" option auto-adjusts the header content area width to fit into the HTML element the survey is placed in."
      inheritWidthFrom: "Opcja \"Taki sam jak kontener\" automatycznie dostosowuje szerokość obszaru zawartości nagłówka, aby pasowała do elementu HTML, w którym umieszczono ankietę.",
      // [Auto-translated] "The width of the header area that contains the survey title and description, measured in pixels."
      textAreaWidth: "Szerokość obszaru nagłówka, który zawiera tytuł i opis ankiety, mierzona w pikselach.",
      // [Auto-translated] "When enabled, the top of the survey overlays the bottom of the header."
      overlapEnabled: "Gdy ta opcja jest włączona, górna krawędź ankiety nakłada się na dolną część nagłówka.",
      // [Auto-translated] "When set to 0, the height is calculated automatically to accommodate the header's content."
      mobileHeight: "Po ustawieniu wartości 0 wysokość jest obliczana automatycznie, aby pomieścić zawartość nagłówka."
    },
    // "The \"Same as container\" option auto-adjusts the progress bar area width to fit into the HTML element the survey is placed in."
    progressBarInheritWidthFrom: "Opcja \"Tak samo jak kontener\" automatycznie dostosowuje szerokość obszaru paska postępu, aby pasowała do elementu HTML, w którym umieszczona jest ankieta.",
    // "Used when the 'Survey layout' is set to 'Single input field per page'. In this layout, the matrix is split so that each input field appears on a separate page. Use the {rowIndex} placeholder to insert auto numbering, {rowTitle} or {rowName} to reference the row's title or ID, and {row.columnid} to include the value of a specific matrix column."
    singleInputTitleTemplate: "Używane, gdy opcja \"Układ ankiety\" jest ustawiona na \"Pojedyncze pole wprowadzania danych na stronę\". W tym układzie macierz jest podzielona w taki sposób, że każde pole wejściowe pojawia się na osobnej stronie. Użyj symbolu zastępczego {rowIndex}, aby wstawić numerację automatyczną, {rowTitle} lub {rowName}, aby odwołać się do tytułu lub identyfikatora wiersza, oraz {row.columnid}, aby uwzględnić wartość określonej kolumny macierzy."
  },
  // Properties
  p: {
    title: {
      // "title"
      name: "tytuł",
      // "Leave it empty, if it is the same as 'Name'"
      title: "Pozostaw pusty, jeśli ma być taki sam, jak 'Nazwa'"
    },
    // [Auto-translated] "Allow multiple selection"
    multiSelect: "Zezwalaj na wielokrotny wybór",
    // [Auto-translated] "Show image captions"
    showLabel: "Pokaż podpisy pod obrazami",
    // [Auto-translated] "Swap the order of Yes and No"
    swapOrder: "Zamień kolejność Tak i Nie",
    // [Auto-translated] "Value"
    value: "Wartość",
    // [Auto-translated] "Tab alignment"
    tabAlign: "Wyrównanie tabulatorów",
    // [Auto-translated] "Source type"
    sourceType: "Typ źródła",
    // [Auto-translated] "Fit to container"
    fitToContainer: "Pasuje do pojemnika",
    // [Auto-translated] "Set value expression"
    setValueExpression: "Wyrażenie wartości zadanej",
    // [Auto-translated] "Description"
    description: "Opis",
    // [Auto-translated] "Logo fit"
    logoFit: "Dopasowanie logo",
    // [Auto-translated] "Pages"
    pages: "Stron",
    // [Auto-translated] "Questions"
    questions: "Pytania",
    // [Auto-translated] "Triggers"
    triggers: "Wyzwalaczy",
    // [Auto-translated] "Calculated values"
    calculatedValues: "Obliczone wartości",
    // [Auto-translated] "Survey id"
    surveyId: "Identyfikator ankiety",
    // [Auto-translated] "Survey post id"
    surveyPostId: "Identyfikator posta ankiety",
    // [Auto-translated] "Survey show data saving"
    surveyShowDataSaving: "Ankieta pokazuje zapisywanie danych",
    // [Auto-translated] "Question description location"
    questionDescriptionLocation: "Lokalizacja opisu pytania",
    // [Auto-translated] "Progress bar type"
    progressBarType: "Typ paska postępu",
    // [Auto-translated] "Show TOC"
    showTOC: "Pokaż spis treści",
    // [Auto-translated] "Toc location"
    tocLocation: "Lokalizacja spisu treści",
    // [Auto-translated] "Question title pattern"
    questionTitlePattern: "Wzorzec tytułu pytania",
    // [Auto-translated] "Width mode"
    widthMode: "Tryb szerokości",
    // [Auto-translated] "Show brand info"
    showBrandInfo: "Pokaż informacje o marce",
    // [Auto-translated] "Use display values in dynamic texts"
    useDisplayValuesInDynamicTexts: "Używanie wartości wyświetlanych w tekstach dynamicznych",
    // [Auto-translated] "Visible if"
    visibleIf: "Widoczne, jeśli",
    // [Auto-translated] "Default value expression"
    defaultValueExpression: "Wyrażenie wartości domyślnej",
    // [Auto-translated] "Required if"
    requiredIf: "Wymagane, jeśli:",
    // [Auto-translated] "Reset value if"
    resetValueIf: "Zresetuj wartość, jeśli",
    // [Auto-translated] "Set value if"
    setValueIf: "Ustaw wartość, jeśli",
    // [Auto-translated] "Validators"
    validators: "Walidatory",
    // [Auto-translated] "Bindings"
    bindings: "Powiązania",
    // [Auto-translated] "Render as"
    renderAs: "Renderuj jako",
    // [Auto-translated] "Attach original items"
    attachOriginalItems: "Dołączanie oryginalnych elementów",
    // [Auto-translated] "Choices"
    choices: "Wyborów",
    // [Auto-translated] "Choices by url"
    choicesByUrl: "Opcje według adresu URL",
    // [Auto-translated] "Currency"
    currency: "Waluta",
    // [Auto-translated] "Cell hint"
    cellHint: "Wskazówka do komórki",
    // [Auto-translated] "Total maximum fraction digits"
    totalMaximumFractionDigits: "Łączne maksymalne cyfry ułamkowe",
    // [Auto-translated] "Total minimum fraction digits"
    totalMinimumFractionDigits: "Łączne minimalne cyfry ułamkowe",
    // [Auto-translated] "Columns"
    columns: "Kolumny",
    // [Auto-translated] "Detail elements"
    detailElements: "Elementy szczegółowe",
    // [Auto-translated] "Allow adaptive actions"
    allowAdaptiveActions: "Zezwalaj na działania adaptacyjne",
    // [Auto-translated] "Default row value"
    defaultRowValue: "Domyślna wartość wiersza",
    // [Auto-translated] "Detail panel show on adding"
    detailPanelShowOnAdding: "Automatyczne rozwijanie szczegółów nowego wiersza",
    // [Auto-translated] "Choices lazy load enabled"
    choicesLazyLoadEnabled: "Opcje: leniwe ładowanie włączone",
    // [Auto-translated] "Choices lazy load page size"
    choicesLazyLoadPageSize: "Opcje: leniwy rozmiar strony ładowania",
    // [Auto-translated] "Input field component"
    inputFieldComponent: "Składnik pola wejściowego",
    // [Auto-translated] "Item component"
    itemComponent: "Składnik elementu",
    // [Auto-translated] "Min"
    min: "Min",
    // [Auto-translated] "Max"
    max: "Max",
    // [Auto-translated] "Min value expression"
    minValueExpression: "Minimalne wyrażenie wartości",
    // [Auto-translated] "Max value expression"
    maxValueExpression: "Wyrażenie wartości maksymalnej",
    // [Auto-translated] "Step"
    step: "Krok",
    // [Auto-translated] "Data list"
    dataList: "Lista danych",
    // [Auto-translated] "Item size"
    inputSize: "Rozmiar produktu",
    // [Auto-translated] "Item label width (in px)"
    itemTitleWidth: "Szerokość etykiety elementu (w pikselach)",
    // [Auto-translated] "Input value alignment"
    inputTextAlignment: "Wyrównanie wartości wejściowej",
    // [Auto-translated] "Elements"
    elements: "Pierwiastki",
    // [Auto-translated] "Content"
    content: "Zawartość",
    // [Auto-translated] "Navigation title"
    navigationTitle: "Tytuł nawigacji",
    // [Auto-translated] "Navigation description"
    navigationDescription: "Opis nawigacji",
    // [Auto-translated] "Long tap"
    longTap: "Długie dotknięcie",
    // [Auto-translated] "Auto grow"
    autoGrow: "Automatyczny wzrost",
    // [Auto-translated] "Allow resizing"
    allowResize: "Zezwalaj na zmianę rozmiaru",
    // [Auto-translated] "Accept carriage return"
    acceptCarriageReturn: "Zaakceptuj zwrot karetki",
    // [Auto-translated] "Display mode"
    displayMode: "Tryb wyświetlania",
    // [Auto-translated] "Rate type"
    rateType: "Rodzaj stawki",
    // [Auto-translated] "Label"
    label: "Etykieta",
    // [Auto-translated] "Content mode"
    contentMode: "Tryb zawartości",
    // [Auto-translated] "Image fit"
    imageFit: "Dopasowanie obrazu",
    // [Auto-translated] "Alt text"
    altText: "Tekst alternatywny",
    // [Auto-translated] "Height"
    height: "Wysokość",
    // [Auto-translated] "Height on smartphones"
    mobileHeight: "Wysokość na smartfonach",
    // [Auto-translated] "Pen color"
    penColor: "Kolor pióra",
    // [Auto-translated] "Background color"
    backgroundColor: "Kolor tła",
    // [Auto-translated] "Template elements"
    templateElements: "Elementy szablonu",
    // [Auto-translated] "Operator"
    operator: "Operator",
    // [Auto-translated] "Is variable"
    isVariable: "Jest zmienna",
    // [Auto-translated] "Run expression"
    runExpression: "Uruchom wyrażenie",
    // [Auto-translated] "Show caption"
    showCaption: "Pokaż podpis",
    // [Auto-translated] "Icon name"
    iconName: "Nazwa ikony",
    // [Auto-translated] "Icon size"
    iconSize: "Rozmiar ikony",
    // [Auto-translated] "Precision"
    precision: "Precyzja",
    // [Auto-translated] "Matrix drag handle area"
    matrixDragHandleArea: "Obszar uchwytu przeciągania macierzy",
    // [Auto-translated] "Background image"
    backgroundImage: "Obraz tła",
    // [Auto-translated] "Background image fit"
    backgroundImageFit: "Dopasowanie obrazu tła",
    // [Auto-translated] "Background image attachment"
    backgroundImageAttachment: "Załącznik obrazu tła",
    // [Auto-translated] "Background opacity"
    backgroundOpacity: "Krycie tła",
    // [Auto-translated] "Select to rank enabled"
    selectToRankEnabled: "Wybierz, aby ranga była włączona",
    // [Auto-translated] "Select to rank areas layout"
    selectToRankAreasLayout: "Wybierz, aby uszeregować układ obszarów",
    // [Auto-translated] "Text to show if all options are selected"
    selectToRankEmptyRankedAreaText: "Tekst pokazujący, czy wszystkie opcje są zaznaczone",
    // [Auto-translated] "Placeholder text for the ranking area"
    selectToRankEmptyUnrankedAreaText: "Tekst zastępczy dla obszaru klasyfikacji",
    // [Auto-translated] "Allow camera access"
    allowCameraAccess: "Zezwalaj na dostęp do kamery",
    // [Auto-translated] "Scale color mode"
    scaleColorMode: "Tryb skalowania kolorów",
    // [Auto-translated] "Rate color mode"
    rateColorMode: "Oceń tryb kolorów",
    // [Auto-translated] "Copy display value"
    copyDisplayValue: "Kopiowanie wyświetlanej wartości",
    // [Auto-translated] "Column span"
    effectiveColSpan: "Rozpiętość kolumn",
    // [Auto-translated] "Progress bar area width"
    progressBarInheritWidthFrom: "Szerokość obszaru paska postępu"
  },
  theme: {
    // "Advanced mode"
    advancedMode: "Tryb zaawansowany",
    // "Page"
    pageTitle: "Czcionka tytułu strony",
    // "Question box"
    questionTitle: "Czcionka tytułu pytania",
    // "Input element"
    editorPanel: "Element wejściowy",
    // [Auto-translated] "Lines"
    lines: "Linie",
    // [Auto-translated] "Default"
    primaryDefaultColor: "Domyślny",
    // [Auto-translated] "Hover"
    primaryDarkColor: "Hover",
    // [Auto-translated] "Selected"
    primaryLightColor: "Wybrany",
    // [Auto-translated] "Background color"
    backgroundDimColor: "Kolor tła",
    // "Corner radius"
    cornerRadius: "Promień naroża",
    // [Auto-translated] "Default background"
    backcolor: "Domyślne tło",
    // [Auto-translated] "Hover background"
    hovercolor: "Najedź kursorem na tło",
    // [Auto-translated] "Border decoration"
    borderDecoration: "Dekoracja obramowania",
    // [Auto-translated] "Font color"
    fontColor: "Kolor czcionki",
    // [Auto-translated] "Background color"
    backgroundColor: "Kolor tła",
    // [Auto-translated] "Default color"
    primaryForecolor: "Kolor domyślny",
    // [Auto-translated] "Disabled color"
    primaryForecolorLight: "Kolor wyłączony",
    // [Auto-translated] "Font"
    font: "Czcionka",
    // [Auto-translated] "Darker"
    borderDefault: "Ciemniejsze",
    // [Auto-translated] "Lighter"
    borderLight: "Zapalniczka",
    // [Auto-translated] "Font family"
    fontFamily: "Rodzina czcionek",
    // [Auto-translated] "Regular"
    fontWeightRegular: "Regularny",
    // [Auto-translated] "Heavy"
    fontWeightHeavy: "Ciężki",
    // [Auto-translated] "Semi-bold"
    fontWeightSemiBold: "Półpogrubienie",
    // [Auto-translated] "Bold"
    fontWeightBold: "Śmiały",
    // [Auto-translated] "Color"
    color: "Kolor",
    // [Auto-translated] "Placeholder color"
    placeholderColor: "Kolor symbolu zastępczego",
    // [Auto-translated] "Size"
    size: "Rozmiar",
    // [Auto-translated] "Opacity"
    opacity: "Nieprzezroczystość",
    // [Auto-translated] "X"
    boxShadowX: "X",
    // [Auto-translated] "Y"
    boxShadowY: "Y",
    // [Auto-translated] "Add Shadow Effect"
    boxShadowAddRule: "Dodaj efekt cienia",
    // [Auto-translated] "Blur"
    boxShadowBlur: "Zacierać",
    // [Auto-translated] "Spread"
    boxShadowSpread: "Rozprzestrzenianie się",
    // [Auto-translated] "Drop"
    boxShadowDrop: "Kropla",
    // [Auto-translated] "Inner"
    boxShadowInner: "Wewnętrzny",
    names: {
      // [Auto-translated] "Default"
      default: "Domyślny",
      // [Auto-translated] "Sharp"
      sharp: "Ostry",
      // [Auto-translated] "Borderless"
      borderless: "Bez obramowania",
      // [Auto-translated] "Flat"
      flat: "Płaski",
      // [Auto-translated] "Plain"
      plain: "Równina",
      // [Auto-translated] "Double Border"
      doubleborder: "Podwójna ramka",
      // [Auto-translated] "Layered"
      layered: "Warstwowe",
      // [Auto-translated] "Solid"
      solid: "Bryła",
      // [Auto-translated] "3D"
      threedimensional: ".3D",
      // [Auto-translated] "Contrast"
      contrast: "Kontrast"
    },
    colors: {
      // [Auto-translated] "Teal"
      teal: "Teal",
      // [Auto-translated] "Blue"
      blue: "Niebieski",
      // [Auto-translated] "Purple"
      purple: "Purpura",
      // [Auto-translated] "Orchid"
      orchid: "Orchidea",
      // [Auto-translated] "Tulip"
      tulip: "Tulipan",
      // [Auto-translated] "Brown"
      brown: "Brązowy",
      // [Auto-translated] "Green"
      green: "Zielony",
      // [Auto-translated] "Gray"
      gray: "Szary"
    }
  },
  creatortheme: {
    // [Auto-translated] "Surface background"
    "--sjs-special-background": "Tło powierzchni",
    // [Auto-translated] "Primary"
    "--sjs-primary-background-500": "Podstawowy",
    // [Auto-translated] "Secondary"
    "--sjs-secondary-background-500": "Wtórny",
    // [Auto-translated] "Surface"
    surfaceScale: "Powierzchnia",
    // [Auto-translated] "User interface"
    userInterfaceBaseUnit: "Interfejs użytkownika",
    // [Auto-translated] "Font"
    fontScale: "Czcionka",
    names: {
      // [Auto-translated] "Survey Creator 2020"
      sc2020: "Kreator ankiet 2020",
      // [Auto-translated] "Light"
      "default-light": "Światło",
      // [Auto-translated] "Dark"
      "default-dark": "Ciemny",
      // [Auto-translated] "Contrast"
      "default-contrast": "Kontrast"
    }
  }
};

setupLocale({ localeCode: "pl", strings: polishStrings });