import { setupLocale } from "survey-creator-core";

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
  // Creator tabs
  tabs: {
    preview: "Testuj ankietę",
    theme: "Tematy",
    translation: "Tłumaczenie",
    designer: "Projektant ankiety",
    json: "JSON Editor",
    logic: "Logika"
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
  toolboxCategories: {
    general: "Ogólne",
    choice: "Pytania wyboru",
    text: "Pytania dotyczące wprowadzania tekstu",
    containers: "Pojemniki",
    matrix: "Pytania macierzowe",
    misc: "Różne"
  },
  // Strings in SurveyJS Creator
  ed: {
    defaultLocale: "Domyślne ({0})",
    survey: "Ankieta",
    settings: "Ustawienia",
    settingsTooltip: "Otwórz ustawienia",
    surveySettings: "Ustawienia ankiety",
    surveySettingsTooltip: "Ustawienia ankiety",
    themeSettings: "Ustawienia motywu",
    themeSettingsTooltip: "Ustawienia motywu",
    creatorSettingTitle: "Ustawienia twórcy",
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
    defaultV2Theme: "Domyślny",
    modernTheme: "Nowoczesny",
    defaultTheme: "Domyślne (starsze)",
    testSurveyAgain: "Testuj ponownie",
    testSurveyWidth: "Szerokość ankiety: ",
    navigateToMsg: "Trzeba było nawigować do",
    saveSurvey: "Zapisz ankietę",
    saveSurveyTooltip: "Zapisz ankietę",
    saveTheme: "Zapisz motyw",
    saveThemeTooltip: "Zapisz motyw",
    jsonHideErrors: "Ukryj błędy",
    jsonShowErrors: "Pokaż błędy",
    undo: "Cofnij",
    redo: "Ponów",
    undoTooltip: "Cofanie ostatniej zmiany",
    redoTooltip: "Ponowne wprowadzanie zmian",
    expandTooltip: "Rozszerzać",
    collapseTooltip: "Zapaść",
    expandAllTooltip: "Rozwiń wszystko",
    collapseAllTooltip: "Zwiń wszystko",
    zoomInTooltip: "Powiększenie",
    zoom100Tooltip: "Powiększenie do 100%",
    zoomOutTooltip: "Pomniejszanie",
    lockQuestionsTooltip: "Zablokuj stan rozwijania/zwijania dla pytań",
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
    toolboxFilteredTextPlaceholder: "Wpisz, aby wyszukać...",
    toolboxNoResultsFound: "Nie znaleziono wyników",
    propertyGridFilteredTextPlaceholder: "Wpisz, aby wyszukać...",
    propertyGridNoResultsFound: "Nie znaleziono wyników",
    propertyGridPlaceholderTitle: "Rozpocznij konfigurowanie formularza",
    propertyGridPlaceholderDescription: "Kliknij dowolną ikonę kategorii, aby zapoznać się z ustawieniami ankiety. Dodatkowe ustawienia staną się dostępne po dodaniu elementu ankiety do powierzchni projektowej.",
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
    addLanguageTooltip: "Dodaj język",
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
    translateUsigAIFrom: "Przetłumacz z: ",
    translationDialogTitle: "Nieprzetłumaczone ciągi znaków",
    translationMergeLocaleWithDefault: "Scalanie {0} z domyślnymi ustawieniami regionalnymi",
    translationPlaceHolder: "Tłumaczenie...",
    translationSource: "Źródło: ",
    translationTarget: "Cel: ",
    translationYouTubeNotSupported: "Linki do YouTube nie są obsługiwane.",
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
    pagePlaceHolder: "Strona jest pusta. Przeciągnij element z przybornika lub kliknij przycisk poniżej.",
    imagePlaceHolder: "Przeciągnij i upuść obraz tutaj lub kliknij przycisk poniżej i wybierz obraz do przesłania",
    surveyPlaceHolderMobile: "Kliknij przycisk \"Dodaj pytanie\" poniżej, aby rozpocząć tworzenie formularza.",
    surveyPlaceholderTitle: "Twój formularz jest pusty",
    surveyPlaceholderTitleMobile: "Twój formularz jest pusty",
    surveyPlaceholderDescription: "Przeciągnij element z przybornika lub kliknij przycisk poniżej.",
    surveyPlaceholderDescriptionMobile: "Przeciągnij element z przybornika lub kliknij przycisk poniżej.",
    previewPlaceholderTitle: "Brak podglądu",
    previewPlaceholderTitleMobile: "Brak podglądu",
    previewPlaceholderDescription: "Ankieta nie zawiera żadnych widocznych elementów.",
    previewPlaceholderDescriptionMobile: "Ankieta nie zawiera żadnych widocznych elementów.",
    translationsPlaceholderTitle: "Brak ciągów do tłumaczenia",
    translationsPlaceholderTitleMobile: "Brak ciągów do tłumaczenia",
    translationsPlaceholderDescription: "Dodaj elementy do formularza lub zmień filtr ciągów na pasku narzędzi.",
    translationsPlaceholderDescriptionMobile: "Dodaj elementy do formularza lub zmień filtr ciągów na pasku narzędzi.",
    pagePlaceHolderMobile: "Kliknij przycisk \"Dodaj pytanie\" poniżej, aby dodać nowy element do strony.",
    panelPlaceHolderMobile: "Kliknij przycisk \"Dodaj pytanie\" poniżej, aby dodać nowy element do panelu.",
    imagePlaceHolderMobile: "Kliknij poniższy przycisk i wybierz obraz do przesłania",
    imageChooseImage: "Wybierz obraz",
    addNewTypeQuestion: "Dodaj {0}", //{0} is localizable question type
    chooseLogoPlaceholder: "[LOGO]",
    choices_Item: "Przedmiot ",
    selectFile: "Wybierz plik",
    removeFile: "Usuń plik",
    lg: {
      addNewItem: "Dodaj nową regułę",
      empty_tab: "Utwórz regułę, aby dostosować przepływ ankiety.",
      logicPlaceholderTitle: "Brak reguł logicznych",
      logicPlaceholderTitleMobile: "Brak reguł logicznych",
      logicPlaceholderDescription: "Utwórz regułę, aby dostosować przepływ ankiety.",
      logicPlaceholderDescriptionMobile: "Utwórz regułę, aby dostosować przepływ ankiety.",
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
      question_resetValueText: "Zresetuj wartość dla pytania: {0}", //{0} question name.
      question_setValueText: "Przypisz wartość: {1} do pytania: {0}",
      column_visibilityText: "Uwidocznienie {0}  {1}pytania", //{0} column name, {1} question name
      column_enableText: "Ustaw kolumnę {0} pytania{1} włączyć", //{0} column name, {1} question name
      column_requireText: "Ustaw kolumnę {0} pytania {1} wymagane", //{0} column name, {1} question name
      column_resetValueText: "Zresetuj wartość komórki dla kolumny: {0}", //{0} column name
      column_setValueText: "Przypisz wartość komórki: {1} do kolumny: {0}", //{0} column name and {1} setValueExpression
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
    panel: {
      name: "Nazwa panelu",
      title: "Tytuł panelu",
      description: "Opis panelu",
      visibleIf: "Uwidocznij panel, jeśli",
      requiredIf: "Ustaw panel jako wymagany, jeśli",
      questionOrder: "Kolejność pytań w panelu",
      page: "Strona nadrzędna",
      startWithNewLine: "Wyświetlanie panelu w nowym wierszu",
      state: "Stan zwijania panelu",
      width: "Szerokość panelu w linii",
      minWidth: "Minimalna szerokość panelu",
      maxWidth: "Maksymalna szerokość panelu",
      showNumber: "Numeruj ten panel"
    },
    panellayoutcolumn: {
      effectiveWidth: "Szerokość efektywna, %",
      questionTitleWidth: "Szerokość tytułu pytania, px"
    },
    paneldynamic: {
      name: "Nazwa panelu",
      title: "Tytuł panelu",
      description: "Opis panelu",
      visibleIf: "Uwidocznij panel, jeśli",
      requiredIf: "Ustaw panel jako wymagany, jeśli",
      page: "Przenieś panel na stronę",
      startWithNewLine: "Wyświetlanie panelu w nowym wierszu",
      state: "Stan zwijania panelu",
      width: "Szerokość panelu w linii",
      minWidth: "Minimalna szerokość panelu",
      maxWidth: "Maksymalna szerokość panelu",
      confirmDelete: "Potwierdź usunięcie panelu",
      templateDescription: "Wzorzec opisu panelu",
      templateTitle: "Wzorzec tytułu panelu",
      noEntriesText: "Pusty tekst panelu",
      templateTabTitle: "Wzorzec tytułu tabulatora",
      tabTitlePlaceholder: "Symbol zastępczy tytułu tabulatora",
      templateVisibleIf: "Uwidocznij pojedynczy panel, jeśli",
      showNumber: "Numerowanie panelu",
      titleLocation: "Wyrównanie tytułu panelu",
      descriptionLocation: "Wyrównanie opisu panelu",
      templateQuestionTitleLocation: "Wyrównanie tytułu pytania",
      templateQuestionTitleWidth: "Szerokość tytułu pytania",
      templateErrorLocation: "Wyrównanie komunikatu o błędzie",
      newPanelPosition: "Nowa lokalizacja panelu",
      showRangeInProgress: "Pokazywanie paska postępu",
      keyName: "Zapobiegaj zduplikowanym odpowiedziom w następującym pytaniu"
    },
    question: {
      name: "Nazwa pytania",
      title: "Tytuł pytania",
      description: "Opis pytania",
      visibleIf: "Uwidocznij pytanie, jeśli",
      requiredIf: "Zadbaj o to, aby pytanie było wymagane, jeśli",
      page: "Strona nadrzędna",
      state: "Stan zwinięcia pola pytania",
      showNumber: "Ponumeruj to pytanie",
      titleLocation: "Wyrównanie tytułu pytania",
      descriptionLocation: "Wyrównanie opisu pytania",
      errorLocation: "Wyrównanie komunikatu o błędzie",
      indent: "Zwiększ wcięcie wewnętrzne",
      width: "Szerokość pytania w tekście",
      minWidth: "Minimalna szerokość pytania",
      maxWidth: "Maksymalna szerokość pytania",
      textUpdateMode: "Aktualizowanie wartości pola wejściowego"
    },
    signaturepad: {
      signatureWidth: "Szerokość obszaru podpisu",
      signatureHeight: "Wysokość obszaru podpisu",
      signatureAutoScaleEnabled: "Automatyczne skalowanie obszaru podpisu",
      showPlaceholder: "Pokazywanie symbolu zastępczego",
      placeholder: "Tekst zastępczy",
      placeholderReadOnly: "Tekst zastępczy w trybie tylko do odczytu lub podglądu",
      allowClear: "Pokaż przycisk Wyczyść w obszarze podpisu",
      penMinWidth: "Minimalna szerokość pisaka",
      penMaxWidth: "Maksymalna szerokość pisaka",
      penColor: "Kolor obrysu"
    },
    comment: {
      rows: "Wysokość pola wejściowego (w wierszach)"
    },
    showQuestionNumbers: "Show question numbers",
    questionStartIndex: "Question start index (1, 2 or 'A', 'a')",
    expression: {
      name: "Nazwa wyrażenia",
      title: "Tytuł wyrażenia",
      description: "Opis wyrażenia",
      expression: "Wyrażenie"
    },
    trigger: {
      expression: "Wyrażenie"
    },
    calculatedvalue: {
      expression: "Wyrażenie"
    },
    // survey templates
    survey: {
      title: "Tytuł",
      description: "Opis ankiety",
      readOnly: "Ustawianie ankiety jako tylko do odczytu"
    },
    page: {
      name: "Nazwa strony",
      title: "Tytuł",
      description: "Opis strony",
      visibleIf: "Spraw, aby strona była widoczna, jeśli",
      requiredIf: "Ustaw stronę jako wymaganą, jeśli",
      timeLimit: "Limit czasu na zakończenie strony (w sekundach)",
      questionOrder: "Kolejność pytań na stronie"
    },
    matrixdropdowncolumn: {
      name: "Nazwa kolumny",
      title: "Tytuł kolumny",
      isUnique: "Zapobieganie zduplikowanym odpowiedziom",
      width: "Szerokość kolumny",
      minWidth: "Minimalna szerokość kolumny",
      rows: "Wysokość pola wejściowego (w wierszach)",
      visibleIf: "Ustaw kolumnę jako widoczną, jeśli",
      requiredIf: "Ustaw kolumnę jako wymaganą, jeśli",
      showInMultipleColumns: "Każda opcja w osobnej kolumnie"
    },
    multipletextitem: {
      name: "Nazwa",
      title: "Tytuł"
    },
    masksettings: {
      saveMaskedValue: "Zapisywanie zamaskowanej wartości w wynikach ankiety"
    },
    patternmask: {
      pattern: "Wzorzec wartości"
    },
    datetimemask: {
      min: "Wartość minimalna",
      max: "Wartość maksymalna"
    },
    numericmask: {
      allowNegativeValues: "Zezwalaj na wartości ujemne",
      thousandsSeparator: "Separator tysięcy",
      decimalSeparator: "Separator dziesiętny",
      precision: "Precyzja wartości",
      min: "Wartość minimalna",
      max: "Wartość maksymalna"
    },
    currencymask: {
      prefix: "Prefiks waluty",
      suffix: "Sufiks waluty"
    },
    imageHeight: "Image height",
    imageWidth: "Image width",
    valueName: "Value name",
    defaultDisplayValue: "Domyślna wartość wyświetlana dla tekstów dynamicznych",
    rateDescriptionLocation: "Wyrównanie etykiety",
    size: "Rozmiar pola wejściowego (w znakach)",
    cellErrorLocation: "Wyrównanie komunikatu o błędzie komórki",
    enabled: "Włączone",
    disabled: "Niepełnosprawny",
    inherit: "Odziedziczyć",
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
    "listIsEmpty@columns": "Nie masz jeszcze żadnych kolumn",
    "listIsEmpty@gridLayoutColumns": "Nie masz jeszcze kolumn układu",
    "listIsEmpty@rows": "Nie masz jeszcze żadnych wierszy",
    "listIsEmpty@validators": "Nie masz jeszcze żadnych reguł sprawdzania poprawności",
    "listIsEmpty@calculatedValues": "Nie masz jeszcze żadnych zmiennych niestandardowych",
    "listIsEmpty@triggers": "Nie masz jeszcze żadnych wyzwalaczy",
    "listIsEmpty@navigateToUrlOnCondition": "Nie masz jeszcze żadnych linków",
    "listIsEmpty@pages": "Nie masz jeszcze żadnych stron",
    "addNew@choices": "Dodaj wybór",
    "addNew@columns": "Dodaj nową kolumnę",
    "addNew@rows": "Dodaj nowy wiersz",
    "addNew@validators": "Dodaj nową regułę",
    "addNew@calculatedValues": "Dodaj nową zmienną",
    "addNew@triggers": "Dodaj nowy wyzwalacz",
    "addNew@navigateToUrlOnCondition": "Dodaj nowy adres URL",
    "addNew@pages": "Dodaj nową stronę",
    expressionIsEmpty: "Wyrażenie jest puste",
    value: "Wartość",
    text: "Etykieta",
    rowid: "Identyfikator wiersza",
    imageLink: "Adres URL obrazu lub filmu",
    columnEdit: "Edit column: {0}",
    itemEdit: "Edit item: {0}",
    url: "URL",
    path: "Path",
    choicesbyurl: {
      url: "Adres URL usługi sieci Web",
      valueName: "Pobierz wartości z następującego pola JSON:"
    },
    titleName: "Title name",
    imageLinkName: "Pobierz adresy URL obrazów z następującego pola JSON:",
    allowEmptyResponse: "Zezwalaj na pustą odpowiedź",
    titlePlaceholder: "Tytuł",
    surveyTitlePlaceholder: "Tytuł ankiety",
    pageTitlePlaceholder: "Strona {num}",
    startPageTitlePlaceholder: "Strona startowa",
    descriptionPlaceholder: "Opis",
    surveyDescriptionPlaceholder: "Opis",
    pageDescriptionPlaceholder: "Opis",
    textWrapEnabled: "Opcje zawijania",
    showOtherItem: "Czy możliwa własna odpowiedź",
    otherText: "Other item text",
    showNoneItem: "Zezwalaj na opcję Brak",
    showRefuseItem: "Zezwól na opcję Odmów odpowiedzi",
    showDontKnowItem: "Zezwól na opcję Nie wiem",
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
    allowCustomChoices: "Zezwalaj na niestandardowe wybory",
    visible: "Czy widoczne?",
    isRequired: "Czy wymagalne?",
    markRequired: "Oznacz jako wymagane",
    removeRequiredMark: "Usuń wymagany znacznik",
    eachRowRequired: "Wymagaj odpowiedzi dla wszystkich wierszy",
    eachRowUnique: "Zapobieganie zduplikowanym odpowiedziom w wierszach",
    requiredErrorText: "Komunikat o błędzie \"Wymagane\"",
    startWithNewLine: "Czy rozpoczyna się nową linią?",
    rows: "Liczba wierszy",
    cols: "Kolumny",
    placeholder: "Input place holder",
    showPreview: "Show preview area",
    storeDataAsText: "Store file content in JSON result as text",
    maxSize: "Maximum file size in bytes",
    rowCount: "Row count",
    columnLayout: "Układ kolumn",
    addRowButtonLocation: "Lokalizacja przycisku Dodaj wiersz",
    transposeData: "Transponowanie wierszy do kolumn",
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
    clearInvisibleValues: "Usuń niewidoczne odpowiedzi",
    cookieName: "Cookie name (to disable run survey two times locally)",
    partialSendEnabled: "Send survey results on page next",
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
    navigationButtonsLocation: "Wyrównanie przycisków nawigacyjnych",
    showPrevButton: "Show previous button (user may return on previous page)",
    firstPageIsStartPage: "The first page in the survey is a started page.",
    showCompletePage: "Show the completed page at the end (completedHtml)",
    autoAdvanceEnabled: "On answering all questions, go to the next page automatically",
    autoAdvanceAllowComplete: "Wypełnij ankietę automatycznie",
    showProgressBar: "Show progress bar",
    progressBarLocation: "Wyrównanie paska postępu",
    questionTitleLocation: "Question title location",
    questionTitleWidth: "Szerokość tytułu pytania",
    requiredMark: "The question required symbol(s)",
    questionTitleTemplate: "Question title template, default is: '{no}. {require} {title}'",
    questionErrorLocation: "Question error location",
    autoFocusFirstQuestion: "Focus first question on changing the page",
    questionOrder: "Elements order on the page",
    timeLimit: "Maximum time to finish the survey",
    timeLimitPerPage: "Maximum time to finish a page in the survey",
    showTimer: "Korzystanie z minutnika",
    timerLocation: "Show timer panel",
    timerInfoMode: "Show timer panel mode",
    renderMode: "Render mode",
    allowAddPanel: "Allow adding a panel",
    allowRemovePanel: "Allow removing the panel",
    addPanelText: "Adding panel text",
    removePanelText: "Removing panel text",
    isSinglePage: "Show all elements on one page",
    html: "Znaczniki HTML",
    setValue: "Odpowiedź",
    dataFormat: "Format obrazu",
    allowAddRows: "Zezwalaj na dodawanie wierszy",
    allowRemoveRows: "Zezwalaj na usuwanie wierszy",
    allowRowReorder: "Zezwalaj na przeciąganie i upuszczanie wierszy",
    responsiveImageSizeHelp: "Nie ma zastosowania, jeśli określisz dokładną szerokość lub wysokość obrazu.",
    minImageWidth: "Minimalna szerokość obrazu",
    maxImageWidth: "Maksymalna szerokość obrazu",
    minImageHeight: "Minimalna wysokość obrazu",
    maxImageHeight: "Maksymalna wysokość obrazu",
    minValue: "Wartość minimalna",
    maxValue: "Wartość maksymalna",
    caseInsensitive: "Bez uwzględniania wielkości liter",
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
    maxCommentLength: "Maksymalna długość komentarza (w znakach)",
    commentAreaRows: "Wysokość obszaru komentarza (w wierszach)",
    autoGrowComment: "W razie potrzeby automatycznie rozwiń obszar komentarza",
    allowResizeComment: "Zezwalaj użytkownikom na zmianę rozmiaru obszarów tekstu",
    textUpdateMode: "Aktualizowanie wartości pytania tekstowego",
    maskType: "Typ maski wprowadzania",
    autoFocusFirstError: "Ustaw fokus na pierwszej nieprawidłowej odpowiedzi",
    checkErrorsMode: "Sprawdzanie poprawności uruchamiania",
    validateVisitedEmptyFields: "Weryfikowanie pustych pól w przypadku utraty fokusu",
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
    searchMode: "Tryb wyszukiwania",
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
    panelCount: "Początkowa liczba paneli",
    minPanelCount: "Minimalna liczba paneli",
    maxPanelCount: "Maksymalna liczba paneli",
    panelsState: "Stan rozwinięcia panelu wewnętrznego",
    prevPanelText: "Poprzednia etykietka przycisku panelu",
    nextPanelText: "Przycisk Następny panel — etykietka narzędzia",
    removePanelButtonLocation: "Usuń położenie przycisku panelu",
    hideIfRowsEmpty: "Ukryj pytanie, jeśli nie ma wierszy",
    hideColumnsIfEmpty: "Ukryj kolumny, jeśli nie ma wierszy",
    rateValues: "Niestandardowe wartości stawek",
    rateCount: "Liczba stawek",
    autoGenerate: "Jak określić wartości stawek?",
    hideIfChoicesEmpty: "Ukryj pytanie, jeśli nie zawiera opcji wyboru",
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
    logoWidth: "Szerokość logo (w wartościach akceptowanych przez CSS)",
    logoHeight: "Wysokość logo (w wartościach akceptowanych przez CSS)",
    readOnly: "Tylko do odczytu",
    enableIf: "Edytowalne, jeśli",
    noRowsText: "Komunikat \"Brak wierszy\"",
    separateSpecialChoices: "Oddzielne opcje specjalne (Brak, Inne, Wybierz wszystko)",
    choicesFromQuestion: "Kopiowanie opcji z następującego pytania",
    choicesFromQuestionMode: "Które opcje skopiować?",
    choiceValuesFromQuestion: "Użyj wartości z poniższego pytania typu matrix, kolumna lub pytanie panelowe jako identyfikatory wyborów",
    choiceTextsFromQuestion: "Użyj wartości z poniższego pytania macierzowego, kolumnowego lub panelowego jako tekstów wyboru",
    progressBarShowPageTitles: "Wyświetlanie tytułów stron na pasku postępu",
    progressBarShowPageNumbers: "Wyświetlanie numerów stron na pasku postępu",
    showCommentArea: "Pokaż obszar komentarza",
    commentPlaceholder: "Symbol zastępczy obszaru komentarza",
    displayRateDescriptionsAsExtremeItems: "Wyświetlanie opisów szybkości jako wartości ekstremalnych",
    rowOrder: "Kolejność wierszy",
    columnsLayout: "Układ kolumn",
    columnColCount: "Liczba kolumn zagnieżdżonych",
    correctAnswer: "Prawidłowa odpowiedź",
    defaultPanelValue: "Wartości domyślne",
    cells: "Teksty komórek",
    fileInputPlaceholder: "Wybierz plik lub wklej link do pliku...",
    keyName: "Kolumna klucza",
    itemvalue: {
      visibleIf: "Uwidocznij opcję, jeśli",
      enableIf: "Spraw, aby opcja była wybieralna, jeśli"
    },
    "itemvalue@rows": {
      visibleIf: "Uwidocznij wiersz, jeśli",
      enableIf: "Umożliwia edycję wiersza, jeśli"
    },
    imageitemvalue: {
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
    previewMode: "Tryb podglądu",
    gridLayoutEnabled: "Włączanie układu siatki",
    gridLayoutColumns: "Kolumny układu siatki",
    maskSettings: "Ustawienia maski",
    detailErrorLocation: "Wyrównanie komunikatu o błędzie rozwijania wiersza",
    // Creator tabs
    tabs: {
      panel: {
        layout: "Układ panelu"
      },
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
      mask: "Ustawienia maski wprowadzania",
      layout: {
        panel: "Układ",
        question: "Układ",
        base: "Układ"
      },
      data: "Dane",
      validation: "Walidacja",
      cells: "Teksty komórek",
      showOnCompleted: "Ankieta zakończona",
      logo: "Logo w tytule ankiety",
      slider: "Suwak",
      expression: "Wyrażenie",
      questionSettings: "Ustawienia pytań",
      header: "Nagłówek",
      background: "Tło",
      appearance: "Wygląd",
      accentColors: "Akcenty kolorystyczne",
      surfaceBackground: "Tło powierzchni",
      scaling: "Skalowanie",
      others: "Inni"
    },
    editProperty: "Edit property '{0}'",
    items: "Items",
    choicesVisibleIf: "Wybory są widoczne, jeśli",
    choicesEnableIf: "Wybory można wybrać, jeśli:",
    columnsEnableIf: "Kolumny są widoczne, jeśli",
    rowsEnableIf: "Wiersze są widoczne, jeśli",
    innerIndent: "Dodawanie wcięć wewnętrznych",
    copyDefaultValueFromLastEntry: "Domyślnie używaj odpowiedzi z ostatniego wpisu",
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
    verticalAlign: "Wyrównanie w pionie",
    alternateRows: "Alternatywne wiersze",
    columnsVisibleIf: "Kolumny są widoczne, jeśli",
    rowsVisibleIf: "Wiersze są widoczne, jeśli",
    otherPlaceholder: "Symbol zastępczy obszaru komentarza",
    filePlaceholder: "Tekst zastępczy pliku",
    photoPlaceholder: "Tekst zastępczy zdjęcia",
    fileOrPhotoPlaceholder: "Tekst zastępczy pliku lub zdjęcia",
    rateType: "Rodzaj stawki",
    url_placeholder: "Przykład: https://api.example.com/books",
    path_placeholder: "Np.: kategorie.beletrystyka",
    questionStartIndex_placeholder: "Np.: a)",
    width_placeholder: "Np.: 6 cali",
    minWidth_placeholder: "Przykład: 600 pikseli",
    maxWidth_placeholder: "Przykład: 50%",
    imageHeight_placeholder: "Automatycznie",
    imageWidth_placeholder: "Automatycznie",
    itemTitleWidth_placeholder: "Przykład: 100px",
    theme: {
      themeName: "Kompozycja",
      isPanelless: "Wygląd pytania",
      editorPanel: "Tło i promień narożnika",
      questionPanel: "Tło i promień narożnika",
      primaryColor: "Kolor akcentujący",
      panelBackgroundTransparency: "Krycie tła panelu",
      questionBackgroundTransparency: "Nieprzezroczystość tła pytania",
      fontSize: "Rozmiar czcionki",
      scale: "Skala",
      cornerRadius: "Promień naroża",
      advancedMode: "Tryb zaawansowany",
      pageTitle: "Czcionka tytułu",
      pageDescription: "Czcionka opisu",
      questionTitle: "Czcionka tytułu",
      questionDescription: "Czcionka opisu",
      editorFont: "Czcionka",
      backgroundOpacity: "Nieprzezroczystość",
      "--sjs-font-family": "Rodzina czcionek",
      "--sjs-general-backcolor-dim": "Kolor tła",
      "--sjs-primary-backcolor": "Tło akcentu",
      "--sjs-primary-forecolor": "Akcent na pierwszym planie",
      "--sjs-special-red": "Komunikaty o błędach",
      "--sjs-shadow-small": "Efekty cienia",
      "--sjs-shadow-inner": "Efekty cienia",
      "--sjs-border-default": "Kolory"
    },
    "header@header": {
      headerView: "Widok",
      logoPosition: "Pozycja logo",
      surveyTitle: "Czcionka tytułu ankiety",
      surveyDescription: "Czcionka opisu ankiety",
      headerTitle: "Czcionka tytułu ankiety",
      headerDescription: "Czcionka opisu ankiety",
      inheritWidthFrom: "Szerokość obszaru zawartości",
      textAreaWidth: "Szerokość tekstu",
      backgroundColorSwitch: "Kolor tła",
      backgroundImage: "Obraz w tle",
      backgroundImageOpacity: "Nieprzezroczystość",
      overlapEnabled: "Zachodzić na siebie",
      logoPositionX: "Pozycja logo",
      titlePositionX: "Pozycja tytułu",
      descriptionPositionX: "Opis pozycja"
    }
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
    selected: "Wybrany",
    unselected: "Niezaznaczone",
    decimal: "dziesiętny",
    currency: "waluta",
    percent: "procent",
    firstExpanded: "Pierwszy panel jest rozwinięty",
    off: "Ukryj numery pytań",
    list: "Lista",
    carousel: "Karuzela",
    tab: "Karty",
    progressTop: "Nawigator paneli + pasek postępu u góry",
    progressBottom: "Nawigator panelu + pasek postępu u dołu",
    progressTopBottom: "Nawigator panelu + pasek postępu u góry i u dołu",
    horizontal: "Poziomy",
    vertical: "Pionowy",
    top: "Do góry",
    bottom: "Dno",
    topBottom: "Góra i dół",
    both: "Obie",
    left: "Lewy",
    right: "Prawy",
    center: "Centrum",
    leftRight: "Lewy i prawy",
    middle: "Środek",
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
    edit: "Edytowalny",
    display: "Tylko do odczytu",
    contain: "Zawierać",
    cover: "Pokryć",
    fill: "Wypełnić",
    next: "Następny",
    last: "Ostatni",
    onComplete: "Po zakończeniu ankiety",
    onHidden: "Gdy pytanie zostanie ukryte",
    onHiddenContainer: "Gdy pytanie lub jego panel/strona zostaną ukryte",
    clearInvisibleValues: {
      none: "Nigdy"
    },
    clearIfInvisible: {
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
    autocomplete: {
      name: "Imię i nazwisko",
      "honorific-prefix": "Przedrostek",
      "given-name": "Imię",
      "additional-name": "Drugie imię",
      "family-name": "Nazwisko",
      "honorific-suffix": "Przyrostek",
      nickname: "Przydomek",
      "organization-title": "Stanowisko",
      username: "Nazwa użytkownika",
      "new-password": "Nowe hasło",
      "current-password": "Aktualne hasło",
      organization: "Nazwa organizacji",
      "street-address": "Pełna ulica i numer domu",
      "address-line1": "Adres (wiersz 1)",
      "address-line2": "Wiersz adresu 2",
      "address-line3": "Adres (wiersz 3)",
      "address-level4": "Adres poziomu 4",
      "address-level3": "Adres poziomu 3",
      "address-level2": "Adres poziomu 2",
      "address-level1": "Adres poziomu 1",
      country: "Kod kraju",
      "country-name": "Nazwa kraju",
      "postal-code": "Kod pocztowy",
      "cc-name": "Imię i nazwisko posiadacza karty",
      "cc-given-name": "Imię posiadacza karty",
      "cc-additional-name": "Drugie imię posiadacza karty",
      "cc-family-name": "Nazwisko posiadacza karty",
      "cc-number": "Numer karty kredytowej",
      "cc-exp": "Data ważności",
      "cc-exp-month": "Miesiąc wygaśnięcia",
      "cc-exp-year": "Rok wygaśnięcia",
      "cc-csc": "Kod zabezpieczający karty",
      "cc-type": "Rodzaj karty kredytowej",
      "transaction-currency": "Waluta transakcji",
      "transaction-amount": "Kwota transakcji",
      language: "Preferowany język",
      bday: "Urodziny",
      "bday-day": "Dzień urodzin",
      "bday-month": "Miesiąc urodzin",
      "bday-year": "Rok urodzin",
      sex: "Płeć",
      url: "Adres URL strony internetowej",
      photo: "Zdjęcie profilowe",
      tel: "Numer telefonu",
      "tel-country-code": "Numer kierunkowy kraju do telefonu",
      "tel-national": "Krajowy numer telefonu",
      "tel-area-code": "Numer kierunkowy",
      "tel-local": "Lokalny numer telefonu",
      "tel-local-prefix": "Prefiks telefonu lokalnego",
      "tel-local-suffix": "Sufiks telefonu lokalnego",
      "tel-extension": "Rozszerzenie telefonu",
      email: "Adres e-mail",
      impp: "Protokół wiadomości błyskawicznych"
    },
    maskType: {
      none: "Żaden",
      pattern: "Deseń",
      numeric: "Numeryczny",
      datetime: "Data i godzina",
      currency: "Waluta"
    },
    inputTextAlignment: {
      auto: "Automatycznie",
      left: "Lewy",
      right: "Prawy"
    },
    all: "Cały",
    page: "Strona",
    survey: "Sondaż",
    onNextPage: "Podczas przełączania do następnej strony",
    onValueChanged: "Po zmianie odpowiedzi",
    onValueChanging: "Zanim odpowiedź zostanie zmieniona",
    questionsOnPageMode: {
      standard: "Oryginalna struktura",
      singlePage: "Pokaż wszystkie pytania na jednej stronie",
      questionPerPage: "Pokaż pojedyncze pytanie na stronie"
    },
    noPreview: "Brak podglądu",
    showAllQuestions: "Pokaż wszystkie pytania",
    showAnsweredQuestions: "Pokaż tylko odpowiedzi na pytania",
    allQuestions: "Pokaż wszystkie pytania",
    answeredQuestions: "Pokaż tylko pytania, na które udzielono odpowiedzi",
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
    auto: "Automatycznie",
    showNavigationButtons: {
      none: "Ukryty"
    },
    timerInfoMode: {
      combined: "Obie"
    },
    addRowButtonLocation: {
      default: "Zależy od układu macierzy"
    },
    panelsState: {
      default: "Użytkownicy nie mogą rozwijać ani zwijać paneli",
      collapsed: "Wszystkie panele są zwinięte",
      expanded: "Wszystkie panele są rozszerzone",
      firstExpanded: "Pierwsze rozszerzone"
    },
    widthMode: {
      static: "Statyczny",
      responsive: "Elastyczne"
    },
    contentMode: {
      image: "Obraz",
      video: "Wideo",
      youtube: "Serwis YouTube"
    },
    displayMode: {
      buttons: "Przyciski",
      dropdown: "Lista rozwijana"
    },
    rateColorMode: {
      default: "Domyślny",
      scale: "Skala"
    },
    scaleColorMode: {
      monochrome: "Monochromatyczny",
      colored: "Kolorowe"
    },
    autoGenerate: {
      "true": "Stworzyć",
      "false": "Wprowadź ręcznie"
    },
    rateType: {
      labels: "Etykiety",
      stars: "Gwiazdy",
      smileys: "Uśmieszki"
    },
    state: {
      default: "Zablokowany"
    },
    showQuestionNumbers: {
      default: "Automatyczne numerowanie",
      on: "Automatyczne numerowanie",
      onPage: "Resetuj na każdej stronie",
      onpanel: "Resetuj na każdym panelu",
      onPanel: "Resetuj na każdym panelu",
      recursive: "Numeracja rekurencyjna",
      onSurvey: "Kontynuuj badanie",
      off: "Brak numeracji"
    },
    descriptionLocation: {
      underTitle: "Pod tytułem pytania",
      underInput: "Pod polem wprowadzania danych"
    },
    selectToRankAreasLayout: {
      horizontal: "Obok opcji do wyboru",
      vertical: "Powyższe wybory"
    },
    displayStyle: {
      decimal: "Dziesiętny",
      currency: "Waluta",
      percent: "Procent",
      date: "Data"
    },
    totalDisplayStyle: {
      decimal: "Dziesiętny",
      currency: "Waluta",
      percent: "Procent",
      date: "Data"
    },
    rowOrder: {
      initial: "Oryginał"
    },
    questionOrder: {
      initial: "Oryginał"
    },
    progressBarLocation: {
      top: "Do góry",
      bottom: "Dno",
      topbottom: "Góra i dół",
      aboveheader: "Nad nagłówkiem",
      belowheader: "Pod nagłówkiem",
      off: "Ukryty"
    },
    sum: "Suma",
    count: "Hrabia",
    min: "Min",
    max: "Max",
    avg: "Avg",
    searchMode: {
      contains: "Contains",
      startsWith: "Zaczyna się od"
    },
    backgroundImageFit: {
      auto: "Automatycznie",
      cover: "Pokryć",
      contain: "Zawierać",
      fill: "Rozciągnąć",
      tile: "Kafelek"
    },
    backgroundImageAttachment: {
      fixed: "Stały",
      scroll: "Przewijać"
    },
    headerView: {
      basic: "Podstawowy",
      advanced: "Zaawansowany"
    },
    inheritWidthFrom: {
      survey: "Tak samo jak ankieta",
      container: "Pasuje do pojemnika"
    },
    backgroundColorSwitch: {
      none: "Żaden",
      accentColor: "Kolor akcentujący",
      custom: "Zwyczaj"
    },
    colorPalette: {
      light: "Światło",
      dark: "Ciemny"
    },
    isPanelless: {
      "false": "Domyślny",
      "true": "Bez paneli"
    },
    progressBarInheritWidthFrom: {
      survey: "Tak samo jak w przypadku ankiety",
      container: "Tak samo jak kontener"
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
  peplaceholder: {
    patternmask: {
      pattern: "Np.: +1(999)-999-99-99"
    },
    datetimemask: {
      pattern: "Np.: mm/dd/rrrr"
    },
    currencymask: {
      prefix: "Przykład: $",
      suffix: "Np.: USD"
    },
    panelbase: {
      questionTitleWidth: "Przykład: 200 pikseli"
    },
    panellayoutcolumn: {
      effectiveWidth: "Przykład: 30%",
      questionTitleWidth: "Przykład: 200px"
    }
  },
  pehelp: {
    panel: {
      name: "Identyfikator panelu, który nie jest widoczny dla respondentów.",
      description: "Wpisz podtytuł panelu.",
      visibleIf: "Użyj ikony magicznej różdżki, aby ustawić regułę warunkową, która określa widoczność panelu.",
      enableIf: "Użyj ikony magicznej różdżki, aby ustawić regułę warunkową, która wyłącza tryb tylko do odczytu dla panelu.",
      requiredIf: "Użyj ikony magicznej różdżki, aby ustawić regułę warunkową, która uniemożliwia przesłanie ankiety, chyba że co najmniej jedno zagnieżdżone pytanie ma odpowiedź.",
      questionTitleLocation: "Dotyczy wszystkich pytań w tym panelu. Jeśli chcesz zastąpić to ustawienie, zdefiniuj reguły wyrównania tytułów dla poszczególnych pytań. Opcja \"Dziedzicz\" stosuje ustawienie na poziomie strony (jeśli jest ustawione) lub na poziomie ankiety (domyślnie \"Góra\").",
      questionTitleWidth: "Ustawia spójną szerokość tytułów pytań, gdy są one wyrównane do lewej strony pól pytań. Akceptuje wartości CSS (px, %, in, pt itp.).",
      questionErrorLocation: "Ustawia lokalizację komunikatu o błędzie w odniesieniu do wszystkich pytań w panelu. Opcja \"Dziedzicz\" stosuje ustawienie na poziomie strony (jeśli jest ustawione) lub na poziomie ankiety.",
      questionOrder: "Zachowuje pierwotną kolejność pytań lub losuje je. Opcja \"Dziedzicz\" stosuje ustawienie na poziomie strony (jeśli jest ustawione) lub na poziomie ankiety.",
      page: "Przesuwa panel na koniec zaznaczonej strony.",
      innerIndent: "Dodaje odstęp lub margines między zawartością panelu a lewą krawędzią ramki panelu.",
      startWithNewLine: "Usuń zaznaczenie, aby wyświetlić panel w jednym wierszu z poprzednim pytaniem lub panelem. To ustawienie nie ma zastosowania, jeśli panel jest pierwszym elementem formularza.",
      state: "Do wyboru: \"Rozwinięty\" - panel wyświetla się w całości i można go zwinąć; \"Zwinięty\" - panel wyświetla tylko tytuł i opis i można go rozwinąć; \"Zablokowany\" - panel jest wyświetlany w całości i nie można go zwinąć.",
      width: "Ustawia szerokość panelu proporcjonalnie do innych elementów pomiarowych w tej samej linii. Akceptuje wartości CSS (px, %, in, pt itp.).",
      showQuestionNumbers: "Przypisuje numery pytaniom zagnieżdżonym w tym panelu.",
      effectiveColSpan: "Określa, ile kolumn w układzie siatki obejmuje ten panel.",
      gridLayoutColumns: "Ta tabela umożliwia skonfigurowanie każdej kolumny siatki w panelu. Automatycznie ustawia procent szerokości dla każdej kolumny na podstawie maksymalnej liczby elementów w wierszu. Aby dostosować układ siatki, ręcznie dostosuj te wartości i zdefiniuj szerokość tytułu dla wszystkich pytań w każdej kolumnie."
    },
    paneldynamic: {
      name: "Identyfikator panelu, który nie jest widoczny dla respondentów.",
      description: "Wpisz podtytuł panelu.",
      visibleIf: "Użyj ikony magicznej różdżki, aby ustawić regułę warunkową, która określa widoczność panelu.",
      enableIf: "Użyj ikony magicznej różdżki, aby ustawić regułę warunkową, która wyłącza tryb tylko do odczytu dla panelu.",
      requiredIf: "Użyj ikony magicznej różdżki, aby ustawić regułę warunkową, która uniemożliwia przesłanie ankiety, chyba że co najmniej jedno zagnieżdżone pytanie ma odpowiedź.",
      templateQuestionTitleLocation: "Dotyczy wszystkich pytań w tym panelu. Jeśli chcesz zastąpić to ustawienie, zdefiniuj reguły wyrównania tytułów dla poszczególnych pytań. Opcja \"Dziedzicz\" stosuje ustawienie na poziomie strony (jeśli jest ustawione) lub na poziomie ankiety (domyślnie \"Góra\").",
      templateQuestionTitleWidth: "Ustawia stałą szerokość tytułów pytań, gdy są one wyrównane do lewej strony pól pytań. Akceptuje wartości CSS (px, %, in, pt itd.).",
      templateErrorLocation: "Ustawia lokalizację komunikatu o błędzie w odniesieniu do pytania z nieprawidłowymi danymi wejściowymi. Wybierz pomiędzy: \"Góra\" - tekst błędu jest umieszczany w górnej części pola pytania; \"Na dole\" — tekst błędu jest umieszczany u dołu pola pytania. Opcja \"Dziedzicz\" stosuje ustawienie na poziomie strony (jeśli jest ustawione) lub na poziomie ankiety (domyślnie \"Góra\").",
      errorLocation: "Ustawia lokalizację komunikatu o błędzie w odniesieniu do wszystkich pytań w panelu. Opcja \"Dziedzicz\" stosuje ustawienie na poziomie strony (jeśli jest ustawione) lub na poziomie ankiety.",
      page: "Przesuwa panel na koniec zaznaczonej strony.",
      innerIndent: "Dodaje odstęp lub margines między zawartością panelu a lewą krawędzią ramki panelu.",
      startWithNewLine: "Usuń zaznaczenie, aby wyświetlić panel w jednym wierszu z poprzednim pytaniem lub panelem. To ustawienie nie ma zastosowania, jeśli panel jest pierwszym elementem formularza.",
      state: "Do wyboru: \"Rozwinięty\" - panel wyświetla się w całości i można go zwinąć; \"Zwinięty\" - panel wyświetla tylko tytuł i opis i można go rozwinąć; \"Zablokowany\" - panel jest wyświetlany w całości i nie można go zwinąć.",
      width: "Ustawia szerokość panelu proporcjonalnie do innych elementów pomiarowych w tej samej linii. Akceptuje wartości CSS (px, %, in, pt itp.).",
      templateTitle: "Wpisz szablon dynamicznych tytułów paneli. Użyj {panelIndex} dla ogólnego położenia panelu i {visiblePanelIndex} dla jego kolejności wśród widocznych paneli. Wstaw te symbole zastępcze do wzoru, aby dodać automatyczną numerację.",
      templateTabTitle: "Wpisz szablon tytułów kart. Użyj {panelIndex} dla ogólnego położenia panelu i {visiblePanelIndex} dla jego kolejności wśród widocznych paneli. Wstaw te symbole zastępcze do wzoru, aby dodać automatyczną numerację.",
      tabTitlePlaceholder: "Tekst zastępczy dla tytułów tabulatorów, który ma zastosowanie, gdy wzorzec tytułu tabulatora nie generuje znaczącej wartości.",
      templateVisibleIf: "To ustawienie umożliwia sterowanie widocznością poszczególnych paneli w panelu dynamicznym. Użyj symbolu zastępczego \"{panel}\", aby odwołać się do bieżącego panelu w wyrażeniu.",
      titleLocation: "To ustawienie jest automatycznie dziedziczone przez wszystkie pytania w tym panelu. Jeśli chcesz zastąpić to ustawienie, zdefiniuj reguły wyrównania tytułów dla poszczególnych pytań. Opcja \"Dziedzicz\" stosuje ustawienie na poziomie strony (jeśli jest ustawione) lub na poziomie ankiety (domyślnie \"Góra\").",
      descriptionLocation: "Opcja \"Dziedzicz\" stosuje ustawienie na poziomie strony (jeśli jest ustawione) lub na poziomie ankiety (domyślnie \"Pod tytułem panelu\").",
      newPanelPosition: "Określa położenie nowo dodanego panelu. Domyślnie nowe panele są dodawane na końcu. Wybierz \"Dalej\", aby wstawić nowy panel po bieżącym.",
      copyDefaultValueFromLastEntry: "Duplikuje odpowiedzi z ostatniego panelu i przypisuje je do następnego dodanego panelu dynamicznego.",
      keyName: "Odwołaj się do nazwy pytania, aby wymagać od użytkownika podania unikatowej odpowiedzi na to pytanie w każdym panelu."
    },
    copyDefaultValueFromLastEntry: "Duplikuje odpowiedzi z ostatniego wiersza i przypisuje je do następnego dodanego wiersza dynamicznego.",
    defaultValueExpression: "To ustawienie umożliwia przypisanie domyślnej wartości odpowiedzi na podstawie wyrażenia. Wyrażenie może zawierać podstawowe obliczenia - '{q1_id} + {q2_id}', wyrażenia logiczne, takie jak '{wiek} > 60' oraz funkcje: 'iif()', 'today()', 'age()', 'min()', 'max()', 'avg()' itp. Wartość określona przez to wyrażenie służy jako początkowa wartość domyślna, która może zostać zastąpiona przez ręczne wprowadzanie danych przez respondenta.",
    resetValueIf: "Użyj ikony magicznej różdżki, aby ustawić regułę warunkową, która określa, kiedy dane wejściowe respondenta są resetowane do wartości na podstawie \"Wyrażenia wartości domyślnej\" lub \"Wyrażenia wartości domyślnej\" lub wartości \"Odpowiedź domyślna\" (jeśli którakolwiek z nich jest ustawiona).",
    setValueIf: "Użyj ikony magicznej różdżki, aby ustawić regułę warunkową, która określa, kiedy uruchomić \"Wyrażenie wartości zestawu\" i dynamicznie przypisać wynikową wartość jako odpowiedź.",
    setValueExpression: "Określ wyrażenie definiujące wartość, która ma zostać ustawiona, gdy zostaną spełnione warunki reguły \"Ustaw wartość, jeśli\". Wyrażenie może zawierać podstawowe obliczenia - '{q1_id} + {q2_id}', wyrażenia logiczne, takie jak '{wiek} > 60' oraz funkcje: 'iif()', 'today()', 'age()', 'min()', 'max()', 'avg()' itp. Wartość określona przez to wyrażenie może zostać zastąpiona przez ręczne wprowadzenie danych przez respondenta.",
    gridLayoutEnabled: "Kreator ankiet umożliwia ręczne dostosowanie szerokości elementów formularza w tekście w celu kontrolowania układu. Jeśli nie przyniesie to pożądanego rezultatu, można włączyć układ siatki, w którym struktury tworzą elementy przy użyciu systemu opartego na kolumnach. Aby skonfigurować kolumny układu, wybierz stronę lub panel i użyj tabeli \"Ustawienia pytań\" → \"Kolumny siatki\". Aby dostosować liczbę kolumn obejmujących pytanie, zaznacz je i ustaw żądaną wartość w polu \"Układ\" → \"Zakres kolumn\".",
    question: {
      name: "Identyfikator pytania, który nie jest widoczny dla respondentów.",
      description: "Wpisz podtytuł pytania.",
      visibleIf: "Użyj ikony magicznej różdżki, aby ustawić regułę warunkową, która określa widoczność pytania.",
      enableIf: "Użyj ikony magicznej różdżki, aby ustawić regułę warunkową, która wyłącza tryb tylko do odczytu dla pytania.",
      requiredIf: "Użyj ikony magicznej różdżki, aby ustawić regułę warunkową, która uniemożliwia przejście do przodu lub przesłanie ankiety, chyba że na pytanie otrzymano odpowiedź.",
      startWithNewLine: "Usuń zaznaczenie, aby wyświetlić pytanie w jednym wierszu z poprzednim pytaniem lub panelem. To ustawienie nie ma zastosowania, jeśli pytanie jest pierwszym elementem formularza.",
      page: "Zmienia położenie pytania na końcu zaznaczonej strony.",
      state: "Do wyboru: \"Rozwinięte\" - pole pytania wyświetla się w całości i można je zwinąć; \"Zwinięte\" - pole pytania wyświetla tylko tytuł i opis i można je rozwinąć; \"Zablokowane\" - pole pytania jest wyświetlane w całości i nie można go zwinąć.",
      titleLocation: "Zastępuje reguły wyrównania tytułów zdefiniowane na poziomie panelu, strony lub ankiety. Opcja \"Dziedzicz\" stosuje wszystkie ustawienia wyższego poziomu (jeśli są ustawione) lub ustawienia na poziomie ankiety (domyślnie \"Góra\").",
      descriptionLocation: "Opcja \"Dziedzicz\" stosuje ustawienie na poziomie ankiety (domyślnie \"Pod tytułem pytania\").",
      errorLocation: "Ustawia lokalizację komunikatu o błędzie w odniesieniu do pytania z nieprawidłowymi danymi wejściowymi. Wybierz pomiędzy: \"Góra\" - tekst błędu jest umieszczany w górnej części pola pytania; \"Na dole\" — tekst błędu jest umieszczany u dołu pola pytania. Opcja \"Dziedzicz\" stosuje ustawienie na poziomie ankiety (domyślnie \"Góra\").",
      indent: "Dodaje spację lub margines między treścią pytania a lewą krawędzią pola pytania.",
      width: "Ustawia szerokość pytania proporcjonalnie do innych elementów ankiety w tym samym wierszu. Akceptuje wartości CSS (px, %, in, pt itp.).",
      surveyvalidator: {
        expression: "Użyj ikony magicznej różdżki, aby ustawić regułę sprawdzania poprawności dla pytania."
      },
      textUpdateMode: "Do wyboru: \"W przypadku utraty fokusu\" - wartość jest aktualizowana, gdy pole wejściowe traci fokus; \"Podczas pisania\" - wartość jest aktualizowana w czasie rzeczywistym, w miarę pisania przez użytkowników. Opcja \"Dziedzicz\" stosuje ustawienie na poziomie ankiety (domyślnie \"Po utracie fokusu\").",
      url: "Możesz użyć dowolnej usługi internetowej jako źródła danych dla pytań wielokrotnego wyboru. Aby wypełnić wartości wyborów, wprowadź adres URL usługi udostępniającej dane.",
      searchMode: "Operacja porównania używana do filtrowania listy rozwijanej.",
      textWrapEnabled: "Długie teksty w opcjach wyboru automatycznie wygenerują podziały wierszy, aby zmieścić się w menu rozwijanym. Usuń zaznaczenie, jeśli chcesz, aby teksty zostały przycięte.",
      effectiveColSpan: "Określa, ile kolumn obejmuje to pytanie w układzie siatki."
    },
    signaturepad: {
      signatureWidth: "Ustawia szerokość wyświetlanego obszaru podpisu i wynikowego obrazu.",
      signatureHeight: "Ustawia wysokość wyświetlanego obszaru podpisu i wynikowego obrazu.",
      signatureAutoScaleEnabled: "Wybierz, czy chcesz, aby obszar podpisu wypełniał całą dostępną przestrzeń w polu pytania, zachowując domyślny współczynnik proporcji 3:2. Po ustawieniu niestandardowych wartości szerokości i wysokości ustawienie zachowa proporcje tych wymiarów."
    },
    file: {
      imageHeight: "Dostosowuje wysokość obrazu w wynikach ankiety.",
      imageWidth: "Dostosowuje szerokość obrazu w wynikach ankiety.",
      allowImagesPreview: "Wyświetla podgląd miniatur przesłanych plików, jeśli to możliwe. Usuń zaznaczenie, jeśli zamiast tego chcesz wyświetlać ikony plików."
    },
    image: {
      contentMode: "Opcja \"Auto\" automatycznie określa odpowiedni tryb wyświetlania - Obraz, Wideo lub YouTube - na podstawie podanego źródłowego adresu URL."
    },
    imagepicker: {
      imageHeight: "Zastępuje minimalne i maksymalne wartości wysokości.",
      imageWidth: "Zastępuje minimalne i maksymalne wartości szerokości.",
      choices: "\"Wartość\" służy jako identyfikator elementu używany w regułach warunkowych; Respondentom wyświetla się \"Tekst\".",
      contentMode: "Wybierz pomiędzy \"Obraz\" i \"Wideo\", aby ustawić tryb zawartości selektora multimediów. W przypadku wybrania opcji \"Obraz\" upewnij się, że wszystkie dostępne opcje są plikami graficznymi w następujących formatach: JPEG, GIF, PNG, APNG, SVG, BMP, ICO. Podobnie, jeśli wybrana jest opcja \"Wideo\", upewnij się, że wszystkie opcje są bezpośrednimi linkami do plików wideo w następujących formatach: MP4, MOV, WMV, FLV, AVI, MKV. Należy pamiętać, że linki do YouTube nie są obsługiwane w przypadku opcji wideo."
    },
    text: {
      size: "To ustawienie zmienia tylko rozmiar pola wejściowego i nie wpływa na szerokość pola pytania. Aby ograniczyć akceptowaną długość danych wejściowych, przejdź do <b>sekcji Walidacja → Maksymalny limit znaków</b>."
    },
    comment: {
      rows: "Ustawia liczbę wyświetlanych wierszy w polu wprowadzania. Jeśli dane wejściowe zajmują więcej wierszy, pojawi się pasek przewijania."
    },
    // survey templates
    survey: {
      readOnly: "Wybierz, czy chcesz uniemożliwić respondentom wypełnianie ankiety.",
      progressBarLocation: "Ustawia położenie paska postępu. Wartość \"Auto\" wyświetla pasek postępu powyżej lub poniżej nagłówka ankiety."
    },
    matrixdropdowncolumn: {
      name: "Identyfikator kolumny, który nie jest widoczny dla respondentów.",
      isUnique: "Po włączeniu tej opcji dla kolumny respondent musi udzielić unikatowej odpowiedzi na każde pytanie w tej kolumnie.",
      rows: "Ustawia liczbę wyświetlanych wierszy w polu wprowadzania. Jeśli dane wejściowe zajmują więcej wierszy, pojawi się pasek przewijania.",
      visibleIf: "Użyj ikony magicznej różdżki, aby ustawić regułę warunkową, która określa widoczność kolumny.",
      enableIf: "Użyj ikony magicznej różdżki, aby ustawić regułę warunkową, która wyłącza tryb tylko do odczytu dla kolumny.",
      requiredIf: "Użyj ikony magicznej różdżki, aby ustawić regułę warunkową, która uniemożliwia przesłanie ankiety, chyba że co najmniej jedno zagnieżdżone pytanie ma odpowiedź.",
      showInMultipleColumns: "Gdy ta opcja jest zaznaczona, tworzy osobną kolumnę dla każdej opcji wyboru.",
      colCount: "Rozmieszcza opcje wyboru w układzie wielokolumnowym. Po ustawieniu wartości 0 opcje są wyświetlane w jednym wierszu. Po ustawieniu wartości -1 rzeczywista wartość jest dziedziczona z właściwości \"Liczba kolumn zagnieżdżonych\" macierzy nadrzędnej."
    },
    caseInsensitive: "Wybierz, czy wielkie i małe litery w wyrażeniu regularnym mają być traktowane jako równoważne.",
    widthMode: "Do wyboru: \"Statyczny\" - ustawia stałą szerokość; \"Responsywny\" - sprawia, że ankieta zajmuje całą szerokość ekranu; \"Auto\" – stosuje jedną z tych dwóch opcji w zależności od użytych typów pytań.",
    cookieName: "Pliki cookie uniemożliwiają użytkownikom dwukrotne wypełnienie tej samej ankiety.",
    logo: "Wklej link do obrazu (bez ograniczeń rozmiaru) lub kliknij ikonę folderu, aby przeglądać plik z komputera (do 64 KB).",
    logoWidth: "Ustawia szerokość logo w jednostkach CSS (px, %, in, pt itd.).",
    logoHeight: "Ustawia wysokość logo w jednostkach CSS (px, %, in, pt itd.).",
    logoFit: "Do wyboru: \"Brak\" - obraz zachowuje swój oryginalny rozmiar; \"Zawieraj\" - rozmiar obrazu jest zmieniany tak, aby pasował przy zachowaniu proporcji; \"Okładka\" - obraz wypełnia całe pole z zachowaniem proporcji; \"Wypełnij\" - obraz jest rozciągany w celu wypełnienia pola bez zachowania jego proporcji.",
    autoAdvanceEnabled: "Wybierz, czy chcesz, aby ankieta automatycznie przechodziła do następnej strony, gdy respondent odpowie na wszystkie pytania na bieżącej stronie. Ta funkcja nie będzie miała zastosowania, jeśli ostatnie pytanie na stronie jest otwarte lub umożliwia udzielenie wielu odpowiedzi.",
    autoAdvanceAllowComplete: "Wybierz, jeśli chcesz, aby ankieta była wypełniana automatycznie po udzieleniu odpowiedzi respondenta na wszystkie pytania.",
    showNavigationButtons: "Ustawia widoczność i położenie przycisków nawigacyjnych na stronie.",
    navigationButtonsLocation: "Określa położenie przycisków nawigacyjnych na stronie.",
    showPreviewBeforeComplete: "Włącz stronę podglądu ze wszystkimi pytaniami lub tylko odpowiedziami.",
    questionTitleLocation: "Dotyczy wszystkich pytań w ankiecie. To ustawienie może zostać zastąpione przez reguły wyrównania tytułu na niższych poziomach: panelu, strony lub pytania. Ustawienie niższego poziomu zastąpi ustawienia wyższego poziomu.",
    requiredMark: "Symbol lub sekwencja symboli wskazująca, że odpowiedź jest wymagana.",
    questionStartIndex: "Wprowadź cyfrę lub literę, od której chcesz rozpocząć numerację.",
    questionErrorLocation: "Ustawia lokalizację komunikatu o błędzie w odniesieniu do pytania z nieprawidłowymi danymi wejściowymi. Wybierz pomiędzy: \"Góra\" - tekst błędu jest umieszczany w górnej części pola pytania; \"Na dole\" — tekst błędu jest umieszczany u dołu pola pytania.",
    autoFocusFirstQuestion: "Wybierz, jeśli chcesz, aby pierwsze pole wejściowe na każdej stronie było gotowe do wprowadzenia tekstu.",
    questionOrder: "Zachowuje pierwotną kolejność pytań lub losuje je. Efekt tego ustawienia jest widoczny tylko na karcie Podgląd.",
    maxTextLength: "Tylko w przypadku pytań tekstowych.",
    maxCommentLength: "Tylko w przypadku komentarzy do pytań.",
    commentAreaRows: "Ustawia liczbę wierszy wyświetlanych w obszarach tekstowych dla komentarzy do pytań. Jeśli dane wejściowe zajmują więcej wierszy, pojawi się pasek przewijania.",
    autoGrowComment: "Zaznacz, jeśli chcesz, aby komentarze do pytań i pytania z długim tekstem automatycznie zwiększały się na podstawie wprowadzonej długości tekstu.",
    allowResizeComment: "Tylko w przypadku komentarzy do pytań i pytań z długim tekstem.",
    calculatedValues: "Zmienne niestandardowe służą jako zmienne pośrednie lub pomocnicze używane w obliczeniach formularzy. Przyjmują dane wejściowe respondentów jako wartości źródłowe. Każda zmienna niestandardowa ma unikatową nazwę i wyrażenie, na którym jest oparta.",
    includeIntoResult: "Wybierz, czy obliczona wartość wyrażenia ma być zapisywana wraz z wynikami ankiety.",
    triggers: "Wyzwalacz to zdarzenie lub warunek oparty na wyrażeniu. Gdy wyrażenie zostanie ocenione na wartość \"true\", wyzwalacz uruchamia akcję. Taka akcja może opcjonalnie mieć pytanie docelowe, na które wpływa.",
    clearInvisibleValues: "Wybierz, czy chcesz wyczyścić wartości pytań ukrytych przez logikę warunkową i kiedy to zrobić.",
    textUpdateMode: "Do wyboru: \"W przypadku utraty fokusu\" - wartość jest aktualizowana, gdy pole wejściowe traci fokus; \"Podczas pisania\" - wartość jest aktualizowana w czasie rzeczywistym, w miarę pisania przez użytkowników.",
    columns: "Lewa wartość służy jako identyfikator kolumny używany w regułach warunkowych, prawa wartość jest wyświetlana respondentom.",
    rows: "Lewa wartość służy jako identyfikator wiersza używany w regułach warunkowych, prawa wartość jest wyświetlana respondentom.",
    columnMinWidth: "Akceptuje wartości CSS (px, %, in, pt itp.).",
    rowTitleWidth: "Akceptuje wartości CSS (px, %, in, pt itp.).",
    totalText: "Opcja widoczna tylko wtedy, gdy co najmniej jedna kolumna zawiera wyrażenie typu Total lub Total.",
    cellErrorLocation: "Ustawia lokalizację komunikatu o błędzie w odniesieniu do komórki z nieprawidłowymi danymi wejściowymi. Opcja \"Dziedzicz\" stosuje ustawienie z właściwości \"Wyrównanie komunikatu o błędzie\".",
    detailErrorLocation: "Ustawia lokalizację komunikatów o błędach dla pytań zagnieżdżonych w sekcjach szczegółowych. Opcja \"Dziedzicz\" stosuje ustawienie z właściwości \"Wyrównanie komunikatu o błędzie\".",
    keyDuplicationError: "Gdy właściwość \"Zapobiegaj zduplikowanym odpowiedziom\" jest włączona, respondent próbujący przesłać zduplikowany wpis otrzyma następujący komunikat o błędzie.",
    totalExpression: "Umożliwia obliczanie wartości całkowitych na podstawie wyrażenia. Wyrażenie może zawierać podstawowe obliczenia ('{q1_id} + {q2_id}'), wyrażenia logiczne ('{age} > 60') i funkcje ('iif()', 'today()', 'age()', 'min()', 'max()', 'avg()' itp.).",
    confirmDelete: "Wyzwala monit z prośbą o potwierdzenie usunięcia wiersza.",
    keyName: "Jeśli określona kolumna zawiera identyczne wartości, ankieta zgłasza błąd \"Nieunikalna wartość klucza\".",
    description: "Wpisz napisy.",
    locale: "Wybierz język, aby rozpocząć tworzenie ankiety. Aby dodać tłumaczenie, przełącz się na nowy język i przetłumacz oryginalny tekst tutaj lub na karcie Tłumaczenia.",
    detailPanelMode: "Ustawia położenie sekcji szczegółów w odniesieniu do wiersza. Do wyboru: \"Brak\" - nie jest dodawane rozszerzenie; \"Pod wierszem\" - pod każdym rzędem macierzy umieszcza się rozwinięcie wiersza; \"Pod wierszem wyświetl tylko rozwinięcie jednego wiersza\" - rozwinięcie jest wyświetlane tylko pod jednym wierszem, pozostałe rozwinięcia wierszy są zwinięte.",
    imageFit: "Do wyboru: \"Brak\" - obraz zachowuje swój oryginalny rozmiar; \"Zawieraj\" - rozmiar obrazu jest zmieniany tak, aby pasował przy zachowaniu proporcji; \"Okładka\" - obraz wypełnia całe pole z zachowaniem proporcji; \"Wypełnij\" - obraz jest rozciągany w celu wypełnienia pola bez zachowania jego proporcji.",
    autoGrow: "Stopniowo zwiększa wysokość pola wprowadzania danych podczas wprowadzania danych. Zastępuje ustawienie \"Wysokość pola wprowadzania (w wierszach)\".",
    allowResize: "Uchwyt zmiany rozmiaru pojawi się w rogu i można go przeciągnąć, aby zmienić rozmiar pola wejściowego.",
    timeLimit: "Przedział czasu w sekundach, po przekroczeniu którego ankieta automatycznie przechodzi do strony z podziękowaniem.",
    timeLimitPerPage: "Przedział czasu w sekundach, po którym ankieta automatycznie przechodzi do następnej strony.",
    validateVisitedEmptyFields: "Włącz tę opcję, aby wyzwolić walidację, gdy użytkownik skupi się na pustym polu wejściowym, a następnie opuści je bez wprowadzania żadnych zmian.",
    page: {
      name: "Identyfikator strony, który nie jest widoczny dla respondentów.",
      description: "Wpisz podtytuł strony.",
      navigationTitle: "Podpis wyświetlany na przycisku nawigacyjnym na pasku postępu lub w spisie treści. Jeśli pozostawisz to pole puste, przycisk nawigacyjny użyje tytułu lub nazwy strony. Aby włączyć pasek postępu lub spis treści, przejdź do \"Ankieta\" → \"Nawigacja\".",
      timeLimit: "Przedział czasu w sekundach, po którym ankieta automatycznie przechodzi do następnej strony.",
      visibleIf: "Użyj ikony magicznej różdżki, aby ustawić regułę warunkową, która określa widoczność strony.",
      enableIf: "Użyj ikony magicznej różdżki, aby ustawić regułę warunkową, która wyłącza tryb tylko do odczytu dla strony.",
      requiredIf: "Użyj ikony magicznej różdżki, aby ustawić regułę warunkową, która uniemożliwia przesłanie ankiety, chyba że co najmniej jedno zagnieżdżone pytanie ma odpowiedź.",
      questionTitleLocation: "Dotyczy wszystkich pytań na tej stronie. Jeśli chcesz zastąpić to ustawienie, zdefiniuj reguły wyrównania tytułów dla poszczególnych pytań lub paneli. Opcja \"Dziedzicz\" stosuje ustawienie na poziomie ankiety (domyślnie \"Góra\").",
      questionTitleWidth: "Ustawia spójną szerokość tytułów pytań, gdy są one wyrównane do lewej strony pól pytań. Akceptuje wartości CSS (px, %, in, pt itp.).",
      questionErrorLocation: "Ustawia lokalizację komunikatu o błędzie w odniesieniu do pytania z nieprawidłowymi danymi wejściowymi. Wybierz pomiędzy: \"Góra\" - tekst błędu jest umieszczany w górnej części pola pytania; \"Na dole\" — tekst błędu jest umieszczany u dołu pola pytania. Opcja \"Dziedzicz\" stosuje ustawienie na poziomie ankiety (domyślnie \"Góra\").",
      questionOrder: "Zachowuje pierwotną kolejność pytań lub losuje je. Opcja \"Dziedzicz\" stosuje ustawienie na poziomie ankiety (domyślnie \"Oryginalne\"). Efekt tego ustawienia jest widoczny tylko na karcie Podgląd.",
      showNavigationButtons: "Ustawia widoczność przycisków nawigacyjnych na stronie. Opcja \"Dziedzicz\" stosuje ustawienie na poziomie ankiety, które domyślnie ma wartość \"Widoczny\".",
      gridLayoutColumns: "Ta tabela umożliwia skonfigurowanie każdej kolumny siatki na stronie. Automatycznie ustawia procent szerokości dla każdej kolumny na podstawie maksymalnej liczby elementów w wierszu. Aby dostosować układ siatki, ręcznie dostosuj te wartości i zdefiniuj szerokość tytułu dla wszystkich pytań w każdej kolumnie."
    },
    timerLocation: "Ustawia położenie czasomierza na stronie.",
    panelsState: "Do wyboru: \"Zablokowany\" - użytkownicy nie mogą rozwijać ani zwijać paneli; \"Zwiń wszystko\" - wszystkie panele rozpoczynają się w stanie zwiniętym; \"Rozwiń wszystko\" - wszystkie panele rozpoczynają się w stanie rozwiniętym; \"Pierwszy rozwinięty\" - początkowo rozwijany jest tylko pierwszy panel.",
    imageLinkName: "Wprowadź nazwę właściwości współużytkowanej w tablicy obiektów zawierających adresy URL obrazów lub plików wideo, które mają być wyświetlane na liście wyborów.",
    choices: "Lewa wartość służy jako identyfikator elementu używany w regułach warunkowych, prawa wartość jest wyświetlana respondentom.",
    title: "Wpisz przyjazny dla użytkownika tytuł do wyświetlenia.",
    waitForUpload: "Gwarantuje, że użytkownicy nie ukończą ankiety, dopóki pliki nie zostaną przekazane.",
    minWidth: "Akceptuje wartości CSS (px, %, in, pt itp.).",
    maxWidth: "Akceptuje wartości CSS (px, %, in, pt itp.).",
    width: "Akceptuje wartości CSS (px, %, in, pt itp.).",
    valueName: "Jeśli ta właściwość nie zostanie ustawiona, odpowiedź będzie przechowywana w polu określonym przez właściwość Name.",
    defaultDisplayValue: "Wartość wyświetlana w pytaniach HTML oraz w dynamicznych tytułach i opisach elementów ankiety, gdy wartość pytania jest pusta.",
    useDisplayValuesInDynamicTexts: "W pytaniach typu jednokrotnego i wielokrotnego wyboru każda opcja wyboru ma identyfikator i wartość wyświetlaną. Po wybraniu tej opcji w pytaniach HTML oraz dynamicznych tytułach i opisach elementów ankiety wyświetlana jest wartość wyświetlana zamiast wartości identyfikatora.",
    clearIfInvisible: "Wybierz, czy chcesz wyczyścić wartości pytań ukryte przez logikę warunkową i kiedy to zrobić. Opcja \"Dziedzicz\" stosuje ustawienie na poziomie ankiety (domyślnie \"Po zakończeniu ankiety\").",
    choicesFromQuestionMode: "Wybierz spośród: \"Wszystkie\" - kopiuje wszystkie opcje wyboru z wybranego pytania; \"Wybrane\" - dynamicznie kopiuje tylko wybrane opcje wyboru; \"Niewybrane\" - dynamicznie kopiuje tylko niezaznaczone opcje wyboru. Opcje \"Brak\" i \"Inne\" są domyślnie kopiowane, jeśli są włączone w pytaniu źródłowym.",
    choiceValuesFromQuestion: "W pytaniach jednokrotnego i wielokrotnego wyboru każda opcja wyboru ma identyfikator i wartość wyświetlaną. To ustawienie określa, która kolumna macierzy lub pytanie typu panel powinno zawierać identyfikatory.",
    choiceTextsFromQuestion: "W pytaniach jednokrotnego i wielokrotnego wyboru każda opcja wyboru ma identyfikator i wartość wyświetlaną. To ustawienie określa, która kolumna macierzy lub pytanie typu panel powinno zawierać tekst wyświetlany.",
    allowCustomChoices: "Zaznacz, aby umożliwić respondentom dodawanie własnych wyborów, jeśli żądana opcja nie jest dostępna na liście rozwijanej. Niestandardowe wybory będą przechowywane tylko tymczasowo na czas trwania bieżącej sesji przeglądarki.",
    showOtherItem: "Po wybraniu tej opcji użytkownicy mogą uwzględnić dodatkowe dane wejściowe w osobnym polu komentarza.",
    separateSpecialChoices: "Wyświetla każdą opcję wyboru specjalnego (\"Brak\", \"Inne\", \"Zaznacz wszystko\") w nowym wierszu, nawet w przypadku korzystania z układu wielokolumnowego.",
    path: "Określ lokalizację w zestawie danych usługi, w której znajduje się docelowa tablica obiektów. Pozostaw puste, jeśli adres URL wskazuje już tablicę.",
    choicesbyurl: {
      valueName: " "
    },
    titleName: "Wprowadź jednolitą nazwę właściwości w tablicy obiektów, która zawiera wartości, które mają być wyświetlane na liście wyborów.",
    allowEmptyResponse: "Zaznacz, aby zezwolić usłudze na zwrócenie pustej odpowiedzi lub tablicy.",
    choicesVisibleIf: "Użyj ikony magicznej różdżki, aby ustawić regułę warunkową, która określa widoczność wszystkich opcji wyboru.",
    rateValues: "Lewa wartość służy jako identyfikator elementu używany w regułach warunkowych, prawa wartość jest wyświetlana respondentom.",
    rating: {
      displayMode: "\"Auto\" wybiera między trybami \"Przyciski\" i \"Rozwijane\" w zależności od dostępnej szerokości. Gdy szerokość jest niewystarczająca do wyświetlenia przycisków, w pytaniu zostanie wyświetlona lista rozwijana."
    },
    valuePropertyName: "Umożliwia łączenie pytań, które dają wyniki w różnych formatach. Gdy takie pytania są połączone ze sobą za pomocą identyfikatora sprzężenia, ta właściwość współużytkowana przechowuje wybrane wartości pytań.",
    searchEnabled: "Wybierz, czy chcesz zaktualizować zawartość menu rozwijanego, aby pasowała do zapytania wyszukiwania wpisywanego przez użytkownika w polu wejściowym.",
    valueTrue: "Wartość, którą należy zapisać w wynikach ankiety, gdy respondenci udzielą pozytywnej odpowiedzi.",
    valueFalse: "Wartość, która ma zostać zapisana w wynikach ankiety, gdy respondenci udzielą odpowiedzi negatywnej.",
    showPreview: "Nie zaleca się wyłączania tej opcji, ponieważ zastępuje ona obraz podglądu i utrudnia użytkownikowi zrozumienie, czy pliki zostały przekazane.",
    needConfirmRemoveFile: "Uruchamia monit z prośbą o potwierdzenie usunięcia pliku.",
    selectToRankEnabled: "Włącz, aby uszeregować tylko wybrane wybory. Użytkownicy będą przeciągać wybrane elementy z listy wyboru, aby uporządkować je w obszarze rankingu.",
    dataList: "Wprowadź listę opcji, które zostaną zasugerowane respondentowi podczas wprowadzania danych.",
    inputSize: "To ustawienie zmienia tylko rozmiar pól wejściowych i nie wpływa na szerokość pola pytania.",
    itemTitleWidth: "Ustawia spójną szerokość dla wszystkich etykiet elementów. Akceptuje wartości CSS (px, %, in, pt itd.).",
    inputTextAlignment: "Wybierz sposób wyrównania wartości wejściowej w polu. Ustawienie domyślne \"Auto\" wyrównuje wartość wejściową do prawej, jeśli stosowane jest maskowanie walutowe lub numeryczne, i do lewej, jeśli nie.",
    altText: "Służy jako substytut, gdy obraz nie może być wyświetlany na urządzeniu użytkownika oraz w celu ułatwienia dostępu.",
    rateColorMode: "Określa kolor wybranego emoji, gdy typ ikony oceny jest ustawiony na \"Emotikony\". Wybierz pomiędzy: \"Domyślny\" - wybrany emoji pojawia się w domyślnym kolorze ankiety; \"Skala\" - wybrany emoji dziedziczy kolor ze skali ocen.",
    expression: {
      name: "Identyfikator wyrażenia, który nie jest widoczny dla respondentów.",
      description: "Wpisz podtytuł wyrażenia.",
      expression: "Wyrażenie może zawierać podstawowe obliczenia ('{q1_id} + {q2_id}'), warunki ('{wiek} > 60') i funkcje ('iif()', 'today()', 'age()', 'min()', 'max()', 'avg()' itp.)."
    },
    storeOthersAsComment: "Wybierz, aby zapisać wartość opcji \"Inne\" jako oddzielną właściwość w wynikach ankiety.",
    format: "Użyj {0} jako symbolu zastępczego dla rzeczywistej wartości.",
    acceptedTypes: "Więcej informacji można znaleźć w opisie atrybutu [accept](https://www.w3schools.com/tags/att_input_accept.asp).",
    columnColCount: "Dotyczy tylko komórek typu Radiogroup i Checkbox.",
    autocomplete: "Więcej informacji można znaleźć w opisie atrybutu [autocomplete](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete).",
    filePlaceholder: "Ma zastosowanie, gdy \"Typ źródła\" to \"Pliki lokalne\" lub gdy kamera jest niedostępna",
    photoPlaceholder: "Ma zastosowanie, gdy \"Typ źródła\" to \"Kamera\".",
    fileOrPhotoPlaceholder: "Ma zastosowanie, gdy \"Typ źródła\" to \"Pliki lokalne lub kamera\".",
    colCount: "Rozmieszcza opcje wyboru w układzie wielokolumnowym. Po ustawieniu wartości 0 opcje są wyświetlane w jednym wierszu.",
    masksettings: {
      saveMaskedValue: "Wybierz, czy chcesz przechowywać wartość pytania z zastosowaną maską w wynikach ankiety."
    },
    patternmask: {
      pattern: "Wzorzec może zawierać literały ciągu i następujące symbole zastępcze: \"9\" — dla cyfry; 'a' - dla wielkiej lub małej litery; '#' - dla cyfry lub wielkiej lub małej litery. Użyj ukośnika odwrotnego \"\\\", aby uciec od znaku."
    },
    datetimemask: {
      pattern: "Wzorzec może zawierać znaki separatora i następujące symbole zastępcze:<br>'m' - Numer miesiąca.<br>'mm' - Numer miesiąca z zerem wiodącym dla wartości jednocyfrowych. <br>'d' - Dzień miesiąca. <br>'dd' — dzień miesiąca, z zerem wiodącym dla wartości jednocyfrowych. <br>'yy' - Dwie ostatnie cyfry roku. <br>'yyyy' - Rok czterocyfrowy. <br>\"H\" - Godziny w formacie 24-godzinnym. <br>\"HH\" — godziny w formacie 24-godzinnym, z zerem wiodącym dla wartości jednocyfrowych. <br>'h' - Godziny w formacie 12-godzinnym. <br>\"hh\" — godziny w formacie 12-godzinnym, z zerem wiodącym dla wartości jednocyfrowych. <br>'MM' - minuty. <br>'ss' - Sekundy. <br>\"TT\" - 12-godzinny okres zegara pisany wielkimi literami (AM/PM). <br>'tt' - 12-godzinny okres zegara pisany małymi literami (am/pm)."
    },
    numericmask: {
      decimalSeparator: "Symbol używany do oddzielenia części ułamkowej od części całkowitej wyświetlanej liczby.",
      thousandsSeparator: "Symbol używany do rozdzielania cyfr dużej liczby na grupy po trzy.",
      precision: "Ogranicza liczbę cyfr, które mają być zachowywane po przecinku dziesiętnym wyświetlanej liczby."
    },
    currencymask: {
      prefix: "Jeden lub kilka symboli, które mają być wyświetlane przed wartością.",
      suffix: "Jeden lub kilka symboli, które mają być wyświetlane po wartości."
    },
    theme: {
      isPanelless: "To ustawienie ma zastosowanie tylko do pytań znajdujących się poza panelem.",
      primaryColor: "Ustawia kolor dodatkowy, który wyróżnia kluczowe elementy ankiety.",
      panelBackgroundTransparency: "Dostosowuje przezroczystość paneli i pól pytań względem tła ankiety.",
      questionBackgroundTransparency: "Dostosowuje przezroczystość elementów wejściowych względem tła ankiety.",
      cornerRadius: "Ustawia promień narożnika dla wszystkich elementów prostokątnych. Włącz tryb zaawansowany, jeśli chcesz ustawić indywidualne wartości promienia narożnika dla elementów wejściowych lub paneli i pól pytań.",
      "--sjs-general-backcolor-dim": "Ustawia główny kolor tła ankiety."
    },
    header: {
      inheritWidthFrom: "Opcja \"Taki sam jak kontener\" automatycznie dostosowuje szerokość obszaru zawartości nagłówka, aby pasowała do elementu HTML, w którym umieszczono ankietę.",
      textAreaWidth: "Szerokość obszaru nagłówka, który zawiera tytuł i opis ankiety, mierzona w pikselach.",
      overlapEnabled: "Gdy ta opcja jest włączona, górna krawędź ankiety nakłada się na dolną część nagłówka.",
      mobileHeight: "Po ustawieniu wartości 0 wysokość jest obliczana automatycznie, aby pomieścić zawartość nagłówka."
    },
    progressBarInheritWidthFrom: "Opcja \"Tak samo jak kontener\" automatycznie dostosowuje szerokość obszaru paska postępu, aby pasowała do elementu HTML, w którym umieszczona jest ankieta."
  },
  // Properties
  p: {
    title: {
      name: "tytuł",
      title: "Pozostaw pusty, jeśli ma być taki sam, jak 'Nazwa'"
    },
    multiSelect: "Zezwalaj na wielokrotny wybór",
    showLabel: "Pokaż podpisy pod obrazami",
    swapOrder: "Zamień kolejność Tak i Nie",
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
    inputSize: "Rozmiar produktu",
    itemTitleWidth: "Szerokość etykiety elementu (w pikselach)",
    inputTextAlignment: "Wyrównanie wartości wejściowej",
    elements: "Pierwiastki",
    content: "Zawartość",
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
    mobileHeight: "Wysokość na smartfonach",
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
    selectToRankEmptyRankedAreaText: "Tekst pokazujący, czy wszystkie opcje są zaznaczone",
    selectToRankEmptyUnrankedAreaText: "Tekst zastępczy dla obszaru klasyfikacji",
    allowCameraAccess: "Zezwalaj na dostęp do kamery",
    scaleColorMode: "Tryb skalowania kolorów",
    rateColorMode: "Oceń tryb kolorów",
    copyDisplayValue: "Kopiowanie wyświetlanej wartości",
    effectiveColSpan: "Rozpiętość kolumn",
    progressBarInheritWidthFrom: "Szerokość obszaru paska postępu"
  },
  theme: {
    advancedMode: "Tryb zaawansowany",
    pageTitle: "Czcionka tytułu strony",
    questionTitle: "Czcionka tytułu pytania",
    editorPanel: "Element wejściowy",
    lines: "Linie",
    primaryDefaultColor: "Domyślny",
    primaryDarkColor: "Hover",
    primaryLightColor: "Wybrany",
    backgroundDimColor: "Kolor tła",
    cornerRadius: "Promień naroża",
    backcolor: "Domyślne tło",
    hovercolor: "Najedź kursorem na tło",
    borderDecoration: "Dekoracja obramowania",
    fontColor: "Kolor czcionki",
    backgroundColor: "Kolor tła",
    primaryForecolor: "Kolor domyślny",
    primaryForecolorLight: "Kolor wyłączony",
    font: "Czcionka",
    borderDefault: "Ciemniejsze",
    borderLight: "Zapalniczka",
    fontFamily: "Rodzina czcionek",
    fontWeightRegular: "Regularny",
    fontWeightHeavy: "Ciężki",
    fontWeightSemiBold: "Półpogrubienie",
    fontWeightBold: "Śmiały",
    color: "Kolor",
    placeholderColor: "Kolor symbolu zastępczego",
    size: "Rozmiar",
    opacity: "Nieprzezroczystość",
    boxShadowX: "X",
    boxShadowY: "Y",
    boxShadowAddRule: "Dodaj efekt cienia",
    boxShadowBlur: "Zacierać",
    boxShadowSpread: "Rozprzestrzenianie się",
    boxShadowDrop: "Kropla",
    boxShadowInner: "Wewnętrzny",
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
      green: "Zielony",
      gray: "Szary"
    }
  },
  creatortheme: {
    "--sjs-special-background": "Tło powierzchni",
    "--sjs-primary-background-500": "Podstawowy",
    "--sjs-secondary-background-500": "Wtórny",
    surfaceScale: "Powierzchnia",
    userInterfaceBaseUnit: "Interfejs użytkownika",
    fontScale: "Czcionka",
    names: {
      sc2020: "Kreator ankiet 2020",
      "default-light": "Światło",
      "default-dark": "Ciemny",
      "default-contrast": "Kontrast"
    }
  }
};

setupLocale({ localeCode: "pl", strings: polishStrings });

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
// pe.eachRowRequired: "Require answer for all rows" => "Wymagaj odpowiedzi dla wszystkich wierszy"
// pe.requiredErrorText: "\"Required\" error message" => "Komunikat o błędzie \"Wymagane\""
// pe.cols: "Columns" => "Kolumny"
// pe.columnLayout: "Columns layout" => "Układ kolumn"
// pe.addRowButtonLocation: "Add Row button location" => "Lokalizacja przycisku Dodaj wiersz"
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
// page.timeLimit: "Time limit to finish the page (in seconds)" => "Limit czasu na zakończenie strony (w sekundach)"
// question.page: "Parent page" => "Strona nadrzędna"
// pe.noEntriesText: "Empty entries text" => "Tekst pustych wpisów"
// pe.html: "HTML markup" => "Znaczniki HTML"
// pe.expression: "Expression" => "Wyrażenie"
// pe.setValue: "Answer" => "Odpowiedź"
// pe.dataFormat: "Image format" => "Format obrazu"
// pe.allowAddRows: "Allow adding rows" => "Zezwalaj na dodawanie wierszy"
// pe.allowRemoveRows: "Allow removing rows" => "Zezwalaj na usuwanie wierszy"
// pe.allowRowReorder: "Allow row drag and drop" => "Zezwalaj na przeciąganie i upuszczanie wierszy"
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
// pe.maxCommentLength: "Maximum comment length (in characters)" => "Maksymalna długość komentarza (w znakach)"
// pe.autoGrowComment: "Auto-expand comment area if necessary" => "W razie potrzeby automatycznie rozwiń obszar komentarza"
// pe.allowResizeComment: "Allow users to resize text areas" => "Zezwalaj użytkownikom na zmianę rozmiaru obszarów tekstu"
// pe.textUpdateMode: "Update text question value" => "Aktualizowanie wartości pytania tekstowego"
// pe.autoFocusFirstError: "Set focus on the first invalid answer" => "Ustaw fokus na pierwszej nieprawidłowej odpowiedzi"
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
// pe.prevPanelText: "Previous Panel button tooltip" => "Poprzednia etykietka przycisku panelu"
// pe.nextPanelText: "Next Panel button tooltip" => "Przycisk Następny panel — etykietka narzędzia"
// pe.showRangeInProgress: "Show progress bar" => "Pokaż pasek postępu"
// pe.templateQuestionTitleLocation: "Question title location" => "Lokalizacja tytułu pytania"
// pe.removePanelButtonLocation: "Remove Panel button location" => "Usuń położenie przycisku panelu"
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
// pe.showNumber: "Show panel number" => "Pokaż numer panelu"
// pe.logoWidth: "Logo width (in CSS-accepted values)" => "Szerokość logo (w wartościach akceptowanych przez CSS)"
// pe.logoHeight: "Logo height (in CSS-accepted values)" => "Wysokość logo (w wartościach akceptowanych przez CSS)"
// pe.readOnly: "Read-only" => "Tylko do odczytu"
// pe.enableIf: "Editable if" => "Edytowalne, jeśli"
// pe.noRowsText: "\"No rows\" message" => "Komunikat \"Brak wierszy\""
// pe.size: "Input field size (in characters)" => "Rozmiar pola wejściowego (w znakach)"
// pe.separateSpecialChoices: "Separate special choices (None, Other, Select All)" => "Oddzielne opcje specjalne (Brak, Inne, Wybierz wszystko)"
// pe.choicesFromQuestion: "Copy choices from the following question" => "Kopiowanie opcji z następującego pytania"
// pe.choicesFromQuestionMode: "Which choices to copy?" => "Które opcje skopiować?"
// pe.showCommentArea: "Show the comment area" => "Pokaż obszar komentarza"
// pe.commentPlaceholder: "Comment area placeholder" => "Symbol zastępczy obszaru komentarza"
// pe.displayRateDescriptionsAsExtremeItems: "Display rate descriptions as extreme values" => "Wyświetlanie opisów szybkości jako wartości ekstremalnych"
// pe.rowOrder: "Row order" => "Kolejność wierszy"
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
// addRowButtonLocation.default: "Depends on matrix layout" => "Zależy od układu macierzy"
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
// p.inputSize: "Item size" => "Rozmiar produktu"
// p.elements: "Elements" => "Pierwiastki"
// p.content: "Content" => "Zawartość"
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
// theme.groupAdvanced: "Advanced" => "Zaawansowany"
// theme.themeName: "Theme" => "Kompozycja"
// theme.isPanellessss: "Question appearance" => "Wygląd pytania"
// theme.isPanellessPanels: "Default" => "Domyślny"
// theme.isPanellessLightweight: "Without Panels" => "Bez paneli"
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
// theme.surveyTitleFont: "Survey title font" => "Czcionka tytułu ankiety"
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
// theme.header: "Header" => "Nagłówek"
// theme.backgroundImageFitFill: "Stretch" => "Rozciągnąć"
// theme.backgroundImageFitTile: "Tile" => "Kafelek"
// theme.headerView: "View" => "Widok"
// theme.headerViewBasic: "Basic" => "Podstawowy"
// theme.headerViewAdvanced: "Advanced" => "Zaawansowany"
// theme.headerInheritWidthFrom: "Content area width" => "Szerokość obszaru zawartości"
// theme.headerInheritWidthFromSurvey: "Same as survey" => "Tak samo jak ankieta"
// theme.headerInheritWidthFromPage: "Fit to page" => "Dopasuj do strony"
// theme.headerTextAreaWidth: "Text width" => "Szerokość tekstu"
// theme.headerBackgroundColorSwitch: "Background color" => "Kolor tła"
// theme.headerBackgroundColorNone: "None" => "Żaden"
// theme.headerBackgroundColorAccentColor: "Accent color" => "Kolor wiodący"
// theme.headerBackgroundColorCustom: "Custom" => "Zwyczaj"
// theme.horizontalAlignmentLeft: "Left" => "Lewy"
// theme.horizontalAlignmentCenter: "Center" => "Centrum"
// theme.horizontalAlignmentRight: "Right" => "Prawy"
// theme.verticalAlignmentTop: "Top" => "Do góry"
// theme.verticalAlignmentMiddle: "Middle" => "Środek"
// theme.verticalAlignmentBottom: "Bottom" => "Dno"
// theme.logoPosition: "Logo Position" => "Pozycja logo"
// theme.headerTitlePosition: "Title Position" => "Pozycja tytułu"
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
// theme.background: "Background" => "Tło"
// theme.appearance: "Appearance" => "Wygląd"
// ed.themeResetConfirmation: "Do you really want to reset the theme? All your customizations will be lost." => "Czy naprawdę chcesz zresetować motyw? Wszystkie Twoje dostosowania zostaną utracone."
// ed.themeResetConfirmationOk: "Yes, reset the theme" => "Tak, zresetuj motyw"
// theme.headerInheritWidthFromContainer: "Fit to container" => "Pasuje do pojemnika"
// signaturepad.showPlaceholder: "Show the placeholder" => "Pokazywanie symbolu zastępczego"
// signaturepad.placeholder: "Placeholder text" => "Tekst zastępczy"
// theme.surveyDescriptionFont: "Survey description font" => "Czcionka opisu ankiety"
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
// theme.headerDescriptionPosition: "Description position" => "Opis pozycja"
// ed.propertyGridNoResultsFound: "No results found" => "Nie znaleziono wyników"
// pv.leftRight: "Left and right" => "Lewy i prawy"
// p.sourceType: "Source type" => "Typ źródła"
// p.fitToContainer: "Fit to container" => "Pasuje do pojemnika"
// p.setValueExpression: "Set value expression" => "Wyrażenie wartości zadanej"
// ed.choicesLoadedFromWebText: "Choices are loaded from a web service." => "Opcje są ładowane z usługi internetowej."
// ed.choicesLoadedFromWebLinkText: "Go to settings" => "Przejdź do ustawień"
// ed.choicesLoadedFromWebPreviewTitle: "Preview of loaded choice options" => "Podgląd wczytanych opcji wyboru"
// pe.eachRowUnique: "Prevent duplicate responses in rows" => "Zapobieganie zduplikowanym odpowiedziom w wierszach"
// theme.advancedMode: "Advanced mode" => "Tryb zaawansowany"
// theme.backgroundCornerRadius: "Background and corner radius" => "Tło i promień narożnika"
// theme.colorsTitle: "Colors" => "Kolory"
// theme.font: "Font" => "Czcionka"
// theme.lines: "Lines" => "Linie"
// theme.titleFont: "Title font" => "Czcionka tytułu"
// theme.descriptionFont: "Description font" => "Czcionka opisu"
// theme.shadow: "Shadow effects" => "Efekty cienia"
// ed.translateUsigAIFrom: "Translate from: " => "Przetłumacz z: "
// pe.showRefuseItem: "Allow the Refuse to Answer option" => "Zezwól na opcję Odmów odpowiedzi"
// pe.showDontKnowItem: "Allow the Don't Know option" => "Zezwól na opcję Nie wiem"
// pe.showRefuseItem: "Allow the Refuse to Answer option" => "Zezwól na opcję Odmów odpowiedzi"
// pe.showDontKnowItem: "Allow the Don't Know option" => "Zezwól na opcję Nie wiem"
// pv.contain: "Contain" => "Zawierać"
// pv.cover: "Cover" => "Pokryć"
// pv.fill: "Fill" => "Wypełnić"

// pe.transposeData: "Transpose rows to columns" => "Transponowanie wierszy do kolumn"
// layout.panel: "Layout" => "Układ"
// layout.question: "Layout" => "Układ"
// layout.base: "Layout" => "Układ"
// panel.name: "Panel name" => "Nazwa panelu"
// panel.title: "Panel title" => "Tytuł panelu"
// panel.description: "Panel description" => "Opis panelu"
// panel.visibleIf: "Make the panel visible if" => "Uwidocznij panel, jeśli"
// panel.requiredIf: "Make the panel required if" => "Ustaw panel jako wymagany, jeśli"
// panel.questionOrder: "Question order within the panel" => "Kolejność pytań w panelu"
// panel.startWithNewLine: "Display the panel on a new line" => "Wyświetlanie panelu w nowym wierszu"
// panel.state: "Panel collapse state" => "Stan zwijania panelu"
// panel.width: "Inline panel width" => "Szerokość panelu w linii"
// panel.minWidth: "Minimum panel width" => "Minimalna szerokość panelu"
// panel.maxWidth: "Maximum panel width" => "Maksymalna szerokość panelu"
// paneldynamic.name: "Panel name" => "Nazwa panelu"
// paneldynamic.title: "Panel title" => "Tytuł panelu"
// paneldynamic.description: "Panel description" => "Opis panelu"
// paneldynamic.visibleIf: "Make the panel visible if" => "Uwidocznij panel, jeśli"
// paneldynamic.requiredIf: "Make the panel required if" => "Ustaw panel jako wymagany, jeśli"
// paneldynamic.page: "Move the panel to page" => "Przenieś panel na stronę"
// paneldynamic.startWithNewLine: "Display the panel on a new line" => "Wyświetlanie panelu w nowym wierszu"
// paneldynamic.state: "Panel collapse state" => "Stan zwijania panelu"
// paneldynamic.width: "Inline panel width" => "Szerokość panelu w linii"
// paneldynamic.minWidth: "Minimum panel width" => "Minimalna szerokość panelu"
// paneldynamic.maxWidth: "Maximum panel width" => "Maksymalna szerokość panelu"
// paneldynamic.templateDescription: "Panel description pattern" => "Wzorzec opisu panelu"
// paneldynamic.templateTitle: "Panel title pattern" => "Wzorzec tytułu panelu"
// paneldynamic.noEntriesText: "Empty panel text" => "Pusty tekst panelu"
// paneldynamic.templateTabTitle: "Tab title pattern" => "Wzorzec tytułu tabulatora"
// paneldynamic.templateVisibleIf: "Make an individual panel visible if" => "Uwidocznij pojedynczy panel, jeśli"
// paneldynamic.hideNumber: "Hide the panel number" => "Ukryj numer panelu"
// paneldynamic.titleLocation: "Panel title alignment" => "Wyrównanie tytułu panelu"
// paneldynamic.descriptionLocation: "Panel description alignment" => "Wyrównanie opisu panelu"
// paneldynamic.templateQuestionTitleLocation: "Question title alignment" => "Wyrównanie tytułu pytania"
// paneldynamic.templateErrorLocation: "Error message alignment" => "Wyrównanie komunikatu o błędzie"
// paneldynamic.newPanelPosition: "New panel location" => "Nowa lokalizacja panelu"
// paneldynamic.keyName: "Prevent duplicate responses in the following question" => "Zapobiegaj zduplikowanym odpowiedziom w następującym pytaniu"
// question.name: "Question name" => "Nazwa pytania"
// question.title: "Question title" => "Tytuł pytania"
// question.description: "Question description" => "Opis pytania"
// question.visibleIf: "Make the question visible if" => "Uwidocznij pytanie, jeśli"
// question.requiredIf: "Make the question required if" => "Zadbaj o to, aby pytanie było wymagane, jeśli"
// question.state: "Question box collapse state" => "Stan zwinięcia pola pytania"
// question.hideNumber: "Hide the question number" => "Ukryj numer pytania"
// question.titleLocation: "Question title alignment" => "Wyrównanie tytułu pytania"
// question.descriptionLocation: "Question description alignment" => "Wyrównanie opisu pytania"
// question.errorLocation: "Error message alignment" => "Wyrównanie komunikatu o błędzie"
// question.indent: "Increase the inner indent" => "Zwiększ wcięcie wewnętrzne"
// question.width: "Inline question width" => "Szerokość pytania w tekście"
// question.minWidth: "Minimum question width" => "Minimalna szerokość pytania"
// question.maxWidth: "Maximum question width" => "Maksymalna szerokość pytania"
// question.textUpdateMode: "Update input field value" => "Aktualizowanie wartości pola wejściowego"
// signaturepad.allowClear: "Show the Clear button within signature area" => "Pokaż przycisk Wyczyść w obszarze podpisu"
// signaturepad.penColor: "Stroke color" => "Kolor obrysu"
// comment.rows: "Input field height (in lines)" => "Wysokość pola wejściowego (w wierszach)"
// expression.name: "Expression name" => "Nazwa wyrażenia"
// expression.title: "Expression title" => "Tytuł wyrażenia"
// expression.description: "Expression description" => "Opis wyrażenia"
// expression.expression: "Expression" => "Wyrażenie"
// trigger.expression: "Expression" => "Wyrażenie"
// calculatedvalue.expression: "Expression" => "Wyrażenie"
// survey.description: "Survey description" => "Opis ankiety"
// page.name: "Page name" => "Nazwa strony"
// page.description: "Page description" => "Opis strony"
// page.visibleIf: "Make the page visible if" => "Spraw, aby strona była widoczna, jeśli"
// page.requiredIf: "Make the page required if" => "Ustaw stronę jako wymaganą, jeśli"
// page.questionOrder: "Question order on the page" => "Kolejność pytań na stronie"
// matrixdropdowncolumn.name: "Column name" => "Nazwa kolumny"
// matrixdropdowncolumn.title: "Column title" => "Tytuł kolumny"
// matrixdropdowncolumn.isUnique: "Prevent duplicate responses" => "Zapobieganie zduplikowanym odpowiedziom"
// matrixdropdowncolumn.width: "Column width" => "Szerokość kolumny"
// matrixdropdowncolumn.minWidth: "Minimum column width" => "Minimalna szerokość kolumny"
// matrixdropdowncolumn.rows: "Input field height (in lines)" => "Wysokość pola wejściowego (w wierszach)"
// matrixdropdowncolumn.visibleIf: "Make the column visible if" => "Ustaw kolumnę jako widoczną, jeśli"
// matrixdropdowncolumn.requiredIf: "Make the column required if" => "Ustaw kolumnę jako wymaganą, jeśli"
// matrixdropdowncolumn.showInMultipleColumns: "Each option in a separate column" => "Każda opcja w osobnej kolumnie"
// multipletextitem.name: "Name" => "Nazwa"
// multipletextitem.title: "Title" => "Tytuł"
// pe.rateDescriptionLocation: "Label alignment" => "Wyrównanie etykiety"
// pe.cellErrorLocation: "Cell error message alignment" => "Wyrównanie komunikatu o błędzie komórki"
// pe.listIsEmpty@columns: "You don't have any columns yet" => "Nie masz jeszcze żadnych kolumn"
// pe.listIsEmpty@rows: "You don't have any rows yet" => "Nie masz jeszcze żadnych wierszy"
// pe.listIsEmpty@validators: "You don't have any validation rules yet" => "Nie masz jeszcze żadnych reguł sprawdzania poprawności"
// pe.listIsEmpty@calculatedValues: "You don't have any custom variables yet" => "Nie masz jeszcze żadnych zmiennych niestandardowych"
// pe.listIsEmpty@triggers: "You don't have any triggers yet" => "Nie masz jeszcze żadnych wyzwalaczy"
// pe.listIsEmpty@navigateToUrlOnCondition: "You don't have any links yet" => "Nie masz jeszcze żadnych linków"
// pe.addNew@columns: "Add new column" => "Dodaj nową kolumnę"
// pe.addNew@rows: "Add new row" => "Dodaj nowy wiersz"
// pe.addNew@validators: "Add new rule" => "Dodaj nową regułę"
// pe.addNew@calculatedValues: "Add new variable" => "Dodaj nową zmienną"
// pe.addNew@triggers: "Add new trigger" => "Dodaj nowy wyzwalacz"
// pe.addNew@navigateToUrlOnCondition: "Add new URL" => "Dodaj nowy adres URL"
// choicesbyurl.url: "Web service's URL" => "Adres URL usługi sieci Web"
// pe.progressBarShowPageTitles: "Display page titles in progress bar" => "Wyświetlanie tytułów stron na pasku postępu"
// pe.progressBarShowPageNumbers: "Display page numbers in progress bar" => "Wyświetlanie numerów stron na pasku postępu"
// itemvalue.visibleIf: "Make the option visible if" => "Uwidocznij opcję, jeśli"
// itemvalue.enableIf: "Make the option selectable if" => "Spraw, aby opcja była wybieralna, jeśli"
// panel.layout: "Panel Layout" => "Układ panelu"
// tabs.questionSettings: "Question Settings" => "Ustawienia pytań"
// pe.url_placeholder: "Ex.: https://api.example.com/books" => "Przykład: https://api.example.com/books"
// pe.path_placeholder: "Ex.: categories.fiction" => "Np.: kategorie.beletrystyka"
// pe.questionStartIndex_placeholder: "Ex.: a)" => "Np.: a)"
// pe.width_placeholder: "Ex.: 6in" => "Np.: 6 cali"
// pe.minWidth_placeholder: "Ex.: 600px" => "Przykład: 600 pikseli"
// pe.maxWidth_placeholder: "Ex.: 50%" => "Przykład: 50%"
// pv.selected: "Selected" => "Wybrany"
// pv.unselected: "Unselected" => "Niezaznaczone"
// pv.center: "Center" => "Centrum"
// pv.middle: "Middle" => "Środek"
// pv.next: "Next" => "Następny"
// pv.last: "Last" => "Ostatni"
// clearIfInvisible.none: "Never" => "Nigdy"
// questionsOnPageMode.standard: "Original structure" => "Oryginalna struktura"
// questionsOnPageMode.singlePage: "Show all questions on one page" => "Pokaż wszystkie pytania na jednej stronie"
// questionsOnPageMode.questionPerPage: "Show single question per page" => "Pokaż pojedyncze pytanie na stronie"
// pv.auto: "Auto" => "Automatycznie"
// panelsState.firstExpanded: "First expanded" => "Pierwsze rozszerzone"
// rateColorMode.scale: "Scale" => "Skala"
// scaleColorMode.monochrome: "Monochrome" => "Monochromatyczny"
// scaleColorMode.colored: "Colored" => "Kolorowe"
// state.default: "Locked" => "Zablokowany"
// showQuestionNumbers.default: "Auto-numbering" => "Automatyczne numerowanie"
// showQuestionNumbers.on: "Auto-numbering" => "Automatyczne numerowanie"
// showQuestionNumbers.onPage: "Reset on each page" => "Resetuj na każdej stronie"
// showQuestionNumbers.onpanel: "Reset on each panel" => "Resetuj na każdym panelu"
// showQuestionNumbers.onPanel: "Reset on each panel" => "Resetuj na każdym panelu"
// showQuestionNumbers.onSurvey: "Continue across the survey" => "Kontynuuj badanie"
// showQuestionNumbers.off: "No numbering" => "Brak numeracji"
// descriptionLocation.underTitle: "Under the question title" => "Pod tytułem pytania"
// descriptionLocation.underInput: "Under the input field" => "Pod polem wprowadzania danych"
// selectToRankAreasLayout.horizontal: "Next to choices" => "Obok opcji do wyboru"
// selectToRankAreasLayout.vertical: "Above choices" => "Powyższe wybory"
// displayStyle.decimal: "Decimal" => "Dziesiętny"
// displayStyle.currency: "Currency" => "Waluta"
// displayStyle.percent: "Percentage" => "Procent"
// displayStyle.date: "Date" => "Data"
// totalDisplayStyle.decimal: "Decimal" => "Dziesiętny"
// totalDisplayStyle.currency: "Currency" => "Waluta"
// totalDisplayStyle.percent: "Percentage" => "Procent"
// totalDisplayStyle.date: "Date" => "Data"
// rowOrder.initial: "Original" => "Oryginał"
// questionOrder.initial: "Original" => "Oryginał"
// showProgressBar.aboveheader: "Above the header" => "Nad nagłówkiem"
// showProgressBar.belowheader: "Below the header" => "Pod nagłówkiem"
// pv.sum: "Sum" => "Suma"
// pv.count: "Count" => "Hrabia"
// pv.min: "Min" => "Min"
// pv.max: "Max" => "Max"
// pv.avg: "Avg" => "Avg"
// searchMode.contains: "Contains" => "Contains"
// searchMode.startsWith: "Starts with" => "Zaczyna się od"
// panel.name: "A panel ID that is not visible to respondents." => "Identyfikator panelu, który nie jest widoczny dla respondentów."
// panel.description: "Type a panel subtitle." => "Wpisz podtytuł panelu."
// panel.visibleIf: "Use the magic wand icon to set a conditional rule that determines panel visibility." => "Użyj ikony magicznej różdżki, aby ustawić regułę warunkową, która określa widoczność panelu."
// panel.enableIf: "Use the magic wand icon to set a conditional rule that disables the read-only mode for the panel." => "Użyj ikony magicznej różdżki, aby ustawić regułę warunkową, która wyłącza tryb tylko do odczytu dla panelu."
// panel.requiredIf: "Use the magic wand icon to set a conditional rule that prevents survey submission unless at least one nested question has an answer." => "Użyj ikony magicznej różdżki, aby ustawić regułę warunkową, która uniemożliwia przesłanie ankiety, chyba że co najmniej jedno zagnieżdżone pytanie ma odpowiedź."
// panel.questionTitleLocation: "Applies to all questions within this panel. If you want to override this setting, define title alignment rules for individual questions. The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Top\" by default)." => "Dotyczy wszystkich pytań w tym panelu. Jeśli chcesz zastąpić to ustawienie, zdefiniuj reguły wyrównania tytułów dla poszczególnych pytań. Opcja \"Dziedzicz\" stosuje ustawienie na poziomie strony (jeśli jest ustawione) lub na poziomie ankiety (domyślnie \"Góra\")."
// panel.questionErrorLocation: "Sets the location of an error message in relation to all questions within the panel. The \"Inherit\" option applies the page-level (if set) or survey-level setting." => "Ustawia lokalizację komunikatu o błędzie w odniesieniu do wszystkich pytań w panelu. Opcja \"Dziedzicz\" stosuje ustawienie na poziomie strony (jeśli jest ustawione) lub na poziomie ankiety."
// panel.questionOrder: "Keeps the original order of questions or randomizes them. The \"Inherit\" option applies the page-level (if set) or survey-level setting." => "Zachowuje pierwotną kolejność pytań lub losuje je. Opcja \"Dziedzicz\" stosuje ustawienie na poziomie strony (jeśli jest ustawione) lub na poziomie ankiety."
// panel.page: "Repositions the panel to the end of a selected page." => "Przesuwa panel na koniec zaznaczonej strony."
// panel.innerIndent: "Adds space or margin between the panel content and the left border of the panel box." => "Dodaje odstęp lub margines między zawartością panelu a lewą krawędzią ramki panelu."
// panel.startWithNewLine: "Unselect to display the panel in one line with the previous question or panel. The setting doesn't apply if the panel is the first element in your form." => "Usuń zaznaczenie, aby wyświetlić panel w jednym wierszu z poprzednim pytaniem lub panelem. To ustawienie nie ma zastosowania, jeśli panel jest pierwszym elementem formularza."
// panel.state: "Choose from: \"Expanded\" - the panel is displayed in full and can be collapsed; \"Collapsed\" - the panel displays only the title and description and can be expanded; \"Locked\" - the panel is displayed in full and cannot be collapsed." => "Do wyboru: \"Rozwinięty\" - panel wyświetla się w całości i można go zwinąć; \"Zwinięty\" - panel wyświetla tylko tytuł i opis i można go rozwinąć; \"Zablokowany\" - panel jest wyświetlany w całości i nie można go zwinąć."
// panel.width: "Sets the width of the panel in proportion to other survey elements in the same line. Accepts CSS values (px, %, in, pt, etc.)." => "Ustawia szerokość panelu proporcjonalnie do innych elementów pomiarowych w tej samej linii. Akceptuje wartości CSS (px, %, in, pt itp.)."
// paneldynamic.name: "A panel ID that is not visible to respondents." => "Identyfikator panelu, który nie jest widoczny dla respondentów."
// paneldynamic.description: "Type a panel subtitle." => "Wpisz podtytuł panelu."
// paneldynamic.visibleIf: "Use the magic wand icon to set a conditional rule that determines panel visibility." => "Użyj ikony magicznej różdżki, aby ustawić regułę warunkową, która określa widoczność panelu."
// paneldynamic.enableIf: "Use the magic wand icon to set a conditional rule that disables the read-only mode for the panel." => "Użyj ikony magicznej różdżki, aby ustawić regułę warunkową, która wyłącza tryb tylko do odczytu dla panelu."
// paneldynamic.requiredIf: "Use the magic wand icon to set a conditional rule that prevents survey submission unless at least one nested question has an answer." => "Użyj ikony magicznej różdżki, aby ustawić regułę warunkową, która uniemożliwia przesłanie ankiety, chyba że co najmniej jedno zagnieżdżone pytanie ma odpowiedź."
// paneldynamic.templateQuestionTitleLocation: "Applies to all questions within this panel. If you want to override this setting, define title alignment rules for individual questions. The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Top\" by default)." => "Dotyczy wszystkich pytań w tym panelu. Jeśli chcesz zastąpić to ustawienie, zdefiniuj reguły wyrównania tytułów dla poszczególnych pytań. Opcja \"Dziedzicz\" stosuje ustawienie na poziomie strony (jeśli jest ustawione) lub na poziomie ankiety (domyślnie \"Góra\")."
// paneldynamic.templateErrorLocation: "Sets the location of an error message in relation to a question with invalid input. Choose between: \"Top\" - an error text is placed at the top of the question box; \"Bottom\" - an error text is placed at the bottom of the question box. The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Top\" by default)." => "Ustawia lokalizację komunikatu o błędzie w odniesieniu do pytania z nieprawidłowymi danymi wejściowymi. Wybierz pomiędzy: \"Góra\" - tekst błędu jest umieszczany w górnej części pola pytania; \"Na dole\" — tekst błędu jest umieszczany u dołu pola pytania. Opcja \"Dziedzicz\" stosuje ustawienie na poziomie strony (jeśli jest ustawione) lub na poziomie ankiety (domyślnie \"Góra\")."
// paneldynamic.errorLocation: "Sets the location of an error message in relation to all questions within the panel. The \"Inherit\" option applies the page-level (if set) or survey-level setting." => "Ustawia lokalizację komunikatu o błędzie w odniesieniu do wszystkich pytań w panelu. Opcja \"Dziedzicz\" stosuje ustawienie na poziomie strony (jeśli jest ustawione) lub na poziomie ankiety."
// paneldynamic.page: "Repositions the panel to the end of a selected page." => "Przesuwa panel na koniec zaznaczonej strony."
// paneldynamic.innerIndent: "Adds space or margin between the panel content and the left border of the panel box." => "Dodaje odstęp lub margines między zawartością panelu a lewą krawędzią ramki panelu."
// paneldynamic.startWithNewLine: "Unselect to display the panel in one line with the previous question or panel. The setting doesn't apply if the panel is the first element in your form." => "Usuń zaznaczenie, aby wyświetlić panel w jednym wierszu z poprzednim pytaniem lub panelem. To ustawienie nie ma zastosowania, jeśli panel jest pierwszym elementem formularza."
// paneldynamic.state: "Choose from: \"Expanded\" - the panel is displayed in full and can be collapsed; \"Collapsed\" - the panel displays only the title and description and can be expanded; \"Locked\" - the panel is displayed in full and cannot be collapsed." => "Do wyboru: \"Rozwinięty\" - panel wyświetla się w całości i można go zwinąć; \"Zwinięty\" - panel wyświetla tylko tytuł i opis i można go rozwinąć; \"Zablokowany\" - panel jest wyświetlany w całości i nie można go zwinąć."
// paneldynamic.width: "Sets the width of the panel in proportion to other survey elements in the same line. Accepts CSS values (px, %, in, pt, etc.)." => "Ustawia szerokość panelu proporcjonalnie do innych elementów pomiarowych w tej samej linii. Akceptuje wartości CSS (px, %, in, pt itp.)."
// paneldynamic.templateTitle: "Type in a template for dynamic panel titles. Use {panelIndex} for the panel's general position and {visiblePanelIndex} for its order among visible panels. Insert these placeholders into the pattern to add automatic numbering." => "Wpisz szablon dynamicznych tytułów paneli. Użyj {panelIndex} dla ogólnego położenia panelu i {visiblePanelIndex} dla jego kolejności wśród widocznych paneli. Wstaw te symbole zastępcze do wzoru, aby dodać automatyczną numerację."
// paneldynamic.templateTabTitle: "Type in a template for tab titles. Use {panelIndex} for a panel's general position and {visiblePanelIndex} for its order among visible panels. Insert these placeholders into the pattern to add automatic numbering." => "Wpisz szablon tytułów kart. Użyj {panelIndex} dla ogólnego położenia panelu i {visiblePanelIndex} dla jego kolejności wśród widocznych paneli. Wstaw te symbole zastępcze do wzoru, aby dodać automatyczną numerację."
// paneldynamic.templateVisibleIf: "This setting allows you to control the visibility of individual panels within the dynamic panel. Use the `{panel}` placeholder to reference the current panel in your expression." => "To ustawienie umożliwia sterowanie widocznością poszczególnych paneli w panelu dynamicznym. Użyj symbolu zastępczego \"{panel}\", aby odwołać się do bieżącego panelu w wyrażeniu."
// paneldynamic.titleLocation: "This setting is automatically inherited by all questions within this panel. If you want to override this setting, define title alignment rules for individual questions. The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Top\" by default)." => "To ustawienie jest automatycznie dziedziczone przez wszystkie pytania w tym panelu. Jeśli chcesz zastąpić to ustawienie, zdefiniuj reguły wyrównania tytułów dla poszczególnych pytań. Opcja \"Dziedzicz\" stosuje ustawienie na poziomie strony (jeśli jest ustawione) lub na poziomie ankiety (domyślnie \"Góra\")."
// paneldynamic.descriptionLocation: "The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Under the panel title\" by default)." => "Opcja \"Dziedzicz\" stosuje ustawienie na poziomie strony (jeśli jest ustawione) lub na poziomie ankiety (domyślnie \"Pod tytułem panelu\")."
// paneldynamic.newPanelPosition: "Defines the position of a newly added panel. By default, new panels are added to the end. Select \"Next\" to insert a new panel after the current one." => "Określa położenie nowo dodanego panelu. Domyślnie nowe panele są dodawane na końcu. Wybierz \"Dalej\", aby wstawić nowy panel po bieżącym."
// paneldynamic.copyDefaultValueFromLastEntry: "Duplicates answers from the last panel and assigns them to the next added dynamic panel." => "Duplikuje odpowiedzi z ostatniego panelu i przypisuje je do następnego dodanego panelu dynamicznego."
// paneldynamic.keyName: "Reference a question name to require a user to provide a unique response for this question in each panel." => "Odwołaj się do nazwy pytania, aby wymagać od użytkownika podania unikatowej odpowiedzi na to pytanie w każdym panelu."
// pehelp.defaultValueExpression: "This setting allows you to assign a default answer value based on an expression. The expression can include basic calculations - `{q1_id} + {q2_id}`, Boolean expressions, such as `{age} > 60`, and functions: `iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, etc. The value determined by this expression serves as the initial default value that can be overridden by a respondent's manual input." => "To ustawienie umożliwia przypisanie domyślnej wartości odpowiedzi na podstawie wyrażenia. Wyrażenie może zawierać podstawowe obliczenia - '{q1_id} + {q2_id}', wyrażenia logiczne, takie jak '{wiek} > 60' oraz funkcje: 'iif()', 'today()', 'age()', 'min()', 'max()', 'avg()' itp. Wartość określona przez to wyrażenie służy jako początkowa wartość domyślna, która może zostać zastąpiona przez ręczne wprowadzanie danych przez respondenta."
// pehelp.resetValueIf: "Use the magic wand icon to set a conditional rule that determines when a respondent's input is reset to the value based on the \"Default value expression\" or \"Set value expression\" or to the \"Default answer\" value (if either is set)." => "Użyj ikony magicznej różdżki, aby ustawić regułę warunkową, która określa, kiedy dane wejściowe respondenta są resetowane do wartości na podstawie \"Wyrażenia wartości domyślnej\" lub \"Wyrażenia wartości domyślnej\" lub wartości \"Odpowiedź domyślna\" (jeśli którakolwiek z nich jest ustawiona)."
// pehelp.setValueIf: "Use the magic wand icon to set a conditional rule that determines when to run the \"Set value expression\" and dynamically assign the resulting value as a response." => "Użyj ikony magicznej różdżki, aby ustawić regułę warunkową, która określa, kiedy uruchomić \"Wyrażenie wartości zestawu\" i dynamicznie przypisać wynikową wartość jako odpowiedź."
// pehelp.setValueExpression: "Specify an expression that defines the value to be set when the conditions in the \"Set value if\" rule are met. The expression can include basic calculations - `{q1_id} + {q2_id}`, Boolean expressions, such as `{age} > 60`, and functions: `iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, etc. The value determined by this expression can be overridden by a respondent's manual input." => "Określ wyrażenie definiujące wartość, która ma zostać ustawiona, gdy zostaną spełnione warunki reguły \"Ustaw wartość, jeśli\". Wyrażenie może zawierać podstawowe obliczenia - '{q1_id} + {q2_id}', wyrażenia logiczne, takie jak '{wiek} > 60' oraz funkcje: 'iif()', 'today()', 'age()', 'min()', 'max()', 'avg()' itp. Wartość określona przez to wyrażenie może zostać zastąpiona przez ręczne wprowadzenie danych przez respondenta."
// question.name: "A question ID that is not visible to respondents." => "Identyfikator pytania, który nie jest widoczny dla respondentów."
// question.description: "Type a question subtitle." => "Wpisz podtytuł pytania."
// question.visibleIf: "Use the magic wand icon to set a conditional rule that determines question visibility." => "Użyj ikony magicznej różdżki, aby ustawić regułę warunkową, która określa widoczność pytania."
// question.enableIf: "Use the magic wand icon to set a conditional rule that disables the read-only mode for the question." => "Użyj ikony magicznej różdżki, aby ustawić regułę warunkową, która wyłącza tryb tylko do odczytu dla pytania."
// question.requiredIf: "Use the magic wand icon to set a conditional rule that prevents survey advancing or submission unless the question received an answer." => "Użyj ikony magicznej różdżki, aby ustawić regułę warunkową, która uniemożliwia przejście do przodu lub przesłanie ankiety, chyba że na pytanie otrzymano odpowiedź."
// question.startWithNewLine: "Unselect to display the question in one line with the previous question or panel. The setting doesn't apply if the question is the first element in your form." => "Usuń zaznaczenie, aby wyświetlić pytanie w jednym wierszu z poprzednim pytaniem lub panelem. To ustawienie nie ma zastosowania, jeśli pytanie jest pierwszym elementem formularza."
// question.page: "Repositions the question to the end of a selected page." => "Zmienia położenie pytania na końcu zaznaczonej strony."
// question.state: "Choose from: \"Expanded\" - the question box is displayed in full and can be collapsed; \"Collapsed\" - the question box displays only the title and description and can be expanded; \"Locked\" - the question box is displayed in full and cannot be collapsed." => "Do wyboru: \"Rozwinięte\" - pole pytania wyświetla się w całości i można je zwinąć; \"Zwinięte\" - pole pytania wyświetla tylko tytuł i opis i można je rozwinąć; \"Zablokowane\" - pole pytania jest wyświetlane w całości i nie można go zwinąć."
// question.titleLocation: "Overrides title alignment rules defined on a panel, page or survey level. The \"Inherit\" option applies any higher-level settings (if set) or survey-level setting (\"Top\" by default)." => "Zastępuje reguły wyrównania tytułów zdefiniowane na poziomie panelu, strony lub ankiety. Opcja \"Dziedzicz\" stosuje wszystkie ustawienia wyższego poziomu (jeśli są ustawione) lub ustawienia na poziomie ankiety (domyślnie \"Góra\")."
// question.descriptionLocation: "The \"Inherit\" option applies the survey-level setting (\"Under the question title\" by default)." => "Opcja \"Dziedzicz\" stosuje ustawienie na poziomie ankiety (domyślnie \"Pod tytułem pytania\")."
// question.errorLocation: "Sets the location of an error message in relation to the question with invalid input. Choose between: \"Top\" - an error text is placed at the top of the question box; \"Bottom\" - an error text is placed at the bottom of the question box. The \"Inherit\" option applies the survey-level setting (\"Top\" by default)." => "Ustawia lokalizację komunikatu o błędzie w odniesieniu do pytania z nieprawidłowymi danymi wejściowymi. Wybierz pomiędzy: \"Góra\" - tekst błędu jest umieszczany w górnej części pola pytania; \"Na dole\" — tekst błędu jest umieszczany u dołu pola pytania. Opcja \"Dziedzicz\" stosuje ustawienie na poziomie ankiety (domyślnie \"Góra\")."
// question.indent: "Adds space or margin between the question content and the left border of the question box." => "Dodaje spację lub margines między treścią pytania a lewą krawędzią pola pytania."
// question.width: "Sets the width of the question in proportion to other survey elements in the same line. Accepts CSS values (px, %, in, pt, etc.)." => "Ustawia szerokość pytania proporcjonalnie do innych elementów ankiety w tym samym wierszu. Akceptuje wartości CSS (px, %, in, pt itp.)."
// surveyvalidator.expression: "Use the magic wand icon to set a validation rule for the question." => "Użyj ikony magicznej różdżki, aby ustawić regułę sprawdzania poprawności dla pytania."
// question.textUpdateMode: "Choose from: \"On lost focus\" - the value is updated when the input field loses focus; \"While typing\" - the value is updated in real-time, as users are typing. The \"Inherit\" option applies the survey-level setting (\"On lost focus\" by default)." => "Do wyboru: \"W przypadku utraty fokusu\" - wartość jest aktualizowana, gdy pole wejściowe traci fokus; \"Podczas pisania\" - wartość jest aktualizowana w czasie rzeczywistym, w miarę pisania przez użytkowników. Opcja \"Dziedzicz\" stosuje ustawienie na poziomie ankiety (domyślnie \"Po utracie fokusu\")."
// question.url: "You can use any web service as a data source for multiple-choice questions. To populate choice values, enter the URL of the service providing the data." => "Możesz użyć dowolnej usługi internetowej jako źródła danych dla pytań wielokrotnego wyboru. Aby wypełnić wartości wyborów, wprowadź adres URL usługi udostępniającej dane."
// question.searchMode: "A comparison operation used to filter the drop-down list." => "Operacja porównania używana do filtrowania listy rozwijanej."
// signaturepad.signatureWidth: "Sets the width of the displayed signature area and the resulting image." => "Ustawia szerokość wyświetlanego obszaru podpisu i wynikowego obrazu."
// signaturepad.signatureHeight: "Sets the height of the displayed signature area and the resulting image." => "Ustawia wysokość wyświetlanego obszaru podpisu i wynikowego obrazu."
// signaturepad.signatureAutoScaleEnabled: "Select if you want the signature area to fill all available space within the question box while maintaining the default 3:2 aspect ratio. When custom width and height values are set, the setting will keep the aspect ratio of these dimensions." => "Wybierz, czy chcesz, aby obszar podpisu wypełniał całą dostępną przestrzeń w polu pytania, zachowując domyślny współczynnik proporcji 3:2. Po ustawieniu niestandardowych wartości szerokości i wysokości ustawienie zachowa proporcje tych wymiarów."
// file.imageHeight: "Adjusts the height of the image in the survey results." => "Dostosowuje wysokość obrazu w wynikach ankiety."
// file.imageWidth: "Adjusts the width of the image in the survey results." => "Dostosowuje szerokość obrazu w wynikach ankiety."
// imagepicker.imageHeight: "Overrides the minimum and maximum height values." => "Zastępuje minimalne i maksymalne wartości wysokości."
// imagepicker.imageWidth: "Overrides the minimum and maximum width values." => "Zastępuje minimalne i maksymalne wartości szerokości."
// imagepicker.choices: "\"Value\" serves as an item ID used in conditional rules; \"Text\" is displayed to respondents." => "\"Wartość\" służy jako identyfikator elementu używany w regułach warunkowych; Respondentom wyświetla się \"Tekst\"."
// text.size: "This setting only resizes the input field and doesn't affect the width of the question box. To limit the accepted input length, go to <b>Validation → Maximum character limit</b>." => "To ustawienie zmienia tylko rozmiar pola wejściowego i nie wpływa na szerokość pola pytania. Aby ograniczyć akceptowaną długość danych wejściowych, przejdź do <b>sekcji Walidacja → Maksymalny limit znaków</b>."
// comment.rows: "Sets the number of displayed lines in the input field. If the input takes up more lines, the scroll bar will appear." => "Ustawia liczbę wyświetlanych wierszy w polu wprowadzania. Jeśli dane wejściowe zajmują więcej wierszy, pojawi się pasek przewijania."
// survey.mode: "Choose between: \"Editable\" - enables respondents to fill out your survey; \"Read-only\" - disables form editing." => "Wybierz pomiędzy: \"Edytowalne\" - umożliwia respondentom wypełnienie ankiety; \"Tylko do odczytu\" - wyłącza edycję formularza."
// matrixdropdowncolumn.name: "A column ID that is not visible to respondents." => "Identyfikator kolumny, który nie jest widoczny dla respondentów."
// matrixdropdowncolumn.isUnique: "When enabled for a column, a respondent is required to provide a unique response for each question within this column." => "Po włączeniu tej opcji dla kolumny respondent musi udzielić unikatowej odpowiedzi na każde pytanie w tej kolumnie."
// matrixdropdowncolumn.rows: "Sets the number of displayed lines in the input field. If the input takes up more lines, the scroll bar will appear." => "Ustawia liczbę wyświetlanych wierszy w polu wprowadzania. Jeśli dane wejściowe zajmują więcej wierszy, pojawi się pasek przewijania."
// matrixdropdowncolumn.visibleIf: "Use the magic wand icon to set a conditional rule that determines column visibility." => "Użyj ikony magicznej różdżki, aby ustawić regułę warunkową, która określa widoczność kolumny."
// matrixdropdowncolumn.enableIf: "Use the magic wand icon to set a conditional rule that disables the read-only mode for the column." => "Użyj ikony magicznej różdżki, aby ustawić regułę warunkową, która wyłącza tryb tylko do odczytu dla kolumny."
// matrixdropdowncolumn.requiredIf: "Use the magic wand icon to set a conditional rule that prevents survey submission unless at least one nested question has an answer." => "Użyj ikony magicznej różdżki, aby ustawić regułę warunkową, która uniemożliwia przesłanie ankiety, chyba że co najmniej jedno zagnieżdżone pytanie ma odpowiedź."
// matrixdropdowncolumn.showInMultipleColumns: "When selected, creates an individual column for each choice option." => "Gdy ta opcja jest zaznaczona, tworzy osobną kolumnę dla każdej opcji wyboru."
// pehelp.widthMode: "Choose from: \"Static\" - sets a fixed width; \"Responsive\" - makes the survey occupy the full width of the screen; \"Auto\" - applies either of the two depending on the question types used." => "Do wyboru: \"Statyczny\" - ustawia stałą szerokość; \"Responsywny\" - sprawia, że ankieta zajmuje całą szerokość ekranu; \"Auto\" – stosuje jedną z tych dwóch opcji w zależności od użytych typów pytań."
// pehelp.logo: "Paste an image link (no size limits) or click the folder icon to browse a file from your computer (up to 64KB)." => "Wklej link do obrazu (bez ograniczeń rozmiaru) lub kliknij ikonę folderu, aby przeglądać plik z komputera (do 64 KB)."
// pehelp.logoWidth: "Sets a logo width in CSS units (px, %, in, pt, etc.)." => "Ustawia szerokość logo w jednostkach CSS (px, %, in, pt itd.)."
// pehelp.logoHeight: "Sets a logo height in CSS units (px, %, in, pt, etc.)." => "Ustawia wysokość logo w jednostkach CSS (px, %, in, pt itd.)."
// pehelp.logoFit: "Choose from: \"None\" - image maintains its original size; \"Contain\" - image is resized to fit while maintaining its aspect ratio; \"Cover\" - image fills the entire box while maintaining its aspect ratio; \"Fill\" - image is stretched to fill the box without maintaining its aspect ratio." => "Do wyboru: \"Brak\" - obraz zachowuje swój oryginalny rozmiar; \"Zawieraj\" - rozmiar obrazu jest zmieniany tak, aby pasował przy zachowaniu proporcji; \"Okładka\" - obraz wypełnia całe pole z zachowaniem proporcji; \"Wypełnij\" - obraz jest rozciągany w celu wypełnienia pola bez zachowania jego proporcji."
// pehelp.showNavigationButtons: "Sets the visibility and location of navigation buttons on a page." => "Ustawia widoczność i położenie przycisków nawigacyjnych na stronie."
// pehelp.showProgressBar: "Sets the visibility and location of a progress bar. The \"Auto\" value displays the progress bar above or below the survey header." => "Ustawia widoczność i położenie paska postępu. Wartość \"Auto\" wyświetla pasek postępu nad lub pod nagłówkiem ankiety."
// pehelp.showPreviewBeforeComplete: "Enable the preview page with all or answered questions only." => "Włącz stronę podglądu ze wszystkimi pytaniami lub tylko odpowiedziami."
// pehelp.questionTitleLocation: "Applies to all questions within the survey. This setting can be overridden by title alignment rules at lower levels: panel, page, or question. A lower-level setting will override those on a higher level." => "Dotyczy wszystkich pytań w ankiecie. To ustawienie może zostać zastąpione przez reguły wyrównania tytułu na niższych poziomach: panelu, strony lub pytania. Ustawienie niższego poziomu zastąpi ustawienia wyższego poziomu."
// pehelp.requiredMark: "A symbol or a sequence of symbols indicating that an answer is required." => "Symbol lub sekwencja symboli wskazująca, że odpowiedź jest wymagana."
// pehelp.questionStartIndex: "Enter a number or letter with which you want to start numbering." => "Wprowadź cyfrę lub literę, od której chcesz rozpocząć numerację."
// pehelp.questionErrorLocation: "Sets the location of an error message in relation to the question with invalid input. Choose between: \"Top\" - an error text is placed at the top of the question box; \"Bottom\" - an error text is placed at the bottom of the question box." => "Ustawia lokalizację komunikatu o błędzie w odniesieniu do pytania z nieprawidłowymi danymi wejściowymi. Wybierz pomiędzy: \"Góra\" - tekst błędu jest umieszczany w górnej części pola pytania; \"Na dole\" — tekst błędu jest umieszczany u dołu pola pytania."
// pehelp.autoFocusFirstQuestion: "Select if you want the first input field on each page ready for text entry." => "Wybierz, jeśli chcesz, aby pierwsze pole wejściowe na każdej stronie było gotowe do wprowadzenia tekstu."
// pehelp.questionOrder: "Keeps the original order of questions or randomizes them. The effect of this setting is only visible in the Preview tab." => "Zachowuje pierwotną kolejność pytań lub losuje je. Efekt tego ustawienia jest widoczny tylko na karcie Podgląd."
// pehelp.maxTextLength: "For text entry questions only." => "Tylko w przypadku pytań tekstowych."
// pehelp.maxCommentLength: "For question comments only." => "Tylko w przypadku komentarzy do pytań."
// pehelp.autoGrowComment: "Select if you want question comments and Long Text questions to auto-grow in height based on the entered text length." => "Zaznacz, jeśli chcesz, aby komentarze do pytań i pytania z długim tekstem automatycznie zwiększały się na podstawie wprowadzonej długości tekstu."
// pehelp.allowResizeComment: "For question comments and Long Text questions only." => "Tylko w przypadku komentarzy do pytań i pytań z długim tekstem."
// pehelp.calculatedValues: "Custom variables serve as intermediate or auxiliary variables used in form calculations. They take respondent inputs as source values. Each custom variable has a unique name and an expression it's based on." => "Zmienne niestandardowe służą jako zmienne pośrednie lub pomocnicze używane w obliczeniach formularzy. Przyjmują dane wejściowe respondentów jako wartości źródłowe. Każda zmienna niestandardowa ma unikatową nazwę i wyrażenie, na którym jest oparta."
// pehelp.includeIntoResult: "Select if you wish the calculated value of the expression to be saved along with survey results." => "Wybierz, czy obliczona wartość wyrażenia ma być zapisywana wraz z wynikami ankiety."
// pehelp.triggers: "A trigger is an event or condition that is based on an expression. Once the expression is evaluated to \"true\", a trigger sets off an action. Such an action can optionally have a target question it affects." => "Wyzwalacz to zdarzenie lub warunek oparty na wyrażeniu. Gdy wyrażenie zostanie ocenione na wartość \"true\", wyzwalacz uruchamia akcję. Taka akcja może opcjonalnie mieć pytanie docelowe, na które wpływa."
// pehelp.clearInvisibleValues: "Choose whether or not to clear values for questions hidden by conditional logic and when to do it." => "Wybierz, czy chcesz wyczyścić wartości pytań ukrytych przez logikę warunkową i kiedy to zrobić."
// pehelp.textUpdateMode: "Choose from: \"On lost focus\" - the value is updated when the input field loses focus; \"While typing\" - the value is updated in real-time, as users are typing." => "Do wyboru: \"W przypadku utraty fokusu\" - wartość jest aktualizowana, gdy pole wejściowe traci fokus; \"Podczas pisania\" - wartość jest aktualizowana w czasie rzeczywistym, w miarę pisania przez użytkowników."
// pehelp.columns: "The left value serves as a column ID used in conditional rules, the right value is displayed to respondents." => "Lewa wartość służy jako identyfikator kolumny używany w regułach warunkowych, prawa wartość jest wyświetlana respondentom."
// pehelp.rows: "The left value serves as a row ID used in conditional rules, the right value is displayed to respondents." => "Lewa wartość służy jako identyfikator wiersza używany w regułach warunkowych, prawa wartość jest wyświetlana respondentom."
// pehelp.columnMinWidth: "Accepts CSS values (px, %, in, pt, etc.)." => "Akceptuje wartości CSS (px, %, in, pt itp.)."
// pehelp.rowTitleWidth: "Accepts CSS values (px, %, in, pt, etc.)." => "Akceptuje wartości CSS (px, %, in, pt itp.)."
// pehelp.cellErrorLocation: "Sets the location of an error message in relation to a cell with invalid input. The \"Inherit\" option applies the setting from the \"Error message alignment\" property." => "Ustawia lokalizację komunikatu o błędzie w odniesieniu do komórki z nieprawidłowymi danymi wejściowymi. Opcja \"Dziedzicz\" stosuje ustawienie z właściwości \"Wyrównanie komunikatu o błędzie\"."
// pehelp.keyDuplicationError: "When the \"Prevent duplicate responses\" property is enabled, a respondent attempting to submit a duplicate entry will receive the following error message." => "Gdy właściwość \"Zapobiegaj zduplikowanym odpowiedziom\" jest włączona, respondent próbujący przesłać zduplikowany wpis otrzyma następujący komunikat o błędzie."
// pehelp.totalExpression: "Allows you to calculate total values based on an expression. The expression can include basic calculations (`{q1_id} + {q2_id}`), Boolean expressions (`{age} > 60`) and functions ('iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, etc.)." => "Umożliwia obliczanie wartości całkowitych na podstawie wyrażenia. Wyrażenie może zawierać podstawowe obliczenia ('{q1_id} + {q2_id}'), wyrażenia logiczne ('{age} > 60') i funkcje ('iif()', 'today()', 'age()', 'min()', 'max()', 'avg()' itp.)."
// pehelp.confirmDelete: "Triggers a prompt asking to confirm the row deletion." => "Wyzwala monit z prośbą o potwierdzenie usunięcia wiersza."
// pehelp.copyDefaultValueFromLastEntry: "Duplicates answers from the last row and assigns them to the next added dynamic row." => "Duplikuje odpowiedzi z ostatniego wiersza i przypisuje je do następnego dodanego wiersza dynamicznego."
// pehelp.description: "Type a subtitle." => "Wpisz napisy."
// pehelp.locale: "Choose a language to begin creating your survey. To add a translation, switch to a new language and translate the original text here or in the Translations tab." => "Wybierz język, aby rozpocząć tworzenie ankiety. Aby dodać tłumaczenie, przełącz się na nowy język i przetłumacz oryginalny tekst tutaj lub na karcie Tłumaczenia."
// pehelp.detailPanelMode: "Sets the location of a details section in relation to a row. Choose from: \"None\" - no expansion is added; \"Under the row\" - a row expansion is placed under each row of the matrix; \"Under the row, display one row expansion only\" - an expansion is displayed under a single row only, the remaining row expansions are collapsed." => "Ustawia położenie sekcji szczegółów w odniesieniu do wiersza. Do wyboru: \"Brak\" - nie jest dodawane rozszerzenie; \"Pod wierszem\" - pod każdym rzędem macierzy umieszcza się rozwinięcie wiersza; \"Pod wierszem wyświetl tylko rozwinięcie jednego wiersza\" - rozwinięcie jest wyświetlane tylko pod jednym wierszem, pozostałe rozwinięcia wierszy są zwinięte."
// pehelp.imageFit: "Choose from: \"None\" - image maintains its original size; \"Contain\" - image is resized to fit while maintaining its aspect ratio; \"Cover\" - image fills the entire box while maintaining its aspect ratio; \"Fill\" - image is stretched to fill the box without maintaining its aspect ratio." => "Do wyboru: \"Brak\" - obraz zachowuje swój oryginalny rozmiar; \"Zawieraj\" - rozmiar obrazu jest zmieniany tak, aby pasował przy zachowaniu proporcji; \"Okładka\" - obraz wypełnia całe pole z zachowaniem proporcji; \"Wypełnij\" - obraz jest rozciągany w celu wypełnienia pola bez zachowania jego proporcji."
// pehelp.autoGrow: "Gradually increases the height of the input field as data is being entered. Overrides the \"Input field height (in lines)\" setting." => "Stopniowo zwiększa wysokość pola wprowadzania danych podczas wprowadzania danych. Zastępuje ustawienie \"Wysokość pola wprowadzania (w wierszach)\"."
// pehelp.allowResize: "The resize handle (or grip) appears in the corner and can be dragged to alter the size of the input field." => "Uchwyt zmiany rozmiaru pojawi się w rogu i można go przeciągnąć, aby zmienić rozmiar pola wejściowego."
// pehelp.timeLimit: "A time interval in seconds after which the survey auto-advances to the Thank You page." => "Przedział czasu w sekundach, po przekroczeniu którego ankieta automatycznie przechodzi do strony z podziękowaniem."
// pehelp.timeLimitPerPage: "A time interval in seconds after which the survey auto-advances to the next page." => "Przedział czasu w sekundach, po którym ankieta automatycznie przechodzi do następnej strony."
// page.timeLimit: "A time interval in seconds after which the survey auto-advances to the next page." => "Przedział czasu w sekundach, po którym ankieta automatycznie przechodzi do następnej strony."
// page.visibleIf: "Use the magic wand icon to set a conditional rule that determines page visibility." => "Użyj ikony magicznej różdżki, aby ustawić regułę warunkową, która określa widoczność strony."
// page.enableIf: "Use the magic wand icon to set a conditional rule that disables the read-only mode for the page." => "Użyj ikony magicznej różdżki, aby ustawić regułę warunkową, która wyłącza tryb tylko do odczytu dla strony."
// page.requiredIf: "Use the magic wand icon to set a conditional rule that prevents survey submission unless at least one nested question has an answer." => "Użyj ikony magicznej różdżki, aby ustawić regułę warunkową, która uniemożliwia przesłanie ankiety, chyba że co najmniej jedno zagnieżdżone pytanie ma odpowiedź."
// page.questionTitleLocation: "Applies to all questions within this page. If you want to override this setting, define title alignment rules for individual questions or panels. The \"Inherit\" option applies the survey-level setting (\"Top\" by default)." => "Dotyczy wszystkich pytań na tej stronie. Jeśli chcesz zastąpić to ustawienie, zdefiniuj reguły wyrównania tytułów dla poszczególnych pytań lub paneli. Opcja \"Dziedzicz\" stosuje ustawienie na poziomie ankiety (domyślnie \"Góra\")."
// page.questionErrorLocation: "Sets the location of an error message in relation to the question with invalid input. Choose between: \"Top\" - an error text is placed at the top of the question box; \"Bottom\" - an error text is placed at the bottom of the question box. The \"Inherit\" option applies the survey-level setting (\"Top\" by default)." => "Ustawia lokalizację komunikatu o błędzie w odniesieniu do pytania z nieprawidłowymi danymi wejściowymi. Wybierz pomiędzy: \"Góra\" - tekst błędu jest umieszczany w górnej części pola pytania; \"Na dole\" — tekst błędu jest umieszczany u dołu pola pytania. Opcja \"Dziedzicz\" stosuje ustawienie na poziomie ankiety (domyślnie \"Góra\")."
// page.questionOrder: "Keeps the original order of questions or randomizes them. The \"Inherit\" option applies the survey-level setting (\"Original\" by default). The effect of this setting is only visible in the Preview tab." => "Zachowuje pierwotną kolejność pytań lub losuje je. Opcja \"Dziedzicz\" stosuje ustawienie na poziomie ankiety (domyślnie \"Oryginalne\"). Efekt tego ustawienia jest widoczny tylko na karcie Podgląd."
// page.showNavigationButtons: "Sets the visibility of navigation buttons on the page. The \"Inherit\" option applies the survey-level setting, which defaults to \"Visible\"." => "Ustawia widoczność przycisków nawigacyjnych na stronie. Opcja \"Dziedzicz\" stosuje ustawienie na poziomie ankiety, które domyślnie ma wartość \"Widoczny\"."
// pehelp.panelsState: "Choose from: \"Locked\" - users cannot expand or collapse panels; \"Collapse all\" - all panels start in a collapsed state; \"Expand all\" - all panels start in an expanded state; \"First expanded\" - only the first panel is initially expanded." => "Do wyboru: \"Zablokowany\" - użytkownicy nie mogą rozwijać ani zwijać paneli; \"Zwiń wszystko\" - wszystkie panele rozpoczynają się w stanie zwiniętym; \"Rozwiń wszystko\" - wszystkie panele rozpoczynają się w stanie rozwiniętym; \"Pierwszy rozwinięty\" - początkowo rozwijany jest tylko pierwszy panel."
// pehelp.imageLinkName: "Enter a shared property name within the array of objects that contains the image or video file URLs you want to display in the choice list." => "Wprowadź nazwę właściwości współużytkowanej w tablicy obiektów zawierających adresy URL obrazów lub plików wideo, które mają być wyświetlane na liście wyborów."
// pehelp.choices: "The left value serves as an item ID used in conditional rules, the right value is displayed to respondents." => "Lewa wartość służy jako identyfikator elementu używany w regułach warunkowych, prawa wartość jest wyświetlana respondentom."
// pehelp.title: "Type a user-friendly title to display." => "Wpisz przyjazny dla użytkownika tytuł do wyświetlenia."
// pehelp.waitForUpload: "Ensures that users won't complete the survey until files are uploaded." => "Gwarantuje, że użytkownicy nie ukończą ankiety, dopóki pliki nie zostaną przekazane."
// pehelp.minWidth: "Accepts CSS values (px, %, in, pt, etc.)." => "Akceptuje wartości CSS (px, %, in, pt itp.)."
// pehelp.maxWidth: "Accepts CSS values (px, %, in, pt, etc.)." => "Akceptuje wartości CSS (px, %, in, pt itp.)."
// pehelp.width: "Accepts CSS values (px, %, in, pt, etc.)." => "Akceptuje wartości CSS (px, %, in, pt itp.)."
// pehelp.useDisplayValuesInDynamicTexts: "In single- and multiple-selection question types, each choice option has an ID and display value. When selected, this setting shows a display value instead of an ID value in HTML questions and dynamic titles and descriptions of survey elements." => "W pytaniach typu jednokrotnego i wielokrotnego wyboru każda opcja wyboru ma identyfikator i wartość wyświetlaną. Po wybraniu tej opcji w pytaniach HTML oraz dynamicznych tytułach i opisach elementów ankiety wyświetlana jest wartość wyświetlana zamiast wartości identyfikatora."
// pehelp.clearIfInvisible: "Choose whether or not to clear question values hidden by conditional logic and when to do it. The \"Inherit\" option applies the survey-level setting (\"Upon survey completion\" by default)." => "Wybierz, czy chcesz wyczyścić wartości pytań ukryte przez logikę warunkową i kiedy to zrobić. Opcja \"Dziedzicz\" stosuje ustawienie na poziomie ankiety (domyślnie \"Po zakończeniu ankiety\")."
// pehelp.choicesFromQuestionMode: "Choose from: \"All\" - copies all choice options from the selected question; \"Selected\" - dynamically copies only selected choice options; \"Unselected\" - dynamically copies only unselected choice options. The \"None\" and \"Other\" options are copied by default if enabled in the source question." => "Wybierz spośród: \"Wszystkie\" - kopiuje wszystkie opcje wyboru z wybranego pytania; \"Wybrane\" - dynamicznie kopiuje tylko wybrane opcje wyboru; \"Niewybrane\" - dynamicznie kopiuje tylko niezaznaczone opcje wyboru. Opcje \"Brak\" i \"Inne\" są domyślnie kopiowane, jeśli są włączone w pytaniu źródłowym."
// pehelp.showOtherItem: "When selected, users can include additional input in a separate comment box." => "Po wybraniu tej opcji użytkownicy mogą uwzględnić dodatkowe dane wejściowe w osobnym polu komentarza."
// pehelp.separateSpecialChoices: "Displays each special choice option (\"None\", \"Other\", \"Select All\") on a new line, even when using a multiple-column layout." => "Wyświetla każdą opcję wyboru specjalnego (\"Brak\", \"Inne\", \"Zaznacz wszystko\") w nowym wierszu, nawet w przypadku korzystania z układu wielokolumnowego."
// pehelp.path: "Specify the location within the service dataset where the target array of objects is located. Leave empty if the URL already points to the array." => "Określ lokalizację w zestawie danych usługi, w której znajduje się docelowa tablica obiektów. Pozostaw puste, jeśli adres URL wskazuje już tablicę."
// pehelp.titleName: "Enter a uniform property name within the array of objects that contains the values you want to display in the choice list." => "Wprowadź jednolitą nazwę właściwości w tablicy obiektów, która zawiera wartości, które mają być wyświetlane na liście wyborów."
// pehelp.allowEmptyResponse: "Select to allow the service to return an empty response or array." => "Zaznacz, aby zezwolić usłudze na zwrócenie pustej odpowiedzi lub tablicy."
// pehelp.choicesVisibleIf: "Use the magic wand icon to set a conditional rule that determines the visibility of all choice options." => "Użyj ikony magicznej różdżki, aby ustawić regułę warunkową, która określa widoczność wszystkich opcji wyboru."
// pehelp.rateValues: "The left value serves as an item ID used in conditional rules, the right value is displayed to respondents." => "Lewa wartość służy jako identyfikator elementu używany w regułach warunkowych, prawa wartość jest wyświetlana respondentom."
// rating.displayMode: "\"Auto\" selects between the \"Buttons\" and \"Dropdown\" modes based on the available width. When the width is insufficient to display buttons, the question displays a dropdown." => "\"Auto\" wybiera między trybami \"Przyciski\" i \"Rozwijane\" w zależności od dostępnej szerokości. Gdy szerokość jest niewystarczająca do wyświetlenia przycisków, w pytaniu zostanie wyświetlona lista rozwijana."
// pehelp.valuePropertyName: "Allows you to connect questions that produce results in different formats. When such questions are linked together using a join identifier, this shared property stores selected question values." => "Umożliwia łączenie pytań, które dają wyniki w różnych formatach. Gdy takie pytania są połączone ze sobą za pomocą identyfikatora sprzężenia, ta właściwość współużytkowana przechowuje wybrane wartości pytań."
// pehelp.searchEnabled: "Select if you want to update the drop-down menu contents to match the search query that a user is typing in the input field." => "Wybierz, czy chcesz zaktualizować zawartość menu rozwijanego, aby pasowała do zapytania wyszukiwania wpisywanego przez użytkownika w polu wejściowym."
// pehelp.valueTrue: "A value to save in survey results when respondents give a positive answer." => "Wartość, którą należy zapisać w wynikach ankiety, gdy respondenci udzielą pozytywnej odpowiedzi."
// pehelp.valueFalse: "A value to save in survey results when respondents give a negative answer." => "Wartość, która ma zostać zapisana w wynikach ankiety, gdy respondenci udzielą odpowiedzi negatywnej."
// pehelp.showPreview: "It's not recommended to disable this option as it overrides the Preview image and makes it hard for a user to understand whether the files have been uploaded." => "Nie zaleca się wyłączania tej opcji, ponieważ zastępuje ona obraz podglądu i utrudnia użytkownikowi zrozumienie, czy pliki zostały przekazane."
// pehelp.needConfirmRemoveFile: "Triggers a prompt asking to confirm the file deletion." => "Uruchamia monit z prośbą o potwierdzenie usunięcia pliku."
// pehelp.selectToRankEnabled: "Enable to rank only selected choices. Users will drag selected items from the choice list to order them within the ranking area." => "Włącz, aby uszeregować tylko wybrane wybory. Użytkownicy będą przeciągać wybrane elementy z listy wyboru, aby uporządkować je w obszarze rankingu."
// pehelp.dataList: "Enter a list of choices that will be suggested to the respondent during input." => "Wprowadź listę opcji, które zostaną zasugerowane respondentowi podczas wprowadzania danych."
// pehelp.inputSize: "The setting only resizes the input fields and doesn't affect the width of the question box." => "To ustawienie zmienia tylko rozmiar pól wejściowych i nie wpływa na szerokość pola pytania."
// pehelp.itemTitleWidth: "Sets consistent width for all item labels in pixels" => "Ustawia stałą szerokość dla wszystkich etykiet elementów w pikselach"
// pehelp.contentMode: "The \"Auto\" option automatically determines the suitable mode for display - Image, Video, or YouTube - based on the source URL provided." => "Opcja \"Auto\" automatycznie określa odpowiedni tryb wyświetlania - Obraz, Wideo lub YouTube - na podstawie podanego źródłowego adresu URL."
// pehelp.altText: "Serves as a substitute when the image cannot be displayed on a user's device and for accessibility purposes." => "Służy jako substytut, gdy obraz nie może być wyświetlany na urządzeniu użytkownika oraz w celu ułatwienia dostępu."
// pehelp.rateColorMode: "Defines the color of the selected emoji when the Rating icon type is set to \"Smileys\". Choose between: \"Default\" - the selected emoji appears in default survey color; \"Scale\" - the selected emoji inherits color from the rating scale." => "Określa kolor wybranego emoji, gdy typ ikony oceny jest ustawiony na \"Emotikony\". Wybierz pomiędzy: \"Domyślny\" - wybrany emoji pojawia się w domyślnym kolorze ankiety; \"Skala\" - wybrany emoji dziedziczy kolor ze skali ocen."
// expression.name: "An expression ID that is not visible to respondents." => "Identyfikator wyrażenia, który nie jest widoczny dla respondentów."
// expression.description: "Type an expression subtitle." => "Wpisz podtytuł wyrażenia."
// expression.expression: "An expression can include basic calculations (`{q1_id} + {q2_id}`), conditions (`{age} > 60`), and functions ('iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, etc.)." => "Wyrażenie może zawierać podstawowe obliczenia ('{q1_id} + {q2_id}'), warunki ('{wiek} > 60') i funkcje ('iif()', 'today()', 'age()', 'min()', 'max()', 'avg()' itp.)."
// pehelp.storeOthersAsComment: "Select to store the \"Other\" option value as a separate property in survey results." => "Wybierz, aby zapisać wartość opcji \"Inne\" jako oddzielną właściwość w wynikach ankiety."
// p.swapOrder: "Swap the order of Yes and No" => "Zamień kolejność Tak i Nie"
// p.itemTitleWidth: "Item label width (in px)" => "Szerokość etykiety elementu (w pikselach)"
// p.selectToRankEmptyRankedAreaText: "Text to show if all options are selected" => "Tekst pokazujący, czy wszystkie opcje są zaznaczone"
// p.selectToRankEmptyUnrankedAreaText: "Placeholder text for the ranking area" => "Tekst zastępczy dla obszaru klasyfikacji"
// pe.autoAdvanceAllowComplete: "Complete the survey automatically" => "Wypełnij ankietę automatycznie"
// pehelp.autoAdvanceAllowComplete: "Select if you want the survey to complete automatically after a respondent answers all questions." => "Wybierz, jeśli chcesz, aby ankieta była wypełniana automatycznie po udzieleniu odpowiedzi respondenta na wszystkie pytania."
// masksettings.saveMaskedValue: "Save masked value in survey results" => "Zapisywanie zamaskowanej wartości w wynikach ankiety"
// patternmask.pattern: "Value pattern" => "Wzorzec wartości"
// datetimemask.min: "Minimum value" => "Wartość minimalna"
// datetimemask.max: "Maximum value" => "Wartość maksymalna"
// numericmask.allowNegativeValues: "Allow negative values" => "Zezwalaj na wartości ujemne"
// numericmask.thousandsSeparator: "Thousands separator" => "Separator tysięcy"
// numericmask.decimalSeparator: "Decimal separator" => "Separator dziesiętny"
// numericmask.precision: "Value precision" => "Precyzja wartości"
// numericmask.min: "Minimum value" => "Wartość minimalna"
// numericmask.max: "Maximum value" => "Wartość maksymalna"
// currencymask.prefix: "Currency prefix" => "Prefiks waluty"
// currencymask.suffix: "Currency suffix" => "Sufiks waluty"
// pe.maskType: "Input mask type" => "Typ maski wprowadzania"
// maskTypes.patternmask: "Pattern" => "Deseń"
// maskTypes.numericmask: "Numeric" => "Numeryczny"
// maskTypes.datetimemask: "Date and Time" => "Data i godzina"
// maskTypes.currencymask: "Currency" => "Waluta"
// tabs.mask: "Input Mask Settings" => "Ustawienia maski wprowadzania"
// pe.pattern_placeholder: "Ex.: +1(999)-999-99-99" => "Np.: +1(999)-999-99-99"
// pe.datetimepattern_placeholder: "Ex.: mm/dd/yyyy" => "Np.: mm/dd/rrrr"
// pe.currencyprefix_placeholder: "Ex.: $" => "Przykład: $"
// pe.currencysuffix_placeholder: "Ex.: USD" => "Np.: USD"
// pv.textWrapEnabled: "Wrap choices" => "Opcje zawijania"
// question.textWrapEnabled: "Long texts in choice options will automatically generate line breaks to fit within the drop-down menu. Unselect if you want the texts to clip." => "Długie teksty w opcjach wyboru automatycznie wygenerują podziały wierszy, aby zmieścić się w menu rozwijanym. Usuń zaznaczenie, jeśli chcesz, aby teksty zostały przycięte."
// masksettings.saveMaskedValue: "Select if you want to store the question value with an applied mask in survey results." => "Wybierz, czy chcesz przechowywać wartość pytania z zastosowaną maską w wynikach ankiety."
// patternmask.pattern: "The pattern can contain string literals and the following placeholders: `9` - for a digit; `a` - for an upper- or lower-case letter; `#` - for a digit or an upper- or lower-case letter. Use backslash `\\` to escape a character." => "Wzorzec może zawierać literały ciągu i następujące symbole zastępcze: \"9\" — dla cyfry; 'a' - dla wielkiej lub małej litery; '#' - dla cyfry lub wielkiej lub małej litery. Użyj ukośnika odwrotnego \"\\\", aby uciec od znaku."
// datetimemask.pattern: "The pattern can contain separator characters and the following placeholders: `m` - for month number; `mm` - for month number, with leading zero for single-digit values; `d` - for day of the month; `dd` - for day of the month, with leading zero for single-digit values; `yy` - for the last two digits of the year; `yyyy` - for a four-digit year." => "Wzorzec może zawierać znaki separatora i następujące symbole zastępcze: \"m\" - dla numeru miesiąca; 'mm' - dla numeru miesiąca, z zerem wiodącym dla wartości jednocyfrowych; 'd' - dzień miesiąca; 'dd' - dla dnia miesiąca, z zerem wiodącym dla wartości jednocyfrowych; 'yy' - dla dwóch ostatnich cyfr roku; \"yyyy\" - dla roku czterocyfrowego."
// numericmask.decimalSeparator: "A symbol used to separate the fractional part from the integer part of a displayed number." => "Symbol używany do oddzielenia części ułamkowej od części całkowitej wyświetlanej liczby."
// numericmask.thousandsSeparator: "A symbol used to separate the digits of a large number into groups of three." => "Symbol używany do rozdzielania cyfr dużej liczby na grupy po trzy."
// numericmask.precision: "Limits how many digits to retain after the decimal point for a displayed number." => "Ogranicza liczbę cyfr, które mają być zachowywane po przecinku dziesiętnym wyświetlanej liczby."
// currencymask.prefix: "One or several symbols to be displayed before the value." => "Jeden lub kilka symboli, które mają być wyświetlane przed wartością."
// currencymask.suffix: "One or several symbols to be displayed after the value." => "Jeden lub kilka symboli, które mają być wyświetlane po wartości."
// ed.translationSource: "Source: " => "Źródło: "
// ed.translationTarget: "Target: " => "Cel: "
// ed.pagePlaceHolder: "The page is empty. Drag an element from the toolbox or click the button below." => "Strona jest pusta. Przeciągnij element z przybornika lub kliknij przycisk poniżej."
// maskTypes.none: "None" => "Żaden"
// itemvalue@rows.visibleIf: "Make the row visible if" => "Uwidocznij wiersz, jeśli"
// itemvalue@rows.enableIf: "Make the row editable if" => "Umożliwia edycję wiersza, jeśli"
// signaturepad.placeholderReadOnly: "Placeholder text in read-only or preview mode" => "Tekst zastępczy w trybie tylko do odczytu lub podglądu"
// pe.textWrapEnabled: "Wrap choices" => "Opcje zawijania"
// image.contentMode: "The \"Auto\" option automatically determines the suitable mode for display - Image, Video, or YouTube - based on the source URL provided." => "Opcja \"Auto\" automatycznie określa odpowiedni tryb wyświetlania - Obraz, Wideo lub YouTube - na podstawie podanego źródłowego adresu URL."
// imagepicker.contentMode: "Choose between \"Image\" and \"Video\" to set the content mode of the media selector. If \"Image\" is selected, ensure that all options provided are image files in the following formats: JPEG, GIF, PNG, APNG, SVG, BMP, ICO. Similarly, if \"Video\" is selected, ensure that all options are direct links to video files in the following formats: MP4, MOV, WMV, FLV, AVI, MKV. Please note that YouTube links are not supported for video options." => "Wybierz pomiędzy \"Obraz\" i \"Wideo\", aby ustawić tryb zawartości selektora multimediów. W przypadku wybrania opcji \"Obraz\" upewnij się, że wszystkie dostępne opcje są plikami graficznymi w następujących formatach: JPEG, GIF, PNG, APNG, SVG, BMP, ICO. Podobnie, jeśli wybrana jest opcja \"Wideo\", upewnij się, że wszystkie opcje są bezpośrednimi linkami do plików wideo w następujących formatach: MP4, MOV, WMV, FLV, AVI, MKV. Należy pamiętać, że linki do YouTube nie są obsługiwane w przypadku opcji wideo."
// ed.selectFile: "Select a file" => "Wybierz plik"
// ed.removeFile: "Remove the file" => "Usuń plik"
// pe.searchMode: "Search Mode" => "Tryb wyszukiwania"
// ed.surveyPlaceHolderMobile: "Click the \"Add Question\" button below to start creating your form." => "Kliknij przycisk \"Dodaj pytanie\" poniżej, aby rozpocząć tworzenie formularza."
// ed.pagePlaceHolderMobile: "Click the \"Add Question\" button below to add a new element to the page." => "Kliknij przycisk \"Dodaj pytanie\" poniżej, aby dodać nowy element do strony."
// ed.panelPlaceHolderMobile: "Click the \"Add Question\" button below to add a new element to the panel." => "Kliknij przycisk \"Dodaj pytanie\" poniżej, aby dodać nowy element do panelu."
// ed.imagePlaceHolderMobile: "Click the button below and choose an image to upload" => "Kliknij poniższy przycisk i wybierz obraz do przesłania"
// coloralpha.opacity: "Opacity" => "Nieprzezroczystość"
// font.family: "Font family" => "Rodzina czcionek"
// font.color: "Color" => "Kolor"
// font.placeholderColor: "Placeholder color" => "Kolor symbolu zastępczego"
// font.size: "Size" => "Rozmiar"
// theme.themeName: "Theme" => "Kompozycja"
// theme.isPanelless: "Question appearance" => "Wygląd pytania"
// theme.editorPanel: "Background and corner radius" => "Tło i promień narożnika"
// theme.questionPanel: "Background and corner radius" => "Tło i promień narożnika"
// theme.primaryColor: "Accent color" => "Kolor akcentujący"
// theme.panelBackgroundTransparency: "Panel background opacity" => "Krycie tła panelu"
// theme.questionBackgroundTransparency: "Question background opacity" => "Nieprzezroczystość tła pytania"
// theme.fontSize: "Font size" => "Rozmiar czcionki"
// theme.scale: "Scale" => "Skala"
// theme.cornerRadius: "Corner radius" => "Promień naroża"
// theme.pageTitle: "Title font" => "Czcionka tytułu"
// theme.pageDescription: "Description font" => "Czcionka opisu"
// theme.questionTitle: "Title font" => "Czcionka tytułu"
// theme.questionDescription: "Description font" => "Czcionka opisu"
// theme.editorFont: "Font" => "Czcionka"
// theme.backgroundOpacity: "Opacity" => "Nieprzezroczystość"
// theme.--sjs-font-family: "Font family" => "Rodzina czcionek"
// theme.--sjs-general-backcolor-dim: "Background color" => "Kolor tła"
// theme.--sjs-primary-backcolor: "Accent background" => "Tło akcentu"
// theme.--sjs-primary-forecolor: "Accent foreground" => "Akcent na pierwszym planie"
// theme.--sjs-shadow-small: "Shadow effects" => "Efekty cienia"
// theme.--sjs-shadow-inner: "Shadow effects" => "Efekty cienia"
// theme.--sjs-border-default: "Colors" => "Kolory"
// header@header.headerView: "View" => "Widok"
// header@header.logoPosition: "Logo position" => "Pozycja logo"
// header@header.surveyTitle: "Survey title font" => "Czcionka tytułu ankiety"
// header@header.surveyDescription: "Survey description font" => "Czcionka opisu ankiety"
// header@header.headerTitle: "Survey title font" => "Czcionka tytułu ankiety"
// header@header.headerDescription: "Survey description font" => "Czcionka opisu ankiety"
// header@header.inheritWidthFrom: "Content area width" => "Szerokość obszaru zawartości"
// header@header.textAreaWidth: "Text width" => "Szerokość tekstu"
// header@header.backgroundColorSwitch: "Background color" => "Kolor tła"
// header@header.backgroundImage: "Background image" => "Obraz w tle"
// header@header.backgroundImageOpacity: "Opacity" => "Nieprzezroczystość"
// header@header.overlapEnabled: "Overlap" => "Zachodzić na siebie"
// header@header.logoPositionX: "Logo position" => "Pozycja logo"
// header@header.titlePositionX: "Title position" => "Pozycja tytułu"
// header@header.descriptionPositionX: "Description position" => "Opis pozycja"
// weight.400: "Regular" => "Regularny"
// weight.600: "Heavy" => "Ciężki"
// weight.700: "Semi-bold" => "Półpogrubienie"
// weight.800: "Bold" => "Śmiały"
// backgroundImageFit.auto: "Auto" => "Automatycznie"
// backgroundImageFit.cover: "Cover" => "Pokryć"
// backgroundImageFit.contain: "Contain" => "Zawierać"
// backgroundImageFit.fill: "Stretch" => "Rozciągnąć"
// backgroundImageFit.tile: "Tile" => "Kafelek"
// backgroundImageAttachment.fixed: "Fixed" => "Stały"
// backgroundImageAttachment.scroll: "Scroll" => "Przewijać"
// headerView.basic: "Basic" => "Podstawowy"
// headerView.advanced: "Advanced" => "Zaawansowany"
// inheritWidthFrom.survey: "Same as survey" => "Tak samo jak ankieta"
// inheritWidthFrom.container: "Fit to container" => "Pasuje do pojemnika"
// backgroundColorSwitch.none: "None" => "Żaden"
// backgroundColorSwitch.accentColor: "Accent color" => "Kolor akcentujący"
// backgroundColorSwitch.custom: "Custom" => "Zwyczaj"
// colorPalette.light: "Light" => "Światło"
// colorPalette.dark: "Dark" => "Ciemny"
// isPanelless.false: "Default" => "Domyślny"
// isPanelless.true: "Without Panels" => "Bez paneli"
// theme.cornerRadius: "Corner radius" => "Promień naroża"
// theme.fontFamily: "Font family" => "Rodzina czcionek"
// theme.fontWeightRegular: "Regular" => "Regularny"
// theme.fontWeightHeavy: "Heavy" => "Ciężki"
// theme.fontWeightSemiBold: "Semi-bold" => "Półpogrubienie"
// theme.fontWeightBold: "Bold" => "Śmiały"
// theme.color: "Color" => "Kolor"
// theme.placeholderColor: "Placeholder color" => "Kolor symbolu zastępczego"
// theme.size: "Size" => "Rozmiar"
// theme.opacity: "Opacity" => "Nieprzezroczystość"
// ed.toolboxFilteredTextPlaceholder: "Type to search..." => "Wpisz, aby wyszukać..."
// ed.toolboxNoResultsFound: "No results found" => "Nie znaleziono wyników"
// paneldynamic.tabTitlePlaceholder: "Tab title placeholder" => "Symbol zastępczy tytułu tabulatora"
// theme.--sjs-special-red: "Error messages" => "Komunikaty o błędach"
// paneldynamic.tabTitlePlaceholder: "A fallback text for tab titles that applies when the tab title pattern doesn't produce a meaningful value." => "Tekst zastępczy dla tytułów tabulatorów, który ma zastosowanie, gdy wzorzec tytułu tabulatora nie generuje znaczącej wartości."
// theme.fontColor: "Font color" => "Kolor czcionki"
// theme.backgroundColor: "Background color" => "Kolor tła"
// pe.questionTitleWidth: "Question title width" => "Szerokość tytułu pytania"
// pe.fileInputPlaceholder: "Select a file or paste a file link..." => "Wybierz plik lub wklej link do pliku..."
// panelbase.questionTitleWidth: "Ex.: 200px" => "Przykład: 200 pikseli"
// panel.questionTitleWidth: "Sets consistent width for question titles when they are aligned to the left of their question boxes. Accepts CSS values (px, %, in, pt, etc.)." => "Ustawia spójną szerokość tytułów pytań, gdy są one wyrównane do lewej strony pól pytań. Akceptuje wartości CSS (px, %, in, pt itp.)."
// page.questionTitleWidth: "Sets consistent width for question titles when they are aligned to the left of their question boxes. Accepts CSS values (px, %, in, pt, etc.)." => "Ustawia spójną szerokość tytułów pytań, gdy są one wyrównane do lewej strony pól pytań. Akceptuje wartości CSS (px, %, in, pt itp.)."
// pe.commentAreaRows: "Comment area height (in lines)" => "Wysokość obszaru komentarza (w wierszach)"
// pehelp.commentAreaRows: "Sets the number of displayed lines in text areas for question comments. In the input takes up more lines, the scroll bar appears." => "Ustawia liczbę wierszy wyświetlanych w obszarach tekstowych dla komentarzy do pytań. W danych wejściowych pojawia się więcej wierszy, pojawia się pasek przewijania."
// pe.enabled: "Enabled" => "Włączone"
// pe.disabled: "Disabled" => "Niepełnosprawny"
// pe.inherit: "Inherit" => "Odziedziczyć"
// pe.validateVisitedEmptyFields: "Validate empty fields on lost focus" => "Weryfikowanie pustych pól w przypadku utraty fokusu"
// panellayoutcolumn.effectiveWidth: "Ex.: 30%" => "Przykład: 30%"
// panellayoutcolumn.questionTitleWidth: "Ex.: 200px" => "Przykład: 200px"
// pehelp.validateVisitedEmptyFields: "Enable this option to trigger validation when a user focuses on an empty input field and then leaves it without making any changes." => "Włącz tę opcję, aby wyzwolić walidację, gdy użytkownik skupi się na pustym polu wejściowym, a następnie opuści je bez wprowadzania żadnych zmian."
// pehelp.colCount: "Arranges choice options in a multi-column layout. When set to 0, the options are displayed in a single line." => "Rozmieszcza opcje wyboru w układzie wielokolumnowym. Po ustawieniu wartości 0 opcje są wyświetlane w jednym wierszu."
// theme.isPanelless: "This setting applies only to questions outside of a panel." => "To ustawienie ma zastosowanie tylko do pytań znajdujących się poza panelem."
// theme.primaryColor: "Sets a supplementary color that highlights key survey elements." => "Ustawia kolor dodatkowy, który wyróżnia kluczowe elementy ankiety."
// theme.panelBackgroundTransparency: "Adjusts the transparency of panels and question boxes relative to the survey background." => "Dostosowuje przezroczystość paneli i pól pytań względem tła ankiety."
// theme.questionBackgroundTransparency: "Adjusts the transparency of input elements relative to the survey background." => "Dostosowuje przezroczystość elementów wejściowych względem tła ankiety."
// theme.cornerRadius: "Sets the corner radius for all rectangular elements. Enable the Advanced Mode if you want to set individual corner radius values for input elements or panels and question boxes." => "Ustawia promień narożnika dla wszystkich elementów prostokątnych. Włącz tryb zaawansowany, jeśli chcesz ustawić indywidualne wartości promienia narożnika dla elementów wejściowych lub paneli i pól pytań."
// theme.--sjs-general-backcolor-dim: "Sets the main background color of the survey." => "Ustawia główny kolor tła ankiety."
// header.inheritWidthFrom: "The \"Same as container\" option auto-adjusts the header content area width to fit into the HTML element the survey is placed in." => "Opcja \"Taki sam jak kontener\" automatycznie dostosowuje szerokość obszaru zawartości nagłówka, aby pasowała do elementu HTML, w którym umieszczono ankietę."
// header.textAreaWidth: "The width of the header area that contains the survey title and description, measured in pixels." => "Szerokość obszaru nagłówka, który zawiera tytuł i opis ankiety, mierzona w pikselach."
// panellayoutcolumn.effectiveWidth: "Accepts values %." => "Akceptuje wartości %."
// panellayoutcolumn.questionTitleWidth: "Accepts values px." => "Akceptuje wartości px."
// p.effectiveColSpan: "Column span" => "Rozpiętość kolumn"
// progressBarInheritWidthFrom.survey: "Same as survey" => "Tak samo jak w przypadku ankiety"
// progressBarInheritWidthFrom.container: "Same as container" => "Tak samo jak kontener"
// file.allowImagesPreview: "Displays thumbnail previews for uploaded files when possible. Unselect if you want to show file icons instead." => "Wyświetla podgląd miniatur przesłanych plików, jeśli to możliwe. Usuń zaznaczenie, jeśli zamiast tego chcesz wyświetlać ikony plików."
// pehelp.progressBarInheritWidthFrom: "The \"Same as container\" option auto-adjusts the progress bar area width to fit into the HTML element the survey is placed in." => "Opcja \"Tak samo jak kontener\" automatycznie dostosowuje szerokość obszaru paska postępu, aby pasowała do elementu HTML, w którym umieszczona jest ankieta."
// p.progressBarInheritWidthFrom: "Progress bar area width" => "Szerokość obszaru paska postępu"
// maskType.none: "None" => "Żaden"
// maskType.pattern: "Pattern" => "Deseń"
// maskType.numeric: "Numeric" => "Numeryczny"
// maskType.datetime: "Date and Time" => "Data i godzina"
// maskType.currency: "Currency" => "Waluta"

// inputTextAlignment.auto: "Auto" => "Automatycznie"
// inputTextAlignment.left: "Left" => "Lewy"
// inputTextAlignment.right: "Right" => "Prawy"
// pehelp.inputTextAlignment: "Select how to align input value within the field. The default setting \"Auto\" aligns the input value to the right if currency or numeric masking is applied and to the left if not." => "Wybierz sposób wyrównania wartości wejściowej w polu. Ustawienie domyślne \"Auto\" wyrównuje wartość wejściową do prawej, jeśli stosowane jest maskowanie walutowe lub numeryczne, i do lewej, jeśli nie."
// p.inputTextAlignment: "Input value alignment" => "Wyrównanie wartości wejściowej"
// paneldynamic.showRangeInProgress: "Show the progress bar" => "Pokazywanie paska postępu"
// paneldynamic.showProgressBar: "Show the progress bar" => "Pokazywanie paska postępu"
// paneldynamic.progressBarLocation: "Progress bar alignment" => "Wyrównanie paska postępu"
// pv.carousel: "Carousel" => "Karuzela"
// progressBarLocation.top: "Top" => "Do góry"
// progressBarLocation.bottom: "Bottom" => "Dno"
// progressBarLocation.topBottom: "Top and bottom" => "Góra i dół"
// matrixdropdowncolumn.colCount: "Arranges choice options in a multi-column layout. When set to 0, the options are displayed in a single line. When set to -1, the actual value is inherited from the \"Nested column count\" property of the parent matrix." => "Rozmieszcza opcje wyboru w układzie wielokolumnowym. Po ustawieniu wartości 0 opcje są wyświetlane w jednym wierszu. Po ustawieniu wartości -1 rzeczywista wartość jest dziedziczona z właściwości \"Liczba kolumn zagnieżdżonych\" macierzy nadrzędnej."
// ed.translationYouTubeNotSupported: "YouTube links are not supported." => "Linki do YouTube nie są obsługiwane."
// ed.propertyGridPlaceholderTitle: "Start configuring your form" => "Rozpocznij konfigurowanie formularza"
// ed.propertyGridPlaceholderDescription: "Click any category icon to explore survey settings. Additional settings will become available once you add a survey element to the design surface." => "Kliknij dowolną ikonę kategorii, aby zapoznać się z ustawieniami ankiety. Dodatkowe ustawienia staną się dostępne po dodaniu elementu ankiety do powierzchni projektowej."
// pe.caseInsensitive: "Case insensitive" => "Bez uwzględniania wielkości liter"
// pehelp.caseInsensitive: "Select if uppercase and lowercase letters in the regular expression must be treated as equivalent." => "Wybierz, czy wielkie i małe litery w wyrażeniu regularnym mają być traktowane jako równoważne."

// ed.surveyPlaceholderTitle: "Your form is empty" => "Twój formularz jest pusty"
// ed.surveyPlaceholderTitleMobile: "Your form is empty" => "Twój formularz jest pusty"
// ed.surveyPlaceholderDescription: "Drag an element from the toolbox or click the button below." => "Przeciągnij element z przybornika lub kliknij przycisk poniżej."
// ed.surveyPlaceholderDescriptionMobile: "Drag an element from the toolbox or click the button below." => "Przeciągnij element z przybornika lub kliknij przycisk poniżej."
// ed.previewPlaceholderTitle: "No preview" => "Brak podglądu"
// ed.previewPlaceholderTitleMobile: "No preview" => "Brak podglądu"
// ed.previewPlaceholderDescription: "The survey doesn't contain any visible elements." => "Ankieta nie zawiera żadnych widocznych elementów."
// ed.previewPlaceholderDescriptionMobile: "The survey doesn't contain any visible elements." => "Ankieta nie zawiera żadnych widocznych elementów."
// ed.translationsPlaceholderTitle: "No strings to translate" => "Brak ciągów do tłumaczenia"
// ed.translationsPlaceholderTitleMobile: "No strings to translate" => "Brak ciągów do tłumaczenia"
// ed.translationsPlaceholderDescription: "Add elements to your form or change the strings filter in the toolbar." => "Dodaj elementy do formularza lub zmień filtr ciągów na pasku narzędzi."
// ed.translationsPlaceholderDescriptionMobile: "Add elements to your form or change the strings filter in the toolbar." => "Dodaj elementy do formularza lub zmień filtr ciągów na pasku narzędzi."
// lg.logicPlaceholderTitle: "No logical rules" => "Brak reguł logicznych"
// lg.logicPlaceholderTitleMobile: "No logical rules" => "Brak reguł logicznych"
// lg.logicPlaceholderDescription: "Create a rule to customize the flow of the survey." => "Utwórz regułę, aby dostosować przepływ ankiety."
// lg.logicPlaceholderDescriptionMobile: "Create a rule to customize the flow of the survey." => "Utwórz regułę, aby dostosować przepływ ankiety."
// pe.showTimer: "Use a timer" => "Korzystanie z minutnika"
// theme.advancedMode: "Advanced mode" => "Tryb zaawansowany"
// pehelp.timerLocation: "Sets the location of a timer on a page." => "Ustawia położenie czasomierza na stronie."
// header.mobileHeight: "When set to 0, the height is calculated automatically to accommodate the header's content." => "Po ustawieniu wartości 0 wysokość jest obliczana automatycznie, aby pomieścić zawartość nagłówka."
// p.mobileHeight: "Height on smartphones" => "Wysokość na smartfonach"
// header.overlapEnabled: "When enabled, the top of the survey overlays the bottom of the header." => "Gdy ta opcja jest włączona, górna krawędź ankiety nakłada się na dolną część nagłówka."
// ed.creatorSettingTitle: "Creator Settings" => "Ustawienia twórcy"
// tabs.accentColors: "Accent colors" => "Akcenty kolorystyczne"
// tabs.scaling: "Scaling" => "Skalowanie"
// panel.showQuestionNumbers: "Assigns numbers to questions nested within this panel." => "Przypisuje numery pytaniom zagnieżdżonym w tym panelu."
// creatortheme.--sjs-special-background: "Surface background" => "Tło powierzchni"
// creatortheme.--sjs-primary-background-500: "Primary" => "Podstawowy"
// creatortheme.--sjs-secondary-background-500: "Secondary" => "Wtórny"
// creatortheme.surfaceScale: "Surface" => "Powierzchnia"
// creatortheme.userInterfaceBaseUnit: "User interface" => "Interfejs użytkownika"
// creatortheme.fontScale: "Font" => "Czcionka"
// names.sc2020: "Survey Creator 2020" => "Kreator ankiet 2020"
// names.default-light: "Light" => "Światło"
// names.default-dark: "Dark" => "Ciemny"
// names.default-contrast: "Contrast" => "Kontrast"
// panel.showNumber: "Number this panel" => "Numeruj ten panel"
// pehelp.autoAdvanceEnabled: "Select if you want the survey to auto-advance to the next page once a respondent has answered all questions on the current page. This feature won't apply if the last question on the page is open-ended or allows multiple answers." => "Wybierz, czy chcesz, aby ankieta automatycznie przechodziła do następnej strony, gdy respondent odpowie na wszystkie pytania na bieżącej stronie. Ta funkcja nie będzie miała zastosowania, jeśli ostatnie pytanie na stronie jest otwarte lub umożliwia udzielenie wielu odpowiedzi."
// autocomplete.name: "Full Name" => "Imię i nazwisko"
// autocomplete.honorific-prefix: "Prefix" => "Przedrostek"
// autocomplete.given-name: "First Name" => "Imię"
// autocomplete.additional-name: "Middle Name" => "Drugie imię"
// autocomplete.family-name: "Last Name" => "Nazwisko"
// autocomplete.honorific-suffix: "Suffix" => "Przyrostek"
// autocomplete.nickname: "Nickname" => "Przydomek"
// autocomplete.organization-title: "Job Title" => "Stanowisko"
// autocomplete.username: "User Name" => "Nazwa użytkownika"
// autocomplete.new-password: "New Password" => "Nowe hasło"
// autocomplete.current-password: "Current Password" => "Aktualne hasło"
// autocomplete.organization: "Organization Name" => "Nazwa organizacji"
// autocomplete.street-address: "Full Street Address" => "Pełna ulica i numer domu"
// autocomplete.address-line1: "Address Line 1" => "Adres (wiersz 1)"
// autocomplete.address-line2: "Address Line 2" => "Wiersz adresu 2"
// autocomplete.address-line3: "Address Line 3" => "Adres (wiersz 3)"
// autocomplete.address-level4: "Level 4 Address" => "Adres poziomu 4"
// autocomplete.address-level3: "Level 3 Address" => "Adres poziomu 3"
// autocomplete.address-level2: "Level 2 Address" => "Adres poziomu 2"
// autocomplete.address-level1: "Level 1 Address" => "Adres poziomu 1"
// autocomplete.country: "Country Code" => "Kod kraju"
// autocomplete.country-name: "Country Name" => "Nazwa kraju"
// autocomplete.postal-code: "Postal Code" => "Kod pocztowy"
// autocomplete.cc-name: "Cardholder Name" => "Imię i nazwisko posiadacza karty"
// autocomplete.cc-given-name: "Cardholder First Name" => "Imię posiadacza karty"
// autocomplete.cc-additional-name: "Cardholder Middle Name" => "Drugie imię posiadacza karty"
// autocomplete.cc-family-name: "Cardholder Last Name" => "Nazwisko posiadacza karty"
// autocomplete.cc-number: "Credit Card Number" => "Numer karty kredytowej"
// autocomplete.cc-exp: "Expiration Date" => "Data ważności"
// autocomplete.cc-exp-month: "Expiration Month" => "Miesiąc wygaśnięcia"
// autocomplete.cc-exp-year: "Expiration Year" => "Rok wygaśnięcia"
// autocomplete.cc-csc: "Card Security Code" => "Kod zabezpieczający karty"
// autocomplete.cc-type: "Credit Card Type" => "Rodzaj karty kredytowej"
// autocomplete.transaction-currency: "Transaction Currency" => "Waluta transakcji"
// autocomplete.transaction-amount: "Transaction Amount" => "Kwota transakcji"
// autocomplete.language: "Preferred Language" => "Preferowany język"
// autocomplete.bday: "Birthday" => "Urodziny"
// autocomplete.bday-day: "Birthday Day" => "Dzień urodzin"
// autocomplete.bday-month: "Birthday Month" => "Miesiąc urodzin"
// autocomplete.bday-year: "Birthday Year" => "Rok urodzin"
// autocomplete.sex: "Gender" => "Płeć"
// autocomplete.url: "Website URL" => "Adres URL strony internetowej"
// autocomplete.photo: "Profile Photo" => "Zdjęcie profilowe"
// autocomplete.tel: "Telephone Number" => "Numer telefonu"
// autocomplete.tel-country-code: "Country Code for Phone" => "Numer kierunkowy kraju do telefonu"
// autocomplete.tel-national: "National Telephone Number" => "Krajowy numer telefonu"
// autocomplete.tel-area-code: "Area Code" => "Numer kierunkowy"
// autocomplete.tel-local: "Local Phone Number" => "Lokalny numer telefonu"
// autocomplete.tel-local-prefix: "Local Phone Prefix" => "Prefiks telefonu lokalnego"
// autocomplete.tel-local-suffix: "Local Phone Suffix" => "Sufiks telefonu lokalnego"
// autocomplete.tel-extension: "Phone Extension" => "Rozszerzenie telefonu"
// autocomplete.email: "Email Address" => "Adres e-mail"
// autocomplete.impp: "Instant Messaging Protocol" => "Protokół wiadomości błyskawicznych"
// ed.lockQuestionsTooltip: "Lock expand/collapse state for questions" => "Zablokuj stan rozwijania/zwijania dla pytań"
// pe.listIsEmpty@pages: "You don't have any pages yet" => "Nie masz jeszcze żadnych stron"
// pe.addNew@pages: "Add new page" => "Dodaj nową stronę"
// ed.zoomInTooltip: "Zoom In" => "Powiększenie"
// ed.zoomOutTooltip: "Zoom Out" => "Pomniejszanie"
// tabs.surfaceBackground: "Surface Background" => "Tło powierzchni"
// pe.copyDefaultValueFromLastEntry: "Use answers from the last entry as default" => "Domyślnie używaj odpowiedzi z ostatniego wpisu"
// colors.gray: "Gray" => "Szary"
// pe.navigationButtonsLocation: "Navigation buttons alignment" => "Wyrównanie przycisków nawigacyjnych"
// pv.allQuestions: "Show all questions" => "Pokaż wszystkie pytania"
// pv.answeredQuestions: "Show answered questions only" => "Pokaż tylko pytania, na które udzielono odpowiedzi"
// pehelp.navigationButtonsLocation: "Sets the location of navigation buttons on a page." => "Określa położenie przycisków nawigacyjnych na stronie."
// pe.choiceValuesFromQuestion: "Use values from the following matrix column or panel question as choice IDs" => "Użyj wartości z poniższego pytania typu matrix, kolumna lub pytanie panelowe jako identyfikatory wyborów"
// pe.choiceTextsFromQuestion: "Use values from the following matrix column or panel question as choice texts" => "Użyj wartości z poniższego pytania macierzowego, kolumnowego lub panelowego jako tekstów wyboru"
// pehelp.choiceValuesFromQuestion: "In single- and multiple-selection question types, each choice option has an ID and display value. This setting specifies which matrix column or panel question should provide the IDs." => "W pytaniach jednokrotnego i wielokrotnego wyboru każda opcja wyboru ma identyfikator i wartość wyświetlaną. To ustawienie określa, która kolumna macierzy lub pytanie typu panel powinno zawierać identyfikatory."
// pehelp.choiceTextsFromQuestion: "In single- and multiple-selection question types, each choice option has an ID and display value. This setting specifies which matrix column or panel question should provide the display texts." => "W pytaniach jednokrotnego i wielokrotnego wyboru każda opcja wyboru ma identyfikator i wartość wyświetlaną. To ustawienie określa, która kolumna macierzy lub pytanie typu panel powinno zawierać tekst wyświetlany."
// pe.progressBarLocation: "Progress bar alignment" => "Wyrównanie paska postępu"
// progressBarLocation.topbottom: "Top and bottom" => "Góra i dół"
// progressBarLocation.aboveheader: "Above the header" => "Nad nagłówkiem"
// progressBarLocation.belowheader: "Below the header" => "Pod nagłówkiem"
// progressBarLocation.off: "Hidden" => "Ukryty"
// survey.progressBarLocation: "Sets the location of the progress bar. The \"Auto\" value displays the progress bar above or below the survey header." => "Ustawia położenie paska postępu. Wartość \"Auto\" wyświetla pasek postępu powyżej lub poniżej nagłówka ankiety."
// survey.readOnly: "Make the survey read-only" => "Ustawianie ankiety jako tylko do odczytu"
// survey.readOnly: "Select if you want to prevent respondents from filling out your survey." => "Wybierz, czy chcesz uniemożliwić respondentom wypełnianie ankiety."
// paneldynamic.showNumber: "Number the panel" => "Numerowanie panelu"
// question.showNumber: "Number this question" => "Ponumeruj to pytanie"
// pe.previewMode: "Preview mode" => "Tryb podglądu"
// pe.gridLayoutEnabled: "Enable the grid layout" => "Włączanie układu siatki"
// pe.maskSettings: "Mask settings" => "Ustawienia maski"
// pe.detailErrorLocation: "Row expansion error message alignment" => "Wyrównanie komunikatu o błędzie rozwijania wiersza"
// pehelp.detailErrorLocation: "Sets the location of error messages for questions nested in detail sections. The \"Inherit\" option applies the setting from the \"Error message alignment\" property." => "Ustawia lokalizację komunikatów o błędach dla pytań zagnieżdżonych w sekcjach szczegółowych. Opcja \"Dziedzicz\" stosuje ustawienie z właściwości \"Wyrównanie komunikatu o błędzie\"."
// pe.gridLayoutColumns: "Grid layout columns" => "Kolumny układu siatki"
// pe.startPageTitlePlaceholder: "Start Page" => "Strona startowa"
// panellayoutcolumn.effectiveWidth: "Effective width, %" => "Szerokość efektywna, %"
// panellayoutcolumn.questionTitleWidth: "Question title width, px" => "Szerokość tytułu pytania, px"
// pe.listIsEmpty@gridLayoutColumns: "You don't have layout columns yet" => "Nie masz jeszcze kolumn układu"
// panel.effectiveColSpan: "Specifies how many columns this panel spans within the grid layout." => "Określa, ile kolumn w układzie siatki obejmuje ten panel."
// panel.gridLayoutColumns: "This table lets you configure each grid column within the panel. It automatically sets the width percentage for each column based on the maximum number of elements in a row. To customize the grid layout, manually adjust these values and define the title width for all questions in each column." => "Ta tabela umożliwia skonfigurowanie każdej kolumny siatki w panelu. Automatycznie ustawia procent szerokości dla każdej kolumny na podstawie maksymalnej liczby elementów w wierszu. Aby dostosować układ siatki, ręcznie dostosuj te wartości i zdefiniuj szerokość tytułu dla wszystkich pytań w każdej kolumnie."
// pehelp.gridLayoutEnabled: "Survey Creator allows you to manually adjust the inline widths of form elements to control the layout. If this doesn't produce the desired outcome, you can enable the grid layout, which structures form elements using a column-based system. To configure layout columns, select a page or panel and use the \"Question Settings\" → \"Grid columns\" table. To adjust how many columns a question spans, select it and set the desired value in the \"Layout\" → \"Column span\" field." => "Kreator ankiet umożliwia ręczne dostosowanie szerokości elementów formularza w tekście w celu kontrolowania układu. Jeśli nie przyniesie to pożądanego rezultatu, można włączyć układ siatki, w którym struktury tworzą elementy przy użyciu systemu opartego na kolumnach. Aby skonfigurować kolumny układu, wybierz stronę lub panel i użyj tabeli \"Ustawienia pytań\" → \"Kolumny siatki\". Aby dostosować liczbę kolumn obejmujących pytanie, zaznacz je i ustaw żądaną wartość w polu \"Układ\" → \"Zakres kolumn\"."
// question.effectiveColSpan: "Specifies how many columns this question spans within the grid layout." => "Określa, ile kolumn obejmuje to pytanie w układzie siatki."
// page.gridLayoutColumns: "This table lets you configure each grid column on the page. It automatically sets the width percentage for each column based on the maximum number of elements in a row. To customize the grid layout, manually adjust these values and define the title width for all questions in each column." => "Ta tabela umożliwia skonfigurowanie każdej kolumny siatki na stronie. Automatycznie ustawia procent szerokości dla każdej kolumny na podstawie maksymalnej liczby elementów w wierszu. Aby dostosować układ siatki, ręcznie dostosuj te wartości i zdefiniuj szerokość tytułu dla wszystkich pytań w każdej kolumnie."

// ed.expandTooltip: "Expand" => "Rozszerzać"
// ed.collapseTooltip: "Collapse" => "Zapaść"
// pe.itemTitleWidth_placeholder: "Ex.: 100px" => "Przykład: 100px"
// pehelp.itemTitleWidth: "Sets consistent width for all item labels. Accepts CSS values (px, %, in, pt, etc.)." => "Ustawia spójną szerokość dla wszystkich etykiet elementów. Akceptuje wartości CSS (px, %, in, pt itd.)."
// ed.zoom100Tooltip: "Zoom to 100%" => "Powiększenie do 100%"
// ed.addLanguageTooltip: "Add Language" => "Dodaj język"
// pehelp.commentAreaRows: "Sets the number of displayed lines in text areas for question comments. If the input takes up more lines, the scroll bar appears." => "Ustawia liczbę wierszy wyświetlanych w obszarach tekstowych dla komentarzy do pytań. Jeśli dane wejściowe zajmują więcej wierszy, pojawi się pasek przewijania."
// pe.defaultDisplayValue: "Default display value for dynamic texts" => "Domyślna wartość wyświetlana dla tekstów dynamicznych"
// pehelp.defaultDisplayValue: "A value displayed in HTML questions and in the dynamic titles and descriptions of survey elements when the question value is empty." => "Wartość wyświetlana w pytaniach HTML oraz w dynamicznych tytułach i opisach elementów ankiety, gdy wartość pytania jest pusta."
// showQuestionNumbers.recursive: "Recursive numbering" => "Numeracja rekurencyjna"
// paneldynamic.templateQuestionTitleWidth: "Question title width" => "Szerokość tytułu pytania"
// pe.allowCustomChoices: "Allow custom choices" => "Zezwalaj na niestandardowe wybory"
// paneldynamic.templateQuestionTitleWidth: "Sets consistent width for question titles when they are aligned to the left of their question boxes. Accepts CSS values (px, %, in, pt, etc.)." => "Ustawia stałą szerokość tytułów pytań, gdy są one wyrównane do lewej strony pól pytań. Akceptuje wartości CSS (px, %, in, pt itd.)."
// page.name: "A page ID that is not visible to respondents." => "Identyfikator strony, który nie jest widoczny dla respondentów."
// page.description: "Type a page subtitle." => "Wpisz podtytuł strony."
// page.navigationTitle: "A caption displayed on a navigation button in the progress bar or table of contents (TOC). If you leave this field empty, the navigation button will use the page title or page name. To enable the progress bar or TOC, go to \"Survey\" → \"Navigation\"." => "Podpis wyświetlany na przycisku nawigacyjnym na pasku postępu lub w spisie treści. Jeśli pozostawisz to pole puste, przycisk nawigacyjny użyje tytułu lub nazwy strony. Aby włączyć pasek postępu lub spis treści, przejdź do \"Ankieta\" → \"Nawigacja\"."
// pehelp.allowCustomChoices: "Select to let respondents add their own choices if the desired option isn't available in the dropdown. Custom choices will only be stored temporarily for the duration of the current browser session." => "Zaznacz, aby umożliwić respondentom dodawanie własnych wyborów, jeśli żądana opcja nie jest dostępna na liście rozwijanej. Niestandardowe wybory będą przechowywane tylko tymczasowo na czas trwania bieżącej sesji przeglądarki."