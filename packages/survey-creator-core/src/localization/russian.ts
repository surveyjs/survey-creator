import { setupLocale } from "survey-creator-core";

export var ruStrings = {
  // survey templates
  survey: {
    edit: "Редактировать",
    externalHelpLink: "Научиться создавать опросы",
    externalHelpLinkUrl: "Https://www.youtube.com/channel/UCH2ru9okIcooNZfpIbyq4qQ?view_as=subscriber",
    dropQuestion: "Пожалуйста, перетяните необходимый элемент из панели слева",
    addLogicItem: "Создайте правило для настройки потока опроса.",
    copy: "Копировать",
    duplicate: "Дублировать",
    addToToolbox: "Добавить к инструментам",
    deletePanel: "Удалить панель",
    deleteQuestion: "Удалить вопрос",
    convertTo: "Преобразовать в",
    drag: "Перетянуть элемент",
  },
  // Creator tabs
  tabs: {
    preview: "Тестировать опросник",
    theme: "Темы",
    translation: "Перевод",
    designer: "Обзор конструктора",
    json: "JSON редактор",
    logic: "Логика опросника"
  },
  // Question types
  qt: {
    default: "По умолчанию",
    checkbox: "Множественный выбор",
    comment: "Комментарий",
    imagepicker: "Выбор изображения",
    ranking: "Ранжирование",
    image: "Образ",
    dropdown: "Выпадающий список",
    tagbox: "Выпадающий список с множественным выбором",
    file: "Загрузка файлов",
    html: ".HTML",
    matrix: "Матрица (единичный выбор)",
    matrixdropdown: "Матрица (множественный выбор)",
    matrixdynamic: "Матрица (динамические ряды)",
    multipletext: "Multiple Textboxes",
    panel: "Панель (для группы вопросов)",
    paneldynamic: "Панель (динамические панели)",
    radiogroup: "Единичный выбор",
    rating: "Рейтинг (шкала)",
    text: "Текстовый ввод",
    boolean: "Булиевое значение",
    expression: "Выражение (только для чтения)",
    signaturepad: "Подпись",
    buttongroup: "Группа кнопок"
  },
  toolboxCategories: {
    general: "Общие",
    choice: "Вопросы выбора",
    text: "Вопросы для ввода текста",
    containers: "Контейнеры",
    matrix: "Матричные вопросы",
    misc: "Разное"
  },
  // Strings in SurveyJS Creator
  ed: {
    defaultLocale: "По умолчанию ({0})",
    survey: "Опросник",
    settings: "Настройки опросника",
    settingsTooltip: "Открыть настройки",
    surveySettings: "Настройки опроса",
    surveySettingsTooltip: "Настройки съемки",
    themeSettings: "Настройки темы",
    themeSettingsTooltip: "Настройки темы",
    creatorSettingTitle: "Настройки создателя контента",
    showPanel: "Панель «Показать»",
    hidePanel: "Скрыть панель",
    prevSelected: "Выберите предыдущую",
    nextSelected: "Выберите далее",
    prevFocus: "Фокусировка предыдущая",
    nextFocus: "Сосредоточьтесь на следующем",
    surveyTypeName: "Обзор",
    pageTypeName: "Страница",
    panelTypeName: "Панель",
    questionTypeName: "Вопрос",
    columnTypeName: "Столбец",
    addNewPage: "Добавить новую страницу",
    moveRight: "Прокрутить вправо",
    moveLeft: "Прокрутить влево",
    deletePage: "Удалить страницу",
    editPage: "Редактировать страницу",
    edit: "Редактировать",
    newPageName: "страница",
    newQuestionName: "вопрос",
    newPanelName: "панель",
    newTextItemName: "текст",
    defaultV2Theme: "По умолчанию",
    modernTheme: "Современный",
    defaultTheme: "По умолчанию (устаревшая)",
    testSurveyAgain: "Тестировать еще раз",
    testSurveyWidth: "Ширина опросника",
    navigateToMsg: "Вы должны были перейти к",
    saveSurvey: "Сохранить опросник",
    saveSurveyTooltip: "Сохранить опрос",
    saveTheme: "Сохранить тему",
    saveThemeTooltip: "Сохранить тему",
    jsonHideErrors: "Скрыть ошибки",
    jsonShowErrors: "Показать ошибки",
    undo: "Отменить",
    redo: "Повтор",
    undoTooltip: "Отменить последнее изменение",
    redoTooltip: "Повторите изменение",
    expandTooltip: "Расширять",
    collapseTooltip: "Коллапс",
    expandAllTooltip: "Развернуть все",
    collapseAllTooltip: "Свернуть все",
    zoomInTooltip: "Увеличить",
    zoom100Tooltip: "Увеличьте масштаб до 100%",
    zoomOutTooltip: "Уменьшение масштаба",
    lockQuestionsTooltip: "Блокировка состояния развертывания/свертывания для вопросов",
    showMoreChoices: "Развернуть",
    showLessChoices: "Показать меньше",
    copy: "Копировать",
    cut: "Резать",
    paste: "Паста",
    copyTooltip: "Копирование выделенного фрагмента в буфер обмена",
    cutTooltip: "Вырезать выделение в буфер обмена",
    pasteTooltip: "Вставка из буфера обмена",
    options: "Параметры",
    generateValidJSON: "Сформировать валидный JSON",
    generateReadableJSON: "Сформировать читаемый JSON",
    toolbox: "Панель инструментов",
    "property-grid": "Свойства",
    toolboxFilteredTextPlaceholder: "Введите для поиска...",
    toolboxNoResultsFound: "Никаких результатов не найдено",
    propertyGridFilteredTextPlaceholder: "Введите для поиска...",
    propertyGridNoResultsFound: "Никаких результатов не найдено",
    propertyGridPlaceholderTitle: "Начните настройку формы",
    propertyGridPlaceholderDescription: "Нажмите на любой значок категории, чтобы ознакомиться с настройками опроса. Дополнительные настройки станут доступны после добавления элемента опроса в область конструктора.",
    correctJSON: "Пожалуйста, исправьте JSON.",
    surveyResults: "Результаты обследования",
    surveyResultsTable: "Как таблица",
    surveyResultsJson: "Как JSON",
    resultsTitle: "Заголовок вопроса",
    resultsName: "Название вопроса",
    resultsValue: "Значение ответа",
    resultsDisplayValue: "Отображаемое значение",
    modified: "Модифицирован",
    saving: "Сохранение",
    saved: "Сохраненный",
    propertyEditorError: "Ошибка",
    saveError: "Ошибка! Содержание редактора не сохранено.",
    translationPropertyGridTitle: "Языковые настройки",
    themePropertyGridTitle: "Настройки темы",
    addLanguageTooltip: "Добавить язык",
    translationLanguages: "Языки",
    translationDeleteLanguage: "Вы уверены, что хотите удалить все строки для этого языка?",
    translationAddLanguage: "Выберите дополнительный язык опросника",
    translationShowAllStrings: "Показывать все строки",
    translationShowUsedStringsOnly: "Используются только строки",
    translationShowAllPages: "Показывать все страницы",
    translationNoStrings: "Нет строк для перевода. Пожалуйста, измените фильтр.",
    translationExportToSCVButton: "Экспорт в CSV",
    translationImportFromSCVButton: "Импорт из CSV",
    translateUsigAI: "Автоматический перевод всех",
    translateUsigAIFrom: "Перевести с: ",
    translationDialogTitle: "Непереведенные строки",
    translationMergeLocaleWithDefault: "Объединить {0} с локалью по умолчанию",
    translationPlaceHolder: "Перевод...",
    translationSource: "Источник: ",
    translationTarget: "Цель: ",
    translationYouTubeNotSupported: "Ссылки на YouTube не поддерживаются.",
    themeExportButton: "Экспорт",
    themeImportButton: "Импорт",
    surveyJsonExportButton: "Экспорт",
    surveyJsonImportButton: "Импорт",
    surveyJsonCopyButton: "Копировать в буфер",
    themeResetButton: "Сброс настроек темы по умолчанию",
    themeResetConfirmation: "Вы действительно хотите сбросить тему? Все ваши настройки будут потеряны.",
    themeResetConfirmationOk: "Да, сбросьте тему",
    bold: "Жирный",
    italic: "Курсив",
    underline: "Подчеркивание",
    addNewQuestion: "Добавить вопрос",
    selectPage: "Выберите страницу...",
    carryForwardChoicesCopied: "Варианты копируются из",
    choicesLoadedFromWebText: "Варианты загружаются из веб-службы.",
    choicesLoadedFromWebLinkText: "Перейдите в настройки",
    choicesLoadedFromWebPreviewTitle: "Предварительный просмотр загруженных вариантов выбора",
    htmlPlaceHolder: "HTML-контент будет здесь.",
    panelPlaceHolder: "Задайте вопрос с панели инструментов здесь.",
    surveyPlaceHolder: "Опрос пуст. Перетащите элемент с панели инструментов или нажмите кнопку ниже.",
    pagePlaceHolder: "Страница пуста. Перетащите элемент с панели инструментов или нажмите кнопку ниже.",
    imagePlaceHolder: "Перетащите изображение сюда или нажмите кнопку ниже и выберите изображение для загрузки",
    surveyPlaceHolderMobile: "Нажмите кнопку «Добавить вопрос» ниже, чтобы начать создание формы.",
    surveyPlaceholderTitle: "Ваша форма пуста",
    surveyPlaceholderTitleMobile: "Ваша форма пуста",
    surveyPlaceholderDescription: "Перетащите элемент из панели инструментов или нажмите кнопку ниже.",
    surveyPlaceholderDescriptionMobile: "Перетащите элемент из панели инструментов или нажмите кнопку ниже.",
    previewPlaceholderTitle: "Без предварительного просмотра",
    previewPlaceholderTitleMobile: "Без предварительного просмотра",
    previewPlaceholderDescription: "Опрос не содержит никаких видимых элементов.",
    previewPlaceholderDescriptionMobile: "Опрос не содержит никаких видимых элементов.",
    translationsPlaceholderTitle: "Никаких строк для перевода",
    translationsPlaceholderTitleMobile: "Никаких строк для перевода",
    translationsPlaceholderDescription: "Добавляйте элементы в форму или изменяйте фильтр строк на панели инструментов.",
    translationsPlaceholderDescriptionMobile: "Добавляйте элементы в форму или изменяйте фильтр строк на панели инструментов.",
    pagePlaceHolderMobile: "Нажмите кнопку «Добавить вопрос» ниже, чтобы добавить новый элемент на страницу.",
    panelPlaceHolderMobile: "Нажмите кнопку «Добавить вопрос» ниже, чтобы добавить новый элемент на панель.",
    imagePlaceHolderMobile: "Нажмите кнопку ниже и выберите изображение для загрузки",
    imageChooseImage: "Выберите изображение",
    addNewTypeQuestion: "Добавить {0}", //{0} is localizable question type
    chooseLogoPlaceholder: "[ЛОГОТИП]",
    choices_Item: "Пункт ",
    selectFile: "Выберите файл",
    removeFile: "Удалите файл",
    lg: {
      addNewItem: "Добавить новое правило",
      empty_tab: "Создайте правило для настройки потока опроса.",
      logicPlaceholderTitle: "Никаких логических правил",
      logicPlaceholderTitleMobile: "Никаких логических правил",
      logicPlaceholderDescription: "Создайте правило для настройки потока опроса.",
      logicPlaceholderDescriptionMobile: "Создайте правило для настройки потока опроса.",
      page_visibilityName: "Видимость страницы",
      page_enableName: "Включить (отключить) страницу",
      page_requireName: "Сделать страницу обязательной",
      panel_visibilityName: "Видимость панели",
      panel_enableName: "Панель включена/выключена",
      panel_requireName: "Сделать страницу обязательной",
      question_visibilityName: "Видимость вопроса",
      question_enableName: "Вопрос включен/выключен",
      question_requireName: "Вопрос обязательный",
      question_resetValueName: "Сбросить значение вопроса",
      question_setValueName: "Задать значение вопроса",
      column_visibilityName: "Показать (скрыть) столбец",
      column_enableName: "Включить (отключить) столбец",
      column_requireName: "Сделать столбец обязательным",
      column_resetValueName: "Сброс значения столбца",
      column_setValueName: "Задание значения столбца",
      trigger_completeName: "Опрос завершен",
      trigger_setvalueName: "Установить значение вопроса",
      trigger_copyvalueName: "Копировать значение вопроса",
      trigger_skipName: "Перейти к вопросу",
      trigger_runExpressionName: "Запустить пользовательское выражение",
      completedHtmlOnConditionName: "Пользовательский текст 'Страницы благодарности'",
      page_visibilityDescription: "Сделать страницу видимой, когда логическое выражение вернет 'true'. В противном случае сделать ее невидимой.",
      panel_visibilityDescription: "Сделать панель видимой, когда логическое выражение вернет 'true'. В противном случае сделать ее невидимой.",
      panel_enableDescription: "Сделать панель и все элементы внутри нее включенной, когда логическое выражение вернет 'true'. В противном случае оставить их отключенными.",
      question_visibilityDescription: "Сделать вопрос видимой, когда логическое выражение вернет 'true'. В противном случае сделать ее невидимой.",
      question_enableDescription: "Сделать вопрос включенным, когда логическое выражение вернет 'true'. В противном случае оставить его отключенными.",
      question_requireDescription: "Вопрос становится обязательным, когда логическое выражение вернет 'true'.",
      trigger_completeDescription: "Когда логическое выражение вернет 'true', то опрос становится завершенным и конечный пользователь видит 'Страницу благодарности'.",
      trigger_setvalueDescription: "Когда значения вопросов, которые используются в логическом выражении, изменяются и логическое выражение возвращает значение 'true', тогда на выбранный вопрос устанавливается значение.",
      trigger_copyvalueDescription: "Когда значения вопросов, которые используются в логическом выражении, изменяются и логическое выражение возвращает значение 'true', тогда значение одного выбранного вопроса копируется в другой выбранный вопрос.",
      trigger_skipDescription: "Когда логическое выражение вернет 'true', тогда опрос переходит к/фокусируется на выбранном вопросе.",
      trigger_runExpressionDescription: "Когда логическое выражение возвращает 'true',тогда выполняется пользовательское выражение. Вы можете при желании установить этот результат выражения в выбранный вопрос.",
      completedHtmlOnConditionDescription: "Если логическое выражение возвращает 'true', то текст по умолчанию для 'Страницы благодарности' изменяется на заданный.",
      itemExpressionText: "Когда выражение: '{0}' возвращает 'true'", //{0} - the expression
      itemEmptyExpressionText: "Новое правило",
      page_visibilityText: "Сделать страницу {0} видимой", //{0} page name
      panel_visibilityText: "Сделать панель {0} видимой", //{0} panel name
      panel_enableText: "Сделать панель {0} включенной", //{0} panel name
      question_visibilityText: "Сделать вопрос {0} видимым", //{0} question name
      question_enableText: "Сделать вопрос {0} включенным", //{0} question name
      question_requireText: "Сделать вопрос {0} обязательным", //{0} question name
      question_resetValueText: "Сброс значения для вопроса: {0}", //{0} question name.
      question_setValueText: "присвоить значение: {1} к вопросу: {0}",
      column_visibilityText: "Сделайте видимым {0} {1} в столбце вопроса", //{0} column name, {1} question name
      column_enableText: "Сделайте столбец {0} вопроса {1} включите", //{0} column name, {1} question name
      column_requireText: "Сделайте {0} вопроса {1} обязательным для заполнения", //{0} column name, {1} question name
      column_resetValueText: "Сброс значения ячейки для столбца: {0}", //{0} column name
      column_setValueText: "Присвойте значение ячейки: {1} столбцу: {0}", //{0} column name and {1} setValueExpression
      setValueExpressionPlaceholder: " Выражение, результат которого будет присвоен целевому вопросу.",
      trigger_completeText: "Опрос становится завершенным",
      trigger_setvalueText: "Установить в вопрос: {0} значение {1}", //{0} question name, {1} setValue
      trigger_setvalueEmptyText: "Четкое значение вопроса: {0}", //{0} question name
      trigger_copyvalueText: "Копировать в вопрос: {0} значение из вопроса {1}", //{0} and {1} question names
      trigger_skipText: "Опрос переходит к вопросу {0}", //{0} question name
      trigger_runExpressionText1: "Выполнить выражение: '{0}'", //{0} the expression
      trigger_runExpressionText2: "и установить его результат в вопрос: {0}", //{0} question name
      completedHtmlOnConditionText: "Показывать пользовательский текст для 'Страницы благодарности'.",
      showAllQuestions: "Все вопросы",
      showAllActionTypes: "Все типы действий",
      conditions: "Состояние(я)",
      actions: "Действие(я)",
      expressionEditorTitle: "Настройка логики выражения",
      actionsEditorTitle: "Определение действий",
      deleteAction: "Действие «Удалить»",
      addNewAction: "Добавить действие",
      selectedActionCaption: "Выберите действие...",
      expressionInvalid: "Логическое выражение пустое или недействительное. Пожалуйста, исправьте его.",
      noActionError: "Пожалуйста, добавьте хотя бы одно действие.",
      actionInvalid: "Пожалуйста, исправьте проблемы в ваших действиях.",
      uncompletedRule_title: "Логические правила неполны",
      uncompletedRule_text: "Вы не выполнили некоторые логические правила. Если вы покинете вкладку сейчас, изменения будут потеряны. Вы все еще хотите покинуть вкладку, не завершив изменения?",
      uncompletedRule_apply: "Да",
      uncompletedRule_cancel: "Нет, я хочу дополнить правила"
    }
  },
  // Property Editors
  pe: {
    panel: {
      name: "Название панели",
      title: "Заголовок панели",
      description: "Описание панели",
      visibleIf: "Сделать панель видимой, если",
      requiredIf: "Сделайте панель обязательной, если",
      questionOrder: "Порядок вопросов на панели",
      page: "Родительская страница",
      startWithNewLine: "Отображение панели на новой строке",
      state: "Состояние свертывания панели",
      width: "Встроенная ширина панели",
      minWidth: "Минимальная ширина панели",
      maxWidth: "Максимальная ширина панели",
      showNumber: "Пронумеруйте эту панель"
    },
    panellayoutcolumn: {
      effectiveWidth: "Полезная ширина, %",
      questionTitleWidth: "Ширина заголовка вопроса, px"
    },
    paneldynamic: {
      name: "Название панели",
      title: "Заголовок панели",
      description: "Описание панели",
      visibleIf: "Сделать панель видимой, если",
      requiredIf: "Сделайте панель обязательной, если",
      page: "Переместите панель на страницу",
      startWithNewLine: "Отображение панели на новой строке",
      state: "Состояние свертывания панели",
      width: "Встроенная ширина панели",
      minWidth: "Минимальная ширина панели",
      maxWidth: "Максимальная ширина панели",
      confirmDelete: "Подтвердите удаление панели",
      templateDescription: "Шаблон описания панели",
      templateTitle: "Шаблон заголовка панели",
      noEntriesText: "Пустой текст на панели",
      templateTabTitle: "Шаблон заголовка вкладки",
      tabTitlePlaceholder: "Заполнитель заголовка вкладки",
      templateVisibleIf: "Сделать отдельную панель видимой, если",
      showNumber: "Пронумеруйте панель",
      titleLocation: "Выравнивание заголовков панелей",
      descriptionLocation: "Выравнивание описания панели",
      templateQuestionTitleLocation: "Выравнивание заголовка вопроса",
      templateQuestionTitleWidth: "Ширина заголовка вопроса",
      templateErrorLocation: "Выравнивание сообщений об ошибках",
      newPanelPosition: "Новое расположение панели",
      showRangeInProgress: "Отображение индикатора выполнения",
      keyName: "Предотвращение дублирования ответов в следующем вопросе"
    },
    question: {
      name: "Название вопроса",
      title: "Заголовок вопроса",
      description: "Описание вопроса",
      visibleIf: "Сделайте вопрос видимым, если",
      requiredIf: "Сделайте вопрос обязательным, если",
      page: "Родительская страница",
      state: "Состояние сворачивания окна вопроса",
      showNumber: "Пронумеруйте этот вопрос",
      titleLocation: "Выравнивание заголовка вопроса",
      descriptionLocation: "Выравнивание описания вопроса",
      errorLocation: "Выравнивание сообщений об ошибках",
      indent: "Увеличьте внутренний отступ",
      width: "Ширина встроенного вопроса",
      minWidth: "Минимальная ширина вопроса",
      maxWidth: "Максимальная ширина вопроса",
      textUpdateMode: "Обновление значения поля ввода"
    },
    signaturepad: {
      signatureWidth: "Ширина области подписи",
      signatureHeight: "Высота области подписи",
      signatureAutoScaleEnabled: "Автоматическое масштабирование области подписи",
      showPlaceholder: "Показать замещающий текст",
      placeholder: "Замещающий текст",
      placeholderReadOnly: "Замещающий текст в режиме только для чтения или предварительного просмотра",
      allowClear: "Отображение кнопки «Очистить» в области подписи",
      penMinWidth: "Минимальная ширина пера",
      penMaxWidth: "Максимальная ширина пера",
      penColor: "Цвет обводки"
    },
    comment: {
      rows: "Высота поля ввода (в строках)"
    },
    showQuestionNumbers: "Показывать номера вопросов",
    questionStartIndex: "Начальный индекс вопроса (1, 2 или 'A', 'а')",
    expression: {
      name: "Имя выражения",
      title: "Заголовок выражения",
      description: "Описание выражения",
      expression: "Выражение"
    },
    trigger: {
      expression: "Выражение"
    },
    calculatedvalue: {
      expression: "Выражение"
    },
    // survey templates
    survey: {
      title: "Титул",
      description: "Описание опроса",
      readOnly: "Сделайте опрос доступным только для чтения"
    },
    page: {
      name: "Название страницы",
      title: "Титул",
      description: "Описание страницы",
      visibleIf: "Сделайте страницу видимой, если",
      requiredIf: "Сделайте страницу обязательной, если",
      timeLimit: "Ограничение по времени завершения страницы (в секундах)",
      questionOrder: "Порядок вопросов на странице"
    },
    matrixdropdowncolumn: {
      name: "Имя столбца",
      title: "Заголовок столбца",
      isUnique: "Предотвращение дублирования ответов",
      width: "Ширина столбца",
      minWidth: "Минимальная ширина столбца",
      rows: "Высота поля ввода (в строках)",
      visibleIf: "Сделайте столбец видимым, если",
      requiredIf: "Сделайте столбец обязательным, если",
      showInMultipleColumns: "Каждый вариант в отдельной колонке"
    },
    multipletextitem: {
      name: "Имя",
      title: "Титул"
    },
    masksettings: {
      saveMaskedValue: "Сохранение замаскированного значения в результатах опроса"
    },
    patternmask: {
      pattern: "Шаблон значения"
    },
    datetimemask: {
      min: "Минимальное значение",
      max: "Максимальное значение"
    },
    numericmask: {
      allowNegativeValues: "Разрешить отрицательные значения",
      thousandsSeparator: "Разделитель тысяч",
      decimalSeparator: "Десятичный разделитель",
      precision: "Точность значений",
      min: "Минимальное значение",
      max: "Максимальное значение"
    },
    currencymask: {
      prefix: "Префикс валюты",
      suffix: "Суффикс валюты"
    },
    imageHeight: "Высота изображения",
    imageWidth: "Ширина изображения",
    valueName: "Название пункта",
    defaultDisplayValue: "Отображаемое значение по умолчанию для динамических текстов",
    rateDescriptionLocation: "Выравнивание меток",
    size: "Размер поля ввода (в символах)",
    cellErrorLocation: "Выравнивание сообщений об ошибках ячеек",
    enabled: "Включен",
    disabled: "Нетрудоспособный",
    inherit: "Наследовать",
    apply: "Применить",
    ok: "OK",
    save: "Сохранить",
    clear: "Ясный",
    saveTooltip: "Спасать",
    cancel: "Отменить",
    set: "Набор",
    reset: "Сброс",
    change: "Менять",
    refresh: "Освежать",
    close: "Закрыть",
    delete: "Удалить",
    add: "Добавить",
    addNew: "Добавить новый",
    addItem: "Нажмите, чтобы добавить элемент...",
    removeItem: "Нажмите, чтобы удалить элемент...",
    dragItem: "Перетащите элемент",
    addOther: "Другое",
    addSelectAll: "Выбрать все пункты",
    addNone: "Ничего",
    removeAll: "Удалить все",
    edit: "Редактировать",
    back: "Вернуться без сохранения",
    backTooltip: "Возврат без экономии",
    saveAndBack: "Сохранить и вернуться",
    saveAndBackTooltip: "Сохранить и вернуть",
    doneEditing: "Договорились",
    editChoices: "Редактировать выбор",
    showChoices: "Показать варианты",
    move: "Переместить",
    empty: "<пусто>",
    emptyValue: "Значение пусто",
    fastEntry: "Быстрый вход",
    fastEntryNonUniqueError: "Значение «{0}» не уникально",
    fastEntryChoicesCountError: "Пожалуйста, ограничьте количество предметов от {0} до {1}",
    fastEntryChoicesMinCountError: "Пожалуйста, введите не менее {0} пунктов",
    fastEntryPlaceholder: "Вы можете задать данные в следующем формате:\nзначение1|текст\nзначение2",
    formEntry: "Форма входа",
    testService: "Тест услуги",
    itemSelectorEmpty: "Пожалуйста, выберите элемент",
    conditionActionEmpty: "Пожалуйста, выберите действие",
    conditionSelectQuestion: "Выберите вопрос ...",
    conditionSelectPage: "Выбрать страницу ...",
    conditionSelectPanel: "Выберите панель ...",
    conditionValueQuestionTitle: "Пожалуйста, введите/выберите значение",
    aceEditorHelp: "Нажмите Ctrl+Пробел, чтобы получить подсказки",
    aceEditorRowTitle: "Текущая строка",
    aceEditorPanelTitle: "Текущая панель",
    showMore: "Для получения более подробной информации, пожалуйста, перейдите к документации",
    assistantTitle: "Доступные вопросы",
    cellsEmptyRowsColumns: "Должен быть хотя бы один столбец или строка",
    showPreviewBeforeComplete: "Предварительный просмотр ответов перед отправкой опроса",
    overridingPropertyPrefix: "Откладывать ",
    resetToDefaultCaption: "Сброс",
    propertyIsEmpty: "Пожалуйста, введите значение",
    propertyIsNoUnique: "Пожалуйста, введите уникальное значение",
    propertyNameIsNotUnique: "Пожалуйста, введите уникальное имя",
    propertyNameIsIncorrect: "Не используйте зарезервированные слова: «элемент», «выбор», «панель», «строка».",
    listIsEmpty: "Добавьте новое условие",
    "listIsEmpty@choices": "Варианты еще не добавлены",
    "listIsEmpty@columns": "У вас еще нет столбцов",
    "listIsEmpty@gridLayoutColumns": "У вас еще нет столбцов макета",
    "listIsEmpty@rows": "У вас еще нет строк",
    "listIsEmpty@validators": "У вас еще нет правил валидации",
    "listIsEmpty@calculatedValues": "У вас еще нет пользовательских переменных",
    "listIsEmpty@triggers": "У вас еще нет триггеров",
    "listIsEmpty@navigateToUrlOnCondition": "У вас еще нет ссылок",
    "listIsEmpty@pages": "У вас еще нет страниц",
    "addNew@choices": "Добавить выбор",
    "addNew@columns": "Добавить новый столбец",
    "addNew@rows": "Добавить новую строку",
    "addNew@validators": "Добавить новое правило",
    "addNew@calculatedValues": "Добавить новую переменную",
    "addNew@triggers": "Добавить новый триггер",
    "addNew@navigateToUrlOnCondition": "Добавить новый URL-адрес",
    "addNew@pages": "Добавить новую страницу",
    expressionIsEmpty: "Выражение - пустое",
    value: "Значение",
    text: "Текст",
    rowid: "ID строки",
    imageLink: "Ссылка на изображение",
    columnEdit: "Изменить столбец: {0}",
    itemEdit: "Редактировать элемент: {0}",
    url: "URL",
    path: "Путь",
    choicesbyurl: {
      url: "URL-адрес веб-службы",
      valueName: "Получение значений из следующего поля JSON"
    },
    titleName: "Заголовок пункта",
    imageLinkName: "Получение URL-адресов изображений из следующего поля JSON",
    allowEmptyResponse: "Разрешить пустой ответ",
    titlePlaceholder: "Введите заголовок",
    surveyTitlePlaceholder: "Введите заголовок опроса",
    pageTitlePlaceholder: "Введите заголовок страницы",
    startPageTitlePlaceholder: "Стартовая страница",
    descriptionPlaceholder: "Введите описание",
    surveyDescriptionPlaceholder: "Введите описание опроса",
    pageDescriptionPlaceholder: "Введите описание страницы",
    textWrapEnabled: "Варианты обертывания",
    showOtherItem: "Есть пункт 'Другое'",
    otherText: "Текст пункта 'Другое'",
    showNoneItem: "Нет ни одного пункта",
    showRefuseItem: "Разрешить опцию «Отказаться от ответа»",
    showDontKnowItem: "Разрешить опцию «Не знаю»",
    noneText: "Текст пункта 'Ничего'",
    showSelectAllItem: "Выбрать все пункты",
    selectAllText: "Текст пункта 'Выбрать все пункты'",
    choicesMin: "Минимальное значение для автоматически сгенерированных элементов",
    choicesMax: "Максимальное значение для автоматически сгенерированных элементов",
    choicesStep: "Разница между автоматически сгенерироваными элементами",
    name: "Название",
    title: "Заголовок",
    cellType: "Тип ячейки",
    colCount: "Количество столбцов",
    choicesOrder: "Выбрать порядок отбора",
    allowCustomChoices: "Как разрешить пользовательский выбор",
    visible: "Отображать?",
    isRequired: "Обязательный?",
    markRequired: "Отметьте как обязательный",
    removeRequiredMark: "Снимите нужную отметку",
    eachRowRequired: "Все строки обязательны для заполнения",
    eachRowUnique: "Предотвращение дублирования ответов в строках",
    requiredErrorText: "Это поле обязательное для заполнения",
    startWithNewLine: "Начинать с новой строки?",
    rows: "Количество строк",
    cols: "Столбцы",
    placeholder: "Заполнитель области ввода",
    showPreview: "Показать предпросмотр?",
    storeDataAsText: "Хранить содержимое файла в формате JSON как текст",
    maxSize: "Максимальный размер файла (в байтах)",
    rowCount: "Количество строк",
    columnLayout: "Макет столбцов",
    addRowButtonLocation: "Добавить расположение кнопки строки",
    transposeData: "Транспонирование строк в столбцы",
    addRowText: "Добавить текст кнопки строки",
    removeRowText: "Удалить кнопку строки текста",
    rateMin: "Минимальный рейтинг",
    rateMax: "Максимальный рейтинг",
    rateStep: "Шаг рейтинга",
    minRateDescription: "Описание для минимального рейтинга",
    maxRateDescription: "Описание для максимального рейтинга",
    inputType: "Тип ввода",
    optionsCaption: "Параметры подписи",
    defaultValue: "Ответ по умолчанию",
    cellsDefaultRow: "Текст ячеек по умолчанию",
    surveyEditorTitle: "Настройки опросника",
    qEditorTitle: "Изменить: {0}",
    maxLength: "Максимальная длина",
    buildExpression: "Собрать",
    editExpression: "Редактировать",
    and: "и",
    or: "или",
    remove: "Переместить",
    addCondition: "добавить условие",
    emptyLogicPopupMessage: "Выберите вопрос, чтобы начать настройку условий.",
    if: "Если",
    then: "тогда",
    setToName: "Целевой вопрос",
    fromName: "Вопрос для копирования ответа",
    gotoName: "Вопрос, к которому нужно перейти",
    ruleIsNotSet: "Правило неверно",
    includeIntoResult: "Включить в результаты опроса",
    showTitle: "Показать/скрыть заголовок",
    expandCollapseTitle: "Развернуть/свернуть заголовок",
    locale: "Язык по умолчанию",
    simulator: "Выберите устройство",
    landscapeOrientation: "Альбомная",
    portraitOrientation: "Переключение в книжную ориентацию",
    clearInvisibleValues: "Очистить невидимые значения",
    cookieName: "Имя Cookie (отключить повторное прохождение опроса локально)",
    partialSendEnabled: "Показать результаты опроса на странице рядом",
    storeOthersAsComment: "Хранить занчение 'Другое' в отдельном поле",
    showPageTitles: "Показывать заголовки страниц",
    showPageNumbers: "Показывать номера страниц",
    pagePrevText: "Текст в кнопке 'Предыдущая страница'",
    pageNextText: "Текст в кнопке 'Следующая страница'",
    completeText: "Текст в кнопке 'Завершить'",
    previewText: "Текст кнопки «Предварительный просмотр ответов»",
    editText: "Редактировать текст кнопки «Ответ»",
    startSurveyText: "Текст в кнопке 'Начать'",
    showNavigationButtons: "Показывать кнопки навигации (навигация по умолчанию)",
    navigationButtonsLocation: "Выравнивание кнопок навигации",
    showPrevButton: "Показывать кнопки 'Предыдущая страница' (пользователь может вернуться на предыдущую страницу)",
    firstPageIsStartPage: "Первая страница опросника является стартовой страницей.",
    showCompletePage: "Показывать страницу с текстом по завершению заполнения (HTML финальной страницы)",
    autoAdvanceEnabled: "Переходить на следующую страницу автоматически при заполнении всех вопросов",
    autoAdvanceAllowComplete: "Автоматическое заполнение опроса",
    showProgressBar: "Показывать прогресс заполнения",
    progressBarLocation: "Выравнивание полосы прогресса",
    questionTitleLocation: "Расположение заголовка вопроса",
    questionTitleWidth: "Ширина заголовка вопроса",
    requiredMark: "Символ для обязательного вопроса",
    questionTitleTemplate: "Шаблон названия опроса, по умолчанию: {не} {требует} {текста}.",
    questionErrorLocation: "Размещение ошибки опроса",
    autoFocusFirstQuestion: "Фокусирование на первом вопросе при изменении страницы",
    questionOrder: "Сортировка элементов на странице",
    timeLimit: "Максимальное время в секундах, чтобы заполнить опросник",
    timeLimitPerPage: "Максимальное время в секундах, чтобы заполнить страницу опросника",
    showTimer: "Используйте таймер",
    timerLocation: "Показывать панель таймера",
    timerInfoMode: "Показывать режим панели таймера",
    renderMode: "Режим отображения панели",
    allowAddPanel: "Разрешить добавление панели",
    allowRemovePanel: "Разрешить удаление панели",
    addPanelText: "Добавление текста на панели",
    removePanelText: "Удаление текста на панели",
    isSinglePage: "Показывать все элементы на одной странице",
    html: "HTML-разметка",
    setValue: "Ответ",
    dataFormat: "Формат изображения",
    allowAddRows: "Разрешить добавление строк",
    allowRemoveRows: "Разрешить удаление строк",
    allowRowReorder: "Разрешить перетаскивание строк",
    responsiveImageSizeHelp: "Не применяется, если указана точная ширина или высота изображения.",
    minImageWidth: "Минимальная ширина изображения",
    maxImageWidth: "Максимальная ширина изображения",
    minImageHeight: "Минимальная высота изображения",
    maxImageHeight: "Максимальная высота изображения",
    minValue: "Минимальное значение",
    maxValue: "Максимальное значение",
    caseInsensitive: "Учет регистра",
    minLength: "Минимальная длина (в символах)",
    allowDigits: "Разрешить цифры",
    minCount: "Минимальное количество",
    maxCount: "Максимальное количество",
    regex: "Регулярное выражение",
    surveyvalidator: {
      text: "Сообщение об ошибке",
      expression: "Проверочное выражение"
    },
    totalText: "Общий текст",
    totalType: "Общий тип",
    totalExpression: "Общее выражение",
    totalDisplayStyle: "Общий стиль отображения",
    totalCurrency: "Общая валюта",
    totalFormat: "Общий формат",
    logo: "Логотип (URL-адрес или строка в кодировке base64)",
    questionsOnPageMode: "Структура опроса",
    maxTextLength: "Максимальная длина ответа (в символах)",
    maxCommentLength: "Максимальная длина комментария (в символах)",
    commentAreaRows: "Высота области комментариев (в строках)",
    autoGrowComment: "При необходимости автоматически разверните область комментариев",
    allowResizeComment: "Разрешить пользователям изменять размер текстовых областей",
    textUpdateMode: "Обновление значения текстового вопроса",
    maskType: "Тип входной маски",
    autoFocusFirstError: "Установка фокуса на первом недопустимом ответе",
    checkErrorsMode: "Запуск проверки",
    validateVisitedEmptyFields: "Проверка пустых полей при потере фокуса",
    navigateToUrl: "Перейдите по URL-адресу",
    navigateToUrlOnCondition: "Динамический URL-адрес",
    completedBeforeHtml: "Разметка, показывающая, заполнил ли пользователь уже этот опрос",
    completedHtml: "Опрос Полная разметка страницы",
    completedHtmlOnCondition: "Динамический опрос Полная разметка страницы",
    loadingHtml: "Разметка, отображаемая при загрузке модели опроса",
    commentText: "Текст области комментариев",
    autocomplete: "Тип автозаполнения",
    labelTrue: "Метка «Истина»",
    labelFalse: "«Ложный» ярлык",
    allowClear: "Показать кнопку «Очистить»",
    searchMode: "Режим поиска",
    displayStyle: "Стиль отображения значений",
    format: "Форматированная строка",
    maximumFractionDigits: "Максимальное количество дробных цифр",
    minimumFractionDigits: "Минимальные дробные цифры",
    useGrouping: "Разделители группировки дисплеев",
    allowMultiple: "Разрешить несколько файлов",
    allowImagesPreview: "Предварительный просмотр изображений",
    acceptedTypes: "Допустимые типы файлов",
    waitForUpload: "Дождитесь завершения загрузки",
    needConfirmRemoveFile: "Подтвердите удаление файла",
    detailPanelMode: "Расположение панели сведений",
    minRowCount: "Минимальное количество строк",
    maxRowCount: "Максимальное количество строк",
    confirmDelete: "Подтверждение удаления строки",
    confirmDeleteText: "Подтверждающее сообщение",
    panelCount: "Начальное количество панелей",
    minPanelCount: "Минимальное количество панелей",
    maxPanelCount: "Максимальное количество панелей",
    panelsState: "Состояние расширения внутренней панели",
    prevPanelText: "Предыдущая всплывающая подсказка кнопки «Панель»",
    nextPanelText: "Всплывающая подсказка кнопки «Следующая панель»",
    removePanelButtonLocation: "Удалить расположение кнопки «Панель»",
    hideIfRowsEmpty: "Скрыть вопрос, если нет строк",
    hideColumnsIfEmpty: "Скрытие столбцов, если строк нет",
    rateValues: "Пользовательские значения тарифов",
    rateCount: "Количество ставок",
    autoGenerate: "Как указать значения тарифов?",
    hideIfChoicesEmpty: "Скрыть вопрос, если он не содержит вариантов",
    minWidth: "Минимальная ширина (в значениях, принимаемых CSS)",
    maxWidth: "Максимальная ширина (в значениях, принимаемых CSS)",
    width: "Ширина (в значениях, принимаемых CSS)",
    showHeader: "Показать заголовки столбцов",
    horizontalScroll: "Показать горизонтальную полосу прокрутки",
    columnMinWidth: "Минимальная ширина столбца (в значениях, принимаемых CSS)",
    rowTitleWidth: "Ширина заголовка строки (в значениях, принимаемых CSS)",
    valueTrue: "Значение \"True\"",
    valueFalse: "Значение \"False\"",
    minErrorText: "Сообщение об ошибке \"Значение ниже минимального\"",
    maxErrorText: "Сообщение об ошибке «Значение превышает максимальное»",
    otherErrorText: "Сообщение об ошибке «Пустой комментарий»",
    keyDuplicationError: "Сообщение об ошибке \"Неуникальное значение ключа\"",
    minSelectedChoices: "Минимальное количество выбранных вариантов",
    maxSelectedChoices: "Максимальное количество выбранных вариантов",
    logoWidth: "Ширина логотипа (в значениях, принимаемых CSS)",
    logoHeight: "Высота логотипа (в значениях, принимаемых CSS)",
    readOnly: "Только для чтения",
    enableIf: "Редактируется, если",
    noRowsText: "Сообщение \"Нет строк\"",
    separateSpecialChoices: "Отдельные специальные варианты («Нет», «Другое», «Выбрать все»)",
    choicesFromQuestion: "Копирование вариантов из следующего вопроса",
    choicesFromQuestionMode: "Какие варианты скопировать?",
    choiceValuesFromQuestion: "Используйте значения из следующего столбца матрицы или вопроса панели в качестве идентификаторов выбора",
    choiceTextsFromQuestion: "Используйте значения из следующего столбца матрицы или панельного вопроса в качестве текстов для выбора",
    progressBarShowPageTitles: "Отображение заголовков страниц в индикаторе выполнения",
    progressBarShowPageNumbers: "Отображение номеров страниц в индикаторе выполнения",
    showCommentArea: "Показать область комментариев",
    commentPlaceholder: "Заполнитель области комментариев",
    displayRateDescriptionsAsExtremeItems: "Отображение описаний скоростей в виде экстремальных значений",
    rowOrder: "Порядок строк",
    columnsLayout: "Расположение столбцов",
    columnColCount: "Количество вложенных столбцов",
    correctAnswer: "Правильный ответ",
    defaultPanelValue: "Значения по умолчанию",
    cells: "Тексты ячеек",
    fileInputPlaceholder: "Выберите файл или вставьте ссылку на файл...",
    keyName: "Ключевая колонка",
    itemvalue: {
      visibleIf: "Сделайте опцию видимой, если",
      enableIf: "Сделайте опцию выбираемой, если"
    },
    "itemvalue@rows": {
      visibleIf: "Сделайте строку видимой, если",
      enableIf: "Сделайте строку редактируемой, если"
    },
    imageitemvalue: {
      text: "Замещающий текст"
    },
    logoPosition: "Местоположение логотипа",
    addLogo: "Добавить логотип...",
    changeLogo: "Изменить логотип...",
    logoPositions: {
      none: "Разместить логотип",
      left: "Слева",
      right: "Справа",
      top: "Сверху",
      bottom: "Снизу"
    },
    previewMode: "Режим предварительного просмотра",
    gridLayoutEnabled: "Включение макета сетки",
    gridLayoutColumns: "Столбцы макета сетки",
    maskSettings: "Настройки маски",
    detailErrorLocation: "Выравнивание сообщения об ошибке расширения строк",
    // Creator tabs
    tabs: {
      panel: {
        layout: "Компоновка панелей"
      },
      general: "Общие",
      fileOptions: "Параметры",
      html: "HTML-редактор",
      columns: "Столбцы",
      rows: "Строки",
      choices: "Выбор",
      items: "Элементы",
      visibleIf: "Отображать, если",
      enableIf: "Доступен, если",
      requiredIf: "Обязателен для заполнения, если",
      rateValues: "Оценить важность(вес) вопроса",
      choicesByUrl: "Выбор из Интернета",
      matrixChoices: "Выбор по умолчанию",
      multipleTextItems: "Ввод нескольких текстовых полей",
      numbering: "Нумерация",
      validators: "Валидаторы",
      navigation: "Навигация",
      question: "Вопрос",
      pages: "Страниц",
      timer: "Таймер/Викторина",
      calculatedValues: "Расчетные значения",
      triggers: "Триггеры",
      templateTitle: "Название шаблона",
      totals: "Итоги",
      logic: "Логика",
      mask: "Настройки входной маски",
      layout: {
        panel: "Схема",
        question: "Схема",
        base: "Схема"
      },
      data: "Данные",
      validation: "Проверка",
      cells: "Ячейки",
      showOnCompleted: "Показать по завершению",
      logo: "Логотип в заголовке опросника",
      slider: "Ползун",
      expression: "Выражение",
      questionSettings: "Настройки вопроса",
      header: "Заголовок",
      background: "Фон",
      appearance: "Внешний вид",
      accentColors: "Акцентные цвета",
      surfaceBackground: "Фон поверхности",
      scaling: "Масштабирование",
      others: "Другие"
    },
    editProperty: "Редактировать свойство '{0}'",
    items: "[Элементы: {0}]",
    choicesVisibleIf: "Варианты доступны в следующих случаях:",
    choicesEnableIf: "Варианты можно выбрать, если:",
    columnsEnableIf: "Столбцы видны, если",
    rowsEnableIf: "Строки видны, если",
    innerIndent: "Добавление внутренних отступов",
    copyDefaultValueFromLastEntry: "Используйте ответы из последней записи по умолчанию",
    enterNewValue: "Пожалуйста, введите значение.",
    noquestions: "В опроснике нет ни одного вопроса",
    createtrigger: "Пожалуйста, создайте триггер",
    titleKeyboardAdornerTip: "Нажмите кнопку ввода, чтобы отредактировать",
    keyboardAdornerTip: "Нажмите кнопку ввода, чтобы отредактировать элемент, нажмите кнопку удаления, чтобы удалить элемент, нажмите alt со стрелкой вверх или со стрелкой вниз, чтобы переместить элемент",
    triggerOn: "О",
    triggerMakePagesVisible: "Сделать страницы видимыми",
    triggerMakeQuestionsVisible: "Сделать элементы видимыми",
    triggerCompleteText: "Завершить опрос, если все получися.",
    triggerNotSet: "Тригер не установлен",
    triggerRunIf: "Начать, если",
    triggerSetToName: "Изменить значение",
    triggerFromName: "Скопировать значение из",
    triggerRunExpression: "Выполнить это выражение",
    triggerSetValue: "в",
    triggerGotoName: "Перейти к вопросу",
    triggerIsVariable: "Не помещать переменную в результат опросника.",
    triggerRunExpressionEmpty: "Пожалуйста, введите корректное выражение",
    emptyExpressionPlaceHolder: "Введите выражение здесь...",
    noFile: "Файл не выбран",
    clearIfInvisible: "Очистите значение, если вопрос становится скрытым",
    valuePropertyName: "Имя свойства value",
    searchEnabled: "Включить поиск",
    hideSelectedItems: "Скрытие выбранных элементов",
    closeOnSelect: "Закрыть раскрывающийся список после выбора",
    verticalAlign: "Выравнивание по вертикали",
    alternateRows: "Чередующиеся строки",
    columnsVisibleIf: "Столбцы видны, если",
    rowsVisibleIf: "Строки видны, если",
    otherPlaceholder: "Заполнитель области комментариев",
    filePlaceholder: "Замещающий текст файла",
    photoPlaceholder: "Замещающий текст фотографии",
    fileOrPhotoPlaceholder: "Замещающий текст файла или фотографии",
    rateType: "Тип тарифа",
    url_placeholder: "Пример: https://api.example.com/books",
    path_placeholder: "Пример: categories.fiction",
    questionStartIndex_placeholder: "Пример: а)",
    width_placeholder: "Пример: 6 дюймов",
    minWidth_placeholder: "Пример: 600px",
    maxWidth_placeholder: "Пример: 50%",
    imageHeight_placeholder: "Авто",
    imageWidth_placeholder: "Авто",
    itemTitleWidth_placeholder: "Пример: 100px",
    theme: {
      themeName: "Тема",
      isPanelless: "Внешний вид вопроса",
      editorPanel: "Радиус фона и угла",
      questionPanel: "Радиус фона и угла",
      primaryColor: "Акцентный цвет",
      panelBackgroundTransparency: "Непрозрачность фона панели",
      questionBackgroundTransparency: "Непрозрачность фона вопроса",
      fontSize: "Размер шрифта",
      scale: "Шкала",
      cornerRadius: "Радиус закругления угла",
      advancedMode: "Расширенный режим",
      pageTitle: "Шрифт заголовка",
      pageDescription: "Описание шрифта",
      questionTitle: "Шрифт заголовка",
      questionDescription: "Описание шрифта",
      editorFont: "Шрифт",
      backgroundOpacity: "Непрозрачность",
      "--sjs-font-family": "Семейство шрифтов",
      "--sjs-general-backcolor-dim": "Цвет фона",
      "--sjs-primary-backcolor": "Акцентный фон",
      "--sjs-primary-forecolor": "Акцент на переднем плане",
      "--sjs-special-red": "Сообщения об ошибках",
      "--sjs-shadow-small": "Эффекты теней",
      "--sjs-shadow-inner": "Эффекты теней",
      "--sjs-border-default": "Знамя"
    },
    "header@header": {
      headerView: "Вид",
      logoPosition: "Расположение логотипа",
      surveyTitle: "Шрифт заголовка опроса",
      surveyDescription: "Шрифт описания опроса",
      headerTitle: "Шрифт заголовка опроса",
      headerDescription: "Шрифт описания опроса",
      inheritWidthFrom: "Ширина области содержимого",
      textAreaWidth: "Ширина текста",
      backgroundColorSwitch: "Цвет фона",
      backgroundImage: "Фоновое изображение",
      backgroundImageOpacity: "Непрозрачность",
      overlapEnabled: "Перекрытие",
      logoPositionX: "Расположение логотипа",
      titlePositionX: "Титульная позиция",
      descriptionPositionX: "Описание позиции"
    }
  },
  // Property values
  pv: {
    "true": "истинный",
    "false": "ложный",
    file: "Локальные файлы",
    camera: "Камера",
    "file-camera": "Локальные файлы или камера",
    inherit: "Наследовать",
    show: "Показать",
    hide: "Скрыть",
    default: "По умолчанию",
    initial: "Изначальный порядок",
    random: "Случайный порядок",
    collapsed: "Прерван",
    expanded: "Расширен",
    none: "Нет",
    asc: "По возрастанию",
    desc: "По убыванию",
    indeterminate: "Неопределенный",
    selected: "Выбранный",
    unselected: "Невыбранных",
    decimal: "десятичный",
    currency: "валюта",
    percent: "процент",
    firstExpanded: "Расширен первый",
    off: "Выключить",
    list: "Список",
    carousel: "Карусель",
    tab: "Вкладки",
    progressTop: "progressTop",
    progressBottom: "progressBottom",
    progressTopBottom: "progressTopBottom",
    horizontal: "Горизонтально",
    vertical: "Вертикально",
    top: "Сверху",
    bottom: "Снизу",
    topBottom: "Сверху и снизу",
    both: "Оба",
    left: "Слева",
    right: "Правильно",
    center: "Центр",
    leftRight: "Влево и вправо",
    middle: "Середина",
    color: "Цвет",
    date: "дата",
    datetime: "ДатаТайм",
    "datetime-local": "datetime-local",
    email: "Отправить по электронной почте",
    month: "месяц",
    number: "число",
    password: "пароль",
    range: "диапазон",
    tel: "Тель",
    text: "СМС",
    time: "Время",
    url: "URL-адрес",
    week: "неделя",
    hidden: "Скрыт",
    edit: "Редактирование",
    display: "Просмотр",
    contain: "Содержать",
    cover: "Крышка",
    fill: "Заполнять",
    next: "Следующий",
    last: "Последний",
    onComplete: "По завершению",
    onHidden: "По скрытию",
    onHiddenContainer: "Когда вопрос или его панель/страница становятся скрытыми",
    clearInvisibleValues: {
      none: "Никогда"
    },
    clearIfInvisible: {
      none: "Никогда"
    },
    inputType: {
      color: "Цвет",
      date: "Дата",
      "datetime-local": "Дата и время",
      email: "Отправить по электронной почте",
      month: "Месяц",
      number: "Число",
      password: "Пароль",
      range: "Диапазон",
      tel: "Номер телефона",
      text: "СМС",
      time: "Время",
      url: "URL-адрес",
      week: "Неделя"
    },
    autocomplete: {
      name: "Полное имя",
      "honorific-prefix": "Приставка",
      "given-name": "Имя",
      "additional-name": "Отчество",
      "family-name": "Фамилия",
      "honorific-suffix": "Суффикс",
      nickname: "Прозвище",
      "organization-title": "Должность",
      username: "Имя пользователя",
      "new-password": "Новый пароль",
      "current-password": "Текущий пароль",
      organization: "Название организации",
      "street-address": "Полный адрес улицы",
      "address-line1": "Адресная строка 1",
      "address-line2": "Адресная строка 2",
      "address-line3": "Адресная строка 3",
      "address-level4": "Адрес 4-го уровня",
      "address-level3": "Адрес 3-го уровня",
      "address-level2": "Адрес 2-го уровня",
      "address-level1": "Адрес 1-го уровня",
      country: "Код страны",
      "country-name": "Название страны",
      "postal-code": "Почтовый индекс",
      "cc-name": "Имя владельца карты",
      "cc-given-name": "Имя владельца карты",
      "cc-additional-name": "Второе имя владельца карты",
      "cc-family-name": "Фамилия владельца карты",
      "cc-number": "Номер кредитной карты",
      "cc-exp": "Срок годности",
      "cc-exp-month": "Срок действия",
      "cc-exp-year": "Год экспирации",
      "cc-csc": "Код безопасности карты",
      "cc-type": "Тип кредитной карты",
      "transaction-currency": "Валюта транзакции",
      "transaction-amount": "Сумма транзакции",
      language: "Предпочитаемый язык",
      bday: "День рождения",
      "bday-day": "День рождения",
      "bday-month": "Месяц Дня Рождения",
      "bday-year": "Год рождения",
      sex: "Род",
      url: "URL-адрес сайта",
      photo: "Фото профиля",
      tel: "Номер телефона",
      "tel-country-code": "Код страны для телефона",
      "tel-national": "Национальный номер телефона",
      "tel-area-code": "Код города",
      "tel-local": "Местный номер телефона",
      "tel-local-prefix": "Префикс местного телефона",
      "tel-local-suffix": "Суффикс местного телефона",
      "tel-extension": "Добавочный номер телефона",
      email: "Адрес электронной почты",
      impp: "Протокол обмена мгновенными сообщениями"
    },
    maskType: {
      none: "Никакой",
      pattern: "Рисунок",
      numeric: "Числовой",
      datetime: "Дата и время",
      currency: "Валюта"
    },
    inputTextAlignment: {
      auto: "Авто",
      left: "Слева",
      right: "Справа"
    },
    all: "Все",
    page: "Страница",
    survey: "Опрос",
    onNextPage: "При переходе на следующую страницу",
    onValueChanged: "При изменении значения",
    onValueChanging: "Прежде чем ответ будет изменен",
    questionsOnPageMode: {
      standard: "Оригинальная структура",
      singlePage: "Показать все вопросы на одной странице",
      questionPerPage: "Показывать один вопрос на странице"
    },
    noPreview: "Без предварительного просмотра",
    showAllQuestions: "Показать все вопросы",
    showAnsweredQuestions: "Показывать только ответы на вопросы",
    allQuestions: "Показать все вопросы",
    answeredQuestions: "Показать только отвеченные вопросы",
    pages: "Заполненные страницы",
    questions: "Ответы на вопросы",
    requiredQuestions: "Ответы на необходимые вопросы",
    correctQuestions: "Правильные ответы",
    buttons: "Завершенные страницы (пользовательский интерфейс кнопки)",
    underInput: "Под входом",
    underTitle: "Под заголовком",
    onBlur: "О размытии",
    onTyping: "При наборе текста",
    underRow: "Под строкой",
    underRowSingle: "Под строкой видна только одна панель",
    auto: "Авто",
    showNavigationButtons: {
      none: "Скрытый"
    },
    timerInfoMode: {
      combined: "Оба"
    },
    addRowButtonLocation: {
      default: "Зависит от компоновки матрицы"
    },
    panelsState: {
      default: "Пользователи не могут разворачивать или сворачивать панели",
      collapsed: "Все панели свернуты",
      expanded: "Все панели расширены",
      firstExpanded: "Первый расширенный"
    },
    widthMode: {
      static: "Статический",
      responsive: "Отзывчивый"
    },
    contentMode: {
      image: "Образ",
      video: "Видео",
      youtube: "Ютуб"
    },
    displayMode: {
      buttons: "Кнопки",
      dropdown: "Выпадающий список"
    },
    rateColorMode: {
      default: "По умолчанию",
      scale: "Шкала"
    },
    scaleColorMode: {
      monochrome: "Монохромный",
      colored: "Цветной"
    },
    autoGenerate: {
      "true": "Порождать",
      "false": "Ввод вручную"
    },
    rateType: {
      labels: "Метки",
      stars: "Звезды",
      smileys: "Смайлики"
    },
    state: {
      default: "Запертый"
    },
    showQuestionNumbers: {
      default: "Автоматическая нумерация",
      on: "Автоматическая нумерация",
      onPage: "Сброс на каждой странице",
      onpanel: "Сброс на каждой панели",
      onPanel: "Сброс на каждой панели",
      recursive: "Рекурсивная нумерация",
      onSurvey: "Продолжить опрос",
      off: "Без нумерации"
    },
    descriptionLocation: {
      underTitle: "Под заголовком вопроса",
      underInput: "Под полем ввода"
    },
    selectToRankAreasLayout: {
      horizontal: "Рядом с вариантами выбора",
      vertical: "Вышеуказанные варианты"
    },
    displayStyle: {
      decimal: "Десятичный",
      currency: "Валюта",
      percent: "Процент",
      date: "Дата"
    },
    totalDisplayStyle: {
      decimal: "Десятичный",
      currency: "Валюта",
      percent: "Процент",
      date: "Дата"
    },
    rowOrder: {
      initial: "Исходный текст"
    },
    questionOrder: {
      initial: "Исходный текст"
    },
    progressBarLocation: {
      top: "Вверх",
      bottom: "Низ",
      topbottom: "Верх и низ",
      aboveheader: "Над заголовком",
      belowheader: "Под заголовком",
      off: "Скрытый"
    },
    sum: "Сумма",
    count: "Считать",
    min: "Мин",
    max: "Макс",
    avg: "Средняя",
    searchMode: {
      contains: "Содержит",
      startsWith: "Начинается с"
    },
    backgroundImageFit: {
      auto: "Авто",
      cover: "Заполнение",
      contain: "По размеру",
      fill: "Растянуть",
      tile: "Замостить"
    },
    backgroundImageAttachment: {
      fixed: "Зафиксировать",
      scroll: "Прокручивать"
    },
    headerView: {
      basic: "Основной",
      advanced: "Продвинутый"
    },
    inheritWidthFrom: {
      survey: "То же, что и опрос",
      container: "Подходит для контейнера"
    },
    backgroundColorSwitch: {
      none: "Никакой",
      accentColor: "Акцентный цвет",
      custom: "Обычай"
    },
    colorPalette: {
      light: "Свет",
      dark: "Темный"
    },
    isPanelless: {
      "false": "По умолчанию",
      "true": "Без панелей"
    },
    progressBarInheritWidthFrom: {
      survey: "То же, что и опрос",
      container: "То же, что и контейнер"
    }
  },
  // Operators
  op: {
    empty: "не заполнено",
    notempty: "заполнено",
    equal: "равно",
    notequal: "не равно",
    contains: "содержит",
    notcontains: "не содержит",
    anyof: "любой из",
    allof: "все из",
    greater: "больше",
    less: "меньше",
    greaterorequal: "больше или равно",
    lessorequal: "меньше или равно",
    and: "и",
    or: "или"
  },
  // Embed window
  ew: {
    angular: "Используйте версию Angular",
    jquery: "Используйте версию jQuery",
    knockout: "Используйте версию Knockout",
    react: "Используйте версию React",
    vue: "Используйте версию Vue",
    bootstrap: "Для библиотеки bootstrap",
    modern: "Современная тема",
    default: "Тема по умолчанию",
    orange: "Оранжевая тема",
    darkblue: "Темно-синяя тема",
    darkrose: "Тема \"Темная роза\"",
    stone: "Тема «Камень»",
    winter: "Зимняя тематика",
    winterstone: "Тема \"Зимний камень\"",
    showOnPage: "Показывать опросник на странице",
    showInWindow: "Показывать опросник в модальном окне",
    loadFromServer: "Загрузить Json опросника с сервера",
    titleScript: "Скрипты и стили",
    titleHtml: "HTML",
    titleJavaScript: "JavaScript"
  },
  // Preview (Survey)
  ts: {
    selectPage: "Выберите страницу, чтобы проверить это",
    showInvisibleElements: "Показывать скрытые элементы",
    hideInvisibleElements: "Скрыть невидимые элементы"
  },
  validators: {
    answercountvalidator: "Количество ответов",
    emailvalidator: "Отправить по электронной почте",
    expressionvalidator: "Выражение",
    numericvalidator: "Число",
    regexvalidator: "Регулярное выражение",
    textvalidator: "Текст"
  },
  triggers: {
    completetrigger: "Завершить опрос",
    setvaluetrigger: "Установить значение",
    copyvaluetrigger: "Скопировать значение",
    skiptrigger: "Перейти к вопросу",
    runexpressiontrigger: "Запустить выражение",
    visibletrigger: "Изменить видимость (не рекомендуется)"
  },
  peplaceholder: {
    patternmask: {
      pattern: "Пример: +1(999)-999-99-99"
    },
    datetimemask: {
      pattern: "Пример: мм/дд/гггг"
    },
    currencymask: {
      prefix: "Пример: $",
      suffix: "Пример: USD"
    },
    panelbase: {
      questionTitleWidth: "Пример: 200px"
    },
    panellayoutcolumn: {
      effectiveWidth: "Пример: 30%",
      questionTitleWidth: "Пример: 200px"
    }
  },
  pehelp: {
    panel: {
      name: "Идентификатор панели, который не виден респондентам.",
      description: "Введите субтитры панели.",
      visibleIf: "Используйте значок волшебной палочки, чтобы задать условное правило, определяющее видимость панели.",
      enableIf: "Используйте значок волшебной палочки, чтобы задать условное правило, которое отключает режим только для чтения для панели.",
      requiredIf: "Используйте значок волшебной палочки, чтобы задать условное правило, которое запрещает отправку опроса, если хотя бы один вложенный вопрос не содержит ответа.",
      questionTitleLocation: "Применяется ко всем вопросам в этой панели. Если вы хотите переопределить этот параметр, определите правила выравнивания заголовков для отдельных вопросов. Опция «Наследовать» применяет настройку на уровне страницы (если задано) или на уровне опроса («Сверху» по умолчанию).",
      questionTitleWidth: "Задает одинаковую ширину заголовков вопросов, если они выровнены по левому краю полей вопросов. Принимает значения CSS (px, %, in, pt и т. д.).",
      questionErrorLocation: "Задает расположение сообщения об ошибке по отношению ко всем вопросам на панели. Опция «Наследовать» применяет настройку на уровне страницы (если задано) или на уровне опроса.",
      questionOrder: "Сохраняет исходный порядок вопросов или рандомизирует их. Опция «Наследовать» применяет настройку на уровне страницы (если задано) или на уровне опроса.",
      page: "Перемещает панель в конец выбранной страницы.",
      innerIndent: "Добавляет пространство или поле между содержимым панели и левой границей рамки панели.",
      startWithNewLine: "Снимите флажок, чтобы отобразить панель в одной строке с предыдущим вопросом или панелью. Этот параметр не применяется, если панель является первым элементом формы.",
      state: "Выберите из: «Развернутая» - панель отображается полностью и может быть свернута; «Свернутая» - панель отображает только заголовок и описание и может быть развернута; «Заблокировано» - панель отображается полностью и не может быть свернута.",
      width: "Устанавливает ширину панели пропорционально другим элементам съемки в той же линии. Принимает значения CSS (px, %, in, pt и т. д.).",
      showQuestionNumbers: "Присваивает номера вопросам, вложенным в эту панель.",
      effectiveColSpan: "Указывает, сколько столбцов занимает эта панель в макете сетки.",
      gridLayoutColumns: "В этой таблице можно настроить каждый столбец сетки на панели. Он автоматически устанавливает процент ширины для каждого столбца в зависимости от максимального количества элементов в строке. Чтобы настроить макет сетки, вручную настройте эти значения и определите ширину заголовка для всех вопросов в каждом столбце."
    },
    paneldynamic: {
      name: "Идентификатор панели, который не виден респондентам.",
      description: "Введите субтитры панели.",
      visibleIf: "Используйте значок волшебной палочки, чтобы задать условное правило, определяющее видимость панели.",
      enableIf: "Используйте значок волшебной палочки, чтобы задать условное правило, которое отключает режим только для чтения для панели.",
      requiredIf: "Используйте значок волшебной палочки, чтобы задать условное правило, которое запрещает отправку опроса, если хотя бы один вложенный вопрос не содержит ответа.",
      templateQuestionTitleLocation: "Применяется ко всем вопросам в этой панели. Если вы хотите переопределить этот параметр, определите правила выравнивания заголовков для отдельных вопросов. Опция «Наследовать» применяет настройку на уровне страницы (если задано) или на уровне опроса («Сверху» по умолчанию).",
      templateQuestionTitleWidth: "Устанавливает постоянную ширину заголовков вопросов, когда они выровнены по левому краю полей вопросов. Принимает значения CSS (px, %, in, pt и т.д.).",
      templateErrorLocation: "Задает расположение сообщения об ошибке по отношению к вопросу с недопустимыми входными данными. Выберите между: «Сверху» - текст ошибки размещается в верхней части поля вопроса; «Внизу» - текст ошибки размещается в нижней части окна вопроса. Опция «Наследовать» применяет настройку на уровне страницы (если задано) или на уровне опроса («Сверху» по умолчанию).",
      errorLocation: "Задает расположение сообщения об ошибке по отношению ко всем вопросам на панели. Опция «Наследовать» применяет настройку на уровне страницы (если задано) или на уровне опроса.",
      page: "Перемещает панель в конец выбранной страницы.",
      innerIndent: "Добавляет пространство или поле между содержимым панели и левой границей рамки панели.",
      startWithNewLine: "Снимите флажок, чтобы отобразить панель в одной строке с предыдущим вопросом или панелью. Этот параметр не применяется, если панель является первым элементом формы.",
      state: "Выберите из: «Развернутая» - панель отображается полностью и может быть свернута; «Свернутая» - панель отображает только заголовок и описание и может быть развернута; «Заблокировано» - панель отображается полностью и не может быть свернута.",
      width: "Устанавливает ширину панели пропорционально другим элементам съемки в той же линии. Принимает значения CSS (px, %, in, pt и т. д.).",
      templateTitle: "Введите шаблон для динамических заголовков панелей. Используйте {panelIndex} для общего положения панели и {visiblePanelIndex} для ее порядка среди видимых панелей. Вставьте эти заполнители в шаблон, чтобы добавить автоматическую нумерацию.",
      templateTabTitle: "Введите шаблон для заголовков вкладок. Используйте {panelIndex} для общего положения панели и {visiblePanelIndex} для ее порядка среди видимых панелей. Вставьте эти заполнители в шаблон, чтобы добавить автоматическую нумерацию.",
      tabTitlePlaceholder: "Резервный текст для заголовков вкладок, который применяется, когда шаблон заголовка вкладки не дает осмысленного значения.",
      templateVisibleIf: "Этот параметр позволяет управлять видимостью отдельных панелей внутри динамической панели. Используйте заполнитель '{panel}' для ссылки на текущую панель в выражении.",
      titleLocation: "Этот параметр автоматически наследуется всеми вопросами на этой панели. Если вы хотите переопределить этот параметр, определите правила выравнивания заголовков для отдельных вопросов. Опция «Наследовать» применяет настройку на уровне страницы (если задано) или на уровне опроса («Сверху» по умолчанию).",
      descriptionLocation: "Опция «Наследовать» применяет настройку на уровне страницы (если задано) или на уровне опроса («Под заголовком панели» по умолчанию).",
      newPanelPosition: "Определяет положение вновь добавляемой панели. По умолчанию новые панели добавляются в конец. Выберите «Далее», чтобы вставить новую панель после текущей.",
      copyDefaultValueFromLastEntry: "Дублирует ответы с последней панели и назначает их следующей добавленной динамической панели.",
      keyName: "Укажите имя вопроса, чтобы пользователь мог предоставить уникальный ответ на этот вопрос на каждой панели."
    },
    copyDefaultValueFromLastEntry: "Дублирует ответы из последней строки и присваивает их следующей добавленной динамической строке.",
    defaultValueExpression: "Этот параметр позволяет назначить значение ответа по умолчанию на основе выражения. Выражение может включать в себя базовые вычисления - '{q1_id} + {q2_id}', логические выражения, такие как '{age} > 60', и функции: 'iif()', 'today()', 'age()', 'min()', 'max()', 'avg()' и т.д. Значение, определяемое этим выражением, служит начальным значением по умолчанию, которое может быть переопределено ручным вводом респондентом.",
    resetValueIf: "Используйте значок волшебной палочки, чтобы задать условное правило, определяющее, когда входные данные респондента сбрасываются до значения, основанного на «Выражении значения по умолчанию» или «Выражении заданного значения» или на значении «Ответ по умолчанию» (если оно задано).",
    setValueIf: "Используйте значок волшебной палочки, чтобы задать условное правило, которое определяет, когда запускать выражение «Задать значение» и динамически назначать полученное значение в качестве ответа.",
    setValueExpression: "Укажите выражение, определяющее значение, которое будет установлено при выполнении условий правила \"Задать значение если\". Выражение может включать в себя базовые вычисления - '{q1_id} + {q2_id}', логические выражения, такие как '{age} > 60', и функции: 'iif()', 'today()', 'age()', 'min()', 'max()', 'avg()' и т.д. Значение, определенное этим выражением, может быть переопределено ручным вводом респондента.",
    gridLayoutEnabled: "Survey Creator позволяет вручную настраивать встроенную ширину элементов формы для управления макетом. Если это не дает желаемого результата, вы можете включить макет сетки, который структурирует элементы с использованием системы на основе столбцов. Чтобы настроить макет столбцов, выберите страницу или панель и используйте таблицу «Настройки вопроса» → «Столбцы сетки». Чтобы настроить количество столбцов в вопросе, выберите его и установите нужное значение в полях «Макет» → «Диапазон столбцов».",
    question: {
      name: "Идентификатор вопроса, который не виден респондентам.",
      description: "Введите подзаголовок вопроса.",
      visibleIf: "Используйте значок волшебной палочки, чтобы задать условное правило, определяющее видимость вопроса.",
      enableIf: "Используйте значок волшебной палочки, чтобы задать условное правило, которое отключает режим только для чтения для вопроса.",
      requiredIf: "Используйте значок волшебной палочки, чтобы установить условное правило, которое запрещает продвижение или отправку опроса, если на вопрос не получен ответ.",
      startWithNewLine: "Снимите флажок, чтобы отобразить вопрос в одной строке с предыдущим вопросом или панелью. Настройка не применяется, если вопрос является первым элементом формы.",
      page: "Перемещает вопрос в конец выбранной страницы.",
      state: "Выберите один из вариантов: «Развернутый» - окно вопроса отображается полностью и может быть свернуто; «Свернутый» - поле вопроса отображает только заголовок и описание и может быть развернуто; «Заблокировано» - поле вопроса отображается полностью и не может быть свернуто.",
      titleLocation: "Переопределяет правила выравнивания заголовков, заданные на уровне панели, страницы или опроса. Опция «Наследовать» применяет любые настройки более высокого уровня (если они установлены) или настройки уровня опроса («Сверху» по умолчанию).",
      descriptionLocation: "Опция «Наследовать» применяет настройку на уровне опроса (по умолчанию «Под заголовком вопроса»).",
      errorLocation: "Задает расположение сообщения об ошибке по отношению к вопросу с недопустимыми входными данными. Выберите между: «Сверху» - текст ошибки размещается в верхней части поля вопроса; «Внизу» - текст ошибки размещается в нижней части окна вопроса. Опция «Наследовать» применяет настройку уровня опроса («Сверху» по умолчанию).",
      indent: "Добавляет пробел или поле между содержимым вопроса и левой границей поля вопроса.",
      width: "Устанавливает ширину вопроса пропорционально другим элементам опроса в той же строке. Принимает значения CSS (px, %, in, pt и т. д.).",
      surveyvalidator: {
        expression: "Используйте значок волшебной палочки, чтобы задать правило проверки для вопроса."
      },
      textUpdateMode: "Выберите из: \"При потере фокуса\" - значение обновляется при потере фокуса полем ввода; \"Во время набора\" - значение обновляется в режиме реального времени, по мере набора текста пользователями. Опция «Наследовать» применяет настройку на уровне опроса (по умолчанию «При потере фокуса»).",
      url: "Вы можете использовать любую веб-службу в качестве источника данных для вопросов с несколькими вариантами ответов. Чтобы заполнить значения выбора, введите URL-адрес службы, предоставляющей данные.",
      searchMode: "Операция сравнения, используемая для фильтрации раскрывающегося списка.",
      textWrapEnabled: "Длинные тексты в параметрах выбора будут автоматически создавать разрывы строк в соответствии с раскрывающимся меню. Снимите флажок, если вы хотите, чтобы тексты были обрезаны.",
      effectiveColSpan: "Указывает, сколько столбцов занимает этот вопрос в макете сетки."
    },
    signaturepad: {
      signatureWidth: "Задает ширину отображаемой области подписи и результирующего изображения.",
      signatureHeight: "Задает высоту отображаемой области подписи и результирующего изображения.",
      signatureAutoScaleEnabled: "Выберите, хотите ли вы, чтобы область подписи занимала все доступное пространство в поле вопроса, сохраняя при этом соотношение сторон по умолчанию 3:2. Если заданы пользовательские значения ширины и высоты, при этом будет сохранено соотношение сторон этих размеров."
    },
    file: {
      imageHeight: "Настройка высоты изображения в результатах съемки.",
      imageWidth: "Настройка ширины изображения в результатах съемки.",
      allowImagesPreview: "Отображает предварительный просмотр миниатюр для загруженных файлов, когда это возможно. Снимите флажок, если вместо этого вы хотите отображать значки файлов."
    },
    image: {
      contentMode: "Опция \"Авто\" автоматически определяет подходящий режим отображения - Изображение, Видео или YouTube - на основе предоставленного исходного URL-адреса."
    },
    imagepicker: {
      imageHeight: "Переопределяет минимальное и максимальное значения высоты.",
      imageWidth: "Переопределяет минимальное и максимальное значения ширины.",
      choices: "«Значение» служит идентификатором элемента, используемым в условных правилах; Респондентам отображается «Текст».",
      contentMode: "Выберите между «Изображением» и «Видео», чтобы установить режим содержимого селектора мультимедиа. Если выбран параметр «Изображение», убедитесь, что все предоставленные параметры представляют собой файлы изображений в следующих форматах: JPEG, GIF, PNG, APNG, SVG, BMP, ICO. Точно так же, если выбран «Видео», убедитесь, что все параметры являются прямыми ссылками на видеофайлы в следующих форматах: MP4, MOV, WMV, FLV, AVI, MKV. Обратите внимание, что ссылки на YouTube не поддерживаются для параметров видео."
    },
    text: {
      size: "Этот параметр изменяет только размер поля ввода и не влияет на ширину поля вопроса. Чтобы ограничить допустимую длину ввода, перейдите в <b>раздел Проверка → Ограничение максимального количества символов</b>."
    },
    comment: {
      rows: "Задает количество отображаемых строк в поле ввода. Если ввод занимает больше строк, появится полоса прокрутки."
    },
    // survey templates
    survey: {
      readOnly: "Выберите, хотите ли вы запретить респондентам заполнять ваш опрос.",
      progressBarLocation: "Задает расположение индикатора выполнения. Значение \"Auto\" отображает индикатор выполнения над или под заголовком опроса."
    },
    matrixdropdowncolumn: {
      name: "Идентификатор столбца, который не виден респондентам.",
      isUnique: "Если этот параметр включен для столбца, респондент должен предоставить уникальный ответ на каждый вопрос в этом столбце.",
      rows: "Задает количество отображаемых строк в поле ввода. Если ввод занимает больше строк, появится полоса прокрутки.",
      visibleIf: "Используйте значок волшебной палочки, чтобы задать условное правило, определяющее видимость столбцов.",
      enableIf: "Используйте значок волшебной палочки, чтобы задать условное правило, которое отключает режим только для чтения для столбца.",
      requiredIf: "Используйте значок волшебной палочки, чтобы задать условное правило, которое запрещает отправку опроса, если хотя бы один вложенный вопрос не содержит ответа.",
      showInMultipleColumns: "При выборе этого параметра создается отдельный столбец для каждого варианта выбора.",
      colCount: "Упорядочивает варианты выбора в макете с несколькими столбцами. Если установлено значение 0, параметры отображаются в одну строку. При значении -1 фактическое значение наследуется от свойства \"Количество вложенных столбцов\" родительской матрицы."
    },
    caseInsensitive: "Выберите, если прописные и строчные буквы в регулярном выражении должны рассматриваться как эквивалентные.",
    widthMode: "Выберите один из: \"Статический\" - задает фиксированную ширину; «Отзывчивый» - заставляет опрос занимать всю ширину экрана; \"Авто\" - применяет любой из двух вариантов в зависимости от используемых типов вопросов.",
    cookieName: "Файлы cookie не позволяют пользователям заполнять один и тот же опрос дважды.",
    logo: "Вставьте ссылку на изображение (без ограничений по размеру) или нажмите значок папки, чтобы просмотреть файл с компьютера (до 64 КБ).",
    logoWidth: "Задает ширину логотипа в единицах CSS (px, %, in, pt и т. д.).",
    logoHeight: "Задает высоту логотипа в единицах CSS (px, %, in, pt и т. д.).",
    logoFit: "Выберите один из следующих вариантов: \"Нет\" - изображение сохраняет свой первоначальный размер; \"Contain\" - размер изображения изменяется по размеру с сохранением его пропорций; «Обложка» - изображение заполняет всю коробку, сохраняя при этом соотношение сторон; \"Заливка\" - изображение растягивается для заполнения поля без сохранения его пропорций.",
    autoAdvanceEnabled: "Выберите, хотите ли вы, чтобы опрос автоматически переходил на следующую страницу после того, как респондент ответил на все вопросы на текущей странице. Эта функция не будет работать, если последний вопрос на странице является открытым или допускает несколько ответов.",
    autoAdvanceAllowComplete: "Выберите, хотите ли Вы, чтобы опрос завершался автоматически после того, как респондент ответит на все вопросы.",
    showNavigationButtons: "Задает видимость и расположение кнопок навигации на странице.",
    navigationButtonsLocation: "Задает расположение кнопок навигации на странице.",
    showPreviewBeforeComplete: "Включите страницу предварительного просмотра, на которой отображаются все вопросы или только ответы на них.",
    questionTitleLocation: "Применяется ко всем вопросам в опросе. Этот параметр может быть переопределен правилами выравнивания заголовков на более низких уровнях: панели, странице или вопросе. Настройки более низкого уровня будут переопределять настройки на более высоком уровне.",
    requiredMark: "Символ или последовательность символов, указывающие на то, что требуется ответ.",
    questionStartIndex: "Введите цифру или букву, с которой вы хотите начать нумерацию.",
    questionErrorLocation: "Задает расположение сообщения об ошибке по отношению к вопросу с недопустимыми входными данными. Выберите между: «Сверху» - текст ошибки размещается в верхней части поля вопроса; «Внизу» - текст ошибки размещается в нижней части окна вопроса.",
    autoFocusFirstQuestion: "Выберите, если вы хотите, чтобы первое поле ввода на каждой странице было готово для ввода текста.",
    questionOrder: "Сохраняет исходный порядок вопросов или рандомизирует их. Эффект этого параметра виден только на вкладке «Предварительный просмотр».",
    maxTextLength: "Только для вопросов с вводом текста.",
    maxCommentLength: "Только для комментариев к вопросам.",
    commentAreaRows: "Задает количество отображаемых строк в текстовых полях для комментариев к вопросам. Если ввод занимает больше строк, появляется полоса прокрутки.",
    autoGrowComment: "Выберите, хотите ли вы, чтобы комментарии к вопросам и вопросы с длинным текстом автоматически увеличивались в высоту в зависимости от введенной длины текста.",
    allowResizeComment: "Только для комментариев к вопросам и вопросов с длинным текстом.",
    calculatedValues: "Пользовательские переменные служат промежуточными или вспомогательными переменными, используемыми в вычислениях формы. Они принимают входные данные респондента в качестве исходных значений. Каждая пользовательская переменная имеет уникальное имя и выражение, на котором она основана.",
    includeIntoResult: "Выберите, если вы хотите, чтобы вычисленное значение выражения сохранялось вместе с результатами опроса.",
    triggers: "Триггер — это событие или условие, основанное на выражении. После того, как выражение оценивается как \"true\", триггер запускает действие. Такое действие может иметь целевой вопрос, на который оно влияет.",
    clearInvisibleValues: "Выберите, нужно ли очищать значения для вопросов, скрытых условной логикой, и когда это делать.",
    textUpdateMode: "Выберите из: \"При потере фокуса\" - значение обновляется при потере фокуса полем ввода; \"Во время набора\" - значение обновляется в режиме реального времени, по мере набора текста пользователями.",
    columns: "Левое значение служит идентификатором столбца, используемым в условных правилах, правое значение отображается респондентам.",
    rows: "Левое значение служит идентификатором строки, используемым в условных правилах, правое значение отображается респондентам.",
    columnMinWidth: "Принимает значения CSS (px, %, in, pt и т. д.).",
    rowTitleWidth: "Принимает значения CSS (px, %, in, pt и т. д.).",
    totalText: "Отображается только в том случае, если хотя бы один столбец имеет тип Total или выражение Total.",
    cellErrorLocation: "Задает местоположение сообщения об ошибке по отношению к ячейке с недопустимыми входными данными. Опция «Наследовать» применяет настройку из свойства «Выравнивание сообщений об ошибках».",
    detailErrorLocation: "Задает расположение сообщений об ошибках для вопросов, вложенных в подробные разделы. Опция \"Наследовать\" применяет настройку из свойства \"Выравнивание сообщения об ошибке\".",
    keyDuplicationError: "Если включено свойство «Не допускать дублирования ответов», респондент, пытающийся отправить дублирующуюся запись, получит следующее сообщение об ошибке.",
    totalExpression: "Позволяет вычислять итоговые значения на основе выражения. Выражение может включать базовые вычисления ('{q1_id} + {q2_id}'), логические выражения ('{age} > 60') и функции ('iif()', 'today()', 'age()', 'min()', 'max()', 'avg()' и т.д.).",
    confirmDelete: "Запускает запрос на подтверждение удаления строки.",
    keyName: "Если указанный столбец содержит одинаковые значения, опрос выдает ошибку «Неуникальное значение ключа».",
    description: "Введите субтитры.",
    locale: "Выберите язык, чтобы начать создание опроса. Чтобы добавить перевод, переключитесь на новый язык и переведите исходный текст здесь или во вкладке «Переводы».",
    detailPanelMode: "Задает расположение раздела сведений по отношению к строке. Выберите один из вариантов: \"Нет\" - расширение не добавляется; \"Под строкой\" - под каждой строкой матрицы помещается расширение строки; \"Под строкой отображать только одну строку\" - расширение отображается только под одной строкой, остальные расширения строк сворачиваются.",
    imageFit: "Выберите один из следующих вариантов: \"Нет\" - изображение сохраняет свой первоначальный размер; \"Contain\" - размер изображения изменяется по размеру с сохранением его пропорций; «Обложка» - изображение заполняет всю коробку, сохраняя при этом соотношение сторон; \"Заливка\" - изображение растягивается для заполнения поля без сохранения его пропорций.",
    autoGrow: "Постепенно увеличивает высоту поля ввода по мере ввода данных. Переопределяет настройку «Высота поля ввода (в строках)».",
    allowResize: "Маркер изменения размера (или ручка) отображается в углу, и его можно перетащить, чтобы изменить размер поля ввода.",
    timeLimit: "Интервал времени в секундах, по истечении которого опрос автоматически переходит на страницу благодарности.",
    timeLimitPerPage: "Интервал времени в секундах, по истечении которого опрос автоматически переходит на следующую страницу.",
    validateVisitedEmptyFields: "Включите этот параметр, чтобы активировать проверку, когда пользователь фокусируется на пустом поле ввода, а затем покидает его, не внося никаких изменений.",
    page: {
      name: "Идентификатор страницы, который не виден респондентам.",
      description: "Введите подзаголовок страницы.",
      navigationTitle: "Подпись, отображаемая на кнопке навигации на индикаторе выполнения или в оглавлении (TOC). Если оставить это поле пустым, кнопка навигации будет использовать заголовок страницы или название страницы. Чтобы включить индикатор выполнения или оглавление, перейдите в раздел «Обзор» → «Навигация».",
      timeLimit: "Интервал времени в секундах, по истечении которого опрос автоматически переходит на следующую страницу.",
      visibleIf: "Используйте значок волшебной палочки, чтобы задать условное правило, определяющее видимость страницы.",
      enableIf: "Используйте значок волшебной палочки, чтобы задать условное правило, которое отключает режим только для чтения для страницы.",
      requiredIf: "Используйте значок волшебной палочки, чтобы задать условное правило, которое запрещает отправку опроса, если хотя бы один вложенный вопрос не содержит ответа.",
      questionTitleLocation: "Относится ко всем вопросам на этой странице. Если вы хотите переопределить этот параметр, задайте правила выравнивания заголовков для отдельных вопросов или панелей. Опция «Наследовать» применяет настройку уровня опроса («Сверху» по умолчанию).",
      questionTitleWidth: "Задает одинаковую ширину заголовков вопросов, если они выровнены по левому краю полей вопросов. Принимает значения CSS (px, %, in, pt и т. д.).",
      questionErrorLocation: "Задает расположение сообщения об ошибке по отношению к вопросу с недопустимыми входными данными. Выберите между: «Сверху» - текст ошибки размещается в верхней части поля вопроса; «Внизу» - текст ошибки размещается в нижней части окна вопроса. Опция «Наследовать» применяет настройку уровня опроса («Сверху» по умолчанию).",
      questionOrder: "Сохраняет исходный порядок вопросов или рандомизирует их. Опция «Наследовать» применяет настройку уровня опроса («Оригинал» по умолчанию). Эффект этого параметра виден только на вкладке «Предварительный просмотр».",
      showNavigationButtons: "Задает видимость кнопок навигации на странице. Опция \"Наследовать\" применяет настройку уровня опроса, которая по умолчанию имеет значение \"Видимый\".",
      gridLayoutColumns: "В этой таблице можно настроить каждый столбец сетки на странице. Он автоматически устанавливает процент ширины для каждого столбца в зависимости от максимального количества элементов в строке. Чтобы настроить макет сетки, вручную настройте эти значения и определите ширину заголовка для всех вопросов в каждом столбце."
    },
    timerLocation: "Задает расположение таймера на странице.",
    panelsState: "Выберите один из следующих вариантов: \"Заблокировано\" - пользователи не могут разворачивать или сворачивать панели; \"Свернуть все\" - все панели запускаются в свернутом состоянии; \"Развернуть все\" - все панели запускаются в развернутом состоянии; \"First expanded\" - изначально разворачивается только первая панель.",
    imageLinkName: "Введите имя общего свойства в массиве объектов, содержащем URL-адреса изображений или видеофайлов, которые необходимо отобразить в списке вариантов.",
    choices: "Левое значение служит идентификатором элемента, используемым в условных правилах, правое значение отображается респондентам.",
    title: "Введите понятный заголовок для отображения.",
    waitForUpload: "Гарантирует, что пользователи не завершат опрос до тех пор, пока файлы не будут загружены.",
    minWidth: "Принимает значения CSS (px, %, in, pt и т. д.).",
    maxWidth: "Принимает значения CSS (px, %, in, pt и т. д.).",
    width: "Принимает значения CSS (px, %, in, pt и т. д.).",
    valueName: "Если это свойство не задано, ответ будет сохранен в поле, указанном свойством Name.",
    defaultDisplayValue: "Значение, отображаемое в вопросах в формате HTML, а также в динамических заголовках и описаниях элементов опроса, когда значение вопроса пусто.",
    useDisplayValuesInDynamicTexts: "В вопросах с одним и несколькими вариантами ответов каждый вариант выбора имеет идентификатор и отображаемое значение. Если этот параметр установлен, в HTML-вопросах, а также в динамических заголовках и описаниях элементов опроса отображается отображаемое значение, а не значение идентификатора.",
    clearIfInvisible: "Выберите, следует ли очищать значения вопросов, скрытые условной логикой, и когда это делать. Опция «Наследовать» применяет настройку на уровне опроса («По завершении опроса» по умолчанию).",
    choicesFromQuestionMode: "Выбрать из: \"Все\" - копирует все варианты выбора из выбранного вопроса; \"Выбранный\" - динамически копирует только выбранные варианты выбора; \"Невыбранные\" - динамически копирует только невыбранные варианты выбора. Опции «Нет» и «Другое» копируются по умолчанию, если они включены в исходном вопросе.",
    choiceValuesFromQuestion: "В вопросах с одним и несколькими вариантами ответа каждый вариант выбора имеет идентификатор и отображаемое значение. Этот параметр указывает, из какого столбца матрицы или вопроса панели должны браться идентификаторы.",
    choiceTextsFromQuestion: "В вопросах с одним и несколькими вариантами ответа каждый вариант выбора имеет идентификатор и отображаемое значение. Этот параметр указывает, из какого столбца матрицы или вопроса панели должны браться отображаемые значения.",
    allowCustomChoices: "Выберите, чтобы разрешить респондентам добавлять свои собственные варианты, если нужный вариант недоступен в раскрывающемся списке. Пользовательские варианты будут храниться только временно в течение текущего сеанса браузера.",
    showOtherItem: "Если этот флажок установлен, пользователи могут включить дополнительные данные в отдельное поле комментария.",
    separateSpecialChoices: "Отображение каждого варианта специального выбора (\"Нет\", \"Другое\", \"Выбрать все\") в новой строке, даже при использовании макета с несколькими столбцами.",
    path: "Укажите местоположение в наборе данных сервиса, где находится целевой массив объектов. Оставьте пустым, если URL-адрес уже указывает на массив.",
    choicesbyurl: {
      valueName: " "
    },
    titleName: "Введите единообразное имя свойства в массиве объектов, содержащем значения, которые требуется отобразить в списке вариантов.",
    allowEmptyResponse: "Выберите, чтобы разрешить службе возвращать пустой ответ или массив.",
    choicesVisibleIf: "Используйте значок волшебной палочки, чтобы задать условное правило, определяющее видимость всех вариантов выбора.",
    rateValues: "Левое значение служит идентификатором элемента, используемым в условных правилах, правое значение отображается респондентам.",
    rating: {
      displayMode: "«Авто» выбирает между режимами «Кнопки» и «Выпадающий список» в зависимости от доступной ширины. Если ширина недостаточна для отображения кнопок, в вопросе отображается раскрывающийся список."
    },
    valuePropertyName: "Позволяет соединять вопросы, дающие результаты, в разных форматах. Когда такие вопросы связаны друг с другом с помощью идентификатора соединения, в этом общем свойстве хранятся выбранные значения вопросов.",
    searchEnabled: "Выберите, хотите ли вы обновить содержимое раскрывающегося меню в соответствии с поисковым запросом, который пользователь вводит в поле ввода.",
    valueTrue: "Значение, сохраняемое в результатах опроса, когда респонденты дают положительный ответ.",
    valueFalse: "Значение, сохраняемое в результатах опроса, когда респонденты дают отрицательный ответ.",
    showPreview: "Не рекомендуется отключать этот параметр, так как он переопределяет изображение предварительного просмотра и затрудняет понимание пользователем, были ли файлы загружены.",
    needConfirmRemoveFile: "Запускает запрос на подтверждение удаления файла.",
    selectToRankEnabled: "Включите этот параметр, чтобы ранжировать только выбранные варианты. Пользователи будут перетаскивать выбранные элементы из списка вариантов, чтобы упорядочить их в области ранжирования.",
    dataList: "Введите список вариантов, которые будут предложены респонденту во время ввода.",
    inputSize: "Этот параметр изменяет только размер полей ввода и не влияет на ширину поля вопроса.",
    itemTitleWidth: "Задает одинаковую ширину для всех меток товаров. Принимает значения CSS (px, %, in, pt и т.д.).",
    inputTextAlignment: "Выберите способ выравнивания вводимого значения в поле. Настройка по умолчанию \"Auto\" выравнивает вводимое значение по правому краю, если применяется маскирование валюты или число, то по левому краю.",
    altText: "Служит заменой, когда изображение не может быть отображено на устройстве пользователя, а также в целях обеспечения доступности.",
    rateColorMode: "Определяет цвет выбранного эмодзи, если для параметра «Тип значка рейтинга» установлено значение «Смайлики». Выберите между: \"По умолчанию\" - выбранный эмодзи отображается в цвете опроса по умолчанию; «Шкала» - выбранный эмодзи наследует цвет от шкалы оценки.",
    expression: {
      name: "Идентификатор выражения, который не виден респондентам.",
      description: "Введите подзаголовок выражения.",
      expression: "Выражение может включать базовые вычисления ('{q1_id} + {q2_id}'), условия ('{age} > 60') и функции ('iif()', 'today()', 'age()', 'min()', 'max()', 'avg()' и т.д.)."
    },
    storeOthersAsComment: "Выберите, чтобы сохранить значение параметра «Другое» как отдельное свойство в результатах опроса.",
    format: "Используйте {0} в качестве заполнителя для фактического значения.",
    acceptedTypes: "Дополнительные сведения см. в описании атрибута [accept](https://www.w3schools.com/tags/att_input_accept.asp).",
    columnColCount: "Применимо только к типам ячеек «Радиогруппа» и «Флажок».",
    autocomplete: "Дополнительные сведения см. в описании атрибута [autocomplete](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete).",
    filePlaceholder: "Применяется, если \"Тип источника\" имеет значение \"Локальные файлы\" или когда камера недоступна",
    photoPlaceholder: "Применяется, если \"Тип источника\" имеет значение \"Камера\".",
    fileOrPhotoPlaceholder: "Применяется, если \"Тип источника\" имеет значение \"Локальные файлы или камера\".",
    colCount: "Упорядочивает варианты выбора в макете с несколькими столбцами. Если установлено значение 0, параметры отображаются в одну строку.",
    masksettings: {
      saveMaskedValue: "Выберите, хотите ли вы сохранить значение вопроса с примененной маской в результатах опроса."
    },
    patternmask: {
      pattern: "Шаблон может содержать строковые литералы и следующие заполнители: '9' - для цифры; 'a' - для прописной или строчной буквы; '#' - для цифры или прописной или строчной буквы. Используйте обратную косую черту '\\' для экранирования символа."
    },
    datetimemask: {
      pattern: "Шаблон может содержать символы-разделители и следующие заполнители:<br>'m' - номер месяца.<br>'mm' - Номер месяца, с нулем в начале для однозначных значений. <br>'d' - День месяца. <br>'dd' - День месяца, с нулевым началом для однозначных значений. <br>'yy' - Последние две цифры года. <br>'yyyy' - Четырехзначный год. <br>'H' - Часы в 24-часовом формате. <br>'HH' - Часы в 24-часовом формате, с нулем в начале для однозначных значений. <br>'h' - Часы в 12-часовом формате. <br>'hh' - Часы в 12-часовом формате, с нулем в начале для однозначных значений. <br>'MM' - минуты. <br>'ss' - Секунды. <br>'TT' - 12-часовой период в верхнем регистре (AM/PM). <br>'tt' - 12-часовой период в нижнем регистре (am/pm)."
    },
    numericmask: {
      decimalSeparator: "Символ, используемый для отделения дробной части от целой части отображаемого числа.",
      thousandsSeparator: "Символ, используемый для разделения цифр большого числа на группы по три.",
      precision: "Ограничивает количество цифр, сохраняемых после десятичной запятой для отображаемого числа."
    },
    currencymask: {
      prefix: "Один или несколько символов, которые будут отображаться перед значением.",
      suffix: "Один или несколько символов, которые будут отображаться после значения."
    },
    theme: {
      isPanelless: "Этот параметр применяется только к вопросам, находящимся за пределами панели.",
      primaryColor: "Установка дополнительного цвета, который выделяет ключевые элементы опроса.",
      panelBackgroundTransparency: "Настройка прозрачности панелей и полей вопросов относительно фона опроса.",
      questionBackgroundTransparency: "Настройка прозрачности входных элементов относительно фона опроса.",
      cornerRadius: "Задает радиус угла для всех прямоугольных элементов. Включите расширенный режим, если вы хотите задать индивидуальные значения углового радиуса для элементов ввода или панелей и полей вопросов.",
      "--sjs-general-backcolor-dim": "Задает основной цвет фона опроса."
    },
    header: {
      inheritWidthFrom: "Опция \"То же самое, что и контейнер\" автоматически настраивает ширину области содержимого заголовка в соответствии с элементом HTML, в который помещается опрос.",
      textAreaWidth: "Ширина области заголовка, содержащей название и описание опроса, измеряется в пикселях.",
      overlapEnabled: "Когда этот параметр включен, верхняя часть опроса накладывается на нижнюю часть заголовка.",
      mobileHeight: "Если задано значение 0, высота вычисляется автоматически для размещения содержимого заголовка."
    },
    progressBarInheritWidthFrom: "Опция \"То же, что и контейнер\" автоматически настраивает ширину области индикатора выполнения в соответствии с HTML-элементом, в который помещается опрос."
  },
  // Properties
  p: {
    title: {
      name: "Название",
      title: "Оставьте его пустым, если оно такое же, как 'Название'"
    },
    multiSelect: "Разрешить множественный выбор",
    showLabel: "Показать подписи к изображениям",
    swapOrder: "Поменяйте местами «Да» и «Нет»",
    value: "Ценность",
    tabAlign: "Выравнивание табуляции",
    sourceType: "Тип источника",
    fitToContainer: "Подходит для контейнера",
    setValueExpression: "Выражение заданного значения",
    description: "Описание",
    logoFit: "Подходит под логотип",
    pages: "Страниц",
    questions: "Вопросы",
    triggers: "триггеры",
    calculatedValues: "Вычисляемые значения",
    surveyId: "Идентификатор опроса",
    surveyPostId: "Идентификатор записи опроса",
    surveyShowDataSaving: "Опрос показывает сохранение данных",
    questionDescriptionLocation: "Описание вопроса Местоположение",
    progressBarType: "Тип индикатора выполнения",
    showTOC: "Показать оглавление",
    tocLocation: "Расположение оглавления",
    questionTitlePattern: "Шаблон заголовка вопроса",
    widthMode: "Режим ширины",
    showBrandInfo: "Показать информацию о бренде",
    useDisplayValuesInDynamicTexts: "Использование отображаемых значений в динамических текстах",
    visibleIf: "Отображать, если",
    defaultValueExpression: "Выражение значения по умолчанию",
    requiredIf: "Обязателен если",
    resetValueIf: "Сбросьте значение, если",
    setValueIf: "Установите значение, если",
    validators: "Валидаторы",
    bindings: "Привязки",
    renderAs: "Рендеринг как",
    attachOriginalItems: "Прикрепите оригинальные элементы",
    choices: "Выбор",
    choicesByUrl: "Выбрать из интернета",
    currency: "Валюта",
    cellHint: "Подсказка по ячейке",
    totalMaximumFractionDigits: "Общее количество максимальных дробных цифр",
    totalMinimumFractionDigits: "Общее количество минимальных дробных цифр",
    columns: "Столбцы",
    detailElements: "Детализация элементов",
    allowAdaptiveActions: "Разрешить адаптивные действия",
    defaultRowValue: "Значение строки по умолчанию",
    detailPanelShowOnAdding: "Панель сведений, отображаемая при добавлении",
    choicesLazyLoadEnabled: "Выбор отложенной загрузки включен",
    choicesLazyLoadPageSize: "Выбор ленивой загрузки размера страницы",
    inputFieldComponent: "Компонент поля ввода",
    itemComponent: "Компонент предмета",
    min: "Мин",
    max: "Макс",
    minValueExpression: "Выражение минимального значения",
    maxValueExpression: "Выражение максимального значения",
    step: "Шаг",
    dataList: "Список данных",
    inputSize: "Размер элементов",
    itemTitleWidth: "Ширина метки элемента (в пикселях)",
    inputTextAlignment: "Выравнивание вводимого значения",
    elements: "Азы",
    content: "Содержание",
    navigationTitle: "Навигационный заголовок",
    navigationDescription: "Навигационное описание",
    longTap: "Длительное нажатие",
    autoGrow: "Автоматическое выращивание",
    allowResize: "Разрешить изменение размера",
    acceptCarriageReturn: "Принять возврат каретки",
    displayMode: "Режим отображения",
    rateType: "Тип тарифа",
    label: "Ярлык",
    contentMode: "Режим содержимого",
    imageFit: "Подгонка под изображение",
    altText: "Замещающий текст",
    height: "Высота",
    mobileHeight: "Высота на смартфонах",
    penColor: "Цвет пера",
    backgroundColor: "Цвет фона",
    templateElements: "Элементы шаблона",
    operator: "Оператор",
    isVariable: "Является вариативным",
    runExpression: "Выражение \"Выполнить\"",
    showCaption: "Показать подпись",
    iconName: "Название значка",
    iconSize: "Размер значка",
    precision: "Точность",
    matrixDragHandleArea: "Область маркера перетаскивания матрицы",
    backgroundImage: "Фоновое изображение",
    backgroundImageFit: "Подгонка фонового изображения",
    backgroundImageAttachment: "Вложение фонового изображения",
    backgroundOpacity: "Непрозрачность фона",
    selectToRankEnabled: "Выберите, чтобы ранжирование включено",
    selectToRankAreasLayout: "Выберите, чтобы ранжировать макет областей",
    selectToRankEmptyRankedAreaText: "Текст, показывающий, если выбраны все параметры",
    selectToRankEmptyUnrankedAreaText: "Замещающий текст для области ранжирования",
    allowCameraAccess: "Разрешить доступ к камере",
    scaleColorMode: "Цветовой режим масштабирования",
    rateColorMode: "Оцените цветовой режим",
    copyDisplayValue: "Копирование отображаемого значения",
    effectiveColSpan: "Пролет колонны",
    progressBarInheritWidthFrom: "Ширина области индикатора выполнения"
  },
  theme: {
    advancedMode: "Расширенный режим",
    pageTitle: "Шрифт заголовка страницы",
    questionTitle: "Шрифт заголовка вопроса",
    editorPanel: "Элемент ввода",
    lines: "Обводы",
    primaryDefaultColor: "По умолчанию",
    primaryDarkColor: "Парить",
    primaryLightColor: "Выбранный",
    backgroundDimColor: "Цвет фона",
    cornerRadius: "Радиус закругления угла",
    backcolor: "Фон по умолчанию",
    hovercolor: "Фон при наведении курсора",
    borderDecoration: "Оформление бордюра",
    fontColor: "Цвет шрифта",
    backgroundColor: "Цвет фона",
    primaryForecolor: "Цвет по умолчанию",
    primaryForecolorLight: "Отключенный цвет",
    font: "Шрифт",
    borderDefault: "Темнее",
    borderLight: "Зажигалка",
    fontFamily: "Семейство шрифтов",
    fontWeightRegular: "Регулярный",
    fontWeightHeavy: "Тяжелый",
    fontWeightSemiBold: "Полужирный",
    fontWeightBold: "Смелый",
    color: "Цвет",
    placeholderColor: "Цвет заполнителя",
    size: "Размер",
    opacity: "Непрозрачность",
    boxShadowX: "X",
    boxShadowY: "Y",
    boxShadowAddRule: "Добавить эффект тени",
    boxShadowBlur: "Смазывать",
    boxShadowSpread: "Распространение",
    boxShadowDrop: "Капля",
    boxShadowInner: "Внутренний",
    names: {
      default: "По умолчанию",
      sharp: "Чёткая",
      borderless: "Без границ",
      flat: "Плоская",
      plain: "Простая",
      doubleborder: "Удвоенные границы",
      layered: "Многослойная",
      solid: "Монолитная",
      threedimensional: "Трёхмерная",
      contrast: "Контрастная"
    },
    colors: {
      teal: "Бирюзовый",
      blue: "Синий",
      purple: "Пурпурный",
      orchid: "Орхидея",
      tulip: "Тюльпан",
      brown: "Коричневый",
      green: "Зеленый",
      gray: "Серый"
    }
  },
  creatortheme: {
    "--sjs-special-background": "Фон поверхности",
    "--sjs-primary-background-500": "Первичный",
    "--sjs-secondary-background-500": "Вторичный",
    surfaceScale: "Поверхность",
    userInterfaceBaseUnit: "Пользовательский интерфейс",
    fontScale: "Шрифт",
    names: {
      sc2020: "Создатель опросов 2020",
      "default-light": "Свет",
      "default-dark": "Темный",
      "default-contrast": "Контраст"
    }
  }
};

