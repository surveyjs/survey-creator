import { setupLocale } from "survey-creator-core";

export var mnStrings = {
  // survey templates
  survey: {
    edit: "Засах",
    externalHelpLink: "Санал асуулга үүсгэх заавартай танилцах",
    externalHelpLinkUrl: "https://www.youtube.com/channel/UCH2ru9okIcooNZfpIbyq4qQ?view_as=subscriber",
    dropQuestion: "Хэрэглүүрээс асуулт нэмнэ үү",
    addLogicItem: "Санал асуулгын урсгалыг өөрчлөх дүрэм үүсгэнэ үү.",
    copy: "Хуулах",
    duplicate: "Хуулбарлах",
    addToToolbox: "Хэрэглүүрт нэмэх",
    deletePanel: "Панел устгах",
    deleteQuestion: "Асуулт устгах",
    convertTo: "Хувиргах",
    drag: "Чирэх",
  },
  // Creator tabs
  tabs: {
    preview: "Урьдчилан харах",
    theme: "Сэдвүүд",
    translation: "Орчуулга",
    designer: "Удирдлага",
    json: "JSON засварлагч",
    logic: "Логик"
  },
  // Question types
  qt: {
    default: "Нэг сонголттой",
    checkbox: "Олон сонголттой",
    comment: "Нээлттэй",
    imagepicker: "Зураг сонгох",
    ranking: "Дэс дараалалд оруулах",
    image: "Зураг",
    dropdown: "Сонголттой асуумж",
    tagbox: "Tag Box",
    file: "Файл",
    html: "HTML",
    matrix: "Нэг сонголттот матриц",
    matrixdropdown: "Олон сонголтот матриц",
    matrixdynamic: "Динамик матриц",
    multipletext: "Олон бичилт",
    panel: "Панел",
    paneldynamic: "Динамик панел",
    radiogroup: "Radiogroup",
    rating: "Үнэлэх",
    text: "Богино хариулттай ",
    boolean: "Тийм/Үгүй",
    expression: "Илэрхийлэл (зөвхөн унших)",
    signaturepad: "Гарын үсэг",
    buttongroup: "Багц товч"
  },
  toolboxCategories: {
    general: "Ерөнхий",
    choice: "Сонголттой асуултууд",
    text: "Хариулт бичих асуултууд",
    containers: "Сав",
    matrix: "Матрицан асуултууд",
    misc: "Бусад"
  },
  // Strings in SurveyJS Creator
  ed: {
    defaultLocale: "Үндсэн ({0})",
    survey: "Санал асуулга",
    settings: "Тохиргоо",
    settingsTooltip: "Тохиргоог нээх",
    surveySettings: "Санал асуулгын тохиргоо",
    surveySettingsTooltip: "Судалгааны тохиргоо",
    themeSettings: "Сэдвийн тохиргоо",
    themeSettingsTooltip: "Сэдвийн тохиргоо",
    creatorSettingTitle: "Зохион бүтээгчийн тохиргуулууд",
    showPanel: "Панел харуулах",
    hidePanel: "Панел нуух",
    prevSelected: "Өмнөхийг сонгох",
    nextSelected: "Дараагийнхыг сонгох",
    prevFocus: "Өмнөх анхаарлаа төвлөрүүлэх",
    nextFocus: "Дараа нь анхаарлаа төвлөрүүл",
    surveyTypeName: "Санал асуулга",
    pageTypeName: "Хуудас",
    panelTypeName: "Панел",
    questionTypeName: "Асуулт",
    columnTypeName: "Багана",
    addNewPage: "Шинэ хуудас нэмэх",
    moveRight: "Баруун тийш гүйлгэх",
    moveLeft: "Зүүн тийш гүйлгэх",
    deletePage: "Хуудас устгах",
    editPage: "Хуудас засварлах",
    edit: "Засах",
    newPageName: "Хуудас",
    newQuestionName: "Асуулт",
    newPanelName: "Панелийн нэр",
    newTextItemName: "Текст",
    defaultV2Theme: "Үндсэн",
    modernTheme: "Орчийн үеийн",
    defaultTheme: "Үндсэн (legacy)",
    testSurveyAgain: "Санал асуулгыг дахин урьдчилан харах",
    testSurveyWidth: "Санал асуулгын өргөн: ",
    navigateToMsg: "You had to navigate to",
    saveSurvey: "Санал асуулга хадгалах",
    saveSurveyTooltip: "Санал асуулга хадгалах",
    saveTheme: "Сэдэв хадгалах",
    saveThemeTooltip: "Сэдэв хадгалах",
    jsonHideErrors: "Алдааг нуух",
    jsonShowErrors: "Алдааг харуулах",
    undo: "Буцаах",
    redo: "Дахих",
    undoTooltip: "Сүүлийн өөрчлөлтийг буцаах",
    redoTooltip: "Сүүлин өөрчлөлтийг дахих ",
    expandTooltip: "Өргөтгөх",
    collapseTooltip: "Нуралт",
    expandAllTooltip: "Бүх хүрээгээ тэлнэ",
    collapseAllTooltip: "Бүх нуралт",
    zoomInTooltip: "Томруулах",
    zoom100Tooltip: "100% хүртэл томруулах",
    zoomOutTooltip: "Томруулах",
    lockQuestionsTooltip: "Асуултын үед lock/expand/collapse state",
    showMoreChoices: "Дэлгэрэнгүй харуулах",
    showLessChoices: "Бага мэдээлэл харуулах",
    copy: "Хуулах",
    cut: "Таслах",
    paste: "Буулгах",
    copyTooltip: "Самбараас сонгогдсон хэсгийг хуулах",
    cutTooltip: "Самбараас сонгогдсон хэсгийг таслах",
    pasteTooltip: "Самбараас буулгах",
    options: "Тохиргоо",
    generateValidJSON: "Бодит JSON үүсгэх",
    generateReadableJSON: "Ойлгомжтой JSON үүсгэх",
    toolbox: "Хэрэглүүр",
    "property-grid": "Өмнөх",
    toolboxFilteredTextPlaceholder: "Хайлт хийх төрөл...",
    toolboxNoResultsFound: "Ямар ч үр дүн олдсонгүй",
    propertyGridFilteredTextPlaceholder: "Хайхын тулд бичнэ үү.....",
    propertyGridNoResultsFound: "Ямар ч үр дүн олдсонгүй",
    propertyGridPlaceholderTitle: "Формоо тохируулж эхлэх",
    propertyGridPlaceholderDescription: "Судалгааны тохиргоог судлахын тулд ямар ч категорийн зургыг дарна уу. Дизайны гадаргуу дээр судалгааны элемент нэмсний дараа нэмэлт тохиргоо хийх боломжтой болно.",
    correctJSON: "JSON засна уу.",
    surveyResults: "Санал асуулгын хариу",
    surveyResultsTable: "Санал асуулгын хариултыг хүснэгтээр харуулах",
    surveyResultsJson: "As JSON",
    resultsTitle: "Асуултын гарчиг",
    resultsName: "Асуултын нэр",
    resultsValue: "Хариултын утга",
    resultsDisplayValue: "Утга харуулах",
    modified: "Өөрчлөлт орсон",
    saving: "Хадгалж байна",
    saved: "Хадгалсан",
    propertyEditorError: "Алдаа",
    saveError: "Алдаа! Зассан агуулга хадгалагдаагүй байна.",
    translationPropertyGridTitle: "Хэлний тохиргоо",
    themePropertyGridTitle: "Сэдвийн тохиргоо",
    addLanguageTooltip: "Хэл нэмэх",
    translationLanguages: "Хэл",
    translationDeleteLanguage: "Та энэ хэлний бүх уяаг арилгахыг хүсэж байгаа гэдэгтээ итгэлтэй байна уу?",
    translationAddLanguage: "Орчуулах хэлийг сонгоно уу",
    translationShowAllStrings: "Бүх текст",
    translationShowUsedStringsOnly: "Зөвхөн байгаа текстүүд",
    translationShowAllPages: "Бүх хуудас",
    translationNoStrings: "Орчуулах зүйл байхгүй. Шүүлтийг өөрчилнө үү.",
    translationExportToSCVButton: "CSV экспорт хийх",
    translationImportFromSCVButton: "CSV импорт хийх",
    translateUsigAI: "Авто-орчуулга Бүгд",
    translateUsigAIFrom: "Аас орчуул: ",
    translationDialogTitle: "Огт орчуулагдаагүй уяанууд",
    translationMergeLocaleWithDefault: "{0}-г суурь хэлтэй нэгтгэх",
    translationPlaceHolder: "Орчуулга...",
    translationSource: "Эх сурвалж: ",
    translationTarget: "Зорилго: ",
    translationYouTubeNotSupported: "YouTube-ийн холбоосууд дэмжигдээгүй.",
    themeExportButton: "Экспорт",
    themeImportButton: "Импорт",
    surveyJsonExportButton: "Экспорт",
    surveyJsonImportButton: "Импорт",
    surveyJsonCopyButton: "Хавчуургыг хуулах",
    themeResetButton: "Дахин сэдэвчилсэн тохиргоог default хийх",
    themeResetConfirmation: "Та сэдвийг дахин хөндөхийг үнэхээр хүсэж байна уу? Таны бүх тохируулга үгүй болно.",
    themeResetConfirmationOk: "Тийм ээ, сэдвийг дахин тохируулах",
    bold: "Тод",
    italic: "Налуу",
    underline: "Доогуур зураас",
    addNewQuestion: "Асуулт нэмэх",
    selectPage: "Хуудас сонгох...",
    carryForwardChoicesCopied: "Сонголтыг хуулбарладаг",
    choicesLoadedFromWebText: "Сонголтыг вэбийн үйлчилгээнээс ачаалдаг.",
    choicesLoadedFromWebLinkText: "Тохиргоо руу явах",
    choicesLoadedFromWebPreviewTitle: "Ачаалагдсан сонголтын урьдчилсан үзүүлэлт",
    htmlPlaceHolder: "HTML агуулга энд байрлана.",
    panelPlaceHolder: "Энд хэрэглүүрээс асуулт чирнэ үү.",
    surveyPlaceHolder: "Санал асуулга хоосон байна. Хэрэглүүрээс асуулт чирнэ үү эсвэл доорх товчийг дарна уу.",
    pagePlaceHolder: "Хуудас хоосон байна. Багажны хайрцагнаас элементийг чирэх эсвэл доорх товчийг дарна уу.",
    imagePlaceHolder: "Энд зураг чирж унагаах эсвэл доорх товчийг дарж татаж авах зургийг сонгоно уу",
    surveyPlaceHolderMobile: "Доорх \"Асуулт нэмэх\" товчийг дарж формоо үүсгэж эхэлнэ.",
    surveyPlaceholderTitle: "Таны маягт хоосон байна",
    surveyPlaceholderTitleMobile: "Таны маягт хоосон байна",
    surveyPlaceholderDescription: "Toolbox-аас элементийг чирч авах эсвэл доорх товчийг дар.",
    surveyPlaceholderDescriptionMobile: "Toolbox-аас элементийг чирч авах эсвэл доорх товчийг дар.",
    previewPlaceholderTitle: "Урьдчилсан танилцуулга байхгүй",
    previewPlaceholderTitleMobile: "Урьдчилсан танилцуулга байхгүй",
    previewPlaceholderDescription: "Судалгаанд ямар ч үзэгдэх зүйл байдаггүй.",
    previewPlaceholderDescriptionMobile: "Судалгаанд ямар ч үзэгдэх зүйл байдаггүй.",
    translationsPlaceholderTitle: "Орчуулах мөр байхгүй",
    translationsPlaceholderTitleMobile: "Орчуулах мөр байхгүй",
    translationsPlaceholderDescription: "Маягт дээрээ элементүүдийг нэмэх эсвэл toolbar дээрх strings шүүлтүүрийг өөрчил.",
    translationsPlaceholderDescriptionMobile: "Маягт дээрээ элементүүдийг нэмэх эсвэл toolbar дээрх strings шүүлтүүрийг өөрчил.",
    pagePlaceHolderMobile: "Хуудас дээр шинэ элемент нэмэхийн тулд доорх \"Асуулт нэмэх\" товчийг дарна уу.",
    panelPlaceHolderMobile: "Доорх \"Асуулт нэмэх\" товчийг дарж панел дээр шинэ элемент нэмнэ.",
    imagePlaceHolderMobile: "Доорх товчийг дарж татаж авах зургийг сонгоно уу",
    imageChooseImage: "Зураг сонгох",
    addNewTypeQuestion: "{0} нэмэх", //{0} is localizable question type
    chooseLogoPlaceholder: "[Лого]",
    choices_Item: "Хэсэг ",
    selectFile: "Файлыг сонгох",
    removeFile: "Файлыг хасах",
    lg: {
      addNewItem: "Шинэ дүрэм нэмэх",
      empty_tab: "Санал асуулгын урсгалыг өөрчлөх дүрэм үүсгэнэ үү.",
      logicPlaceholderTitle: "Логик дүрэм байхгүй",
      logicPlaceholderTitleMobile: "Логик дүрэм байхгүй",
      logicPlaceholderDescription: "Судалгааны явцыг тохируулах дүрэм зохио.",
      logicPlaceholderDescriptionMobile: "Судалгааны явцыг тохируулах дүрэм зохио.",
      page_visibilityName: "Хуудас харуулах (нуух)",
      page_enableName: "Хуудас идэвхжүүлэх (идэвхгүй болгох)",
      page_requireName: "Шаардлагатай хуудас хийх",
      panel_visibilityName: "Панел (нуух) харуулах",
      panel_enableName: "Панел (идэвхгүй болгох) идэвхжүүлэх",
      panel_requireName: "Шаардлагатай хуудас хийх",
      question_visibilityName: "Асуулт харуулах (нуух)",
      question_enableName: "Асуулт идэвхжүүлэх (идэвхгүй болгох)",
      question_requireName: "Асуултыг заавал бөглөөөөх болгох",
      question_resetValueName: "Асуултын үнэ цэнийг дахин тогтоох",
      question_setValueName: "Асуултын үнэ цэнийг тогтоох",
      column_visibilityName: "Багана харуулах (нуух).",
      column_enableName: "Багана идэвхжүүлэх (идэвхгүй болгох).",
      column_requireName: "Баганыг заавал бөглөөөөх болгох",
      column_resetValueName: "Reset баганын үнэ цэнэ",
      column_setValueName: "Баганын үнэ цэнийг тогтоох",
      trigger_completeName: "Санал асуулга дуусгах",
      trigger_setvalueName: "Хариулт оруулах",
      trigger_copyvalueName: "Хариулт хуулах",
      trigger_skipName: "Асуулт руу алгасах",
      trigger_runExpressionName: "Илэрхийллийг ажиллуулах",
      completedHtmlOnConditionName: "\"Санал асуулга амжилттай бөглөгдсөн\" хуудсын тэмдэглэгээг оруулах",
      page_visibilityDescription: "Логик илэрхийлэл биелэгдсэн тохиолдолд хуудсыг харуулах. Бусад үед нуух.",
      panel_visibilityDescription: "Логик илэрхийлэл биелэгдсэн тохиолдолд панелийг харуулах. Бусад үед нуух.",
      panel_enableDescription: "Логик илэрхийлэл биелэгдсэн тохиолдолд панел ба түүн доторх бүх элементийг идэвхжүүлэх. Бусад үед бүгдийг идэвхгүй байлгах.",
      question_visibilityDescription: "Логик илэрхийлэл биелэгдсэн тохиолдолд асуултыг харуулах. Бусад үед нуух.",
      question_enableDescription: "Логик илэрхийлэл биелэгдсэн тохиолдолд хуудсыг идэвхжүүлэх. Бусад үед идэвхгүй болгох.",
      question_requireDescription: "Логик илэрхийлэл биелэгдсэн тохиолдолд асуулт нь заавал бөглөх болох.",
      trigger_completeDescription: "Логик илэрхийлэл биелэгдсэн тохиолдолд санал асуулга амжилттай бөглөн хэрэглэгч 'Баярлалаа' хуудсыг харна.",
      trigger_setvalueDescription: "Логик илэрхийлэл биелэгдсэн тохиолдолд сонгосон асуултын утгыг тохируулна.",
      trigger_copyvalueDescription: "Логик илэрхийлэл биелэгдсэн тохиолдолд сонгосон асуултын утгыг өөр сонгосон асуултын хариулт болгон харуулна.",
      trigger_skipDescription: "Логик илэрхийлэл биелэгдсэн тохиолдолд санал асуулга сонгосон асуултыг алгасна / харуулна.",
      trigger_runExpressionDescription: "Логик илэрхийлэл биелэгдсэн тохиолдолд хэрэглэгчийн илэрхийллийг ажиллуулна. Та энэ илэрхийллийн үр дүнг  сонгосон асуултын хариулт болгоно.",
      completedHtmlOnConditionDescription: "Хэрэв логик илэрхийлэл биелэгдсэн тохиолдолд үндсэн 'Баярлалаа' хуудас зааж өгсөн хуудсаар солигдоно.",
      itemExpressionText: "Илэрхийлэл: '{0}' биелсэн бол", //{0} - the expression
      itemEmptyExpressionText: "Шинэ дүрэм",
      page_visibilityText: "Хуудсыг {0} харагддаг болгох", //{0} page name
      panel_visibilityText: "{0} панелийг харагддаг болгох", //{0} panel name
      panel_enableText: "{0} панелийг идэвхжүүлэх", //{0} panel name
      question_visibilityText: "{0} асуултыг харагддаг болгох", //{0} question name
      question_enableText: "{0} асуултыг идэвхжүүлэх", //{0} question name
      question_requireText: "{0} асуултыг заавал бөглөх болгох", //{0} question name
      question_resetValueText: "асуултын үнэ цэнийг дахин тогтоох нь: {0}", //{0} question name.
      question_setValueText: "үнэ цэнийг даалгах нь: {1} асуулт: {0}",
      column_visibilityText: "{0} баганын {1} асуултыг харагддаг болгох", //{0} column name, {1} question name
      column_enableText: "{0} баганын {1} асуултыг идэвхжүүлэх", //{0} column name, {1} question name
      column_requireText: "{0} баганын {1} асуултыг заавал бөглөх болгох", //{0} column name, {1} question name
      column_resetValueText: "баганын эсийн үнэ цэнийг дахин тогтоох: {0}", //{0} column name
      column_setValueText: "эсийн үнэ цэнийг хуваарил: {1} багана: {0}", //{0} column name and {1} setValueExpression
      setValueExpressionPlaceholder: " Үр дүн нь ямар байгааг байгсад асуултад хариулах илэрхийлэл.",
      trigger_completeText: "Санал асуулга амжилттай бөглөсөн.",
      trigger_setvalueText: "{0} Асуултад оруулах утга: {1}", //{0} question name, {1} setValue
      trigger_setvalueEmptyText: "тодорхой асуултын үнэ цэнэ: {0}", //{0} question name
      trigger_copyvalueText: "{0} Асуулт руу хуулах утга: {1}", //{0} and {1} question names
      trigger_skipText: "{0} Санал асуулгын асуулт руу үсрэх", //{0} question name
      trigger_runExpressionText1: "'{0}' илэрхийлэлг ажиллуулах: ", //{0} the expression
      trigger_runExpressionText2: " Түүний хариултыг асуултад оруулах: {0}", //{0} question name
      completedHtmlOnConditionText: "'Баярлалаа' хуудсанд тусгай текст харуулах.",
      showAllQuestions: "Бүх асуулт",
      showAllActionTypes: "Бүх үйлдлийн төрлүүд",
      conditions: "Нөхцөл(үүд)",
      actions: "Үйлдэл(үүд)",
      expressionEditorTitle: "Нөхцөл(үүд) тодорхойлох",
      actionsEditorTitle: "Үйлдэл(үүд) тодорхойлох",
      deleteAction: "Үйлдлийг устгах",
      addNewAction: "Үйлдэл нэмэх",
      selectedActionCaption: "Үйлдэл сонгох...",
      expressionInvalid: "Логик илэрхийлэл хоосон эсвэл алдаатай байна. Засна уу.",
      noActionError: "Ядаж нэг үйлдэл оруулна уу.",
      actionInvalid: "Үйлдэл(үүд)-ийнхээ асуудлыг шийднэ үү.",
      uncompletedRule_title: "Табыг орхих уу?",
      uncompletedRule_text: "Нэг эсвэл олон логик дүрэм дутуу бичигдсэн байна. Табыг хаавал, оруулсан засварууд арилна. Та табыг хаахдаа итгэлтэй байна уу?",
      uncompletedRule_apply: "Тийм",
      uncompletedRule_cancel: "Үгүй, дүрмийг үргэлжлүүлж бичиж дуусгах."
    }
  },
  // Property Editors
  pe: {
    panel: {
      name: "Панелийн нэр",
      title: "Панел цол",
      description: "Панел дүрслэл",
      visibleIf: "Хэрэв панелыг ил гаргах",
      requiredIf: "Шаардлагатай бол панел хий",
      questionOrder: "Хяналтын шатны доторх асуултын дараалал",
      page: "Эх хуудас",
      startWithNewLine: "Самбарыг шинэ шугам дээр үзүүл",
      state: "Панел нурах байдал",
      width: "Инлин хавтан өргөн",
      minWidth: "Хамгийн бага хавтан өргөн",
      maxWidth: "Хамгийн их хавтан өргөн",
      showNumber: "Энэ хавсралтыг дугаарлах"
    },
    panellayoutcolumn: {
      effectiveWidth: "Үр дүнтэй өргөн, %",
      questionTitleWidth: "Асуултын гарчиг өргөн, px"
    },
    paneldynamic: {
      name: "Панелийн нэр",
      title: "Панел цол",
      description: "Панел дүрслэл",
      visibleIf: "Хэрэв панелыг ил гаргах",
      requiredIf: "Шаардлагатай бол панел хий",
      page: "Самбарыг хуудас руу зөөх",
      startWithNewLine: "Самбарыг шинэ шугам дээр үзүүл",
      state: "Панел нурах байдал",
      width: "Инлин хавтан өргөн",
      minWidth: "Хамгийн бага хавтан өргөн",
      maxWidth: "Хамгийн их хавтан өргөн",
      confirmDelete: "Панел устгахыг батлах",
      templateDescription: "Панел дүрслэлийн загвар",
      templateTitle: "Панелийн нэрийн загвар",
      noEntriesText: "Хоосон хавтан текст",
      templateTabTitle: "Таб нэрийн загвар",
      tabTitlePlaceholder: "Таб нэрийн хуудас эзэмшигч",
      templateVisibleIf: "Хувь хүний панелыг ил гаргах",
      showNumber: "Хавтангийн дугаар",
      titleLocation: "Панел цолны зохицуулалт",
      descriptionLocation: "Панел дүрслэлийн зохицуулалт",
      templateQuestionTitleLocation: "Асуулт нэрийн уялдаа",
      templateQuestionTitleWidth: "Асуултын гарчгийн өргөн",
      templateErrorLocation: "Алдааны мессежийн зохицуулалт",
      newPanelPosition: "Шинэ панелийн байршил",
      showRangeInProgress: "Хөгжил дэвшлийн барыг харуул",
      keyName: "Дараах асуултад хувилж хариулахаас сэргийлье"
    },
    question: {
      name: "Асуулт нэр",
      title: "Асуулт гарчиг",
      description: "Асуултын тодорхойлолт",
      visibleIf: "Асуултыг ил тод болгох",
      requiredIf: "Шаардлагатай асуултыг тавих",
      page: "Эх хуудас",
      state: "Асуултын хайрцаг нурах байдал",
      showNumber: "Энэ асуултыг дугаарла.",
      titleLocation: "Асуулт нэрийн уялдаа",
      descriptionLocation: "Асуулт тодорхойлолтын зохицуулалт",
      errorLocation: "Алдааны мессежийн зохицуулалт",
      indent: "Дотоод индентийг нэмэгдүүлэх",
      width: "Инлайн асуултын өргөн",
      minWidth: "Хамгийн бага асуултын өргөн",
      maxWidth: "Хамгийн их асуултын өргөн",
      textUpdateMode: "Оролтын талбайн үнэ цэнийг шинэчлэх"
    },
    signaturepad: {
      signatureWidth: "Гарын үсэг зурах хэсгийн өргөн",
      signatureHeight: "Гарын үсэг зурах хэсгийн өндөр",
      signatureAutoScaleEnabled: "Авто замын тэмдэг тэмдэглэгээний талбай",
      showPlaceholder: "Эзэмшигчийг үзүүл",
      placeholder: "Placeholder текст",
      placeholderReadOnly: "Зөвхөн унших эсвэл урьдчилан харах хэлбэрээр placeholder текст",
      allowClear: "Гарын үсэг зурах хэсэгт Clear товчийг харуул",
      penMinWidth: "Хамгийн бага үзэгний өргөн",
      penMaxWidth: "Хамгийн их үзэгний өргөн",
      penColor: "Судасны өнгө"
    },
    comment: {
      rows: "Оролтын талбайн өндөр (шугамд)"
    },
    showQuestionNumbers: "Асуултын дугаарлалт",
    questionStartIndex: "Эхлэх индекс (тоо эсвэл үсэг)",
    expression: {
      name: "Илэрхийллийн нэр",
      title: "Өгүүлбэрийн гарчиг",
      description: "Илэрхийллийн тодорхойлолт",
      expression: "Өгүүлбэр"
    },
    trigger: {
      expression: "Өгүүлбэр"
    },
    calculatedvalue: {
      expression: "Өгүүлбэр"
    },
    // survey templates
    survey: {
      title: "Нүүр",
      description: "Судалгааны тодорхойлолт",
      readOnly: "Судалгааг зөвхөн унших хэлбэртэй болго"
    },
    page: {
      name: "Хуудасны нэр",
      title: "Нүүр",
      description: "Хуудасны тодорхойлолт",
      visibleIf: "Хуудсыг ил тод болгох",
      requiredIf: "Шаардлагатай хуудсыг хий",
      timeLimit: "Нэг хуудас бөглөж дуусах хугацаа (секундээр)",
      questionOrder: "Асуулт самбар хуудсан дээр"
    },
    matrixdropdowncolumn: {
      name: "Баганын нэр",
      title: "Баганын нэр",
      isUnique: "Хуулбарласан хариу үйлдэл үзүүлэхээс сэргийлье",
      width: "Баганын өргөн",
      minWidth: "Баганын хамгийн бага өргөн",
      rows: "Оролтын талбайн өндөр (шугамд)",
      visibleIf: "Хэрэв баганыг харах боломжтой болго",
      requiredIf: "Шаардлагатай баганыг хий",
      showInMultipleColumns: "Тус тусдаа баганад байгаа сонголт бүр"
    },
    multipletextitem: {
      name: "Нэр",
      title: "Нүүр"
    },
    masksettings: {
      saveMaskedValue: "Судалгааны үр дүнд багласан үнэ цэнийг хэмнэх"
    },
    patternmask: {
      pattern: "Үнэ цэнийн загвар"
    },
    datetimemask: {
      min: "Хамгийн бага үнэ цэнэ",
      max: "Хамгийн их үнэ цэнэ"
    },
    numericmask: {
      allowNegativeValues: "Сөрөг үнэт зүйлсийг зөвшөөр",
      thousandsSeparator: "Мянга мянган тусгаарлагч",
      decimalSeparator: "Decimal тусгаарлагч",
      precision: "Үнэ цэнийн нарийвчлал",
      min: "Хамгийн бага үнэ цэнэ",
      max: "Хамгийн их үнэ цэнэ"
    },
    currencymask: {
      prefix: "Валютын ханш",
      suffix: "Валютын suffix"
    },
    imageHeight: "Зургийн өндөр",
    imageWidth: "Зургийн өргөн",
    valueName: "Хариултыг дараагийн JSON талбарт хадгалах",
    defaultDisplayValue: "Динамик текстүүдийн стандарт үзүүлэлтийн үнэ",
    rateDescriptionLocation: "Шошгоны зохицл",
    size: "Оролтын хэмжээ (тэмдэгтээр)",
    cellErrorLocation: "Эсийн алдааны мессежийн зохицуулалт",
    enabled: "Боломжтой болсон",
    disabled: "Хөгжлийн бэрхшээлтэй",
    inherit: "Өв залгамжл",
    apply: "Хэрэгжүүл",
    ok: "OK",
    save: "Хадгалах",
    clear: "Цэвэрлэх",
    saveTooltip: "Хадгалах",
    cancel: "Болих",
    set: "Тааруулах",
    reset: "Шинээр тохируулах",
    change: "Солих",
    refresh: "Шинэчлэх",
    close: "Хаах",
    delete: "Устгах",
    add: "Нэмэх",
    addNew: "Нэмэх",
    addItem: "Хэсэг нэмэх бол дарах...",
    removeItem: "Хэсэг устгах бол дарах...",
    dragItem: "Хэсгийг чирэх",
    addOther: "Бусад",
    addSelectAll: "Бүгдийг сонгох",
    addNone: "Аль нь ч биш",
    removeAll: "Бүгдийг устгах",
    edit: "Засах",
    back: "Хадгалахгүйгээр буцах",
    backTooltip: "Хадгалахгүйгээр буцах",
    saveAndBack: "Хадгалаад буцах",
    saveAndBackTooltip: "Хадгалаад буцах",
    doneEditing: "Болсон",
    editChoices: "Сонголтуудыг засах",
    showChoices: "Сонголтуудыг харуулах",
    move: "Шилжүүлэх",
    empty: "<хоосон>",
    emptyValue: "Утга хоосон байна",
    fastEntry: "Гараар оруулах",
    fastEntryNonUniqueError: "'{0}' утга давтагдаж байна!",
    fastEntryChoicesCountError: "Хэсгийг {0}-оос {1} хүртэл хязгаарлах",
    fastEntryChoicesMinCountError: "Наад зах нь {0} зүйлс оруулна уу",
    fastEntryPlaceholder: "Та дараах форматын дагуу өгөгдлийг оруулж болно:\nvalue1|text\nvalue2",
    formEntry: "Маягт оруулах",
    testService: "Үйлчилгээг турших",
    itemSelectorEmpty: "Элемент сонгоно уу",
    conditionActionEmpty: "Үйлдэл сонгоно уу",
    conditionSelectQuestion: "Асуулт сонгох...",
    conditionSelectPage: "Хуудас сонгох...",
    conditionSelectPanel: "Панел сонгох...",
    conditionValueQuestionTitle: "Утга оруулах/сонгох",
    aceEditorHelp: "ctrl+space дарж илэрхийлэл биелэгдэх сануулга харах.",
    aceEditorRowTitle: "Тухайн мөр",
    aceEditorPanelTitle: "Тухайн панел",
    showMore: "Дэлгэрэнгүй мэдээллийг баримт бичгээс авна уу.",
    assistantTitle: "Боломжтой асуултууд",
    cellsEmptyRowsColumns: "Багадаа нэг багана эсвэл мөр байх ёстой",
    showPreviewBeforeComplete: "Санал асуулга явуулхаас өмнө хариултуудыг урьдчилж харах",
    overridingPropertyPrefix: "Дэргэд нь ",
    resetToDefaultCaption: "Дахин тохируулах",
    propertyIsEmpty: "Утга оруулна уу",
    propertyIsNoUnique: "Дахин давтагдахгүй утга оруулна уу",
    propertyNameIsNotUnique: "Өөр нэр оруулна уу",
    propertyNameIsIncorrect: "\"Item\", \"монгол\", \"panel\", \"row\" гэсэн үгсийн нөөц үгийг бүү хэрэглэ.",
    listIsEmpty: "Одоогоор ямар ч зүйл ороогүй байна",
    "listIsEmpty@choices": "Одоогор ямар ч сонголт ороогүй байна",
    "listIsEmpty@columns": "Танд ямар ч багана байхгүй",
    "listIsEmpty@gridLayoutColumns": "Танд загварын багана хараахан байхгүй байна",
    "listIsEmpty@rows": "Чамд ямар ч мөр байхгүй",
    "listIsEmpty@validators": "Танд ямар нэгэн баталгаажуулалтын дүрэм байхгүй байна",
    "listIsEmpty@calculatedValues": "Танд ямар ч хувийн хувьсагч байхгүй",
    "listIsEmpty@triggers": "Танд ямар ч өдөөгч байхгүй",
    "listIsEmpty@navigateToUrlOnCondition": "Танд ямар ч холбоос байхгүй",
    "listIsEmpty@pages": "Танд одоохондоо хуудас байхгүй байна",
    "addNew@choices": "Сонголт оруулах",
    "addNew@columns": "Шинэ багана нэмэх",
    "addNew@rows": "Шинэ мөр нэмэх",
    "addNew@validators": "Шинэ дүрэм нэмэх",
    "addNew@calculatedValues": "Шинэ хувьсагч нэмэх",
    "addNew@triggers": "Шинэ триггер нэмэх",
    "addNew@navigateToUrlOnCondition": "Шинэ URL нэмэх",
    "addNew@pages": "Шинэ хуудас нэмж",
    expressionIsEmpty: "Томъёо хоосон байна",
    value: "Утга",
    text: "Текст",
    rowid: "Мөрний ID",
    imageLink: "Зураг эсвэл видео линк",
    columnEdit: "Багана засах: {0}",
    itemEdit: "Зүйл засах: {0}",
    url: "Үйлчилгээний линк",
    path: "Үйлчилгэний хүрээнд өгөгдөлд хүрэх зам",
    choicesbyurl: {
      url: "Вэб үйлчилгээний URL",
      valueName: "Утгуудыг дарагийн JSON талбараас авах"
    },
    titleName: "Үзүүлэн текстүүдийг дараагийн JSON талбараас авах",
    imageLinkName: "Зургийн линкийг дараагийн JSON талбараас",
    allowEmptyResponse: "Хоосон хариулт зөвшөөрөх",
    titlePlaceholder: "Гарчиг",
    surveyTitlePlaceholder: "Санал асуулгын гарчиг",
    pageTitlePlaceholder: "Хуудас {num}",
    startPageTitlePlaceholder: "Эхлэх хуудас",
    descriptionPlaceholder: "Тайлбар",
    surveyDescriptionPlaceholder: "Тайлбар",
    pageDescriptionPlaceholder: "Тайлбар",
    textWrapEnabled: "Боолт сонголт",
    showOtherItem: "Өөр сонголт зөвшөөрөх",
    otherText: "Өөр сонголтын текст",
    showNoneItem: "None сонголтыг зөвшөөрөх",
    showRefuseItem: "Хариулах татгалзах боломжийг олго",
    showDontKnowItem: "Бүү мэд сонголтыг зөвшөөр",
    noneText: "None сонголтын текст",
    showSelectAllItem: "Бүгдийг сонгохыг зөвшөөрөх",
    selectAllText: "Бүгдийг сонгох",
    choicesMin: "Автоматаар үүсэх элементийн хамгийн бага утга",
    choicesMax: "Автоматаар үүсэх элементийн хамгийн их утга",
    choicesStep: "Автоматаар үүсэх элементийн алхам",
    name: "Нэр",
    title: "Гарчиг",
    cellType: "Нүдний төрөл",
    colCount: "Баганы тоо",
    choicesOrder: "Сонголтыг эрэмбэлэх дараалал",
    allowCustomChoices: "Өөрийн сонголтыг хийх боломж олгох",
    visible: "Харагдана",
    isRequired: "Заавал бөглөх",
    markRequired: "Шаардлагын дагуу тэмдэглэгээ хийх",
    removeRequiredMark: "Шаардлагатай тэмдэглэгээг хасах",
    eachRowRequired: "Бүх мөрөнд хариулт шаардах",
    eachRowUnique: "Дараалалд хувилж хариу үйлдэл үзүүлэхээс сэргийлнэ",
    requiredErrorText: "Заавал бөглөх талбарыг бөглөөгүй байна",
    startWithNewLine: "Асуултыг шинэ мөрөнд харуулах",
    rows: "Мөр",
    cols: "Багана",
    placeholder: "Оролтын жишээ утга",
    showPreview: "Урьдчилан харах хэсгийг харуулах",
    storeDataAsText: "JSON үр дүнд файлын агуулгыг текст хэлбэрээр хадгалах",
    maxSize: "Файлын дээд хэмжээ (байтаар)",
    rowCount: "Мөрний тоо",
    columnLayout: "Баганы зохион байгуулалт",
    addRowButtonLocation: "Мөр нэмэх товчны байршил",
    transposeData: "Багануудад транспозын эгнээ",
    addRowText: "Мөр нэмэх",
    removeRowText: "Мөр устгах",
    rateMin: "Хамгийн бага утга",
    rateMax: "Хамгийн их утга",
    rateStep: "Алхам",
    minRateDescription: "Хамгийн бага утгын тайлбар",
    maxRateDescription: "Хамгийн их утгын тайлбар",
    inputType: "Оролтын төрөл",
    optionsCaption: "Сонголтын талбар",
    defaultValue: "Үндсэн хариулт",
    cellsDefaultRow: "Үндсэн текст",
    surveyEditorTitle: "Санал асуулгын тохиргоог засах",
    qEditorTitle: "Засах: {0}",
    maxLength: "Дээд урт (тэмдэгтээр)",
    buildExpression: "Тооцоол",
    editExpression: "Засах",
    and: "бас",
    or: "эсвэл",
    remove: "Устгах",
    addCondition: "Нөхцөл нэмэх",
    emptyLogicPopupMessage: "Нөхцөл тохируулахын тулд асуултыг сонгоно уу.",
    if: "Хэрэв",
    then: "бол",
    setToName: "Зорилтот асуулт",
    fromName: "Хариулт хуулах асуулт",
    gotoName: "Үсэрч очих асуулт",
    ruleIsNotSet: "Дүрэм буруу байна",
    includeIntoResult: "Санал асуулгын үр дүнд оруулах",
    showTitle: "Гарчиг харуулах",
    expandCollapseTitle: "Гарчиг өргөсгөх/багасгах",
    locale: "Санал асуулгын хэл",
    simulator: "Төхөөрөмжийн төрөл сонгоно уу",
    landscapeOrientation: "Хэвтээ байрлалд шилжих",
    portraitOrientation: "Босоо байрлалд шилжих",
    clearInvisibleValues: "Харагдахгүй утгыг цэвэрлэх",
    cookieName: "Cookie name",
    partialSendEnabled: "Хэсэгчилсэн санал асуулгын явцыг хадгалах",
    storeOthersAsComment: "Бусад утгыг тусдаа талбарт хадгалах",
    showPageTitles: "Хуудасны гарчиг харуулах",
    showPageNumbers: "Хуудасны тоо харуулах",
    pagePrevText: "Өмнөх хуудас - харагдах бичиг",
    pageNextText: "Дараагийн хуудас - харагдах бичиг",
    completeText: "Санал асуулга амжиллттай бөглөгдсөн - харагдах бичиг",
    previewText: "Хариулт урьдчилж харах - харагдах бичиг",
    editText: "Хариулт засах харагдах бичиг",
    startSurveyText: "Санал асуулга эхлэх үед харагдах бичиг",
    showNavigationButtons: "Чиглүүлгийн товчийн байрлал",
    navigationButtonsLocation: "Навигацийн товчлууруудын байрлал",
    showPrevButton: "Өмнөх хуудасны товч харуулах",
    firstPageIsStartPage: "Эхлэх хуудас нь эхний хуудас байна",
    showCompletePage: "Санал асуулга амжилттай бөглөгдсөн хуудсыг харуулах",
    autoAdvanceEnabled: "Дараагийн хуудас руу автоматаар шилжих",
    autoAdvanceAllowComplete: "Судалгааг автоматаар дуусгах",
    showProgressBar: "Явцын мөрний байршил",
    progressBarLocation: "Progress bar alignment",
    questionTitleLocation: "Асуултын гарчгийн байршил",
    questionTitleWidth: "Асуулт нэрийн өргөн",
    requiredMark: "Шаардлагатай тэмдэг(үүд)",
    questionTitleTemplate: "Асуултын гарчигны загвар, үндсэн нь: '{үгүй}. {шаардах} {гарчиг}'",
    questionErrorLocation: "Алдааны мэдэгдлийн байршил",
    autoFocusFirstQuestion: "Эхний асуултыг шинэ хуудсанд төвлөрүүлэх",
    questionOrder: "Хуудас дээрх элементийн дараалал",
    timeLimit: "Санал асуулга бөглөж дуусах хугацаа (секундээр)",
    timeLimitPerPage: "Нэг хуудас бөглөж дуусах хугацаа (секундээр)",
    showTimer: "Цаг хэмжигч ашигла",
    timerLocation: "Тоолуурын байршил",
    timerInfoMode: "Тоолуурын горим",
    renderMode: "Панелийн дэлгэцийн горим",
    allowAddPanel: "Панел нэмэхийг зөвшөөрөх",
    allowRemovePanel: "Панел хасахыг зөвшөөрөх",
    addPanelText: "Панел товчийн текст нэмэх",
    removePanelText: "Панел товчийн текст хасах",
    isSinglePage: "Бүх элементийг нэг хуудас дээр харуулах",
    html: "HTML тэмдэглэгээ",
    setValue: "Хариулт",
    dataFormat: "Зургийн формат",
    allowAddRows: "Мөр нэмэхийг зөвшөөрөх",
    allowRemoveRows: "Мөр хасахыг зөвшөөрөх",
    allowRowReorder: "Мөр чирэхийг зөвшөөрөх",
    responsiveImageSizeHelp: "Зургийн өндөр, өргөнийг зааж өгсөн үед хамаарахгүй.",
    minImageWidth: "Зургийн өргөний хамгийн бага хэмжээ",
    maxImageWidth: "Зургийн өргөний хамгийн их хэмжээ",
    minImageHeight: "Зургийн өндрийн хамгийн бага хэмжээ",
    maxImageHeight: "Зургийн өндрийн хамгийн их хэмжээ",
    minValue: "Хамгийн бага утга",
    maxValue: "Хамгийн их утга",
    caseInsensitive: "Кейс үл мэдрэмтгий",
    minLength: "Хамгийн бага урт (тэмдэгтээр)",
    allowDigits: "Тоо зөвшөөрөх",
    minCount: "Хамгийн бага тоо",
    maxCount: "Хамгийн их тоо",
    regex: "Тогтмол илэрхийлэл",
    surveyvalidator: {
      text: "Алдаа",
      expression: "Баталгаажуулах илэрхийлэл"
    },
    totalText: "Нийт мөр",
    totalType: "Нийт төрөл",
    totalExpression: "Нийт илэрхийлэл",
    totalDisplayStyle: "Нийт утгыг харуулах загвар",
    totalCurrency: "Мөнгөн тэмдэгт",
    totalFormat: "Хэлбэржүүлсэн текст",
    logo: "Лого (URL эсвэл base64 кодлосон мөр)",
    questionsOnPageMode: "Санал асуулгын бүтэц",
    maxTextLength: "Хариултын хамгийн их урт(тэмдэгтээр)",
    maxCommentLength: "Хариултын хамгийн бага урт(тэмдэгтээр)",
    commentAreaRows: "Тайлбар хэсгийн өндөр (мөрөнд)",
    autoGrowComment: "Шаардлагатай үед санал сэтгэгдлийн хэсгийг өргөсгөх",
    allowResizeComment: "Хэрэглэгчдэд текстийн газруудыг дахин ашиглах боломж олго",
    textUpdateMode: "Текст асуултын утгыг шинэчлэх",
    maskType: "Оролтын багны төрөл",
    autoFocusFirstError: "Анхны буруу хариулт руу чиглүүлэх",
    checkErrorsMode: "Баталгаажуулалт ажиллуулах",
    validateVisitedEmptyFields: "Алдагдсан фокус дээр хоосон талбайг баталгаажуулах",
    navigateToUrl: "URL-рүү чиглүүлэх",
    navigateToUrlOnCondition: "Динамик URL",
    completedBeforeHtml: "Хэрэглэгч санал асуулгыг бөглөсөн байх үед харуулах тэмдэглэгээ",
    completedHtml: "Санал асуулга амжилттай бөглөгдсөн үед харуулах тэмдэглэгээ",
    completedHtmlOnCondition: "Санал асуулга амжилттай бөглөгдсөн үед харуулах динамик тэмдэглэгээ",
    loadingHtml: "Судалгааны загвар ачааллаж байх үед харуулах тэмдэглэгээ",
    commentText: "Санал сэтгэгдлийн хэсгийн текст",
    autocomplete: "Автоматаар бөглөх төрөл",
    labelTrue: "\"Тийм\" шошго",
    labelFalse: "\"Үгүй\" шошго",
    allowClear: "Цэвэрлэх товч харуулах",
    searchMode: "Хайлтын Мод",
    displayStyle: "Утга харуулах хэв маяг",
    format: "Хэлбэржүүлсэн текст",
    maximumFractionDigits: "Оронгийн нарийвчлалын дээд утга",
    minimumFractionDigits: "Оронгийн нарийвчлалын доод утга",
    useGrouping: "Бүлэг тусгаарлагчийг харуулах",
    allowMultiple: "Олон файл зөвшөөрөх",
    allowImagesPreview: "Зургуудыг урьдчилж харах",
    acceptedTypes: "Зөвшөөрөгдсөн файлын төрөл",
    waitForUpload: "Файл байршуулж дуустал хүлээх",
    needConfirmRemoveFile: "Файл устгахыг батлах",
    detailPanelMode: "Нарийвчилсан панелийн байршил",
    minRowCount: "Хамгийн бага мөрний тоо",
    maxRowCount: "Хамгийн их мөрний тоо",
    confirmDelete: "Мөр устгахыг батлах",
    confirmDeleteText: "Баталгаажуулах мессеж",
    panelCount: "Панелийн эхлэх тоо",
    minPanelCount: "Хамгийн бага панелийн тоо",
    maxPanelCount: "Хамгийн их панелийн тоо",
    panelsState: "Дотоод панелийн өргөссөн төлөв",
    prevPanelText: "Өмнөх панелийн товч",
    nextPanelText: "Дараагийн панелийн товч",
    removePanelButtonLocation: "Панел устгах товчны байршил",
    hideIfRowsEmpty: "Мөр байхгүй тохиолдолд асуултыг нуух",
    hideColumnsIfEmpty: "Мөр байхгүй тохиолдолд баганыг нуух",
    rateValues: "Хэрэглэгчийн үнэлгээний утгууд",
    rateCount: "Үнэ тогтоох",
    autoGenerate: "Үнэ цэнийг хэрхэн тодорхойлох вэ?",
    hideIfChoicesEmpty: "Сонголтгүй бол асуултыг нуух",
    minWidth: "Хамгийн бага өргөн (CSS хүлээн зөвшөөрсөн утга)",
    maxWidth: "Хамгийн их өргөн (CSS хүлээн зөвшөөрсөн утга)",
    width: "Өргөн (CSS хүлээн зөвшөөрсөн утга)",
    showHeader: "Баганы гарчигийг харуулах",
    horizontalScroll: "Хэвтээ гүйлгэх мөр харуулах",
    columnMinWidth: "Баганы хамгийн бага утга (CSS хүлээн зөвшөөрсөн утга)",
    rowTitleWidth: "Мөрийн гарчгийн утга (CSS хүлээн зөвшөөрсөн утга)",
    valueTrue: "Үнэн утга",
    valueFalse: "Худал утга",
    minErrorText: "Хамгийн бага утгаас бага байна! алдааны мэдэгдэл",
    maxErrorText: "Хамгийн их утгаас их байна! алдааны мэдэгдэл",
    otherErrorText: "Хоосон санал хүсэлт! алдааны мэдэгдэл",
    keyDuplicationError: "Давтагдсан утга! алдааны мэдэгдэл",
    minSelectedChoices: "Хамгийн бага сонгосон сонголт",
    maxSelectedChoices: "Хамгийн ихдээ сонгох боломжийн тоо",
    logoWidth: "Логоны өргөн (CSS хүлээн зөвшөөрсөн утга)",
    logoHeight: "Логөны өндөр (CSS хүлээн зөвшөөрсөн утга)",
    readOnly: "Зөвхөн унших",
    enableIf: "Засах боломжтой хэрэв",
    noRowsText: "\"Мөр байхгүй байна!\" мэдэгдэл",
    separateSpecialChoices: "Тусгай сонголтуудыг салгах (Аль нь ч биш, Бусад, Бүгдийг сонгох)",
    choicesFromQuestion: "Дараах асуултаас сонголтуудыг хуулах.",
    choicesFromQuestionMode: "Аль сонголтуудыг хуулах вэ?",
    choiceValuesFromQuestion: "Дараах матрицын багана эсвэл панелийн асуултын үнэт зүйлсийг сонголтын ID болгон ашигла",
    choiceTextsFromQuestion: "Дараах матрицын багана эсвэл панелийн асуултын үнэт зүйлсийг сонголтын текст болгон ашигла",
    progressBarShowPageTitles: "Хөгжил дэвшлийн тавцан дахь хуудасны гарчгыг харуул",
    progressBarShowPageNumbers: "Хуудасны дугааруудыг progress bar-д харуулах",
    showCommentArea: "Санал хүсэлтийн хэсэг харуулах",
    commentPlaceholder: "Санал хүсэлтийн хэсэг",
    displayRateDescriptionsAsExtremeItems: "Display rate descriptions as extreme values",
    rowOrder: "Мөрний дараалал",
    columnsLayout: "Баганы зохион байгуулалт",
    columnColCount: "Шаталсан баганын тоо",
    correctAnswer: "Зөв хариулт",
    defaultPanelValue: "Үндсэн утга",
    cells: "Нүдний текст",
    fileInputPlaceholder: "Файл сонгох эсвэл файлын холбоосыг наа...",
    keyName: "Түлхүүр багана",
    itemvalue: {
      visibleIf: "Хэрэв сонголтыг ил тод болго",
      enableIf: "Сонголтыг сонговол"
    },
    "itemvalue@rows": {
      visibleIf: "Хэрэв эгнээг ил гаргах",
      enableIf: "Хэрэв эгнээг хянан засварлах боломжтой болго"
    },
    imageitemvalue: {
      text: "Тайлбар"
    },
    logoPosition: "Логоны байршил",
    addLogo: "Лого нэмэх...",
    changeLogo: "Лого солих...",
    logoPositions: {
      none: "Лого устгах",
      left: "Зүүн",
      right: "Баруун",
      top: "Дээр",
      bottom: "Доор"
    },
    previewMode: "Урьдчилан харах хэлбэр",
    gridLayoutEnabled: "Grid layout-ийг идэвхжүүлэх",
    gridLayoutColumns: "Grid layout columns",
    maskSettings: "Маскийн тохиргоо",
    detailErrorLocation: "Мөр өргөтгөлийн алдаа мессежийн тохируулга",
    // Creator tabs
    tabs: {
      panel: {
        layout: "Panel Layout"
      },
      general: "Ерөнхий",
      fileOptions: "Сонголт",
      html: "HTML засварлагч",
      columns: "Багана",
      rows: "Мөр",
      choices: "Сонголт",
      items: "Элемент",
      visibleIf: "Харагдана хэрэв",
      enableIf: "Засварлаж болно хэрэв",
      requiredIf: "Заавал бөглөх болох хэрэв",
      rateValues: "Утгыг үнэлэх",
      choicesByUrl: "RESTful сервисийн сонголтууд",
      matrixChoices: "Үндсэн сонголтууд",
      multipleTextItems: "Текст оролт",
      numbering: "Дугаарлалт",
      validators: "Батлагч",
      navigation: "Чиглүүлэгч",
      question: "Асуулт",
      pages: "Хуудас",
      timer: "Тоолуур/Асуулт хариулт",
      calculatedValues: "Тооцоолсон утга",
      triggers: "Схемүүд",
      templateTitle: "Гарчигны загвар",
      totals: "Нийт",
      logic: "Логик",
      mask: "Оролт Маск тохиргоо",
      layout: {
        panel: "Layout",
        question: "Layout",
        base: "Layout"
      },
      data: "Өгөгдөл",
      validation: "Батлах",
      cells: "Нүдний текст",
      showOnCompleted: "Санал асуулга амжилттай бөглөгдлөө.",
      logo: "Санал асуулгын гарчиг дахь лого",
      slider: "Гулсуулагч",
      expression: "илэрхийлэл",
      questionSettings: "Асуултын тохиргоо",
      header: "Толгойлогч",
      background: "Ар талын",
      appearance: "Харагдах байдал",
      accentColors: "Акцентын өнгө",
      surfaceBackground: "Гадаргуугийн фон",
      scaling: "Масштаблах",
      others: "Бусад"
    },
    editProperty: "Шинж чанарыг засварлах '{0}'",
    items: "Элементүүд",
    choicesVisibleIf: "Сонголтууд харагдана хэрэв",
    choicesEnableIf: "Сонголтууд сонгогдоно хэрэв",
    columnsEnableIf: "Баганууд харагдана хэрэв",
    rowsEnableIf: "Мөрнүүд харагдана хэрэв",
    innerIndent: "Дотоод догол мөр нэмэх",
    copyDefaultValueFromLastEntry: "Сүүлийн тайлбарын хариултуудыг стандарт болгон ашигла",
    enterNewValue: "Утга оруулна уу.",
    noquestions: "Санал асуулгад асуулт оруулна уу.",
    createtrigger: "Схем устгана уу.",
    titleKeyboardAdornerTip: "Засахын тулд Enter товчийг дарна уу",
    keyboardAdornerTip: "Засахын тулд Enter товчийг дарна уу, Устгахын тулд Delete товчийг дарна уу, Хөдөлгөхийн тулд alt + дээш сум эсвэл доош сум дарна уу",
    triggerOn: "On ",
    triggerMakePagesVisible: "Хуудсуудыг харуулах",
    triggerMakeQuestionsVisible: "Элементүүдийг харуулах",
    triggerCompleteText: "Complete the survey if succeed.",
    triggerNotSet: "Схем тохируулагдаагүй байна",
    triggerRunIf: "Ажилуулах хэрэв",
    triggerSetToName: "Утга өөрчлөх: ",
    triggerFromName: "Утга хуулах: ",
    triggerRunExpression: "илэрхийлэлг ажиллуулах",
    triggerSetValue: "хүртэл: ",
    triggerGotoName: "Асуулт руу үсрэх",
    triggerIsVariable: "Хувьсагч санал асуулгын үр дүнд оруулахгүй байх.",
    triggerRunExpressionEmpty: "Бодит илэрхийлэл оруулна уу.",
    emptyExpressionPlaceHolder: "илэрхийлэлг энд бичнэ үү...",
    noFile: "Файл сонгоогүй байна.",
    clearIfInvisible: "Асуулт нуувал утгыг цэвэрлэх.",
    valuePropertyName: "Утгын шинж чанарын нэр",
    searchEnabled: "Хайлтыг идэвхжүүлэх",
    hideSelectedItems: "Сонгогдсон хэсгийг нуух",
    closeOnSelect: "Сонголт хийсэн үед доош буусан сонголтуудыг хаах",
    verticalAlign: "Босоо эгнүүлэх",
    alternateRows: "Хувилбар мөрнүүд",
    columnsVisibleIf: "Баганууд харагдана хэрэв",
    rowsVisibleIf: "Мөрнүүд харагдана хэрэв",
    otherPlaceholder: "Санал асуулгын хэсэг",
    filePlaceholder: "Файл байршуулагчийн текст",
    photoPlaceholder: "Гэрэл зураг байршуулагч бичвэр",
    fileOrPhotoPlaceholder: "Файл эсвэл гэрэл зураг байршуулагч текст",
    rateType: "Rate төрөл",
    url_placeholder: "Экс.: https://api.example.com/books",
    path_placeholder: "Экс.: categories.fiction",
    questionStartIndex_placeholder: "Экс.: а)",
    width_placeholder: "Экс.: 6ин",
    minWidth_placeholder: "Экс: 600px",
    maxWidth_placeholder: "Экс: 50%",
    imageHeight_placeholder: "автомат",
    imageWidth_placeholder: "автомат",
    itemTitleWidth_placeholder: "Жишээ нь: 100px",
    theme: {
      themeName: "Сэдэв",
      isPanelless: "Асуулт хариултын төрх",
      editorPanel: "Ар талын болон булангийн радиус",
      questionPanel: "Ар талын болон булангийн радиус",
      primaryColor: "Акцент өнгө",
      panelBackgroundTransparency: "Панелийн ар талын харанхуй байдал",
      questionBackgroundTransparency: "Асуулт хариултын нөхцөл байдал",
      fontSize: "Фонтын хэмжээ",
      scale: "Хэмжүүр",
      cornerRadius: "Булангийн радиус",
      advancedMode: "Дэвшилтэт режим",
      pageTitle: "Нүүр фонт",
      pageDescription: "Дүрслэлийн фонт",
      questionTitle: "Нүүр фонт",
      questionDescription: "Дүрслэлийн фонт",
      editorFont: "Фонт",
      backgroundOpacity: "Бүдүүлэг байдал",
      "--sjs-font-family": "Фонтын гэр бүл",
      "--sjs-general-backcolor-dim": "Ар талын өнгө",
      "--sjs-primary-backcolor": "Акцентийн гарал үүсэл",
      "--sjs-primary-forecolor": "Акцентийн өмнө",
      "--sjs-special-red": "Алдааны мессеж",
      "--sjs-shadow-small": "Сүүдрийн нөлөө",
      "--sjs-shadow-inner": "Сүүдрийн нөлөө",
      "--sjs-border-default": "Өнгө"
    },
    "header@header": {
      headerView: "Үзэх",
      logoPosition: "Лого байрлал",
      surveyTitle: "Судалгааны нэрийн фонт",
      surveyDescription: "Судалгааны тодорхойлолтын фонт",
      headerTitle: "Судалгааны нэрийн фонт",
      headerDescription: "Судалгааны тодорхойлолтын фонт",
      inheritWidthFrom: "Агуулгын бүсийн өргөн",
      textAreaWidth: "Текстийн өргөн",
      backgroundColorSwitch: "Ар талын өнгө",
      backgroundImage: "Ар талын зураг",
      backgroundImageOpacity: "Бүдүүлэг байдал",
      overlapEnabled: "Давхар",
      logoPositionX: "Лого байрлал",
      titlePositionX: "Нүүр албан тушаал",
      descriptionPositionX: "Тодорхойлолтын байрлал"
    }
  },
  // Property values
  pv: {
    "true": "Үнэн",
    "false": "Худал",
    file: "Орон нутгийн файлууд",
    camera: "Камер",
    "file-camera": "Орон нутгийн файлууд эсвэл камер",
    inherit: "Удамших",
    show: "Харагдана",
    hide: "Нуусан",
    default: "Үндсэн",
    initial: "Анхны",
    random: "Санамсаргүй",
    collapsed: "Багассан",
    expanded: "Өргөтгөсөн",
    none: "Аль нь ч биш",
    asc: "Өгсөж байгаа",
    desc: "Буурч байгаа",
    indeterminate: "Тодорхойгүй",
    selected: "Сонгосон",
    unselected: "Сонгогдоогүй",
    decimal: "Бутархай",
    currency: "Мөнгөн тэмдэгт",
    percent: "Хувь",
    firstExpanded: "Эхний панел өргөссөн",
    off: "Асуултын тоог нуух",
    list: "Жагсаалт",
    carousel: "Карусел",
    tab: "Табууд",
    progressTop: "Панел чиглүүлэгч + Явцын мөр дээд хэсэгт байрлах",
    progressBottom: "Панел чиглүүлэгч + Явцын мөр доод хэсэгт байрлах",
    progressTopBottom: "Панел чиглүүлэгч + Явцын мөр дээд ба доод хэсэгт байрлах",
    horizontal: "Хэвтээ",
    vertical: "Босоо",
    top: "Дээд",
    bottom: "Доод",
    topBottom: "Дээд ба доод",
    both: "Аль аль нь",
    left: "Зүүн",
    right: "Баруун",
    center: "Төв",
    leftRight: "Зүүн, баруун",
    middle: "Дунд",
    color: "өнгө",
    date: "огноо",
    datetime: "datetime",
    "datetime-local": "datetime-local",
    email: "цахим шуудан",
    month: "сар",
    number: "тоо",
    password: "нууц үг",
    range: "range",
    tel: "Дугаар",
    text: "Текст",
    time: "цаг",
    url: "url",
    week: "долоо хоног",
    hidden: "Нуусан",
    edit: "Засаж болдог",
    display: "Зөвхөн унших",
    contain: "Агуулах",
    cover: "Хөшиг",
    fill: "Дүүргэлт",
    next: "Дараа нь",
    last: "Сүүлчийнх нь",
    onComplete: "Санал асуулга амжилттай бөглөгдсөн үед.",
    onHidden: "Асуулт нуугдсан үед",
    onHiddenContainer: "Асуулт, панел эсвэл хуудас нуугдсан үед",
    clearInvisibleValues: {
      none: "Хэзээ ч үгүй"
    },
    clearIfInvisible: {
      none: "Хэзээ ч"
    },
    inputType: {
      color: "Өнгө",
      date: "Огноо",
      "datetime-local": "Огноо, цаг",
      email: "И-мэйл",
      month: "Сар",
      number: "Тоо хэмжээ",
      password: "Нууц үг",
      range: "Хамрах хүрээ",
      tel: "Утасны дугаар",
      text: "Текст",
      time: "Цаг хугацаа",
      url: "URL",
      week: "Долоо хоног"
    },
    autocomplete: {
      name: "Бүтэн нэр",
      "honorific-prefix": "Угтвар",
      "given-name": "Овог нэр",
      "additional-name": "Овгийн нэр",
      "family-name": "Овгийн нэр",
      "honorific-suffix": "Суффикс",
      nickname: "Хоч нэр",
      "organization-title": "Ажлын нэр",
      username: "Хэрэглэгчийн нэр",
      "new-password": "Шинэ нууц үг",
      "current-password": "Одоогийн нууц үг",
      organization: "Байгууллагын нэр",
      "street-address": "Гудамжны бүрэн хаяг",
      "address-line1": "Хаягийн шугам 1",
      "address-line2": "Хаягийн мөр 2",
      "address-line3": "Хаягийн мөр 3",
      "address-level4": "4-р түвшингийн хаяг",
      "address-level3": "3-р түвшингийн хаяг",
      "address-level2": "2-р түвшингийн хаяг",
      "address-level1": "1-р түвшингийн хаяг",
      country: "Улсын код",
      "country-name": "Улсын нэр",
      "postal-code": "Шуудангийн код",
      "cc-name": "Карт эзэмшигчийн нэр",
      "cc-given-name": "Карт эзэмшигчийн нэр",
      "cc-additional-name": "Карт эзэмшигчийн овгийн нэр",
      "cc-family-name": "Карт эзэмшигчийн овгийн нэр",
      "cc-number": "Кредит картын дугаар",
      "cc-exp": "Хүчингүй болох хугацаа",
      "cc-exp-month": "Хугацаа дуусах сар",
      "cc-exp-year": "Хугацаа дуусах жил",
      "cc-csc": "Картын аюулгүй байдлын код",
      "cc-type": "Кредит картын төрөл",
      "transaction-currency": "Транзакцийн валют",
      "transaction-amount": "Транзакцийн хэмжээ",
      language: "Санал болгосон хэл",
      bday: "Төрсөн өдөр",
      "bday-day": "Төрсөн өдрийн өдөр",
      "bday-month": "Төрсөн өдрийн сар",
      "bday-year": "Төрсөн өдөр",
      sex: "Хүйс",
      url: "Вэбсайтын URL",
      photo: "Профайл зураг",
      tel: "Утасны дугаар",
      "tel-country-code": "Утасны улсын код",
      "tel-national": "Үндэсний утасны дугаар",
      "tel-area-code": "Бүсийн код",
      "tel-local": "Орон нутгийн утасны дугаар",
      "tel-local-prefix": "Орон нутгийн утасны угтвар",
      "tel-local-suffix": "Орон нутгийн утасны суффикс",
      "tel-extension": "Утасны өргөтгөл",
      email: "Э-мэйл хаяг",
      impp: "Мессежийн протокол"
    },
    maskType: {
      none: "Хэн ч биш",
      pattern: "Загвар",
      numeric: "Тоо нь",
      datetime: "Огноо, цаг",
      currency: "Валютын ханш"
    },
    inputTextAlignment: {
      auto: "Авто",
      left: "Зүүн",
      right: "Баруун талд"
    },
    all: "Бүх",
    page: "Хуудас",
    survey: "Санал асуулга",
    onNextPage: "Дараагийн хуудас руу шилжих үед",
    onValueChanged: "Асуулт солигдсоны дараа",
    onValueChanging: "Асуулт солигдхоос өмнө",
    questionsOnPageMode: {
      standard: "Оригинал бүтэц",
      singlePage: "Бүх асуултыг нэг хуудсан дээр харуул",
      questionPerPage: "Хуудас тус бүрт ганц асуултыг харуул"
    },
    noPreview: "Урьдчилан харах боломжгүй",
    showAllQuestions: "Бүх асуултыг харуулах.",
    showAnsweredQuestions: "Зөвхөн хариулсан асуултуудыг харуулах.",
    allQuestions: "Бүх асуултыг үзүүл",
    answeredQuestions: "Зөвхөн хариулсан асуултуудыг үзүүлэх",
    pages: "Бөглөгдсөн хуудсууд",
    questions: "Хариулсан асуултууд",
    requiredQuestions: "Заавал бөглөх асуултууд",
    correctQuestions: "Зөв хариултууд",
    buttons: "Бөглөгдсөн хуудсууд (UI товч)",
    underInput: "Оролтын доор",
    underTitle: "Гарчгийн доор",
    onBlur: "Бүдгэрүүлсэн үед",
    onTyping: "Бичиж байх үед",
    underRow: "Мөрийн доор",
    underRowSingle: "Мөрийн доор, зөвхөн ганц панел харагдана",
    auto: "Авто",
    showNavigationButtons: {
      none: "Нуусан"
    },
    timerInfoMode: {
      combined: "Аль аль нь"
    },
    addRowButtonLocation: {
      default: "Матрицын загвараас шалтгаалах"
    },
    panelsState: {
      default: "Хэрэглэгчид панелийг өргөсгөж багасгаж чадахгүй",
      collapsed: "Бүх панел багассан",
      expanded: "Бүх панел өргөтгөссөн",
      firstExpanded: "Анх өргөтгөн"
    },
    widthMode: {
      static: "Статик",
      responsive: "Уян хатан"
    },
    contentMode: {
      image: "Зураг",
      video: "Видео",
      youtube: "YouTube"
    },
    displayMode: {
      buttons: "Товчнууд",
      dropdown: "Доош задрах"
    },
    rateColorMode: {
      default: "Дефолт",
      scale: "Хэмжүүр"
    },
    scaleColorMode: {
      monochrome: "Монхор",
      colored: "Өнгөлсөн"
    },
    autoGenerate: {
      "true": "Үүсгэх",
      "false": "Гараар оруул"
    },
    rateType: {
      labels: "Labels",
      stars: "Одод",
      smileys: "Инээмсэглэл"
    },
    state: {
      default: "Цоожтой"
    },
    showQuestionNumbers: {
      default: "Авто машины дугаар олгох",
      on: "Авто машины дугаар олгох",
      onPage: "Хуудас бүр дээр дахин тохируулах",
      onpanel: "Тавиур бүр дээр дахин тавих",
      onPanel: "Тавиур бүр дээр дахин тавих",
      recursive: "Рекурсив дугаарлалт",
      onSurvey: "Судалгааг үргэлжлүүлэн хийх",
      off: "Дугаарлахгүй"
    },
    descriptionLocation: {
      underTitle: "Асуултын нэрийн дор",
      underInput: "Оролтын талбарын дор"
    },
    selectToRankAreasLayout: {
      horizontal: "Дараа нь сонголт",
      vertical: "Дээрх сонголтууд"
    },
    displayStyle: {
      decimal: "Decimal",
      currency: "Валютын ханш",
      percent: "Хувь",
      date: "Огноо"
    },
    totalDisplayStyle: {
      decimal: "Decimal",
      currency: "Валютын ханш",
      percent: "Хувь",
      date: "Огноо"
    },
    rowOrder: {
      initial: "Оргил"
    },
    questionOrder: {
      initial: "Оргил"
    },
    progressBarLocation: {
      top: "Дээд",
      bottom: "Доод",
      topbottom: "Дээд ба доод",
      aboveheader: "Гарчгийн дээр",
      belowheader: "Гарчгийн доод талд",
      off: "Нуугдмал"
    },
    sum: "Сум",
    count: "Тооллого",
    min: "Мин",
    max: "Макс",
    avg: "Авг",
    searchMode: {
      contains: "Агуулах",
      startsWith: "Эхлэл"
    },
    backgroundImageFit: {
      auto: "Авто",
      cover: "Хөшиг",
      contain: "Агуулах",
      fill: "Шээс",
      tile: "Тил"
    },
    backgroundImageAttachment: {
      fixed: "Зассан",
      scroll: "Хуйлмал бичиг"
    },
    headerView: {
      basic: "Үндсэн",
      advanced: "Өндөр хөгжсөн"
    },
    inheritWidthFrom: {
      survey: "Судалгаатай адил",
      container: "Сав баглаа боодолд тохирно"
    },
    backgroundColorSwitch: {
      none: "Хэн ч биш",
      accentColor: "Акцент өнгө",
      custom: "Үйлчилгээ"
    },
    colorPalette: {
      light: "Гэрэл",
      dark: "Харанхуй"
    },
    isPanelless: {
      "false": "Дефолт",
      "true": "Панелгүйгээр"
    },
    progressBarInheritWidthFrom: {
      survey: "Судалгаатай адил",
      container: "Савтай адил"
    }
  },
  // Operators
  op: {
    empty: "Хоосон",
    notempty: "Хоосон биш",
    equal: "Тэнцэх",
    notequal: "Тэнцэхгүй байх",
    contains: "Агуулсан",
    notcontains: "Агуулаагүй",
    anyof: "Аль нэгийг нь",
    allof: "Бүгдийг нь",
    greater: "-аас их",
    less: "-аас бага",
    greaterorequal: "-аас их эсвэл тэнцүү байх",
    lessorequal: "-аас бага эсвэл тэнцүү байх",
    and: "ба",
    or: "эсвэл"
  },
  // Embed window
  ew: {
    angular: "Angular хувилбар ашиглах",
    jquery: "jQuery хувилбар ашиглах",
    knockout: "Knockout хувилбар ашиглах",
    react: "React хувилбар ашиглах",
    vue: "Vue хувилбар ашиглах",
    bootstrap: "bootstrap бүтцэд",
    modern: "Орчин үеийн",
    default: "Үндсэн",
    orange: "Улбар шар",
    darkblue: "Хар хөх",
    darkrose: "Хүрэн",
    stone: "Чулуун",
    winter: "Өвлийн",
    winterstone: "Өвлийн-чулуун",
    showOnPage: "Санал асуулгыг хуудас дээр харуулах",
    showInWindow: "Санал асуулгыг цонхонд харуулах",
    loadFromServer: "JSON серверээс санал асуулгыг ачааллуулах",
    titleScript: "Скрипт ба хэв маяг",
    titleHtml: "HTML",
    titleJavaScript: "JavaScript"
  },
  // Preview (Survey)
  ts: {
    selectPage: "Тест хийх хуудсыг сонгох.",
    showInvisibleElements: "Харагдахгүй элементүүдийг харуулах.",
    hideInvisibleElements: "Харагдахгүй элементүүдийг нуух."
  },
  validators: {
    answercountvalidator: "Хариултын тоо",
    emailvalidator: "Цахим шууудан",
    expressionvalidator: "илэрхийлэл",
    numericvalidator: "Тоо",
    regexvalidator: "Regex",
    textvalidator: "Текст"
  },
  triggers: {
    completetrigger: "Санал асуулга дуусгах.",
    setvaluetrigger: "Хариулт тавих",
    copyvaluetrigger: "Хариулт хуулах",
    skiptrigger: "Асуулт руу үсрэх",
    runexpressiontrigger: "илэрхийлэл ажлуулах",
    visibletrigger: "Харагдах байдлыг өөрчлөх"
  },
  peplaceholder: {
    patternmask: {
      pattern: "Экс.: +1(999)-999-99-99"
    },
    datetimemask: {
      pattern: "Экс.: мм/д/yyy"
    },
    currencymask: {
      prefix: "Экс.: $",
      suffix: "Экс.: USD"
    },
    panelbase: {
      questionTitleWidth: "Экс: 200px"
    },
    panellayoutcolumn: {
      effectiveWidth: "Экс. : 30 %",
      questionTitleWidth: "Экс: 200px"
    }
  },
  pehelp: {
    panel: {
      name: "Хариулагчдад харагдахгүй панелийн ID.",
      description: "Панелийн дэд гарчиг бичнэ.",
      visibleIf: "Ид шидийн wand зургыг ашиглан панелийн харагдах байдлыг тодорхойлох нөхцөлийн дүрмийг тогтоо.",
      enableIf: "Зөвхөн унших хэв маягийг хаах нөхцөлтэй дүрмийг тогтоохын тулд шидэт туузны зургыг ашигла.",
      requiredIf: "Наад зах нь нэг үүрээ засах асуулт хариулт байхгүй л бол судалгаа явуулахаас сэргийлдэг нөхцөлийн дүрмийг тогтоохын тулд шидэт туузны зургыг ашигла.",
      questionTitleLocation: "Энэ хэлэлцүүлгийн бүх асуултад хамаарна. Хэрэв та энэ тохиргоог хүчингүй болгохыг хүсвэл хувь хүний асуултуудад зориулсан нэрийн зохицуулах дүрмүүдийг тодорхойл. \"Өв залгамжлах\" сонголт нь хуудасны түвшин (хэрэв set) эсвэл судалгааны түвшний тохиргоог (\"Top\" нь default-аар) хэрэгжүүлдэг.",
      questionTitleWidth: "Асуултын хайрцгуудынхаа зүүн талд эгнэн зогсож байх үед асуултын нэрний тогтмол өргөнийг тогтоо. CSS-ийн үнэт зүйлсийг (px, %, in, pt г.м) хүлээн зөвшөөрдөг.",
      questionErrorLocation: "Хяналтын шатны бүх асуулттай холбогдуулан алдааны мессежийн байршлыг тогтооно. \"Өв залгамжлах\" сонголт нь хуудасны түвшин (хэрэв set) эсвэл судалгааны түвшний тохиргоог хэрэгжүүлдэг.",
      questionOrder: "Асуултуудын анхны дарааллыг хадгалах эсвэл санамсаргүйгээр авч явдаг. \"Өв залгамжлах\" сонголт нь хуудасны түвшин (хэрэв set) эсвэл судалгааны түвшний тохиргоог хэрэгжүүлдэг.",
      page: "Сонгосон хуудасны төгсгөлд панелийг дахин байршуулах.",
      innerIndent: "Панелийн агуулга болон панелийн хайрцагны зүүн хилийн хооронд зай эсвэл зай нэмнэ.",
      startWithNewLine: "Өмнөх асуулт эсвэл панелтай нэг мөрт үзүүлэхээр сонгогдоогүй. Хэрэв панел нь таны маягт дахь анхны элемент бол тохиргоо хамаарахгүй.",
      state: "Сонголтоос: \"Өргөтгөсөн\" - хавтанг бүрэн харуулж, нурааж болно; \"Нурсан\" - панел нь зөвхөн гарчиг, тодорхойлолтыг харуулж, өргөтгөх боломжтой; \"Цоожтой\" - панелыг бүрэн харуулсан бөгөөд нурааж болохгүй.",
      width: "Панелийн өргөнийг ижил шугамаар бусад судалгааны элементүүдтэй тэнцүү тогтооно. CSS-ийн үнэт зүйлсийг (px, %, in, pt г.м) хүлээн зөвшөөрдөг.",
      showQuestionNumbers: "Энэ самбарт байрлуулсан асуултуудад дугаар өгнө.",
      effectiveColSpan: "Энэ панел grid загварт хэдэн багана багтаахыг тодорхойлно.",
      gridLayoutColumns: "Энэ хүснэгт нь панел доторх grid багана бүрийг тохируулах боломжийг олгодог. Энэ нь нэг мөр дэх элементүүдийн хамгийн их тооноос шалтгаалан багана бүрийн өргөнийн хувийг автоматаар тогтоодог. Хүснэгтийн байрлалыг тохируулахын тулд эдгээр үнэ цэнийг гараар тохируулж, багана бүр дэх бүх асуултын гарчгийн өргөнийг тодорхойл."
    },
    paneldynamic: {
      name: "Хариулагчдад харагдахгүй панелийн ID.",
      description: "Панелийн дэд гарчиг бичнэ.",
      visibleIf: "Ид шидийн wand зургыг ашиглан панелийн харагдах байдлыг тодорхойлох нөхцөлийн дүрмийг тогтоо.",
      enableIf: "Зөвхөн унших хэв маягийг хаах нөхцөлтэй дүрмийг тогтоохын тулд шидэт туузны зургыг ашигла.",
      requiredIf: "Наад зах нь нэг үүрээ засах асуулт хариулт байхгүй л бол судалгаа явуулахаас сэргийлдэг нөхцөлийн дүрмийг тогтоохын тулд шидэт туузны зургыг ашигла.",
      templateQuestionTitleLocation: "Энэ хэлэлцүүлгийн бүх асуултад хамаарна. Хэрэв та энэ тохиргоог хүчингүй болгохыг хүсвэл хувь хүний асуултуудад зориулсан нэрийн зохицуулах дүрмүүдийг тодорхойл. \"Өв залгамжлах\" сонголт нь хуудасны түвшин (хэрэв set) эсвэл судалгааны түвшний тохиргоог (\"Top\" нь default-аар) хэрэгжүүлдэг.",
      templateQuestionTitleWidth: "Асуултын гарчгийг асуултын хайрцгийн зүүн тийш байрлуулсан үед ижил өргөнийг тогтооно. CSS-ийн үнэ цэнийг (px, %, in, pt гэх мэт) хүлээн авна.",
      templateErrorLocation: "Алдааны мессежийн байршлыг хүчингүй оруулсан асуулттай холбон тогтооно. Аль нэгийг сонгоно уу: \"Топ\" - асуултын хайрцагны дээд хэсэгт алдаа текст байрлуулсан байна; \"Bottom\" - асуултын хайрцагны доод хэсэгт алдаа текст байрлуулна. \"Өв залгамжлах\" сонголт нь хуудасны түвшин (хэрэв set) эсвэл судалгааны түвшний тохиргоог (\"Top\" нь default-аар) хэрэгжүүлдэг.",
      errorLocation: "Хяналтын шатны бүх асуулттай холбогдуулан алдааны мессежийн байршлыг тогтооно. \"Өв залгамжлах\" сонголт нь хуудасны түвшин (хэрэв set) эсвэл судалгааны түвшний тохиргоог хэрэгжүүлдэг.",
      page: "Сонгосон хуудасны төгсгөлд панелийг дахин байршуулах.",
      innerIndent: "Панелийн агуулга болон панелийн хайрцагны зүүн хилийн хооронд зай эсвэл зай нэмнэ.",
      startWithNewLine: "Өмнөх асуулт эсвэл панелтай нэг мөрт үзүүлэхээр сонгогдоогүй. Хэрэв панел нь таны маягт дахь анхны элемент бол тохиргоо хамаарахгүй.",
      state: "Сонголтоос: \"Өргөтгөсөн\" - хавтанг бүрэн харуулж, нурааж болно; \"Нурсан\" - панел нь зөвхөн гарчиг, тодорхойлолтыг харуулж, өргөтгөх боломжтой; \"Цоожтой\" - панелыг бүрэн харуулсан бөгөөд нурааж болохгүй.",
      width: "Панелийн өргөнийг ижил шугамаар бусад судалгааны элементүүдтэй тэнцүү тогтооно. CSS-ийн үнэт зүйлсийг (px, %, in, pt г.м) хүлээн зөвшөөрдөг.",
      templateTitle: "Динамик панел цолны темплэйтэд бичнэ. Харагдах панелуудын дунд түүний дарааллыг {panelIndex} болон {visiblePanelIndex} -ийг ашиглана уу. Автомат дугаар нэмэхийн тулд эдгээр байрлагчдыг загварт оруул.",
      templateTabTitle: "Таб нэрний темплэйтэд бичнэ. {panelIndex} нь панелийн ерөнхий байрлал болон {visiblePanelIndex} -ийг ил харагдах панелуудын дунд эмх цэгцтэй байлгахад ашиглана. Автомат дугаар нэмэхийн тулд эдгээр байрлагчдыг загварт оруул.",
      tabTitlePlaceholder: "Таб нэрийн загвар утга учиртай үнэ цэнийг бий болгодоггүй үед хамаарах tab title-ийн уналтын текст.",
      templateVisibleIf: "Энэ тохиргоо нь динамик панелын доторх хувь хүний панелын харагдах байдлыг хянах боломжийг олгодог. '{panel}' байрлуулагчийг ашиглан одоогийн панелийг өөрийн илэрхийлэлд эш татна уу.",
      titleLocation: "Энэ тохиргоо нь энэ панел доторх бүх асуултаар автоматаар өвлөгддөг. Хэрэв та энэ тохиргоог хүчингүй болгохыг хүсвэл хувь хүний асуултуудад зориулсан нэрийн зохицуулах дүрмүүдийг тодорхойл. \"Өв залгамжлах\" сонголт нь хуудасны түвшин (хэрэв set) эсвэл судалгааны түвшний тохиргоог (\"Top\" нь default-аар) хэрэгжүүлдэг.",
      descriptionLocation: "\"Өв залгамжлах\" сонголт нь хуудасны түвшин (хэрэв set) эсвэл судалгааны түвшний тохиргоог (\"Under the panel title\" -ийг default-аар) хэрэгжүүлдэг.",
      newPanelPosition: "Шинээр нэмэгдсэн панелийн байр суурийг тодорхойлно. Default-ээр төгсгөл рүү шинэ панелуудыг нэмдэг. Одоогийн панел дараа нь шинэ панел оруулахын тулд \"Next\"-ийг сонго.",
      copyDefaultValueFromLastEntry: "Сүүлийн панелын хариултыг хувилж, дараагийн нэмэлт динамик хавтанд хуваарилна.",
      keyName: "Энэ асуултад хэрэглэгчээс панел бүрт өвөрмөц хариулт өгөхийг шаардахын тулд асуултын нэрийг эш тат."
    },
    copyDefaultValueFromLastEntry: "Сүүлийн мөрнөөс хариултуудыг хуулбарлаж, дараагийн нэмэлт динамик мөрөнд хуваарилна.",
    defaultValueExpression: "Энэ тохиргоо нь илэрхийллийн үндсэн дээр дефолт хариултын үнэ цэнийг даалгах боломжийг олгодог. Илэрхийлэл нь үндсэн тооцоо - '{q1_id} + {q2_id}', Бөүлийн илэрхийллүүд, тухайлбал '{age} > 60', функц: 'iif()', 'өнөөдөр()', 'мин()', 'мин()', 'max()', 'avg()', г.м. Энэ илэрхийлэлээр тодорхойлогддог үнэ цэнэ нь хариулагчийн гарын авлагын оролтоор давхардуулан авч болох анхны дефолтын үнэ цэнэ болж өгдөг.",
    resetValueIf: "\"Default value expression\" эсвэл \"Set value expression\" эсвэл \"Default answer\" value (хэрэв аль нэгийг нь тогтоосон бол) үнэ цэнэд үндэслэн хариулагчийн оруулсан хувь нэмрийг үнэ цэнэд хэзээ дахин тохируулахыг тодорхойлох нөхцөлтэй дүрмийг тогтоохын тулд шидэт wand зургыг ашигла.",
    setValueIf: "Ид шидийн wand зургыг ашиглан \"Set value expression\"-ийг хэзээ ажиллуулахыг тодорхойлох нөхцөлтэй дүрмийг тогтоож, үр дүнд хүрсэн үнэ цэнийг хариу болгон динамикаар даалга.",
    setValueExpression: "\"Set value if\" дүрмийн нөхцөл хангагдсан үед тогтоох үнэ цэнийг тодорхойлсон илэрхийллийг тодорхойл. Илэрхийлэл нь үндсэн тооцоо - '{q1_id} + {q2_id}', Бөүлийн илэрхийллүүд, тухайлбал '{age} > 60', функц: 'iif()', 'өнөөдөр()', 'мин()', 'мин()', 'max()', 'avg()', г.м. Энэ илэрхийлэлээр тогтоосон үнэ цэнийг хариулагчийн гарын авлагын оролтоор давхардуулан авч болно.",
    gridLayoutEnabled: "Survey Creator нь загварыг хянахын тулд хэлбэрийн элементүүдийн inline өргөнийг гараар тохируулах боломжийг олгодог. Хэрэв энэ нь хүссэн үр дүнг өгөхгүй бол баган дээр суурилсан системийг ашиглан элементүүдийг бүрдүүлдэг grid layout-ийг идэвхжүүлж болно. Загварын багануудыг тохируулахын тулд хуудас эсвэл панелийг сонгоод \"Асуултын тохиргоо\" → \"Grid columns\" хүснэгтийг ашиглана. Асуулт хэдэн багана багтаахыг тохируулахын тулд үүнийг сонгоод \"Layout\" → \"Column span\" талбарт хүссэн утгыг тохируул.",
    question: {
      name: "Асуултад хариулагчдад харагдахгүй асуултын ID.",
      description: "Асуултын дэд гарчиг бичнэ үү.",
      visibleIf: "Асуултын харагдах байдлыг тодорхойлох нөхцөлийн дүрмийг тогтоохын тулд шидэт туузны зургыг ашигла.",
      enableIf: "Асуултын зөвхөн унших хэв маягийг хаах нөхцөлтэй дүрмийг тогтоохын тулд шидэт туузны зургыг ашигла.",
      requiredIf: "Асуулт хариулт аваагүй л бол судалгааг урагшлуулах эсвэл ирүүлэхэд саад болох нөхцөлийн дүрмийг тогтоохын тулд шидэт туузны зургыг ашигла.",
      startWithNewLine: "Асуултыг өмнөх асуулт эсвэл панелтай нэг мөрт харуулахаар сонгогдоогүй. Асуулт нь таны маягт дахь анхны элемент бол тохиргоо хамаарахгүй.",
      page: "Асуултыг сонгосон хуудасны төгсгөлд буцааж тавих.",
      state: "Сонгох: \"Өргөтгөсөн\" - асуултын хайрцгийг бүрэн харуулсан бөгөөд нурж болно; \"Нурж унасан\" - асуултын хайрцаг нь зөвхөн гарчиг, дүрслэлийг харуулж, өргөтгөх боломжтой; \"Locked\" - асуултын хайрцгийг бүрэн харуулсан бөгөөд нурж болохгүй.",
      titleLocation: "Нэрийн зохицлын дүрмүүдийг панел, хуудас эсвэл судалгааны түвшин дээр тодорхойлсон байдаг. \"Өв залгамжлах\" сонголт нь ямар ч өндөр түвшний тохиргоог (хэрэв set) эсвэл судалгааны түвшний тохиргоог (\"Top\" нь default-аар) хэрэгжүүлдэг.",
      descriptionLocation: "\"Өв залгамж\" сонголт нь судалгааны түвшний тохиргоог хэрэгжүүлдэг (\"Асуултын гарчиг доор\" гэсэн сонголтыг сонголтоор).",
      errorLocation: "Асуулттай холбоотой алдааны мессежийн байршлыг хүчингүй оруулсан байдлаар тогтооно. Аль нэгийг сонгоно уу: \"Топ\" - асуултын хайрцагны дээд хэсэгт алдаа текст байрлуулсан байна; \"Bottom\" - асуултын хайрцагны доод хэсэгт алдаа текст байрлуулна. \"Өв залгамж\" сонголт нь судалгааны түвшний тохиргоог (\"Top\" by default) хэрэгжүүлдэг.",
      indent: "Асуултын агуулга болон асуултын хайрцагны зүүн хил хоёрын хооронд зай эсвэл зай нэмнэ.",
      width: "Асуултын өргөнийг нэг мөрт бусад судалгааны элементүүдтэй тэнцүү байдлаар тогтооно. CSS-ийн үнэт зүйлсийг (px, %, in, pt г.м) хүлээн зөвшөөрдөг.",
      surveyvalidator: {
        expression: "Асуултын баталгаажуулалтын дүрмийг тогтоохын тулд шидэт туузны зургыг ашигла."
      },
      textUpdateMode: "Сонгоно уу: \"Алдагдсан фокус дээр\" - оролтын талбар анхаарлаа алдсан үед үнэ цэнэ нь шинэчлэгддэг; \"Цахимаар бичих\" - хэрэглэгчид бичихийн хэрээр үнэ цэнэ нь бодит цаг хугацаанд шинэчлэгддэг. \"Өв залгамж\" сонголт нь судалгааны түвшний тохиргоог (\"Алдагдсан фокус дээр\" дефолтоор) хэрэгжүүлдэг.",
      url: "Та ямар ч вэб үйлчилгээг олон сонголттой асуултуудад мэдээллийн эх сурвалж болгон ашиглаж болно. Сонголтын үнэт зүйлсийг хүн амлахын тулд өгөгдөл өгөх үйлчилгээний URL-ийг оруулна уу.",
      searchMode: "Дуслын жагсаалтыг шүүлт хийхэд ашигладаг харьцуулах мэс засал.",
      textWrapEnabled: "Сонголтын сонголтуудын урт текстүүд нь дусал цэсний дотор багтахын тулд автоматаар шугамын завсар үүсгэх болно. Хэрэв та бичвэрүүдийг хайчлахыг хүсвэл сонгогдоогүй.",
      effectiveColSpan: "Энэ асуулт хүснэгтийн загварт хэдэн багана багтаахыг тодорхойлно."
    },
    signaturepad: {
      signatureWidth: "Үзүүлсэн гарын үсэг зурсан хэсгийн өргөнийг болон үүний үр дүнд бий болсон зургийг тогтоо.",
      signatureHeight: "Үзүүлсэн гарын үсэг зурсан хэсгийн өндрийг болон үүний үр дүнд бий болсон зургийг тогтооно.",
      signatureAutoScaleEnabled: "Хэрэв та гарын үсэг зурах талбайгаа асуултын хайрцаг доторх бүх боломжит зайг бөглөж, стандарт 3:2 талын харьцааг хадгалахыг хүсэж байвал сонго. Custom өргөн, өндөр үнэ цэнийг тогтоох үед тохиргоо нь эдгээр хэмжээсийн тал харьцааг хадгална."
    },
    file: {
      imageHeight: "Судалгааны үр дүнгээр дүрсний өндрийг тохируулна.",
      imageWidth: "Судалгааны үр дүн дэх зургийн өргөнийг тохируулна.",
      allowImagesPreview: "Боломжтой бол татаж авсан файлуудад зориулсан эрхий хурууны урьдчилсан үзүүлэлтийг үзүүлнэ. Оронд нь файлын зургуудыг үзүүлэхийг хүсвэл сонгогдоогүй."
    },
    image: {
      contentMode: "\"Авто\" сонголт нь эх сурвалж URL-д суурилсан зураг, видео, эсвэл YouTube - харуулах тохиромжтой хэв маягийг автоматаар тодорхойлдог."
    },
    imagepicker: {
      imageHeight: "Хамгийн бага болон хамгийн их өндөр үнэ цэнийг давхардна.",
      imageWidth: "Хамгийн бага, хамгийн их өргөний үнэ цэнийг давхардалд оруулах.",
      choices: "\"Үнэ цэнэ\" гэж нөхцөлийн дүрэмд хэрэглэгддэг эд зүйлийн ID-ээр үйлчилдэг; \"Текст\" гэж хариулагчдад тавигддаг.",
      contentMode: "Хэвлэл мэдээллийн хэрэгслийн сонгогчийн агуулгын хэв маягийг тогтоохын тулд \"Image\" болон \"Video\" хоёрын аль нэгийг сонго. Хэрэв \"Зураг\" гэж сонгосон бол өгөгдсөн бүх хувилбарууд нь дараах форматаар зургийн файлууд болохыг анхаарна уу: JPEG, GIF, PNG, APNG, SVG, BMP, ICO. Үүнтэй адилаар \"Video\" нь сонгогдвол бүх сонголт нь дараах форматаар видео файлуудын шууд холбоосууд болох MP4, MOV, WMV, FLV, AVI, MKV гэсэн форматаар байгаа эсэхийг баталгаажуулаарай. YouTube-ийн холбоосууд видео хувилбараар дэмжигдээгүйг анхаарна уу."
    },
    text: {
      size: "Энэ тохиргоо нь зөвхөн оролтын талбарыг дахин тохируулдаг бөгөөд асуултын хайрцагны өргөнд нөлөөлдөггүй. Хүлээн зөвшөөрөгдсөн оролтын уртыг хязгаарлахын тулд <b>Validation→ Maximum character limit</b> руу орно уу."
    },
    comment: {
      rows: "Оролтын талбар дахь харуулсан мөрүүдийн тоог тогтооно. Хэрэв оролт нь илүү олон мөртэй бол хуйлмал тавиур гарч ирнэ."
    },
    // survey templates
    survey: {
      readOnly: "Хэрэв та хариулагчдыг таны судалгааг бөглөхөд саад болохыг хүсвэл сонго.",
      progressBarLocation: "Явцын барын байршлыг тогтооно. \"Auto\" value нь судалгааны гарчгийн дээр эсвэл доод тал дахь явцын барыг харуулна."
    },
    matrixdropdowncolumn: {
      name: "Хариулагчдад харагдахгүй байгаа баганын ID.",
      isUnique: "Баганыг авах боломжтой бол асуултад хариулагч нь энэ баганан доторх асуулт бүрд өвөрмөц хариулт өгөх шаардлагатай.",
      rows: "Оролтын талбар дахь харуулсан мөрүүдийн тоог тогтооно. Хэрэв оролт нь илүү олон мөртэй бол хуйлмал тавиур гарч ирнэ.",
      visibleIf: "Ид шидийн wand icon-ийг ашиглан баганын харагдах байдлыг тодорхойлох нөхцөлтэй дүрмийг тогтоо.",
      enableIf: "Шидэт wand зургыг ашиглан баганын зөвхөн унших хэв маягийг хаах нөхцөлтэй дүрмийг тогтоо.",
      requiredIf: "Наад зах нь нэг үүрээ засах асуулт хариулт байхгүй л бол судалгаа явуулахаас сэргийлдэг нөхцөлийн дүрмийг тогтоохын тулд шидэт туузны зургыг ашигла.",
      showInMultipleColumns: "Сонгогдсон тохиолдолд сонголт бүрд зориулж багана үүсгэнэ.",
      colCount: "Сонголт хийх сонголтуудыг олон баганатай загвараар зохион байгуулна. 0-д тавихад сонголтуудыг нэг мөр харуулдаг. -1-д тавихад бодит үнэ цэнэ нь эцэг эхийн матрицын \"Nested column count\" өмчөөс өвлөгддөг."
    },
    caseInsensitive: "Тогтмол илэрхийлэлд байгаа uppercase болон lowercase үсгийг эн тэнцүү гэж үзэх ёстой эсэхийг сонгоно уу.",
    widthMode: "Сонгоно уу: \"Статик\" - тогтмол өргөнийг тогтоох; \"Responsive\" - судалгааг дэлгэцийн бүрэн өргөнийг эзэлдэг болгодог; \"Авто\" - ашигласан асуултын төрлөөс хамааран аль нэгийг нь хэрэглэнэ.",
    cookieName: "Хэрэглэгч нэг судалгааг хоёр удаа бөглөхөөс Күүки сэргийлнэ.",
    logo: "Зургийн холбоосыг (хэмжээ хязгаар байхгүй) эсвэл фолдерын icon дарж компьютерээсээ файлыг (64KB хүртэл) харна уу.",
    logoWidth: "CSS нэгж (px, %, in, pt, гэх мэт) дээр логоны өргөнийг тогтооно.",
    logoHeight: "CSS нэгж (px, %, in, pt г.м) дээр логоны өндрийг тогтооно.",
    logoFit: "Сонгоно уу: \"None\" - зураг анхны хэмжээгээ хадгалдаг; \"Агуулах\" - дүрсийг тал харьцаагаа хадгалахын зэрэгцээ тохируулахын тулд дахин тохируулдаг; \"Cover\" - дүрс нь тал харьцаагаа хадгалахын зэрэгцээ хайрцгийг бүхэлд нь дүүргэдэг; \"Fill\" - дүрс нь тал харьцаагаа хадгалахгүйгээр хайрцгийг дүүргэхийн тулд сунаж тогтсон.",
    autoAdvanceEnabled: "Оролцогч одоогийн хуудсан дээрх бүх асуултад хариулсны дараа судалгааг дараагийн хуудас руу автоматаар шилжүүлэхийг хүсч байгаа эсэхээ сонго. Хуудасны хамгийн сүүлийн асуулт нээлттэй эсвэл олон хариулт өгөх боломж олгодог бол энэ онцлог хэрэгжихгүй.",
    autoAdvanceAllowComplete: "Асуултад хариулсан хүн бүх асуултанд хариулсны дараа судалгааг автоматаар дуусгахыг хүсвэл сонго.",
    showNavigationButtons: "Хуудас дээр навигацийн товчны харагдах байдал, байршлыг тогтооно.",
    navigationButtonsLocation: "Хуудас дээрх навигацийн товчлууруудын байрлалыг тогтооно.",
    showPreviewBeforeComplete: "Зөвхөн бүх асуултаар эсвэл хариулт бүхий урьдчилан харах хуудсыг боломжтой болго.",
    questionTitleLocation: "Судалгааны бүх асуултад хамаарна. Энэ тохиргоог доод түвшний нэрийн зохицуулах дүрмээр давамгайлах боломжтой: panel, хуудас, эсвэл асуулт. Доод түвшний тохиргоо нь илүү өндөр түвшинд байгаа хүмүүсийг хүчингүй болгоно.",
    requiredMark: "Хариу шаардлагатайг заасан бэлгэдэл буюу бэлгэ тэмдгийн дараалал.",
    questionStartIndex: "Дугаарлахыг хүссэн дугаар эсвэл захидлаа оруул.",
    questionErrorLocation: "Асуулттай холбоотой алдааны мессежийн байршлыг хүчингүй оруулсан байдлаар тогтооно. Аль нэгийг сонгоно уу: \"Топ\" - асуултын хайрцагны дээд хэсэгт алдаа текст байрлуулсан байна; \"Bottom\" - асуултын хайрцагны доод хэсэгт алдаа текст байрлуулна.",
    autoFocusFirstQuestion: "Текст оруулахад бэлэн болсон хуудас бүр дээрх эхний оролтын талбарыг хүсвэл сонгоно уу.",
    questionOrder: "Асуултуудын анхны дарааллыг хадгалах эсвэл санамсаргүйгээр авч явдаг. Энэ тохиргооны үр нөлөө нь зөвхөн Preview таб-д харагдана.",
    maxTextLength: "Зөвхөн текст оруулах асуултуудад зориулна.",
    maxCommentLength: "Асуулт хариултын хувьд зөвхөн.",
    commentAreaRows: "Асуултын тайлбар бичвэрийн хэсэгт харагдах мөрийн тоог тогтооно. Хэрвээ оролт илүү олон мөр эзэлбэл гүйлгэх бар гарч ирнэ.",
    autoGrowComment: "Асуулт хариулт болон Урт Текст асуултыг орсон текст урт дээр үндэслэн өндрөөс автоматаар өсгөхийг хүсвэл сонгоно уу.",
    allowResizeComment: "Асуулт хариулт болон Урт текстийн асуултуудад зөвхөн.",
    calculatedValues: "Үйлчилгээний хувьсагчид нь форм тооцоололд хэрэглэгддэг дундын буюу туслах хувьсагчид болж үйлчилдэг. Тэд хариулагчийн оруулсан хувь нэмрийг эх сурвалжийн үнэт зүйлс гэж үздэг. Custom хувьсагч бүр өвөрмөц нэртэй, дээр нь суурилсан илэрхийлэлтэй байдаг.",
    includeIntoResult: "Тухайн илэрхийллийн тооцоолсон үнэ цэнийг судалгааны үр дүнгийн хамт хадгалахыг хүсвэл сонгоорой.",
    triggers: "Триггер гэдэг нь илэрхийлэлд тулгуурласан үйл явдал буюу нөхцөл байдлыг хэлж байгаа юм. Илэрхийлэлийг \"үнэн\" гэж үнэлсний дараа триггер үйлдэл гаргадаг. Ийм үйлдэл нь үүнд нөлөөлдөг байны асуултыг сонголтоор тавьж болно.",
    clearInvisibleValues: "Нөхцөл байдлын логикоор нуусан асуултуудын үнэ цэнийг тодорхой болгох уу, хэзээ хийх үү гэдгийг сонго.",
    textUpdateMode: "Сонгоно уу: \"Алдагдсан фокус дээр\" - оролтын талбар анхаарлаа алдсан үед үнэ цэнэ нь шинэчлэгддэг; \"Цахимаар бичих\" - хэрэглэгчид бичихийн хэрээр үнэ цэнэ нь бодит цаг хугацаанд шинэчлэгддэг.",
    columns: "Зүүн үнэ цэнэ нь нөхцөлийн дүрэмд хэрэглэгддэг баганын ID болж үйлчилдэг бөгөөд зөв үнэ цэнийг хариулагчдад үзүүлдэг.",
    rows: "Зүүн үнэ цэнэ нь нөхцөлийн дүрэмд хэрэглэгддэг мөрийн ID болж үйлчилдэг, зөв үнэ цэнийг хариулагчдад үзүүлдэг.",
    columnMinWidth: "CSS-ийн үнэт зүйлсийг (px, %, in, pt г.м) хүлээн зөвшөөрдөг.",
    rowTitleWidth: "CSS-ийн үнэт зүйлсийг (px, %, in, pt г.м) хүлээн зөвшөөрдөг.",
    totalText: "Хамгийн багадаа нэг багана Нэмэх төрлийн эвсэл нэмэх үйлдэлтэй үед л харагдах боломжтой.",
    cellErrorLocation: "Хүчингүй оруулсан эстэй холбоотой алдааны мессежийн байршлыг тогтооно. \"Өв залгамж\" сонголт нь \"Error message alignment\" өмчийн тохиргоог хэрэгжүүлдэг.",
    detailErrorLocation: "Нарийвчилсан хэсгүүдэд байрласан асуултуудын алдааны мессежүүдийн байршлыг тохируулна. \"Inherit\" сонголт нь \"Error message alignment\" шинж чанарын тохиргоог хэрэглэнэ.",
    keyDuplicationError: "\"Хуулбарласан хариу арга хэмжээ авахаас урьдчилан сэргийлье\" өмчийг боломжтой болгоход хуулбарлан оруулахыг оролдсон хариулагч дараах алдааны мэдээг хүлээн авна.",
    totalExpression: "Илэрхийллийн үндсэн дээр нийт үнэт зүйлсийг тооцох боломжийг танд олгож байна. Илэрхийлэл нь үндсэн тооцоо ('{q1_id} + {q2_id}'), Бөүлийн илэрхийллүүд ('{нас} > 60') функцууд ('iif()', 'өнөөдөр()', 'мин()', 'мин()', 'max()', 'avg()', г.м.",
    confirmDelete: "Дарааллыг арилгахыг батлахыг хүссэн өдөөлтийг өдөөв.",
    keyName: "Хэрэв өгөгдсөн багана адил утгатай бол санал асуулга \"Давтагдсан утга\" гэсэн алдааг харуулна.",
    description: "Дэд гарчиг бичнэ.",
    locale: "Судалгаагаа хийж эхлэх хэл сонго. Орчуулга нэмэхийн тулд шинэ хэл рүү шилжиж, эх бичвэрийг энд эсвэл Translations tab-д орчуулна.",
    detailPanelMode: "Нарийвчилсан хэсгийн байршлыг дараалалтай холбон тогтооно. Сонголтоос: \"Үгүй\" - ямар ч өргөтгөл нэмэгдсэнгүй; \"Мөрийн доор\" - матрицын мөр бүрийн доор эгнээний өргөтгөл байрлуулна; \"Мөрийн доор зөвхөн нэг эгнээний өргөтгөлийг үзүүл\" - зөвхөн нэг эгнээний дор өргөтгөл үзүүлдэг, үлдсэн эгнээний өргөтгөлүүд нь нурдаг.",
    imageFit: "Сонгоно уу: \"None\" - зураг анхны хэмжээгээ хадгалдаг; \"Агуулах\" - дүрсийг тал харьцаагаа хадгалахын зэрэгцээ тохируулахын тулд дахин тохируулдаг; \"Cover\" - дүрс нь тал харьцаагаа хадгалахын зэрэгцээ хайрцгийг бүхэлд нь дүүргэдэг; \"Fill\" - дүрс нь тал харьцаагаа хадгалахгүйгээр хайрцгийг дүүргэхийн тулд сунаж тогтсон.",
    autoGrow: "Өгөгдлийг оруулж байгаа үед оролтын талбайн өндрийг аажмаар нэмэгдүүлдэг. \"Input талбарын өндрийг (in lines)\" тохиргоог давхардна.",
    allowResize: "Resize бариул (эсвэл бариул) буланд гарч, оролтын талбарын хэмжээг өөрчлөхийн тулд чирэгдэж болно.",
    timeLimit: "Цаг хугацааны интервал секундын дотор. Үүний дараа судалгаа автоматаар \"Thank You\" хуудас руу орж байна.",
    timeLimitPerPage: "Судалгааны автоматаар дараагийн хуудас руу урагшлах секундын дотор цаг хугацаа.",
    validateVisitedEmptyFields: "Хэрэглэгч хоосон оролтын талбар дээр төвлөрч, дараа нь ямар нэгэн өөрчлөлт хийхгүйгээр орхих үед баталгаажуулалтыг өдөөх боломжийг энэ боломжийг олго.",
    page: {
      name: "Оролцогчдод харагдахгүй хуудасны ID.",
      description: "Хуудасны дэд гарчиг гэж бич.",
      navigationTitle: "Progress bar эсвэл table of contents (TOC) дахь навигацийн товчлуур дээр харагдах тайлбар. Энэ талбарыг хоосон үлдээвэл навигацийн товчлуур хуудасны гарчиг эсвэл хуудасны нэрийг ашиглана. Progress bar эсвэл TOC-г идэвхжүүлэхийн тулд \"Survey\" → \"Navigation\" руу орно.",
      timeLimit: "Судалгааны автоматаар дараагийн хуудас руу урагшлах секундын дотор цаг хугацаа.",
      visibleIf: "Илбийн wand icon-ийг ашиглан хуудасны харагдах байдлыг тодорхойлох нөхцөлтэй дүрэм тогтооно.",
      enableIf: "Зөвхөн хуудсанд зориулсан унших хэв маягийг хаах нөхцөлтэй дүрмийг тогтоохын тулд шидэт wand зургыг ашигла.",
      requiredIf: "Наад зах нь нэг үүрээ засах асуулт хариулт байхгүй л бол судалгаа явуулахаас сэргийлдэг нөхцөлийн дүрмийг тогтоохын тулд шидэт туузны зургыг ашигла.",
      questionTitleLocation: "Энэ хуудсан дахь бүх асуултад хамаарна. Хэрэв та энэ тохиргоог хүчингүй болгохыг хүсвэл хувь хүний асуулт эсвэл панелуудын нэрийн зохицуулах дүрмүүдийг тодорхойл. \"Өв залгамж\" сонголт нь судалгааны түвшний тохиргоог (\"Top\" by default) хэрэгжүүлдэг.",
      questionTitleWidth: "Асуултын хайрцгуудынхаа зүүн талд эгнэн зогсож байх үед асуултын нэрний тогтмол өргөнийг тогтоо. CSS-ийн үнэт зүйлсийг (px, %, in, pt г.м) хүлээн зөвшөөрдөг.",
      questionErrorLocation: "Асуулттай холбоотой алдааны мессежийн байршлыг хүчингүй оруулсан байдлаар тогтооно. Аль нэгийг сонгоно уу: \"Топ\" - асуултын хайрцагны дээд хэсэгт алдаа текст байрлуулсан байна; \"Bottom\" - асуултын хайрцагны доод хэсэгт алдаа текст байрлуулна. \"Өв залгамж\" сонголт нь судалгааны түвшний тохиргоог (\"Top\" by default) хэрэгжүүлдэг.",
      questionOrder: "Асуултуудын анхны дарааллыг хадгалах эсвэл санамсаргүйгээр авч явдаг. \"Өв залгамж\" сонголт нь судалгааны түвшний тохиргоог (\"Оригинал\" дефолтоор) хэрэгжүүлдэг. Энэ тохиргооны үр нөлөө нь зөвхөн Preview таб-д харагдана.",
      showNavigationButtons: "Хуудсан дээр навигацийн товчны харагдах байдлыг тогтоо. \"Өв залгамжлах\" хувилбар нь \"Үзэгдэх\" гэсэн сонголт бүхий судалгааны түвшний тохиргоог хэрэгжүүлдэг.",
      gridLayoutColumns: "Энэ хүснэгт нь хуудас дээрх grid багана бүрийг тохируулах боломжийг олгодог. Энэ нь нэг мөр дэх элементүүдийн хамгийн их тооноос шалтгаалан багана бүрийн өргөнийн хувийг автоматаар тогтоодог. Хүснэгтийн байрлалыг тохируулахын тулд эдгээр үнэ цэнийг гараар тохируулж, багана бүр дэх бүх асуултын гарчгийн өргөнийг тодорхойл."
    },
    timerLocation: "Хуудас дээрх цаг хэмжигчийн байрлалыг тогтооно.",
    panelsState: "Сонгоно уу: \"Locked\" - хэрэглэгчид панелуудыг өргөтгөх, нураах боломжгүй; \"Бүх нуралт\" - бүх панел нурсан байдлаас эхэлнэ; \"Бүх хүрээг өргөтгөнө\" - бүх панелууд өргөтгөсөн байдлаас эхэлнэ; \"First expanded\" - зөвхөн эхний панел нь эхэндээ өргөжсөн.",
    imageLinkName: "Сонгосон жагсаалтанд харуулахыг хүссэн зураг эсвэл видео файл URL-уудыг агуулсан олон тооны эд зүйлсийн дотор хуваалцсан өмчийн нэрийг оруулна уу.",
    choices: "Зүүн үнэ цэнэ нь нөхцөлийн дүрэмд хэрэглэгддэг зүйл ID, зөв үнэ цэнийг хариулагчдад үзүүлдэг.",
    title: "Хэрэглэгчдэд тохиромжтой нэр бичиж харуулах.",
    waitForUpload: "Файлуудыг татаж авах хүртэл хэрэглэгчид судалгааг хийж дуусгахгүй байхыг анхаарна.",
    minWidth: "CSS-ийн үнэт зүйлсийг (px, %, in, pt г.м) хүлээн зөвшөөрдөг.",
    maxWidth: "CSS-ийн үнэт зүйлсийг (px, %, in, pt г.м) хүлээн зөвшөөрдөг.",
    width: "CSS-ийн үнэт зүйлсийг (px, %, in, pt г.м) хүлээн зөвшөөрдөг.",
    valueName: "Хэрэв энэ талбарын утгыг оруулаагүй бол хариулт нь автоматаар Нэр талбарт хадгална.",
    defaultDisplayValue: "HTML асуулт болон асуултын үнэ хоосон үед судалгааны элементүүдийн динамик гарчиг болон тайлбарт харагдах утга.",
    useDisplayValuesInDynamicTexts: "Ганц болон олон сонголттой асуултын төрлүүдэд сонголт бүр ID болон харуулах үнэ цэнэтэй байдаг. Энэ тохиргоо нь сонгогдсон тохиолдолд HTML асуулт болон динамик гарчиг, судалгааны элементүүдийн тодорхойлолтод ID үнэ цэнийн оронд харуулах үнэ цэнийг харуулдаг.",
    clearIfInvisible: "Нөхцөл байдлын логикоор нуусан үнэт зүйлсийг тодорхой болгох уу, хэзээ хийх вэ гэдгийг сонго. \"Өв залгамж\" сонголт нь судалгааны түвшний тохиргоог (\"Upon survey completion\" -ийг дефолтоор) хэрэгжүүлдэг.",
    choicesFromQuestionMode: "Сонгоно уу: \"Бүгд\" - сонгосон асуултаас сонголт хийх бүх сонголтыг хуулбарласан; \"Сонгосон\" - динамикаар зөвхөн сонгосон сонголтын хувилбаруудыг хуулбарласан; \"Сонгогдоогүй\" - динамикаар зөвхөн сонгогдоогүй сонголтыг хувилдаг. \"None\" болон \"Бусад\" сонголтууд нь эх сурвалжийн асуулгад боломжтой бол default-ээр хуулагддаг.",
    choiceValuesFromQuestion: "Нэг болон олон сонголттой асуултын төрлүүдэд сонголт бүр ID болон display value-тэй байдаг. Энэ тохиргоо нь ямар матрицын багана эсвэл панелийн асуулт ID-г өгөхийг тодорхойлдог.",
    choiceTextsFromQuestion: "Нэг болон олон сонголттой асуултын төрлүүдэд сонголт бүр ID болон display value-тэй байдаг. Энэ тохиргоо нь ямар матрицын багана эсвэл панелийн асуулт үзүүлбэрийн текстийг хангахыг тодорхойлдог.",
    allowCustomChoices: "Хэрэв хүссэн хувилбар нь доош хаягдалд байхгүй бол оролцогчдод өөрсдийн сонголтыг нэмж оруулах боломжийг олго. Custom сонголтууд нь тухайн браузерын хуралдааны туршид зөвхөн түр хугацаагаар хадгалагдах болно.",
    showOtherItem: "Сонгогдсон тохиолдолд хэрэглэгчид тусад нь тайлбарын хайрцагт нэмэлт оруулах боломжтой.",
    separateSpecialChoices: "Тусгай сонголт бүрийг (\"None\", \"Other\", \"Select All\") шинэ мөр дээр, бүр олон баганатай загварыг ашиглахдаа ч үзүүлдэг.",
    path: "Зорилтот олон тооны объект байрладаг үйлчилгээний мэдээллийн сан доторх байршлыг тодорхойл. URL аль хэдийн багц руу зааж байгаа бол хоосон орхи.",
    choicesbyurl: {
      valueName: " "
    },
    titleName: "Сонголтын жагсаалтад харуулахыг хүссэн үнэт зүйлсээ агуулсан олон тооны эд зүйлсийн дотор дүрэмт өмчийн нэрийг оруулна уу.",
    allowEmptyResponse: "Хоосон хариу эсвэл багцыг үйлчлэлд буцааж өгөхийг сонго.",
    choicesVisibleIf: "Бүх сонголтын харагдах байдлыг тодорхойлох нөхцөлтэй дүрмийг тогтоохын тулд шидэт wand зургыг ашиглана уу.",
    rateValues: "Зүүн үнэ цэнэ нь нөхцөлийн дүрэмд хэрэглэгддэг зүйл ID, зөв үнэ цэнийг хариулагчдад үзүүлдэг.",
    rating: {
      displayMode: "\"Auto\" нь боломжит өргөн дээр суурилсан \"Buttons\" болон \"Dropdown\" загваруудын хооронд сонголт хийнэ. Өргөн нь товчлууруудыг харуулахад хангалтгүй үед асуулт нь дусал дуслыг харуулдаг."
    },
    valuePropertyName: "Өөр өөр форматаар үр дүн гаргадаг асуултуудыг холбох боломжийг танд олгож байна. Ийм асуултуудыг join identifier ашиглан холбох үед энэ хуваалцсан өмч хөрөнгийн дэлгүүрүүд нь сонгосон асуултын үнэ цэнийг хадгалдаг.",
    searchEnabled: "Хэрэглэгчийн оролтын талбарт бичиж байгаа хайлтын query-тэй тохируулахын тулд дусал цэсний агуулгыг шинэчлэхийг хүсвэл сонгоно уу.",
    valueTrue: "Асуултад хариулсан хүмүүс эерэг хариулт өгөхөд судалгааны үр дүнг хадгалах нь үнэ цэнэтэй.",
    valueFalse: "Судалгаанд оролцогчдын сөрөг хариулт өгөхөд судалгааны үр дүнг хадгалах үнэ цэнэ.",
    showPreview: "Preview зургийг давхардуулдаг тул энэ сонголтыг хүчингүй болгохыг санал болгодоггүй бөгөөд хэрэглэгчид файлуудыг татаж авсан эсэхийг ойлгоход хэцүү болгодог.",
    needConfirmRemoveFile: "Файлын устгалыг батлахыг хүссэн өдөөлтийг өдөөж байна.",
    selectToRankEnabled: "Зөвхөн сонгосон сонголтуудыг зэрэгцүүлэх боломжийг олгоно. Хэрэглэгчид сонгосон зүйлсийг сонгосон жагсаалтаас чирч, зэрэглэлийн бүс дотор тушаана.",
    dataList: "Санал болгох сонголтуудын жагсаалтыг оруулах үед хариулагчид санал болгох болно.",
    inputSize: "Тохиргоо нь зөвхөн оролтын талбаруудыг дахин тохируулдаг бөгөөд асуултын хайрцагны өргөнд нөлөөлдөггүй.",
    itemTitleWidth: "Бүх барааны шошгоны өргөнийг тогтвортой болгоно. CSS-ийн үнэ цэнийг (px, %, in, pt гэх мэт) хүлээн авна.",
    inputTextAlignment: "Талбар доторх оролтын үнэ цэнийг хэрхэн уялдуулахыг сонго. \"Авто\" гэсэн дефолт тохиргоо нь валют эсвэл тоон маск хэрэглэх бол оролтын үнэ цэнийг баруун тийш, хэрэв үгүй бол зүүн тийш нь уялдуулна.",
    altText: "Хэрэглэгчийн төхөөрөмж дээр болон хүртээмжийн зорилгоор дүрсийг харуулах боломжгүй үед орлуулагчаар үйлчилнэ.",
    rateColorMode: "Rating icon төрлийн \"Smileys\" гэж тогтооход сонгосон эможигийн өнгийг тодорхойлно. Аль нэгийг нь сонгоно уу: \"Default\" - сонгосон эможи нь стандарт судалгааны өнгөөр гарч ирдэг; \"Scale\" - сонгосон эможи нь үнэлгээний хэмжүүрээс өнгийг өвлөн авдаг.",
    expression: {
      name: "Хариулагчдад харагдахгүй илэрхийлэл ID.",
      description: "Өгүүлбэрийн дэд гарчиг бичнэ.",
      expression: "Илэрхийлэл нь үндсэн тооцоо ('{q1_id} + {q2_id}'), нөхцөл ('{age} > 60'' болон функцууд ('iif()', 'өнөөдөр()', 'мин()', 'мин()', 'max()', 'avg()', г.м."
    },
    storeOthersAsComment: "\"Бусад\" сонголтын үнэ цэнийг судалгааны үр дүнд тусад нь өмч болгон хадгалахыг сонго.",
    format: "{0} нь тухайн утгын жишээ болно.",
    acceptedTypes: "Атрибутын талаар нэмэлт мэдээллийг үзэхийн тулд [accept](https://www.w3schools.com/tags/att_input_accept.asp)-лүү хандана уу.",
    columnColCount: "Зөвхөн олон сонголттой эсвэл Radiogroup -д ашиглана.",
    autocomplete: "Аттрибутын талаар дэлгэрэнгүй мэдээллийг [autocomplete](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete)-ээс авна уу .",
    filePlaceholder: "\"Эх сурвалжийн төрөл\" нь \"Орон нутгийн файлууд\" эсвэл камер байхгүй үед хамаарна",
    photoPlaceholder: "\"Эх сурвалжийн төрөл\" \"Камер\" байхад хамаарна.",
    fileOrPhotoPlaceholder: "\"Эх сурвалжийн төрөл\" нь \"Орон нутгийн файлууд буюу камер\" байхад хамаарна.",
    colCount: "Сонголт хийх сонголтуудыг олон баганатай загвараар зохион байгуулна. 0-д тавихад сонголтуудыг нэг мөр харуулдаг.",
    masksettings: {
      saveMaskedValue: "Асуултын үнэ цэнийг судалгааны үр дүнд хэрэгжүүлсэн багаар хадгалахыг хүсэж байгаа эсэхээ сонго."
    },
    patternmask: {
      pattern: "Загвар нь уянгын шууд болон дараах байрлагчийг агуулж болно: '9' - тоон хувьд; 'a' - дээд буюу доод талын үсгийн хувьд; '#' - цифр эсвэл дээд, эсвэл доод кейс үсгийн хувьд. Дүрээс зугтахын тулд backslash '\\' ашигла."
    },
    datetimemask: {
      pattern: "Загвар нь тусгаарлагч үсэг болон дараах байрлагчуудыг агуулж болно:<br>'m' - Сарын дугаар.<br>'мм' - Сарын дугаар, ганц цифрээр үнэ цэнэтэй тэргүүлэх нөлөө бүхий. <br>''д'' - Сарын нэг өдөр. <br>'dd' - Ганц цифрээр үнэ цэнэд тэргүүлэх нөлөө бүхий сарын өдөр. <br>'yy' - Жилийн сүүлийн хоёр цифр. <br>''yyyy'' - Дөрвөн цифр бүхий жил. <br>'H' - 24 цагийн форматаар цаг. <br>'HH' - 24 цагийн форматаар хэдэн цаг, ганц цифрээр үнэ цэнэтэй тэргүүлэх нөлөө. <br>'h' - 12 цагийн форматаар цаг. <br>'hh' - 12 цагийн форматаар хэдэн цаг, ганц цифрээр үнэ цэнэд тэргүүлэх нөлөөгүй. <br>'ММ' - Минут. <br>'ss' - Секунд. <br>'ТТ' - Дээд тохиолдолд 12 цагийн цаг (АМ/ЦАГ). <br>'tt' - доод тохиолдолд 12 цагийн цаг (ам/цаг) цаг."
    },
    numericmask: {
      decimalSeparator: "Жижиг хэсгийг үзүүлсэн дугаарын интежер хэсгээс салгахад ашигладаг бэлгэдэл.",
      thousandsSeparator: "Том тооны тоонуудыг 3 бүлэг болгон салгахад хэрэглэгддэг бэлгэдэл.",
      precision: "Үзүүлсэн дугаарын хувьд decimal цэгийн дараа хэдэн цифрийг хадгалахыг хязгаарлана."
    },
    currencymask: {
      prefix: "Үнэ цэнийн өмнө үзүүлэх нэг эсвэл хэд хэдэн бэлгэдлүүдийг.",
      suffix: "Үнэ цэнийн дараа үзүүлэх нэг эсвэл хэд хэдэн бэлгэдлүүдийг."
    },
    theme: {
      isPanelless: "Энэ тохиргоо нь зөвхөн панелын гаднах асуултуудад хамаарна.",
      primaryColor: "Судалгааны гол элементүүдийг тодотгох нэмэлт өнгө тогтооно.",
      panelBackgroundTransparency: "Судалгааны нөхцөл байдлыг харьцуулан панел, асуултын хайрцгуудын ил тод байдлыг тохируулна.",
      questionBackgroundTransparency: "Судалгааны нөхцөлтэй харьцуулахад оруулах элементүүдийн ил тод байдлыг тохируулна.",
      cornerRadius: "Бүх тэгш өнцөгт элементүүдэд булангийн радиусыг тогтооно. Оролтын элементүүд эсвэл панел, асуултын хайрцгуудад зориулсан хувь хүний булангийн радиус үнэт зүйлсийг тогтоохыг хүсвэл Advanced Mode-г боломжтой болго.",
      "--sjs-general-backcolor-dim": "Судалгааны үндсэн нөхцөл байдлын өнгийг тогтооно."
    },
    header: {
      inheritWidthFrom: "\"As as container\" сонголт автоматаар судалгаа хийсэн HTML элементэд тохируулахын тулд толгойн агуулгын хэсгийн өргөнийг тохируулдаг.",
      textAreaWidth: "Пикселээр хэмжсэн судалгааны нэр, тодорхойлолт бүхий толгойн хэсгийн өргөн.",
      overlapEnabled: "Идэвхжүүлбэл судалгааны дээд хэсэг нь header-ийн доод хэсгийг давхарладаг.",
      mobileHeight: "0 гэж тохируулбал өндөрийг гарчгийн агуулгад тохируулахын тулд автоматаар тооцоолдог."
    },
    progressBarInheritWidthFrom: "\"As as container\" сонголт автоматаар судалгаанд байрлуулсан HTML элементэд тохируулахын тулд progress bar area өргөнийг тохируулдаг."
  },
  // Properties
  p: {
    title: {
      name: "Гарчиг",
      title: "'Нэр'-тэй адилхан бол хоосон орхих."
    },
    multiSelect: "Олон сонголтыг зөвшөөрөх",
    showLabel: "Зургийн тайлбар харуулах",
    swapOrder: "Тийм, Үгүй гэсэн дарааллыг соль",
    value: "Утга",
    tabAlign: "Хавтас байрлуулах",
    sourceType: "Эх сурвалжийн төрөл",
    fitToContainer: "Сав баглаа боодолд тохирно",
    setValueExpression: "Эрхэмлэх чанарыг илэрхийлэхийг тогтоо",
    description: "Тайлбар",
    logoFit: "Лого",
    pages: "Хуудаснууд",
    questions: "Асуултууд",
    triggers: "Схемүүд",
    calculatedValues: "Тооцоолсон утгууд",
    surveyId: "Санал асуулгын ID",
    surveyPostId: "Санал асуулгын нийтлэлийн ID",
    surveyShowDataSaving: "Санал асуулга өгөгдөл хадгалж байхад харуулах",
    questionDescriptionLocation: "Асуултын тайлбарын байршил",
    progressBarType: "Явцын мөрний төрөл",
    showTOC: "TOC харуулах",
    tocLocation: "Toc байршил",
    questionTitlePattern: "Асуултын гарчгийн загвар",
    widthMode: "Өргөн горим",
    showBrandInfo: "Брэнд мэдээллийг харуулах",
    useDisplayValuesInDynamicTexts: "Динамик текстэд харуулах утгыг хэрэглэх",
    visibleIf: "Харагдана хэрэв",
    defaultValueExpression: "Үндсэн утгын илэрхийлэл",
    requiredIf: "Заавал бөглөх хэрэв",
    resetValueIf: "Хэрэв үнэ цэнээ дахин тогтоох",
    setValueIf: "Хэрэв үнэ цэнийг тогтоо",
    validators: "Батлагч",
    bindings: "Холбогч",
    renderAs: "руу хөрвүүлэх",
    attachOriginalItems: "Эх элементүүдийг хавсаргах",
    choices: "Сонголтууд",
    choicesByUrl: "Url сонолтууд",
    currency: "Мөнгөн тэмдэгт",
    cellHint: "Жишээ утга",
    totalMaximumFractionDigits: "Нийт хамгийн их бутархай тоонууд",
    totalMinimumFractionDigits: "Нийт хамгийн бага бутархай тоонууд",
    columns: "Баганууд",
    detailElements: "Дэлгэрэнгүй элементүүд",
    allowAdaptiveActions: "Дасан зохицох үйлдлийг зөвшөөрөх",
    defaultRowValue: "Үндсэн мөрийн утга",
    detailPanelShowOnAdding: "Нэмэж байх үед нарийвчилсан панел харуулах",
    choicesLazyLoadEnabled: "Choices lazy load enabled",
    choicesLazyLoadPageSize: "Choices lazy load page size",
    inputFieldComponent: "Оролтын утгын бүрэлдэхүүн",
    itemComponent: "Элементийн бүрэлдэхүүн",
    min: "Хамгийн бага",
    max: "Хамгийн их",
    minValueExpression: "Хамгийн бага утгын илэрхийлэл",
    maxValueExpression: "Хамгийн их утгын илэрхийлэл",
    step: "Алхам",
    dataList: "Өгөгдлийн жагсаалт",
    inputSize: "Элементийн хэмжээ",
    itemTitleWidth: "Барааны шошгоны өргөн (px-д)",
    inputTextAlignment: "Оролтын үнэ цэнийн зохицуулалт",
    elements: "Элементүүд",
    content: "Контент",
    navigationTitle: "Чиглүүлэгчийн гарчиг",
    navigationDescription: "Чиглүүлэгчийн тайлбар",
    longTap: "Long tap",
    autoGrow: "Автоматаар нэмэх",
    allowResize: "Дахин сэргээх боломж олго",
    acceptCarriageReturn: "Accept carriage return",
    displayMode: "Дэлгэцийн горим",
    rateType: "Дамжуулах хурд",
    label: "Шошго",
    contentMode: "Контентийн горим",
    imageFit: "Зураг багтаах",
    altText: "Тайлбар",
    height: "Өндөр",
    mobileHeight: "Ухаалаг гар утасны өндөр",
    penColor: "Балны өнгө",
    backgroundColor: "Дэвсгэр өнгө",
    templateElements: "Загварын элементүүд",
    operator: "Operator",
    isVariable: "Хувьсах чадвартай",
    runExpression: "илэрхийлэлг ажиллуулах",
    showCaption: "Тайлбар харуулах",
    iconName: "Дүрсийн нэр",
    iconSize: "Дүрсийн хэмжээ",
    precision: "Нарийвчлал",
    matrixDragHandleArea: "Матриц чирэх бариулын талбай",
    backgroundImage: "Ар талын зураг",
    backgroundImageFit: "Ар талын зураг тохирно",
    backgroundImageAttachment: "Ар талын зургийн хавсралт",
    backgroundOpacity: "Ар талын харанхуй байдал",
    selectToRankEnabled: "Боломжтой зэрэглэлийг сонгох",
    selectToRankAreasLayout: "Бүсүүдийн загварыг сонгох",
    selectToRankEmptyRankedAreaText: "Бүх сонголтыг сонгосон эсэхийг харуулах текст",
    selectToRankEmptyUnrankedAreaText: "Хаягийн бүсэд байрлах газар эзэмшигчийн текст",
    allowCameraAccess: "Камераар нэвтрэх боломж олгох",
    scaleColorMode: "Масштабын өнгө загвар",
    rateColorMode: "Хэмжээ өнгөний хэв маяг",
    copyDisplayValue: "Copy display value",
    effectiveColSpan: "Баганын хугацаа",
    progressBarInheritWidthFrom: "Прогресс барын бүсийн өргөн"
  },
  theme: {
    advancedMode: "Дэвшилтэт хэв маяг",
    pageTitle: "Хуудасны нэрийн фонт",
    questionTitle: "Асуулт нэрийн фонт",
    editorPanel: "Оролтын элемент",
    lines: "Шугам",
    primaryDefaultColor: "Дефолт",
    primaryDarkColor: "Ховер",
    primaryLightColor: "Сонгосон",
    backgroundDimColor: "Ар талын өнгө",
    cornerRadius: "Булангийн радиус",
    backcolor: "Дефолт нөхцөл байдал",
    hovercolor: "Hover-ийн гарал үүсэл",
    borderDecoration: "Хилийн чимэг",
    fontColor: "Фонтын өнгө",
    backgroundColor: "Ар талын өнгө",
    primaryForecolor: "Дефолт өнгө",
    primaryForecolorLight: "Хөгжлийн бэрхшээлтэй хүний өнгө",
    font: "Фонт",
    borderDefault: "Илүү харанхуй",
    borderLight: "Гэрэлтэй",
    fontFamily: "Фонтын гэр бүл",
    fontWeightRegular: "Тогтмол",
    fontWeightHeavy: "Хүнд",
    fontWeightSemiBold: "Хагас зоригтой",
    fontWeightBold: "Болд",
    color: "Өнгө",
    placeholderColor: "Газар эзэмшигчийн өнгө",
    size: "Хэмжээ",
    opacity: "Бүдүүлэг байдал",
    boxShadowX: "X",
    boxShadowY: "Y",
    boxShadowAddRule: "Сүүдрийн эффект нэмэх",
    boxShadowBlur: "Блур",
    boxShadowSpread: "Тархалт",
    boxShadowDrop: "Дусал",
    boxShadowInner: "Дотоод",
    names: {
      default: "Дефолт",
      sharp: "Хурц",
      borderless: "Хил хязгааргүй",
      flat: "Хавтгай",
      plain: "Энгийн",
      doubleborder: "Хоёр хил",
      layered: "Давхарласан",
      solid: "Бат бөх",
      threedimensional: ".3D",
      contrast: "Эсрэг тэсрэг"
    },
    colors: {
      teal: "Цайл",
      blue: "Цэнхэр",
      purple: "Пүрвээ",
      orchid: "Орхон",
      tulip: "Тюлип",
      brown: "Браун",
      green: "Ногоон",
      gray: "Саарал"
    }
  },
  creatortheme: {
    "--sjs-special-background": "Гадаргуугийн фон",
    "--sjs-primary-background-500": "Хүүхдийн хэсэг",
    "--sjs-secondary-background-500": "Хоёрдугаар зэргийн",
    surfaceScale: "Гадаргуу",
    userInterfaceBaseUnit: "Хэрэглэгчийн интерфейс",
    fontScale: "Фонт",
    names: {
      sc2020: "Судалгаа зохион байгуулагч 2020",
      "default-light": "Гэрэл",
      "default-dark": "Харанхуй",
      "default-contrast": "Эсрэг тэсрэг байдал"
    }
  }
};

