import { setupLocale } from "survey-creator-core";

export var bgStrings = {
  // survey templates
  survey: {
    // "Edit"
    edit: "Редактиране",
    // "Watch and learn how to create surveys"
    externalHelpLink: "Гледай и научи как се създават анкети.",
    // "https://www.youtube.com/channel/UCH2ru9okIcooNZfpIbyq4qQ?view_as=subscriber"
    externalHelpLinkUrl: "https://www.youtube.com/channel/UCH2ru9okIcooNZfpIbyq4qQ?view_as=subscriber",
    // "Please drop a question here from the Toolbox."
    dropQuestion: "Моля, изтегли въпрос от кутията с инструменти.",
    // "Create a rule to customize the flow of the survey."
    addLogicItem: "Създай правило, за да персонализираш анкетата.",
    // "Copy"
    copy: "Копиране",
    // "Duplicate"
    duplicate: "Дубликат",
    // "Add to toolbox"
    addToToolbox: "Добавяне към кутията с инструменти",
    // "Delete Panel"
    deletePanel: "Изтриване на панел",
    // "Delete Question"
    deleteQuestion: "Изтриване на въпрос",
    // "Convert to"
    convertTo: "Преобразуване",
    // "Drag element"
    drag: "Изтегляне на елемент"
  },
  // Creator tabs
  tabs: {
    // "Preview"
    preview: "Преглед",
    // "Themes"
    theme: "Теми",
    // "Translations"
    translation: "Превод",
    // "Designer"
    designer: "Дизайнер",
    // "JSON Editor"
    json: "JSON редактор",
    // "Logic"
    logic: "Логика"
  },
  // Question types
  qt: {
    // "Default"
    default: "По подразбиране",
    // "Checkboxes"
    checkbox: "Квадратчета за отметка",
    // "Long Text"
    comment: "Дълъг текст",
    // "Image Picker"
    imagepicker: "Избор на изображение",
    // "Ranking"
    ranking: "Класиране",
    // "Image"
    image: "Изображение",
    // "Dropdown"
    dropdown: "Падащо меню",
    // "Multi-Select Dropdown"
    tagbox: "Падащо меню за множествен избор",
    // "File Upload"
    file: "Качване на файл",
    // "HTML"
    html: "HTML",
    // "Single-Select Matrix"
    matrix: "Матрица с единичен избор",
    // "Multi-Select Matrix"
    matrixdropdown: "Матрица с множествен избор",
    // "Dynamic Matrix"
    matrixdynamic: "Динамична матрица",
    // "Multiple Textboxes"
    multipletext: "Множество от текстови полета",
    // "Panel"
    panel: "Панел",
    // "Dynamic Panel"
    paneldynamic: "Динамичен панел",
    // "Radio Button Group"
    radiogroup: "Група радиобутони",
    // "Rating Scale"
    rating: "Рейтингова скала",
    // [Auto-translated] "Slider"
    slider: "Плъзгач",
    // "Single-Line Input"
    text: "Едноредов вход",
    // "Yes/No (Boolean)"
    boolean: "Да/Не (булеви стойности)",
    // "Expression (read-only)"
    expression: "Израз (само за четене)",
    // "Signature"
    signaturepad: "Подпис",
    // "Button Group"
    buttongroup: "Група бутони"
  },
  toolboxCategories: {
    // "General"
    general: "Общ",
    // "Choice Questions"
    choice: "Въпроси за избор",
    // "Text Input Questions"
    text: "Въпроси с въвеждане на текст",
    // "Containers"
    containers: "Контейнери",
    // "Matrix Questions"
    matrix: "Матрица с въпроси",
    // "Misc"
    misc: "Разни"
  },
  // Strings in SurveyJS Creator
  ed: {
    // "Default ({0})"
    defaultLocale: "По подразбиране ({0})",
    // "Survey"
    survey: "Анкета",
    // "Settings"
    settings: "Настройки",
    // "Open settings"
    settingsTooltip: "Отваряне на настройките",
    // "Survey Settings"
    surveySettings: "Настройки на анкетата",
    // "Survey settings"
    surveySettingsTooltip: "Настройки на проучването",
    // [Auto-translated] "Theme Settings"
    themeSettings: "Настройки на тема",
    // [Auto-translated] "Theme settings"
    themeSettingsTooltip: "Настройки на темата",
    // [Auto-translated] "Creator Settings"
    creatorSettingTitle: "Настройки на създателя",
    // "Show Panel"
    showPanel: "Показване на панела",
    // "Hide Panel"
    hidePanel: "Скриване на панела",
    // "Select previous"
    prevSelected: "Избиране на предишен",
    // "Select next"
    nextSelected: "Избиране на следващ",
    // [Auto-translated] "Focus previous"
    prevFocus: "Фокус предишен",
    // [Auto-translated] "Focus next"
    nextFocus: "Фокусирай се върху следващия",
    // "Survey"
    surveyTypeName: "Анкета",
    // "Page"
    pageTypeName: "Страница",
    // "Panel"
    panelTypeName: "Паниел",
    // "Question"
    questionTypeName: "Въпрос",
    // "Column"
    columnTypeName: "Колона",
    // "Add New Page"
    addNewPage: "Добавяне на нова страница",
    // "Scroll to the Right"
    moveRight: "Превърти надясно",
    // "Scroll to the Left"
    moveLeft: "Превърти наляво",
    // "Delete Page"
    deletePage: "Изтриване на страница",
    // "Edit Page"
    editPage: "Редактиране на страница",
    // "Edit"
    edit: "Редактиране",
    // "page"
    newPageName: "страница",
    // "question"
    newQuestionName: "въпрос",
    // "panel"
    newPanelName: "панел",
    // "text"
    newTextItemName: "текст",
    // "Default"
    defaultV2Theme: "По подразбиране",
    // "Modern"
    modernTheme: "Модерен",
    // "Default (legacy)"
    defaultTheme: "По подразбиране (по наследство)",
    // "Preview Survey Again"
    testSurveyAgain: "Прегледай анкетата отново",
    // "Survey width: "
    testSurveyWidth: "Широчина на анкетата: ",
    // "You had to navigate to"
    navigateToMsg: "Трябва да навигираш до",
    // "Save Survey"
    saveSurvey: "Запазване на анкетата",
    // "Save Survey"
    saveSurveyTooltip: "Запазване на анкетата",
    // [Auto-translated] "Save Theme"
    saveTheme: "Запиши темата",
    // [Auto-translated] "Save Theme"
    saveThemeTooltip: "Запиши темата",
    // "Hide errors"
    jsonHideErrors: "Скриване на грешки",
    // "Show errors"
    jsonShowErrors: "Показване на грешки",
    // "Undo"
    undo: "Отмяна",
    // "Redo"
    redo: "Повтаряне",
    // "Undo last change"
    undoTooltip: "Отмяна на последната промяна",
    // "Redo the change"
    redoTooltip: "Повтаряне на последната промяна",
    // [Auto-translated] "Expand"
    expandTooltip: "Разширявам",
    // [Auto-translated] "Collapse"
    collapseTooltip: "Срив",
    // "Expand All"
    expandAllTooltip: "Разширете всички",
    // "Collapse All"
    collapseAllTooltip: "Свиване на всички",
    // [Auto-translated] "Zoom In"
    zoomInTooltip: "Увеличете",
    // [Auto-translated] "Zoom to 100%"
    zoom100Tooltip: "Увеличете до 100%",
    // [Auto-translated] "Zoom Out"
    zoomOutTooltip: "Намаляване на мащаба",
    // [Auto-translated] "Lock expand/collapse state for questions"
    lockQuestionsTooltip: "Заключване на състояние на разгъване/свиване за въпроси",
    // "Show more"
    showMoreChoices: "Покажи повече.",
    // "Show less"
    showLessChoices: "Покажи по-малко.",
    // "Copy"
    copy: "Копиране",
    // "Cut"
    cut: "Изрязване",
    // "Paste"
    paste: "Поставяне на копираното",
    // "Copy selection to clipboard"
    copyTooltip: "Копиране на селектираното в клипборда",
    // "Cut selection to clipboard"
    cutTooltip: "Изрязване на селекцията в клипборда",
    // "Paste from clipboard"
    pasteTooltip: "Поставяне от клипборда",
    // "Options"
    options: "Опции",
    // "Generate Valid JSON"
    generateValidJSON: "Генериране на валиден JSON",
    // "Generate Readable JSON"
    generateReadableJSON: "Генериране на четим JSON",
    // "Toolbox"
    toolbox: "Кутия с инструменти",
    // "Properties"
    "property-grid": "Свойства",
    // [Auto-translated] "Search"
    toolboxSearch: "Търсене",
    // [Auto-translated] "Type to search..."
    toolboxFilteredTextPlaceholder: "Въведете за търсене...",
    // [Auto-translated] "No results found"
    toolboxNoResultsFound: "Няма намерени резултати",
    // "Type to search..."
    propertyGridFilteredTextPlaceholder: "Въведи за търсене...",
    // [Auto-translated] "No results found"
    propertyGridNoResultsFound: "Няма намерени резултати",
    // [Auto-translated] "Start configuring your form"
    propertyGridPlaceholderTitle: "Започнете да конфигурирате формуляра си",
    // [Auto-translated] "Click any category icon to explore survey settings. Additional settings will become available once you add a survey element to the design surface."
    propertyGridPlaceholderDescription: "Щракнете върху която и да е икона на категория, за да разгледате настройките на проучването. Допълнителни настройки ще станат налични, след като добавите елемент на проучване към повърхността за проектиране.",
    // "Please correct JSON."
    correctJSON: "Моля, коригирай JSON.",
    // "Survey Results "
    surveyResults: "Резултати от анкетата ",
    // "As Table"
    surveyResultsTable: "Като таблица",
    // "As JSON"
    surveyResultsJson: "Като JSON",
    // "Question Title"
    resultsTitle: "Заглавие на въпроса",
    // "Question Name"
    resultsName: "Име на въпроса",
    // "Answer Value"
    resultsValue: "Стойност на отговора",
    // "Display Value"
    resultsDisplayValue: "Показване на стойност",
    // "Modified"
    modified: "Променен",
    // "Saving"
    saving: "Спасен",
    // "Saved"
    saved: "Запазен",
    // "Error"
    propertyEditorError: "Грешка",
    // "Error! Editor content is not saved."
    saveError: "Грешка! Съдържанието на редактора не е запазено.",
    // "Language Settings"
    translationPropertyGridTitle: "Езикови настройки",
    // [Auto-translated] "Theme Settings"
    themePropertyGridTitle: "Настройки на тема",
    // [Auto-translated] "Add Language"
    addLanguageTooltip: "Добавяне на език",
    // "Languages"
    translationLanguages: "Езици",
    // [Auto-translated] "Are you certain you wish to delete all strings for this language?"
    translationDeleteLanguage: "Сигурни ли сте, че искате да изтриете всички низове за този език?",
    // "Select language to translate"
    translationAddLanguage: "Изберане на език за превод",
    // "All Strings"
    translationShowAllStrings: "Всички низове",
    // "Used Strings Only"
    translationShowUsedStringsOnly: "Само използвани низове",
    // "All Pages"
    translationShowAllPages: "Всички страници",
    // "No strings to translate. Please change the filter."
    translationNoStrings: "Няма низове за превод. Моля, промени филтъра.",
    // "Export to CSV"
    translationExportToSCVButton: "Експортиране в CSV",
    // "Import from CSV"
    translationImportFromSCVButton: "Импортиране от CSV",
    // [Auto-translated] "Auto-translate All"
    translateUsigAI: "Автоматичен превод на всички",
    // [Auto-translated] "Translate from: "
    translateUsigAIFrom: "Преведи от: ",
    // [Auto-translated] "Untranslated strings"
    translationDialogTitle: "Непреведени низове",
    // "Merge {0} with default locale"
    translationMergeLocaleWithDefault: "Обединение {0} с локалната стойност по подразбиране",
    // "Translation..."
    translationPlaceHolder: "Превод...",
    // [Auto-translated] "Source: "
    translationSource: "Източник: ",
    // [Auto-translated] "Target: "
    translationTarget: "Цел: ",
    // [Auto-translated] "YouTube links are not supported."
    translationYouTubeNotSupported: "Връзките в YouTube не се поддържат.",
    // [Auto-translated] "Export"
    themeExportButton: "Износ",
    // [Auto-translated] "Import"
    themeImportButton: "Внос",
    // [Auto-translated] "Export"
    surveyJsonExportButton: "Износ",
    // [Auto-translated] "Import"
    surveyJsonImportButton: "Внос",
    // [Auto-translated] "Copy to clipboard"
    surveyJsonCopyButton: "Копиране в системния буфер",
    // [Auto-translated] "Reset theme settings to default"
    themeResetButton: "Връщане на настройките на тема в начално състояние по подразбиране",
    // [Auto-translated] "Do you really want to reset the theme? All your customizations will be lost."
    themeResetConfirmation: "Наистина ли искате да нулирате темата? Всички ваши персонализации ще бъдат загубени.",
    // [Auto-translated] "Yes, reset the theme"
    themeResetConfirmationOk: "Да, нулирайте темата",
    // "Bold"
    bold: "Удебелен",
    // "Italic"
    italic: "Курсив",
    // "Underline"
    underline: "Подчертан",
    // "Add Question"
    addNewQuestion: "Добавяне на въпрос",
    // "Select page..."
    selectPage: "Избиране на страница...",
    // [Auto-translated] "Choices are copied from"
    carryForwardChoicesCopied: "Възможностите за избор се копират от",
    // [Auto-translated] "Choices are loaded from a web service."
    choicesLoadedFromWebText: "Възможностите за избор се зареждат от уеб услуга.",
    // [Auto-translated] "Go to settings"
    choicesLoadedFromWebLinkText: "Отидете в настройките",
    // [Auto-translated] "Preview of loaded choice options"
    choicesLoadedFromWebPreviewTitle: "Визуализация на заредените опции за избор",
    // "HTML content will be here."
    htmlPlaceHolder: "HTML съдържанието ще бъде тук.",
    // "Drop a question from the toolbox here."
    panelPlaceHolder: "Пусни въпроса от кутията с инструменти тук.",
    // "The survey is empty. Drag an element from the toolbox or click the button below."
    surveyPlaceHolder: "Анкетата е празна. Плъзни елемент от кутията с инструменти или щракни върху бутона по-долу.",
    // [Auto-translated] "The page is empty. Drag an element from the toolbox or click the button below."
    pagePlaceHolder: "Страницата е празна. Плъзнете елемент от кутията с инструменти или щракнете върху бутона по-долу.",
    // "Drag and drop an image here or click the button below and choose an image to upload"
    imagePlaceHolder: "Плъзни и пусни изображение тук или щракни върху бутона по-долу и избери изображение за качване.",
    // "Click the \"Add Question\" button below to start creating your form."
    surveyPlaceHolderMobile: "Кликнете върху бутона \"Добавяне на въпрос\" по-долу, за да започнете да създавате своя формуляр.",
    // [Auto-translated] "Your form is empty"
    surveyPlaceholderTitle: "Вашият формуляр е празен",
    // [Auto-translated] "Your form is empty"
    surveyPlaceholderTitleMobile: "Вашият формуляр е празен",
    // [Auto-translated] "Drag an element from the toolbox or click the button below."
    surveyPlaceholderDescription: "Плъзнете елемент от кутията с инструменти или щракнете върху бутона по-долу.",
    // [Auto-translated] "Drag an element from the toolbox or click the button below."
    surveyPlaceholderDescriptionMobile: "Плъзнете елемент от кутията с инструменти или щракнете върху бутона по-долу.",
    // [Auto-translated] "No preview"
    previewPlaceholderTitle: "Няма предварителен преглед",
    // [Auto-translated] "No preview"
    previewPlaceholderTitleMobile: "Няма предварителен преглед",
    // [Auto-translated] "The survey doesn't contain any visible elements."
    previewPlaceholderDescription: "Проучването не съдържа никакви видими елементи.",
    // [Auto-translated] "The survey doesn't contain any visible elements."
    previewPlaceholderDescriptionMobile: "Проучването не съдържа никакви видими елементи.",
    // [Auto-translated] "No strings to translate"
    translationsPlaceholderTitle: "Няма низове за превод",
    // [Auto-translated] "No strings to translate"
    translationsPlaceholderTitleMobile: "Няма низове за превод",
    // [Auto-translated] "Add elements to your form or change the strings filter in the toolbar."
    translationsPlaceholderDescription: "Добавете елементи към вашата форма или променете филтъра за низове в лентата с инструменти.",
    // [Auto-translated] "Add elements to your form or change the strings filter in the toolbar."
    translationsPlaceholderDescriptionMobile: "Добавете елементи към вашата форма или променете филтъра за низове в лентата с инструменти.",
    // "Click the \"Add Question\" button below to add a new element to the page."
    pagePlaceHolderMobile: "Кликнете върху бутона \"Добавяне на въпрос\" по-долу, за да добавите нов елемент към страницата.",
    // "Click the \"Add Question\" button below to add a new element to the panel."
    panelPlaceHolderMobile: "Кликнете върху бутона \"Добавяне на въпрос\" по-долу, за да добавите нов елемент към панела.",
    // [Auto-translated] "Click the button below and choose an image to upload"
    imagePlaceHolderMobile: "Кликнете върху бутона по-долу и изберете изображение за качване",
    // "Choose Image"
    imageChooseImage: "Избери изображение.",
    // "Add {0}"
    addNewTypeQuestion: "Добави {0}", // {0} is localizable question type
    // "[LOGO]"
    chooseLogoPlaceholder: "[LOGO]",
    // "Item "
    choices_Item: "Елемент ",
    // [Auto-translated] "Select a file"
    selectFile: "Изберете файл",
    // [Auto-translated] "Remove the file"
    removeFile: "Премахване на файла",
    lg: {
      // "Add New Rule"
      addNewItem: "Добавяне на ново правило",
      // "Create a rule to customize the flow of the survey."
      empty_tab: "Създай правило за персонализиране на анкетата.",
      // [Auto-translated] "No logical rules"
      logicPlaceholderTitle: "Няма логически правила",
      // [Auto-translated] "No logical rules"
      logicPlaceholderTitleMobile: "Няма логически правила",
      // [Auto-translated] "Create a rule to customize the flow of the survey."
      logicPlaceholderDescription: "Създайте правило за персонализиране на потока на проучването.",
      // [Auto-translated] "Create a rule to customize the flow of the survey."
      logicPlaceholderDescriptionMobile: "Създайте правило за персонализиране на потока на проучването.",
      // "Show/hide page"
      page_visibilityName: "Показване (скриване) на страница",
      // "Enable/disable page"
      page_enableName: "Активиране (деактивиране) на страница",
      // [Auto-translated] "Make page required"
      page_requireName: "Направи страницата задължителна",
      // "Show/hide panel"
      panel_visibilityName: "Показване (скриване) на панел",
      // "Enable/disable panel"
      panel_enableName: "Активиране (деактивиране) на панел",
      // [Auto-translated] "Make panel required"
      panel_requireName: "Направете панела задължителен",
      // "Show/hide question"
      question_visibilityName: "Показване (скриване) на въпрос",
      // "Enable/disable question"
      question_enableName: "Активиране (деактивиране) на въпрос",
      // "Make question required"
      question_requireName: "Задай въпроса като задължителен.",
      // [Auto-translated] "Reset question value"
      question_resetValueName: "Нулиране на стойността на въпроса",
      // [Auto-translated] "Set question value"
      question_setValueName: "Задаване на стойност на въпрос",
      // "Show/hide column"
      column_visibilityName: "Показване (скриване) на колона",
      // "Enable/disable column"
      column_enableName: "Активиране (деактивиране) на колона",
      // "Make column required"
      column_requireName: "Задай колоната като задължителна.",
      // [Auto-translated] "Reset column value"
      column_resetValueName: "Нулиране на стойността на колона",
      // [Auto-translated] "Set column value"
      column_setValueName: "Задаване на стойност на колона",
      // "Complete survey"
      trigger_completeName: "Попълнена анкета",
      // "Set answer"
      trigger_setvalueName: "Задаване на отговор",
      // "Copy answer"
      trigger_copyvalueName: "Копиране на отговор",
      // "Skip to question"
      trigger_skipName: "Преминаване към въпрос",
      // "Run expression"
      trigger_runExpressionName: "Стартиране на израза",
      // "Set \"Thank You\" page markup"
      completedHtmlOnConditionName: "Задай маркиране на страницата \"Анкетата е завършена.\".",
      // "Make the page visible when the logical expression evaluates to true. Otherwise, keep the page invisible."
      page_visibilityDescription: "Страницата става видима, ако логическият израз върне истина. В противен случай остава невидима.",
      // "Make the page visible when the logical expression evaluates to true. Otherwise, keep the panel invisible."
      panel_visibilityDescription: "Панелът става видим, ако логическият израз върне истина. В противен случай остава невидим.",
      // "Make the panel and all elements inside it enabled when the logical expression evaluates to true. Otherwise, keep them disabled."
      panel_enableDescription: "Панелът и всички елементи в него стават активирани, ако логическият израз върне истина. В противен случай остават деактивирани.",
      // "Make the question visible when the logical expression evaluates to true. Otherwise, keep the question invisible."
      question_visibilityDescription: "Въпросът става видим, ако логическият израз върне истина. В противен случай остава невидим.",
      // "Make the question enabled when the logical expression evaluates to true. Otherwise, keep the question disabled."
      question_enableDescription: "Въпросът става активиран, ако логическият израз върне истина. В противен случай остава деактивиран.",
      // "Question becomes required when the logical expression evaluates to true."
      question_requireDescription: "Въпросът става задължителен, ако логическият израз върне истина.",
      // "When the logical expression evaluates to true, the survey ends, and the respondent sees the \"Thank you\" page."
      trigger_completeDescription: "Когато логическият израз върне вярно, анкетата приключва и потребителят вижда страницата 'Благодаря'.",
      // "When question values used in the logical expression are changed, and the expression evaluates to true, the specified value is assigned to the selected question."
      trigger_setvalueDescription: "Когато стойностите на въпроса, които се използват в логическия израз, се променят и логическият израз върне вярно, тогава стойността се задава от избрания въпрос.",
      // "When question values used in the logical expression are changed, and the expression evaluates to true, the value of the selected question is copied to another question."
      trigger_copyvalueDescription: "Когато стойностите на въпроса, които се използват в логическия израз, се променят и логическият израз върне вярно, тогава стойността на един избран въпрос се копира в друг избран въпрос.",
      // "When the logical expression evaluates to true, the survey focuses/jumps to the selected question."
      trigger_skipDescription: "Когато логическият израз върне вярно, анкетата преминава / фокусира се към избрания въпрос.",
      // "When the logical expression evaluates to true, the survey evaluates another expression. Optionally, the result of the latter expression can be assigned as a value to the selected question"
      trigger_runExpressionDescription: "Когато логическият израз върне истина, тогава се изпълнява персонализираният израз. По желание може да зададете този израз в избрания въпрос.",
      // "If the logical expression evaluates to true, the \"Thank You\" page displays the specified content."
      completedHtmlOnConditionDescription: "Ако логическият израз върне вярно, то текстът по подразбиране за страницата „Благодаря“ се променя с дадения.",
      // "When expression: '{0}' returns true"
      itemExpressionText: "Когато логическият израз: '{0}' върне истина", // {0} - the expression
      // "New rule"
      itemEmptyExpressionText: "Ново правило",
      // "make page {0} visible"
      page_visibilityText: "направи страница {0} видима", // {0} page name
      // "make panel {0} visible"
      panel_visibilityText: "направи панел {0} видим", // {0} panel name
      // "make panel {0} enable"
      panel_enableText: "направи панел {0} активен", // {0} panel name
      // "make question {0} visible"
      question_visibilityText: "направи въпрос {0} видим", // {0} question name
      // "make question {0} enable"
      question_enableText: "направи въпрос {0} активен", // {0} question name
      // "make question {0} required"
      question_requireText: "направи въпрос {0} задължителен", // {0} question name
      // [Auto-translated] "reset value for question: {0}"
      question_resetValueText: "нулиране на стойността за въпрос: {0}", // {0} question name.
      // [Auto-translated] "assign value: {1} to question: {0}"
      question_setValueText: "присвояване на стойност: {1} на въпрос: {0}", // {0} question name and {1} setValueExpression
      // "make column {0} of question {1} visible"
      column_visibilityText: "направи колона {0} на въпрос {1} видима", // {0} column name, {1} question name
      // "make column {0} of question {1} enable"
      column_enableText: "направи колона {0} на въпрос {1} активна", // {0} column name, {1} question name
      // "make column {0} of question {1} required"
      column_requireText: "направи колона {0} на въпрос {1} задължителна", // {0} column name, {1} question name
      // [Auto-translated] "reset cell value for column: {0}"
      column_resetValueText: "Нулиране на стойността на клетката за колона: {0}", // {0} column name
      // [Auto-translated] "assign cell value: {1} to column: {0}"
      column_setValueText: "Присвояване на стойност на клетка: {1} на колона: {0}", // {0} column name and {1} setValueExpression
      // [Auto-translated] "An expression whose result will be assigned to the target question."
      setValueExpressionPlaceholder: "Израз, чийто резултат ще бъде присвоен на целевия въпрос.",
      // "survey becomes completed"
      trigger_completeText: "анкетата е завършена",
      // "set into question: {0} value {1}"
      trigger_setvalueText: "задай на въпрос: {0} стойност {1}", // {0} question name, {1} setValue
      // [Auto-translated] "clear question value: {0}"
      trigger_setvalueEmptyText: "ясна стойност на въпроса: {0}", // {0} question name
      // "copy into question: {0} value from question {1}"
      trigger_copyvalueText: "копирай във въпрос: {0} стойност от въпрос {1}", // {0} and {1} question names
      // "survey skip to the question {0}"
      trigger_skipText: "анкетата преминава към въпрос {0}", // {0} question name
      // "run expression: '{0}'"
      trigger_runExpressionText1: "стартов израз: '{0}'", // {0} the expression
      // " and set its result into question: {0}"
      trigger_runExpressionText2: " и постави резултата му под въпрос: {0}", // {0} question name
      // "show custom text for the \"Thank You\" page."
      completedHtmlOnConditionText: "показване на персонализиран текст за страницата „Благодарности“.",
      // "All Questions"
      showAllQuestions: "Всички въпроси",
      // "All Action Types"
      showAllActionTypes: "Всички типове действие",
      // "Condition(s)"
      conditions: "Условие/условия",
      // "Action(s)"
      actions: "Действие/действия",
      // "Define condition(s)"
      expressionEditorTitle: "Дефинирай условието/условията",
      // "Define action(s)"
      actionsEditorTitle: "Дефинирай действието/действията",
      // "Delete Action"
      deleteAction: "Изтриване на действие",
      // "Add Action"
      addNewAction: "Добавяне на действие",
      // "Select action..."
      selectedActionCaption: "Избиране на действие...",
      // "The logic expression is empty or invalid. Please correct it."
      expressionInvalid: "Логическият израз е празен или невалиден. Моля, коригирайте го.",
      // "Please add at least one action."
      noActionError: "Моля, добави поне едно действие.",
      // "Please fix issues in your action(s)."
      actionInvalid: "Моля, отстрани проблемите във вашите действия.",
      // "Logical rules are incomplete"
      uncompletedRule_title: "Сигурен ли си, че искаш да напуснеш раздела?",
      // "You have not completed some of the logical rules. If you leave the tab now, the changes will be lost. Do you still want to leave the tab without completing the changes?"
      uncompletedRule_text: "Едно или повече логически правила са незавършени. Ако напуснеш раздела, тези промени, които не може да бъдат приложени, ще изчезнат. Сигурен ли си, че искаш да напуснеш раздела?",
      // "Yes"
      uncompletedRule_apply: "Да",
      // "No, I want to complete the rules"
      uncompletedRule_cancel: "Не, искам да попълня правилата."
    }
  },
  // Property Editors
  pe: {
    panel: {
      // [Auto-translated] "Panel name"
      name: "Име на панела",
      // [Auto-translated] "Panel title"
      title: "Заглавие на панела",
      // [Auto-translated] "Panel description"
      description: "Описание на панела",
      // [Auto-translated] "Make the panel visible if"
      visibleIf: "Направете панела видим, ако",
      // [Auto-translated] "Make the panel required if"
      requiredIf: "Направете панела необходим, ако",
      // [Auto-translated] "Question order within the panel"
      questionOrder: "Ред на въпросите в рамките на панела",
      // [Auto-translated] "Move the panel to page"
      page: "Преместване на панела на страница",
      // [Auto-translated] "Display the panel on a new line"
      startWithNewLine: "Показване на панела на нов ред",
      // [Auto-translated] "Panel collapse state"
      state: "Състояние на свиване на панела",
      // [Auto-translated] "Inline panel width"
      width: "Ширина на вградения панел",
      // [Auto-translated] "Minimum panel width"
      minWidth: "Минимална ширина на панела",
      // [Auto-translated] "Maximum panel width"
      maxWidth: "Максимална ширина на панела",
      // [Auto-translated] "Number this panel"
      showNumber: "Номерирайте този панел"
    },
    panellayoutcolumn: {
      // [Auto-translated] "Effective width, %"
      effectiveWidth: "Ефективна ширина, %",
      // [Auto-translated] "Question title width, px"
      questionTitleWidth: "Ширина на заглавието на въпроса, px"
    },
    paneldynamic: {
      // [Auto-translated] "Panel name"
      name: "Име на панела",
      // [Auto-translated] "Panel title"
      title: "Заглавие на панела",
      // [Auto-translated] "Panel description"
      description: "Описание на панела",
      // [Auto-translated] "Entry display mode"
      displayMode: "Режим на показване на влизане",
      // [Auto-translated] "Make the panel visible if"
      visibleIf: "Направете панела видим, ако",
      // [Auto-translated] "Make the panel required if"
      requiredIf: "Направете панела необходим, ако",
      // [Auto-translated] "Move the panel to page"
      page: "Преместване на панела на страница",
      // [Auto-translated] "Display the panel on a new line"
      startWithNewLine: "Показване на панела на нов ред",
      // [Auto-translated] "Panel collapse state"
      state: "Състояние на свиване на панела",
      // [Auto-translated] "Inline panel width"
      width: "Ширина на вградения панел",
      // [Auto-translated] "Minimum panel width"
      minWidth: "Минимална ширина на панела",
      // [Auto-translated] "Maximum panel width"
      maxWidth: "Максимална ширина на панела",
      // [Auto-translated] "Confirm entry removal"
      confirmDelete: "Потвърдете премахването на записа",
      // [Auto-translated] "Entry description pattern"
      templateDescription: "Модел на описание на записа",
      // [Auto-translated] "Entry title pattern"
      templateTitle: "Модел на заглавие на записа",
      // [Auto-translated] "Empty panel text"
      noEntriesText: "Празен текст на панел",
      // [Auto-translated] "Tab title pattern"
      templateTabTitle: "Шаблон на заглавие на раздел",
      // [Auto-translated] "Tab title placeholder"
      tabTitlePlaceholder: "Контейнер за заглавие на раздел",
      // [Auto-translated] "Make an individual entry visible if"
      templateVisibleIf: "Направете отделен запис видим, ако",
      // [Auto-translated] "Number the panel"
      showNumber: "Номерирайте панела",
      // [Auto-translated] "Panel title alignment"
      titleLocation: "Подравняване на заглавието на панела",
      // [Auto-translated] "Panel description alignment"
      descriptionLocation: "Подравняване на описанието на панела",
      // [Auto-translated] "Question title alignment"
      templateQuestionTitleLocation: "Подравняване на заглавието на въпроса",
      // [Auto-translated] "Question title width"
      templateQuestionTitleWidth: "Ширина на заглавието на въпроса",
      // [Auto-translated] "Error message alignment"
      templateErrorLocation: "Подравняване на съобщение за грешка",
      // [Auto-translated] "New entry location"
      newPanelPosition: "Ново място за влизане",
      // [Auto-translated] "Prevent duplicate responses in the following question"
      keyName: "Предотвратяване на дублиращи се отговори в следния въпрос"
    },
    question: {
      // [Auto-translated] "Question name"
      name: "Име на въпрос",
      // [Auto-translated] "Question title"
      title: "Заглавие на въпроса",
      // [Auto-translated] "Question description"
      description: "Описание на въпроса",
      // [Auto-translated] "Show the title and description"
      showTitle: "Показване на заглавието и описанието",
      // [Auto-translated] "Make the question visible if"
      visibleIf: "Направете въпроса видим, ако",
      // [Auto-translated] "Make the question required if"
      requiredIf: "Задайте въпроса, който е необходим, ако",
      // [Auto-translated] "Move the question to page"
      page: "Преместване на въпроса на страница",
      // [Auto-translated] "Question box collapse state"
      state: "Състояние на свиване на полето за въпроси",
      // [Auto-translated] "Number this question"
      showNumber: "Номерирайте този въпрос",
      // [Auto-translated] "Question title alignment"
      titleLocation: "Подравняване на заглавието на въпроса",
      // [Auto-translated] "Question description alignment"
      descriptionLocation: "Подравняване на описанието на въпроса",
      // [Auto-translated] "Error message alignment"
      errorLocation: "Подравняване на съобщение за грешка",
      // [Auto-translated] "Increase the inner indent"
      indent: "Увеличаване на вътрешния отстъп",
      // [Auto-translated] "Inline question width"
      width: "Ширина на вградения въпрос",
      // [Auto-translated] "Minimum question width"
      minWidth: "Минимална ширина на въпросите",
      // [Auto-translated] "Maximum question width"
      maxWidth: "Максимална ширина на въпроса",
      // [Auto-translated] "Update input field value"
      textUpdateMode: "Актуализиране на стойността на входното поле"
    },
    signaturepad: {
      // [Auto-translated] "Signature area width"
      signatureWidth: "Ширина на областта за подпис",
      // [Auto-translated] "Signature area height"
      signatureHeight: "Височина на областта за подпис",
      // [Auto-translated] "Auto-scale the signature area"
      signatureAutoScaleEnabled: "Автоматично мащабиране на областта за подписи",
      // [Auto-translated] "Show a placeholder within signature area"
      showPlaceholder: "Показване на контейнер в областта за подпис",
      // [Auto-translated] "Placeholder text"
      placeholder: "Текст в контейнер",
      // [Auto-translated] "Placeholder text in read-only or preview mode"
      placeholderReadOnly: "Текст в контейнер в режим само за четене или визуализация",
      // "Show the Clear button within signature area"
      allowClear: "Показване на бутона \"Изчисти\" в областта за подписи",
      // [Auto-translated] "Minimum stroke width"
      penMinWidth: "Минимална ширина на хода",
      // [Auto-translated] "Maximum stroke width"
      penMaxWidth: "Максимална ширина на хода",
      // [Auto-translated] "Stroke color"
      penColor: "Цвят на щрихите"
    },
    comment: {
      // [Auto-translated] "Input field height (in lines)"
      rows: "Височина на входното поле (в редове)"
    },
    // "Question numbering"
    showQuestionNumbers: "Номериране на въпросите",
    // "Question indexing type"
    questionStartIndex: "Начален индекс (цифра или буква)",
    expression: {
      // [Auto-translated] "Expression name"
      name: "Име на израз",
      // [Auto-translated] "Expression title"
      title: "Заглавие на израза",
      // [Auto-translated] "Expression description"
      description: "Описание на израза",
      // [Auto-translated] "Expression"
      expression: "Изразяване"
    },
    trigger: {
      // [Auto-translated] "Expression"
      expression: "Изразяване"
    },
    calculatedvalue: {
      // [Auto-translated] "Expression"
      expression: "Изразяване"
    },
    // survey templates
    survey: {
      // [Auto-translated] "Survey title"
      title: "Заглавие на проучването",
      // [Auto-translated] "Survey description"
      description: "Описание на проучването",
      // [Auto-translated] "Make the survey read-only"
      readOnly: "Направете проучването само за четене"
    },
    page: {
      // [Auto-translated] "Page name"
      name: "Име на страница",
      // [Auto-translated] "Page title"
      title: "Заглавие на страница",
      // [Auto-translated] "Page description"
      description: "Описание на страницата",
      // [Auto-translated] "Make the page visible if"
      visibleIf: "Направете страницата видима, ако",
      // [Auto-translated] "Make the page required if"
      requiredIf: "Направете страницата задължителна, ако",
      // [Auto-translated] "Time limit to complete the page"
      timeLimit: "Срок за завършване на страницата",
      // [Auto-translated] "Question order on the page"
      questionOrder: "Ред на въпросите на страницата"
    },
    matrixdropdowncolumn: {
      // [Auto-translated] "Column name"
      name: "Име на колона",
      // [Auto-translated] "Column title"
      title: "Заглавие на колоната",
      // [Auto-translated] "Prevent duplicate responses"
      isUnique: "Предотвратяване на дублиращи се отговори",
      // [Auto-translated] "Column width"
      width: "Ширина на колона",
      // [Auto-translated] "Minimum column width"
      minWidth: "Минимална ширина на колоната",
      // [Auto-translated] "Input field height (in lines)"
      rows: "Височина на входното поле (в редове)",
      // [Auto-translated] "Make the column visible if"
      visibleIf: "Направете колоната видима, ако",
      // [Auto-translated] "Make the column required if"
      requiredIf: "Направете колоната задължителна, ако",
      // [Auto-translated] "Each option in a separate column"
      showInMultipleColumns: "Всяка опция в отделна колона"
    },
    matrixcolumn: {
      // [Auto-translated] "Clear others in the same row"
      isExclusive: "Изчистване на другите в същия ред"
    },
    multipletextitem: {
      // [Auto-translated] "Name"
      name: "Име",
      // [Auto-translated] "Title"
      title: "Заглавие"
    },
    masksettings: {
      // [Auto-translated] "Save masked value in survey results"
      saveMaskedValue: "Запазване на маскирана стойност в резултатите от проучването"
    },
    patternmask: {
      // [Auto-translated] "Value pattern"
      pattern: "Шаблон на стойност"
    },
    datetimemask: {
      // [Auto-translated] "Minimum value"
      min: "Минимална стойност",
      // [Auto-translated] "Maximum value"
      max: "Максимална стойност"
    },
    numericmask: {
      // [Auto-translated] "Allow negative values"
      allowNegativeValues: "Позволяване на отрицателни стойности",
      // [Auto-translated] "Thousands separator"
      thousandsSeparator: "Разделител за хиляди",
      // [Auto-translated] "Decimal separator"
      decimalSeparator: "Десетичен разделител",
      // [Auto-translated] "Value precision"
      precision: "Точност на стойността",
      // [Auto-translated] "Minimum value"
      min: "Минимална стойност",
      // [Auto-translated] "Maximum value"
      max: "Максимална стойност"
    },
    currencymask: {
      // [Auto-translated] "Currency prefix"
      prefix: "Валутен префикс",
      // [Auto-translated] "Currency suffix"
      suffix: "Валутен суфикс"
    },
    // [Auto-translated] "Clear others when selected"
    isExclusive: "Изчистване на другите, когато е избрано",
    // [Auto-translated] "Display both text and value"
    showValue: "Показване както на текст, така и на стойност",
    // [Auto-translated] "Require user to enter a comment"
    isCommentRequired: "Изискване от потребителя да въведе коментар",
    // "Display area height"
    imageHeight: "Височина на изображението",
    // "Display area width"
    imageWidth: "Широчина на изображението",
    // "Join identifier"
    valueName: "Съхранявай отговорите в следното JSON поле.",
    // [Auto-translated] "Default display value for dynamic texts"
    defaultDisplayValue: "Стойност по подразбиране за показване за динамични текстове",
    // [Auto-translated] "Label alignment"
    rateDescriptionLocation: "Подравняване на етикети",
    // [Auto-translated] "Input field width (in characters)"
    size: "Ширина на полето за въвеждане (в знаци)",
    // [Auto-translated] "Cell error message alignment"
    cellErrorLocation: "Подравняване на съобщение за грешка в клетка",
    // [Auto-translated] "Enabled"
    enabled: "Разрешено",
    // [Auto-translated] "Disabled"
    disabled: "Инвалид",
    // [Auto-translated] "Inherit"
    inherit: "Наследявам",
    // "Apply"
    apply: "Приложи",
    // "OK"
    ok: "ДА",
    // "Save"
    save: "Запази",
    // "Clear"
    clear: "Изчисти",
    // "Save"
    saveTooltip: "Запази",
    // "Cancel"
    cancel: "Откажи",
    // "Set"
    set: "Окомплектовай",
    // "Reset"
    reset: "Нулиране",
    // "Change"
    change: "Промени",
    // "Refresh"
    refresh: "Опресни",
    // "Close"
    close: "Затвори",
    // "Delete"
    delete: "Изтрий",
    // "Add"
    add: "Добави",
    // "Add New"
    addNew: "Добави нов",
    // "Click to add an item..."
    addItem: "Кликни за добавяне на елемент...",
    // "Click to remove the item..."
    removeItem: "Кликни за изтриване на елемент...",
    // "Drag the item"
    dragItem: "Плъзни елемента",
    // "Other"
    addOther: "Друг",
    // "Select All"
    addSelectAll: "Избери всички",
    // "None"
    addNone: "Нито един",
    // "Remove All"
    removeAll: "Премахни всички",
    // "Edit"
    edit: "Редактиране",
    // "Return without saving"
    back: "Връщане без запазване",
    // "Return without saving"
    backTooltip: "Връщане без запазване",
    // "Save and return"
    saveAndBack: "Запазване и връщане",
    // "Save and return"
    saveAndBackTooltip: "Запазване и връщане",
    // "Done"
    doneEditing: "Завършен",
    // "Edit Choices"
    editChoices: "Редактиране на избора",
    // "Show Choices"
    showChoices: "Показване на избора",
    // "Move"
    move: "Ход",
    // "<empty>"
    empty: "<празен>",
    // "Value is empty"
    emptyValue: "Стойността е празна.",
    // "Manual Entry"
    fastEntry: "Ръчно въвеждане",
    // "Value '{0}' is not unique"
    fastEntryNonUniqueError: "Стойността '{0}' не е уникална.",
    // "Please limit the number of items from {0} to {1}"
    fastEntryChoicesCountError: "Моля, ограничи броя на елементите от {0} до {1}",
    // [Auto-translated] "Please enter at least {0} items"
    fastEntryChoicesMinCountError: "Моля, въведете поне {0} артикула",
    // "Enter the list of choice options and their IDs in the following format:\n\nid|option\n\nA choice option ID is not visible to respondents and can be used in conditional rules."
    fastEntryPlaceholder: "Може да зададеш данни в следния формат:стойност1|текстстойност2",
    // "Form Entry"
    formEntry: "Въвеждане на формуляр",
    // "Test the service"
    testService: "Тествай услугата.",
    // "Please select the element"
    itemSelectorEmpty: "Моля, избери елемент.",
    // "Please select the action"
    conditionActionEmpty: "Моля, избери действие.",
    // "Select a question..."
    conditionSelectQuestion: "Избери въпрос...",
    // "Select a page..."
    conditionSelectPage: "Избери страница...",
    // "Select a panel..."
    conditionSelectPanel: "Избери панел...",
    // "Please enter/select the value"
    conditionValueQuestionTitle: "Моля, въведи/избери стойността.",
    // "Press ctrl+space to get expression completion hint"
    aceEditorHelp: "Натисни ctrl+space за подсказка за окомплектоване на израза.",
    // "Current row"
    aceEditorRowTitle: "Текущ ред",
    // "Current panel"
    aceEditorPanelTitle: "Текущ панел",
    // "For more details please check the documentation"
    showMore: "За повече подробности, моля, провери документацията.",
    // "Available questions"
    assistantTitle: "Налични въпроси",
    // "There is should be at least one column or row"
    cellsEmptyRowsColumns: "Трябва да има поне една колона или ред.",
    // "Review before submit"
    showPreviewBeforeComplete: "Визуализирай отговорите, преди да изпратиш анкетата.",
    // [Auto-translated] "Enabled by a condition"
    overridingPropertyPrefix: "Активирано от условие",
    // [Auto-translated] "Reset"
    resetToDefaultCaption: "Проучване",
    // "Please enter a value"
    propertyIsEmpty: "Моля, въведи стойност.",
    // "Please enter a unique value"
    propertyIsNoUnique: "Моля, въведи уникална стойност.",
    // "Please enter a unique name"
    propertyNameIsNotUnique: "Моля, въведи уникално име.",
    // "Do not use reserved words: \"item\", \"choice\", \"panel\", \"row\"."
    propertyNameIsIncorrect: "Не използвай запазени думи, като: \"елемент\", \"избор\", \"панел\", \"ред\".",
    // "You don't have any items yet"
    listIsEmpty: "Все още няма добавени елементи.",
    // "You don't have any choices yet"
    "listIsEmpty@choices": "Все още няма добавени възможности за избор.",
    // [Auto-translated] "You don't have any columns yet"
    "listIsEmpty@columns": "Все още нямате колони",
    // [Auto-translated] "You don't have layout columns yet"
    "listIsEmpty@gridLayoutColumns": "Все още нямате графи за оформление",
    // [Auto-translated] "You don't have any rows yet"
    "listIsEmpty@rows": "Все още нямате никакви редове",
    // [Auto-translated] "You don't have any validation rules yet"
    "listIsEmpty@validators": "Все още нямате правила за валидиране",
    // [Auto-translated] "You don't have any custom variables yet"
    "listIsEmpty@calculatedValues": "Все още нямате никакви персонализирани променливи",
    // [Auto-translated] "You don't have any triggers yet"
    "listIsEmpty@triggers": "Все още нямате никакви тригери",
    // [Auto-translated] "You don't have any links yet"
    "listIsEmpty@navigateToUrlOnCondition": "Все още нямате връзки",
    // [Auto-translated] "You don't have any pages yet"
    "listIsEmpty@pages": "Все още нямате страници",
    // "Add new choice"
    "addNew@choices": "Добавяне на възможност за избор",
    // [Auto-translated] "Add new column"
    "addNew@columns": "Добавяне на нова колона",
    // [Auto-translated] "Add new row"
    "addNew@rows": "Добавяне на нов ред",
    // [Auto-translated] "Add new rule"
    "addNew@validators": "Добавяне на ново правило",
    // [Auto-translated] "Add new variable"
    "addNew@calculatedValues": "Добавяне на нова променлива",
    // [Auto-translated] "Add new trigger"
    "addNew@triggers": "Добавяне на нов превключвател",
    // [Auto-translated] "Add new URL"
    "addNew@navigateToUrlOnCondition": "Добавяне на нов URL адрес",
    // [Auto-translated] "Add new page"
    "addNew@pages": "Добавяне на нова страница",
    // "Expression is empty"
    expressionIsEmpty: "Изразът е празен.",
    // "Value"
    value: "Стойност",
    // "Text"
    text: "Текст",
    // "Row ID"
    rowid: "Идентификатор на ред",
    // "Image or video file URL"
    imageLink: "URL на изображение или видео",
    // "Edit column: {0}"
    columnEdit: "Редактиране на колона: {0}",
    // "Edit item: {0}"
    itemEdit: "Редактиране на елемент: {0}",
    // "URL"
    url: "URL на услугата",
    // "Path to data"
    path: "Път до данни в услугата",
    choicesbyurl: {
      // [Auto-translated] "Web service URL"
      url: "URL адрес на уеб услуга",
      // "Get value to store from the following property"
      valueName: "Вземи стойности от следното JSON поле."
    },
    // "Get value to display from the following property"
    titleName: "Вземи текстове за показване от следното JSON поле.",
    // "Get file URLs from the following property"
    imageLinkName: "Вземи URL адреси на изображения от следното JSON поле.",
    // "Accept empty response"
    allowEmptyResponse: "Разреши празен отговор.",
    // "Title"
    titlePlaceholder: "Заглавие",
    // "Survey Title"
    surveyTitlePlaceholder: "Заглавие на анкетата",
    // "Page {num}"
    pageTitlePlaceholder: "Страница {num}",
    // [Auto-translated] "Start Page"
    startPageTitlePlaceholder: "Начална страница",
    // "Description"
    descriptionPlaceholder: "Описание",
    // "Description"
    surveyDescriptionPlaceholder: "Описание",
    // "Description"
    pageDescriptionPlaceholder: "Описание",
    // [Auto-translated] "Wrap choices"
    textWrapEnabled: "Опции за обтичане",
    // "Enable the \"Other\" option"
    showOtherItem: "Достъп до опция Друго",
    // "Rename the \"Other\" option"
    otherText: "Текст на опция Друго",
    // "Enable the \"None\" option"
    showNoneItem: "Достъп до опция Няма",
    // "Enable the \"Refuse to Answer\" option"
    showRefuseItem: "Разрешаване на опцията \"Отказ на отговор\"",
    // "Enable the \"Don't Know\" option"
    showDontKnowItem: "Разрешаване на опцията \"Не знам\"",
    // "Rename the \"None\" option"
    noneText: "Текст на опция Няма",
    // "Enable the \"Select All\" option"
    showSelectAllItem: "Достъп до опция Избери всички",
    // "Rename the \"Select All\" option"
    selectAllText: "Текст на опция Избери всички",
    // "Minimum value for auto-generated items"
    choicesMin: "Минимална стойност за автоматично генерирани елементи",
    // "Maximum value for auto-generated items"
    choicesMax: "Максимална стойност за автоматично генерирани елементи",
    // "Step value for auto-generated items"
    choicesStep: "Стъпка за автоматично генерирани елементи",
    // "Name"
    name: "Име",
    // "Title"
    title: "Заглавие",
    // "Cell input type"
    cellType: "Тип на клетката",
    // "Column count"
    colCount: "Брой колони",
    // "Choice order"
    choicesOrder: "Ред на сортиране на избора",
    // [Auto-translated] "Allow custom choices"
    allowCustomChoices: "Разрешаване на персонализирани избори",
    // "Visible"
    visible: "Видим",
    // "Required"
    isRequired: "Задължителен",
    // [Auto-translated] "Mark as required"
    markRequired: "Маркирай както се изисква",
    // [Auto-translated] "Remove the required mark"
    removeRequiredMark: "Премахване на необходимия знак",
    // "Require an answer in each row"
    eachRowRequired: "Изискване за отговор на всички редове",
    // [Auto-translated] "Prevent duplicate responses in rows"
    eachRowUnique: "Предотвратяване на дублиращи се отговори в редове",
    // "Error message for required questions"
    requiredErrorText: "\"Задължително\" съобщение за грешка",
    // "Display the question on a new line"
    startWithNewLine: "Показване на въпроса на нов ред",
    // "Rows"
    rows: "Редове",
    // "Columns"
    cols: "Колони",
    // "Placeholder text within input field"
    placeholder: "Контейнер за област за въвеждане",
    // "Show preview area"
    showPreview: "Показване на областта за визуализация",
    // "Store file content in JSON result as text"
    storeDataAsText: "Съхранявай съдържанието на файла в JSON резултат като текст",
    // "Maximum file size (in bytes)"
    maxSize: "Максимален размер на файла (в байтове)",
    // "Row count"
    rowCount: "Брой редове",
    // "Columns layout"
    columnLayout: "Разположение на колоните",
    // "\"Add Row\" button alignment"
    addRowButtonLocation: "Добавяне на местоположение на бутона за ред",
    // [Auto-translated] "Transpose rows to columns"
    transposeData: "Транспониране на редове в колони",
    // "\"Add Row\" button text"
    addRowText: "Добавяне на текст на бутона за ред",
    // "\"Remove Row\" button text"
    removeRowText: "Премахване на текста на бутона за ред",
    // [Auto-translated] "Input field title pattern"
    singleInputTitleTemplate: "Шаблон за заглавие на полето за въвеждане",
    // "Minimum rating value"
    rateMin: "Минимална стойност на оценката",
    // "Maximum rating value"
    rateMax: "Максимална стойност на оценката",
    // "Step value"
    rateStep: "Стъпка на оценката",
    // "Minimum value label"
    minRateDescription: "Описание на минималната оценка",
    // "Maximum value label"
    maxRateDescription: "Описание на максималната оценка",
    // "Input type"
    inputType: "Тип на въвеждане",
    // "Default Answer"
    defaultValue: "Отговор по подразбиране",
    // "Default texts"
    cellsDefaultRow: "Текстове по подразбиране",
    // "Edit survey settings"
    surveyEditorTitle: "Редактиране на настройките на анкетата",
    // "Edit: {0}"
    qEditorTitle: "Редактиране: {0}",
    // "Maximum character limit"
    maxLength: "Максимална дължина (в знаци)",
    // "Build"
    buildExpression: "Изграждане",
    // "Edit"
    editExpression: "Редактиране",
    // "and"
    and: "и",
    // "or"
    or: "или",
    // "Remove"
    remove: "Премахване",
    // "Add Condition"
    addCondition: "Добавяне на условие",
    // "Select a question to start configuring conditions."
    emptyLogicPopupMessage: "Избери въпрос, за да започне конфигурирането на условия.",
    // "If"
    if: "Ако",
    // "then"
    then: "то",
    // "Target question"
    setToName: "Целеви въпрос",
    // "Question to copy answer from"
    fromName: "Въпрос за копиране на отговора",
    // "Question to skip to"
    gotoName: "Въпрос, към който да се премине",
    // "Rule is incorrect"
    ruleIsNotSet: "Правилото е некоректно.",
    // "Add to the survey results"
    includeIntoResult: "Включете в резултатите от анкетата",
    // "Make the title and description visible"
    showTitle: "Показване на заглавието",
    // "Expand/collapse title"
    expandCollapseTitle: "Разширяване/свиване на заглавие",
    // "Select a survey language"
    locale: "Език на анкетата",
    // "Select device type"
    simulator: "Изберете тип устройство",
    // "Switch to landscape orientation"
    landscapeOrientation: "Превключване към пейзажна ориентация",
    // "Switch to portrait orientation"
    portraitOrientation: "Превключване към портретна ориентация",
    // "Clear hidden question values"
    clearInvisibleValues: "Изчистване на невидими стойности",
    // "Limit to one response"
    cookieName: "Име на бисквитката",
    // "Auto-save survey progress on page change"
    partialSendEnabled: "Запазване на частични резултати от анкетата в процес на изпълнение",
    // "Save the \"Other\" option value as a separate property"
    storeOthersAsComment: "Съхранявай стойността на Други в отделно поле",
    // "Show page titles"
    showPageTitles: "Показване на заглавия на страници",
    // "Show page numbers"
    showPageNumbers: "Показване на номера на страници",
    // "\"Previous Page\" button text"
    pagePrevText: "Текст на бутона за предишна страница",
    // "\"Next Page\" button text"
    pageNextText: "Текст на бутона за следваща страница",
    // "\"Complete Survey\" button text"
    completeText: "Текст на бутона за попълнена анкета",
    // "\"Review Answers\" button text"
    previewText: "Текст на бутона за визуализация на отговорите",
    // "\"Edit Answer\" button text"
    editText: "Редактиране текста на бутона за отговор",
    // "\"Start Survey\" button text"
    startSurveyText: "Текст на бутона за стартиране на анкетата",
    // "Show navigation buttons"
    showNavigationButtons: "Разположение на навигационните бутони",
    // [Auto-translated] "Navigation buttons alignment"
    navigationButtonsLocation: "Подравняване на бутоните за навигация",
    // "Show the \"Previous Page\" button"
    showPrevButton: "Показване на бутона Предишна страница",
    // "First page is a start page"
    firstPageIsStartPage: "Първата страница е начална.",
    // "Show the \"Thank You\" page"
    showCompletePage: "Показване на страницата Завършена анкета",
    // "Auto-advance to the next page"
    autoAdvanceEnabled: "Продължи автоматично към следващата страница.",
    // [Auto-translated] "Complete the survey automatically"
    autoAdvanceAllowComplete: "Попълване на анкетата автоматично",
    // "Show the progress bar"
    showProgressBar: "Местоположение на лентата за напредък",
    // [Auto-translated] "Progress bar alignment"
    progressBarLocation: "Подравняване на лентата за напредъка",
    // "Question title alignment"
    questionTitleLocation: "Местоположение на заглавието на въпроса",
    // "Question title width"
    questionTitleWidth: "Ширина на заглавието на въпроса",
    // "Required symbol(s)"
    requiredMark: "Задължителен символ(и)",
    // "Question title template, default is: '{no}. {require} {title}'"
    questionTitleTemplate: "Шаблонът за заглавие на въпрос по подразбиране е:: '{no}. {require} {title}'",
    // "Error message alignment"
    questionErrorLocation: "Местоположение на съобщението за грешка",
    // "Focus first question on a new page"
    autoFocusFirstQuestion: "Постави първия въпрос на нова страница",
    // "Question order"
    questionOrder: "Подреждане на елементите на страницата",
    // "Time limit to complete the survey"
    timeLimit: "Време за завършване на анкетата (в секунди)",
    // "Time limit to complete one page"
    timeLimitPerPage: "Времево ограничение за завършване на една страница (в секунди)",
    // [Auto-translated] "Use a timer"
    showTimer: "Използване на таймер",
    // "Timer alignment"
    timerLocation: "Местоположение на таймера",
    // "Timer mode"
    timerInfoMode: "Режим на таймера",
    // "Enable entry addition"
    allowAddPanel: "Разрешаване добавянето на панели",
    // "Enable entry removal"
    allowRemovePanel: "Разрешаване премахването на панели",
    // "\"Add Entry\" button text"
    addPanelText: "Добавяне на текст на панелен бутон",
    // "\"Remove Entry\" button text"
    removePanelText: "Премахване на текст на панелен бутон",
    // "Show all elements on one page"
    isSinglePage: "Показване на всички елементи на една страница",
    // "HTML markup"
    html: "HTML маркиране",
    // "Answer"
    setValue: "Отговор",
    // "Storage format"
    dataFormat: "Формат на изображението",
    // "Enable row addition"
    allowAddRows: "Разрешаване добавянето на редове",
    // "Enable row removal"
    allowRemoveRows: "Разрешаване изтриването на редове",
    // "Enable row reordering"
    allowRowReorder: "Разрешаване плъзгането и пускане на ред",
    // "Does not apply if you specify the exact display area width or height."
    responsiveImageSizeHelp: "Не се прилага, ако се посочи точна широчина или височина на изображението.",
    // "Minimum display area width"
    minImageWidth: "Минимална широчина на изображението",
    // "Maximum display area width"
    maxImageWidth: "Максимална широчина на изображението",
    // "Minimum display area height"
    minImageHeight: "Минимална височина на изображението",
    // "Maximum display area height"
    maxImageHeight: "Максимална височина на изображението",
    // "Minimum value"
    minValue: "Минимална стойност",
    // "Maximum value"
    maxValue: "Максимална стойност",
    // [Auto-translated] "Case insensitive"
    caseInsensitive: "Без чувствителност към малки и големи букви",
    // "Minimum length (in characters)"
    minLength: "Минимална дължина (в символи)",
    // "Allow digits"
    allowDigits: "Разрешаване на цифри",
    // "Minimum count"
    minCount: "Минимален брой",
    // "Maximum count"
    maxCount: "Максимален брой",
    // "Regular expression"
    regex: "Регулярен израз",
    surveyvalidator: {
      // [Auto-translated] "Validation message"
      text: "Съобщение за валидиране",
      // [Auto-translated] "Validation expression"
      expression: "Валидиращ израз",
      // [Auto-translated] "Notification type"
      notificationType: "Тип известие",
      // [Auto-translated] "Maximum length (in characters)"
      maxLength: "Максимална дължина (в знаци)"
    },
    // "Total row header"
    totalText: "Общ текст в реда",
    // "Aggregation method"
    totalType: "Общ вид",
    // "Total value expression"
    totalExpression: "Тотален израз",
    // "Total value display format"
    totalDisplayStyle: "Стил на показване на обща стойност",
    // "Currency"
    totalCurrency: "Валута",
    // "Formatted string"
    totalFormat: "Форматиран низ",
    // "Survey logo"
    logo: "Лого (URL или base64-кодиран низ)",
    // "Survey layout"
    questionsOnPageMode: "Структура на анкетата",
    // "Restrict answer length"
    maxTextLength: "Максимална дължина на отговора (в символи)",
    // "Restrict comment length"
    maxCommentLength: "Максимална дължина на коментара (в символи)",
    // [Auto-translated] "Comment area height (in lines)"
    commentAreaRows: "Височина на областта за коментари (в редове)",
    // "Auto-expand text areas"
    autoGrowComment: "Автоматично разширяване на областта за коментари, ако е необходимо",
    // "Allow users to resize text areas"
    allowResizeComment: "Позволява на потребителите да преоразмеряват текстови области",
    // "Update input field values"
    textUpdateMode: "Актуализиране стойността на текстовия въпрос",
    // [Auto-translated] "Input mask type"
    maskType: "Тип маска за въвеждане",
    // "Set focus on the first invalid answer"
    autoFocusFirstError: "Фокусиране върху първия невалиден отговор",
    // "Run validation"
    checkErrorsMode: "Стартиране на валидацията",
    // [Auto-translated] "Validate empty fields on lost focus"
    validateVisitedEmptyFields: "Проверка на празни полета при загубен фокус",
    // "Redirect to an external link after submission"
    navigateToUrl: "Навигирай до URL",
    // "Dynamic external link"
    navigateToUrlOnCondition: "Динамичен URL",
    // "Markup to show if the user already filled out this survey"
    completedBeforeHtml: "Маркиране за показване дали потребителят вече е попълнил тази анкета",
    // "\"Thank You\" page markup"
    completedHtml: "Анкета Пълно маркиране на страница",
    // "Dynamic \"Thank You\" page markup"
    completedHtmlOnCondition: "Динамично проучване Пълно маркиране на страницата",
    // "Markup to show while survey model is loading"
    loadingHtml: "Маркиране за показване, докато се зарежда моделът на анкетата",
    // "Comment area text"
    commentText: "Текст в полето за коментар",
    // "Autocomplete type"
    autocomplete: "Тип автодовършване",
    // "Label for \"True\""
    labelTrue: "\"Вярно\" етикет",
    // "Label for \"False\""
    labelFalse: "\"Невярно\" етикет",
    // "Show the Clear button"
    allowClear: "Показване на бутона Изчистване",
    // [Auto-translated] "Search Mode"
    searchMode: "Режим на търсене",
    // "Display format"
    displayStyle: "Стил за изобразяване на стойността",
    // "Formatted string"
    format: "Форматиран низ",
    // "Maximum fractional digits"
    maximumFractionDigits: "Максимален брой дробни цифри",
    // "Minimum fractional digits"
    minimumFractionDigits: "Минимален брой дробни цифри",
    // "Display grouping separators"
    useGrouping: "Показване на разделители за групиране",
    // "Enable multiple file upload"
    allowMultiple: "Разрешаване на множество файлове",
    // "Preview uploaded images"
    allowImagesPreview: "Преглед на изображения",
    // "Accepted file types"
    acceptedTypes: "Допустими типове файлове",
    // "Wait for upload to complete"
    waitForUpload: "Изчакай да завърши качването.",
    // "Confirm file deletion"
    needConfirmRemoveFile: "Потвърждаване изтриването на файл",
    // "Row details alignment"
    detailPanelMode: "Местоположение на детайлния панел",
    // "Minimum row count"
    minRowCount: "Минимален брой редове",
    // "Maximum row count"
    maxRowCount: "Максимален брой редове",
    // "Confirm row removal"
    confirmDelete: "Потвърждаване изтриването на реда",
    // "Confirmation message"
    confirmDeleteText: "Съобщение за потвърждаване",
    // "Initial number of entries"
    panelCount: "Първоначален брой панели",
    // "Minimum number of entries"
    minPanelCount: "Минимален брой панели",
    // "Maximum number of entries"
    maxPanelCount: "Максимален брой панели",
    // "Initial entry state"
    panelsState: "Разширено състояние на вътрешния панел",
    // "\"Previous Entry\" button text"
    prevPanelText: "Подсказка към бутона за предишен панел",
    // "\"Next Entry\" button text"
    nextPanelText: "Подсказка към бутона за следващ панел",
    // "\"Remove Entry\" button alignment"
    removePanelButtonLocation: "Премахване местоположението на бутона на панела",
    // "Hide the question if it has no rows"
    hideIfRowsEmpty: "Скриване на въпроса, ако няма редове",
    // "Hide columns if there are no rows"
    hideColumnsIfEmpty: "Скриване на колони, ако няма редове",
    // "Custom rating values"
    rateValues: "Персонализирани стойности на оценката",
    // "Rating count"
    rateCount: "Брой на оценките",
    // "Rating configuration"
    autoGenerate: "Как се задават стойности на оценката?",
    slider: {
      // [Auto-translated] "Min value"
      min: "Минимална стойност",
      // [Auto-translated] "Max value"
      max: "Максимална стойност",
      // [Auto-translated] "Step value"
      step: "Стойност на стъпка",
      // [Auto-translated] "Show scale labels"
      showLabels: "Показване на етикети на мащаба",
      // [Auto-translated] "Show tooltips"
      tooltipVisibility: "Показване на подсказки",
      // [Auto-translated] "Allow thumb crossing"
      allowSwap: "Разрешаване на кръстосване на палеца",
      // [Auto-translated] "Number of auto-generated labels"
      labelCount: "Брой автоматично генерирани етикети",
      // [Auto-translated] "Min value expression"
      minValueExpression: "Минимален израз на стойност",
      // [Auto-translated] "Max value expression"
      maxValueExpression: "Израз на максимална стойност",
      // [Auto-translated] "Scale labels configuration"
      autoGenerate: "Конфигурация на етикети в мащаба",
      // [Auto-translated] "Slider type"
      sliderType: "Тип плъзгач",
      // [Auto-translated] "Min range length"
      minRangeLength: "Минимална дължина на диапазона",
      // [Auto-translated] "Max range length"
      maxRangeLength: "Максимална дължина на обхвата",
      // [Auto-translated] "Custom labels"
      customLabels: "Персонализирани етикети",
      // [Auto-translated] "Label format"
      labelFormat: "Формат на етикета",
      // [Auto-translated] "Tooltip format"
      tooltipFormat: "Формат на подсказката"
    },
    file: {
      // [Auto-translated] "Image height"
      imageHeight: "Височина на изображението",
      // [Auto-translated] "Image width"
      imageWidth: "Ширина на изображението"
    },
    // "Hide the question if it has no choices"
    hideIfChoicesEmpty: "Показване въпроса, ако не съдържа избор",
    // "Minimum width"
    minWidth: "Минимална широчина (в CSS-допустими стойности)",
    // "Maximum width"
    maxWidth: "Максимална широчина (в CSS-допустими стойности)",
    // "Width"
    width: "Широчина (в CSS-допустими стойности)",
    // "Show column headers"
    showHeader: "Показване заглавията на колоните",
    // "Show horizontal scrollbar"
    horizontalScroll: "Показване на хоризонталната лента за превъртане",
    // "Minimum column width"
    columnMinWidth: "Минимална широчина на колоната (в CSS-допустими стойности)",
    // "Row header width"
    rowTitleWidth: "Широчина на заглавния ред (в CSS-допустими стойности)",
    // "Value to store when \"True\" is selected"
    valueTrue: "\"Вярно\" стойност",
    // "Value to store when \"False\" is selected"
    valueFalse: "\"Грешно\" стойност",
    // "\"Value is below minimum\" error message"
    minErrorText: "\"Стойността е под минимума.\" съобщение за грешка",
    // "\"Value exceeds maximum\" error message"
    maxErrorText: "\"Стойността надвишава максимума.\" съобщение за грешка",
    // "\"Empty comment\" error message"
    otherErrorText: "\"Празен коментар\" съобщение за грешка",
    // "Error message for duplicate responses"
    keyDuplicationError: "\"Неуникална стойност на ключ\" съобщение за грешка",
    // [Auto-translated] "Minimum choices to select"
    minSelectedChoices: "Минимален избор за избор",
    // "Maximum choices to select"
    maxSelectedChoices: "Максимален брой избрани",
    // "Logo width"
    logoWidth: "Широчина на логото (в CSS-допустими стойности)",
    // "Logo height"
    logoHeight: "Височина на логото (в CSS-допустими стойности)",
    // "Read-only"
    readOnly: "Само за четене",
    // "Disable the read-only mode if"
    enableIf: "Може да се редактира",
    // "\"No rows\" message"
    noRowsText: "\"Без редове\" съобщение",
    // "Separate special choices"
    separateSpecialChoices: "Разделяне със специален избор (Не, Други, Избери всички)",
    // "Copy choices from the following question"
    choicesFromQuestion: "Копиране изборите от следния въпрос",
    // "Which choice options to copy"
    choicesFromQuestionMode: "Кои избори да се копират?",
    // [Auto-translated] "Use values from the following matrix column or panel question as choice IDs"
    choiceValuesFromQuestion: "Използване на стойности от следната матрична колона или въпрос на панела като идентификатори на избор",
    // [Auto-translated] "Use values from the following matrix column or panel question as choice texts"
    choiceTextsFromQuestion: "Използване на стойности от следната матрична колона или панелен въпрос като текстове за избор",
    // [Auto-translated] "Display page titles in the progress bar"
    progressBarShowPageTitles: "Показване на заглавията на страниците в лентата за напредъка",
    // [Auto-translated] "Display page numbers in the progress bar"
    progressBarShowPageNumbers: "Показване на номерата на страниците в лентата за напредъка",
    // "Add a comment box"
    showCommentArea: "Показване на областта за коментари",
    // "Placeholder text for the comment box"
    commentPlaceholder: "Заместител на областта за коментари",
    // "Show the labels as extreme values"
    displayRateDescriptionsAsExtremeItems: "Показване описанията на скоростта като екстремни стойности",
    // "Row order"
    rowOrder: "Поредност на редовете",
    // "Column layout"
    columnsLayout: "Поредност на колоните",
    // "Nested column count"
    columnColCount: "Брой вложени колони",
    // "Correct Answer"
    correctAnswer: "Правилен отговор",
    // "Default Values"
    defaultPanelValue: "Стойности по подразбиране",
    // "Cell Texts"
    cells: "Текст в клетката",
    // [Auto-translated] "Select a file or paste a file link..."
    fileInputPlaceholder: "Избор на файл или поставяне на връзка към файл...",
    // "Prevent duplicate responses in the following column"
    keyName: "Ключова колона",
    itemvalue: {
      // [Auto-translated] "Make the option visible if"
      visibleIf: "Направете опцията видима, ако",
      // [Auto-translated] "Make the option selectable if"
      enableIf: "Направете опцията избираема, ако"
    },
    "itemvalue@rows": {
      // [Auto-translated] "Make the row visible if"
      visibleIf: "Направете реда видим, ако",
      // [Auto-translated] "Make the row editable if"
      enableIf: "Направете реда редактируем, ако"
    },
    imageitemvalue: {
      // "Alt text"
      text: "Алтернативен текст"
    },
    // "Logo alignment"
    logoPosition: "Позиция на логото",
    // "Add logo..."
    addLogo: "Добавяне на лого...",
    // "Change logo..."
    changeLogo: "Промяна на логото...",
    logoPositions: {
      // "Remove logo"
      none: "Изтриване на логото",
      // "Left"
      left: "Вляво",
      // "Right"
      right: "Вдясно",
      // "On the top"
      top: "Отгоре",
      // "In the bottom"
      bottom: "Отдолу"
    },
    // [Auto-translated] "Preview mode"
    previewMode: "Режим на визуализация",
    // [Auto-translated] "Enable grid layout"
    gridLayoutEnabled: "Разрешаване на оформлението на мрежата",
    // [Auto-translated] "Grid columns"
    gridLayoutColumns: "Колони на мрежата",
    // [Auto-translated] "Mask settings"
    maskSettings: "Настройки на маската",
    // [Auto-translated] "Row details error message alignment"
    detailErrorLocation: "Подравняване на съобщенията за грешка на подробните редове",
    // Creator tabs
    tabs: {
      panel: {
        // [Auto-translated] "Panel Layout"
        layout: "Оформление на панела"
      },
      // "General"
      general: "Общ (главен)",
      // "Options"
      fileOptions: "Настройки",
      // "HTML Editor"
      html: "HTML Редактор",
      // "Columns"
      columns: "Колони",
      // "Rows"
      rows: "редове",
      // "Choice Options"
      choices: "Избори",
      // "Items"
      items: "Елементи",
      // "Visible If"
      visibleIf: "Видим",
      // "Editable If"
      enableIf: "Редактируем",
      // "Required If"
      requiredIf: "Задължителен",
      // "Rating Values"
      rateValues: "Оценяване на стойностите",
      // [Auto-translated] "Slider Settings"
      sliderSettings: "Настройки на плъзгача",
      // "Choices from a Web Service"
      choicesByUrl: "Избор от услугата RESTful",
      // "Default Choices"
      matrixChoices: "Избор по подразбиране",
      // "Text Inputs"
      multipleTextItems: "Въвеждане на текст",
      // "Numbering"
      numbering: "Номерация",
      // "Validators"
      validators: "Валидатори",
      // "Navigation"
      navigation: "Навигация",
      // "Question Settings"
      question: "Въпрос",
      // "Pages"
      pages: "Страници",
      // "Quiz Mode"
      timer: "Таймер/Тест",
      // "Calculated Values"
      calculatedValues: "Изчислени стойности",
      // "Triggers"
      triggers: "Тригери",
      // "Title template"
      templateTitle: "Шаблон за заглавие",
      // "Totals"
      totals: "Общо",
      // "Conditions"
      logic: "Логика",
      // [Auto-translated] "Input Mask Settings"
      mask: "Настройки на маската за въвеждане",
      layout: {
        // [Auto-translated] "Panel Layout"
        panel: "Оформление на панела",
        // [Auto-translated] "Layout"
        question: "Оформление",
        // [Auto-translated] "Layout"
        base: "Оформление"
      },
      // "Data"
      data: "Данни",
      // "Validation"
      validation: "Валидиране",
      // "Individual Cell Texts"
      cells: "Текст в клетката",
      // "\"Thank You\" Page"
      showOnCompleted: "Проучването е завършено.",
      // "Logo in the Survey Header"
      logo: "Лого в заглавието на анкетата",
      // "Slider"
      slider: "Плъзгач",
      // "Expression"
      expression: "Израз (фраза)",
      // [Auto-translated] "Question Settings"
      questionSettings: "Настройки на въпроси",
      // "Header"
      header: "Заглавка",
      // "Background"
      background: "Фон",
      // "Appearance"
      appearance: "Външен вид",
      // [Auto-translated] "Accent colors"
      accentColors: "Акцентни цветове",
      // [Auto-translated] "Surface background"
      surfaceBackground: "Повърхностен фон",
      // [Auto-translated] "Scaling"
      scaling: "Мащабиране",
      // "Others"
      others: "Други"
    },
    // "Edit property '{0}'"
    editProperty: "Редактиране на свойства '{0}'",
    // "Items"
    items: "Елементи",
    // "Make choices visible if"
    choicesVisibleIf: "Изборите са видими, ако",
    // "Make choices selectable if"
    choicesEnableIf: "Изборите може да се избират, ако",
    // "Make columns visible if"
    columnsEnableIf: "Колоните са видими, ако",
    // "Make rows visible if"
    rowsEnableIf: "Редовете са видими, ако",
    // "Increase the inner indent"
    innerIndent: "Добавяне на вътрешни отстъпи",
    // [Auto-translated] "Use answers from the last entry as default"
    copyDefaultValueFromLastEntry: "Използване на отговорите от последния запис по подразбиране",
    // "Please enter a value."
    enterNewValue: "Моля, въведете стойността.",
    // "There are no questions in the survey."
    noquestions: "В анкетата няма въпроси.",
    // "Please create a trigger"
    createtrigger: "Моля, създайте тригер.",
    // "Press enter button to edit"
    titleKeyboardAdornerTip: "Натиснете бутона за въвеждане, за да редактирате.",
    // "Press enter button to edit item, press delete button to delete item, press alt plus arrow up or arrow down to move item"
    keyboardAdornerTip: "Натиснете бутона за въвеждане, за да редактирате елемент, натиснете бутона за изтриване, за да изтриете елемент, натиснете alt плюс стрелка нагоре или стрелка надолу, за да преместите елемент.",
    // "On "
    triggerOn: "На ",
    // "Make pages visible"
    triggerMakePagesVisible: "Направете страниците видими.",
    // "Make elements visible"
    triggerMakeQuestionsVisible: "Направете елементите видими.",
    // "Complete the survey if successful."
    triggerCompleteText: "Попълнете анкетата, ако можете.",
    // "The trigger is not set"
    triggerNotSet: "Тригерът не е зададен.",
    // "Run if"
    triggerRunIf: "Работете, ако",
    // "Change value of: "
    triggerSetToName: "Промяна на стойността на: ",
    // "Copy value from: "
    triggerFromName: "Копиране на стойност от: ",
    // "Run this Expression"
    triggerRunExpression: "Изпълнете този израз.",
    // "to: "
    triggerSetValue: "до: ",
    // "Go to the question"
    triggerGotoName: "Отидете на въпроса.",
    // "Do not put the variable into the survey result."
    triggerIsVariable: "Не поставяйте променливата в резултата от анкетата.",
    // "Please enter a valid expression"
    triggerRunExpressionEmpty: "Моля, въведете валиден израз.",
    // "Type expression here..."
    emptyExpressionPlaceHolder: "Въведете израз тук...",
    // "No file chosen"
    noFile: "Няма избран файл.",
    // "Clear hidden question values"
    clearIfInvisible: "Изчистване на стойността, ако въпросът се скрие",
    // "Store values in the following property"
    valuePropertyName: "Име на свойството стойност",
    // "Enable search-as-you-type"
    searchEnabled: "Търсенето разрешено",
    // "Hide selected items"
    hideSelectedItems: "Скриване на избраните елементи",
    // "Collapse the dropdown upon selection"
    closeOnSelect: "Затворете падащото меню след избор.",
    // "Vertical alignment within cells"
    verticalAlign: "Вертикално подравняване",
    // "Alternate row colors"
    alternateRows: "Алтернативни редове",
    // "Make columns visible if"
    columnsVisibleIf: "Колоните се виждат, ако",
    // "Make rows visible if"
    rowsVisibleIf: "Редовете се виждат, ако",
    // "Placeholder text for the comment box"
    otherPlaceholder: "Заместител на областта за коментари",
    // [Auto-translated] "Placeholder text for Local file"
    filePlaceholder: "Контейнер за текст за локален файл",
    // [Auto-translated] "Placeholder text for Camera"
    photoPlaceholder: "Контейнер за текст за камера",
    // [Auto-translated] "Placeholder text for Local file or Camera"
    fileOrPhotoPlaceholder: "Контейнер за текст за локален файл или камера",
    // [Auto-translated] "Rating icon"
    rateType: "Икона за оценка",
    // [Auto-translated] "Ex.: https://api.example.com/books"
    url_placeholder: "Напр.: https://api.example.com/books",
    // [Auto-translated] "Ex.: categories.fiction"
    path_placeholder: "Пример: категории.фантастика",
    // [Auto-translated] "Ex.: a)"
    questionStartIndex_placeholder: "Напр.: а)",
    // [Auto-translated] "Ex.: 6in"
    width_placeholder: "Пример: 6in",
    // [Auto-translated] "Ex.: 600px"
    minWidth_placeholder: "Примерно: 600px",
    // [Auto-translated] "Ex.: 50%"
    maxWidth_placeholder: "Примерно: 50%",
    // "auto"
    imageHeight_placeholder: "Автоматично",
    // "auto"
    imageWidth_placeholder: "Автоматично",
    // [Auto-translated] "Ex.: 100px"
    itemTitleWidth_placeholder: "Пример: 100px",
    theme: {
      // [Auto-translated] "Theme"
      themeName: "Тема",
      // [Auto-translated] "Question appearance"
      isPanelless: "Външен вид на въпроса",
      // [Auto-translated] "Background and corner radius"
      editorPanel: "Фон и радиус на ъгъла",
      // [Auto-translated] "Background and corner radius"
      questionPanel: "Фон и радиус на ъгъла",
      // [Auto-translated] "Accent color"
      primaryColor: "Цвят за акцентиране",
      // [Auto-translated] "Panel and question box opacity"
      panelBackgroundTransparency: "Непрозрачност на панела и полето з�� въпроси",
      // [Auto-translated] "Input element opacity"
      questionBackgroundTransparency: "Непрозрачност на входния елемент",
      // [Auto-translated] "Survey font size"
      fontSize: "Размер на шрифта на анкетата",
      // [Auto-translated] "Survey scale factor"
      scale: "Коефициент на мащаба на проучването",
      // [Auto-translated] "Corner radius"
      cornerRadius: "Радиус на ъгъла",
      // [Auto-translated] "Advanced mode"
      advancedMode: "Разширен режим",
      // [Auto-translated] "Title font"
      pageTitle: "Шрифт на заглавието",
      // [Auto-translated] "Description font"
      pageDescription: "Шрифт за описание",
      // [Auto-translated] "Title font"
      questionTitle: "Шрифт на заглавието",
      // [Auto-translated] "Description font"
      questionDescription: "Шрифт за описание",
      // [Auto-translated] "Font"
      editorFont: "Шрифт",
      // [Auto-translated] "Opacity"
      backgroundOpacity: "Непрозрачност", // Auto-generated string
      // [Auto-translated] "Survey font family"
      "--sjs-font-family": "Семейство шрифтове за проучване",
      // [Auto-translated] "Background color"
      "--sjs-general-backcolor-dim": "Цвят на фона",
      // [Auto-translated] "Accent background colors"
      "--sjs-primary-backcolor": "Акцентни цветове на фона",
      // [Auto-translated] "Accent foreground colors"
      "--sjs-primary-forecolor": "Акцентни цветове на преден план",
      // [Auto-translated] "Error message colors"
      "--sjs-special-red": "Цветове на съобщението за грешка",
      // [Auto-translated] "Shadow effects"
      "--sjs-shadow-small": "Ефекти на сянка",
      // [Auto-translated] "Shadow effects"
      "--sjs-shadow-inner": "Ефекти на сянка",
      // [Auto-translated] "Colors"
      "--sjs-border-default": "Цветове"
    },
    "header@header": {
      // [Auto-translated] "View"
      headerView: "Изглед",
      // [Auto-translated] "Logo alignment"
      logoPosition: "Подравняване на логото",
      // [Auto-translated] "Survey title font"
      surveyTitle: "Шрифт за заглавие на проучване",
      // [Auto-translated] "Survey description font"
      surveyDescription: "Шрифт за описание на проучването",
      // [Auto-translated] "Survey title font"
      headerTitle: "Шрифт за заглавие на проучване",
      // [Auto-translated] "Survey description font"
      headerDescription: "Шрифт за описание на проучването",
      // [Auto-translated] "Content area width"
      inheritWidthFrom: "Ширина на областта на съдържанието",
      // [Auto-translated] "Text width"
      textAreaWidth: "Ширина на текста",
      // [Auto-translated] "Background color"
      backgroundColorSwitch: "Цвят на фона",
      // [Auto-translated] "Background image"
      backgroundImage: "Фоново изображение",
      // [Auto-translated] "Opacity"
      backgroundImageOpacity: "Непрозрачност",
      // [Auto-translated] "Overlap"
      overlapEnabled: "Припокриване",
      // [Auto-translated] "Logo alignment"
      logoPositionX: "Подравняване на логото",
      // [Auto-translated] "Survey title alignment"
      titlePositionX: "Подравняване на заглавието на проучването",
      // [Auto-translated] "Survey description alignment"
      descriptionPositionX: "Подравняване на описанието на проучването"
    }
  },
  // Property values
  pv: {
    // "true"
    "true": "вярно",
    // "false"
    "false": "невярно",
    // [Auto-translated] "Local file"
    file: "Локален файл",
    // [Auto-translated] "Camera"
    camera: "Камера",
    // [Auto-translated] "Local file or Camera"
    "file-camera": "Локален файл или камера",
    // "Inherit"
    inherit: "Наследяване",
    // "Visible"
    show: "Видим",
    // "Hidden"
    hide: "Скрит",
    // "Inherit"
    default: "Наследен",
    // "Initial"
    initial: "Първоначален",
    // "Random"
    random: "Произволен",
    // "Collapsed"
    collapsed: "Сгънат",
    // "Expanded"
    expanded: "Разширен",
    // "None"
    none: "Нито един",
    // "Ascending"
    asc: "Възходящ",
    // "Descending"
    desc: "Низходящ",
    // "Indeterminate"
    indeterminate: "Неопределен",
    // [Auto-translated] "Selected"
    selected: "Избран",
    // [Auto-translated] "Unselected"
    unselected: "Неизбран",
    // "decimal"
    decimal: "десетичен знак",
    // "currency"
    currency: "валута",
    // "percent"
    percent: "процент",
    // "First panel is expanded"
    firstExpanded: "Първият панел е разширен.",
    // "Hide question numbers"
    off: "Скриване на номерата на въпросите",
    // "List"
    list: "Списък",
    // [Auto-translated] "Carousel"
    carousel: "Въртележката",
    // "Tabs"
    tab: "Раздели",
    // "Panel navigator + Progress bar at the top"
    progressTop: "Панел навигатор + Лента за напредък в горната част",
    // "Panel navigator + Progress bar at the bottom"
    progressBottom: "Панел навигатор + Лента за напредък в долната част",
    // "Panel navigator + Progress bar at the top and bottom"
    progressTopBottom: "Панел навигатор + Лента за напредък в горната и долната част",
    // "Horizontal"
    horizontal: "Хоризонтален",
    // "Vertical"
    vertical: "Вертикален",
    // "Top"
    top: "Горен",
    // "Bottom"
    bottom: "Долен",
    // "Top and bottom"
    topBottom: "Отгоре и отдолу",
    // "Both"
    both: "И двете",
    // "Left"
    left: "Вляво",
    // "Right"
    right: "Отдясно",
    // [Auto-translated] "Center"
    center: "Център",
    // [Auto-translated] "Left and right"
    leftRight: "Наляво и надясно",
    // [Auto-translated] "Middle"
    middle: "Среда",
    // "color"
    color: "цвят",
    // "date"
    date: "дата",
    // "datetime"
    datetime: "Време за среща",
    // "datetime-local"
    "datetime-local": "Време за среща – локално",
    // "email"
    email: "имейл",
    // "month"
    month: "месец",
    // "number"
    number: "номер",
    // "password"
    password: "парола",
    // "range"
    range: "диапазон",
    // "tel"
    tel: "телефон",
    // "text"
    text: "текст",
    // "time"
    time: "време",
    // "url"
    url: "url",
    // "week"
    week: "седмица",
    // "Hidden"
    hidden: "Скрит",
    // "Editable"
    edit: "Редактируем",
    // "Read-only"
    display: "Само за четене",
    // [Auto-translated] "Contain"
    contain: "Съдържам",
    // [Auto-translated] "Cover"
    cover: "Капак",
    // [Auto-translated] "Fill"
    fill: "Запълване",
    // [Auto-translated] "Next"
    next: "Следващ",
    // [Auto-translated] "Last"
    last: "Трая",
    // "Upon survey completion"
    onComplete: "Когато анкетата приключи",
    // "When question gets hidden"
    onHidden: "Когато въпросът стане скрит",
    // "When question or its panel/page gets hidden"
    onHiddenContainer: "Когато въпросът или неговият панел/страница се скрият",
    clearInvisibleValues: {
      // "Never"
      none: "Никога"
    },
    clearIfInvisible: {
      // [Auto-translated] "Never"
      none: "Никога"
    },
    // [Auto-translated] "Radio Buttons"
    radio: "Радио бутони",
    inputType: {
      // "Color"
      color: "Цвят",
      // "Date"
      date: "Дата",
      // "Date and Time"
      "datetime-local": "Дата и час",
      // "Email"
      email: "Имейл",
      // "Month"
      month: "Месец",
      // "Number"
      number: "Номер",
      // "Password"
      password: "Парола",
      // "Range"
      range: "Обхват",
      // "Phone Number"
      tel: "Телефонен номер",
      // "Text"
      text: "Текст",
      // "Time"
      time: "Време",
      // "URL"
      url: "URL",
      // "Week"
      week: "Седмица"
    },
    sliderType: {
      // [Auto-translated] "Single-Value"
      single: "Единична стойност",
      // [Auto-translated] "Range"
      range: "Диапазон"
    },
    tooltipVisibility: {
      // [Auto-translated] "Auto"
      auto: "Авто",
      // [Auto-translated] "Always"
      always: "Винаги",
      // [Auto-translated] "Never"
      never: "Никога"
    },
    notificationType: {
      // [Auto-translated] "Error"
      error: "Грешка",
      // [Auto-translated] "Warning"
      warning: "Предупреждение",
      // [Auto-translated] "Informational"
      info: "Информационна"
    },
    autocomplete: {
      // [Auto-translated] "Full Name"
      name: "Пълно име",
      // [Auto-translated] "Prefix"
      "honorific-prefix": "Префикс",
      // [Auto-translated] "First Name"
      "given-name": "Собствено име",
      // [Auto-translated] "Middle Name"
      "additional-name": "Бащино име",
      // [Auto-translated] "Last Name"
      "family-name": "Презиме",
      // [Auto-translated] "Suffix"
      "honorific-suffix": "Наставка",
      // [Auto-translated] "Nickname"
      nickname: "Прякор",
      // [Auto-translated] "Job Title"
      "organization-title": "Длъжност",
      // [Auto-translated] "User Name"
      username: "Потребителско име",
      // [Auto-translated] "New Password"
      "new-password": "Нова парола",
      // [Auto-translated] "Current Password"
      "current-password": "Текуща парола",
      // [Auto-translated] "Organization Name"
      organization: "Име на организацията",
      // [Auto-translated] "Full Street Address"
      "street-address": "Пълен адрес на улицата",
      // [Auto-translated] "Address Line 1"
      "address-line1": "Адресен ред 1",
      // [Auto-translated] "Address Line 2"
      "address-line2": "Адресен ред 2",
      // [Auto-translated] "Address Line 3"
      "address-line3": "Адресен ред 3",
      // [Auto-translated] "Level 4 Address"
      "address-level4": "Адрес на ниво 4",
      // [Auto-translated] "Level 3 Address"
      "address-level3": "Адрес от ниво 3",
      // [Auto-translated] "Level 2 Address"
      "address-level2": "Адрес от ниво 2",
      // [Auto-translated] "Level 1 Address"
      "address-level1": "Адрес от ниво 1",
      // [Auto-translated] "Country Code"
      country: "Код на държавата",
      // [Auto-translated] "Country Name"
      "country-name": "Име на държавата",
      // [Auto-translated] "Postal Code"
      "postal-code": "Пощенски код",
      // [Auto-translated] "Cardholder Name"
      "cc-name": "Име на картодържателя",
      // [Auto-translated] "Cardholder First Name"
      "cc-given-name": "Име на картодържателя",
      // [Auto-translated] "Cardholder Middle Name"
      "cc-additional-name": "Бащино име на картодържателя",
      // [Auto-translated] "Cardholder Last Name"
      "cc-family-name": "Фамилия на картодържателя",
      // [Auto-translated] "Credit Card Number"
      "cc-number": "Номер на кредитна карта",
      // [Auto-translated] "Expiration Date"
      "cc-exp": "Срок на годност",
      // [Auto-translated] "Expiration Month"
      "cc-exp-month": "Месец на изтичане",
      // [Auto-translated] "Expiration Year"
      "cc-exp-year": "Година на изтичане",
      // [Auto-translated] "Card Security Code"
      "cc-csc": "Код за сигурност на картата",
      // [Auto-translated] "Credit Card Type"
      "cc-type": "Тип кредитна карта",
      // [Auto-translated] "Transaction Currency"
      "transaction-currency": "Валута на транзакцията",
      // [Auto-translated] "Transaction Amount"
      "transaction-amount": "Сума на транзакцията",
      // [Auto-translated] "Preferred Language"
      language: "Предпочитан език",
      // [Auto-translated] "Birthday"
      bday: "Рожден ден",
      // [Auto-translated] "Birthday Day"
      "bday-day": "Рожден ден",
      // [Auto-translated] "Birthday Month"
      "bday-month": "Месец на рождения ден",
      // [Auto-translated] "Birthday Year"
      "bday-year": "Година на рождения ден",
      // [Auto-translated] "Gender"
      sex: "Пол",
      // [Auto-translated] "Website URL"
      url: "URL адрес на уебсайта",
      // [Auto-translated] "Profile Photo"
      photo: "Профилна снимка",
      // [Auto-translated] "Telephone Number"
      tel: "Телефонен номер",
      // [Auto-translated] "Country Code for Phone"
      "tel-country-code": "Код на държавата за телефон",
      // [Auto-translated] "National Telephone Number"
      "tel-national": "Национален телефонен номер",
      // [Auto-translated] "Area Code"
      "tel-area-code": "Регионален код",
      // [Auto-translated] "Local Phone Number"
      "tel-local": "Местен телефонен номер",
      // [Auto-translated] "Local Phone Prefix"
      "tel-local-prefix": "Префикс на местен телефон",
      // [Auto-translated] "Local Phone Suffix"
      "tel-local-suffix": "Суфикс за местен телефон",
      // [Auto-translated] "Phone Extension"
      "tel-extension": "Разширение на телефона",
      // [Auto-translated] "Email Address"
      email: "Имейл адрес",
      // [Auto-translated] "Instant Messaging Protocol"
      impp: "Протокол за незабавни съобщения"
    },
    maskType: {
      // [Auto-translated] "None"
      none: "Никой",
      // [Auto-translated] "Pattern"
      pattern: "Шарка",
      // [Auto-translated] "Numeric"
      numeric: "Цифров",
      // [Auto-translated] "Date and Time"
      datetime: "Дата и час",
      // [Auto-translated] "Currency"
      currency: "Валута"
    },
    inputTextAlignment: {
      // [Auto-translated] "Auto"
      auto: "Авто",
      // [Auto-translated] "Left"
      left: "Ляво",
      // [Auto-translated] "Right"
      right: "Дясно"
    },
    // "All"
    all: "Всички",
    // "Page"
    page: "Старница",
    // "Survey"
    survey: "Анкета",
    // "When switching to the next page"
    onNextPage: "При превключване към следващата страница",
    // "After an answer is changed"
    onValueChanged: "След промяна на отговора",
    // "Before an answer is changed"
    onValueChanging: "Преди да бъде променен отговор",
    questionsOnPageMode: {
      // [Auto-translated] "Original structure"
      standard: "Оригинална структура",
      // [Auto-translated] "Show all questions on one page"
      singlePage: "Показване на всички въпроси на една страница",
      // [Auto-translated] "Show single question per page"
      questionPerPage: "Показване на единичен въпрос на страница",
      // [Auto-translated] "Show single input field per page"
      inputPerPage: "Показване на едно поле за въвеждане на страница"
    },
    // "No preview"
    noPreview: "Без визуализация",
    // "Show all questions"
    showAllQuestions: "Показване на всички въпроси",
    // "Show answered questions only"
    showAnsweredQuestions: "Показване само на въпроси с отговор",
    // [Auto-translated] "Show all questions"
    allQuestions: "Покажи всички въпроси",
    // [Auto-translated] "Show answered questions only"
    answeredQuestions: "Показване само на отговори на въпроси",
    // "Completed pages"
    pages: "Завършени страници",
    // "Answered questions"
    questions: "Отговорени въпроси",
    // "Answered required questions"
    requiredQuestions: "Отговорени задължителни въпроси",
    // "Valid answers"
    correctQuestions: "Валидни отговори",
    // "Completed pages (button UI)"
    buttons: "Завършени страници (бутон UI)",
    // "Under the input field"
    underInput: "Под входа",
    // "Under the question title"
    underTitle: "Под заглавието",
    // "On lost focus"
    onBlur: "Размазване",
    // "While typing"
    onTyping: "Докато пишете",
    // "Under the row"
    underRow: "Под реда",
    // "Under the row, display one section only"
    underRowSingle: "Под реда се вижда само един панел.",
    // "Auto"
    auto: "Авто",
    showNavigationButtons: {
      // "Hidden"
      none: "Скрит"
    },
    timerInfoMode: {
      // "Both"
      combined: "И двете"
    },
    addRowButtonLocation: {
      // "Based on matrix layout"
      default: "Зависи от оформлението на матрицата."
    },
    panelsState: {
      // "Locked"
      default: "Потребителите не може да разгъват или свиват панели.",
      // "Collapse all"
      collapsed: "Всички панели са свити.",
      // "Expand all"
      expanded: "Всички панели са разширени.",
      // [Auto-translated] "First expanded"
      firstExpanded: "Първо разширено"
    },
    widthMode: {
      // "Static"
      static: "Статичен",
      // "Responsive"
      responsive: "Адаптивен"
    },
    contentMode: {
      // "Image"
      image: "Изображение",
      // "Video"
      video: "Видяо",
      // "YouTube"
      youtube: "YouTube"
    },
    displayMode: {
      // "Buttons"
      buttons: "Бутони",
      // "Dropdown"
      dropdown: "Падащо меню"
    },
    rateColorMode: {
      // "Default"
      default: "По подразбиране",
      // [Auto-translated] "Scale"
      scale: "Мащаб"
    },
    scaleColorMode: {
      // [Auto-translated] "Monochrome"
      monochrome: "Монохромен",
      // [Auto-translated] "Colored"
      colored: "Оцветен"
    },
    autoGenerate: {
      // "Auto-generate"
      "true": "Генерирай.",
      // "Manual"
      "false": "Въведи ръчно."
    },
    rateType: {
      // "Labels"
      labels: "Етикети",
      // "Stars"
      stars: "Звезди",
      // "Smileys"
      smileys: "Усмивки"
    },
    state: {
      // [Auto-translated] "Locked"
      default: "Заключен"
    },
    showQuestionNumbers: {
      // [Auto-translated] "Auto-numbering"
      default: "Автоматично номериране",
      // [Auto-translated] "Auto-numbering"
      on: "Автоматично номериране",
      // [Auto-translated] "Reset on each page"
      onPage: "Нулиране на всяка страница",
      // [Auto-translated] "Reset on each panel"
      onpanel: "Нулиране на всеки панел",
      // [Auto-translated] "Reset on each panel"
      onPanel: "Нулиране на всеки панел",
      // [Auto-translated] "Recursive numbering"
      recursive: "Рекурсивно номериране",
      // [Auto-translated] "Continue across the survey"
      onSurvey: "Продължете през проучването",
      // [Auto-translated] "No numbering"
      off: "Без номериране"
    },
    descriptionLocation: {
      // [Auto-translated] "Under the question title"
      underTitle: "Под заглавието на въпроса",
      // [Auto-translated] "Under the input field"
      underInput: "Под полето за въвеждане"
    },
    selectToRankAreasLayout: {
      // [Auto-translated] "Next to choices"
      horizontal: "До опциите",
      // [Auto-translated] "Above choices"
      vertical: "Над опциите"
    },
    displayStyle: {
      // [Auto-translated] "Decimal"
      decimal: "Десетичен",
      // [Auto-translated] "Currency"
      currency: "Валута",
      // [Auto-translated] "Percentage"
      percent: "Процент",
      // [Auto-translated] "Date"
      date: "Дата"
    },
    totalDisplayStyle: {
      // [Auto-translated] "Decimal"
      decimal: "Десетичен",
      // [Auto-translated] "Currency"
      currency: "Валута",
      // [Auto-translated] "Percentage"
      percent: "Процент",
      // [Auto-translated] "Date"
      date: "Дата"
    },
    rowOrder: {
      // [Auto-translated] "Original"
      initial: "Оригинален"
    },
    questionOrder: {
      // [Auto-translated] "Original"
      initial: "Оригинален"
    },
    progressBarLocation: {
      // [Auto-translated] "Top"
      top: "Връх",
      // [Auto-translated] "Bottom"
      bottom: "Дъно",
      // [Auto-translated] "Top and bottom"
      topbottom: "Отгоре и отдолу",
      // [Auto-translated] "Above the header"
      aboveheader: "Над заглавката",
      // [Auto-translated] "Below the header"
      belowheader: "Под заглавката",
      // [Auto-translated] "Hidden"
      off: "Скрит"
    },
    // [Auto-translated] "Sum"
    sum: "Сума",
    // [Auto-translated] "Count"
    count: "Граф",
    // [Auto-translated] "Min"
    min: "Мин",
    // [Auto-translated] "Max"
    max: "Макс",
    // [Auto-translated] "Avg"
    avg: "Ср",
    searchMode: {
      // [Auto-translated] "Contains"
      contains: "Съдържа",
      // [Auto-translated] "Starts with"
      startsWith: "Започва с"
    },
    backgroundImageFit: {
      // [Auto-translated] "Auto"
      auto: "Авто",
      // [Auto-translated] "Cover"
      cover: "Капак",
      // [Auto-translated] "Contain"
      contain: "Съдържам",
      // [Auto-translated] "Stretch"
      fill: "Участък",
      // [Auto-translated] "Tile"
      tile: "Плочки"
    },
    backgroundImageAttachment: {
      // [Auto-translated] "Fixed"
      fixed: "Неподвижен",
      // [Auto-translated] "Scroll"
      scroll: "Свитък"
    },
    headerView: {
      // [Auto-translated] "Basic"
      basic: "Основен",
      // [Auto-translated] "Advanced"
      advanced: "Напреднал"
    },
    inheritWidthFrom: {
      // [Auto-translated] "Same as survey"
      survey: "Същото като проучването",
      // [Auto-translated] "Same as container"
      container: "Същото като контейнера"
    },
    backgroundColorSwitch: {
      // [Auto-translated] "None"
      none: "Никой",
      // [Auto-translated] "Accent color"
      accentColor: "Цвят за акцентиране",
      // [Auto-translated] "Custom"
      custom: "Обичай"
    },
    colorPalette: {
      // [Auto-translated] "Light"
      light: "Светлина",
      // [Auto-translated] "Dark"
      dark: "Тъмен"
    },
    isPanelless: {
      // [Auto-translated] "Default"
      "false": "По подразбиране",
      // [Auto-translated] "Without Panels"
      "true": "Без панели"
    },
    progressBarInheritWidthFrom: {
      // [Auto-translated] "Same as survey"
      survey: "Същото като проучването",
      // [Auto-translated] "Same as container"
      container: "Същото като контейнера"
    }
  },
  // Operators
  op: {
    // "Empty"
    empty: "празно",
    // "Not empty"
    notempty: "не е празно",
    // "Equals"
    equal: "равно",
    // "Does not equal"
    notequal: "не е равно",
    // "Contains"
    contains: "съдържа",
    // "Does not contain"
    notcontains: "не съдържа",
    // "Any of"
    anyof: "всеки от",
    // "All of"
    allof: "всички",
    // "Greater than"
    greater: "по-голямо",
    // "Less than"
    less: "по-малко",
    // "Greater than or equal to"
    greaterorequal: "по-голямо или равно",
    // "Less than or equal to"
    lessorequal: "по-малко или равно",
    // "and"
    and: "и",
    // "or"
    or: "или"
  },
  // Embed window
  ew: {
    // "Use Angular version"
    angular: "Използвайте Angular версия",
    // "Use jQuery version"
    jquery: "Използвайте jQuery версия",
    // "Use Knockout version"
    knockout: "Използвайте Knockout версия",
    // "Use React version"
    react: "Използвайте версията на React",
    // "Use Vue version"
    vue: "Използвайте версията на Vue",
    // "For bootstrap framework"
    bootstrap: "За bootstrap framework",
    // "Modern theme"
    modern: "Модерна тема",
    // "Default theme"
    default: "тема по подразбиране",
    // "Orange theme"
    orange: "Оранжева тема",
    // "Darkblue theme"
    darkblue: "Тъмносиня тема",
    // "Darkrose theme"
    darkrose: "Тъмнорозова тема",
    // "Stone theme"
    stone: "Каменна тема",
    // "Winter theme"
    winter: "Зимна тема",
    // "Winter-Stone theme"
    winterstone: "Зимно-каменна тема",
    // "Show survey on a page"
    showOnPage: "Показване на анкетата на страница",
    // "Show survey in a window"
    showInWindow: "Показване на анкетата в прозорец",
    // "Load Survey JSON from server"
    loadFromServer: "Заредете JSON на анкетата от сървъра",
    // "Scripts and styles"
    titleScript: "Скриптове и стилове",
    // "HTML"
    titleHtml: "HTML",
    // "JavaScript"
    titleJavaScript: "JavaScript"
  },
  // Preview (Survey)
  ts: {
    // "Select the page to test it"
    selectPage: "Избери страницата, за да я тестваш.",
    // "Show invisible elements"
    showInvisibleElements: "Показване на невидими елементи",
    // "Hide invisible elements"
    hideInvisibleElements: "Скриване на невидими елементи",
    // [Auto-translated] "Previous"
    prevPage: "Предишен",
    // [Auto-translated] "Next"
    nextPage: "Следващ"
  },
  validators: {
    // "Answer count"
    answercountvalidator: "Брой отговори",
    // "Email"
    emailvalidator: "Имейл",
    // "Expression"
    expressionvalidator: "Израз",
    // "Number"
    numericvalidator: "Число",
    // "Regex"
    regexvalidator: "Регулярен израз",
    // "Text"
    textvalidator: "Текст"
  },
  triggers: {
    // "Complete survey"
    completetrigger: "Попълнена анкета",
    // "Set answer"
    setvaluetrigger: "Задаване на отговор",
    // "Copy answer"
    copyvaluetrigger: "Копиране на отговор",
    // "Skip to question"
    skiptrigger: "Преминаване към въпроса",
    // "Run expression"
    runexpressiontrigger: "Стартиране на израз",
    // "change visibility (deprecated)"
    visibletrigger: "промяна на видимостта (отхвърлено)"
  },
  peplaceholder: {
    patternmask: {
      // "Ex.: +1(999)-999-99-99"
      pattern: "Пример: +1(999)-999-99-99"
    },
    datetimemask: {
      // "Ex.: mm/dd/yyyy HH:MM:ss"
      pattern: "Пример: мм/дд/гггг"
    },
    currencymask: {
      // "Ex.: $"
      prefix: "Пример: $",
      // "Ex.: USD"
      suffix: "Пример: USD"
    },
    panelbase: {
      // [Auto-translated] "Ex.: 200px"
      questionTitleWidth: "Пример: 200px"
    },
    panellayoutcolumn: {
      // "Ex.: 30%"
      effectiveWidth: "Пример: 30%",
      // "Ex.: 200px"
      questionTitleWidth: "Пример: 200px"
    }
  },
  pehelp: {
    panel: {
      // "A panel ID that is not visible to respondents."
      name: "ИД на панел, който не е видим за респондентите.",
      // [Auto-translated] "Type a panel subtitle."
      description: "Въведете подзаглавие на панела.",
      // "Use the magic wand icon to set a conditional rule that determines panel visibility."
      visibleIf: "Използвайте иконата на магическа пръчка, за да зададете условно правило, което определя видимостта на панела.",
      // [Auto-translated] "Use the magic wand icon to set a conditional rule that disables the read-only mode for the panel."
      enableIf: "Използвайте иконата на магическа пръчка, за да зададете условно правило, което забранява режима само за четене за панела.",
      // "Use the magic wand icon to set a conditional rule that prevents survey submission unless at least one nested question has an answer."
      requiredIf: "Използвайте иконата на магическа пръчка, за да зададете условно правило, което не позволява подаване на проучване, освен ако поне един вложен въпрос няма отговор.",
      // [Auto-translated] "Applies to all questions within this panel. When set to \"Hidden\", it also hides question descriptions. If you want to override this setting, define title alignment rules for individual questions. The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Top\" by default). "
      questionTitleLocation: "Отнася се за всички въпроси в този панел. Когато е зададено на \"Скрито\", той също скрива описанията на въпросите. Ако искате да замените тази настройка, дефинирайте правила за подравняване на заглавието за отделни въпроси. Опцията \"Наследяване\" прилага настройката на ниво страница (ако е зададена) или на ниво проучване (\"Отгоре\" по подразбиране). ",
      // [Auto-translated] "Sets consistent width for question titles when they are aligned to the left of their question boxes. Accepts CSS values (px, %, in, pt, etc.)."
      questionTitleWidth: "Задава еднаква ширина за заглавията на въпросите, когато те са подравнени отляво на техните полета за въпроси. Приема CSS стойности (px, %, in, pt и т.н.).",
      // "Sets the location of an error message in relation to all questions within the panel. The \"Inherit\" option applies the page-level (if set) or survey-level setting."
      questionErrorLocation: "Задава местоположението на съобщение за грешка във връзка с всички въпроси в панела. Опцията \"Наследяване\" прилага настройката за ниво на страница (ако е зададена) или ниво проучване.",
      // [Auto-translated] "Keeps the original order of questions or randomizes them. The \"Inherit\" option applies the page-level (if set) or survey-level setting."
      questionOrder: "Запазва първоначалния ред на въпросите или ги рандомизира. Опцията \"Наследяване\" прилага настройката на ниво страница (ако е зададена) или на ниво проучване.",
      // "Repositions the panel to the end of a selected page."
      page: "Премества панела в края на избрана страница.",
      // [Auto-translated] "Adds space or margin between the panel content and the left border of the panel box."
      innerIndent: "Добавя интервал или поле между съдържанието на панела и лявата граница на панелното поле.",
      // "Unselect to display the panel in one line with the previous question or panel. The setting doesn't apply if the panel is the first element in your form."
      startWithNewLine: "Премахнете отметката, за да покажете панела в един ред с предишния въпрос или панел. Настройката не се прилага, ако панелът е първият елемент във вашия формуляр.",
      // "Choose from: \"Expanded\" - the panel is displayed in full and can be collapsed; \"Collapsed\" - the panel displays only the title and description and can be expanded; \"Locked\" - the panel is displayed in full and cannot be collapsed."
      state: "Изберете от: \"Разширен\" - панелът се показва изцяло и може да бъде свит; \"Свит\" - панелът показва само заглавието и описанието и може да бъде разширен; \"Заключен\" - панелът се показва изцяло и не може да се свива.",
      // [Auto-translated] "Sets the width of the panel in proportion to other survey elements in the same line. Accepts CSS values (px, %, in, pt, etc.)."
      width: "Задава ширината на панела пропорционално на други елементи на проучването в същия ред. Приема CSS стойности (px, %, in, pt и т.н.).",
      // [Auto-translated] "Assigns numbers to questions nested within this panel."
      showQuestionNumbers: "Присвоява номера на въпроси, вложени в този панел.",
      // [Auto-translated] "Specifies how many columns this panel spans within the grid layout."
      effectiveColSpan: "Указва колко колони обхваща този панел в оформлението на мрежата.",
      // [Auto-translated] "This table lets you configure each grid column within the panel. It automatically sets the width percentage for each column based on the maximum number of elements in a row. To customize the grid layout, manually adjust these values and define the title width for all questions in each column."
      gridLayoutColumns: "Тази таблица ви позволява да конфигурирате всяка колона на мрежата в панела. Той автоматично задава процента на ширината за всяка колона въз основа на максималния брой елементи в реда. За да персонализирате оформлението на мрежата, ръчно коригирайте тези стойности и определете ширината на заглавието за всички въпроси във всяка колона."
    },
    paneldynamic: {
      // "A panel ID that is not visible to respondents."
      name: "ИД на панел, който не е видим за респондентите.",
      // "Type a panel subtitle."
      description: "Въведете подзаглавие на панела.",
      // "Use the magic wand icon to set a conditional rule that determines panel visibility."
      visibleIf: "Използвайте иконата на магическа пръчка, за да зададете условно правило, което определя видимостта на панела.",
      // [Auto-translated] "Use the magic wand icon to set a conditional rule that disables the read-only mode for the panel."
      enableIf: "Използвайте иконата на магическа пръчка, за да зададете условно правило, което забранява режима само за четене за панела.",
      // "Use the magic wand icon to set a conditional rule that prevents survey submission unless at least one nested question has an answer."
      requiredIf: "Използвайте иконата на магическа пръчка, за да зададете условно правило, което не позволява подаване на проучване, освен ако поне един вложен въпрос няма отговор.",
      // "Applies to all questions within this dynamic panel. If you want to override this setting, define title alignment rules for individual questions. The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Top\" by default)."
      templateQuestionTitleLocation: "Отнася се за всички въпроси в рамките на този панел. Ако искате да заместите тази настройка, определете правила за подравняване на заглавията за отделни въпроси. Опцията \"Наследяване\" прилага настройката за ниво на страница (ако е зададена) или ниво проучване (\"Горе\" по подразбиране).",
      // "Sets consistent width for question titles when they are aligned to the left of their question boxes. Accepts CSS values (px, %, in, pt, etc.)."
      templateQuestionTitleWidth: "Задава постоянна ширина за заглавията на въпросите, когато са подравнени отляво от полетата за въпроси. Приема CSS стойности (px, %, in, pt и т.н.).",
      // "Sets the location of an error message in relation to a question with invalid input. Choose between: \"Top\" - an error text is placed at the top of the question box; \"Bottom\" - an error text is placed at the bottom of the question box. The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Top\" by default)."
      templateErrorLocation: "Задава местоположението на съобщение за грешка във връзка с въпрос с невалиден вход. Изберете между: \"Top\" - в горната част на полето за въпроси се поставя текст за грешка; \"Отдолу\" - в долната част на полето за въпроси се поставя текст за грешка. Опцията \"Наследяване\" прилага настройката за ниво на страница (ако е зададена) или ниво проучване (\"Горе\" по подразбиране).",
      // "Sets the location of an error message in relation to all questions within the panel. The \"Inherit\" option applies the page-level (if set) or survey-level setting."
      errorLocation: "Задава местоположението на съобщение за грешка във връзка с всички въпроси в панела. Опцията \"Наследяване\" прилага настройката за ниво на страница (ако е зададена) или ниво проучване.",
      // "Repositions the panel to the end of a selected page."
      page: "Премества панела в края на избрана страница.",
      // [Auto-translated] "Adds space or margin between the panel content and the left border of the panel box."
      indent: "Добавя разстояние или поле между съдържанието на панела и лявата граница на полето на панела.",
      // "Unselect to display the panel in one line with the previous question or panel. The setting doesn't apply if the panel is the first element in your form."
      startWithNewLine: "Премахнете отметката, за да покажете панела в един ред с предишния въпрос или панел. Настройката не се прилага, ако панелът е първият елемент във вашия формуляр.",
      // "Choose from: \"Expanded\" - the panel is displayed in full and can be collapsed; \"Collapsed\" - the panel displays only the title and description and can be expanded; \"Locked\" - the panel is displayed in full and cannot be collapsed."
      state: "Изберете от: \"Разширен\" - панелът се показва изцяло и може да бъде свит; \"Свит\" - панелът показва само заглавието и описанието и може да бъде разширен; \"Заключен\" - панелът се показва изцяло и не може да се свива.",
      // "Sets the width of the panel in proportion to other survey elements in the same line. Accepts CSS values (px, %, in, pt, etc.)."
      width: "Задава ширината на панела пропорционално на другите елементи на изследването в същия ред. Приема CSS стойности (px, %, in, pt и т.н.).",
      // "Type in a template for entry titles. Use {panelIndex} for the entry's general position and {visiblePanelIndex} for its order among visible entries. Insert these placeholders into the pattern to add automatic numbering."
      templateTitle: "Въведете шаблон за динамични заглавия на панели. Използвайте {panelIndex} за общата позиция на панела и {visiblePanelIndex} за реда му сред видимите панели. Вмъкнете тези контейнери в шаблона, за да добавите автоматично номериране.",
      // "Type in a template for tab titles. Use {panelIndex} for an entry's general position and {visiblePanelIndex} for its order among visible entries. Insert these placeholders into the pattern to add automatic numbering."
      templateTabTitle: "Въведете шаблон за заглавията на разделите. Използвайте {panelIndex} за общата позиция на панела и {visiblePanelIndex} за реда му между видимите панели. Вмъкнете тези контейнери в шаблона, за да добавите автоматично номериране.",
      // "A fallback text for tab titles that applies when the tab title pattern doesn't produce a meaningful value."
      tabTitlePlaceholder: "Резервен текст за заглавията на разделите, който се прилага, когато шаблонът за заглавие на раздела не създава смислена стойност.",
      // "This setting allows you to control the visibility of individual entries within the dynamic panel. Use the `{panel}` placeholder to reference the current entry in your expression."
      templateVisibleIf: "Тази настройка ви позволява да контролирате видимостта на отделните панели в динамичния панел. Използвайте контейнера \"{panel}\", за да препращате към текущия панел във вашия израз.",
      // "This setting is automatically inherited by all questions within this dynamic panel. If you want to override this setting, define title alignment rules for individual questions. The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Top\" by default)."
      titleLocation: "Тази настройка се наследява автоматично от всички въпроси в този панел. Ако искате да заместите тази настройка, определете правила за подравняване на заглавията за отделни въпроси. Опцията \"Наследяване\" прилага настройката за ниво на страница (ако е зададена) или ниво проучване (\"Горе\" по подразбиране).",
      // "The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Under the panel title\" by default)."
      descriptionLocation: "Опцията \"Наследяване\" прилага настройката за ниво на страница (ако е зададена) или ниво проучване (\"Под заглавието на панела\" по подразбиране).",
      // "Defines the position of a newly added entry. By default, new entries are added to the end. Select \"Next\" to insert a new entry after the current one."
      newPanelPosition: "Определя позицията на новодобавен панел. По подразбиране в края се добавят нови панели. Изберете \"Напред\", за да вмъкнете нов панел след текущия.",
      // [Auto-translated] "Duplicates answers from the last entry and assigns them to the next added entry."
      copyDefaultValueFromLastEntry: "Дублира отговорите от последния запис и ги присвоява на следващия добавен запис.",
      // "Reference a question name to require a user to provide a unique response for this question in each entry."
      keyName: "Препратка към име на въпрос, за да се изисква от потребителя да предостави уникален отговор на този въпрос във всеки панел.",
      // [Auto-translated] "Triggers a confirmation prompt before removing an entry."
      confirmDelete: "Задейства подкана за потвърждение, преди да премахне запис."
    },
    matrixdynamic: {
      // [Auto-translated] "Triggers a confirmation prompt before removing a row."
      confirmDelete: "Задейства подкана за потвърждение, преди да премахнете ред.",
      // [Auto-translated] "Automatically expands the detail section when a new row is added to the matrix."
      detailPanelShowOnAdding: "Автоматично разширява раздела с подробности, когато се добави нов ред към матрицата."
    },
    // "Duplicates answers from the last row and assigns them to the next added dynamic row."
    copyDefaultValueFromLastEntry: "Дублира отговорите от последния ред и ги присвоява на следващия добавен динамичен ред.",
    // [Auto-translated] "This setting allows you to assign a default answer value based on an expression. The expression can include basic calculations - `{q1_id} + {q2_id}`, Boolean expressions, such as `{age} > 60`, and functions: `iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, etc. The value determined by this expression serves as the initial default value that can be overridden by a respondent's manual input."
    defaultValueExpression: "Тази настройка ви позволява да присвоите стойност за отговор по подразбиране на базата на израз. Изразът може да включва основни изчисления - '{q1_id} + {q2_id}', булеви изрази, като '{age} > 60', и функции: 'iif()', 'today()', 'age()', 'min()', 'max()', 'avg()' и др. Стойността, определена от този израз, служи като начална стойност по подразбиране, която може да бъде заместена от ръчното въвеждане на респондента.",
    // "Use the magic wand icon to set a conditional rule that determines when a respondent's input is reset to the value based on the \"Default value expression\" or \"Set value expression\" or to the \"Default answer\" value (if either is set)."
    resetValueIf: "Използвайте иконата на магическа пръчка, за да зададете условно правило, което определя кога входът на респондента се връща към стойността въз основа на \"Израз за стойност по подразбиране\" или \"Задаване на израз за стойност\" или към стойността \"Отговор по подразбиране\" (ако е зададена такава).",
    // "Use the magic wand icon to set a conditional rule that determines when to run the \"Set value expression\" and dynamically assign the resulting value as a response."
    setValueIf: "Използвайте иконата на магическа пръчка, за да зададете условно правило, което определя кога да изпълните \"Задаване на израз за стойност\" и динамично да зададете получената стойност като отговор.",
    // "Specify an expression that defines the value to be set when the conditions in the \"Set value if\" rule are met. The expression can include basic calculations - `{q1_id} + {q2_id}`, Boolean expressions, such as `{age} > 60`, and functions: `iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, etc. The value determined by this expression can be overridden by a respondent's manual input."
    setValueExpression: "Задайте израз, който определя стойността, която трябва да бъде зададена, когато са изпълнени условията в правилото \"Задаване на стойност ако\". Изразът може да включва основни изчисления - '{q1_id} + {q2_id}', булеви изрази, като '{age} > 60', и функции: 'iif()', 'today()', 'age()', 'min()', 'max()', 'avg()' и др. Стойността, определена от този израз, може да бъде заместена от ръчното въвеждане на респондента.",
    // "Survey Creator allows you to manually adjust the inline widths of form elements to control the layout. If this doesn't produce the desired outcome, you can enable the grid layout, which structures form elements using a column-based system. To configure layout columns, select a page or panel and use the \"Question Settings\" → \"Grid columns\" table. To adjust how many columns a question spans, select it and set the desired value in the \"Layout\" → \"Column span\" field."
    gridLayoutEnabled: "Survey Creator ви позволява ръчно да регулирате вградените ширини на елементите на формуляра, за да контролирате оформлението. Ако това не доведе до желания резултат, можете да активирате оформлението на мрежата, което структурира елементите на формата с помощта на система, базирана на колони. За да конфигурирате колони за оформление, изберете страница или панел и използвайте таблицата \"Настройки на въпроса\" → \"Колони на мрежата\". За да регулирате колко колони обхваща даден въпрос, изберете го и задайте желаната стойност в полето \"Оформление\" → \"Обхват на колоната\".",
    question: {
      // "A question ID that is not visible to respondents."
      name: "Идентификационен номер на въпрос, който не е видим за респондентите.",
      // "Type a question subtitle."
      description: "Въведете подзаглавие на въпрос.",
      // "Use the magic wand icon to set a conditional rule that determines question visibility."
      visibleIf: "Използвайте иконата на вълшебната пръчица, за да зададете условно правило, което определя видимостта на въпросите.",
      // [Auto-translated] "Use the magic wand icon to set a conditional rule that disables the read-only mode for the question."
      enableIf: "Използвайте иконата на магическа пръчка, за да зададете условно правило, което забранява режима само за четене за въпроса.",
      // "Use the magic wand icon to set a conditional rule that prevents survey advancing or submission unless the question received an answer."
      requiredIf: "Използвайте иконата на магическа пръчка, за да зададете условно правило, което предотвратява напредването или подаването на проучването, освен ако въпросът не получи отговор.",
      // [Auto-translated] "Unselect to display the question in one line with the previous question or panel. The setting doesn't apply if the question is the first element in your form."
      startWithNewLine: "Премахнете отметката, за да покажете въпроса в един ред с предишния въпрос или панел. Настройката не се прилага, ако въпросът е първият елемент във вашия формуляр.",
      // "Repositions the question to the end of a selected page."
      page: "Премества въпроса в края на избрана страница.",
      // "Choose from: \"Expanded\" - the question box is displayed in full and can be collapsed; \"Collapsed\" - the question box displays only the title and description and can be expanded; \"Locked\" - the question box is displayed in full and cannot be collapsed."
      state: "Изберете от: \"Разширен\" - полето за въпроси се показва изцяло и може да бъде свито; \"Свита\" - полето за въпроси показва само заглавието и описанието и може да бъде разширено; \"Заключена\" - полето за въпроси се показва изцяло и не може да бъде свито.",
      // "Overrides title alignment rules defined on a panel, page, or survey level. When set to \"Hidden\", it also hides question descriptions. The \"Inherit\" option applies any higher-level settings (if set) or survey-level setting (\"Top\" by default)."
      titleLocation: "Отменя правилата за подравняване на заглавията, дефинирани на ниво панел, страница или проучване. Опцията \"Наследяване\" прилага всички настройки от по-високо ниво (ако са зададени) или настройка на ниво проучване (\"Top\" по подразбиране).",
      // "The \"Inherit\" option applies the survey-level setting (\"Under the question title\" by default)."
      descriptionLocation: "Опцията \"Наследяване\" прилага настройката на ниво проучване (\"Под заглавието на въпроса\" по подразбиране).",
      // "Sets the location of an error message in relation to the question with invalid input. Choose between: \"Top\" - an error text is placed at the top of the question box; \"Bottom\" - an error text is placed at the bottom of the question box. The \"Inherit\" option applies the survey-level setting (\"Top\" by default)."
      errorLocation: "Задава местоположението на съобщение за грешка във връзка с въпроса с невалиден вход. Изберете между: \"Top\" - в горната част на полето за въпроси се поставя текст за грешка; \"Отдолу\" - в долната част на полето за въпроси се поставя текст за грешка. Опцията \"Наследяване\" прилага настройката за ниво проучване (\"Top\" по подразбиране).",
      // "Adds space or margin between the question content and the left border of the question box."
      indent: "Добавя интервал или поле между съдържанието на въпроса и лявата граница на полето за въпроси.",
      // "Sets the width of the question in proportion to other survey elements in the same line. Accepts CSS values (px, %, in, pt, etc.)."
      width: "Задава ширината на въпроса пропорционално на другите елементи на изследването в същия ред. Приема CSS стойности (px, %, in, pt и т.н.).",
      // "Choose from: \"On lost focus\" - the value is updated when the input field loses focus; \"While typing\" - the value is updated in real-time, as users are typing. The \"Inherit\" option applies the survey-level setting (\"On lost focus\" by default)."
      textUpdateMode: "Изберете от: \"На загубен фокус\" - стойността се актуализира, когато входното поле загуби фокус; \"Докато пишете\" - стойността се актуализира в реално време, докато потребителите пишат. Опцията \"Наследяване\" прилага настройката на ниво проучване (\"На загубен фокус\" по подразбиране).",
      // [Auto-translated] "You can use any web service as a data source for multiple-choice questions. To populate choice values, enter the URL of the service providing the data."
      url: "Можете да използвате всяка уеб услуга като източник на данни за въпроси с множествен избор. За да попълните стойности за избор, въведете URL адреса на услугата, предоставяща данните.",
      // [Auto-translated] "A comparison operation used to filter the drop-down list."
      searchMode: "Операция за сравнение, използвана за филтриране на падащия списък.",
      // [Auto-translated] "Long texts in choice options will automatically generate line breaks to fit within the drop-down menu. Unselect if you want the texts to clip."
      textWrapEnabled: "Дългите текстове в опциите за избор автоматично ще генерират нови редове, за да се поберат в падащото меню. Премахнете отметката, ако искате текстовете да бъдат изрязани.",
      // [Auto-translated] "Specifies how many columns this question spans within the grid layout."
      effectiveColSpan: "Указва колко колони обхваща този въпрос в оформлението на мрежата."
    },
    surveyvalidator: {
      // "Use the magic wand icon to define when the question's value is considered valid."
      expression: "Използвайте иконата на магическа пръчица, за да определите кога стойността на въпроса се счита за валидна.",
      // [Auto-translated] "Errors block progress until resolved. Warnings highlight issues but allow to continue. Informational notes offer additional context or neutral guidance. When using warnings or informational notes, we recommend enabling immediate validation: \"Survey\" → \"Validation\" → \"Run validation\" → \"After an answer has changed\"."
      notificationType: "Грешките блокират напредъка, докато не бъде разрешен. Предупрежденията подчертават проблемите, но позволяват да продължат. Информационните бележки предлагат допълнителен контекст или неутрални насоки. Когато използвате предупреждения или информационни бележки, препоръчваме да активирате незабавно валидиране: \"Проучване\" → \"Валидиране\" → \"Стартиране на валидиране\" → \"След промяна на отговора\"."
    },
    signaturepad: {
      // "Sets the width of the displayed signature area and the resulting image."
      signatureWidth: "Задава ширината на показаната област за подпис и полученото изображение.",
      // "Sets the height of the displayed signature area and the resulting image."
      signatureHeight: "Задава височината на показаната област за подпис и полученото изображение.",
      // "Select if you want the signature area to fill all available space within the question box while maintaining the default 3:2 aspect ratio. When custom width and height values are set, the setting will keep the aspect ratio of these dimensions."
      signatureAutoScaleEnabled: "Изберете дали искате областта за подпис да запълни цялото налично пространство в полето за въпроси, като същевременно запазите съотношението по подразбиране 3:2. Когато са зададени стойности за ширина и височина по избор, настройката ще запази пропорциите на тези размери."
    },
    file: {
      // "Specifies the display height of uploaded images in the preview and the actual height of images taken with the camera. In single file upload mode, the display height is limited by the preview area; in multiple file upload mode, it is limited by the thumbnail area."
      imageHeight: "Указва височината на показване на качените изображения във визуализацията и действителната височина на изображенията, направени с фотоапарата. В режим на качване на един файл височината на дисплея е ограничена от областта за визуализация; В режим на качване на множество файлове той е ограничен от областта на миниатюрите.",
      // "Specifies the display width of uploaded images in the preview and the actual width of images taken with the camera. In single file upload mode, the display width is limited by the preview area; in multiple file upload mode, it is limited by the thumbnail area."
      imageWidth: "Указва ширината на показване на качените изображения във визуализацията и действителната ширина на изображенията, направени с фотоапарата. В режим на качване на един файл ширината на дисплея е ограничена от областта за визуализация; В режим на качване на множество файлове той е ограничен от областта на миниатюрите.",
      // [Auto-translated] "Displays thumbnail previews for uploaded files when possible. Unselect if you want to show file icons instead."
      allowImagesPreview: "Показва визуализации на миниатюри за качени файлове, когато е възможно. Премахнете отметката, ако вместо това искате да показвате икони на файлове."
    },
    image: {
      // "The \"Auto\" option automatically determines the suitable mode for display - Image, Video, or YouTube - based on the source URL provided."
      contentMode: "Опцията \"Auto\" автоматично определя подходящия режим за показване - Image, Video или YouTube - въз основа на предоставения URL адрес на източника."
    },
    imagepicker: {
      // [Auto-translated] "Overrides the minimum and maximum height values."
      imageHeight: "Отменя минималните и максималните стойности на височината.",
      // [Auto-translated] "Overrides the minimum and maximum width values."
      imageWidth: "Отменя минималните и максималните стойности на ширината.",
      // [Auto-translated] "\"Value\" serves as an item ID used in conditional rules; \"Text\" is displayed to respondents."
      choices: "\"Стойност\" служи като идентификатор на елемента, използван в условни правила; \"Текст\" се показва на респондентите.",
      // "Choose between \"Image\" and \"Video\" to set the content mode of the media selector. If \"Image\" is selected, ensure that all options provided are image files in the following formats: JPEG, GIF, PNG, APNG, SVG, BMP, ICO. Similarly, if \"Video\" is selected, ensure that all options are direct links to video files in the following formats: MP4, MOV, WMV, FLV, AVI, MKV. Please note that YouTube links are not supported for video options."
      contentMode: "Изберете между \"Изображение\" и \"Видео\", за да зададете режима на съдържание на селектора на мултимедия. Ако е избрано \"Изображение\", уверете се, че всички предоставени опции са файлове с изображения в следните формати: JPEG, GIF, PNG, APNG, SVG, BMP, ICO. По същия начин, ако е избрано \"Видео\", уверете се, че всички опции са директни връзки към видео файлове в следните формати: MP4, MOV, WMV, FLV, AVI, MKV. Моля, имайте предвид, че връзките в YouTube не се поддържат за опции за видео."
    },
    text: {
      // [Auto-translated] "This setting only resizes the input field and doesn't affect the width of the question box. To limit the accepted input length, go to \"Validation\" → \"Maximum character limit\"."
      size: "Тази настройка само преоразмерява полето за въвеждане и не засяга ширината на полето за въпроси. За да ограничите приетата дължина на въвеждане, отидете на \"Валидиране\" → \"Максимално ограничение на знаците\"."
    },
    comment: {
      // [Auto-translated] "Sets the number of displayed lines in the input field. If the input takes up more lines, the scroll bar will appear."
      rows: "Задава броя на показаните редове в полето за въвеждане. Ако входът заема повече редове, ще се появи лентата за превъртане."
    },
    // survey templates
    survey: {
      // "Select if you want to prevent respondents from filling out your survey."
      readOnly: "Изберете дали искате да попречите на респондентите да попълват анкетата ви.",
      // "Sets the location of the progress bar. The \"Auto\" value displays the progress bar above or below the survey header."
      progressBarLocation: "Задава местоположението на лентата за напредъка. Стойността \"Автоматично\" показва лентата за напредъка над или под заглавката на проучването."
    },
    matrixdropdowncolumn: {
      // "A column ID that is not visible to respondents."
      name: "ИД на колона, която не се вижда от респондентите.",
      // "When enabled for a column, a respondent is required to provide a unique response for each question within this column."
      isUnique: "Когато е разрешено за колона, респондентът трябва да предостави уникален отговор за всеки въпрос в тази колона.",
      // "Sets the number of displayed lines in the input field. If the input takes up more lines, the scroll bar will appear."
      rows: "Задава броя на показваните редове в полето за въвеждане. Ако входът заема повече редове, ще се появи плъзгачът.",
      // "Use the magic wand icon to set a conditional rule that determines column visibility."
      visibleIf: "Използвайте иконата на магическа пръчка, за да зададете условно правило, което определя видимостта на колоната.",
      // [Auto-translated] "Use the magic wand icon to set a conditional rule that disables the read-only mode for the column."
      enableIf: "Използвайте иконата на магическа пръчка, за да зададете условно правило, което забранява режима само за четене за колоната.",
      // "Use the magic wand icon to set a conditional rule that prevents survey submission unless at least one nested question has an answer."
      requiredIf: "Използвайте иконата на магическа пръчка, за да зададете условно правило, което не позволява подаване на проучване, освен ако поне един вложен въпрос няма отговор.",
      // "When selected, creates an individual column for each choice option."
      showInMultipleColumns: "Когато е избрано, създава отделна колона за всяка опция за избор.",
      // [Auto-translated] "Arranges choice options in a multi-column layout. When set to 0, the options are displayed in a single line. When set to -1, the actual value is inherited from the \"Nested column count\" property of the parent matrix."
      colCount: "Подрежда опциите за избор в оформление с няколко колони. Когато е зададено на 0, опциите се показват на един ред. Когато е зададена на -1, действителната стойност се наследява от свойството \"Брой вложени колони\" на родителската матрица."
    },
    slider: {
      // "The lowest number that users can select."
      min: "Най-ниското число, което потребителите могат да изберат.",
      // "The highest number that users can select."
      max: "Най-големият брой, който потребителите могат да изберат.",
      // "The interval between selectable scale values. For example, a step of 5 will allow users to select 0, 5, 10, etc."
      step: "Интервалът между избираемите стойности на мащаба. Например, стъпка от 5 ще позволи на потребителите да изберат 0, 5, 10 и т.н.",
      // "The minimum distance between the slider thumbs a user can set."
      minRangeLength: "Минималното разстояние между палците на плъзгача, които потребителят може да зададе.",
      // "The maximum distance between the slider thumbs a user can set."
      maxRangeLength: "Максималното разстояние между палците на плъзгача, което потребителят може да зададе.",
      // "Specifies how many scale labels to generate. A value of -1 means the number is calculated automatically based on the Min value and Max value."
      labelCount: "Указва колко етикета на мащаба да генерирате. Стойност -1 означава, че числото се изчислява автоматично въз основа на минималната стойност и максималната стойност.",
      // "Use `{0}` as a placeholder for the actual value."
      labelFormat: "Използвайте \"{0}\" като контейнер за действителната стойност.",
      // "Allows you to define custom labels at specific values and optionally assign corresponding text to them (e.g., 0 = \"Poor\", 100 = \"Excellent\")."
      customLabels: "Позволява ви да дефинирате персонализирани етикети с конкретни стойности и по желание да им присвоите съответстващ текст (напр. 0 = \"Лошо\", 100 = \"Отлично\").",
      // "Use `{0}` as a placeholder for the actual value."
      tooltipFormat: "Използвайте \"{0}\" като контейнер за действителната стойност.",
      // "Allows users to move one thumb past the other."
      allowSwap: "Позволява на потребителите да движат единия палец покрай другия.",
      // [Auto-translated] "Displays a button that clears the selected slider value and sets it to undefined."
      allowClear: "Показва бутон, кой��о изчиства избраната стойност на плъзгача и я задава на undefined.",
      // "Defines the slider's minimum value dynamically using an expression. Supports basic calculations (e.g, `{q1_id} + {q2_id}`), Boolean logic (e.g., `{age} > 60`), and functions like `iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, and more."
      minValueExpression: "Определя минималната стойност на плъзгача динамично с помощта на израз. Поддържа основни изчисления (напр. '{q1_id} + {q2_id}'), булева логика (напр. '{age} > 60') и функции като 'iif()', 'today()', 'age()', 'min()', 'max()', 'avg()' и др.",
      // "Defines the slider's maximum value dynamically using an expression. Supports basic calculations (e.g, `{q1_id} + {q2_id}`), Boolean logic (e.g., `{age} > 60`), and functions like `iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, and more."
      maxValueExpression: "Определя максималната стойност на плъзгача динамично с помощта на израз. Поддържа основни изчисления (напр. '{q1_id} + {q2_id}'), булева логика (напр. '{age} > 60') и функции като 'iif()', 'today()', 'age()', 'min()', 'max()', 'avg()' и др."
    },
    // [Auto-translated] "Makes this choice exclusive. When selected by a user, it will automatically deselect all other options in the question."
    isExclusive: "Прави този избор изключителен. Когато бъде избран от потребител, той автоматично ще отмени избора на всички други опции във въпроса.",
    matrixcolumn: {
      // [Auto-translated] "Makes checkboxes in this column exclusive. When selected by a user, they will automatically deselect all other checkboxes in the same row."
      isExclusive: "Прави квадратчетата за отметка в тази колона изключителни. Когато бъде избран от потребител, той автоматично ще премахне отметката от всички останали квадратчета в същия ред."
    },
    // [Auto-translated] "Select if uppercase and lowercase letters in the regular expression must be treated as equivalent."
    caseInsensitive: "Изберете дали главните и малките букви в регулярния израз трябва да се третират като еквивалентни.",
    // "Choose from: \"Static\" - sets a fixed width; \"Responsive\" - makes the survey occupy the full width of the screen; \"Auto\" - applies either of the two depending on the question types used."
    widthMode: "Изберете от: \"Статичен\" - задава фиксирана ширина; \"Responsive\" - прави проучването да заема цялата ширина на екрана; \"Auto\" - прилага се всеки от двата в зависимост от използваните типове въпроси.",
    // "Assign a unique cookie value for your survey. The cookie will be set in a respondent's browser upon survey completion to prevent repetitive survey submissions."
    cookieName: "Бисквитките не позволяват на потребителите да попълнят една и съща анкета два пъти.",
    // [Auto-translated] "Paste an image link (no size limits) or click the folder icon to browse a file from your computer (up to 64KB)."
    logo: "Поставете връзка към изображение (без ограничения за размера) или щракнете върху иконата на папката, за да прегледате файл от компютъра си (до 64 КБ).",
    // [Auto-translated] "Sets a logo width in CSS units (px, %, in, pt, etc.)."
    logoWidth: "Задава ширина на логото в CSS единици (px, %, in, pt и т.н.).",
    // [Auto-translated] "Sets a logo height in CSS units (px, %, in, pt, etc.)."
    logoHeight: "Задава височина на логото в CSS единици (px, %, in, pt и т.н.).",
    // "Choose from: \"None\" - image maintains its original size; \"Contain\" - image is resized to fit while maintaining its aspect ratio; \"Cover\" - image fills the entire box while maintaining its aspect ratio; \"Fill\" - image is stretched to fill the box without maintaining its aspect ratio."
    logoFit: "Изберете от: \"Няма\" - изображението запазва оригиналния си размер; \"Съдържа\" - изображението се преоразмерява, за да се побере, като същевременно се запазва съотношението на страните; \"Cover\" - изображението запълва цялата кутия, като същевременно запазва съотношението на страните; \"Fill\" - изображението се разтяга, за да запълни кутията, без да се поддържа съотношението на страните.",
    // [Auto-translated] "Select if you want the survey to auto-advance to the next page once a respondent has answered all questions on the current page. This feature won't apply if the last question on the page is open-ended or allows multiple answers."
    autoAdvanceEnabled: "Изберете дали искате проучването автоматично да премине към следващата страница, след като респондентът отговори на всички въпроси на текущата страница. Тази функция няма да се прилага, ако последният въпрос на страницата е отворен или позволява множество отговори.",
    // [Auto-translated] "Select if you want the survey to complete automatically after a respondent answers all questions."
    autoAdvanceAllowComplete: "Изберете дали искате проучването да завърши автоматично, след като респондентът отговори на всички въпроси.",
    // [Auto-translated] "Sets the visibility of navigation buttons on a page."
    showNavigationButtons: "Задава видимостта на бутоните за навигация на страницата.",
    // [Auto-translated] "Sets the location of navigation buttons on a page."
    navigationButtonsLocation: "Задава местоположението на бутоните за навигация на страница.",
    // [Auto-translated] "Enable the preview page with all or answered questions only."
    showPreviewBeforeComplete: "Разрешете страницата за визуализация само с всички въпроси или само с отговор.",
    // "Applies to all questions within the survey. This setting can be overridden by title alignment rules at lower levels: panel, page, or question. A lower-level setting will override those on a higher level."
    questionTitleLocation: "Отнася се за всички въпроси в рамките на проучването. Тази настройка може да бъде заместена от правилата за подравняване на заглавията на по-ниските нива: панел, страница или въпрос. Настройката от по-ниско ниво ще замени тези на по-високо ниво.",
    // [Auto-translated] "A symbol or a sequence of symbols indicating that an answer is required."
    requiredMark: "Символ или поредица от символи, показващи, че е необходим отговор.",
    // [Auto-translated] "Enter a number or letter with which you want to start numbering."
    questionStartIndex: "Въведете число или буква, с които искате да започнете номерирането.",
    // "Sets the location of an error message in relation to the question with invalid input. Choose between: \"Top\" - an error text is placed at the top of the question box; \"Bottom\" - an error text is placed at the bottom of the question box."
    questionErrorLocation: "Задава местоположението на съобщение за грешка във връзка с въпроса с невалиден вход. Изберете между: \"Top\" - в горната част на полето за въпроси се поставя текст за грешка; \"Отдолу\" - в долната част на полето за въпроси се поставя текст за грешка.",
    // [Auto-translated] "Select if you want the first input field on each page ready for text entry."
    autoFocusFirstQuestion: "Изберете дали искате първото поле за въвеждане на всяка страница да е готово за въвеждане на текст.",
    // "Keeps the original order of questions or randomizes them. The effect of this setting is only visible in the Preview tab."
    questionOrder: "Запазва първоначалния ред на въпросите или ги рандомизира. Ефектът от тази настройка се вижда само в раздела Визуализация .",
    // [Auto-translated] "For text entry questions only."
    maxTextLength: "Само за въпроси за въвеждане на текст.",
    // [Auto-translated] "For question comments only."
    maxCommentLength: "Само за въпросителни коментари.",
    // [Auto-translated] "Sets the number of displayed lines in text areas for question comments. If the input takes up more lines, the scroll bar appears."
    commentAreaRows: "Задава броя на показваните редове в текстовите области за коментари на въпроси. Ако входът заема повече редове, се появява лентата за превъртане.",
    // [Auto-translated] "Select if you want question comments and Long Text questions to auto-grow in height based on the entered text length."
    autoGrowComment: "Изберете дали искате коментарите за въпроси и въпросите с дълъг текст автоматично да нарастват на височина въз основа на въведената дължина на текста.",
    // [Auto-translated] "For question comments and Long Text questions only."
    allowResizeComment: "Само за коментари с въпроси и въпроси с дълъг текст.",
    // [Auto-translated] "Custom variables serve as intermediate or auxiliary variables used in form calculations. They take respondent inputs as source values. Each custom variable has a unique name and an expression it's based on."
    calculatedValues: "Персонализираните променливи служат като междинни или спомагателни променливи, използвани в изчисленията на формуляра. Те приемат входните данни на респондентите като изходни стойности. Всяка персонализирана променлива има уникално име и израз, на който се базира.",
    // [Auto-translated] "Select if you wish the calculated value of the expression to be saved along with survey results."
    includeIntoResult: "Изберете дали искате изчислената стойност на израза да бъде записана заедно с резултатите от проучването.",
    // "A trigger is an event or condition that is based on an expression. Once the expression is evaluated to \"true\", a trigger sets off an action. Such an action can optionally have a target question it affects."
    triggers: "Превключвателят е събитие или условие, което се основава на израз. След като изразът е оценен като \"true\", спусъкът задейства действие. Такова действие може по избор да има целеви въпрос, който засяга.",
    // [Auto-translated] "Choose whether or not to clear values for questions hidden by conditional logic and when to do it."
    clearInvisibleValues: "Изберете дали да изчистите стойностите за въпроси, скрити от условната логика, и кога да го направите.",
    // "Choose from: \"On lost focus\" - the value is updated when the input field loses focus; \"While typing\" - the value is updated in real-time, as users are typing."
    textUpdateMode: "Изберете от: \"На загубен фокус\" - стойността се актуализира, когато входното поле загуби фокус; \"Докато пишете\" - стойността се актуализира в реално време, докато потребителите пишат.",
    // [Auto-translated] "The left value serves as a column ID used in conditional rules, the right value is displayed to respondents."
    columns: "Лявата стойност служи като ИД на колона, използвана в условни правила, дясната стойност се показва на респондентите.",
    // "The left value serves as a row ID used in conditional rules, the right value is displayed to respondents."
    rows: "Лявата стойност служи като ИД на ред, използван в условни правила, дясната стойност се показва на респондентите.",
    // [Auto-translated] "Accepts CSS values (px, %, in, pt, etc.)."
    columnMinWidth: "Приема CSS стойности (px, %, in, pt и т.н.).",
    // [Auto-translated] "Accepts CSS values (px, %, in, pt, etc.)."
    rowTitleWidth: "Приема CSS стойности (px, %, in, pt и т.н.).",
    // "Visible only if at least one column displays total values set with \"Aggregation method\" or \"Total value expression\"."
    totalText: "Вижда се, само когато поне една колона има общ тип или общ израз.",
    // "Sets the location of an error message in relation to a cell with invalid input. The \"Inherit\" option applies the setting from the \"Error message alignment\" property."
    cellErrorLocation: "Задава местоположението на съобщение за грешка по отношение на клетка с невалиден вход. Опцията \"Наследяване\" прилага настройката от свойството \"Подравняване на съобщение за грешка\".",
    // "Sets the location of error messages for questions nested in detail sections. The \"Inherit\" option applies the setting from the \"Error message alignment\" property."
    detailErrorLocation: "Задава местоположението на съобщенията за грешки за въпроси, вложени в подробни раздели. Опцията \"Наследяване\" прилага настройката от свойството \"Подравняване на съобщенията за грешки\".",
    // "When the \"Prevent duplicate responses\" property is enabled, a respondent attempting to submit a duplicate entry will receive the following error message."
    keyDuplicationError: "Когато свойството \"Предотвратяване на дублиращи се отговори\" е разрешено, респондентът, който се опитва да подаде дублиран запис, ще получи следното съобщение за грешка.",
    // [Auto-translated] "Allows you to calculate total values based on an expression. The expression can include basic calculations (`{q1_id} + {q2_id}`), Boolean expressions (`{age} > 60`) and functions ('iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, etc.)."
    totalExpression: "Позволява ви да изчислявате общи стойности на базата на израз. Изразът може да включва основни изчисления ('{q1_id} + {q2_id}'), булеви изрази ('{age} > 60') и функции ('iif()', 'today()', 'age()', 'min()', 'max()', 'avg()' и т.н.).",
    // "Reference a column ID to require a user to provide a unique response for each question within the specified column."
    keyName: "Ако указаната колона съдържа идентични стойности, анкетата отговаря с \"Неуникална стойност на ключ\" грешка.",
    // "Type a subtitle."
    description: "Въведете субтитри.",
    // [Auto-translated] "Choose a language to begin creating your survey. To add a translation, switch to a new language and translate the original text here or in the Translations tab."
    locale: "Изберете език, за да започнете да създавате проучването си. За да добавите превод, превключете на нов език и преведете оригиналния текст тук или в раздела Преводи.",
    // "Sets the location of a detail section in relation to a row. Choose from: \"None\" - no detail section is added; \"Under the row\" - a detail section is placed under each row of the matrix; \"Under the row, display one detail section only\" - a detail section is displayed under a single row only, the remaining sections are collapsed."
    detailPanelMode: "Задава местоположението на раздел с подробни данни по отношение на ред. Изберете от: \"Няма\" - не се добавя разширение; \"Под реда\" - под всеки ред на матрицата се поставя разширение на реда; \"Под реда покажете само разширение на един ред\" - разширение се показва само под един ред, останалите разширения на реда са свити.",
    // "Choose from: \"None\" - image maintains its original size; \"Contain\" - image is resized to fit while maintaining its aspect ratio; \"Cover\" - image fills the entire box while maintaining its aspect ratio; \"Fill\" - image is stretched to fill the box without maintaining its aspect ratio."
    imageFit: "Изберете от: \"Няма\" - изображението запазва оригиналния си размер; \"Съдържа\" - изображението се преоразмерява, за да се побере, като същевременно се запазва съотношението на страните; \"Cover\" - изображението запълва цялата кутия, като същевременно запазва съотношението на страните; \"Fill\" - изображението се разтяга, за да запълни кутията, без да се поддържа съотношението на страните.",
    // "The \"Inherit\" option applies a survey-level setting (\"Disabled\" by default)."
    autoGrow: "Постепенно увеличава височината на входното поле при въвеждане на данни. Замества настройката \"Височина на входното поле (в редове)\".",
    // [Auto-translated] "The \"Inherit\" option applies a survey-level setting (\"Enabled\" by default)."
    allowResize: "Опцията \"Наследяване\" прилага настройка на ниво проучване (\"Активирано\" по подразбиране).",
    // "A time interval in seconds after which the survey auto-advances to the \"Thank You\" page. When set to 0, counts the time spent on the survey."
    timeLimit: "Интервал от време в секунди, след което проучването автоматично преминава към страницата \"Благодаря\".",
    // [Auto-translated] "A time interval in seconds after which the survey auto-advances to the next page. Hides the \"Previous\" navigation button. When set to 0, counts the time spent on the current page."
    timeLimitPerPage: "Интервал от време в секунди, след който проучването автоматично преминава към следващата страница. Скрива бутона за навигация \"Предишен\". Когато е зададено на 0, отчита времето, прекарано на текущата страница.",
    // [Auto-translated] "Enable this option to trigger validation when a user focuses on an empty input field and then leaves it without making any changes."
    validateVisitedEmptyFields: "Активирайте тази опция, за да задействате проверка, когато потребителят се фокусира върху празно поле за въвеждане и след това го напусне, без да прави никакви промени.",
    page: {
      // "A page ID that is not visible to respondents."
      name: "ИД на страница, който не се вижда от респондентите.",
      // "Type a page subtitle."
      description: "Въведете подзаглавие на страницата.",
      // "A caption displayed on a navigation button in the progress bar or table of contents (TOC). If you leave this field empty, the navigation button will use the page title or page name. To enable the progress bar or TOC, go to \"Survey\" → \"Navigation\"."
      navigationTitle: "Надпис, показан на бутон за навигация в лентата за напредъка или съдържанието (TOC). Ако оставите това поле празно, бутонът за навигация ще използва заглавието на страницата или името на страницата. За да активирате лентата за напредъка или съдържанието, отидете на \"Проучване\" → \"Навигация\".",
      // "A time interval in seconds after which the survey auto-advances to the next page. Hides the \"Previous\" navigation button. When set to 0, counts the time spent on the current page."
      timeLimit: "Интервал от време в секунди, след който проучването автоматично преминава към следващата страница.",
      // "Use the magic wand icon to set a conditional rule that determines page visibility."
      visibleIf: "Използвайте иконата на магическа пръчка, за да зададете условно правило, което определя видимостта на страницата.",
      // [Auto-translated] "Use the magic wand icon to set a conditional rule that disables the read-only mode for the page."
      enableIf: "Използвайте иконата на магическа пръчка, за да зададете условно правило, което забранява режима само за четене за страницата.",
      // "Use the magic wand icon to set a conditional rule that prevents survey submission unless at least one nested question has an answer."
      requiredIf: "Използвайте иконата на магическа пръчка, за да зададете условно правило, което не позволява подаване на проучване, освен ако поне един вложен въпрос няма отговор.",
      // "Applies to all questions within this page. When set to \"Hidden\", it also hides question descriptions. If you want to override this setting, define title alignment rules for individual questions or panels. The \"Inherit\" option applies the survey-level setting (\"Top\" by default)."
      questionTitleLocation: "Отнася се за всички въпроси в тази страница. Ако искате да замените тази настройка, определете правила за подравняване на заглавията за отделни въпроси или панели. Опцията \"Наследяване\" прилага настройката за ниво проучване (\"Top\" по подразбиране).",
      // [Auto-translated] "Sets consistent width for question titles when they are aligned to the left of their question boxes. Accepts CSS values (px, %, in, pt, etc.)."
      questionTitleWidth: "Задава еднаква ширина за заглавията на въпросите, когато те са подравнени отляво на техните полета за въпроси. Приема CSS стойности (px, %, in, pt и т.н.).",
      // "Sets the location of an error message in relation to the question with invalid input. Choose between: \"Top\" - an error text is placed at the top of the question box; \"Bottom\" - an error text is placed at the bottom of the question box. The \"Inherit\" option applies the survey-level setting (\"Top\" by default)."
      questionErrorLocation: "Задава местоположението на съобщение за грешка във връзка с въпроса с невалиден вход. Изберете между: \"Top\" - в горната част на полето за въпроси се поставя текст за грешка; \"Отдолу\" - в долната част на полето за въпроси се поставя текст за грешка. Опцията \"Наследяване\" прилага настройката за ниво проучване (\"Top\" по подразбиране).",
      // "Keeps the original order of questions or randomizes them. The \"Inherit\" option applies the survey-level setting (\"Original\" by default). The effect of this setting is only visible in the Preview tab."
      questionOrder: "Запазва първоначалния ред на въпросите или ги рандомизира. Опцията \"Наследяване\" прилага настройката на ниво проучване (\"Оригинал\" по подразбиране). Ефектът от тази настройка се вижда само в раздела Визуализация .",
      // "Sets the visibility of navigation buttons on the page. The \"Inherit\" option applies the survey-level setting, which defaults to \"Visible\"."
      showNavigationButtons: "Задава видимостта на бутоните за навигация на страницата. Опцията \"Наследяване\" прилага настройката на ниво проучване, която по подразбиране е \"Видима\".",
      // [Auto-translated] "This table lets you configure each grid column on the page. It automatically sets the width percentage for each column based on the maximum number of elements in a row. To customize the grid layout, manually adjust these values and define the title width for all questions in each column."
      gridLayoutColumns: "Тази таблица ви позволява да конфигурирате всяка колона на мрежата на страницата. Той автоматично задава процента на ширината за всяка колона въз основа на максималния брой елементи в реда. За да персонализирате оформлението на мрежата, ръчно коригирайте тези стойности и определете ширината на заглавието за всички въпроси във всяка колона."
    },
    // [Auto-translated] "Sets the location of a timer on a page."
    timerLocation: "Задава местоположението на таймер на страница.",
    // "Choose from: \"Locked\" - users cannot expand or collapse entries; \"Collapse all\" - all entries start in a collapsed state; \"Expand all\" - all entries start in an expanded state; \"First expanded\" - only the first entry is initially expanded. Applies if \"Entry display mode\" is set to \"List\" and the \"Entry title pattern\" property is specified."
    panelsState: "Изберете от: \"Заключени\" - потребителите не могат да разширяват или свиват панели; \"Свиване на всички\" - всички панели започват в срутено състояние; \"Разширяване на всички\" - всички панели започват в разширено състояние; \"Първо разширен\" - само първият панел първоначално се разширява.",
    // [Auto-translated] "Enter a shared property name within the array of objects that contains the image or video file URLs you want to display in the choice list."
    imageLinkName: "Въведете име на споделено свойство в масива от обекти, съдържащ URL адресите на изображения или видеофайлове, които искате да покажете в списъка за избор.",
    // "The left value serves as an item ID used in conditional rules, the right value is displayed to respondents."
    choices: "Лявата стойност служи като ИД на артикул, използван в условни правила, дясната стойност се показва на респондентите.",
    // [Auto-translated] "Type a user-friendly title to display."
    title: "Въведете удобно за потребителя заглавие за показване.",
    // [Auto-translated] "Ensures that users won't complete the survey until files are uploaded."
    waitForUpload: "Гарантира, че потребителите няма да завършат проучването, докато не бъдат качени файлове.",
    // [Auto-translated] "Accepts CSS values (px, %, in, pt, etc.)."
    minWidth: "Приема CSS стойности (px, %, in, pt и т.н.).",
    // [Auto-translated] "Accepts CSS values (px, %, in, pt, etc.)."
    maxWidth: "Приема CSS стойности (px, %, in, pt и т.н.).",
    // "Accepts CSS values (px, %, in, pt, etc.)."
    width: "Приема CSS стойности (px, %, in, pt и т.н.).",
    // "A join identifier is a custom key that you can assign to several questions to link them together and sync their values. These values will be merged into a single array or object and stored in survey results using the key as the property name."
    valueName: "Ако не зададете това свойство, отговорът ще бъде съхранен в поле, указано от свойството Name.",
    // [Auto-translated] "A value displayed in HTML questions and in the dynamic titles and descriptions of survey elements when the question value is empty."
    defaultDisplayValue: "Стойност, показвана в HTML въпроси и в динамичните заглавия и описания на елементите на проучването, когато стойността на въпроса е празна.",
    // [Auto-translated] "In single- and multiple-selection question types, each choice option has an ID and display value. When selected, this setting shows a display value instead of an ID value in HTML questions and dynamic titles and descriptions of survey elements."
    useDisplayValuesInDynamicTexts: "При типовете въпроси с единичен и множествен избор всяка опция за избор има ИД и стойност на показване. Когато е избрана, тази настройка показва показвана стойност вместо стойност на ИД в HTML въпроси и динамични заглавия и описания на елементи от проучване.",
    // "Choose whether or not to clear question values hidden by conditional logic and when to do it. The \"Inherit\" option applies the survey-level setting (\"Upon survey completion\" by default)."
    clearIfInvisible: "Изберете дали да изчистите стойностите на въпросите, скрити от условната логика, и кога да го направите. Опцията \"Наследяване\" прилага настройката на ниво проучване (\"При завършване на проучването\" по подразбиране).",
    // "Choose from: \"All\" - copies all choice options from the selected question; \"Selected\" - dynamically copies only selected choice options; \"Unselected\" - dynamically copies only unselected choice options. The \"None\" and \"Other\" options are copied by default if enabled in the source question."
    choicesFromQuestionMode: "Изберете от: \"Всички\" - копира всички опции за избор от избрания въпрос; \"Избрано\" - динамично копира само избраните опции за избор; \"Неизбрани\" - динамично копира само неизбрани опции за избор. Опциите \"Няма\" и \"Други\" се копират по подразбиране, ако са разрешени във въпроса източник.",
    // [Auto-translated] "In single- and multiple-selection question types, each choice option has an ID and display value. This setting specifies which matrix column or panel question should provide the IDs."
    choiceValuesFromQuestion: "При типовете въпроси с един и множествен избор всяка опция за избор има идентификатор и стойност на показване. Тази настройка определя коя матрична колона или въпрос от панела трябва да предостави идентификаторите.",
    // [Auto-translated] "In single- and multiple-selection question types, each choice option has an ID and display value. This setting specifies which matrix column or panel question should provide the display texts."
    choiceTextsFromQuestion: "При типовете въпроси с един и множествен избор всяка опция за избор има идентификатор и стойност на показване. Тази настройка указва коя матрична колона или въпрос от панела трябва да предоставя текстовете на дисплея.",
    // [Auto-translated] "Select to let respondents add their own choices if the desired option isn't available in the dropdown. Custom choices will only be stored temporarily for the duration of the current browser session."
    allowCustomChoices: "Изберете, за да позволите на респондентите да добавят свои собствени избори, ако желаната опция не е налична в падащото меню. Персонализираните избори ще се съхраняват само временно за продължителността на текущата сесия на браузъра.",
    // [Auto-translated] "When selected, users can include additional input in a separate comment box."
    showOtherItem: "Когато е избрано, потребителите могат да включат допълнително въвеждане в отделно поле за коментари.",
    // "Displays each special choice option (\"None\", \"Other\", \"Select All\") on a new line, even when using a multiple-column layout."
    separateSpecialChoices: "Показва всяка специална опция за избор (\"Няма\", \"Други\", \"Избери всички\") на нов ред, дори когато се използва оформление с няколко колони.",
    // [Auto-translated] "Specify the location within the service dataset where the target array of objects is located. Leave empty if the URL already points to the array."
    path: "Задайте местоположението в набора от данни на услугата, където се намира целевият масив от обекти. Оставете празно, ако URL адресът вече сочи към масива.",
    choicesbyurl: {
      // "Enter a uniform property name within the array of objects whose value will be stored as a response in survey results."
      valueName: " "
    },
    // [Auto-translated] "Enter a uniform property name within the array of objects that contains the values you want to display in the choice list."
    titleName: "Въведете единно име на свойство в масива от обекти, съдържащ стойностите, които искате да покажете в списъка за избор.",
    // [Auto-translated] "Select to allow the service to return an empty response or array."
    allowEmptyResponse: "Изберете, за да позволите на услугата да върне празен отговор или масив.",
    // [Auto-translated] "Use the magic wand icon to set a conditional rule that determines the visibility of all choice options."
    choicesVisibleIf: "Използвайте иконата на магическа пръчка, за да зададете условно правило, което определя видимостта на всички опции за избор.",
    // [Auto-translated] "The left value serves as an item ID used in conditional rules, the right value is displayed to respondents."
    rateValues: "Лявата стойност служи като ИД на артикул, използван в условни правила, дясната стойност се показва на респондентите.",
    rating: {
      // "\"Auto\" selects between the \"Buttons\" and \"Dropdown\" modes based on the available width. When the width is insufficient to display buttons, the question displays a dropdown."
      displayMode: "\"Автоматично\" избира между режимите \"Бутони\" и \"Падащо меню\" въз основа на наличната ширина. Когато ширината е недостатъчна за показване на бутони, въпросът показва падащо меню."
    },
    // [Auto-translated] "Allows you to connect questions that produce results in different formats. When such questions are linked together using a join identifier, this shared property stores selected question values."
    valuePropertyName: "Позволява ви да свързвате въпроси, които дават резултати в различни формати. Когато такива въпроси са свързани помежду си с помощта на идентификатор на съединение, това споделено свойство съхранява избраните стойности на въпроси.",
    // [Auto-translated] "Select if you want to update the drop-down menu contents to match the search query that a user is typing in the input field."
    searchEnabled: "Изберете дали искате да актуализирате съдържанието на падащото меню, за да съответства на заявката за търсене, която потребителят въвежда в полето за въвеждане.",
    // [Auto-translated] "A value to save in survey results when respondents give a positive answer."
    valueTrue: "Стойност, която трябва да се спести в резултатите от проучването, когато респондентите дадат положителен отговор.",
    // [Auto-translated] "A value to save in survey results when respondents give a negative answer."
    valueFalse: "Стойност, която трябва да се спести в резултатите от проучването, когато респондентите дадат отрицателен отговор.",
    // [Auto-translated] "It's not recommended that you disable this option as it overrides the Preview image and makes it hard for a user to understand whether the files have been uploaded."
    showPreview: "Не се препоръчва да деактивирате тази опция, тъй като тя игнорира изображението за визуализация и затруднява потребителя да разбере дали файловете са качени.",
    // [Auto-translated] "Triggers a prompt asking to confirm the file deletion."
    needConfirmRemoveFile: "Задейства подкана с молба за потвърждаване на изтриването на файла.",
    // [Auto-translated] "Enable to rank only selected choices. Users will drag selected items from the choice list to order them within the ranking area."
    selectToRankEnabled: "Разреши да се класират само избраните възможности за избор. Потребителите ще плъзгат избраните елементи от списъка за избор, за да ги подредят в областта за класиране.",
    // [Auto-translated] "Enter a list of choices that will be suggested to the respondent during input."
    dataList: "Въведете списък с възможности за избор, които ще бъдат предложени на респондента по време на въвеждането.",
    // [Auto-translated] "The setting only resizes the input fields and doesn't affect the width of the question box."
    inputSize: "Настройката само преоразмерява входните полета и не влияе на ширината на полето за въпроси.",
    // [Auto-translated] "Sets consistent width for all item labels. Accepts CSS values (px, %, in, pt, etc.)."
    itemTitleWidth: "Задава постоянна ширина за всички етикети на елементите. Приема CSS стойности (px, %, in, pt и т.н.).",
    // "Select how to align input value within the field. The default setting \"Auto\" aligns the input value to the right if currency or numeric masking is applied and to the left if not."
    inputTextAlignment: "Изберете как да подравните входната стойност в полето. Настройката по подразбиране \"Автоматично\" подравнява входната стойност надясно, ако е приложено валутно или цифрово маскиране, и наляво, ако не.",
    // [Auto-translated] "Serves as a substitute when the image cannot be displayed on a user's device and for accessibility purposes."
    altText: "Служи като заместител, когато изображението не може да бъде показано на устройството на потребителя и за целите на достъпността.",
    // "Defines the color of the selected emoji when the Rating icon type is set to \"Smileys\". Choose between: \"Default\" - the selected emoji appears in default survey color; \"Scale\" - the selected emoji inherits color from the rating scale."
    rateColorMode: "Определя цвета на избрания емотикон, когато типът на иконата за оценка е зададен на \"Усмивки\". Изберете между: \"По подразбиране\" - избраният емотикон се появява в цвета на проучването по подразбиране; \"Скала\" - избраният емотикон наследява цвят от рейтинговата скала.",
    expression: {
      // "An expression ID that is not visible to respondents."
      name: "ИД на израз, който не е видим за респондентите.",
      // "Type an expression subtitle."
      description: "Въведете подзаглавие на израз.",
      // "An expression can include basic calculations (`{q1_id} + {q2_id}`), conditions (`{age} > 60`), and functions ('iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, etc.)."
      expression: "Изразът може да включва основни изчисления ('{q1_id} + {q2_id}'), условия ('{age} > 60') и функции ('iif()', 'today()', 'age()', 'min()', 'max()', 'avg()' и т.н.)."
    },
    // "Select to store the \"Other\" option value as a separate property in survey results."
    storeOthersAsComment: "Изберете, за да съхраните стойността на опцията \"Други\" като отделно свойство в резултатите от проучването.",
    // "Use {0} as a placeholder for the actual value."
    format: "Използвай {0} като контейнер за действителната стойност.",
    // "Refer to the [accept](https://www.w3schools.com/tags/att_input_accept.asp) attribute description for more information."
    acceptedTypes: "Направи справка с (https://www.w3schools.com/tags/att_input_accept.asp) за повече информация.",
    // "Arranges choice options in a multi-column layout. When set to 0, the options are displayed in a single line. Applies only to columns with \"Cell input type\" set to Radio Button Group or Checkboxes."
    columnColCount: "Приложимо само за типове клетки Radiogroup и Checkbox.",
    // "Select the data type that the user's browser can retrieve. This data is sourced either from past values entered by the user or from pre-configured values if any have been saved by the user for autocompletion."
    autocomplete: "Направи справка с [autocomplete](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete) за повече информация.",
    // "Applies when \"File source type\" is \"Local file\" or when camera is unavailable"
    filePlaceholder: "Прилага се, когато \"Тип източник\" е \"Локални файлове\" или когато камерата не е налична",
    // "Applies when \"File source type\" is \"Camera\"."
    photoPlaceholder: "Прилага се, когато \"Тип източник\" е \"Камера\".",
    // "Applies when \"File source type\" is \"Local file or camera\"."
    fileOrPhotoPlaceholder: "Прилага се, когато \"Тип източник\" е \"Локални файлове или камера\".",
    // "Arranges choice options in a multi-column layout. When set to 0, the options are displayed in a single line."
    colCount: "Подрежда опциите за избор в оформление с няколко колони. Когато е зададено на 0, опциите се показват на един ред.",
    masksettings: {
      // "Select if you want to store the question value with an applied mask in survey results."
      saveMaskedValue: "Изберете дали искате да съхраните стойността на въпроса с приложена маска в резултатите от проучването."
    },
    patternmask: {
      // "The pattern can contain string literals and the following placeholders: `9` - for a digit; `a` - for an upper- or lower-case letter; `#` - for a digit or an upper- or lower-case letter. Use backslash `\\` to escape a character."
      pattern: "Шаблонът може да съдържа низови литерали и следните контейнери: '9' - за цифра; \"а\" - за главна или малка буква; \"#\" - за цифра или главна или малка буква. Използвайте обратно наклонена черта \"\\\", за да избягате от знак."
    },
    datetimemask: {
      // "The pattern can contain separator characters and the following placeholders:<br>`m` - Month number.<br>`mm` - Month number, with leading zero for single-digit values.<br>`d` - Day of the month.<br>`dd` - Day of the month, with leading zero for single-digit values.<br>`yy` - The last two digits of the year.<br>`yyyy` - Four-digit year.<br>`H` - Hours in 24-hour format.<br>`HH` - Hours in 24-hour format, with leading zero for single-digit values.<br>`h` - Hours in 12-hour format.<br>`hh` - Hours in 12-hour format, with leading zero for single-digit values.<br>`MM` - Minutes.<br>`ss` - Seconds.<br>`TT` - 12-hour clock period in upper case (AM/PM).<br>`tt` - 12-hour clock period in lower case (am/pm)."
      pattern: "Шаблонът може да съдържа разделителни знаци и следните контейнери:<br>'m' - Номер на месец.<br>'mm' - Число на месеца, с водеща нула за едноцифрени стойности. <br>\"d\" - Ден от месеца. <br>'dd' - Ден от месеца, с водеща нула за едноцифрени стойности. <br>'yy' - Последните две цифри на годината. <br>'гггг' - Четирицифрена година. <br>'H' - Часове в 24-часов формат. <br>'HH' - Часове в 24-часов формат, с водеща нула за едноцифрени стойности. <br>'h' - Часове в 12-часов формат. <br>'hh' - Часове в 12-часов формат, с водеща нула за едноцифрени стойности. <br>'ММ' - Минути. <br>'ss' - секунди. <br>\"TT\" - 12-часов период на часовника с главни букви (AM/PM). <br>'tt' - 12-часов период на часовника с малки букви (am/pm)."
    },
    numericmask: {
      // "A symbol used to separate the fractional part from the integer part of a displayed number."
      decimalSeparator: "Символ, използван за отделяне на дробната част от целочислената част на показваното число.",
      // "A symbol used to separate the digits of a large number into groups of three."
      thousandsSeparator: "Символ, използван за разделяне на цифрите на голямо число в групи от по три.",
      // "Limits how many digits to retain after the decimal point for a displayed number."
      precision: "Ограничава колко цифри да се запазят след десетичната запетая за показваното число."
    },
    currencymask: {
      // "One or several symbols to be displayed before the value."
      prefix: "Един или няколко символа, които трябва да бъдат показани преди стойността.",
      // "One or several symbols to be displayed after the value."
      suffix: "Един или няколко символа, които трябва да се покажат след стойността."
    },
    theme: {
      // "This setting applies only to questions outside of a panel."
      isPanelless: "Тази настройка се прилага само за въпроси извън панела.",
      // "Sets a supplementary color that highlights key survey elements."
      primaryColor: "Задава допълнителен цвят, който подчертава ключови елементи на проучването.",
      // "Adjusts the transparency of panels and question boxes relative to the survey background."
      panelBackgroundTransparency: "Регулира прозрачността на панелите и полетата за въпроси спрямо фона на проучването.",
      // "Adjusts the transparency of input elements relative to the survey background."
      questionBackgroundTransparency: "Регулира прозрачността на входните елементи спрямо фона на проучването.",
      // "Sets the corner radius for all rectangular elements. Enable the Advanced Mode if you want to set individual corner radius values for input elements or panels and question boxes."
      cornerRadius: "Задава ъгловия радиус за всички правоъгълни елементи. Разрешете разширения режим, ако искате да зададете индивидуални стойности на радиуса на ъгъла за входни елементи или панели и полета за въпроси.",
      // "Sets the main background color of the survey."
      "--sjs-general-backcolor-dim": "Задава основния цвят на фона на проучването."
    },
    header: {
      // "The \"Same as container\" option auto-adjusts the header content area width to fit into the HTML element the survey is placed in."
      inheritWidthFrom: "Опцията \"Същото като контейнера\" автоматично регулира ширината на областта на съдържанието на заглавката, за да се побере в HTML елемента, в който е поставена анкетата.",
      // [Auto-translated] "The width of the header area that contains the survey title and description, measured in pixels."
      textAreaWidth: "Ширината на областта на заглавката, която съдържа заглавието и описанието на проучването, измерена в пиксели.",
      // [Auto-translated] "When enabled, the top of the survey overlays the bottom of the header."
      overlapEnabled: "Когато е разрешено, горната част на проучването се наслагва върху долната част на заглавката.",
      // [Auto-translated] "When set to 0, the height is calculated automatically to accommodate the header's content."
      mobileHeight: "Когато е зададена на 0, височината се изчислява автоматично, за да побере съдържанието на заглавката."
    },
    // "The \"Same as container\" option auto-adjusts the progress bar area width to fit into the HTML element the survey is placed in."
    progressBarInheritWidthFrom: "Опцията \"Същото като контейнер\" автоматично регулира ширината на областта на лентата за напредъка, за да се побере в HTML елемента, в който е поставена анкетата.",
    // "Used when the 'Survey layout' is set to 'Single input field per page'. In this layout, the matrix is split so that each input field appears on a separate page. Use the {rowIndex} placeholder to insert auto numbering, {rowTitle} or {rowName} to reference the row's title or ID, and {row.columnid} to include the value of a specific matrix column."
    singleInputTitleTemplate: "Използва се, когато \"Оформление на проучването\" е зададено на \"Едно поле за въвеждане на страница\". В това оформление матрицата е разделена така, че всяко поле за въвеждане да се показва на отделна страница. Използвайте контейнера {rowIndex}, за да вмъкнете автоматично номериране, {rowTitle} или {rowName}, за да препратите към заглавието или ИД на реда, и {row.columnid}, за да включите стойността на конкретна колона на матрицата."
  },
  // Properties
  p: {
    title: {
      // "title"
      name: "заглавие",
      // "Leave it empty, if it is the same as 'Name'"
      title: "Остави го празно, ако е същото като 'Name'"
    },
    // "Allow multiple selection"
    multiSelect: "Разрешаване многократен избор",
    // "Show image and video captions"
    showLabel: "Показване на надписи на изображения",
    // "Swap the order of Yes and No"
    swapOrder: "Разменете реда на \"Да\" и \"Не\"",
    // "Value"
    value: "Стойност",
    // "Tab alignment"
    tabAlign: "Подравняване на раздели",
    // [Auto-translated] "File source type"
    sourceType: "Тип източник на файлове",
    // [Auto-translated] "Fit to container"
    fitToContainer: "Побиране в контейнера",
    // [Auto-translated] "Set value expression"
    setValueExpression: "Задаване на израз за стойност",
    // "Description"
    description: "Описание", // Auto-generated string
    // "Logo fit"
    logoFit: "Подходящо за лого",
    // "Pages"
    pages: "Страници", // Auto-generated string
    // "Questions"
    questions: "Въпроси", // Auto-generated string
    // "Triggers"
    triggers: "Тригери",
    // "Custom variables"
    calculatedValues: "Изчислени стойности",
    // "Survey id"
    surveyId: "Идентификационен номер на анкетата", // Auto-generated string
    // "Survey post id"
    surveyPostId: "Идентификационен номер на публикацията в проучването", // Auto-generated string
    // "Survey show data saving"
    surveyShowDataSaving: "Проучването показва спестяване на данни.", // Auto-generated string
    // "Question description alignment"
    questionDescriptionLocation: "Местоположение на описанието на въпроса",
    // "Progress bar type"
    progressBarType: "Тип лента за напредък", // Auto-generated string
    // "Show table of contents (TOC)"
    showTOC: "Показване на съдържание",
    // "TOC alignment"
    tocLocation: "Местоположение на съдържанието",
    // "Question title pattern"
    questionTitlePattern: "Шаблон на заглавието на въпроса", // Auto-generated string
    // "Survey width mode"
    widthMode: "Режим на широчина",
    // "Show brand info"
    showBrandInfo: "Показване на информация за марката (бранда)", // Auto-generated string
    // "Use display values in dynamic texts"
    useDisplayValuesInDynamicTexts: "Стойности за показване на динамични текстове",
    // "Visible if"
    visibleIf: "Видим, ако", // Auto-generated string
    // "Default value expression"
    defaultValueExpression: "Стойност по подразбиране на израза",
    // "Required if"
    requiredIf: "Задължителен, ако", // Auto-generated string
    // [Auto-translated] "Reset value if"
    resetValueIf: "Нулиране на стойността, ако",
    // [Auto-translated] "Set value if"
    setValueIf: "Задайте стойност, ако",
    // "Validation rules"
    validators: "Валидатори",
    // "Bindings"
    bindings: "Обвързване", // Auto-generated string
    // "Render as"
    renderAs: "Представяне като", // Auto-generated string
    // "Attach original items"
    attachData: "Прикрепяне на оригиналните елементи", // Auto-generated string
    // "Choices"
    choices: "Избори",
    // "Choices by url"
    choicesByUrl: "Избори като url", // Auto-generated string
    // "Currency"
    currency: "Валута", // Auto-generated string
    // "Cell hint"
    cellHint: "Подсказка за клетка", // Auto-generated string
    // "Total maximum fraction digits"
    totalMaximumFractionDigits: "Общо максимални дробни цифри", // Auto-generated string
    // "Total minimum fraction digits"
    totalMinimumFractionDigits: "Общо минимални дробни цифри", // Auto-generated string
    // "Columns"
    columns: "Колони", // Auto-generated string
    // "Detail elements"
    detailElements: "Детайлни елементи", // Auto-generated string
    // "Allow adaptive actions"
    allowAdaptiveActions: "Позволи адаптивни действия", // Auto-generated string
    // "Default row value"
    defaultRowValue: "Стойност на реда по подразбиране", // Auto-generated string
    // [Auto-translated] "Auto-expand new row details"
    detailPanelShowOnAdding: "Автоматично разгъване на подробности за нов ред",
    // "Choices lazy load enabled"
    choicesLazyLoadEnabled: "Отложеното зареждане на избора е активирано.", // Auto-generated string
    // "Choices lazy load page size"
    choicesLazyLoadPageSize: "Избор на размер на страницата за отложено зареждане", // Auto-generated string
    // "Input field component"
    inputFieldComponent: "Компонент на полето за въвеждане", // Auto-generated string
    // "Item component"
    itemComponent: "Компонент на елемента", // Auto-generated string
    // "Min"
    min: "Минимум", // Auto-generated string
    // "Max"
    max: "Максимум", // Auto-generated string
    // "Min value expression"
    minValueExpression: "Минимална стойност на израза", // Auto-generated string
    // "Max value expression"
    maxValueExpression: "Максимална стойност на израза", // Auto-generated string
    // "Step"
    step: "Стъпка", // Auto-generated string
    // "Items for auto-suggest"
    dataList: "Списък с данни",
    // "Input field width (in characters)"
    inputSize: "Размер на елемента",
    // [Auto-translated] "Item label width"
    itemTitleWidth: "Ширина на етикета на артикула",
    // [Auto-translated] "Input value alignment"
    inputTextAlignment: "Подравняване на входните стойности",
    // "Elements"
    elements: "Елементи", // Auto-generated string
    // "Content"
    content: "Съдържание", // Auto-generated string
    // "Navigation title"
    navigationTitle: "Навигационно заглавие", // Auto-generated string
    // "Navigation description"
    navigationDescription: "Описание на навигацията", // Auto-generated string
    // "Long tap"
    longTap: "Дълго докосване", // Auto-generated string
    // "Expand input field dynamically"
    autoGrow: "Автоматичен растеж",
    // "Enable resize handle"
    allowResize: "Разреши преоразмеряване.",
    // "Accept carriage return"
    acceptCarriageReturn: "Приеми връщане на каретка.", // Auto-generated string
    // "Display mode"
    displayMode: "Режим на показване",
    // "Rate type"
    rateType: "Тип на оценката", // Auto-generated string
    // "Label"
    label: "Етикет", // Auto-generated string
    // "Content mode"
    contentMode: "Съдържателен режим",
    // "Image and thumbnail fit"
    imageFit: "Напасване на изображението",
    // "Alt text"
    altText: "Алтернативен текст",
    // "Height"
    height: "Височина", // Auto-generated string
    // [Auto-translated] "Height on smartphones"
    mobileHeight: "Височина на смартфони",
    // "Pen color"
    penColor: "Цвят на писалката", // Auto-generated string
    // "Background color"
    backgroundColor: "Цвят на фона",
    // "Template elements"
    templateElements: "Елементи на шаблона", // Auto-generated string
    // "Operator"
    operator: "Оператор", // Auto-generated string
    // "Is variable"
    isVariable: "Променлива", // Auto-generated string
    // "Run expression"
    runExpression: "Стартиване на израза", // Auto-generated string
    // "Show caption"
    showCaption: "Показване на надпис", // Auto-generated string
    // "Icon name"
    iconName: "Име на икона", // Auto-generated string
    // "Icon size"
    iconSize: "Размер на иконата", // Auto-generated string
    // [Auto-translated] "Precision"
    precision: "Точност", // Auto-generated string
    // [Auto-translated] "Matrix drag handle area"
    matrixDragHandleArea: "Област на манипулатора за плъзгане на матрицата", // Auto-generated string
    // [Auto-translated] "Background image"
    backgroundImage: "Фоново изображение",
    // [Auto-translated] "Background image fit"
    backgroundImageFit: "Побиране на фоново изображение", // Auto-generated string
    // [Auto-translated] "Background image attachment"
    backgroundImageAttachment: "Прикачен файл с фоново изображение", // Auto-generated string
    // [Auto-translated] "Background opacity"
    backgroundOpacity: "Непрозрачност на фона", // Auto-generated string
    // [Auto-translated] "Allow selective ranking"
    selectToRankEnabled: "Позволете селективно класиране",
    // [Auto-translated] "Ranking area alignment"
    selectToRankAreasLayout: "Подравняване на площта за класиране",
    // [Auto-translated] "Text to show if all options are selected"
    selectToRankEmptyRankedAreaText: "Текст, който да се показва, ако са избрани всички опции",
    // [Auto-translated] "Placeholder text for the ranking area"
    selectToRankEmptyUnrankedAreaText: "Текст в контейнер за областта за класиране",
    // [Auto-translated] "Allow camera access"
    allowCameraAccess: "Разреши достъп до камерата", // Auto-generated string
    // [Auto-translated] "Rating icon color mode"
    scaleColorMode: "Цветови режим на иконата за оценка",
    // [Auto-translated] "Smileys color scheme"
    rateColorMode: "Цветова схема на усмивки",
    // [Auto-translated] "Copy display value"
    copyDisplayValue: "Копиране на показваната стойност", // Auto-generated string
    // [Auto-translated] "Column span"
    effectiveColSpan: "Обхват на колоната",
    // [Auto-translated] "Progress bar area width"
    progressBarInheritWidthFrom: "Ширина на областта на лентата за напредък",
    // [Auto-translated] "Theme name"
    themeName: "Име на темата"
  },
  theme: {
    // "Advanced mode"
    advancedMode: "Разширен режим",
    // "Page"
    pageTitle: "Шрифт на заглавието на страницата",
    // "Question box"
    questionTitle: "Шрифт на заглавието на въпроса",
    // "Input element"
    editorPanel: "Редактор",
    // [Auto-translated] "Lines"
    lines: "Линии",
    // "Default"
    primaryDefaultColor: "По подразбиране",
    // "Hover"
    primaryDarkColor: "Върху",
    // "Selected"
    primaryLightColor: "Селектиран",
    // "Background color"
    backgroundDimColor: "Цвят на фона",
    // "Corner radius"
    cornerRadius: "Радиус на ъгъла",
    // "Default background"
    backcolor: "Фон по подразбиране",
    // "Hover background"
    hovercolor: "Фон под курсора на мишката",
    // "Border decoration"
    borderDecoration: "Декорация на контура",
    // [Auto-translated] "Font color"
    fontColor: "Цвят на шрифта",
    // [Auto-translated] "Background color"
    backgroundColor: "Цвят на фона",
    // "Default color"
    primaryForecolor: "Цвят по подразбиране",
    // "Disabled color"
    primaryForecolorLight: "Деактивиран цвят",
    // [Auto-translated] "Font"
    font: "Шрифт",
    // "Darker"
    borderDefault: "Преобладаващ",
    // "Lighter"
    borderLight: "Незначителен",
    // [Auto-translated] "Font family"
    fontFamily: "Семейство шрифтове",
    // [Auto-translated] "Regular"
    fontWeightRegular: "Редовни",
    // [Auto-translated] "Heavy"
    fontWeightHeavy: "Тежък",
    // [Auto-translated] "Semi-bold"
    fontWeightSemiBold: "Полу-полу-получер",
    // [Auto-translated] "Bold"
    fontWeightBold: "Безочлив",
    // [Auto-translated] "Color"
    color: "Цвят",
    // [Auto-translated] "Placeholder color"
    placeholderColor: "Цвят на контейнера",
    // [Auto-translated] "Size"
    size: "Големина",
    // [Auto-translated] "Opacity"
    opacity: "Непрозрачност",
    // "X"
    boxShadowX: "X",
    // "Y"
    boxShadowY: "Y",
    // [Auto-translated] "Add Shadow Effect"
    boxShadowAddRule: "Добавяне на ефект на сянка",
    // "Blur"
    boxShadowBlur: "Замъгляване",
    // "Spread"
    boxShadowSpread: "Разпространение",
    // [Auto-translated] "Drop"
    boxShadowDrop: "Капка",
    // [Auto-translated] "Inner"
    boxShadowInner: "Вътрешен",
    names: {
      // [Auto-translated] "Default"
      default: "По подразбиране",
      // [Auto-translated] "Sharp"
      sharp: "Остър",
      // [Auto-translated] "Borderless"
      borderless: "Без граници",
      // [Auto-translated] "Flat"
      flat: "Апартамент",
      // [Auto-translated] "Plain"
      plain: "Равнина",
      // [Auto-translated] "Double Border"
      doubleborder: "Двойна граница",
      // [Auto-translated] "Layered"
      layered: "Пластове",
      // [Auto-translated] "Solid"
      solid: "Солиден",
      // [Auto-translated] "3D"
      threedimensional: ".3D",
      // [Auto-translated] "Contrast"
      contrast: "Контраст"
    },
    colors: {
      // [Auto-translated] "Teal"
      teal: "Тийл",
      // [Auto-translated] "Blue"
      blue: "Син",
      // [Auto-translated] "Purple"
      purple: "Лилав",
      // [Auto-translated] "Orchid"
      orchid: "Орхидея",
      // [Auto-translated] "Tulip"
      tulip: "Лале",
      // [Auto-translated] "Brown"
      brown: "Кафяв",
      // [Auto-translated] "Green"
      green: "Зелен",
      // [Auto-translated] "Gray"
      gray: "Сив"
    }
  },
  creatortheme: {
    // [Auto-translated] "Surface background"
    "--sjs-special-background": "Повърхностен фон",
    // [Auto-translated] "Primary"
    "--sjs-primary-background-500": "Първичен",
    // [Auto-translated] "Secondary"
    "--sjs-secondary-background-500": "Вторичен",
    // [Auto-translated] "Surface"
    surfaceScale: "Повърхност",
    // [Auto-translated] "UI elements"
    userInterfaceBaseUnit: "Елементи на потребителския интерфейс",
    // [Auto-translated] "Font"
    fontScale: "Шрифт",
    names: {
      // [Auto-translated] "Survey Creator 2020"
      sc2020: "Създател на анкета 2020",
      // [Auto-translated] "Light"
      "default-light": "Светлина",
      // [Auto-translated] "Dark"
      "default-dark": "Тъмен",
      // [Auto-translated] "Contrast"
      "default-contrast": "Контраст"
    }
  }
};

setupLocale({ localeCode: "bg", strings: bgStrings });