setupLocale({ localeCode: "ru", strings: ruStrings });

// The following strings have been translated by a machine translation service
// Remove those strings that you have corrected manually
// survey.addLogicItem: "Create a rule to customize the flow of the survey." => "Создайте правило для настройки потока опроса."
// survey.duplicate: "Duplicate" => "Дублировать"
// qt.ranking: "Ranking" => "Ранжирование"
// qt.image: "Image" => "Образ"
// qt.tagbox: "Multi-Select Dropdown" => "Выпадающий список с множественным выбором"
// qt.html: "HTML" => ".HTML"
// qt.signaturepad: "Signature" => "Подпись"
// qt.buttongroup: "Button Group" => "Группа кнопок"
// ed.settingsTooltip: "Open settings" => "Открыть настройки"
// ed.surveySettings: "Survey Settings" => "Настройки опроса"
// ed.surveySettingsTooltip: "Open survey settings" => "Откройте настройки опроса"
// ed.showPanel: "Show Panel" => "Панель «Показать»"
// ed.hidePanel: "Hide Panel" => "Скрыть панель"
// ed.prevSelected: "Select previous" => "Выберите предыдущую"
// ed.nextSelected: "Select next" => "Выберите далее"
// ed.surveyTypeName: "Survey" => "Обзор"
// ed.pageTypeName: "Page" => "Страница"
// ed.panelTypeName: "Panel" => "Панель"
// ed.questionTypeName: "Question" => "Вопрос"
// ed.columnTypeName: "Column" => "Столбец"
// ed.themeSurvey: "Themes" => "Темы"
// ed.defaultV2Theme: "Default" => "По умолчанию"
// ed.modernTheme: "Modern" => "Современный"
// ed.defaultTheme: "Default (legacy)" => "По умолчанию (устаревшая)"
// ed.navigateToMsg: "You had to navigate to" => "Вы должны были перейти к"
// ed.saveSurveyTooltip: "Save Survey" => "Сохранить опрос"
// ed.jsonHideErrors: "Hide errors" => "Скрыть ошибки"
// ed.jsonShowErrors: "Show errors" => "Показать ошибки"
// ed.undoTooltip: "Undo last change" => "Отменить последнее изменение"
// ed.redoTooltip: "Redo the change" => "Повторите изменение"
// ed.showMoreChoices: "Show more" => "Развернуть"
// ed.showLessChoices: "Show less" => "Показать меньше"
// ed.copy: "Copy" => "Копировать"
// ed.cut: "Cut" => "Резать"
// ed.paste: "Paste" => "Паста"
// ed.copyTooltip: "Copy selection to clipboard" => "Копирование выделенного фрагмента в буфер обмена"
// ed.cutTooltip: "Cut selection to clipboard" => "Вырезать выделение в буфер обмена"
// ed.pasteTooltip: "Paste from clipboard" => "Вставка из буфера обмена"
// ed.propertyGridFilteredTextPlaceholder: "Type to search..." => "Введите для поиска..."
// ed.toolboxChoiceCategory: "Choice Questions" => "Вопросы выбора"
// ed.toolboxTextCategory: "Text Input Questions" => "Вопросы для ввода текста"
// ed.toolboxContainersCategory: "Containers" => "Контейнеры"
// ed.toolboxMatrixCategory: "Matrix Questions" => "Матричные вопросы"
// ed.toolboxMiscCategory: "Misc" => "Разное"
// ed.propertyEditorError: "Error" => "Ошибка"
// ed.translationPropertyGridTitle: "Language Settings" => "Языковые настройки"
// ed.themePropertyGridTitle: "Theme Settings" => "Настройки темы"
// ed.translationLanguages: "Languages" => "Языки"
// ed.translationShowUsedStringsOnly: "Used Strings Only" => "Используются только строки"
// ed.themeExportButton: "Export" => "Экспорт"
// ed.themeImportButton: "Import" => "Импорт"
// ed.selectPage: "Select page..." => "Выберите страницу..."
// ed.carryForwardChoicesCopied: "Choices are copied from" => "Варианты копируются из"
// ed.htmlPlaceHolder: "HTML content will be here." => "HTML-контент будет здесь."
// ed.panelPlaceHolder: "Drop a question from the toolbox here." => "Задайте вопрос с панели инструментов здесь."
// ed.surveyPlaceHolder: "The survey is empty. Drag an element from the toolbox or click the button below." => "Опрос пуст. Перетащите элемент с панели инструментов или нажмите кнопку ниже."
// ed.imagePlaceHolder: "Drag and drop an image here or click the button below and choose an image to upload" => "Перетащите изображение сюда или нажмите кнопку ниже и выберите изображение для загрузки"
// ed.imageChooseImage: "Choose Image" => "Выберите изображение"
// ed.addNewTypeQuestion: "Add {0}" => "Добавить {0}"
// ed.chooseLogoPlaceholder: "[LOGO]" => "[ЛОГОТИП]"
// ed.auto: "auto" => "Авто"
// ed.choices_Item: "Item " => "Пункт "
// lg.empty_tab: "Create a rule to customize the flow of the survey." => "Создайте правило для настройки потока опроса."
// lg.page_enableName: "Enable (disable) page" => "Включить (отключить) страницу"
// lg.column_visibilityName: "Show (hide) column" => "Показать (скрыть) столбец"
// lg.column_enableName: "Enable (disable) column" => "Включить (отключить) столбец"
// lg.column_requireName: "Make column required" => "Сделать столбец обязательным"
// lg.itemEmptyExpressionText: "New rule" => "Новое правило"
// lg.column_visibilityText: "make column {0} of question {1} visible" => "Сделайте видимым {0} {1} в столбце вопроса"
// lg.column_enableText: "make column {0} of question {1} enable" => "Сделайте столбец {0} вопроса {1} включите"
// lg.column_requireText: "make column {0} of question {1} required" => "Сделайте {0} вопроса {1} обязательным для заполнения"
// lg.trigger_setvalueEmptyText: "clear question value: {0}" => "Четкое значение вопроса: {0}"
// lg.showAllQuestions: "All Questions" => "Все вопросы"
// lg.showAllActionTypes: "All Action Types" => "Все типы действий"
// lg.conditions: "Condition(s)" => "Состояние(я)"
// lg.actions: "Action(s)" => "Действие(я)"
// lg.actionsEditorTitle: "Define action(s)" => "Определение действий"
// lg.deleteAction: "Delete Action" => "Действие «Удалить»"
// lg.addNewAction: "Add Action" => "Добавить действие"
// lg.selectedActionCaption: "Select action..." => "Выберите действие..."
// lg.noActionError: "Please, add at least one action." => "Пожалуйста, добавьте хотя бы одно действие."
// lg.actionInvalid: "Please, fix problems in your action(s)." => "Пожалуйста, исправьте проблемы в ваших действиях."
// lg.uncompletedRule_title: "Logical rules are incomplete" => "Логические правила неполны"
// lg.uncompletedRule_text: "You have not completed some of the logical rules. If you leave the tab now, the changes will be lost. Do you still want to leave the tab without completing the changes?" => "Вы не выполнили некоторые логические правила. Если вы покинете вкладку сейчас, изменения будут потеряны. Вы все еще хотите покинуть вкладку, не завершив изменения?"
// lg.uncompletedRule_apply: "Yes" => "Да"
// lg.uncompletedRule_cancel: "No, I want to complete the rules" => "Нет, я хочу дополнить правила"
// pe.clear: "Clear" => "Ясный"
// pe.saveTooltip: "Save" => "Спасать"
// pe.set: "Set" => "Набор"
// pe.change: "Change" => "Менять"
// pe.refresh: "Refresh" => "Освежать"
// pe.removeItem: "Click to remove the item..." => "Нажмите, чтобы удалить элемент..."
// pe.dragItem: "Drag the item" => "Перетащите элемент"
// pe.backTooltip: "Return without saving" => "Возврат без экономии"
// pe.saveAndBackTooltip: "Save and return" => "Сохранить и вернуть"
// pe.doneEditing: "Done" => "Договорились"
// pe.showChoices: "Show Choices" => "Показать варианты"
// pe.emptyValue: "Value is empty" => "Значение пусто"
// pe.fastEntryNonUniqueError: "Value '{0}' is not unique" => "Значение «{0}» не уникально"
// pe.fastEntryChoicesCountError: "Please limit the number of items from {0} to {1}" => "Пожалуйста, ограничьте количество предметов от {0} до {1}"
// pe.fastEntryPlaceholder: "You can set data in the following format:\nvalue1|text\nvalue2" => "Вы можете задать данные в следующем формате:\nзначение1|текст\nзначение2"
// pe.conditionActionEmpty: "Please select the action" => "Пожалуйста, выберите действие"
// pe.showPreviewBeforeComplete: "Preview answers before submitting the survey" => "Предварительный просмотр ответов перед отправкой опроса"
// pe.overridingPropertyPrefix: "Set by " => "Откладывать "
// pe.propertyIsNoUnique: "Please enter a unique value" => "Пожалуйста, введите уникальное значение"
// pe.propertyNameIsIncorrect: "Do not use reserved words: \"item\", \"choice\", \"panel\", \"row\"." => "Не используйте зарезервированные слова: «элемент», «выбор», «панель», «строка»."
// pe.listIsEmpty@choices: "No choices have been added yet" => "Варианты еще не добавлены"
// pe.addNew@choices: "Add a choice" => "Добавить выбор"
// choicesbyurl.valueName: "Get values from the following JSON field" => "Получение значений из следующего поля JSON"
// pe.imageLinkName: "Get image URLs from the following JSON field" => "Получение URL-адресов изображений из следующего поля JSON"
// pe.allowEmptyResponse: "Allow empty response" => "Разрешить пустой ответ"
// pe.colCount: "Column count" => "Количество столбцов"
// pe.cols: "Columns" => "Столбцы"
// pe.placeholder: "Input area placeholder" => "Заполнитель области ввода"
// pe.maxSize: "Maximum file size (in bytes)" => "Максимальный размер файла (в байтах)"
// pe.imageHeight: "Image height" => "Высота изображения"
// pe.imageWidth: "Image width" => "Ширина изображения"
// pe.defaultValue: "Default Answer" => "Ответ по умолчанию"
// pe.and: "and" => "и"
// pe.or: "or" => "или"
// pe.emptyLogicPopupMessage: "Select a question to start configuring conditions." => "Выберите вопрос, чтобы начать настройку условий."
// pe.if: "If" => "Если"
// pe.then: "then" => "тогда"
// pe.setToName: "Target question" => "Целевой вопрос"
// pe.fromName: "Question to copy answer from" => "Вопрос для копирования ответа"
// pe.gotoName: "Question to skip to" => "Вопрос, к которому нужно перейти"
// pe.ruleIsNotSet: "Rule is incorrect" => "Правило неверно"
// pe.includeIntoResult: "Include into survey results" => "Включить в результаты опроса"
// pe.expandCollapseTitle: "Expand/collapse title" => "Развернуть/свернуть заголовок"
// pe.portraitOrientation: "Switch to portrait orientation" => "Переключение в книжную ориентацию"
// pe.previewText: "Preview Answers button text" => "Текст кнопки «Предварительный просмотр ответов»"
// pe.editText: "Edit Answer button text" => "Редактировать текст кнопки «Ответ»"
// image.imageHeight: "Image height (in CSS-accepted values)" => "Высота изображения (в значениях, принимаемых CSS)"
// image.imageWidth: "Image width (in CSS-accepted values)" => "Ширина изображения (в значениях, принимаемых CSS)"
// page.timeLimit: "Time limit to finish the page (in seconds)" => "Ограничение по времени завершения страницы (в секундах)"
// question.page: "Parent page" => "Родительская страница"
// pe.renderMode: "Panel display mode" => "Режим отображения панели"
// pe.noEntriesText: "Empty entries text" => "Пустой текст записей"
// pe.html: "HTML markup" => "HTML-разметка"
// pe.setValue: "Answer" => "Ответ"
// pe.dataFormat: "Image format" => "Формат изображения"
// pe.allowAddRows: "Allow adding rows" => "Разрешить добавление строк"
// pe.allowRemoveRows: "Allow removing rows" => "Разрешить удаление строк"
// pe.allowRowReorder: "Allow row drag and drop" => "Разрешить перетаскивание строк"
// pe.responsiveImageSizeHelp: "Does not apply if you specify the exact image width or height." => "Не применяется, если указана точная ширина или высота изображения."
// pe.minImageWidth: "Minimum image width" => "Минимальная ширина изображения"
// pe.maxImageWidth: "Maximum image width" => "Максимальная ширина изображения"
// pe.minImageHeight: "Minimum image height" => "Минимальная высота изображения"
// pe.maxImageHeight: "Maximum image height" => "Максимальная высота изображения"
// pe.minLength: "Minimum length (in characters)" => "Минимальная длина (в символах)"
// surveyvalidator.text: "Error message" => "Сообщение об ошибке"
// surveyvalidator.expression: "Validation expression" => "Проверочное выражение"
// pe.logo: "Logo (URL or base64-encoded string)" => "Логотип (URL-адрес или строка в кодировке base64)"
// pe.questionsOnPageMode: "Survey structure" => "Структура опроса"
// pe.maxTextLength: "Maximum answer length (in characters)" => "Максимальная длина ответа (в символах)"
// pe.maxCommentLength: "Maximum comment length (in characters)" => "Максимальная длина комментария (в символах)"
// pe.autoGrowComment: "Auto-expand comment area if necessary" => "При необходимости автоматически разверните область комментариев"
// pe.allowResizeComment: "Allow users to resize text areas" => "Разрешить пользователям изменять размер текстовых областей"
// pe.textUpdateMode: "Update text question value" => "Обновление значения текстового вопроса"
// pe.autoFocusFirstError: "Set focus on the first invalid answer" => "Установка фокуса на первом недопустимом ответе"
// pe.checkErrorsMode: "Run validation" => "Запуск проверки"
// pe.navigateToUrl: "Navigate to URL" => "Перейдите по URL-адресу"
// pe.navigateToUrlOnCondition: "Dynamic URL" => "Динамический URL-адрес"
// pe.completedBeforeHtml: "Markup to show if the user already filled out this survey" => "Разметка, показывающая, заполнил ли пользователь уже этот опрос"
// pe.completedHtml: "Survey Complete page markup" => "Опрос Полная разметка страницы"
// pe.completedHtmlOnCondition: "Dynamic Survey Complete page markup" => "Динамический опрос Полная разметка страницы"
// pe.loadingHtml: "Markup to show while survey model is loading" => "Разметка, отображаемая при загрузке модели опроса"
// pe.commentText: "Comment area text" => "Текст области комментариев"
// pe.autocomplete: "Autocomplete type" => "Тип автозаполнения"
// pe.labelTrue: "\"True\" label" => "Метка «Истина»"
// pe.labelFalse: "\"False\" label" => "«Ложный» ярлык"
// pe.allowClear: "Show the Clear button" => "Показать кнопку «Очистить»"
// pe.displayStyle: "Value display style" => "Стиль отображения значений"
// pe.format: "Formatted string" => "Форматированная строка"
// pe.maximumFractionDigits: "Maximum fractional digits" => "Максимальное количество дробных цифр"
// pe.minimumFractionDigits: "Minimum fractional digits" => "Минимальные дробные цифры"
// pe.useGrouping: "Display grouping separators" => "Разделители группировки дисплеев"
// pe.allowMultiple: "Allow multiple files" => "Разрешить несколько файлов"
// pe.allowImagesPreview: "Preview images" => "Предварительный просмотр изображений"
// pe.acceptedTypes: "Accepted file types" => "Допустимые типы файлов"
// pe.waitForUpload: "Wait for the upload to complete" => "Дождитесь завершения загрузки"
// pe.needConfirmRemoveFile: "Confirm file deletion" => "Подтвердите удаление файла"
// pe.detailPanelMode: "Detail panel location" => "Расположение панели сведений"
// pe.minRowCount: "Minimum row count" => "Минимальное количество строк"
// pe.maxRowCount: "Maximum row count" => "Максимальное количество строк"
// pe.confirmDelete: "Confirm row deletion" => "Подтверждение удаления строки"
// pe.confirmDeleteText: "Confirmation message" => "Подтверждающее сообщение"
// paneldynamic.confirmDelete: "Confirm panel deletion" => "Подтвердите удаление панели"
// pe.panelCount: "Initial panel count" => "Начальное количество панелей"
// pe.minPanelCount: "Minimum panel count" => "Минимальное количество панелей"
// pe.maxPanelCount: "Maximum panel count" => "Максимальное количество панелей"
// pe.panelsState: "Inner panel expand state" => "Состояние расширения внутренней панели"
// pe.templateDescription: "Description template" => "Шаблон описания"
// pe.templateTitle: "Title template" => "Шаблон заголовка"
// pe.prevPanelText: "Previous Panel button tooltip" => "Предыдущая всплывающая подсказка кнопки «Панель»"
// pe.nextPanelText: "Next Panel button tooltip" => "Всплывающая подсказка кнопки «Следующая панель»"
// pe.showRangeInProgress: "Show progress bar" => "Показать индикатор выполнения"
// pe.templateQuestionTitleLocation: "Question title location" => "Местоположение заголовка вопроса"
// pe.removePanelButtonLocation: "Remove Panel button location" => "Удалить расположение кнопки «Панель»"
// pe.hideIfRowsEmpty: "Hide the question if there are no rows" => "Скрыть вопрос, если нет строк"
// pe.hideColumnsIfEmpty: "Hide columns if there are no rows" => "Скрытие столбцов, если строк нет"
// pe.rateValues: "Custom rate values" => "Пользовательские значения тарифов"
// pe.rateCount: "Rate count" => "Количество ставок"
// pe.autoGenerate: "How to specify rate values?" => "Как указать значения тарифов?"
// pe.hideIfChoicesEmpty: "Hide the question if it contains no choices" => "Скрыть вопрос, если он не содержит вариантов"
// pe.hideNumber: "Hide question number" => "Скрыть номер вопроса"
// pe.minWidth: "Minimum width (in CSS-accepted values)" => "Минимальная ширина (в значениях, принимаемых CSS)"
// pe.maxWidth: "Maximum width (in CSS-accepted values)" => "Максимальная ширина (в значениях, принимаемых CSS)"
// pe.width: "Width (in CSS-accepted values)" => "Ширина (в значениях, принимаемых CSS)"
// pe.showHeader: "Show column headers" => "Показать заголовки столбцов"
// pe.horizontalScroll: "Show horizontal scrollbar" => "Показать горизонтальную полосу прокрутки"
// pe.columnMinWidth: "Minimum column width (in CSS-accepted values)" => "Минимальная ширина столбца (в значениях, принимаемых CSS)"
// pe.rowTitleWidth: "Row header width (in CSS-accepted values)" => "Ширина заголовка строки (в значениях, принимаемых CSS)"
// pe.valueTrue: "\"True\" value" => "Значение \"True\""
// pe.valueFalse: "\"False\" value" => "Значение \"False\""
// pe.minErrorText: "\"Value is below minimum\" error message" => "Сообщение об ошибке \"Значение ниже минимального\""
// pe.maxErrorText: "\"Value exceeds maximum\" error message" => "Сообщение об ошибке «Значение превышает максимальное»"
// pe.otherErrorText: "\"Empty comment\" error message" => "Сообщение об ошибке «Пустой комментарий»"
// pe.keyDuplicationError: "\"Non-unique key value\" error message" => "Сообщение об ошибке \"Неуникальное значение ключа\""
// pe.minSelectedChoices: "Minimum selected choices" => "Минимальное количество выбранных вариантов"
// pe.maxSelectedChoices: "Maximum selected choices" => "Максимальное количество выбранных вариантов"
// pe.showNumber: "Show panel number" => "Показать номер панели"
// pe.logoWidth: "Logo width (in CSS-accepted values)" => "Ширина логотипа (в значениях, принимаемых CSS)"
// pe.logoHeight: "Logo height (in CSS-accepted values)" => "Высота логотипа (в значениях, принимаемых CSS)"
// pe.readOnly: "Read-only" => "Только для чтения"
// pe.enableIf: "Editable if" => "Редактируется, если"
// pe.noRowsText: "\"No rows\" message" => "Сообщение \"Нет строк\""
// pe.size: "Input field size (in characters)" => "Размер поля ввода (в символах)"
// pe.separateSpecialChoices: "Separate special choices (None, Other, Select All)" => "Отдельные специальные варианты («Нет», «Другое», «Выбрать все»)"
// pe.choicesFromQuestion: "Copy choices from the following question" => "Копирование вариантов из следующего вопроса"
// pe.choicesFromQuestionMode: "Which choices to copy?" => "Какие варианты скопировать?"
// pe.showCommentArea: "Show the comment area" => "Показать область комментариев"
// pe.commentPlaceholder: "Comment area placeholder" => "Заполнитель области комментариев"
// pe.displayRateDescriptionsAsExtremeItems: "Display rate descriptions as extreme values" => "Отображение описаний скоростей в виде экстремальных значений"
// pe.rowOrder: "Row order" => "Порядок строк"
// pe.columnsLayout: "Column layout" => "Расположение столбцов"
// pe.columnColCount: "Nested column count" => "Количество вложенных столбцов"
// pe.state: "Panel expand state" => "Состояние развертывания панели"
// pe.correctAnswer: "Correct Answer" => "Правильный ответ"
// pe.defaultPanelValue: "Default Values" => "Значения по умолчанию"
// pe.cells: "Cell Texts" => "Тексты ячеек"
// pe.keyName: "Key column" => "Ключевая колонка"
// itemvalue.text: "Alt text" => "Замещающий текст"
// tabs.html: "HTML Editor" => "HTML-редактор"
// tabs.numbering: "Numbering" => "Нумерация"
// tabs.pages: "Pages" => "Страниц"
// tabs.slider: "Slider" => "Ползун"
// tabs.expression: "Expression" => "Выражение"
// pe.choicesVisibleIf: "Choices are visible if" => "Варианты доступны в следующих случаях:"
// pe.choicesEnableIf: "Choices are selectable if" => "Варианты можно выбрать, если:"
// pe.columnsEnableIf: "Columns are visible if" => "Столбцы видны, если"
// pe.rowsEnableIf: "Rows are visible if" => "Строки видны, если"
// pe.indent: "Add indents" => "Добавление отступов"
// panel.indent: "Add outer indents" => "Добавление внешних отступов"
// pe.innerIndent: "Add inner indents" => "Добавление внутренних отступов"
// pe.titleKeyboardAdornerTip: "Press enter button to edit" => "Нажмите кнопку ввода, чтобы отредактировать"
// pe.keyboardAdornerTip: "Press enter button to edit item, press delete button to delete item, press alt plus arrow up or arrow down to move item" => "Нажмите кнопку ввода, чтобы отредактировать элемент, нажмите кнопку удаления, чтобы удалить элемент, нажмите alt со стрелкой вверх или со стрелкой вниз, чтобы переместить элемент"
// pe.emptyExpressionPlaceHolder: "Type expression here..." => "Введите выражение здесь..."
// pe.noFile: "No file choosen" => "Файл не выбран"
// pe.clearIfInvisible: "Clear the value if the question becomes hidden" => "Очистите значение, если вопрос становится скрытым"
// pe.valuePropertyName: "Value property name" => "Имя свойства value"
// pe.searchEnabled: "Enable search" => "Включить поиск"
// pe.hideSelectedItems: "Hide selected items" => "Скрытие выбранных элементов"
// pe.closeOnSelect: "Close the dropdown after selection" => "Закрыть раскрывающийся список после выбора"
// pe.signatureWidth: "Signature width" => "Ширина подписи"
// pe.signatureHeight: "Signature height" => "Высота подписи"
// pe.verticalAlign: "Vertical alignment" => "Выравнивание по вертикали"
// pe.alternateRows: "Alternate rows" => "Чередующиеся строки"
// pe.columnsVisibleIf: "Columns are visible if" => "Столбцы видны, если"
// pe.rowsVisibleIf: "Rows are visible if" => "Строки видны, если"
// pe.otherPlaceholder: "Comment area placeholder" => "Заполнитель области комментариев"
// pe.rateType: "Rate type" => "Тип тарифа"
// pv.true: "true" => "истинный"
// pv.false: "false" => "ложный"
// pv.decimal: "decimal" => "десятичный"
// pv.currency: "currency" => "валюта"
// pv.percent: "percent" => "процент"
// pv.onpanel: "Start on each panel" => "Старт на каждой панели"
// pv.tab: "Tabs" => "Вкладки"
// pv.both: "Both" => "Оба"
// pv.right: "Right" => "Правильно"
// pv.color: "color" => "Цвет"
// pv.date: "date" => "дата"
// pv.datetime: "datetime" => "ДатаТайм"
// pv.datetime-local: "datetime-local" => "datetime-local"
// pv.email: "email" => "Отправить по электронной почте"
// pv.month: "month" => "месяц"
// pv.number: "number" => "число"
// pv.password: "password" => "пароль"
// pv.range: "range" => "диапазон"
// pv.tel: "tel" => "Тель"
// pv.text: "text" => "СМС"
// pv.time: "time" => "Время"
// pv.url: "url" => "URL-адрес"
// pv.week: "week" => "неделя"
// pv.onHiddenContainer: "When the question or its panel/page becomes hidden" => "Когда вопрос или его панель/страница становятся скрытыми"
// clearInvisibleValues.none: "Never" => "Никогда"
// inputType.color: "Color" => "Цвет"
// inputType.date: "Date" => "Дата"
// inputType.datetime-local: "Date and Time" => "Дата и время"
// inputType.email: "Email" => "Отправить по электронной почте"
// inputType.month: "Month" => "Месяц"
// inputType.number: "Number" => "Число"
// inputType.password: "Password" => "Пароль"
// inputType.range: "Range" => "Диапазон"
// inputType.tel: "Phone Number" => "Номер телефона"
// inputType.text: "Text" => "СМС"
// inputType.time: "Time" => "Время"
// inputType.url: "URL" => "URL-адрес"
// inputType.week: "Week" => "Неделя"
// pv.onValueChanging: "Before an answer is changed" => "Прежде чем ответ будет изменен"
// pv.standard: "Original structure" => "Оригинальная структура"
// pv.singlePage: "All questions on a single page" => "Все вопросы на одной странице"
// pv.questionPerPage: "Each question on an individual page" => "Каждый вопрос на отдельной странице"
// pv.noPreview: "No preview" => "Без предварительного просмотра"
// pv.showAllQuestions: "Show all questions" => "Показать все вопросы"
// pv.showAnsweredQuestions: "Show answered questions only" => "Показывать только ответы на вопросы"
// pv.pages: "Completed pages" => "Заполненные страницы"
// pv.questions: "Answered questions" => "Ответы на вопросы"
// pv.requiredQuestions: "Answered required questions" => "Ответы на необходимые вопросы"
// pv.correctQuestions: "Valid answers" => "Правильные ответы"
// pv.buttons: "Completed pages (button UI)" => "Завершенные страницы (пользовательский интерфейс кнопки)"
// pv.underInput: "Under the input" => "Под входом"
// pv.underTitle: "Under the title" => "Под заголовком"
// pv.onBlur: "On blur" => "О размытии"
// pv.onTyping: "While typing" => "При наборе текста"
// pv.underRow: "Under the row" => "Под строкой"
// pv.underRowSingle: "Under the row, only one panel is visible" => "Под строкой видна только одна панель"
// showNavigationButtons.none: "Hidden" => "Скрытый"
// showProgressBar.off: "Hidden" => "Скрытый"
// showTimerPanel.none: "Hidden" => "Скрытый"
// showTimerPanelMode.all: "Both" => "Оба"
// detailPanelMode.none: "Hidden" => "Скрытый"
// addRowButtonLocation.default: "Depends on matrix layout" => "Зависит от компоновки матрицы"
// panelsState.default: "Users cannot expand or collapse panels" => "Пользователи не могут разворачивать или сворачивать панели"
// panelsState.collapsed: "All panels are collapsed" => "Все панели свернуты"
// panelsState.expanded: "All panels are expanded" => "Все панели расширены"
// widthMode.auto: "Auto" => "Авто"
// widthMode.static: "Static" => "Статический"
// widthMode.responsive: "Responsive" => "Отзывчивый"
// imageFit.none: "None" => "Никакой"
// imageFit.contain: "Contain" => "Содержать"
// imageFit.cover: "Cover" => "Крышка"
// imageFit.fill: "Fill" => "Заполнять"
// contentMode.auto: "Auto" => "Авто"
// contentMode.image: "Image" => "Образ"
// contentMode.video: "Video" => "Видео"
// contentMode.youtube: "YouTube" => "Ютуб"
// displayMode.auto: "Auto" => "Авто"
// displayMode.buttons: "Buttons" => "Кнопки"
// displayMode.dropdown: "Dropdown" => "Выпадающий список"
// rateColorMode.default: "Default" => "По умолчанию"
// autoGenerate.true: "Generate" => "Порождать"
// autoGenerate.false: "Enter manually" => "Ввод вручную"
// rateType.labels: "Labels" => "Метки"
// rateType.stars: "Stars" => "Звезды"
// rateType.smileys: "Smileys" => "Смайлики"
// op.and: "and" => "и"
// op.or: "or" => "или"
// ew.modern: "Modern theme" => "Современная тема"
// ew.default: "Default theme" => "Тема по умолчанию"
// ew.orange: "Orange theme" => "Оранжевая тема"
// ew.darkblue: "Darkblue theme" => "Темно-синяя тема"
// ew.darkrose: "Darkrose theme" => "Тема \"Темная роза\""
// ew.stone: "Stone theme" => "Тема «Камень»"
// ew.winter: "Winter theme" => "Зимняя тематика"
// ew.winterstone: "Winter-Stone theme" => "Тема \"Зимний камень\""
// ts.hideInvisibleElements: "Hide invisible elements" => "Скрыть невидимые элементы"
// validators.emailvalidator: "Email" => "Отправить по электронной почте"
// pehelp.cookieName: "Cookies prevent users from filling out the same survey twice." => "Файлы cookie не позволяют пользователям заполнять один и тот же опрос дважды."
// pehelp.size: "Resizes the visible area of the input field. Please use the <b>Validation → Maximum length</b> setting to limit the input length." => "Изменяет размер видимой области поля ввода. Пожалуйста, используйте настройку <b>«Проверка → максимальная длина</b>», чтобы ограничить длину ввода."
// pehelp.format: "Use {0} as a placeholder for the actual value." => "Используйте {0} в качестве заполнителя для фактического значения."
// pehelp.totalText: "Visible only when at least one column has Total type or Total expression." => "Отображается только в том случае, если хотя бы один столбец имеет тип Total или выражение Total."
// pehelp.acceptedTypes: "Refer to the [accept](https://www.w3schools.com/tags/att_input_accept.asp) attribute description for more information." => "Дополнительные сведения см. в описании атрибута [accept](https://www.w3schools.com/tags/att_input_accept.asp)."
// pehelp.columnColCount: "Applicable only to Radiogroup and Checkbox cell types." => "Применимо только к типам ячеек «Радиогруппа» и «Флажок»."
// pehelp.autocomplete: "Refer to the [autocomplete](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete) attribute description for more information." => "Дополнительные сведения см. в описании атрибута [autocomplete](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete)."
// pehelp.valueName: "If you do not set this property, the answer will be stored in a field specified by the Name property." => "Если это свойство не задано, ответ будет сохранен в поле, указанном свойством Name."
// choicesbyurl.valueName: " " => " "
// pehelp.keyName: "If the specified column contains identical values, the survey throws the \"Non-unique key value\" error." => "Если указанный столбец содержит одинаковые значения, опрос выдает ошибку «Неуникальное значение ключа»."
// p.multiSelect: "Allow multiple selection" => "Разрешить множественный выбор"
// p.showLabel: "Show image captions" => "Показать подписи к изображениям"
// p.value: "Value" => "Ценность"
// p.tabAlign: "Tab alignment" => "Выравнивание табуляции"
// p.logoFit: "Logo fit" => "Подходит под логотип"
// p.pages: "Pages" => "Страниц"
// p.questions: "Questions" => "Вопросы"
// p.calculatedValues: "Calculated values" => "Вычисляемые значения"
// p.surveyId: "Survey id" => "Идентификатор опроса"
// p.surveyPostId: "Survey post id" => "Идентификатор записи опроса"
// p.surveyShowDataSaving: "Survey show data saving" => "Опрос показывает сохранение данных"
// p.questionDescriptionLocation: "Question description location" => "Описание вопроса Местоположение"
// p.progressBarType: "Progress bar type" => "Тип индикатора выполнения"
// p.showTOC: "Show TOC" => "Показать оглавление"
// p.tocLocation: "Toc location" => "Расположение оглавления"
// p.questionTitlePattern: "Question title pattern" => "Шаблон заголовка вопроса"
// p.widthMode: "Width mode" => "Режим ширины"
// p.showBrandInfo: "Show brand info" => "Показать информацию о бренде"
// p.useDisplayValuesInDynamicTexts: "Use display values in dynamic texts" => "Использование отображаемых значений в динамических текстах"
// p.descriptionLocation: "Description location" => "Описание местоположения"
// p.defaultValueExpression: "Default value expression" => "Выражение значения по умолчанию"
// p.bindings: "Bindings" => "Привязки"
// p.renderAs: "Render as" => "Рендеринг как"
// p.attachOriginalItems: "Attach original items" => "Прикрепите оригинальные элементы"
// p.cellHint: "Cell hint" => "Подсказка по ячейке"
// p.isUnique: "Is unique" => "Уникален"
// p.showInMultipleColumns: "Show in multiple columns" => "Показать в нескольких столбцах"
// p.totalMaximumFractionDigits: "Total maximum fraction digits" => "Общее количество максимальных дробных цифр"
// p.totalMinimumFractionDigits: "Total minimum fraction digits" => "Общее количество минимальных дробных цифр"
// p.detailElements: "Detail elements" => "Детализация элементов"
// p.allowAdaptiveActions: "Allow adaptive actions" => "Разрешить адаптивные действия"
// p.detailPanelShowOnAdding: "Detail panel show on adding" => "Панель сведений, отображаемая при добавлении"
// p.choicesLazyLoadEnabled: "Choices lazy load enabled" => "Выбор отложенной загрузки включен"
// p.choicesLazyLoadPageSize: "Choices lazy load page size" => "Выбор ленивой загрузки размера страницы"
// p.inputFieldComponent: "Input field component" => "Компонент поля ввода"
// p.itemComponent: "Item component" => "Компонент предмета"
// p.min: "Min" => "Мин"
// p.max: "Max" => "Макс"
// p.minValueExpression: "Min value expression" => "Выражение минимального значения"
// p.maxValueExpression: "Max value expression" => "Выражение максимального значения"
// p.step: "Step" => "Шаг"
// p.dataList: "Data list" => "Список данных"
// p.elements: "Elements" => "Азы"
// p.content: "Content" => "Содержание"
// p.navigationTitle: "Navigation title" => "Навигационный заголовок"
// p.navigationDescription: "Navigation description" => "Навигационное описание"
// p.longTap: "Long tap" => "Длительное нажатие"
// p.autoGrow: "Auto grow" => "Автоматическое выращивание"
// p.allowResize: "Allow resizing" => "Разрешить изменение размера"
// p.acceptCarriageReturn: "Accept carriage return" => "Принять возврат каретки"
// p.displayMode: "Display mode" => "Режим отображения"
// p.rateType: "Rate type" => "Тип тарифа"
// p.contentMode: "Content mode" => "Режим содержимого"
// p.imageFit: "Image fit" => "Подгонка под изображение"
// p.altText: "Alt text" => "Замещающий текст"
// p.height: "Height" => "Высота"
// p.penColor: "Pen color" => "Цвет пера"
// p.backgroundColor: "Background color" => "Цвет фона"
// p.templateElements: "Template elements" => "Элементы шаблона"
// p.operator: "Operator" => "Оператор"
// p.isVariable: "Is variable" => "Является вариативным"
// p.runExpression: "Run expression" => "Выражение \"Выполнить\""
// p.showCaption: "Show caption" => "Показать подпись"
// p.iconName: "Icon name" => "Название значка"
// p.iconSize: "Icon size" => "Размер значка"
// p.precision: "Precision" => "Точность"
// p.matrixDragHandleArea: "Matrix drag handle area" => "Область маркера перетаскивания матрицы"
// p.backgroundImage: "Background image" => "Фоновое изображение"
// p.backgroundImageFit: "Background image fit" => "Подгонка фонового изображения"
// p.backgroundImageAttachment: "Background image attachment" => "Вложение фонового изображения"
// p.backgroundOpacity: "Background opacity" => "Непрозрачность фона"
// p.selectToRankEnabled: "Select to rank enabled" => "Выберите, чтобы ранжирование включено"
// p.selectToRankAreasLayout: "Select to rank areas layout" => "Выберите, чтобы ранжировать макет областей"
// p.allowCameraAccess: "Allow camera access" => "Разрешить доступ к камере"
// p.scaleColorMode: "Scale color mode" => "Цветовой режим масштабирования"
// p.rateColorMode: "Rate color mode" => "Оцените цветовой режим"
// p.templateTabTitle: "Template tab title" => "Заголовок вкладки шаблона"
// p.templateVisibleIf: "Template visible if" => "Шаблон виден, если"
// p.copyDisplayValue: "Copy display value" => "Копирование отображаемого значения"
// theme.--background: "Background color" => "Цвет фона"
// theme.--background-dim-light: "Background dim light color" => "Фон тусклый цвет света"
// theme.--primary-foreground: "Primary foreground color" => "Основной цвет переднего плана"
// theme.--foreground: "Foreground color" => "Цвет переднего плана"
// theme.--base-unit: "Base unit" => "Базовый блок"
// theme.groupAdvanced: "Advanced" => "Продвинутый"
// theme.themeName: "Theme" => "Тема"
// theme.isPanelless: "Question appearance" => "Внешний вид вопроса"
// theme.isPanellessPanels: "Default" => "По умолчанию"
// theme.isPanellessLightweight: "Without Panels" => "Без панелей"
// theme.themePaletteLight: "Light" => "Свет"
// theme.themePaletteDark: "Dark" => "Темный"
// theme.primaryColor: "Accent color" => "Акцентный цвет"
// theme.primaryDefaultColor: "Default" => "По умолчанию"
// theme.primaryDarkColor: "Hover" => "Парить"
// theme.primaryLightColor: "Selected" => "Выбранный"
// theme.backgroundDimColor: "Background color" => "Цвет фона"
// theme.backgroundImage: "Background image" => "Фоновое изображение"
// theme.backgroundImageFitAuto: "Auto" => "Авто"
// theme.backgroundImageFitCover: "Cover" => "Крышка"
// theme.backgroundImageFitContain: "Contain" => "Содержать"
// theme.backgroundOpacity: "Opacity" => "Непрозрачность"
// theme.backgroundImageAttachmentFixed: "Fixed" => "Неподвижный"
// theme.backgroundImageAttachmentScroll: "Scroll" => "Свиток"
// theme.panelBackgroundTransparency: "Panel background opacity" => "Непрозрачность фона панели"
// theme.questionBackgroundTransparency: "Question background opacity" => "Непрозрачность фона вопроса"
// theme.questionPanel: "Panel background and corner radius" => "Фон панели и радиус угла"
// theme.questionTitle: "Question title font" => "Шрифт заголовка вопроса"
// theme.questionDescription: "Question description font" => "Шрифт описания вопроса"
// theme.editorPanel: "Input element" => "Элемент ввода"
// theme.editorFont: "Input element font" => "Шрифт элемента ввода"
// theme.backcolor: "Default background" => "Фон по умолчанию"
// theme.hovercolor: "Hover background" => "Фон при наведении курсора"
// theme.borderDecoration: "Border decoration" => "Оформление бордюра"
// theme.accentBackground: "Accent background" => "Акцентный фон"
// theme.accentForeground: "Accent foreground" => "Акцент на переднем плане"
// theme.primaryForecolor: "Default color" => "Цвет по умолчанию"
// theme.primaryForecolorLight: "Disabled color" => "Отключенный цвет"
// theme.linesColors: "Minor line colors" => "Второстепенные цвета линий"
// theme.borderDefault: "Darker" => "Темнее"
// theme.borderLight: "Lighter" => "Зажигалка"
// theme.fontFamily: "Font family" => "Семейство шрифтов"
// theme.fontSize: "Font size" => "Размер шрифта"
// theme.color: "Color" => "Цвет"
// theme.size: "Size" => "Размер"
// theme.fontWeightRegular: "Regular" => "Регулярный"
// theme.fontWeightHeavy: "Heavy" => "Тяжелый"
// theme.fontWeightSemiBold: "Semi-bold" => "Полужирный"
// theme.fontWeightBold: "Bold" => "Смелый"
// theme.scale: "Scale" => "Шкала"
// theme.cornerRadius: "Corner radius" => "Радиус угла"
// theme.surveyTitleFont: "Survey title font" => "Шрифт заголовка опроса"
// theme.pageTitle: "Page title font" => "Шрифт заголовка страницы"
// theme.pageDescription: "Page description font" => "Шрифт описания страницы"
// theme.boxShadowX: "X" => "X"
// theme.boxShadowY: "Y" => "Y"
// theme.boxShadowAddRule: "Add Shadow Effect" => "Добавить эффект тени"
// theme.opacity: "Opacity" => "Непрозрачность"
// theme.boxShadowBlur: "Blur" => "Смазывать"
// theme.boxShadowSpread: "Spread" => "Распространение"
// theme.boxShadowDrop: "Drop" => "Капля"
// theme.boxShadowInner: "Inner" => "Внутренний"
// theme.questionShadow: "Shadow effects" => "Эффекты тени"
// theme.editorShadow: "Input element shadow effects" => "Эффекты тени входного элемента"
// names.default: "Default" => "По умолчанию"
// names.contrast: "Contrast" => "Контраст"
// names.plain: "Plain" => "Равнина"
// names.simple: "Simple" => "Простой"
// names.blank: "Blank" => "Пустой"
// names.double: "Double" => "Двойной"
// names.bulk: "Bulk" => "Масса"
// names.pseudo-3d: "Pseudo 3D" => "Псевдо 3D"
// names.playful: "Playful" => "Игривый"
// names.ultra: "Ultra" => "Ультра"
// colors.teal: "Teal" => "Чирок"
// colors.blue: "Blue" => "Синий"
// colors.purple: "Purple" => "Пурпурный"
// colors.orchid: "Orchid" => "Орхидея"
// colors.tulip: "Tulip" => "Тюльпан"
// colors.brown: "Brown" => "Коричневый"
// colors.green: "Green" => "Зеленый"
// names.sharp: "Sharp" => "Острый"
// names.borderless: "Borderless" => "Без границ"
// names.flat: "Flat" => "Плоский"
// names.doubleborder: "Double Border" => "Двойная граница"
// names.layered: "Layered" => "Слоистый"
// names.solid: "Solid" => "Сплошной"
// names.threedimensional: "3D" => ".3D"
// ed.translationDeleteLanguage: "Are you certain you wish to delete all strings for this language?" => "Вы уверены, что хотите удалить все строки для этого языка?"
// ed.themeResetButton: "Reset theme settings to default" => "Сброс настроек темы по умолчанию"
// theme.placeholderColor: "Placeholder color" => "Цвет заполнителя"
// ed.themeSettings: "Theme Settings" => "Настройки темы"
// ed.themeSettingsTooltip: "Open theme settings" => "Откройте настройки темы"
// pe.resetToDefaultCaption: "Reset" => "Сброс"
// pv.file: "Local files" => "Локальные файлы"
// pv.camera: "Camera" => "Фотоаппарат"
// pv.file-camera: "Local files or camera" => "Локальные файлы или камера"
// ed.translateUsigAI: "Auto-translate All" => "Автоматический перевод всех"
// ed.translationDialogTitle: "Untranslated strings" => "Непереведенные строки"
// pe.fastEntryChoicesMinCountError: "Please enter at least {0} items" => "Пожалуйста, введите не менее {0} пунктов"
// lg.question_resetValueName: "Reset question value" => "Сбросить значение вопроса"
// lg.column_resetValue: "Reset column value" => "Сброс значения столбца"
// pe.markRequired: "Mark as required" => "Отметьте как обязательный"
// pe.removeRequiredMark: "Remove the required mark" => "Снимите нужную отметку"
// p.resetValueIf: "Reset value if" => "Сбросьте значение, если"
// lg.question_setValueName: "Set question value" => "Задать значение вопроса"
// lg.column_resetValueName: "Reset column value" => "Сброс значения столбца"
// lg.column_setValueName: "Set column value" => "Задание значения столбца"
// lg.setValueExpressionPlaceholder: " An expression whose result will be assigned to the target question." => " Выражение, результат которого будет присвоен целевому вопросу."
// survey.title: "Title" => "Титул"
// page.title: "Title" => "Титул"
// p.setValueIf: "Set value if" => "Установите значение, если"
// theme.header: "Header" => "Заголовок"
// theme.headerView: "View" => "Вид"
// theme.headerViewBasic: "Basic" => "Основной"
// theme.headerViewAdvanced: "Advanced" => "Продвинутый"
// theme.headerInheritWidthFrom: "Content area width" => "Ширина области содержимого"
// theme.headerInheritWidthFromSurvey: "Same as survey" => "То же, что и опрос"
// theme.headerInheritWidthFromPage: "Fit to page" => "По размеру страницы"
// theme.headerTextAreaWidth: "Text width" => "Ширина текста"
// theme.headerBackgroundColorSwitch: "Background color" => "Цвет фона"
// theme.headerBackgroundColorNone: "None" => "Никакой"
// theme.headerBackgroundColorAccentColor: "Accent color" => "Акцентный цвет"
// theme.headerBackgroundColorCustom: "Custom" => "Обычай"
// theme.horizontalAlignmentLeft: "Left" => "Налево"
// theme.horizontalAlignmentCenter: "Center" => "Центр"
// theme.horizontalAlignmentRight: "Right" => "Правильно"
// theme.verticalAlignmentTop: "Top" => "Вверх"
// theme.verticalAlignmentMiddle: "Middle" => "Середина"
// theme.verticalAlignmentBottom: "Bottom" => "Дно"
// theme.logoPosition: "Logo Position" => "Положение логотипа"
// theme.headerTitlePosition: "Title Position" => "Титульная позиция"
// lg.question_resetValueText: "reset value for question: {0}" => "Сброс значения для вопроса: {0}"
// lg.question_setValueText: "assign value: {1} to question: {0}" => "присвоить значение: {1} к вопросу: {0}"
// lg.column_resetValueText: "reset cell value for column: {0}" => "Сброс значения ячейки для столбца: {0}"
// lg.column_setValueText: "assign cell value: {1} to column: {0}" => "Присвойте значение ячейки: {1} столбцу: {0}"
// ed.surveyJsonExportButton: "Export" => "Экспорт"
// ed.surveyJsonImportButton: "Import" => "Импорт"
// ed.surveyJsonCopyButton: "Copy to clipboard" => "Копировать в буфер"
// pe.filePlaceholder: "File placeholder text" => "Замещающий текст файла"
// pe.photoPlaceholder: "Photo placeholder text" => "Замещающий текст фотографии"
// pe.fileOrPhotoPlaceholder: "File or photo placeholder text" => "Замещающий текст файла или фотографии"
// pehelp.filePlaceholder: "Applies when \"Source type\" is \"Local files\" or when camera is unavailable" => "Применяется, когда \"Тип источника\" имеет значение \"Локальные файлы\" или когда камера недоступна"
// pehelp.photoPlaceholder: "Applies when \"Source type\" is \"Camera\"." => "Применяется, если \"Тип источника\" имеет значение \"Камера\"."
// pehelp.fileOrPhotoPlaceholder: "Applies when \"Source type\" is \"Local files or camera\"." => "Применяется, если \"Тип источника\" имеет значение \"Локальные файлы или камера\"."
// theme.background: "Background" => "Фон"
// theme.appearance: "Appearance" => "Внешность"
// ed.themeResetConfirmation: "Do you really want to reset the theme? All your customizations will be lost." => "Вы действительно хотите сбросить тему? Все ваши настройки будут потеряны."
// ed.themeResetConfirmationOk: "Yes, reset the theme" => "Да, сбросьте тему"
// theme.headerInheritWidthFromContainer: "Fit to container" => "Подходит для контейнера"
// signaturepad.showPlaceholder: "Show the placeholder" => "Показать заполнитель"
// signaturepad.placeholder: "Placeholder text" => "Замещающий текст"
// theme.surveyDescriptionFont: "Survey description font" => "Шрифт описания опроса"
// ed.prevFocus: "Focus previous" => "Фокусировка предыдущая"
// ed.nextFocus: "Focus next" => "Сосредоточьтесь на следующем"
// ed.saveTheme: "Save Theme" => "Сохранить тему"
// ed.saveThemeTooltip: "Save Theme" => "Сохранить тему"
// lg.page_requireName: "Make page required" => "Сделать страницу обязательной"
// lg.panel_requireName: "Make page required" => "Сделать страницу обязательной"
// signaturepad.signatureWidth: "Signature area width" => "Ширина области подписи"
// signaturepad.signatureHeight: "Signature area height" => "Высота области подписи"
// signaturepad.signatureAutoScaleEnabled: "Auto-scale the signature area" => "Автоматическое масштабирование области подписи"
// signaturepad.penMinWidth: "Minimum pen width" => "Минимальная ширина пера"
// signaturepad.penMaxWidth: "Maximum pen width" => "Максимальная ширина пера"
// theme.headerDescriptionPosition: "Description position" => "Описание позиции"
// ed.propertyGridNoResultsFound: "No results found" => "Никаких результатов не найдено"
// pv.leftRight: "Left and right" => "Влево и вправо"
// p.sourceType: "Source type" => "Тип источника"
// p.fitToContainer: "Fit to container" => "Подходит для контейнера"
// p.setValueExpression: "Set value expression" => "Выражение заданного значения"
// ed.choicesLoadedFromWebText: "Choices are loaded from a web service." => "Варианты загружаются из веб-службы."
// ed.choicesLoadedFromWebLinkText: "Go to settings" => "Перейдите в настройки"
// ed.choicesLoadedFromWebPreviewTitle: "Preview of loaded choice options" => "Предварительный просмотр загруженных вариантов выбора"
// pe.eachRowUnique: "Prevent duplicate responses in rows" => "Предотвращение дублирования ответов в строках"
// theme.advancedMode: "Advanced mode" => "Расширенный режим"
// theme.backgroundCornerRadius: "Background and corner radius" => "Радиус фона и угла"
// theme.colorsTitle: "Colors" => "Знамя"
// theme.font: "Font" => "Шрифт"
// theme.lines: "Lines" => "Обводы"
// theme.titleFont: "Title font" => "Шрифт заголовка"
// theme.descriptionFont: "Description font" => "Описание шрифта"
// theme.shadow: "Shadow effects" => "Эффекты теней"
// ed.translateUsigAIFrom: "Translate from: " => "Перевести с: "
// pe.showRefuseItem: "Allow the Refuse to Answer option" => "Разрешить опцию «Отказаться от ответа»"
// pe.showDontKnowItem: "Allow the Don't Know option" => "Разрешить опцию «Не знаю»"
// pe.showRefuseItem: "Allow the Refuse to Answer option" => "Разрешить опцию «Отказаться от ответа»"
// pe.showDontKnowItem: "Allow the Don't Know option" => "Разрешить опцию «Не знаю»"
// pv.contain: "Contain" => "Содержать"
// pv.cover: "Cover" => "Крышка"
// pv.fill: "Fill" => "Заполнять"

