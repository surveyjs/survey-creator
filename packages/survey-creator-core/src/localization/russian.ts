import { editorLocalization } from "survey-creator-core";

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
  // Strings in SurveyJS Creator
  ed: {
    defaultLocale: "По умолчанию ({0})",
    survey: "Опросник",
    settings: "Настройки опросника",
    settingsTooltip: "Открыть настройки",
    surveySettings: "Настройки опроса",
    surveySettingsTooltip: "Откройте настройки опроса",
    themeSettings: "Настройки темы",
    themeSettingsTooltip: "Откройте настройки темы",
    showPanel: "Панель «Показать»",
    hidePanel: "Скрыть панель",
    prevSelected: "Выберите предыдущую",
    nextSelected: "Выберите далее",
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
    testSurvey: "Тестировать опросник",
    themeSurvey: "Темы",
    defaultV2Theme: "По умолчанию",
    modernTheme: "Современный",
    defaultTheme: "По умолчанию (устаревшая)",
    testSurveyAgain: "Тестировать еще раз",
    testSurveyWidth: "Ширина опросника",
    navigateToMsg: "Вы должны были перейти к",
    logic: "Логика опросника",
    embedSurvey: "Вставить опросник",
    translation: "Перевод",
    saveSurvey: "Сохранить опросник",
    saveSurveyTooltip: "Сохранить опрос",
    designer: "Обзор конструктора",
    jsonEditor: "JSON редактор",
    jsonHideErrors: "Скрыть ошибки",
    jsonShowErrors: "Показать ошибки",
    undo: "Отменить",
    redo: "Повтор",
    undoTooltip: "Отменить последнее изменение",
    redoTooltip: "Повторите изменение",
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
    propertyGridFilteredTextPlaceholder: "Введите для поиска...",
    toolboxGeneralCategory: "Общие",
    toolboxChoiceCategory: "Вопросы выбора",
    toolboxTextCategory: "Вопросы для ввода текста",
    toolboxContainersCategory: "Контейнеры",
    toolboxMatrixCategory: "Матричные вопросы",
    toolboxMiscCategory: "Разное",
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
    translationDialogTitle: "Непереведенные строки",
    translationMergeLocaleWithDefault: "Объединить {0} с локалью по умолчанию",
    translationPlaceHolder: "Перевод...",
    themeExportButton: "Экспорт",
    themeImportButton: "Импорт",
    surveyJsonExportButton: "Экспорт",
    surveyJsonImportButton: "Импорт",
    surveyJsonCopyButton: "Копировать в буфер",
    themeResetButton: "Сброс настроек темы по умолчанию",
    bold: "Жирный",
    italic: "Курсив",
    underline: "Подчеркивание",
    addNewQuestion: "Добавить вопрос",
    selectPage: "Выберите страницу...",
    carryForwardChoicesCopied: "Варианты копируются из",
    htmlPlaceHolder: "HTML-контент будет здесь.",
    panelPlaceHolder: "Задайте вопрос с панели инструментов здесь.",
    surveyPlaceHolder: "Опрос пуст. Перетащите элемент с панели инструментов или нажмите кнопку ниже.",
    imagePlaceHolder: "Перетащите изображение сюда или нажмите кнопку ниже и выберите изображение для загрузки",
    imageChooseImage: "Выберите изображение",
    addNewTypeQuestion: "Добавить {0}", //{0} is localizable question type
    chooseLogoPlaceholder: "[ЛОГОТИП]",
    auto: "Авто",
    choices_Item: "Пункт ",
    lg: {
      addNewItem: "Добавить новое правило",
      empty_tab: "Создайте правило для настройки потока опроса.",
      page_visibilityName: "Видимость страницы",
      page_enableName: "Включить (отключить) страницу",
      panel_visibilityName: "Видимость панели",
      panel_enableName: "Панель включена/выключена",
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
      question_resetValueText: "Сброс значения для вопроса: {0}",
      question_setValueText: "присвоить значение: {1} к вопросу: {0}",
      column_visibilityText: "Сделайте видимым {0} {1} в столбце вопроса", //{0} column name, {1} question name
      column_enableText: "Сделайте столбец {0} вопроса {1} включите", //{0} column name, {1} question name
      column_requireText: "Сделайте {0} вопроса {1} обязательным для заполнения", //{0} column name, {1} question name
      column_resetValueText: "Сброс значения ячейки для столбца: {0}",
      column_setValueText: "Присвойте значение ячейки: {1} столбцу: {0}",
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
      uncompletedRule_cancel: "Нет, я хочу дополнить правила",
      // expressionSetup: "",
      // actionsSetup: ""
    }
  },
  // Property Editors
  pe: {
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
    expressionHelp: "Пожалуйста, введите выражение. Вы можете использовать фигурные скобки, чтобы получить доступ к значениям вопроса.: '{Вопрос1} + {Вопрос2}', '({цена}*{количество}) * (100 - {скидка}).",
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
    "addNew@choices": "Добавить выбор",
    expressionIsEmpty: "Выражение - пустое",
    value: "Значение",
    text: "Текст",
    rowid: "ID строки",
    imageLink: "Ссылка на изображение",
    columnEdit: "Изменить столбец: {0}",
    itemEdit: "Редактировать элемент: {0}",
    url: "URL",
    path: "Путь",
    valueName: "Название пункта",
    choicesbyurl: {
      valueName: "Получение значений из следующего поля JSON"
    },
    titleName: "Заголовок пункта",
    imageLinkName: "Получение URL-адресов изображений из следующего поля JSON",
    allowEmptyResponse: "Разрешить пустой ответ",
    titlePlaceholder: "Введите заголовок",
    surveyTitlePlaceholder: "Введите заголовок опроса",
    pageTitlePlaceholder: "Введите заголовок страницы",
    descriptionPlaceholder: "Введите описание",
    surveyDescriptionPlaceholder: "Введите описание опроса",
    pageDescriptionPlaceholder: "Введите описание страницы",
    showOtherItem: "Есть пункт 'Другое'",
    otherText: "Текст пункта 'Другое'",
    showNoneItem: "Нет ни одного пункта",
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
    visible: "Отображать?",
    isRequired: "Обязательный?",
    markRequired: "Отметьте как обязательный",
    removeRequiredMark: "Снимите нужную отметку",
    isAllRowRequired: "Все строки обязательны для заполнения",
    requiredErrorText: "Это поле обязательное для заполнения",
    startWithNewLine: "Начинать с новой строки?",
    rows: "Количество строк",
    cols: "Столбцы",
    placeholder: "Заполнитель области ввода",
    showPreview: "Показать предпросмотр?",
    storeDataAsText: "Хранить содержимое файла в формате JSON как текст",
    maxSize: "Максимальный размер файла (в байтах)",
    imageHeight: "Высота изображения",
    imageWidth: "Ширина изображения",
    rowCount: "Количество строк",
    columnLayout: "Макет столбцов",
    addRowLocation: "Добавить расположение кнопки строки",
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
    mode: "Режим (редактирование/просмотр)",
    clearInvisibleValues: "Очистить невидимые значения",
    cookieName: "Имя Cookie (отключить повторное прохождение опроса локально)",
    sendResultOnPageNext: "Показать результаты опроса на странице рядом",
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
    showPrevButton: "Показывать кнопки 'Предыдущая страница' (пользователь может вернуться на предыдущую страницу)",
    firstPageIsStarted: "Первая страница опросника является стартовой страницей.",
    showCompletedPage: "Показывать страницу с текстом по завершению заполнения (HTML финальной страницы)",
    goNextPageAutomatic: "Переходить на следующую страницу автоматически при заполнении всех вопросов",
    showProgressBar: "Показывать прогресс заполнения",
    questionTitleLocation: "Расположение заголовка вопроса",
    requiredText: "Символ для обязательного вопроса",
    questionStartIndex: "Начальный индекс вопроса (1, 2 или 'A', 'а')",
    showQuestionNumbers: "Показывать номера вопросов",
    questionTitleTemplate: "Шаблон названия опроса, по умолчанию: {не} {требует} {текста}.",
    questionErrorLocation: "Размещение ошибки опроса",
    focusFirstQuestionAutomatic: "Фокусирование на первом вопросе при изменении страницы",
    questionsOrder: "Сортировка элементов на странице",
    maxTimeToFinish: "Максимальное время в секундах, чтобы заполнить опросник",
    maxTimeToFinishPage: "Максимальное время в секундах, чтобы заполнить страницу опросника",
    image: {
      imageHeight: "Высота изображения (в значениях, принимаемых CSS)",
      imageWidth: "Ширина изображения (в значениях, принимаемых CSS)"
    },
    // survey templates
    survey: {
      title: "Титул"
    },
    page: {
      title: "Титул",
      maxTimeToFinish: "Ограничение по времени завершения страницы (в секундах)"
    },
    question: {
      page: "Родительская страница"
    },
    showTimerPanel: "Показывать панель таймера",
    showTimerPanelMode: "Показывать режим панели таймера",
    renderMode: "Режим отображения панели",
    allowAddPanel: "Разрешить добавление панели",
    allowRemovePanel: "Разрешить удаление панели",
    noEntriesText: "Пустой текст записей",
    panelAddText: "Добавление текста на панели",
    panelRemoveText: "Удаление текста на панели",
    isSinglePage: "Показывать все элементы на одной странице",
    html: "HTML-разметка",
    expression: "Выражение",
    setValue: "Ответ",
    dataFormat: "Формат изображения",
    allowAddRows: "Разрешить добавление строк",
    allowRemoveRows: "Разрешить удаление строк",
    allowRowsDragAndDrop: "Разрешить перетаскивание строк",
    responsiveImageSizeHelp: "Не применяется, если указана точная ширина или высота изображения.",
    minImageWidth: "Минимальная ширина изображения",
    maxImageWidth: "Максимальная ширина изображения",
    minImageHeight: "Минимальная высота изображения",
    maxImageHeight: "Максимальная высота изображения",
    minValue: "Минимальное значение",
    maxValue: "Максимальное значение",
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
    maxOthersLength: "Максимальная длина комментария (в символах)",
    autoGrowComment: "При необходимости автоматически разверните область комментариев",
    allowResizeComment: "Разрешить пользователям изменять размер текстовых областей",
    textUpdateMode: "Обновление значения текстового вопроса",
    focusOnFirstError: "Установка фокуса на первом недопустимом ответе",
    checkErrorsMode: "Запуск проверки",
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
    paneldynamic: {
      confirmDelete: "Подтвердите удаление панели"
    },
    panelCount: "Начальное количество панелей",
    minPanelCount: "Минимальное количество панелей",
    maxPanelCount: "Максимальное количество панелей",
    panelsState: "Состояние расширения внутренней панели",
    templateDescription: "Шаблон описания",
    templateTitle: "Шаблон заголовка",
    panelPrevText: "Предыдущая всплывающая подсказка кнопки «Панель»",
    panelNextText: "Всплывающая подсказка кнопки «Следующая панель»",
    showRangeInProgress: "Показать индикатор выполнения",
    templateTitleLocation: "Местоположение заголовка вопроса",
    panelRemoveButtonLocation: "Удалить расположение кнопки «Панель»",
    hideIfRowsEmpty: "Скрыть вопрос, если нет строк",
    hideColumnsIfEmpty: "Скрытие столбцов, если строк нет",
    rateValues: "Пользовательские значения тарифов",
    rateCount: "Количество ставок",
    autoGenerate: "Как указать значения тарифов?",
    hideIfChoicesEmpty: "Скрыть вопрос, если он не содержит вариантов",
    hideNumber: "Скрыть номер вопроса",
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
    showClearButton: "Показать кнопку «Очистить»",
    showNumber: "Показать номер панели",
    logoWidth: "Ширина логотипа (в значениях, принимаемых CSS)",
    logoHeight: "Высота логотипа (в значениях, принимаемых CSS)",
    readOnly: "Только для чтения",
    enableIf: "Редактируется, если",
    emptyRowsText: "Сообщение \"Нет строк\"",
    size: "Размер поля ввода (в символах)",
    separateSpecialChoices: "Отдельные специальные варианты («Нет», «Другое», «Выбрать все»)",
    choicesFromQuestion: "Копирование вариантов из следующего вопроса",
    choicesFromQuestionMode: "Какие варианты скопировать?",
    showCommentArea: "Показать область комментариев",
    commentPlaceholder: "Заполнитель области комментариев",
    displayRateDescriptionsAsExtremeItems: "Отображение описаний скоростей в виде экстремальных значений",
    rowsOrder: "Порядок строк",
    columnsLayout: "Расположение столбцов",
    columnColCount: "Количество вложенных столбцов",
    state: "Состояние развертывания панели",
    correctAnswer: "Правильный ответ",
    defaultPanelValue: "Значения по умолчанию",
    cells: "Тексты ячеек",
    keyName: "Ключевая колонка",
    itemvalue: {
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
    tabs: {
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
      layout: "Планировка",
      data: "Данные",
      validation: "Проверка",
      cells: "Ячейки",
      showOnCompleted: "Показать по завершению",
      logo: "Логотип в заголовке опросника",
      slider: "Ползун",
      expression: "Выражение",
      others: "Другие"
    },
    editProperty: "Редактировать свойство '{0}'",
    items: "[Элементы: {0}]",
    choicesVisibleIf: "Варианты доступны в следующих случаях:",
    choicesEnableIf: "Варианты можно выбрать, если:",
    columnsEnableIf: "Столбцы видны, если",
    rowsEnableIf: "Строки видны, если",
    indent: "Добавление отступов",
    panel: {
      indent: "Добавление внешних отступов"
    },
    innerIndent: "Добавление внутренних отступов",
    defaultValueFromLastRow: "Взять значения по умолчанию из последней строки",
    defaultValueFromLastPanel: "Возьмите значения по умолчанию с последней панели",
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
    signatureWidth: "Ширина подписи",
    signatureHeight: "Высота подписи",
    verticalAlign: "Выравнивание по вертикали",
    alternateRows: "Чередующиеся строки",
    columnsVisibleIf: "Столбцы видны, если",
    rowsVisibleIf: "Строки видны, если",
    otherPlaceholder: "Заполнитель области комментариев",
    filePlaceholder: "Замещающий текст файла",
    photoPlaceholder: "Замещающий текст фотографии",
    fileOrPhotoPlaceholder: "Замещающий текст файла или фотографии",
    rateType: "Тип тарифа"
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
    decimal: "десятичный",
    currency: "валюта",
    percent: "процент",
    firstExpanded: "Расширен первый",
    off: "Выключить",
    onpanel: "Старт на каждой панели",
    onPanel: "На панели",
    onSurvey: "В опроснике",
    list: "Список",
    progressTop: "progressTop",
    progressBottom: "progressBottom",
    progressTopBottom: "progressTopBottom",
    tab: "Вкладки",
    horizontal: "Горизонтально",
    vertical: "Вертикально",
    top: "Сверху",
    bottom: "Снизу",
    topBottom: "Сверху и снизу",
    both: "Оба",
    left: "Слева",
    right: "Правильно",
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
    on: "Включить",
    onPage: "На странице",
    edit: "Редактирование",
    display: "Просмотр",
    onComplete: "По завершению",
    onHidden: "По скрытию",
    onHiddenContainer: "Когда вопрос или его панель/страница становятся скрытыми",
    clearInvisibleValues: {
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
    all: "Все",
    page: "Страница",
    survey: "Опрос",
    onNextPage: "При переходе на следующую страницу",
    onValueChanged: "При изменении значения",
    onValueChanging: "Прежде чем ответ будет изменен",
    standard: "Оригинальная структура",
    singlePage: "Все вопросы на одной странице",
    questionPerPage: "Каждый вопрос на отдельной странице",
    noPreview: "Без предварительного просмотра",
    showAllQuestions: "Показать все вопросы",
    showAnsweredQuestions: "Показывать только ответы на вопросы",
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
    showNavigationButtons: {
      none: "Скрытый"
    },
    showProgressBar: {
      off: "Скрытый"
    },
    showTimerPanel: {
      none: "Скрытый"
    },
    showTimerPanelMode: {
      all: "Оба"
    },
    detailPanelMode: {
      none: "Скрытый"
    },
    addRowLocation: {
      default: "Зависит от компоновки матрицы"
    },
    panelsState: {
      default: "Пользователи не могут разворачивать или сворачивать панели",
      collapsed: "Все панели свернуты",
      expanded: "Все панели расширены"
    },
    widthMode: {
      auto: "Авто",
      static: "Статический",
      responsive: "Отзывчивый"
    },
    imageFit: {
      none: "Никакой",
      contain: "По размеру",
      cover: "Заполнение",
      fill: "Растянуть"
    },
    contentMode: {
      auto: "Авто",
      image: "Образ",
      video: "Видео",
      youtube: "Ютуб"
    },
    displayMode: {
      auto: "Авто",
      buttons: "Кнопки",
      dropdown: "Выпадающий список"
    },
    rateColorMode: {
      default: "По умолчанию"
    },
    autoGenerate: {
      "true": "Порождать",
      "false": "Ввод вручную"
    },
    rateType: {
      labels: "Метки",
      stars: "Звезды",
      smileys: "Смайлики"
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
  pehelp: {
    cookieName: "Файлы cookie не позволяют пользователям заполнять один и тот же опрос дважды.",
    size: "Изменяет размер видимой области поля ввода. Пожалуйста, используйте настройку <b>«Проверка → максимальная длина</b>», чтобы ограничить длину ввода.",
    format: "Используйте {0} в качестве заполнителя для фактического значения.",
    totalText: "Отображается только в том случае, если хотя бы один столбец имеет тип Total или выражение Total.",
    acceptedTypes: "Дополнительные сведения см. в описании атрибута [accept](https://www.w3schools.com/tags/att_input_accept.asp).",
    columnColCount: "Применимо только к типам ячеек «Радиогруппа» и «Флажок».",
    autocomplete: "Дополнительные сведения см. в описании атрибута [autocomplete](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete).",
    valueName: "Если это свойство не задано, ответ будет сохранен в поле, указанном свойством Name.",
    choicesbyurl: {
      valueName: " "
    },
    keyName: "Если указанный столбец содержит одинаковые значения, опрос выдает ошибку «Неуникальное значение ключа».",
    filePlaceholder: "Применяется, если \"Тип источника\" имеет значение \"Локальные файлы\" или когда камера недоступна",
    photoPlaceholder: "Применяется, если \"Тип источника\" имеет значение \"Камера\".",
    fileOrPhotoPlaceholder: "Применяется, если \"Тип источника\" имеет значение \"Локальные файлы или камера\"."
  },
  // Properties
  p: {
    title: {
      name: "Название",
      title: "Оставьте его пустым, если оно такое же, как 'Название'"
    },
    multiSelect: "Разрешить множественный выбор",
    showLabel: "Показать подписи к изображениям",
    value: "Ценность",
    tabAlign: "Выравнивание табуляции",
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
    titleLocation: "Расположение заголовка",
    descriptionLocation: "Описание местоположения",
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
    isUnique: "Уникален",
    showInMultipleColumns: "Показать в нескольких столбцах",
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
    itemSize: "Размер элементов",
    elements: "Азы",
    content: "Содержание",
    navigationButtonsVisibility: "Отображение навигационных кнопок",
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
    allowCameraAccess: "Разрешить доступ к камере",
    scaleColorMode: "Цветовой режим масштабирования",
    rateColorMode: "Оцените цветовой режим",
    templateTabTitle: "Заголовок вкладки шаблона",
    templateVisibleIf: "Шаблон виден, если",
    copyDisplayValue: "Копирование отображаемого значения"
  },
  theme: {
    "--background": "Цвет фона",
    "--background-dim-light": "Фон тусклый цвет света",
    "--primary-foreground": "Основной цвет переднего плана",
    "--foreground": "Цвет переднего плана",
    "--base-unit": "Базовый блок",
    groupGeneral: "Общее",
    groupAdvanced: "Продвинутый",
    groupHeader: "Заголовок",
    groupBackground: "Фон",
    groupAppearance: "Внешность",
    themeName: "Тема",
    themeMode: "Внешний вид вопроса",
    themeModePanels: "По умолчанию",
    themeModeLightweight: "Без панелей",
    themePaletteLight: "Свет",
    themePaletteDark: "Темный",
    primaryColor: "Акцентный цвет",
    primaryDefaultColor: "По умолчанию",
    primaryDarkColor: "Парить",
    primaryLightColor: "Выбранный",
    coverTitleForecolor: "Цвет заголовка",
    coverDescriptionForecolor: "Цвет описания",
    coverOverlapEnabled: "Перекрытие",
    backgroundDimColor: "Цвет фона",
    backgroundImage: "Фоновое изображение",
    backgroundImageFitAuto: "Авто",
    backgroundImageFitCover: "Заполнение",
    backgroundImageFitContain: "По размеру",
    backgroundImageFitFill: "Растянуть",
    backgroundImageFitTile: "Замостить",
    backgroundOpacity: "Непрозрачность",
    backgroundImageAttachmentFixed: "Зафиксировать",
    backgroundImageAttachmentScroll: "Прокручивать",
    panelBackgroundTransparency: "Непрозрачность фона панели",
    questionBackgroundTransparency: "Непрозрачность фона вопроса",
    questionPanel: "Фон панели и радиус угла",
    questionTitle: "Шрифт заголовка вопроса",
    questionDescription: "Шрифт описания вопроса",
    editorPanel: "Элемент ввода",
    editorFont: "Шрифт элемента ввода",
    backcolor: "Фон по умолчанию",
    hovercolor: "Фон при наведении курсора",
    borderDecoration: "Оформление бордюра",
    accentBackground: "Акцентный фон",
    accentForeground: "Акцент на переднем плане",
    primaryForecolor: "Цвет по умолчанию",
    primaryForecolorLight: "Отключенный цвет",
    linesColors: "Второстепенные цвета линий",
    borderDefault: "Темнее",
    borderLight: "Зажигалка",
    fontFamily: "Семейство шрифтов",
    fontSize: "Размер шрифта",
    color: "Цвет",
    placeholderColor: "Цвет заполнителя",
    size: "Размер",
    fontWeightRegular: "Регулярный",
    fontWeightHeavy: "Тяжелый",
    fontWeightSemiBold: "Полужирный",
    fontWeightBold: "Смелый",
    scale: "Шкала",
    cornerRadius: "Радиус угла",
    surveyTitle: "Шрифт заголовка опроса",
    pageTitle: "Шрифт заголовка страницы",
    pageDescription: "Шрифт описания страницы",
    boxShadowX: "X",
    boxShadowY: "Y",
    boxShadowAddRule: "Добавить эффект тени",
    opacity: "Непрозрачность",
    boxShadowBlur: "Смазывать",
    boxShadowSpread: "Распространение",
    boxShadowDrop: "Капля",
    boxShadowInner: "Внутренний",
    questionShadow: "Эффекты тени",
    editorShadow: "Эффекты тени входного элемента",
    headerView: "Вид",
    headerViewBasic: "Основной",
    headerViewAdvanced: "Продвинутый",
    coverInheritWidthFrom: "Ширина области содержимого",
    coverInheritWidthFromSurvey: "То же, что и опрос",
    coverInheritWidthFromPage: "По размеру страницы",
    coverTextAreaWidth: "Ширина текста",
    coverBackgroundColorSwitch: "Цвет фона",
    coverBackgroundColorNone: "Никакой",
    coverBackgroundColorAccentColor: "Акцентный цвет",
    coverBackgroundColorCustom: "Обычай",
    horizontalAlignmentLeft: "Налево",
    horizontalAlignmentCenter: "Центр",
    horizontalAlignmentRight: "Правильно",
    verticalAlignmentTop: "Вверх",
    verticalAlignmentMiddle: "Середина",
    verticalAlignmentBottom: "Дно",
    logoPosition: "Положение логотипа",
    coverTitlePosition: "Титульная позиция",
    coverDescriptionPosition: "Описание Должность",
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
      green: "Зеленый"
    }
  }
};
//Uncomment this line on creating a translation file. You should replace "en" and enStrings with your locale ("fr", "de" and so on) and your variable.
editorLocalization.locales["ru"] = ruStrings;

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
// lg.expressionSetup: "" => ""
// lg.actionsSetup: "" => ""
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
// page.maxTimeToFinish: "Time limit to finish the page (in seconds)" => "Ограничение по времени завершения страницы (в секундах)"
// question.page: "Parent page" => "Родительская страница"
// pe.renderMode: "Panel display mode" => "Режим отображения панели"
// pe.noEntriesText: "Empty entries text" => "Пустой текст записей"
// pe.html: "HTML markup" => "HTML-разметка"
// pe.setValue: "Answer" => "Ответ"
// pe.dataFormat: "Image format" => "Формат изображения"
// pe.allowAddRows: "Allow adding rows" => "Разрешить добавление строк"
// pe.allowRemoveRows: "Allow removing rows" => "Разрешить удаление строк"
// pe.allowRowsDragAndDrop: "Allow row drag and drop" => "Разрешить перетаскивание строк"
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
// pe.maxOthersLength: "Maximum comment length (in characters)" => "Максимальная длина комментария (в символах)"
// pe.autoGrowComment: "Auto-expand comment area if necessary" => "При необходимости автоматически разверните область комментариев"
// pe.allowResizeComment: "Allow users to resize text areas" => "Разрешить пользователям изменять размер текстовых областей"
// pe.textUpdateMode: "Update text question value" => "Обновление значения текстового вопроса"
// pe.focusOnFirstError: "Set focus on the first invalid answer" => "Установка фокуса на первом недопустимом ответе"
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
// pe.panelPrevText: "Previous Panel button tooltip" => "Предыдущая всплывающая подсказка кнопки «Панель»"
// pe.panelNextText: "Next Panel button tooltip" => "Всплывающая подсказка кнопки «Следующая панель»"
// pe.showRangeInProgress: "Show progress bar" => "Показать индикатор выполнения"
// pe.templateTitleLocation: "Question title location" => "Местоположение заголовка вопроса"
// pe.panelRemoveButtonLocation: "Remove Panel button location" => "Удалить расположение кнопки «Панель»"
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
// pe.showClearButton: "Show the Clear button" => "Показать кнопку «Очистить»"
// pe.showNumber: "Show panel number" => "Показать номер панели"
// pe.logoWidth: "Logo width (in CSS-accepted values)" => "Ширина логотипа (в значениях, принимаемых CSS)"
// pe.logoHeight: "Logo height (in CSS-accepted values)" => "Высота логотипа (в значениях, принимаемых CSS)"
// pe.readOnly: "Read-only" => "Только для чтения"
// pe.enableIf: "Editable if" => "Редактируется, если"
// pe.emptyRowsText: "\"No rows\" message" => "Сообщение \"Нет строк\""
// pe.size: "Input field size (in characters)" => "Размер поля ввода (в символах)"
// pe.separateSpecialChoices: "Separate special choices (None, Other, Select All)" => "Отдельные специальные варианты («Нет», «Другое», «Выбрать все»)"
// pe.choicesFromQuestion: "Copy choices from the following question" => "Копирование вариантов из следующего вопроса"
// pe.choicesFromQuestionMode: "Which choices to copy?" => "Какие варианты скопировать?"
// pe.showCommentArea: "Show the comment area" => "Показать область комментариев"
// pe.commentPlaceholder: "Comment area placeholder" => "Заполнитель области комментариев"
// pe.displayRateDescriptionsAsExtremeItems: "Display rate descriptions as extreme values" => "Отображение описаний скоростей в виде экстремальных значений"
// pe.rowsOrder: "Row order" => "Порядок строк"
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
// pe.defaultValueFromLastRow: "Take default values from the last row" => "Взять значения по умолчанию из последней строки"
// pe.defaultValueFromLastPanel: "Take default values from the last panel" => "Возьмите значения по умолчанию с последней панели"
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
// addRowLocation.default: "Depends on matrix layout" => "Зависит от компоновки матрицы"
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
// theme.groupGeneral: "General" => "Общее"
// theme.groupAdvanced: "Advanced" => "Продвинутый"
// theme.themeName: "Theme" => "Тема"
// theme.themeMode: "Question appearance" => "Внешний вид вопроса"
// theme.themeModePanels: "Default" => "По умолчанию"
// theme.themeModeLightweight: "Without Panels" => "Без панелей"
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
// theme.surveyTitle: "Survey title font" => "Шрифт заголовка опроса"
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
// lg.expressionSetup: "" => ""
// lg.actionsSetup: "" => ""
// names.sharp: "Sharp" => "Острый"
// names.borderless: "Borderless" => "Без границ"
// names.flat: "Flat" => "Плоский"
// names.doubleborder: "Double Border" => "Двойная граница"
// names.layered: "Layered" => "Слоистый"
// names.solid: "Solid" => "Сплошной"
// names.threedimensional: "3D" => ".3D"
// ed.translationDeleteLanguage: "Are you certain you wish to delete all strings for this language?" => "Вы уверены, что хотите удалить все строки для этого языка?"
// ed.themeResetButton: "Reset theme settings to default" => "Сброс настроек темы по умолчанию"
// lg.expressionSetup: "" => ""
// lg.actionsSetup: "" => ""
// theme.placeholderColor: "Placeholder color" => "Цвет заполнителя"
// ed.themeSettings: "Theme Settings" => "Настройки темы"
// ed.themeSettingsTooltip: "Open theme settings" => "Откройте настройки темы"
// lg.expressionSetup: "" => ""
// lg.actionsSetup: "" => ""
// pe.resetToDefaultCaption: "Reset" => "Сброс"
// pv.file: "Local files" => "Локальные файлы"
// pv.camera: "Camera" => "Фотоаппарат"
// pv.file-camera: "Local files or camera" => "Локальные файлы или камера"
// ed.translateUsigAI: "Auto-translate All" => "Автоматический перевод всех"
// ed.translationDialogTitle: "Untranslated strings" => "Непереведенные строки"
// pe.fastEntryChoicesMinCountError: "Please enter at least {0} items" => "Пожалуйста, введите не менее {0} пунктов"
// lg.question_resetValueName: "Reset question value" => "Сбросить значение вопроса"
// lg.column_resetValue: "Reset column value" => "Сброс значения столбца"
// lg.expressionSetup: "" => ""
// lg.actionsSetup: "" => ""
// pe.markRequired: "Mark as required" => "Отметьте как обязательный"
// pe.removeRequiredMark: "Remove the required mark" => "Снимите нужную отметку"
// p.resetValueIf: "Reset value if" => "Сбросьте значение, если"

// lg.question_setValueName: "Set question value" => "Задать значение вопроса"
// lg.column_resetValueName: "Reset column value" => "Сброс значения столбца"
// lg.column_setValueName: "Set column value" => "Задание значения столбца"
// lg.setValueExpressionPlaceholder: " An expression whose result will be assigned to the target question." => " Выражение, результат которого будет присвоен целевому вопросу."
// lg.expressionSetup: "" => ""
// lg.actionsSetup: "" => ""
// survey.title: "Title" => "Титул"
// page.title: "Title" => "Титул"
// p.setValueIf: "Set value if" => "Установите значение, если"
// theme.groupHeader: "Header" => "Заголовок"
// theme.coverTitleForecolor: "Title forecolor" => "Цвет заголовка"
// theme.coverOverlapEnabled: "Overlap" => "Перекрытие"
// theme.headerView: "View" => "Вид"
// theme.headerViewBasic: "Basic" => "Основной"
// theme.headerViewAdvanced: "Advanced" => "Продвинутый"
// theme.coverInheritWidthFrom: "Content area width" => "Ширина области содержимого"
// theme.coverInheritWidthFromSurvey: "Same as survey" => "То же, что и опрос"
// theme.coverInheritWidthFromPage: "Fit to page" => "По размеру страницы"
// theme.coverTextAreaWidth: "Text width" => "Ширина текста"
// theme.coverBackgroundColorSwitch: "Background color" => "Цвет фона"
// theme.coverBackgroundColorNone: "None" => "Никакой"
// theme.coverBackgroundColorAccentColor: "Accent color" => "Акцентный цвет"
// theme.coverBackgroundColorCustom: "Custom" => "Обычай"
// theme.horizontalAlignmentLeft: "Left" => "Налево"
// theme.horizontalAlignmentCenter: "Center" => "Центр"
// theme.horizontalAlignmentRight: "Right" => "Правильно"
// theme.verticalAlignmentTop: "Top" => "Вверх"
// theme.verticalAlignmentMiddle: "Middle" => "Середина"
// theme.verticalAlignmentBottom: "Bottom" => "Дно"
// theme.logoPosition: "Logo Position" => "Положение логотипа"
// theme.coverTitlePosition: "Title Position" => "Титульная позиция"
// theme.coverDescriptionPosition: "Description Position" => "Описание Должность"
// lg.question_resetValueText: "reset value for question: {0}" => "Сброс значения для вопроса: {0}"
// lg.question_setValueText: "assign value: {1} to question: {0}" => "присвоить значение: {1} к вопросу: {0}"
// lg.column_resetValueText: "reset cell value for column: {0}" => "Сброс значения ячейки для столбца: {0}"
// lg.column_setValueText: "assign cell value: {1} to column: {0}" => "Присвойте значение ячейки: {1} столбцу: {0}"
// lg.expressionSetup: "" => ""
// lg.actionsSetup: "" => ""
// ed.surveyJsonExportButton: "Export" => "Экспорт"
// ed.surveyJsonImportButton: "Import" => "Импорт"
// ed.surveyJsonCopyButton: "Copy to clipboard" => "Копировать в буфер"
// lg.expressionSetup: "" => ""
// lg.actionsSetup: "" => ""
// pe.filePlaceholder: "File placeholder text" => "Замещающий текст файла"
// pe.photoPlaceholder: "Photo placeholder text" => "Замещающий текст фотографии"
// pe.fileOrPhotoPlaceholder: "File or photo placeholder text" => "Замещающий текст файла или фотографии"
// pehelp.filePlaceholder: "Applies when \"Source type\" is \"Local files\" or when camera is unavailable" => "Применяется, когда \"Тип источника\" имеет значение \"Локальные файлы\" или когда камера недоступна"
// pehelp.photoPlaceholder: "Applies when \"Source type\" is \"Camera\"." => "Применяется, если \"Тип источника\" имеет значение \"Камера\"."
// pehelp.fileOrPhotoPlaceholder: "Applies when \"Source type\" is \"Local files or camera\"." => "Применяется, если \"Тип источника\" имеет значение \"Локальные файлы или камера\"."
// theme.groupBackground: "Background" => "Фон"
// theme.groupAppearance: "Appearance" => "Внешность"
// theme.coverDescriptionForecolor: "Description forecolor" => "Описание форколора"