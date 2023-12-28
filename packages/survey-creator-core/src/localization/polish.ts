import { editorLocalization } from "survey-creator-core";

var polishStrings = {
  // survey templates
  survey: {
    edit: "Edytuj",
    externalHelpLink: "Obejrzyj i dowiedz się, jak tworzyć ankiety",
    externalHelpLinkUrl: "https://www.youtube.com/channel/UCH2ru9okIcooNZfpIbyq4qQ?view_as=subscriber",
    dropQuestion: "Przeciągnij pytanie.",
    addLogicItem: "Utwórz regułę, aby dostosować przepływ ankiety.",
    copy: "Kopiuj",
    duplicate: "Duplikat",
    addToToolbox: "Dodaj do palety",
    deletePanel: "Usuń panel",
    deleteQuestion: "Usuń pytanie",
    convertTo: "Konwertuj na",
    drag: "Przeciągnij element",
  },
  // Question types
  qt: {
    default: "Domyślny",
    checkbox: "Wielokrotny wybór",
    comment: "Komentarz",
    imagepicker: "Selektor obrazów",
    ranking: "Ranking",
    image: "Obraz",
    dropdown: "Lista wyboru",
    tagbox: "Lista rozwijana Multi-Select",
    file: "Plik",
    html: "Html",
    matrix: "Macierz (jednokrotny wybór)",
    matrixdropdown: "Matrix (wielokrotny wybór)",
    matrixdynamic: "Matrix (dynamiczne wiersze)",
    multipletext: "Wiele linii tekstu",
    panel: "Panel",
    paneldynamic: "Panel (dynamiczne panele)",
    radiogroup: "Jednokrotny wybór",
    rating: "Ocena",
    text: "Pojedyncza odpowiedź",
    boolean: "Prawda/Fałsz",
    expression: "Wyrażenie",
    signaturepad: "Podpis",
    buttongroup: "Grupa przycisków"
  },
  // Strings in SurveyJS Creator
  ed: {
    defaultLocale: "Domyślne ({0})",
    survey: "Ankieta",
    settings: "Ustawienia",
    settingsTooltip: "Otwórz ustawienia",
    surveySettings: "Ustawienia ankiety",
    surveySettingsTooltip: "Otwórz ustawienia ankiety",
    themeSettings: "Ustawienia motywu",
    themeSettingsTooltip: "Otwórz ustawienia motywu",
    showPanel: "Pokaż panel",
    hidePanel: "Panel Ukryj",
    prevSelected: "Wybierz poprzedni",
    nextSelected: "Wybierz następny",
    prevFocus: "Fokus poprzedni",
    nextFocus: "Ostrość następna",
    surveyTypeName: "Sondaż",
    pageTypeName: "Strona",
    panelTypeName: "Panel",
    questionTypeName: "Pytanie",
    columnTypeName: "Kolumna",
    addNewPage: "Dodaj nową sekcję",
    moveRight: "Przewiń w prawo",
    moveLeft: "Przewiń w lewo",
    deletePage: "Usuń sekcję",
    editPage: "Edytuj sekcję",
    edit: "Redagować",
    newPageName: "sekcja",
    newQuestionName: "pytanie",
    newPanelName: "panel",
    newTextItemName: "Tekst",
    testSurvey: "Testuj ankietę",
    themeSurvey: "Tematy",
    defaultV2Theme: "Domyślny",
    modernTheme: "Nowoczesny",
    defaultTheme: "Domyślne (starsze)",
    testSurveyAgain: "Testuj ponownie",
    testSurveyWidth: "Szerokość ankiety: ",
    navigateToMsg: "Trzeba było nawigować do",
    logic: "Logika",
    embedSurvey: "Embed Survey",
    translation: "Tłumaczenie",
    saveSurvey: "Zapisz ankietę",
    saveSurveyTooltip: "Zapisz ankietę",
    saveTheme: "Zapisz motyw",
    saveThemeTooltip: "Zapisz motyw",
    designer: "Projektant ankiety",
    jsonEditor: "JSON Editor",
    jsonHideErrors: "Ukryj błędy",
    jsonShowErrors: "Pokaż błędy",
    undo: "Cofnij",
    redo: "Ponów",
    undoTooltip: "Cofanie ostatniej zmiany",
    redoTooltip: "Ponowne wprowadzanie zmian",
    showMoreChoices: "Pokaż więcej",
    showLessChoices: "Pokaż mniej",
    copy: "Kopiować",
    cut: "Ciąć",
    paste: "Wklejać",
    copyTooltip: "Kopiuj zaznaczenie do schowka",
    cutTooltip: "Wytnij zaznaczenie do schowka",
    pasteTooltip: "Wklejanie ze schowka",
    options: "Opcje",
    generateValidJSON: "Generate Valid JSON",
    generateReadableJSON: "Generate Readable JSON",
    toolbox: "Paleta",
    "property-grid": "Właściwości",
    propertyGridFilteredTextPlaceholder: "Wpisz, aby wyszukać...",
    propertyGridNoResultsFound: "Nie znaleziono wyników",
    toolboxGeneralCategory: "Ogólne",
    toolboxChoiceCategory: "Pytania wyboru",
    toolboxTextCategory: "Pytania dotyczące wprowadzania tekstu",
    toolboxContainersCategory: "Pojemniki",
    toolboxMatrixCategory: "Pytania macierzowe",
    toolboxMiscCategory: "Różne",
    correctJSON: "Please correct JSON.",
    surveyResults: "Wynik ankiety: ",
    surveyResultsTable: "Jako tabela",
    surveyResultsJson: "Jako JSON",
    resultsTitle: "Tytuł pytania",
    resultsName: "Nazwa pytania",
    resultsValue: "Wartość odpowiedzi",
    resultsDisplayValue: "Wyświetl wartość",
    modified: "Zmodyfikowana",
    saving: "Trwa zapis",
    saved: "Zapisano",
    propertyEditorError: "Błąd",
    saveError: "Błąd! Zawartość edytora nie jest zapisywana.",
    translationPropertyGridTitle: "Ustawienia językowe",
    themePropertyGridTitle: "Ustawienia motywu",
    translationLanguages: "Języki",
    translationDeleteLanguage: "Czy na pewno chcesz usunąć wszystkie ciągi znaków dla tego języka?",
    translationAddLanguage: "Wybierz język do przetłumaczenia",
    translationShowAllStrings: "Wszystkie struny",
    translationShowUsedStringsOnly: "Tylko używane ciągi",
    translationShowAllPages: "Wszystkie strony",
    translationNoStrings: "Brak ciągów do przetłumaczenia. Proszę zmienić filtr.",
    translationExportToSCVButton: "Eksport do pliku CSV",
    translationImportFromSCVButton: "Importowanie z pliku CSV",
    translateUsigAI: "Automatycznie tłumacz wszystko",
    translationDialogTitle: "Nieprzetłumaczone ciągi znaków",
    translationMergeLocaleWithDefault: "Scalanie {0} z domyślnymi ustawieniami regionalnymi",
    translationPlaceHolder: "Tłumaczenie...",
    themeExportButton: "Eksport",
    themeImportButton: "Import",
    surveyJsonExportButton: "Eksport",
    surveyJsonImportButton: "Import",
    surveyJsonCopyButton: "Kopiuj do schowka",
    themeResetButton: "Przywracanie domyślnych ustawień motywu",
    themeResetConfirmation: "Czy naprawdę chcesz zresetować motyw? Wszystkie Twoje dostosowania zostaną utracone.",
    themeResetConfirmationOk: "Tak, zresetuj motyw",
    bold: "Śmiały",
    italic: "Kursywa",
    underline: "Podkreślać",
    addNewQuestion: "Dodaj pytanie",
    selectPage: "Wybierz stronę...",
    carryForwardChoicesCopied: "Wybory są kopiowane z",
    choicesLoadedFromWebText: "Opcje są ładowane z usługi internetowej.",
    choicesLoadedFromWebLinkText: "Przejdź do ustawień",
    choicesLoadedFromWebPreviewTitle: "Podgląd wczytanych opcji wyboru",
    htmlPlaceHolder: "Zawartość HTML będzie tutaj.",
    panelPlaceHolder: "Upuść pytanie z przybornika tutaj.",
    surveyPlaceHolder: "Ankieta jest pusta. Przeciągnij element z przybornika lub kliknij przycisk poniżej.",
    imagePlaceHolder: "Przeciągnij i upuść obraz tutaj lub kliknij przycisk poniżej i wybierz obraz do przesłania",
    imageChooseImage: "Wybierz obraz",
    addNewTypeQuestion: "Dodaj {0}", //{0} is localizable question type
    chooseLogoPlaceholder: "[LOGO]",
    auto: "Automatycznie",
    choices_Item: "Przedmiot ",
    lg: {
      addNewItem: "Dodaj nową regułę",
      empty_tab: "Utwórz regułę, aby dostosować przepływ ankiety.",
      page_visibilityName: "Pokaż (ukryj) stronę",
      page_enableName: "Włącz (wyłącz) stronę",
      page_requireName: "Ustaw stronę jako wymaganą",
      panel_visibilityName: "Pokaż (ukryj) panel",
      panel_enableName: "Włącz (wyłącz) panel",
      panel_requireName: "Ustaw stronę jako wymaganą",
      question_visibilityName: "Pokaż (ukryj) pytanie",
      question_enableName: "Włącz (wyłącz) pytanie",
      question_requireName: "Zadbaj o pytanie wymagane",
      question_resetValueName: "Zresetuj wartość pytania",
      question_setValueName: "Ustawianie wartości pytania",
      column_visibilityName: "Pokaż (ukryj) kolumnę",
      column_enableName: "Włącz (wyłącz) kolumnę",
      column_requireName: "Ustaw kolumnę jako wymaganą",
      column_resetValueName: "Resetowanie wartości kolumny",
      column_setValueName: "Ustawianie wartości kolumny",
      trigger_completeName: "Wypełnij ankietę",
      trigger_setvalueName: "Ustaw odpowiedź",
      trigger_copyvalueName: "Kopiuj odpowiedź",
      trigger_skipName: "Przejdź do pytania",
      trigger_runExpressionName: "Uruchom wyrażenie",
      completedHtmlOnConditionName: "Ustaw znaczniki strony \"Ankieta ukończona\"",
      page_visibilityDescription: "Spraw, aby strona była widoczna, gdy wyrażenie logiczne zwróci wartość true. W przeciwnym razie zachowaj go niewidocznym.",
      panel_visibilityDescription: "Uczyń panel widocznym, gdy wyrażenie logiczne zwróci wartość true. W przeciwnym razie zachowaj go niewidocznym.",
      panel_enableDescription: "Włącz panel i wszystkie znajdujące się w nim elementy, gdy wyrażenie logiczne zwróci wartość true. W przeciwnym razie pozostaw je wyłączone.",
      question_visibilityDescription: "Uczyń pytanie widocznym, gdy wyrażenie logiczne zwróci wartość true. W przeciwnym razie zachowaj go niewidocznym.",
      question_enableDescription: "Włącz pytanie, gdy wyrażenie logiczne zwróci wartość true. W przeciwnym razie pozostaw go wyłączonym.",
      question_requireDescription: "Pytanie staje się wymagane, gdy wyrażenie logiczne zwraca wartość true.",
      trigger_completeDescription: "Gdy wyrażenie logiczne zwraca wartość true, ankieta zostaje wypełniona, a użytkownik końcowy zobaczy stronę \"Dziękuję\".",
      trigger_setvalueDescription: "Gdy wartości pytań, które są używane w wyrażeniu logicznym, zostaną zmienione, a wyrażenie logiczne zwróci wartość true, wartość zostanie ustawiona na wybrane pytanie.",
      trigger_copyvalueDescription: "Gdy wartości pytania, które są używane w wyrażeniu logicznym, zostaną zmienione, a wyrażenie logiczne zwróci wartość true, wartość jednego wybranego pytania zostanie skopiowana do innego wybranego pytania.",
      trigger_skipDescription: "Gdy wyrażenie logiczne zwraca wartość true, ankieta przechodzi do / fokus wybranego pytania.",
      trigger_runExpressionDescription: "Gdy wyrażenie logiczne zwraca wartość true, wykonywane jest wyrażenie niestandardowe. Opcjonalnie można ustawić wynik tego wyrażenia w wybranym pytaniu",
      completedHtmlOnConditionDescription: "Jeśli wyrażenie logiczne zwróci wartość true, domyślny tekst strony \"Dziękuję\" zostanie zmieniony na podany.",
      itemExpressionText: "Gdy wyrażenie \"{0}\" zwraca wartość true", //{0} - the expression
      itemEmptyExpressionText: "Nowa reguła",
      page_visibilityText: "Ustawianie {0} strony", //{0} page name
      panel_visibilityText: "Uwidocznienie {0} panelu", //{0} panel name
      panel_enableText: "Włączanie {0} panelu", //{0} panel name
      question_visibilityText: "Uczyń {0} pytań widocznymi", //{0} question name
      question_enableText: "Utwórz pytanie {0} włącz", //{0} question name
      question_requireText: "Pytanie {0} wymagane", //{0} question name
      question_resetValueText: "Zresetuj wartość dla pytania: {0}",
      question_setValueText: "Przypisz wartość: {1} do pytania: {0}",
      column_visibilityText: "Uwidocznienie {0}  {1}pytania", //{0} column name, {1} question name
      column_enableText: "Ustaw kolumnę {0} pytania{1} włączyć", //{0} column name, {1} question name
      column_requireText: "Ustaw kolumnę {0} pytania {1} wymagane", //{0} column name, {1} question name
      column_resetValueText: "Zresetuj wartość komórki dla kolumny: {0}",
      column_setValueText: "Przypisz wartość komórki: {1} do kolumny: {0}",
      setValueExpressionPlaceholder: " Wyrażenie, którego wynik zostanie przypisany do pytania docelowego.",
      trigger_completeText: "Ankieta zostaje zakończona",
      trigger_setvalueText: "Ustaw pod znakiem zapytania: {0} wartość {1}", //{0} question name, {1} setValue
      trigger_setvalueEmptyText: "Wyczyść wartość pytania: {0}", //{0} question name
      trigger_copyvalueText: "Kopiuj do pytania: {0} wartość z pytania {1}", //{0} and {1} question names
      trigger_skipText: "Przejdź do pytania {0}", //{0} question name
      trigger_runExpressionText1: "Uruchom wyrażenie: '{0}'", //{0} the expression
      trigger_runExpressionText2: " i zakwestionować jego wynik: {0}", //{0} question name
      completedHtmlOnConditionText: "pokaż niestandardowy tekst dla strony \"Dziękuję\".",
      showAllQuestions: "Wszystkie pytania",
      showAllActionTypes: "Wszystkie rodzaje akcji",
      conditions: "Warunek (warunki)",
      actions: "Działania(e)",
      expressionEditorTitle: "Zdefiniuj warunki",
      actionsEditorTitle: "Definiowanie akcji",
      deleteAction: "Akcja usuwania",
      addNewAction: "Dodaj akcję",
      selectedActionCaption: "Wybierz akcję...",
      expressionInvalid: "Wyrażenie logiczne jest puste lub nieprawidłowe. Proszę to poprawić.",
      noActionError: "Dodaj co najmniej jedną akcję.",
      actionInvalid: "Proszę, napraw problemy w swoich działaniach.",
      uncompletedRule_title: "Reguły logiczne są niekompletne",
      uncompletedRule_text: "Nie ukończyłeś niektórych reguł logicznych. Jeśli opuścisz kartę teraz, zmiany zostaną utracone. Czy nadal chcesz opuścić kartę bez dokończenia zmian?",
      uncompletedRule_apply: "Tak",
      uncompletedRule_cancel: "Nie, chcę wypełnić zasady"
    }
  },
  // Property Editors
  pe: {
    apply: "Zastosuj",
    ok: "OK",
    save: "Zapisać",
    clear: "Jasny",
    saveTooltip: "Zapisać",
    cancel: "Anuluj",
    set: "Zbiór",
    reset: "Resetuj",
    change: "Zmieniać",
    refresh: "Odświeżyć",
    close: "Zamknij",
    delete: "Usuń",
    add: "Dodawać",
    addNew: "Dodaj nową",
    addItem: "Kliknij, aby dodać element...",
    removeItem: "Kliknij, aby usunąć element...",
    dragItem: "Przeciągnij element",
    addOther: "Inny",
    addSelectAll: "Zaznacz wszystko",
    addNone: "Żaden",
    removeAll: "Usuń wszystkie",
    edit: "Edytuj",
    back: "Zwrot bez zapisywania",
    backTooltip: "Zwrot bez zapisywania",
    saveAndBack: "Zapisz i zwróć",
    saveAndBackTooltip: "Zapisz i zwróć",
    doneEditing: "Gotowy",
    editChoices: "Edytuj opcje",
    showChoices: "Pokaż wybór",
    move: "Ruszać",
    empty: "<pusty>",
    emptyValue: "Wartość jest pusta",
    fastEntry: "Szybkie wprowadzanie",
    fastEntryNonUniqueError: "Wartość \"{0}\" nie jest unikalna",
    fastEntryChoicesCountError: "Ogranicz liczbę przedmiotów od {0} do {1}",
    fastEntryChoicesMinCountError: "Podaj co najmniej {0} przedmiotów",
    fastEntryPlaceholder: "Dane można ustawić w następującym formacie:\nwartość1|tekst\nwartość2",
    formEntry: "Formularz",
    testService: "Testuj usługę",
    itemSelectorEmpty: "Proszę wybrać element",
    conditionActionEmpty: "Wybierz akcję",
    conditionSelectQuestion: "Wybierz pytanie...",
    conditionSelectPage: "Wybierz stronę...",
    conditionSelectPanel: "Wybierz panel...",
    conditionValueQuestionTitle: "Wpisz/wybierz wartość",
    expressionHelp: "Użyj nawiasów klamrowych, aby uzyskać dostęp do odpowiedzi: '{question1} + {question2}'. Wyrażenia obsługują również funkcje: 'iif()', 'today()', 'age()', 'min()', 'max()', 'count()', 'avg()' i inne",
    aceEditorHelp: "Press ctrl+space to get expression completion hint",
    aceEditorRowTitle: "Current row",
    aceEditorPanelTitle: "Current panel",
    showMore: "For more details please check the documentation",
    assistantTitle: "Available questions:",
    cellsEmptyRowsColumns: "Powinna istnieć co najmniej jedna kolumna lub wiersz",
    showPreviewBeforeComplete: "Podgląd odpowiedzi przed wysłaniem ankiety",
    overridingPropertyPrefix: "Ustaw przez ",
    resetToDefaultCaption: "Resetować",
    propertyIsEmpty: "Podaj wartość",
    propertyIsNoUnique: "Podaj unikatową wartość",
    propertyNameIsNotUnique: "Podaj unikalną nazwę",
    propertyNameIsIncorrect: "Nie używaj zastrzeżonych słów: \"element\", \"wybór\", \"panel\", \"wiersz\".",
    listIsEmpty: "Nie dodano jeszcze żadnych przedmiotów",
    "listIsEmpty@choices": "Nie dodano jeszcze żadnych opcji",
    "addNew@choices": "Dodaj wybór",
    expressionIsEmpty: "Wyrażenie jest puste",
    value: "Wartość",
    text: "Etykieta",
    rowid: "Identyfikator wiersza",
    imageLink: "Adres URL obrazu lub filmu",
    columnEdit: "Edit column: {0}",
    itemEdit: "Edit item: {0}",
    url: "URL",
    path: "Path",
    valueName: "Value name",
    choicesbyurl: {
      valueName: "Pobierz wartości z następującego pola JSON:"
    },
    titleName: "Title name",
    imageLinkName: "Pobierz adresy URL obrazów z następującego pola JSON:",
    allowEmptyResponse: "Zezwalaj na pustą odpowiedź",
    titlePlaceholder: "Tytuł",
    surveyTitlePlaceholder: "Tytuł ankiety",
    pageTitlePlaceholder: "Strona {num}",
    descriptionPlaceholder: "Opis",
    surveyDescriptionPlaceholder: "Opis",
    pageDescriptionPlaceholder: "Opis",
    showOtherItem: "Czy możliwa własna odpowiedź",
    otherText: "Other item text",
    showNoneItem: "Zezwalaj na opcję Brak",
    noneText: "Tekst opcji Brak",
    showSelectAllItem: "Zezwalaj na opcję Zaznacz wszystko",
    selectAllText: "Zaznacz tekst opcji Wszystkie",
    choicesMin: "Minimalna wartość dla automatycznie wygenerowanych elementów",
    choicesMax: "Maksymalna wartość dla automatycznie wygenerowanych elementów",
    choicesStep: "Krok dla automatycznie wygenerowanych elementów",
    name: "Nazwa",
    title: "Etykieta",
    cellType: "Typ komórki",
    colCount: "Liczba kolumn",
    choicesOrder: "Kolejność odpowiedzi",
    visible: "Czy widoczne?",
    isRequired: "Czy wymagalne?",
    markRequired: "Oznacz jako wymagane",
    removeRequiredMark: "Usuń wymagany znacznik",
    isAllRowRequired: "Wymagaj odpowiedzi dla wszystkich wierszy",
    requiredErrorText: "Komunikat o błędzie \"Wymagane\"",
    startWithNewLine: "Czy rozpoczyna się nową linią?",
    rows: "Liczba wierszy",
    cols: "Kolumny",
    placeholder: "Input place holder",
    showPreview: "Show preview area",
    storeDataAsText: "Store file content in JSON result as text",
    maxSize: "Maximum file size in bytes",
    imageHeight: "Image height",
    imageWidth: "Image width",
    rowCount: "Row count",
    columnLayout: "Układ kolumn",
    addRowLocation: "Lokalizacja przycisku Dodaj wiersz",
    addRowText: "Add row button text",
    removeRowText: "Remove row button text",
    rateMin: "Minimalna wartość stawki",
    rateMax: "Maksymalna wartość stawki",
    rateStep: "Krok stawki",
    minRateDescription: "Opis najniższej oceny",
    maxRateDescription: "Opis najwyższej oceny",
    inputType: "Input type",
    optionsCaption: "Options caption",
    defaultValue: "Default value",
    cellsDefaultRow: "Teksty domyślne",
    surveyEditorTitle: "Edytuj ankietę",
    qEditorTitle: "Edytuj: {0}",
    maxLength: "Maksymalna długość (w znakach)",
    buildExpression: "Budować",
    editExpression: "Redagować",
    and: "i",
    or: "lub",
    remove: "Usunąć",
    addCondition: "Dodaj warunek",
    emptyLogicPopupMessage: "Wybierz pytanie, aby rozpocząć konfigurowanie warunków.",
    if: "Jeśli",
    then: "wtedy",
    setToName: "Pytanie docelowe",
    fromName: "Pytanie, z którego należy skopiować odpowiedź",
    gotoName: "Pytanie, do którego należy przejść",
    ruleIsNotSet: "Reguła jest nieprawidłowa",
    includeIntoResult: "Uwzględnij w wynikach ankiety",
    showTitle: "Pokaż/ukryj tytuł",
    expandCollapseTitle: "Rozwiń/zwiń tytuł",
    locale: "Domyślny język",
    simulator: "Wybierz typ urządzenia",
    landscapeOrientation: "Przełączanie na orientację poziomą",
    portraitOrientation: "Przełączanie na orientację pionową",
    mode: "Tryb (edycja/podgląd)",
    clearInvisibleValues: "Usuń niewidoczne odpowiedzi",
    cookieName: "Cookie name (to disable run survey two times locally)",
    sendResultOnPageNext: "Send survey results on page next",
    storeOthersAsComment: "Store 'others' value in separate field",
    showPageTitles: "Show page titles",
    showPageNumbers: "Show page numbers",
    pagePrevText: "Page previous button text",
    pageNextText: "Page next button text",
    completeText: "Complete button text",
    previewText: "Tekst przycisku Podgląd odpowiedzi",
    editText: "Tekst przycisku Edytuj odpowiedź",
    startSurveyText: "Start button text",
    showNavigationButtons: "Show navigation buttons (default navigation)",
    showPrevButton: "Show previous button (user may return on previous page)",
    firstPageIsStarted: "The first page in the survey is a started page.",
    showCompletedPage: "Show the completed page at the end (completedHtml)",
    goNextPageAutomatic: "On answering all questions, go to the next page automatically",
    showProgressBar: "Show progress bar",
    questionTitleLocation: "Question title location",
    requiredText: "The question required symbol(s)",
    questionStartIndex: "Question start index (1, 2 or 'A', 'a')",
    showQuestionNumbers: "Show question numbers",
    questionTitleTemplate: "Question title template, default is: '{no}. {require} {title}'",
    questionErrorLocation: "Question error location",
    focusFirstQuestionAutomatic: "Focus first question on changing the page",
    questionsOrder: "Elements order on the page",
    maxTimeToFinish: "Maximum time to finish the survey",
    maxTimeToFinishPage: "Maximum time to finish a page in the survey",
    image: {
      imageHeight: "Wysokość obrazu (w wartościach akceptowanych przez CSS)",
      imageWidth: "Szerokość obrazu (w wartościach akceptowanych przez CSS)"
    },
    // survey templates
    survey: {
      title: "Tytuł"
    },
    page: {
      title: "Tytuł",
      maxTimeToFinish: "Limit czasu na zakończenie strony (w sekundach)"
    },
    question: {
      page: "Strona nadrzędna"
    },
    showTimerPanel: "Show timer panel",
    showTimerPanelMode: "Show timer panel mode",
    renderMode: "Render mode",
    allowAddPanel: "Allow adding a panel",
    allowRemovePanel: "Allow removing the panel",
    noEntriesText: "Tekst pustych wpisów",
    panelAddText: "Adding panel text",
    panelRemoveText: "Removing panel text",
    isSinglePage: "Show all elements on one page",
    html: "Znaczniki HTML",
    expression: "Wyrażenie",
    setValue: "Odpowiedź",
    dataFormat: "Format obrazu",
    allowAddRows: "Zezwalaj na dodawanie wierszy",
    allowRemoveRows: "Zezwalaj na usuwanie wierszy",
    allowRowsDragAndDrop: "Zezwalaj na przeciąganie i upuszczanie wierszy",
    responsiveImageSizeHelp: "Nie ma zastosowania, jeśli określisz dokładną szerokość lub wysokość obrazu.",
    minImageWidth: "Minimalna szerokość obrazu",
    maxImageWidth: "Maksymalna szerokość obrazu",
    minImageHeight: "Minimalna wysokość obrazu",
    maxImageHeight: "Maksymalna wysokość obrazu",
    minValue: "Wartość minimalna",
    maxValue: "Wartość maksymalna",
    minLength: "Minimalna długość (w znakach)",
    allowDigits: "Zezwalaj na cyfry",
    minCount: "Minimalna liczba",
    maxCount: "Maksymalna liczba",
    regex: "Wyrażenie regularne",
    surveyvalidator: {
      text: "Komunikat o błędzie",
      expression: "Wyrażenie sprawdzania poprawności"
    },
    totalText: "Tekst wiersza sumy",
    totalType: "Typ sumy",
    totalExpression: "Wyrażenie całkowite",
    totalDisplayStyle: "Styl wyświetlania łącznej wartości",
    totalCurrency: "Waluta",
    totalFormat: "Sformatowany ciąg znaków",
    logo: "Logo (adres URL lub ciąg znaków zakodowany w formacie base64)",
    questionsOnPageMode: "Struktura badania",
    maxTextLength: "Maksymalna długość odpowiedzi (w znakach)",
    maxOthersLength: "Maksymalna długość komentarza (w znakach)",
    autoGrowComment: "W razie potrzeby automatycznie rozwiń obszar komentarza",
    allowResizeComment: "Zezwalaj użytkownikom na zmianę rozmiaru obszarów tekstu",
    textUpdateMode: "Aktualizowanie wartości pytania tekstowego",
    focusOnFirstError: "Ustaw fokus na pierwszej nieprawidłowej odpowiedzi",
    checkErrorsMode: "Sprawdzanie poprawności uruchamiania",
    navigateToUrl: "Przejdź do adresu URL",
    navigateToUrlOnCondition: "Dynamiczny adres URL",
    completedBeforeHtml: "Znaczniki, aby pokazać, czy użytkownik już wypełnił tę ankietę",
    completedHtml: "Znaczniki strony Survey Complete",
    completedHtmlOnCondition: "Znaczniki strony Dynamic Survey Complete",
    loadingHtml: "Znaczniki do pokazania podczas ładowania modelu ankiety",
    commentText: "Tekst w obszarze komentarza",
    autocomplete: "Typ autouzupełniania",
    labelTrue: "Etykieta \"prawdziwa\"",
    labelFalse: "Etykieta \"Fałsz\"",
    allowClear: "Pokaż przycisk Wyczyść",
    displayStyle: "Styl wyświetlania wartości",
    format: "Sformatowany ciąg znaków",
    maximumFractionDigits: "Maksymalna liczba cyfr ułamkowych",
    minimumFractionDigits: "Minimalne cyfry ułamkowe",
    useGrouping: "Wyświetlanie separatorów grupujących",
    allowMultiple: "Zezwalaj na wiele plików",
    allowImagesPreview: "Podgląd obrazów",
    acceptedTypes: "Akceptowane typy plików",
    waitForUpload: "Poczekaj na zakończenie przesyłania",
    needConfirmRemoveFile: "Potwierdź usunięcie pliku",
    detailPanelMode: "Położenie panelu szczegółów",
    minRowCount: "Minimalna liczba wierszy",
    maxRowCount: "Maksymalna liczba wierszy",
    confirmDelete: "Potwierdź usunięcie wiersza",
    confirmDeleteText: "Komunikat potwierdzenia",
    paneldynamic: {
      confirmDelete: "Potwierdź usunięcie panelu"
    },
    panelCount: "Początkowa liczba paneli",
    minPanelCount: "Minimalna liczba paneli",
    maxPanelCount: "Maksymalna liczba paneli",
    panelsState: "Stan rozwinięcia panelu wewnętrznego",
    templateDescription: "Szablon opisu",
    templateTitle: "Szablon tytułu",
    panelPrevText: "Poprzednia etykietka przycisku panelu",
    panelNextText: "Przycisk Następny panel — etykietka narzędzia",
    showRangeInProgress: "Pokaż pasek postępu",
    templateTitleLocation: "Lokalizacja tytułu pytania",
    panelRemoveButtonLocation: "Usuń położenie przycisku panelu",
    hideIfRowsEmpty: "Ukryj pytanie, jeśli nie ma wierszy",
    hideColumnsIfEmpty: "Ukryj kolumny, jeśli nie ma wierszy",
    rateValues: "Niestandardowe wartości stawek",
    rateCount: "Liczba stawek",
    autoGenerate: "Jak określić wartości stawek?",
    hideIfChoicesEmpty: "Ukryj pytanie, jeśli nie zawiera opcji wyboru",
    hideNumber: "Ukryj numer pytania",
    minWidth: "Minimalna szerokość (w wartościach akceptowanych przez CSS)",
    maxWidth: "Maksymalna szerokość (w wartościach akceptowanych przez CSS)",
    width: "Szerokość (w wartościach akceptowanych przez CSS)",
    showHeader: "Pokaż nagłówki kolumn",
    horizontalScroll: "Pokaż poziomy pasek przewijania",
    columnMinWidth: "Minimalna szerokość kolumny (w wartościach akceptowanych przez CSS)",
    rowTitleWidth: "Szerokość nagłówka wiersza (w wartościach akceptowanych przez CSS)",
    valueTrue: "\"Prawdziwa\" wartość",
    valueFalse: "Wartość \"False\"",
    minErrorText: "Komunikat o błędzie \"Wartość jest niższa niż minimalna\"",
    maxErrorText: "Komunikat o błędzie \"Wartość przekracza maksimum\"",
    otherErrorText: "Komunikat o błędzie \"Pusty komentarz\"",
    keyDuplicationError: "Komunikat o błędzie \"Nieunikalna wartość klucza\"",
    minSelectedChoices: "Minimalna wybrana opcja",
    maxSelectedChoices: "Maksymalna liczba wybranych opcji",
    showClearButton: "Pokaż przycisk Wyczyść",
    showNumber: "Pokaż numer panelu",
    logoWidth: "Szerokość logo (w wartościach akceptowanych przez CSS)",
    logoHeight: "Wysokość logo (w wartościach akceptowanych przez CSS)",
    readOnly: "Tylko do odczytu",
    enableIf: "Edytowalne, jeśli",
    emptyRowsText: "Komunikat \"Brak wierszy\"",
    size: "Rozmiar pola wejściowego (w znakach)",
    separateSpecialChoices: "Oddzielne opcje specjalne (Brak, Inne, Wybierz wszystko)",
    choicesFromQuestion: "Kopiowanie opcji z następującego pytania",
    choicesFromQuestionMode: "Które opcje skopiować?",
    showCommentArea: "Pokaż obszar komentarza",
    commentPlaceholder: "Symbol zastępczy obszaru komentarza",
    displayRateDescriptionsAsExtremeItems: "Wyświetlanie opisów szybkości jako wartości ekstremalnych",
    rowsOrder: "Kolejność wierszy",
    columnsLayout: "Układ kolumn",
    columnColCount: "Liczba kolumn zagnieżdżonych",
    state: "Stan rozwinięcia panelu",
    correctAnswer: "Prawidłowa odpowiedź",
    defaultPanelValue: "Wartości domyślne",
    cells: "Teksty komórek",
    keyName: "Kolumna klucza",
    itemvalue: {
      text: "Tekst alternatywny"
    },
    logoPosition: "Pozycja logo",
    addLogo: "Dodaj logo...",
    changeLogo: "Zmień logo...",
    logoPositions: {
      none: "Usuń logo",
      left: "Lewy",
      right: "Prawy",
      top: "Na górze",
      bottom: "Na dole"
    },
    tabs: {
      general: "Ogólne",
      fileOptions: "Options",
      html: "Html Editor",
      columns: "Kolumny",
      rows: "Wiersze",
      choices: "Odpowiedzi",
      items: "Elementy",
      visibleIf: "Widoczne jeśli",
      enableIf: "Enable If",
      requiredIf: "Wymagane, jeśli",
      rateValues: "Wartość oceny",
      choicesByUrl: "Odpowiedzi z webserwisu",
      matrixChoices: "Default Choices",
      multipleTextItems: "Text Inputs",
      numbering: "Numerowanie",
      validators: "Validators",
      navigation: "Navigation",
      question: "Question",
      pages: "Stron",
      timer: "Timer/Quiz",
      calculatedValues: "Obliczone wartości",
      triggers: "Triggers",
      templateTitle: "Template title",
      totals: "Sumy",
      logic: "Logika",
      layout: "Układ",
      data: "Dane",
      validation: "Walidacja",
      cells: "Teksty komórek",
      showOnCompleted: "Ankieta zakończona",
      logo: "Logo w tytule ankiety",
      slider: "Suwak",
      expression: "Wyrażenie",
      others: "Inni"
    },
    editProperty: "Edit property '{0}'",
    items: "Items",
    choicesVisibleIf: "Wybory są widoczne, jeśli",
    choicesEnableIf: "Wybory można wybrać, jeśli:",
    columnsEnableIf: "Kolumny są widoczne, jeśli",
    rowsEnableIf: "Wiersze są widoczne, jeśli",
    indent: "Dodawanie wcięć",
    panel: {
      indent: "Dodawanie wcięć zewnętrznych"
    },
    innerIndent: "Dodawanie wcięć wewnętrznych",
    defaultValueFromLastRow: "Pobieranie wartości domyślnych z ostatniego wiersza",
    defaultValueFromLastPanel: "Pobieranie wartości domyślnych z ostatniego panelu",
    enterNewValue: "Please, enter the value.",
    noquestions: "There is no any question in the survey.",
    createtrigger: "Please create a trigger",
    titleKeyboardAdornerTip: "Naciśnij przycisk Enter, aby edytować",
    keyboardAdornerTip: "Naciśnij przycisk Enter, aby edytować element, naciśnij przycisk Delete, aby usunąć element, naciśnij Alt plus strzałka w górę lub strzałka w dół, aby przenieść element",
    triggerOn: "On ",
    triggerMakePagesVisible: "Make pages visible:",
    triggerMakeQuestionsVisible: "Make elements visible:",
    triggerCompleteText: "Complete the survey if succeed.",
    triggerNotSet: "The trigger is not set",
    triggerRunIf: "Run if",
    triggerSetToName: "Change value of: ",
    triggerFromName: "Skopiuj wartość z: ",
    triggerRunExpression: "Uruchom to wyrażenie",
    triggerSetValue: "to: ",
    triggerGotoName: "Przejdź do pytania",
    triggerIsVariable: "Do not put the variable into the survey result.",
    triggerRunExpressionEmpty: "Wpisz poprawne wyrażenie",
    emptyExpressionPlaceHolder: "Wpisz wyrażenie tutaj...",
    noFile: "Nie wybrano pliku",
    clearIfInvisible: "Wyczyść wartość, jeśli pytanie zostanie ukryte",
    valuePropertyName: "Nazwa właściwości Value",
    searchEnabled: "Włącz wyszukiwanie",
    hideSelectedItems: "Ukrywanie zaznaczonych elementów",
    closeOnSelect: "Zamknij listę rozwijaną po dokonaniu wyboru",
    signatureWidth: "Szerokość podpisu",
    signatureHeight: "Wysokość podpisu",
    verticalAlign: "Wyrównanie w pionie",
    alternateRows: "Alternatywne wiersze",
    columnsVisibleIf: "Kolumny są widoczne, jeśli",
    rowsVisibleIf: "Wiersze są widoczne, jeśli",
    otherPlaceholder: "Symbol zastępczy obszaru komentarza",
    signaturepad: {
      showPlaceholder: "Pokazywanie symbolu zastępczego",
      placeholder: "Tekst zastępczy",
      signatureWidth: "Szerokość obszaru podpisu",
      signatureHeight: "Wysokość obszaru podpisu",
      signatureAutoScaleEnabled: "Automatyczne skalowanie obszaru podpisu",
      penMinWidth: "Minimalna szerokość pisaka",
      penMaxWidth: "Maksymalna szerokość pisaka"
    },
    filePlaceholder: "Tekst zastępczy pliku",
    photoPlaceholder: "Tekst zastępczy zdjęcia",
    fileOrPhotoPlaceholder: "Tekst zastępczy pliku lub zdjęcia",
    rateType: "Rodzaj stawki"
  },
  // Property values
  pv: {
    "true": "prawdziwy",
    "false": "fałszywy",
    file: "Pliki lokalne",
    camera: "Kamera",
    "file-camera": "Pliki lokalne lub aparat",
    inherit: "Odziedziczyć",
    show: "Widoczny",
    hide: "Ukryty",
    default: "Odziedziczyć",
    initial: "Inicjał",
    random: "Losowy",
    collapsed: "Zwinięty",
    expanded: "Rozszerzony",
    none: "Żaden",
    asc: "Rosnąco",
    desc: "Malejąco",
    indeterminate: "Nieokreślony",
    decimal: "dziesiętny",
    currency: "waluta",
    percent: "procent",
    firstExpanded: "Pierwszy panel jest rozwinięty",
    off: "Ukryj numery pytań",
    onpanel: "Rozpocznij od każdego panelu",
    onPanel: "Rozpocznij od każdego panelu",
    onSurvey: "Kontynuuj przez cały czas trwania ankiety",
    list: "Lista",
    progressTop: "Nawigator paneli + pasek postępu u góry",
    progressBottom: "Nawigator panelu + pasek postępu u dołu",
    progressTopBottom: "Nawigator panelu + pasek postępu u góry i u dołu",
    tab: "Karty",
    horizontal: "Poziomy",
    vertical: "Pionowy",
    top: "Do góry",
    bottom: "Dno",
    topBottom: "Góra i dół",
    both: "Obie",
    left: "Lewy",
    right: "Prawy",
    leftRight: "Lewy i prawy",
    color: "Kolor",
    date: "data",
    datetime: "datagodzina",
    "datetime-local": "datetime-local",
    email: "E-mail",
    month: "miesiąc",
    number: "numer",
    password: "hasło",
    range: "zakres",
    tel: "Tel",
    text: "Tekst",
    time: "Godzina",
    url: "adres URL",
    week: "tydzień",
    hidden: "Ukryty",
    on: "Kontynuuj od poprzedniej strony",
    onPage: "Zacznij od każdej strony",
    edit: "Edytowalny",
    display: "Tylko do odczytu",
    onComplete: "Po zakończeniu ankiety",
    onHidden: "Gdy pytanie zostanie ukryte",
    onHiddenContainer: "Gdy pytanie lub jego panel/strona zostaną ukryte",
    clearInvisibleValues: {
      none: "Nigdy"
    },
    inputType: {
      color: "Kolor",
      date: "Data",
      "datetime-local": "Data i godzina",
      email: "E-mail",
      month: "Miesiąc",
      number: "Numer",
      password: "Hasło",
      range: "Zakres",
      tel: "Numer",
      text: "Tekst",
      time: "Godzina",
      url: "Adres URL",
      week: "Tydzień"
    },
    all: "Cały",
    page: "Strona",
    survey: "Sondaż",
    onNextPage: "Podczas przełączania do następnej strony",
    onValueChanged: "Po zmianie odpowiedzi",
    onValueChanging: "Zanim odpowiedź zostanie zmieniona",
    standard: "Oryginalna struktura",
    singlePage: "Wszystkie pytania na jednej stronie",
    questionPerPage: "Każde pytanie na osobnej stronie",
    noPreview: "Brak podglądu",
    showAllQuestions: "Pokaż wszystkie pytania",
    showAnsweredQuestions: "Pokaż tylko odpowiedzi na pytania",
    pages: "Ukończone strony",
    questions: "Odpowiedzi na pytania",
    requiredQuestions: "Odpowiedzi na wymagane pytania",
    correctQuestions: "Prawidłowe odpowiedzi",
    buttons: "Ukończone strony (interfejs użytkownika)",
    underInput: "Pod wejściem",
    underTitle: "Pod tytułem",
    onBlur: "Na rozmyciu",
    onTyping: "Podczas pisania",
    underRow: "Pod rzędem",
    underRowSingle: "Pod wierszem widoczny jest tylko jeden panel",
    showNavigationButtons: {
      none: "Ukryty"
    },
    showProgressBar: {
      off: "Ukryty"
    },
    showTimerPanel: {
      none: "Ukryty"
    },
    showTimerPanelMode: {
      all: "Obie"
    },
    detailPanelMode: {
      none: "Ukryty"
    },
    addRowLocation: {
      default: "Zależy od układu macierzy"
    },
    panelsState: {
      default: "Użytkownicy nie mogą rozwijać ani zwijać paneli",
      collapsed: "Wszystkie panele są zwinięte",
      expanded: "Wszystkie panele są rozszerzone"
    },
    widthMode: {
      auto: "Automatycznie",
      static: "Statyczny",
      responsive: "Elastyczne"
    },
    imageFit: {
      none: "Żaden",
      contain: "Zawierać",
      cover: "Pokryć",
      fill: "Wypełnić"
    },
    contentMode: {
      auto: "Automatycznie",
      image: "Obraz",
      video: "Wideo",
      youtube: "Serwis YouTube"
    },
    displayMode: {
      auto: "Automatycznie",
      buttons: "Przyciski",
      dropdown: "Lista rozwijana"
    },
    rateColorMode: {
      default: "Domyślny"
    },
    autoGenerate: {
      "true": "Stworzyć",
      "false": "Wprowadź ręcznie"
    },
    rateType: {
      labels: "Etykiety",
      stars: "Gwiazdy",
      smileys: "Uśmieszki"
    }
  },
  // Operators
  op: {
    empty: "is empty",
    notempty: "is not empty",
    equal: "equals",
    notequal: "not equals",
    contains: "contains",
    notcontains: "not contains",
    anyof: "Dowolny z",
    allof: "Wszystko z",
    greater: "greater",
    less: "less",
    greaterorequal: "greater or equals",
    lessorequal: "Less or Equals",
    and: "i",
    or: "lub"
  },
  // Embed window
  ew: {
    angular: "Use Angular version",
    jquery: "Use jQuery version",
    knockout: "Use Knockout version",
    react: "Use React version",
    vue: "Use Vue version",
    bootstrap: "For bootstrap framework",
    modern: "Nowoczesny motyw",
    default: "Motyw domyślny",
    orange: "Kompozycja pomarańczowa",
    darkblue: "Kompozycja Ciemnoniebieski",
    darkrose: "Kompozycja Darkrose",
    stone: "Kompozycja Kamień",
    winter: "Kompozycja zimowa",
    winterstone: "Kompozycja Kamień zimowy",
    showOnPage: "Show survey on a page",
    showInWindow: "Show survey in a window",
    loadFromServer: "Load Survey JSON from server",
    titleScript: "Scripts and styles",
    titleHtml: "HTML",
    titleJavaScript: "JavaScript"
  },
  // Preview (Survey)
  ts: {
    selectPage: "Wybierz stronę, aby ją przetestować:",
    showInvisibleElements: "Pokaż niewidoczne elementy",
    hideInvisibleElements: "Ukryj niewidoczne elementy"
  },
  validators: {
    answercountvalidator: "answer count",
    emailvalidator: "e-mail",
    expressionvalidator: "Wyrażenie",
    numericvalidator: "numeric",
    regexvalidator: "regex",
    textvalidator: "text"
  },
  triggers: {
    completetrigger: "complete survey",
    setvaluetrigger: "set value",
    copyvaluetrigger: "Kopiuj odpowiedź",
    skiptrigger: "Przejdź do pytania",
    runexpressiontrigger: "Uruchom wyrażenie",
    visibletrigger: "change visibility"
  },
  pehelp: {
    cookieName: "Pliki cookie uniemożliwiają użytkownikom dwukrotne wypełnienie tej samej ankiety.",
    size: "Zmienia rozmiar widocznego obszaru pola wprowadzania. Użyj ustawienia <b>Walidacja → Maksymalna</b> długość, aby ograniczyć długość wprowadzania.",
    format: "Użyj {0} jako symbolu zastępczego dla rzeczywistej wartości.",
    totalText: "Opcja widoczna tylko wtedy, gdy co najmniej jedna kolumna zawiera wyrażenie typu Total lub Total.",
    acceptedTypes: "Więcej informacji można znaleźć w opisie atrybutu [accept](https://www.w3schools.com/tags/att_input_accept.asp).",
    columnColCount: "Dotyczy tylko komórek typu Radiogroup i Checkbox.",
    autocomplete: "Więcej informacji można znaleźć w opisie atrybutu [autocomplete](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete).",
    valueName: "Jeśli ta właściwość nie zostanie ustawiona, odpowiedź będzie przechowywana w polu określonym przez właściwość Name.",
    choicesbyurl: {
      valueName: " "
    },
    keyName: "Jeśli określona kolumna zawiera identyczne wartości, ankieta zgłasza błąd \"Nieunikalna wartość klucza\".",
    filePlaceholder: "Ma zastosowanie, gdy \"Typ źródła\" to \"Pliki lokalne\" lub gdy kamera jest niedostępna",
    photoPlaceholder: "Ma zastosowanie, gdy \"Typ źródła\" to \"Kamera\".",
    fileOrPhotoPlaceholder: "Ma zastosowanie, gdy \"Typ źródła\" to \"Pliki lokalne lub kamera\"."
  },
  // Properties
  p: {
    title: {
      name: "tytuł",
      title: "Pozostaw pusty, jeśli ma być taki sam, jak 'Nazwa'"
    },
    multiSelect: "Zezwalaj na wielokrotny wybór",
    showLabel: "Pokaż podpisy pod obrazami",
    value: "Wartość",
    tabAlign: "Wyrównanie tabulatorów",
    sourceType: "Typ źródła",
    fitToContainer: "Pasuje do pojemnika",
    setValueExpression: "Wyrażenie wartości zadanej",
    description: "Opis",
    logoFit: "Dopasowanie logo",
    pages: "Stron",
    questions: "Pytania",
    triggers: "Wyzwalaczy",
    calculatedValues: "Obliczone wartości",
    surveyId: "Identyfikator ankiety",
    surveyPostId: "Identyfikator posta ankiety",
    surveyShowDataSaving: "Ankieta pokazuje zapisywanie danych",
    questionDescriptionLocation: "Lokalizacja opisu pytania",
    progressBarType: "Typ paska postępu",
    showTOC: "Pokaż spis treści",
    tocLocation: "Lokalizacja spisu treści",
    questionTitlePattern: "Wzorzec tytułu pytania",
    widthMode: "Tryb szerokości",
    showBrandInfo: "Pokaż informacje o marce",
    useDisplayValuesInDynamicTexts: "Używanie wartości wyświetlanych w tekstach dynamicznych",
    visibleIf: "Widoczne, jeśli",
    titleLocation: "Lokalizacja tytułu",
    descriptionLocation: "Opis lokalizacji",
    defaultValueExpression: "Wyrażenie wartości domyślnej",
    requiredIf: "Wymagane, jeśli:",
    resetValueIf: "Zresetuj wartość, jeśli",
    setValueIf: "Ustaw wartość, jeśli",
    validators: "Walidatory",
    bindings: "Powiązania",
    renderAs: "Renderuj jako",
    attachOriginalItems: "Dołączanie oryginalnych elementów",
    choices: "Wyborów",
    choicesByUrl: "Opcje według adresu URL",
    currency: "Waluta",
    cellHint: "Wskazówka do komórki",
    isUnique: "Jest wyjątkowy",
    showInMultipleColumns: "Pokaż w wielu kolumnach",
    totalMaximumFractionDigits: "Łączne maksymalne cyfry ułamkowe",
    totalMinimumFractionDigits: "Łączne minimalne cyfry ułamkowe",
    columns: "Kolumny",
    detailElements: "Elementy szczegółowe",
    allowAdaptiveActions: "Zezwalaj na działania adaptacyjne",
    defaultRowValue: "Domyślna wartość wiersza",
    detailPanelShowOnAdding: "Panel szczegółów pokazuje się po dodaniu",
    choicesLazyLoadEnabled: "Opcje: leniwe ładowanie włączone",
    choicesLazyLoadPageSize: "Opcje: leniwy rozmiar strony ładowania",
    inputFieldComponent: "Składnik pola wejściowego",
    itemComponent: "Składnik elementu",
    min: "Min",
    max: "Max",
    minValueExpression: "Minimalne wyrażenie wartości",
    maxValueExpression: "Wyrażenie wartości maksymalnej",
    step: "Krok",
    dataList: "Lista danych",
    itemSize: "Rozmiar produktu",
    elements: "Pierwiastki",
    content: "Zawartość",
    navigationButtonsVisibility: "Widoczność przycisków nawigacyjnych",
    navigationTitle: "Tytuł nawigacji",
    navigationDescription: "Opis nawigacji",
    longTap: "Długie dotknięcie",
    autoGrow: "Automatyczny wzrost",
    allowResize: "Zezwalaj na zmianę rozmiaru",
    acceptCarriageReturn: "Zaakceptuj zwrot karetki",
    displayMode: "Tryb wyświetlania",
    rateType: "Rodzaj stawki",
    label: "Etykieta",
    contentMode: "Tryb zawartości",
    imageFit: "Dopasowanie obrazu",
    altText: "Tekst alternatywny",
    height: "Wysokość",
    penColor: "Kolor pióra",
    backgroundColor: "Kolor tła",
    templateElements: "Elementy szablonu",
    operator: "Operator",
    isVariable: "Jest zmienna",
    runExpression: "Uruchom wyrażenie",
    showCaption: "Pokaż podpis",
    iconName: "Nazwa ikony",
    iconSize: "Rozmiar ikony",
    precision: "Precyzja",
    matrixDragHandleArea: "Obszar uchwytu przeciągania macierzy",
    backgroundImage: "Obraz tła",
    backgroundImageFit: "Dopasowanie obrazu tła",
    backgroundImageAttachment: "Załącznik obrazu tła",
    backgroundOpacity: "Krycie tła",
    selectToRankEnabled: "Wybierz, aby ranga była włączona",
    selectToRankAreasLayout: "Wybierz, aby uszeregować układ obszarów",
    allowCameraAccess: "Zezwalaj na dostęp do kamery",
    scaleColorMode: "Tryb skalowania kolorów",
    rateColorMode: "Oceń tryb kolorów",
    templateTabTitle: "Tytuł karty szablonu",
    templateVisibleIf: "Szablon widoczny, jeśli",
    copyDisplayValue: "Kopiowanie wyświetlanej wartości"
  },
  theme: {
    "--background": "Kolor tła",
    "--background-dim-light": "Słaby kolor światła tła",
    "--primary-foreground": "Podstawowy kolor pierwszego planu",
    "--foreground": "Kolor pierwszego planu",
    "--base-unit": "Jednostka bazowa",
    groupGeneral: "Ogólne",
    groupAdvanced: "Zaawansowany",
    groupHeader: "Nagłówek",
    groupBackground: "Tło",
    groupAppearance: "Wygląd",
    themeName: "Kompozycja",
    themeMode: "Wygląd pytania",
    themeModePanels: "Domyślny",
    themeModeLightweight: "Bez paneli",
    themePaletteLight: "Światło",
    themePaletteDark: "Ciemny",
    primaryColor: "Kolor wiodący",
    primaryDefaultColor: "Domyślny",
    primaryDarkColor: "Hover",
    primaryLightColor: "Wybrany",
    coverTitleForecolor: "Kolor przedniego tytułu",
    coverDescriptionForecolor: "Opis przedbarwy",
    coverOverlapEnabled: "Zachodzić na siebie",
    backgroundDimColor: "Kolor tła",
    backgroundImage: "Obraz tła",
    backgroundImageFitAuto: "Automatycznie",
    backgroundImageFitCover: "Pokryć",
    backgroundImageFitContain: "Zawierać",
    backgroundImageFitFill: "Rozciągnąć",
    backgroundImageFitTile: "Kafelek",
    backgroundOpacity: "Nieprzezroczystość",
    backgroundImageAttachmentFixed: "Stały",
    backgroundImageAttachmentScroll: "Przewijać",
    panelBackgroundTransparency: "Krycie tła panelu",
    questionBackgroundTransparency: "Nieprzezroczystość tła pytania",
    questionPanel: "Tło panelu i promień narożnika",
    questionTitle: "Czcionka tytułu pytania",
    questionDescription: "Czcionka opisu pytania",
    editorPanel: "Element wejściowy",
    editorFont: "Czcionka elementu wejściowego",
    backcolor: "Domyślne tło",
    hovercolor: "Najedź kursorem na tło",
    borderDecoration: "Dekoracja obramowania",
    accentBackground: "Tło akcentu",
    accentForeground: "Akcent na pierwszym planie",
    primaryForecolor: "Kolor domyślny",
    primaryForecolorLight: "Kolor wyłączony",
    linesColors: "Pomocnicze kolory linii",
    borderDefault: "Ciemniejsze",
    borderLight: "Zapalniczka",
    fontFamily: "Rodzina czcionek",
    fontSize: "Rozmiar czcionki",
    color: "Kolor",
    placeholderColor: "Kolor zastępczy",
    size: "Rozmiar",
    fontWeightRegular: "Regularny",
    fontWeightHeavy: "Ciężki",
    fontWeightSemiBold: "Półpogrubienie",
    fontWeightBold: "Śmiały",
    scale: "Skala",
    cornerRadius: "Promień narożnika",
    surveyTitle: "Czcionka tytułu ankiety",
    surveyDescription: "Czcionka opisu ankiety",
    pageTitle: "Czcionka tytułu strony",
    pageDescription: "Czcionka opisu strony",
    boxShadowX: "X",
    boxShadowY: "Y",
    boxShadowAddRule: "Dodaj efekt cienia",
    opacity: "Nieprzezroczystość",
    boxShadowBlur: "Zacierać",
    boxShadowSpread: "Rozprzestrzenianie się",
    boxShadowDrop: "Kropla",
    boxShadowInner: "Wewnętrzny",
    questionShadow: "Efekty cienia",
    editorShadow: "Efekty cienia elementu wejściowego",
    headerView: "Widok",
    headerViewBasic: "Podstawowy",
    headerViewAdvanced: "Zaawansowany",
    coverInheritWidthFrom: "Szerokość obszaru zawartości",
    coverInheritWidthFromSurvey: "Tak samo jak ankieta",
    coverInheritWidthFromContainer: "Pasuje do pojemnika",
    coverTextAreaWidth: "Szerokość tekstu",
    coverBackgroundColorSwitch: "Kolor tła",
    coverBackgroundColorNone: "Żaden",
    coverBackgroundColorAccentColor: "Kolor wiodący",
    coverBackgroundColorCustom: "Zwyczaj",
    horizontalAlignmentLeft: "Lewy",
    horizontalAlignmentCenter: "Centrum",
    horizontalAlignmentRight: "Prawy",
    verticalAlignmentTop: "Do góry",
    verticalAlignmentMiddle: "Środek",
    verticalAlignmentBottom: "Dno",
    logoPosition: "Pozycja logo",
    coverTitlePosition: "Pozycja tytułu",
    coverDescriptionPosition: "Opis pozycja",
    names: {
      default: "Domyślny",
      sharp: "Ostry",
      borderless: "Bez obramowania",
      flat: "Płaski",
      plain: "Równina",
      doubleborder: "Podwójna ramka",
      layered: "Warstwowe",
      solid: "Bryła",
      threedimensional: ".3D",
      contrast: "Kontrast"
    },
    colors: {
      teal: "Teal",
      blue: "Niebieski",
      purple: "Purpura",
      orchid: "Orchidea",
      tulip: "Tulipan",
      brown: "Brązowy",
      green: "Zielony"
    }
  }
};