setupLocale({ localeCode: "mn", strings: mnStrings });

// The following strings have been translated by a machine translation service
// Remove those strings that you have corrected manually
// ed.themeSurvey: "Themes" => "Сэдвүүд"
// ed.themePropertyGridTitle: "Theme Settings" => "Сэдвийн тохиргоо"
// ed.themeExportButton: "Export" => "Экспорт"
// ed.themeImportButton: "Import" => "Импорт"
// ed.carryForwardChoicesCopied: "Choices are copied from" => "Сонголтыг хуулбарладаг"
// ed.imagePlaceHolder: "Drag and drop an image here or click the button below and choose an image to upload" => "Энд зураг чирж унагаах эсвэл доорх товчийг дарж татаж авах зургийг сонгоно уу"
// ed.imageChooseImage: "Choose Image" => "Зураг сонгох"
// lg.trigger_setvalueEmptyText: "clear question value: {0}" => "тодорхой асуултын үнэ цэнэ: {0}"
// pe.overridingPropertyPrefix: "Set by " => "Дэргэд нь "
// pe.propertyNameIsIncorrect: "Do not use reserved words: \"item\", \"choice\", \"panel\", \"row\"." => "\"Item\", \"монгол\", \"panel\", \"row\" гэсэн үгсийн нөөц үгийг бүү хэрэглэ."
// pe.allowResizeComment: "Allow users to resize text areas" => "Хэрэглэгчдэд текстийн газруудыг дахин ашиглах боломж олго"
// pe.rateCount: "Rate count" => "Үнэ тогтоох"
// pe.autoGenerate: "How to specify rate values?" => "Үнэ цэнийг хэрхэн тодорхойлох вэ?"
// pe.minSelectedChoices: "Minimum selected choices" => "Хамгийн бага сонгосон сонголт"
// pe.rateType: "Rate type" => "Rate төрөл"
// pv.tab: "Tabs" => "Табууд"
// inputType.color: "Color" => "Өнгө"
// inputType.date: "Date" => "Огноо"
// inputType.datetime-local: "Date and Time" => "Огноо, цаг"
// inputType.email: "Email" => "И-мэйл"
// inputType.month: "Month" => "Сар"
// inputType.number: "Number" => "Тоо хэмжээ"
// inputType.password: "Password" => "Нууц үг"
// inputType.range: "Range" => "Хамрах хүрээ"
// inputType.tel: "Phone Number" => "Утасны дугаар"
// inputType.text: "Text" => "Текст"
// inputType.time: "Time" => "Цаг хугацаа"
// inputType.url: "URL" => "URL"
// inputType.week: "Week" => "Долоо хоног"
// rateColorMode.default: "Default" => "Дефолт"
// autoGenerate.true: "Generate" => "Үүсгэх"
// autoGenerate.false: "Enter manually" => "Гараар оруул"
// rateType.labels: "Labels" => "Labels"
// rateType.stars: "Stars" => "Одод"
// rateType.smileys: "Smileys" => "Инээмсэглэл"
// pehelp.size: "Resizes the visible area of the input field. Please use the <b>Validation → Maximum length</b> setting to limit the input length." => "Оролт гаралтын талбарын үзэгдэх талбайг дахин тохируулах. Оролтын уртыг <b>хязгаарлахын тулд Validation → Maximum урт</b> тохиргоог ашиглана уу."
// p.allowResize: "Allow resizing" => "Дахин сэргээх боломж олго"
// p.precision: "Precision" => "Нарийвчлал"
// p.matrixDragHandleArea: "Matrix drag handle area" => "Матриц чирэх бариулын талбай"
// p.backgroundImage: "Background image" => "Ар талын зураг"
// p.backgroundImageFit: "Background image fit" => "Ар талын зураг тохирно"
// p.backgroundImageAttachment: "Background image attachment" => "Ар талын зургийн хавсралт"
// p.backgroundOpacity: "Background opacity" => "Ар талын харанхуй байдал"
// p.selectToRankEnabled: "Select to rank enabled" => "Боломжтой зэрэглэлийг сонгох"
// p.selectToRankAreasLayout: "Select to rank areas layout" => "Бүсүүдийн загварыг сонгох"
// p.allowCameraAccess: "Allow camera access" => "Камераар нэвтрэх боломж олгох"
// p.scaleColorMode: "Scale color mode" => "Масштабын өнгө загвар"
// p.rateColorMode: "Rate color mode" => "Хэмжээ өнгөний хэв маяг"
// p.templateTabTitle: "Template tab title" => "Template tab цол"
// p.templateVisibleIf: "Template visible if" => "Хэрэв Template харагдах"
// p.copyDisplayValue: "Copy display value" => "Copy display value"
// theme.--background: "Background color" => "Ар талын өнгө"
// theme.--background-dim-light: "Background dim light color" => "Ар талын бүдэг гэрэл өнгө"
// theme.--primary-foreground: "Primary foreground color" => "Хүүхдийн хэсгийн өмнөх өнгө"
// theme.--foreground: "Foreground color" => "Өнгөө"
// theme.--base-unit: "Base unit" => "Үндсэн нэгж"
// theme.groupAdvanced: "Advanced" => "Өндөр хөгжсөн"
// theme.themeName: "Theme" => "Сэдэв"
// theme.isPanellessss: "Question appearance" => "Асуулт хариултын төрх"
// theme.isPanellessPanels: "Default" => "Дефолт"
// theme.isPanellessLightweight: "Without Panels" => "Панелгүйгээр"
// theme.themePaletteLight: "Light" => "Гэрэл"
// theme.themePaletteDark: "Dark" => "Харанхуй"
// theme.primaryColor: "Accent color" => "Акцент өнгө"
// theme.primaryDefaultColor: "Default" => "Дефолт"
// theme.primaryDarkColor: "Hover" => "Ховер"
// theme.primaryLightColor: "Selected" => "Сонгосон"
// theme.backgroundDimColor: "Background color" => "Ар талын өнгө"
// theme.backgroundImage: "Background image" => "Ар талын зураг"
// theme.backgroundImageFitAuto: "Auto" => "Авто"
// theme.backgroundImageFitCover: "Cover" => "Хөшиг"
// theme.backgroundImageFitContain: "Contain" => "Агуулах"
// theme.backgroundOpacity: "Opacity" => "Бүдүүлэг байдал"
// theme.backgroundImageAttachmentFixed: "Fixed" => "Зассан"
// theme.backgroundImageAttachmentScroll: "Scroll" => "Хуйлмал бичиг"
// theme.panelBackgroundTransparency: "Panel background opacity" => "Панелийн ар талын харанхуй байдал"
// theme.questionBackgroundTransparency: "Question background opacity" => "Асуулт хариултын нөхцөл байдал"
// theme.questionPanel: "Panel background and corner radius" => "Панелийн ар талын болон булангийн радиус"
// theme.questionTitle: "Question title font" => "Асуулт нэрийн фонт"
// theme.questionDescription: "Question description font" => "Асуултын тодорхойлолтын фонт"
// theme.editorPanel: "Input element" => "Оролтын элемент"
// theme.editorFont: "Input element font" => "Оролтын элементийн фонт"
// theme.backcolor: "Default background" => "Дефолт нөхцөл байдал"
// theme.hovercolor: "Hover background" => "Hover-ийн гарал үүсэл"
// theme.borderDecoration: "Border decoration" => "Хилийн чимэг"
// theme.accentBackground: "Accent background" => "Акцентийн гарал үүсэл"
// theme.accentForeground: "Accent foreground" => "Акцентийн өмнө"
// theme.primaryForecolor: "Default color" => "Дефолт өнгө"
// theme.primaryForecolorLight: "Disabled color" => "Хөгжлийн бэрхшээлтэй хүний өнгө"
// theme.linesColors: "Minor line colors" => "Бага шугаман өнгө"
// theme.borderDefault: "Darker" => "Илүү харанхуй"
// theme.borderLight: "Lighter" => "Гэрэлтэй"
// theme.fontFamily: "Font family" => "Фонтын гэр бүл"
// theme.fontSize: "Font size" => "Фонтын хэмжээ"
// theme.color: "Color" => "Өнгө"
// theme.size: "Size" => "Хэмжээ"
// theme.fontWeightRegular: "Regular" => "Тогтмол"
// theme.fontWeightHeavy: "Heavy" => "Хүнд"
// theme.fontWeightSemiBold: "Semi-bold" => "Хагас зоригтой"
// theme.fontWeightBold: "Bold" => "Болд"
// theme.scale: "Scale" => "Хэмжүүр"
// theme.cornerRadius: "Corner radius" => "Булангийн радиус"
// theme.surveyTitleFont: "Survey title font" => "Судалгааны нэрийн фонт"
// theme.pageTitle: "Page title font" => "Хуудасны нэрийн фонт"
// theme.pageDescription: "Page description font" => "Хуудасны дүрслэлийн фонт"
// theme.boxShadowX: "X" => "X"
// theme.boxShadowY: "Y" => "Y"
// theme.boxShadowAddRule: "Add Shadow Effect" => "Сүүдрийн эффект нэмэх"
// theme.opacity: "Opacity" => "Бүдүүлэг байдал"
// theme.boxShadowBlur: "Blur" => "Блур"
// theme.boxShadowSpread: "Spread" => "Тархалт"
// theme.boxShadowDrop: "Drop" => "Дусал"
// theme.boxShadowInner: "Inner" => "Дотоод"
// theme.questionShadow: "Shadow effects" => "Сүүдрийн нөлөө"
// theme.editorShadow: "Input element shadow effects" => "Оролт элементийн сүүдрийн нөлөө"
// names.default: "Default" => "Дефолт"
// names.contrast: "Contrast" => "Эсрэг тэсрэг"
// names.plain: "Plain" => "Энгийн"
// names.simple: "Simple" => "Энгийн"
// names.blank: "Blank" => "Хоосон"
// names.double: "Double" => "Хоёр дахин"
// names.bulk: "Bulk" => "Булк"
// names.pseudo-3d: "Pseudo 3D" => "Псевдо 3D"
// names.playful: "Playful" => "Тоглосон"
// names.ultra: "Ultra" => "Ультра"
// colors.teal: "Teal" => "Цайл"
// colors.blue: "Blue" => "Цэнхэр"
// colors.purple: "Purple" => "Пүрвээ"
// colors.orchid: "Orchid" => "Орхон"
// colors.tulip: "Tulip" => "Тюлип"
// colors.brown: "Brown" => "Браун"
// colors.green: "Green" => "Ногоон"
// names.sharp: "Sharp" => "Хурц"
// names.borderless: "Borderless" => "Хил хязгааргүй"
// names.flat: "Flat" => "Хавтгай"
// names.doubleborder: "Double Border" => "Хоёр хил"
// names.layered: "Layered" => "Давхарласан"
// names.solid: "Solid" => "Бат бөх"
// names.threedimensional: "3D" => ".3D"
// ed.translationDeleteLanguage: "Are you certain you wish to delete all strings for this language?" => "Та энэ хэлний бүх уяаг арилгахыг хүсэж байгаа гэдэгтээ итгэлтэй байна уу?"
// ed.themeResetButton: "Reset theme settings to default" => "Дахин сэдэвчилсэн тохиргоог default хийх"
// theme.placeholderColor: "Placeholder color" => "Газар эзэмшигчийн өнгө"
// ed.themeSettings: "Theme Settings" => "Сэдвийн тохиргоо"
// ed.themeSettingsTooltip: "Open theme settings" => "Нээлттэй сэдвийн тохиргоо"
// pe.resetToDefaultCaption: "Reset" => "Дахин тохируулах"
// pv.file: "Local files" => "Орон нутгийн файлууд"
// pv.camera: "Camera" => "Камер"
// pv.file-camera: "Local files or camera" => "Орон нутгийн файлууд эсвэл камер"
// ed.translateUsigAI: "Auto-translate All" => "Авто-орчуулга Бүгд"
// ed.translationDialogTitle: "Untranslated strings" => "Огт орчуулагдаагүй уяанууд"
// pe.fastEntryChoicesMinCountError: "Please enter at least {0} items" => "Наад зах нь {0} зүйлс оруулна уу"
// lg.question_resetValueName: "Reset question value" => "Асуултын үнэ цэнийг дахин тогтоох"
// lg.column_resetValue: "Reset column value" => "Reset баганын үнэ цэнэ"
// pe.markRequired: "Mark as required" => "Шаардлагын дагуу тэмдэглэгээ хийх"
// pe.removeRequiredMark: "Remove the required mark" => "Шаардлагатай тэмдэглэгээг хасах"
// p.resetValueIf: "Reset value if" => "Хэрэв үнэ цэнээ дахин тогтоох"
// lg.question_setValueName: "Set question value" => "Асуултын үнэ цэнийг тогтоох"
// lg.column_resetValueName: "Reset column value" => "Reset баганын үнэ цэнэ"
// lg.column_setValueName: "Set column value" => "Баганын үнэ цэнийг тогтоох"
// lg.setValueExpressionPlaceholder: " An expression whose result will be assigned to the target question." => " Үр дүн нь ямар байгааг байгсад асуултад хариулах илэрхийлэл."
// survey.title: "Title" => "Нүүр"
// page.title: "Title" => "Нүүр"
// p.setValueIf: "Set value if" => "Хэрэв үнэ цэнийг тогтоо"
// theme.header: "Header" => "Толгойлогч"
// theme.backgroundImageFitFill: "Stretch" => "Сэнгэрч"
// theme.backgroundImageFitTile: "Tile" => "Тил"
// theme.headerView: "View" => "Үзэх"
// theme.headerViewBasic: "Basic" => "Үндсэн"
// theme.headerViewAdvanced: "Advanced" => "Өндөр хөгжсөн"
// theme.headerInheritWidthFrom: "Content area width" => "Агуулгын бүсийн өргөн"
// theme.headerInheritWidthFromSurvey: "Same as survey" => "Судалгаатай адил"
// theme.headerInheritWidthFromPage: "Fit to page" => "Хуудсанд тохирсон"
// theme.headerTextAreaWidth: "Text width" => "Текстийн өргөн"
// theme.headerBackgroundColorSwitch: "Background color" => "Ар талын өнгө"
// theme.headerBackgroundColorNone: "None" => "Хэн ч биш"
// theme.headerBackgroundColorAccentColor: "Accent color" => "Акцент өнгө"
// theme.headerBackgroundColorCustom: "Custom" => "Үйлчилгээ"
// theme.horizontalAlignmentLeft: "Left" => "Зүүн"
// theme.horizontalAlignmentCenter: "Center" => "Төв"
// theme.horizontalAlignmentRight: "Right" => "Баруун талд"
// theme.verticalAlignmentTop: "Top" => "Дээд"
// theme.verticalAlignmentMiddle: "Middle" => "Дунд"
// theme.verticalAlignmentBottom: "Bottom" => "Доод"
// theme.logoPosition: "Logo Position" => "Лого байрлал"
// theme.headerDescriptionPosition: "Description Position" => "Тодорхойлолтын байрлал"
// lg.question_resetValueText: "reset value for question: {0}" => "асуултын үнэ цэнийг дахин тогтоох нь: {0}"
// lg.question_setValueText: "assign value: {1} to question: {0}" => "үнэ цэнийг даалгах нь: {1} асуулт: {0}"
// lg.column_resetValueText: "reset cell value for column: {0}" => "баганын эсийн үнэ цэнийг дахин тогтоох: {0}"
// lg.column_setValueText: "assign cell value: {1} to column: {0}" => "эсийн үнэ цэнийг хуваарил: {1} багана: {0}"
// ed.surveyJsonExportButton: "Export" => "Экспорт"
// ed.surveyJsonImportButton: "Import" => "Импорт"
// ed.surveyJsonCopyButton: "Copy to clipboard" => "Хавчуургыг хуулах"
// pe.filePlaceholder: "File placeholder text" => "Файл байршуулагчийн текст"
// pe.photoPlaceholder: "Photo placeholder text" => "Гэрэл зураг байршуулагч бичвэр"
// pe.fileOrPhotoPlaceholder: "File or photo placeholder text" => "Файл эсвэл гэрэл зураг байршуулагч текст"
// pehelp.filePlaceholder: "Applies when \"Source type\" is \"Local files\" or when camera is unavailable" => "\"Эх сурвалжийн төрөл\" нь \"Орон нутгийн файлууд\" эсвэл камер байхгүй үед хамаарна"
// pehelp.photoPlaceholder: "Applies when \"Source type\" is \"Camera\"." => "\"Эх сурвалжийн төрөл\" \"Камер\" байхад хамаарна."
// pehelp.fileOrPhotoPlaceholder: "Applies when \"Source type\" is \"Local files or camera\"." => "\"Эх сурвалжийн төрөл\" нь \"Орон нутгийн файлууд буюу камер\" байхад хамаарна."
// theme.background: "Background" => "Ар талын"
// theme.appearance: "Appearance" => "Харагдах байдал"
// ed.themeResetConfirmation: "Do you really want to reset the theme? All your customizations will be lost." => "Та сэдвийг дахин хөндөхийг үнэхээр хүсэж байна уу? Таны бүх тохируулга үгүй болно."
// ed.themeResetConfirmationOk: "Yes, reset the theme" => "Тийм ээ, сэдвийг дахин тохируулах"
// theme.headerInheritWidthFromContainer: "Fit to container" => "Сав баглаа боодолд тохирно"
// signaturepad.showPlaceholder: "Show the placeholder" => "Эзэмшигчийг үзүүл"
// signaturepad.placeholder: "Placeholder text" => "Placeholder текст"
// theme.surveyDescriptionFont: "Survey description font" => "Судалгааны тодорхойлолтын фонт"

