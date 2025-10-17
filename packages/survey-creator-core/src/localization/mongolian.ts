import { setupLocale } from "survey-creator-core";

export var mnStrings = {
  // survey templates
  survey: {
    // "Edit"
    edit: "Засах",
    // "Watch and learn how to create surveys"
    externalHelpLink: "Санал асуулга үүсгэх заавартай танилцах",
    // "https://www.youtube.com/channel/UCH2ru9okIcooNZfpIbyq4qQ?view_as=subscriber"
    externalHelpLinkUrl: "https://www.youtube.com/channel/UCH2ru9okIcooNZfpIbyq4qQ?view_as=subscriber",
    // "Please drop a question here from the Toolbox."
    dropQuestion: "Хэрэглүүрээс асуулт нэмнэ үү",
    // "Create a rule to customize the flow of the survey."
    addLogicItem: "Санал асуулгын урсгалыг өөрчлөх дүрэм үүсгэнэ үү.",
    // "Copy"
    copy: "Хуулах",
    // "Duplicate"
    duplicate: "Хуулбарлах",
    // "Add to toolbox"
    addToToolbox: "Хэрэглүүрт нэмэх",
    // "Delete Panel"
    deletePanel: "Панел устгах",
    // "Delete Question"
    deleteQuestion: "Асуулт устгах",
    // "Convert to"
    convertTo: "Хувиргах",
    // "Drag element"
    drag: "Чирэх"
  },
  // Creator tabs
  tabs: {
    // "Preview"
    preview: "Урьдчилан харах",
    // "Themes"
    theme: "Сэдвүүд",
    // "Translations"
    translation: "Орчуулга",
    // "Designer"
    designer: "Удирдлага",
    // "JSON Editor"
    json: "JSON засварлагч",
    // "Logic"
    logic: "Логик"
  },
  // Question types
  qt: {
    // "Default"
    default: "Нэг сонголттой",
    // "Checkboxes"
    checkbox: "Олон сонголттой",
    // "Long Text"
    comment: "Нээлттэй",
    // "Image Picker"
    imagepicker: "Зураг сонгох",
    // "Ranking"
    ranking: "Дэс дараалалд оруулах",
    // "Image"
    image: "Зураг",
    // "Dropdown"
    dropdown: "Сонголттой асуумж",
    // "Multi-Select Dropdown"
    tagbox: "Tag Box",
    // "File Upload"
    file: "Файл",
    // "HTML"
    html: "HTML",
    // "Single-Select Matrix"
    matrix: "Нэг сонголттот матриц",
    // "Multi-Select Matrix"
    matrixdropdown: "Олон сонголтот матриц",
    // "Dynamic Matrix"
    matrixdynamic: "Динамик матриц",
    // "Multiple Textboxes"
    multipletext: "Олон бичилт",
    // "Panel"
    panel: "Панел",
    // "Dynamic Panel"
    paneldynamic: "Динамик панел",
    // "Radio Button Group"
    radiogroup: "Radiogroup",
    // "Rating Scale"
    rating: "Үнэлэх",
    // [Auto-translated] "Slider"
    slider: "Слайдер",
    // "Single-Line Input"
    text: "Богино хариулттай ",
    // "Yes/No (Boolean)"
    boolean: "Тийм/Үгүй",
    // "Expression (read-only)"
    expression: "Илэрхийлэл (зөвхөн унших)",
    // "Signature"
    signaturepad: "Гарын үсэг",
    // "Button Group"
    buttongroup: "Багц товч"
  },
  toolboxCategories: {
    // "General"
    general: "Ерөнхий",
    // "Choice Questions"
    choice: "Сонголттой асуултууд",
    // "Text Input Questions"
    text: "Хариулт бичих асуултууд",
    // "Containers"
    containers: "Сав",
    // "Matrix Questions"
    matrix: "Матрицан асуултууд",
    // "Misc"
    misc: "Бусад"
  },
  // Strings in SurveyJS Creator
  ed: {
    // "Default ({0})"
    defaultLocale: "Үндсэн ({0})",
    // "Survey"
    survey: "Санал асуулга",
    // "Settings"
    settings: "Тохиргоо",
    // "Open settings"
    settingsTooltip: "Тохиргоог нээх",
    // "Survey Settings"
    surveySettings: "Санал асуулгын тохиргоо",
    // "Survey settings"
    surveySettingsTooltip: "Судалгааны тохиргоо",
    // [Auto-translated] "Theme Settings"
    themeSettings: "Сэдвийн тохиргоо",
    // [Auto-translated] "Theme settings"
    themeSettingsTooltip: "Сэдвийн тохиргоо",
    // [Auto-translated] "Creator Settings"
    creatorSettingTitle: "Зохион бүтээгчийн тохиргуулууд",
    // "Show Panel"
    showPanel: "Панел харуулах",
    // "Hide Panel"
    hidePanel: "Панел нуух",
    // "Select previous"
    prevSelected: "Өмнөхийг сонгох",
    // "Select next"
    nextSelected: "Дараагийнхыг сонгох",
    // [Auto-translated] "Focus previous"
    prevFocus: "Өмнөх анхаарлаа төвлөрүүлэх",
    // [Auto-translated] "Focus next"
    nextFocus: "Дараа нь анхаарлаа төвлөрүүл",
    // "Survey"
    surveyTypeName: "Санал асуулга",
    // "Page"
    pageTypeName: "Хуудас",
    // "Panel"
    panelTypeName: "Панел",
    // "Question"
    questionTypeName: "Асуулт",
    // "Column"
    columnTypeName: "Багана",
    // "Add New Page"
    addNewPage: "Шинэ хуудас нэмэх",
    // "Scroll to the Right"
    moveRight: "Баруун тийш гүйлгэх",
    // "Scroll to the Left"
    moveLeft: "Зүүн тийш гүйлгэх",
    // "Delete Page"
    deletePage: "Хуудас устгах",
    // "Edit Page"
    editPage: "Хуудас засварлах",
    // "Edit"
    edit: "Засах",
    // "page"
    newPageName: "Хуудас",
    // "question"
    newQuestionName: "Асуулт",
    // "panel"
    newPanelName: "Панелийн нэр",
    // "text"
    newTextItemName: "Текст",
    // "Default"
    defaultV2Theme: "Үндсэн",
    // "Modern"
    modernTheme: "Орчийн үеийн",
    // "Default (legacy)"
    defaultTheme: "Үндсэн (legacy)",
    // "Preview Survey Again"
    testSurveyAgain: "Санал асуулгыг дахин урьдчилан харах",
    // "Survey width: "
    testSurveyWidth: "Санал асуулгын өргөн: ",
    // "You had to navigate to"
    navigateToMsg: "You had to navigate to",
    // "Save Survey"
    saveSurvey: "Санал асуулга хадгалах",
    // "Save Survey"
    saveSurveyTooltip: "Санал асуулга хадгалах",
    // [Auto-translated] "Save Theme"
    saveTheme: "Сэдэв хадгалах",
    // [Auto-translated] "Save Theme"
    saveThemeTooltip: "Сэдэв хадгалах",
    // "Hide errors"
    jsonHideErrors: "Алдааг нуух",
    // "Show errors"
    jsonShowErrors: "Алдааг харуулах",
    // "Undo"
    undo: "Буцаах",
    // "Redo"
    redo: "Дахих",
    // "Undo last change"
    undoTooltip: "Сүүлийн өөрчлөлтийг буцаах",
    // "Redo the change"
    redoTooltip: "Сүүлин өөрчлөлтийг дахих ",
    // [Auto-translated] "Expand"
    expandTooltip: "Өргөтгөх",
    // [Auto-translated] "Collapse"
    collapseTooltip: "Нуралт",
    // "Expand All"
    expandAllTooltip: "Бүх хүрээгээ тэлнэ",
    // "Collapse All"
    collapseAllTooltip: "Бүх нуралт",
    // [Auto-translated] "Zoom In"
    zoomInTooltip: "Томруулах",
    // [Auto-translated] "Zoom to 100%"
    zoom100Tooltip: "100% хүртэл томруулах",
    // [Auto-translated] "Zoom Out"
    zoomOutTooltip: "Томруулах",
    // [Auto-translated] "Lock expand/collapse state for questions"
    lockQuestionsTooltip: "Асуултын үед lock/expand/collapse state",
    // "Show more"
    showMoreChoices: "Дэлгэрэнгүй харуулах",
    // "Show less"
    showLessChoices: "Бага мэдээлэл харуулах",
    // "Copy"
    copy: "Хуулах",
    // "Cut"
    cut: "Таслах",
    // "Paste"
    paste: "Буулгах",
    // "Copy selection to clipboard"
    copyTooltip: "Самбараас сонгогдсон хэсгийг хуулах",
    // "Cut selection to clipboard"
    cutTooltip: "Самбараас сонгогдсон хэсгийг таслах",
    // "Paste from clipboard"
    pasteTooltip: "Самбараас буулгах",
    // "Options"
    options: "Тохиргоо",
    // "Generate Valid JSON"
    generateValidJSON: "Бодит JSON үүсгэх",
    // "Generate Readable JSON"
    generateReadableJSON: "Ойлгомжтой JSON үүсгэх",
    // "Toolbox"
    toolbox: "Хэрэглүүр",
    // "Properties"
    "property-grid": "Өмнөх",
    // [Auto-translated] "Search"
    toolboxSearch: "Хайх",
    // [Auto-translated] "Type to search..."
    toolboxFilteredTextPlaceholder: "Хайлт хийх төрөл...",
    // [Auto-translated] "No results found"
    toolboxNoResultsFound: "Ямар ч үр дүн олдсонгүй",
    // "Type to search..."
    propertyGridFilteredTextPlaceholder: "Хайхын тулд бичнэ үү.....",
    // [Auto-translated] "No results found"
    propertyGridNoResultsFound: "Ямар ч үр дүн олдсонгүй",
    // [Auto-translated] "Start configuring your form"
    propertyGridPlaceholderTitle: "Формоо тохируулж эхлэх",
    // [Auto-translated] "Click any category icon to explore survey settings. Additional settings will become available once you add a survey element to the design surface."
    propertyGridPlaceholderDescription: "Судалгааны тохиргоог судлахын тулд ямар ч категорийн зургыг дарна уу. Дизайны гадаргуу дээр судалгааны элемент нэмсний дараа нэмэлт тохиргоо хийх боломжтой болно.",
    // "Please correct JSON."
    correctJSON: "JSON засна уу.",
    // "Survey Results "
    surveyResults: "Санал асуулгын хариу",
    // "As Table"
    surveyResultsTable: "Санал асуулгын хариултыг хүснэгтээр харуулах",
    // "As JSON"
    surveyResultsJson: "As JSON",
    // "Question Title"
    resultsTitle: "Асуултын гарчиг",
    // "Question Name"
    resultsName: "Асуултын нэр",
    // "Answer Value"
    resultsValue: "Хариултын утга",
    // "Display Value"
    resultsDisplayValue: "Утга харуулах",
    // "Modified"
    modified: "Өөрчлөлт орсон",
    // "Saving"
    saving: "Хадгалж байна",
    // "Saved"
    saved: "Хадгалсан",
    // "Error"
    propertyEditorError: "Алдаа",
    // "Error! Editor content is not saved."
    saveError: "Алдаа! Зассан агуулга хадгалагдаагүй байна.",
    // "Language Settings"
    translationPropertyGridTitle: "Хэлний тохиргоо",
    // [Auto-translated] "Theme Settings"
    themePropertyGridTitle: "Сэдвийн тохиргоо",
    // [Auto-translated] "Add Language"
    addLanguageTooltip: "Хэл нэмэх",
    // "Languages"
    translationLanguages: "Хэл",
    // [Auto-translated] "Are you certain you wish to delete all strings for this language?"
    translationDeleteLanguage: "Та энэ хэлний бүх уяаг арилгахыг хүсэж байгаа гэдэгтээ итгэлтэй байна уу?",
    // "Select language to translate"
    translationAddLanguage: "Орчуулах хэлийг сонгоно уу",
    // "All Strings"
    translationShowAllStrings: "Бүх текст",
    // "Used Strings Only"
    translationShowUsedStringsOnly: "Зөвхөн байгаа текстүүд",
    // "All Pages"
    translationShowAllPages: "Бүх хуудас",
    // "No strings to translate. Please change the filter."
    translationNoStrings: "Орчуулах зүйл байхгүй. Шүүлтийг өөрчилнө үү.",
    // "Export to CSV"
    translationExportToSCVButton: "CSV экспорт хийх",
    // "Import from CSV"
    translationImportFromSCVButton: "CSV импорт хийх",
    // [Auto-translated] "Auto-translate All"
    translateUsigAI: "Авто-орчуулга Бүгд",
    // [Auto-translated] "Translate from: "
    translateUsigAIFrom: "Аас орчуул: ",
    // [Auto-translated] "Untranslated strings"
    translationDialogTitle: "Огт орчуулагдаагүй уяанууд",
    // "Merge {0} with default locale"
    translationMergeLocaleWithDefault: "{0}-г суурь хэлтэй нэгтгэх",
    // "Translation..."
    translationPlaceHolder: "Орчуулга...",
    // [Auto-translated] "Source: "
    translationSource: "Эх сурвалж: ",
    // [Auto-translated] "Target: "
    translationTarget: "Зорилго: ",
    // [Auto-translated] "YouTube links are not supported."
    translationYouTubeNotSupported: "YouTube-ийн холбоосууд дэмжигдээгүй.",
    // [Auto-translated] "Export"
    themeExportButton: "Экспорт",
    // [Auto-translated] "Import"
    themeImportButton: "Импорт",
    // [Auto-translated] "Export"
    surveyJsonExportButton: "Экспорт",
    // [Auto-translated] "Import"
    surveyJsonImportButton: "Импорт",
    // [Auto-translated] "Copy to clipboard"
    surveyJsonCopyButton: "Хавчуургыг хуулах",
    // [Auto-translated] "Reset theme settings to default"
    themeResetButton: "Дахин сэдэвчилсэн тохиргоог default хийх",
    // [Auto-translated] "Do you really want to reset the theme? All your customizations will be lost."
    themeResetConfirmation: "Та сэдвийг дахин хөндөхийг үнэхээр хүсэж байна уу? Таны бүх тохируулга үгүй болно.",
    // [Auto-translated] "Yes, reset the theme"
    themeResetConfirmationOk: "Тийм ээ, сэдвийг дахин тохируулах",
    // "Bold"
    bold: "Тод",
    // "Italic"
    italic: "Налуу",
    // "Underline"
    underline: "Доогуур зураас",
    // "Add Question"
    addNewQuestion: "Асуулт нэмэх",
    // "Select page..."
    selectPage: "Хуудас сонгох...",
    // [Auto-translated] "Choices are copied from"
    carryForwardChoicesCopied: "Сонголтыг хуулбарладаг",
    // [Auto-translated] "Choices are loaded from a web service."
    choicesLoadedFromWebText: "Сонголтыг вэбийн үйлчилгээнээс ачаалдаг.",
    // [Auto-translated] "Go to settings"
    choicesLoadedFromWebLinkText: "Тохиргоо руу явах",
    // [Auto-translated] "Preview of loaded choice options"
    choicesLoadedFromWebPreviewTitle: "Ачаалагдсан сонголтын урьдчилсан үзүүлэлт",
    // "HTML content will be here."
    htmlPlaceHolder: "HTML агуулга энд байрлана.",
    // "Drop a question from the toolbox here."
    panelPlaceHolder: "Энд хэрэглүүрээс асуулт чирнэ үү.",
    // "The survey is empty. Drag an element from the toolbox or click the button below."
    surveyPlaceHolder: "Санал асуулга хоосон байна. Хэрэглүүрээс асуулт чирнэ үү эсвэл доорх товчийг дарна уу.",
    // [Auto-translated] "The page is empty. Drag an element from the toolbox or click the button below."
    pagePlaceHolder: "Хуудас хоосон байна. Багажны хайрцагнаас элементийг чирэх эсвэл доорх товчийг дарна уу.",
    // [Auto-translated] "Drag and drop an image here or click the button below and choose an image to upload"
    imagePlaceHolder: "Энд зураг чирж унагаах эсвэл доорх товчийг дарж татаж авах зургийг сонгоно уу",
    // "Click the \"Add Question\" button below to start creating your form."
    surveyPlaceHolderMobile: "Доорх \"Асуулт нэмэх\" товчийг дарж формоо үүсгэж эхэлнэ.",
    // [Auto-translated] "Your form is empty"
    surveyPlaceholderTitle: "Таны маягт хоосон байна",
    // [Auto-translated] "Your form is empty"
    surveyPlaceholderTitleMobile: "Таны маягт хоосон байна",
    // [Auto-translated] "Drag an element from the toolbox or click the button below."
    surveyPlaceholderDescription: "Toolbox-аас элементийг чирч авах эсвэл доорх товчийг дар.",
    // [Auto-translated] "Drag an element from the toolbox or click the button below."
    surveyPlaceholderDescriptionMobile: "Toolbox-аас элементийг чирч авах эсвэл доорх товчийг дар.",
    // [Auto-translated] "No preview"
    previewPlaceholderTitle: "Урьдчилсан танилцуулга байхгүй",
    // [Auto-translated] "No preview"
    previewPlaceholderTitleMobile: "Урьдчилсан танилцуулга байхгүй",
    // [Auto-translated] "The survey doesn't contain any visible elements."
    previewPlaceholderDescription: "Судалгаанд ямар ч үзэгдэх зүйл байдаггүй.",
    // [Auto-translated] "The survey doesn't contain any visible elements."
    previewPlaceholderDescriptionMobile: "Судалгаанд ямар ч үзэгдэх зүйл байдаггүй.",
    // [Auto-translated] "No strings to translate"
    translationsPlaceholderTitle: "Орчуулах мөр байхгүй",
    // [Auto-translated] "No strings to translate"
    translationsPlaceholderTitleMobile: "Орчуулах мөр байхгүй",
    // [Auto-translated] "Add elements to your form or change the strings filter in the toolbar."
    translationsPlaceholderDescription: "Маягт дээрээ элементүүдийг нэмэх эсвэл toolbar дээрх strings шүүлтүүрийг өөрчил.",
    // [Auto-translated] "Add elements to your form or change the strings filter in the toolbar."
    translationsPlaceholderDescriptionMobile: "Маягт дээрээ элементүүдийг нэмэх эсвэл toolbar дээрх strings шүүлтүүрийг өөрчил.",
    // "Click the \"Add Question\" button below to add a new element to the page."
    pagePlaceHolderMobile: "Хуудас дээр шинэ элемент нэмэхийн тулд доорх \"Асуулт нэмэх\" товчийг дарна уу.",
    // "Click the \"Add Question\" button below to add a new element to the panel."
    panelPlaceHolderMobile: "Доорх \"Асуулт нэмэх\" товчийг дарж панел дээр шинэ элемент нэмнэ.",
    // [Auto-translated] "Click the button below and choose an image to upload"
    imagePlaceHolderMobile: "Доорх товчийг дарж татаж авах зургийг сонгоно уу",
    // [Auto-translated] "Choose Image"
    imageChooseImage: "Зураг сонгох",
    // "Add {0}"
    addNewTypeQuestion: "{0} нэмэх", // {0} is localizable question type
    // "[LOGO]"
    chooseLogoPlaceholder: "[Лого]",
    // "Item "
    choices_Item: "Хэсэг ",
    // [Auto-translated] "Select a file"
    selectFile: "Файлыг сонгох",
    // [Auto-translated] "Remove the file"
    removeFile: "Файлыг хасах",
    lg: {
      // "Add New Rule"
      addNewItem: "Шинэ дүрэм нэмэх",
      // "Create a rule to customize the flow of the survey."
      empty_tab: "Санал асуулгын урсгалыг өөрчлөх дүрэм үүсгэнэ үү.",
      // [Auto-translated] "No logical rules"
      logicPlaceholderTitle: "Логик дүрэм байхгүй",
      // [Auto-translated] "No logical rules"
      logicPlaceholderTitleMobile: "Логик дүрэм байхгүй",
      // [Auto-translated] "Create a rule to customize the flow of the survey."
      logicPlaceholderDescription: "Судалгааны явцыг тохируулах дүрэм зохио.",
      // [Auto-translated] "Create a rule to customize the flow of the survey."
      logicPlaceholderDescriptionMobile: "Судалгааны явцыг тохируулах дүрэм зохио.",
      // "Show/hide page"
      page_visibilityName: "Хуудас харуулах (нуух)",
      // "Enable/disable page"
      page_enableName: "Хуудас идэвхжүүлэх (идэвхгүй болгох)",
      // [Auto-translated] "Make page required"
      page_requireName: "Шаардлагатай хуудас хийх",
      // "Show/hide panel"
      panel_visibilityName: "Панел (нуух) харуулах",
      // "Enable/disable panel"
      panel_enableName: "Панел (идэвхгүй болгох) идэвхжүүлэх",
      // [Auto-translated] "Make panel required"
      panel_requireName: "Панелийг шаардлагатай болго",
      // "Show/hide question"
      question_visibilityName: "Асуулт харуулах (нуух)",
      // "Enable/disable question"
      question_enableName: "Асуулт идэвхжүүлэх (идэвхгүй болгох)",
      // "Make question required"
      question_requireName: "Асуултыг заавал бөглөөөөх болгох",
      // [Auto-translated] "Reset question value"
      question_resetValueName: "Асуултын үнэ цэнийг дахин тогтоох",
      // [Auto-translated] "Set question value"
      question_setValueName: "Асуултын үнэ цэнийг тогтоох",
      // "Show/hide column"
      column_visibilityName: "Багана харуулах (нуух).",
      // "Enable/disable column"
      column_enableName: "Багана идэвхжүүлэх (идэвхгүй болгох).",
      // "Make column required"
      column_requireName: "Баганыг заавал бөглөөөөх болгох",
      // [Auto-translated] "Reset column value"
      column_resetValueName: "Reset баганын үнэ цэнэ",
      // [Auto-translated] "Set column value"
      column_setValueName: "Баганын үнэ цэнийг тогтоох",
      // "Complete survey"
      trigger_completeName: "Санал асуулга дуусгах",
      // "Set answer"
      trigger_setvalueName: "Хариулт оруулах",
      // "Copy answer"
      trigger_copyvalueName: "Хариулт хуулах",
      // "Skip to question"
      trigger_skipName: "Асуулт руу алгасах",
      // "Run expression"
      trigger_runExpressionName: "Илэрхийллийг ажиллуулах",
      // "Set \"Thank You\" page markup"
      completedHtmlOnConditionName: "\"Санал асуулга амжилттай бөглөгдсөн\" хуудсын тэмдэглэгээг оруулах",
      // "Make the page visible when the logical expression evaluates to true. Otherwise, keep the page invisible."
      page_visibilityDescription: "Логик илэрхийлэл биелэгдсэн тохиолдолд хуудсыг харуулах. Бусад үед нуух.",
      // "Make the page visible when the logical expression evaluates to true. Otherwise, keep the panel invisible."
      panel_visibilityDescription: "Логик илэрхийлэл биелэгдсэн тохиолдолд панелийг харуулах. Бусад үед нуух.",
      // "Make the panel and all elements inside it enabled when the logical expression evaluates to true. Otherwise, keep them disabled."
      panel_enableDescription: "Логик илэрхийлэл биелэгдсэн тохиолдолд панел ба түүн доторх бүх элементийг идэвхжүүлэх. Бусад үед бүгдийг идэвхгүй байлгах.",
      // "Make the question visible when the logical expression evaluates to true. Otherwise, keep the question invisible."
      question_visibilityDescription: "Логик илэрхийлэл биелэгдсэн тохиолдолд асуултыг харуулах. Бусад үед нуух.",
      // "Make the question enabled when the logical expression evaluates to true. Otherwise, keep the question disabled."
      question_enableDescription: "Логик илэрхийлэл биелэгдсэн тохиолдолд хуудсыг идэвхжүүлэх. Бусад үед идэвхгүй болгох.",
      // "Question becomes required when the logical expression evaluates to true."
      question_requireDescription: "Логик илэрхийлэл биелэгдсэн тохиолдолд асуулт нь заавал бөглөх болох.",
      // "When the logical expression evaluates to true, the survey ends, and the respondent sees the \"Thank you\" page."
      trigger_completeDescription: "Логик илэрхийлэл биелэгдсэн тохиолдолд санал асуулга амжилттай бөглөн хэрэглэгч 'Баярлалаа' хуудсыг харна.",
      // "When question values used in the logical expression are changed, and the expression evaluates to true, the specified value is assigned to the selected question."
      trigger_setvalueDescription: "Логик илэрхийлэл биелэгдсэн тохиолдолд сонгосон асуултын утгыг тохируулна.",
      // "When question values used in the logical expression are changed, and the expression evaluates to true, the value of the selected question is copied to another question."
      trigger_copyvalueDescription: "Логик илэрхийлэл биелэгдсэн тохиолдолд сонгосон асуултын утгыг өөр сонгосон асуултын хариулт болгон харуулна.",
      // "When the logical expression evaluates to true, the survey focuses/jumps to the selected question."
      trigger_skipDescription: "Логик илэрхийлэл биелэгдсэн тохиолдолд санал асуулга сонгосон асуултыг алгасна / харуулна.",
      // "When the logical expression evaluates to true, the survey evaluates another expression. Optionally, the result of the latter expression can be assigned as a value to the selected question"
      trigger_runExpressionDescription: "Логик илэрхийлэл биелэгдсэн тохиолдолд хэрэглэгчийн илэрхийллийг ажиллуулна. Та энэ илэрхийллийн үр дүнг  сонгосон асуултын хариулт болгоно.",
      // "If the logical expression evaluates to true, the \"Thank You\" page displays the specified content."
      completedHtmlOnConditionDescription: "Хэрэв логик илэрхийлэл биелэгдсэн тохиолдолд үндсэн 'Баярлалаа' хуудас зааж өгсөн хуудсаар солигдоно.",
      // "When expression: '{0}' returns true"
      itemExpressionText: "Илэрхийлэл: '{0}' биелсэн бол", // {0} - the expression
      // "New rule"
      itemEmptyExpressionText: "Шинэ дүрэм",
      // "make page {0} visible"
      page_visibilityText: "Хуудсыг {0} харагддаг болгох", // {0} page name
      // "make panel {0} visible"
      panel_visibilityText: "{0} панелийг харагддаг болгох", // {0} panel name
      // "make panel {0} enable"
      panel_enableText: "{0} панелийг идэвхжүүлэх", // {0} panel name
      // "make question {0} visible"
      question_visibilityText: "{0} асуултыг харагддаг болгох", // {0} question name
      // "make question {0} enable"
      question_enableText: "{0} асуултыг идэвхжүүлэх", // {0} question name
      // "make question {0} required"
      question_requireText: "{0} асуултыг заавал бөглөх болгох", // {0} question name
      // [Auto-translated] "reset value for question: {0}"
      question_resetValueText: "асуултын үнэ цэнийг дахин тогтоох нь: {0}", // {0} question name.
      // [Auto-translated] "assign value: {1} to question: {0}"
      question_setValueText: "үнэ цэнийг даалгах нь: {1} асуулт: {0}", // {0} question name and {1} setValueExpression
      // "make column {0} of question {1} visible"
      column_visibilityText: "{0} баганын {1} асуултыг харагддаг болгох", // {0} column name, {1} question name
      // "make column {0} of question {1} enable"
      column_enableText: "{0} баганын {1} асуултыг идэвхжүүлэх", // {0} column name, {1} question name
      // "make column {0} of question {1} required"
      column_requireText: "{0} баганын {1} асуултыг заавал бөглөх болгох", // {0} column name, {1} question name
      // [Auto-translated] "reset cell value for column: {0}"
      column_resetValueText: "баганын эсийн үнэ цэнийг дахин тогтоох: {0}", // {0} column name
      // [Auto-translated] "assign cell value: {1} to column: {0}"
      column_setValueText: "эсийн үнэ цэнийг хуваарил: {1} багана: {0}", // {0} column name and {1} setValueExpression
      // [Auto-translated] "An expression whose result will be assigned to the target question."
      setValueExpressionPlaceholder: "Үр дүн нь бай асуултанд оногдох илэрхийлэлт.",
      // "survey becomes completed"
      trigger_completeText: "Санал асуулга амжилттай бөглөсөн.",
      // "set into question: {0} value {1}"
      trigger_setvalueText: "{0} Асуултад оруулах утга: {1}", // {0} question name, {1} setValue
      // [Auto-translated] "clear question value: {0}"
      trigger_setvalueEmptyText: "тодорхой асуултын үнэ цэнэ: {0}", // {0} question name
      // "copy into question: {0} value from question {1}"
      trigger_copyvalueText: "{0} Асуулт руу хуулах утга: {1}", // {0} and {1} question names
      // "survey skip to the question {0}"
      trigger_skipText: "{0} Санал асуулгын асуулт руу үсрэх", // {0} question name
      // "run expression: '{0}'"
      trigger_runExpressionText1: "'{0}' илэрхийлэлг ажиллуулах: ", // {0} the expression
      // " and set its result into question: {0}"
      trigger_runExpressionText2: " Түүний хариултыг асуултад оруулах: {0}", // {0} question name
      // "show custom text for the \"Thank You\" page."
      completedHtmlOnConditionText: "'Баярлалаа' хуудсанд тусгай текст харуулах.",
      // "All Questions"
      showAllQuestions: "Бүх асуулт",
      // "All Action Types"
      showAllActionTypes: "Бүх үйлдлийн төрлүүд",
      // "Condition(s)"
      conditions: "Нөхцөл(үүд)",
      // "Action(s)"
      actions: "Үйлдэл(үүд)",
      // "Define condition(s)"
      expressionEditorTitle: "Нөхцөл(үүд) тодорхойлох",
      // "Define action(s)"
      actionsEditorTitle: "Үйлдэл(үүд) тодорхойлох",
      // "Delete Action"
      deleteAction: "Үйлдлийг устгах",
      // "Add Action"
      addNewAction: "Үйлдэл нэмэх",
      // "Select action..."
      selectedActionCaption: "Үйлдэл сонгох...",
      // "The logic expression is empty or invalid. Please correct it."
      expressionInvalid: "Логик илэрхийлэл хоосон эсвэл алдаатай байна. Засна уу.",
      // "Please add at least one action."
      noActionError: "Ядаж нэг үйлдэл оруулна уу.",
      // "Please fix issues in your action(s)."
      actionInvalid: "Үйлдэл(үүд)-ийнхээ асуудлыг шийднэ үү.",
      // "Logical rules are incomplete"
      uncompletedRule_title: "Табыг орхих уу?",
      // "You have not completed some of the logical rules. If you leave the tab now, the changes will be lost. Do you still want to leave the tab without completing the changes?"
      uncompletedRule_text: "Нэг эсвэл олон логик дүрэм дутуу бичигдсэн байна. Табыг хаавал, оруулсан засварууд арилна. Та табыг хаахдаа итгэлтэй байна уу?",
      // "Yes"
      uncompletedRule_apply: "Тийм",
      // "No, I want to complete the rules"
      uncompletedRule_cancel: "Үгүй, дүрмийг үргэлжлүүлж бичиж дуусгах."
    }
  },
  // Property Editors
  pe: {
    panel: {
      // [Auto-translated] "Panel name"
      name: "Панелийн нэр",
      // [Auto-translated] "Panel title"
      title: "Панел цол",
      // [Auto-translated] "Panel description"
      description: "Панел дүрслэл",
      // [Auto-translated] "Make the panel visible if"
      visibleIf: "Хэрэв панелыг ил гаргах",
      // [Auto-translated] "Make the panel required if"
      requiredIf: "Шаардлагатай бол панел хий",
      // [Auto-translated] "Question order within the panel"
      questionOrder: "Хяналтын шатны доторх асуултын дараалал",
      // [Auto-translated] "Move the panel to page"
      page: "Панелийг хуудас руу шилжүүл",
      // [Auto-translated] "Display the panel on a new line"
      startWithNewLine: "Самбарыг шинэ шугам дээр үзүүл",
      // [Auto-translated] "Panel collapse state"
      state: "Панел нурах байдал",
      // [Auto-translated] "Inline panel width"
      width: "Инлин хавтан өргөн",
      // [Auto-translated] "Minimum panel width"
      minWidth: "Хамгийн бага хавтан өргөн",
      // [Auto-translated] "Maximum panel width"
      maxWidth: "Хамгийн их хавтан өргөн",
      // [Auto-translated] "Number this panel"
      showNumber: "Энэ хавсралтыг дугаарлах"
    },
    panellayoutcolumn: {
      // [Auto-translated] "Effective width, %"
      effectiveWidth: "Үр дүнтэй өргөн, %",
      // [Auto-translated] "Question title width, px"
      questionTitleWidth: "Асуултын гарчиг өргөн, px"
    },
    paneldynamic: {
      // [Auto-translated] "Panel name"
      name: "Панелийн нэр",
      // [Auto-translated] "Panel title"
      title: "Панел цол",
      // [Auto-translated] "Panel description"
      description: "Панел дүрслэл",
      // [Auto-translated] "Entry display mode"
      displayMode: "Оролт үзүүлэх режим",
      // [Auto-translated] "Make the panel visible if"
      visibleIf: "Хэрэв панелыг ил гаргах",
      // [Auto-translated] "Make the panel required if"
      requiredIf: "Шаардлагатай бол панел хий",
      // [Auto-translated] "Move the panel to page"
      page: "Самбарыг хуудас руу зөөх",
      // [Auto-translated] "Display the panel on a new line"
      startWithNewLine: "Самбарыг шинэ шугам дээр үзүүл",
      // [Auto-translated] "Panel collapse state"
      state: "Панел нурах байдал",
      // [Auto-translated] "Inline panel width"
      width: "Инлин хавтан өргөн",
      // [Auto-translated] "Minimum panel width"
      minWidth: "Хамгийн бага хавтан өргөн",
      // [Auto-translated] "Maximum panel width"
      maxWidth: "Хамгийн их хавтан өргөн",
      // [Auto-translated] "Confirm entry removal"
      confirmDelete: "Оролтыг устгахыг баталгаажуулах",
      // [Auto-translated] "Entry description pattern"
      templateDescription: "Оролтын тодорхойлолтын загвар",
      // [Auto-translated] "Entry title pattern"
      templateTitle: "Оролт гарчгийн загвар",
      // [Auto-translated] "Empty panel text"
      noEntriesText: "Хоосон хавтан текст",
      // [Auto-translated] "Tab title pattern"
      templateTabTitle: "Таб нэрийн загвар",
      // [Auto-translated] "Tab title placeholder"
      tabTitlePlaceholder: "Таб нэрийн хуудас эзэмшигч",
      // [Auto-translated] "Make an individual entry visible if"
      templateVisibleIf: "Хэрэв хувь хүний оролтыг ил харагдах болго",
      // [Auto-translated] "Number the panel"
      showNumber: "Хавтангийн дугаар",
      // [Auto-translated] "Panel title alignment"
      titleLocation: "Панел цолны зохицуулалт",
      // [Auto-translated] "Panel description alignment"
      descriptionLocation: "Панел дүрслэлийн зохицуулалт",
      // [Auto-translated] "Question title alignment"
      templateQuestionTitleLocation: "Асуулт нэрийн уялдаа",
      // [Auto-translated] "Question title width"
      templateQuestionTitleWidth: "Асуултын гарчгийн өргөн",
      // [Auto-translated] "Error message alignment"
      templateErrorLocation: "Алдааны мессежийн зохицуулалт",
      // [Auto-translated] "New entry location"
      newPanelPosition: "Шинэ оролцооны байршил",
      // [Auto-translated] "Show the progress bar"
      showRangeInProgress: "Хөгжил дэвшлийн барыг харуул",
      // [Auto-translated] "Prevent duplicate responses in the following question"
      keyName: "Дараах асуултад хувилж хариулахаас сэргийлье"
    },
    question: {
      // [Auto-translated] "Question name"
      name: "Асуулт нэр",
      // [Auto-translated] "Question title"
      title: "Асуулт гарчиг",
      // [Auto-translated] "Question description"
      description: "Асуултын тодорхойлолт",
      // [Auto-translated] "Show the title and description"
      showTitle: "Гарчиг, тайлбарыг харуул",
      // [Auto-translated] "Make the question visible if"
      visibleIf: "Асуултыг ил тод болгох",
      // [Auto-translated] "Make the question required if"
      requiredIf: "Шаардлагатай асуултыг тавих",
      // [Auto-translated] "Move the question to page"
      page: "Асуултыг хуудас руу шилжүүл",
      // [Auto-translated] "Question box collapse state"
      state: "Асуултын хайрцаг нурах байдал",
      // [Auto-translated] "Number this question"
      showNumber: "Энэ асуултыг дугаарла.",
      // [Auto-translated] "Question title alignment"
      titleLocation: "Асуулт нэрийн уялдаа",
      // [Auto-translated] "Question description alignment"
      descriptionLocation: "Асуулт тодорхойлолтын зохицуулалт",
      // [Auto-translated] "Error message alignment"
      errorLocation: "Алдааны мессежийн зохицуулалт",
      // [Auto-translated] "Increase the inner indent"
      indent: "Дотоод индентийг нэмэгдүүлэх",
      // [Auto-translated] "Inline question width"
      width: "Инлайн асуултын өргөн",
      // [Auto-translated] "Minimum question width"
      minWidth: "Хамгийн бага асуултын өргөн",
      // [Auto-translated] "Maximum question width"
      maxWidth: "Хамгийн их асуултын өргөн",
      // [Auto-translated] "Update input field value"
      textUpdateMode: "Оролтын талбайн үнэ цэнийг шинэчлэх"
    },
    signaturepad: {
      // [Auto-translated] "Signature area width"
      signatureWidth: "Гарын үсэг зурах хэсгийн өргөн",
      // [Auto-translated] "Signature area height"
      signatureHeight: "Гарын үсэг зурах хэсгийн өндөр",
      // [Auto-translated] "Auto-scale the signature area"
      signatureAutoScaleEnabled: "Авто замын тэмдэг тэмдэглэгээний талбай",
      // [Auto-translated] "Show a placeholder within signature area"
      showPlaceholder: "Гарын үсгийн талбайн дотор байрлуулагчийг үзүүлэх",
      // [Auto-translated] "Placeholder text"
      placeholder: "Placeholder текст",
      // [Auto-translated] "Placeholder text in read-only or preview mode"
      placeholderReadOnly: "Зөвхөн унших эсвэл урьдчилан харах хэлбэрээр placeholder текст",
      // [Auto-translated] "Show the Clear button within signature area"
      allowClear: "Гарын үсэг зурах хэсэгт Clear товчийг харуул",
      // [Auto-translated] "Minimum stroke width"
      penMinWidth: "Хамгийн бага хэмжээний өргөнүүд",
      // [Auto-translated] "Maximum stroke width"
      penMaxWidth: "Stroke-ийн хамгийн их өргөнүүд",
      // [Auto-translated] "Stroke color"
      penColor: "Судасны өнгө"
    },
    comment: {
      // [Auto-translated] "Input field height (in lines)"
      rows: "Оролтын талбайн өндөр (шугамд)"
    },
    // "Question numbering"
    showQuestionNumbers: "Асуултын дугаарлалт",
    // "Question indexing type"
    questionStartIndex: "Эхлэх индекс (тоо эсвэл үсэг)",
    expression: {
      // [Auto-translated] "Expression name"
      name: "Илэрхийллийн нэр",
      // [Auto-translated] "Expression title"
      title: "Өгүүлбэрийн гарчиг",
      // [Auto-translated] "Expression description"
      description: "Илэрхийллийн тодорхойлолт",
      // [Auto-translated] "Expression"
      expression: "Өгүүлбэр"
    },
    trigger: {
      // [Auto-translated] "Expression"
      expression: "Өгүүлбэр"
    },
    calculatedvalue: {
      // [Auto-translated] "Expression"
      expression: "Өгүүлбэр"
    },
    // survey templates
    survey: {
      // [Auto-translated] "Survey title"
      title: "Судалгааны гарчиг",
      // [Auto-translated] "Survey description"
      description: "Судалгааны тодорхойлолт",
      // [Auto-translated] "Make the survey read-only"
      readOnly: "Судалгааг зөвхөн унших хэлбэртэй болго"
    },
    page: {
      // [Auto-translated] "Page name"
      name: "Хуудасны нэр",
      // [Auto-translated] "Page title"
      title: "Хуудасны гарчиг",
      // [Auto-translated] "Page description"
      description: "Хуудасны тодорхойлолт",
      // [Auto-translated] "Make the page visible if"
      visibleIf: "Хуудсыг ил тод болгох",
      // [Auto-translated] "Make the page required if"
      requiredIf: "Шаардлагатай хуудсыг хий",
      // [Auto-translated] "Time limit to complete the page"
      timeLimit: "Хуудсыг үзэж дуусгах хугацаа",
      // [Auto-translated] "Question order on the page"
      questionOrder: "Асуулт самбар хуудсан дээр"
    },
    matrixdropdowncolumn: {
      // [Auto-translated] "Column name"
      name: "Баганын нэр",
      // [Auto-translated] "Column title"
      title: "Баганын нэр",
      // [Auto-translated] "Prevent duplicate responses"
      isUnique: "Хуулбарласан хариу үйлдэл үзүүлэхээс сэргийлье",
      // [Auto-translated] "Column width"
      width: "Баганын өргөн",
      // [Auto-translated] "Minimum column width"
      minWidth: "Баганын хамгийн бага өргөн",
      // [Auto-translated] "Input field height (in lines)"
      rows: "Оролтын талбайн өндөр (шугамд)",
      // [Auto-translated] "Make the column visible if"
      visibleIf: "Хэрэв баганыг харах боломжтой болго",
      // [Auto-translated] "Make the column required if"
      requiredIf: "Шаардлагатай баганыг хий",
      // [Auto-translated] "Each option in a separate column"
      showInMultipleColumns: "Тус тусдаа баганад байгаа сонголт бүр"
    },
    matrixcolumn: {
      // [Auto-translated] "Clear others in the same row"
      isExclusive: "Нэг эгнээнд байгаа бусад хүмүүсийг цэвэрлэ"
    },
    multipletextitem: {
      // [Auto-translated] "Name"
      name: "Нэр",
      // [Auto-translated] "Title"
      title: "Нүүр"
    },
    masksettings: {
      // [Auto-translated] "Save masked value in survey results"
      saveMaskedValue: "Судалгааны үр дүнд багласан үнэ цэнийг хэмнэх"
    },
    patternmask: {
      // [Auto-translated] "Value pattern"
      pattern: "Үнэ цэнийн загвар"
    },
    datetimemask: {
      // [Auto-translated] "Minimum value"
      min: "Хамгийн бага үнэ цэнэ",
      // [Auto-translated] "Maximum value"
      max: "Хамгийн их үнэ цэнэ"
    },
    numericmask: {
      // [Auto-translated] "Allow negative values"
      allowNegativeValues: "Сөрөг үнэт зүйлсийг зөвшөөр",
      // [Auto-translated] "Thousands separator"
      thousandsSeparator: "Мянга мянган тусгаарлагч",
      // [Auto-translated] "Decimal separator"
      decimalSeparator: "Decimal тусгаарлагч",
      // [Auto-translated] "Value precision"
      precision: "Үнэ цэнийн нарийвчлал",
      // [Auto-translated] "Minimum value"
      min: "Хамгийн бага үнэ цэнэ",
      // [Auto-translated] "Maximum value"
      max: "Хамгийн их үнэ цэнэ"
    },
    currencymask: {
      // [Auto-translated] "Currency prefix"
      prefix: "Валютын ханш",
      // [Auto-translated] "Currency suffix"
      suffix: "Валютын suffix"
    },
    // [Auto-translated] "Clear others when selected"
    isExclusive: "Сонгогдсон үедээ бусдыг цэвэрлэ",
    // [Auto-translated] "Display both text and value"
    showValue: "Текст болон үнэ цэнийг аль алиныг нь харуул",
    // [Auto-translated] "Require user to enter a comment"
    isCommentRequired: "Хэрэглэгчээс тайлбар оруулахыг шаардах",
    // "Display area height"
    imageHeight: "Зургийн өндөр",
    // "Display area width"
    imageWidth: "Зургийн өргөн",
    // "Join identifier"
    valueName: "Хариултыг дараагийн JSON талбарт хадгалах",
    // [Auto-translated] "Default display value for dynamic texts"
    defaultDisplayValue: "Динамик текстүүдийн стандарт үзүүлэлтийн үнэ",
    // [Auto-translated] "Label alignment"
    rateDescriptionLocation: "Шошгоны зохицл",
    // "Input field width (in characters)"
    size: "Оролтын хэмжээ (тэмдэгтээр)",
    // [Auto-translated] "Cell error message alignment"
    cellErrorLocation: "Эсийн алдааны мессежийн зохицуулалт",
    // [Auto-translated] "Enabled"
    enabled: "Боломжтой болсон",
    // [Auto-translated] "Disabled"
    disabled: "Хөгжлийн бэрхшээлтэй",
    // [Auto-translated] "Inherit"
    inherit: "Өв залгамжл",
    // "Apply"
    apply: "Хэрэгжүүл",
    // "OK"
    ok: "OK",
    // "Save"
    save: "Хадгалах",
    // "Clear"
    clear: "Цэвэрлэх",
    // "Save"
    saveTooltip: "Хадгалах",
    // "Cancel"
    cancel: "Болих",
    // "Set"
    set: "Тааруулах",
    // "Reset"
    reset: "Шинээр тохируулах",
    // "Change"
    change: "Солих",
    // "Refresh"
    refresh: "Шинэчлэх",
    // "Close"
    close: "Хаах",
    // "Delete"
    delete: "Устгах",
    // "Add"
    add: "Нэмэх",
    // "Add New"
    addNew: "Нэмэх",
    // "Click to add an item..."
    addItem: "Хэсэг нэмэх бол дарах...",
    // "Click to remove the item..."
    removeItem: "Хэсэг устгах бол дарах...",
    // "Drag the item"
    dragItem: "Хэсгийг чирэх",
    // "Other"
    addOther: "Бусад",
    // "Select All"
    addSelectAll: "Бүгдийг сонгох",
    // "None"
    addNone: "Аль нь ч биш",
    // "Remove All"
    removeAll: "Бүгдийг устгах",
    // "Edit"
    edit: "Засах",
    // "Return without saving"
    back: "Хадгалахгүйгээр буцах",
    // "Return without saving"
    backTooltip: "Хадгалахгүйгээр буцах",
    // "Save and return"
    saveAndBack: "Хадгалаад буцах",
    // "Save and return"
    saveAndBackTooltip: "Хадгалаад буцах",
    // "Done"
    doneEditing: "Болсон",
    // "Edit Choices"
    editChoices: "Сонголтуудыг засах",
    // "Show Choices"
    showChoices: "Сонголтуудыг харуулах",
    // "Move"
    move: "Шилжүүлэх",
    // "<empty>"
    empty: "<хоосон>",
    // "Value is empty"
    emptyValue: "Утга хоосон байна",
    // "Manual Entry"
    fastEntry: "Гараар оруулах",
    // "Value '{0}' is not unique"
    fastEntryNonUniqueError: "'{0}' утга давтагдаж байна!",
    // "Please limit the number of items from {0} to {1}"
    fastEntryChoicesCountError: "Хэсгийг {0}-оос {1} хүртэл хязгаарлах",
    // [Auto-translated] "Please enter at least {0} items"
    fastEntryChoicesMinCountError: "Наад зах нь {0} зүйлс оруулна уу",
    // "Enter the list of choice options and their IDs in the following format:\n\nid|option\n\nA choice option ID is not visible to respondents and can be used in conditional rules."
    fastEntryPlaceholder: "Та дараах форматын дагуу өгөгдлийг оруулж болно:\nvalue1|text\nvalue2",
    // "Form Entry"
    formEntry: "Маягт оруулах",
    // "Test the service"
    testService: "Үйлчилгээг турших",
    // "Please select the element"
    itemSelectorEmpty: "Элемент сонгоно уу",
    // "Please select the action"
    conditionActionEmpty: "Үйлдэл сонгоно уу",
    // "Select a question..."
    conditionSelectQuestion: "Асуулт сонгох...",
    // "Select a page..."
    conditionSelectPage: "Хуудас сонгох...",
    // "Select a panel..."
    conditionSelectPanel: "Панел сонгох...",
    // "Please enter/select the value"
    conditionValueQuestionTitle: "Утга оруулах/сонгох",
    // "Press ctrl+space to get expression completion hint"
    aceEditorHelp: "ctrl+space дарж илэрхийлэл биелэгдэх сануулга харах.",
    // "Current row"
    aceEditorRowTitle: "Тухайн мөр",
    // "Current panel"
    aceEditorPanelTitle: "Тухайн панел",
    // "For more details please check the documentation"
    showMore: "Дэлгэрэнгүй мэдээллийг баримт бичгээс авна уу.",
    // "Available questions"
    assistantTitle: "Боломжтой асуултууд",
    // "There is should be at least one column or row"
    cellsEmptyRowsColumns: "Багадаа нэг багана эсвэл мөр байх ёстой",
    // "Review before submit"
    showPreviewBeforeComplete: "Санал асуулга явуулхаас өмнө хариултуудыг урьдчилж харах",
    // [Auto-translated] "Enabled by a condition"
    overridingPropertyPrefix: "Нөхцөлөөр боломжтой",
    // [Auto-translated] "Reset"
    resetToDefaultCaption: "Дахин тохируулах",
    // "Please enter a value"
    propertyIsEmpty: "Утга оруулна уу",
    // "Please enter a unique value"
    propertyIsNoUnique: "Дахин давтагдахгүй утга оруулна уу",
    // "Please enter a unique name"
    propertyNameIsNotUnique: "Өөр нэр оруулна уу",
    // "Do not use reserved words: \"item\", \"choice\", \"panel\", \"row\"."
    propertyNameIsIncorrect: "\"Item\", \"монгол\", \"panel\", \"row\" гэсэн үгсийн нөөц үгийг бүү хэрэглэ.",
    // "You don't have any items yet"
    listIsEmpty: "Одоогоор ямар ч зүйл ороогүй байна",
    // "You don't have any choices yet"
    "listIsEmpty@choices": "Одоогор ямар ч сонголт ороогүй байна",
    // [Auto-translated] "You don't have any columns yet"
    "listIsEmpty@columns": "Танд ямар ч багана байхгүй",
    // [Auto-translated] "You don't have layout columns yet"
    "listIsEmpty@gridLayoutColumns": "Танд загварын багана хараахан байхгүй байна",
    // [Auto-translated] "You don't have any rows yet"
    "listIsEmpty@rows": "Чамд ямар ч мөр байхгүй",
    // [Auto-translated] "You don't have any validation rules yet"
    "listIsEmpty@validators": "Танд ямар нэгэн баталгаажуулалтын дүрэм байхгүй байна",
    // [Auto-translated] "You don't have any custom variables yet"
    "listIsEmpty@calculatedValues": "Танд ямар ч хувийн хувьсагч байхгүй",
    // [Auto-translated] "You don't have any triggers yet"
    "listIsEmpty@triggers": "Танд ямар ч өдөөгч байхгүй",
    // [Auto-translated] "You don't have any links yet"
    "listIsEmpty@navigateToUrlOnCondition": "Танд ямар ч холбоос байхгүй",
    // [Auto-translated] "You don't have any pages yet"
    "listIsEmpty@pages": "Танд одоохондоо хуудас байхгүй байна",
    // "Add new choice"
    "addNew@choices": "Сонголт оруулах",
    // [Auto-translated] "Add new column"
    "addNew@columns": "Шинэ багана нэмэх",
    // [Auto-translated] "Add new row"
    "addNew@rows": "Шинэ мөр нэмэх",
    // [Auto-translated] "Add new rule"
    "addNew@validators": "Шинэ дүрэм нэмэх",
    // [Auto-translated] "Add new variable"
    "addNew@calculatedValues": "Шинэ хувьсагч нэмэх",
    // [Auto-translated] "Add new trigger"
    "addNew@triggers": "Шинэ триггер нэмэх",
    // [Auto-translated] "Add new URL"
    "addNew@navigateToUrlOnCondition": "Шинэ URL нэмэх",
    // [Auto-translated] "Add new page"
    "addNew@pages": "Шинэ хуудас нэмж",
    // "Expression is empty"
    expressionIsEmpty: "Томъёо хоосон байна",
    // "Value"
    value: "Утга",
    // "Text"
    text: "Текст",
    // "Row ID"
    rowid: "Мөрний ID",
    // "Image or video file URL"
    imageLink: "Зураг эсвэл видео линк",
    // "Edit column: {0}"
    columnEdit: "Багана засах: {0}",
    // "Edit item: {0}"
    itemEdit: "Зүйл засах: {0}",
    // "URL"
    url: "Үйлчилгээний линк",
    // "Path to data"
    path: "Үйлчилгэний хүрээнд өгөгдөлд хүрэх зам",
    choicesbyurl: {
      // [Auto-translated] "Web service URL"
      url: "Вэб үйлчилгээний URL",
      // "Get value to store from the following property"
      valueName: "Утгуудыг дарагийн JSON талбараас авах"
    },
    // "Get value to display from the following property"
    titleName: "Үзүүлэн текстүүдийг дараагийн JSON талбараас авах",
    // "Get file URLs from the following property"
    imageLinkName: "Зургийн линкийг дараагийн JSON талбараас",
    // "Accept empty response"
    allowEmptyResponse: "Хоосон хариулт зөвшөөрөх",
    // "Title"
    titlePlaceholder: "Гарчиг",
    // "Survey Title"
    surveyTitlePlaceholder: "Санал асуулгын гарчиг",
    // "Page {num}"
    pageTitlePlaceholder: "Хуудас {num}",
    // [Auto-translated] "Start Page"
    startPageTitlePlaceholder: "Эхлэх хуудас",
    // "Description"
    descriptionPlaceholder: "Тайлбар",
    // "Description"
    surveyDescriptionPlaceholder: "Тайлбар",
    // "Description"
    pageDescriptionPlaceholder: "Тайлбар",
    // [Auto-translated] "Wrap choices"
    textWrapEnabled: "Боолт сонголт",
    // "Enable the \"Other\" option"
    showOtherItem: "Өөр сонголт зөвшөөрөх",
    // "Rename the \"Other\" option"
    otherText: "Өөр сонголтын текст",
    // "Enable the \"None\" option"
    showNoneItem: "None сонголтыг зөвшөөрөх",
    // [Auto-translated] "Enable the \"Refuse to Answer\" option"
    showRefuseItem: "\"Хариулахаас татгалзах\" сонголтыг идэвхжүүл",
    // [Auto-translated] "Enable the \"Don't Know\" option"
    showDontKnowItem: "\"Don't Know\" сонголтыг идэвхжүүл",
    // "Rename the \"None\" option"
    noneText: "None сонголтын текст",
    // "Enable the \"Select All\" option"
    showSelectAllItem: "Бүгдийг сонгохыг зөвшөөрөх",
    // "Rename the \"Select All\" option"
    selectAllText: "Бүгдийг сонгох",
    // "Minimum value for auto-generated items"
    choicesMin: "Автоматаар үүсэх элементийн хамгийн бага утга",
    // "Maximum value for auto-generated items"
    choicesMax: "Автоматаар үүсэх элементийн хамгийн их утга",
    // "Step value for auto-generated items"
    choicesStep: "Автоматаар үүсэх элементийн алхам",
    // "Name"
    name: "Нэр",
    // "Title"
    title: "Гарчиг",
    // "Cell input type"
    cellType: "Нүдний төрөл",
    // "Column count"
    colCount: "Баганы тоо",
    // "Choice order"
    choicesOrder: "Сонголтыг эрэмбэлэх дараалал",
    // [Auto-translated] "Allow custom choices"
    allowCustomChoices: "Өөрийн сонголтыг хийх боломж олгох",
    // "Visible"
    visible: "Харагдана",
    // "Required"
    isRequired: "Заавал бөглөх",
    // [Auto-translated] "Mark as required"
    markRequired: "Шаардлагын дагуу тэмдэглэгээ хийх",
    // [Auto-translated] "Remove the required mark"
    removeRequiredMark: "Шаардлагатай тэмдэглэгээг хасах",
    // "Require an answer in each row"
    eachRowRequired: "Бүх мөрөнд хариулт шаардах",
    // [Auto-translated] "Prevent duplicate responses in rows"
    eachRowUnique: "Дараалалд хувилж хариу үйлдэл үзүүлэхээс сэргийлнэ",
    // "Error message for required questions"
    requiredErrorText: "Заавал бөглөх талбарыг бөглөөгүй байна",
    // "Display the question on a new line"
    startWithNewLine: "Асуултыг шинэ мөрөнд харуулах",
    // "Rows"
    rows: "Мөр",
    // "Columns"
    cols: "Багана",
    // "Placeholder text within input field"
    placeholder: "Оролтын жишээ утга",
    // "Show preview area"
    showPreview: "Урьдчилан харах хэсгийг харуулах",
    // "Store file content in JSON result as text"
    storeDataAsText: "JSON үр дүнд файлын агуулгыг текст хэлбэрээр хадгалах",
    // "Maximum file size (in bytes)"
    maxSize: "Файлын дээд хэмжээ (байтаар)",
    // "Row count"
    rowCount: "Мөрний тоо",
    // "Columns layout"
    columnLayout: "Баганы зохион байгуулалт",
    // "\"Add Row\" button alignment"
    addRowButtonLocation: "Мөр нэмэх товчны байршил",
    // [Auto-translated] "Transpose rows to columns"
    transposeData: "Багануудад транспозын эгнээ",
    // "\"Add Row\" button text"
    addRowText: "Мөр нэмэх",
    // "\"Remove Row\" button text"
    removeRowText: "Мөр устгах",
    // [Auto-translated] "Input field title pattern"
    singleInputTitleTemplate: "Оролт талбайн гарчгийн загвар",
    // "Minimum rating value"
    rateMin: "Хамгийн бага утга",
    // "Maximum rating value"
    rateMax: "Хамгийн их утга",
    // "Step value"
    rateStep: "Алхам",
    // "Minimum value label"
    minRateDescription: "Хамгийн бага утгын тайлбар",
    // "Maximum value label"
    maxRateDescription: "Хамгийн их утгын тайлбар",
    // "Input type"
    inputType: "Оролтын төрөл",
    // "Option placeholder"
    optionsCaption: "Сонголтын талбар",
    // "Default Answer"
    defaultValue: "Үндсэн хариулт",
    // "Default texts"
    cellsDefaultRow: "Үндсэн текст",
    // "Edit survey settings"
    surveyEditorTitle: "Санал асуулгын тохиргоог засах",
    // "Edit: {0}"
    qEditorTitle: "Засах: {0}",
    // "Maximum character limit"
    maxLength: "Дээд урт (тэмдэгтээр)",
    // "Build"
    buildExpression: "Тооцоол",
    // "Edit"
    editExpression: "Засах",
    // "and"
    and: "бас",
    // "or"
    or: "эсвэл",
    // "Remove"
    remove: "Устгах",
    // "Add Condition"
    addCondition: "Нөхцөл нэмэх",
    // "Select a question to start configuring conditions."
    emptyLogicPopupMessage: "Нөхцөл тохируулахын тулд асуултыг сонгоно уу.",
    // "If"
    if: "Хэрэв",
    // "then"
    then: "бол",
    // "Target question"
    setToName: "Зорилтот асуулт",
    // "Question to copy answer from"
    fromName: "Хариулт хуулах асуулт",
    // "Question to skip to"
    gotoName: "Үсэрч очих асуулт",
    // "Rule is incorrect"
    ruleIsNotSet: "Дүрэм буруу байна",
    // "Add to the survey results"
    includeIntoResult: "Санал асуулгын үр дүнд оруулах",
    // "Make the title and description visible"
    showTitle: "Гарчиг харуулах",
    // "Expand/collapse title"
    expandCollapseTitle: "Гарчиг өргөсгөх/багасгах",
    // "Select a survey language"
    locale: "Санал асуулгын хэл",
    // "Select device type"
    simulator: "Төхөөрөмжийн төрөл сонгоно уу",
    // "Switch to landscape orientation"
    landscapeOrientation: "Хэвтээ байрлалд шилжих",
    // "Switch to portrait orientation"
    portraitOrientation: "Босоо байрлалд шилжих",
    // "Clear hidden question values"
    clearInvisibleValues: "Харагдахгүй утгыг цэвэрлэх",
    // "Limit to one response"
    cookieName: "Cookie name",
    // "Auto-save survey progress on page change"
    partialSendEnabled: "Хэсэгчилсэн санал асуулгын явцыг хадгалах",
    // "Save the \"Other\" option value as a separate property"
    storeOthersAsComment: "Бусад утгыг тусдаа талбарт хадгалах",
    // "Show page titles"
    showPageTitles: "Хуудасны гарчиг харуулах",
    // "Show page numbers"
    showPageNumbers: "Хуудасны тоо харуулах",
    // "\"Previous Page\" button text"
    pagePrevText: "Өмнөх хуудас - харагдах бичиг",
    // "\"Next Page\" button text"
    pageNextText: "Дараагийн хуудас - харагдах бичиг",
    // "\"Complete Survey\" button text"
    completeText: "Санал асуулга амжиллттай бөглөгдсөн - харагдах бичиг",
    // "\"Review Answers\" button text"
    previewText: "Хариулт урьдчилж харах - харагдах бичиг",
    // "\"Edit Answer\" button text"
    editText: "Хариулт засах харагдах бичиг",
    // "\"Start Survey\" button text"
    startSurveyText: "Санал асуулга эхлэх үед харагдах бичиг",
    // "Show navigation buttons"
    showNavigationButtons: "Чиглүүлгийн товчийн байрлал",
    // [Auto-translated] "Navigation buttons alignment"
    navigationButtonsLocation: "Навигацийн товчлууруудын байрлал",
    // "Show the \"Previous Page\" button"
    showPrevButton: "Өмнөх хуудасны товч харуулах",
    // "First page is a start page"
    firstPageIsStartPage: "Эхлэх хуудас нь эхний хуудас байна",
    // "Show the \"Thank You\" page"
    showCompletePage: "Санал асуулга амжилттай бөглөгдсөн хуудсыг харуулах",
    // "Auto-advance to the next page"
    autoAdvanceEnabled: "Дараагийн хуудас руу автоматаар шилжих",
    // [Auto-translated] "Complete the survey automatically"
    autoAdvanceAllowComplete: "Судалгааг автоматаар дуусгах",
    // "Show the progress bar"
    showProgressBar: "Явцын мөрний байршил",
    // [Auto-translated] "Progress bar alignment"
    progressBarLocation: "Progress bar alignment",
    // "Question title alignment"
    questionTitleLocation: "Асуултын гарчгийн байршил",
    // "Question title width"
    questionTitleWidth: "Асуулт нэрийн өргөн",
    // "Required symbol(s)"
    requiredMark: "Шаардлагатай тэмдэг(үүд)",
    // "Question title template, default is: '{no}. {require} {title}'"
    questionTitleTemplate: "Асуултын гарчигны загвар, үндсэн нь: '{үгүй}. {шаардах} {гарчиг}'",
    // "Error message alignment"
    questionErrorLocation: "Алдааны мэдэгдлийн байршил",
    // "Focus first question on a new page"
    autoFocusFirstQuestion: "Эхний асуултыг шинэ хуудсанд төвлөрүүлэх",
    // "Question order"
    questionOrder: "Хуудас дээрх элементийн дараалал",
    // "Time limit to complete the survey"
    timeLimit: "Санал асуулга бөглөж дуусах хугацаа (секундээр)",
    // "Time limit to complete one page"
    timeLimitPerPage: "Нэг хуудас бөглөж дуусах хугацаа (секундээр)",
    // [Auto-translated] "Use a timer"
    showTimer: "Цаг хэмжигч ашигла",
    // "Timer alignment"
    timerLocation: "Тоолуурын байршил",
    // "Timer mode"
    timerInfoMode: "Тоолуурын горим",
    // "Panel display mode"
    renderMode: "Панелийн дэлгэцийн горим",
    // "Enable entry addition"
    allowAddPanel: "Панел нэмэхийг зөвшөөрөх",
    // "Enable entry removal"
    allowRemovePanel: "Панел хасахыг зөвшөөрөх",
    // "\"Add Entry\" button text"
    addPanelText: "Панел товчийн текст нэмэх",
    // "\"Remove Entry\" button text"
    removePanelText: "Панел товчийн текст хасах",
    // "Show all elements on one page"
    isSinglePage: "Бүх элементийг нэг хуудас дээр харуулах",
    // "HTML markup"
    html: "HTML тэмдэглэгээ",
    // "Answer"
    setValue: "Хариулт",
    // "Storage format"
    dataFormat: "Зургийн формат",
    // "Enable row addition"
    allowAddRows: "Мөр нэмэхийг зөвшөөрөх",
    // "Enable row removal"
    allowRemoveRows: "Мөр хасахыг зөвшөөрөх",
    // "Enable row reordering"
    allowRowReorder: "Мөр чирэхийг зөвшөөрөх",
    // "Does not apply if you specify the exact display area width or height."
    responsiveImageSizeHelp: "Зургийн өндөр, өргөнийг зааж өгсөн үед хамаарахгүй.",
    // "Minimum display area width"
    minImageWidth: "Зургийн өргөний хамгийн бага хэмжээ",
    // "Maximum display area width"
    maxImageWidth: "Зургийн өргөний хамгийн их хэмжээ",
    // "Minimum display area height"
    minImageHeight: "Зургийн өндрийн хамгийн бага хэмжээ",
    // "Maximum display area height"
    maxImageHeight: "Зургийн өндрийн хамгийн их хэмжээ",
    // "Minimum value"
    minValue: "Хамгийн бага утга",
    // "Maximum value"
    maxValue: "Хамгийн их утга",
    // [Auto-translated] "Case insensitive"
    caseInsensitive: "Кейс үл мэдрэмтгий",
    // "Minimum length (in characters)"
    minLength: "Хамгийн бага урт (тэмдэгтээр)",
    // "Allow digits"
    allowDigits: "Тоо зөвшөөрөх",
    // "Minimum count"
    minCount: "Хамгийн бага тоо",
    // "Maximum count"
    maxCount: "Хамгийн их тоо",
    // "Regular expression"
    regex: "Тогтмол илэрхийлэл",
    surveyvalidator: {
      // [Auto-translated] "Validation message"
      text: "Баталгаажуулах захиас",
      // [Auto-translated] "Validation expression"
      expression: "Баталгаажуулалтын илэрхийлэл",
      // [Auto-translated] "Notification type"
      notificationType: "Мэдэгдлийн төрөл",
      // [Auto-translated] "Maximum length (in characters)"
      maxLength: "Хамгийн их урт (үсгээр)"
    },
    // "Total row header"
    totalText: "Нийт мөр",
    // "Aggregation method"
    totalType: "Нийт төрөл",
    // "Total value expression"
    totalExpression: "Нийт илэрхийлэл",
    // "Total value display format"
    totalDisplayStyle: "Нийт утгыг харуулах загвар",
    // "Currency"
    totalCurrency: "Мөнгөн тэмдэгт",
    // "Formatted string"
    totalFormat: "Хэлбэржүүлсэн текст",
    // "Survey logo"
    logo: "Лого (URL эсвэл base64 кодлосон мөр)",
    // "Survey layout"
    questionsOnPageMode: "Санал асуулгын бүтэц",
    // "Restrict answer length"
    maxTextLength: "Хариултын хамгийн их урт(тэмдэгтээр)",
    // "Restrict comment length"
    maxCommentLength: "Хариултын хамгийн бага урт(тэмдэгтээр)",
    // [Auto-translated] "Comment area height (in lines)"
    commentAreaRows: "Тайлбар хэсгийн өндөр (мөрөнд)",
    // "Auto-expand text areas"
    autoGrowComment: "Шаардлагатай үед санал сэтгэгдлийн хэсгийг өргөсгөх",
    // [Auto-translated] "Allow users to resize text areas"
    allowResizeComment: "Хэрэглэгчдэд текстийн газруудыг дахин ашиглах боломж олго",
    // "Update input field values"
    textUpdateMode: "Текст асуултын утгыг шинэчлэх",
    // [Auto-translated] "Input mask type"
    maskType: "Оролтын багны төрөл",
    // "Set focus on the first invalid answer"
    autoFocusFirstError: "Анхны буруу хариулт руу чиглүүлэх",
    // "Run validation"
    checkErrorsMode: "Баталгаажуулалт ажиллуулах",
    // [Auto-translated] "Validate empty fields on lost focus"
    validateVisitedEmptyFields: "Алдагдсан фокус дээр хоосон талбайг баталгаажуулах",
    // "Redirect to an external link after submission"
    navigateToUrl: "URL-рүү чиглүүлэх",
    // "Dynamic external link"
    navigateToUrlOnCondition: "Динамик URL",
    // "Markup to show if the user already filled out this survey"
    completedBeforeHtml: "Хэрэглэгч санал асуулгыг бөглөсөн байх үед харуулах тэмдэглэгээ",
    // "\"Thank You\" page markup"
    completedHtml: "Санал асуулга амжилттай бөглөгдсөн үед харуулах тэмдэглэгээ",
    // "Dynamic \"Thank You\" page markup"
    completedHtmlOnCondition: "Санал асуулга амжилттай бөглөгдсөн үед харуулах динамик тэмдэглэгээ",
    // "Markup to show while survey model is loading"
    loadingHtml: "Судалгааны загвар ачааллаж байх үед харуулах тэмдэглэгээ",
    // "Comment area text"
    commentText: "Санал сэтгэгдлийн хэсгийн текст",
    // "Autocomplete type"
    autocomplete: "Автоматаар бөглөх төрөл",
    // "Label for \"True\""
    labelTrue: "\"Тийм\" шошго",
    // "Label for \"False\""
    labelFalse: "\"Үгүй\" шошго",
    // "Show the Clear button"
    allowClear: "Цэвэрлэх товч харуулах",
    // [Auto-translated] "Search Mode"
    searchMode: "Хайлтын Мод",
    // "Display format"
    displayStyle: "Утга харуулах хэв маяг",
    // "Formatted string"
    format: "Хэлбэржүүлсэн текст",
    // "Maximum fractional digits"
    maximumFractionDigits: "Оронгийн нарийвчлалын дээд утга",
    // "Minimum fractional digits"
    minimumFractionDigits: "Оронгийн нарийвчлалын доод утга",
    // "Display grouping separators"
    useGrouping: "Бүлэг тусгаарлагчийг харуулах",
    // "Enable multiple file upload"
    allowMultiple: "Олон файл зөвшөөрөх",
    // "Preview uploaded images"
    allowImagesPreview: "Зургуудыг урьдчилж харах",
    // "Accepted file types"
    acceptedTypes: "Зөвшөөрөгдсөн файлын төрөл",
    // "Wait for upload to complete"
    waitForUpload: "Файл байршуулж дуустал хүлээх",
    // "Confirm file deletion"
    needConfirmRemoveFile: "Файл устгахыг батлах",
    // "Row details alignment"
    detailPanelMode: "Нарийвчилсан панелийн байршил",
    // "Minimum row count"
    minRowCount: "Хамгийн бага мөрний тоо",
    // "Maximum row count"
    maxRowCount: "Хамгийн их мөрний тоо",
    // "Confirm row removal"
    confirmDelete: "Мөр устгахыг батлах",
    // "Confirmation message"
    confirmDeleteText: "Баталгаажуулах мессеж",
    // "Initial number of entries"
    panelCount: "Панелийн эхлэх тоо",
    // "Minimum number of entries"
    minPanelCount: "Хамгийн бага панелийн тоо",
    // "Maximum number of entries"
    maxPanelCount: "Хамгийн их панелийн тоо",
    // "Initial entry state"
    panelsState: "Дотоод панелийн өргөссөн төлөв",
    // "\"Previous Entry\" button text"
    prevPanelText: "Өмнөх панелийн товч",
    // "\"Next Entry\" button text"
    nextPanelText: "Дараагийн панелийн товч",
    // "\"Remove Entry\" button alignment"
    removePanelButtonLocation: "Панел устгах товчны байршил",
    // "Hide the question if it has no rows"
    hideIfRowsEmpty: "Мөр байхгүй тохиолдолд асуултыг нуух",
    // "Hide columns if there are no rows"
    hideColumnsIfEmpty: "Мөр байхгүй тохиолдолд баганыг нуух",
    // "Custom rating values"
    rateValues: "Хэрэглэгчийн үнэлгээний утгууд",
    // [Auto-translated] "Rating count"
    rateCount: "Рейтингийн тоо",
    // [Auto-translated] "Rating configuration"
    autoGenerate: "Рейтингийн тохиргоо",
    slider: {
      // [Auto-translated] "Min value"
      min: "Хамгийн бага үнэ",
      // [Auto-translated] "Max value"
      max: "Дээд хэмжээний хэмжээ",
      // [Auto-translated] "Step value"
      step: "Алхамын үнэ цэнэ",
      // [Auto-translated] "Show scale labels"
      showLabels: "Жинлүүрийн шошгыг үзүүлэх",
      // [Auto-translated] "Show tooltips"
      tooltipVisibility: "Tooltips",
      // [Auto-translated] "Allow thumb crossing"
      allowSwap: "Эрхий хуруугаа гаталахыг зөвшөөрөх",
      // [Auto-translated] "Number of auto-generated labels"
      labelCount: "Автоматаар үүсгэсэн шошгоны тоо",
      // [Auto-translated] "Min value expression"
      minValueExpression: "Хамгийн бага илэрхийлэл",
      // [Auto-translated] "Max value expression"
      maxValueExpression: "Хамгийн их хэмжээний илэрхийлэл",
      // [Auto-translated] "Scale labels configuration"
      autoGenerate: "Шошгоны тохиргоог хэмжих",
      // [Auto-translated] "Slider type"
      sliderType: "Слайдерын төрөл",
      // [Auto-translated] "Min range length"
      minRangeLength: "Хамгийн бага диапазонын урт",
      // [Auto-translated] "Max range length"
      maxRangeLength: "Хамгийн их зайны урт",
      // [Auto-translated] "Custom labels"
      customLabels: "Custom labels",
      // [Auto-translated] "Label format"
      labelFormat: "Шошгоны хэлбэр",
      // [Auto-translated] "Tooltip format"
      tooltipFormat: "Tooltip формат"
    },
    file: {
      // [Auto-translated] "Image height"
      imageHeight: "Зургийн өндөр",
      // [Auto-translated] "Image width"
      imageWidth: "Зургийн өргөн"
    },
    // "Hide the question if it has no choices"
    hideIfChoicesEmpty: "Сонголтгүй бол асуултыг нуух",
    // "Minimum width"
    minWidth: "Хамгийн бага өргөн (CSS хүлээн зөвшөөрсөн утга)",
    // "Maximum width"
    maxWidth: "Хамгийн их өргөн (CSS хүлээн зөвшөөрсөн утга)",
    // "Width"
    width: "Өргөн (CSS хүлээн зөвшөөрсөн утга)",
    // "Show column headers"
    showHeader: "Баганы гарчигийг харуулах",
    // "Show horizontal scrollbar"
    horizontalScroll: "Хэвтээ гүйлгэх мөр харуулах",
    // "Minimum column width"
    columnMinWidth: "Баганы хамгийн бага утга (CSS хүлээн зөвшөөрсөн утга)",
    // "Row header width"
    rowTitleWidth: "Мөрийн гарчгийн утга (CSS хүлээн зөвшөөрсөн утга)",
    // "Value to store when \"True\" is selected"
    valueTrue: "Үнэн утга",
    // "Value to store when \"False\" is selected"
    valueFalse: "Худал утга",
    // "\"Value is below minimum\" error message"
    minErrorText: "Хамгийн бага утгаас бага байна! алдааны мэдэгдэл",
    // "\"Value exceeds maximum\" error message"
    maxErrorText: "Хамгийн их утгаас их байна! алдааны мэдэгдэл",
    // "\"Empty comment\" error message"
    otherErrorText: "Хоосон санал хүсэлт! алдааны мэдэгдэл",
    // "Error message for duplicate responses"
    keyDuplicationError: "Давтагдсан утга! алдааны мэдэгдэл",
    // [Auto-translated] "Minimum choices to select"
    minSelectedChoices: "Хамгийн бага сонголтууд",
    // "Maximum choices to select"
    maxSelectedChoices: "Хамгийн ихдээ сонгох боломжийн тоо",
    // "Logo width"
    logoWidth: "Логоны өргөн (CSS хүлээн зөвшөөрсөн утга)",
    // "Logo height"
    logoHeight: "Логөны өндөр (CSS хүлээн зөвшөөрсөн утга)",
    // "Read-only"
    readOnly: "Зөвхөн унших",
    // "Disable the read-only mode if"
    enableIf: "Засах боломжтой хэрэв",
    // "\"No rows\" message"
    noRowsText: "\"Мөр байхгүй байна!\" мэдэгдэл",
    // "Separate special choices"
    separateSpecialChoices: "Тусгай сонголтуудыг салгах (Аль нь ч биш, Бусад, Бүгдийг сонгох)",
    // "Copy choices from the following question"
    choicesFromQuestion: "Дараах асуултаас сонголтуудыг хуулах.",
    // "Which choice options to copy"
    choicesFromQuestionMode: "Аль сонголтуудыг хуулах вэ?",
    // [Auto-translated] "Use values from the following matrix column or panel question as choice IDs"
    choiceValuesFromQuestion: "Дараах матрицын багана эсвэл панелийн асуултын үнэт зүйлсийг сонголтын ID болгон ашигла",
    // [Auto-translated] "Use values from the following matrix column or panel question as choice texts"
    choiceTextsFromQuestion: "Дараах матрицын багана эсвэл панелийн асуултын үнэт зүйлсийг сонголтын текст болгон ашигла",
    // [Auto-translated] "Display page titles in the progress bar"
    progressBarShowPageTitles: "Явцын самбар дээр хуудасны гарчгийг харуул",
    // [Auto-translated] "Display page numbers in the progress bar"
    progressBarShowPageNumbers: "Явцын самбар дээр хуудасны дугаарыг харуул",
    // "Add a comment box"
    showCommentArea: "Санал хүсэлтийн хэсэг харуулах",
    // "Placeholder text for the comment box"
    commentPlaceholder: "Санал хүсэлтийн хэсэг",
    // "Show the labels as extreme values"
    displayRateDescriptionsAsExtremeItems: "Display rate descriptions as extreme values",
    // "Row order"
    rowOrder: "Мөрний дараалал",
    // "Column layout"
    columnsLayout: "Баганы зохион байгуулалт",
    // "Nested column count"
    columnColCount: "Шаталсан баганын тоо",
    // "Correct Answer"
    correctAnswer: "Зөв хариулт",
    // "Default Values"
    defaultPanelValue: "Үндсэн утга",
    // "Cell Texts"
    cells: "Нүдний текст",
    // [Auto-translated] "Select a file or paste a file link..."
    fileInputPlaceholder: "Файл сонгох эсвэл файлын холбоосыг наа...",
    // "Prevent duplicate responses in the following column"
    keyName: "Түлхүүр багана",
    itemvalue: {
      // [Auto-translated] "Make the option visible if"
      visibleIf: "Хэрэв сонголтыг ил тод болго",
      // [Auto-translated] "Make the option selectable if"
      enableIf: "Сонголтыг сонговол"
    },
    "itemvalue@rows": {
      // [Auto-translated] "Make the row visible if"
      visibleIf: "Хэрэв эгнээг ил гаргах",
      // [Auto-translated] "Make the row editable if"
      enableIf: "Хэрэв эгнээг хянан засварлах боломжтой болго"
    },
    imageitemvalue: {
      // "Alt text"
      text: "Тайлбар"
    },
    // "Logo alignment"
    logoPosition: "Логоны байршил",
    // "Add logo..."
    addLogo: "Лого нэмэх...",
    // "Change logo..."
    changeLogo: "Лого солих...",
    logoPositions: {
      // "Remove logo"
      none: "Лого устгах",
      // "Left"
      left: "Зүүн",
      // "Right"
      right: "Баруун",
      // "On the top"
      top: "Дээр",
      // "In the bottom"
      bottom: "Доор"
    },
    // [Auto-translated] "Preview mode"
    previewMode: "Урьдчилан харах хэлбэр",
    // [Auto-translated] "Enable grid layout"
    gridLayoutEnabled: "Grid layout-ийг идэвхжүүлэх",
    // [Auto-translated] "Grid columns"
    gridLayoutColumns: "Хүснэгтийн баганууд",
    // [Auto-translated] "Mask settings"
    maskSettings: "Маскийн тохиргоо",
    // [Auto-translated] "Row details error message alignment"
    detailErrorLocation: "Мөрийн нарийн ширийн зүйлс error message alignment",
    // Creator tabs
    tabs: {
      panel: {
        // [Auto-translated] "Panel Layout"
        layout: "Panel Layout"
      },
      // "General"
      general: "Ерөнхий",
      // "Options"
      fileOptions: "Сонголт",
      // "HTML Editor"
      html: "HTML засварлагч",
      // "Columns"
      columns: "Багана",
      // "Rows"
      rows: "Мөр",
      // "Choice Options"
      choices: "Сонголт",
      // "Items"
      items: "Элемент",
      // "Visible If"
      visibleIf: "Харагдана хэрэв",
      // "Editable If"
      enableIf: "Засварлаж болно хэрэв",
      // "Required If"
      requiredIf: "Заавал бөглөх болох хэрэв",
      // "Rating Values"
      rateValues: "Утгыг үнэлэх",
      // [Auto-translated] "Slider Settings"
      sliderSettings: "Слайдерын тохиргоо",
      // "Choices from a Web Service"
      choicesByUrl: "RESTful сервисийн сонголтууд",
      // "Default Choices"
      matrixChoices: "Үндсэн сонголтууд",
      // "Text Inputs"
      multipleTextItems: "Текст оролт",
      // "Numbering"
      numbering: "Дугаарлалт",
      // "Validators"
      validators: "Батлагч",
      // "Navigation"
      navigation: "Чиглүүлэгч",
      // "Question Settings"
      question: "Асуулт",
      // "Pages"
      pages: "Хуудас",
      // "Quiz Mode"
      timer: "Тоолуур/Асуулт хариулт",
      // "Calculated Values"
      calculatedValues: "Тооцоолсон утга",
      // "Triggers"
      triggers: "Схемүүд",
      // "Title template"
      templateTitle: "Гарчигны загвар",
      // "Totals"
      totals: "Нийт",
      // "Conditions"
      logic: "Логик",
      // [Auto-translated] "Input Mask Settings"
      mask: "Оролт Маск тохиргоо",
      layout: {
        // [Auto-translated] "Panel Layout"
        panel: "Хавтангийн загвар",
        // [Auto-translated] "Layout"
        question: "Layout",
        // [Auto-translated] "Layout"
        base: "Layout"
      },
      // "Data"
      data: "Өгөгдөл",
      // "Validation"
      validation: "Батлах",
      // "Individual Cell Texts"
      cells: "Нүдний текст",
      // "\"Thank You\" Page"
      showOnCompleted: "Санал асуулга амжилттай бөглөгдлөө.",
      // "Logo in the Survey Header"
      logo: "Санал асуулгын гарчиг дахь лого",
      // "Slider"
      slider: "Гулсуулагч",
      // "Expression"
      expression: "илэрхийлэл",
      // [Auto-translated] "Question Settings"
      questionSettings: "Асуултын тохиргоо",
      // "Header"
      header: "Толгойлогч",
      // "Background"
      background: "Ар талын",
      // "Appearance"
      appearance: "Харагдах байдал",
      // [Auto-translated] "Accent colors"
      accentColors: "Акцентын өнгө",
      // [Auto-translated] "Surface background"
      surfaceBackground: "Гадаргуу��ийн фон",
      // [Auto-translated] "Scaling"
      scaling: "Масштаблах",
      // "Others"
      others: "Бусад"
    },
    // "Edit property '{0}'"
    editProperty: "Шинж чанарыг засварлах '{0}'",
    // "Items"
    items: "Элементүүд",
    // "Make choices visible if"
    choicesVisibleIf: "Сонголтууд харагдана хэрэв",
    // "Make choices selectable if"
    choicesEnableIf: "Сонголтууд сонгогдоно хэрэв",
    // "Make columns visible if"
    columnsEnableIf: "Баганууд харагдана хэрэв",
    // "Make rows visible if"
    rowsEnableIf: "Мөрнүүд харагдана хэрэв",
    // "Increase the inner indent"
    innerIndent: "Дотоод догол мөр нэмэх",
    // [Auto-translated] "Use answers from the last entry as default"
    copyDefaultValueFromLastEntry: "Сүүлийн тайлбарын хариултуудыг стандарт болгон ашигла",
    // "Please enter a value."
    enterNewValue: "Утга оруулна уу.",
    // "There are no questions in the survey."
    noquestions: "Санал асуулгад асуулт оруулна уу.",
    // "Please create a trigger"
    createtrigger: "Схем устгана уу.",
    // "Press enter button to edit"
    titleKeyboardAdornerTip: "Засахын тулд Enter товчийг дарна уу",
    // "Press enter button to edit item, press delete button to delete item, press alt plus arrow up or arrow down to move item"
    keyboardAdornerTip: "Засахын тулд Enter товчийг дарна уу, Устгахын тулд Delete товчийг дарна уу, Хөдөлгөхийн тулд alt + дээш сум эсвэл доош сум дарна уу",
    // "On "
    triggerOn: "On ",
    // "Make pages visible"
    triggerMakePagesVisible: "Хуудсуудыг харуулах",
    // "Make elements visible"
    triggerMakeQuestionsVisible: "Элементүүдийг харуулах",
    // "Complete the survey if successful."
    triggerCompleteText: "Complete the survey if succeed.",
    // "The trigger is not set"
    triggerNotSet: "Схем тохируулагдаагүй байна",
    // "Run if"
    triggerRunIf: "Ажилуулах хэрэв",
    // "Change value of: "
    triggerSetToName: "Утга өөрчлөх: ",
    // "Copy value from: "
    triggerFromName: "Утга хуулах: ",
    // "Run this Expression"
    triggerRunExpression: "илэрхийлэлг ажиллуулах",
    // "to: "
    triggerSetValue: "хүртэл: ",
    // "Go to the question"
    triggerGotoName: "Асуулт руу үсрэх",
    // "Do not put the variable into the survey result."
    triggerIsVariable: "Хувьсагч санал асуулгын үр дүнд оруулахгүй байх.",
    // "Please enter a valid expression"
    triggerRunExpressionEmpty: "Бодит илэрхийлэл оруулна уу.",
    // "Type expression here..."
    emptyExpressionPlaceHolder: "илэрхийлэлг энд бичнэ үү...",
    // "No file chosen"
    noFile: "Файл сонгоогүй байна.",
    // "Clear hidden question values"
    clearIfInvisible: "Асуулт нуувал утгыг цэвэрлэх.",
    // "Store values in the following property"
    valuePropertyName: "Утгын шинж чанарын нэр",
    // "Enable search-as-you-type"
    searchEnabled: "Хайлтыг идэвхжүүлэх",
    // "Hide selected items"
    hideSelectedItems: "Сонгогдсон хэсгийг нуух",
    // "Collapse the dropdown upon selection"
    closeOnSelect: "Сонголт хийсэн үед доош буусан сонголтуудыг хаах",
    // "Vertical alignment within cells"
    verticalAlign: "Босоо эгнүүлэх",
    // "Alternate row colors"
    alternateRows: "Хувилбар мөрнүүд",
    // "Make columns visible if"
    columnsVisibleIf: "Баганууд харагдана хэрэв",
    // "Make rows visible if"
    rowsVisibleIf: "Мөрнүүд харагдана хэрэв",
    // "Placeholder text for the comment box"
    otherPlaceholder: "Санал асуулгын хэсэг",
    // [Auto-translated] "Placeholder text for Local file"
    filePlaceholder: "Local file-ийн placeholder text",
    // [Auto-translated] "Placeholder text for Camera"
    photoPlaceholder: "Camera-ийн placeholder text",
    // [Auto-translated] "Placeholder text for Local file or Camera"
    fileOrPhotoPlaceholder: "Local file эсвэл Camera-ийн placeholder text",
    // [Auto-translated] "Rating icon"
    rateType: "Рейтингийн тэмдэг",
    // [Auto-translated] "Ex.: https://api.example.com/books"
    url_placeholder: "Экс.: https://api.example.com/books",
    // [Auto-translated] "Ex.: categories.fiction"
    path_placeholder: "Экс.: categories.fiction",
    // [Auto-translated] "Ex.: a)"
    questionStartIndex_placeholder: "Экс.: а)",
    // [Auto-translated] "Ex.: 6in"
    width_placeholder: "Экс.: 6ин",
    // [Auto-translated] "Ex.: 600px"
    minWidth_placeholder: "Экс: 600px",
    // [Auto-translated] "Ex.: 50%"
    maxWidth_placeholder: "Экс: 50%",
    // "auto"
    imageHeight_placeholder: "автомат",
    // "auto"
    imageWidth_placeholder: "автомат",
    // [Auto-translated] "Ex.: 100px"
    itemTitleWidth_placeholder: "Жишээ нь: 100px",
    theme: {
      // [Auto-translated] "Theme"
      themeName: "Сэдэв",
      // [Auto-translated] "Question appearance"
      isPanelless: "Асуулт хариултын төрх",
      // [Auto-translated] "Background and corner radius"
      editorPanel: "Ар тал ба булангийн радиус",
      // [Auto-translated] "Background and corner radius"
      questionPanel: "Ар тал ба булангийн радиус",
      // [Auto-translated] "Accent color"
      primaryColor: "Акцент өнгө",
      // [Auto-translated] "Panel and question box opacity"
      panelBackgroundTransparency: "Панел болон асуултын хайрцгийн тунгалаг байдал",
      // [Auto-translated] "Input element opacity"
      questionBackgroundTransparency: "Оролт элементийн тунгалаг байдал",
      // [Auto-translated] "Survey font size"
      fontSize: "Судалгааны фонтын хэмжээ",
      // [Auto-translated] "Survey scale factor"
      scale: "Судалгааны масштабын фактор",
      // [Auto-translated] "Corner radius"
      cornerRadius: "Булангийн радиус",
      // [Auto-translated] "Advanced mode"
      advancedMode: "Дэвшилтэт режим",
      // [Auto-translated] "Title font"
      pageTitle: "Гарчиг фонт",
      // [Auto-translated] "Description font"
      pageDescription: "Тайлбар фонт",
      // [Auto-translated] "Title font"
      questionTitle: "Гарчиг фонт",
      // [Auto-translated] "Description font"
      questionDescription: "Тайлбар фонт",
      // [Auto-translated] "Font"
      editorFont: "Фонт",
      // [Auto-translated] "Opacity"
      backgroundOpacity: "Бүдүүлэг байдал", // Auto-generated string
      // [Auto-translated] "Survey font family"
      "--sjs-font-family": "Судалгааны фонтын гэр бүл",
      // [Auto-translated] "Background color"
      "--sjs-general-backcolor-dim": "Ар талын өнгө",
      // [Auto-translated] "Accent background colors"
      "--sjs-primary-backcolor": "Фон өнгөнүүдийг акцентлах",
      // [Auto-translated] "Accent foreground colors"
      "--sjs-primary-forecolor": "Урд талын өнгүүдийг тодруулах",
      // [Auto-translated] "Error message colors"
      "--sjs-special-red": "Алдаа мэйсийн өнгө",
      // [Auto-translated] "Shadow effects"
      "--sjs-shadow-small": "Сүүдрийн нөлөө",
      // [Auto-translated] "Shadow effects"
      "--sjs-shadow-inner": "Сүүдрийн нөлөө",
      // [Auto-translated] "Colors"
      "--sjs-border-default": "Өнгө"
    },
    "header@header": {
      // [Auto-translated] "View"
      headerView: "Үзэх",
      // [Auto-translated] "Logo alignment"
      logoPosition: "Логог тохируулах",
      // [Auto-translated] "Survey title font"
      surveyTitle: "Судалгааны нэрийн фонт",
      // [Auto-translated] "Survey description font"
      surveyDescription: "Судалгааны тодорхойлолтын фонт",
      // [Auto-translated] "Survey title font"
      headerTitle: "Судалгааны нэрийн фонт",
      // [Auto-translated] "Survey description font"
      headerDescription: "Судалгааны тодорхойлолтын фонт",
      // [Auto-translated] "Content area width"
      inheritWidthFrom: "Агуулгын бүсийн өргөн",
      // [Auto-translated] "Text width"
      textAreaWidth: "Текстийн өргөн",
      // [Auto-translated] "Background color"
      backgroundColorSwitch: "Ар талын өнгө",
      // [Auto-translated] "Background image"
      backgroundImage: "Ар талын зураг",
      // [Auto-translated] "Opacity"
      backgroundImageOpacity: "Бүдүүлэг байдал",
      // [Auto-translated] "Overlap"
      overlapEnabled: "Давхар",
      // [Auto-translated] "Logo alignment"
      logoPositionX: "Логог тохируулах",
      // [Auto-translated] "Survey title alignment"
      titlePositionX: "Судалгааны нэрийн тохируулга",
      // [Auto-translated] "Survey description alignment"
      descriptionPositionX: "Судалгааны тодорхойлолт тохируулга"
    }
  },
  // Property values
  pv: {
    // "true"
    "true": "Үнэн",
    // "false"
    "false": "Худал",
    // [Auto-translated] "Local file"
    file: "Орон нутгийн файл",
    // [Auto-translated] "Camera"
    camera: "Камер",
    // [Auto-translated] "Local file or Camera"
    "file-camera": "Орон нутгийн файл эсвэл Камер",
    // "Inherit"
    inherit: "Удамших",
    // "Visible"
    show: "Харагдана",
    // "Hidden"
    hide: "Нуусан",
    // "Inherit"
    default: "Үндсэн",
    // "Initial"
    initial: "Анхны",
    // "Random"
    random: "Санамсаргүй",
    // "Collapsed"
    collapsed: "Багассан",
    // "Expanded"
    expanded: "Өргөтгөсөн",
    // "None"
    none: "Аль нь ч биш",
    // "Ascending"
    asc: "Өгсөж байгаа",
    // "Descending"
    desc: "Буурч байгаа",
    // "Indeterminate"
    indeterminate: "Тодорхойгүй",
    // [Auto-translated] "Selected"
    selected: "Сонгосон",
    // [Auto-translated] "Unselected"
    unselected: "Сонгогдоогүй",
    // "decimal"
    decimal: "Бутархай",
    // "currency"
    currency: "Мөнгөн тэмдэгт",
    // "percent"
    percent: "Хувь",
    // "First panel is expanded"
    firstExpanded: "Эхний панел өргөссөн",
    // "Hide question numbers"
    off: "Асуултын тоог нуух",
    // "List"
    list: "Жагсаалт",
    // [Auto-translated] "Carousel"
    carousel: "Карусел",
    // [Auto-translated] "Tabs"
    tab: "Табууд",
    // "Panel navigator + Progress bar at the top"
    progressTop: "Панел чиглүүлэгч + Явцын мөр дээд хэсэгт байрлах",
    // "Panel navigator + Progress bar at the bottom"
    progressBottom: "Панел чиглүүлэгч + Явцын мөр доод хэсэгт байрлах",
    // "Panel navigator + Progress bar at the top and bottom"
    progressTopBottom: "Панел чиглүүлэгч + Явцын мөр дээд ба доод хэсэгт байрлах",
    // "Horizontal"
    horizontal: "Хэвтээ",
    // "Vertical"
    vertical: "Босоо",
    // "Top"
    top: "Дээд",
    // "Bottom"
    bottom: "Доод",
    // "Top and bottom"
    topBottom: "Дээд ба доод",
    // "Both"
    both: "Аль аль нь",
    // "Left"
    left: "Зүүн",
    // "Right"
    right: "Баруун",
    // [Auto-translated] "Center"
    center: "Төв",
    // [Auto-translated] "Left and right"
    leftRight: "Зүүн, баруун",
    // [Auto-translated] "Middle"
    middle: "Дунд",
    // "color"
    color: "өнгө",
    // "date"
    date: "огноо",
    // "datetime"
    datetime: "datetime",
    // "datetime-local"
    "datetime-local": "datetime-local",
    // "email"
    email: "цахим шуудан",
    // "month"
    month: "сар",
    // "number"
    number: "тоо",
    // "password"
    password: "нууц үг",
    // "range"
    range: "range",
    // "tel"
    tel: "Дугаар",
    // "text"
    text: "Текст",
    // "time"
    time: "цаг",
    // "url"
    url: "url",
    // "week"
    week: "долоо хоног",
    // "Hidden"
    hidden: "Нуусан",
    // "Editable"
    edit: "Засаж болдог",
    // "Read-only"
    display: "Зөвхөн унших",
    // [Auto-translated] "Contain"
    contain: "Агуулах",
    // [Auto-translated] "Cover"
    cover: "Хөшиг",
    // [Auto-translated] "Fill"
    fill: "Дүүргэлт",
    // [Auto-translated] "Next"
    next: "Дараа нь",
    // [Auto-translated] "Last"
    last: "Сүүлчийнх нь",
    // "Upon survey completion"
    onComplete: "Санал асуулга амжилттай бөглөгдсөн үед.",
    // "When question gets hidden"
    onHidden: "Асуулт нуугдсан үед",
    // "When question or its panel/page gets hidden"
    onHiddenContainer: "Асуулт, панел эсвэл хуудас нуугдсан үед",
    clearInvisibleValues: {
      // "Never"
      none: "Хэзээ ч үгүй"
    },
    clearIfInvisible: {
      // [Auto-translated] "Never"
      none: "Хэзээ ч"
    },
    // [Auto-translated] "Radio Buttons"
    radio: "Радио товчлуур",
    inputType: {
      // [Auto-translated] "Color"
      color: "Өнгө",
      // [Auto-translated] "Date"
      date: "Огноо",
      // [Auto-translated] "Date and Time"
      "datetime-local": "Огноо, цаг",
      // [Auto-translated] "Email"
      email: "И-мэйл",
      // [Auto-translated] "Month"
      month: "Сар",
      // [Auto-translated] "Number"
      number: "Тоо хэмжээ",
      // [Auto-translated] "Password"
      password: "Нууц үг",
      // [Auto-translated] "Range"
      range: "Хамрах хүрээ",
      // [Auto-translated] "Phone Number"
      tel: "Утасны дугаар",
      // [Auto-translated] "Text"
      text: "Текст",
      // [Auto-translated] "Time"
      time: "Цаг хугацаа",
      // [Auto-translated] "URL"
      url: "URL",
      // [Auto-translated] "Week"
      week: "Долоо хоног"
    },
    sliderType: {
      // [Auto-translated] "Single-Value"
      single: "Ганц үнэ цэнэтэй",
      // [Auto-translated] "Range"
      range: "Диапазон"
    },
    tooltipVisibility: {
      // [Auto-translated] "Auto"
      auto: "Авто",
      // [Auto-translated] "Always"
      always: "Үргэлж",
      // [Auto-translated] "Never"
      never: "Хэзээ ч"
    },
    notificationType: {
      // [Auto-translated] "Error"
      error: "Алдаа",
      // [Auto-translated] "Warning"
      warning: "Анхааруулга",
      // [Auto-translated] "Informational"
      info: "Мэдээлэл"
    },
    autocomplete: {
      // [Auto-translated] "Full Name"
      name: "Бүтэн нэр",
      // [Auto-translated] "Prefix"
      "honorific-prefix": "Угтвар",
      // [Auto-translated] "First Name"
      "given-name": "Овог нэр",
      // [Auto-translated] "Middle Name"
      "additional-name": "Овгийн нэр",
      // [Auto-translated] "Last Name"
      "family-name": "Овгийн нэр",
      // [Auto-translated] "Suffix"
      "honorific-suffix": "Суффикс",
      // [Auto-translated] "Nickname"
      nickname: "Хоч нэр",
      // [Auto-translated] "Job Title"
      "organization-title": "Ажлын нэр",
      // [Auto-translated] "User Name"
      username: "Хэрэглэгчийн нэр",
      // [Auto-translated] "New Password"
      "new-password": "Шинэ нууц үг",
      // [Auto-translated] "Current Password"
      "current-password": "Одоогийн нууц үг",
      // [Auto-translated] "Organization Name"
      organization: "Байгууллагын нэр",
      // [Auto-translated] "Full Street Address"
      "street-address": "Гудамжны бүрэн хаяг",
      // [Auto-translated] "Address Line 1"
      "address-line1": "Хаягийн шугам 1",
      // [Auto-translated] "Address Line 2"
      "address-line2": "Хаягийн мөр 2",
      // [Auto-translated] "Address Line 3"
      "address-line3": "Хаягийн мөр 3",
      // [Auto-translated] "Level 4 Address"
      "address-level4": "4-р түвшингийн хаяг",
      // [Auto-translated] "Level 3 Address"
      "address-level3": "3-р түвшингийн хаяг",
      // [Auto-translated] "Level 2 Address"
      "address-level2": "2-р түвшингийн хаяг",
      // [Auto-translated] "Level 1 Address"
      "address-level1": "1-р түвшингийн хаяг",
      // [Auto-translated] "Country Code"
      country: "Улсын код",
      // [Auto-translated] "Country Name"
      "country-name": "Улсын нэр",
      // [Auto-translated] "Postal Code"
      "postal-code": "Шуудангийн код",
      // [Auto-translated] "Cardholder Name"
      "cc-name": "Карт эзэмшигчийн нэр",
      // [Auto-translated] "Cardholder First Name"
      "cc-given-name": "Карт эзэмшигчийн нэр",
      // [Auto-translated] "Cardholder Middle Name"
      "cc-additional-name": "Карт эзэмшигчийн овгийн нэр",
      // [Auto-translated] "Cardholder Last Name"
      "cc-family-name": "Карт эзэмшигчийн овгийн нэр",
      // [Auto-translated] "Credit Card Number"
      "cc-number": "Кредит картын дугаар",
      // [Auto-translated] "Expiration Date"
      "cc-exp": "Хүчингүй болох хугацаа",
      // [Auto-translated] "Expiration Month"
      "cc-exp-month": "Хугацаа дуусах сар",
      // [Auto-translated] "Expiration Year"
      "cc-exp-year": "Хугацаа дуусах жил",
      // [Auto-translated] "Card Security Code"
      "cc-csc": "Картын аюулгүй байдлын код",
      // [Auto-translated] "Credit Card Type"
      "cc-type": "Кредит картын төрөл",
      // [Auto-translated] "Transaction Currency"
      "transaction-currency": "Транзакцийн валют",
      // [Auto-translated] "Transaction Amount"
      "transaction-amount": "Транзакцийн хэмжээ",
      // [Auto-translated] "Preferred Language"
      language: "Санал болгосон хэл",
      // [Auto-translated] "Birthday"
      bday: "Төрсөн өдөр",
      // [Auto-translated] "Birthday Day"
      "bday-day": "Төрсөн өдрийн өдөр",
      // [Auto-translated] "Birthday Month"
      "bday-month": "Төрсөн өдрийн сар",
      // [Auto-translated] "Birthday Year"
      "bday-year": "Төрсөн өдөр",
      // [Auto-translated] "Gender"
      sex: "Хүйс",
      // [Auto-translated] "Website URL"
      url: "Вэбсайтын URL",
      // [Auto-translated] "Profile Photo"
      photo: "Профайл зураг",
      // [Auto-translated] "Telephone Number"
      tel: "Утасны дугаар",
      // [Auto-translated] "Country Code for Phone"
      "tel-country-code": "Утасны улсын код",
      // [Auto-translated] "National Telephone Number"
      "tel-national": "Үндэсний утасны дугаар",
      // [Auto-translated] "Area Code"
      "tel-area-code": "Бүсийн код",
      // [Auto-translated] "Local Phone Number"
      "tel-local": "Орон нутгийн утасны дугаар",
      // [Auto-translated] "Local Phone Prefix"
      "tel-local-prefix": "Орон нутгийн утасны угтвар",
      // [Auto-translated] "Local Phone Suffix"
      "tel-local-suffix": "Орон нутгийн утасны суффикс",
      // [Auto-translated] "Phone Extension"
      "tel-extension": "Утасны өргөтгөл",
      // [Auto-translated] "Email Address"
      email: "Э-мэйл хаяг",
      // [Auto-translated] "Instant Messaging Protocol"
      impp: "Мессежийн протокол"
    },
    maskType: {
      // [Auto-translated] "None"
      none: "Хэн ч биш",
      // [Auto-translated] "Pattern"
      pattern: "Загвар",
      // [Auto-translated] "Numeric"
      numeric: "Тоо нь",
      // [Auto-translated] "Date and Time"
      datetime: "Огноо, цаг",
      // [Auto-translated] "Currency"
      currency: "Валютын ханш"
    },
    inputTextAlignment: {
      // [Auto-translated] "Auto"
      auto: "Авто",
      // [Auto-translated] "Left"
      left: "Зүүн",
      // [Auto-translated] "Right"
      right: "Баруун талд"
    },
    // "All"
    all: "Бүх",
    // "Page"
    page: "Хуудас",
    // "Survey"
    survey: "Санал асуулга",
    // "When switching to the next page"
    onNextPage: "Дараагийн хуудас руу шилжих үед",
    // "After an answer is changed"
    onValueChanged: "Асуулт солигдсоны дараа",
    // "Before an answer is changed"
    onValueChanging: "Асуулт солигдхоос өмнө",
    questionsOnPageMode: {
      // [Auto-translated] "Original structure"
      standard: "Оригинал бүтэц",
      // [Auto-translated] "Show all questions on one page"
      singlePage: "Бүх асуултыг нэг хуудсан дээр харуул",
      // [Auto-translated] "Show single question per page"
      questionPerPage: "Хуудас тус бүрт ганц асуултыг харуул",
      // [Auto-translated] "Show single input field per page"
      inputPerPage: "Хуудас бүрт нэг оролт талбарыг үзүүлэх"
    },
    // "No preview"
    noPreview: "Урьдчилан харах боломжгүй",
    // "Show all questions"
    showAllQuestions: "Бүх асуултыг харуулах.",
    // "Show answered questions only"
    showAnsweredQuestions: "Зөвхөн хариулсан асуултуудыг харуулах.",
    // [Auto-translated] "Show all questions"
    allQuestions: "Бүх асуултыг үзүүл",
    // [Auto-translated] "Show answered questions only"
    answeredQuestions: "Зөвхөн хариулсан асуултуудыг үзүүлэх",
    // "Completed pages"
    pages: "Бөглөгдсөн хуудсууд",
    // "Answered questions"
    questions: "Хариулсан асуултууд",
    // "Answered required questions"
    requiredQuestions: "Заавал бөглөх асуултууд",
    // "Valid answers"
    correctQuestions: "Зөв хариултууд",
    // "Completed pages (button UI)"
    buttons: "Бөглөгдсөн хуудсууд (UI товч)",
    // "Under the input field"
    underInput: "Оролтын доор",
    // "Under the question title"
    underTitle: "Гарчгийн доор",
    // "On lost focus"
    onBlur: "Бүдгэрүүлсэн үед",
    // "While typing"
    onTyping: "Бичиж байх үед",
    // "Under the row"
    underRow: "Мөрийн доор",
    // "Under the row, display one section only"
    underRowSingle: "Мөрийн доор, зөвхөн ганц панел харагдана",
    // "Auto"
    auto: "Авто",
    showNavigationButtons: {
      // "Hidden"
      none: "Нуусан"
    },
    timerInfoMode: {
      // "Both"
      combined: "Аль аль нь"
    },
    addRowButtonLocation: {
      // "Based on matrix layout"
      default: "Матрицын загвараас шалтгаалах"
    },
    panelsState: {
      // "Locked"
      default: "Хэрэглэгчид панелийг өргөсгөж багасгаж чадахгүй",
      // "Collapse all"
      collapsed: "Бүх панел багассан",
      // "Expand all"
      expanded: "Бүх панел өргөтгөссөн",
      // [Auto-translated] "First expanded"
      firstExpanded: "Анх өргөтгөн"
    },
    widthMode: {
      // "Static"
      static: "Статик",
      // "Responsive"
      responsive: "Уян хатан"
    },
    contentMode: {
      // "Image"
      image: "Зураг",
      // "Video"
      video: "Видео",
      // "YouTube"
      youtube: "YouTube"
    },
    displayMode: {
      // "Buttons"
      buttons: "Товчнууд",
      // "Dropdown"
      dropdown: "Доош задрах"
    },
    rateColorMode: {
      // [Auto-translated] "Default"
      default: "Дефолт",
      // [Auto-translated] "Scale"
      scale: "Хэмжүүр"
    },
    scaleColorMode: {
      // [Auto-translated] "Monochrome"
      monochrome: "Монхор",
      // [Auto-translated] "Colored"
      colored: "Өнгөлсөн"
    },
    autoGenerate: {
      // [Auto-translated] "Auto-generate"
      "true": "Автоматаар үүсгэх",
      // [Auto-translated] "Manual"
      "false": "Гарын авлага"
    },
    rateType: {
      // [Auto-translated] "Labels"
      labels: "Labels",
      // [Auto-translated] "Stars"
      stars: "Одод",
      // [Auto-translated] "Smileys"
      smileys: "Инээмсэглэл"
    },
    state: {
      // [Auto-translated] "Locked"
      default: "Цоожтой"
    },
    showQuestionNumbers: {
      // [Auto-translated] "Auto-numbering"
      default: "Авто машины дугаар олгох",
      // [Auto-translated] "Auto-numbering"
      on: "Авто машины дугаар олгох",
      // [Auto-translated] "Reset on each page"
      onPage: "Хуудас бүр дээр дахин тохируулах",
      // [Auto-translated] "Reset on each panel"
      onpanel: "Тавиур бүр дээр дахин тавих",
      // [Auto-translated] "Reset on each panel"
      onPanel: "Тавиур бүр дээр дахин тавих",
      // [Auto-translated] "Recursive numbering"
      recursive: "Рекурсив дугаарлалт",
      // [Auto-translated] "Continue across the survey"
      onSurvey: "Судалгааг үргэлжлүүлэн хийх",
      // [Auto-translated] "No numbering"
      off: "Дугаарлахгүй"
    },
    descriptionLocation: {
      // [Auto-translated] "Under the question title"
      underTitle: "Асуултын нэрийн дор",
      // [Auto-translated] "Under the input field"
      underInput: "Оролтын талбарын дор"
    },
    selectToRankAreasLayout: {
      // [Auto-translated] "Next to choices"
      horizontal: "Дараа нь сонголт",
      // [Auto-translated] "Above choices"
      vertical: "Дээрх сонголтууд"
    },
    displayStyle: {
      // [Auto-translated] "Decimal"
      decimal: "Decimal",
      // [Auto-translated] "Currency"
      currency: "Валютын ханш",
      // [Auto-translated] "Percentage"
      percent: "Хувь",
      // [Auto-translated] "Date"
      date: "Огноо"
    },
    totalDisplayStyle: {
      // [Auto-translated] "Decimal"
      decimal: "Decimal",
      // [Auto-translated] "Currency"
      currency: "Валютын ханш",
      // [Auto-translated] "Percentage"
      percent: "Хувь",
      // [Auto-translated] "Date"
      date: "Огноо"
    },
    rowOrder: {
      // [Auto-translated] "Original"
      initial: "Оргил"
    },
    questionOrder: {
      // [Auto-translated] "Original"
      initial: "Оргил"
    },
    progressBarLocation: {
      // [Auto-translated] "Top"
      top: "Дээд",
      // [Auto-translated] "Bottom"
      bottom: "Доод",
      // [Auto-translated] "Top and bottom"
      topbottom: "Дээд ба доод",
      // [Auto-translated] "Above the header"
      aboveheader: "Гарчгийн дээр",
      // [Auto-translated] "Below the header"
      belowheader: "Гарчгийн доод талд",
      // [Auto-translated] "Hidden"
      off: "Нуугдмал"
    },
    // [Auto-translated] "Sum"
    sum: "Сум",
    // [Auto-translated] "Count"
    count: "Тооллого",
    // [Auto-translated] "Min"
    min: "Мин",
    // [Auto-translated] "Max"
    max: "Макс",
    // [Auto-translated] "Avg"
    avg: "Авг",
    searchMode: {
      // [Auto-translated] "Contains"
      contains: "Агуулах",
      // [Auto-translated] "Starts with"
      startsWith: "Эхлэл"
    },
    backgroundImageFit: {
      // [Auto-translated] "Auto"
      auto: "Авто",
      // [Auto-translated] "Cover"
      cover: "Хөшиг",
      // [Auto-translated] "Contain"
      contain: "Агуулах",
      // [Auto-translated] "Stretch"
      fill: "Шээс",
      // [Auto-translated] "Tile"
      tile: "Тил"
    },
    backgroundImageAttachment: {
      // [Auto-translated] "Fixed"
      fixed: "Зассан",
      // [Auto-translated] "Scroll"
      scroll: "Хуйлмал бичиг"
    },
    headerView: {
      // [Auto-translated] "Basic"
      basic: "Үндсэн",
      // [Auto-translated] "Advanced"
      advanced: "Өндөр хөгжсөн"
    },
    inheritWidthFrom: {
      // [Auto-translated] "Same as survey"
      survey: "Судалгаатай адил",
      // [Auto-translated] "Same as container"
      container: "Контейнертэй адил"
    },
    backgroundColorSwitch: {
      // [Auto-translated] "None"
      none: "Хэн ч биш",
      // [Auto-translated] "Accent color"
      accentColor: "Акцент өнгө",
      // [Auto-translated] "Custom"
      custom: "Үйлчилгээ"
    },
    colorPalette: {
      // [Auto-translated] "Light"
      light: "Гэрэл",
      // [Auto-translated] "Dark"
      dark: "Харанхуй"
    },
    isPanelless: {
      // [Auto-translated] "Default"
      "false": "Дефолт",
      // [Auto-translated] "Without Panels"
      "true": "Панелгүйгээр"
    },
    progressBarInheritWidthFrom: {
      // [Auto-translated] "Same as survey"
      survey: "Судалгаатай адил",
      // [Auto-translated] "Same as container"
      container: "Савтай адил"
    }
  },
  // Operators
  op: {
    // "Empty"
    empty: "Хоосон",
    // "Not empty"
    notempty: "Хоосон биш",
    // "Equals"
    equal: "Тэнцэх",
    // "Does not equal"
    notequal: "Тэнцэхгүй байх",
    // "Contains"
    contains: "Агуулсан",
    // "Does not contain"
    notcontains: "Агуулаагүй",
    // "Any of"
    anyof: "Аль нэгийг нь",
    // "All of"
    allof: "Бүгдийг нь",
    // "Greater than"
    greater: "-аас их",
    // "Less than"
    less: "-аас бага",
    // "Greater than or equal to"
    greaterorequal: "-аас их эсвэл тэнцүү байх",
    // "Less than or equal to"
    lessorequal: "-аас бага эсвэл тэнцүү байх",
    // "and"
    and: "ба",
    // "or"
    or: "эсвэл"
  },
  // Embed window
  ew: {
    // "Use Angular version"
    angular: "Angular хувилбар ашиглах",
    // "Use jQuery version"
    jquery: "jQuery хувилбар ашиглах",
    // "Use Knockout version"
    knockout: "Knockout хувилбар ашиглах",
    // "Use React version"
    react: "React хувилбар ашиглах",
    // "Use Vue version"
    vue: "Vue хувилбар ашиглах",
    // "For bootstrap framework"
    bootstrap: "bootstrap бүтцэд",
    // "Modern theme"
    modern: "Орчин үеийн",
    // "Default theme"
    default: "Үндсэн",
    // "Orange theme"
    orange: "Улбар шар",
    // "Darkblue theme"
    darkblue: "Хар хөх",
    // "Darkrose theme"
    darkrose: "Хүрэн",
    // "Stone theme"
    stone: "Чулуун",
    // "Winter theme"
    winter: "Өвлийн",
    // "Winter-Stone theme"
    winterstone: "Өвлийн-чулуун",
    // "Show survey on a page"
    showOnPage: "Санал асуулгыг хуудас дээр харуулах",
    // "Show survey in a window"
    showInWindow: "Санал асуулгыг цонхонд харуулах",
    // "Load Survey JSON from server"
    loadFromServer: "JSON серверээс санал асуулгыг ачааллуулах",
    // "Scripts and styles"
    titleScript: "Скрипт ба хэв маяг",
    // "HTML"
    titleHtml: "HTML",
    // "JavaScript"
    titleJavaScript: "JavaScript"
  },
  // Preview (Survey)
  ts: {
    // "Select the page to test it"
    selectPage: "Тест хийх хуудсыг сонгох.",
    // "Show invisible elements"
    showInvisibleElements: "Харагдахгүй элементүүдийг харуулах.",
    // "Hide invisible elements"
    hideInvisibleElements: "Харагдахгүй элементүүдийг нуух.",
    // [Auto-translated] "Previous"
    prevPage: "Өмнөх",
    // [Auto-translated] "Next"
    nextPage: "Дараагийн"
  },
  validators: {
    // "Answer count"
    answercountvalidator: "Хариултын тоо",
    // "Email"
    emailvalidator: "Цахим шууудан",
    // "Expression"
    expressionvalidator: "илэрхийлэл",
    // "Number"
    numericvalidator: "Тоо",
    // "Regex"
    regexvalidator: "Regex",
    // "Text"
    textvalidator: "Текст"
  },
  triggers: {
    // "Complete survey"
    completetrigger: "Санал асуулга дуусгах.",
    // "Set answer"
    setvaluetrigger: "Хариулт тавих",
    // "Copy answer"
    copyvaluetrigger: "Хариулт хуулах",
    // "Skip to question"
    skiptrigger: "Асуулт руу үсрэх",
    // "Run expression"
    runexpressiontrigger: "илэрхийлэл ажлуулах",
    // "change visibility (deprecated)"
    visibletrigger: "Харагдах байдлыг өөрчлөх"
  },
  peplaceholder: {
    patternmask: {
      // "Ex.: +1(999)-999-99-99"
      pattern: "Экс.: +1(999)-999-99-99"
    },
    datetimemask: {
      // [Auto-translated] "Ex.: mm/dd/yyyy HH:MM:ss"
      pattern: "Жишээ нь: мм/дд/гггг ХХ:ММ:сс"
    },
    currencymask: {
      // "Ex.: $"
      prefix: "Экс.: $",
      // "Ex.: USD"
      suffix: "Экс.: USD"
    },
    panelbase: {
      // [Auto-translated] "Ex.: 200px"
      questionTitleWidth: "Экс: 200px"
    },
    panellayoutcolumn: {
      // "Ex.: 30%"
      effectiveWidth: "Экс. : 30 %",
      // "Ex.: 200px"
      questionTitleWidth: "Экс: 200px"
    }
  },
  pehelp: {
    panel: {
      // "A panel ID that is not visible to respondents."
      name: "Хариулагчдад харагдахгүй панелийн ID.",
      // [Auto-translated] "Type a panel subtitle."
      description: "Панелийн дэд гарчиг гэж бич.",
      // "Use the magic wand icon to set a conditional rule that determines panel visibility."
      visibleIf: "Ид шидийн wand зургыг ашиглан панелийн харагдах байдлыг тодорхойлох нөхцөлийн дүрмийг тогтоо.",
      // [Auto-translated] "Use the magic wand icon to set a conditional rule that disables the read-only mode for the panel."
      enableIf: "Зөвхөн унших хэв маягийг хаах нөхцөлтэй дүрмийг тогтоохын тулд шидэт туузны зургыг ашигла.",
      // "Use the magic wand icon to set a conditional rule that prevents survey submission unless at least one nested question has an answer."
      requiredIf: "Наад зах нь нэг үүрээ засах асуулт хариулт байхгүй л бол судалгаа явуулахаас сэргийлдэг нөхцөлийн дүрмийг тогтоохын тулд шидэт туузны зургыг ашигла.",
      // [Auto-translated] "Applies to all questions within this panel. When set to \"Hidden\", it also hides question descriptions. If you want to override this setting, define title alignment rules for individual questions. The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Top\" by default). "
      questionTitleLocation: "Энэ хэлэлцүүлгийн бүх асуултанд хамаарна. \"Hidden\" гэж тохируулбал асуултын тайлбарыг бас нуудаг. Хэрэв та энэ тохиргоог хүчингүй болгохыг хүсвэл асуулт бүрийн гарчиг тохируулах дүрмийг тодорхойл. \"Өвлөх\" сонголт нь хуудасны түвшинд (хэрэв тохирсон бол) эсвэл судалгааны түвшинд (\"Top\" default) тохируулгыг хэрэглэнэ. ",
      // [Auto-translated] "Sets consistent width for question titles when they are aligned to the left of their question boxes. Accepts CSS values (px, %, in, pt, etc.)."
      questionTitleWidth: "Асуултын хайрцгуудынхаа зүүн талд эгнэн зогсож байх үед асуултын нэрний тогтмол өргөнийг тогтоо. CSS-ийн үнэт зүйлсийг (px, %, in, pt г.м) хүлээн зөвшөөрдөг.",
      // "Sets the location of an error message in relation to all questions within the panel. The \"Inherit\" option applies the page-level (if set) or survey-level setting."
      questionErrorLocation: "Хяналтын шатны бүх асуулттай холбогдуулан алдааны мессежийн байршлыг тогтооно. \"Өв залгамжлах\" сонголт нь хуудасны түвшин (хэрэв set) эсвэл судалгааны түвшний тохиргоог хэрэгжүүлдэг.",
      // [Auto-translated] "Keeps the original order of questions or randomizes them. The \"Inherit\" option applies the page-level (if set) or survey-level setting."
      questionOrder: "Асуултын анхны дарааллыг хадгалах эсвэл санамсаргүй болгоно. \"Өвлөх\" сонголт нь хуудасны түвшинд (хэрэв тохируулсан бол) эсвэл судалгааны түвшинд тохируулгыг хэрэглэнэ.",
      // "Repositions the panel to the end of a selected page."
      page: "Сонгосон хуудасны төгсгөлд панелийг дахин байршуулах.",
      // [Auto-translated] "Adds space or margin between the panel content and the left border of the panel box."
      innerIndent: "Панелийн агуулга болон панелийн хайрцагны зүүн хилийн хооронд зай эсвэл зай нэмнэ.",
      // "Unselect to display the panel in one line with the previous question or panel. The setting doesn't apply if the panel is the first element in your form."
      startWithNewLine: "Өмнөх асуулт эсвэл панелтай нэг мөрт үзүүлэхээр сонгогдоогүй. Хэрэв панел нь таны маягт дахь анхны элемент бол тохиргоо хамаарахгүй.",
      // "Choose from: \"Expanded\" - the panel is displayed in full and can be collapsed; \"Collapsed\" - the panel displays only the title and description and can be expanded; \"Locked\" - the panel is displayed in full and cannot be collapsed."
      state: "Сонголтоос: \"Өргөтгөсөн\" - хавтанг бүрэн харуулж, нурааж болно; \"Нурсан\" - панел нь зөвхөн гарчиг, тодорхойлолтыг харуулж, өргөтгөх боломжтой; \"Цоожтой\" - панелыг бүрэн харуулсан бөгөөд нурааж болохгүй.",
      // [Auto-translated] "Sets the width of the panel in proportion to other survey elements in the same line. Accepts CSS values (px, %, in, pt, etc.)."
      width: "Хавтангийн өргөнийг нэг шугамын бусад судалгааны элементүүдтэй пропорциональ байдлаар тохируулна. CSS-ийн үнэ цэнийг (px, %, in, pt гэх мэт) хүлээн авна.",
      // [Auto-translated] "Assigns numbers to questions nested within this panel."
      showQuestionNumbers: "Энэ самбарт байрлуулсан асуултуудад дугаар өгнө.",
      // [Auto-translated] "Specifies how many columns this panel spans within the grid layout."
      effectiveColSpan: "Энэ панел grid загварт хэдэн багана багтаахыг тодорхойлно.",
      // [Auto-translated] "This table lets you configure each grid column within the panel. It automatically sets the width percentage for each column based on the maximum number of elements in a row. To customize the grid layout, manually adjust these values and define the title width for all questions in each column."
      gridLayoutColumns: "Энэ хүснэгт нь панел доторх grid багана бүрийг тохируулах боломжийг олгодог. Энэ нь нэг мөр дэх элементүүдийн хамгийн их тооноос шалтгаалан багана бүрийн өргөнийн хувийг автоматаар тогтоодог. Хүснэгтийн байрлалыг тохируулахын тулд эдгээр үнэ цэнийг гараар тохируулж, багана бүр дэх бүх асуултын гарчгийн өргөнийг тодорхойл."
    },
    paneldynamic: {
      // "A panel ID that is not visible to respondents."
      name: "Хариулагчдад харагдахгүй панелийн ID.",
      // "Type a panel subtitle."
      description: "Панелийн дэд гарчиг бичнэ.",
      // "Use the magic wand icon to set a conditional rule that determines panel visibility."
      visibleIf: "Ид шидийн wand зургыг ашиглан панелийн харагдах байдлыг тодорхойлох нөхцөлийн дүрмийг тогтоо.",
      // [Auto-translated] "Use the magic wand icon to set a conditional rule that disables the read-only mode for the panel."
      enableIf: "Зөвхөн унших хэв маягийг хаах нөхцөлтэй дүрмийг тогтоохын тулд шидэт туузны зургыг ашигла.",
      // "Use the magic wand icon to set a conditional rule that prevents survey submission unless at least one nested question has an answer."
      requiredIf: "Наад зах нь нэг үүрээ засах асуулт хариулт байхгүй л бол судалгаа явуулахаас сэргийлдэг нөхцөлийн дүрмийг тогтоохын тулд шидэт туузны зургыг ашигла.",
      // "Applies to all questions within this dynamic panel. If you want to override this setting, define title alignment rules for individual questions. The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Top\" by default)."
      templateQuestionTitleLocation: "Энэ хэлэлцүүлгийн бүх асуултад хамаарна. Хэрэв та энэ тохиргоог хүчингүй болгохыг хүсвэл хувь хүний асуултуудад зориулсан нэрийн зохицуулах дүрмүүдийг тодорхойл. \"Өв залгамжлах\" сонголт нь хуудасны түвшин (хэрэв set) эсвэл судалгааны түвшний тохиргоог (\"Top\" нь default-аар) хэрэгжүүлдэг.",
      // "Sets consistent width for question titles when they are aligned to the left of their question boxes. Accepts CSS values (px, %, in, pt, etc.)."
      templateQuestionTitleWidth: "Асуултын гарчгийг асуултын хайрцгийн зүүн тийш байрлуулсан үед ижил өргөнийг тогтооно. CSS-ийн үнэ цэнийг (px, %, in, pt гэх мэт) хүлээн авна.",
      // "Sets the location of an error message in relation to a question with invalid input. Choose between: \"Top\" - an error text is placed at the top of the question box; \"Bottom\" - an error text is placed at the bottom of the question box. The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Top\" by default)."
      templateErrorLocation: "Алдааны мессежийн байршлыг хүчингүй оруулсан асуулттай холбон тогтооно. Аль нэгийг сонгоно уу: \"Топ\" - асуултын хайрцагны дээд хэсэгт алдаа текст байрлуулсан байна; \"Bottom\" - асуултын хайрцагны доод хэсэгт алдаа текст байрлуулна. \"Өв залгамжлах\" сонголт нь хуудасны түвшин (хэрэв set) эсвэл судалгааны түвшний тохиргоог (\"Top\" нь default-аар) хэрэгжүүлдэг.",
      // "Sets the location of an error message in relation to all questions within the panel. The \"Inherit\" option applies the page-level (if set) or survey-level setting."
      errorLocation: "Хяналтын шатны бүх асуулттай холбогдуулан алдааны мессежийн байршлыг тогтооно. \"Өв залгамжлах\" сонголт нь хуудасны түвшин (хэрэв set) эсвэл судалгааны түвшний тохиргоог хэрэгжүүлдэг.",
      // "Repositions the panel to the end of a selected page."
      page: "Сонгосон хуудасны төгсгөлд панелийг дахин байршуулах.",
      // [Auto-translated] "Adds space or margin between the panel content and the left border of the panel box."
      indent: "Панелийн агуулга болон панелийн хайрцгийн зүүн хилийн хооронд зай эсвэл зай нэмнэ.",
      // "Unselect to display the panel in one line with the previous question or panel. The setting doesn't apply if the panel is the first element in your form."
      startWithNewLine: "Өмнөх асуулт эсвэл панелтай нэг мөрт үзүүлэхээр сонгогдоогүй. Хэрэв панел нь таны маягт дахь анхны элемент бол тохиргоо хамаарахгүй.",
      // "Choose from: \"Expanded\" - the panel is displayed in full and can be collapsed; \"Collapsed\" - the panel displays only the title and description and can be expanded; \"Locked\" - the panel is displayed in full and cannot be collapsed."
      state: "Сонголтоос: \"Өргөтгөсөн\" - хавтанг бүрэн харуулж, нурааж болно; \"Нурсан\" - панел нь зөвхөн гарчиг, тодорхойлолтыг харуулж, өргөтгөх боломжтой; \"Цоожтой\" - панелыг бүрэн харуулсан бөгөөд нурааж болохгүй.",
      // "Sets the width of the panel in proportion to other survey elements in the same line. Accepts CSS values (px, %, in, pt, etc.)."
      width: "Панелийн өргөнийг ижил шугамаар бусад судалгааны элементүүдтэй тэнцүү тогтооно. CSS-ийн үнэт зүйлсийг (px, %, in, pt г.м) хүлээн зөвшөөрдөг.",
      // "Type in a template for entry titles. Use {panelIndex} for the entry's general position and {visiblePanelIndex} for its order among visible entries. Insert these placeholders into the pattern to add automatic numbering."
      templateTitle: "Динамик панел цолны темплэйтэд бичнэ. Харагдах панелуудын дунд түүний дарааллыг {panelIndex} болон {visiblePanelIndex} -ийг ашиглана уу. Автомат дугаар нэмэхийн тулд эдгээр байрлагчдыг загварт оруул.",
      // "Type in a template for tab titles. Use {panelIndex} for an entry's general position and {visiblePanelIndex} for its order among visible entries. Insert these placeholders into the pattern to add automatic numbering."
      templateTabTitle: "Таб нэрний темплэйтэд бичнэ. {panelIndex} нь панелийн ерөнхий байрлал болон {visiblePanelIndex} -ийг ил харагдах панелуудын дунд эмх цэгцтэй байлгахад ашиглана. Автомат дугаар нэмэхийн тулд эдгээр байрлагчдыг загварт оруул.",
      // "A fallback text for tab titles that applies when the tab title pattern doesn't produce a meaningful value."
      tabTitlePlaceholder: "Таб нэрийн загвар утга учиртай үнэ цэнийг бий болгодоггүй үед хамаарах tab title-ийн уналтын текст.",
      // "This setting allows you to control the visibility of individual entries within the dynamic panel. Use the `{panel}` placeholder to reference the current entry in your expression."
      templateVisibleIf: "Энэ тохиргоо нь динамик панелын доторх хувь хүний панелын харагдах байдлыг хянах боломжийг олгодог. '{panel}' байрлуулагчийг ашиглан одоогийн панелийг өөрийн илэрхийлэлд эш татна уу.",
      // "This setting is automatically inherited by all questions within this dynamic panel. If you want to override this setting, define title alignment rules for individual questions. The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Top\" by default)."
      titleLocation: "Энэ тохиргоо нь энэ панел доторх бүх асуултаар автоматаар өвлөгддөг. Хэрэв та энэ тохиргоог хүчингүй болгохыг хүсвэл хувь хүний асуултуудад зориулсан нэрийн зохицуулах дүрмүүдийг тодорхойл. \"Өв залгамжлах\" сонголт нь хуудасны түвшин (хэрэв set) эсвэл судалгааны түвшний тохиргоог (\"Top\" нь default-аар) хэрэгжүүлдэг.",
      // "The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Under the panel title\" by default)."
      descriptionLocation: "\"Өв залгамжлах\" сонголт нь хуудасны түвшин (хэрэв set) эсвэл судалгааны түвшний тохиргоог (\"Under the panel title\" -ийг default-аар) хэрэгжүүлдэг.",
      // "Defines the position of a newly added entry. By default, new entries are added to the end. Select \"Next\" to insert a new entry after the current one."
      newPanelPosition: "Шинээр нэмэгдсэн панелийн байр суурийг тодорхойлно. Default-ээр төгсгөл рүү шинэ панелуудыг нэмдэг. Одоогийн панел дараа нь шинэ панел оруулахын тулд \"Next\"-ийг сонго.",
      // [Auto-translated] "Duplicates answers from the last entry and assigns them to the next added entry."
      copyDefaultValueFromLastEntry: "Сүүлийн тайлбарын хариултуудыг хувилж дараагийн нэмж оруулсан тайлбарт онооно.",
      // "Reference a question name to require a user to provide a unique response for this question in each entry."
      keyName: "Энэ асуултад хэрэглэгчээс панел бүрт өвөрмөц хариулт өгөхийг шаардахын тулд асуултын нэрийг эш тат.",
      // [Auto-translated] "Triggers a confirmation prompt before removing an entry."
      confirmDelete: "Тайлбарыг арилгахаас өмнө баталгааны өдөөлт үүсгэнэ."
    },
    matrixdynamic: {
      // [Auto-translated] "Triggers a confirmation prompt before removing a row."
      confirmDelete: "Мөрийг арилгахаас өмнө баталгааны хүсэлтийг өдөөнө.",
      // [Auto-translated] "Automatically expands the detail section when a new row is added to the matrix."
      detailPanelShowOnAdding: "Матрицад шинэ мөр нэмэх үед нарийвчилсан хэсгийг автоматаар өргөжүүлнэ."
    },
    // "Duplicates answers from the last row and assigns them to the next added dynamic row."
    copyDefaultValueFromLastEntry: "Сүүлийн мөрнөөс хариултуудыг хуулбарлаж, дараагийн нэмэлт динамик мөрөнд хуваарилна.",
    // [Auto-translated] "This setting allows you to assign a default answer value based on an expression. The expression can include basic calculations - `{q1_id} + {q2_id}`, Boolean expressions, such as `{age} > 60`, and functions: `iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, etc. The value determined by this expression serves as the initial default value that can be overridden by a respondent's manual input."
    defaultValueExpression: "Энэ тохиргоо нь илэрхийллийн үндсэн дээр дефолт хариултын үнэ цэнийг даалгах боломжийг олгодог. Илэрхийлэл нь үндсэн тооцоо - '{q1_id} + {q2_id}', Бөүлийн илэрхийллүүд, тухайлбал '{age} > 60', функц: 'iif()', 'өнөөдөр()', 'мин()', 'мин()', 'max()', 'avg()', г.м. Энэ илэрхийлэлээр тодорхойлогддог үнэ цэнэ нь хариулагчийн гарын авлагын оролтоор давхардуулан авч болох анхны дефолтын үнэ цэнэ болж өгдөг.",
    // "Use the magic wand icon to set a conditional rule that determines when a respondent's input is reset to the value based on the \"Default value expression\" or \"Set value expression\" or to the \"Default answer\" value (if either is set)."
    resetValueIf: "\"Default value expression\" эсвэл \"Set value expression\" эсвэл \"Default answer\" value (хэрэв аль нэгийг нь тогтоосон бол) үнэ цэнэд үндэслэн хариулагчийн оруулсан хувь нэмрийг үнэ цэнэд хэзээ дахин тохируулахыг тодорхойлох нөхцөлтэй дүрмийг тогтоохын тулд шидэт wand зургыг ашигла.",
    // "Use the magic wand icon to set a conditional rule that determines when to run the \"Set value expression\" and dynamically assign the resulting value as a response."
    setValueIf: "Ид шидийн wand зургыг ашиглан \"Set value expression\"-ийг хэзээ ажиллуулахыг тодорхойлох нөхцөлтэй дүрмийг тогтоож, үр дүнд хүрсэн үнэ цэнийг хариу болгон динамикаар даалга.",
    // "Specify an expression that defines the value to be set when the conditions in the \"Set value if\" rule are met. The expression can include basic calculations - `{q1_id} + {q2_id}`, Boolean expressions, such as `{age} > 60`, and functions: `iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, etc. The value determined by this expression can be overridden by a respondent's manual input."
    setValueExpression: "\"Set value if\" дүрмийн нөхцөл хангагдсан үед тогтоох үнэ цэнийг тодорхойлсон илэрхийллийг тодорхойл. Илэрхийлэл нь үндсэн тооцоо - '{q1_id} + {q2_id}', Бөүлийн илэрхийллүүд, тухайлбал '{age} > 60', функц: 'iif()', 'өнөөдөр()', 'мин()', 'мин()', 'max()', 'avg()', г.м. Энэ илэрхийлэлээр тогтоосон үнэ цэнийг хариулагчийн гарын авлагын оролтоор давхардуулан авч болно.",
    // "Survey Creator allows you to manually adjust the inline widths of form elements to control the layout. If this doesn't produce the desired outcome, you can enable the grid layout, which structures form elements using a column-based system. To configure layout columns, select a page or panel and use the \"Question Settings\" → \"Grid columns\" table. To adjust how many columns a question spans, select it and set the desired value in the \"Layout\" → \"Column span\" field."
    gridLayoutEnabled: "Survey Creator нь загварыг хянахын тулд хэлбэрийн элементүүдийн inline өргөнийг гараар тохируулах боломжийг олгодог. Хэрэв энэ нь хүссэн үр дүнг өгөхгүй бол баган дээр суурилсан системийг ашиглан элементүүдийг бүрдүүлдэг grid layout-ийг идэвхжүүлж болно. Загварын багануудыг тохируулахын тулд хуудас эсвэл панелийг сонгоод \"Асуултын тохиргоо\" → \"Grid columns\" хүснэгтийг ашиглана. Асуулт хэдэн багана багтаахыг тохируулахын тулд үүнийг сонгоод \"Layout\" → \"Column span\" талбарт хүссэн утгыг тохируул.",
    question: {
      // "A question ID that is not visible to respondents."
      name: "Асуултад хариулагчдад харагдахгүй асуултын ID.",
      // "Type a question subtitle."
      description: "Асуултын дэд гарчиг бичнэ үү.",
      // "Use the magic wand icon to set a conditional rule that determines question visibility."
      visibleIf: "Асуултын харагдах байдлыг тодорхойлох нөхцөлийн дүрмийг тогтоохын тулд шидэт туузны зургыг ашигла.",
      // [Auto-translated] "Use the magic wand icon to set a conditional rule that disables the read-only mode for the question."
      enableIf: "Асуултын зөвхөн унших хэв маягийг хаах нөхцөлтэй дүрмийг тогтоохын тулд шидэт туузны зургыг ашигла.",
      // "Use the magic wand icon to set a conditional rule that prevents survey advancing or submission unless the question received an answer."
      requiredIf: "Асуулт хариулт аваагүй л бол судалгааг урагшлуулах эсвэл ирүүлэхэд саад болох нөхцөлийн дүрмийг тогтоохын тулд шидэт туузны зургыг ашигла.",
      // [Auto-translated] "Unselect to display the question in one line with the previous question or panel. The setting doesn't apply if the question is the first element in your form."
      startWithNewLine: "Асуултыг өмнөх асуулт эсвэл панелтай нэг мөрт харуулахаар сонгогдоогүй. Асуулт нь таны маягт дахь анхны элемент бол тохиргоо хамаарахгүй.",
      // "Repositions the question to the end of a selected page."
      page: "Асуултыг сонгосон хуудасны төгсгөлд буцааж тавих.",
      // "Choose from: \"Expanded\" - the question box is displayed in full and can be collapsed; \"Collapsed\" - the question box displays only the title and description and can be expanded; \"Locked\" - the question box is displayed in full and cannot be collapsed."
      state: "Сонгох: \"Өргөтгөсөн\" - асуултын хайрцгийг бүрэн харуулсан бөгөөд нурж болно; \"Нурж унасан\" - асуултын хайрцаг нь зөвхөн гарчиг, дүрслэлийг харуулж, өргөтгөх боломжтой; \"Locked\" - асуултын хайрцгийг бүрэн харуулсан бөгөөд нурж болохгүй.",
      // "Overrides title alignment rules defined on a panel, page, or survey level. When set to \"Hidden\", it also hides question descriptions. The \"Inherit\" option applies any higher-level settings (if set) or survey-level setting (\"Top\" by default)."
      titleLocation: "Нэрийн зохицлын дүрмүүдийг панел, хуудас эсвэл судалгааны түвшин дээр тодорхойлсон байдаг. \"Өв залгамжлах\" сонголт нь ямар ч өндөр түвшний тохиргоог (хэрэв set) эсвэл судалгааны түвшний тохиргоог (\"Top\" нь default-аар) хэрэгжүүлдэг.",
      // "The \"Inherit\" option applies the survey-level setting (\"Under the question title\" by default)."
      descriptionLocation: "\"Өв залгамж\" сонголт нь судалгааны түвшний тохиргоог хэрэгжүүлдэг (\"Асуултын гарчиг доор\" гэсэн сонголтыг сонголтоор).",
      // "Sets the location of an error message in relation to the question with invalid input. Choose between: \"Top\" - an error text is placed at the top of the question box; \"Bottom\" - an error text is placed at the bottom of the question box. The \"Inherit\" option applies the survey-level setting (\"Top\" by default)."
      errorLocation: "Асуулттай холбоотой алдааны мессежийн байршлыг хүчингүй оруулсан байдлаар тогтооно. Аль нэгийг сонгоно уу: \"Топ\" - асуултын хайрцагны дээд хэсэгт алдаа текст байрлуулсан байна; \"Bottom\" - асуултын хайрцагны доод хэсэгт алдаа текст байрлуулна. \"Өв залгамж\" сонголт нь судалгааны түвшний тохиргоог (\"Top\" by default) хэрэгжүүлдэг.",
      // "Adds space or margin between the question content and the left border of the question box."
      indent: "Асуултын агуулга болон асуултын хайрцагны зүүн хил хоёрын хооронд зай эсвэл зай нэмнэ.",
      // "Sets the width of the question in proportion to other survey elements in the same line. Accepts CSS values (px, %, in, pt, etc.)."
      width: "Асуултын өргөнийг нэг мөрт бусад судалгааны элементүүдтэй тэнцүү байдлаар тогтооно. CSS-ийн үнэт зүйлсийг (px, %, in, pt г.м) хүлээн зөвшөөрдөг.",
      // "Choose from: \"On lost focus\" - the value is updated when the input field loses focus; \"While typing\" - the value is updated in real-time, as users are typing. The \"Inherit\" option applies the survey-level setting (\"On lost focus\" by default)."
      textUpdateMode: "Сонгоно уу: \"Алдагдсан фокус дээр\" - оролтын талбар анхаарлаа алдсан үед үнэ цэнэ нь шинэчлэгддэг; \"Цахимаар бичих\" - хэрэглэгчид бичихийн хэрээр үнэ цэнэ нь бодит цаг хугацаанд шинэчлэгддэг. \"Өв залгамж\" сонголт нь судалгааны түвшний тохиргоог (\"Алдагдсан фокус дээр\" дефолтоор) хэрэгжүүлдэг.",
      // [Auto-translated] "You can use any web service as a data source for multiple-choice questions. To populate choice values, enter the URL of the service providing the data."
      url: "Та ямар ч вэб үйлчилгээг олон сонголттой асуултуудад мэдээллийн эх сурвалж болгон ашиглаж болно. Сонголтын үнэт зүйлсийг хүн амлахын тулд өгөгдөл өгөх үйлчилгээний URL-ийг оруулна уу.",
      // [Auto-translated] "A comparison operation used to filter the drop-down list."
      searchMode: "Дуслын жагсаалтыг шүүлт хийхэд ашигладаг харьцуулах мэс засал.",
      // [Auto-translated] "Long texts in choice options will automatically generate line breaks to fit within the drop-down menu. Unselect if you want the texts to clip."
      textWrapEnabled: "Сонголтын сонголтуудын урт текстүүд нь дусал цэсний дотор багтахын тулд автоматаар шугамын завсар үүсгэх болно. Хэрэв та бичвэрүүдийг хайчлахыг хүсвэл сонгогдоогүй.",
      // [Auto-translated] "Specifies how many columns this question spans within the grid layout."
      effectiveColSpan: "Энэ асуулт хүснэгтийн загварт хэдэн багана багтаахыг тодорхойлно."
    },
    surveyvalidator: {
      // "Use the magic wand icon to define when the question's value is considered valid."
      expression: "Асуултын үнэ цэн хэзээ хүчин төгөлдөр болохыг тодорхойлохын тулд ид шидийн саваа тэмдгийг ашигла.",
      // [Auto-translated] "Errors block progress until resolved. Warnings highlight issues but allow to continue. Informational notes offer additional context or neutral guidance. When using warnings or informational notes, we recommend enabling immediate validation: \"Survey\" → \"Validation\" → \"Run validation\" → \"After an answer has changed\"."
      notificationType: "Алдаа нь шийдвэрлэгдэх хүртэл хөгжил дэвшлийг зогсоодог. Сэрэмжлүүлэг нь асуудлуудыг тодотгож байгаа ч үргэлжлүүлэхийг зөвшөөрдөг. Мэдээллийн тэмдэглэл нь нэмэлт хам сэдэв эсвэл төвийг сахисан удирдамжийг санал болгодог. Сэрэмжлүүлэг, мэдээллийн тэмдэглэл ашиглахдаа \"Survey\" → \"Validation\" → \"Run validation\" → \"Answer has changed\" зэрэг шууд баталгаажуулалтыг идэвхжүүлэхийг зөвлөж байна."
    },
    signaturepad: {
      // "Sets the width of the displayed signature area and the resulting image."
      signatureWidth: "Үзүүлсэн гарын үсэг зурсан хэсгийн өргөнийг болон үүний үр дүнд бий болсон зургийг тогтоо.",
      // "Sets the height of the displayed signature area and the resulting image."
      signatureHeight: "Үзүүлсэн гарын үсэг зурсан хэсгийн өндрийг болон үүний үр дүнд бий болсон зургийг тогтооно.",
      // "Select if you want the signature area to fill all available space within the question box while maintaining the default 3:2 aspect ratio. When custom width and height values are set, the setting will keep the aspect ratio of these dimensions."
      signatureAutoScaleEnabled: "Хэрэв та гарын үсэг зурах талбайгаа асуултын хайрцаг доторх бүх боломжит зайг бөглөж, стандарт 3:2 талын харьцааг хадгалахыг хүсэж байвал сонго. Custom өргөн, өндөр үнэ цэнийг тогтоох үед тохиргоо нь эдгээр хэмжээсийн тал харьцааг хадгална."
    },
    file: {
      // "Specifies the display height of uploaded images in the preview and the actual height of images taken with the camera. In single file upload mode, the display height is limited by the preview area; in multiple file upload mode, it is limited by the thumbnail area."
      imageHeight: "Урьдчилан харах хэсэгт оруулсан зургуудын үзүүлэх өндрийг болон камераар авсан зургуудын бодит өндрийг тодорхойлно. Нэг файл upload mode-д дэлгэцийн өндрийг урьдчилан харах талбайгаар хязгаарладаг. Multiple file upload mode-д thumbnail хэсгээр хязгаарлагддаг.",
      // "Specifies the display width of uploaded images in the preview and the actual width of images taken with the camera. In single file upload mode, the display width is limited by the preview area; in multiple file upload mode, it is limited by the thumbnail area."
      imageWidth: "Урьдчилан харах хэсэгт оруулсан зургуудын дэлгэцийн өргөнийг болон камераар авсан зургуудын бодит өргөнийг тодорхойлно. Нэг файл upload mode-д дэлгэцийн өргөнийг урьдчилан харах талбайгаар хязгаарладаг. Multiple file upload mode-д thumbnail хэсгээр хязгаарлагддаг.",
      // [Auto-translated] "Displays thumbnail previews for uploaded files when possible. Unselect if you want to show file icons instead."
      allowImagesPreview: "Боломжтой бол татаж авсан файлуудад зориулсан эрхий хурууны урьдчилсан үзүүлэлтийг үзүүлнэ. Оронд нь файлын зургуудыг үзүүлэхийг хүсвэл сонгогдоогүй."
    },
    image: {
      // "The \"Auto\" option automatically determines the suitable mode for display - Image, Video, or YouTube - based on the source URL provided."
      contentMode: "\"Авто\" сонголт нь эх сурвалж URL-д суурилсан зураг, видео, эсвэл YouTube - харуулах тохиромжтой хэв маягийг автоматаар тодорхойлдог."
    },
    imagepicker: {
      // [Auto-translated] "Overrides the minimum and maximum height values."
      imageHeight: "Хамгийн бага болон хамгийн их өндөр үнэ цэнийг давхардна.",
      // [Auto-translated] "Overrides the minimum and maximum width values."
      imageWidth: "Хамгийн бага, хамгийн их өргөний үнэ цэнийг давхардалд оруулах.",
      // [Auto-translated] "\"Value\" serves as an item ID used in conditional rules; \"Text\" is displayed to respondents."
      choices: "\"Value\" нь нөхцөлийн дүрэмд хэрэглэгддэг item ID юм; \"Текст\" нь хариулагчдад харагдана.",
      // "Choose between \"Image\" and \"Video\" to set the content mode of the media selector. If \"Image\" is selected, ensure that all options provided are image files in the following formats: JPEG, GIF, PNG, APNG, SVG, BMP, ICO. Similarly, if \"Video\" is selected, ensure that all options are direct links to video files in the following formats: MP4, MOV, WMV, FLV, AVI, MKV. Please note that YouTube links are not supported for video options."
      contentMode: "Хэвлэл мэдээллийн хэрэгслийн сонгогчийн агуулгын хэв маягийг тогтоохын тулд \"Image\" болон \"Video\" хоёрын аль нэгийг сонго. Хэрэв \"Зураг\" гэж сонгосон бол өгөгдсөн бүх хувилбарууд нь дараах форматаар зургийн файлууд болохыг анхаарна уу: JPEG, GIF, PNG, APNG, SVG, BMP, ICO. Үүнтэй адилаар \"Video\" нь сонгогдвол бүх сонголт нь дараах форматаар видео файлуудын шууд холбоосууд болох MP4, MOV, WMV, FLV, AVI, MKV гэсэн форматаар байгаа эсэхийг баталгаажуулаарай. YouTube-ийн холбоосууд видео хувилбараар дэмжигдээгүйг анхаарна уу."
    },
    text: {
      // [Auto-translated] "This setting only resizes the input field and doesn't affect the width of the question box. To limit the accepted input length, go to \"Validation\" → \"Maximum character limit\"."
      size: "Энэ тохиргоо нь зөвхөн оролт талбарын хэмжээг өөрчилдөг бөгөөд асуултын хайрцгийн өргөнд нөлөөлөхгүй. Хүлээн зөвшөөрөгдсөн оролтын уртыг хязгаарлахын тулд \"Validation\" → \"Maximum character limit\" руу орно."
    },
    comment: {
      // [Auto-translated] "Sets the number of displayed lines in the input field. If the input takes up more lines, the scroll bar will appear."
      rows: "Оролт талбарт харагдах мөрүүдийн тоог тохируулна. Хэрвээ оролт илүү олон мөр эзэлбэл гүйлгэх бар гарч ирнэ."
    },
    // survey templates
    survey: {
      // "Select if you want to prevent respondents from filling out your survey."
      readOnly: "Хэрэв та хариулагчдыг таны судалгааг бөглөхөд саад болохыг хүсвэл сонго.",
      // "Sets the location of the progress bar. The \"Auto\" value displays the progress bar above or below the survey header."
      progressBarLocation: "Явцын барын байршлыг тогтооно. \"Auto\" value нь судалгааны гарчгийн дээр эсвэл доод тал дахь явцын барыг харуулна."
    },
    matrixdropdowncolumn: {
      // "A column ID that is not visible to respondents."
      name: "Хариулагчдад харагдахгүй байгаа баганын ID.",
      // "When enabled for a column, a respondent is required to provide a unique response for each question within this column."
      isUnique: "Баганыг авах боломжтой бол асуултад хариулагч нь энэ баганан доторх асуулт бүрд өвөрмөц хариулт өгөх шаардлагатай.",
      // "Sets the number of displayed lines in the input field. If the input takes up more lines, the scroll bar will appear."
      rows: "Оролтын талбар дахь харуулсан мөрүүдийн тоог тогтооно. Хэрэв оролт нь илүү олон мөртэй бол хуйлмал тавиур гарч ирнэ.",
      // "Use the magic wand icon to set a conditional rule that determines column visibility."
      visibleIf: "Ид шидийн wand icon-ийг ашиглан баганын харагдах байдлыг тодорхойлох нөхцөлтэй дүрмийг тогтоо.",
      // [Auto-translated] "Use the magic wand icon to set a conditional rule that disables the read-only mode for the column."
      enableIf: "Шидэт wand зургыг ашиглан баганын зөвхөн унших хэв маягийг хаах нөхцөлтэй дүрмийг тогтоо.",
      // "Use the magic wand icon to set a conditional rule that prevents survey submission unless at least one nested question has an answer."
      requiredIf: "Наад зах нь нэг үүрээ засах асуулт хариулт байхгүй л бол судалгаа явуулахаас сэргийлдэг нөхцөлийн дүрмийг тогтоохын тулд шидэт туузны зургыг ашигла.",
      // "When selected, creates an individual column for each choice option."
      showInMultipleColumns: "Сонгогдсон тохиолдолд сонголт бүрд зориулж багана үүсгэнэ.",
      // [Auto-translated] "Arranges choice options in a multi-column layout. When set to 0, the options are displayed in a single line. When set to -1, the actual value is inherited from the \"Nested column count\" property of the parent matrix."
      colCount: "Сонголтын хувилбаруудыг олон баганатай загвараар байрлуулна. 0 болговол сонголтууд нэг мөр хэлбэрээр харагдана. -1 болговол бодит үнэ нь эцэг матрицын \"Nested column count\" шинж чанараас өвлөгдэнэ."
    },
    slider: {
      // "The lowest number that users can select."
      min: "Хэрэглэгчдийн сонгож болох хамгийн бага тоо.",
      // "The highest number that users can select."
      max: "Хэрэглэгчдийн сонгож болох хамгийн өндөр тоо.",
      // "The interval between selectable scale values. For example, a step of 5 will allow users to select 0, 5, 10, etc."
      step: "Сонгож болох масштабын хоорондох интервал. Жишээ нь, 5-ын алхам нь хэрэглэгчдэд 0, 5, 10 гэх мэтийг сонгох боломжийг олгоно.",
      // "The minimum distance between the slider thumbs a user can set."
      minRangeLength: "Хэрэглэгчийн тохируулж болох слайдерын эрхий хурууны хоорондох хамгийн бага зай.",
      // "The maximum distance between the slider thumbs a user can set."
      maxRangeLength: "Хэрэглэгчийн тохируулж болох слайдер эрхий хурууны хоорондох зай.",
      // "Specifies how many scale labels to generate. A value of -1 means the number is calculated automatically based on the Min value and Max value."
      labelCount: "Хэдэн хэмжээний шошго үүсгэхийг тодорхойлно. -1 гэдэг нь тоо нь Min value болон Max value дээр үндэслэн автоматаар тооцогдоно гэсэн үг.",
      // "Use `{0}` as a placeholder for the actual value."
      labelFormat: "Бодит үнэ цэнийг '{0}' болгон ашигла.",
      // "Allows you to define custom labels at specific values and optionally assign corresponding text to them (e.g., 0 = \"Poor\", 100 = \"Excellent\")."
      customLabels: "Тодорхой хэмжээгээр тусгай шошго тодорхойлох болон тэдгээрт тохирох текстийг томилох боломжийг олгодог (жишээ нь, 0 = \"Муу\", 100 = \"Маш сайн\").",
      // "Use `{0}` as a placeholder for the actual value."
      tooltipFormat: "Бодит үнэ цэнийг '{0}' болгон ашигла.",
      // "Allows users to move one thumb past the other."
      allowSwap: "Хэрэглэгчдэд нэг эрхий хуруугаа нөгөөгийнхөө хажуугаар өнгөрөх боломжийг олгоно.",
      // [Auto-translated] "Displays a button that clears the selected slider value and sets it to undefined."
      allowClear: "Сонгосон слайдерын утгыг цэвэрлэж undefined болгох товчлуурыг харуулна.",
      // "Defines the slider's minimum value dynamically using an expression. Supports basic calculations (e.g, `{q1_id} + {q2_id}`), Boolean logic (e.g., `{age} > 60`), and functions like `iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, and more."
      minValueExpression: "Слайдерын хамгийн бага үнэ цэнийг илэрхийлэл ашиглан динамик байдлаар тодорхойлно. Үндсэн тооцоолол (жишээ нь, '{q1_id} + {q2_id}'), Boolean logic (жишээ нь, '{age} > 60'), мөн 'iif()', 'today()', 'age()', 'min()', 'max()', 'avg()' зэрэг функц��удыг дэмждэг.",
      // "Defines the slider's maximum value dynamically using an expression. Supports basic calculations (e.g, `{q1_id} + {q2_id}`), Boolean logic (e.g., `{age} > 60`), and functions like `iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, and more."
      maxValueExpression: "Слайдерын хамгийн их үнэ цэнийг илэрхийлэл ашиглан динамик байдлаар тодорхойлно. Үндсэн тооцоолол (жишээ нь, '{q1_id} + {q2_id}'), Boolean logic (жишээ нь, '{age} > 60'), мөн 'iif()', 'today()', 'age()', 'min()', 'max()', 'avg()' зэрэг функцуудыг дэмждэг."
    },
    // [Auto-translated] "Makes this choice exclusive. When selected by a user, it will automatically deselect all other options in the question."
    isExclusive: "Энэ сонголтыг онцгой болгодог. Хэрэглэгч сонговол асуултын бусад бүх сонголтыг автоматаар хасна.",
    matrixcolumn: {
      // [Auto-translated] "Makes checkboxes in this column exclusive. When selected by a user, they will automatically deselect all other checkboxes in the same row."
      isExclusive: "Энэ багананд байгаа чекбоксуудыг онцгой болгосон. Хэрэглэгч сонговол ижил мөрөн дэх бусад бүх тэмдэглэгээг автоматаар хасна."
    },
    // [Auto-translated] "Select if uppercase and lowercase letters in the regular expression must be treated as equivalent."
    caseInsensitive: "Тогтмол илэрхийлэлд байгаа uppercase болон lowercase үсгийг эн тэнцүү гэж үзэх ёстой эсэхийг сонгоно уу.",
    // "Choose from: \"Static\" - sets a fixed width; \"Responsive\" - makes the survey occupy the full width of the screen; \"Auto\" - applies either of the two depending on the question types used."
    widthMode: "Сонгоно уу: \"Статик\" - тогтмол өргөнийг тогтоох; \"Responsive\" - судалгааг дэлгэцийн бүрэн өргөнийг эзэлдэг болгодог; \"Авто\" - ашигласан асуултын төрлөөс хамааран аль нэгийг нь хэрэглэнэ.",
    // "Assign a unique cookie value for your survey. The cookie will be set in a respondent's browser upon survey completion to prevent repetitive survey submissions."
    cookieName: "Хэрэглэгч нэг судалгааг хоёр удаа бөглөхөөс Күүки сэргийлнэ.",
    // [Auto-translated] "Paste an image link (no size limits) or click the folder icon to browse a file from your computer (up to 64KB)."
    logo: "Зургийн холбоосыг (хэмжээ хязгаар байхгүй) эсвэл фолдерын icon дарж компьютерээсээ файлыг (64KB хүртэл) харна уу.",
    // [Auto-translated] "Sets a logo width in CSS units (px, %, in, pt, etc.)."
    logoWidth: "CSS нэгж (px, %, in, pt, гэх мэт) дээр логоны өргөнийг тогтооно.",
    // [Auto-translated] "Sets a logo height in CSS units (px, %, in, pt, etc.)."
    logoHeight: "CSS нэгж (px, %, in, pt г.м) дээр логоны өндрийг тогтооно.",
    // "Choose from: \"None\" - image maintains its original size; \"Contain\" - image is resized to fit while maintaining its aspect ratio; \"Cover\" - image fills the entire box while maintaining its aspect ratio; \"Fill\" - image is stretched to fill the box without maintaining its aspect ratio."
    logoFit: "Сонгоно уу: \"None\" - зураг анхны хэмжээгээ хадгалдаг; \"Агуулах\" - дүрсийг тал харьцаагаа хадгалахын зэрэгцээ тохируулахын тулд дахин тохируулдаг; \"Cover\" - дүрс нь тал харьцаагаа хадгалахын зэрэгцээ хайрцгийг бүхэлд нь дүүргэдэг; \"Fill\" - дүрс нь тал харьцаагаа хадгалахгүйгээр хайрцгийг дүүргэхийн тулд сунаж тогтсон.",
    // [Auto-translated] "Select if you want the survey to auto-advance to the next page once a respondent has answered all questions on the current page. This feature won't apply if the last question on the page is open-ended or allows multiple answers."
    autoAdvanceEnabled: "Оролцогч одоогийн хуудсан дээрх бүх асуултад хариулсны дараа судалгааг дараагийн хуудас руу автоматаар шилжүүлэхийг хүсч байгаа эсэхээ сонго. Хуудасны хамгийн сүүлийн асуулт нээлттэй эсвэл олон хариулт өгөх боломж олгодог бол энэ онцлог хэрэгжихгүй.",
    // [Auto-translated] "Select if you want the survey to complete automatically after a respondent answers all questions."
    autoAdvanceAllowComplete: "Асуултад хариулсан хүн бүх асуултанд хариулсны дараа судалгааг автоматаар дуусгахыг хүсвэл сонго.",
    // [Auto-translated] "Sets the visibility of navigation buttons on a page."
    showNavigationButtons: "Хуудас дээрх навигацийн товчлууруудын харагдах байдлыг тохируулна.",
    // [Auto-translated] "Sets the location of navigation buttons on a page."
    navigationButtonsLocation: "Хуудас дээрх навигацийн товчлууруудын байрлалыг тогтооно.",
    // [Auto-translated] "Enable the preview page with all or answered questions only."
    showPreviewBeforeComplete: "Зөвхөн бүх асуултаар эсвэл хариулт бүхий урьдчилан харах хуудсыг боломжтой болго.",
    // "Applies to all questions within the survey. This setting can be overridden by title alignment rules at lower levels: panel, page, or question. A lower-level setting will override those on a higher level."
    questionTitleLocation: "Судалгааны бүх асуултад хамаарна. Энэ тохиргоог доод түвшний нэрийн зохицуулах дүрмээр давамгайлах боломжтой: panel, хуудас, эсвэл асуулт. Доод түвшний тохиргоо нь илүү өндөр түвшинд байгаа хүмүүсийг хүчингүй болгоно.",
    // [Auto-translated] "A symbol or a sequence of symbols indicating that an answer is required."
    requiredMark: "Хариу шаардлагатайг заасан бэлгэдэл буюу бэлгэ тэмдгийн дараалал.",
    // [Auto-translated] "Enter a number or letter with which you want to start numbering."
    questionStartIndex: "Дугаарлахыг хүссэн дугаар эсвэл захидлаа оруул.",
    // "Sets the location of an error message in relation to the question with invalid input. Choose between: \"Top\" - an error text is placed at the top of the question box; \"Bottom\" - an error text is placed at the bottom of the question box."
    questionErrorLocation: "Асуулттай холбоотой алдааны мессежийн байршлыг хүчингүй оруулсан байдлаар тогтооно. Аль нэгийг сонгоно уу: \"Топ\" - асуултын хайрцагны дээд хэсэгт алдаа текст байрлуулсан байна; \"Bottom\" - асуултын хайрцагны доод хэсэгт алдаа текст байрлуулна.",
    // [Auto-translated] "Select if you want the first input field on each page ready for text entry."
    autoFocusFirstQuestion: "Текст оруулахад бэлэн болсон хуудас бүр дээрх эхний оролтын талбарыг хүсвэл сонгоно уу.",
    // "Keeps the original order of questions or randomizes them. The effect of this setting is only visible in the Preview tab."
    questionOrder: "Асуултуудын анхны дарааллыг хадгалах эсвэл санамсаргүйгээр авч явдаг. Энэ тохиргооны үр нөлөө нь зөвхөн Preview таб-д харагдана.",
    // [Auto-translated] "For text entry questions only."
    maxTextLength: "Зөвхөн текст оруулах асуултуудад зориулна.",
    // [Auto-translated] "For question comments only."
    maxCommentLength: "Асуулт хариултын хувьд зөвхөн.",
    // [Auto-translated] "Sets the number of displayed lines in text areas for question comments. If the input takes up more lines, the scroll bar appears."
    commentAreaRows: "Асуултын тайлбар бичвэрийн хэсэгт харагдах мөрийн тоог тогтооно. Хэрвээ оролт илүү олон мөр эзэлбэл гүйлгэх бар гарч ирнэ.",
    // [Auto-translated] "Select if you want question comments and Long Text questions to auto-grow in height based on the entered text length."
    autoGrowComment: "Асуулт хариулт болон Урт Текст асуултыг орсон текст урт дээр үндэслэн өндрөөс автоматаар өсгөхийг хүсвэл сонгоно уу.",
    // [Auto-translated] "For question comments and Long Text questions only."
    allowResizeComment: "Асуулт хариулт болон Урт текстийн асуултуудад зөвхөн.",
    // [Auto-translated] "Custom variables serve as intermediate or auxiliary variables used in form calculations. They take respondent inputs as source values. Each custom variable has a unique name and an expression it's based on."
    calculatedValues: "Үйлчилгээний хувьсагчид нь форм тооцоололд хэрэглэгддэг дундын буюу туслах хувьсагчид болж үйлчилдэг. Тэд хариулагчийн оруулсан хувь нэмрийг эх сурвалжийн үнэт зүйлс гэж үздэг. Custom хувьсагч бүр өвөрмөц нэртэй, дээр нь суурилсан илэрхийлэлтэй байдаг.",
    // [Auto-translated] "Select if you wish the calculated value of the expression to be saved along with survey results."
    includeIntoResult: "Тухайн илэрхийллийн тооцоолсон үнэ цэнийг судалгааны үр дүнгийн хамт хадгалахыг хүсвэл сонгоорой.",
    // "A trigger is an event or condition that is based on an expression. Once the expression is evaluated to \"true\", a trigger sets off an action. Such an action can optionally have a target question it affects."
    triggers: "Триггер гэдэг нь илэрхийлэлд тулгуурласан үйл явдал буюу нөхцөл байдлыг хэлж байгаа юм. Илэрхийлэлийг \"үнэн\" гэж үнэлсний дараа триггер үйлдэл гаргадаг. Ийм үйлдэл нь үүнд нөлөөлдөг байны асуултыг сонголтоор тавьж болно.",
    // [Auto-translated] "Choose whether or not to clear values for questions hidden by conditional logic and when to do it."
    clearInvisibleValues: "Нөхцөл байдлын логикоор нуусан асуултуудын үнэ цэнийг тодорхой болгох уу, хэзээ хийх үү гэдгийг сонго.",
    // "Choose from: \"On lost focus\" - the value is updated when the input field loses focus; \"While typing\" - the value is updated in real-time, as users are typing."
    textUpdateMode: "Сонгоно уу: \"Алдагдсан фокус дээр\" - оролтын талбар анхаарлаа алдсан үед үнэ цэнэ нь шинэчлэгддэг; \"Цахимаар бичих\" - хэрэглэгчид бичихийн хэрээр үнэ цэнэ нь бодит цаг хугацаанд шинэчлэгддэг.",
    // [Auto-translated] "The left value serves as a column ID used in conditional rules, the right value is displayed to respondents."
    columns: "Зүүн үнэ цэнэ нь нөхцөлийн дүрэмд хэрэглэгддэг баганын ID болж үйлчилдэг бөгөөд зөв үнэ цэнийг хариулагчдад үзүүлдэг.",
    // "The left value serves as a row ID used in conditional rules, the right value is displayed to respondents."
    rows: "Зүүн үнэ цэнэ нь нөхцөлийн дүрэмд хэрэглэгддэг мөрийн ID болж үйлчилдэг, зөв үнэ цэнийг хариулагчдад үзүүлдэг.",
    // [Auto-translated] "Accepts CSS values (px, %, in, pt, etc.)."
    columnMinWidth: "CSS-ийн үнэт зүйлсийг (px, %, in, pt г.м) хүлээн зөвшөөрдөг.",
    // [Auto-translated] "Accepts CSS values (px, %, in, pt, etc.)."
    rowTitleWidth: "CSS-ийн үнэт зүйлсийг (px, %, in, pt г.м) хүлээн зөвшөөрдөг.",
    // "Visible only if at least one column displays total values set with \"Aggregation method\" or \"Total value expression\"."
    totalText: "Хамгийн багадаа нэг багана Нэмэх төрлийн эвсэл нэмэх үйлдэлтэй үед л харагдах боломжтой.",
    // "Sets the location of an error message in relation to a cell with invalid input. The \"Inherit\" option applies the setting from the \"Error message alignment\" property."
    cellErrorLocation: "Хүчингүй оруулсан эстэй холбоотой алдааны мессежийн байршлыг тогтооно. \"Өв залгамж\" сонголт нь \"Error message alignment\" өмчийн тохиргоог хэрэгжүүлдэг.",
    // "Sets the location of error messages for questions nested in detail sections. The \"Inherit\" option applies the setting from the \"Error message alignment\" property."
    detailErrorLocation: "Нарийвчилсан хэсгүүдэд байрласан асуултуудын алдааны мессежүүдийн байршлыг тохируулна. \"Inherit\" сонголт нь \"Error message alignment\" шинж чанарын тохиргоог хэрэглэнэ.",
    // "When the \"Prevent duplicate responses\" property is enabled, a respondent attempting to submit a duplicate entry will receive the following error message."
    keyDuplicationError: "\"Хуулбарласан хариу арга хэмжээ авахаас урьдчилан сэргийлье\" өмчийг боломжтой болгоход хуулбарлан оруулахыг оролдсон хариулагч дараах алдааны мэдээг хүлээн авна.",
    // [Auto-translated] "Allows you to calculate total values based on an expression. The expression can include basic calculations (`{q1_id} + {q2_id}`), Boolean expressions (`{age} > 60`) and functions ('iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, etc.)."
    totalExpression: "Илэрхийллийн үндсэн дээр нийт үнэт зүйлсийг тооцох боломжийг танд олгож байна. Илэрхийлэл нь үндсэн тооцоо ('{q1_id} + {q2_id}'), Бөүлийн илэрхийллүүд ('{нас} > 60') функцууд ('iif()', 'өнөөдөр()', 'мин()', 'мин()', 'max()', 'avg()', г.м.",
    // "Reference a column ID to require a user to provide a unique response for each question within the specified column."
    keyName: "Хэрэв өгөгдсөн багана адил утгатай бол санал асуулга \"Давтагдсан утга\" гэсэн алдааг харуулна.",
    // "Type a subtitle."
    description: "Дэд гарчиг бичнэ.",
    // [Auto-translated] "Choose a language to begin creating your survey. To add a translation, switch to a new language and translate the original text here or in the Translations tab."
    locale: "Судалгаагаа хийж эхлэх хэл сонго. Орчуулга нэмэхийн тулд шинэ хэл рүү шилжиж, эх бичвэрийг энд эсвэл Translations tab-д орчуулна.",
    // "Sets the location of a detail section in relation to a row. Choose from: \"None\" - no detail section is added; \"Under the row\" - a detail section is placed under each row of the matrix; \"Under the row, display one detail section only\" - a detail section is displayed under a single row only, the remaining sections are collapsed."
    detailPanelMode: "Нарийвчилсан хэсгийн байршлыг дараалалтай холбон тогтооно. Сонголтоос: \"Үгүй\" - ямар ч өргөтгөл нэмэгдсэнгүй; \"Мөрийн доор\" - матрицын мөр бүрийн доор эгнээний өргөтгөл байрлуулна; \"Мөрийн доор зөвхөн нэг эгнээний өргөтгөлийг үзүүл\" - зөвхөн нэг эгнээний дор өргөтгөл үзүүлдэг, үлдсэн эгнээний өргөтгөлүүд нь нурдаг.",
    // "Choose from: \"None\" - image maintains its original size; \"Contain\" - image is resized to fit while maintaining its aspect ratio; \"Cover\" - image fills the entire box while maintaining its aspect ratio; \"Fill\" - image is stretched to fill the box without maintaining its aspect ratio."
    imageFit: "Сонгоно уу: \"None\" - зураг анхны хэмжээгээ хадгалдаг; \"Агуулах\" - дүрсийг тал харьцаагаа хадгалахын зэрэгцээ тохируулахын тулд дахин тохируулдаг; \"Cover\" - дүрс нь тал харьцаагаа хадгалахын зэрэгцээ хайрцгийг бүхэлд нь дүүргэдэг; \"Fill\" - дүрс нь тал харьцаагаа хадгалахгүйгээр хайрцгийг дүүргэхийн тулд сунаж тогтсон.",
    // "The \"Inherit\" option applies a survey-level setting (\"Disabled\" by default)."
    autoGrow: "Өгөгдлийг оруулж байгаа үед оролтын талбайн өндрийг аажмаар нэмэгдүүлдэг. \"Input талбарын өндрийг (in lines)\" тохиргоог давхардна.",
    // [Auto-translated] "The \"Inherit\" option applies a survey-level setting (\"Enabled\" by default)."
    allowResize: "\"Inherit\" сонголт нь судалгааны түвшинд тохируулгыг хэрэглэдэг (\"Enabled\" default).",
    // "A time interval in seconds after which the survey auto-advances to the \"Thank You\" page. When set to 0, counts the time spent on the survey."
    timeLimit: "Цаг хугацааны интервал секундын дотор. Үүний дараа судалгаа автоматаар \"Thank You\" хуудас руу орж байна.",
    // [Auto-translated] "A time interval in seconds after which the survey auto-advances to the next page. Hides the \"Previous\" navigation button. When set to 0, counts the time spent on the current page."
    timeLimitPerPage: "Секундын хугацааны дараа судалгаа автоматаар дараагийн хуудас руу шилждэг. \"Өмнөх\" навигацийн товчийг нууна. 0 болговол тухайн хуудсанд зарцуулсан хугацааг тооцно.",
    // [Auto-translated] "Enable this option to trigger validation when a user focuses on an empty input field and then leaves it without making any changes."
    validateVisitedEmptyFields: "Хэрэглэгч хоосон оролтын талбар дээр төвлөрч, дараа нь ямар нэгэн өөрчлөлт хийхгүйгээр орхих үед баталгаажуулалтыг өдөөх боломжийг энэ боломжийг олго.",
    page: {
      // "A page ID that is not visible to respondents."
      name: "Оролцогчдод харагдахгүй хуудасны ID.",
      // "Type a page subtitle."
      description: "Хуудасны дэд гарчиг гэж бич.",
      // "A caption displayed on a navigation button in the progress bar or table of contents (TOC). If you leave this field empty, the navigation button will use the page title or page name. To enable the progress bar or TOC, go to \"Survey\" → \"Navigation\"."
      navigationTitle: "Progress bar эсвэл table of contents (TOC) дахь навигацийн товчлуур дээр харагдах тайлбар. Энэ талбарыг хоосон үлдээвэл навигацийн товчлуур хуудасны гарчиг эсвэл хуудасны нэрийг ашиглана. Progress bar эсвэл TOC-г идэвхжүүлэхийн тулд \"Survey\" → \"Navigation\" руу орно.",
      // "A time interval in seconds after which the survey auto-advances to the next page. Hides the \"Previous\" navigation button. When set to 0, counts the time spent on the current page."
      timeLimit: "Судалгааны автоматаар дараагийн хуудас руу урагшлах секундын дотор цаг хугацаа.",
      // "Use the magic wand icon to set a conditional rule that determines page visibility."
      visibleIf: "Илбийн wand icon-ийг ашиглан хуудасны харагдах байдлыг тодорхойлох нөхцөлтэй дүрэм тогтооно.",
      // [Auto-translated] "Use the magic wand icon to set a conditional rule that disables the read-only mode for the page."
      enableIf: "Зөвхөн хуудсанд зориулсан унших хэв маягийг хаах нөхцөлтэй дүрмийг тогтоохын тулд шидэт wand зургыг ашигла.",
      // "Use the magic wand icon to set a conditional rule that prevents survey submission unless at least one nested question has an answer."
      requiredIf: "Наад зах нь нэг үүрээ засах асуулт хариулт байхгүй л бол судалгаа явуулахаас сэргийлдэг нөхцөлийн дүрмийг тогтоохын тулд шидэт туузны зургыг ашигла.",
      // "Applies to all questions within this page. When set to \"Hidden\", it also hides question descriptions. If you want to override this setting, define title alignment rules for individual questions or panels. The \"Inherit\" option applies the survey-level setting (\"Top\" by default)."
      questionTitleLocation: "Энэ хуудсан дахь бүх асуултад хамаарна. Хэрэв та энэ тохиргоог хүчингүй болгохыг хүсвэл хувь хүний асуулт эсвэл панелуудын нэрийн зохицуулах дүрмүүдийг тодорхойл. \"Өв залгамж\" сонголт нь судалгааны түвшний тохиргоог (\"Top\" by default) хэрэгжүүлдэг.",
      // [Auto-translated] "Sets consistent width for question titles when they are aligned to the left of their question boxes. Accepts CSS values (px, %, in, pt, etc.)."
      questionTitleWidth: "Асуултын хайрцгуудынхаа зүүн талд эгнэн зогсож байх үед асуултын нэрний тогтмол өргөнийг тогтоо. CSS-ийн үнэт зүйлсийг (px, %, in, pt г.м) хүлээн зөвшөөрдөг.",
      // "Sets the location of an error message in relation to the question with invalid input. Choose between: \"Top\" - an error text is placed at the top of the question box; \"Bottom\" - an error text is placed at the bottom of the question box. The \"Inherit\" option applies the survey-level setting (\"Top\" by default)."
      questionErrorLocation: "Асуулттай холбоотой алдааны мессежийн байршлыг хүчингүй оруулсан байдлаар тогтооно. Аль нэгийг сонгоно уу: \"Топ\" - асуултын хайрцагны дээд хэсэгт алдаа текст байрлуулсан байна; \"Bottom\" - асуултын хайрцагны доод хэсэгт алдаа текст байрлуулна. \"Өв залгамж\" сонголт нь судалгааны түвшний тохиргоог (\"Top\" by default) хэрэгжүүлдэг.",
      // "Keeps the original order of questions or randomizes them. The \"Inherit\" option applies the survey-level setting (\"Original\" by default). The effect of this setting is only visible in the Preview tab."
      questionOrder: "Асуултуудын анхны дарааллыг хадгалах эсвэл санамсаргүйгээр авч явдаг. \"Өв залгамж\" сонголт нь судалгааны түвшний тохиргоог (\"Оригинал\" дефолтоор) хэрэгжүүлдэг. Энэ тохиргооны үр нөлөө нь зөвхөн Preview таб-д харагдана.",
      // "Sets the visibility of navigation buttons on the page. The \"Inherit\" option applies the survey-level setting, which defaults to \"Visible\"."
      showNavigationButtons: "Хуудсан дээр навигацийн товчны харагдах байдлыг тогтоо. \"Өв залгамжлах\" хувилбар нь \"Үзэгдэх\" гэсэн сонголт бүхий судалгааны түвшний тохиргоог хэрэгжүүлдэг.",
      // [Auto-translated] "This table lets you configure each grid column on the page. It automatically sets the width percentage for each column based on the maximum number of elements in a row. To customize the grid layout, manually adjust these values and define the title width for all questions in each column."
      gridLayoutColumns: "Энэ хүснэгт нь хуудас дээрх grid багана бүрийг тохируулах боломжийг олгодог. Энэ нь нэг мөр дэх элементүүдийн хамгийн их тооноос шалтгаалан багана бүрийн өргөнийн хувийг автоматаар тогтоодог. Хүснэгтийн байрлалыг тохируулахын тулд эдгээр үнэ цэнийг гараар тохируулж, багана бүр дэх бүх асуултын гарчгийн өргөнийг тодорхойл."
    },
    // [Auto-translated] "Sets the location of a timer on a page."
    timerLocation: "Хуудас дээрх цаг хэмжигчийн байрлалыг тогтооно.",
    // "Choose from: \"Locked\" - users cannot expand or collapse entries; \"Collapse all\" - all entries start in a collapsed state; \"Expand all\" - all entries start in an expanded state; \"First expanded\" - only the first entry is initially expanded. Applies if \"Entry display mode\" is set to \"List\" and the \"Entry title pattern\" property is specified."
    panelsState: "Сонгоно уу: \"Locked\" - хэрэглэгчид панелуудыг өргөтгөх, нураах боломжгүй; \"Бүх нуралт\" - бүх панел нурсан байдлаас эхэлнэ; \"Бүх хүрээг өргөтгөнө\" - бүх панелууд өргөтгөсөн байдлаас эхэлнэ; \"First expanded\" - зөвхөн эхний панел нь эхэндээ өргөжсөн.",
    // [Auto-translated] "Enter a shared property name within the array of objects that contains the image or video file URLs you want to display in the choice list."
    imageLinkName: "Сонгосон жагсаалтанд харуулахыг хүссэн зураг эсвэл видео файл URL-уудыг агуулсан олон тооны эд зүйлсийн дотор хуваалцсан өмчийн нэрийг оруулна уу.",
    // "The left value serves as an item ID used in conditional rules, the right value is displayed to respondents."
    choices: "Зүүн үнэ цэнэ нь нөхцөлийн дүрэмд хэрэглэгддэг зүйл ID, зөв үнэ цэнийг хариулагчдад үзүүлдэг.",
    // [Auto-translated] "Type a user-friendly title to display."
    title: "Хэрэглэгчдэд тохиромжтой нэр бичиж харуулах.",
    // [Auto-translated] "Ensures that users won't complete the survey until files are uploaded."
    waitForUpload: "Файлуудыг татаж авах хүртэл хэрэглэгчид судалгааг хийж дуусгахгүй байхыг анхаарна.",
    // [Auto-translated] "Accepts CSS values (px, %, in, pt, etc.)."
    minWidth: "CSS-ийн үнэт зүйлсийг (px, %, in, pt г.м) хүлээн зөвшөөрдөг.",
    // [Auto-translated] "Accepts CSS values (px, %, in, pt, etc.)."
    maxWidth: "CSS-ийн үнэт зүйлсийг (px, %, in, pt г.м) хүлээн зөвшөөрдөг.",
    // "Accepts CSS values (px, %, in, pt, etc.)."
    width: "CSS-ийн үнэт зүйлсийг (px, %, in, pt г.м) хүлээн зөвшөөрдөг.",
    // "A join identifier is a custom key that you can assign to several questions to link them together and sync their values. These values will be merged into a single array or object and stored in survey results using the key as the property name."
    valueName: "Хэрэв энэ талбарын утгыг оруулаагүй бол хариулт нь автоматаар Нэр талбарт хадгална.",
    // [Auto-translated] "A value displayed in HTML questions and in the dynamic titles and descriptions of survey elements when the question value is empty."
    defaultDisplayValue: "HTML асуулт болон асуултын үнэ хоосон үед судалгааны элементүүдийн динамик гарчиг болон тайлбарт харагдах утга.",
    // [Auto-translated] "In single- and multiple-selection question types, each choice option has an ID and display value. When selected, this setting shows a display value instead of an ID value in HTML questions and dynamic titles and descriptions of survey elements."
    useDisplayValuesInDynamicTexts: "Ганц болон олон сонголттой асуултын төрлүүдэд сонголт бүр ID болон харуулах үнэ цэнэтэй байдаг. Энэ тохиргоо нь сонгогдсон тохиолдолд HTML асуулт болон динамик гарчиг, судалгааны элементүүдийн тодорхойлолтод ID үнэ цэнийн оронд харуулах үнэ цэнийг харуулдаг.",
    // "Choose whether or not to clear question values hidden by conditional logic and when to do it. The \"Inherit\" option applies the survey-level setting (\"Upon survey completion\" by default)."
    clearIfInvisible: "Нөхцөл байдлын логикоор нуусан үнэт зүйлсийг тодорхой болгох уу, хэзээ хийх вэ гэдгийг сонго. \"Өв залгамж\" сонголт нь судалгааны түвшний тохиргоог (\"Upon survey completion\" -ийг дефолтоор) хэрэгжүүлдэг.",
    // "Choose from: \"All\" - copies all choice options from the selected question; \"Selected\" - dynamically copies only selected choice options; \"Unselected\" - dynamically copies only unselected choice options. The \"None\" and \"Other\" options are copied by default if enabled in the source question."
    choicesFromQuestionMode: "Сонгоно уу: \"Бүгд\" - сонгосон асуултаас сонголт хийх бүх сонголтыг хуулбарласан; \"Сонгосон\" - динамикаар зөвхөн сонгосон сонголтын хувилбаруудыг хуулбарласан; \"Сонгогдоогүй\" - динамикаар зөвхөн сонгогдоогүй сонголтыг хувилдаг. \"None\" болон \"Бусад\" сонголтууд нь эх сурвалжийн асуулгад боломжтой бол default-ээр хуулагддаг.",
    // [Auto-translated] "In single- and multiple-selection question types, each choice option has an ID and display value. This setting specifies which matrix column or panel question should provide the IDs."
    choiceValuesFromQuestion: "Нэг болон олон сонголттой асуултын төрлүүдэд сонголт бүр ID болон display value-тэй байдаг. Энэ тохиргоо нь ямар матрицын багана эсвэл панелийн асуулт ID-г өгөхийг тодорхойлдог.",
    // [Auto-translated] "In single- and multiple-selection question types, each choice option has an ID and display value. This setting specifies which matrix column or panel question should provide the display texts."
    choiceTextsFromQuestion: "Нэг болон олон сонголттой асуултын төрлүүдэд сонголт бүр ID болон display value-тэй байдаг. Энэ тохиргоо нь ямар матрицын багана эсвэл панелийн асуулт үзүүлбэрийн текстийг хангахыг тодорхойлдог.",
    // [Auto-translated] "Select to let respondents add their own choices if the desired option isn't available in the dropdown. Custom choices will only be stored temporarily for the duration of the current browser session."
    allowCustomChoices: "Хэрэв хүссэн хувилбар нь доош хаягдалд байхгүй бол оролцогчдод өөрсдийн сонголтыг нэмж оруулах боломжийг олго. Custom сонголтууд нь тухайн браузерын хуралдааны туршид зөвхөн түр хугацаагаар хадгалагдах болно.",
    // [Auto-translated] "When selected, users can include additional input in a separate comment box."
    showOtherItem: "Сонгогдсон тохиолдолд хэрэглэгчид тусад нь тайлбарын хайрцагт нэмэлт оруулах боломжтой.",
    // "Displays each special choice option (\"None\", \"Other\", \"Select All\") on a new line, even when using a multiple-column layout."
    separateSpecialChoices: "Тусгай сонголт бүрийг (\"None\", \"Other\", \"Select All\") шинэ мөр дээр, бүр олон баганатай загварыг ашиглахдаа ч үзүүлдэг.",
    // [Auto-translated] "Specify the location within the service dataset where the target array of objects is located. Leave empty if the URL already points to the array."
    path: "Зорилтот олон тооны объект байрладаг үйлчилгээний мэдээллийн сан доторх байршлыг тодорхойл. URL аль хэдийн багц руу зааж байгаа бол хоосон орхи.",
    choicesbyurl: {
      // "Enter a uniform property name within the array of objects whose value will be stored as a response in survey results."
      valueName: " "
    },
    // [Auto-translated] "Enter a uniform property name within the array of objects that contains the values you want to display in the choice list."
    titleName: "Сонголтын жагсаалтад харуулахыг хүссэн үнэт зүйлсээ агуулсан олон тооны эд зүйлсийн дотор дүрэмт өмчийн нэрийг оруулна уу.",
    // [Auto-translated] "Select to allow the service to return an empty response or array."
    allowEmptyResponse: "Хоосон хариу эсвэл багцыг үйлчлэлд буцааж өгөхийг сонго.",
    // [Auto-translated] "Use the magic wand icon to set a conditional rule that determines the visibility of all choice options."
    choicesVisibleIf: "Бүх сонголтын харагдах байдлыг тодорхойлох нөхцөлтэй дүрмийг тогтоохын тулд шидэт wand зургыг ашиглана уу.",
    // [Auto-translated] "The left value serves as an item ID used in conditional rules, the right value is displayed to respondents."
    rateValues: "Зүүн үнэ цэнэ нь нөхцөлийн дүрэмд хэрэглэгддэг зүйл ID, зөв үнэ цэнийг хариулагчдад үзүүлдэг.",
    rating: {
      // "\"Auto\" selects between the \"Buttons\" and \"Dropdown\" modes based on the available width. When the width is insufficient to display buttons, the question displays a dropdown."
      displayMode: "\"Auto\" нь боломжит өргөн дээр суурилсан \"Buttons\" болон \"Dropdown\" загваруудын хооронд сонголт хийнэ. Өргөн нь товчлууруудыг харуулахад хангалтгүй үед асуулт нь дусал дуслыг харуулдаг."
    },
    // [Auto-translated] "Allows you to connect questions that produce results in different formats. When such questions are linked together using a join identifier, this shared property stores selected question values."
    valuePropertyName: "Өөр өөр форматаар үр дүн гаргадаг асуултуудыг холбох боломжийг танд олгож байна. Ийм асуултуудыг join identifier ашиглан холбох үед энэ хуваалцсан өмч хөрөнгийн дэлгүүрүүд нь сонгосон асуултын үнэ цэнийг хадгалдаг.",
    // [Auto-translated] "Select if you want to update the drop-down menu contents to match the search query that a user is typing in the input field."
    searchEnabled: "Хэрэглэгчийн оролтын талбарт бичиж байгаа хайлтын query-тэй тохируулахын тулд дусал цэсний агуулгыг шинэчлэхийг хүсвэл сонгоно уу.",
    // [Auto-translated] "A value to save in survey results when respondents give a positive answer."
    valueTrue: "Асуултад хариулсан хүмүүс эерэг хариулт өгөхөд судалгааны үр дүнг хадгалах нь үнэ цэнэтэй.",
    // [Auto-translated] "A value to save in survey results when respondents give a negative answer."
    valueFalse: "Судалгаанд оролцогчдын сөрөг хариулт өгөхөд судалгааны үр дүнг хадгалах үнэ цэнэ.",
    // [Auto-translated] "It's not recommended that you disable this option as it overrides the Preview image and makes it hard for a user to understand whether the files have been uploaded."
    showPreview: "Энэ сонголтыг унтраахыг зөвлөхгүй. Учир нь энэ нь Preview зургийг давамгайлж, файлуудыг оруулсан эсэхийг ойлгоход хэрэглэгчдэд хэцүү болгодог.",
    // [Auto-translated] "Triggers a prompt asking to confirm the file deletion."
    needConfirmRemoveFile: "Файлын устгалыг батлахыг хүссэн өдөөлтийг өдөөж байна.",
    // [Auto-translated] "Enable to rank only selected choices. Users will drag selected items from the choice list to order them within the ranking area."
    selectToRankEnabled: "Зөвхөн сонгосон сонголтуудыг зэрэгцүүлэх боломжийг олгоно. Хэрэглэгчид сонгосон зүйлсийг сонгосон жагсаалтаас чирч, зэрэглэлийн бүс дотор тушаана.",
    // [Auto-translated] "Enter a list of choices that will be suggested to the respondent during input."
    dataList: "Санал болгох сонголтуудын жагсаалтыг оруулах үед хариулагчид санал болгох болно.",
    // [Auto-translated] "The setting only resizes the input fields and doesn't affect the width of the question box."
    inputSize: "Тохиргоо нь зөвхөн оролтын талбаруудыг дахин тохируулдаг бөгөөд асуултын хайрцагны өргөнд нөлөөлдөггүй.",
    // [Auto-translated] "Sets consistent width for all item labels. Accepts CSS values (px, %, in, pt, etc.)."
    itemTitleWidth: "Бүх барааны шошгоны өргөнийг тогтвортой болгоно. CSS-ийн үнэ цэнийг (px, %, in, pt гэх мэт) хүлээн авна.",
    // "Select how to align input value within the field. The default setting \"Auto\" aligns the input value to the right if currency or numeric masking is applied and to the left if not."
    inputTextAlignment: "Талбар доторх оролтын үнэ цэнийг хэрхэн уялдуулахыг сонго. \"Авто\" гэсэн дефолт тохиргоо нь валют эсвэл тоон маск хэрэглэх бол оролтын үнэ цэнийг баруун тийш, хэрэв үгүй бол зүүн тийш нь уялдуулна.",
    // [Auto-translated] "Serves as a substitute when the image cannot be displayed on a user's device and for accessibility purposes."
    altText: "Хэрэглэгчийн төхөөрөмж дээр болон хүртээмжийн зорилгоор дүрсийг харуулах боломжгүй үед орлуулагчаар үйлчилнэ.",
    // "Defines the color of the selected emoji when the Rating icon type is set to \"Smileys\". Choose between: \"Default\" - the selected emoji appears in default survey color; \"Scale\" - the selected emoji inherits color from the rating scale."
    rateColorMode: "Rating icon төрлийн \"Smileys\" гэж тогтооход сонгосон эможигийн өнгийг тодорхойлно. Аль нэгийг нь сонгоно уу: \"Default\" - сонгосон эможи нь стандарт судалгааны өнгөөр гарч ирдэг; \"Scale\" - сонгосон эможи нь үнэлгээний хэмжүүрээс өнгийг өвлөн авдаг.",
    expression: {
      // "An expression ID that is not visible to respondents."
      name: "Хариулагчдад харагдахгүй илэрхийлэл ID.",
      // "Type an expression subtitle."
      description: "Өгүүлбэрийн дэд гарчиг бичнэ.",
      // "An expression can include basic calculations (`{q1_id} + {q2_id}`), conditions (`{age} > 60`), and functions ('iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, etc.)."
      expression: "Илэрхийлэл нь үндсэн тооцоо ('{q1_id} + {q2_id}'), нөхцөл ('{age} > 60'' болон функцууд ('iif()', 'өнөөдөр()', 'мин()', 'мин()', 'max()', 'avg()', г.м."
    },
    // "Select to store the \"Other\" option value as a separate property in survey results."
    storeOthersAsComment: "\"Бусад\" сонголтын үнэ цэнийг судалгааны үр дүнд тусад нь өмч болгон хадгалахыг сонго.",
    // "Use {0} as a placeholder for the actual value."
    format: "{0} нь тухайн утгын жишээ болно.",
    // "Refer to the [accept](https://www.w3schools.com/tags/att_input_accept.asp) attribute description for more information."
    acceptedTypes: "Атрибутын талаар нэмэлт мэдээллийг үзэхийн тулд [accept](https://www.w3schools.com/tags/att_input_accept.asp)-лүү хандана уу.",
    // "Arranges choice options in a multi-column layout. When set to 0, the options are displayed in a single line. Applies only to columns with \"Cell input type\" set to Radio Button Group or Checkboxes."
    columnColCount: "Зөвхөн олон сонголттой эсвэл Radiogroup -д ашиглана.",
    // "Select the data type that the user's browser can retrieve. This data is sourced either from past values entered by the user or from pre-configured values if any have been saved by the user for autocompletion."
    autocomplete: "Аттрибутын талаар дэлгэрэнгүй мэдээллийг [autocomplete](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete)-ээс авна уу .",
    // "Applies when \"File source type\" is \"Local file\" or when camera is unavailable"
    filePlaceholder: "\"Эх сурвалжийн төрөл\" нь \"Орон нутгийн файлууд\" эсвэл камер байхгүй үед хамаарна",
    // "Applies when \"File source type\" is \"Camera\"."
    photoPlaceholder: "\"Эх сурвалжийн төрөл\" \"Камер\" байхад хамаарна.",
    // "Applies when \"File source type\" is \"Local file or camera\"."
    fileOrPhotoPlaceholder: "\"Эх сурвалжийн төрөл\" нь \"Орон нутгийн файлууд буюу камер\" байхад хамаарна.",
    // "Arranges choice options in a multi-column layout. When set to 0, the options are displayed in a single line."
    colCount: "Сонголт хийх сонголтуудыг олон баганатай загвараар зохион байгуулна. 0-д тавихад сонголтуудыг нэг мөр харуулдаг.",
    masksettings: {
      // "Select if you want to store the question value with an applied mask in survey results."
      saveMaskedValue: "Асуултын үнэ цэнийг судалгааны үр дүнд хэрэгжүүлсэн багаар хадгалахыг хүсэж байгаа эсэхээ сонго."
    },
    patternmask: {
      // "The pattern can contain string literals and the following placeholders: `9` - for a digit; `a` - for an upper- or lower-case letter; `#` - for a digit or an upper- or lower-case letter. Use backslash `\\` to escape a character."
      pattern: "Загвар нь уянгын шууд болон дараах байрлагчийг агуулж болно: '9' - тоон хувьд; 'a' - дээд буюу доод талын үсгийн хувьд; '#' - цифр эсвэл дээд, эсвэл доод кейс үсгийн хувьд. Дүрээс зугтахын тулд backslash '\\' ашигла."
    },
    datetimemask: {
      // "The pattern can contain separator characters and the following placeholders:<br>`m` - Month number.<br>`mm` - Month number, with leading zero for single-digit values.<br>`d` - Day of the month.<br>`dd` - Day of the month, with leading zero for single-digit values.<br>`yy` - The last two digits of the year.<br>`yyyy` - Four-digit year.<br>`H` - Hours in 24-hour format.<br>`HH` - Hours in 24-hour format, with leading zero for single-digit values.<br>`h` - Hours in 12-hour format.<br>`hh` - Hours in 12-hour format, with leading zero for single-digit values.<br>`MM` - Minutes.<br>`ss` - Seconds.<br>`TT` - 12-hour clock period in upper case (AM/PM).<br>`tt` - 12-hour clock period in lower case (am/pm)."
      pattern: "Загвар нь тусгаарлагч үсэг болон дараах байрлагчуудыг агуулж болно:<br>'m' - Сарын дугаар.<br>'мм' - Сарын дугаар, ганц цифрээр үнэ цэнэтэй тэргүүлэх нөлөө бүхий. <br>''д'' - Сарын нэг өдөр. <br>'dd' - Ганц цифрээр үнэ цэнэд тэргүүлэх нөлөө бүхий сарын өдөр. <br>'yy' - Жилийн сүүлийн хоёр цифр. <br>''yyyy'' - Дөрвөн цифр бүхий жил. <br>'H' - 24 цагийн форматаар цаг. <br>'HH' - 24 цагийн форматаар хэдэн цаг, ганц цифрээр үнэ цэнэтэй тэргүүлэх нөлөө. <br>'h' - 12 цагийн форматаар цаг. <br>'hh' - 12 цагийн форматаар хэдэн цаг, ганц цифрээр үнэ цэнэд тэргүүлэх нөлөөгүй. <br>'ММ' - Минут. <br>'ss' - Секунд. <br>'ТТ' - Дээд тохиолдолд 12 цагийн цаг (АМ/ЦАГ). <br>'tt' - доод тохиолдолд 12 цагийн цаг (ам/цаг) цаг."
    },
    numericmask: {
      // "A symbol used to separate the fractional part from the integer part of a displayed number."
      decimalSeparator: "Жижиг хэсгийг үзүүлсэн дугаарын интежер хэсгээс салгахад ашигладаг бэлгэдэл.",
      // "A symbol used to separate the digits of a large number into groups of three."
      thousandsSeparator: "Том тооны тоонуудыг 3 бүлэг болгон салгахад хэрэглэгддэг бэлгэдэл.",
      // "Limits how many digits to retain after the decimal point for a displayed number."
      precision: "Үзүүлсэн дугаарын хувьд decimal цэгийн дараа хэдэн цифрийг хадгалахыг хязгаарлана."
    },
    currencymask: {
      // "One or several symbols to be displayed before the value."
      prefix: "Үнэ цэнийн өмнө үзүүлэх нэг эсвэл хэд хэдэн бэлгэдлүүдийг.",
      // "One or several symbols to be displayed after the value."
      suffix: "Үнэ цэнийн дараа үзүүлэх нэг эсвэл хэд хэдэн бэлгэдлүүдийг."
    },
    theme: {
      // "This setting applies only to questions outside of a panel."
      isPanelless: "Энэ тохиргоо нь зөвхөн панелын гаднах асуултуудад хамаарна.",
      // "Sets a supplementary color that highlights key survey elements."
      primaryColor: "Судалгааны гол элементүүдийг тодотгох нэмэлт өнгө тогтооно.",
      // "Adjusts the transparency of panels and question boxes relative to the survey background."
      panelBackgroundTransparency: "Судалгааны нөхцөл байдлыг харьцуулан панел, асуултын хайрцгуудын ил тод байдлыг тохируулна.",
      // "Adjusts the transparency of input elements relative to the survey background."
      questionBackgroundTransparency: "Судалгааны нөхцөлтэй харьцуулахад оруулах элементүүдийн ил тод байдлыг тохируулна.",
      // "Sets the corner radius for all rectangular elements. Enable the Advanced Mode if you want to set individual corner radius values for input elements or panels and question boxes."
      cornerRadius: "Бүх тэгш өнцөгт элементүүдэд булангийн радиусыг тогтооно. Оролтын элементүүд эсвэл панел, асуултын хайрцгуудад зориулсан хувь хүний булангийн радиус үнэт зүйлсийг тогтоохыг хүсвэл Advanced Mode-г боломжтой болго.",
      // "Sets the main background color of the survey."
      "--sjs-general-backcolor-dim": "Судалгааны үндсэн нөхцөл байдлын өнгийг тогтооно."
    },
    header: {
      // "The \"Same as container\" option auto-adjusts the header content area width to fit into the HTML element the survey is placed in."
      inheritWidthFrom: "\"As as container\" сонголт автоматаар судалгаа хийсэн HTML элементэд тохируулахын тулд толгойн агуулгын хэсгийн өргөнийг тохируулдаг.",
      // [Auto-translated] "The width of the header area that contains the survey title and description, measured in pixels."
      textAreaWidth: "Пикселээр хэмжсэн судалгааны нэр, тодорхойлолт бүхий толгойн хэсгийн өргөн.",
      // [Auto-translated] "When enabled, the top of the survey overlays the bottom of the header."
      overlapEnabled: "Идэвхжүүлбэл судалгааны дээд хэсэг нь header-ийн доод хэсгийг давхарладаг.",
      // [Auto-translated] "When set to 0, the height is calculated automatically to accommodate the header's content."
      mobileHeight: "0 гэж тохируулбал өндөрийг гарчгийн агуулгад тохируулахын тулд автоматаар тооцоолдог."
    },
    // "The \"Same as container\" option auto-adjusts the progress bar area width to fit into the HTML element the survey is placed in."
    progressBarInheritWidthFrom: "\"As as container\" сонголт автоматаар судалгаанд байрлуулсан HTML элементэд тохируулахын тулд progress bar area өргөнийг тохируулдаг.",
    // [Auto-translated] "Used when the 'Survey layout' is set to 'Single input field per page'. In this layout, the matrix is split so that each input field appears on a separate page. Use the {rowIndex} placeholder to insert auto numbering, {rowTitle} or {rowName} to reference the row's title or ID, and {row.columnid} to include the value of a specific matrix column."
    singleInputTitleTemplate: "'Survey layout' нь 'Single input field per page' болгож тохируулсан үед ашиглана. Энэ загварт матриц хуваагдан оролт талбар бүр тусдаа хуудас дээр харагдана. Автомат дугаарлалт оруулахын тулд {rowIndex} placeholder, мөрийн гарчиг эсвэл ID-г эш татахын тулд {rowTitle} эсвэл {rowName}, тодорхой матрицын баганын үнэ цэнийг оруулахын тулд {row.columnid} ашигла."
  },
  // Properties
  p: {
    title: {
      // "title"
      name: "Гарчиг",
      // "Leave it empty, if it is the same as 'Name'"
      title: "'Нэр'-тэй адилхан бол хоосон орхих."
    },
    // "Allow multiple selection"
    multiSelect: "Олон сонголтыг зөвшөөрөх",
    // "Show image and video captions"
    showLabel: "Зургийн тайлбар харуулах",
    // [Auto-translated] "Swap the order of Yes and No"
    swapOrder: "Тийм, Үгүй гэсэн дарааллыг соль",
    // "Value"
    value: "Утга",
    // "Tab alignment"
    tabAlign: "Хавтас байрлуулах",
    // [Auto-translated] "File source type"
    sourceType: "Файлын эх сурвалжийн төрөл",
    // [Auto-translated] "Fit to container"
    fitToContainer: "Сав баглаа боодолд тохирно",
    // [Auto-translated] "Set value expression"
    setValueExpression: "Эрхэмлэх чанарыг илэрхийлэхийг тогтоо",
    // "Description"
    description: "Тайлбар", // Auto-generated string
    // "Logo fit"
    logoFit: "Лого",
    // "Pages"
    pages: "Хуудаснууд", // Auto-generated string
    // "Questions"
    questions: "Асуултууд", // Auto-generated string
    // "Triggers"
    triggers: "Схемүүд",
    // "Custom variables"
    calculatedValues: "Тооцоолсон утгууд",
    // "Survey id"
    surveyId: "Санал асуулгын ID", // Auto-generated string
    // "Survey post id"
    surveyPostId: "Санал асуулгын нийтлэлийн ID", // Auto-generated string
    // "Survey show data saving"
    surveyShowDataSaving: "Санал асуулга өгөгдөл хадгалж байхад харуулах", // Auto-generated string
    // "Question description alignment"
    questionDescriptionLocation: "Асуултын тайлбарын байршил",
    // "Progress bar type"
    progressBarType: "Явцын мөрний төрөл", // Auto-generated string
    // "Show table of contents (TOC)"
    showTOC: "TOC харуулах",
    // "TOC alignment"
    tocLocation: "Toc байршил",
    // "Question title pattern"
    questionTitlePattern: "Асуултын гарчгийн загвар", // Auto-generated string
    // "Survey width mode"
    widthMode: "Өргөн горим",
    // "Show brand info"
    showBrandInfo: "Брэнд мэдээллийг харуулах", // Auto-generated string
    // "Use display values in dynamic texts"
    useDisplayValuesInDynamicTexts: "Динамик текстэд харуулах утгыг хэрэглэх",
    // "Visible if"
    visibleIf: "Харагдана хэрэв", // Auto-generated string
    // "Default value expression"
    defaultValueExpression: "Үндсэн утгын илэрхийлэл",
    // "Required if"
    requiredIf: "Заавал бөглөх хэрэв", // Auto-generated string
    // [Auto-translated] "Reset value if"
    resetValueIf: "Хэрэв үнэ цэнээ дахин тогтоох",
    // [Auto-translated] "Set value if"
    setValueIf: "Хэрэв үнэ цэнийг тогтоо",
    // "Validation rules"
    validators: "Батлагч",
    // "Bindings"
    bindings: "Холбогч", // Auto-generated string
    // "Render as"
    renderAs: "руу хөрвүүлэх", // Auto-generated string
    // "Attach original items"
    attachData: "Эх элементүүдийг хавсаргах", // Auto-generated string
    // "Choices"
    choices: "Сонголтууд",
    // "Choices by url"
    choicesByUrl: "Url сонолтууд", // Auto-generated string
    // "Currency"
    currency: "Мөнгөн тэмдэгт", // Auto-generated string
    // "Cell hint"
    cellHint: "Жишээ утга", // Auto-generated string
    // "Total maximum fraction digits"
    totalMaximumFractionDigits: "Нийт хамгийн их бутархай тоонууд", // Auto-generated string
    // "Total minimum fraction digits"
    totalMinimumFractionDigits: "Нийт хамгийн бага бутархай тоонууд", // Auto-generated string
    // "Columns"
    columns: "Баганууд", // Auto-generated string
    // "Detail elements"
    detailElements: "Дэлгэрэнгүй элементүүд", // Auto-generated string
    // "Allow adaptive actions"
    allowAdaptiveActions: "Дасан зохицох үйлдлийг зөвшөөрөх", // Auto-generated string
    // "Default row value"
    defaultRowValue: "Үндсэн мөрийн утга", // Auto-generated string
    // [Auto-translated] "Auto-expand new row details"
    detailPanelShowOnAdding: "Шинэ мөрийн нарийн ширийн зүйлсийг автоматаар тэлэх",
    // "Choices lazy load enabled"
    choicesLazyLoadEnabled: "Choices lazy load enabled", // Auto-generated string
    // "Choices lazy load page size"
    choicesLazyLoadPageSize: "Choices lazy load page size", // Auto-generated string
    // "Input field component"
    inputFieldComponent: "Оролтын утгын бүрэлдэхүүн", // Auto-generated string
    // "Item component"
    itemComponent: "Элементийн бүрэлдэхүүн", // Auto-generated string
    // "Min"
    min: "Хамгийн бага", // Auto-generated string
    // "Max"
    max: "Хамгийн их", // Auto-generated string
    // "Min value expression"
    minValueExpression: "Хамгийн бага утгын илэрхийлэл", // Auto-generated string
    // "Max value expression"
    maxValueExpression: "Хамгийн их утгын илэрхийлэл", // Auto-generated string
    // "Step"
    step: "Алхам", // Auto-generated string
    // "Items for auto-suggest"
    dataList: "Өгөгдлийн жагсаалт",
    // "Input field width (in characters)"
    inputSize: "Элементийн хэмжээ",
    // [Auto-translated] "Item label width"
    itemTitleWidth: "Элементийн шошгоны өргөнийг",
    // [Auto-translated] "Input value alignment"
    inputTextAlignment: "Оролтын үнэ цэнийн зохицуулалт",
    // "Elements"
    elements: "Элементүүд", // Auto-generated string
    // "Content"
    content: "Контент", // Auto-generated string
    // "Navigation title"
    navigationTitle: "Чиглүүлэгчийн гарчиг", // Auto-generated string
    // "Navigation description"
    navigationDescription: "Чиглүүлэгчийн тайлбар", // Auto-generated string
    // "Long tap"
    longTap: "Long tap", // Auto-generated string
    // "Expand input field dynamically"
    autoGrow: "Автоматаар нэмэх",
    // [Auto-translated] "Enable resize handle"
    allowResize: "Дахин хэмжээ өөрчлөх хандлагыг идэвхжүүлэх",
    // "Accept carriage return"
    acceptCarriageReturn: "Accept carriage return", // Auto-generated string
    // "Display mode"
    displayMode: "Дэлгэцийн горим",
    // "Rate type"
    rateType: "Дамжуулах хурд", // Auto-generated string
    // "Label"
    label: "Шошго", // Auto-generated string
    // "Content mode"
    contentMode: "Контентийн горим",
    // "Image and thumbnail fit"
    imageFit: "Зураг багтаах",
    // "Alt text"
    altText: "Тайлбар",
    // "Height"
    height: "Өндөр", // Auto-generated string
    // [Auto-translated] "Height on smartphones"
    mobileHeight: "Ухаалаг гар утасны өндөр",
    // "Pen color"
    penColor: "Балны өнгө", // Auto-generated string
    // "Background color"
    backgroundColor: "Дэвсгэр өнгө",
    // "Template elements"
    templateElements: "Загварын элементүүд", // Auto-generated string
    // "Operator"
    operator: "Operator", // Auto-generated string
    // "Is variable"
    isVariable: "Хувьсах чадвартай", // Auto-generated string
    // "Run expression"
    runExpression: "илэрхийлэлг ажиллуулах", // Auto-generated string
    // "Show caption"
    showCaption: "Тайлбар харуулах", // Auto-generated string
    // "Icon name"
    iconName: "Дүрсийн нэр", // Auto-generated string
    // "Icon size"
    iconSize: "Дүрсийн хэмжээ", // Auto-generated string
    // [Auto-translated] "Precision"
    precision: "Нарийвчлал", // Auto-generated string
    // [Auto-translated] "Matrix drag handle area"
    matrixDragHandleArea: "Матриц чирэх бариулын талбай", // Auto-generated string
    // [Auto-translated] "Background image"
    backgroundImage: "Ар талын зураг",
    // [Auto-translated] "Background image fit"
    backgroundImageFit: "Ар талын зураг тохирно", // Auto-generated string
    // [Auto-translated] "Background image attachment"
    backgroundImageAttachment: "Ар талын зургийн хавсралт", // Auto-generated string
    // [Auto-translated] "Background opacity"
    backgroundOpacity: "Ар талын харанхуй байдал", // Auto-generated string
    // [Auto-translated] "Allow selective ranking"
    selectToRankEnabled: "Сонгон шалгаруулах боломж олгох",
    // [Auto-translated] "Ranking area alignment"
    selectToRankAreasLayout: "Рейтингийн бүсийн тохиролцоо",
    // [Auto-translated] "Text to show if all options are selected"
    selectToRankEmptyRankedAreaText: "Бүх сонголтыг сонгосон эсэхийг харуулах текст",
    // [Auto-translated] "Placeholder text for the ranking area"
    selectToRankEmptyUnrankedAreaText: "Хаягийн бүсэд байрлах газар эзэмшигчийн текст",
    // [Auto-translated] "Allow camera access"
    allowCameraAccess: "Камераар нэвтрэх боломж олгох", // Auto-generated string
    // [Auto-translated] "Rating icon color mode"
    scaleColorMode: "Үнэлгээний тэмдгийн өнгөний режим",
    // [Auto-translated] "Smileys color scheme"
    rateColorMode: "Смайликийн өнгийн схем",
    // [Auto-translated] "Copy display value"
    copyDisplayValue: "Copy display value", // Auto-generated string
    // [Auto-translated] "Column span"
    effectiveColSpan: "Баганын хугацаа",
    // [Auto-translated] "Progress bar area width"
    progressBarInheritWidthFrom: "Прогресс барын бүсийн өргөн",
    // [Auto-translated] "Theme name"
    themeName: "Сэдвийн нэр"
  },
  theme: {
    // "Advanced mode"
    advancedMode: "Дэвшилтэт хэв маяг",
    // "Page"
    pageTitle: "Хуудасны нэрийн фонт",
    // "Question box"
    questionTitle: "Асуулт нэрийн фонт",
    // "Input element"
    editorPanel: "Оролтын элемент",
    // [Auto-translated] "Lines"
    lines: "Шугам",
    // [Auto-translated] "Default"
    primaryDefaultColor: "Дефолт",
    // [Auto-translated] "Hover"
    primaryDarkColor: "Ховер",
    // [Auto-translated] "Selected"
    primaryLightColor: "Сонгосон",
    // [Auto-translated] "Background color"
    backgroundDimColor: "Ар талын өнгө",
    // "Corner radius"
    cornerRadius: "Булангийн радиус",
    // [Auto-translated] "Default background"
    backcolor: "Дефолт нөхцөл байдал",
    // [Auto-translated] "Hover background"
    hovercolor: "Hover-ийн гарал үүсэл",
    // [Auto-translated] "Border decoration"
    borderDecoration: "Хилийн чимэг",
    // [Auto-translated] "Font color"
    fontColor: "Фонтын өнгө",
    // [Auto-translated] "Background color"
    backgroundColor: "Ар талын өнгө",
    // [Auto-translated] "Default color"
    primaryForecolor: "Дефолт өнгө",
    // [Auto-translated] "Disabled color"
    primaryForecolorLight: "Хөгжлийн бэрхшээлтэй хүний өнгө",
    // [Auto-translated] "Font"
    font: "Фонт",
    // [Auto-translated] "Darker"
    borderDefault: "Илүү харанхуй",
    // [Auto-translated] "Lighter"
    borderLight: "Гэрэлтэй",
    // [Auto-translated] "Font family"
    fontFamily: "Фонтын гэр бүл",
    // [Auto-translated] "Regular"
    fontWeightRegular: "Тогтмол",
    // [Auto-translated] "Heavy"
    fontWeightHeavy: "Хүнд",
    // [Auto-translated] "Semi-bold"
    fontWeightSemiBold: "Хагас зоригтой",
    // [Auto-translated] "Bold"
    fontWeightBold: "Болд",
    // [Auto-translated] "Color"
    color: "Өнгө",
    // [Auto-translated] "Placeholder color"
    placeholderColor: "Газар эзэмшигчийн өнгө",
    // [Auto-translated] "Size"
    size: "Хэмжээ",
    // [Auto-translated] "Opacity"
    opacity: "Бүдүүлэг байдал",
    // [Auto-translated] "X"
    boxShadowX: "X",
    // [Auto-translated] "Y"
    boxShadowY: "Y",
    // [Auto-translated] "Add Shadow Effect"
    boxShadowAddRule: "Сүүдрийн эффект нэмэх",
    // [Auto-translated] "Blur"
    boxShadowBlur: "Блур",
    // [Auto-translated] "Spread"
    boxShadowSpread: "Тархалт",
    // [Auto-translated] "Drop"
    boxShadowDrop: "Дусал",
    // [Auto-translated] "Inner"
    boxShadowInner: "Дотоод",
    names: {
      // [Auto-translated] "Default"
      default: "Дефолт",
      // [Auto-translated] "Sharp"
      sharp: "Хурц",
      // [Auto-translated] "Borderless"
      borderless: "Хил хязгааргүй",
      // [Auto-translated] "Flat"
      flat: "Хавтгай",
      // [Auto-translated] "Plain"
      plain: "Энгийн",
      // [Auto-translated] "Double Border"
      doubleborder: "Хоёр хил",
      // [Auto-translated] "Layered"
      layered: "Давхарласан",
      // [Auto-translated] "Solid"
      solid: "Бат бөх",
      // [Auto-translated] "3D"
      threedimensional: ".3D",
      // [Auto-translated] "Contrast"
      contrast: "Эсрэг тэсрэг"
    },
    colors: {
      // [Auto-translated] "Teal"
      teal: "Цайл",
      // [Auto-translated] "Blue"
      blue: "Цэнхэр",
      // [Auto-translated] "Purple"
      purple: "Пүрвээ",
      // [Auto-translated] "Orchid"
      orchid: "Орхон",
      // [Auto-translated] "Tulip"
      tulip: "Тюлип",
      // [Auto-translated] "Brown"
      brown: "Браун",
      // [Auto-translated] "Green"
      green: "Ногоон",
      // [Auto-translated] "Gray"
      gray: "Саарал"
    }
  },
  creatortheme: {
    // [Auto-translated] "Surface background"
    "--sjs-special-background": "Гадаргуугийн фон",
    // [Auto-translated] "Primary"
    "--sjs-primary-background-500": "Хүүхдийн хэсэг",
    // [Auto-translated] "Secondary"
    "--sjs-secondary-background-500": "Хоёрдугаар зэргийн",
    // [Auto-translated] "Surface"
    surfaceScale: "Гадаргуу",
    // [Auto-translated] "UI elements"
    userInterfaceBaseUnit: "UI элементүүд",
    // [Auto-translated] "Font"
    fontScale: "Фонт",
    names: {
      // [Auto-translated] "Survey Creator 2020"
      sc2020: "Судалгаа зохион байгуулагч 2020",
      // [Auto-translated] "Light"
      "default-light": "Гэрэл",
      // [Auto-translated] "Dark"
      "default-dark": "Харанхуй",
      // [Auto-translated] "Contrast"
      "default-contrast": "Эсрэг тэсрэг байдал"
    }
  }
};

setupLocale({ localeCode: "mn", strings: mnStrings });