// pe.transposeData: "Transpose rows to columns" => "Транспонирование строк в столбцы"
// layout.panel: "Layout" => "Схема"
// layout.question: "Layout" => "Схема"
// layout.base: "Layout" => "Схема"
// panel.name: "Panel name" => "Название панели"
// panel.title: "Panel title" => "Заголовок панели"
// panel.description: "Panel description" => "Описание панели"
// panel.visibleIf: "Make the panel visible if" => "Сделать панель видимой, если"
// panel.requiredIf: "Make the panel required if" => "Сделайте панель обязательной, если"
// panel.questionOrder: "Question order within the panel" => "Порядок вопросов на панели"
// panel.startWithNewLine: "Display the panel on a new line" => "Отображение панели на новой строке"
// panel.state: "Panel collapse state" => "Состояние свертывания панели"
// panel.width: "Inline panel width" => "Встроенная ширина панели"
// panel.minWidth: "Minimum panel width" => "Минимальная ширина панели"
// panel.maxWidth: "Maximum panel width" => "Максимальная ширина панели"
// paneldynamic.name: "Panel name" => "Название панели"
// paneldynamic.title: "Panel title" => "Заголовок панели"
// paneldynamic.description: "Panel description" => "Описание панели"
// paneldynamic.visibleIf: "Make the panel visible if" => "Сделать панель видимой, если"
// paneldynamic.requiredIf: "Make the panel required if" => "Сделайте панель обязательной, если"
// paneldynamic.page: "Move the panel to page" => "Переместите панель на страницу"
// paneldynamic.startWithNewLine: "Display the panel on a new line" => "Отображение панели на новой строке"
// paneldynamic.state: "Panel collapse state" => "Состояние свертывания панели"
// paneldynamic.width: "Inline panel width" => "Встроенная ширина панели"
// paneldynamic.minWidth: "Minimum panel width" => "Минимальная ширина панели"
// paneldynamic.maxWidth: "Maximum panel width" => "Максимальная ширина панели"
// paneldynamic.templateDescription: "Panel description pattern" => "Шаблон описания панели"
// paneldynamic.templateTitle: "Panel title pattern" => "Шаблон заголовка панели"
// paneldynamic.noEntriesText: "Empty panel text" => "Пустой текст на панели"
// paneldynamic.templateTabTitle: "Tab title pattern" => "Шаблон заголовка вкладки"
// paneldynamic.templateVisibleIf: "Make an individual panel visible if" => "Сделать отдельную панель видимой, если"
// paneldynamic.hideNumber: "Hide the panel number" => "Скрытие номера панели"
// paneldynamic.titleLocation: "Panel title alignment" => "Выравнивание заголовков панелей"
// paneldynamic.descriptionLocation: "Panel description alignment" => "Выравнивание описания панели"
// paneldynamic.templateQuestionTitleLocation: "Question title alignment" => "Выравнивание заголовка вопроса"
// paneldynamic.templateErrorLocation: "Error message alignment" => "Выравнивание сообщений об ошибках"
// paneldynamic.newPanelPosition: "New panel location" => "Новое расположение панели"
// paneldynamic.keyName: "Prevent duplicate responses in the following question" => "Предотвращение дублирования ответов в следующем вопросе"
// question.name: "Question name" => "Название вопроса"
// question.title: "Question title" => "Заголовок вопроса"
// question.description: "Question description" => "Описание вопроса"
// question.visibleIf: "Make the question visible if" => "Сделайте вопрос видимым, если"
// question.requiredIf: "Make the question required if" => "Сделайте вопрос обязательным, если"
// question.state: "Question box collapse state" => "Состояние сворачивания окна вопроса"
// question.hideNumber: "Hide the question number" => "Скрыть номер вопроса"
// question.titleLocation: "Question title alignment" => "Выравнивание заголовка вопроса"
// question.descriptionLocation: "Question description alignment" => "Выравнивание описания вопроса"
// question.errorLocation: "Error message alignment" => "Выравнивание сообщений об ошибках"
// question.indent: "Increase the inner indent" => "Увеличьте внутренний отступ"
// question.width: "Inline question width" => "Ширина встроенного вопроса"
// question.minWidth: "Minimum question width" => "Минимальная ширина вопроса"
// question.maxWidth: "Maximum question width" => "Максимальная ширина вопроса"
// question.textUpdateMode: "Update input field value" => "Обновление значения поля ввода"
// signaturepad.allowClear: "Show the Clear button within signature area" => "Отображение кнопки «Очистить» в области подписи"
// signaturepad.penColor: "Stroke color" => "Цвет обводки"
// comment.rows: "Input field height (in lines)" => "Высота поля ввода (в строках)"
// expression.name: "Expression name" => "Имя выражения"
// expression.title: "Expression title" => "Заголовок выражения"
// expression.description: "Expression description" => "Описание выражения"
// expression.expression: "Expression" => "Выражение"
// trigger.expression: "Expression" => "Выражение"
// calculatedvalue.expression: "Expression" => "Выражение"
// survey.description: "Survey description" => "Описание опроса"
// page.name: "Page name" => "Название страницы"
// page.description: "Page description" => "Описание страницы"
// page.visibleIf: "Make the page visible if" => "Сделайте страницу видимой, если"
// page.requiredIf: "Make the page required if" => "Сделайте страницу обязательной, если"
// page.questionOrder: "Question order on the page" => "Порядок вопросов на странице"
// matrixdropdowncolumn.name: "Column name" => "Имя столбца"
// matrixdropdowncolumn.title: "Column title" => "Заголовок столбца"
// matrixdropdowncolumn.isUnique: "Prevent duplicate responses" => "Предотвращение дублирования ответов"
// matrixdropdowncolumn.width: "Column width" => "Ширина столбца"
// matrixdropdowncolumn.minWidth: "Minimum column width" => "Минимальная ширина столбца"
// matrixdropdowncolumn.rows: "Input field height (in lines)" => "Высота поля ввода (в строках)"
// matrixdropdowncolumn.visibleIf: "Make the column visible if" => "Сделайте столбец видимым, если"
// matrixdropdowncolumn.requiredIf: "Make the column required if" => "Сделайте столбец обязательным, если"
// matrixdropdowncolumn.showInMultipleColumns: "Each option in a separate column" => "Каждый вариант в отдельной колонке"
// multipletextitem.name: "Name" => "Имя"
// multipletextitem.title: "Title" => "Титул"
// pe.rateDescriptionLocation: "Label alignment" => "Выравнивание меток"
// pe.cellErrorLocation: "Cell error message alignment" => "Выравнивание сообщений об ошибках ячеек"
// pe.listIsEmpty@columns: "You don't have any columns yet" => "У вас еще нет столбцов"
// pe.listIsEmpty@rows: "You don't have any rows yet" => "У вас еще нет строк"
// pe.listIsEmpty@validators: "You don't have any validation rules yet" => "У вас еще нет правил валидации"
// pe.listIsEmpty@calculatedValues: "You don't have any custom variables yet" => "У вас еще нет пользовательских переменных"
// pe.listIsEmpty@triggers: "You don't have any triggers yet" => "У вас еще нет триггеров"
// pe.listIsEmpty@navigateToUrlOnCondition: "You don't have any links yet" => "У вас еще нет ссылок"
// pe.addNew@columns: "Add new column" => "Добавить новый столбец"
// pe.addNew@rows: "Add new row" => "Добавить новую строку"
// pe.addNew@validators: "Add new rule" => "Добавить новое правило"
// pe.addNew@calculatedValues: "Add new variable" => "Добавить новую переменную"
// pe.addNew@triggers: "Add new trigger" => "Добавить новый триггер"
// pe.addNew@navigateToUrlOnCondition: "Add new URL" => "Добавить новый URL-адрес"
// choicesbyurl.url: "Web service's URL" => "URL-адрес веб-службы"
// pe.progressBarShowPageTitles: "Display page titles in progress bar" => "Отображение заголовков страниц в индикаторе выполнения"
// pe.progressBarShowPageNumbers: "Display page numbers in progress bar" => "Отображение номеров страниц в индикаторе выполнения"
// itemvalue.visibleIf: "Make the option visible if" => "Сделайте опцию видимой, если"
// itemvalue.enableIf: "Make the option selectable if" => "Сделайте опцию выбираемой, если"
// panel.layout: "Panel Layout" => "Компоновка панелей"
// tabs.questionSettings: "Question Settings" => "Настройки вопроса"
// pe.url_placeholder: "Ex.: https://api.example.com/books" => "Пример: https://api.example.com/books"
// pe.path_placeholder: "Ex.: categories.fiction" => "Пример: categories.fiction"
// pe.questionStartIndex_placeholder: "Ex.: a)" => "Пример: а)"
// pe.width_placeholder: "Ex.: 6in" => "Пример: 6 дюймов"
// pe.minWidth_placeholder: "Ex.: 600px" => "Пример: 600px"
// pe.maxWidth_placeholder: "Ex.: 50%" => "Пример: 50%"
// pv.selected: "Selected" => "Выбранный"
// pv.unselected: "Unselected" => "Невыбранных"
// pv.center: "Center" => "Центр"
// pv.middle: "Middle" => "Середина"
// pv.next: "Next" => "Следующий"
// pv.last: "Last" => "Последний"
// clearIfInvisible.none: "Never" => "Никогда"
// questionsOnPageMode.standard: "Original structure" => "Оригинальная структура"
// questionsOnPageMode.singlePage: "Show all questions on one page" => "Показать все вопросы на одной странице"
// questionsOnPageMode.questionPerPage: "Show single question per page" => "Показывать один вопрос на странице"
// pv.auto: "Auto" => "Авто"
// panelsState.firstExpanded: "First expanded" => "Первый расширенный"
// rateColorMode.scale: "Scale" => "Шкала"
// scaleColorMode.monochrome: "Monochrome" => "Монохромный"
// scaleColorMode.colored: "Colored" => "Цветной"
// state.default: "Locked" => "Запертый"
// showQuestionNumbers.default: "Auto-numbering" => "Автоматическая нумерация"
// showQuestionNumbers.on: "Auto-numbering" => "Автоматическая нумерация"
// showQuestionNumbers.onPage: "Reset on each page" => "Сброс на каждой странице"
// showQuestionNumbers.onpanel: "Reset on each panel" => "Сброс на каждой панели"
// showQuestionNumbers.onPanel: "Reset on each panel" => "Сброс на каждой панели"
// showQuestionNumbers.onSurvey: "Continue across the survey" => "Продолжить опрос"
// showQuestionNumbers.off: "No numbering" => "Без нумерации"
// descriptionLocation.underTitle: "Under the question title" => "Под заголовком вопроса"
// descriptionLocation.underInput: "Under the input field" => "Под полем ввода"
// selectToRankAreasLayout.horizontal: "Next to choices" => "Рядом с вариантами выбора"
// selectToRankAreasLayout.vertical: "Above choices" => "Вышеуказанные варианты"
// displayStyle.decimal: "Decimal" => "Десятичный"
// displayStyle.currency: "Currency" => "Валюта"
// displayStyle.percent: "Percentage" => "Процент"
// displayStyle.date: "Date" => "Дата"
// totalDisplayStyle.decimal: "Decimal" => "Десятичный"
// totalDisplayStyle.currency: "Currency" => "Валюта"
// totalDisplayStyle.percent: "Percentage" => "Процент"
// totalDisplayStyle.date: "Date" => "Дата"
// rowOrder.initial: "Original" => "Исходный текст"
// questionOrder.initial: "Original" => "Исходный текст"
// showProgressBar.aboveheader: "Above the header" => "Над заголовком"
// showProgressBar.belowheader: "Below the header" => "Под заголовком"
// pv.sum: "Sum" => "Сумма"
// pv.count: "Count" => "Считать"
// pv.min: "Min" => "Мин"
// pv.max: "Max" => "Макс"
// pv.avg: "Avg" => "Средняя"
// searchMode.contains: "Contains" => "Содержит"
// searchMode.startsWith: "Starts with" => "Начинается с"
// panel.name: "A panel ID that is not visible to respondents." => "Идентификатор панели, который не виден респондентам."
// panel.description: "Type a panel subtitle." => "Введите субтитры панели."
// panel.visibleIf: "Use the magic wand icon to set a conditional rule that determines panel visibility." => "Используйте значок волшебной палочки, чтобы задать условное правило, определяющее видимость панели."
// panel.enableIf: "Use the magic wand icon to set a conditional rule that disables the read-only mode for the panel." => "Используйте значок волшебной палочки, чтобы задать условное правило, которое отключает режим только для чтения для панели."
// panel.requiredIf: "Use the magic wand icon to set a conditional rule that prevents survey submission unless at least one nested question has an answer." => "Используйте значок волшебной палочки, чтобы задать условное правило, которое запрещает отправку опроса, если хотя бы один вложенный вопрос не содержит ответа."
// panel.questionTitleLocation: "Applies to all questions within this panel. If you want to override this setting, define title alignment rules for individual questions. The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Top\" by default)." => "Применяется ко всем вопросам в этой панели. Если вы хотите переопределить этот параметр, определите правила выравнивания заголовков для отдельных вопросов. Опция «Наследовать» применяет настройку на уровне страницы (если задано) или на уровне опроса («Сверху» по умолчанию)."
// panel.questionErrorLocation: "Sets the location of an error message in relation to all questions within the panel. The \"Inherit\" option applies the page-level (if set) or survey-level setting." => "Задает расположение сообщения об ошибке по отношению ко всем вопросам на панели. Опция «Наследовать» применяет настройку на уровне страницы (если задано) или на уровне опроса."
// panel.questionOrder: "Keeps the original order of questions or randomizes them. The \"Inherit\" option applies the page-level (if set) or survey-level setting." => "Сохраняет исходный порядок вопросов или рандомизирует их. Опция «Наследовать» применяет настройку на уровне страницы (если задано) или на уровне опроса."
// panel.page: "Repositions the panel to the end of a selected page." => "Перемещает панель в конец выбранной страницы."
// panel.innerIndent: "Adds space or margin between the panel content and the left border of the panel box." => "Добавляет пространство или поле между содержимым панели и левой границей рамки панели."
// panel.startWithNewLine: "Unselect to display the panel in one line with the previous question or panel. The setting doesn't apply if the panel is the first element in your form." => "Снимите флажок, чтобы отобразить панель в одной строке с предыдущим вопросом или панелью. Этот параметр не применяется, если панель является первым элементом формы."
// panel.state: "Choose from: \"Expanded\" - the panel is displayed in full and can be collapsed; \"Collapsed\" - the panel displays only the title and description and can be expanded; \"Locked\" - the panel is displayed in full and cannot be collapsed." => "Выберите из: «Развернутая» - панель отображается полностью и может быть свернута; «Свернутая» - панель отображает только заголовок и описание и может быть развернута; «Заблокировано» - панель отображается полностью и не может быть свернута."
// panel.width: "Sets the width of the panel in proportion to other survey elements in the same line. Accepts CSS values (px, %, in, pt, etc.)." => "Устанавливает ширину панели пропорционально другим элементам съемки в той же линии. Принимает значения CSS (px, %, in, pt и т. д.)."
// paneldynamic.name: "A panel ID that is not visible to respondents." => "Идентификатор панели, который не виден респондентам."
// paneldynamic.description: "Type a panel subtitle." => "Введите субтитры панели."
// paneldynamic.visibleIf: "Use the magic wand icon to set a conditional rule that determines panel visibility." => "Используйте значок волшебной палочки, чтобы задать условное правило, определяющее видимость панели."
// paneldynamic.enableIf: "Use the magic wand icon to set a conditional rule that disables the read-only mode for the panel." => "Используйте значок волшебной палочки, чтобы задать условное правило, которое отключает режим только для чтения для панели."
// paneldynamic.requiredIf: "Use the magic wand icon to set a conditional rule that prevents survey submission unless at least one nested question has an answer." => "Используйте значок волшебной палочки, чтобы задать условное правило, которое запрещает отправку опроса, если хотя бы один вложенный вопрос не содержит ответа."
// paneldynamic.templateQuestionTitleLocation: "Applies to all questions within this panel. If you want to override this setting, define title alignment rules for individual questions. The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Top\" by default)." => "Применяется ко всем вопросам в этой панели. Если вы хотите переопределить этот параметр, определите правила выравнивания заголовков для отдельных вопросов. Опция «Наследовать» применяет настройку на уровне страницы (если задано) или на уровне опроса («Сверху» по умолчанию)."
// paneldynamic.templateErrorLocation: "Sets the location of an error message in relation to a question with invalid input. Choose between: \"Top\" - an error text is placed at the top of the question box; \"Bottom\" - an error text is placed at the bottom of the question box. The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Top\" by default)." => "Задает расположение сообщения об ошибке по отношению к вопросу с недопустимыми входными данными. Выберите между: «Сверху» - текст ошибки размещается в верхней части поля вопроса; «Внизу» - текст ошибки размещается в нижней части окна вопроса. Опция «Наследовать» применяет настройку на уровне страницы (если задано) или на уровне опроса («Сверху» по умолчанию)."
// paneldynamic.errorLocation: "Sets the location of an error message in relation to all questions within the panel. The \"Inherit\" option applies the page-level (if set) or survey-level setting." => "Задает расположение сообщения об ошибке по отношению ко всем вопросам на панели. Опция «Наследовать» применяет настройку на уровне страницы (если задано) или на уровне опроса."
// paneldynamic.page: "Repositions the panel to the end of a selected page." => "Перемещает панель в конец выбранной страницы."
// paneldynamic.innerIndent: "Adds space or margin between the panel content and the left border of the panel box." => "Добавляет пространство или поле между содержимым панели и левой границей рамки панели."
// paneldynamic.startWithNewLine: "Unselect to display the panel in one line with the previous question or panel. The setting doesn't apply if the panel is the first element in your form." => "Снимите флажок, чтобы отобразить панель в одной строке с предыдущим вопросом или панелью. Этот параметр не применяется, если панель является первым элементом формы."
// paneldynamic.state: "Choose from: \"Expanded\" - the panel is displayed in full and can be collapsed; \"Collapsed\" - the panel displays only the title and description and can be expanded; \"Locked\" - the panel is displayed in full and cannot be collapsed." => "Выберите из: «Развернутая» - панель отображается полностью и может быть свернута; «Свернутая» - панель отображает только заголовок и описание и может быть развернута; «Заблокировано» - панель отображается полностью и не может быть свернута."
// paneldynamic.width: "Sets the width of the panel in proportion to other survey elements in the same line. Accepts CSS values (px, %, in, pt, etc.)." => "Устанавливает ширину панели пропорционально другим элементам съемки в той же линии. Принимает значения CSS (px, %, in, pt и т. д.)."
// paneldynamic.templateTitle: "Type in a template for dynamic panel titles. Use {panelIndex} for the panel's general position and {visiblePanelIndex} for its order among visible panels. Insert these placeholders into the pattern to add automatic numbering." => "Введите шаблон для динамических заголовков панелей. Используйте {panelIndex} для общего положения панели и {visiblePanelIndex} для ее порядка среди видимых панелей. Вставьте эти заполнители в шаблон, чтобы добавить автоматическую нумерацию."
// paneldynamic.templateTabTitle: "Type in a template for tab titles. Use {panelIndex} for a panel's general position and {visiblePanelIndex} for its order among visible panels. Insert these placeholders into the pattern to add automatic numbering." => "Введите шаблон для заголовков вкладок. Используйте {panelIndex} для общего положения панели и {visiblePanelIndex} для ее порядка среди видимых панелей. Вставьте эти заполнители в шаблон, чтобы добавить автоматическую нумерацию."
// paneldynamic.templateVisibleIf: "This setting allows you to control the visibility of individual panels within the dynamic panel. Use the `{panel}` placeholder to reference the current panel in your expression." => "Этот параметр позволяет управлять видимостью отдельных панелей внутри динамической панели. Используйте заполнитель '{panel}' для ссылки на текущую панель в выражении."
// paneldynamic.titleLocation: "This setting is automatically inherited by all questions within this panel. If you want to override this setting, define title alignment rules for individual questions. The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Top\" by default)." => "Этот параметр автоматически наследуется всеми вопросами на этой панели. Если вы хотите переопределить этот параметр, определите правила выравнивания заголовков для отдельных вопросов. Опция «Наследовать» применяет настройку на уровне страницы (если задано) или на уровне опроса («Сверху» по умолчанию)."
// paneldynamic.descriptionLocation: "The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Under the panel title\" by default)." => "Опция «Наследовать» применяет настройку на уровне страницы (если задано) или на уровне опроса («Под заголовком панели» по умолчанию)."
// paneldynamic.newPanelPosition: "Defines the position of a newly added panel. By default, new panels are added to the end. Select \"Next\" to insert a new panel after the current one." => "Определяет положение вновь добавляемой панели. По умолчанию новые панели добавляются в конец. Выберите «Далее», чтобы вставить новую панель после текущей."
// paneldynamic.copyDefaultValueFromLastEntry: "Duplicates answers from the last panel and assigns them to the next added dynamic panel." => "Дублирует ответы с последней панели и назначает их следующей добавленной динамической панели."
// paneldynamic.keyName: "Reference a question name to require a user to provide a unique response for this question in each panel." => "Укажите имя вопроса, чтобы пользователь мог предоставить уникальный ответ на этот вопрос на каждой панели."
// pehelp.defaultValueExpression: "This setting allows you to assign a default answer value based on an expression. The expression can include basic calculations - `{q1_id} + {q2_id}`, Boolean expressions, such as `{age} > 60`, and functions: `iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, etc. The value determined by this expression serves as the initial default value that can be overridden by a respondent's manual input." => "Этот параметр позволяет назначить значение ответа по умолчанию на основе выражения. Выражение может включать в себя базовые вычисления - '{q1_id} + {q2_id}', логические выражения, такие как '{age} > 60', и функции: 'iif()', 'today()', 'age()', 'min()', 'max()', 'avg()' и т.д. Значение, определяемое этим выражением, служит начальным значением по умолчанию, которое может быть переопределено ручным вводом респондентом."
// pehelp.resetValueIf: "Use the magic wand icon to set a conditional rule that determines when a respondent's input is reset to the value based on the \"Default value expression\" or \"Set value expression\" or to the \"Default answer\" value (if either is set)." => "Используйте значок волшебной палочки, чтобы задать условное правило, определяющее, когда входные данные респондента сбрасываются до значения, основанного на «Выражении значения по умолчанию» или «Выражении заданного значения» или на значении «Ответ по умолчанию» (если оно задано)."
// pehelp.setValueIf: "Use the magic wand icon to set a conditional rule that determines when to run the \"Set value expression\" and dynamically assign the resulting value as a response." => "Используйте значок волшебной палочки, чтобы задать условное правило, которое определяет, когда запускать выражение «Задать значение» и динамически назначать полученное значение в качестве ответа."
// pehelp.setValueExpression: "Specify an expression that defines the value to be set when the conditions in the \"Set value if\" rule are met. The expression can include basic calculations - `{q1_id} + {q2_id}`, Boolean expressions, such as `{age} > 60`, and functions: `iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, etc. The value determined by this expression can be overridden by a respondent's manual input." => "Укажите выражение, определяющее значение, которое будет установлено при выполнении условий правила \"Задать значение если\". Выражение может включать в себя базовые вычисления - '{q1_id} + {q2_id}', логические выражения, такие как '{age} > 60', и функции: 'iif()', 'today()', 'age()', 'min()', 'max()', 'avg()' и т.д. Значение, определенное этим выражением, может быть переопределено ручным вводом респондента."
// question.name: "A question ID that is not visible to respondents." => "Идентификатор вопроса, который не виден респондентам."
// question.description: "Type a question subtitle." => "Введите подзаголовок вопроса."
// question.visibleIf: "Use the magic wand icon to set a conditional rule that determines question visibility." => "Используйте значок волшебной палочки, чтобы задать условное правило, определяющее видимость вопроса."
// question.enableIf: "Use the magic wand icon to set a conditional rule that disables the read-only mode for the question." => "Используйте значок волшебной палочки, чтобы задать условное правило, которое отключает режим только для чтения для вопроса."
// question.requiredIf: "Use the magic wand icon to set a conditional rule that prevents survey advancing or submission unless the question received an answer." => "Используйте значок волшебной палочки, чтобы установить условное правило, которое запрещает продвижение или отправку опроса, если на вопрос не получен ответ."
// question.startWithNewLine: "Unselect to display the question in one line with the previous question or panel. The setting doesn't apply if the question is the first element in your form." => "Снимите флажок, чтобы отобразить вопрос в одной строке с предыдущим вопросом или панелью. Настройка не применяется, если вопрос является первым элементом формы."
// question.page: "Repositions the question to the end of a selected page." => "Перемещает вопрос в конец выбранной страницы."
// question.state: "Choose from: \"Expanded\" - the question box is displayed in full and can be collapsed; \"Collapsed\" - the question box displays only the title and description and can be expanded; \"Locked\" - the question box is displayed in full and cannot be collapsed." => "Выберите один из вариантов: «Развернутый» - окно вопроса отображается полностью и может быть свернуто; «Свернутый» - поле вопроса отображает только заголовок и описание и может быть развернуто; «Заблокировано» - поле вопроса отображается полностью и не может быть свернуто."
// question.titleLocation: "Overrides title alignment rules defined on a panel, page or survey level. The \"Inherit\" option applies any higher-level settings (if set) or survey-level setting (\"Top\" by default)." => "Переопределяет правила выравнивания заголовков, заданные на уровне панели, страницы или опроса. Опция «Наследовать» применяет любые настройки более высокого уровня (если они установлены) или настройки уровня опроса («Сверху» по умолчанию)."
// question.descriptionLocation: "The \"Inherit\" option applies the survey-level setting (\"Under the question title\" by default)." => "Опция «Наследовать» применяет настройку на уровне опроса (по умолчанию «Под заголовком вопроса»)."
// question.errorLocation: "Sets the location of an error message in relation to the question with invalid input. Choose between: \"Top\" - an error text is placed at the top of the question box; \"Bottom\" - an error text is placed at the bottom of the question box. The \"Inherit\" option applies the survey-level setting (\"Top\" by default)." => "Задает расположение сообщения об ошибке по отношению к вопросу с недопустимыми входными данными. Выберите между: «Сверху» - текст ошибки размещается в верхней части поля вопроса; «Внизу» - текст ошибки размещается в нижней части окна вопроса. Опция «Наследовать» применяет настройку уровня опроса («Сверху» по умолчанию)."
// question.indent: "Adds space or margin between the question content and the left border of the question box." => "Добавляет пробел или поле между содержимым вопроса и левой границей поля вопроса."
// question.width: "Sets the width of the question in proportion to other survey elements in the same line. Accepts CSS values (px, %, in, pt, etc.)." => "Устанавливает ширину вопроса пропорционально другим элементам опроса в той же строке. Принимает значения CSS (px, %, in, pt и т. д.)."
// surveyvalidator.expression: "Use the magic wand icon to set a validation rule for the question." => "Используйте значок волшебной палочки, чтобы задать правило проверки для вопроса."
// question.textUpdateMode: "Choose from: \"On lost focus\" - the value is updated when the input field loses focus; \"While typing\" - the value is updated in real-time, as users are typing. The \"Inherit\" option applies the survey-level setting (\"On lost focus\" by default)." => "Выберите из: \"При потере фокуса\" - значение обновляется при потере фокуса полем ввода; \"Во время набора\" - значение обновляется в режиме реального времени, по мере набора текста пользователями. Опция «Наследовать» применяет настройку на уровне опроса (по умолчанию «При потере фокуса»)."
// question.url: "You can use any web service as a data source for multiple-choice questions. To populate choice values, enter the URL of the service providing the data." => "Вы можете использовать любую веб-службу в качестве источника данных для вопросов с несколькими вариантами ответов. Чтобы заполнить значения выбора, введите URL-адрес службы, предоставляющей данные."
// question.searchMode: "A comparison operation used to filter the drop-down list." => "Операция сравнения, используемая для фильтрации раскрывающегося списка."
// signaturepad.signatureWidth: "Sets the width of the displayed signature area and the resulting image." => "Задает ширину отображаемой области подписи и результирующего изображения."
// signaturepad.signatureHeight: "Sets the height of the displayed signature area and the resulting image." => "Задает высоту отображаемой области подписи и результирующего изображения."
// signaturepad.signatureAutoScaleEnabled: "Select if you want the signature area to fill all available space within the question box while maintaining the default 3:2 aspect ratio. When custom width and height values are set, the setting will keep the aspect ratio of these dimensions." => "Выберите, хотите ли вы, чтобы область подписи занимала все доступное пространство в поле вопроса, сохраняя при этом соотношение сторон по умолчанию 3:2. Если заданы пользовательские значения ширины и высоты, при этом будет сохранено соотношение сторон этих размеров."
// file.imageHeight: "Adjusts the height of the image in the survey results." => "Настройка высоты изображения в результатах съемки."
// file.imageWidth: "Adjusts the width of the image in the survey results." => "Настройка ширины изображения в результатах съемки."
// imagepicker.imageHeight: "Overrides the minimum and maximum height values." => "Переопределяет минимальное и максимальное значения высоты."
// imagepicker.imageWidth: "Overrides the minimum and maximum width values." => "Переопределяет минимальное и максимальное значения ширины."
// imagepicker.choices: "\"Value\" serves as an item ID used in conditional rules; \"Text\" is displayed to respondents." => "«Значение» служит идентификатором элемента, используемым в условных правилах; Респондентам отображается «Текст»."
// text.size: "This setting only resizes the input field and doesn't affect the width of the question box. To limit the accepted input length, go to <b>Validation → Maximum character limit</b>." => "Этот параметр изменяет только размер поля ввода и не влияет на ширину поля вопроса. Чтобы ограничить допустимую длину ввода, перейдите в <b>раздел Проверка → Ограничение максимального количества символов</b>."
// comment.rows: "Sets the number of displayed lines in the input field. If the input takes up more lines, the scroll bar will appear." => "Задает количество отображаемых строк в поле ввода. Если ввод занимает больше строк, появится полоса прокрутки."
// survey.mode: "Choose between: \"Editable\" - enables respondents to fill out your survey; \"Read-only\" - disables form editing." => "Выберите один из следующих вариантов: «Редактируемый» - позволяет респондентам заполнять Ваш опрос; \"Только для чтения\" - отключает редактирование формы."
// matrixdropdowncolumn.name: "A column ID that is not visible to respondents." => "Идентификатор столбца, который не виден респондентам."
// matrixdropdowncolumn.isUnique: "When enabled for a column, a respondent is required to provide a unique response for each question within this column." => "Если этот параметр включен для столбца, респондент должен предоставить уникальный ответ на каждый вопрос в этом столбце."
// matrixdropdowncolumn.rows: "Sets the number of displayed lines in the input field. If the input takes up more lines, the scroll bar will appear." => "Задает количество отображаемых строк в поле ввода. Если ввод занимает больше строк, появится полоса прокрутки."
// matrixdropdowncolumn.visibleIf: "Use the magic wand icon to set a conditional rule that determines column visibility." => "Используйте значок волшебной палочки, чтобы задать условное правило, определяющее видимость столбцов."
// matrixdropdowncolumn.enableIf: "Use the magic wand icon to set a conditional rule that disables the read-only mode for the column." => "Используйте значок волшебной палочки, чтобы задать условное правило, которое отключает режим только для чтения для столбца."
// matrixdropdowncolumn.requiredIf: "Use the magic wand icon to set a conditional rule that prevents survey submission unless at least one nested question has an answer." => "Используйте значок волшебной палочки, чтобы задать условное правило, которое запрещает отправку опроса, если хотя бы один вложенный вопрос не содержит ответа."
// matrixdropdowncolumn.showInMultipleColumns: "When selected, creates an individual column for each choice option." => "При выборе этого параметра создается отдельный столбец для каждого варианта выбора."
// pehelp.widthMode: "Choose from: \"Static\" - sets a fixed width; \"Responsive\" - makes the survey occupy the full width of the screen; \"Auto\" - applies either of the two depending on the question types used." => "Выберите один из: \"Статический\" - задает фиксированную ширину; «Отзывчивый» - заставляет опрос занимать всю ширину экрана; \"Авто\" - применяет любой из двух вариантов в зависимости от используемых типов вопросов."
// pehelp.logo: "Paste an image link (no size limits) or click the folder icon to browse a file from your computer (up to 64KB)." => "Вставьте ссылку на изображение (без ограничений по размеру) или нажмите значок папки, чтобы просмотреть файл с компьютера (до 64 КБ)."
// pehelp.logoWidth: "Sets a logo width in CSS units (px, %, in, pt, etc.)." => "Задает ширину логотипа в единицах CSS (px, %, in, pt и т. д.)."
// pehelp.logoHeight: "Sets a logo height in CSS units (px, %, in, pt, etc.)." => "Задает высоту логотипа в единицах CSS (px, %, in, pt и т. д.)."
// pehelp.logoFit: "Choose from: \"None\" - image maintains its original size; \"Contain\" - image is resized to fit while maintaining its aspect ratio; \"Cover\" - image fills the entire box while maintaining its aspect ratio; \"Fill\" - image is stretched to fill the box without maintaining its aspect ratio." => "Выберите один из следующих вариантов: \"Нет\" - изображение сохраняет свой первоначальный размер; \"Contain\" - размер изображения изменяется по размеру с сохранением его пропорций; «Обложка» - изображение заполняет всю коробку, сохраняя при этом соотношение сторон; \"Заливка\" - изображение растягивается для заполнения поля без сохранения его пропорций."
// pehelp.showNavigationButtons: "Sets the visibility and location of navigation buttons on a page." => "Задает видимость и расположение кнопок навигации на странице."
// pehelp.showProgressBar: "Sets the visibility and location of a progress bar. The \"Auto\" value displays the progress bar above or below the survey header." => "Задает видимость и расположение индикатора выполнения. Значение «Авто» отображает индикатор выполнения над или под заголовком опроса."
// pehelp.showPreviewBeforeComplete: "Enable the preview page with all or answered questions only." => "Включите страницу предварительного просмотра, на которой отображаются все вопросы или только ответы на них."
// pehelp.questionTitleLocation: "Applies to all questions within the survey. This setting can be overridden by title alignment rules at lower levels: panel, page, or question. A lower-level setting will override those on a higher level." => "Применяется ко всем вопросам в опросе. Этот параметр может быть переопределен правилами выравнивания заголовков на более низких уровнях: панели, странице или вопросе. Настройки более низкого уровня будут переопределять настройки на более высоком уровне."
// pehelp.requiredMark: "A symbol or a sequence of symbols indicating that an answer is required." => "Символ или последовательность символов, указывающие на то, что требуется ответ."
// pehelp.questionStartIndex: "Enter a number or letter with which you want to start numbering." => "Введите цифру или букву, с которой вы хотите начать нумерацию."
// pehelp.questionErrorLocation: "Sets the location of an error message in relation to the question with invalid input. Choose between: \"Top\" - an error text is placed at the top of the question box; \"Bottom\" - an error text is placed at the bottom of the question box." => "Задает расположение сообщения об ошибке по отношению к вопросу с недопустимыми входными данными. Выберите между: «Сверху» - текст ошибки размещается в верхней части поля вопроса; «Внизу» - текст ошибки размещается в нижней части окна вопроса."
// pehelp.autoFocusFirstQuestion: "Select if you want the first input field on each page ready for text entry." => "Выберите, если вы хотите, чтобы первое поле ввода на каждой странице было готово для ввода текста."
// pehelp.questionOrder: "Keeps the original order of questions or randomizes them. The effect of this setting is only visible in the Preview tab." => "Сохраняет исходный порядок вопросов или рандомизирует их. Эффект этого параметра виден только на вкладке «Предварительный просмотр»."
// pehelp.maxTextLength: "For text entry questions only." => "Только для вопросов с вводом текста."
// pehelp.maxCommentLength: "For question comments only." => "Только для комментариев к вопросам."
// pehelp.autoGrowComment: "Select if you want question comments and Long Text questions to auto-grow in height based on the entered text length." => "Выберите, хотите ли вы, чтобы комментарии к вопросам и вопросы с длинным текстом автоматически увеличивались в высоту в зависимости от введенной длины текста."
// pehelp.allowResizeComment: "For question comments and Long Text questions only." => "Только для комментариев к вопросам и вопросов с длинным текстом."
// pehelp.calculatedValues: "Custom variables serve as intermediate or auxiliary variables used in form calculations. They take respondent inputs as source values. Each custom variable has a unique name and an expression it's based on." => "Пользовательские переменные служат промежуточными или вспомогательными переменными, используемыми в вычислениях формы. Они принимают входные данные респондента в качестве исходных значений. Каждая пользовательская переменная имеет уникальное имя и выражение, на котором она основана."
// pehelp.includeIntoResult: "Select if you wish the calculated value of the expression to be saved along with survey results." => "Выберите, если вы хотите, чтобы вычисленное значение выражения сохранялось вместе с результатами опроса."
// pehelp.triggers: "A trigger is an event or condition that is based on an expression. Once the expression is evaluated to \"true\", a trigger sets off an action. Such an action can optionally have a target question it affects." => "Триггер — это событие или условие, основанное на выражении. После того, как выражение оценивается как \"true\", триггер запускает действие. Такое действие может иметь целевой вопрос, на который оно влияет."
// pehelp.clearInvisibleValues: "Choose whether or not to clear values for questions hidden by conditional logic and when to do it." => "Выберите, нужно ли очищать значения для вопросов, скрытых условной логикой, и когда это делать."
// pehelp.textUpdateMode: "Choose from: \"On lost focus\" - the value is updated when the input field loses focus; \"While typing\" - the value is updated in real-time, as users are typing." => "Выберите из: \"При потере фокуса\" - значение обновляется при потере фокуса полем ввода; \"Во время набора\" - значение обновляется в режиме реального времени, по мере набора текста пользователями."
// pehelp.columns: "The left value serves as a column ID used in conditional rules, the right value is displayed to respondents." => "Левое значение служит идентификатором столбца, используемым в условных правилах, правое значение отображается респондентам."
// pehelp.rows: "The left value serves as a row ID used in conditional rules, the right value is displayed to respondents." => "Левое значение служит идентификатором строки, используемым в условных правилах, правое значение отображается респондентам."
// pehelp.columnMinWidth: "Accepts CSS values (px, %, in, pt, etc.)." => "Принимает значения CSS (px, %, in, pt и т. д.)."
// pehelp.rowTitleWidth: "Accepts CSS values (px, %, in, pt, etc.)." => "Принимает значения CSS (px, %, in, pt и т. д.)."
// pehelp.cellErrorLocation: "Sets the location of an error message in relation to a cell with invalid input. The \"Inherit\" option applies the setting from the \"Error message alignment\" property." => "Задает местоположение сообщения об ошибке по отношению к ячейке с недопустимыми входными данными. Опция «Наследовать» применяет настройку из свойства «Выравнивание сообщений об ошибках»."
// pehelp.keyDuplicationError: "When the \"Prevent duplicate responses\" property is enabled, a respondent attempting to submit a duplicate entry will receive the following error message." => "Если включено свойство «Не допускать дублирования ответов», респондент, пытающийся отправить дублирующуюся запись, получит следующее сообщение об ошибке."
// pehelp.totalExpression: "Allows you to calculate total values based on an expression. The expression can include basic calculations (`{q1_id} + {q2_id}`), Boolean expressions (`{age} > 60`) and functions ('iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, etc.)." => "Позволяет вычислять итоговые значения на основе выражения. Выражение может включать базовые вычисления ('{q1_id} + {q2_id}'), логические выражения ('{age} > 60') и функции ('iif()', 'today()', 'age()', 'min()', 'max()', 'avg()' и т.д.)."
// pehelp.confirmDelete: "Triggers a prompt asking to confirm the row deletion." => "Запускает запрос на подтверждение удаления строки."
// pehelp.copyDefaultValueFromLastEntry: "Duplicates answers from the last row and assigns them to the next added dynamic row." => "Дублирует ответы из последней строки и присваивает их следующей добавленной динамической строке."
// pehelp.description: "Type a subtitle." => "Введите субтитры."
// pehelp.locale: "Choose a language to begin creating your survey. To add a translation, switch to a new language and translate the original text here or in the Translations tab." => "Выберите язык, чтобы начать создание опроса. Чтобы добавить перевод, переключитесь на новый язык и переведите исходный текст здесь или во вкладке «Переводы»."
// pehelp.detailPanelMode: "Sets the location of a details section in relation to a row. Choose from: \"None\" - no expansion is added; \"Under the row\" - a row expansion is placed under each row of the matrix; \"Under the row, display one row expansion only\" - an expansion is displayed under a single row only, the remaining row expansions are collapsed." => "Задает расположение раздела сведений по отношению к строке. Выберите один из вариантов: \"Нет\" - расширение не добавляется; \"Под строкой\" - под каждой строкой матрицы помещается расширение строки; \"Под строкой отображать только одну строку\" - расширение отображается только под одной строкой, остальные расширения строк сворачиваются."
// pehelp.imageFit: "Choose from: \"None\" - image maintains its original size; \"Contain\" - image is resized to fit while maintaining its aspect ratio; \"Cover\" - image fills the entire box while maintaining its aspect ratio; \"Fill\" - image is stretched to fill the box without maintaining its aspect ratio." => "Выберите один из следующих вариантов: \"Нет\" - изображение сохраняет свой первоначальный размер; \"Contain\" - размер изображения изменяется по размеру с сохранением его пропорций; «Обложка» - изображение заполняет всю коробку, сохраняя при этом соотношение сторон; \"Заливка\" - изображение растягивается для заполнения поля без сохранения его пропорций."
// pehelp.autoGrow: "Gradually increases the height of the input field as data is being entered. Overrides the \"Input field height (in lines)\" setting." => "Постепенно увеличивает высоту поля ввода по мере ввода данных. Переопределяет настройку «Высота поля ввода (в строках)»."
// pehelp.allowResize: "The resize handle (or grip) appears in the corner and can be dragged to alter the size of the input field." => "Маркер изменения размера (или ручка) отображается в углу, и его можно перетащить, чтобы изменить размер поля ввода."
// pehelp.timeLimit: "A time interval in seconds after which the survey auto-advances to the Thank You page." => "Интервал времени в секундах, по истечении которого опрос автоматически переходит на страницу благодарности."
// pehelp.timeLimitPerPage: "A time interval in seconds after which the survey auto-advances to the next page." => "Интервал времени в секундах, по истечении которого опрос автоматически переходит на следующую страницу."
// page.timeLimit: "A time interval in seconds after which the survey auto-advances to the next page." => "Интервал времени в секундах, по истечении которого опрос автоматически переходит на следующую страницу."
// page.visibleIf: "Use the magic wand icon to set a conditional rule that determines page visibility." => "Используйте значок волшебной палочки, чтобы задать условное правило, определяющее видимость страницы."
// page.enableIf: "Use the magic wand icon to set a conditional rule that disables the read-only mode for the page." => "Используйте значок волшебной палочки, чтобы задать условное правило, которое отключает режим только для чтения для страницы."
// page.requiredIf: "Use the magic wand icon to set a conditional rule that prevents survey submission unless at least one nested question has an answer." => "Используйте значок волшебной палочки, чтобы задать условное правило, которое запрещает отправку опроса, если хотя бы один вложенный вопрос не содержит ответа."
// page.questionTitleLocation: "Applies to all questions within this page. If you want to override this setting, define title alignment rules for individual questions or panels. The \"Inherit\" option applies the survey-level setting (\"Top\" by default)." => "Относится ко всем вопросам на этой странице. Если вы хотите переопределить этот параметр, задайте правила выравнивания заголовков для отдельных вопросов или панелей. Опция «Наследовать» применяет настройку уровня опроса («Сверху» по умолчанию)."
// page.questionErrorLocation: "Sets the location of an error message in relation to the question with invalid input. Choose between: \"Top\" - an error text is placed at the top of the question box; \"Bottom\" - an error text is placed at the bottom of the question box. The \"Inherit\" option applies the survey-level setting (\"Top\" by default)." => "Задает расположение сообщения об ошибке по отношению к вопросу с недопустимыми входными данными. Выберите между: «Сверху» - текст ошибки размещается в верхней части поля вопроса; «Внизу» - текст ошибки размещается в нижней части окна вопроса. Опция «Наследовать» применяет настройку уровня опроса («Сверху» по умолчанию)."
// page.questionOrder: "Keeps the original order of questions or randomizes them. The \"Inherit\" option applies the survey-level setting (\"Original\" by default). The effect of this setting is only visible in the Preview tab." => "Сохраняет исходный порядок вопросов или рандомизирует их. Опция «Наследовать» применяет настройку уровня опроса («Оригинал» по умолчанию). Эффект этого параметра виден только на вкладке «Предварительный просмотр»."
// page.showNavigationButtons: "Sets the visibility of navigation buttons on the page. The \"Inherit\" option applies the survey-level setting, which defaults to \"Visible\"." => "Задает видимость кнопок навигации на странице. Опция \"Наследовать\" применяет настройку уровня опроса, которая по умолчанию имеет значение \"Видимый\"."
// pehelp.panelsState: "Choose from: \"Locked\" - users cannot expand or collapse panels; \"Collapse all\" - all panels start in a collapsed state; \"Expand all\" - all panels start in an expanded state; \"First expanded\" - only the first panel is initially expanded." => "Выберите один из следующих вариантов: \"Заблокировано\" - пользователи не могут разворачивать или сворачивать панели; \"Свернуть все\" - все панели запускаются в свернутом состоянии; \"Развернуть все\" - все панели запускаются в развернутом состоянии; \"First expanded\" - изначально разворачивается только первая панель."
// pehelp.imageLinkName: "Enter a shared property name within the array of objects that contains the image or video file URLs you want to display in the choice list." => "Введите имя общего свойства в массиве объектов, содержащем URL-адреса изображений или видеофайлов, которые необходимо отобразить в списке вариантов."
// pehelp.choices: "The left value serves as an item ID used in conditional rules, the right value is displayed to respondents." => "Левое значение служит идентификатором элемента, используемым в условных правилах, правое значение отображается респондентам."
// pehelp.title: "Type a user-friendly title to display." => "Введите понятный заголовок для отображения."
// pehelp.waitForUpload: "Ensures that users won't complete the survey until files are uploaded." => "Гарантирует, что пользователи не завершат опрос до тех пор, пока файлы не будут загружены."
// pehelp.minWidth: "Accepts CSS values (px, %, in, pt, etc.)." => "Принимает значения CSS (px, %, in, pt и т. д.)."
// pehelp.maxWidth: "Accepts CSS values (px, %, in, pt, etc.)." => "Принимает значения CSS (px, %, in, pt и т. д.)."
// pehelp.width: "Accepts CSS values (px, %, in, pt, etc.)." => "Принимает значения CSS (px, %, in, pt и т. д.)."
// pehelp.useDisplayValuesInDynamicTexts: "In single- and multiple-selection question types, each choice option has an ID and display value. When selected, this setting shows a display value instead of an ID value in HTML questions and dynamic titles and descriptions of survey elements." => "В вопросах с одним и несколькими вариантами ответов каждый вариант выбора имеет идентификатор и отображаемое значение. Если этот параметр установлен, в HTML-вопросах, а также в динамических заголовках и описаниях элементов опроса отображается отображаемое значение, а не значение идентификатора."
// pehelp.clearIfInvisible: "Choose whether or not to clear question values hidden by conditional logic and when to do it. The \"Inherit\" option applies the survey-level setting (\"Upon survey completion\" by default)." => "Выберите, следует ли очищать значения вопросов, скрытые условной логикой, и когда это делать. Опция «Наследовать» применяет настройку на уровне опроса («По завершении опроса» по умолчанию)."
// pehelp.choicesFromQuestionMode: "Choose from: \"All\" - copies all choice options from the selected question; \"Selected\" - dynamically copies only selected choice options; \"Unselected\" - dynamically copies only unselected choice options. The \"None\" and \"Other\" options are copied by default if enabled in the source question." => "Выбрать из: \"Все\" - копирует все варианты выбора из выбранного вопроса; \"Выбранный\" - динамически копирует только выбранные варианты выбора; \"Невыбранные\" - динамически копирует только невыбранные варианты выбора. Опции «Нет» и «Другое» копируются по умолчанию, если они включены в исходном вопросе."
// pehelp.showOtherItem: "When selected, users can include additional input in a separate comment box." => "Если этот флажок установлен, пользователи могут включить дополнительные данные в отдельное поле комментария."
// pehelp.separateSpecialChoices: "Displays each special choice option (\"None\", \"Other\", \"Select All\") on a new line, even when using a multiple-column layout." => "Отображение каждого варианта специального выбора (\"Нет\", \"Другое\", \"Выбрать все\") в новой строке, даже при использовании макета с несколькими столбцами."
// pehelp.path: "Specify the location within the service dataset where the target array of objects is located. Leave empty if the URL already points to the array." => "Укажите местоположение в наборе данных сервиса, где находится целевой массив объектов. Оставьте пустым, если URL-адрес уже указывает на массив."
// pehelp.titleName: "Enter a uniform property name within the array of objects that contains the values you want to display in the choice list." => "Введите единообразное имя свойства в массиве объектов, содержащем значения, которые требуется отобразить в списке вариантов."
// pehelp.allowEmptyResponse: "Select to allow the service to return an empty response or array." => "Выберите, чтобы разрешить службе возвращать пустой ответ или массив."
// pehelp.choicesVisibleIf: "Use the magic wand icon to set a conditional rule that determines the visibility of all choice options." => "Используйте значок волшебной палочки, чтобы задать условное правило, определяющее видимость всех вариантов выбора."
// pehelp.rateValues: "The left value serves as an item ID used in conditional rules, the right value is displayed to respondents." => "Левое значение служит идентификатором элемента, используемым в условных правилах, правое значение отображается респондентам."
// rating.displayMode: "\"Auto\" selects between the \"Buttons\" and \"Dropdown\" modes based on the available width. When the width is insufficient to display buttons, the question displays a dropdown." => "«Авто» выбирает между режимами «Кнопки» и «Выпадающий список» в зависимости от доступной ширины. Если ширина недостаточна для отображения кнопок, в вопросе отображается раскрывающийся список."
// pehelp.valuePropertyName: "Allows you to connect questions that produce results in different formats. When such questions are linked together using a join identifier, this shared property stores selected question values." => "Позволяет соединять вопросы, дающие результаты, в разных форматах. Когда такие вопросы связаны друг с другом с помощью идентификатора соединения, в этом общем свойстве хранятся выбранные значения вопросов."
// pehelp.searchEnabled: "Select if you want to update the drop-down menu contents to match the search query that a user is typing in the input field." => "Выберите, хотите ли вы обновить содержимое раскрывающегося меню в соответствии с поисковым запросом, который пользователь вводит в поле ввода."
// pehelp.valueTrue: "A value to save in survey results when respondents give a positive answer." => "Значение, сохраняемое в результатах опроса, когда респонденты дают положительный ответ."
// pehelp.valueFalse: "A value to save in survey results when respondents give a negative answer." => "Значение, сохраняемое в результатах опроса, когда респонденты дают отрицательный ответ."
// pehelp.showPreview: "It's not recommended to disable this option as it overrides the Preview image and makes it hard for a user to understand whether the files have been uploaded." => "Не рекомендуется отключать этот параметр, так как он переопределяет изображение предварительного просмотра и затрудняет понимание пользователем, были ли файлы загружены."
// pehelp.needConfirmRemoveFile: "Triggers a prompt asking to confirm the file deletion." => "Запускает запрос на подтверждение удаления файла."
// pehelp.selectToRankEnabled: "Enable to rank only selected choices. Users will drag selected items from the choice list to order them within the ranking area." => "Включите этот параметр, чтобы ранжировать только выбранные варианты. Пользователи будут перетаскивать выбранные элементы из списка вариантов, чтобы упорядочить их в области ранжирования."
// pehelp.dataList: "Enter a list of choices that will be suggested to the respondent during input." => "Введите список вариантов, которые будут предложены респонденту во время ввода."
// pehelp.inputSize: "The setting only resizes the input fields and doesn't affect the width of the question box." => "Этот параметр изменяет только размер полей ввода и не влияет на ширину поля вопроса."
// pehelp.itemTitleWidth: "Sets consistent width for all item labels in pixels" => "Устанавливает одинаковую ширину для всех меток элементов в пикселях"
// pehelp.contentMode: "The \"Auto\" option automatically determines the suitable mode for display - Image, Video, or YouTube - based on the source URL provided." => "Опция \"Авто\" автоматически определяет подходящий режим отображения - Изображение, Видео или YouTube - на основе предоставленного исходного URL-адреса."
// pehelp.altText: "Serves as a substitute when the image cannot be displayed on a user's device and for accessibility purposes." => "Служит заменой, когда изображение не может быть отображено на устройстве пользователя, а также в целях обеспечения доступности."
// pehelp.rateColorMode: "Defines the color of the selected emoji when the Rating icon type is set to \"Smileys\". Choose between: \"Default\" - the selected emoji appears in default survey color; \"Scale\" - the selected emoji inherits color from the rating scale." => "Определяет цвет выбранного эмодзи, если для параметра «Тип значка рейтинга» установлено значение «Смайлики». Выберите между: \"По умолчанию\" - выбранный эмодзи отображается в цвете опроса по умолчанию; «Шкала» - выбранный эмодзи наследует цвет от шкалы оценки."
// expression.name: "An expression ID that is not visible to respondents." => "Идентификатор выражения, который не виден респондентам."
// expression.description: "Type an expression subtitle." => "Введите подзаголовок выражения."
// expression.expression: "An expression can include basic calculations (`{q1_id} + {q2_id}`), conditions (`{age} > 60`), and functions ('iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, etc.)." => "Выражение может включать базовые вычисления ('{q1_id} + {q2_id}'), условия ('{age} > 60') и функции ('iif()', 'today()', 'age()', 'min()', 'max()', 'avg()' и т.д.)."
// pehelp.storeOthersAsComment: "Select to store the \"Other\" option value as a separate property in survey results." => "Выберите, чтобы сохранить значение параметра «Другое» как отдельное свойство в результатах опроса."
// p.swapOrder: "Swap the order of Yes and No" => "Поменяйте местами «Да» и «Нет»"
// p.itemTitleWidth: "Item label width (in px)" => "Ширина метки элемента (в пикселях)"
// p.selectToRankEmptyRankedAreaText: "Text to show if all options are selected" => "Текст, показывающий, если выбраны все параметры"
// p.selectToRankEmptyUnrankedAreaText: "Placeholder text for the ranking area" => "Замещающий текст для области ранжирования"
// pe.autoAdvanceAllowComplete: "Complete the survey automatically" => "Автоматическое заполнение опроса"
// pehelp.autoAdvanceAllowComplete: "Select if you want the survey to complete automatically after a respondent answers all questions." => "Выберите, хотите ли Вы, чтобы опрос завершался автоматически после того, как респондент ответит на все вопросы."
// masksettings.saveMaskedValue: "Save masked value in survey results" => "Сохранение замаскированного значения в результатах опроса"
// patternmask.pattern: "Value pattern" => "Шаблон значения"
// datetimemask.min: "Minimum value" => "Минимальное значение"
// datetimemask.max: "Maximum value" => "Максимальное значение"
// numericmask.allowNegativeValues: "Allow negative values" => "Разрешить отрицательные значения"
// numericmask.thousandsSeparator: "Thousands separator" => "Разделитель тысяч"
// numericmask.decimalSeparator: "Decimal separator" => "Десятичный разделитель"
// numericmask.precision: "Value precision" => "Точность значений"
// numericmask.min: "Minimum value" => "Минимальное значение"
// numericmask.max: "Maximum value" => "Максимальное значение"
// currencymask.prefix: "Currency prefix" => "Префикс валюты"
// currencymask.suffix: "Currency suffix" => "Суффикс валюты"
// pe.maskType: "Input mask type" => "Тип входной маски"
// maskTypes.patternmask: "Pattern" => "Рисунок"
// maskTypes.numericmask: "Numeric" => "Числовой"
// maskTypes.datetimemask: "Date and Time" => "Дата и время"
// maskTypes.currencymask: "Currency" => "Валюта"
// tabs.mask: "Input Mask Settings" => "Настройки входной маски"
// pe.pattern_placeholder: "Ex.: +1(999)-999-99-99" => "Пример: +1(999)-999-99-99"
// pe.datetimepattern_placeholder: "Ex.: mm/dd/yyyy" => "Пример: мм/дд/гггг"
// pe.currencyprefix_placeholder: "Ex.: $" => "Пример: $"
// pe.currencysuffix_placeholder: "Ex.: USD" => "Пример: USD"
// pv.textWrapEnabled: "Wrap choices" => "Варианты обертывания"
// question.textWrapEnabled: "Long texts in choice options will automatically generate line breaks to fit within the drop-down menu. Unselect if you want the texts to clip." => "Длинные тексты в параметрах выбора будут автоматически создавать разрывы строк в соответствии с раскрывающимся меню. Снимите флажок, если вы хотите, чтобы тексты были обрезаны."
// masksettings.saveMaskedValue: "Select if you want to store the question value with an applied mask in survey results." => "Выберите, хотите ли вы сохранить значение вопроса с примененной маской в результатах опроса."
// patternmask.pattern: "The pattern can contain string literals and the following placeholders: `9` - for a digit; `a` - for an upper- or lower-case letter; `#` - for a digit or an upper- or lower-case letter. Use backslash `\\` to escape a character." => "Шаблон может содержать строковые литералы и следующие заполнители: '9' - для цифры; 'a' - для прописной или строчной буквы; '#' - для цифры или прописной или строчной буквы. Используйте обратную косую черту '\\' для экранирования символа."
// datetimemask.pattern: "The pattern can contain separator characters and the following placeholders: `m` - for month number; `mm` - for month number, with leading zero for single-digit values; `d` - for day of the month; `dd` - for day of the month, with leading zero for single-digit values; `yy` - for the last two digits of the year; `yyyy` - for a four-digit year." => "Шаблон может содержать символы-разделители и следующие заполнители: 'm' - номер месяца; 'mm' - номер месяца, с нулем в начале для однозначных значений; 'd' - день месяца; 'dd' - день месяца, с нулевым началом для однозначных значений; 'yy' - для последних двух цифр года; 'yyyy' - для четырехзначного года."
// numericmask.decimalSeparator: "A symbol used to separate the fractional part from the integer part of a displayed number." => "Символ, используемый для отделения дробной части от целой части отображаемого числа."
// numericmask.thousandsSeparator: "A symbol used to separate the digits of a large number into groups of three." => "Символ, используемый для разделения цифр большого числа на группы по три."
// numericmask.precision: "Limits how many digits to retain after the decimal point for a displayed number." => "Ограничивает количество цифр, сохраняемых после десятичной запятой для отображаемого числа."
// currencymask.prefix: "One or several symbols to be displayed before the value." => "Один или несколько символов, которые будут отображаться перед значением."
// currencymask.suffix: "One or several symbols to be displayed after the value." => "Один или несколько символов, которые будут отображаться после значения."
// ed.translationSource: "Source: " => "Источник: "
// ed.translationTarget: "Target: " => "Цель: "
// ed.pagePlaceHolder: "The page is empty. Drag an element from the toolbox or click the button below." => "Страница пуста. Перетащите элемент с панели инструментов или нажмите кнопку ниже."
// maskTypes.none: "None" => "Никакой"
// itemvalue@rows.visibleIf: "Make the row visible if" => "Сделайте строку видимой, если"
// itemvalue@rows.enableIf: "Make the row editable if" => "Сделайте строку редактируемой, если"
// signaturepad.placeholderReadOnly: "Placeholder text in read-only or preview mode" => "Замещающий текст в режиме только для чтения или предварительного просмотра"
// pe.textWrapEnabled: "Wrap choices" => "Варианты обертывания"
// image.contentMode: "The \"Auto\" option automatically determines the suitable mode for display - Image, Video, or YouTube - based on the source URL provided." => "Опция \"Авто\" автоматически определяет подходящий режим отображения - Изображение, Видео или YouTube - на основе предоставленного исходного URL-адреса."
// imagepicker.contentMode: "Choose between \"Image\" and \"Video\" to set the content mode of the media selector. If \"Image\" is selected, ensure that all options provided are image files in the following formats: JPEG, GIF, PNG, APNG, SVG, BMP, ICO. Similarly, if \"Video\" is selected, ensure that all options are direct links to video files in the following formats: MP4, MOV, WMV, FLV, AVI, MKV. Please note that YouTube links are not supported for video options." => "Выберите между «Изображением» и «Видео», чтобы установить режим содержимого селектора мультимедиа. Если выбран параметр «Изображение», убедитесь, что все предоставленные параметры представляют собой файлы изображений в следующих форматах: JPEG, GIF, PNG, APNG, SVG, BMP, ICO. Точно так же, если выбран «Видео», убедитесь, что все параметры являются прямыми ссылками на видеофайлы в следующих форматах: MP4, MOV, WMV, FLV, AVI, MKV. Обратите внимание, что ссылки на YouTube не поддерживаются для параметров видео."
// ed.selectFile: "Select a file" => "Выберите файл"
// ed.removeFile: "Remove the file" => "Удалите файл"
// pe.searchMode: "Search Mode" => "Режим поиска"
// ed.surveyPlaceHolderMobile: "Click the \"Add Question\" button below to start creating your form." => "Нажмите кнопку «Добавить вопрос» ниже, чтобы начать создание формы."
// ed.pagePlaceHolderMobile: "Click the \"Add Question\" button below to add a new element to the page." => "Нажмите кнопку «Добавить вопрос» ниже, чтобы добавить новый элемент на страницу."
// ed.panelPlaceHolderMobile: "Click the \"Add Question\" button below to add a new element to the panel." => "Нажмите кнопку «Добавить вопрос» ниже, чтобы добавить новый элемент на панель."
// ed.imagePlaceHolderMobile: "Click the button below and choose an image to upload" => "Нажмите кнопку ниже и выберите изображение для загрузки"
// coloralpha.opacity: "Opacity" => "Непрозрачность"
// font.family: "Font family" => "Семейство шрифтов"
// font.color: "Color" => "Цвет"
// font.placeholderColor: "Placeholder color" => "Цвет заполнителя"
// font.size: "Size" => "Размер"
// theme.themeName: "Theme" => "Тема"
// theme.isPanelless: "Question appearance" => "Внешний вид вопроса"
// theme.editorPanel: "Background and corner radius" => "Радиус фона и угла"
// theme.questionPanel: "Background and corner radius" => "Радиус фона и угла"
// theme.primaryColor: "Accent color" => "Акцентный цвет"
// theme.panelBackgroundTransparency: "Panel background opacity" => "Непрозрачность фона панели"
// theme.questionBackgroundTransparency: "Question background opacity" => "Непрозрачность фона вопроса"
// theme.fontSize: "Font size" => "Размер шрифта"
// theme.scale: "Scale" => "Шкала"
// theme.cornerRadius: "Corner radius" => "Радиус закругления угла"
// theme.pageTitle: "Title font" => "Шрифт заголовка"
// theme.pageDescription: "Description font" => "Описание шрифта"
// theme.questionTitle: "Title font" => "Шрифт заголовка"
// theme.questionDescription: "Description font" => "Описание шрифта"
// theme.editorFont: "Font" => "Шрифт"
// theme.backgroundOpacity: "Opacity" => "Непрозрачность"
// theme.--sjs-font-family: "Font family" => "Семейство шрифтов"
// theme.--sjs-general-backcolor-dim: "Background color" => "Цвет фона"
// theme.--sjs-primary-backcolor: "Accent background" => "Акцентный фон"
// theme.--sjs-primary-forecolor: "Accent foreground" => "Акцент на переднем плане"
// theme.--sjs-shadow-small: "Shadow effects" => "Эффекты теней"
// theme.--sjs-shadow-inner: "Shadow effects" => "Эффекты теней"
// theme.--sjs-border-default: "Colors" => "Знамя"
// header@header.headerView: "View" => "Вид"
// header@header.logoPosition: "Logo position" => "Расположение логотипа"
// header@header.surveyTitle: "Survey title font" => "Шрифт заголовка опроса"
// header@header.surveyDescription: "Survey description font" => "Шрифт описания опроса"
// header@header.headerTitle: "Survey title font" => "Шрифт заголовка опроса"
// header@header.headerDescription: "Survey description font" => "Шрифт описания опроса"
// header@header.inheritWidthFrom: "Content area width" => "Ширина области содержимого"
// header@header.textAreaWidth: "Text width" => "Ширина текста"
// header@header.backgroundColorSwitch: "Background color" => "Цвет фона"
// header@header.backgroundImage: "Background image" => "Фоновое изображение"
// header@header.backgroundImageOpacity: "Opacity" => "Непрозрачность"
// header@header.overlapEnabled: "Overlap" => "Перекрытие"
// header@header.logoPositionX: "Logo position" => "Расположение логотипа"
// header@header.titlePositionX: "Title position" => "Титульная позиция"
// header@header.descriptionPositionX: "Description position" => "Описание позиции"
// weight.400: "Regular" => "Регулярный"
// weight.600: "Heavy" => "Тяжелый"
// weight.700: "Semi-bold" => "Полужирный"
// weight.800: "Bold" => "Смелый"
// backgroundImageFit.auto: "Auto" => "Авто"
// backgroundImageFit.cover: "Cover" => "Крышка"
// backgroundImageFit.contain: "Contain" => "Содержать"
// backgroundImageFit.fill: "Stretch" => "Натягивать"
// backgroundImageFit.tile: "Tile" => "Кафель"
// backgroundImageAttachment.fixed: "Fixed" => "Неподвижный"
// backgroundImageAttachment.scroll: "Scroll" => "Свиток"
// headerView.basic: "Basic" => "Основной"
// headerView.advanced: "Advanced" => "Продвинутый"
// inheritWidthFrom.survey: "Same as survey" => "То же, что и опрос"
// inheritWidthFrom.container: "Fit to container" => "Подходит для контейнера"
// backgroundColorSwitch.none: "None" => "Никакой"
// backgroundColorSwitch.accentColor: "Accent color" => "Акцентный цвет"
// backgroundColorSwitch.custom: "Custom" => "Обычай"
// colorPalette.light: "Light" => "Свет"
// colorPalette.dark: "Dark" => "Темный"
// isPanelless.false: "Default" => "По умолчанию"
// isPanelless.true: "Without Panels" => "Без панелей"
// theme.cornerRadius: "Corner radius" => "Радиус закругления угла"
// theme.fontFamily: "Font family" => "Семейство шрифтов"
// theme.fontWeightRegular: "Regular" => "Регулярный"
// theme.fontWeightHeavy: "Heavy" => "Тяжелый"
// theme.fontWeightSemiBold: "Semi-bold" => "Полужирный"
// theme.fontWeightBold: "Bold" => "Смелый"
// theme.color: "Color" => "Цвет"
// theme.placeholderColor: "Placeholder color" => "Цвет заполнителя"
// theme.size: "Size" => "Размер"
// theme.opacity: "Opacity" => "Непрозрачность"
// ed.toolboxFilteredTextPlaceholder: "Type to search..." => "Введите для поиска..."
// ed.toolboxNoResultsFound: "No results found" => "Никаких результатов не найдено"
// paneldynamic.tabTitlePlaceholder: "Tab title placeholder" => "Заполнитель заголовка вкладки"
// theme.--sjs-special-red: "Error messages" => "Сообщения об ошибках"
// paneldynamic.tabTitlePlaceholder: "A fallback text for tab titles that applies when the tab title pattern doesn't produce a meaningful value." => "Резервный текст для заголовков вкладок, который применяется, когда шаблон заголовка вкладки не дает осмысленного значения."
// theme.fontColor: "Font color" => "Цвет шрифта"
// theme.backgroundColor: "Background color" => "Цвет фона"
// pe.questionTitleWidth: "Question title width" => "Ширина заголовка вопроса"
// pe.fileInputPlaceholder: "Select a file or paste a file link..." => "Выберите файл или вставьте ссылку на файл..."
// panelbase.questionTitleWidth: "Ex.: 200px" => "Пример: 200px"
// panel.questionTitleWidth: "Sets consistent width for question titles when they are aligned to the left of their question boxes. Accepts CSS values (px, %, in, pt, etc.)." => "Задает одинаковую ширину заголовков вопросов, если они выровнены по левому краю полей вопросов. Принимает значения CSS (px, %, in, pt и т. д.)."
// page.questionTitleWidth: "Sets consistent width for question titles when they are aligned to the left of their question boxes. Accepts CSS values (px, %, in, pt, etc.)." => "Задает одинаковую ширину заголовков вопросов, если они выровнены по левому краю полей вопросов. Принимает значения CSS (px, %, in, pt и т. д.)."
// pe.commentAreaRows: "Comment area height (in lines)" => "Высота области комментариев (в строках)"
// pehelp.commentAreaRows: "Sets the number of displayed lines in text areas for question comments. In the input takes up more lines, the scroll bar appears." => "Задает количество отображаемых строк в текстовых областях для комментариев к вопросам. При вводе занимает больше строк, появляется полоса прокрутки."
// pe.enabled: "Enabled" => "Включен"
// pe.disabled: "Disabled" => "Нетрудоспособный"
// pe.inherit: "Inherit" => "Наследовать"
// pe.validateVisitedEmptyFields: "Validate empty fields on lost focus" => "Проверка пустых полей при потере фокуса"
// panellayoutcolumn.effectiveWidth: "Ex.: 30%" => "Пример: 30%"
// panellayoutcolumn.questionTitleWidth: "Ex.: 200px" => "Пример: 200px"
// pehelp.validateVisitedEmptyFields: "Enable this option to trigger validation when a user focuses on an empty input field and then leaves it without making any changes." => "Включите этот параметр, чтобы активировать проверку, когда пользователь фокусируется на пустом поле ввода, а затем покидает его, не внося никаких изменений."
// pehelp.colCount: "Arranges choice options in a multi-column layout. When set to 0, the options are displayed in a single line." => "Упорядочивает варианты выбора в макете с несколькими столбцами. Если установлено значение 0, параметры отображаются в одну строку."
// theme.isPanelless: "This setting applies only to questions outside of a panel." => "Этот параметр применяется только к вопросам, находящимся за пределами панели."
// theme.primaryColor: "Sets a supplementary color that highlights key survey elements." => "Установка дополнительного цвета, который выделяет ключевые элементы опроса."
// theme.panelBackgroundTransparency: "Adjusts the transparency of panels and question boxes relative to the survey background." => "Настройка прозрачности панелей и полей вопросов относительно фона опроса."
// theme.questionBackgroundTransparency: "Adjusts the transparency of input elements relative to the survey background." => "Настройка прозрачности входных элементов относительно фона опроса."
// theme.cornerRadius: "Sets the corner radius for all rectangular elements. Enable the Advanced Mode if you want to set individual corner radius values for input elements or panels and question boxes." => "Задает радиус угла для всех прямоугольных элементов. Включите расширенный режим, если вы хотите задать индивидуальные значения углового радиуса для элементов ввода или панелей и полей вопросов."
// theme.--sjs-general-backcolor-dim: "Sets the main background color of the survey." => "Задает основной цвет фона опроса."
// header.inheritWidthFrom: "The \"Same as container\" option auto-adjusts the header content area width to fit into the HTML element the survey is placed in." => "Опция \"То же самое, что и контейнер\" автоматически настраивает ширину области содержимого заголовка в соответствии с элементом HTML, в который помещается опрос."
// header.textAreaWidth: "The width of the header area that contains the survey title and description, measured in pixels." => "Ширина области заголовка, содержащей название и описание опроса, измеряется в пикселях."
// panellayoutcolumn.effectiveWidth: "Accepts values %." => "Принимает значения %."
// panellayoutcolumn.questionTitleWidth: "Accepts values px." => "Принимает значения px."
// p.effectiveColSpan: "Column span" => "Пролет колонны"
// progressBarInheritWidthFrom.survey: "Same as survey" => "То же, что и опрос"
// progressBarInheritWidthFrom.container: "Same as container" => "То же, что и контейнер"
// file.allowImagesPreview: "Displays thumbnail previews for uploaded files when possible. Unselect if you want to show file icons instead." => "Отображает предварительный просмотр миниатюр для загруженных файлов, когда это возможно. Снимите флажок, если вместо этого вы хотите отображать значки файлов."
// pehelp.progressBarInheritWidthFrom: "The \"Same as container\" option auto-adjusts the progress bar area width to fit into the HTML element the survey is placed in." => "Опция \"То же, что и контейнер\" автоматически настраивает ширину области индикатора выполнения в соответствии с HTML-элементом, в который помещается опрос."
// p.progressBarInheritWidthFrom: "Progress bar area width" => "Ширина области индикатора выполнения"
// maskType.none: "None" => "Никакой"
// maskType.pattern: "Pattern" => "Рисунок"
// maskType.numeric: "Numeric" => "Числовой"
// maskType.datetime: "Date and Time" => "Дата и время"
// maskType.currency: "Currency" => "Валюта"