// ed.prevFocus: "Focus previous" => "Өмнөх анхаарлаа төвлөрүүлэх"
// ed.nextFocus: "Focus next" => "Дараа нь анхаарлаа төвлөрүүл"
// ed.saveTheme: "Save Theme" => "Сэдэв хадгалах"
// ed.saveThemeTooltip: "Save Theme" => "Сэдэв хадгалах"
// lg.page_requireName: "Make page required" => "Шаардлагатай хуудас хийх"
// lg.panel_requireName: "Make page required" => "Шаардлагатай хуудас хийх"
// signaturepad.signatureWidth: "Signature area width" => "Гарын үсэг зурах хэсгийн өргөн"
// signaturepad.signatureHeight: "Signature area height" => "Гарын үсэг зурах хэсгийн өндөр"
// signaturepad.signatureAutoScaleEnabled: "Auto-scale the signature area" => "Авто замын тэмдэг тэмдэглэгээний талбай"
// signaturepad.penMinWidth: "Minimum pen width" => "Хамгийн бага үзэгний өргөн"
// signaturepad.penMaxWidth: "Maximum pen width" => "Хамгийн их үзэгний өргөн"
// theme.headerTitlePosition: "Title position" => "Нүүр албан тушаал"
// ed.propertyGridNoResultsFound: "No results found" => "Ямар ч үр дүн олдсонгүй"
// pv.leftRight: "Left and right" => "Зүүн, баруун"
// p.sourceType: "Source type" => "Эх сурвалжийн төрөл"
// p.fitToContainer: "Fit to container" => "Сав баглаа боодолд тохирно"
// p.setValueExpression: "Set value expression" => "Эрхэмлэх чанарыг илэрхийлэхийг тогтоо"
// ed.choicesLoadedFromWebText: "Choices are loaded from a web service." => "Сонголтыг вэбийн үйлчилгээнээс ачаалдаг."
// ed.choicesLoadedFromWebLinkText: "Go to settings" => "Тохиргоо руу явах"
// ed.choicesLoadedFromWebPreviewTitle: "Preview of loaded choice options" => "Ачаалагдсан сонголтын урьдчилсан үзүүлэлт"
// pe.eachRowUnique: "Prevent duplicate responses in rows" => "Дараалалд хувилж хариу үйлдэл үзүүлэхээс сэргийлнэ"
// theme.advancedMode: "Advanced mode" => "Дэвшилтэт хэв маяг"
// theme.backgroundCornerRadius: "Background and corner radius" => "Ар талын болон булангийн радиус"
// theme.colorsTitle: "Colors" => "Өнгө"
// theme.font: "Font" => "Фонт"
// theme.lines: "Lines" => "Шугам"
// theme.titleFont: "Title font" => "Нүүр фонт"
// theme.descriptionFont: "Description font" => "Дүрслэлийн фонт"
// theme.shadow: "Shadow effects" => "Сүүдрийн нөлөө"
// ed.translateUsigAIFrom: "Translate from: " => "Аас орчуул: "
// pe.showRefuseItem: "Allow the Refuse to Answer option" => "Хариулах татгалзах боломжийг олго"
// pe.showDontKnowItem: "Allow the Don't Know option" => "Бүү мэд сонголтыг зөвшөөр"
// pe.showRefuseItem: "Allow the Refuse to Answer option" => "Хариулах татгалзах боломжийг олго"
// pe.showDontKnowItem: "Allow the Don't Know option" => "Бүү мэд сонголтыг зөвшөөр"
// pv.contain: "Contain" => "Агуулах"
// pv.cover: "Cover" => "Хөшиг"
// pv.fill: "Fill" => "Дүүргэлт"

