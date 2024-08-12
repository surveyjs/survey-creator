import { editorLocalization } from "survey-creator-core";

export var bgStrings = {
  // survey templates
  survey: {
    edit: "Редактиране",
    externalHelpLink: "Гледай и научи как се създават анкети.",
    externalHelpLinkUrl: "https://www.youtube.com/channel/UCH2ru9okIcooNZfpIbyq4qQ?view_as=subscriber",
    dropQuestion: "Моля, изтегли въпрос от кутията с инструменти.",
    addLogicItem: "Създай правило, за да персонализираш анкетата.",
    copy: "Копиране",
    duplicate: "Дубликат",
    addToToolbox: "Добавяне към кутията с инструменти",
    deletePanel: "Изтриване на панел",
    deleteQuestion: "Изтриване на въпрос",
    convertTo: "Преобразуване",
    drag: "Изтегляне на елемент",
  },
  // Creator tabs
  tabs: {
    preview: "Преглед",
    theme: "Теми",
    translation: "Превод",
    designer: "Дизайнер",
    editor: "JSON редактор",
    logic: "Логика"
  },
  // Question types
  qt: {
    default: "По подразбиране",
    checkbox: "Квадратчета за отметка",
    comment: "Дълъг текст",
    imagepicker: "Избор на изображение",
    ranking: "Класиране",
    image: "Изображение",
    dropdown: "Падащо меню",
    tagbox: "Падащо меню за множествен избор",
    file: "Качване на файл",
    html: "HTML",
    matrix: "Матрица с единичен избор",
    matrixdropdown: "Матрица с множествен избор",
    matrixdynamic: "Динамична матрица",
    multipletext: "Множество от текстови полета",
    panel: "Панел",
    paneldynamic: "Динамичен панел",
    radiogroup: "Група радиобутони",
    rating: "Рейтингова скала",
    text: "Едноредов вход",
    boolean: "Да/Не (булеви стойности)",
    expression: "Израз (само за четене)",
    signaturepad: "Подпис",
    buttongroup: "Група бутони"
  },
  toolboxCategories: {
    general: "Общ",
    choice: "Въпроси за избор",
    text: "Въпроси с въвеждане на текст",
    containers: "Контейнери",
    matrix: "Матрица с въпроси",
    misc: "Разни"
  },
  // Strings in SurveyJS Creator
  ed: {
    defaultLocale: "По подразбиране ({0})",
    survey: "Анкета",
    settings: "Настройки",
    settingsTooltip: "Отваряне на настройките",
    surveySettings: "Настройки на анкетата",
    surveySettingsTooltip: "Настройки на проучването",
    themeSettings: "Настройки на тема",
    themeSettingsTooltip: "Настройки на тема",
    showPanel: "Показване на панела",
    hidePanel: "Скриване на панела",
    prevSelected: "Избиране на предишен",
    nextSelected: "Избиране на следващ",
    prevFocus: "Фокус предишен",
    nextFocus: "Фокусирай се върху следващия",
    surveyTypeName: "Анкета",
    pageTypeName: "Страница",
    panelTypeName: "Паниел",
    questionTypeName: "Въпрос",
    columnTypeName: "Колона",
    addNewPage: "Добавяне на нова страница",
    moveRight: "Превърти надясно",
    moveLeft: "Превърти наляво",
    deletePage: "Изтриване на страница",
    editPage: "Редактиране на страница",
    edit: "Редактиране",
    newPageName: "страница",
    newQuestionName: "въпрос",
    newPanelName: "панел",
    newTextItemName: "текст",
    defaultV2Theme: "По подразбиране",
    modernTheme: "Модерен",
    defaultTheme: "По подразбиране (по наследство)",
    testSurveyAgain: "Прегледай анкетата отново",
    testSurveyWidth: "Широчина на анкетата: ",
    navigateToMsg: "Трябва да навигираш до",
    saveSurvey: "Запазване на анкетата",
    saveSurveyTooltip: "Запазване на анкетата",
    saveTheme: "Запиши темата",
    saveThemeTooltip: "Запиши темата",
    jsonHideErrors: "Скриване на грешки",
    jsonShowErrors: "Показване на грешки",
    undo: "Отмяна",
    redo: "Повтаряне",
    undoTooltip: "Отмяна на последната промяна",
    redoTooltip: "Повтаряне на последната промяна",
    showMoreChoices: "Покажи повече.",
    showLessChoices: "Покажи по-малко.",
    copy: "Копиране",
    cut: "Изрязване",
    paste: "Поставяне на копираното",
    copyTooltip: "Копиране на селектираното в клипборда",
    cutTooltip: "Изрязване на селекцията в клипборда",
    pasteTooltip: "Поставяне от клипборда",
    options: "Опции",
    generateValidJSON: "Генериране на валиден JSON",
    generateReadableJSON: "Генериране на четим JSON",
    toolbox: "Кутия с инструменти",
    "property-grid": "Свойства",
    toolboxFilteredTextPlaceholder: "Въведете за търсене...",
    toolboxNoResultsFound: "Няма намерени резултати",
    propertyGridFilteredTextPlaceholder: "Въведи за търсене...",
    propertyGridNoResultsFound: "Няма намерени резултати",
    correctJSON: "Моля, коригирай JSON.",
    surveyResults: "Резултати от анкетата ",
    surveyResultsTable: "Като таблица",
    surveyResultsJson: "Като JSON",
    resultsTitle: "Заглавие на въпроса",
    resultsName: "Име на въпроса",
    resultsValue: "Стойност на отговора",
    resultsDisplayValue: "Показване на стойност",
    modified: "Променен",
    saving: "Спасен",
    saved: "Запазен",
    propertyEditorError: "Грешка",
    saveError: "Грешка! Съдържанието на редактора не е запазено.",
    translationPropertyGridTitle: "Езикови настройки",
    themePropertyGridTitle: "Настройки на тема",
    translationLanguages: "Езици",
    translationDeleteLanguage: "Сигурни ли сте, че искате да изтриете всички низове за този език?",
    translationAddLanguage: "Изберане на език за превод",
    translationShowAllStrings: "Всички низове",
    translationShowUsedStringsOnly: "Само използвани низове",
    translationShowAllPages: "Всички страници",
    translationNoStrings: "Няма низове за превод. Моля, промени филтъра.",
    translationExportToSCVButton: "Експортиране в CSV",
    translationImportFromSCVButton: "Импортиране от CSV",
    translateUsigAI: "Автоматичен превод на всички",
    translateUsigAIFrom: "Преведи от: ",
    translationDialogTitle: "Непреведени низове",
    translationMergeLocaleWithDefault: "Обединение {0} с локалната стойност по подразбиране",
    translationPlaceHolder: "Превод...",
    translationSource: "Източник: ",
    translationTarget: "Цел: ",
    themeExportButton: "Износ",
    themeImportButton: "Внос",
    surveyJsonExportButton: "Износ",
    surveyJsonImportButton: "Внос",
    surveyJsonCopyButton: "Копиране в системния буфер",
    themeResetButton: "Връщане на настройките на тема в начално състояние по подразбиране",
    themeResetConfirmation: "Наистина ли искате да нулирате темата? Всички ваши персонализации ще бъдат загубени.",
    themeResetConfirmationOk: "Да, нулирайте темата",
    bold: "Удебелен",
    italic: "Курсив",
    underline: "Подчертан",
    addNewQuestion: "Добавяне на въпрос",
    selectPage: "Избиране на страница...",
    carryForwardChoicesCopied: "Възможностите за избор се копират от",
    choicesLoadedFromWebText: "Възможностите за избор се зареждат от уеб услуга.",
    choicesLoadedFromWebLinkText: "Отидете в настройките",
    choicesLoadedFromWebPreviewTitle: "Визуализация на заредените опции за избор",
    htmlPlaceHolder: "HTML съдържанието ще бъде тук.",
    panelPlaceHolder: "Пусни въпроса от кутията с инструменти тук.",
    surveyPlaceHolder: "Анкетата е празна. Плъзни елемент от кутията с инструменти или щракни върху бутона по-долу.",
    pagePlaceHolder: "Страницата е празна. Плъзнете елемент от кутията с инструменти или щракнете върху бутона по-долу.",
    imagePlaceHolder: "Плъзни и пусни изображение тук или щракни върху бутона по-долу и избери изображение за качване.",
    surveyPlaceHolderMobile: "Кликнете върху бутона \"Добавяне на въпрос\" по-долу, за да започнете да създавате своя формуляр.",
    pagePlaceHolderMobile: "Кликнете върху бутона \"Добавяне на въпрос\" по-долу, за да добавите нов елемент към страницата.",
    panelPlaceHolderMobile: "Кликнете върху бутона \"Добавяне на въпрос\" по-долу, за да добавите нов елемент към панела.",
    imagePlaceHolderMobile: "Кликнете върху бутона по-долу и изберете изображение за качване",
    imageChooseImage: "Избери изображение.",
    addNewTypeQuestion: "Добави {0}", //{0} is localizable question type
    chooseLogoPlaceholder: "[LOGO]",
    choices_Item: "Елемент ",
    selectFile: "Изберете файл",
    removeFile: "Премахване на файла",
    lg: {
      addNewItem: "Добавяне на ново правило",
      empty_tab: "Създай правило за персонализиране на анкетата.",
      page_visibilityName: "Показване (скриване) на страница",
      page_enableName: "Активиране (деактивиране) на страница",
      page_requireName: "Направи страницата задължителна",
      panel_visibilityName: "Показване (скриване) на панел",
      panel_enableName: "Активиране (деактивиране) на панел",
      panel_requireName: "Направи страницата задължителна",
      question_visibilityName: "Показване (скриване) на въпрос",
      question_enableName: "Активиране (деактивиране) на въпрос",
      question_requireName: "Задай въпроса като задължителен.",
      question_resetValueName: "Нулиране на стойността на въпроса",
      question_setValueName: "Задаване на стойност на въпрос",
      column_visibilityName: "Показване (скриване) на колона",
      column_enableName: "Активиране (деактивиране) на колона",
      column_requireName: "Задай колоната като задължителна.",
      column_resetValueName: "Нулиране на стойността на колона",
      column_setValueName: "Задаване на стойност на колона",
      trigger_completeName: "Попълнена анкета",
      trigger_setvalueName: "Задаване на отговор",
      trigger_copyvalueName: "Копиране на отговор",
      trigger_skipName: "Преминаване към въпрос",
      trigger_runExpressionName: "Стартиране на израза",
      completedHtmlOnConditionName: "Задай маркиране на страницата \"Анкетата е завършена.\".",
      page_visibilityDescription: "Страницата става видима, ако логическият израз върне истина. В противен случай остава невидима.",
      panel_visibilityDescription: "Панелът става видим, ако логическият израз върне истина. В противен случай остава невидим.",
      panel_enableDescription: "Панелът и всички елементи в него стават активирани, ако логическият израз върне истина. В противен случай остават деактивирани.",
      question_visibilityDescription: "Въпросът става видим, ако логическият израз върне истина. В противен случай остава невидим.",
      question_enableDescription: "Въпросът става активиран, ако логическият израз върне истина. В противен случай остава деактивиран.",
      question_requireDescription: "Въпросът става задължителен, ако логическият израз върне истина.",
      trigger_completeDescription: "Когато логическият израз върне вярно, анкетата приключва и потребителят вижда страницата 'Благодаря'.",
      trigger_setvalueDescription: "Когато стойностите на въпроса, които се използват в логическия израз, се променят и логическият израз върне вярно, тогава стойността се задава от избрания въпрос.",
      trigger_copyvalueDescription: "Когато стойностите на въпроса, които се използват в логическия израз, се променят и логическият израз върне вярно, тогава стойността на един избран въпрос се копира в друг избран въпрос.",
      trigger_skipDescription: "Когато логическият израз върне вярно, анкетата преминава / фокусира се към избрания въпрос.",
      trigger_runExpressionDescription: "Когато логическият израз върне истина, тогава се изпълнява персонализираният израз. По желание може да зададете този израз в избрания въпрос.",
      completedHtmlOnConditionDescription: "Ако логическият израз върне вярно, то текстът по подразбиране за страницата „Благодаря“ се променя с дадения.",
      itemExpressionText: "Когато логическият израз: '{0}' върне истина", //{0} - the expression
      itemEmptyExpressionText: "Ново правило",
      page_visibilityText: "направи страница {0} видима", //{0} page name
      panel_visibilityText: "направи панел {0} видим", //{0} panel name
      panel_enableText: "направи панел {0} активен", //{0} panel name
      question_visibilityText: "направи въпрос {0} видим", //{0} question name
      question_enableText: "направи въпрос {0} активен", //{0} question name
      question_requireText: "направи въпрос {0} задължителен", //{0} question name
      question_resetValueText: "нулиране на стойността за въпрос: {0}", //{0} question name.
      question_setValueText: "присвояване на стойност: {1} на въпрос: {0}",
      column_visibilityText: "направи колона {0} на въпрос {1} видима", //{0} column name, {1} question name
      column_enableText: "направи колона {0} на въпрос {1} активна", //{0} column name, {1} question name
      column_requireText: "направи колона {0} на въпрос {1} задължителна", //{0} column name, {1} question name
      column_resetValueText: "Нулиране на стойността на клетката за колона: {0}", //{0} column name
      column_setValueText: "Присвояване на стойност на клетка: {1} на колона: {0}", //{0} column name and {1} setValueExpression
      setValueExpressionPlaceholder: " Израз, чийто резултат ще бъде присвоен на целевия въпрос.",
      trigger_completeText: "анкетата е завършена",
      trigger_setvalueText: "задай на въпрос: {0} стойност {1}", //{0} question name, {1} setValue
      trigger_setvalueEmptyText: "ясна стойност на въпроса: {0}", //{0} question name
      trigger_copyvalueText: "копирай във въпрос: {0} стойност от въпрос {1}", //{0} and {1} question names
      trigger_skipText: "анкетата преминава към въпрос {0}", //{0} question name
      trigger_runExpressionText1: "стартов израз: '{0}'", //{0} the expression
      trigger_runExpressionText2: " и постави резултата му под въпрос: {0}", //{0} question name
      completedHtmlOnConditionText: "показване на персонализиран текст за страницата „Благодарности“.",
      showAllQuestions: "Всички въпроси",
      showAllActionTypes: "Всички типове действие",
      conditions: "Условие/условия",
      actions: "Действие/действия",
      expressionEditorTitle: "Дефинирай условието/условията",
      actionsEditorTitle: "Дефинирай действието/действията",
      deleteAction: "Изтриване на действие",
      addNewAction: "Добавяне на действие",
      selectedActionCaption: "Избиране на действие...",
      expressionInvalid: "Логическият израз е празен или невалиден. Моля, коригирайте го.",
      noActionError: "Моля, добави поне едно действие.",
      actionInvalid: "Моля, отстрани проблемите във вашите действия.",
      uncompletedRule_title: "Сигурен ли си, че искаш да напуснеш раздела?",
      uncompletedRule_text: "Едно или повече логически правила са незавършени. Ако напуснеш раздела, тези промени, които не може да бъдат приложени, ще изчезнат. Сигурен ли си, че искаш да напуснеш раздела?",
      uncompletedRule_apply: "Да",
      uncompletedRule_cancel: "Не, искам да попълня правилата."
    }
  },
  // Property Editors
  pe: {
    panel: {
      name: "Име на панела",
      title: "Заглавие на панела",
      description: "Описание на панела",
      visibleIf: "Направете панела видим, ако",
      requiredIf: "Направете панела необходим, ако",
      questionsOrder: "Ред на въпросите в рамките на панела",
      page: "Родителска страница",
      startWithNewLine: "Показване на панела на нов ред",
      state: "Състояние на свиване на панела",
      width: "Ширина на вградения панел",
      minWidth: "Минимална ширина на панела",
      maxWidth: "Максимална ширина на панела",
      showNumber: "Числени панели"
    },
    paneldynamic: {
      name: "Име на панела",
      title: "Заглавие на панела",
      description: "Описание на панела",
      visibleIf: "Направете панела видим, ако",
      requiredIf: "Направете панела необходим, ако",
      page: "Преместване на панела на страница",
      startWithNewLine: "Показване на панела на нов ред",
      state: "Състояние на свиване на панела",
      width: "Ширина на вградения панел",
      minWidth: "Минимална ширина на панела",
      maxWidth: "Максимална ширина на панела",
      confirmDelete: "Потвърждаване изтриването на панел",
      templateDescription: "Модел за описание на панела",
      templateTitle: "Модел на заглавие на панел",
      noEntriesText: "Празен текст на панел",
      templateTabTitle: "Шаблон на заглавие на раздел",
      tabTitlePlaceholder: "Контейнер за заглавие на раздел",
      templateVisibleIf: "Направете отделен панел видим, ако",
      hideNumber: "Скриване на номера на панела",
      titleLocation: "Подравняване на заглавието на панела",
      descriptionLocation: "Подравняване на описанието на панела",
      templateTitleLocation: "Подравняване на заглавието на въпроса",
      templateErrorLocation: "Подравняване на съобщение за грешка",
      newPanelPosition: "Ново местоположение на панела",
      keyName: "Предотвратяване на дублиращи се отговори в следния въпрос"
    },
    question: {
      name: "Име на въпрос",
      title: "Заглавие на въпроса",
      description: "Описание на въпроса",
      visibleIf: "Направете въпроса видим, ако",
      requiredIf: "Задайте въпроса, който е необходим, ако",
      page: "Родителска страница",
      state: "Състояние на свиване на полето за въпроси",
      hideNumber: "Скриване на номера на въпроса",
      titleLocation: "Подравняване на заглавието на въпроса",
      descriptionLocation: "Подравняване на описанието на въпроса",
      errorLocation: "Подравняване на съобщение за грешка",
      indent: "Увеличаване на вътрешния отстъп",
      width: "Ширина на вградения въпрос",
      minWidth: "Минимална ширина на въпросите",
      maxWidth: "Максимална ширина на въпроса",
      textUpdateMode: "Актуализиране на стойността на входното поле"
    },
    signaturepad: {
      signatureWidth: "Ширина на областта за подпис",
      signatureHeight: "Височина на областта за подпис",
      signatureAutoScaleEnabled: "Автоматично мащабиране на областта за подписи",
      showPlaceholder: "Показване на контейнера",
      placeholder: "Текст в контейнер",
      placeholderReadOnly: "Текст в контейнер в режим само за четене или визуализация",
      allowClear: "Показване на бутона \"Изчисти\" в областта за подписи",
      penMinWidth: "Минимална ширина на писалката",
      penMaxWidth: "Максимална ширина на перото",
      penColor: "Цвят на щрихите"
    },
    comment: {
      rows: "Височина на входното поле (в редове)"
    },
    showQuestionNumbers: "Номериране на въпросите",
    questionStartIndex: "Начален индекс (цифра или буква)",
    expression: {
      name: "Име на израз",
      title: "Заглавие на израза",
      description: "Описание на израза",
      expression: "Изразяване"
    },
    trigger: {
      expression: "Изразяване"
    },
    calculatedvalue: {
      expression: "Изразяване"
    },
    // survey templates
    survey: {
      title: "Заглавие",
      description: "Описание на проучването"
    },
    page: {
      name: "Име на страница",
      title: "Заглавие",
      description: "Описание на страницата",
      visibleIf: "Направете страницата видима, ако",
      requiredIf: "Направете страницата задължителна, ако",
      maxTimeToFinish: "Времево ограничение за завършване на страницата (в секунди)",
      questionsOrder: "Ред на въпросите на страницата"
    },
    matrixdropdowncolumn: {
      name: "Име на колона",
      title: "Заглавие на колоната",
      isUnique: "Предотвратяване на дублиращи се отговори",
      width: "Ширина на колона",
      minWidth: "Минимална ширина на колоната",
      rows: "Височина на входното поле (в редове)",
      visibleIf: "Направете колоната видима, ако",
      requiredIf: "Направете колоната задължителна, ако",
      showInMultipleColumns: "Всяка опция в отделна колона"
    },
    multipletextitem: {
      name: "Име",
      title: "Заглавие"
    },
    masksettings: {
      saveMaskedValue: "Запазване на маскирана стойност в резултатите от проучването"
    },
    patternmask: {
      pattern: "Шаблон на стойност"
    },
    datetimemask: {
      min: "Минимална стойност",
      max: "Максимална стойност"
    },
    numericmask: {
      allowNegativeValues: "Позволяване на отрицателни стойности",
      thousandsSeparator: "Разделител за хиляди",
      decimalSeparator: "Десетичен разделител",
      precision: "Точност на стойността",
      min: "Минимална стойност",
      max: "Максимална стойност"
    },
    currencymask: {
      prefix: "Валутен префикс",
      suffix: "Валутен суфикс"
    },
    imageHeight: "Височина на изображението",
    imageWidth: "Широчина на изображението",
    valueName: "Съхранявай отговорите в следното JSON поле.",
    rateDescriptionLocation: "Подравняване на етикети",
    size: "Размер на въвеждане (в знаци)",
    cellErrorLocation: "Подравняване на съобщение за грешка в клетка",
    enabled: "Разрешено",
    disabled: "Инвалид",
    inherit: "Наследявам",
    apply: "Приложи",
    ok: "ДА",
    save: "Запази",
    clear: "Изчисти",
    saveTooltip: "Запази",
    cancel: "Откажи",
    set: "Окомплектовай",
    reset: "Нулиране",
    change: "Промени",
    refresh: "Опресни",
    close: "Затвори",
    delete: "Изтрий",
    add: "Добави",
    addNew: "Добави нов",
    addItem: "Кликни за добавяне на елемент...",
    removeItem: "Кликни за изтриване на елемент...",
    dragItem: "Плъзни елемента",
    addOther: "Друг",
    addSelectAll: "Избери всички",
    addNone: "Нито един",
    removeAll: "Премахни всички",
    edit: "Редактиране",
    back: "Връщане без запазване",
    backTooltip: "Връщане без запазване",
    saveAndBack: "Запазване и връщане",
    saveAndBackTooltip: "Запазване и връщане",
    doneEditing: "Завършен",
    editChoices: "Редактиране на избора",
    showChoices: "Показване на избора",
    move: "Ход",
    empty: "<празен>",
    emptyValue: "Стойността е празна.",
    fastEntry: "Ръчно въвеждане",
    fastEntryNonUniqueError: "Стойността '{0}' не е уникална.",
    fastEntryChoicesCountError: "Моля, ограничи броя на елементите от {0} до {1}",
    fastEntryChoicesMinCountError: "Моля, въведете поне {0} артикула",
    fastEntryPlaceholder: "Може да зададеш данни в следния формат:стойност1|текстстойност2",
    formEntry: "Въвеждане на формуляр",
    testService: "Тествай услугата.",
    itemSelectorEmpty: "Моля, избери елемент.",
    conditionActionEmpty: "Моля, избери действие.",
    conditionSelectQuestion: "Избери въпрос...",
    conditionSelectPage: "Избери страница...",
    conditionSelectPanel: "Избери панел...",
    conditionValueQuestionTitle: "Моля, въведи/избери стойността.",
    aceEditorHelp: "Натисни ctrl+space за подсказка за окомплектоване на израза.",
    aceEditorRowTitle: "Текущ ред",
    aceEditorPanelTitle: "Текущ панел",
    showMore: "За повече подробности, моля, провери документацията.",
    assistantTitle: "Налични въпроси",
    cellsEmptyRowsColumns: "Трябва да има поне една колона или ред.",
    showPreviewBeforeComplete: "Визуализирай отговорите, преди да изпратиш анкетата.",
    overridingPropertyPrefix: "Зададено от ",
    resetToDefaultCaption: "Проучване",
    propertyIsEmpty: "Моля, въведи стойност.",
    propertyIsNoUnique: "Моля, въведи уникална стойност.",
    propertyNameIsNotUnique: "Моля, въведи уникално име.",
    propertyNameIsIncorrect: "Не използвай запазени думи, като: \"елемент\", \"избор\", \"панел\", \"ред\".",
    listIsEmpty: "Все още няма добавени елементи.",
    "listIsEmpty@choices": "Все още няма добавени възможности за избор.",
    "listIsEmpty@columns": "Все още нямате колони",
    "listIsEmpty@rows": "Все още нямате никакви редове",
    "listIsEmpty@validators": "Все още нямате правила за валидиране",
    "listIsEmpty@calculatedValues": "Все още нямате никакви персонализирани променливи",
    "listIsEmpty@triggers": "Все още нямате никакви тригери",
    "listIsEmpty@navigateToUrlOnCondition": "Все още нямате връзки",
    "addNew@choices": "Добавяне на възможност за избор",
    "addNew@columns": "Добавяне на нова колона",
    "addNew@rows": "Добавяне на нов ред",
    "addNew@validators": "Добавяне на ново правило",
    "addNew@calculatedValues": "Добавяне на нова променлива",
    "addNew@triggers": "Добавяне на нов превключвател",
    "addNew@navigateToUrlOnCondition": "Добавяне на нов URL адрес",
    expressionIsEmpty: "Изразът е празен.",
    value: "Стойност",
    text: "Текст",
    rowid: "Идентификатор на ред",
    imageLink: "URL на изображение или видео",
    columnEdit: "Редактиране на колона: {0}",
    itemEdit: "Редактиране на елемент: {0}",
    url: "URL на услугата",
    path: "Път до данни в услугата",
    choicesbyurl: {
      url: "URL адрес на уеб услуга",
      valueName: "Вземи стойности от следното JSON поле."
    },
    titleName: "Вземи текстове за показване от следното JSON поле.",
    imageLinkName: "Вземи URL адреси на изображения от следното JSON поле.",
    allowEmptyResponse: "Разреши празен отговор.",
    titlePlaceholder: "Заглавие",
    surveyTitlePlaceholder: "Заглавие на анкетата",
    pageTitlePlaceholder: "Страница {num}",
    descriptionPlaceholder: "Описание",
    surveyDescriptionPlaceholder: "Описание",
    pageDescriptionPlaceholder: "Описание",
    textWrapEnabled: "Опции за обтичане",
    showOtherItem: "Достъп до опция Друго",
    otherText: "Текст на опция Друго",
    showNoneItem: "Достъп до опция Няма",
    showRefuseItem: "Разрешаване на опцията \"Отказ на отговор\"",
    showDontKnowItem: "Разрешаване на опцията \"Не знам\"",
    noneText: "Текст на опция Няма",
    showSelectAllItem: "Достъп до опция Избери всички",
    selectAllText: "Текст на опция Избери всички",
    choicesMin: "Минимална стойност за автоматично генерирани елементи",
    choicesMax: "Максимална стойност за автоматично генерирани елементи",
    choicesStep: "Стъпка за автоматично генерирани елементи",
    name: "Име",
    title: "Заглавие",
    cellType: "Тип на клетката",
    colCount: "Брой колони",
    choicesOrder: "Ред на сортиране на избора",
    visible: "Видим",
    isRequired: "Задължителен",
    markRequired: "Маркирай както се изисква",
    removeRequiredMark: "Премахване на необходимия знак",
    isAllRowRequired: "Изискване за отговор на всички редове",
    eachRowUnique: "Предотвратяване на дублиращи се отговори в редове",
    requiredErrorText: "\"Задължително\" съобщение за грешка",
    startWithNewLine: "Показване на въпроса на нов ред",
    rows: "Редове",
    cols: "Колони",
    placeholder: "Контейнер за област за въвеждане",
    showPreview: "Показване на областта за визуализация",
    storeDataAsText: "Съхранявай съдържанието на файла в JSON резултат като текст",
    maxSize: "Максимален размер на файла (в байтове)",
    rowCount: "Брой редове",
    columnLayout: "Разположение на колоните",
    addRowLocation: "Добавяне на местоположение на бутона за ред",
    transposeData: "Транспониране на редове в колони",
    addRowText: "Добавяне на текст на бутона за ред",
    removeRowText: "Премахване на текста на бутона за ред",
    rateMin: "Минимална стойност на оценката",
    rateMax: "Максимална стойност на оценката",
    rateStep: "Стъпка на оценката",
    minRateDescription: "Описание на минималната оценка",
    maxRateDescription: "Описание на максималната оценка",
    inputType: "Тип на въвеждане",
    optionsCaption: "Контейнер за опция",
    defaultValue: "Отговор по подразбиране",
    cellsDefaultRow: "Текстове по подразбиране",
    surveyEditorTitle: "Редактиране на настройките на анкетата",
    qEditorTitle: "Редактиране: {0}",
    maxLength: "Максимална дължина (в знаци)",
    buildExpression: "Изграждане",
    editExpression: "Редактиране",
    and: "и",
    or: "или",
    remove: "Премахване",
    addCondition: "Добавяне на условие",
    emptyLogicPopupMessage: "Избери въпрос, за да започне конфигурирането на условия.",
    if: "Ако",
    then: "то",
    setToName: "Целеви въпрос",
    fromName: "Въпрос за копиране на отговора",
    gotoName: "Въпрос, към който да се премине",
    ruleIsNotSet: "Правилото е некоректно.",
    includeIntoResult: "Включете в резултатите от анкетата",
    showTitle: "Показване на заглавието",
    expandCollapseTitle: "Разширяване/свиване на заглавие",
    locale: "Език на анкетата",
    simulator: "Изберете тип устройство",
    landscapeOrientation: "Превключване към пейзажна ориентация",
    portraitOrientation: "Превключване към портретна ориентация",
    mode: "Редактируемо или само за четене",
    clearInvisibleValues: "Изчистване на невидими стойности",
    cookieName: "Име на бисквитката",
    sendResultOnPageNext: "Запазване на частични резултати от анкетата в процес на изпълнение",
    storeOthersAsComment: "Съхранявай стойността на Други в отделно поле",
    showPageTitles: "Показване на заглавия на страници",
    showPageNumbers: "Показване на номера на страници",
    pagePrevText: "Текст на бутона за предишна страница",
    pageNextText: "Текст на бутона за следваща страница",
    completeText: "Текст на бутона за попълнена анкета",
    previewText: "Текст на бутона за визуализация на отговорите",
    editText: "Редактиране текста на бутона за отговор",
    startSurveyText: "Текст на бутона за стартиране на анкетата",
    showNavigationButtons: "Разположение на навигационните бутони",
    showPrevButton: "Показване на бутона Предишна страница",
    firstPageIsStarted: "Първата страница е начална.",
    showCompletedPage: "Показване на страницата Завършена анкета",
    goNextPageAutomatic: "Продължи автоматично към следващата страница.",
    allowCompleteSurveyAutomatic: "Попълване на анкетата автоматично",
    showProgressBar: "Местоположение на лентата за напредък",
    questionTitleLocation: "Местоположение на заглавието на въпроса",
    questionTitleWidth: "Ширина на заглавието на въпроса",
    requiredText: "Задължителен символ(и)",
    questionTitleTemplate: "Шаблонът за заглавие на въпрос по подразбиране е:: '{no}. {require} {title}'",
    questionErrorLocation: "Местоположение на съобщението за грешка",
    focusFirstQuestionAutomatic: "Постави първия въпрос на нова страница",
    questionsOrder: "Подреждане на елементите на страницата",
    maxTimeToFinish: "Време за завършване на анкетата (в секунди)",
    maxTimeToFinishPage: "Времево ограничение за завършване на една страница (в секунди)",
    showTimerPanel: "Местоположение на таймера",
    showTimerPanelMode: "Режим на таймера",
    renderMode: "Режим на показване на панела",
    allowAddPanel: "Разрешаване добавянето на панели",
    allowRemovePanel: "Разрешаване премахването на панели",
    panelAddText: "Добавяне на текст на панелен бутон",
    panelRemoveText: "Премахване на текст на панелен бутон",
    isSinglePage: "Показване на всички елементи на една страница",
    html: "HTML маркиране",
    setValue: "Отговор",
    dataFormat: "Формат на изображението",
    allowAddRows: "Разрешаване добавянето на редове",
    allowRemoveRows: "Разрешаване изтриването на редове",
    allowRowsDragAndDrop: "Разрешаване плъзгането и пускане на ред",
    responsiveImageSizeHelp: "Не се прилага, ако се посочи точна широчина или височина на изображението.",
    minImageWidth: "Минимална широчина на изображението",
    maxImageWidth: "Максимална широчина на изображението",
    minImageHeight: "Минимална височина на изображението",
    maxImageHeight: "Максимална височина на изображението",
    minValue: "Минимална стойност",
    maxValue: "Максимална стойност",
    minLength: "Минимална дължина (в символи)",
    allowDigits: "Разрешаване на цифри",
    minCount: "Минимален брой",
    maxCount: "Максимален брой",
    regex: "Регулярен израз",
    surveyvalidator: {
      text: "Съобщение за грешка",
      expression: "Израз за валидиране"
    },
    totalText: "Общ текст в реда",
    totalType: "Общ вид",
    totalExpression: "Тотален израз",
    totalDisplayStyle: "Стил на показване на обща стойност",
    totalCurrency: "Валута",
    totalFormat: "Форматиран низ",
    logo: "Лого (URL или base64-кодиран низ)",
    questionsOnPageMode: "Структура на анкетата",
    maxTextLength: "Максимална дължина на отговора (в символи)",
    maxOthersLength: "Максимална дължина на коментара (в символи)",
    commentAreaRows: "Височина на областта за коментари (в редове)",
    autoGrowComment: "Автоматично разширяване на областта за коментари, ако е необходимо",
    allowResizeComment: "Позволява на потребителите да преоразмеряват текстови области",
    textUpdateMode: "Актуализиране стойността на текстовия въпрос",
    maskType: "Тип маска за въвеждане",
    maskTypes: {
      none: "Никой",
      patternmask: "Шарка",
      numericmask: "Цифров",
      datetimemask: "Дата и час",
      currencymask: "Валута"
    },
    focusOnFirstError: "Фокусиране върху първия невалиден отговор",
    checkErrorsMode: "Стартиране на валидацията",
    validateVisitedEmptyFields: "Проверка на празни полета при загубен фокус",
    navigateToUrl: "Навигирай до URL",
    navigateToUrlOnCondition: "Динамичен URL",
    completedBeforeHtml: "Маркиране за показване дали потребителят вече е попълнил тази анкета",
    completedHtml: "Анкета Пълно маркиране на страница",
    completedHtmlOnCondition: "Динамично проучване Пълно маркиране на страницата",
    loadingHtml: "Маркиране за показване, докато се зарежда моделът на анкетата",
    commentText: "Текст в полето за коментар",
    autocomplete: "Тип автодовършване",
    labelTrue: "\"Вярно\" етикет",
    labelFalse: "\"Невярно\" етикет",
    allowClear: "Показване на бутона Изчистване",
    searchMode: "Режим на търсене",
    displayStyle: "Стил за изобразяване на стойността",
    format: "Форматиран низ",
    maximumFractionDigits: "Максимален брой дробни цифри",
    minimumFractionDigits: "Минимален брой дробни цифри",
    useGrouping: "Показване на разделители за групиране",
    allowMultiple: "Разрешаване на множество файлове",
    allowImagesPreview: "Преглед на изображения",
    acceptedTypes: "Допустими типове файлове",
    waitForUpload: "Изчакай да завърши качването.",
    needConfirmRemoveFile: "Потвърждаване изтриването на файл",
    detailPanelMode: "Местоположение на детайлния панел",
    minRowCount: "Минимален брой редове",
    maxRowCount: "Максимален брой редове",
    confirmDelete: "Потвърждаване изтриването на реда",
    confirmDeleteText: "Съобщение за потвърждаване",
    panelCount: "Първоначален брой панели",
    minPanelCount: "Минимален брой панели",
    maxPanelCount: "Максимален брой панели",
    panelsState: "Разширено състояние на вътрешния панел",
    panelPrevText: "Подсказка към бутона за предишен панел",
    panelNextText: "Подсказка към бутона за следващ панел",
    showRangeInProgress: "Показване на лентата на напредък",
    panelRemoveButtonLocation: "Премахване местоположението на бутона на панела",
    hideIfRowsEmpty: "Скриване на въпроса, ако няма редове",
    hideColumnsIfEmpty: "Скриване на колони, ако няма редове",
    rateValues: "Персонализирани стойности на оценката",
    rateCount: "Брой на оценките",
    autoGenerate: "Как се задават стойности на оценката?",
    hideIfChoicesEmpty: "Показване въпроса, ако не съдържа избор",
    minWidth: "Минимална широчина (в CSS-допустими стойности)",
    maxWidth: "Максимална широчина (в CSS-допустими стойности)",
    width: "Широчина (в CSS-допустими стойности)",
    showHeader: "Показване заглавията на колоните",
    horizontalScroll: "Показване на хоризонталната лента за превъртане",
    columnMinWidth: "Минимална широчина на колоната (в CSS-допустими стойности)",
    rowTitleWidth: "Широчина на заглавния ред (в CSS-допустими стойности)",
    valueTrue: "\"Вярно\" стойност",
    valueFalse: "\"Грешно\" стойност",
    minErrorText: "\"Стойността е под минимума.\" съобщение за грешка",
    maxErrorText: "\"Стойността надвишава максимума.\" съобщение за грешка",
    otherErrorText: "\"Празен коментар\" съобщение за грешка",
    keyDuplicationError: "\"Неуникална стойност на ключ\" съобщение за грешка",
    minSelectedChoices: "Минимален избор",
    maxSelectedChoices: "Максимален брой избрани",
    showClearButton: "Показване на бутона Изчистване (Clear)",
    logoWidth: "Широчина на логото (в CSS-допустими стойности)",
    logoHeight: "Височина на логото (в CSS-допустими стойности)",
    readOnly: "Само за четене",
    enableIf: "Може да се редактира",
    emptyRowsText: "\"Без редове\" съобщение",
    separateSpecialChoices: "Разделяне със специален избор (Не, Други, Избери всички)",
    choicesFromQuestion: "Копиране изборите от следния въпрос",
    choicesFromQuestionMode: "Кои избори да се копират?",
    progressBarShowPageTitles: "Показване на заглавията на страниците в лентата за напредъка",
    progressBarShowPageNumbers: "Показване на номерата на страниците в лентата за напредъка",
    showCommentArea: "Показване на областта за коментари",
    commentPlaceholder: "Заместител на областта за коментари",
    displayRateDescriptionsAsExtremeItems: "Показване описанията на скоростта като екстремни стойности",
    rowsOrder: "Поредност на редовете",
    columnsLayout: "Поредност на колоните",
    columnColCount: "Брой вложени колони",
    correctAnswer: "Правилен отговор",
    defaultPanelValue: "Стойности по подразбиране",
    cells: "Текст в клетката",
    fileInputPlaceholder: "Избор на файл или поставяне на връзка към файл...",
    keyName: "Ключова колона",
    itemvalue: {
      visibleIf: "Направете опцията видима, ако",
      enableIf: "Направете опцията избираема, ако"
    },
    "itemvalue@rows": {
      visibleIf: "Направете реда видим, ако",
      enableIf: "Направете реда редактируем, ако"
    },
    imageitemvalue: {
      text: "Алтернативен текст"
    },
    logoPosition: "Позиция на логото",
    addLogo: "Добавяне на лого...",
    changeLogo: "Промяна на логото...",
    logoPositions: {
      none: "Изтриване на логото",
      left: "Вляво",
      right: "Вдясно",
      top: "Отгоре",
      bottom: "Отдолу"
    },
    // Creator tabs
    tabs: {
      panel: {
        layout: "Оформление на панела"
      },
      general: "Общ (главен)",
      fileOptions: "Настройки",
      html: "HTML Редактор",
      columns: "Колони",
      rows: "редове",
      choices: "Избори",
      items: "Елементи",
      visibleIf: "Видим",
      enableIf: "Редактируем",
      requiredIf: "Задължителен",
      rateValues: "Оценяване на стойностите",
      choicesByUrl: "Избор от услугата RESTful",
      matrixChoices: "Избор по подразбиране",
      multipleTextItems: "Въвеждане на текст",
      numbering: "Номерация",
      validators: "Валидатори",
      navigation: "Навигация",
      question: "Въпрос",
      pages: "Страници",
      timer: "Таймер/Тест",
      calculatedValues: "Изчислени стойности",
      triggers: "Тригери",
      templateTitle: "Шаблон за заглавие",
      totals: "Общо",
      logic: "Логика",
      mask: "Настройки на маската за въвеждане",
      layout: {
        panel: "Оформление",
        question: "Оформление",
        base: "Оформление"
      },
      data: "Данни",
      validation: "Валидиране",
      cells: "Текст в клетката",
      showOnCompleted: "Проучването е завършено.",
      logo: "Лого в заглавието на анкетата",
      slider: "Плъзгач",
      expression: "Израз (фраза)",
      questionSettings: "Настройки на въпроси",
      header: "Заглавка",
      background: "Фон",
      appearance: "Външен вид",
      others: "Други"
    },
    editProperty: "Редактиране на свойства '{0}'",
    items: "Елементи",
    choicesVisibleIf: "Изборите са видими, ако",
    choicesEnableIf: "Изборите може да се избират, ако",
    columnsEnableIf: "Колоните са видими, ако",
    rowsEnableIf: "Редовете са видими, ако",
    innerIndent: "Добавяне на вътрешни отстъпи",
    defaultValueFromLastRow: "Вземане стойностите по подразбиране от последния ред",
    defaultValueFromLastPanel: "Вземане стойностите по подразбиране от последния панел",
    enterNewValue: "Моля, въведете стойността.",
    noquestions: "В анкетата няма въпроси.",
    createtrigger: "Моля, създайте тригер.",
    titleKeyboardAdornerTip: "Натиснете бутона за въвеждане, за да редактирате.",
    keyboardAdornerTip: "Натиснете бутона за въвеждане, за да редактирате елемент, натиснете бутона за изтриване, за да изтриете елемент, натиснете alt плюс стрелка нагоре или стрелка надолу, за да преместите елемент.",
    triggerOn: "На ",
    triggerMakePagesVisible: "Направете страниците видими.",
    triggerMakeQuestionsVisible: "Направете елементите видими.",
    triggerCompleteText: "Попълнете анкетата, ако можете.",
    triggerNotSet: "Тригерът не е зададен.",
    triggerRunIf: "Работете, ако",
    triggerSetToName: "Промяна на стойността на: ",
    triggerFromName: "Копиране на стойност от: ",
    triggerRunExpression: "Изпълнете този израз.",
    triggerSetValue: "до: ",
    triggerGotoName: "Отидете на въпроса.",
    triggerIsVariable: "Не поставяйте променливата в резултата от анкетата.",
    triggerRunExpressionEmpty: "Моля, въведете валиден израз.",
    emptyExpressionPlaceHolder: "Въведете израз тук...",
    noFile: "Няма избран файл.",
    clearIfInvisible: "Изчистване на стойността, ако въпросът се скрие",
    valuePropertyName: "Име на свойството стойност",
    searchEnabled: "Търсенето разрешено",
    hideSelectedItems: "Скриване на избраните елементи",
    closeOnSelect: "Затворете падащото меню след избор.",
    verticalAlign: "Вертикално подравняване",
    alternateRows: "Алтернативни редове",
    columnsVisibleIf: "Колоните се виждат, ако",
    rowsVisibleIf: "Редовете се виждат, ако",
    otherPlaceholder: "Заместител на областта за коментари",
    filePlaceholder: "Текст в контейнер за файл",
    photoPlaceholder: "Текст в контейнер за снимка",
    fileOrPhotoPlaceholder: "Текст в контейнер за файл или снимка",
    rateType: "Тип на тарифата",
    url_placeholder: "Напр.: https://api.example.com/books",
    path_placeholder: "Пример: категории.фантастика",
    questionStartIndex_placeholder: "Напр.: а)",
    width_placeholder: "Пример: 6in",
    minWidth_placeholder: "Примерно: 600px",
    maxWidth_placeholder: "Примерно: 50%",
    imageHeight_placeholder: "Автоматично",
    imageWidth_placeholder: "Автоматично",
    theme: {
      themeName: "Тема",
      isPanelless: "Външен вид на въпроса",
      editorPanel: "Фон и радиус на ъгъла",
      questionPanel: "Фон и радиус на ъгъла",
      primaryColor: "Цвят за акцентиране",
      panelBackgroundTransparency: "Непрозрачност на фона на панела",
      questionBackgroundTransparency: "Непрозрачност на фона на въпроса",
      fontSize: "Размер на шрифта",
      scale: "Мащаб",
      cornerRadius: "Радиус на ъгъла",
      pageTitle: "Шрифт на заглавието",
      pageDescription: "Шрифт за описание",
      questionTitle: "Шрифт на заглавието",
      questionDescription: "Шрифт за описание",
      editorFont: "Шрифт",
      backgroundOpacity: "Непрозрачност",
      "--sjs-font-family": "Семейство шрифтове",
      "--sjs-general-backcolor-dim": "Цвят на фона",
      "--sjs-primary-backcolor": "Фон за акцентиране",
      "--sjs-primary-forecolor": "Акцентиране на преден план",
      "--sjs-special-red": "Съобщения за грешки",
      "--sjs-shadow-small": "Ефекти на сянка",
      "--sjs-shadow-inner": "Ефекти на сянка",
      "--sjs-border-default": "Цветове"
    },
    "header@header": {
      headerView: "Изглед",
      logoPosition: "Позиция на логото",
      surveyTitle: "Шрифт за заглавие на проучване",
      surveyDescription: "Шрифт за описание на проучването",
      headerTitle: "Шрифт за заглавие на проучване",
      headerDescription: "Шрифт за описание на проучването",
      inheritWidthFrom: "Ширина на областта на съдържанието",
      textAreaWidth: "Ширина на текста",
      backgroundColorSwitch: "Цвят на фона",
      backgroundImage: "Фоново изображение",
      backgroundImageOpacity: "Непрозрачност",
      overlapEnabled: "Припокриване",
      logoPositionX: "Позиция на логото",
      titlePositionX: "Позиция на заглавието",
      descriptionPositionX: "Описание позиция"
    }
  },
  // Property values
  pv: {
    "true": "вярно",
    "false": "невярно",
    file: "Локални файлове",
    camera: "Камера",
    "file-camera": "Локални файлове или камера",
    inherit: "Наследяване",
    show: "Видим",
    hide: "Скрит",
    default: "Наследен",
    initial: "Първоначален",
    random: "Произволен",
    collapsed: "Сгънат",
    expanded: "Разширен",
    none: "Нито един",
    asc: "Възходящ",
    desc: "Низходящ",
    indeterminate: "Неопределен",
    selected: "Избран",
    unselected: "Неизбран",
    decimal: "десетичен знак",
    currency: "валута",
    percent: "процент",
    firstExpanded: "Първият панел е разширен.",
    off: "Скриване на номерата на въпросите",
    list: "Списък",
    progressTop: "Панел навигатор + Лента за напредък в горната част",
    progressBottom: "Панел навигатор + Лента за напредък в долната част",
    progressTopBottom: "Панел навигатор + Лента за напредък в горната и долната част",
    tab: "Раздели",
    horizontal: "Хоризонтален",
    vertical: "Вертикален",
    top: "Горен",
    bottom: "Долен",
    topBottom: "Отгоре и отдолу",
    both: "И двете",
    left: "Вляво",
    right: "Отдясно",
    center: "Център",
    leftRight: "Наляво и надясно",
    middle: "Среда",
    color: "цвят",
    date: "дата",
    datetime: "Време за среща",
    "datetime-local": "Време за среща – локално",
    email: "имейл",
    month: "месец",
    number: "номер",
    password: "парола",
    range: "диапазон",
    tel: "телефон",
    text: "текст",
    time: "време",
    url: "url",
    week: "седмица",
    hidden: "Скрит",
    edit: "Редактируем",
    display: "Само за четене",
    contain: "Съдържам",
    cover: "Капак",
    fill: "Запълване",
    next: "Следващ",
    last: "Трая",
    onComplete: "Когато анкетата приключи",
    onHidden: "Когато въпросът стане скрит",
    onHiddenContainer: "Когато въпросът или неговият панел/страница се скрият",
    clearInvisibleValues: {
      none: "Никога"
    },
    clearIfInvisible: {
      none: "Никога"
    },
    inputType: {
      color: "Цвят",
      date: "Дата",
      "datetime-local": "Дата и час",
      email: "Имейл",
      month: "Месец",
      number: "Номер",
      password: "Парола",
      range: "Обхват",
      tel: "Телефонен номер",
      text: "Текст",
      time: "Време",
      url: "URL",
      week: "Седмица"
    },
    all: "Всички",
    page: "Старница",
    survey: "Анкета",
    onNextPage: "При превключване към следващата страница",
    onValueChanged: "След промяна на отговора",
    onValueChanging: "Преди да бъде променен отговор",
    questionsOnPageMode: {
      standard: "Оригинална структура",
      singlePage: "Показване на всички въпроси на една страница",
      questionPerPage: "Показване на единичен въпрос на страница"
    },
    noPreview: "Без визуализация",
    showAllQuestions: "Показване на всички въпроси",
    showAnsweredQuestions: "Показване само на въпроси с отговор",
    pages: "Завършени страници",
    questions: "Отговорени въпроси",
    requiredQuestions: "Отговорени задължителни въпроси",
    correctQuestions: "Валидни отговори",
    buttons: "Завършени страници (бутон UI)",
    underInput: "Под входа",
    underTitle: "Под заглавието",
    onBlur: "Размазване",
    onTyping: "Докато пишете",
    underRow: "Под реда",
    underRowSingle: "Под реда се вижда само един панел.",
    auto: "Авто",
    showNavigationButtons: {
      none: "Скрит"
    },
    showTimerPanel: {
      none: "Скрит"
    },
    showTimerPanelMode: {
      all: "И двете"
    },
    addRowLocation: {
      default: "Зависи от оформлението на матрицата."
    },
    panelsState: {
      default: "Потребителите не може да разгъват или свиват панели.",
      collapsed: "Всички панели са свити.",
      expanded: "Всички панели са разширени.",
      firstExpanded: "Първо разширено"
    },
    widthMode: {
      static: "Статичен",
      responsive: "Адаптивен"
    },
    contentMode: {
      image: "Изображение",
      video: "Видяо",
      youtube: "YouTube"
    },
    displayMode: {
      buttons: "Бутони",
      dropdown: "Падащо меню"
    },
    rateColorMode: {
      default: "По подразбиране",
      scale: "Мащаб"
    },
    scaleColorMode: {
      monochrome: "Монохромен",
      colored: "Оцветен"
    },
    autoGenerate: {
      "true": "Генерирай.",
      "false": "Въведи ръчно."
    },
    rateType: {
      labels: "Етикети",
      stars: "Звезди",
      smileys: "Усмивки"
    },
    state: {
      default: "Заключен"
    },
    showQuestionNumbers: {
      default: "Автоматично номериране",
      on: "Автоматично номериране",
      onPage: "Нулиране на всяка страница",
      onpanel: "Нулиране на всеки панел",
      onPanel: "Нулиране на всеки панел",
      onSurvey: "Продължете през проучването",
      off: "Без номериране"
    },
    descriptionLocation: {
      underTitle: "Под заглавието на въпроса",
      underInput: "Под полето за въвеждане"
    },
    selectToRankAreasLayout: {
      horizontal: "До опциите",
      vertical: "Над опциите"
    },
    displayStyle: {
      decimal: "Десетичен",
      currency: "Валута",
      percent: "Процент",
      date: "Дата"
    },
    totalDisplayStyle: {
      decimal: "Десетичен",
      currency: "Валута",
      percent: "Процент",
      date: "Дата"
    },
    rowsOrder: {
      initial: "Оригинален"
    },
    questionsOrder: {
      initial: "Оригинален"
    },
    showProgressBar: {
      off: "Скрит",
      topbottom: "Отгоре и отдолу",
      aboveheader: "Над горния колонтитул",
      belowheader: "Под заглавката"
    },
    sum: "Сума",
    count: "Граф",
    min: "Мин",
    max: "Макс",
    avg: "Ср",
    searchMode: {
      contains: "Съдържа",
      startsWith: "Започва с"
    },
    backgroundImageFit: {
      auto: "Авто",
      cover: "Капак",
      contain: "Съдържам",
      fill: "Участък",
      tile: "Плочки"
    },
    backgroundImageAttachment: {
      fixed: "Неподвижен",
      scroll: "Свитък"
    },
    headerView: {
      basic: "Основен",
      advanced: "Напреднал"
    },
    inheritWidthFrom: {
      survey: "Същото като проучването",
      container: "Побиране в контейнера"
    },
    backgroundColorSwitch: {
      none: "Никой",
      accentColor: "Цвят за акцентиране",
      custom: "Обичай"
    },
    colorPalette: {
      light: "Светлина",
      dark: "Тъмен"
    },
    isPanelless: {
      "false": "По подразбиране",
      "true": "Без панели"
    }
  },
  // Operators
  op: {
    empty: "празно",
    notempty: "не е празно",
    equal: "равно",
    notequal: "не е равно",
    contains: "съдържа",
    notcontains: "не съдържа",
    anyof: "всеки от",
    allof: "всички",
    greater: "по-голямо",
    less: "по-малко",
    greaterorequal: "по-голямо или равно",
    lessorequal: "по-малко или равно",
    and: "и",
    or: "или"
  },
  // Embed window
  ew: {
    angular: "Използвайте Angular версия",
    jquery: "Използвайте jQuery версия",
    knockout: "Използвайте Knockout версия",
    react: "Използвайте версията на React",
    vue: "Използвайте версията на Vue",
    bootstrap: "За bootstrap framework",
    modern: "Модерна тема",
    default: "тема по подразбиране",
    orange: "Оранжева тема",
    darkblue: "Тъмносиня тема",
    darkrose: "Тъмнорозова тема",
    stone: "Каменна тема",
    winter: "Зимна тема",
    winterstone: "Зимно-каменна тема",
    showOnPage: "Показване на анкетата на страница",
    showInWindow: "Показване на анкетата в прозорец",
    loadFromServer: "Заредете JSON на анкетата от сървъра",
    titleScript: "Скриптове и стилове",
    titleHtml: "HTML",
    titleJavaScript: "JavaScript"
  },
  // Preview (Survey)
  ts: {
    selectPage: "Избери страницата, за да я тестваш.",
    showInvisibleElements: "Показване на невидими елементи",
    hideInvisibleElements: "Скриване на невидими елементи"
  },
  validators: {
    answercountvalidator: "Брой отговори",
    emailvalidator: "Имейл",
    expressionvalidator: "Израз",
    numericvalidator: "Число",
    regexvalidator: "Регулярен израз",
    textvalidator: "Текст"
  },
  triggers: {
    completetrigger: "Попълнена анкета",
    setvaluetrigger: "Задаване на отговор",
    copyvaluetrigger: "Копиране на отговор",
    skiptrigger: "Преминаване към въпроса",
    runexpressiontrigger: "Стартиране на израз",
    visibletrigger: "промяна на видимостта (отхвърлено)"
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
      name: "ИД на панел, който не е видим за респондентите.",
      description: "Въведете подзаглавие на панела.",
      visibleIf: "Използвайте иконата на магическа пръчка, за да зададете условно правило, което определя видимостта на панела.",
      enableIf: "Използвайте иконата на магическа пръчка, за да зададете условно правило, което забранява режима само за четене за панела.",
      requiredIf: "Използвайте иконата на магическа пръчка, за да зададете условно правило, което не позволява подаване на проучване, освен ако поне един вложен въпрос няма отговор.",
      questionTitleLocation: "Отнася се за всички въпроси в рамките на този панел. Ако искате да заместите тази настройка, определете правила за подравняване на заглавията за отделни въпроси. Опцията \"Наследяване\" прилага настройката за ниво на страница (ако е зададена) или ниво проучване (\"Горе\" по подразбиране).",
      questionTitleWidth: "Задава еднаква ширина за заглавията на въпросите, когато те са подравнени отляво на техните полета за въпроси. Приема CSS стойности (px, %, in, pt и т.н.).",
      questionErrorLocation: "Задава местоположението на съобщение за грешка във връзка с всички въпроси в панела. Опцията \"Наследяване\" прилага настройката за ниво на страница (ако е зададена) или ниво проучване.",
      questionsOrder: "Запазва първоначалния ред на въпросите или ги рандомизира. Опцията \"Наследяване\" прилага настройката за ниво на страница (ако е зададена) или ниво проучване.",
      page: "Премества панела в края на избрана страница.",
      innerIndent: "Добавя интервал или поле между съдържанието на панела и лявата граница на панелното поле.",
      startWithNewLine: "Премахнете отметката, за да покажете панела в един ред с предишния въпрос или панел. Настройката не се прилага, ако панелът е първият елемент във вашия формуляр.",
      state: "Изберете от: \"Разширен\" - панелът се показва изцяло и може да бъде свит; \"Свит\" - панелът показва само заглавието и описанието и може да бъде разширен; \"Заключен\" - панелът се показва изцяло и не може да се свива.",
      width: "Задава ширината на панела пропорционално на другите елементи на изследването в същия ред. Приема CSS стойности (px, %, in, pt и т.н.)."
    },
    paneldynamic: {
      name: "ИД на панел, който не е видим за респондентите.",
      description: "Въведете подзаглавие на панела.",
      visibleIf: "Използвайте иконата на магическа пръчка, за да зададете условно правило, което определя видимостта на панела.",
      enableIf: "Използвайте иконата на магическа пръчка, за да зададете условно правило, което забранява режима само за четене за панела.",
      requiredIf: "Използвайте иконата на магическа пръчка, за да зададете условно правило, което не позволява подаване на проучване, освен ако поне един вложен въпрос няма отговор.",
      templateTitleLocation: "Отнася се за всички въпроси в рамките на този панел. Ако искате да заместите тази настройка, определете правила за подравняване на заглавията за отделни въпроси. Опцията \"Наследяване\" прилага настройката за ниво на страница (ако е зададена) или ниво проучване (\"Горе\" по подразбиране).",
      templateErrorLocation: "Задава местоположението на съобщение за грешка във връзка с въпрос с невалиден вход. Изберете между: \"Top\" - в горната част на полето за въпроси се поставя текст за грешка; \"Отдолу\" - в долната част на полето за въпроси се поставя текст за грешка. Опцията \"Наследяване\" прилага настройката за ниво на страница (ако е зададена) или ниво проучване (\"Горе\" по подразбиране).",
      errorLocation: "Задава местоположението на съобщение за грешка във връзка с всички въпроси в панела. Опцията \"Наследяване\" прилага настройката за ниво на страница (ако е зададена) или ниво проучване.",
      page: "Премества панела в края на избрана страница.",
      innerIndent: "Добавя интервал или поле между съдържанието на панела и лявата граница на панелното поле.",
      startWithNewLine: "Премахнете отметката, за да покажете панела в един ред с предишния въпрос или панел. Настройката не се прилага, ако панелът е първият елемент във вашия формуляр.",
      state: "Изберете от: \"Разширен\" - панелът се показва изцяло и може да бъде свит; \"Свит\" - панелът показва само заглавието и описанието и може да бъде разширен; \"Заключен\" - панелът се показва изцяло и не може да се свива.",
      width: "Задава ширината на панела пропорционално на другите елементи на изследването в същия ред. Приема CSS стойности (px, %, in, pt и т.н.).",
      templateTitle: "Въведете шаблон за динамични заглавия на панели. Използвайте {panelIndex} за общата позиция на панела и {visiblePanelIndex} за реда му сред видимите панели. Вмъкнете тези контейнери в шаблона, за да добавите автоматично номериране.",
      templateTabTitle: "Въведете шаблон за заглавията на разделите. Използвайте {panelIndex} за общата позиция на панела и {visiblePanelIndex} за реда му между видимите панели. Вмъкнете тези контейнери в шаблона, за да добавите автоматично номериране.",
      tabTitlePlaceholder: "Резервен текст за заглавията на разделите, който се прилага, когато шаблонът за заглавие на раздела не създава смислена стойност.",
      templateVisibleIf: "Тази настройка ви позволява да контролирате видимостта на отделните панели в динамичния панел. Използвайте контейнера \"{panel}\", за да препращате към текущия панел във вашия израз.",
      titleLocation: "Тази настройка се наследява автоматично от всички въпроси в този панел. Ако искате да заместите тази настройка, определете правила за подравняване на заглавията за отделни въпроси. Опцията \"Наследяване\" прилага настройката за ниво на страница (ако е зададена) или ниво проучване (\"Горе\" по подразбиране).",
      descriptionLocation: "Опцията \"Наследяване\" прилага настройката за ниво на страница (ако е зададена) или ниво проучване (\"Под заглавието на панела\" по подразбиране).",
      newPanelPosition: "Определя позицията на новодобавен панел. По подразбиране в края се добавят нови панели. Изберете \"Напред\", за да вмъкнете нов панел след текущия.",
      defaultValueFromLastPanel: "Дублира отговорите от последния панел и ги присвоява на следващия добавен динамичен панел.",
      keyName: "Препратка към име на въпрос, за да се изисква от потребителя да предостави уникален отговор на този въпрос във всеки панел."
    },
    defaultValueExpression: "Тази настройка ви позволява да присвоите стойност за отговор по подразбиране на базата на израз. Изразът може да включва основни изчисления - '{q1_id} + {q2_id}', булеви изрази, като '{age} > 60', и функции: 'iif()', 'today()', 'age()', 'min()', 'max()', 'avg()' и др. Стойността, определена от този израз, служи като начална стойност по подразбиране, която може да бъде заместена от ръчното въвеждане на респондента.",
    resetValueIf: "Използвайте иконата на магическа пръчка, за да зададете условно правило, което определя кога входът на респондента се връща към стойността въз основа на \"Израз за стойност по подразбиране\" или \"Задаване на израз за стойност\" или към стойността \"Отговор по подразбиране\" (ако е зададена такава).",
    setValueIf: "Използвайте иконата на магическа пръчка, за да зададете условно правило, което определя кога да изпълните \"Задаване на израз за стойност\" и динамично да зададете получената стойност като отговор.",
    setValueExpression: "Задайте израз, който определя стойността, която трябва да бъде зададена, когато са изпълнени условията в правилото \"Задаване на стойност ако\". Изразът може да включва основни изчисления - '{q1_id} + {q2_id}', булеви изрази, като '{age} > 60', и функции: 'iif()', 'today()', 'age()', 'min()', 'max()', 'avg()' и др. Стойността, определена от този израз, може да бъде заместена от ръчното въвеждане на респондента.",
    question: {
      name: "Идентификационен номер на въпрос, който не е видим за респондентите.",
      description: "Въведете подзаглавие на въпрос.",
      visibleIf: "Използвайте иконата на вълшебната пръчица, за да зададете условно правило, което определя видимостта на въпросите.",
      enableIf: "Използвайте иконата на магическа пръчка, за да зададете условно правило, което забранява режима само за четене за въпроса.",
      requiredIf: "Използвайте иконата на магическа пръчка, за да зададете условно правило, което предотвратява напредването или подаването на проучването, освен ако въпросът не получи отговор.",
      startWithNewLine: "Премахнете отметката, за да покажете въпроса в един ред с предишния въпрос или панел. Настройката не се прилага, ако въпросът е първият елемент във вашия формуляр.",
      page: "Премества въпроса в края на избрана страница.",
      state: "Изберете от: \"Разширен\" - полето за въпроси се показва изцяло и може да бъде свито; \"Свита\" - полето за въпроси показва само заглавието и описанието и може да бъде разширено; \"Заключена\" - полето за въпроси се показва изцяло и не може да бъде свито.",
      titleLocation: "Отменя правилата за подравняване на заглавията, дефинирани на ниво панел, страница или проучване. Опцията \"Наследяване\" прилага всички настройки от по-високо ниво (ако са зададени) или настройка на ниво проучване (\"Top\" по подразбиране).",
      descriptionLocation: "Опцията \"Наследяване\" прилага настройката на ниво проучване (\"Под заглавието на въпроса\" по подразбиране).",
      errorLocation: "Задава местоположението на съобщение за грешка във връзка с въпроса с невалиден вход. Изберете между: \"Top\" - в горната част на полето за въпроси се поставя текст за грешка; \"Отдолу\" - в долната част на полето за въпроси се поставя текст за грешка. Опцията \"Наследяване\" прилага настройката за ниво проучване (\"Top\" по подразбиране).",
      indent: "Добавя интервал или поле между съдържанието на въпроса и лявата граница на полето за въпроси.",
      width: "Задава ширината на въпроса пропорционално на другите елементи на изследването в същия ред. Приема CSS стойности (px, %, in, pt и т.н.).",
      surveyvalidator: {
        expression: "Използвайте иконата на магическа пръчка, за да зададете валидиращо правило за въпроса."
      },
      textUpdateMode: "Изберете от: \"На загубен фокус\" - стойността се актуализира, когато входното поле загуби фокус; \"Докато пишете\" - стойността се актуализира в реално време, докато потребителите пишат. Опцията \"Наследяване\" прилага настройката на ниво проучване (\"На загубен фокус\" по подразбиране).",
      url: "Можете да използвате всяка уеб услуга като източник на данни за въпроси с множествен избор. За да попълните стойности за избор, въведете URL адреса на услугата, предоставяща данните.",
      searchMode: "Операция за сравнение, използвана за филтриране на падащия списък.",
      textWrapEnabled: "Дългите текстове в опциите за избор автоматично ще генерират нови редове, за да се поберат в падащото меню. Премахнете отметката, ако искате текстовете да бъдат изрязани."
    },
    signaturepad: {
      signatureWidth: "Задава ширината на показаната област за подпис и полученото изображение.",
      signatureHeight: "Задава височината на показаната област за подпис и полученото изображение.",
      signatureAutoScaleEnabled: "Изберете дали искате областта за подпис да запълни цялото налично пространство в полето за въпроси, като същевременно запазите съотношението по подразбиране 3:2. Когато са зададени стойности за ширина и височина по избор, настройката ще запази пропорциите на тези размери."
    },
    file: {
      imageHeight: "Регулира височината на изображението в резултатите от проучването.",
      imageWidth: "Регулира ширината на изображението в резултатите от проучването."
    },
    image: {
      contentMode: "Опцията \"Auto\" автоматично определя подходящия режим за показване - Image, Video или YouTube - въз основа на предоставения URL адрес на източника."
    },
    imagepicker: {
      imageHeight: "Отменя минималните и максималните стойности на височината.",
      imageWidth: "Отменя минималните и максималните стойности на ширината.",
      choices: "\"Стойност\" служи като ИД на артикул, използван в условни правила; \"Текст\" се показва на респондентите.",
      contentMode: "Изберете между \"Изображение\" и \"Видео\", за да зададете режима на съдържание на селектора на мултимедия. Ако е избрано \"Изображение\", уверете се, че всички предоставени опции са файлове с изображения в следните формати: JPEG, GIF, PNG, APNG, SVG, BMP, ICO. По същия начин, ако е избрано \"Видео\", уверете се, че всички опции са директни връзки към видео файлове в следните формати: MP4, MOV, WMV, FLV, AVI, MKV. Моля, имайте предвид, че връзките в YouTube не се поддържат за опции за видео."
    },
    text: {
      size: "Тази настройка само преоразмерява входното поле и не влияе на ширината на полето за въпроси. За да ограничите приетата дължина на въвеждане, отидете на <b>Проверка → Максимален брой знаци</b>."
    },
    comment: {
      rows: "Задава броя на показваните редове в полето за въвеждане. Ако входът заема повече редове, ще се появи плъзгачът."
    },
    // survey templates
    survey: {
      mode: "Изберете между: \"Редактируем\" - дава възможност на респондентите да попълнят анкетата Ви; \"Само за четене\" - забранява редактирането на формуляри."
    },
    matrixdropdowncolumn: {
      name: "ИД на колона, която не се вижда от респондентите.",
      isUnique: "Когато е разрешено за колона, респондентът трябва да предостави уникален отговор за всеки въпрос в тази колона.",
      rows: "Задава броя на показваните редове в полето за въвеждане. Ако входът заема повече редове, ще се появи плъзгачът.",
      visibleIf: "Използвайте иконата на магическа пръчка, за да зададете условно правило, което определя видимостта на колоната.",
      enableIf: "Използвайте иконата на магическа пръчка, за да зададете условно правило, което забранява режима само за четене за колоната.",
      requiredIf: "Използвайте иконата на магическа пръчка, за да зададете условно правило, което не позволява подаване на проучване, освен ако поне един вложен въпрос няма отговор.",
      showInMultipleColumns: "Когато е избрано, създава отделна колона за всяка опция за избор."
    },
    widthMode: "Изберете от: \"Статичен\" - задава фиксирана ширина; \"Responsive\" - прави проучването да заема цялата ширина на екрана; \"Auto\" - прилага се всеки от двата в зависимост от използваните типове въпроси.",
    cookieName: "Бисквитките не позволяват на потребителите да попълнят една и съща анкета два пъти.",
    logo: "Поставете връзка към изображение (без ограничения за размера) или щракнете върху иконата на папката, за да прегледате файл от компютъра си (до 64 КБ).",
    logoWidth: "Задава ширина на логото в CSS единици (px, %, in, pt и т.н.).",
    logoHeight: "Задава височина на логото в CSS единици (px, %, in, pt и т.н.).",
    logoFit: "Изберете от: \"Няма\" - изображението запазва оригиналния си размер; \"Съдържа\" - изображението се преоразмерява, за да се побере, като същевременно се запазва съотношението на страните; \"Cover\" - изображението запълва цялата кутия, като същевременно запазва съотношението на страните; \"Fill\" - изображението се разтяга, за да запълни кутията, без да се поддържа съотношението на страните.",
    goNextPageAutomatic: "Изберете дали искате проучването да премине автоматично към следващата страница, след като респондентът отговори на всички въпроси на текущата страница.",
    allowCompleteSurveyAutomatic: "Изберете дали искате проучването да завърши автоматично, след като респондентът отговори на всички въпроси.",
    showNavigationButtons: "Задава видимостта и местоположението на бутоните за навигация на дадена страница.",
    showProgressBar: "Задава видимостта и местоположението на лентата за напредъка. Стойността \"Автоматично\" показва лентата за напредъка над или под заглавката на проучването.",
    showPreviewBeforeComplete: "Разрешете страницата за визуализация само с всички въпроси или само с отговор.",
    questionTitleLocation: "Отнася се за всички въпроси в рамките на проучването. Тази настройка може да бъде заместена от правилата за подравняване на заглавията на по-ниските нива: панел, страница или въпрос. Настройката от по-ниско ниво ще замени тези на по-високо ниво.",
    requiredText: "Символ или поредица от символи, показващи, че е необходим отговор.",
    questionStartIndex: "Въведете число или буква, с които искате да започнете номерирането.",
    questionErrorLocation: "Задава местоположението на съобщение за грешка във връзка с въпроса с невалиден вход. Изберете между: \"Top\" - в горната част на полето за въпроси се поставя текст за грешка; \"Отдолу\" - в долната част на полето за въпроси се поставя текст за грешка.",
    focusFirstQuestionAutomatic: "Изберете дали искате първото поле за въвеждане на всяка страница да е готово за въвеждане на текст.",
    questionsOrder: "Запазва първоначалния ред на въпросите или ги рандомизира. Ефектът от тази настройка се вижда само в раздела Визуализация .",
    maxTextLength: "Само за въпроси за въвеждане на текст.",
    maxOthersLength: "Само за въпросителни коментари.",
    commentAreaRows: "Задава броя на показваните редове в текстовите области за коментари на въпроси. Във входа заема повече редове, плъзгачът се появява.",
    autoGrowComment: "Изберете дали искате коментарите за въпроси и въпросите с дълъг текст автоматично да нарастват на височина въз основа на въведената дължина на текста.",
    allowResizeComment: "Само за коментари с въпроси и въпроси с дълъг текст.",
    calculatedValues: "Персонализираните променливи служат като междинни или спомагателни променливи, използвани в изчисленията на формуляра. Те приемат входните данни на респондентите като изходни стойности. Всяка персонализирана променлива има уникално име и израз, на който се базира.",
    includeIntoResult: "Изберете дали искате изчислената стойност на израза да бъде записана заедно с резултатите от проучването.",
    triggers: "Превключвателят е събитие или условие, което се основава на израз. След като изразът е оценен като \"true\", спусъкът задейства действие. Такова действие може по избор да има целеви въпрос, който засяга.",
    clearInvisibleValues: "Изберете дали да изчистите стойностите за въпроси, скрити от условната логика, и кога да го направите.",
    textUpdateMode: "Изберете от: \"На загубен фокус\" - стойността се актуализира, когато входното поле загуби фокус; \"Докато пишете\" - стойността се актуализира в реално време, докато потребителите пишат.",
    columns: "Лявата стойност служи като ИД на колона, използвана в условни правила, дясната стойност се показва на респондентите.",
    rows: "Лявата стойност служи като ИД на ред, използван в условни правила, дясната стойност се показва на респондентите.",
    columnMinWidth: "Приема CSS стойности (px, %, in, pt и т.н.).",
    rowTitleWidth: "Приема CSS стойности (px, %, in, pt и т.н.).",
    totalText: "Вижда се, само когато поне една колона има общ тип или общ израз.",
    cellErrorLocation: "Задава местоположението на съобщение за грешка по отношение на клетка с невалиден вход. Опцията \"Наследяване\" прилага настройката от свойството \"Подравняване на съобщение за грешка\".",
    keyDuplicationError: "Когато свойството \"Предотвратяване на дублиращи се отговори\" е разрешено, респондентът, който се опитва да подаде дублиран запис, ще получи следното съобщение за грешка.",
    totalExpression: "Позволява ви да изчислявате общи стойности на базата на израз. Изразът може да включва основни изчисления ('{q1_id} + {q2_id}'), булеви изрази ('{age} > 60') и функции ('iif()', 'today()', 'age()', 'min()', 'max()', 'avg()' и т.н.).",
    confirmDelete: "Задейства подкана с молба за потвърждаване на изтриването на реда.",
    defaultValueFromLastRow: "Дублира отговорите от последния ред и ги присвоява на следващия добавен динамичен ред.",
    keyName: "Ако указаната колона съдържа идентични стойности, анкетата отговаря с \"Неуникална стойност на ключ\" грешка.",
    description: "Въведете субтитри.",
    locale: "Изберете език, за да започнете да създавате проучването си. За да добавите превод, превключете на нов език и преведете оригиналния текст тук или в раздела Преводи.",
    detailPanelMode: "Задава местоположението на раздел с подробни данни по отношение на ред. Изберете от: \"Няма\" - не се добавя разширение; \"Под реда\" - под всеки ред на матрицата се поставя разширение на реда; \"Под реда покажете само разширение на един ред\" - разширение се показва само под един ред, останалите разширения на реда са свити.",
    imageFit: "Изберете от: \"Няма\" - изображението запазва оригиналния си размер; \"Съдържа\" - изображението се преоразмерява, за да се побере, като същевременно се запазва съотношението на страните; \"Cover\" - изображението запълва цялата кутия, като същевременно запазва съотношението на страните; \"Fill\" - изображението се разтяга, за да запълни кутията, без да се поддържа съотношението на страните.",
    autoGrow: "Постепенно увеличава височината на входното поле при въвеждане на данни. Замества настройката \"Височина на входното поле (в редове)\".",
    allowResize: "Манипулаторът за преоразмеряване (или ръкохватката) се появява в ъгъла и може да се плъзга, за да се промени размерът на входното поле.",
    maxTimeToFinish: "Интервал от време в секунди, след което проучването автоматично преминава към страницата \"Благодаря\".",
    maxTimeToFinishPage: "Интервал от време в секунди, след който проучването автоматично преминава към следващата страница.",
    validateVisitedEmptyFields: "Активирайте тази опция, за да задействате проверка, когато потребителят се фокусира върху празно поле за въвеждане и след това го напусне, без да прави никакви промени.",
    page: {
      maxTimeToFinish: "Интервал от време в секунди, след който проучването автоматично преминава към следващата страница.",
      visibleIf: "Използвайте иконата на магическа пръчка, за да зададете условно правило, което определя видимостта на страницата.",
      enableIf: "Използвайте иконата на магическа пръчка, за да зададете условно правило, което забранява режима само за четене за страницата.",
      requiredIf: "Използвайте иконата на магическа пръчка, за да зададете условно правило, което не позволява подаване на проучване, освен ако поне един вложен въпрос няма отговор.",
      questionTitleLocation: "Отнася се за всички въпроси в тази страница. Ако искате да замените тази настройка, определете правила за подравняване на заглавията за отделни въпроси или панели. Опцията \"Наследяване\" прилага настройката за ниво проучване (\"Top\" по подразбиране).",
      questionTitleWidth: "Задава еднаква ширина за заглавията на въпросите, когато те са подравнени отляво на техните полета за въпроси. Приема CSS стойности (px, %, in, pt и т.н.).",
      questionErrorLocation: "Задава местоположението на съобщение за грешка във връзка с въпроса с невалиден вход. Изберете между: \"Top\" - в горната част на полето за въпроси се поставя текст за грешка; \"Отдолу\" - в долната част на полето за въпроси се поставя текст за грешка. Опцията \"Наследяване\" прилага настройката за ниво проучване (\"Top\" по подразбиране).",
      questionsOrder: "Запазва първоначалния ред на въпросите или ги рандомизира. Опцията \"Наследяване\" прилага настройката на ниво проучване (\"Оригинал\" по подразбиране). Ефектът от тази настройка се вижда само в раздела Визуализация .",
      navigationButtonsVisibility: "Задава видимостта на бутоните за навигация на страницата. Опцията \"Наследяване\" прилага настройката на ниво проучване, която по подразбиране е \"Видима\"."
    },
    showTimerPanel: "Задава видимостта и местоположението на таймера на страницата.",
    panelsState: "Изберете от: \"Заключени\" - потребителите не могат да разширяват или свиват панели; \"Свиване на всички\" - всички панели започват в срутено състояние; \"Разширяване на всички\" - всички панели започват в разширено състояние; \"Първо разширен\" - само първият панел първоначално се разширява.",
    imageLinkName: "Въведете име на споделено свойство в масива от обекти, съдържащ URL адресите на изображения или видеофайлове, които искате да покажете в списъка за избор.",
    choices: "Лявата стойност служи като ИД на артикул, използван в условни правила, дясната стойност се показва на респондентите.",
    title: "Въведете удобно за потребителя заглавие за показване.",
    waitForUpload: "Гарантира, че потребителите няма да завършат проучването, докато не бъдат качени файлове.",
    minWidth: "Приема CSS стойности (px, %, in, pt и т.н.).",
    maxWidth: "Приема CSS стойности (px, %, in, pt и т.н.).",
    width: "Приема CSS стойности (px, %, in, pt и т.н.).",
    valueName: "Ако не зададете това свойство, отговорът ще бъде съхранен в поле, указано от свойството Name.",
    useDisplayValuesInDynamicTexts: "При типовете въпроси с единичен и множествен избор всяка опция за избор има ИД и стойност на показване. Когато е избрана, тази настройка показва показвана стойност вместо стойност на ИД в HTML въпроси и динамични заглавия и описания на елементи от проучване.",
    clearIfInvisible: "Изберете дали да изчистите стойностите на въпросите, скрити от условната логика, и кога да го направите. Опцията \"Наследяване\" прилага настройката на ниво проучване (\"При завършване на проучването\" по подразбиране).",
    choicesFromQuestionMode: "Изберете от: \"Всички\" - копира всички опции за избор от избрания въпрос; \"Избрано\" - динамично копира само избраните опции за избор; \"Неизбрани\" - динамично копира само неизбрани опции за избор. Опциите \"Няма\" и \"Други\" се копират по подразбиране, ако са разрешени във въпроса източник.",
    showOtherItem: "Когато е избрано, потребителите могат да включат допълнително въвеждане в отделно поле за коментари.",
    separateSpecialChoices: "Показва всяка специална опция за избор (\"Няма\", \"Други\", \"Избери всички\") на нов ред, дори когато се използва оформление с няколко колони.",
    path: "Задайте местоположението в набора от данни на услугата, където се намира целевият масив от обекти. Оставете празно, ако URL адресът вече сочи към масива.",
    choicesbyurl: {
      valueName: " "
    },
    titleName: "Въведете единно име на свойство в масива от обекти, съдържащ стойностите, които искате да покажете в списъка за избор.",
    allowEmptyResponse: "Изберете, за да позволите на услугата да върне празен отговор или масив.",
    choicesVisibleIf: "Използвайте иконата на магическа пръчка, за да зададете условно правило, което определя видимостта на всички опции за избор.",
    rateValues: "Лявата стойност служи като ИД на артикул, използван в условни правила, дясната стойност се показва на респондентите.",
    rating: {
      displayMode: "\"Автоматично\" избира между режимите \"Бутони\" и \"Падащо меню\" въз основа на наличната ширина. Когато ширината е недостатъчна за показване на бутони, въпросът показва падащо меню."
    },
    valuePropertyName: "Позволява ви да свързвате въпроси, които дават резултати в различни формати. Когато такива въпроси са свързани помежду си с помощта на идентификатор на съединение, това споделено свойство съхранява избраните стойности на въпроси.",
    searchEnabled: "Изберете дали искате да актуализирате съдържанието на падащото меню, за да съответства на заявката за търсене, която потребителят въвежда в полето за въвеждане.",
    valueTrue: "Стойност, която трябва да се спести в резултатите от проучването, когато респондентите дадат положителен отговор.",
    valueFalse: "Стойност, която трябва да се спести в резултатите от проучването, когато респондентите дадат отрицателен отговор.",
    showPreview: "Не се препоръчва да деактивирате тази опция, тъй като тя отменя изображението за визуализация и затруднява потребителя да разбере дали файловете са качени.",
    needConfirmRemoveFile: "Задейства подкана с молба за потвърждаване на изтриването на файла.",
    selectToRankEnabled: "Разреши да се класират само избраните възможности за избор. Потребителите ще плъзгат избраните елементи от списъка за избор, за да ги подредят в областта за класиране.",
    dataList: "Въведете списък с възможности за избор, които ще бъдат предложени на респондента по време на въвеждането.",
    itemSize: "Настройката само преоразмерява входните полета и не влияе на ширината на полето за въпроси.",
    itemTitleWidth: "Задава еднаква ширина за всички етикети на елементи в пиксели",
    altText: "Служи като заместител, когато изображението не може да бъде показано на устройството на потребителя и за целите на достъпността.",
    rateColorMode: "Определя цвета на избрания емотикон, когато типът на иконата за оценка е зададен на \"Усмивки\". Изберете между: \"По подразбиране\" - избраният емотикон се появява в цвета на проучването по подразбиране; \"Скала\" - избраният емотикон наследява цвят от рейтинговата скала.",
    expression: {
      name: "ИД на израз, който не е видим за респондентите.",
      description: "Въведете подзаглавие на израз.",
      expression: "Изразът може да включва основни изчисления ('{q1_id} + {q2_id}'), условия ('{age} > 60') и функции ('iif()', 'today()', 'age()', 'min()', 'max()', 'avg()' и т.н.)."
    },
    storeOthersAsComment: "Изберете, за да съхраните стойността на опцията \"Други\" като отделно свойство в резултатите от проучването.",
    format: "Използвай {0} като контейнер за действителната стойност.",
    acceptedTypes: "Направи справка с (https://www.w3schools.com/tags/att_input_accept.asp) за повече информация.",
    columnColCount: "Приложимо само за типове клетки Radiogroup и Checkbox.",
    autocomplete: "Направи справка с [autocomplete](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete) за повече информация.",
    filePlaceholder: "Прилага се, когато \"Тип източник\" е \"Локални файлове\" или когато камерата не е налична",
    photoPlaceholder: "Прилага се, когато \"Тип източник\" е \"Камера\".",
    fileOrPhotoPlaceholder: "Прилага се, когато \"Тип източник\" е \"Локални файлове или камера\".",
    colCount: "Подрежда опциите за избор в оформление с няколко колони. Когато е зададено на 0, опциите се показват на един ред.",
    masksettings: {
      saveMaskedValue: "Изберете дали искате да съхраните стойността на въпроса с приложена маска в резултатите от проучването."
    },
    patternmask: {
      pattern: "Шаблонът може да съдържа низови литерали и следните контейнери: '9' - за цифра; \"а\" - за главна или малка буква; \"#\" - за цифра или главна или малка буква. Използвайте обратно наклонена черта \"\\\", за да избягате от знак."
    },
    datetimemask: {
      pattern: "Шаблонът може да съдържа разделителни знаци и следните контейнери:<br>'m' - Номер на месец.<br>'mm' - Число на месеца, с водеща нула за едноцифрени стойности. <br>\"d\" - Ден от месеца. <br>'dd' - Ден от месеца, с водеща нула за едноцифрени стойности. <br>'yy' - Последните две цифри на годината. <br>'гггг' - Четирицифрена година. <br>'H' - Часове в 24-часов формат. <br>'HH' - Часове в 24-часов формат, с водеща нула за едноцифрени стойности. <br>'h' - Часове в 12-часов формат. <br>'hh' - Часове в 12-часов формат, с водеща нула за едноцифрени стойности. <br>'ММ' - Минути. <br>'ss' - секунди. <br>\"TT\" - 12-часов период на часовника с главни букви (AM/PM). <br>'tt' - 12-часов период на часовника с малки букви (am/pm)."
    },
    numericmask: {
      decimalSeparator: "Символ, използван за отделяне на дробната част от целочислената част на показваното число.",
      thousandsSeparator: "Символ, използван за разделяне на цифрите на голямо число в групи от по три.",
      precision: "Ограничава колко цифри да се запазят след десетичната запетая за показваното число."
    },
    currencymask: {
      prefix: "Един или няколко символа, които трябва да бъдат показани преди стойността.",
      suffix: "Един или няколко символа, които трябва да се покажат след стойността."
    },
    theme: {
      isPanelless: "Тази настройка се прилага само за въпроси извън панела.",
      primaryColor: "Задава допълнителен цвят, който подчертава ключови елементи на проучването.",
      panelBackgroundTransparency: "Регулира прозрачността на панелите и полетата за въпроси спрямо фона на проучването.",
      questionBackgroundTransparency: "Регулира прозрачността на входните елементи спрямо фона на проучването.",
      cornerRadius: "Задава ъгловия радиус за всички правоъгълни елементи. Разрешете разширения режим, ако искате да зададете индивидуални стойности на радиуса на ъгъла за входни елементи или панели и полета за въпроси.",
      "--sjs-general-backcolor-dim": "Задава основния цвят на фона на проучването."
    },
    header: {
      inheritWidthFrom: "Опцията \"Същото като контейнера\" автоматично регулира ширината на областта на съдържанието на заглавката, за да се побере в HTML елемента, в който е поставена анкетата.",
      textAreaWidth: "Ширината на областта на заглавката, която съдържа заглавието и описанието на проучването, измерена в пиксели.",
      overlapEnabled: "Прави долната част на заглавката наслагвана с горната част на проучването."
    },
    panellayoutcolumn: {
      effectiveWidth: "Приема стойности %.",
      questionTitleWidth: "Приема стойности px."
    }
  },
  // Properties
  p: {
    title: {
      name: "заглавие",
      title: "Остави го празно, ако е същото като 'Name'"
    },
    multiSelect: "Разрешаване многократен избор",
    showLabel: "Показване на надписи на изображения",
    swapOrder: "Разменете реда на \"Да\" и \"Не\"",
    value: "Стойност",
    tabAlign: "Подравняване на раздели",
    sourceType: "Тип източник",
    fitToContainer: "Побиране в контейнера",
    setValueExpression: "Задаване на израз за стойност",
    description: "Описание",
    logoFit: "Подходящо за лого",
    pages: "Страници",
    questions: "Въпроси",
    triggers: "Тригери",
    calculatedValues: "Изчислени стойности",
    surveyId: "Идентификационен номер на анкетата",
    surveyPostId: "Идентификационен номер на публикацията в проучването",
    surveyShowDataSaving: "Проучването показва спестяване на данни.",
    questionDescriptionLocation: "Местоположение на описанието на въпроса",
    progressBarType: "Тип лента за напредък",
    showTOC: "Показване на съдържание",
    tocLocation: "Местоположение на съдържанието",
    questionTitlePattern: "Шаблон на заглавието на въпроса",
    widthMode: "Режим на широчина",
    showBrandInfo: "Показване на информация за марката (бранда)",
    useDisplayValuesInDynamicTexts: "Стойности за показване на динамични текстове",
    visibleIf: "Видим, ако",
    defaultValueExpression: "Стойност по подразбиране на израза",
    requiredIf: "Задължителен, ако",
    resetValueIf: "Нулиране на стойността, ако",
    setValueIf: "Задайте стойност, ако",
    validators: "Валидатори",
    bindings: "Обвързване",
    renderAs: "Представяне като",
    attachOriginalItems: "Прикрепяне на оригиналните елементи",
    choices: "Избори",
    choicesByUrl: "Избори като url",
    currency: "Валута",
    cellHint: "Подсказка за клетка",
    totalMaximumFractionDigits: "Общо максимални дробни цифри",
    totalMinimumFractionDigits: "Общо минимални дробни цифри",
    columns: "Колони",
    detailElements: "Детайлни елементи",
    allowAdaptiveActions: "Позволи адаптивни действия",
    defaultRowValue: "Стойност на реда по подразбиране",
    detailPanelShowOnAdding: "Панелът с подробности се показва при добавяне.",
    choicesLazyLoadEnabled: "Отложеното зареждане на избора е активирано.",
    choicesLazyLoadPageSize: "Избор на размер на страницата за отложено зареждане",
    inputFieldComponent: "Компонент на полето за въвеждане",
    itemComponent: "Компонент на елемента",
    min: "Минимум",
    max: "Максимум",
    minValueExpression: "Минимална стойност на израза",
    maxValueExpression: "Максимална стойност на израза",
    step: "Стъпка",
    dataList: "Списък с данни",
    itemSize: "Размер на елемента",
    itemTitleWidth: "Ширина на етикета на елемента (в пиксели)",
    elements: "Елементи",
    content: "Съдържание",
    navigationButtonsVisibility: "Видимост на бутоните за навигация",
    navigationTitle: "Навигационно заглавие",
    navigationDescription: "Описание на навигацията",
    longTap: "Дълго докосване",
    autoGrow: "Автоматичен растеж",
    allowResize: "Разреши преоразмеряване.",
    acceptCarriageReturn: "Приеми връщане на каретка.",
    displayMode: "Режим на показване",
    rateType: "Тип на оценката",
    label: "Етикет",
    contentMode: "Съдържателен режим",
    imageFit: "Напасване на изображението",
    altText: "Алтернативен текст",
    height: "Височина",
    penColor: "Цвят на писалката",
    backgroundColor: "Цвят на фона",
    templateElements: "Елементи на шаблона",
    operator: "Оператор",
    isVariable: "Променлива",
    runExpression: "Стартиване на израза",
    showCaption: "Показване на надпис",
    iconName: "Име на икона",
    iconSize: "Размер на иконата",
    precision: "Точност",
    matrixDragHandleArea: "Област на манипулатора за плъзгане на матрицата",
    backgroundImage: "Фоново изображение",
    backgroundImageFit: "Побиране на фоново изображение",
    backgroundImageAttachment: "Прикачен файл с фоново изображение",
    backgroundOpacity: "Непрозрачност на фона",
    selectToRankEnabled: "Изберете за класиране разрешено",
    selectToRankAreasLayout: "Изберете оформление за класиране на области",
    selectToRankEmptyRankedAreaText: "Текст, който да се показва, ако са избрани всички опции",
    selectToRankEmptyUnrankedAreaText: "Текст в контейнер за областта за класиране",
    allowCameraAccess: "Разреши достъп до камерата",
    scaleColorMode: "Режим на мащабиране на цветовете",
    rateColorMode: "Режим на оценяване на цветовете",
    copyDisplayValue: "Копиране на показваната стойност",
    effectiveColSpan: "Обхват на колоната"
  },
  theme: {
    advancedMode: "Разширен режим",
    pageTitle: "Шрифт на заглавието на страницата",
    questionTitle: "Шрифт на заглавието на въпроса",
    editorPanel: "Редактор",
    lines: "Линии",
    primaryDefaultColor: "По подразбиране",
    primaryDarkColor: "Върху",
    primaryLightColor: "Селектиран",
    backgroundDimColor: "Цвят на фона",
    cornerRadius: "Радиус на ъгъла",
    backcolor: "Фон по подразбиране",
    hovercolor: "Фон под курсора на мишката",
    borderDecoration: "Декорация на контура",
    fontColor: "Цвят на шрифта",
    backgroundColor: "Цвят на фона",
    primaryForecolor: "Цвят по подразбиране",
    primaryForecolorLight: "Деактивиран цвят",
    font: "Шрифт",
    borderDefault: "Преобладаващ",
    borderLight: "Незначителен",
    fontFamily: "Семейство шрифтове",
    fontWeightRegular: "Редовни",
    fontWeightHeavy: "Тежък",
    fontWeightSemiBold: "Полу-полу-получер",
    fontWeightBold: "Безочлив",
    color: "Цвят",
    placeholderColor: "Цвят на контейнера",
    size: "Големина",
    opacity: "Непрозрачност",
    boxShadowX: "X",
    boxShadowY: "Y",
    boxShadowAddRule: "Добавяне на ефект на сянка",
    boxShadowBlur: "Замъгляване",
    boxShadowSpread: "Разпространение",
    boxShadowDrop: "Капка",
    boxShadowInner: "Вътрешен",
    names: {
      default: "По подразбиране",
      sharp: "Остър",
      borderless: "Без граници",
      flat: "Апартамент",
      plain: "Равнина",
      doubleborder: "Двойна граница",
      layered: "Пластове",
      solid: "Солиден",
      threedimensional: ".3D",
      contrast: "Контраст"
    },
    colors: {
      teal: "Тийл",
      blue: "Син",
      purple: "Лилав",
      orchid: "Орхидея",
      tulip: "Лале",
      brown: "Кафяв",
      green: "Зелен"
    }
  }
};

