import { setupLocale } from "survey-creator-core";

export var ruStrings = {
  // survey templates
  survey: {
    // "Edit"
    edit: "Редактировать",
    // "Watch and learn how to create surveys"
    externalHelpLink: "Научиться создавать опросы",
    // "https://www.youtube.com/channel/UCH2ru9okIcooNZfpIbyq4qQ?view_as=subscriber"
    externalHelpLinkUrl: "Https://www.youtube.com/channel/UCH2ru9okIcooNZfpIbyq4qQ?view_as=subscriber",
    // "Please drop a question here from the Toolbox."
    dropQuestion: "Пожалуйста, перетяните необходимый элемент из панели слева",
    // [Auto-translated] "Create a rule to customize the flow of the survey."
    addLogicItem: "Создайте правило для настройки потока опроса.",
    // "Copy"
    copy: "Копировать",
    // [Auto-translated] "Duplicate"
    duplicate: "Дублировать",
    // "Add to toolbox"
    addToToolbox: "Добавить к инструментам",
    // "Delete Panel"
    deletePanel: "Удалить панель",
    // "Delete Question"
    deleteQuestion: "Удалить вопрос",
    // "Convert to"
    convertTo: "Преобразовать в",
    // "Drag element"
    drag: "Перетянуть элемент"
  },
  // Creator tabs
  tabs: {
    // "Preview"
    preview: "Тестировать опросник",
    // "Themes"
    theme: "Темы",
    // "Translations"
    translation: "Перевод",
    // "Designer"
    designer: "Обзор конструктора",
    // "JSON Editor"
    json: "JSON редактор",
    // "Logic"
    logic: "Логика опросника"
  },
  // Question types
  qt: {
    // "Default"
    default: "По умолчанию",
    // "Checkboxes"
    checkbox: "Множественный выбор",
    // "Long Text"
    comment: "Комментарий",
    // "Image Picker"
    imagepicker: "Выбор изображения",
    // [Auto-translated] "Ranking"
    ranking: "Ранжирование",
    // [Auto-translated] "Image"
    image: "Образ",
    // "Dropdown"
    dropdown: "Выпадающий список",
    // [Auto-translated] "Multi-Select Dropdown"
    tagbox: "Выпадающий список с множественным выбором",
    // "File Upload"
    file: "Загрузка файлов",
    // [Auto-translated] "HTML"
    html: ".HTML",
    // "Single-Select Matrix"
    matrix: "Матрица (единичный выбор)",
    // "Multi-Select Matrix"
    matrixdropdown: "Матрица (множественный выбор)",
    // "Dynamic Matrix"
    matrixdynamic: "Матрица (динамические ряды)",
    // "Multiple Textboxes"
    multipletext: "Multiple Textboxes",
    // "Panel"
    panel: "Панель (для группы вопросов)",
    // "Dynamic Panel"
    paneldynamic: "Панель (динамические панели)",
    // "Radio Button Group"
    radiogroup: "Единичный выбор",
    // "Rating Scale"
    rating: "Рейтинг (шкала)",
    // [Auto-translated] "Slider"
    slider: "Ползун",
    // "Single-Line Input"
    text: "Текстовый ввод",
    // "Yes/No (Boolean)"
    boolean: "Булиевое значение",
    // "Expression (read-only)"
    expression: "Выражение (только для чтения)",
    // [Auto-translated] "Signature"
    signaturepad: "Подпись",
    // [Auto-translated] "Button Group"
    buttongroup: "Группа кнопок"
  },
  toolboxCategories: {
    // "General"
    general: "Общие",
    // "Choice Questions"
    choice: "Вопросы выбора",
    // "Text Input Questions"
    text: "Вопросы для ввода текста",
    // "Containers"
    containers: "Контейнеры",
    // "Matrix Questions"
    matrix: "Матричные вопросы",
    // "Misc"
    misc: "Разное"
  },
  // Strings in SurveyJS Creator
  ed: {
    // "Default ({0})"
    defaultLocale: "По умолчанию ({0})",
    // "Survey"
    survey: "Опросник",
    // "Settings"
    settings: "Настройки опросника",
    // [Auto-translated] "Open settings"
    settingsTooltip: "Открыть настройки",
    // [Auto-translated] "Survey Settings"
    surveySettings: "Настройки опроса",
    // [Auto-translated] "Survey settings"
    surveySettingsTooltip: "Настройки опроса",
    // [Auto-translated] "Theme Settings"
    themeSettings: "Настройки темы",
    // [Auto-translated] "Theme settings"
    themeSettingsTooltip: "Настройки темы",
    // [Auto-translated] "Creator Settings"
    creatorSettingTitle: "Настройки создателя контента",
    // [Auto-translated] "Show Panel"
    showPanel: "Панель «Показать»",
    // [Auto-translated] "Hide Panel"
    hidePanel: "Скрыть панель",
    // [Auto-translated] "Select previous"
    prevSelected: "Выберите предыдущую",
    // [Auto-translated] "Select next"
    nextSelected: "Выберите далее",
    // [Auto-translated] "Focus previous"
    prevFocus: "Фокусировка предыдущая",
    // [Auto-translated] "Focus next"
    nextFocus: "Сосредоточьтесь на следующем",
    // [Auto-translated] "Survey"
    surveyTypeName: "Обзор",
    // [Auto-translated] "Page"
    pageTypeName: "Страница",
    // [Auto-translated] "Panel"
    panelTypeName: "Панель",
    // [Auto-translated] "Question"
    questionTypeName: "Вопрос",
    // [Auto-translated] "Column"
    columnTypeName: "Столбец",
    // "Add New Page"
    addNewPage: "Добавить новую страницу",
    // "Scroll to the Right"
    moveRight: "Прокрутить вправо",
    // "Scroll to the Left"
    moveLeft: "Прокрутить влево",
    // "Delete Page"
    deletePage: "Удалить страницу",
    // "Edit Page"
    editPage: "Редактировать страницу",
    // "Edit"
    edit: "Редактировать",
    // "page"
    newPageName: "страница",
    // "question"
    newQuestionName: "вопрос",
    // "panel"
    newPanelName: "панель",
    // "text"
    newTextItemName: "текст",
    // [Auto-translated] "Default"
    defaultV2Theme: "По умолчанию",
    // [Auto-translated] "Modern"
    modernTheme: "Современный",
    // [Auto-translated] "Default (legacy)"
    defaultTheme: "По умолчанию (устаревшая)",
    // "Preview Survey Again"
    testSurveyAgain: "Тестировать еще раз",
    // "Survey width: "
    testSurveyWidth: "Ширина опросника",
    // [Auto-translated] "You had to navigate to"
    navigateToMsg: "Вы должны были перейти к",
    // "Save Survey"
    saveSurvey: "Сохранить опросник",
    // [Auto-translated] "Save Survey"
    saveSurveyTooltip: "Сохранить опрос",
    // [Auto-translated] "Save Theme"
    saveTheme: "Сохранить тему",
    // [Auto-translated] "Save Theme"
    saveThemeTooltip: "Сохранить тему",
    // [Auto-translated] "Hide errors"
    jsonHideErrors: "Скрыть ошибки",
    // [Auto-translated] "Show errors"
    jsonShowErrors: "Показать ошибки",
    // "Undo"
    undo: "Отменить",
    // "Redo"
    redo: "Повтор",
    // [Auto-translated] "Undo last change"
    undoTooltip: "Отменить последнее изменение",
    // [Auto-translated] "Redo the change"
    redoTooltip: "Повторите изменение",
    // [Auto-translated] "Expand"
    expandTooltip: "Расширять",
    // [Auto-translated] "Collapse"
    collapseTooltip: "Коллапс",
    // "Expand All"
    expandAllTooltip: "Развернуть все",
    // "Collapse All"
    collapseAllTooltip: "Свернуть все",
    // [Auto-translated] "Zoom In"
    zoomInTooltip: "Увеличить",
    // [Auto-translated] "Zoom to 100%"
    zoom100Tooltip: "Увеличьте масштаб до 100%",
    // [Auto-translated] "Zoom Out"
    zoomOutTooltip: "Уменьшение масштаба",
    // [Auto-translated] "Lock expand/collapse state for questions"
    lockQuestionsTooltip: "Блокировка состояния развертывания/свертывания для вопросов",
    // [Auto-translated] "Show more"
    showMoreChoices: "Развернуть",
    // [Auto-translated] "Show less"
    showLessChoices: "Показать меньше",
    // [Auto-translated] "Copy"
    copy: "Копировать",
    // [Auto-translated] "Cut"
    cut: "Резать",
    // [Auto-translated] "Paste"
    paste: "Паста",
    // [Auto-translated] "Copy selection to clipboard"
    copyTooltip: "Копирование выделенного фрагмента в буфер обмена",
    // [Auto-translated] "Cut selection to clipboard"
    cutTooltip: "Вырезать выделение в буфер обмена",
    // [Auto-translated] "Paste from clipboard"
    pasteTooltip: "Вставка из буфера обмена",
    // "Options"
    options: "Параметры",
    // "Generate Valid JSON"
    generateValidJSON: "Сформировать валидный JSON",
    // "Generate Readable JSON"
    generateReadableJSON: "Сформировать читаемый JSON",
    // "Toolbox"
    toolbox: "Панель инструментов",
    // "Properties"
    "property-grid": "Свойства",
    // [Auto-translated] "Search"
    toolboxSearch: "Искать",
    // [Auto-translated] "Type to search..."
    toolboxFilteredTextPlaceholder: "Введите для поиска...",
    // [Auto-translated] "No results found"
    toolboxNoResultsFound: "Никаких результатов не найдено",
    // [Auto-translated] "Type to search..."
    propertyGridFilteredTextPlaceholder: "Введите для поиска...",
    // [Auto-translated] "No results found"
    propertyGridNoResultsFound: "Никаких результатов не найдено",
    // [Auto-translated] "Start configuring your form"
    propertyGridPlaceholderTitle: "Начните настройку формы",
    // [Auto-translated] "Click any category icon to explore survey settings. Additional settings will become available once you add a survey element to the design surface."
    propertyGridPlaceholderDescription: "Нажмите на любой значок категории, чтобы ознакомиться с настройками опроса. Дополнительные настройки станут доступны после добавления элемента опроса в область конструктора.",
    // "Please correct JSON."
    correctJSON: "Пожалуйста, исправьте JSON.",
    // "Survey Results "
    surveyResults: "Результаты обследования",
    // "As Table"
    surveyResultsTable: "Как таблица",
    // "As JSON"
    surveyResultsJson: "Как JSON",
    // "Question Title"
    resultsTitle: "Заголовок вопроса",
    // "Question Name"
    resultsName: "Название вопроса",
    // "Answer Value"
    resultsValue: "Значение ответа",
    // "Display Value"
    resultsDisplayValue: "Отображаемое значение",
    // "Modified"
    modified: "Модифицирован",
    // "Saving"
    saving: "Сохранение",
    // "Saved"
    saved: "Сохраненный",
    // [Auto-translated] "Error"
    propertyEditorError: "Ошибка",
    // "Error! Editor content is not saved."
    saveError: "Ошибка! Содержание редактора не сохранено.",
    // [Auto-translated] "Language Settings"
    translationPropertyGridTitle: "Языковые настройки",
    // [Auto-translated] "Theme Settings"
    themePropertyGridTitle: "Настройки темы",
    // [Auto-translated] "Add Language"
    addLanguageTooltip: "Добавить язык",
    // [Auto-translated] "Languages"
    translationLanguages: "Языки",
    // [Auto-translated] "Are you certain you wish to delete all strings for this language?"
    translationDeleteLanguage: "Вы уверены, что хотите удалить все строки для этого языка?",
    // "Select language to translate"
    translationAddLanguage: "Выберите дополнительный язык опросника",
    // "All Strings"
    translationShowAllStrings: "Показывать все строки",
    // [Auto-translated] "Used Strings Only"
    translationShowUsedStringsOnly: "Используются только строки",
    // "All Pages"
    translationShowAllPages: "Показывать все страницы",
    // "No strings to translate. Please change the filter."
    translationNoStrings: "Нет строк для перевода. Пожалуйста, измените фильтр.",
    // "Export to CSV"
    translationExportToSCVButton: "Экспорт в CSV",
    // "Import from CSV"
    translationImportFromSCVButton: "Импорт из CSV",
    // [Auto-translated] "Auto-translate All"
    translateUsigAI: "Автоматический перевод всех",
    // [Auto-translated] "Translate from: "
    translateUsigAIFrom: "Перевести с: ",
    // [Auto-translated] "Untranslated strings"
    translationDialogTitle: "Непереведенные строки",
    // "Merge {0} with default locale"
    translationMergeLocaleWithDefault: "Объединить {0} с локалью по умолчанию",
    // "Translation..."
    translationPlaceHolder: "Перевод...",
    // [Auto-translated] "Source: "
    translationSource: "Источник: ",
    // [Auto-translated] "Target: "
    translationTarget: "Цель: ",
    // [Auto-translated] "YouTube links are not supported."
    translationYouTubeNotSupported: "Ссылки на YouTube не поддерживаются.",
    // [Auto-translated] "Export"
    themeExportButton: "Экспорт",
    // [Auto-translated] "Import"
    themeImportButton: "Импорт",
    // [Auto-translated] "Export"
    surveyJsonExportButton: "Экспорт",
    // [Auto-translated] "Import"
    surveyJsonImportButton: "Импорт",
    // [Auto-translated] "Copy to clipboard"
    surveyJsonCopyButton: "Копировать в буфер",
    // [Auto-translated] "Reset theme settings to default"
    themeResetButton: "Сброс настроек темы по умолчанию",
    // [Auto-translated] "Do you really want to reset the theme? All your customizations will be lost."
    themeResetConfirmation: "Вы действительно хотите сбросить тему? Все ваши настройки будут потеряны.",
    // [Auto-translated] "Yes, reset the theme"
    themeResetConfirmationOk: "Да, сбросьте тему",
    // "Bold"
    bold: "Жирный",
    // "Italic"
    italic: "Курсив",
    // "Underline"
    underline: "Подчеркивание",
    // "Add Question"
    addNewQuestion: "Добавить вопрос",
    // [Auto-translated] "Select page..."
    selectPage: "Выберите страницу...",
    // [Auto-translated] "Choices are copied from"
    carryForwardChoicesCopied: "Варианты копируются из",
    // [Auto-translated] "Choices are loaded from a web service."
    choicesLoadedFromWebText: "Варианты загружаются из веб-службы.",
    // [Auto-translated] "Go to settings"
    choicesLoadedFromWebLinkText: "Перейдите в настройки",
    // [Auto-translated] "Preview of loaded choice options"
    choicesLoadedFromWebPreviewTitle: "Предварительный просмотр загруженных вариантов выбора",
    // [Auto-translated] "HTML content will be here."
    htmlPlaceHolder: "HTML-контент будет здесь.",
    // [Auto-translated] "Drop a question from the toolbox here."
    panelPlaceHolder: "Задайте вопрос с панели инструментов здесь.",
    // [Auto-translated] "The survey is empty. Drag an element from the toolbox or click the button below."
    surveyPlaceHolder: "Опрос пуст. Перетащите элемент с панели инструментов или нажмите кнопку ниже.",
    // [Auto-translated] "The page is empty. Drag an element from the toolbox or click the button below."
    pagePlaceHolder: "Страница пуста. Перетащите элемент с панели инструментов или нажмите кнопку ниже.",
    // [Auto-translated] "Drag and drop an image here or click the button below and choose an image to upload"
    imagePlaceHolder: "Перетащите изображение сюда или нажмите кнопку ниже и выберите изображение для загрузки",
    // "Click the \"Add Question\" button below to start creating your form."
    surveyPlaceHolderMobile: "Нажмите кнопку «Добавить вопрос» ниже, чтобы начать создание формы.",
    // [Auto-translated] "Your form is empty"
    surveyPlaceholderTitle: "Ваша форма пуста",
    // [Auto-translated] "Your form is empty"
    surveyPlaceholderTitleMobile: "Ваша форма пуста",
    // [Auto-translated] "Drag an element from the toolbox or click the button below."
    surveyPlaceholderDescription: "Перетащите элемент из панели инструментов или нажмите кнопку ниже.",
    // [Auto-translated] "Drag an element from the toolbox or click the button below."
    surveyPlaceholderDescriptionMobile: "Перетащите элемент из панели инструментов или нажмите кнопку ниже.",
    // [Auto-translated] "No preview"
    previewPlaceholderTitle: "Без предварительного просмотра",
    // [Auto-translated] "No preview"
    previewPlaceholderTitleMobile: "Без предварительного просмотра",
    // [Auto-translated] "The survey doesn't contain any visible elements."
    previewPlaceholderDescription: "Опрос не содержит никаких видимых элементов.",
    // [Auto-translated] "The survey doesn't contain any visible elements."
    previewPlaceholderDescriptionMobile: "Опрос не содержит никаких видимых элементов.",
    // [Auto-translated] "No strings to translate"
    translationsPlaceholderTitle: "Никаких строк для перевода",
    // [Auto-translated] "No strings to translate"
    translationsPlaceholderTitleMobile: "Никаких строк для перевода",
    // [Auto-translated] "Add elements to your form or change the strings filter in the toolbar."
    translationsPlaceholderDescription: "Добавляйте элементы в форму или изменяйте фильтр строк на панели инструментов.",
    // [Auto-translated] "Add elements to your form or change the strings filter in the toolbar."
    translationsPlaceholderDescriptionMobile: "Добавляйте элементы в форму или изменяйте фильтр строк на панели инструментов.",
    // "Click the \"Add Question\" button below to add a new element to the page."
    pagePlaceHolderMobile: "Нажмите кнопку «Добавить вопрос» ниже, чтобы добавить новый элемент на страницу.",
    // "Click the \"Add Question\" button below to add a new element to the panel."
    panelPlaceHolderMobile: "Нажмите кнопку «Добавить вопрос» ниже, чтобы добавить новый элемент на панель.",
    // [Auto-translated] "Click the button below and choose an image to upload"
    imagePlaceHolderMobile: "Нажмите кнопку ниже и выберите изображение для загрузки",
    // [Auto-translated] "Choose Image"
    imageChooseImage: "Выберите изображение",
    // [Auto-translated] "Add {0}"
    addNewTypeQuestion: "Добавить {0}", // {0} is localizable question type
    // [Auto-translated] "[LOGO]"
    chooseLogoPlaceholder: "[ЛОГОТИП]",
    // [Auto-translated] "Item "
    choices_Item: "Пункт ",
    // [Auto-translated] "Select a file"
    selectFile: "Выберите файл",
    // [Auto-translated] "Remove the file"
    removeFile: "Удалите файл",
    lg: {
      // "Add New Rule"
      addNewItem: "Добавить новое правило",
      // [Auto-translated] "Create a rule to customize the flow of the survey."
      empty_tab: "Создайте правило для настройки потока опроса.",
      // [Auto-translated] "No logical rules"
      logicPlaceholderTitle: "Никаких логических правил",
      // [Auto-translated] "No logical rules"
      logicPlaceholderTitleMobile: "Никаких логических правил",
      // [Auto-translated] "Create a rule to customize the flow of the survey."
      logicPlaceholderDescription: "Создайте правило для настройки потока опроса.",
      // [Auto-translated] "Create a rule to customize the flow of the survey."
      logicPlaceholderDescriptionMobile: "Создайте правило для настройки потока опроса.",
      // "Show/hide page"
      page_visibilityName: "Видимость страницы",
      // [Auto-translated] "Enable/disable page"
      page_enableName: "Включить/выключить страницу",
      // [Auto-translated] "Make page required"
      page_requireName: "Сделать страницу обязательной",
      // "Show/hide panel"
      panel_visibilityName: "Видимость панели",
      // "Enable/disable panel"
      panel_enableName: "Панель включена/выключена",
      // [Auto-translated] "Make panel required"
      panel_requireName: "Сделайте панель обязательной",
      // "Show/hide question"
      question_visibilityName: "Видимость вопроса",
      // "Enable/disable question"
      question_enableName: "Вопрос включен/выключен",
      // "Make question required"
      question_requireName: "Вопрос обязательный",
      // [Auto-translated] "Reset question value"
      question_resetValueName: "Сбросить значение вопроса",
      // [Auto-translated] "Set question value"
      question_setValueName: "Задать значение вопроса",
      // [Auto-translated] "Show/hide column"
      column_visibilityName: "Показать/скрыть столбец",
      // [Auto-translated] "Enable/disable column"
      column_enableName: "Включить/выключить колонку",
      // [Auto-translated] "Make column required"
      column_requireName: "Сделать столбец обязательным",
      // [Auto-translated] "Reset column value"
      column_resetValueName: "Сброс значения столбца",
      // [Auto-translated] "Set column value"
      column_setValueName: "Задание значения столбца",
      // "Complete survey"
      trigger_completeName: "Опрос завершен",
      // "Set answer"
      trigger_setvalueName: "Установить значение вопроса",
      // "Copy answer"
      trigger_copyvalueName: "Копировать значение вопроса",
      // "Skip to question"
      trigger_skipName: "Перейти к вопросу",
      // "Run expression"
      trigger_runExpressionName: "Запустить пользовательское выражение",
      // "Set \"Thank You\" page markup"
      completedHtmlOnConditionName: "Пользовательский текст 'Страницы благодарности'",
      // "Make the page visible when the logical expression evaluates to true. Otherwise, keep the page invisible."
      page_visibilityDescription: "Сделать страницу видимой, когда логическое выражение вернет 'true'. В противном случае сделать ее невидимой.",
      // "Make the page visible when the logical expression evaluates to true. Otherwise, keep the panel invisible."
      panel_visibilityDescription: "Сделать панель видимой, когда логическое выражение вернет 'true'. В противном случае сделать ее невидимой.",
      // "Make the panel and all elements inside it enabled when the logical expression evaluates to true. Otherwise, keep them disabled."
      panel_enableDescription: "Сделать панель и все элементы внутри нее включенной, когда логическое выражение вернет 'true'. В противном случае оставить их отключенными.",
      // "Make the question visible when the logical expression evaluates to true. Otherwise, keep the question invisible."
      question_visibilityDescription: "Сделать вопрос видимой, когда логическое выражение вернет 'true'. В противном случае сделать ее невидимой.",
      // "Make the question enabled when the logical expression evaluates to true. Otherwise, keep the question disabled."
      question_enableDescription: "Сделать вопрос включенным, когда логическое выражение вернет 'true'. В противном случае оставить его отключенными.",
      // "Question becomes required when the logical expression evaluates to true."
      question_requireDescription: "Вопрос становится обязательным, когда логическое выражение вернет 'true'.",
      // "When the logical expression evaluates to true, the survey ends, and the respondent sees the \"Thank you\" page."
      trigger_completeDescription: "Когда логическое выражение вернет 'true', то опрос становится завершенным и конечный пользователь видит 'Страницу благодарности'.",
      // "When question values used in the logical expression are changed, and the expression evaluates to true, the specified value is assigned to the selected question."
      trigger_setvalueDescription: "Когда значения вопросов, которые используются в логическом выражении, изменяются и логическое выражение возвращает значение 'true', тогда на выбранный вопрос устанавливается значение.",
      // "When question values used in the logical expression are changed, and the expression evaluates to true, the value of the selected question is copied to another question."
      trigger_copyvalueDescription: "Когда значения вопросов, которые используются в логическом выражении, изменяются и логическое выражение возвращает значение 'true', тогда значение одного выбранного вопроса копируется в другой выбранный вопрос.",
      // "When the logical expression evaluates to true, the survey focuses/jumps to the selected question."
      trigger_skipDescription: "Когда логическое выражение вернет 'true', тогда опрос переходит к/фокусируется на выбранном вопросе.",
      // "When the logical expression evaluates to true, the survey evaluates another expression. Optionally, the result of the latter expression can be assigned as a value to the selected question"
      trigger_runExpressionDescription: "Когда логическое выражение возвращает 'true',тогда выполняется пользовательское выражение. Вы можете при желании установить этот результат выражения в выбранный вопрос.",
      // "If the logical expression evaluates to true, the \"Thank You\" page displays the specified content."
      completedHtmlOnConditionDescription: "Если логическое выражение возвращает 'true', то текст по умолчанию для 'Страницы благодарности' изменяется на заданный.",
      // "When expression: '{0}' returns true"
      itemExpressionText: "Когда выражение: '{0}' возвращает 'true'", // {0} - the expression
      // [Auto-translated] "New rule"
      itemEmptyExpressionText: "Новое правило",
      // "make page {0} visible"
      page_visibilityText: "Сделать страницу {0} видимой", // {0} page name
      // "make panel {0} visible"
      panel_visibilityText: "Сделать панель {0} видимой", // {0} panel name
      // "make panel {0} enable"
      panel_enableText: "Сделать панель {0} включенной", // {0} panel name
      // "make question {0} visible"
      question_visibilityText: "Сделать вопрос {0} видимым", // {0} question name
      // "make question {0} enable"
      question_enableText: "Сделать вопрос {0} включенным", // {0} question name
      // "make question {0} required"
      question_requireText: "Сделать вопрос {0} обязательным", // {0} question name
      // [Auto-translated] "reset value for question: {0}"
      question_resetValueText: "Сброс значения для вопроса: {0}", // {0} question name.
      // [Auto-translated] "assign value: {1} to question: {0}"
      question_setValueText: "присвоить значение: {1} к вопросу: {0}", // {0} question name and {1} setValueExpression
      // [Auto-translated] "make column {0} of question {1} visible"
      column_visibilityText: "Сделайте видимым {0} {1} в столбце вопроса", // {0} column name, {1} question name
      // [Auto-translated] "make column {0} of question {1} enable"
      column_enableText: "Сделайте столбец {0} вопроса {1} включите", // {0} column name, {1} question name
      // [Auto-translated] "make column {0} of question {1} required"
      column_requireText: "Сделайте {0} вопроса {1} обязательным для заполнения", // {0} column name, {1} question name
      // [Auto-translated] "reset cell value for column: {0}"
      column_resetValueText: "Сброс значения ячейки для столбца: {0}", // {0} column name
      // [Auto-translated] "assign cell value: {1} to column: {0}"
      column_setValueText: "Присвойте значение ячейки: {1} столбцу: {0}", // {0} column name and {1} setValueExpression
      // [Auto-translated] "An expression whose result will be assigned to the target question."
      setValueExpressionPlaceholder: "Выражение, результат которого будет присвоен целевому вопросу.",
      // "survey becomes completed"
      trigger_completeText: "Опрос становится завершенным",
      // "set into question: {0} value {1}"
      trigger_setvalueText: "Установить в вопрос: {0} значение {1}", // {0} question name, {1} setValue
      // [Auto-translated] "clear question value: {0}"
      trigger_setvalueEmptyText: "Четкое значение вопроса: {0}", // {0} question name
      // "copy into question: {0} value from question {1}"
      trigger_copyvalueText: "Копировать в вопрос: {0} значение из вопроса {1}", // {0} and {1} question names
      // "survey skip to the question {0}"
      trigger_skipText: "Опрос переходит к вопросу {0}", // {0} question name
      // "run expression: '{0}'"
      trigger_runExpressionText1: "Выполнить выражение: '{0}'", // {0} the expression
      // " and set its result into question: {0}"
      trigger_runExpressionText2: "и установить его результат в вопрос: {0}", // {0} question name
      // "show custom text for the \"Thank You\" page."
      completedHtmlOnConditionText: "Показывать пользовательский текст для 'Страницы благодарности'.",
      // [Auto-translated] "All Questions"
      showAllQuestions: "Все вопросы",
      // [Auto-translated] "All Action Types"
      showAllActionTypes: "Все типы действий",
      // [Auto-translated] "Condition(s)"
      conditions: "Состояние(я)",
      // [Auto-translated] "Action(s)"
      actions: "Действие(я)",
      // "Define condition(s)"
      expressionEditorTitle: "Настройка логики выражения",
      // [Auto-translated] "Define action(s)"
      actionsEditorTitle: "Определение действий",
      // [Auto-translated] "Delete Action"
      deleteAction: "Действие «Удалить»",
      // [Auto-translated] "Add Action"
      addNewAction: "Добавить действие",
      // [Auto-translated] "Select action..."
      selectedActionCaption: "Выберите действие...",
      // "The logic expression is empty or invalid. Please correct it."
      expressionInvalid: "Логическое выражение пустое или недействительное. Пожалуйста, исправьте его.",
      // [Auto-translated] "Please add at least one action."
      noActionError: "Пожалуйста, добавьте хотя бы одно действие.",
      // [Auto-translated] "Please fix issues in your action(s)."
      actionInvalid: "Пожалуйста, исправьте проблемы в ваших действиях.",
      // [Auto-translated] "Logical rules are incomplete"
      uncompletedRule_title: "Логические правила неполны",
      // [Auto-translated] "You have not completed some of the logical rules. If you leave the tab now, the changes will be lost. Do you still want to leave the tab without completing the changes?"
      uncompletedRule_text: "Вы не выполнили некоторые логические правила. Если вы покинете вкладку сейчас, изменения будут потеряны. Вы все еще хотите покинуть вкладку, не завершив изменения?",
      // [Auto-translated] "Yes"
      uncompletedRule_apply: "Да",
      // [Auto-translated] "No, I want to complete the rules"
      uncompletedRule_cancel: "Нет, я хочу дополнить правила"
    }
  },
  // Property Editors
  pe: {
    panel: {
      // [Auto-translated] "Panel name"
      name: "Название панели",
      // [Auto-translated] "Panel title"
      title: "Заголовок панели",
      // [Auto-translated] "Panel description"
      description: "Описание панели",
      // [Auto-translated] "Make the panel visible if"
      visibleIf: "Сделать панель видимой, если",
      // [Auto-translated] "Make the panel required if"
      requiredIf: "Сделайте панель обязательной, если",
      // [Auto-translated] "Question order within the panel"
      questionOrder: "Порядок вопросов на панели",
      // [Auto-translated] "Move the panel to page"
      page: "Переместите панель на страницу",
      // [Auto-translated] "Display the panel on a new line"
      startWithNewLine: "Отображение панели на новой строке",
      // [Auto-translated] "Panel collapse state"
      state: "Состояние сворачивания панели",
      // [Auto-translated] "Inline panel width"
      width: "Ширина встроенной панели",
      // [Auto-translated] "Minimum panel width"
      minWidth: "Минимальная ширина панели",
      // [Auto-translated] "Maximum panel width"
      maxWidth: "Максимальная ширина панели",
      // [Auto-translated] "Number this panel"
      showNumber: "Пронумеруйте эту панель"
    },
    panellayoutcolumn: {
      // [Auto-translated] "Effective width, %"
      effectiveWidth: "Полезная ширина, %",
      // [Auto-translated] "Question title width, px"
      questionTitleWidth: "Ширина заголовка вопроса, px"
    },
    paneldynamic: {
      // [Auto-translated] "Panel name"
      name: "Название панели",
      // [Auto-translated] "Panel title"
      title: "Заголовок панели",
      // [Auto-translated] "Panel description"
      description: "Описание панели",
      // [Auto-translated] "Entry display mode"
      displayMode: "Режим отображения входа",
      // [Auto-translated] "Make the panel visible if"
      visibleIf: "Сделать панель видимой, если",
      // [Auto-translated] "Make the panel required if"
      requiredIf: "Сделайте панель обязательной, если",
      // [Auto-translated] "Move the panel to page"
      page: "Переместите панель на страницу",
      // [Auto-translated] "Display the panel on a new line"
      startWithNewLine: "Отображение панели на новой строке",
      // [Auto-translated] "Panel collapse state"
      state: "Состояние свертывания панели",
      // [Auto-translated] "Inline panel width"
      width: "Встроенная ширина панели",
      // [Auto-translated] "Minimum panel width"
      minWidth: "Минимальная ширина панели",
      // [Auto-translated] "Maximum panel width"
      maxWidth: "Максимальная ширина панели",
      // [Auto-translated] "Confirm entry removal"
      confirmDelete: "Подтвердите удаление записи",
      // [Auto-translated] "Entry description pattern"
      templateDescription: "Шаблон описания входа",
      // [Auto-translated] "Entry title pattern"
      templateTitle: "Шаблон заголовка записи",
      // [Auto-translated] "Empty panel text"
      noEntriesText: "Пустой текст на панели",
      // [Auto-translated] "Tab title pattern"
      templateTabTitle: "Шаблон заголовка вкладки",
      // [Auto-translated] "Tab title placeholder"
      tabTitlePlaceholder: "Заполнитель заголовка вкладки",
      // [Auto-translated] "Make an individual entry visible if"
      templateVisibleIf: "Сделайте отдельную запись видимой, если",
      // [Auto-translated] "Number the panel"
      showNumber: "Пронумеруйте панель",
      // [Auto-translated] "Panel title alignment"
      titleLocation: "Выравнивание заголовков панелей",
      // [Auto-translated] "Panel description alignment"
      descriptionLocation: "Выравнивание описания панели",
      // [Auto-translated] "Question title alignment"
      templateQuestionTitleLocation: "Выравнивание заголовка вопроса",
      // [Auto-translated] "Question title width"
      templateQuestionTitleWidth: "Ширина заголовка вопроса",
      // [Auto-translated] "Error message alignment"
      templateErrorLocation: "Выравнивание сообщений об ошибках",
      // [Auto-translated] "New entry location"
      newPanelPosition: "Новое место входа",
      // [Auto-translated] "Prevent duplicate responses in the following question"
      keyName: "Избегайте дублирования ответов на следующий вопрос"
    },
    question: {
      // [Auto-translated] "Question name"
      name: "Название вопроса",
      // [Auto-translated] "Question title"
      title: "Заголовок вопроса",
      // [Auto-translated] "Question description"
      description: "Описание вопроса",
      // [Auto-translated] "Show the title and description"
      showTitle: "Показать название и описание",
      // [Auto-translated] "Make the question visible if"
      visibleIf: "Сделайте вопрос видимым, если",
      // [Auto-translated] "Make the question required if"
      requiredIf: "Сделайте вопрос обязательным, если",
      // [Auto-translated] "Move the question to page"
      page: "Переместите вопрос на страницу",
      // [Auto-translated] "Question box collapse state"
      state: "Состояние сворачивания окна вопроса",
      // [Auto-translated] "Number this question"
      showNumber: "Пронумеруйте этот вопрос",
      // [Auto-translated] "Question title alignment"
      titleLocation: "Выравнивание заголовка вопроса",
      // [Auto-translated] "Question description alignment"
      descriptionLocation: "Выравнивание описания вопроса",
      // [Auto-translated] "Error message alignment"
      errorLocation: "Выравнивание сообщений об ошибках",
      // [Auto-translated] "Increase the inner indent"
      indent: "Увеличьте внутренний отступ",
      // [Auto-translated] "Inline question width"
      width: "Ширина встроенного вопроса",
      // [Auto-translated] "Minimum question width"
      minWidth: "Минимальная ширина вопроса",
      // [Auto-translated] "Maximum question width"
      maxWidth: "Максимальная ширина вопроса",
      // [Auto-translated] "Update input field value"
      textUpdateMode: "Обновление значения поля ввода"
    },
    signaturepad: {
      // [Auto-translated] "Signature area width"
      signatureWidth: "Ширина области подписи",
      // [Auto-translated] "Signature area height"
      signatureHeight: "Высота области подписи",
      // [Auto-translated] "Auto-scale the signature area"
      signatureAutoScaleEnabled: "Автоматическое масштабирование области подписи",
      // [Auto-translated] "Show a placeholder within signature area"
      showPlaceholder: "Отображение заполнителя в области подписи",
      // [Auto-translated] "Placeholder text"
      placeholder: "Замещающий текст",
      // [Auto-translated] "Placeholder text in read-only or preview mode"
      placeholderReadOnly: "Замещающий текст в режиме только для чтения или предварительного просмотра",
      // [Auto-translated] "Show the Clear button within signature area"
      allowClear: "Отображение кнопки «Очистить» в области подписи",
      // [Auto-translated] "Minimum stroke width"
      penMinWidth: "Минимальная ширина мазка",
      // [Auto-translated] "Maximum stroke width"
      penMaxWidth: "Максимальная ширина мазка",
      // [Auto-translated] "Stroke color"
      penColor: "Цвет обводки"
    },
    comment: {
      // [Auto-translated] "Input field height (in lines)"
      rows: "Высота поля ввода (в строках)"
    },
    // "Question numbering"
    showQuestionNumbers: "Показывать номера вопросов",
    // "Question indexing type"
    questionStartIndex: "Начальный индекс вопроса (1, 2 или 'A', 'а')",
    expression: {
      // [Auto-translated] "Expression name"
      name: "Имя выражения",
      // [Auto-translated] "Expression title"
      title: "Заголовок выражения",
      // [Auto-translated] "Expression description"
      description: "Описание выражения",
      // [Auto-translated] "Expression"
      expression: "Выражение"
    },
    trigger: {
      // [Auto-translated] "Expression"
      expression: "Выражение"
    },
    calculatedvalue: {
      // [Auto-translated] "Expression"
      expression: "Выражение"
    },
    // survey templates
    survey: {
      // [Auto-translated] "Survey title"
      title: "Название опроса",
      // [Auto-translated] "Survey description"
      description: "Описание опроса",
      // [Auto-translated] "Make the survey read-only"
      readOnly: "Сделайте опрос доступным только для чтения"
    },
    page: {
      // [Auto-translated] "Page name"
      name: "Название страницы",
      // [Auto-translated] "Page title"
      title: "Заголовок страницы",
      // [Auto-translated] "Page description"
      description: "Описание страницы",
      // [Auto-translated] "Make the page visible if"
      visibleIf: "Сделайте страницу видимой, если",
      // [Auto-translated] "Make the page required if"
      requiredIf: "Сделайте страницу обязательной, если",
      // [Auto-translated] "Time limit to complete the page"
      timeLimit: "Ограничение по времени на заполнение страницы",
      // [Auto-translated] "Question order on the page"
      questionOrder: "Порядок вопросов на странице"
    },
    matrixdropdowncolumn: {
      // [Auto-translated] "Column name"
      name: "Имя столбца",
      // [Auto-translated] "Column title"
      title: "Заголовок столбца",
      // [Auto-translated] "Prevent duplicate responses"
      isUnique: "Предотвращение дублирования ответов",
      // [Auto-translated] "Column width"
      width: "Ширина столбца",
      // [Auto-translated] "Minimum column width"
      minWidth: "Минимальная ширина столбца",
      // [Auto-translated] "Input field height (in lines)"
      rows: "Высота поля ввода (в строках)",
      // [Auto-translated] "Make the column visible if"
      visibleIf: "Сделайте столбец видимым, если",
      // [Auto-translated] "Make the column required if"
      requiredIf: "Сделайте столбец обязательным, если",
      // [Auto-translated] "Each option in a separate column"
      showInMultipleColumns: "Каждый вариант в отдельной колонке"
    },
    matrixcolumn: {
      // [Auto-translated] "Clear others in the same row"
      isExclusive: "Удаление других объектов в том же ряду"
    },
    multipletextitem: {
      // [Auto-translated] "Name"
      name: "Имя",
      // [Auto-translated] "Title"
      title: "Титул"
    },
    masksettings: {
      // [Auto-translated] "Save masked value in survey results"
      saveMaskedValue: "Сохранение замаскированного значения в результатах опроса"
    },
    patternmask: {
      // [Auto-translated] "Value pattern"
      pattern: "Шаблон значения"
    },
    datetimemask: {
      // [Auto-translated] "Minimum value"
      min: "Минимальное значение",
      // [Auto-translated] "Maximum value"
      max: "Максимальное значение"
    },
    numericmask: {
      // [Auto-translated] "Allow negative values"
      allowNegativeValues: "Разрешить отрицательные значения",
      // [Auto-translated] "Thousands separator"
      thousandsSeparator: "Разделитель тысяч",
      // [Auto-translated] "Decimal separator"
      decimalSeparator: "Десятичный разделитель",
      // [Auto-translated] "Value precision"
      precision: "Точность значений",
      // [Auto-translated] "Minimum value"
      min: "Минимальное значение",
      // [Auto-translated] "Maximum value"
      max: "Максимальное значение"
    },
    currencymask: {
      // [Auto-translated] "Currency prefix"
      prefix: "Префикс валюты",
      // [Auto-translated] "Currency suffix"
      suffix: "Суффикс валюты"
    },
    // [Auto-translated] "Clear others when selected"
    isExclusive: "Удалить другие при выборе",
    // [Auto-translated] "Display both text and value"
    showValue: "Отображение текста и значений",
    // [Auto-translated] "Require user to enter a comment"
    isCommentRequired: "Требовать от пользователя ввода комментария",
    // [Auto-translated] "Display area height"
    imageHeight: "Высота области отображения",
    // [Auto-translated] "Display area width"
    imageWidth: "Ширина области отображения",
    // "Join identifier"
    valueName: "Название пункта",
    // [Auto-translated] "Default display value for dynamic texts"
    defaultDisplayValue: "Отображаемое значение по умолчанию для динамических текстов",
    // [Auto-translated] "Label alignment"
    rateDescriptionLocation: "Выравнивание меток",
    // [Auto-translated] "Input field width (in characters)"
    size: "Ширина поля ввода (в символах)",
    // [Auto-translated] "Cell error message alignment"
    cellErrorLocation: "Выравнивание сообщений об ошибках ячеек",
    // [Auto-translated] "Enabled"
    enabled: "Включен",
    // [Auto-translated] "Disabled"
    disabled: "Нетрудоспособный",
    // [Auto-translated] "Inherit"
    inherit: "Наследовать",
    // "Apply"
    apply: "Применить",
    // "OK"
    ok: "OK",
    // "Save"
    save: "Сохранить",
    // [Auto-translated] "Clear"
    clear: "Ясный",
    // [Auto-translated] "Save"
    saveTooltip: "Спасать",
    // "Cancel"
    cancel: "Отменить",
    // [Auto-translated] "Set"
    set: "Набор",
    // "Reset"
    reset: "Сброс",
    // [Auto-translated] "Change"
    change: "Менять",
    // [Auto-translated] "Refresh"
    refresh: "Освежать",
    // "Close"
    close: "Закрыть",
    // "Delete"
    delete: "Удалить",
    // "Add"
    add: "Добавить",
    // "Add New"
    addNew: "Добавить новый",
    // "Click to add an item..."
    addItem: "Нажмите, чтобы добавить элемент...",
    // [Auto-translated] "Click to remove the item..."
    removeItem: "Нажмите, чтобы удалить элемент...",
    // [Auto-translated] "Drag the item"
    dragItem: "Перетащите элемент",
    // "Other"
    addOther: "Другое",
    // "Select All"
    addSelectAll: "Выбрать все пункты",
    // "None"
    addNone: "Ничего",
    // "Remove All"
    removeAll: "Удалить все",
    // "Edit"
    edit: "Редактировать",
    // "Return without saving"
    back: "Вернуться без сохранения",
    // [Auto-translated] "Return without saving"
    backTooltip: "Возврат без экономии",
    // "Save and return"
    saveAndBack: "Сохранить и вернуться",
    // [Auto-translated] "Save and return"
    saveAndBackTooltip: "Сохранить и вернуть",
    // [Auto-translated] "Done"
    doneEditing: "Договорились",
    // "Edit Choices"
    editChoices: "Редактировать выбор",
    // [Auto-translated] "Show Choices"
    showChoices: "Показать варианты",
    // "Move"
    move: "Переместить",
    // "<empty>"
    empty: "<пусто>",
    // [Auto-translated] "Value is empty"
    emptyValue: "Значение пусто",
    // "Manual Entry"
    fastEntry: "Быстрый вход",
    // [Auto-translated] "Value '{0}' is not unique"
    fastEntryNonUniqueError: "Значение «{0}» не уникально",
    // [Auto-translated] "Please limit the number of items from {0} to {1}"
    fastEntryChoicesCountError: "Пожалуйста, ограничьте количество предметов от {0} до {1}",
    // [Auto-translated] "Please enter at least {0} items"
    fastEntryChoicesMinCountError: "Пожалуйста, введите не менее {0} пунктов",
    // [Auto-translated] "Enter the list of choice options and their IDs in the following format:\n\nid|option\n\nA choice option ID is not visible to respondents and can be used in conditional rules."
    fastEntryPlaceholder: "Введите список вариантов выбора и их идентификаторы в следующем формате:\n\nid|option\n\nИдентификатор варианта выбора не виден респондентам и может использоваться в условных правилах.",
    // "Form Entry"
    formEntry: "Форма входа",
    // "Test the service"
    testService: "Тест услуги",
    // "Please select the element"
    itemSelectorEmpty: "Пожалуйста, выберите элемент",
    // [Auto-translated] "Please select the action"
    conditionActionEmpty: "Пожалуйста, выберите действие",
    // "Select a question..."
    conditionSelectQuestion: "Выберите вопрос ...",
    // "Select a page..."
    conditionSelectPage: "Выбрать страницу ...",
    // "Select a panel..."
    conditionSelectPanel: "Выберите панель ...",
    // "Please enter/select the value"
    conditionValueQuestionTitle: "Пожалуйста, введите/выберите значение",
    // "Press ctrl+space to get expression completion hint"
    aceEditorHelp: "Нажмите Ctrl+Пробел, чтобы получить подсказки",
    // "Current row"
    aceEditorRowTitle: "Текущая строка",
    // "Current panel"
    aceEditorPanelTitle: "Текущая панель",
    // "For more details please check the documentation"
    showMore: "Для получения более подробной информации, пожалуйста, перейдите к документации",
    // "Available questions"
    assistantTitle: "Доступные вопросы",
    // "There is should be at least one column or row"
    cellsEmptyRowsColumns: "Должен быть хотя бы один столбец или строка",
    // [Auto-translated] "Review before submit"
    showPreviewBeforeComplete: "Проверка перед отправкой",
    // [Auto-translated] "Enabled by a condition"
    overridingPropertyPrefix: "Включается условием",
    // [Auto-translated] "Reset"
    resetToDefaultCaption: "Сброс",
    // "Please enter a value"
    propertyIsEmpty: "Пожалуйста, введите значение",
    // [Auto-translated] "Please enter a unique value"
    propertyIsNoUnique: "Пожалуйста, введите уникальное значение",
    // "Please enter a unique name"
    propertyNameIsNotUnique: "Пожалуйста, введите уникальное имя",
    // "Do not use reserved words: \"item\", \"choice\", \"panel\", \"row\"."
    propertyNameIsIncorrect: "Не используйте зарезервированные слова: «элемент», «выбор», «панель», «строка».",
    // "You don't have any items yet"
    listIsEmpty: "Добавьте новое условие",
    // [Auto-translated] "You don't have any choices yet"
    "listIsEmpty@choices": "У вас пока нет выбора",
    // [Auto-translated] "You don't have any columns yet"
    "listIsEmpty@columns": "У вас еще нет столбцов",
    // [Auto-translated] "You don't have layout columns yet"
    "listIsEmpty@gridLayoutColumns": "У вас еще нет столбцов макета",
    // [Auto-translated] "You don't have any rows yet"
    "listIsEmpty@rows": "У вас еще нет строк",
    // [Auto-translated] "You don't have any validation rules yet"
    "listIsEmpty@validators": "У вас еще нет правил валидации",
    // [Auto-translated] "You don't have any custom variables yet"
    "listIsEmpty@calculatedValues": "У вас еще нет пользовательских переменных",
    // [Auto-translated] "You don't have any triggers yet"
    "listIsEmpty@triggers": "У вас еще нет триггеров",
    // [Auto-translated] "You don't have any links yet"
    "listIsEmpty@navigateToUrlOnCondition": "У вас еще нет ссылок",
    // [Auto-translated] "You don't have any pages yet"
    "listIsEmpty@pages": "У вас еще нет страниц",
    // [Auto-translated] "Add new choice"
    "addNew@choices": "Добавить новый вариант",
    // [Auto-translated] "Add new column"
    "addNew@columns": "Добавить новый столбец",
    // [Auto-translated] "Add new row"
    "addNew@rows": "Добавить новую строку",
    // [Auto-translated] "Add new rule"
    "addNew@validators": "Добавить новое правило",
    // [Auto-translated] "Add new variable"
    "addNew@calculatedValues": "Добавить новую переменную",
    // [Auto-translated] "Add new trigger"
    "addNew@triggers": "Добавить новый триггер",
    // [Auto-translated] "Add new URL"
    "addNew@navigateToUrlOnCondition": "Добавить новый URL-адрес",
    // [Auto-translated] "Add new page"
    "addNew@pages": "Добавить новую страницу",
    // "Expression is empty"
    expressionIsEmpty: "Выражение - пустое",
    // "Value"
    value: "Значение",
    // "Text"
    text: "Текст",
    // "Row ID"
    rowid: "ID строки",
    // "Image or video file URL"
    imageLink: "Ссылка на изображение",
    // "Edit column: {0}"
    columnEdit: "Изменить столбец: {0}",
    // "Edit item: {0}"
    itemEdit: "Редактировать элемент: {0}",
    // "URL"
    url: "URL",
    // "Path to data"
    path: "Путь",
    choicesbyurl: {
      // [Auto-translated] "Web service URL"
      url: "URL веб-сервиса",
      // [Auto-translated] "Get value to store from the following property"
      valueName: "Получение значения для хранения из следующего свойства"
    },
    // "Get value to display from the following property"
    titleName: "Заголовок пункта",
    // [Auto-translated] "Get file URLs from the following property"
    imageLinkName: "Получение URL-адресов файлов из следующего свойства",
    // [Auto-translated] "Accept empty response"
    allowEmptyResponse: "Принять пустой ответ",
    // "Title"
    titlePlaceholder: "Введите заголовок",
    // "Survey Title"
    surveyTitlePlaceholder: "Введите заголовок опроса",
    // "Page {num}"
    pageTitlePlaceholder: "Введите заголовок страницы",
    // [Auto-translated] "Start Page"
    startPageTitlePlaceholder: "Стартовая страница",
    // "Description"
    descriptionPlaceholder: "Введите описание",
    // "Description"
    surveyDescriptionPlaceholder: "Введите описание опроса",
    // "Description"
    pageDescriptionPlaceholder: "Введите описание страницы",
    // [Auto-translated] "Wrap choices"
    textWrapEnabled: "Варианты обертывания",
    // "Enable the \"Other\" option"
    showOtherItem: "Есть пункт 'Другое'",
    // "Rename the \"Other\" option"
    otherText: "Текст пункта 'Другое'",
    // "Enable the \"None\" option"
    showNoneItem: "Нет ни одного пункта",
    // [Auto-translated] "Enable the \"Refuse to Answer\" option"
    showRefuseItem: "Включите опцию \"Отказаться от ответа\"",
    // [Auto-translated] "Enable the \"Don't Know\" option"
    showDontKnowItem: "Включите опцию «Не знаю»",
    // "Rename the \"None\" option"
    noneText: "Текст пункта 'Ничего'",
    // "Enable the \"Select All\" option"
    showSelectAllItem: "Выбрать все пункты",
    // "Rename the \"Select All\" option"
    selectAllText: "Текст пункта 'Выбрать все пункты'",
    // "Minimum value for auto-generated items"
    choicesMin: "Минимальное значение для автоматически сгенерированных элементов",
    // "Maximum value for auto-generated items"
    choicesMax: "Максимальное значение для автоматически сгенерированных элементов",
    // "Step value for auto-generated items"
    choicesStep: "Разница между автоматически сгенерироваными элементами",
    // "Name"
    name: "Название",
    // "Title"
    title: "Заголовок",
    // "Cell input type"
    cellType: "Тип ячейки",
    // [Auto-translated] "Column count"
    colCount: "Количество столбцов",
    // "Choice order"
    choicesOrder: "Выбрать порядок отбора",
    // [Auto-translated] "Allow custom choices"
    allowCustomChoices: "Как разрешить пользовательский выбор",
    // "Visible"
    visible: "Отображать?",
    // "Required"
    isRequired: "Обязательный?",
    // [Auto-translated] "Mark as required"
    markRequired: "Отметьте как обязательный",
    // [Auto-translated] "Remove the required mark"
    removeRequiredMark: "Снимите нужную отметку",
    // "Require an answer in each row"
    eachRowRequired: "Все строки обязательны для заполнения",
    // [Auto-translated] "Prevent duplicate responses in rows"
    eachRowUnique: "Предотвращение дублирования ответов в строках",
    // "Error message for required questions"
    requiredErrorText: "Это поле обязательное для заполнения",
    // "Display the question on a new line"
    startWithNewLine: "Начинать с новой строки?",
    // "Rows"
    rows: "Количество строк",
    // [Auto-translated] "Columns"
    cols: "Столбцы",
    // "Placeholder text within input field"
    placeholder: "Заполнитель области ввода",
    // "Show preview area"
    showPreview: "Показать предпросмотр?",
    // "Store file content in JSON result as text"
    storeDataAsText: "Хранить содержимое файла в формате JSON как текст",
    // [Auto-translated] "Maximum file size (in bytes)"
    maxSize: "Максимальный размер файла (в байтах)",
    // "Row count"
    rowCount: "Количество строк",
    // "Columns layout"
    columnLayout: "Макет столбцов",
    // "\"Add Row\" button alignment"
    addRowButtonLocation: "Добавить расположение кнопки строки",
    // [Auto-translated] "Transpose rows to columns"
    transposeData: "Транспонирование строк в столбцы",
    // "\"Add Row\" button text"
    addRowText: "Добавить текст кнопки строки",
    // "\"Remove Row\" button text"
    removeRowText: "Удалить кнопку строки текста",
    // [Auto-translated] "Input field title pattern"
    singleInputTitleTemplate: "Шаблон заголовка поля ввода",
    // "Minimum rating value"
    rateMin: "Минимальный рейтинг",
    // "Maximum rating value"
    rateMax: "Максимальный рейтинг",
    // "Step value"
    rateStep: "Шаг рейтинга",
    // "Minimum value label"
    minRateDescription: "Описание для минимального рейтинга",
    // "Maximum value label"
    maxRateDescription: "Описание для максимального рейтинга",
    // "Input type"
    inputType: "Тип ввода",
    // [Auto-translated] "Default Answer"
    defaultValue: "Ответ по умолчанию",
    // "Default texts"
    cellsDefaultRow: "Текст ячеек по умолчанию",
    // "Edit survey settings"
    surveyEditorTitle: "Настройки опросника",
    // "Edit: {0}"
    qEditorTitle: "Изменить: {0}",
    // "Maximum character limit"
    maxLength: "Максимальная длина",
    // "Build"
    buildExpression: "Собрать",
    // "Edit"
    editExpression: "Редактировать",
    // [Auto-translated] "and"
    and: "и",
    // [Auto-translated] "or"
    or: "или",
    // "Remove"
    remove: "Переместить",
    // "Add Condition"
    addCondition: "добавить условие",
    // [Auto-translated] "Select a question to start configuring conditions."
    emptyLogicPopupMessage: "Выберите вопрос, чтобы начать настройку условий.",
    // [Auto-translated] "If"
    if: "Если",
    // [Auto-translated] "then"
    then: "тогда",
    // [Auto-translated] "Target question"
    setToName: "Целевой вопрос",
    // [Auto-translated] "Question to copy answer from"
    fromName: "Вопрос для копирования ответа",
    // [Auto-translated] "Question to skip to"
    gotoName: "Вопрос, к которому нужно перейти",
    // [Auto-translated] "Rule is incorrect"
    ruleIsNotSet: "Правило неверно",
    // [Auto-translated] "Add to the survey results"
    includeIntoResult: "Добавить к результатам опроса",
    // "Make the title and description visible"
    showTitle: "Показать/скрыть заголовок",
    // [Auto-translated] "Expand/collapse title"
    expandCollapseTitle: "Развернуть/свернуть заголовок",
    // "Select a survey language"
    locale: "Язык по умолчанию",
    // "Select device type"
    simulator: "Выберите устройство",
    // "Switch to landscape orientation"
    landscapeOrientation: "Альбомная",
    // [Auto-translated] "Switch to portrait orientation"
    portraitOrientation: "Переключение в книжную ориентацию",
    // "Clear hidden question values"
    clearInvisibleValues: "Очистить невидимые значения",
    // "Limit to one response"
    cookieName: "Имя Cookie (отключить повторное прохождение опроса локально)",
    // "Auto-save survey progress on page change"
    partialSendEnabled: "Показать результаты опроса на странице рядом",
    // "Save the \"Other\" option value as a separate property"
    storeOthersAsComment: "Хранить занчение 'Другое' в отдельном поле",
    // "Show page titles"
    showPageTitles: "Показывать заголовки страниц",
    // "Show page numbers"
    showPageNumbers: "Показывать номера страниц",
    // "\"Previous Page\" button text"
    pagePrevText: "Текст в кнопке 'Предыдущая страница'",
    // "\"Next Page\" button text"
    pageNextText: "Текст в кнопке 'Следующая страница'",
    // "\"Complete Survey\" button text"
    completeText: "Текст в кнопке 'Завершить'",
    // [Auto-translated] "\"Review Answers\" button text"
    previewText: "Текст кнопки \"Просмотреть ответы\"",
    // [Auto-translated] "\"Edit Answer\" button text"
    editText: "Текст кнопки \"Редактировать ответ\"",
    // "\"Start Survey\" button text"
    startSurveyText: "Текст в кнопке 'Начать'",
    // "Show navigation buttons"
    showNavigationButtons: "Показывать кнопки навигации (навигация по умолчанию)",
    // [Auto-translated] "Navigation buttons alignment"
    navigationButtonsLocation: "Выравнивание кнопок навигации",
    // "Show the \"Previous Page\" button"
    showPrevButton: "Показывать кнопки 'Предыдущая страница' (пользователь может вернуться на предыдущую страницу)",
    // "First page is a start page"
    firstPageIsStartPage: "Первая страница опросника является стартовой страницей.",
    // "Show the \"Thank You\" page"
    showCompletePage: "Показывать страницу с текстом по завершению заполнения (HTML финальной страницы)",
    // "Auto-advance to the next page"
    autoAdvanceEnabled: "Переходить на следующую страницу автоматически при заполнении всех вопросов",
    // [Auto-translated] "Complete the survey automatically"
    autoAdvanceAllowComplete: "Автоматическое заполнение опроса",
    // "Show the progress bar"
    showProgressBar: "Показывать прогресс заполнения",
    // [Auto-translated] "Progress bar alignment"
    progressBarLocation: "Выравнивание полосы прогресса",
    // "Question title alignment"
    questionTitleLocation: "Расположение заголовка вопроса",
    // "Question title width"
    questionTitleWidth: "Ширина заголовка вопроса",
    // "Required symbol(s)"
    requiredMark: "Символ для обязательного вопроса",
    // "Question title template, default is: '{no}. {require} {title}'"
    questionTitleTemplate: "Шаблон названия опроса, по умолчанию: {не} {требует} {текста}.",
    // "Error message alignment"
    questionErrorLocation: "Размещение ошибки опроса",
    // "Focus first question on a new page"
    autoFocusFirstQuestion: "Фокусирование на первом вопросе при изменении страницы",
    // "Question order"
    questionOrder: "Сортировка элементов на странице",
    // "Time limit to complete the survey"
    timeLimit: "Максимальное время в секундах, чтобы заполнить опросник",
    // "Time limit to complete one page"
    timeLimitPerPage: "Максимальное время в секундах, чтобы заполнить страницу опросника",
    // [Auto-translated] "Use a timer"
    showTimer: "Используйте таймер",
    // "Timer alignment"
    timerLocation: "Показывать панель таймера",
    // "Timer mode"
    timerInfoMode: "Показывать режим панели таймера",
    // "Enable entry addition"
    allowAddPanel: "Разрешить добавление панели",
    // "Enable entry removal"
    allowRemovePanel: "Разрешить удаление панели",
    // "\"Add Entry\" button text"
    addPanelText: "Добавление текста на панели",
    // "\"Remove Entry\" button text"
    removePanelText: "Удаление текста на панели",
    // "Show all elements on one page"
    isSinglePage: "Показывать все элементы на одной странице",
    // [Auto-translated] "HTML markup"
    html: "HTML-разметка",
    // [Auto-translated] "Answer"
    setValue: "Ответ",
    // [Auto-translated] "Storage format"
    dataFormat: "Формат хранения",
    // [Auto-translated] "Enable row addition"
    allowAddRows: "Включение добавления строк",
    // [Auto-translated] "Enable row removal"
    allowRemoveRows: "Включение удаления строк",
    // [Auto-translated] "Enable row reordering"
    allowRowReorder: "Включение изменения порядка строк",
    // [Auto-translated] "Does not apply if you specify the exact display area width or height."
    responsiveImageSizeHelp: "Не применяется, если указана точная ширина или высота области отображения.",
    // [Auto-translated] "Minimum display area width"
    minImageWidth: "Минимальная ширина области отображения",
    // [Auto-translated] "Maximum display area width"
    maxImageWidth: "Максимальная ширина области отображения",
    // [Auto-translated] "Minimum display area height"
    minImageHeight: "Минимальная высота области отображения",
    // [Auto-translated] "Maximum display area height"
    maxImageHeight: "Максимальная высота области отображения",
    // "Minimum value"
    minValue: "Минимальное значение",
    // "Maximum value"
    maxValue: "Максимальное значение",
    // [Auto-translated] "Case insensitive"
    caseInsensitive: "Учет регистра",
    // [Auto-translated] "Minimum length (in characters)"
    minLength: "Минимальная длина (в символах)",
    // "Allow digits"
    allowDigits: "Разрешить цифры",
    // "Minimum count"
    minCount: "Минимальное количество",
    // "Maximum count"
    maxCount: "Максимальное количество",
    // "Regular expression"
    regex: "Регулярное выражение",
    surveyvalidator: {
      // [Auto-translated] "Validation message"
      text: "Сообщение о проверке",
      // [Auto-translated] "Validation expression"
      expression: "Проверочное выражение",
      // [Auto-translated] "Notification type"
      notificationType: "Тип уведомления",
      // [Auto-translated] "Maximum length (in characters)"
      maxLength: "Максимальная длина (в символах)"
    },
    // "Total row header"
    totalText: "Общий текст",
    // "Aggregation method"
    totalType: "Общий тип",
    // "Total value expression"
    totalExpression: "Общее выражение",
    // "Total value display format"
    totalDisplayStyle: "Общий стиль отображения",
    // "Currency"
    totalCurrency: "Общая валюта",
    // "Formatted string"
    totalFormat: "Общий формат",
    // [Auto-translated] "Survey logo"
    logo: "Логотип опроса",
    // [Auto-translated] "Survey layout"
    questionsOnPageMode: "Схема съемки",
    // [Auto-translated] "Restrict answer length"
    maxTextLength: "Ограничение длины ответа",
    // [Auto-translated] "Restrict comment length"
    maxCommentLength: "Ограничение длины комментария",
    // [Auto-translated] "Comment area height (in lines)"
    commentAreaRows: "Высота области комментариев (в строках)",
    // [Auto-translated] "Auto-expand text areas"
    autoGrowComment: "Автоматическое расширение текстовых областей",
    // [Auto-translated] "Allow users to resize text areas"
    allowResizeComment: "Разрешить пользователям изменять размер текстовых областей",
    // "Update input field values"
    textUpdateMode: "Обновление значения текстового вопроса",
    // [Auto-translated] "Input mask type"
    maskType: "Тип входной маски",
    // [Auto-translated] "Set focus on the first invalid answer"
    autoFocusFirstError: "Установка фокуса на первом недопустимом ответе",
    // [Auto-translated] "Run validation"
    checkErrorsMode: "Запуск проверки",
    // [Auto-translated] "Validate empty fields on lost focus"
    validateVisitedEmptyFields: "Проверка пустых полей при потере фокуса",
    // [Auto-translated] "Redirect to an external link after submission"
    navigateToUrl: "Перенаправление на внешнюю ссылку после отправки",
    // [Auto-translated] "Dynamic external link"
    navigateToUrlOnCondition: "Динамическая внешняя ссылка",
    // [Auto-translated] "Markup to show if the user already filled out this survey"
    completedBeforeHtml: "Разметка, показывающая, заполнил ли пользователь уже этот опрос",
    // [Auto-translated] "\"Thank You\" page markup"
    completedHtml: "Разметка страницы \"Спасибо\"",
    // [Auto-translated] "Dynamic \"Thank You\" page markup"
    completedHtmlOnCondition: "Динамическая разметка страницы \"Спасибо\"",
    // [Auto-translated] "Markup to show while survey model is loading"
    loadingHtml: "Разметка, отображаемая при загрузке модели опроса",
    // [Auto-translated] "Comment area text"
    commentText: "Текст области комментариев",
    // [Auto-translated] "Autocomplete type"
    autocomplete: "Тип автозаполнения",
    // "Label for \"True\""
    labelTrue: "Метка «Истина»",
    // "Label for \"False\""
    labelFalse: "«Ложный» ярлык",
    // "Show the Clear button"
    allowClear: "Показать кнопку «Очистить»",
    // [Auto-translated] "Search mode"
    searchMode: "Режим поиска",
    // [Auto-translated] "Display format"
    displayStyle: "Формат отображения",
    // [Auto-translated] "Formatted string"
    format: "Форматированная строка",
    // [Auto-translated] "Maximum fractional digits"
    maximumFractionDigits: "Максимальное количество дробных цифр",
    // [Auto-translated] "Minimum fractional digits"
    minimumFractionDigits: "Минимальные дробные цифры",
    // [Auto-translated] "Display grouping separators"
    useGrouping: "Разделители группировки дисплеев",
    // [Auto-translated] "Enable multiple file upload"
    allowMultiple: "Как включить загрузку нескольких файлов",
    // [Auto-translated] "Preview uploaded images"
    allowImagesPreview: "Предварительный просмотр загруженных изображений",
    // [Auto-translated] "Accepted file types"
    acceptedTypes: "Допустимые типы файлов",
    // [Auto-translated] "Wait for upload to complete"
    waitForUpload: "Дождитесь завершения загрузки",
    // [Auto-translated] "Confirm file deletion"
    needConfirmRemoveFile: "Подтвердите удаление файла",
    // [Auto-translated] "Row details alignment"
    detailPanelMode: "Выравнивание сведений о строке",
    // [Auto-translated] "Minimum row count"
    minRowCount: "Минимальное количество строк",
    // [Auto-translated] "Maximum row count"
    maxRowCount: "Максимальное количество строк",
    // "Confirm row removal"
    confirmDelete: "Подтверждение удаления строки",
    // [Auto-translated] "Confirmation message"
    confirmDeleteText: "Подтверждающее сообщение",
    // [Auto-translated] "Initial number of entries"
    panelCount: "Начальное количество заявок",
    // [Auto-translated] "Minimum number of entries"
    minPanelCount: "Минимальное количество входов",
    // [Auto-translated] "Maximum number of entries"
    maxPanelCount: "Максимальное количество входов",
    // [Auto-translated] "Initial entry state"
    panelsState: "Начальное состояние входа",
    // [Auto-translated] "\"Previous Entry\" button text"
    prevPanelText: "Текст кнопки \"Предыдущая запись\"",
    // [Auto-translated] "\"Next Entry\" button text"
    nextPanelText: "Текст кнопки \"Следующая запись\"",
    // [Auto-translated] "\"Remove Entry\" button alignment"
    removePanelButtonLocation: "Выравнивание кнопки \"Удалить вход\"",
    // [Auto-translated] "Hide the question if it has no rows"
    hideIfRowsEmpty: "Скройте вопрос, если в нем нет строк",
    // [Auto-translated] "Hide columns if there are no rows"
    hideColumnsIfEmpty: "Скрытие столбцов, если строк нет",
    // [Auto-translated] "Custom rating values"
    rateValues: "Пользовательские значения рейтинга",
    // [Auto-translated] "Rating count"
    rateCount: "Количество оценок",
    // [Auto-translated] "Rating configuration"
    autoGenerate: "Настройка рейтинга",
    slider: {
      // [Auto-translated] "Min value"
      min: "Минимальная стоимость",
      // [Auto-translated] "Max value"
      max: "Максимальное значение",
      // [Auto-translated] "Step value"
      step: "Значение шага",
      // [Auto-translated] "Show scale labels"
      showLabels: "Отображение меток шкалы",
      // [Auto-translated] "Show tooltips"
      tooltipVisibility: "Показать всплывающие подсказки",
      // [Auto-translated] "Allow thumb crossing"
      allowSwap: "Разрешить скрещивание больших пальцев",
      // [Auto-translated] "Number of auto-generated labels"
      labelCount: "Количество автоматически сгенерированных меток",
      // [Auto-translated] "Min value expression"
      minValueExpression: "Выражение минимального значения",
      // [Auto-translated] "Max value expression"
      maxValueExpression: "Выражение максимального значения",
      // [Auto-translated] "Scale labels configuration"
      autoGenerate: "Настройка этикеток шкалы",
      // [Auto-translated] "Slider type"
      sliderType: "Тип слайдера",
      // [Auto-translated] "Min range length"
      minRangeLength: "Минимальная длина диапазона",
      // [Auto-translated] "Max range length"
      maxRangeLength: "Максимальная длина диапазона",
      // [Auto-translated] "Custom labels"
      customLabels: "Пользовательские этикетки",
      // [Auto-translated] "Label format"
      labelFormat: "Формат этикетки",
      // [Auto-translated] "Tooltip format"
      tooltipFormat: "Формат всплывающей подсказки"
    },
    file: {
      // [Auto-translated] "Image height"
      imageHeight: "Высота изображения",
      // [Auto-translated] "Image width"
      imageWidth: "Ширина изображения"
    },
    // [Auto-translated] "Hide the question if it has no choices"
    hideIfChoicesEmpty: "Скройте вопрос, если у него нет вариантов",
    // "Minimum width"
    minWidth: "Минимальная ширина (в значениях, принимаемых CSS)",
    // "Maximum width"
    maxWidth: "Максимальная ширина (в значениях, принимаемых CSS)",
    // "Width"
    width: "Ширина (в значениях, принимаемых CSS)",
    // [Auto-translated] "Show column headers"
    showHeader: "Показать заголовки столбцов",
    // [Auto-translated] "Show horizontal scrollbar"
    horizontalScroll: "Показать горизонтальную полосу прокрутки",
    // [Auto-translated] "Minimum column width"
    columnMinWidth: "Минимальная ширина столбца",
    // [Auto-translated] "Row header width"
    rowTitleWidth: "Ширина заголовка строки",
    // "Value to store when \"True\" is selected"
    valueTrue: "Значение \"True\"",
    // "Value to store when \"False\" is selected"
    valueFalse: "Значение \"False\"",
    // "\"Value is below minimum\" error message"
    minErrorText: "Сообщение об ошибке \"Значение ниже минимального\"",
    // "\"Value exceeds maximum\" error message"
    maxErrorText: "Сообщение об ошибке «Значение превышает максимальное»",
    // "\"Empty comment\" error message"
    otherErrorText: "Сообщение об ошибке «Пустой комментарий»",
    // "Error message for duplicate responses"
    keyDuplicationError: "Сообщение об ошибке \"Неуникальное значение ключа\"",
    // [Auto-translated] "Minimum choices to select"
    minSelectedChoices: "Минимальные варианты выбора",
    // [Auto-translated] "Maximum choices to select"
    maxSelectedChoices: "Максимальное количество вариантов выбора",
    // [Auto-translated] "Logo width"
    logoWidth: "Ширина логотипа",
    // [Auto-translated] "Logo height"
    logoHeight: "Высота логотипа",
    // "Read-only"
    readOnly: "Только для чтения",
    // [Auto-translated] "Disable the read-only mode if"
    enableIf: "Отключите режим только для чтения, если",
    // "\"No rows\" message"
    noRowsText: "Сообщение \"Нет строк\"",
    // [Auto-translated] "Separate special choices"
    separateSpecialChoices: "Отдельные специальные варианты",
    // [Auto-translated] "Copy choices from the following question"
    choicesFromQuestion: "Копирование вариантов из следующего вопроса",
    // [Auto-translated] "Which choice options to copy"
    choicesFromQuestionMode: "Какие варианты выбора копировать",
    // "Use values from the following matrix column or panel question as choice IDs"
    choiceValuesFromQuestion: "Используйте значения из следующего столбца матрицы или вопроса панели в качестве идентификаторов выбора",
    // "Use values from the following matrix column or panel question as choice texts"
    choiceTextsFromQuestion: "Используйте значения из следующего столбца матрицы или панельного вопроса в качестве текстов для выбора",
    // [Auto-translated] "Display page titles in the progress bar"
    progressBarShowPageTitles: "Отображение заголовков страниц в индикаторе выполнения",
    // [Auto-translated] "Display page numbers in the progress bar"
    progressBarShowPageNumbers: "Отображение номеров страниц в индикаторе выполнения",
    // [Auto-translated] "Add a comment box"
    showCommentArea: "Добавить поле для комментариев",
    // [Auto-translated] "Placeholder text for the comment box"
    commentPlaceholder: "Замещающий текст для поля комментария",
    // [Auto-translated] "Show the labels as extreme values"
    displayRateDescriptionsAsExtremeItems: "Отображение надписей в виде крайних значений",
    // [Auto-translated] "Row order"
    rowOrder: "Порядок строк",
    // [Auto-translated] "Column layout"
    columnsLayout: "Расположение столбцов",
    // [Auto-translated] "Nested column count"
    columnColCount: "Количество вложенных столбцов",
    // [Auto-translated] "Correct Answer"
    correctAnswer: "Правильный ответ",
    // [Auto-translated] "Default Values"
    defaultPanelValue: "Значения по умолчанию",
    // [Auto-translated] "Cell Texts"
    cells: "Тексты ячеек",
    // [Auto-translated] "Select a file or paste a file link..."
    fileInputPlaceholder: "Выберите файл или вставьте ссылку на файл...",
    // "Prevent duplicate responses in the following column"
    keyName: "Ключевая колонка",
    itemvalue: {
      // [Auto-translated] "Make the option visible if"
      visibleIf: "Сделайте опцию видимой, если",
      // [Auto-translated] "Make the option selectable if"
      enableIf: "Сделайте опцию выбираемой, если"
    },
    "itemvalue@rows": {
      // [Auto-translated] "Make the row visible if"
      visibleIf: "Сделайте строку видимой, если",
      // [Auto-translated] "Make the row editable if"
      enableIf: "Сделайте строку редактируемой, если"
    },
    imageitemvalue: {
      // "Alt text"
      text: "Замещающий текст"
    },
    // "Logo alignment"
    logoPosition: "Местоположение логотипа",
    // "Add logo..."
    addLogo: "Добавить логотип...",
    // "Change logo..."
    changeLogo: "Изменить логотип...",
    logoPositions: {
      // "Remove logo"
      none: "Разместить логотип",
      // "Left"
      left: "Слева",
      // "Right"
      right: "Справа",
      // "On the top"
      top: "Сверху",
      // "In the bottom"
      bottom: "Снизу"
    },
    // [Auto-translated] "Preview mode"
    previewMode: "Режим предварительного просмотра",
    // [Auto-translated] "Enable grid layout"
    gridLayoutEnabled: "Включение макета сетки",
    // [Auto-translated] "Grid columns"
    gridLayoutColumns: "Столбцы сетки",
    // [Auto-translated] "Mask settings"
    maskSettings: "Настройки маски",
    // [Auto-translated] "Row details error message alignment"
    detailErrorLocation: "Выравнивание сообщений об ошибках в строках",
    // Creator tabs
    tabs: {
      panel: {
        // [Auto-translated] "Panel Layout"
        layout: "Компоновка панелей"
      },
      // "General"
      general: "Общие",
      // "Options"
      fileOptions: "Параметры",
      // [Auto-translated] "HTML Editor"
      html: "HTML-редактор",
      // "Columns"
      columns: "Столбцы",
      // "Rows"
      rows: "Строки",
      // "Choice Options"
      choices: "Выбор",
      // "Items"
      items: "Элементы",
      // "Visible If"
      visibleIf: "Отображать, если",
      // "Editable If"
      enableIf: "Доступен, если",
      // "Required If"
      requiredIf: "Обязателен для заполнения, если",
      // "Rating Values"
      rateValues: "Оценить важность(вес) вопроса",
      // [Auto-translated] "Slider Settings"
      sliderSettings: "Настройки слайдера",
      // "Choices from a Web Service"
      choicesByUrl: "Выбор из Интернета",
      // "Default Choices"
      matrixChoices: "Выбор по умолчанию",
      // "Text Inputs"
      multipleTextItems: "Ввод нескольких текстовых полей",
      // [Auto-translated] "Numbering"
      numbering: "Нумерация",
      // "Validators"
      validators: "Валидаторы",
      // "Navigation"
      navigation: "Навигация",
      // "Question Settings"
      question: "Вопрос",
      // [Auto-translated] "Pages"
      pages: "Страниц",
      // "Quiz Mode"
      timer: "Таймер/Викторина",
      // "Calculated Values"
      calculatedValues: "Расчетные значения",
      // "Triggers"
      triggers: "Триггеры",
      // "Title template"
      templateTitle: "Название шаблона",
      // "Totals"
      totals: "Итоги",
      // "Conditions"
      logic: "Логика",
      // [Auto-translated] "Input Mask Settings"
      mask: "Настройки входной маски",
      layout: {
        // [Auto-translated] "Panel Layout"
        panel: "Компоновка панелей",
        // [Auto-translated] "Layout"
        question: "Схема",
        // [Auto-translated] "Layout"
        base: "Схема"
      },
      // "Data"
      data: "Данные",
      // "Validation"
      validation: "Проверка",
      // "Individual Cell Texts"
      cells: "Ячейки",
      // "\"Thank You\" Page"
      showOnCompleted: "Показать по завершению",
      // "Logo in the Survey Header"
      logo: "Логотип в заголовке опросника",
      // [Auto-translated] "Slider"
      slider: "Ползун",
      // [Auto-translated] "Expression"
      expression: "Выражение",
      // [Auto-translated] "Question Settings"
      questionSettings: "Настройки вопроса",
      // "Header"
      header: "Заголовок",
      // "Background"
      background: "Фон",
      // "Appearance"
      appearance: "Внешний вид",
      // [Auto-translated] "Accent colors"
      accentColors: "Акцентные цвета",
      // [Auto-translated] "Surface background"
      surfaceBackground: "Фон поверхности",
      // [Auto-translated] "Scaling"
      scaling: "Масштабирование",
      // "Others"
      others: "Другие"
    },
    // "Edit property '{0}'"
    editProperty: "Редактировать свойство '{0}'",
    // "Items"
    items: "[Элементы: {0}]",
    // [Auto-translated] "Make choices visible if"
    choicesVisibleIf: "Сделайте варианты видимыми, если",
    // [Auto-translated] "Make choices selectable if"
    choicesEnableIf: "Сделайте выбор выбираемым, если",
    // [Auto-translated] "Make columns visible if"
    columnsEnableIf: "Сделать столбцы видимыми, если",
    // [Auto-translated] "Make rows visible if"
    rowsEnableIf: "Сделайте строки видимыми, если",
    // [Auto-translated] "Increase the inner indent"
    innerIndent: "Увеличьте внутренний отступ",
    // [Auto-translated] "Use answers from the last entry as default"
    copyDefaultValueFromLastEntry: "Используйте ответы из последней записи по умолчанию",
    // "Please enter a value."
    enterNewValue: "Пожалуйста, введите значение.",
    // "There are no questions in the survey."
    noquestions: "В опроснике нет ни одного вопроса",
    // "Please create a trigger"
    createtrigger: "Пожалуйста, создайте триггер",
    // [Auto-translated] "Press enter button to edit"
    titleKeyboardAdornerTip: "Нажмите кнопку ввода, чтобы отредактировать",
    // [Auto-translated] "Press enter button to edit item, press delete button to delete item, press alt plus arrow up or arrow down to move item"
    keyboardAdornerTip: "Нажмите кнопку ввода, чтобы отредактировать элемент, нажмите кнопку удаления, чтобы удалить элемент, нажмите alt со стрелкой вверх или со стрелкой вниз, чтобы переместить элемент",
    // "On "
    triggerOn: "О",
    // "Make pages visible"
    triggerMakePagesVisible: "Сделать страницы видимыми",
    // "Make elements visible"
    triggerMakeQuestionsVisible: "Сделать элементы видимыми",
    // "Complete the survey if successful."
    triggerCompleteText: "Завершить опрос, если все получися.",
    // "The trigger is not set"
    triggerNotSet: "Тригер не установлен",
    // "Run if"
    triggerRunIf: "Начать, если",
    // "Change value of: "
    triggerSetToName: "Изменить значение",
    // "Copy value from: "
    triggerFromName: "Скопировать значение из",
    // "Run this Expression"
    triggerRunExpression: "Выполнить это выражение",
    // "to: "
    triggerSetValue: "в",
    // "Go to the question"
    triggerGotoName: "Перейти к вопросу",
    // "Do not put the variable into the survey result."
    triggerIsVariable: "Не помещать переменную в результат опросника.",
    // "Please enter a valid expression"
    triggerRunExpressionEmpty: "Пожалуйста, введите корректное выражение",
    // [Auto-translated] "Type expression here..."
    emptyExpressionPlaceHolder: "Введите выражение здесь...",
    // [Auto-translated] "No file chosen"
    noFile: "Файл не выбран",
    // [Auto-translated] "Clear hidden question values"
    clearIfInvisible: "Очистка скрытых значений вопросов",
    // [Auto-translated] "Store values in the following property"
    valuePropertyName: "Храните значения в следующем свойстве",
    // [Auto-translated] "Enable search-as-you-type"
    searchEnabled: "Включение поиска по мере ввода",
    // [Auto-translated] "Hide selected items"
    hideSelectedItems: "Скрытие выбранных элементов",
    // [Auto-translated] "Collapse the dropdown upon selection"
    closeOnSelect: "Сворачивание раскрывающегося списка при выборе",
    // [Auto-translated] "Vertical alignment within cells"
    verticalAlign: "Вертикальное выравнивание внутри ячеек",
    // [Auto-translated] "Alternate row colors"
    alternateRows: "Чередование цветов строк",
    // [Auto-translated] "Make columns visible if"
    columnsVisibleIf: "Сделать столбцы видимыми, если",
    // [Auto-translated] "Make rows visible if"
    rowsVisibleIf: "Сделайте строки видимыми, если",
    // [Auto-translated] "Placeholder text for the comment box"
    otherPlaceholder: "Замещающий текст для поля комментария",
    // [Auto-translated] "Placeholder text for Local file"
    filePlaceholder: "Замещающий текст для локального файла",
    // [Auto-translated] "Placeholder text for Camera"
    photoPlaceholder: "Замещающий текст для камеры",
    // [Auto-translated] "Placeholder text for Local file or Camera"
    fileOrPhotoPlaceholder: "Замещающий текст для локального файла или камеры",
    // [Auto-translated] "Rating icon"
    rateType: "Иконка рейтинга",
    // [Auto-translated] "Ex.: https://api.example.com/books"
    url_placeholder: "Пример: https://api.example.com/books",
    // [Auto-translated] "Ex.: categories.fiction"
    path_placeholder: "Пример: categories.fiction",
    // [Auto-translated] "Ex.: a)"
    questionStartIndex_placeholder: "Пример: а)",
    // [Auto-translated] "Ex.: 6in"
    width_placeholder: "Пример: 6 дюймов",
    // [Auto-translated] "Ex.: 600px"
    minWidth_placeholder: "Пример: 600px",
    // [Auto-translated] "Ex.: 50%"
    maxWidth_placeholder: "Пример: 50%",
    // "auto"
    imageHeight_placeholder: "Авто",
    // "auto"
    imageWidth_placeholder: "Авто",
    // [Auto-translated] "Ex.: 100px"
    itemTitleWidth_placeholder: "Пример: 100px",
    theme: {
      // [Auto-translated] "Theme"
      themeName: "Тема",
      // [Auto-translated] "Question appearance"
      isPanelless: "Внешний вид вопроса",
      // [Auto-translated] "Background and corner radius"
      editorPanel: "Фон и радиус угла",
      // [Auto-translated] "Background and corner radius"
      questionPanel: "Фон и радиус угла",
      // [Auto-translated] "Accent color"
      primaryColor: "Акцентный цвет",
      // [Auto-translated] "Panel and question box opacity"
      panelBackgroundTransparency: "Непрозрачность панели и поля вопросов",
      // [Auto-translated] "Input element opacity"
      questionBackgroundTransparency: "Непрозрачность входного элемента",
      // [Auto-translated] "Survey font size"
      fontSize: "Размер шрифта опроса",
      // [Auto-translated] "Survey scale factor"
      scale: "Масштабный коэффициент съемки",
      // [Auto-translated] "Corner radius"
      cornerRadius: "Радиус закругления угла",
      // [Auto-translated] "Advanced mode"
      advancedMode: "Расширенный режим",
      // [Auto-translated] "Title font"
      pageTitle: "Шрифт заголовка",
      // [Auto-translated] "Description font"
      pageDescription: "Описание шрифта",
      // [Auto-translated] "Title font"
      questionTitle: "Шрифт заголовка",
      // [Auto-translated] "Description font"
      questionDescription: "Описание шрифта",
      // [Auto-translated] "Font"
      editorFont: "Шрифт",
      // [Auto-translated] "Opacity"
      backgroundOpacity: "Непрозрачность", // Auto-generated string
      // [Auto-translated] "Survey font family"
      "--sjs-font-family": "Семейство шрифтов Survey",
      // [Auto-translated] "Background color"
      "--sjs-general-backcolor-dim": "Цвет фона",
      // [Auto-translated] "Accent background colors"
      "--sjs-primary-backcolor": "Акцентные цвета фона",
      // [Auto-translated] "Accent foreground colors"
      "--sjs-primary-forecolor": "Акцентные цвета переднего плана",
      // [Auto-translated] "Error message colors"
      "--sjs-special-red": "Цвета сообщений об ошибках",
      // [Auto-translated] "Shadow effects"
      "--sjs-shadow-small": "Эффекты теней",
      // [Auto-translated] "Shadow effects"
      "--sjs-shadow-inner": "Эффекты теней",
      // [Auto-translated] "Colors"
      "--sjs-border-default": "Знамя"
    },
    "header@header": {
      // [Auto-translated] "View"
      headerView: "Вид",
      // [Auto-translated] "Logo alignment"
      logoPosition: "Выравнивание логотипа",
      // [Auto-translated] "Survey title font"
      surveyTitle: "Шрифт заголовка опроса",
      // [Auto-translated] "Survey description font"
      surveyDescription: "Шрифт описания опроса",
      // [Auto-translated] "Survey title font"
      headerTitle: "Шрифт заголовка опроса",
      // [Auto-translated] "Survey description font"
      headerDescription: "Шрифт описания опроса",
      // [Auto-translated] "Content area width"
      inheritWidthFrom: "Ширина области содержимого",
      // [Auto-translated] "Text width"
      textAreaWidth: "Ширина текста",
      // [Auto-translated] "Background color"
      backgroundColorSwitch: "Цвет фона",
      // [Auto-translated] "Background image"
      backgroundImage: "Фоновое изображение",
      // [Auto-translated] "Opacity"
      backgroundImageOpacity: "Непрозрачность",
      // [Auto-translated] "Overlap"
      overlapEnabled: "Перекрытие",
      // [Auto-translated] "Logo alignment"
      logoPositionX: "Выравнивание логотипа",
      // [Auto-translated] "Survey title alignment"
      titlePositionX: "Выравнивание заголовка опроса",
      // [Auto-translated] "Survey description alignment"
      descriptionPositionX: "Выравнивание описания съемки"
    }
  },
  // Property values
  pv: {
    // [Auto-translated] "true"
    "true": "истинный",
    // [Auto-translated] "false"
    "false": "ложный",
    // [Auto-translated] "Local file"
    file: "Локальный файл",
    // [Auto-translated] "Camera"
    camera: "Камера",
    // [Auto-translated] "Local file or Camera"
    "file-camera": "Локальный файл или камера",
    // "Inherit"
    inherit: "Наследовать",
    // "Visible"
    show: "Показать",
    // "Hidden"
    hide: "Скрыть",
    // "Inherit"
    default: "По умолчанию",
    // "Initial"
    initial: "Изначальный порядок",
    // "Random"
    random: "Случайный порядок",
    // "Collapsed"
    collapsed: "Прерван",
    // "Expanded"
    expanded: "Расширен",
    // "None"
    none: "Нет",
    // "Ascending"
    asc: "По возрастанию",
    // "Descending"
    desc: "По убыванию",
    // "Indeterminate"
    indeterminate: "Неопределенный",
    // [Auto-translated] "Selected"
    selected: "Выбранный",
    // [Auto-translated] "Unselected"
    unselected: "Невыбранных",
    // [Auto-translated] "decimal"
    decimal: "десятичный",
    // [Auto-translated] "currency"
    currency: "валюта",
    // [Auto-translated] "percent"
    percent: "процент",
    // "First panel is expanded"
    firstExpanded: "Расширен первый",
    // "Hide question numbers"
    off: "Выключить",
    // "List"
    list: "Список",
    // [Auto-translated] "Carousel"
    carousel: "Карусель",
    // [Auto-translated] "Tabs"
    tab: "Вкладки",
    // "Panel navigator + Progress bar at the top"
    progressTop: "progressTop",
    // "Panel navigator + Progress bar at the bottom"
    progressBottom: "progressBottom",
    // "Panel navigator + Progress bar at the top and bottom"
    progressTopBottom: "progressTopBottom",
    // "Horizontal"
    horizontal: "Горизонтально",
    // "Vertical"
    vertical: "Вертикально",
    // "Top"
    top: "Сверху",
    // "Bottom"
    bottom: "Снизу",
    // "Top and bottom"
    topBottom: "Сверху и снизу",
    // [Auto-translated] "Both"
    both: "Оба",
    // "Left"
    left: "Слева",
    // [Auto-translated] "Right"
    right: "Правильно",
    // [Auto-translated] "Center"
    center: "Центр",
    // [Auto-translated] "Left and right"
    leftRight: "Влево и вправо",
    // [Auto-translated] "Middle"
    middle: "Середина",
    // [Auto-translated] "color"
    color: "Цвет",
    // [Auto-translated] "date"
    date: "дата",
    // [Auto-translated] "datetime"
    datetime: "ДатаТайм",
    // [Auto-translated] "datetime-local"
    "datetime-local": "datetime-local",
    // [Auto-translated] "email"
    email: "Отправить по электронной почте",
    // [Auto-translated] "month"
    month: "месяц",
    // [Auto-translated] "number"
    number: "число",
    // [Auto-translated] "password"
    password: "пароль",
    // [Auto-translated] "range"
    range: "диапазон",
    // [Auto-translated] "tel"
    tel: "Тель",
    // [Auto-translated] "text"
    text: "СМС",
    // [Auto-translated] "time"
    time: "Время",
    // [Auto-translated] "url"
    url: "URL-адрес",
    // [Auto-translated] "week"
    week: "неделя",
    // "Hidden"
    hidden: "Скрыт",
    // "Editable"
    edit: "Редактирование",
    // "Read-only"
    display: "Просмотр",
    // [Auto-translated] "Contain"
    contain: "Содержать",
    // [Auto-translated] "Cover"
    cover: "Крышка",
    // [Auto-translated] "Fill"
    fill: "Заполнять",
    // [Auto-translated] "Next"
    next: "Следующий",
    // [Auto-translated] "Last"
    last: "Последний",
    // "Upon survey completion"
    onComplete: "По завершению",
    // "When question gets hidden"
    onHidden: "По скрытию",
    // [Auto-translated] "When question or its panel/page gets hidden"
    onHiddenContainer: "Когда вопрос или его панель/страница скрывается",
    clearInvisibleValues: {
      // [Auto-translated] "Never"
      none: "Никогда"
    },
    clearIfInvisible: {
      // [Auto-translated] "Never"
      none: "Никогда"
    },
    // [Auto-translated] "Radio Buttons"
    radio: "Переключатели",
    inputType: {
      // [Auto-translated] "Color"
      color: "Цвет",
      // [Auto-translated] "Date"
      date: "Дата",
      // [Auto-translated] "Date and Time"
      "datetime-local": "Дата и время",
      // [Auto-translated] "Email"
      email: "Отправить по электронной почте",
      // [Auto-translated] "Month"
      month: "Месяц",
      // [Auto-translated] "Number"
      number: "Число",
      // [Auto-translated] "Password"
      password: "Пароль",
      // [Auto-translated] "Range"
      range: "Диапазон",
      // [Auto-translated] "Phone Number"
      tel: "Номер телефона",
      // [Auto-translated] "Text"
      text: "СМС",
      // [Auto-translated] "Time"
      time: "Время",
      // [Auto-translated] "URL"
      url: "URL-адрес",
      // [Auto-translated] "Week"
      week: "Неделя"
    },
    sliderType: {
      // [Auto-translated] "Single-Value"
      single: "Однозначный",
      // [Auto-translated] "Range"
      range: "Диапазон"
    },
    tooltipVisibility: {
      // [Auto-translated] "Auto"
      auto: "Авто",
      // [Auto-translated] "Always"
      always: "Всегда",
      // [Auto-translated] "Never"
      never: "Никогда"
    },
    notificationType: {
      // [Auto-translated] "Error"
      error: "Ошибка",
      // [Auto-translated] "Warning"
      warning: "Предупреждение",
      // [Auto-translated] "Informational"
      info: "Информационный"
    },
    autocomplete: {
      // [Auto-translated] "Full Name"
      name: "Полное имя",
      // [Auto-translated] "Prefix"
      "honorific-prefix": "Приставка",
      // [Auto-translated] "First Name"
      "given-name": "Имя",
      // [Auto-translated] "Middle Name"
      "additional-name": "Отчество",
      // [Auto-translated] "Last Name"
      "family-name": "Фамилия",
      // [Auto-translated] "Suffix"
      "honorific-suffix": "Суффикс",
      // [Auto-translated] "Nickname"
      nickname: "Прозвище",
      // [Auto-translated] "Job Title"
      "organization-title": "Должность",
      // [Auto-translated] "User Name"
      username: "Имя пользователя",
      // [Auto-translated] "New Password"
      "new-password": "Новый пароль",
      // [Auto-translated] "Current Password"
      "current-password": "Текущий пароль",
      // [Auto-translated] "Organization Name"
      organization: "Название организации",
      // [Auto-translated] "Full Street Address"
      "street-address": "Полный адрес улицы",
      // [Auto-translated] "Address Line 1"
      "address-line1": "Адресная строка 1",
      // [Auto-translated] "Address Line 2"
      "address-line2": "Адресная строка 2",
      // [Auto-translated] "Address Line 3"
      "address-line3": "Адресная строка 3",
      // [Auto-translated] "Level 4 Address"
      "address-level4": "Адрес 4-го уровня",
      // [Auto-translated] "Level 3 Address"
      "address-level3": "Адрес 3-го уровня",
      // [Auto-translated] "Level 2 Address"
      "address-level2": "Адрес 2-го уровня",
      // [Auto-translated] "Level 1 Address"
      "address-level1": "Адрес 1-го уровня",
      // [Auto-translated] "Country Code"
      country: "Код страны",
      // [Auto-translated] "Country Name"
      "country-name": "Название страны",
      // [Auto-translated] "Postal Code"
      "postal-code": "Почтовый индекс",
      // [Auto-translated] "Cardholder Name"
      "cc-name": "Имя владельца карты",
      // [Auto-translated] "Cardholder First Name"
      "cc-given-name": "Имя владельца карты",
      // [Auto-translated] "Cardholder Middle Name"
      "cc-additional-name": "Второе имя владельца карты",
      // [Auto-translated] "Cardholder Last Name"
      "cc-family-name": "Фамилия владельца карты",
      // [Auto-translated] "Credit Card Number"
      "cc-number": "Номер кредитной карты",
      // [Auto-translated] "Expiration Date"
      "cc-exp": "Срок годности",
      // [Auto-translated] "Expiration Month"
      "cc-exp-month": "Срок действия",
      // [Auto-translated] "Expiration Year"
      "cc-exp-year": "Год экспирации",
      // [Auto-translated] "Card Security Code"
      "cc-csc": "Код безопасности карты",
      // [Auto-translated] "Credit Card Type"
      "cc-type": "Тип кредитной карты",
      // [Auto-translated] "Transaction Currency"
      "transaction-currency": "Валюта транзакции",
      // [Auto-translated] "Transaction Amount"
      "transaction-amount": "Сумма транзакции",
      // [Auto-translated] "Preferred Language"
      language: "Предпочитаемый язык",
      // [Auto-translated] "Birthday"
      bday: "День рождения",
      // [Auto-translated] "Birthday Day"
      "bday-day": "День рождения",
      // [Auto-translated] "Birthday Month"
      "bday-month": "Месяц Дня Рождения",
      // [Auto-translated] "Birthday Year"
      "bday-year": "Год рождения",
      // [Auto-translated] "Gender"
      sex: "Род",
      // [Auto-translated] "Website URL"
      url: "URL-адрес сайта",
      // [Auto-translated] "Profile Photo"
      photo: "Фото профиля",
      // [Auto-translated] "Telephone Number"
      tel: "Номер телефона",
      // [Auto-translated] "Country Code for Phone"
      "tel-country-code": "Код страны для телефона",
      // [Auto-translated] "National Telephone Number"
      "tel-national": "Национальный номер телефона",
      // [Auto-translated] "Area Code"
      "tel-area-code": "Код города",
      // [Auto-translated] "Local Phone Number"
      "tel-local": "Местный номер телефона",
      // [Auto-translated] "Local Phone Prefix"
      "tel-local-prefix": "Префикс местного телефона",
      // [Auto-translated] "Local Phone Suffix"
      "tel-local-suffix": "Суффикс местного телефона",
      // [Auto-translated] "Phone Extension"
      "tel-extension": "Добавочный номер телефона",
      // [Auto-translated] "Email Address"
      email: "Адрес электронной почты",
      // [Auto-translated] "Instant Messaging Protocol"
      impp: "Протокол обмена мгновенными сообщениями"
    },
    maskType: {
      // [Auto-translated] "None"
      none: "Никакой",
      // [Auto-translated] "Pattern"
      pattern: "Рисунок",
      // [Auto-translated] "Numeric"
      numeric: "Числовой",
      // [Auto-translated] "Date and Time"
      datetime: "Дата и время",
      // [Auto-translated] "Currency"
      currency: "Валюта"
    },
    inputTextAlignment: {
      // [Auto-translated] "Auto"
      auto: "Авто",
      // [Auto-translated] "Left"
      left: "Слева",
      // [Auto-translated] "Right"
      right: "Справа"
    },
    // "All"
    all: "Все",
    // "Page"
    page: "Страница",
    // "Survey"
    survey: "Опрос",
    // "When switching to the next page"
    onNextPage: "При переходе на следующую страницу",
    // "After an answer is changed"
    onValueChanged: "При изменении значения",
    // [Auto-translated] "Before an answer is changed"
    onValueChanging: "Прежде чем ответ будет изменен",
    questionsOnPageMode: {
      // [Auto-translated] "Original structure"
      standard: "Оригинальная структура",
      // [Auto-translated] "Show all questions on one page"
      singlePage: "Показать все вопросы на одной странице",
      // [Auto-translated] "Show single question per page"
      questionPerPage: "Показывать один вопрос на странице",
      // [Auto-translated] "Show single input field per page"
      inputPerPage: "Показывать одно поле ввода на странице"
    },
    // [Auto-translated] "No preview"
    noPreview: "Без предварительного просмотра",
    // [Auto-translated] "Show all questions"
    showAllQuestions: "Показать все вопросы",
    // [Auto-translated] "Show answered questions only"
    showAnsweredQuestions: "Показывать только ответы на вопросы",
    // [Auto-translated] "Show all questions"
    allQuestions: "Показать все вопросы",
    // [Auto-translated] "Show answered questions only"
    answeredQuestions: "Показать только отвеченные вопросы",
    // [Auto-translated] "Completed pages"
    pages: "Заполненные страницы",
    // [Auto-translated] "Answered questions"
    questions: "Ответы на вопросы",
    // [Auto-translated] "Answered required questions"
    requiredQuestions: "Ответы на необходимые вопросы",
    // [Auto-translated] "Valid answers"
    correctQuestions: "Правильные ответы",
    // [Auto-translated] "Completed pages (button UI)"
    buttons: "Завершенные страницы (пользовательский интерфейс кнопки)",
    // [Auto-translated] "Under the input field"
    underInput: "Под полем ввода",
    // [Auto-translated] "Under the question title"
    underTitle: "Под заголовком вопроса",
    // [Auto-translated] "On lost focus"
    onBlur: "О потере фокуса",
    // [Auto-translated] "While typing"
    onTyping: "При наборе текста",
    // [Auto-translated] "Under the row"
    underRow: "Под строкой",
    // [Auto-translated] "Under the row, display one section only"
    underRowSingle: "Под строкой отображается только один раздел",
    // "Auto"
    auto: "Авто",
    timerInfoMode: {
      // "Both"
      combined: "Оба"
    },
    addRowButtonLocation: {
      // [Auto-translated] "Based on matrix layout"
      default: "На основе макета матрицы"
    },
    panelsState: {
      // [Auto-translated] "Locked"
      default: "Запертый",
      // [Auto-translated] "Collapse all"
      collapsed: "Свернуть все",
      // [Auto-translated] "Expand all"
      expanded: "Развернуть все",
      // [Auto-translated] "First expanded"
      firstExpanded: "Первый расширенный"
    },
    widthMode: {
      // [Auto-translated] "Static"
      static: "Статический",
      // [Auto-translated] "Responsive"
      responsive: "Отзывчивый"
    },
    contentMode: {
      // [Auto-translated] "Image"
      image: "Образ",
      // [Auto-translated] "Video"
      video: "Видео",
      // [Auto-translated] "YouTube"
      youtube: "Ютуб"
    },
    displayMode: {
      // [Auto-translated] "Buttons"
      buttons: "Кнопки",
      // [Auto-translated] "Dropdown"
      dropdown: "Выпадающий список"
    },
    rateColorMode: {
      // [Auto-translated] "Default"
      default: "По умолчанию",
      // [Auto-translated] "Scale"
      scale: "Шкала"
    },
    scaleColorMode: {
      // [Auto-translated] "Monochrome"
      monochrome: "Монохромный",
      // [Auto-translated] "Colored"
      colored: "Цветной"
    },
    autoGenerate: {
      // [Auto-translated] "Auto-generate"
      "true": "Автогенерация",
      // [Auto-translated] "Manual"
      "false": "Вручную"
    },
    rateType: {
      // [Auto-translated] "Labels"
      labels: "Метки",
      // [Auto-translated] "Stars"
      stars: "Звезды",
      // [Auto-translated] "Smileys"
      smileys: "Смайлики"
    },
    state: {
      // [Auto-translated] "Locked"
      default: "Запертый"
    },
    showQuestionNumbers: {
      // [Auto-translated] "Auto-numbering"
      default: "Автоматическая нумерация",
      // [Auto-translated] "Auto-numbering"
      on: "Автоматическая нумерация",
      // [Auto-translated] "Reset on each page"
      onPage: "Сброс на каждой странице",
      // [Auto-translated] "Reset on each panel"
      onpanel: "Сброс на каждой панели",
      // [Auto-translated] "Reset on each panel"
      onPanel: "Сброс на каждой панели",
      // [Auto-translated] "Recursive numbering"
      recursive: "Рекурсивная нумерация",
      // [Auto-translated] "Continue across the survey"
      onSurvey: "Продолжить опрос",
      // [Auto-translated] "No numbering"
      off: "Без нумерации"
    },
    descriptionLocation: {
      // [Auto-translated] "Under the question title"
      underTitle: "Под заголовком вопроса",
      // [Auto-translated] "Under the input field"
      underInput: "Под полем ввода"
    },
    selectToRankAreasLayout: {
      // [Auto-translated] "Next to choices"
      horizontal: "Рядом с вариантами выбора",
      // [Auto-translated] "Above choices"
      vertical: "Вышеуказанные варианты"
    },
    displayStyle: {
      // [Auto-translated] "Decimal"
      decimal: "Десятичный",
      // [Auto-translated] "Currency"
      currency: "Валюта",
      // [Auto-translated] "Percentage"
      percent: "Процент",
      // [Auto-translated] "Date"
      date: "Дата"
    },
    totalDisplayStyle: {
      // [Auto-translated] "Decimal"
      decimal: "Десятичный",
      // [Auto-translated] "Currency"
      currency: "Валюта",
      // [Auto-translated] "Percentage"
      percent: "Процент",
      // [Auto-translated] "Date"
      date: "Дата"
    },
    rowOrder: {
      // [Auto-translated] "Original"
      initial: "Исходный текст"
    },
    questionOrder: {
      // [Auto-translated] "Original"
      initial: "Исходный текст"
    },
    progressBarLocation: {
      // [Auto-translated] "Top"
      top: "Вверх",
      // [Auto-translated] "Bottom"
      bottom: "Низ",
      // [Auto-translated] "Top and bottom"
      topbottom: "Верх и низ",
      // [Auto-translated] "Above the header"
      aboveheader: "Над заголовком",
      // [Auto-translated] "Below the header"
      belowheader: "Под заголовком",
      // [Auto-translated] "Hidden"
      off: "Скрытый"
    },
    // [Auto-translated] "Sum"
    sum: "Сумма",
    // [Auto-translated] "Count"
    count: "Считать",
    // [Auto-translated] "Min"
    min: "Мин",
    // [Auto-translated] "Max"
    max: "Макс",
    // [Auto-translated] "Avg"
    avg: "Средняя",
    searchMode: {
      // [Auto-translated] "Contains"
      contains: "Содержит",
      // [Auto-translated] "Starts with"
      startsWith: "Начинается с"
    },
    backgroundImageFit: {
      // [Auto-translated] "Auto"
      auto: "Авто",
      // [Auto-translated] "Cover"
      cover: "Заполнение",
      // [Auto-translated] "Contain"
      contain: "По размеру",
      // [Auto-translated] "Stretch"
      fill: "Растянуть",
      // [Auto-translated] "Tile"
      tile: "Замостить"
    },
    backgroundImageAttachment: {
      // [Auto-translated] "Fixed"
      fixed: "Зафиксировать",
      // [Auto-translated] "Scroll"
      scroll: "Прокручивать"
    },
    headerView: {
      // [Auto-translated] "Basic"
      basic: "Основной",
      // [Auto-translated] "Advanced"
      advanced: "Продвинутый"
    },
    inheritWidthFrom: {
      // [Auto-translated] "Same as survey"
      survey: "То же, что и опрос",
      // [Auto-translated] "Same as container"
      container: "То же, что и контейнер"
    },
    backgroundColorSwitch: {
      // [Auto-translated] "None"
      none: "Никакой",
      // [Auto-translated] "Accent color"
      accentColor: "Акцентный цвет",
      // [Auto-translated] "Custom"
      custom: "Обычай"
    },
    colorPalette: {
      // [Auto-translated] "Light"
      light: "Свет",
      // [Auto-translated] "Dark"
      dark: "Темный"
    },
    isPanelless: {
      // [Auto-translated] "Default"
      "false": "По умолчанию",
      // [Auto-translated] "Without Panels"
      "true": "Без панелей"
    },
    progressBarInheritWidthFrom: {
      // [Auto-translated] "Same as survey"
      survey: "То же, что и опрос",
      // [Auto-translated] "Same as container"
      container: "То же, что и контейнер"
    }
  },
  // Operators
  op: {
    // "Empty"
    empty: "не заполнено",
    // "Not empty"
    notempty: "заполнено",
    // "Equals"
    equal: "равно",
    // "Does not equal"
    notequal: "не равно",
    // "Contains"
    contains: "содержит",
    // "Does not contain"
    notcontains: "не содержит",
    // "Any of"
    anyof: "любой из",
    // "All of"
    allof: "все из",
    // "Greater than"
    greater: "больше",
    // "Less than"
    less: "меньше",
    // "Greater than or equal to"
    greaterorequal: "больше или равно",
    // "Less than or equal to"
    lessorequal: "меньше или равно",
    // [Auto-translated] "and"
    and: "и",
    // [Auto-translated] "or"
    or: "или"
  },
  // Embed window
  ew: {
    // "Use Angular version"
    angular: "Используйте версию Angular",
    // "Use jQuery version"
    jquery: "Используйте версию jQuery",
    // "Use Knockout version"
    knockout: "Используйте версию Knockout",
    // "Use React version"
    react: "Используйте версию React",
    // "Use Vue version"
    vue: "Используйте версию Vue",
    // "For bootstrap framework"
    bootstrap: "Для библиотеки bootstrap",
    // [Auto-translated] "Modern theme"
    modern: "Современная тема",
    // [Auto-translated] "Default theme"
    default: "Тема по умолчанию",
    // [Auto-translated] "Orange theme"
    orange: "Оранжевая тема",
    // [Auto-translated] "Darkblue theme"
    darkblue: "Темно-синяя тема",
    // "Darkrose theme"
    darkrose: "Тема \"Темная роза\"",
    // [Auto-translated] "Stone theme"
    stone: "Тема «Камень»",
    // [Auto-translated] "Winter theme"
    winter: "Зимняя тематика",
    // "Winter-Stone theme"
    winterstone: "Тема \"Зимний камень\"",
    // "Show survey on a page"
    showOnPage: "Показывать опросник на странице",
    // "Show survey in a window"
    showInWindow: "Показывать опросник в модальном окне",
    // "Load Survey JSON from server"
    loadFromServer: "Загрузить Json опросника с сервера",
    // "Scripts and styles"
    titleScript: "Скрипты и стили",
    // "HTML"
    titleHtml: "HTML",
    // "JavaScript"
    titleJavaScript: "JavaScript"
  },
  // Preview (Survey)
  ts: {
    // "Select the page to test it"
    selectPage: "Выберите страницу, чтобы проверить это",
    // "Show invisible elements"
    showInvisibleElements: "Показывать скрытые элементы",
    // [Auto-translated] "Hide invisible elements"
    hideInvisibleElements: "Скрыть невидимые элементы",
    // [Auto-translated] "Previous"
    prevPage: "Предыдущий",
    // [Auto-translated] "Next"
    nextPage: "Следующий"
  },
  validators: {
    // "Answer count"
    answercountvalidator: "Количество ответов",
    // [Auto-translated] "Email"
    emailvalidator: "Отправить по электронной почте",
    // "Expression"
    expressionvalidator: "Выражение",
    // "Number"
    numericvalidator: "Число",
    // "Regex"
    regexvalidator: "Регулярное выражение",
    // "Text"
    textvalidator: "Текст"
  },
  triggers: {
    // "Complete survey"
    completetrigger: "Завершить опрос",
    // "Set answer"
    setvaluetrigger: "Установить значение",
    // "Copy answer"
    copyvaluetrigger: "Скопировать значение",
    // "Skip to question"
    skiptrigger: "Перейти к вопросу",
    // "Run expression"
    runexpressiontrigger: "Запустить выражение",
    // "change visibility (deprecated)"
    visibletrigger: "Изменить видимость (не рекомендуется)"
  },
  peplaceholder: {
    patternmask: {
      // "Ex.: +1(999)-999-99-99"
      pattern: "Пример: +1(999)-999-99-99"
    },
    datetimemask: {
      // [Auto-translated] "Ex.: mm/dd/yyyy HH:MM:ss"
      pattern: "Пример: мм/дд/гггг чч:мм:сс"
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
      name: "Идентификатор панели, который не виден респондентам.",
      // [Auto-translated] "Type a panel subtitle."
      description: "��ведите панельный субтитр.",
      // "Use the magic wand icon to set a conditional rule that determines panel visibility."
      visibleIf: "Используйте значок волшебной палочки, чтобы задать условное правило, определяющее видимость панели.",
      // [Auto-translated] "Use the magic wand icon to set a conditional rule that disables the read-only mode for the panel."
      enableIf: "Используйте значок волшебной палочки, чтобы задать условное правило, которое отключает режим только для чтения для панели.",
      // "Use the magic wand icon to set a conditional rule that prevents survey submission unless at least one nested question has an answer."
      requiredIf: "Используйте значок волшебной палочки, чтобы задать условное правило, которое запрещает отправку опроса, если хотя бы один вложенный вопрос не содержит ответа.",
      // [Auto-translated] "Applies to all questions within this panel. When set to \"Hidden\", it also hides question descriptions. If you want to override this setting, define title alignment rules for individual questions. The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Top\" by default). "
      questionTitleLocation: "Относится ко всем вопросам в рамках этой панели. Если установлено значение \"Скрыто\", он также скрывает описания вопросов. Если вы хотите переопределить этот параметр, определите правила выравнивания заголовков для отдельных вопросов. Опция «Наследовать» применяет настройку на уровне страницы (если задана) или на уровне опроса («Вверх» по умолчанию). ",
      // [Auto-translated] "Sets consistent width for question titles when they are aligned to the left of their question boxes. Accepts CSS values (px, %, in, pt, etc.)."
      questionTitleWidth: "Задает одинаковую ширину заголовков вопросов, если они выровнены по левому краю полей вопросов. Принимает значения CSS (px, %, in, pt и т. д.).",
      // "Sets the location of an error message in relation to all questions within the panel. The \"Inherit\" option applies the page-level (if set) or survey-level setting."
      questionErrorLocation: "Задает расположение сообщения об ошибке по отношению ко всем вопросам на панели. Опция «Наследовать» применяет настройку на уровне страницы (если задано) или на уровне опроса.",
      // [Auto-translated] "Keeps the original order of questions or randomizes them. The \"Inherit\" option applies the page-level (if set) or survey-level setting."
      questionOrder: "Сохраняет исходный порядок вопросов или рандомизирует их. Опция \"Наследовать\" применяет настройку на уровне страницы (если задана) или на уровне опроса.",
      // "Repositions the panel to the end of a selected page."
      page: "Перемещает панель в конец выбранной страницы.",
      // [Auto-translated] "Adds space or margin between the panel content and the left border of the panel box."
      innerIndent: "Добавляет пространство или поле между содержимым панели и левой границей рамки панели.",
      // "Unselect to display the panel in one line with the previous question or panel. The setting doesn't apply if the panel is the first element in your form."
      startWithNewLine: "Снимите флажок, чтобы отобразить панель в одной строке с предыдущим вопросом или панелью. Этот параметр не применяется, если панель является первым элементом формы.",
      // "Choose from: \"Expanded\" - the panel is displayed in full and can be collapsed; \"Collapsed\" - the panel displays only the title and description and can be expanded; \"Locked\" - the panel is displayed in full and cannot be collapsed."
      state: "Выберите из: «Развернутая» - панель отображается полностью и может быть свернута; «Свернутая» - панель отображает только заголовок и описание и может быть развернута; «Заблокировано» - панель отображается полностью и не может быть свернута.",
      // [Auto-translated] "Sets the width of the panel in proportion to other survey elements in the same line. Accepts CSS values (px, %, in, pt, etc.)."
      width: "Задает ширину панели пропорционально другим элементам съемки на той же линии. Принимает значения CSS (px, %, in, pt и т.д.).",
      // [Auto-translated] "Assigns numbers to questions nested within this panel."
      showQuestionNumbers: "Присваивает номера вопросам, вложенным в эту панель.",
      // [Auto-translated] "Specifies how many columns this panel spans within the grid layout."
      effectiveColSpan: "Указывает, сколько столбцов занимает эта панель в макете сетки.",
      // [Auto-translated] "This table lets you configure each grid column within the panel. It automatically sets the width percentage for each column based on the maximum number of elements in a row. To customize the grid layout, manually adjust these values and define the title width for all questions in each column."
      gridLayoutColumns: "В этой таблице можно настроить каждый столбец сетки на панели. Он автоматически устанавливает процент ширины для каждого столбца в зависимости от максимального количества элементов в строке. Чтобы настроить макет сетки, вручную настройте эти значения и определите ширину заголовка для всех вопросов в каждом столбце."
    },
    paneldynamic: {
      // "A panel ID that is not visible to respondents."
      name: "Идентификатор панели, который не виден респондентам.",
      // "Type a panel subtitle."
      description: "Введите субтитры панели.",
      // "Use the magic wand icon to set a conditional rule that determines panel visibility."
      visibleIf: "Используйте значок волшебной палочки, чтобы задать условное правило, определяющее видимость панели.",
      // [Auto-translated] "Use the magic wand icon to set a conditional rule that disables the read-only mode for the panel."
      enableIf: "Используйте значок волшебной палочки, чтобы задать условное правило, которое отключает режим только для чтения для панели.",
      // "Use the magic wand icon to set a conditional rule that prevents survey submission unless at least one nested question has an answer."
      requiredIf: "Используйте значок волшебной палочки, чтобы задать условное правило, которое запрещает отправку опроса, если хотя бы один вложенный вопрос не содержит ответа.",
      // "Applies to all questions within this dynamic panel. If you want to override this setting, define title alignment rules for individual questions. The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Top\" by default)."
      templateQuestionTitleLocation: "Применяется ко всем вопросам в этой панели. Если вы хотите переопределить этот параметр, определите правила выравнивания заголовков для отдельных вопросов. Опция «Наследовать» применяет настройку на уровне страницы (если задано) или на уровне опроса («Сверху» по умолчанию).",
      // "Sets consistent width for question titles when they are aligned to the left of their question boxes. Accepts CSS values (px, %, in, pt, etc.)."
      templateQuestionTitleWidth: "Устанавливает постоянную ширину заголовков вопросов, когда они выровнены по левому краю полей вопросов. Принимает значения CSS (px, %, in, pt и т.д.).",
      // "Sets the location of an error message in relation to a question with invalid input. Choose between: \"Top\" - an error text is placed at the top of the question box; \"Bottom\" - an error text is placed at the bottom of the question box. The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Top\" by default)."
      templateErrorLocation: "Задает расположение сообщения об ошибке по отношению к вопросу с недопустимыми входными данными. Выберите между: «Сверху» - текст ошибки размещается в верхней части поля вопроса; «Внизу» - текст ошибки размещается в нижней части окна вопроса. Опция «Наследовать» применяет настройку на уровне страницы (если задано) или на уровне опроса («Сверху» по умолчанию).",
      // "Sets the location of an error message in relation to all questions within the panel. The \"Inherit\" option applies the page-level (if set) or survey-level setting."
      errorLocation: "Задает расположение сообщения об ошибке по отношению ко всем вопросам на панели. Опция «Наследовать» применяет настройку на уровне страницы (если задано) или на уровне опроса.",
      // "Repositions the panel to the end of a selected page."
      page: "Перемещает панель в конец выбранной страницы.",
      // [Auto-translated] "Adds space or margin between the panel content and the left border of the panel box."
      indent: "Добавляет пространство или поле между содержимым панели и левой границей рамки панели.",
      // "Unselect to display the panel in one line with the previous question or panel. The setting doesn't apply if the panel is the first element in your form."
      startWithNewLine: "Снимите флажок, чтобы отобразить панель в одной строке с предыдущим вопросом или панелью. Этот параметр не применяется, если панель является первым элементом формы.",
      // "Choose from: \"Expanded\" - the panel is displayed in full and can be collapsed; \"Collapsed\" - the panel displays only the title and description and can be expanded; \"Locked\" - the panel is displayed in full and cannot be collapsed."
      state: "Выберите из: «Развернутая» - панель отображается полностью и может быть свернута; «Свернутая» - панель отображает только заголовок и описание и может быть развернута; «Заблокировано» - панель отображается полностью и не может быть свернута.",
      // "Sets the width of the panel in proportion to other survey elements in the same line. Accepts CSS values (px, %, in, pt, etc.)."
      width: "Устанавливает ширину панели пропорционально другим элементам съемки в той же линии. Принимает значения CSS (px, %, in, pt и т. д.).",
      // "Type in a template for entry titles. Use {panelIndex} for the entry's general position and {visiblePanelIndex} for its order among visible entries. Insert these placeholders into the pattern to add automatic numbering."
      templateTitle: "Введите шаблон для динамических заголовков панелей. Используйте {panelIndex} для общего положения панели и {visiblePanelIndex} для ее порядка среди видимых панелей. Вставьте эти заполнители в шаблон, чтобы добавить автоматическую нумерацию.",
      // "Type in a template for tab titles. Use {panelIndex} for an entry's general position and {visiblePanelIndex} for its order among visible entries. Insert these placeholders into the pattern to add automatic numbering."
      templateTabTitle: "Введите шаблон для заголовков вкладок. Используйте {panelIndex} для общего положения панели и {visiblePanelIndex} для ее порядка среди видимых панелей. Вставьте эти заполнители в шаблон, чтобы добавить автоматическую нумерацию.",
      // "A fallback text for tab titles that applies when the tab title pattern doesn't produce a meaningful value."
      tabTitlePlaceholder: "Резервный текст для заголовков вкладок, который применяется, когда шаблон заголовка вкладки не дает осмысленного значения.",
      // "This setting allows you to control the visibility of individual entries within the dynamic panel. Use the `{panel}` placeholder to reference the current entry in your expression."
      templateVisibleIf: "Этот параметр позволяет управлять видимостью отдельных панелей внутри динамической панели. Используйте заполнитель '{panel}' для ссылки на текущую панель в выражении.",
      // "This setting is automatically inherited by all questions within this dynamic panel. If you want to override this setting, define title alignment rules for individual questions. The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Top\" by default)."
      titleLocation: "Этот параметр автоматически наследуется всеми вопросами на этой панели. Если вы хотите переопределить этот параметр, определите правила выравнивания заголовков для отдельных вопросов. Опция «Наследовать» применяет настройку на уровне страницы (если задано) или на уровне опроса («Сверху» по умолчанию).",
      // "The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Under the panel title\" by default)."
      descriptionLocation: "Опция «Наследовать» применяет настройку на уровне страницы (если задано) или на уровне опроса («Под заголовком панели» по умолчанию).",
      // "Defines the position of a newly added entry. By default, new entries are added to the end. Select \"Next\" to insert a new entry after the current one."
      newPanelPosition: "Определяет положение вновь добавляемой панели. По умолчанию новые панели добавляются в конец. Выберите «Далее», чтобы вставить новую панель после текущей.",
      // [Auto-translated] "Duplicates answers from the last entry and assigns them to the next added entry."
      copyDefaultValueFromLastEntry: "Дублирует ответы из последней записи и присваивает их следующей добавленной записи.",
      // "Reference a question name to require a user to provide a unique response for this question in each entry."
      keyName: "Укажите имя вопроса, чтобы пользователь мог предоставить уникальный ответ на этот вопрос на каждой панели.",
      // [Auto-translated] "Triggers a confirmation prompt before removing an entry."
      confirmDelete: "Запускает запрос на подтверждение перед удалением записи.",
      // [Auto-translated] "Assigns numbers to questions nested within the dynamic panel."
      showQuestionNumbers: "Присваивает номера вопросам, вложенным в динамическую панель."
    },
    matrixdynamic: {
      // [Auto-translated] "Triggers a confirmation prompt before removing a row."
      confirmDelete: "Запускает запрос на подтверждение перед удалением строки.",
      // [Auto-translated] "Automatically expands the detail section when a new row is added to the matrix."
      detailPanelShowOnAdding: "Автоматически разворачивает раздел сведений при добавлении в матрицу новой строки."
    },
    // "Duplicates answers from the last row and assigns them to the next added dynamic row."
    copyDefaultValueFromLastEntry: "Дублирует ответы из последней строки и присваивает их следующей добавленной динамической строке.",
    // [Auto-translated] "This setting allows you to assign a default answer value based on an expression. The expression can include basic calculations - `{q1_id} + {q2_id}`, Boolean expressions, such as `{age} > 60`, and functions: `iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, etc. The value determined by this expression serves as the initial default value that can be overridden by a respondent's manual input."
    defaultValueExpression: "Этот параметр позволяет назначить значение ответа по умолчанию на основе выражения. Выражение может включать в себя базовые вычисления - '{q1_id} + {q2_id}', логические выражения, такие как '{age} > 60', и функции: 'iif()', 'today()', 'age()', 'min()', 'max()', 'avg()' и т.д. Значение, определяемое этим выражением, служит начальным значением по умолчанию, которое может быть переопределено ручным вводом респондентом.",
    // "Use the magic wand icon to set a conditional rule that determines when a respondent's input is reset to the value based on the \"Default value expression\" or \"Set value expression\" or to the \"Default answer\" value (if either is set)."
    resetValueIf: "Используйте значок волшебной палочки, чтобы задать условное правило, определяющее, когда входные данные респондента сбрасываются до значения, основанного на «Выражении значения по умолчанию» или «Выражении заданного значения» или на значении «Ответ по умолчанию» (если оно задано).",
    // "Use the magic wand icon to set a conditional rule that determines when to run the \"Set value expression\" and dynamically assign the resulting value as a response."
    setValueIf: "Используйте значок волшебной палочки, чтобы задать условное правило, которое определяет, когда запускать выражение «Задать значение» и динамически назначать полученное значение в качестве ответа.",
    // "Specify an expression that defines the value to be set when the conditions in the \"Set value if\" rule are met. The expression can include basic calculations - `{q1_id} + {q2_id}`, Boolean expressions, such as `{age} > 60`, and functions: `iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, etc. The value determined by this expression can be overridden by a respondent's manual input."
    setValueExpression: "Укажите выражение, определяющее значение, которое будет установлено при выполнении условий правила \"Задать значение если\". Выражение может включать в себя базовые вычисления - '{q1_id} + {q2_id}', логические выражения, такие как '{age} > 60', и функции: 'iif()', 'today()', 'age()', 'min()', 'max()', 'avg()' и т.д. Значение, определенное этим выражением, может быть переопределено ручным вводом респондента.",
    // "Survey Creator allows you to manually adjust the inline widths of form elements to control the layout. If this doesn't produce the desired outcome, you can enable the grid layout, which structures form elements using a column-based system. To configure layout columns, select a page or panel and use the \"Question Settings\" → \"Grid columns\" table. To adjust how many columns a question spans, select it and set the desired value in the \"Layout\" → \"Column span\" field."
    gridLayoutEnabled: "Survey Creator позволяет вручную настраивать встроенную ширину элементов формы для управления макетом. Если это не дает желаемого результата, вы можете включить макет сетки, который структурирует элементы с использованием системы на основе столбцов. Чтобы настроить макет столбцов, выберите страницу или панель и используйте таблицу «Настройки вопроса» → «Столбцы сетки». Чтобы настроить количество столбцов в вопросе, выберите его и установите нужное значение в полях «Макет» → «Диапазон столбцов».",
    question: {
      // "A question ID that is not visible to respondents."
      name: "Идентификатор вопроса, который не виден респондентам.",
      // "Type a question subtitle."
      description: "Введите подзаголовок вопроса.",
      // "Use the magic wand icon to set a conditional rule that determines question visibility."
      visibleIf: "Используйте значок волшебной палочки, чтобы задать условное правило, определяющее видимость вопроса.",
      // [Auto-translated] "Use the magic wand icon to set a conditional rule that disables the read-only mode for the question."
      enableIf: "Используйте значок волшебной палочки, чтобы задать условное правило, которое отключает режим только для чтения для вопроса.",
      // "Use the magic wand icon to set a conditional rule that prevents survey advancing or submission unless the question received an answer."
      requiredIf: "Используйте значок волшебной палочки, чтобы установить условное правило, которое запрещает продвижение или отправку опроса, если на вопрос не получен ответ.",
      // [Auto-translated] "Unselect to display the question in one line with the previous question or panel. The setting doesn't apply if the question is the first element in your form."
      startWithNewLine: "Снимите флажок, чтобы отобразить вопрос в одной строке с предыдущим вопросом или панелью. Настройка не применяется, если вопрос является первым элементом формы.",
      // "Repositions the question to the end of a selected page."
      page: "Перемещает вопрос в конец выбранной страницы.",
      // "Choose from: \"Expanded\" - the question box is displayed in full and can be collapsed; \"Collapsed\" - the question box displays only the title and description and can be expanded; \"Locked\" - the question box is displayed in full and cannot be collapsed."
      state: "Выберите один из вариантов: «Развернутый» - окно вопроса отображается полностью и может быть свернуто; «Свернутый» - поле вопроса отображает только заголовок и описание и может быть развернуто; «Заблокировано» - поле вопроса отображается полностью и не может быть свернуто.",
      // "Overrides title alignment rules defined on a panel, page, or survey level. When set to \"Hidden\", it also hides question descriptions. The \"Inherit\" option applies any higher-level settings (if set) or survey-level setting (\"Top\" by default)."
      titleLocation: "Переопределяет правила выравнивания заголовков, заданные на уровне панели, страницы или опроса. Опция «Наследовать» применяет любые настройки более высокого уровня (если они установлены) или настройки уровня опроса («Сверху» по умолчанию).",
      // "The \"Inherit\" option applies the survey-level setting (\"Under the question title\" by default)."
      descriptionLocation: "Опция «Наследовать» применяет настройку на уровне опроса (по умолчанию «Под заголовком вопроса»).",
      // "Sets the location of an error message in relation to the question with invalid input. Choose between: \"Top\" - an error text is placed at the top of the question box; \"Bottom\" - an error text is placed at the bottom of the question box. The \"Inherit\" option applies the survey-level setting (\"Top\" by default)."
      errorLocation: "Задает расположение сообщения об ошибке по отношению к вопросу с недопустимыми входными данными. Выберите между: «Сверху» - текст ошибки размещается в верхней части поля вопроса; «Внизу» - текст ошибки размещается в нижней части окна вопроса. Опция «Наследовать» применяет настройку уровня опроса («Сверху» по умолчанию).",
      // "Adds space or margin between the question content and the left border of the question box."
      indent: "Добавляет пробел или поле между содержимым вопроса и левой границей поля вопроса.",
      // "Sets the width of the question in proportion to other survey elements in the same line. Accepts CSS values (px, %, in, pt, etc.)."
      width: "Устанавливает ширину вопроса пропорционально другим элементам опроса в той же строке. Принимает значения CSS (px, %, in, pt и т. д.).",
      // "Choose from: \"On lost focus\" - the value is updated when the input field loses focus; \"While typing\" - the value is updated in real-time, as users are typing. The \"Inherit\" option applies the survey-level setting (\"On lost focus\" by default)."
      textUpdateMode: "Выберите из: \"При потере фокуса\" - значение обновляется при потере фокуса полем ввода; \"Во время набора\" - значение обновляется в режиме реального времени, по мере набора текста пользователями. Опция «Наследовать» применяет настройку на уровне опроса (по умолчанию «При потере фокуса»).",
      // [Auto-translated] "You can use any web service as a data source for multiple-choice questions. To populate choice values, enter the URL of the service providing the data."
      url: "Вы можете использовать любую веб-службу в качестве источника данных для вопросов с несколькими вариантами ответов. Чтобы заполнить значения выбора, введите URL-адрес службы, предоставляющей данные.",
      // [Auto-translated] "A comparison operation used to filter the drop-down list."
      searchMode: "Операция сравнения, используемая для фильтрации раскрывающегося списка.",
      // [Auto-translated] "Long texts in choice options will automatically generate line breaks to fit within the drop-down menu. Unselect if you want the texts to clip."
      textWrapEnabled: "Длинные тексты в параметрах выбора будут автоматически создавать разрывы строк в соответствии с раскрывающимся меню. Снимите флажок, если вы хотите, чтобы тексты были обрезаны.",
      // [Auto-translated] "Specifies how many columns this question spans within the grid layout."
      effectiveColSpan: "Указывает, сколько столбцов занимает этот вопрос в макете сетки."
    },
    surveyvalidator: {
      // "Use the magic wand icon to define when the question's value is considered valid."
      expression: "Используйте значок волшебной палочки, чтобы определить, когда значение вопроса считается действительным.",
      // [Auto-translated] "Errors block progress until resolved. Warnings highlight issues but allow to continue. Informational notes offer additional context or neutral guidance. When using warnings or informational notes, we recommend enabling immediate validation: \"Survey\" → \"Validation\" → \"Run validation\" → \"After an answer has changed\"."
      notificationType: "Ошибки блокируют прогресс до тех пор, пока не будут устранены. Предупреждения указывают на проблемы, но позволяют продолжить. Информационные заметки содержат дополнительный контекст или нейтральное руководство. При использовании предупреждений или информационных заметок рекомендуется включить немедленную проверку: «Опрос» → «Проверка» → «Запустить проверку» → «После изменения ответа»."
    },
    signaturepad: {
      // "Sets the width of the displayed signature area and the resulting image."
      signatureWidth: "Задает ширину отображаемой области подписи и результирующего изображения.",
      // "Sets the height of the displayed signature area and the resulting image."
      signatureHeight: "Задает высоту отображаемой области подписи и результирующего изображения.",
      // "Select if you want the signature area to fill all available space within the question box while maintaining the default 3:2 aspect ratio. When custom width and height values are set, the setting will keep the aspect ratio of these dimensions."
      signatureAutoScaleEnabled: "Выберите, хотите ли вы, чтобы область подписи занимала все доступное пространство в поле вопроса, сохраняя при этом соотношение сторон по умолчанию 3:2. Если заданы пользовательские значения ширины и высоты, при этом будет сохранено соотношение сторон этих размеров."
    },
    file: {
      // "Specifies the display height of uploaded images in the preview and the actual height of images taken with the camera. In single file upload mode, the display height is limited by the preview area; in multiple file upload mode, it is limited by the thumbnail area."
      imageHeight: "Указывает высоту отображения загруженных изображений в окне предварительного просмотра и фактическую высоту изображений, сделанных камерой. В режиме загрузки одного файла высота отображения ограничена областью предварительного просмотра; В режиме загрузки нескольких файлов он ограничен областью эскизов.",
      // "Specifies the display width of uploaded images in the preview and the actual width of images taken with the camera. In single file upload mode, the display width is limited by the preview area; in multiple file upload mode, it is limited by the thumbnail area."
      imageWidth: "Указывает ширину отображения загруженных изображений в окне предварительного просмотра и фактическую ширину изображений, сделанных камерой. В режиме загрузки одного файла ширина отображения ограничена областью предварительного просмотра; В режиме загрузки нескольких файлов он ограничен областью эскизов.",
      // [Auto-translated] "Displays thumbnail previews for uploaded files when possible. Unselect if you want to show file icons instead."
      allowImagesPreview: "Отображает предварительный просмотр миниатюр для загруженных файлов, когда это возможно. Снимите флажок, если вместо этого вы хотите отображать значки файлов."
    },
    image: {
      // "The \"Auto\" option automatically determines the suitable mode for display - Image, Video, or YouTube - based on the source URL provided."
      contentMode: "Опция \"Авто\" автоматически определяет подходящий режим отображения - Изображение, Видео или YouTube - на основе предоставленного исходного URL-адреса."
    },
    imagepicker: {
      // [Auto-translated] "Overrides the minimum and maximum height values."
      imageHeight: "Переопределяет минимальное и максимальное значения высоты.",
      // [Auto-translated] "Overrides the minimum and maximum width values."
      imageWidth: "Переопределяет минимальное и максимальное значения ширины.",
      // [Auto-translated] "\"Value\" serves as an item ID used in conditional rules; \"Text\" is displayed to respondents."
      choices: "\"Значение\" - это идентификатор элемента, используемый в условных правилах; Респондентам отображается «Текст».",
      // "Choose between \"Image\" and \"Video\" to set the content mode of the media selector. If \"Image\" is selected, ensure that all options provided are image files in the following formats: JPEG, GIF, PNG, APNG, SVG, BMP, ICO. Similarly, if \"Video\" is selected, ensure that all options are direct links to video files in the following formats: MP4, MOV, WMV, FLV, AVI, MKV. Please note that YouTube links are not supported for video options."
      contentMode: "Выберите между «Изображением» и «Видео», чтобы установить режим содержимого селектора мультимедиа. Если выбран параметр «Изображение», убедитесь, что все предоставленные параметры представляют собой файлы изображений в следующих форматах: JPEG, GIF, PNG, APNG, SVG, BMP, ICO. Точно так же, если выбран «Видео», убедитесь, что все параметры являются прямыми ссылками на видеофайлы в следующих форматах: MP4, MOV, WMV, FLV, AVI, MKV. Обратите внимание, что ссылки на YouTube не поддерживаются для параметров видео."
    },
    text: {
      // [Auto-translated] "This setting only resizes the input field and doesn't affect the width of the question box. To limit the accepted input length, go to \"Validation\" → \"Maximum character limit\"."
      size: "Этот параметр только изменяет размер поля ввода и не влияет на ширину поля вопроса. Чтобы ограничить допустимую длину ввода, перейдите в раздел «Проверка» → «Максимальное ограничение символов»."
    },
    comment: {
      // [Auto-translated] "Sets the number of displayed lines in the input field. If the input takes up more lines, the scroll bar will appear."
      rows: "Задает количество отображаемых строк в поле ввода. Если ввод занимает больше строк, появится полоса прокрутки."
    },
    // survey templates
    survey: {
      // "Select if you want to prevent respondents from filling out your survey."
      readOnly: "Выберите, хотите ли вы запретить респондентам заполнять ваш опрос.",
      // "Sets the location of the progress bar. The \"Auto\" value displays the progress bar above or below the survey header."
      progressBarLocation: "Задает расположение индикатора выполнения. Значение \"Auto\" отображает индикатор выполнения над или под заголовком опроса."
    },
    matrixdropdowncolumn: {
      // "A column ID that is not visible to respondents."
      name: "Идентификатор столбца, который не виден респондентам.",
      // "When enabled for a column, a respondent is required to provide a unique response for each question within this column."
      isUnique: "Если этот параметр включен для столбца, респондент должен предоставить уникальный ответ на каждый вопрос в этом столбце.",
      // "Sets the number of displayed lines in the input field. If the input takes up more lines, the scroll bar will appear."
      rows: "Задает количество отображаемых строк в поле ввода. Если ввод занимает больше строк, появится полоса прокрутки.",
      // "Use the magic wand icon to set a conditional rule that determines column visibility."
      visibleIf: "Используйте значок волшебной палочки, чтобы задать условное правило, определяющее видимость столбцов.",
      // [Auto-translated] "Use the magic wand icon to set a conditional rule that disables the read-only mode for the column."
      enableIf: "Используйте значок волшебной палочки, чтобы задать условное правило, которое отключает режим только для чтения для столбца.",
      // "Use the magic wand icon to set a conditional rule that prevents survey submission unless at least one nested question has an answer."
      requiredIf: "Используйте значок волшебной палочки, чтобы задать условное правило, которое запрещает отправку опроса, если хотя бы один вложенный вопрос не содержит ответа.",
      // "When selected, creates an individual column for each choice option."
      showInMultipleColumns: "При выборе этого параметра создается отдельный столбец для каждого варианта выбора.",
      // [Auto-translated] "Arranges choice options in a multi-column layout. When set to 0, the options are displayed in a single line. When set to -1, the actual value is inherited from the \"Nested column count\" property of the parent matrix."
      colCount: "Упорядочивает варианты выбора в макете с несколькими столбцами. Если установлено значение 0, параметры отображаются в одну строку. При значении -1 фактическое значение наследуется от свойства \"Количество вложенных столбцов\" родительской матрицы."
    },
    slider: {
      // "The lowest number that users can select."
      min: "Наименьшее число, которое могут выбрать пользователи.",
      // "The highest number that users can select."
      max: "Максимальное число, которое могут выбрать пользователи.",
      // "The interval between selectable scale values. For example, a step of 5 will allow users to select 0, 5, 10, etc."
      step: "Интервал между выбираемыми значениями масштаба. Например, шаг 5 позволит пользователям выбрать 0, 5, 10 и т. д.",
      // "The minimum distance between the slider thumbs a user can set."
      minRangeLength: "Минимальное расстояние между ползунками, которое может установить пользователь.",
      // "The maximum distance between the slider thumbs a user can set."
      maxRangeLength: "Максимальное расстояние между ползунками, которое может установить пользователь.",
      // "Specifies how many scale labels to generate. A value of -1 means the number is calculated automatically based on the Min value and Max value."
      labelCount: "Указывает, сколько меток шкалы необходимо создать. Значение -1 означает, что число вычисляется автоматически на основе значений Min и Max.",
      // "Use `{0}` as a placeholder for the actual value."
      labelFormat: "Используйте '{0}' в качестве заполнителя для фактического значения.",
      // "Allows you to define custom labels at specific values and optionally assign corresponding text to them (e.g., 0 = \"Poor\", 100 = \"Excellent\")."
      customLabels: "Позволяет определять пользовательские метки с определенными значениями и при необходимости назначать им соответствующий текст (например, 0 = \"Плохо\", 100 = \"Отлично\").",
      // "Use `{0}` as a placeholder for the actual value."
      tooltipFormat: "Используйте '{0}' в качестве заполнителя для фактического значения.",
      // "Allows users to move one thumb past the other."
      allowSwap: "Позволяет пользователям перемещать один большой палец мимо другого.",
      // [Auto-translated] "Displays a button that clears the selected slider value and sets it to undefined."
      allowClear: "Отображает кнопку, которая очищает выбранное значение ползунка и устанавливает его в неопределенное положение.",
      // "Defines the slider's minimum value dynamically using an expression. Supports basic calculations (e.g, `{q1_id} + {q2_id}`), Boolean logic (e.g., `{age} > 60`), and functions like `iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, and more."
      minValueExpression: "Динамически определяет минимальное значение ползунка с помощью выражения. Поддерживает базовые вычисления (например, '{q1_id} + {q2_id}'), булеву логику (например, '{age} > 60') и функции, такие как 'iif()', 'today()', 'age()', 'min()', 'max()', 'avg()' и другие.",
      // "Defines the slider's maximum value dynamically using an expression. Supports basic calculations (e.g, `{q1_id} + {q2_id}`), Boolean logic (e.g., `{age} > 60`), and functions like `iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, and more."
      maxValueExpression: "Динамически определяет максимальное значение ползунка с помощью выражения. Поддерживает базовые вычисления (например, '{q1_id} + {q2_id}'), булеву логику (например, '{age} > 60') и функции, такие как 'iif()', 'today()', 'age()', 'min()', 'max()', 'avg()' и другие."
    },
    // [Auto-translated] "Makes this choice exclusive. When selected by a user, it will automatically deselect all other options in the question."
    isExclusive: "Делает этот выбор эксклюзивным. Когда пользователь выбирает этот вариант, выбор будет автоматически отменен во всех остальных вариантах вопроса.",
    matrixcolumn: {
      // [Auto-translated] "Makes checkboxes in this column exclusive. When selected by a user, they will automatically deselect all other checkboxes in the same row."
      isExclusive: "Делает чекбоксы в этой колонке эксклюзивными. Когда пользователь выбирает их, он автоматически снимает выбор со всех остальных флажков в той же строке."
    },
    // [Auto-translated] "Select if uppercase and lowercase letters in the regular expression must be treated as equivalent."
    caseInsensitive: "Выберите, если прописные и строчные буквы в регулярном выражении должны рассматриваться как эквивалентные.",
    // "Choose from: \"Static\" - sets a fixed width; \"Responsive\" - makes the survey occupy the full width of the screen; \"Auto\" - applies either of the two depending on the question types used."
    widthMode: "Выберите один из: \"Статический\" - задает фиксированную ширину; «Отзывчивый» - заставляет опрос занимать всю ширину экрана; \"Авто\" - применяет любой из двух вариантов в зависимости от используемых типов вопросов.",
    // [Auto-translated] "Assign a unique cookie value for your survey. The cookie will be set in a respondent's browser upon survey completion to prevent repetitive survey submissions."
    cookieName: "Назначьте уникальное значение файла cookie для вашего опроса. Файл cookie будет установлен в браузере респондента после завершения опроса, чтобы предотвратить повторное отправление опроса.",
    // [Auto-translated] "Paste an image link (no size limits) or click the folder icon to browse a file from your computer (up to 64KB)."
    logo: "Вставьте ссылку на изображение (без ограничений по размеру) или нажмите значок папки, чтобы просмотреть файл с компьютера (до 64 КБ).",
    // [Auto-translated] "Sets a logo width in CSS units (px, %, in, pt, etc.)."
    logoWidth: "Задает ширину логотипа в единицах CSS (px, %, in, pt и т. д.).",
    // [Auto-translated] "Sets a logo height in CSS units (px, %, in, pt, etc.)."
    logoHeight: "Задает высоту логотипа в единицах CSS (px, %, in, pt и т. д.).",
    // "Choose from: \"None\" - image maintains its original size; \"Contain\" - image is resized to fit while maintaining its aspect ratio; \"Cover\" - image fills the entire box while maintaining its aspect ratio; \"Fill\" - image is stretched to fill the box without maintaining its aspect ratio."
    logoFit: "Выберите один из следующих вариантов: \"Нет\" - изображение сохраняет свой первоначальный размер; \"Contain\" - размер изображения изменяется по размеру с сохранением его пропорций; «Обложка» - изображение заполняет всю коробку, сохраняя при этом соотношение сторон; \"Заливка\" - изображение растягивается для заполнения поля без сохранения его пропорций.",
    // [Auto-translated] "Select if you want the survey to auto-advance to the next page once a respondent has answered all questions on the current page. This feature won't apply if the last question on the page is open-ended or allows multiple answers."
    autoAdvanceEnabled: "Выберите, хотите ли вы, чтобы опрос автоматически переходил на следующую страницу после того, как респондент ответил на все вопросы на текущей странице. Эта функция не будет работать, если последний вопрос на странице является открытым или допускает несколько ответов.",
    // [Auto-translated] "Select if you want the survey to complete automatically after a respondent answers all questions."
    autoAdvanceAllowComplete: "Выберите, хотите ли Вы, чтобы опрос завершался автоматически после того, как респондент ответит на все вопросы.",
    // [Auto-translated] "Sets the visibility of navigation buttons on a page."
    showNavigationButtons: "Настройка видимости кнопок навигации на странице.",
    // [Auto-translated] "Sets the location of navigation buttons on a page."
    navigationButtonsLocation: "Задает расположение кнопок навигации на странице.",
    // [Auto-translated] "Enable the preview page with all or answered questions only."
    showPreviewBeforeComplete: "Включите страницу предварительного просмотра, на которой отображаются все вопросы или только ответы на них.",
    // "Applies to all questions within the survey. This setting can be overridden by title alignment rules at lower levels: panel, page, or question. A lower-level setting will override those on a higher level."
    questionTitleLocation: "Применяется ко всем вопросам в опросе. Этот параметр может быть переопределен правилами выравнивания заголовков на более низких уровнях: панели, странице или вопросе. Настройки более низкого уровня будут переопределять настройки на более высоком уровне.",
    // [Auto-translated] "A symbol or a sequence of symbols indicating that an answer is required."
    requiredMark: "Символ или последовательность символов, указывающие на то, что требуется ответ.",
    // [Auto-translated] "Enter a number or letter with which you want to start numbering."
    questionStartIndex: "Введите цифру или букву, с которой вы хотите начать нумерацию.",
    // "Sets the location of an error message in relation to the question with invalid input. Choose between: \"Top\" - an error text is placed at the top of the question box; \"Bottom\" - an error text is placed at the bottom of the question box."
    questionErrorLocation: "Задает расположение сообщения об ошибке по отношению к вопросу с недопустимыми входными данными. Выберите между: «Сверху» - текст ошибки размещается в верхней части поля вопроса; «Внизу» - текст ошибки размещается в нижней части окна вопроса.",
    // [Auto-translated] "Select if you want the first input field on each page ready for text entry."
    autoFocusFirstQuestion: "Выберите, если вы хотите, чтобы первое поле ввода на каждой странице было готово для ввода текста.",
    // "Keeps the original order of questions or randomizes them. The effect of this setting is only visible in the Preview tab."
    questionOrder: "Сохраняет исходный порядок вопросов или рандомизирует их. Эффект этого параметра виден только на вкладке «Предварительный просмотр».",
    // [Auto-translated] "For text entry questions only."
    maxTextLength: "Только для вопросов с вводом текста.",
    // [Auto-translated] "For question comments only."
    maxCommentLength: "Только для комментариев к вопросам.",
    // [Auto-translated] "Sets the number of displayed lines in text areas for question comments. If the input takes up more lines, the scroll bar appears."
    commentAreaRows: "Задает количество отображаемых строк в текстовых полях для комментариев к вопросам. Если ввод занимает больше строк, появляется полоса прокрутки.",
    // [Auto-translated] "Select if you want question comments and Long Text questions to auto-grow in height based on the entered text length."
    autoGrowComment: "Выберите, хотите ли вы, чтобы комментарии к вопросам и вопросы с длинным текстом автоматически увеличивались в высоту в зависимости от введенной длины текста.",
    // [Auto-translated] "For question comments and Long Text questions only."
    allowResizeComment: "Только для комментариев к вопросам и вопросов с длинным текстом.",
    // [Auto-translated] "Custom variables serve as intermediate or auxiliary variables used in form calculations. They take respondent inputs as source values. Each custom variable has a unique name and an expression it's based on."
    calculatedValues: "Пользовательские переменные служат промежуточными или вспомогательными переменными, используемыми в вычислениях формы. Они принимают входные данные респондента в качестве исходных значений. Каждая пользовательская переменная имеет уникальное имя и выражение, на котором она основана.",
    // [Auto-translated] "Select if you wish the calculated value of the expression to be saved along with survey results."
    includeIntoResult: "Выберите, если вы хотите, чтобы вычисленное значение выражения сохранялось вместе с результатами опроса.",
    // "A trigger is an event or condition that is based on an expression. Once the expression is evaluated to \"true\", a trigger sets off an action. Such an action can optionally have a target question it affects."
    triggers: "Триггер — это событие или условие, основанное на выражении. После того, как выражение оценивается как \"true\", триггер запускает действие. Такое действие может иметь целевой вопрос, на который оно влияет.",
    // [Auto-translated] "Choose whether or not to clear values for questions hidden by conditional logic and when to do it."
    clearInvisibleValues: "Выберите, нужно ли очищать значения для вопросов, скрытых условной логикой, и когда это делать.",
    // "Choose from: \"On lost focus\" - the value is updated when the input field loses focus; \"While typing\" - the value is updated in real-time, as users are typing."
    textUpdateMode: "Выберите из: \"При потере фокуса\" - значение обновляется при потере фокуса полем ввода; \"Во время набора\" - значение обновляется в режиме реального времени, по мере набора текста пользователями.",
    // [Auto-translated] "The left value serves as a column ID used in conditional rules, the right value is displayed to respondents."
    columns: "Левое значение служит идентификатором столбца, используемым в условных правилах, правое значение отображается респондентам.",
    // "The left value serves as a row ID used in conditional rules, the right value is displayed to respondents."
    rows: "Левое значение служит идентификатором строки, используемым в условных правилах, правое значение отображается респондентам.",
    // [Auto-translated] "Accepts CSS values (px, %, in, pt, etc.)."
    columnMinWidth: "Принимает значения CSS (px, %, in, pt и т. д.).",
    // [Auto-translated] "Accepts CSS values (px, %, in, pt, etc.)."
    rowTitleWidth: "Принимает значения CSS (px, %, in, pt и т. д.).",
    // [Auto-translated] "Visible only if at least one column displays total values set with \"Aggregation method\" or \"Total value expression\"."
    totalText: "Отображается только в том случае, если хотя бы в одном столбце отображаются итоговые значения, заданные с помощью \"Метода агрегирования\" или \"Выражения общего значения\".",
    // "Sets the location of an error message in relation to a cell with invalid input. The \"Inherit\" option applies the setting from the \"Error message alignment\" property."
    cellErrorLocation: "Задает местоположение сообщения об ошибке по отношению к ячейке с недопустимыми входными данными. Опция «Наследовать» применяет настройку из свойства «Выравнивание сообщений об ошибках».",
    // "Sets the location of error messages for questions nested in detail sections. The \"Inherit\" option applies the setting from the \"Error message alignment\" property."
    detailErrorLocation: "Задает расположение сообщений об ошибках для вопросов, вложенных в подробные разделы. Опция \"Наследовать\" применяет настройку из свойства \"Выравнивание сообщения об ошибке\".",
    // "When the \"Prevent duplicate responses\" property is enabled, a respondent attempting to submit a duplicate entry will receive the following error message."
    keyDuplicationError: "Если включено свойство «Не допускать дублирования ответов», респондент, пытающийся отправить дублирующуюся запись, получит следующее сообщение об ошибке.",
    matrixdropdown: {
      // [Auto-translated] "When the \"Prevent duplicate responses\" property is enabled for a matrix column, a respondent attempting to submit a duplicate entry will receive the following error message."
      keyDuplicationError: "Если для столбца матрицы включено свойство \"Предотвратить дублирование ответов\", респондент, пытающийся отправить повторяющуюся запись, получит следующее сообщение об ошибке."
    },
    // [Auto-translated] "Allows you to calculate total values based on an expression. The expression can include basic calculations (`{q1_id} + {q2_id}`), Boolean expressions (`{age} > 60`) and functions ('iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, etc.)."
    totalExpression: "Позволяет вычислять итоговые значения на основе выражения. Выражение может включать базовые вычисления ('{q1_id} + {q2_id}'), логические выражения ('{age} > 60') и функции ('iif()', 'today()', 'age()', 'min()', 'max()', 'avg()' и т.д.).",
    // "Reference a column ID to require a user to provide a unique response for each question within the specified column."
    keyName: "Если указанный столбец содержит одинаковые значения, опрос выдает ошибку «Неуникальное значение ключа».",
    // "Type a subtitle."
    description: "Введите субтитры.",
    // [Auto-translated] "Choose a language to begin creating your survey. To add a translation, switch to a new language and translate the original text here or in the Translations tab."
    locale: "Выберите язык, чтобы начать создание опроса. Чтобы добавить перевод, переключитесь на новый язык и переведите исходный текст здесь или во вкладке «Переводы».",
    // "Sets the location of a detail section in relation to a row. Choose from: \"None\" - no detail section is added; \"Under the row\" - a detail section is placed under each row of the matrix; \"Under the row, display one detail section only\" - a detail section is displayed under a single row only, the remaining sections are collapsed."
    detailPanelMode: "Задает расположение раздела сведений по отношению к строке. Выберите один из вариантов: \"Нет\" - расширение не добавляется; \"Под строкой\" - под каждой строкой матрицы помещается расширение строки; \"Под строкой отображать только одну строку\" - расширение отображается только под одной строкой, остальные расширения строк сворачиваются.",
    // "Choose from: \"None\" - image maintains its original size; \"Contain\" - image is resized to fit while maintaining its aspect ratio; \"Cover\" - image fills the entire box while maintaining its aspect ratio; \"Fill\" - image is stretched to fill the box without maintaining its aspect ratio."
    imageFit: "Выберите один из следующих вариантов: \"Нет\" - изображение сохраняет свой первоначальный размер; \"Contain\" - размер изображения изменяется по размеру с сохранением его пропорций; «Обложка» - изображение заполняет всю коробку, сохраняя при этом соотношение сторон; \"Заливка\" - изображение растягивается для заполнения поля без сохранения его пропорций.",
    // "The \"Inherit\" option applies a survey-level setting (\"Disabled\" by default)."
    autoGrow: "Постепенно увеличивает высоту поля ввода по мере ввода данных. Переопределяет настройку «Высота поля ввода (в строках)».",
    // [Auto-translated] "The \"Inherit\" option applies a survey-level setting (\"Enabled\" by default)."
    allowResize: "Опция «Наследовать» применяет настройку на уровне опроса («Включено» по умолчанию).",
    // [Auto-translated] "A time interval in seconds after which the survey auto-advances to the \"Thank You\" page. When set to 0, counts the time spent on the survey."
    timeLimit: "Интервал времени в секундах, по истечении которого опрос автоматически переходит на страницу «Спасибо». Если установлено значение 0, подсчитывается время, затраченное на опрос.",
    // [Auto-translated] "A time interval in seconds after which the survey auto-advances to the next page. Hides the \"Previous\" navigation button. When set to 0, counts the time spent on the current page."
    timeLimitPerPage: "Интервал времени в секундах, по истечении которого опрос автоматически переходит на следующую страницу. Скрывает кнопку навигации \"Предыдущая\". Если задано значение 0, подсчитывается время, проведенное на текущей странице.",
    // [Auto-translated] "Enable this option to trigger validation when a user focuses on an empty input field and then leaves it without making any changes."
    validateVisitedEmptyFields: "Включите этот параметр, чтобы активировать проверку, когда пользователь фокусируется на пустом поле ввода, а затем покидает его, не внося никаких изменений.",
    page: {
      // "A page ID that is not visible to respondents."
      name: "Идентификатор страницы, который не виден респондентам.",
      // "Type a page subtitle."
      description: "Введите подзаголовок страницы.",
      // "A caption displayed on a navigation button in the progress bar or table of contents (TOC). If you leave this field empty, the navigation button will use the page title or page name. To enable the progress bar or TOC, go to \"Survey\" → \"Navigation\"."
      navigationTitle: "Подпись, отображаемая на кнопке навигации на индикаторе выполнения или в оглавлении (TOC). Если оставить это поле пустым, кнопка навигации будет использовать заголовок страницы или название страницы. Чтобы включить индикатор выполнения или оглавление, перейдите в раздел «Обзор» → «Навигация».",
      // "A time interval in seconds after which the survey auto-advances to the next page. Hides the \"Previous\" navigation button. When set to 0, counts the time spent on the current page."
      timeLimit: "Интервал времени в секундах, по истечении которого опрос автоматически переходит на следующую страницу.",
      // "Use the magic wand icon to set a conditional rule that determines page visibility."
      visibleIf: "Используйте значок волшебной палочки, чтобы задать условное правило, определяющее видимость страницы.",
      // [Auto-translated] "Use the magic wand icon to set a conditional rule that disables the read-only mode for the page."
      enableIf: "Используйте значок волшебной палочки, чтобы задать условное правило, которое отключает режим только для чтения для страницы.",
      // "Use the magic wand icon to set a conditional rule that prevents survey submission unless at least one nested question has an answer."
      requiredIf: "Используйте значок волшебной палочки, чтобы задать условное правило, которое запрещает отправку опроса, если хотя бы один вложенный вопрос не содержит ответа.",
      // "Applies to all questions within this page. When set to \"Hidden\", it also hides question descriptions. If you want to override this setting, define title alignment rules for individual questions or panels. The \"Inherit\" option applies the survey-level setting (\"Top\" by default)."
      questionTitleLocation: "Относится ко всем вопросам на этой странице. Если вы хотите переопределить этот параметр, задайте правила выравнивания заголовков для отдельных вопросов или панелей. Опция «Наследовать» применяет настройку уровня опроса («Сверху» по умолчанию).",
      // [Auto-translated] "Sets consistent width for question titles when they are aligned to the left of their question boxes. Accepts CSS values (px, %, in, pt, etc.)."
      questionTitleWidth: "Задает одинаковую ширину заголовков вопросов, если они выровнены по левому краю полей вопросов. Принимает значения CSS (px, %, in, pt и т. д.).",
      // "Sets the location of an error message in relation to the question with invalid input. Choose between: \"Top\" - an error text is placed at the top of the question box; \"Bottom\" - an error text is placed at the bottom of the question box. The \"Inherit\" option applies the survey-level setting (\"Top\" by default)."
      questionErrorLocation: "Задает расположение сообщения об ошибке по отношению к вопросу с недопустимыми входными данными. Выберите между: «Сверху» - текст ошибки размещается в верхней части поля вопроса; «Внизу» - текст ошибки размещается в нижней части окна вопроса. Опция «Наследовать» применяет настройку уровня опроса («Сверху» по умолчанию).",
      // "Keeps the original order of questions or randomizes them. The \"Inherit\" option applies the survey-level setting (\"Original\" by default). The effect of this setting is only visible in the Preview tab."
      questionOrder: "Сохраняет исходный порядок вопросов или рандомизирует их. Опция «Наследовать» применяет настройку уровня опроса («Оригинал» по умолчанию). Эффект этого параметра виден только на вкладке «Предварительный просмотр».",
      // "Sets the visibility of navigation buttons on the page. The \"Inherit\" option applies the survey-level setting, which defaults to \"Visible\"."
      showNavigationButtons: "Задает видимость кнопок навигации на странице. Опция \"Наследовать\" применяет настройку уровня опроса, которая по умолчанию имеет значение \"Видимый\".",
      // [Auto-translated] "This table lets you configure each grid column on the page. It automatically sets the width percentage for each column based on the maximum number of elements in a row. To customize the grid layout, manually adjust these values and define the title width for all questions in each column."
      gridLayoutColumns: "В этой таблице можно настроить каждый столбец сетки на странице. Он автоматически устанавливает процент ширины для каждого столбца в зависимости от максимального количества элементов в строке. Чтобы настроить макет сетки, вручную настройте эти значения и определите ширину заголовка для всех вопросов в каждом столбце."
    },
    // [Auto-translated] "Sets the location of a timer on a page."
    timerLocation: "Задает расположение таймера на странице.",
    // "Choose from: \"Locked\" - users cannot expand or collapse entries; \"Collapse all\" - all entries start in a collapsed state; \"Expand all\" - all entries start in an expanded state; \"First expanded\" - only the first entry is initially expanded. Applies if \"Entry display mode\" is set to \"List\" and the \"Entry title pattern\" property is specified."
    panelsState: "Выберите один из следующих вариантов: \"Заблокировано\" - пользователи не могут разворачивать или сворачивать панели; \"Свернуть все\" - все панели запускаются в свернутом состоянии; \"Развернуть все\" - все панели запускаются в развернутом состоянии; \"First expanded\" - изначально разворачивается только первая панель.",
    // [Auto-translated] "Enter a shared property name within the array of objects that contains the image or video file URLs you want to display in the choice list."
    imageLinkName: "Введите имя общего свойства в массиве объектов, содержащем URL-адреса изображений или видеофайлов, которые необходимо отобразить в списке вариантов.",
    // "The left value serves as an item ID used in conditional rules, the right value is displayed to respondents."
    choices: "Левое значение служит идентификатором элемента, используемым в условных правилах, правое значение отображается респондентам.",
    // [Auto-translated] "Type a user-friendly title to display."
    title: "Введите понятный заголовок для отображения.",
    // [Auto-translated] "Ensures that users won't complete the survey until files are uploaded."
    waitForUpload: "Гарантирует, что пользователи не завершат опрос до тех пор, пока файлы не будут загружены.",
    // [Auto-translated] "Accepts CSS values (px, %, in, pt, etc.)."
    minWidth: "Принимает значения CSS (px, %, in, pt и т. д.).",
    // [Auto-translated] "Accepts CSS values (px, %, in, pt, etc.)."
    maxWidth: "Принимает значения CSS (px, %, in, pt и т. д.).",
    // "Accepts CSS values (px, %, in, pt, etc.)."
    width: "Принимает значения CSS (px, %, in, pt и т. д.).",
    // [Auto-translated] "A join identifier is a custom key that you can assign to several questions to link them together and sync their values. These values will be merged into a single array or object and stored in survey results using the key as the property name."
    valueName: "Идентификатор соединения — это пользовательский ключ, который можно назначить нескольким вопросам, чтобы связать их вместе и синхронизировать их значения. Эти значения будут объединены в один массив или объект и сохранены в результатах опроса с использованием ключа в качестве имени свойства.",
    // [Auto-translated] "A value displayed in HTML questions and in the dynamic titles and descriptions of survey elements when the question value is empty."
    defaultDisplayValue: "Значение, отображаемое в вопросах в формате HTML, а также в динамических заголовках и описаниях элементов опроса, когда значение вопроса пусто.",
    // [Auto-translated] "In single- and multiple-selection question types, each choice option has an ID and display value. When selected, this setting shows a display value instead of an ID value in HTML questions and dynamic titles and descriptions of survey elements."
    useDisplayValuesInDynamicTexts: "В вопросах с одним и несколькими вариантами ответов каждый вариант выбора имеет идентификатор и отображаемое значение. Если этот параметр установлен, в HTML-вопросах, а также в динамических заголовках и описаниях элементов опроса отображается отображаемое значение, а не значение идентификатора.",
    // "Choose whether or not to clear question values hidden by conditional logic and when to do it. The \"Inherit\" option applies the survey-level setting (\"Upon survey completion\" by default)."
    clearIfInvisible: "Выберите, следует ли очищать значения вопросов, скрытые условной логикой, и когда это делать. Опция «Наследовать» применяет настройку на уровне опроса («По завершении опроса» по умолчанию).",
    // "Choose from: \"All\" - copies all choice options from the selected question; \"Selected\" - dynamically copies only selected choice options; \"Unselected\" - dynamically copies only unselected choice options. The \"None\" and \"Other\" options are copied by default if enabled in the source question."
    choicesFromQuestionMode: "Выбрать из: \"Все\" - копирует все варианты выбора из выбранного вопроса; \"Выбранный\" - динамически копирует только выбранные варианты выбора; \"Невыбранные\" - динамически копирует только невыбранные варианты выбора. Опции «Нет» и «Другое» копируются по умолчанию, если они включены в исходном вопросе.",
    // "In single- and multiple-selection question types, each choice option has an ID and display value. This setting specifies which matrix column or panel question should provide the IDs."
    choiceValuesFromQuestion: "В вопросах с одним и несколькими вариантами ответа каждый вариант выбора имеет идентификатор и отображаемое значение. Этот параметр указывает, из какого столбца матрицы или вопроса панели должны браться идентификаторы.",
    // "In single- and multiple-selection question types, each choice option has an ID and display value. This setting specifies which matrix column or panel question should provide the display texts."
    choiceTextsFromQuestion: "В вопросах с одним и несколькими вариантами ответа каждый вариант выбора имеет идентификатор и отображаемое значение. Этот параметр указывает, из какого столбца матрицы или вопроса панели должны браться отображаемые значения.",
    // [Auto-translated] "Select to let respondents add their own choices if the desired option isn't available in the dropdown. Custom choices will only be stored temporarily for the duration of the current browser session."
    allowCustomChoices: "Выберите, чтобы разрешить респондентам добавлять свои собственные варианты, если нужный вариант недоступен в раскрывающемся списке. Пользовательские варианты будут храниться только временно в течение текущего сеанса браузера.",
    // [Auto-translated] "When selected, users can include additional input in a separate comment box."
    showOtherItem: "Если этот флажок установлен, пользователи могут включить дополнительные данные в отдельное поле комментария.",
    // "Displays each special choice option (\"None\", \"Other\", \"Select All\") on a new line, even when using a multiple-column layout."
    separateSpecialChoices: "Отображение каждого варианта специального выбора (\"Нет\", \"Другое\", \"Выбрать все\") в новой строке, даже при использовании макета с несколькими столбцами.",
    // [Auto-translated] "Specify the location within the service dataset where the target array of objects is located. Leave empty if the URL already points to the array."
    path: "Укажите местоположение в наборе данных сервиса, где находится целевой массив объектов. Оставьте пустым, если URL-адрес уже указывает на массив.",
    choicesbyurl: {
      // "Enter a uniform property name within the array of objects whose value will be stored as a response in survey results."
      valueName: " "
    },
    // [Auto-translated] "Enter a uniform property name within the array of objects that contains the values you want to display in the choice list."
    titleName: "Введите единообразное имя свойства в массиве объектов, содержащем значения, которые требуется отобразить в списке вариантов.",
    // [Auto-translated] "Select to allow the service to return an empty response or array."
    allowEmptyResponse: "Выберите, чтобы разрешить службе возвращать пустой ответ или массив.",
    // [Auto-translated] "Use the magic wand icon to set a conditional rule that determines the visibility of all choice options."
    choicesVisibleIf: "Используйте значок волшебной палочки, чтобы задать условное правило, определяющее видимость всех вариантов выбора.",
    // [Auto-translated] "The left value serves as an item ID used in conditional rules, the right value is displayed to respondents."
    rateValues: "Левое значение служит идентификатором элемента, используемым в условных правилах, правое значение отображается респондентам.",
    rating: {
      // "\"Auto\" selects between the \"Buttons\" and \"Dropdown\" modes based on the available width. When the width is insufficient to display buttons, the question displays a dropdown."
      displayMode: "«Авто» выбирает между режимами «Кнопки» и «Выпадающий список» в зависимости от доступной ширины. Если ширина недостаточна для отображения кнопок, в вопросе отображается раскрывающийся список."
    },
    // [Auto-translated] "Allows you to connect questions that produce results in different formats. When such questions are linked together using a join identifier, this shared property stores selected question values."
    valuePropertyName: "Позволяет соединять вопросы, дающие результаты, в разных форматах. Когда такие вопросы связаны друг с другом с помощью идентификатора соединения, в этом общем свойстве хранятся выбранные значения вопросов.",
    // [Auto-translated] "Select if you want to update the drop-down menu contents to match the search query that a user is typing in the input field."
    searchEnabled: "Выберите, хотите ли вы обновить содержимое раскрывающегося меню в соответствии с поисковым запросом, который пользователь вводит в поле ввода.",
    // [Auto-translated] "A value to save in survey results when respondents give a positive answer."
    valueTrue: "Значение, сохраняемое в результатах опроса, когда респонденты дают положительный ответ.",
    // [Auto-translated] "A value to save in survey results when respondents give a negative answer."
    valueFalse: "Значение, сохраняемое в результатах опроса, когда респонденты дают отрицательный ответ.",
    // [Auto-translated] "It's not recommended that you disable this option as it overrides the Preview image and makes it hard for a user to understand whether the files have been uploaded."
    showPreview: "Не рекомендуется отключать эту опцию, так как она переопределяет изображение предварительного просмотра и затрудняет понимание пользователем того, были ли файлы загружены.",
    // [Auto-translated] "Triggers a prompt asking to confirm the file deletion."
    needConfirmRemoveFile: "Запускает запрос на подтверждение удаления файла.",
    // [Auto-translated] "Enable to rank only selected choices. Users will drag selected items from the choice list to order them within the ranking area."
    selectToRankEnabled: "Включите этот параметр, чтобы ранжировать только выбранные варианты. Пользователи будут перетаскивать выбранные элементы из списка вариантов, чтобы упорядочить их в области ранжирования.",
    // [Auto-translated] "Enter a list of choices that will be suggested to the respondent during input."
    dataList: "Введите список вариантов, которые будут предложены респонденту во время ввода.",
    // [Auto-translated] "The setting only resizes the input fields and doesn't affect the width of the question box."
    inputSize: "Этот параметр изменяет только размер полей ввода и не влияет на ширину поля вопроса.",
    // [Auto-translated] "Sets consistent width for all item labels. Accepts CSS values (px, %, in, pt, etc.)."
    itemTitleWidth: "Задает одинаковую ширину для всех меток товаров. Принимает значения CSS (px, %, in, pt и т.д.).",
    // "Select how to align input value within the field. The default setting \"Auto\" aligns the input value to the right if currency or numeric masking is applied and to the left if not."
    inputTextAlignment: "Выберите способ выравнивания вводимого значения в поле. Настройка по умолчанию \"Auto\" выравнивает вводимое значение по правому краю, если применяется маскирование валюты или число, то по левому краю.",
    // [Auto-translated] "Serves as a substitute when the image cannot be displayed on a user's device and for accessibility purposes."
    altText: "Служит заменой, когда изображение не может быть отображено на устройстве пользователя, а также в целях обеспечения доступности.",
    // "Defines the color of the selected emoji when the Rating icon type is set to \"Smileys\". Choose between: \"Default\" - the selected emoji appears in default survey color; \"Scale\" - the selected emoji inherits color from the rating scale."
    rateColorMode: "Определяет цвет выбранного эмодзи, если для параметра «Тип значка рейтинга» установлено значение «Смайлики». Выберите между: \"По умолчанию\" - выбранный эмодзи отображается в цвете опроса по умолчанию; «Шкала» - выбранный эмодзи наследует цвет от шкалы оценки.",
    expression: {
      // "An expression ID that is not visible to respondents."
      name: "Идентификатор выражения, который не виден респондентам.",
      // "Type an expression subtitle."
      description: "Введите подзаголовок выражения.",
      // "An expression can include basic calculations (`{q1_id} + {q2_id}`), conditions (`{age} > 60`), and functions ('iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, etc.)."
      expression: "Выражение может включать базовые вычисления ('{q1_id} + {q2_id}'), условия ('{age} > 60') и функции ('iif()', 'today()', 'age()', 'min()', 'max()', 'avg()' и т.д.)."
    },
    // "Select to store the \"Other\" option value as a separate property in survey results."
    storeOthersAsComment: "Выберите, чтобы сохранить значение параметра «Другое» как отдельное свойство в результатах опроса.",
    // [Auto-translated] "Use {0} as a placeholder for the actual value."
    format: "Используйте {0} в качестве заполнителя для фактического значения.",
    // [Auto-translated] "Refer to the [accept](https://www.w3schools.com/tags/att_input_accept.asp) attribute description for more information."
    acceptedTypes: "Дополнительные сведения см. в описании атрибута [accept](https://www.w3schools.com/tags/att_input_accept.asp).",
    // [Auto-translated] "Arranges choice options in a multi-column layout. When set to 0, the options are displayed in a single line. Applies only to columns with \"Cell input type\" set to Radio Button Group or Checkboxes."
    columnColCount: "Упорядочивает варианты выбора в макете с несколькими столбцами. Если установлено значение 0, параметры отображаются в одну строку. Применяется только к столбцам с параметром \"Тип ввода ячейки\" как \"Группа переключателей\" или \"Флажки\".",
    // [Auto-translated] "Select the data type that the user's browser can retrieve. This data is sourced either from past values entered by the user or from pre-configured values if any have been saved by the user for autocompletion."
    autocomplete: "Выберите тип данных, которые может получить браузер пользователя. Эти данные берутся либо из прошлых значений, введенных пользователем, либо из предварительно настроенных значений, если таковые были сохранены пользователем для автозаполнения.",
    // "Applies when \"File source type\" is \"Local file\" or when camera is unavailable"
    filePlaceholder: "Применяется, если \"Тип источника\" имеет значение \"Локальные файлы\" или когда камера недоступна",
    // "Applies when \"File source type\" is \"Camera\"."
    photoPlaceholder: "Применяется, если \"Тип источника\" имеет значение \"Камера\".",
    // "Applies when \"File source type\" is \"Local file or camera\"."
    fileOrPhotoPlaceholder: "Применяется, если \"Тип источника\" имеет значение \"Локальные файлы или камера\".",
    // "Arranges choice options in a multi-column layout. When set to 0, the options are displayed in a single line."
    colCount: "Упорядочивает варианты выбора в макете с несколькими столбцами. Если установлено значение 0, параметры отображаются в одну строку.",
    multipletext: {
      // [Auto-translated] "Arranges text boxes in a multi-column layout."
      colCount: "Упорядочивает текстовые поля в макете с несколькими столбцами."
    },
    masksettings: {
      // "Select if you want to store the question value with an applied mask in survey results."
      saveMaskedValue: "Выберите, хотите ли вы сохранить значение вопроса с примененной маской в результатах опроса."
    },
    patternmask: {
      // "The pattern can contain string literals and the following placeholders: `9` - for a digit; `a` - for an upper- or lower-case letter; `#` - for a digit or an upper- or lower-case letter. Use backslash `\\` to escape a character."
      pattern: "Шаблон может содержать строковые литералы и следующие заполнители: '9' - для цифры; 'a' - для прописной или строчной буквы; '#' - для цифры или прописной или строчной буквы. Используйте обратную косую черту '\\' для экранирования символа."
    },
    datetimemask: {
      // "The pattern can contain separator characters and the following placeholders:<br>`m` - Month number.<br>`mm` - Month number, with leading zero for single-digit values.<br>`d` - Day of the month.<br>`dd` - Day of the month, with leading zero for single-digit values.<br>`yy` - The last two digits of the year.<br>`yyyy` - Four-digit year.<br>`H` - Hours in 24-hour format.<br>`HH` - Hours in 24-hour format, with leading zero for single-digit values.<br>`h` - Hours in 12-hour format.<br>`hh` - Hours in 12-hour format, with leading zero for single-digit values.<br>`MM` - Minutes.<br>`ss` - Seconds.<br>`TT` - 12-hour clock period in upper case (AM/PM).<br>`tt` - 12-hour clock period in lower case (am/pm)."
      pattern: "Шаблон может содержать символы-разделители и следующие заполнители:<br>'m' - номер месяца.<br>'mm' - Номер месяца, с нулем в начале для однозначных значений. <br>'d' - День месяца. <br>'dd' - День месяца, с нулевым началом для однозначных значений. <br>'yy' - Последние две цифры года. <br>'yyyy' - Четырехзначный год. <br>'H' - Часы в 24-часовом формате. <br>'HH' - Часы в 24-часовом формате, с нулем в начале для однозначных значений. <br>'h' - Часы в 12-часовом формате. <br>'hh' - Часы в 12-часовом формате, с нулем в начале для однозначных значений. <br>'MM' - минуты. <br>'ss' - Секунды. <br>'TT' - 12-часовой период в верхнем регистре (AM/PM). <br>'tt' - 12-часовой период в нижнем регистре (am/pm)."
    },
    numericmask: {
      // "A symbol used to separate the fractional part from the integer part of a displayed number."
      decimalSeparator: "Символ, используемый для отделения дробной части от целой части отображаемого числа.",
      // "A symbol used to separate the digits of a large number into groups of three."
      thousandsSeparator: "Символ, используемый для разделения цифр большого числа на группы по три.",
      // "Limits how many digits to retain after the decimal point for a displayed number."
      precision: "Ограничивает количество цифр, сохраняемых после десятичной запятой для отображаемого числа."
    },
    currencymask: {
      // "One or several symbols to be displayed before the value."
      prefix: "Один или несколько символов, которые будут отображаться перед значением.",
      // "One or several symbols to be displayed after the value."
      suffix: "Один или несколько символов, которые будут отображаться после значения."
    },
    theme: {
      // "This setting applies only to questions outside of a panel."
      isPanelless: "Этот параметр применяется только к вопросам, находящимся за пределами панели.",
      // "Sets a supplementary color that highlights key survey elements."
      primaryColor: "Установка дополнительного цвета, который выделяет ключевые элементы опроса.",
      // "Adjusts the transparency of panels and question boxes relative to the survey background."
      panelBackgroundTransparency: "Настройка прозрачности панелей и полей вопросов относительно фона опроса.",
      // "Adjusts the transparency of input elements relative to the survey background."
      questionBackgroundTransparency: "Настройка прозрачности входных элементов относительно фона опроса.",
      // "Sets the corner radius for all rectangular elements. Enable the Advanced Mode if you want to set individual corner radius values for input elements or panels and question boxes."
      cornerRadius: "Задает радиус угла для всех прямоугольных элементов. Включите расширенный режим, если вы хотите задать индивидуальные значения углового радиуса для элементов ввода или панелей и полей вопросов.",
      // "Sets the main background color of the survey."
      "--sjs-general-backcolor-dim": "Задает основной цвет фона опроса."
    },
    header: {
      // "The \"Same as container\" option auto-adjusts the header content area width to fit into the HTML element the survey is placed in."
      inheritWidthFrom: "Опция \"То же самое, что и контейнер\" автоматически настраивает ширину области содержимого заголовка в соответствии с элементом HTML, в который помещается опрос.",
      // [Auto-translated] "The width of the header area that contains the survey title and description, measured in pixels."
      textAreaWidth: "Ширина области заголовка, содержащей название и описание опроса, измеряется в пикселях.",
      // [Auto-translated] "When enabled, the top of the survey overlays the bottom of the header."
      overlapEnabled: "Когда этот параметр включен, верхняя часть опроса накладывается на нижнюю часть заголовка.",
      // [Auto-translated] "When set to 0, the height is calculated automatically to accommodate the header's content."
      mobileHeight: "Если задано значение 0, высота вычисляется автоматически для размещения содержимого заголовка."
    },
    // "The \"Same as container\" option auto-adjusts the progress bar area width to fit into the HTML element the survey is placed in."
    progressBarInheritWidthFrom: "Опция \"То же, что и контейнер\" автоматически настраивает ширину области индикатора выполнения в соответствии с HTML-элементом, в который помещается опрос.",
    // [Auto-translated] "Used when the 'Survey layout' is set to 'Single input field per page'. In this layout, the matrix is split so that each input field appears on a separate page. Use the {rowIndex} placeholder to insert auto numbering, {rowTitle} or {rowName} to reference the row's title or ID, and {row.columnid} to include the value of a specific matrix column."
    singleInputTitleTemplate: "Используется, когда для параметра «Макет опроса» задано значение «Одно поле ввода на странице». В этом макете матрица разделена таким образом, что каждое поле ввода отображается на отдельной странице. Используйте заполнитель {rowIndex} для вставки автоматической нумерации, {rowTitle} или {rowName} для ссылки на заголовок или идентификатор строки, а {row.columnid} для включения значения определенного столбца матрицы."
  },
  // Properties
  p: {
    title: {
      // "title"
      name: "Название",
      // "Leave it empty, if it is the same as 'Name'"
      title: "Оставьте его пустым, если оно такое же, как 'Название'"
    },
    // [Auto-translated] "Allow multiple selection"
    multiSelect: "Разрешить множественный выбор",
    // [Auto-translated] "Show image and video captions"
    showLabel: "Показ подписей к изображениям и видео",
    // [Auto-translated] "Swap the order of Yes and No"
    swapOrder: "Поменяйте местами «Да» и «Нет»",
    // [Auto-translated] "Value"
    value: "Ценность",
    // [Auto-translated] "Tab alignment"
    tabAlign: "Выравнивание табуляции",
    // [Auto-translated] "File source type"
    sourceType: "Тип источника файла",
    // [Auto-translated] "Fit to container"
    fitToContainer: "Подходит для контейнера",
    // [Auto-translated] "Set value expression"
    setValueExpression: "Выражение заданного значения",
    // "Description"
    description: "Описание", // Auto-generated string
    // [Auto-translated] "Logo fit"
    logoFit: "Подходит под логотип",
    // [Auto-translated] "Pages"
    pages: "Страниц", // Auto-generated string
    // [Auto-translated] "Questions"
    questions: "Вопросы", // Auto-generated string
    // "Triggers"
    triggers: "триггеры",
    // [Auto-translated] "Custom variables"
    calculatedValues: "Пользовательские переменные",
    // [Auto-translated] "Survey id"
    surveyId: "Идентификатор опроса", // Auto-generated string
    // [Auto-translated] "Survey post id"
    surveyPostId: "Идентификатор записи опроса", // Auto-generated string
    // [Auto-translated] "Survey show data saving"
    surveyShowDataSaving: "Опрос показывает сохранение данных", // Auto-generated string
    // [Auto-translated] "Question description alignment"
    questionDescriptionLocation: "Выравнивание описания вопроса",
    // [Auto-translated] "Progress bar type"
    progressBarType: "Тип индикатора выполнения", // Auto-generated string
    // [Auto-translated] "Show table of contents (TOC)"
    showTOC: "Показать оглавление (TOC)",
    // [Auto-translated] "TOC alignment"
    tocLocation: "Выравнивание оглавления",
    // [Auto-translated] "Question title pattern"
    questionTitlePattern: "Шаблон заголовка вопроса", // Auto-generated string
    // [Auto-translated] "Survey width mode"
    widthMode: "Режим ширины съемки",
    // [Auto-translated] "Show brand info"
    showBrandInfo: "Показать информацию о бренде", // Auto-generated string
    // [Auto-translated] "Use display values in dynamic texts"
    useDisplayValuesInDynamicTexts: "Использование отображаемых значений в динамических текстах",
    // "Visible if"
    visibleIf: "Отображать, если", // Auto-generated string
    // [Auto-translated] "Default value expression"
    defaultValueExpression: "Выражение значения по умолчанию",
    // "Required if"
    requiredIf: "Обязателен если", // Auto-generated string
    // [Auto-translated] "Reset value if"
    resetValueIf: "Сбросьте значение, если",
    // [Auto-translated] "Set value if"
    setValueIf: "Установите значение, если",
    // "Validation rules"
    validators: "Валидаторы",
    // [Auto-translated] "Bindings"
    bindings: "Привязки", // Auto-generated string
    // [Auto-translated] "Render as"
    renderAs: "Рендеринг как", // Auto-generated string
    // [Auto-translated] "Attach original items"
    attachData: "Прикрепите оригинальные элементы", // Auto-generated string
    // "Choices"
    choices: "Выбор",
    // "Choices by url"
    choicesByUrl: "Выбрать из интернета", // Auto-generated string
    // "Currency"
    currency: "Валюта", // Auto-generated string
    // [Auto-translated] "Cell hint"
    cellHint: "Подсказка по ячейке", // Auto-generated string
    // [Auto-translated] "Total maximum fraction digits"
    totalMaximumFractionDigits: "Общее количество максимальных дробных цифр", // Auto-generated string
    // [Auto-translated] "Total minimum fraction digits"
    totalMinimumFractionDigits: "Общее количество минимальных дробных цифр", // Auto-generated string
    // "Columns"
    columns: "Столбцы", // Auto-generated string
    // [Auto-translated] "Detail elements"
    detailElements: "Детализация элементов", // Auto-generated string
    // [Auto-translated] "Allow adaptive actions"
    allowAdaptiveActions: "Разрешить адаптивные действия", // Auto-generated string
    // "Default row value"
    defaultRowValue: "Значение строки по умолчанию", // Auto-generated string
    // [Auto-translated] "Auto-expand new row details"
    detailPanelShowOnAdding: "Автоматическое раскрытие сведений о новой строке",
    // [Auto-translated] "Choices lazy load enabled"
    choicesLazyLoadEnabled: "Выбор отложенной загрузки включен", // Auto-generated string
    // [Auto-translated] "Choices lazy load page size"
    choicesLazyLoadPageSize: "Выбор ленивой загрузки размера страницы", // Auto-generated string
    // [Auto-translated] "Input field component"
    inputFieldComponent: "Компонент поля ввода", // Auto-generated string
    // [Auto-translated] "Item component"
    itemComponent: "Компонент предмета", // Auto-generated string
    // [Auto-translated] "Min"
    min: "Мин", // Auto-generated string
    // [Auto-translated] "Max"
    max: "Макс", // Auto-generated string
    // [Auto-translated] "Min value expression"
    minValueExpression: "Выражение минимального значения", // Auto-generated string
    // [Auto-translated] "Max value expression"
    maxValueExpression: "Выражение максимального значения", // Auto-generated string
    // [Auto-translated] "Step"
    step: "Шаг", // Auto-generated string
    // [Auto-translated] "Items for auto-suggest"
    dataList: "Элементы для автоподсказок",
    // "Input field width (in characters)"
    inputSize: "Размер элементов",
    // [Auto-translated] "Item label width"
    itemTitleWidth: "Ширина метки товара",
    // [Auto-translated] "Input value alignment"
    inputTextAlignment: "Выравнивание вводимого значения",
    // [Auto-translated] "Elements"
    elements: "Азы", // Auto-generated string
    // [Auto-translated] "Content"
    content: "Содержание", // Auto-generated string
    // [Auto-translated] "Navigation title"
    navigationTitle: "Навигационный заголовок", // Auto-generated string
    // [Auto-translated] "Navigation description"
    navigationDescription: "Навигационное описание", // Auto-generated string
    // [Auto-translated] "Long tap"
    longTap: "Длительное нажатие", // Auto-generated string
    // [Auto-translated] "Expand input field dynamically"
    autoGrow: "Динамическое расширение поля ввода",
    // [Auto-translated] "Enable resize handle"
    allowResize: "Включить маркер изменения размера",
    // [Auto-translated] "Accept carriage return"
    acceptCarriageReturn: "Принять возврат каретки", // Auto-generated string
    // [Auto-translated] "Display mode"
    displayMode: "Режим отображения",
    // [Auto-translated] "Rate type"
    rateType: "Тип тарифа", // Auto-generated string
    // "Label"
    label: "Ярлык", // Auto-generated string
    // [Auto-translated] "Content mode"
    contentMode: "Режим содержимого",
    // [Auto-translated] "Image and thumbnail fit"
    imageFit: "Подгонка изображения и миниатюры",
    // [Auto-translated] "Alt text"
    altText: "Замещающий текст",
    // [Auto-translated] "Height"
    height: "Высота", // Auto-generated string
    // [Auto-translated] "Height on smartphones"
    mobileHeight: "Высота на смартфонах",
    // [Auto-translated] "Pen color"
    penColor: "Цвет пера", // Auto-generated string
    // [Auto-translated] "Background color"
    backgroundColor: "Цвет фона",
    // [Auto-translated] "Template elements"
    templateElements: "Элементы шаблона", // Auto-generated string
    // [Auto-translated] "Operator"
    operator: "Оператор", // Auto-generated string
    // [Auto-translated] "Is variable"
    isVariable: "Является вариативным", // Auto-generated string
    // "Run expression"
    runExpression: "Выражение \"Выполнить\"", // Auto-generated string
    // [Auto-translated] "Show caption"
    showCaption: "Показать подпись", // Auto-generated string
    // [Auto-translated] "Icon name"
    iconName: "Название значка", // Auto-generated string
    // [Auto-translated] "Icon size"
    iconSize: "Размер значка", // Auto-generated string
    // [Auto-translated] "Precision"
    precision: "Точность", // Auto-generated string
    // [Auto-translated] "Matrix drag handle area"
    matrixDragHandleArea: "Область маркера перетаскивания матрицы", // Auto-generated string
    // [Auto-translated] "Background image"
    backgroundImage: "Фоновое изображение",
    // [Auto-translated] "Background image fit"
    backgroundImageFit: "Подгонка фонового изображения", // Auto-generated string
    // [Auto-translated] "Background image attachment"
    backgroundImageAttachment: "Вложение фонового изображения", // Auto-generated string
    // [Auto-translated] "Background opacity"
    backgroundOpacity: "Непрозрачность фона", // Auto-generated string
    // [Auto-translated] "Allow selective ranking"
    selectToRankEnabled: "Разрешить выборочное ранжирование",
    // [Auto-translated] "Ranking area alignment"
    selectToRankAreasLayout: "Выравнивание областей ранжирования",
    // [Auto-translated] "Text to show if all options are selected"
    selectToRankEmptyRankedAreaText: "Текст, показывающий, если выбраны все параметры",
    // [Auto-translated] "Placeholder text for the ranking area"
    selectToRankEmptyUnrankedAreaText: "Замещающий текст для области ранжирования",
    // [Auto-translated] "Allow camera access"
    allowCameraAccess: "Разрешить доступ к камере", // Auto-generated string
    // [Auto-translated] "Rating icon color mode"
    scaleColorMode: "Цветовой режим иконки рейтинга",
    // [Auto-translated] "Smileys color scheme"
    rateColorMode: "Цветовая гамма смайликов",
    // [Auto-translated] "Copy display value"
    copyDisplayValue: "Копирование отображаемого значения", // Auto-generated string
    // [Auto-translated] "Column span"
    effectiveColSpan: "Пролет колонны",
    // [Auto-translated] "Progress bar area width"
    progressBarInheritWidthFrom: "Ширина области индикатора выполнения",
    // [Auto-translated] "Theme name"
    themeName: "Название темы"
  },
  theme: {
    // "Advanced mode"
    advancedMode: "Расширенный режим",
    // "Page"
    pageTitle: "Шрифт заголовка страницы",
    // "Question box"
    questionTitle: "Шрифт заголовка вопроса",
    // "Input element"
    editorPanel: "Элемент ввода",
    // [Auto-translated] "Lines"
    lines: "Обводы",
    // [Auto-translated] "Default"
    primaryDefaultColor: "По умолчанию",
    // [Auto-translated] "Hover"
    primaryDarkColor: "Парить",
    // [Auto-translated] "Selected"
    primaryLightColor: "Выбранный",
    // [Auto-translated] "Background color"
    backgroundDimColor: "Цвет фона",
    // "Corner radius"
    cornerRadius: "Радиус закругления угла",
    // [Auto-translated] "Default background"
    backcolor: "Фон по умолчанию",
    // [Auto-translated] "Hover background"
    hovercolor: "Фон при наведении курсора",
    // [Auto-translated] "Border decoration"
    borderDecoration: "Оформление бордюра",
    // [Auto-translated] "Font color"
    fontColor: "Цвет шрифта",
    // [Auto-translated] "Background color"
    backgroundColor: "Цвет фона",
    // [Auto-translated] "Default color"
    primaryForecolor: "Цвет по умолчанию",
    // [Auto-translated] "Disabled color"
    primaryForecolorLight: "Отключенный цвет",
    // [Auto-translated] "Font"
    font: "Шрифт",
    // [Auto-translated] "Darker"
    borderDefault: "Темнее",
    // [Auto-translated] "Lighter"
    borderLight: "Зажигалка",
    // [Auto-translated] "Font family"
    fontFamily: "Семейство шрифтов",
    // [Auto-translated] "Regular"
    fontWeightRegular: "Регулярный",
    // [Auto-translated] "Heavy"
    fontWeightHeavy: "Тяжелый",
    // [Auto-translated] "Semi-bold"
    fontWeightSemiBold: "Полужирный",
    // [Auto-translated] "Bold"
    fontWeightBold: "Смелый",
    // [Auto-translated] "Color"
    color: "Цвет",
    // [Auto-translated] "Placeholder color"
    placeholderColor: "Цвет заполнителя",
    // [Auto-translated] "Size"
    size: "Размер",
    // [Auto-translated] "Opacity"
    opacity: "Непрозрачность",
    // [Auto-translated] "X"
    boxShadowX: "X",
    // [Auto-translated] "Y"
    boxShadowY: "Y",
    // [Auto-translated] "Add Shadow Effect"
    boxShadowAddRule: "Добавить эффект тени",
    // [Auto-translated] "Blur"
    boxShadowBlur: "Смазывать",
    // [Auto-translated] "Spread"
    boxShadowSpread: "Распространение",
    // [Auto-translated] "Drop"
    boxShadowDrop: "Капля",
    // [Auto-translated] "Inner"
    boxShadowInner: "Внутренний",
    names: {
      // [Auto-translated] "Default"
      default: "По умолчанию",
      // [Auto-translated] "Sharp"
      sharp: "Чёткая",
      // [Auto-translated] "Borderless"
      borderless: "Без границ",
      // [Auto-translated] "Flat"
      flat: "Плоская",
      // [Auto-translated] "Plain"
      plain: "Простая",
      // [Auto-translated] "Double Border"
      doubleborder: "Удвоенные границы",
      // [Auto-translated] "Layered"
      layered: "Многослойная",
      // [Auto-translated] "Solid"
      solid: "Монолитная",
      // [Auto-translated] "3D"
      threedimensional: "Трёхмерная",
      // [Auto-translated] "Contrast"
      contrast: "Контрастная"
    },
    colors: {
      // [Auto-translated] "Teal"
      teal: "Бирюзовый",
      // [Auto-translated] "Blue"
      blue: "Синий",
      // [Auto-translated] "Purple"
      purple: "Пурпурный",
      // [Auto-translated] "Orchid"
      orchid: "Орхидея",
      // [Auto-translated] "Tulip"
      tulip: "Тюльпан",
      // [Auto-translated] "Brown"
      brown: "Коричневый",
      // [Auto-translated] "Green"
      green: "Зеленый",
      // [Auto-translated] "Gray"
      gray: "Серый"
    }
  },
  creatortheme: {
    // [Auto-translated] "Surface background"
    "--sjs-special-background": "Фон поверхности",
    // [Auto-translated] "Primary"
    "--sjs-primary-background-500": "Первичный",
    // [Auto-translated] "Secondary"
    "--sjs-secondary-background-500": "Вторичный",
    // [Auto-translated] "Surface"
    surfaceScale: "Поверхность",
    // [Auto-translated] "UI elements"
    userInterfaceBaseUnit: "Элементы пользовательского интерфейса",
    // [Auto-translated] "Font"
    fontScale: "Шрифт",
    names: {
      // [Auto-translated] "Survey Creator 2020"
      sc2020: "Создатель опросов 2020",
      // [Auto-translated] "Light"
      "default-light": "Свет",
      // [Auto-translated] "Dark"
      "default-dark": "Темный",
      // [Auto-translated] "Contrast"
      "default-contrast": "Контраст"
    }
  }
};

setupLocale({ localeCode: "ru", strings: ruStrings });