// pe.transposeData: "Transpose rows to columns" => "Багануудад транспозын эгнээ"
// layout.panel: "Layout" => "Layout"
// layout.question: "Layout" => "Layout"
// layout.base: "Layout" => "Layout"
// panel.name: "Panel name" => "Панелийн нэр"
// panel.title: "Panel title" => "Панел цол"
// panel.description: "Panel description" => "Панел дүрслэл"
// panel.visibleIf: "Make the panel visible if" => "Хэрэв панелыг ил гаргах"
// panel.requiredIf: "Make the panel required if" => "Шаардлагатай бол панел хий"
// panel.questionOrder: "Question order within the panel" => "Хяналтын шатны доторх асуултын дараалал"
// panel.startWithNewLine: "Display the panel on a new line" => "Самбарыг шинэ шугам дээр үзүүл"
// panel.state: "Panel collapse state" => "Панел нурах байдал"
// panel.width: "Inline panel width" => "Инлин хавтан өргөн"
// panel.minWidth: "Minimum panel width" => "Хамгийн бага хавтан өргөн"
// panel.maxWidth: "Maximum panel width" => "Хамгийн их хавтан өргөн"
// paneldynamic.name: "Panel name" => "Панелийн нэр"
// paneldynamic.title: "Panel title" => "Панел цол"
// paneldynamic.description: "Panel description" => "Панел дүрслэл"
// paneldynamic.visibleIf: "Make the panel visible if" => "Хэрэв панелыг ил гаргах"
// paneldynamic.requiredIf: "Make the panel required if" => "Шаардлагатай бол панел хий"
// paneldynamic.page: "Move the panel to page" => "Самбарыг хуудас руу зөөх"
// paneldynamic.startWithNewLine: "Display the panel on a new line" => "Самбарыг шинэ шугам дээр үзүүл"
// paneldynamic.state: "Panel collapse state" => "Панел нурах байдал"
// paneldynamic.width: "Inline panel width" => "Инлин хавтан өргөн"
// paneldynamic.minWidth: "Minimum panel width" => "Хамгийн бага хавтан өргөн"
// paneldynamic.maxWidth: "Maximum panel width" => "Хамгийн их хавтан өргөн"
// paneldynamic.templateDescription: "Panel description pattern" => "Панел дүрслэлийн загвар"
// paneldynamic.templateTitle: "Panel title pattern" => "Панелийн нэрийн загвар"
// paneldynamic.noEntriesText: "Empty panel text" => "Хоосон хавтан текст"
// paneldynamic.templateTabTitle: "Tab title pattern" => "Таб нэрийн загвар"
// paneldynamic.templateVisibleIf: "Make an individual panel visible if" => "Хувь хүний панелыг ил гаргах"
// paneldynamic.hideNumber: "Hide the panel number" => "Хавтангийн дугаарыг нуух"
// paneldynamic.titleLocation: "Panel title alignment" => "Панел цолны зохицуулалт"
// paneldynamic.descriptionLocation: "Panel description alignment" => "Панел дүрслэлийн зохицуулалт"
// paneldynamic.templateQuestionTitleLocation: "Question title alignment" => "Асуулт нэрийн уялдаа"
// paneldynamic.templateErrorLocation: "Error message alignment" => "Алдааны мессежийн зохицуулалт"
// paneldynamic.newPanelPosition: "New panel location" => "Шинэ панелийн байршил"
// paneldynamic.keyName: "Prevent duplicate responses in the following question" => "Дараах асуултад хувилж хариулахаас сэргийлье"
// question.name: "Question name" => "Асуулт нэр"
// question.title: "Question title" => "Асуулт гарчиг"
// question.description: "Question description" => "Асуултын тодорхойлолт"
// question.visibleIf: "Make the question visible if" => "Асуултыг ил тод болгох"
// question.requiredIf: "Make the question required if" => "Шаардлагатай асуултыг тавих"
// question.state: "Question box collapse state" => "Асуултын хайрцаг нурах байдал"
// question.hideNumber: "Hide the question number" => "Асуултын дугаарыг нуух"
// question.titleLocation: "Question title alignment" => "Асуулт нэрийн уялдаа"
// question.descriptionLocation: "Question description alignment" => "Асуулт тодорхойлолтын зохицуулалт"
// question.errorLocation: "Error message alignment" => "Алдааны мессежийн зохицуулалт"
// question.indent: "Increase the inner indent" => "Дотоод индентийг нэмэгдүүлэх"
// question.width: "Inline question width" => "Инлайн асуултын өргөн"
// question.minWidth: "Minimum question width" => "Хамгийн бага асуултын өргөн"
// question.maxWidth: "Maximum question width" => "Хамгийн их асуултын өргөн"
// question.textUpdateMode: "Update input field value" => "Оролтын талбайн үнэ цэнийг шинэчлэх"
// signaturepad.allowClear: "Show the Clear button within signature area" => "Гарын үсэг зурах хэсэгт Clear товчийг харуул"
// signaturepad.penColor: "Stroke color" => "Судасны өнгө"
// comment.rows: "Input field height (in lines)" => "Оролтын талбайн өндөр (шугамд)"
// expression.name: "Expression name" => "Илэрхийллийн нэр"
// expression.title: "Expression title" => "Өгүүлбэрийн гарчиг"
// expression.description: "Expression description" => "Илэрхийллийн тодорхойлолт"
// expression.expression: "Expression" => "Өгүүлбэр"
// trigger.expression: "Expression" => "Өгүүлбэр"
// calculatedvalue.expression: "Expression" => "Өгүүлбэр"
// survey.description: "Survey description" => "Судалгааны тодорхойлолт"
// page.name: "Page name" => "Хуудасны нэр"
// page.description: "Page description" => "Хуудасны тодорхойлолт"
// page.visibleIf: "Make the page visible if" => "Хуудсыг ил тод болгох"
// page.requiredIf: "Make the page required if" => "Шаардлагатай хуудсыг хий"
// page.questionOrder: "Question order on the page" => "Асуулт самбар хуудсан дээр"
// matrixdropdowncolumn.name: "Column name" => "Баганын нэр"
// matrixdropdowncolumn.title: "Column title" => "Баганын нэр"
// matrixdropdowncolumn.isUnique: "Prevent duplicate responses" => "Хуулбарласан хариу үйлдэл үзүүлэхээс сэргийлье"
// matrixdropdowncolumn.width: "Column width" => "Баганын өргөн"
// matrixdropdowncolumn.minWidth: "Minimum column width" => "Баганын хамгийн бага өргөн"
// matrixdropdowncolumn.rows: "Input field height (in lines)" => "Оролтын талбайн өндөр (шугамд)"
// matrixdropdowncolumn.visibleIf: "Make the column visible if" => "Хэрэв баганыг харах боломжтой болго"
// matrixdropdowncolumn.requiredIf: "Make the column required if" => "Шаардлагатай баганыг хий"
// matrixdropdowncolumn.showInMultipleColumns: "Each option in a separate column" => "Тус тусдаа баганад байгаа сонголт бүр"
// multipletextitem.name: "Name" => "Нэр"
// multipletextitem.title: "Title" => "Нүүр"
// pe.rateDescriptionLocation: "Label alignment" => "Шошгоны зохицл"
// pe.cellErrorLocation: "Cell error message alignment" => "Эсийн алдааны мессежийн зохицуулалт"
// pe.listIsEmpty@columns: "You don't have any columns yet" => "Танд ямар ч багана байхгүй"
// pe.listIsEmpty@rows: "You don't have any rows yet" => "Чамд ямар ч мөр байхгүй"
// pe.listIsEmpty@validators: "You don't have any validation rules yet" => "Танд ямар нэгэн баталгаажуулалтын дүрэм байхгүй байна"
// pe.listIsEmpty@calculatedValues: "You don't have any custom variables yet" => "Танд ямар ч хувийн хувьсагч байхгүй"
// pe.listIsEmpty@triggers: "You don't have any triggers yet" => "Танд ямар ч өдөөгч байхгүй"
// pe.listIsEmpty@navigateToUrlOnCondition: "You don't have any links yet" => "Танд ямар ч холбоос байхгүй"
// pe.addNew@columns: "Add new column" => "Шинэ багана нэмэх"
// pe.addNew@rows: "Add new row" => "Шинэ мөр нэмэх"
// pe.addNew@validators: "Add new rule" => "Шинэ дүрэм нэмэх"
// pe.addNew@calculatedValues: "Add new variable" => "Шинэ хувьсагч нэмэх"
// pe.addNew@triggers: "Add new trigger" => "Шинэ триггер нэмэх"
// pe.addNew@navigateToUrlOnCondition: "Add new URL" => "Шинэ URL нэмэх"
// choicesbyurl.url: "Web service's URL" => "Вэб үйлчилгээний URL"
// pe.progressBarShowPageTitles: "Display page titles in progress bar" => "Хөгжил дэвшлийн тавцан дахь хуудасны гарчгыг харуул"
// pe.progressBarShowPageNumbers: "Display page numbers in progress bar" => "Хуудасны дугааруудыг progress bar-д харуулах"
// itemvalue.visibleIf: "Make the option visible if" => "Хэрэв сонголтыг ил тод болго"
// itemvalue.enableIf: "Make the option selectable if" => "Сонголтыг сонговол"
// panel.layout: "Panel Layout" => "Panel Layout"
// tabs.questionSettings: "Question Settings" => "Асуултын тохиргоо"
// pe.url_placeholder: "Ex.: https://api.example.com/books" => "Экс.: https://api.example.com/books"
// pe.path_placeholder: "Ex.: categories.fiction" => "Экс.: categories.fiction"
// pe.questionStartIndex_placeholder: "Ex.: a)" => "Экс.: а)"
// pe.width_placeholder: "Ex.: 6in" => "Экс.: 6ин"
// pe.minWidth_placeholder: "Ex.: 600px" => "Экс: 600px"
// pe.maxWidth_placeholder: "Ex.: 50%" => "Экс: 50%"
// pv.selected: "Selected" => "Сонгосон"
// pv.unselected: "Unselected" => "Сонгогдоогүй"
// pv.center: "Center" => "Төв"
// pv.middle: "Middle" => "Дунд"
// pv.next: "Next" => "Дараа нь"
// pv.last: "Last" => "Сүүлчийнх нь"
// clearIfInvisible.none: "Never" => "Хэзээ ч"
// questionsOnPageMode.standard: "Original structure" => "Оригинал бүтэц"
// questionsOnPageMode.singlePage: "Show all questions on one page" => "Бүх асуултыг нэг хуудсан дээр харуул"
// questionsOnPageMode.questionPerPage: "Show single question per page" => "Хуудас тус бүрт ганц асуултыг харуул"
// pv.auto: "Auto" => "Авто"
// panelsState.firstExpanded: "First expanded" => "Анх өргөтгөн"
// rateColorMode.scale: "Scale" => "Хэмжүүр"
// scaleColorMode.monochrome: "Monochrome" => "Монхор"
// scaleColorMode.colored: "Colored" => "Өнгөлсөн"
// state.default: "Locked" => "Цоожтой"
// showQuestionNumbers.default: "Auto-numbering" => "Авто машины дугаар олгох"
// showQuestionNumbers.on: "Auto-numbering" => "Авто машины дугаар олгох"
// showQuestionNumbers.onPage: "Reset on each page" => "Хуудас бүр дээр дахин тохируулах"
// showQuestionNumbers.onpanel: "Reset on each panel" => "Тавиур бүр дээр дахин тавих"
// showQuestionNumbers.onPanel: "Reset on each panel" => "Тавиур бүр дээр дахин тавих"
// showQuestionNumbers.onSurvey: "Continue across the survey" => "Судалгааг үргэлжлүүлэн хийх"
// showQuestionNumbers.off: "No numbering" => "Дугаарлахгүй"
// descriptionLocation.underTitle: "Under the question title" => "Асуултын нэрийн дор"
// descriptionLocation.underInput: "Under the input field" => "Оролтын талбарын дор"
// selectToRankAreasLayout.horizontal: "Next to choices" => "Дараа нь сонголт"
// selectToRankAreasLayout.vertical: "Above choices" => "Дээрх сонголтууд"
// displayStyle.decimal: "Decimal" => "Decimal"
// displayStyle.currency: "Currency" => "Валютын ханш"
// displayStyle.percent: "Percentage" => "Хувь"
// displayStyle.date: "Date" => "Огноо"
// totalDisplayStyle.decimal: "Decimal" => "Decimal"
// totalDisplayStyle.currency: "Currency" => "Валютын ханш"
// totalDisplayStyle.percent: "Percentage" => "Хувь"
// totalDisplayStyle.date: "Date" => "Огноо"
// rowOrder.initial: "Original" => "Оргил"
// questionOrder.initial: "Original" => "Оргил"
// showProgressBar.aboveheader: "Above the header" => "Толгой дээгүүр"
// showProgressBar.belowheader: "Below the header" => "Гарчигны доор"
// pv.sum: "Sum" => "Сум"
// pv.count: "Count" => "Тооллого"
// pv.min: "Min" => "Мин"
// pv.max: "Max" => "Макс"
// pv.avg: "Avg" => "Авг"
// searchMode.contains: "Contains" => "Агуулах"
// searchMode.startsWith: "Starts with" => "Эхлэл"
// panel.name: "A panel ID that is not visible to respondents." => "Хариулагчдад харагдахгүй панелийн ID."
// panel.description: "Type a panel subtitle." => "Панелийн дэд гарчиг бичнэ."
// panel.visibleIf: "Use the magic wand icon to set a conditional rule that determines panel visibility." => "Ид шидийн wand зургыг ашиглан панелийн харагдах байдлыг тодорхойлох нөхцөлийн дүрмийг тогтоо."
// panel.enableIf: "Use the magic wand icon to set a conditional rule that disables the read-only mode for the panel." => "Зөвхөн унших хэв маягийг хаах нөхцөлтэй дүрмийг тогтоохын тулд шидэт туузны зургыг ашигла."
// panel.requiredIf: "Use the magic wand icon to set a conditional rule that prevents survey submission unless at least one nested question has an answer." => "Наад зах нь нэг үүрээ засах асуулт хариулт байхгүй л бол судалгаа явуулахаас сэргийлдэг нөхцөлийн дүрмийг тогтоохын тулд шидэт туузны зургыг ашигла."
// panel.questionTitleLocation: "Applies to all questions within this panel. If you want to override this setting, define title alignment rules for individual questions. The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Top\" by default)." => "Энэ хэлэлцүүлгийн бүх асуултад хамаарна. Хэрэв та энэ тохиргоог хүчингүй болгохыг хүсвэл хувь хүний асуултуудад зориулсан нэрийн зохицуулах дүрмүүдийг тодорхойл. \"Өв залгамжлах\" сонголт нь хуудасны түвшин (хэрэв set) эсвэл судалгааны түвшний тохиргоог (\"Top\" нь default-аар) хэрэгжүүлдэг."
// panel.questionErrorLocation: "Sets the location of an error message in relation to all questions within the panel. The \"Inherit\" option applies the page-level (if set) or survey-level setting." => "Хяналтын шатны бүх асуулттай холбогдуулан алдааны мессежийн байршлыг тогтооно. \"Өв залгамжлах\" сонголт нь хуудасны түвшин (хэрэв set) эсвэл судалгааны түвшний тохиргоог хэрэгжүүлдэг."
// panel.questionOrder: "Keeps the original order of questions or randomizes them. The \"Inherit\" option applies the page-level (if set) or survey-level setting." => "Асуултуудын анхны дарааллыг хадгалах эсвэл санамсаргүйгээр авч явдаг. \"Өв залгамжлах\" сонголт нь хуудасны түвшин (хэрэв set) эсвэл судалгааны түвшний тохиргоог хэрэгжүүлдэг."
// panel.page: "Repositions the panel to the end of a selected page." => "Сонгосон хуудасны төгсгөлд панелийг дахин байршуулах."
// panel.innerIndent: "Adds space or margin between the panel content and the left border of the panel box." => "Панелийн агуулга болон панелийн хайрцагны зүүн хилийн хооронд зай эсвэл зай нэмнэ."
// panel.startWithNewLine: "Unselect to display the panel in one line with the previous question or panel. The setting doesn't apply if the panel is the first element in your form." => "Өмнөх асуулт эсвэл панелтай нэг мөрт үзүүлэхээр сонгогдоогүй. Хэрэв панел нь таны маягт дахь анхны элемент бол тохиргоо хамаарахгүй."
// panel.state: "Choose from: \"Expanded\" - the panel is displayed in full and can be collapsed; \"Collapsed\" - the panel displays only the title and description and can be expanded; \"Locked\" - the panel is displayed in full and cannot be collapsed." => "Сонголтоос: \"Өргөтгөсөн\" - хавтанг бүрэн харуулж, нурааж болно; \"Нурсан\" - панел нь зөвхөн гарчиг, тодорхойлолтыг харуулж, өргөтгөх боломжтой; \"Цоожтой\" - панелыг бүрэн харуулсан бөгөөд нурааж болохгүй."
// panel.width: "Sets the width of the panel in proportion to other survey elements in the same line. Accepts CSS values (px, %, in, pt, etc.)." => "Панелийн өргөнийг ижил шугамаар бусад судалгааны элементүүдтэй тэнцүү тогтооно. CSS-ийн үнэт зүйлсийг (px, %, in, pt г.м) хүлээн зөвшөөрдөг."
// paneldynamic.name: "A panel ID that is not visible to respondents." => "Хариулагчдад харагдахгүй панелийн ID."
// paneldynamic.description: "Type a panel subtitle." => "Панелийн дэд гарчиг бичнэ."
// paneldynamic.visibleIf: "Use the magic wand icon to set a conditional rule that determines panel visibility." => "Ид шидийн wand зургыг ашиглан панелийн харагдах байдлыг тодорхойлох нөхцөлийн дүрмийг тогтоо."
// paneldynamic.enableIf: "Use the magic wand icon to set a conditional rule that disables the read-only mode for the panel." => "Зөвхөн унших хэв маягийг хаах нөхцөлтэй дүрмийг тогтоохын тулд шидэт туузны зургыг ашигла."
// paneldynamic.requiredIf: "Use the magic wand icon to set a conditional rule that prevents survey submission unless at least one nested question has an answer." => "Наад зах нь нэг үүрээ засах асуулт хариулт байхгүй л бол судалгаа явуулахаас сэргийлдэг нөхцөлийн дүрмийг тогтоохын тулд шидэт туузны зургыг ашигла."
// paneldynamic.templateQuestionTitleLocation: "Applies to all questions within this panel. If you want to override this setting, define title alignment rules for individual questions. The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Top\" by default)." => "Энэ хэлэлцүүлгийн бүх асуултад хамаарна. Хэрэв та энэ тохиргоог хүчингүй болгохыг хүсвэл хувь хүний асуултуудад зориулсан нэрийн зохицуулах дүрмүүдийг тодорхойл. \"Өв залгамжлах\" сонголт нь хуудасны түвшин (хэрэв set) эсвэл судалгааны түвшний тохиргоог (\"Top\" нь default-аар) хэрэгжүүлдэг."
// paneldynamic.templateErrorLocation: "Sets the location of an error message in relation to a question with invalid input. Choose between: \"Top\" - an error text is placed at the top of the question box; \"Bottom\" - an error text is placed at the bottom of the question box. The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Top\" by default)." => "Алдааны мессежийн байршлыг хүчингүй оруулсан асуулттай холбон тогтооно. Аль нэгийг сонгоно уу: \"Топ\" - асуултын хайрцагны дээд хэсэгт алдаа текст байрлуулсан байна; \"Bottom\" - асуултын хайрцагны доод хэсэгт алдаа текст байрлуулна. \"Өв залгамжлах\" сонголт нь хуудасны түвшин (хэрэв set) эсвэл судалгааны түвшний тохиргоог (\"Top\" нь default-аар) хэрэгжүүлдэг."
// paneldynamic.errorLocation: "Sets the location of an error message in relation to all questions within the panel. The \"Inherit\" option applies the page-level (if set) or survey-level setting." => "Хяналтын шатны бүх асуулттай холбогдуулан алдааны мессежийн байршлыг тогтооно. \"Өв залгамжлах\" сонголт нь хуудасны түвшин (хэрэв set) эсвэл судалгааны түвшний тохиргоог хэрэгжүүлдэг."
// paneldynamic.page: "Repositions the panel to the end of a selected page." => "Сонгосон хуудасны төгсгөлд панелийг дахин байршуулах."
// paneldynamic.innerIndent: "Adds space or margin between the panel content and the left border of the panel box." => "Панелийн агуулга болон панелийн хайрцагны зүүн хилийн хооронд зай эсвэл зай нэмнэ."
// paneldynamic.startWithNewLine: "Unselect to display the panel in one line with the previous question or panel. The setting doesn't apply if the panel is the first element in your form." => "Өмнөх асуулт эсвэл панелтай нэг мөрт үзүүлэхээр сонгогдоогүй. Хэрэв панел нь таны маягт дахь анхны элемент бол тохиргоо хамаарахгүй."
// paneldynamic.state: "Choose from: \"Expanded\" - the panel is displayed in full and can be collapsed; \"Collapsed\" - the panel displays only the title and description and can be expanded; \"Locked\" - the panel is displayed in full and cannot be collapsed." => "Сонголтоос: \"Өргөтгөсөн\" - хавтанг бүрэн харуулж, нурааж болно; \"Нурсан\" - панел нь зөвхөн гарчиг, тодорхойлолтыг харуулж, өргөтгөх боломжтой; \"Цоожтой\" - панелыг бүрэн харуулсан бөгөөд нурааж болохгүй."
// paneldynamic.width: "Sets the width of the panel in proportion to other survey elements in the same line. Accepts CSS values (px, %, in, pt, etc.)." => "Панелийн өргөнийг ижил шугамаар бусад судалгааны элементүүдтэй тэнцүү тогтооно. CSS-ийн үнэт зүйлсийг (px, %, in, pt г.м) хүлээн зөвшөөрдөг."
// paneldynamic.templateTitle: "Type in a template for dynamic panel titles. Use {panelIndex} for the panel's general position and {visiblePanelIndex} for its order among visible panels. Insert these placeholders into the pattern to add automatic numbering." => "Динамик панел цолны темплэйтэд бичнэ. Харагдах панелуудын дунд түүний дарааллыг {panelIndex} болон {visiblePanelIndex} -ийг ашиглана уу. Автомат дугаар нэмэхийн тулд эдгээр байрлагчдыг загварт оруул."
// paneldynamic.templateTabTitle: "Type in a template for tab titles. Use {panelIndex} for a panel's general position and {visiblePanelIndex} for its order among visible panels. Insert these placeholders into the pattern to add automatic numbering." => "Таб нэрний темплэйтэд бичнэ. {panelIndex} нь панелийн ерөнхий байрлал болон {visiblePanelIndex} -ийг ил харагдах панелуудын дунд эмх цэгцтэй байлгахад ашиглана. Автомат дугаар нэмэхийн тулд эдгээр байрлагчдыг загварт оруул."
// paneldynamic.templateVisibleIf: "This setting allows you to control the visibility of individual panels within the dynamic panel. Use the `{panel}` placeholder to reference the current panel in your expression." => "Энэ тохиргоо нь динамик панелын доторх хувь хүний панелын харагдах байдлыг хянах боломжийг олгодог. '{panel}' байрлуулагчийг ашиглан одоогийн панелийг өөрийн илэрхийлэлд эш татна уу."
// paneldynamic.titleLocation: "This setting is automatically inherited by all questions within this panel. If you want to override this setting, define title alignment rules for individual questions. The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Top\" by default)." => "Энэ тохиргоо нь энэ панел доторх бүх асуултаар автоматаар өвлөгддөг. Хэрэв та энэ тохиргоог хүчингүй болгохыг хүсвэл хувь хүний асуултуудад зориулсан нэрийн зохицуулах дүрмүүдийг тодорхойл. \"Өв залгамжлах\" сонголт нь хуудасны түвшин (хэрэв set) эсвэл судалгааны түвшний тохиргоог (\"Top\" нь default-аар) хэрэгжүүлдэг."
// paneldynamic.descriptionLocation: "The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Under the panel title\" by default)." => "\"Өв залгамжлах\" сонголт нь хуудасны түвшин (хэрэв set) эсвэл судалгааны түвшний тохиргоог (\"Under the panel title\" -ийг default-аар) хэрэгжүүлдэг."
// paneldynamic.newPanelPosition: "Defines the position of a newly added panel. By default, new panels are added to the end. Select \"Next\" to insert a new panel after the current one." => "Шинээр нэмэгдсэн панелийн байр суурийг тодорхойлно. Default-ээр төгсгөл рүү шинэ панелуудыг нэмдэг. Одоогийн панел дараа нь шинэ панел оруулахын тулд \"Next\"-ийг сонго."
// paneldynamic.copyDefaultValueFromLastEntry: "Duplicates answers from the last panel and assigns them to the next added dynamic panel." => "Сүүлийн панелын хариултыг хувилж, дараагийн нэмэлт динамик хавтанд хуваарилна."
// paneldynamic.keyName: "Reference a question name to require a user to provide a unique response for this question in each panel." => "Энэ асуултад хэрэглэгчээс панел бүрт өвөрмөц хариулт өгөхийг шаардахын тулд асуултын нэрийг эш тат."
// pehelp.defaultValueExpression: "This setting allows you to assign a default answer value based on an expression. The expression can include basic calculations - `{q1_id} + {q2_id}`, Boolean expressions, such as `{age} > 60`, and functions: `iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, etc. The value determined by this expression serves as the initial default value that can be overridden by a respondent's manual input." => "Энэ тохиргоо нь илэрхийллийн үндсэн дээр дефолт хариултын үнэ цэнийг даалгах боломжийг олгодог. Илэрхийлэл нь үндсэн тооцоо - '{q1_id} + {q2_id}', Бөүлийн илэрхийллүүд, тухайлбал '{age} > 60', функц: 'iif()', 'өнөөдөр()', 'мин()', 'мин()', 'max()', 'avg()', г.м. Энэ илэрхийлэлээр тодорхойлогддог үнэ цэнэ нь хариулагчийн гарын авлагын оролтоор давхардуулан авч болох анхны дефолтын үнэ цэнэ болж өгдөг."
// pehelp.resetValueIf: "Use the magic wand icon to set a conditional rule that determines when a respondent's input is reset to the value based on the \"Default value expression\" or \"Set value expression\" or to the \"Default answer\" value (if either is set)." => "\"Default value expression\" эсвэл \"Set value expression\" эсвэл \"Default answer\" value (хэрэв аль нэгийг нь тогтоосон бол) үнэ цэнэд үндэслэн хариулагчийн оруулсан хувь нэмрийг үнэ цэнэд хэзээ дахин тохируулахыг тодорхойлох нөхцөлтэй дүрмийг тогтоохын тулд шидэт wand зургыг ашигла."
// pehelp.setValueIf: "Use the magic wand icon to set a conditional rule that determines when to run the \"Set value expression\" and dynamically assign the resulting value as a response." => "Ид шидийн wand зургыг ашиглан \"Set value expression\"-ийг хэзээ ажиллуулахыг тодорхойлох нөхцөлтэй дүрмийг тогтоож, үр дүнд хүрсэн үнэ цэнийг хариу болгон динамикаар даалга."
// pehelp.setValueExpression: "Specify an expression that defines the value to be set when the conditions in the \"Set value if\" rule are met. The expression can include basic calculations - `{q1_id} + {q2_id}`, Boolean expressions, such as `{age} > 60`, and functions: `iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, etc. The value determined by this expression can be overridden by a respondent's manual input." => "\"Set value if\" дүрмийн нөхцөл хангагдсан үед тогтоох үнэ цэнийг тодорхойлсон илэрхийллийг тодорхойл. Илэрхийлэл нь үндсэн тооцоо - '{q1_id} + {q2_id}', Бөүлийн илэрхийллүүд, тухайлбал '{age} > 60', функц: 'iif()', 'өнөөдөр()', 'мин()', 'мин()', 'max()', 'avg()', г.м. Энэ илэрхийлэлээр тогтоосон үнэ цэнийг хариулагчийн гарын авлагын оролтоор давхардуулан авч болно."
// question.name: "A question ID that is not visible to respondents." => "Асуултад хариулагчдад харагдахгүй асуултын ID."
// question.description: "Type a question subtitle." => "Асуултын дэд гарчиг бичнэ үү."
// question.visibleIf: "Use the magic wand icon to set a conditional rule that determines question visibility." => "Асуултын харагдах байдлыг тодорхойлох нөхцөлийн дүрмийг тогтоохын тулд шидэт туузны зургыг ашигла."
// question.enableIf: "Use the magic wand icon to set a conditional rule that disables the read-only mode for the question." => "Асуултын зөвхөн унших хэв маягийг хаах нөхцөлтэй дүрмийг тогтоохын тулд шидэт туузны зургыг ашигла."
// question.requiredIf: "Use the magic wand icon to set a conditional rule that prevents survey advancing or submission unless the question received an answer." => "Асуулт хариулт аваагүй л бол судалгааг урагшлуулах эсвэл ирүүлэхэд саад болох нөхцөлийн дүрмийг тогтоохын тулд шидэт туузны зургыг ашигла."
// question.startWithNewLine: "Unselect to display the question in one line with the previous question or panel. The setting doesn't apply if the question is the first element in your form." => "Асуултыг өмнөх асуулт эсвэл панелтай нэг мөрт харуулахаар сонгогдоогүй. Асуулт нь таны маягт дахь анхны элемент бол тохиргоо хамаарахгүй."
// question.page: "Repositions the question to the end of a selected page." => "Асуултыг сонгосон хуудасны төгсгөлд буцааж тавих."
// question.state: "Choose from: \"Expanded\" - the question box is displayed in full and can be collapsed; \"Collapsed\" - the question box displays only the title and description and can be expanded; \"Locked\" - the question box is displayed in full and cannot be collapsed." => "Сонгох: \"Өргөтгөсөн\" - асуултын хайрцгийг бүрэн харуулсан бөгөөд нурж болно; \"Нурж унасан\" - асуултын хайрцаг нь зөвхөн гарчиг, дүрслэлийг харуулж, өргөтгөх боломжтой; \"Locked\" - асуултын хайрцгийг бүрэн харуулсан бөгөөд нурж болохгүй."
// question.titleLocation: "Overrides title alignment rules defined on a panel, page or survey level. The \"Inherit\" option applies any higher-level settings (if set) or survey-level setting (\"Top\" by default)." => "Нэрийн зохицлын дүрмүүдийг панел, хуудас эсвэл судалгааны түвшин дээр тодорхойлсон байдаг. \"Өв залгамжлах\" сонголт нь ямар ч өндөр түвшний тохиргоог (хэрэв set) эсвэл судалгааны түвшний тохиргоог (\"Top\" нь default-аар) хэрэгжүүлдэг."
// question.descriptionLocation: "The \"Inherit\" option applies the survey-level setting (\"Under the question title\" by default)." => "\"Өв залгамж\" сонголт нь судалгааны түвшний тохиргоог хэрэгжүүлдэг (\"Асуултын гарчиг доор\" гэсэн сонголтыг сонголтоор)."
// question.errorLocation: "Sets the location of an error message in relation to the question with invalid input. Choose between: \"Top\" - an error text is placed at the top of the question box; \"Bottom\" - an error text is placed at the bottom of the question box. The \"Inherit\" option applies the survey-level setting (\"Top\" by default)." => "Асуулттай холбоотой алдааны мессежийн байршлыг хүчингүй оруулсан байдлаар тогтооно. Аль нэгийг сонгоно уу: \"Топ\" - асуултын хайрцагны дээд хэсэгт алдаа текст байрлуулсан байна; \"Bottom\" - асуултын хайрцагны доод хэсэгт алдаа текст байрлуулна. \"Өв залгамж\" сонголт нь судалгааны түвшний тохиргоог (\"Top\" by default) хэрэгжүүлдэг."
// question.indent: "Adds space or margin between the question content and the left border of the question box." => "Асуултын агуулга болон асуултын хайрцагны зүүн хил хоёрын хооронд зай эсвэл зай нэмнэ."
// question.width: "Sets the width of the question in proportion to other survey elements in the same line. Accepts CSS values (px, %, in, pt, etc.)." => "Асуултын өргөнийг нэг мөрт бусад судалгааны элементүүдтэй тэнцүү байдлаар тогтооно. CSS-ийн үнэт зүйлсийг (px, %, in, pt г.м) хүлээн зөвшөөрдөг."
// surveyvalidator.expression: "Use the magic wand icon to set a validation rule for the question." => "Асуултын баталгаажуулалтын дүрмийг тогтоохын тулд шидэт туузны зургыг ашигла."
// question.textUpdateMode: "Choose from: \"On lost focus\" - the value is updated when the input field loses focus; \"While typing\" - the value is updated in real-time, as users are typing. The \"Inherit\" option applies the survey-level setting (\"On lost focus\" by default)." => "Сонгоно уу: \"Алдагдсан фокус дээр\" - оролтын талбар анхаарлаа алдсан үед үнэ цэнэ нь шинэчлэгддэг; \"Цахимаар бичих\" - хэрэглэгчид бичихийн хэрээр үнэ цэнэ нь бодит цаг хугацаанд шинэчлэгддэг. \"Өв залгамж\" сонголт нь судалгааны түвшний тохиргоог (\"Алдагдсан фокус дээр\" дефолтоор) хэрэгжүүлдэг."
// question.url: "You can use any web service as a data source for multiple-choice questions. To populate choice values, enter the URL of the service providing the data." => "Та ямар ч вэб үйлчилгээг олон сонголттой асуултуудад мэдээллийн эх сурвалж болгон ашиглаж болно. Сонголтын үнэт зүйлсийг хүн амлахын тулд өгөгдөл өгөх үйлчилгээний URL-ийг оруулна уу."
// question.searchMode: "A comparison operation used to filter the drop-down list." => "Дуслын жагсаалтыг шүүлт хийхэд ашигладаг харьцуулах мэс засал."
// signaturepad.signatureWidth: "Sets the width of the displayed signature area and the resulting image." => "Үзүүлсэн гарын үсэг зурсан хэсгийн өргөнийг болон үүний үр дүнд бий болсон зургийг тогтоо."
// signaturepad.signatureHeight: "Sets the height of the displayed signature area and the resulting image." => "Үзүүлсэн гарын үсэг зурсан хэсгийн өндрийг болон үүний үр дүнд бий болсон зургийг тогтооно."
// signaturepad.signatureAutoScaleEnabled: "Select if you want the signature area to fill all available space within the question box while maintaining the default 3:2 aspect ratio. When custom width and height values are set, the setting will keep the aspect ratio of these dimensions." => "Хэрэв та гарын үсэг зурах талбайгаа асуултын хайрцаг доторх бүх боломжит зайг бөглөж, стандарт 3:2 талын харьцааг хадгалахыг хүсэж байвал сонго. Custom өргөн, өндөр үнэ цэнийг тогтоох үед тохиргоо нь эдгээр хэмжээсийн тал харьцааг хадгална."
// file.imageHeight: "Adjusts the height of the image in the survey results." => "Судалгааны үр дүнгээр дүрсний өндрийг тохируулна."
// file.imageWidth: "Adjusts the width of the image in the survey results." => "Судалгааны үр дүн дэх зургийн өргөнийг тохируулна."
// imagepicker.imageHeight: "Overrides the minimum and maximum height values." => "Хамгийн бага болон хамгийн их өндөр үнэ цэнийг давхардна."
// imagepicker.imageWidth: "Overrides the minimum and maximum width values." => "Хамгийн бага, хамгийн их өргөний үнэ цэнийг давхардалд оруулах."
// imagepicker.choices: "\"Value\" serves as an item ID used in conditional rules; \"Text\" is displayed to respondents." => "\"Үнэ цэнэ\" гэж нөхцөлийн дүрэмд хэрэглэгддэг эд зүйлийн ID-ээр үйлчилдэг; \"Текст\" гэж хариулагчдад тавигддаг."
// text.size: "This setting only resizes the input field and doesn't affect the width of the question box. To limit the accepted input length, go to <b>Validation → Maximum character limit</b>." => "Энэ тохиргоо нь зөвхөн оролтын талбарыг дахин тохируулдаг бөгөөд асуултын хайрцагны өргөнд нөлөөлдөггүй. Хүлээн зөвшөөрөгдсөн оролтын уртыг хязгаарлахын тулд <b>Validation→ Maximum character limit</b> руу орно уу."
// comment.rows: "Sets the number of displayed lines in the input field. If the input takes up more lines, the scroll bar will appear." => "Оролтын талбар дахь харуулсан мөрүүдийн тоог тогтооно. Хэрэв оролт нь илүү олон мөртэй бол хуйлмал тавиур гарч ирнэ."
// survey.mode: "Choose between: \"Editable\" - enables respondents to fill out your survey; \"Read-only\" - disables form editing." => "Аль нэгийг нь сонгох: \"Editable\" - таны судалгааг бөглөх боломжийг санал асуулгад оролцогчдын хувьд олгодог; \"Зөвхөн уншлага\" - хөгжлийн бэрхшээлтэй хүмүүс редакци үүсгэнэ."
// matrixdropdowncolumn.name: "A column ID that is not visible to respondents." => "Хариулагчдад харагдахгүй байгаа баганын ID."
// matrixdropdowncolumn.isUnique: "When enabled for a column, a respondent is required to provide a unique response for each question within this column." => "Баганыг авах боломжтой бол асуултад хариулагч нь энэ баганан доторх асуулт бүрд өвөрмөц хариулт өгөх шаардлагатай."
// matrixdropdowncolumn.rows: "Sets the number of displayed lines in the input field. If the input takes up more lines, the scroll bar will appear." => "Оролтын талбар дахь харуулсан мөрүүдийн тоог тогтооно. Хэрэв оролт нь илүү олон мөртэй бол хуйлмал тавиур гарч ирнэ."
// matrixdropdowncolumn.visibleIf: "Use the magic wand icon to set a conditional rule that determines column visibility." => "Ид шидийн wand icon-ийг ашиглан баганын харагдах байдлыг тодорхойлох нөхцөлтэй дүрмийг тогтоо."
// matrixdropdowncolumn.enableIf: "Use the magic wand icon to set a conditional rule that disables the read-only mode for the column." => "Шидэт wand зургыг ашиглан баганын зөвхөн унших хэв маягийг хаах нөхцөлтэй дүрмийг тогтоо."
// matrixdropdowncolumn.requiredIf: "Use the magic wand icon to set a conditional rule that prevents survey submission unless at least one nested question has an answer." => "Наад зах нь нэг үүрээ засах асуулт хариулт байхгүй л бол судалгаа явуулахаас сэргийлдэг нөхцөлийн дүрмийг тогтоохын тулд шидэт туузны зургыг ашигла."
// matrixdropdowncolumn.showInMultipleColumns: "When selected, creates an individual column for each choice option." => "Сонгогдсон тохиолдолд сонголт бүрд зориулж багана үүсгэнэ."
// pehelp.widthMode: "Choose from: \"Static\" - sets a fixed width; \"Responsive\" - makes the survey occupy the full width of the screen; \"Auto\" - applies either of the two depending on the question types used." => "Сонгоно уу: \"Статик\" - тогтмол өргөнийг тогтоох; \"Responsive\" - судалгааг дэлгэцийн бүрэн өргөнийг эзэлдэг болгодог; \"Авто\" - ашигласан асуултын төрлөөс хамааран аль нэгийг нь хэрэглэнэ."
// pehelp.logo: "Paste an image link (no size limits) or click the folder icon to browse a file from your computer (up to 64KB)." => "Зургийн холбоосыг (хэмжээ хязгаар байхгүй) эсвэл фолдерын icon дарж компьютерээсээ файлыг (64KB хүртэл) харна уу."
// pehelp.logoWidth: "Sets a logo width in CSS units (px, %, in, pt, etc.)." => "CSS нэгж (px, %, in, pt, гэх мэт) дээр логоны өргөнийг тогтооно."
// pehelp.logoHeight: "Sets a logo height in CSS units (px, %, in, pt, etc.)." => "CSS нэгж (px, %, in, pt г.м) дээр логоны өндрийг тогтооно."
// pehelp.logoFit: "Choose from: \"None\" - image maintains its original size; \"Contain\" - image is resized to fit while maintaining its aspect ratio; \"Cover\" - image fills the entire box while maintaining its aspect ratio; \"Fill\" - image is stretched to fill the box without maintaining its aspect ratio." => "Сонгоно уу: \"None\" - зураг анхны хэмжээгээ хадгалдаг; \"Агуулах\" - дүрсийг тал харьцаагаа хадгалахын зэрэгцээ тохируулахын тулд дахин тохируулдаг; \"Cover\" - дүрс нь тал харьцаагаа хадгалахын зэрэгцээ хайрцгийг бүхэлд нь дүүргэдэг; \"Fill\" - дүрс нь тал харьцаагаа хадгалахгүйгээр хайрцгийг дүүргэхийн тулд сунаж тогтсон."
// pehelp.showNavigationButtons: "Sets the visibility and location of navigation buttons on a page." => "Хуудас дээр навигацийн товчны харагдах байдал, байршлыг тогтооно."
// pehelp.showProgressBar: "Sets the visibility and location of a progress bar. The \"Auto\" value displays the progress bar above or below the survey header." => "Хэмжилтийн тавцангийн харагдах байдал, байршлыг тогтооно. \"Авто\" үнэ цэнэ нь судалгааны толгой гарчгийн дээр эсвэл түүнээс доош хөгжил дэвшлийн барыг харуулдаг."
// pehelp.showPreviewBeforeComplete: "Enable the preview page with all or answered questions only." => "Зөвхөн бүх асуултаар эсвэл хариулт бүхий урьдчилан харах хуудсыг боломжтой болго."
// pehelp.questionTitleLocation: "Applies to all questions within the survey. This setting can be overridden by title alignment rules at lower levels: panel, page, or question. A lower-level setting will override those on a higher level." => "Судалгааны бүх асуултад хамаарна. Энэ тохиргоог доод түвшний нэрийн зохицуулах дүрмээр давамгайлах боломжтой: panel, хуудас, эсвэл асуулт. Доод түвшний тохиргоо нь илүү өндөр түвшинд байгаа хүмүүсийг хүчингүй болгоно."
// pehelp.requiredMark: "A symbol or a sequence of symbols indicating that an answer is required." => "Хариу шаардлагатайг заасан бэлгэдэл буюу бэлгэ тэмдгийн дараалал."
// pehelp.questionStartIndex: "Enter a number or letter with which you want to start numbering." => "Дугаарлахыг хүссэн дугаар эсвэл захидлаа оруул."
// pehelp.questionErrorLocation: "Sets the location of an error message in relation to the question with invalid input. Choose between: \"Top\" - an error text is placed at the top of the question box; \"Bottom\" - an error text is placed at the bottom of the question box." => "Асуулттай холбоотой алдааны мессежийн байршлыг хүчингүй оруулсан байдлаар тогтооно. Аль нэгийг сонгоно уу: \"Топ\" - асуултын хайрцагны дээд хэсэгт алдаа текст байрлуулсан байна; \"Bottom\" - асуултын хайрцагны доод хэсэгт алдаа текст байрлуулна."
// pehelp.autoFocusFirstQuestion: "Select if you want the first input field on each page ready for text entry." => "Текст оруулахад бэлэн болсон хуудас бүр дээрх эхний оролтын талбарыг хүсвэл сонгоно уу."
// pehelp.questionOrder: "Keeps the original order of questions or randomizes them. The effect of this setting is only visible in the Preview tab." => "Асуултуудын анхны дарааллыг хадгалах эсвэл санамсаргүйгээр авч явдаг. Энэ тохиргооны үр нөлөө нь зөвхөн Preview таб-д харагдана."
// pehelp.maxTextLength: "For text entry questions only." => "Зөвхөн текст оруулах асуултуудад зориулна."
// pehelp.maxCommentLength: "For question comments only." => "Асуулт хариултын хувьд зөвхөн."
// pehelp.autoGrowComment: "Select if you want question comments and Long Text questions to auto-grow in height based on the entered text length." => "Асуулт хариулт болон Урт Текст асуултыг орсон текст урт дээр үндэслэн өндрөөс автоматаар өсгөхийг хүсвэл сонгоно уу."
// pehelp.allowResizeComment: "For question comments and Long Text questions only." => "Асуулт хариулт болон Урт текстийн асуултуудад зөвхөн."
// pehelp.calculatedValues: "Custom variables serve as intermediate or auxiliary variables used in form calculations. They take respondent inputs as source values. Each custom variable has a unique name and an expression it's based on." => "Үйлчилгээний хувьсагчид нь форм тооцоололд хэрэглэгддэг дундын буюу туслах хувьсагчид болж үйлчилдэг. Тэд хариулагчийн оруулсан хувь нэмрийг эх сурвалжийн үнэт зүйлс гэж үздэг. Custom хувьсагч бүр өвөрмөц нэртэй, дээр нь суурилсан илэрхийлэлтэй байдаг."
// pehelp.includeIntoResult: "Select if you wish the calculated value of the expression to be saved along with survey results." => "Тухайн илэрхийллийн тооцоолсон үнэ цэнийг судалгааны үр дүнгийн хамт хадгалахыг хүсвэл сонгоорой."
// pehelp.triggers: "A trigger is an event or condition that is based on an expression. Once the expression is evaluated to \"true\", a trigger sets off an action. Such an action can optionally have a target question it affects." => "Триггер гэдэг нь илэрхийлэлд тулгуурласан үйл явдал буюу нөхцөл байдлыг хэлж байгаа юм. Илэрхийлэлийг \"үнэн\" гэж үнэлсний дараа триггер үйлдэл гаргадаг. Ийм үйлдэл нь үүнд нөлөөлдөг байны асуултыг сонголтоор тавьж болно."
// pehelp.clearInvisibleValues: "Choose whether or not to clear values for questions hidden by conditional logic and when to do it." => "Нөхцөл байдлын логикоор нуусан асуултуудын үнэ цэнийг тодорхой болгох уу, хэзээ хийх үү гэдгийг сонго."
// pehelp.textUpdateMode: "Choose from: \"On lost focus\" - the value is updated when the input field loses focus; \"While typing\" - the value is updated in real-time, as users are typing." => "Сонгоно уу: \"Алдагдсан фокус дээр\" - оролтын талбар анхаарлаа алдсан үед үнэ цэнэ нь шинэчлэгддэг; \"Цахимаар бичих\" - хэрэглэгчид бичихийн хэрээр үнэ цэнэ нь бодит цаг хугацаанд шинэчлэгддэг."
// pehelp.columns: "The left value serves as a column ID used in conditional rules, the right value is displayed to respondents." => "Зүүн үнэ цэнэ нь нөхцөлийн дүрэмд хэрэглэгддэг баганын ID болж үйлчилдэг бөгөөд зөв үнэ цэнийг хариулагчдад үзүүлдэг."
// pehelp.rows: "The left value serves as a row ID used in conditional rules, the right value is displayed to respondents." => "Зүүн үнэ цэнэ нь нөхцөлийн дүрэмд хэрэглэгддэг мөрийн ID болж үйлчилдэг, зөв үнэ цэнийг хариулагчдад үзүүлдэг."
// pehelp.columnMinWidth: "Accepts CSS values (px, %, in, pt, etc.)." => "CSS-ийн үнэт зүйлсийг (px, %, in, pt г.м) хүлээн зөвшөөрдөг."
// pehelp.rowTitleWidth: "Accepts CSS values (px, %, in, pt, etc.)." => "CSS-ийн үнэт зүйлсийг (px, %, in, pt г.м) хүлээн зөвшөөрдөг."
// pehelp.cellErrorLocation: "Sets the location of an error message in relation to a cell with invalid input. The \"Inherit\" option applies the setting from the \"Error message alignment\" property." => "Хүчингүй оруулсан эстэй холбоотой алдааны мессежийн байршлыг тогтооно. \"Өв залгамж\" сонголт нь \"Error message alignment\" өмчийн тохиргоог хэрэгжүүлдэг."
// pehelp.keyDuplicationError: "When the \"Prevent duplicate responses\" property is enabled, a respondent attempting to submit a duplicate entry will receive the following error message." => "\"Хуулбарласан хариу арга хэмжээ авахаас урьдчилан сэргийлье\" өмчийг боломжтой болгоход хуулбарлан оруулахыг оролдсон хариулагч дараах алдааны мэдээг хүлээн авна."
// pehelp.totalExpression: "Allows you to calculate total values based on an expression. The expression can include basic calculations (`{q1_id} + {q2_id}`), Boolean expressions (`{age} > 60`) and functions ('iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, etc.)." => "Илэрхийллийн үндсэн дээр нийт үнэт зүйлсийг тооцох боломжийг танд олгож байна. Илэрхийлэл нь үндсэн тооцоо ('{q1_id} + {q2_id}'), Бөүлийн илэрхийллүүд ('{нас} > 60') функцууд ('iif()', 'өнөөдөр()', 'мин()', 'мин()', 'max()', 'avg()', г.м."
// pehelp.confirmDelete: "Triggers a prompt asking to confirm the row deletion." => "Дарааллыг арилгахыг батлахыг хүссэн өдөөлтийг өдөөв."
// pehelp.copyDefaultValueFromLastEntry: "Duplicates answers from the last row and assigns them to the next added dynamic row." => "Сүүлийн мөрнөөс хариултуудыг хуулбарлаж, дараагийн нэмэлт динамик мөрөнд хуваарилна."
// pehelp.description: "Type a subtitle." => "Дэд гарчиг бичнэ."
// pehelp.locale: "Choose a language to begin creating your survey. To add a translation, switch to a new language and translate the original text here or in the Translations tab." => "Судалгаагаа хийж эхлэх хэл сонго. Орчуулга нэмэхийн тулд шинэ хэл рүү шилжиж, эх бичвэрийг энд эсвэл Translations tab-д орчуулна."
// pehelp.detailPanelMode: "Sets the location of a details section in relation to a row. Choose from: \"None\" - no expansion is added; \"Under the row\" - a row expansion is placed under each row of the matrix; \"Under the row, display one row expansion only\" - an expansion is displayed under a single row only, the remaining row expansions are collapsed." => "Нарийвчилсан хэсгийн байршлыг дараалалтай холбон тогтооно. Сонголтоос: \"Үгүй\" - ямар ч өргөтгөл нэмэгдсэнгүй; \"Мөрийн доор\" - матрицын мөр бүрийн доор эгнээний өргөтгөл байрлуулна; \"Мөрийн доор зөвхөн нэг эгнээний өргөтгөлийг үзүүл\" - зөвхөн нэг эгнээний дор өргөтгөл үзүүлдэг, үлдсэн эгнээний өргөтгөлүүд нь нурдаг."
// pehelp.imageFit: "Choose from: \"None\" - image maintains its original size; \"Contain\" - image is resized to fit while maintaining its aspect ratio; \"Cover\" - image fills the entire box while maintaining its aspect ratio; \"Fill\" - image is stretched to fill the box without maintaining its aspect ratio." => "Сонгоно уу: \"None\" - зураг анхны хэмжээгээ хадгалдаг; \"Агуулах\" - дүрсийг тал харьцаагаа хадгалахын зэрэгцээ тохируулахын тулд дахин тохируулдаг; \"Cover\" - дүрс нь тал харьцаагаа хадгалахын зэрэгцээ хайрцгийг бүхэлд нь дүүргэдэг; \"Fill\" - дүрс нь тал харьцаагаа хадгалахгүйгээр хайрцгийг дүүргэхийн тулд сунаж тогтсон."
// pehelp.autoGrow: "Gradually increases the height of the input field as data is being entered. Overrides the \"Input field height (in lines)\" setting." => "Өгөгдлийг оруулж байгаа үед оролтын талбайн өндрийг аажмаар нэмэгдүүлдэг. \"Input талбарын өндрийг (in lines)\" тохиргоог давхардна."
// pehelp.allowResize: "The resize handle (or grip) appears in the corner and can be dragged to alter the size of the input field." => "Resize бариул (эсвэл бариул) буланд гарч, оролтын талбарын хэмжээг өөрчлөхийн тулд чирэгдэж болно."
// pehelp.timeLimit: "A time interval in seconds after which the survey auto-advances to the Thank You page." => "Цаг хугацааны интервал секундын дотор. Үүний дараа судалгаа автоматаар \"Thank You\" хуудас руу орж байна."
// pehelp.timeLimitPerPage: "A time interval in seconds after which the survey auto-advances to the next page." => "Судалгааны автоматаар дараагийн хуудас руу урагшлах секундын дотор цаг хугацаа."
// page.timeLimit: "A time interval in seconds after which the survey auto-advances to the next page." => "Судалгааны автоматаар дараагийн хуудас руу урагшлах секундын дотор цаг хугацаа."
// page.visibleIf: "Use the magic wand icon to set a conditional rule that determines page visibility." => "Илбийн wand icon-ийг ашиглан хуудасны харагдах байдлыг тодорхойлох нөхцөлтэй дүрэм тогтооно."
// page.enableIf: "Use the magic wand icon to set a conditional rule that disables the read-only mode for the page." => "Зөвхөн хуудсанд зориулсан унших хэв маягийг хаах нөхцөлтэй дүрмийг тогтоохын тулд шидэт wand зургыг ашигла."
// page.requiredIf: "Use the magic wand icon to set a conditional rule that prevents survey submission unless at least one nested question has an answer." => "Наад зах нь нэг үүрээ засах асуулт хариулт байхгүй л бол судалгаа явуулахаас сэргийлдэг нөхцөлийн дүрмийг тогтоохын тулд шидэт туузны зургыг ашигла."
// page.questionTitleLocation: "Applies to all questions within this page. If you want to override this setting, define title alignment rules for individual questions or panels. The \"Inherit\" option applies the survey-level setting (\"Top\" by default)." => "Энэ хуудсан дахь бүх асуултад хамаарна. Хэрэв та энэ тохиргоог хүчингүй болгохыг хүсвэл хувь хүний асуулт эсвэл панелуудын нэрийн зохицуулах дүрмүүдийг тодорхойл. \"Өв залгамж\" сонголт нь судалгааны түвшний тохиргоог (\"Top\" by default) хэрэгжүүлдэг."
// page.questionErrorLocation: "Sets the location of an error message in relation to the question with invalid input. Choose between: \"Top\" - an error text is placed at the top of the question box; \"Bottom\" - an error text is placed at the bottom of the question box. The \"Inherit\" option applies the survey-level setting (\"Top\" by default)." => "Асуулттай холбоотой алдааны мессежийн байршлыг хүчингүй оруулсан байдлаар тогтооно. Аль нэгийг сонгоно уу: \"Топ\" - асуултын хайрцагны дээд хэсэгт алдаа текст байрлуулсан байна; \"Bottom\" - асуултын хайрцагны доод хэсэгт алдаа текст байрлуулна. \"Өв залгамж\" сонголт нь судалгааны түвшний тохиргоог (\"Top\" by default) хэрэгжүүлдэг."
// page.questionOrder: "Keeps the original order of questions or randomizes them. The \"Inherit\" option applies the survey-level setting (\"Original\" by default). The effect of this setting is only visible in the Preview tab." => "Асуултуудын анхны дарааллыг хадгалах эсвэл санамсаргүйгээр авч явдаг. \"Өв залгамж\" сонголт нь судалгааны түвшний тохиргоог (\"Оригинал\" дефолтоор) хэрэгжүүлдэг. Энэ тохиргооны үр нөлөө нь зөвхөн Preview таб-д харагдана."
// page.showNavigationButtons: "Sets the visibility of navigation buttons on the page. The \"Inherit\" option applies the survey-level setting, which defaults to \"Visible\"." => "Хуудсан дээр навигацийн товчны харагдах байдлыг тогтоо. \"Өв залгамжлах\" хувилбар нь \"Үзэгдэх\" гэсэн сонголт бүхий судалгааны түвшний тохиргоог хэрэгжүүлдэг."
// pehelp.panelsState: "Choose from: \"Locked\" - users cannot expand or collapse panels; \"Collapse all\" - all panels start in a collapsed state; \"Expand all\" - all panels start in an expanded state; \"First expanded\" - only the first panel is initially expanded." => "Сонгоно уу: \"Locked\" - хэрэглэгчид панелуудыг өргөтгөх, нураах боломжгүй; \"Бүх нуралт\" - бүх панел нурсан байдлаас эхэлнэ; \"Бүх хүрээг өргөтгөнө\" - бүх панелууд өргөтгөсөн байдлаас эхэлнэ; \"First expanded\" - зөвхөн эхний панел нь эхэндээ өргөжсөн."
// pehelp.imageLinkName: "Enter a shared property name within the array of objects that contains the image or video file URLs you want to display in the choice list." => "Сонгосон жагсаалтанд харуулахыг хүссэн зураг эсвэл видео файл URL-уудыг агуулсан олон тооны эд зүйлсийн дотор хуваалцсан өмчийн нэрийг оруулна уу."
// pehelp.choices: "The left value serves as an item ID used in conditional rules, the right value is displayed to respondents." => "Зүүн үнэ цэнэ нь нөхцөлийн дүрэмд хэрэглэгддэг зүйл ID, зөв үнэ цэнийг хариулагчдад үзүүлдэг."
// pehelp.title: "Type a user-friendly title to display." => "Хэрэглэгчдэд тохиромжтой нэр бичиж харуулах."
// pehelp.waitForUpload: "Ensures that users won't complete the survey until files are uploaded." => "Файлуудыг татаж авах хүртэл хэрэглэгчид судалгааг хийж дуусгахгүй байхыг анхаарна."
// pehelp.minWidth: "Accepts CSS values (px, %, in, pt, etc.)." => "CSS-ийн үнэт зүйлсийг (px, %, in, pt г.м) хүлээн зөвшөөрдөг."
// pehelp.maxWidth: "Accepts CSS values (px, %, in, pt, etc.)." => "CSS-ийн үнэт зүйлсийг (px, %, in, pt г.м) хүлээн зөвшөөрдөг."
// pehelp.width: "Accepts CSS values (px, %, in, pt, etc.)." => "CSS-ийн үнэт зүйлсийг (px, %, in, pt г.м) хүлээн зөвшөөрдөг."
// pehelp.useDisplayValuesInDynamicTexts: "In single- and multiple-selection question types, each choice option has an ID and display value. When selected, this setting shows a display value instead of an ID value in HTML questions and dynamic titles and descriptions of survey elements." => "Ганц болон олон сонголттой асуултын төрлүүдэд сонголт бүр ID болон харуулах үнэ цэнэтэй байдаг. Энэ тохиргоо нь сонгогдсон тохиолдолд HTML асуулт болон динамик гарчиг, судалгааны элементүүдийн тодорхойлолтод ID үнэ цэнийн оронд харуулах үнэ цэнийг харуулдаг."
// pehelp.clearIfInvisible: "Choose whether or not to clear question values hidden by conditional logic and when to do it. The \"Inherit\" option applies the survey-level setting (\"Upon survey completion\" by default)." => "Нөхцөл байдлын логикоор нуусан үнэт зүйлсийг тодорхой болгох уу, хэзээ хийх вэ гэдгийг сонго. \"Өв залгамж\" сонголт нь судалгааны түвшний тохиргоог (\"Upon survey completion\" -ийг дефолтоор) хэрэгжүүлдэг."
// pehelp.choicesFromQuestionMode: "Choose from: \"All\" - copies all choice options from the selected question; \"Selected\" - dynamically copies only selected choice options; \"Unselected\" - dynamically copies only unselected choice options. The \"None\" and \"Other\" options are copied by default if enabled in the source question." => "Сонгоно уу: \"Бүгд\" - сонгосон асуултаас сонголт хийх бүх сонголтыг хуулбарласан; \"Сонгосон\" - динамикаар зөвхөн сонгосон сонголтын хувилбаруудыг хуулбарласан; \"Сонгогдоогүй\" - динамикаар зөвхөн сонгогдоогүй сонголтыг хувилдаг. \"None\" болон \"Бусад\" сонголтууд нь эх сурвалжийн асуулгад боломжтой бол default-ээр хуулагддаг."
// pehelp.showOtherItem: "When selected, users can include additional input in a separate comment box." => "Сонгогдсон тохиолдолд хэрэглэгчид тусад нь тайлбарын хайрцагт нэмэлт оруулах боломжтой."
// pehelp.separateSpecialChoices: "Displays each special choice option (\"None\", \"Other\", \"Select All\") on a new line, even when using a multiple-column layout." => "Тусгай сонголт бүрийг (\"None\", \"Other\", \"Select All\") шинэ мөр дээр, бүр олон баганатай загварыг ашиглахдаа ч үзүүлдэг."
// pehelp.path: "Specify the location within the service dataset where the target array of objects is located. Leave empty if the URL already points to the array." => "Зорилтот олон тооны объект байрладаг үйлчилгээний мэдээллийн сан доторх байршлыг тодорхойл. URL аль хэдийн багц руу зааж байгаа бол хоосон орхи."
// pehelp.titleName: "Enter a uniform property name within the array of objects that contains the values you want to display in the choice list." => "Сонголтын жагсаалтад харуулахыг хүссэн үнэт зүйлсээ агуулсан олон тооны эд зүйлсийн дотор дүрэмт өмчийн нэрийг оруулна уу."
// pehelp.allowEmptyResponse: "Select to allow the service to return an empty response or array." => "Хоосон хариу эсвэл багцыг үйлчлэлд буцааж өгөхийг сонго."
// pehelp.choicesVisibleIf: "Use the magic wand icon to set a conditional rule that determines the visibility of all choice options." => "Бүх сонголтын харагдах байдлыг тодорхойлох нөхцөлтэй дүрмийг тогтоохын тулд шидэт wand зургыг ашиглана уу."
// pehelp.rateValues: "The left value serves as an item ID used in conditional rules, the right value is displayed to respondents." => "Зүүн үнэ цэнэ нь нөхцөлийн дүрэмд хэрэглэгддэг зүйл ID, зөв үнэ цэнийг хариулагчдад үзүүлдэг."
// rating.displayMode: "\"Auto\" selects between the \"Buttons\" and \"Dropdown\" modes based on the available width. When the width is insufficient to display buttons, the question displays a dropdown." => "\"Auto\" нь боломжит өргөн дээр суурилсан \"Buttons\" болон \"Dropdown\" загваруудын хооронд сонголт хийнэ. Өргөн нь товчлууруудыг харуулахад хангалтгүй үед асуулт нь дусал дуслыг харуулдаг."
// pehelp.valuePropertyName: "Allows you to connect questions that produce results in different formats. When such questions are linked together using a join identifier, this shared property stores selected question values." => "Өөр өөр форматаар үр дүн гаргадаг асуултуудыг холбох боломжийг танд олгож байна. Ийм асуултуудыг join identifier ашиглан холбох үед энэ хуваалцсан өмч хөрөнгийн дэлгүүрүүд нь сонгосон асуултын үнэ цэнийг хадгалдаг."
// pehelp.searchEnabled: "Select if you want to update the drop-down menu contents to match the search query that a user is typing in the input field." => "Хэрэглэгчийн оролтын талбарт бичиж байгаа хайлтын query-тэй тохируулахын тулд дусал цэсний агуулгыг шинэчлэхийг хүсвэл сонгоно уу."
// pehelp.valueTrue: "A value to save in survey results when respondents give a positive answer." => "Асуултад хариулсан хүмүүс эерэг хариулт өгөхөд судалгааны үр дүнг хадгалах нь үнэ цэнэтэй."
// pehelp.valueFalse: "A value to save in survey results when respondents give a negative answer." => "Судалгаанд оролцогчдын сөрөг хариулт өгөхөд судалгааны үр дүнг хадгалах үнэ цэнэ."
// pehelp.showPreview: "It's not recommended to disable this option as it overrides the Preview image and makes it hard for a user to understand whether the files have been uploaded." => "Preview зургийг давхардуулдаг тул энэ сонголтыг хүчингүй болгохыг санал болгодоггүй бөгөөд хэрэглэгчид файлуудыг татаж авсан эсэхийг ойлгоход хэцүү болгодог."
// pehelp.needConfirmRemoveFile: "Triggers a prompt asking to confirm the file deletion." => "Файлын устгалыг батлахыг хүссэн өдөөлтийг өдөөж байна."
// pehelp.selectToRankEnabled: "Enable to rank only selected choices. Users will drag selected items from the choice list to order them within the ranking area." => "Зөвхөн сонгосон сонголтуудыг зэрэгцүүлэх боломжийг олгоно. Хэрэглэгчид сонгосон зүйлсийг сонгосон жагсаалтаас чирч, зэрэглэлийн бүс дотор тушаана."
// pehelp.dataList: "Enter a list of choices that will be suggested to the respondent during input." => "Санал болгох сонголтуудын жагсаалтыг оруулах үед хариулагчид санал болгох болно."
// pehelp.inputSize: "The setting only resizes the input fields and doesn't affect the width of the question box." => "Тохиргоо нь зөвхөн оролтын талбаруудыг дахин тохируулдаг бөгөөд асуултын хайрцагны өргөнд нөлөөлдөггүй."
// pehelp.itemTitleWidth: "Sets consistent width for all item labels in pixels" => "Пикселд бүх зүйлийн шошгоны тогтмол өргөнийг тогтоох"
// pehelp.contentMode: "The \"Auto\" option automatically determines the suitable mode for display - Image, Video, or YouTube - based on the source URL provided." => "\"Авто\" сонголт нь эх сурвалж URL-д суурилсан зураг, видео, эсвэл YouTube - харуулах тохиромжтой хэв маягийг автоматаар тодорхойлдог."
// pehelp.altText: "Serves as a substitute when the image cannot be displayed on a user's device and for accessibility purposes." => "Хэрэглэгчийн төхөөрөмж дээр болон хүртээмжийн зорилгоор дүрсийг харуулах боломжгүй үед орлуулагчаар үйлчилнэ."
// pehelp.rateColorMode: "Defines the color of the selected emoji when the Rating icon type is set to \"Smileys\". Choose between: \"Default\" - the selected emoji appears in default survey color; \"Scale\" - the selected emoji inherits color from the rating scale." => "Rating icon төрлийн \"Smileys\" гэж тогтооход сонгосон эможигийн өнгийг тодорхойлно. Аль нэгийг нь сонгоно уу: \"Default\" - сонгосон эможи нь стандарт судалгааны өнгөөр гарч ирдэг; \"Scale\" - сонгосон эможи нь үнэлгээний хэмжүүрээс өнгийг өвлөн авдаг."
// expression.name: "An expression ID that is not visible to respondents." => "Хариулагчдад харагдахгүй илэрхийлэл ID."
// expression.description: "Type an expression subtitle." => "Өгүүлбэрийн дэд гарчиг бичнэ."
// expression.expression: "An expression can include basic calculations (`{q1_id} + {q2_id}`), conditions (`{age} > 60`), and functions ('iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, etc.)." => "Илэрхийлэл нь үндсэн тооцоо ('{q1_id} + {q2_id}'), нөхцөл ('{age} > 60'' болон функцууд ('iif()', 'өнөөдөр()', 'мин()', 'мин()', 'max()', 'avg()', г.м."
// pehelp.storeOthersAsComment: "Select to store the \"Other\" option value as a separate property in survey results." => "\"Бусад\" сонголтын үнэ цэнийг судалгааны үр дүнд тусад нь өмч болгон хадгалахыг сонго."
// p.swapOrder: "Swap the order of Yes and No" => "Тийм, Үгүй гэсэн дарааллыг соль"
// p.itemTitleWidth: "Item label width (in px)" => "Барааны шошгоны өргөн (px-д)"
// p.selectToRankEmptyRankedAreaText: "Text to show if all options are selected" => "Бүх сонголтыг сонгосон эсэхийг харуулах текст"
// p.selectToRankEmptyUnrankedAreaText: "Placeholder text for the ranking area" => "Хаягийн бүсэд байрлах газар эзэмшигчийн текст"
// pe.autoAdvanceAllowComplete: "Complete the survey automatically" => "Судалгааг автоматаар дуусгах"
// pehelp.autoAdvanceAllowComplete: "Select if you want the survey to complete automatically after a respondent answers all questions." => "Асуултад хариулсан хүн бүх асуултанд хариулсны дараа судалгааг автоматаар дуусгахыг хүсвэл сонго."
// masksettings.saveMaskedValue: "Save masked value in survey results" => "Судалгааны үр дүнд багласан үнэ цэнийг хэмнэх"
// patternmask.pattern: "Value pattern" => "Үнэ цэнийн загвар"
// datetimemask.min: "Minimum value" => "Хамгийн бага үнэ цэнэ"
// datetimemask.max: "Maximum value" => "Хамгийн их үнэ цэнэ"
// numericmask.allowNegativeValues: "Allow negative values" => "Сөрөг үнэт зүйлсийг зөвшөөр"
// numericmask.thousandsSeparator: "Thousands separator" => "Мянга мянган тусгаарлагч"
// numericmask.decimalSeparator: "Decimal separator" => "Decimal тусгаарлагч"
// numericmask.precision: "Value precision" => "Үнэ цэнийн нарийвчлал"
// numericmask.min: "Minimum value" => "Хамгийн бага үнэ цэнэ"
// numericmask.max: "Maximum value" => "Хамгийн их үнэ цэнэ"
// currencymask.prefix: "Currency prefix" => "Валютын ханш"
// currencymask.suffix: "Currency suffix" => "Валютын suffix"
// pe.maskType: "Input mask type" => "Оролтын багны төрөл"
// maskTypes.patternmask: "Pattern" => "Загвар"
// maskTypes.numericmask: "Numeric" => "Тоо нь"
// maskTypes.datetimemask: "Date and Time" => "Огноо, цаг"
// maskTypes.currencymask: "Currency" => "Валютын ханш"
// tabs.mask: "Input Mask Settings" => "Оролт Маск тохиргоо"
// pe.pattern_placeholder: "Ex.: +1(999)-999-99-99" => "Экс.: +1(999)-999-99-99"
// pe.datetimepattern_placeholder: "Ex.: mm/dd/yyyy" => "Экс.: мм/д/yyy"
// pe.currencyprefix_placeholder: "Ex.: $" => "Экс.: $"
// pe.currencysuffix_placeholder: "Ex.: USD" => "Экс.: USD"
// pv.textWrapEnabled: "Wrap choices" => "Боолт сонголт"
// question.textWrapEnabled: "Long texts in choice options will automatically generate line breaks to fit within the drop-down menu. Unselect if you want the texts to clip." => "Сонголтын сонголтуудын урт текстүүд нь дусал цэсний дотор багтахын тулд автоматаар шугамын завсар үүсгэх болно. Хэрэв та бичвэрүүдийг хайчлахыг хүсвэл сонгогдоогүй."
// masksettings.saveMaskedValue: "Select if you want to store the question value with an applied mask in survey results." => "Асуултын үнэ цэнийг судалгааны үр дүнд хэрэгжүүлсэн багаар хадгалахыг хүсэж байгаа эсэхээ сонго."
// patternmask.pattern: "The pattern can contain string literals and the following placeholders: `9` - for a digit; `a` - for an upper- or lower-case letter; `#` - for a digit or an upper- or lower-case letter. Use backslash `\\` to escape a character." => "Загвар нь уянгын шууд болон дараах байрлагчийг агуулж болно: '9' - тоон хувьд; 'a' - дээд буюу доод талын үсгийн хувьд; '#' - цифр эсвэл дээд, эсвэл доод кейс үсгийн хувьд. Дүрээс зугтахын тулд backslash '\\' ашигла."
// datetimemask.pattern: "The pattern can contain separator characters and the following placeholders: `m` - for month number; `mm` - for month number, with leading zero for single-digit values; `d` - for day of the month; `dd` - for day of the month, with leading zero for single-digit values; `yy` - for the last two digits of the year; `yyyy` - for a four-digit year." => "Загвар нь тусгаарлагч үсэг болон дараах байрлагчуудыг агуулж болно: 'm' - сарын дугаараар; 'мм' - сарын тоогоор, ганц цифрээр үнэ цэнэтэй тэргүүлэх нөлөө бүхий; 'd' - сарын өдөр; 'dd' - ганц цифрээр үнэ цэнэд тэргүүлэх нөлөө бүхий сарын өдөр; 'yy' - жилийн сүүлийн хоёр цифрээр; 'yyyy' - дөрвөн цифрээр жил."
// numericmask.decimalSeparator: "A symbol used to separate the fractional part from the integer part of a displayed number." => "Жижиг хэсгийг үзүүлсэн дугаарын интежер хэсгээс салгахад ашигладаг бэлгэдэл."
// numericmask.thousandsSeparator: "A symbol used to separate the digits of a large number into groups of three." => "Том тооны тоонуудыг 3 бүлэг болгон салгахад хэрэглэгддэг бэлгэдэл."
// numericmask.precision: "Limits how many digits to retain after the decimal point for a displayed number." => "Үзүүлсэн дугаарын хувьд decimal цэгийн дараа хэдэн цифрийг хадгалахыг хязгаарлана."
// currencymask.prefix: "One or several symbols to be displayed before the value." => "Үнэ цэнийн өмнө үзүүлэх нэг эсвэл хэд хэдэн бэлгэдлүүдийг."
// currencymask.suffix: "One or several symbols to be displayed after the value." => "Үнэ цэнийн дараа үзүүлэх нэг эсвэл хэд хэдэн бэлгэдлүүдийг."
// ed.translationSource: "Source: " => "Эх сурвалж: "
// ed.translationTarget: "Target: " => "Зорилго: "
// ed.pagePlaceHolder: "The page is empty. Drag an element from the toolbox or click the button below." => "Хуудас хоосон байна. Багажны хайрцагнаас элементийг чирэх эсвэл доорх товчийг дарна уу."
// maskTypes.none: "None" => "Хэн ч биш"
// itemvalue@rows.visibleIf: "Make the row visible if" => "Хэрэв эгнээг ил гаргах"
// itemvalue@rows.enableIf: "Make the row editable if" => "Хэрэв эгнээг хянан засварлах боломжтой болго"
// signaturepad.placeholderReadOnly: "Placeholder text in read-only or preview mode" => "Зөвхөн унших эсвэл урьдчилан харах хэлбэрээр placeholder текст"
// pe.textWrapEnabled: "Wrap choices" => "Боолт сонголт"
// image.contentMode: "The \"Auto\" option automatically determines the suitable mode for display - Image, Video, or YouTube - based on the source URL provided." => "\"Авто\" сонголт нь эх сурвалж URL-д суурилсан зураг, видео, эсвэл YouTube - харуулах тохиромжтой хэв маягийг автоматаар тодорхойлдог."
// imagepicker.contentMode: "Choose between \"Image\" and \"Video\" to set the content mode of the media selector. If \"Image\" is selected, ensure that all options provided are image files in the following formats: JPEG, GIF, PNG, APNG, SVG, BMP, ICO. Similarly, if \"Video\" is selected, ensure that all options are direct links to video files in the following formats: MP4, MOV, WMV, FLV, AVI, MKV. Please note that YouTube links are not supported for video options." => "Хэвлэл мэдээллийн хэрэгслийн сонгогчийн агуулгын хэв маягийг тогтоохын тулд \"Image\" болон \"Video\" хоёрын аль нэгийг сонго. Хэрэв \"Зураг\" гэж сонгосон бол өгөгдсөн бүх хувилбарууд нь дараах форматаар зургийн файлууд болохыг анхаарна уу: JPEG, GIF, PNG, APNG, SVG, BMP, ICO. Үүнтэй адилаар \"Video\" нь сонгогдвол бүх сонголт нь дараах форматаар видео файлуудын шууд холбоосууд болох MP4, MOV, WMV, FLV, AVI, MKV гэсэн форматаар байгаа эсэхийг баталгаажуулаарай. YouTube-ийн холбоосууд видео хувилбараар дэмжигдээгүйг анхаарна уу."
// ed.selectFile: "Select a file" => "Файлыг сонгох"
// ed.removeFile: "Remove the file" => "Файлыг хасах"
// pe.searchMode: "Search Mode" => "Хайлтын Мод"
// ed.surveyPlaceHolderMobile: "Click the \"Add Question\" button below to start creating your form." => "Доорх \"Асуулт нэмэх\" товчийг дарж формоо үүсгэж эхэлнэ."
// ed.pagePlaceHolderMobile: "Click the \"Add Question\" button below to add a new element to the page." => "Хуудас дээр шинэ элемент нэмэхийн тулд доорх \"Асуулт нэмэх\" товчийг дарна уу."
// ed.panelPlaceHolderMobile: "Click the \"Add Question\" button below to add a new element to the panel." => "Доорх \"Асуулт нэмэх\" товчийг дарж панел дээр шинэ элемент нэмнэ."
// ed.imagePlaceHolderMobile: "Click the button below and choose an image to upload" => "Доорх товчийг дарж татаж авах зургийг сонгоно уу"
// coloralpha.opacity: "Opacity" => "Бүдүүлэг байдал"
// font.family: "Font family" => "Фонтын гэр бүл"
// font.color: "Color" => "Өнгө"
// font.placeholderColor: "Placeholder color" => "Газар эзэмшигчийн өнгө"
// font.size: "Size" => "Хэмжээ"
// theme.themeName: "Theme" => "Сэдэв"
// theme.isPanelless: "Question appearance" => "Асуулт хариултын төрх"
// theme.editorPanel: "Background and corner radius" => "Ар талын болон булангийн радиус"
// theme.questionPanel: "Background and corner radius" => "Ар талын болон булангийн радиус"
// theme.primaryColor: "Accent color" => "Акцент өнгө"
// theme.panelBackgroundTransparency: "Panel background opacity" => "Панелийн ар талын харанхуй байдал"
// theme.questionBackgroundTransparency: "Question background opacity" => "Асуулт хариултын нөхцөл байдал"
// theme.fontSize: "Font size" => "Фонтын хэмжээ"
// theme.scale: "Scale" => "Хэмжүүр"
// theme.cornerRadius: "Corner radius" => "Булангийн радиус"
// theme.pageTitle: "Title font" => "Нүүр фонт"
// theme.pageDescription: "Description font" => "Дүрслэлийн фонт"
// theme.questionTitle: "Title font" => "Нүүр фонт"
// theme.questionDescription: "Description font" => "Дүрслэлийн фонт"
// theme.editorFont: "Font" => "Фонт"
// theme.backgroundOpacity: "Opacity" => "Бүдүүлэг байдал"
// theme.--sjs-font-family: "Font family" => "Фонтын гэр бүл"
// theme.--sjs-general-backcolor-dim: "Background color" => "Ар талын өнгө"
// theme.--sjs-primary-backcolor: "Accent background" => "Акцентийн гарал үүсэл"
// theme.--sjs-primary-forecolor: "Accent foreground" => "Акцентийн өмнө"
// theme.--sjs-shadow-small: "Shadow effects" => "Сүүдрийн нөлөө"
// theme.--sjs-shadow-inner: "Shadow effects" => "Сүүдрийн нөлөө"
// theme.--sjs-border-default: "Colors" => "Өнгө"
// header@header.headerView: "View" => "Үзэх"
// header@header.logoPosition: "Logo position" => "Лого байрлал"
// header@header.surveyTitle: "Survey title font" => "Судалгааны нэрийн фонт"
// header@header.surveyDescription: "Survey description font" => "Судалгааны тодорхойлолтын фонт"
// header@header.headerTitle: "Survey title font" => "Судалгааны нэрийн фонт"
// header@header.headerDescription: "Survey description font" => "Судалгааны тодорхойлолтын фонт"
// header@header.inheritWidthFrom: "Content area width" => "Агуулгын бүсийн өргөн"
// header@header.textAreaWidth: "Text width" => "Текстийн өргөн"
// header@header.backgroundColorSwitch: "Background color" => "Ар талын өнгө"
// header@header.backgroundImage: "Background image" => "Ар талын зураг"
// header@header.backgroundImageOpacity: "Opacity" => "Бүдүүлэг байдал"
// header@header.overlapEnabled: "Overlap" => "Давхар"
// header@header.logoPositionX: "Logo position" => "Лого байрлал"
// header@header.titlePositionX: "Title position" => "Нүүр албан тушаал"
// header@header.descriptionPositionX: "Description position" => "Тодорхойлолтын байрлал"
// weight.400: "Regular" => "Тогтмол"
// weight.600: "Heavy" => "Хүнд"
// weight.700: "Semi-bold" => "Хагас зоригтой"
// weight.800: "Bold" => "Болд"
// backgroundImageFit.auto: "Auto" => "Авто"
// backgroundImageFit.cover: "Cover" => "Хөшиг"
// backgroundImageFit.contain: "Contain" => "Агуулах"
// backgroundImageFit.fill: "Stretch" => "Шээс"
// backgroundImageFit.tile: "Tile" => "Тил"
// backgroundImageAttachment.fixed: "Fixed" => "Зассан"
// backgroundImageAttachment.scroll: "Scroll" => "Хуйлмал бичиг"
// headerView.basic: "Basic" => "Үндсэн"
// headerView.advanced: "Advanced" => "Өндөр хөгжсөн"
// inheritWidthFrom.survey: "Same as survey" => "Судалгаатай адил"
// inheritWidthFrom.container: "Fit to container" => "Сав баглаа боодолд тохирно"
// backgroundColorSwitch.none: "None" => "Хэн ч биш"
// backgroundColorSwitch.accentColor: "Accent color" => "Акцент өнгө"
// backgroundColorSwitch.custom: "Custom" => "Үйлчилгээ"
// colorPalette.light: "Light" => "Гэрэл"
// colorPalette.dark: "Dark" => "Харанхуй"
// isPanelless.false: "Default" => "Дефолт"
// isPanelless.true: "Without Panels" => "Панелгүйгээр"
// theme.cornerRadius: "Corner radius" => "Булангийн радиус"
// theme.fontFamily: "Font family" => "Фонтын гэр бүл"
// theme.fontWeightRegular: "Regular" => "Тогтмол"
// theme.fontWeightHeavy: "Heavy" => "Хүнд"
// theme.fontWeightSemiBold: "Semi-bold" => "Хагас зоригтой"
// theme.fontWeightBold: "Bold" => "Болд"
// theme.color: "Color" => "Өнгө"
// theme.placeholderColor: "Placeholder color" => "Газар эзэмшигчийн өнгө"
// theme.size: "Size" => "Хэмжээ"
// theme.opacity: "Opacity" => "Бүдүүлэг байдал"
// ed.toolboxFilteredTextPlaceholder: "Type to search..." => "Хайлт хийх төрөл..."
// ed.toolboxNoResultsFound: "No results found" => "Ямар ч үр дүн олдсонгүй"
// paneldynamic.tabTitlePlaceholder: "Tab title placeholder" => "Таб нэрийн хуудас эзэмшигч"
// theme.--sjs-special-red: "Error messages" => "Алдааны мессеж"
// paneldynamic.tabTitlePlaceholder: "A fallback text for tab titles that applies when the tab title pattern doesn't produce a meaningful value." => "Таб нэрийн загвар утга учиртай үнэ цэнийг бий болгодоггүй үед хамаарах tab title-ийн уналтын текст."
// theme.fontColor: "Font color" => "Фонтын өнгө"
// theme.backgroundColor: "Background color" => "Ар талын өнгө"
// pe.questionTitleWidth: "Question title width" => "Асуулт нэрийн өргөн"
// pe.fileInputPlaceholder: "Select a file or paste a file link..." => "Файл сонгох эсвэл файлын холбоосыг наа..."
// panelbase.questionTitleWidth: "Ex.: 200px" => "Экс: 200px"
// panel.questionTitleWidth: "Sets consistent width for question titles when they are aligned to the left of their question boxes. Accepts CSS values (px, %, in, pt, etc.)." => "Асуултын хайрцгуудынхаа зүүн талд эгнэн зогсож байх үед асуултын нэрний тогтмол өргөнийг тогтоо. CSS-ийн үнэт зүйлсийг (px, %, in, pt г.м) хүлээн зөвшөөрдөг."
// page.questionTitleWidth: "Sets consistent width for question titles when they are aligned to the left of their question boxes. Accepts CSS values (px, %, in, pt, etc.)." => "Асуултын хайрцгуудынхаа зүүн талд эгнэн зогсож байх үед асуултын нэрний тогтмол өргөнийг тогтоо. CSS-ийн үнэт зүйлсийг (px, %, in, pt г.м) хүлээн зөвшөөрдөг."
// pe.commentAreaRows: "Comment area height (in lines)" => "Тайлбар хэсгийн өндөр (мөрөнд)"
// pehelp.commentAreaRows: "Sets the number of displayed lines in text areas for question comments. In the input takes up more lines, the scroll bar appears." => "Асуулт хариултын текст хэсэгт үзүүлсэн мөрүүдийн тоог тогтоо. Хуйлмал бичиг нь илүү олон мөртэй байдаг."
// pe.enabled: "Enabled" => "Боломжтой болсон"
// pe.disabled: "Disabled" => "Хөгжлийн бэрхшээлтэй"
// pe.inherit: "Inherit" => "Өв залгамжл"
// pe.validateVisitedEmptyFields: "Validate empty fields on lost focus" => "Алдагдсан фокус дээр хоосон талбайг баталгаажуулах"
// panellayoutcolumn.effectiveWidth: "Ex.: 30%" => "Экс. : 30 %"
// panellayoutcolumn.questionTitleWidth: "Ex.: 200px" => "Экс: 200px"
// pehelp.validateVisitedEmptyFields: "Enable this option to trigger validation when a user focuses on an empty input field and then leaves it without making any changes." => "Хэрэглэгч хоосон оролтын талбар дээр төвлөрч, дараа нь ямар нэгэн өөрчлөлт хийхгүйгээр орхих үед баталгаажуулалтыг өдөөх боломжийг энэ боломжийг олго."
// pehelp.colCount: "Arranges choice options in a multi-column layout. When set to 0, the options are displayed in a single line." => "Сонголт хийх сонголтуудыг олон баганатай загвараар зохион байгуулна. 0-д тавихад сонголтуудыг нэг мөр харуулдаг."
// theme.isPanelless: "This setting applies only to questions outside of a panel." => "Энэ тохиргоо нь зөвхөн панелын гаднах асуултуудад хамаарна."
// theme.primaryColor: "Sets a supplementary color that highlights key survey elements." => "Судалгааны гол элементүүдийг тодотгох нэмэлт өнгө тогтооно."
// theme.panelBackgroundTransparency: "Adjusts the transparency of panels and question boxes relative to the survey background." => "Судалгааны нөхцөл байдлыг харьцуулан панел, асуултын хайрцгуудын ил тод байдлыг тохируулна."
// theme.questionBackgroundTransparency: "Adjusts the transparency of input elements relative to the survey background." => "Судалгааны нөхцөлтэй харьцуулахад оруулах элементүүдийн ил тод байдлыг тохируулна."
// theme.cornerRadius: "Sets the corner radius for all rectangular elements. Enable the Advanced Mode if you want to set individual corner radius values for input elements or panels and question boxes." => "Бүх тэгш өнцөгт элементүүдэд булангийн радиусыг тогтооно. Оролтын элементүүд эсвэл панел, асуултын хайрцгуудад зориулсан хувь хүний булангийн радиус үнэт зүйлсийг тогтоохыг хүсвэл Advanced Mode-г боломжтой болго."
// theme.--sjs-general-backcolor-dim: "Sets the main background color of the survey." => "Судалгааны үндсэн нөхцөл байдлын өнгийг тогтооно."
// header.inheritWidthFrom: "The \"Same as container\" option auto-adjusts the header content area width to fit into the HTML element the survey is placed in." => "\"As as container\" сонголт автоматаар судалгаа хийсэн HTML элементэд тохируулахын тулд толгойн агуулгын хэсгийн өргөнийг тохируулдаг."
// header.textAreaWidth: "The width of the header area that contains the survey title and description, measured in pixels." => "Пикселээр хэмжсэн судалгааны нэр, тодорхойлолт бүхий толгойн хэсгийн өргөн."
// panellayoutcolumn.effectiveWidth: "Accepts values %." => "Үнэт зүйлсийг %-ийг хүлээн зөвшөөрдөг."
// panellayoutcolumn.questionTitleWidth: "Accepts values px." => "Үнэ цэнэ px-ийг хүлээн зөвшөөрдөг."
// p.effectiveColSpan: "Column span" => "Баганын хугацаа"
// progressBarInheritWidthFrom.survey: "Same as survey" => "Судалгаатай адил"
// progressBarInheritWidthFrom.container: "Same as container" => "Савтай адил"
// file.allowImagesPreview: "Displays thumbnail previews for uploaded files when possible. Unselect if you want to show file icons instead." => "Боломжтой бол татаж авсан файлуудад зориулсан эрхий хурууны урьдчилсан үзүүлэлтийг үзүүлнэ. Оронд нь файлын зургуудыг үзүүлэхийг хүсвэл сонгогдоогүй."
// pehelp.progressBarInheritWidthFrom: "The \"Same as container\" option auto-adjusts the progress bar area width to fit into the HTML element the survey is placed in." => "\"As as container\" сонголт автоматаар судалгаанд байрлуулсан HTML элементэд тохируулахын тулд progress bar area өргөнийг тохируулдаг."
// p.progressBarInheritWidthFrom: "Progress bar area width" => "Прогресс барын бүсийн өргөн"
// maskType.none: "None" => "Хэн ч биш"
// maskType.pattern: "Pattern" => "Загвар"
// maskType.numeric: "Numeric" => "Тоо нь"
// maskType.datetime: "Date and Time" => "Огноо, цаг"
// maskType.currency: "Currency" => "Валютын ханш"

