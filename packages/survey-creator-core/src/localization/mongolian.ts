import { editorLocalization } from "survey-creator-core";

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
  // Strings in SurveyJS Creator
  ed: {
    defaultLocale: "Үндсэн ({0})",
    survey: "Санал асуулга",
    settings: "Тохиргоо",
    settingsTooltip: "Тохиргоог нээх",
    surveySettings: "Санал асуулгын тохиргоо",
    surveySettingsTooltip: "Санал асуулгын тохиргоог нээх",
    themeSettings: "Сэдвийн тохиргоо",
    themeSettingsTooltip: "Нээлттэй сэдвийн тохиргоо",
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
    testSurvey: "Урьдчилан харах",
    themeSurvey: "Сэдвүүд",
    defaultV2Theme: "Үндсэн",
    modernTheme: "Орчийн үеийн",
    defaultTheme: "Үндсэн (legacy)",
    testSurveyAgain: "Санал асуулгыг дахин урьдчилан харах",
    testSurveyWidth: "Санал асуулгын өргөн: ",
    navigateToMsg: "You had to navigate to",
    logic: "Логик",
    embedSurvey: "Санал асуулгыг оруулах",
    translation: "Орчуулга",
    saveSurvey: "Санал асуулга хадгалах",
    saveSurveyTooltip: "Санал асуулга хадгалах",
    saveTheme: "Сэдэв хадгалах",
    saveThemeTooltip: "Сэдэв хадгалах",
    designer: "Удирдлага",
    jsonEditor: "JSON засварлагч",
    jsonHideErrors: "Алдааг нуух",
    jsonShowErrors: "Алдааг харуулах",
    undo: "Буцаах",
    redo: "Дахих",
    undoTooltip: "Сүүлийн өөрчлөлтийг буцаах",
    redoTooltip: "Сүүлин өөрчлөлтийг дахих ",
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
    propertyGridFilteredTextPlaceholder: "Хайхын тулд бичнэ үү.....",
    propertyGridNoResultsFound: "Ямар ч үр дүн олдсонгүй",
    toolboxGeneralCategory: "Ерөнхий",
    toolboxChoiceCategory: "Сонголттой асуултууд",
    toolboxTextCategory: "Хариулт бичих асуултууд",
    toolboxContainersCategory: "Сав",
    toolboxMatrixCategory: "Матрицан асуултууд",
    toolboxMiscCategory: "Бусад",
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
    translationDialogTitle: "Огт орчуулагдаагүй уяанууд",
    translationMergeLocaleWithDefault: "{0}-г суурь хэлтэй нэгтгэх",
    translationPlaceHolder: "Орчуулга...",
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
    imagePlaceHolder: "Энд зураг чирж унагаах эсвэл доорх товчийг дарж татаж авах зургийг сонгоно уу",
    imageChooseImage: "Зураг сонгох",
    addNewTypeQuestion: "{0} нэмэх", //{0} is localizable question type
    chooseLogoPlaceholder: "[Лого]",
    auto: "автомат",
    choices_Item: "Хэсэг ",
    lg: {
      addNewItem: "Шинэ дүрэм нэмэх",
      empty_tab: "Санал асуулгын урсгалыг өөрчлөх дүрэм үүсгэнэ үү.",
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
      question_resetValueText: "асуултын үнэ цэнийг дахин тогтоох нь: {0}",
      question_setValueText: "үнэ цэнийг даалгах нь: {1} асуулт: {0}",
      column_visibilityText: "{0} баганын {1} асуултыг харагддаг болгох", //{0} column name, {1} question name
      column_enableText: "{0} баганын {1} асуултыг идэвхжүүлэх", //{0} column name, {1} question name
      column_requireText: "{0} баганын {1} асуултыг заавал бөглөх болгох", //{0} column name, {1} question name
      column_resetValueText: "баганын эсийн үнэ цэнийг дахин тогтоох: {0}",
      column_setValueText: "эсийн үнэ цэнийг хуваарил: {1} багана: {0}",
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
    expressionHelp: "Гоё хаалт ашиглан хариулт харах: `{question1} + {question2}`. Мөн томъёо дараах болон бусад функцийг дэмждэг: `iif()`, `today()`, `age()`, `min()`, `max()`, `count()`, `avg()`",
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
    "addNew@choices": "Сонголт оруулах",
    expressionIsEmpty: "Томъёо хоосон байна",
    value: "Утга",
    text: "Текст",
    rowid: "Мөрний ID",
    imageLink: "Зураг эсвэл видео линк",
    columnEdit: "Багана засах: {0}",
    itemEdit: "Зүйл засах: {0}",
    url: "Үйлчилгээний линк",
    path: "Үйлчилгэний хүрээнд өгөгдөлд хүрэх зам",
    valueName: "Хариултыг дараагийн JSON талбарт хадгалах",
    choicesbyurl: {
      valueName: "Утгуудыг дарагийн JSON талбараас авах"
    },
    titleName: "Үзүүлэн текстүүдийг дараагийн JSON талбараас авах",
    imageLinkName: "Зургийн линкийг дараагийн JSON талбараас",
    allowEmptyResponse: "Хоосон хариулт зөвшөөрөх",
    titlePlaceholder: "Гарчиг",
    surveyTitlePlaceholder: "Санал асуулгын гарчиг",
    pageTitlePlaceholder: "Хуудас {num}",
    descriptionPlaceholder: "Тайлбар",
    surveyDescriptionPlaceholder: "Тайлбар",
    pageDescriptionPlaceholder: "Тайлбар",
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
    visible: "Харагдана",
    isRequired: "Заавал бөглөх",
    markRequired: "Шаардлагын дагуу тэмдэглэгээ хийх",
    removeRequiredMark: "Шаардлагатай тэмдэглэгээг хасах",
    isAllRowRequired: "Бүх мөрөнд хариулт шаардах",
    eachRowUnique: "Дараалалд хувилж хариу үйлдэл үзүүлэхээс сэргийлнэ",
    requiredErrorText: "Заавал бөглөх талбарыг бөглөөгүй байна",
    startWithNewLine: "Асуултыг шинэ мөрөнд харуулах",
    rows: "Мөр",
    cols: "Багана",
    placeholder: "Оролтын жишээ утга",
    showPreview: "Урьдчилан харах хэсгийг харуулах",
    storeDataAsText: "JSON үр дүнд файлын агуулгыг текст хэлбэрээр хадгалах",
    maxSize: "Файлын дээд хэмжээ (байтаар)",
    imageHeight: "Зургийн өндөр",
    imageWidth: "Зургийн өргөн",
    rowCount: "Мөрний тоо",
    columnLayout: "Баганы зохион байгуулалт",
    addRowLocation: "Мөр нэмэх товчны байршил",
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
    mode: "Засах боломжтой эсвэл зөвхөн унших",
    clearInvisibleValues: "Харагдахгүй утгыг цэвэрлэх",
    cookieName: "Cookie name",
    sendResultOnPageNext: "Хэсэгчилсэн санал асуулгын явцыг хадгалах",
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
    showPrevButton: "Өмнөх хуудасны товч харуулах",
    firstPageIsStarted: "Эхлэх хуудас нь эхний хуудас байна",
    showCompletedPage: "Санал асуулга амжилттай бөглөгдсөн хуудсыг харуулах",
    goNextPageAutomatic: "Дараагийн хуудас руу автоматаар шилжих",
    showProgressBar: "Явцын мөрний байршил",
    questionTitleLocation: "Асуултын гарчгийн байршил",
    requiredText: "Шаардлагатай тэмдэг(үүд)",
    questionStartIndex: "Эхлэх индекс (тоо эсвэл үсэг)",
    showQuestionNumbers: "Асуултын дугаарлалт",
    questionTitleTemplate: "Асуултын гарчигны загвар, үндсэн нь: '{үгүй}. {шаардах} {гарчиг}'",
    questionErrorLocation: "Алдааны мэдэгдлийн байршил",
    focusFirstQuestionAutomatic: "Эхний асуултыг шинэ хуудсанд төвлөрүүлэх",
    questionsOrder: "Хуудас дээрх элементийн дараалал",
    maxTimeToFinish: "Санал асуулга бөглөж дуусах хугацаа (секундээр)",
    maxTimeToFinishPage: "Нэг хуудас бөглөж дуусах хугацаа (секундээр)",
    image: {
      imageHeight: "Зургийн өндөр (CSS хүлээн зөвшөөрсөн утга)",
      imageWidth: "Зургийн өргөн (CSS хүлээн зөвшөөрсөн утга)"
    },
    // survey templates
    survey: {
      title: "Нүүр"
    },
    page: {
      title: "Нүүр",
      maxTimeToFinish: "Нэг хуудас бөглөж дуусах хугацаа (секундээр)"
    },
    question: {
      page: "Эх хуудас"
    },
    showTimerPanel: "Тоолуурын байршил",
    showTimerPanelMode: "Тоолуурын горим",
    renderMode: "Панелийн дэлгэцийн горим",
    allowAddPanel: "Панел нэмэхийг зөвшөөрөх",
    allowRemovePanel: "Панел хасахыг зөвшөөрөх",
    noEntriesText: "Хоосон бичвэрийн текст",
    panelAddText: "Панел товчийн текст нэмэх",
    panelRemoveText: "Панел товчийн текст хасах",
    isSinglePage: "Бүх элементийг нэг хуудас дээр харуулах",
    html: "HTML тэмдэглэгээ",
    expression: "илэрхийлэл",
    setValue: "Хариулт",
    dataFormat: "Зургийн формат",
    allowAddRows: "Мөр нэмэхийг зөвшөөрөх",
    allowRemoveRows: "Мөр хасахыг зөвшөөрөх",
    allowRowsDragAndDrop: "Мөр чирэхийг зөвшөөрөх",
    responsiveImageSizeHelp: "Зургийн өндөр, өргөнийг зааж өгсөн үед хамаарахгүй.",
    minImageWidth: "Зургийн өргөний хамгийн бага хэмжээ",
    maxImageWidth: "Зургийн өргөний хамгийн их хэмжээ",
    minImageHeight: "Зургийн өндрийн хамгийн бага хэмжээ",
    maxImageHeight: "Зургийн өндрийн хамгийн их хэмжээ",
    minValue: "Хамгийн бага утга",
    maxValue: "Хамгийн их утга",
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
    maxOthersLength: "Хариултын хамгийн бага урт(тэмдэгтээр)",
    autoGrowComment: "Шаардлагатай үед санал сэтгэгдлийн хэсгийг өргөсгөх",
    allowResizeComment: "Хэрэглэгчдэд текстийн газруудыг дахин ашиглах боломж олго",
    textUpdateMode: "Текст асуултын утгыг шинэчлэх",
    focusOnFirstError: "Анхны буруу хариулт руу чиглүүлэх",
    checkErrorsMode: "Баталгаажуулалт ажиллуулах",
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
    paneldynamic: {
      confirmDelete: "Панел устгахыг батлах"
    },
    panelCount: "Панелийн эхлэх тоо",
    minPanelCount: "Хамгийн бага панелийн тоо",
    maxPanelCount: "Хамгийн их панелийн тоо",
    panelsState: "Дотоод панелийн өргөссөн төлөв",
    templateDescription: "Тайлбарын загвар",
    templateTitle: "Гарчгийн загвар",
    panelPrevText: "Өмнөх панелийн товч",
    panelNextText: "Дараагийн панелийн товч",
    showRangeInProgress: "Явцын талбарыг харуулах",
    templateTitleLocation: "Асуултын гарчгийн байршил",
    panelRemoveButtonLocation: "Панел устгах товчны байршил",
    hideIfRowsEmpty: "Мөр байхгүй тохиолдолд асуултыг нуух",
    hideColumnsIfEmpty: "Мөр байхгүй тохиолдолд баганыг нуух",
    rateValues: "Хэрэглэгчийн үнэлгээний утгууд",
    rateCount: "Үнэ тогтоох",
    autoGenerate: "Үнэ цэнийг хэрхэн тодорхойлох вэ?",
    hideIfChoicesEmpty: "Сонголтгүй бол асуултыг нуух",
    hideNumber: "Асуултын тоог харуулахгүй байх",
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
    showClearButton: "Цэвэрлэх товч харуулах",
    showNumber: "Панелийн тоо харуулах",
    logoWidth: "Логоны өргөн (CSS хүлээн зөвшөөрсөн утга)",
    logoHeight: "Логөны өндөр (CSS хүлээн зөвшөөрсөн утга)",
    readOnly: "Зөвхөн унших",
    enableIf: "Засах боломжтой хэрэв",
    emptyRowsText: "\"Мөр байхгүй байна!\" мэдэгдэл",
    size: "Оролтын хэмжээ (тэмдэгтээр)",
    separateSpecialChoices: "Тусгай сонголтуудыг салгах (Аль нь ч биш, Бусад, Бүгдийг сонгох)",
    choicesFromQuestion: "Дараах асуултаас сонголтуудыг хуулах.",
    choicesFromQuestionMode: "Аль сонголтуудыг хуулах вэ?",
    showCommentArea: "Санал хүсэлтийн хэсэг харуулах",
    commentPlaceholder: "Санал хүсэлтийн хэсэг",
    displayRateDescriptionsAsExtremeItems: "Display rate descriptions as extreme values",
    rowsOrder: "Мөрний дараалал",
    columnsLayout: "Баганы зохион байгуулалт",
    columnColCount: "Шаталсан баганын тоо",
    state: "Панелийн өргөссөн төлөв",
    correctAnswer: "Зөв хариулт",
    defaultPanelValue: "Үндсэн утга",
    cells: "Нүдний текст",
    keyName: "Түлхүүр багана",
    itemvalue: {
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
    tabs: {
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
      layout: "Зохион байгуулалт",
      data: "Өгөгдөл",
      validation: "Батлах",
      cells: "Нүдний текст",
      showOnCompleted: "Санал асуулга амжилттай бөглөгдлөө.",
      logo: "Санал асуулгын гарчиг дахь лого",
      slider: "Гулсуулагч",
      expression: "илэрхийлэл",
      others: "Бусад"
    },
    editProperty: "Шинж чанарыг засварлах '{0}'",
    items: "Элементүүд",
    choicesVisibleIf: "Сонголтууд харагдана хэрэв",
    choicesEnableIf: "Сонголтууд сонгогдоно хэрэв",
    columnsEnableIf: "Баганууд харагдана хэрэв",
    rowsEnableIf: "Мөрнүүд харагдана хэрэв",
    indent: "Догол мөр нэмэх",
    panel: {
      indent: "Гаднах догол мөр нэмэх"
    },
    innerIndent: "Дотоод догол мөр нэмэх",
    defaultValueFromLastRow: "Өмнөх мөрнөөс үндсэн утга авах",
    defaultValueFromLastPanel: "Сүүлийн панелаас үндсэн утга авах",
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
    signatureWidth: "Гарын үсгийн өргөн",
    signatureHeight: "Гарын үсгийн өндөр",
    verticalAlign: "Босоо эгнүүлэх",
    alternateRows: "Хувилбар мөрнүүд",
    columnsVisibleIf: "Баганууд харагдана хэрэв",
    rowsVisibleIf: "Мөрнүүд харагдана хэрэв",
    otherPlaceholder: "Санал асуулгын хэсэг",
    signaturepad: {
      showPlaceholder: "Эзэмшигчийг үзүүл",
      placeholder: "Placeholder текст",
      signatureWidth: "Гарын үсэг зурах хэсгийн өргөн",
      signatureHeight: "Гарын үсэг зурах хэсгийн өндөр",
      signatureAutoScaleEnabled: "Авто замын тэмдэг тэмдэглэгээний талбай",
      penMinWidth: "Хамгийн бага үзэгний өргөн",
      penMaxWidth: "Хамгийн их үзэгний өргөн"
    },
    filePlaceholder: "Файл байршуулагчийн текст",
    photoPlaceholder: "Гэрэл зураг байршуулагч бичвэр",
    fileOrPhotoPlaceholder: "Файл эсвэл гэрэл зураг байршуулагч текст",
    rateType: "Rate төрөл"
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
    decimal: "Бутархай",
    currency: "Мөнгөн тэмдэгт",
    percent: "Хувь",
    firstExpanded: "Эхний панел өргөссөн",
    off: "Асуултын тоог нуух",
    onpanel: "Панел болгон дээр эхлэх",
    onPanel: "Панел болгон дээр эхлэх",
    onSurvey: "Санал асуулгын турш үргэлжлэх",
    list: "Жагсаалт",
    progressTop: "Панел чиглүүлэгч + Явцын мөр дээд хэсэгт байрлах",
    progressBottom: "Панел чиглүүлэгч + Явцын мөр доод хэсэгт байрлах",
    progressTopBottom: "Панел чиглүүлэгч + Явцын мөр дээд ба доод хэсэгт байрлах",
    tab: "Табууд",
    horizontal: "Хэвтээ",
    vertical: "Босоо",
    top: "Дээд",
    bottom: "Доод",
    topBottom: "Дээд ба доод",
    both: "Аль аль нь",
    left: "Зүүн",
    right: "Баруун",
    leftRight: "Зүүн, баруун",
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
    on: "Өмнөх хуудаснаас үргэлжлэх",
    onPage: "Хуудас болгон дээр эхлэх",
    edit: "Засаж болдог",
    display: "Зөвхөн унших",
    onComplete: "Санал асуулга амжилттай бөглөгдсөн үед.",
    onHidden: "Асуулт нуугдсан үед",
    onHiddenContainer: "Асуулт, панел эсвэл хуудас нуугдсан үед",
    contain: "Агуулах",
    cover: "Хөшиг",
    fill: "Дүүргэлт",
    clearInvisibleValues: {
      none: "Хэзээ ч үгүй"
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
    all: "Бүх",
    page: "Хуудас",
    survey: "Санал асуулга",
    onNextPage: "Дараагийн хуудас руу шилжих үед",
    onValueChanged: "Асуулт солигдсоны дараа",
    onValueChanging: "Асуулт солигдхоос өмнө",
    standard: "Анхдагч бүтэц",
    singlePage: "Бүх асуулт нэг хуудас дээр",
    questionPerPage: "Бүх асуулт бие даасан хуудас дээр",
    noPreview: "Урьдчилан харах боломжгүй",
    showAllQuestions: "Бүх асуултыг харуулах.",
    showAnsweredQuestions: "Зөвхөн хариулсан асуултуудыг харуулах.",
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
    showNavigationButtons: {
      none: "Нуусан"
    },
    showProgressBar: {
      off: "Нуусан"
    },
    showTimerPanel: {
      none: "Нуусан"
    },
    showTimerPanelMode: {
      all: "Аль аль нь"
    },
    detailPanelMode: {
      none: "Нуусан"
    },
    addRowLocation: {
      default: "Матрицын загвараас шалтгаалах"
    },
    panelsState: {
      default: "Хэрэглэгчид панелийг өргөсгөж багасгаж чадахгүй",
      collapsed: "Бүх панел багассан",
      expanded: "Бүх панел өргөтгөссөн"
    },
    widthMode: {
      auto: "Автомат",
      static: "Статик",
      responsive: "Уян хатан"
    },
    imageFit: {
      none: "Аль нь ч биш",
      contain: "Агуулах",
      cover: "Халхлах",
      fill: "Бөглөх"
    },
    contentMode: {
      auto: "Автомат",
      image: "Зураг",
      video: "Видео",
      youtube: "YouTube"
    },
    displayMode: {
      auto: "Автомат",
      buttons: "Товчнууд",
      dropdown: "Доош задрах"
    },
    rateColorMode: {
      default: "Дефолт"
    },
    autoGenerate: {
      "true": "Үүсгэх",
      "false": "Гараар оруул"
    },
    rateType: {
      labels: "Labels",
      stars: "Одод",
      smileys: "Инээмсэглэл"
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
  pehelp: {
    cookieName: "Хэрэглэгч нэг судалгааг хоёр удаа бөглөхөөс Күүки сэргийлнэ.",
    size: "Оролт гаралтын талбарын үзэгдэх талбайг дахин тохируулах. Оролтын уртыг <b>хязгаарлахын тулд Validation → Maximum урт</b> тохиргоог ашиглана уу.",
    format: "{0} нь тухайн утгын жишээ болно.",
    totalText: "Хамгийн багадаа нэг багана Нэмэх төрлийн эвсэл нэмэх үйлдэлтэй үед л харагдах боломжтой.",
    acceptedTypes: "Атрибутын талаар нэмэлт мэдээллийг үзэхийн тулд [accept](https://www.w3schools.com/tags/att_input_accept.asp)-лүү хандана уу.",
    columnColCount: "Зөвхөн олон сонголттой эсвэл Radiogroup -д ашиглана.",
    autocomplete: "Аттрибутын талаар дэлгэрэнгүй мэдээллийг [autocomplete](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete)-ээс авна уу .",
    valueName: "Хэрэв энэ талбарын утгыг оруулаагүй бол хариулт нь автоматаар Нэр талбарт хадгална.",
    choicesbyurl: {
      valueName: " "
    },
    keyName: "Хэрэв өгөгдсөн багана адил утгатай бол санал асуулга \"Давтагдсан утга\" гэсэн алдааг харуулна.",
    filePlaceholder: "\"Эх сурвалжийн төрөл\" нь \"Орон нутгийн файлууд\" эсвэл камер байхгүй үед хамаарна",
    photoPlaceholder: "\"Эх сурвалжийн төрөл\" \"Камер\" байхад хамаарна.",
    fileOrPhotoPlaceholder: "\"Эх сурвалжийн төрөл\" нь \"Орон нутгийн файлууд буюу камер\" байхад хамаарна."
  },
  // Properties
  p: {
    title: {
      name: "Гарчиг",
      title: "'Нэр'-тэй адилхан бол хоосон орхих."
    },
    multiSelect: "Олон сонголтыг зөвшөөрөх",
    showLabel: "Зургийн тайлбар харуулах",
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
    titleLocation: "Гарчгийн байршил",
    descriptionLocation: "Тайлбарын байршил",
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
    isUnique: "Давтагдахгүй эсэх",
    showInMultipleColumns: "Олон баганад харуулах",
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
    itemSize: "Элементийн хэмжээ",
    elements: "Элементүүд",
    content: "Контент",
    navigationButtonsVisibility: "Чиглүүлэх товчны харагдац",
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
    allowCameraAccess: "Камераар нэвтрэх боломж олгох",
    scaleColorMode: "Масштабын өнгө загвар",
    rateColorMode: "Хэмжээ өнгөний хэв маяг",
    templateTabTitle: "Template tab цол",
    templateVisibleIf: "Хэрэв Template харагдах",
    copyDisplayValue: "Copy display value"
  },
  theme: {
    "--background": "Ар талын өнгө",
    "--background-dim-light": "Ар талын бүдэг гэрэл өнгө",
    "--primary-foreground": "Хүүхдийн хэсгийн өмнөх өнгө",
    "--foreground": "Өнгөө",
    "--base-unit": "Үндсэн нэгж",
    advancedMode: "Дэвшилтэт хэв маяг",
    groupGeneral: "Ерөнхий",
    groupHeader: "Толгойлогч",
    groupBackground: "Ар талын",
    groupAppearance: "Харагдах байдал",
    themeName: "Сэдэв",
    themeMode: "Асуулт хариултын төрх",
    themeModePanels: "Дефолт",
    themeModeLightweight: "Панелгүйгээр",
    themePaletteLight: "Гэрэл",
    themePaletteDark: "Харанхуй",
    primaryColor: "Акцент өнгө",
    primaryDefaultColor: "Дефолт",
    primaryDarkColor: "Ховер",
    primaryLightColor: "Сонгосон",
    coverTitleForecolor: "Нүүр Forecolor",
    coverDescriptionForecolor: "Дүрслэлийн форс",
    coverOverlapEnabled: "Давхар",
    backgroundDimColor: "Ар талын өнгө",
    backgroundImage: "Ар талын зураг",
    backgroundImageFitAuto: "Авто",
    backgroundImageFitCover: "Хөшиг",
    backgroundImageFitContain: "Агуулах",
    backgroundImageFitFill: "Сэнгэрч",
    backgroundImageFitTile: "Тил",
    backgroundOpacity: "Бүдүүлэг байдал",
    backgroundImageAttachmentFixed: "Зассан",
    backgroundImageAttachmentScroll: "Хуйлмал бичиг",
    panelBackgroundTransparency: "Панелийн ар талын харанхуй байдал",
    questionBackgroundTransparency: "Асуулт хариултын нөхцөл байдал",
    questionTitle: "Асуулт нэрийн фонт",
    editorPanel: "Оролтын элемент",
    backgroundCornerRadius: "Ар талын болон булангийн радиус",
    backcolor: "Дефолт нөхцөл байдал",
    hovercolor: "Hover-ийн гарал үүсэл",
    borderDecoration: "Хилийн чимэг",
    accentBackground: "Акцентийн гарал үүсэл",
    accentForeground: "Акцентийн өмнө",
    primaryForecolor: "Дефолт өнгө",
    primaryForecolorLight: "Хөгжлийн бэрхшээлтэй хүний өнгө",
    colorsTitle: "Өнгө",
    font: "Фонт",
    lines: "Шугам",
    borderDefault: "Илүү харанхуй",
    borderLight: "Гэрэлтэй",
    fontFamily: "Фонтын гэр бүл",
    fontSize: "Фонтын хэмжээ",
    color: "Өнгө",
    placeholderColor: "Газар эзэмшигчийн өнгө",
    size: "Хэмжээ",
    fontWeightRegular: "Тогтмол",
    fontWeightHeavy: "Хүнд",
    fontWeightSemiBold: "Хагас зоригтой",
    fontWeightBold: "Болд",
    scale: "Хэмжүүр",
    cornerRadius: "Булангийн радиус",
    surveyTitle: "Судалгааны нэрийн фонт",
    surveyDescription: "Судалгааны тодорхойлолтын фонт",
    pageTitle: "Хуудасны нэрийн фонт",
    titleFont: "Нүүр фонт",
    descriptionFont: "Дүрслэлийн фонт",
    boxShadowX: "X",
    boxShadowY: "Y",
    boxShadowAddRule: "Сүүдрийн эффект нэмэх",
    opacity: "Бүдүүлэг байдал",
    boxShadowBlur: "Блур",
    boxShadowSpread: "Тархалт",
    boxShadowDrop: "Дусал",
    boxShadowInner: "Дотоод",
    shadow: "Сүүдрийн нөлөө",
    headerView: "Үзэх",
    headerViewBasic: "Үндсэн",
    headerViewAdvanced: "Өндөр хөгжсөн",
    coverInheritWidthFrom: "Агуулгын бүсийн өргөн",
    coverInheritWidthFromSurvey: "Судалгаатай адил",
    coverInheritWidthFromContainer: "Сав баглаа боодолд тохирно",
    coverTextAreaWidth: "Текстийн өргөн",
    coverBackgroundColorSwitch: "Ар талын өнгө",
    coverBackgroundColorNone: "Хэн ч биш",
    coverBackgroundColorAccentColor: "Акцент өнгө",
    coverBackgroundColorCustom: "Үйлчилгээ",
    horizontalAlignmentLeft: "Зүүн",
    horizontalAlignmentCenter: "Төв",
    horizontalAlignmentRight: "Баруун талд",
    verticalAlignmentTop: "Дээд",
    verticalAlignmentMiddle: "Дунд",
    verticalAlignmentBottom: "Доод",
    logoPosition: "Лого байрлал",
    coverTitlePosition: "Нүүр албан тушаал",
    coverDescriptionPosition: "Тодорхойлолтын байрлал",
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
      green: "Ногоон"
    }
  }
};

// Uncomment the line below if you create a custom dictionary.
// Replace "en" with a custom locale code (for example, "fr" or "de"),
// Replace `enStrings` with the name of the variable that contains the custom dictionary.
editorLocalization.locales["mn"] = mnStrings;

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
// theme.groupGeneral: "General" => "Ерөнхий"
// theme.groupAdvanced: "Advanced" => "Өндөр хөгжсөн"
// theme.themeName: "Theme" => "Сэдэв"
// theme.themeMode: "Question appearance" => "Асуулт хариултын төрх"
// theme.themeModePanels: "Default" => "Дефолт"
// theme.themeModeLightweight: "Without Panels" => "Панелгүйгээр"
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
// theme.surveyTitle: "Survey title font" => "Судалгааны нэрийн фонт"
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
// theme.groupHeader: "Header" => "Толгойлогч"
// theme.coverTitleForecolor: "Title forecolor" => "Нүүр Forecolor"
// theme.coverOverlapEnabled: "Overlap" => "Давхар"
// theme.backgroundImageFitFill: "Stretch" => "Сэнгэрч"
// theme.backgroundImageFitTile: "Tile" => "Тил"
// theme.headerView: "View" => "Үзэх"
// theme.headerViewBasic: "Basic" => "Үндсэн"
// theme.headerViewAdvanced: "Advanced" => "Өндөр хөгжсөн"
// theme.coverInheritWidthFrom: "Content area width" => "Агуулгын бүсийн өргөн"
// theme.coverInheritWidthFromSurvey: "Same as survey" => "Судалгаатай адил"
// theme.coverInheritWidthFromPage: "Fit to page" => "Хуудсанд тохирсон"
// theme.coverTextAreaWidth: "Text width" => "Текстийн өргөн"
// theme.coverBackgroundColorSwitch: "Background color" => "Ар талын өнгө"
// theme.coverBackgroundColorNone: "None" => "Хэн ч биш"
// theme.coverBackgroundColorAccentColor: "Accent color" => "Акцент өнгө"
// theme.coverBackgroundColorCustom: "Custom" => "Үйлчилгээ"
// theme.horizontalAlignmentLeft: "Left" => "Зүүн"
// theme.horizontalAlignmentCenter: "Center" => "Төв"
// theme.horizontalAlignmentRight: "Right" => "Баруун талд"
// theme.verticalAlignmentTop: "Top" => "Дээд"
// theme.verticalAlignmentMiddle: "Middle" => "Дунд"
// theme.verticalAlignmentBottom: "Bottom" => "Доод"
// theme.logoPosition: "Logo Position" => "Лого байрлал"
// theme.coverDescriptionPosition: "Description Position" => "Тодорхойлолтын байрлал"
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
// theme.groupBackground: "Background" => "Ар талын"
// theme.groupAppearance: "Appearance" => "Харагдах байдал"
// theme.coverDescriptionForecolor: "Description forecolor" => "Дүрслэлийн форс"
// ed.themeResetConfirmation: "Do you really want to reset the theme? All your customizations will be lost." => "Та сэдвийг дахин хөндөхийг үнэхээр хүсэж байна уу? Таны бүх тохируулга үгүй болно."
// ed.themeResetConfirmationOk: "Yes, reset the theme" => "Тийм ээ, сэдвийг дахин тохируулах"
// theme.groupBackground: "Background" => "Ар талын"
// theme.groupAppearance: "Appearance" => "Харагдах байдал"
// theme.coverDescriptionForecolor: "Description forecolor" => "Дүрслэлийн форс"
// theme.coverInheritWidthFromContainer: "Fit to container" => "Сав баглаа боодолд тохирно"
// signaturepad.showPlaceholder: "Show the placeholder" => "Эзэмшигчийг үзүүл"
// signaturepad.placeholder: "Placeholder text" => "Placeholder текст"
// theme.surveyDescription: "Survey description font" => "Судалгааны тодорхойлолтын фонт"

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
// theme.coverTitlePosition: "Title position" => "Нүүр албан тушаал"
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
// pe.showRefuseItem: "Allow the Refuse to Answer option" => "Хариулах татгалзах боломжийг олго"
// pe.showDontKnowItem: "Allow the Don't Know option" => "Бүү мэд сонголтыг зөвшөөр"
// pv.contain: "Contain" => "Агуулах"
// pv.cover: "Cover" => "Хөшиг"
// pv.fill: "Fill" => "Дүүргэлт"