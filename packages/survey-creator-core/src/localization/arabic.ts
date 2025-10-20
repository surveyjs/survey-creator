import { setupLocale } from "survey-creator-core";

export var arStrings = {
  // survey templates
  survey: {
    // "Edit"
    edit: "تعديل",
    // "Watch and learn how to create surveys"
    externalHelpLink: "شاهد وتعلم كيف يتم إنشاء إستبيان",
    // "https://www.youtube.com/channel/UCH2ru9okIcooNZfpIbyq4qQ?view_as=subscriber"
    externalHelpLinkUrl: "https://www.youtube.com/channel/UCH2ru9okIcooNZfpIbyq4qQ?view_as=subscriber",
    // "Please drop a question here from the Toolbox."
    dropQuestion: "الرجاء إفلات السؤال هنا من صندوق الأدوات",
    // "Create a rule to customize the flow of the survey."
    addLogicItem: ".قم بإنشاء قاعدة لتخصيص تدفق الإستبيان",
    // "Copy"
    copy: "نسخ",
    // "Duplicate"
    duplicate: "نسخة طبق الأصل",
    // "Add to toolbox"
    addToToolbox: "إضافة إلى صندوق الأدوات",
    // "Delete Panel"
    deletePanel: "حذف لوحة",
    // "Delete Question"
    deleteQuestion: "حذف سؤال",
    // "Convert to"
    convertTo: "تحويل إلى",
    // "Drag element"
    drag: "إسحب العنصر"
  },
  // Creator tabs
  tabs: {
    // "Preview"
    preview: "تجربة الإستبيان",
    // "Themes"
    theme: "المواضيع",
    // "Translations"
    translation: "Translation",
    // "Designer"
    designer: "تصميم الإستبيان",
    // "JSON Editor"
    json: "JSON Editor",
    // "Logic"
    logic: "منطق الإستبيان"
  },
  // Question types
  qt: {
    // "Default"
    default: "الإفتراضي",
    // "Checkboxes"
    checkbox: "إختيار من متعدد",
    // "Long Text"
    comment: "تعليق",
    // "Image Picker"
    imagepicker: "إنتقاء الصور",
    // "Ranking"
    ranking: "تصنيف",
    // "Image"
    image: "صورة",
    // "Dropdown"
    dropdown: "قائمة منسدلة",
    // [Auto-translated] "Multi-Select Dropdown"
    tagbox: "قائمة منسدلة متعددة التحديد",
    // "File Upload"
    file: "ملف",
    // "HTML"
    html: "لغة ترميز النصوص HTML",
    // "Single-Select Matrix"
    matrix: "مصفوفة (إختيار واحد)",
    // "Multi-Select Matrix"
    matrixdropdown: "مصفوفة (إختيار متعدد)",
    // "Dynamic Matrix"
    matrixdynamic: "مصفوفة (صفوف ديناميكية)",
    // "Multiple Textboxes"
    multipletext: "مدخل متعدد",
    // "Panel"
    panel: "لوحة",
    // "Dynamic Panel"
    paneldynamic: "لوحة ديناميكية",
    // "Radio Button Group"
    radiogroup: "إختيار فردي",
    // "Rating Scale"
    rating: "تقييم",
    // [Auto-translated] "Slider"
    slider: "شريط التمرير",
    // "Single-Line Input"
    text: "مٌدخل فردي",
    // "Yes/No (Boolean)"
    boolean: "قيمة منطقية",
    // "Expression (read-only)"
    expression: "عملية حسابية (للقرائة فقط)",
    // "Signature"
    signaturepad: "لوحة توقيع",
    // "Button Group"
    buttongroup: "Button group"
  },
  toolboxCategories: {
    // "General"
    general: "قائمة العام",
    // "Choice Questions"
    choice: "أسئلة الاختيار",
    // "Text Input Questions"
    text: "أسئلة إدخال النص",
    // "Containers"
    containers: "حاويات",
    // "Matrix Questions"
    matrix: "أسئلة المصفوفة",
    // "Misc"
    misc: "متفرقات"
  },
  // Strings in SurveyJS Creator
  ed: {
    // "Default ({0})"
    defaultLocale: "إفتراضي ({0})",
    // "Survey"
    survey: "Survey1",
    // "Settings"
    settings: "Survey Settings",
    // "Open settings"
    settingsTooltip: "Open survey settings",
    // [Auto-translated] "Survey Settings"
    surveySettings: "إعدادات الاستطلاع",
    // [Auto-translated] "Survey settings"
    surveySettingsTooltip: "إعدادات الاستطلاع",
    // [Auto-translated] "Theme Settings"
    themeSettings: "إعدادات النسق",
    // [Auto-translated] "Theme settings"
    themeSettingsTooltip: "إعدادات السمة",
    // [Auto-translated] "Creator Settings"
    creatorSettingTitle: "إعدادات منشئي المحتوى",
    // "Show Panel"
    showPanel: "إظهار اللوحة",
    // "Hide Panel"
    hidePanel: "إخفاء اللوحة",
    // "Select previous"
    prevSelected: "Select previous",
    // "Select next"
    nextSelected: "Select next",
    // [Auto-translated] "Focus previous"
    prevFocus: "التركيز السابق",
    // [Auto-translated] "Focus next"
    nextFocus: "التركيز التالي",
    // "Survey"
    surveyTypeName: "الإستبيان",
    // "Page"
    pageTypeName: "الصفحة",
    // "Panel"
    panelTypeName: "اللوحة",
    // "Question"
    questionTypeName: "السؤال",
    // "Column"
    columnTypeName: "Column",
    // "Add New Page"
    addNewPage: "Add New Page",
    // "Scroll to the Right"
    moveRight: "Scroll to the Right",
    // "Scroll to the Left"
    moveLeft: "Scroll to the Left",
    // "Delete Page"
    deletePage: "Delete Page",
    // "Edit Page"
    editPage: "Edit Page",
    // "Edit"
    edit: "التعديل",
    // "page"
    newPageName: "الصفحة",
    // "question"
    newQuestionName: "السؤال",
    // "panel"
    newPanelName: "اللوحة",
    // "text"
    newTextItemName: "text",
    // [Auto-translated] "Default"
    defaultV2Theme: "افتراضي",
    // [Auto-translated] "Modern"
    modernTheme: "حديث",
    // [Auto-translated] "Default (legacy)"
    defaultTheme: "الافتراضي (القديم)",
    // "Preview Survey Again"
    testSurveyAgain: "Test Survey Again",
    // "Survey width: "
    testSurveyWidth: "Survey width: ",
    // "You had to navigate to"
    navigateToMsg: "You had to navigate to:",
    // "Save Survey"
    saveSurvey: "Save Survey",
    // "Save Survey"
    saveSurveyTooltip: "Save Survey",
    // [Auto-translated] "Save Theme"
    saveTheme: "حفظ السمة",
    // [Auto-translated] "Save Theme"
    saveThemeTooltip: "حفظ السمة",
    // "Hide errors"
    jsonHideErrors: "Hide errors",
    // "Show errors"
    jsonShowErrors: "Show errors",
    // "Undo"
    undo: "Undo",
    // "Redo"
    redo: "Redo",
    // "Undo last change"
    undoTooltip: "Undo last change",
    // "Redo the change"
    redoTooltip: "Redo the change",
    // [Auto-translated] "Expand"
    expandTooltip: "ستوسع",
    // [Auto-translated] "Collapse"
    collapseTooltip: "تقوض",
    // "Expand All"
    expandAllTooltip: "توسيع الكل",
    // "Collapse All"
    collapseAllTooltip: "طي الكل",
    // [Auto-translated] "Zoom In"
    zoomInTooltip: "تكبير",
    // [Auto-translated] "Zoom to 100%"
    zoom100Tooltip: "تكبير إلى 100٪",
    // [Auto-translated] "Zoom Out"
    zoomOutTooltip: "التصغير",
    // [Auto-translated] "Lock expand/collapse state for questions"
    lockQuestionsTooltip: "تأمين حالة التوسيع/الطي للأسئلة",
    // [Auto-translated] "Show more"
    showMoreChoices: "استعراض المزيد",
    // [Auto-translated] "Show less"
    showLessChoices: "عرض أقل",
    // "Copy"
    copy: "Copy",
    // "Cut"
    cut: "Cut",
    // "Paste"
    paste: "Paste",
    // "Copy selection to clipboard"
    copyTooltip: "Copy selection to clipboard",
    // "Cut selection to clipboard"
    cutTooltip: "Cut selection to clipboard",
    // "Paste from clipboard"
    pasteTooltip: "Paste from clipboard",
    // "Options"
    options: "Options",
    // "Generate Valid JSON"
    generateValidJSON: "Generate Valid JSON",
    // "Generate Readable JSON"
    generateReadableJSON: "Generate Readable JSON",
    // "Toolbox"
    toolbox: "Toolbox",
    // "Properties"
    "property-grid": "Properties",
    // [Auto-translated] "Search"
    toolboxSearch: "بحث",
    // [Auto-translated] "Type to search..."
    toolboxFilteredTextPlaceholder: "اكتب للبحث...",
    // [Auto-translated] "No results found"
    toolboxNoResultsFound: "لم يتم العثور على نتائج",
    // "Type to search..."
    propertyGridFilteredTextPlaceholder: "Type to search...",
    // [Auto-translated] "No results found"
    propertyGridNoResultsFound: "لم يتم العثور على نتائج",
    // [Auto-translated] "Start configuring your form"
    propertyGridPlaceholderTitle: "بدء تكوين النموذج الخاص بك",
    // [Auto-translated] "Click any category icon to explore survey settings. Additional settings will become available once you add a survey element to the design surface."
    propertyGridPlaceholderDescription: "انقر فوق أي رمز فئة لاستكشاف إعدادات الاستطلاع. ستتوفر إعدادات إضافية بمجرد إضافة عنصر استطلاع إلى سطح التصميم.",
    // "Please correct JSON."
    correctJSON: "Please correct JSON.",
    // "Survey Results "
    surveyResults: "Survey Results ",
    // "As Table"
    surveyResultsTable: "As Table",
    // "As JSON"
    surveyResultsJson: "As JSON",
    // "Question Title"
    resultsTitle: "Question Title",
    // "Question Name"
    resultsName: "Question Name",
    // "Answer Value"
    resultsValue: "Answer Value",
    // "Display Value"
    resultsDisplayValue: "Display Value",
    // "Modified"
    modified: "هناك تعديل جديد",
    // "Saving"
    saving: "يتم الآن حفظ التغييرات",
    // "Saved"
    saved: "تم الحفظ",
    // "Error"
    propertyEditorError: "خطأ:",
    // "Error! Editor content is not saved."
    saveError: "Error! Editor content is not saved.",
    // "Language Settings"
    translationPropertyGridTitle: "Language Settings",
    // [Auto-translated] "Theme Settings"
    themePropertyGridTitle: "إعدادات النسق",
    // [Auto-translated] "Add Language"
    addLanguageTooltip: "إضافة لغة",
    // "Languages"
    translationLanguages: "Languages",
    // [Auto-translated] "Are you certain you wish to delete all strings for this language?"
    translationDeleteLanguage: "هل أنت متأكد من أنك ترغب في حذف جميع السلاسل لهذه اللغة؟",
    // "Select language to translate"
    translationAddLanguage: "Select language to translate",
    // "All Strings"
    translationShowAllStrings: "Show all strings",
    // [Auto-translated] "Used Strings Only"
    translationShowUsedStringsOnly: "سلاسل مستعملة فقط",
    // "All Pages"
    translationShowAllPages: "Show all pages",
    // "No strings to translate. Please change the filter."
    translationNoStrings: "No strings to translate. Please, change the filter.",
    // "Export to CSV"
    translationExportToSCVButton: "Export to CSV",
    // "Import from CSV"
    translationImportFromSCVButton: "Import from CSV",
    // [Auto-translated] "Auto-translate All"
    translateUsigAI: "ترجمة تلقائية للكل",
    // [Auto-translated] "Translate from: "
    translateUsigAIFrom: "ترجمة من: ",
    // [Auto-translated] "Untranslated strings"
    translationDialogTitle: "النصوص غير المترجمة",
    // "Merge {0} with default locale"
    translationMergeLocaleWithDefault: "Merge {0} with default locale",
    // "Translation..."
    translationPlaceHolder: "Translation...",
    // [Auto-translated] "Source: "
    translationSource: "مصدر: ",
    // [Auto-translated] "Target: "
    translationTarget: "هدف: ",
    // [Auto-translated] "YouTube links are not supported."
    translationYouTubeNotSupported: "روابط يوتيوب غير مدعومة.",
    // [Auto-translated] "Export"
    themeExportButton: "تصدير",
    // [Auto-translated] "Import"
    themeImportButton: "استورد",
    // [Auto-translated] "Export"
    surveyJsonExportButton: "تصدير",
    // [Auto-translated] "Import"
    surveyJsonImportButton: "استورد",
    // [Auto-translated] "Copy to clipboard"
    surveyJsonCopyButton: "نسخ إلى الحافظة",
    // [Auto-translated] "Reset theme settings to default"
    themeResetButton: "إعادة تعيين إعدادات النسق إلى الوضع الافتراضي",
    // [Auto-translated] "Do you really want to reset the theme? All your customizations will be lost."
    themeResetConfirmation: "هل تريد حقا إعادة تعيين السمة؟ ستفقد جميع تخصيصاتك.",
    // [Auto-translated] "Yes, reset the theme"
    themeResetConfirmationOk: "نعم ، إعادة تعيين السمة",
    // "Bold"
    bold: "Bold",
    // "Italic"
    italic: "Italic",
    // "Underline"
    underline: "Underline",
    // "Add Question"
    addNewQuestion: "Add Question",
    // "Select page..."
    selectPage: "Select page...",
    // [Auto-translated] "Choices are copied from"
    carryForwardChoicesCopied: "يتم نسخ الاختيارات من",
    // [Auto-translated] "Choices are loaded from a web service."
    choicesLoadedFromWebText: "يتم تحميل الاختيارات من خدمة ويب.",
    // [Auto-translated] "Go to settings"
    choicesLoadedFromWebLinkText: "انتقل إلى الإعدادات",
    // [Auto-translated] "Preview of loaded choice options"
    choicesLoadedFromWebPreviewTitle: "معاينة خيارات الاختيار المحملة",
    // "HTML content will be here."
    htmlPlaceHolder: "محتوى HTML سيكون هنا",
    // "Drop a question from the toolbox here."
    panelPlaceHolder: "قم بإسقاط السؤال من صندوق الأدوات إلى هنا",
    // [Auto-translated] "The survey is empty. Drag an element from the toolbox or click the button below."
    surveyPlaceHolder: "الاستطلاع فارغ. اسحب عنصرا من صندوق الأدوات أو انقر فوق الزر أدناه.",
    // [Auto-translated] "The page is empty. Drag an element from the toolbox or click the button below."
    pagePlaceHolder: "الصفحة فارغة. اسحب عنصرا من صندوق الأدوات أو انقر فوق الزر أدناه.",
    // [Auto-translated] "Drag and drop an image here or click the button below and choose an image to upload"
    imagePlaceHolder: "قم بسحب وإسقاط صورة هنا أو انقر فوق الزر أدناه واختر صورة لتحميلها",
    // "Click the \"Add Question\" button below to start creating your form."
    surveyPlaceHolderMobile: "انقر فوق الزر \"إضافة سؤال\" أدناه لبدء إنشاء النموذج الخاص بك.",
    // [Auto-translated] "Your form is empty"
    surveyPlaceholderTitle: "النموذج فارغ",
    // [Auto-translated] "Your form is empty"
    surveyPlaceholderTitleMobile: "النموذج فارغ",
    // [Auto-translated] "Drag an element from the toolbox or click the button below."
    surveyPlaceholderDescription: "اسحب عنصرا من صندوق الأدوات أو انقر فوق الزر أدناه.",
    // [Auto-translated] "Drag an element from the toolbox or click the button below."
    surveyPlaceholderDescriptionMobile: "اسحب عنصرا من صندوق الأدوات أو انقر فوق الزر أدناه.",
    // [Auto-translated] "No preview"
    previewPlaceholderTitle: "لا معاينة",
    // [Auto-translated] "No preview"
    previewPlaceholderTitleMobile: "لا معاينة",
    // [Auto-translated] "The survey doesn't contain any visible elements."
    previewPlaceholderDescription: "لا يحتوي الاستطلاع على أي عناصر مرئية.",
    // [Auto-translated] "The survey doesn't contain any visible elements."
    previewPlaceholderDescriptionMobile: "لا يحتوي الاستطلاع على أي عناصر مرئية.",
    // [Auto-translated] "No strings to translate"
    translationsPlaceholderTitle: "لا توجد سلاسل للترجمة",
    // [Auto-translated] "No strings to translate"
    translationsPlaceholderTitleMobile: "لا توجد سلاسل للترجمة",
    // [Auto-translated] "Add elements to your form or change the strings filter in the toolbar."
    translationsPlaceholderDescription: "أضف عناصر إلى النموذج أو قم بتغيير عامل تصفية السلاسل في شريط الأدوات.",
    // [Auto-translated] "Add elements to your form or change the strings filter in the toolbar."
    translationsPlaceholderDescriptionMobile: "أضف عناصر إلى النموذج أو قم بتغيير عامل تصفية السلاسل في شريط الأدوات.",
    // "Click the \"Add Question\" button below to add a new element to the page."
    pagePlaceHolderMobile: "انقر فوق الزر \"إضافة سؤال\" أدناه لإضافة عنصر جديد إلى الصفحة.",
    // "Click the \"Add Question\" button below to add a new element to the panel."
    panelPlaceHolderMobile: "انقر فوق الزر \"إضافة سؤال\" أدناه لإضافة عنصر جديد إلى اللوحة.",
    // [Auto-translated] "Click the button below and choose an image to upload"
    imagePlaceHolderMobile: "انقر فوق الزر أدناه واختر صورة لتحميلها",
    // [Auto-translated] "Choose Image"
    imageChooseImage: "اختر صورة",
    // "Add {0}"
    addNewTypeQuestion: "Add {0}", // {0} is localizable question type
    // "[LOGO]"
    chooseLogoPlaceholder: "[الشعار]",
    // [Auto-translated] "Item "
    choices_Item: "بند ",
    // [Auto-translated] "Select a file"
    selectFile: "حدد ملفا",
    // [Auto-translated] "Remove the file"
    removeFile: "إزالة الملف",
    lg: {
      // [Auto-translated] "Add New Rule"
      addNewItem: "إضافة قاعدة جديدة",
      // "Create a rule to customize the flow of the survey."
      empty_tab: "قم بإنشاء إرتباط لتخصيص تدفق الإستبيان",
      // [Auto-translated] "No logical rules"
      logicPlaceholderTitle: "لا توجد قواعد منطقية",
      // [Auto-translated] "No logical rules"
      logicPlaceholderTitleMobile: "لا توجد قواعد منطقية",
      // [Auto-translated] "Create a rule to customize the flow of the survey."
      logicPlaceholderDescription: "إنشاء قاعدة لتخصيص تدفق الاستطلاع.",
      // [Auto-translated] "Create a rule to customize the flow of the survey."
      logicPlaceholderDescriptionMobile: "إنشاء قاعدة لتخصيص تدفق الاستطلاع.",
      // "Show/hide page"
      page_visibilityName: "إظهار (إخفاء) صفحة",
      // [Auto-translated] "Enable/disable page"
      page_enableName: "تمكين/تعطيل الصفحة",
      // [Auto-translated] "Make page required"
      page_requireName: "اجعل الصفحة مطلوبة",
      // "Show/hide panel"
      panel_visibilityName: "إظهار (إخفاء) لوحة",
      // "Enable/disable panel"
      panel_enableName: "تفعيل (تعطيل) لوحة",
      // [Auto-translated] "Make panel required"
      panel_requireName: "اجعل اللوحة مطلوبة",
      // "Show/hide question"
      question_visibilityName: "إظهار (إخفاء) سؤال",
      // "Enable/disable question"
      question_enableName: "تفعيل (تعطيل) سؤال",
      // "Make question required"
      question_requireName: "جعل السؤال إلزامي",
      // [Auto-translated] "Reset question value"
      question_resetValueName: "إعادة تعيين قيمة السؤال",
      // [Auto-translated] "Set question value"
      question_setValueName: "تعيين قيمة السؤال",
      // [Auto-translated] "Show/hide column"
      column_visibilityName: "إظهار/إخفاء العمود",
      // [Auto-translated] "Enable/disable column"
      column_enableName: "تمكين/تعطيل العمود",
      // [Auto-translated] "Make column required"
      column_requireName: "جعل العمود مطلوبا",
      // [Auto-translated] "Reset column value"
      column_resetValueName: "إعادة تعيين قيمة العمود",
      // [Auto-translated] "Set column value"
      column_setValueName: "تعيين قيمة العمود",
      // "Complete survey"
      trigger_completeName: "أنهي الإستبيان",
      // "Set answer"
      trigger_setvalueName: "تحديد قيمة السؤال",
      // "Copy answer"
      trigger_copyvalueName: "نسخ قيمة السؤال",
      // "Skip to question"
      trigger_skipName: "التخطي إلى السؤال",
      // "Run expression"
      trigger_runExpressionName: "تشغيل تعبير رياضي مخصص",
      // "Set \"Thank You\" page markup"
      completedHtmlOnConditionName: "نص رسالة شكر مخصصة",
      // "Make the page visible when the logical expression evaluates to true. Otherwise, keep the page invisible."
      page_visibilityDescription: "Make the page visible when the logic expression returns true. Otherwise keep it invisible.",
      // "Make the page visible when the logical expression evaluates to true. Otherwise, keep the panel invisible."
      panel_visibilityDescription: "Make the panel visible when the logic expression returns true. Otherwise keep it invisible.",
      // "Make the panel and all elements inside it enabled when the logical expression evaluates to true. Otherwise, keep them disabled."
      panel_enableDescription: "Make the panel, and all elements inside it, enable when the logic expression returns true. Otherwise keep them disabled.",
      // "Make the question visible when the logical expression evaluates to true. Otherwise, keep the question invisible."
      question_visibilityDescription: "Make the question visible when the logic expression returns true. Otherwise keep it invisible.",
      // "Make the question enabled when the logical expression evaluates to true. Otherwise, keep the question disabled."
      question_enableDescription: "Make the question enable when the logic expression returns true. Otherwise keep it disabled.",
      // "Question becomes required when the logical expression evaluates to true."
      question_requireDescription: "Question becomes required when the logic expression returns true.",
      // "When the logical expression evaluates to true, the survey ends, and the respondent sees the \"Thank you\" page."
      trigger_completeDescription: "When the logic expression returns true then the survey becomes completed and an end-user see the 'Thank you page'.",
      // "When question values used in the logical expression are changed, and the expression evaluates to true, the specified value is assigned to the selected question."
      trigger_setvalueDescription: "When question values, that are used in the logic expression, are changed and the logic expression returns true, then the value is set to the selected question.",
      // "When question values used in the logical expression are changed, and the expression evaluates to true, the value of the selected question is copied to another question."
      trigger_copyvalueDescription: "When question values, that are used in the logic expression, are changed and the logic expression returns true, then the value of one selected question is copied to another selected question.",
      // "When the logical expression evaluates to true, the survey focuses/jumps to the selected question."
      trigger_skipDescription: "When the logic expression returns true then the survey skip to / focus the selected question.",
      // "When the logical expression evaluates to true, the survey evaluates another expression. Optionally, the result of the latter expression can be assigned as a value to the selected question"
      trigger_runExpressionDescription: "When the logic expression returns true, then the custom expression is performed. You may optionally set this expression result into the selected question",
      // "If the logical expression evaluates to true, the \"Thank You\" page displays the specified content."
      completedHtmlOnConditionDescription: "If the logic expression returns true, then the default text for the 'Thank you page' is changed to the given one.",
      // "When expression: '{0}' returns true"
      itemExpressionText: "عندما التعبير '{0}' رجع قيمة المنطقية صحيح", // {0} - the expression
      // "New rule"
      itemEmptyExpressionText: "الإرتباط الجديد لم يحدد",
      // "make page {0} visible"
      page_visibilityText: "جعل الصفحة {0} مرئية", // {0} page name
      // "make panel {0} visible"
      panel_visibilityText: "جعل اللوحة {0} مرئية", // {0} panel name
      // "make panel {0} enable"
      panel_enableText: "جعل اللوحة {0} مفعلة", // {0} panel name
      // "make question {0} visible"
      question_visibilityText: "جعل السؤال {0} مرئي", // {0} question name
      // "make question {0} enable"
      question_enableText: "جعل السؤال {0} مفعل", // {0} question name
      // "make question {0} required"
      question_requireText: "جعل السؤال {0} إلزامي", // {0} question name
      // [Auto-translated] "reset value for question: {0}"
      question_resetValueText: "إعادة تعيين قيمة السؤال: {0}", // {0} question name.
      // [Auto-translated] "assign value: {1} to question: {0}"
      question_setValueText: "تعيين قيمة: {1} السؤال: {0}", // {0} question name and {1} setValueExpression
      // [Auto-translated] "make column {0} of question {1} visible"
      column_visibilityText: "جعل العمود {0} السؤال {1} مرئيا", // {0} column name, {1} question name
      // [Auto-translated] "make column {0} of question {1} enable"
      column_enableText: "تمكين {0} عمود السؤال {1}", // {0} column name, {1} question name
      // [Auto-translated] "make column {0} of question {1} required"
      column_requireText: "جعل العمود {0} السؤال {1} مطلوبا", // {0} column name, {1} question name
      // [Auto-translated] "reset cell value for column: {0}"
      column_resetValueText: "إعادة تعيين قيمة الخلية للعمود: {0}", // {0} column name
      // [Auto-translated] "assign cell value: {1} to column: {0}"
      column_setValueText: "تعيين قيمة الخلية: {1} إلى العمود: {0}", // {0} column name and {1} setValueExpression
      // [Auto-translated] "An expression whose result will be assigned to the target question."
      setValueExpressionPlaceholder: "تعبير سيتم تعيين نتيجته للسؤال الهدف.",
      // "survey becomes completed"
      trigger_completeText: "الإستبيان سيصبح مكتمل",
      // "set into question: {0} value {1}"
      trigger_setvalueText: "تثبيت إلى السؤال: {0} القيمة {1}", // {0} question name, {1} setValue
      // [Auto-translated] "clear question value: {0}"
      trigger_setvalueEmptyText: "قيمة سؤال واضحة: {0}", // {0} question name
      // "copy into question: {0} value from question {1}"
      trigger_copyvalueText: "النسخ إلى السؤال: {0} القيمة القادمة من السؤال {1}", // {0} and {1} question names
      // "survey skip to the question {0}"
      trigger_skipText: "التخطي إلى السؤال {0}", // {0} question name
      // "run expression: '{0}'"
      trigger_runExpressionText1: "شغل التعبير الرياضي '{0}'", // {0} the expression
      // " and set its result into question: {0}"
      trigger_runExpressionText2: " وثبت نتيجتها إلى السؤال {0}", // {0} question name
      // "show custom text for the \"Thank You\" page."
      completedHtmlOnConditionText: "عرض نص رسال 'صفحة شكر' مخصصة",
      // "All Questions"
      showAllQuestions: "عرض كل الأسئلة",
      // "All Action Types"
      showAllActionTypes: "عرض كل أنواع الإجراءات",
      // "Condition(s)"
      conditions: "Condition(s)",
      // "Action(s)"
      actions: "Action(s)",
      // "Define condition(s)"
      expressionEditorTitle: "تعريف شرط(إشتراطات)",
      // "Define action(s)"
      actionsEditorTitle: "تعريف إجراء (إجراءات)",
      // "Delete Action"
      deleteAction: "حذف الإجراء",
      // "Add Action"
      addNewAction: "إضافة إجراء جديد",
      // "Select action..."
      selectedActionCaption: "حدد الإجراء لأضافته",
      // "The logic expression is empty or invalid. Please correct it."
      expressionInvalid: "التعبير المنطقي الرياضي فارغ أو غير صحيح، يرجى تصحيحه",
      // "Please add at least one action."
      noActionError: "الرجاء، إضافة إجراء واحد على الأقل",
      // "Please fix issues in your action(s)."
      actionInvalid: "الرجاء، إصلاح الأخطاء في الإجراء التابع لك",
      // [Auto-translated] "Logical rules are incomplete"
      uncompletedRule_title: "القواعد المنطقية غير مكتملة",
      // [Auto-translated] "You have not completed some of the logical rules. If you leave the tab now, the changes will be lost. Do you still want to leave the tab without completing the changes?"
      uncompletedRule_text: "لم تكمل بعض القواعد المنطقية. إذا تركت علامة التبويب الآن ، فستفقد التغييرات. هل ما زلت تريد مغادرة علامة التبويب دون إكمال التغييرات؟",
      // [Auto-translated] "Yes"
      uncompletedRule_apply: "نعم",
      // [Auto-translated] "No, I want to complete the rules"
      uncompletedRule_cancel: "لا، أريد إكمال القواعد"
    }
  },
  // Property Editors
  pe: {
    panel: {
      // [Auto-translated] "Panel name"
      name: "اسم اللوحة",
      // [Auto-translated] "Panel title"
      title: "عنوان اللوحة",
      // [Auto-translated] "Panel description"
      description: "وصف اللوحة",
      // [Auto-translated] "Make the panel visible if"
      visibleIf: "اجعل اللوحة مرئية إذا",
      // [Auto-translated] "Make the panel required if"
      requiredIf: "اجعل اللوحة مطلوبة إذا",
      // [Auto-translated] "Question order within the panel"
      questionOrder: "ترتيب الأسئلة داخل اللوحة",
      // [Auto-translated] "Move the panel to page"
      page: "نقل اللوحة إلى الصفحة",
      // [Auto-translated] "Display the panel on a new line"
      startWithNewLine: "عرض اللوحة على سطر جديد",
      // [Auto-translated] "Panel collapse state"
      state: "حالة طي اللوحة",
      // [Auto-translated] "Inline panel width"
      width: "عرض اللوحة المضمنة",
      // [Auto-translated] "Minimum panel width"
      minWidth: "الحد الأدنى لعرض اللوحة",
      // [Auto-translated] "Maximum panel width"
      maxWidth: "الحد الأقصى لعرض اللوحة",
      // [Auto-translated] "Number this panel"
      showNumber: "رقم هذه اللوحة"
    },
    panellayoutcolumn: {
      // [Auto-translated] "Effective width, %"
      effectiveWidth: "العرض الفعال ،٪",
      // [Auto-translated] "Question title width, px"
      questionTitleWidth: "عرض عنوان السؤال، بكسل"
    },
    paneldynamic: {
      // [Auto-translated] "Panel name"
      name: "اسم اللوحة",
      // [Auto-translated] "Panel title"
      title: "عنوان اللوحة",
      // [Auto-translated] "Panel description"
      description: "وصف اللوحة",
      // [Auto-translated] "Entry display mode"
      displayMode: "وضع عرض الدخول",
      // [Auto-translated] "Make the panel visible if"
      visibleIf: "اجعل اللوحة مرئية إذا",
      // [Auto-translated] "Make the panel required if"
      requiredIf: "اجعل اللوحة مطلوبة إذا",
      // [Auto-translated] "Move the panel to page"
      page: "نقل اللوحة إلى الصفحة",
      // [Auto-translated] "Display the panel on a new line"
      startWithNewLine: "عرض اللوحة على سطر جديد",
      // [Auto-translated] "Panel collapse state"
      state: "حالة انهيار اللوحة",
      // [Auto-translated] "Inline panel width"
      width: "عرض اللوحة المضمنة",
      // [Auto-translated] "Minimum panel width"
      minWidth: "الحد الأدنى لعرض اللوحة",
      // [Auto-translated] "Maximum panel width"
      maxWidth: "الحد الأقصى لعرض اللوحة",
      // [Auto-translated] "Confirm entry removal"
      confirmDelete: "تأكيد إزالة الدخول",
      // [Auto-translated] "Entry description pattern"
      templateDescription: "نمط وصف الإدخال",
      // [Auto-translated] "Entry title pattern"
      templateTitle: "نمط عنوان الإدخال",
      // [Auto-translated] "Empty panel text"
      noEntriesText: "نص اللوحة الفارغ",
      // [Auto-translated] "Tab title pattern"
      templateTabTitle: "نمط عنوان علامة التبويب",
      // [Auto-translated] "Tab title placeholder"
      tabTitlePlaceholder: "العنصر النائب لعنوان علامة التبويب",
      // [Auto-translated] "Make an individual entry visible if"
      templateVisibleIf: "جعل إدخال فردي مرئيا إذا",
      // [Auto-translated] "Number the panel"
      showNumber: "ترقيم اللوحة",
      // [Auto-translated] "Panel title alignment"
      titleLocation: "محاذاة عنوان اللوحة",
      // [Auto-translated] "Panel description alignment"
      descriptionLocation: "محاذاة وصف اللوحة",
      // [Auto-translated] "Question title alignment"
      templateQuestionTitleLocation: "محاذاة عنوان السؤال",
      // [Auto-translated] "Question title width"
      templateQuestionTitleWidth: "عرض عنوان السؤال",
      // [Auto-translated] "Error message alignment"
      templateErrorLocation: "محاذاة رسالة الخطأ",
      // [Auto-translated] "New entry location"
      newPanelPosition: "موقع دخول جديد",
      // [Auto-translated] "Prevent duplicate responses in the following question"
      keyName: "منع الردود المكررة في السؤال التالي"
    },
    question: {
      // [Auto-translated] "Question name"
      name: "اسم السؤال",
      // [Auto-translated] "Question title"
      title: "عنوان السؤال",
      // [Auto-translated] "Question description"
      description: "وصف السؤال",
      // [Auto-translated] "Show the title and description"
      showTitle: "إظهار العنوان والوصف",
      // [Auto-translated] "Make the question visible if"
      visibleIf: "اجعل السؤال مرئيا إذا",
      // [Auto-translated] "Make the question required if"
      requiredIf: "اجعل السؤال مطلوبا إذا",
      // [Auto-translated] "Move the question to page"
      page: "نقل السؤال إلى الصفحة",
      // [Auto-translated] "Question box collapse state"
      state: "حالة طي مربع الأسئلة",
      // [Auto-translated] "Number this question"
      showNumber: "رقم هذا السؤال",
      // [Auto-translated] "Question title alignment"
      titleLocation: "محاذاة عنوان السؤال",
      // [Auto-translated] "Question description alignment"
      descriptionLocation: "محاذاة وصف السؤال",
      // [Auto-translated] "Error message alignment"
      errorLocation: "محاذاة رسالة الخطأ",
      // [Auto-translated] "Increase the inner indent"
      indent: "زيادة المسافة البادئة الداخلية",
      // [Auto-translated] "Inline question width"
      width: "عرض السؤال المضمن",
      // [Auto-translated] "Minimum question width"
      minWidth: "الحد الأدنى لعرض السؤال",
      // [Auto-translated] "Maximum question width"
      maxWidth: "الحد الأقصى لعرض السؤال",
      // [Auto-translated] "Update input field value"
      textUpdateMode: "تحديث قيمة حقل الإدخال"
    },
    signaturepad: {
      // [Auto-translated] "Signature area width"
      signatureWidth: "عرض منطقة التوقيع",
      // [Auto-translated] "Signature area height"
      signatureHeight: "ارتفاع المنطقة المميزة",
      // [Auto-translated] "Auto-scale the signature area"
      signatureAutoScaleEnabled: "تغيير حجم منطقة التوقيع تلقائيا",
      // [Auto-translated] "Show a placeholder within signature area"
      showPlaceholder: "إظهار عنصر نائب داخل منطقة التوقيع",
      // [Auto-translated] "Placeholder text"
      placeholder: "نص العنصر النائب",
      // [Auto-translated] "Placeholder text in read-only or preview mode"
      placeholderReadOnly: "نص العنصر النائب في وضع القراءة فقط أو المعاينة",
      // [Auto-translated] "Show the Clear button within signature area"
      allowClear: "إظهار الزر مسح داخل منطقة التوقيع",
      // [Auto-translated] "Minimum stroke width"
      penMinWidth: "الحد الأدنى لعرض السكتة الدماغية",
      // [Auto-translated] "Maximum stroke width"
      penMaxWidth: "الحد الأقصى لعرض السكتة الدماغية",
      // [Auto-translated] "Stroke color"
      penColor: "لون الحد"
    },
    comment: {
      // [Auto-translated] "Input field height (in lines)"
      rows: "ارتفاع حقل الإدخال (في الأسطر)"
    },
    // "Question numbering"
    showQuestionNumbers: "إظهار أرقام الأسئلة",
    // "Question indexing type"
    questionStartIndex: "فهرس بداية الأسئلة (1،2 أو 'أ' ، 'ب')",
    expression: {
      // [Auto-translated] "Expression name"
      name: "اسم التعبير",
      // [Auto-translated] "Expression title"
      title: "عنوان التعبير",
      // [Auto-translated] "Expression description"
      description: "وصف التعبير",
      // [Auto-translated] "Expression"
      expression: "تعبير"
    },
    trigger: {
      // [Auto-translated] "Expression"
      expression: "تعبير"
    },
    calculatedvalue: {
      // [Auto-translated] "Expression"
      expression: "تعبير"
    },
    // survey templates
    survey: {
      // [Auto-translated] "Survey title"
      title: "عنوان الاستطلاع",
      // [Auto-translated] "Survey description"
      description: "وصف المسح",
      // [Auto-translated] "Make the survey read-only"
      readOnly: "جعل الاستطلاع للقراءة فقط"
    },
    page: {
      // [Auto-translated] "Page name"
      name: "اسم الصفحة",
      // [Auto-translated] "Page title"
      title: "عنوان الصفحة",
      // [Auto-translated] "Page description"
      description: "وصف الصفحة",
      // [Auto-translated] "Make the page visible if"
      visibleIf: "اجعل الصفحة مرئية إذا",
      // [Auto-translated] "Make the page required if"
      requiredIf: "اجعل الصفحة مطلوبة إذا",
      // [Auto-translated] "Time limit to complete the page"
      timeLimit: "الحد الزمني لإكمال الصفحة",
      // [Auto-translated] "Question order on the page"
      questionOrder: "ترتيب الأسئلة على الصفحة"
    },
    matrixdropdowncolumn: {
      // [Auto-translated] "Column name"
      name: "اسم العمود",
      // [Auto-translated] "Column title"
      title: "عنوان العمود",
      // [Auto-translated] "Prevent duplicate responses"
      isUnique: "منع الردود المكررة",
      // [Auto-translated] "Column width"
      width: "عرض العمود",
      // [Auto-translated] "Minimum column width"
      minWidth: "الحد الأدنى لعرض العمود",
      // [Auto-translated] "Input field height (in lines)"
      rows: "ارتفاع حقل الإدخال (في الأسطر)",
      // [Auto-translated] "Make the column visible if"
      visibleIf: "اجعل العمود مرئيا إذا",
      // [Auto-translated] "Make the column required if"
      requiredIf: "اجعل العمود مطلوبا إذا",
      // [Auto-translated] "Each option in a separate column"
      showInMultipleColumns: "كل خيار في عمود منفصل"
    },
    matrixcolumn: {
      // [Auto-translated] "Clear others in the same row"
      isExclusive: "محو الآخرين في نفس الصف"
    },
    multipletextitem: {
      // [Auto-translated] "Name"
      name: "اسم",
      // [Auto-translated] "Title"
      title: "عنوان"
    },
    masksettings: {
      // [Auto-translated] "Save masked value in survey results"
      saveMaskedValue: "حفظ القيمة المقنعة في نتائج الاستطلاع"
    },
    patternmask: {
      // [Auto-translated] "Value pattern"
      pattern: "نمط القيمة"
    },
    datetimemask: {
      // [Auto-translated] "Minimum value"
      min: "الحد الأدنى للقيمة",
      // [Auto-translated] "Maximum value"
      max: "القيمة القصوى"
    },
    numericmask: {
      // [Auto-translated] "Allow negative values"
      allowNegativeValues: "السماح بالقيم السالبة",
      // [Auto-translated] "Thousands separator"
      thousandsSeparator: "فاصل الآلاف",
      // [Auto-translated] "Decimal separator"
      decimalSeparator: "فاصل عشري",
      // [Auto-translated] "Value precision"
      precision: "دقة القيمة",
      // [Auto-translated] "Minimum value"
      min: "الحد الأدنى للقيمة",
      // [Auto-translated] "Maximum value"
      max: "القيمة القصوى"
    },
    currencymask: {
      // [Auto-translated] "Currency prefix"
      prefix: "بادئة العملة",
      // [Auto-translated] "Currency suffix"
      suffix: "لاحقة العملة"
    },
    // [Auto-translated] "Clear others when selected"
    isExclusive: "مسح الآخرين عند تحديده",
    // [Auto-translated] "Display both text and value"
    showValue: "عرض كل من النص والقيمة",
    // [Auto-translated] "Require user to enter a comment"
    isCommentRequired: "مطالبة المستخدم بإدخال تعليق",
    // "Display area height"
    imageHeight: "طول الصورة",
    // "Display area width"
    imageWidth: "عرض الصورة",
    // "Join identifier"
    valueName: "اسم القيمة",
    // [Auto-translated] "Default display value for dynamic texts"
    defaultDisplayValue: "قيمة العرض الافتراضية للنصوص الديناميكية",
    // [Auto-translated] "Label alignment"
    rateDescriptionLocation: "محاذاة التسمية",
    // [Auto-translated] "Input field width (in characters)"
    size: "عرض حقل الإدخال (بالأحرف)",
    // [Auto-translated] "Cell error message alignment"
    cellErrorLocation: "محاذاة رسالة خطأ الخلية",
    // [Auto-translated] "Enabled"
    enabled: "تمكين",
    // [Auto-translated] "Disabled"
    disabled: "ذوي الاحتياجات الخاصه",
    // [Auto-translated] "Inherit"
    inherit: "ورث",
    // "Apply"
    apply: "تطبيق",
    // "OK"
    ok: "موافق",
    // "Save"
    save: "حفظ",
    // "Clear"
    clear: "مسح",
    // "Save"
    saveTooltip: "حفظ",
    // "Cancel"
    cancel: "إلغاء",
    // "Set"
    set: "تثبيت",
    // "Reset"
    reset: "Reset",
    // "Change"
    change: "تغيير",
    // "Refresh"
    refresh: "Refresh",
    // "Close"
    close: "إغلاق",
    // "Delete"
    delete: "حذف",
    // "Add"
    add: "إضافة",
    // "Add New"
    addNew: "إضافة إرتباط جديد",
    // "Click to add an item..."
    addItem: "Click to add an item...",
    // "Click to remove the item..."
    removeItem: "Click to remove the item...",
    // "Drag the item"
    dragItem: "Drag the item",
    // "Other"
    addOther: "Other",
    // "Select All"
    addSelectAll: "Select All",
    // "None"
    addNone: "None",
    // "Remove All"
    removeAll: "Remove All",
    // "Edit"
    edit: "التعديل",
    // "Return without saving"
    back: "Return without saving",
    // "Return without saving"
    backTooltip: "Return without saving",
    // "Save and return"
    saveAndBack: "Save and return",
    // "Save and return"
    saveAndBackTooltip: "Save and return",
    // "Done"
    doneEditing: "إضافة",
    // "Edit Choices"
    editChoices: "Edit Choices",
    // "Show Choices"
    showChoices: "Show Choices",
    // "Move"
    move: "Move",
    // "<empty>"
    empty: "<empty>",
    // "Value is empty"
    emptyValue: "القيمة فارغة",
    // "Manual Entry"
    fastEntry: "إدخالات سريعة",
    // "Value '{0}' is not unique"
    fastEntryNonUniqueError: "Value '{0}' is not unique",
    // "Please limit the number of items from {0} to {1}"
    fastEntryChoicesCountError: "Please limit the number of items from {0} to {1}",
    // [Auto-translated] "Please enter at least {0} items"
    fastEntryChoicesMinCountError: "الرجاء إدخال {0} العناصر على الأقل",
    // [Auto-translated] "Enter the list of choice options and their IDs in the following format:\n\nid|option\n\nA choice option ID is not visible to respondents and can be used in conditional rules."
    fastEntryPlaceholder: "أدخل قائمة خيارات الاختيار ومعرفاتها بالتنسيق التالي:\n\nمعرف |خيار\n\nمعرف خيار الاختيار غير مرئي للمستجيبين ويمكن استخدامه في القواعد الشرطية.",
    // "Form Entry"
    formEntry: "Form Entry",
    // "Test the service"
    testService: "Test the service",
    // "Please select the element"
    itemSelectorEmpty: "Please select the element",
    // "Please select the action"
    conditionActionEmpty: "Please select the action",
    // "Select a question..."
    conditionSelectQuestion: "إختر السؤال...",
    // "Select a page..."
    conditionSelectPage: "Select page...",
    // "Select a panel..."
    conditionSelectPanel: "Select panel...",
    // "Please enter/select the value"
    conditionValueQuestionTitle: "Please enter/select the value",
    // "Press ctrl+space to get expression completion hint"
    aceEditorHelp: "Press ctrl+space to get expression completion hint",
    // "Current row"
    aceEditorRowTitle: "Current row",
    // "Current panel"
    aceEditorPanelTitle: "Current panel",
    // "For more details please check the documentation"
    showMore: "For more details please check the documentation",
    // "Available questions"
    assistantTitle: "Available questions:",
    // "There is should be at least one column or row"
    cellsEmptyRowsColumns: "There is should be at least one column or row",
    // [Auto-translated] "Review before submit"
    showPreviewBeforeComplete: "مراجعة قبل الإرسال",
    // [Auto-translated] "Enabled by a condition"
    overridingPropertyPrefix: "ممكن بواسطة شرط",
    // [Auto-translated] "Reset"
    resetToDefaultCaption: "اعاده تعيين",
    // "Please enter a value"
    propertyIsEmpty: "Please enter a value",
    // "Please enter a unique value"
    propertyIsNoUnique: "Please enter a unique value",
    // "Please enter a unique name"
    propertyNameIsNotUnique: "Please enter a unique name",
    // "Do not use reserved words: \"item\", \"choice\", \"panel\", \"row\"."
    propertyNameIsIncorrect: "لا تستخدم الكلمات المحجوزة: \"عنصر\" ، \"اختيار\" ، \"لوحة\" ، \"صف\".",
    // "You don't have any items yet"
    listIsEmpty: "No items have been added yet",
    // [Auto-translated] "You don't have any choices yet"
    "listIsEmpty@choices": "ليس لديك أي خيارات حتى الآن",
    // [Auto-translated] "You don't have any columns yet"
    "listIsEmpty@columns": "ليس لديك أي أعمدة حتى الآن",
    // [Auto-translated] "You don't have layout columns yet"
    "listIsEmpty@gridLayoutColumns": "ليس لديك أعمدة تخطيط حتى الآن",
    // [Auto-translated] "You don't have any rows yet"
    "listIsEmpty@rows": "ليس لديك أي صفوف حتى الآن",
    // [Auto-translated] "You don't have any validation rules yet"
    "listIsEmpty@validators": "ليس لديك أي قواعد تحقق حتى الآن",
    // [Auto-translated] "You don't have any custom variables yet"
    "listIsEmpty@calculatedValues": "ليس لديك أي متغيرات مخصصة حتى الآن",
    // [Auto-translated] "You don't have any triggers yet"
    "listIsEmpty@triggers": "ليس لديك أي محفزات حتى الآن",
    // [Auto-translated] "You don't have any links yet"
    "listIsEmpty@navigateToUrlOnCondition": "ليس لديك أي روابط حتى الآن",
    // [Auto-translated] "You don't have any pages yet"
    "listIsEmpty@pages": "ليس لديك أي صفحات حتى الآن",
    // [Auto-translated] "Add new choice"
    "addNew@choices": "إضافة خيار جديد",
    // [Auto-translated] "Add new column"
    "addNew@columns": "إضافة عمود جديد",
    // [Auto-translated] "Add new row"
    "addNew@rows": "إضافة صف جديد",
    // [Auto-translated] "Add new rule"
    "addNew@validators": "إضافة قاعدة جديدة",
    // [Auto-translated] "Add new variable"
    "addNew@calculatedValues": "إضافة متغير جديد",
    // [Auto-translated] "Add new trigger"
    "addNew@triggers": "إضافة مشغل جديد",
    // [Auto-translated] "Add new URL"
    "addNew@navigateToUrlOnCondition": "إضافة عنوان URL جديد",
    // [Auto-translated] "Add new page"
    "addNew@pages": "إضافة صفحة جديدة",
    // "Expression is empty"
    expressionIsEmpty: "Expression is empty",
    // "Value"
    value: "القيمة",
    // "Text"
    text: "النص",
    // "Row ID"
    rowid: "Row ID",
    // "Image or video file URL"
    imageLink: "رابط الصورة",
    // "Edit column: {0}"
    columnEdit: "Edit column: {0}",
    // "Edit item: {0}"
    itemEdit: "Edit item: {0}",
    // "URL"
    url: "رابط إلكتروني URL",
    // "Path to data"
    path: "المسار",
    choicesbyurl: {
      // [Auto-translated] "Web service URL"
      url: "عنوان URL لخدمة الويب",
      // [Auto-translated] "Get value to store from the following property"
      valueName: "احصل على قيمة للتخزين من العقار التالي"
    },
    // "Get value to display from the following property"
    titleName: "اسم العنوان",
    // "Get file URLs from the following property"
    imageLinkName: "اسم رابط الصورة",
    // "Accept empty response"
    allowEmptyResponse: "السماح بجواب فارغ",
    // "Title"
    titlePlaceholder: "Input title here",
    // "Survey Title"
    surveyTitlePlaceholder: "أدخل عنوان الإستبيان هنا",
    // "Page {num}"
    pageTitlePlaceholder: "أدخل عنوان الصفحة هنا",
    // [Auto-translated] "Start Page"
    startPageTitlePlaceholder: "الصفحة الرئيسية",
    // "Description"
    descriptionPlaceholder: "Enter a description",
    // "Description"
    surveyDescriptionPlaceholder: "أدخل وصف للإستبيان",
    // "Description"
    pageDescriptionPlaceholder: "أدخل وصف للصفحة",
    // [Auto-translated] "Wrap choices"
    textWrapEnabled: "خيارات الالتفاف",
    // "Enable the \"Other\" option"
    showOtherItem: "هل هناك خيار أخرى",
    // "Rename the \"Other\" option"
    otherText: "نص خيار أخرى",
    // "Enable the \"None\" option"
    showNoneItem: "هل هناك خيار بلا",
    // [Auto-translated] "Enable the \"Refuse to Answer\" option"
    showRefuseItem: "قم بتمكين خيار \"رفض الإجابة\"",
    // "Enable the \"Don't Know\" option"
    showDontKnowItem: "السماح بالخيار \"لا أعرف\"",
    // "Rename the \"None\" option"
    noneText: "نص خيار بلا",
    // "Enable the \"Select All\" option"
    showSelectAllItem: "هل هناك خيار إختيار الكل",
    // "Rename the \"Select All\" option"
    selectAllText: "نص خيار إختر الكل",
    // "Minimum value for auto-generated items"
    choicesMin: "Minimum value for auto generated items",
    // "Maximum value for auto-generated items"
    choicesMax: "Maximum value for auto generated items",
    // "Step value for auto-generated items"
    choicesStep: "The difference between auto generated items",
    // "Name"
    name: "الإسم",
    // "Title"
    title: "العنوان",
    // "Cell input type"
    cellType: "نوع الخلية",
    // "Column count"
    colCount: "عدد الأعمدة",
    // "Choice order"
    choicesOrder: "إختر ترتيب الإختيارات",
    // [Auto-translated] "Allow custom choices"
    allowCustomChoices: "السماح بالخيارات المخصصة",
    // "Visible"
    visible: "مرئي؟",
    // "Required"
    isRequired: "مطلوب؟",
    // [Auto-translated] "Mark as required"
    markRequired: "وضع علامة كمطلوب",
    // [Auto-translated] "Remove the required mark"
    removeRequiredMark: "إزالة العلامة المطلوبة",
    // "Require an answer in each row"
    eachRowRequired: "المطالبة بالأجوبة لكل الصفوف",
    // [Auto-translated] "Prevent duplicate responses in rows"
    eachRowUnique: "منع تكرار الاستجابات في الصفوف",
    // "Error message for required questions"
    requiredErrorText: "نص خطأ إلزامي السؤال",
    // "Display the question on a new line"
    startWithNewLine: "إظهار السؤال في صف جديد",
    // "Rows"
    rows: "عدد الصفوف",
    // "Columns"
    cols: "عدد الأعمدة",
    // "Placeholder text within input field"
    placeholder: "نص حامل خانة الإدخال",
    // "Show preview area"
    showPreview: "عرض منطقة المعاينة",
    // "Store file content in JSON result as text"
    storeDataAsText: "تخزين محتويات ملف JSON كنص",
    // "Maximum file size (in bytes)"
    maxSize: "أقصى حجم للملف بالبايت",
    // "Row count"
    rowCount: "عدد الصفوف",
    // "Columns layout"
    columnLayout: "تخطيط الأعمدة",
    // "\"Add Row\" button alignment"
    addRowButtonLocation: "موقع زر إضافة صف",
    // [Auto-translated] "Transpose rows to columns"
    transposeData: "تبديل موضع الصفوف إلى أعمدة",
    // "\"Add Row\" button text"
    addRowText: "نص زر إضافة صف",
    // "\"Remove Row\" button text"
    removeRowText: "نص زر حذف صف",
    // [Auto-translated] "Input field title pattern"
    singleInputTitleTemplate: "نمط عنوان حقل الإدخال",
    // "Minimum rating value"
    rateMin: "أصغر معدل",
    // "Maximum rating value"
    rateMax: "أكبر معدل",
    // "Step value"
    rateStep: "خطوات المعدل",
    // "Minimum value label"
    minRateDescription: "وصف أصغر معدل",
    // "Maximum value label"
    maxRateDescription: "وصف أكبر معدل",
    // "Input type"
    inputType: "نوع المدخل",
    // "Default Answer"
    defaultValue: "القيمة الإفتراضية",
    // "Default texts"
    cellsDefaultRow: "Default cells texts",
    // "Edit survey settings"
    surveyEditorTitle: "Edit survey settings",
    // "Edit: {0}"
    qEditorTitle: "Edit: {0}",
    // "Maximum character limit"
    maxLength: "أقصى طول",
    // "Build"
    buildExpression: "Build",
    // "Edit"
    editExpression: "التعديل",
    // [Auto-translated] "and"
    and: "و",
    // [Auto-translated] "or"
    or: "أو",
    // "Remove"
    remove: "إزالة",
    // "Add Condition"
    addCondition: "أضف الشرط",
    // [Auto-translated] "Select a question to start configuring conditions."
    emptyLogicPopupMessage: "حدد سؤالا لبدء تكوين الشروط.",
    // "If"
    if: "إذا قيمة",
    // [Auto-translated] "then"
    then: "ثم",
    // "Target question"
    setToName: "إلى",
    // "Question to copy answer from"
    fromName: "from",
    // [Auto-translated] "Question to skip to"
    gotoName: "سؤال للتخطي إليه",
    // "Rule is incorrect"
    ruleIsNotSet: "Rule is incorrect",
    // [Auto-translated] "Add to the survey results"
    includeIntoResult: "أضف إلى نتائج الاستطلاع",
    // "Make the title and description visible"
    showTitle: "إظهار/إخفاء العنوان",
    // "Expand/collapse title"
    expandCollapseTitle: "Expand/collapse title",
    // "Select a survey language"
    locale: "اللغة الإفتراضية",
    // "Select device type"
    simulator: "Choose device",
    // "Switch to landscape orientation"
    landscapeOrientation: "Landscape",
    // "Switch to portrait orientation"
    portraitOrientation: "Portrait",
    // "Clear hidden question values"
    clearInvisibleValues: "إمسح القيم الغير مرئية",
    // "Limit to one response"
    cookieName: "أدخل إسم ملف تعريف الإرتباط (لتعطيل المشاركة بالإستبيان أكثر من مرة)",
    // "Auto-save survey progress on page change"
    partialSendEnabled: "إرسال نتائج الإستبيان على الصفحة التالية",
    // "Save the \"Other\" option value as a separate property"
    storeOthersAsComment: "تخزين قيمة 'أخرى' في حقل منفصل",
    // "Show page titles"
    showPageTitles: "عرض عنوان الصفحات",
    // "Show page numbers"
    showPageNumbers: "عرض أرقام الصفحات",
    // "\"Previous Page\" button text"
    pagePrevText: "نص زر الإنتقال للصفحة السابقة",
    // "\"Next Page\" button text"
    pageNextText: "نص زر الإنتقال للصفحة التالية",
    // "\"Complete Survey\" button text"
    completeText: "نص زر إنهاء الإستبيان",
    // "\"Review Answers\" button text"
    previewText: "نص زر المعاينة",
    // "\"Edit Answer\" button text"
    editText: "نص زر التعديل",
    // "\"Start Survey\" button text"
    startSurveyText: "نص زر بدء المشاركة بالإستبيان",
    // "Show navigation buttons"
    showNavigationButtons: "إظهار أزرار الإنتقال (التنقل الإفتراضي)",
    // [Auto-translated] "Navigation buttons alignment"
    navigationButtonsLocation: "محاذاة أزرار التنقل",
    // "Show the \"Previous Page\" button"
    showPrevButton: "إظهار زر التنقل السابق (السماح للمستخدم من العودة للصفحة السابقة في الإستبيان)",
    // "First page is a start page"
    firstPageIsStartPage: "الصفحة الأولى في الإستبيان هي صفحة البدء",
    // "Show the \"Thank You\" page"
    showCompletePage: "إظهار الصفحة المكتملة في النهاية (صفحة ويب مكتملة)",
    // "Auto-advance to the next page"
    autoAdvanceEnabled: "عند الإجابة على جميع الأسئلة، إنتقل إلى الصفحة التالية تلقائياً",
    // [Auto-translated] "Complete the survey automatically"
    autoAdvanceAllowComplete: "إكمال الاستطلاع تلقائيا",
    // "Show the progress bar"
    showProgressBar: "إظهار شريط التقدم",
    // [Auto-translated] "Progress bar alignment"
    progressBarLocation: "محاذاة شريط التقدم",
    // "Question title alignment"
    questionTitleLocation: "موقع عنوان السؤال",
    // "Question title width"
    questionTitleWidth: "عرض عنوان السؤال",
    // "Required symbol(s)"
    requiredMark: "رمز السؤال مطلوب",
    // "Question title template, default is: '{no}. {require} {title}'"
    questionTitleTemplate: "Question title template, default is: '{no}. {require} {title}'",
    // "Error message alignment"
    questionErrorLocation: "موقع خطأ في السؤال",
    // "Focus first question on a new page"
    autoFocusFirstQuestion: "ركز المؤشر على السؤال الأول عند تغير الصفحة",
    // "Question order"
    questionOrder: "ترتيب العناصر على الصفحة",
    // "Time limit to complete the survey"
    timeLimit: "أقصى وقت لإنهاء الإستبيان",
    // "Time limit to complete one page"
    timeLimitPerPage: "أقصى وقت لإنهاء الصفحة في الإستبيان",
    // [Auto-translated] "Use a timer"
    showTimer: "استخدام مؤقت",
    // "Timer alignment"
    timerLocation: "إظهار لوحة المؤقت",
    // "Timer mode"
    timerInfoMode: "إظهار نمط لوحة المؤقت",
    // "Enable entry addition"
    allowAddPanel: "السماح بإضافة لوحة",
    // "Enable entry removal"
    allowRemovePanel: "السماح بإزالة لوحة",
    // "\"Add Entry\" button text"
    addPanelText: "نص إضافة لوحة",
    // "\"Remove Entry\" button text"
    removePanelText: "نص إزالة لوحة",
    // "Show all elements on one page"
    isSinglePage: "Show all elements on one page",
    // "HTML markup"
    html: "صفحة ويب HTML",
    // [Auto-translated] "Answer"
    setValue: "جواب",
    // [Auto-translated] "Storage format"
    dataFormat: "تنسيق التخزين",
    // [Auto-translated] "Enable row addition"
    allowAddRows: "تمكين إضافة الصف",
    // [Auto-translated] "Enable row removal"
    allowRemoveRows: "تمكين إزالة الصف",
    // [Auto-translated] "Enable row reordering"
    allowRowReorder: "تمكين إعادة ترتيب الصفوف",
    // [Auto-translated] "Does not apply if you specify the exact display area width or height."
    responsiveImageSizeHelp: "لا ينطبق إذا قمت بتحديد عرض منطقة العرض أو ارتفاعها بالضبط.",
    // [Auto-translated] "Minimum display area width"
    minImageWidth: "الحد الأدنى لعرض مساحة العرض",
    // [Auto-translated] "Maximum display area width"
    maxImageWidth: "الحد الأقصى لعرض مساحة العرض",
    // [Auto-translated] "Minimum display area height"
    minImageHeight: "الحد الأدنى لارتفاع مساحة العرض",
    // [Auto-translated] "Maximum display area height"
    maxImageHeight: "أقصى ارتفاع لمساحة العرض",
    // "Minimum value"
    minValue: "أقل قيمة",
    // "Maximum value"
    maxValue: "أكبر قيمة",
    // [Auto-translated] "Case insensitive"
    caseInsensitive: "غير حساس لحالة الأحرف",
    // "Minimum length (in characters)"
    minLength: "Minimum length",
    // "Allow digits"
    allowDigits: "Allow digits",
    // "Minimum count"
    minCount: "Minimum count",
    // "Maximum count"
    maxCount: "Maximum count",
    // "Regular expression"
    regex: "Regular expression",
    surveyvalidator: {
      // [Auto-translated] "Validation message"
      text: "رسالة التحقق من الصحة",
      // [Auto-translated] "Validation expression"
      expression: "تعبير التحقق من الصحة",
      // [Auto-translated] "Notification type"
      notificationType: "نوع الإشعار",
      // [Auto-translated] "Maximum length (in characters)"
      maxLength: "الحد الأقصى للطول (بالأحرف)"
    },
    // "Total row header"
    totalText: "Total text",
    // "Aggregation method"
    totalType: "Total type",
    // "Total value expression"
    totalExpression: "Total expression",
    // "Total value display format"
    totalDisplayStyle: "Total display style",
    // "Currency"
    totalCurrency: "Total currency",
    // "Formatted string"
    totalFormat: "Total format",
    // [Auto-translated] "Survey logo"
    logo: "شعار الاستطلاع",
    // [Auto-translated] "Survey layout"
    questionsOnPageMode: "تخطيط المسح",
    // [Auto-translated] "Restrict answer length"
    maxTextLength: "تقييد طول الإجابة",
    // [Auto-translated] "Restrict comment length"
    maxCommentLength: "تقييد طول التعليق",
    // [Auto-translated] "Comment area height (in lines)"
    commentAreaRows: "ارتفاع منطقة التعليق (في الأسطر)",
    // [Auto-translated] "Auto-expand text areas"
    autoGrowComment: "توسيع مناطق النص تلقائيا",
    // [Auto-translated] "Allow users to resize text areas"
    allowResizeComment: "السماح للمستخدمين بتغيير حجم مناطق النص",
    // "Update input field values"
    textUpdateMode: "تحديث قيمة السؤال النصي",
    // [Auto-translated] "Input mask type"
    maskType: "نوع قناع الإدخال",
    // [Auto-translated] "Set focus on the first invalid answer"
    autoFocusFirstError: "تعيين التركيز على أول إجابة غير صالحة",
    // [Auto-translated] "Run validation"
    checkErrorsMode: "تشغيل التحقق من الصحة",
    // [Auto-translated] "Validate empty fields on lost focus"
    validateVisitedEmptyFields: "التحقق من صحة الحقول الفارغة على التركيز المفقود",
    // [Auto-translated] "Redirect to an external link after submission"
    navigateToUrl: "إعادة التوجيه إلى رابط خارجي بعد التقديم",
    // [Auto-translated] "Dynamic external link"
    navigateToUrlOnCondition: "رابط خارجي ديناميكي",
    // [Auto-translated] "Markup to show if the user already filled out this survey"
    completedBeforeHtml: "الترميز لإظهار ما إذا كان المستخدم قد ملأ هذا الاستطلاع بالفعل",
    // [Auto-translated] "\"Thank You\" page markup"
    completedHtml: "ترميز صفحة \"شكرا لك\"",
    // [Auto-translated] "Dynamic \"Thank You\" page markup"
    completedHtmlOnCondition: "ترميز صفحة \"شكرا لك\" الديناميكي",
    // [Auto-translated] "Markup to show while survey model is loading"
    loadingHtml: "الترميز لإظهاره أثناء تحميل نموذج الاستطلاع",
    // [Auto-translated] "Comment area text"
    commentText: "نص منطقة التعليق",
    // [Auto-translated] "Autocomplete type"
    autocomplete: "نوع الإكمال التلقائي",
    // "Label for \"True\""
    labelTrue: "تسمية \"صحيح\"",
    // "Label for \"False\""
    labelFalse: "تسمية \"خطأ\"",
    // "Show the Clear button"
    allowClear: "إظهار الزر مسح",
    // [Auto-translated] "Search Mode"
    searchMode: "وضع البحث",
    // [Auto-translated] "Display format"
    displayStyle: "تنسيق العرض",
    // [Auto-translated] "Formatted string"
    format: "سلسلة منسقة",
    // [Auto-translated] "Maximum fractional digits"
    maximumFractionDigits: "الحد الأقصى للأرقام الكسرية",
    // [Auto-translated] "Minimum fractional digits"
    minimumFractionDigits: "الحد الأدنى من الأرقام الكسرية",
    // [Auto-translated] "Display grouping separators"
    useGrouping: "عرض فواصل التجميع",
    // [Auto-translated] "Enable multiple file upload"
    allowMultiple: "تمكين تحميل ملفات متعددة",
    // [Auto-translated] "Preview uploaded images"
    allowImagesPreview: "معاينة الصور التي تم تحميلها",
    // [Auto-translated] "Accepted file types"
    acceptedTypes: "أنواع الملفات المقبولة",
    // [Auto-translated] "Wait for upload to complete"
    waitForUpload: "انتظر حتى يكتمل التحميل",
    // [Auto-translated] "Confirm file deletion"
    needConfirmRemoveFile: "تأكيد حذف الملف",
    // [Auto-translated] "Row details alignment"
    detailPanelMode: "محاذاة تفاصيل الصف",
    // [Auto-translated] "Minimum row count"
    minRowCount: "الحد الأدنى لعدد الصفوف",
    // [Auto-translated] "Maximum row count"
    maxRowCount: "الحد الأقصى لعدد الصفوف",
    // "Confirm row removal"
    confirmDelete: "تأكيد حذف الصف",
    // [Auto-translated] "Confirmation message"
    confirmDeleteText: "رسالة تأكيد",
    // [Auto-translated] "Initial number of entries"
    panelCount: "العدد الأولي للإدخالات",
    // [Auto-translated] "Minimum number of entries"
    minPanelCount: "الحد الأدنى لعدد الإدخالات",
    // [Auto-translated] "Maximum number of entries"
    maxPanelCount: "الحد الأقصى لعدد الإدخالات",
    // [Auto-translated] "Initial entry state"
    panelsState: "حالة الدخول الأولية",
    // [Auto-translated] "\"Previous Entry\" button text"
    prevPanelText: "نص الزر \"الإدخال السابق\"",
    // [Auto-translated] "\"Next Entry\" button text"
    nextPanelText: "نص الزر \"الإدخال التالي\"",
    // [Auto-translated] "\"Remove Entry\" button alignment"
    removePanelButtonLocation: "محاذاة زر \"إزالة الإدخال\"",
    // [Auto-translated] "Hide the question if it has no rows"
    hideIfRowsEmpty: "إخفاء السؤال إذا لم يكن يحتوي على صفوف",
    // [Auto-translated] "Hide columns if there are no rows"
    hideColumnsIfEmpty: "إخفاء الأعمدة في حالة عدم وجود صفوف",
    // [Auto-translated] "Custom rating values"
    rateValues: "قيم التصنيف المخصصة",
    // [Auto-translated] "Rating count"
    rateCount: "عدد التقييمات",
    // [Auto-translated] "Rating configuration"
    autoGenerate: "تكوين التصنيف",
    slider: {
      // [Auto-translated] "Min value"
      min: "الحد الأدنى للقيمة",
      // [Auto-translated] "Max value"
      max: "القيمة القصوى",
      // [Auto-translated] "Step value"
      step: "قيمة الخطوة",
      // [Auto-translated] "Show scale labels"
      showLabels: "إظهار تسميات المقياس",
      // [Auto-translated] "Show tooltips"
      tooltipVisibility: "عرض تلميحات الأدوات",
      // [Auto-translated] "Allow thumb crossing"
      allowSwap: "السماح بعبور الإبهام",
      // [Auto-translated] "Number of auto-generated labels"
      labelCount: "عدد التصنيفات التي يتم إنشاؤها تلقائيا",
      // [Auto-translated] "Min value expression"
      minValueExpression: "الحد الأدنى للقيمة",
      // [Auto-translated] "Max value expression"
      maxValueExpression: "تعبير القيمة القصوى",
      // [Auto-translated] "Scale labels configuration"
      autoGenerate: "تكوين تسميات المقياس",
      // [Auto-translated] "Slider type"
      sliderType: "نوع شريط التمرير",
      // [Auto-translated] "Min range length"
      minRangeLength: "الحد الأدنى لطول النطاق",
      // [Auto-translated] "Max range length"
      maxRangeLength: "أقصى طول النطاق",
      // [Auto-translated] "Custom labels"
      customLabels: "تسميات مخصصة",
      // [Auto-translated] "Label format"
      labelFormat: "تنسيق التسمية",
      // [Auto-translated] "Tooltip format"
      tooltipFormat: "تنسيق تلميح الأداة"
    },
    file: {
      // [Auto-translated] "Image height"
      imageHeight: "ارتفاع الصورة",
      // [Auto-translated] "Image width"
      imageWidth: "عرض الصورة"
    },
    // [Auto-translated] "Hide the question if it has no choices"
    hideIfChoicesEmpty: "إخفاء السؤال إذا لم يكن لديه خيارات",
    // "Minimum width"
    minWidth: "الحد الأدنى للعرض (بالقيم المقبولة في CSS)",
    // "Maximum width"
    maxWidth: "الحد الأقصى للعرض (بالقيم المقبولة من CSS)",
    // "Width"
    width: "العرض (بالقيم المقبولة من CSS)",
    // [Auto-translated] "Show column headers"
    showHeader: "إظهار رؤوس الأعمدة",
    // [Auto-translated] "Show horizontal scrollbar"
    horizontalScroll: "إظهار شريط التمرير الأفقي",
    // [Auto-translated] "Minimum column width"
    columnMinWidth: "الحد الأدنى لعرض العمود",
    // [Auto-translated] "Row header width"
    rowTitleWidth: "عرض رأس الصف",
    // "Value to store when \"True\" is selected"
    valueTrue: "القيمة \"الحقيقية\"",
    // "Value to store when \"False\" is selected"
    valueFalse: "قيمة \"خاطئة\"",
    // "\"Value is below minimum\" error message"
    minErrorText: "رسالة الخطأ \"القيمة أقل من الحد الأدنى\"",
    // "\"Value exceeds maximum\" error message"
    maxErrorText: "رسالة الخطأ \"القيمة تتجاوز الحد الأقصى\"",
    // "\"Empty comment\" error message"
    otherErrorText: "رسالة الخطأ \"تعليق فارغ\"",
    // "Error message for duplicate responses"
    keyDuplicationError: "رسالة الخطأ \"قيمة مفتاح غير فريدة\"",
    // [Auto-translated] "Minimum choices to select"
    minSelectedChoices: "الحد الأدنى من الخيارات للاختيار",
    // [Auto-translated] "Maximum choices to select"
    maxSelectedChoices: "الحد الأقصى للخيارات للاختيار",
    // [Auto-translated] "Logo width"
    logoWidth: "عرض الشعار",
    // [Auto-translated] "Logo height"
    logoHeight: "ارتفاع الشعار",
    // "Read-only"
    readOnly: "للقراءة فقط",
    // [Auto-translated] "Disable the read-only mode if"
    enableIf: "قم بتعطيل وضع القراءة فقط إذا",
    // "\"No rows\" message"
    noRowsText: "رسالة \"بلا صفوف\"",
    // [Auto-translated] "Separate special choices"
    separateSpecialChoices: "خيارات خاصة منفصلة",
    // [Auto-translated] "Copy choices from the following question"
    choicesFromQuestion: "نسخ الاختيارات من السؤال التالي",
    // [Auto-translated] "Which choice options to copy"
    choicesFromQuestionMode: "خيارات الاختيار المراد نسخها",
    // [Auto-translated] "Use values from the following matrix column or panel question as choice IDs"
    choiceValuesFromQuestion: "استخدم القيم من عمود المصفوفة التالي أو سؤال اللوحة كمعرفات اختيار",
    // [Auto-translated] "Use values from the following matrix column or panel question as choice texts"
    choiceTextsFromQuestion: "استخدم القيم من عمود المصفوفة التالي أو سؤال اللوحة كنصوص اختيار",
    // [Auto-translated] "Display page titles in the progress bar"
    progressBarShowPageTitles: "عرض عناوين الصفحات في شريط التقدم",
    // [Auto-translated] "Display page numbers in the progress bar"
    progressBarShowPageNumbers: "عرض أرقام الصفحات في شريط التقدم",
    // [Auto-translated] "Add a comment box"
    showCommentArea: "إضافة مربع تعليق",
    // [Auto-translated] "Placeholder text for the comment box"
    commentPlaceholder: "نص العنصر النائب لمربع التعليق",
    // [Auto-translated] "Show the labels as extreme values"
    displayRateDescriptionsAsExtremeItems: "إظهار التسميات كقيم قصوى",
    // [Auto-translated] "Row order"
    rowOrder: "ترتيب الصفوف",
    // [Auto-translated] "Column layout"
    columnsLayout: "تخطيط العمود",
    // [Auto-translated] "Nested column count"
    columnColCount: "عدد الأعمدة المتداخلة",
    // [Auto-translated] "Correct Answer"
    correctAnswer: "الإجابة الصحيحة",
    // [Auto-translated] "Default Values"
    defaultPanelValue: "القيم الافتراضية",
    // [Auto-translated] "Cell Texts"
    cells: "نصوص الخلية",
    // [Auto-translated] "Select a file or paste a file link..."
    fileInputPlaceholder: "حدد ملفا أو الصق رابط ملف...",
    // "Prevent duplicate responses in the following column"
    keyName: "عمود المفتاح",
    itemvalue: {
      // [Auto-translated] "Make the option visible if"
      visibleIf: "اجعل الخيار مرئيا إذا",
      // [Auto-translated] "Make the option selectable if"
      enableIf: "اجعل الخيار قابلا للتحديد إذا"
    },
    "itemvalue@rows": {
      // [Auto-translated] "Make the row visible if"
      visibleIf: "اجعل الصف مرئيا إذا",
      // [Auto-translated] "Make the row editable if"
      enableIf: "اجعل الصف قابلا للتحرير إذا"
    },
    imageitemvalue: {
      // "Alt text"
      text: "نص بديل"
    },
    // "Logo alignment"
    logoPosition: "Logo position",
    // "Add logo..."
    addLogo: "Add logo...",
    // "Change logo..."
    changeLogo: "Change logo...",
    logoPositions: {
      // "Remove logo"
      none: "حذف الشعار",
      // "Left"
      left: "يسار",
      // "Right"
      right: "يمين",
      // "On the top"
      top: "في الأعلى",
      // "In the bottom"
      bottom: "في الأسفل"
    },
    // [Auto-translated] "Preview mode"
    previewMode: "وضع المعاينة",
    // [Auto-translated] "Enable grid layout"
    gridLayoutEnabled: "تمكين تخطيط الشبكة",
    // [Auto-translated] "Grid columns"
    gridLayoutColumns: "أعمدة الشبكة",
    // [Auto-translated] "Mask settings"
    maskSettings: "إعدادات القناع",
    // [Auto-translated] "Row details error message alignment"
    detailErrorLocation: "محاذاة رسالة خطأ تفاصيل الصف",
    // Creator tabs
    tabs: {
      panel: {
        // [Auto-translated] "Panel Layout"
        layout: "تخطيط اللوحة"
      },
      // "General"
      general: "عام",
      // "Options"
      fileOptions: "الخيارات",
      // "HTML Editor"
      html: "Html Editor",
      // "Columns"
      columns: "الأعمدة",
      // "Rows"
      rows: "الصفوف",
      // "Choice Options"
      choices: "الخيارات",
      // "Items"
      items: "العناصر",
      // "Visible If"
      visibleIf: "مرئي عندما",
      // "Editable If"
      enableIf: "مفعل عندما",
      // "Required If"
      requiredIf: "مطلوب عندما",
      // "Rating Values"
      rateValues: "قيم التقييم",
      // [Auto-translated] "Slider Settings"
      sliderSettings: "إعدادات شريط التمرير",
      // "Choices from a Web Service"
      choicesByUrl: "خيارات من الإنترنت",
      // "Default Choices"
      matrixChoices: "Default Choices",
      // "Text Inputs"
      multipleTextItems: "Text Inputs",
      // "Numbering"
      numbering: "الترقيم",
      // "Validators"
      validators: "المدققات",
      // "Navigation"
      navigation: "التنقل",
      // "Question Settings"
      question: "السؤال",
      // "Pages"
      pages: "الصفحات",
      // "Quiz Mode"
      timer: "مؤقت/إختبار قصير",
      // "Calculated Values"
      calculatedValues: "Calculated Values",
      // "Triggers"
      triggers: "Triggers",
      // "Title template"
      templateTitle: "عنوان القالب",
      // "Totals"
      totals: "Totals",
      // "Conditions"
      logic: "المنطق",
      // [Auto-translated] "Input Mask Settings"
      mask: "إعدادات قناع الإدخال",
      layout: {
        // [Auto-translated] "Panel Layout"
        panel: "تخطيط اللوحة",
        // [Auto-translated] "Layout"
        question: "تخطيط",
        // [Auto-translated] "Layout"
        base: "تخطيط"
      },
      // "Data"
      data: "البيانات",
      // "Validation"
      validation: "التحقق",
      // "Individual Cell Texts"
      cells: "الخلايا",
      // "\"Thank You\" Page"
      showOnCompleted: "عند الإنتهاء من الإستبيان",
      // "Logo in the Survey Header"
      logo: "الشعار في عنوان الإستبيان",
      // "Slider"
      slider: "Slider",
      // [Auto-translated] "Expression"
      expression: "تعبير",
      // [Auto-translated] "Question Settings"
      questionSettings: "إعدادات السؤال",
      // "Header"
      header: "راس",
      // "Background"
      background: "خلفية",
      // "Appearance"
      appearance: "مظهر",
      // [Auto-translated] "Accent colors"
      accentColors: "ألوان مميزة",
      // [Auto-translated] "Surface background"
      surfaceBackground: "خلفية السطح",
      // [Auto-translated] "Scaling"
      scaling: "القياس",
      // "Others"
      others: "غير ذلك"
    },
    // "Edit property '{0}'"
    editProperty: "Edit property '{0}'",
    // "Items"
    items: "Items",
    // [Auto-translated] "Make choices visible if"
    choicesVisibleIf: "اجعل الخيارات مرئية إذا",
    // [Auto-translated] "Make choices selectable if"
    choicesEnableIf: "اجعل الخيارات قابلة للتحديد إذا",
    // [Auto-translated] "Make columns visible if"
    columnsEnableIf: "جعل الأعمدة مرئية إذا",
    // [Auto-translated] "Make rows visible if"
    rowsEnableIf: "جعل الصفوف مرئية إذا",
    // [Auto-translated] "Increase the inner indent"
    innerIndent: "زيادة المسافة البادئة الداخلية",
    // [Auto-translated] "Use answers from the last entry as default"
    copyDefaultValueFromLastEntry: "استخدام الإجابات من الإدخال الأخير كإعداد افتراضي",
    // "Please enter a value."
    enterNewValue: "Please, enter the value.",
    // "There are no questions in the survey."
    noquestions: "There is no any question in the survey.",
    // "Please create a trigger"
    createtrigger: "Please create a trigger",
    // "Press enter button to edit"
    titleKeyboardAdornerTip: "Press enter button to edit",
    // "Press enter button to edit item, press delete button to delete item, press alt plus arrow up or arrow down to move item"
    keyboardAdornerTip: "Press enter button to edit item, press delete button to delete item, press alt plus arrow up or arrow down to move item",
    // "On "
    triggerOn: "On ",
    // "Make pages visible"
    triggerMakePagesVisible: "Make pages visible:",
    // "Make elements visible"
    triggerMakeQuestionsVisible: "Make elements visible:",
    // "Complete the survey if successful."
    triggerCompleteText: "Complete the survey if succeed.",
    // "The trigger is not set"
    triggerNotSet: "The trigger is not set",
    // "Run if"
    triggerRunIf: "Run if",
    // "Change value of: "
    triggerSetToName: "Change value of: ",
    // "Copy value from: "
    triggerFromName: "Copy value from: ",
    // "Run this Expression"
    triggerRunExpression: "Run this Expression:",
    // "to: "
    triggerSetValue: "to: ",
    // "Go to the question"
    triggerGotoName: "Go to the question:",
    // "Do not put the variable into the survey result."
    triggerIsVariable: "Do not put the variable into the survey result.",
    // "Please enter a valid expression"
    triggerRunExpressionEmpty: "Please enter a valid expression",
    // [Auto-translated] "Type expression here..."
    emptyExpressionPlaceHolder: "اكتب التعبير هنا...",
    // "No file chosen"
    noFile: "No file choosen",
    // [Auto-translated] "Clear hidden question values"
    clearIfInvisible: "مسح قيم الأسئلة المخفية",
    // [Auto-translated] "Store values in the following property"
    valuePropertyName: "تخزين القيم في الخاصية التالية",
    // [Auto-translated] "Enable search-as-you-type"
    searchEnabled: "تمكين البحث حسب الكتابة",
    // [Auto-translated] "Hide selected items"
    hideSelectedItems: "إخفاء العناصر المحددة",
    // [Auto-translated] "Collapse the dropdown upon selection"
    closeOnSelect: "طي القائمة المنسدلة عند التحديد",
    // [Auto-translated] "Vertical alignment within cells"
    verticalAlign: "المحاذاة الرأسية داخل الخلايا",
    // [Auto-translated] "Alternate row colors"
    alternateRows: "ألوان الصفوف البديلة",
    // [Auto-translated] "Make columns visible if"
    columnsVisibleIf: "جعل الأعمدة مرئية إذا",
    // [Auto-translated] "Make rows visible if"
    rowsVisibleIf: "جعل الصفوف مرئية إذا",
    // [Auto-translated] "Placeholder text for the comment box"
    otherPlaceholder: "نص العنصر النائب لمربع التعليق",
    // [Auto-translated] "Placeholder text for Local file"
    filePlaceholder: "نص العنصر النائب للملف المحلي",
    // [Auto-translated] "Placeholder text for Camera"
    photoPlaceholder: "نص العنصر النائب للكاميرا",
    // [Auto-translated] "Placeholder text for Local file or Camera"
    fileOrPhotoPlaceholder: "نص العنصر النائب للملف المحلي أو الكاميرا",
    // [Auto-translated] "Rating icon"
    rateType: "أيقونة التصنيف",
    // [Auto-translated] "Ex.: https://api.example.com/books"
    url_placeholder: "مثال: https://api.example.com/books",
    // [Auto-translated] "Ex.: categories.fiction"
    path_placeholder: "مثال: فئات.خيال",
    // [Auto-translated] "Ex.: a)"
    questionStartIndex_placeholder: "مثال: أ)",
    // [Auto-translated] "Ex.: 6in"
    width_placeholder: "مثال: 6 بوصة",
    // [Auto-translated] "Ex.: 600px"
    minWidth_placeholder: "مثال: 600px",
    // [Auto-translated] "Ex.: 50%"
    maxWidth_placeholder: "مثال: 50٪",
    // "auto"
    imageHeight_placeholder: "تلقائي",
    // "auto"
    imageWidth_placeholder: "تلقائي",
    // [Auto-translated] "Ex.: 100px"
    itemTitleWidth_placeholder: "على سبيل المثال: 100 بكسل",
    theme: {
      // [Auto-translated] "Theme"
      themeName: "موضوع",
      // [Auto-translated] "Question appearance"
      isPanelless: "مظهر السؤال",
      // [Auto-translated] "Background and corner radius"
      editorPanel: "الخلفية ونصف قطر الزاوية",
      // [Auto-translated] "Background and corner radius"
      questionPanel: "الخلفية ونصف قطر الزاوية",
      // [Auto-translated] "Accent color"
      primaryColor: "لون التمييز",
      // [Auto-translated] "Panel and question box opacity"
      panelBackgroundTransparency: "عتامة اللوحة ومربع الأسئلة",
      // [Auto-translated] "Input element opacity"
      questionBackgroundTransparency: "عتامة عنصر الإدخال",
      // [Auto-translated] "Survey font size"
      fontSize: "حجم خط الاستطلاع",
      // [Auto-translated] "Survey scale factor"
      scale: "عامل مقياس المسح",
      // [Auto-translated] "Corner radius"
      cornerRadius: "نصف قطر الزاوية",
      // [Auto-translated] "Advanced mode"
      advancedMode: "الوضع المتقدم",
      // [Auto-translated] "Title font"
      pageTitle: "خط العنوان",
      // [Auto-translated] "Description font"
      pageDescription: "وصف الخط",
      // [Auto-translated] "Title font"
      questionTitle: "خط العنوان",
      // [Auto-translated] "Description font"
      questionDescription: "وصف الخط",
      // [Auto-translated] "Font"
      editorFont: "الخط",
      // [Auto-translated] "Opacity"
      backgroundOpacity: "العتامه", // Auto-generated string
      // [Auto-translated] "Survey font family"
      "--sjs-font-family": "عائلة خطوط الاستطلاع",
      // [Auto-translated] "Background color"
      "--sjs-general-backcolor-dim": "لون الخلفية",
      // [Auto-translated] "Accent background colors"
      "--sjs-primary-backcolor": "ألوان خلفية مميزة",
      // [Auto-translated] "Accent foreground colors"
      "--sjs-primary-forecolor": "ألوان مميزة في المقدمة",
      // [Auto-translated] "Error message colors"
      "--sjs-special-red": "ألوان رسالة الخطأ",
      // [Auto-translated] "Shadow effects"
      "--sjs-shadow-small": "تأثيرات الظل",
      // [Auto-translated] "Shadow effects"
      "--sjs-shadow-inner": "تأثيرات الظل",
      // [Auto-translated] "Colors"
      "--sjs-border-default": "الوان"
    },
    "header@header": {
      // [Auto-translated] "View"
      headerView: "منظر",
      // [Auto-translated] "Logo alignment"
      logoPosition: "محاذاة الشعار",
      // [Auto-translated] "Survey title font"
      surveyTitle: "خط عنوان الاستطلاع",
      // [Auto-translated] "Survey description font"
      surveyDescription: "خط وصف الاستطلاع",
      // [Auto-translated] "Survey title font"
      headerTitle: "خط عنوان الاستطلاع",
      // [Auto-translated] "Survey description font"
      headerDescription: "خط وصف الاستطلاع",
      // [Auto-translated] "Content area width"
      inheritWidthFrom: "عرض منطقة المحتوى",
      // [Auto-translated] "Text width"
      textAreaWidth: "عرض النص",
      // [Auto-translated] "Background color"
      backgroundColorSwitch: "لون الخلفية",
      // [Auto-translated] "Background image"
      backgroundImage: "صورة الخلفية",
      // [Auto-translated] "Opacity"
      backgroundImageOpacity: "العتامه",
      // [Auto-translated] "Overlap"
      overlapEnabled: "التداخل",
      // [Auto-translated] "Logo alignment"
      logoPositionX: "محاذاة الشعار",
      // [Auto-translated] "Survey title alignment"
      titlePositionX: "محاذاة عنوان الاستطلاع",
      // [Auto-translated] "Survey description alignment"
      descriptionPositionX: "محاذاة وصف الاستطلاع"
    }
  },
  // Property values
  pv: {
    // [Auto-translated] "true"
    "true": "صحيح",
    // [Auto-translated] "false"
    "false": "خطأ",
    // [Auto-translated] "Local file"
    file: "ملف محلي",
    // [Auto-translated] "Camera"
    camera: "كاميرا",
    // [Auto-translated] "Local file or Camera"
    "file-camera": "ملف محلي أو كاميرا",
    // "Inherit"
    inherit: "يَرث",
    // "Visible"
    show: "إظهار",
    // "Hidden"
    hide: "إخفاء",
    // "Inherit"
    default: "الإفتراضي",
    // "Initial"
    initial: "مبدئي",
    // "Random"
    random: "عشوائي",
    // "Collapsed"
    collapsed: "مقلص",
    // "Expanded"
    expanded: "موسع",
    // "None"
    none: "بلا",
    // "Ascending"
    asc: "تصاعدي",
    // "Descending"
    desc: "تنازلي",
    // "Indeterminate"
    indeterminate: "غير محدد",
    // [Auto-translated] "Selected"
    selected: "المحدد",
    // [Auto-translated] "Unselected"
    unselected: "محدد",
    // [Auto-translated] "decimal"
    decimal: "عشري",
    // [Auto-translated] "currency"
    currency: "عملة",
    // [Auto-translated] "percent"
    percent: "المائه",
    // "First panel is expanded"
    firstExpanded: "توسيع أول لوح",
    // "Hide question numbers"
    off: "إيقاف",
    // "List"
    list: "قائمة",
    // [Auto-translated] "Carousel"
    carousel: "دائري",
    // [Auto-translated] "Tabs"
    tab: "علامات التبويب",
    // "Panel navigator + Progress bar at the top"
    progressTop: "التقدم بالأعلى",
    // "Panel navigator + Progress bar at the bottom"
    progressBottom: "التقدم بالأسف",
    // "Panel navigator + Progress bar at the top and bottom"
    progressTopBottom: "التقدم بالأعلى والأسفل معاً",
    // "Horizontal"
    horizontal: "عرضي",
    // "Vertical"
    vertical: "عمودي",
    // "Top"
    top: "الأعلى",
    // "Bottom"
    bottom: "الأسفل",
    // "Top and bottom"
    topBottom: "الاعلى والأسفل",
    // "Both"
    both: "الكل",
    // "Left"
    left: "يسار",
    // "Right"
    right: "يمين",
    // [Auto-translated] "Center"
    center: "مركز",
    // [Auto-translated] "Left and right"
    leftRight: "اليسار واليمين",
    // [Auto-translated] "Middle"
    middle: "وسط",
    // [Auto-translated] "color"
    color: "لون",
    // [Auto-translated] "date"
    date: "تاريخ",
    // [Auto-translated] "datetime"
    datetime: "التاريخ والوقت",
    // [Auto-translated] "datetime-local"
    "datetime-local": "التاريخ والوقت-محلي",
    // [Auto-translated] "email"
    email: "البريد الإلكتروني",
    // [Auto-translated] "month"
    month: "شهر",
    // [Auto-translated] "number"
    number: "رقم",
    // [Auto-translated] "password"
    password: "شعار",
    // [Auto-translated] "range"
    range: "نطاق",
    // [Auto-translated] "tel"
    tel: "هاء.",
    // [Auto-translated] "text"
    text: "نص",
    // [Auto-translated] "time"
    time: "الوقت",
    // [Auto-translated] "url"
    url: "الرابط",
    // [Auto-translated] "week"
    week: "أسبوع",
    // "Hidden"
    hidden: "مخفي",
    // "Editable"
    edit: "التعديل",
    // "Read-only"
    display: "العرض",
    // [Auto-translated] "Contain"
    contain: "احتوى",
    // [Auto-translated] "Cover"
    cover: "غطاء",
    // [Auto-translated] "Fill"
    fill: "ملء",
    // [Auto-translated] "Next"
    next: "مقبل",
    // [Auto-translated] "Last"
    last: "آخر",
    // "Upon survey completion"
    onComplete: "عند الإنتهاء",
    // "When question gets hidden"
    onHidden: "عند الإخفال",
    // "When question or its panel/page gets hidden"
    onHiddenContainer: "عند إخفاء الحاوية",
    clearInvisibleValues: {
      // [Auto-translated] "Never"
      none: "أبدا"
    },
    clearIfInvisible: {
      // [Auto-translated] "Never"
      none: "أبدا"
    },
    // [Auto-translated] "Radio Buttons"
    radio: "ازرار",
    inputType: {
      // [Auto-translated] "Color"
      color: "لون",
      // [Auto-translated] "Date"
      date: "تاريخ",
      // [Auto-translated] "Date and Time"
      "datetime-local": "التاريخ والوقت",
      // [Auto-translated] "Email"
      email: "البريد الإلكتروني",
      // [Auto-translated] "Month"
      month: "شهر",
      // [Auto-translated] "Number"
      number: "رقم",
      // [Auto-translated] "Password"
      password: "شعار",
      // [Auto-translated] "Range"
      range: "نطاق",
      // [Auto-translated] "Phone Number"
      tel: "رقم الهاتف",
      // [Auto-translated] "Text"
      text: "نص",
      // [Auto-translated] "Time"
      time: "الوقت",
      // [Auto-translated] "URL"
      url: "الرابط",
      // [Auto-translated] "Week"
      week: "أسبوع"
    },
    sliderType: {
      // [Auto-translated] "Single-Value"
      single: "قيمة واحدة",
      // [Auto-translated] "Range"
      range: "نطاق"
    },
    tooltipVisibility: {
      // [Auto-translated] "Auto"
      auto: "تلقائي",
      // [Auto-translated] "Always"
      always: "دوما",
      // [Auto-translated] "Never"
      never: "أبدا"
    },
    notificationType: {
      // [Auto-translated] "Error"
      error: "خطأ",
      // [Auto-translated] "Warning"
      warning: "تحذير",
      // [Auto-translated] "Informational"
      info: "اعلاميه"
    },
    autocomplete: {
      // [Auto-translated] "Full Name"
      name: "الاسم الكامل",
      // [Auto-translated] "Prefix"
      "honorific-prefix": "بادئه",
      // [Auto-translated] "First Name"
      "given-name": "الاسم الأول",
      // [Auto-translated] "Middle Name"
      "additional-name": "الاسم الأوسط",
      // [Auto-translated] "Last Name"
      "family-name": "اسم العائلة",
      // [Auto-translated] "Suffix"
      "honorific-suffix": "لاحقه",
      // [Auto-translated] "Nickname"
      nickname: "لقب",
      // [Auto-translated] "Job Title"
      "organization-title": "المسمى الوظيفي",
      // [Auto-translated] "User Name"
      username: "اسم المستخدم",
      // [Auto-translated] "New Password"
      "new-password": "كلمة مرور جديدة",
      // [Auto-translated] "Current Password"
      "current-password": "كلمة المرور الحالية",
      // [Auto-translated] "Organization Name"
      organization: "اسم المنظمة",
      // [Auto-translated] "Full Street Address"
      "street-address": "عنوان الشارع بالكامل",
      // [Auto-translated] "Address Line 1"
      "address-line1": "سطر العنوان 1",
      // [Auto-translated] "Address Line 2"
      "address-line2": "سطر العنوان 2",
      // [Auto-translated] "Address Line 3"
      "address-line3": "سطر العنوان 3",
      // [Auto-translated] "Level 4 Address"
      "address-level4": "عنوان المستوى 4",
      // [Auto-translated] "Level 3 Address"
      "address-level3": "عنوان المستوى 3",
      // [Auto-translated] "Level 2 Address"
      "address-level2": "عنوان المستوى 2",
      // [Auto-translated] "Level 1 Address"
      "address-level1": "عنوان المستوى 1",
      // [Auto-translated] "Country Code"
      country: "رمز البلد",
      // [Auto-translated] "Country Name"
      "country-name": "اسم البلد",
      // [Auto-translated] "Postal Code"
      "postal-code": "الرمز البريدي",
      // [Auto-translated] "Cardholder Name"
      "cc-name": "اسم حامل البطاقة",
      // [Auto-translated] "Cardholder First Name"
      "cc-given-name": "الاسم الأول لحامل البطاقة",
      // [Auto-translated] "Cardholder Middle Name"
      "cc-additional-name": "الاسم الأوسط لحامل البطاقة",
      // [Auto-translated] "Cardholder Last Name"
      "cc-family-name": "الاسم الأخير لحامل البطاقة",
      // [Auto-translated] "Credit Card Number"
      "cc-number": "رقم بطاقة الائتمان",
      // [Auto-translated] "Expiration Date"
      "cc-exp": "تاريخ انتهاء الصلاحية",
      // [Auto-translated] "Expiration Month"
      "cc-exp-month": "شهر انتهاء الصلاحية",
      // [Auto-translated] "Expiration Year"
      "cc-exp-year": "سنة انتهاء الصلاحية",
      // [Auto-translated] "Card Security Code"
      "cc-csc": "رمز أمان البطاقة",
      // [Auto-translated] "Credit Card Type"
      "cc-type": "نوع بطاقة الائتمان",
      // [Auto-translated] "Transaction Currency"
      "transaction-currency": "عملة المعاملة",
      // [Auto-translated] "Transaction Amount"
      "transaction-amount": "مبلغ المعاملة",
      // [Auto-translated] "Preferred Language"
      language: "اللغة المفضلة",
      // [Auto-translated] "Birthday"
      bday: "عيد ميلاد",
      // [Auto-translated] "Birthday Day"
      "bday-day": "عيد ميلاد",
      // [Auto-translated] "Birthday Month"
      "bday-month": "شهر عيد الميلاد",
      // [Auto-translated] "Birthday Year"
      "bday-year": "سنة الميلاد",
      // [Auto-translated] "Gender"
      sex: "جنس",
      // [Auto-translated] "Website URL"
      url: "رابط الموقع",
      // [Auto-translated] "Profile Photo"
      photo: "صورة الملف الشخصي",
      // [Auto-translated] "Telephone Number"
      tel: "رقم الهاتف",
      // [Auto-translated] "Country Code for Phone"
      "tel-country-code": "رمز البلد للهاتف",
      // [Auto-translated] "National Telephone Number"
      "tel-national": "رقم الهاتف الوطني",
      // [Auto-translated] "Area Code"
      "tel-area-code": "رمز المنطقة",
      // [Auto-translated] "Local Phone Number"
      "tel-local": "رقم الهاتف المحلي",
      // [Auto-translated] "Local Phone Prefix"
      "tel-local-prefix": "بادئة الهاتف المحلي",
      // [Auto-translated] "Local Phone Suffix"
      "tel-local-suffix": "لاحقة الهاتف المحلي",
      // [Auto-translated] "Phone Extension"
      "tel-extension": "تحويلة الهاتف",
      // [Auto-translated] "Email Address"
      email: "عنوان البريد الإلكتروني",
      // [Auto-translated] "Instant Messaging Protocol"
      impp: "بروتوكول المراسلة الفورية"
    },
    maskType: {
      // [Auto-translated] "None"
      none: "اي",
      // [Auto-translated] "Pattern"
      pattern: "رسم",
      // [Auto-translated] "Numeric"
      numeric: "عددي",
      // [Auto-translated] "Date and Time"
      datetime: "التاريخ والوقت",
      // [Auto-translated] "Currency"
      currency: "عملة"
    },
    inputTextAlignment: {
      // [Auto-translated] "Auto"
      auto: "تلقائي",
      // [Auto-translated] "Left"
      left: "يسار",
      // [Auto-translated] "Right"
      right: "يمين"
    },
    // "All"
    all: "الكل",
    // "Page"
    page: "الصفحة",
    // "Survey"
    survey: "الإستبيان",
    // "When switching to the next page"
    onNextPage: "عند الإنتقال للصفحة التالية",
    // "After an answer is changed"
    onValueChanged: "إذا تغيرت القيمة",
    // "Before an answer is changed"
    onValueChanging: "عند تغيير القيمة",
    questionsOnPageMode: {
      // [Auto-translated] "Original structure"
      standard: "الهيكل الأصلي",
      // [Auto-translated] "Show all questions on one page"
      singlePage: "إظهار جميع الأسئلة في صفحة واحدة",
      // [Auto-translated] "Show single question per page"
      questionPerPage: "إظهار سؤال واحد لكل صفحة",
      // [Auto-translated] "Show single input field per page"
      inputPerPage: "إظهار حقل إدخال واحد لكل صفحة"
    },
    // "No preview"
    noPreview: "بلا عرض",
    // "Show all questions"
    showAllQuestions: "المعاينة مع جميع الأسئلة",
    // "Show answered questions only"
    showAnsweredQuestions: "المعاينة مع الأسئلة المجٌابة",
    // [Auto-translated] "Show all questions"
    allQuestions: "عرض جميع الأسئلة",
    // [Auto-translated] "Show answered questions only"
    answeredQuestions: "إظهار الأسئلة التي تمت الإجابة عليها فقط",
    // "Completed pages"
    pages: "الصفحات",
    // "Answered questions"
    questions: "الأسئلة",
    // "Answered required questions"
    requiredQuestions: "الأسئلة المطلوبة",
    // "Valid answers"
    correctQuestions: "الإجابات الصحيحة",
    // "Completed pages (button UI)"
    buttons: "الأزرار",
    // "Under the input field"
    underInput: "أسفل خانة الإدخال",
    // "Under the question title"
    underTitle: "أعلى العنوان",
    // "On lost focus"
    onBlur: "عند الطمس",
    // "While typing"
    onTyping: "عند الكتابة",
    // [Auto-translated] "Under the row"
    underRow: "تحت الصف",
    // [Auto-translated] "Under the row, display one section only"
    underRowSingle: "أسفل الصف، اعرض قسما واحدا فقط",
    // "Auto"
    auto: "تلقائي",
    timerInfoMode: {
      // "Both"
      combined: "كلا"
    },
    addRowButtonLocation: {
      // [Auto-translated] "Based on matrix layout"
      default: "بناء على تخطيط المصفوفة"
    },
    panelsState: {
      // [Auto-translated] "Locked"
      default: "مقفل",
      // [Auto-translated] "Collapse all"
      collapsed: "طي الكل",
      // [Auto-translated] "Expand all"
      expanded: "توسيع الكل",
      // [Auto-translated] "First expanded"
      firstExpanded: "توسعت لأول مرة"
    },
    widthMode: {
      // [Auto-translated] "Static"
      static: "ثابت",
      // [Auto-translated] "Responsive"
      responsive: "متجاوب"
    },
    contentMode: {
      // [Auto-translated] "Image"
      image: "صورة",
      // [Auto-translated] "Video"
      video: "فيديو",
      // [Auto-translated] "YouTube"
      youtube: "يوتيوب"
    },
    displayMode: {
      // [Auto-translated] "Buttons"
      buttons: "ازرار",
      // [Auto-translated] "Dropdown"
      dropdown: "القائمة المنسدلة"
    },
    rateColorMode: {
      // [Auto-translated] "Default"
      default: "افتراضي",
      // [Auto-translated] "Scale"
      scale: "مِيزَان"
    },
    scaleColorMode: {
      // [Auto-translated] "Monochrome"
      monochrome: "أحادي اللون",
      // [Auto-translated] "Colored"
      colored: "الملونه"
    },
    autoGenerate: {
      // [Auto-translated] "Auto-generate"
      "true": "التوليد التلقائي",
      // [Auto-translated] "Manual"
      "false": "يدوي"
    },
    rateType: {
      // [Auto-translated] "Labels"
      labels: "تسميات",
      // [Auto-translated] "Stars"
      stars: "النجوم",
      // [Auto-translated] "Smileys"
      smileys: "الوجوه الضاحكة"
    },
    state: {
      // [Auto-translated] "Locked"
      default: "مقفل"
    },
    showQuestionNumbers: {
      // [Auto-translated] "Auto-numbering"
      default: "الترقيم التلقائي",
      // [Auto-translated] "Auto-numbering"
      on: "الترقيم التلقائي",
      // [Auto-translated] "Reset on each page"
      onPage: "إعادة تعيين على كل صفحة",
      // [Auto-translated] "Reset on each panel"
      onpanel: "إعادة التعيين على كل لوحة",
      // [Auto-translated] "Reset on each panel"
      onPanel: "إعادة تعيين على كل لوحة",
      // [Auto-translated] "Recursive numbering"
      recursive: "الترقيم المتكرر",
      // [Auto-translated] "Continue across the survey"
      onSurvey: "المتابعة عبر الاستطلاع",
      // [Auto-translated] "No numbering"
      off: "لا ترقيم"
    },
    descriptionLocation: {
      // [Auto-translated] "Under the question title"
      underTitle: "تحت عنوان السؤال",
      // [Auto-translated] "Under the input field"
      underInput: "ضمن حقل الإدخال"
    },
    selectToRankAreasLayout: {
      // [Auto-translated] "Next to choices"
      horizontal: "بجانب الخيارات",
      // [Auto-translated] "Above choices"
      vertical: "الخيارات أعلاه"
    },
    displayStyle: {
      // [Auto-translated] "Decimal"
      decimal: "عشري",
      // [Auto-translated] "Currency"
      currency: "عملة",
      // [Auto-translated] "Percentage"
      percent: "النسبه المئويه",
      // [Auto-translated] "Date"
      date: "تاريخ"
    },
    totalDisplayStyle: {
      // [Auto-translated] "Decimal"
      decimal: "عشري",
      // [Auto-translated] "Currency"
      currency: "عملة",
      // [Auto-translated] "Percentage"
      percent: "النسبه المئويه",
      // [Auto-translated] "Date"
      date: "تاريخ"
    },
    rowOrder: {
      // [Auto-translated] "Original"
      initial: "اللغة الأصلية"
    },
    questionOrder: {
      // [Auto-translated] "Original"
      initial: "اللغة الأصلية"
    },
    progressBarLocation: {
      // [Auto-translated] "Top"
      top: "أعلى",
      // [Auto-translated] "Bottom"
      bottom: "قاع",
      // [Auto-translated] "Top and bottom"
      topbottom: "أعلى وأسفل",
      // [Auto-translated] "Above the header"
      aboveheader: "أعلى الرأس",
      // [Auto-translated] "Below the header"
      belowheader: "أسفل العنوان",
      // [Auto-translated] "Hidden"
      off: "مخفي"
    },
    // [Auto-translated] "Sum"
    sum: "مجموع",
    // [Auto-translated] "Count"
    count: "عد",
    // [Auto-translated] "Min"
    min: "دقيقه",
    // [Auto-translated] "Max"
    max: "ماكس",
    // [Auto-translated] "Avg"
    avg: "متوسط",
    searchMode: {
      // [Auto-translated] "Contains"
      contains: "يحتوي",
      // [Auto-translated] "Starts with"
      startsWith: "يبدأ ب"
    },
    backgroundImageFit: {
      // [Auto-translated] "Auto"
      auto: "تلقائي",
      // [Auto-translated] "Cover"
      cover: "غطاء",
      // [Auto-translated] "Contain"
      contain: "احتوى",
      // [Auto-translated] "Stretch"
      fill: "مد",
      // [Auto-translated] "Tile"
      tile: "بلاط"
    },
    backgroundImageAttachment: {
      // [Auto-translated] "Fixed"
      fixed: "ثابت",
      // [Auto-translated] "Scroll"
      scroll: "طومار"
    },
    headerView: {
      // [Auto-translated] "Basic"
      basic: "أساسي",
      // [Auto-translated] "Advanced"
      advanced: "متقدم"
    },
    inheritWidthFrom: {
      // [Auto-translated] "Same as survey"
      survey: "نفس المسح",
      // [Auto-translated] "Same as container"
      container: "مثل الحاوية"
    },
    backgroundColorSwitch: {
      // [Auto-translated] "None"
      none: "اي",
      // [Auto-translated] "Accent color"
      accentColor: "لون التمييز",
      // [Auto-translated] "Custom"
      custom: "تقليد"
    },
    colorPalette: {
      // [Auto-translated] "Light"
      light: "ضوء",
      // [Auto-translated] "Dark"
      dark: "داكن"
    },
    isPanelless: {
      // [Auto-translated] "Default"
      "false": "افتراضي",
      // [Auto-translated] "Without Panels"
      "true": "بدون لوحات"
    },
    progressBarInheritWidthFrom: {
      // [Auto-translated] "Same as survey"
      survey: "نفس المسح",
      // [Auto-translated] "Same as container"
      container: "نفس الحاوية"
    }
  },
  // Operators
  op: {
    // "Empty"
    empty: "فارغة",
    // "Not empty"
    notempty: "ليست فارغة",
    // "Equals"
    equal: "تساوي",
    // "Does not equal"
    notequal: "لا تساوي",
    // "Contains"
    contains: "تحتوي",
    // "Does not contain"
    notcontains: "لا تحتوي",
    // "Any of"
    anyof: "أي من",
    // "All of"
    allof: "كلاً من",
    // "Greater than"
    greater: "أكبر",
    // "Less than"
    less: "أقل",
    // "Greater than or equal to"
    greaterorequal: "أكبر أو يساوي",
    // "Less than or equal to"
    lessorequal: "أقل أو يساوي",
    // [Auto-translated] "and"
    and: "و",
    // [Auto-translated] "or"
    or: "أو"
  },
  // Embed window
  ew: {
    // "Use Angular version"
    angular: "Use Angular version",
    // "Use jQuery version"
    jquery: "Use jQuery version",
    // "Use Knockout version"
    knockout: "Use Knockout version",
    // "Use React version"
    react: "Use React version",
    // "Use Vue version"
    vue: "Use Vue version",
    // "For bootstrap framework"
    bootstrap: "For bootstrap framework",
    // "Modern theme"
    modern: "Modern theme",
    // "Default theme"
    default: "Default theme",
    // "Orange theme"
    orange: "Orange theme",
    // "Darkblue theme"
    darkblue: "Darkblue theme",
    // "Darkrose theme"
    darkrose: "Darkrose theme",
    // "Stone theme"
    stone: "Stone theme",
    // "Winter theme"
    winter: "Winter theme",
    // "Winter-Stone theme"
    winterstone: "Winter-Stone theme",
    // "Show survey on a page"
    showOnPage: "Show survey on a page",
    // "Show survey in a window"
    showInWindow: "Show survey in a window",
    // "Load Survey JSON from server"
    loadFromServer: "Load Survey JSON from server",
    // "Scripts and styles"
    titleScript: "Scripts and styles",
    // "HTML"
    titleHtml: "HTML",
    // "JavaScript"
    titleJavaScript: "JavaScript"
  },
  // Preview (Survey)
  ts: {
    // "Select the page to test it"
    selectPage: "Select the page to test it:",
    // "Show invisible elements"
    showInvisibleElements: "إظهار العناصر المخفية",
    // [Auto-translated] "Hide invisible elements"
    hideInvisibleElements: "إخفاء العناصر غير المرئية",
    // [Auto-translated] "Previous"
    prevPage: "سابق",
    // [Auto-translated] "Next"
    nextPage: "مقبل"
  },
  validators: {
    // "Answer count"
    answercountvalidator: "answer count",
    // "Email"
    emailvalidator: "بريد إلكتروني",
    // "Expression"
    expressionvalidator: "عملية حسابية",
    // "Number"
    numericvalidator: "رقمية",
    // "Regex"
    regexvalidator: "تعبير رياضي",
    // "Text"
    textvalidator: "النص"
  },
  triggers: {
    // "Complete survey"
    completetrigger: "إنهاء الإستبيان",
    // "Set answer"
    setvaluetrigger: "تحديد قيمة",
    // "Copy answer"
    copyvaluetrigger: "نسخ قيمة",
    // "Skip to question"
    skiptrigger: "الإنتقال إلى سؤال",
    // "Run expression"
    runexpressiontrigger: "تشغيل العملية الحسابية",
    // "change visibility (deprecated)"
    visibletrigger: "تغيير الرؤية (مهمل)"
  },
  peplaceholder: {
    patternmask: {
      // "Ex.: +1(999)-999-99-99"
      pattern: "مثال: +1 (999) -999-99-99"
    },
    datetimemask: {
      // "Ex.: mm/dd/yyyy HH:MM:ss"
      pattern: "مثال: مم / يوم / سنة"
    },
    currencymask: {
      // "Ex.: $"
      prefix: "مثال: $",
      // "Ex.: USD"
      suffix: "مثال: الدولار الأمريكي"
    },
    panelbase: {
      // [Auto-translated] "Ex.: 200px"
      questionTitleWidth: "مثال: 200 بكسل"
    },
    panellayoutcolumn: {
      // "Ex.: 30%"
      effectiveWidth: "مثال: 30٪",
      // "Ex.: 200px"
      questionTitleWidth: "مثال: 200 بكسل"
    }
  },
  pehelp: {
    panel: {
      // "A panel ID that is not visible to respondents."
      name: "معرف لوحة غير مرئي للمستجيبين.",
      // [Auto-translated] "Type a panel subtitle."
      description: "اكتب عنوانا فرعيا للوحة.",
      // "Use the magic wand icon to set a conditional rule that determines panel visibility."
      visibleIf: "استخدم أيقونة العصا السحرية لضبط قاعدة شرطية تحدد رؤية اللوحة.",
      // [Auto-translated] "Use the magic wand icon to set a conditional rule that disables the read-only mode for the panel."
      enableIf: "استخدم أيقونة العصا السحرية لتعيين قاعدة شرطية تعطل وضع القراءة فقط للوحة.",
      // "Use the magic wand icon to set a conditional rule that prevents survey submission unless at least one nested question has an answer."
      requiredIf: "استخدم أيقونة العصا السحرية لتعيين قاعدة شرطية تمنع إرسال الاستطلاع ما لم يكن لسؤال واحد متداخل على الأقل إجابة.",
      // [Auto-translated] "Applies to all questions within this panel. When set to \"Hidden\", it also hides question descriptions. If you want to override this setting, define title alignment rules for individual questions. The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Top\" by default). "
      questionTitleLocation: "ينطبق على جميع الأسئلة الواردة في هذه اللوحة. عند التعيين على \"مخفي\" ، فإنه يخفي أيضا أوصاف الأسئلة. إذا كنت تريد إلغاء هذا الإعداد، فحدد قواعد محاذاة العنوان للأسئلة الفردية. يطبق خيار \"الوراثة\" الإعداد على مستوى الصفحة (إذا تم تعيينه) أو الإعداد على مستوى الاستطلاع (\"أعلى\" بشكل افتراضي). ",
      // [Auto-translated] "Sets consistent width for question titles when they are aligned to the left of their question boxes. Accepts CSS values (px, %, in, pt, etc.)."
      questionTitleWidth: "يعين عرضا متناسقا لعناوين الأسئلة عندما تتم محاذاتها إلى يسار مربعات الأسئلة الخاصة بها. يقبل قيم CSS (px ، ٪ ، in ، pt ، إلخ).",
      // "Sets the location of an error message in relation to all questions within the panel. The \"Inherit\" option applies the page-level (if set) or survey-level setting."
      questionErrorLocation: "تعيين موقع رسالة خطأ فيما يتعلق بجميع الأسئلة داخل اللوحة. يطبق خيار \"الوراثة\" الإعداد على مستوى الصفحة (إذا تم تعيينه) أو على مستوى الاستطلاع.",
      // [Auto-translated] "Keeps the original order of questions or randomizes them. The \"Inherit\" option applies the page-level (if set) or survey-level setting."
      questionOrder: "يحتفظ بالترتيب الأصلي للأسئلة أو يصنفها بشكل عشوائي. يطبق خيار \"الوراثة\" الإعداد على مستوى الصفحة (إذا تم تعيينه) أو على مستوى الاستطلاع.",
      // "Repositions the panel to the end of a selected page."
      page: "تغيير موضع اللوحة إلى نهاية الصفحة المحددة.",
      // [Auto-translated] "Adds space or margin between the panel content and the left border of the panel box."
      innerIndent: "يضيف مسافة أو هامش بين محتوى اللوحة والحد الأيسر لمربع اللوحة.",
      // "Unselect to display the panel in one line with the previous question or panel. The setting doesn't apply if the panel is the first element in your form."
      startWithNewLine: "قم بإلغاء التحديد لعرض اللوحة في سطر واحد مع السؤال أو اللوحة السابقة. لا ينطبق الإعداد إذا كانت اللوحة هي العنصر الأول في النموذج الخاص بك.",
      // "Choose from: \"Expanded\" - the panel is displayed in full and can be collapsed; \"Collapsed\" - the panel displays only the title and description and can be expanded; \"Locked\" - the panel is displayed in full and cannot be collapsed."
      state: "اختر من بين: \"موسعة\" - يتم عرض اللوحة بالكامل ويمكن طيها ؛ \"مطوي\" - تعرض اللوحة العنوان والوصف فقط ويمكن توسيعها ؛ \"مغلق\" - يتم عرض اللوحة بالكامل ولا يمكن طيها.",
      // [Auto-translated] "Sets the width of the panel in proportion to other survey elements in the same line. Accepts CSS values (px, %, in, pt, etc.)."
      width: "لتعيين عرض اللوحة بما يتناسب مع عناصر الاستطلاع الأخرى في نفس السطر. يقبل قيم CSS (بكسل ، ٪ ، في ، pt ، إلخ).",
      // [Auto-translated] "Assigns numbers to questions nested within this panel."
      showQuestionNumbers: "يعين الأرقام للأسئلة المتداخلة داخل هذه اللوحة.",
      // [Auto-translated] "Specifies how many columns this panel spans within the grid layout."
      effectiveColSpan: "يحدد عدد الأعمدة التي تمتد إليها هذه اللوحة داخل تخطيط الشبكة.",
      // [Auto-translated] "This table lets you configure each grid column within the panel. It automatically sets the width percentage for each column based on the maximum number of elements in a row. To customize the grid layout, manually adjust these values and define the title width for all questions in each column."
      gridLayoutColumns: "يتيح لك هذا الجدول تكوين كل عمود شبكة داخل اللوحة. يقوم تلقائيا بتعيين النسبة المئوية للعرض لكل عمود بناء على الحد الأقصى لعدد العناصر في الصف. لتخصيص تخطيط الشبكة، اضبط هذه القيم يدويا وحدد عرض العنوان لكافة الأسئلة في كل عمود."
    },
    paneldynamic: {
      // "A panel ID that is not visible to respondents."
      name: "معرف لوحة غير مرئي للمستجيبين.",
      // "Type a panel subtitle."
      description: "اكتب عنوانا فرعيا للوحة.",
      // "Use the magic wand icon to set a conditional rule that determines panel visibility."
      visibleIf: "استخدم أيقونة العصا السحرية لضبط قاعدة شرطية تحدد رؤية اللوحة.",
      // [Auto-translated] "Use the magic wand icon to set a conditional rule that disables the read-only mode for the panel."
      enableIf: "استخدم أيقونة العصا السحرية لتعيين قاعدة شرطية تعطل وضع القراءة فقط للوحة.",
      // "Use the magic wand icon to set a conditional rule that prevents survey submission unless at least one nested question has an answer."
      requiredIf: "استخدم أيقونة العصا السحرية لتعيين قاعدة شرطية تمنع إرسال الاستطلاع ما لم يكن لسؤال واحد متداخل على الأقل إجابة.",
      // "Applies to all questions within this dynamic panel. If you want to override this setting, define title alignment rules for individual questions. The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Top\" by default)."
      templateQuestionTitleLocation: "ينطبق على جميع الأسئلة داخل هذه اللجنة. إذا كنت تريد إلغاء هذا الإعداد، فحدد قواعد محاذاة العنوان للأسئلة الفردية. يطبق خيار \"الوراثة\" الإعداد على مستوى الصفحة (إذا تم تعيينه) أو على مستوى الاستطلاع (\"أعلى\" افتراضيا).",
      // "Sets consistent width for question titles when they are aligned to the left of their question boxes. Accepts CSS values (px, %, in, pt, etc.)."
      templateQuestionTitleWidth: "تعيين عرض متسق لعناوين الأسئلة عند محاذاتها إلى يسار مربعات الأسئلة الخاصة بها. يقبل قيم CSS (بكسل ، ٪ ، في ، pt ، إلخ).",
      // "Sets the location of an error message in relation to a question with invalid input. Choose between: \"Top\" - an error text is placed at the top of the question box; \"Bottom\" - an error text is placed at the bottom of the question box. The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Top\" by default)."
      templateErrorLocation: "تعيين موقع رسالة خطأ فيما يتعلق بسؤال بإدخال غير صالح. اختر بين: \"أعلى\" - يتم وضع نص خطأ في أعلى مربع السؤال ؛ \"أسفل\" - يتم وضع نص خطأ في أسفل مربع السؤال. يطبق خيار \"الوراثة\" الإعداد على مستوى الصفحة (إذا تم تعيينه) أو على مستوى الاستطلاع (\"أعلى\" افتراضيا).",
      // "Sets the location of an error message in relation to all questions within the panel. The \"Inherit\" option applies the page-level (if set) or survey-level setting."
      errorLocation: "تعيين موقع رسالة خطأ فيما يتعلق بجميع الأسئلة داخل اللوحة. يطبق خيار \"الوراثة\" الإعداد على مستوى الصفحة (إذا تم تعيينه) أو على مستوى الاستطلاع.",
      // "Repositions the panel to the end of a selected page."
      page: "تغيير موضع اللوحة إلى نهاية الصفحة المحددة.",
      // [Auto-translated] "Adds space or margin between the panel content and the left border of the panel box."
      indent: "يضيف مسافة أو هامشا بين محتوى اللوحة والحد الأيسر لمربع اللوحة.",
      // "Unselect to display the panel in one line with the previous question or panel. The setting doesn't apply if the panel is the first element in your form."
      startWithNewLine: "قم بإلغاء التحديد لعرض اللوحة في سطر واحد مع السؤال أو اللوحة السابقة. لا ينطبق الإعداد إذا كانت اللوحة هي العنصر الأول في النموذج الخاص بك.",
      // "Choose from: \"Expanded\" - the panel is displayed in full and can be collapsed; \"Collapsed\" - the panel displays only the title and description and can be expanded; \"Locked\" - the panel is displayed in full and cannot be collapsed."
      state: "اختر من بين: \"موسعة\" - يتم عرض اللوحة بالكامل ويمكن طيها ؛ \"مطوي\" - تعرض اللوحة العنوان والوصف فقط ويمكن توسيعها ؛ \"مغلق\" - يتم عرض اللوحة بالكامل ولا يمكن طيها.",
      // "Sets the width of the panel in proportion to other survey elements in the same line. Accepts CSS values (px, %, in, pt, etc.)."
      width: "يضبط عرض اللوحة بما يتناسب مع عناصر الاستطلاع الأخرى في نفس السطر. يقبل قيم CSS (px ، ٪ ، in ، pt ، إلخ).",
      // "Type in a template for entry titles. Use {panelIndex} for the entry's general position and {visiblePanelIndex} for its order among visible entries. Insert these placeholders into the pattern to add automatic numbering."
      templateTitle: "اكتب قالبا لعناوين اللوحات الديناميكية. استخدم {panelIndex} للموضع العام لللوحة و {visiblePanelIndex} لترتيبها بين اللوحات المرئية. قم بإدراج هذه العناصر النائبة في النموذج لإضافة ترقيم تلقائي.",
      // "Type in a template for tab titles. Use {panelIndex} for an entry's general position and {visiblePanelIndex} for its order among visible entries. Insert these placeholders into the pattern to add automatic numbering."
      templateTabTitle: "اكتب قالبا لعناوين علامات التبويب. استخدم {panelIndex} للموضع العام للوحة و {visiblePanelIndex} لترتيبها بين اللوحات المرئية. قم بإدراج هذه العناصر النائبة في النموذج لإضافة ترقيم تلقائي.",
      // "A fallback text for tab titles that applies when the tab title pattern doesn't produce a meaningful value."
      tabTitlePlaceholder: "نص احتياطي لعناوين علامات التبويب يتم تطبيقه عندما لا ينتج نمط عنوان علامة التبويب قيمة ذات معنى.",
      // "This setting allows you to control the visibility of individual entries within the dynamic panel. Use the `{panel}` placeholder to reference the current entry in your expression."
      templateVisibleIf: "يتيح لك هذا الإعداد التحكم في رؤية اللوحات الفردية داخل اللوحة الديناميكية. استخدم العنصر النائب \"{panel}\" للإشارة إلى اللوحة الحالية في تعبيرك.",
      // "This setting is automatically inherited by all questions within this dynamic panel. If you want to override this setting, define title alignment rules for individual questions. The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Top\" by default)."
      titleLocation: "يتم توريث هذا الإعداد تلقائيا من خلال جميع الأسئلة داخل هذه اللوحة. إذا كنت تريد إلغاء هذا الإعداد، فحدد قواعد محاذاة العنوان للأسئلة الفردية. يطبق خيار \"الوراثة\" الإعداد على مستوى الصفحة (إذا تم تعيينه) أو على مستوى الاستطلاع (\"أعلى\" افتراضيا).",
      // "The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Under the panel title\" by default)."
      descriptionLocation: "يطبق خيار \"الوراثة\" الإعداد على مستوى الصفحة (إذا تم تعيينه) أو على مستوى الاستطلاع (\"تحت عنوان اللوحة\" افتراضيا).",
      // "Defines the position of a newly added entry. By default, new entries are added to the end. Select \"Next\" to insert a new entry after the current one."
      newPanelPosition: "يحدد موضع اللوحة المضافة حديثا. بشكل افتراضي ، تتم إضافة لوحات جديدة إلى النهاية. حدد \"التالي\" لإدراج لوحة جديدة بعد اللوحة الحالية.",
      // [Auto-translated] "Duplicates answers from the last entry and assigns them to the next added entry."
      copyDefaultValueFromLastEntry: "يكرر الإجابات من الإدخال الأخير ويعينها إلى الإدخال المضاف التالي.",
      // "Reference a question name to require a user to provide a unique response for this question in each entry."
      keyName: "قم بالإشارة إلى اسم سؤال لمطالبة المستخدم بتقديم إجابة فريدة لهذا السؤال في كل لوحة.",
      // [Auto-translated] "Triggers a confirmation prompt before removing an entry."
      confirmDelete: "لتشغيل مطالبة تأكيد قبل إزالة إدخال."
    },
    matrixdynamic: {
      // [Auto-translated] "Triggers a confirmation prompt before removing a row."
      confirmDelete: "يؤدي إلى تشغيل مطالبة تأكيد قبل إزالة صف.",
      // [Auto-translated] "Automatically expands the detail section when a new row is added to the matrix."
      detailPanelShowOnAdding: "يوسع قسم التفاصيل تلقائيا عند إضافة صف جديد إلى المصفوفة."
    },
    // "Duplicates answers from the last row and assigns them to the next added dynamic row."
    copyDefaultValueFromLastEntry: "يكرر الإجابات من الصف الأخير ويعينها إلى الصف الديناميكي المضاف التالي.",
    // [Auto-translated] "This setting allows you to assign a default answer value based on an expression. The expression can include basic calculations - `{q1_id} + {q2_id}`, Boolean expressions, such as `{age} > 60`, and functions: `iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, etc. The value determined by this expression serves as the initial default value that can be overridden by a respondent's manual input."
    defaultValueExpression: "يسمح لك هذا الإعداد بتعيين قيمة إجابة افتراضية استنادا إلى تعبير. يمكن أن يتضمن التعبير حسابات أساسية - '{q1_id} + {q2_id}' ، والتعبيرات المنطقية ، مثل '{age} > 60' ، والدوالات: 'iif ()' ، 'today ()' ، 'age ()' ، 'min ()' ، 'max ()' ، 'avg ()' ، إلخ. تعمل القيمة التي يحددها هذا التعبير كقيمة افتراضية أولية يمكن تجاوزها بواسطة الإدخال اليدوي للمستجيب.",
    // "Use the magic wand icon to set a conditional rule that determines when a respondent's input is reset to the value based on the \"Default value expression\" or \"Set value expression\" or to the \"Default answer\" value (if either is set)."
    resetValueIf: "استخدم أيقونة العصا السحرية لتعيين قاعدة شرطية تحدد متى تتم إعادة تعيين إدخال المستجيب إلى القيمة استنادا إلى \"تعبير القيمة الافتراضية\" أو \"تعيين تعبير القيمة\" أو إلى قيمة \"الإجابة الافتراضية\" (إذا تم تعيين أي منهما).",
    // "Use the magic wand icon to set a conditional rule that determines when to run the \"Set value expression\" and dynamically assign the resulting value as a response."
    setValueIf: "استخدم رمز العصا السحرية لتعيين قاعدة شرطية تحدد وقت تشغيل \"تعيين تعبير القيمة\" وتعيين القيمة الناتجة ديناميكيا كاستجابة.",
    // "Specify an expression that defines the value to be set when the conditions in the \"Set value if\" rule are met. The expression can include basic calculations - `{q1_id} + {q2_id}`, Boolean expressions, such as `{age} > 60`, and functions: `iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, etc. The value determined by this expression can be overridden by a respondent's manual input."
    setValueExpression: "حدد تعبيرا يحدد القيمة المراد تعيينها عند استيفاء الشروط الواردة في قاعدة \"تعيين القيمة إذا\". يمكن أن يتضمن التعبير حسابات أساسية - '{q1_id} + {q2_id}' ، والتعبيرات المنطقية ، مثل '{age} > 60' ، والدوالات: 'iif ()' ، 'today ()' ، 'age ()' ، 'min ()' ، 'max ()' ، 'avg ()' ، إلخ. يمكن تجاوز القيمة التي يحددها هذا التعبير بواسطة الإدخال اليدوي للمستجيب.",
    // "Survey Creator allows you to manually adjust the inline widths of form elements to control the layout. If this doesn't produce the desired outcome, you can enable the grid layout, which structures form elements using a column-based system. To configure layout columns, select a page or panel and use the \"Question Settings\" → \"Grid columns\" table. To adjust how many columns a question spans, select it and set the desired value in the \"Layout\" → \"Column span\" field."
    gridLayoutEnabled: "يسمح لك Survey Creator بضبط العروض المضمنة لعناصر النموذج يدويا للتحكم في التخطيط. إذا لم يؤد ذلك إلى النتيجة المرجوة، فيمكنك تمكين تخطيط الشبكة، الذي يقوم ببناء عناصر التشكيل باستخدام نظام قائم على الأعمدة. لتكوين أعمدة التخطيط، حدد صفحة أو لوحة واستخدم جدول \"إعدادات الأسئلة\" → \"أعمدة الشبكة\". لضبط عدد الأعمدة التي يمتد إليها السؤال، حدده وقم بتعيين القيمة المطلوبة في حقل \"التخطيط\" → \"امتداد العمود\".",
    question: {
      // "A question ID that is not visible to respondents."
      name: "معرف سؤال غير مرئي للمستجيبين.",
      // "Type a question subtitle."
      description: "اكتب عنوانا فرعيا للسؤال.",
      // "Use the magic wand icon to set a conditional rule that determines question visibility."
      visibleIf: "استخدم أيقونة العصا السحرية لتعيين قاعدة شرطية تحدد رؤية السؤال.",
      // [Auto-translated] "Use the magic wand icon to set a conditional rule that disables the read-only mode for the question."
      enableIf: "استخدم أيقونة العصا السحرية لتعيين قاعدة شرطية تعطل وضع القراءة فقط للسؤال.",
      // "Use the magic wand icon to set a conditional rule that prevents survey advancing or submission unless the question received an answer."
      requiredIf: "استخدم أيقونة العصا السحرية لتعيين قاعدة شرطية تمنع تقدم الاستطلاع أو إرساله ما لم يتلق السؤال إجابة.",
      // [Auto-translated] "Unselect to display the question in one line with the previous question or panel. The setting doesn't apply if the question is the first element in your form."
      startWithNewLine: "قم بإلغاء التحديد لعرض السؤال في سطر واحد مع السؤال أو اللوحة السابقة. لا ينطبق الإعداد إذا كان السؤال هو العنصر الأول في النموذج الخاص بك.",
      // "Repositions the question to the end of a selected page."
      page: "تغيير موضع السؤال إلى نهاية الصفحة المحددة.",
      // "Choose from: \"Expanded\" - the question box is displayed in full and can be collapsed; \"Collapsed\" - the question box displays only the title and description and can be expanded; \"Locked\" - the question box is displayed in full and cannot be collapsed."
      state: "اختر من بين: \"موسع\" - يتم عرض مربع السؤال بالكامل ويمكن طيه ؛ \"مطوي\" - يعرض مربع الأسئلة العنوان والوصف فقط ويمكن توسيعه ؛ \"مقفل\" - يتم عرض مربع الأسئلة بالكامل ولا يمكن طيه.",
      // "Overrides title alignment rules defined on a panel, page, or survey level. When set to \"Hidden\", it also hides question descriptions. The \"Inherit\" option applies any higher-level settings (if set) or survey-level setting (\"Top\" by default)."
      titleLocation: "يتجاوز قواعد محاذاة العنوان المحددة على مستوى اللوحة أو الصفحة أو الاستطلاع. يطبق خيار \"الوراثة\" أي إعدادات ذات مستوى أعلى (إذا تم تعيينها) أو إعداد على مستوى الاستطلاع (\"أعلى\" افتراضيا).",
      // "The \"Inherit\" option applies the survey-level setting (\"Under the question title\" by default)."
      descriptionLocation: "يطبق خيار \"الوراثة\" الإعداد على مستوى الاستطلاع (\"ضمن عنوان السؤال\" افتراضيا).",
      // "Sets the location of an error message in relation to the question with invalid input. Choose between: \"Top\" - an error text is placed at the top of the question box; \"Bottom\" - an error text is placed at the bottom of the question box. The \"Inherit\" option applies the survey-level setting (\"Top\" by default)."
      errorLocation: "تعيين موقع رسالة خطأ فيما يتعلق بالسؤال مع إدخال غير صالح. اختر بين: \"أعلى\" - يتم وضع نص خطأ في أعلى مربع السؤال ؛ \"أسفل\" - يتم وضع نص خطأ في أسفل مربع السؤال. يطبق خيار \"الوراثة\" إعداد مستوى الاستطلاع (\"أعلى\" افتراضيا).",
      // "Adds space or margin between the question content and the left border of the question box."
      indent: "إضافة مسافة أو هامش بين محتوى السؤال والحد الأيسر لمربع السؤال.",
      // "Sets the width of the question in proportion to other survey elements in the same line. Accepts CSS values (px, %, in, pt, etc.)."
      width: "يضبط عرض السؤال بما يتناسب مع عناصر الاستطلاع الأخرى في نفس السطر. يقبل قيم CSS (px ، ٪ ، in ، pt ، إلخ).",
      // "Choose from: \"On lost focus\" - the value is updated when the input field loses focus; \"While typing\" - the value is updated in real-time, as users are typing. The \"Inherit\" option applies the survey-level setting (\"On lost focus\" by default)."
      textUpdateMode: "اختر من بين: \"عند فقدان التركيز\" - يتم تحديث القيمة عندما يفقد حقل الإدخال التركيز ؛ \"أثناء الكتابة\" - يتم تحديث القيمة في الوقت الفعلي ، حيث يكتب المستخدمون. يطبق خيار \"الوراثة\" إعداد مستوى الاستطلاع (\"عند فقدان التركيز\" افتراضيا).",
      // [Auto-translated] "You can use any web service as a data source for multiple-choice questions. To populate choice values, enter the URL of the service providing the data."
      url: "يمكنك استخدام أي خدمة ويب كمصدر بيانات لأسئلة الاختيار من متعدد. لتعبئة قيم الاختيار، أدخل عنوان URL للخدمة التي توفر البيانات.",
      // [Auto-translated] "A comparison operation used to filter the drop-down list."
      searchMode: "عملية مقارنة تستخدم لتصفية القائمة المنسدلة.",
      // [Auto-translated] "Long texts in choice options will automatically generate line breaks to fit within the drop-down menu. Unselect if you want the texts to clip."
      textWrapEnabled: "ستنشئ النصوص الطويلة في خيارات الاختيار فواصل أسطر تلقائيا لتلائم القائمة المنسدلة. قم بإلغاء تحديد ما إذا كنت تريد قص النصوص.",
      // [Auto-translated] "Specifies how many columns this question spans within the grid layout."
      effectiveColSpan: "يحدد عدد الأعمدة التي يمتد إليها هذا السؤال داخل تخطيط الشبكة."
    },
    surveyvalidator: {
      // "Use the magic wand icon to define when the question's value is considered valid."
      expression: "استخدم أيقونة العصا السحرية لتحديد متى تعتبر قيمة السؤال صالحة.",
      // [Auto-translated] "Errors block progress until resolved. Warnings highlight issues but allow to continue. Informational notes offer additional context or neutral guidance. When using warnings or informational notes, we recommend enabling immediate validation: \"Survey\" → \"Validation\" → \"Run validation\" → \"After an answer has changed\"."
      notificationType: "تمنع الأخطاء التقدم حتى يتم حلها. تبرز التحذيرات المشكلات ولكنها تسمح بالمتابعة. توفر الملاحظات الإعلامية سياقا إضافيا أو إرشادات محايدة. عند استخدام التحذيرات أو الملاحظات الإعلامية، نوصي بتمكين التحقق الفوري: \"الاستطلاع\" → \"التحقق من الصحة\" → \"تشغيل التحقق من الصحة\" → \"بعد تغيير الإجابة\"."
    },
    signaturepad: {
      // "Sets the width of the displayed signature area and the resulting image."
      signatureWidth: "يضبط عرض مساحة التوقيع المعروضة والصورة الناتجة.",
      // "Sets the height of the displayed signature area and the resulting image."
      signatureHeight: "يضبط ارتفاع مساحة التوقيع المعروضة والصورة الناتجة.",
      // "Select if you want the signature area to fill all available space within the question box while maintaining the default 3:2 aspect ratio. When custom width and height values are set, the setting will keep the aspect ratio of these dimensions."
      signatureAutoScaleEnabled: "حدد ما إذا كنت تريد أن تملأ منطقة التوقيع كل المساحة المتوفرة داخل مربع السؤال مع الحفاظ على نسبة العرض إلى الارتفاع الافتراضية 3:2. عند تعيين قيم العرض والارتفاع المخصصة، سيحتفظ الإعداد بنسبة العرض إلى الارتفاع لهذه الأبعاد."
    },
    file: {
      // "Specifies the display height of uploaded images in the preview and the actual height of images taken with the camera. In single file upload mode, the display height is limited by the preview area; in multiple file upload mode, it is limited by the thumbnail area."
      imageHeight: "يحدد ارتفاع عرض الصور التي تم تحميلها في المعاينة والارتفاع الفعلي للصور الملتقطة بالكاميرا. في وضع تحميل الملف الفردي ، يكون ارتفاع العرض محدودا بمنطقة المعاينة. في وضع تحميل الملفات المتعددة ، يتم تقييده بمنطقة الصورة المصغرة.",
      // "Specifies the display width of uploaded images in the preview and the actual width of images taken with the camera. In single file upload mode, the display width is limited by the preview area; in multiple file upload mode, it is limited by the thumbnail area."
      imageWidth: "يحدد عرض عرض الصور التي تم تحميلها في المعاينة والعرض الفعلي للصور الملتقطة بالكاميرا. في وضع تحميل الملف الفردي ، يكون عرض العرض محدودا بمنطقة المعاينة. في وضع تحميل الملفات المتعددة ، يتم تقييده بمنطقة الصورة المصغرة.",
      // [Auto-translated] "Displays thumbnail previews for uploaded files when possible. Unselect if you want to show file icons instead."
      allowImagesPreview: "يعرض معاينات الصور المصغرة للملفات التي تم تحميلها عندما يكون ذلك ممكنا. قم بإلغاء تحديد ما إذا كنت تريد إظهار رموز الملفات بدلا من ذلك."
    },
    image: {
      // "The \"Auto\" option automatically determines the suitable mode for display - Image, Video, or YouTube - based on the source URL provided."
      contentMode: "يحدد الخيار \"تلقائي\" تلقائيا الوضع المناسب للعرض - الصورة أو الفيديو أو YouTube - بناء على عنوان URL المصدر المقدم."
    },
    imagepicker: {
      // [Auto-translated] "Overrides the minimum and maximum height values."
      imageHeight: "يتخطى قيم الحد الأدنى والحد الأقصى للارتفاع.",
      // [Auto-translated] "Overrides the minimum and maximum width values."
      imageWidth: "يتخطى قيم الحد الأدنى والحد الأقصى للعرض.",
      // [Auto-translated] "\"Value\" serves as an item ID used in conditional rules; \"Text\" is displayed to respondents."
      choices: "\"القيمة\" بمثابة معرف عنصر يستخدم في القواعد الشرطية؛ يتم عرض \"النص\" للمستجيبين.",
      // "Choose between \"Image\" and \"Video\" to set the content mode of the media selector. If \"Image\" is selected, ensure that all options provided are image files in the following formats: JPEG, GIF, PNG, APNG, SVG, BMP, ICO. Similarly, if \"Video\" is selected, ensure that all options are direct links to video files in the following formats: MP4, MOV, WMV, FLV, AVI, MKV. Please note that YouTube links are not supported for video options."
      contentMode: "اختر بين \"صورة\" و \"فيديو\" لتعيين وضع المحتوى لمحدد الوسائط. إذا تم تحديد \"صورة\" ، فتأكد من أن جميع الخيارات المتوفرة هي ملفات صور بالتنسيقات التالية: JPEG و GIF و PNG و APNG و SVG و BMP و ICO. وبالمثل ، إذا تم تحديد \"فيديو\" ، فتأكد من أن جميع الخيارات هي روابط مباشرة لملفات الفيديو بالتنسيقات التالية: MP4 و MOV و WMV و FLV و AVI و MKV. يرجى ملاحظة أن روابط YouTube غير مدعومة لخيارات الفيديو."
    },
    text: {
      // [Auto-translated] "This setting only resizes the input field and doesn't affect the width of the question box. To limit the accepted input length, go to \"Validation\" → \"Maximum character limit\"."
      size: "يقوم هذا الإعداد بتغيير حجم حقل الإدخال فقط ولا يؤثر على عرض مربع الأسئلة. للحد من طول الإدخال المقبول ، انتقل إلى \"التحقق من الصحة\" → \"الحد الأقصى لعدد الأحرف\"."
    },
    comment: {
      // [Auto-translated] "Sets the number of displayed lines in the input field. If the input takes up more lines, the scroll bar will appear."
      rows: "لتعيين عدد الخطوط المعروضة في حقل الإدخال. إذا كان الإدخال يشغل المزيد من الأسطر، فسيظهر شريط التمرير."
    },
    // survey templates
    survey: {
      // "Select if you want to prevent respondents from filling out your survey."
      readOnly: "حدد ما إذا كنت تريد منع المستجيبين من ملء الاستطلاع الخاص بك.",
      // "Sets the location of the progress bar. The \"Auto\" value displays the progress bar above or below the survey header."
      progressBarLocation: "لتعيين موقع شريط التقدم. تعرض القيمة \"تلقائي\" شريط التقدم أعلى رأس الاستطلاع أو أسفله."
    },
    matrixdropdowncolumn: {
      // "A column ID that is not visible to respondents."
      name: "معرف عمود غير مرئي للمستجيبين.",
      // "When enabled for a column, a respondent is required to provide a unique response for each question within this column."
      isUnique: "عند تمكين عمود، يطلب من المستجيب تقديم إجابة فريدة لكل سؤال داخل هذا العمود.",
      // "Sets the number of displayed lines in the input field. If the input takes up more lines, the scroll bar will appear."
      rows: "يضبط عدد الأسطر المعروضة في حقل الإدخال. إذا كان الإدخال يشغل المزيد من الأسطر ، فسيظهر شريط التمرير.",
      // "Use the magic wand icon to set a conditional rule that determines column visibility."
      visibleIf: "استخدم أيقونة العصا السحرية لتعيين قاعدة شرطية تحدد رؤية العمود.",
      // [Auto-translated] "Use the magic wand icon to set a conditional rule that disables the read-only mode for the column."
      enableIf: "استخدم أيقونة العصا السحرية لتعيين قاعدة شرطية تعطل وضع القراءة فقط للعمود.",
      // "Use the magic wand icon to set a conditional rule that prevents survey submission unless at least one nested question has an answer."
      requiredIf: "استخدم أيقونة العصا السحرية لتعيين قاعدة شرطية تمنع إرسال الاستطلاع ما لم يكن لسؤال واحد متداخل على الأقل إجابة.",
      // "When selected, creates an individual column for each choice option."
      showInMultipleColumns: "عند تحديده، ينشئ عمود منفرد لكل خيار اختيار.",
      // [Auto-translated] "Arranges choice options in a multi-column layout. When set to 0, the options are displayed in a single line. When set to -1, the actual value is inherited from the \"Nested column count\" property of the parent matrix."
      colCount: "ترتيب خيارات الاختيار في تخطيط متعدد الأعمدة. عند التعيين إلى 0 ، يتم عرض الخيارات في سطر واحد. عند التعيين إلى -1، يتم توريث القيمة الفعلية من الخاصية \"عدد الأعمدة المتداخلة\" للمصفوفة الأصلية."
    },
    slider: {
      // "The lowest number that users can select."
      min: "أقل رقم يمكن للمستخدمين تحديده.",
      // "The highest number that users can select."
      max: "أعلى رقم يمكن للمستخدمين تحديده.",
      // "The interval between selectable scale values. For example, a step of 5 will allow users to select 0, 5, 10, etc."
      step: "الفاصل الزمني بين قيم المقياس القابلة للتحديد. على سبيل المثال ، ستسمح الخطوة 5 للمستخدمين بتحديد 0 و 5 و 10 وما إلى ذلك.",
      // "The minimum distance between the slider thumbs a user can set."
      minRangeLength: "الحد الأدنى للمسافة بين إبهام شريط التمرير الذي يمكن للمستخدم تعيينه.",
      // "The maximum distance between the slider thumbs a user can set."
      maxRangeLength: "الحد الأقصى للمسافة بين إبهام شريط التمرير الذي يمكن للمستخدم تعيينه.",
      // "Specifies how many scale labels to generate. A value of -1 means the number is calculated automatically based on the Min value and Max value."
      labelCount: "يحدد عدد تسميات المقياس المطلوب إنشاؤها. تعني القيمة -1 أن الرقم يتم حسابه تلقائيا بناء على القيمة الدنيا والقيمة القصوى.",
      // "Use `{0}` as a placeholder for the actual value."
      labelFormat: "استخدم \"{0}\" كعنصر نائب للقيمة الفعلية.",
      // "Allows you to define custom labels at specific values and optionally assign corresponding text to them (e.g., 0 = \"Poor\", 100 = \"Excellent\")."
      customLabels: "يسمح لك بتحديد تسميات مخصصة بقيم محددة وتعيين النص المقابل لها اختياريا (على سبيل المثال، 0 = \"ضعيف\"، 100 = \"ممتاز\").",
      // "Use `{0}` as a placeholder for the actual value."
      tooltipFormat: "استخدم \"{0}\" كعنصر نائب للقيمة الفعلية.",
      // "Allows users to move one thumb past the other."
      allowSwap: "يسمح للمستخدمين بتحريك إبهام واحد إلى ما بعد الآخر.",
      // [Auto-translated] "Displays a button that clears the selected slider value and sets it to undefined."
      allowClear: "يعرض زرا يقوم بمسح قيمة شريط التمرير المحددة وتعيينها إلى غير محدد.",
      // "Defines the slider's minimum value dynamically using an expression. Supports basic calculations (e.g, `{q1_id} + {q2_id}`), Boolean logic (e.g., `{age} > 60`), and functions like `iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, and more."
      minValueExpression: "يحدد الحد الأدنى لقيمة شريط التمرير ديناميكيا باستخدام تعبير. يدعم العمليات الحسابية الأساسية (على سبيل المثال ، '{q1_id} + {q2_id}') ، والمنطق المنطقي (على سبيل المثال ، '{age} > 60') ، ووظائف مثل 'iif ()' و 'today ()' و 'age ()' و 'min ()' و 'max()' و 'avg ()' والمزيد.",
      // "Defines the slider's maximum value dynamically using an expression. Supports basic calculations (e.g, `{q1_id} + {q2_id}`), Boolean logic (e.g., `{age} > 60`), and functions like `iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, and more."
      maxValueExpression: "يحدد القيمة القصوى لشريط التمرير ديناميكيا باستخدام تعبير. يدعم العمليات الحسابية الأساسية (على سبيل المثال ، '{q1_id} + {q2_id}') ، والمنطق المنط��ي (على سبيل المثال ، '{age} > 60') ، ووظائف مثل 'iif ()' و 'today ()' و 'age ()' و 'min ()' و 'max()' و 'avg ()' والمزيد."
    },
    // [Auto-translated] "Makes this choice exclusive. When selected by a user, it will automatically deselect all other options in the question."
    isExclusive: "يجعل هذا الاختيار حصريا. عند تحديده من قبل مستخدم، سيتم إلغاء تحديد جميع الخيارات الأخرى في السؤال تلقائيا.",
    matrixcolumn: {
      // [Auto-translated] "Makes checkboxes in this column exclusive. When selected by a user, they will automatically deselect all other checkboxes in the same row."
      isExclusive: "يجعل مربعات الاختيار في هذا العمود حصرية. عند تحديده من قبل مستخدم ، سيقوم تلقائيا بإلغاء تحديد جميع مربعات الاختيار الأخرى في نفس الصف."
    },
    // [Auto-translated] "Select if uppercase and lowercase letters in the regular expression must be treated as equivalent."
    caseInsensitive: "حدد ما إذا كان يجب التعامل مع الأحرف الكبيرة والصغيرة في التعبير العادي على أنها مكافئة.",
    // "Choose from: \"Static\" - sets a fixed width; \"Responsive\" - makes the survey occupy the full width of the screen; \"Auto\" - applies either of the two depending on the question types used."
    widthMode: "اختر من بين: \"ثابت\" - يحدد عرضا ثابتا ؛ \"متجاوب\" - يجعل الاستطلاع يشغل العرض الكامل للشاشة ؛ \"تلقائي\" - ينطبق على أي من الاثنين اعتمادا على أنواع الأسئلة المستخدمة.",
    // [Auto-translated] "Assign a unique cookie value for your survey. The cookie will be set in a respondent's browser upon survey completion to prevent repetitive survey submissions."
    cookieName: "قم بتعيين قيمة ملف تعريف ارتباط فريدة للاستطلاع الخاص بك. سيتم تعيين ملف تعريف الارتباط في متصفح المستجيب عند اكتمال الاستطلاع لمنع عمليات إرسال الاستطلاع المتكررة.",
    // [Auto-translated] "Paste an image link (no size limits) or click the folder icon to browse a file from your computer (up to 64KB)."
    logo: "الصق رابط صورة (بلا حدود للحجم) أو انقر فوق رمز المجلد لاستعراض ملف من جهاز الكمبيوتر الخاص بك (حتى 64 كيلوبايت).",
    // [Auto-translated] "Sets a logo width in CSS units (px, %, in, pt, etc.)."
    logoWidth: "يضبط عرض الشعار بوحدات CSS (px ، ٪ ، in ، pt ، إلخ).",
    // [Auto-translated] "Sets a logo height in CSS units (px, %, in, pt, etc.)."
    logoHeight: "يضبط ارتفاع الشعار في وحدات CSS (px ، ٪ ، in ، pt ، إلخ).",
    // "Choose from: \"None\" - image maintains its original size; \"Contain\" - image is resized to fit while maintaining its aspect ratio; \"Cover\" - image fills the entire box while maintaining its aspect ratio; \"Fill\" - image is stretched to fill the box without maintaining its aspect ratio."
    logoFit: "اختر من بين: \"لا شيء\" - تحافظ الصورة على حجمها الأصلي ؛ \"احتواء\" - يتم تغيير حجم الصورة لتلائم مع الحفاظ على نسبة العرض إلى الارتفاع ؛ \"الغلاف\" - تملأ الصورة المربع بأكمله مع الحفاظ على نسبة العرض إلى الارتفاع ؛ \"تعبئة\" - يتم تمديد الصورة لملء المربع دون الحفاظ على نسبة العرض إلى الارتفاع.",
    // [Auto-translated] "Select if you want the survey to auto-advance to the next page once a respondent has answered all questions on the current page. This feature won't apply if the last question on the page is open-ended or allows multiple answers."
    autoAdvanceEnabled: "حدد ما إذا كنت تريد أن يتقدم الاستطلاع تلقائيا إلى الصفحة التالية بمجرد إجابة المستجيب على جميع الأسئلة في الصفحة الحالية. لن يتم تطبيق هذه الميزة إذا كان السؤال الأخير على الصفحة مفتوحا أو يسمح بإجابات متعددة.",
    // [Auto-translated] "Select if you want the survey to complete automatically after a respondent answers all questions."
    autoAdvanceAllowComplete: "حدد ما إذا كنت تريد إكمال الاستطلاع تلقائيا بعد أن يجيب المستجيب على جميع الأسئلة.",
    // [Auto-translated] "Sets the visibility of navigation buttons on a page."
    showNavigationButtons: "لتعيين رؤية أزرار التنقل على الصفحة.",
    // [Auto-translated] "Sets the location of navigation buttons on a page."
    navigationButtonsLocation: "لتعيين موقع أزرار التنقل على الصفحة.",
    // [Auto-translated] "Enable the preview page with all or answered questions only."
    showPreviewBeforeComplete: "قم بتمكين صفحة المعاينة مع جميع الأسئلة أو الإجابة عليها فقط.",
    // "Applies to all questions within the survey. This setting can be overridden by title alignment rules at lower levels: panel, page, or question. A lower-level setting will override those on a higher level."
    questionTitleLocation: "ينطبق على جميع الأسئلة داخل الاستطلاع. يمكن تجاوز هذا الإعداد من خلال قواعد محاذاة العنوان في المستويات الأدنى: اللوحة أو الصفحة أو السؤال. سيتجاوز إعداد المستوى الأدنى تلك الموجودة في المستوى الأعلى.",
    // [Auto-translated] "A symbol or a sequence of symbols indicating that an answer is required."
    requiredMark: "رمز أو سلسلة من الرموز تشير إلى أن الإجابة مطلوبة.",
    // [Auto-translated] "Enter a number or letter with which you want to start numbering."
    questionStartIndex: "أدخل رقما أو حرفا تريد بدء الترقيم به.",
    // "Sets the location of an error message in relation to the question with invalid input. Choose between: \"Top\" - an error text is placed at the top of the question box; \"Bottom\" - an error text is placed at the bottom of the question box."
    questionErrorLocation: "تعيين موقع رسالة خطأ فيما يتعلق بالسؤال مع إدخال غير صالح. اختر بين: \"أعلى\" - يتم وضع نص خطأ في أعلى مربع السؤال ؛ \"أسفل\" - يتم وضع نص خطأ في أسفل مربع السؤال.",
    // [Auto-translated] "Select if you want the first input field on each page ready for text entry."
    autoFocusFirstQuestion: "حدد ما إذا كنت تريد أن يكون حقل الإدخال الأول في كل صفحة جاهزا لإدخال النص.",
    // "Keeps the original order of questions or randomizes them. The effect of this setting is only visible in the Preview tab."
    questionOrder: "يحافظ على الترتيب الأصلي للأسئلة أو يحولها عشوائيا. يكون تأثير هذا الإعداد مرئيا فقط في علامة التبويب معاينة.",
    // [Auto-translated] "For text entry questions only."
    maxTextLength: "لأسئلة إدخال النص فقط.",
    // [Auto-translated] "For question comments only."
    maxCommentLength: "لتعليقات الأسئلة فقط.",
    // [Auto-translated] "Sets the number of displayed lines in text areas for question comments. If the input takes up more lines, the scroll bar appears."
    commentAreaRows: "لتعيين عدد الأسطر المعروضة في مناطق النص لتعليقات الأسئلة. إذا كان الإدخال يشغل المزيد من الأسطر، فسيظهر شريط التمرير.",
    // [Auto-translated] "Select if you want question comments and Long Text questions to auto-grow in height based on the entered text length."
    autoGrowComment: "حدد ما إذا كنت تريد زيادة تعليقات الأسئلة وأسئلة النص الطويل تلقائيا في الارتفاع بناء على طول النص الذي تم إدخاله.",
    // [Auto-translated] "For question comments and Long Text questions only."
    allowResizeComment: "لتعليقات الأسئلة وأسئلة النص الطويل فقط.",
    // [Auto-translated] "Custom variables serve as intermediate or auxiliary variables used in form calculations. They take respondent inputs as source values. Each custom variable has a unique name and an expression it's based on."
    calculatedValues: "تعمل المتغيرات المخصصة كمتغيرات وسيطة أو مساعدة تستخدم في حسابات النماذج. يأخذون مدخلات المستجيبين كقيم مصدر. كل متغير مخصص له اسم فريد وتعبير يعتمد عليه.",
    // [Auto-translated] "Select if you wish the calculated value of the expression to be saved along with survey results."
    includeIntoResult: "حدد ما إذا كنت ترغب في حفظ القيمة المحسوبة للتعبير مع نتائج الاستطلاع.",
    // "A trigger is an event or condition that is based on an expression. Once the expression is evaluated to \"true\", a trigger sets off an action. Such an action can optionally have a target question it affects."
    triggers: "المشغل هو حدث أو شرط يستند إلى تعبير. بمجرد تقييم التعبير إلى \"صواب\" ، يطلق المشغل إجراء. يمكن أن يكون لمثل هذا الإجراء اختياريا سؤال مستهدف يؤثر عليه.",
    // [Auto-translated] "Choose whether or not to clear values for questions hidden by conditional logic and when to do it."
    clearInvisibleValues: "اختر ما إذا كنت تريد مسح قيم الأسئلة المخفية بواسطة المنطق الشرطي ومتى تريد القيام بذلك أم لا.",
    // "Choose from: \"On lost focus\" - the value is updated when the input field loses focus; \"While typing\" - the value is updated in real-time, as users are typing."
    textUpdateMode: "اختر من بين: \"عند فقدان التركيز\" - يتم تحديث القيمة عندما يفقد حقل الإدخال التركيز ؛ \"أثناء الكتابة\" - يتم تحديث القيمة في الوقت الفعلي ، حيث يكتب المستخدمون.",
    // [Auto-translated] "The left value serves as a column ID used in conditional rules, the right value is displayed to respondents."
    columns: "تعمل القيمة اليسرى كمعرف عمود مستخدم في القواعد الشرطية ، ويتم عرض القيمة الصحيحة للمستجيبين.",
    // "The left value serves as a row ID used in conditional rules, the right value is displayed to respondents."
    rows: "تعمل القيمة اليسرى كمعرف صف مستخدم في القواعد الشرطية ، ويتم عرض القيمة الصحيحة للمستجيبين.",
    // [Auto-translated] "Accepts CSS values (px, %, in, pt, etc.)."
    columnMinWidth: "يقبل قيم CSS (px ، ٪ ، in ، pt ، إلخ).",
    // [Auto-translated] "Accepts CSS values (px, %, in, pt, etc.)."
    rowTitleWidth: "يقبل قيم CSS (px ، ٪ ، in ، pt ، إلخ).",
    // [Auto-translated] "Visible only if at least one column displays total values set with \"Aggregation method\" or \"Total value expression\"."
    totalText: "مرئي فقط إذا كان عمود واحد على الأقل يعرض القيم الإجمالية التي تم تعيينها باستخدام \"أسلوب التجميع\" أو \"تعبير القيمة الإجمالية\".",
    // "Sets the location of an error message in relation to a cell with invalid input. The \"Inherit\" option applies the setting from the \"Error message alignment\" property."
    cellErrorLocation: "تعيين موقع رسالة خطأ فيما يتعلق بخلية ذات إدخال غير صالح. يطبق خيار \"الوراثة\" الإعداد من خاصية \"محاذاة رسالة الخطأ\".",
    // "Sets the location of error messages for questions nested in detail sections. The \"Inherit\" option applies the setting from the \"Error message alignment\" property."
    detailErrorLocation: "تعيين موقع رسائل الخطأ للأسئلة المتداخلة في أقسام التفاصيل. يطبق خيار \"الوراثة\" الإعداد من خاصية \"محاذاة رسالة الخطأ\".",
    // "When the \"Prevent duplicate responses\" property is enabled, a respondent attempting to submit a duplicate entry will receive the following error message."
    keyDuplicationError: "عند تمكين الخاصية \"منع الاستجابات المكررة\"، سيتلقى مستجيب يحاول إرسال إدخال مكرر رسالة الخطأ التالية.",
    // [Auto-translated] "Allows you to calculate total values based on an expression. The expression can include basic calculations (`{q1_id} + {q2_id}`), Boolean expressions (`{age} > 60`) and functions ('iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, etc.)."
    totalExpression: "يسمح لك بحساب القيم الإجمالية استنادا إلى تعبير. يمكن أن يتضمن التعبير العمليات الحسابية الأساسية ('{q1_id} + {q2_id}') والتعبيرات المنطقية ('{age} > 60') والوظائف ('iif()', 'today()', 'age()', 'min()', 'max()', 'avg()', إلخ).",
    // "Reference a column ID to require a user to provide a unique response for each question within the specified column."
    keyName: "إذا كان العمود المحدد يحتوي على قيم متطابقة ، فإن الاستطلاع يلقي الخطأ \"قيمة مفتاح غير فريدة\".",
    // "Type a subtitle."
    description: "اكتب عنوانا فرعيا.",
    // [Auto-translated] "Choose a language to begin creating your survey. To add a translation, switch to a new language and translate the original text here or in the Translations tab."
    locale: "اختر لغة لبدء إنشاء الاستطلاع. لإضافة ترجمة، قم بالتبديل إلى لغة جديدة وترجمة النص الأصلي هنا أو في علامة التبويب الترجمات.",
    // "Sets the location of a detail section in relation to a row. Choose from: \"None\" - no detail section is added; \"Under the row\" - a detail section is placed under each row of the matrix; \"Under the row, display one detail section only\" - a detail section is displayed under a single row only, the remaining sections are collapsed."
    detailPanelMode: "يضبط موقع قسم التفاصيل بالنسبة إلى صف. اختر من بين: \"لا شيء\" - لم تتم إضافة أي توسيع ؛ \"تحت الصف\" - يتم وضع توسيع الصف تحت كل صف من المصفوفة ؛ \"أسفل الصف ، اعرض توسيع صف واحد فقط\" - يتم عرض توسيع أسفل صف واحد فقط ، ويتم طي توسعات الصف المتبقية.",
    // "Choose from: \"None\" - image maintains its original size; \"Contain\" - image is resized to fit while maintaining its aspect ratio; \"Cover\" - image fills the entire box while maintaining its aspect ratio; \"Fill\" - image is stretched to fill the box without maintaining its aspect ratio."
    imageFit: "اختر من بين: \"لا شيء\" - تحافظ الصورة على حجمها الأصلي ؛ \"احتواء\" - يتم تغيير حجم الصورة لتلائم مع الحفاظ على نسبة العرض إلى الارتفاع ؛ \"الغلاف\" - تملأ الصورة المربع بأكمله مع الحفاظ على نسبة العرض إلى الارتفاع ؛ \"تعبئة\" - يتم تمديد الصورة لملء المربع دون الحفاظ على نسبة العرض إلى الارتفاع.",
    // "The \"Inherit\" option applies a survey-level setting (\"Disabled\" by default)."
    autoGrow: "يزيد تدريجيا من ارتفاع حقل الإدخال أثناء إدخال البيانات. يتجاوز إعداد \"ارتفاع حقل الإدخال (في الأسطر)\".",
    // [Auto-translated] "The \"Inherit\" option applies a survey-level setting (\"Enabled\" by default)."
    allowResize: "يطبق خيار \"الوراثة\" إعدادا على مستوى الاستطلاع (\"ممكن\" بشكل افتراضي).",
    // [Auto-translated] "A time interval in seconds after which the survey auto-advances to the \"Thank You\" page. When set to 0, counts the time spent on the survey."
    timeLimit: "فاصل زمني بالثواني يتقدم بعده الاستطلاع تلقائيا إلى صفحة \"شكرا لك\". عند التعيين إلى 0، يحسب الوقت المستغرق في الاستطلاع.",
    // [Auto-translated] "A time interval in seconds after which the survey auto-advances to the next page. Hides the \"Previous\" navigation button. When set to 0, counts the time spent on the current page."
    timeLimitPerPage: "فاصل زمني بالثواني وبعد ذلك يتقدم الاستطلاع تلقائيا إلى الصفحة التالية. يخفي زر التنقل \"السابق\". عند التعيين على 0، يحسب الوقت المستغرق في الصفحة الحالية.",
    // [Auto-translated] "Enable this option to trigger validation when a user focuses on an empty input field and then leaves it without making any changes."
    validateVisitedEmptyFields: "قم بتمكين هذا الخيار لتشغيل التحقق من الصحة عندما يركز المستخدم على حقل إدخال فارغ ثم يتركه دون إجراء أي تغييرات.",
    page: {
      // "A page ID that is not visible to respondents."
      name: "معرف صفحة غير مرئي للمستجيبين.",
      // "Type a page subtitle."
      description: "اكتب عنوانا فرعيا للصفحة.",
      // "A caption displayed on a navigation button in the progress bar or table of contents (TOC). If you leave this field empty, the navigation button will use the page title or page name. To enable the progress bar or TOC, go to \"Survey\" → \"Navigation\"."
      navigationTitle: "تسمية توضيحية معروضة على زر التنقل في شريط التقدم أو جدول المحتويات (TOC). إذا تركت هذا الحقل فارغا، فسيستخدم زر التنقل عنوان الصفحة أو اسم الصفحة. لتمكين شريط التقدم أو جدول المحتويات، انتقل إلى \"استطلاع\" → \"التنقل\".",
      // "A time interval in seconds after which the survey auto-advances to the next page. Hides the \"Previous\" navigation button. When set to 0, counts the time spent on the current page."
      timeLimit: "فاصل زمني بالثواني يتقدم بعده الاستطلاع تلقائيا إلى الصفحة التالية.",
      // "Use the magic wand icon to set a conditional rule that determines page visibility."
      visibleIf: "استخدم أيقونة العصا السحرية لتعيين قاعدة شرطية تحدد رؤية الصفحة.",
      // [Auto-translated] "Use the magic wand icon to set a conditional rule that disables the read-only mode for the page."
      enableIf: "استخدم أيقونة العصا السحرية لتعيين قاعدة شرطية تعطل وضع القراءة فقط للصفحة.",
      // "Use the magic wand icon to set a conditional rule that prevents survey submission unless at least one nested question has an answer."
      requiredIf: "استخدم أيقونة العصا السحرية لتعيين قاعدة شرطية تمنع إرسال الاستطلاع ما لم يكن لسؤال واحد متداخل على الأقل إجابة.",
      // "Applies to all questions within this page. When set to \"Hidden\", it also hides question descriptions. If you want to override this setting, define title alignment rules for individual questions or panels. The \"Inherit\" option applies the survey-level setting (\"Top\" by default)."
      questionTitleLocation: "ينطبق على جميع الأسئلة الواردة في هذه الصفحة. إذا كنت تريد إلغاء هذا الإعداد، فحدد قواعد محاذاة العنوان للأسئلة أو اللوحات الفردية. يطبق خيار \"الوراثة\" إعداد مستوى الاستطلاع (\"أعلى\" افتراضيا).",
      // [Auto-translated] "Sets consistent width for question titles when they are aligned to the left of their question boxes. Accepts CSS values (px, %, in, pt, etc.)."
      questionTitleWidth: "يعين عرضا متناسقا لعناوين الأسئلة عندما تتم محاذاتها إلى يسار مربعات الأسئلة الخاصة بها. يقبل قيم CSS (px ، ٪ ، in ، pt ، إلخ).",
      // "Sets the location of an error message in relation to the question with invalid input. Choose between: \"Top\" - an error text is placed at the top of the question box; \"Bottom\" - an error text is placed at the bottom of the question box. The \"Inherit\" option applies the survey-level setting (\"Top\" by default)."
      questionErrorLocation: "تعيين موقع رسالة خطأ فيما يتعلق بالسؤال مع إدخال غير صالح. اختر بين: \"أعلى\" - يتم وضع نص خطأ في أعلى مربع السؤال ؛ \"أسفل\" - يتم وضع نص خطأ في أسفل مربع السؤال. يطبق خيار \"الوراثة\" إعداد مستوى الاستطلاع (\"أعلى\" افتراضيا).",
      // "Keeps the original order of questions or randomizes them. The \"Inherit\" option applies the survey-level setting (\"Original\" by default). The effect of this setting is only visible in the Preview tab."
      questionOrder: "يحافظ على الترتيب الأصلي للأسئلة أو يحولها عشوائيا. يطبق خيار \"الوراثة\" إعداد مستوى الاستطلاع (\"أصلي\" افتراضيا). يكون تأثير هذا الإعداد مرئيا فقط في علامة التبويب معاينة.",
      // "Sets the visibility of navigation buttons on the page. The \"Inherit\" option applies the survey-level setting, which defaults to \"Visible\"."
      showNavigationButtons: "يضبط رؤية أزرار التنقل على الصفحة. يطبق خيار \"الوراثة\" إعداد مستوى الاستطلاع ، والذي يتم تعيينه افتراضيا على \"مرئي\".",
      // [Auto-translated] "This table lets you configure each grid column on the page. It automatically sets the width percentage for each column based on the maximum number of elements in a row. To customize the grid layout, manually adjust these values and define the title width for all questions in each column."
      gridLayoutColumns: "يتيح لك هذا الجدول تكوين كل عمود شبكة على الصفحة. يقوم تلقائيا بتعيين النسبة المئوية للعرض لكل عمود بناء على الحد الأقصى لعدد العناصر في الصف. لتخصيص تخطيط الشبكة، اضبط هذه القيم يدويا وحدد عرض العنوان لكافة الأسئلة في كل عمود."
    },
    // [Auto-translated] "Sets the location of a timer on a page."
    timerLocation: "يضبط موقع المؤقت على الصفحة.",
    // "Choose from: \"Locked\" - users cannot expand or collapse entries; \"Collapse all\" - all entries start in a collapsed state; \"Expand all\" - all entries start in an expanded state; \"First expanded\" - only the first entry is initially expanded. Applies if \"Entry display mode\" is set to \"List\" and the \"Entry title pattern\" property is specified."
    panelsState: "اختر من بين: \"مقفل\" - لا يمكن للمستخدمين توسيع اللوحات أو طيها ؛ \"طي الكل\" - تبدأ جميع اللوحات في حالة انهيار ؛ \"توسيع الكل\" - تبدأ جميع اللوحات في حالة موسعة ؛ \"تم توسيعه أولا\" - تم توسيع اللوحة الأولى فقط في البداية.",
    // [Auto-translated] "Enter a shared property name within the array of objects that contains the image or video file URLs you want to display in the choice list."
    imageLinkName: "أدخل اسم خاصية مشتركة ضمن صفيف الكائنات التي تحتوي على عناوين URL لملفات الصور أو الفيديو التي تريد عرضها في قائمة الاختيارات.",
    // "The left value serves as an item ID used in conditional rules, the right value is displayed to respondents."
    choices: "تعمل القيمة اليسرى كمعرف عنصر مستخدم في القواعد الشرطية ، ويتم عرض القيمة الصحيحة للمستجيبين.",
    // [Auto-translated] "Type a user-friendly title to display."
    title: "اكتب عنوانا سهل الاستخدام لعرضه.",
    // [Auto-translated] "Ensures that users won't complete the survey until files are uploaded."
    waitForUpload: "يضمن عدم إكمال المستخدمين للاستطلاع حتى يتم تحميل الملفات.",
    // [Auto-translated] "Accepts CSS values (px, %, in, pt, etc.)."
    minWidth: "يقبل قيم CSS (px ، ٪ ، in ، pt ، إلخ).",
    // [Auto-translated] "Accepts CSS values (px, %, in, pt, etc.)."
    maxWidth: "يقبل قيم CSS (px ، ٪ ، in ، pt ، إلخ).",
    // "Accepts CSS values (px, %, in, pt, etc.)."
    width: "يقبل قيم CSS (px ، ٪ ، in ، pt ، إلخ).",
    // [Auto-translated] "A join identifier is a custom key that you can assign to several questions to link them together and sync their values. These values will be merged into a single array or object and stored in survey results using the key as the property name."
    valueName: "معرف الانضمام هو مفتاح مخصص يمكنك تعيينه لعدة أسئلة لربطها معا ومزامنة قيمها. سيتم دمج هذه القيم في صفيف أو كائن واحد وتخزينها في نتائج الاستطلاع باستخدام المفتاح كاسم الخاصية.",
    // [Auto-translated] "A value displayed in HTML questions and in the dynamic titles and descriptions of survey elements when the question value is empty."
    defaultDisplayValue: "قيمة معروضة في أسئلة HTML وفي العناوين الديناميكية وأوصاف عناصر الاستطلاع عندما تكون قيمة السؤال فارغة.",
    // [Auto-translated] "In single- and multiple-selection question types, each choice option has an ID and display value. When selected, this setting shows a display value instead of an ID value in HTML questions and dynamic titles and descriptions of survey elements."
    useDisplayValuesInDynamicTexts: "في أنواع الأسئلة ذات التحديد الفردي والمتعدد، يكون لكل خيار اختيار معرف وقيمة عرض. عند تحديده، يعرض هذا الإعداد قيمة عرض بدلا من قيمة معرف في أسئلة HTML والعناوين الديناميكية وأوصاف عناصر الاستطلاع.",
    // "Choose whether or not to clear question values hidden by conditional logic and when to do it. The \"Inherit\" option applies the survey-level setting (\"Upon survey completion\" by default)."
    clearIfInvisible: "اختر ما إذا كنت تريد مسح قيم الأسئلة المخفية بواسطة المنطق الشرطي أم لا ومتى تفعل ذلك. يطبق خيار \"الوراثة\" إعداد مستوى الاستطلاع (\"عند اكتمال الاستطلاع\" افتراضيا).",
    // "Choose from: \"All\" - copies all choice options from the selected question; \"Selected\" - dynamically copies only selected choice options; \"Unselected\" - dynamically copies only unselected choice options. The \"None\" and \"Other\" options are copied by default if enabled in the source question."
    choicesFromQuestionMode: "اختر من بين: \"الكل\" - نسخ جميع خيارات الاختيار من السؤال المحدد ؛ \"محدد\" - ينسخ ديناميكيا خيارات الاختيار المحددة فقط ؛ \"غير محدد\" - ينسخ ديناميكيا خيارات الاختيار غير المحددة فقط. يتم نسخ الخيارين \"بلا\" و \"أخرى\" افتراضيا إذا تم تمكينهما في السؤال المصدر.",
    // [Auto-translated] "In single- and multiple-selection question types, each choice option has an ID and display value. This setting specifies which matrix column or panel question should provide the IDs."
    choiceValuesFromQuestion: "في أنواع أسئلة التحديد الفردي والمتعدد ، يحتوي كل خيار اختيار على معرف وقيمة عرض. يحدد هذا الإعداد عمود المصفوفة أو سؤال اللوحة الذي يجب أن يوفر معرفات.",
    // [Auto-translated] "In single- and multiple-selection question types, each choice option has an ID and display value. This setting specifies which matrix column or panel question should provide the display texts."
    choiceTextsFromQuestion: "في أنواع أسئلة التحديد الفردي والمتعدد ، يحتوي كل خيار اختيار على معرف وقيمة عرض. يحدد هذا الإعداد عمود المصفوفة أو سؤال اللوحة الذي يجب أن يوفر نصوص العرض.",
    // [Auto-translated] "Select to let respondents add their own choices if the desired option isn't available in the dropdown. Custom choices will only be stored temporarily for the duration of the current browser session."
    allowCustomChoices: "حدد للسماح للمستجيبين بإضافة خياراتهم الخاصة إذا لم يكن الخيار المطلوب متاحا في القائمة المنسدلة. سيتم تخزين الخيارات المخصصة مؤقتا فقط طوال مدة جلسة المتصفح الحالية.",
    // [Auto-translated] "When selected, users can include additional input in a separate comment box."
    showOtherItem: "عند تحديده، يمكن للمستخدمين تضمين مدخلات إضافية في مربع تعليق منفصل.",
    // "Displays each special choice option (\"None\", \"Other\", \"Select All\") on a new line, even when using a multiple-column layout."
    separateSpecialChoices: "يعرض كل خيار اختيار خاص (\"بلا\" ، \"أخرى\" ، \"تحديد الكل\") على سطر جديد ، حتى عند استخدام تخطيط متعدد الأعمدة.",
    // [Auto-translated] "Specify the location within the service dataset where the target array of objects is located. Leave empty if the URL already points to the array."
    path: "حدد الموقع داخل مجموعة بيانات الخدمة حيث يوجد الصفيف الهدف من الكائنات. اتركه فارغا إذا كان عنوان URL يشير بالفعل إلى المصفوفة.",
    choicesbyurl: {
      // "Enter a uniform property name within the array of objects whose value will be stored as a response in survey results."
      valueName: " "
    },
    // [Auto-translated] "Enter a uniform property name within the array of objects that contains the values you want to display in the choice list."
    titleName: "أدخل اسم خاصية موحد ضمن صفيف الكائنات الذي يحتوي على القيم التي تريد عرضها في قائمة الاختيارات.",
    // [Auto-translated] "Select to allow the service to return an empty response or array."
    allowEmptyResponse: "حدد للسماح للخدمة بإرجاع استجابة أو صفيف فارغ.",
    // [Auto-translated] "Use the magic wand icon to set a conditional rule that determines the visibility of all choice options."
    choicesVisibleIf: "استخدم أيقونة العصا السحرية لتعيين قاعدة شرطية تحدد رؤية كل خيارات الاختيار.",
    // [Auto-translated] "The left value serves as an item ID used in conditional rules, the right value is displayed to respondents."
    rateValues: "تعمل القيمة اليسرى كمعرف عنصر مستخدم في القواعد الشرطية ، ويتم عرض القيمة الصحيحة للمستجيبين.",
    rating: {
      // "\"Auto\" selects between the \"Buttons\" and \"Dropdown\" modes based on the available width. When the width is insufficient to display buttons, the question displays a dropdown."
      displayMode: "يختار \"تلقائي\" بين وضعي \"الأزرار\" و \"القائمة المنسدلة\" بناء على العرض المتاح. عندما يكون العرض غير كاف لعرض الأزرار، يعرض السؤال قائمة منسدلة."
    },
    // [Auto-translated] "Allows you to connect questions that produce results in different formats. When such questions are linked together using a join identifier, this shared property stores selected question values."
    valuePropertyName: "يسمح لك بتوصيل الأسئلة التي تنتج نتائج بتنسيقات مختلفة. عندما يتم ربط هذه الأسئلة معا باستخدام معرف صلة، تخزن هذه الخاصية المشتركة قيم الأسئلة المحددة.",
    // [Auto-translated] "Select if you want to update the drop-down menu contents to match the search query that a user is typing in the input field."
    searchEnabled: "حدد ما إذا كنت تريد تحديث محتويات القائمة المنسدلة لمطابقة استعلام البحث الذي يكتبه المستخدم في حقل الإدخال.",
    // [Auto-translated] "A value to save in survey results when respondents give a positive answer."
    valueTrue: "قيمة يجب حفظها في نتائج الاستطلاع عندما يعطي المستجيبون إجابة إيجابية.",
    // [Auto-translated] "A value to save in survey results when respondents give a negative answer."
    valueFalse: "قيمة يجب حفظها في نتائج الاستطلاع عندما يعطي المستجيبون إجابة سلبية.",
    // [Auto-translated] "It's not recommended that you disable this option as it overrides the Preview image and makes it hard for a user to understand whether the files have been uploaded."
    showPreview: "لا يوصى بتعطيل هذا الخيار لأنه يتجاوز صورة المعاينة ويجعل من الصعب على المستخدم فهم ما إذا كان قد تم تحميل الملفات.",
    // [Auto-translated] "Triggers a prompt asking to confirm the file deletion."
    needConfirmRemoveFile: "تشغيل مطالبة تطلب تأكيد حذف الملف.",
    // [Auto-translated] "Enable to rank only selected choices. Users will drag selected items from the choice list to order them within the ranking area."
    selectToRankEnabled: "تمكين لترتيب الخيارات المحددة فقط. سيقوم المستخدمون بسحب العناصر المحددة من قائمة الاختيار لترتيبها داخل منطقة الترتيب.",
    // [Auto-translated] "Enter a list of choices that will be suggested to the respondent during input."
    dataList: "أدخل قائمة بالخيارات التي سيتم اقتراحها على المستجيب أثناء الإدخال.",
    // [Auto-translated] "The setting only resizes the input fields and doesn't affect the width of the question box."
    inputSize: "يغير الإعداد حجم حقول الإدخال فقط ولا يؤثر على عرض مربع السؤال.",
    // [Auto-translated] "Sets consistent width for all item labels. Accepts CSS values (px, %, in, pt, etc.)."
    itemTitleWidth: "لتعيين عرض متسق لجميع تسميات الأصناف. يقبل قيم CSS (بكسل ، ٪ ، في ، pt ، إلخ).",
    // "Select how to align input value within the field. The default setting \"Auto\" aligns the input value to the right if currency or numeric masking is applied and to the left if not."
    inputTextAlignment: "حدد كيفية محاذاة قيمة الإدخال داخل الحقل. يقوم الإعداد الافتراضي \"تلقائي\" بمحاذاة قيمة الإدخال إلى اليمين إذا تم تطبيق إخفاء العملة أو الرقمية وإلى اليسار إذا لم يكن كذلك.",
    // [Auto-translated] "Serves as a substitute when the image cannot be displayed on a user's device and for accessibility purposes."
    altText: "يعمل كبديل عندما يتعذر عرض الصورة على جهاز المستخدم ولأغراض إمكانية الوصول.",
    // "Defines the color of the selected emoji when the Rating icon type is set to \"Smileys\". Choose between: \"Default\" - the selected emoji appears in default survey color; \"Scale\" - the selected emoji inherits color from the rating scale."
    rateColorMode: "يحدد لون الرموز التعبيرية المحددة عند تعيين نوع رمز التقييم على \"الوجوه الضاحكة\". اختر بين: \"افتراضي\" - يظهر الرمز التعبيري المحدد بلون الاستطلاع الافتراضي ؛ \"مقياس\" - يرث الرمز التعبيري المحدد اللون من مقياس التصنيف.",
    expression: {
      // "An expression ID that is not visible to respondents."
      name: "معرف تعبير غير مرئي للمستجيبين.",
      // "Type an expression subtitle."
      description: "اكتب عنوانا فرعيا للتعبير.",
      // "An expression can include basic calculations (`{q1_id} + {q2_id}`), conditions (`{age} > 60`), and functions ('iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, etc.)."
      expression: "يمكن أن يتضمن التعبير العمليات الحسابية الأساسية ('{q1_id} + {q2_id}') والشروط ('{age} > 60') والدوال ('iif()', 'today()', 'age()', 'min()', 'max()', 'avg()', إلخ)."
    },
    // "Select to store the \"Other\" option value as a separate property in survey results."
    storeOthersAsComment: "حدد لتخزين قيمة الخيار \"أخرى\" كخاصية منفصلة في نتائج الاستطلاع.",
    // [Auto-translated] "Use {0} as a placeholder for the actual value."
    format: "استخدم {0} كعنصر نائب للقيمة الفعلية.",
    // [Auto-translated] "Refer to the [accept](https://www.w3schools.com/tags/att_input_accept.asp) attribute description for more information."
    acceptedTypes: "يرجى الرجوع إلى وصف السمة [قبول] (https://www.w3schools.com/tags/att_input_accept.asp) للحصول على مزيد من المعلومات.",
    // [Auto-translated] "Arranges choice options in a multi-column layout. When set to 0, the options are displayed in a single line. Applies only to columns with \"Cell input type\" set to Radio Button Group or Checkboxes."
    columnColCount: "ترتيب خيارات الاختيار في تخطيط متعدد الأعمدة. عند التعيين إلى 0 ، يتم عرض الخيارات في سطر واحد. ينطبق فقط على الأعمدة التي تم تعيين \"نوع إدخال الخلية\" عليها على مجموعة أزرار الاختيار أو خانات الاختيار.",
    // [Auto-translated] "Select the data type that the user's browser can retrieve. This data is sourced either from past values entered by the user or from pre-configured values if any have been saved by the user for autocompletion."
    autocomplete: "حدد نوع البيانات التي يمكن لمتصفح المستخدم استردادها. يتم الحصول على هذه البيانات إما من القيم السابقة التي أدخلها المستخدم أو من القيم التي تم تكوينها مسبقا إذا تم حفظ أي منها بواسطة المستخدم لإكمالها التلقائي.",
    // "Applies when \"File source type\" is \"Local file\" or when camera is unavailable"
    filePlaceholder: "ينطبق عندما يكون \"نوع المصدر\" هو \"ملفات محلية\" أو عندما تكون الكاميرا غير متوفرة",
    // "Applies when \"File source type\" is \"Camera\"."
    photoPlaceholder: "ينطبق عندما يكون \"نوع المصدر\" هو \"الكاميرا\".",
    // "Applies when \"File source type\" is \"Local file or camera\"."
    fileOrPhotoPlaceholder: "ينطبق عندما يكون \"نوع المصدر\" هو \"الملفات المحلية أو الكاميرا\".",
    // "Arranges choice options in a multi-column layout. When set to 0, the options are displayed in a single line."
    colCount: "يرتب خيارات التحديد في تخطيط متعدد الأعمدة. عند التعيين على 0 ، يتم عرض الخيارات في سطر واحد.",
    masksettings: {
      // "Select if you want to store the question value with an applied mask in survey results."
      saveMaskedValue: "حدد ما إذا كنت تريد تخزين قيمة السؤال باستخدام قناع مطبق في نتائج الاستطلاع."
    },
    patternmask: {
      // "The pattern can contain string literals and the following placeholders: `9` - for a digit; `a` - for an upper- or lower-case letter; `#` - for a digit or an upper- or lower-case letter. Use backslash `\\` to escape a character."
      pattern: "يمكن أن يحتوي النمط على حرفي السلسلة والعناصر النائبة التالية: \"9\" - للرقم ؛ \"a\" - لحرف كبير أو صغير ؛ '#' - لرقم أو حرف كبير أو صغير. استخدم الشرطة المائلة للخلف '\\' للهروب من حرف."
    },
    datetimemask: {
      // "The pattern can contain separator characters and the following placeholders:<br>`m` - Month number.<br>`mm` - Month number, with leading zero for single-digit values.<br>`d` - Day of the month.<br>`dd` - Day of the month, with leading zero for single-digit values.<br>`yy` - The last two digits of the year.<br>`yyyy` - Four-digit year.<br>`H` - Hours in 24-hour format.<br>`HH` - Hours in 24-hour format, with leading zero for single-digit values.<br>`h` - Hours in 12-hour format.<br>`hh` - Hours in 12-hour format, with leading zero for single-digit values.<br>`MM` - Minutes.<br>`ss` - Seconds.<br>`TT` - 12-hour clock period in upper case (AM/PM).<br>`tt` - 12-hour clock period in lower case (am/pm)."
      pattern: "يمكن أن يحتوي النمط على أحرف فاصلة والعناصر النائبة التالية:<br>'m' - رقم الشهر.<br>\"mm\" - رقم الشهر ، مع صفر بادئ للقيم المكونة من رقم واحد. <br>'d' - يوم من الشهر. <br>\"dd\" - يوم من الشهر ، مع صفر بادئ للقيم المكونة من رقم واحد. <br>\"yy\" - آخر رقمين من السنة. <br>\"yyyy\" - سنة مكونة من أربعة أرقام. <br>\"H\" - ساعات بتنسيق 24 ساعة. <br>\"HH\" - ساعات بتنسيق 24 ساعة ، مع صفر بادئ للقيم المكونة من رقم واحد. <br>\"h\" - ساعات بتنسيق 12 ساعة. <br>\"hh\" - ساعات بتنسيق 12 ساعة ، مع صفر بادئ للقيم المكونة من رقم واحد. <br>\"مم\" - دقائق. <br>'ss' - ثواني. <br>\"TT\" - فترة ساعة 12 ساعة بأحرف كبيرة (صباحا / مساء). <br>\"TT\" - فترة ساعة 12 ساعة بأحرف صغيرة (صباحا / مساء)."
    },
    numericmask: {
      // "A symbol used to separate the fractional part from the integer part of a displayed number."
      decimalSeparator: "رمز يستخدم لفصل الجزء الكسري عن الجزء الصحيح من الرقم المعروض.",
      // "A symbol used to separate the digits of a large number into groups of three."
      thousandsSeparator: "رمز يستخدم لفصل أرقام عدد كبير إلى مجموعات من ثلاثة.",
      // "Limits how many digits to retain after the decimal point for a displayed number."
      precision: "يحد من عدد الأرقام التي سيتم الاحتفاظ بها بعد الفاصلة العشرية لرقم معروض."
    },
    currencymask: {
      // "One or several symbols to be displayed before the value."
      prefix: "رمز واحد أو عدة رموز ليتم عرضها قبل القيمة.",
      // "One or several symbols to be displayed after the value."
      suffix: "رمز واحد أو عدة رموز ليتم عرضها بعد القيمة."
    },
    theme: {
      // "This setting applies only to questions outside of a panel."
      isPanelless: "ينطبق هذا الإعداد فقط على الأسئلة خارج اللوحة.",
      // "Sets a supplementary color that highlights key survey elements."
      primaryColor: "يضبط لونا تكميليا يبرز عناصر الاستطلاع الرئيسية.",
      // "Adjusts the transparency of panels and question boxes relative to the survey background."
      panelBackgroundTransparency: "يضبط شفافية اللوحات ومربعات الأسئلة المتعلقة بخلفية الاستطلاع.",
      // "Adjusts the transparency of input elements relative to the survey background."
      questionBackgroundTransparency: "يضبط شفافية عناصر الإدخال بالنسبة لخلفية الاستطلاع.",
      // "Sets the corner radius for all rectangular elements. Enable the Advanced Mode if you want to set individual corner radius values for input elements or panels and question boxes."
      cornerRadius: "يضبط نصف قطر الزاوية لكل العناصر المستطيلة. قم بتمكين الوضع المتقدم إذا كنت تريد تعيين قيم نصف قطر زاوية فردية لعناصر الإدخال أو اللوحات ومربعات الأسئلة.",
      // "Sets the main background color of the survey."
      "--sjs-general-backcolor-dim": "يضبط لون الخلفية الرئيسي للاستطلاع."
    },
    header: {
      // "The \"Same as container\" option auto-adjusts the header content area width to fit into the HTML element the survey is placed in."
      inheritWidthFrom: "يقوم خيار \"نفس الحاوية\" بضبط عرض منطقة محتوى الرأس تلقائيا ليلائم عنصر HTML الذي يتم وضع الاستطلاع فيه.",
      // [Auto-translated] "The width of the header area that contains the survey title and description, measured in pixels."
      textAreaWidth: "عرض ناحية الرأس التي تحتوي على عنوان الاستطلاع ووصفه، مقاسا بالبكسل.",
      // [Auto-translated] "When enabled, the top of the survey overlays the bottom of the header."
      overlapEnabled: "عند التمكين، يقوم الجزء العلوي من الاستطلاع بتراكب الجزء السفلي من الرأس.",
      // [Auto-translated] "When set to 0, the height is calculated automatically to accommodate the header's content."
      mobileHeight: "عند التعيين إلى 0 ، يتم حساب الارتفاع تلقائيا لاستيعاب محتوى الرأس."
    },
    // "The \"Same as container\" option auto-adjusts the progress bar area width to fit into the HTML element the survey is placed in."
    progressBarInheritWidthFrom: "يقوم خيار \"نفس الحاوية\" بضبط عرض منطقة شريط التقدم تلقائيا ليلائم عنصر HTML الذي يتم وضع الاستطلاع فيه.",
    // "Used when the 'Survey layout' is set to 'Single input field per page'. In this layout, the matrix is split so that each input field appears on a separate page. Use the {rowIndex} placeholder to insert auto numbering, {rowTitle} or {rowName} to reference the row's title or ID, and {row.columnid} to include the value of a specific matrix column."
    singleInputTitleTemplate: "يستخدم عند تعيين \"تخطيط الاستطلاع\" إلى \"حقل إدخال واحد لكل صفحة\". في هذا التخطيط، يتم تقسيم المصفوفة بحيث يظهر كل حقل إدخال في صفحة منفصلة. استخدم العنصر النائب {rowIndex} لإدراج الترقيم التلقائي و{rowTitle} أو {rowName} للإشارة إلى عنوان الصف أو معرفه، و{row.columnid} لتضمين قيمة عمود مصفوفة معين."
  },
  // Properties
  p: {
    title: {
      // "title"
      name: "title",
      // "Leave it empty, if it is the same as 'Name'"
      title: "Leave it empty, if it is the same as 'Name'"
    },
    // "Allow multiple selection"
    multiSelect: "متعدد الإختيار",
    // "Show image and video captions"
    showLabel: "عرض الملصق",
    // [Auto-translated] "Swap the order of Yes and No"
    swapOrder: "مبادلة ترتيب نعم ولا",
    // "Value"
    value: "القيمة",
    // [Auto-translated] "Tab alignment"
    tabAlign: "محاذاة علامات التبويب",
    // [Auto-translated] "File source type"
    sourceType: "نوع مصدر الملف",
    // [Auto-translated] "Fit to container"
    fitToContainer: "يصلح للحاوية",
    // [Auto-translated] "Set value expression"
    setValueExpression: "تعيين تعبير القيمة",
    // "Description"
    description: "الوصف", // Auto-generated string
    // "Logo fit"
    logoFit: "تناسب الشعار",
    // "Pages"
    pages: "الصفحات", // Auto-generated string
    // [Auto-translated] "Questions"
    questions: "الاسئله", // Auto-generated string
    // "Triggers"
    triggers: "المحفزات",
    // "Custom variables"
    calculatedValues: "القيم المحسوبة",
    // [Auto-translated] "Survey id"
    surveyId: "معرف الاستطلاع", // Auto-generated string
    // [Auto-translated] "Survey post id"
    surveyPostId: "معرف وظيفة الاستطلاع", // Auto-generated string
    // [Auto-translated] "Survey show data saving"
    surveyShowDataSaving: "يظهر الاستطلاع توفير البيانات", // Auto-generated string
    // "Question description alignment"
    questionDescriptionLocation: "موقع وصف السؤال",
    // "Progress bar type"
    progressBarType: "نوع شريط التقدم", // Auto-generated string
    // [Auto-translated] "Show table of contents (TOC)"
    showTOC: "إظهار جدول المحتويات (جدول المحتويات)",
    // [Auto-translated] "TOC alignment"
    tocLocation: "محاذاة جدول المحتويات",
    // "Question title pattern"
    questionTitlePattern: "تنسيق عنوان السؤال", // Auto-generated string
    // "Survey width mode"
    widthMode: "نمط عٌرض الشاشة",
    // [Auto-translated] "Show brand info"
    showBrandInfo: "عرض معلومات العلامة التجارية", // Auto-generated string
    // "Use display values in dynamic texts"
    useDisplayValuesInDynamicTexts: "إستخدم عرض القيم في العنوان",
    // "Visible if"
    visibleIf: "مرئي عندما", // Auto-generated string
    // "Default value expression"
    defaultValueExpression: "العملية الحسابية الإفتراضية",
    // "Required if"
    requiredIf: "مطلوب عندما", // Auto-generated string
    // [Auto-translated] "Reset value if"
    resetValueIf: "إعادة تعيين القيمة إذا",
    // [Auto-translated] "Set value if"
    setValueIf: "تعيين قيمة إذا",
    // "Validation rules"
    validators: "المدققات",
    // "Bindings"
    bindings: "الإرتباطات", // Auto-generated string
    // [Auto-translated] "Render as"
    renderAs: "عرض ك", // Auto-generated string
    // [Auto-translated] "Attach original items"
    attachData: "إرفاق العناصر الأصلية", // Auto-generated string
    // "Choices"
    choices: "الإختيارات",
    // "Choices by url"
    choicesByUrl: "خيار عن طريق رابط إلكتروني URL", // Auto-generated string
    // "Currency"
    currency: "currency", // Auto-generated string
    // [Auto-translated] "Cell hint"
    cellHint: "تلميح الخلية", // Auto-generated string
    // [Auto-translated] "Total maximum fraction digits"
    totalMaximumFractionDigits: "إجمالي الحد الأقصى لأرقام الكسور", // Auto-generated string
    // [Auto-translated] "Total minimum fraction digits"
    totalMinimumFractionDigits: "إجمالي الحد الأدنى لأرقام الكسور", // Auto-generated string
    // "Columns"
    columns: "الأعمدة", // Auto-generated string
    // [Auto-translated] "Detail elements"
    detailElements: "عناصر التفاصيل", // Auto-generated string
    // [Auto-translated] "Allow adaptive actions"
    allowAdaptiveActions: "السماح بالإجراءات التكيفية", // Auto-generated string
    // "Default row value"
    defaultRowValue: "قيمة الصف الإفتراضية", // Auto-generated string
    // [Auto-translated] "Auto-expand new row details"
    detailPanelShowOnAdding: "تفاصيل الصف الجديد للتوسيع التلقائي",
    // [Auto-translated] "Choices lazy load enabled"
    choicesLazyLoadEnabled: "تمكين التحميل البطيء للاختيارات", // Auto-generated string
    // [Auto-translated] "Choices lazy load page size"
    choicesLazyLoadPageSize: "اختيارات كسول تحميل حجم الصفحة", // Auto-generated string
    // [Auto-translated] "Input field component"
    inputFieldComponent: "مكون حقل الإدخال", // Auto-generated string
    // [Auto-translated] "Item component"
    itemComponent: "مكون العنصر", // Auto-generated string
    // "Min"
    min: "أقل", // Auto-generated string
    // "Max"
    max: "أكبر", // Auto-generated string
    // "Min value expression"
    minValueExpression: "minValueExpression", // Auto-generated string
    // "Max value expression"
    maxValueExpression: "maxValueExpression", // Auto-generated string
    // "Step"
    step: "step", // Auto-generated string
    // "Items for auto-suggest"
    dataList: "قائمة البيانات",
    // "Input field width (in characters)"
    inputSize: "inputSize",
    // [Auto-translated] "Item label width"
    itemTitleWidth: "عرض ملصق العنصر",
    // [Auto-translated] "Input value alignment"
    inputTextAlignment: "محاذاة قيمة الإدخال",
    // [Auto-translated] "Elements"
    elements: "عناصر", // Auto-generated string
    // [Auto-translated] "Content"
    content: "محتوى", // Auto-generated string
    // "Navigation title"
    navigationTitle: "navigationTitle", // Auto-generated string
    // "Navigation description"
    navigationDescription: "navigationDescription", // Auto-generated string
    // [Auto-translated] "Long tap"
    longTap: "نقرة طويلة", // Auto-generated string
    // "Expand input field dynamically"
    autoGrow: "تمدد تلقائي",
    // [Auto-translated] "Enable resize handle"
    allowResize: "تمكين مقبض تغيير الحجم",
    // [Auto-translated] "Accept carriage return"
    acceptCarriageReturn: "قبول إرجاع النقل", // Auto-generated string
    // [Auto-translated] "Display mode"
    displayMode: "وضع العرض",
    // [Auto-translated] "Rate type"
    rateType: "نوع السعر", // Auto-generated string
    // "Label"
    label: "المسمى", // Auto-generated string
    // "Content mode"
    contentMode: "نمط عرض المحتوى",
    // "Image and thumbnail fit"
    imageFit: "إحتواء الصورة",
    // [Auto-translated] "Alt text"
    altText: "نص بديل",
    // "Height"
    height: "height", // Auto-generated string
    // [Auto-translated] "Height on smartphones"
    mobileHeight: "الارتفاع على الهواتف الذكية",
    // "Pen color"
    penColor: "لون القلم", // Auto-generated string
    // "Background color"
    backgroundColor: "لون الخلفية",
    // [Auto-translated] "Template elements"
    templateElements: "عناصر القالب", // Auto-generated string
    // [Auto-translated] "Operator"
    operator: "المشغل", // Auto-generated string
    // [Auto-translated] "Is variable"
    isVariable: "متغير", // Auto-generated string
    // [Auto-translated] "Run expression"
    runExpression: "تشغيل التعبير", // Auto-generated string
    // "Show caption"
    showCaption: "showCaption", // Auto-generated string
    // "Icon name"
    iconName: "iconName", // Auto-generated string
    // "Icon size"
    iconSize: "iconSize", // Auto-generated string
    // [Auto-translated] "Precision"
    precision: "دقة", // Auto-generated string
    // [Auto-translated] "Matrix drag handle area"
    matrixDragHandleArea: "منطقة مقبض سحب المصفوفة", // Auto-generated string
    // [Auto-translated] "Background image"
    backgroundImage: "صورة الخلفية",
    // [Auto-translated] "Background image fit"
    backgroundImageFit: "ملاءمة صورة الخلفية", // Auto-generated string
    // [Auto-translated] "Background image attachment"
    backgroundImageAttachment: "مرفق صورة الخلفية", // Auto-generated string
    // [Auto-translated] "Background opacity"
    backgroundOpacity: "عتامة الخلفية", // Auto-generated string
    // [Auto-translated] "Allow selective ranking"
    selectToRankEnabled: "السماح بالترتيب الانتقائي",
    // [Auto-translated] "Ranking area alignment"
    selectToRankAreasLayout: "ترتيب محاذاة المنطقة",
    // [Auto-translated] "Text to show if all options are selected"
    selectToRankEmptyRankedAreaText: "نص لإظهار ما إذا كانت كل الخيارات محددة",
    // [Auto-translated] "Placeholder text for the ranking area"
    selectToRankEmptyUnrankedAreaText: "نص العنصر النائب لمنطقة الترتيب",
    // [Auto-translated] "Allow camera access"
    allowCameraAccess: "السماح بالوصول إلى الكاميرا", // Auto-generated string
    // [Auto-translated] "Rating icon color mode"
    scaleColorMode: "وضع لون أيقونة التصنيف",
    // [Auto-translated] "Smileys color scheme"
    rateColorMode: "نظام ألوان الوجوه الضاحكة",
    // [Auto-translated] "Copy display value"
    copyDisplayValue: "نسخ قيمة العرض", // Auto-generated string
    // [Auto-translated] "Column span"
    effectiveColSpan: "امتداد العمود",
    // [Auto-translated] "Progress bar area width"
    progressBarInheritWidthFrom: "عرض منطقة شريط التقدم",
    // [Auto-translated] "Theme name"
    themeName: "اسم الموضوع"
  },
  theme: {
    // "Advanced mode"
    advancedMode: "الوضع المتقدم",
    // "Page"
    pageTitle: "خط عنوان الصفحة",
    // "Question box"
    questionTitle: "خط عنوان السؤال",
    // "Input element"
    editorPanel: "عنصر الإدخال",
    // [Auto-translated] "Lines"
    lines: "اسطر",
    // [Auto-translated] "Default"
    primaryDefaultColor: "افتراضي",
    // [Auto-translated] "Hover"
    primaryDarkColor: "حم",
    // [Auto-translated] "Selected"
    primaryLightColor: "المحدد",
    // [Auto-translated] "Background color"
    backgroundDimColor: "لون الخلفية",
    // "Corner radius"
    cornerRadius: "نصف قطر الزاوية",
    // [Auto-translated] "Default background"
    backcolor: "الخلفية الافتراضية",
    // [Auto-translated] "Hover background"
    hovercolor: "خلفية التحويم",
    // [Auto-translated] "Border decoration"
    borderDecoration: "زخرفة الحدود",
    // [Auto-translated] "Font color"
    fontColor: "لون الخط",
    // [Auto-translated] "Background color"
    backgroundColor: "لون الخلفية",
    // [Auto-translated] "Default color"
    primaryForecolor: "اللون الافتراضي",
    // [Auto-translated] "Disabled color"
    primaryForecolorLight: "لون معطل",
    // [Auto-translated] "Font"
    font: "الخط",
    // [Auto-translated] "Darker"
    borderDefault: "اظلم",
    // [Auto-translated] "Lighter"
    borderLight: "أخف",
    // [Auto-translated] "Font family"
    fontFamily: "عائلة الخط",
    // [Auto-translated] "Regular"
    fontWeightRegular: "منتظم",
    // [Auto-translated] "Heavy"
    fontWeightHeavy: "ثقيل",
    // [Auto-translated] "Semi-bold"
    fontWeightSemiBold: "شبه غامق",
    // [Auto-translated] "Bold"
    fontWeightBold: "جريء",
    // [Auto-translated] "Color"
    color: "لون",
    // [Auto-translated] "Placeholder color"
    placeholderColor: "لون العنصر النائب",
    // [Auto-translated] "Size"
    size: "حجم",
    // [Auto-translated] "Opacity"
    opacity: "العتامه",
    // [Auto-translated] "X"
    boxShadowX: "X",
    // [Auto-translated] "Y"
    boxShadowY: "Y",
    // [Auto-translated] "Add Shadow Effect"
    boxShadowAddRule: "إضافة تأثير الظل",
    // [Auto-translated] "Blur"
    boxShadowBlur: "طمس",
    // [Auto-translated] "Spread"
    boxShadowSpread: "انتشار",
    // [Auto-translated] "Drop"
    boxShadowDrop: "قطرة",
    // [Auto-translated] "Inner"
    boxShadowInner: "باطن",
    names: {
      // [Auto-translated] "Default"
      default: "افتراضي",
      // [Auto-translated] "Sharp"
      sharp: "حاد",
      // [Auto-translated] "Borderless"
      borderless: "بلا حدود",
      // [Auto-translated] "Flat"
      flat: "وطيء",
      // [Auto-translated] "Plain"
      plain: "واضح",
      // [Auto-translated] "Double Border"
      doubleborder: "حدود مزدوجة",
      // [Auto-translated] "Layered"
      layered: "الطبقات",
      // [Auto-translated] "Solid"
      solid: "صلب",
      // [Auto-translated] "3D"
      threedimensional: ".3D",
      // [Auto-translated] "Contrast"
      contrast: "تباين"
    },
    colors: {
      // [Auto-translated] "Teal"
      teal: "البط البري",
      // [Auto-translated] "Blue"
      blue: "أزرق",
      // [Auto-translated] "Purple"
      purple: "بنفسجي",
      // [Auto-translated] "Orchid"
      orchid: "السحلب",
      // [Auto-translated] "Tulip"
      tulip: "توليب",
      // [Auto-translated] "Brown"
      brown: "أسمر",
      // [Auto-translated] "Green"
      green: "أخضر",
      // [Auto-translated] "Gray"
      gray: "رمادي"
    }
  },
  creatortheme: {
    // [Auto-translated] "Surface background"
    "--sjs-special-background": "خلفية السطح",
    // [Auto-translated] "Primary"
    "--sjs-primary-background-500": "ابتدائي",
    // [Auto-translated] "Secondary"
    "--sjs-secondary-background-500": "ثانوي",
    // [Auto-translated] "Surface"
    surfaceScale: "سطح",
    // [Auto-translated] "UI elements"
    userInterfaceBaseUnit: "عناصر واجهة المستخدم",
    // [Auto-translated] "Font"
    fontScale: "الخط",
    names: {
      // [Auto-translated] "Survey Creator 2020"
      sc2020: "منشئ الاستطلاع 2020",
      // [Auto-translated] "Light"
      "default-light": "ضوء",
      // [Auto-translated] "Dark"
      "default-dark": "داكن",
      // [Auto-translated] "Contrast"
      "default-contrast": "تباين"
    }
  }
};

//Uncomment this line on creating a translation file. You should replace "en" and enStrings with your locale ("fr", "de" and so on) and your variable.
setupLocale({ localeCode: "ar", strings: arStrings });