// inputTextAlignment.auto: "Auto" => "Авто"
// inputTextAlignment.left: "Left" => "Зүүн"
// inputTextAlignment.right: "Right" => "Баруун талд"
// pehelp.inputTextAlignment: "Select how to align input value within the field. The default setting \"Auto\" aligns the input value to the right if currency or numeric masking is applied and to the left if not." => "Талбар доторх оролтын үнэ цэнийг хэрхэн уялдуулахыг сонго. \"Авто\" гэсэн дефолт тохиргоо нь валют эсвэл тоон маск хэрэглэх бол оролтын үнэ цэнийг баруун тийш, хэрэв үгүй бол зүүн тийш нь уялдуулна."
// p.inputTextAlignment: "Input value alignment" => "Оролтын үнэ цэнийн зохицуулалт"
// paneldynamic.showRangeInProgress: "Show the progress bar" => "Хөгжил дэвшлийн барыг харуул"
// paneldynamic.showProgressBar: "Show the progress bar" => "Хөгжил дэвшлийн барыг харуул"
// paneldynamic.progressBarLocation: "Progress bar alignment" => "Хөгжлийн барын зохицуулалт"
// pv.carousel: "Carousel" => "Карусел"
// progressBarLocation.top: "Top" => "Дээд"
// progressBarLocation.bottom: "Bottom" => "Доод"
// progressBarLocation.topBottom: "Top and bottom" => "Дээд, доод"
// matrixdropdowncolumn.colCount: "Arranges choice options in a multi-column layout. When set to 0, the options are displayed in a single line. When set to -1, the actual value is inherited from the \"Nested column count\" property of the parent matrix." => "Сонголт хийх сонголтуудыг олон баганатай загвараар зохион байгуулна. 0-д тавихад сонголтуудыг нэг мөр харуулдаг. -1-д тавихад бодит үнэ цэнэ нь эцэг эхийн матрицын \"Nested column count\" өмчөөс өвлөгддөг."
// ed.translationYouTubeNotSupported: "YouTube links are not supported." => "YouTube-ийн холбоосууд дэмжигдээгүй."
// ed.propertyGridPlaceholderTitle: "Start configuring your form" => "Формоо тохируулж эхлэх"
// ed.propertyGridPlaceholderDescription: "Click any category icon to explore survey settings. Additional settings will become available once you add a survey element to the design surface." => "Судалгааны тохиргоог судлахын тулд ямар ч категорийн зургыг дарна уу. Дизайны гадаргуу дээр судалгааны элемент нэмсний дараа нэмэлт тохиргоо хийх боломжтой болно."
// pe.caseInsensitive: "Case insensitive" => "Кейс үл мэдрэмтгий"
// pehelp.caseInsensitive: "Select if uppercase and lowercase letters in the regular expression must be treated as equivalent." => "Тогтмол илэрхийлэлд байгаа uppercase болон lowercase үсгийг эн тэнцүү гэж үзэх ёстой эсэхийг сонгоно уу."