// Uncomment the line below if you create a custom dictionary.
// Replace "en" with a custom locale code (for example, "fr" or "de"),
// Replace `enStrings` with the name of the variable that contains the custom dictionary.
editorLocalization.locales["bg"] = bgStrings;
// The following strings have been translated by a machine translation service
// Remove those strings that you have corrected manually
// ed.themePropertyGridTitle: "Theme Settings" => "Настройки на тема"
// ed.translationDeleteLanguage: "Are you certain you wish to delete all strings for this language?" => "Сигурни ли сте, че искате да изтриете всички низове за този език?"
// ed.themeExportButton: "Export" => "Износ"
// ed.themeImportButton: "Import" => "Внос"
// ed.themeResetButton: "Reset theme settings to default" => "Връщане на настройките на тема в начално състояние по подразбиране"
// ed.carryForwardChoicesCopied: "Choices are copied from" => "Възможностите за избор се копират от"
// lg.trigger_setvalueEmptyText: "clear question value: {0}" => "ясна стойност на въпроса: {0}"
// pe.overridingPropertyPrefix: "Set by " => "Зададено от "
// pe.minSelectedChoices: "Minimum selected choices" => "Минимален избор"
// pe.rateType: "Rate type" => "Тип на тарифата"
// pehelp.size: "Resizes the visible area of the input field. Please use the <b>Validation → Maximum length</b> setting to limit the input length." => "Преоразмерява видимата област на входното поле. Моля, използвайте настройката <b>Проверка → максимална</b> дължина, за да ограничите входната дължина."
// p.precision: "Precision" => "Точност"
// p.matrixDragHandleArea: "Matrix drag handle area" => "Област на манипулатора за плъзгане на матрицата"
// p.backgroundImage: "Background image" => "Фоново изображение"
// p.backgroundImageFit: "Background image fit" => "Побиране на фоново изображение"
// p.backgroundImageAttachment: "Background image attachment" => "Прикачен файл с фоново изображение"
// p.backgroundOpacity: "Background opacity" => "Непрозрачност на фона"
// p.selectToRankEnabled: "Select to rank enabled" => "Изберете за класиране разрешено"
// p.selectToRankAreasLayout: "Select to rank areas layout" => "Изберете оформление за класиране на области"
// p.allowCameraAccess: "Allow camera access" => "Разреши достъп до камерата"
// p.scaleColorMode: "Scale color mode" => "Режим на мащабиране на цветовете"
// p.rateColorMode: "Rate color mode" => "Режим на оценяване на цветовете"
// p.templateTabTitle: "Template tab title" => "Заглавие на раздела \"Шаблон\""
// p.templateVisibleIf: "Template visible if" => "Шаблонът се вижда, ако"
// p.copyDisplayValue: "Copy display value" => "Копиране на показваната стойност"
// theme.backgroundImageAttachmentFixed: "Fixed" => "Неподвижен"
// theme.backgroundImageAttachmentScroll: "Scroll" => "Свитък"
// theme.placeholderColor: "Placeholder color" => "Цвят на контейнера"
// theme.fontWeightHeavy: "Heavy" => "Тежък"
// theme.boxShadowAddRule: "Add Shadow Effect" => "Добавяне на ефект на сянка"
// theme.boxShadowDrop: "Drop" => "Капка"
// theme.boxShadowInner: "Inner" => "Вътрешен"
// names.default: "Default" => "По подразбиране"
// names.sharp: "Sharp" => "Остър"
// names.borderless: "Borderless" => "Без граници"
// names.flat: "Flat" => "Апартамент"
// names.plain: "Plain" => "Равнина"
// names.doubleborder: "Double Border" => "Двойна граница"
// names.layered: "Layered" => "Пластове"
// names.solid: "Solid" => "Солиден"
// names.threedimensional: "3D" => ".3D"
// names.contrast: "Contrast" => "Контраст"
// colors.teal: "Teal" => "Тийл"
// colors.blue: "Blue" => "Син"
// colors.purple: "Purple" => "Лилав"
// colors.orchid: "Orchid" => "Орхидея"
// colors.tulip: "Tulip" => "Лале"
// colors.brown: "Brown" => "Кафяв"
// colors.green: "Green" => "Зелен"
// ed.themeSettings: "Theme Settings" => "Настройки на тема"
// ed.themeSettingsTooltip: "Open theme settings" => "Отваряне на настройките на тема"
// pe.resetToDefaultCaption: "Reset" => "Проучване"
// pv.file: "Local files" => "Локални файлове"
// pv.camera: "Camera" => "Фотоапарат"
// pv.file-camera: "Local files or camera" => "Локални файлове или камера"
// ed.translateUsigAI: "Auto-translate All" => "Автоматичен превод на всички"
// ed.translationDialogTitle: "Untranslated strings" => "Непреведени низове"
// pe.fastEntryChoicesMinCountError: "Please enter at least {0} items" => "Моля, въведете поне {0} артикула"
// lg.question_resetValueName: "Reset question value" => "Нулиране на стойността на въпроса"
// lg.column_resetValue: "Reset column value" => "Нулиране на стойността на колона"
// pe.markRequired: "Mark as required" => "Маркирай както се изисква"
// pe.removeRequiredMark: "Remove the required mark" => "Премахване на необходимия знак"
// p.resetValueIf: "Reset value if" => "Нулиране на стойността, ако"