editorLocalization.locales["pl"] = polishStrings;

// The following strings have been translated by a machine translation service
// Remove those strings that you have corrected manually
// survey.externalHelpLink: "Watch and learn how to create surveys" => "Obejrzyj i dowiedz się, jak tworzyć ankiety"
// survey.externalHelpLinkUrl: "https://www.youtube.com/channel/UCH2ru9okIcooNZfpIbyq4qQ?view_as=subscriber" => "https://www.youtube.com/channel/UCH2ru9okIcooNZfpIbyq4qQ?view_as=subscriber"
// survey.addLogicItem: "Create a rule to customize the flow of the survey." => "Utwórz regułę, aby dostosować przepływ ankiety."
// survey.duplicate: "Duplicate" => "Duplikat"
// survey.drag: "Drag element" => "Przeciągnij element"
// qt.default: "Default" => "Domyślny"
// qt.imagepicker: "Image Picker" => "Selektor obrazów"
// qt.ranking: "Ranking" => "Ranking"
// qt.image: "Image" => "Obraz"
// qt.tagbox: "Multi-Select Dropdown" => "Lista rozwijana Multi-Select"
// qt.signaturepad: "Signature" => "Podpis"
// qt.buttongroup: "Button Group" => "Grupa przycisków"
// ed.defaultLocale: "Default ({0})" => "Domyślne ({0})"
// ed.settings: "Settings" => "Ustawienia"
// ed.settingsTooltip: "Open settings" => "Otwórz ustawienia"
// ed.surveySettings: "Survey Settings" => "Ustawienia ankiety"
// ed.surveySettingsTooltip: "Open survey settings" => "Otwórz ustawienia ankiety"
// ed.showPanel: "Show Panel" => "Pokaż panel"
// ed.hidePanel: "Hide Panel" => "Panel Ukryj"
// ed.prevSelected: "Select previous" => "Wybierz poprzedni"
// ed.nextSelected: "Select next" => "Wybierz następny"
// ed.surveyTypeName: "Survey" => "Sondaż"
// ed.pageTypeName: "Page" => "Strona"
// ed.panelTypeName: "Panel" => "Panel"
// ed.questionTypeName: "Question" => "Pytanie"
// ed.columnTypeName: "Column" => "Kolumna"
// ed.moveRight: "Scroll to the Right" => "Przewiń w prawo"
// ed.moveLeft: "Scroll to the Left" => "Przewiń w lewo"
// ed.edit: "Edit" => "Redagować"
// ed.newTextItemName: "text" => "Tekst"
// ed.themeSurvey: "Themes" => "Tematy"
// ed.defaultV2Theme: "Default" => "Domyślny"
// ed.modernTheme: "Modern" => "Nowoczesny"
// ed.defaultTheme: "Default (legacy)" => "Domyślne (starsze)"
// ed.navigateToMsg: "You had to navigate to" => "Trzeba było nawigować do"
// ed.logic: "Logic" => "Logika"
// ed.translation: "Translation" => "Tłumaczenie"
// ed.saveSurveyTooltip: "Save Survey" => "Zapisz ankietę"
// ed.jsonHideErrors: "Hide errors" => "Ukryj błędy"
// ed.jsonShowErrors: "Show errors" => "Pokaż błędy"
// ed.undoTooltip: "Undo last change" => "Cofanie ostatniej zmiany"
// ed.redoTooltip: "Redo the change" => "Ponowne wprowadzanie zmian"
// ed.showMoreChoices: "Show more" => "Pokaż więcej"
// ed.showLessChoices: "Show less" => "Pokaż mniej"
// ed.copy: "Copy" => "Kopiować"
// ed.cut: "Cut" => "Ciąć"
// ed.paste: "Paste" => "Wklejać"
// ed.copyTooltip: "Copy selection to clipboard" => "Kopiuj zaznaczenie do schowka"
// ed.cutTooltip: "Cut selection to clipboard" => "Wytnij zaznaczenie do schowka"
// ed.pasteTooltip: "Paste from clipboard" => "Wklejanie ze schowka"
// ed.property-grid: "Properties" => "Właściwości"
// ed.propertyGridFilteredTextPlaceholder: "Type to search..." => "Wpisz, aby wyszukać..."
// ed.toolboxGeneralCategory: "General" => "Ogólne"
// ed.toolboxChoiceCategory: "Choice Questions" => "Pytania wyboru"
// ed.toolboxTextCategory: "Text Input Questions" => "Pytania dotyczące wprowadzania tekstu"
// ed.toolboxContainersCategory: "Containers" => "Pojemniki"
// ed.toolboxMatrixCategory: "Matrix Questions" => "Pytania macierzowe"
// ed.toolboxMiscCategory: "Misc" => "Różne"
// ed.surveyResultsTable: "As Table" => "Jako tabela"
// ed.surveyResultsJson: "As JSON" => "Jako JSON"
// ed.resultsTitle: "Question Title" => "Tytuł pytania"
// ed.resultsName: "Question Name" => "Nazwa pytania"
// ed.resultsValue: "Answer Value" => "Wartość odpowiedzi"
// ed.resultsDisplayValue: "Display Value" => "Wyświetl wartość"
// ed.propertyEditorError: "Error" => "Błąd"
// ed.saveError: "Error! Editor content is not saved." => "Błąd! Zawartość edytora nie jest zapisywana."
// ed.translationPropertyGridTitle: "Language Settings" => "Ustawienia językowe"
// ed.themePropertyGridTitle: "Theme Settings" => "Ustawienia motywu"
// ed.translationLanguages: "Languages" => "Języki"
// ed.translationAddLanguage: "Select language to translate" => "Wybierz język do przetłumaczenia"
// ed.translationShowAllStrings: "All Strings" => "Wszystkie struny"
// ed.translationShowUsedStringsOnly: "Used Strings Only" => "Tylko używane ciągi"
// ed.translationShowAllPages: "All Pages" => "Wszystkie strony"
// ed.translationNoStrings: "No strings to translate. Please, change the filter." => "Brak ciągów do przetłumaczenia. Proszę zmienić filtr."
// ed.translationExportToSCVButton: "Export to CSV" => "Eksport do pliku CSV"
// ed.translationImportFromSCVButton: "Import from CSV" => "Importowanie z pliku CSV"
// ed.translationMergeLocaleWithDefault: "Merge {0} with default locale" => "Scalanie {0} z domyślnymi ustawieniami regionalnymi"
// ed.translationPlaceHolder: "Translation..." => "Tłumaczenie..."
// ed.themeExportButton: "Export" => "Eksport"
// ed.themeImportButton: "Import" => "Import"
// ed.bold: "Bold" => "Śmiały"
// ed.italic: "Italic" => "Kursywa"
// ed.underline: "Underline" => "Podkreślać"
// ed.addNewQuestion: "Add Question" => "Dodaj pytanie"
// ed.selectPage: "Select page..." => "Wybierz stronę..."
// ed.carryForwardChoicesCopied: "Choices are copied from" => "Wybory są kopiowane z"
// ed.htmlPlaceHolder: "HTML content will be here." => "Zawartość HTML będzie tutaj."
// ed.panelPlaceHolder: "Drop a question from the toolbox here." => "Upuść pytanie z przybornika tutaj."
// ed.surveyPlaceHolder: "The survey is empty. Drag an element from the toolbox or click the button below." => "Ankieta jest pusta. Przeciągnij element z przybornika lub kliknij przycisk poniżej."
// ed.imagePlaceHolder: "Drag and drop an image here or click the button below and choose an image to upload" => "Przeciągnij i upuść obraz tutaj lub kliknij przycisk poniżej i wybierz obraz do przesłania"
// ed.imageChooseImage: "Choose Image" => "Wybierz obraz"
// ed.addNewTypeQuestion: "Add {0}" => "Dodaj {0}"
// ed.chooseLogoPlaceholder: "[LOGO]" => "[LOGO]"
// ed.auto: "auto" => "Automatycznie"
// ed.choices_Item: "Item " => "Przedmiot "
// lg.addNewItem: "Add New Rule" => "Dodaj nową regułę"
// lg.empty_tab: "Create a rule to customize the flow of the survey." => "Utwórz regułę, aby dostosować przepływ ankiety."
// lg.page_visibilityName: "Show (hide) page" => "Pokaż (ukryj) stronę"
// lg.page_enableName: "Enable (disable) page" => "Włącz (wyłącz) stronę"
// lg.panel_visibilityName: "Show (hide) panel" => "Pokaż (ukryj) panel"
// lg.panel_enableName: "Enable (disable) panel" => "Włącz (wyłącz) panel"
// lg.question_visibilityName: "Show (hide) question" => "Pokaż (ukryj) pytanie"
// lg.question_enableName: "Enable (disable) question" => "Włącz (wyłącz) pytanie"
// lg.question_requireName: "Make question required" => "Zadbaj o pytanie wymagane"
// lg.column_visibilityName: "Show (hide) column" => "Pokaż (ukryj) kolumnę"
// lg.column_enableName: "Enable (disable) column" => "Włącz (wyłącz) kolumnę"
// lg.column_requireName: "Make column required" => "Ustaw kolumnę jako wymaganą"
// lg.trigger_completeName: "Complete survey" => "Wypełnij ankietę"
// lg.trigger_setvalueName: "Set answer" => "Ustaw odpowiedź"
// lg.trigger_copyvalueName: "Copy answer" => "Kopiuj odpowiedź"
// lg.trigger_skipName: "Skip to question" => "Przejdź do pytania"
// lg.trigger_runExpressionName: "Run expression" => "Uruchom wyrażenie"
// lg.completedHtmlOnConditionName: "Set \"Survey Complete\" page markup" => "Ustaw znaczniki strony \"Ankieta ukończona\""
// lg.page_visibilityDescription: "Make the page visible when the logic expression returns true. Otherwise keep it invisible." => "Spraw, aby strona była widoczna, gdy wyrażenie logiczne zwróci wartość true. W przeciwnym razie zachowaj go niewidocznym."
// lg.panel_visibilityDescription: "Make the panel visible when the logic expression returns true. Otherwise keep it invisible." => "Uczyń panel widocznym, gdy wyrażenie logiczne zwróci wartość true. W przeciwnym razie zachowaj go niewidocznym."
// lg.panel_enableDescription: "Make the panel, and all elements inside it, enable when the logic expression returns true. Otherwise keep them disabled." => "Włącz panel i wszystkie znajdujące się w nim elementy, gdy wyrażenie logiczne zwróci wartość true. W przeciwnym razie pozostaw je wyłączone."
// lg.question_visibilityDescription: "Make the question visible when the logic expression returns true. Otherwise keep it invisible." => "Uczyń pytanie widocznym, gdy wyrażenie logiczne zwróci wartość true. W przeciwnym razie zachowaj go niewidocznym."
// lg.question_enableDescription: "Make the question enable when the logic expression returns true. Otherwise keep it disabled." => "Włącz pytanie, gdy wyrażenie logiczne zwróci wartość true. W przeciwnym razie pozostaw go wyłączonym."
// lg.question_requireDescription: "Question becomes required when the logic expression returns true." => "Pytanie staje się wymagane, gdy wyrażenie logiczne zwraca wartość true."
// lg.trigger_completeDescription: "When the logic expression returns true then the survey becomes completed and an end-user see the 'Thank you page'." => "Gdy wyrażenie logiczne zwraca wartość true, ankieta zostaje wypełniona, a użytkownik końcowy zobaczy stronę \"Dziękuję\"."
// lg.trigger_setvalueDescription: "When question values, that are used in the logic expression, are changed and the logic expression returns true, then the value is set to the selected question." => "Gdy wartości pytań, które są używane w wyrażeniu logicznym, zostaną zmienione, a wyrażenie logiczne zwróci wartość true, wartość zostanie ustawiona na wybrane pytanie."
// lg.trigger_copyvalueDescription: "When question values, that are used in the logic expression, are changed and the logic expression returns true, then the value of one selected question is copied to another selected question." => "Gdy wartości pytania, które są używane w wyrażeniu logicznym, zostaną zmienione, a wyrażenie logiczne zwróci wartość true, wartość jednego wybranego pytania zostanie skopiowana do innego wybranego pytania."
// lg.trigger_skipDescription: "When the logic expression returns true then the survey skip to / focus the selected question." => "Gdy wyrażenie logiczne zwraca wartość true, ankieta przechodzi do / fokus wybranego pytania."
// lg.trigger_runExpressionDescription: "When the logic expression returns true, then the custom expression is performed. You may optionally set this expression result into the selected question" => "Gdy wyrażenie logiczne zwraca wartość true, wykonywane jest wyrażenie niestandardowe. Opcjonalnie można ustawić wynik tego wyrażenia w wybranym pytaniu"
// lg.completedHtmlOnConditionDescription: "If the logic expression returns true, then the default text for the 'Thank you page' is changed to the given one." => "Jeśli wyrażenie logiczne zwróci wartość true, domyślny tekst strony \"Dziękuję\" zostanie zmieniony na podany."
// lg.itemExpressionText: "When expression: '{0}' returns true" => "Gdy wyrażenie \"{0}\" zwraca wartość true"
// lg.itemEmptyExpressionText: "New rule" => "Nowa reguła"
// lg.page_visibilityText: "make page {0} visible" => "Ustawianie {0} strony"
// lg.panel_visibilityText: "make panel {0} visible" => "Uwidocznienie {0} panelu"
// lg.panel_enableText: "make panel {0} enable" => "Włączanie {0} panelu"
// lg.question_visibilityText: "make question {0} visible" => "Uczyń {0} pytań widocznymi"
// lg.question_enableText: "make question {0} enable" => "Utwórz pytanie {0} włącz"
// lg.question_requireText: "make question {0} required" => "Pytanie {0} wymagane"
// lg.column_visibilityText: "make column {0} of question {1} visible" => "Uwidocznienie {0}  {1}pytania"
// lg.column_enableText: "make column {0} of question {1} enable" => "Ustaw kolumnę {0} pytania{1} włączyć"
// lg.column_requireText: "make column {0} of question {1} required" => "Ustaw kolumnę {0} pytania {1} wymagane"
// lg.trigger_completeText: "survey becomes completed" => "Ankieta zostaje zakończona"
// lg.trigger_setvalueText: "set into question: {0} value {1}" => "Ustaw pod znakiem zapytania: {0} wartość {1}"
// lg.trigger_setvalueEmptyText: "clear question value: {0}" => "Wyczyść wartość pytania: {0}"
// lg.trigger_copyvalueText: "copy into question: {0} value from question {1}" => "Kopiuj do pytania: {0} wartość z pytania {1}"
// lg.trigger_skipText: "survey skip to the question {0}" => "Przejdź do pytania {0}"
// lg.trigger_runExpressionText1: "run expression: '{0}'" => "Uruchom wyrażenie: '{0}'"
// lg.trigger_runExpressionText2: " and set its result into question: {0}" => " i zakwestionować jego wynik: {0}"
// lg.completedHtmlOnConditionText: "show custom text for the 'Thank you page'." => "pokaż niestandardowy tekst dla strony \"Dziękuję\"."
// lg.showAllQuestions: "All Questions" => "Wszystkie pytania"
// lg.showAllActionTypes: "All Action Types" => "Wszystkie rodzaje akcji"
// lg.conditions: "Condition(s)" => "Warunek (warunki)"
// lg.actions: "Action(s)" => "Działania(e)"
// lg.expressionEditorTitle: "Define condition(s)" => "Zdefiniuj warunki"
// lg.actionsEditorTitle: "Define action(s)" => "Definiowanie akcji"
// lg.deleteAction: "Delete Action" => "Akcja usuwania"
// lg.addNewAction: "Add Action" => "Dodaj akcję"
// lg.selectedActionCaption: "Select action..." => "Wybierz akcję..."
// lg.expressionInvalid: "The logic expression is empty or invalid. Please correct it." => "Wyrażenie logiczne jest puste lub nieprawidłowe. Proszę to poprawić."
// lg.noActionError: "Please, add at least one action." => "Dodaj co najmniej jedną akcję."
// lg.actionInvalid: "Please, fix problems in your action(s)." => "Proszę, napraw problemy w swoich działaniach."
// lg.uncompletedRule_title: "Logical rules are incomplete" => "Reguły logiczne są niekompletne"
// lg.uncompletedRule_text: "You have not completed some of the logical rules. If you leave the tab now, the changes will be lost. Do you still want to leave the tab without completing the changes?" => "Nie ukończyłeś niektórych reguł logicznych. Jeśli opuścisz kartę teraz, zmiany zostaną utracone. Czy nadal chcesz opuścić kartę bez dokończenia zmian?"
// lg.uncompletedRule_apply: "Yes" => "Tak"
// lg.uncompletedRule_cancel: "No, I want to complete the rules" => "Nie, chcę wypełnić zasady"
// pe.save: "Save" => "Zapisać"
// pe.clear: "Clear" => "Jasny"
// pe.saveTooltip: "Save" => "Zapisać"
// pe.set: "Set" => "Zbiór"
// pe.change: "Change" => "Zmieniać"
// pe.refresh: "Refresh" => "Odświeżyć"
// pe.add: "Add" => "Dodawać"
// pe.addItem: "Click to add an item..." => "Kliknij, aby dodać element..."
// pe.removeItem: "Click to remove the item..." => "Kliknij, aby usunąć element..."
// pe.dragItem: "Drag the item" => "Przeciągnij element"
// pe.addOther: "Other" => "Inny"
// pe.addSelectAll: "Select All" => "Zaznacz wszystko"
// pe.addNone: "None" => "Żaden"
// pe.back: "Return without saving" => "Zwrot bez zapisywania"
// pe.backTooltip: "Return without saving" => "Zwrot bez zapisywania"
// pe.saveAndBack: "Save and return" => "Zapisz i zwróć"
// pe.saveAndBackTooltip: "Save and return" => "Zapisz i zwróć"
// pe.doneEditing: "Done" => "Gotowy"
// pe.editChoices: "Edit Choices" => "Edytuj opcje"
// pe.showChoices: "Show Choices" => "Pokaż wybór"
// pe.move: "Move" => "Ruszać"
// pe.emptyValue: "Value is empty" => "Wartość jest pusta"
// pe.fastEntryNonUniqueError: "Value '{0}' is not unique" => "Wartość \"{0}\" nie jest unikalna"
// pe.fastEntryChoicesCountError: "Please limit the number of items from {0} to {1}" => "Ogranicz liczbę przedmiotów od {0} do {1}"
// pe.fastEntryPlaceholder: "You can set data in the following format:\nvalue1|text\nvalue2" => "Dane można ustawić w następującym formacie:\nwartość1|tekst\nwartość2"
// pe.itemSelectorEmpty: "Please select the element" => "Proszę wybrać element"
// pe.conditionActionEmpty: "Please select the action" => "Wybierz akcję"
// pe.conditionSelectQuestion: "Select question..." => "Wybierz pytanie..."
// pe.conditionSelectPage: "Select page..." => "Wybierz stronę..."
// pe.conditionSelectPanel: "Select panel..." => "Wybierz panel..."
// pe.conditionValueQuestionTitle: "Please enter/select the value" => "Wpisz/wybierz wartość"
// pe.expressionHelp: "Use curly brackets to access answers: `{question1} + {question2}`. Expressions also support functions: `iif()`, `today()`, `age()`, `min()`, `max()`, `count()`, `avg()`, and others" => "Użyj nawiasów klamrowych, aby uzyskać dostęp do odpowiedzi: '{question1} + {question2}'. Wyrażenia obsługują również funkcje: 'iif()', 'today()', 'age()', 'min()', 'max()', 'count()', 'avg()' i inne"
// pe.cellsEmptyRowsColumns: "There is should be at least one column or row" => "Powinna istnieć co najmniej jedna kolumna lub wiersz"
// pe.showPreviewBeforeComplete: "Preview answers before submitting the survey" => "Podgląd odpowiedzi przed wysłaniem ankiety"
// pe.overridingPropertyPrefix: "Set by " => "Ustaw przez "
// pe.propertyIsNoUnique: "Please enter a unique value" => "Podaj unikatową wartość"
// pe.propertyNameIsNotUnique: "Please enter a unique name" => "Podaj unikalną nazwę"
// pe.propertyNameIsIncorrect: "Do not use reserved words: \"item\", \"choice\", \"panel\", \"row\"." => "Nie używaj zastrzeżonych słów: \"element\", \"wybór\", \"panel\", \"wiersz\"."
// pe.listIsEmpty: "No items have been added yet" => "Nie dodano jeszcze żadnych przedmiotów"
// pe.listIsEmpty@choices: "No choices have been added yet" => "Nie dodano jeszcze żadnych opcji"
// pe.addNew@choices: "Add a choice" => "Dodaj wybór"
// pe.expressionIsEmpty: "Expression is empty" => "Wyrażenie jest puste"
// pe.rowid: "Row ID" => "Identyfikator wiersza"
// pe.imageLink: "Image or video URL" => "Adres URL obrazu lub filmu"
// choicesbyurl.valueName: "Get values from the following JSON field" => "Pobierz wartości z następującego pola JSON:"
// pe.imageLinkName: "Get image URLs from the following JSON field" => "Pobierz adresy URL obrazów z następującego pola JSON:"
// pe.allowEmptyResponse: "Allow empty response" => "Zezwalaj na pustą odpowiedź"
// pe.titlePlaceholder: "Title" => "Tytuł"
// pe.surveyTitlePlaceholder: "Survey Title" => "Tytuł ankiety"
// pe.pageTitlePlaceholder: "Page {num}" => "Strona {num}"
// pe.descriptionPlaceholder: "Description" => "Opis"
// pe.surveyDescriptionPlaceholder: "Description" => "Opis"
// pe.pageDescriptionPlaceholder: "Description" => "Opis"
// pe.showNoneItem: "Allow the None option" => "Zezwalaj na opcję Brak"
// pe.noneText: "None option text" => "Tekst opcji Brak"
// pe.showSelectAllItem: "Allow the Select All option" => "Zezwalaj na opcję Zaznacz wszystko"
// pe.selectAllText: "Select All option text" => "Zaznacz tekst opcji Wszystkie"
// pe.choicesMin: "Minimum value for auto-generated items" => "Minimalna wartość dla automatycznie wygenerowanych elementów"
// pe.choicesMax: "Maximum value for auto-generated items" => "Maksymalna wartość dla automatycznie wygenerowanych elementów"
// pe.choicesStep: "Step for auto-generated items" => "Krok dla automatycznie wygenerowanych elementów"
// pe.isAllRowRequired: "Require answer for all rows" => "Wymagaj odpowiedzi dla wszystkich wierszy"
// pe.requiredErrorText: "\"Required\" error message" => "Komunikat o błędzie \"Wymagane\""
// pe.cols: "Columns" => "Kolumny"
// pe.columnLayout: "Columns layout" => "Układ kolumn"
// pe.addRowLocation: "Add Row button location" => "Lokalizacja przycisku Dodaj wiersz"
// pe.rateMin: "Minimum rate value" => "Minimalna wartość stawki"
// pe.rateMax: "Maximum rate value" => "Maksymalna wartość stawki"
// pe.rateStep: "Rate step" => "Krok stawki"
// pe.cellsDefaultRow: "Default texts" => "Teksty domyślne"
// pe.maxLength: "Maximum length (in characters)" => "Maksymalna długość (w znakach)"
// pe.buildExpression: "Build" => "Budować"
// pe.editExpression: "Edit" => "Redagować"
// pe.and: "and" => "i"
// pe.or: "or" => "lub"
// pe.remove: "Remove" => "Usunąć"
// pe.addCondition: "Add Condition" => "Dodaj warunek"
// pe.emptyLogicPopupMessage: "Select a question to start configuring conditions." => "Wybierz pytanie, aby rozpocząć konfigurowanie warunków."
// pe.if: "If" => "Jeśli"
// pe.then: "then" => "wtedy"
// pe.setToName: "Target question" => "Pytanie docelowe"
// pe.fromName: "Question to copy answer from" => "Pytanie, z którego należy skopiować odpowiedź"
// pe.gotoName: "Question to skip to" => "Pytanie, do którego należy przejść"
// pe.ruleIsNotSet: "Rule is incorrect" => "Reguła jest nieprawidłowa"
// pe.includeIntoResult: "Include into survey results" => "Uwzględnij w wynikach ankiety"
// pe.expandCollapseTitle: "Expand/collapse title" => "Rozwiń/zwiń tytuł"
// pe.simulator: "Select device type" => "Wybierz typ urządzenia"
// pe.landscapeOrientation: "Switch to landscape orientation" => "Przełączanie na orientację poziomą"
// pe.portraitOrientation: "Switch to portrait orientation" => "Przełączanie na orientację pionową"
// pe.previewText: "Preview Answers button text" => "Tekst przycisku Podgląd odpowiedzi"
// pe.editText: "Edit Answer button text" => "Tekst przycisku Edytuj odpowiedź"
// image.imageHeight: "Image height (in CSS-accepted values)" => "Wysokość obrazu (w wartościach akceptowanych przez CSS)"
// image.imageWidth: "Image width (in CSS-accepted values)" => "Szerokość obrazu (w wartościach akceptowanych przez CSS)"
// page.maxTimeToFinish: "Time limit to finish the page (in seconds)" => "Limit czasu na zakończenie strony (w sekundach)"
// question.page: "Parent page" => "Strona nadrzędna"
// pe.noEntriesText: "Empty entries text" => "Tekst pustych wpisów"
// pe.html: "HTML markup" => "Znaczniki HTML"
// pe.expression: "Expression" => "Wyrażenie"
// pe.setValue: "Answer" => "Odpowiedź"
// pe.dataFormat: "Image format" => "Format obrazu"
// pe.allowAddRows: "Allow adding rows" => "Zezwalaj na dodawanie wierszy"
// pe.allowRemoveRows: "Allow removing rows" => "Zezwalaj na usuwanie wierszy"
// pe.allowRowsDragAndDrop: "Allow row drag and drop" => "Zezwalaj na przeciąganie i upuszczanie wierszy"
// pe.responsiveImageSizeHelp: "Does not apply if you specify the exact image width or height." => "Nie ma zastosowania, jeśli określisz dokładną szerokość lub wysokość obrazu."
// pe.minImageWidth: "Minimum image width" => "Minimalna szerokość obrazu"
// pe.maxImageWidth: "Maximum image width" => "Maksymalna szerokość obrazu"
// pe.minImageHeight: "Minimum image height" => "Minimalna wysokość obrazu"
// pe.maxImageHeight: "Maximum image height" => "Maksymalna wysokość obrazu"
// pe.minValue: "Minimum value" => "Wartość minimalna"
// pe.maxValue: "Maximum value" => "Wartość maksymalna"
// pe.minLength: "Minimum length (in characters)" => "Minimalna długość (w znakach)"
// pe.allowDigits: "Allow digits" => "Zezwalaj na cyfry"
// pe.minCount: "Minimum count" => "Minimalna liczba"
// pe.maxCount: "Maximum count" => "Maksymalna liczba"
// pe.regex: "Regular expression" => "Wyrażenie regularne"
// surveyvalidator.text: "Error message" => "Komunikat o błędzie"
// surveyvalidator.expression: "Validation expression" => "Wyrażenie sprawdzania poprawności"
// pe.totalText: "Total row text" => "Tekst wiersza sumy"
// pe.totalType: "Total type" => "Typ sumy"
// pe.totalExpression: "Total expression" => "Wyrażenie całkowite"
// pe.totalDisplayStyle: "Total value display style" => "Styl wyświetlania łącznej wartości"
// pe.totalCurrency: "Currency" => "Waluta"
// pe.totalFormat: "Formatted string" => "Sformatowany ciąg znaków"
// pe.logo: "Logo (URL or base64-encoded string)" => "Logo (adres URL lub ciąg znaków zakodowany w formacie base64)"
// pe.questionsOnPageMode: "Survey structure" => "Struktura badania"
// pe.maxTextLength: "Maximum answer length (in characters)" => "Maksymalna długość odpowiedzi (w znakach)"
// pe.maxOthersLength: "Maximum comment length (in characters)" => "Maksymalna długość komentarza (w znakach)"
// pe.autoGrowComment: "Auto-expand comment area if necessary" => "W razie potrzeby automatycznie rozwiń obszar komentarza"
// pe.allowResizeComment: "Allow users to resize text areas" => "Zezwalaj użytkownikom na zmianę rozmiaru obszarów tekstu"
// pe.textUpdateMode: "Update text question value" => "Aktualizowanie wartości pytania tekstowego"
// pe.focusOnFirstError: "Set focus on the first invalid answer" => "Ustaw fokus na pierwszej nieprawidłowej odpowiedzi"
// pe.checkErrorsMode: "Run validation" => "Sprawdzanie poprawności uruchamiania"
// pe.navigateToUrl: "Navigate to URL" => "Przejdź do adresu URL"
// pe.navigateToUrlOnCondition: "Dynamic URL" => "Dynamiczny adres URL"
// pe.completedBeforeHtml: "Markup to show if the user already filled out this survey" => "Znaczniki, aby pokazać, czy użytkownik już wypełnił tę ankietę"
// pe.completedHtml: "Survey Complete page markup" => "Znaczniki strony Survey Complete"
// pe.completedHtmlOnCondition: "Dynamic Survey Complete page markup" => "Znaczniki strony Dynamic Survey Complete"
// pe.loadingHtml: "Markup to show while survey model is loading" => "Znaczniki do pokazania podczas ładowania modelu ankiety"
// pe.commentText: "Comment area text" => "Tekst w obszarze komentarza"
// pe.autocomplete: "Autocomplete type" => "Typ autouzupełniania"
// pe.labelTrue: "\"True\" label" => "Etykieta \"prawdziwa\""
// pe.labelFalse: "\"False\" label" => "Etykieta \"Fałsz\""
// pe.allowClear: "Show the Clear button" => "Pokaż przycisk Wyczyść"
// pe.displayStyle: "Value display style" => "Styl wyświetlania wartości"
// pe.format: "Formatted string" => "Sformatowany ciąg znaków"
// pe.maximumFractionDigits: "Maximum fractional digits" => "Maksymalna liczba cyfr ułamkowych"
// pe.minimumFractionDigits: "Minimum fractional digits" => "Minimalne cyfry ułamkowe"
// pe.useGrouping: "Display grouping separators" => "Wyświetlanie separatorów grupujących"
// pe.allowMultiple: "Allow multiple files" => "Zezwalaj na wiele plików"
// pe.allowImagesPreview: "Preview images" => "Podgląd obrazów"
// pe.acceptedTypes: "Accepted file types" => "Akceptowane typy plików"
// pe.waitForUpload: "Wait for the upload to complete" => "Poczekaj na zakończenie przesyłania"
// pe.needConfirmRemoveFile: "Confirm file deletion" => "Potwierdź usunięcie pliku"
// pe.detailPanelMode: "Detail panel location" => "Położenie panelu szczegółów"
// pe.minRowCount: "Minimum row count" => "Minimalna liczba wierszy"
// pe.maxRowCount: "Maximum row count" => "Maksymalna liczba wierszy"
// pe.confirmDelete: "Confirm row deletion" => "Potwierdź usunięcie wiersza"
// pe.confirmDeleteText: "Confirmation message" => "Komunikat potwierdzenia"
// paneldynamic.confirmDelete: "Confirm panel deletion" => "Potwierdź usunięcie panelu"
// pe.panelCount: "Initial panel count" => "Początkowa liczba paneli"
// pe.minPanelCount: "Minimum panel count" => "Minimalna liczba paneli"
// pe.maxPanelCount: "Maximum panel count" => "Maksymalna liczba paneli"
// pe.panelsState: "Inner panel expand state" => "Stan rozwinięcia panelu wewnętrznego"
// pe.templateDescription: "Description template" => "Szablon opisu"
// pe.templateTitle: "Title template" => "Szablon tytułu"
// pe.panelPrevText: "Previous Panel button tooltip" => "Poprzednia etykietka przycisku panelu"
// pe.panelNextText: "Next Panel button tooltip" => "Przycisk Następny panel — etykietka narzędzia"
// pe.showRangeInProgress: "Show progress bar" => "Pokaż pasek postępu"
// pe.templateTitleLocation: "Question title location" => "Lokalizacja tytułu pytania"
// pe.panelRemoveButtonLocation: "Remove Panel button location" => "Usuń położenie przycisku panelu"
// pe.hideIfRowsEmpty: "Hide the question if there are no rows" => "Ukryj pytanie, jeśli nie ma wierszy"
// pe.hideColumnsIfEmpty: "Hide columns if there are no rows" => "Ukryj kolumny, jeśli nie ma wierszy"
// pe.rateValues: "Custom rate values" => "Niestandardowe wartości stawek"
// pe.rateCount: "Rate count" => "Liczba stawek"
// pe.autoGenerate: "How to specify rate values?" => "Jak określić wartości stawek?"
// pe.hideIfChoicesEmpty: "Hide the question if it contains no choices" => "Ukryj pytanie, jeśli nie zawiera opcji wyboru"
// pe.hideNumber: "Hide question number" => "Ukryj numer pytania"
// pe.minWidth: "Minimum width (in CSS-accepted values)" => "Minimalna szerokość (w wartościach akceptowanych przez CSS)"
// pe.maxWidth: "Maximum width (in CSS-accepted values)" => "Maksymalna szerokość (w wartościach akceptowanych przez CSS)"
// pe.width: "Width (in CSS-accepted values)" => "Szerokość (w wartościach akceptowanych przez CSS)"
// pe.showHeader: "Show column headers" => "Pokaż nagłówki kolumn"
// pe.horizontalScroll: "Show horizontal scrollbar" => "Pokaż poziomy pasek przewijania"
// pe.columnMinWidth: "Minimum column width (in CSS-accepted values)" => "Minimalna szerokość kolumny (w wartościach akceptowanych przez CSS)"
// pe.rowTitleWidth: "Row header width (in CSS-accepted values)" => "Szerokość nagłówka wiersza (w wartościach akceptowanych przez CSS)"
// pe.valueTrue: "\"True\" value" => "\"Prawdziwa\" wartość"
// pe.valueFalse: "\"False\" value" => "Wartość \"False\""
// pe.minErrorText: "\"Value is below minimum\" error message" => "Komunikat o błędzie \"Wartość jest niższa niż minimalna\""
// pe.maxErrorText: "\"Value exceeds maximum\" error message" => "Komunikat o błędzie \"Wartość przekracza maksimum\""
// pe.otherErrorText: "\"Empty comment\" error message" => "Komunikat o błędzie \"Pusty komentarz\""
// pe.keyDuplicationError: "\"Non-unique key value\" error message" => "Komunikat o błędzie \"Nieunikalna wartość klucza\""
// pe.minSelectedChoices: "Minimum selected choices" => "Minimalna wybrana opcja"
// pe.maxSelectedChoices: "Maximum selected choices" => "Maksymalna liczba wybranych opcji"
// pe.showClearButton: "Show the Clear button" => "Pokaż przycisk Wyczyść"
// pe.showNumber: "Show panel number" => "Pokaż numer panelu"
// pe.logoWidth: "Logo width (in CSS-accepted values)" => "Szerokość logo (w wartościach akceptowanych przez CSS)"
// pe.logoHeight: "Logo height (in CSS-accepted values)" => "Wysokość logo (w wartościach akceptowanych przez CSS)"
// pe.readOnly: "Read-only" => "Tylko do odczytu"
// pe.enableIf: "Editable if" => "Edytowalne, jeśli"
// pe.emptyRowsText: "\"No rows\" message" => "Komunikat \"Brak wierszy\""
// pe.size: "Input field size (in characters)" => "Rozmiar pola wejściowego (w znakach)"
// pe.separateSpecialChoices: "Separate special choices (None, Other, Select All)" => "Oddzielne opcje specjalne (Brak, Inne, Wybierz wszystko)"
// pe.choicesFromQuestion: "Copy choices from the following question" => "Kopiowanie opcji z następującego pytania"
// pe.choicesFromQuestionMode: "Which choices to copy?" => "Które opcje skopiować?"
// pe.showCommentArea: "Show the comment area" => "Pokaż obszar komentarza"
// pe.commentPlaceholder: "Comment area placeholder" => "Symbol zastępczy obszaru komentarza"
// pe.displayRateDescriptionsAsExtremeItems: "Display rate descriptions as extreme values" => "Wyświetlanie opisów szybkości jako wartości ekstremalnych"
// pe.rowsOrder: "Row order" => "Kolejność wierszy"
// pe.columnsLayout: "Column layout" => "Układ kolumn"
// pe.columnColCount: "Nested column count" => "Liczba kolumn zagnieżdżonych"
// pe.state: "Panel expand state" => "Stan rozwinięcia panelu"
// pe.correctAnswer: "Correct Answer" => "Prawidłowa odpowiedź"
// pe.defaultPanelValue: "Default Values" => "Wartości domyślne"
// pe.cells: "Cell Texts" => "Teksty komórek"
// pe.keyName: "Key column" => "Kolumna klucza"
// itemvalue.text: "Alt text" => "Tekst alternatywny"
// pe.logoPosition: "Logo position" => "Pozycja logo"
// pe.addLogo: "Add logo..." => "Dodaj logo..."
// pe.changeLogo: "Change logo..." => "Zmień logo..."
// logoPositions.none: "Remove logo" => "Usuń logo"
// logoPositions.left: "Left" => "Lewy"
// logoPositions.right: "Right" => "Prawy"
// logoPositions.top: "On the top" => "Na górze"
// logoPositions.bottom: "In the bottom" => "Na dole"
// tabs.items: "Items" => "Elementy"
// tabs.requiredIf: "Required If" => "Wymagane, jeśli"
// tabs.numbering: "Numbering" => "Numerowanie"
// tabs.pages: "Pages" => "Stron"
// tabs.calculatedValues: "Calculated Values" => "Obliczone wartości"
// tabs.totals: "Totals" => "Sumy"
// tabs.logic: "Logic" => "Logika"
// tabs.layout: "Layout" => "Układ"
// tabs.data: "Data" => "Dane"
// tabs.validation: "Validation" => "Walidacja"
// tabs.cells: "Cell Texts" => "Teksty komórek"
// tabs.showOnCompleted: "Survey Complete" => "Ankieta zakończona"
// tabs.logo: "Logo in Survey Title" => "Logo w tytule ankiety"
// tabs.slider: "Slider" => "Suwak"
// tabs.expression: "Expression" => "Wyrażenie"
// tabs.others: "Others" => "Inni"
// pe.choicesVisibleIf: "Choices are visible if" => "Wybory są widoczne, jeśli"
// pe.choicesEnableIf: "Choices are selectable if" => "Wybory można wybrać, jeśli:"
// pe.columnsEnableIf: "Columns are visible if" => "Kolumny są widoczne, jeśli"
// pe.rowsEnableIf: "Rows are visible if" => "Wiersze są widoczne, jeśli"
// pe.indent: "Add indents" => "Dodawanie wcięć"
// panel.indent: "Add outer indents" => "Dodawanie wcięć zewnętrznych"
// pe.innerIndent: "Add inner indents" => "Dodawanie wcięć wewnętrznych"
// pe.defaultValueFromLastRow: "Take default values from the last row" => "Pobieranie wartości domyślnych z ostatniego wiersza"
// pe.defaultValueFromLastPanel: "Take default values from the last panel" => "Pobieranie wartości domyślnych z ostatniego panelu"
// pe.titleKeyboardAdornerTip: "Press enter button to edit" => "Naciśnij przycisk Enter, aby edytować"
// pe.keyboardAdornerTip: "Press enter button to edit item, press delete button to delete item, press alt plus arrow up or arrow down to move item" => "Naciśnij przycisk Enter, aby edytować element, naciśnij przycisk Delete, aby usunąć element, naciśnij Alt plus strzałka w górę lub strzałka w dół, aby przenieść element"
// pe.triggerFromName: "Copy value from: " => "Skopiuj wartość z: "
// pe.triggerRunExpression: "Run this Expression" => "Uruchom to wyrażenie"
// pe.triggerGotoName: "Go to the question" => "Przejdź do pytania"
// pe.triggerRunExpressionEmpty: "Please enter a valid expression" => "Wpisz poprawne wyrażenie"
// pe.emptyExpressionPlaceHolder: "Type expression here..." => "Wpisz wyrażenie tutaj..."
// pe.noFile: "No file choosen" => "Nie wybrano pliku"
// pe.clearIfInvisible: "Clear the value if the question becomes hidden" => "Wyczyść wartość, jeśli pytanie zostanie ukryte"
// pe.valuePropertyName: "Value property name" => "Nazwa właściwości Value"
// pe.searchEnabled: "Enable search" => "Włącz wyszukiwanie"
// pe.hideSelectedItems: "Hide selected items" => "Ukrywanie zaznaczonych elementów"
// pe.closeOnSelect: "Close the dropdown after selection" => "Zamknij listę rozwijaną po dokonaniu wyboru"
// pe.signatureWidth: "Signature width" => "Szerokość podpisu"
// pe.signatureHeight: "Signature height" => "Wysokość podpisu"
// pe.verticalAlign: "Vertical alignment" => "Wyrównanie w pionie"
// pe.alternateRows: "Alternate rows" => "Alternatywne wiersze"
// pe.columnsVisibleIf: "Columns are visible if" => "Kolumny są widoczne, jeśli"
// pe.rowsVisibleIf: "Rows are visible if" => "Wiersze są widoczne, jeśli"
// pe.otherPlaceholder: "Comment area placeholder" => "Symbol zastępczy obszaru komentarza"
// pe.rateType: "Rate type" => "Rodzaj stawki"
// pv.true: "true" => "prawdziwy"
// pv.false: "false" => "fałszywy"
// pv.inherit: "Inherit" => "Odziedziczyć"
// pv.show: "Visible" => "Widoczny"
// pv.hide: "Hidden" => "Ukryty"
// pv.default: "Inherit" => "Odziedziczyć"
// pv.initial: "Initial" => "Inicjał"
// pv.random: "Random" => "Losowy"
// pv.collapsed: "Collapsed" => "Zwinięty"
// pv.expanded: "Expanded" => "Rozszerzony"
// pv.none: "None" => "Żaden"
// pv.asc: "Ascending" => "Rosnąco"
// pv.desc: "Descending" => "Malejąco"
// pv.indeterminate: "Indeterminate" => "Nieokreślony"
// pv.decimal: "decimal" => "dziesiętny"
// pv.currency: "currency" => "waluta"
// pv.percent: "percent" => "procent"
// pv.firstExpanded: "First panel is expanded" => "Pierwszy panel jest rozwinięty"
// pv.off: "Hide question numbers" => "Ukryj numery pytań"
// pv.onpanel: "Start on each panel" => "Rozpocznij od każdego panelu"
// pv.onPanel: "Start on each panel" => "Rozpocznij od każdego panelu"
// pv.onSurvey: "Continue throughout the survey" => "Kontynuuj przez cały czas trwania ankiety"
// pv.list: "List" => "Lista"
// pv.progressTop: "Panel navigator + Progress bar at the top" => "Nawigator paneli + pasek postępu u góry"
// pv.progressBottom: "Panel navigator + Progress bar at the bottom" => "Nawigator panelu + pasek postępu u dołu"
// pv.progressTopBottom: "Panel navigator + Progress bar at the top and bottom" => "Nawigator panelu + pasek postępu u góry i u dołu"
// pv.tab: "Tabs" => "Karty"
// pv.horizontal: "Horizontal" => "Poziomy"
// pv.vertical: "Vertical" => "Pionowy"
// pv.top: "Top" => "Do góry"
// pv.bottom: "Bottom" => "Dno"
// pv.topBottom: "Top and bottom" => "Góra i dół"
// pv.both: "Both" => "Obie"
// pv.left: "Left" => "Lewy"
// pv.right: "Right" => "Prawy"
// pv.color: "color" => "Kolor"
// pv.date: "date" => "data"
// pv.datetime: "datetime" => "datagodzina"
// pv.datetime-local: "datetime-local" => "datetime-local"
// pv.email: "email" => "E-mail"
// pv.month: "month" => "miesiąc"
// pv.number: "number" => "numer"
// pv.password: "password" => "hasło"
// pv.range: "range" => "zakres"
// pv.tel: "tel" => "Tel"
// pv.text: "text" => "Tekst"
// pv.time: "time" => "Godzina"
// pv.url: "url" => "adres URL"
// pv.week: "week" => "tydzień"
// pv.hidden: "Hidden" => "Ukryty"
// pv.on: "Continue from the previous page" => "Kontynuuj od poprzedniej strony"
// pv.onPage: "Start on each page" => "Zacznij od każdej strony"
// pv.edit: "Editable" => "Edytowalny"
// pv.display: "Read-only" => "Tylko do odczytu"
// pv.onComplete: "When the survey is completed" => "Po zakończeniu ankiety"
// pv.onHidden: "When the question becomes hidden" => "Gdy pytanie zostanie ukryte"
// pv.onHiddenContainer: "When the question or its panel/page becomes hidden" => "Gdy pytanie lub jego panel/strona zostaną ukryte"
// clearInvisibleValues.none: "Never" => "Nigdy"
// inputType.color: "Color" => "Kolor"
// inputType.date: "Date" => "Data"
// inputType.datetime-local: "Date and Time" => "Data i godzina"
// inputType.email: "Email" => "E-mail"
// inputType.month: "Month" => "Miesiąc"
// inputType.number: "Number" => "Numer"
// inputType.password: "Password" => "Hasło"
// inputType.range: "Range" => "Zakres"
// inputType.tel: "Phone Number" => "Numer"
// inputType.text: "Text" => "Tekst"
// inputType.time: "Time" => "Godzina"
// inputType.url: "URL" => "Adres URL"
// inputType.week: "Week" => "Tydzień"
// pv.all: "All" => "Cały"
// pv.page: "Page" => "Strona"
// pv.survey: "Survey" => "Sondaż"
// pv.onNextPage: "When switching to the next page" => "Podczas przełączania do następnej strony"
// pv.onValueChanged: "After an answer is changed" => "Po zmianie odpowiedzi"
// pv.onValueChanging: "Before an answer is changed" => "Zanim odpowiedź zostanie zmieniona"
// pv.standard: "Original structure" => "Oryginalna struktura"
// pv.singlePage: "All questions on a single page" => "Wszystkie pytania na jednej stronie"
// pv.questionPerPage: "Each question on an individual page" => "Każde pytanie na osobnej stronie"
// pv.noPreview: "No preview" => "Brak podglądu"
// pv.showAllQuestions: "Show all questions" => "Pokaż wszystkie pytania"
// pv.showAnsweredQuestions: "Show answered questions only" => "Pokaż tylko odpowiedzi na pytania"
// pv.pages: "Completed pages" => "Ukończone strony"
// pv.questions: "Answered questions" => "Odpowiedzi na pytania"
// pv.requiredQuestions: "Answered required questions" => "Odpowiedzi na wymagane pytania"
// pv.correctQuestions: "Valid answers" => "Prawidłowe odpowiedzi"
// pv.buttons: "Completed pages (button UI)" => "Ukończone strony (interfejs użytkownika)"
// pv.underInput: "Under the input" => "Pod wejściem"
// pv.underTitle: "Under the title" => "Pod tytułem"
// pv.onBlur: "On blur" => "Na rozmyciu"
// pv.onTyping: "While typing" => "Podczas pisania"
// pv.underRow: "Under the row" => "Pod rzędem"
// pv.underRowSingle: "Under the row, only one panel is visible" => "Pod wierszem widoczny jest tylko jeden panel"
// showNavigationButtons.none: "Hidden" => "Ukryty"
// showProgressBar.off: "Hidden" => "Ukryty"
// showTimerPanel.none: "Hidden" => "Ukryty"
// showTimerPanelMode.all: "Both" => "Obie"
// detailPanelMode.none: "Hidden" => "Ukryty"
// addRowLocation.default: "Depends on matrix layout" => "Zależy od układu macierzy"
// panelsState.default: "Users cannot expand or collapse panels" => "Użytkownicy nie mogą rozwijać ani zwijać paneli"
// panelsState.collapsed: "All panels are collapsed" => "Wszystkie panele są zwinięte"
// panelsState.expanded: "All panels are expanded" => "Wszystkie panele są rozszerzone"
// widthMode.auto: "Auto" => "Automatycznie"
// widthMode.static: "Static" => "Statyczny"
// widthMode.responsive: "Responsive" => "Elastyczne"
// imageFit.none: "None" => "Żaden"
// imageFit.contain: "Contain" => "Zawierać"
// imageFit.cover: "Cover" => "Pokryć"
// imageFit.fill: "Fill" => "Wypełnić"
// contentMode.auto: "Auto" => "Automatycznie"
// contentMode.image: "Image" => "Obraz"
// contentMode.video: "Video" => "Wideo"
// contentMode.youtube: "YouTube" => "Serwis YouTube"
// displayMode.auto: "Auto" => "Automatycznie"
// displayMode.buttons: "Buttons" => "Przyciski"
// displayMode.dropdown: "Dropdown" => "Lista rozwijana"
// rateColorMode.default: "Default" => "Domyślny"
// autoGenerate.true: "Generate" => "Stworzyć"
// autoGenerate.false: "Enter manually" => "Wprowadź ręcznie"
// rateType.labels: "Labels" => "Etykiety"
// rateType.stars: "Stars" => "Gwiazdy"
// rateType.smileys: "Smileys" => "Uśmieszki"
// op.anyof: "Any of" => "Dowolny z"
// op.allof: "All of" => "Wszystko z"
// op.and: "and" => "i"
// op.or: "or" => "lub"
// ew.modern: "Modern theme" => "Nowoczesny motyw"
// ew.default: "Default theme" => "Motyw domyślny"
// ew.orange: "Orange theme" => "Kompozycja pomarańczowa"
// ew.darkblue: "Darkblue theme" => "Kompozycja Ciemnoniebieski"
// ew.darkrose: "Darkrose theme" => "Kompozycja Darkrose"
// ew.stone: "Stone theme" => "Kompozycja Kamień"
// ew.winter: "Winter theme" => "Kompozycja zimowa"
// ew.winterstone: "Winter-Stone theme" => "Kompozycja Kamień zimowy"
// ts.showInvisibleElements: "Show invisible elements" => "Pokaż niewidoczne elementy"
// ts.hideInvisibleElements: "Hide invisible elements" => "Ukryj niewidoczne elementy"
// validators.expressionvalidator: "Expression" => "Wyrażenie"
// triggers.copyvaluetrigger: "Copy answer" => "Kopiuj odpowiedź"
// triggers.skiptrigger: "Skip to question" => "Przejdź do pytania"
// triggers.runexpressiontrigger: "Run expression" => "Uruchom wyrażenie"
// pehelp.cookieName: "Cookies prevent users from filling out the same survey twice." => "Pliki cookie uniemożliwiają użytkownikom dwukrotne wypełnienie tej samej ankiety."
// pehelp.size: "Resizes the visible area of the input field. Please use the <b>Validation → Maximum length</b> setting to limit the input length." => "Zmienia rozmiar widocznego obszaru pola wprowadzania. Użyj ustawienia <b>Walidacja → Maksymalna</b> długość, aby ograniczyć długość wprowadzania."
// pehelp.format: "Use {0} as a placeholder for the actual value." => "Użyj {0} jako symbolu zastępczego dla rzeczywistej wartości."
// pehelp.totalText: "Visible only when at least one column has Total type or Total expression." => "Opcja widoczna tylko wtedy, gdy co najmniej jedna kolumna zawiera wyrażenie typu Total lub Total."
// pehelp.acceptedTypes: "Refer to the [accept](https://www.w3schools.com/tags/att_input_accept.asp) attribute description for more information." => "Więcej informacji można znaleźć w opisie atrybutu [accept](https://www.w3schools.com/tags/att_input_accept.asp)."
// pehelp.columnColCount: "Applicable only to Radiogroup and Checkbox cell types." => "Dotyczy tylko komórek typu Radiogroup i Checkbox."
// pehelp.autocomplete: "Refer to the [autocomplete](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete) attribute description for more information." => "Więcej informacji można znaleźć w opisie atrybutu [autocomplete](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete)."
// pehelp.valueName: "If you do not set this property, the answer will be stored in a field specified by the Name property." => "Jeśli ta właściwość nie zostanie ustawiona, odpowiedź będzie przechowywana w polu określonym przez właściwość Name."
// choicesbyurl.valueName: " " => " "
// pehelp.keyName: "If the specified column contains identical values, the survey throws the \"Non-unique key value\" error." => "Jeśli określona kolumna zawiera identyczne wartości, ankieta zgłasza błąd \"Nieunikalna wartość klucza\"."
// p.multiSelect: "Allow multiple selection" => "Zezwalaj na wielokrotny wybór"
// p.showLabel: "Show image captions" => "Pokaż podpisy pod obrazami"
// p.value: "Value" => "Wartość"
// p.tabAlign: "Tab alignment" => "Wyrównanie tabulatorów"
// p.description: "Description" => "Opis"
// p.logoFit: "Logo fit" => "Dopasowanie logo"
// p.pages: "Pages" => "Stron"
// p.questions: "Questions" => "Pytania"
// p.triggers: "Triggers" => "Wyzwalaczy"
// p.calculatedValues: "Calculated values" => "Obliczone wartości"
// p.surveyId: "Survey id" => "Identyfikator ankiety"
// p.surveyPostId: "Survey post id" => "Identyfikator posta ankiety"
// p.surveyShowDataSaving: "Survey show data saving" => "Ankieta pokazuje zapisywanie danych"
// p.questionDescriptionLocation: "Question description location" => "Lokalizacja opisu pytania"
// p.progressBarType: "Progress bar type" => "Typ paska postępu"
// p.showTOC: "Show TOC" => "Pokaż spis treści"
// p.tocLocation: "Toc location" => "Lokalizacja spisu treści"
// p.questionTitlePattern: "Question title pattern" => "Wzorzec tytułu pytania"
// p.widthMode: "Width mode" => "Tryb szerokości"
// p.showBrandInfo: "Show brand info" => "Pokaż informacje o marce"
// p.useDisplayValuesInDynamicTexts: "Use display values in dynamic texts" => "Używanie wartości wyświetlanych w tekstach dynamicznych"
// p.visibleIf: "Visible if" => "Widoczne, jeśli"
// p.titleLocation: "Title location" => "Lokalizacja tytułu"
// p.descriptionLocation: "Description location" => "Opis lokalizacji"
// p.defaultValueExpression: "Default value expression" => "Wyrażenie wartości domyślnej"
// p.requiredIf: "Required if" => "Wymagane, jeśli:"
// p.validators: "Validators" => "Walidatory"
// p.bindings: "Bindings" => "Powiązania"
// p.renderAs: "Render as" => "Renderuj jako"
// p.attachOriginalItems: "Attach original items" => "Dołączanie oryginalnych elementów"
// p.choices: "Choices" => "Wyborów"
// p.choicesByUrl: "Choices by url" => "Opcje według adresu URL"
// p.currency: "Currency" => "Waluta"
// p.cellHint: "Cell hint" => "Wskazówka do komórki"
// p.isUnique: "Is unique" => "Jest wyjątkowy"
// p.showInMultipleColumns: "Show in multiple columns" => "Pokaż w wielu kolumnach"
// p.totalMaximumFractionDigits: "Total maximum fraction digits" => "Łączne maksymalne cyfry ułamkowe"
// p.totalMinimumFractionDigits: "Total minimum fraction digits" => "Łączne minimalne cyfry ułamkowe"
// p.columns: "Columns" => "Kolumny"
// p.detailElements: "Detail elements" => "Elementy szczegółowe"
// p.allowAdaptiveActions: "Allow adaptive actions" => "Zezwalaj na działania adaptacyjne"
// p.defaultRowValue: "Default row value" => "Domyślna wartość wiersza"
// p.detailPanelShowOnAdding: "Detail panel show on adding" => "Panel szczegółów pokazuje się po dodaniu"
// p.choicesLazyLoadEnabled: "Choices lazy load enabled" => "Opcje: leniwe ładowanie włączone"
// p.choicesLazyLoadPageSize: "Choices lazy load page size" => "Opcje: leniwy rozmiar strony ładowania"
// p.inputFieldComponent: "Input field component" => "Składnik pola wejściowego"
// p.itemComponent: "Item component" => "Składnik elementu"
// p.min: "Min" => "Min"
// p.max: "Max" => "Max"
// p.minValueExpression: "Min value expression" => "Minimalne wyrażenie wartości"
// p.maxValueExpression: "Max value expression" => "Wyrażenie wartości maksymalnej"
// p.step: "Step" => "Krok"
// p.dataList: "Data list" => "Lista danych"
// p.itemSize: "Item size" => "Rozmiar produktu"
// p.elements: "Elements" => "Pierwiastki"
// p.content: "Content" => "Zawartość"
// p.navigationButtonsVisibility: "Navigation buttons visibility" => "Widoczność przycisków nawigacyjnych"
// p.navigationTitle: "Navigation title" => "Tytuł nawigacji"
// p.navigationDescription: "Navigation description" => "Opis nawigacji"
// p.longTap: "Long tap" => "Długie dotknięcie"
// p.autoGrow: "Auto grow" => "Automatyczny wzrost"
// p.allowResize: "Allow resizing" => "Zezwalaj na zmianę rozmiaru"
// p.acceptCarriageReturn: "Accept carriage return" => "Zaakceptuj zwrot karetki"
// p.displayMode: "Display mode" => "Tryb wyświetlania"
// p.rateType: "Rate type" => "Rodzaj stawki"
// p.label: "Label" => "Etykieta"
// p.contentMode: "Content mode" => "Tryb zawartości"
// p.imageFit: "Image fit" => "Dopasowanie obrazu"
// p.altText: "Alt text" => "Tekst alternatywny"
// p.height: "Height" => "Wysokość"
// p.penColor: "Pen color" => "Kolor pióra"
// p.backgroundColor: "Background color" => "Kolor tła"
// p.templateElements: "Template elements" => "Elementy szablonu"
// p.operator: "Operator" => "Operator"
// p.isVariable: "Is variable" => "Jest zmienna"
// p.runExpression: "Run expression" => "Uruchom wyrażenie"
// p.showCaption: "Show caption" => "Pokaż podpis"
// p.iconName: "Icon name" => "Nazwa ikony"
// p.iconSize: "Icon size" => "Rozmiar ikony"
// p.precision: "Precision" => "Precyzja"
// p.matrixDragHandleArea: "Matrix drag handle area" => "Obszar uchwytu przeciągania macierzy"
// p.backgroundImage: "Background image" => "Obraz tła"
// p.backgroundImageFit: "Background image fit" => "Dopasowanie obrazu tła"
// p.backgroundImageAttachment: "Background image attachment" => "Załącznik obrazu tła"
// p.backgroundOpacity: "Background opacity" => "Krycie tła"
// p.selectToRankEnabled: "Select to rank enabled" => "Wybierz, aby ranga była włączona"
// p.selectToRankAreasLayout: "Select to rank areas layout" => "Wybierz, aby uszeregować układ obszarów"
// p.allowCameraAccess: "Allow camera access" => "Zezwalaj na dostęp do kamery"
// p.scaleColorMode: "Scale color mode" => "Tryb skalowania kolorów"
// p.rateColorMode: "Rate color mode" => "Oceń tryb kolorów"
// p.templateTabTitle: "Template tab title" => "Tytuł karty szablonu"
// p.templateVisibleIf: "Template visible if" => "Szablon widoczny, jeśli"
// p.copyDisplayValue: "Copy display value" => "Kopiowanie wyświetlanej wartości"
// theme.--background: "Background color" => "Kolor tła"
// theme.--background-dim-light: "Background dim light color" => "Słaby kolor światła tła"
// theme.--primary-foreground: "Primary foreground color" => "Podstawowy kolor pierwszego planu"
// theme.--foreground: "Foreground color" => "Kolor pierwszego planu"
// theme.--base-unit: "Base unit" => "Jednostka bazowa"
// theme.groupGeneral: "General" => "Ogólne"
// theme.groupAdvanced: "Advanced" => "Zaawansowany"
// theme.themeName: "Theme" => "Kompozycja"
// theme.themeMode: "Question appearance" => "Wygląd pytania"
// theme.themeModePanels: "Default" => "Domyślny"
// theme.themeModeLightweight: "Without Panels" => "Bez paneli"
// theme.themePaletteLight: "Light" => "Światło"
// theme.themePaletteDark: "Dark" => "Ciemny"
// theme.primaryColor: "Accent color" => "Kolor wiodący"
// theme.primaryDefaultColor: "Default" => "Domyślny"
// theme.primaryDarkColor: "Hover" => "Hover"
// theme.primaryLightColor: "Selected" => "Wybrany"
// theme.backgroundDimColor: "Background color" => "Kolor tła"
// theme.backgroundImage: "Background image" => "Obraz tła"
// theme.backgroundImageFitAuto: "Auto" => "Automatycznie"
// theme.backgroundImageFitCover: "Cover" => "Pokryć"
// theme.backgroundImageFitContain: "Contain" => "Zawierać"
// theme.backgroundOpacity: "Opacity" => "Nieprzezroczystość"
// theme.backgroundImageAttachmentFixed: "Fixed" => "Stały"
// theme.backgroundImageAttachmentScroll: "Scroll" => "Przewijać"
// theme.panelBackgroundTransparency: "Panel background opacity" => "Krycie tła panelu"
// theme.questionBackgroundTransparency: "Question background opacity" => "Nieprzezroczystość tła pytania"
// theme.questionPanel: "Panel background and corner radius" => "Tło panelu i promień narożnika"
// theme.questionTitle: "Question title font" => "Czcionka tytułu pytania"
// theme.questionDescription: "Question description font" => "Czcionka opisu pytania"
// theme.editorPanel: "Input element" => "Element wejściowy"
// theme.editorFont: "Input element font" => "Czcionka elementu wejściowego"
// theme.backcolor: "Default background" => "Domyślne tło"
// theme.hovercolor: "Hover background" => "Najedź kursorem na tło"
// theme.borderDecoration: "Border decoration" => "Dekoracja obramowania"
// theme.accentBackground: "Accent background" => "Tło akcentu"
// theme.accentForeground: "Accent foreground" => "Akcent na pierwszym planie"
// theme.primaryForecolor: "Default color" => "Kolor domyślny"
// theme.primaryForecolorLight: "Disabled color" => "Kolor wyłączony"
// theme.linesColors: "Minor line colors" => "Pomocnicze kolory linii"
// theme.borderDefault: "Darker" => "Ciemniejsze"
// theme.borderLight: "Lighter" => "Zapalniczka"
// theme.fontFamily: "Font family" => "Rodzina czcionek"
// theme.fontSize: "Font size" => "Rozmiar czcionki"
// theme.color: "Color" => "Kolor"
// theme.size: "Size" => "Rozmiar"
// theme.fontWeightRegular: "Regular" => "Regularny"
// theme.fontWeightHeavy: "Heavy" => "Ciężki"
// theme.fontWeightSemiBold: "Semi-bold" => "Półpogrubienie"
// theme.fontWeightBold: "Bold" => "Śmiały"
// theme.scale: "Scale" => "Skala"
// theme.cornerRadius: "Corner radius" => "Promień narożnika"
// theme.surveyTitle: "Survey title font" => "Czcionka tytułu ankiety"
// theme.pageTitle: "Page title font" => "Czcionka tytułu strony"
// theme.pageDescription: "Page description font" => "Czcionka opisu strony"
// theme.boxShadowX: "X" => "X"
// theme.boxShadowY: "Y" => "Y"
// theme.boxShadowAddRule: "Add Shadow Effect" => "Dodaj efekt cienia"
// theme.opacity: "Opacity" => "Nieprzezroczystość"
// theme.boxShadowBlur: "Blur" => "Zacierać"
// theme.boxShadowSpread: "Spread" => "Rozprzestrzenianie się"
// theme.boxShadowDrop: "Drop" => "Kropla"
// theme.boxShadowInner: "Inner" => "Wewnętrzny"
// theme.questionShadow: "Shadow effects" => "Efekty cienia"
// theme.editorShadow: "Input element shadow effects" => "Efekty cienia elementu wejściowego"
// names.default: "Default" => "Domyślny"
// names.contrast: "Contrast" => "Kontrast"
// names.plain: "Plain" => "Równina"
// names.simple: "Simple" => "Prosty"
// names.blank: "Blank" => "Pusty"
// names.double: "Double" => "Podwójny"
// names.bulk: "Bulk" => "Wielkość"
// names.pseudo-3d: "Pseudo 3D" => "Pseudo 3D"
// names.playful: "Playful" => "Figlarny"
// names.ultra: "Ultra" => "Ultra"
// colors.teal: "Teal" => "Teal"
// colors.blue: "Blue" => "Niebieski"
// colors.purple: "Purple" => "Purpura"
// colors.orchid: "Orchid" => "Orchidea"
// colors.tulip: "Tulip" => "Tulipan"
// colors.brown: "Brown" => "Brązowy"
// colors.green: "Green" => "Zielony"
// names.sharp: "Sharp" => "Ostry"
// names.borderless: "Borderless" => "Bez obramowania"
// names.flat: "Flat" => "Płaski"
// names.doubleborder: "Double Border" => "Podwójna ramka"
// names.layered: "Layered" => "Warstwowe"
// names.solid: "Solid" => "Bryła"
// names.threedimensional: "3D" => ".3D"
// ed.translationDeleteLanguage: "Are you certain you wish to delete all strings for this language?" => "Czy na pewno chcesz usunąć wszystkie ciągi znaków dla tego języka?"
// ed.themeResetButton: "Reset theme settings to default" => "Przywracanie domyślnych ustawień motywu"
// theme.placeholderColor: "Placeholder color" => "Kolor zastępczy"
// ed.themeSettings: "Theme Settings" => "Ustawienia motywu"
// ed.themeSettingsTooltip: "Open theme settings" => "Otwórz ustawienia motywu"
// pe.resetToDefaultCaption: "Reset" => "Resetować"
// pv.file: "Local files" => "Pliki lokalne"
// pv.camera: "Camera" => "Kamera"
// pv.file-camera: "Local files or camera" => "Pliki lokalne lub aparat"
// ed.translateUsigAI: "Auto-translate All" => "Automatycznie tłumacz wszystko"
// ed.translationDialogTitle: "Untranslated strings" => "Nieprzetłumaczone ciągi znaków"
// pe.fastEntryChoicesMinCountError: "Please enter at least {0} items" => "Podaj co najmniej {0} przedmiotów"
// lg.question_resetValueName: "Reset question value" => "Zresetuj wartość pytania"
// lg.column_resetValue: "Reset column value" => "Resetowanie wartości kolumny"
// pe.markRequired: "Mark as required" => "Oznacz jako wymagane"
// pe.removeRequiredMark: "Remove the required mark" => "Usuń wymagany znacznik"
// p.resetValueIf: "Reset value if" => "Zresetuj wartość, jeśli"
// lg.question_setValueName: "Set question value" => "Ustawianie wartości pytania"
// lg.column_resetValueName: "Reset column value" => "Resetowanie wartości kolumny"
// lg.column_setValueName: "Set column value" => "Ustawianie wartości kolumny"
// lg.setValueExpressionPlaceholder: " An expression whose result will be assigned to the target question." => " Wyrażenie, którego wynik zostanie przypisany do pytania docelowego."
// survey.title: "Title" => "Tytuł"
// page.title: "Title" => "Tytuł"
// p.setValueIf: "Set value if" => "Ustaw wartość, jeśli"
// theme.groupHeader: "Header" => "Nagłówek"
// theme.coverTitleForecolor: "Title forecolor" => "Kolor przedniego tytułu"
// theme.coverOverlapEnabled: "Overlap" => "Zachodzić na siebie"
// theme.backgroundImageFitFill: "Stretch" => "Rozciągnąć"
// theme.backgroundImageFitTile: "Tile" => "Kafelek"
// theme.headerView: "View" => "Widok"
// theme.headerViewBasic: "Basic" => "Podstawowy"
// theme.headerViewAdvanced: "Advanced" => "Zaawansowany"
// theme.coverInheritWidthFrom: "Content area width" => "Szerokość obszaru zawartości"
// theme.coverInheritWidthFromSurvey: "Same as survey" => "Tak samo jak ankieta"
// theme.coverInheritWidthFromPage: "Fit to page" => "Dopasuj do strony"
// theme.coverTextAreaWidth: "Text width" => "Szerokość tekstu"
// theme.coverBackgroundColorSwitch: "Background color" => "Kolor tła"
// theme.coverBackgroundColorNone: "None" => "Żaden"
// theme.coverBackgroundColorAccentColor: "Accent color" => "Kolor wiodący"
// theme.coverBackgroundColorCustom: "Custom" => "Zwyczaj"
// theme.horizontalAlignmentLeft: "Left" => "Lewy"
// theme.horizontalAlignmentCenter: "Center" => "Centrum"
// theme.horizontalAlignmentRight: "Right" => "Prawy"
// theme.verticalAlignmentTop: "Top" => "Do góry"
// theme.verticalAlignmentMiddle: "Middle" => "Środek"
// theme.verticalAlignmentBottom: "Bottom" => "Dno"
// theme.logoPosition: "Logo Position" => "Pozycja logo"
// theme.coverTitlePosition: "Title Position" => "Pozycja tytułu"
// lg.question_resetValueText: "reset value for question: {0}" => "Zresetuj wartość dla pytania: {0}"
// lg.question_setValueText: "assign value: {1} to question: {0}" => "Przypisz wartość: {1} do pytania: {0}"
// lg.column_resetValueText: "reset cell value for column: {0}" => "Zresetuj wartość komórki dla kolumny: {0}"
// lg.column_setValueText: "assign cell value: {1} to column: {0}" => "Przypisz wartość komórki: {1} do kolumny: {0}"
// ed.surveyJsonExportButton: "Export" => "Eksport"
// ed.surveyJsonImportButton: "Import" => "Import"
// ed.surveyJsonCopyButton: "Copy to clipboard" => "Kopiuj do schowka"
// pe.filePlaceholder: "File placeholder text" => "Tekst zastępczy pliku"
// pe.photoPlaceholder: "Photo placeholder text" => "Tekst zastępczy zdjęcia"
// pe.fileOrPhotoPlaceholder: "File or photo placeholder text" => "Tekst zastępczy pliku lub zdjęcia"
// pehelp.filePlaceholder: "Applies when \"Source type\" is \"Local files\" or when camera is unavailable" => "Ma zastosowanie, gdy \"Typ źródła\" to \"Pliki lokalne\" lub gdy kamera jest niedostępna"
// pehelp.photoPlaceholder: "Applies when \"Source type\" is \"Camera\"." => "Ma zastosowanie, gdy \"Typ źródła\" to \"Kamera\"."
// pehelp.fileOrPhotoPlaceholder: "Applies when \"Source type\" is \"Local files or camera\"." => "Ma zastosowanie, gdy \"Typ źródła\" to \"Pliki lokalne lub kamera\"."
// theme.groupBackground: "Background" => "Tło"
// theme.groupAppearance: "Appearance" => "Wygląd"
// theme.coverDescriptionForecolor: "Description forecolor" => "Opis przedbarwy"
// ed.themeResetConfirmation: "Do you really want to reset the theme? All your customizations will be lost." => "Czy naprawdę chcesz zresetować motyw? Wszystkie Twoje dostosowania zostaną utracone."
// ed.themeResetConfirmationOk: "Yes, reset the theme" => "Tak, zresetuj motyw"
// theme.groupBackground: "Background" => "Tło"
// theme.groupAppearance: "Appearance" => "Wygląd"
// theme.coverDescriptionForecolor: "Description forecolor" => "Opis przedbarwy"
// theme.coverInheritWidthFromContainer: "Fit to container" => "Pasuje do pojemnika"
// signaturepad.showPlaceholder: "Show the placeholder" => "Pokazywanie symbolu zastępczego"
// signaturepad.placeholder: "Placeholder text" => "Tekst zastępczy"
// theme.surveyDescription: "Survey description font" => "Czcionka opisu ankiety"
// ed.prevFocus: "Focus previous" => "Fokus poprzedni"
// ed.nextFocus: "Focus next" => "Ostrość następna"
// ed.saveTheme: "Save Theme" => "Zapisz motyw"
// ed.saveThemeTooltip: "Save Theme" => "Zapisz motyw"
// lg.page_requireName: "Make page required" => "Ustaw stronę jako wymaganą"
// lg.panel_requireName: "Make page required" => "Ustaw stronę jako wymaganą"
// signaturepad.signatureWidth: "Signature area width" => "Szerokość obszaru podpisu"
// signaturepad.signatureHeight: "Signature area height" => "Wysokość obszaru podpisu"
// signaturepad.signatureAutoScaleEnabled: "Auto-scale the signature area" => "Automatyczne skalowanie obszaru podpisu"
// signaturepad.penMinWidth: "Minimum pen width" => "Minimalna szerokość pisaka"
// signaturepad.penMaxWidth: "Maximum pen width" => "Maksymalna szerokość pisaka"
// theme.coverDescriptionPosition: "Description position" => "Opis pozycja"
// ed.propertyGridNoResultsFound: "No results found" => "Nie znaleziono wyników"
// pv.leftRight: "Left and right" => "Lewy i prawy"
// p.sourceType: "Source type" => "Typ źródła"
// p.fitToContainer: "Fit to container" => "Pasuje do pojemnika"
// p.setValueExpression: "Set value expression" => "Wyrażenie wartości zadanej"
// ed.choicesLoadedFromWebText: "Choices are loaded from a web service." => "Opcje są ładowane z usługi internetowej."
// ed.choicesLoadedFromWebLinkText: "Go to settings" => "Przejdź do ustawień"
// ed.choicesLoadedFromWebPreviewTitle: "Preview of loaded choice options" => "Podgląd wczytanych opcji wyboru"