// ed.surveyPlaceholderTitle: "Your form is empty" => "Таны маягт хоосон байна"
// ed.surveyPlaceholderTitleMobile: "Your form is empty" => "Таны маягт хоосон байна"
// ed.surveyPlaceholderDescription: "Drag an element from the toolbox or click the button below." => "Toolbox-аас элементийг чирч авах эсвэл доорх товчийг дар."
// ed.surveyPlaceholderDescriptionMobile: "Drag an element from the toolbox or click the button below." => "Toolbox-аас элементийг чирч авах эсвэл доорх товчийг дар."
// ed.previewPlaceholderTitle: "No preview" => "Урьдчилсан танилцуулга байхгүй"
// ed.previewPlaceholderTitleMobile: "No preview" => "Урьдчилсан танилцуулга байхгүй"
// ed.previewPlaceholderDescription: "The survey doesn't contain any visible elements." => "Судалгаанд ямар ч үзэгдэх зүйл байдаггүй."
// ed.previewPlaceholderDescriptionMobile: "The survey doesn't contain any visible elements." => "Судалгаанд ямар ч үзэгдэх зүйл байдаггүй."
// ed.translationsPlaceholderTitle: "No strings to translate" => "Орчуулах мөр байхгүй"
// ed.translationsPlaceholderTitleMobile: "No strings to translate" => "Орчуулах мөр байхгүй"
// ed.translationsPlaceholderDescription: "Add elements to your form or change the strings filter in the toolbar." => "Маягт дээрээ элементүүдийг нэмэх эсвэл toolbar дээрх strings шүүлтүүрийг өөрчил."
// ed.translationsPlaceholderDescriptionMobile: "Add elements to your form or change the strings filter in the toolbar." => "Маягт дээрээ элементүүдийг нэмэх эсвэл toolbar дээрх strings шүүлтүүрийг өөрчил."
// lg.logicPlaceholderTitle: "No logical rules" => "Логик дүрэм байхгүй"
// lg.logicPlaceholderTitleMobile: "No logical rules" => "Логик дүрэм байхгүй"
// lg.logicPlaceholderDescription: "Create a rule to customize the flow of the survey." => "Судалгааны явцыг тохируулах дүрэм зохио."
// lg.logicPlaceholderDescriptionMobile: "Create a rule to customize the flow of the survey." => "Судалгааны явцыг тохируулах дүрэм зохио."
// pe.showTimer: "Use a timer" => "Цаг хэмжигч ашигла"
// theme.advancedMode: "Advanced mode" => "Дэвшилтэт режим"
// pehelp.timerLocation: "Sets the location of a timer on a page." => "Хуудас дээрх цаг хэмжигчийн байрлалыг тогтооно."
// header.mobileHeight: "When set to 0, the height is calculated automatically to accommodate the header's content." => "0 гэж тохируулбал өндөрийг гарчгийн агуулгад тохируулахын тулд автоматаар тооцоолдог."
// p.mobileHeight: "Height on smartphones" => "Ухаалаг гар утасны өндөр"
// header.overlapEnabled: "When enabled, the top of the survey overlays the bottom of the header." => "Идэвхжүүлбэл судалгааны дээд хэсэг нь header-ийн доод хэсгийг давхарладаг."
// ed.creatorSettingTitle: "Creator Settings" => "Зохион бүтээгчийн тохиргуулууд"
// tabs.accentColors: "Accent colors" => "Акцентын өнгө"
// tabs.scaling: "Scaling" => "Масштаблах"
// panel.showQuestionNumbers: "Assigns numbers to questions nested within this panel." => "Энэ самбарт байрлуулсан асуултуудад дугаар өгнө."
// creatortheme.--sjs-special-background: "Surface background" => "Гадаргуугийн фон"
// creatortheme.--sjs-primary-background-500: "Primary" => "Хүүхдийн хэсэг"
// creatortheme.--sjs-secondary-background-500: "Secondary" => "Хоёрдугаар зэргийн"
// creatortheme.surfaceScale: "Surface" => "Гадаргуу"
// creatortheme.userInterfaceBaseUnit: "User interface" => "Хэрэглэгчийн интерфейс"
// creatortheme.fontScale: "Font" => "Фонт"
// names.sc2020: "Survey Creator 2020" => "Судалгаа зохион байгуулагч 2020"
// names.default-light: "Light" => "Гэрэл"
// names.default-dark: "Dark" => "Харанхуй"
// names.default-contrast: "Contrast" => "Эсрэг тэсрэг байдал"
// panel.showNumber: "Number this panel" => "Энэ хавсралтыг дугаарлах"
// pehelp.autoAdvanceEnabled: "Select if you want the survey to auto-advance to the next page once a respondent has answered all questions on the current page. This feature won't apply if the last question on the page is open-ended or allows multiple answers." => "Оролцогч одоогийн хуудсан дээрх бүх асуултад хариулсны дараа судалгааг дараагийн хуудас руу автоматаар шилжүүлэхийг хүсч байгаа эсэхээ сонго. Хуудасны хамгийн сүүлийн асуулт нээлттэй эсвэл олон хариулт өгөх боломж олгодог бол энэ онцлог хэрэгжихгүй."
// autocomplete.name: "Full Name" => "Бүтэн нэр"
// autocomplete.honorific-prefix: "Prefix" => "Угтвар"
// autocomplete.given-name: "First Name" => "Овог нэр"
// autocomplete.additional-name: "Middle Name" => "Овгийн нэр"
// autocomplete.family-name: "Last Name" => "Овгийн нэр"
// autocomplete.honorific-suffix: "Suffix" => "Суффикс"
// autocomplete.nickname: "Nickname" => "Хоч нэр"
// autocomplete.organization-title: "Job Title" => "Ажлын нэр"
// autocomplete.username: "User Name" => "Хэрэглэгчийн нэр"
// autocomplete.new-password: "New Password" => "Шинэ нууц үг"
// autocomplete.current-password: "Current Password" => "Одоогийн нууц үг"
// autocomplete.organization: "Organization Name" => "Байгууллагын нэр"
// autocomplete.street-address: "Full Street Address" => "Гудамжны бүрэн хаяг"
// autocomplete.address-line1: "Address Line 1" => "Хаягийн шугам 1"
// autocomplete.address-line2: "Address Line 2" => "Хаягийн мөр 2"
// autocomplete.address-line3: "Address Line 3" => "Хаягийн мөр 3"
// autocomplete.address-level4: "Level 4 Address" => "4-р түвшингийн хаяг"
// autocomplete.address-level3: "Level 3 Address" => "3-р түвшингийн хаяг"
// autocomplete.address-level2: "Level 2 Address" => "2-р түвшингийн хаяг"
// autocomplete.address-level1: "Level 1 Address" => "1-р түвшингийн хаяг"
// autocomplete.country: "Country Code" => "Улсын код"
// autocomplete.country-name: "Country Name" => "Улсын нэр"
// autocomplete.postal-code: "Postal Code" => "Шуудангийн код"
// autocomplete.cc-name: "Cardholder Name" => "Карт эзэмшигчийн нэр"
// autocomplete.cc-given-name: "Cardholder First Name" => "Карт эзэмшигчийн нэр"
// autocomplete.cc-additional-name: "Cardholder Middle Name" => "Карт эзэмшигчийн овгийн нэр"
// autocomplete.cc-family-name: "Cardholder Last Name" => "Карт эзэмшигчийн овгийн нэр"
// autocomplete.cc-number: "Credit Card Number" => "Кредит картын дугаар"
// autocomplete.cc-exp: "Expiration Date" => "Хүчингүй болох хугацаа"
// autocomplete.cc-exp-month: "Expiration Month" => "Хугацаа дуусах сар"
// autocomplete.cc-exp-year: "Expiration Year" => "Хугацаа дуусах жил"
// autocomplete.cc-csc: "Card Security Code" => "Картын аюулгүй байдлын код"
// autocomplete.cc-type: "Credit Card Type" => "Кредит картын төрөл"
// autocomplete.transaction-currency: "Transaction Currency" => "Транзакцийн валют"
// autocomplete.transaction-amount: "Transaction Amount" => "Транзакцийн хэмжээ"
// autocomplete.language: "Preferred Language" => "Санал болгосон хэл"
// autocomplete.bday: "Birthday" => "Төрсөн өдөр"
// autocomplete.bday-day: "Birthday Day" => "Төрсөн өдрийн өдөр"
// autocomplete.bday-month: "Birthday Month" => "Төрсөн өдрийн сар"
// autocomplete.bday-year: "Birthday Year" => "Төрсөн өдөр"
// autocomplete.sex: "Gender" => "Хүйс"
// autocomplete.url: "Website URL" => "Вэбсайтын URL"
// autocomplete.photo: "Profile Photo" => "Профайл зураг"
// autocomplete.tel: "Telephone Number" => "Утасны дугаар"
// autocomplete.tel-country-code: "Country Code for Phone" => "Утасны улсын код"
// autocomplete.tel-national: "National Telephone Number" => "Үндэсний утасны дугаар"
// autocomplete.tel-area-code: "Area Code" => "Бүсийн код"
// autocomplete.tel-local: "Local Phone Number" => "Орон нутгийн утасны дугаар"
// autocomplete.tel-local-prefix: "Local Phone Prefix" => "Орон нутгийн утасны угтвар"
// autocomplete.tel-local-suffix: "Local Phone Suffix" => "Орон нутгийн утасны суффикс"
// autocomplete.tel-extension: "Phone Extension" => "Утасны өргөтгөл"
// autocomplete.email: "Email Address" => "Э-мэйл хаяг"
// autocomplete.impp: "Instant Messaging Protocol" => "Мессежийн протокол"
// ed.lockQuestionsTooltip: "Lock expand/collapse state for questions" => "Асуултын үед lock/expand/collapse state"
// pe.listIsEmpty@pages: "You don't have any pages yet" => "Танд одоохондоо хуудас байхгүй байна"
// pe.addNew@pages: "Add new page" => "Шинэ хуудас нэмж"
// ed.zoomInTooltip: "Zoom In" => "Томруулах"
// ed.zoomOutTooltip: "Zoom Out" => "Томруулах"
// tabs.surfaceBackground: "Surface Background" => "Гадаргуугийн фон"
// pe.copyDefaultValueFromLastEntry: "Use answers from the last entry as default" => "Сүүлийн тайлбарын хариултуудыг стандарт болгон ашигла"
// colors.gray: "Gray" => "Саарал"
// pe.navigationButtonsLocation: "Navigation buttons alignment" => "Навигацийн товчлууруудын байрлал"
// pv.allQuestions: "Show all questions" => "Бүх асуултыг үзүүл"
// pv.answeredQuestions: "Show answered questions only" => "Зөвхөн хариулсан асуултуудыг үзүүлэх"
// pehelp.navigationButtonsLocation: "Sets the location of navigation buttons on a page." => "Хуудас дээрх навигацийн товчлууруудын байрлалыг тогтооно."
// pe.choiceValuesFromQuestion: "Use values from the following matrix column or panel question as choice IDs" => "Дараах матрицын багана эсвэл панелийн асуултын үнэт зүйлсийг сонголтын ID болгон ашигла"
// pe.choiceTextsFromQuestion: "Use values from the following matrix column or panel question as choice texts" => "Дараах матрицын багана эсвэл панелийн асуултын үнэт зүйлсийг сонголтын текст болгон ашигла"
// pehelp.choiceValuesFromQuestion: "In single- and multiple-selection question types, each choice option has an ID and display value. This setting specifies which matrix column or panel question should provide the IDs." => "Нэг болон олон сонголттой асуултын төрлүүдэд сонголт бүр ID болон display value-тэй байдаг. Энэ тохиргоо нь ямар матрицын багана эсвэл панелийн асуулт ID-г өгөхийг тодорхойлдог."
// pehelp.choiceTextsFromQuestion: "In single- and multiple-selection question types, each choice option has an ID and display value. This setting specifies which matrix column or panel question should provide the display texts." => "Нэг болон олон сонголттой асуултын төрлүүдэд сонголт бүр ID болон display value-тэй байдаг. Энэ тохиргоо нь ямар матрицын багана эсвэл панелийн асуулт үзүүлбэрийн текстийг хангахыг тодорхойлдог."
// pe.progressBarLocation: "Progress bar alignment" => "Progress bar alignment"
// progressBarLocation.topbottom: "Top and bottom" => "Дээд ба доод"
// progressBarLocation.aboveheader: "Above the header" => "Гарчгийн дээр"
// progressBarLocation.belowheader: "Below the header" => "Гарчгийн доод талд"
// progressBarLocation.off: "Hidden" => "Нуугдмал"
// survey.progressBarLocation: "Sets the location of the progress bar. The \"Auto\" value displays the progress bar above or below the survey header." => "Явцын барын байршлыг тогтооно. \"Auto\" value нь судалгааны гарчгийн дээр эсвэл доод тал дахь явцын барыг харуулна."
// survey.readOnly: "Make the survey read-only" => "Судалгааг зөвхөн унших хэлбэртэй болго"
// survey.readOnly: "Select if you want to prevent respondents from filling out your survey." => "Хэрэв та хариулагчдыг таны судалгааг бөглөхөд саад болохыг хүсвэл сонго."
// paneldynamic.showNumber: "Number the panel" => "Хавтангийн дугаар"
// question.showNumber: "Number this question" => "Энэ асуултыг дугаарла."
// pe.previewMode: "Preview mode" => "Урьдчилан харах хэлбэр"
// pe.gridLayoutEnabled: "Enable the grid layout" => "Grid layout-ийг идэвхжүүлэх"
// pe.maskSettings: "Mask settings" => "Маскийн тохиргоо"
// pe.detailErrorLocation: "Row expansion error message alignment" => "Мөр өргөтгөлийн алдаа мессежийн тохируулга"
// pehelp.detailErrorLocation: "Sets the location of error messages for questions nested in detail sections. The \"Inherit\" option applies the setting from the \"Error message alignment\" property." => "Нарийвчилсан хэсгүүдэд байрласан асуултуудын алдааны мессежүүдийн байршлыг тохируулна. \"Inherit\" сонголт нь \"Error message alignment\" шинж чанарын тохиргоог хэрэглэнэ."
// pe.gridLayoutColumns: "Grid layout columns" => "Grid layout columns"
// pe.startPageTitlePlaceholder: "Start Page" => "Эхлэх хуудас"
// panellayoutcolumn.effectiveWidth: "Effective width, %" => "Үр дүнтэй өргөн, %"
// panellayoutcolumn.questionTitleWidth: "Question title width, px" => "Асуултын гарчиг өргөн, px"
// pe.listIsEmpty@gridLayoutColumns: "You don't have layout columns yet" => "Танд загварын багана хараахан байхгүй байна"
// panel.effectiveColSpan: "Specifies how many columns this panel spans within the grid layout." => "Энэ панел grid загварт хэдэн багана багтаахыг тодорхойлно."
// panel.gridLayoutColumns: "This table lets you configure each grid column within the panel. It automatically sets the width percentage for each column based on the maximum number of elements in a row. To customize the grid layout, manually adjust these values and define the title width for all questions in each column." => "Энэ хүснэгт нь панел доторх grid багана бүрийг тохируулах боломжийг олгодог. Энэ нь нэг мөр дэх элементүүдийн хамгийн их тооноос шалтгаалан багана бүрийн өргөнийн хувийг автоматаар тогтоодог. Хүснэгтийн байрлалыг тохируулахын тулд эдгээр үнэ цэнийг гараар тохируулж, багана бүр дэх бүх асуултын гарчгийн өргөнийг тодорхойл."
// pehelp.gridLayoutEnabled: "Survey Creator allows you to manually adjust the inline widths of form elements to control the layout. If this doesn't produce the desired outcome, you can enable the grid layout, which structures form elements using a column-based system. To configure layout columns, select a page or panel and use the \"Question Settings\" → \"Grid columns\" table. To adjust how many columns a question spans, select it and set the desired value in the \"Layout\" → \"Column span\" field." => "Survey Creator нь загварыг хянахын тулд хэлбэрийн элементүүдийн inline өргөнийг гараар тохируулах боломжийг олгодог. Хэрэв энэ нь хүссэн үр дүнг өгөхгүй бол баган дээр суурилсан системийг ашиглан элементүүдийг бүрдүүлдэг grid layout-ийг идэвхжүүлж болно. Загварын багануудыг тохируулахын тулд хуудас эсвэл панелийг сонгоод \"Асуултын тохиргоо\" → \"Grid columns\" хүснэгтийг ашиглана. Асуулт хэдэн багана багтаахыг тохируулахын тулд үүнийг сонгоод \"Layout\" → \"Column span\" талбарт хүссэн утгыг тохируул."
// question.effectiveColSpan: "Specifies how many columns this question spans within the grid layout." => "Энэ асуулт хүснэгтийн загварт хэдэн багана багтаахыг тодорхойлно."
// page.gridLayoutColumns: "This table lets you configure each grid column on the page. It automatically sets the width percentage for each column based on the maximum number of elements in a row. To customize the grid layout, manually adjust these values and define the title width for all questions in each column." => "Энэ хүснэгт нь хуудас дээрх grid багана бүрийг тохируулах боломжийг олгодог. Энэ нь нэг мөр дэх элементүүдийн хамгийн их тооноос шалтгаалан багана бүрийн өргөнийн хувийг автоматаар тогтоодог. Хүснэгтийн байрлалыг тохируулахын тулд эдгээр үнэ цэнийг гараар тохируулж, багана бүр дэх бүх асуултын гарчгийн өргөнийг тодорхойл."