// inputTextAlignment.auto: "Auto" => "Авто"
// inputTextAlignment.left: "Left" => "Слева"
// inputTextAlignment.right: "Right" => "Справа"
// pehelp.inputTextAlignment: "Select how to align input value within the field. The default setting \"Auto\" aligns the input value to the right if currency or numeric masking is applied and to the left if not." => "Выберите способ выравнивания входного значения в поле. Настройка по умолчанию \"Auto\" выравнивает вводимое значение по правому краю, если применяется маскирование валюты или число, то по левому краю"
// p.inputTextAlignment: "Input value alignment" => "Выравнивание вводимого значения"
// paneldynamic.showRangeInProgress: "Show the progress bar" => "Отображение индикатора выполнения"
// paneldynamic.showProgressBar: "Show the progress bar" => "Отображение индикатора выполнения"
// paneldynamic.progressBarLocation: "Progress bar alignment" => "Выравнивание полосы прогресса"
// pv.carousel: "Carousel" => "Карусель"
// progressBarLocation.top: "Top" => "Вверх"
// progressBarLocation.bottom: "Bottom" => "Дно"
// progressBarLocation.topBottom: "Top and bottom" => "Верх и низ"
// matrixdropdowncolumn.colCount: "Arranges choice options in a multi-column layout. When set to 0, the options are displayed in a single line. When set to -1, the actual value is inherited from the \"Nested column count\" property of the parent matrix." => "Упорядочивает варианты выбора в макете с несколькими столбцами. Если установлено значение 0, параметры отображаются в одну строку. При значении -1 фактическое значение наследуется от свойства \"Количество вложенных столбцов\" родительской матрицы."
// ed.translationYouTubeNotSupported: "YouTube links are not supported." => "Ссылки на YouTube не поддерживаются."
// ed.propertyGridPlaceholderTitle: "Start configuring your form" => "Начните настройку формы"
// ed.propertyGridPlaceholderDescription: "Click any category icon to explore survey settings. Additional settings will become available once you add a survey element to the design surface." => "Нажмите на любой значок категории, чтобы ознакомиться с настройками опроса. Дополнительные настройки станут доступны после добавления элемента опроса в область конструктора."
// pe.caseInsensitive: "Case insensitive" => "Учет регистра"
// pehelp.caseInsensitive: "Select if uppercase and lowercase letters in the regular expression must be treated as equivalent." => "Выберите, если прописные и строчные буквы в регулярном выражении должны рассматриваться как эквивалентные."

