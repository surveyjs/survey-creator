//Uncomment this line on creating a translation file
import { editorLocalization } from "survey-creator-core";

export var ruStrings = {
  // strings for survey templates
  survey: {
    edit: "Редактировать",
    externalHelpLink: "Научиться создавать опросы",
    externalHelpLinkUrl:
      "Https://www.youtube.com/channel/UCH2ru9okIcooNZfpIbyq4qQ?view_as=subscriber",
    dropQuestion: "Пожалуйста, перетяните необходимый элемент из панели слева",
    copy: "Копировать",
    addToToolbox: "Добавить к инструментам",
    deletePanel: "Удалить панель",
    deleteQuestion: "Удалить вопрос",
    convertTo: "Преобразовать в",
    drag: "Перетянуть элемент"
  },
  // questionTypes
  qt: {
    default: "По умолчанию",
    checkbox: "Множественный выбор",
    comment: "Комментарий",
    imagepicker: "Выбор изображения",
    dropdown: "Выпадающий список",
    file: "Загрузка файлов",
    HTML: "HTML",
    matrix: "Матрица (единичный выбор)",
    matrixdropdown: "Матрица (множественный выбор)",
    matrixdynamic: "Матрица (динамические ряды)",
    multipletext: "Multiple Text",
    panel: "Панель (для группы вопросов)",
    paneldynamic: "Панель (динамические панели)",
    radiogroup: "Единичный выбор",
    rating: "Рейтинг (шкала)",
    text: "Текстовый ввод",
    boolean: "Булиевое значение",
    expression: "Выражение (только для чтения)",
    flowPanel: "Панель потока"
  },
  // Strings in Editor
  ed: {
    defaultLocale: "По умолчанию ({0})",
    survey: "Опросник",
    settings: "Настройки опросника",
    opjectPropertiesHeader: "Дополнительные",
    showObjectProperties: "Показать свойства объекта",
    hideObjectProperties: "Скрыть свойства объекта",
    editSurvey: "Редактировать опросник",
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
    testSurveyAgain: "Тестировать еще раз",
    testSurveyWidth: "Ширина опросника:",
    logic: "Логика опросника",
    embedSurvey: "Вставить опросник",
    translation: "Перевод",
    "property-grid": "Свойства",
    saveSurvey: "Сохранить опросник",
    designer: "Обзор конструктора",
    jsonEditor: "JSON редактор",
    undo: "Отменить",
    redo: "Повтор",
    options: "Параметры",
    generateValidJSON: "Сформировать валидный JSON",
    generateReadableJSON: "Сформировать читаемый JSON",
    toolbox: "Панель инструментов",
    toolboxGeneralCategory: "Общие",
    delSelObject: "Удалить выбранный объект",
    editSelObject: "Редактировать выбранный объект",
    correctJSON: "Пожалуйста, исправьте JSON.",
    surveyResults: "Результаты обследования:",
    surveyResultsTable: "Как таблица",
    surveyResultsJson: "Как JSON",
    resultsTitle: "Заголовок вопроса",
    resultsName: "Название вопроса",
    resultsValue: "Значение ответа",
    resultsDisplayValue: "Отображаемое значение",
    modified: "Модифицирован",
    saving: "Сохранение",
    saved: "Сохраненный",
    saveError: "Ошибка! Содержание редактора не сохранено.",
    translationAddLanguage: "Выберите дополнительный язык опросника",
    translationShowAllStrings: "Показывать все строки",
    translationShowAllPages: "Показывать все страницы",
    translationNoStrings: "Нет строк для перевода. Пожалуйста, измените фильтр.",
    translationExportToSCVButton: "Экспорт в CSV",
    translationImportFromSCVButton: "Импорт из CSV",
    translationMergeLocaleWithDefault: "Объединить {0} с локалью по умолчанию",
    translationPlaceHolder: "Перевод...",
    bold: "Жирный",
    italic: "Курсив",
    underline: "Подчеркивание",
    fpAddQuestion: "Добавить вопрос...",
    completedHtmlOnConditionItemText: "Показывать, если:",
    lg: {
      addNewItem: "Добавить новое правило",
      //Logic tab strings
      page_visibilityName: "Видимость страницы",
      panel_visibilityName: "Видимость панели",
      panel_enableName: "Панель включена/выключена",
      question_visibilityName: "Видимость вопроса",
      question_enableName: "Вопрос включен/выключен",
      question_requireName: "Вопрос обязательный",
      trigger_completeName: "Опрос завершен",
      trigger_setvalueName: "Установить значение вопроса",
      trigger_copyvalueName: "Копировать значение вопроса",
      trigger_skipName: "Перейти к вопросу",
      trigger_runExpressionName: "Запустить пользовательское выражение",
      completedHtmlOnConditionName: "Пользовательский текст 'Страницы благодарности'",

      page_visibilityDescription:
        "Сделать страницу видимой, когда логическое выражение вернет 'true'. В противном случае сделать ее невидимой.",
      panel_visibilityDescription:
        "Сделать панель видимой, когда логическое выражение вернет 'true'. В противном случае сделать ее невидимой.",
      panel_enableDescription:
        "Сделать панель и все элементы внутри нее включенной, когда логическое выражение вернет 'true'. В противном случае оставить их отключенными.",
      question_visibilityDescription:
        "Сделать вопрос видимой, когда логическое выражение вернет 'true'. В противном случае сделать ее невидимой.",
      question_enableDescription:
        "Сделать вопрос включенным, когда логическое выражение вернет 'true'. В противном случае оставить его отключенными.",
      question_requireDescription:
        "Вопрос становится обязательным, когда логическое выражение вернет 'true'.",
      trigger_completeDescription:
        "Когда логическое выражение вернет 'true', то опрос становится завершенным и конечный пользователь видит 'Страницу благодарности'.",
      trigger_setvalueDescription:
        "Когда значения вопросов, которые используются в логическом выражении, изменяются и логическое выражение возвращает значение 'true', тогда на выбранный вопрос устанавливается значение.",
      trigger_copyvalueDescription:
        "Когда значения вопросов, которые используются в логическом выражении, изменяются и логическое выражение возвращает значение 'true', тогда значение одного выбранного вопроса копируется в другой выбранный вопрос.",
      trigger_skipDescription:
        "Когда логическое выражение вернет 'true', тогда опрос переходит к/фокусируется на выбранном вопросе.",
      trigger_runExpressionDescription:
        "Когда логическое выражение возвращает 'true',тогда выполняется пользовательское выражение. Вы можете при желании установить этот результат выражения в выбранный вопрос.",
      completedHtmlOnConditionDescription:
        "Если логическое выражение возвращает 'true', то текст по умолчанию для 'Страницы благодарности' изменяется на заданный.",

      itemExpressionText: "Когда выражение: '{0}' возвращает 'true':", //{0} - the expression
      page_visibilityText: "Сделать страницу {0} видимой", //{0} page name
      panel_visibilityText: "Сделать панель {0} видимой", //{0} panel name
      panel_enableText: "Сделать панель {0} включенной", //{0} panel name
      question_visibilityText: "Сделать вопрос {0} видимым", //{0} question name
      question_enableText: "Сделать вопрос {0} включенным", //{0} question name
      question_requireText: "Сделать вопрос {0} обязательным", //{0} question name
      trigger_completeText: "Опрос становится завершенным",
      trigger_setvalueText: "Установить в вопрос: {0} значение {1}", //{0} question name, {1} setValue
      trigger_copyvalueText: "Копировать в вопрос: {0} значение из вопроса {1}", //{0} and {1} question names
      trigger_skipText: "Опрос переходит к вопросу {0}", //{0} question name
      trigger_runExpressionText1: "Выполнить выражение: '{0}'", //{0} the expression
      trigger_runExpressionText2: "и установить его результат в вопрос: {0}", //{0} question name
      completedHtmlOnConditionText:
        "Показывать пользовательский текст для 'Страницы благодарности'.",

      expressionEditorTitle: "Настройка логики выражения",

      deleteOperation: "Удалить операцию",
      addNewOperation: "Добавить новую операцию(и)",

      expressionInvalid:
        "Логическое выражение пустое или недействительное. Пожалуйста, исправьте его.",
      noOperationError: "Пожалуйста, добавьте хоть одну операцию.",
      operationInvalid: "Пожалуйста, исправьте проблемы в вашей операции(ях)."
    }
  },
  // Property names in table headers
  pel: {
    isRequired: "Обязательное?"
  },
  // Property Editors
  pe: {
    apply: "Применить",
    ok: "OK",
    save: "Сохранить",
    cancel: "Отменить",
    reset: "Сброс",
    close: "Закрыть",
    delete: "Удалить",
    add: "Добавить",
    addNew: "Добавить новый",
    addItem: "Нажмите, чтобы добавить элемент...",
    addOther: "Другое",
    addSelectAll: "Выбрать все пункты",
    addNone: "Ничего",
    removeAll: "Удалить все",
    edit: "Редактировать",
    back: "Вернуться без сохранения",
    saveAndBack: "Сохранить и вернуться",
    itemValueEdit: "Отображать, если",
    editChoices: "Редактировать выбор",
    move: "Переместить",
    empty: "<пусто>",
    notEmpty: "<редактировать значение>",
    fastEntry: "Быстрый вход",
    formEntry: "Форма входа",
    testService: "Тест услуги",
    itemSelectorEmpty: "Пожалуйста, выберите элемент",
    conditionSelectQuestion: "Выберите вопрос ...",
    conditionSelectPage: "Выбрать страницу ...",
    conditionSelectPanel: "Выберите панель ...",
    conditionValueQuestionTitle: "Пожалуйста, введите/выберите значение",
    conditionButtonAdd: "Добавить",
    conditionButtonReplace: "Заменить",
    conditionHelp:
      "Пожалуйста, введите логическое выражение. Должно возвращаться значение 'true', чтобы вопрос/страница оставались видимыми, например:.. {Вопрос1} = 'значение1' или ({Вопрос2} * {Вопрос4}> 20 и {Вопрос3} <5)",
    expressionHelp:
      "Пожалуйста, введите выражение. Вы можете использовать фигурные скобки, чтобы получить доступ к значениям вопроса.: '{Вопрос1} + {Вопрос2}', '({цена}*{количество}) * (100 - {скидка}).",
    aceEditorHelp: "Нажмите Ctrl+Пробел, чтобы получить подсказки",
    aceEditorRowTitle: "Текущая строка",
    aceEditorPanelTitle: "Текущая панель",
    showMore: "Для получения более подробной информации, пожалуйста, перейдите к документации",
    conditionShowMoreUrl:
      "Https://surveyjs.io/Documentation/LibraryParameter?id=Question¶meter=visibleIf",
    assistantTitle: "Доступные вопросы:",
    cellsEmptyRowsColumns: "Должен быть хотя бы один столбец или строка",

    propertyIsEmpty: "Пожалуйста, введите значение",
    propertyNameIsNotUnique: "Пожалуйста, введите уникальное имя",
    listIsEmpty: "Добавьте новое условие",
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
    titleName: "Заголовок пункта",
    titlePlaceholder: "Введите заголовок",
    surveyTitlePlaceholder: "Введите заголовок опроса",
    pageTitlePlaceholder: "Введите заголовок страницы",
    descriptionPlaceholder: "Введите описание",
    surveyDescriptionPlaceholder: "Введите описание опроса",
    pageDescriptionPlaceholder: "Введите описание страницы",

    hasOther: "Есть пункт 'Другое'",
    otherText: "Текст пункта 'Другое'",
    hasNone: "Нет ни одного пункта",
    noneText: "Текст пункта 'Ничего'",
    hasSelectAll: "Выбрать все пункты",
    selectAllText: "Текст пункта 'Выбрать все пункты'",
    choicesMin: "Минимальное значение для автоматически сгенерированных элементов",
    choicesMax: "Максимальное значение для автоматически сгенерированных элементов",
    choicesStep: "Разница между автоматически сгенерироваными элементами",
    name: "Название",
    title: "Заголовок",
    cellType: "Тип ячейки",
    ColCount: "Количество столбцов",
    choicesOrder: "Выбрать порядок отбора",
    visible: "Отображать?",
    isRequired: "Обязательный?",
    isAllRowRequired: "Все строки обязательны для заполнения",
    requiredErrorText: "Это поле обязательное для заполнения",
    startWithNewLine: "Начинать с новой строки?",
    rows: "Количество строк",
    PlaceHolder: "Плейсхолдер",
    showPreview: "Показать предпросмотр?",
    storeDataAsText: "Хранить содержимое файла в формате JSON как текст",
    MaxSize: "Максимальный размер файла в байтах",
    ImageHeight: "Высота изображения",
    ImageWidth: "Ширина изображения",
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
    DefaultValue: "Значение по умолчанию",
    cellsDefaultRow: "Текст ячеек по умолчанию",

    surveyEditorTitle: "Настройки опросника",
    qEditorTitle: "Изменить: {0}",

    maxLength: "Максимальная длина",
    buildExpression: "Собрать",
    editExpression: "Редактировать",
    and: "И",
    or: "ИЛИ",
    remove: "Переместить",
    addCondition: "добавить условие",

    //survey
    showTitle: "Показать/скрыть заголовок",
    locale: "Язык по умолчанию",
    simulator: "Выберите устройство",
    landscapeOrientation: "Альбомная",
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
    showTimerPanel: "Показывать панель таймера",
    showTimerPanelMode: "Показывать режим панели таймера",
    RenderMode: "Режим визуализации",
    allowAddPanel: "Разрешить добавление панели",
    allowRemovePanel: "Разрешить удаление панели",
    panelAddText: "Добавление текста на панели",
    panelRemoveText: "Удаление текста на панели",
    isSinglePage: "Показывать все элементы на одной странице",
    HTML: "HTML",
    expression: "Выражение",

    minValue: "Минимальное значение",
    maxValue: "Максимальное значение",
    mINLENGTH: "Минимальная длина",
    allowDigits: "Разрешить цифры",
    minCount: "Минимальное количество",
    maxCount: "Максимальное количество",
    regex: "Регулярное выражение",

    totalText: "Общий текст",
    totalType: "Общий тип",
    totalExpression: "Общее выражение",
    totalDisplayStyle: "Общий стиль отображения",
    totalCurrency: "Общая валюта",
    totalFormat: "Общий формат",
    // Header  adorner
    logoPosition: "Местоположение логотипа",
    addLogo: "Добавить логотип...",
    changeLogo: "Изменить логотип...",
    logoPositions: {
      none: "Разместить логотип",
      left: "Слева",
      right: "Справа",
      top: "Сверху",
      bottom: "Снизу",
    },

    tabs: {
      general: "Общие",
      fileOptions: "Параметры",
      HTML: "Редактор HTML",
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
      validators: "Валидаторы",
      navigation: "Навигация",
      question: "Вопрос",
      completedHtml: "HTML финальной страницы",
      completedHtmlOnCondition: "HTML финальной страницы при условии",
      loadingHtml: "Загрузка HTML",
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
      others: "Другие",
    },
    editProperty: "Редактировать свойство '{0}'",
    items: "[Элементы: {0}]",

    enterNewValue: "Пожалуйста, введите значение.",
    noquestions: "В опроснике нет ни одного вопроса",
    createtrigger: "Пожалуйста, создайте триггер",
    triggerOn: "О",
    triggerMakePagesVisible: "Сделать страницы видимыми:",
    triggerMakeQuestionsVisible: "Сделать элементы видимыми:",
    triggerCompleteText: "Завершить опрос, если все получися.",
    triggerNotSet: "Тригер не установлен",
    triggerRunIf: "Начать, если",
    triggerSetToName: "Изменить значение:",
    triggerFromName: "Скопировать значение из:",
    triggerRunExpression: "Выполнить это выражение:",
    triggerSetValue: "в:",
    triggerGotoName: "Перейти к вопросу:",
    triggerIsVariable: "Не помещать переменную в результат опросника.",
    triggerRunExpressionEmpty: "Пожалуйста, введите корректное выражение"
  },
  // Property values
  pv: {
    true: "true",
    false: "false",
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
    decimal: "Десятичный",
    currency: "Валюта",
    percent: "Проценты",
    firstExpanded: "Расширен первый",
    off: "Выключить",
    onPanel: "На панели",
    onSurvey: "В опроснике",
    list: "Список",
    progressTop: "progressTop",
    progressBottom: "progressBottom",
    progressTopBottom: "progressTopBottom",
    horizontal: "Горизонтально",
    vertical: "Вертикально",
    top: "Сверху",
    bottom: "Снизу",
    topBottom: "Сверху и снизу",
    left: "Слева",
    color: "Цвет",
    date: "Дата",
    datetime: "Дата и время",
    "datetime-local": "Местные дата и время",
    email: "Email",
    month: "Месяц",
    number: "Номер",
    password: "Пароль",
    range: "Диапазон",
    tel: "Телефон",
    text: "Текст",
    time: "Время",
    url: "URL",
    week: "Неделя",
    hidden: "Скрыт",
    on: "Включить",
    onPage: "На странице",
    edit: "Редактирование",
    display: "Просмотр",
    onComplete: "По завершению",
    onHidden: "По скрытию",
    all: "Все",
    page: "Страница",
    survey: "Опрос",
    onNextPage: "При переходе на следующую страницу",
    onValueChanged: "При изменении значения"
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
    lessorequal: "меньше или равно"
  },
  // Embed window
  ew: {
    angular: "Используйте версию Angular",
    jquery: "Используйте версию jQuery",
    knockout: "Используйте версию Knockout",
    react: "Используйте версию React",
    vue: "Используйте версию Vue",
    bootstrap: "Для библиотеки bootstrap",
    standard: "Без библиотеки bootstrap",
    showOnPage: "Показывать опросник на странице",
    showInWindow: "Показывать опросник в модальном окне",
    loadFromServer: "Загрузить Json опросника с сервера",
    titleScript: "Скрипты и стили",
    titleHtml: "HTML",
    titleJavaScript: "JavaScript"
  },
  // Опрос Тест
  ts: {
    selectPage: "Выберите страницу, чтобы проверить это:",
    showInvisibleElements: "Показывать скрытые элементы"
  },
  validators: {
    answercountvalidator: "Количество ответов",
    EmailValidator: "Email",
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
  // Properties
  p: {
    name: "Название",
    title: {
      name: "Название",
      title: "Оставьте его пустым, если оно такое же, как 'Название'"
    },
    navigationButtonsVisibility: "Отображение навигационных кнопок",
    questionsOrder: "Сортировка элементов на странице",
    maxTimeToFinish: "Максимальное время для завершения",

    visible: "Видимый",
    visibleIf: "Отображать, если",
    questionTitleLocation: "Расположение заголовка вопроса",
    description: "Описание",
    state: "Состояние",
    isRequired: "Обязателен",
    requiredIf: "Обязателен если",
    indent: "Отступ",
    requiredErrorText: "Это поле обязательное для заполнения",
    startWithNewLine: "Начинать с новой строки",
    innerIndent: "Внутренний отступ",
    page: "Страница",

    width: "Ширина",

    commentText: "Комментарий",
    valueName: "Название значения",
    enableIf: "Доступен при условии",
    defaultValue: "Значение по умолчанию",
    correctAnswer: "Правильный ответ",
    readOnly: "Только для чтения",
    validators: "Валидаторы",
    titleLocation: "Расположение заголовка",

    hasComment: "Есть комментарий",
    hasOther: "Есть значение 'Другое'",
    choices: "Выбор",
    choicesOrder: "Выбрать порядок выбора",
    choicesByUrl: "Выбрать из интернета",
    otherText: "Другой текстовый элемент",
    otherErrorText: "Текст ошибки поля 'Другое'",
    storeOthersAsComment: "Хранить значение поля 'Другое', как комментарий",

    label: "Ярлык",
    showTitle: "Показывать название",
    valueTrue: "Правильно",
    valueFalse: "Неправильно",

    cols: "Столбцы",
    rows: "Строки",
    placeHolder: "Плейсхолдер",

    optionsCaption: "Подпись параметров",

    expression: "Выражение",
    format: "Формат",
    displayStyle: "Стиль отображения",
    currency: "Валюта",
    useGrouping: "Использовать группировку",

    showPreview: "Показывать превью",
    allowMultiple: "Выбрать несколько",
    imageHeight: "Высота изображения",
    imageWidth: "Ширина изображения",
    storeDataAsText: "Хранить данные в виде текста",
    maxSize: "Максимальный размер",

    html: "HTML",

    columns: "Столбцы",
    cells: "Ячейки",
    isAllRowRequired: "Все строки обязательны для заполнения",

    horizontalScroll: "Горизонтальный скролл",
    cellType: "Тип ячейки",
    columnsLayout: "Макет столбцов",
    columnColCount: "Количество столбцов",
    columnMinWidth: "Минимальная ширина столбца",

    rowCount: "Количество строк",
    minRowCount: "Минимальное количество строк",
    maxRowCount: "Максимальное количество строк",
    keyName: "Название ключа",
    keyDuplicationError: "Ошибка! Такой ключ уже существует, укажите другое название.",
    confirmDelete: "Подтвердить удаление",
    confirmDeleteText: "Текст сообщения при подтверждении удаления",
    addRowLocation: "Добавить расположение строк",
    addRowText: "Добавить кнопку строки текста",
    removeRowText: "Удалить кнопку строки текста",

    items: "Элементы",
    itemSize: "Размер элементов",
    colCount: "Количество столбцов",

    templateTitle: "Заголовок шаблона",
    templateDescription: "Описание шаблона",
    allowAddPanel: "Разрешить добавление панели",
    allowRemovePanel: "Разрешить удаление панели",
    panelCount: "Количество панелей",
    minPanelCount: "Минимальное количество панелей",
    maxPanelCount: "Максимальное количество панелей",
    panelsState: "Состояние панелей",
    panelAddText: "Текст сообщения при добавлении панели",
    panelRemoveText: "Текст сообщения при удалении панели",
    panelPrevText: "Текст сообщения предыдущей панели",
    panelNextText: "Текст сообщения следующей панели",
    showQuestionNumbers: "Показывать номера вопросов",
    showRangeInProgress: "Показывать прогресса заполнения",
    renderMode: "Режим отображения",
    templateTitleLocation: "Расположение заголовка шаблона",

    rateValues: "Оценить важность(вес) опроса",
    rateMin: "Минимальный рейтинг",
    rateMax: "Максимальный рейтинг",
    rateStep: "Шаг рейтинга",
    minRateDescription: "Описание для минимального рейтинга",
    maxRateDescription: "Описание для максимального рейтинга",

    inputType: "Тип ввода",
    size: "Размер",

    locale: "Локаль",
    focusFirstQuestionAutomatic: "Фокусирование на первом вопросе при изменении страницы",
    completedHtml: "HTML финальной страницы",
    completedHtmlOnCondition: "HTML финальной страницы при условии",
    loadingHtml: "Загрузка HTML",
    triggers: "триггеры",
    cookieName: "имя Cookie",
    sendResultOnPageNext: "Показать результаты опроса на странице рядом",
    showNavigationButtons: "Показывать кнопки навигации (навигация по умолчанию)",
    showPrevButton: "Показывать кнопки 'Предыдущая страница' (пользователь может вернуться на предыдущую страницу)",
    showPageTitles: "Показывать название страницы",
    showCompletedPage: "Показывать страницу с текстом по завершению заполнения (HTML финальной страницы)",
    showPageNumbers: "Показывать номера страниц",
    questionErrorLocation: "Размещение ошибки опроса",
    showProgressBar: "Показывать прогресс заполнения",
    mode: "Режим",
    goNextPageAutomatic: "Переходить на следующую страницу автоматически при ответе на все вопросы",
    checkErrorsMode: "Режим проверки ошибок",
    clearInvisibleValues: "Очистить невидимые значения",
    startSurveyText: "Текст в кнопке 'Начать'",
    pagePrevText: "Текст в кнопке 'Предыдущая страница'",
    pageNextText: "Текст в кнопке 'Следующая страница'",
    completeText: "Текст в кнопке 'Завершить'",
    requiredText: "Символ для обязательного вопроса",
    questionStartIndex: "Начальный индекс в опросе (1, 2 или 'A', 'а')",
    questionTitleTemplate: "Шаблон названия опроса, по умолчанию: {не} {требует} {текста}.",
    firstPageIsStarted: "Первая страница опросника является стартовой страницей.",
    isSinglePage: "Показывать все элементы на одной странице",
    maxTimeToFinishPage: "Максимальное время (секунды), чтобы заполнить страницу опросника",
    showTimerPanel: "Показывать панель таймера",
    showTimerPanelMode: "Показывать режим панели таймера",

    defaultPanelValue: "Значение панели по умолчанию",
    defaultRowValue: "Значение строки по умолчанию",
    hasNone: "Нет ни одного пункта",
    noneText: "Текст пункта 'Ничего'",

    text: "Текст"
  }
};
//Uncomment this line on creating a translation file. You should replace "en" and enStrings with your locale ("fr", "de" and so on) and your variable.
editorLocalization.locales["ru"] = ruStrings;