// ed.expandTooltip: "Expand" => "Өргөтгөх"
// ed.collapseTooltip: "Collapse" => "Нуралт"
// pe.itemTitleWidth_placeholder: "Ex.: 100px" => "Жишээ нь: 100px"
// pehelp.itemTitleWidth: "Sets consistent width for all item labels. Accepts CSS values (px, %, in, pt, etc.)." => "Бүх барааны шошгоны өргөнийг тогтвортой болгоно. CSS-ийн үнэ цэнийг (px, %, in, pt гэх мэт) хүлээн авна."
// ed.zoom100Tooltip: "Zoom to 100%" => "100% хүртэл томруулах"
// ed.addLanguageTooltip: "Add Language" => "Хэл нэмэх"
// pehelp.commentAreaRows: "Sets the number of displayed lines in text areas for question comments. If the input takes up more lines, the scroll bar appears." => "Асуултын тайлбар бичвэрийн хэсэгт харагдах мөрийн тоог тогтооно. Хэрвээ оролт илүү олон мөр эзэлбэл гүйлгэх бар гарч ирнэ."
// pe.defaultDisplayValue: "Default display value for dynamic texts" => "Динамик текстүүдийн стандарт үзүүлэлтийн үнэ"
// pehelp.defaultDisplayValue: "A value displayed in HTML questions and in the dynamic titles and descriptions of survey elements when the question value is empty." => "HTML асуулт болон асуултын үнэ хоосон үед судалгааны элементүүдийн динамик гарчиг болон тайлбарт харагдах утга."
// showQuestionNumbers.recursive: "Recursive numbering" => "Рекурсив дугаарлалт"
// paneldynamic.templateQuestionTitleWidth: "Question title width" => "Асуултын гарчгийн өргөн"
// pe.allowCustomChoices: "Allow custom choices" => "Өөрийн сонголтыг хийх боломж олгох"
// paneldynamic.templateQuestionTitleWidth: "Sets consistent width for question titles when they are aligned to the left of their question boxes. Accepts CSS values (px, %, in, pt, etc.)." => "Асуултын гарчгийг асуултын хайрцгийн зүүн тийш байрлуулсан үед ижил өргөнийг тогтооно. CSS-ийн үнэ цэнийг (px, %, in, pt гэх мэт) хүлээн авна."
// page.name: "A page ID that is not visible to respondents." => "Оролцогчдод харагдахгүй хуудасны ID."
// page.description: "Type a page subtitle." => "Хуудасны дэд гарчиг гэж бич."
// page.navigationTitle: "A caption displayed on a navigation button in the progress bar or table of contents (TOC). If you leave this field empty, the navigation button will use the page title or page name. To enable the progress bar or TOC, go to \"Survey\" → \"Navigation\"." => "Progress bar эсвэл table of contents (TOC) дахь навигацийн товчлуур дээр харагдах тайлбар. Энэ талбарыг хоосон үлдээвэл навигацийн товчлуур хуудасны гарчиг эсвэл хуудасны нэрийг ашиглана. Progress bar эсвэл TOC-г идэвхжүүлэхийн тулд \"Survey\" → \"Navigation\" руу орно."
// pehelp.allowCustomChoices: "Select to let respondents add their own choices if the desired option isn't available in the dropdown. Custom choices will only be stored temporarily for the duration of the current browser session." => "Хэрэв хүссэн хувилбар нь доош хаягдалд байхгүй бол оролцогчдод өөрсдийн сонголтыг нэмж оруулах боломжийг олго. Custom сонголтууд нь тухайн браузерын хуралдааны туршид зөвхөн түр хугацаагаар хадгалагдах болно."