// ed.surveyPlaceholderTitle: "Your form is empty" => "Ваша форма пуста"
// ed.surveyPlaceholderTitleMobile: "Your form is empty" => "Ваша форма пуста"
// ed.surveyPlaceholderDescription: "Drag an element from the toolbox or click the button below." => "Перетащите элемент из панели инструментов или нажмите кнопку ниже."
// ed.surveyPlaceholderDescriptionMobile: "Drag an element from the toolbox or click the button below." => "Перетащите элемент из панели инструментов или нажмите кнопку ниже."
// ed.previewPlaceholderTitle: "No preview" => "Без предварительного просмотра"
// ed.previewPlaceholderTitleMobile: "No preview" => "Без предварительного просмотра"
// ed.previewPlaceholderDescription: "The survey doesn't contain any visible elements." => "Опрос не содержит никаких видимых элементов."
// ed.previewPlaceholderDescriptionMobile: "The survey doesn't contain any visible elements." => "Опрос не содержит никаких видимых элементов."
// ed.translationsPlaceholderTitle: "No strings to translate" => "Никаких строк для перевода"
// ed.translationsPlaceholderTitleMobile: "No strings to translate" => "Никаких строк для перевода"
// ed.translationsPlaceholderDescription: "Add elements to your form or change the strings filter in the toolbar." => "Добавляйте элементы в форму или изменяйте фильтр строк на панели инструментов."
// ed.translationsPlaceholderDescriptionMobile: "Add elements to your form or change the strings filter in the toolbar." => "Добавляйте элементы в форму или изменяйте фильтр строк на панели инструментов."
// lg.logicPlaceholderTitle: "No logical rules" => "Никаких логических правил"
// lg.logicPlaceholderTitleMobile: "No logical rules" => "Никаких логических правил"
// lg.logicPlaceholderDescription: "Create a rule to customize the flow of the survey." => "Создайте правило для настройки потока опроса."
// lg.logicPlaceholderDescriptionMobile: "Create a rule to customize the flow of the survey." => "Создайте правило для настройки потока опроса."
// pe.showTimer: "Use a timer" => "Используйте таймер"
// theme.advancedMode: "Advanced mode" => "Расширенный режим"
// pehelp.timerLocation: "Sets the location of a timer on a page." => "Задает расположение таймера на странице."
// header.mobileHeight: "When set to 0, the height is calculated automatically to accommodate the header's content." => "Если задано значение 0, высота вычисляется автоматически для размещения содержимого заголовка."
// p.mobileHeight: "Height on smartphones" => "Высота на смартфонах"
// header.overlapEnabled: "When enabled, the top of the survey overlays the bottom of the header." => "Когда этот параметр включен, верхняя часть опроса накладывается на нижнюю часть заголовка."
// ed.creatorSettingTitle: "Creator Settings" => "Настройки создателя контента"
// tabs.accentColors: "Accent colors" => "Акцентные цвета"
// tabs.scaling: "Scaling" => "Масштабирование"
// panel.showQuestionNumbers: "Assigns numbers to questions nested within this panel." => "Присваивает номера вопросам, вложенным в эту панель."
// creatortheme.--sjs-special-background: "Surface background" => "Фон поверхности"
// creatortheme.--sjs-primary-background-500: "Primary" => "Первичный"
// creatortheme.--sjs-secondary-background-500: "Secondary" => "Вторичный"
// creatortheme.surfaceScale: "Surface" => "Поверхность"
// creatortheme.userInterfaceBaseUnit: "User interface" => "Пользовательский интерфейс"
// creatortheme.fontScale: "Font" => "Шрифт"
// names.sc2020: "Survey Creator 2020" => "Создатель опросов 2020"
// names.default-light: "Light" => "Свет"
// names.default-dark: "Dark" => "Темный"
// names.default-contrast: "Contrast" => "Контраст"
// panel.showNumber: "Number this panel" => "Пронумеруйте эту панель"
// pehelp.autoAdvanceEnabled: "Select if you want the survey to auto-advance to the next page once a respondent has answered all questions on the current page. This feature won't apply if the last question on the page is open-ended or allows multiple answers." => "Выберите, хотите ли вы, чтобы опрос автоматически переходил на следующую страницу после того, как респондент ответил на все вопросы на текущей странице. Эта функция не будет работать, если последний вопрос на странице является открытым или допускает несколько ответов."
// autocomplete.name: "Full Name" => "Полное имя"
// autocomplete.honorific-prefix: "Prefix" => "Приставка"
// autocomplete.given-name: "First Name" => "Имя"
// autocomplete.additional-name: "Middle Name" => "Отчество"
// autocomplete.family-name: "Last Name" => "Фамилия"
// autocomplete.honorific-suffix: "Suffix" => "Суффикс"
// autocomplete.nickname: "Nickname" => "Прозвище"
// autocomplete.organization-title: "Job Title" => "Должность"
// autocomplete.username: "User Name" => "Имя пользователя"
// autocomplete.new-password: "New Password" => "Новый пароль"
// autocomplete.current-password: "Current Password" => "Текущий пароль"
// autocomplete.organization: "Organization Name" => "Название организации"
// autocomplete.street-address: "Full Street Address" => "Полный адрес улицы"
// autocomplete.address-line1: "Address Line 1" => "Адресная строка 1"
// autocomplete.address-line2: "Address Line 2" => "Адресная строка 2"
// autocomplete.address-line3: "Address Line 3" => "Адресная строка 3"
// autocomplete.address-level4: "Level 4 Address" => "Адрес 4-го уровня"
// autocomplete.address-level3: "Level 3 Address" => "Адрес 3-го уровня"
// autocomplete.address-level2: "Level 2 Address" => "Адрес 2-го уровня"
// autocomplete.address-level1: "Level 1 Address" => "Адрес 1-го уровня"
// autocomplete.country: "Country Code" => "Код страны"
// autocomplete.country-name: "Country Name" => "Название страны"
// autocomplete.postal-code: "Postal Code" => "Почтовый индекс"
// autocomplete.cc-name: "Cardholder Name" => "Имя владельца карты"
// autocomplete.cc-given-name: "Cardholder First Name" => "Имя владельца карты"
// autocomplete.cc-additional-name: "Cardholder Middle Name" => "Второе имя владельца карты"
// autocomplete.cc-family-name: "Cardholder Last Name" => "Фамилия владельца карты"
// autocomplete.cc-number: "Credit Card Number" => "Номер кредитной карты"
// autocomplete.cc-exp: "Expiration Date" => "Срок годности"
// autocomplete.cc-exp-month: "Expiration Month" => "Срок действия"
// autocomplete.cc-exp-year: "Expiration Year" => "Год экспирации"
// autocomplete.cc-csc: "Card Security Code" => "Код безопасности карты"
// autocomplete.cc-type: "Credit Card Type" => "Тип кредитной карты"
// autocomplete.transaction-currency: "Transaction Currency" => "Валюта транзакции"
// autocomplete.transaction-amount: "Transaction Amount" => "Сумма транзакции"
// autocomplete.language: "Preferred Language" => "Предпочитаемый язык"
// autocomplete.bday: "Birthday" => "День рождения"
// autocomplete.bday-day: "Birthday Day" => "День рождения"
// autocomplete.bday-month: "Birthday Month" => "Месяц Дня Рождения"
// autocomplete.bday-year: "Birthday Year" => "Год рождения"
// autocomplete.sex: "Gender" => "Род"
// autocomplete.url: "Website URL" => "URL-адрес сайта"
// autocomplete.photo: "Profile Photo" => "Фото профиля"
// autocomplete.tel: "Telephone Number" => "Номер телефона"
// autocomplete.tel-country-code: "Country Code for Phone" => "Код страны для телефона"
// autocomplete.tel-national: "National Telephone Number" => "Национальный номер телефона"
// autocomplete.tel-area-code: "Area Code" => "Код города"
// autocomplete.tel-local: "Local Phone Number" => "Местный номер телефона"
// autocomplete.tel-local-prefix: "Local Phone Prefix" => "Префикс местного телефона"
// autocomplete.tel-local-suffix: "Local Phone Suffix" => "Суффикс местного телефона"
// autocomplete.tel-extension: "Phone Extension" => "Добавочный номер телефона"
// autocomplete.email: "Email Address" => "Адрес электронной почты"
// autocomplete.impp: "Instant Messaging Protocol" => "Протокол обмена мгновенными сообщениями"
// ed.lockQuestionsTooltip: "Lock expand/collapse state for questions" => "Блокировка состояния развертывания/свертывания для вопросов"
// pe.listIsEmpty@pages: "You don't have any pages yet" => "У вас еще нет страниц"
// pe.addNew@pages: "Add new page" => "Добавить новую страницу"
// ed.zoomInTooltip: "Zoom In" => "Увеличить"
// ed.zoomOutTooltip: "Zoom Out" => "Уменьшение масштаба"
// tabs.surfaceBackground: "Surface Background" => "Фон поверхности"
// pe.copyDefaultValueFromLastEntry: "Use answers from the last entry as default" => "Используйте ответы из последней записи по умолчанию"
// colors.gray: "Gray" => "Серый"
// pe.navigationButtonsLocation: "Navigation buttons alignment" => "Выравнивание кнопок навигации"
// pv.allQuestions: "Show all questions" => "Показать все вопросы"
// pv.answeredQuestions: "Show answered questions only" => "Показать только отвеченные вопросы"
// pehelp.navigationButtonsLocation: "Sets the location of navigation buttons on a page." => "Задает расположение кнопок навигации на странице."
// pe.progressBarLocation: "Progress bar alignment" => "Выравнивание полосы прогресса"
// progressBarLocation.topbottom: "Top and bottom" => "Верх и низ"
// progressBarLocation.aboveheader: "Above the header" => "Над заголовком"
// progressBarLocation.belowheader: "Below the header" => "Под заголовком"
// progressBarLocation.off: "Hidden" => "Скрытый"
// survey.progressBarLocation: "Sets the location of the progress bar. The \"Auto\" value displays the progress bar above or below the survey header." => "Задает расположение индикатора выполнения. Значение \"Auto\" отображает индикатор выполнения над или под заголовком опроса."
// survey.readOnly: "Make the survey read-only" => "Сделайте опрос доступным только для чтения"
// survey.readOnly: "Select if you want to prevent respondents from filling out your survey." => "Выберите, хотите ли вы запретить респондентам заполнять ваш опрос."
// paneldynamic.showNumber: "Number the panel" => "Пронумеруйте панель"
// question.showNumber: "Number this question" => "Пронумеруйте этот вопрос"
// pe.previewMode: "Preview mode" => "Режим предварительного просмотра"
// pe.gridLayoutEnabled: "Enable the grid layout" => "Включение макета сетки"
// pe.maskSettings: "Mask settings" => "Настройки маски"
// pe.detailErrorLocation: "Row expansion error message alignment" => "Выравнивание сообщения об ошибке расширения строк"
// pehelp.detailErrorLocation: "Sets the location of error messages for questions nested in detail sections. The \"Inherit\" option applies the setting from the \"Error message alignment\" property." => "Задает расположение сообщений об ошибках для вопросов, вложенных в подробные разделы. Опция \"Наследовать\" применяет настройку из свойства \"Выравнивание сообщения об ошибке\"."
// pe.gridLayoutColumns: "Grid layout columns" => "Столбцы макета сетки"
// pe.startPageTitlePlaceholder: "Start Page" => "Стартовая страница"
// panellayoutcolumn.effectiveWidth: "Effective width, %" => "Полезная ширина, %"
// panellayoutcolumn.questionTitleWidth: "Question title width, px" => "Ширина заголовка вопроса, px"
// pe.listIsEmpty@gridLayoutColumns: "You don't have layout columns yet" => "У вас еще нет столбцов макета"
// panel.effectiveColSpan: "Specifies how many columns this panel spans within the grid layout." => "Указывает, сколько столбцов занимает эта панель в макете сетки."
// panel.gridLayoutColumns: "This table lets you configure each grid column within the panel. It automatically sets the width percentage for each column based on the maximum number of elements in a row. To customize the grid layout, manually adjust these values and define the title width for all questions in each column." => "В этой таблице можно настроить каждый столбец сетки на панели. Он автоматически устанавливает процент ширины для каждого столбца в зависимости от максимального количества элементов в строке. Чтобы настроить макет сетки, вручную настройте эти значения и определите ширину заголовка для всех вопросов в каждом столбце."
// pehelp.gridLayoutEnabled: "Survey Creator allows you to manually adjust the inline widths of form elements to control the layout. If this doesn't produce the desired outcome, you can enable the grid layout, which structures form elements using a column-based system. To configure layout columns, select a page or panel and use the \"Question Settings\" → \"Grid columns\" table. To adjust how many columns a question spans, select it and set the desired value in the \"Layout\" → \"Column span\" field." => "Survey Creator позволяет вручную настраивать встроенную ширину элементов формы для управления макетом. Если это не дает желаемого результата, вы можете включить макет сетки, который структурирует элементы с использованием системы на основе столбцов. Чтобы настроить макет столбцов, выберите страницу или панель и используйте таблицу «Настройки вопроса» → «Столбцы сетки». Чтобы настроить количество столбцов в вопросе, выберите его и установите нужное значение в полях «Макет» → «Диапазон столбцов»."
// question.effectiveColSpan: "Specifies how many columns this question spans within the grid layout." => "Указывает, сколько столбцов занимает этот вопрос в макете сетки."
// page.gridLayoutColumns: "This table lets you configure each grid column on the page. It automatically sets the width percentage for each column based on the maximum number of elements in a row. To customize the grid layout, manually adjust these values and define the title width for all questions in each column." => "В этой таблице можно настроить каждый столбец сетки на странице. Он автоматически устанавливает процент ширины для каждого столбца в зависимости от максимального количества элементов в строке. Чтобы настроить макет сетки, вручную настройте эти значения и определите ширину заголовка для всех вопросов в каждом столбце."