// lg.question_setValueName: "Set question value" => "Задаване на стойност на въпрос"
// lg.column_resetValueName: "Reset column value" => "Нулиране на стойността на колона"
// lg.column_setValueName: "Set column value" => "Задаване на стойност на колона"
// lg.setValueExpressionPlaceholder: " An expression whose result will be assigned to the target question." => " Израз, чийто резултат ще бъде присвоен на целевия въпрос."
// survey.title: "Title" => "Заглавие"
// page.title: "Title" => "Заглавие"
// p.setValueIf: "Set value if" => "Задайте стойност, ако"
// theme.header: "Header" => "Заглавка"
// theme.backgroundImageFitFill: "Stretch" => "Участък"
// theme.backgroundImageFitTile: "Tile" => "Плочки"
// theme.headerView: "View" => "Изглед"
// theme.headerViewBasic: "Basic" => "Основен"
// theme.headerViewAdvanced: "Advanced" => "Напреднал"
// theme.headerInheritWidthFrom: "Content area width" => "Ширина на областта на съдържанието"
// theme.headerInheritWidthFromSurvey: "Same as survey" => "Същото като проучването"
// theme.headerInheritWidthFromPage: "Fit to page" => "Побери в страницата"
// theme.headerTextAreaWidth: "Text width" => "Ширина на текста"
// theme.headerBackgroundColorSwitch: "Background color" => "Цвят на фона"
// theme.headerBackgroundColorNone: "None" => "Никой"
// theme.headerBackgroundColorAccentColor: "Accent color" => "Цвят за акцентиране"
// theme.headerBackgroundColorCustom: "Custom" => "Обичай"
// theme.horizontalAlignmentLeft: "Left" => "Ляво"
// theme.horizontalAlignmentCenter: "Center" => "Център"
// theme.horizontalAlignmentRight: "Right" => "Дясно"
// theme.verticalAlignmentTop: "Top" => "Връх"
// theme.verticalAlignmentMiddle: "Middle" => "Среда"
// theme.verticalAlignmentBottom: "Bottom" => "Дъно"
// lg.question_resetValueText: "reset value for question: {0}" => "нулиране на стойността за въпрос: {0}"
// lg.question_setValueText: "assign value: {1} to question: {0}" => "присвояване на стойност: {1} на въпрос: {0}"
// lg.column_resetValueText: "reset cell value for column: {0}" => "Нулиране на стойността на клетката за колона: {0}"
// lg.column_setValueText: "assign cell value: {1} to column: {0}" => "Присвояване на стойност на клетка: {1} на колона: {0}"
// ed.surveyJsonExportButton: "Export" => "Износ"
// ed.surveyJsonImportButton: "Import" => "Внос"
// ed.surveyJsonCopyButton: "Copy to clipboard" => "Копиране в системния буфер"
// pe.filePlaceholder: "File placeholder text" => "Текст в контейнер за файл"
// pe.photoPlaceholder: "Photo placeholder text" => "Текст в контейнер за снимка"
// pe.fileOrPhotoPlaceholder: "File or photo placeholder text" => "Текст в контейнер за файл или снимка"
// pehelp.filePlaceholder: "Applies when \"Source type\" is \"Local files\" or when camera is unavailable" => "Прилага се, когато \"Тип източник\" е \"Локални файлове\" или когато камерата не е налична"
// pehelp.photoPlaceholder: "Applies when \"Source type\" is \"Camera\"." => "Прилага се, когато \"Тип източник\" е \"Камера\"."
// pehelp.fileOrPhotoPlaceholder: "Applies when \"Source type\" is \"Local files or camera\"." => "Прилага се, когато \"Тип източник\" е \"Локални файлове или камера\"."
// theme.background: "Background" => "Фон"
// theme.appearance: "Appearance" => "Външен вид"
// ed.themeResetConfirmation: "Do you really want to reset the theme? All your customizations will be lost." => "Наистина ли искате да нулирате темата? Всички ваши персонализации ще бъдат загубени."
// ed.themeResetConfirmationOk: "Yes, reset the theme" => "Да, нулирайте темата"
// theme.headerDescriptionForecolor: "Description forecolor" => "Описание цвят на предния цвят"
// theme.headerInheritWidthFromContainer: "Fit to container" => "Побиране в контейнера"
// signaturepad.showPlaceholder: "Show the placeholder" => "Показване на контейнера"
// signaturepad.placeholder: "Placeholder text" => "Текст в контейнер"
// theme.surveyDescriptionFont: "Survey description font" => "Шрифт за описание на проучването"
// ed.prevFocus: "Focus previous" => "Фокус предишен"
// ed.nextFocus: "Focus next" => "Фокусирай се върху следващия"
// ed.saveTheme: "Save Theme" => "Запиши темата"
// ed.saveThemeTooltip: "Save Theme" => "Запиши темата"
// lg.page_requireName: "Make page required" => "Направи страницата задължителна"
// lg.panel_requireName: "Make page required" => "Направи страницата задължителна"
// signaturepad.signatureWidth: "Signature area width" => "Ширина на областта за подпис"
// signaturepad.signatureHeight: "Signature area height" => "Височина на областта за подпис"
// signaturepad.signatureAutoScaleEnabled: "Auto-scale the signature area" => "Автоматично мащабиране на областта за подписи"
// signaturepad.penMinWidth: "Minimum pen width" => "Минимална ширина на писалката"
// signaturepad.penMaxWidth: "Maximum pen width" => "Максимална ширина на перото"
// theme.logoPosition: "Logo position" => "Позиция на логото"
// theme.headerTitlePosition: "Title position" => "Позиция на заглавието"
// theme.headerDescriptionPosition: "Description position" => "Описание позиция"
// ed.propertyGridNoResultsFound: "No results found" => "Няма намерени резултати"
// pv.leftRight: "Left and right" => "Наляво и надясно"
// p.sourceType: "Source type" => "Тип източник"
// p.fitToContainer: "Fit to container" => "Побиране в контейнера"
// p.setValueExpression: "Set value expression" => "Задаване на израз за стойност"
// ed.choicesLoadedFromWebText: "Choices are loaded from a web service." => "Възможностите за избор се зареждат от уеб услуга."
// ed.choicesLoadedFromWebLinkText: "Go to settings" => "Отидете в настройките"
// ed.choicesLoadedFromWebPreviewTitle: "Preview of loaded choice options" => "Визуализация на заредените опции за избор"
// pe.eachRowUnique: "Prevent duplicate responses in rows" => "Предотвратяване на дублиращи се отговори в редове"
// theme.advancedMode: "Advanced mode" => "Разширен режим"
// theme.backgroundCornerRadius: "Background and corner radius" => "Фон и радиус на ъгъла"
// theme.colorsTitle: "Colors" => "Цветове"
// theme.font: "Font" => "Шрифт"
// theme.lines: "Lines" => "Линии"
// theme.titleFont: "Title font" => "Шрифт на заглавието"
// theme.descriptionFont: "Description font" => "Шрифт за описание"
// theme.shadow: "Shadow effects" => "Ефекти на сянка"
// ed.translateUsigAIFrom: "Translate from: " => "Преведи от: "
// pe.showRefuseItem: "Allow the Refuse to Answer option" => "Разрешаване на опцията \"Отказ на отговор\""
// pe.showDontKnowItem: "Allow the Don't Know option" => "Разрешаване на опцията \"Не знам\""
// pe.showRefuseItem: "Allow the Refuse to Answer option" => "Разрешаване на опцията \"Отказ на отговор\""
// pe.showDontKnowItem: "Allow the Don't Know option" => "Разрешаване на опцията \"Не знам\""
// pv.contain: "Contain" => "Съдържам"
// pv.cover: "Cover" => "Капак"
// pv.fill: "Fill" => "Запълване"