// ed.expandTooltip: "Expand" => "Расширять"
// ed.collapseTooltip: "Collapse" => "Коллапс"
// pe.itemTitleWidth_placeholder: "Ex.: 100px" => "Пример: 100px"
// pehelp.itemTitleWidth: "Sets consistent width for all item labels. Accepts CSS values (px, %, in, pt, etc.)." => "Задает одинаковую ширину для всех меток товаров. Принимает значения CSS (px, %, in, pt и т.д.)."
// ed.zoom100Tooltip: "Zoom to 100%" => "Увеличьте масштаб до 100%"
// ed.addLanguageTooltip: "Add Language" => "Добавить язык"
// pehelp.commentAreaRows: "Sets the number of displayed lines in text areas for question comments. If the input takes up more lines, the scroll bar appears." => "Задает количество отображаемых строк в текстовых полях для комментариев к вопросам. Если ввод занимает больше строк, появляется полоса прокрутки."
// pe.defaultDisplayValue: "Default display value for dynamic texts" => "Отображаемое значение по умолчанию для динамических текстов"
// pehelp.defaultDisplayValue: "A value displayed in HTML questions and in the dynamic titles and descriptions of survey elements when the question value is empty." => "Значение, отображаемое в вопросах в формате HTML, а также в динамических заголовках и описаниях элементов опроса, когда значение вопроса пусто."
// showQuestionNumbers.recursive: "Recursive numbering" => "Рекурсивная нумерация"
// paneldynamic.templateQuestionTitleWidth: "Question title width" => "Ширина заголовка вопроса"
// pe.allowCustomChoices: "Allow custom choices" => "Как разрешить пользовательский выбор"
// paneldynamic.templateQuestionTitleWidth: "Sets consistent width for question titles when they are aligned to the left of their question boxes. Accepts CSS values (px, %, in, pt, etc.)." => "Устанавливает постоянную ширину заголовков вопросов, когда они выровнены по левому краю полей вопросов. Принимает значения CSS (px, %, in, pt и т.д.)."
// page.name: "A page ID that is not visible to respondents." => "Идентификатор страницы, который не виден респондентам."
// page.description: "Type a page subtitle." => "Введите подзаголовок страницы."
// page.navigationTitle: "A caption displayed on a navigation button in the progress bar or table of contents (TOC). If you leave this field empty, the navigation button will use the page title or page name. To enable the progress bar or TOC, go to \"Survey\" → \"Navigation\"." => "Подпись, отображаемая на кнопке навигации на индикаторе выполнения или в оглавлении (TOC). Если оставить это поле пустым, кнопка навигации будет использовать заголовок страницы или название страницы. Чтобы включить индикатор выполнения или оглавление, перейдите в раздел «Обзор» → «Навигация»."
// pehelp.allowCustomChoices: "Select to let respondents add their own choices if the desired option isn't available in the dropdown. Custom choices will only be stored temporarily for the duration of the current browser session." => "Выберите, чтобы разрешить респондентам добавлять свои собственные варианты, если нужный вариант недоступен в раскрывающемся списке. Пользовательские варианты будут храниться только временно в течение текущего сеанса браузера."