// pe.transposeData: "Transpose rows to columns" => "Транспониране на редове в колони"
// layout.panel: "Layout" => "Оформление"
// layout.question: "Layout" => "Оформление"
// layout.base: "Layout" => "Оформление"
// panel.name: "Panel name" => "Име на панела"
// panel.title: "Panel title" => "Заглавие на панела"
// panel.description: "Panel description" => "Описание на панела"
// panel.visibleIf: "Make the panel visible if" => "Направете панела видим, ако"
// panel.requiredIf: "Make the panel required if" => "Направете панела необходим, ако"
// panel.questionsOrder: "Question order within the panel" => "Ред на въпросите в рамките на панела"
// panel.startWithNewLine: "Display the panel on a new line" => "Показване на панела на нов ред"
// panel.state: "Panel collapse state" => "Състояние на свиване на панела"
// panel.width: "Inline panel width" => "Ширина на вградения панел"
// panel.minWidth: "Minimum panel width" => "Минимална ширина на панела"
// panel.maxWidth: "Maximum panel width" => "Максимална ширина на панела"
// panel.showNumber: "Number panels" => "Числени панели"
// paneldynamic.name: "Panel name" => "Име на панела"
// paneldynamic.title: "Panel title" => "Заглавие на панела"
// paneldynamic.description: "Panel description" => "Описание на панела"
// paneldynamic.visibleIf: "Make the panel visible if" => "Направете панела видим, ако"
// paneldynamic.requiredIf: "Make the panel required if" => "Направете панела необходим, ако"
// paneldynamic.page: "Move the panel to page" => "Преместване на панела на страница"
// paneldynamic.startWithNewLine: "Display the panel on a new line" => "Показване на панела на нов ред"
// paneldynamic.state: "Panel collapse state" => "Състояние на свиване на панела"
// paneldynamic.width: "Inline panel width" => "Ширина на вградения панел"
// paneldynamic.minWidth: "Minimum panel width" => "Минимална ширина на панела"
// paneldynamic.maxWidth: "Maximum panel width" => "Максимална ширина на панела"
// paneldynamic.templateDescription: "Panel description pattern" => "Модел за описание на панела"
// paneldynamic.templateTitle: "Panel title pattern" => "Модел на заглавие на панел"
// paneldynamic.noEntriesText: "Empty panel text" => "Празен текст на панел"
// paneldynamic.templateTabTitle: "Tab title pattern" => "Шаблон на заглавие на раздел"
// paneldynamic.templateVisibleIf: "Make an individual panel visible if" => "Направете отделен панел видим, ако"
// paneldynamic.hideNumber: "Hide the panel number" => "Скриване на номера на панела"
// paneldynamic.titleLocation: "Panel title alignment" => "Подравняване на заглавието на панела"
// paneldynamic.descriptionLocation: "Panel description alignment" => "Подравняване на описанието на панела"
// paneldynamic.templateTitleLocation: "Question title alignment" => "Подравняване на заглавието на въпроса"
// paneldynamic.templateErrorLocation: "Error message alignment" => "Подравняване на съобщение за грешка"
// paneldynamic.newPanelPosition: "New panel location" => "Ново местоположение на панела"
// paneldynamic.keyName: "Prevent duplicate responses in the following question" => "Предотвратяване на дублиращи се отговори в следния въпрос"
// question.name: "Question name" => "Име на въпрос"
// question.title: "Question title" => "Заглавие на въпроса"
// question.description: "Question description" => "Описание на въпроса"
// question.visibleIf: "Make the question visible if" => "Направете въпроса видим, ако"
// question.requiredIf: "Make the question required if" => "Задайте въпроса, който е необходим, ако"
// question.state: "Question box collapse state" => "Състояние на свиване на полето за въпроси"
// question.hideNumber: "Hide the question number" => "Скриване на номера на въпроса"
// question.titleLocation: "Question title alignment" => "Подравняване на заглавието на въпроса"
// question.descriptionLocation: "Question description alignment" => "Подравняване на описанието на въпроса"
// question.errorLocation: "Error message alignment" => "Подравняване на съобщение за грешка"
// question.indent: "Increase the inner indent" => "Увеличаване на вътрешния отстъп"
// question.width: "Inline question width" => "Ширина на вградения въпрос"
// question.minWidth: "Minimum question width" => "Минимална ширина на въпросите"
// question.maxWidth: "Maximum question width" => "Максимална ширина на въпроса"
// question.textUpdateMode: "Update input field value" => "Актуализиране на стойността на входното поле"
// signaturepad.allowClear: "Show the Clear button within signature area" => "Показване на бутона \"Изчисти\" в областта за подписи"
// signaturepad.penColor: "Stroke color" => "Цвят на щрихите"
// comment.rows: "Input field height (in lines)" => "Височина на входното поле (в редове)"
// expression.name: "Expression name" => "Име на израз"
// expression.title: "Expression title" => "Заглавие на израза"
// expression.description: "Expression description" => "Описание на израза"
// expression.expression: "Expression" => "Изразяване"
// trigger.expression: "Expression" => "Изразяване"
// calculatedvalue.expression: "Expression" => "Изразяване"
// survey.description: "Survey description" => "Описание на проучването"
// page.name: "Page name" => "Име на страница"
// page.description: "Page description" => "Описание на страницата"
// page.visibleIf: "Make the page visible if" => "Направете страницата видима, ако"
// page.requiredIf: "Make the page required if" => "Направете страницата задължителна, ако"
// page.questionsOrder: "Question order on the page" => "Ред на въпросите на страницата"
// matrixdropdowncolumn.name: "Column name" => "Име на колона"
// matrixdropdowncolumn.title: "Column title" => "Заглавие на колоната"
// matrixdropdowncolumn.isUnique: "Prevent duplicate responses" => "Предотвратяване на дублиращи се отговори"
// matrixdropdowncolumn.width: "Column width" => "Ширина на колона"
// matrixdropdowncolumn.minWidth: "Minimum column width" => "Минимална ширина на колоната"
// matrixdropdowncolumn.rows: "Input field height (in lines)" => "Височина на входното поле (в редове)"
// matrixdropdowncolumn.visibleIf: "Make the column visible if" => "Направете колоната видима, ако"
// matrixdropdowncolumn.requiredIf: "Make the column required if" => "Направете колоната задължителна, ако"
// matrixdropdowncolumn.showInMultipleColumns: "Each option in a separate column" => "Всяка опция в отделна колона"
// multipletextitem.name: "Name" => "Име"
// multipletextitem.title: "Title" => "Заглавие"
// pe.rateDescriptionLocation: "Label alignment" => "Подравняване на етикети"
// pe.cellErrorLocation: "Cell error message alignment" => "Подравняване на съобщение за грешка в клетка"
// pe.listIsEmpty@columns: "You don't have any columns yet" => "Все още нямате колони"
// pe.listIsEmpty@rows: "You don't have any rows yet" => "Все още нямате никакви редове"
// pe.listIsEmpty@validators: "You don't have any validation rules yet" => "Все още нямате правила за валидиране"
// pe.listIsEmpty@calculatedValues: "You don't have any custom variables yet" => "Все още нямате никакви персонализирани променливи"
// pe.listIsEmpty@triggers: "You don't have any triggers yet" => "Все още нямате никакви тригери"
// pe.listIsEmpty@navigateToUrlOnCondition: "You don't have any links yet" => "Все още нямате връзки"
// pe.addNew@columns: "Add new column" => "Добавяне на нова колона"
// pe.addNew@rows: "Add new row" => "Добавяне на нов ред"
// pe.addNew@validators: "Add new rule" => "Добавяне на ново правило"
// pe.addNew@calculatedValues: "Add new variable" => "Добавяне на нова променлива"
// pe.addNew@triggers: "Add new trigger" => "Добавяне на нов превключвател"
// pe.addNew@navigateToUrlOnCondition: "Add new URL" => "Добавяне на нов URL адрес"
// choicesbyurl.url: "Web service's URL" => "URL адрес на уеб услуга"
// pe.progressBarShowPageTitles: "Display page titles in progress bar" => "Показване на заглавията на страниците в лентата за напредъка"
// pe.progressBarShowPageNumbers: "Display page numbers in progress bar" => "Показване на номерата на страниците в лентата за напредъка"
// itemvalue.visibleIf: "Make the option visible if" => "Направете опцията видима, ако"
// itemvalue.enableIf: "Make the option selectable if" => "Направете опцията избираема, ако"
// panel.layout: "Panel Layout" => "Оформление на панела"
// tabs.questionSettings: "Question Settings" => "Настройки на въпроси"
// pe.url_placeholder: "Ex.: https://api.example.com/books" => "Напр.: https://api.example.com/books"
// pe.path_placeholder: "Ex.: categories.fiction" => "Пример: категории.фантастика"
// pe.questionStartIndex_placeholder: "Ex.: a)" => "Напр.: а)"
// pe.width_placeholder: "Ex.: 6in" => "Пример: 6in"
// pe.minWidth_placeholder: "Ex.: 600px" => "Примерно: 600px"
// pe.maxWidth_placeholder: "Ex.: 50%" => "Примерно: 50%"
// pv.selected: "Selected" => "Избран"
// pv.unselected: "Unselected" => "Неизбран"
// pv.center: "Center" => "Център"
// pv.middle: "Middle" => "Среда"
// pv.next: "Next" => "Следващ"
// pv.last: "Last" => "Трая"
// clearIfInvisible.none: "Never" => "Никога"
// questionsOnPageMode.standard: "Original structure" => "Оригинална структура"
// questionsOnPageMode.singlePage: "Show all questions on one page" => "Показване на всички въпроси на една страница"
// questionsOnPageMode.questionPerPage: "Show single question per page" => "Показване на единичен въпрос на страница"
// pv.auto: "Auto" => "Авто"
// panelsState.firstExpanded: "First expanded" => "Първо разширено"
// rateColorMode.scale: "Scale" => "Мащаб"
// scaleColorMode.monochrome: "Monochrome" => "Монохромен"
// scaleColorMode.colored: "Colored" => "Оцветен"
// state.default: "Locked" => "Заключен"
// showQuestionNumbers.default: "Auto-numbering" => "Автоматично номериране"
// showQuestionNumbers.on: "Auto-numbering" => "Автоматично номериране"
// showQuestionNumbers.onPage: "Reset on each page" => "Нулиране на всяка страница"
// showQuestionNumbers.onpanel: "Reset on each panel" => "Нулиране на всеки панел"
// showQuestionNumbers.onPanel: "Reset on each panel" => "Нулиране на всеки панел"
// showQuestionNumbers.onSurvey: "Continue across the survey" => "Продължете през проучването"
// showQuestionNumbers.off: "No numbering" => "Без номериране"
// descriptionLocation.underTitle: "Under the question title" => "Под заглавието на въпроса"
// descriptionLocation.underInput: "Under the input field" => "Под полето за въвеждане"
// selectToRankAreasLayout.horizontal: "Next to choices" => "До опциите"
// selectToRankAreasLayout.vertical: "Above choices" => "Над опциите"
// displayStyle.decimal: "Decimal" => "Десетичен"
// displayStyle.currency: "Currency" => "Валута"
// displayStyle.percent: "Percentage" => "Процент"
// displayStyle.date: "Date" => "Дата"
// totalDisplayStyle.decimal: "Decimal" => "Десетичен"
// totalDisplayStyle.currency: "Currency" => "Валута"
// totalDisplayStyle.percent: "Percentage" => "Процент"
// totalDisplayStyle.date: "Date" => "Дата"
// rowsOrder.initial: "Original" => "Оригинален"
// questionsOrder.initial: "Original" => "Оригинален"
// showProgressBar.aboveheader: "Above the header" => "Над горния колонтитул"
// showProgressBar.belowheader: "Below the header" => "Под заглавката"
// pv.sum: "Sum" => "Сума"
// pv.count: "Count" => "Граф"
// pv.min: "Min" => "Мин"
// pv.max: "Max" => "Макс"
// pv.avg: "Avg" => "Ср"
// searchMode.contains: "Contains" => "Съдържа"
// searchMode.startsWith: "Starts with" => "Започва с"
// panel.name: "A panel ID that is not visible to respondents." => "ИД на панел, който не е видим за респондентите."
// panel.description: "Type a panel subtitle." => "Въведете подзаглавие на панела."
// panel.visibleIf: "Use the magic wand icon to set a conditional rule that determines panel visibility." => "Използвайте иконата на магическа пръчка, за да зададете условно правило, което определя видимостта на панела."
// panel.enableIf: "Use the magic wand icon to set a conditional rule that disables the read-only mode for the panel." => "Използвайте иконата на магическа пръчка, за да зададете условно правило, което забранява режима само за четене за панела."
// panel.requiredIf: "Use the magic wand icon to set a conditional rule that prevents survey submission unless at least one nested question has an answer." => "Използвайте иконата на магическа пръчка, за да зададете условно правило, което не позволява подаване на проучване, освен ако поне един вложен въпрос няма отговор."
// panel.questionTitleLocation: "Applies to all questions within this panel. If you want to override this setting, define title alignment rules for individual questions. The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Top\" by default)." => "Отнася се за всички въпроси в рамките на този панел. Ако искате да заместите тази настройка, определете правила за подравняване на заглавията за отделни въпроси. Опцията \"Наследяване\" прилага настройката за ниво на страница (ако е зададена) или ниво проучване (\"Горе\" по подразбиране)."
// panel.questionErrorLocation: "Sets the location of an error message in relation to all questions within the panel. The \"Inherit\" option applies the page-level (if set) or survey-level setting." => "Задава местоположението на съобщение за грешка във връзка с всички въпроси в панела. Опцията \"Наследяване\" прилага настройката за ниво на страница (ако е зададена) или ниво проучване."
// panel.questionsOrder: "Keeps the original order of questions or randomizes them. The \"Inherit\" option applies the page-level (if set) or survey-level setting." => "Запазва първоначалния ред на въпросите или ги рандомизира. Опцията \"Наследяване\" прилага настройката за ниво на страница (ако е зададена) или ниво проучване."
// panel.page: "Repositions the panel to the end of a selected page." => "Премества панела в края на избрана страница."
// panel.innerIndent: "Adds space or margin between the panel content and the left border of the panel box." => "Добавя интервал или поле между съдържанието на панела и лявата граница на панелното поле."
// panel.startWithNewLine: "Unselect to display the panel in one line with the previous question or panel. The setting doesn't apply if the panel is the first element in your form." => "Премахнете отметката, за да покажете панела в един ред с предишния въпрос или панел. Настройката не се прилага, ако панелът е първият елемент във вашия формуляр."
// panel.state: "Choose from: \"Expanded\" - the panel is displayed in full and can be collapsed; \"Collapsed\" - the panel displays only the title and description and can be expanded; \"Locked\" - the panel is displayed in full and cannot be collapsed." => "Изберете от: \"Разширен\" - панелът се показва изцяло и може да бъде свит; \"Свит\" - панелът показва само заглавието и описанието и може да бъде разширен; \"Заключен\" - панелът се показва изцяло и не може да се свива."
// panel.width: "Sets the width of the panel in proportion to other survey elements in the same line. Accepts CSS values (px, %, in, pt, etc.)." => "Задава ширината на панела пропорционално на другите елементи на изследването в същия ред. Приема CSS стойности (px, %, in, pt и т.н.)."
// paneldynamic.name: "A panel ID that is not visible to respondents." => "ИД на панел, който не е видим за респондентите."
// paneldynamic.description: "Type a panel subtitle." => "Въведете подзаглавие на панела."
// paneldynamic.visibleIf: "Use the magic wand icon to set a conditional rule that determines panel visibility." => "Използвайте иконата на магическа пръчка, за да зададете условно правило, което определя видимостта на панела."
// paneldynamic.enableIf: "Use the magic wand icon to set a conditional rule that disables the read-only mode for the panel." => "Използвайте иконата на магическа пръчка, за да зададете условно правило, което забранява режима само за четене за панела."
// paneldynamic.requiredIf: "Use the magic wand icon to set a conditional rule that prevents survey submission unless at least one nested question has an answer." => "Използвайте иконата на магическа пръчка, за да зададете условно правило, което не позволява подаване на проучване, освен ако поне един вложен въпрос няма отговор."
// paneldynamic.templateTitleLocation: "Applies to all questions within this panel. If you want to override this setting, define title alignment rules for individual questions. The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Top\" by default)." => "Отнася се за всички въпроси в рамките на този панел. Ако искате да заместите тази настройка, определете правила за подравняване на заглавията за отделни въпроси. Опцията \"Наследяване\" прилага настройката за ниво на страница (ако е зададена) или ниво проучване (\"Горе\" по подразбиране)."
// paneldynamic.templateErrorLocation: "Sets the location of an error message in relation to a question with invalid input. Choose between: \"Top\" - an error text is placed at the top of the question box; \"Bottom\" - an error text is placed at the bottom of the question box. The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Top\" by default)." => "Задава местоположението на съобщение за грешка във връзка с въпрос с невалиден вход. Изберете между: \"Top\" - в горната част на полето за въпроси се поставя текст за грешка; \"Отдолу\" - в долната част на полето за въпроси се поставя текст за грешка. Опцията \"Наследяване\" прилага настройката за ниво на страница (ако е зададена) или ниво проучване (\"Горе\" по подразбиране)."
// paneldynamic.errorLocation: "Sets the location of an error message in relation to all questions within the panel. The \"Inherit\" option applies the page-level (if set) or survey-level setting." => "Задава местоположението на съобщение за грешка във връзка с всички въпроси в панела. Опцията \"Наследяване\" прилага настройката за ниво на страница (ако е зададена) или ниво проучване."
// paneldynamic.page: "Repositions the panel to the end of a selected page." => "Премества панела в края на избрана страница."
// paneldynamic.innerIndent: "Adds space or margin between the panel content and the left border of the panel box." => "Добавя интервал или поле между съдържанието на панела и лявата граница на панелното поле."
// paneldynamic.startWithNewLine: "Unselect to display the panel in one line with the previous question or panel. The setting doesn't apply if the panel is the first element in your form." => "Премахнете отметката, за да покажете панела в един ред с предишния въпрос или панел. Настройката не се прилага, ако панелът е първият елемент във вашия формуляр."
// paneldynamic.state: "Choose from: \"Expanded\" - the panel is displayed in full and can be collapsed; \"Collapsed\" - the panel displays only the title and description and can be expanded; \"Locked\" - the panel is displayed in full and cannot be collapsed." => "Изберете от: \"Разширен\" - панелът се показва изцяло и може да бъде свит; \"Свит\" - панелът показва само заглавието и описанието и може да бъде разширен; \"Заключен\" - панелът се показва изцяло и не може да се свива."
// paneldynamic.width: "Sets the width of the panel in proportion to other survey elements in the same line. Accepts CSS values (px, %, in, pt, etc.)." => "Задава ширината на панела пропорционално на другите елементи на изследването в същия ред. Приема CSS стойности (px, %, in, pt и т.н.)."
// paneldynamic.templateTitle: "Type in a template for dynamic panel titles. Use {panelIndex} for the panel's general position and {visiblePanelIndex} for its order among visible panels. Insert these placeholders into the pattern to add automatic numbering." => "Въведете шаблон за динамични заглавия на панели. Използвайте {panelIndex} за общата позиция на панела и {visiblePanelIndex} за реда му сред видимите панели. Вмъкнете тези контейнери в шаблона, за да добавите автоматично номериране."
// paneldynamic.templateTabTitle: "Type in a template for tab titles. Use {panelIndex} for a panel's general position and {visiblePanelIndex} for its order among visible panels. Insert these placeholders into the pattern to add automatic numbering." => "Въведете шаблон за заглавията на разделите. Използвайте {panelIndex} за общата позиция на панела и {visiblePanelIndex} за реда му между видимите панели. Вмъкнете тези контейнери в шаблона, за да добавите автоматично номериране."
// paneldynamic.templateVisibleIf: "This setting allows you to control the visibility of individual panels within the dynamic panel. Use the `{panel}` placeholder to reference the current panel in your expression." => "Тази настройка ви позволява да контролирате видимостта на отделните панели в динамичния панел. Използвайте контейнера \"{panel}\", за да препращате към текущия панел във вашия израз."
// paneldynamic.titleLocation: "This setting is automatically inherited by all questions within this panel. If you want to override this setting, define title alignment rules for individual questions. The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Top\" by default)." => "Тази настройка се наследява автоматично от всички въпроси в този панел. Ако искате да заместите тази настройка, определете правила за подравняване на заглавията за отделни въпроси. Опцията \"Наследяване\" прилага настройката за ниво на страница (ако е зададена) или ниво проучване (\"Горе\" по подразбиране)."
// paneldynamic.descriptionLocation: "The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Under the panel title\" by default)." => "Опцията \"Наследяване\" прилага настройката за ниво на страница (ако е зададена) или ниво проучване (\"Под заглавието на панела\" по подразбиране)."
// paneldynamic.newPanelPosition: "Defines the position of a newly added panel. By default, new panels are added to the end. Select \"Next\" to insert a new panel after the current one." => "Определя позицията на новодобавен панел. По подразбиране в края се добавят нови панели. Изберете \"Напред\", за да вмъкнете нов панел след текущия."
// paneldynamic.defaultValueFromLastPanel: "Duplicates answers from the last panel and assigns them to the next added dynamic panel." => "Дублира отговорите от последния панел и ги присвоява на следващия добавен динамичен панел."
// paneldynamic.keyName: "Reference a question name to require a user to provide a unique response for this question in each panel." => "Препратка към име на въпрос, за да се изисква от потребителя да предостави уникален отговор на този въпрос във всеки панел."
// pehelp.defaultValueExpression: "This setting allows you to assign a default answer value based on an expression. The expression can include basic calculations - `{q1_id} + {q2_id}`, Boolean expressions, such as `{age} > 60`, and functions: `iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, etc. The value determined by this expression serves as the initial default value that can be overridden by a respondent's manual input." => "Тази настройка ви позволява да присвоите стойност за отговор по подразбиране на базата на израз. Изразът може да включва основни изчисления - '{q1_id} + {q2_id}', булеви изрази, като '{age} > 60', и функции: 'iif()', 'today()', 'age()', 'min()', 'max()', 'avg()' и др. Стойността, определена от този израз, служи като начална стойност по подразбиране, която може да бъде заместена от ръчното въвеждане на респондента."
// pehelp.resetValueIf: "Use the magic wand icon to set a conditional rule that determines when a respondent's input is reset to the value based on the \"Default value expression\" or \"Set value expression\" or to the \"Default answer\" value (if either is set)." => "Използвайте иконата на магическа пръчка, за да зададете условно правило, което определя кога входът на респондента се връща към стойността въз основа на \"Израз за стойност по подразбиране\" или \"Задаване на израз за стойност\" или към стойността \"Отговор по подразбиране\" (ако е зададена такава)."
// pehelp.setValueIf: "Use the magic wand icon to set a conditional rule that determines when to run the \"Set value expression\" and dynamically assign the resulting value as a response." => "Използвайте иконата на магическа пръчка, за да зададете условно правило, което определя кога да изпълните \"Задаване на израз за стойност\" и динамично да зададете получената стойност като отговор."
// pehelp.setValueExpression: "Specify an expression that defines the value to be set when the conditions in the \"Set value if\" rule are met. The expression can include basic calculations - `{q1_id} + {q2_id}`, Boolean expressions, such as `{age} > 60`, and functions: `iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, etc. The value determined by this expression can be overridden by a respondent's manual input." => "Задайте израз, който определя стойността, която трябва да бъде зададена, когато са изпълнени условията в правилото \"Задаване на стойност ако\". Изразът може да включва основни изчисления - '{q1_id} + {q2_id}', булеви изрази, като '{age} > 60', и функции: 'iif()', 'today()', 'age()', 'min()', 'max()', 'avg()' и др. Стойността, определена от този израз, може да бъде заместена от ръчното въвеждане на респондента."
// question.name: "A question ID that is not visible to respondents." => "Идентификационен номер на въпрос, който не е видим за респондентите."
// question.description: "Type a question subtitle." => "Въведете подзаглавие на въпрос."
// question.visibleIf: "Use the magic wand icon to set a conditional rule that determines question visibility." => "Използвайте иконата на вълшебната пръчица, за да зададете условно правило, което определя видимостта на въпросите."
// question.enableIf: "Use the magic wand icon to set a conditional rule that disables the read-only mode for the question." => "Използвайте иконата на магическа пръчка, за да зададете условно правило, което забранява режима само за четене за въпроса."
// question.requiredIf: "Use the magic wand icon to set a conditional rule that prevents survey advancing or submission unless the question received an answer." => "Използвайте иконата на магическа пръчка, за да зададете условно правило, което предотвратява напредването или подаването на проучването, освен ако въпросът не получи отговор."
// question.startWithNewLine: "Unselect to display the question in one line with the previous question or panel. The setting doesn't apply if the question is the first element in your form." => "Премахнете отметката, за да покажете въпроса в един ред с предишния въпрос или панел. Настройката не се прилага, ако въпросът е първият елемент във вашия формуляр."
// question.page: "Repositions the question to the end of a selected page." => "Премества въпроса в края на избрана страница."
// question.state: "Choose from: \"Expanded\" - the question box is displayed in full and can be collapsed; \"Collapsed\" - the question box displays only the title and description and can be expanded; \"Locked\" - the question box is displayed in full and cannot be collapsed." => "Изберете от: \"Разширен\" - полето за въпроси се показва изцяло и може да бъде свито; \"Свита\" - полето за въпроси показва само заглавието и описанието и може да бъде разширено; \"Заключена\" - полето за въпроси се показва изцяло и не може да бъде свито."
// question.titleLocation: "Overrides title alignment rules defined on a panel, page or survey level. The \"Inherit\" option applies any higher-level settings (if set) or survey-level setting (\"Top\" by default)." => "Отменя правилата за подравняване на заглавията, дефинирани на ниво панел, страница или проучване. Опцията \"Наследяване\" прилага всички настройки от по-високо ниво (ако са зададени) или настройка на ниво проучване (\"Top\" по подразбиране)."
// question.descriptionLocation: "The \"Inherit\" option applies the survey-level setting (\"Under the question title\" by default)." => "Опцията \"Наследяване\" прилага настройката на ниво проучване (\"Под заглавието на въпроса\" по подразбиране)."
// question.errorLocation: "Sets the location of an error message in relation to the question with invalid input. Choose between: \"Top\" - an error text is placed at the top of the question box; \"Bottom\" - an error text is placed at the bottom of the question box. The \"Inherit\" option applies the survey-level setting (\"Top\" by default)." => "Задава местоположението на съобщение за грешка във връзка с въпроса с невалиден вход. Изберете между: \"Top\" - в горната част на полето за въпроси се поставя текст за грешка; \"Отдолу\" - в долната част на полето за въпроси се поставя текст за грешка. Опцията \"Наследяване\" прилага настройката за ниво проучване (\"Top\" по подразбиране)."
// question.indent: "Adds space or margin between the question content and the left border of the question box." => "Добавя интервал или поле между съдържанието на въпроса и лявата граница на полето за въпроси."
// question.width: "Sets the width of the question in proportion to other survey elements in the same line. Accepts CSS values (px, %, in, pt, etc.)." => "Задава ширината на въпроса пропорционално на другите елементи на изследването в същия ред. Приема CSS стойности (px, %, in, pt и т.н.)."
// surveyvalidator.expression: "Use the magic wand icon to set a validation rule for the question." => "Използвайте иконата на магическа пръчка, за да зададете валидиращо правило за въпроса."
// question.textUpdateMode: "Choose from: \"On lost focus\" - the value is updated when the input field loses focus; \"While typing\" - the value is updated in real-time, as users are typing. The \"Inherit\" option applies the survey-level setting (\"On lost focus\" by default)." => "Изберете от: \"На загубен фокус\" - стойността се актуализира, когато входното поле загуби фокус; \"Докато пишете\" - стойността се актуализира в реално време, докато потребителите пишат. Опцията \"Наследяване\" прилага настройката на ниво проучване (\"На загубен фокус\" по подразбиране)."
// question.url: "You can use any web service as a data source for multiple-choice questions. To populate choice values, enter the URL of the service providing the data." => "Можете да използвате всяка уеб услуга като източник на данни за въпроси с множествен избор. За да попълните стойности за избор, въведете URL адреса на услугата, предоставяща данните."
// question.searchMode: "A comparison operation used to filter the drop-down list." => "Операция за сравнение, използвана за филтриране на падащия списък."
// signaturepad.signatureWidth: "Sets the width of the displayed signature area and the resulting image." => "Задава ширината на показаната област за подпис и полученото изображение."
// signaturepad.signatureHeight: "Sets the height of the displayed signature area and the resulting image." => "Задава височината на показаната област за подпис и полученото изображение."
// signaturepad.signatureAutoScaleEnabled: "Select if you want the signature area to fill all available space within the question box while maintaining the default 3:2 aspect ratio. When custom width and height values are set, the setting will keep the aspect ratio of these dimensions." => "Изберете дали искате областта за подпис да запълни цялото налично пространство в полето за въпроси, като същевременно запазите съотношението по подразбиране 3:2. Когато са зададени стойности за ширина и височина по избор, настройката ще запази пропорциите на тези размери."
// file.imageHeight: "Adjusts the height of the image in the survey results." => "Регулира височината на изображението в резултатите от проучването."
// file.imageWidth: "Adjusts the width of the image in the survey results." => "Регулира ширината на изображението в резултатите от проучването."
// imagepicker.imageHeight: "Overrides the minimum and maximum height values." => "Отменя минималните и максималните стойности на височината."
// imagepicker.imageWidth: "Overrides the minimum and maximum width values." => "Отменя минималните и максималните стойности на ширината."
// imagepicker.choices: "\"Value\" serves as an item ID used in conditional rules; \"Text\" is displayed to respondents." => "\"Стойност\" служи като ИД на артикул, използван в условни правила; \"Текст\" се показва на респондентите."
// text.size: "This setting only resizes the input field and doesn't affect the width of the question box. To limit the accepted input length, go to <b>Validation → Maximum character limit</b>." => "Тази настройка само преоразмерява входното поле и не влияе на ширината на полето за въпроси. За да ограничите приетата дължина на въвеждане, отидете на <b>Проверка → Максимален брой знаци</b>."
// comment.rows: "Sets the number of displayed lines in the input field. If the input takes up more lines, the scroll bar will appear." => "Задава броя на показваните редове в полето за въвеждане. Ако входът заема повече редове, ще се появи плъзгачът."
// survey.mode: "Choose between: \"Editable\" - enables respondents to fill out your survey; \"Read-only\" - disables form editing." => "Изберете между: \"Редактируем\" - дава възможност на респондентите да попълнят анкетата Ви; \"Само за четене\" - забранява редактирането на формуляри."
// matrixdropdowncolumn.name: "A column ID that is not visible to respondents." => "ИД на колона, която не се вижда от респондентите."
// matrixdropdowncolumn.isUnique: "When enabled for a column, a respondent is required to provide a unique response for each question within this column." => "Когато е разрешено за колона, респондентът трябва да предостави уникален отговор за всеки въпрос в тази колона."
// matrixdropdowncolumn.rows: "Sets the number of displayed lines in the input field. If the input takes up more lines, the scroll bar will appear." => "Задава броя на показваните редове в полето за въвеждане. Ако входът заема повече редове, ще се появи плъзгачът."
// matrixdropdowncolumn.visibleIf: "Use the magic wand icon to set a conditional rule that determines column visibility." => "Използвайте иконата на магическа пръчка, за да зададете условно правило, което определя видимостта на колоната."
// matrixdropdowncolumn.enableIf: "Use the magic wand icon to set a conditional rule that disables the read-only mode for the column." => "Използвайте иконата на магическа пръчка, за да зададете условно правило, което забранява режима само за четене за колоната."
// matrixdropdowncolumn.requiredIf: "Use the magic wand icon to set a conditional rule that prevents survey submission unless at least one nested question has an answer." => "Използвайте иконата на магическа пръчка, за да зададете условно правило, което не позволява подаване на проучване, освен ако поне един вложен въпрос няма отговор."
// matrixdropdowncolumn.showInMultipleColumns: "When selected, creates an individual column for each choice option." => "Когато е избрано, създава отделна колона за всяка опция за избор."
// pehelp.widthMode: "Choose from: \"Static\" - sets a fixed width; \"Responsive\" - makes the survey occupy the full width of the screen; \"Auto\" - applies either of the two depending on the question types used." => "Изберете от: \"Статичен\" - задава фиксирана ширина; \"Responsive\" - прави проучването да заема цялата ширина на екрана; \"Auto\" - прилага се всеки от двата в зависимост от използваните типове въпроси."
// pehelp.logo: "Paste an image link (no size limits) or click the folder icon to browse a file from your computer (up to 64KB)." => "Поставете връзка към изображение (без ограничения за размера) или щракнете върху иконата на папката, за да прегледате файл от компютъра си (до 64 КБ)."
// pehelp.logoWidth: "Sets a logo width in CSS units (px, %, in, pt, etc.)." => "Задава ширина на логото в CSS единици (px, %, in, pt и т.н.)."
// pehelp.logoHeight: "Sets a logo height in CSS units (px, %, in, pt, etc.)." => "Задава височина на логото в CSS единици (px, %, in, pt и т.н.)."
// pehelp.logoFit: "Choose from: \"None\" - image maintains its original size; \"Contain\" - image is resized to fit while maintaining its aspect ratio; \"Cover\" - image fills the entire box while maintaining its aspect ratio; \"Fill\" - image is stretched to fill the box without maintaining its aspect ratio." => "Изберете от: \"Няма\" - изображението запазва оригиналния си размер; \"Съдържа\" - изображението се преоразмерява, за да се побере, като същевременно се запазва съотношението на страните; \"Cover\" - изображението запълва цялата кутия, като същевременно запазва съотношението на страните; \"Fill\" - изображението се разтяга, за да запълни кутията, без да се поддържа съотношението на страните."
// pehelp.goNextPageAutomatic: "Select if you want the survey to advance to the next page automatically after a respondent answers all questions on the current page." => "Изберете дали искате проучването да премине автоматично към следващата страница, след като респондентът отговори на всички въпроси на текущата страница."
// pehelp.showNavigationButtons: "Sets the visibility and location of navigation buttons on a page." => "Задава видимостта и местоположението на бутоните за навигация на дадена страница."
// pehelp.showProgressBar: "Sets the visibility and location of a progress bar. The \"Auto\" value displays the progress bar above or below the survey header." => "Задава видимостта и местоположението на лентата за напредъка. Стойността \"Автоматично\" показва лентата за напредъка над или под заглавката на проучването."
// pehelp.showPreviewBeforeComplete: "Enable the preview page with all or answered questions only." => "Разрешете страницата за визуализация само с всички въпроси или само с отговор."
// pehelp.questionTitleLocation: "Applies to all questions within the survey. This setting can be overridden by title alignment rules at lower levels: panel, page, or question. A lower-level setting will override those on a higher level." => "Отнася се за всички въпроси в рамките на проучването. Тази настройка може да бъде заместена от правилата за подравняване на заглавията на по-ниските нива: панел, страница или въпрос. Настройката от по-ниско ниво ще замени тези на по-високо ниво."
// pehelp.requiredText: "A symbol or a sequence of symbols indicating that an answer is required." => "Символ или поредица от символи, показващи, че е необходим отговор."
// pehelp.questionStartIndex: "Enter a number or letter with which you want to start numbering." => "Въведете число или буква, с които искате да започнете номерирането."
// pehelp.questionErrorLocation: "Sets the location of an error message in relation to the question with invalid input. Choose between: \"Top\" - an error text is placed at the top of the question box; \"Bottom\" - an error text is placed at the bottom of the question box." => "Задава местоположението на съобщение за грешка във връзка с въпроса с невалиден вход. Изберете между: \"Top\" - в горната част на полето за въпроси се поставя текст за грешка; \"Отдолу\" - в долната част на полето за въпроси се поставя текст за грешка."
// pehelp.focusFirstQuestionAutomatic: "Select if you want the first input field on each page ready for text entry." => "Изберете дали искате първото поле за въвеждане на всяка страница да е готово за въвеждане на текст."
// pehelp.questionsOrder: "Keeps the original order of questions or randomizes them. The effect of this setting is only visible in the Preview tab." => "Запазва първоначалния ред на въпросите или ги рандомизира. Ефектът от тази настройка се вижда само в раздела Визуализация ."
// pehelp.maxTextLength: "For text entry questions only." => "Само за въпроси за въвеждане на текст."
// pehelp.maxOthersLength: "For question comments only." => "Само за въпросителни коментари."
// pehelp.autoGrowComment: "Select if you want question comments and Long Text questions to auto-grow in height based on the entered text length." => "Изберете дали искате коментарите за въпроси и въпросите с дълъг текст автоматично да нарастват на височина въз основа на въведената дължина на текста."
// pehelp.allowResizeComment: "For question comments and Long Text questions only." => "Само за коментари с въпроси и въпроси с дълъг текст."
// pehelp.calculatedValues: "Custom variables serve as intermediate or auxiliary variables used in form calculations. They take respondent inputs as source values. Each custom variable has a unique name and an expression it's based on." => "Персонализираните променливи служат като междинни или спомагателни променливи, използвани в изчисленията на формуляра. Те приемат входните данни на респондентите като изходни стойности. Всяка персонализирана променлива има уникално име и израз, на който се базира."
// pehelp.includeIntoResult: "Select if you wish the calculated value of the expression to be saved along with survey results." => "Изберете дали искате изчислената стойност на израза да бъде записана заедно с резултатите от проучването."
// pehelp.triggers: "A trigger is an event or condition that is based on an expression. Once the expression is evaluated to \"true\", a trigger sets off an action. Such an action can optionally have a target question it affects." => "Превключвателят е събитие или условие, което се основава на израз. След като изразът е оценен като \"true\", спусъкът задейства действие. Такова действие може по избор да има целеви въпрос, който засяга."
// pehelp.clearInvisibleValues: "Choose whether or not to clear values for questions hidden by conditional logic and when to do it." => "Изберете дали да изчистите стойностите за въпроси, скрити от условната логика, и кога да го направите."
// pehelp.textUpdateMode: "Choose from: \"On lost focus\" - the value is updated when the input field loses focus; \"While typing\" - the value is updated in real-time, as users are typing." => "Изберете от: \"На загубен фокус\" - стойността се актуализира, когато входното поле загуби фокус; \"Докато пишете\" - стойността се актуализира в реално време, докато потребителите пишат."
// pehelp.columns: "The left value serves as a column ID used in conditional rules, the right value is displayed to respondents." => "Лявата стойност служи като ИД на колона, използвана в условни правила, дясната стойност се показва на респондентите."
// pehelp.rows: "The left value serves as a row ID used in conditional rules, the right value is displayed to respondents." => "Лявата стойност служи като ИД на ред, използван в условни правила, дясната стойност се показва на респондентите."
// pehelp.columnMinWidth: "Accepts CSS values (px, %, in, pt, etc.)." => "Приема CSS стойности (px, %, in, pt и т.н.)."
// pehelp.rowTitleWidth: "Accepts CSS values (px, %, in, pt, etc.)." => "Приема CSS стойности (px, %, in, pt и т.н.)."
// pehelp.cellErrorLocation: "Sets the location of an error message in relation to a cell with invalid input. The \"Inherit\" option applies the setting from the \"Error message alignment\" property." => "Задава местоположението на съобщение за грешка по отношение на клетка с невалиден вход. Опцията \"Наследяване\" прилага настройката от свойството \"Подравняване на съобщение за грешка\"."
// pehelp.keyDuplicationError: "When the \"Prevent duplicate responses\" property is enabled, a respondent attempting to submit a duplicate entry will receive the following error message." => "Когато свойството \"Предотвратяване на дублиращи се отговори\" е разрешено, респондентът, който се опитва да подаде дублиран запис, ще получи следното съобщение за грешка."
// pehelp.totalExpression: "Allows you to calculate total values based on an expression. The expression can include basic calculations (`{q1_id} + {q2_id}`), Boolean expressions (`{age} > 60`) and functions ('iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, etc.)." => "Позволява ви да изчислявате общи стойности на базата на израз. Изразът може да включва основни изчисления ('{q1_id} + {q2_id}'), булеви изрази ('{age} > 60') и функции ('iif()', 'today()', 'age()', 'min()', 'max()', 'avg()' и т.н.)."
// pehelp.confirmDelete: "Triggers a prompt asking to confirm the row deletion." => "Задейства подкана с молба за потвърждаване на изтриването на реда."
// pehelp.defaultValueFromLastRow: "Duplicates answers from the last row and assigns them to the next added dynamic row." => "Дублира отговорите от последния ред и ги присвоява на следващия добавен динамичен ред."
// pehelp.description: "Type a subtitle." => "Въведете субтитри."
// pehelp.locale: "Choose a language to begin creating your survey. To add a translation, switch to a new language and translate the original text here or in the Translations tab." => "Изберете език, за да започнете да създавате проучването си. За да добавите превод, превключете на нов език и преведете оригиналния текст тук или в раздела Преводи."
// pehelp.detailPanelMode: "Sets the location of a details section in relation to a row. Choose from: \"None\" - no expansion is added; \"Under the row\" - a row expansion is placed under each row of the matrix; \"Under the row, display one row expansion only\" - an expansion is displayed under a single row only, the remaining row expansions are collapsed." => "Задава местоположението на раздел с подробни данни по отношение на ред. Изберете от: \"Няма\" - не се добавя разширение; \"Под реда\" - под всеки ред на матрицата се поставя разширение на реда; \"Под реда покажете само разширение на един ред\" - разширение се показва само под един ред, останалите разширения на реда са свити."
// pehelp.imageFit: "Choose from: \"None\" - image maintains its original size; \"Contain\" - image is resized to fit while maintaining its aspect ratio; \"Cover\" - image fills the entire box while maintaining its aspect ratio; \"Fill\" - image is stretched to fill the box without maintaining its aspect ratio." => "Изберете от: \"Няма\" - изображението запазва оригиналния си размер; \"Съдържа\" - изображението се преоразмерява, за да се побере, като същевременно се запазва съотношението на страните; \"Cover\" - изображението запълва цялата кутия, като същевременно запазва съотношението на страните; \"Fill\" - изображението се разтяга, за да запълни кутията, без да се поддържа съотношението на страните."
// pehelp.autoGrow: "Gradually increases the height of the input field as data is being entered. Overrides the \"Input field height (in lines)\" setting." => "Постепенно увеличава височината на входното поле при въвеждане на данни. Замества настройката \"Височина на входното поле (в редове)\"."
// pehelp.allowResize: "The resize handle (or grip) appears in the corner and can be dragged to alter the size of the input field." => "Манипулаторът за преоразмеряване (или ръкохватката) се появява в ъгъла и може да се плъзга, за да се промени размерът на входното поле."
// pehelp.maxTimeToFinish: "A time interval in seconds after which the survey auto-advances to the Thank You page." => "Интервал от време в секунди, след което проучването автоматично преминава към страницата \"Благодаря\"."
// pehelp.maxTimeToFinishPage: "A time interval in seconds after which the survey auto-advances to the next page." => "Интервал от време в секунди, след който проучването автоматично преминава към следващата страница."
// page.maxTimeToFinish: "A time interval in seconds after which the survey auto-advances to the next page." => "Интервал от време в секунди, след който проучването автоматично преминава към следващата страница."
// page.visibleIf: "Use the magic wand icon to set a conditional rule that determines page visibility." => "Използвайте иконата на магическа пръчка, за да зададете условно правило, което определя видимостта на страницата."
// page.enableIf: "Use the magic wand icon to set a conditional rule that disables the read-only mode for the page." => "Използвайте иконата на магическа пръчка, за да зададете условно правило, което забранява режима само за четене за страницата."
// page.requiredIf: "Use the magic wand icon to set a conditional rule that prevents survey submission unless at least one nested question has an answer." => "Използвайте иконата на магическа пръчка, за да зададете условно правило, което не позволява подаване на проучване, освен ако поне един вложен въпрос няма отговор."
// page.questionTitleLocation: "Applies to all questions within this page. If you want to override this setting, define title alignment rules for individual questions or panels. The \"Inherit\" option applies the survey-level setting (\"Top\" by default)." => "Отнася се за всички въпроси в тази страница. Ако искате да замените тази настройка, определете правила за подравняване на заглавията за отделни въпроси или панели. Опцията \"Наследяване\" прилага настройката за ниво проучване (\"Top\" по подразбиране)."
// page.questionErrorLocation: "Sets the location of an error message in relation to the question with invalid input. Choose between: \"Top\" - an error text is placed at the top of the question box; \"Bottom\" - an error text is placed at the bottom of the question box. The \"Inherit\" option applies the survey-level setting (\"Top\" by default)." => "Задава местоположението на съобщение за грешка във връзка с въпроса с невалиден вход. Изберете между: \"Top\" - в горната част на полето за въпроси се поставя текст за грешка; \"Отдолу\" - в долната част на полето за въпроси се поставя текст за грешка. Опцията \"Наследяване\" прилага настройката за ниво проучване (\"Top\" по подразбиране)."
// page.questionsOrder: "Keeps the original order of questions or randomizes them. The \"Inherit\" option applies the survey-level setting (\"Original\" by default). The effect of this setting is only visible in the Preview tab." => "Запазва първоначалния ред на въпросите или ги рандомизира. Опцията \"Наследяване\" прилага настройката на ниво проучване (\"Оригинал\" по подразбиране). Ефектът от тази настройка се вижда само в раздела Визуализация ."
// page.navigationButtonsVisibility: "Sets the visibility of navigation buttons on the page. The \"Inherit\" option applies the survey-level setting, which defaults to \"Visible\"." => "Задава видимостта на бутоните за навигация на страницата. Опцията \"Наследяване\" прилага настройката на ниво проучване, която по подразбиране е \"Видима\"."
// pehelp.showTimerPanel: "Sets the visibility and location of a timer on a page." => "Задава видимостта и местоположението на таймера на страницата."
// pehelp.panelsState: "Choose from: \"Locked\" - users cannot expand or collapse panels; \"Collapse all\" - all panels start in a collapsed state; \"Expand all\" - all panels start in an expanded state; \"First expanded\" - only the first panel is initially expanded." => "Изберете от: \"Заключени\" - потребителите не могат да разширяват или свиват панели; \"Свиване на всички\" - всички панели започват в срутено състояние; \"Разширяване на всички\" - всички панели започват в разширено състояние; \"Първо разширен\" - само първият панел първоначално се разширява."
// pehelp.imageLinkName: "Enter a shared property name within the array of objects that contains the image or video file URLs you want to display in the choice list." => "Въведете име на споделено свойство в масива от обекти, съдържащ URL адресите на изображения или видеофайлове, които искате да покажете в списъка за избор."
// pehelp.choices: "The left value serves as an item ID used in conditional rules, the right value is displayed to respondents." => "Лявата стойност служи като ИД на артикул, използван в условни правила, дясната стойност се показва на респондентите."
// pehelp.title: "Type a user-friendly title to display." => "Въведете удобно за потребителя заглавие за показване."
// pehelp.waitForUpload: "Ensures that users won't complete the survey until files are uploaded." => "Гарантира, че потребителите няма да завършат проучването, докато не бъдат качени файлове."
// pehelp.minWidth: "Accepts CSS values (px, %, in, pt, etc.)." => "Приема CSS стойности (px, %, in, pt и т.н.)."
// pehelp.maxWidth: "Accepts CSS values (px, %, in, pt, etc.)." => "Приема CSS стойности (px, %, in, pt и т.н.)."
// pehelp.width: "Accepts CSS values (px, %, in, pt, etc.)." => "Приема CSS стойности (px, %, in, pt и т.н.)."
// pehelp.useDisplayValuesInDynamicTexts: "In single- and multiple-selection question types, each choice option has an ID and display value. When selected, this setting shows a display value instead of an ID value in HTML questions and dynamic titles and descriptions of survey elements." => "При типовете въпроси с единичен и множествен избор всяка опция за избор има ИД и стойност на показване. Когато е избрана, тази настройка показва показвана стойност вместо стойност на ИД в HTML въпроси и динамични заглавия и описания на елементи от проучване."
// pehelp.clearIfInvisible: "Choose whether or not to clear question values hidden by conditional logic and when to do it. The \"Inherit\" option applies the survey-level setting (\"Upon survey completion\" by default)." => "Изберете дали да изчистите стойностите на въпросите, скрити от условната логика, и кога да го направите. Опцията \"Наследяване\" прилага настройката на ниво проучване (\"При завършване на проучването\" по подразбиране)."
// pehelp.choicesFromQuestionMode: "Choose from: \"All\" - copies all choice options from the selected question; \"Selected\" - dynamically copies only selected choice options; \"Unselected\" - dynamically copies only unselected choice options. The \"None\" and \"Other\" options are copied by default if enabled in the source question." => "Изберете от: \"Всички\" - копира всички опции за избор от избрания въпрос; \"Избрано\" - динамично копира само избраните опции за избор; \"Неизбрани\" - динамично копира само неизбрани опции за избор. Опциите \"Няма\" и \"Други\" се копират по подразбиране, ако са разрешени във въпроса източник."
// pehelp.showOtherItem: "When selected, users can include additional input in a separate comment box." => "Когато е избрано, потребителите могат да включат допълнително въвеждане в отделно поле за коментари."
// pehelp.separateSpecialChoices: "Displays each special choice option (\"None\", \"Other\", \"Select All\") on a new line, even when using a multiple-column layout." => "Показва всяка специална опция за избор (\"Няма\", \"Други\", \"Избери всички\") на нов ред, дори когато се използва оформление с няколко колони."
// pehelp.path: "Specify the location within the service dataset where the target array of objects is located. Leave empty if the URL already points to the array." => "Задайте местоположението в набора от данни на услугата, където се намира целевият масив от обекти. Оставете празно, ако URL адресът вече сочи към масива."
// pehelp.titleName: "Enter a uniform property name within the array of objects that contains the values you want to display in the choice list." => "Въведете единно име на свойство в масива от обекти, съдържащ стойностите, които искате да покажете в списъка за избор."
// pehelp.allowEmptyResponse: "Select to allow the service to return an empty response or array." => "Изберете, за да позволите на услугата да върне празен отговор или масив."
// pehelp.choicesVisibleIf: "Use the magic wand icon to set a conditional rule that determines the visibility of all choice options." => "Използвайте иконата на магическа пръчка, за да зададете условно правило, което определя видимостта на всички опции за избор."
// pehelp.rateValues: "The left value serves as an item ID used in conditional rules, the right value is displayed to respondents." => "Лявата стойност служи като ИД на артикул, използван в условни правила, дясната стойност се показва на респондентите."
// rating.displayMode: "\"Auto\" selects between the \"Buttons\" and \"Dropdown\" modes based on the available width. When the width is insufficient to display buttons, the question displays a dropdown." => "\"Автоматично\" избира между режимите \"Бутони\" и \"Падащо меню\" въз основа на наличната ширина. Когато ширината е недостатъчна за показване на бутони, въпросът показва падащо меню."
// pehelp.valuePropertyName: "Allows you to connect questions that produce results in different formats. When such questions are linked together using a join identifier, this shared property stores selected question values." => "Позволява ви да свързвате въпроси, които дават резултати в различни формати. Когато такива въпроси са свързани помежду си с помощта на идентификатор на съединение, това споделено свойство съхранява избраните стойности на въпроси."
// pehelp.searchEnabled: "Select if you want to update the drop-down menu contents to match the search query that a user is typing in the input field." => "Изберете дали искате да актуализирате съдържанието на падащото меню, за да съответства на заявката за търсене, която потребителят въвежда в полето за въвеждане."
// pehelp.valueTrue: "A value to save in survey results when respondents give a positive answer." => "Стойност, която трябва да се спести в резултатите от проучването, когато респондентите дадат положителен отговор."
// pehelp.valueFalse: "A value to save in survey results when respondents give a negative answer." => "Стойност, която трябва да се спести в резултатите от проучването, когато респондентите дадат отрицателен отговор."
// pehelp.showPreview: "It's not recommended to disable this option as it overrides the Preview image and makes it hard for a user to understand whether the files have been uploaded." => "Не се препоръчва да деактивирате тази опция, тъй като тя отменя изображението за визуализация и затруднява потребителя да разбере дали файловете са качени."
// pehelp.needConfirmRemoveFile: "Triggers a prompt asking to confirm the file deletion." => "Задейства подкана с молба за потвърждаване на изтриването на файла."
// pehelp.selectToRankEnabled: "Enable to rank only selected choices. Users will drag selected items from the choice list to order them within the ranking area." => "Разреши да се класират само избраните възможности за избор. Потребителите ще плъзгат избраните елементи от списъка за избор, за да ги подредят в областта за класиране."
// pehelp.dataList: "Enter a list of choices that will be suggested to the respondent during input." => "Въведете списък с възможности за избор, които ще бъдат предложени на респондента по време на въвеждането."
// pehelp.itemSize: "The setting only resizes the input fields and doesn't affect the width of the question box." => "Настройката само преоразмерява входните полета и не влияе на ширината на полето за въпроси."
// pehelp.itemTitleWidth: "Sets consistent width for all item labels in pixels" => "Задава еднаква ширина за всички етикети на елементи в пиксели"
// pehelp.contentMode: "The \"Auto\" option automatically determines the suitable mode for display - Image, Video, or YouTube - based on the source URL provided." => "Опцията \"Auto\" автоматично определя подходящия режим за показване - Image, Video или YouTube - въз основа на предоставения URL адрес на източника."
// pehelp.altText: "Serves as a substitute when the image cannot be displayed on a user's device and for accessibility purposes." => "Служи като заместител, когато изображението не може да бъде показано на устройството на потребителя и за целите на достъпността."
// pehelp.rateColorMode: "Defines the color of the selected emoji when the Rating icon type is set to \"Smileys\". Choose between: \"Default\" - the selected emoji appears in default survey color; \"Scale\" - the selected emoji inherits color from the rating scale." => "Определя цвета на избрания емотикон, когато типът на иконата за оценка е зададен на \"Усмивки\". Изберете между: \"По подразбиране\" - избраният емотикон се появява в цвета на проучването по подразбиране; \"Скала\" - избраният емотикон наследява цвят от рейтинговата скала."
// expression.name: "An expression ID that is not visible to respondents." => "ИД на израз, който не е видим за респондентите."
// expression.description: "Type an expression subtitle." => "Въведете подзаглавие на израз."
// expression.expression: "An expression can include basic calculations (`{q1_id} + {q2_id}`), conditions (`{age} > 60`), and functions ('iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, etc.)." => "Изразът може да включва основни изчисления ('{q1_id} + {q2_id}'), условия ('{age} > 60') и функции ('iif()', 'today()', 'age()', 'min()', 'max()', 'avg()' и т.н.)."
// pehelp.storeOthersAsComment: "Select to store the \"Other\" option value as a separate property in survey results." => "Изберете, за да съхраните стойността на опцията \"Други\" като отделно свойство в резултатите от проучването."
// p.swapOrder: "Swap the order of Yes and No" => "Разменете реда на \"Да\" и \"Не\""
// p.itemTitleWidth: "Item label width (in px)" => "Ширина на етикета на елемента (в пиксели)"
// p.selectToRankEmptyRankedAreaText: "Text to show if all options are selected" => "Текст, който да се показва, ако са избрани всички опции"
// p.selectToRankEmptyUnrankedAreaText: "Placeholder text for the ranking area" => "Текст в контейнер за областта за класиране"
// pe.allowCompleteSurveyAutomatic: "Complete the survey automatically" => "Попълване на анкетата автоматично"
// pehelp.allowCompleteSurveyAutomatic: "Select if you want the survey to complete automatically after a respondent answers all questions." => "Изберете дали искате проучването да завърши автоматично, след като респондентът отговори на всички въпроси."
// masksettings.saveMaskedValue: "Save masked value in survey results" => "Запазване на маскирана стойност в резултатите от проучването"
// patternmask.pattern: "Value pattern" => "Шаблон на стойност"
// datetimemask.min: "Minimum value" => "Минимална стойност"
// datetimemask.max: "Maximum value" => "Максимална стойност"
// numericmask.allowNegativeValues: "Allow negative values" => "Позволяване на отрицателни стойности"
// numericmask.thousandsSeparator: "Thousands separator" => "Разделител за хиляди"
// numericmask.decimalSeparator: "Decimal separator" => "Десетичен разделител"
// numericmask.precision: "Value precision" => "Точност на стойността"
// numericmask.min: "Minimum value" => "Минимална стойност"
// numericmask.max: "Maximum value" => "Максимална стойност"
// currencymask.prefix: "Currency prefix" => "Валутен префикс"
// currencymask.suffix: "Currency suffix" => "Валутен суфикс"
// pe.maskType: "Input mask type" => "Тип маска за въвеждане"
// maskTypes.patternmask: "Pattern" => "Шарка"
// maskTypes.numericmask: "Numeric" => "Цифров"
// maskTypes.datetimemask: "Date and Time" => "Дата и час"
// maskTypes.currencymask: "Currency" => "Валута"
// tabs.mask: "Input Mask Settings" => "Настройки на маската за въвеждане"
// pe.pattern_placeholder: "Ex.: +1(999)-999-99-99" => "Пример: +1(999)-999-99-99"
// pe.datetimepattern_placeholder: "Ex.: mm/dd/yyyy" => "Пример: мм/дд/гггг"
// pe.currencyprefix_placeholder: "Ex.: $" => "Пример: $"
// pe.currencysuffix_placeholder: "Ex.: USD" => "Пример: USD"
// pv.textWrapEnabled: "Wrap choices" => "Опции за обтичане"
// question.textWrapEnabled: "Long texts in choice options will automatically generate line breaks to fit within the drop-down menu. Unselect if you want the texts to clip." => "Дългите текстове в опциите за избор автоматично ще генерират нови редове, за да се поберат в падащото меню. Премахнете отметката, ако искате текстовете да бъдат изрязани."
// masksettings.saveMaskedValue: "Select if you want to store the question value with an applied mask in survey results." => "Изберете дали искате да съхраните стойността на въпроса с приложена маска в резултатите от проучването."
// patternmask.pattern: "The pattern can contain string literals and the following placeholders: `9` - for a digit; `a` - for an upper- or lower-case letter; `#` - for a digit or an upper- or lower-case letter. Use backslash `\\` to escape a character." => "Шаблонът може да съдържа низови литерали и следните контейнери: '9' - за цифра; \"а\" - за главна или малка буква; \"#\" - за цифра или главна или малка буква. Използвайте обратно наклонена черта \"\\\", за да избягате от знак."
// datetimemask.pattern: "The pattern can contain separator characters and the following placeholders: `m` - for month number; `mm` - for month number, with leading zero for single-digit values; `d` - for day of the month; `dd` - for day of the month, with leading zero for single-digit values; `yy` - for the last two digits of the year; `yyyy` - for a four-digit year." => "Шаблонът може да съдържа разделителни знаци и следните контейнери: 'm' - за номер на месец; \"mm\" - за номер на месец, с водеща нула за едноцифрени стойности; \"d\" - за ден от месеца; \"dd\" - за ден от месеца, с водеща нула за едноцифрени стойности; \"yy\" - за последните две цифри на годината; 'гггг' - за четирицифрена година."
// numericmask.decimalSeparator: "A symbol used to separate the fractional part from the integer part of a displayed number." => "Символ, използван за отделяне на дробната част от целочислената част на показваното число."
// numericmask.thousandsSeparator: "A symbol used to separate the digits of a large number into groups of three." => "Символ, използван за разделяне на цифрите на голямо число в групи от по три."
// numericmask.precision: "Limits how many digits to retain after the decimal point for a displayed number." => "Ограничава колко цифри да се запазят след десетичната запетая за показваното число."
// currencymask.prefix: "One or several symbols to be displayed before the value." => "Един или няколко символа, които трябва да бъдат показани преди стойността."
// currencymask.suffix: "One or several symbols to be displayed after the value." => "Един или няколко символа, които трябва да се покажат след стойността."
// ed.translationSource: "Source: " => "Източник: "
// ed.translationTarget: "Target: " => "Цел: "
// ed.pagePlaceHolder: "The page is empty. Drag an element from the toolbox or click the button below." => "Страницата е празна. Плъзнете елемент от кутията с инструменти или щракнете върху бутона по-долу."
// maskTypes.none: "None" => "Никой"
// itemvalue@rows.visibleIf: "Make the row visible if" => "Направете реда видим, ако"
// itemvalue@rows.enableIf: "Make the row editable if" => "Направете реда редактируем, ако"
// signaturepad.placeholderReadOnly: "Placeholder text in read-only or preview mode" => "Текст в контейнер в режим само за четене или визуализация"
// pe.textWrapEnabled: "Wrap choices" => "Опции за обтичане"
// image.contentMode: "The \"Auto\" option automatically determines the suitable mode for display - Image, Video, or YouTube - based on the source URL provided." => "Опцията \"Auto\" автоматично определя подходящия режим за показване - Image, Video или YouTube - въз основа на предоставения URL адрес на източника."
// imagepicker.contentMode: "Choose between \"Image\" and \"Video\" to set the content mode of the media selector. If \"Image\" is selected, ensure that all options provided are image files in the following formats: JPEG, GIF, PNG, APNG, SVG, BMP, ICO. Similarly, if \"Video\" is selected, ensure that all options are direct links to video files in the following formats: MP4, MOV, WMV, FLV, AVI, MKV. Please note that YouTube links are not supported for video options." => "Изберете между \"Изображение\" и \"Видео\", за да зададете режима на съдържание на селектора на мултимедия. Ако е избрано \"Изображение\", уверете се, че всички предоставени опции са файлове с изображения в следните формати: JPEG, GIF, PNG, APNG, SVG, BMP, ICO. По същия начин, ако е избрано \"Видео\", уверете се, че всички опции са директни връзки към видео файлове в следните формати: MP4, MOV, WMV, FLV, AVI, MKV. Моля, имайте предвид, че връзките в YouTube не се поддържат за опции за видео."
// ed.selectFile: "Select a file" => "Изберете файл"
// ed.removeFile: "Remove the file" => "Премахване на файла"
// pe.searchMode: "Search Mode" => "Режим на търсене"
// ed.surveyPlaceHolderMobile: "Click the \"Add Question\" button below to start creating your form." => "Кликнете върху бутона \"Добавяне на въпрос\" по-долу, за да започнете да създавате своя формуляр."
// ed.pagePlaceHolderMobile: "Click the \"Add Question\" button below to add a new element to the page." => "Кликнете върху бутона \"Добавяне на въпрос\" по-долу, за да добавите нов елемент към страницата."
// ed.panelPlaceHolderMobile: "Click the \"Add Question\" button below to add a new element to the panel." => "Кликнете върху бутона \"Добавяне на въпрос\" по-долу, за да добавите нов елемент към панела."
// ed.imagePlaceHolderMobile: "Click the button below and choose an image to upload" => "Кликнете върху бутона по-долу и изберете изображение за качване"
// coloralpha.opacity: "Opacity" => "Непрозрачност"
// font.family: "Font family" => "Семейство шрифтове"
// font.color: "Color" => "Цвят"
// font.placeholderColor: "Placeholder color" => "Цвят на контейнера"
// font.size: "Size" => "Големина"
// theme.themeName: "Theme" => "Тема"
// theme.isPanelless: "Question appearance" => "Външен вид на въпроса"
// theme.editorPanel: "Background and corner radius" => "Фон и радиус на ъгъла"
// theme.questionPanel: "Background and corner radius" => "Фон и радиус на ъгъла"
// theme.primaryColor: "Accent color" => "Цвят за акцентиране"
// theme.panelBackgroundTransparency: "Panel background opacity" => "Непрозрачност на фона на панела"
// theme.questionBackgroundTransparency: "Question background opacity" => "Непрозрачност на фона на въпроса"
// theme.fontSize: "Font size" => "Размер на шрифта"
// theme.scale: "Scale" => "Мащаб"
// theme.cornerRadius: "Corner radius" => "Радиус на ъгъла"
// theme.pageTitle: "Title font" => "Шрифт на заглавието"
// theme.pageDescription: "Description font" => "Шрифт за описание"
// theme.questionTitle: "Title font" => "Шрифт на заглавието"
// theme.questionDescription: "Description font" => "Шрифт за описание"
// theme.editorFont: "Font" => "Шрифт"
// theme.backgroundOpacity: "Opacity" => "Непрозрачност"
// theme.--sjs-font-family: "Font family" => "Семейство шрифтове"
// theme.--sjs-general-backcolor-dim: "Background color" => "Цвят на фона"
// theme.--sjs-primary-backcolor: "Accent background" => "Фон за акцентиране"
// theme.--sjs-primary-forecolor: "Accent foreground" => "Акцентиране на преден план"
// theme.--sjs-shadow-small: "Shadow effects" => "Ефекти на сянка"
// theme.--sjs-shadow-inner: "Shadow effects" => "Ефекти на сянка"
// theme.--sjs-border-default: "Colors" => "Цветове"
// header@header.headerView: "View" => "Изглед"
// header@header.logoPosition: "Logo position" => "Позиция на логото"
// header@header.surveyTitle: "Survey title font" => "Шрифт за заглавие на проучване"
// header@header.surveyDescription: "Survey description font" => "Шрифт за описание на проучването"
// header@header.headerTitle: "Survey title font" => "Шрифт за заглавие на проучване"
// header@header.headerDescription: "Survey description font" => "Шрифт за описание на проучването"
// header@header.inheritWidthFrom: "Content area width" => "Ширина на областта на съдържанието"
// header@header.textAreaWidth: "Text width" => "Ширина на текста"
// header@header.backgroundColorSwitch: "Background color" => "Цвят на фона"
// header@header.backgroundImage: "Background image" => "Фоново изображение"
// header@header.backgroundImageOpacity: "Opacity" => "Непрозрачност"
// header@header.overlapEnabled: "Overlap" => "Припокриване"
// header@header.logoPositionX: "Logo position" => "Позиция на логото"
// header@header.titlePositionX: "Title position" => "Позиция на заглавието"
// header@header.descriptionPositionX: "Description position" => "Описание позиция"
// weight.400: "Regular" => "Редовни"
// weight.600: "Heavy" => "Тежък"
// weight.700: "Semi-bold" => "Полу-полу-получер"
// weight.800: "Bold" => "Безочлив"
// backgroundImageFit.auto: "Auto" => "Авто"
// backgroundImageFit.cover: "Cover" => "Капак"
// backgroundImageFit.contain: "Contain" => "Съдържам"
// backgroundImageFit.fill: "Stretch" => "Участък"
// backgroundImageFit.tile: "Tile" => "Плочки"
// backgroundImageAttachment.fixed: "Fixed" => "Неподвижен"
// backgroundImageAttachment.scroll: "Scroll" => "Свитък"
// headerView.basic: "Basic" => "Основен"
// headerView.advanced: "Advanced" => "Напреднал"
// inheritWidthFrom.survey: "Same as survey" => "Същото като проучването"
// inheritWidthFrom.container: "Fit to container" => "Побиране в контейнера"
// backgroundColorSwitch.none: "None" => "Никой"
// backgroundColorSwitch.accentColor: "Accent color" => "Цвят за акцентиране"
// backgroundColorSwitch.custom: "Custom" => "Обичай"
// colorPalette.light: "Light" => "Светлина"
// colorPalette.dark: "Dark" => "Тъмен"
// isPanelless.false: "Default" => "По подразбиране"
// isPanelless.true: "Without Panels" => "Без панели"
// theme.cornerRadius: "Corner radius" => "Радиус на ъгъла"
// theme.fontFamily: "Font family" => "Семейство шрифтове"
// theme.fontWeightRegular: "Regular" => "Редовни"
// theme.fontWeightHeavy: "Heavy" => "Тежък"
// theme.fontWeightSemiBold: "Semi-bold" => "Полу-полу-получер"
// theme.fontWeightBold: "Bold" => "Безочлив"
// theme.color: "Color" => "Цвят"
// theme.placeholderColor: "Placeholder color" => "Цвят на контейнера"
// theme.size: "Size" => "Големина"
// theme.opacity: "Opacity" => "Непрозрачност"
// ed.toolboxFilteredTextPlaceholder: "Type to search..." => "Въведете за търсене..."
// ed.toolboxNoResultsFound: "No results found" => "Няма намерени резултати"
// paneldynamic.tabTitlePlaceholder: "Tab title placeholder" => "Контейнер за заглавие на раздел"
// theme.--sjs-special-red: "Error messages" => "Съобщения за грешки"
// paneldynamic.tabTitlePlaceholder: "A fallback text for tab titles that applies when the tab title pattern doesn't produce a meaningful value." => "Резервен текст за заглавията на разделите, който се прилага, когато шаблонът за заглавие на раздела не създава смислена стойност."
// theme.fontColor: "Font color" => "Цвят на шрифта"
// theme.backgroundColor: "Background color" => "Цвят на фона"
// pe.questionTitleWidth: "Question title width" => "Ширина на заглавието на въпроса"
// pe.fileInputPlaceholder: "Select a file or paste a file link..." => "Избор на файл или поставяне на връзка към файл..."
// panelbase.questionTitleWidth: "Ex.: 200px" => "Пример: 200px"
// panel.questionTitleWidth: "Sets consistent width for question titles when they are aligned to the left of their question boxes. Accepts CSS values (px, %, in, pt, etc.)." => "Задава еднаква ширина за заглавията на въпросите, когато те са подравнени отляво на техните полета за въпроси. Приема CSS стойности (px, %, in, pt и т.н.)."
// page.questionTitleWidth: "Sets consistent width for question titles when they are aligned to the left of their question boxes. Accepts CSS values (px, %, in, pt, etc.)." => "Задава еднаква ширина за заглавията на въпросите, когато те са подравнени отляво на техните полета за въпроси. Приема CSS стойности (px, %, in, pt и т.н.)."
// pe.commentAreaRows: "Comment area height (in lines)" => "Височина на областта за коментари (в редове)"
// pehelp.commentAreaRows: "Sets the number of displayed lines in text areas for question comments. In the input takes up more lines, the scroll bar appears." => "Задава броя на показваните редове в текстовите области за коментари на въпроси. Във входа заема повече редове, плъзгачът се появява."
// pe.enabled: "Enabled" => "Разрешено"
// pe.disabled: "Disabled" => "Инвалид"
// pe.inherit: "Inherit" => "Наследявам"
// pe.validateVisitedEmptyFields: "Validate empty fields on lost focus" => "Проверка на празни полета при загубен фокус"
// panellayoutcolumn.effectiveWidth: "Ex.: 30%" => "Пример: 30%"
// panellayoutcolumn.questionTitleWidth: "Ex.: 200px" => "Пример: 200px"
// pehelp.validateVisitedEmptyFields: "Enable this option to trigger validation when a user focuses on an empty input field and then leaves it without making any changes." => "Активирайте тази опция, за да задействате проверка, когато потребителят се фокусира върху празно поле за въвеждане и след това го напусне, без да прави никакви промени."
// pehelp.colCount: "Arranges choice options in a multi-column layout. When set to 0, the options are displayed in a single line." => "Подрежда опциите за избор в оформление с няколко колони. Когато е зададено на 0, опциите се показват на един ред."
// theme.isPanelless: "This setting applies only to questions outside of a panel." => "Тази настройка се прилага само за въпроси извън панела."
// theme.primaryColor: "Sets a supplementary color that highlights key survey elements." => "Задава допълнителен цвят, който подчертава ключови елементи на проучването."
// theme.panelBackgroundTransparency: "Adjusts the transparency of panels and question boxes relative to the survey background." => "Регулира прозрачността на панелите и полетата за въпроси спрямо фона на проучването."
// theme.questionBackgroundTransparency: "Adjusts the transparency of input elements relative to the survey background." => "Регулира прозрачността на входните елементи спрямо фона на проучването."
// theme.cornerRadius: "Sets the corner radius for all rectangular elements. Enable the Advanced Mode if you want to set individual corner radius values for input elements or panels and question boxes." => "Задава ъгловия радиус за всички правоъгълни елементи. Разрешете разширения режим, ако искате да зададете индивидуални стойности на радиуса на ъгъла за входни елементи или панели и полета за въпроси."
// theme.--sjs-general-backcolor-dim: "Sets the main background color of the survey." => "Задава основния цвят на фона на проучването."
// header.inheritWidthFrom: "The \"Same as container\" option auto-adjusts the header content area width to fit into the HTML element the survey is placed in." => "Опцията \"Същото като контейнера\" автоматично регулира ширината на областта на съдържанието на заглавката, за да се побере в HTML елемента, в който е поставена анкетата."
// header.textAreaWidth: "The width of the header area that contains the survey title and description, measured in pixels." => "Ширината на областта на заглавката, която съдържа заглавието и описанието на проучването, измерена в пиксели."
// header.overlapEnabled: "Makes the bottom of the header overlaid with the top of the survey." => "Прави долната част на заглавката наслагвана с горната част на проучването."
// panellayoutcolumn.effectiveWidth: "Accepts values %." => "Приема стойности %."
// panellayoutcolumn.questionTitleWidth: "Accepts values px." => "Приема стойности px."
// p.effectiveColSpan: "Column span" => "Обхват на колоната"